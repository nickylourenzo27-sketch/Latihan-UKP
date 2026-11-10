/* Uji latihan bersama v7.9/v8.0 (js/learn.js): catatJawabanBersama (keyakinan k, sesi), pesertaBersama, dokPeserta, normalisasi store,
   sesi bersama (mulai/catat/akhiri, pemangkasan 60), evaluasiSesi, TIM_BAWAAN.
   Memuat js/core.js + js/learn.js di konteks vm dengan modul tiruan "X1". Jalankan: node --test test/ */
'use strict';
const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js']);
const L = UKP.belajar;
const soalX = (i, topik, kunci) => ({ id: 'X1-' + String(i).padStart(3, '0'), kode: 'X1', topik, kunci: kunci || 'B', stem: 'Soal ' + i, opsi: { A: 'a', B: 'b', C: 'c', D: 'd' } });
const SOAL = [soalX(1, 'X1.1'), soalX(2, 'X1.1', 'C'), soalX(3, 'X1.2', 'A'), soalX(4, 'X1.2', 'D')];
UKP.register({ meta: { kode: 'X1', nama: 'Kelompok uji' }, topik: [{ id: 'X1.1', judul: 'T1' }, { id: 'X1.2', judul: 'T2' }], soal: SOAL });
const s = UKP.store.get();
const HARI = 86400000;

function reset(peserta, nama) {
  s.jawaban.length = 0; s.kartuOtomatis.length = 0; s.jawabanBersama = []; s.bersama = { aktif: true, peserta: peserta || ['Nicky', 'Mia', 'Novia'] }; s.profil.nama = nama == null ? 'Nicky' : nama;
}

describe('bawaan store', () => {
  it('DEFAULT memuat bersama dan jawabanBersama; normal() merapikan data lama dan rusak', () => {
    const n = UKP.store.normal({});
    assert.deepEqual(JSON.parse(JSON.stringify(n.bersama)), { aktif: false, peserta: [] });
    assert.deepEqual(JSON.parse(JSON.stringify(n.jawabanBersama)), []);
    const r = UKP.store.normal({ bersama: { aktif: 'ya', peserta: ['Mia', ' mia ', 'A\u0007b', 'x'.repeat(25), 3, 'Novia'] }, jawabanBersama: [1, { p: 'Mia', s: 'X1-001' }, { s: 'X1-002' }] });
    assert.equal(r.bersama.aktif, false);
    assert.deepEqual(JSON.parse(JSON.stringify(r.bersama.peserta)), ['Mia', 'A b', 'Novia']);
    assert.equal(r.jawabanBersama.length, 1);
  });
  it('siapBersama memperbaiki store tanpa field', () => {
    const t = { profil: {} }; L.siapBersama(t);
    assert.equal(t.bersama.aktif, false); assert.ok(Array.isArray(t.bersama.peserta)); assert.ok(Array.isArray(t.jawabanBersama));
  });
});

describe('cekNamaPeserta', () => {
  it('menolak kosong, ganda (tanpa peduli kapital), terlalu panjang, dan lebih dari 12', () => {
    assert.ok(L.cekNamaPeserta('  ', []).galat);
    assert.ok(L.cekNamaPeserta('mia', ['Mia']).galat);
    assert.ok(L.cekNamaPeserta('x'.repeat(25), []).galat);
    assert.ok(L.cekNamaPeserta('Baru', Array.from({ length: 12 }, (_, i) => 'P' + i)).galat);
    const ok = L.cekNamaPeserta('  Novia   Sari ', ['Mia']); assert.equal(ok.galat, null); assert.equal(ok.nama, 'Novia Sari');
  });
});

