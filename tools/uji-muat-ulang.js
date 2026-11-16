// Uji peramban v9.7.2: muat ulang di Mode mabar melanjutkan sesi yang sama (papan pemimpin, room, dan HP anggota).
// Berdiri sendiri (tidak memakai berkas lain di tools/). Cara dan pembantu sama dengan tools/uji-room-web.js.
//
// Menjalankan dengan relai lokal (disarankan):
//   1. Dua broker Mosquitto dengan listener websockets, mis. berkas a.conf:
//        listener 19141 127.0.0.1
//        protocol websockets
//        allow_anonymous true
//      dan b.conf yang sama dengan port 19142. Hidupkan: mosquitto -c a.conf -d; mosquitto -c b.conf -d
//   2. RELAI=ws://127.0.0.1:19141/,ws://127.0.0.1:19142/ BROKER_CONF=/jalur/a.conf,/jalur/b.conf \
//        NODE_PATH=$(npm root -g) PORT=19170 node tools/uji-muat-ulang.js <akar> [dirGambar]
//
// Variabel lingkungan:
//   RELAI        daftar relai websockets (koma). Tanpa RELAI: jalur publik bawaan (batas tunggu tiga kali lebih longgar).
//   PORT         port server http lokal (bawaan 19170).
//   KASUS        daftar kasus yang dijalankan (koma). Bawaan: semua kasus di bawah.
//   BROKER_CONF  berkas conf broker (koma) untuk kasus "putus" (broker dimatikan lalu dihidupkan lagi). Tanpa ini kasus "putus" dilewati.
//   MOSQUITTO    jalur program mosquitto (bawaan: mosquitto).
//
// Kasus: kerja, bahas, dua, majumundur, putus, akhir, mulaibaru, dialogroom, hilang, transisi, penuh (perancang v9.7.2),
//        k1 (baris Buku Kesalahan), k2 (Kembali sesudah "Latih N soal lagi"), k3 (tab salinan), ulang (putaran ulang params.ids),
//        muatgagal (satu berkas soal gagal dimuat sekali saat muat ulang), salinan (tab salinan dimuat ulang sesudah latihan berakhir),
//        enterdua (G1: Enter dua kali pada tombol Mulai), ketuk (G2 dan G3: Lanjutkan yang diketuk saat papan hidup di tab lain).
//        Kasus akhir juga memeriksa G4 (muat ulang di layar evaluasi membuka evaluasi sesi itu).
// Keluar 0 bila semua periksa LULUS, 1 bila ada GAGAL.
'use strict';
const http = require('node:http'); const fs = require('node:fs'); const path = require('node:path');
const { execSync } = require('node:child_process');
let pw; try { pw = require('playwright'); } catch (e) { pw = require('playwright-core'); }
const root = path.resolve(process.argv[2] || '.'); const dirGambar = process.argv[3] || null;
const RELAI = process.env.RELAI ? process.env.RELAI.split(',') : null;
const PORT = Number(process.env.PORT || 19170);
const SEMUA = ['kerja', 'bahas', 'dua', 'majumundur', 'putus', 'akhir', 'mulaibaru', 'dialogroom', 'hilang', 'transisi', 'penuh', 'k1', 'k2', 'k3', 'ulang', 'muatgagal', 'salinan', 'enterdua', 'ketuk'];
const KASUS = process.env.KASUS ? process.env.KASUS.split(',').map(x => x.trim()).filter(Boolean) : SEMUA;
const BROKER_CONF = (process.env.BROKER_CONF || '').split(',').map(x => x.trim()).filter(Boolean);
const MOSQUITTO = process.env.MOSQUITTO || 'mosquitto';
const AWALAN = '/Latihan-UKP/'; const URL0 = 'http://127.0.0.1:' + PORT + AWALAN;
const LAMBAT = RELAI ? 1 : 3;
const tidur = ms => new Promise(r => setTimeout(r, ms));
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith(AWALAN)) { res.writeHead(404); res.end('tidak ada'); return; }
  let f = path.join(root, u.slice(AWALAN.length) || 'index.html'); if (f.endsWith(path.sep)) f = path.join(f, 'index.html');
  if (!f.startsWith(root)) { res.writeHead(403); res.end(); return; }
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); res.end('tidak ada'); return; } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' }); res.end(b); });
});
const initRelai = relai => {
  let u; const pasang = v => { if (!v || typeof v !== 'object' || Object.getOwnPropertyDescriptor(v, 'ruang')) return; let r; Object.defineProperty(v, 'ruang', { configurable: true, enumerable: true, get() { return r; }, set(x) { r = x; try { x.RELAI = relai.slice(); } catch (e) {} } }); };
  Object.defineProperty(window, 'UKP', { configurable: true, get() { return u; }, set(v) { pasang(v); u = v; } });
};
const ringkasKasus = []; let gagalTotal = 0; const galatHalaman = [];

