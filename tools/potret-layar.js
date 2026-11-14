// Potret layar utama MABAR UKP di satu mesin peramban, untuk dilihat sebelum rilis tampilan.
// Di GitHub dipakai dengan WebKit (mesin Safari) dan profil iPhone. Gambarnya dikirim sebagai catatan sebuah check run,
// supaya bisa diambil lewat API GitHub tanpa mengunduh berkas artefak.
//
// Potret : [BROWSER=chromium|webkit|firefox] [LABEL_CEK=lama] node tools/potret-layar.js potret <root> <folder> [nama,nama]
// Ambil  : node tools/potret-layar.js ambil <pemilik/repo> <sha> <folder>        (butuh CLI gh yang sudah masuk)
// Daftar : node tools/potret-layar.js daftar
//
// Tanpa data pengguna: profil contoh, riwayat dibuat skrip, service worker diblokir, tidak ada room yang dibuka.
// Soal yang tampil dibuat tetap (Math.random diberi benih), supaya gambar dari dua mesin peramban bisa dibandingkan.
//
// v9.6.5: juga jalan dengan Playwright lama dan Node 16 (image Docker lama, mesin Safari versi lama; lihat potret-webkit-lama.yml).
// - Playwright di bawah 1.24 belum mengenal opsi serviceWorkers: 'block'; navigator.serviceWorker disembunyikan lewat addInitScript.
// - Pengiriman ke check run memakai node:https (bukan fetch, yang belum global di Node 16).
// - Tanpa sintaks atau API Node di atas versi 16. Perangkat 'iPhone 13' punya cadangan bila tidak dikenal.
// - LABEL_CEK=<label>: nama check run menjadi "Potret layar <peramban> <label> <versi mesin>", mis. "Potret layar webkit lama 15.4".
//   Tanpa LABEL_CEK nama tetap "Potret layar <peramban>".
// - PW_ANGGAP_VERSI=<x.y.z>: hanya untuk menguji; alat berlaku seolah Playwright versi itu yang terpasang.
'use strict';
const http = require('node:http'); const https = require('node:https'); const fs = require('node:fs'); const path = require('node:path');
const MODE = process.argv[2];
const BROWSER = String(process.env.BROWSER || 'chromium').toLowerCase();
const diGitHub = !!process.env.GITHUB_ACTIONS;
const LAMBAT = diGitHub ? 2 : 1;                 // mesin uji GitHub lebih lambat: jeda tunggu dua kali
const PERANGKAT_IPHONE = 'iPhone 13';            // 390 x 664 (tinggi layar Safari dengan bilah alamat)
const PERANGKAT_CADANGAN = ['iPhone 12', 'iPhone 11'];   // 390 x 664 dan 414 x 715, untuk Playwright yang belum mengenal iPhone 13
const UA_IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1';
const LABEL_CEK = String(process.env.LABEL_CEK || '').trim();
const LAPTOP = { width: 1280, height: 800 };
const POTONG = 60000;                            // huruf base64 per catatan (batas raw_details 64 KB)
const NAMA_CEK = 'Potret layar ';                // + nama mesin peramban
const PESERTA = ['Nicky', 'Mita', 'Nora'];
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

