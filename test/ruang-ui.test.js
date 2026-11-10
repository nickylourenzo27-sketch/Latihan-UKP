/* Uji murni layar room v8.2 (js/views-ruang.js, UKP.ruangUI._murni): teks undangan, pengelompokan jawaban tim tanpa nama,
   sisa waktu dengan selisih jam, pemilihan keadaan view a–g dan lima keadaan HP anggota, teks penjelas aman (U2),
   kop skor tim (T1), rekap penutup (T6), kalimat awam tanpa istilah teknis. Tanpa DOM. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js', 'views-ruang.js']);
const M = UKP.ruangUI._murni;
const pol = o => JSON.parse(JSON.stringify(o)); // objek dari konteks vm → objek realm uji
const LARANGAN = /relai|mqtt|enkripsi|kode room|rahasia|anonim/i;

describe('ruang-ui: antarmuka terpasang', () => {
  it('menyediakan view, komponen, dan fungsi ruangUI yang dikunci brief', () => {
    assert.equal(typeof UKP.views.room, 'function');
    for (const k of ['kartuRoom', 'statusRoom', 'skorTim']) assert.equal(typeof UKP.c[k], 'function', k);
    for (const k of ['boot', 'dialogBuat', 'dialogMulaiLatihan', 'menu', 'dialogBagikan', 'itemMenu']) assert.equal(typeof UKP.ruangUI[k], 'function', k);
  });
  it('boot() tidak melempar tanpa UKP.ruang', () => {
    const asli = UKP.ruang; UKP.ruang = undefined;
    try { assert.doesNotThrow(() => UKP.ruangUI.boot()); } finally { UKP.ruang = asli; }
  });
});

describe('ruang-ui: teks undangan', () => {
  it('memuat nama room dan tautan apa adanya, tanpa istilah teknis', () => {
    const t = M.teksUndangan('Tim UKP Tingkat B', 'https://nickylourenzo27-sketch.github.io/Latihan-UKP/#room/K7QM-3XRTA-9HWPE');
    assert.equal(t, 'Room latihan UKP "Tim UKP Tingkat B". Buka tautan ini di HP, lalu ketuk nama Anda: https://nickylourenzo27-sketch.github.io/Latihan-UKP/#room/K7QM-3XRTA-9HWPE');
    assert.doesNotMatch(t, LARANGAN);
  });
  it('nama kosong → "Room tim"; spasi dan karakter kendali dirapikan', () => {
    assert.match(M.teksUndangan('', 'x'), /"Room tim"/);
    assert.match(M.teksUndangan('  Tim\n  B ', 'x'), /"Tim B"/);
  });
});

describe('ruang-ui: pengelompokan jawaban tim (tanpa nama)', () => {
  const per = { Nicky: { o: 'B', k: 'yakin', b: 1 }, Mia: { o: 'B', k: 'ragu', b: 1 }, Novia: { o: 'C', k: 'yakin', b: 0 }, Jessie: { o: 'B', k: null, b: 1 }, Melva: { o: 'A', k: 'menebak', b: 0 }, Alfi: { o: 'B', k: 'yakin', b: 1 } };
  it('menghitung per huruf, benar, dan total', () => {
    const k = M.kelompokJawaban(per, 'B');
    assert.deepEqual(pol(k.per), { A: 1, B: 4, C: 1, D: 0, '-': 0 });
    assert.equal(k.total, 6); assert.equal(k.benar, 4); assert.equal(k.dijawab, 6);
    assert.equal(M.teksBatang(k), 'A 1 · B 4 · C 1');
    assert.equal(M.teksBenarTim(k), '4 dari 6 benar');
  });
  it('teks batang dan bilah tidak memuat nama siapa pun', () => {
    const k = M.kelompokJawaban(per, 'B'); const t = M.teksBatang(k) + ' ' + M.teksBenarTim(k);
    for (const n of Object.keys(per)) assert.ok(!t.includes(n), n);
  });
  it('tidak menjawab dihitung terpisah; huruf aneh menjadi "-"; tanpa kunci memakai b', () => {
    const k = M.kelompokJawaban({ A1: { o: '-' }, A2: { o: 'x' }, A3: 'c', A4: { o: 'D', b: 1 } });
    assert.deepEqual(pol(k.per), { A: 0, B: 0, C: 1, D: 1, '-': 2 });
    assert.equal(k.benar, 1); assert.equal(k.dijawab, 2);
    assert.equal(M.teksBatang(k), 'C 1 · D 1 · tidak menjawab 2');
    assert.deepEqual(pol(M.kelompokJawaban(null).per), { A: 0, B: 0, C: 0, D: 0, '-': 0 });
  });
});

describe('ruang-ui: sisa waktu menurut jam pemimpin', () => {
  it('memakai selisih jam (jam pemimpin = lokal + selisih)', () => {
    const kini = 1_000_000;
    assert.equal(M.sisaDetik(kini + 60_000, 0, kini), 60);
    assert.equal(M.sisaDetik(kini + 60_000, 7_000, kini), 53);   // jam pemimpin 7 dtk lebih maju
    assert.equal(M.sisaDetik(kini + 60_000, -5_000, kini), 65);
    assert.equal(M.sisaDetik(kini + 500, 0, kini), 1);           // dibulatkan ke atas
    assert.equal(M.sisaDetik(kini - 10, 0, kini), 0);
    assert.equal(M.sisaDetik(null, 0, kini), null);
  });
  it('format mm:ss dan h:mm:ss', () => {
    assert.equal(M.fmtSisa(1470), '24:30'); assert.equal(M.fmtSisa(5020), '1:23:40'); assert.equal(M.fmtSisa(0), '00:00'); assert.equal(M.fmtSisa(null), '');
  });
});

describe('ruang-ui: pemilihan keadaan view (a–g)', () => {
  const st = (aktivitas) => ({ tuan: 'Nicky', room: { nama: 'Tim', peserta: ['Nicky', 'Mia'] }, aktivitas: aktivitas || null });
  const anggota = { kode: 'KODEKODEKODEKO', peran: 'anggota' }, tuan = { kode: 'KODEKODEKODEKO', peran: 'tuan' };
  it('tidak tersedia, kode salah, tab kedua', () => {
    assert.equal(M.pilihKeadaan({ tersedia: false, kode: 'X' }), 'tidakTersedia');
    assert.equal(M.pilihKeadaan({ tersedia: true, kodeSalah: true }), 'kodeSalah');
    assert.equal(M.pilihKeadaan({ tersedia: true, tabKedua: true }), 'tabKedua');
  });
  it('(a) gabung bila kode tautan ≠ room perangkat ini; (b) kosong tanpa room', () => {
    assert.equal(M.pilihKeadaan({ tersedia: true, kode: 'LAINLAINLAINLA' }), 'gabung');
    assert.equal(M.pilihKeadaan({ tersedia: true, kode: 'LAINLAINLAINLA', info: anggota, state: st() }), 'gabung');
    assert.equal(M.pilihKeadaan({ tersedia: true, kode: 'KODEKODEKODEKO', info: anggota, state: st() }), 'lobi');
    assert.equal(M.pilihKeadaan({ tersedia: true }), 'kosong');
  });
  it('menunggu state, (c) lobi, (d)/(e) latihan, (f)/(g) ujian', () => {
    assert.equal(M.pilihKeadaan({ tersedia: true, info: anggota, state: null }), 'menunggu');
    assert.equal(M.pilihKeadaan({ tersedia: true, info: tuan, state: st() }), 'lobi');
    const lat = { jenis: 'latihan', id: 'sb-1', soalIds: ['A1-001'], idx: 0, fase: 'jawab' };
    const uji = { jenis: 'ujian', id: 'ut1', kode: 'UT1.x', status: 'jalan' };
    assert.equal(M.pilihKeadaan({ tersedia: true, info: anggota, state: st(lat) }), 'latihanAnggota');
    assert.equal(M.pilihKeadaan({ tersedia: true, info: tuan, state: st(lat) }), 'latihanTuan');
    assert.equal(M.pilihKeadaan({ tersedia: true, info: anggota, state: st(uji) }), 'ujianAnggota');
    assert.equal(M.pilihKeadaan({ tersedia: true, info: tuan, state: st(uji) }), 'ujianTuan');
  });
  it('lima keadaan HP anggota: menjawab → terkirim → hasil; Ubah jawaban kembali ke menjawab', () => {
    const a = { jenis: 'latihan', id: 'sb-1', soalIds: ['A1-001', 'A1-002'], idx: 1, fase: 'jawab' };
    assert.equal(M.keadaanAnggota(a, null, false), 'menjawab');
    assert.equal(M.keadaanAnggota(a, { o: 'B', k: null }, false), 'menjawab');   // huruf tanpa keyakinan
    assert.equal(M.keadaanAnggota(a, { o: 'B', k: 'yakin' }, false), 'terkirim');
    assert.equal(M.keadaanAnggota(a, { o: '-', k: null }, false), 'terkirim');   // Tidak tahu
    assert.equal(M.keadaanAnggota(a, { o: 'B', k: 'yakin' }, true), 'menjawab');
    const k = Object.assign({}, a, { fase: 'kunci', hasilSoal: { soalId: 'A1-002', per: {} } });
    assert.equal(M.keadaanAnggota(k, null, false), 'hasil');
    assert.equal(M.keadaanAnggota(null), 'lobi');
  });
});

describe('ruang-ui: teks penjelas aman (U2)', () => {
  const per = { Nicky: { o: 'B', b: 1 }, Mia: { o: 'B', k: 'yakin', b: 1 }, Jessie: { o: 'B', b: 1 }, Alfi: { o: 'B', b: 1 }, Novia: { o: 'C', k: 'yakin', b: 0 }, Melva: { o: 'C', b: 0 } };
  const dasar = { per, penjelas: 'Mia', kunci: 'B', label: 'Terbelah 4–2', opsiKeliru: 'C', alasanLabel: 'angka usang' };
  it('baris umum tidak menyebut nama yang keliru', () => {
    const t = M.teksPenjelas(Object.assign({ nama: 'Nicky' }, dasar));
    assert.equal(t.umum, 'Terbelah 4–2 · Mia jelaskan kenapa B · C menggoda 2 orang (angka usang)');
    assert.ok(!t.umum.includes('Novia') && !t.umum.includes('Melva'));
    assert.doesNotMatch(t.umum, LARANGAN);
  });
  it('HP penjelas, HP yang keliru (Dengarkan + Paham), HP yang benar', () => {
    const pj = M.teksPenjelas(Object.assign({ nama: 'mia' }, dasar));
    assert.equal(pj.pribadi, 'Giliran Anda menjelaskan kenapa B.'); assert.equal(pj.peran, 'penjelas'); assert.equal(pj.bolehPaham, false);
    const salah = M.teksPenjelas(Object.assign({ nama: 'Novia' }, dasar));
    assert.equal(salah.pribadi, 'Dengarkan Mia.'); assert.equal(salah.bolehPaham, true);
    const benar = M.teksPenjelas(Object.assign({ nama: 'Alfi' }, dasar));
    assert.equal(benar.pribadi, 'Benar · B'); assert.equal(benar.bolehPaham, false);
    const absen = M.teksPenjelas(Object.assign({ nama: 'Orang lain' }, dasar));
    assert.equal(absen.bolehPaham, true, 'yang tidak menjawab soal itu juga boleh berterima kasih');
  });
  it('penjelas yang tidak ada di per diabaikan; tanpa penjelas → kalimat umum tanpa nama', () => {
    const t = M.teksPenjelas(Object.assign({ nama: 'Novia' }, dasar, { penjelas: 'Budi' }));
    assert.equal(t.bolehPaham, false); assert.ok(!/Budi/.test(t.umum)); assert.match(t.umum, /dibahas bersama/);
    const t2 = M.teksPenjelas({ per: { A: { o: 'C' }, B: { o: 'C' } }, kunci: 'B', nama: 'A', label: 'Semua belum tepat' });
    assert.match(t2.umum, /baca pembahasan bersama/);
  });
});

describe('ruang-ui: kop skor tim (T1) dan garis lulus', () => {
  it('"Tim 14/18 benar · 78%" setelah 3 soal (5/6, 3/6, 6/6)', () => {
    assert.equal(M.teksSkorTim({ benar: 14, dijawab: 18 }), 'Tim 14/18 benar · 78%');
    assert.equal(M.teksSkorTim({ benar: 41, dijawab: 60 }), 'Tim 41/60 benar · 68%');
  });
  it('tanpa tim (klien lama) → kosong', () => { assert.equal(M.teksSkorTim(null), ''); assert.equal(M.teksSkorTim({ benar: 0, dijawab: 0 }), ''); assert.equal(M.persenTim(undefined), null); });
  it('sejakLulus: pertama kali ≥ 60 setelah ≥ 5 soal, dan masih di atas', () => {
    const r = [{ ke: 1, benar: 6, dijawab: 6 }, { ke: 5, benar: 15, dijawab: 30 }, { ke: 6, benar: 20, dijawab: 36 }, { ke: 7, benar: 26, dijawab: 42 }, { ke: 8, benar: 32, dijawab: 48 }];
    assert.equal(M.sejakLulus(r), 7);
    assert.equal(M.sejakLulus(r.slice(0, 2)), null);
    assert.equal(M.sejakLulus([{ ke: 1, benar: 6, dijawab: 6 }]), null, 'kurang dari 5 soal');
    assert.equal(M.sejakLulus(r.concat([{ ke: 9, benar: 32, dijawab: 54 }])), null, 'sudah turun di bawah garis');
  });
});

describe('ruang-ui: rekap penutup (T6)', () => {
  const sesi = { id: 'sb-1', mulai: new Date(2026, 10, 10, 19, 30).getTime(), peserta: ['Nicky', 'Mia', 'Novia'],
    soal: [{ id: 'B6-001', kunci: 'B', jawaban: { Nicky: { o: 'B' }, Mia: { o: 'B' }, Novia: { o: 'C' } } },
      { id: 'B6-002', kunci: 'A', jawaban: { Nicky: { o: 'A' }, Mia: { o: 'C' }, Novia: { o: '-' } } }] };
  it('menghitung hadir, jumlah soal, skor tim; Hasilku hanya untuk nama sendiri dan tidak ikut disalin', () => {
    const r = M.rekapPenutup(sesi, 'Novia');
    assert.equal(r.baris[0], 'Malam ini: 3 dari 3 hadir · 2 soal · skor tim 60%');
    assert.equal(r.hasilku, 'Hasilku: 0 dari 2');
    assert.ok(!r.salin.includes('Hasilku'));
    assert.equal(r.terimaKasih, null, 'tanpa ucapan → baris dihilangkan');
    for (const n of sesi.peserta) assert.ok(!r.salin.includes(n + ' '), 'salinan tidak memuat skor per nama: ' + n);
  });
  it('memakai sesi.tim bila ada: terima kasih abjad tanpa nol, bahas lagi', () => {
    const s2 = Object.assign({}, sesi, { tim: { akurasi: 78, hadir: 5, terimaKasih: { Mia: 3, Jessie: 2, Alfi: 0 }, bahasLagi: ['B-76', 'B-81'] }, peserta: ['a', 'b', 'c', 'd', 'e', 'f'] });
    const r = M.rekapPenutup(s2, null, { awal: 'Malam ini' });
    assert.equal(r.baris[0], 'Malam ini: 5 dari 6 hadir · 2 soal · skor tim 78%');
    assert.equal(r.terimaKasih, 'Terima kasih untuk penjelas: Jessie (2), Mia (3)');
    assert.equal(r.bahasLagi, 'Bahas lagi minggu depan: B-76, B-81');
    assert.equal(r.salin.split('\n').length, 3);
    assert.equal(r.hasilku, null);
  });
  it('soal dengan ≥ 3 salah masuk "bahas lagi" bila sesi.tim tidak ada', () => {
    const s3 = { id: 'x', mulai: 1, peserta: ['A', 'B', 'C', 'D'], soal: [{ id: 'B6-009', kunci: 'B', jawaban: { A: { o: 'A' }, B: { o: 'C' }, C: { o: '-' }, D: { o: 'B' } } }] };
    assert.equal(M.rekapPenutup(s3, 'D').bahasLagi, 'Bahas lagi minggu depan: B6-009');
  });
  it('masukan rusak → null', () => { assert.equal(M.rekapPenutup(null), null); });
});

describe('ruang-ui: teks awam dan pembantu kecil', () => {
  it('alasan tidak tersedia tidak memuat istilah teknis', () => {
    const asli = ['Room tim tidak berjalan di claude.ai.', 'Halaman ini tidak punya WebCrypto (butuh https).', 'Peramban tanpa WebSocket.', 'Belum bisa menghubungi relai room. Periksa internet; … CSP …', ''];
    for (const a of asli) { const t = M.alasanAwam(a); assert.ok(t.length > 10); assert.doesNotMatch(t, LARANGAN, t); }
    assert.match(M.alasanAwam('claude.ai'), /website tim/);
    assert.match(M.alasanAwam('x', { semuaGagal: true }), /data seluler/);
  });
  it('ringkasHadir maks. 3 nama lalu +n', () => {
    assert.equal(M.ringkasHadir(['Nicky', 'Mia', 'Jessie']), 'Nicky, Mia, Jessie sedang di room');
    assert.equal(M.ringkasHadir(['Nicky', 'Mia', 'Jessie', 'Alfi', 'Melva']), 'Nicky, Mia, Jessie +2 sedang di room');
    assert.equal(M.ringkasHadir([]), 'Belum ada yang di room');
  });
  it('inisial, tanggal pendek, baris riwayat, label sesi lalu, cek sambungan', () => {
    assert.equal(M.inisial('Nicky'), 'NI'); assert.equal(M.inisial('Mia Sari'), 'MS'); assert.equal(M.inisial(''), '?');
    const t = new Date(2026, 10, 10, 19).getTime();
    assert.equal(M.tglPendek(t), 'Sel 10 Nov');
    assert.equal(M.teksRiwayat({ t, mode: 'latihan', nSoal: 20, akurasiTim: 68 }), 'Sel 10 Nov · Latihan · 20 soal · akurasi tim 68%');
    assert.equal(M.teksRiwayat({ t, mode: 'latihan', nSoal: 10 }), 'Sel 10 Nov · Latihan · 10 soal');
    assert.equal(M.labelSesiLalu(t - 7 * 86400000, t), 'Minggu lalu'); assert.equal(M.labelSesiLalu(t - 86400000, t), 'Sesi lalu');
    assert.equal(M.teksCekSambungan([{ ok: true }, { ok: false }, { ok: true }, { ok: false }]), 'Sambungan 2 dari 4 tersedia');
    assert.doesNotMatch(M.teksCekSambungan([]), LARANGAN);
  });
});
