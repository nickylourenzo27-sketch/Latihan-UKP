#!/usr/bin/env node
// Bangun dist/pelatih-ukp-offline.html: satu berkas HTML mandiri yang berjalan tanpa internet (mis. di pesawat).
// - <link rel=stylesheet> lokal  → <style> berisi isinya
// - <script src> lokal           → <script> inline berisi isinya (urutan dipertahankan; "</script" di-escape)
// - Google Fonts                  → @font-face tertanam (subset latin woff2 sebagai data:font/woff2;base64)
// - <meta name="pelatih-ukp-offline"> + <script>window.UKP_OFFLINE = true</script> di <head> sebelum core.js
// Komentar ARTIFACT-* dipertahankan. Salinan woff2 di-cache di dist/fonts/; bila unduhan gagal, font sistem dipakai.
// Pakai: node tools/build-offline.js [--tanpa-font] [--keluar <berkas.html>]
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const DIR_FONT = path.join(DIST, 'fonts');
const MANIFES_FONT = path.join(DIR_FONT, 'fonts.json');
const URL_FONT_CSS = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap';
// User-Agent Chrome agar Google Fonts mengirim woff2 (UA lain bisa mendapat ttf)
const UA_CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const TARGET_BYTE = 8 * 1024 * 1024;

const argv = process.argv.slice(2);
const TANPA_FONT = argv.includes('--tanpa-font');
const iKeluar = argv.indexOf('--keluar');
const KELUAR = iKeluar >= 0 && argv[iKeluar + 1] ? path.resolve(argv[iKeluar + 1]) : path.join(DIST, 'pelatih-ukp-offline.html');

const peringatan = [];
const peringatkan = m => { peringatan.push(m); console.warn('peringatan: ' + m); };
const mb = n => (n / 1024 / 1024).toFixed(2).replace('.', ',') + ' MB';

