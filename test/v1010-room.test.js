/* v10.1 Mode mabar, jalur room: lobi dan HP anggota (js/views-ruang.js, sub-bagian CSS "v10 room").
   Uji sumber dan fungsi kecil yang dipotong dari sumber (pola test/v941.test.js). Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-ruang.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
const fungsi = nama => { const i = src.indexOf('function ' + nama + '('); assert.ok(i >= 0, nama); const j = src.indexOf('\n    }\n', i); return src.slice(i, j + 6); };
const UKP = muatInti(['core.js', 'learn.js', 'views-ruang.js']);
const M = UKP.ruangUI._murni;

describe('v10.1 room: protokol tidak berubah', () => {
  it('pemanggil API room di layar sama jumlahnya dengan v10.0 (hanya rupa yang berubah)', () => {
    const n = s => src.split(s).length - 1;
    assert.equal(n('r.kirimJawaban('), 2); assert.equal(n('r.kirimSiap('), 1); assert.equal(n('r.kirimPaham('), 1); assert.equal(n('r.bukaLobi('), 2);
    assert.match(fungsi('bagianMenjawab'), /if \(hurufBaru && !cur\.ubah\) kirim\(a, sid, \{ o: cur\.o, k: null \}\);/);
    assert.match(fungsi('bagianMenjawab'), /const v = kirim\(a, sid, \{ o: cur\.o, k: cur\.o === '-' \? null : cur\.k \}\);/);
  });
});

describe('v10.1 room: HP anggota', () => {
  it('kop sesi Latih hanya untuk latihan bersama; ujian tim tetap kop lama', () => {
    assert.match(fungsi('kepalaSesi'), /if \(!ujian\) return kopSesiAnggota\(st, a, opsi, keluar\);/);
    const k = fungsi('kopSesiAnggota');
    assert.match(k, /sesi: true/); assert.match(k, /labelKeluar, ikon: 'keluar', onclick: keluar/, 'Keluar dari latihan tetap bisa dicapai lewat menu');
    assert.match(k, /'Sisa waktu soal '/); assert.match(k, /'Sisa waktu bahas '/); assert.doesNotMatch(k, /aria-label': '(Sisa|Waktu)/);
  });
  it('opsi utuh adalah tombol .huruf-besar[data-huruf] tanpa aria-label (teks opsi ikut terbaca); keyakinan .yakin-room di bar bawah', () => {
    const b = fungsi('bagianMenjawab');
    assert.match(b, /class: 'huruf-besar opsi-v10r', 'data-huruf': x, 'aria-pressed'/);
    assert.doesNotMatch(b.slice(b.indexOf('const tHuruf'), b.indexOf('const tYakin')), /aria-label/);
    assert.match(b, /class: 'yakin-room', 'data-yakin': v/);
    assert.match(b, /'Tidak tahu'/); assert.match(b, /'aria-label': 'Tidak tahu'/, 'jawab cepat "?" berlabel Tidak tahu');
    assert.match(src, /'Langkah 1 dari 2: ketuk huruf jawaban\.'/); assert.match(src, /'Langkah 2 dari 2: seberapa yakin dengan '/);
  });
  it('Ubah jawaban kembali ke langkah 1 dengan huruf lama terpilih; jawaban lama berlaku sampai yang baru lengkap', () => {
    const b = fungsi('bagianMenjawab');
    assert.match(b, /ubah: true, o: null, k: null, lama:/);
    assert.match(b, /' tetap berlaku sampai jawaban baru terkirim\.'/);
    assert.match(src, /'Ubah jawaban'/);
  });
  it('deret tim di layar terkirim tidak memakai huruf jawaban orang lain', () => {
    const d = fungsi('deretTim');
    assert.doesNotMatch(d, /HURUF|\.j\[sid\] \+|String\(d\.j/);
    assert.match(d, /'sudah menjawab'/); assert.match(d, /'membaca soal'/); assert.match(d, /'belum masuk'/);
  });
  it('kunci dibuka: vonis sama dengan Latih, isi kunci sebagai baris sendiri, sebaran tanpa nama', () => {
    const b = fungsi('bagianHasil');
    assert.match(b, /'Benar\.'/); assert.match(b, /'Salah\. Kuncinya ' \+ kunci \+ '\.'/);
    assert.match(b, /'Kunci ' \+ kunci \+ ':'/); assert.match(b, /'Tim: ' \+ kel\.benar \+ ' dari ' \+ kel\.dijawab \+ ' yang menjawab benar\.'/);
    assert.match(b, /UKP\.pisahMudah\(/, 'Cara ingat satu sumber dengan Latih');
    assert.doesNotMatch(b, /RE_CARA|Cara ingat:/);
  });
});

describe('v10.1 room: lobi', () => {
  const ambil = nama => new Function('teksSiap', fungsi(nama) + '; return ' + nama + ';')(M.teksSiap);
  it('kalimat hitungan berangka termasuk siap; pemandu disebut', () => {
    const k = ambil('kalimatLobi');
    assert.equal(k({ hadir: 8, total: 10, siap: ['Mita', 'Nora'], belum: [] }, true), '8 dari 10 sudah di room, 2 siap. Anda Pemandu.');
    assert.equal(k({ hadir: 3, total: 4, siap: [], belum: [] }, false), '3 dari 4 sudah di room.');
    assert.equal(k({ hadir: 3, total: 4, siap: ['Mita'], belum: [] }, false), '3 dari 4 sudah di room, 1 siap.');
  });
  it('catatan siap dan belum masuk', () => {
    const c = ambil('catatanLobi');
    assert.equal(c({ siap: ['Mita', 'Nora'], belum: ['Sari', 'Dodi'] }, true), '2 orang sudah siap: Mita, Nora. Sari dan Dodi belum masuk, mereka bisa menyusul.');
    assert.equal(c({ siap: [], belum: ['Dodi'] }, false), 'Dodi belum masuk, ia bisa menyusul.');
  });
  it('lobi tidak menampilkan kode room; Ujian tim, Undang anggota, Bank soal, Riwayat room tetap ada', () => {
    const l = fungsi('layarLobi');
    assert.doesNotMatch(l, /\.kode\b|kodeRoom/);
    for (const k of ['room-ujian-tim', 'room-undang', 'room-bank', 'daftarRiwayat()', 'kartuRekap(', 'barisInginIkut()', 'room-siap', 'room-utama', 'UI.menu()', 'statusRoom()']) assert.ok(l.includes(k), k);
    assert.match(l, /'Anda siap\.'/);
  });
});

describe('v10.1 room: CSS dan aturan baris', () => {
  const i = css.indexOf('/* v10 room: mulai */'), j = css.indexOf('/* v10 room: selesai */');
  const isi = css.slice(i, j);
  it('sub-bagian room hanya memakai kait room dan tanpa warna literal', () => {
    assert.ok(i > 0 && j > i);
    assert.doesNotMatch(isi.replace(/\/\*[\s\S]*?\*\//g, ''), /#[0-9a-fA-F]{3,8}\b|rgba?\(/);
    const pemilih = isi.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@media[^{]*\{/g, '').match(/[^{}]+(?=\{)/g) || [];
    const kait = /kop-sesi-room|room-anggota-v10|bar-langkah-room|kendali-bawah-room|baris-cepat|terkirim-v10|deret-|avatar-v10r|lipat-v10r|hasil-v10|tim-v10|peran-|jelas-room-v10|lobi-|anggota-lobi-v10|waktu-fase-v10|opsi-v10r|halaman-room|v10-tumbuh-room|from|to/;
    for (const p of pemilih) assert.match(p, kait, p.trim());
  });
  it('baris baru tanpa tanda pisah panjang, panah, atau jalur folder sementara', () => {
    const baris = src.split('\n').filter(x => /v10\.1|kopSesiAnggota|deretTim|lobi-v10|bar-langkah-room/.test(x)).concat(isi.split('\n'));
    for (const x of baris) assert.doesNotMatch(x, /—|→|←|scratchpad|\/tmp\//, x);
  });
});