describe('catatJawabanBersama', () => {
  beforeEach(() => reset());
  it('menulis satu entri per peserta dengan field kontrak; "-" tercatat b 0', () => {
    const n = L.catatJawabanBersama(SOAL[0], { Nicky: 'B', Mia: 'A', Novia: '-' }, 42.6);
    assert.equal(n, 3); assert.equal(s.jawabanBersama.length, 3);
    const [a, b, c] = s.jawabanBersama;
    assert.deepEqual(Object.keys(a).sort(), ['b', 'd', 'k', 'kd', 'm', 'o', 'p', 's', 'sesi', 't', 'w']);
    assert.equal(a.p, 'Nicky'); assert.equal(a.s, 'X1-001'); assert.equal(a.kd, 'X1'); assert.equal(a.k, null); assert.equal(a.sesi, null); assert.equal(a.t, 'X1.1'); assert.equal(a.o, 'B'); assert.equal(a.b, 1); assert.equal(a.d, 43); assert.equal(a.m, 'latih');
    assert.equal(b.o, 'A'); assert.equal(b.b, 0);
    assert.equal(c.o, '-'); assert.equal(c.b, 0);
    assert.ok(Math.abs(a.w - Date.now()) < 5000);
  });
  it('detik dibatasi 0–3600 dan opsi tak sah menjadi "-"', () => {
    L.catatJawabanBersama(SOAL[0], { Mia: 'x', Novia: 'b' }, 99999);
    assert.equal(s.jawabanBersama[0].o, '-'); assert.equal(s.jawabanBersama[0].d, 3600);
    assert.equal(s.jawabanBersama[1].o, 'B'); assert.equal(s.jawabanBersama[1].b, 1);
  });
  it('pemimpin (nama sama dengan profil, tanpa peduli kapital) juga tercatat di s.jawaban, sekali', () => {
    s.profil.nama = ' nicky ';
    L.catatJawabanBersama(SOAL[1], { Nicky: 'A', Mia: 'C' }, 10);
    assert.equal(s.jawaban.length, 1);
    assert.equal(s.jawaban[0].soal, 'X1-002'); assert.equal(s.jawaban[0].opsi, 'A'); assert.equal(s.jawaban[0].konteks, 'latih'); assert.equal(s.jawaban[0].benar, false);
  });
  it('pemimpin yang tidak menjawab ("-") tidak menambah s.jawaban; peserta lain tidak pernah masuk s.jawaban', () => {
    L.catatJawabanBersama(SOAL[0], { Nicky: '-', Mia: 'B', Novia: 'B' }, 5);
    assert.equal(s.jawaban.length, 0);
    s.profil.nama = 'Rina';
    L.catatJawabanBersama(SOAL[0], { Nicky: 'B', Mia: 'B' }, 5);
    assert.equal(s.jawaban.length, 0);
  });
  it('memangkas entri lebih dari 60 hari lalu menyisakan 4000 terbaru', () => {
    const kini = Date.now();
    for (let i = 0; i < 10; i++) s.jawabanBersama.push({ p: 'Mia', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: 1, w: kini - 61 * HARI, m: 'latih' });
    for (let i = 0; i < 4005; i++) s.jawabanBersama.push({ p: 'Mia', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: i, w: kini - HARI, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Novia: 'B' }, 1);
    assert.equal(s.jawabanBersama.length, 4000);
    assert.ok(s.jawabanBersama.every(e => e.w >= kini - 60 * HARI));
    assert.equal(s.jawabanBersama[s.jawabanBersama.length - 1].p, 'Novia');
    assert.equal(s.jawabanBersama[0].d, 6); // 4005 + 1 entri baru → 6 terlama dibuang
  });
});

describe('pesertaBersama', () => {
  beforeEach(() => reset());
  it('menggabung daftar peserta (tanpa jawaban ikut, n 0) dan riwayat; urut menurut daftar lalu nama', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Zaki', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'B', b: 1, d: 1, w: kini - 20 * HARI, m: 'latih' });
    s.jawabanBersama.push({ p: 'Ayu', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: 1, w: kini - 20 * HARI, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Mia: 'B', Nicky: 'A' }, 3);
    const r = L.pesertaBersama();
    assert.deepEqual(JSON.parse(JSON.stringify(r.map(x => x.nama))), ['Nicky', 'Mia', 'Novia', 'Ayu', 'Zaki']);
    const mia = r[1]; assert.equal(mia.n, 1); assert.equal(mia.benar, 1); assert.equal(mia.n7, 1); assert.equal(mia.benar7, 1); assert.ok(mia.terakhir > 0);
    const novia = r[2]; assert.equal(novia.n, 0); assert.equal(novia.terakhir, null);
    const zaki = r[4]; assert.equal(zaki.n, 1); assert.equal(zaki.n7, 0);
    assert.deepEqual(Object.keys(mia).sort(), ['benar', 'benar7', 'n', 'n7', 'nama', 'terakhir']);
  });
});

