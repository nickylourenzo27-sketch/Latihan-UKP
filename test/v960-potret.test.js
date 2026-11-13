/* Uji v9.6.0: alat potret layar (tools/potret-layar.js) dan workflow WebKit-nya.
   - Gambar dipotong menjadi catatan check run (paling banyak 60.000 huruf base64 per catatan) dan disusun kembali tanpa cacat.
   - Daftar layar: tiap nama punya langkah, tag unik, ada HP terang, HP gelap, dan laptop.
   - Workflow: versi image Playwright sama dengan versi paket npm, izin checks: write, dan tidak memasang paket sistem.
   Tanpa peramban. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ROOT = path.join(__dirname, '..');
const alat = require(path.join(ROOT, 'tools', 'potret-layar.js'));

describe('v9.6.0: potongan gambar untuk check run', () => {
  const gambar = [
    { nama: 'beranda-hp-1', buf: crypto.randomBytes(130001) },
    { nama: 'latih-pembahasan-hp-gelap-2', buf: crypto.randomBytes(7) },
    { nama: 'bersama-kunci-laptop', buf: crypto.randomBytes(45000) },
  ];
  const catatan = alat.potongGambar(gambar);
  it('tiap catatan paling banyak POTONG huruf, di bawah batas 64 KB, dan berjudul "nama [i/n]"', () => {
    assert.ok(alat.POTONG <= 64000);
    for (const c of catatan) {
      assert.ok(c.raw_details.length > 0 && c.raw_details.length <= alat.POTONG, c.title);
      assert.match(c.title, /^.+ \[\d+\/\d+\]$/);
      assert.equal(c.annotation_level, 'notice'); assert.equal(c.start_line, 1); assert.equal(c.end_line, 1);
      assert.ok(fs.existsSync(path.join(ROOT, c.path)), 'path catatan menunjuk berkas yang ada: ' + c.path);
    }
    assert.equal(catatan.filter(c => c.title.startsWith('beranda-hp-1 ')).length, 3);
  });
  it('disusun kembali persis sama, juga bila urutan catatan terbalik', () => {
    for (const urut of [catatan, catatan.slice().reverse()]) {
      const hasil = alat.susun(urut); assert.equal(hasil.length, gambar.length);
      for (const g of gambar) { const h = hasil.find(x => x.nama === g.nama); assert.ok(h && h.lengkap, g.nama); assert.ok(h.buf.equals(g.buf), g.nama + ' sama bita demi bita'); }
    }
  });
  it('potongan yang hilang membuat gambar itu ditandai tidak lengkap, yang lain tetap utuh', () => {
    for (const buang of [0, 1, 2]) {
      const hasil = alat.susun(catatan.filter((_, i) => i !== buang));
      assert.equal(hasil.find(x => x.nama === 'beranda-hp-1').lengkap, false, 'potongan ' + (buang + 1) + ' hilang');
      assert.equal(hasil.find(x => x.nama === 'bersama-kunci-laptop').lengkap, true);
    }
  });
  it('catatan yang bukan potongan gambar diabaikan', () => {
    const hasil = alat.susun(catatan.concat([{ title: 'Potret layar webkit', raw_details: 'x' }, { title: null }, {}]));
    assert.equal(hasil.length, gambar.length);
  });
});

describe('v9.6.0: daftar layar yang dipotret', () => {
  it('tiap layar punya langkah dan tag unik', () => {
    const tag = alat.LAYAR.map(l => l.tag); assert.equal(new Set(tag).size, tag.length);
    for (const l of alat.LAYAR) { assert.ok(alat.langkah.includes(l.nama), 'langkah untuk ' + l.nama); assert.ok(l.n >= 1 && l.n <= 3); assert.ok(['hp', 'laptop'].includes(l.alat)); assert.ok(['light', 'dark'].includes(l.tema)); }
  });
  it('mencakup layar soal dan pembahasan di HP terang dan gelap, serta papan bersama di laptop', () => {
    const ada = t => alat.LAYAR.some(l => l.tag === t);
    for (const t of ['beranda-hp', 'latih-soal-hp', 'latih-pembahasan-hp', 'latih-pembahasan-hp-gelap', 'simulasi-atur-hp', 'simulasi-jalan-hp', 'simulasi-hasil-hp', 'bersama-papan-laptop', 'bersama-kunci-laptop', 'bersama-kunci-laptop-gelap']) assert.ok(ada(t), t);
  });
  it('layar bersama memakai nama contoh, bukan nama anggota tim', () => {
    const src = fs.readFileSync(path.join(ROOT, 'tools', 'potret-layar.js'), 'utf8');
    assert.match(src, /const PESERTA = \['Nicky', 'Mita', 'Nora'\];/);
    assert.match(src, /serviceWorkers: 'block'/);
  });
});

describe('v9.6.0: workflow potret WebKit', () => {
  const y = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'potret-webkit.yml'), 'utf8');
  const tanpaKomentar = y.split('\n').filter(b => !/^\s*#/.test(b)).join('\n');
  it('versi image Playwright sama dengan versi paket npm, dan sama dengan workflow room', () => {
    const vImage = (y.match(/image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-noble/) || [])[1];
    const vNpm = (tanpaKomentar.match(/playwright@(\d+\.\d+\.\d+)/) || [])[1];
    assert.ok(vImage, 'image Playwright bernomor versi'); assert.equal(vNpm, vImage);
    const room = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'cek-jalur-room.yml'), 'utf8');
    assert.equal((room.match(/image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-noble/) || [])[1], vImage, 'dua workflow memakai image yang sama');
    assert.ok(!/install --with-deps/.test(tanpaKomentar));
  });
  it('izin sesempit mungkin: contents read dan checks write saja', () => {
    const izin = tanpaKomentar.slice(tanpaKomentar.indexOf('permissions:'), tanpaKomentar.indexOf('concurrency:'));
    assert.deepEqual(izin.split('\n').slice(1).map(b => b.trim()).filter(Boolean).sort(), ['checks: write', 'contents: read']);
  });
  it('menjalankan alat potret dengan WebKit, mengirim gambar, dan tidak menggagalkan rilis', () => {
    assert.match(tanpaKomentar, /BROWSER: webkit/); assert.match(tanpaKomentar, /KIRIM: '1'/);
    assert.match(tanpaKomentar, /node tools\/potret-layar\.js potret \. /);
    assert.match(tanpaKomentar, /continue-on-error: true/);
    assert.match(tanpaKomentar, /- 'css\/\*\*'/); assert.match(tanpaKomentar, /- 'js\/\*\*'/);
    assert.ok(alat.NAMA_CEK.startsWith('Potret layar'));
  });
});
