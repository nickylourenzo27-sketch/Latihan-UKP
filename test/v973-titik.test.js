/* v9.7.3 titik lanjut latihan sendiri (sessionStorage) dan celah rute pulih latihan bersama: fungsi murni di UKP.latihBank.
   Jalankan: node --test test/. Uji halaman Latih di DOM tiruan ada di test/v973-latih.test.js; skenario peramban di tools/uji-muat-ulang.js
   (kasus berawalan s-). */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
const LB = UKP.latihBank;
const SEKARANG = 1800000000000;
// titik sah: 4 soal, soal ke-2 sedang tampil, soal pertama benar
const dasar = o => LB.buatTitikSendiri(Object.assign({ rute: LB.kunciRute({}), ids: ['B7-001', 'B7-002', 'B7-003', 'B7-004'], idx: 1, benar: 1,
  riwayat: [{ soal: { id: 'B7-001' }, benar: true, jawab: 'A', detik: 12.34, keyakinan: 'yakin' }], ulang: false, mulai: SEKARANG - 60000, lama: 50000, detikSoal: 7.8, selesai: null, sekarang: SEKARANG }, o || {}));
const salin = t => JSON.parse(JSON.stringify(t));

test('kunciRute: urutan kunci dan nilai kosong tidak berpengaruh', () => {
  assert.equal(LB.kunciRute({}), '{}');
  assert.equal(LB.kunciRute(null), '{}');
  assert.equal(LB.kunciRute({ mulai: true, lanjut: null, sesi: '', hanyaSalah: false, n: 10 }), LB.kunciRute({ n: 10, mulai: true }));
  assert.notEqual(LB.kunciRute({ mulai: true, kode: 'B7' }), LB.kunciRute({ mulai: true }));
});

test('buatTitikSendiri: bentuk titik lanjut', () => {
  const t = dasar();
  assert.deepEqual(salin(t), { v: 1, rute: '{}', ids: ['B7-001', 'B7-002', 'B7-003', 'B7-004'], idx: 1, benar: 1,
    riwayat: [{ id: 'B7-001', b: 1, j: 'A', d: 12.3, k: 'yakin' }], terjawab: 0, ulang: 0, mulai: SEKARANG - 60000, lama: 50000, detikSoal: 7, selesai: null, saringan: null, disimpan: SEKARANG });
  const tj = dasar({ riwayat: [{ soal: { id: 'B7-001' }, benar: true, jawab: 'A' }, { soal: { id: 'B7-002' }, benar: false, jawab: '-', detik: 3 }] });
  assert.equal(tj.terjawab, 1, 'soal yang sedang tampil sudah dijawab');
  assert.equal(tj.riwayat[1].j, '-'); assert.equal(tj.riwayat[1].k, null);
  assert.deepEqual(salin(dasar({ selesai: { menit: 3.6 }, idx: 4, benar: 1 })).selesai, { menit: 4 });
  assert.equal(dasar({ ulang: true }).ulang, 1);
});

test('titikSendiriSah: titik yang sah, terjawab, dan selesai diterima', () => {
  assert.equal(LB.titikSendiriSah(dasar(), SEKARANG), true);
  assert.equal(LB.titikSendiriSah(dasar({ idx: 0, benar: 0, riwayat: [] }), SEKARANG), true, 'soal pertama');
  assert.equal(LB.titikSendiriSah(dasar({ riwayat: [{ soal: { id: 'B7-001' }, benar: true, jawab: 'A' }, { soal: { id: 'B7-002' }, benar: true, jawab: 'A' }] }), SEKARANG), true, 'terjawab: benar belum dihitung');
  const r4 = ['B7-001', 'B7-002', 'B7-003', 'B7-004'].map((id, i) => ({ soal: { id }, benar: i < 2, jawab: i < 2 ? 'A' : 'B' }));
  assert.equal(LB.titikSendiriSah(dasar({ idx: 4, benar: 2, riwayat: r4, selesai: { menit: 2 } }), SEKARANG), true, 'selesai penuh');
  assert.equal(LB.titikSendiriSah(dasar({ selesai: { menit: 1 } }), SEKARANG), true, 'keluar lebih awal');
});

