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
  // v10.1.1: ringkasan membahas di atas; status, triase, pembahasan, dan jawaban tiap orang utuh di lipatan "Rincian jawaban per orang"
  const isi = T.main.querySelector('.papan-v10-isi').children;
  const iB = isi.findIndex(x => x.classList && x.classList.contains('papan-bahas')), iR = isi.findIndex(x => x.classList && x.classList.contains('papan-rincian'));
  assert.ok(iB >= 0 && iR > iB, 'ringkasan di atas lipatan rincian');
  const rin = isi[iR];
  assert.equal(rin.tagName, 'DETAILS'); assert.equal(rin.querySelector('summary').textContent, 'Rincian jawaban per orang');
  assert.ok(rin.querySelector('.status') && rin.querySelector('.papan-bersama'), 'rincian lama tetap ada di lipatan');
  assert.equal(T.main.querySelector('.papan-judul').textContent, 'Jawaban tiap orang');
  T.UKP.go('beranda');
});

test('v10.1.1 papan: panel membahas "Benar x dari y", Yang menjelaskan dengan kalimat berdata, Cara ingat atau Jebakan; tanpa nama yang salah', () => {
  const T = siapkan(); T.bersama();
  const buat = pb => {
    const s = { id: 'B7-001', kode: 'B7', topik: 'B7.1', jenis: 'pg', stem: 'Soal', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, kunci: 'C', pembahasan: pb };
    const el = T.UKP.c.soal(s, { konteks: 'latih', papanV10: true, tanpaLog: true, bersama: { peserta: ['Nicky', 'Mita', 'Nora'] }, onLanjut() {} });
    T.main.replaceChildren(el);
    const tk = (nama, label) => el.querySelectorAll('.papan-baris').find(li => (li.querySelector('.papan-nama') || {}).textContent === nama).querySelectorAll('button').find(b => b.getAttribute('aria-label') === label).click();
    tk('Nicky', 'Jawaban B'); tk('Nicky', 'Yakin'); tk('Mita', 'Jawaban C'); tk('Mita', 'Yakin');
    el.querySelector('.aksi-buka-kunci').click();
    return el.querySelector('.papan-bahas');
  };
  const bh = buat({ mudah: 'Kalimat pertama. Kalimat kedua. Cara ingat: jasa kesehatan tetap JKP.', jebakan: 'Teks jebakan.', mengapaSalah: { B: 'Alasan B.' } });
  assert.ok(bh, 'panel membahas');
  assert.equal(bh.querySelector('.papan-tim-label').textContent, 'Benar');
  assert.equal(bh.querySelector('.papan-bahas-n').textContent, '1');
  assert.equal(bh.querySelector('.papan-bahas-dari').textContent, 'dari 2 yang menjawab');
  const pj = bh.querySelector('.papan-bahas-penjelas');
  assert.equal(pj.querySelector('.papan-tim-label').textContent, 'Yang menjelaskan');
  assert.equal(pj.querySelector('.papan-bahas-nama').textContent, 'Mita');
  assert.equal(pj.querySelector('.papan-bahas-baca').textContent, 'Mita menjawab C dengan yakin. Minta ia jelaskan kenapa C, bukan B.');
  assert.ok(!/Nicky|Nora/.test(bh.textContent), 'nama yang salah atau tidak menjawab tidak disebut di ringkasan');
  const so = bh.querySelector('.papan-bahas-sorot');
  assert.equal(so.getAttribute('data-jenis'), 'ingat'); assert.equal(so.querySelector('.papan-tim-label').textContent, 'Cara ingat');
  assert.equal(so.querySelector('.papan-bahas-baca').textContent, 'Jasa kesehatan tetap JKP.');
  assert.equal(T.main.querySelector('.soal-papan-v10').dataset.papanFase, 'bahas');
  assert.ok(T.main.querySelector('.papan-rincian .papan-bersama'), 'jawaban per orang tetap bisa dibuka');
  // tanpa Cara ingat: Jebakan
  const bh2 = buat({ mudah: 'Hanya penjelasan.', jebakan: 'Teks jebakan.' });
  const so2 = bh2.querySelector('.papan-bahas-sorot');
  assert.equal(so2.getAttribute('data-jenis'), 'jebakan'); assert.equal(so2.querySelector('.papan-tim-label').textContent, 'Jebakan'); assert.equal(so2.querySelector('.papan-bahas-baca').textContent, 'Teks jebakan.');
  // tanpa keduanya: tidak ada blok sorot
  assert.equal(buat({ mudah: 'Hanya penjelasan.' }).querySelector('.papan-bahas-sorot'), null);
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
