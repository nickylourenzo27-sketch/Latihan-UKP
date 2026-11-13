/* Uji v9.4.4: penjaga isi setelah soal Tingkat C dan tindak lanjut per modul dicocokkan dengan naskah peraturan resmi.
   Menjaga kunci yang dibetulkan (pajak laba cabang BUT, kredit pajak luar negeri per jenis penghasilan untuk tiap negara),
   kasus yang ikut dihitung ulang, peta formulir, dan kalkulator kredit PPh Pasal 24.
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
const modul = kode => semua.find(m => m.meta.kode === kode);
const peta = new Map(); for (const m of semua) for (const s of m.soal) peta.set(s.id, s);
const soal = id => peta.get(id);
const kasus = (kode, id) => (modul(kode).kasus || []).find(k => k.id === id);
const langkah = (kode, id, no) => kasus(kode, id).langkah.find(l => l.no === no);
const teksData = nama => fs.readFileSync(path.join(ROOT, 'js', 'data', nama), 'utf8');

describe('v9.4.4: kunci Tingkat C yang dibetulkan menurut naskah resmi', () => {
  const BPT = 'PMK 14/PMK.03/2011 Pasal 1 ayat (3): penanaman kembali sebagian tidak mengurangi dasar';
  const KLN = 'PMK 192/PMK.03/2018 Pasal 6 ayat (2): kredit dihitung per jenis penghasilan untuk tiap negara';
  const FIN = 'PMK 14/PMK.03/2011 Pasal 6 dan petunjuk Lampiran 12A: penghasilan yang dikenai PPh final ikut masuk dasar setelah dikurangi PPh finalnya';
  const KUNCI = [
    ['C9-004', 'B', /Rp1\.021\.800\.000/, BPT],
    ['C9-066', 'C', /Rp1\.706\.250\.000/, BPT],
    ['C9-070', 'B', /Rp1\.145\.040\.000/, BPT],
    ['C9-104', 'C', /Rp936\.000\.000/, BPT],
    ['C9-135', 'C', /Rp483\.600\.000/, BPT],
    ['C9-136', 'A', /Rp1\.000\.000\.000/, BPT],
    ['C10-013', 'A', /Rp390\.000\.000/, BPT],
    ['C10-076', 'C', /Lampiran 12A; Rp468\.000\.000/, BPT + '; PER-11/PJ/2025 Lampiran 12A'],
    ['C9-026', 'A', /Rp220\.000\.000/, KLN],
    ['C9-067', 'A', /Rp762\.000\.000/, KLN],
    ['C10-152', 'A', /Rp380\.000\.000/, KLN],
    ['C9-126', 'B', /Rp1\.396\.800\.000/, FIN],
    ['C9-133', 'B', /Rp479\.120\.000/, FIN],
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
  it('B8-107 kunci C: luas areal salah pada SPPT diselesaikan lewat keberatan, bukan pembetulan kesalahan tulis (Pasal 2 ayat (2) PMK 118/2024; Pasal 15 UU PBB)', () => {
    const s = soal('B8-107');
    assert.equal(s.kunci, 'C');
    assert.match(String(s.opsi.C), /[Kk]eberatan/);
    assert.match(String(s.opsi.C), /Rp207\.576\.000/);
    assert.equal(s.verifikasi, '✅');
  });
  it('kunci hasil v9.4.3 tidak berubah', () => {
    for (const [id, k] of [['A3-088', 'C'], ['A3-100', 'C'], ['A3-131', 'A'], ['B8-028', 'A'], ['B8-061', 'B'], ['E-032', 'D'], ['E-036', 'D'], ['A3-065', 'A']]) assert.equal(soal(id).kunci, k, id);
  });
});

describe('v9.4.4: kasus yang ikut dihitung ulang', () => {
  it('K-C9-02: kredit PPh Pasal 24 per jenis penghasilan untuk tiap negara = Rp860.000.000, PPh Pasal 29 Rp440.000.000', () => {
    assert.equal(langkah('C9', 'K-C9-02', 4).jawaban, 660000000);
    assert.equal(langkah('C9', 'K-C9-02', 5).jawaban, 860000000);
    assert.equal(langkah('C9', 'K-C9-02', 6).jawaban, 440000000);
    assert.match(kasus('C9', 'K-C9-02').kesimpulan, /per jenis penghasilan untuk tiap negara/);
  });
  it('kasus pajak laba cabang BUT: penanaman kembali sebagian tidak mengurangi dasar, penghasilan final ikut masuk dasar', () => {
    assert.equal(langkah('C9', 'K-C9-01', 6).jawaban, 819300000);
    assert.equal(langkah('C9', 'K-C9-06', 7).jawaban, 1150620000);
    assert.equal(langkah('C10', 'K-C10-02', 6).jawaban, 312000000);
  });
  it('K-C9-01 dan K-C9-06: angka awal kalkulator memberi jawaban kasus', () => {
    const UKP = require(path.join(ROOT, 'js', 'kalkulator.js'));
    for (const [id, no] of [['K-C9-01', 6], ['K-C9-06', 7]]) {
      const k = kasus('C9', id);
      assert.ok(k.kalkulatorInput && k.kalkulatorInput.penghasilanFinal > 0, id + ' punya angka awal dengan penghasilan final');
      const r = UKP.hitungKalkulator('bpt', Object.assign({}, k.kalkulatorInput));
      assert.equal(r.hasil.find(b => b.utama).nilai, langkah('C9', id, no).jawaban, id);
    }
  });
  it('soal pajak laba cabang tidak lagi menggabungkan penghasilan final dengan kompensasi kerugian (C9-066, C9-068, C9-103)', () => {
    for (const id of ['C9-066', 'C9-068', 'C9-103']) assert.doesNotMatch(soal(id).stem, /bunga deposito[^.]*PPh final/, id);
    assert.equal(soal('C9-066').kunci, 'C'); assert.match(String(soal('C9-066').opsi.C), /Rp1\.706\.250\.000/);
    assert.equal(soal('C9-068').kunci, 'A'); assert.match(String(soal('C9-068').opsi.A), /Rp8\.340\.000\.000/);
    assert.equal(soal('C9-071').kunci, 'A'); assert.match(String(soal('C9-071').opsi.A), /Rp5\.725\.200\.000 dan Rp1\.145\.040\.000/);
  });
});

describe('v9.4.4: kredit pajak luar negeri ditulis per jenis penghasilan untuk tiap negara', () => {
  it('materi tidak lagi mengajarkan batas "per negara, bukan per jenis penghasilan"', () => {
    for (const f of ['mu-A1.js', 'mu-B6.js', 'mu-B7.js', 'mu-C9.js', 'mu-C10.js', 'ref.js', 'formulir.js']) {
      const t = teksData(f);
      assert.doesNotMatch(t, /per negara[^."]{0,60}bukan per jenis penghasilan/, f);
      assert.doesNotMatch(t, /per country limitation\), bukan per jenis/, f);
      assert.doesNotMatch(t, /yang benar per negara/, f);
    }
  });
  it('modul C9 menyebut dasar Pasal 6 ayat (2) PMK 192/PMK.03/2018', () => {
    assert.match(teksData('mu-C9.js'), /per jenis penghasilan untuk tiap negara/);
    assert.match(teksData('mu-C9.js'), /Pasal 6 ayat \(2\)[^"]{0,40}PMK 192\/PMK\.03\/2018/);
  });
});

describe('v9.4.4: tanda perlu cek dan keutuhan bank soal', () => {
  it('jumlah soal tetap 1.494 dan tiap soal bertanda punya peringatan', () => {
    assert.equal([...peta.values()].filter(s => !s.sejak).length, 1494, 'jumlah soal lama (tanpa field sejak)');
    for (const s of peta.values()) {
      assert.ok(s.verifikasi === '✅' || s.verifikasi === '◐', s.id);
      if (s.verifikasi === '◐') assert.ok(typeof s.peringatan === 'string' && s.peringatan.length > 30, s.id + ' berperingatan');
      else assert.equal(s.peringatan, undefined, s.id + ' tanpa peringatan');
    }
  });
  it('soal bertanda: Tingkat B paling banyak 67, Tingkat C paling banyak 13 (dari 109 sebelum dicocokkan)', () => {
    let b = 0, c = 0;
    for (const m of semua) { const n = m.soal.filter(s => s.verifikasi === '◐').length; if (['C9', 'C10'].includes(m.meta.kode)) c += n; else b += n; }
    assert.ok(b <= 67, 'bertanda di modul Tingkat B: ' + b);
    assert.ok(c <= 13, 'bertanda di modul Tingkat C: ' + c);
  });
  it('soal try out tetap utuh: 100 soal dengan nomor 1 sampai 100', () => {
    const to = [...peta.values()].filter(s => s.sumber && s.sumber.set === 'TO-B-2026-11');
    assert.equal(to.length, 100);
    assert.deepEqual(to.map(s => s.sumber.no).sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
  });
  it('tiap formulirRef dan kalkulatorRef masih menunjuk baris dan kalkulator yang ada', () => {
    const kodeBaris = new Set();
    const ctx = { UKP: { register() {}, registerRef() {}, registerFormulir(d) { (function jalan(x) { if (Array.isArray(x)) x.forEach(jalan); else if (x && typeof x === 'object') { if (typeof x.kode === 'string') kodeBaris.add(x.kode); Object.values(x).forEach(jalan); } })(d); } }, console };
    ctx.window = ctx;
    vm.runInNewContext(teksData('formulir.js'), ctx, { filename: 'formulir.js' });
    assert.ok(kodeBaris.size >= 240, 'baris peta formulir: ' + kodeBaris.size);
    const UKP = require(path.join(ROOT, 'js', 'kalkulator.js'));
    for (const s of peta.values()) if (s.formulirRef) assert.ok(kodeBaris.has(s.formulirRef), s.id + ' formulirRef ' + s.formulirRef);
    for (const m of semua) for (const k of m.kasus || []) if (k.kalkulatorRef) assert.ok(UKP.kalkulatorByJenis(k.kalkulatorRef), k.id + ' kalkulatorRef ' + k.kalkulatorRef);
  });
});

describe('v9.4.4: kalkulator kredit PPh Pasal 24', () => {
  const UKP = require(path.join(ROOT, 'js', 'kalkulator.js'));
  const H = ubah => UKP.hitungKalkulator('pph24', ubah);
  const utama = r => r.hasil.find(b => b.utama);
  it('contoh Lampiran PMK 192/PMK.03/2018 (usaha negara X, bunga negara Y, rugi negara Z) = Rp700.000.000', () => {
    const r = H({ netoDn: 4000000000, tarif: 25, neto1: 1000000000, pajak1: 300000000, neto2: 3000000000, pajak2: 450000000, neto3: -250000000, pajak3: 0 });
    assert.ok(Array.isArray(r.hasil) && !r.galat);
    assert.equal(utama(r).nilai, 700000000);
  });
  it('dua jenis penghasilan dari satu negara diisi di dua baris dan dibatasi sendiri-sendiri (K-C9-02)', () => {
    const r = H({ netoDn: 11000000000, tarif: 22, neto1: 3000000000, pajak1: 900000000, neto2: 500000000, pajak2: 50000000, neto3: 1000000000, pajak3: 150000000, neto4: -800000000, pajak4: 0 });
    assert.equal(utama(r).nilai, langkah('C9', 'K-C9-02', 5).jawaban);
  });
  it('nama, deskripsi, dan asumsi tidak lagi menyebut batas per negara', () => {
    const k = UKP.kalkulatorByJenis('pph24');
    assert.doesNotMatch(k.nama + ' ' + k.deskripsi, /per negara \(ordinary|per country/);
    assert.match(k.deskripsi, /per jenis penghasilan untuk tiap negara/);
    assert.equal(k.input.filter(i => /^neto\d$/.test(i.key)).length, 4);
  });
});
