/* v10.3.1: ukuran teks soal dan keterbacaan. Jalankan: node --test test/
   Yang diuji: token tiga ukuran di css/app.css (rem, jarak baris paling sedikit 1,45, tidak di bawah 15px); atribut html[data-soal] diterapkan dari
   pengaturan.ukuranSoal oleh UKP.terapkanTema dan tidak bertabrakan dengan "Teks lebih besar"; pemecah butir bernomor UKP.susunStem, termasuk
   stem yang TIDAK boleh dipecah; tombol "Aa" terdaftar di empat layar soal dan di Pengaturan. Tidak membaca js/data.
   Putaran 2: kartu soal jalur lama (tanpa .soal-v10) ikut token, angka sejajar hanya pada angka uang, pengali papan 0,8 0,9 1, kop dan bilah. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.join(__dirname, '..');
const baca = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const css = baca('css/app.css');

// core.js di konteks vm dengan documentElement yang mencatat atribut dan localStorage di memori
function muat(awal) {
  const noop = () => {};
  const attr = new Map(); const gudang = new Map(); if (awal) gudang.set('ukp.v1', JSON.stringify(awal));
  const el = () => ({ appendChild: noop, append: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const akar = Object.assign(el(), { setAttribute: (k, v) => attr.set(k, String(v)), removeAttribute: k => attr.delete(k), getAttribute: k => (attr.has(k) ? attr.get(k) : null) });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, CustomEvent: function (t, o) { this.type = t; Object.assign(this, o || {}); },
    document: { addEventListener: noop, removeEventListener: noop, dispatchEvent: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: akar, querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => (gudang.has(k) ? gudang.get(k) : null), setItem: (k, v) => gudang.set(k, String(v)), removeItem: k => gudang.delete(k) }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(baca('js/core.js'), ctx, { filename: 'core.js' });
  return { UKP: ctx.UKP, attr, gudang };
}
const blokToken = pemilih => { const i = css.indexOf(pemilih); assert.ok(i >= 0, 'blok ' + pemilih + ' ada'); return css.slice(i, css.indexOf('}', i)); };
const token = (blok, nama) => { const m = new RegExp('--' + nama + ':\\s*([\\d.]+)rem').exec(blok); assert.ok(m, 'token --' + nama + ' dalam rem'); return Number(m[1]) * 16; };

describe('v10.3.1 token ukuran teks soal', () => {
  const sedang = css.slice(css.indexOf('--v10-t-soal: 1rem'), css.indexOf('--v10-soal-skala: .9;'));
  const kecil = blokToken(':root[data-soal="kecil"]'); const besar = blokToken(':root[data-soal="besar"]');
  it('stem: kecil 15/22, sedang 16/24 (bawaan), besar 18/28, semuanya rem', () => {
    assert.deepEqual([token(sedang, 'v10-t-soal'), token(sedang, 'v10-tb-soal')], [16, 24]);
    assert.deepEqual([token(kecil, 'v10-t-soal'), token(kecil, 'v10-tb-soal')], [15, 22]);
    assert.deepEqual([token(besar, 'v10-t-soal'), token(besar, 'v10-tb-soal')], [18, 28]);
    assert.ok(!/--v10-t-soal:\s*\d+px/.test(css), 'tidak ada lagi token stem dalam px');
  });
  it('teks baca dan jejak hitung: tidak di bawah 15px, tidak lebih besar dari stem, jarak baris paling sedikit 1,45', () => {
    for (const [nama, b] of [['sedang', sedang], ['kecil', kecil], ['besar', besar]]) {
      const stem = token(b, 'v10-t-soal');
      for (const t of ['soal', 'baca', 'hitung']) {
        const u = token(b, 'v10-t-' + t), tb = token(b, 'v10-tb-' + t);
        assert.ok(u >= 15, nama + ' ' + t + ' ' + u + 'px paling kecil 15px');
        assert.ok(u <= stem, nama + ' ' + t + ' tidak lebih besar dari stem');
        assert.ok(tb / u >= 1.45, nama + ' ' + t + ' jarak baris ' + (tb / u).toFixed(3));
      }
      assert.ok(token(b, 'v10-t-putus') > stem, nama + ': judul vonis lebih besar dari stem');
    }
  });
  it('stem v10 dan stem room tebal 400 dan memakai token; lebar baris 66 karakter', () => {
    assert.match(css, /main \.soal\.soal-v10 > \.stem \{[^}]*font-size: var\(--v10-t-soal\); line-height: var\(--v10-tb-soal\); font-weight: 400;[^}]*max-width: 66ch;/);
    assert.match(css, /\.room-anggota-v10 \.stem-room \{[^}]*font-size: var\(--v10-t-soal\); line-height: var\(--v10-tb-soal\); font-weight: 400;/);
    const i = css.indexOf('v10.3.1: ukuran teks soal dan keterbacaan'); assert.ok(i > 0); const blok = css.slice(i);
    assert.match(blok, /\.halaman-ujian \.soal > \.stem,[^{]*\{\s*font-size: var\(--v10-t-soal\); line-height: var\(--v10-tb-soal\); font-weight: 400;[^}]*max-width: 66ch;/);
    assert.match(blok, /\.angka-utuh \{ white-space: nowrap; font-variant-numeric: tabular-nums; \}/);
    assert.match(blok, /\.stem-susun > \.stem-butir \{ padding-left: ([\d.]+)em; text-indent: -\1em; \}/);
    assert.match(blok, /main \.soal\.soal-v10 \.opsi:not\(\.opsi-tampil\) label \{ min-height: 48px;/, 'sasaran ketuk opsi paling sedikit 48px');
    assert.match(blok, /\.soal-papan-v10 \.stem \{ font-size: calc\(var\(--p-soal\) \* var\(--v10-soal-skala\)\); line-height: 1\.45; font-weight: 400;/);
    assert.match(blok, /@media \(prefers-reduced-motion: reduce\) \{ \.aa-soal \*/);
  });
  it('blok v10.3.1 tidak membuat warna baru', () => {
    const blok = css.slice(css.indexOf('v10.3.1: ukuran teks soal dan keterbacaan'));
    assert.equal((blok.match(/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/g) || []).length, 0);
  });
});

