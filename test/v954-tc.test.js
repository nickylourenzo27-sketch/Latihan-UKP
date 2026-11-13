/* Uji peninjau C v9.5.4 (KEPUTUSAN-954C butir C-1.4): saringan matriks "Ada yang salah" harus cocok dengan kelas soal.
   Soal yang berkelas "Semua benar" karena yang kosong hanya pemandu/pengamat (tidak menjawab satu soal pun sepanjang sesi)
   tidak boleh muncul di saringan "Ada yang salah". Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);

describe('v9.5.4 C-1 (peninjau): saringan matriks cocok dengan kelas soal', () => {
  const UKP = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js']));
  const L = UKP.belajar; const X = UKP.views.tim._uji;
  const q = (id, kunci, jw) => ({ id, kode: id.split('-')[0], topik: id.split('-')[0] + '.1', kunci, detik: 0, jawaban: jw });
  const B = o => ({ o, k: null, b: 1 }), S = o => ({ o, k: null, b: 0 }), KS = { o: '-', k: null, b: 0 };
  const saring = nilai => X.SARING_MATRIKS.find(x => x.nilai === nilai).f;
  function hitung(s) {
    const ev = L.evaluasiSesi(s); const tri = ev.triase;
    const kelasDari = id => { const x = tri.daftar.find(d => d.id === id); return x ? x.kelas : X.kelasCadangan(ev.soal.find(y => y.id === id), tri.pengamat); };
    const n = v => ev.soal.filter(sq => saring(v)(sq, ev, kelasDari)).map(sq => sq.id);
    return { ev, tri, kelasDari, salah: n('salah'), terbelah: n('terbelah'), tersandung: n('tersandung') };
  }

  it('pemandu yang tidak pernah menjawab: soal "Semua benar" tidak masuk "Ada yang salah"; soal lain tetap', () => {
    const s = { id: 'sb-tc', mulai: Date.now() - 600000, selesai: Date.now(), peserta: ['Nicky', 'Mita', 'Nora'], mode: 'latihan', bahas: {}, soal: [
      q('X1-001', 'A', { Nicky: KS, Mita: B('A'), Nora: B('A') }),
      q('X1-002', 'B', { Nicky: KS, Mita: B('B'), Nora: KS }),
      q('X1-003', 'C', { Nicky: KS, Mita: B('C'), Nora: S('A') }),
      q('X1-004', 'D', { Nicky: KS, Mita: KS, Nora: KS })] };
    const t = hitung(s);
    assert.deepEqual(JSON.parse(JSON.stringify(t.tri.pengamat)), ['Nicky']);
    assert.equal(t.tri.nDikuasai, 1);
    assert.deepEqual(t.salah, ['X1-002', 'X1-003', 'X1-004']);
    assert.ok(!t.salah.some(id => t.kelasDari(id) === 'dikuasai'), 'tidak ada soal "Semua benar" di "Ada yang salah"');
    assert.deepEqual(t.terbelah, ['X1-003']); assert.deepEqual(t.tersandung, []);
  });

  it('tanpa pengamat: perilaku lama (yang kosong atau salah masuk "Ada yang salah")', () => {
    const s = { id: 'sb-tc2', mulai: Date.now() - 600000, selesai: Date.now(), peserta: ['Nicky', 'Mita'], mode: 'latihan', bahas: {}, soal: [
      q('X1-001', 'A', { Nicky: B('A'), Mita: B('A') }),
      q('X1-002', 'B', { Nicky: B('B'), Mita: KS }),
      q('X1-003', 'C', { Nicky: S('A'), Mita: B('C') })] };
    const t = hitung(s);
    assert.deepEqual(JSON.parse(JSON.stringify(t.tri.pengamat)), []);
    assert.deepEqual(t.salah, ['X1-002', 'X1-003']);
  });

  it('pemanggil tanpa kelasDari tetap bekerja (cadangan aman)', () => {
    assert.equal(saring('salah')({ id: 'X', nBenar: 1 }, { nPeserta: 2 }), true);
    assert.equal(saring('salah')({ id: 'X', nBenar: 2 }, { nPeserta: 2 }), false);
  });
});