// isi <script> inline tidak boleh memuat "</script" (menutup tag) atau "<!--" (mode escape skrip HTML)
const lolosSkrip = t => String(t).replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '\\x3C!--');
const lolosGaya = t => String(t).replace(/<\/(style)/gi, '<\\/$1');
const atribut = (tag, nama) => { const m = new RegExp('\\s' + nama + '\\s*=\\s*("([^"]*)"|\'([^\']*)\'|([^\\s>]+))', 'i').exec(tag); return m ? (m[2] != null ? m[2] : m[3] != null ? m[3] : m[4]) : null; };
const lokal = u => !!u && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u);
const bacaLokal = rel => { const p = path.resolve(ROOT, rel.split(/[?#]/)[0]); if (!p.startsWith(ROOT + path.sep)) throw new Error('jalur di luar proyek: ' + rel); return fs.readFileSync(p, 'utf8'); };

async function ambil(url, jenis) {
  const r = await fetch(url, { headers: { 'User-Agent': UA_CHROME, Accept: jenis === 'teks' ? 'text/css,*/*;q=0.1' : '*/*' }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' untuk ' + url);
  return jenis === 'teks' ? r.text() : Buffer.from(await r.arrayBuffer());
}

// blok "/* latin */" saja (bukan latin-ext, cyrillic, dll.), dikelompokkan per (keluarga, URL): font variabel memakai satu berkas untuk semua bobot
function uraiCssLatin(css) {
  const grup = new Map();
  const re = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g; let m;
  while ((m = re.exec(css))) {
    const isi = m[1];
    const prop = n => { const x = new RegExp('(?:^|;)\\s*' + n + '\\s*:\\s*([^;]+)', 'i').exec(isi); return x ? x[1].trim() : null; };
    const keluarga = (prop('font-family') || '').replace(/^['"]|['"]$/g, '');
    const url = (/url\(\s*['"]?([^'")]+\.woff2)['"]?\s*\)/i.exec(prop('src') || '') || [])[1];
    const bobot = Number(prop('font-weight')) || 400;
    if (!keluarga || !url) continue;
    const kunci = keluarga + '|' + url;
    if (!grup.has(kunci)) grup.set(kunci, { keluarga, gaya: prop('font-style') || 'normal', bobot: [], unicodeRange: prop('unicode-range'), sumber: url });
    grup.get(kunci).bobot.push(bobot);
  }
  return [...grup.values()].map(f => {
    f.bobot = [...new Set(f.bobot)].sort((a, b) => a - b);
    const slug = f.keluarga.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const rentang = f.bobot.length > 1 ? f.bobot[0] + '-' + f.bobot[f.bobot.length - 1] : String(f.bobot[0]);
    f.berkas = slug + '-latin-' + rentang + '.woff2';
    return f;
  });
}

const woff2Sah = buf => Buffer.isBuffer(buf) && buf.length > 1000 && buf.slice(0, 4).toString('latin1') === 'wOF2';
const bacaCache = nama => { try { const b = fs.readFileSync(path.join(DIR_FONT, nama)); return woff2Sah(b) ? b : null; } catch (e) { return null; } };

// hasil: [{ keluarga, gaya, bobot[], unicodeRange, berkas, data: Buffer }] atau [] (font sistem)
async function siapkanFont() {
  if (TANPA_FONT) { console.log('font: dilewati (--tanpa-font); font sistem dipakai'); return []; }
  fs.mkdirSync(DIR_FONT, { recursive: true });
  let manifesLama = [];
  try { manifesLama = JSON.parse(fs.readFileSync(MANIFES_FONT, 'utf8')); if (!Array.isArray(manifesLama)) manifesLama = []; } catch (e) { manifesLama = []; }
  let daftar = null;
  try {
    const css = await ambil(URL_FONT_CSS, 'teks');
    daftar = uraiCssLatin(css);
    if (!daftar.length) throw new Error('blok /* latin */ berformat woff2 tidak ditemukan di CSS Google Fonts (' + css.length + ' byte)');
  } catch (e) {
    if (manifesLama.length) { peringatkan('CSS Google Fonts tidak dapat diunduh (' + e.message + '); memakai cache dist/fonts/'); daftar = manifesLama; }
    else { peringatkan('font tidak dapat diunduh (' + e.message + '); berkas memakai font sistem (CSS sudah punya cadangan)'); return []; }
  }
  const hasil = [];
  for (const f of daftar) {
    const lama = manifesLama.find(x => x.berkas === f.berkas);
    let data = lama && lama.sumber === f.sumber ? bacaCache(f.berkas) : null;
    if (data) { console.log('font: ' + f.berkas + ' (cache, ' + (data.length / 1024).toFixed(0) + ' KB)'); }
    else {
      try {
        data = await ambil(f.sumber, 'biner');
        if (!woff2Sah(data)) throw new Error('bukan woff2');
        fs.writeFileSync(path.join(DIR_FONT, f.berkas), data);
        console.log('font: ' + f.berkas + ' diunduh (' + (data.length / 1024).toFixed(0) + ' KB)');
      } catch (e) {
        data = bacaCache(f.berkas);
        if (data) peringatkan(f.berkas + ' gagal diunduh (' + e.message + '); memakai salinan cache');
        else { peringatkan(f.berkas + ' gagal diunduh (' + e.message + '); ' + f.keluarga + ' ' + f.bobot.join('/') + ' memakai font sistem'); continue; }
      }
    }
    hasil.push(Object.assign({}, f, { data }));
  }
  if (hasil.length) fs.writeFileSync(MANIFES_FONT, JSON.stringify(hasil.map(({ data, ...f }) => f), null, 1) + '\n');
  return hasil;
}

function cssFontTertanam(font) {
  return font.map(f => {
    const bobot = f.bobot.length > 1 ? f.bobot[0] + ' ' + f.bobot[f.bobot.length - 1] : String(f.bobot[0]);
    return "@font-face{font-family:'" + f.keluarga.replace(/'/g, '') + "';font-style:" + f.gaya + ';font-weight:' + bobot + ';font-display:swap;'
      + "src:url(data:font/woff2;base64," + f.data.toString('base64') + ") format('woff2');" + (f.unicodeRange ? 'unicode-range:' + f.unicodeRange + ';' : '') + '}';
  }).join('\n');
}

async function main() {
  const t0 = Date.now();
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const penanda = (html.match(/<!--ARTIFACT-[A-Z-]+-->/g) || []);
  const versi = (/UKP\.versi\s*=\s*['"]([^'"]+)['"]/.exec(fs.readFileSync(path.join(ROOT, 'js', 'core.js'), 'utf8')) || [])[1] || '0';
  const d = new Date(); const tanggal = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const font = await siapkanFont();
  let out = html; let nGaya = 0, nSkrip = 0, fontDisisipkan = false;

  // 1. tag <link>: hapus preconnect/stylesheet Google Fonts (diganti @font-face tertanam), inline stylesheet lokal.
  //    Penggantian memakai fungsi agar "$&", "$1" di isi berkas tidak ditafsirkan sebagai pola ganti.
  out = out.replace(/[ \t]*<link\b[^>]*>[ \t]*(\r?\n)?/gi, (tag, nl) => {
    const rel = (atribut(tag, 'rel') || '').toLowerCase(); const href = atribut(tag, 'href') || '';
    if (/^https?:\/\/fonts\.(googleapis|gstatic)\.com(\/|$)/i.test(href)) {
      if (rel.split(/\s+/).includes('stylesheet') && !fontDisisipkan && font.length) { fontDisisipkan = true; return '<style id="font-tertanam">\n' + cssFontTertanam(font) + '\n</style>' + (nl || ''); }
      return '';
    }
    if (rel.split(/\s+/).includes('stylesheet') && lokal(href)) { nGaya++; return '<style data-sumber="' + href + '">\n' + lolosGaya(bacaLokal(href)) + '\n</style>' + (nl || ''); }
    if (rel.split(/\s+/).includes('stylesheet')) peringatkan('stylesheet eksternal dibiarkan (butuh internet): ' + href);
    // manifest PWA hanya berlaku di http(s); dari file:// hanya memicu galat konsol → dibuang (service worker juga dilewati app.js saat UKP_OFFLINE)
    if (rel.split(/\s+/).includes('manifest')) return '';
    // ikon berkas lokal → data URI agar berkas tetap mandiri
    if (/(^|\s)(icon|apple-touch-icon|mask-icon)(\s|$)/.test(rel) && lokal(href)) {
      const ext = (/\.([a-z0-9]+)$/i.exec(href.split(/[?#]/)[0]) || [])[1] || ''; const mime = { png: 'image/png', svg: 'image/svg+xml', ico: 'image/x-icon', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' }[ext.toLowerCase()];
      const p = path.resolve(ROOT, href.split(/[?#]/)[0]);
      if (!mime || !p.startsWith(ROOT + path.sep) || !fs.existsSync(p)) { peringatkan('ikon dibuang (tidak dapat disematkan): ' + href); return ''; }
      return tag.replace(/(\shref\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/i, (m, a) => a + '"data:' + mime + ';base64,' + fs.readFileSync(p).toString('base64') + '"') + (nl || '');
    }
    if (lokal(href)) peringatkan('<link rel="' + rel + '"> lokal dibiarkan: ' + href);
    return tag;
  });
  // komentar PWA di <head> tidak berlaku untuk berkas tunggal
  out = out.replace(/<!--\s*PWA:[\s\S]*?-->/, '<!-- versi offline berkas tunggal: manifest PWA dan service worker tidak dipakai (window.UKP_OFFLINE) -->');
  // 2. <script src> lokal → inline (urutan dokumen dipertahankan)
  out = out.replace(/<script\b([^>]*)><\/script>/gi, (tag, attrs) => {
    const src = atribut(' ' + attrs, 'src');
    if (!src) return tag;
    if (!lokal(src)) { peringatkan('skrip eksternal dibiarkan (butuh internet): ' + src); return tag; }
    nSkrip++;
    return '<script data-sumber="' + src + '">\n' + lolosSkrip(bacaLokal(src)) + '\n</script>';
  });
  // 3. penanda versi offline + bendera UKP_OFFLINE di <head>, sebelum skrip apa pun (termasuk core.js)
  const sisipan = '<meta name="pelatih-ukp-offline" content="' + versi + ' ' + tanggal + '">\n<script>window.UKP_OFFLINE = true;</script>\n';
  const reViewport = /(<meta\s+name="viewport"[^>]*>\r?\n?)/i;
  out = reViewport.test(out) ? out.replace(reViewport, (m) => m + sisipan) : out.replace(/<head>\r?\n?/i, m => m + sisipan);
  out = out.replace(/<title>([^<]*)<\/title>/i, (m, t) => '<title>' + (/offline/i.test(t) ? t : t.trim() + ' (offline)') + '</title>');

  // pemeriksaan
  const masalah = [];
  // kerangka: dokumen tanpa isi <script>/<style> (isi berkas sumber bisa memuat teks mirip tag)
  const kerangka = out.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>').replace(/(<style\b[^>]*>)[\s\S]*?<\/style>/gi, '$1</style>');
  if (!nGaya) masalah.push('tidak ada stylesheet lokal yang disisipkan');
  if (!nSkrip) masalah.push('tidak ada skrip lokal yang disisipkan');
  if (/<script\b[^>]*\bsrc=["']?(?!https?:)/i.test(kerangka)) masalah.push('masih ada <script src> lokal');
  if (/<link\b[^>]*rel=["']?stylesheet[^>]*href=["']?(?!https?:)/i.test(kerangka)) masalah.push('masih ada stylesheet lokal');
  if (/<link\b[^>]*rel=["']?manifest/i.test(kerangka)) masalah.push('masih ada <link rel="manifest">');
  if (/fonts\.(googleapis|gstatic)\.com/i.test(kerangka)) masalah.push('masih ada rujukan Google Fonts di luar skrip');
  const nTagSkrip = (kerangka.match(/<script\b/gi) || []).length;
  const nInline = (html.match(/<script\b(?![^>]*\bsrc\s*=)[^>]*>/gi) || []).length; // skrip inline di index.html (mis. penjaga muat)
  if (nTagSkrip !== nSkrip + nInline + 1) masalah.push('jumlah <script> ' + nTagSkrip + ' ≠ ' + (nSkrip + nInline + 1) + ' (isi skrip memutus tag?)');
  for (const p of penanda) if (!out.includes(p)) masalah.push('penanda ' + p + ' hilang');
  if (out.indexOf('window.UKP_OFFLINE = true') > out.indexOf('data-sumber="js/core.js"')) masalah.push('UKP_OFFLINE tidak mendahului core.js');
  if (masalah.length) { console.error('GAGAL: ' + masalah.join('; ')); process.exit(1); }

  fs.mkdirSync(path.dirname(KELUAR), { recursive: true });
  fs.writeFileSync(KELUAR, out, 'utf8');
  const ukuran = Buffer.byteLength(out, 'utf8');
  const rel = path.relative(ROOT, KELUAR) || KELUAR;
  console.log(rel + ' ditulis: ' + ukuran.toLocaleString('id-ID') + ' byte (' + mb(ukuran) + ') · ' + nGaya + ' stylesheet, ' + nSkrip + ' skrip, '
    + (font.length ? font.length + ' berkas font tertanam (' + font.map(f => f.keluarga + ' ' + f.bobot.join('/')).join('; ') + ')' : 'font sistem') + ' · versi ' + versi + ' ' + tanggal + ' · ' + (Date.now() - t0) + ' ms');
  if (ukuran >= TARGET_BYTE) peringatkan('ukuran ' + mb(ukuran) + ' melampaui target 8 MB');
  else console.log('ukuran di bawah target 8 MB (' + mb(TARGET_BYTE - ukuran) + ' tersisa)');
  if (peringatan.length) console.log(peringatan.length + ' peringatan (lihat di atas)');
}

main().catch(e => { console.error('GAGAL: ' + (e && e.stack || e)); process.exit(1); });
