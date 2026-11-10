/* Uji status penguasaan tunggal (DESAIN-V7 K-18): UKP.belajar.statusTopik, statusKelompok, TEKS_DINILAI.
   Memuat js/core.js + js/learn.js di konteks vm dengan modul tiruan "X1"/"X2". Jalankan: node --test test/ */
'use strict';
const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js']);
const L = UKP.belajar;
const topik = (kode, n) => Array.from({ length: n }, (_, i) => ({ id: kode + '.' + (i + 1), judul: 'Topik ' + (i + 1) }));
UKP.register({ meta: { kode: 'X1', nama: 'Kelompok uji' }, topik: topik('X1', 5) });
UKP.register({ meta: { kode: 'X2', nama: 'Kelompok kosong' }, topik: topik('X2', 4) });

const s = UKP.store.get();
function jawab(topikId, n, benar) {
  const kini = Date.now();
  for (let i = 0; i < n; i++) s.jawaban.push({ soal: topikId + '-s' + i, topik: topikId, kode: topikId.split('.')[0], benar, opsi: 'A', detik: 60, konteks: 'latih', pada: kini - i * 60000 });
}

describe('statusTopik', () => {
  beforeEach(() => { s.jawaban.length = 0; });
  it('belum: tanpa soal, skor null, kalimat sampel', () => {
    const st = L.statusTopik('X1.1');
    assert.equal(st.tahap, 'belum'); assert.equal(st.skor, null); assert.equal(st.label, null);
    assert.equal(st.nSoal, 0); assert.equal(st.butuh, 8);
    assert.equal(st.teksSampel, '0 dari 8 soal untuk dinilai');
  });
  it('awal: kurang dari 8 soal tidak pernah berlabel', () => {
    jawab('X1.1', 2, false);
    const st = L.statusTopik('X1.1');
    assert.equal(st.tahap, 'awal'); assert.equal(st.label, null); assert.equal(typeof st.skor, 'number');
    assert.equal(st.teksSampel, '2 dari 8 soal untuk dinilai');
  });
  it('dinilai: 12 benar → dikuasai, sampel memuat skor dan jumlah soal', () => {
    jawab('X1.1', 12, true);
    const st = L.statusTopik('X1.1');
    assert.equal(st.tahap, 'dinilai'); assert.ok(st.skor >= 80, 'skor ' + st.skor); assert.equal(st.label, 'dikuasai');
    assert.equal(st.teksSampel, 'skor ' + st.skor + ' · 12 soal');
  });
  it('dinilai: 10 salah → perlu disegarkan', () => {
    jawab('X1.2', 10, false);
    const st = L.statusTopik('X1.2');
    assert.equal(st.tahap, 'dinilai'); assert.ok(st.skor < 60); assert.equal(st.label, 'perlu disegarkan');
  });
  it('tahan argumen kosong', () => {
    for (const x of [undefined, null, '']) assert.equal(L.statusTopik(x).tahap, 'belum');
  });
});

describe('statusKelompok', () => {
  beforeEach(() => { s.jawaban.length = 0; });
  it('belum: kelompok tanpa jawaban', () => {
    const st = L.statusKelompok('X2');
    assert.equal(st.tahap, 'belum'); assert.equal(st.skor, null); assert.equal(st.nTopik, 4); assert.equal(st.nDinilai, 0);
  });
  it('awal: ada soal tetapi kurang dari 3 topik dinilai', () => {
    jawab('X1.1', 9, true); jawab('X1.2', 3, true); jawab('X1.3', 2, false);
    const st = L.statusKelompok('X1');
    assert.equal(st.tahap, 'awal'); assert.equal(st.nDinilai, 1); assert.equal(st.nSoal, 14); assert.equal(typeof st.skor, 'number');
    assert.equal(st.teks, 'Perkiraan awal · dari 14 soal · 1 dari 5 topik dinilai');
  });
  it('dinilai: 3 topik dinilai', () => {
    jawab('X1.1', 8, true); jawab('X1.2', 8, true); jawab('X1.3', 8, false);
    const st = L.statusKelompok('X1');
    assert.equal(st.tahap, 'dinilai'); assert.equal(st.nDinilai, 3);
    assert.equal(st.teks, 'Dari 24 soal · 3 dari 5 topik dinilai');
  });
  it('kode tak dikenal dan argumen kosong tidak melempar galat', () => {
    for (const x of ['ZZ', undefined, null]) { const st = L.statusKelompok(x); assert.equal(st.tahap, 'belum'); assert.equal(st.nTopik, 0); }
  });
  it('kalimat definisi bersama', () => {
    assert.equal(L.TEKS_DINILAI, 'Topik dinilai setelah 8 soal. Angka kelompok muncul setelah 3 topik dinilai.');
  });
});
