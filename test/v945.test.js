/* Uji v9.4.5: penjaga isi setelah cara hitung tanggal disamakan (keputusan pemimpin tim 12 November 2026).
   "N bulan sejak tanggal X" berakhir sehari sebelum tanggal yang sama pada bulan ke-N, seperti contoh di Penjelasan Pasal 11 ayat (1)
   UU PBB (SPPT diterima 1 Maret, jatuh tempo 31 Agustus) dan Penjelasan Pasal 19 ayat (1) UU 28/2007 (SKPKB terbit 7 Oktober 2008,
   jatuh tempo 6 November 2008). Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

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
const teksData = nama => fs.readFileSync(path.join(ROOT, 'js', 'data', nama), 'utf8');
function muatRef() {
  let ref = null; const ctx = { UKP: { registerRef(r) { ref = r; } }, console }; ctx.window = ctx;
  vm.runInNewContext(teksData('ref.js'), ctx, { filename: 'ref.js' });
  return JSON.parse(JSON.stringify(ref));
}
// hari terakhir "n bulan sejak iso": sehari sebelum tanggal yang sama pada bulan ke-n
function akhirBulanSejak(iso, n) {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1 + n, d)); t.setUTCDate(t.getUTCDate() - 1);
  return t.toISOString().slice(0, 10);
}

describe('v9.4.5: cara hitung "N bulan sejak" mengikuti contoh Penjelasan undang-undang', () => {
  it('rumus uji cocok dengan dua contoh naskah', () => {
    assert.equal(akhirBulanSejak('1986-03-01', 6), '1986-08-31', 'Penjelasan Pasal 11 ayat (1) UU PBB');
    assert.equal(akhirBulanSejak('1986-03-01', 1), '1986-03-31', 'Penjelasan Pasal 11 ayat (2) UU PBB');
    assert.equal(akhirBulanSejak('2008-10-07', 1), '2008-11-06', 'Penjelasan Pasal 19 ayat (1) UU 28/2007');
  });
  const KUNCI = [
    ['A2-034', 'A', /9 Oktober 2026/], ['A2-009', 'B', /1 Februari 2027/], ['A4-055', 'D', /9 Maret 2027/], ['A5-095', 'A', /4 Januari 2027/],
    ['B6-071', 'A', /13 Oktober 2027/], ['B8-060', 'C', /1 Juli 2026/], ['C9-089', 'B', /12 November 2026/], ['C10-040', 'C', /14 Oktober 2026/], ['E-049', 'B', /17 Maret 2027/],
  ];
  for (const [id, kunci, pola] of KUNCI) it(id + ': kunci ' + kunci + ' memuat tanggal hasil hitungan baru', () => {
    const s = soal(id); assert.ok(s, id + ' tidak ada');
    assert.equal(s.kunci, kunci); assert.match(s.opsi[kunci], pola);
  });
  it('tanda perlu cek dicabut dari soal yang keraguannya hanya cara hitung bulan', () => {
    for (const id of ['A2-034', 'A5-095', 'C9-089']) { const s = soal(id); assert.equal(s.verifikasi, '✅', id); assert.ok(!s.peringatan, id + ' masih punya peringatan'); }
  });
});

describe('v9.4.5: soal try out tidak berubah', () => {
  const sidik = s => crypto.createHash('sha256').update(JSON.stringify([s.stem, s.opsi, s.kunci])).digest('hex').slice(0, 16);
  it('stem, opsi, dan kunci 100 soal try out sama dengan v9.4.4', () => {
    const h = crypto.createHash('sha256'); let n = 0;
    for (const k of MODUL.slice().sort()) for (const s of semua.find(m => m.meta.kode === k).soal) if (s.sumber && s.sumber.set === 'TO-B-2026-11') { n++; h.update(s.id + sidik(s)); } // v9.5.5: paket Try Out UKP C tidak ikut sidik ini
    assert.equal(n, 100);
    assert.equal(h.digest('hex').slice(0, 24), '75cdc9e4ff02eac29aeb34aa');
  });
  it('tiga soal try out yang kuncinya memakai hitungan tanggal ke tanggal diberi tanda dan penjelasan', () => {
    for (const [id, kunci] of [['A2-121', 'D'], ['A2-126', 'B'], ['A2-128', 'B']]) {
      const s = soal(id); assert.equal(s.kunci, kunci, id); assert.equal(s.verifikasi, '◐', id);
      assert.match(s.peringatan, /tanggal ke tanggal/, id + ': peringatan'); assert.match(JSON.stringify(s.pembahasan), /Penjelasan undang-undang/, id + ': pembahasan');
    }
  });
});

describe('v9.4.5: tabel rujukan dan tanggal berlaku', () => {
  const ref = muatRef();
  const cari = (obj, id) => { let hasil = null; (function jalan(x) { if (hasil || !x || typeof x !== 'object') return; if (x.id === id) { hasil = x; return; } for (const v of Object.values(x)) jalan(v); })(obj); return hasil; };
  it('PMK 141/PMK.03/2015 berlaku 26 Agustus 2015 dan PP 78/2019 berlaku 13 Desember 2019', () => {
    assert.equal(cari(ref, 'PMK-141-2015').berlakuSejak, '2015-08-26');
    assert.equal(cari(ref, 'PP-78-2019').berlakuSejak, '2019-12-13');
    for (const f of fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => f.endsWith('.js'))) for (const lama of ['2015-08-24', '2019-12-12']) assert.ok(!teksData(f).includes(lama), f + ' masih memuat ' + lama);
  });
  it('glosarium memuat cara hitung jangka waktu beserta dua contoh naskah', () => {
    const t = teksData('ref.js'); const i = t.indexOf('Jangka waktu N bulan sejak tanggal tertentu'); assert.ok(i > 0, 'entri glosarium tidak ada');
    const entri = t.slice(i, i + 1500); assert.match(entri, /31 Agustus/); assert.match(entri, /6 November/); assert.match(entri, /sehari sebelum tanggal yang sama/);
  });
});

describe('v9.4.5: temuan uji ulang tanpa kunci', () => {
  it('A2-027: opsi B menyatakan pelunasan penuh sebagai syarat, sehingga hanya A yang benar', () => {
    const s = soal('A2-027'); assert.equal(s.kunci, 'A'); assert.match(s.opsi.B, /Wajib melunasi seluruh SKPKB/);
  });
  it('B8-072 dan A2-129: penjelasan pengecoh tidak lagi menyamakan satu bulan dengan tanggal ke tanggal', () => {
    assert.ok(!/satu bulan kalender/.test(soal('B8-072').pembahasan.mengapaSalah.C));
    assert.ok(!/seolah jangkanya 1 bulan/.test(soal('A2-129').pembahasan.mengapaSalah.C));
  });
  it('jejak bunga per bulan mulai sehari setelah jatuh tempo (A2-093, A2-070)', () => {
    assert.match(soal('A2-093').pembahasan.jejakHitung[0][0], /mulai 7 Nov 2026/);
    assert.match(JSON.stringify(soal('A2-070').pembahasan.jejakHitung), /mulai 1 Mei 2026/);
  });
});

describe('v9.4.5: jumlah soal bertanda', () => {
  it('tersisa paling banyak 67 soal bertanda (sejak v9.5.4) di modul Tingkat B dan Etika dan 13 di modul Tingkat C', () => {
    const tanda = k => semua.find(m => m.meta.kode === k).soal.filter(s => s.verifikasi === '◐').length;
    const b = ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8', 'E'].reduce((a, k) => a + tanda(k), 0), c = tanda('C9') + tanda('C10');
    assert.ok(b <= 67, 'Tingkat B dan Etika: ' + b); assert.ok(c <= 13, 'Tingkat C: ' + c);
  });
  it('jumlah soal tetap 1.494', () => {
    assert.equal([...peta.values()].filter(s => !s.sejak).length, 1494, 'jumlah soal lama (tanpa field sejak)');
  });
});
