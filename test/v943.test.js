/* Uji v9.4.3: penjaga isi setelah soal bertanda perlu cek dicocokkan dengan naskah peraturan resmi
   (JDIH Kemenkeu, pajak.go.id). Menjaga kunci yang dibetulkan, tanda yang dicabut, dan kalkulator pajak laba cabang BUT.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const MODUL = ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8', 'C9', 'C10', 'E'];
function muatModul(kode) {
  let hasil = null;
  const ctx = { UKP: { register(m) { hasil = m; }, registerRef() {}, registerFormulir() {} }, console };
  ctx.window = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-' + kode + '.js'), 'utf8'), ctx, { filename: 'mu-' + kode + '.js' });
  return hasil;
}
const semua = MODUL.map(muatModul);
const peta = new Map(); for (const m of semua) for (const s of m.soal) peta.set(s.id, s);
const soal = id => peta.get(id);

describe('v9.4.3: kunci yang dibetulkan menurut naskah resmi', () => {
  const KUNCI = [
    ['A3-088', 'C', /Rp2\.100\.000/, 'PMK 51/2025: pembelian hasil pertanian langsung dari petani ikut dipungut PPh 22'],
    ['A3-100', 'C', /Rp468\.000\.000/, 'PMK 14/PMK.03/2011 Pasal 1 ayat (3): penanaman kembali sebagian tidak mengurangi dasar'],
    ['A3-131', 'A', /Rp70\.000\.000/, 'PMK 82/PMK.03/2009 Pasal 2 ayat (4): mesin bukan harta yang dipotong PPh 26'],
    ['B8-028', 'A', /sama-sama sudah ditanami/, 'PMK 186/PMK.03/2019 Pasal 14 ayat (1): areal produktif = telah ditanami'],
    ['B8-061', 'B', /Rp28\.200\.000/, 'PMK 129/2023 Pasal 4 ayat (3): pengurangan hanya atas PBB yang belum dilunasi'],
    ['E-032', 'D', /[Pp]embekuan izin selama 3 bulan/, 'PMK 55/2026 Pasal 24 ayat (4)'],
    ['E-036', 'D', /P pembekuan 3 bulan/, 'PMK 55/2026 Pasal 24 ayat (4)'],
    ['A3-065', 'A', /Rp7\.450\.000/, 'PMK 51/2025 Pasal 3 ayat (1) huruf c: tarif SPBU menurut asal BBM'],
  ];
  for (const [id, kunci, pola, sebab] of KUNCI) {
    it(id + ' kunci ' + kunci + ' (' + sebab + ')', () => {
      const s = soal(id);
      assert.ok(s, 'soal ada');
      assert.equal(s.kunci, kunci);
      assert.match(String(s.opsi[kunci]), pola);
      assert.equal(s.verifikasi, '✅');
      assert.equal(s.peringatan, undefined);
      const lain = Object.keys(s.opsi).filter(h => h !== kunci).sort().join('');
      assert.equal(Object.keys(s.pembahasan.mengapaSalah).sort().join(''), lain);
      assert.equal(Object.keys(s.jebakanOpsi).sort().join(''), lain);
    });
  }
  it('kunci hasil v9.4.1 dan v9.4.2 tidak berubah setelah dicocokkan ke naskah', () => {
    for (const [id, k] of [['A2-021', 'B'], ['B6-103', 'A'], ['A2-006', 'D'], ['A2-087', 'D'], ['A4-076', 'A'], ['A1-082', 'D'], ['B6-013', 'C'], ['B7-044', 'D'], ['B6-069', 'B'], ['A2-100', 'B']]) assert.equal(soal(id).kunci, k, id);
  });
});

describe('v9.4.3: tanda perlu cek', () => {
  it('jumlah soal tetap 1.494 dan tiap soal bertanda punya peringatan', () => {
    assert.equal(peta.size, 1494);
    for (const s of peta.values()) {
      assert.ok(s.verifikasi === '✅' || s.verifikasi === '◐', s.id);
      if (s.verifikasi === '◐') assert.ok(typeof s.peringatan === 'string' && s.peringatan.length > 30, s.id + ' berperingatan');
      else assert.equal(s.peringatan, undefined, s.id + ' tanpa peringatan');
    }
  });
  it('modul Tingkat B: soal bertanda tidak lebih dari 61 (dari 277 sebelum dicocokkan)', () => {
    let n = 0;
    for (const m of semua) if (!['C9', 'C10'].includes(m.meta.kode)) n += m.soal.filter(s => s.verifikasi === '◐').length;
    assert.ok(n <= 61, 'bertanda di modul Tingkat B: ' + n);
  });
  it('soal try out tetap utuh: 100 soal dengan nomor 1 sampai 100', () => {
    const to = [...peta.values()].filter(s => s.sumber && s.sumber.set === 'TO-B-2026-11');
    assert.equal(to.length, 100);
    assert.deepEqual(to.map(s => s.sumber.no).sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
  });
});

describe('v9.4.3: materi etika mengikuti bunyi PMK 55/2026', () => {
  const teks = fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-E.js'), 'utf8');
  it('jasa di luar klasifikasi izin tidak lagi dipetakan ke peringatan', () => {
    assert.doesNotMatch(teks, /[Jj]asa di luar klasifikasi izin", nilai: "[Pp]eringatan/);
    assert.match(teks, /[Jj]asa di luar klasifikasi izin", nilai: "[Pp]embekuan izin (selama )?3 bulan"/);
    assert.match(teks, /Sanksi memberi jasa di luar klasifikasi izin\?", belakang: "Pembekuan izin selama 3 bulan"/);
  });
});

describe('v9.4.3: kalkulator pajak laba cabang BUT', () => {
  const UKP = require(path.join(ROOT, 'js', 'kalkulator.js'));
  const H = ubah => UKP.hitungKalkulator('bpt', ubah);
  const utama = r => r.hasil.find(b => b.utama);
  it('penanaman kembali sebagian tidak mengurangi dasar (soal A3-100 dan C10-076: Rp468.000.000)', () => {
    const r = H({ pkp: 6000000000, tarifBadan: 22, tarifP3b: 10, ditanamKembali: 1680000000 });
    assert.ok(Array.isArray(r.hasil) && !r.galat);
    assert.equal(utama(r).nilai, 468000000);
    assert.ok(r.peringatan.some(x => /seluruh laba setelah pajak/.test(x)));
  });
  it('seluruh laba setelah pajak ditanamkan kembali → nihil', () => {
    assert.equal(utama(H({ pkp: 6000000000, tarifBadan: 22, tarifP3b: 10, ditanamKembali: 4680000000 })).nilai, 0);
  });
  it('tanpa penanaman kembali → tarif kali seluruh laba setelah pajak', () => {
    assert.equal(utama(H({ pkp: 6000000000, tarifBadan: 22 })).nilai, 936000000);
  });
  it('teks bantu tidak lagi menjanjikan pengurangan atas bagian yang ditanamkan kembali', () => {
    const k = UKP.kalkulatorByJenis('bpt');
    assert.doesNotMatch(k.deskripsi, /nihil atas bagian/);
    assert.match(k.deskripsi, /seluruh laba setelah pajak/);
  });
});
