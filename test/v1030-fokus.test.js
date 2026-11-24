/* v10.3.0 Fokus UKP C: data jalur (js/data/fokus-c.js) sah menurut skema, saringan dan urutan antrean latihan intens
   (UKP.belajar.fokus, UKP.latihBank.urutLatih), rute #fokus dan #contekan terdaftar, aset terdaftar di index.html dan sw.js,
   jalan masuk hanya untuk profil tingkat C, dan gaya di blok tersendiri. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const ROOT = path.join(__dirname, '..');
const baca = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const F = require(path.join(ROOT, 'js', 'data', 'fokus-c.js'));
const UKP = muatInti(['core.js', 'data/mu-C9.js', 'data/mu-C10.js', 'data/fokus-c.js', 'learn.js', 'views-belajar.js']);
const K = UKP.konten, L = UKP.belajar, FK = L.fokus, LB = UKP.latihBank;

const JENIS = ['tabel', 'butir', 'rumus', 'langkah', 'jebakan'];
const TERLARANG = /[\u2014\u2013\u2190-\u21ff]/;   // tanda pisah panjang dan tanda panah
const teks = x => typeof x === 'string' && x.trim().length > 0;
// pemeriksa skema satu jalur: mengembalikan daftar masalah (kosong = sah)
function masalahJalur(j) {
  const m = []; const di = s => 'jalur ' + (j && j.id) + ': ' + s;
  if (!j || !teks(j.id) || !teks(j.judul)) { m.push('jalur tanpa id atau judul'); return m; }
  if (!Array.isArray(j.topik) || !j.topik.length || j.topik.some(t => !teks(t))) m.push(di('topik kosong'));
  if (!Array.isArray(j.bagian) || j.bagian.length < 1 || j.bagian.length > 20) m.push(di('jumlah bagian harus 1 sampai 20'));
  const ids = new Set();
  for (const b of j.bagian || []) {
    const s = x => di('bagian ' + (b && b.id) + ': ' + x);
    if (!b || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(b.id || '')) { m.push(s('id bukan slug')); continue; }
    if (ids.has(b.id)) m.push(s('id ganda')); ids.add(b.id);
    if (!teks(b.judul)) m.push(s('tanpa judul'));
    if (!teks(b.dasar)) m.push(s('tanpa dasar'));
    if (!JENIS.includes(b.jenis)) { m.push(s('jenis tidak dikenal: ' + b.jenis)); continue; }
    const daftar = (arr, f) => { if (!Array.isArray(arr) || !arr.length) m.push(s('isi kosong')); else arr.forEach((x, i) => { const p = f(x); if (p) m.push(s('butir ' + (i + 1) + ': ' + p)); }); };
    const dasarOpsional = x => x.dasar === undefined || teks(x.dasar) ? '' : 'dasar kosong';
    if (b.jenis === 'tabel') {
      if (!Array.isArray(b.kolom) || b.kolom.length < 2 || b.kolom.length > 4 || b.kolom.some(k => !teks(k))) m.push(s('kolom harus 2 sampai 4'));
      daftar(b.baris, r => !Array.isArray(r) || r.length !== (b.kolom || []).length ? 'jumlah sel tidak sama dengan kolom' : r.some(c => !teks(c)) ? 'sel kosong' : r.some(c => c.length > 110) ? 'sel terlalu panjang' : '');
    } else if (b.jenis === 'butir') daftar(b.butir, x => !x || !teks(x.teks) ? 'tanpa teks' : dasarOpsional(x));
    else if (b.jenis === 'jebakan') daftar(b.butir, x => !x || !teks(x.teks) ? 'tanpa teks' : '');
    else if (b.jenis === 'langkah') daftar(b.langkah, x => !x || !teks(x.teks) ? 'tanpa teks' : dasarOpsional(x));
    else if (b.jenis === 'rumus') daftar(b.rumus, x => !x || !teks(x.nama) || !teks(x.isi) || !teks(x.contoh) ? 'nama, isi, dan contoh wajib' : /\n/.test(x.isi) ? 'isi rumus harus satu baris' : dasarOpsional(x));
  }
  if (TERLARANG.test(JSON.stringify(j))) m.push(di('memuat tanda pisah panjang atau tanda panah'));
  return m;
}

describe('v10.3.0 data js/data/fokus-c.js', () => {
  it('bentuk: versi 1, dua jalur but dan intl dengan topik yang ditetapkan', () => {
    assert.equal(F.versi, 1);
    assert.deepEqual(F.jalur.map(j => [j.id, j.judul]), [['but', 'BUT'], ['intl', 'Pajak Internasional']]);
    assert.deepEqual(F.jalur[0].topik, ['C9.1', 'C9.2', 'C10.2']);
    assert.deepEqual(F.jalur[1].topik, ['C10.1', 'C10.3', 'C10.4', 'C10.5', 'C10.6', 'C10.7', 'C10.8', 'C10.9', 'C9.3', 'C9.4', 'C9.5', 'C9.6']);
  });
  it('tiap jalur sah menurut skema bagian', () => { for (const j of F.jalur) assert.deepEqual(masalahJalur(j), []); });
  it('pemeriksa skema menolak contoh yang salah', () => {
    const j = o => Object.assign({ id: 'x', judul: 'X', topik: ['C9.1'] }, o);
    const b = o => Object.assign({ id: 'a', judul: 'A', dasar: 'UU PPh Pasal 5', jenis: 'butir', butir: [{ teks: 't' }] }, o);
    assert.deepEqual(masalahJalur(j({ bagian: [b()] })), []);
    for (const [nama, salah] of [['jenis', b({ jenis: 'gambar' })], ['dasar', b({ dasar: '' })], ['slug', b({ id: 'A b' })], ['isi kosong', b({ butir: [] })],
      ['kolom', b({ jenis: 'tabel', kolom: ['a'], baris: [['x']] })], ['sel', b({ jenis: 'tabel', kolom: ['a', 'b'], baris: [['x']] })],
      ['rumus', b({ jenis: 'rumus', rumus: [{ nama: 'n', isi: 'i' }] })], ['langkah', b({ jenis: 'langkah', langkah: [{}] })], ['panah', b({ butir: [{ teks: 'a \u2192 b' }] })]]) {
      assert.ok(masalahJalur(j({ bagian: [salah] })).length > 0, nama);
    }
    assert.ok(masalahJalur(j({ bagian: [b(), b()] })).some(x => /ganda/.test(x)));
    assert.ok(masalahJalur(j({ bagian: [] })).length > 0);
  });
  it('tiap topik jalur ada di modul C9 atau C10, punya soal, dan hanya masuk satu jalur', () => {
    const semua = F.jalur.flatMap(j => j.topik);
    assert.equal(new Set(semua).size, semua.length, 'topik ganda antarjalur');
    for (const t of semua) { assert.ok(K.topik(t), 'topik ' + t); assert.ok(K.soalTopik(t).length > 0, 'soal topik ' + t); }
    // seluruh topik C9 dan C10 terbagi habis ke dua jalur
    const modul = ['C9', 'C10'].flatMap(k => UKP.modul[k].topik.map(t => t.id)).sort();
    assert.deepEqual(semua.slice().sort(), modul);
  });
  it('dimuat sebagai UKP.fokusC di peramban (skrip klasik) dan module.exports di Node', () => {
    assert.deepEqual(JSON.parse(JSON.stringify(UKP.fokusC)), JSON.parse(JSON.stringify(F)));
  });
});

describe('v10.3.0 saringan jalur (UKP.belajar.fokus)', () => {
  it('jalur, label, dan soal: hanya topik jalur, tanpa id ganda', () => {
    assert.equal(FK.jalur('but').judul, 'BUT'); assert.equal(FK.jalur('tidak-ada'), null); assert.equal(FK.jalur(null), null);
    assert.equal(FK.label('but'), 'Fokus: BUT'); assert.equal(FK.label('intl'), 'Fokus: Pajak Internasional'); assert.equal(FK.label('x'), '');
    for (const j of F.jalur) {
      const arr = FK.soal(j.id);
      assert.equal(arr.length, j.topik.reduce((a, t) => a + K.soalTopik(t).length, 0));
      assert.equal(new Set(arr.map(x => x.id)).size, arr.length);
      assert.ok(arr.every(x => j.topik.includes(x.topik)));
    }
    assert.equal(FK.soal('x').length, 0);
  });
  it('ringkas: jumlah soal, yang sudah dikerjakan, persentase benar jawaban terakhir, topik terlemah', () => {
    const s91 = K.soalTopik('C9.1'), s92 = K.soalTopik('C9.2');
    assert.deepEqual(JSON.parse(JSON.stringify(FK.ringkas('but', []))), { nSoal: FK.soal('but').length, nDikerjakan: 0, nBenar: 0, persen: null, terlemah: null });
    const jw = [];
    s91.slice(0, 4).forEach(x => jw.push({ soal: x.id, topik: x.topik, benar: true, opsi: x.kunci, konteks: 'latih' }));
    s92.slice(0, 3).forEach((x, i) => jw.push({ soal: x.id, topik: x.topik, benar: i === 0, opsi: 'A', konteks: 'latih' }));
    jw.push({ soal: s91[0].id, topik: 'C9.1', benar: false, opsi: 'A', konteks: 'latih' });   // jawaban terakhir soal pertama: salah
    jw.push({ soal: s91[5].id, topik: 'C9.1', benar: false, opsi: '-', konteks: 'simulasi' });   // kosong di simulasi: tidak dihitung
    jw.push({ soal: 'A1-001', topik: 'A1.1', benar: true, opsi: 'A', konteks: 'latih' });   // di luar jalur
    const r = FK.ringkas('but', jw);
    assert.equal(r.nDikerjakan, 7); assert.equal(r.nBenar, 4); assert.equal(r.persen, 57);
    assert.equal(r.terlemah.topik.id, 'C9.2'); assert.equal(r.terlemah.n, 3); assert.equal(r.terlemah.persen, 33);
  });
});

describe('v10.3.0 urutan antrean latihan intens', () => {
  const periksa = (hasil, j, jawaban, n) => {
    const riw = FK.riwayat(jawaban);
    assert.equal(hasil.length, n);
    assert.ok(hasil.every(x => j.topik.includes(x.topik)), 'semua soal dari topik jalur');
    assert.equal(new Set(hasil.map(x => x.id)).size, hasil.length, 'tidak ada soal yang diulang');
    assert.equal(new Set(hasil.map(x => K.akar(x) || x.id)).size, hasil.length, 'satu keluarga satu soal');
    const kelas = hasil.map(x => Math.min(2, FK.kelas(x, riw)));   // 0 belum pernah dan kesulitan 3 · 1 pernah salah · 2 sisanya
    for (let i = 1; i < kelas.length; i++) assert.ok(kelas[i] >= kelas[i - 1], 'urutan kelas di posisi ' + i + ': ' + kelas.join(''));
    return kelas;
  };
  const beruntun = hasil => hasil.filter((x, i) => i && x.topik === hasil[i - 1].topik).length;
  it('profil baru: 20 soal pertama semuanya belum pernah dikerjakan dan berkesulitan 3, topik tidak beruntun', () => {
    for (const j of F.jalur) for (let ulang = 0; ulang < 5; ulang++) {
      const hasil = FK.urut(FK.soal(j.id), 20, { jawaban: [] });
      const kelas = periksa(hasil, j, [], 20);
      assert.ok(kelas.every(k => k === 0)); assert.ok(hasil.every(x => x.kesulitan === 3));
      assert.equal(beruntun(hasil), 0, 'topik beruntun di jalur ' + j.id);
      assert.ok(new Set(hasil.map(x => x.topik)).size >= Math.min(3, j.topik.length), 'topik terwakili');
    }
  });
  it('dengan riwayat: belum pernah dan kesulitan 3 dulu, lalu yang pernah salah, lalu sisanya', () => {
    const j = F.jalur[0]; const semua = FK.soal('but');
    const k3 = semua.filter(x => x.kesulitan === 3); const lain = semua.filter(x => x.kesulitan !== 3);
    const jw = [];
    // semua soal kesulitan 3 sudah dikerjakan kecuali 4; 6 di antaranya pernah salah (2 sudah dibetulkan); 5 soal lain pernah salah
    k3.slice(4).forEach((x, i) => { if (i < 6) jw.push({ soal: x.id, benar: false, opsi: 'A', konteks: 'latih' }); if (i >= 6 || i < 2) jw.push({ soal: x.id, benar: true, opsi: x.kunci, konteks: 'latih' }); });
    lain.slice(0, 5).forEach(x => jw.push({ soal: x.id, benar: false, opsi: 'A', konteks: 'latih' }));
    for (let ulang = 0; ulang < 5; ulang++) {
      const hasil = FK.urut(semua, 20, { jawaban: jw });
      const kelas = periksa(hasil, j, jw, 20);
      assert.equal(kelas.filter(k => k === 0).length, 4, 'empat soal kelas pertama');
      assert.ok(kelas.filter(k => k === 1).length >= 9, 'yang pernah salah (termasuk yang sudah dibetulkan) menyusul: ' + kelas.join(''));
      assert.deepEqual(new Set(hasil.slice(0, 4).map(x => x.id)), new Set(k3.slice(0, 4).map(x => x.id)));
      // di dalam sisanya, yang belum pernah dikerjakan mendahului yang sudah dan tidak pernah salah
      const riw = FK.riwayat(jw); const sisa = hasil.map(x => FK.kelas(x, riw)).filter(k => k >= 2);
      assert.deepEqual(sisa, sisa.slice().sort());
    }
  });
  it('n lebih besar dari isi jalur: semua soal sekali; n kosong: semua; masukan ganda dibuang', () => {
    const semua = FK.soal('but'); const nKeluarga = new Set(semua.map(x => K.akar(x) || x.id)).size;
    assert.equal(FK.urut(semua, 500, { jawaban: [] }).length, nKeluarga);
    assert.equal(FK.urut(semua, null, { jawaban: [] }).length, nKeluarga);
    const dobel = FK.urut(semua.concat(semua), 40, { jawaban: [] });
    assert.equal(new Set(dobel.map(x => x.id)).size, 40);
    assert.equal(FK.urut([], 20, { jawaban: [] }).length, 0);
  });
  it('topik diselang juga saat satu topik dominan: beruntun hanya bila tidak ada pilihan lain', () => {
    const buat = (id, topik) => ({ id, topik, kesulitan: 3 });
    const pool = [1, 2, 3, 4].map(i => buat('X-' + i, 'T1')).concat([1, 2].map(i => buat('Y-' + i, 'T2')), [buat('Z-1', 'T3')]);
    for (let ulang = 0; ulang < 10; ulang++) assert.equal(beruntun(FK.urut(pool, null, { jawaban: [] })), 0);
    const berat = [1, 2, 3, 4, 5].map(i => buat('X-' + i, 'T1')).concat([buat('Y-1', 'T2')]);
    assert.equal(beruntun(FK.urut(berat, null, { jawaban: [] })), 3, 'lima soal T1 dan satu soal T2: tiga pasangan beruntun tidak terhindarkan');
  });
  it('Latih: urutLatih memakai urutan fokus bila saringan fokus aktif, dan urutan bank bila tidak', () => {
    const semua = FK.soal('intl');
    const hasil = LB.urutLatih(semua, { fokus: 'intl', n: 20, bank: 'campur' }, { jawaban: [] });
    periksa(hasil, F.jalur[1], [], 20);
    assert.ok(hasil.every(x => x.kesulitan === 3));
    assert.equal(LB.urutLatih(semua, { fokus: 'intl', n: 10, bank: 'campur' }, { jawaban: [] }).length, 10);
    assert.equal(LB.urutLatih(semua, { fokus: 'intl', n: 40, bank: 'campur' }, { jawaban: [] }).length, 40);
    assert.equal(LB.urutLatih(semua, { fokus: 'tidak-ada', n: 10, bank: 'campur' }, {}).length, 10, 'jalur tidak dikenal: urutan biasa');
  });
  it('titik lanjut menyimpan saringan fokus dan rute fokus punya kunci sendiri (muat ulang melanjutkan sesi fokus)', () => {
    assert.deepEqual(JSON.parse(JSON.stringify(LB.saringanTitik({ fokus: 'but', n: 20, kode: '' }))), { kode: '', fokus: 'but', n: 20 });
    assert.notEqual(LB.kunciRute({ fokus: 'but', n: 20, mulai: true }), LB.kunciRute({ n: 20, mulai: true }));
    assert.notEqual(LB.kunciRute({ fokus: 'but', n: 20, mulai: true }), LB.kunciRute({ fokus: 'intl', n: 20, mulai: true }));
    const ids = FK.urut(FK.soal('but'), 20, { jawaban: [] }).map(x => x.id);
    const t = LB.buatTitikSendiri({ rute: LB.kunciRute({ fokus: 'but', n: 20, mulai: true }), ids, idx: 2, benar: 1, mulai: Date.now() - 1000, lama: 900, detikSoal: 3, saringan: { fokus: 'but', n: 20 },
      riwayat: [{ soal: { id: ids[0] }, benar: true, jawab: 'A', detik: 5 }, { soal: { id: ids[1] }, benar: false, jawab: 'B', detik: 5 }] });
    assert.equal(t.saringan.fokus, 'but');
    assert.equal(LB.pakaiTitikSendiri({ params: { fokus: 'but', n: 20, mulai: true }, pulih: true, adaPeserta: false, titik: t }), true);
    assert.equal(LB.pakaiTitikSendiri({ params: { fokus: 'intl', n: 20, mulai: true }, pulih: true, adaPeserta: false, titik: t }), false);
  });
});

describe('v10.3.0 rute, menu, dan jalan masuk', () => {
  const core = baca('js/core.js'), app = baca('js/app.js'), vf = baca('js/views-fokus.js'), vb = baca('js/views-belajar.js'), vh = baca('js/views-home.js');
  it('rute #fokus dan #contekan/<jalur> terdaftar; #contekan tanpa jalur menuju Fokus', () => {
    assert.match(core, /const TOKEN = \{[^}]*\bfokus: 'fokus', contekan: 'contekan' \}/);
    assert.match(core, /const PARAM_HASH = \{[^}]*\bcontekan: 'jalur' \}/);
    assert.match(core, /const INDUK_TANPA_PARAMS = \{[^}]*\bcontekan: 'fokus' \}/);
    assert.match(vf, /UKP\.views\.fokus = function/); assert.match(vf, /UKP\.views\.contekan = function/);
    UKP.views = UKP.views || {}; UKP.views.fokus = () => null; UKP.views.contekan = () => null;
    assert.equal(UKP.href('fokus'), '#fokus');
    assert.equal(UKP.href('contekan', { jalur: 'but' }), '#contekan/but');
    assert.deepEqual(JSON.parse(JSON.stringify(UKP.ruteDariHash('#contekan/intl'))), { view: 'contekan', params: { jalur: 'intl' } });
    assert.deepEqual(JSON.parse(JSON.stringify(UKP.ruteDariHash('#fokus'))), { view: 'fokus', params: {} });
  });
  it('menu Lainnya memuat Fokus UKP C; keduanya rute anak (tombol Kembali tampil)', () => {
    assert.ok(app.includes("['fokus', 'Fokus UKP C', 'flag', ['contekan']]"));
    const puncak = app.match(/const PUNCAK = new Set\(\[([^\]]*)\]\)/)[1];
    assert.ok(!/'fokus'|'contekan'/.test(puncak));
  });
  it('judul halaman, tombol kartu, dan parameter latihan', () => {
    for (const t of ["judul: 'Fokus UKP C'", "judul: 'Cheat sheet ' + j.judul", "'Latih intens, 20 soal'", "'Mode mabar'", "'Buka cheat sheet'", "'Latih jalur ini'", "'Cetak'", "'Daftar isi'", 'root.print()']) assert.ok(vf.includes(t), t);
    const H = (() => { const ctx = { UKP: { h: () => null, c: {}, views: {}, belajar: L, icon: () => null } }; new Function('window', 'globalThis', vf.replace('(typeof window !== \'undefined\' ? window : globalThis)', '(window)'))(ctx, ctx); return ctx.UKP.fokusHalaman; })();
    assert.deepEqual(H.N_PILIH, [10, 20, 40]);
    assert.deepEqual(H.paramsIntens('but', 20), { fokus: 'but', n: 20, mulai: true });
    assert.deepEqual(H.paramsIntens('intl', 40), { fokus: 'intl', n: 40, mulai: true });
    assert.deepEqual(H.paramsIntens('but', 7), { fokus: 'but', n: 20, mulai: true });
    assert.deepEqual(H.paramsMabar('but', 10), { atur: 1, bersama: 1, fokus: 'but', n: 10 });
    assert.equal(H.JUDUL_AJAK, 'Fokus UKP C: BUT dan Pajak Internasional');
    assert.equal(H.kalimatKemajuan({ nSoal: 80, nDikerjakan: 0 }), 'Belum ada soal yang dikerjakan.');
    assert.equal(H.kalimatKemajuan({ nSoal: 80, nDikerjakan: 12, persen: 67 }), 'Sudah dikerjakan 12 dari 80 soal, 67% benar.');
    assert.match(H.kalimatTerlemah({ terlemah: { topik: { id: 'C9.2', judul: 'Branch profit tax' }, n: 5, persen: 40 } }), /^Topik terlemah: C9\.2 Branch profit tax \(40% benar dari 5 soal\)\.$/);
  });
  it('Latih menerima saringan fokus, menandai sesi dengan labelnya, dan menampilkan chipnya', () => {
    assert.ok(vb.includes("f.fokus = jalurF(params.fokus) ? params.fokus : '';"));
    assert.ok(vb.includes("if (g.fokus && jalurF(g.fokus)) arr = L.fokus.soal(g.fokus).filter(x => !g.kode || x.kode === g.kode);"));
    assert.ok(vb.includes("h('p', { class: 'fokus-label', 'data-fokus': f.fokus }, L.fokus.label(f.fokus))"));
    assert.ok(vb.includes("f.fokus ? chip(L.fokus.label(f.fokus), { fokus: '' }) : null"));
  });
  it('ajakan di Beranda dan halaman Latih hanya untuk profil tingkat C', () => {
    assert.ok(vh.includes("const barisFokus = tingkat === 'C' && UKP.views.fokus && UKP.fokusC ? barisDaftar('Fokus UKP C: BUT dan Pajak Internasional'"));
    assert.ok(vf.includes("if (tingkat !== 'C' || !F || !F.semua().length) return null;"));
    assert.ok(vb.includes("UKP.c.ajakFokus(tingkat)"));
  });
  it('teks baru untuk pengguna tanpa tanda pisah panjang dan tanda panah', () => {
    assert.doesNotMatch(vf, TERLARANG);
    assert.doesNotMatch(baca('js/data/fokus-c.js'), TERLARANG);
  });
});

describe('v10.3.0 aset dan gaya', () => {
  const idx = baca('index.html'), sw = baca('sw.js'), css = baca('css/app.css');
  it('index.html memuat data fokus sebelum learn.js dan halaman fokus sebelum app.js; penjaga muat menghitungnya', () => {
    const iP = idx.indexOf('js/data/peta-butir.js'), iF = idx.indexOf('js/data/fokus-c.js'), iL = idx.indexOf('src="js/learn.js'), iT = idx.indexOf('<template id="ukp-data">');
    assert.ok(iF > iP && iF < iL, 'fokus-c.js sesudah peta-butir.js dan sebelum learn.js');
    assert.ok(iF < iT, 'fokus-c.js dimuat langsung, di luar templat bank soal');
    const iV = idx.indexOf('js/views-fokus.js'); assert.ok(iV > idx.indexOf('js/views-bank.js') && iV < idx.indexOf('src="js/app.js'));
    const n = (idx.match(/<script\b[^>]*\bsrc\s*=\s*["'](?!https?:)[^"']+["']/gi) || []).length;
    assert.match(idx, new RegExp('TOTAL = ' + n + ','));
  });
  it('sw.js menyimpan kedua berkas untuk dipakai tanpa internet', () => {
    assert.match(sw, /"js\/data\/fokus-c\.js"/); assert.match(sw, /"js\/views-fokus\.js"/);
  });
  it('gaya di blok tersendiri bertanda v10.3.0, di luar bagian berpagar v9.6 dan v10, tanpa warna literal', () => {
    const a = css.indexOf('/* ===== v10.3.0 Fokus UKP C dan cheat sheet ===== */'), b = css.indexOf('/* ===== v9.6 tampilan: dasar bersama ===== */');
    assert.ok(a > 0 && a < b);
    const blok = css.slice(a, b).replace(/\/\*[\s\S]*?\*\//g, '');
    assert.doesNotMatch(blok, /#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i, 'warna literal');
    assert.doesNotMatch(blok, /font-family:(?!\s*var\()/i, 'huruf di luar token');
    assert.doesNotMatch(blok, /box-shadow|gradient\(|:has\(|color-mix\(/i);
    for (const k of ['.fokus-kartu', '.fokus-label', '.ct-tabel', '.ct-langkah', '.ct-jebakan', '.ct-rumus-isi', '.ct-dasar']) assert.ok(blok.includes(k), k);
    assert.match(blok, /@media screen and \(max-width: 599px\) \{[\s\S]*\.ct-tabel td::before \{ content: attr\(data-kolom\)/, 'tabel menjadi kartu di HP');
    assert.match(blok, /@media print \{[\s\S]*\.ct-aksi, \.ct-isi[^{]*\{ display: none !important; \}/, 'cetak tanpa tombol');
    assert.equal(css.slice(b).indexOf('.ct-'), -1, 'tidak ada gaya cheat sheet di bagian berpagar');
  });
});
