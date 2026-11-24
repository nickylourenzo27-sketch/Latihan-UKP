/* Uji v10.3.1 (data asli): Try Out UKP C Paket 3 (TO-C-2026-11-3) seperti yang dilihat aplikasi. Jalankan: node --test test/
   Paket terdaftar dengan 100 nomor urut, 78 soal utama dan 22 soal Paket 1 lewat sumber.juga, tiap soal punya penjelasan mudah dan
   peta butir atau catatan luar untuk tiap tingkatnya, dan tidak ada soal baru yang kembar dengan soal lain di bank. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const B = 'TO-B-2026-11', C1 = 'TO-C-2026-11-1', C2 = 'TO-C-2026-11-2', C3 = 'TO-C-2026-11-3', LM = 'LM-B-2026-11';
const JUDUL = 'Try Out UKP C Paket 3 (transkrip 24 Nov 2026)';
// nomor Paket 3 yang soalnya sama dengan soal Paket 1: [nomor Paket 3, id soal, nomor Paket 1]
const BERSAMA = [[1, 'B7-310', 32], [4, 'A2-293', 91], [13, 'B6-294', 35], [19, 'B8-250', 85], [22, 'A4-420', 24], [32, 'A2-271', 14], [36, 'B7-311', 33], [38, 'B7-306', 17],
  [41, 'A2-268', 5], [42, 'B8-251', 99], [43, 'B7-303', 7], [52, 'B6-293', 20], [64, 'B8-247', 56], [66, 'A2-274', 19], [69, 'A4-421', 51], [70, 'B7-330', 98],
  [77, 'C9-168', 97], [80, 'C9-167', 94], [83, 'A2-291', 82], [93, 'A4-418', 13], [94, 'B8-248', 62], [98, 'C9-169', 100]];
const PER_MODUL = { A1: 7, A2: 18, A3: 3, A4: 5, A5: 2, B6: 8, B7: 22, B8: 3, C9: 5, C10: 5 };
const TERLARANG = /[\u2014\u2013\u2190-\u21ff]/; // tanda pisah panjang dan tanda panah
function muat() {
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, TextEncoder, TextDecoder, btoa, atob, Uint8Array,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout, setInterval: () => 0, clearInterval: noop,
  };
  ctx.window = ctx; vm.createContext(ctx);
  const jalankan = rel => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  jalankan('js/core.js');
  for (const f of fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => /^(ref|mu-.*|cakupan|peta-butir)\.js$/.test(f)).sort()) jalankan('js/data/' + f);
  for (const b of ['learn.js', 'tim.js', 'views-belajar.js', 'views-simulasi.js']) jalankan('js/' + b);
  return ctx.UKP;
}

describe('v10.3.1 data asli: Try Out UKP C Paket 3', () => {
  const UKP = muat(); const K = UKP.konten; const P = UKP.petaButir;
  const semua = K.semuaKelompok().flatMap(k => UKP.modul[k].soal || []);
  const paket = K.soalSet(C3);
  const utama = paket.filter(s => s.sumber.set === C3), lewatJuga = paket.filter(s => s.sumber.set !== C3);

  it('paket terdaftar: lima paket, Paket 3 sesudah Paket 2 dan sebelum Latihan UKP B', () => {
    const d = K.daftarSet();
    assert.deepEqual(J(d.map(p => p.set)), [B, C1, C2, C3, LM]);
    const p = d.find(x => x.set === C3);
    assert.equal(p.n, 100); assert.equal(p.tingkat, 'C'); assert.equal(p.judul, JUDUL); assert.equal(p.label, 'Try Out UKP C Paket 3');
    assert.equal(Object.values(p.perKelompok).reduce((a, n) => a + n, 0), 100);
    assert.deepEqual(J(K.bagianSet(C3)), [], 'paket try out tidak dibagi per mata uji');
    assert.equal(K.setBawaan('C').set, C1, 'paket bawaan Tingkat C tetap Paket 1');
  });
  it('waktu bawaan sama dengan Paket 1 (sama-sama 100 soal Tingkat C)', () => {
    const M = UKP.simulasiTim._murni; const cari = set => K.daftarSet().find(p => p.set === set);
    for (const t of ['A', 'B', 'C']) assert.equal(M.waktuPaket(cari(C3), t).menit, M.waktuPaket(cari(C1), t).menit, t);
    assert.equal(M.waktuPaket(cari(C3), 'C').menit, 210);
  });
  it('100 nomor, 1 sampai 100, tanpa lubang dan tanpa ganda', () => {
    assert.equal(paket.length, 100);
    assert.deepEqual(J(paket.map(s => K.noSet(s, C3))), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.equal(new Set(paket.map(s => s.id)).size, 100, 'id ganda');
    // tidak ada anggota lain yang tersembunyi: hitung langsung dari data, tanpa K.soalSet
    const mentah = semua.filter(s => s.sumber && (s.sumber.set === C3 || (Array.isArray(s.sumber.juga) && s.sumber.juga.some(j => j.set === C3))));
    assert.equal(mentah.length, 100);
  });
  it('78 soal utama: sumber, sejak 10.3.1, sebaran per modul, id berurutan menurut nomor paket', () => {
    assert.equal(utama.length, 78);
    const per = {};
    for (const s of utama) {
      assert.deepEqual(J(s.sumber), { set: C3, no: K.noSet(s, C3), judul: JUDUL, tingkat: 'C' }, s.id);
      assert.equal(s.sejak, '10.3.1', s.id); assert.ok(s.tingkat.includes('C'), s.id); assert.ok(!s.kembaranDari, s.id);
      assert.equal(s.topik.split('.')[0], s.id.split('-')[0], s.id + ' topik di modulnya');
      assert.ok(K.topik(s.topik), s.id + ' topik ' + s.topik + ' ada');
      assert.equal(Object.keys(s.opsi).join(''), 'ABCD', s.id); assert.ok(['A', 'B', 'C', 'D'].includes(s.kunci), s.id);
      const salah = 'ABCD'.split('').filter(k => k !== s.kunci).join('');
      assert.equal(Object.keys(s.pembahasan.mengapaSalah).sort().join(''), salah, s.id + ' mengapaSalah'); assert.equal(Object.keys(s.jebakanOpsi).sort().join(''), salah, s.id + ' jebakanOpsi');
      assert.ok(!TERLARANG.test(JSON.stringify(s)), s.id + ' memuat tanda pisah panjang atau tanda panah');
      const k = s.id.split('-')[0]; per[k] = (per[k] || 0) + 1;
    }
    assert.deepEqual(per, PER_MODUL);
    for (const k of Object.keys(PER_MODUL)) { const a = utama.filter(s => s.id.startsWith(k + '-')).map(s => Number(s.id.split('-')[1])); a.forEach((n, i) => { if (i) assert.equal(n, a[i - 1] + 1, k + ' id berurutan'); }); }
    assert.equal(semua.filter(s => s.sejak === '10.3.1').length, 78, 'hanya soal Paket 3 yang bersejak 10.3.1');
  });
  it('22 soal bersama: soal Paket 1 yang dipakai lagi lewat sumber.juga, nomornya di Paket 1 tetap', () => {
    assert.equal(lewatJuga.length, 22);
    assert.deepEqual(J(lewatJuga.map(s => [K.noSet(s, C3), s.id, K.noSet(s, C1)])), BERSAMA);
    const c1 = K.soalSet(C1); assert.equal(c1.length, 100);
    for (const s of lewatJuga) {
      assert.equal(s.sumber.set, C1, s.id); assert.equal(s.sejak, '9.5.5', s.id);
      assert.deepEqual(J(s.sumber.juga), [{ set: C3, no: K.noSet(s, C3), judul: JUDUL, tingkat: 'C' }], s.id);
      assert.equal(c1[s.sumber.no - 1].id, s.id, s.id + ' tetap di nomornya di Paket 1');
      assert.deepEqual(J(K.anggotaSet(s).map(a => [a.set, a.utama])), [[C1, true], [C3, false]], s.id);
    }
    assert.equal(K.soalSet(C2).length, 50); assert.equal(K.soalSet(B).length, 100);
  });
  it('tiap soal paket punya penjelasan mudah', () => {
    for (const s of paket) { const m = (s.pembahasan || {}).mudah; assert.equal(typeof m, 'string', s.id); assert.ok(m.trim().length >= 140, s.id + ' penjelasan mudah terlalu pendek'); assert.ok(!TERLARANG.test(m), s.id); }
    for (const s of utama) assert.match(s.pembahasan.mudah, /Cara ingat: [^.]+\.$/, s.id + ' diakhiri kalimat Cara ingat');
  });
  it('peta butir atau luar untuk tiap tingkat tiap soal', () => {
    const daun = new Set(); const jalan = n => { if (!n) return; if (Array.isArray(n)) return n.forEach(jalan); if (typeof n === 'object') { if (typeof n.id === 'string' && Array.isArray(n.anak) && !n.anak.length) daun.add(n.id); Object.values(n).forEach(jalan); } };
    jalan(UKP.cakupanResmi); assert.ok(daun.size > 300, 'butir daun cakupan resmi terbaca: ' + daun.size);
    for (const s of paket) {
      const butir = P.peta[s.id] || [], luar = P.luar[s.id] || '';
      assert.ok(butir.length || luar, s.id + ' ada di peta atau luar');
      for (const t of s.tingkat) {
        const adaButir = butir.some(b => b.startsWith(t + '.')), adaLuar = new RegExp('^Tingkat .*\\b' + t + '\\b').test(luar);
        assert.ok(adaButir || adaLuar, s.id + ' tingkat ' + t + ': tanpa butir dan tanpa catatan luar');
        if (s.sumber.set === C3) assert.ok(!(adaButir && adaLuar), s.id + ' tingkat ' + t + ': punya butir sekaligus tercatat luar');
      }
      for (const b of butir) { assert.ok(s.tingkat.includes(b[0]), s.id + ' butir ' + b + ' di luar tingkat soal'); assert.ok(daun.has(b), s.id + ' butir ' + b + ' ada di cakupan resmi'); }
    }
  });
  it('soal bertanda perlu cek: hanya nomor 51, kunci A (berbeda dari kunci try out B, disetujui pemimpin tim), peringatan tampil untuk pengguna', () => {
    const tanda = utama.filter(s => s.verifikasi === '◐');
    assert.deepEqual(J(tanda.map(s => K.noSet(s, C3))), [51]);
    const s = tanda[0]; assert.equal(s.id, 'B7-402'); assert.equal(s.kunci, 'A'); assert.match(s.peringatan, /berbeda dari kunci try out \(B\)/);
    assert.ok(typeof s.peringatan === 'string' && s.peringatan.length >= 60);
    assert.match(s.peringatan, /^Kunci di sini A/); assert.match(s.peringatan, /1 April 2022/);
    for (const x of utama) if (x !== s) { assert.equal(x.verifikasi, '✅', x.id); assert.equal(x.peringatan, undefined, x.id); }
    assert.ok(fs.readFileSync(path.join(ROOT, 'js', 'soal.js'), 'utf8').includes('UKP.rapikanCatatan(soal.peringatan)'), 'pembahasan menampilkan soal.peringatan');
  });
  it('tidak ada soal baru yang stem dan opsinya sama dengan soal lain di bank', () => {
    const rapi = x => String(x).toLowerCase().replace(/\s+/g, ' ').trim();
    const sidik = s => rapi(s.stem) + '\n' + Object.values(s.opsi).map(rapi).sort().join('\n');
    const peta = new Map(); for (const s of semua) { const k = sidik(s); if (!peta.has(k)) peta.set(k, []); peta.get(k).push(s.id); }
    for (const s of utama) assert.deepEqual(peta.get(sidik(s)), [s.id], s.id + ' kembar');
  });
});
