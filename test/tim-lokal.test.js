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
    bersama: { aktif: true, peserta: ['Nicky', 'Mia', 'Novia', 'Rara'] },
    jawabanBersama: [
      e('Mia', 'A2-001', 'A', 1, 9), e('Mia', 'A2-002', 'B', 0, 8), e('Mia', 'A2-003', 'C', 0, 2), e('mia', 'B7-004', 'D', 1, 1, 'B7.1'), e('Mia', 'A2-005', '-', 0, 0),
      e('Nicky', 'A2-001', 'A', 1, 3), e('Novia', 'A2-001', 'B', 0, 12),
      e('Tamu', 'A2-001', 'A', 1, 1),
    ],
    jawaban: [], simulasi: [],
  };
}

describe('dasbor tim: peserta latihan bersama (lokal)', () => {
  it('pesertaDari: urutan daftar peserta, nama tanpa peduli kapital, peserta tanpa jawaban ikut', () => {
    const r = X.pesertaDari(contoh(), KINI);
    assert.deepEqual(J(r.map(x => x.nama)), ['Nicky', 'Mia', 'Novia', 'Rara', 'Tamu']);
    const mia = r[1];
    assert.equal(mia.n, 5); assert.equal(mia.benar, 2);
    assert.equal(mia.n7, 3); assert.equal(mia.benar7, 1);
    assert.equal(mia.terakhir, KINI);
    assert.deepEqual([r[3].n, r[3].terakhir], [0, null]);
  });
  it('dokDari: skema ringkasan tim, jawaban terbaru dulu, null untuk nama tak dikenal', () => {
    const d = X.dokDari(contoh(), 'MIA', KINI);
    assert.equal(d.nama, 'Mia'); assert.equal(d.sumber, 'lokal'); assert.equal(d.tingkat, 'B');
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
    const d = X.dokDari(contoh(), 'Mia', Date.now());
    d.latihan.akurasi7 = 1; d.latihan.perTopikLemah = [{ topik: 'A2.5', n: 4, benar: 1 }];
    const n = X.normalLokal(d, 'Mia');
    assert.equal(n.id, 'lokal:Mia'); assert.equal(n.sumber, 'lokal'); assert.equal(X.sumberTeks(n), 'lokal');
    assert.equal(n.akurasi7, 1);
    assert.equal(n.jawaban.length, 5); assert.ok(n.jawaban.every(j => j.w < 1e11), 'w ms → detik');
    assert.equal(n.topikLemah[0].id, 'A2.5');
    assert.ok(X.adalahLokal('lokal:Mia') && !X.adalahLokal('kode-mia'));
    assert.equal(X.normalLokal(null, 'Mia'), null);
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
    id: 'sb-1', mulai: KINI - 12 * 60000, selesai: KINI, tingkat: 'B', peserta: ['Nicky', 'Mia', 'Novia'], anggaranDetik: 1500, sumber: 'latih',
    soal: [
      { id: 'B8-001', kode: 'B8', topik: 'B8.4', kunci: 'B', detik: 40, jawaban: { Nicky: j('B', 'yakin', 1), Mia: j('A', 'yakin', 0), Novia: j('-', null, 0) } },
      { id: 'B8-002', kode: 'B8', topik: 'B8.4', kunci: 'C', detik: 50, jawaban: { Nicky: j('C', 'ragu', 1), Mia: j('C', 'menebak', 1), Novia: j('D', null, 0) } },
      { id: 'B7-003', kode: 'B7', topik: 'B7.1', kunci: 'A', detik: 30, jawaban: { Nicky: j('A', null, 1), Mia: 'A', Novia: { o: '=1+1', k: 'aneh' } } },
    ],
  };
}
describe('dasbor tim: evaluasi sesi latihan bersama (v8.0)', () => {
  it('evaluasiLokal: angka per peserta, urut benar lalu urutan peserta, menit dari mulai–selesai', () => {
    const ev = J(X.evaluasiLokal(sesiContoh()));
    assert.equal(ev.nSoal, 3); assert.equal(ev.nPeserta, 3); assert.equal(ev.menit, 12);
    assert.deepEqual(ev.peserta.map(p => p.nama), ['Nicky', 'Mia', 'Novia']);
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
    assert.equal(ev.soal[2].perPeserta.Mia.b, 1, 'bentuk lama { nama: huruf } dinilai dari kunci');
    assert.deepEqual(ev.soal[2].perPeserta.Novia, { o: '-', k: null, b: 0 });
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
    assert.equal(baris[0], 'id;kode;topik;kunci;Nicky;Mia;Novia');
    assert.equal(baris[1], 'B8-001;B8;B8.4;B;B (yakin);A (yakin);kosong');
    assert.equal(baris[3], 'B7-003;B7;B7.1;A;A;A;kosong');
  });
  it('dokDari: k keyakinan (v8.0) tidak dibaca sebagai kode kelompok dan ikut jawaban', () => {
    const s = contoh();
    s.jawabanBersama.push({ p: 'Mia', s: 'A2-009', k: 'yakin', t: 'A2.5', o: 'B', b: 0, d: 20, w: KINI + 1000, m: 'latih', sesi: 'sb-1' });
    const d = X.dokDari(s, 'Mia', KINI);
    assert.equal(d.latihan.perKelompok.yakin, undefined);
    assert.equal(d.latihan.perKelompok.A2.n, 5);
    assert.equal(d.jawaban[0].k, 'yakin');
  });
});
