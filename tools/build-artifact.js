#!/usr/bin/env node
// Bangun dist/artifact.html: isi index.html tanpa pembungkus doctype/html/head/body (untuk dipublikasikan sebagai Artifact)
const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
// penjaga muat (index.html): TOTAL = jumlah <script src> lokal, ditulis ulang agar teks "n/TOTAL modul" tetap benar saat skrip bertambah
(function stempelTotal() {
  const n = (html.match(/<script\b[^>]*\bsrc\s*=\s*["'](?!https?:)[^"']+["']/gi) || []).length;
  const baru = html.replace(/(\bTOTAL = )\d+(,)/, '$1' + n + '$2');
  if (baru !== html) { html = baru; fs.writeFileSync(path.join(root, 'index.html'), html); console.log('index.html: penjaga muat TOTAL = ' + n); }
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
(function stempelServiceWorker() {
  const crypto = require('crypto');
  const swPath = path.join(root, 'sw.js'); if (!fs.existsSync(swPath)) return;
  const sw = fs.readFileSync(swPath, 'utf8');
  const A = '/* <ASET-OTOMATIS>', B = '/* </ASET-OTOMATIS> */';
  const i = sw.indexOf(A), j = sw.indexOf(B);
  if (i < 0 || j < 0) throw new Error('sw.js: blok <ASET-OTOMATIS> tidak ditemukan');
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
  W.concat(O).forEach(p => { hash.update(p + '\0'); hash.update(fs.readFileSync(path.join(root, p))); hash.update('\0'); });
  const versi = hash.digest('hex').slice(0, 12);
  const daftar = a => '[\n  ' + a.map(p => JSON.stringify(p)).join(',\n  ') + ',\n]';
  const blok = A + ' ditulis ulang oleh tools/build-artifact.js — jangan diubah manual */\n' +
    "const VERSI = '" + versi + "';\n" +
    'const ASET = ' + daftar(W) + ';\n' +
    'const ASET_OPSIONAL = ' + daftar(O) + ';\n';
  const baru = sw.slice(0, i) + blok + sw.slice(j);
  if (baru !== sw) fs.writeFileSync(swPath, baru);
  console.log('sw.js: versi cache ' + versi + ' (' + W.length + ' aset wajib, ' + O.length + ' opsional' + (baru === sw ? ', tidak berubah' : '') + ')');
})();
