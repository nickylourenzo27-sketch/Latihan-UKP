/* Uji v9.5.5 (data asli): tiga paket try out seperti yang dilihat aplikasi. Jalankan: node --test test/
   Berbeda dari test/v955-a.test.js dan v955-b.test.js (soal tiruan), berkas ini memuat js/data apa adanya. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const B = 'TO-B-2026-11', C1 = 'TO-C-2026-11-1', C2 = 'TO-C-2026-11-2';
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

describe('v9.5.5 data asli: tiga paket try out', () => {
  const UKP = muat(); const K = UKP.konten;
  it('daftarSet: Try Out UKP B 100 soal, Paket 1 100 soal, Paket 2 50 soal, dalam urutan kode paket', () => {
    const d = K.daftarSet();
    assert.deepEqual(J(d.map(p => p.set)), [B, C1, C2]);
    assert.deepEqual(J(d.map(p => p.n)), [100, 100, 50]);
    assert.deepEqual(J(d.map(p => p.tingkat)), ['B', 'C', 'C']);
    assert.deepEqual(J(d.map(p => p.label)), ['Try Out UKP B', 'Try Out UKP C Paket 1', 'Try Out UKP C Paket 2']);
    for (const p of d) assert.equal(Object.values(p.perKelompok).reduce((a, n) => a + n, 0), p.n, p.set + ': jumlah per kelompok');
  });
  it('soalSet: urutan nomor asli tanpa ganda; empat soal Try Out UKP B muncul di Paket 2 pada nomor 11, 15, 34, 39', () => {
    for (const [set, n] of [[B, 100], [C1, 100], [C2, 50]]) { const a = K.soalSet(set); assert.equal(a.length, n, set); assert.equal(new Set(a.map(x => x.id)).size, n, set + ': id ganda'); }
    const c2 = K.soalSet(C2);
    assert.deepEqual([11, 15, 34, 39].map(no => c2[no - 1].id), ['A3-161', 'A3-162', 'B6-132', 'B6-141']);
    const b = K.soalSet(B); assert.deepEqual([75, 81, 17, 72].map(no => b[no - 1].id), ['A3-161', 'A3-162', 'B6-132', 'B6-141'], 'di Try Out UKP B nomornya tetap');
    c2.forEach((x, i) => { if (!['A3-161', 'A3-162', 'B6-132', 'B6-141'].includes(x.id)) assert.equal(x.sumber.no, i + 1, x.id); });
    K.soalSet(C1).forEach((x, i) => assert.equal(x.sumber.no, i + 1, x.id));
  });
  it('paket bawaan mengikuti tingkat target: A dan B melihat Try Out UKP B, C melihat Paket 1', () => {
    assert.equal(K.setBawaan('A').set, B); assert.equal(K.setBawaan('B').set, B); assert.equal(K.setBawaan('C').set, C1);
  });
  it('soal paket C ikut bank tingkat menurut materinya, dan paket tetap utuh walau tingkat target B', () => {
    const baruC = K.soalSet(C1).concat(K.soalSet(C2)).filter(x => x.sejak === '9.5.5');
    assert.equal(baruC.length, 146);
    const idB = new Set(K.semuaSoal('B').map(x => x.id)), idA = new Set(K.semuaSoal('A').map(x => x.id)), idC = new Set(K.semuaSoal('C').map(x => x.id));
    for (const x of baruC) { assert.ok(idC.has(x.id), x.id + ' harus ada di bank C'); assert.equal(idB.has(x.id), x.tingkat.includes('B'), x.id); assert.equal(idA.has(x.id), x.tingkat.includes('A'), x.id); }
    assert.ok(baruC.filter(x => x.tingkat.includes('B')).length >= 100, 'sebagian besar soal paket C juga materi Tingkat B');
  });
});
