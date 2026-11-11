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
  s.jawaban.length = 0; s.kartuOtomatis.length = 0; s.jawabanBersama = []; s.bersama = { aktif: true, peserta: peserta || ['Nicky', 'Mita', 'Nora'] }; s.profil.nama = nama == null ? 'Nicky' : nama;
}

describe('bawaan store', () => {
  it('DEFAULT memuat bersama dan jawabanBersama; normal() merapikan data lama dan rusak', () => {
    const n = UKP.store.normal({});
    assert.deepEqual(JSON.parse(JSON.stringify(n.bersama)), { aktif: false, peserta: [] });
    assert.deepEqual(JSON.parse(JSON.stringify(n.jawabanBersama)), []);
    const r = UKP.store.normal({ bersama: { aktif: 'ya', peserta: ['Mita', ' mita ', 'A\u0007b', 'x'.repeat(25), 3, 'Nora'] }, jawabanBersama: [1, { p: 'Mita', s: 'X1-001' }, { s: 'X1-002' }] });
    assert.equal(r.bersama.aktif, false);
    assert.deepEqual(JSON.parse(JSON.stringify(r.bersama.peserta)), ['Mita', 'A b', 'Nora']);
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
    assert.ok(L.cekNamaPeserta('mita', ['Mita']).galat);
    assert.ok(L.cekNamaPeserta('x'.repeat(25), []).galat);
    assert.ok(L.cekNamaPeserta('Baru', Array.from({ length: 12 }, (_, i) => 'P' + i)).galat);
    const ok = L.cekNamaPeserta('  Nora   Sari ', ['Mita']); assert.equal(ok.galat, null); assert.equal(ok.nama, 'Nora Sari');
  });
});

describe('catatJawabanBersama', () => {
  beforeEach(() => reset());
  it('menulis satu entri per peserta dengan field kontrak; "-" tercatat b 0', () => {
    const n = L.catatJawabanBersama(SOAL[0], { Nicky: 'B', Mita: 'A', Nora: '-' }, 42.6);
    assert.equal(n, 3); assert.equal(s.jawabanBersama.length, 3);
    const [a, b, c] = s.jawabanBersama;
    assert.deepEqual(Object.keys(a).sort(), ['b', 'd', 'k', 'kd', 'm', 'o', 'p', 's', 'sesi', 't', 'w']);
    assert.equal(a.p, 'Nicky'); assert.equal(a.s, 'X1-001'); assert.equal(a.kd, 'X1'); assert.equal(a.k, null); assert.equal(a.sesi, null); assert.equal(a.t, 'X1.1'); assert.equal(a.o, 'B'); assert.equal(a.b, 1); assert.equal(a.d, 43); assert.equal(a.m, 'latih');
    assert.equal(b.o, 'A'); assert.equal(b.b, 0);
    assert.equal(c.o, '-'); assert.equal(c.b, 0);
    assert.ok(Math.abs(a.w - Date.now()) < 5000);
  });
  it('detik dibatasi 0–3600 dan opsi tak sah menjadi "-"', () => {
    L.catatJawabanBersama(SOAL[0], { Mita: 'x', Nora: 'b' }, 99999);
    assert.equal(s.jawabanBersama[0].o, '-'); assert.equal(s.jawabanBersama[0].d, 3600);
    assert.equal(s.jawabanBersama[1].o, 'B'); assert.equal(s.jawabanBersama[1].b, 1);
  });
  it('pemimpin (nama sama dengan profil, tanpa peduli kapital) juga tercatat di s.jawaban, sekali', () => {
    s.profil.nama = ' nicky ';
    L.catatJawabanBersama(SOAL[1], { Nicky: 'A', Mita: 'C' }, 10);
    assert.equal(s.jawaban.length, 1);
    assert.equal(s.jawaban[0].soal, 'X1-002'); assert.equal(s.jawaban[0].opsi, 'A'); assert.equal(s.jawaban[0].konteks, 'latih'); assert.equal(s.jawaban[0].benar, false);
  });
  it('pemimpin yang tidak menjawab ("-") tidak menambah s.jawaban; peserta lain tidak pernah masuk s.jawaban', () => {
    L.catatJawabanBersama(SOAL[0], { Nicky: '-', Mita: 'B', Nora: 'B' }, 5);
    assert.equal(s.jawaban.length, 0);
    s.profil.nama = 'Rina';
    L.catatJawabanBersama(SOAL[0], { Nicky: 'B', Mita: 'B' }, 5);
    assert.equal(s.jawaban.length, 0);
  });
  it('memangkas entri lebih dari 60 hari lalu menyisakan 4000 terbaru', () => {
    const kini = Date.now();
    for (let i = 0; i < 10; i++) s.jawabanBersama.push({ p: 'Mita', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: 1, w: kini - 61 * HARI, m: 'latih' });
    for (let i = 0; i < 4005; i++) s.jawabanBersama.push({ p: 'Mita', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: i, w: kini - HARI, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Nora: 'B' }, 1);
    assert.equal(s.jawabanBersama.length, 4000);
    assert.ok(s.jawabanBersama.every(e => e.w >= kini - 60 * HARI));
    assert.equal(s.jawabanBersama[s.jawabanBersama.length - 1].p, 'Nora');
    assert.equal(s.jawabanBersama[0].d, 6); // 4005 + 1 entri baru → 6 terlama dibuang
  });
});

describe('pesertaBersama', () => {
  beforeEach(() => reset());
  it('menggabung daftar peserta (tanpa jawaban ikut, n 0) dan riwayat; urut menurut daftar lalu nama', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Zaki', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'B', b: 1, d: 1, w: kini - 20 * HARI, m: 'latih' });
    s.jawabanBersama.push({ p: 'Ayu', s: 'X1-001', k: 'X1', t: 'X1.1', o: 'A', b: 0, d: 1, w: kini - 20 * HARI, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Mita: 'B', Nicky: 'A' }, 3);
    const r = L.pesertaBersama();
    assert.deepEqual(JSON.parse(JSON.stringify(r.map(x => x.nama))), ['Nicky', 'Mita', 'Nora', 'Ayu', 'Zaki']);
    const mita = r[1]; assert.equal(mita.n, 1); assert.equal(mita.benar, 1); assert.equal(mita.n7, 1); assert.equal(mita.benar7, 1); assert.ok(mita.terakhir > 0);
    const nora = r[2]; assert.equal(nora.n, 0); assert.equal(nora.terakhir, null);
    const zaki = r[4]; assert.equal(zaki.n, 1); assert.equal(zaki.n7, 0);
    assert.deepEqual(Object.keys(mita).sort(), ['benar', 'benar7', 'n', 'n7', 'nama', 'terakhir']);
  });
});

