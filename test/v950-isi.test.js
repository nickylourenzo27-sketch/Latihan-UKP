/* Uji v9.5.0 (isi): cakupan materi dari salinan PDF yang lebih bersih, peta soal ke butir materi resmi, dan soal baru
   (soal pengganti untuk soal yang sudah dipakai dan soal untuk butir yang tipis). Jalankan: node --test test/ */
'use strict';
const BATAS_TIPIS = 5; const BATAS_KOSONG = 0; const JUMLAH_BARU = 970; // dihitung saat rilis: butir Tingkat B dengan kurang dari 4 soal, butir tanpa soal, dan soal baru (field sejak)
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'js', 'data');
function muatModul() {
  const modul = {};
  const ctx = { UKP: { register: m => { modul[m.meta.kode] = m; } } };
  vm.createContext(ctx);
  fs.readdirSync(DATA).filter(f => /^mu-.+\.js$/.test(f)).sort().forEach(f => vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx, { filename: f }));
  return JSON.parse(JSON.stringify(modul));
}
const MODUL = muatModul();
const SOAL = new Map(); for (const k of Object.keys(MODUL)) for (const s of MODUL[k].soal) SOAL.set(s.id, Object.assign({ kode: k }, s));
const C = JSON.parse(JSON.stringify(require(path.join(DATA, 'cakupan.js'))));
const P = JSON.parse(JSON.stringify(require(path.join(DATA, 'peta-butir.js'))));
const DAUN = { A: new Map(), B: new Map(), C: new Map() };
for (const t of ['A', 'B', 'C']) for (const m of C.tingkat[t].mataUjian) for (const s of m.subjek) (function jalan(arr) { for (const b of arr) { if (!b.anak.length) DAUN[t].set(b.id, { b, m, s }); jalan(b.anak); } })(s.butir);
const semuaDaun = new Set([...DAUN.A.keys(), ...DAUN.B.keys(), ...DAUN.C.keys()]);

describe('v9.5.0: cakupan materi mengikuti salinan PDF', () => {
  it('jumlah butir daun: A 99, B 140, C 125', () => {
    assert.equal(DAUN.A.size, 99); assert.equal(DAUN.B.size, 140); assert.equal(DAUN.C.size, 125);
  });
  it('Tingkat B bernomor 1 sampai 8: PBB-P5L 8 butir di baris 4 dan PPh Badan 17 butir di baris 7', () => {
    const B = C.tingkat.B.mataUjian;
    assert.deepEqual(B.map(m => m.no), ['1', '2', '3', '4', '5', '6', '7', '8']);
    assert.deepEqual(B.map(m => m.namaNormal), ['Akuntansi Perpajakan', 'Bea Meterai', 'KUP, PPSP, PP', 'PBB-P5L', 'PPh Orang Pribadi', 'PPh Potong/Pungut', 'PPh Badan', 'PPN dan SPT Masa PPN']);
    const pbb = B[3].subjek[0].butir, badan = B[6].subjek[0].butir;
    assert.deepEqual(pbb.map(b => b.id), ['B.4.1', 'B.4.2', 'B.4.3', 'B.4.4', 'B.4.5', 'B.4.6', 'B.4.7', 'B.4.8']);
    assert.match(pbb[0].teks, /^Subjek Pajak, Wajib Pajak, dan klasifikasi objek pajak$/); assert.match(pbb[6].teks, /^Upaya Hukum PBB \(Keberatan, Gugatan, Banding, Peninjauan Kembali\)$/);
    assert.equal(badan.length, 17); assert.equal(badan[0].id, 'B.7.1'); assert.equal(badan[16].teks, 'SPT Tahunan PPh Badan');
  });
  it('Tingkat A PPh OP butir 5 memakai kata tercetak "PPh Final"', () => {
    assert.match(DAUN.A.get('A.3.5').b.teks, /Dikenakan PPh Final/);
  });
  it('catatan dokumen tidak lagi menyebut ID lama sebagai ID yang dipakai', () => {
    const ids = new Set(); for (const t of ['A', 'B', 'C']) for (const m of C.tingkat[t].mataUjian) for (const s of m.subjek) (function jalan(arr) { for (const b of arr) { ids.add(b.id); jalan(b.anak); } })(s.butir);
    assert.ok(![...ids].some(id => id.startsWith('B.PBB.')), 'ID B.PBB.n masih ada');
  });
});