describe('dokPeserta', () => {
  beforeEach(() => reset());
  it('skema sama dengan ringkasan tim; jawaban terbaru dulu, ≤ 400; topik lemah n ≥ 3', () => {
    const kini = Date.now();
    for (let i = 0; i < 450; i++) s.jawabanBersama.push({ p: 'Mia', s: SOAL[i % 4].id, k: 'X1', t: SOAL[i % 4].topik, o: i % 4 === 2 ? 'A' : 'D', b: i % 4 === 2 || i % 4 === 3 ? 1 : 0, d: 30, w: kini - (450 - i) * 60000, m: 'latih' });
    s.jawabanBersama.push({ p: 'Mia', s: 'Q9-001', k: 'Q9', t: 'Q9.4', o: 'C', b: 0, d: 9, w: kini, m: 'latih' });
    s.profil.tingkat = 'B';
    const d = L.dokPeserta('mia');
    assert.equal(d.nama, 'Mia'); assert.equal(d.tingkat, 'B'); assert.equal(d.sumber, 'lokal'); assert.equal(d.versiApp, String(UKP.versi || ''));
    assert.equal(d.diperbarui, kini);
    assert.deepEqual(Object.keys(d.latihan).filter(k => ['total', 'benar', 'akurasi7', 'sesi7', 'terakhir', 'perKelompok', 'perTopikLemah'].includes(k)).sort(), ['akurasi7', 'benar', 'perKelompok', 'perTopikLemah', 'sesi7', 'terakhir', 'total']);
    assert.equal(d.latihan.total, 451); assert.equal(d.latihan.benar, 224);
    assert.ok(d.latihan.akurasi7 >= 0 && d.latihan.akurasi7 <= 100);
    assert.equal(d.latihan.perKelompok.X1.n, 450); assert.equal(d.latihan.perKelompok.Q9.n, 1);
    assert.equal(d.latihan.perTopikLemah[0].topik, 'X1.1'); assert.equal(d.latihan.perTopikLemah[0].benar, 0);
    assert.ok(d.latihan.perTopikLemah.every(t => t.n >= 3)); assert.ok(d.latihan.perTopikLemah.length <= 5);
    assert.deepEqual(JSON.parse(JSON.stringify(d.simulasi)), []);
    assert.equal(d.hadir.rangkaian, 0); assert.ok(d.hadir.hari14 >= 1);
    assert.equal(d.jawaban.length, 400);
    assert.equal(d.jawaban[0].s, 'Q9-001'); assert.equal(d.jawaban[0].t, 'Q9.4');
    for (let i = 1; i < d.jawaban.length; i++) assert.ok(d.jawaban[i - 1].w >= d.jawaban[i].w);
    assert.deepEqual(Object.keys(d.jawaban[0]).sort(), ['b', 'd', 'k', 'm', 'o', 's', 't', 'w']);
    assert.equal(d.jawaban[0].k, null);
    assert.equal(d.jawaban[0].m, 'latih');
  });
  it('peserta terdaftar tanpa jawaban → dokumen kosong; nama tak dikenal → null', () => {
    const d = L.dokPeserta('Novia');
    assert.equal(d.latihan.total, 0); assert.equal(d.latihan.akurasi7, null); assert.equal(d.jawaban.length, 0); assert.equal(d.diperbarui, null);
    assert.equal(L.dokPeserta('Tidak Ada'), null);
    assert.equal(L.dokPeserta(''), null);
  });
  it('jawaban bersama tidak ikut ringkasan tim (s.jawaban tetap kosong untuk peserta lain)', () => {
    s.profil.nama = 'Rina';
    L.catatJawabanBersama(SOAL[0], { Mia: 'B', Novia: 'A' }, 3);
    assert.equal(s.jawaban.length, 0);
  });
});

