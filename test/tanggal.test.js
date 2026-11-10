/* Uji pengurai tanggal dan jam berformat Indonesia (DESAIN-V7 K-12): UKP.util.uraiTanggal, uraiJam, fmtTanggal, fmtJam.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const U = muatInti(['core.js']).util;

describe('uraiTanggal', () => {
  it('menerima hari/bulan/tahun dengan garis miring, strip, titik, dan spasi', () => {
    assert.equal(U.uraiTanggal('15/12/2026'), '2026-12-15');
    assert.equal(U.uraiTanggal('15-12-2026'), '2026-12-15');
    assert.equal(U.uraiTanggal('15.12.2026'), '2026-12-15');
    assert.equal(U.uraiTanggal('15 12 2026'), '2026-12-15');
    assert.equal(U.uraiTanggal(' 5/1/2027 '), '2027-01-05');
  });
  it('menerima angka rapat 8 dan 6 digit serta tahun dua digit', () => {
    assert.equal(U.uraiTanggal('15122026'), '2026-12-15');
    assert.equal(U.uraiTanggal('151226'), '2026-12-15');
    assert.equal(U.uraiTanggal('15/12/26'), '2026-12-15');
    assert.equal(U.uraiTanggal('01-03-27'), '2027-03-01');
  });
  it('menerima ISO apa adanya (untuk setNilai)', () => {
    assert.equal(U.uraiTanggal('2026-12-15'), '2026-12-15');
  });
  it('menolak tanggal yang tidak ada dan masukan rusak', () => {
    assert.equal(U.uraiTanggal('31/02/2026'), null);
    assert.equal(U.uraiTanggal('29/02/2026'), null);
    assert.equal(U.uraiTanggal('29/02/2028'), '2028-02-29');
    assert.equal(U.uraiTanggal('00/12/2026'), null);
    assert.equal(U.uraiTanggal('15/13/2026'), null);
    assert.equal(U.uraiTanggal('12/15/2026'), null); // urutan bulan/hari AS tidak diterima
    assert.equal(U.uraiTanggal('besok'), null);
    assert.equal(U.uraiTanggal('1512'), null);
    assert.equal(U.uraiTanggal(''), null);
    assert.equal(U.uraiTanggal(null), null);
    assert.equal(U.uraiTanggal(undefined), null);
  });
});

describe('uraiJam', () => {
  it('menerima 1930, 19.30, 19:30, 930, dan jam bulat', () => {
    assert.equal(U.uraiJam('1930'), '19:30');
    assert.equal(U.uraiJam('19.30'), '19:30');
    assert.equal(U.uraiJam('19:30'), '19:30');
    assert.equal(U.uraiJam('930'), '09:30');
    assert.equal(U.uraiJam('7'), '07:00');
    assert.equal(U.uraiJam('0:05'), '00:05');
  });
  it('menolak jam di luar 00.00–23.59 dan masukan rusak', () => {
    assert.equal(U.uraiJam('24.00'), null);
    assert.equal(U.uraiJam('1960'), null);
    assert.equal(U.uraiJam('7 PM'), null);
    assert.equal(U.uraiJam(''), null);
    assert.equal(U.uraiJam(null), null);
  });
});

describe('format tampilan', () => {
  it('fmtTanggal menulis hari/bulan/tahun dan fmtJam memakai titik', () => {
    assert.equal(U.fmtTanggal('2026-12-15'), '15/12/2026');
    assert.equal(U.fmtTanggal(''), '');
    assert.equal(U.fmtTanggal(null), '');
    assert.equal(U.fmtJam('19:30'), '19.30');
    assert.equal(U.fmtJam('7:05'), '07.05');
    assert.equal(U.fmtJam(undefined), '');
  });
  it('urai lalu format kembali ke bentuk yang sama', () => {
    for (const t of ['01/01/2026', '31/12/2030', '29/02/2028']) assert.equal(U.fmtTanggal(U.uraiTanggal(t)), t);
    for (const j of ['00.00', '07.30', '23.59']) assert.equal(U.fmtJam(U.uraiJam(j)), j);
  });
});
