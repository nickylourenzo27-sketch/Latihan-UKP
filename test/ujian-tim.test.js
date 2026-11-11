/* Uji v8.1 (js/learn.js): tempo ujian, triase/penjelas bahas, urutanBahas, evaluasiSesi + skorUjian + rekapSesi, kode ujian (UT1) dan
   kode jawaban (UKPJ1), siklus Ujian tim di perangkat pemimpin, lembar jawab, lanjutkan sesi bersama.
   Memuat js/core.js + js/data (ref + bank soal asli) + js/learn.js di konteks vm. Jalankan: node --test test/ */
'use strict';
const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);
const UKP = muatInti(['core.js'].concat(DATA, ['learn.js']));
const L = UKP.belajar, K = UKP.konten, UT = L.ujianTim;
const J = v => JSON.parse(JSON.stringify(v)); // nilai dari konteks vm → realm uji
const s = UKP.store.get();
const TIM = ['Nicky', 'Mita', 'Nora', 'Jeni', 'Mega', 'Aldi'];
const TO = J(K.soalSet('TO-B-2026-11').map(x => x.id));
const SOAL_A = K.soal(TO[0]); // A1-104: kunci D; jebakanOpsi A = salah-hitung (bank asli)

function reset() {
  s.jawaban.length = 0; s.kartuOtomatis.length = 0; s.jawabanBersama = []; s.sesiBersama = []; s.simulasi = [];
  s.bersama = { aktif: true, peserta: TIM.slice() }; s.profil.nama = 'Nicky'; s.profil.tingkat = 'B';
  s.ujianTim = null; s.lembarJawab = null; s.bersamaAktif = null;
}
// per peserta dari string 'DDA-AD' + keyakinan 'yy.y..' (y yakin, r ragu, m menebak, . tanpa)
function per(opsi, yakin, nama) {
  const KY = { y: 'yakin', r: 'ragu', m: 'menebak' }; const o = {};
  (nama || TIM).forEach((n, i) => { o[n] = { o: opsi[i] || '-', k: KY[(yakin || '')[i]] || null }; });
  return o;
}
function sesiDari(soalList, jawabanPer, ekstra) {
  return Object.assign({ id: 'sb-uji', mulai: new Date(2026, 10, 10, 9, 0).getTime(), selesai: new Date(2026, 10, 10, 9, 30).getTime(), tingkat: 'B', peserta: TIM.slice(), anggaranDetik: 1260, sumber: 'latih',
    soal: soalList.map((so, i) => ({ id: so.id, kode: so.kode, topik: so.topik, kunci: so.kunci, detik: 100, jawaban: jawabanPer[i] })) }, ekstra || {});
}

describe('v8.1 A: tempo', () => {
  beforeEach(reset);
  it('tempoUjian dari format resmi: B 210 menit / 100 soal = 126 detik; cadangan 126; TEMPO_LONGGAR 150', () => {
    assert.equal(L.tempoUjian('B'), 126); assert.equal(L.tempoUjian('A'), 126); assert.equal(L.tempoUjian('C'), 126);
    assert.equal(L.tempoUjian(), 126); assert.equal(L.TEMPO_LONGGAR, 150); assert.equal(L.TEMPO_CADANGAN, 126);
  });
  it('tempoUjian mengikuti perubahan format (menit × 60 / soalPerkiraan, dibulatkan)', () => {
    const f = UKP.ref.ujian.format.UKP.B; const lama = f.menit;
    try { f.menit = 180; assert.equal(L.tempoUjian('B'), 108); } finally { f.menit = lama; }
  });
  it('BATAS_LULUS dari format UKP (60) dan formatUjianTingkat', () => {
    assert.equal(L.BATAS_LULUS, 60);
    assert.deepEqual(J(L.formatUjianTingkat('B')), { menit: 210, soal: 100 });
  });
  it('tempoBersama bawaan ujian (126); aturTempoBersama longgar (150) tersimpan dan bertahan normal()', () => {
    assert.deepEqual(J(L.tempoBersama()), { mode: 'ujian', detik: 126 });
    assert.deepEqual(J(L.aturTempoBersama('longgar')), { mode: 'longgar', detik: 150 });
    assert.equal(s.bersama.tempo, 'longgar');
    assert.equal(UKP.store.normal(J(s)).bersama.tempo, 'longgar');
    assert.deepEqual(J(L.aturTempoBersama('apa saja')), { mode: 'ujian', detik: 126 });
  });
});