// ---------- langkah bersama ----------
const tidur = ms => new Promise(r => setTimeout(r, ms));
const tunggu = (p, ms) => p.waitForTimeout(ms * LAMBAT);
const klik = async (p, sel, ms) => { await p.evaluate(s => { const e = document.querySelector(s); if (!e) throw new Error('tidak ada ' + s); e.click(); }, sel); await tunggu(p, ms || 400); };
const klikTeks = async (p, re, lingkup, ms) => {
  await p.evaluate(([r, l]) => {
    const b = [...document.querySelectorAll((l || '') + ' button, ' + (l || '') + ' [role=menuitem], ' + (l || '') + ' a, ' + (l || '') + ' [role=radio]')].find(x => new RegExp(r).test(x.textContent) && (x.offsetParent !== null || x.closest('dialog[open]')));
    if (!b) throw new Error('tidak ada tombol /' + r + '/'); b.click();
  }, [re, lingkup || '']); await tunggu(p, ms || 400);
};
const pergi = async (p, v, params, ms) => { await p.evaluate(([v, q]) => UKP.go(v, q || {}), [v, params || null]); await tunggu(p, ms || 900); };
const pilihOpsi = async (p, huruf, ms) => {
  await p.evaluate(h => { const l = [...document.querySelectorAll('fieldset.opsi label')].find(l => l.offsetParent && ((l.querySelector('kbd') || {}).textContent || '').trim() === h); if (!l) throw new Error('opsi ' + h + ' tidak ada'); (l.querySelector('input') || l).click(); }, huruf);
  await tunggu(p, ms || 600);
};
async function mulaiSim(p, n, menit) {
  await pergi(p, 'simulasi', { format: 'kustom' }, 700);
  await p.fill('#sim-j', String(n)); await p.press('#sim-j', 'Tab'); await p.fill('#sim-m', String(menit)); await p.press('#sim-m', 'Tab'); await tunggu(p, 300);
}
async function jawabSim(p, n, idx) {
  for (let i = 0; i < n; i++) {
    await p.evaluate(k => { const r = [...document.querySelectorAll('main input[type=radio]')][k]; if (!r) throw new Error('opsi simulasi tidak ada'); (r.closest('label') || r).click(); }, idx || 0); await tunggu(p, 150);
    if (i < n - 1) await klikTeks(p, '^\\s*Berikutnya', '', 250);
  }
}
async function kirimSim(p) { await klikTeks(p, '^\\s*(Selesai dan kirim|Kirim)\\s*$', '', 600); await klikTeks(p, 'Kirim dan akhiri', 'dialog[open]', 1500); }
async function mulaiLatih(p) { await pergi(p, 'latih', { n: 5 }); await klikTeks(p, 'Mulai latihan · 5 soal', '', 1300); }
async function mulaiBersama(p) { await pergi(p, 'latih', { n: 3, bersama: 1 }, 900); await klikTeks(p, 'Mulai latihan bersama', '', 1500); }
async function isiPapan(p, pola) {
  // pola: huruf per orang menurut urutan papan, mis. 'ABA' = orang pertama A, kedua B, ketiga A
  await p.evaluate(pola => {
    const grup = {}; [...document.querySelectorAll('.papan-opsi[aria-label^="Jawaban "]')].forEach(b => { const k = b.getAttribute('aria-label').slice(-1); (grup[k] = grup[k] || []).push(b); });
    [...pola].forEach((h, i) => { const b = (grup[h] || [])[i]; if (b) b.click(); });
  }, pola); await tunggu(p, 400);
}
// soal latihan yang sedang tampil: huruf kuncinya dicari lewat teks opsi di data modul
const kunciLatih = p => p.evaluate(() => {
  const fsx = [...document.querySelectorAll('fieldset.opsi')].find(f => f.offsetParent); if (!fsx) return null;
  const opsi = {}; fsx.querySelectorAll('label').forEach(l => { const k = (l.querySelector('kbd') || {}).textContent; const t = (l.querySelector('.teks') || {}).textContent; if (k) opsi[k.trim()] = (t || '').trim(); });
  for (const kode of Object.keys(UKP.modul)) for (const s of UKP.modul[kode].soal || []) {
    if (s.opsi && s.opsi.A != null && String(s.opsi.A).trim() === opsi.A && String(s.opsi.B).trim() === opsi.B) return { kunci: s.kunci, huruf: Object.keys(opsi) };
  }
  return { kunci: null, huruf: Object.keys(opsi) };
});
async function jawabSalah(p) {
  const k = await kunciLatih(p); if (!k || !k.kunci) throw new Error('kunci soal latihan tidak terbaca');
  await pilihOpsi(p, k.huruf.find(x => x !== k.kunci), 900);
  await p.evaluate(() => {
    document.querySelectorAll('main details:not([open])').forEach(d => { if (/bahas|penjelas/i.test(d.className + ' ' + ((d.querySelector('summary') || {}).textContent || ''))) d.open = true; });
    const b = [...document.querySelectorAll('main button[aria-expanded="false"]')].find(b => b.offsetParent && /pembahasan/i.test(b.textContent)); if (b) b.click();
  }); await tunggu(p, 500);
  // penanda benar atau salah digulir ke bagian atas layar supaya pembahasan ikut terlihat
  await p.evaluate(() => { const e = [...document.querySelectorAll('main *')].find(x => x.children.length === 0 && /^Salah\b/.test((x.textContent || '').trim()) && x.offsetParent); if (!e) return; const kotak = e.closest('section, article, div[class]') || e; const r = kotak.getBoundingClientRect(); if (r.top > innerHeight * 0.3) window.scrollBy(0, r.top - innerHeight * 0.15); });
  await tunggu(p, 300);
}

