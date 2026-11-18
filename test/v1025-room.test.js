'use strict';
// v10.2.5: tombol Tambahkan di lobi room. Empat keadaan nyata membuat nama tidak masuk atau hilang lagi; tiap penjaga diuji di sini.
const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const baca = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
const ui = baca('js/views-ruang.js'); const ruang = baca('js/ruang.js'); const core = baca('js/core.js');

describe('v10.2.5: Tambahkan di lobi room', () => {
  it('perangkat yang tidak memimpin tidak menampilkan baris Ingin ikut', () => {
    assert.match(ui, /function barisInginIkut\(\) \{\s*const iT = info\(\); if \(!iT \|\| iT\.peran !== 'tuan'\) return null;/);
    assert.match(ui, /if \(!i \|\| i\.peran !== 'tuan'\) \{ if \(calonTamu\.size\) \{ calonTamu\.clear\(\); return true; \} return; \}/);
  });
  it('Tambahkan dari perangkat yang tidak memimpin memberi pesan, tidak diam', () => {
    assert.match(ui, /if \(i && i\.peran !== 'tuan'\) \{ calonTamu\.clear\(\); beriTahu\('tamu'\); toast\(PESAN_BUKAN_PEMIMPIN/);
    assert.match(ui, /PESAN_BUKAN_PEMIMPIN = 'Perangkat ini tidak sedang memimpin room/);
  });
  it('turun peran diberitahukan di layar, hanya di perangkat yang baru saja turun', () => {
    assert.match(ui, /if \(ev && ev\.peran === 'anggota'\) baruTurun = true;/);
    assert.match(ui, /const turun = baruTurun && samaNama\(lama\.tuan, i\.nama\) && i\.peran !== 'tuan'; baruTurun = false;/);
    assert.match(ui, /aksi: boleh \? \{ label: 'Pimpin dari sini', onclick: ambilAlih \} : null/);
    assert.match(ui, /Belum ada di daftar pemimpin itu: /);
  });
  it('hanya nama di daftar tim yang ditawari dan boleh memimpin', () => {
    assert.match(ui, /!tuan && sayaDiDaftar\(\) && \(pernahTuan\(\) \|\| pemimpinHilang\(\)\)/);
    assert.match(ui, /Nama Anda belum ada di daftar tim\. Minta ' \+ tuan \+ ' menambahkan dulu\./);
    assert.match(ruang, /api\.ambilAlih = function \(\) \{[\s\S]{0,400}!r\.state\.room\.peserta\.some\(p => kunciNama\(p\) === kunciNama\(r\.nama\)\)\) return false;/);
  });
  it('pemimpin tidak turun oleh state atas namanya sendiri (state halaman sebelumnya tetap diambil)', () => {
    assert.match(ruang, /if \(r\.peran === 'tuan' && kunciNama\(v\.tuan\) !== kunciNama\(r\.nama\)\) turunJadiAnggota\(\);/);
  });
  it('tanda versi tidak ditulis ulang tepat saat masa calon habis', () => {
    const blok = ruang.slice(ruang.indexOf('function akhiriCalon'), ruang.indexOf('function pulihkanDi'));
    assert.match(blok, /setTimeout\(\(\) => \{[\s\S]*ubahState\(\(\) => \{\}, \{ tanpaJam: true \}\); \}, api\.KONFIG\.tungguVersiMs\)/);
    assert.match(ruang, /s\.urut = o && o\.tanpaJam \? r\.state\.urut \+ 1 : Math\.max\(r\.state\.urut \+ 1, t\)/);
    assert.ok(!/\n\s*if \(r\.state && versiKini\(\) && r\.state\.versiApp !== versiKini\(\)\) ubahState/.test(blok));
    assert.match(ruang, /tungguVersiMs: 30000/);
  });
  it('Simpan di Ubah room dihitung terhadap daftar terbaru', () => {
    assert.match(ui, /const baru = isian\.concat\(kiniPes\.filter\(p => !ada\(isian, p\) && !ada\(awal, p\)\)\)\.slice\(0, 12\);/);
  });
  it('ketukan di latar dialog diteruskan ke tombol bertanda data-tembus', () => {
    assert.match(ui, /class: 'btn btn-sm room-tambah-tamu', 'data-tembus': '1'/);
    assert.ok(!/room-abaikan-tamu', 'data-tembus'/.test(ui), 'Abaikan tidak diteruskan');
    assert.match(core, /function teruskan\(e\) \{ if \(!opts\.tembus\) return;[^\n]*t\.closest\('\[data-tembus\]'\)\) t\.click\(\)/);
    assert.match(ui, /'Room siap' : 'Undang anggota', kelas: 'dlg-room', tembus: true,/);
    assert.ok(!/UKP\.konfirmasi = [\s\S]{0,1500}tembus: true/.test(core), 'dialog konfirmasi tidak meneruskan ketukan');
  });
  it('Tambahkan saat tidak tersambung berkata apa adanya, dan nama berikutnya langsung ditawarkan', () => {
    assert.match(ui, /stt\.tersambung === false\) toast\(nama \+ ' ditambahkan di perangkat ini\./);
    assert.match(ui, /calonTamu\.delete\(kunciNama\(nama\)\); periksaTamu\(\); beriTahu\('tamu'\); return true;/);
  });
});