describe('v9.5.0: peta soal ke butir materi resmi', () => {
  it('setiap soal ada di peta atau di luar, dan tidak ada id yang bukan soal', () => {
    for (const id of SOAL.keys()) assert.ok(P.peta[id] || P.luar[id], id + ' tidak ada di peta maupun luar');
    for (const id of Object.keys(P.peta).concat(Object.keys(P.luar))) assert.ok(SOAL.has(id), id + ' bukan id soal');
  });
  it('setiap ID di peta adalah butir daun di cakupan.js, tanpa ganda', () => {
    for (const [id, arr] of Object.entries(P.peta)) { assert.ok(Array.isArray(arr) && arr.length >= 1, id);
      assert.equal(new Set(arr).size, arr.length, id + ': butir ganda');
      for (const b of arr) assert.ok(semuaDaun.has(b), id + ': ' + b + ' bukan butir daun'); }
  });
  it('untuk tiap tingkat soal: ada butir tingkat itu di peta, atau tingkat itu tercatat di luar', () => {
    for (const [id, s] of SOAL) for (const t of s.tingkat) {
      const ada = (P.peta[id] || []).some(b => b.startsWith(t + '.'));
      const luar = typeof P.luar[id] === 'string' && new RegExp('\\b' + t + '\\b').test(P.luar[id].replace(/^Tingkat /, ''));
      assert.ok(ada || luar, id + ': Tingkat ' + t + ' tidak dipetakan dan tidak tercatat di luar');
      assert.ok(!(ada && luar), id + ': Tingkat ' + t + ' dipetakan sekaligus tercatat di luar');
    }
  });
  it('soal pengganti memakai peta soal sumbernya', () => {
    for (const [id, s] of SOAL) if (s.kembaranDari) { assert.deepEqual(P.peta[id] || null, P.peta[s.kembaranDari] || null, id); assert.equal(P.luar[id] || null, P.luar[s.kembaranDari] || null, id); }
  });
  it('butir daun Tingkat B: paling banyak BATAS_KOSONG tanpa soal dan BATAS_TIPIS dengan kurang dari 4 soal', () => {
    const hit = new Map(); for (const arr of Object.values(P.peta)) for (const b of arr) hit.set(b, (hit.get(b) || 0) + 1);
    const kosong = [...DAUN.B.keys()].filter(b => !hit.get(b)); const tipis = [...DAUN.B.keys()].filter(b => (hit.get(b) || 0) < 4);
    assert.ok(kosong.length <= BATAS_KOSONG, 'butir Tingkat B tanpa soal: ' + kosong.length + ' (' + kosong.join(', ') + ')');
    assert.ok(tipis.length <= BATAS_TIPIS, 'butir Tingkat B dengan kurang dari 4 soal: ' + tipis.length + ' (' + tipis.join(', ') + ')');
  });
});

describe('v9.5.0: soal baru', () => {
  const baru = [...SOAL.values()].filter(s => s.sejak);
  const pengganti = baru.filter(s => s.kembaranDari);
  it('jumlah soal baru paling sedikit JUMLAH_BARU, dan semuanya terverifikasi tanpa tanda', () => {
    assert.ok(baru.length >= JUMLAH_BARU, 'soal baru: ' + baru.length);
    for (const s of baru) { assert.match(s.sejak, /^\d+\.\d+\.\d+$/, s.id); assert.equal(s.verifikasi, '✅', s.id); assert.ok(!s.peringatan && !s.sumber, s.id); }
  });
  it('soal pengganti merujuk soal asli di modul yang sama dan menguji hal yang sama', () => {
    for (const s of pengganti) { const a = SOAL.get(s.kembaranDari); assert.ok(a, s.id + ': sumber tidak ada'); assert.ok(!a.kembaranDari, s.id + ': sumber adalah soal pengganti');
      assert.equal(a.kode, s.kode, s.id); assert.equal(s.topik, a.topik, s.id); assert.deepEqual(s.tingkat, a.tingkat, s.id); assert.equal(s.jenis, a.jenis, s.id); assert.equal(s.kesulitan, a.kesulitan, s.id);
      assert.notEqual(s.stem, a.stem, s.id + ': stem sama dengan sumber'); }
  });
  it('soal baru tidak memakai nama pihak dari try out dan tidak memuat tanda pisah panjang', () => {
    for (const s of baru) { const t = JSON.stringify(s); assert.ok(!/\bortax\b/i.test(t), s.id + ': nama try out'); assert.ok(!t.includes('—'), s.id + ': tanda pisah panjang'); }
  });
  it('kunci soal baru tersebar di empat huruf', () => {
    const n = { A: 0, B: 0, C: 0, D: 0 }; for (const s of baru) n[s.kunci]++;
    for (const h of ['A', 'B', 'C', 'D']) assert.ok(n[h] >= baru.length * 0.17 && n[h] <= baru.length * 0.33, 'kunci ' + h + ': ' + n[h] + ' dari ' + baru.length);
  });
  it('id soal unik dan soal try out tidak punya pengganti yang ikut paket try out', () => {
    for (const s of baru) assert.ok(!(s.sumber && s.sumber.set), s.id);
    const paket = [...SOAL.values()].filter(s => s.sumber && s.sumber.set); assert.equal(paket.length, 100);
  });
});