// ---------- daftar layar: [nama, perangkat, tema, jumlah potret (gulir ke bawah), state tambahan, langkah] ----------
const BERSAMA = { bersama: { aktif: true, peserta: PESERTA, tempo: 'longgar' } };
const LANGKAH = {
  beranda: async p => { await pergi(p, 'beranda'); },
  'simulasi-atur': async p => { await mulaiSim(p, 5, 12); },
  'simulasi-jalan': async p => { await mulaiSim(p, 5, 12); await klikTeks(p, 'Mulai simulasi', '', 1300); await jawabSim(p, 2); await klikTeks(p, '^\\s*Berikutnya', '', 400); },
  'simulasi-hasil': async p => { await mulaiSim(p, 5, 12); await klikTeks(p, 'Mulai simulasi', '', 1300); await jawabSim(p, 5); await kirimSim(p); },
  'latih-atur': async p => { await pergi(p, 'latih', { atur: 1 }); },
  'latih-soal': async p => { await mulaiLatih(p); },
  'latih-pembahasan': async p => { await mulaiLatih(p); await jawabSalah(p); },
  // soal yang baru dijawab salah, digulir ke daftar opsi: memperlihatkan tanda "Jawaban Anda" dan "Kunci jawaban" pada opsi
  'latih-terjawab': async p => {
    await mulaiLatih(p); const k = await kunciLatih(p); if (!k || !k.kunci) throw new Error('kunci soal latihan tidak terbaca');
    await pilihOpsi(p, k.huruf.find(x => x !== k.kunci), 900);
    await p.evaluate(() => { const f = [...document.querySelectorAll('fieldset.opsi')].find(f => f.offsetParent); if (f) window.scrollTo(0, f.getBoundingClientRect().top + scrollY - 70); }); await tunggu(p, 300);
  },
  'latih-hasil': async p => {
    await mulaiLatih(p);
    for (let i = 0; i < 5; i++) { await pilihOpsi(p, 'ABCDA'[i], 600); await klikTeks(p, '^\\s*Lanjut\\s*$', '', 800); }
    if (!await p.evaluate(() => /Latihan selesai/.test(document.body.innerText))) throw new Error('tidak sampai "Latihan selesai"');
  },
  'mabar-lobi': async p => { await pergi(p, 'room', null, 1500); },
  'bersama-papan': async p => { await mulaiBersama(p); await isiPapan(p, 'AB'); },
  'bersama-kunci': async p => { await mulaiBersama(p); await isiPapan(p, 'ABA'); await klik(p, '.aksi-buka-kunci', 1200); },
  'bersama-evaluasi': async p => {
    await mulaiBersama(p);
    for (let i = 0; i < 3; i++) { await isiPapan(p, ['ABA', 'CCB', 'DAD'][i]); await klik(p, '.aksi-buka-kunci', 1000); await klikTeks(p, '^\\s*Lanjut\\s*$', '', 1000); }
  },
  'ujiantim-jalan': async p => {
    await mulaiSim(p, 5, 15); await klik(p, '#sim-tim'); await klik(p, '[data-nilai="papan"]'); await klik(p, '.tim-mulai', 1300);
    await p.evaluate(() => { [...document.querySelectorAll('.papan-opsi[aria-label="Jawaban B"]')].slice(0, 2).forEach(b => b.click()); }); await tunggu(p, 300);
  },
  materi: async p => { await pergi(p, 'tingkat', { tingkat: 'B' }); },
  topik: async p => {
    const id = await p.evaluate(() => { for (const k of UKP.konten.kelompok('B')) { const t = (UKP.modul[k].topik || []).find(t => UKP.konten.punyaSoal(t.id, 'B')); if (t) return t.id; } return null; });
    if (!id) throw new Error('topik Tingkat B tidak ditemukan'); await pergi(p, 'topik', { id });
  },
  bank: async p => { await pergi(p, 'bank', null, 1300); },
  kemajuan: async p => { await pergi(p, 'kemajuan', null, 1200); },
  pengaturan: async p => { await pergi(p, 'pengaturan', null, 1000); },
  // halaman menu Lainnya yang berpita sejak v9.6.4
  rencana: async p => { await pergi(p, 'rencana', null, 1100); },
  referensi: async p => { await pergi(p, 'referensi', null, 1100); },
  'info-ujian': async p => { await pergi(p, 'info-ujian', null, 1100); },
  formulir: async p => { await pergi(p, 'formulir', null, 1100); },
  kasus: async p => { await pergi(p, 'kasus', null, 1100); },
  strategi: async p => { await pergi(p, 'strategi', null, 1100); },
};
const LAYAR = [
  ['beranda', 'hp', 'light', 2], ['simulasi-atur', 'hp', 'light', 2], ['simulasi-jalan', 'hp', 'light', 1], ['simulasi-hasil', 'hp', 'light', 2],
  ['latih-atur', 'hp', 'light', 2], ['latih-soal', 'hp', 'light', 1], ['latih-terjawab', 'hp', 'light', 1], ['latih-pembahasan', 'hp', 'light', 2], ['latih-hasil', 'hp', 'light', 2],
  ['bersama-papan', 'hp', 'light', 1], ['bersama-kunci', 'hp', 'light', 2],
  ['mabar-lobi', 'hp', 'light', 1], ['materi', 'hp', 'light', 1], ['topik', 'hp', 'light', 1], ['bank', 'hp', 'light', 1], ['kemajuan', 'hp', 'light', 1], ['pengaturan', 'hp', 'light', 1],
  ['rencana', 'hp', 'light', 1], ['referensi', 'hp', 'light', 1], ['info-ujian', 'hp', 'light', 1], ['formulir', 'hp', 'light', 1], ['kasus', 'hp', 'light', 1], ['strategi', 'hp', 'light', 1],
  ['beranda', 'hp', 'dark', 1], ['simulasi-atur', 'hp', 'dark', 1], ['latih-atur', 'hp', 'dark', 1], ['latih-pembahasan', 'hp', 'dark', 2],
  ['beranda', 'laptop', 'light', 1], ['simulasi-atur', 'laptop', 'light', 1], ['latih-pembahasan', 'laptop', 'light', 1], ['simulasi-hasil', 'laptop', 'light', 1],
  ['bersama-papan', 'laptop', 'light', 1], ['bersama-kunci', 'laptop', 'light', 1], ['bersama-evaluasi', 'laptop', 'light', 1], ['bersama-kunci', 'laptop', 'dark', 1],
  ['ujiantim-jalan', 'laptop', 'light', 1], ['referensi', 'laptop', 'light', 1],
].map(([nama, alat, tema, n]) => ({ nama, alat, tema, n, tag: nama + '-' + alat + (tema === 'dark' ? '-gelap' : ''), tambah: /^(bersama|ujiantim)-/.test(nama) ? BERSAMA : null }));