describe('v8.1 B: triaseSoal', () => {
  it('dikuasai: semua benar dan tak ada yang ragu/menebak → Lanjut, prioritas 0', () => {
    const t = L.triaseSoal(SOAL_A, per('DDDDDD', 'yy....'), { urutan: TIM });
    assert.deepEqual([t.kelas, t.label, t.saran, t.penjelas, t.prioritas, t.N, t.nBenar], ['dikuasai', 'Semua benar', 'Lanjut', null, 0, 6, 6]);
    assert.deepEqual(J(t.kepada), []); assert.equal(t.opsiKeliru, null); assert.equal(t.alasan, null);
  });
  it('rapuh: semua benar tetapi ada yang ragu/menebak → yang ragu menjelaskan alasannya; yang Nebak tidak dipilih bila ada orang benar lain (v9.2)', () => {
    const r = L.triaseSoal(SOAL_A, per('DDDDDD', '...r..'), { urutan: TIM });
    assert.deepEqual([r.kelas, r.label, r.saran, r.penjelas], ['rapuh', 'Semua benar, tapi ada yang ragu', 'Jeni, jelaskan singkat alasanmu', 'Jeni']);
    const t = L.triaseSoal(SOAL_A, per('DDDDDD', '.....m'), { urutan: TIM });
    assert.deepEqual([t.kelas, t.label, t.saran, t.penjelas, t.prioritas], ['rapuh', 'Semua benar, tapi ada yang ragu', 'Nicky, jelaskan singkat alasanmu', 'Nicky', 1]);
    assert.deepEqual(J(t.belumMantap), ['Aldi']);
  });
  it('terbelah 4–1 (v9.2: dihitung dari yang menjawab): penjelas mengutamakan yang yakin; kepada = hanya yang salah; tidak menjawab terpisah', () => {
    const t = L.triaseSoal(SOAL_A, per('DDAD-D', '.y....'), { urutan: TIM });
    assert.deepEqual([t.kelas, t.label, t.penjelas, t.prioritas, t.nJawab], ['terbelah', 'Tim terbagi', 'Mita', 2, 5]);
    assert.deepEqual(J(t.kepada), ['Nora']); assert.deepEqual(J(t.tidakMenjawab), ['Mega']);
    assert.equal(t.saran, 'Mita jelaskan ke Nora');
    assert.deepEqual(J(L.triaseSoal(SOAL_A, per('DDAD-D', '.y....'), { urutan: TIM, pemimpin: 'mega' }).tidakMenjawab), [], 'pemimpin yang tidak menjawab tidak disebut');
    assert.deepEqual([t.nBenar, t.nSalah, t.nKosong], [4, 1, 1]);
  });
  it('tersandung "Hanya 1 dari 6 benar": satu-satunya yang benar menjelaskan ke semua', () => {
    const t = L.triaseSoal(SOAL_A, per('ADAAB-'), { urutan: TIM });
    assert.deepEqual([t.kelas, t.label, t.saran, t.penjelas, t.prioritas], ['tersandung', 'Banyak yang salah', 'Mita jelaskan ke Nicky, Nora, Jeni, dan Mega', 'Mita', 3]);
    assert.equal(t.kepada.length, 4); assert.deepEqual(J(t.tidakMenjawab), ['Aldi']);
  });
  it('tersandung "Semua belum tepat": tak ada yang benar → Baca pembahasan bersama, tanpa penjelas', () => {
    const t = L.triaseSoal(SOAL_A, per('AAAB--'), { urutan: TIM });
    assert.deepEqual([t.kelas, t.label, t.saran, t.penjelas], ['tersandung', 'Banyak yang salah', 'Baca pembahasan bersama', null]);
    assert.deepEqual(J(t.kepada), TIM.slice(0, 4)); assert.deepEqual(J(t.tidakMenjawab), TIM.slice(4));
  });
  it('kurang dari separuh benar (2 dari 6) → tersandung; tepat separuh (3 dari 6) → terbelah', () => {
    assert.equal(L.triaseSoal(SOAL_A, per('DDAAAA'), { urutan: TIM }).kelas, 'tersandung');
    assert.equal(L.triaseSoal(SOAL_A, per('DDDAAA'), { urutan: TIM }).label, 'Tim terbagi');
  });
  it('yakinSalah dan opsiKeliru (terbanyak; seri → lebih banyak yang yakin) dengan alasan dari jebakanOpsi + mengapaSalah bank asli', () => {
    const t = L.triaseSoal(SOAL_A, per('DDACCA', '..y..y'), { urutan: TIM });
    assert.deepEqual(J(t.yakinSalah), ['Nora', 'Aldi']);
    assert.equal(t.opsiKeliru, 'A');
    assert.deepEqual(J(t.alasan), { opsi: 'A', tag: SOAL_A.jebakanOpsi.A, label: 'salah hitung', teks: SOAL_A.pembahasan.mengapaSalah.A });
  });
  it('alasan: teks mengapaSalah dipotong ≤ 160 karakter dengan "…"; label manusiawi untuk setiap tag', () => {
    const panjang = K.semuaSoal('B').find(x => x.pembahasan && x.pembahasan.mengapaSalah && Object.keys(x.pembahasan.mengapaSalah).some(o => o !== x.kunci && String(x.pembahasan.mengapaSalah[o]).length > 160));
    assert.ok(panjang, 'bank memuat teks mengapaSalah > 160 karakter');
    const o = Object.keys(panjang.pembahasan.mengapaSalah).find(k => k !== panjang.kunci && String(panjang.pembahasan.mengapaSalah[k]).length > 160);
    const p = {}; TIM.forEach(n => { p[n] = o; });
    const t = L.triaseSoal(panjang, p, { urutan: TIM });
    assert.ok(t.alasan.teks.length <= 160); assert.match(t.alasan.teks, /…$/);
    assert.deepEqual(J(L.LABEL_JEBAKAN), { 'salah-klasifikasi': 'salah klasifikasi', 'lupa-pasal': 'lupa pasal', 'salah-baca': 'salah baca', 'salah-hitung': 'salah hitung', 'angka-usang': 'angka usang', 'final-nonfinal': 'final vs non-final' });
    assert.equal(L.potongTeks('pendek', 160), 'pendek');
  });
  it('rotasi penjelas: hitungPenjelas terkecil dipilih di antara yang sama-sama yakin; lalu urutan', () => {
    const p = per('DDDAA-', 'yyy...');
    assert.equal(L.triaseSoal(SOAL_A, p, { urutan: TIM }).penjelas, 'Nicky');
    assert.equal(L.triaseSoal(SOAL_A, p, { urutan: TIM, hitungPenjelas: { Nicky: 2, Mita: 1 } }).penjelas, 'Nora');
    assert.equal(L.triaseSoal(SOAL_A, per('DDDAA-', '..y...'), { urutan: TIM, hitungPenjelas: { Nora: 5 } }).penjelas, 'Nora', 'yakin tetap diutamakan');
  });
  it('soal tanpa kunci ({ id }) memakai b|benar; bentuk opsi/keyakinan dan huruf kecil diterima', () => {
    const t = L.triaseSoal({ id: 'Z-001' }, { Mita: { opsi: 'b', keyakinan: 'yakin', benar: true }, Nora: { o: 'C', b: 0 } });
    assert.deepEqual([t.kelas, t.nBenar, t.penjelas, t.saran], ['terbelah', 1, 'Mita', 'Mita jelaskan ke Nora']);
  });
});