test('titikSendiriSah: kedaluwarsa 24 jam, masa depan, dan bentuk rusak ditolak', () => {
  const sah = t => LB.titikSendiriSah(t, SEKARANG);
  assert.equal(LB.titikSendiriSah(dasar(), SEKARANG + 24 * 3600 * 1000), true, 'tepat 24 jam');
  assert.equal(LB.titikSendiriSah(dasar(), SEKARANG + 24 * 3600 * 1000 + 1), false, 'lebih dari 24 jam');
  assert.equal(sah(dasar({ sekarang: SEKARANG + 120000 })), false, 'disimpan di masa depan');
  assert.equal(sah(null), false); assert.equal(sah('x'), false); assert.equal(sah({}), false);
  const ubah = f => { const t = salin(dasar()); f(t); return sah(t); };
  assert.equal(ubah(t => { t.v = 2; }), false, 'versi lain');
  assert.equal(ubah(t => { t.ids = []; }), false, 'daftar kosong');
  assert.equal(ubah(t => { t.ids[2] = 5; }), false, 'id bukan teks');
  assert.equal(ubah(t => { t.idx = 1.5; }), false);
  assert.equal(ubah(t => { t.idx = 9; }), false, 'idx di luar daftar');
  assert.equal(ubah(t => { t.riwayat[0].id = 'B7-004'; }), false, 'riwayat tidak cocok dengan urutan');
  assert.equal(ubah(t => { t.riwayat[0].j = 'Z'; }), false, 'jawaban tidak dikenal');
  assert.equal(ubah(t => { t.benar = 0; }), false, 'jumlah benar tidak cocok');
  assert.equal(ubah(t => { t.terjawab = 1; }), false, 'tanda terjawab tidak cocok');
  assert.equal(ubah(t => { t.riwayat = []; }), false, 'riwayat kurang');
  assert.equal(ubah(t => { t.mulai = 'kemarin'; }), false);
  assert.equal(ubah(t => { t.rute = null; }), false);
  const r4 = ['B7-001', 'B7-002', 'B7-003', 'B7-004'].map(id => ({ soal: { id }, benar: true, jawab: 'A' }));
  assert.equal(sah(dasar({ idx: 4, benar: 4, riwayat: r4 })), false, 'semua soal dilanjutkan tanpa keadaan selesai');
  // bentuk isian yang diubah tangan
  assert.equal(ubah(t => { t.selesai = 'ya'; }), false, 'selesai bukan objek');
  assert.equal(ubah(t => { t.selesai = { menit: 'dua' }; }), false, 'menit selesai bukan angka');
  assert.equal(ubah(t => { t.selesai = []; }), false);
  assert.equal(ubah(t => { t.riwayat[0].k = 'constructor'; }), false, 'keyakinan tidak dikenal');
  assert.equal(ubah(t => { t.riwayat[0].d = 'abc'; }), false, 'detik bukan angka');
  assert.equal(ubah(t => { t.lama = '5'; }), false, 'lama aktif bukan angka');
  assert.equal(ubah(t => { t.detikSoal = '5'; }), false, 'detik soal bukan angka');
  assert.equal(ubah(t => { t.saringan = 'x'; }), false, 'saringan bukan objek');
  for (const k of ['yakin', 'ragu', 'menebak', null]) assert.equal(ubah(t => { t.riwayat[0].k = k; }), true, 'keyakinan ' + k);
  assert.equal(ubah(t => { delete t.saringan; }), true, 'titik tanpa saringan tetap sah');
});