describe('dokPeserta', () => {
  beforeEach(() => reset());
  it('skema sama dengan ringkasan tim; jawaban terbaru dulu, ≤ 400; topik lemah n ≥ 3', () => {
    const kini = Date.now();
    for (let i = 0; i < 450; i++) s.jawabanBersama.push({ p: 'Mita', s: SOAL[i % 4].id, k: 'X1', t: SOAL[i % 4].topik, o: i % 4 === 2 ? 'A' : 'D', b: i % 4 === 2 || i % 4 === 3 ? 1 : 0, d: 30, w: kini - (450 - i) * 60000, m: 'latih' });
    s.jawabanBersama.push({ p: 'Mita', s: 'Q9-001', k: 'Q9', t: 'Q9.4', o: 'C', b: 0, d: 9, w: kini, m: 'latih' });
    s.profil.tingkat = 'B';
    const d = L.dokPeserta('mita');
    assert.equal(d.nama, 'Mita'); assert.equal(d.tingkat, 'B'); assert.equal(d.sumber, 'lokal'); assert.equal(d.versiApp, String(UKP.versi || ''));
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
  it('v8.1.1: jawaban ujian tim (m: ujian) tetap bermode ujian di dokPeserta; lainnya latih', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Mita', s: SOAL[0].id, o: 'B', b: 1, d: 10, w: kini - 2000, m: 'ujian', sesi: 'sb-1', k: 'ragu' });
    s.jawabanBersama.push({ p: 'Mita', s: SOAL[1].id, o: 'A', b: 0, d: 10, w: kini - 1000, m: 'latih' });
    s.jawabanBersama.push({ p: 'Mita', s: SOAL[2].id, o: 'A', b: 1, d: 10, w: kini, m: 'aneh' });
    const d = L.dokPeserta('Mita');
    assert.deepEqual(d.jawaban.map(x => x.m), ['latih', 'latih', 'ujian']);
    assert.equal(d.jawaban[2].k, 'ragu');
  });
  it('peserta terdaftar tanpa jawaban → dokumen kosong; nama tak dikenal → null', () => {
    const d = L.dokPeserta('Nora');
    assert.equal(d.latihan.total, 0); assert.equal(d.latihan.akurasi7, null); assert.equal(d.jawaban.length, 0); assert.equal(d.diperbarui, null);
    assert.equal(L.dokPeserta('Tidak Ada'), null);
    assert.equal(L.dokPeserta(''), null);
  });
  it('jawaban bersama tidak ikut ringkasan tim (s.jawaban tetap kosong untuk peserta lain)', () => {
    s.profil.nama = 'Rina';
    L.catatJawabanBersama(SOAL[0], { Mita: 'B', Nora: 'A' }, 3);
    assert.equal(s.jawaban.length, 0);
  });
});

describe('v8.0: keyakinan dan sesi pada catatJawabanBersama', () => {
  beforeEach(() => reset());
  it('bentuk baru { o, k } mencatat k dan sesi; keyakinan dibuang untuk "-"; bentuk lama tetap diterima', () => {
    L.catatJawabanBersama(SOAL[0], { Nicky: { o: 'B', k: 'yakin' }, Mita: { o: 'A', k: 'ragu' }, Nora: { o: '-', k: 'yakin' } }, 12, { sesi: 'sb-1' });
    const [a, b, c] = s.jawabanBersama;
    assert.deepEqual([a.o, a.k, a.b, a.sesi], ['B', 'yakin', 1, 'sb-1']);
    assert.deepEqual([b.o, b.k, b.b], ['A', 'ragu', 0]);
    assert.deepEqual([c.o, c.k], ['-', null]);
    L.catatJawabanBersama(SOAL[0], { Mita: 'C', Nora: { opsi: 'b', keyakinan: 'menebak' }, Jeni: { o: 'D', k: 'asal' } }, 3);
    const [d, e, f] = s.jawabanBersama.slice(-3);
    assert.deepEqual([d.o, d.k, d.sesi], ['C', null, null]);
    assert.deepEqual([e.o, e.k, e.b], ['B', 'menebak', 1]);
    assert.equal(f.k, null);
  });
  it('pemimpin tercatat di s.jawaban dengan keyakinan', () => {
    L.catatJawabanBersama(SOAL[1], { Nicky: { o: 'A', k: 'yakin' }, Mita: { o: 'C', k: 'ragu' } }, 10, { sesi: 'sb-2' });
    assert.equal(s.jawaban.length, 1); assert.equal(s.jawaban[0].opsi, 'A'); assert.equal(s.jawaban[0].keyakinan, 'yakin');
  });
  it('dokPeserta membawa k; entri v7.9 (kode di k) tetap terbaca sebagai kode', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Mita', s: 'Q9-001', k: 'Q9', t: 'Q9.4', o: 'C', b: 0, d: 9, w: kini - 1000, m: 'latih' });
    L.catatJawabanBersama(SOAL[0], { Mita: { o: 'A', k: 'yakin' } }, 5);
    const d = L.dokPeserta('Mita');
    assert.equal(d.jawaban[0].k, 'yakin'); assert.equal(d.jawaban[1].k, null);
    assert.equal(d.latihan.perKelompok.Q9.n, 1); assert.equal(d.latihan.perKelompok.X1.n, 1);
  });
  it('normal() memindahkan kode lama dari k ke kd dan merapikan sesiBersama', () => {
    const r = UKP.store.normal({ jawabanBersama: [{ p: 'Mita', s: 'X1-001', k: 'X1', o: 'A' }, { p: 'Mita', s: 'X1-001', kd: 'X1', k: 'ragu', o: 'A' }], sesiBersama: [{ id: 'sb-1', peserta: [], soal: [] }, { id: 2 }, 'x'] });
    assert.equal(r.jawabanBersama[0].kd, 'X1'); assert.equal(r.jawabanBersama[0].k, null); assert.equal(r.jawabanBersama[1].k, 'ragu');
    assert.equal(r.sesiBersama.length, 1);
    assert.ok(Array.isArray(UKP.store.normal({}).sesiBersama));
  });
});

describe('v8.0: sesi latihan bersama', () => {
  beforeEach(() => { reset(['Nicky', 'Mita', 'Nora']); s.sesiBersama = []; s.profil.tingkat = 'B'; });
  it('mulai → catat → akhiri; sesi tanpa soal dihapus saat berakhir', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mita', 'mita', 'Nora'], SOAL.map(x => x.id), 600);
    assert.match(id, /^sb-\d+/);
    const x = s.sesiBersama[0];
    assert.deepEqual(JSON.parse(JSON.stringify(x.peserta)), ['Nicky', 'Mita', 'Nora']);
    assert.deepEqual([x.tingkat, x.anggaranDetik, x.selesai, x.sumber], ['B', 600, null, 'latih']);
    assert.ok(L.catatSoalSesi(id, SOAL[0], { Nicky: { opsi: 'B', keyakinan: 'yakin', benar: true }, Mita: { opsi: 'A', keyakinan: 'yakin', benar: false } }, 41.6));
    const q = s.sesiBersama[0].soal[0];
    assert.deepEqual([q.id, q.kode, q.topik, q.kunci, q.detik], ['X1-001', 'X1', 'X1.1', 'B', 42]);
    assert.deepEqual(JSON.parse(JSON.stringify(q.jawaban)), { Nicky: { o: 'B', k: 'yakin', b: 1 }, Mita: { o: 'A', k: 'yakin', b: 0 }, Nora: { o: '-', k: null, b: 0 } });
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'C' }, 1); // soal sama diganti
    assert.equal(s.sesiBersama[0].soal.length, 1); assert.equal(s.sesiBersama[0].soal[0].jawaban.Nicky.o, 'C');
    const akhir = L.akhiriSesiBersama(id);
    assert.ok(akhir.selesai >= akhir.mulai); assert.equal(L.sesiBersamaDari(id).soal.length, 1);
    const kosong = L.mulaiSesiBersama(['Mita'], [], 0);
    assert.equal(L.akhiriSesiBersama(kosong), null); assert.equal(L.sesiBersamaDari(kosong), null);
    assert.equal(L.sesiBersama().length, 1);
    assert.equal(L.hapusSesiBersama(id), true); assert.equal(L.hapusSesiBersama(id), false); assert.equal(s.sesiBersama.length, 0);
  });
  it('sesiBersama() terbaru dulu berupa salinan; maksimal 60 sesi (terlama dibuang)', () => {
    for (let i = 0; i < 62; i++) s.sesiBersama.push({ id: 'sb-x' + i, mulai: i, selesai: i + 1, tingkat: 'B', peserta: ['Mita'], anggaranDetik: 150, soal: [{ id: 'X1-001', kunci: 'B', jawaban: {} }], sumber: 'latih' });
    const id = L.mulaiSesiBersama(['Mita'], ['X1-001'], 150);
    assert.equal(s.sesiBersama.length, 60);
    assert.equal(s.sesiBersama[0].id, 'sb-x3'); assert.equal(s.sesiBersama[59].id, id);
    const d = L.sesiBersama(); assert.equal(d[0].id, id);
    d[0].peserta.push('Zaki'); assert.equal(s.sesiBersama[59].peserta.length, 1);
  });
  it('evaluasiSesi: peringkat, yakin tapi salah, tersulit, topik tim', () => {
    const J = (o, k) => ({ o, k });
    const sesi = { id: 'sb-9', mulai: 0, selesai: 12 * 60000, tingkat: 'B', peserta: ['Nicky', 'Mita', 'Nora'], anggaranDetik: 600, sumber: 'latih', soal: [
      { id: 'X1-001', kode: 'X1', topik: 'X1.1', kunci: 'B', detik: 30, jawaban: { Nicky: J('B', 'yakin'), Mita: J('A', 'yakin'), Nora: J('B', 'ragu') } },
      { id: 'X1-002', kode: 'X1', topik: 'X1.1', kunci: 'C', detik: 30, jawaban: { Nicky: J('A', 'ragu'), Mita: J('C', 'menebak'), Nora: J('-', null) } },
      { id: 'X1-003', kode: 'X1', topik: 'X1.2', kunci: 'A', detik: 30, jawaban: { Nicky: J('A', 'yakin'), Mita: J('A', null), Nora: J('A', 'yakin') } },
      { id: 'X1-004', kode: 'X1', topik: 'X1.2', kunci: 'D', detik: 30, jawaban: { Nicky: J('D', null), Mita: J('B', 'yakin') } },
    ] };
    const e = L.evaluasiSesi(sesi);
    assert.deepEqual([e.nSoal, e.nPeserta, e.menit], [4, 3, 12]);
    assert.deepEqual(e.peserta.map(p => p.nama + ':' + p.benar), ['Nicky:3', 'Mita:2', 'Nora:2']);
    const mita = e.peserta[1];
    assert.deepEqual([mita.dijawab, mita.kosong, mita.akurasi, mita.yakinSalah, mita.raguBenar, mita.menebakBenar], [4, 0, 50, 2, 0, 1]);
    const nora = e.peserta[2];
    // v9.2 (V9 S1): X1-004 tanpa kunci Nora = Nora belum ikut soal itu → penyebut 3 soal, bukan 4
    assert.deepEqual([nora.dijawab, nora.ikut, nora.kosong, nora.akurasi, nora.raguBenar], [2, 3, 1, 67, 1]);
    assert.equal(nora.topikLemah.length, 1); // X1.2: soal yang ia ikuti benar semua
    assert.equal(e.soal[3].perPeserta.Nora, undefined); assert.deepEqual([e.soal[3].nBenar, e.soal[3].nSalah, e.soal[3].nKosong], [1, 1, 0]);
    assert.deepEqual(e.tersulit.map(q => q.id), ['X1-002', 'X1-004', 'X1-001']);
    assert.ok(!e.tersulit.some(q => q.id === 'X1-003'));
    assert.deepEqual(JSON.parse(JSON.stringify(e.topikTim)), [{ topik: 'X1.1', n: 5, benar: 3, akurasi: 60 }, { topik: 'X1.2', n: 5, benar: 4, akurasi: 80 }]); // v9.2 (V9 S2): penyebut = jawaban yang masuk
    // v8.1: keluaran v8.0 + mode, judul, tempo, skor, triase
    assert.deepEqual(JSON.parse(JSON.stringify(L.evaluasiSesi(null))), { nSoal: 0, nPeserta: 0, menit: 0, peserta: [], soal: [], tersulit: [], topikTim: [],
      mode: 'latihan', judul: null, tempo: null, skor: null, triase: { daftar: [], nDikuasai: 0, perKelas: { dikuasai: 0, rapuh: 0, terbelah: 0, tersandung: 0 } } });
  });
  it('TIM_BAWAAN larik kosong (v9.1: tidak ada nama tim yang tertanam di kode)', () => {
    assert.ok(Array.isArray(L.TIM_BAWAAN));
    assert.deepEqual(JSON.parse(JSON.stringify(L.TIM_BAWAAN)), []);
  });
});

