/* Gerbang akses tim (js/akses.js): SHA-256 cadangan murni JS diuji dengan vektor standar dan dibandingkan dengan node:crypto. */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const akses = require('../js/akses.js');
const ref = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');

test('SHA-256 cadangan: vektor uji standar (FIPS 180-2)', () => {
  assert.equal(akses.sha256(''), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  assert.equal(akses.sha256('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.equal(akses.sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq'), '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1');
});

test('SHA-256 cadangan: sama dengan node:crypto untuk panjang batas blok dan UTF-8', () => {
  for (const n of [1, 55, 56, 63, 64, 65, 119, 120, 1000]) assert.equal(akses.sha256('a'.repeat(n)), ref('a'.repeat(n)), 'panjang ' + n);
  for (const s of ['Pajak Penghasilan § 21', 'Sandi—tim ✓', 'ñ日本語🙂']) assert.equal(akses.sha256(s), ref(s));
});

test('konfigurasi: sandiHash = SHA-256(salt + "|" + sandi) dan hashSandi konsisten', async () => {
  const k = globalThis.UKP_AKSES;
  assert.equal(typeof k.aktif, 'boolean');
  assert.match(k.salt, /^[0-9a-f]{16}$/);
  assert.match(k.sandiHash, /^[0-9a-f]{64}$/);
  assert.equal(await akses.hashSandi('rahasia', 'garam'), ref('garam|rahasia'));
  assert.notEqual(await akses.hashSandi('salah', k.salt), k.sandiHash);
});