test('saringanTitik: hanya kunci saringan yang dikenal dengan tipe yang benar', () => {
  assert.deepEqual(salin(LB.saringanTitik({ tempo: true, n: 10, kode: 'B7', topik: 'B7.1', kesulitan: '2', hanyaSalah: false, bank: 'baru', asing: 1, mulai: true, set: 5, gayaUkp: 'ya' })),
    { tempo: true, n: 10, kode: 'B7', topik: 'B7.1', kesulitan: '2', hanyaSalah: false, bank: 'baru' });
  assert.deepEqual(salin(LB.saringanTitik({ n: 'semua' })), { n: 'semua' });
  assert.deepEqual(salin(LB.saringanTitik({ n: -3 })), {});
  assert.deepEqual(salin(LB.saringanTitik({ n: Infinity })), {});
  assert.deepEqual(salin(LB.saringanTitik(null)), {});
  assert.deepEqual(salin(LB.saringanTitik('x')), {});
  const t = dasar({ saringan: { tempo: true, n: 10, lanjut: 1 } });
  assert.deepEqual(salin(t.saringan), { tempo: true, n: 10 }, 'titik menyimpan potret saringan');
  assert.equal(LB.titikSendiriSah(t, SEKARANG), true);
});

test('pakaiTitikSendiri: hanya rute yang dipulihkan saat muat ulang, tanpa mode bersama, rute sama, titik sah', () => {
  const t = dasar();
  const pakai = o => LB.pakaiTitikSendiri(Object.assign({ params: {}, pulih: true, adaPeserta: false, titik: t, sekarang: SEKARANG }, o));
  assert.equal(pakai({}), true, 'muat ulang #latih');
  assert.equal(pakai({ pulih: false }), false, 'navigasi baru atau kembali/maju');
  assert.equal(pakai({ adaPeserta: true }), false, 'mode bersama aktif');
  assert.equal(pakai({ params: { lanjut: 1 } }), false, 'rute papan bersama');
  assert.equal(pakai({ params: { lanjut: 1, sesi: 'sb-1' } }), false);
  assert.equal(pakai({ params: { evaluasi: 'sb-1' } }), false);
  assert.equal(pakai({ params: { mulai: true } }), false, 'rute lain dari rute saat latihan dimulai');
  assert.equal(pakai({ titik: null }), false);
  assert.equal(pakai({ sekarang: SEKARANG + 25 * 3600 * 1000 }), false, 'kedaluwarsa');
  assert.equal(LB.pakaiTitikSendiri(null), false);
  // rute saringan dan putaran ulang: kunci rute titik harus sama
  const tAtur = dasar({ rute: LB.kunciRute({ atur: 1, kode: 'B7' }) });
  assert.equal(pakai({ titik: tAtur, params: { kode: 'B7', atur: 1, sesi: null } }), true, 'mulai dari saringan');
  const tIds = dasar({ rute: LB.kunciRute({ ids: 'B7-001,B7-002' }) });
  assert.equal(pakai({ titik: tIds, params: { ids: 'B7-001,B7-002' } }), true, 'putaran ulang dari rute { ids }');
  assert.equal(pakai({ titik: tIds, params: { ids: 'B7-003' } }), false);
});

test('bacaTitikSendiri dan tulisTitikSendiri: sessionStorage tidak ada atau melempar tidak menimbulkan galat', () => {
  // konteks muatInti tidak punya sessionStorage
  assert.equal(LB.bacaTitikSendiri(), null);
  assert.equal(LB.tulisTitikSendiri(dasar()), false);
  assert.equal(LB.KUNCI_SENDIRI, 'ukp.latihSendiri');
});

test('(b) bolehMulaiDariRute: rute { mulai } / { ids } yang dipulihkan selama mode bersama aktif tidak memulai latihan bersama', () => {
  const b = o => LB.bolehMulaiDariRute(Object.assign({ params: {}, pulih: false, adaPeserta: false }, o));
  assert.equal(b({ params: { mulai: true }, pulih: true, adaPeserta: true }), false);
  assert.equal(b({ params: { ids: 'B7-001' }, pulih: true, adaPeserta: true }), false);
  assert.equal(b({ params: { mulai: true }, adaPeserta: true }), true, 'navigasi baru');
  assert.equal(b({ params: { mulai: true }, pulih: true }), true, 'latihan sendiri yang dipulihkan');
  assert.equal(b({ params: {}, pulih: true, adaPeserta: true }), true, 'rute kosong diurus bolehLangsungMulai');
  assert.equal(b({ params: { lanjut: 1 }, pulih: true, adaPeserta: true }), true, 'rute papan diurus harusLanjut');
  assert.equal(LB.bolehMulaiDariRute(null), true);
});
