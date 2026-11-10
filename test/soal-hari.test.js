/* v9.0 S2: pemilihan "Soal hari ini" (UKP.belajar.pilihSoalHari, js/learn.js) — jalankan: node --test test/ */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { muatInti } = require('./_muat-inti.js');

const UKP = muatInti(['core.js', 'learn.js']);
const L = UKP.belajar;

const OPSI = { A: 'Tanggal 15 bulan berikutnya', B: 'Tanggal 20 bulan berikutnya', C: 'Akhir bulan berikutnya', D: 'Akhir bulan ketiga' };
const soal = (id, o) => Object.assign({ id, kode: id.split('-')[0], topik: id.split('-')[0] + '.1', tingkat: ['A', 'B', 'C'], stem: 'Pertanyaan ' + id + ' adalah ...', opsi: Object.assign({}, OPSI), kunci: 'C', pembahasan: { inti: 'Inti ' + id }, dasarHukum: [] }, o || {});
const bank = Array.from({ length: 23 }, (_, i) => soal('A4-' + String(i + 1).padStart(3, '0')));
const tambahHari = (iso, n) => { const d = new Date(iso + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

test('soal hari ini: stabil untuk tanggal dan tingkat yang sama, tidak bergantung urutan bank', () => {
  const a = L.pilihSoalHari(bank, '2026-11-10', 'B');
  const b = L.pilihSoalHari(bank.slice().reverse(), '2026-11-10', 'B');
  assert.ok(a); assert.equal(a.id, b.id);
  assert.equal(L.pilihSoalHari(bank, '2026-11-10', 'B').id, a.id);
});

test('soal hari ini: berganti antar hari (hari berurutan tidak pernah sama) dan menjangkau banyak soal', () => {
  const ids = []; let iso = '2026-01-01';
  for (let i = 0; i < 60; i++) { ids.push(L.pilihSoalHari(bank, iso, 'B').id); iso = tambahHari(iso, 1); }
  for (let i = 1; i < ids.length; i++) assert.notEqual(ids[i], ids[i - 1], 'hari ke-' + i);
  assert.ok(new Set(ids).size >= 15, 'ragam soal: ' + new Set(ids).size);
});

test('soal hari ini: tidak pernah memilih soal berkutipan, terlalu panjang, studi kasus, atau bukan empat opsi', () => {
  const buruk = [
    soal('A1-900', { kutipan: 'Pasal 2A ayat (1) UU PPh: ...' }),
    soal('A1-901', { stem: 'x'.repeat(241) }),
    soal('A1-902', { opsi: Object.assign({}, OPSI, { B: 'y'.repeat(101) }) }),
    soal('A1-903', { kasusId: 'K-A1-01' }),
    soal('A1-904', { formulirRef: '1770.induk.1' }),
    soal('A1-905', { opsi: { A: 'a', B: 'b', C: 'c' } }),
    soal('A1-906', { kunci: 'E' }),
    soal('A1-907', { tingkat: ['C'] }),
  ];
  const baik = soal('A1-950');
  let iso = '2026-03-01';
  for (let i = 0; i < 40; i++) { const x = L.pilihSoalHari(buruk.concat(baik), iso, 'B'); assert.equal(x && x.id, 'A1-950'); iso = tambahHari(iso, 1); }
  assert.equal(L.pilihSoalHari(buruk, '2026-03-01', 'B'), null);
  // batas tepat masih layak
  assert.ok(L.soalHariLayak(soal('A1-960', { stem: 's'.repeat(240), opsi: Object.assign({}, OPSI, { A: 'o'.repeat(100) }) }), 'B'));
});

test('soal hari ini: null bila bank kosong atau tanggal tidak sah; tingkat menyaring', () => {
  assert.equal(L.pilihSoalHari([], '2026-11-10', 'B'), null);
  assert.equal(L.pilihSoalHari(null, '2026-11-10', 'B'), null);
  assert.equal(L.pilihSoalHari(bank, 'kemarin', 'B'), null);
  const hanyaC = [soal('C9-001', { tingkat: ['C'] })];
  assert.equal(L.pilihSoalHari(hanyaC, '2026-11-10', 'A'), null);
  assert.equal(L.pilihSoalHari(hanyaC, '2026-11-10', 'C').id, 'C9-001');
});

test('soal hari ini: bank sungguhan Tingkat A dan B punya soal layak', () => {
  const fs = require('node:fs'); const path = require('node:path'); const vm = require('node:vm');
  const U2 = muatInti(['core.js', 'learn.js']);
  // data modul dimuat ke konteks yang sama lewat UKP.register (berkas data memanggil UKP.register global)
  const ctx = { UKP: U2 }; vm.createContext(ctx);
  for (const k of ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'data', 'mu-' + k + '.js'), 'utf8'), ctx);
  for (const t of ['A', 'B']) {
    const x = U2.belajar.pilihSoalHari(U2.konten.semuaSoal(t), '2026-11-10', t);
    assert.ok(x, 'tingkat ' + t); assert.ok(U2.belajar.soalHariLayak(x, t)); assert.ok(!x.kutipan);
  }
});