describe('v8.1: tempo, info sesi, lanjutkan sesi bersama', () => {
  beforeEach(() => { reset(['Nicky', 'Mita', 'Nora']); s.sesiBersama = []; s.profil.tingkat = 'B'; s.bersamaAktif = null; delete s.bersama.tempo; });
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
    const id = L.mulaiSesiBersama(['Mita'], ['X1-001', 'X1-002'], 0, { tempo: 'ujian', detikPerSoal: 126, mode: 'ujian', judul: '  Ujian   kecil ', ujianId: 'ut9' });
    const x = L.sesiBersamaDari(id);
    assert.deepEqual([x.tempo, x.detikPerSoal, x.mode, x.judul, x.ujianId, x.anggaranDetik], ['ujian', 126, 'ujian', 'Ujian kecil', 'ut9', 252]);
    assert.deepEqual(J(x.bahas), {}); assert.deepEqual(J(x.waktuPeserta), {});
    const y = L.sesiBersamaDari(L.mulaiSesiBersama(['Mita'], ['X1-001'], 0, { tempo: 'longgar' }));
    assert.deepEqual([y.tempo, y.detikPerSoal, y.mode, y.judul, y.ujianId, y.anggaranDetik], ['longgar', 150, 'latihan', null, null, 150]);
  });
  it('pemanggilan lama (tanpa info) tetap sah: rekaman v8.0 tanpa field v8.1', () => {
    const x = L.sesiBersamaDari(L.mulaiSesiBersama(['Mita'], ['X1-001'], 0));
    assert.equal(x.anggaranDetik, 150); assert.ok(!('mode' in x) && !('tempo' in x));
    assert.equal(L.evaluasiSesi(x).mode, 'latihan');
  });
  it('simpanBersamaAktif / bersamaAktif: salinan sah selama sesi berjalan; null bila sesi selesai, hilang, atau > 24 jam', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 300);
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'B', Mita: 'A' }, 20);
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
    const n = UKP.store.normal({ lembarJawab: { jawaban: 'x' }, bersamaAktif: { sesiId: 5 }, ujianTim: [], sesiBersama: [{ id: 'sb-1', peserta: ['Mita'], soal: [] }] });
    assert.deepEqual([n.lembarJawab, n.bersamaAktif, n.ujianTim], [null, null, null]); assert.equal(n.sesiBersama.length, 1);
  });
  it('triaseSoal tanpa bank (soal { id, kunci }) dan urutanBahas sesi v8.0', () => {
    const t = L.triaseSoal({ id: 'X1-001', kunci: 'B' }, { Nicky: { o: 'B', k: 'yakin' }, Mita: { o: 'A', k: 'yakin' }, Nora: 'B' }, { urutan: ['Nicky', 'Mita', 'Nora'] });
    assert.deepEqual([t.kelas, t.penjelas, t.saran, t.alasan, J(t.yakinSalah)], ['terbelah', 'Nicky', 'Nicky jelaskan ke Mita', null, ['Mita']]);
    const sesi = { id: 'sb-x', peserta: ['Nicky', 'Mita'], soal: [{ id: 'X1-001', kunci: 'B', jawaban: { Nicky: { o: 'B' }, Mita: { o: 'B' } } }, { id: 'X1-002', kunci: 'C', jawaban: { Nicky: { o: 'A' }, mita: { o: 'C' } } }] };
    const u = L.urutanBahas(sesi);
    assert.deepEqual([u.daftar.length, u.daftar[0].id, u.daftar[0].penjelas, u.nDikuasai], [1, 'X1-002', 'Mita', 1]);
  });
});

