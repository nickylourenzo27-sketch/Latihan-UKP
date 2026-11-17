'use strict';
// v10.2.1: lipatan di panel membahas papan digulir ke bagian layar yang terlihat saat dibuka.
// Dulu isi terbuka di bawah bar tombol dan layar diam, sehingga ketukan tampak tidak berpengaruh.
const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'soal.js'), 'utf8');
const i = src.indexOf('function tautRincianV10()');
const badan = src.slice(i, src.indexOf('const pemandu = ', i));

describe('v10.2.1 papan: lipatan rincian digulir ke pandangan', () => {
  it('fungsi tautRincianV10 ada dan memasang pendengar toggle pada tahap tangkap', () => {
    assert.ok(i > 0, 'tautRincianV10 tidak ditemukan');
    assert.match(badan, /rin\.addEventListener\('toggle',[\s\S]*?\}, true\);/);
  });
  it('gulir dipicu oleh toggle (tombol bawah dan judul lipatan sama), hanya saat rincian terbuka', () => {
    assert.match(badan, /if \(!rin\.open \|\| !d \|\| !d\.open\) return;/);
    assert.match(badan, /gulirKe\(d, d !== rin\)/);
    assert.doesNotMatch(badan, /onclick: \(\) => \{[^}]*scrollIntoView/);
  });
  it('gulir memperhitungkan penggulir terdekat, kop lengket, dan bar tombol', () => {
    assert.match(badan, /overflowY/);
    assert.match(badan, /\.papan-v10-kop/);
    assert.match(badan, /aksi\.getBoundingClientRect\(\)/);
    assert.match(badan, /scrollBy\(\{ top: geser, behavior: halus\(\) \}\)/);
  });
});
