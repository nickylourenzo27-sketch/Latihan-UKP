/* Uji statis Dasbor tim (#tim, #tim/<id>): rute, pemuatan skrip, navigasi — jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const baca = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');

describe('dasbor tim: rute dan pemuatan', () => {
  it('router mengenal token #tim dan menaruh id anggota di hash', () => {
    const core = baca('js/core.js');
    assert.match(core.match(/const TOKEN = \{([^}]*)\}/)[1], /\btim: 'tim'/);
    assert.match(core.match(/const PARAM_HASH = \{([^}]*)\}/)[1], /\btim: 'anggota'/);
  });
  it('view tim didefinisikan dan punya cadangan tanpa UKP.tim', () => {
    const v = baca('js/views-tim.js');
    assert.match(v, /UKP\.views\.tim = function/);
    assert.match(v, /ukp\.tim\.manual/);
    assert.match(v, /UKP\.tim && typeof UKP\.tim === 'object' \? UKP\.tim : cadangan/);
  });
  it('index.html memuat views-tim.js setelah views-alat.js dan sebelum app.js', () => {
    const idx = baca('index.html');
    // v9.4 FB1: index.html rilis bercap versi (src="js/app.js?v=<VERSI>", tools/build-artifact.js)
    const di = f => idx.search(new RegExp('src="js/' + f.replace('.', '\\.') + '(?:\\?v=[0-9a-f]+)?"'));
    const a = di('views-alat.js'), t = di('views-tim.js'), b = di('app.js');
    assert.ok(a > 0 && t > a && b > t);
  });
  // v8.2 (audit T3): Dasbor tim pindah dari grup Ujian ke grup Tim paling atas
  it('navigasi menampilkan "Dasbor tim" di grup Tim', () => {
    assert.match(baca('js/app.js'), /label: 'Tim', item: \[[^\n]*\['tim', 'Dasbor tim', '[a-z-]+'\]/);
    assert.doesNotMatch(baca('js/app.js'), /label: 'Ujian', item: \[[^\n]*\['tim', 'Dasbor tim'/);
  });
});