describe('v8.0: keyakinan dan sesi pada catatJawabanBersama', () => {
  beforeEach(() => reset());
  it('bentuk baru { o, k } mencatat k dan sesi; keyakinan dibuang untuk "-"; bentuk lama tetap diterima', () => {
    L.catatJawabanBersama(SOAL[0], { Nicky: { o: 'B', k: 'yakin' }, Mia: { o: 'A', k: 'ragu' }, Novia: { o: '-', k: 'yakin' } }, 12, { sesi: 'sb-1' });
    const [a, b, c] = s.jawabanBersama;
    assert.deepEqual([a.o, a.k, a.b, a.sesi], ['B', 'yakin', 1, 'sb-1']);
    assert.deepEqual([b.o, b.k, b.b], ['A', 'ragu', 0]);
    assert.deepEqual([c.o, c.k], ['-', null]);
    L.catatJawabanBersama(SOAL[0], { Mia: 'C', Novia: { opsi: 'b', keyakinan: 'menebak' }, Jessie: { o: 'D', k: 'asal' } }, 3);
    const [d, e, f] = s.jawabanBersama.slice(-3);
    assert.deepEqual([d.o, d.k, d.sesi], ['C', null, null]);
    assert.deepEqual([e.o, e.k, e.b], ['B', 'menebak', 1]);
    assert.equal(f.k, null);
  });
  it('pemimpin tercatat di s.jawaban dengan keyakinan', () => {
    L.catatJawabanBersama(SOAL[1], { Nicky: { o: 'A', k: 'yakin' }, Mia: { o: 'C', k: 'ragu' } }, 10, { sesi: 'sb-2' });
    assert.equal(s.jawaban.length, 1); assert.equal(s.jawaban[0].opsi, 'A'); assert.equal(s.jawaban[0].keyakinan, 'yakin');
  });
  it('dokPeserta membawa k; entri v7.9 (kode di k) tetap terbaca sebagai kode', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Mia', s: 'Q9-001', k: 'Q9', t: 'Q9.4', o: 'C', b: 0, d: 9, w: kini - 1000, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Mia: { o: 'A', k: 'yakin' } }, 5);
    const d = L.dokPeserta('Mia');
    assert.equal(d.jawaban[0].k, 'yakin'); assert.equal(d.jawaban[1].k, null);
    assert.equal(d.latihan.perKelompok.Q9.n, 1); assert.equal(d.latihan.perKelompok.X1.n, 1);
  });
  it('normal() memindahkan kode lama dari k ke kd dan merapikan sesiBersama', () => {
    const r = UKP.store.normal({ jawabanBersama: [{ p: 'Mia', s: 'X1-001', k: 'X1', o: 'A' }, { p: 'Mia', s: 'X1-001', kd: 'X1', k: 'ragu', o: 'A' }], sesiBersama: [{ id: 'sb-1', peserta: [], soal: [] }, { id: 2 }, 'x'] });
    assert.equal(r.jawabanBersama[0].kd, 'X1'); assert.equal(r.jawabanBersama[0].k, null); assert.equal(r.jawabanBersama[1].k, 'ragu');
    assert.equal(r.sesiBersama.length, 1);
    assert.ok(Array.isArray(UKP.store.normal({}).sesiBersama));
  });
});