describe('v8.1 B: urutanBahas dan tandaiBahas', () => {
  beforeEach(reset);
  const soal5 = () => TO.slice(0, 5).map(id => K.soal(id));
  function sesi5() {
    const so = soal5(); const k = so.map(x => x.kunci); const salah = so.map(x => x.kunci === 'A' ? 'B' : 'A');
    // pola per orang: k = kunci, s = salah, lainnya kosong
    const mk = (idx, pola, yk) => per(pola.split('').map(c => c === 'k' ? k[idx] : c === 's' ? salah[idx] : '-').join(''), yk);
    return sesiDari(so, [
      mk(0, 'kkkkkk', ''),            // dikuasai
      mk(1, 'kkkkss', ''),            // terbelah 4–2, tanpa yakin salah
      mk(2, 'ksssss', '.y....'),      // tersandung 1/6, satu yakin salah
      mk(3, 'kkkkss', '....yy'),      // terbelah 4–2, dua yakin salah
      mk(4, 'kkkkkk', '..r...'),      // rapuh
    ]);
  }
  it('hanya prioritas ≥ 1, urut prioritas → yakinSalah → nSalah → urutan asli; perKelas dan nDikuasai', () => {
    const r = L.urutanBahas(sesi5());
    assert.deepEqual(J(r.daftar.map(x => x.idx)), [2, 3, 1, 4]);
    assert.deepEqual(J(r.daftar.map(x => x.kelas)), ['tersandung', 'terbelah', 'terbelah', 'rapuh']);
    assert.equal(r.nDikuasai, 1); assert.deepEqual(J(r.perKelas), { dikuasai: 1, rapuh: 1, terbelah: 2, tersandung: 1 });
    const x = r.daftar[0];
    assert.deepEqual([x.id, x.kode, x.topik, x.kunci, x.sudah], [TO[2], K.soal(TO[2]).kode, K.soal(TO[2]).topik, K.soal(TO[2]).kunci, false]);
  });
  it('rotasi penjelas berurutan mengikuti daftar: orang yang sudah menjelaskan bergeser ke belakang', () => {
    const r = L.urutanBahas(sesi5());
    assert.deepEqual(J(r.daftar.map(x => x.penjelas)), ['Nicky', 'Mita', 'Nora', 'Nora']);
  });
  it('tandaiBahas menyimpan sesi.bahas dan urutanBahas melaporkan sudah; false melepas', () => {
    const se = sesi5(); s.sesiBersama.push(se);
    assert.equal(L.tandaiBahas('sb-uji', TO[2], true), true);
    assert.deepEqual(J(s.sesiBersama[0].bahas), { [TO[2]]: 1 });
    assert.equal(L.urutanBahas(L.sesiBersamaDari('sb-uji')).daftar[0].sudah, true);
    L.tandaiBahas('sb-uji', TO[2], false); assert.deepEqual(J(s.sesiBersama[0].bahas), {});
    assert.equal(L.tandaiBahas('tidak-ada', TO[2], true), false);
  });
  it('sesi kosong / bukan objek → daftar kosong', () => {
    assert.deepEqual(J(L.urutanBahas(null)), { daftar: [], nDikuasai: 0, perKelas: { dikuasai: 0, rapuh: 0, terbelah: 0, tersandung: 0 } });
  });
});

