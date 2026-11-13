// Uji peramban Room tim dari layar ke layar: pemimpin (laptop) + dua anggota (HP) + pengunjung setelah room ditutup.
// Lokal : RELAI=ws://127.0.0.1:19141/,ws://127.0.0.1:19142/ NODE_PATH=/opt/node22/lib/node_modules node uji-room-web.js <root> [dirGambar]
// CI    : node uji-room-web.js <root>          (tanpa RELAI → jalur publik bawaan; Chrome sistem lewat playwright-core)
// WebKit: BROWSER=webkit node uji-room-web.js <root>   (v9.4: peramban Safari dari Playwright; HP anggota memakai profil perangkat iPhone.
//         Butuh paket playwright dan WebKit-nya: di GitHub lewat image mcr.microsoft.com/playwright (lihat .github/workflows), di tempat lain
//         `npx playwright install --with-deps webkit`. Tanpa BROWSER perilakunya sama seperti sebelumnya: Chromium.)
'use strict';
const http = require('node:http'); const fs = require('node:fs'); const path = require('node:path');
let pw; try { pw = require('playwright'); } catch (e) { pw = require('playwright-core'); }
const root = path.resolve(process.argv[2] || '.'); const dirGambar = process.argv[3] || null;
const RELAI = process.env.RELAI ? process.env.RELAI.split(',') : null;
const diGitHub = !!process.env.GITHUB_ACTIONS; const PORT = Number(process.env.PORT || 19160);
const BROWSER = String(process.env.BROWSER || 'chromium').toLowerCase();
if (!['chromium', 'webkit', 'firefox'].includes(BROWSER)) { console.error('BROWSER tidak dikenal: ' + BROWSER + ' (chromium, webkit, atau firefox)'); process.exit(2); }
// HP anggota: Chromium memakai ukuran layar HP seperti sebelumnya; WebKit memakai profil perangkat iPhone (ukuran, sentuh, user agent Safari iOS)
const PERANGKAT_IPHONE = 'iPhone 13';
// PROFIL_HP=iphone: profil iPhone juga di Chromium (untuk mencoba alur sentuh dan layar pendek tanpa WebKit)
const PROFIL_IPHONE = BROWSER === 'webkit' || process.env.PROFIL_HP === 'iphone';
function opsiHP() {
  if (PROFIL_IPHONE && pw.devices && pw.devices[PERANGKAT_IPHONE]) { const d = Object.assign({}, pw.devices[PERANGKAT_IPHONE]); delete d.defaultBrowserType; return d; }
  return { viewport: { width: 390, height: 844 } };
}
const AWALAN = '/Latihan-UKP/'; const URL0 = 'http://127.0.0.1:' + PORT + AWALAN;
const LAMBAT = RELAI ? 1 : 3;   // jalur publik: batas tunggu tiga kali lebih longgar
const tidur = ms => new Promise(r => setTimeout(r, ms));
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith(AWALAN)) { res.writeHead(404); res.end('tidak ada'); return; }
  let f = path.join(root, u.slice(AWALAN.length) || 'index.html'); if (f.endsWith(path.sep)) f = path.join(f, 'index.html');
  if (!f.startsWith(root)) { res.writeHead(403); res.end(); return; }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); res.end('tidak ada'); return; } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' }); res.end(b); });
});
const hasil = []; let gagal = 0; const galatHalaman = [];
function cek(nama, ok, info) { hasil.push({ nama, ok: !!ok, info: info === undefined ? null : info }); if (!ok) gagal++; console.log((ok ? 'LULUS ' : 'GAGAL ') + nama + (info !== undefined ? '  ' + JSON.stringify(info).slice(0, 300) : '')); }
async function tunggu(page, fn, arg, ms) { const t0 = Date.now(); try { await page.waitForFunction(fn, arg, { timeout: (ms || 10000) * LAMBAT, polling: 100 }); return Date.now() - t0; } catch (e) { return -1; } }
const initRelai = relai => {
  let u; const pasang = v => { if (!v || typeof v !== 'object' || Object.getOwnPropertyDescriptor(v, 'ruang')) return; let r; Object.defineProperty(v, 'ruang', { configurable: true, enumerable: true, get() { return r; }, set(x) { r = x; try { x.RELAI = relai.slice(); } catch (e) {} } }); };
  Object.defineProperty(window, 'UKP', { configurable: true, get() { return u; }, set(v) { pasang(v); u = v; } });
};

