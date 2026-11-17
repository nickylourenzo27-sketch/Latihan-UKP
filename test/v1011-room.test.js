/* v10.1.1 tinjauan rupa: HP anggota, lobi, Hasil latihan, dan Kemajuan. Uji sumber (pola test/v1010-room.test.js). Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');

const baca = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
const ruang = baca('js/views-ruang.js'); const alat = baca('js/views-alat.js'); const css = baca('css/app.css');
const bagian = nama => { const a = css.indexOf('/* v10 ' + nama + ': mulai */'); const b = css.indexOf('/* v10 ' + nama + ': selesai */'); assert.ok(a >= 0 && b > a, nama); return css.slice(a, b); };

describe('v10.1.1 room: HP anggota', () => {
  it('pindah ke terkirim atau kunci di soal yang sama mulai dari atas (vonis tidak tertinggal di luar layar 320 px)', () => {
    assert.match(ruang, /lamaGulir\.split\('\|'\)\[0\] === 'latihanAnggota' && lamaGulir !== k && \/\^\(terkirim\|hasil\)\$\/\.test\(k\.split\('\|'\)\[4\] \|\| ''\)\) \{ try \{ root\.scrollTo\(0, 0\); \}/);
  });
  it('bilah tim dibanding semua yang memilih huruf, bukan yang terbanyak', () => {
    assert.match(ruang, /const maks = Math\.max\(1, HURUF\.reduce\(\(t, x\) => t \+ \(Number\(kel\.per\[x\]\) \|\| 0\), 0\)\);/);
    assert.doesNotMatch(ruang, /Math\.max\(1, \.\.\.HURUF\.map\(x => kel\.per\[x\]\)\)/);
  });
  it('vonis netral (Tidak tahu, tidak menjawab, telat) tanpa ikon silang; skor tim di bawah vonis saat kunci dibuka', () => {
    assert.match(ruang, /benar \? UKP\.icon\('check', null, true\) : oS && oS !== '-' && !telat \? UKP\.icon\('x', null, true\) : null, vonis\)/);
    assert.match(ruang, /if \(kopTim && !\(soal && sub === 'hasil'\)\) isi\.appendChild\(kopTim\);/);
    assert.match(ruang, /bh\[0\]\.after\(kopTim\)/);
  });
  it('jawab cepat di luar urutan Tab; Tidak tahu di bar tetap bisa difokus', () => {
    assert.equal(ruang.split("tabindex: '-1',").length - 1 >= 2, true);
    const r = bagian('room');
    assert.match(r, /\.kendali-bawah-room\[data-cepat\] \.baris-tidak-tahu > \.tidak-tahu:focus \{ position: static;/);
    assert.match(r, /@media \(max-width: 359px\) \{\n  \.deret-tim-v10 \{ grid-template-columns: minmax\(0, 1fr\); \}/);
    assert.match(r, /\.lobi-room\.lobi-v10 \{ width: min\(1120px/);
  });
});

describe('v10.1.1 hasil: Kemajuan tanpa isi ganda', () => {
  it('dasbor lama diberi kait; baris rangkaian dan Posisi penguasaan (bila sudah ada jawaban) disembunyikan dari views-alat.js', () => {
    assert.match(alat, /lama\.classList\.add\('vk-dasbor-lama'\)/);
    assert.match(alat, /querySelectorAll\('\.baris-ringkas'\)/);
    assert.match(alat, /if \(adaJawab\) lama\.querySelectorAll\('\.kartu-posisi'\)/);
    assert.match(alat, /'soal dijawab'/);
    const h = bagian('hasil');
    assert.match(h, /\.vk-dasbor-lama \[data-v10-ganda\]\[hidden\] \{ display: none; \}/);
    assert.match(h, /-webkit-line-clamp: 3;/);
    assert.match(h, /\.halaman-kemajuan \.baris-bank \.tautan \{[^}]*min-height: var\(--v10-sasaran\)/);
  });
  it('baris tambahan tanpa warna literal dan tanpa fitur terlarang', () => {
    for (const nama of ['room', 'hasil']) {
      const b = bagian(nama); const i = b.indexOf('v10.1.1'); assert.ok(i > 0, nama);
      const tambah = b.slice(i);
      assert.doesNotMatch(tambah, /#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|color-mix|:has\(|@container|@layer|dvh/);
      assert.doesNotMatch(tambah, /[\u2014\u2192\u2190]/);
    }
  });
});