describe('v8.0: sesi latihan bersama', () => {
  beforeEach(() => { reset(['Nicky', 'Mia', 'Novia']); s.sesiBersama = []; s.profil.tingkat = 'B'; });
  it('mulai → catat → akhiri; sesi tanpa soal dihapus saat berakhir', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mia', 'mia', 'Novia'], SOAL.map(x => x.id), 600);
    assert.match(id, /^sb-\d+/);
    const x = s.sesiBersama[0];
    assert.deepEqual(JSON.parse(JSON.stringify(x.peserta)), ['Nicky', 'Mia', 'Novia']);
    assert.deepEqual([x.tingkat, x.anggaranDetik, x.selesai, x.sumber], ['B', 600, null, 'latih']);
    assert.ok(L.catatSoalSesi(id, SOAL[0], { Nicky: { opsi: 'B', keyakinan: 'yakin', benar: true }, Mia: { opsi: 'A', keyakinan: 'yakin', benar: false } }, 41.6));
    const q = s.sesiBersama[0].soal[0];
    assert.deepEqual([q.id, q.kode, q.topik, q.kunci, q.detik], ['X1-001', 'X1', 'X1.1', 'B', 42]);
    assert.deepEqual(JSON.parse(JSON.stringify(q.jawaban)), { Nicky: { o: 'B', k: 'yakin', b: 1 }, Mia: { o: 'A', k: 'yakin', b: 0 }, Novia: { o: '-', k: null, b: 0 } });
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'C' }, 1); // soal sama diganti
    assert.equal(s.sesiBersama[0].soal.length, 1); assert.equal(s.sesiBersama[0].soal[0].jawaban.Nicky.o, 'C');
    const akhir = L.akhiriSesiBersama(id);
    assert.ok(akhir.selesai >= akhir.mulai); assert.equal(L.sesiBersamaDari(id).soal.length, 1);
    const kosong = L.mulaiSesiBersama(['Mia'], [], 0);
    assert.equal(L.akhiriSesiBersama(kosong), null); assert.equal(L.sesiBersamaDari(kosong), null);
    assert.equal(L.sesiBersama().length, 1);
    assert.equal(L.hapusSesiBersama(id), true); assert.equal(L.hapusSesiBersama(id), false); assert.equal(s.sesiBersama.length, 0);
  });
  it('sesiBersama() terbaru dulu berupa salinan; maksimal 60 sesi (terlama dibuang)', () => {
    for (let i = 0; i < 62; i++) s.sesiBersama.push({ id: 'sb-x' + i, mulai: i, selesai: i + 1, tingkat: 'B', peserta: ['Mia'], anggaranDetik: 150, soal: [{ id: 'X1-001', kunci: 'B', jawaban: {} }], sumber: 'latih' });
    const id = L.mulaiSesiBersama(['Mia'], ['X1-001'], 150);
    assert.equal(s.sesiBersama.length, 60);
    assert.equal(s.sesiBersama[0].id, 'sb-x3'); assert.equal(s.sesiBersama[59].id, id);
    const d = L.sesiBersama(); assert.equal(d[0].id, id);
    d[0].peserta.push('Zaki'); assert.equal(s.sesiBersama[59].peserta.length, 1);
  });
  it('evaluasiSesi: peringkat, yakin tapi salah, tersulit, topik tim', () => {
    const J = (o, k) => ({ o, k });
    const sesi = { id: 'sb-9', mulai: 0, selesai: 12 * 60000, tingkat: 'B', peserta: ['Nicky', 'Mia', 'Novia'], anggaranDetik: 600, sumber: 'latih', soal: [
      { id: 'X1-001', kode: 'X1', topik: 'X1.1', kunci: 'B', detik: 30, jawaban: { Nicky: J('B', 'yakin'), Mia: J('A', 'yakin'), Novia: J('B', 'ragu') } },
      { id: 'X1-002', kode: 'X1', topik: 'X1.1', kunci: 'C', detik: 30, jawaban: { Nicky: J('A', 'ragu'), Mia: J('C', 'menebak'), Novia: J('-', null) } },
      { id: 'X1-003', kode: 'X1', topik: 'X1.2', kunci: 'A', detik: 30, jawaban: { Nicky: J('A', 'yakin'), Mia: J('A', null), Novia: J('A', 'yakin') } },
      { id: 'X1-004', kode: 'X1', topik: 'X1.2', kunci: 'D', detik: 30, jawaban: { Nicky: J('D', null), Mia: J('B', 'yakin') } },
    ] };
    const e = L.evaluasiSesi(sesi);
    assert.deepEqual([e.nSoal, e.nPeserta, e.menit], [4, 3, 12]);
    assert.deepEqual(e.peserta.map(p => p.nama + ':' + p.benar), ['Nicky:3', 'Mia:2', 'Novia:2']);
    const mia = e.peserta[1];
    assert.deepEqual([mia.dijawab, mia.kosong, mia.akurasi, mia.yakinSalah, mia.raguBenar, mia.menebakBenar], [4, 0, 50, 2, 0, 1]);
    const novia = e.peserta[2];
    assert.deepEqual([novia.dijawab, novia.kosong, novia.akurasi, novia.raguBenar], [2, 2, 50, 1]);
    assert.equal(novia.topikLemah.length, 2);
    assert.equal(e.soal[3].perPeserta.Novia.o, '-'); assert.deepEqual([e.soal[3].nBenar, e.soal[3].nSalah, e.soal[3].nKosong], [1, 1, 1]);
    assert.deepEqual(e.tersulit.map(q => q.id), ['X1-002', 'X1-004', 'X1-001']);
    assert.ok(!e.tersulit.some(q => q.id === 'X1-003'));
    assert.deepEqual(JSON.parse(JSON.stringify(e.topikTim)), [{ topik: 'X1.1', n: 6, benar: 3, akurasi: 50 }, { topik: 'X1.2', n: 6, benar: 4, akurasi: 67 }]);
    // v8.1: keluaran v8.0 + mode, judul, tempo, skor, triase
    assert.deepEqual(JSON.parse(JSON.stringify(L.evaluasiSesi(null))), { nSoal: 0, nPeserta: 0, menit: 0, peserta: [], soal: [], tersulit: [], topikTim: [],
      mode: 'latihan', judul: null, tempo: null, skor: null, triase: { daftar: [], nDikuasai: 0, perKelas: { dikuasai: 0, rapuh: 0, terbelah: 0, tersandung: 0 } } });
  });
  it('TIM_BAWAAN berisi enam nama tim', () => {
    assert.deepEqual(JSON.parse(JSON.stringify(L.TIM_BAWAAN)), ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi']);
  });
});