describe('v8.1 C: evaluasiSesi, skorUjian, rekapSesi', () => {
  beforeEach(reset);
  const so4 = () => TO.slice(0, 4).map(id => K.soal(id));
  function sesiUjian() {
    const so = so4(); const k = so.map(x => x.kunci); const w = so.map(x => x.kunci === 'A' ? 'B' : 'A');
    const jw = [0, 1, 2, 3].map(i => ({ Mita: { o: k[i], k: i === 3 ? 'ragu' : null }, Nora: { o: i < 2 ? k[i] : w[i], k: null }, Aldi: { o: i === 0 ? k[i] : '-', k: null } }));
    return sesiDari(so, jw, { peserta: ['Mita', 'Nora', 'Aldi'], mode: 'ujian', judul: 'Try Out B 1–4', ujianId: 'utx', tempo: 'ujian', detikPerSoal: 126, waktuPeserta: { Mita: 400, nora: 333 } });
  }
  it('skorUjian: skor 1 desimal, lulus (≥ 60), kurang soal, nRagu, perKelompok, detik dari waktuPeserta', () => {
    const r = J(L.skorUjian(sesiUjian()));
    assert.deepEqual(r.map(x => [x.nama, x.n, x.benar, x.salah, x.kosong, x.skor, x.lulus, x.kurang, x.nRagu, x.detik]), [
      ['Mita', 4, 4, 0, 0, 100, true, 0, 1, 400], ['Nora', 4, 2, 2, 0, 50, false, 1, 0, 333], ['Aldi', 4, 1, 0, 3, 25, false, 2, 0, null]]);
    const kel = so4().map(x => x.kode); const harap = {}; kel.forEach(k => { harap[k] = (harap[k] || 0) + 1; });
    assert.equal(r[0].perKelompok.reduce((a, x) => a + x.n, 0), 4);
    r[0].perKelompok.forEach(x => assert.equal(x.n, harap[x.kode]));
  });
  it('skorUjian: pembulatan 1 desimal dan batas lulus tepat (60/100 lulus, 59/100 kurang 1; 2/3 = 66,7)', () => {
    const so = TO.slice(0, 100).map(id => K.soal(id));
    const jw = so.map((x, i) => ({ A: { o: i < 60 ? x.kunci : '-' }, B: { o: i < 59 ? x.kunci : '-' } }));
    const r = J(L.skorUjian(sesiDari(so, jw, { peserta: ['A', 'B'] })));
    assert.deepEqual([r[0].skor, r[0].lulus, r[0].kurang, r[1].skor, r[1].lulus, r[1].kurang], [60, true, 0, 59, false, 1]);
    const s3 = sesiDari(so.slice(0, 3), so.slice(0, 3).map((x, i) => ({ A: { o: i < 2 ? x.kunci : '-' } })), { peserta: ['A'] });
    assert.equal(L.skorUjian(s3)[0].skor, 66.7);
  });
  it('evaluasiSesi mode ujian: mode, judul, tempo, skor, triase; detik ikut di soal[]', () => {
    const se = sesiUjian(); se.soal[1].detik = 200; se.soal[2].detik = 300; se.soal[3].detik = 0;
    const e = J(L.evaluasiSesi(se));
    assert.equal(e.mode, 'ujian'); assert.equal(e.judul, 'Try Out B 1–4');
    assert.deepEqual(e.tempo, { detikPerSoal: 126, rataDetik: 200, nLewat: 2, terlama: [{ id: TO[2], detik: 300 }, { id: TO[1], detik: 200 }], soalUjian: 100, menitUjian: 210, proyeksiMenit: 333, totalDetik: 600, bahas: null }); // v9.3: + totalDetik, bahas
    assert.equal(e.skor.length, 3); assert.equal(e.skor[0].nama, 'Mita');
    assert.ok(Array.isArray(e.triase.daftar)); assert.equal(e.soal[1].detik, 200);
  });
  it('evaluasiSesi sesi v8.0 lama (tanpa field v8.1): mode latihan, skor null, tempo memakai tempoUjian tingkat', () => {
    const se = sesiUjian(); ['mode', 'judul', 'ujianId', 'tempo', 'detikPerSoal', 'waktuPeserta'].forEach(k => delete se[k]);
    const e = J(L.evaluasiSesi(se));
    assert.deepEqual([e.mode, e.judul, e.skor, e.nSoal, e.nPeserta, e.menit], ['latihan', null, null, 4, 3, 30]);
    assert.equal(e.tempo.detikPerSoal, 126); assert.equal(e.tempo.nLewat, 0);
    assert.equal(e.peserta[0].nama, 'Mita');
  });
  it('evaluasiSesi: tempo null bila tidak ada detik tercatat; tempo longgar → 150', () => {
    const se = sesiUjian(); se.soal.forEach(q => { q.detik = 0; });
    assert.equal(L.evaluasiSesi(se).tempo, null);
    const s2 = sesiUjian(); delete s2.detikPerSoal; s2.tempo = 'longgar';
    assert.equal(L.evaluasiSesi(s2).tempo.detikPerSoal, 150);
  });
  it('rekapSesi ujian: 4–10 baris, judul + tanggal, rata-rata skor, baris per orang, topik dibahas', () => {
    const t = L.rekapSesi(sesiUjian()); const b = t.split('\n');
    assert.ok(b.length >= 4 && b.length <= 10, t);
    assert.equal(b[0], 'Try Out B 1–4 · 10 Nov 2026');
    assert.equal(b[1], '4 soal · rata-rata skor 58,3 · 1 dari 3 lulus (batas 60)');
    assert.deepEqual(b.slice(2, 5), ['Mita 100 lulus', 'Nora 50 (kurang 1 soal)', 'Aldi 25 (kurang 2 soal)']);
    assert.match(b[5], /^(Perlu dibahas: .+|Tidak ada topik yang perlu dibahas\.)$/);
  });
  it('rekapSesi latihan dengan 12 orang tetap ≤ 10 baris; skor tim (benar ÷ jawaban yang masuk) dan menit', () => {
    const nama = Array.from({ length: 12 }, (_, i) => 'P' + (i + 1));
    const so = so4(); const jw = so.map(x => { const o = {}; nama.forEach((n, i) => { o[n] = { o: i % 2 ? x.kunci : '-' }; }); return o; });
    const t = L.rekapSesi(sesiDari(so, jw, { peserta: nama })); const b = t.split('\n');
    assert.ok(b.length >= 4 && b.length <= 10, t);
    assert.equal(b[0], 'Latihan bersama · 10 Nov 2026'); assert.equal(b[1], '4 soal · 12 orang · 30 menit'); assert.equal(b[2], 'Skor tim 100% · 24 dari 24 jawaban benar · 24 kali tidak menjawab');
    assert.equal(L.rekapSesi(null), '');
  });
});