// ---------- v8.2 B2: latihan bersama di room tim (js/views-belajar.js, UKP.latihRoom) ----------
describe('v8.2 B2: latihan bersama di room (murni + penyiar dengan room tiruan)', () => {
  const U2 = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
  const LR = U2.latihRoom; const M = LR._murni;
  const j = x => JSON.parse(JSON.stringify(x));
  it('potong: sesi room ≤ 120 soal', () => {
    const arr = Array.from({ length: 130 }, (_, i) => ({ id: 'X1-' + i }));
    const p = M.potong(arr); assert.equal(p.daftar.length, 120); assert.equal(p.dipotong, 10); assert.equal(p.daftar[119].id, 'X1-119');
    assert.equal(M.potong(arr.slice(0, 5)).dipotong, 0);
  });
  it('perRoom: { opsi, keyakinan, benar } → { o, k, b }; "-" tanpa keyakinan dan b 0', () => {
    assert.deepEqual(j(M.perRoom({ Mita: { opsi: 'D', keyakinan: 'yakin', benar: true }, Nora: { opsi: '-', keyakinan: 'ragu', benar: false }, Aldi: { opsi: 'A', keyakinan: null, benar: false } })),
      { Mita: { o: 'D', k: 'yakin', b: 1 }, Nora: { o: '-', k: null, b: 0 }, Aldi: { o: 'A', k: null, b: 0 } });
  });
  it('skor tim kumulatif: 5/6 + 3/6 + 6/6 → "Skor tim 78% · 14 dari 18 jawaban benar" (v9.2 tulisan baku); kosong tidak dihitung dijawab', () => {
    const per = nb => { const o = {}; ['Nicky', 'Mita', 'Nora', 'Jeni', 'Mega', 'Aldi'].forEach((n, i) => { o[n] = { opsi: i < nb ? 'B' : 'C', benar: i < nb }; }); return { per: o }; };
    const r = [per(5), per(3), per(6)];
    assert.deepEqual(j(M.timKumulatif(r)), { benar: 14, dijawab: 18 });
    assert.equal(M.teksSkor(M.timKumulatif(r)), 'Skor tim 78% · 14 dari 18 jawaban benar');
    assert.equal(L.teksSkorTim(M.timKumulatif(r)), M.teksSkor(M.timKumulatif(r)), 'learn.js dan papan memakai tulisan yang sama');
    assert.equal(M.teksSkor({ benar: 0, dijawab: 0 }), '');
    assert.deepEqual(j(M.timKumulatif([{ per: { Mita: { opsi: '-', benar: false }, Nora: { opsi: 'A', benar: true } } }])), { benar: 1, dijawab: 1 });
    assert.deepEqual(j(M.jejakTim(r)).map(x => x.benar + '/' + x.dijawab), ['5/6', '8/12', '14/18']);
  });
  it('sejakLulus: soal pertama ≥ 5 dengan akurasi ≥ 60 yang bertahan; null bila sekarang di bawah garis', () => {
    const jejak = [[1, 2], [2, 4], [3, 5], [4, 6], [5, 9], [6, 12], [7, 13], [8, 17]].map(([ke, b]) => ({ ke, benar: b, dijawab: ke * 3 }));
    assert.equal(M.sejakLulus(jejak), 5);
    assert.equal(M.sejakLulus(jejak.slice(0, 4)), null);
    assert.equal(M.sejakLulus([{ ke: 5, benar: 15, dijawab: 15 }, { ke: 6, benar: 15, dijawab: 30 }]), null);
  });
  it('penjelas hanya bila benar di per room (ejaan per); diisi pemandu; peta hadir; isi dari dokumen HP', () => {
    const perR = { Mita: { o: 'D', k: 'yakin', b: 1 }, Mega: { o: 'A', k: null, b: 0 }, Aldi: { o: '-', k: null, b: 0 } };
    assert.equal(M.penjelas({ penjelas: 'mita' }, perR), 'Mita');
    assert.equal(M.penjelas({ penjelas: 'Mega' }, perR), null);
    assert.equal(M.penjelas(null, perR), null);
    assert.deepEqual(j(M.diisi({ Nicky: 'papan', Mita: 'hp', Mega: 'papan', Aldi: 'papan' }, Object.assign({ Nicky: { o: 'D', k: null, b: 1 } }, perR), 'nicky')), ['Mega']);
    // v9.2 G1: belum pernah membuka HP ('belum') dibedakan dari HP terputus ('terputus', hanya bila pernah online selama latihan ini)
    assert.deepEqual(j(M.hadirPeta({ Mita: { online: true }, mega: { online: false } }, ['Nicky', 'Mita', 'Mega', 'Aldi'], 'Nicky')), { Mita: 'online', Mega: 'terputus', Aldi: 'belum' });
    assert.deepEqual(j(M.hadirPeta({ Mita: { online: true }, mega: { online: false } }, ['Nicky', 'Mita', 'Mega', 'Aldi'], 'Nicky', new Set())), { Mita: 'online', Mega: 'belum', Aldi: 'belum' });
    assert.deepEqual(j(M.hadirPeta({ mega: { online: false } }, ['Mega'], 'Nicky', ['MEGA'])), { Mega: 'terputus' });
    assert.deepEqual(j(M.susulan(['Nicky', 'Mita', 'Dodi', 'eko'], ['Nicky', 'Mita'], ['Nicky', 'Mita', 'Eko'])), ['Dodi']);
    assert.deepEqual(j(M.susulan(null, null, null)), []);
    assert.deepEqual(j(M.isiDok({ j: { 'X1-001': 'b' }, k: { 'X1-001': 'ragu' } }, 'X1-001')), { o: 'B', k: 'ragu' });
    assert.deepEqual(j(M.isiDok({ j: { 'X1-001': '-' }, k: { 'X1-001': 'yakin' } }, 'X1-001')), { o: '-', k: null });
    assert.equal(M.isiDok({ j: {} }, 'X1-001'), null); assert.equal(M.isiDok({ j: { 'X1-001': 'Z' } }, 'X1-001'), null); assert.equal(M.isiDok(null, 'X1-001'), null);
  });
  function tiruanR(awal) {
    const log = []; let st = { aktivitas: awal || null };
    const R = {
      log, state: () => j(st),
      mulaiLatihan: o => { log.push('mulaiLatihan' + (o.peserta ? ':' + o.peserta.join(',') : '')); st.aktivitas = { jenis: 'latihan', id: o.id, soalIds: o.soalIds, idx: 0, fase: 'jawab', tim: null, peserta: o.peserta || null }; return j(st); },
      aturPesertaLatihan: p => { log.push('aturPesertaLatihan:' + p.join(',')); st.aktivitas.peserta = p; return j(st); },
      aturSoal: i => { log.push('aturSoal:' + i); st.aktivitas.idx = i; st.aktivitas.fase = 'jawab'; return j(st); },
      bukaKunci: (id, per, o) => { log.push('bukaKunci:' + id + ':' + (o.penjelas || '-') + ':' + (o.tim ? o.tim.benar + '/' + o.tim.dijawab : '-')); if (o.penjelas === 'Tolak') return false; st.aktivitas.fase = 'kunci'; st.aktivitas.tim = o.tim; return j(st); },
      terbitkanSesi: s => { log.push('terbitkanSesi:' + s.id + ':' + (s.tim ? s.tim.benar : '-')); return true; },
      akhiriAktivitas: () => { log.push('akhiriAktivitas'); const a = st.aktivitas; st.aktivitas = null; return { aktivitas: a }; },
    };
    return R;
  }
  it('penyiar: tiap langkah mengirim tepat satu perubahan (mulai, soal, kunci, selesai)', () => {
    const R = tiruanR(); const sr = LR.buatSiarRoom(R, { sesiId: 'sb-1', soalIds: ['X1-001', 'X1-002', 'X1-003'], detikPerSoal: 126, akhirSesi: () => 1000 });
    assert.equal(sr.mulai(0), true); assert.deepEqual(R.log.splice(0), ['mulaiLatihan']);
    assert.equal(sr.soal(0), true); assert.deepEqual(R.log.splice(0), []);
    assert.equal(sr.kunci('X1-001', { Mita: { o: 'B', k: 'yakin', b: 1 } }, 'Mita', { benar: 1, dijawab: 1 }), true); assert.deepEqual(R.log.splice(0), ['bukaKunci:X1-001:Mita:1/1']);
    sr.soal(1); assert.deepEqual(R.log.splice(0), ['aturSoal:1']);
    sr.soal(1); assert.deepEqual(R.log.splice(0), []);
    // penjelas ditolak room → diulang sekali tanpa penjelas (skor tim tetap terkirim)
    assert.equal(sr.kunci('X1-002', {}, 'Tolak', { benar: 1, dijawab: 2 }), true); assert.deepEqual(R.log.splice(0), ['bukaKunci:X1-002:Tolak:1/2', 'bukaKunci:X1-002:-:1/2']);
    assert.equal(sr.selesai({ id: 'sb-1', tim: { benar: 1 } }), true); assert.deepEqual(R.log.splice(0), ['terbitkanSesi:sb-1:1', 'akhiriAktivitas']);
    // aktivitas sudah diakhiri: tidak ada pesan lagi
    sr.lepas(); sr.kunci('X1-003', {}, null, null); assert.deepEqual(R.log.splice(0), []);
  });
  it('penyiar: lanjut setelah muat ulang meneruskan aktivitas yang sama (tanpa mulaiLatihan); aktivitas lain → mulai ulang', () => {
    const R = tiruanR({ jenis: 'latihan', id: 'sb-2', soalIds: ['X1-001', 'X1-002', 'X1-003'], idx: 1, fase: 'kunci' });
    const sr = LR.buatSiarRoom(R, { sesiId: 'sb-2', soalIds: ['X1-001', 'X1-002', 'X1-003'], detikPerSoal: 126, akhirSesi: null });
    sr.mulai(2); assert.deepEqual(R.log.splice(0), ['aturSoal:2']);
    const R2 = tiruanR({ jenis: 'latihan', id: 'sb-lain', soalIds: ['X1-001'], idx: 0, fase: 'jawab' });
    const sr2 = LR.buatSiarRoom(R2, { sesiId: 'sb-3', soalIds: ['X1-001', 'X1-002'], detikPerSoal: 126, akhirSesi: null });
    sr2.mulai(1); assert.deepEqual(R2.log.splice(0), ['mulaiLatihan', 'aturSoal:1']);
    // "Pindah ke satu layar": hanya akhiriAktivitas, rekaman belum diterbitkan
    sr2.lepas(); assert.deepEqual(R2.log.splice(0), ['akhiriAktivitas']);
  });
  it('penyiar v9.2: peserta ikut mulaiLatihan; daftar baru lewat aturPesertaLatihan (diam bila fungsi tidak ada)', () => {
    const R = tiruanR(); const sr = LR.buatSiarRoom(R, { sesiId: 'sb-9', soalIds: ['X1-001'], detikPerSoal: 126, akhirSesi: null, peserta: () => ['Nicky', 'Mita'] });
    sr.mulai(0); assert.deepEqual(R.log.splice(0), ['mulaiLatihan:Nicky,Mita']);
    assert.equal(sr.peserta(['Nicky', 'Mita', 'Dodi']), true); assert.deepEqual(R.log.splice(0), ['aturPesertaLatihan:Nicky,Mita,Dodi']);
    const R2 = tiruanR(); delete R2.aturPesertaLatihan; const sr2 = LR.buatSiarRoom(R2, { sesiId: 'sb-10', soalIds: ['X1-001'], detikPerSoal: 126, akhirSesi: null });
    sr2.mulai(0); assert.deepEqual(R2.log.splice(0), ['mulaiLatihan']); assert.equal(sr2.peserta(['A']), false);
  });
  it('tanpa UKP.ruang (claude.ai/file://): ruangTersedia false dan peranRoom null tanpa melempar', () => {
    assert.equal(LR.ruangTersedia(), false); assert.equal(LR.peranRoom(), null);
  });
});

