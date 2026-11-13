/* Uji peninjau v9.5.5 K-4 (sumber.juga), tambahan sesudah tinjauan:
   - kode bagian soal ujian tim tidak memakai paket yang nomornya bentrok (soal utama dan soal lewat juga bernomor sama di modul berbeda,
     yang tidak tertangkap validator per berkas): kode tetap terbaca kembali persis;
   - soal dengan juga ke DUA paket lain: nomor sendiri di tiap paket, kode bagian soal pulang-pergi di tiap paket;
   - data sungguhan: tiap paket di daftarSet bernomor tepat 1..n tanpa ganda (menjaga penggabungan data asli: nomor bentrok lintas modul ketahuan di sini).
   Soal tiruan dibuat di dalam uji, tidak ditulis ke js/data/. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const B = 'TO-B-2026-11', C1 = 'TO-C-2026-11-1', C2 = 'TO-C-2026-11-2';
const JC1 = 'Try Out UKP C Paket 1 (transkrip 13 Nov 2026)', JC2 = 'Try Out UKP C Paket 2 (transkrip 13 Nov 2026)';

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
  // v9.5.5 (rilis): data asli kini memuat dua paket Try Out UKP C. Uji di berkas ini memakai soal tiruan berkode paket sama,
  // jadi paket C asli dilepas dari salinan data uji ini (data di js/data tidak disentuh). Data asli diuji di test/v955-data.test.js.
  for (const k of Object.keys(ctx.UKP.modul)) { const m = ctx.UKP.modul[k]; m.soal = (m.soal || []).filter(x => !(x.sumber && /^TO-C-/.test(String(x.sumber.set)))); m.soal.forEach(x => { if (x.sumber && x.sumber.juga) delete x.sumber.juga; }); }
  for (const b of ['learn.js', 'tim.js', 'views-belajar.js', 'views-simulasi.js']) jalankan('js/' + b);
  return ctx.UKP;
}
// soal utama tiruan paket set (nomor 1..n kecuali lewati), tersebar di modul A1..C10, id <kode>-96x
function sisip(UKP, set, judul, n, lewati) {
  const K = UKP.konten; const kodes = K.semuaKelompok().filter(k => k !== 'E'); const nomor = {}; let i = 0;
  for (let no = 1; no <= n; no++) {
    if (lewati.includes(no)) continue; const k = kodes[i++ % kodes.length];
    const asal = UKP.modul[k].soal.filter(x => !x.sumber && !x.kembaranDari && !x.kasusId); const x = J(asal[(no * 3) % asal.length]);
    delete x.kembaranDari; delete x.sejak; nomor[k] = nomor[k] || 960; let id; do { id = k + '-' + String(++nomor[k]).padStart(3, '0'); } while (K.soal(id));
    x.id = id; x.sumber = { set, no, judul, tingkat: 'C' }; UKP.modul[k].soal.push(x);
  }
}

describe('v9.5.5 tinjauan K-4: nomor bentrok lintas modul tidak merusak kode ujian tim', () => {
  const UKP = muat(); const K = UKP.konten; const UT = UKP.belajar.ujianTim; const M = UKP.simulasiTim._murni;
  sisip(UKP, C2, JC2, 50, [15, 34, 39]); // nomor 11 tetap punya soal utama
  K.soal('A3-161').sumber.juga = [{ set: C2, no: 11, judul: JC2, tingkat: 'C' }]; // bentrok dengan soal utama nomor 11 di modul lain
  it('aplikasi tidak macet; paket memuat kedua soal sekali', () => {
    const ss = K.soalSet(C2); assert.equal(ss.length, 48); assert.equal(new Set(ss.map(x => x.id)).size, 48);
    assert.equal(K.daftarSet().find(p => p.set === C2).n, 48);
  });
  it('kode ujian tim paket utuh dan bagian terbaca kembali persis (paket bernomor bentrok tidak dipakai untuk kode s…)', () => {
    const a = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C' });
    for (const ids of [a.soalIds, a.soalIds.slice(0, 20), K.soalSet(C2).filter(x => K.noSet(x, C2) === 11).map(x => x.id)]) {
      const k = UT.buatKode({ id: 'utb1', tingkat: 'C', menit: 60, soalIds: ids }); const r = UT.bacaKode(k);
      assert.deepEqual(J(r.soalIds), J(ids), k.split('.')[4]);
    }
  });
});

describe('v9.5.5 tinjauan K-4: soal dengan juga ke dua paket lain', () => {
  const UKP = muat(); const K = UKP.konten; const UT = UKP.belajar.ujianTim; const M = UKP.simulasiTim._murni;
  sisip(UKP, C1, JC1, 100, [5]); sisip(UKP, C2, JC2, 50, [11]);
  K.soal('A3-161').sumber.juga = [{ set: C2, no: 11, judul: JC2, tingkat: 'C' }, { set: C1, no: 5, judul: JC1, tingkat: 'C' }];
  it('nomor sendiri di tiap paket; daftarSet B 100, C1 100, C2 50', () => {
    assert.deepEqual(J(K.anggotaSet(K.soal('A3-161')).map(a => [a.set, a.no])), [[B, 75], [C2, 11], [C1, 5]]);
    assert.deepEqual(J(K.daftarSet().map(p => [p.set, p.n])), [[B, 100], [C1, 100], [C2, 50]]);
    assert.equal(K.soalSet(B)[74].id, 'A3-161'); assert.equal(K.soalSet(C1)[4].id, 'A3-161'); assert.equal(K.soalSet(C2)[10].id, 'A3-161');
  });
  it('simulasi tiap paket dan kode bagian soal pulang-pergi', () => {
    for (const [set, n, k] of [[B, 100, 74], [C1, 100, 4], [C2, 50, 10]]) {
      const a = M.susunAttempt({ format: 'tryout', kode: set, tingkat: 'C' }); assert.equal(a.soalIds.length, n); assert.equal(a.soalIds[k], 'A3-161');
      const kode = UT.buatKode({ id: 'utb2', tingkat: 'C', menit: 60, soalIds: a.soalIds }); assert.ok(kode.includes('.s' + set + '~1-' + n + '.'), kode);
      assert.deepEqual(J(UT.bacaKode(kode).soalIds), J(a.soalIds));
    }
  });
});

describe('v9.5.5 tinjauan K-4: data sungguhan, tiap paket bernomor 1..n tanpa ganda', () => {
  const UKP = muat(); const K = UKP.konten;
  it('soalSet(set) bernomor tepat 1..n untuk tiap paket di daftarSet', () => {
    const d = K.daftarSet(); assert.ok(d.length >= 1);
    for (const p of d) {
      const nos = K.soalSet(p.set).map(x => K.noSet(x, p.set));
      assert.equal(nos.length, p.n, p.set);
      assert.deepEqual(J(nos), Array.from({ length: p.n }, (_, i) => i + 1), 'nomor paket ' + p.set + ' harus 1..' + p.n + ' tanpa ganda atau lompat');
    }
  });
});
