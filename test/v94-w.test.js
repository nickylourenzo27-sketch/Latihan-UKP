/* Uji v9.4 Paket W: waktu mengerjakan TANPA BATAS di latihan bersama.
   Mode tempo 'bebas' (L.tempoBersama/aturTempoBersama, store.normal), anggaran, rekaman sesi, evaluasi (ringkas tempo, kalimat Tempo,
   rekap WhatsApp), titik lanjut, pesan room (detikPerSoal 0 + akhirSesi null, diterima validator ruang.js), baris waktu HP (hitung naik,
   durasi panjang) dan teks ringkas dialog Mulai. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const J = x => JSON.parse(JSON.stringify(x));
const UKP = muatInti(['core.js', 'learn.js']);
const L = UKP.belajar;
const soalX = (i, topik, kunci) => ({ id: 'X1-' + String(i).padStart(3, '0'), kode: 'X1', topik, kunci: kunci || 'B', stem: 'Soal ' + i, opsi: { A: 'a', B: 'b', C: 'c', D: 'd' } });
const SOAL = [soalX(1, 'X1.1'), soalX(2, 'X1.1', 'C'), soalX(3, 'X1.2', 'A'), soalX(4, 'X1.2', 'D')];
UKP.register({ meta: { kode: 'X1', nama: 'Kelompok uji' }, topik: [{ id: 'X1.1', judul: 'T1' }, { id: 'X1.2', judul: 'T2' }], soal: SOAL });
const s = UKP.store.get();
const TANPA_NILAI = /melewati|lewat|sisa|habis|NaN|undefined/i;

describe('v9.4 W: mode tempo tanpa batas (data)', () => {
  it('aturTempoBersama("bebas") → { mode: "bebas", detik: 0 }; tersimpan dan bertahan normal()', () => {
    assert.deepEqual(J(L.aturTempoBersama('bebas')), { mode: 'bebas', detik: 0 });
    assert.equal(s.bersama.tempo, 'bebas');
    assert.deepEqual(J(L.tempoBersama()), { mode: 'bebas', detik: 0 });
    assert.equal(UKP.store.normal(J(s)).bersama.tempo, 'bebas');
    assert.ok(L.tempoTanpaBatas('bebas')); assert.ok(!L.tempoTanpaBatas('ujian'));
    assert.deepEqual(J(L.PILIHAN_TEMPO), ['ujian', 'longgar', 'bebas']);
  });
  it('data lama tetap sah: ujian/longgar tidak berubah, nilai tak dikenal → ujian, tanpa field → ujian', () => {
    assert.deepEqual(J(L.aturTempoBersama('longgar')), { mode: 'longgar', detik: 150 });
    assert.equal(L.aturTempoBersama('tanpa').mode, 'ujian');
    assert.equal(UKP.store.normal({ bersama: { aktif: true, peserta: ['Mita'], tempo: 'xyz' } }).bersama.tempo, undefined);
    assert.equal(UKP.store.normal({ bersama: { aktif: true, peserta: ['Mita'] } }).bersama.tempo, undefined);
    delete s.bersama.tempo; assert.equal(L.tempoBersama().mode, 'ujian');
  });
  it('anggaranBersama: tanpa batas (0 atau "bebas") → 0 (tidak ada perkiraan lama); berwaktu tidak berubah', () => {
    assert.equal(L.anggaranBersama(10, 0, 120), 0);
    assert.equal(L.anggaranBersama(10, 'bebas', 0), 0);
    assert.equal(L.anggaranBersama(10, 126, 120), 2460);
    assert.equal(L.anggaranBersama(10, 126, 0), 1260);
    assert.equal(L.anggaranBersama(3, 150, 'x'), 450);
  });
  it('mulaiSesiBersama tanpa batas: tempo "bebas", detikPerSoal 0, anggaranDetik 0 (bukan anggaran cadangan)', () => {
    s.profil.tingkat = 'B';
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002', 'X1-003'], 0, { tempo: 'bebas', detikPerSoal: 0, detikBahas: 120, mode: 'latihan' });
    const x = L.sesiBersamaDari(id);
    assert.deepEqual([x.tempo, x.detikPerSoal, x.anggaranDetik, x.detikBahas], ['bebas', 0, 0, 120]);
    // detikPerSoal yang tidak masuk akal untuk tanpa batas tetap 0
    const id2 = L.mulaiSesiBersama(['Nicky'], ['X1-001'], 999, { tempo: 'bebas', detikPerSoal: 126 });
    const x2 = L.sesiBersamaDari(id2); assert.deepEqual([x2.detikPerSoal, x2.anggaranDetik], [0, 0]);
    // sesi berwaktu tetap seperti v9.3
    const id3 = L.mulaiSesiBersama(['Nicky'], ['X1-001', 'X1-002'], 0, { tempo: 'longgar', detikPerSoal: 150, detikBahas: 60 });
    const x3 = L.sesiBersamaDari(id3); assert.deepEqual([x3.tempo, x3.detikPerSoal, x3.anggaranDetik], ['longgar', 150, 420]);
  });
});

function sesiBebas(detik, tempo) {
  const id = L.mulaiSesiBersama(['Nicky', 'Mita'], SOAL.map(q => q.id), 0, tempo === 'ujian' ? { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120 } : { tempo: 'bebas', detikPerSoal: 0, detikBahas: 120 });
  SOAL.forEach((q, i) => { L.catatSoalSesi(id, q, { Nicky: q.kunci, Mita: 'A' }, detik[i]); L.catatBahasSesi(id, q.id, 90); });
  return L.akhiriSesiBersama(id);
}

describe('v9.4 W: evaluasi sesi tanpa batas', () => {
  it('ringkas tempo: tanpaBatas, nLewat 0, terlama = 3 soal terlama dari semua soal; sesi berwaktu tanpa field tanpaBatas', () => {
    const ev = L.evaluasiSesi(sesiBebas([300, 40, 500, 200]));
    const t = J(ev.tempo);
    assert.equal(t.tanpaBatas, true); assert.equal(t.detikPerSoal, 0); assert.equal(t.nLewat, 0); assert.equal(t.rataDetik, 260);
    assert.deepEqual(t.terlama.map(x => x.id), ['X1-003', 'X1-001', 'X1-004']);
    assert.ok(t.bahas && t.bahas.n === 4);
    const ew = J(L.evaluasiSesi(sesiBebas([300, 40, 500, 200], 'ujian')).tempo);
    assert.equal('tanpaBatas' in ew, false); assert.equal(ew.nLewat, 3); assert.equal(ew.detikPerSoal, 126);
  });
  it('rekap WhatsApp: "Waktu mengerjakan tanpa batas · rata-rata 4:20 per soal · 6 menit membahas", tanpa "melewati"', () => {
    const r = L.rekapSesi(sesiBebas([300, 40, 500, 200]));
    assert.match(r, /^Waktu mengerjakan tanpa batas · rata-rata 4:20 per soal · 6 menit membahas$/m);
    assert.doesNotMatch(r, /melewati|lewat|habis/);
    // sesi berwaktu: baris v9.3 tidak berubah
    const rw = L.rekapSesi(sesiBebas([300, 40, 500, 200], 'ujian'));
    assert.match(rw, /^Waktu: 17 menit mengerjakan · 6 menit membahas$/m);
  });
  it('kalimat Tempo di Evaluasi: rata-rata saja, tanpa proyeksi dan tanpa penilaian; sesi berwaktu tidak berubah', () => {
    const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^ref\.js$/.test(f)).map(f => 'data/' + f);
    const U = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js'])); const X = U.views.tim._uji;
    const k = J(X.kalimatTempo({ detikPerSoal: 0, tanpaBatas: true, rataDetik: 260, nLewat: 0, terlama: [], soalUjian: 100, menitUjian: 210, proyeksiMenit: 433 }));
    assert.deepEqual(k, { lewat: false, tanpaBatas: true, teks: 'Mengerjakan: rata-rata 4:20 per soal, tanpa batas waktu.' });
    assert.doesNotMatch(k.teks, TANPA_NILAI);
    const lama = J(X.kalimatTempo({ detikPerSoal: 126, rataDetik: 151, nLewat: 2, terlama: [], soalUjian: 100, menitUjian: 210, proyeksiMenit: 252 }));
    assert.equal(lama.lewat, true); assert.match(lama.teks, /lewat 42 menit dari 210/);
  });
});

describe('v9.4 W: titik lanjut (latihan terputus lalu dilanjutkan tetap tanpa batas)', () => {
  it('simpanBersamaAktif menyimpan tempo "bebas", detikPerSoal null, lamaDetik; bertahan normal() dan bersamaAktif()', () => {
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ['X1-001', 'X1-002'], 0, { tempo: 'bebas', detikPerSoal: 0, detikBahas: 0 });
    L.catatSoalSesi(id, SOAL[0], { Nicky: 'B' }, 400);
    const r = J(L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001', 'X1-002'], idx: 1, sisaDetik: 0, anggaranDetik: 0, tempo: 'bebas', detikPerSoal: 0, lamaDetik: 4325, detikBahas: 0 }));
    assert.deepEqual([r.tempo, r.detikPerSoal, r.sisaDetik, r.anggaranDetik, r.lamaDetik, r.detikBahas], ['bebas', null, 0, 0, 4325, 0]);
    const n = UKP.store.normal(J(s));
    assert.equal(n.bersamaAktif.tempo, 'bebas'); assert.equal(n.bersamaAktif.lamaDetik, 4325);
    assert.equal(L.bersamaAktif().tempo, 'bebas');
    // nilai rusak → 0; titik lanjut lama (tanpa lamaDetik) tetap sah
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: [], lamaDetik: 'x' }).lamaDetik, 0);
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: [], lamaDetik: -5 }).lamaDetik, 0);
    const lama = L.simpanBersamaAktif({ sesiId: id, soalIds: ['X1-001'], idx: 0, sisaDetik: 300, anggaranDetik: 600, tempo: 'longgar', detikPerSoal: 150 });
    assert.deepEqual([lama.tempo, lama.detikPerSoal, lama.sisaDetik], ['longgar', 150, 300]);
    L.simpanBersamaAktif(null);
  });
});

describe('v9.4 W: papan dan pesan room', () => {
  const U2 = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
  it('teks ringkas di saringan: tanpa batas → tidak ada perkiraan lama; berwaktu tidak berubah', () => {
    assert.equal(U2.c.teksWaktuBersama(20, 0, 120), '20 soal · mengerjakan tanpa batas · membahas 2 menit per soal · lama latihan tidak diperkirakan');
    assert.equal(U2.c.teksWaktuBersama(10, 0, 0), '10 soal · mengerjakan tanpa batas · membahas bebas · lama latihan tidak diperkirakan');
    assert.equal(U2.c.teksWaktuBersama(10, 126, 120), '10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)');
  });
  it('penyiar room mengirim detikPerSoal 0 dan akhirSesi null untuk tanpa batas', () => {
    const terima = []; const st = { aktivitas: null };
    const R = { state: () => J(st), mulaiLatihan: o => { terima.push(J(o)); st.aktivitas = { jenis: 'latihan', id: o.id, soalIds: o.soalIds, idx: 0, fase: 'jawab' }; return true; },
      aturSoal: i => { st.aktivitas.idx = i; return true; }, bukaKunci: () => true, akhiriAktivitas: () => { st.aktivitas = null; } };
    const sr = U2.latihRoom.buatSiarRoom(R, { sesiId: 'sb-w', soalIds: ['X1-001', 'X1-002'], detikPerSoal: 0, detikBahas: 120, akhirSesi: () => null });
    assert.equal(sr.mulai(0), true);
    assert.equal(terima[0].detikPerSoal, 0); assert.equal(terima[0].akhirSesi, null); assert.equal(terima[0].detikBahas, 120);
  });
  it('validator room (ruang.js, sama di 9.0 sampai 9.3.2) menerima detikPerSoal 0 + akhirSesi null', () => {
    const UR = muatInti(['core.js', 'ruang.js']); const P = UR.ruang._protokol;
    const st = { v: 1, t: 1700000000000, urut: 5, d: 'ab12cd34ef56', nama: 'Nicky', tuan: 'Nicky', room: { nama: 'Tim B', peserta: ['Nicky', 'Mita'], tingkat: 'B' }, versiApp: '9.4',
      aktivitas: { jenis: 'latihan', id: 'sb-1', soalIds: ['A1-104', 'B6-126'], idx: 0, fase: 'jawab', mulaiSoal: 1700000000000, detikPerSoal: 0, akhirSesi: null, hasilSoal: null, detikBahas: 120 } };
    const v = J(P.validState(st));
    assert.ok(v); assert.equal(v.aktivitas.detikPerSoal, 0); assert.equal(v.aktivitas.akhirSesi, null);
  });
});

describe('v9.4 W: dialog Mulai dan baris waktu HP', () => {
  const UR = muatInti(['core.js', 'learn.js', 'views-ruang.js']); const M = UR.ruangUI._murni;
  const T0 = 1700000000000;
  const akt = o => Object.assign({ jenis: 'latihan', id: 'sb-1', soalIds: ['A1-104', 'B6-126'], idx: 0, fase: 'jawab', mulaiSoal: T0, detikPerSoal: 0, akhirSesi: null, hasilSoal: null, tim: null, detikBahas: 120, mulaiBahas: null }, o || {});
  it('teks ringkas dialog Mulai: tanpa batas ditulis jelas tanpa perkiraan menit', () => {
    assert.equal(M.teksRingkasWaktu(20, 0, 120), '20 soal · mengerjakan tanpa batas · membahas 2 menit per soal · lama latihan tidak diperkirakan');
    assert.equal(M.teksRingkasWaktu(10, 0, 0), '10 soal · mengerjakan tanpa batas · membahas bebas · lama latihan tidak diperkirakan');
    assert.equal(M.teksRingkasWaktu(10, 126, 120), '10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)');
  });
  it('HP · tanpa batas: "Mengerjakan 1:21" hitung naik dari mulaiSoal, memakai selisih jam pemimpin, tidak pernah habis', () => {
    assert.deepEqual(J(M.barisWaktuHP(akt(), 0, T0 + 81000)), { fase: 'kerja', teks: 'Mengerjakan 1:21', habis: false, sisa: null, naik: 81 });
    assert.equal(M.barisWaktuHP(akt(), 0, T0).teks, 'Mengerjakan 0:00');
    assert.equal(M.barisWaktuHP(akt(), 30000, T0 + 51000).teks, 'Mengerjakan 1:21');   // jam HP 30 detik di belakang
    assert.equal(M.barisWaktuHP(akt(), -60000, T0).teks, 'Mengerjakan 0:00');          // jam HP di depan: tidak negatif
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 999000, { sudahJawab: true }).habis, false);
  });
  it('HP · durasi panjang: lebih dari satu jam → j:mm:ss; dibatasi 24 jam; teks tanpa sisa/lewat/habis/NaN', () => {
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 3599000).teks, 'Mengerjakan 59:59');
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 3600000).teks, 'Mengerjakan 1:00:00');
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + (2 * 3600 + 5 * 60 + 9) * 1000).teks, 'Mengerjakan 2:05:09');
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 9 * 86400000).teks, 'Mengerjakan 24:00:00');
    const semua = [0, 81000, 3600000, 9e9].map(d => M.barisWaktuHP(akt(), 0, T0 + d).teks).join(' ');
    assert.doesNotMatch(semua, TANPA_NILAI);
    assert.equal(M.fmtNaik(81), '1:21'); assert.equal(M.fmtNaik(3725), '1:02:05'); assert.equal(M.fmtNaik(NaN), '0:00');
  });
  it('HP · tanpa batas: mulaiSoal tidak sah → tanpa baris; membahas tetap mengikuti pilihannya sendiri', () => {
    assert.equal(M.barisWaktuHP(akt({ mulaiSoal: 0 }), 0, T0), null);
    assert.equal(M.barisWaktuHP(akt({ mulaiSoal: 'x' }), 0, T0), null);
    const k = akt({ fase: 'kunci', mulaiBahas: T0 + 100000 });
    assert.equal(M.barisWaktuHP(k, 0, T0 + 130000).teks, 'Membahas · sisa 1:30');
    assert.equal(M.barisWaktuHP(akt({ fase: 'kunci', mulaiBahas: T0, detikBahas: 0 }), 0, T0 + 1000), null);
  });
  it('HP · pemimpin berwaktu (termasuk versi lama: detikPerSoal selalu positif) tetap hitung mundur', () => {
    assert.equal(M.barisWaktuHP(akt({ detikPerSoal: 126 }), 0, T0 + 45000).teks, 'Mengerjakan · sisa 1:21');
    assert.equal(M.barisWaktuHP(akt({ detikPerSoal: 126 }), 0, T0 + 126000).habis, true);
  });
});

// ---------- v9.4 perbaikan FA (temuan tinjauan w-data 1 dan 3, tampilan 4) ----------
describe('v9.4 FA1: dialog "Anggota ujian tim" tanpa pilihan waktu mengerjakan', () => {
  const baca = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
  it('views-simulasi.js: dialog Anggota ujian tim memanggil aturBersama dengan tanpaTempo: true', () => {
    const m = /judul: 'Anggota ujian tim'[\s\S]{0,400}?UKP\.c\.aturBersama\(\{([^}]*)\}/.exec(baca('js/views-simulasi.js'));
    assert.ok(m, 'pemanggilan aturBersama di dialog Anggota ujian tim tidak ditemukan');
    assert.match(m[1], /tanpaTempo:\s*true/);
  });
  it('views-belajar.js: aturBersama tidak memasang segmen waktu (beserta kalimatnya) bila o.tanpaTempo', () => {
    const vb = baca('js/views-belajar.js');
    assert.match(vb, /o\.tanpaTempo \? null : segTempo/);
    // pemanggil lain (saringan Latih, Pengaturan) tidak memakai opsi itu: tiga pilihan tetap ada di sana
    assert.doesNotMatch(baca('js/views-alat.js'), /tanpaTempo/);
    assert.doesNotMatch(vb.replace(/o\.tanpaTempo/g, ''), /tanpaTempo:\s*true/);
  });
});

describe('v9.4 FA11: tempo latihan yang dilanjutkan (UKP.latihRoom._murni.tempoLanjut)', () => {
  const U = muatInti(['core.js', 'learn.js', 'views-belajar.js']); const M = U.latihRoom._murni;
  it('titik lanjut tempo "bebas" tetap tanpa batas (detik 0) dan lamaDetik terbawa', () => {
    assert.equal(typeof M.tempoLanjut, 'function');
    assert.deepEqual(J(M.tempoLanjut({ tempo: 'bebas', detikPerSoal: null, sisaDetik: 0, lamaDetik: 15 }, 'B')), { mode: 'bebas', detik: 0, lamaAwal: 15 });
    assert.deepEqual(J(M.tempoLanjut({ tempo: 'bebas', detikPerSoal: 126, lamaDetik: 3910 }, 'B')), { mode: 'bebas', detik: 0, lamaAwal: 3910 });
  });
  it('titik lanjut lama tanpa field tempo tetap berwaktu (Seperti ujian, tempo ujian tingkat itu); lamaDetik tak ada → 0', () => {
    assert.deepEqual(J(M.tempoLanjut({ sisaDetik: 900, anggaranDetik: 2460 }, 'B')), { mode: 'ujian', detik: U.belajar.tempoUjian('B'), lamaAwal: 0 });
    assert.deepEqual(J(M.tempoLanjut({ tempo: 'longgar' }, 'B')), { mode: 'longgar', detik: U.belajar.TEMPO_LONGGAR || 150, lamaAwal: 0 });
    assert.deepEqual(J(M.tempoLanjut({ tempo: 'ujian', detikPerSoal: 140 }, 'B')), { mode: 'ujian', detik: 140, lamaAwal: 0 });
    assert.equal(M.tempoLanjut({ tempo: 'xyz' }, 'B').mode, 'ujian');
  });
  it('lamaDetik tidak wajar → 0, dibatasi 30 hari', () => {
    assert.equal(M.tempoLanjut({ tempo: 'bebas', lamaDetik: -5 }).lamaAwal, 0);
    assert.equal(M.tempoLanjut({ tempo: 'bebas', lamaDetik: 'abc' }).lamaAwal, 0);
    assert.equal(M.tempoLanjut({ tempo: 'bebas', lamaDetik: 9e9 }).lamaAwal, 30 * 86400);
  });
  it('pelari memakai tempoLanjut untuk lanjutan dan menyimpan lamaDetik di titik lanjut', () => {
    const vb = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-belajar.js'), 'utf8');
    assert.match(vb, /const tl = lanjut \? MR\.tempoLanjut\(lanjut, tingkat\) : null;/);
    assert.match(vb, /const lamaAwal = tl \? tl\.lamaAwal : 0;/);
    assert.match(vb, /L\.simpanBersamaAktif\(\{[^}]*tempo: tb\.mode, detikPerSoal: detikTempo, lamaDetik: lamaSesi\(\)/);
  });
});

describe('v9.4 FA10: kop papan di HP sempit menulis "Latihan 0:02", bukan "Waktu 0:02"', () => {
  it('kata "Waktu " dibungkus .waktu-kata (disembunyikan di < 360 px) dan "latihan" ber-huruf besar di sana', () => {
    const vb = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-belajar.js'), 'utf8');
    assert.match(vb, /waktuEl\.replaceChildren\(h\('span', \{ class: 'waktu-kata' \}, 'Waktu '\), h\('span', \{ class: 'waktu-kapital' \}, 'latihan '\), dl\)/);
    const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
    const blok = css.slice(css.indexOf('/* ===== v9.4 perbaikan FA ===== */'));
    assert.ok(css.includes('/* ===== v9.4 perbaikan FA ===== */'));
    assert.match(blok, /@media \(max-width: 359px\) \{[^}]*\.waktu-kapital[^}]*text-transform: capitalize/);
  });
});
