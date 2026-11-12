/* Uji v9.5.0 Bank soal, bagian inti: buku pemakaian soal (state pakai, normalisasi, migrasi, ekspor/impor, titik catat di js/learn.js),
   helper keluarga soal dan peta butir (UKP.konten), UKP.belajar.urutBank, validator kembaranDari/sejak, dan pemuatan js/data/peta-butir.js.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const ROOT = path.join(__dirname, '..');
const HARI = 86400000;
// objek dari konteks vm berbeda realm: bandingkan lewat JSON
const J = x => JSON.parse(JSON.stringify(x));
const eq = (a, b, pesan) => assert.deepEqual(J(a), J(b), pesan);
const tunggu = ms => new Promise(r => setTimeout(r, ms));

// pemuat seperti test/_muat-inti.js, dengan localStorage tiruan yang bisa diisi lebih dulu (migrasi data lama)
function muat(opsi) {
  opsi = opsi || {};
  const simpanan = new Map(Object.entries(opsi.simpanan || {}));
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => (simpanan.has(k) ? simpanan.get(k) : null), setItem: (k, v) => { simpanan.set(k, String(v)); }, removeItem: k => { simpanan.delete(k); } },
    location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  const jalankan = (rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  jalankan('js/core.js');
  if (opsi.sebelumLearn) opsi.sebelumLearn(ctx.UKP);
  for (const b of opsi.data || []) jalankan('js/data/' + b);
  jalankan('js/learn.js');
  for (const b of opsi.setelah || []) jalankan('js/' + b);
  return { UKP: ctx.UKP, simpanan };
}
const KEY = 'ukp.v1';
const profil = { tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: 'Nicky' };

// soal tiruan secukupnya untuk mesin belajar
const soalT = (id, extra) => Object.assign({ id, topik: id.split('-')[0] + '.1', tingkat: ['A', 'B', 'C'], kunci: 'A', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, jebakanOpsi: { B: 'salah-baca', C: 'salah-baca', D: 'salah-baca' }, stem: 'Soal tiruan ' + id }, extra || {});
function daftarModul(UKP, kode, soal) { UKP.register({ meta: { kode, nama: 'Modul ' + kode }, topik: [{ id: kode + '.1', judul: 'Topik' }], soal }); }
// keluarga: A1-001 (asli) + A1-101, A1-102 (pengganti); A1-002 + A1-103; A1-003..A1-010 tanpa pengganti
function modulKeluarga(UKP) {
  const soal = [];
  for (let i = 1; i <= 10; i++) soal.push(soalT('A1-' + String(i).padStart(3, '0')));
  soal.push(soalT('A1-101', { kembaranDari: 'A1-001', sejak: '9.5.0' }), soalT('A1-102', { kembaranDari: 'A1-001' }), soalT('A1-103', { kembaranDari: 'A1-002' }));
  daftarModul(UKP, 'A1', soal);
  return soal;
}
const tetap = arr => arr.slice();   // pengacak tetap (identitas)
const ids = arr => arr.map(x => x.id);

describe('v9.5 buku pemakaian: catat, status, sudah', () => {
  it('catat menggabungkan bit dan menyimpan hari terakhir; jenis atau id salah ditolak', () => {
    const { UKP } = muat(); const P = UKP.belajar.pakai;
    assert.equal(P.status('A1-001'), null); assert.equal(P.sudah('A1-001'), false);
    assert.equal(P.catat('A1-001', 'sendiri', 10 * HARI + 5), true);
    eq((P.status('A1-001')), { sendiri: true, bersama: false, ujian: false, hari: 10 });
    P.catat('A1-001', 'ujian', 12 * HARI); P.catat('A1-001', 'bersama', 11 * HARI);
    eq((P.status('A1-001')), { sendiri: true, bersama: true, ujian: true, hari: 12 });
    eq(UKP.store.get().pakai['A1-001'], [7, 12]);
    assert.equal(P.sudah('A1-001'), true);
    assert.equal(P.catat('A1-002', 'lain', 0), false); assert.equal(P.catat('__proto__', 'ujian', 0), false); assert.equal(P.catat('', 'ujian', 0), false);
    assert.equal(P.status('__proto__'), null); assert.ok(!Object.keys(UKP.store.get().pakai).includes('__proto__')); assert.equal(typeof UKP.store.get().pakai.hasOwnProperty, 'function');
    // tanpa ms: hari ini
    P.catat('A1-003', 'sendiri'); assert.equal(P.status('A1-003').hari, Math.floor(Date.now() / HARI));
    assert.equal(P.catatBanyak(['A1-004', 'A1-005', 7, '__proto__'], 'ujian', 3 * HARI), 2);
    eq(UKP.store.get().pakai['A1-005'], [4, 3]);
  });

  it('titik catat di js/learn.js: catatJawaban, latihan bersama, rekaman sesi, ujian tim', () => {
    const { UKP } = muat(); const L = UKP.belajar; const P = L.pakai;
    const s = UKP.store.get(); Object.assign(s.profil, profil);
    const soal = modulKeluarga(UKP); const so = id => soal.find(x => x.id === id);
    L.catatJawaban(so('A1-001'), 'A', 30, 'latih');
    eq([P.status('A1-001').sendiri, P.status('A1-001').ujian], [true, false]);
    L.catatJawaban(so('A1-002'), 'B', 30, 'simulasi');
    eq([P.status('A1-002').sendiri, P.status('A1-002').ujian], [false, true]);
    // simulasi kosong tidak dicatat sebagai jawaban (rekaman simulasi mencatat semua soal di views-simulasi.js)
    L.catatJawaban(so('A1-003'), '-', 0, 'simulasi'); assert.equal(P.status('A1-003'), null);
    // latihan bersama: semua = bersama; jawaban pemimpin (profil.nama) tidak menandai latihan sendiri
    L.catatJawabanBersama(so('A1-004'), { Nicky: { o: 'A' }, Mita: { o: 'B' } }, 40);
    const st4 = P.status('A1-004'); eq([st4.bersama, st4.sendiri], [true, false]);
    assert.ok(s.jawaban.some(j => j.soal === 'A1-004'), 'jawaban pemimpin tetap masuk riwayat pribadi');
    // P.sebagai: catatJawaban di dalamnya dicatat dengan jenis itu
    P.sebagai('bersama', () => L.catatJawaban(so('A1-005'), 'A', 10, 'latih'));
    eq([P.status('A1-005').bersama, P.status('A1-005').sendiri], [true, false]);
    L.catatJawaban(so('A1-006'), 'A', 10, 'latih'); assert.equal(P.status('A1-006').sendiri, true, 'jenis paksa dilepas setelah sebagai()');
    // rekaman sesi: mode latihan = bersama, mode ujian = ujian
    const sid = L.mulaiSesiBersama(['Nicky', 'Mita'], ['A1-007'], 0, { mode: 'latihan' });
    L.catatSoalSesi(sid, so('A1-007'), { Nicky: 'A', Mita: 'C' }, 30); assert.equal(P.status('A1-007').bersama, true);
    const sid2 = L.mulaiSesiBersama(['Nicky'], ['A1-008'], 0, { mode: 'ujian' });
    L.catatSoalSesi(sid2, so('A1-008'), { Nicky: 'A' }, 30); eq([P.status('A1-008').ujian, P.status('A1-008').bersama], [true, false]);
    // ujian tim: semua soalIds diujikan saat pemimpin memulai (belum saat disusun)
    const UT = L.ujianTim;
    UT.susun({ soalIds: ['A1-009', 'A1-010'], peserta: ['Nicky', 'Mita'], tingkat: 'B', menit: 10 });
    assert.equal(P.status('A1-009'), null);
    UT.mulai(); assert.equal(P.status('A1-009').ujian, true); assert.equal(P.status('A1-010').ujian, true);
  });

  it('titik catat di view: simulasi, simulasi tim, lembar jawab, anggota room (pemeriksaan sumber)', () => {
    const baca = f => fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');
    const sim = baca('views-simulasi.js');
    assert.match(sim, /s\.simulasi\.push\(rekam\);[^\n]*\n\s*if \(L && L\.pakai\) L\.pakai\.catatBanyak\(a\.soalIds, 'ujian'/);
    assert.match(sim, /L\.pakai\.catatBanyak\(ids, 'ujian', kini, true\)/);
    assert.match(baca('views-ujian-tim.js'), /L\.pakai\.catatBanyak\(info\.soalIds, 'ujian'/);
    const ruang = baca('views-ruang.js');
    assert.match(ruang, /L\.pakai\.catat\(sid, 'bersama'\)/);
    assert.match(ruang, /L\.pakai\.sebagai\('bersama', catatJ\)/);
  });

  // v9.5 tinjauan: uji perilaku (bukan hanya teks sumber) untuk titik catat di views-simulasi.js dan views-ruang.js
  it('perilaku: nilaiDanRekam mencatat semua soal simulasi sebagai ujian tanpa menghapus catatan lain', () => {
    const { UKP } = muat({ setelah: ['views-simulasi.js'] }); const P = UKP.belajar.pakai; const s = UKP.store.get(); Object.assign(s.profil, profil);
    modulKeluarga(UKP); P.catat('A1-009', 'sendiri', 3 * HARI); P.catat('A1-002', 'bersama', 4 * HARI);
    const kini = Date.now();
    const a = { id: 'sim-uji', format: 'kustom', tingkat: 'B', kode: null, menit: 10, tanpaWaktu: false, soalIds: ['A1-001', 'A1-002', 'A1-003'], jawaban: { 'A1-001': 'A' }, ragu: [], detik: {}, mulai: kini - 60000, akhir: kini + 60000, posisi: 0, perKel: {}, selesai: null };
    s.simulasiAktif = a;
    const r = UKP.simulasiTim._murni.nilaiDanRekam(a, false);
    assert.equal(r.total, 3); assert.equal(s.simulasiAktif, null); assert.equal(s.simulasi.length, 1);
    for (const id of a.soalIds) assert.equal(P.status(id).ujian, true, id + ' diujikan');
    assert.equal(P.status('A1-001').sendiri, false, 'jawaban simulasi bukan latihan sendiri');
    eq(P.status('A1-002'), { sendiri: false, bersama: true, ujian: true, hari: Math.floor(r.selesai / HARI) });
    eq(s.pakai['A1-009'], [1, 3], 'catatan soal lain tetap ada');
    // simulasi tim di HP anggota: semua soal diujikan saat dimulai; catatan lain tetap
    const sim = UKP.simulasiTim.mulai({ ujianId: 'u-uji', judul: 'Uji', tingkat: 'B', soalIds: ['A1-006', 'A1-007'], nama: 'Mita' });
    assert.ok(sim); assert.equal(P.status('A1-006').ujian, true); assert.equal(P.status('A1-007').ujian, true);
    eq(s.pakai['A1-009'], [1, 3]);
    assert.equal(UKP.simulasiTim.mulai({ soalIds: [] }), null);
  });

  it('perilaku: susunAttempt kustom mengambil soal belum dipakai dulu dan satu soal per keluarga', () => {
    const { UKP } = muat({ setelah: ['views-simulasi.js'] }); const P = UKP.belajar.pakai; const K = UKP.konten;
    Object.assign(UKP.store.get().profil, profil); modulKeluarga(UKP);
    P.catat('A1-001', 'ujian', HARI); P.catat('A1-003', 'ujian', HARI);
    for (let k = 0; k < 5; k++) {
      const a = UKP.simulasiTim._murni.susunAttempt({ format: 'kustom', kode: 'A1', jumlah: 9, tingkat: 'B' });
      // 8 keluarga baru + soal pengganti A1-101 (keluarga A1-001 sudah dipakai); A1-003 (semua anggota dipakai) tidak terambil
      eq(a.soalIds.slice().sort(), ['A1-002', 'A1-004', 'A1-005', 'A1-006', 'A1-007', 'A1-008', 'A1-009', 'A1-010', 'A1-101']);
      assert.equal(new Set(a.soalIds.map(id => K.akar(id))).size, a.soalIds.length);
    }
    const semua = UKP.simulasiTim._murni.susunAttempt({ format: 'kustom', kode: 'A1', jumlah: 20, tingkat: 'B' });
    assert.equal(semua.soalIds.length, 10, 'kustom 20 dari 13 soal: hanya 10 keluarga');
  });

  it('perilaku: anggota room mencatat soal yang kuncinya dibuka sebagai bersama, sekali per soal', () => {
    const { UKP } = muat({ setelah: ['views-ruang.js'] }); const P = UKP.belajar.pakai; const s = UKP.store.get(); Object.assign(s.profil, profil, { nama: 'Mita' });
    modulKeluarga(UKP);
    let peran = 'anggota';
    UKP.ruang = { tersedia: () => ({ tersedia: true }), status: () => ({ tersambung: true, online: [] }), info: () => ({ peran, nama: 'Mita', kode: 'R1' }), state: () => null, jawabanSemua: () => ({}) };
    const catat = UKP.ruangUI._catatKemajuan;
    const st = (fase, sid, per) => ({ aktivitas: { id: 'akt-1', jenis: 'latihan', fase, idx: 0, mulaiSoal: 0, hasilSoal: { soalId: sid, per } } });
    catat(st('jawab', 'A1-004', { Mita: { o: 'B' } })); assert.equal(P.status('A1-004'), null, 'belum dicatat sebelum kunci dibuka');
    catat(st('kunci', 'A1-004', { Mita: { o: 'B' } }));
    const st4 = P.status('A1-004'); eq([st4.bersama, st4.sendiri, st4.ujian], [true, false, false]);
    const nJ = s.jawaban.filter(j => j.soal === 'A1-004').length; assert.equal(nJ, 1, 'jawaban anggota masuk Kemajuan');
    catat(st('kunci', 'A1-004', { Mita: { o: 'B' } })); assert.equal(s.jawaban.filter(j => j.soal === 'A1-004').length, 1, 'sekali per soal');
    // kunci dibuka tanpa jawaban anggota: tetap dibahas bersama
    catat(st('kunci', 'A1-005', {})); assert.equal(P.status('A1-005').bersama, true);
    // perangkat pemimpin tidak mencatat lewat jalur ini
    peran = 'tuan'; catat(st('kunci', 'A1-006', {})); assert.equal(P.status('A1-006'), null);
  });
});

describe('v9.5 buku pemakaian: sinkron antartab dan soal pengganti yang menunggu', () => {
  it('entri yang diubah dua tab digabung: tanda OR, hari terbaru', () => {
    const { UKP, simpanan } = muat({ simpanan: { [KEY]: JSON.stringify({ profil, pakai: {} }) } });
    UKP.store.get();
    simpanan.set(KEY, JSON.stringify({ profil, pakai: { 'A1-001': [1, 20], 'A1-002': [2, 25], 'A1-003': [4, 5] } }));   // tab lain
    const P = UKP.belajar.pakai;
    P.catat('A1-001', 'ujian', 20 * HARI, true); P.catat('A1-002', 'sendiri', 21 * HARI, true); UKP.store.flush();
    const t = JSON.parse(simpanan.get(KEY)).pakai;
    eq(t['A1-001'], [5, 20]); eq(t['A1-002'], [3, 25]); eq(t['A1-003'], [4, 5], 'entri yang hanya ditulis tab lain tetap');
    eq(UKP.store.get().pakai['A1-001'], [5, 20]);
  });

  it('menunggu: soal pengganti belum dipakai yang belum dapat giliran, sehingga angka menjumlah', () => {
    const { UKP } = muat(); const P = UKP.belajar.pakai; const soal = modulKeluarga(UKP);
    let r = P.ringkas(soal); assert.equal(P.menunggu(r), 3);
    assert.equal(r.baru + r.penggantiSiap + r.terpakai + P.menunggu(r), r.total);
    P.catat('A1-001', 'ujian', HARI); r = P.ringkas(soal);
    assert.equal(P.menunggu(r), 2, 'A1-102 menunggu A1-101; A1-103 menunggu A1-002');
    assert.equal(r.baru + r.penggantiSiap + r.terpakai + P.menunggu(r), r.total);
    assert.equal(P.menunggu(null), 0);
  });
});

describe('v9.5 buku pemakaian: normalisasi, batas, ekspor dan impor', () => {
  it('normalisasi membuang entri berbentuk salah', () => {
    const { UKP } = muat();
    const raw = JSON.parse('{"profil":{"tingkat":"B"},"pakai":{"A1-001":[1,20],"A1-002":[8,1],"A1-003":[0,1],"A1-004":[1,-1],"A1-005":[1,2.5],"A1-006":"x","A1-007":[1,2,3],"__proto__":[1,1],"A1-008":[7,0],"A1-009":["1",2]}}');
    const o = UKP.store.normal(raw);
    eq((o.pakai), { 'A1-001': [1, 20], 'A1-008': [7, 0] });
    eq(UKP.store.normal({ profil: {}, pakai: [1, 2] }).pakai, {});
    eq(UKP.store.normal({ profil: {}, pakai: null }).pakai, {});
  });

  it('batas 8.000 entri: yang hari terakhirnya paling lama dibuang', () => {
    const { UKP } = muat(); assert.equal(UKP.store.BATAS_PAKAI, 8000);
    const p = {}; for (let i = 0; i < 8010; i++) p['X-' + i] = [1, 100 + (i % 2 ? i : 0)];
    const o = UKP.store.normal({ profil: {}, pakai: p }).pakai;
    assert.equal(Object.keys(o).length, 8000);
    // yang dibuang: 10 entri hari 100 terakhir (hari sama → urutan berkas)
    const genap = Object.keys(p).filter((k, i) => i % 2 === 0); const hilang = genap.filter(k => !o[k]);
    assert.equal(hilang.length, 10); eq(hilang, genap.slice(-10));
    // catat juga menjaga batas
    const { UKP: U2 } = muat(); U2.store.get().pakai = o; U2.belajar.pakai.catat('BARU-1', 'ujian', 999 * HARI);
    assert.equal(Object.keys(U2.store.get().pakai).length, 8000); assert.ok(U2.store.get().pakai['BARU-1']);
  });

  it('ekspor membawa pakai; impor ekspor baru memakainya apa adanya', () => {
    const { UKP } = muat(); UKP.store.get().profil.onboardingSelesai = true;
    UKP.belajar.pakai.catat('A1-001', 'bersama', 5 * HARI);
    const teks = UKP.store.ekspor(); eq(JSON.parse(teks).data.pakai, { 'A1-001': [2, 5] });
    const { UKP: B } = muat(); B.store.impor(teks);
    eq(B.store.get().pakai, { 'A1-001': [2, 5] });
    // ekspor baru dengan buku kosong: tidak dibangun ulang dari riwayat
    const kosong = JSON.parse(teks); kosong.data.pakai = {}; kosong.data.jawaban = [{ soal: 'A1-009', konteks: 'latih', pada: 3 * HARI }];
    B.store.impor(JSON.stringify(kosong)); eq(B.store.get().pakai, {});
  });
});

describe('v9.5 buku pemakaian: bangunDariRiwayat dan migrasi', () => {
  const lama = () => ({
    profil, jawaban: [{ soal: 'A1-001', konteks: 'latih', pada: 10 * HARI }, { soal: 'A1-002', konteks: 'simulasi', pada: 11 * HARI }, { soal: 'A1-001', konteks: 'sesi', pada: 13 * HARI }],
    jawabanBersama: [{ p: 'Mita', s: 'A1-003', o: 'A', w: 12 * HARI }, { p: 'Mita', s: 'A1-009', o: 'A', w: 12 * HARI, m: 'ujian' }],
    sesiBersama: [{ id: 'sb-1', mulai: 14 * HARI, selesai: 14 * HARI + 1000, peserta: ['Mita'], soal: [{ id: 'A1-004' }] }, { id: 'sb-2', mulai: 15 * HARI, selesai: null, mode: 'ujian', peserta: ['Mita'], soal: [{ id: 'A1-005' }] }],
    simulasi: [{ id: 's1', selesai: 16 * HARI, soalIds: ['A1-006', 'A1-001'] }, { id: 's2', selesai: null, soalIds: ['A1-007'] }],
    ujianTim: { id: 'u1', soalIds: ['A1-008'], peserta: ['Mita'], mulai: 17 * HARI },
  });
  const harap = { 'A1-001': [5, 16], 'A1-002': [4, 11], 'A1-003': [2, 12], 'A1-009': [4, 12], 'A1-004': [2, 14], 'A1-005': [4, 15], 'A1-006': [4, 16], 'A1-008': [4, 17] };

  it('membangun buku dari semua riwayat (jawaban, jawabanBersama, sesiBersama, simulasi selesai, ujianTim yang sudah dimulai)', () => {
    const { UKP } = muat();
    const o = J((UKP.belajar.pakai.bangunDariRiwayat(lama())));
    eq(o, harap);
    assert.equal(o['A1-007'], undefined, 'simulasi yang belum selesai tidak dihitung');
    const tanpaMulai = lama(); tanpaMulai.ujianTim.mulai = null;
    assert.equal(UKP.belajar.pakai.bangunDariRiwayat(tanpaMulai)['A1-008'], undefined);
    eq((UKP.belajar.pakai.bangunDariRiwayat(null)), {});
  });

  it('state lama tanpa field pakai: dibangun sekali saat dimuat lalu disimpan', async () => {
    const { UKP, simpanan } = muat({ simpanan: { [KEY]: JSON.stringify(lama()) } });
    eq((UKP.store.get().pakai), harap);
    await tunggu(120);
    eq(JSON.parse(simpanan.get(KEY)).pakai, harap, 'hasil migrasi tersimpan');
    // state yang sudah punya pakai (walau kosong) tidak dibangun ulang
    const sudah = Object.assign(lama(), { pakai: {} });
    const { UKP: B } = muat({ simpanan: { [KEY]: JSON.stringify(sudah) } });
    eq(B.store.get().pakai, {});
  });

  it('state dimuat sebelum learn.js: migrasi dijalankan saat learn.js dimuat', () => {
    const { UKP } = muat({ simpanan: { [KEY]: JSON.stringify(lama()) }, sebelumLearn: U => { U.store.get(); assert.equal(Object.keys(U.store.get().pakai).length, 0); } });
    eq((UKP.store.get().pakai), harap);
  });

  it('impor ekspor lama tanpa pakai membangun buku dari riwayatnya', () => {
    const { UKP } = muat();
    UKP.store.impor(JSON.stringify({ aplikasi: 'pelatih-ukp', versi: '9.4.5', data: lama() }));
    eq((UKP.store.get().pakai), harap);
  });

  it('tab versi lama menulis tanpa field pakai: buku di tab ini tidak dikosongkan', async () => {
    const { UKP, simpanan } = muat({ simpanan: { [KEY]: JSON.stringify(Object.assign(lama(), { pakai: { 'A1-001': [1, 3] } })) } });
    UKP.store.get();
    simpanan.set(KEY, JSON.stringify(Object.assign(lama(), { kesanUjian: 'dari tab lama' })));   // tab lain (versi lama) menulis
    UKP.belajar.pakai.catat('A1-002', 'bersama', 20 * HARI, true); UKP.store.flush();
    const tersimpan = JSON.parse(simpanan.get(KEY));
    assert.equal(tersimpan.kesanUjian, 'dari tab lama');
    eq(tersimpan.pakai['A1-001'], [1, 3]); eq(tersimpan.pakai['A1-002'], [2, 20]);
  });
});

describe('v9.5 helper keluarga soal dan peta butir (UKP.konten)', () => {
  it('akar, keluarga, penggantiDari, adaPengganti', () => {
    const { UKP } = muat(); const K = UKP.konten;
    assert.equal(K.adaPengganti(), false);
    modulKeluarga(UKP);
    assert.equal(K.akar('A1-101'), 'A1-001'); assert.equal(K.akar('A1-001'), 'A1-001'); assert.equal(K.akar(K.soal('A1-103')), 'A1-002');
    assert.equal(K.akar({ id: 'Z-1', kembaranDari: 'Z-0' }), 'Z-0'); assert.equal(K.akar('TIDAK-ADA'), 'TIDAK-ADA'); assert.equal(K.akar(null), null);
    eq(ids(K.keluarga('A1-102')), ['A1-001', 'A1-101', 'A1-102']);
    eq(ids(K.keluarga('A1-005')), ['A1-005']);
    eq(ids(K.penggantiDari('A1-001')), ['A1-101', 'A1-102']);
    eq(ids(K.penggantiDari('A1-101')), ['A1-101', 'A1-102']);
    eq(K.penggantiDari('A1-005'), []);
    assert.equal(K.adaPengganti(), true);
    // data bertambah: indeks dibangun ulang
    daftarModul(UKP, 'A2', [soalT('A2-001'), soalT('A2-101', { kembaranDari: 'A2-001' })]);
    eq(ids(K.keluarga('A2-101')), ['A2-001', 'A2-101']);
  });

  it('peta butir: kosong tidak membuat galat; ID butir yang tidak ada di cakupan diabaikan; soalButir menyaring tingkat', () => {
    const { UKP } = muat({ data: ['cakupan.js', 'peta-butir.js'] }); const K = UKP.konten;
    modulKeluarga(UKP);
    UKP.petaButir = { versi: 1, peta: {}, luar: {} }; // berkas data kini berisi peta sungguhan; keadaan kosong disetel langsung
    eq(K.butirSoal('A1-001'), []); eq(K.soalButir('A.1.1', 'A'), []); assert.equal(K.adaPetaButir(), false);
    // A.1.1 daun; A.4.4 induk (punya anak) → diabaikan; ZZ tidak ada
    const induk = UKP.cakupanResmi.tingkat.A.mataUjian.flatMap(m => m.subjek.flatMap(s => s.butir)).find(b => b.anak && b.anak.length);
    UKP.petaButir = { versi: 1, peta: { 'A1-001': ['A.1.1', 'ZZ.9', induk.id, 'A.1.1', 'B.1.1'], 'A1-002': ['A.1.1'], 'A1-003': 'salah' }, luar: {} };
    eq(K.butirSoal('A1-001'), ['A.1.1', 'B.1.1']);
    eq(K.butirSoal('A1-003'), []); eq(K.butirSoal('__proto__'), []);
    eq(ids(K.soalButir('A.1.1')), ['A1-001', 'A1-002']);
    K.soal('A1-002').tingkat = ['C'];
    eq(ids(K.soalButir('A.1.1', 'A')), ['A1-001']);
    eq(K.soalButir(induk.id), []); eq(K.soalButir('ZZ.9'), []);
    assert.equal(K.adaPetaButir(), true);
    // tanpa cakupan.js atau tanpa UKP.petaButir: kosong, tanpa galat
    const { UKP: B } = muat(); modulKeluarga(B);
    eq(B.konten.butirSoal('A1-001'), []); eq(B.konten.soalButir('A.1.1'), []); assert.equal(B.konten.adaPetaButir(), false);
  });

  it('js/data/peta-butir.js: bentuk kontrak, dimuat setelah cakupan.js di index.html, terdaftar di sw.js', () => {
    const P = require(path.join(ROOT, 'js', 'data', 'peta-butir.js'));
    assert.equal(P.versi, 1); for (const k of ['peta', 'luar']) assert.ok(P[k] && typeof P[k] === 'object' && !Array.isArray(P[k]), k + ' harus objek');
    const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    const iC = idx.indexOf('js/data/cakupan.js'), iP = idx.indexOf('js/data/peta-butir.js'), iL = idx.indexOf('js/learn.js');
    assert.ok(iP > iC && iP < iL, 'peta-butir.js setelah cakupan.js dan sebelum learn.js');
    const n = (idx.match(/<script\b[^>]*\bsrc\s*=\s*["'](?!https?:)[^"']+["']/gi) || []).length;
    assert.match(idx, new RegExp('TOTAL = ' + n + ','), 'penjaga muat menghitung skrip baru');
    assert.match(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), /"js\/data\/peta-butir\.js"/);
  });
});

describe('v9.5 buku pemakaian: ringkas', () => {
  it('total, baru (per keluarga), pengganti siap, terpakai, rincian', () => {
    const { UKP } = muat(); const P = UKP.belajar.pakai; const soal = modulKeluarga(UKP);
    let r = P.ringkas(soal);
    eq((r), { total: 13, baru: 10, penggantiSiap: 0, terpakai: 0, bersama: 0, ujian: 0, sendiri: 0 });
    P.catat('A1-001', 'bersama', HARI); P.catat('A1-001', 'ujian', HARI); P.catat('A1-003', 'sendiri', HARI); P.catat('A1-002', 'ujian', HARI); P.catat('A1-103', 'ujian', HARI);
    r = P.ringkas(soal);
    // keluarga A1-001: pengganti siap (A1-101/102 belum); A1-002: semua dipakai (ulang); A1-003: dipakai; sisanya 7 baru
    eq((r), { total: 13, baru: 7, penggantiSiap: 1, terpakai: 4, bersama: 1, ujian: 3, sendiri: 1 });
    // daftar tanpa soal asli: kelas tetap dilihat dari seluruh keluarga
    eq(((P.ringkas([UKP.konten.soal('A1-101')]))), { total: 1, baru: 0, penggantiSiap: 1, terpakai: 0, bersama: 0, ujian: 0, sendiri: 0 });
    assert.equal(P.ringkas(null).total, 0);
  });
});

describe('v9.5 UKP.belajar.urutBank', () => {
  function siap() { const { UKP } = muat(); const soal = modulKeluarga(UKP); return { UKP, soal, L: UKP.belajar, P: UKP.belajar.pakai }; }
  const opsiT = o => Object.assign({ acak: tetap, acakAkhir: false }, o);

  it('tanpa buku dan tanpa pengganti di pool: semua keluarga baru, n dipotong, satu keluarga satu soal', () => {
    const { L, soal } = siap();
    const asli = soal.filter(x => !x.kembaranDari);
    eq(ids(L.urutBank(asli, 4, opsiT())), ['A1-001', 'A1-002', 'A1-003', 'A1-004']);
    assert.equal(L.urutBank(asli, null, opsiT()).length, 10);
    // pool dengan pengganti: satu soal per keluarga, calon = soal asli
    const semua = L.urutBank(soal, null, opsiT());
    assert.equal(semua.length, 10); assert.ok(semua.some(x => x.id === 'A1-001')); assert.ok(!semua.some(x => x.kembaranDari));
    // soal asli tidak ada di pool: anggota pertama di pool
    eq(ids(L.urutBank([soal[10], soal[11]], null, opsiT())), ['A1-101']);
    eq(L.urutBank([], 5, opsiT()), []); eq(L.urutBank(null, 5, opsiT()), []);
    assert.equal(L.urutBank(asli, 0, opsiT()).length, 0);
  });

  it('setara perilaku lama tanpa pengganti: soal belum pernah dijawab dulu, lalu yang salah, lalu sisanya', () => {
    const { UKP, L, soal } = siap();
    const asli = soal.filter(x => !x.kembaranDari); const so = id => asli.find(x => x.id === id);
    // dijawab: 001 benar, 002 salah, 003 benar (lewat catatJawaban → buku pemakaian)
    L.catatJawaban(so('A1-001'), 'A', 5, 'latih'); L.catatJawaban(so('A1-002'), 'B', 5, 'latih'); L.catatJawaban(so('A1-003'), 'A', 5, 'latih');
    const salah = new Set(UKP.store.get().jawaban.filter(j => !j.benar).map(j => j.soal));
    const hasil = ids(L.urutBank(asli, 10, opsiT({ salah })));
    eq(hasil.slice(0, 7).sort(), ['A1-004', 'A1-005', 'A1-006', 'A1-007', 'A1-008', 'A1-009', 'A1-010']);
    eq(hasil.slice(7), ['A1-002', 'A1-001', 'A1-003']);
    // n kecil: hanya yang belum dijawab
    assert.ok(ids(L.urutBank(asli, 5, opsiT({ salah }))).every(id => !['A1-001', 'A1-002', 'A1-003'].includes(id)));
  });

  it('kelas pengganti: anggota belum dipakai pertama; ulang: anggota paling lama tidak dipakai', () => {
    const { L, P, soal } = siap();
    P.catat('A1-001', 'bersama', 5 * HARI);
    const k1 = L.urutBank(soal, null, opsiT({ cara: 'pengganti' }));
    assert.equal(k1[0].id, 'A1-101', 'pengganti dulu, calon = anggota belum dipakai pertama');
    P.catat('A1-101', 'ujian', 6 * HARI); P.catat('A1-102', 'ujian', 4 * HARI);
    const fam = soal.filter(x => K1(x)); function K1(x) { return ['A1-001', 'A1-101', 'A1-102'].includes(x.id); }
    eq(ids(L.urutBank(fam, null, opsiT())), ['A1-102'], 'ulang: yang paling lama tidak dipakai');
  });

  it('cara campur: kira-kira 70% baru dan 30% pengganti, lalu ulang; satu kelas kurang diisi kelas lain', () => {
    const { UKP, L, P } = siap();
    // 20 keluarga: 10 baru (B1-001..010), 6 berpengganti siap (B1-011..016 dipakai, pengganti 1xx belum), 4 ulang (B1-017..020 dipakai)
    const sb = []; for (let i = 1; i <= 20; i++) sb.push(soalT('B1-' + String(i).padStart(3, '0')));
    for (let i = 11; i <= 16; i++) sb.push(soalT('B1-1' + i, { kembaranDari: 'B1-0' + i }));
    daftarModul(UKP, 'B1', sb);
    for (let i = 11; i <= 20; i++) P.catat('B1-0' + i, 'ujian', (30 - i) * HARI);
    const kls = x => !UKP.konten.soal(x.id).kembaranDari && !P.sudah(x.id) ? 'baru' : x.kembaranDari ? 'pengganti' : 'ulang';
    const h10 = L.urutBank(sb, 10, opsiT());
    eq(h10.map(kls), ['baru', 'baru', 'baru', 'baru', 'baru', 'baru', 'baru', 'pengganti', 'pengganti', 'pengganti']);
    // pengganti dahulukan keluarga paling lama tidak dipakai (B1-016 dipakai hari 14, paling lama)
    eq(ids(h10.slice(7)), ['B1-116', 'B1-115', 'B1-114']);
    // n = 18: 13 baru diminta tapi hanya 10 → sisa dari pengganti (6) lalu ulang (2)
    const h18 = L.urutBank(sb, 18, opsiT());
    eq(h18.map(kls).join(','), 'baru,'.repeat(10) + 'pengganti,'.repeat(6) + 'ulang,ulang');
    // keluarga yang terakhir dijawab salah didahulukan dalam kelas pengganti dan ulang
    const h12 = L.urutBank(sb, 20, opsiT({ salah: new Set(['B1-011', 'B1-018']) }));
    assert.equal(h12[10].id, 'B1-111'); assert.equal(h12[16].id, 'B1-018');
    // satu keluarga satu soal di seluruh hasil
    const akar = h18.map(x => UKP.konten.akar(x)); assert.equal(new Set(akar).size, akar.length);
  });

  it('cara baru dan cara pengganti mengubah urutan kelas', () => {
    const { UKP, L, P } = siap();
    const sb = []; for (let i = 1; i <= 6; i++) sb.push(soalT('C1-00' + i)); sb.push(soalT('C1-101', { kembaranDari: 'C1-001' }), soalT('C1-102', { kembaranDari: 'C1-002' }));
    daftarModul(UKP, 'C1', sb); P.catat('C1-001', 'bersama', HARI); P.catat('C1-002', 'bersama', HARI); P.catat('C1-003', 'sendiri', HARI);
    eq(ids(L.urutBank(sb, null, opsiT({ cara: 'baru' }))), ['C1-004', 'C1-005', 'C1-006', 'C1-101', 'C1-102', 'C1-003']);
    eq(ids(L.urutBank(sb, null, opsiT({ cara: 'pengganti' }))), ['C1-101', 'C1-102', 'C1-004', 'C1-005', 'C1-006', 'C1-003']);
    eq(ids(L.urutBank(sb, 2, opsiT({ cara: 'pengganti' }))), ['C1-101', 'C1-102']);
    eq(ids(L.urutBank(sb, 2, opsiT({ cara: 'baru' }))), ['C1-004', 'C1-005']);
  });

  it('pengacak dipakai di tiap kelas dan sekali lagi untuk seluruh hasil (acakAkhir)', () => {
    const { L, soal } = siap();
    const asli = soal.filter(x => !x.kembaranDari); let panggil = 0;
    const balik = arr => { panggil++; return arr.slice().reverse(); };
    const a = ids(L.urutBank(asli, 3, { acak: balik, acakAkhir: false }));
    eq(a, ['A1-010', 'A1-009', 'A1-008']);
    panggil = 0; const b = ids(L.urutBank(asli, 3, { acak: balik }));
    eq(b, ['A1-008', 'A1-009', 'A1-010']); assert.ok(panggil >= 4, 'tiga kelas + hasil akhir');
    // tanpa opsi.acak: hasil acak tetap berisi soal yang sah
    const c = L.urutBank(asli, 5); assert.equal(c.length, 5); assert.equal(new Set(ids(c)).size, 5);
  });
});

describe('v9.5 sesi harian: satu keluarga satu soal', () => {
  it('L.susunSesi tidak memilih dua soal dari satu keluarga', () => {
    const { UKP } = muat(); const soal = [];
    for (let i = 1; i <= 6; i++) soal.push(soalT('A1-00' + i, { tingkat: ['A'] }));
    for (let i = 1; i <= 20; i++) soal.push(soalT('A1-1' + String(i).padStart(2, '0'), { kembaranDari: 'A1-00' + (1 + i % 6), tingkat: ['A'] }));
    daftarModul(UKP, 'A1', soal); UKP.store.get().profil.tingkat = 'A';
    for (const u of ['kilat', 'normal', 'penuh']) for (let k = 0; k < 5; k++) {
      const b = UKP.belajar.susunSesi(u).blok.find(x => x.jenis === 'soal'); const d = b ? Array.from(b.data) : [];
      assert.ok(d.length > 0); assert.equal(new Set(d.map(id => UKP.konten.akar(id))).size, d.length, u);
    }
  });
});

describe('v9.5 validator: kembaranDari dan sejak', () => {
  const VAL = path.join(ROOT, 'tools', 'validate-module.js');
  function modulAsli(kode) {
    let m = null; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-' + kode + '.js'), 'utf8'), { UKP: { register(x) { m = x; } } });
    return m;
  }
  function uji(ubah) {
    const m = modulAsli('A5'); ubah(m);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'v950-val-')); const f = path.join(dir, 'mu-A5.js');
    fs.writeFileSync(f, 'UKP.register(' + JSON.stringify(m) + ');\n');
    try { return { kode: 0, out: execFileSync(process.execPath, [VAL, f], { encoding: 'utf8' }) }; }
    catch (e) { return { kode: e.status, out: String(e.stdout || '') + String(e.stderr || '') }; }
    finally { fs.rmSync(dir, { recursive: true, force: true }); }
  }
  const pengganti = (m, extra) => { const s = J(m.soal[0]); s.id = 'A5-901'; Object.assign(s, extra); m.soal.push(s); return s; };

  it('soal pengganti yang sah lolos', () => {
    const r = uji(m => { pengganti(m, { kembaranDari: m.soal[1].id, sejak: '9.5.0' }); });
    assert.equal(r.kode, 0, r.out); assert.match(r.out, /OK/);
  });
  it('kembaranDari ke id yang tidak ada, ke dirinya sendiri, ke sesama pengganti, lintas modul: galat', () => {
    let r = uji(m => { pengganti(m, { kembaranDari: 'A5-999' }); });
    assert.equal(r.kode, 1); assert.match(r.out, /kembaranDari "A5-999" tidak ada/);
    r = uji(m => { pengganti(m, { kembaranDari: 'A5-901' }); });
    assert.equal(r.kode, 1); assert.match(r.out, /menunjuk dirinya sendiri/);
    r = uji(m => { pengganti(m, { kembaranDari: m.soal[1].id }); const s2 = pengganti(m, { kembaranDari: 'A5-901' }); s2.id = 'A5-902'; });
    assert.equal(r.kode, 1); assert.match(r.out, /adalah soal pengganti/);
    r = uji(m => { pengganti(m, { kembaranDari: 'A1-001' }); });
    assert.equal(r.kode, 1); assert.match(r.out, /di luar modul A5/);
    r = uji(m => { pengganti(m, { kembaranDari: 34 }); });
    assert.equal(r.kode, 1); assert.match(r.out, /kembaranDari harus id soal/);
  });
  it('sejak harus pola x.y.z', () => {
    const r = uji(m => { m.soal[0].sejak = '9.5'; });
    assert.equal(r.kode, 1); assert.match(r.out, /sejak "9\.5" tidak valid/);
  });
  it('dokumen skema menjelaskan field baru dan peta-butir.js', () => {
    const d = fs.readFileSync(path.join(ROOT, 'docs', 'SKEMA-KONTEN.md'), 'utf8');
    for (const x of ['kembaranDari', 'sejak', 'js/data/peta-butir.js', 'soal pengganti']) assert.ok(d.includes(x), x);
  });
});

// ---------- paket 2: pemasangan urutBank dan antarmuka ----------
const bacaJs = f => fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');

describe('v9.5 ujian berkuota: L.ambilBank dan kuota per keluarga', () => {
  it('ambilBank memakai cara baru, melewati keluarga yang sudah terpilih, dan menambah akar hasilnya', () => {
    const { UKP } = muat(); const L = UKP.belajar; const P = L.pakai; const soal = modulKeluarga(UKP);
    P.catat('A1-003', 'ujian', HARI);
    const akar = new Set(['A1-002']);
    const a = L.ambilBank(soal, 20, akar, { acak: tetap, acakAkhir: false });
    assert.ok(!a.some(x => UKP.konten.akar(x) === 'A1-002'), 'keluarga yang sudah terpilih dilewati');
    eq(ids(a).slice(0, 2), ['A1-001', 'A1-004'], 'belum dipakai dulu (cara baru), soal asli sebagai calon');
    assert.equal(ids(a).slice(-1)[0], 'A1-003', 'yang sudah dipakai paling akhir');
    assert.equal(new Set(a.map(x => UKP.konten.akar(x))).size, a.length);
    assert.ok(akar.has('A1-001') && akar.has('A1-003'), 'akar hasil ditambahkan');
    // unit kedua dengan Set yang sama: tidak ada keluarga ganda di seluruh ujian
    eq(L.ambilBank(soal, 5, akar, { acak: tetap }), []);
  });

  it('kuotaSoal opsi keluarga: kapasitas unit dihitung per keluarga', () => {
    const { UKP } = muat(); const L = UKP.belajar; UKP.store.get().profil.tingkat = 'A';
    const soal = []; for (let i = 1; i <= 3; i++) soal.push(soalT('A1-00' + i, { tingkat: ['A'] }));
    for (let i = 1; i <= 9; i++) soal.push(soalT('A1-1' + String(i).padStart(2, '0'), { kembaranDari: 'A1-00' + (1 + i % 3), tingkat: ['A'] }));
    daftarModul(UKP, 'A1', soal);
    const biasa = L.kuotaSoal('A', 10, {}).reduce((a, u) => a + u.n, 0);
    const kel = L.kuotaSoal('A', 10, { keluarga: true }).reduce((a, u) => a + u.n, 0);
    assert.equal(biasa, 10); assert.equal(kel, 3, 'hanya 3 keluarga');
  });

  it('idSalahTerakhir: hanya soal yang jawaban terakhirnya salah', () => {
    const { UKP } = muat(); const L = UKP.belajar; const soal = modulKeluarga(UKP); const so = id => soal.find(x => x.id === id);
    L.catatJawaban(so('A1-001'), 'B', 5, 'latih'); L.catatJawaban(so('A1-001'), 'A', 5, 'latih'); L.catatJawaban(so('A1-002'), 'C', 5, 'latih');
    eq([...L.idSalahTerakhir()], ['A1-002']);
  });

  it('Simulasi pribadi dan Ujian tim memakai ambilBank per unit; paket try out tetap urutan asli', () => {
    const sim = bacaJs('views-simulasi.js');
    assert.match(sim, /const ambilUnit = \(pool, n, akar\) => L && typeof L\.ambilBank === 'function' \? L\.ambilBank\(pool, n, akar\)/);
    assert.match(sim, /kuotaSoal\(tingkat, target, \{ min1: true, keluarga: true \}\)[^\n]*ambilUnit\(u\.soal, u\.n, akar\)/);
    assert.ok(!/U\.ambil\(/.test(sim.slice(sim.indexOf('function susunAttempt'), sim.indexOf('function menitTempo'))), 'tidak ada lagi U.ambil di susunAttempt');
    assert.match(sim, /soal = semua\.slice\(dari - 1, sampai\)/, 'try out apa adanya');
  });
});

describe('v9.5 Latih: urutBank, bank= dan butir=', () => {
  const vb = bacaJs('views-belajar.js');
  it('mulai memakai L.urutBank (try out + Semua tetap urutan asli); saringan pernah salah tetap di pool', () => {
    assert.match(vb, /function mulai\(oj\) \{\n\s*const arr = pool\(\); if \(!arr\.length\) return false;\n(\s*\/\/[^\n]*\n)*\s*jalankan\(urutLatih\(arr, f, \{ sudah: f\.n === 'semua' \? benarHariIni\(\) : null, salah: L\.idSalahTerakhir/, 'hasil urutLatih langsung dijalankan');
    assert.match(vb, /if \(g\.hanyaSalah\) \{ const salah = soalSalah/);
  });
  it('perilaku urutLatih: sama dengan L.urutBank untuk pengacak tetap; Semua tanpa paket satu soal per keluarga; paket + Semua urutan asli', () => {
    const { UKP } = muat({ setelah: ['views-belajar.js'] }); const L = UKP.belajar; const P = L.pakai; const soal = modulKeluarga(UKP);
    const urutLatih = UKP.latihBank.urutLatih;
    P.catat('A1-001', 'ujian', 2 * HARI); P.catat('A1-004', 'sendiri', 3 * HARI); P.catat('A1-005', 'sendiri', HARI);
    const salah = new Set(['A1-004']);
    for (const bank of ['campur', 'baru', 'pengganti']) for (const n of [3, 5, 10]) {
      const a = ids(urutLatih(soal, { n, bank }, { salah, acak: tetap }));
      eq(a, ids(L.urutBank(soal, n, { cara: bank, salah, acak: tetap })), bank + ' ' + n);
      assert.equal(new Set(a.map(id => UKP.konten.akar(id))).size, a.length);
    }
    // n 5 cara baru: hanya keluarga yang belum dipakai
    assert.ok(ids(urutLatih(soal, { n: 5, bank: 'baru' }, { acak: tetap })).every(id => !['A1-001', 'A1-101', 'A1-102', 'A1-004', 'A1-005'].includes(id)));
    // jumlah kosong: 20
    assert.equal(urutLatih(soal, { n: '', bank: 'campur' }, { acak: tetap }).length, 10);
    // Semua tanpa paket: soal benar hari ini dilewati, satu soal per keluarga
    const semua = ids(urutLatih(soal, { n: 'semua', bank: 'campur' }, { sudah: new Set(['A1-010']), acak: tetap }));
    assert.equal(semua.length, 9); assert.ok(!semua.includes('A1-010'));
    // paket try out + Semua: urutan asli, tanpa aturan keluarga
    eq(ids(urutLatih(soal, { n: 'semua', bank: 'campur', set: 'TO' }, { sudah: new Set(['A1-002']) })), ids(soal).filter(id => id !== 'A1-002'));
  });
  it('field Pilih soal: tiga pilihan, parameter bank, chip, baris hitungan, tautan bank, keterangan tanpa pengganti', () => {
    for (const x of ["'Pilih soal'", "['campur', 'Campur'], ['baru', 'Belum pernah dipakai'], ['pengganti', 'Pengganti soal lama']", "'Belum ada soal pengganti.'", "'Lihat bank soal'", "params.bank === 'baru' || params.bank === 'pengganti'", "' pengganti siap'", "' sudah dipakai'", "'pengganti soal lama'"]) assert.ok(vb.includes(x), x);
  });
  it('saringan butir: params.butir, soal butir per tingkat butir, chip berhapus', () => {
    assert.match(vb, /f\.butir = typeof params\.butir === 'string' && infoButirF\(params\.butir\)/);
    assert.match(vb, /K\.soalButir\(id, b\.tingkat\)/);
    assert.match(vb, /chip\(b \? teks \+ ' · ' \+ pendek\(b\.teks, 34\) : teks, \{ butir: '' \}\)/);
  });
  it('cek pemahaman topik memilih soal lewat L.urutBank (satu keluarga satu soal); jumlah cek dihitung per keluarga', () => {
    assert.ok(!/antrean = U\.ambil\(soalTopik/.test(vb), 'antrean cek tidak lagi U.ambil(soalTopik, 5)');
    assert.match(vb, /const ambilCek = \(\) => L\.urutBank \? L\.urutBank\(soalTopik, 5\)/);
    assert.match(vb, /const nCek = nCekDari\(soalTopik\)/);
  });
  it('panel Latih menulis soal yang bisa dimulai; baris hitungan menyebut soal pengganti yang menunggu giliran', () => {
    for (const x of ["' soal bisa dimulai'", "'soal bisa dimulai untuk saringan ini'", "' soal pengganti menunggu giliran.'", 'segBank, catatanBank, hitungBank, tautanBank, catatanButir']) assert.ok(vb.includes(x), x);
    // pendek: kelebihan 1 sampai 3 huruf ditampilkan utuh; potongan di spasi terakhir
    assert.match(vb, /const pendek = \(t, n\) => \{ t = String\(t \|\| ''\); if \(t\.length <= n \+ 3\) return t;/);
  });
  it('Cakupan: jumlah soal per butir dan tautan Latih hanya bila peta tersedia', () => {
    assert.match(vb, /adaPeta \? soalButirEl\(b\) : null/);
    assert.ok(vb.includes("'belum ada soal'") && vb.includes("{ butir: b.id, atur: 1 }"));
  });
  it('UKP.cakupan.butir: info butir daun dari cakupan.js; views-bank.js termuat tanpa galat', () => {
    const { UKP } = muat({ data: ['cakupan.js', 'peta-butir.js'], setelah: ['views-belajar.js', 'views-bank.js'] });
    const b = UKP.cakupan.butir('B.1.1'); assert.equal(b.tingkat, 'B'); assert.equal(b.nomor, '1'); assert.ok(b.teks.length > 10);
    assert.equal(UKP.cakupan.butir('ZZ.9'), null); assert.equal(UKP.cakupan.butir(null), null);
    const induk = UKP.cakupanResmi.tingkat.A.mataUjian.flatMap(m => m.subjek.flatMap(s => s.butir)).find(x => x.anak && x.anak.length);
    assert.equal(UKP.cakupan.butir(induk.id), null, 'butir induk bukan daun');
    assert.equal(typeof UKP.views.bank, 'function'); assert.equal(typeof UKP.c.barisBank, 'function');
  });
});

describe('v9.5 halaman Bank soal: rute, berkas, teks', () => {
  it('rute #bank terdaftar di core.js (TOKEN, render ulang aman) dan view didefinisikan', () => {
    const core = bacaJs('core.js');
    assert.match(core.match(/const TOKEN = \{[^}]*\}/)[0], /\bbank: 'bank'/);
    assert.match(core.match(/const RENDER_ULANG_AMAN = \[[^\]]*\]/)[0], /'bank'/);
    assert.match(bacaJs('views-bank.js'), /UKP\.views\.bank = function/);
    assert.match(bacaJs('app.js'), /const ALIAS_LATIH = \['bank'\]/);
  });
  it('index.html memuat views-bank.js setelah views-belajar.js dan sebelum app.js; sw.js menyimpannya', () => {
    const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    const iB = idx.indexOf('js/views-bank.js'); assert.ok(iB > idx.indexOf('src="js/views-belajar.js"') && iB < idx.indexOf('src="js/app.js"'));
    assert.match(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), /"js\/views-bank\.js"/);
  });
  it('isi halaman sesuai spesifikasi dan teks tanpa tanda pisah panjang, panah, atau istilah kembaran', () => {
    const vbk = bacaJs('views-bank.js');
    for (const x of ["'Bank soal'", "'Jumlah soal'", "'Belum pernah dipakai'", "'Pengganti siap'", "'Sudah dipakai'", "'Dibahas atau dilatih bersama'", "'Diujikan'", "'Dilatih sendiri'", "'Per kelompok materi'", "'Per butir materi resmi'", "'Peta butir belum tersedia.'", "'Latih butir ini'", "'Mulai latihan soal baru'", "'Latih soal pengganti'", "' soal baru di versi ini'", "'belum ada soal'", "{ bank: 'baru' }", "{ bank: 'pengganti' }", "{ butir: b.id }"]) assert.ok(vbk.includes(x), x);
    for (const x of ["' soal pengganti menunggu giliran.'", "' pengganti menunggu'", "h('wbr')"]) assert.ok(vbk.includes(x), x);
    const teks = (vbk.match(/'[^'\n]*'/g) || []).join(' ');
    assert.ok(!/[—→]/.test(teks), 'tanpa tanda pisah panjang atau panah'); assert.ok(!/kembaran|varian/i.test(teks));
  });
  it('pintu masuk: Latih, Room, menu cari, Kemajuan; pembahasan soal pengganti', () => {
    assert.ok(bacaJs('views-ruang.js').includes("UKP.go('bank')"));
    const alat = bacaJs('views-alat.js'); assert.ok(alat.includes("['Bank soal · soal baru dan soal pengganti', 'bank']")); assert.ok(alat.includes('UKP.c.barisBank(tingkat)'));
    assert.ok(bacaJs('soal.js').includes("'Soal pengganti untuk ' + asliId"));
  });
});

describe('v9.5 saringan butir resmi (resmi=1)', () => {
  const vb = bacaJs('views-belajar.js'); const vbk = bacaJs('views-bank.js');
  const dataSemua = () => fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => /^mu-.*\.js$/.test(f)).concat(['cakupan.js', 'peta-butir.js']);
  const muatData = () => muat({ data: dataSemua(), setelah: ['views-belajar.js', 'views-bank.js'] });
  const punyaTingkat = (K, x, t) => K.butirSoal(x.id).some(b => b.startsWith(t + '.'));

  it('saringResmi: hanya soal dengan butir daun tingkat target; luarResmi menghitung sisanya (data sungguhan)', () => {
    const { UKP } = muatData(); const K = UKP.konten; const LB = UKP.latihBank;
    assert.equal(LB.adaPetaResmi(), true);
    for (const t of ['A', 'B', 'C']) {
      const semua = K.semuaSoal(t); const resmi = LB.saringResmi(semua, t); const luar = LB.luarResmi(t);
      assert.ok(resmi.length > 0 && resmi.length < semua.length, t);
      assert.ok(resmi.every(x => punyaTingkat(K, x, t)), t + ': semua soal tersaring punya butir ' + t);
      assert.ok(luar.every(x => !punyaTingkat(K, x, t)), t + ': soal luar tanpa butir ' + t);
      assert.equal(resmi.length + luar.length, semua.length, t);
      assert.ok(luar.every(x => x.kode !== 'E'), 'Etika tidak dihitung');
    }
    // Tingkat B: 89 soal modul di luar daftar butir resmi; soal try out semuanya punya butir B
    assert.equal(LB.luarResmi('B').filter(x => !x.sejak).length, 89, 'soal lama di luar daftar butir resmi');
    for (const p of K.daftarSet()) { const a = K.soalSet(p.set); if (p.tingkat === 'B') assert.equal(LB.saringResmi(a, 'B').length, a.length, p.set); }
    // tingkat lain dari soal yang sama: butir A tidak meloloskan soal untuk target B
    const soalA = K.semuaSoal('B').find(x => !punyaTingkat(K, x, 'B') && punyaTingkat(K, x, 'A'));
    if (soalA) assert.equal(LB.saringResmi([soalA], 'B').length, 0);
  });

  it('peta kosong: saringan diabaikan, luarResmi kosong', () => {
    const { UKP } = muatData(); const K = UKP.konten; const LB = UKP.latihBank;
    UKP.petaButir = { versi: 1, peta: {}, luar: {} };
    assert.equal(LB.adaPetaResmi(), false);
    const semua = K.semuaSoal('B'); assert.equal(LB.saringResmi(semua, 'B').length, semua.length);
    eq(LB.luarResmi('B'), []);
  });

  it('Latih: parameter resmi, pool tingkat target, diabaikan saat butir= aktif atau peta kosong', () => {
    assert.match(vb, /const adaPeta = adaPetaResmi\(\); f\.resmi = !!params\.resmi && adaPeta;/);
    assert.match(vb, /const resmiAktif = g => !!g\.resmi && adaPeta && !g\.butir;/);
    assert.match(vb, /if \(resmiAktif\(g\)\) arr = saringResmi\(arr, tingkat\);\n\s*return arr;/, 'saringan di basis(): ikut pool, hitungan jenis dan kelompok, baris bank, tombol mulai');
    assert.match(vb, /const butirResmiTingkat = \(x, t\) => K\.butirSoal\(x\.id\)\.some\(b => b\.indexOf\(t \+ '\.'\) === 0\);/);
  });

  it('Latih: pilihan berlabel tingkat target di saringan lanjutan (tidak tampil tanpa peta), chip berhapus, terhitung aktif', () => {
    assert.ok(vb.includes("const toggResmi = adaPeta ? togg('resmi', 'Hanya butir resmi Tingkat ' + tingkat, 'Soal di luar daftar cakupan materi resmi tingkat ini dilewati.') : null;"));
    assert.ok(vb.includes('toggGaya, toggResmi,'));
    assert.ok(vb.includes("resmiAktif(f) ? chip('butir resmi', { resmi: false }) : null"));
    assert.ok(vb.includes('const nLanjut = [f.laporan, f.gayaUkp, resmiAktif(f),'));
  });

  it('Bank soal: kalimat soal di luar daftar butir resmi dan tautan Latih resmi=1, hanya bila peta ada dan N > 0', () => {
    assert.ok(vbk.includes("angka(n) + ' dari ' + angka(nSemua) + ' soal Tingkat ' + tingkat + ' berada di luar daftar butir resmi. '"));
    assert.ok(vbk.includes("'Latih hanya butir resmi'") && vbk.includes('keLatih({ resmi: 1 })'));
    assert.match(vbk, /if \(!LB \|\| !LB\.adaPetaResmi \|\| !LB\.adaPetaResmi\(\)\) return null;\n\s*const n = LB\.luarResmi\(tingkat\)\.length; if \(!n\) return null;/);
    assert.ok(vbk.includes('barisResmi(tingkat, semua.length)'), 'M = jumlah soal K.semuaSoal(tingkat)');
    const teks = (vbk.match(/'[^'\n]*'/g) || []).concat(vb.match(/'Hanya butir resmi[^'\n]*'|'Soal di luar daftar[^'\n]*'/g) || []).join(' ');
    assert.ok(!/[—→]/.test(teks));
  });
});
