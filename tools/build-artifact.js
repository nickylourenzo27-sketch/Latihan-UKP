#!/usr/bin/env node
// Bangun dist/artifact.html: isi index.html tanpa pembungkus doctype/html/head/body (untuk dipublikasikan sebagai Artifact)
const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
const crypto = require('crypto');
const swPath = path.join(root, 'sw.js');
// v9.4 (FB1) cap versi: index.html rilis merujuk skrip dan stylesheet lokal dengan ?v=<VERSI> (VERSI sama dengan sw.js). Halaman yang
// baru dibuka langsung memakai aset versi baru walau service worker lama masih memegang kendali (lihat sw.js cacheDulu).
// Langkah: buang cap lama (normalkan) → hitung VERSI dari isi aset dengan index.html yang SUDAH dinormalkan → tulis cap baru.
// Idempoten: menjalankan alat ini dua kali menghasilkan berkas yang sama. dist/artifact.html dibangun dari index.html TANPA cap
// (host Artifact memetakan jalur berkas apa adanya).
const lokalCap = u => !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#|data:)/i.test(u);
const tanpaCap = u => u.replace(/([?&])v=[^&#"']*(&?)/, (m, a, b) => (a === '?' ? (b ? '?' : '') : (b ? '&' : ''))).replace(/[?&]$/, '');
// ubah setiap <script src> lokal dan <link rel="stylesheet" href> lokal di html dengan f(url)
function petakanAset(html, f) {
  html = html.replace(/(<script\b[^>]*\bsrc\s*=\s*)(["'])([^"']+)\2/gi, (m, a, q, u) => lokalCap(u) ? a + q + f(u) + q : m);
  return html.replace(/<link\b[^>]*>/gi, tag => {
    const rel = (tag.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    if (!/\bstylesheet\b/i.test(rel)) return tag;
    return tag.replace(/(\bhref\s*=\s*)(["'])([^"']+)\2/i, (m, a, q, u) => lokalCap(u) ? a + q + f(u) + q : m);
  });
}
const normalkan = html => petakanAset(html, tanpaCap);
const pasangCap = (html, versi) => petakanAset(normalkan(html), u => { const i = u.indexOf('#'); const dasar = i < 0 ? u : u.slice(0, i); return dasar + (dasar.includes('?') ? '&' : '?') + 'v=' + versi + (i < 0 ? '' : u.slice(i)); });
const indexAsli = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let html = normalkan(indexAsli);
// penjaga muat (index.html): TOTAL = jumlah <script src> lokal, ditulis ulang agar teks "n/TOTAL modul" tetap benar saat skrip bertambah
(function stempelTotal() {
  const n = (html.match(/<script\b[^>]*\bsrc\s*=\s*["'](?!https?:)[^"']+["']/gi) || []).length;
  const baru = html.replace(/(\bTOTAL = )\d+(,)/, '$1' + n + '$2');
  if (baru !== html) { html = baru; console.log('index.html: penjaga muat TOTAL = ' + n); }
})();
const ambil = (a, b) => { const i = html.indexOf(a), j = html.indexOf(b); if (i < 0 || j < 0) throw new Error('penanda ' + a + ' / ' + b + ' tidak ditemukan'); return html.slice(i + a.length, j); };
const head = ambil('<!--ARTIFACT-START-->', '<!--ARTIFACT-HEAD-END-->');
const body = ambil('<!--ARTIFACT-BODY-START-->', '<!--ARTIFACT-BODY-END-->');
const out = head.trim() + '\n' + body.trim() + '\n';
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'artifact.html'), out);
console.log('dist/artifact.html ditulis (' + out.length + ' byte)');

// sw.js: tulis ulang blok <ASET-OTOMATIS> — VERSI = hash isi semua aset (index.html, skrip, stylesheet, manifest, ikon) dan daftar aset dari
// index.html. Pengguna offline hanya menerima pembaruan bila isi sw.js berubah, jadi jalankan skrip ini setiap kali aset berubah
// (sebelum memublikasikan Artifact atau mengunggah ke hosting statis). Berkas pendamping baru yang harus ikut dipublikasikan:
// sw.js, manifest.webmanifest, icons/*.png, icons/ikon.svg.
// VERSI = hash isi aset; index.html ikut dihitung dalam bentuk TANPA cap (html di atas), jadi cap tidak mengubah VERSI.
let VERSI = null;
(function stempelServiceWorker() {
  const sw = fs.existsSync(swPath) ? fs.readFileSync(swPath, 'utf8') : null;
  const A = '/* <ASET-OTOMATIS>', B = '/* </ASET-OTOMATIS> */';
  const i = sw == null ? -1 : sw.indexOf(A), j = sw == null ? -1 : sw.indexOf(B);
  if (sw != null && (i < 0 || j < 0)) throw new Error('sw.js: blok <ASET-OTOMATIS> tidak ditemukan');
  const lokal = u => !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(u);
  const normal = u => u.replace(/&amp;/g, '&').split(/[?#]/)[0].replace(/^\.\//, '');
  const wajib = ['index.html'], opsional = [];
  html.replace(/<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi, (m, u) => { if (lokal(u)) wajib.push(normal(u)); return m; });
  html.replace(/<link\b[^>]*>/gi, tag => {
    const rel = (tag.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const href = (tag.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1];
    if (!href || !lokal(href)) return tag;
    if (/\bstylesheet\b/i.test(rel)) wajib.push(normal(href)); else if (/\b(?:manifest|icon|apple-touch-icon)\b/i.test(rel)) opsional.push(normal(href));
    return tag;
  });
  const dirIkon = path.join(root, 'icons');
  if (fs.existsSync(dirIkon)) fs.readdirSync(dirIkon).filter(f => /\.(?:png|svg|webp|ico)$/i.test(f)).sort().forEach(f => opsional.push('icons/' + f));
  const ada = p => { const ok = fs.existsSync(path.join(root, p)); if (!ok) console.warn('sw.js: aset tidak ditemukan, dilewati: ' + p); return ok; };
  const W = Array.from(new Set(wajib)).filter(ada);
  const O = Array.from(new Set(opsional)).filter(p => !W.includes(p)).filter(ada);
  const hash = crypto.createHash('sha256');
  W.concat(O).forEach(p => { hash.update(p + '\0'); hash.update(p === 'index.html' ? Buffer.from(html, 'utf8') : fs.readFileSync(path.join(root, p))); hash.update('\0'); });
  const versi = hash.digest('hex').slice(0, 12);
  VERSI = versi;
  if (sw == null) return;
  const daftar = a => '[\n  ' + a.map(p => JSON.stringify(p)).join(',\n  ') + ',\n]';
  const blok = A + ' ditulis ulang oleh tools/build-artifact.js — jangan diubah manual */\n' +
    "const VERSI = '" + versi + "';\n" +
    'const ASET = ' + daftar(W) + ';\n' +
    'const ASET_OPSIONAL = ' + daftar(O) + ';\n';
  const baru = sw.slice(0, i) + blok + sw.slice(j);
  if (baru !== sw) fs.writeFileSync(swPath, baru);
  console.log('sw.js: versi cache ' + versi + ' (' + W.length + ' aset wajib, ' + O.length + ' opsional' + (baru === sw ? ', tidak berubah' : '') + ')');
})();

// tulis index.html bercap (hanya bila isinya berubah)
(function tulisCap() {
  if (!VERSI) return;
  const bercap = pasangCap(html, VERSI);
  if (bercap !== indexAsli) fs.writeFileSync(path.join(root, 'index.html'), bercap);
  const n = (bercap.match(/[?&]v=/g) || []).length;
  console.log('index.html: cap versi ?v=' + VERSI + ' pada ' + n + ' aset' + (bercap === indexAsli ? ' (tidak berubah)' : ''));
})();
