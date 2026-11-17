/* v10 hasil: fungsi murni ringkasan latihan sendiri (UKP.diagnosisHasilLatih) dan angka Kemajuan (UKP.angkaKemajuanV10),
   serta kait CSS di sub-bagian "v10 hasil". Jalankan: node --test test/ */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js', 'views-belajar.js', 'views-alat.js']);
const topik = id => ({ 'A4.4': { id: 'A4.4', judul: 'Saat dan tempat PPN terutang' }, 'A4.1': { id: 'A4.1', judul: 'Subjek PPN' } })[id] || null;

test('diagnosis: topik dengan salah terbanyak disebut dengan "x dari y"', () => {
  const d = UKP.diagnosisHasilLatih;
  assert.equal(d(['A4.1', 'A4.4', 'A4.4'], topik), '2 dari 3 yang salah ada di A4.4 Saat dan tempat PPN terutang.');
  assert.equal(d(['A4.4'], topik), 'Soal yang salah ada di A4.4 Saat dan tempat PPN terutang.');
  assert.equal(d(['A4.4', 'A4.4'], topik), 'Semua 2 yang salah ada di A4.4 Saat dan tempat PPN terutang.');
  assert.equal(d(['A4.1', 'A4.4'], topik), 'Yang salah tersebar di 2 topik berbeda.');
  assert.equal(d([], topik), null); assert.equal(d([null], topik), null);
});

test('Kemajuan: per mata uji, keyakinan termasuk tanpa tanda, terlemah dengan 8 jawaban, dari riwayat nyata', () => {
  UKP.register({ meta: { kode: 'B7', nama: 'Akuntansi Perpajakan', diujiDi: ['B'] }, topik: [{ id: 'B7.1', judul: 'Topik uji' }], soal: [] });
  UKP.register({ meta: { kode: 'B8', nama: 'PBB-P5L', diujiDi: ['B'] }, topik: [{ id: 'B8.1', judul: 'Topik uji' }], soal: [] });
  const kini = Date.now(); const j = [];
  for (let i = 0; i < 10; i++) j.push({ soal: 'B7-' + i, topik: 'B7.1', kode: 'B7', benar: i < 3, opsi: i < 3 ? 'A' : 'B', konteks: 'latih', pada: kini - 40 * 86400000, keyakinan: i < 2 ? 'yakin' : i < 5 ? 'yakin' : undefined });
  for (let i = 0; i < 8; i++) j.push({ soal: 'B8-' + i, topik: 'B8.1', kode: 'B8', benar: i < 6, opsi: i < 6 ? 'A' : '-', konteks: 'latih', pada: kini - 40 * 86400000, keyakinan: i < 6 ? 'menebak' : undefined });
  j.push({ soal: 'B8-x', topik: 'B8.1', kode: 'B8', benar: false, opsi: '-', konteks: 'simulasi', pada: kini - 40 * 86400000 });   // simulasi kosong: tidak dihitung
  const s = { profil: { tingkat: 'B' }, jawaban: j, hadir: {} };
  const A = UKP.angkaKemajuanV10(s);
  const b7 = A.per.find(x => x.kode === 'B7'), b8 = A.per.find(x => x.kode === 'B8');
  assert.deepEqual([b7.b, b7.n, b8.b, b8.n], [3, 10, 6, 8]);
  assert.equal(A.lemah.kode, 'B7'); assert.equal(A.nCukup, 2);
  const sm = x => [x.n, x.b];
  assert.deepEqual(sm(A.yakin.yakin), [5, 3]); assert.deepEqual(sm(A.yakin.menebak), [6, 6]);
  assert.deepEqual(sm(A.yakin.tanpa), [5, 0], 'tanpa tanda dihitung; Tidak tahu tidak');
  assert.equal(A.pekan.n, 0, 'jawaban 40 hari lalu bukan pekan ini');
});

test('CSS v10 hasil: kait kelas ada di sub-bagian hasil, petak dan baris 44 px', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
  const a = css.indexOf('/* v10 hasil: mulai */'), b = css.indexOf('/* v10 hasil: selesai */'); assert.ok(a > 0 && b > a);
  const isi = css.slice(a, b);
  for (const k of ['.v10-hasil', '.vh-skor-angka', '.vh-petak-sel', '.vh-fakta', '.vh-daftar', '.v10-kemajuan', '.vk-ringkas', '.vk-kolom', '.vk-yakin-baris']) assert.ok(isi.includes(k), k);
  assert.match(isi, /\.vh-petak-sel \{[^}]*min-height: var\(--v10-sasaran\)/);
  assert.match(isi, /\.vk-kolom \{[^}]*width: 76px/);
});