// ---- v9.0 V6 ----
test('soal hari ini (V6): langkah koprima dengan ukuran bank dan tidak bertetangga (bukan ±1)', () => {
  const fpb = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  for (let n = 2; n <= 200; n++) {
    const k = L.langkahSoalHari(n);
    assert.equal(fpb(k, n), 1, 'n=' + n);
    if (n >= 7) assert.ok(k !== 1 && k !== n - 1, 'n=' + n + ' k=' + k);
  }
  assert.equal(L.langkahSoalHari(1), 1); assert.equal(L.langkahSoalHari(0), 1);
});

test('soal hari ini (V6): bank 40 — hari berurutan tidak memilih soal bertetangga, 40 hari menjangkau seluruh bank', () => {
  const b40 = Array.from({ length: 40 }, (_, i) => soal('A3-' + String(i + 1).padStart(3, '0')));
  const urut = b40.map(x => x.id); const ids = []; let iso = '2026-11-10';
  for (let i = 0; i < 40; i++) { ids.push(L.pilihSoalHari(b40, iso, 'B').id); iso = tambahHari(iso, 1); }
  assert.equal(new Set(ids).size, 40);
  for (let i = 1; i < ids.length; i++) assert.ok(Math.abs(urut.indexOf(ids[i]) - urut.indexOf(ids[i - 1])) > 1, 'hari ke-' + i + ': ' + ids[i - 1] + ' → ' + ids[i]);
});

test('soal hari ini (V6): soal yang sudah dijawab hari ini tetap dipakai walau bank berubah; tanggal lain diabaikan', () => {
  const tgl = '2026-11-10'; const pilihan = L.pilihSoalHari(bank, tgl, 'B');
  const bankBaru = bank.concat([soal('A0-001'), soal('A0-002'), soal('A0-003')]); // pembaruan data menggeser indeks
  const simpan = { tgl, id: pilihan.id, o: 'A', k: null };
  assert.equal(L.pilihSoalHari(bankBaru, tgl, 'B', simpan).id, pilihan.id);
  // simpanan kemarin tidak mengikat
  assert.equal(L.pilihSoalHari(bankBaru, tgl, 'B', { tgl: '2026-11-09', id: pilihan.id }).id, L.pilihSoalHari(bankBaru, tgl, 'B').id);
  // soal tersimpan yang tidak lagi layak / tidak ada di bank → pilihan biasa; simpanan rusak diabaikan
  assert.equal(L.pilihSoalHari(bank, tgl, 'B', { tgl, id: 'X9-999' }).id, pilihan.id);
  assert.equal(L.pilihSoalHari(bank, tgl, 'B', 'rusak').id, pilihan.id);
  assert.equal(L.pilihSoalHari(bank, tgl, 'B', { tgl, id: 5 }).id, pilihan.id);
});

test('soal hari ini (V6): dariSoalHari mengenali entri kartu hari itu saja (untuk kartu Lanjutkan)', () => {
  const pada = new Date(2026, 10, 10, 10, 0).getTime(); // 10 Nov 2026 pukul 10.00 waktu lokal
  const sh = { tgl: '2026-11-10', id: 'A3-010', o: 'A', k: null };
  assert.equal(L.dariSoalHari({ soal: 'A3-010', pada }, sh), true);
  assert.equal(L.dariSoalHari({ soal: 'A3-011', pada }, sh), false);
  assert.equal(L.dariSoalHari({ soal: 'A3-010', pada: pada - 2 * 864e5 }, sh), false); // soal sama, hari lain (latihan biasa)
  assert.equal(L.dariSoalHari({ soal: 'A3-010', pada: new Date(2026, 10, 11, 2, 0).getTime() }, sh), true); // 02.00 = masih hari belajar 10 Nov
  assert.equal(L.dariSoalHari({ soal: 'A3-010', pada }, null), false);
  assert.equal(L.dariSoalHari({ soal: 'A3-010', pada }, 'rusak'), false);
  assert.equal(L.dariSoalHari(null, sh), false);
});
