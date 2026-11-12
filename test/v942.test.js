/* Uji v9.4.2: penjaga isi untuk kunci yang dibetulkan pada pemeriksaan ulang soal Tingkat B (putaran 4 sampai 7),
   supaya suntingan berikutnya tidak mengembalikan jawaban lama tanpa sengaja, dan teks saran kalkulator restitusi PPN.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
function muatModul(kode) {
  let hasil = null;
  const ctx = { UKP: { register(m) { hasil = m; }, registerRef() {}, registerFormulir() {} }, console };
  ctx.window = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-' + kode + '.js'), 'utf8'), ctx, { filename: 'mu-' + kode + '.js' });
  return hasil;
}
const soal = (() => { const peta = new Map(); for (const k of ['A1', 'A2', 'A4', 'B6', 'B7']) for (const s of muatModul(k).soal) peta.set(s.id, s); return id => peta.get(id); })();

describe('v9.4.2: kunci yang dibetulkan tetap pada jawaban barunya', () => {
  const KUNCI = [
    // bunga pengungkapan SPT saat pemeriksaan: sejak batas waktu penyampaian SPT Tahunan (Pasal 8 ayat (5) UU KUP)
    ['A2-021', 'B', /14\.313\.600/], ['B6-103', 'A', /51\.120\.000/],
    // lapor pengukuhan PKP paling lambat akhir tahun buku (PMK 164/2023 Pasal 17)
    ['A2-006', 'D', /31 Desember 2026/], ['A2-087', 'D', /31 Desember 2026/], ['A4-076', 'A', /31 Desember 2026/],
    // angsuran PPh Pasal 25 bila ada kompensasi kerugian: neto dikurangi SISA kerugian tahun berjalan (Pasal 25 ayat (6) huruf a UU PPh)
    ['A1-082', 'D', /10\.595\.833/], ['B6-013', 'C', /25\.300\.000/], ['B7-044', 'D', /69\.925\.000/], ['B6-069', 'B', /17\.612\.500/],
  ];
  for (const [id, kunci, pola] of KUNCI) {
    it(id + ' berkunci ' + kunci, () => {
      const s = soal(id);
      assert.ok(s, id + ' ada');
      assert.equal(s.kunci, kunci);
      assert.match(String(s.opsi[kunci]), pola);
      const lain = Object.keys(s.opsi).filter(h => h !== kunci).sort().join('');
      assert.equal(Object.keys(s.pembahasan.mengapaSalah).sort().join(''), lain);
      assert.equal(Object.keys(s.jebakanOpsi).sort().join(''), lain);
    });
  }
  it('soal yang kuncinya mengikuti sumber sekunder bertanda perlu cek dan berperingatan', () => {
    for (const id of ['A2-006', 'A2-087', 'A4-076', 'A1-082', 'B6-013', 'B7-044', 'B6-069']) {
      const s = soal(id);
      assert.equal(s.verifikasi, '◐', id);
      assert.ok(s.peringatan && s.peringatan.length > 40, id + ' berperingatan');
    }
  });
});

describe('v9.4.2: restitusi PPN tiap masa tanpa "PKP belum berproduksi"', () => {
  it('teks saran kalkulator lebih bayar PPN', () => {
    const k = fs.readFileSync(path.join(ROOT, 'js', 'kalkulator.js'), 'utf8');
    assert.ok(k.includes('(eksportir, penyerahan ke pemungut, tidak dipungut) atau pengembalian pendahuluan'));
    assert.ok(!/tidak dipungut, belum berproduksi/.test(k));
  });
  it('kartu dan ringkasan A4 tidak lagi memasukkan PKP belum berproduksi sebagai yang boleh restitusi tiap masa', () => {
    const m = muatModul('A4');
    const kartu = m.kartu.find(x => x.id === 'KT-A4-32');
    assert.ok(kartu && !/tidak dipungut, belum berproduksi/.test(kartu.belakang), 'KT-A4-32');
    const teks = fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-A4.js'), 'utf8');
    assert.ok(!/tidak dipungut, belum berproduksi"/.test(teks));
  });
});
