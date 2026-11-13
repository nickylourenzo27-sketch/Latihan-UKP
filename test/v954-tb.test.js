/* Uji v9.5.4 peninjau B: perbaikan kecil di atas pekerjaan pengerja B.
   S7: selama kartu Tim masih menyambung (memeriksa server tim atau akun Claude), jalurnya belum diketahui,
   jadi toast dan keterangan "Di sini tidak ada pengiriman otomatis" belum boleh dipakai. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const va = fs.readFileSync(path.join(__dirname, '..', 'js', 'views-alat.js'), 'utf8');

describe('v9.5.4 peninjau B, S7: cabang tanpa jalur kirim tidak dipakai selama menyambung', () => {
  const m = va.match(/const tanpaJalurKirim = (i => [^;]+);/);
  it('menyambung: bukan mode tanpa jalur kirim; sesudah pemeriksaan selesai di website statis: ya', () => {
    assert.ok(m, 'tanpaJalurKirim tidak ditemukan');
    const f = vm.runInNewContext(m[1]);
    assert.equal(f({ status: 'mati', menyambung: true, server: false, modeServer: false, room: null }), false, 'masih memeriksa jalur');
    assert.equal(f({ status: 'mati', menyambung: false, server: false, modeServer: false, room: null }), true, 'website statis');
    assert.equal(f({ status: 'mati', server: false, modeServer: false, room: null }), true, 'tanpa kunci menyambung');
    assert.equal(f(null), false);
  });
  it('toast dan keterangan sakelar memakai syarat yang sama', () => {
    assert.ok(va.includes('else if (tanpaJalurKirim(i)) UKP.toast('));
    assert.ok(va.includes(': tanpaJalurKirim(i) ? BANTU_TANPA_JALUR : '));
  });
});
