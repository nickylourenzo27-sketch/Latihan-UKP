/* Uji statis rute dan pemuatan halaman cakupan materi resmi (#cakupan/A|B|C) — jalankan: node --test test/
   Tanpa DOM: memeriksa teks sumber bahwa rute terdaftar di router, data dimuat sebelum view, dan berkas ikut di cache offline. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const AKAR = path.join(__dirname, '..');
const baca = f => fs.readFileSync(path.join(AKAR, f), 'utf8');

describe('cakupan materi resmi: rute dan pemuatan', () => {
  const core = baca('js/core.js');
  it('router mengenal token #cakupan dan menaruh tingkat di hash', () => {
    const token = core.match(/const TOKEN = \{([^}]*)\}/);
    assert.ok(token, 'TOKEN tidak ditemukan');
    assert.match(token[1], /\bcakupan: 'cakupan'/);
    const param = core.match(/const PARAM_HASH = \{([^}]*)\}/);
    assert.ok(param, 'PARAM_HASH tidak ditemukan');
    assert.match(param[1], /\bcakupan: 'tingkat'/);
  });
  it('view cakupan didefinisikan dan memakai UKP.cakupanResmi', () => {
    const vb = baca('js/views-belajar.js');
    assert.match(vb, /UKP\.views\.cakupan = function/);
    assert.match(vb, /UKP\.cakupanResmi/);
  });
  it('index.html memuat data cakupan sebelum views-belajar.js', () => {
    const idx = baca('index.html');
    const iData = idx.indexOf('js/data/cakupan.js'), iView = idx.indexOf('js/views-belajar.js');
    assert.ok(iData > 0, 'js/data/cakupan.js tidak dimuat');
    assert.ok(iView > iData, 'js/data/cakupan.js harus dimuat sebelum js/views-belajar.js');
  });
  it('service worker menyimpan js/data/cakupan.js untuk luring', () => {
    assert.match(baca('sw.js'), /"js\/data\/cakupan\.js"/);
  });
});
