/* Ringkasan latihan (js/views-belajar.js) dan jawab langsung (js/soal.js) — jalankan: node --test test/ */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'views-belajar.js']);
const k = o => UKP.kalimatKesalahanLatih(o);

test('ringkasan: semua kesalahan berupa "Tidak tahu" tidak ditulis "Tidak ada kesalahan"', () => {
  const r = k({ nKeliru: 5, nBelumTahu: 5, top: null, adaJawaban: true });
  assert.equal(r.teks, '5 soal belum tahu.');
  assert.equal(r.muted, false);
  assert.doesNotMatch(r.teks, /Tidak ada kesalahan/);
});

test('ringkasan: "Tidak ada kesalahan" hanya bila tidak ada soal keliru', () => {
  const r = k({ nKeliru: 0, nBelumTahu: 0, top: null, adaJawaban: true });
  assert.equal(r.teks, 'Tidak ada kesalahan pada latihan ini.'); assert.equal(r.muted, true);
  assert.equal(k({ nKeliru: 0, nBelumTahu: 0, top: null, adaJawaban: false }), null);
});

test('ringkasan: topik terbanyak disebut, ditambah jumlah belum tahu', () => {
  assert.equal(k({ nKeliru: 3, nBelumTahu: 0, top: ['A3-1', 3], judul: 'PPh 21', adaJawaban: true }).teks, '3 kesalahan di PPh 21.');
  assert.equal(k({ nKeliru: 5, nBelumTahu: 2, top: ['A3-1', 3], judul: 'PPh 21', adaJawaban: true }).teks, '3 kesalahan di PPh 21. 2 soal belum tahu.');
  assert.equal(k({ nKeliru: 2, nBelumTahu: 0, top: null, adaJawaban: true }).teks, '2 soal keliru.');
});

test('selesai() memakai kalimatKesalahanLatih dengan jumlah keliru dan belum tahu dari riwayat', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-belajar.js'), 'utf8');
  assert.match(src, /UKP\.kalimatKesalahanLatih\(\{ nKeliru: keliru\.length, nBelumTahu: keliru\.filter\(r => r\.jawab === '-'\)\.length/);
});

test('jawab langsung: status menyebut teks kunci, alasan opsi terpilih terbuka, gulir tidak menyejajarkan panel ke atas', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'soal.js'), 'utf8');
  assert.match(src, /'Kunci jawaban ' \+ soal\.kunci \+ ': '/); // v9.2 V7: istilah baku "Kunci jawaban"
  assert.match(src, /open: bukaSalah \? true : null/);
  assert.match(src, /if \(langsung\) gulirLangsung\(\);/);
});
