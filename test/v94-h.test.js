/* v9.4 paket H: semua soal bisa dibuka di hasil, yang benar juga.
   Fungsi murni js/views-tim.js: status tiap soal bagi jawaban sendiri, hitungan saringan, urutan navigasi tersaring,
   butir mode bahas untuk semua soal. Tanpa DOM. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'views-tim.js']);
const X = UKP.views.tim._uji;
const J = v => JSON.parse(JSON.stringify(v));

// ev.soal ala UKP.belajar.evaluasiSesi: perPeserta tanpa kunci nama = orang itu belum ikut soal itu
const q = (id, kunci, per) => ({ id, kode: id.split('-')[0], topik: '', kunci, perPeserta: per, nBenar: Object.values(per).filter(j => j.b).length,
  nSalah: Object.values(per).filter(j => !j.b && j.o !== '-').length, nKosong: Object.values(per).filter(j => j.o === '-').length });
const SOAL = [
  q('A1-001', 'A', { Mita: { o: 'A', k: 'yakin', b: 1 }, Nora: { o: 'B', k: 'ragu', b: 0 } }),
  q('A1-002', 'C', { Mita: { o: 'D', k: null, b: 0 }, Nora: { o: 'C', k: null, b: 1 } }),
  q('A1-003', 'B', { Mita: { o: '-', k: null, b: 0 }, Nora: { o: 'B', k: null, b: 1 } }),
  q('A1-004', 'D', { Nora: { o: 'D', k: null, b: 1 } }),                       // Mita belum ikut
  q('A1-005', 'A', { Mita: { o: 'A', k: null, b: 1 }, Nora: { o: 'A', k: null, b: 1 } }),
];

describe('v9.4 H: status soal bagi jawaban sendiri', () => {
  it('statusSaya: benar, salah, tidak menjawab, netral (belum ikut / nama tidak ada / tanpa nama)', () => {
    assert.deepEqual(SOAL.map(x => X.statusSaya(x, 'Mita')), ['benar', 'salah', 'kosong', 'netral', 'benar']);
    assert.deepEqual(SOAL.map(x => X.statusSaya(x, 'Nora')), ['salah', 'benar', 'benar', 'benar', 'benar']);
    assert.equal(X.statusSaya(SOAL[0], 'Budi'), 'netral');
    assert.equal(X.statusSaya(SOAL[0], null), 'netral');
    assert.equal(X.statusSaya(null, 'Mita'), 'netral');
    // nama yang sama dengan properti bawaan objek tidak dianggap ikut
    assert.equal(X.statusSaya(SOAL[0], 'toString'), 'netral');
    assert.equal(X.statusSaya({ id: 'x', perPeserta: { Mita: { o: 'E', b: 0 } } }, 'Mita'), 'kosong', 'huruf di luar A–D = tidak menjawab');
    assert.equal(X.statusSaya({ id: 'x', perPeserta: { Mita: { o: 'A', b: true } } }, 'Mita'), 'benar');
  });
  it('statusDariKunci: dipakai lembar jawab dan ujian tim tanpa room', () => {
    assert.equal(X.statusDariKunci('A', 'A'), 'benar');
    assert.equal(X.statusDariKunci('B', 'A'), 'salah');
    assert.equal(X.statusDariKunci('-', 'A'), 'kosong');
    assert.equal(X.statusDariKunci(undefined, 'A'), 'kosong');
    assert.equal(X.statusDariKunci('A', ''), 'netral', 'tanpa kunci (soal tidak ada di versi ini) → netral');
  });
  it('petaSaya: nomor 1..N menurut urutan sesi', () => {
    const p = J(X.petaSaya(SOAL, 'Mita'));
    assert.deepEqual(p.map(x => x.no), [1, 2, 3, 4, 5]);
    assert.deepEqual(p.map(x => x.id), SOAL.map(x => x.id));
    assert.deepEqual(J(X.petaSaya(null, 'Mita')), []);
  });
});

describe('v9.4 H: saringan dan navigasi', () => {
  const peta = X.petaSaya(SOAL, 'Mita');
  it('SARING_SAYA: Semua · Salah · Benar · Tidak menjawab', () => {
    assert.deepEqual(J(X.SARING_SAYA.map(x => x.label)), ['Semua', 'Salah', 'Benar', 'Tidak menjawab']);
  });
  it('hitungSaringSaya: jumlah per saringan, netral hanya ikut "semua"', () => {
    assert.deepEqual(J(X.hitungSaringSaya(peta)), { semua: 5, salah: 1, benar: 2, kosong: 1, netral: 1 });
    assert.deepEqual(J(X.hitungSaringSaya([])), { semua: 0, salah: 0, benar: 0, kosong: 0, netral: 0 });
  });
  it('saringPetaSaya: urutan nomor tetap; saringan tak dikenal = semua', () => {
    assert.deepEqual(J(X.saringPetaSaya(peta, 'benar').map(x => x.no)), [1, 5]);
    assert.deepEqual(J(X.saringPetaSaya(peta, 'salah').map(x => x.no)), [2]);
    assert.deepEqual(J(X.saringPetaSaya(peta, 'kosong').map(x => x.no)), [3]);
    assert.deepEqual(J(X.saringPetaSaya(peta, 'semua').map(x => x.no)), [1, 2, 3, 4, 5]);
    assert.deepEqual(J(X.saringPetaSaya(peta, 'aneh').map(x => x.no)), [1, 2, 3, 4, 5]);
    assert.deepEqual(J(X.saringPetaSaya(peta, 'netral').map(x => x.no)), [1, 2, 3, 4, 5], 'netral bukan saringan');
  });
  it('navSaya: sebelumnya dan berikutnya berjalan di daftar tersaring', () => {
    let n = X.navSaya(peta, 'benar', 1);
    assert.deepEqual([n.pos, n.sebelum, n.berikut, n.daftar.length], [0, null, 5, 2]);
    n = X.navSaya(peta, 'benar', 5);
    assert.deepEqual([n.pos, n.sebelum, n.berikut], [1, 1, null]);
    n = X.navSaya(peta, 'semua', 3);
    assert.deepEqual([n.pos, n.sebelum, n.berikut], [2, 2, 4]);
    n = X.navSaya(peta, 'salah', 4);   // nomor tidak ada di daftar tersaring → mulai dari awal daftar
    assert.deepEqual([n.pos, n.sebelum, n.berikut], [0, null, null]);
  });
  it('100 soal: hitungan dan navigasi tetap benar', () => {
    const banyak = Array.from({ length: 100 }, (_, i) => q('B6-' + String(i + 1).padStart(3, '0'), 'A',
      { Mita: { o: i % 4 === 0 ? 'A' : i % 4 === 1 ? 'B' : i % 4 === 2 ? '-' : 'A', b: i % 4 === 0 || i % 4 === 3 ? 1 : 0 } }));
    const p = X.petaSaya(banyak, 'Mita');
    assert.deepEqual(J(X.hitungSaringSaya(p)), { semua: 100, salah: 25, benar: 50, kosong: 25, netral: 0 });
    const n = X.navSaya(p, 'salah', 98);
    assert.deepEqual([n.daftar.length, n.sebelum, n.berikut], [25, 94, null]);
  });
});

describe('v9.4 H2: mode bahas semua soal', () => {
  it('daftarBahasSemua: urut nomor, butir triase dipakai bila ada, lainnya dikuasai atau kosong', () => {
    const tri = [{ idx: 1, id: 'A1-002', kelas: 'terbelah', saran: 'Nora jelaskan ke Mita', alasan: null }];
    const tanpaJawab = Object.assign(q('A1-006', 'B', {}), { nBenar: 0, nSalah: 0, nKosong: 2 });
    const ev = { soal: [SOAL[4], SOAL[1], tanpaJawab] };
    const d = J(X.daftarBahasSemua(ev, tri));
    assert.deepEqual(d.map(x => x.id), ['A1-005', 'A1-002', 'A1-006']);
    assert.deepEqual(d.map(x => x.idx), [0, 1, 2]);
    assert.deepEqual(d.map(x => x.kelas), ['dikuasai', 'terbelah', 'kosong']);
    assert.equal(d[1].saran, 'Nora jelaskan ke Mita');
    assert.deepEqual(J(X.daftarBahasSemua(null, tri)), []);
  });
});

describe('v9.4 H5: HP anggota tidak menampilkan nama orang lain', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-tim.js'), 'utf8');
  it('bagian Semua soal versi anggota memakai dialog anggota (sebaran tanpa nama), bukan dialog pemimpin', () => {
    const awal = src.indexOf('function semuaSoalAnggota'); assert.ok(awal > 0);
    const isi = src.slice(awal, src.indexOf('\n  }', awal));
    assert.match(isi, /bukaSoalAnggota\(/);
    assert.doesNotMatch(isi, /bukaSoalSesi|siapaMemilih|perPeserta\)\.join/);
  });
  it('sebaranTanpaNama tidak memuat nama', () => {
    const t = X.sebaranTanpaNama(SOAL[0]);
    assert.doesNotMatch(t, /Mita|Nora/);
    assert.match(t, /A 1/);
  });
});

// ---------- v9.4 perbaikan FA (temuan tinjauan h-anggota 1 dan 2, h-alur 1 dan 2) ----------
describe('v9.4 FA2: soal yang diketuk tidak ada di versi aplikasi ini', () => {
  const ada = x => x.ada;
  const d = [{ no: 1, ada: true }, { no: 2, ada: true }, { no: 3, ada: false }, { no: 4, ada: true }];
  it('bisaDibuka: butir yang diketuk tidak ada → null (pemanggil memberi tahu, tidak membuka soal lain)', () => {
    assert.equal(typeof X.bisaDibuka, 'function');
    assert.equal(X.bisaDibuka(d, 2, ada), null);
    assert.equal(X.bisaDibuka(d, 9, ada), null);
    assert.equal(X.bisaDibuka(null, 0, ada), null);
    assert.equal(X.bisaDibuka([{ no: 3, ada: false }], 0, ada), null);
  });
  it('bisaDibuka: butir yang diketuk ada → posisinya di daftar yang bisa dibuka', () => {
    const r = X.bisaDibuka(d, 3, ada);
    assert.deepEqual(J(r.daftar.map(x => x.no)), [1, 2, 4]);
    assert.equal(r.mulai, 2); assert.equal(r.daftar[r.mulai].no, 4);
    assert.equal(X.bisaDibuka(d, 0, ada).mulai, 0);
  });
  it('sumber: bukaSoalAnggota dan semuaSoalSendiri tidak lagi jatuh ke soal pertama; pesannya baku', () => {
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-tim.js'), 'utf8');
    for (const nama of ['function bukaSoalAnggota', 'UKP.c.semuaSoalSendiri = function']) {
      const awal = src.indexOf(nama); assert.ok(awal > 0, nama);
      const isi = src.slice(awal, awal + 1400);
      assert.match(isi, /bisaDibuka\(/, nama);
      assert.doesNotMatch(isi, /Math\.max\(0, (daftar|d)\.indexOf/, nama);
    }
    assert.match(src, /const TEKS_TAK_ADA = 'Soal ini tidak ada di versi aplikasi ini\.';/);
  });
  it('label nomor yang tidak ada: teks, bukan hanya warna', () => {
    assert.equal(X.labelNoSaya({ no: 3, status: 'kosong', takAda: true }, false), 'Soal 3, tidak menjawab. Tidak ada di versi aplikasi ini');
    assert.equal(X.labelNoSaya({ no: 3, status: 'netral', takAda: true }, true), 'Soal 3. Tidak ada di versi aplikasi ini');
  });
});

describe('v9.4 FA6: anggota yang menyusul, nomor yang tidak ia ikuti', () => {
  it('adaBelumIkut: hanya bila ada nomor netral (bukan karena soal tidak ada) dan tidak semuanya netral', () => {
    const p = X.petaSaya(SOAL, 'Mita');
    assert.equal(X.adaBelumIkut(p), true);
    assert.equal(X.adaBelumIkut(X.petaSaya(SOAL, 'Nora')), false);           // tidak ada netral
    assert.equal(X.adaBelumIkut(X.petaSaya(SOAL, 'Budi')), false);           // semuanya netral
    assert.equal(X.adaBelumIkut([{ no: 1, status: 'netral', takAda: true }, { no: 2, status: 'benar' }]), false);
    assert.equal(X.adaBelumIkut(null), false);
  });
  it('labelNoSaya: "Soal 4, Anda belum ikut. Buka soal" saat legenda belum ikut tampil; status lain tidak berubah', () => {
    assert.equal(X.labelNoSaya({ no: 4, status: 'netral' }, true), 'Soal 4, Anda belum ikut. Buka soal');
    assert.equal(X.labelNoSaya({ no: 4, status: 'netral' }, false), 'Soal 4. Buka soal');
    assert.equal(X.labelNoSaya({ no: 1, status: 'benar' }, true), 'Soal 1, benar. Buka soal');
    assert.equal(X.labelNoSaya({ no: 2, status: 'salah' }, false), 'Soal 2, salah. Buka soal');
  });
  it('sumber: legenda menulis "nomor tanpa tanda: Anda belum ikut"', () => {
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-tim.js'), 'utf8');
    assert.match(src, /nomor tanpa tanda: Anda belum ikut/);
  });
});

describe('v9.4 FA3/FA4: lembar jawab yang kunci jawabannya pernah tampil, per ujian', () => {
  const UI = muatInti(['core.js', 'learn.js', 'views-ujian-tim.js']);
  const M = UI.ujianTimUI._murni;
  it('satu kunci penyimpanan: ukp.lj.beku', () => {
    assert.equal(M.KBEKU, 'ukp.lj.beku');
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-ujian-tim.js'), 'utf8');
    assert.doesNotMatch(src, /ukp\.lj\.terbuka/);
  });
  it('rapikanBeku: buang isi rusak, simpan paling banyak 20 yang terbaru', () => {
    const m = {}; for (let i = 0; i < 25; i++) m['ut' + i] = { j: 'AB-', r: '000', t: 1000 + i };
    m.rusak = { j: 5 }; m.kosong = null;
    const r = M.rapikanBeku(m); const k = Object.keys(r);
    assert.equal(k.length, 20); assert.ok(k.includes('ut24')); assert.ok(!k.includes('ut4')); assert.ok(!k.includes('rusak'));
    assert.deepEqual(J(M.rapikanBeku(null)), {}); assert.deepEqual(J(M.rapikanBeku([1, 2])), {});
  });
  const r = o => J(M.rencanaGantiKode(Object.assign({ lamaId: null, lamaTerkunci: false, adaIsi: false, baruId: 'B', baruBeku: false }, o)));
  it('ujian yang dituju sudah dikunci di HP ini → jawaban beku dipulihkan dan lembar dikunci', () => {
    assert.deepEqual(r({ lamaId: 'A', lamaTerkunci: true, baruBeku: true }), { aksi: 'pulihkan', tanya: false });
    assert.deepEqual(r({ lamaId: 'B', lamaTerkunci: true, baruBeku: true }), { aksi: 'pulihkan', tanya: false });
    // lembar lain yang masih terbuka dan berisi akan diganti: tanya dulu
    assert.deepEqual(r({ lamaId: 'A', adaIsi: true, baruBeku: true }), { aksi: 'pulihkan', tanya: true });
    assert.deepEqual(r({ lamaId: null, adaIsi: true, baruBeku: true }), { aksi: 'pulihkan', tanya: true });
  });
  it('berganti ke ujian lain → jawaban dikosongkan (tanya dulu bila lembar terbuka dan berisi)', () => {
    assert.deepEqual(r({ lamaId: 'A', lamaTerkunci: true, adaIsi: true }), { aksi: 'kosong', tanya: false });
    assert.deepEqual(r({ lamaId: 'A', adaIsi: true }), { aksi: 'kosong', tanya: true });
    assert.deepEqual(r({ lamaId: 'A' }), { aksi: 'kosong', tanya: false });
  });
  it('lembar polos lalu kode ujian, atau kode ujian yang sama → jawaban tetap', () => {
    assert.deepEqual(r({ lamaId: null, adaIsi: true }), { aksi: 'tetap', tanya: false });
    assert.deepEqual(r({ lamaId: 'B', adaIsi: true }), { aksi: 'tetap', tanya: false });
  });
  it('sumber: Kosongkan pada lembar terkunci melepas lembar dari ujian, tidak menulis dikunci:false', () => {
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-ujian-tim.js'), 'utf8');
    const awal = src.indexOf('UKP.views.lj = function'); const isi = src.slice(awal, src.indexOf('UKP.ujianTimUI = {'));
    assert.doesNotMatch(isi, /dikunci: false \}\)\); \}/);
    assert.match(isi, /if \(terkunci\) \{ lj\.ujianId = null;/);
  });
});
