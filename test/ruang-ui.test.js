/* Uji murni layar room v8.2 (+ v9.2 G2: istilah baku, satu cara menghitung, tanpa nama dari kode) (js/views-ruang.js, UKP.ruangUI._murni): teks undangan, pengelompokan jawaban tim tanpa nama,
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
    assert.equal(t, 'Room MABAR UKP "Tim UKP Tingkat B". Buka tautan ini di HP, lalu ketuk nama Anda: https://nickylourenzo27-sketch.github.io/Latihan-UKP/#room/K7QM-3XRTA-9HWPE');
    assert.doesNotMatch(t, LARANGAN);
  });
  it('nama kosong → "Room tim"; spasi dan karakter kendali dirapikan', () => {
    assert.match(M.teksUndangan('', 'x'), /"Room tim"/);
    assert.match(M.teksUndangan('  Tim\n  B ', 'x'), /"Tim B"/);
  });
});

describe('ruang-ui: pengelompokan jawaban tim (tanpa nama)', () => {
  const per = { Nicky: { o: 'B', k: 'yakin', b: 1 }, Mita: { o: 'B', k: 'ragu', b: 1 }, Nora: { o: 'C', k: 'yakin', b: 0 }, Jeni: { o: 'B', k: null, b: 1 }, Mega: { o: 'A', k: 'menebak', b: 0 }, Aldi: { o: 'B', k: 'yakin', b: 1 } };
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
  const st = (aktivitas) => ({ tuan: 'Nicky', room: { nama: 'Tim', peserta: ['Nicky', 'Mita'] }, aktivitas: aktivitas || null });
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
  const per = { Nicky: { o: 'B', b: 1 }, Mita: { o: 'B', k: 'yakin', b: 1 }, Jeni: { o: 'B', b: 1 }, Aldi: { o: 'B', b: 1 }, Nora: { o: 'C', k: 'yakin', b: 0 }, Mega: { o: 'C', b: 0 } };
  const dasar = { per, penjelas: 'Mita', kunci: 'B', label: 'Terbelah 4–2', opsiKeliru: 'C', alasanLabel: 'angka usang' };
  it('baris umum tidak menyebut nama yang keliru; label baku, tanpa kata "menggoda"', () => {
    const t = M.teksPenjelas(Object.assign({ nama: 'Nicky' }, dasar));
    assert.equal(t.umum, 'Tim terbagi · 2 orang memilih C (biasanya karena angka usang)');
    assert.doesNotMatch(t.umum, /menggoda|Terbelah|Tersandung/);
    assert.ok(!t.umum.includes('Nora') && !t.umum.includes('Mega'));
    assert.doesNotMatch(t.umum, LARANGAN);
  });
  it('HP penjelas, HP yang keliru (Dengarkan + Paham), HP yang benar', () => {
    const pj = M.teksPenjelas(Object.assign({ nama: 'mita' }, dasar));
    assert.equal(pj.pribadi, 'Giliran Anda: jelaskan ke tim kenapa jawabannya B.'); assert.equal(pj.peran, 'penjelas'); assert.equal(pj.bolehPaham, false);
    const salah = M.teksPenjelas(Object.assign({ nama: 'Nora' }, dasar));
    assert.equal(salah.pribadi, 'Dengarkan Mita menjelaskan kenapa B.'); assert.equal(salah.bolehPaham, true);
    const benar = M.teksPenjelas(Object.assign({ nama: 'Aldi' }, dasar));
    assert.equal(benar.pribadi, 'Dengarkan Mita menjelaskan kenapa B.'); assert.equal(benar.peran, 'benar'); assert.equal(benar.bolehPaham, false);
    const absen = M.teksPenjelas(Object.assign({ nama: 'Orang lain' }, dasar));
    assert.equal(absen.bolehPaham, true, 'yang tidak menjawab soal itu juga boleh berterima kasih');
  });
  it('penjelas yang tidak ada di per diabaikan; tanpa penjelas → kalimat umum tanpa nama', () => {
    const t = M.teksPenjelas(Object.assign({ nama: 'Nora' }, dasar, { penjelas: 'Budi' }));
    assert.equal(t.bolehPaham, false); assert.ok(!/Budi/.test(t.umum)); assert.match(t.umum, /Baca pembahasan bersama/);
    const t2 = M.teksPenjelas({ per: { A: { o: 'C' }, B: { o: 'C' } }, kunci: 'B', nama: 'A', label: 'Semua belum tepat' });
    assert.match(t2.umum, /^Banyak yang salah · Baca pembahasan bersama/);
  });
  it('label pembagian jawaban memakai istilah baku (dari kelas, juga dari label lama)', () => {
    assert.equal(M.labelBaku('terbelah'), 'Tim terbagi'); assert.equal(M.labelBaku('tersandung'), 'Banyak yang salah');
    assert.equal(M.labelBaku('rapuh'), 'Semua benar, tapi ada yang ragu');
    assert.equal(M.labelBaku(null, 'Terbelah 3–4'), 'Tim terbagi'); assert.equal(M.labelBaku(null, 'Hanya 1 dari 7 benar'), 'Banyak yang salah');
    assert.equal(M.labelBaku(null, 'Benar semua, belum mantap'), 'Semua benar, tapi ada yang ragu'); assert.equal(M.labelBaku(null, ''), null);
  });
});

describe('ruang-ui: satu cara menghitung (skor tim, per soal, per orang)', () => {
  it('"Skor tim 78% · 14 dari 18 jawaban benar" setelah 3 soal (5/6, 3/6, 6/6)', () => {
    assert.equal(M.teksSkorTim({ benar: 14, dijawab: 18 }), 'Skor tim 78% · 14 dari 18 jawaban benar');
    assert.equal(M.teksSkorTim({ benar: 3, dijawab: 5 }), 'Skor tim 60% · 3 dari 5 jawaban benar');
  });
  it('per orang "Anda benar 1 dari 2 soal"; per soal tanpa nama, yang tidak menjawab terpisah', () => {
    assert.equal(M.teksSaya({ benar: 1, dijawab: 2 }), 'Anda benar 1 dari 2 soal'); assert.equal(M.teksSaya({ benar: 0, dijawab: 0 }), '');
    const kel = M.kelompokJawaban({ A1: { o: 'B' }, A2: { o: 'C' }, A3: { o: '-' }, A4: { o: '-' }, A5: { o: '-' } }, 'B');
    assert.equal(M.teksSoalIni(kel, false), 'Soal ini: 1 orang benar, 1 salah, 3 tidak menjawab');
    assert.equal(M.teksSoalIni(kel, true), 'Soal ini: 1 orang benar, 1 salah, 3 belum menjawab');
    assert.equal(M.teksSoalIni(M.kelompokJawaban({ A1: { o: 'B' } }, 'B')), 'Soal ini: 1 orang benar');
  });
  it('hitungan di HP: penyebut dari aktivitas.peserta bila ada, tanpa itu jumlah saja', () => {
    assert.equal(M.teksHitungJawab(0, ['a', 'b']), 'Belum ada yang menjawab');
    assert.equal(M.teksHitungJawab(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']), '3 dari 10 orang sudah menjawab');
    assert.equal(M.teksHitungJawab(3, null), '3 orang sudah menjawab');
    assert.equal(M.teksHitungJawab(2, []), '2 orang sudah menjawab');
  });
  it('lobi pemimpin dan lembar soal sebelumnya', () => {
    assert.equal(M.teksMasuk(1, 10), '1 dari 10 orang sudah masuk');
    assert.equal(M.teksSiap([]), 'Belum ada yang menekan Siap');
    assert.equal(M.teksSiap(['Budi', 'Sari', 'Dodi']), '3 orang sudah siap: Budi, Sari, Dodi');
    assert.equal(M.teksBarisLalu({ o: 'A', k: 'ragu', kunci: 'C' }), 'Anda A (Ragu) · kunci jawaban C');
    assert.equal(M.teksBarisLalu({ o: 'B', k: 'menebak', kunci: 'B' }), 'Anda B (Nebak) · kunci jawaban B');
    assert.equal(M.teksBarisLalu({ o: null, kunci: 'D' }), 'Anda tidak menjawab · kunci jawaban D');
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
  const sesi = { id: 'sb-1', mulai: new Date(2026, 10, 10, 19, 30).getTime(), peserta: ['Nicky', 'Mita', 'Nora'],
    soal: [{ id: 'B6-001', kunci: 'B', jawaban: { Nicky: { o: 'B' }, Mita: { o: 'B' }, Nora: { o: 'C' } } },
      { id: 'B6-002', kunci: 'A', jawaban: { Nicky: { o: 'A' }, Mita: { o: 'C' }, Nora: { o: '-' } } }] };
  it('satu fakta per baris; skor tim dengan cara hitung baku; hasil sendiri tidak ikut disalin', () => {
    const r = M.rekapPenutup(sesi, 'Nora');
    assert.equal(r.judul, 'Latihan tadi selesai');
    assert.deepEqual(Array.from(r.baris), ['3 dari 3 orang ikut', '2 soal dikerjakan', 'Skor tim 60% · 3 dari 5 jawaban benar']);
    assert.equal(r.hasilku, 'Hasil Anda: 0 dari 2 soal benar');
    assert.equal(M.rekapPenutup(sesi, 'Mita').hasilku, 'Hasil Anda: 1 dari 2 soal benar');
    assert.equal(M.rekapPenutup(sesi, 'Rina').hasilku, null, 'tidak menjawab satu soal pun (mis. pemimpin) → tanpa hasil pribadi');
    assert.ok(!r.salin.includes('Hasil Anda'));
    assert.equal(r.terimaKasih, null, 'tanpa ucapan → baris dihilangkan');
    for (const n of sesi.peserta) assert.ok(!r.salin.includes(n + ' '), 'salinan tidak memuat skor per nama: ' + n);
  });
  it('memakai sesi.tim bila ada: penjelas abjad tanpa nol, perlu dibahas lagi dengan nama topik (tanpa kode mentah)', () => {
    const s2 = Object.assign({}, sesi, { tim: { akurasi: 78, hadir: 5, terimaKasih: { Mita: 3, Jeni: 2, Aldi: 0 }, bahasLagi: ['B-76', 'B-81'] }, peserta: ['a', 'b', 'c', 'd', 'e', 'f'] });
    const r = M.rekapPenutup(s2, null, { namaTopik: id => (id === 'B-76' ? 'PPh Pasal 22' : 'PPN') });
    assert.equal(r.baris[0], '5 dari 6 orang ikut');
    assert.equal(r.baris[2], 'Skor tim 78%', 'tanpa jawaban di rekaman → angka dari sesi.tim saja');
    assert.equal(r.terimaKasih, 'Jeni membantu menjelaskan 2 soal, Mita 3 soal');
    assert.equal(r.bahasLagi, 'Perlu dibahas lagi: 2 soal tentang PPh Pasal 22, PPN');
    assert.ok(!/B-76|B-81/.test(r.salin), 'kode soal mentah tidak ikut disalin');
    assert.equal(r.hasilku, null);
    assert.equal(M.rekapPenutup(s2, null).bahasLagi, 'Perlu dibahas lagi: 2 soal');
  });
  it('penjelas dihitung per soal yang ia jelaskan: "Bayu membantu menjelaskan 1 soal"', () => {
    const s4 = Object.assign({}, sesi, { soal: sesi.soal.map((q, k) => Object.assign({}, q, k ? {} : { penjelas: 'Bayu' })) });
    assert.equal(M.rekapPenutup(s4, null).terimaKasih, 'Bayu membantu menjelaskan 1 soal');
  });
  it('soal dengan ≥ 3 jawaban salah masuk "perlu dibahas lagi" bila sesi.tim tidak ada (yang tidak menjawab tidak dihitung salah)', () => {
    const s3 = { id: 'x', mulai: 1, peserta: ['A', 'B', 'C', 'D', 'E'], soal: [{ id: 'B6-009', kunci: 'B', jawaban: { A: { o: 'A' }, B: { o: 'C' }, C: { o: 'D' }, D: { o: 'B' }, E: { o: '-' } } }] };
    assert.equal(M.rekapPenutup(s3, 'D').bahasLagi, 'Perlu dibahas lagi: 1 soal');
    s3.soal[0].jawaban.C = { o: '-' };
    assert.equal(M.rekapPenutup(s3, 'D').bahasLagi, null);
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
    assert.equal(M.ringkasHadir(['Nicky', 'Mita', 'Jeni']), 'Nicky, Mita, Jeni sudah masuk');
    assert.equal(M.ringkasHadir(['Nicky', 'Mita', 'Jeni', 'Aldi', 'Mega']), 'Nicky, Mita, Jeni +2 sudah masuk');
    assert.equal(M.ringkasHadir([]), 'Belum ada yang masuk room');
  });
  it('inisial, tanggal pendek, baris riwayat, label sesi lalu, cek sambungan', () => {
    assert.equal(M.inisial('Nicky'), 'NI'); assert.equal(M.inisial('Mita Sari'), 'MS'); assert.equal(M.inisial(''), '?');
    const t = new Date(2026, 10, 10, 19).getTime();
    assert.equal(M.tglPendek(t), 'Sel 10 Nov');
    assert.equal(M.teksRiwayat({ t, mode: 'latihan', nSoal: 20, akurasiTim: 68 }), 'Sel 10 Nov · Latihan bersama · 20 soal · skor tim 68%');
    assert.equal(M.teksRiwayat({ t, mode: 'latihan', nSoal: 10 }), 'Sel 10 Nov · Latihan bersama · 10 soal');
    assert.equal(M.labelSesiLalu(t - 7 * 86400000, t), 'Minggu lalu'); assert.equal(M.labelSesiLalu(t - 86400000, t), 'Latihan lalu');
    assert.equal(M.teksCekSambungan([{ ok: true }, { ok: false }, { ok: true }, { ok: false }]), 'Internet lancar. Latihan bersama bisa dipakai.');
    assert.match(M.teksCekSambungan([{ ok: false }]), /data seluler/);
    for (const x of [[], [{ ok: true }], [{ ok: false }]]) assert.doesNotMatch(M.teksCekSambungan(x), /jalur|relai|sambungan \d/i);
  });
});

describe('ruang-ui: istilah baku dan tanpa nama dari kode (v9.2)', () => {
  const fs = require('node:fs'); const path = require('node:path');
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-ruang.js'), 'utf8');
  it('views-ruang.js tidak memakai L.TIM_BAWAAN sama sekali', () => { assert.ok(!/TIM_BAWAAN/.test(src)); });
  it('lobi tidak digambar ulang karena lobi.id / rekap (menu ⋮ yang terbuka tetap stabil); menu terbuka dipertahankan saat gambar ulang', () => {
    const baris = src.split('\n').find(x => /if \(k === 'lobi'\) \{/.test(x)) || '';
    assert.ok(baris && !/lobi\.id|selesaiTerakhir/.test(baris), baris);
    assert.match(src, /menuBuka[\s\S]{0,200}\.open = true/);
  });
  it('nama yang sedang dipakai: dicek untuk tombol dan nama ketikan, kecuali yang diizinkan "Ini saya"', () => {
    assert.match(src, /!samaNama\(lokal\.izinGanda, nama\) && onIntip\.some\(x => samaNama\(x, nama\)\)/);
    assert.match(src, /'sedang dipakai'/);
  });
  it('teks layar tanpa istilah yang dilarang brief', () => {
    const teks = (src.match(/'[^'\n]*'/g) || []).filter(x => /[A-Z][a-z]+ |\. |: /.test(x));
    const larang = /\b(pemandu|triase|menggoda|Tersandung|Terbelah|akurasi tim|Lihat kunci|Menebak|di room'|Hasilku|ruang ujian|Jalur \d)\b/;
    const kena = teks.filter(x => larang.test(x));
    assert.deepEqual(kena, []);
  });
  // V10 (tugas lanjutan kedua)
  const fungsi = nama => { const i = src.indexOf('function ' + nama + '('); assert.ok(i >= 0, nama); const j = src.indexOf('\n  }\n', i); return src.slice(i, j); };
  it('V10 a: nama baru tidak ditambahkan otomatis; periksaTamu hanya menandai "ingin ikut", hanya nama sah, maks 8', () => {
    const pt = fungsi('periksaTamu');
    assert.ok(!/aturRoom|tambahkanTamu\(n\)\s*;/.test(pt.replace(/onclick: \(\) => tambahkanTamu\(n\)/, '')), 'periksaTamu tidak boleh menambah sendiri');
    assert.match(pt, /namaSah\(n\)/); assert.match(pt, /MAKS_TUNGGU/); assert.match(src, /const MAKS_TUNGGU = 8;/);
    assert.match(pt, /const s = stR\(\);[^\n]*di luar loop/);
    assert.match(src, /'Ingin ikut: '/); assert.match(src, /'Tambahkan'/); assert.match(src, /'Abaikan'/);
    assert.match(src, /'Daftar tim sudah penuh \(12 nama\)\. Hapus satu nama lewat menu Ubah room\.'/);
    assert.match(src, /'Nama itu tidak bisa dipakai\. Tulis nama panggilan Anda \(1 sampai 24 karakter\)\.'/);
    assert.match(src, /_protokol[\s\S]{0,80}validNama/);
    assert.match(src, /pesertaRoom\(st\)\.filter\(p => !baru\.some\(x => samaNama\(x, p\)\)\)\.forEach\(p => abaikanNama\(kode, p\)\)/, 'yang dihapus lewat Ubah room tidak ditawarkan lagi');
    assert.ok(!/ditambahkan otomatis/.test(src.replace(/\/\/.*$/gm, '')));
  });
  it('V10 b: huruf dikirim saat diketuk (k: null) di alur biasa; mode Ubah tidak mengirim sampai lengkap', () => {
    const bm = fungsi('bagianMenjawab');
    assert.match(bm, /if \(hurufBaru && !cur\.ubah\) kirim\(a, sid, \{ o: cur\.o, k: null \}\);/);
    assert.match(bm, /if \(cur\.o === '-' \|\| \(cur\.o && cur\.k\)\)/);
    assert.equal(M.keadaanAnggota({ jenis: 'latihan', id: 'x', soalIds: ['A1-001'], idx: 0, fase: 'jawab' }, { o: 'B', k: null }, false), 'menjawab', 'huruf tanpa keyakinan tetap di langkah 2');
  });
  it('V10 c: menu ⋮ lobi disegarkan bila butirnya berubah, tetapi tidak saat sedang terbuka', () => {
    const sm = fungsi('segarkanMenu');
    assert.match(sm, /if \(!m \|\| m\.open\) return;/); assert.match(sm, /dataset\.butir === teks/);
    assert.match(src, /m\.dataset\.butir = item\.map\(x => x\.teks\)\.join\('\|'\)/);
  });
  // v9.2 V8
  it('V8: toast "X bergabung" di laptop pemimpin hanya untuk nama sah yang sudah ada di daftar room (nama di luar daftar lewat "Ingin ikut")', () => {
    const sb = fungsi('sambut');
    const baris = sb.split('\n').find(x => /' bergabung'/.test(x)) || '';
    assert.match(baris, /namaSah\(ev\.nama\) && pesertaRoom\(s\)\.some\(p => samaNama\(p, ev\.nama\)\)/);
  });
  it('V8: jawaban yang tidak ada di per pemimpin (nama di luar daftar latihan) tidak masuk "Anda benar x dari y"', () => {
    const ck = fungsi('catatKemajuan');
    assert.match(ck, /const tidakDihitung = isObj\(a\.hasilSoal\.per\) && Object\.keys\(a\.hasilSoal\.per\)\.length > 0 && !dariPer;/);
    assert.match(ck, /t\.ids\[sid\] = !tidakDihitung && o && soal \?/);
  });
  it('V8: baris lembar Soal sebelumnya memakai "kunci jawaban", bukan "kunci" saja', () => {
    assert.ok(!/· kunci ' \+/.test(src));
  });
  it('v9.2: pemimpin yang tidak menjawab tidak dihitung "tidak menjawab" di HP; pemimpin yang menjawab tetap dihitung', () => {
    const per = { Rina: { o: '-' }, Budi: { o: 'B' }, Sari: { o: 'A' }, Tika: { o: '-' } };
    assert.deepEqual(pol(M.kelompokJawaban(per, 'B')), { per: { A: 1, B: 1, C: 0, D: 0, '-': 2 }, total: 4, dijawab: 2, benar: 1 });
    const k = M.kelompokJawaban(per, 'B', 'rina');
    assert.deepEqual(pol(k), { per: { A: 1, B: 1, C: 0, D: 0, '-': 1 }, total: 3, dijawab: 2, benar: 1 });
    assert.equal(M.teksSoalIni(k, false), 'Soal ini: 1 orang benar, 1 salah, 1 tidak menjawab');
    const ikut = M.kelompokJawaban(Object.assign({}, per, { Rina: { o: 'B' } }), 'B', 'Rina');
    assert.equal(ikut.total, 4); assert.equal(ikut.benar, 2);
  });
  it('v9.2: anggota yang menyusul: soal sebelum ia ikut tidak masuk penyebut "Hasil Anda"', () => {
    const sesi = { id: 'sb-2', mulai: 1, peserta: ['Rina', 'Budi', 'Dodi'], soal: [
      { id: 'B6-001', kunci: 'B', jawaban: { Rina: { o: '-' }, Budi: { o: 'B' } } },
      { id: 'B6-002', kunci: 'A', jawaban: { Rina: { o: '-' }, Budi: { o: 'C' }, Dodi: { o: 'A' } } },
      { id: 'B6-003', kunci: 'C', jawaban: { Rina: { o: '-' }, Budi: { o: 'C' }, Dodi: { o: '-' } } }] };
    assert.deepEqual(pol(M.hasilku(sesi, 'Dodi')), { benar: 1, n: 2, dijawab: 1 });
    assert.equal(M.rekapPenutup(sesi, 'dodi').hasilku, 'Hasil Anda: 1 dari 2 soal benar');
    assert.deepEqual(pol(M.hasilku(sesi, 'Budi')), { benar: 2, n: 3, dijawab: 3 });
    // rekaman tanpa jawaban per nama sama sekali (bentuk lama): semua soal tetap dihitung
    assert.equal(M.hasilku({ soal: [{ id: 'B6-001', kunci: 'B' }, { id: 'B6-002', kunci: 'A', jawaban: {} }] }, 'Dodi').n, 2);
  });
  it('v9.2: halaman room pemimpin saat latihan berjalan tetap menampilkan "Ingin ikut" dan memperbaruinya di tempat', () => {
    const lt = fungsi('layarLatihanTuan');
    assert.match(lt, /const slotIngin = h\('div', \{ class: 'slot-ingin' \}, barisInginIkut\(\)\);/);
    assert.match(lt, /perbarui: \(\) => \{ gantiBilaBeda\(slotIngin, \[barisInginIkut\(\)\]\); \}/);
  });
});

// v9.3 W2: waktu mengerjakan dan waktu membahas (dialog Mulai dan HP anggota)
describe('ruang-ui: waktu mengerjakan dan membahas (v9.3 W2)', () => {
  it('fmtMSS dan label pilihan membahas', () => {
    assert.equal(M.fmtMSS(81), '1:21'); assert.equal(M.fmtMSS(0), '0:00'); assert.equal(M.fmtMSS(-5), '0:00'); assert.equal(M.fmtMSS(600), '10:00'); assert.equal(M.fmtMSS(NaN), '0:00');
    assert.deepEqual([60, 120, 180, 0].map(M.labelBahas), ['1 menit', '2 menit', '3 menit', 'Bebas']);
  });
  it('baris ringkas total waktu di dialog Mulai (seperti brief)', () => {
    assert.equal(M.teksRingkasWaktu(10, 126, 120), '10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)');
    assert.equal(M.teksRingkasWaktu(10, 126, 0), '10 soal · waktu latihan 21 menit, termasuk membahas · membahas per soal tanpa hitung mundur'); // v9.5.3 B3
    assert.equal(M.teksRingkasWaktu(20, 150, 60), '20 soal · kira-kira 70 menit (50 mengerjakan + 20 membahas)');
    assert.equal(M.teksRingkasWaktu(40, 126, 180), '40 soal · kira-kira 204 menit (84 mengerjakan + 120 membahas)');
  });
  const T0 = 1700000000000;
  const akt = o => Object.assign({ jenis: 'latihan', id: 'sb-1', soalIds: ['A1-104', 'B6-126'], idx: 0, fase: 'jawab', mulaiSoal: T0, detikPerSoal: 126, akhirSesi: null, hasilSoal: null, tim: null, detikBahas: 120, mulaiBahas: null }, o || {});
  it('HP · mengerjakan: hitung mundur dari mulaiSoal + detikPerSoal, memakai selisih jam pemimpin', () => {
    assert.deepEqual(pol(M.barisWaktuHP(akt(), 0, T0 + 45000)), { fase: 'kerja', teks: 'Mengerjakan · sisa 1:21', habis: false, sisa: 81 });
    assert.equal(M.barisWaktuHP(akt(), 0, T0).teks, 'Mengerjakan · sisa 2:06');
    // jam HP 30 detik di belakang pemimpin (selisih +30000): sisa sama dengan laptop
    assert.equal(M.barisWaktuHP(akt(), 30000, T0 + 15000).teks, 'Mengerjakan · sisa 1:21');
    // jam HP di depan pemimpin: sisa tidak pernah melebihi waktu mengerjakan
    assert.equal(M.barisWaktuHP(akt(), -60000, T0).teks, 'Mengerjakan · sisa 2:06');
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 125500).teks, 'Mengerjakan · sisa 0:01');
  });
  it('HP · mengerjakan habis: "Waktu mengerjakan habis. Jawab sekarang." (sudah menjawab: tanpa ajakan)', () => {
    assert.deepEqual(pol(M.barisWaktuHP(akt(), 0, T0 + 126000)), { fase: 'kerja', teks: 'Waktu mengerjakan habis. Jawab sekarang.', habis: true, sisa: 0 });
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 999000).teks, 'Waktu mengerjakan habis. Jawab sekarang.');
    assert.equal(M.barisWaktuHP(akt(), 0, T0 + 200000, { sudahJawab: true }).teks, 'Waktu mengerjakan habis.');
  });
  it('HP · membahas: hitung mundur dari mulaiBahas + detikBahas; habis: "Waktu membahas habis."', () => {
    const k = akt({ fase: 'kunci', mulaiBahas: T0 + 100000 });
    assert.deepEqual(pol(M.barisWaktuHP(k, 0, T0 + 130000)), { fase: 'bahas', teks: 'Membahas · sisa 1:30', habis: false, sisa: 90 });
    assert.equal(M.barisWaktuHP(k, 0, T0 + 220000).teks, 'Waktu membahas habis.');
    assert.equal(M.barisWaktuHP(k, 0, T0 + 220000).habis, true);
  });
  it('HP · baris membahas tidak tampil: Bebas, pemimpin versi lama (tanpa field), nilai tidak sah; ujian tanpa baris', () => {
    assert.equal(M.barisWaktuHP(akt({ fase: 'kunci', mulaiBahas: T0, detikBahas: 0 }), 0, T0 + 1000), null, 'Bebas');
    const lama = akt({ fase: 'kunci' }); delete lama.detikBahas; delete lama.mulaiBahas;
    assert.equal(M.barisWaktuHP(lama, 0, T0 + 1000), null, 'pemimpin versi lama');
    assert.equal(M.barisWaktuHP(akt({ fase: 'kunci', mulaiBahas: null }), 0, T0 + 1000), null);
    assert.equal(M.barisWaktuHP(akt({ fase: 'kunci', mulaiBahas: T0, detikBahas: 1e9 }), 0, T0 + 1000), null);
    // pemimpin versi lama tetap menampilkan "Mengerjakan · sisa …" (field lama saja)
    const lamaJawab = akt(); delete lamaJawab.detikBahas; delete lamaJawab.mulaiBahas;
    assert.equal(M.barisWaktuHP(lamaJawab, 0, T0 + 45000).teks, 'Mengerjakan · sisa 1:21');
    // v9.4 W: detikPerSoal 0 = pemimpin memilih tanpa batas → hitung naik (dulu: baris tidak tampil). Uji lengkap: test/v94-w.test.js
    assert.equal(M.barisWaktuHP(akt({ detikPerSoal: 0 }), 0, T0).teks, 'Mengerjakan 0:00', 'tanpa batas: hitung naik');
    assert.equal(M.barisWaktuHP({ jenis: 'ujian', id: 'u', mulai: T0, akhir: T0 + 1 }, 0, T0), null);
    assert.equal(M.barisWaktuHP(null), null);
  });
  it('teks waktu memakai istilah baku dan tanpa istilah teknis', () => {
    const semua = [M.barisWaktuHP(akt(), 0, T0).teks, M.barisWaktuHP(akt(), 0, T0 + 1e6).teks, M.barisWaktuHP(akt({ fase: 'kunci', mulaiBahas: T0 }), 0, T0).teks, M.teksRingkasWaktu(10, 126, 120)].join(' ');
    assert.doesNotMatch(semua, LARANGAN); assert.doesNotMatch(semua, /sesi|aktivitas|peserta/i);
  });
});

// v9.3.2: tautan room langsung tersambung (satu ketukan, tanpa ketukan bila nama profil cocok) dan ujian tim terbuka sendiri di HP
describe('ruang-ui: gabung lewat tautan dan ujian tim terbuka sendiri (v9.3.2)', () => {
  const fs = require('node:fs'); const path = require('node:path');
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-ruang.js'), 'utf8');
  const fungsi = nama => { const i = src.indexOf('function ' + nama + '('); assert.ok(i >= 0, nama); const j = src.indexOf('\n    }\n', i); return src.slice(i, j); };
  const daftar = ['Nicky', 'Mita', 'Nora', 'Jeni'];
  const profil = (nama, selesai) => ({ nama, onboardingSelesai: selesai !== false });
  it('A.2 namaDariProfil: nama profil cocok tanpa beda huruf besar-kecil → nama persis seperti di daftar', () => {
    assert.equal(M.namaDariProfil({ profil: profil('Mita'), daftar, tuan: 'Nicky', online: [] }), 'Mita');
    assert.equal(M.namaDariProfil({ profil: profil('  mita '), daftar, tuan: 'Nicky', online: ['Nicky'] }), 'Mita');
    assert.equal(M.namaDariProfil({ profil: profil('NORA'), daftar, tuan: 'Nicky', online: null }), 'Nora', 'online tidak diketahui → dianggap tidak dipakai');
    assert.equal(M.namaDariProfil({ profil: profil('Jeni'), daftar, tuan: 'Nicky' }), 'Jeni');
  });
  it('A.2 namaDariProfil: tidak masuk sendiri bila sedang dipakai, pernah "Ganti nama", onboarding belum selesai, di luar daftar, nama pemimpin, atau nama tidak sah', () => {
    assert.equal(M.namaDariProfil({ profil: profil('Mita'), daftar, tuan: 'Nicky', online: ['mita'] }), null, 'sedang dipakai perangkat lain → tetap ditanya');
    assert.equal(M.namaDariProfil({ profil: profil('Mita'), daftar, tuan: 'Nicky', online: [], tolak: true }), null, 'pernah memilih Bukan Anda? Ganti nama');
    assert.equal(M.namaDariProfil({ profil: profil('Mita', false), daftar, tuan: 'Nicky', online: [] }), null, 'onboarding belum selesai');
    assert.equal(M.namaDariProfil({ profil: profil('Dodi'), daftar, tuan: 'Nicky', online: [] }), null, 'nama di luar daftar tidak masuk sendiri');
    assert.equal(M.namaDariProfil({ profil: profil('nicky'), daftar, tuan: 'Nicky', online: [] }), null, 'nama pemimpin tidak dipakai otomatis');
    assert.equal(M.namaDariProfil({ profil: profil(''), daftar, tuan: 'Nicky', online: [] }), null);
    assert.equal(M.namaDariProfil({ profil: null, daftar }), null);
    assert.equal(M.namaDariProfil({ profil: profil('Mita'), daftar: ['Mita', 'MITA'], online: [] }), null, 'cocok dengan dua nama → tanya');
    assert.equal(M.namaDariProfil({ profil: profil('Mita'), daftar, online: [], sah: () => false }), null, 'nama terlarang');
    assert.equal(M.namaDariProfil(), null);
  });
  it('B.1 bolehBukaUjian: dibuka sendiri hanya bila ujian berjalan, belum terkumpul, tanpa simulasi lain, soal terbaca dan dikenal, belum pernah dibuka sendiri di tab ini', () => {
    const k = { soalIds: ['A1-001', 'B6-002'], tidakDikenal: [] };
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, sisa: 600 }), true);
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, sisa: null }), true, 'tanpa batas waktu');
    assert.equal(M.bolehBukaUjian({ kodeInfo: k }), true, 'pemimpin versi lama tanpa status');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, sisa: 600, sudah: true }), false, 'B.2 sekali saja per ujian per tab');
    assert.equal(M.bolehBukaUjian({ status: 'selesai', kodeInfo: k }), false, 'ujian ditutup');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, terkumpul: true }), false, 'sudah terkumpul');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, simAktif: true }), false, 'ada simulasi lain / simulasi ini sudah berjalan');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: null }), false, 'soal tidak terbaca');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: { soalIds: [] } }), false, 'tanpa soal');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: { soalIds: ['X'], tidakDikenal: ['X'] } }), false, 'versi berbeda');
    assert.equal(M.bolehBukaUjian({ status: 'jalan', kodeInfo: k, sisa: 0 }), false, 'waktu habis');
    assert.equal(M.bolehBukaUjian(), false);
  });
  it('A.1: layar "Sebelum masuk" dan tombol Mengerti dihapus; kalimatnya pindah ke bawah daftar nama; tanda persetujuan tetap ditulis saat masuk', () => {
    assert.ok(!/Sebelum masuk|room-mengerti|'Mengerti'|langkah = 'setuju'|langkah === 'setuju'/.test(src));
    assert.match(src, /'Jawaban dan hasil latihan Anda terlihat oleh anggota room\. Jangan teruskan tautan ke luar tim\.'/);
    const m = fungsi('masuk');
    assert.match(m, /lsTulis\('ukp\.tim\.setuju', kodeParam\);/);
    assert.ok(m.indexOf("lsTulis('ukp.tim.setuju'") > m.indexOf('if (!hasil && !info())'), 'ditulis setelah berhasil masuk');
    assert.ok(!/ukp\.tim\.setuju/.test(fungsi('pilihNama')), 'pilihNama tidak lagi menunggu persetujuan');
  });
  it('A.2/A.3: masuk otomatis memakai namaDariProfil dengan daftar abaikan "Ganti nama"; nama ganda tetap ditanya (v9.4: dialog nama profil berbeda dihapus)', () => {
    const g = fungsi('layarGabung');
    assert.match(g, /namaDariProfil\(\{ profil: [^\n]*, daftar, tuan, online: onlineIntip, tolak, sah: namaSah \}\)/);
    assert.match(g, /const tolak = !!\(lsBaca\(KBUKAN, \{\}\) \|\| \{\}\)\[kodeParam\];/);
    assert.match(fungsi('gantiNama'), /bukan\[kode\] = 1; lsTulis\(KBUKAN, bukan\);/);
    assert.match(src, /const KBUKAN = 'ukp\.tim\.bukanSaya';/);
    // v9.4 Ka2: dialog "Masuk sebagai …? Nama profil Anda tetap …" dihapus (ketukan tambahan di jalan menuju room); lihat test/v94-ka.test.js
    assert.ok(!/Nama profil Anda tetap/.test(fungsi('pilihNama')));
    assert.match(fungsi('pilihNama'), /!samaNama\(lokal\.izinGanda, nama\) && onIntip\.some/);
    assert.match(src, /'Anda masuk sebagai '/); assert.match(src, /'Bukan Anda\? Ganti nama'/);
  });
  it('A.4: kartu "Menghubungkan ke room…" yang jelas selama gabung', () => {
    const g = fungsi('layarGabung');
    assert.match(g, /if \(lokal\.gabungJalan\) \{[\s\S]{0,300}'Menghubungkan ke room…'/);
  });
  it('B: tombol "Mulai mengerjakan" dan pembukaan otomatis memakai jalur yang sama, ditandai sekali per ujian per tab (sessionStorage)', () => {
    const u = fungsi('layarUjianAnggota');
    assert.match(u, /onclick: mulaiUjian \}, UKP\.icon\('play', null, true\), kumpulLain \? 'Kerjakan lagi di HP ini' : 'Mulai mengerjakan'/);
    // jawaban atas nama ini sudah terkumpul di room dari perangkat lain → tidak dibuka sendiri, orangnya diberi tahu dulu
    assert.match(u, /const kumpulLain = !!\(dokSaya && dokSaya\.selesai === true\);/);
    assert.match(u, /terkumpul: !!rek \|\| kumpulLain,/);
    assert.match(u, /Jawaban atas nama Anda sudah terkumpul di room dari perangkat lain\./);
    assert.match(u, /bolehBukaUjian\(\{[^\n]*sudah: Array\.isArray\(sudahOto\) && sudahOto\.includes\(a\.id\) \}\)/);
    assert.match(u, /ssTulis\(KUJIAN_OTO,/);
    assert.match(u, /'Lanjutkan mengerjakan'/);
    assert.match(src, /const KUJIAN_OTO = 'ukp\.tim\.ujianOto';/);
  });
  it('v9.3.2: pemimpin baru saja memulai dan anggota di halaman lain → langsung dibawa ke room bila aman; yang sudah berjalan hanya ditawarkan', () => {
    const ab = fungsi('ajakBuka');
    assert.match(ab, /if \(!berjalan && amanPindahKeRoom\(\)\) \{ toast\(teks \+ '\.', [^\n]*UKP\.go\('room'\)/);
    assert.match(ab, /aksi: \{ label: 'Buka', onclick: \(\) => UKP\.go\('room'\) \}/);
    const am = fungsi('amanPindahKeRoom');
    assert.match(am, /UKP\.simulasiBerjalan\(\)\) return false;/);
    assert.match(am, /UKP\.mode\.aktif\(\)\) return false;/);
    assert.match(am, /dialog\[open\]/);
  });
});

// v9.3.2 P1: kalimat di bawah judul layar gabung tidak menyuruh mengetuk nama selama "Menghubungkan ke room…"
describe('ruang-ui: kalimat layar gabung selama menghubungkan (v9.3.2 P1)', () => {
  const daftar = ['Nicky', 'Sari', 'Dodi'];
  it('belum menghubungkan: ajakan mengetuk nama (atau menulis nama bila daftar hanya pemimpin) tetap seperti v9.2', () => {
    assert.equal(M.teksLeadGabung({ tuan: 'Nicky', online: ['Nicky'], daftar }), 'Nicky mengajak Anda latihan soal bersama. Ketuk nama Anda untuk ikut.');
    assert.equal(M.teksLeadGabung({ tuan: 'Nicky', online: null, daftar: ['Nicky'] }), 'Nicky mengajak Anda latihan soal bersama. Tulis nama Anda untuk ikut.');
    assert.equal(M.teksLeadGabung({ tuan: 'Nicky', online: [], daftar }), 'Nicky belum membuka room. Anda tetap bisa memilih nama sekarang; latihan dimulai saat ia datang.');
  });
  it('sedang menghubungkan (termasuk masuk tanpa ketukan dari nama profil): tidak ada ajakan mengetuk atau memilih nama', () => {
    const a = M.teksLeadGabung({ tuan: 'Nicky', online: ['nicky'], daftar, menghubungkan: true });
    const b = M.teksLeadGabung({ tuan: 'Nicky', online: [], daftar, menghubungkan: true });
    assert.equal(a, 'Nicky mengajak Anda latihan soal bersama.');
    assert.equal(b, 'Nicky belum membuka room. Latihan dimulai saat ia datang.');
    for (const t of [a, b]) assert.doesNotMatch(t, /Ketuk|Tulis|memilih nama/);
  });
  it('tanpa nama pemimpin → tidak ada kalimat', () => {
    assert.equal(M.teksLeadGabung({ tuan: '', online: [], daftar }), null);
  });
});
