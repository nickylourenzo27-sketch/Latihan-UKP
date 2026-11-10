#!/usr/bin/env node
// Bangun ikon aplikasi MABAR UKP dari simbolnya (v8.3): kotak tinta, dua titik kuning, satu garis putih (tanda persen).
// Geometri persis simbol di kanvas desain (viewBox 0 0 96 96): kotak rx 20, titik (30,30) dan (66,66) r 12,
// garis (68,22)–(28,74) tebal 9 berujung bulat. Tanpa dependensi npm: PNG dirender dengan Playwright (Chromium).
//   NODE_PATH=/opt/node22/lib/node_modules node icons/buat-ikon.js [--uri]
//     → icons/ikon.svg, ikon-192.png, ikon-512.png (bersudut bulat, latar transparan),
//       ikon-maskable-192.png, ikon-maskable-512.png (latar tinta penuh, simbol di dalam zona aman: lingkaran r = 40 % di tengah),
//       apple-touch-icon.png (180, buram penuh; iOS membulatkan sudut sendiri)
//     --uri juga mencetak data: URI favicon SVG dan apple-touch-icon untuk index.html.
// Favicon/ikon.svg menyesuaikan tema peramban: gelap → kotak kuning, titik tinta (sama dengan simbol di tema gelap aplikasi).
const fs = require('fs'); const path = require('path');
const DIR = __dirname;
const TINTA = '#0F2A4A', KUNING = '#F2B01E', PUTIH = '#FFFFFF';

// isi simbol (dua titik + garis) di koordinat 96; skala di sekitar pusat (48,48) untuk zona aman maskable
function isi(skala) {
  const g = `<circle class="t" cx="30" cy="30" r="12" fill="${KUNING}"/><circle class="t" cx="66" cy="66" r="12" fill="${KUNING}"/>` +
    `<line x1="68" y1="22" x2="28" y2="74" stroke="${PUTIH}" stroke-width="9" stroke-linecap="round"/>`;
  return skala === 1 ? g : `<g transform="translate(48 48) scale(${skala}) translate(-48 -48)">${g}</g>`;
}
// jenis: 'any' (kotak rx 20, sudut transparan) · 'maskable' (tinta penuh, isi 0,8× → jangkauan terjauh ±30 dari pusat < 38,4 = 40 %)
//        · 'apple' (tinta penuh, isi 1×) ; adaptif: tambahkan gaya tema gelap (hanya untuk SVG)
function svg(jenis, adaptif) {
  const gaya = adaptif ? `<style>@media (prefers-color-scheme:dark){.k{fill:${KUNING}}.t{fill:${TINTA}}}</style>` : '';
  const kotak = jenis === 'any' ? `<rect class="k" width="96" height="96" rx="20" fill="${TINTA}"/>` : `<rect class="k" width="96" height="96" fill="${TINTA}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">${gaya}${kotak}${isi(jenis === 'maskable' ? 0.8 : 1)}</svg>`;
}

(async () => {
  const { chromium } = require('playwright');
  fs.writeFileSync(path.join(DIR, 'ikon.svg'), svg('any', true) + '\n');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1, colorScheme: 'light' });
  async function png(nama, jenis, ukuran) {
    await page.setViewportSize({ width: ukuran, height: ukuran });
    await page.setContent(`<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block;width:${ukuran}px;height:${ukuran}px}</style>${svg(jenis)}`);
    await page.screenshot({ path: path.join(DIR, nama), omitBackground: jenis === 'any', clip: { x: 0, y: 0, width: ukuran, height: ukuran } });
    console.log(nama + ' (' + fs.statSync(path.join(DIR, nama)).size + ' byte)');
  }
  await png('ikon-192.png', 'any', 192);
  await png('ikon-512.png', 'any', 512);
  await png('ikon-maskable-192.png', 'maskable', 192);
  await png('ikon-maskable-512.png', 'maskable', 512);
  await png('apple-touch-icon.png', 'apple', 180);
  await browser.close();
  if (process.argv.includes('--uri')) {
    console.log('\napple-touch-icon data URI:\ndata:image/png;base64,' + fs.readFileSync(path.join(DIR, 'apple-touch-icon.png')).toString('base64'));
    console.log('\nfavicon data URI:\ndata:image/svg+xml,' + encodeURIComponent(svg('any', true)).replace(/%20/g, ' ').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/').replace(/%22/g, "'"));
  }
})().catch(e => { console.error(e); process.exit(1); });
