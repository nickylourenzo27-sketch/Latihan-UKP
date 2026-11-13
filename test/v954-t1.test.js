/* Uji v9.5.4 pemeriksa 1 (C1): keterangan selisih di halaman hasil simulasi hanya tampil bila waktu terpakai di kartu Skor
   melebihi jumlah waktu di soal paling sedikit 1 menit. Ujian tim room yang diberi tambahan waktu oleh pemandu (waktu di soal
   lebih besar dari menit ujian, peserta tidak pernah keluar) tidak boleh menampilkan kalimat "Waktu saat Anda keluar ...".
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sim = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-simulasi.js'), 'utf8');
const fSyarat = sim.match(/\n\s*(const waktuKel = [^\n]*; const ketWaktu = [^\n]*;)\n/);
// eslint-disable-next-line no-new-func
const syarat = fSyarat && new Function('r', 'durasi', 'rows', fSyarat[1] + ' return { waktuKel, ketWaktu };');
const baris = (...menit) => menit.map(m => ({ pakai: m }));

describe('v9.5.4 C1 (pemeriksa 1): keterangan selisih satu arah', () => {
  it('syarat ditemukan di sumber', () => assert.ok(syarat, 'baris waktuKel/ketWaktu tidak ditemukan'));
  it('ujian tim, pemandu menambah 5 menit, peserta tidak keluar: tanpa keterangan', () => {
    // menit 20, jam dinding 25 mnt (kartu Skor: 20 dari 20), waktu di soal 25 mnt
    const x = syarat({ menit: 20, detikKel: { A3: 900, A4: 600 }, tim: { ujianId: 'u', judul: 'x', nama: 'Nicky' } }, 25, baris(15, 10));
    assert.deepEqual(x, { waktuKel: true, ketWaktu: false });
  });
  it('ujian tim, pemandu menambah waktu dan peserta keluar 3 menit: terpakai dibatasi 20, di soal 22, tanpa keterangan', () => {
    assert.equal(syarat({ menit: 20, detikKel: {} }, 25, baris(12, 10)).ketWaktu, false);
  });
  it('ujian tim tanpa tambahan waktu, ditinggal keluar: keterangan tampil', () => {
    assert.equal(syarat({ menit: 20, detikKel: {}, tim: {} }, 18, baris(6, 4)).ketWaktu, true);
  });
  it('dikirim otomatis saat waktu habis, di layar terus: tanpa keterangan', () => {
    assert.equal(syarat({ menit: 20, detikKel: {} }, 20, baris(12, 7.95)).ketWaktu, false);
  });
  it('selisih tepat 1 menit ke arah terpakai lebih besar: tampil; di bawah 1: tidak', () => {
    assert.equal(syarat({ menit: 20, detikKel: {} }, 11, baris(6, 4)).ketWaktu, true);
    assert.equal(syarat({ menit: 20, detikKel: {} }, 11, baris(6, 4.01)).ketWaktu, false);
  });
});