// ---------- versi Playwright dan opsi yang bergantung padanya ----------
const bandingVersi = (a, b) => {
  const x = String(a).split('.').map(n => parseInt(n, 10) || 0), y = String(b).split('.').map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d < 0 ? -1 : 1; }
  return 0;
};
function versiPlaywright() {
  if (process.env.PW_ANGGAP_VERSI) return String(process.env.PW_ANGGAP_VERSI).trim();
  for (const nama of ['playwright', 'playwright-core']) {
    try { return require(nama + '/package.json').version; } catch (e) {}
    try { return JSON.parse(fs.readFileSync(path.join(path.dirname(require.resolve(nama)), 'package.json'), 'utf8')).version; } catch (e) {}
  }
  return '0.0.0';
}
// opsi serviceWorkers: 'block' baru ada sejak Playwright 1.24
const bisaBlokSW = versi => bandingVersi(versi, '1.24.0') >= 0;
const opsiKonteks = versi => (bisaBlokSW(versi) ? { serviceWorkers: 'block' } : {});
// Dijalankan sebelum skrip aplikasi bila opsi di atas tidak ada: 'serviceWorker' in navigator menjadi false, jadi sw.js tidak didaftarkan.
function sembunyikanSW() {
  try { delete Navigator.prototype.serviceWorker; } catch (e) {}
  try { if ('serviceWorker' in navigator) Object.defineProperty(navigator, 'serviceWorker', { value: undefined, configurable: true }); } catch (e) {}
}
function opsiHP(devices, browser) {
  const d = devices || {}; let dasar = d[PERANGKAT_IPHONE];
  for (const n of PERANGKAT_CADANGAN) if (!dasar) dasar = d[n];
  const opsi = Object.assign({}, dasar || { viewport: { width: 390, height: 664 }, screen: { width: 390, height: 844 }, userAgent: UA_IPHONE, isMobile: true, hasTouch: true });
  delete opsi.defaultBrowserType;
  opsi.deviceScaleFactor = 1;                     // satu piksel per piksel CSS: gambar kecil, cukup untuk memeriksa tata letak
  if ((browser || BROWSER) === 'firefox') delete opsi.isMobile;
  return opsi;
}
// "Potret layar webkit" (jalur terbaru) atau "Potret layar webkit lama 15.4" (dengan LABEL_CEK)
const namaCek = (browser, versiMesin, label) => NAMA_CEK + browser + (label ? ' ' + label + (versiMesin ? ' ' + versiMesin : '') : '');

