'use strict';
// v10.2.6 papan: room diambil alih perangkat lain saat latihan bersama berjalan, lalu pemimpin lama memimpin lagi.
// Aktivitas room masih latihan yang sama: papan menyambung lagi dan menyiarkan posisinya (soal, fase, kunci). Aktivitas lain atau
// sudah tidak ada: tetap satu layar dengan keterangan jujur. Memakai DOM tiruan dan penyiap test/v972-papan.test.js.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sumber = fs.readFileSync(path.join(__dirname, 'v972-papan.test.js'), 'utf8');
const potong = sumber.slice(sumber.indexOf('function domTiruan'), sumber.indexOf('const tunggu = ms'));
const { siapkan } = new Function('require', 'fs', 'path', 'vm', '__dirname', potong + '\nreturn { siapkan };')(require, fs, path, vm, __dirname);
const tunggu = ms => new Promise(r => setTimeout(r, ms));
const TAHAN = 850;

// room tiruan: state bisa diubah dari uji, pancar(nama) memanggil pendengar seperti UKP.ruang
function roomTiruan(T) {
  const st = { tuan: 'Nicky', room: { nama: 'Tim', peserta: ['Nicky', 'Mita'] }, aktivitas: null };
  const dengar = {}; const log = []; const jawab = {};
  const R = { st, log, jawab, peran: 'tuan', tersambung: true,
    tersedia: () => ({ tersedia: true }), info: () => ({ peran: R.peran, nama: 'Nicky', kode: 'ABC' }), status: () => ({ tersambung: R.tersambung, peran: R.peran }),
    state: () => JSON.parse(JSON.stringify(st)),
    on(nm, f) { (dengar[nm] = dengar[nm] || []).push(f); return () => { const a = dengar[nm] || []; const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); }; },
    pancar(nm, x) { (dengar[nm] || []).slice().forEach(f => f(x)); },
    jumlahDengar: nm => (dengar[nm] || []).length,
    mulaiLatihan(o) { if (R.peran !== 'tuan' || !R.tersambung) return false; log.push('mulaiLatihan'); st.aktivitas = { jenis: 'latihan', id: o.id, soalIds: o.soalIds.slice(), idx: 0, fase: 'jawab', peserta: o.peserta || null }; return R.state(); },
    aturSoal(i) { if (R.peran !== 'tuan' || !R.tersambung || !st.aktivitas) return false; log.push('aturSoal:' + i); st.aktivitas.idx = i; st.aktivitas.fase = 'jawab'; return R.state(); },
    bukaKunci(id, per) { if (R.peran !== 'tuan' || !R.tersambung || !st.aktivitas) return false; log.push('bukaKunci:' + id + ':' + Object.keys(per || {}).sort().join(',')); st.aktivitas.fase = 'kunci'; return R.state(); },
    aturPesertaLatihan() { return true; }, akhiriAktivitas() { log.push('akhiri'); st.aktivitas = null; return R.state(); }, terbitkanSesi(x) { log.push('terbit:' + (x && x.id)); return true; },
    jawabanSemua: () => JSON.parse(JSON.stringify(jawab)), penjelasSemua: () => ({}), hadir: () => ({ Mita: { online: true } }) };
  T.UKP.ruang = R; T.UKP.c.statusRoom = () => T.document.createElement('span');
  return R;
}
const baris = (T, nama) => T.main.querySelectorAll('.papan-baris').find(li => ((li.querySelector('.papan-nama') || {}).textContent || '').indexOf(nama) === 0);
const ketuk = (T, nama, label) => baris(T, nama).querySelectorAll('button').find(b => b.getAttribute('aria-label') === label).click();
const tombol = (T, re) => T.main.querySelectorAll('button').find(b => re.test(b.textContent.replace(/\s+/g, ' ').trim()));
const noSoal = T => { const m = /Soal uji nomor (\d)/.exec(T.main.textContent); return m ? +m[1] : null; };
const menu = T => T.main.querySelectorAll('button').map(b => b.textContent.trim()).filter(t => /^(Kembali ke lobi|Atur saringan|Lanjut tanpa HP anggota|Akhiri latihan)/.test(t));
// papan latihan room yang sedang berjalan di perangkat pemimpin (Nicky), soal 1
async function papanRoom() {
  const T = siapkan(); T.bersama(); const R = roomTiruan(T);
  T.UKP.go('latih', { mulai: 1, room: 1, n: 10 }); await tunggu(30);
  assert.ok(T.main.querySelector('.papan-baris'), 'papan tampil');
  assert.ok(R.st.aktivitas && R.st.aktivitas.jenis === 'latihan', 'aktivitas latihan dimulai di room');
  return { T, R, id: R.st.aktivitas.id };
}
// perangkat lain (Budi) memimpin: peran perangkat ini turun
const diambil = R => { R.peran = 'anggota'; R.st.tuan = 'Budi'; R.pancar('state'); R.pancar('peran', { peran: 'anggota', tuan: 'Budi' }); };
// perangkat ini memimpin lagi (ambilAlih: state dulu, lalu peran)
const pimpinLagi = async R => { R.peran = 'tuan'; R.st.tuan = 'Nicky'; R.pancar('state'); R.pancar('peran', { peran: 'tuan', tuan: 'Nicky' }); await tunggu(20); };

