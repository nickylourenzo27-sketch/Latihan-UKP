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
  it('soal yang dulu mengikuti sumber sekunder: sejak v9.4.3 sudah dicocokkan ke naskah, atau tetap bertanda dengan peringatan', () => {
    for (const id of ['A2-006', 'A2-087', 'A4-076', 'A1-082', 'B6-013', 'B7-044', 'B6-069']) {
      const s = soal(id);
      if (s.verifikasi === '◐') assert.ok(s.peringatan && s.peringatan.length > 40, id + ' berperingatan');
      else { assert.equal(s.verifikasi, '✅', id); assert.equal(s.peringatan, undefined, id + ' tanpa peringatan'); }
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

// ---------- kalkulator: angsuran PPh Pasal 25 bila ada kompensasi kerugian (Pasal 25 ayat (6) huruf a UU PPh) ----------
describe('v9.4.2: kalkulator PPh menghitung angsuran dari neto dikurangi SISA kerugian', () => {
  const K = require(path.join(ROOT, 'js', 'kalkulator.js'));
  const H = (jenis, v) => { const r = K.hitungKalkulator(jenis, v); assert.equal(r.galat, null, 'galat tak terduga: ' + r.galat); return r; };
  const nilai = (r, awalan) => { const b = r.hasil.find(h => h.label.startsWith(awalan)); assert.ok(b, 'baris "' + awalan + '" ada'); return b.nilai; };

  it('pph-badan: kasus K-B6-01 dan K-B6-04 (kerugian habis dipakai) sama dengan jawaban kasus', () => {
    const a = H('pph-badan', { bruto: 40000000000, pkp: 2200000000, tbk: false, kredit: 154960000, pph25: 0, komp: 220000000, sisaRugi: 0 });
    assert.equal(nilai(a, 'Angsuran PPh 25'), 28791333);
    const b = H('pph-badan', { bruto: 37500000000, pkp: 3000000000, tbk: false, kredit: 216000000, pph25: 0, komp: 230000000, sisaRugi: 0 });
    assert.equal(nilai(b, 'Angsuran PPh 25'), 37426800);
    assert.ok(a.jejak.some(j => /Dasar angsuran PPh 25/.test(j[0])));
    assert.ok(a.dasarHukum.some(d => /Pasal 25 ayat \(6\) huruf a/.test(d)));
    // PPh terutang dan PPh 29 tidak ikut berubah oleh dua input baru
    const tanpa = H('pph-badan', { bruto: 40000000000, pkp: 2200000000, tbk: false, kredit: 154960000, pph25: 0 });
    assert.equal(nilai(a, 'PPh Badan terutang'), nilai(tanpa, 'PPh Badan terutang'));
    assert.equal(nilai(tanpa, 'Angsuran PPh 25'), 25000000, 'tanpa kompensasi: rumus umum (PPh terutang − kredit) ÷ 12');
  });
  it('pph-badan: contoh Penjelasan Pasal 25 ayat (6) (neto 120 juta, sisa kerugian 30 juta, dasar 90 juta)', () => {
    const r = H('pph-badan', { bruto: 60000000000, pkp: 0, tbk: false, kredit: 0, pph25: 0, komp: 120000000, sisaRugi: 30000000 });
    assert.equal(nilai(r, 'Angsuran PPh 25'), Math.round(0.22 * 90000000 / 12));
    // sisa kerugian melebihi neto → angsuran nihil
    const n = H('pph-badan', { bruto: 60000000000, pkp: 0, tbk: false, kredit: 0, pph25: 0, komp: 120000000, sisaRugi: 500000000 });
    assert.equal(nilai(n, 'Angsuran PPh 25'), 0);
  });
  it('pph-badan: tanpa kompensasi hasilnya sama seperti sebelum v9.4.2 (bawaan dan 31E)', () => {
    const d = H('pph-badan', {});
    const pph = nilai(d, 'PPh Badan terutang');
    assert.equal(nilai(d, 'Angsuran PPh 25'), Math.max(0, Math.round((pph - 50000000) / 12)));
    assert.ok(!d.jejak.some(j => /Dasar angsuran PPh 25/.test(j[0])));
  });
  it('pph-op: data A1-082 (rugi Rp200 juta habis dipakai) memberi Rp10.595.833, bukan Rp5.825.000', () => {
    const r = H('pph-op', { metode: 'pembukuan', neto: 737000000, zakat: 20000000, rugi: 200000000, status: 'K3', kredit22: 6500000, kredit23: 3850000 });
    assert.equal(nilai(r, 'PPh terutang Ps. 17'), 80250000);
    assert.equal(nilai(r, 'Angsuran PPh 25'), 10595833);
  });
  it('pph-op: sisa kerugian yang belum terpakai mengurangi dasar angsuran; tanpa kompensasi rumus umum', () => {
    // neto 300 juta, saldo rugi 350 juta → terpakai 300, sisa 50 → dasar 250 juta − PTKP TK/0 54 juta = 196 juta
    const r = H('pph-op', { metode: 'pembukuan', neto: 300000000, rugi: 350000000, status: 'TK0' });
    assert.equal(nilai(r, 'PPh terutang Ps. 17'), 0);
    const pphDasar = 0.05 * 60000000 + 0.15 * 136000000;
    assert.equal(nilai(r, 'Angsuran PPh 25'), Math.round(pphDasar / 12));
    const t = H('pph-op', { metode: 'pembukuan', neto: 300000000, status: 'TK0' });
    assert.equal(nilai(t, 'Angsuran PPh 25'), Math.round(nilai(t, 'PPh terutang Ps. 17') / 12));
    assert.ok(!t.jejak.some(j => /Dasar angsuran PPh 25/.test(j[0])));
  });
});