(async () => {
  await new Promise(r => server.listen(PORT, '127.0.0.1', r));
  const mesin = pw[BROWSER]; if (!mesin) throw new Error('Peramban ' + BROWSER + ' tidak tersedia di paket Playwright ini.');
  const browser = await mesin.launch(diGitHub && BROWSER === 'chromium' ? { channel: 'chrome', headless: true } : {});
  console.log('Peramban: ' + BROWSER + (PROFIL_IPHONE ? ' · HP anggota: profil ' + PERANGKAT_IPHONE : ''));
  let n = 0;
  async function buka(nama, url, vp, profil) {
    // vp = 'hp' → ukuran HP (Chromium) atau profil iPhone (WebKit); selain itu ukuran layar apa adanya
    const ctx = await browser.newContext(Object.assign(vp === 'hp' ? opsiHP() : { viewport: vp }, { serviceWorkers: 'block' }));
    if (RELAI) await ctx.addInitScript(initRelai, RELAI);
    if (profil) await ctx.addInitScript(p => { if (!localStorage.getItem('ukp.v1.seed')) { localStorage.setItem('ukp.v1.seed', '1'); localStorage.setItem('ukp.v1', JSON.stringify(p)); } }, profil);
    const page = await ctx.newPage();
    page.on('pageerror', e => galatHalaman.push(nama + ': ' + String(e.message).slice(0, 200)));
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() => window.UKP && UKP.ruang && UKP.ruangUI && UKP.views && UKP.views.room, null, { timeout: 30000 });
    return { ctx, page, nama };
  }
  // v9.6.1: KIRIM=1 (GitHub) → tiap potret juga disimpan sebagai JPEG seukuran piksel CSS dan dikirim di akhir sebagai catatan check run
  // "Potret room <peramban>" (lihat tools/potret-layar.js), supaya layar pemimpin dan HP anggota bisa dilihat tanpa mengunduh artefak.
  const KIRIM = process.env.KIRIM === '1'; const gambar = [];
  const foto = async (o, apa) => {
    if (!dirGambar && !KIRIM) return; const nama = String(++n).padStart(2, '0') + '-' + o.nama.toLowerCase() + '-' + apa;
    try {
      if (dirGambar) { fs.mkdirSync(dirGambar, { recursive: true }); await o.page.screenshot({ path: path.join(dirGambar, nama + '.png') }); }
      if (KIRIM) gambar.push({ nama, buf: await o.page.screenshot({ type: 'jpeg', quality: 55, scale: 'css' }) });
    } catch (e) {}
  };
  const baris = (page, nama) => page.locator('.papan-baris', { has: page.locator('.papan-nama', { hasText: nama }) });
  let nicky, mita, nora;
  try {
    // 1. pemimpin membuat room dari layar Room tim
    nicky = await buka('Nicky', URL0 + '#room', { width: 1366, height: 768 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
    cek('room tersedia di halaman ini', await nicky.page.evaluate(() => UKP.ruang.tersedia().tersedia), await nicky.page.evaluate(() => UKP.ruang.tersedia().alasan));
    await nicky.page.waitForSelector('.halaman-room .room-utama', { timeout: 15000 });
    await foto(nicky, 'room-kosong');
    await nicky.page.click('.halaman-room .room-utama');
    await nicky.page.waitForSelector('dialog[open] .room-buat', { timeout: 8000 });
    // v9.2: daftar awal hanya nama pemimpin; anggota ditulis satu per satu (Enter)
    for (const n of ['Mita', 'Nora']) { await nicky.page.fill('dialog[open] input[placeholder="mis. Budi"]', n); await nicky.page.press('dialog[open] input[placeholder="mis. Budi"]', 'Enter'); }
    await foto(nicky, 'dialog-buat');
    await nicky.page.click('dialog[open] .room-buat');
    const msBuat = await tunggu(nicky.page, () => UKP.ruang.info() && UKP.ruang.status().tersambung, null, 15000);
    const st = await nicky.page.evaluate(() => ({ info: UKP.ruang.info(), relai: UKP.ruang.status().relai.map(r => r.status) }));
    cek('pemimpin: room dibuat dan tersambung', msBuat >= 0 && st.info, { ms: msBuat, jalur: st.relai });
    await foto(nicky, 'room-siap');
    const tautan = st.info ? st.info.tautan : URL0 + '#room/XXXX';
    cek('tautan undangan menunjuk halaman ini', tautan.startsWith(URL0 + '#room/'), tautan.replace(/#room\/.*/, '#room/…'));
    const tutupDlg = nicky.page.locator('dialog[open] .dlg-foot .btn'); if (await tutupDlg.count()) await tutupDlg.first().click();
    await tidur(1500 * LAMBAT);   // biarkan pemimpin tersambung ke semua jalur
    const jalurTuan = await nicky.page.evaluate(() => UKP.ruang.status().relai.map(r => r.status));
    cek('pemimpin tersambung ke ≥ 1 jalur', jalurTuan.includes('tersambung'), jalurTuan);

    // 2. dua anggota tanpa state membuka tautan di HP
    async function gabung(nama) {
      const t0 = Date.now();
      const o = await buka(nama, tautan, 'hp', null);
      const msNama = await tunggu(o.page, () => { const h = document.querySelector('.halaman-room h1'); return h && /Gabung room/.test(h.textContent) && document.querySelectorAll('.nama-room:not(.kerangka)').length >= 2; }, null, 20000);
      await foto(o, 'gabung');
      cek(nama + ': layar gabung dengan nama room (tanpa onboarding)', msNama >= 0, { ms: Date.now() - t0, judul: await o.page.evaluate(() => (document.querySelector('.halaman-room h1') || document.querySelector('h1') || {}).textContent || location.hash) });
      await o.page.click('.nama-room:has-text("' + nama + '")');
      // v9.3.2: ketuk nama langsung masuk (layar "Sebelum masuk" dihapus). Klien lama (≤ v9.3.1) masih punya tombol Mengerti: ketuk bila ada.
      const setuju = await tunggu(o.page, () => !!document.querySelector('.room-mengerti') || !!document.querySelector('.room-siap'), null, 8000);
      if (setuju >= 0 && await o.page.locator('.room-mengerti').count()) { await foto(o, 'setuju'); await o.page.click('.room-mengerti'); console.log('       (' + nama + ': klien lama, langkah Mengerti diketuk)'); }
      const t1 = Date.now();
      const msLobi = await tunggu(o.page, () => !!document.querySelector('.room-siap'), null, 25000);
      cek(nama + ': masuk lobi', msLobi >= 0, { ms: Date.now() - t1, jalur: await o.page.evaluate(() => UKP.ruang.status().relai.map(r => String(r.url).replace(/^wss?:\/\//, '').split(/[:/]/)[0] + '=' + r.status)) });
      await foto(o, 'lobi');
      await o.page.click('.room-siap');
      return o;
    }
    mita = await gabung('Mita'); nora = await gabung('Nora');
    const msSiap = await tunggu(nicky.page, () => /2 orang sudah siap: (Mita, Nora|Nora, Mita)/.test((document.querySelector('.lobi-room') || {}).innerText || ''), null, 10000);
    cek('pemimpin melihat dua anggota siap', msSiap >= 0, { ms: msSiap, teks: await nicky.page.evaluate(() => ((document.querySelector('.lobi-room') || {}).innerText || '').split('\n').filter(x => /siap|masuk/i.test(x)).join(' | ')) });
    await foto(nicky, 'lobi');

    // 3. pemimpin memulai latihan bersama 10 soal dari lobi
    await nicky.page.click('.lobi-room .room-utama');
    await nicky.page.waitForSelector('dialog[open] .room-mulai', { timeout: 8000 });
    const sepuluh = nicky.page.locator('dialog[open] button', { hasText: /^10 soal$/ }); if (await sepuluh.count()) await sepuluh.first().click();
    await foto(nicky, 'dialog-mulai');
    await nicky.page.click('dialog[open] .room-mulai');
    const msPapan = await tunggu(nicky.page, () => document.querySelectorAll('.papan-baris').length >= 3 && !!document.querySelector('.soal'), null, 15000);
    cek('pemimpin: papan latihan tampil', msPapan >= 0, { ms: msPapan, baris: await nicky.page.evaluate(() => document.querySelectorAll('.papan-baris').length) });
    const soal1 = await nicky.page.evaluate(() => { const el = document.querySelector('.soal'); const s = el && UKP.konten.soal(el.dataset.id); return s ? { id: s.id, kunci: s.kunci } : null; });
    const salah = soal1 ? ['A', 'B', 'C', 'D'].find(x => x !== soal1.kunci) : 'A';
    for (const o of [mita, nora]) {
      const ms = await tunggu(o.page, () => document.querySelectorAll('.huruf-besar').length === 4, null, 12000);
      cek(o.nama + ': soal tampil di HP', ms >= 0, { ms });
    }
    await foto(mita, 'menjawab');
    // 4. anggota menjawab: Mita benar dan yakin, Nora salah dan ragu
    await mita.page.click('.huruf-besar[data-huruf="' + (soal1 ? soal1.kunci : 'A') + '"]'); await mita.page.click('.yakin-room[data-yakin="yakin"]');
    await nora.page.click('.huruf-besar[data-huruf="' + salah + '"]'); await nora.page.click('.yakin-room[data-yakin="ragu"]');
    await foto(mita, 'terkirim');
    const msJauh = await tunggu(nicky.page, () => document.querySelectorAll('.papan-baris[data-jauh]').length >= 2, null, 10000);
    const pap = await nicky.page.evaluate(() => [...document.querySelectorAll('.papan-baris')].map(li => ({ nama: li.querySelector('.papan-nama').firstChild.textContent.trim(), jauh: li.hasAttribute('data-jauh'), status: (li.querySelector('.papan-jauh:not([hidden]), .papan-status:not([hidden])') || {}).textContent || null, tekan: li.querySelectorAll('[aria-pressed="true"]').length })));
    cek('pemimpin: baris Mita dan Nora terisi dari HP', msJauh >= 0, { ms: msJauh });
    cek('pemimpin: huruf jawaban HP belum terlihat sebelum kunci', pap.filter(x => x.jauh).every(x => x.tekan === 0 && /sudah menjawab/i.test(x.status || '')), pap.filter(x => x.jauh));
    await foto(nicky, 'papan-terisi');
    // 5. pemimpin membuka kunci
    await nicky.page.locator('.aksi-kanan .btn-primary', { hasText: 'Buka kunci jawaban' }).click();
    for (const o of [mita, nora]) {
      const ms = await tunggu(o.page, () => !!document.querySelector('.hasil-room'), null, 10000);
      cek(o.nama + ': hasil soal tampil di HP', ms >= 0, { ms, kop: await o.page.evaluate(() => (document.querySelector('.skor-tim-teks') || {}).textContent || null), judul: await o.page.evaluate(() => { const h = document.querySelector('.hasil-room'); return h ? h.innerText.split('\n')[0] : null; }) });
    }
    await foto(mita, 'hasil'); await foto(nora, 'hasil'); await foto(nicky, 'kunci');
    const teksMita = await mita.page.evaluate(() => document.querySelector('#main').innerText);
    cek('HP Mita: tidak menyebut Nora (yang salah)', !/Nora/.test(teksMita));
    const statusPemimpin = await nicky.page.evaluate(() => document.querySelector('#main').innerText);
    cek('laptop pemimpin: menyebut nama (kalimat v8.1)', /Nora/.test(statusPemimpin) && /Mita/.test(statusPemimpin));
    if (await nora.page.locator('.room-paham').count()) { await nora.page.click('.room-paham'); cek('Nora: tombol Paham ada dan diketuk', true); } else cek('Nora: tombol Paham ada', false);
    // 6. lanjut ke soal 2
    await tidur(1000);
    await nicky.page.locator('.aksi-kanan .btn-primary').first().click();
    const msSoal2 = await tunggu(mita.page, () => /Soal 2 dari \d+/.test((document.querySelector('.fokus-bar') || {}).innerText || '') && document.querySelectorAll('.huruf-besar').length === 4, null, 10000);
    cek('Mita: soal 2 tampil setelah pemimpin Lanjut', msSoal2 >= 0, { ms: msSoal2 });
    // 7. pemimpin mengakhiri latihan dari Menu (v9.2: "Akhiri latihan dan lihat hasil")
    await nicky.page.click('.fokus-menu summary'); await tidur(200);
    await nicky.page.locator('.fokus-menu .menu-lebih-isi button', { hasText: 'Akhiri latihan dan lihat hasil' }).click(); await tidur(300);
    if (await nicky.page.locator('dialog[open] .btn-primary').count()) await nicky.page.locator('dialog[open] .btn-primary').first().click();
    const msRekap = await tunggu(mita.page, () => { const r = document.querySelector('.rekap-room'); return r && /Skor tim/i.test(r.innerText); }, null, 20000);
    cek('Mita: rekap penutup tampil', msRekap >= 0, { ms: msRekap, teks: await mita.page.evaluate(() => ((document.querySelector('.rekap-room') || {}).innerText || '').replace(/\n+/g, ' | ').slice(0, 160)) });
    await foto(mita, 'rekap'); await foto(nicky, 'evaluasi');
    const sesiDiHp = await mita.page.evaluate(() => (UKP.belajar.sesiBersama() || []).map(x => ({ sumber: x.sumber || null, n: (x.soal || []).length, tim: !!x.tim })));
    cek('Mita: rekaman sesi tersimpan di HP', sesiDiHp.length === 1 && sesiDiHp[0].sumber === 'room', sesiDiHp);
    // 8. pemimpin menutup room; anggota keluar; tautan lama tidak lagi membuka room
    await nicky.page.evaluate(() => UKP.go('room')); await nicky.page.waitForSelector('.lobi-room', { timeout: 10000 * LAMBAT });
    const menu = nicky.page.locator('.menu-room > summary').first(); await menu.click(); await tidur(200);
    await nicky.page.locator('.menu-room button', { hasText: 'Tutup room' }).first().click();
    await nicky.page.waitForSelector('dialog[open] .btn-danger', { timeout: 8000 }); await foto(nicky, 'dialog-tutup');
    await nicky.page.click('dialog[open] .btn-danger');
    const msTutup = await tunggu(mita.page, () => !UKP.ruang.info(), null, 12000);
    cek('Mita: keluar otomatis saat room ditutup', msTutup >= 0, { ms: msTutup });
    await foto(mita, 'ditutup');
    await tidur(1500);
    const tamu = await buka('Tamu', tautan, 'hp', null);
    const msTak = await tunggu(tamu.page, () => /tidak ditemukan|sudah ditutup|belum dibuka/i.test((document.querySelector('#main') || {}).innerText || ''), null, 15000);
    cek('tautan room yang sudah ditutup: layar berkata tidak ditemukan atau ditutup', msTak >= 0, { ms: msTak, teks: await tamu.page.evaluate(() => ((document.querySelector('#main') || {}).innerText || '').replace(/\n+/g, ' | ').slice(0, 200)) });
    await foto(tamu, 'tautan-lama');
  } catch (e) { cek('skrip berjalan sampai akhir', false, String((e && e.message) || e).slice(0, 300)); for (const o of [nicky, mita, nora]) if (o) await foto(o, 'galat'); }
  cek('tanpa galat halaman', galatHalaman.length === 0, galatHalaman.slice(0, 5));
  const lulus = hasil.filter(x => x.ok).length;
  console.log(lulus + ' lulus, ' + gagal + ' gagal' + (RELAI ? ' (broker lokal)' : ' (jalur publik)') + ' · ' + BROWSER);
  if (diGitHub) {
    const bersih = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    hasil.filter(x => !x.ok).slice(0, 8).forEach(x => console.log('::warning title=Peramban GAGAL::' + bersih(x.nama + ' ' + JSON.stringify(x.info).slice(0, 400))));
    console.log('::' + (gagal ? 'error' : 'notice') + ' title=Peramban ' + BROWSER + ' ringkasan::' + bersih(lulus + ' lulus, ' + gagal + ' gagal · ' + hasil.filter(x => x.ok && x.info && x.info.ms != null).map(x => x.nama.split(':')[0].slice(0, 14) + ' ' + x.info.ms + 'ms').join('; ').slice(0, 700)));
  }
  if (KIRIM && gambar.length) {
    try { const id = await require('./potret-layar.js').kirim(gambar, BROWSER + ' · ' + lulus + ' lulus, ' + gagal + ' gagal · ' + gambar.length + ' gambar', hasil.map(x => ({ ok: x.ok, tag: x.nama, info: '' })), 'Potret room ' + BROWSER); console.log('gambar dikirim ke check run ' + id); }
    catch (e) { const pesan = String((e && e.message) || e).slice(0, 300); console.log('gambar TIDAK terkirim: ' + pesan); if (diGitHub) console.log('::warning title=Potret room tidak terkirim::' + pesan.replace(/%/g, '%25').replace(/\r?\n/g, '%0A')); }
  }
  await browser.close(); server.close();
  process.exit(gagal ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