describe('v8.1: tempo, info sesi, lanjutkan sesi bersama', () => {
  beforeEach(() => { reset(['Nicky', 'Mia', 'Novia']); s.sesiBersama = []; s.profil.tingkat = 'B'; s.bersamaAktif = null; delete s.bersama.tempo; });
  const J = v => JSON.parse(JSON.stringify(v));
  it('tanpa UKP.ref (format ujian tak dimuat): tempoUjian cadangan 126, BATAS_LULUS 60; tempoBersama bawaan ujian', () => {
    assert.equal(L.tempoUjian('B'), 126); assert.equal(L.BATAS_LULUS, 60);
    assert.deepEqual(J(L.tempoBersama()), { mode: 'ujian', detik: 126 });
  });
  it('normal(): bersama.tempo longgar dipertahankan, nilai lain dibuang (tanpa field = ujian)', () => {
    assert.equal(UKP.store.normal({ bersama: { aktif: true, peserta: [], tempo: 'longgar' } }).bersama.tempo, 'longgar');
    assert.equal('tempo' in UKP.store.normal({ bersama: { aktif: true, peserta: [], tempo: 'kilat' } }).bersama, false);
  });
  it('mulaiSesiBersama dengan info: tempo, detikPerSoal, mode, judul, ujianId, bahas, waktuPeserta; anggaran bawaan soal × detikPerSoal', () => {
    const id = L.mulaiSesiBersama(['Mia'], ['X1-001', 'X1-002'], 0, { tempo: 'ujian', detikPerSoal: 126, mode: 'ujian', judul: '  Ujian   kecil ', ujianId: 'ut9' });
    const x = L.sesiBersamaDari(id);
    assert.deepEqual([x.tempo, x.detikPerSoal, x.mode, x.judul, x.ujianId, x.anggaranDetik], ['ujian', 126, 'ujian', 'Ujian kecil', 'ut9', 252]);
    assert.deepEqual(J(x.bahas), {}); assert.deepEqual(J(x.waktuPeserta), {});
    const y = L.sesiBersamaDari(L.mulaiSesiBersama(['Mia'], ['X1-001'], 0, { tempo: 'longgar' }));
    assert.deepEqual([y.tempo, y.detikPerSoal, y.mode, y.judul, y.ujianId, y.anggaranDetik], ['longgar', 150, 'latihan', null, null, 150]);
  });
  it('pemanggilan lama (tanpa info) tetap sah: rekaman v8.0 tanpa field v8.1', () => {
    const x = L.sesiBersamaDari(L.mulaiSesiBersama(['Mia'], ['X1-001'], 0));
    assert.equal(x.anggaranDetik, 150); assert.ok(!('mode' in x) && !('tempo' in x));
    assert.equal(L.evaluasiSesi(x).mode, 'latihan');
  });
  it('simpanBersamaAktif / bersamaAktif: salinan sah selama sesi berjalan; null bila sesi selesai, hilang, atau > 24 jam', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mia'], ['X1-001', 'X1-002'], 300);
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'B', Mia: 'A' }, 20);
    const r = L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001', 'X1-002'], idx: 1, sisaDetik: 250.4, anggaranDetik: 300, tempo: 'longgar', detikPerSoal: 150, ulang: false, draf: { soalId: 'X1-002', jb: { Nicky: 'C' }, yb: { Nicky: 'yakin' }, detikSoal: 12 } });
    assert.deepEqual([r.idx, r.sisaDetik, r.tempo, r.detikPerSoal, r.ulang, r.draf.jb.Nicky], [1, 250, 'longgar', 150, false, 'C']);
    assert.ok(r.diperbarui > 0);
    const a = L.bersamaAktif(); assert.equal(a.sesiId, id); a.idx = 9; assert.equal(L.bersamaAktif().idx, 1);
    assert.equal(UKP.store.normal(J(s)).bersamaAktif.sesiId, id);
    s.bersamaAktif.diperbarui = Date.now() - 25 * 3600000; assert.equal(L.bersamaAktif(), null);
    s.bersamaAktif.diperbarui = Date.now(); L.akhiriSesiBersama(id); assert.equal(L.bersamaAktif(), null);
    L.simpanBersamaAktif({ sesiId: 'sb-tidak-ada', soalIds: [] }); assert.equal(L.bersamaAktif(), null);
    assert.equal(L.simpanBersamaAktif(null), null); assert.equal(s.bersamaAktif, null);
  });
  it('normal(): lembarJawab / bersamaAktif / ujianTim berbentuk rusak menjadi null; data v8.0 tanpa field tetap utuh', () => {
    const n = UKP.store.normal({ lembarJawab: { jawaban: 'x' }, bersamaAktif: { sesiId: 5 }, ujianTim: [], sesiBersama: [{ id: 'sb-1', peserta: ['Mia'], soal: [] }] });
    assert.deepEqual([n.lembarJawab, n.bersamaAktif, n.ujianTim], [null, null, null]); assert.equal(n.sesiBersama.length, 1);
  });
  it('triaseSoal tanpa bank (soal { id, kunci }) dan urutanBahas sesi v8.0', () => {
    const t = L.triaseSoal({ id: 'X1-001', kunci: 'B' }, { Nicky: { o: 'B', k: 'yakin' }, Mia: { o: 'A', k: 'yakin' }, Novia: 'B' }, { urutan: ['Nicky', 'Mia', 'Novia'] });
    assert.deepEqual([t.kelas, t.penjelas, t.saran, t.alasan, J(t.yakinSalah)], ['terbelah', 'Nicky', 'Nicky jelaskan ke Mia', null, ['Mia']]);
    const sesi = { id: 'sb-x', peserta: ['Nicky', 'Mia'], soal: [{ id: 'X1-001', kunci: 'B', jawaban: { Nicky: { o: 'B' }, Mia: { o: 'B' } } }, { id: 'X1-002', kunci: 'C', jawaban: { Nicky: { o: 'A' }, mia: { o: 'C' } } }] };
    const u = L.urutanBahas(sesi);
    assert.deepEqual([u.daftar.length, u.daftar[0].id, u.daftar[0].penjelas, u.nDikuasai], [1, 'X1-002', 'Mia', 1]);
  });
});