(async () => {
  await new Promise(r => server.listen(PORT, '127.0.0.1', r));
  const browser = await pw.chromium.launch();
  console.log('Akar: ' + root + ' · ' + (RELAI ? 'relai lokal' : 'jalur publik') + ' · kasus: ' + KASUS.join(', '));
  let nFoto = 0; let kasusKini = ''; let gagal = 0; let konteks = [];
  const periksa = (nama, ok, data) => { if (!ok) { gagal++; gagalTotal++; } console.log((ok ? 'LULUS ' : 'GAGAL ') + kasusKini + ': ' + nama + (data === undefined ? '' : '  ' + JSON.stringify(data).slice(0, 400))); };
  const catat = (nama, data) => console.log('      ' + kasusKini + ': ' + nama + '  ' + JSON.stringify(data).slice(0, 400));
  async function tunggu(page, fn, arg, ms) { const t0 = Date.now(); try { await page.waitForFunction(fn, arg, { timeout: (ms || 10000) * LAMBAT, polling: 100 }); return Date.now() - t0; } catch (e) { return -1; } }
  async function buka(nama, url, vp, profil) {
    const ctx = await browser.newContext(Object.assign(vp === 'hp' ? { viewport: { width: 390, height: 844 } } : { viewport: vp }, { serviceWorkers: 'block' }));
    konteks.push(ctx);
    if (RELAI) await ctx.addInitScript(initRelai, RELAI);
    if (profil) await ctx.addInitScript(p => { if (!localStorage.getItem('ukp.v1.seed')) { localStorage.setItem('ukp.v1.seed', '1'); localStorage.setItem('ukp.v1', JSON.stringify(p)); } }, profil);
    const page = await ctx.newPage();
    page.on('pageerror', e => galatHalaman.push(kasusKini + ' ' + nama + ': ' + String(e.message).slice(0, 200)));
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() => window.UKP && UKP.ruang && UKP.ruangUI && UKP.views && UKP.views.room, null, { timeout: 30000 });
    return { ctx, page, nama };
  }
  const foto = async (o, apa) => { if (!dirGambar) return; fs.mkdirSync(dirGambar, { recursive: true }); const f = String(++nFoto).padStart(2, '0') + '-' + kasusKini + '-' + o.nama.toLowerCase() + '-' + apa + '.png'; try { await o.page.screenshot({ path: path.join(dirGambar, f) }); } catch (e) {} };
  // keadaan pemimpin (laptop)
  const bacaP = o => o.page.evaluate(() => {
    const s = UKP.store.get(); const a = s.bersamaAktif; const el = document.querySelector('.soal'); let st = null; try { st = UKP.ruang.state(); } catch (e) {}
    const akt = st && st.aktivitas; const i = UKP.ruang.info(); const tst = document.querySelector('.toast:not([hidden]) .toast-teks');
    return { state: history.state, aktif: a ? { sesiId: a.sesiId, idx: a.idx, n: a.soalIds.length, room: a.room, ulang: a.ulang } : null,
      sesi: (s.sesiBersama || []).map(x => ({ id: x.id, selesai: !!x.selesai, n: (x.soalIds || []).length, nSoal: (x.soal || []).length })),
      kop: ((document.querySelector('.fokus-bar') || {}).innerText || '').replace(/\n+/g, ' | ').slice(0, 160),
      soalId: el ? el.dataset.id : null, kartuLanjut: !!document.querySelector('.kartu-lanjut-bersama'), h1: ((document.querySelector('main h1') || document.querySelector('h1') || {}).textContent || '').slice(0, 80),
      waktu: (document.querySelector('.waktu-sesi') || {}).textContent || null, laju: (document.querySelector('.laju-soal') || {}).textContent || null,
      toast: tst ? tst.textContent : null, peran: i ? i.peran : null,
      akt: akt ? { id: akt.id, idx: akt.idx, fase: akt.fase, n: (akt.soalIds || []).length, soal: akt.soalIds ? akt.soalIds[akt.idx] : null } : null };
  });
  // keadaan anggota (HP)
  const bacaA = o => o.page.evaluate(() => {
    let st = null; try { st = UKP.ruang.state(); } catch (e) {} const akt = st && st.aktivitas;
    return { fokusBar: ((document.querySelector('.fokus-bar') || {}).innerText || '').replace(/\n+/g, ' | ').slice(0, 160), hasil: !!document.querySelector('.hasil-room'),
      akt: akt ? { id: akt.id, idx: akt.idx, fase: akt.fase, soal: akt.soalIds ? akt.soalIds[akt.idx] : null } : null };
  });
  const ring = o => ({ state: o.state && o.state.params, h1: o.h1, kop: o.kop, soalId: o.soalId, kartuLanjut: o.kartuLanjut, aktif: o.aktif, nSesi: o.sesi.length, akt: o.akt, waktu: o.waktu, laju: o.laju });
  async function buatRoom(nama, anggota) {
    const p = await buka(nama, URL0 + '#room', { width: 1366, height: 768 }, { profil: { nama, tingkat: 'B', onboardingSelesai: true } });
    await p.page.waitForSelector('.halaman-room .room-utama', { timeout: 15000 * LAMBAT });
    await p.page.click('.halaman-room .room-utama');
    await p.page.waitForSelector('dialog[open] .room-buat', { timeout: 8000 * LAMBAT });
    for (const x of anggota) { await p.page.fill('dialog[open] input[placeholder="mis. Budi"]', x); await p.page.press('dialog[open] input[placeholder="mis. Budi"]', 'Enter'); }
    await p.page.click('dialog[open] .room-buat');
    await tunggu(p.page, () => UKP.ruang.info() && UKP.ruang.status().tersambung, null, 15000);
    const info = await p.page.evaluate(() => UKP.ruang.info());
    const tutupDlg = p.page.locator('dialog[open] .dlg-foot .btn'); if (await tutupDlg.count()) await tutupDlg.first().click();
    await tidur(1500 * LAMBAT);
    p.tautan = info.tautan; return p;
  }
  async function gabung(tautan, nama) {
    const o = await buka(nama, tautan, 'hp', null);
    await tunggu(o.page, () => document.querySelectorAll('.nama-room:not(.kerangka)').length >= 2, null, 20000);
    await o.page.click('.nama-room:has-text("' + nama + '")');
    await tunggu(o.page, () => !!document.querySelector('.room-siap'), null, 25000);
    await o.page.click('.room-siap');
    return o;
  }
  async function siapRoom() {
    const p = await buatRoom('Nicky', ['Mita']); const mita = await gabung(p.tautan, 'Mita');
    await tunggu(p.page, () => /1 orang sudah siap/.test((document.querySelector('.lobi-room') || {}).innerText || ''), null, 10000);
    return { p, mita };
  }
  async function mulaiDariDialog(p, n) {
    await p.page.click('.lobi-room .room-utama');
    await p.page.waitForSelector('dialog[open] .room-mulai', { timeout: 8000 * LAMBAT });
    const b = p.page.locator('dialog[open] button', { hasText: new RegExp('^' + (n || 10) + ' soal$') }); if (await b.count()) await b.first().click();
    await p.page.click('dialog[open] .room-mulai');
    return tunggu(p.page, () => !!document.querySelector('.soal') && document.querySelectorAll('.papan-baris').length >= 2, null, 15000);
  }
  async function jawabAnggota(o, huruf, yakin) {
    await tunggu(o.page, () => document.querySelectorAll('.huruf-besar').length === 4 && !document.querySelector('.hasil-room'), null, 12000);
    await o.page.click('.huruf-besar[data-huruf="' + huruf + '"]'); await o.page.click('.yakin-room[data-yakin="' + (yakin || 'yakin') + '"]');
  }
  async function bukaKunci(p) { await p.page.locator('.aksi-kanan .btn-primary', { hasText: 'Buka kunci jawaban' }).click(); await tidur(800); }
  async function lanjut(p) { await p.page.locator('.aksi-kanan .btn-primary').first().click(); await tidur(800); }
  const kunciKini = p => p.page.evaluate(() => { const el = document.querySelector('.soal'); const s = el && UKP.konten.soal(el.dataset.id); return s ? s.kunci : 'A'; });
  async function satuSoal(p, mita) {
    const k = await kunciKini(p); await jawabAnggota(mita, k, 'yakin');
    await tunggu(p.page, () => document.querySelectorAll('.papan-baris[data-jauh]').length >= 1, null, 8000);
    await bukaKunci(p); await lanjut(p);
  }
  const jauh = p => p.page.evaluate(() => document.querySelectorAll('.papan-baris[data-jauh]').length);
  const detik = s => { const m = /(\d+):(\d+)(?::(\d+))?/.exec(s || ''); if (!m) return null; return m[3] ? (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]) : (+m[1]) * 60 + (+m[2]); };
  const dialogTerbuka = p => p.page.evaluate(() => { const d = [...document.querySelectorAll('dialog[open]')].pop(); return d ? (d.innerText || '').replace(/\n+/g, ' | ').slice(0, 400) : null; });
  const klikDialog = (p, teks) => p.page.evaluate(tx => { const d = [...document.querySelectorAll('dialog[open]')].pop(); const b = d && [...d.querySelectorAll('button')].find(x => x.textContent.trim() === tx); if (b) b.click(); return !!b; }, teks);
  const klikMulaiSaringan = p => p.page.evaluate(() => { const x = [...document.querySelectorAll('main button.btn-primary')].find(e => /^Mulai latihan/.test(e.textContent.trim()) && e.offsetParent !== null); if (x) x.click(); return x ? x.textContent.trim() : null; });
  const sadapToast = p => p.page.evaluate(() => { window.__toast = []; const a = UKP.toast; const w = function (t) { window.__toast.push(String(t)); return a.apply(this, arguments); }; Object.keys(a).forEach(k => { w[k] = a[k]; }); UKP.toast = w; });
  // sadapan toast sejak halaman dimuat (init script): semua pesan dicatat di window.__toast, jadi toast lain (mis. pengingat sore)
  // yang menimpa layar tidak membuat periksa bergantung jam
  const SADAP_TOAST_AWAL = () => {
    window.__toast = [];
    const t = setInterval(() => {
      const U = window.UKP; if (!U || typeof U.toast !== 'function' || U.toast.__sadap) return;
      clearInterval(t); const a = U.toast; const w = function (x) { window.__toast.push(String(x)); return a.apply(this, arguments); };
      Object.keys(a).forEach(k => { w[k] = a[k]; }); w.__sadap = true; U.toast = w;
    }, 2);
  };
  const daftarToast = p => p.page.evaluate(() => window.__toast || []);
  // muat ulang tepat sesudah titik lanjut di penyimpanan dibuat basi (sisa waktu 99999 detik), dalam satu tugas JS. Hanya pendengar
  // pagehide papan yang bisa menimpanya dengan keadaan papan yang sebenarnya. Hasil: sisa waktu di layar tepat sebelum muat ulang
  async function muatUlangBasi(p) {
    const nav = p.page.waitForNavigation({ waitUntil: 'load' });
    const w = await p.page.evaluate(() => {
      const waktu = (document.querySelector('.waktu-sesi') || {}).textContent || null;
      const s = UKP.store.get(); if (s.bersamaAktif) { s.bersamaAktif.sisaDetik = 99999; s.bersamaAktif.diperbarui = Date.now() - 600000; UKP.store.flush(); }
      location.reload(); return { waktu, t: Date.now() };
    }).catch(() => null);
    await nav; return w;
  }
  const mulaiPapanSatuLayar = async (p, params) => { await p.page.evaluate(pr => { const s = UKP.store.get(); UKP.belajar.siapBersama(s); s.bersama.aktif = true; s.bersama.peserta = ['Nicky', 'Mita']; UKP.store.save(); UKP.go('latih', pr); }, params); await tunggu(p.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(1200); };
  // pemeriksaan baku "tetap di soal yang sama" sesudah muat ulang
  async function cekTetap(p, mita, A, label, o) {
    o = o || {};
    await tunggu(p.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(o.tunggu || 5000);
    const B = await bacaP(p); catat(label + ' SESUDAH', ring(B)); await foto(p, label.replace(/\W+/g, '-'));
    periksa(label + ': papan soal tampil (bukan saringan)', !!B.soalId && !B.kartuLanjut && !/Latih soal/.test(B.h1), { h1: B.h1, kartu: B.kartuLanjut });
    periksa(label + ': soal sama', B.soalId === A.soalId, [A.soalId, B.soalId]);
    periksa(label + ': nomor soal sama', (/Soal (\d+) dari/.exec(B.kop) || [])[1] === (/Soal (\d+) dari/.exec(A.kop) || [])[1], [A.kop, B.kop]);
    periksa(label + ': sesi sama, tidak ada sesi baru', !!B.aktif && !!A.aktif && B.aktif.sesiId === A.aktif.sesiId && B.sesi.length === A.sesi.length, { sebelum: A.aktif && A.aktif.sesiId, sesudah: B.aktif && B.aktif.sesiId, nSesi: [A.sesi.length, B.sesi.length] });
    const pr = (B.state && B.state.params) || {};
    periksa(label + ': rute menjadi { lanjut: 1, sesi } (mulai dan ids dibuang)', !!pr.lanjut && !pr.mulai && !pr.ids && !!B.aktif && pr.sesi === B.aktif.sesiId, pr);
    if (A.waktu && B.waktu && detik(A.waktu) != null && detik(B.waktu) != null) { const dA = detik(A.waktu), dB = detik(B.waktu); periksa(label + ': sisa waktu latihan lanjut (tidak diulang dari awal)', dB <= dA && dA - dB < 90, [A.waktu, B.waktu]); }
    if (!o.tanpaRoom) {
      await tunggu(p.page, () => { try { return UKP.ruang.state().aktivitas && UKP.ruang.status().tersambung; } catch (e) { return false; } }, null, o.msRoom || 15000);
      const C = await bacaP(p);
      periksa(label + ': aktivitas room sama', !!C.akt && !!A.akt && C.akt.id === A.akt.id && C.akt.idx === A.akt.idx, [A.akt, C.akt]);
      const M = await bacaA(mita); catat(label + ' HP Mita', M);
      periksa(label + ': HP Mita tetap di soal yang sama', !!M.akt && !!A.akt && M.akt.id === A.akt.id && M.akt.soal === A.soalId, M.akt);
    }
    return B;
  }
  // papan room berjalan: dua soal selesai, soal 3 tampil (Mita sudah menjawab Ragu bila jawabRagu)
  async function papanSoal3(p, mita, jawabRagu) {
    await mulaiDariDialog(p, 10);
    await satuSoal(p, mita); await satuSoal(p, mita);
    if (jawabRagu) { const k3 = await kunciKini(p); await jawabAnggota(mita, k3, 'ragu'); await tunggu(p.page, () => document.querySelectorAll('.papan-baris[data-jauh]').length >= 1, null, 8000); }
  }
  async function sebelum(p) { await tidur(6000); const A = await bacaP(p); A.jauh = await jauh(p); catat('SEBELUM', Object.assign(ring(A), { jauh: A.jauh })); await foto(p, 'sebelum'); return A; }
  function broker(nyala) {
    for (const c of BROKER_CONF) {
      if (nyala) execSync(MOSQUITTO + ' -c ' + JSON.stringify(c) + ' -d');
      else execSync('pkill -f ' + JSON.stringify('[m]osquitto -c ' + c) + ' || true'); // [m]: pola tidak mengenai shell yang menjalankan pkill
    }
    execSync('sleep 1');
  }

  const kasusFn = {
    async kerja() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      const w0 = await muatUlangBasi(p); catat('sisa waktu tepat sebelum muat ulang', w0);
      const B = await cekTetap(p, mita, A, 'muat ulang 1');
      const dW = w0 && detik(w0.waktu), dB = detik(B.waktu);
      periksa('muat ulang 1: pagehide menyimpan titik lanjut saat itu juga (sisa waktu tidak melebihi sisa tepat sebelum muat ulang)', dW != null && dB != null && dB <= dW, { sebelum: w0 && w0.waktu, sesudah: B.waktu });
      const jB = await jauh(p); periksa('muat ulang 1: jawaban Mita yang sudah masuk tetap tampil di papan', jB >= A.jauh && A.jauh >= 1, [A.jauh, jB]); },
    async bahas() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); await bukaKunci(p); const A = await sebelum(p);
      await p.page.reload({ waitUntil: 'load' }); const B = await cekTetap(p, mita, A, 'muat ulang 1');
      periksa('muat ulang 1: tetap fase membahas', /Membahas/.test(B.laju || ''), B.laju); },
    async dua() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      await p.page.reload({ waitUntil: 'load' }); await cekTetap(p, mita, A, 'muat ulang 1');
      const A2 = await bacaP(p); await p.page.reload({ waitUntil: 'load' }); await cekTetap(p, mita, A2, 'muat ulang 2'); },
    async majumundur() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      await p.page.goBack(); await tidur(2000); catat('sesudah kembali', ring(await bacaP(p)));
      await p.page.goForward(); await cekTetap(p, mita, A, 'kembali lalu maju', { tunggu: 3000 }); },
    async putus() {
      if (!BROKER_CONF.length || !RELAI) { console.log('LEWAT ' + kasusKini + ': butuh RELAI dan BROKER_CONF'); return; }
      const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      broker(false);
      try {
        await p.page.reload({ waitUntil: 'load' });
        await cekTetap(p, mita, A, 'relai mati', { tanpaRoom: true, tunggu: 3000 });
      } finally { broker(true); }
      const ms = await tunggu(p.page, () => { try { return UKP.ruang.status().tersambung && UKP.ruang.state().aktivitas; } catch (e) { return false; } }, null, 60000);
      const C = await bacaP(p); catat('sesudah relai hidup lagi', Object.assign(ring(C), { ms }));
      periksa('relai hidup lagi: room tersambung, aktivitas sesi sama', ms >= 0 && !!C.akt && C.akt.id === A.akt.id, C.akt);
      periksa('relai hidup lagi: papan masih soal yang sama', C.soalId === A.soalId, [A.soalId, C.soalId]);
      await tunggu(mita.page, () => { try { return UKP.ruang.status().tersambung; } catch (e) { return false; } }, null, 60000);
      await bukaKunci(p); await tidur(3000);
      const M = await bacaA(mita); catat('HP Mita sesudah kunci dibuka', M);
      periksa('relai hidup lagi: HP Mita menerima kunci soal yang sama', !!M.akt && M.akt.id === A.akt.id && M.akt.soal === A.soalId && (M.hasil || M.akt.fase === 'kunci'), M.akt);
    },
    async akhir() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, false); await sebelum(p);
      await p.page.click('.fokus-menu summary'); await tidur(200);
      await p.page.locator('.fokus-menu .menu-lebih-isi button', { hasText: 'Akhiri latihan dan lihat hasil' }).click(); await tidur(400);
      if (await p.page.locator('dialog[open] .btn-primary').count()) await p.page.locator('dialog[open] .btn-primary').first().click();
      await tidur(3000);
      const B = await bacaP(p); catat('layar hasil', ring(B));
      await p.page.reload({ waitUntil: 'load' }); await tidur(5000);
      const C = await bacaP(p); catat('SESUDAH muat ulang layar hasil', ring(C)); await foto(p, 'akhir-sesudah');
      periksa('sesudah selesai: muat ulang TIDAK memulai sesi baru', C.sesi.length === B.sesi.length && !C.aktif && !/Soal 1 dari/.test(C.kop), { nSesi: [B.sesi.length, C.sesi.length], kop: C.kop, aktif: C.aktif });
      // G4: layar hasil menulis rute { evaluasi }; muat ulang membuka evaluasi sesi itu (#tim/sesi:<id>), bukan halaman Latih
      const idSelesai = (B.sesi.find(x => x.selesai) || {}).id;
      periksa('G4 layar hasil: rute { evaluasi: <id sesi> }', !!idSelesai && !!B.state && B.state.view === 'latih' && !!B.state.params && B.state.params.evaluasi === idSelesai && !B.state.params.lanjut, B.state);
      const ev = await p.page.evaluate(() => ({ view: UKP.sekarang().view, params: UKP.sekarang().params, hash: location.hash, eval: !!document.querySelector('main .tim-sesi'), judul: ((document.querySelector('main h1') || {}).textContent || '').trim() }));
      catat('G4 sesudah muat ulang', ev);
      periksa('G4 muat ulang layar hasil membuka evaluasi sesi itu', ev.view === 'tim' && ev.params.anggota === 'sesi:' + idSelesai && ev.eval && /Evaluasi tim/.test(ev.judul), ev);
      await p.page.reload({ waitUntil: 'load' }); await tidur(3000);
      const ev2 = await p.page.evaluate(() => ({ view: UKP.sekarang().view, anggota: UKP.sekarang().params.anggota, nSesi: (UKP.store.get().sesiBersama || []).length }));
      periksa('G4 muat ulang sekali lagi: tetap evaluasi sesi itu, tanpa sesi baru', ev2.view === 'tim' && ev2.anggota === 'sesi:' + idSelesai && ev2.nSesi === B.sesi.length, ev2); },
    async mulaibaru() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, false); const A = await sebelum(p);
      await p.page.evaluate(() => UKP.go('latih', { atur: 1, bersama: 1 })); await tidur(2000);
      catat('tombol Mulai', await klikMulaiSaringan(p)); await tidur(800);
      const d1 = await dialogTerbuka(p); catat('dialog sesudah Mulai', d1);
      periksa('Mulai baru: minta persetujuan dulu, menyebut nomor soal dan cara melanjutkan', !!d1 && /soal 3 dari 10 belum selesai/.test(d1) && /Kembali ke latihan/.test(d1) && /HP anggota ikut pindah/.test(d1), d1);
      if (d1) await klikDialog(p, 'Batal'); await tidur(1500);
      const B = await bacaP(p);
      periksa('Mulai baru dibatalkan: sesi lama tetap dan room tetap', !!B.aktif && B.aktif.sesiId === A.aktif.sesiId && !!B.akt && B.akt.id === A.akt.id, { aktif: B.aktif, akt: B.akt });
      await klikMulaiSaringan(p); await tidur(800); if (await dialogTerbuka(p)) await klikDialog(p, 'Akhiri dan mulai baru');
      await tunggu(p.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(3000);
      const C = await bacaP(p); catat('sesudah setuju mulai baru', ring(C));
      periksa('Mulai baru disetujui: sesi baru di soal 1, sesi lama selesai', !!C.aktif && C.aktif.sesiId !== A.aktif.sesiId && /Soal 1 dari/.test(C.kop) && !!C.sesi.find(x => x.id === A.aktif.sesiId && x.selesai), { kop: C.kop, sesi: C.sesi });
      await tunggu(mita.page, id => { try { const a = UKP.ruang.state().aktivitas; return !!a && a.id === id; } catch (e) { return false; } }, C.aktif && C.aktif.sesiId, 10000);
      const M = await bacaA(mita); periksa('Mulai baru disetujui: HP Mita ikut sesi baru', !!M.akt && !!C.akt && M.akt.id === C.akt.id && C.akt.id === C.aktif.sesiId, { m: M.akt, akt: C.akt });
      await p.page.reload({ waitUntil: 'load' }); await cekTetap(p, mita, C, 'sesi baru dimuat ulang'); },
    async dialogroom() { const { p, mita } = await siapRoom();
      await mulaiPapanSatuLayar(p, { mulai: true, n: 10 });
      const L1 = await bacaP(p); catat('sesi satu layar', ring(L1));
      await p.page.evaluate(() => UKP.go('room')); await tidur(2000);
      await p.page.click('.lobi-room .room-utama'); await p.page.waitForSelector('dialog[open] .room-mulai', { timeout: 8000 * LAMBAT });
      await p.page.click('dialog[open] .room-mulai'); await tidur(1000);
      const dlg = await dialogTerbuka(p); catat('sesudah tekan Mulai di dialog room', { dialog: dlg });
      periksa('dialog room: minta persetujuan karena ada sesi belum selesai', !!dlg && /belum selesai/.test(dlg) && /kartu Lanjutkan/.test(dlg), dlg);
      if (dlg && /belum selesai/.test(dlg)) await klikDialog(p, 'Akhiri dan mulai baru');
      await tunggu(p.page, () => !!document.querySelector('.soal') && document.querySelectorAll('.papan-baris').length >= 2, null, 10000); await tidur(3000);
      const B = await bacaP(p); catat('sesudah setuju', ring(B)); await foto(p, 'sesudah');
      periksa('dialog room: papan sesi baru di soal 1 (bukan saringan + kartu)', !!B.soalId && /Soal 1 dari/.test(B.kop) && !B.kartuLanjut, { h1: B.h1, kop: B.kop });
      periksa('dialog room: sesi baru berjalan di room', !!B.akt && !!B.aktif && B.akt.id === B.aktif.sesiId, { akt: B.akt, aktif: B.aktif });
      periksa('dialog room: sesi satu layar lama ditutup (selesai, atau dibuang karena belum berisi soal)', !B.sesi.find(x => L1.aktif && x.id === L1.aktif.sesiId && !x.selesai), B.sesi);
      await tunggu(mita.page, id => { try { const a = UKP.ruang.state().aktivitas; return !!a && a.id === id; } catch (e) { return false; } }, B.aktif && B.aktif.sesiId, 10000);
      const M = await bacaA(mita); periksa('dialog room: HP Mita ikut sesi baru', !!M.akt && !!B.akt && M.akt.id === B.akt.id, M.akt); },
    async hilang() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, false); const A = await sebelum(p);
      await p.page.click('.fokus-menu summary'); await tidur(200);
      await p.page.locator('.fokus-menu .menu-lebih-isi button', { hasText: 'Kembali ke lobi' }).click(); await tidur(2000);
      await p.page.evaluate(() => { const s = UKP.store.get(); s.bersamaAktif.soalIds[7] = 'X9-999'; UKP.store.save(); }); await tidur(300);
      await p.page.evaluate(() => UKP.go('latih', { lanjut: 1, room: 1 })); await tidur(2500);
      const B = await bacaP(p); const banner = await p.page.evaluate(() => [...document.querySelectorAll('main .banner')].map(b => b.textContent.trim()));
      catat('titik lanjut dengan soal hilang', Object.assign(ring(B), { banner })); await foto(p, 'hilang');
      periksa('soal hilang: tidak ada kartu Lanjutkan yang berputar, ada keterangan', !B.kartuLanjut && banner.some(x => /tidak bisa dilanjutkan/.test(x)), { kartu: B.kartuLanjut, banner });
      periksa('soal hilang: tidak memulai sesi baru otomatis', B.sesi.length === A.sesi.length && !B.soalId, { nSesi: B.sesi.length, soal: B.soalId });
      periksa('soal hilang: sesi itu diakhiri (rekaman selesai, titik lanjut dihapus)', !B.aktif && !!B.sesi.find(x => x.id === A.aktif.sesiId && x.selesai), { aktif: B.aktif, sesi: B.sesi });
      await p.page.evaluate(() => UKP.go('beranda')); await tidur(1500);
      periksa('soal hilang: Beranda tidak menawarkan Lanjutkan lagi', !(await p.page.evaluate(() => !!document.querySelector('.kartu-lanjut-bersama'))));
      await tunggu(mita.page, id => { try { const a = UKP.ruang.state().aktivitas; return !a || a.id !== id; } catch (e) { return false; } }, A.akt && A.akt.id, 10000);
      const M = await bacaA(mita); periksa('soal hilang: HP Mita tidak tertinggal di latihan lama', !M.akt || !A.akt || M.akt.id !== A.akt.id, M.akt); },
    async transisi() { const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      // tab yang memulai sesi di versi lama: entri riwayat masih { mulai: true, n, room: 1 } saat versi baru dimuat ulang
      await p.page.evaluate(() => { const st = history.state; history.replaceState(Object.assign({}, st, { params: { mulai: true, n: 10, room: 1 } }), ''); });
      await p.page.reload({ waitUntil: 'load' });
      await cekTetap(p, mita, A, 'entri lama { mulai } dimuat ulang'); },
    async penuh() { const { p, mita } = await siapRoom();
      catat('localStorage diisi penuh', await p.page.evaluate(() => { let n = 0, i = 0; for (let uk = 1000000; uk >= 1; uk = Math.floor(uk / 2)) { const blok = 'x'.repeat(uk); for (;;) { try { localStorage.setItem('isi-penuh-' + (i++), blok); n += uk; } catch (e) { break; } } } let ok = true; try { localStorage.setItem('uji-satu', 'xx'); } catch (e) { ok = false; } return { n, masihMuat: ok }; }));
      await sadapToast(p);
      await papanSoal3(p, mita, true); const A = await sebelum(p);
      const toast = await p.page.evaluate(() => window.__toast || []); catat('toast', toast);
      periksa('penyimpanan penuh: toast peringatan tampil sekali', toast.filter(t => /^Penyimpanan peramban penuh atau tidak tersedia\. Posisi latihan ini akan hilang bila halaman dimuat ulang\. Simpan cadangan progres di Pengaturan, bagian Data dan pindah perangkat\.$/.test(t)).length === 1, toast);
      await p.page.reload({ waitUntil: 'load' }); await tidur(6000);
      const B = await bacaP(p); catat('SESUDAH muat ulang (penyimpanan penuh)', ring(B)); await foto(p, 'penuh-sesudah');
      periksa('penyimpanan penuh: muat ulang TIDAK memulai sesi baru dari soal 1', !/Soal 1 dari/.test(B.kop) && (!B.aktif || B.aktif.sesiId === A.aktif.sesiId), { kop: B.kop, h1: B.h1, aktif: B.aktif });
      periksa('penyimpanan penuh: aktivitas room tidak diganti', !B.akt || (A.akt && B.akt.id === A.akt.id), { A: A.akt, B: B.akt }); },
    async k1() {
      // baris Buku Kesalahan di saringan saat latihan bersama room belum selesai: minta persetujuan; setuju = latihan bersama baru, room lama diakhiri
      const { p, mita } = await siapRoom();
      await p.page.evaluate(() => { const so = UKP.konten.semuaSoal('B').slice(0, 3); so.forEach(x => { const salah = ['A', 'B', 'C', 'D'].find(o => o !== x.kunci); UKP.belajar.catatJawaban(x, salah, 10, 'latih'); }); UKP.store.flush(); });
      await papanSoal3(p, mita, false); const A = await sebelum(p);
      await p.page.evaluate(() => UKP.go('latih', { atur: 1 })); await tidur(1500);
      const ada = await p.page.evaluate(() => { const r = document.querySelector('a.row-link[href="#latih"]'); if (!r) return false; r.click(); return true; });
      await tidur(1000);
      periksa('K1 baris Buku Kesalahan ada', ada);
      const d1 = await dialogTerbuka(p); catat('dialog', d1);
      periksa('K1 ketukan baris Buku Kesalahan minta persetujuan', !!d1 && /belum selesai/.test(d1), d1);
      if (d1) await klikDialog(p, 'Batal'); await tidur(1200);
      const B = await bacaP(p);
      periksa('K1 Batal: sesi lama dan room tetap', !!B.aktif && B.aktif.sesiId === A.aktif.sesiId && !!B.akt && B.akt.id === A.akt.id && !B.soalId, { aktif: B.aktif, akt: B.akt, soal: B.soalId });
      await p.page.evaluate(() => { const r = document.querySelector('a.row-link[href="#latih"]'); if (r) r.click(); }); await tidur(800);
      if (await dialogTerbuka(p)) await klikDialog(p, 'Akhiri dan mulai baru');
      await tunggu(p.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(1500);
      const C = await bacaP(p); catat('sesudah setuju', ring(C));
      periksa('K1 setuju: latihan bersama baru 1 soal, sesi lama selesai', !!C.aktif && C.aktif.sesiId !== A.aktif.sesiId && C.aktif.n === 1 && /Soal 1 dari 1/.test(C.kop) && !!C.sesi.find(x => x.id === A.aktif.sesiId && x.selesai), { aktif: C.aktif, kop: C.kop, sesi: C.sesi });
      await tunggu(mita.page, id => { try { const a = UKP.ruang.state().aktivitas; return !a || a.id !== id; } catch (e) { return false; } }, A.akt && A.akt.id, 10000);
      const M = await bacaA(mita); periksa('K1 setuju: HP Mita tidak tertinggal di soal lama', !M.akt || !A.akt || M.akt.id !== A.akt.id, M.akt);
    },
    async k2() {
      // satu layar: sesi A selesai, "Latih N soal lagi" membuka sesi B, Kembali tidak membuka papan B lagi
      const p = await buka('Nicky', URL0 + '#beranda', { width: 1280, height: 900 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
      await mulaiPapanSatuLayar(p, { n: 10, mulai: true });
      const a = await bacaP(p);
      await p.page.evaluate(() => { const b = [...document.querySelectorAll('button,[role=menuitem]')].find(x => /Akhiri latihan dan lihat hasil/.test(x.textContent)); if (b) b.click(); }); await tidur(500);
      await p.page.evaluate(() => { const b = [...document.querySelectorAll('dialog[open] button')].find(x => /Akhiri dan lihat hasil/.test(x.textContent)); if (b) b.click(); }); await tidur(1200);
      const a2 = await bacaP(p); periksa('K2 sesi A selesai', !a2.aktif, a2.aktif);
      const tombol = await p.page.evaluate(() => { const b = [...document.querySelectorAll('main button')].find(x => /^Latih (\d+|semua) soal lagi$/.test(x.textContent.trim())); if (b) { b.click(); return b.textContent.trim(); } return null; });
      if (!tombol) await p.page.evaluate(() => UKP.go('latih', Object.assign({}, history.state.params, { lanjut: null, sesi: null, mulai: true })));
      catat('tombol latih lagi', tombol || '(UKP.go)');
      await tunggu(p.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(1500);
      const b = await bacaP(p); periksa('K2 sesi B berjalan', !!b.aktif && (!a.aktif || b.aktif.sesiId !== a.aktif.sesiId), b.aktif);
      await p.page.goBack(); await tidur(1800);
      const d = await bacaP(p); catat('sesudah Kembali', ring(d));
      periksa('K2 Kembali dari papan B pindah halaman (bukan papan B lagi)', !/Soal \d+ dari/.test(d.kop), { kop: d.kop, h1: d.h1, state: d.state && d.state.params });
      periksa('K2 Kembali tidak membuat sesi baru dan sesi B tetap bisa dilanjutkan', !!d.aktif && d.aktif.sesiId === b.aktif.sesiId && d.sesi.length === b.sesi.length, { aktif: d.aktif, nSesi: [b.sesi.length, d.sesi.length] });
    },
    async k3() {
      // tab salinan (history.state disalin) tidak menjalankan papan kedua untuk sesi yang sama
      const p = await buka('Nicky', URL0 + '#beranda', { width: 1280, height: 900 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
      await mulaiPapanSatuLayar(p, { n: 10, mulai: true });
      const a = await bacaP(p); const st = await p.page.evaluate(() => history.state);
      const p2 = { nama: 'Salinan', ctx: p.ctx, page: await p.ctx.newPage() };
      p2.page.on('pageerror', e => galatHalaman.push(kasusKini + ' Salinan: ' + String(e.message).slice(0, 200)));
      await p2.page.addInitScript(SADAP_TOAST_AWAL);
      await p2.page.goto(p.page.url(), { waitUntil: 'load' }); await tidur(800);
      await p2.page.evaluate(s => history.replaceState(s, '', location.hash), st); await p2.page.reload({ waitUntil: 'load' }); await tidur(1500);
      const b = await bacaP(p2); const tb = await daftarToast(p2); catat('tab salinan', Object.assign(ring(b), { toast: tb })); await foto(p2, 'salinan');
      periksa('K3 tab salinan TIDAK menjalankan papan kedua untuk sesi yang sama', !/Soal \d+ dari/.test(b.kop) && !b.soalId, { tab1: a.kop, tab2: b.kop, state: st.params });
      periksa('K3 tab salinan menampilkan kartu Lanjutkan dan toast tab lain', b.kartuLanjut && tb.includes('Latihan ini sedang terbuka di tab lain.'), { kartu: b.kartuLanjut, toast: tb });
      periksa('K3 rute tab salinan menjadi { atur: 1 }', !!(b.state && b.state.params && b.state.params.atur) && !b.state.params.lanjut && !b.state.params.sesi, b.state && b.state.params);
      const a2 = await bacaP(p); periksa('K3 tab pertama tetap di papan yang sama', a2.soalId === a.soalId && !!a2.aktif && a2.aktif.sesiId === a.aktif.sesiId, [a.soalId, a2.soalId]);
      await p.page.close();
      await p2.page.reload({ waitUntil: 'load' }); await tidur(1500);
      const c = await bacaP(p2); catat('tab salinan sesudah tab pertama ditutup lalu dimuat ulang', ring(c));
      periksa('K3 sesudah tab pertama ditutup, kartu Lanjutkan di tab salinan masih ada (tidak ada sesi baru)', c.kartuLanjut && !!c.aktif && c.aktif.sesiId === a.aktif.sesiId && c.sesi.length === a.sesi.length, { kartu: c.kartuLanjut, aktif: c.aktif });
    },
    async ulang() {
      // putaran ulang bersama (params.ids, mis. "Ulangi N soal yang salah" dari Dasbor tim) di perangkat pemimpin room, lalu muat ulang
      const { p, mita } = await siapRoom();
      const ids = await p.page.evaluate(() => UKP.konten.semuaSoal('B').slice(10, 15).map(x => x.id).join(','));
      await mulaiPapanSatuLayar(p, { ids });
      await tidur(4000); const A = await bacaP(p); catat('SEBELUM', ring(A)); await foto(p, 'sebelum');
      periksa('putaran ulang: papan bersama berjalan sebagai putaran ulang', !!A.soalId && !!A.aktif && !!A.aktif.ulang && A.aktif.n === 5, A.aktif);
      await p.page.reload({ waitUntil: 'load' });
      const B = await cekTetap(p, mita, A, 'putaran ulang dimuat ulang', { tanpaRoom: true });
      periksa('putaran ulang dimuat ulang: tetap putaran ulang yang sama (tidak diacak ulang)', !!B.aktif && !!B.aktif.ulang && B.aktif.n === 5, B.aktif);
    },
    async muatgagal() {
      // F1: berkas soal dari soal yang sedang tampil gagal diunduh sekali saat muat ulang (gangguan jaringan sesaat). Sesi room tidak
      // boleh diakhiri. Muat ulang berikutnya (jaringan pulih) melanjutkan papan yang sama, dan HP anggota tidak pindah
      const { p, mita } = await siapRoom(); await papanSoal3(p, mita, true); const A = await sebelum(p);
      const kode = String(A.soalId || '').split('-')[0]; const pola = new RegExp('/js/data/mu-' + kode + '\\.js');
      let diblokir = 0;
      const blokir = r => { diblokir++; return r.abort('failed'); };
      await p.page.route(pola, blokir);
      await p.page.reload({ waitUntil: 'load' }); await tidur(3000);
      await p.page.unroute(pola, blokir);
      const B = await bacaP(p); const banner = await p.page.evaluate(() => [...document.querySelectorAll('main .banner')].map(b => b.textContent.trim().replace(/\s+/g, ' ')));
      catat('sesudah muat ulang dengan mu-' + kode + '.js gagal', Object.assign(ring(B), { banner, diblokir })); await foto(p, 'muatgagal');
      periksa('muat gagal: berkas soal memang diblokir', diblokir >= 1, diblokir);
      periksa('muat gagal: sesi dan titik lanjut tetap (tidak diakhiri)', !!B.aktif && B.aktif.sesiId === A.aktif.sesiId && !!B.sesi.find(x => x.id === A.aktif.sesiId && !x.selesai), { aktif: B.aktif, sesi: B.sesi });
      periksa('muat gagal: papan tidak dilanjutkan otomatis, kartu Lanjutkan tampil', !B.soalId && B.kartuLanjut, { soal: B.soalId, kartu: B.kartuLanjut });
      periksa('muat gagal: banner meminta muat ulang halaman', banner.some(x => /Sebagian data soal gagal dimuat\. Muat ulang halaman untuk melanjutkan latihan\./.test(x)) && !banner.some(x => /sudah diakhiri/.test(x)), banner);
      periksa('muat gagal: tidak ada sesi baru', B.sesi.length === A.sesi.length, [A.sesi.length, B.sesi.length]);
      await tunggu(p.page, () => { try { return UKP.ruang.status().tersambung; } catch (e) { return false; } }, null, 15000); await tidur(1500);
      const B2 = await bacaP(p); periksa('muat gagal: aktivitas room tidak diakhiri', !!B2.akt && !!A.akt && B2.akt.id === A.akt.id, [A.akt, B2.akt]);
      const M = await bacaA(mita); periksa('muat gagal: HP Mita tetap di soal yang sama', !!M.akt && !!A.akt && M.akt.id === A.akt.id && M.akt.soal === A.soalId && !M.hasil, M);
      await p.page.reload({ waitUntil: 'load' });
      await cekTetap(p, mita, A, 'jaringan pulih lalu dimuat ulang');
    },
    async salinan() {
      // F2: papan dimulai dari #latih tanpa params, tab salinan menampilkan kartu Lanjutkan. Sesudah latihan di tab pertama berakhir,
      // muat ulang tab salinan TIDAK memulai latihan baru sendiri
      const p = await buka('Nicky', URL0 + '#beranda', { width: 1280, height: 900 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
      await mulaiPapanSatuLayar(p, {});
      const a = await bacaP(p); const st = await p.page.evaluate(() => history.state); catat('tab 1 papan dari #latih tanpa params', ring(a));
      periksa('salinan: tab 1 papan berjalan dengan rute { lanjut, sesi }', !!a.soalId && !!a.aktif && !!st.params && st.params.sesi === a.aktif.sesiId, st.params);
      const p2 = { nama: 'Salinan', ctx: p.ctx, page: await p.ctx.newPage() };
      p2.page.on('pageerror', e => galatHalaman.push(kasusKini + ' Salinan: ' + String(e.message).slice(0, 200)));
      await p2.page.goto(p.page.url(), { waitUntil: 'load' }); await tidur(800);
      await p2.page.evaluate(s => history.replaceState(s, '', location.hash), st); await p2.page.reload({ waitUntil: 'load' }); await tidur(1500);
      const b = await bacaP(p2); catat('tab salinan', ring(b));
      periksa('salinan: tab salinan menampilkan kartu Lanjutkan dengan rute { atur: 1 }', b.kartuLanjut && !b.soalId && !!(b.state && b.state.params && b.state.params.atur), { kartu: b.kartuLanjut, state: b.state && b.state.params });
      await p.page.bringToFront();
      await p.page.evaluate(() => { const x = [...document.querySelectorAll('button,[role=menuitem]')].find(e => /Akhiri latihan dan lihat hasil/.test(e.textContent)); if (x) x.click(); }); await tidur(500);
      await p.page.evaluate(() => { const x = [...document.querySelectorAll('dialog[open] button')].find(e => /^Akhiri dan lihat hasil$/.test(e.textContent.trim())); if (x) x.click(); }); await tidur(1500);
      const a2 = await bacaP(p); catat('tab 1 sesudah diakhiri', ring(a2));
      periksa('salinan: latihan di tab 1 berakhir', !a2.aktif, a2.aktif);
      await p2.page.bringToFront(); await p2.page.reload({ waitUntil: 'load' }); await tidur(2500);
      const c = await bacaP(p2); catat('tab salinan dimuat ulang sesudah latihan berakhir', ring(c)); await foto(p2, 'salinan-sesudah');
      periksa('salinan: muat ulang tab salinan tidak memulai latihan baru sendiri', !c.soalId && !c.aktif && c.sesi.length === a2.sesi.length, { kop: c.kop, aktif: c.aktif, nSesi: [a2.sesi.length, c.sesi.length] });
      // tab salinan dengan rute kosong (entri lama): halaman saringan, tidak langsung mulai
      await p2.page.evaluate(() => history.replaceState({ view: 'latih', params: {} }, '', location.hash)); await p2.page.reload({ waitUntil: 'load' }); await tidur(2500);
      const d = await bacaP(p2); catat('rute kosong dipulihkan', ring(d));
      periksa('salinan: rute kosong yang dipulihkan saat muat ulang tidak memulai latihan bersama baru', !d.soalId && d.sesi.length === a2.sesi.length, { kop: d.kop, nSesi: d.sesi.length });
      // navigasi baru lewat menu Latih tanpa params tetap langsung mulai
      await p2.page.evaluate(() => UKP.go('latih', {})); await tunggu(p2.page, () => !!document.querySelector('.soal'), null, 8000);
      const e = await bacaP(p2); periksa('salinan: menu Latih tanpa params (navigasi baru) tetap langsung mulai', !!e.soalId, { kop: e.kop });
    },
    async enterdua() {
      // G1: Enter pada tombol Mulai membuka dialog persetujuan dengan fokus di Batal; Enter kedua menutup dialog tanpa mengakhiri sesi lama
      const p = await buka('Nicky', URL0 + '#beranda', { width: 1280, height: 900 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
      await mulaiPapanSatuLayar(p, { n: 10, mulai: true });
      const A = await bacaP(p);
      await p.page.evaluate(() => UKP.go('latih', { atur: 1 })); await tidur(1500);
      const fokusMulai = await p.page.evaluate(() => { const x = [...document.querySelectorAll('main button.btn-primary')].find(e => /^Mulai latihan/.test(e.textContent.trim()) && e.offsetParent !== null); if (x) x.focus(); return document.activeElement === x ? x.textContent.trim() : null; });
      periksa('G1 tombol Mulai berfokus', !!fokusMulai, fokusMulai);
      await p.page.keyboard.press('Enter'); await tidur(600);
      const d1 = await p.page.evaluate(() => { const d = [...document.querySelectorAll('dialog[open]')].pop(); const a = document.activeElement; return d ? { teks: (d.innerText || '').replace(/\n+/g, ' | ').slice(0, 300), fokus: a && d.contains(a) ? a.textContent.trim() : null } : null; });
      catat('dialog sesudah Enter pertama', d1); await foto(p, 'dialog');
      periksa('G1 Enter pertama: dialog persetujuan dengan fokus di Batal', !!d1 && /belum selesai/.test(d1.teks) && d1.fokus === 'Batal', d1);
      await p.page.keyboard.press('Enter'); await tidur(1200);
      const B = await bacaP(p); const d2 = await dialogTerbuka(p);
      catat('sesudah Enter kedua', Object.assign(ring(B), { dialog: d2 }));
      periksa('G1 Enter kedua: dialog tertutup, sesi lama tetap, tanpa sesi baru', !d2 && !B.soalId && !!B.aktif && B.aktif.sesiId === A.aktif.sesiId && B.sesi.length === A.sesi.length && !!B.sesi.find(x => x.id === A.aktif.sesiId && !x.selesai), { dialog: d2, aktif: B.aktif, sesi: B.sesi });
    },
    async ketuk() {
      // G2 dan G3: tombol Lanjutkan di kartu Beranda dan "Kembali ke latihan" (rute { lanjut, room }) di tab kedua saat papan sesi itu hidup
      // di tab pertama: tanpa papan kedua, saringan dengan kartu dan keterangan "Sedang terbuka di tab lain."
      const p = await buka('Nicky', URL0 + '#beranda', { width: 1280, height: 900 }, { profil: { nama: 'Nicky', tingkat: 'B', onboardingSelesai: true } });
      await mulaiPapanSatuLayar(p, { n: 10, mulai: true });
      const a = await bacaP(p);
      const p2 = { nama: 'Tab2', ctx: p.ctx, page: await p.ctx.newPage() };
      p2.page.on('pageerror', e => galatHalaman.push(kasusKini + ' Tab2: ' + String(e.message).slice(0, 200)));
      await p2.page.addInitScript(SADAP_TOAST_AWAL);
      await p2.page.goto(URL0 + '#beranda', { waitUntil: 'load' }); await tunggu(p2.page, () => !!document.querySelector('.kartu-lanjut-bersama'), null, 10000);
      const klik = await p2.page.evaluate(() => { const b = [...document.querySelectorAll('.kartu-lanjut-bersama button')].find(x => /Lanjutkan latihan bersama/.test(x.textContent)); if (b) b.click(); return !!b; });
      periksa('G3 kartu Lanjutkan di Beranda tab kedua', klik);
      await tidur(1500);
      const b = await bacaP(p2); const ket = await p2.page.evaluate(() => { const k = document.querySelector('.kartu-lanjut-bersama .kartu-lanjut-tablain'); return k ? k.textContent.trim() : null; });
      const tb = await daftarToast(p2); catat('tab kedua sesudah Lanjutkan diketuk', Object.assign(ring(b), { ket, toast: tb })); await foto(p2, 'ketuk');
      periksa('G3 Lanjutkan yang diketuk TIDAK memasang papan kedua', !b.soalId && !/Soal \d+ dari/.test(b.kop), { kop: b.kop });
      periksa('G2 kartu Lanjutkan menulis "Sedang terbuka di tab lain."', b.kartuLanjut && ket === 'Sedang terbuka di tab lain.', { kartu: b.kartuLanjut, ket });
      periksa('G2 toast tab lain tampil', tb.includes('Latihan ini sedang terbuka di tab lain.'), tb);
      periksa('G3 rute tab kedua menjadi { atur: 1 }', !!(b.state && b.state.params && b.state.params.atur) && !b.state.params.lanjut, b.state && b.state.params);
      await tidur(3500);
      const t5 = await p2.page.evaluate(() => { const t = document.querySelector('.toast:not([hidden]) .toast-teks'); const k = document.querySelector('.kartu-lanjut-tablain'); return { tampil: t ? t.textContent : null, akhir: (window.__toast || []).slice(-1)[0] || null, ket: k ? k.textContent.trim() : null }; });
      catat('toast sekitar 5 detik sesudah ketukan', t5);
      periksa('G2 keterangan di kartu masih ada sekitar 5 detik kemudian (toast boleh tertimpa toast lain)', t5.ket === 'Sedang terbuka di tab lain.', t5);
      // "Kembali ke latihan" atau "Kembali ke papan" di room memakai rute { lanjut: 1, room: 1 }
      await p2.page.evaluate(() => UKP.go('latih', { lanjut: 1, room: 1 })); await tidur(1500);
      const c = await bacaP(p2); catat('tab kedua sesudah rute { lanjut, room }', ring(c));
      periksa('G3 rute { lanjut, room } di tab kedua: tanpa papan kedua, kartu dengan keterangan', !c.soalId && c.kartuLanjut && !!(c.state && c.state.params && c.state.params.atur && !c.state.params.room), { kop: c.kop, state: c.state && c.state.params });
      const a2 = await bacaP(p); periksa('G3 tab pertama tetap di papan yang sama, tanpa sesi baru', a2.soalId === a.soalId && !!a2.aktif && a2.aktif.sesiId === a.aktif.sesiId && a2.sesi.length === a.sesi.length, [a.soalId, a2.soalId, a.sesi.length, a2.sesi.length]);
      // tab pertama ditutup: ketukan Lanjutkan di tab kedua memasang papan sesi itu di soal yang sama
      await p.page.close(); await tidur(500);
      await p2.page.evaluate(() => { const b = [...document.querySelectorAll('.kartu-lanjut-bersama button')].find(x => /Lanjutkan latihan bersama/.test(x.textContent)); if (b) b.click(); });
      await tunggu(p2.page, () => !!document.querySelector('.soal'), null, 8000); await tidur(800);
      const d = await bacaP(p2); catat('tab kedua sesudah tab pertama ditutup', ring(d));
      periksa('G3 sesudah tab pertama ditutup: Lanjutkan memasang papan sesi yang sama di soal yang sama', d.soalId === a.soalId && !!d.aktif && d.aktif.sesiId === a.aktif.sesiId && d.sesi.length === a.sesi.length, { soal: [a.soalId, d.soalId], aktif: d.aktif });
    },
  };

  for (const k of KASUS) {
    if (!kasusFn[k]) { console.log('GAGAL kasus tidak dikenal: ' + k); gagalTotal++; continue; }
    kasusKini = k; gagal = 0; konteks = [];
    console.log('--- kasus ' + k);
    try { await kasusFn[k](); } catch (e) { gagal++; gagalTotal++; console.log('GAGAL ' + k + ': skrip berhenti  ' + String((e && e.stack) || e).slice(0, 500)); }
    for (const c of konteks) { try { await c.close(); } catch (e) {} }
    ringkasKasus.push(k + ' ' + (gagal ? 'GAGAL (' + gagal + ')' : 'LULUS'));
  }
  if (galatHalaman.length) { gagalTotal++; console.log('GAGAL galat halaman  ' + JSON.stringify(galatHalaman.slice(0, 8))); } else console.log('LULUS tanpa galat halaman');
  console.log('RINGKAS ' + ringkasKasus.join(' · '));
  await browser.close(); server.close();
  process.exit(gagalTotal ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