describe('v8.2 V3: titik lanjut sesi room yang dipindah ke satu layar', () => {
  it("room: 'terbit' bertahan di simpanBersamaAktif (rekaman tetap diterbitkan setelah muat ulang, tanpa menyambung lagi)", () => {
    reset(['Nicky', 'Mita']);
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 0);
    L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001', 'X1-002'], idx: 1, sisaDetik: 100, anggaranDetik: 300, tempo: 'ujian', detikPerSoal: 126, room: 'terbit' });
    assert.equal(L.bersamaAktif().room, 'terbit');
    L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001', 'X1-002'], idx: 1, sisaDetik: 100, anggaranDetik: 300, tempo: 'ujian', detikPerSoal: 126, room: 1 });
    assert.equal(L.bersamaAktif().room, 1);
    L.akhiriSesiBersama(id);
  });
});

describe('v9.2 G1: anggota yang menyusul, satu cara menghitung, kalimat pembahas', () => {
  it('tambahPesertaSesi: nama baru masuk latihan berjalan (unik tanpa peduli kapital, ≤ 12); soal lama tidak diubah; sesi selesai ditolak', () => {
    reset(['Nicky', 'Mita']); s.sesiBersama = [];
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 0);
    L.catatSoalSesi(id, SOAL[0], { Nicky: { opsi: 'B', benar: true }, Mita: { opsi: 'A', benar: false } }, 10);
    assert.equal(L.tambahPesertaSesi(id, '  Dodi  '), 'Dodi');
    assert.equal(L.tambahPesertaSesi(id, 'dodi'), 'Dodi', 'nama yang sudah ada dikembalikan dengan ejaan rekaman');
    assert.equal(L.tambahPesertaSesi(id, ''), null);
    const x = s.sesiBersama.find(q => q.id === id);
    assert.deepEqual(JSON.parse(JSON.stringify(x.peserta)), ['Nicky', 'Mita', 'Dodi']);
    assert.deepEqual(Object.keys(x.soal[0].jawaban), ['Nicky', 'Mita'], 'soal yang sudah tercatat tidak diubah');
    L.catatSoalSesi(id, SOAL[1], { Nicky: { opsi: 'B' }, Mita: { opsi: 'B' }, Dodi: { opsi: 'C', keyakinan: 'ragu' } }, 5);
    assert.equal(x.soal[1].jawaban.Dodi.o, 'C');
    for (let i = 0; i < 12; i++) L.tambahPesertaSesi(id, 'Anggota ' + i);
    assert.equal(x.peserta.length, L.MAKS_PESERTA);
    L.akhiriSesiBersama(id);
    assert.equal(L.tambahPesertaSesi(id, 'Telat'), null);
    assert.equal(L.tambahPesertaSesi('sb-tidak-ada', 'Eko'), null);
  });
  it('teksSkorTim: "Skor tim 60% · 3 dari 5 jawaban benar"; kosong tanpa jawaban', () => {
    assert.equal(L.teksSkorTim({ benar: 3, dijawab: 5 }), 'Skor tim 60% · 3 dari 5 jawaban benar');
    assert.equal(L.teksSkorTim({ benar: 0, dijawab: 0 }), '');
    assert.equal(L.teksSkorTim(null), '');
  });
  it('triaseSoal: yang dijelaskan hanya yang salah; tidak menjawab terpisah tanpa pemimpin; Nebak tidak dipilih bila ada orang benar lain', () => {
    const per = { Rina: { o: '-' }, Budi: { o: 'B', k: 'menebak' }, Sari: { o: 'A', k: 'yakin' }, Yoga: { o: 'C' }, Tika: { o: '-' }, Dodi: { o: 'B', k: 'ragu' } };
    const t = L.triaseSoal({ id: 'X1-001', kunci: 'B' }, per, { urutan: Object.keys(per), pemimpin: 'Rina' });
    assert.equal(t.kelas, 'terbelah'); assert.equal(t.nJawab, 4); assert.equal(t.label, 'Tim terbagi');
    assert.equal(t.penjelas, 'Dodi', 'Budi (Nebak) tidak dipilih karena Dodi juga benar');
    assert.equal(t.saran, 'Dodi jelaskan ke Sari dan Yoga');
    assert.deepEqual(JSON.parse(JSON.stringify(t.tidakMenjawab)), ['Tika']);
    const nebakSaja = L.triaseSoal({ id: 'X1-001', kunci: 'B' }, { Budi: { o: 'B', k: 'menebak' }, Sari: { o: 'A' } }, {});
    assert.equal(nebakSaja.penjelas, 'Budi', 'satu-satunya yang benar tetap dipilih walau Nebak');
  });
});