// ---------- potret ----------
async function potret(root, keluar, pilih) {
  let pw; try { pw = require('playwright'); } catch (e) { pw = require('playwright-core'); }
  if (!['chromium', 'webkit', 'firefox'].includes(BROWSER)) throw new Error('BROWSER tidak dikenal: ' + BROWSER);
  const versiPW = versiPlaywright(); const blokSW = bisaBlokSW(versiPW);
  fs.mkdirSync(keluar, { recursive: true });
  let mintaSW = 0;
  const server = http.createServer((req, res) => {
    let u = decodeURIComponent(req.url.split('?')[0]); if (u === '/') u = '/index.html';
    if (u === '/sw.js') mintaSW++;
    const f = path.join(root, u); if (!f.startsWith(root)) { res.writeHead(403); res.end(); return; }
    fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); res.end('tidak ada'); return; } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' }); res.end(b); });
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r)); const URL0 = 'http://127.0.0.1:' + server.address().port + '/index.html';
  const browser = await pw[BROWSER].launch();
  const versiMesin = String(browser.version() || '?');
  const judul = namaCek(BROWSER, versiMesin, LABEL_CEK);
  console.log(judul + ' · Playwright ' + versiPW + (blokSW ? '' : ' (tanpa opsi serviceWorkers: navigator.serviceWorker disembunyikan)') + ' · Node ' + process.versions.node);
  const hasil = []; const gambar = [];

  async function buka(alat, tema, st) {
    const opsi = alat === 'hp' ? opsiHP(pw.devices, BROWSER) : { viewport: LAPTOP, deviceScaleFactor: 1 };
    // Playwright 1.24 ke atas: serviceWorkers: 'block'; versi lama: navigator.serviceWorker disembunyikan sebelum skrip aplikasi
    const ctx = await browser.newContext(Object.assign(opsi, opsiKonteks(versiPW), { colorScheme: tema }));
    if (!blokSW) await ctx.addInitScript(sembunyikanSW);
    st = JSON.parse(JSON.stringify(st || {}));
    st.profil = Object.assign({ tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: PESERTA[0] }, st.profil || {});
    st.pengaturan = Object.assign({}, st.pengaturan || {}, { tema });
    await ctx.addInitScript(([s, benih]) => {
      let a = benih >>> 0;   // mulberry32: urutan soal dan opsi sama di tiap mesin peramban
      Math.random = function () { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      try { if (!sessionStorage.getItem('potret')) { localStorage.setItem('ukp.v1', s); sessionStorage.setItem('potret', '1'); } } catch (e) {}
    }, [JSON.stringify(st), 20261113]);
    const page = await ctx.newPage(); const galat = [];
    page.on('pageerror', e => galat.push(String(e.message).slice(0, 200)));
    await page.goto(URL0, { waitUntil: 'load' });
    await page.waitForFunction(() => window.UKP && UKP.go && UKP.konten && UKP.modul && Object.keys(UKP.modul).length > 0, null, { timeout: 30000 });
    await tunggu(page, 900);
    return { ctx, page, galat };
  }

  // state awal: sekitar 48 jawaban latihan, beberapa topik dibaca, satu simulasi selesai (dibuat dengan fungsi aplikasi sendiri)
  let awal = {};
  try {
    const { page: p, ctx } = await buka('laptop', 'light', {});
    await p.evaluate(() => {
      const K = UKP.konten, L = UKP.belajar, kel = K.kelompok('B'); let n = 0;
      for (let r = 0; r < 6; r++) for (const k of kel) { const ss = K.soalKelompok(k, 'B'); const s = ss[(r * 7) % ss.length]; if (!s || n >= 48) continue; const benar = (n % 3) !== 2; L.catatJawaban(s, benar ? s.kunci : Object.keys(s.opsi).find(x => x !== s.kunci), 40 + (n * 13) % 80, 'latih'); n++; }
      const st = UKP.store.get(); kel.slice(0, 3).forEach(k => (UKP.modul[k].topik || []).slice(0, 3).forEach(t => { st.topikDibaca[t.id] = Date.now() - 86400000 * 3; }));
      st.jawaban.forEach((j, i) => { j.pada = Date.now() - 86400000 * (8 - Math.floor(i / 6)) - 3600000 * (i % 5); });
      UKP.store.save();
    });
    await mulaiSim(p, 5, 12); await klikTeks(p, 'Mulai simulasi', '', 1300); await jawabSim(p, 5, 1); await kirimSim(p);
    awal = JSON.parse(await p.evaluate(() => localStorage.getItem('ukp.v1')) || '{}');
    awal.simulasiAktif = null; awal.sesiAktif = null; awal.bersamaAktif = null; awal.ujianTim = null;
    (awal.simulasi || []).forEach(x => { x.mulai -= 86400000 * 2; x.selesai -= 86400000 * 2; });
    await ctx.close();
    console.log('state awal: ' + (awal.jawaban || []).length + ' jawaban, ' + (awal.simulasi || []).length + ' simulasi');
  } catch (e) { console.log('state awal tidak dibuat, memakai profil saja: ' + String(e.message).split('\n')[0]); awal = {}; }

  for (const L of LAYAR) {
    if (pilih && !pilih.includes(L.nama) && !pilih.includes(L.tag)) continue;
    let o = null; const baris = { tag: L.tag, ok: false, info: '' };
    try {
      o = await buka(L.alat, L.tema, Object.assign(JSON.parse(JSON.stringify(awal)), L.tambah ? JSON.parse(JSON.stringify(L.tambah)) : {}));
      const p = o.page;
      const jalan = LANGKAH[L.nama](p); jalan.catch(() => {});   // penolakan yang datang sesudah batas waktu tidak boleh menjatuhkan proses
      let batas; await Promise.race([jalan, new Promise((_, tolak) => { batas = setTimeout(() => tolak(new Error('melewati batas waktu')), 90000 * LAMBAT); })]).finally(() => clearTimeout(batas));
      const h1 = await p.evaluate(() => ((document.querySelector('main h1, .page h1') || {}).textContent || '').trim());
      if (/^Terjadi kesalahan|tidak ditemukan/i.test(h1)) throw new Error('halaman galat: ' + h1);
      if (L.n > 1 && !/pembahasan/.test(L.nama)) await p.evaluate(() => window.scrollTo(0, 0));
      await p.evaluate(() => { const a = document.activeElement; if (a && a !== document.body && a.blur) a.blur(); document.querySelectorAll('.toast').forEach(t => { t.style.visibility = 'hidden'; }); });
      await tunggu(p, 350);
      for (let i = 0; i < L.n; i++) {
        if (i > 0) { await p.evaluate(() => window.scrollBy(0, Math.round(innerHeight * 0.82))); await tunggu(p, 350); }
        const buf = await p.screenshot({ type: 'jpeg', quality: L.alat === 'hp' ? 62 : 50, fullPage: false });
        const nama = L.tag + (L.n > 1 ? '-' + (i + 1) : ''); fs.writeFileSync(path.join(keluar, nama + '.jpg'), buf); gambar.push({ nama, buf });
      }
      const ukur = await p.evaluate(() => ({ lebar: innerWidth, isi: document.documentElement.scrollWidth, h1: ((document.querySelector('main h1, .page h1') || {}).textContent || '').trim().slice(0, 40) }));
      baris.ok = ukur.isi <= ukur.lebar + 1 && o.galat.length === 0;
      baris.info = (ukur.isi > ukur.lebar + 1 ? 'gulir mendatar ' + ukur.isi + ' > ' + ukur.lebar + '; ' : '') + (o.galat.length ? 'galat halaman: ' + o.galat.slice(0, 2).join(' | ') + '; ' : '') + (ukur.h1 || '');
    } catch (e) {
      baris.info = String((e && e.message) || e).split('\n')[0].slice(0, 240);
      try { if (o) { const buf = await o.page.screenshot({ type: 'jpeg', quality: 50 }); fs.writeFileSync(path.join(keluar, '_gagal-' + L.tag + '.jpg'), buf); gambar.push({ nama: '_gagal-' + L.tag, buf }); } } catch (e2) {}
    } finally { try { if (o) await o.ctx.close(); } catch (e) {} }
    hasil.push(baris); console.log((baris.ok ? 'LULUS ' : 'GAGAL ') + baris.tag + '  ' + baris.info);
  }
  await browser.close(); server.close();
  const gagal = hasil.filter(x => !x.ok); const versi = (fs.readFileSync(path.join(root, 'js', 'core.js'), 'utf8').match(/UKP\.versi = '([0-9.]+)'/) || [])[1] || '?';
  if (mintaSW) console.log('PERINGATAN: sw.js diminta ' + mintaSW + ' kali (service worker tidak terblokir)');
  const ringkas = BROWSER + ' ' + versiMesin + ' · Playwright ' + versiPW + ' · v' + versi + ' · ' + (hasil.length - gagal.length) + ' layar lulus, ' + gagal.length + ' gagal · ' + gambar.length + ' gambar';
  console.log(ringkas);
  if (diGitHub) {
    const bersih = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    gagal.slice(0, 8).forEach(x => console.log('::warning title=Potret GAGAL::' + bersih(x.tag + ' ' + x.info)));
    console.log('::' + (gagal.length ? 'error' : 'notice') + ' title=' + bersih(judul) + '::' + bersih(ringkas));
  }
  if (process.env.KIRIM === '1') {
    try { const id = await kirim(gambar, ringkas, hasil, judul); console.log('gambar dikirim ke check run ' + id); }
    catch (e) { const pesan = String((e && e.message) || e).slice(0, 400); console.log('gambar TIDAK terkirim: ' + pesan); if (diGitHub) console.log('::warning title=Potret tidak terkirim::' + pesan.replace(/%/g, '%25').replace(/\r?\n/g, '%0A')); }
  }
  return gagal.length ? 1 : 0;
}