const TEKS_SAMBUNG = 'HP anggota mengikuti papan ini lagi.';
const TEKS_SATU = 'Latihan ini tetap di satu layar. HP anggota tidak mengikuti papan ini.';
const isiSemua = T => { ketuk(T, 'Nicky', 'Jawaban A'); ketuk(T, 'Mita', 'Jawaban B'); };
const bukaKunci = async T => { T.aturDialog(() => Promise.resolve(true)); tombol(T, /^Buka kunci jawaban/).click(); await tunggu(20); };
// tombol Lanjut ditahan sebentar sesudah kunci dibuka (penjaga ketuk ganda di papan)
const lanjut = async T => { await tunggu(TAHAN); tombol(T, /^Lanjut ke soal/).click(); await tunggu(20); };

test('v10.2.6: room diambil alih, papan terlepas dan titik lanjut mencatat "ambil"; menu tetap punya jalan ke lobi', async () => {
  const { T, R } = await papanRoom();
  assert.equal(T.s.bersamaAktif.room, 1);
  assert.ok(menu(T).includes('Lanjut tanpa HP anggota'));
  diambil(R); await tunggu(20);
  assert.equal(T.s.bersamaAktif.room, 'ambil');
  assert.match(T.toast[T.toast.length - 1], /^Budi sekarang memandu room\. Latihan ini berlanjut di satu layar\.$/);
  assert.ok(menu(T).includes('Kembali ke lobi (latihan tetap berjalan)'), 'jalan ke lobi room tetap ada');
  assert.ok(!menu(T).includes('Lanjut tanpa HP anggota') && !menu(T).includes('Atur saringan'));
  // selama terlepas, papan tidak menyiarkan apa pun
  isiSemua(T); await bukaKunci(T);
  assert.deepEqual(R.log, ['mulaiLatihan']);
  T.UKP.go('beranda');
});

test('v10.2.6: memimpin lagi, aktivitas room masih latihan yang sama: papan menyambung lagi tanpa memulai ulang, jawaban HP selama terlepas tampil', async () => {
  const { T, R, id } = await papanRoom();
  const soal1 = R.st.aktivitas.soalIds[0];
  diambil(R); await tunggu(20);
  R.jawab.Mita = { aktivitas: id, j: { [soal1]: 'B' }, k: { [soal1]: 'yakin' } }; // Mita menjawab di HP selama papan terlepas
  assert.ok(!baris(T, 'Mita').hasAttribute('data-jauh'));
  await pimpinLagi(R);
  assert.deepEqual(R.log, ['mulaiLatihan'], 'tidak ada mulaiLatihan kedua dan soal yang sama tidak diatur ulang');
  assert.equal(R.st.aktivitas.id, id);
  assert.equal(T.s.bersamaAktif.room, 1, 'titik lanjut kembali room');
  assert.equal(T.toast[T.toast.length - 1], TEKS_SAMBUNG);
  assert.ok(baris(T, 'Mita').hasAttribute('data-jauh'), 'jawaban Mita dari HP dipakai');
  assert.ok(menu(T).includes('Lanjut tanpa HP anggota'), 'menu papan room kembali');
  ketuk(T, 'Nicky', 'Jawaban A'); await bukaKunci(T);
  assert.equal(R.log.length, 2); assert.match(R.log[1], new RegExp('^bukaKunci:' + soal1 + ':'));
  assert.match(R.log[1], /Mita/, 'jawaban Mita ikut dikirim bersama kunci');
  await lanjut(T);
  assert.equal(R.log[2], 'aturSoal:1'); assert.equal(noSoal(T) != null, true);
  // perangkat lain memimpin lagi lalu kembali: tetap bekerja untuk kedua kalinya
  diambil(R); await tunggu(20); assert.equal(T.s.bersamaAktif.room, 'ambil');
  await pimpinLagi(R); assert.equal(T.s.bersamaAktif.room, 1);
  T.UKP.go('beranda');
});