describe('v9.2 G1 (temuan V9): menyusul, satu cara menghitung, nama tak biasa', () => {
  const sesiSusul = () => ({ id: 'sb-v9', mulai: 0, selesai: 60000, tingkat: 'B', peserta: ['Rina', 'Sari', 'Budi'], sumber: 'latih', soal: [
    { id: 'X1-001', kode: 'X1', topik: 'X1.1', kunci: 'B', jawaban: { Rina: { o: 'B', k: 'yakin', b: 1 }, Sari: { o: 'A', k: null, b: 0 } } },
    { id: 'X1-002', kode: 'X1', topik: 'X1.1', kunci: 'C', jawaban: { Rina: { o: 'C', k: null, b: 1 }, Sari: { o: 'C', k: null, b: 1 } } },
    { id: 'X1-003', kode: 'X1', topik: 'X1.2', kunci: 'D', jawaban: { Rina: { o: '-', k: null, b: 0 }, Sari: { o: 'D', k: null, b: 1 }, Budi: { o: 'D', k: 'ragu', b: 1 } } },
  ] });
  it('S1: anggota yang menyusul tidak dihitung "tidak menjawab" untuk soal sebelum ia ikut (evaluasi, urutan bahas, rekap)', () => {
    const e = L.evaluasiSesi(sesiSusul());
    const budi = e.peserta.find(p => p.nama === 'Budi');
    assert.deepEqual([budi.benar, budi.dijawab, budi.ikut, budi.kosong, budi.akurasi], [1, 1, 1, 0, 100]);
    assert.deepEqual([e.soal[0].nBenar, e.soal[0].nSalah, e.soal[0].nKosong], [1, 1, 0]);
    assert.equal(e.soal[0].perPeserta.Budi, undefined);
    assert.ok(!e.tersulit.some(q => q.id === 'X1-002'), 'soal yang dijawab benar semua yang ikut bukan "tersulit"');
    const t1 = e.triase.daftar.find(x => x.id === 'X1-001'); assert.ok(t1); assert.ok(!(t1.tidakMenjawab || []).includes('Budi'));
    const r = L.rekapSesi(sesiSusul());
    assert.match(r, /Budi benar 1 dari 1 soal/); assert.match(r, /Skor tim 83% · 5 dari 6 jawaban benar · 1 kali tidak menjawab/);
  });
  it('S2: topik tim dibagi jawaban yang masuk (tidak ada dua angka tim berbeda)', () => {
    const e = L.evaluasiSesi(sesiSusul());
    assert.deepEqual(JSON.parse(JSON.stringify(e.topikTim)), [{ topik: 'X1.1', n: 4, benar: 3, akurasi: 75 }]);
  });
  it('S5: soal yang tidak dijawab siapa pun: label "Tidak ada yang menjawab", prioritas 0, tanpa penjelas; kelas tetap', () => {
    const t = L.triaseSoal({ id: 'X1-001', kunci: 'B' }, { Rina: { o: '-' }, Sari: { o: '-' } }, {});
    assert.deepEqual([t.kelas, t.label, t.prioritas, t.penjelas, t.nJawab], ['tersandung', 'Tidak ada yang menjawab', 0, null, 0]);
    const s = { id: 'sb-k', peserta: ['Rina', 'Sari'], soal: [{ id: 'X1-001', kunci: 'B', jawaban: { Rina: { o: '-' }, Sari: { o: '-' } } }] };
    assert.equal(L.urutanBahas(s).daftar.length, 0);
  });
  it('R2: nama yang sama dengan properti bawaan objek ditolak', () => {
    for (const n of ['__proto__', 'Constructor', 'valueof', 'prototype', 'hasOwnProperty']) assert.equal(L.cekNamaPeserta(n, []).galat, 'Nama itu tidak bisa dipakai.', n);
    assert.equal(L.cekNamaPeserta('Proto', []).galat, null);
  });
  it('T1: patokan daftar room awal disimpan sekali di rekaman; yang dilepas centangnya tidak ikut menyusul', () => {
    const J = v => JSON.parse(JSON.stringify(v));
    const U3 = muatInti(['core.js', 'learn.js', 'views-belajar.js']); const L3 = U3.belajar; const M = U3.latihRoom._murni;
    const id = L3.mulaiSesiBersama(['Rina', 'Sari'], ['X1-001', 'X1-002'], 0);
    assert.equal(L3.roomAwalSesi(id), null, 'tanpa daftar dan belum tersimpan → null');
    assert.deepEqual(J(L3.roomAwalSesi(id, ['Rina', 'Sari', 'Tika'])), ['Rina', 'Sari', 'Tika']);
    assert.deepEqual(J(L3.roomAwalSesi(id, ['Rina', 'Sari', 'Tika', 'Dodi'])), ['Rina', 'Sari', 'Tika'], 'tidak ditimpa saat layar dipasang ulang');
    assert.deepEqual(J(M.susulan(['Rina', 'Sari', 'Tika', 'Dodi'], L3.roomAwalSesi(id), ['Rina', 'Sari'])), ['Dodi'], 'Tika (dilepas centangnya) tidak ikut; Dodi menyusul');
  });
});

