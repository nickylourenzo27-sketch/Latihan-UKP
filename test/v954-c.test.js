/* Uji v9.5.4 bagian ketiga (KEPUTUSAN-954C): lima susulan kecil.
   C-1 peserta yang tidak menjawab satu soal pun sepanjang sesi (pemandu atau pengamat) tidak dihitung "belum menjawab" di evaluasi;
   C-2 saran "Latih N soal <topik>" di Laporan mingguan memakai jumlah soal yang benar-benar dimulai;
   C-3 "Cek N soal topik ini" (Tanya Tutor tanpa AI) memakai jumlah yang dimulai, paling banyak 5;
   C-4 label aksesibilitas tombol Latih di Cakupan unik per tingkat; C-5 "Ulangi N soal dari Buku Kesalahan" = jumlah yang dimulai.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { muatInti } = require('./_muat-inti.js');

const ROOT = path.join(__dirname, '..');
const baca = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const J = v => JSON.parse(JSON.stringify(v));
const DATA = fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);

// pemuat dengan localStorage tiruan (pola test/v954-b.test.js)
function muat(opsi) {
  opsi = opsi || {};
  const simpanan = new Map();
  simpanan.set('ukp.v1', JSON.stringify({ profil: Object.assign({ tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: 'Nicky' }, opsi.profil || {}) }));
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, dispatchEvent: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => (simpanan.has(k) ? simpanan.get(k) : null), setItem: (k, v) => { simpanan.set(k, String(v)); }, removeItem: k => { simpanan.delete(k); } },
    location: { hash: '', search: '', hostname: 'localhost', protocol: 'http:' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  const jalankan = rel => vm.runInContext(baca(rel), ctx, { filename: rel });
  jalankan('js/core.js'); jalankan('js/kalkulator.js');
  for (const b of fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => f.endsWith('.js')).sort()) jalankan('js/data/' + b);
  jalankan('js/learn.js');
  for (const b of opsi.setelah || []) jalankan('js/' + b);
  return { UKP: ctx.UKP };
}

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 C-1: pemandu atau pengamat yang tidak ikut menjawab', () => {
  const UKP = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js']));
  const L = UKP.belajar; const X = UKP.views.tim._uji;
  const q = (id, kunci, jw) => ({ id, kode: id.split('-')[0], topik: id.split('-')[0] + '.1', kunci, detik: 0, jawaban: jw });
  const sesi = (peserta, soal, mode) => ({ id: 'sb-c1', mulai: Date.now() - 600000, selesai: Date.now(), peserta, mode: mode || 'latihan', bahas: {}, soal });
  const B = o => ({ o, k: null, b: 1 }), S = o => ({ o, k: null, b: 0 }), KS = { o: '-', k: null, b: 0 };
  // ubin "Semua benar", ringkasan urutan bahas, "Bahas semua soal", pill kelas, cadangan kelas, dan saringan matriks dari satu evaluasi
  function tampilan(s) {
    const ev = L.evaluasiSesi(s); const tri = ev.triase;
    const semua = J(X.daftarBahasSemua(ev, tri.daftar));
    const kelasDari = id => { const x = tri.daftar.find(d => d.id === id); return x ? x.kelas : X.kelasCadangan(ev.soal.find(y => y.id === id), tri.pengamat); };
    return { ev, tri, semua, kelasDari, pill: semua.map(x => X.namaKelasBahas(x)) };
  }
  // aturan saling cocok: soal di luar urutan bahas = "Semua benar" atau tidak dijawab siapa pun; jumlah dikuasai sama di semua tempat
  function cocok(t) {
    const { ev, tri, semua, kelasDari } = t;
    const nDik = semua.filter(x => x.kelas === 'dikuasai').length;
    assert.equal(nDik, tri.nDikuasai, 'Bahas semua soal vs ubin');
    assert.equal(tri.daftar.length + nDik + semua.filter(x => x.kelas === 'kosong').length, ev.nSoal, 'urutan bahas + semua benar + kosong = semua soal');
    ev.soal.forEach(sq => { const d = tri.daftar.find(x => x.id === sq.id); const k = kelasDari(sq.id); if (!d) assert.ok(k === 'dikuasai' || k === 'kosong', sq.id + ' ' + k); else assert.equal(k, d.kelas); });
  }

  it('triaseSoal: opsi.pengamat dikecualikan dari tidakMenjawab, kepada, dan saran', () => {
    const t = L.triaseSoal({ id: 'X1-001', kunci: 'D' }, { Nicky: null, Mita: { o: 'D' }, Nora: { o: 'D' } }, { urutan: ['Nicky', 'Mita', 'Nora'], pengamat: ['nicky'] });
    assert.equal(t.kelas, 'dikuasai'); assert.deepEqual(J(t.tidakMenjawab), []); assert.deepEqual(J(t.kepada), []); assert.equal(t.nKosong, 1, 'nKosong tetap mencatat');
    const t2 = L.triaseSoal({ id: 'X1-001', kunci: 'D' }, { Nicky: null, Mita: { o: 'D' }, Nora: null }, { urutan: ['Nicky', 'Mita', 'Nora'], pengamat: ['Nicky'] });
    assert.equal(t2.kelas, 'rapuh'); assert.deepEqual(J(t2.kepada), ['Nora']); assert.equal(t2.saran, 'Mita jelaskan ke Nora');
  });

  it('pemandu yang tidak pernah menjawab: soal yang dijawab benar oleh semua peserta lain = "Semua benar" (sama dengan papan)', () => {
    const s = sesi(['Nicky', 'Mita', 'Nora'], [
      q('X1-001', 'A', { Nicky: KS, Mita: B('A'), Nora: B('A') }),
      q('X1-002', 'B', { Nicky: KS, Mita: B('B'), Nora: S('C') }),
      q('X1-003', 'C', { Nicky: KS, Mita: B('C'), Nora: KS })]);
    const t = tampilan(s);
    assert.deepEqual(J(t.tri.pengamat), ['Nicky']);
    assert.equal(t.tri.nDikuasai, 1);
    assert.deepEqual(J(t.tri.daftar.map(x => x.id + ':' + x.kelas)), ['X1-002:terbelah', 'X1-003:rapuh']);
    assert.equal(t.tri.daftar[1].saran, 'Mita jelaskan ke Nora'); assert.deepEqual(J(t.tri.daftar[1].kepada), ['Nora']);
    assert.ok(!t.tri.daftar.some(x => /Nicky/.test(x.saran)), 'pemandu tidak disebut di saran');
    assert.deepEqual(t.pill, ['Semua benar', 'Tim terbagi', 'Benar, tapi ada yang belum menjawab']);
    cocok(t);
    // tampilan yang mendaftar siapa yang tidak menjawab tidak diubah: matriks tetap mencatat Nicky kosong
    assert.equal(t.ev.soal[0].nKosong, 1); assert.equal(t.ev.soal[0].perPeserta.Nicky.o, '-');
  });

  it('pemandu yang tidak pernah menjawab, ada nama yang tidak tersimpan di soal tertentu (rekaman per nama)', () => {
    const s = sesi(['Nicky', 'Mita'], [q('X1-001', 'A', { Mita: B('A') }), q('X1-002', 'B', { Nicky: null, Mita: B('B') })]);
    const t = tampilan(s);
    assert.deepEqual(J(t.tri.pengamat), ['Nicky']); assert.equal(t.tri.nDikuasai, 2); assert.equal(t.tri.daftar.length, 0); cocok(t);
  });

  it('pemimpin yang menjawab sebagian soal tetap peserta biasa (selisih dengan papan diterima)', () => {
    const s = sesi(['Nicky', 'Mita', 'Nora'], [
      q('X1-001', 'A', { Nicky: KS, Mita: B('A'), Nora: B('A') }),
      q('X1-002', 'B', { Nicky: B('B'), Mita: B('B'), Nora: B('B') })]);
    const t = tampilan(s);
    assert.deepEqual(J(t.tri.pengamat), []);
    assert.equal(t.tri.nDikuasai, 1);
    assert.deepEqual(J(t.tri.daftar.map(x => x.id + ':' + x.kelas)), ['X1-001:rapuh']);
    assert.equal(t.tri.daftar[0].label, 'Benar, tapi ada yang belum menjawab'); assert.deepEqual(J(t.tri.daftar[0].kepada), ['Nicky']);
    assert.equal(t.pill[0], 'Benar, tapi ada yang belum menjawab');
    cocok(t);
  });

  it('satu peserta saja: menjawab → kelas biasa; tidak menjawab satu soal pun → tidak ada urutan bahas dan tidak ada "Semua benar"', () => {
    const t1 = tampilan(sesi(['Mita'], [q('X1-001', 'A', { Mita: B('A') }), q('X1-002', 'B', { Mita: KS }), q('X1-003', 'C', { Mita: S('A') })]));
    assert.deepEqual(J(t1.tri.pengamat), []); assert.equal(t1.tri.nDikuasai, 1);
    assert.deepEqual(J(t1.tri.daftar.map(x => x.id + ':' + x.kelas)), ['X1-003:tersandung']);
    assert.deepEqual(t1.semua.map(x => x.kelas), ['dikuasai', 'kosong', 'tersandung']); cocok(t1);
    const t2 = tampilan(sesi(['Mita'], [q('X1-001', 'A', { Mita: KS }), q('X1-002', 'B', { Mita: KS })]));
    assert.deepEqual(J(t2.tri.pengamat), ['Mita']); assert.equal(t2.tri.nDikuasai, 0); assert.equal(t2.tri.daftar.length, 0);
    assert.deepEqual(t2.semua.map(x => x.kelas), ['kosong', 'kosong']); cocok(t2);
  });

  it('semua peserta tidak menjawab: tidak ada soal "Semua benar", tidak ada urutan bahas, label tetap "Tidak ada yang menjawab"', () => {
    const t = tampilan(sesi(['Nicky', 'Mita', 'Nora'], [q('X1-001', 'A', { Nicky: KS, Mita: KS, Nora: KS }), q('X1-002', 'B', { Nicky: KS, Mita: KS, Nora: KS })]));
    assert.equal(t.tri.pengamat.length, 3); assert.equal(t.tri.nDikuasai, 0); assert.equal(t.tri.daftar.length, 0);
    assert.deepEqual(t.semua.map(x => x.kelas), ['kosong', 'kosong']); assert.deepEqual(t.pill, ['Tidak ada yang menjawab', 'Tidak ada yang menjawab']);
    assert.equal(L.triaseSoal({ id: 'X1-001', kunci: 'A' }, { Nicky: null, Mita: null }, { pengamat: ['Nicky', 'Mita'] }).label, 'Tidak ada yang menjawab');
    cocok(t);
  });

  it('ujian tim dengan banyak kosong: yang tidak menjawab satu soal pun tetap di skor dengan 0; kelas soal tidak menyebutnya', () => {
    const ids = ['X1-001', 'X1-002', 'X1-003', 'X1-004', 'X1-005'];
    const pola = { Nicky: 'AB---', Mita: 'A----', Nora: '-----' }; const kunci = 'ABCDA';
    const soal = ids.map((id, i) => { const jw = {}; Object.keys(pola).forEach(n => { const c = pola[n][i]; jw[n] = c === '-' ? KS : c === kunci[i] ? B(c) : S(c); }); return q(id, kunci[i], jw); });
    const s = sesi(['Nicky', 'Mita', 'Nora'], soal, 'ujian');
    const t = tampilan(s);
    assert.deepEqual(J(t.tri.pengamat), ['Nora']);
    const nora = t.ev.skor.find(x => x.nama === 'Nora'); assert.ok(nora, 'Nora tetap di skor'); assert.equal(nora.skor, 0); assert.equal(nora.benar, 0);
    assert.equal(t.ev.skor.length, 3);
    // soal 1: Nicky dan Mita benar, Nora pengamat → Semua benar; soal 2: Mita belum menjawab → rapuh, kepada Mita; soal 3-5: tidak dijawab siapa pun
    assert.equal(t.tri.nDikuasai, 1);
    assert.deepEqual(J(t.tri.daftar.map(x => x.id + ':' + x.kelas)), ['X1-002:rapuh']); assert.deepEqual(J(t.tri.daftar[0].kepada), ['Mita']);
    assert.deepEqual(t.semua.map(x => x.kelas), ['dikuasai', 'rapuh', 'kosong', 'kosong', 'kosong']);
    cocok(t);
  });

  it('kelasCadangan: tanpa pengamat seperti dulu; dengan pengamat yang kosong → "dikuasai"', () => {
    const qq = { nBenar: 2, nSalah: 0, nKosong: 1, perPeserta: { Nicky: { o: '-' }, Mita: { o: 'A' }, Nora: { o: 'A' } } };
    assert.equal(X.kelasCadangan(qq), 'rapuh');
    assert.equal(X.kelasCadangan(qq, ['nicky']), 'dikuasai');
    assert.equal(X.kelasCadangan(qq, ['Mita']), 'rapuh', 'pengamat yang bukan yang kosong tidak mengubah apa pun');
    assert.equal(X.kelasCadangan({ nBenar: 0, nSalah: 0, nKosong: 3, perPeserta: {} }, ['Nicky']), 'kosong');
  });

  it('rekap tetap: "kali tidak menjawab" masih mencatat semua yang kosong; perlu dibahas hanya dari prioritas ≥ 2', () => {
    const s = sesi(['Nicky', 'Mita', 'Nora'], [q('X1-001', 'A', { Nicky: KS, Mita: B('A'), Nora: B('A') })]);
    const r = L.rekapSesi(s);
    assert.ok(r.includes('1 kali tidak menjawab'), r);
    assert.ok(r.includes('Tidak ada topik yang perlu dibahas.'), r);
  });

  it('papan langsung tidak diubah: soal.js dan views-ruang.js tetap memakai opsi.pemimpin', () => {
    assert.ok(baca('js/soal.js').includes("pemimpin: pemandu() || null"));
    assert.ok(baca('js/views-ruang.js').includes("L.triaseSoal(soal, per, { pemimpin: st.tuan || null })"));
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 C-2 dan C-5: angka saran Laporan mingguan = jumlah soal yang benar-benar dimulai', () => {
  function laporan(opsi) {
    const { UKP } = muat({ profil: { tingkat: 'A' }, setelah: opsi.tanpaViews ? [] : ['views-belajar.js'] });
    const K = UKP.konten, L = UKP.belajar;
    const so = K.semuaSoal('A').filter(x => x.topik === 'A2.4').slice(0, opsi.nSalah);
    so.forEach(x => L.catatJawaban(x, x.kunci === 'A' ? 'B' : 'A', 30, 'latih'));
    return { UKP, lap: L.laporanMingguan({ minggu: 'ini', paksa: true }), so };
  }
  it('4 soal salah di A2.4 (target A): "Ulangi 4 soal" dan "Latih 7 soal A2.4", sama dengan sesi yang dimulai', () => {
    const { UKP, lap, so } = laporan({ nSalah: 4 });
    const LB = UKP.latihBank; const K = UKP.konten;
    const fam = new Set(so.map(x => K.akar(x) || x.id)).size;
    assert.equal(LB.nLatihSalah(10), fam);
    // jumlah yang dimulai #latih { hanyaSalah, n: 10 }: pool basis + soalSalah, lalu urutLatih
    const ids = new Set(UKP.belajar.bukuKesalahan('A', 200).map(j => j.soal));
    assert.equal(LB.urutLatih(K.semuaSoal('A').filter(x => ids.has(x.id)), { n: 10, bank: 'campur' }, {}).length, fam);
    const judul = lap.saran.map(x => x.judul);
    const ul = lap.saran.find(x => /Buku Kesalahan/.test(x.judul));
    assert.ok(ul, JSON.stringify(judul)); assert.equal(ul.judul, 'Ulangi ' + fam + ' soal dari Buku Kesalahan'); assert.equal(ul.label, 'Ulangi ' + fam + ' soal');
    assert.ok(ul.teks.includes('Ulangi ' + fam + ' soal dari Buku Kesalahan'));
    assert.deepEqual(J(ul.params), { hanyaSalah: true, n: 10, mulai: true });
    const lt = lap.saran.find(x => /A2\.4/.test(x.judul) && /^Latih/.test(x.judul));
    assert.equal(LB.nLatihTopik('A2.4'), 7);
    assert.ok(lt.judul.startsWith('Latih 7 soal A2.4')); assert.ok(lt.teks.endsWith('Latih 7 soal topik itu.'));
    assert.ok(!judul.some(j => /\b10 soal\b/.test(j)), JSON.stringify(judul));
  });
  it('lebih dari 10 keluarga salah: angka paling banyak 10', () => {
    const { UKP } = muat({ profil: { tingkat: 'A' }, setelah: ['views-belajar.js'] });
    const K = UKP.konten, L = UKP.belajar;
    K.semuaSoal('A').filter(x => x.kode === 'A3').slice(0, 30).forEach(x => L.catatJawaban(x, x.kunci === 'A' ? 'B' : 'A', 30, 'latih'));
    const lap = L.laporanMingguan({ minggu: 'ini', paksa: true });
    assert.ok(lap.saran.some(x => x.judul === 'Ulangi 10 soal dari Buku Kesalahan'), JSON.stringify(lap.saran.map(x => x.judul)));
  });
  it('cadangan tanpa UKP.latihBank menghasilkan angka yang sama', () => {
    const a = laporan({ nSalah: 4 }).lap.saran.map(x => x.judul);
    const b = laporan({ nSalah: 4, tanpaViews: true }).lap.saran.map(x => x.judul);
    assert.deepEqual(J(b), J(a));
  });
  it('bila jumlahnya 0, saran tidak ditampilkan (kode sumber)', () => {
    const s = baca('js/learn.js');
    assert.ok(s.includes("else if (st.akurasi < 0.6 && nUS) saran.push("));
    assert.ok(s.includes('if (kesalahanBerulang[0] && nKB) {'));
    assert.ok(!s.includes("'Latih 10 soal ' + x.topik") && !s.includes('Ulangi 10 soal dari Buku Kesalahan'));
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 C-3: "Cek N soal topik ini" memakai jumlah yang dimulai (paling banyak 5)', () => {
  it('nLatihTopik(id, 5) sama dengan panjang sesi Latih { kode, topik, n: 5 }; 0 untuk topik tanpa soal tingkat target', () => {
    const { UKP } = muat({ profil: { tingkat: 'B' }, setelah: ['views-belajar.js'] }); const K = UKP.konten; const LB = UKP.latihBank;
    let dicek = 0, kurang = 0;
    for (const t of ['A', 'B', 'C']) {
      UKP.store.get().profil.tingkat = t; const kel = K.kelompok(t);
      for (const kode of K.semuaKelompok()) for (const tp of (UKP.modul[kode] && UKP.modul[kode].topik) || []) {
        const pool = K.soalKelompok(kode, kel.includes(kode) ? t : undefined).filter(x => x.topik === tp.id);
        const harap = pool.length ? LB.urutLatih(pool, { n: 5, bank: 'campur' }, {}).length : 0;
        assert.equal(LB.nLatihTopik(tp.id, 5), harap, t + ' ' + tp.id); dicek++; if (harap < 5) kurang++;
      }
    }
    assert.ok(dicek > 100); assert.ok(kurang > 0, 'ada topik dengan kurang dari 5 keluarga');
    UKP.store.get().profil.tingkat = 'B'; assert.equal(LB.nLatihTopik('B7.8', 5), 0);
  });
  it('tombol memakai angka itu dan tidak tampil bila 0', () => {
    const va = baca('js/views-alat.js');
    assert.ok(va.includes("const nCek = k.topik ? nLatihTopik(k.topik.id, 5) : 0;"));
    assert.ok(va.includes("if (k.topik && nCek) daftar.push(tombol('Cek ' + nCek + ' soal topik ini'"));
    assert.ok(!va.includes("'Cek 5 soal topik ini'"));
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 C-4: label tombol Latih di Cakupan unik di tiap tingkat', () => {
  it('label "Latih butir <nomor>: <nama butir>" tanpa ganda untuk tingkat A, B, dan C', () => {
    const { UKP } = muat({ setelah: ['views-belajar.js'] }); const C = UKP.cakupanResmi; const CK = UKP.cakupan;
    for (const t of ['A', 'B', 'C']) {
      const lab = new Map(); let n = 0;
      for (const m of C.tingkat[t].mataUjian) for (const sj of m.subjek) CK.telusuri(sj.butir, b => {
        if (Array.isArray(b.anak) && b.anak.length) return; n++;
        const l = CK.labelLatih(b, t); assert.ok(l.startsWith('Latih butir '), l); lab.set(l, (lab.get(l) || 0) + 1);
      });
      const ganda = [...lab].filter(([, k]) => k > 1);
      assert.deepEqual(ganda, [], t); assert.ok(n > 50, t);
    }
  });
  it('nomor butir ikut seperti di Bank soal; butir yang teks dan nomornya sama di subjek lain diberi nama subjek', () => {
    const { UKP } = muat({ setelah: ['views-belajar.js'] }); const CK = UKP.cakupan;
    const a = CK.labelLatih(CK.butir('C.1.1').butir, 'C'), b = CK.labelLatih(CK.butir('C.1.5').butir, 'C');
    assert.notEqual(a, b);
    assert.ok(a.startsWith('Latih butir 1: Jurnal hak dan kewajiban perpajakan') && a.endsWith('· Badan Dalam Negeri'), a);
    assert.ok(b.endsWith('· Transaksi Internasional'), b);
    const vb = baca('js/views-belajar.js');
    assert.ok(vb.includes("a.setAttribute('aria-label', labelLatihButir(b, tingkat));"));
    assert.ok(!vb.includes("'Latih butir ini: ' + pendek(b.teks, 60)"));
  });
});
