'use strict';
// v10.1 papan (tahap 2 arah desain "Langkah Tegas"): tata dua kolom papan latihan bersama, panel tim, kata keadaan, sebaran per opsi,
// lencana Kunci, tombol utama dengan Spasi. Memakai DOM tiruan dan penyiap yang sama dengan test/v972-papan.test.js (diambil dari
// berkas itu supaya tidak ada salinan kedua).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sumber = fs.readFileSync(path.join(__dirname, 'v972-papan.test.js'), 'utf8');
const potong = sumber.slice(sumber.indexOf('function domTiruan'), sumber.indexOf('const tunggu = ms'));
const { siapkan } = new Function('require', 'fs', 'path', 'vm', '__dirname', potong + '\nreturn { siapkan };')(require, fs, path, vm, __dirname);

const papanBaru = () => { const T = siapkan(); T.bersama(); T.UKP.go('latih', { ids: 'B7-001,B7-002', n: 10 }); return T; };
const baris = (T, nama) => T.main.querySelectorAll('.papan-baris').find(li => (li.querySelector('.papan-nama') || {}).textContent === nama);
const ketuk = (T, nama, label) => baris(T, nama).querySelectorAll('button').find(b => b.getAttribute('aria-label') === label).click();

test('v10.1 papan: dua kolom, soal di kiri, panel tim dan bar aksi di kanan', () => {
  const T = papanBaru();
  const el = T.main.querySelector('.soal-papan-v10'); assert.ok(el, 'kelas papan v10');
  const kiri = el.querySelector('.papan-v10-soal'), kanan = el.querySelector('.papan-v10-panel');
  assert.ok(kiri && kanan, 'dua kolom');
  assert.ok(kiri.querySelector('fieldset.opsi') && kiri.querySelector('.stem'), 'soal dan opsi di kiri');
  assert.ok(kanan.querySelector('.papan-tim') && kanan.querySelector('.papan-bersama') && kanan.querySelector('.sticky-actions .aksi-buka-kunci'), 'panel tim, isian, dan tombol utama di kanan');
  assert.equal(kanan.querySelector('.papan-tim-label').textContent, 'Sudah menjawab');
  assert.match(kanan.querySelector('.papan-tim-angka').textContent.replace(/\s+/g, ' '), /^0 dari 2$/);
  assert.match(kanan.querySelector('.aksi-buka-kunci').textContent, /Buka kunci jawaban/);
  assert.ok(kanan.querySelector('.aksi-buka-kunci .kbd-spasi'), 'tanda Spasi di tombol utama');
  assert.ok(T.main.querySelector('.page.papan-v10') || T.main.querySelector('.papan-v10'), 'halaman papan v10');
  T.UKP.go('beranda');
});

test('v10.1 papan: kata keadaan dan hitungan berganti saat pemimpin mengisi jawaban', () => {
  const T = papanBaru();
  assert.equal(baris(T, 'Nicky').querySelector('.papan-kata').textContent, 'membaca soal');
  ketuk(T, 'Nicky', 'Jawaban A'); ketuk(T, 'Nicky', 'Yakin');
  assert.equal(baris(T, 'Nicky').querySelector('.papan-kata').textContent, 'sudah menjawab');
  assert.equal(baris(T, 'Mita').querySelector('.papan-kata').textContent, 'membaca soal');
  assert.match(T.main.querySelector('.papan-tim-angka').textContent.replace(/\s+/g, ' '), /^1 dari 2$/);
  assert.equal(T.main.querySelectorAll('.papan-tim-ruas > i.ok').length, 1);
  // sebelum kunci: sebaran kosong, lencana Kunci tersembunyi (jawaban tetap rahasia)
  T.main.querySelectorAll('.opsi-sebaran').forEach(s => assert.ok(s.hasAttribute('data-kosong')));
  T.main.querySelectorAll('.opsi-lencana-kunci').forEach(s => assert.ok(s.hidden));
  T.UKP.go('beranda');
});

test('v10.1 papan: sesudah kunci dibuka ada sebaran per opsi, lencana Kunci, dan "Lanjut ke soal 2"', () => {
  const T = papanBaru();
  ketuk(T, 'Nicky', 'Jawaban A'); ketuk(T, 'Nicky', 'Yakin');
  ketuk(T, 'Mita', 'Jawaban B'); ketuk(T, 'Mita', 'Ragu');
  T.main.querySelector('.aksi-buka-kunci').click();
  const lab = k => T.main.querySelectorAll('fieldset.opsi label').find(l => (l.querySelector('kbd') || {}).textContent === k);
  assert.equal(lab('A').querySelector('.opsi-sebaran-n').textContent, '1');
  assert.equal(lab('B').querySelector('.opsi-sebaran-n').textContent, '1');
  assert.equal(lab('C').querySelector('.opsi-sebaran-n').textContent, '0');
  assert.ok(!lab('A').querySelector('.opsi-sebaran').hasAttribute('data-kosong'));
  assert.equal(lab('A').querySelector('.opsi-lencana-kunci').hidden, false, 'lencana Kunci di opsi kunci');
  assert.equal(lab('B').querySelector('.opsi-lencana-kunci').hidden, true);
  assert.ok(T.main.querySelector('.papan-tim').hidden, 'hitungan menjawab diganti hasil');
  const b = T.main.querySelector('.papan-v10-panel .sticky-actions .btn-primary');
  assert.match(b.textContent, /^Lanjut ke soal 2/); assert.ok(b.querySelector('.kbd-spasi'));
  // rincian per orang turun ke bawah pembahasan
  const isi = T.main.querySelector('.papan-v10-isi').children;
  assert.ok(isi.indexOf(T.main.querySelector('.papan-bersama')) > isi.findIndex(x => x.querySelector && x.querySelector('.status')), 'rincian di bawah pembahasan');
  assert.equal(T.main.querySelector('.papan-judul').textContent, 'Rincian jawaban per orang');
  T.UKP.go('beranda');
});

test('v10.1 papan: Ujian tim (papan mode ujian) dan latihan sendiri tidak memakai tata papan v10', () => {
  const T = siapkan();
  const s = { id: 'B7-001', kode: 'B7', topik: 'B7.1', jenis: 'pg', stem: 'Soal', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, kunci: 'A' };
  const ujian = T.UKP.c.soal(s, { konteks: 'latih', papanV10: true, bersama: { peserta: ['Nicky', 'Mita'], mode: 'ujian' } });
  assert.ok(!ujian.classList.contains('soal-papan-v10') && !ujian.querySelector('.papan-v10-panel'));
  const sendiri = T.UKP.c.soal(s, { konteks: 'latih', papanV10: true, onLanjut() {} });
  assert.ok(!sendiri.classList.contains('soal-papan-v10'));
});

test('v10.1 papan: baris baru tanpa tanda pisah panjang atau panah', () => {
  const js = fs.readFileSync(path.join(__dirname, '..', 'js', 'soal.js'), 'utf8');
  const a = js.indexOf('// ---------- v10.1 papan'), b = js.indexOf("    const pemandu = () => namaPemandu || pemimpinB || '';");
  assert.ok(a > 0 && b > a);
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
  const c = css.slice(css.indexOf('/* v10 papan: mulai */'), css.indexOf('/* v10 papan: selesai */'));
  for (const t of [js.slice(a, b), c]) assert.ok(!/[\u2014\u2190-\u21ff\u27f5-\u27ff]/.test(t), 'karakter terlarang');
  assert.ok(!new RegExp('/tm' + 'p/|scratch' + 'pad').test(js.slice(a, b) + c));
});