test('v10.2.6: kunci dibuka di papan selama terlepas: begitu memimpin lagi kunci itu dikirim ke room (HP tidak tertinggal di fase menjawab)', async () => {
  const { T, R } = await papanRoom(); const soal1 = R.st.aktivitas.soalIds[0];
  diambil(R); await tunggu(20);
  isiSemua(T); await bukaKunci(T);
  assert.equal(R.st.aktivitas.fase, 'jawab');
  await pimpinLagi(R);
  assert.equal(R.log.length, 2); assert.match(R.log[1], new RegExp('^bukaKunci:' + soal1 + ':'));
  assert.equal(R.st.aktivitas.fase, 'kunci'); assert.equal(R.st.aktivitas.idx, 0);
  assert.equal(T.toast[T.toast.length - 1], TEKS_SAMBUNG);
  await lanjut(T); assert.equal(R.log[2], 'aturSoal:1');
  T.UKP.go('beranda');
});

test('v10.2.6: papan sudah maju ke soal berikutnya selama terlepas: room dibawa ke soal papan', async () => {
  const { T, R } = await papanRoom();
  diambil(R); await tunggu(20);
  isiSemua(T); await bukaKunci(T); await lanjut(T);
  assert.deepEqual(R.log, ['mulaiLatihan']);
  await pimpinLagi(R);
  assert.deepEqual(R.log, ['mulaiLatihan', 'aturSoal:1']);
  assert.equal(R.st.aktivitas.idx, 1); assert.equal(R.st.aktivitas.fase, 'jawab');
  T.UKP.go('beranda');
});

for (const [nama, ubah] of [['sudah tidak ada', R => { R.st.aktivitas = null; }], ['latihan lain', R => { R.st.aktivitas = { jenis: 'latihan', id: 'sb-lain', soalIds: ['B7-005'], idx: 0, fase: 'jawab' }; }], ['ujian tim', R => { R.st.aktivitas = { jenis: 'ujian', id: 'u-1' }; }]]) {
  test('v10.2.6: memimpin lagi, aktivitas room ' + nama + ': tidak menyambung diam-diam, keterangan jujur, room tidak disentuh', async () => {
    const { T, R } = await papanRoom();
    diambil(R); await tunggu(20);
    ubah(R); const akt = JSON.stringify(R.st.aktivitas);
    await pimpinLagi(R);
    assert.deepEqual(R.log, ['mulaiLatihan'], 'tidak ada siaran');
    assert.equal(JSON.stringify(R.st.aktivitas), akt, 'aktivitas room apa adanya');
    assert.equal(T.toast[T.toast.length - 1], TEKS_SATU);
    assert.equal(T.s.bersamaAktif.room, null, 'titik lanjut satu layar');
    assert.ok(menu(T).includes('Atur saringan') && !menu(T).includes('Kembali ke lobi (latihan tetap berjalan)'));
    assert.doesNotMatch(T.main.textContent, /HP anggota menunggu papan Anda/);
    // sesudah itu papan tetap satu layar, juga bila aktivitas yang sama muncul lagi atau kabar room datang lagi
    const n = T.toast.length;
    isiSemua(T); await bukaKunci(T); R.pancar('state'); R.pancar('peran', { peran: 'tuan' }); await tunggu(20);
    assert.deepEqual(R.log, ['mulaiLatihan']); assert.equal(T.toast.length, n, 'keterangan tidak diulang');
    T.UKP.go('beranda');
  });
}

