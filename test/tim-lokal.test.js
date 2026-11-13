/* v7.9 Dasbor tim › peserta latihan bersama (lokal): ringkasan per peserta, dokumen ringkasan berskema tim, normalisasi untuk
   halaman detail, dan jaminan bahwa s.jawabanBersama tidak ikut ringkasan yang dikirim ke server/db maupun kode hasil. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'views-tim.js']);
const X = UKP.views.tim._uji;
const J = v => JSON.parse(JSON.stringify(v)); // array dari konteks vm → realm uji
const HARI = 86400000;
const KINI = new Date(2026, 10, 9, 14, 0, 0).getTime();

function contoh() {
  const e = (p, s, o, b, hariLalu, t) => ({ p, s, k: s.split('-')[0], t: t || 'A2.5', o, b, d: 30, w: KINI - hariLalu * HARI, m: 'latih' });
  return {
    profil: { nama: 'Nicky', tingkat: 'B' },
    bersama: { aktif: true, peserta: ['Nicky', 'Mita', 'Nora', 'Rara'] },
    jawabanBersama: [
      e('Mita', 'A2-001', 'A', 1, 9), e('Mita', 'A2-002', 'B', 0, 8), e('Mita', 'A2-003', 'C', 0, 2), e('mita', 'B7-004', 'D', 1, 1, 'B7.1'), e('Mita', 'A2-005', '-', 0, 0),
      e('Nicky', 'A2-001', 'A', 1, 3), e('Nora', 'A2-001', 'B', 0, 12),
      e('Tamu', 'A2-001', 'A', 1, 1),
    ],
    jawaban: [], simulasi: [],
  };
}

describe('dasbor tim: peserta latihan bersama (lokal)', () => {
  it('pesertaDari: urutan daftar peserta, nama tanpa peduli kapital, peserta tanpa jawaban ikut', () => {
    const r = X.pesertaDari(contoh(), KINI);
    assert.deepEqual(J(r.map(x => x.nama)), ['Nicky', 'Mita', 'Nora', 'Rara', 'Tamu']);
    const mita = r[1];
    assert.equal(mita.n, 5); assert.equal(mita.benar, 2);
    assert.equal(mita.n7, 3); assert.equal(mita.benar7, 1);
    assert.equal(mita.terakhir, KINI);
    assert.deepEqual([r[3].n, r[3].terakhir], [0, null]);
  });
  it('dokDari: skema ringkasan tim, jawaban terbaru dulu, null untuk nama tak dikenal', () => {
    const d = X.dokDari(contoh(), 'MITA', KINI);
    assert.equal(d.nama, 'Mita'); assert.equal(d.sumber, 'lokal'); assert.equal(d.tingkat, 'B');
    assert.equal(d.latihan.total, 5); assert.equal(d.latihan.benar, 2);
    assert.equal(d.latihan.akurasi7, 33);
    assert.deepEqual(J(d.simulasi), []);
    assert.equal(d.jawaban[0].s, 'A2-005'); assert.equal(d.jawaban[0].o, '-');
    assert.ok(d.jawaban.every(j => j.m === 'latih'));
    assert.equal(d.latihan.perKelompok.A2.n, 4, 'perKelompok 14 hari: empat jawaban A2 (0–9 hari lalu)');
    assert.equal(X.dokDari(contoh(), 'Budi', KINI), null);
    assert.ok(X.dokDari(contoh(), 'Rara', KINI), 'peserta terdaftar tanpa jawaban tetap punya dokumen');
  });
  it('normalLokal: id lokal:, sumber lokal, akurasi 0–100 apa adanya, jawaban ternormalkan, topik lemah dari kunci topik', () => {
    const d = X.dokDari(contoh(), 'Mita', KINI);
    d.latihan.akurasi7 = 1; d.latihan.perTopikLemah = [{ topik: 'A2.5', n: 4, benar: 1 }];
    const n = X.normalLokal(d, 'Mita');
    assert.equal(n.id, 'lokal:Mita'); assert.equal(n.sumber, 'lokal'); assert.equal(X.sumberTeks(n), 'lokal');
    assert.equal(n.akurasi7, 1);
    assert.equal(n.jawaban.length, 5); assert.ok(n.jawaban.every(j => j.w < 1e11), 'w ms → detik');
    assert.equal(n.topikLemah[0].id, 'A2.5');
    assert.ok(X.adalahLokal('lokal:Mita') && !X.adalahLokal('kode-mita'));
    assert.equal(X.normalLokal(null, 'Mita'), null);
  });
  it('ringkasan tim dan kode hasil tidak membaca s.jawabanBersama', () => {
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'tim.js'), 'utf8');
    const kode = src.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, '');
    assert.doesNotMatch(kode, /jawabanBersama/);
  });
});

// v8.0: evaluasi sesi latihan bersama (cadangan evaluasiLokal, keluaran sama dengan UKP.belajar.evaluasiSesi) dan CSV sesi
function sesiContoh() {
  const j = (o, k, b) => ({ o, k, b });
  return {
    id: 'sb-1', mulai: KINI - 12 * 60000, selesai: KINI, tingkat: 'B', peserta: ['Nicky', 'Mita', 'Nora'], anggaranDetik: 1500, sumber: 'latih',
    soal: [
      { id: 'B8-001', kode: 'B8', topik: 'B8.4', kunci: 'B', detik: 40, jawaban: { Nicky: j('B', 'yakin', 1), Mita: j('A', 'yakin', 0), Nora: j('-', null, 0) } },
      { id: 'B8-002', kode: 'B8', topik: 'B8.4', kunci: 'C', detik: 50, jawaban: { Nicky: j('C', 'ragu', 1), Mita: j('C', 'menebak', 1), Nora: j('D', null, 0) } },
      { id: 'B7-003', kode: 'B7', topik: 'B7.1', kunci: 'A', detik: 30, jawaban: { Nicky: j('A', null, 1), Mita: 'A', Nora: { o: '=1+1', k: 'aneh' } } },
    ],
  };
}
describe('dasbor tim: evaluasi sesi latihan bersama (v8.0)', () => {
  it('evaluasiLokal: angka per peserta, urut benar lalu urutan peserta, menit dari mulai–selesai', () => {
    const ev = J(X.evaluasiLokal(sesiContoh()));
    assert.equal(ev.nSoal, 3); assert.equal(ev.nPeserta, 3); assert.equal(ev.menit, 12);
    assert.deepEqual(ev.peserta.map(p => p.nama), ['Nicky', 'Mita', 'Nora']);
    const [ni, mi, no] = ev.peserta;
    assert.deepEqual([ni.benar, ni.dijawab, ni.kosong, ni.akurasi], [3, 3, 0, 100]);
    assert.deepEqual([mi.benar, mi.yakinSalah, mi.menebakBenar], [2, 1, 1]);
    assert.equal(ni.raguBenar, 1);
    assert.deepEqual([no.benar, no.dijawab, no.kosong, no.akurasi], [0, 1, 2, 0]);
    assert.equal(no.topikLemah[0].topik, 'B8.4');
  });
  it('evaluasiLokal: soal (nBenar/nSalah/nKosong), tersulit, topik tim n ≥ 3', () => {
    const ev = J(X.evaluasiLokal(sesiContoh()));
    assert.deepEqual(ev.soal.map(q => [q.id, q.nBenar, q.nSalah, q.nKosong]), [['B8-001', 1, 1, 1], ['B8-002', 2, 1, 0], ['B7-003', 2, 0, 1]]);
    assert.equal(ev.soal[2].perPeserta.Mita.b, 1, 'bentuk lama { nama: huruf } dinilai dari kunci');
    assert.deepEqual(ev.soal[2].perPeserta.Nora, { o: '-', k: null, b: 0 });
    assert.deepEqual(ev.tersulit.map(q => q.id), ['B8-001', 'B8-002', 'B7-003']);
    assert.deepEqual(ev.topikTim.map(t => [t.topik, t.n, t.benar, t.akurasi]), [['B8.4', 6, 3, 50], ['B7.1', 3, 2, 67]]);
  });
  it('evaluasiLokal: sesi kosong atau rusak tidak melempar', () => {
    const ev = J(X.evaluasiLokal({ id: 'sb-2', mulai: KINI, selesai: null, peserta: ['A'], soal: [] }));
    assert.deepEqual([ev.nSoal, ev.nPeserta, ev.tersulit.length, ev.topikTim.length], [0, 1, 0, 0]);
    assert.equal(J(X.evaluasiLokal(null)).nSoal, 0);
  });
  it('csvSesi: kepala + satu baris per soal, sel "huruf (keyakinan)", pemisah ;', () => {
    const csv = X.csvSesi(sesiContoh(), X.evaluasiLokal(sesiContoh())).replace(/^\uFEFF/, '');
    const baris = csv.trim().split('\r\n');
    assert.equal(baris.length, 4);
    assert.equal(baris[0], 'id;kode;topik;kunci;Nicky;Mita;Nora');
    assert.equal(baris[1], 'B8-001;B8;B8.4;B;B (yakin);A (yakin);kosong');
    assert.equal(baris[3], 'B7-003;B7;B7.1;A;A;A;kosong');
  });
  it('dokDari: k keyakinan (v8.0) tidak dibaca sebagai kode kelompok dan ikut jawaban', () => {
    const s = contoh();
    s.jawabanBersama.push({ p: 'Mita', s: 'A2-009', k: 'yakin', t: 'A2.5', o: 'B', b: 0, d: 20, w: KINI + 1000, m: 'latih', sesi: 'sb-1' });
    const d = X.dokDari(s, 'Mita', KINI);
    assert.equal(d.latihan.perKelompok.yakin, undefined);
    assert.equal(d.latihan.perKelompok.A2.n, 5);
    assert.equal(d.jawaban[0].k, 'yakin');
  });
});

// v8.1: evaluasi mode ujian (CSV skor di atas soal, ringkasan "Sesi terakhir"), kalimat tempo, siapa memilih apa, label ujian tim
const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);
const UKP2 = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js']));
const X2 = UKP2.views.tim._uji, L2 = UKP2.belajar;
function sesiUjian() {
  const ids = UKP2.konten.soalSet('TO-B-2026-11').slice(0, 5);
  const pola = { Mita: 'BBBB-', Nora: 'BSSB-', Aldi: 'B----' }; // B benar, S salah, - kosong
  const soal = ids.map((so, i) => {
    const jawaban = {};
    Object.keys(pola).forEach(n => { const c = pola[n][i]; const o = c === 'B' ? so.kunci : c === 'S' ? (so.kunci === 'A' ? 'B' : 'A') : '-'; jawaban[n] = { o, k: n === 'Mita' && i === 1 ? 'ragu' : null, b: c === 'B' ? 1 : 0 }; });
    return { id: so.id, kode: so.kode, topik: so.topik, kunci: so.kunci, detik: 0, jawaban };
  });
  return { id: 'sb-u', mulai: KINI - 3600000, selesai: KINI, tingkat: 'B', peserta: ['Mita', 'Nora', 'Aldi'], anggaranDetik: 11 * 60, sumber: 'ujiantim',
    tempo: 'ujian', detikPerSoal: 126, mode: 'ujian', judul: 'Try Out B 1–5', ujianId: 'utx', bahas: {}, waktuPeserta: { Mita: 600 }, soal };
}
describe('dasbor tim: evaluasi tim v8.1', () => {
  it('csvSesi mode ujian: enam baris skor per orang di atas baris soal, kolom peserta sama', () => {
    const s = sesiUjian(); const ev = L2.evaluasiSesi(s);
    const baris = X2.csvSesi(s, ev).replace(/^﻿/, '').trim().split('\r\n');
    assert.equal(baris.length, 1 + 6 + 5);
    assert.equal(baris[0], 'id;kode;topik;kunci;Mita;Nora;Aldi');
    assert.equal(baris[1], 'skor;;;;80;40;20');
    assert.equal(baris[2], 'lulus;;;;ya;kurang 1 soal;kurang 2 soal');
    assert.deepEqual(baris.slice(3, 7), ['benar;;;;4;2;1', 'salah;;;;0;2;0', 'kosong;;;;1;1;4', 'ragu;;;;1;0;0']);
    assert.ok(baris[7].startsWith(s.soal[0].id + ';'));
    // latihan: tanpa baris skor
    const lat = Object.assign({}, s, { mode: 'latihan' });
    assert.equal(X2.csvSesi(lat, L2.evaluasiSesi(lat)).replace(/^﻿/, '').trim().split('\r\n').length, 6);
  });
  it('ringkasSesi: jenis dan ringkasan untuk "Sesi terakhir"; menitSesi ujian = waktu ujian', () => {
    const s = sesiUjian(); const r = J(X2.ringkasSesi(s, L2.evaluasiSesi(s)));
    assert.equal(r.jenis, 'Ujian tim · Try Out B 1–5'); assert.equal(r.ujian, true);
    assert.equal(r.meta, '5 soal · 3 orang · rata-rata skor 46,7 · 1 dari 3 lulus');   // v9.5.4 S2: satu desimal (angkaKoma)
    assert.equal(X2.menitSesi(L2.evaluasiSesi(s), s), 11);
    const lat = Object.assign({}, s, { mode: 'latihan', judul: null });
    const rl = J(X2.ringkasSesi(lat, L2.evaluasiSesi(lat)));
    assert.equal(rl.jenis, 'Latihan bersama'); assert.match(rl.meta, /^5 soal · 3 orang · skor tim \d+%$/);  // v9.2 G3: skor tim (benar ÷ jawaban yang masuk), bukan rata-rata atas semua slot
    { const ev = L2.evaluasiSesi(lat); const t = X2.angkaTim(lat, ev); assert.ok(t.dijawab > 0); assert.equal(rl.meta, '5 soal · 3 orang · skor tim ' + Math.round(t.benar / t.dijawab * 100) + '%'); }
    assert.equal(X2.menitSesi(L2.evaluasiSesi(lat), lat), 60);
  });
  it('kalimatTempo: lewat dari tempo ujian dan masih di dalam tempo', () => {
    const lewat = J(X2.kalimatTempo({ detikPerSoal: 126, rataDetik: 151, nLewat: 2, terlama: [], soalUjian: 100, menitUjian: 210, proyeksiMenit: 252 }));
    assert.deepEqual(lewat, { lewat: true, teks: 'Rata-rata 2:31 per soal; tempo ujian 2:06. Dengan laju ini 100 soal butuh ±252 menit, lewat 42 menit dari 210.' });
    const aman = J(X2.kalimatTempo({ detikPerSoal: 126, rataDetik: 110, nLewat: 0, terlama: [], soalUjian: 100, menitUjian: 210, proyeksiMenit: 183 }));
    assert.equal(aman.lewat, false);
    assert.equal(aman.teks, 'Rata-rata 1:50 per soal; tempo ujian 2:06. Dengan laju ini 100 soal butuh ±183 menit, masih di dalam tempo ujian (210 menit).');
    assert.equal(X2.kalimatTempo(null), null);
  });
  it('siapaMemilih: per opsi menurut urutan peserta, kunci ditandai, kosong di akhir', () => {
    const q = { kunci: 'B', perPeserta: { Nicky: { o: 'A' }, Mita: { o: 'B' }, Nora: { o: 'B', k: 'ragu' }, Mega: { o: '-' }, Aldi: { o: 'C' } } };
    assert.equal(X2.siapaMemilih(q, ['Nicky', 'Mita', 'Nora', 'Mega', 'Aldi']), 'A: Nicky · B: Mita, Nora (ragu) (kunci jawaban) · C: Aldi · tidak menjawab: Mega');
    assert.equal(X2.siapaMemilih({ kunci: 'D', perPeserta: { Mita: { o: 'A' } } }, ['Mita']), 'A: Mita · D: tidak ada (kunci jawaban)');
  });
  it('jawaban ujian tim (m: ujian) berlabel "Ujian tim" di detail peserta lokal', () => {
    assert.equal(X2.MODE_JAWAB.ujian, 'Ujian tim');
    const s = contoh(); s.jawabanBersama.push({ p: 'Mita', s: 'A2-010', k: 'ragu', t: 'A2.5', o: 'C', b: 0, d: 0, w: KINI + 2000, m: 'ujian', sesi: 'sb-u' });
    const d = X.dokDari(s, 'Mita', KINI);
    assert.equal(d.jawaban[0].m, 'ujian');
    const jw = J(X.normalJawaban(d.jawaban));
    assert.equal(jw[0].m, 'ujian'); assert.equal(jw[1].m, 'latihan');
  });
});

// v8.2 B3: evaluasi versi anggota (U1) dan rekap tim (T6) — pembantu murni
describe('v8.2 evaluasi room: versi anggota dan rekap tanpa skor per nama', () => {
  const X3 = UKP.views.tim._uji;
  const sesi = (lain) => Object.assign({ id: 'sb-r1', mulai: new Date(2026, 10, 9, 19, 30).getTime(), selesai: new Date(2026, 10, 9, 20, 0).getTime(), peserta: ['Nicky', 'Mita', 'Nora', 'Aldi'],
    soal: ['A1-001', 'A1-002'].map((id, i) => ({ id, kode: 'A1', topik: '', kunci: 'B', jawaban: { Nicky: { o: 'B', b: 1 }, Mita: { o: i ? 'C' : 'B', b: i ? 0 : 1 }, Nora: { o: 'C', b: 0 }, Aldi: { o: i ? 'A' : '-', b: 0 } } })), sumber: 'room' }, lain || {});
  it('versiAnggota: opsi.anggota menang; rekaman room di perangkat tanpa room tuan = anggota; rekaman lokal = pemandu', () => {
    assert.equal(X3.versiAnggota(sesi(), null), true);
    assert.equal(X3.versiAnggota(sesi({ sumber: 'latih' }), null), false);
    assert.equal(X3.versiAnggota(sesi(), { anggota: false }), false);
    assert.equal(X3.versiAnggota(sesi({ sumber: 'ujiantim' }), { anggota: true }), true);
  });
  it('angkaTim: sesi.tim bila ada, selain itu dari jawaban terisi (kosong tidak dihitung)', () => {
    const ev = UKP.views.tim._uji.evaluasiLokal(sesi());
    assert.deepEqual(J(X3.angkaTim(sesi(), ev)), { benar: 3, dijawab: 7, tidak: 1 });   // v9.2 G3: tidak = kali tidak menjawab (disebut terpisah)
    assert.deepEqual(J(X3.angkaTim(sesi({ tim: { benar: 14, dijawab: 18 } }), ev)), { benar: 14, dijawab: 18, tidak: 0 });
  });
  it('v9.2 G3 satu cara hitung: skor tim sama di daftar latihan, rekap, dan angkaTim (benar ÷ jawaban yang masuk; tidak menjawab terpisah)', () => {
    const s = sesi(); const ev = X3.evaluasiLokal(s); const t = X3.angkaTim(s, ev);
    assert.deepEqual([t.benar, t.dijawab, t.tidak], [3, 7, 1]);
    const p = Math.round(3 / 7 * 100);
    assert.match(J(X3.ringkasSesi(s, ev)).meta, new RegExp('skor tim ' + p + '%$'));
    assert.ok(J(X3.rekapAnggota(s, ev)).includes('Skor tim ' + p + '% · 3 dari 7 jawaban benar · 1 kali tidak menjawab'));
    assert.ok(!/akurasi tim/i.test(J(X3.rekapAnggota(s, ev)).join('\n')));
  });
  it('sebaranTanpaNama: hitungan per opsi tanpa nama', () => {
    const ev = X3.evaluasiLokal(sesi()); const t = X3.sebaranTanpaNama(ev.soal[1]);
    assert.equal(t, 'A 1 · B 1 · C 2');
    assert.ok(!/Mita|Nora|Nicky|Aldi/.test(t));
  });
  it('rekapAnggota: tiga baris T6, terima kasih urut abjad tanpa nol, tanpa skor per nama', () => {
    const s = sesi({ tim: { benar: 3, dijawab: 7, hadir: 4, terimaKasih: { Mita: 3, Aldi: 0, Jeni: 2 }, bahasLagi: ['A1-002'] } });
    const r = J(X3.rekapAnggota(s, X3.evaluasiLokal(s)));
    // v9.2 G3: skor tim baku di baris sendiri; soal bahas lagi bersama nama topik (tanpa konten di uji: nama kelompok bila ada)
    assert.equal(r.length, 4);
    assert.equal(r[0], 'Malam ini: latihan bersama 2 soal · 4 orang ikut');
    assert.equal(r[1], 'Skor tim 43% · 3 dari 7 jawaban benar · 1 kali tidak menjawab');
    assert.equal(r[2], 'Menerima ucapan terima kasih: Jeni 2 kali, Mita 3 kali');
    assert.match(r[3], /^Perlu dibahas lagi: A1-002( · .+)?$/);
    assert.equal(X3.teksTerimaKasih(sesi({ tim: { terimaKasih: { Mita: 0 } } })), null);
    const tanpaTim = J(X3.rekapAnggota(sesi(), X3.evaluasiLokal(sesi())));
    assert.equal(tanpaTim.length, 3); assert.match(tanpaTim[2], /^Perlu dibahas lagi: A1-002/); // tanpa sesi.tim: tanpa terima kasih; A1-002 punya 3 jawaban salah
    assert.ok(!/Nicky \d|Mita \d|Nora \d/.test(tanpaTim.join('\n')));
  });
});

// v9.3 W2: kalimat waktu membahas di bagian Tempo (pembantu murni; data dari tempo.bahas dan tempo.totalDetik buatan js/learn.js)
describe('v9.3 evaluasi: waktu membahas di bagian Tempo', () => {
  const X4 = UKP.views.tim._uji;
  it('target 2:00: rata-rata, yang melewati target, terlama, dan baris total', () => {
    const k = J(X4.kalimatBahas({ detikPerSoal: 126, rataDetik: 132, totalDetik: 660, bahas: { target: 120, n: 5, rataDetik: 95, nLewat: 2, terlama: [{ id: 'A1-104', detik: 190 }, { id: 'B6-126', detik: 150 }], totalDetik: 480 } }));
    assert.equal(k.teks, 'Membahas: rata-rata 1:35 per soal, target 2:00.');
    assert.equal(k.lewat, '2 dari 5 soal melewati target.');
    assert.deepEqual(k.terlama.map(x => x.id), ['A1-104', 'B6-126']);
    assert.equal(k.total, 'Total 19 menit: 11 mengerjakan, 8 membahas.');
  });
  it('semua dalam target: tanpa kalimat lewat', () => {
    const k = J(X4.kalimatBahas({ totalDetik: 1260, bahas: { target: 180, n: 10, rataDetik: 61, nLewat: 0, terlama: [{ id: 'A1-104', detik: 170 }], totalDetik: 610 } }));
    assert.equal(k.teks, 'Membahas: rata-rata 1:01 per soal, target 3:00.');
    assert.equal(k.lewat, null);
    assert.equal(k.total, 'Total 31 menit: 21 mengerjakan, 10 membahas.');
  });
  it('Bebas (target 0): "tanpa target", tidak ada yang melewati target meski nLewat terisi, terlama tetap ada', () => {
    const k = J(X4.kalimatBahas({ totalDetik: 600, bahas: { target: 0, n: 4, rataDetik: 200, nLewat: 3, terlama: [{ id: 'A3-144', detik: 400 }, { id: 'A1-104', detik: 250 }, { id: 'B6-126', detik: 100 }, { id: 'X1-001', detik: 1 }], totalDetik: 800 } }));
    assert.equal(k.teks, 'Membahas: rata-rata 3:20 per soal, tanpa target.');
    assert.equal(k.lewat, null);
    assert.equal(k.terlama.length, 3, 'paling banyak 3');
    assert.equal(k.total, 'Total 23 menit: 10 mengerjakan, 13 membahas.');
  });
  it('rekaman lama atau tanpa waktu membahas: null (bagian waktu membahas disembunyikan); kalimat mengerjakan tidak berubah', () => {
    assert.equal(X4.kalimatBahas(null), null);
    // latihan kurang dari satu menit: tanpa baris "Total 0 menit"
    assert.equal(X4.kalimatBahas({ totalDetik: 12, bahas: { target: 120, n: 1, rataDetik: 9, nLewat: 0, terlama: [], totalDetik: 9 } }).total, null);
    assert.equal(X4.kalimatBahas({ totalDetik: 40, bahas: { target: 120, n: 1, rataDetik: 30, nLewat: 0, terlama: [], totalDetik: 30 } }).total, 'Total 2 menit: 1 mengerjakan, 1 membahas.');
    assert.equal(X4.kalimatBahas({ detikPerSoal: 126, rataDetik: 110 }), null);
    assert.equal(X4.kalimatBahas({ rataDetik: 110, bahas: null }), null);
    assert.equal(X4.kalimatBahas({ rataDetik: 110, bahas: { target: 120, n: 0, rataDetik: 0, nLewat: 0, terlama: [], totalDetik: 0 } }), null);
    // tanpa waktu mengerjakan tercatat (totalDetik tidak ada): total = waktu membahas saja
    assert.equal(J(X4.kalimatBahas({ rataDetik: 0, bahas: { target: 60, n: 1, rataDetik: 59, nLewat: 0, terlama: [], totalDetik: 59 } })).total, 'Total 1 menit: 0 mengerjakan, 1 membahas.');
    assert.equal(J(X4.kalimatTempo({ detikPerSoal: 126, rataDetik: 110, nLewat: 0, terlama: [], soalUjian: 100, menitUjian: 210, proyeksiMenit: 183, bahas: null })).lewat, false);
  });
});
