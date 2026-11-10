#!/usr/bin/env node
// Bangun ikon aplikasi Pelatih UKP dari satu SVG (tanda stempel "UKP" di atas hijau buku besar).
// Tanpa dependensi npm: huruf digambar sebagai garis (bukan teks), PNG dirender dengan Playwright (Chromium).
//   node icons/buat-ikon.js          → icons/ikon.svg, ikon-192.png, ikon-512.png, ikon-maskable-192.png, ikon-maskable-512.png,
//                                       apple-touch-icon.png (180, buram penuh) + mencetak data: URI untuk index.html
// Isi maskable berada di dalam zona aman (lingkaran r = 40 % di tengah).
const fs = require('fs'); const path = require('path');
const DIR = __dirname;
const HIJAU = '#0E5A47', HIJAU_TUA = '#0A4536', KERTAS = '#F3F5F4', SOROT = '#F5C542';

// huruf U, K, P bergaya mono tebal (sel 80 × 100, garis 24) di dalam bingkai stempel
function tanda() {
  const x = [120, 216, 312], g = 24;
  const U = `M${x[0] + 12} 196V266a28 28 0 0 0 56 0V196`;
  const K = `M${x[1] + 12} 196V316M${x[1] + 84} 196L${x[1] + 22} 262M${x[1] + 36} 246L${x[1] + 86} 316`;
  const P = `M${x[2] + 12} 316V218H${x[2] + 42}a26 26 0 0 1 0 52H${x[2] + 12}`;
  return `<clipPath id="pita"><rect x="100" y="206" width="312" height="100"/></clipPath>` +
    `<rect x="94" y="168" width="324" height="176" rx="18" fill="none" stroke="${KERTAS}" stroke-width="20"/>` +
    `<g clip-path="url(#pita)" fill="none" stroke="${KERTAS}" stroke-width="${g}" stroke-linejoin="miter"><path d="${U}"/><path d="${K}"/><path d="${P}"/></g>` +
    `<rect x="112" y="372" width="88" height="12" rx="3" fill="${SOROT}"/>`;
}
// garis buku besar samar di latar
const garis = () => [118, 418].map(y => `<path d="M0 ${y}H512" stroke="${HIJAU_TUA}" stroke-width="6"/>`).join('');
function svg(jenis) {
  const latar = jenis === 'any' ? `<rect width="512" height="512" rx="112" fill="${HIJAU}"/>` : `<rect width="512" height="512" fill="${HIJAU}"/>`;
  const klip = jenis === 'any' ? `<clipPath id="sudut"><rect width="512" height="512" rx="112"/></clipPath>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${klip}${latar}<g${klip ? ' clip-path="url(#sudut)"' : ''}>${garis()}</g>${tanda()}</svg>`;
}

(async () => {
  const { chromium } = require('playwright');
  fs.writeFileSync(path.join(DIR, 'ikon.svg'), svg('any') + '\n');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
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
  await png('apple-touch-icon.png', 'maskable', 180); // iOS membulatkan sudut sendiri; latar harus buram penuh
  await browser.close();
  if (process.argv.includes('--uri')) {
    console.log('\napple-touch-icon data URI:\ndata:image/png;base64,' + fs.readFileSync(path.join(DIR, 'apple-touch-icon.png')).toString('base64'));
    console.log('\nfavicon data URI:\ndata:image/svg+xml,' + encodeURIComponent(svg('any')).replace(/%20/g, ' ').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/').replace(/%22/g, "'"));
  }
})().catch(e => { console.error(e); process.exit(1); });
