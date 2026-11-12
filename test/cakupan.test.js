/* Uji data cakupan materi resmi (js/data/cakupan.js) — jalankan: node --test test/
   Memuat cakupan.js dengan global UKP tiruan (seperti di peramban) dan modul js/data/mu-*.js dengan UKP.register tiruan,
   lalu memeriksa struktur, keunikan ID butir, nilai cakupan, dan bahwa setiap ID topik yang dirujuk memang ada di modul. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const DATA = path.join(__dirname, '..', 'js', 'data');
const BERKAS = path.join(DATA, 'cakupan.js');
const CAKUPAN = ['penuh', 'sebagian', 'belum'];
const SUBJEK = [null, 'Badan Dalam Negeri', 'Orang Pribadi', 'Transaksi Internasional'];

function muatCakupan() {
  const ctx = { UKP: {} };
  vm.runInNewContext(fs.readFileSync(BERKAS, 'utf8'), ctx, { filename: 'cakupan.js' });
  // salin ke realm uji: larik dari konteks vm tidak lolos deepStrictEqual (prototipe berbeda)
  return ctx.UKP.cakupanResmi && JSON.parse(JSON.stringify(ctx.UKP.cakupanResmi));
}
function muatModul() {
  const modul = {};
  const ctx = { UKP: { register: m => { modul[m.meta.kode] = m; } } };
  vm.createContext(ctx);
  fs.readdirSync(DATA).filter(f => /^mu-.+\.js$/.test(f)).sort()
    .forEach(f => vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx, { filename: f }));
  return modul;
}
// semua butir (induk dan daun) beserta konteksnya
function semuaButir(C) {
  const out = [];
  for (const t of Object.keys(C.tingkat)) for (const m of C.tingkat[t].mataUjian) for (const s of m.subjek) {
    (function jalan(arr, induk) { for (const b of arr) { out.push({ t, m, s, b, induk }); jalan(b.anak, b); } })(s.butir, null);
  }
  return out;
}

const C = muatCakupan();
const MODUL = muatModul();
const TOPIK = new Set([].concat(...Object.values(MODUL).map(m => m.topik.map(t => t.id))));
const BUTIR = semuaButir(C);

describe('cakupan materi resmi: pemuatan', () => {
  it('menyetel UKP.cakupanResmi di peramban dan module.exports di Node dengan isi yang sama', () => {
    assert.ok(C && C.tingkat, 'UKP.cakupanResmi tidak disetel');
    const viaRequire = require(BERKAS);
    assert.deepEqual(JSON.parse(JSON.stringify(viaRequire)), JSON.parse(JSON.stringify(C)));
  });
  it('sumber dan catatanDokumen terisi', () => {
    for (const k of ['judul', 'penerbit', 'dibagikan', 'kutipan', 'catatan']) assert.ok(typeof C.sumber[k] === 'string' && C.sumber[k].trim(), 'sumber.' + k + ' kosong');
    assert.equal(C.sumber.penerbit, 'BPPK / KLC Kemenkeu');
    assert.ok(Array.isArray(C.catatanDokumen) && C.catatanDokumen.length >= 3);
    C.catatanDokumen.forEach(s => assert.ok(typeof s === 'string' && s.trim()));
  });
  it('modul materi termuat (A1–A5, B6–B8, C9, C10)', () => {
    for (const k of ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8', 'C9', 'C10']) assert.ok(MODUL[k], 'modul ' + k + ' tidak termuat');
  });
});

describe('cakupan materi resmi: struktur', () => {
  it('Tingkat A 5 mata ujian, B 8, C 9', () => {
    assert.deepEqual(Object.keys(C.tingkat), ['A', 'B', 'C']);
    assert.equal(C.tingkat.A.mataUjian.length, 5);
    assert.equal(C.tingkat.B.mataUjian.length, 8);
    assert.equal(C.tingkat.C.mataUjian.length, 9);
  });
  it('field urut 1..n berurutan dan kelompok adalah kode modul yang ada', () => {
    for (const t of ['A', 'B', 'C']) C.tingkat[t].mataUjian.forEach((m, i) => {
      assert.equal(m.urut, i + 1, t + ': urut ' + m.nama);
      assert.ok(MODUL[m.kelompok], t + ' ' + m.nama + ': kelompok ' + m.kelompok + ' tidak ada');
      (m.kelompokLain || []).forEach(k => assert.ok(MODUL[k], 'kelompokLain ' + k));
      assert.ok(m.nama && m.namaNormal, t + ': nama kosong');
      assert.ok(m.subjek.length >= 1 && m.subjek.every(s => s.butir.length >= 1), t + ' ' + m.nama + ': subjek/butir kosong');
    });
  });
  it('Tingkat B memuat 8 mata ujian bernomor 1 sampai 8 (PBB-P5L 8 butir di baris 4, PPh Badan 17 butir di baris 7)', () => {
    const B = C.tingkat.B.mataUjian;
    assert.deepEqual(B.map(m => m.namaNormal), ['Akuntansi Perpajakan', 'Bea Meterai', 'KUP, PPSP, PP', 'PBB-P5L', 'PPh Orang Pribadi', 'PPh Potong/Pungut', 'PPh Badan', 'PPN dan SPT Masa PPN']);
    assert.deepEqual(B.map(m => m.no), ['1', '2', '3', '4', '5', '6', '7', '8'], 'nomor tercetak berurutan');
    const badan = B.find(m => m.namaNormal === 'PPh Badan'), pbb = B.find(m => m.namaNormal === 'PBB-P5L');
    assert.equal(badan.kelompok, 'B6'); assert.equal(badan.subjek[0].butir.length, 17); assert.equal(badan.subjek[0].butir[0].id, 'B.7.1');
    assert.equal(pbb.kelompok, 'B8'); assert.deepEqual(pbb.subjek[0].butir.map(b => b.id), ['B.4.1', 'B.4.2', 'B.4.3', 'B.4.4', 'B.4.5', 'B.4.6', 'B.4.7', 'B.4.8']);
    // tiga butir PBB-P5L Tingkat C juga tercetak di Tingkat B dengan teks yang sama
    const pbbC = C.tingkat.C.mataUjian.find(m => m.namaNormal === 'PBB-P5L'); const teksB = new Set(pbb.subjek[0].butir.map(b => b.teks));
    pbbC.subjek[0].butir.forEach(b => assert.ok(teksB.has(b.teks), 'butir PBB Tingkat C tidak ada di Tingkat B: ' + b.teks));
  });
  it('nama subjek hanya null (Tingkat A) atau tiga subjek resmi', () => {
    for (const t of ['A', 'B', 'C']) for (const m of C.tingkat[t].mataUjian) for (const s of m.subjek) {
      assert.ok(SUBJEK.includes(s.nama), t + ' ' + m.nama + ': subjek ' + s.nama);
      if (t === 'A') assert.equal(s.nama, null); else assert.notEqual(s.nama, null);
    }
  });
});

describe('cakupan materi resmi: butir', () => {
  it('setiap butir punya ID unik berawalan kode tingkat dan teks tidak kosong', () => {
    const lihat = new Map();
    for (const { t, b } of BUTIR) {
      assert.ok(typeof b.id === 'string' && b.id.startsWith(t + '.'), 'ID ' + b.id + ' tidak berawalan ' + t);
      assert.ok(!lihat.has(b.id), 'ID ganda: ' + b.id);
      lihat.set(b.id, true);
      assert.ok(typeof b.teks === 'string' && b.teks.trim().length > 0, 'teks kosong: ' + b.id);
      assert.ok(!/"$/.test(b.teks), 'tanda kutip sisa belum dibersihkan: ' + b.id);
      assert.ok(Array.isArray(b.anak), 'anak bukan larik: ' + b.id);
      assert.equal(typeof b.catatan, 'string', 'catatan bukan string: ' + b.id);
    }
    assert.ok(lihat.size > 300, 'jumlah butir terlalu sedikit: ' + lihat.size);
  });
  it('ID anak diturunkan dari ID induk', () => {
    for (const { b, induk } of BUTIR) if (induk) assert.ok(b.id.startsWith(induk.id + '.'), b.id + ' bukan turunan ' + induk.id);
  });
  it('nilai cakupan hanya penuh, sebagian, atau belum', () => {
    for (const { b } of BUTIR) assert.ok(CAKUPAN.includes(b.cakupan), b.id + ': cakupan "' + b.cakupan + '"');
  });
  it('butir yang belum penuh diberi catatan alasan', () => {
    for (const { b } of BUTIR) if (!b.anak.length && b.cakupan !== 'penuh') assert.ok(b.catatan.trim().length > 20, b.id + ': catatan kosong');
  });
  it('setiap ID topik yang dirujuk ada di modul', () => {
    for (const { b } of BUTIR) {
      assert.ok(Array.isArray(b.topik) && b.topik.length >= 1, b.id + ': topik kosong');
      for (const id of b.topik) {
        assert.match(id, /^[A-C]\d+\.\d+$/, b.id + ': format topik ' + id);
        assert.ok(TOPIK.has(id), b.id + ': topik ' + id + ' tidak ada di modul ' + id.split('.')[0]);
      }
    }
  });
  it('butir induk: topik = gabungan topik anak, cakupan = rangkuman anak', () => {
    for (const { b } of BUTIR) if (b.anak.length) {
      const gabung = new Set([].concat(...b.anak.map(c => c.topik)));
      assert.deepEqual(new Set(b.topik), gabung, b.id + ': topik induk');
      const v = b.anak.map(c => c.cakupan);
      const harap = v.every(x => x === 'penuh') ? 'penuh' : v.every(x => x === 'belum') ? 'belum' : 'sebagian';
      assert.equal(b.cakupan, harap, b.id + ': cakupan induk');
    }
  });
});