// ---------- kirim gambar sebagai catatan check run (hanya di GitHub Actions; butuh izin checks: write) ----------
function potongGambar(gambar) {
  const catatan = [];
  for (const g of gambar) {
    const b64 = g.buf.toString('base64'); const n = Math.ceil(b64.length / POTONG) || 1;
    for (let i = 0; i < n; i++) catatan.push({ path: 'tools/potret-layar.js', start_line: 1, end_line: 1, annotation_level: 'notice', title: g.nama + ' [' + (i + 1) + '/' + n + ']', message: 'Potongan gambar layar (JPEG, base64). Disusun kembali dengan: node tools/potret-layar.js ambil', raw_details: b64.slice(i * POTONG, (i + 1) * POTONG) });
  }
  return catatan;
}
// Satu permintaan HTTP(S) dengan node:http atau node:https (bukan fetch, yang belum global di Node 16) → { status, teks }
function minta(cara, alamat, kepala, isi) {
  return new Promise((jadi, gagal) => {
    const u = new URL(alamat); const data = isi == null ? null : Buffer.from(JSON.stringify(isi), 'utf8');
    const h = Object.assign({}, kepala); if (data) h['content-length'] = String(data.length);
    const req = (u.protocol === 'http:' ? http : https).request(u, { method: cara, headers: h }, res => {
      const bagian = []; res.on('data', c => bagian.push(c)); res.on('error', gagal);
      res.on('end', () => jadi({ status: res.statusCode, teks: Buffer.concat(bagian).toString('utf8') }));
    });
    req.setTimeout(120000, () => req.destroy(new Error('batas waktu ' + cara + ' ' + u.pathname)));
    req.on('error', gagal); if (data) req.write(data); req.end();
  });
}
async function kirim(gambar, ringkas, hasil, namaCek) {
  const api = process.env.GITHUB_API_URL || 'https://api.github.com'; const repo = process.env.GITHUB_REPOSITORY; const sha = process.env.GITHUB_SHA; const token = process.env.GITHUB_TOKEN;
  if (!repo || !sha || !token) throw new Error('GITHUB_REPOSITORY, GITHUB_SHA, atau GITHUB_TOKEN kosong');
  // Check run yang baru dibuat kadang belum terbaca saat PATCH pertama (404 sesaat, terjadi 13 Nov 2026), dan API bisa menjawab 5xx
  // atau 429 sebentar: permintaan seperti itu diulang sampai enam kali dengan jeda yang makin panjang.
  const panggil = async (cara, jalur, isi) => {
    let galat = null;
    for (let coba = 0; coba < 6; coba++) {
      if (coba) await tidur(1500 * coba);
      const r = await minta(cara, api + '/repos/' + repo + jalur, { authorization: 'Bearer ' + token, accept: 'application/vnd.github+json', 'x-github-api-version': '2022-11-28', 'content-type': 'application/json', 'user-agent': 'potret-layar' }, isi);
      if (r.status >= 200 && r.status < 300) return JSON.parse(r.teks || '{}');
      galat = new Error(cara + ' ' + jalur + ' → ' + r.status + ' ' + r.teks.slice(0, 200));
      if (!((cara === 'PATCH' && r.status === 404) || r.status === 429 || r.status >= 500)) break;
    }
    throw galat;
  };
  const judul = namaCek || (NAMA_CEK + BROWSER); const catatan = potongGambar(gambar);
  const isiRingkas = ringkas + '\n\n' + hasil.map(x => '- ' + (x.ok ? 'lulus' : 'GAGAL') + ' `' + x.tag + '` ' + x.info).join('\n') + '\n\nGambar ada di catatan check run ini sebagai potongan base64 (' + catatan.length + ' potongan).';
  const cek = await panggil('POST', '/check-runs', { name: judul, head_sha: sha, status: 'in_progress', output: { title: judul, summary: isiRingkas.slice(0, 60000) } });
  for (let i = 0; i < catatan.length; i += 4) await panggil('PATCH', '/check-runs/' + cek.id, { output: { title: judul, summary: isiRingkas.slice(0, 60000), annotations: catatan.slice(i, i + 4) } });
  await panggil('PATCH', '/check-runs/' + cek.id, { status: 'completed', conclusion: hasil.some(x => !x.ok) ? 'neutral' : 'success', output: { title: judul, summary: isiRingkas.slice(0, 60000) } });
  return cek.id;
}

