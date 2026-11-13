/* Uji v9.5.5 (pengerja kode): tiga paket try out dan dua sisa v9.5.4. Uji perilaku dengan soal tiruan (tidak ditulis ke js/data/):
   100 soal 'TO-C-2026-11-1' dan 50 soal 'TO-C-2026-11-2' disalin dari soal yang ada (id dan sumber diganti), tersebar di modul A1 sampai C10,
   sebagian bertingkat hanya C, dan sebagian disisipkan di depan modul A1 agar urutan modul tidak sama dengan urutan kode paket.
   K-3b urutan daftarSet dan paket bawaan; K-3c waktu bawaan paket utuh; K-3d bagian paket 50 soal dan kunci bagian soal per paket;
   K-3a kode paket berakhiran di kode hasil dan ringkasan tim (pulang-pergi, juga server deploy/lib-hasil.js);
   K-1 tombol "Ulangi N dari Buku Kesalahan"; K-2 label "Latih butir ini" di Bank soal tanpa ganda.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const C1 = 'TO-C-2026-11-1', C2 = 'TO-C-2026-11-2', B = 'TO-B-2026-11';
const JUDUL = { [C1]: 'Try Out UKP C Paket 1 (transkrip 13 Nov 2026)', [C2]: 'Try Out UKP C Paket 2 (transkrip 13 Nov 2026)' };

// ---------- DOM tiruan kecil: cukup untuk UKP.h, UKP.icon, dan membaca teks tombol ----------
function domTiruan() {
  class El {
    constructor(tag) { this.tagName = String(tag).toUpperCase(); this.attr = new Map(); this.children = []; this.style = {}; this.dataset = {}; this._teks = ''; this.listener = {};
      this.classList = { add: () => {}, remove: () => {}, contains: () => false }; }
    set className(v) { this.attr.set('class', v); } get className() { return this.attr.get('class') || ''; }
    setAttribute(k, v) { this.attr.set(k, String(v)); } getAttribute(k) { return this.attr.has(k) ? this.attr.get(k) : null; } removeAttribute(k) { this.attr.delete(k); }
    addEventListener(t, f) { (this.listener[t] = this.listener[t] || []).push(f); }
    appendChild(c) { this.children.push(c); return c; }
    set innerHTML(v) { this._html = v; } get innerHTML() { return this._html || ''; }
    set textContent(v) { this._teks = String(v); this.children = []; }
    get textContent() { return this.tagName === 'SVG' ? '' : this._teks + this.children.map(c => c.textContent).join(''); }
  }
  return {
    addEventListener() {}, removeEventListener() {}, body: null, head: null, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
    createElement: t => new El(t), createElementNS: (ns, t) => new El(t), createTextNode: t => { const e = new El('#text'); e._teks = String(t); return e; },
    documentElement: new El('html'),
  };
}

// ---------- pemuat: core + data + learn + tim + views (konteks vm) ----------
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
  for (const b of ['learn.js', 'tim.js', 'views-belajar.js', 'views-simulasi.js', 'views-alat.js', 'views-bank.js']) jalankan('js/' + b);
  return { UKP: ctx.UKP, ctx };
}

// soal tiruan: salinan soal yang ada (tanpa sumber dan kembaranDari), id baru <kode>-9nn, sumber paket C; tersebar di semua kelompok
function sisipTiruan(UKP) {
  const K = UKP.konten; const kodes = K.semuaKelompok().filter(k => k !== 'E');
  const nomor = {}; const idBaru = k => { nomor[k] = nomor[k] || 900; let id; do { id = k + '-' + String(++nomor[k]).padStart(3, '0'); } while (K.soal(id)); return id; };
  const sumberSoal = {}; kodes.forEach(k => { sumberSoal[k] = UKP.modul[k].soal.filter(x => !x.sumber && !x.kembaranDari && !x.kasusId); });
  const hanyaC = kodes.filter(k => k[0] === 'C');
  let i = 0;
  for (const [set, n] of [[C1, 100], [C2, 50]]) {
    for (let no = 1; no <= n; no++, i++) {
      const k = no % 5 === 0 ? hanyaC[no % hanyaC.length] : kodes[i % kodes.length];
      const src = sumberSoal[k][(no * 7) % sumberSoal[k].length];
      const x = J(src); delete x.kembaranDari; delete x.sejak; x.id = idBaru(k); x.sumber = { set, no, judul: JUDUL[set], tingkat: 'C' };
      if (no % 5 === 0) x.tingkat = ['C'];
      // beberapa soal paket 2 di depan modul A1: urutan modul ≠ urutan kode paket
      if (set === C2 && k === 'A1') UKP.modul[k].soal.unshift(x); else UKP.modul[k].soal.push(x);
    }
  }
}

describe('v9.5.5 K-3b: urutan daftarSet dan paket bawaan', () => {
  const { UKP } = muat(); const K = UKP.konten;
  it('tanpa soal tiruan: satu paket Try Out UKP B (data pohon kerja)', () => {
    assert.deepEqual(J(K.daftarSet().map(p => p.set)), [B]);
    assert.equal(K.setBawaan('C').set, B, 'tidak ada paket C → paket pertama');
  });
  it('dengan soal tiruan: urutan tetap menurut kode paket walau soal paket 2 ada di depan modul A1', () => {
    sisipTiruan(UKP);
    assert.equal(UKP.modul.A1.soal[0].sumber.set, C2, 'prasyarat: modul pertama dimulai dengan soal paket 2');
    const d = K.daftarSet();
    assert.deepEqual(J(d.map(p => p.set)), [B, C1, C2]);
    assert.deepEqual(J(d.map(p => p.n)), [100, 100, 50]);
    assert.deepEqual(J(d.map(p => p.tingkat)), ['B', 'C', 'C']);
    assert.deepEqual(J(d.map(p => p.label)), ['Try Out UKP B', 'Try Out UKP C Paket 1', 'Try Out UKP C Paket 2']);
    assert.ok(d[1].kelompok.length >= 8, 'paket C tersebar di banyak kelompok');
    // soalSet tetap urutan asli 1..n
    assert.deepEqual(J(K.soalSet(C2).map(x => x.sumber.no)), Array.from({ length: 50 }, (_, i) => i + 1));
  });
  it('paket bawaan menurut tingkat target: A → paket pertama (B), B → Try Out UKP B, C → Try Out UKP C Paket 1', () => {
    assert.equal(K.setBawaan('A').set, B);
    assert.equal(K.setBawaan('B').set, B);
    assert.equal(K.setBawaan('C').set, C1);
  });
  it('soal tiruan bertingkat hanya C ikut bank C saja; yang lintas tingkat ikut bank A dan B', () => {
    const c = K.soalSet(C1);
    assert.ok(c.some(x => J(x.tingkat).join() === 'C'));
    assert.ok(K.semuaSoal('B').some(x => x.sumber && x.sumber.set === C1));
    assert.ok(!K.semuaSoal('B').some(x => x.sumber && x.sumber.set === C1 && J(x.tingkat).join() === 'C'));
  });
});

describe('v9.5.5 K-3c dan K-3d: waktu bawaan paket utuh, bagian paket 50 soal, label', () => {
  const { UKP } = muat(); sisipTiruan(UKP); const K = UKP.konten; const M = UKP.simulasiTim._murni;
  const paket = set => K.daftarSet().find(p => p.set === set);
  it('waktuPaket: 100 soal = soal baku tingkat → durasi baku (210, baku); 50 soal → tempo ujian (105, bukan baku)', () => {
    assert.deepEqual(J(M.waktuPaket(paket(B), 'B')), { menit: 210, baku: true, tingkat: 'B' });
    assert.deepEqual(J(M.waktuPaket(paket(C1), 'B')), { menit: 210, baku: true, tingkat: 'C' });
    assert.deepEqual(J(M.waktuPaket(paket(C2), 'B')), { menit: 105, baku: false, tingkat: 'C' });
    assert.equal(105, Math.round(50 * UKP.belajar.tempoUjian('C') / 60));
  });
  it('susunAttempt paket utuh: menit = waktu bawaan; 50 soal tidak lagi 210 menit; urutan asli', () => {
    const a1 = M.susunAttempt({ format: 'tryout', kode: C1, tingkat: 'C' });
    assert.equal(a1.menit, 210); assert.equal(a1.soalIds.length, 100); assert.equal(a1.bagian, null);
    const a2 = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C' });
    assert.equal(a2.menit, 105); assert.equal(a2.soalIds.length, 50); assert.equal(a2.akhir - a2.mulai, 105 * 60000);
    assert.deepEqual(J(a2.soalIds), J(K.soalSet(C2).map(x => x.id)));
    const ab = M.susunAttempt({ format: 'tryout', kode: B, tingkat: 'B' }); assert.equal(ab.menit, 210);
    // menit pilihan pengguna tetap dihormati
    assert.equal(M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C', menit: 77 }).menit, 77);
  });
  it('bagian paket 50 soal: Semua, 1–40, 41–50; susunAttempt bagian 41–50 = 10 soal, 21 menit, label "soal 41–50"', () => {
    assert.deepEqual(J(M.potonganTO(50).map(x => x.label)), ['Semua', '1–40', '41–50']);
    assert.deepEqual(J(M.potonganTO(100).map(x => x.label)), ['Semua', '1–40', '41–80', '81–100']);
    const a = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C', dari: 41, sampai: 50 });
    assert.equal(a.soalIds.length, 10); assert.equal(a.menit, 21); assert.equal(a.bagian, '41–50');
    assert.deepEqual(J(a.soalIds), J(K.soalSet(C2).slice(40).map(x => x.id)));
    assert.equal(M.labelSim(a), 'Try Out UKP C Paket 2 · soal 41–50');
    assert.equal(M.labelSim({ format: 'tryout', kode: C1 }), 'Try Out UKP C Paket 1 · 100 soal');
    assert.equal(M.labelSim({ format: 'tryout', kode: C2 }), 'Try Out UKP C Paket 2 · 50 soal');
  });
});

describe('v9.5.5 K-3d: kunci bagian soal ujian tim dan catatan pemakaian tidak bercampur antarpaket', () => {
  const { UKP } = muat(); sisipTiruan(UKP); const K = UKP.konten; const UT = UKP.belajar.ujianTim; const P = UKP.belajar.pakai;
  const ids = (set, a, b) => K.soalSet(set).slice(a - 1, b).map(x => x.id);
  it('kode ujian tim memakai kunci s<paket>~<rentang> untuk paket berakhiran dan terbaca kembali utuh', () => {
    for (const [set, a, b] of [[C1, 41, 80], [C2, 41, 50], [C2, 1, 40], [B, 41, 80]]) {
      const k = UT.buatKode({ id: 'ut955', judul: 'Uji', tingkat: 'C', menit: 50, soalIds: ids(set, a, b) });
      assert.ok(k.includes('.s' + set + '~' + a + '-' + b + '.'), k);
      const r = UT.bacaKode(k); assert.ok(r, k);
      assert.deepEqual(J(r.soalIds), J(ids(set, a, b))); assert.deepEqual(J(r.tidakDikenal), []);
    }
  });
  it('rentang yang sama di paket berbeda berisi soal berbeda; kunci paket 1 tidak membaca soal paket 2', () => {
    const k1 = UT.buatKode({ id: 'ut1', tingkat: 'C', menit: 21, soalIds: ids(C1, 41, 50) });
    const k2 = UT.buatKode({ id: 'ut1', tingkat: 'C', menit: 21, soalIds: ids(C2, 41, 50) });
    assert.notEqual(k1, k2);
    const r1 = UT.bacaKode(k1).soalIds, r2 = UT.bacaKode(k2).soalIds;
    assert.equal(r1.filter(x => r2.includes(x)).length, 0);
  });
  it('catatan "sudah dipakai" per soal: mengujikan paket 2 soal 41–50 tidak menandai paket 1 soal 41–50', () => {
    P.catatBanyak(ids(C2, 41, 50), 'ujian', Date.now(), true);
    assert.equal(P.ringkas(K.soalSet(C2).slice(40)).terpakai, 10);
    assert.equal(P.ringkas(K.soalSet(C1).slice(40, 50)).terpakai, 0);
    assert.equal(P.ringkas(K.soalSet(B).slice(40, 50)).terpakai, 0);
  });
});

describe('v9.5.5 K-3a: kode paket berakhiran di kode hasil dan ringkasan tim', () => {
  const { UKP } = muat(); sisipTiruan(UKP); const K = UKP.konten; const T = UKP.tim;
  const kini = Date.now();
  const simC = set => { const s = K.soalSet(set); const jw = {}; s.forEach((x, i) => { jw[x.id] = i % 2 ? x.kunci : (x.kunci === 'A' ? 'B' : 'A'); });
    const perKel = {}; s.forEach(x => { perKel[x.kode] = perKel[x.kode] || { benar: 0, total: 0 }; perKel[x.kode].total++; if (jw[x.id] === x.kunci) perKel[x.kode].benar++; });
    const benar = s.filter(x => jw[x.id] === x.kunci).length;
    return { id: 'sim-' + set, format: 'tryout', tingkat: 'C', kode: set, mulai: kini - 3600000, selesai: kini, skor: Math.round(benar / s.length * 1000) / 10, benar, total: s.length, soalIds: s.map(x => x.id), jawaban: jw, perKel, menit: set === C2 ? 105 : 210 }; };
  const state = () => ({ profil: { nama: 'Nicky', tingkat: 'C' }, jawaban: [], sesi: [], simulasi: [simC(C1), simC(C2), simC(B)] });
  it('ringkasan → kode hasil (JSON) → tempel: kode paket TO-C-2026-11-1 dan TO-C-2026-11-2 terbaca benar', () => {
    const muatan = Object.assign({ id: 'lokal-955abc' }, T._ringkasan(state(), { kini }));
    assert.deepEqual(J(muatan.simulasi.map(x => x.kode)), [C1, C2, B]);
    const a = T._bacaKode(T._kodeJson(muatan)); assert.ok(a);
    assert.deepEqual(J(a.simulasi.map(x => x.kode)), [C1, C2, B]);
    assert.deepEqual(J(a.simulasi.map(x => x.jumlah)), [100, 50, 100]);
    assert.deepEqual(J(a.simulasi.map(x => x.format)), ['tryout', 'tryout', 'tryout']);
  });
  it('normalAnggota (data tak tepercaya): kode paket sah lolos, bentuk lain tetap ditolak', () => {
    const coba = kode => T._normalAnggota({ nama: 'X', simulasi: [{ id: 's', format: 'tryout', kode, jumlah: 10, benar: 5, skor: 50 }] }, 'id1', 'kode').simulasi[0].kode;
    for (const k of [B, C1, C2, 'TO-A-2027-01-12', 'A1', 'C10']) assert.equal(coba(k), k, k);
    for (const k of ['TO-C-2026-11-123', 'TO-C-2026-11-', 'TO-D-2026-11', 'TO-C-2026-1-1', 'TO-C-2026-11-1 ', 'TO-C-2026-11-a']) assert.equal(coba(k), null, k);
  });
  it('server tim (deploy/lib-hasil.js) menerima kode paket yang sama', () => {
    const lib = require(path.join(ROOT, 'deploy', 'lib-hasil.js'));
    const raw = J(Object.assign({}, T._ringkasan(state(), { kini })));
    lib.periksa(raw);
    const n = lib.normalkan(raw, 'Nicky', kini);
    assert.deepEqual(n.simulasi.map(x => x.kode), [C1, C2, B]);
    assert.equal(lib.normalkan({ simulasi: [{ kode: 'TO-C-2026-11-123' }] }, 'X', kini).simulasi[0].kode, null);
  });
});

describe('v9.5.5 K-1: tombol "Ulangi N dari Buku Kesalahan" (N = soal yang benar-benar dimulai)', () => {
  const { UKP, ctx } = muat(); ctx.document = domTiruan(); const K = UKP.konten;
  const s = UKP.store.get(); s.profil.tingkat = 'B';
  // soal keliru dari keluarga berbeda (satu soal per akar), tingkat B
  const calon = []; const akar = new Set();
  for (const x of K.semuaSoal('B')) { const r = K.akar(x) || x.id; if (akar.has(r)) continue; akar.add(r); calon.push(x); if (calon.length >= 15) break; }
  const isiSalah = n => { s.jawaban = calon.slice(0, n).map((x, i) => ({ soal: x.id, topik: x.topik, kode: x.kode, benar: false, opsi: '-' === x.kunci ? 'A' : (x.kunci === 'A' ? 'B' : 'A'), tag: null, detik: 10, konteks: 'latih', pada: Date.now() - i })); };
  const tombol = () => UKP.c.tombolUlangSalah();
  it('N = 0: tombol tidak ditampilkan', () => {
    isiSalah(0); assert.equal(UKP.latihBank.nLatihSalah(10), 0); assert.equal(tombol(), null);
  });
  it('N = 4: "Ulangi 4 dari Buku Kesalahan"', () => {
    isiSalah(4); assert.equal(UKP.latihBank.nLatihSalah(10), 4);
    const b = tombol(); assert.ok(b); assert.equal(b.textContent, 'Ulangi 4 dari Buku Kesalahan');
  });
  it('N = 10 (15 soal keliru, sesi dibatasi 10): "Ulangi 10 dari Buku Kesalahan"; parameter sesi tidak berubah', () => {
    isiSalah(15); const b = tombol(); assert.equal(b.textContent, 'Ulangi 10 dari Buku Kesalahan');
    let pergi = null; const asli = UKP.go; UKP.go = (v, p) => { pergi = [v, J(p)]; };
    try { b.listener.click[0]({}); } finally { UKP.go = asli; }
    assert.deepEqual(pergi, ['latih', { hanyaSalah: true, n: 10, mulai: true }]);
  });
  it('tanpa UKP.latihBank: cadangan seperti nLatihTopik (10)', () => {
    const lb = UKP.latihBank; UKP.latihBank = undefined;
    try { assert.equal(tombol().textContent, 'Ulangi 10 dari Buku Kesalahan'); } finally { UKP.latihBank = lb; }
  });
});

describe('v9.5.5 K-2: label "Latih butir ini" di Bank soal memakai pembantu Cakupan; 0 label ganda untuk A, B, C', () => {
  const { UKP } = muat(); const K = UKP.konten; const CK = UKP.cakupan;
  const daun = t => { const out = []; for (const m of UKP.cakupanResmi.tingkat[t].mataUjian) for (const sj of m.subjek || []) CK.telusuri(sj.butir, b => { if (!(Array.isArray(b.anak) && b.anak.length) && typeof b.id === 'string') out.push(b); }); return out; };
  const ganda = arr => { const n = new Map(); arr.forEach(l => n.set(l, (n.get(l) || 0) + 1)); return [...n].filter(([, c]) => c > 1).map(([l]) => l); };
  for (const t of ['A', 'B', 'C']) {
    it('Tingkat ' + t + ': Bank soal (butir bersoal) dan Cakupan (semua butir daun) tanpa label ganda', () => {
      const semua = daun(t); assert.ok(semua.length > 10);
      const bank = semua.filter(b => K.soalButir(b.id, t).length).map(b => { const info = CK.butir(b.id); return UKP.c.labelLatihBank(b, t, info && info.nomor); });
      assert.deepEqual(ganda(bank), [], 'Bank soal');
      assert.deepEqual(ganda(semua.map(b => CK.labelLatih(b, t))), [], 'Cakupan');
      assert.ok(bank.every(l => /^Latih butir /.test(l)));
    });
  }
  it('Tingkat C: C.1.1 dan C.1.5, juga C.1.2 dan C.1.6, dulu berlabel sama; kini berbeda dan sama dengan label Cakupan', () => {
    const per = new Map(daun('C').map(b => [b.id, b]));
    const lamaBank = b => { const i = CK.butir(b.id); const t = String(b.teks || ''); const p = t.lastIndexOf(' ', 59);
      return 'Latih butir ' + ((i && i.nomor) || b.id) + ': ' + (t.length <= 60 ? t : t.slice(0, p > 36 ? p : 59).replace(/[\s,.;:]+$/, '') + '…'); };
    for (const [x, y] of [['C.1.1', 'C.1.5'], ['C.1.2', 'C.1.6']]) {
      const bx = per.get(x), by = per.get(y); assert.ok(bx && by, x + ' dan ' + y + ' ada');
      assert.equal(lamaBank(bx), lamaBank(by), 'prasyarat: label lama ' + x + ' = ' + y);
      const lx = UKP.c.labelLatihBank(bx, 'C', CK.butir(x).nomor), ly = UKP.c.labelLatihBank(by, 'C', CK.butir(y).nomor);
      assert.notEqual(lx, ly); assert.equal(lx, CK.labelLatih(bx, 'C')); assert.equal(ly, CK.labelLatih(by, 'C'));
    }
  });
  it('tanpa UKP.cakupan.labelLatih: label lama', () => {
    const b = daun('B')[0]; const asli = CK.labelLatih; CK.labelLatih = undefined;
    try { assert.match(UKP.c.labelLatihBank(b, 'B', '1.a'), /^Latih butir 1\.a: /); } finally { CK.labelLatih = asli; }
  });
});