test('v10.2.6: papan dibuka lagi dari lobi sesudah memimpin lagi (titik lanjut "ambil"): menyambung lagi; masih anggota: menunggu', async () => {
  const { T, R, id } = await papanRoom();
  diambil(R); await tunggu(20);
  T.UKP.go('beranda'); await tunggu(10);
  for (const nm of ['status', 'state', 'peran', 'jawaban', 'hadir']) assert.equal(R.jumlahDengar(nm), 0, 'pendengar ' + nm + ' dilepas saat papan ditinggalkan');
  assert.equal(T.s.bersamaAktif.room, 'ambil');
  // masih anggota: papan terbuka sebagai satu layar dan menunggu
  T.UKP.go('latih', { lanjut: 1, room: 1 }); await tunggu(30);
  assert.ok(T.main.querySelector('.papan-baris')); assert.deepEqual(R.log, ['mulaiLatihan']); assert.equal(T.s.bersamaAktif.room, 'ambil');
  assert.ok(menu(T).includes('Kembali ke lobi (latihan tetap berjalan)'));
  T.UKP.go('beranda'); await tunggu(10);
  // sudah memimpin lagi di lobi, lalu "Kembali ke papan"
  R.peran = 'tuan'; R.st.tuan = 'Nicky';
  T.UKP.go('latih', { lanjut: 1, room: 1 }); await tunggu(30);
  assert.equal(R.st.aktivitas.id, id); assert.deepEqual(R.log, ['mulaiLatihan']);
  assert.equal(T.s.bersamaAktif.room, 1); assert.equal(T.toast[T.toast.length - 1], TEKS_SAMBUNG);
  isiSemua(T); await bukaKunci(T);
  assert.match(R.log[1], /^bukaKunci:/);
  T.UKP.go('beranda');
});

test('v10.2.6: memimpin lagi saat siaran belum bisa dikirim: tetap menunggu, menyambung pada kabar room berikutnya', async () => {
  const { T, R } = await papanRoom();
  diambil(R); await tunggu(20);
  isiSemua(T); await bukaKunci(T); await lanjut(T);
  R.tersambung = false; const n = T.toast.length;
  await pimpinLagi(R);
  assert.deepEqual(R.log, ['mulaiLatihan']); assert.equal(T.s.bersamaAktif.room, 'ambil'); assert.equal(T.toast.length, n, 'belum ada keterangan');
  R.tersambung = true; R.pancar('status'); await tunggu(20);
  assert.deepEqual(R.log, ['mulaiLatihan', 'aturSoal:1']); assert.equal(T.s.bersamaAktif.room, 1); assert.equal(T.toast[T.toast.length - 1], TEKS_SAMBUNG);
  T.UKP.go('beranda');
});

test('v10.2.6: latihan room biasa tanpa ambil alih tidak berubah; latihan satu layar tidak memasang pendengar room', async () => {
  const { T, R } = await papanRoom(); const soal1 = R.st.aktivitas.soalIds[0];
  R.pancar('state'); R.pancar('status'); R.pancar('peran', { peran: 'tuan' }); await tunggu(20);
  assert.deepEqual(R.log, ['mulaiLatihan']); assert.equal(T.toast.filter(t => t === TEKS_SAMBUNG || t === TEKS_SATU).length, 0);
  isiSemua(T); await bukaKunci(T); await lanjut(T);
  assert.match(R.log[1], new RegExp('^bukaKunci:' + soal1 + ':')); assert.equal(R.log[2], 'aturSoal:1'); assert.equal(T.s.bersamaAktif.room, 1);
  T.UKP.go('beranda');
  const T2 = siapkan(); T2.bersama(); T2.UKP.go('latih', { ids: 'B7-001,B7-002', n: 10 }); await tunggu(20);
  assert.ok(T2.main.querySelector('.papan-baris')); assert.equal(T2.s.bersamaAktif.room, null);
  T2.UKP.go('beranda');
});

test('v10.2.6: teks baru pendek, tanpa tanda pisah panjang, tanpa panah, tanpa istilah teknis', () => {
  const js = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-belajar.js'), 'utf8');
  for (const t of [TEKS_SAMBUNG, TEKS_SATU]) { assert.ok(js.includes("UKP.toast('" + t + "')"), t); assert.doesNotMatch(t, /[\u2014\u2013\u2192]|relai|MQTT/i); assert.ok(t.length <= 80); }
});