// ---------- ambil gambar dari check run (lewat CLI gh) ----------
function susun(catatan) {
  const peta = new Map();
  for (const c of catatan) { const m = /^(.+) \[(\d+)\/(\d+)\]$/.exec(c.title || ''); if (!m) continue; const g = peta.get(m[1]) || { n: Number(m[3]), bagian: [] }; g.bagian[Number(m[2]) - 1] = c.raw_details || ''; peta.set(m[1], g); }
  const out = [];
  for (const [nama, g] of peta) { let lengkap = g.bagian.length === g.n; for (let i = 0; i < g.n; i++) if (typeof g.bagian[i] !== 'string' || !g.bagian[i].length) lengkap = false; out.push({ nama, lengkap, buf: lengkap ? Buffer.from(g.bagian.join(''), 'base64') : null }); }
  return out;
}
// check run potret: "Potret layar …" dan "Potret room …"; nama job (berkurung, mis. "Potret layar WebKit (profil iPhone)") dilewati
const pilihCek = daftar => (daftar || []).filter(c => /^Potret (layar|room) /.test(String(c.name)) && !/\(/.test(String(c.name)));
const namaSub = (nama, id, terpakai) => { let n = String(nama).replace(/\s+/g, '-').replace(/[^A-Za-z0-9._-]/g, '').toLowerCase(); if (terpakai.has(n)) n += '-' + id; terpakai.add(n); return n; };
function ambil(repo, sha, keluar) {
  const { execFileSync } = require('node:child_process');
  const gh = jalur => JSON.parse(execFileSync('gh', ['api', '-H', 'Accept: application/vnd.github+json', jalur], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }));
  const cek = pilihCek(gh('repos/' + repo + '/commits/' + sha + '/check-runs?per_page=100').check_runs);
  if (!cek.length) { console.log('belum ada check run "' + NAMA_CEK + '…" untuk ' + sha); return 1; }
  fs.mkdirSync(keluar, { recursive: true }); let kode = 0; const terpakai = new Set();
  for (const c of cek) {
    const sub = cek.length > 1 ? path.join(keluar, namaSub(c.name, c.id, terpakai)) : keluar; fs.mkdirSync(sub, { recursive: true });
    console.log(c.name + ' · ' + c.status + ' · ' + (c.conclusion || '-') + ' · ' + ((c.output || {}).annotations_count || 0) + ' catatan');
    if ((c.output || {}).summary) fs.writeFileSync(path.join(sub, 'ringkasan.md'), c.output.summary);
    const catatan = []; for (let hal = 1; hal < 50; hal++) { const a = gh('repos/' + repo + '/check-runs/' + c.id + '/annotations?per_page=100&page=' + hal); catatan.push(...a); if (a.length < 100) break; }
    for (const g of susun(catatan)) { if (!g.lengkap) { console.log('  TIDAK LENGKAP ' + g.nama); kode = 1; continue; } fs.writeFileSync(path.join(sub, g.nama + '.jpg'), g.buf); console.log('  ' + path.relative(keluar, path.join(sub, g.nama + '.jpg')) + '  ' + g.buf.length + ' bita'); }
  }
  return kode;
}

if (require.main === module) {
  (async () => {
    if (MODE === 'potret' && process.argv[3] && process.argv[4]) process.exit(await potret(path.resolve(process.argv[3]), path.resolve(process.argv[4]), process.argv[5] ? process.argv[5].split(',') : null));
    if (MODE === 'ambil' && process.argv[5]) process.exit(ambil(process.argv[3], process.argv[4], path.resolve(process.argv[5])));
    if (MODE === 'daftar') { console.log(LAYAR.map(l => l.tag + ' (' + l.n + ')').join('\n')); process.exit(0); }
    console.error('pakai: node tools/potret-layar.js potret <root> <folder> [nama,nama] | ambil <pemilik/repo> <sha> <folder> | daftar'); process.exit(2);
  })().catch(e => { console.error(e); process.exit(2); });
}
module.exports = { potongGambar, susun, kirim, minta, LAYAR, POTONG, NAMA_CEK, langkah: Object.keys(LANGKAH), bandingVersi, versiPlaywright, bisaBlokSW, opsiKonteks, opsiHP, namaCek, pilihCek, namaSub };