describe('v8.1 D: kode ujian (buatKode / bacaKode)', () => {
  it('Try Out B soal 1–40: kode ringkas set + rentang, bolak-balik utuh', () => {
    const k = UT.buatKode({ id: 'utabc123', judul: 'Try Out B 1–40', tingkat: 'B', menit: 84, soalIds: TO.slice(0, 40) });
    assert.match(k, /^UT1\.B84\.utabc123\.[A-Za-z0-9_-]*\.sTO-B-2026-11~1-40\.[0-9a-z]{3}$/);
    assert.ok(k.length < 80);
    assert.deepEqual(J(UT.bacaKode(k)), { id: 'utabc123', judul: 'Try Out B 1–40', tingkat: 'B', menit: 84, soalIds: TO.slice(0, 40), tidakDikenal: [] });
  });
  it('100 soal Try Out B (urutan asli) dan potongan tak berurutan tetap bolak-balik; hanya [A-Za-z0-9._~-], berakhir alfanumerik', () => {
    const k = UT.buatKode({ judul: 'Try Out B', tingkat: 'B', menit: 210, soalIds: TO });
    assert.match(k, /^[A-Za-z0-9._~-]+[A-Za-z0-9]$/); assert.ok(k.length <= 900);
    assert.deepEqual(J(UT.bacaKode(k).soalIds), TO);
    const campur = TO.slice(50, 60).concat(TO.slice(0, 5), [TO[99]]);
    assert.deepEqual(J(UT.bacaKode(UT.buatKode({ soalIds: campur, tingkat: 'B', menit: 30 })).soalIds), campur);
  });
  it('40 soal acak lintas kelompok (urutan acak) bolak-balik; 100 soal acak ≤ 900 karakter', () => {
    const semua = J(K.semuaSoal('B').map(x => x.id));
    let seed = 7; const acak = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const pilih = n => { const a = semua.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(acak() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };
    const p40 = pilih(40); assert.ok(new Set(p40.map(x => x.split('-')[0])).size >= 4);
    const k40 = UT.buatKode({ judul: 'Campuran', tingkat: 'B', menit: 84, soalIds: p40 });
    assert.match(k40, /\.l[A-Z]/); assert.deepEqual(J(UT.bacaKode(k40).soalIds), p40);
    for (let r = 0; r < 5; r++) {
      const p100 = pilih(100); const k = UT.buatKode({ id: 'ut' + 'x'.repeat(10), judul: 'Judul yang cukup panjang untuk ujian tim kita', tingkat: 'B', menit: 210, soalIds: p100 });
      assert.ok(k.length <= 900, 'panjang ' + k.length); assert.deepEqual(J(UT.bacaKode(k).soalIds), p100);
    }
  });
  it('bacaKode menerima URL utuh, URL %-encoded, dan teks WhatsApp yang memuat kode (tanda baca di akhir dibuang)', () => {
    const k = UT.buatKode({ id: 'utq', judul: 'Bagian 2', tingkat: 'B', menit: 84, soalIds: TO.slice(40, 80) });
    const harap = J(UT.bacaKode(k));
    assert.deepEqual(J(UT.bacaKode('https://contoh.id/ukp/index.html#ujiantim/' + k)), harap);
    assert.deepEqual(J(UT.bacaKode('https://contoh.id/%23ujiantim%2F' + encodeURIComponent(k).replace(/\./g, '%2E').replace(/-/g, '%2D'))), harap);
    assert.deepEqual(J(UT.bacaKode('Tautan: https://contoh.id/' + encodeURIComponent('#ujiantim/' + k) + ' ya')), harap);
    assert.deepEqual(J(UT.bacaKode('Kode ujian hari ini: ' + k + '.')), harap);
    assert.equal(harap.judul, 'Bagian 2'); assert.equal(harap.soalIds.length, 40);
  });
  it('sampah, kode terpotong, atau cek rusak → null tanpa melempar galat', () => {
    const k = UT.buatKode({ soalIds: TO.slice(0, 10), tingkat: 'B', menit: 21 });
    for (const x of [null, undefined, '', 'halo', 42, {}, 'UT1.', 'UT1.B84.utx..sTO~1-2.abc', k.slice(0, -1), k.slice(0, 20), k.replace('~1-10', '~1-11'), '#ujiantim/%E0%A4%A', 'UT1.Z84.u..l.000'])
      assert.equal(UT.bacaKode(x), null, String(x));
  });
  it('id yang tidak ada di bank dilaporkan di tidakDikenal (posisi tetap di soalIds)', () => {
    const ids = [TO[0], 'A1-999', TO[1], 'Q7-001', 'id aneh/ok'];
    const r = J(UT.bacaKode(UT.buatKode({ soalIds: ids, tingkat: 'B', menit: 10 })));
    assert.deepEqual(r.soalIds, ids); assert.deepEqual(r.tidakDikenal, ['A1-999', 'Q7-001', 'id aneh/ok']);
  });
  it('bawaan: tingkat profil, menit = soal × tempo, id baru "ut…"; tanpa soal → ""', () => {
    s.profil.tingkat = 'B';
    const r = UT.bacaKode(UT.buatKode({ soalIds: TO.slice(0, 10) }));
    assert.deepEqual([r.tingkat, r.menit, r.judul], ['B', 21, '']); assert.match(r.id, /^ut[0-9a-z]+$/);
    assert.equal(UT.buatKode({ soalIds: [] }), '');
  });
});

describe('v8.1 D: kode jawaban (buatJawaban / bacaJawaban / bacaBanyak)', () => {
  it('token UKPJ1 satu baris: huruf kecil = ragu, "-" kosong, "!" kosong + ragu; bolak-balik', () => {
    const t = UT.buatJawaban({ ujianId: 'utabc123', nama: 'Mita', jawaban: ['A', 'B', '-', 'D', null], ragu: [false, true, true, false, false], detik: 4980 });
    assert.match(t, /^UKPJ1\.utabc123\.Mita\.Ab!D-\.4980\.[0-9a-z]{3}$/);
    assert.deepEqual(J(UT.bacaJawaban(t)), { ujianId: 'utabc123', nama: 'Mita', jawaban: ['A', 'B', '-', 'D', '-'], ragu: [false, true, true, false, false], detik: 4980, terisi: 3, kosong: 2, nRagu: 2, panjang: 5, galat: null });
  });
  it('nama berspasi/non-ASCII di-hex; token ditemukan di tengah pesan WhatsApp', () => {
    const t = UT.buatJawaban({ ujianId: 'ut1', nama: 'Nora Sari', jawaban: 'ABCD'.split('') });
    assert.ok(!/\s/.test(t)); assert.match(t, /^UKPJ1\.ut1\.0[0-9a-f]+\./);
    const r = UT.bacaJawaban('[10/11 14.03] Nora: ini jawabanku ' + t + ' makasih');
    assert.deepEqual([r.nama, r.jawaban.join(''), r.detik, r.galat], ['Nora Sari', 'ABCD', null, null]);
    assert.equal(UT.bacaJawaban(UT.buatJawaban({ nama: 'Ayu Ñ', jawaban: ['A'] })).nama, 'Ayu Ñ');
  });
  it('token rusak (cek tidak cocok) → galat, jawaban tetap dibaca', () => {
    const t = UT.buatJawaban({ ujianId: 'ut1', nama: 'Mita', jawaban: ['A', 'B'] }).replace('.AB.', '.AC.');
    const r = UT.bacaJawaban(t); assert.equal(r.galat, 'Kode jawaban tidak utuh. Minta kirim ulang.'); assert.equal(r.jawaban.join(''), 'AC');
  });
  it('ketikan bebas: nama sebelum ":" pertama, huruf A–D tanpa peduli kapital, "?" ragu, "-"/"_" kosong, nomor dan tanda baca diabaikan', () => {
    const r = J(UT.bacaJawaban('Mita: ABCD-ab?c 1.A 2.B'));
    assert.equal(r.nama, 'Mita'); assert.equal(r.jawaban.join(''), 'ABCD-ABCAB');
    assert.deepEqual(r.ragu.map((x, i) => x ? i : -1).filter(i => i >= 0), [6]);
    assert.deepEqual([r.terisi, r.kosong, r.nRagu, r.panjang, r.galat, r.ujianId], [9, 1, 1, 10, null, null]);
    const b = J(UT.bacaJawaban('1. a\n2. b?\n3. _\n4) d'));
    assert.deepEqual([b.nama, b.jawaban.join(''), b.ragu[1]], [null, 'AB-D', true]);
    assert.equal(UT.bacaJawaban('Aldi abcd').nama, 'Aldi');
  });
  it('panjang salah: galat "Terbaca 37 jawaban, seharusnya 40"; jawaban ditambah "-" atau dipotong sampai n', () => {
    const r = UT.bacaJawaban('Mita: ' + 'A'.repeat(37), 40);
    assert.equal(r.galat, 'Terbaca 37 jawaban, seharusnya 40'); assert.equal(r.jawaban.length, 40); assert.equal(r.jawaban[39], '-'); assert.equal(r.panjang, 37); assert.equal(r.kosong, 3);
    const p = UT.bacaJawaban('Mita: ' + 'B'.repeat(42), 40); assert.equal(p.galat, 'Terbaca 42 jawaban, seharusnya 40'); assert.equal(p.jawaban.length, 40);
    assert.equal(UT.bacaJawaban('Mita: ' + 'C'.repeat(40), 40).galat, null);
    assert.equal(UT.bacaJawaban('halo semua', 40).galat, 'Tidak ada jawaban terbaca.');
  });
  it('bacaBanyak: token dan baris "Nama: …" bercampur, salinan WhatsApp, baris lanjutan', () => {
    const tNov = UT.buatJawaban({ ujianId: 'ut1', nama: 'Nora', jawaban: 'ABCD'.split(''), detik: 60 });
    const teks = ['[10/11 14.03] Mita: AB', 'cd?', '10/11/26 14.05 - Aldi: dcba', 'Nora: ' + tNov, '', 'Jeni: a-b?c', 'catatan tanpa titik dua', UT.buatJawaban({ nama: 'Mega', jawaban: ['A'] }) + ' ' + UT.buatJawaban({ nama: 'Nicky', jawaban: ['B'] })].join('\n');
    const r = J(UT.bacaBanyak(teks, 4));
    assert.deepEqual(r.map(x => x.nama), ['Mita', 'Aldi', 'Nora', 'Jeni', 'Mega', 'Nicky']);
    assert.deepEqual(r.map(x => x.jawaban.join('')), ['ABCD', 'DCBA', 'ABCD', 'A-BC', 'A---', 'B---']);
    assert.equal(r[0].ragu[3], true); assert.equal(r[2].detik, 60); assert.equal(r[3].ragu[2], true);
    assert.equal(r[4].galat, 'Terbaca 1 jawaban, seharusnya 4');
    assert.deepEqual(J(UT.bacaBanyak('', 4)), []);
  });
});

describe('v8.1 D: siklus Ujian tim (s.ujianTim)', () => {
  beforeEach(reset);
  const IDS = TO.slice(0, 5);
  it('susun: bentuk keadaan sesuai kontrak; satu ujian aktif; aktif() berupa salinan', () => {
    const id = UT.susun({ judul: 'Try Out B 1–5', tingkat: 'B', menit: 11, soalIds: IDS.concat([IDS[0]]), peserta: ['Nicky', 'Mita', 'mita', 'Nora'], cara: 'papan', sumber: { format: 'tryout', kode: 'TO-B-2026-11', bagian: '1–5' } });
    assert.match(id, /^ut[0-9a-z]+$/);
    const u = UT.aktif();
    assert.deepEqual(Object.keys(u).sort(), ['akhir', 'cara', 'detikPerSoal', 'detikSoal', 'dibuat', 'id', 'judul', 'jawaban', 'menit', 'mulai', 'peserta', 'posisi', 'ragu', 'soalIds', 'sumber', 'terkumpul', 'tingkat'].sort());
    assert.deepEqual([u.judul, u.tingkat, u.menit, u.detikPerSoal, u.cara, u.mulai, u.akhir, u.posisi], ['Try Out B 1–5', 'B', 11, 132, 'papan', null, null, 0]);
    assert.deepEqual(u.soalIds, IDS); assert.deepEqual(u.peserta, ['Nicky', 'Mita', 'Nora']);
    assert.deepEqual(u.sumber, { format: 'tryout', kode: 'TO-B-2026-11', bagian: '1–5' });
    u.peserta.push('X'); assert.equal(UT.aktif().peserta.length, 3);
    UT.susun({ soalIds: [TO[9]] }); assert.deepEqual(UT.aktif().soalIds, [TO[9]]); assert.equal(UT.aktif().menit, 2, 'bawaan menit = soal × 126 dtk');
    assert.equal(UT.aktif().peserta.length, 6, 'bawaan peserta = daftar latihan bersama');
    assert.equal(UT.susun({ soalIds: [] }), null);
  });
  it('mulai mengisi mulai/akhir sekali; tambahMenit menggeser akhir; aturPosisi dijepit', () => {
    UT.susun({ soalIds: IDS, menit: 10, peserta: ['Mita'] });
    const a = UT.mulai(); assert.ok(a.mulai > 0); assert.equal(a.akhir - a.mulai, 600000);
    const b = UT.mulai(); assert.equal(b.mulai, a.mulai);
    const c = UT.tambahMenit(5); assert.equal(c.menit, 15); assert.equal(c.akhir - c.mulai, 900000); assert.equal(c.detikPerSoal, 180);
    assert.equal(UT.aturPosisi(99), 4); assert.equal(UT.aturPosisi(-3), 0); assert.equal(UT.aturPosisi(2), 2);
  });
  it('catat/ragu/tambahDetik per orang dan soal; ringkas menghitung terisi, kosong, ragu, mengumpulkan, perSoal', () => {
    UT.susun({ soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita', 'Nora'] }); UT.mulai();
    assert.ok(UT.catat('mita', IDS[0], 'b')); UT.catat('Mita', IDS[1], 'C'); UT.catat('Mita', IDS[2], '-'); UT.catat('Nicky', IDS[0], 'A');
    UT.catat('Nicky', IDS[0], null);
    assert.equal(UT.catat('Zaki', IDS[0], 'A'), false); assert.equal(UT.catat('Mita', 'X-000', 'A'), false);
    UT.ragu('Mita', IDS[1], true); UT.ragu('Nora', IDS[1], true); UT.ragu('Nora', IDS[1], false);
    UT.tambahDetik(IDS[0], 50); UT.tambahDetik(IDS[0], 25.4);
    const u = UT.aktif(); assert.deepEqual(u.jawaban.Mita, { [IDS[0]]: 'B', [IDS[1]]: 'C', [IDS[2]]: '-' }); assert.deepEqual(u.jawaban.Nicky, {}); assert.equal(u.detikSoal[IDS[0]], 75.4);
    const r = J(UT.ringkas());
    assert.equal(r.n, 5);
    assert.deepEqual(r.perPeserta.Mita, { terisi: 2, kosong: 3, nRagu: 1, mengumpulkan: false });
    assert.deepEqual(r.perPeserta.Nora, { terisi: 0, kosong: 5, nRagu: 0, mengumpulkan: false });
    assert.deepEqual(r.perSoal[0], { id: IDS[0], nIsi: 1, nRagu: 0 }); assert.deepEqual(r.perSoal[1], { id: IDS[1], nIsi: 1, nRagu: 1 });
  });
  it('kumpul dari kode jawaban mengisi jawaban/ragu per soal dan terkumpul; nama baru ditambahkan; lepasKumpul membatalkan', () => {
    UT.susun({ soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita'] });
    const id = UT.aktif().id;
    const b = UT.bacaJawaban(UT.buatJawaban({ ujianId: id, nama: 'Aldi', jawaban: ['A', 'b', '-', 'D', 'C'], ragu: [0, 1, 0, 0, 0], detik: 500 }), 5);
    assert.ok(UT.kumpul(b.nama, { jawaban: b.jawaban, ragu: b.ragu, detik: b.detik, sumber: 'kode' }));
    const u = UT.aktif();
    assert.deepEqual(u.peserta, ['Nicky', 'Mita', 'Aldi']);
    assert.deepEqual(u.jawaban.Aldi, { [IDS[0]]: 'A', [IDS[1]]: 'B', [IDS[3]]: 'D', [IDS[4]]: 'C' }); assert.deepEqual(u.ragu.Aldi, { [IDS[1]]: 1 });
    assert.deepEqual([u.terkumpul.Aldi.jawaban.join(''), u.terkumpul.Aldi.detik, u.terkumpul.Aldi.sumber], ['AB-DC', 500, 'kode']);
    assert.equal(UT.ringkas().perPeserta.Aldi.mengumpulkan, true);
    assert.ok(UT.lepasKumpul('aldi')); assert.equal(UT.ringkas().perPeserta.Aldi.terisi, 0); assert.equal(UT.lepasKumpul('Aldi'), false);
  });
  it('nilai → sesi mode ujian (semua soal, k ragu, b, detik), jawabanBersama m "ujian", pemimpin tercatat sekali di statistik; panggilan kedua → null', () => {
    UT.susun({ judul: 'Ujian A', soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita', 'Nora'] }); UT.mulai();
    const k = IDS.map(id => K.soal(id).kunci); const w = k.map(x => x === 'A' ? 'B' : 'A');
    UT.catat('Nicky', IDS[0], k[0]); UT.catat('Nicky', IDS[1], w[1]); UT.ragu('Nicky', IDS[0], true);
    UT.kumpul('Mita', { jawaban: k, ragu: [], detik: 420, sumber: 'ketik' });
    UT.tambahDetik(IDS[0], 90);
    const utId = UT.aktif().id;
    const se = UT.nilai();
    assert.equal(UT.aktif(), null); assert.equal(s.ujianTim, null);
    assert.deepEqual([se.mode, se.judul, se.ujianId, se.tempo, se.detikPerSoal, se.anggaranDetik, se.tingkat], ['ujian', 'Ujian A', utId, 'ujian', 120, 600, 'B']);
    assert.ok(se.selesai >= se.mulai); assert.deepEqual(se.peserta, ['Nicky', 'Mita', 'Nora']); assert.equal(se.soal.length, 5);
    assert.deepEqual(se.soal[0].jawaban.Nicky, { o: k[0], k: 'ragu', b: 1 }); assert.deepEqual(se.soal[1].jawaban.Nicky, { o: w[1], k: null, b: 0 });
    assert.deepEqual(se.soal[2].jawaban.Nora, { o: '-', k: null, b: 0 }); assert.equal(se.soal[0].detik, 90);
    assert.deepEqual(se.waktuPeserta, { Mita: 420 }); assert.deepEqual(se.bahas, {});
    assert.equal(L.sesiBersamaDari(se.id).mode, 'ujian');
    const jb = s.jawabanBersama.filter(x => x.sesi === se.id);
    assert.equal(jb.length, 10, 'Nicky dan Mita × 5 soal; Nora tanpa jawaban tidak ditulis'); assert.ok(jb.every(x => x.m === 'ujian'));
    assert.equal(s.jawaban.length, 2); assert.ok(s.jawaban.every(x => x.konteks === 'simulasi'));
    assert.equal(s.jawaban[0].keyakinan, 'ragu');
    assert.equal(UT.nilai(), null); assert.equal(s.jawaban.length, 2); assert.equal(s.sesiBersama.length, 1);
    const sk = J(L.skorUjian(L.sesiBersamaDari(se.id)));
    assert.deepEqual(sk.map(x => x.nama + ':' + x.benar), ['Nicky:1', 'Mita:5', 'Nora:0']);
  });
  it('nilai: pemimpin tidak dicatat ulang bila s.simulasi sudah memuat percobaan dengan tim.ujianId yang sama', () => {
    UT.susun({ soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita'] });
    s.simulasi.push({ id: 'sim-1', format: 'tim', tim: { ujianId: UT.aktif().id, judul: 'x', nama: 'Nicky' }, selesai: Date.now() });
    UT.catat('Nicky', IDS[0], 'A'); UT.nilai();
    assert.equal(s.jawaban.length, 0);
  });
  it('nilai({ hanyaYangMengumpulkan }) mengeluarkan peserta tanpa satu pun jawaban', () => {
    UT.susun({ soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita', 'Nora'] });
    UT.catat('Mita', IDS[0], 'A');
    const se = UT.nilai({ hanyaYangMengumpulkan: true });
    assert.deepEqual(se.peserta, ['Mita']); assert.deepEqual(Object.keys(se.soal[0].jawaban), ['Mita']);
  });
  it('batal mengosongkan ujian aktif; fungsi lain aman tanpa ujian aktif', () => {
    UT.susun({ soalIds: IDS, peserta: ['Mita'] }); assert.equal(UT.batal(), true); assert.equal(UT.aktif(), null);
    assert.equal(UT.catat('Mita', IDS[0], 'A'), false); assert.equal(UT.ringkas(), null); assert.equal(UT.mulai(), null); assert.equal(UT.nilai(), null); assert.equal(UT.kumpul('Mita', {}), false);
  });
  it('keadaan ujian tim bertahan normal() (simpan/muat) dan bentuk rusak menjadi null', () => {
    UT.susun({ soalIds: IDS, peserta: ['Mita'] }); UT.catat('Mita', IDS[0], 'A');
    const n = UKP.store.normal(J(s)); assert.equal(n.ujianTim.jawaban.Mita[IDS[0]], 'A');
    assert.equal(UKP.store.normal({ ujianTim: { id: 'x' } }).ujianTim, null);
    assert.equal(UKP.store.normal({ ujianTim: 'teks' }).ujianTim, null);
    const d = UKP.store.normal({}); assert.deepEqual([d.ujianTim, d.lembarJawab, d.bersamaAktif], [null, null, null]);
  });
});

describe('v8.1 D: lembar jawab pribadi', () => {
  beforeEach(reset);
  it('simpan merapikan (n, jawaban A–D/-, ragu boolean), ambil berupa salinan, hapus → null', () => {
    assert.equal(L.lembarJawab.ambil(), null);
    const r = L.lembarJawab.simpan({ ujianId: 'ut1', judul: ' Try Out  B ', nama: ' Mita ', n: 4, jawaban: ['a', 'X', 'C'], ragu: [0, 1] });
    assert.deepEqual(J(r), { ujianId: 'ut1', judul: 'Try Out B', nama: 'Mita', n: 4, jawaban: ['A', '-', 'C', '-'], ragu: [false, true, false, false], dibuat: r.dibuat });
    const a = L.lembarJawab.ambil(); a.jawaban[0] = 'D'; assert.equal(L.lembarJawab.ambil().jawaban[0], 'A');
    assert.equal(UKP.store.normal(J(s)).lembarJawab.n, 4);
    assert.equal(L.lembarJawab.hapus(), true); assert.equal(L.lembarJawab.ambil(), null);
    assert.equal(L.lembarJawab.simpan({ jawaban: ['A', 'B'] }).n, 2);
  });
});