describe('v10.3.1 putaran 2: kartu soal jalur lama, angka sejajar, papan, kop', () => {
  const blok = css.slice(css.indexOf('v10.3.1: ukuran teks soal dan keterbacaan'));
  const aturan = pemilih => { const i = blok.indexOf(pemilih); assert.ok(i >= 0, 'aturan ' + pemilih + ' ada'); return blok.slice(i, blok.indexOf('}', i) + 1); };
  const LAMA = '.soal:not(.soal-v10):not(.soal-papan-v10)';
  it('Latih "Periksa dulu" dan kartu soal lain tanpa .soal-v10: stem memakai token stem', () => {
    const a = aturan(LAMA + ' > .stem,');
    assert.match(a, /#main \.latih-area > \.soal:not\(\.soal-v10\):not\(\.soal-papan-v10\) > \.stem \{/);
    assert.match(a, /font-size: var\(--v10-t-soal\); line-height: var\(--v10-tb-soal\); font-weight: 400;[^}]*max-width: 66ch;/);
  });
  it('jalur lama: opsi dan teks pembahasan memakai token baca; kutipan dan jejak hitung memakai token hitung', () => {
    const a = aturan(LAMA + ' .opsi label,');
    for (const k of ['.umpan-mudah-isi', '.inti', '.umpan-jebakan', 'details.lipat li', 'ul.dasar-hukum .pasal']) assert.ok(a.includes(k), k + ' ikut token baca');
    assert.match(a, /\{\s*font-size: var\(--v10-t-baca\); line-height: var\(--v10-tb-baca\);\s*\}/);
    assert.match(aturan(LAMA + ' > .kutipan p,'), /\.umpan \.jejak td \{ font-size: var\(--v10-t-hitung\); line-height: var\(--v10-tb-hitung\); \}/);
  });
  it('jalur lama dan Simulasi: opsi 48px berjarak 8px, tidak di bawah 44px', () => {
    assert.match(blok, /\.soal:not\(\.soal-v10\):not\(\.soal-papan-v10\) \.opsi \{ gap: 8px; \}/);
    const m = /\.soal:not\(\.soal-v10\):not\(\.soal-papan-v10\) \.opsi:not\(\.opsi-tampil\) label \{ min-height: (\d+)px; padding-block: [\d.]+px; \}/.exec(blok);
    assert.ok(m && Number(m[1]) >= 44 && Number(m[1]) <= 49, 'tinggi paling sedikit opsi 44 sampai 49px');
  });
  it('kartu Soal hari ini di Beranda ikut token', () => {
    assert.match(blok, /\.kartu-soal-hari \.sh-stem, \.beranda-v10 \.bv-hari \.bv-stem \{ font-size: var\(--v10-t-soal\); line-height: var\(--v10-tb-soal\); \}/);
  });
  it('angka sejajar hanya pada angka uang: teks berjalan stem, opsi, umpan, dan kutipan tidak memakai tabular-nums', () => {
    const pakai = blok.split('}').filter(x => x.includes('tabular-nums') && x.includes('{')).map(x => x.slice(0, x.indexOf('{')).replace(/\/\*[^]*?\*\//g, '').trim());
    assert.deepEqual(pakai, ['.angka-utuh']);
    assert.match(css, /\.jejak \{[^}]*font-variant-numeric: tabular-nums;/, 'tabel jejak hitung tetap angka sejajar');
  });
  it('papan Mode mabar: pengali kecil 0,8, sedang 0,9, besar 1; opsi dan teks baca papan tidak di bawah 15px', () => {
    const angka = b => Number(/--v10-soal-skala:\s*([\d.]+)/.exec(b)[1]);
    assert.equal(angka(css.slice(css.indexOf('--v10-t-soal: 1rem'))), 0.9);
    assert.equal(angka(blokToken(':root[data-soal="kecil"]')), 0.8); assert.equal(angka(blokToken(':root[data-soal="besar"]')), 1);
    assert.match(blok, /\.page\.papan-v10 \.soal-papan-v10 fieldset\.opsi > label \{ font-size: max\(\.9375rem, calc\(var\(--p-opsi\) \* var\(--v10-soal-skala\)\)\);/);
    assert.match(blok, /\.soal-papan-v10 \.umpan \.umpan-mudah-isi, \.soal-papan-v10 \.umpan \.inti \{ font-size: max\(\.9375rem, calc\(var\(--p-baca\) \* var\(--v10-soal-skala\)\)\); line-height: 1\.5; \}/);
    assert.match(blok, /\.soal-papan-v10 \.stem-susun > \* \+ \* \{ margin-top: \.1em; \}/);
  });
  it('butir lebih rapat di layar lebar; Aa tidak menambah tinggi kop papan HP dan bilah Simulasi; kop 360px dirapatkan', () => {
    assert.match(blok, /@media \(min-width: 768px\) \{ \.stem-susun > \* \+ \* \{ margin-top: 0; \}/);
    assert.match(blok, /\.soal-papan-v10 \.soal-kop > \.aa-soal \{ display: inline-block; margin-block: -18px -4px; \}/);
    assert.match(blok, /\.soal-papan-v10 \.soal-kop \.soal-id > \.topik:not\(\.sumber-set\) \{[^}]*text-overflow: ellipsis; white-space: nowrap; \}/);
    assert.match(blok, /\.ujian-bar > \.aa-soal \{ margin-block: -6px; \}/);
    assert.match(blok, /@media \(max-width: 379px\) \{\s*\.kop-sesi-v10\.ada-aa > \.aa-soal \{ margin-inline: -6px; \}/);
  });
  it('tombol di dalam menu Aa bukan pintasan kartu soal', () => {
    assert.match(baca('js/soal.js'), /if \(t && t\.closest && t\.closest\('\.aa-soal'\)\) return;/);
  });
});

describe('v10.3.1 atribut html[data-soal] dari pengaturan', () => {
  it('bawaan sedang: tanpa atribut', () => { const { UKP, attr } = muat(); UKP.terapkanTema(); assert.equal(attr.has('data-soal'), false); assert.equal(UKP.ukuranSoal.baca(), 'sedang'); assert.equal(UKP.store.get().pengaturan.ukuranSoal, 'sedang'); });
  it('simpanan kecil atau besar diterapkan saat dimuat', () => {
    for (const u of ['kecil', 'besar']) { const { UKP, attr } = muat({ profil: { tingkat: 'B', onboardingSelesai: true }, pengaturan: { ukuranSoal: u } }); UKP.terapkanTema(); assert.equal(attr.get('data-soal'), u); }
  });
  it('nilai tak dikenal kembali ke sedang', () => { const { UKP, attr } = muat({ pengaturan: { ukuranSoal: 'raksasa' } }); UKP.terapkanTema(); assert.equal(attr.has('data-soal'), false); assert.equal(UKP.store.get().pengaturan.ukuranSoal, 'sedang'); });
  it('atur() berlaku seketika, tersimpan, dan tidak mengubah "Teks lebih besar"', () => {
    const { UKP, attr, gudang } = muat({ pengaturan: { teksBesar: true } }); UKP.terapkanTema();
    assert.equal(attr.get('data-teks'), 'besar'); assert.equal(attr.has('data-soal'), false);
    assert.equal(UKP.ukuranSoal.atur('besar'), 'besar'); assert.equal(attr.get('data-soal'), 'besar'); assert.equal(attr.get('data-teks'), 'besar');
    UKP.store.flush(); assert.equal(JSON.parse(gudang.get('ukp.v1')).pengaturan.ukuranSoal, 'besar'); assert.equal(JSON.parse(gudang.get('ukp.v1')).pengaturan.teksBesar, true);
    UKP.ukuranSoal.atur('sedang'); assert.equal(attr.has('data-soal'), false); assert.equal(attr.get('data-teks'), 'besar');
    assert.deepEqual(JSON.parse(JSON.stringify(UKP.ukuranSoal.DAFTAR)), [['kecil', 'Kecil'], ['sedang', 'Sedang'], ['besar', 'Besar']]);
  });
});

describe('v10.3.1 pemecah butir bernomor (UKP.susunStem)', () => {
  const { UKP } = muat(); const S = UKP.susunStem;
  const utuh = (t, r) => assert.equal(r.pembuka + r.butir.map(b => b.teks).join('') + r.penutup, t, 'teks soal tidak berubah');
  it('tiga butir: pembuka, butir, dan kalimat tanya terpisah; teks utuh', () => {
    const t = 'Pada 2026 Dr. Hana menerima: (1) gaji dari PT Robotik Nusantara Rp960.000.000; (2) dividen dari perusahaan di Osaka Rp150.000.000; (3) royalti paten dari perusahaan di Jerman Rp200.000.000. Penghasilan yang dikenai PPh di Indonesia adalah ...';
    const r = S(t); assert.ok(r); utuh(t, r);
    assert.equal(r.pembuka, 'Pada 2026 Dr. Hana menerima: '); assert.equal(r.butir.map(b => b.no).join(), '1,2,3');
    assert.equal(r.butir[2].teks, '(3) royalti paten dari perusahaan di Jerman Rp200.000.000. '); assert.equal(r.penutup, 'Penghasilan yang dikenai PPh di Indonesia adalah ...');
  });
  it('kata sambung sebelum butir terakhir tetap di tempat; singkatan bertitik bukan ujung kalimat', () => {
    const t = 'Klinik membayar: (1) sewa alat Rp10.000.000; dan (2) honorarium drg. Bima Santoso, dokter gigi, Rp5.000.000. Berapa PPh yang dipotong?';
    const r = S(t); assert.ok(r); utuh(t, r); assert.equal(r.butir[0].teks, '(1) sewa alat Rp10.000.000; dan ');
    assert.equal(r.butir[1].teks, '(2) honorarium drg. Bima Santoso, dokter gigi, Rp5.000.000. '); assert.equal(r.penutup, 'Berapa PPh yang dipotong?');
  });
  it('rujukan balik sesudah daftar tidak menambah butir', () => {
    const t = 'PKP melakukan: (1) menyerahkan bibit kepada kelompok tani; dan (2) menjual truk bekas miliknya. Kode transaksi faktur untuk penyerahan (1) dan (2) berturut-turut adalah ...';
    const r = S(t); assert.ok(r); utuh(t, r); assert.equal(r.butir.length, 2); assert.match(r.penutup, /^Kode transaksi faktur untuk penyerahan \(1\) dan \(2\)/);
  });
  it('TIDAK dipecah: rujukan pasal dan ayat', () => {
    for (const t of [
      'Menurut Pasal 7 ayat (2) UU KUP, sebagian Wajib Pajak dikecualikan dari denda. Wajib Pajak yang tetap dikenai denda Pasal 7 ayat (1) adalah ...',
      'Berdasarkan Pasal 5 ayat (1) dan ayat (2) UU PPh, yang menjadi objek pajak BUT adalah ...',
      'Bunga Pasal 19 ayat (1) dihitung atas pokok Rp120.000.000, sedangkan sanksi Pasal 13 ayat (2) dihitung sejak saat terutang. Jumlahnya adalah ...',
      'Sesuai Pasal 4 ayat (1) huruf a dan angka (2) lampiran, serta butir (1) dan butir (2) surat edaran, perlakuan yang tepat adalah ...',
    ]) assert.equal(S(t), null, t.slice(0, 50));
  });
  it('TIDAK dipecah: hanya rujukan "(1) dan (2)", hanya satu butir, tidak mulai dari (1), nomor melompat, stem biasa', () => {
    assert.equal(S('Kode transaksi faktur pajak untuk penyerahan (1) dan (2) pada kutipan di atas berturut-turut adalah ...'), null);
    assert.equal(S('Perusahaan hanya mempunyai (1) gudang di Cikarang yang disewakan kepada pihak lain. PPh yang terutang adalah ...'), null);
    assert.equal(S('Daftar berlanjut: (2) sewa gedung Rp10.000.000; (3) jasa teknik Rp5.000.000. Jumlah yang dipotong adalah ...'), null);
    assert.equal(S('Ada dua pos: (1) sewa gedung Rp10.000.000; (3) jasa teknik Rp5.000.000. Jumlah yang dipotong adalah ...'), null);
    assert.equal(S('PT Maju menjual barang Rp400.000.000 kepada pemungut PPN. PPN yang dipungut adalah ...'), null);
    assert.equal(S(''), null); assert.equal(S(null), null);
  });
  it('huruf tunggal sesudah kata sebutan ("Negara M.") adalah ujung kalimat; inisial nama tetap singkatan', () => {
    const t = 'PT Lintas Nusa memperoleh: (1) royalti yang dibayar oleh Marlow Ltd di Negara M; (2) sewa gudang di Negara N, dibayar oleh perusahaan di Negara M. Berdasarkan kutipan tersebut, negara sumbernya adalah ...';
    const r = S(t); assert.ok(r); utuh(t, r); assert.match(r.butir[1].teks, /di Negara M\. $/); assert.match(r.penutup, /^Berdasarkan kutipan tersebut/);
    const t2 = 'Kantor membayar: (1) honor kepada A. Rahman Hakim Rp5.000.000; (2) sewa kepada H. Budi Santoso Rp7.000.000. Berapa PPh yang dipotong?';
    const r2 = S(t2); assert.ok(r2); utuh(t2, r2); assert.equal(r2.butir[1].teks, '(2) sewa kepada H. Budi Santoso Rp7.000.000. '); assert.equal(r2.penutup, 'Berapa PPh yang dipotong?');
  });
  it('rujukan ayat sebelum daftar tidak mengacaukan urutan', () => {
    const t = 'Sesuai Pasal 9 ayat (1) UU PPh, perusahaan menelaah: (1) sumbangan festival Rp45.000.000; (2) sanksi bunga Rp15.000.000. Koreksi positifnya adalah ...';
    const r = S(t); assert.ok(r); utuh(t, r); assert.equal(r.butir.length, 2); assert.match(r.pembuka, /ayat \(1\) UU PPh, perusahaan menelaah: $/);
  });
  it('pembungkus lama UKP.pecahDaftarStem dan pengisi stem memakai penyusun yang sama', () => {
    const soal = baca('js/soal.js'); assert.match(soal, /UKP\.susunStem \? UKP\.susunStem\(t\) : null/); assert.match(soal, /UKP\.c\.isiStem\(h\('p', \{ class: 'stem', id: stemId \}\), soal\.stem,/);
    assert.match(baca('js/views-ruang.js'), /UKP\.c\.isiStem\(h\('p', \{ class: 'stem-room' \}\), soal\.stem,/);
    const core = baca('js/core.js'); assert.match(core, /el\.classList\.add\('stem-susun'\)/); assert.match(core, /class: 'stem-butir'/); assert.match(core, /class: 'angka-utuh'/);
  });
});

describe('v10.3.1 tombol Aa terdaftar di empat layar soal dan di Pengaturan', () => {
  const core = baca('js/core.js');
  it('komponen: label "Ukuran teks soal", tiga pilihan bertanda aria-pressed, Esc menutup', () => {
    const i = core.indexOf('C7.tombolUkuranSoal = function'); assert.ok(i > 0); const badan = core.slice(i, core.indexOf('\n  };', i));
    assert.match(badan, /const LABEL = 'Ukuran teks soal'/); assert.match(badan, /'aria-label': LABEL/); assert.match(badan, /'aria-pressed'/); assert.match(badan, /US\.atur\(v\)/); assert.match(badan, /e\.key === 'Escape'/);
    assert.match(core, /if \(o\.ukuran && C7\.tombolUkuranSoal\) \{ el\.classList\.add\('ada-aa'\); el\.insertBefore\(C7\.tombolUkuranSoal\(\), kanan\); \}/);
    assert.match(css, /\.aa-soal > summary\.aa-soal-tombol \{\s*display: inline-grid; place-items: center; min-width: var\(--v10-sasaran\); min-height: var\(--v10-sasaran\);/);
    assert.match(css, /\.aa-soal > \.aa-soal-isi > button \{\s*min-height: var\(--v10-sasaran\);/);
    assert.match(css, /\.aa-soal > summary\.aa-soal-tombol:focus-visible \{ outline: 2px solid var\(--v10-fokus\)/);
  });
  it('Latih sendiri dan papan Mode mabar: kop fokusBar dengan ukuran: true', () => {
    assert.match(baca('js/views-belajar.js'), /fokusBar\(\{ label: 'Kemajuan latihan', onKeluar: \(\) => keluar\(\), sesi: !peserta, ukuran: true \}\)/);
    assert.match(baca('js/soal.js'), /if \(papanV10 && UKP\.c\.tombolUkuranSoal\) kop\.appendChild\(UKP\.c\.tombolUkuranSoal\(\)\);/);
  });
  it('Simulasi: tombol di bilah ujian, simpul dipakai ulang', () => {
    const sim = baca('js/views-simulasi.js'); assert.match(sim, /const aaSoal = UKP\.c\.tombolUkuranSoal \? UKP\.c\.tombolUkuranSoal\(\) : null;/); assert.ok((sim.match(/aaSoal/g) || []).length >= 3);
  });
  it('HP anggota room: kop sesi anggota dengan ukuran: true', () => { assert.match(baca('js/views-ruang.js'), /Object\.assign\(\{\}, opsi, \{ sesi: true, ukuran: true,/); });
  it('Pengaturan: pilihan Ukuran teks soal sebelum sakelar Teks lebih besar', () => {
    const alat = baca('js/views-alat.js'); const a = alat.indexOf("'p-ukuran-soal', 'Ukuran teks soal'"); const b = alat.indexOf("'teksBesar', 'Teks lebih besar'"); assert.ok(a > 0 && b > a);
    assert.match(alat, /v => \{ g\.ukuranSoal = v; \}/);
  });
});
