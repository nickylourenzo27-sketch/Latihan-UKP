#!/usr/bin/env node
// Uji alur di browser headless: node tools/shot.js <path-html> <dir-output> [state-json]
// Opsi lingkungan: SHOT_SESI=w1280,tablet (hanya sesi tertentu) · SHOT_TEMA=balik (tukar terang/gelap semua sesi)
// Sesi "gerak" (tanpa tangkapan berlebih) menguji kriteria 7 DESAIN-V6: dengan prefers-reduced-motion dan :root[data-gerak="kurang"]
// tidak ada animasi/transisi berdurasi > 1 ms.
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const [,, html, out, stateFile] = process.argv;
if (!html || !out) { console.error('pakai: node tools/shot.js <html> <out-dir> [state.json]'); process.exit(2); }
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + path.resolve(html);
const hanya = (process.env.SHOT_SESI || '').split(',').map(x => x.trim()).filter(Boolean);
// jawab langsung: setelah memilih, opsi kunci dan baris status harus sama-sama terlihat (tidak tergulir keluar layar)
async function cekKunciTerlihat(page, nama, errors) {
  await page.waitForTimeout(700);
  const r = await page.evaluate(() => { const kl = document.querySelector('.soal .opsi label[data-hasil="kunci"]'); const st = document.querySelector('.soal .umpan .status'); if (!kl || !st) return null;
    const a = kl.getBoundingClientRect(), b = st.getBoundingClientRect(), vh = innerHeight; return { kunci: a.bottom > 0 && a.top < vh, status: b.bottom > 0 && b.top < vh, teks: st.textContent.trim() }; });
  if (!r) { errors.push(nama + ': opsi kunci atau status tidak ditemukan'); return; }
  if (!r.kunci) errors.push(nama + ': opsi kunci tergulir keluar layar setelah menjawab');
  if (!r.status) errors.push(nama + ': baris status tidak terlihat setelah menjawab');
  if (!/Benar/.test(r.teks) && !/Kunci [A-D]: /.test(r.teks)) errors.push(nama + ': status salah tanpa teks kunci (' + r.teks.slice(0, 60) + ')');
}
const balik = process.env.SHOT_TEMA === 'balik';
const SANDI_HASH = (fs.readFileSync(path.join(__dirname, '..', 'js', 'akses.js'), 'utf8').match(/sandiHash:\s*'([0-9a-f]{64})'/) || [])[1] || '';
const SANDI_UJI = process.env.SHOT_SANDI || 'UKP2026';
(async () => {
  const browser = await chromium.launch();
  const errors = [];
  async function sesi(nama, viewport, dark, langkah, opsiKonteks) {
    if (hanya.length && !hanya.includes(nama) && !(hanya.includes('akses') && nama.startsWith('akses-'))) return;
    const { tanpaAkses, ...opsiPw } = opsiKonteks || {};
    const ctx = await browser.newContext(Object.assign({ viewport, colorScheme: dark !== balik ? 'dark' : 'light', deviceScaleFactor: 1 }, opsiPw));
    const page = await ctx.newPage();
    page.on('console', m => { if (m.type() === 'error') errors.push(nama + ': ' + m.text()); });
    page.on('pageerror', e => errors.push(nama + ': ' + e.message));
    // gerbang akses tim (js/akses.js): sesi uji sudah masuk agar alur lama jalan; sesi 'akses' menguji layar masuk itu sendiri
    if (!(opsiKonteks && opsiKonteks.tanpaAkses)) await page.addInitScript(h => { try { localStorage.setItem('ukp.akses', JSON.stringify({ nama: 'Penguji', h })); } catch (e) {} }, SANDI_HASH);
    if (stateFile) { const st = fs.readFileSync(stateFile, 'utf8'); await page.addInitScript(s => { try { localStorage.setItem('ukp.v1', s); } catch (e) {} }, st); }
    await page.goto(url); await page.waitForTimeout(600);
    let n = 0;
    const shot = async (label) => { n++; await page.screenshot({ path: path.join(out, `${nama}-${String(n).padStart(2, '0')}-${label}.png`), fullPage: true }); };
    await shot('awal');
    try { await langkah(page, shot); } catch (e) { errors.push(nama + ' langkah: ' + e.message); await shot('galat'); }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) errors.push(nama + ': halaman menggulir horizontal (overflow)');
    await ctx.close();
  }
  const go = async (page, view, params) => { await page.evaluate(([v, p]) => UKP.go(v, p || {}), [view, params || null]); await page.waitForTimeout(300); };
  // view baru (formulir, lembar) mungkin belum terdaftar saat agen lain masih menulisnya: catat sekali, lewati tangkapannya
  const sudahDicatat = new Set();
  const catatSekali = m => { if (!sudahDicatat.has(m)) { sudahDicatat.add(m); errors.push(m); } };
  const adaView = (page, v) => page.evaluate(v => !!(UKP.views && typeof UKP.views[v] === 'function'), v);
  const goBaru = async (page, view, params) => { if (await adaView(page, view)) { await go(page, view, params); return true; } catatSekali('view "' + view + '" belum terdaftar (UKP.views.' + view + ')'); return false; };
  // buka satu baris peta formulir (details atau tombol) agar rincian lipatnya ikut tertangkap
  const bukaBarisFormulir = async page => { const b = page.locator('details.formulir-baris > summary, .formulir-baris').first(); if (await b.count()) { await b.click(); await page.waitForTimeout(250); return true; } return false; };
  const kodeAwal = page => page.evaluate(() => UKP.konten.semuaKelompok()[0]);
  // Info ujian v7.3.1: kelima tab harus terlihat utuh di layar pertama (tidak terpotong, bawah baris tab di dalam viewport); tinggi per tab dicatat
  const TAB_IU = ['format', 'jadwal', 'harih', 'laporan', 'tanya'];
  const cekTabIU = async (page, label) => {
    const r = await page.evaluate(() => { const vw = document.documentElement.clientWidth, vh = window.innerHeight; const tl = document.querySelector('.halaman-info .tabs[role="tablist"]'); if (!tl) return 'baris tab tidak ditemukan';
      const kotak = tl.getBoundingClientRect(); const pot = [...tl.querySelectorAll('[role="tab"]')].filter(b => { const x = b.getBoundingClientRect(); return x.right > Math.min(vw, kotak.right) + 1 || x.left < kotak.left - 1; }).map(b => b.dataset.tab);
      return (pot.length ? 'tab terpotong: ' + pot.join(', ') + '. ' : '') + (kotak.bottom + window.scrollY > vh ? 'baris tab di bawah lipatan (' + Math.round(kotak.bottom + window.scrollY) + ' px > ' + vh + ' px)' : ''); });
    if (r) errors.push(label + ' info ujian: ' + r);
  };
  const jelajahIU = async (page, shot, label, cek) => {
    await go(page, 'info-ujian', { tab: 'format' }); await page.evaluate(() => window.scrollTo(0, 0)); await cekTabIU(page, label);
    const tinggi = [];
    for (const t of TAB_IU) {
      await page.click('.tabs [data-tab="' + t + '"]'); await page.waitForTimeout(250);
      tinggi.push(t + ' ' + await page.evaluate(() => document.documentElement.scrollHeight));
      if (t === 'jadwal') { const l = page.locator('details.langkah-iu > summary').nth(5); if (await l.count()) { await l.click(); await page.waitForTimeout(150); } const a = page.locator('#iu-aturan details.lipat-iu > summary'); if (await a.count()) { await a.click(); await page.waitForTimeout(150); } }
      await (cek ? cek('info-' + t) : shot('info-' + t));
    }
    console.log('tinggi info ujian ' + label + ' per tab (px): ' + tinggi.join(' · '));
  };
  // tinggi dokumen beranda (laporan v7.2: HP 390 pengguna baru ≤ 900 px, pengguna rutin ≤ 1.100 px)
  const tinggiBeranda = async (page, label) => { const t = await page.evaluate(() => document.documentElement.scrollHeight); console.log('tinggi beranda ' + label + ': ' + t + ' px'); return t; };
  // data contoh 21 hari (jawaban + Kartu Hadir) agar stat, sparkline, grafik kolom, dan laporan mingguan berisi; deterministik
  const isiData = page => page.evaluate(() => {
    const s = UKP.store.get(); const U = UKP.util; const K = UKP.konten;
    const t = s.profil.tingkat || 'A'; const kel = UKP.tingkatKelompok[t] || UKP.urutanKelompok;
    const pool = kel.flatMap(k => K.soalKelompok(k, t).slice(0, 60)); if (!pool.length) return 0;
    let benih = 7; const acak = () => (benih = (benih * 9301 + 49297) % 233280) / 233280;
    const kini = Date.now(); let n = 0;
    for (let d = 20; d >= 0; d--) {
      if (d % 6 === 3) continue; // beberapa hari tanpa latihan
      const jml = 4 + Math.floor(acak() * 14); const hari = U.tambahHari(U.hariIni(), -d);
      for (let i = 0; i < jml; i++) {
        const so = pool[Math.floor(acak() * pool.length)]; const benar = acak() < 0.5 + (20 - d) * 0.013;
        const opsi = benar ? so.kunci : Object.keys(so.opsi || {}).find(o => o !== so.kunci) || 'A';
        s.jawaban.push({ soal: so.id, topik: so.topik, kode: so.kode, benar, opsi, tag: benar ? null : ((so.jebakanOpsi || {})[opsi] || null), detik: 40 + Math.floor(acak() * 80), konteks: 'latih', pada: kini - d * 86400000 - i * 60000 }); n++;
      }
      s.hadir[hari] = { status: 'HADIR', menit: 5 + Math.floor(jml * 1.2) };
    }
    UKP.store.save(); return n;
  });
  // 1. onboarding HP
  await sesi('hp-onboarding', { width: 390, height: 844 }, false, async (page, shot) => {
    // langkah pertama: kolom 'Nama Anda' wajib (bawaan dari sesi akses tim bila ada)
    if (await page.locator('#ob-nama').count() && !(await page.inputValue('#ob-nama')).trim()) await page.fill('#ob-nama', 'Penguji');
    for (let i = 0; i < 4; i++) { await page.click('button.btn-primary'); await page.waitForTimeout(150); await shot('ob' + (i + 1)); }
    // v7.2: onboarding selesai → beranda ringkas (kartu "Mulai sesi pertama"; diagnosis lewat tautan meta)
    await page.click('button.btn-primary'); await page.waitForTimeout(400); await shot('beranda-baru'); await tinggiBeranda(page, 'hp-onboarding (pengguna baru)');
    await page.evaluate(() => { const s = UKP.store.get(); s.sesiAktif = UKP.belajar.susunDiagnosis(); UKP.store.save(); UKP.go('sesi'); }); await page.waitForTimeout(400); await shot('diagnosis');
    // jawab 3 soal
    // pilih → tombol utama (Periksa, atau Berikutnya pada mode diagnosis ringkas) → Lanjut bila panel umpan penuh tampil
    for (let i = 0; i < 3; i++) {
      await page.click('.opsi label:nth-child(2)'); await page.waitForTimeout(150);
      await page.locator('button.btn-primary:not([disabled])').first().click(); await page.waitForTimeout(200); if (i === 0) await shot('umpan');
      const lanjut = page.locator('.sticky-actions button.btn-primary:not([disabled])').first();
      if (await page.locator('.soal .umpan').count() && await lanjut.count()) { await lanjut.click(); await page.waitForTimeout(200); }
    }
    const cukup = page.locator('button', { hasText: /^\s*Cukup/ }).first(); // "Cukup" (bar sesi baru) atau "Cukup sampai sini"
    if (await cukup.count()) { await cukup.click(); } await page.waitForTimeout(500); await shot('bukti');
    await page.click('text=Selesai'); await page.waitForTimeout(400); await shot('beranda');
  });
  // 2. desktop tur + gelap
  await sesi('desktop', { width: 1366, height: 900 }, true, async (page, shot) => {
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tanggalUjian = '2026-12-15'; UKP.store.save(); });
    await isiData(page);
    await go(page, 'beranda'); await shot('beranda');
    await go(page, 'tingkat'); await shot('tingkat');
    if (await goBaru(page, 'cakupan', { tingkat: 'C' })) await shot('cakupan');
    const kode0 = await page.evaluate(() => UKP.konten.semuaKelompok()[0]); await go(page, 'kelompok', { kode: kode0 }); await shot('kelompok');
    const topik0 = await page.evaluate(() => UKP.modul[UKP.konten.semuaKelompok()[0]].topik[1].id); await go(page, 'topik', { id: topik0 }); await shot('topik');
    await go(page, 'latih', { atur: 1 }); await shot('latih-saringan');
    // v7.7: #latih tanpa params langsung mulai (20 soal, jawab langsung): klik opsi → pembahasan seketika
    await go(page, 'latih'); await shot('latih');
    await page.locator('.soal .opsi label').first().click(); await page.waitForTimeout(300);
    if (!(await page.locator('.soal .umpan[data-langsung]').count())) errors.push('desktop latih: pembahasan tidak langsung muncul setelah memilih');
    await cekKunciTerlihat(page, 'desktop latih', errors);
    await shot('latih-umpan');
    await go(page, 'ulang'); await shot('ulang');
    await page.click('text=Balik kartu'); await page.waitForTimeout(400); await shot('ulang-belakang');
    const kasus0 = await page.evaluate(() => (UKP.konten.semuaKasus(UKP.store.get().profil.tingkat)[0] || {}).id); await go(page, 'kasus', { id: kasus0 }); await shot('kasus');
    if (await page.locator('.langkah input.input.mono').count()) { await page.fill('.langkah input.input.mono', '5'); await page.click('.langkah >> text=Periksa'); await page.waitForTimeout(200); } await shot('kasus-2');
    await go(page, 'kalkulator', { jenis: 'sanksi-bunga' }); await page.waitForTimeout(400); await shot('kalkulator');
    await go(page, 'rencana'); await shot('rencana');
    await go(page, 'kemajuan'); await shot('kemajuan-ringkasan');
    await go(page, 'kemajuan', { tab: 'peta' }); await shot('kemajuan');
    await go(page, 'kemajuan', { tab: 'laporan' }); await shot('kemajuan-laporan');
    if (await goBaru(page, 'formulir')) { await shot('formulir'); if (await bukaBarisFormulir(page)) await shot('formulir-baris'); }
    if (await goBaru(page, 'lembar', { kode: kode0 })) await shot('lembar');
    await go(page, 'referensi', { tab: 'peraturan' }); await shot('referensi');
    // v7.3: Info ujian = kartu ringkas + tab (params.tab); tinggi awal dicatat (target desktop 1280 ≤ 1.800 px)
    await go(page, 'info-ujian'); await shot('info'); console.log('tinggi info ujian desktop: ' + await page.evaluate(() => document.documentElement.scrollHeight) + ' px');
    await jelajahIU(page, shot, 'desktop');
    await go(page, 'pengaturan'); await shot('pengaturan');
    await go(page, 'simulasi'); await shot('simulasi');
    await page.click('text=Mulai simulasi'); await page.waitForTimeout(500); await shot('ujian');
    await page.click('.opsi label:nth-child(2)'); await page.click('text=Ragu-ragu'); await page.click('text=Berikutnya'); await page.waitForTimeout(200);
    await page.click('.ujian-bar button'); await page.waitForTimeout(300); await shot('kirim-dialog');
    await page.click('dialog >> text=Kirim dan akhiri'); await page.waitForTimeout(500); await shot('hasil');
    await page.click('.langkah-berikut .btn-primary'); await page.waitForTimeout(300); await shot('ulas');
    await page.evaluate(() => UKP.cari()); await page.fill('dialog input', 'sanksi'); await page.waitForTimeout(200); await shot('cari');
  });
  // 3. HP ringkas terang
  await sesi('hp', { width: 390, height: 844 }, false, async (page, shot) => {
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; UKP.store.save(); });
    await go(page, 'beranda'); await shot('beranda'); await tinggiBeranda(page, 'hp');
    await go(page, 'kemajuan'); await shot('kemajuan-ringkasan');
    await go(page, 'latih', { mulai: true, n: 5 }); await shot('latih');
    await page.click('.opsi label:nth-child(3)'); await cekKunciTerlihat(page, 'hp latih', errors); await shot('umpan');
    await go(page, 'simulasi'); await shot('simulasi');
    await page.click('.bottomnav button'); await page.waitForTimeout(300); await shot('lainnya');
    await page.keyboard.press('Escape'); await page.waitForTimeout(150);
    await go(page, 'rencana'); await shot('rencana');
    await go(page, 'kemajuan', { tab: 'laporan' }); await shot('kemajuan-laporan');
    if (await goBaru(page, 'formulir')) { await shot('formulir'); if (await bukaBarisFormulir(page)) await shot('formulir-baris'); }
    if (await goBaru(page, 'lembar', { kode: await kodeAwal(page) })) await shot('lembar');
    if (await goBaru(page, 'cakupan', { tingkat: 'C' })) await shot('cakupan');
    // v7.3: Info ujian tab pertama (target ≤ 2.600 px) lalu tab Jadwal lewat klik tab
    await go(page, 'info-ujian'); await shot('info'); console.log('tinggi info ujian hp: ' + await page.evaluate(() => document.documentElement.scrollHeight) + ' px');
    await jelajahIU(page, shot, 'hp');
  });
  // 4. pindaian reflow 320 px (WCAG 1.4.10): tiap layar diperiksa, overflow horizontal = galat
  await sesi('hp320', { width: 320, height: 700 }, false, async (page, shot) => {
    const cekOverflow = async (label) => {
      const r = await page.evaluate(() => {
        const de = document.documentElement; const lebar = de.clientWidth;
        if (de.scrollWidth <= lebar + 1) return null;
        // pelaku terluar: elemen yang melewati tepi kanan, induknya tidak, dan tidak berada di wadah bergulir/terpotong
        const terpotong = el => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const ox = getComputedStyle(p).overflowX; if (ox !== 'visible') return true; } return false; };
        const nama = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : '');
        const pelaku = [];
        for (const el of document.querySelectorAll('body *')) {
          const b = el.getBoundingClientRect(); if (!b.width || b.right <= lebar + 1) continue;
          const pb = el.parentElement ? el.parentElement.getBoundingClientRect() : null;
          if (pb && pb.right > lebar + 1) continue;
          if (terpotong(el)) continue;
          pelaku.push(nama(el) + ' (kanan ' + Math.round(b.right) + 'px)');
          if (pelaku.length >= 5) break;
        }
        return { sw: de.scrollWidth, lebar, pelaku };
      });
      await shot(label);
      if (r) errors.push('hp320 ' + label + ': overflow horizontal ' + r.sw + 'px > ' + r.lebar + 'px' + (r.pelaku.length ? '; pelaku: ' + r.pelaku.join(', ') : ''));
    };
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tanggalUjian = '2026-12-15'; UKP.store.save(); });
    await go(page, 'beranda'); await page.evaluate(() => UKP.perbaruiTopbar && UKP.perbaruiTopbar()); await cekOverflow('beranda');
    await go(page, 'kemajuan'); await cekOverflow('kemajuan-ringkasan');
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.berandaLengkap = true; UKP.store.save(); }); await go(page, 'beranda'); await cekOverflow('beranda-lengkap');
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.berandaLengkap = false; UKP.store.save(); });
    // latih: jawab satu soal (jawab langsung: panel umpan, jejak hitung, kutipan muncul seketika)
    await go(page, 'latih', { mulai: true, n: 5 });
    await page.locator('.soal .opsi label').first().click(); await page.waitForTimeout(300);
    if (!(await page.locator('.soal .umpan').count())) errors.push('hp320 latih: pembahasan tidak muncul setelah memilih');
    await cekOverflow('latih-umpan');
    // topik dengan tabel angka kunci (atau topik kedua sebagai cadangan)
    const topik = await page.evaluate(() => { const ks = UKP.konten.semuaKelompok(); for (const k of ks) { const t = ((UKP.modul[k] || {}).topik || []).find(x => x.poinKunci && x.poinKunci.length && x.contohSoal); if (t) return t.id; } return UKP.modul[ks[0]].topik[1].id; });
    await go(page, 'topik', { id: topik }); await cekOverflow('topik');
    for (const jenis of ['ppn', 'bea-meterai']) { await go(page, 'kalkulator', { jenis }); await page.waitForTimeout(400); await cekOverflow('kalkulator-' + jenis); }
    await go(page, 'referensi', { tab: 'bunga' }); await cekOverflow('referensi-bunga');
    await go(page, 'rencana'); await cekOverflow('rencana');
    await go(page, 'kemajuan', { tab: 'laporan' }); await cekOverflow('kemajuan-laporan');
    if (await goBaru(page, 'formulir')) { await bukaBarisFormulir(page); await cekOverflow('formulir-baris'); }
    if (await goBaru(page, 'lembar', { kode: await kodeAwal(page) })) await cekOverflow('lembar');
    // cakupan materi resmi: butir bertingkat + chip topik; cari satu kata agar penanda <mark> ikut diuji
    if (await goBaru(page, 'cakupan', { tingkat: 'C' })) { await cekOverflow('cakupan'); await page.fill('#cakupan-q', 'faktur'); await page.waitForTimeout(300); await cekOverflow('cakupan-cari'); }
    await jelajahIU(page, shot, 'hp320', cekOverflow);
  });
  // 5. desktop 1280 terang: ambang panel kanan (minmax(0,1fr) 320px), grafik dengan data contoh
  await sesi('w1280', { width: 1280, height: 860 }, false, async (page, shot) => {
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tanggalUjian = '2026-12-15'; UKP.store.save(); });
    await isiData(page);
    await go(page, 'beranda'); await shot('beranda');
    const kode0 = await kodeAwal(page); await go(page, 'kelompok', { kode: kode0 }); await shot('kelompok');
    const kasus0 = await page.evaluate(() => (UKP.konten.semuaKasus(UKP.store.get().profil.tingkat)[0] || {}).id); await go(page, 'kasus', { id: kasus0 }); await shot('kasus');
    await page.evaluate(() => window.scrollTo(0, 600)); await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(out, 'w1280-kasus-gulir-layar.png') }); // panel kanan lengket (tangkapan layar, bukan satu halaman penuh)
    await go(page, 'rencana'); await shot('rencana');
    await go(page, 'kemajuan', { tab: 'laporan' }); await shot('kemajuan-laporan');
    if (await goBaru(page, 'formulir')) { await shot('formulir'); if (await bukaBarisFormulir(page)) await shot('formulir-baris'); }
    if (await goBaru(page, 'lembar', { kode: kode0 })) await shot('lembar');
    await jelajahIU(page, shot, 'w1280');
  });
  // 6. tablet 768 gelap (rail): tata letak menengah
  await sesi('tablet', { width: 768, height: 1024 }, true, async (page, shot) => {
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tanggalUjian = '2026-12-15'; UKP.store.save(); });
    await isiData(page);
    await go(page, 'beranda'); await shot('beranda');
    await go(page, 'tingkat'); await shot('tingkat');
    await go(page, 'rencana'); await shot('rencana');
    await go(page, 'kemajuan', { tab: 'laporan' }); await shot('kemajuan-laporan');
    if (await goBaru(page, 'formulir')) { await shot('formulir'); if (await bukaBarisFormulir(page)) await shot('formulir-baris'); }
    if (await goBaru(page, 'lembar', { kode: await kodeAwal(page) })) await shot('lembar');
  });
  // 7. gerak dikurangi (kriteria 7): sistem (reducedMotion) dan Pengaturan (:root[data-gerak="kurang"]) → semua animasi/transisi ≤ 1 ms
  const animasiPanjang = page => page.evaluate(() => new Promise(selesai => setTimeout(() => {
    const nama = el => !el ? '?' : el.tagName ? el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : '') : '?';
    selesai(document.getAnimations().filter(a => { const t = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : {}; return (Number(t.duration) || 0) > 1 || (Number(t.delay) || 0) > 0; })
      .map(a => (a.animationName || a.transitionProperty || 'animasi') + ' @ ' + nama(a.effect && a.effect.target)).slice(0, 6));
  }, 10)));
  const jelajahGerak = async (page, label) => {
    const cek = async (titik) => { const r = await animasiPanjang(page); if (r.length) errors.push('gerak ' + label + ' ' + titik + ': ' + r.join(', ')); };
    await page.evaluate(() => { const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tanggalUjian = '2026-12-15'; UKP.store.save(); });
    await page.evaluate(() => UKP.go('beranda')); await cek('beranda');
    await page.evaluate(() => UKP.go('latih', { mulai: true, n: 5 })); await cek('latih');
    await page.locator('.soal .opsi label').first().click(); await cek('pilih-opsi');
    if (await page.locator('.soal .umpan').count()) await cek('umpan');
    await page.evaluate(() => UKP.go('ulang')); const balik = page.locator('text=Balik kartu').first(); if (await balik.count()) { await balik.click(); await cek('balik-kartu'); }
    await page.evaluate(() => UKP.toast && UKP.toast('Uji gerak')); await cek('toast');
    await page.evaluate(() => UKP.dialog && UKP.dialog({ judul: 'Uji gerak', isi: document.createTextNode('Isi') })); await cek('dialog');
  };
  // layar masuk tim: tampil tanpa sesi, sandi salah → galat generik, sandi benar → aplikasi jalan; hp terang + desktop gelap (dan sebaliknya)
  const alurAkses = async (page, shot) => {
    const aktif = await page.evaluate(() => !!(window.UKP_AKSES && UKP_AKSES.aktif));
    if (!aktif) return;
    if (await page.locator('#akses-nama').count() !== 1) throw new Error('layar masuk tidak tampil');
    if (await page.locator('#ukp-pemulihan').count()) throw new Error('panel pemulihan tampil di layar masuk');
    const fokus = await page.evaluate(() => document.activeElement && document.activeElement.id);
    if (fokus !== 'akses-nama') throw new Error('fokus awal bukan kolom nama: ' + fokus);
    await page.fill('#akses-nama', 'Rina'); await page.fill('#akses-sandi', 'salah'); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
    const g = (await page.locator('#akses-galat').textContent() || '').trim();
    if (g !== 'Sandi tim salah.') throw new Error('galat sandi salah tidak tampil: ' + g);
    await shot('salah');
    await page.fill('#akses-sandi', SANDI_UJI); await page.keyboard.press('Enter'); await page.waitForTimeout(700);
    if (await page.locator('#akses-nama').count()) throw new Error('sandi benar tidak masuk');
    if (!(await page.locator('#bottomnav a, #sidebar a').count())) throw new Error('shell aplikasi tidak terbangun setelah masuk');
    await shot('masuk');
  };
  // Dasbor tim tanpa window.claude (berkas file://): status "Belum tersambung", satu primer, kode hasil sendiri ditempel → tampil di daftar
  const alurTim = async (page, shot) => {
    if (!(await goBaru(page, 'tim'))) return;
    await page.waitForTimeout(400);
    const meta = (await page.locator('.halaman-tim .page-head .meta').first().textContent() || '').trim();
    if (!/Belum tersambung/.test(meta)) throw new Error('meta dasbor tim: ' + meta);
    await shot('tim');
    const kode = await page.evaluate(() => UKP.tim && typeof UKP.tim.kodeHasil === 'function' ? UKP.tim.kodeHasil() : '');
    if (!kode) return;
    await page.click('.halaman-tim button:has-text("Tempel kode hasil")'); await page.waitForTimeout(200);
    await page.fill('dialog textarea', kode); await shot('tim-tempel');
    await page.click('dialog button:has-text("Tambahkan")'); await page.waitForTimeout(300);
    if (!(await page.locator('.tim-tabel tbody tr:visible, .tim-daftar > li:visible').count())) throw new Error('hasil tempel tidak tampil');
    await shot('tim-manual');
    await page.click('.tim-tabel tbody tr a:visible, a.tim-kartu:visible'); await page.waitForTimeout(300); await shot('tim-detail');
  };
  await sesi('tim', { width: 390, height: 844 }, false, alurTim);
  await sesi('tim-desktop', { width: 1280, height: 860 }, true, alurTim);
  for (const [nama, vp, gelap] of [['akses', { width: 390, height: 844 }, false], ['akses-gelap', { width: 390, height: 844 }, true], ['akses-desktop', { width: 1280, height: 860 }, true], ['akses-desktop-terang', { width: 1280, height: 860 }, false], ['akses-320', { width: 320, height: 640 }, false]])
    await sesi(nama, vp, gelap, alurAkses, { tanpaAkses: true });
  await sesi('gerak', { width: 1366, height: 900 }, false, async (page, shot) => { await jelajahGerak(page, 'reduce'); await shot('dialog'); }, { reducedMotion: 'reduce' });
  await sesi('gerak-kurang', { width: 390, height: 844 }, true, async (page, shot) => {
    await page.evaluate(() => { document.documentElement.dataset.gerak = 'kurang'; });
    await jelajahGerak(page, 'data-gerak');
  }, { reducedMotion: 'no-preference' });
  await browser.close();
  fs.writeFileSync(path.join(out, 'errors.txt'), errors.join('\n'));
  console.log(errors.length ? 'GALAT (' + errors.length + '):\n' + errors.join('\n') : 'Tidak ada galat konsol.');
})();
