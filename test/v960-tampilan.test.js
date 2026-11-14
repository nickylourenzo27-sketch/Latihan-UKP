/* Uji v9.6: penjaga gaya "v9.6 tampilan" di css/app.css dan kait kelasnya di js (lihat docs/DESAIN-V96.md).
   - Bagian berpagar: tiap pembuka punya penutup bernama sama, berurutan, dan semuanya di akhir berkas.
   - Di dalam bagian itu tidak ada fitur CSS yang tidak dikenal Safari atau Android lama.
   - Token --v96-* yang dipakai didefinisikan di :root; dua pemilih tema gelap mendefinisikan himpunan token yang sama.
   - Pita kepala halaman hanya lewat opsi pita pada UKP.c.kop, tidak tampil di layar sesi dan ujian, dan mati saat cetak.
   - Tanda centang pilihan berbentuk daftar terlihat di atas isian (aturan baru menang atas aturan lama).
   Tanpa DOM. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(ROOT, 'css', 'app.css'), 'utf8');
const baca = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const BUKA = /\/\* ===== v9\.6 tampilan: (.+?) ===== \*\//g, TUTUP = /\/\* ===== akhir v9\.6 (.+?) ===== \*\//g;
const buka = [...css.matchAll(BUKA)], tutup = [...css.matchAll(TUTUP)];
const awal = buka.length ? buka[0].index : -1;
const blok = awal >= 0 ? css.slice(awal) : '';
const tanpaKomentar = blok.replace(/\/\*[\s\S]*?\*\//g, '');

describe('v9.6: bagian berpagar di akhir css/app.css', () => {
  it('lima bagian atau lebih, tiap pembuka punya penutup bernama sama dan berurutan', () => {
    assert.ok(buka.length >= 5, 'jumlah bagian ' + buka.length);
    assert.deepEqual(tutup.map(m => m[1]), buka.map(m => m[1]));
    buka.forEach((m, i) => { assert.ok(tutup[i].index > m.index, m[1] + ': penutup sesudah pembuka'); if (buka[i + 1]) assert.ok(tutup[i].index < buka[i + 1].index, m[1] + ': tidak tumpang tindih'); });
    for (const nama of ['dasar bersama', 'layar soal dan pembahasan', 'papan bersama dan HP anggota', 'hasil dan evaluasi', 'pengaturan sesi dan halaman baca']) assert.ok(buka.some(m => m[1] === nama), 'bagian "' + nama + '"');
  });
  it('tidak ada aturan lain sesudah bagian v9.6 terakhir, dan tambahannya paling banyak 50 KB', () => {
    const akhir = tutup[tutup.length - 1]; assert.equal(css.slice(akhir.index + akhir[0].length).trim(), '');
    // batas semula 45 KB (v9.6.0); dinaikkan ke 50 KB di v9.6.5 untuk pita lobi, evaluasi, dan layar selesai
    assert.ok(Buffer.byteLength(blok) <= 50 * 1024, 'besar bagian v9.6: ' + Buffer.byteLength(blok) + ' bita');
  });
});

describe('v9.6: fitur CSS yang dihindari', () => {
  for (const [nama, re] of [['border-image', /border-image/], ['color-mix()', /color-mix\(/], ['@container', /@container/], ['@layer', /@layer/], ['backdrop-filter', /backdrop-filter/], [':has()', /:has\(/], ['penulisan bersarang (&)', /^\s*&/m], ['satuan dvh/svh/lvh', /\d(?:dvh|svh|lvh)\b/]]) {
    it('tanpa ' + nama, () => { assert.ok(!re.test(tanpaKomentar), nama + ' ditemukan di bagian v9.6'); });
  }
  it('bayangan hanya garis dalam (inset) atau none; tanpa gradasi sebagai latar', () => {
    for (const m of tanpaKomentar.matchAll(/box-shadow:\s*([^;}]+)/g)) assert.match(m[1].trim(), /^(none|inset\b)/, 'box-shadow: ' + m[1]);
    assert.ok(!/(linear|radial|conic)-gradient\(/.test(tanpaKomentar), 'gradasi ditemukan');
  });
  it('overflow-x: clip hanya di dalam @supports, dengan pita cadangan untuk peramban tanpa clip', () => {
    const i = tanpaKomentar.indexOf('@supports (overflow-x: clip)'); assert.ok(i >= 0);
    assert.ok(!/overflow-x:\s*clip/.test(tanpaKomentar.slice(0, i)), 'clip dipakai sebelum @supports');
    assert.match(tanpaKomentar.slice(0, i), /\.kop-pita::before\s*\{[^}]*left:\s*calc\(-1 \* var\(--gutter\)\)/, 'pita cadangan selebar isi + gutter');
  });
  // v9.6.6: di mesin Safari seluler lama (potret WebKit lama, profil HP dan tablet) overflow-x: clip pada main membuat isi halaman
  // yang tidak berlapis tidak tergambar. Karena itu potongan bawaan ada di akar dokumen, dan main hanya dipotong untuk penunjuk mouse.
  it('overflow-x: clip pada main hanya untuk penunjuk mouse; bawaannya di akar dokumen', () => {
    const i = tanpaKomentar.indexOf('@supports (overflow-x: clip)'); const j = tanpaKomentar.indexOf('@media screen', i);
    assert.ok(i >= 0 && j > i, 'blok @supports dan @media screen ada');
    const blok = tanpaKomentar.slice(i, j);
    assert.match(blok, /@supports \(overflow-x: clip\) \{\s*html \{ overflow-x: clip; \}/, 'bawaan: potong di akar dokumen');
    const mouse = blok.match(/@media \(hover: hover\) and \(pointer: fine\) \{([\s\S]*?)\n  \}/);
    assert.ok(mouse, 'blok penunjuk mouse ada');
    assert.match(mouse[1], /html \{ overflow-x: visible; \}/, 'mouse: akar kembali visible');
    assert.match(mouse[1], /main \{ overflow-x: clip; \}/, 'mouse: potong di main');
    // di seluruh bagian v9.6, main { overflow-x: clip } hanya boleh muncul satu kali, yaitu di blok penunjuk mouse itu
    const semua = tanpaKomentar.match(/main\s*\{[^}]*overflow-x:\s*clip/g) || [];
    assert.equal(semua.length, 1, 'main { overflow-x: clip } muncul ' + semua.length + ' kali');
    assert.ok(!/main\s*\{[^}]*overflow-x:\s*clip/.test(blok.replace(mouse[0], '')), 'main dipotong di luar blok penunjuk mouse');
  });
});

describe('v9.6: token --v96-*', () => {
  const definisi = sel => { const i = tanpaKomentar.indexOf(sel); assert.ok(i >= 0, 'blok ' + sel); const j = tanpaKomentar.indexOf('}', i); return new Set([...tanpaKomentar.slice(i, j).matchAll(/(--v96-[a-z0-9-]+)\s*:/g)].map(m => m[1])); };
  it('tiap token yang dipakai didefinisikan di :root', () => {
    const dasar = new Set([...tanpaKomentar.matchAll(/(--v96-[a-z0-9-]+)\s*:/g)].map(m => m[1]));
    const pakai = new Set([...tanpaKomentar.matchAll(/var\((--v96-[a-z0-9-]+)/g)].map(m => m[1]));
    for (const t of pakai) assert.ok(dasar.has(t), t + ' dipakai tetapi tidak didefinisikan');
    assert.ok(definisi(':root {').size >= 20);
  });
  it('dua pemilih tema gelap mendefinisikan himpunan token yang sama', () => {
    const a = definisi(':root:not([data-theme="light"])'), b = definisi(':root[data-theme="dark"]');
    assert.ok(a.size >= 8); assert.deepEqual([...a].sort(), [...b].sort());
  });
});

describe('v9.6: kepala halaman berpita', () => {
  it('kelas .kop-pita hanya dipasang lewat opsi pita di UKP.c.kop dan kopHalaman', () => {
    assert.match(baca('js/core.js'), /'page-head' \+ \(o\.pita \? ' kop-pita' : ''\)/);
    assert.match(baca('js/views-home.js'), /'page-head' \+ \(o\.pita \? ' kop-pita' : ''\)/);
    const lain = fs.readdirSync(path.join(ROOT, 'js')).filter(f => /\.js$/.test(f) && !['core.js', 'views-home.js'].includes(f));
    for (const f of lain) assert.ok(!/kop-pita/.test(baca('js/' + f)), 'js/' + f + ' menulis kelas kop-pita sendiri');
  });
  it('dua belas pemanggil atau lebih memakai pita: true; layar ujian tim tidak; di room hanya pembantu kop halaman lobi', () => {
    let n = 0; for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter(f => /^views-.*\.js$/.test(f))) n += (baca('js/' + f).match(/pita: true/g) || []).length;
    assert.ok(n >= 11, 'pemanggil berpita: ' + n);
    assert.ok(!/pita: true/.test(baca('js/views-ujian-tim.js')), 'js/views-ujian-tim.js');
    // v9.6.5: halaman room di luar sesi (Room tim, lobi, gabung, tautan rusak, room ditutup) dibuat lewat satu pembantu kop;
    // layar soal anggota dan papan pemimpin tidak memakai pembantu itu, jadi tidak pernah berpita
    const room = baca('js/views-ruang.js'); const baris = room.split('\n').filter(b => /pita: true/.test(b));
    assert.ok(baris.length <= 1, 'pita: true di views-ruang.js hanya di satu tempat');
    for (const b of baris) assert.match(b, /const kop = \(judul, o\) =>/, 'pita room hanya di pembantu kop lobi');
  });
  it('pita selebar layar tidak berlaku di mode ujian dan fokus, dan hanya untuk layar (bukan cetak)', () => {
    const i = tanpaKomentar.indexOf('@supports (overflow-x: clip)'); const s = tanpaKomentar.slice(i, i + 600);
    assert.match(s, /@media screen/); assert.match(s, /body:not\(\[data-mode="ujian"\]\):not\(\[data-mode="fokus"\]\) \.page-head\.kop-pita::before/);
    assert.match(tanpaKomentar, /@media \(forced-colors: active\)[^{]*\{[\s\S]*?\.page-head\.kop-pita::before[\s\S]*?content: none/);
  });
});

describe('v9.6: keadaan yang harus terlihat', () => {
  it('tanda centang pilihan berbentuk daftar memakai warna teks di atas isian dan menang atas aturan lama', () => {
    const lama = css.slice(0, awal); assert.match(lama, /\.seg\.bersub button:is\(\[aria-pressed="true"\], \[aria-checked="true"\]\)::before/);
    assert.match(tanpaKomentar, /main \.seg\.bersub button\[aria-pressed="true"\]::before[^{]*\{\s*background: var\(--primary-ink\)/);
    assert.match(tanpaKomentar, /main \.seg\.seg-bank button\[aria-pressed="true"\]::before/);
  });
  it('opsi terpilih, kunci, dan salah punya garis 2 px (garis + garis dalam) tanpa bergantung pada :has', () => {
    assert.match(tanpaKomentar, /\[data-dipilih\][^{]*\{[^}]*box-shadow: inset 0 0 0 1px var\(--primary\)/);
    assert.match(tanpaKomentar, /label\[data-hasil="salah"\]\s*\{[^}]*box-shadow: inset 0 0 0 1px var\(--attn\)/);
  });
  it('kelas kait yang dipakai gaya memang dipasang kode', () => {
    assert.match(baca('js/soal.js'), /umpan-salah-opsi/); assert.match(baca('js/soal.js'), /umpan-jebakan/);
    assert.match(baca('js/views-simulasi.js'), /kartu-langkah/); assert.match(baca('js/views-belajar.js'), /daftar-kartu/);
    for (const k of ['umpan-salah-opsi', 'umpan-jebakan', 'kartu-langkah', 'daftar-kartu']) assert.ok(tanpaKomentar.includes('.' + k), 'gaya untuk .' + k);
  });
});
