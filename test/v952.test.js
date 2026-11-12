/* Uji v9.5.2: ringkasan waktu di halaman Simulasi. Ujian tim selalu berwaktu, jadi ringkasan tidak boleh menulis "tanpa batas waktu"
   saat sakelar "Kerjakan sebagai tim" menyala; pada simulasi sendiri isian Menit disembunyikan selama "Tanpa batas waktu" menyala.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sumber = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-simulasi.js'), 'utf8');

describe('v9.5.2: ringkasan waktu Simulasi konsisten dengan ujian tim', () => {
  it('"tanpa batas waktu" hanya dianggap aktif di luar ujian tim', () => {
    assert.ok(sumber.includes("const tanpaAktif = () => !!cfg.tanpaWaktu && !(cfg.tim && UT);"));
  });
  it('ringkasan (panel dan meta HP) memakai tanpaAktif(), tidak lagi cfg.tanpaWaktu mentah', () => {
    assert.ok(sumber.includes("fakta('Waktu', tanpaAktif() ? 'tanpa batas waktu' : m + ' menit')"));
    assert.ok(sumber.includes("metaHP.textContent = (tanpaAktif() ? 'tanpa batas waktu' : m + ' mnt')"));
    assert.ok(!sumber.includes("fakta('Waktu', cfg.tanpaWaktu ?"), 'ringkasan masih membaca cfg.tanpaWaktu langsung');
  });
  it('ujian tim tetap disusun berwaktu', () => {
    assert.ok(/async function mulaiTim\(\) \{[\s\S]*?const run = runDariCfg\(\); run\.tanpaWaktu = false;/.test(sumber));
  });
  it('isian Menit (kustom dan try out) disembunyikan saat tanpa batas waktu aktif, dan diperbarui saat sakelar berubah', () => {
    assert.ok(sumber.includes("['#sim-m', '#sim-m-to'].forEach(sel =>"));
    assert.ok(/cfg\.tanpaWaktu = e\.target\.checked; terapkanTanpa\(\); gambarRingkas\(\);/.test(sumber));
    assert.ok(/terapkanTanpa\(\); gambarTim\(\); gambarRingkas\(\);/.test(sumber));
  });
  it('kartu Ujian tim memberi catatan bila pilihan tanpa batas waktu tidak dipakai', () => {
    assert.ok(sumber.includes('Ujian tim selalu memakai waktu. Pilihan Tanpa batas waktu hanya berlaku untuk simulasi sendiri.'));
  });
});
