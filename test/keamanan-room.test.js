/* v9.2: masukan dari orang yang hanya memegang tautan room tidak dipercaya.
   Nama dipakai sebagai kunci objek di pesan room, jadi nama seperti "constructor" tidak boleh lolos validator
   (setiap HP membuang pesan berkunci itu, sehingga kunci jawaban tidak pernah sampai). Angka skor tim dari room diperiksa kewajarannya. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const J = v => JSON.parse(JSON.stringify(v));
const UKP = muatInti(['core.js', 'ruang.js', 'views-tim.js']);
const P = UKP.ruang._protokol;

describe('v9.2 keamanan room: nama dari orang asing', () => {
  it('nama yang sama dengan properti bawaan objek ditolak, apa pun huruf besar-kecilnya', () => {
    for (const n of ['constructor', 'Constructor', 'CONSTRUCTOR', '__proto__', 'prototype', 'toString', 'tostring', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'toLocaleString', '__defineGetter__'])
      assert.equal(P.validNama(n), false, n);
  });
  it('nama orang biasa tetap sah, termasuk beraksen dan beremoji', () => {
    for (const n of ['Nicky', 'Rina', 'Budi Santoso', 'José', 'Ayu ❤️', 'Dodi 2', 'Sari-Dewi', "O'Neil", 'construct', 'Prototipe'])
      assert.equal(P.validNama(n), true, n);
  });
  it('karakter tak terlihat dan pembalik arah ditolak validator dan dibuang saat merapikan', () => {
    for (const n of ['Bu​di', 'Budi‎', '‮idub', 'Bu⁠di', 'Bu﻿di', 'Bu⁦di'])
      assert.equal(P.validNama(n), false, JSON.stringify(n));
    assert.equal(P.rapikanNama('Bu​di'), 'Budi');
    assert.equal(P.rapikanNama(' ‮Budi‏  Santoso '), 'Budi Santoso');
    assert.equal(P.rapikanNama('José'), 'José');           // bentuk terurai → NFC
    assert.equal(P.validNama(P.rapikanNama('José')), true);
    assert.equal(P.rapikanNama('x'.repeat(25)), '');
  });
  it('kehadiran dan hasil soal dengan nama terlarang tidak pernah menjadi pesan sah', () => {
    const amplop = nama => ({ v: 1, t: 1762850000000, urut: 3, d: 'abcd1234', nama, online: true });
    assert.ok(P.validHadir(amplop('Rina')));
    assert.equal(P.validHadir(amplop('constructor')), null);
    assert.equal(P.validHadir(amplop('Bu​di')), null);
    const per = { Rina: { o: 'B', k: 'yakin' } };
    assert.ok(P.validPer(per));
    const jahat = Object.assign({}, per); Object.defineProperty(jahat, 'constructor', { value: { o: 'A', k: null }, enumerable: true });
    assert.equal(P.validPer(jahat), null);
    // pesan yang lolos di pengirim juga harus lolos parseAman di penerima: tidak ada lagi kunci berbahaya yang bisa terbit
    assert.deepEqual(J(P.parseAman(JSON.stringify({ per }))), { per });
    assert.equal(P.parseAman('{"per":{"constructor":{"o":"A"}}}'), null);
  });
});

describe('v9.2 keamanan room: angka skor tim dari room diperiksa kewajarannya', () => {
  const X = UKP.views.tim._uji;
  const sesi = lain => Object.assign({ id: 'sb-k1', mulai: new Date(2026, 10, 11, 10, 0).getTime(), selesai: new Date(2026, 10, 11, 10, 20).getTime(), peserta: ['Rina', 'Budi', 'Sari', 'Yoga'],
    soal: ['A1-001', 'A1-002'].map((id, i) => ({ id, kode: 'A1', topik: '', kunci: 'B', jawaban: { Rina: { o: 'B', b: 1 }, Budi: { o: i ? 'C' : 'B', b: i ? 0 : 1 }, Sari: { o: 'C', b: 0 }, Yoga: { o: i ? 'A' : '-', b: 0 } } })), sumber: 'room' }, lain || {});
  const ev = X.evaluasiLokal(sesi());
  const dariJawaban = { benar: 3, dijawab: 7, tidak: 1 };
  it('angka yang wajar dari room tetap dipakai', () => {
    assert.deepEqual(J(X.angkaTim(sesi({ tim: { benar: 3, dijawab: 7 } }), ev)), dariJawaban);
    assert.deepEqual(J(X.angkaTim(sesi({ tim: { benar: 0, dijawab: 8 } }), ev)), { benar: 0, dijawab: 8, tidak: 0 });
  });
  it('angka yang mustahil diabaikan dan skor dihitung dari jawaban', () => {
    for (const tim of [{ benar: 9999, dijawab: 1 }, { benar: '7', dijawab: '3' }, { benar: 2.5, dijawab: 4 }, { benar: -1, dijawab: 4 }, { benar: 5, dijawab: 4 }, { benar: 1, dijawab: 100000 }, { benar: NaN, dijawab: 3 }, { akurasi: 50 }, 'x', null])
      assert.deepEqual(J(X.angkaTim(sesi({ tim }), ev)), dariJawaban, JSON.stringify(tim));
  });
  it('skor tim tidak pernah melewati 100%', () => {
    for (const tim of [{ benar: 9999, dijawab: 1 }, { benar: 24, dijawab: 24 }, { benar: 3, dijawab: 7 }]) {
      const t = X.angkaTim(sesi({ tim }), ev);
      assert.ok(t.benar <= t.dijawab && t.dijawab > 0, JSON.stringify(tim));
    }
  });
});