// ---------- v9.3 W1: waktu mengerjakan dan waktu membahas (js/learn.js, js/views-belajar.js) ----------
describe('v9.3 W1: waktu membahas (pengaturan, catatan, tempo.bahas, rekap, anggaran)', () => {
  const J = v => JSON.parse(JSON.stringify(v));
  beforeEach(() => { reset(['Nicky', 'Mita', 'Nora']); s.sesiBersama = []; s.bersamaAktif = null; delete s.bersama.detikBahas; try { localStorage.removeItem('ukp.bersama.detikBahas'); } catch (e) {} });
  it('pengaturan: bawaan 120; hanya 60/120/180/0 (Bebas); nilai tidak sah → 120; bertahan setelah normal() store', () => {
    assert.deepEqual(J(L.PILIHAN_BAHAS), [60, 120, 180, 0]);
    assert.equal(L.bahasBersama(), 120);
    assert.equal(L.aturBahasBersama(180), 180); assert.equal(L.bahasBersama(), 180); assert.equal(s.bersama.detikBahas, 180);
    assert.equal(L.aturBahasBersama(0), 0); assert.equal(L.bahasBersama(), 0, '0 = Bebas, bukan bawaan');
    for (const v of [90, -60, '60', null, undefined, NaN, Infinity, 3600]) { L.aturBahasBersama(0); assert.equal(L.aturBahasBersama(v), 120, String(v)); }
  });
  it('pengaturan bertahan: normal() store mempertahankan s.bersama.detikBahas yang sah, dan cerminan localStorage tetap jadi cadangan', () => {
    // konteks vm sendiri dengan localStorage yang benar-benar menyimpan (vm.createContext disadap untuk mengganti tiruannya)
    const vm = require('node:vm'); const asli = vm.createContext; const simpan = new Map();
    vm.createContext = c => { c.localStorage = { getItem: k => (simpan.has(k) ? simpan.get(k) : null), setItem: (k, v) => simpan.set(k, String(v)), removeItem: k => simpan.delete(k) }; return asli(c); };
    let U4; try { U4 = muatInti(['core.js', 'learn.js']); } finally { vm.createContext = asli; }
    const L4 = U4.belajar; const s4 = U4.store.get();
    assert.equal(L4.bahasBersama(), 120);
    L4.aturBahasBersama(60); assert.equal(simpan.get('ukp.bersama.detikBahas'), '60');
    const n = U4.store.normal(J(s4)); assert.equal(n.bersama.detikBahas, 60, 'normal() mempertahankan nilai yang sah');
    for (const rusak of [90, -1, '60', null, 3600]) { const x = J(s4); x.bersama.detikBahas = rusak; assert.equal(U4.store.normal(x).bersama.detikBahas, undefined, 'nilai tidak sah dibuang: ' + String(rusak)); }
    { const x = J(s4); x.bersama.detikBahas = 0; assert.equal(U4.store.normal(x).bersama.detikBahas, 0, 'Bebas dipertahankan'); }
    delete s4.bersama.detikBahas; assert.equal(L4.bahasBersama(), 60, 'cerminan dipakai');
    s4.bersama.detikBahas = 'rusak'; assert.equal(L4.bahasBersama(), 60);
    L4.aturBahasBersama(0); delete s4.bersama.detikBahas; assert.equal(L4.bahasBersama(), 0, 'Bebas juga bertahan');
  });
  it('anggaran = jumlah soal × (mengerjakan + membahas); Bebas = jumlah soal × mengerjakan; mulaiSesiBersama menyimpan detikBahas', () => {
    assert.equal(L.anggaranBersama(10, 126, 120), 2460); assert.equal(L.anggaranBersama(10, 126, 0), 1260); assert.equal(L.anggaranBersama(3, 150, 'x'), 450);
    const a = L.mulaiSesiBersama(['Nicky'], ['X1-001', 'X1-002'], 0, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120 });
    const x = L.sesiBersamaDari(a); assert.deepEqual([x.detikBahas, x.anggaranDetik], [120, 492]);
    const b = L.mulaiSesiBersama(['Nicky'], ['X1-001'], 0, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 0 }); assert.equal(L.sesiBersamaDari(b).detikBahas, 0);
    const c = L.mulaiSesiBersama(['Nicky'], ['X1-001'], 300, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 99999 }); assert.equal(L.sesiBersamaDari(c).detikBahas, undefined, 'di luar 0..3600 → tidak ada');
    const d = L.mulaiSesiBersama(['Nicky'], ['X1-001'], 300, { tempo: 'ujian', detikPerSoal: 126 }); assert.ok(!('detikBahas' in L.sesiBersamaDari(d)), 'tanpa info.detikBahas → field tidak ditulis');
  });
  it('catatBahasSesi: bulat dan dibatasi 0..3600; soal tidak dikenal, sesi tidak ada, atau latihan selesai → false', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 0, { detikPerSoal: 126, detikBahas: 120 });
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'B', Mita: 'A' }, 80);
    assert.equal(L.catatBahasSesi(id, 'X1-001', 95.6), true); assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 96);
    assert.equal(L.catatBahasSesi(id, 'X1-001', 99999), true); assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 3600);
    assert.equal(L.catatBahasSesi(id, 'X1-001', -5), true); assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 0);
    assert.equal(L.catatBahasSesi(id, 'X1-001', 'abc'), false); assert.equal(L.catatBahasSesi(id, 'X1-001', null), false); assert.equal(L.catatBahasSesi(id, 'X1-001', NaN), false);
    assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 0, 'nilai tak sah tidak menimpa');
    assert.equal(L.catatBahasSesi(id, 'X1-002', 30), false, 'soal belum tercatat');
    assert.equal(L.catatBahasSesi('sb-tidak-ada', 'X1-001', 30), false);
    L.catatBahasSesi(id, 'X1-001', 70); L.catatSoalSesi(id, SOAL[0], { Nicky: 'B', Mita: 'B' }, 85);
    assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 70, 'catatSoalSesi ulang tidak menghapus waktu membahas');
    L.akhiriSesiBersama(id); assert.equal(L.catatBahasSesi(id, 'X1-001', 10), false, 'latihan selesai tidak diubah'); assert.equal(L.sesiBersamaDari(id).soal[0].bahasDetik, 70);
  });
  const sesiW = (bahas, target) => ({ id: 'sb-w', mulai: 0, selesai: 19 * 60000, tingkat: 'B', peserta: ['Nicky', 'Mita'], anggaranDetik: 1230, detikPerSoal: 126, tempo: 'ujian', mode: 'latihan', sumber: 'latih',
    ...(target === undefined ? {} : { detikBahas: target }),
    soal: [['X1-001', 'B', 100], ['X1-002', 'C', 150], ['X1-003', 'A', 140], ['X1-004', 'D', 120], ['X1-001x', 'B', 150]].map(([id, k, d], i) => Object.assign({ id, kode: 'X1', topik: 'X1.1', kunci: k, detik: d, jawaban: { Nicky: { o: k }, Mita: { o: 'A' } } }, bahas && bahas[i] !== undefined ? { bahasDetik: bahas[i] } : {})) });
  it('evaluasiSesi: soal[].bahasDetik, tempo.totalDetik, tempo.bahas (rata-rata, lewat target, terlama ≤ 3 urut turun)', () => {
    const e = L.evaluasiSesi(sesiW([90, 150, 60, 125, 50], 120));
    assert.deepEqual(e.soal.map(q => q.bahasDetik), [90, 150, 60, 125, 50]);
    assert.equal(e.tempo.totalDetik, 660);
    assert.deepEqual(J(e.tempo.bahas), { target: 120, n: 5, rataDetik: 95, nLewat: 2, terlama: [{ id: 'X1-002', detik: 150 }, { id: 'X1-004', detik: 125 }], totalDetik: 475 });
    assert.equal(e.tempo.rataDetik, 132, 'kalimat mengerjakan tetap');
  });
  it('tempo.bahas Bebas: nLewat 0, terlama = 3 terlama apa adanya; target tidak ada di rekaman → 0', () => {
    const b = L.evaluasiSesi(sesiW([90, 150, 60, 125, 50], 0)).tempo.bahas;
    assert.deepEqual(J(b), { target: 0, n: 5, rataDetik: 95, nLewat: 0, terlama: [{ id: 'X1-002', detik: 150 }, { id: 'X1-004', detik: 125 }, { id: 'X1-001', detik: 90 }], totalDetik: 475 });
    assert.equal(L.evaluasiSesi(sesiW([90], undefined)).tempo.bahas.target, 0);
  });
  it('rekaman lama tanpa field → bahasDetik null dan tempo.bahas null; nilai tidak wajar dari room diabaikan', () => {
    const lama = L.evaluasiSesi(sesiW(null, undefined));
    assert.deepEqual(lama.soal.map(q => q.bahasDetik), [null, null, null, null, null]); assert.equal(lama.tempo.bahas, null); assert.equal(lama.tempo.totalDetik, 660);
    const aneh = L.evaluasiSesi(sesiW(['90', -1, 3601, Infinity, 40], 'x'));
    assert.deepEqual(aneh.soal.map(q => q.bahasDetik), [null, null, null, null, 40]);
    assert.deepEqual(J(aneh.tempo.bahas), { target: 0, n: 1, rataDetik: 40, nLewat: 0, terlama: [{ id: 'X1-001x', detik: 40 }], totalDetik: 40 });
    assert.equal(L.evaluasiSesi(sesiW([null, {}, true], 120)).tempo.bahas, null);
    // tanpa waktu mengerjakan tetapi ada waktu membahas → tempo tetap objek (rataDetik 0)
    const t = sesiW([30, 40], 60); t.soal.forEach(q => { q.detik = 0; });
    const et = L.evaluasiSesi(t).tempo; assert.deepEqual([et.rataDetik, et.totalDetik, et.nLewat, et.bahas.n, et.bahas.totalDetik], [0, 0, 0, 2, 70]);
  });
  it('rekap WhatsApp: "Waktu: 11 menit mengerjakan · 8 menit membahas" hanya bila waktu membahas tercatat', () => {
    const se = sesiW([90, 100, 100, 100, 90], 120); se.soal.forEach(q => { q.detik = 132; });   // 660 dtk = 11 menit; 480 dtk = 8 menit
    assert.match(L.rekapSesi(se), /\nWaktu: 11 menit mengerjakan · 8 menit membahas\n/);
    assert.doesNotMatch(L.rekapSesi(sesiW(null, undefined)), /Waktu:/);
  });
  it('titik lanjut membawa target membahas dan saat kunci jawaban dibuka (untuk muat ulang saat membahas)', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 0, { detikPerSoal: 126, detikBahas: 180 });
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'B', Mita: 'A' }, 20);
    const t0 = Date.now() - 45000;
    const r = L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001', 'X1-002'], idx: 1, sisaDetik: 500, anggaranDetik: 612, detikPerSoal: 126, detikBahas: 180, bahas: { soalId: 'X1-001', mulai: t0 } });
    assert.deepEqual([r.detikBahas, r.bahas.soalId, r.bahas.mulai], [180, 'X1-001', t0]);
    assert.deepEqual(J(L.bersamaAktif().bahas), { soalId: 'X1-001', mulai: t0 });
    const q = L.simpanBersamaAktif({ sesiId: id, soalIds: [], detikBahas: 'x', bahas: { soalId: 5, mulai: t0 } }); assert.deepEqual([q.detikBahas, q.bahas], [null, null]);
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: [], detikBahas: 0 }).detikBahas, 0);
  });
  it('papan: teks ringkas total waktu dan penyiar room meneruskan detikBahas (ruang.js lama mengabaikannya)', () => {
    const U2 = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
    assert.equal(U2.c.teksWaktuBersama(10, 126, 120), '10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)');
    assert.equal(U2.c.teksWaktuBersama(10, 126, 0), '10 soal · 21 menit mengerjakan · membahas tanpa batas');
    const terima = []; let st = { aktivitas: null };
    const R = { state: () => JSON.parse(JSON.stringify(st)), mulaiLatihan: o => { terima.push(o); st.aktivitas = { jenis: 'latihan', id: o.id, soalIds: o.soalIds, idx: 0, fase: 'jawab' }; return true; },
      aturSoal: i => { terima.push('aturSoal:' + i); st.aktivitas.idx = i; st.aktivitas.fase = 'jawab'; return true; }, bukaKunci: () => { st.aktivitas.fase = 'kunci'; return true; }, akhiriAktivitas: () => { st.aktivitas = null; } };
    const sr = U2.latihRoom.buatSiarRoom(R, { sesiId: 'sb-b', soalIds: ['X1-001', 'X1-002'], detikPerSoal: 126, detikBahas: 0, akhirSesi: null });
    assert.equal(sr.mulai(0), true); assert.equal(terima[0].detikBahas, 0);
    // papan yang sedang membahas soal 0 (muat ulang) tidak mengembalikan room ke fase menjawab
    sr.kunci('X1-001', {}, null, null); terima.length = 0;
    assert.equal(sr.faseKunci(0), true); assert.equal(sr.soal(0, true), true); assert.deepEqual(terima, []);
    sr.soal(0); assert.deepEqual(terima, ['aturSoal:0'], 'tanpa tetapKunci perilaku lama tetap');
    const sr2 = U2.latihRoom.buatSiarRoom(R, { sesiId: 'sb-c', soalIds: ['X1-001'], detikPerSoal: 126, detikBahas: 'x', akhirSesi: null });
    terima.length = 0; sr2.mulai(0); assert.ok(!('detikBahas' in terima[0]), 'nilai tidak sah tidak dikirim');
  });
});

