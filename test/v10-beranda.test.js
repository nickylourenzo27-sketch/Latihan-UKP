/* Uji v10 Beranda "Langkah Tegas": pemilih kartu langkah (fungsi murni, tiap keadaan pemakai), ringkasan pekan dari riwayat,
   sesi latihan terakhir tanpa Soal hari ini, Cara ingat dari pembahasan.mudah, dan kait halaman. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const baca = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const vh = baca('js/views-home.js'), va = baca('js/app.js');

function muat() {
  const simpanan = new Map([['ukp.v1', JSON.stringify({ profil: { tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: 'Mita' } })]]);
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
  for (const rel of ['js/core.js', 'js/kalkulator.js', 'js/data/mu-A4.js', 'js/data/mu-B6.js', 'js/learn.js', 'js/views-home.js']) vm.runInContext(baca(rel), ctx, { filename: rel });
  return ctx.UKP;
}
const UKP = muat(); const B = UKP.berandaUji; const K = UKP.konten;
const salin = x => JSON.parse(JSON.stringify(x));

describe('v10 Beranda: pemilih langkah (fungsi murni)', () => {
  const dasar = o => Object.assign({ tingkat: 'B', namaTingkat: 'Tingkat B' }, o);
  it('pemakai baru: 10 soal campuran tingkatnya', () => {
    const l = B.pilihLangkah(dasar({ baru: true }));
    assert.equal(l.jenis, 'baru'); assert.equal(l.label, 'Langkah pertama'); assert.equal(l.judul, 'Coba 10 soal campuran Tingkat B');
    assert.equal(l.tombol, 'Mulai 10 soal'); assert.deepEqual(salin(l.tujuan), ['latih', { n: 10, mulai: true }]);
  });
  it('sesi latihan terakhir dengan salah: alis faktual, judul topik terbanyak salah, 10 soal topik itu', () => {
    const l = B.pilihLangkah(dasar({ sesiLatih: { n: 10, benar: 7, salah: 3, kode: 'A4', namaKode: 'PPN', hariKata: 'kemarin', topik: { id: 'A4.4', judul: 'Saat dan tempat PPN terutang', kode: 'A4', nSalah: 2 }, topikAkhir: { id: 'A4.1', judul: 'x', kode: 'A4' } } }));
    assert.equal(l.jenis, 'latih-topik');
    assert.equal(l.label, 'Terakhir: A4 PPN, kemarin 7 dari 10 benar');
    assert.equal(l.judul, 'Saat dan tempat PPN terutang');
    assert.equal(l.ket, '2 dari 3 soal yang salah kemarin ada di topik A4.4 ini.');
    assert.equal(l.tombol, 'Latih 10 soal A4.4');
    assert.deepEqual(salin(l.tujuan), ['latih', { topik: 'A4.4', kode: 'A4', n: 10, mulai: true }]);
  });
  it('alis tidak menjanjikan lanjutan: tidak memuat "Lanjutkan"', () => {
    const l = B.pilihLangkah(dasar({ sesiLatih: { n: 5, benar: 4, salah: 1, kode: null, hariKata: 'Rabu', topik: { id: 'B6.2', judul: 'T', kode: 'B6', nSalah: 1 } } }));
    assert.equal(l.label, 'Terakhir: latihan campuran, Rabu 4 dari 5 benar');
    assert.equal(l.ket, 'Soal yang salah pada Rabu ada di topik B6.2 ini.');
    assert.doesNotMatch(l.label, /Lanjutkan/);
  });
  it('sesi tanpa salah: topik terakhir yang dilatih', () => {
    const l = B.pilihLangkah(dasar({ sesiLatih: { n: 10, benar: 10, salah: 0, kode: 'A4', namaKode: 'PPN', hariKata: 'hari ini', topik: null, topikAkhir: { id: 'A4.1', judul: 'Objek PPN', kode: 'A4' } } }));
    assert.equal(l.jenis, 'latih-lanjut'); assert.equal(l.judul, 'Objek PPN'); assert.equal(l.tombol, 'Latih 10 soal A4.1');
  });
  it('urutan: simulasi berjalan mendahului semua, lalu room aktif, latihan bersama, ujian tim, sesi harian, simulasi habis', () => {
    const semua = dasar({ simulasi: { keadaan: 'berjalan', sisaMnt: 12 }, room: { nama: 'Tim UKP B', tuan: true, aktivitas: 'latihan', no: 3, total: 10 }, bersama: { no: 2, total: 5, orang: 4 }, ujianTim: { judul: 'UT', total: 40 }, sesiAktif: { posisi: 1, total: 3 }, baru: true });
    assert.equal(B.pilihLangkah(semua).jenis, 'simulasi-berjalan');
    assert.equal(B.pilihLangkah(semua).ket, 'Sisa 12 mnt. Jawaban Anda tersimpan.');
    delete semua.simulasi; assert.equal(B.pilihLangkah(semua).jenis, 'room-latihan');
    delete semua.room; assert.equal(B.pilihLangkah(semua).jenis, 'bersama');
    delete semua.bersama; assert.equal(B.pilihLangkah(semua).jenis, 'ujian-tim');
    delete semua.ujianTim; assert.equal(B.pilihLangkah(semua).jenis, 'sesi');
    delete semua.sesiAktif; semua.simulasi = { keadaan: 'habis' }; assert.equal(B.pilihLangkah(semua).jenis, 'simulasi-habis');
    delete semua.simulasi; assert.equal(B.pilihLangkah(semua).jenis, 'baru');
  });
  it('room: pemandu kembali ke papan, anggota ke layar room', () => {
    const r = (tuan, akt) => B.pilihLangkah(dasar({ room: { nama: 'Tim UKP B', tuan, aktivitas: akt, no: 3, total: 10 } }));
    assert.deepEqual(salin(r(true, 'latihan').tujuan), ['latih', { lanjut: 1, room: 1 }]); assert.equal(r(true, 'latihan').tombol, 'Kembali ke latihan');
    assert.deepEqual(salin(r(false, 'latihan').tujuan), ['room']); assert.equal(r(false, 'latihan').tombol, 'Ikut latihan sekarang');
    assert.equal(r(true, 'ujian').tombol, 'Buka layar ujian'); assert.equal(r(false, 'ujian').tombol, 'Ikut ujian tim');
    assert.equal(r(true, 'latihan').label, 'Room Tim UKP B');
    // room tanpa kegiatan berjalan tidak mengambil kartu langkah
    assert.equal(r(true, null).jenis, 'campuran');
  });
  it('sumber lain: baca materi, simulasi selesai, dan cadangan', () => {
    assert.equal(B.pilihLangkah(dasar({ baca: { id: 'A4.4', judul: 'Saat', kode: 'A4' } })).tombol, 'Latih 10 soal A4.4');
    const s = B.pilihLangkah(dasar({ simSelesai: { skor: '59,5' } }));
    assert.equal(s.label, 'Terakhir: simulasi, skor 59,5'); assert.deepEqual(salin(s.tujuan), ['latih', { hanyaSalah: true, n: 10, mulai: true }]);
    assert.equal(B.pilihLangkah(dasar({})).jenis, 'campuran');
  });
  it('tiap keluaran punya label, judul, satu tombol, dan tujuan; teks tanpa tanda pisah panjang atau panah', () => {
    const kasus = [{ baru: true }, { simulasi: { keadaan: 'berjalan', sisaMnt: null } }, { simulasi: { keadaan: 'habis' } }, { sesiAktif: { diagnosis: true, posisi: 2, total: 4 } }, { bersama: { no: 1, total: 3, orang: 0 } }, { ujianTim: { judul: 'UT', total: 0 } }, {}];
    for (const k of kasus) {
      const l = B.pilihLangkah(dasar(k));
      for (const f of ['jenis', 'label', 'judul', 'tombol']) assert.ok(l[f] && typeof l[f] === 'string', f + ' ' + JSON.stringify(k));
      assert.ok(Array.isArray(l.tujuan) && typeof l.tujuan[0] === 'string');
      assert.doesNotMatch([l.label, l.judul, l.ket || '', l.tombol].join(' '), /[\u2014\u2013\u2190-\u21FF]/);
    }
  });
});

describe('v10 Beranda: data dari riwayat di perangkat', () => {
  const pada = (tgl, jam, mnt) => new Date(tgl + 'T' + String(jam).padStart(2, '0') + ':' + String(mnt || 0).padStart(2, '0') + ':00').getTime();
  const jw = (id, benar, t, konteks) => { const so = K.soal(id); return { soal: id, topik: so.topik, kode: so.kode, benar, opsi: benar ? so.kunci : 'X', detik: 30, konteks: konteks || 'latih', pada: t }; };
  it('ringkasan pekan: Senin sampai Minggu, hari belajar dan jumlah benar dari jawaban; simulasi kosong tidak dihitung', () => {
    const s = { hadir: { '2026-11-19': { status: 'HADIR', menit: 20 } }, jawaban: [
      jw('A4-017', true, pada('2026-11-16', 19)), jw('A4-018', false, pada('2026-11-17', 19)), jw('A4-467', true, pada('2026-11-21', 1)),   // 01.00 Sabtu masih Jumat
      { soal: 'A4-017', kode: 'A4', konteks: 'simulasi', opsi: '-', benar: false, pada: pada('2026-11-18', 9) },
      jw('A4-017', true, pada('2026-11-15', 19)),   // Minggu pekan lalu
    ] };
    const r = B.ringkasPekan(s, '2026-11-21');
    assert.equal(r.hari.length, 7); assert.equal(r.hari[0].tgl, '2026-11-16'); assert.equal(r.hari[6].tgl, '2026-11-22');
    assert.deepEqual(salin(r.hari.map(x => x.ya)), [true, true, false, true, true, false, false]);
    assert.equal(r.nHari, 4); assert.equal(r.n, 3); assert.equal(r.benar, 2);
    assert.ok(r.hari[5].kini && r.hari[6].nanti);
  });
  it('sesi latihan terakhir: jeda lebih dari 30 menit memutus sesi, Soal hari ini dan simulasi tidak dihitung', () => {
    const t = pada('2026-11-20', 19);
    const s = { soalHari: { tgl: '2026-11-20', id: 'B6-329', o: 'C' }, jawaban: [
      jw('A4-017', true, t - 3 * 3600000),                 // sesi lama
      jw('A4-467', true, t), jw('A4-017', false, t + 60000), jw('A4-018', false, t + 120000), jw('A4-467', false, t + 180000),
      jw('B6-329', true, t + 240000),                      // Soal hari ini
      jw('A4-017', true, t + 300000, 'simulasi'),
    ] };
    const x = B.sesiLatihTerakhir(s);
    assert.equal(x.n, 4); assert.equal(x.benar, 1); assert.equal(x.salah, 3); assert.equal(x.kode, 'A4');
    const topik = K.soal('A4-017').topik;
    assert.equal(x.topik.id, topik, 'topik dengan salah terbanyak'); assert.equal(x.topik.nSalah, 2);
    assert.equal(x.tgl, '2026-11-20');
  });
  it('tanpa jawaban latihan: tidak ada sesi', () => {
    assert.equal(B.sesiLatihTerakhir({ jawaban: [] }), null);
  });
  it('Cara ingat dipotong dari pembahasan.mudah dengan huruf pertama kapital; soal tanpa kalimatnya tidak punya Cara ingat', () => {
    assert.equal(B.caraIngat({ pembahasan: { mudah: 'Penjelasan. Cara ingat: obligasi sekarang 10% final.' } }), 'Obligasi sekarang 10% final.');
    assert.equal(B.caraIngat({ pembahasan: { mudah: 'Penjelasan saja.' } }), null);
    assert.equal(B.caraIngat({}), null);
  });
});

describe('v10 Beranda: kait dan aturan halaman', () => {
  it('satu tombol terisi: hanya tombol kartu langkah yang tetap .btn-primary', () => {
    assert.ok(vh.includes("if (b !== langkah.querySelector('.bv-langkah-tombol')) b.classList.remove('btn-primary');"));
    assert.ok(vh.includes("class: 'card v10-melayang bv-langkah'"), 'kartu langkah memakai primitif kartu melayang (tombol kuning di kedua tema)');
  });
  it('Pilihan lain memuat Mode mabar, Ulang soal yang salah, dan Simulasi ujian; Buku Kesalahan kosong ditulis', () => {
    for (const t of ["barisDaftar('Mode mabar'", "barisDaftar('Ulang soal yang salah'", "barisDaftar('Simulasi ujian'", "'Belum ada soal yang salah'", "'Satu soal untuk hari yang sempit. Jawab di sini.'"]) assert.ok(vh.includes(t), t);
  });
  it('Soal hari ini: hasil menerima fokus tanpa wilayah status; opsi keluar dari urutan Tab sesudah dijawab; gulir ikut gerak dikurangi', () => {
    const f = vh.slice(vh.indexOf('function kartuSoalHariV10('), vh.indexOf('// ikon chevron baris daftar'));
    assert.ok(f.includes("h('p', { class: 'bv-hasil', id: 'sh-hasil', tabindex: '-1', hidden: true })"));
    assert.ok(!/aria-live|role: 'status'/.test(f), 'tanpa wilayah status');
    assert.ok(f.includes("b.setAttribute('aria-disabled', 'true'); b.tabIndex = -1;"));
    assert.ok(f.includes('behavior: UKP.gulirHalus()'));
    assert.ok(f.includes("h('span', { class: 'bv-huruf', 'aria-hidden': 'true' }, x)") && f.includes("h('span', { class: 'visually-hidden' }, x + '. ')"), 'huruf aria-hidden dengan teks tersembunyi "C. "');
  });
  it('kop HP: Target ujian pindah ke lembar Lainnya, wordmark di Beranda', () => {
    assert.ok(va.includes("h('span', { class: 'row-title' }, 'Target ujian')"));
    assert.ok(va.includes("if (view === 'beranda') tb.dataset.v10Merek = '';"));
  });
  it('baris baru di berkas Beranda tanpa tanda pisah panjang dan panah', () => {
    const blok = vh.slice(vh.indexOf('// D3.4 kartu Lanjutkan, v10'), vh.indexOf('// ----- Sambutan pengunjung baru'));
    assert.doesNotMatch(blok, /[\u2014\u2190-\u21FF]/);
  });
});