// ---------- v9.3 P1: muat ulang pemimpin saat membahas di room ----------
describe('v9.3 P1: papan menyambung ke room saat soal dipulihkan ke fase membahas', () => {
  const U3 = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
  const LR3 = U3.latihRoom;
  it('terkunciSaatSambung: sebelum soal pertama digambar, soal yang dipulihkan (pulihB) dihitung terkunci', () => {
    assert.equal(typeof LR3.terkunciSaatSambung, 'function');
    assert.equal(LR3.terkunciSaatSambung(null, true, { idx: 0 }, 0), true, 'muat ulang saat membahas soal 1 (Rina)');
    assert.equal(LR3.terkunciSaatSambung(null, true, { idx: 2 }, 3), false, 'soal lain → tidak terkunci');
    assert.equal(LR3.terkunciSaatSambung(null, false, { idx: 0 }, 0), false, 'pemulihan hanya untuk gambar pertama');
    assert.equal(LR3.terkunciSaatSambung(null, true, null, 0), false, 'tanpa pemulihan (titik lanjut v9.2 / mengerjakan)');
    assert.equal(LR3.terkunciSaatSambung({ terkunci: () => true }, true, null, 0), true, 'papan sudah tergambar: ikut keadaan papan');
    assert.equal(LR3.terkunciSaatSambung({ terkunci: () => false }, true, { idx: 0 }, 0), false);
    assert.equal(LR3.terkunciSaatSambung({}, true, { idx: 0 }, 0), false);
  });
  it('alur mount: room di fase kunci soal 1 tetap di fase kunci (tanpa aturSoal, mulaiBahas tidak mulai ulang)', () => {
    // tiruan room seperti ruang.js v9.3: bukaKunci saat fase sudah kunci tidak mengubah mulaiBahas
    const terima = []; let jam = 1000;
    const st = { aktivitas: { jenis: 'latihan', id: 'sb-p1', soalIds: ['X1-001', 'X1-002'], idx: 0, fase: 'kunci', mulaiBahas: 500 } };
    const R = { state: () => JSON.parse(JSON.stringify(st)), mulaiLatihan: o => { terima.push('mulaiLatihan'); return true; },
      aturSoal: i => { terima.push('aturSoal:' + i); st.aktivitas.idx = i; st.aktivitas.fase = 'jawab'; st.aktivitas.mulaiBahas = null; return true; },
      bukaKunci: () => { terima.push('bukaKunci'); if (st.aktivitas.fase !== 'kunci') { st.aktivitas.fase = 'kunci'; st.aktivitas.mulaiBahas = jam; } return true; } };
    const sr = LR3.buatSiarRoom(R, { sesiId: 'sb-p1', soalIds: ['X1-001', 'X1-002'], detikPerSoal: 126, detikBahas: 120, akhirSesi: null });
    // urutan di jalankan(): sambungRoom (elKini null) → gambar() → siar.soal(idx, pulih) → bukaKunci pemulihan → siar.kunci
    jam = 25000;
    const terkunci = LR3.terkunciSaatSambung(null, true, { idx: 0 }, 0);
    assert.equal(sr.mulai(0, terkunci), true);
    assert.equal(sr.soal(0, true), true);
    sr.kunci('X1-001', {}, null, null);
    assert.deepEqual(terima, ['bukaKunci'], 'room tidak pernah kembali ke fase menjawab');
    assert.deepEqual([st.aktivitas.fase, st.aktivitas.mulaiBahas], ['kunci', 500]);
    // perilaku lama (v9.3 W1 sebelum perbaikan): tanpa tetapKunci → aturSoal lalu bukaKunci → mulaiBahas mulai ulang
    terima.length = 0; sr.soal(0); sr.kunci('X1-001', {}, null, null);
    assert.deepEqual(terima, ['aturSoal:0', 'bukaKunci']); assert.equal(st.aktivitas.mulaiBahas, 25000);
  });
  it('detikKerjaLanjut: muat ulang saat MENGERJAKAN lewat room → dari aktivitas.mulaiSoal (cocok dengan HP); lainnya draf', () => {
    const f = LR3.detikKerjaLanjut; const kini = 1000000;
    const a = { jenis: 'latihan', id: 'sb-r', idx: 1, fase: 'jawab', soalIds: ['X1-001', 'X1-002'], mulaiSoal: kini - 6400 };
    const draf = { soalId: 'X1-002', detikSoal: 0 };
    assert.equal(f(draf, a, 'sb-r', 1, 'X1-002', kini), 6, 'Rina memuat ulang 6 dtk setelah soal tampil, draf terakhir 0 dtk');
    assert.equal(f(draf, null, 'sb-r', 1, 'X1-002', kini), 0, 'satu layar: draf (perilaku v9.2)');
    assert.equal(f(draf, Object.assign({}, a, { fase: 'kunci' }), 'sb-r', 1, 'X1-002', kini), 0);
    assert.equal(f(draf, Object.assign({}, a, { id: 'sb-lain' }), 'sb-r', 1, 'X1-002', kini), 0);
    assert.equal(f(draf, a, 'sb-r', 0, 'X1-001', kini), 0, 'idx lain');
    assert.equal(f(draf, a, 'sb-r', 1, 'X1-009', kini), 0, 'soal lain');
    assert.equal(f({ detikSoal: 40 }, Object.assign({}, a, { mulaiSoal: kini + 5000 }), 'sb-r', 1, 'X1-002', kini), 40, 'mulaiSoal di masa depan → draf');
    assert.equal(f({ detikSoal: 40 }, Object.assign({}, a, { mulaiSoal: 'x' }), 'sb-r', 1, 'X1-002', kini), 40);
    assert.equal(f({ detikSoal: 40 }, Object.assign({}, a, { mulaiSoal: kini - 90000 * 1000 }), 'sb-r', 1, 'X1-002', kini), 40, '> 24 jam → draf');
    assert.equal(f({ detikSoal: -3 }, null, 'sb-r', 1, 'X1-002', kini), 0);
  });
  it('tempo.totalDetik memotong detik per soal ke 0..3600 (rekaman room tidak wajar); rata-rata tetap seperti v9.2', () => {
    const sesi = { id: 'sb-aneh', mulai: 1, selesai: 2, tingkat: 'B', peserta: ['Rina'], detikPerSoal: 126, detikBahas: 120,
      soal: [{ id: 'X1-001', kode: 'X1', topik: 'X1.1', kunci: 'B', detik: 86400, bahasDetik: 60, jawaban: { Rina: { o: 'B', b: true } } },
        { id: 'X1-002', kode: 'X1', topik: 'X1.1', kunci: 'C', detik: 100, bahasDetik: 60, jawaban: { Rina: { o: 'C', b: true } } }] };
    const t = L.evaluasiSesi(sesi).tempo;
    assert.equal(t.totalDetik, 3700); assert.equal(t.rataDetik, 43250); assert.equal(t.bahas.totalDetik, 120);
  });
});
