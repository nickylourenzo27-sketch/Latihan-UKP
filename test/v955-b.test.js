/* Uji v9.5.5 bagian kedua (K-4): satu soal anggota dua paket lewat sumber.juga. Uji perilaku dengan soal tiruan (tidak ditulis ke js/data/):
   - paket P (10 soal utama) dan paket Q (6 soal utama + 2 soal P lewat juga di nomor 3 dan 7), tersebar di beberapa modul;
   - "Paket 2" tiruan: 46 soal utama 'TO-C-2026-11-2' + 4 soal Try Out UKP B yang diberi juga (nomor 11, 15, 34, 39 = A3-161, A3-162, B6-132, B6-141);
   - data sungguhan pohon kerja (hanya Try Out UKP B): perilaku daftarSet/soalSet/kunci bagian soal sama dengan cara lama.
   K-4a anggotaSet/noSet; K-4b daftarSet; K-4c soalSet; K-4d kunci bagian soal dan simulasi paket; K-4f catatan per id; K-4g validator.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');

const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const B = 'TO-B-2026-11', C2 = 'TO-C-2026-11-2';
const JUDUL_B = 'Try Out UKP B (transkrip 6 Nov 2026)', JUDUL_C2 = 'Try Out UKP C Paket 2 (transkrip 13 Nov 2026)';
const BERSAMA = { 11: 'A3-161', 15: 'A3-162', 34: 'B6-132', 39: 'B6-141' };

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
  return { UKP: ctx.UKP, ctx };
}
// salinan soal biasa (tanpa sumber, kembaranDari, kasusId) dengan id baru <kode>-9nn
function pembuatTiruan(UKP) {
  const K = UKP.konten; const nomor = {};
  const idBaru = k => { nomor[k] = nomor[k] || 900; let id; do { id = k + '-' + String(++nomor[k]).padStart(3, '0'); } while (K.soal(id)); return id; };
  const asal = k => UKP.modul[k].soal.filter(x => !x.sumber && !x.kembaranDari && !x.kasusId);
  return (k, i, sumber) => { const a = asal(k); const x = J(a[(i * 7) % a.length]); delete x.kembaranDari; delete x.sejak; x.id = idBaru(k); x.sumber = sumber; return x; };
}
// paket P: 10 soal utama di A1, B6, C9 (bergantian); paket Q: 6 soal utama (nomor 1,2,4,5,6,8) + P no 2 di Q no 3 dan P no 9 di Q no 7
function sisipPQ(UKP) {
  const buat = pembuatTiruan(UKP); const kodes = ['A1', 'B6', 'C9']; const P = [], Q = [];
  for (let no = 1; no <= 10; no++) { const k = kodes[no % 3]; const x = buat(k, no, { set: 'P', no, judul: 'Paket P (uji)', tingkat: 'C' }); P.push(x); UKP.modul[k].soal.push(x); }
  [1, 2, 4, 5, 6, 8].forEach((no, i) => { const k = ['A2', 'B7'][i % 2]; const x = buat(k, 20 + i, { set: 'Q', no, judul: 'Paket Q (uji)', tingkat: 'C' });
    // satu soal Q di depan modul: urutan modul ≠ urutan nomor
    if (no === 8) UKP.modul[k].soal.unshift(x); else UKP.modul[k].soal.push(x); Q.push(x); });
  P[1].sumber.juga = [{ set: 'Q', no: 3, judul: 'Paket Q (uji)', tingkat: 'C' }];
  P[8].sumber.juga = [{ set: 'Q', no: 7, judul: 'Paket Q (uji)', tingkat: 'C' }];
  return { P, Q };
}
// "Paket 2" tiruan: 46 soal utama (nomor selain 11, 15, 34, 39) tersebar di beberapa modul + 4 soal Try Out UKP B lewat juga
function sisipPaket2(UKP) {
  const K = UKP.konten; const buat = pembuatTiruan(UKP); const kodes = K.semuaKelompok().filter(k => k !== 'E'); let i = 0;
  for (let no = 1; no <= 50; no++) {
    if (BERSAMA[no]) { const x = K.soal(BERSAMA[no]); x.sumber.juga = [{ set: C2, no, judul: JUDUL_C2, tingkat: 'C' }]; continue; }
    const k = kodes[i++ % kodes.length]; const x = buat(k, no, { set: C2, no, judul: JUDUL_C2, tingkat: 'C' });
    if (k === 'A1') UKP.modul[k].soal.unshift(x); else UKP.modul[k].soal.push(x);
  }
}
// cara lama (sebelum K-4) untuk membandingkan perilaku dengan data sungguhan
function lama(UKP) {
  const K = UKP.konten;
  const soalSet = set => K.semuaKelompok().flatMap(k => (UKP.modul[k].soal || []).filter(x => x.sumber && x.sumber.set === set)).sort((a, b) => (Number(a.sumber.no) || 0) - (Number(b.sumber.no) || 0));
  const daftarSet = () => { const peta = new Map();
    K.semuaKelompok().forEach(k => (UKP.modul[k].soal || []).forEach(x => { const sb = x.sumber; if (!sb || !sb.set) return; let d = peta.get(sb.set); if (!d) { d = { set: sb.set, judul: sb.judul || sb.set, label: String(sb.judul || sb.set).replace(/\s*\(.*$/, ''), tingkat: sb.tingkat || (String(sb.set).match(/^TO-([ABC])-/) || [])[1] || null, n: 0, kelompok: [], perKelompok: {} }; peta.set(sb.set, d); } d.n++; if (!d.perKelompok[k]) { d.kelompok.push(k); d.perKelompok[k] = 0; } d.perKelompok[k]++; }));
    return [...peta.values()].sort((a, b) => String(a.set).localeCompare(String(b.set), 'en', { numeric: true })); };
  return { soalSet, daftarSet };
}

describe('v9.5.5 K-4: data sungguhan (hanya Try Out UKP B) berperilaku sama seperti sebelum sumber.juga', () => {
  const { UKP } = muat(); const K = UKP.konten; const O = lama(UKP); const UT = UKP.belajar.ujianTim; const M = UKP.simulasiTim._murni;
  it('daftarSet dan soalSet sama dengan cara lama; 100 soal bernomor 1..100', () => {
    assert.deepEqual(J(K.daftarSet()), J(O.daftarSet()));
    assert.deepEqual(J(K.soalSet(B).map(x => x.id)), J(O.soalSet(B).map(x => x.id)));
    assert.deepEqual(J(K.soalSet(B).map(x => K.noSet(x, B))), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.ok(!K.semuaSoal('C').some(x => x.sumber && x.sumber.juga), 'data pohon kerja belum memuat juga');
  });
  it('anggotaSet soal Try Out UKP B = satu paket utama; soal biasa = []', () => {
    const x = K.soal('A3-161');
    assert.deepEqual(J(K.anggotaSet(x)), [{ set: B, no: 75, judul: JUDUL_B, tingkat: 'B', utama: true }]);
    assert.equal(K.noSet(x, B), 75); assert.equal(K.noSet(x, C2), null); assert.equal(K.noSet(x, ''), null);
    assert.deepEqual(J(K.anggotaSet(K.soal('A1-001'))), []); assert.deepEqual(J(K.anggotaSet(null)), []);
  });
  it('kunci bagian soal dan simulasi paket B tidak berubah', () => {
    const ids = K.soalSet(B).slice(40, 80).map(x => x.id);
    const k = UT.buatKode({ id: 'utb', tingkat: 'B', menit: 84, soalIds: ids }); assert.ok(k.includes('.s' + B + '~41-80.'), k);
    assert.deepEqual(J(UT.bacaKode(k).soalIds), J(ids));
    const a = M.susunAttempt({ format: 'tryout', kode: B, tingkat: 'B' });
    assert.deepEqual(J(a.soalIds), J(O.soalSet(B).map(x => x.id))); assert.equal(a.menit, 210);
  });
});

describe('v9.5.5 K-4a: anggotaSet dan noSet', () => {
  const { UKP } = muat(); const K = UKP.konten;
  const so = juga => ({ id: 'X', sumber: { set: 'P', no: 4, judul: 'Paket P (uji)', tingkat: 'C', juga } });
  it('utama lebih dulu, lalu juga, nomor sendiri tiap paket', () => {
    const x = so([{ set: 'Q', no: 3, judul: 'Paket Q (uji)', tingkat: 'C' }, { set: 'R', no: '9' }]);
    assert.deepEqual(J(K.anggotaSet(x).map(a => [a.set, a.no, a.utama])), [['P', 4, true], ['Q', 3, false], ['R', 9, false]]);
    assert.equal(K.noSet(x, 'P'), 4); assert.equal(K.noSet(x, 'Q'), 3); assert.equal(K.noSet(x, 'R'), 9); assert.equal(K.noSet(x, 'S'), null);
  });
  it('butir juga yang cacat diabaikan (bukan objek, tanpa set atau no, no bukan bulat positif, set sama dengan utama atau ganda)', () => {
    const x = so([null, 'Q', { set: 'Q' }, { no: 3 }, { set: 'Q', no: 0 }, { set: 'Q', no: 2.5 }, { set: 'P', no: 7 }, { set: 'Q', no: 3 }, { set: 'Q', no: 5 }]);
    assert.deepEqual(J(K.anggotaSet(x).map(a => [a.set, a.no])), [['P', 4], ['Q', 3]]);
    assert.deepEqual(J(K.anggotaSet(so('bukan larik')).map(a => a.set)), ['P']);
    assert.deepEqual(J(K.anggotaSet(so({ set: 'Q', no: 3 })).map(a => a.set)), ['P']);
  });
});

describe('v9.5.5 K-4b sampai K-4d: paket P (10) dan Q (6 + 2 bersama)', () => {
  const { UKP } = muat(); const K = UKP.konten; const { P, Q } = sisipPQ(UKP); const UT = UKP.belajar.ujianTim; const M = UKP.simulasiTim._murni;
  it('daftarSet: n P = 10, n Q = 8; perKelompok dan kelompok menghitung anggota lewat juga; judul dari utama', () => {
    const d = K.daftarSet(); const p = d.find(x => x.set === 'P'), q = d.find(x => x.set === 'Q');
    assert.equal(p.n, 10); assert.equal(q.n, 8);
    const hit = arr => arr.reduce((o, x) => { o[x.kode] = (o[x.kode] || 0) + 1; return o; }, {});
    assert.deepEqual(J(p.perKelompok), hit(P)); assert.deepEqual(J(q.perKelompok), hit(Q.concat([P[1], P[8]])));
    assert.deepEqual(J(q.kelompok.slice().sort()), Object.keys(hit(Q.concat([P[1], P[8]]))).sort());
    assert.equal(Object.values(q.perKelompok).reduce((a, b) => a + b, 0), 8);
    assert.equal(q.judul, 'Paket Q (uji)'); assert.equal(q.label, 'Paket Q'); assert.equal(q.tingkat, 'C');
    assert.deepEqual(J(d.map(x => x.set)), ['P', 'Q', B], 'urutan menurut kode paket');
    assert.ok(!('dariUtama' in p), 'field bantu tidak ikut keluar');
  });
  it('daftarSet: paket yang hanya punya anggota lewat juga memakai judul dan tingkat butir juga', () => {
    P[4].sumber.juga = [{ set: 'R', no: 1, judul: 'Paket R (uji) (catatan)', tingkat: 'A' }];
    try {
      const r = K.daftarSet().find(x => x.set === 'R');
      assert.deepEqual(J([r.n, r.judul, r.label, r.tingkat]), [1, 'Paket R (uji) (catatan)', 'Paket R', 'A']);
    } finally { delete P[4].sumber.juga; }
  });
  it('daftarSet: judul anggota utama menang atas judul butir juga walau butir juga terbaca lebih dulu', () => {
    // P[1] (A1/B6/C9 modul lebih awal) membawa juga ke Q dengan judul lain; soal utama Q tetap menentukan judul
    P[1].sumber.juga = [{ set: 'Q', no: 3, judul: 'Judul lain (x)', tingkat: 'B' }];
    try { const q = K.daftarSet().find(x => x.set === 'Q'); assert.equal(q.judul, 'Paket Q (uji)'); assert.equal(q.tingkat, 'C'); }
    finally { P[1].sumber.juga = [{ set: 'Q', no: 3, judul: 'Paket Q (uji)', tingkat: 'C' }]; }
  });
  it('soalSet(Q): 8 soal urut nomor Q, soal bersama di urutan ke-3 dan ke-7, tanpa id ganda', () => {
    const q = K.soalSet('Q');
    assert.equal(q.length, 8); assert.equal(new Set(q.map(x => x.id)).size, 8);
    assert.deepEqual(J(q.map(x => K.noSet(x, 'Q'))), [1, 2, 3, 4, 5, 6, 7, 8]);
    assert.equal(q[2].id, P[1].id); assert.equal(q[6].id, P[8].id);
    assert.equal(K.noSet(P[1], 'P'), 2); assert.equal(K.noSet(P[1], 'Q'), 3);
    const p = K.soalSet('P'); assert.equal(p.length, 10); assert.deepEqual(J(p.map(x => x.id)), J(P.map(x => x.id)));
  });
  it('soal bersama tetap satu soal di bank (dihitung sekali, satu id di satu modul)', () => {
    const semua = K.semuaKelompok().flatMap(k => UKP.modul[k].soal).map(x => x.id);
    assert.equal(semua.filter(id => id === P[1].id).length, 1);
    assert.equal(K.semuaSoal('C').filter(x => x.id === P[8].id).length, 1);
  });
  it('kunci bagian soal Q pulang-pergi (utuh, rentang berisi soal bersama, satu soal bersama)', () => {
    const q = K.soalSet('Q').map(x => x.id);
    for (const [ids, kunci] of [[q, 'sQ~1-8'], [q.slice(1, 5), 'sQ~2-5'], [q.slice(4, 8), 'sQ~5-8']]) {
      const k = UT.buatKode({ id: 'utq', tingkat: 'C', menit: 10, soalIds: ids });
      assert.ok(k.includes('.' + kunci + '.'), k);
      const r = UT.bacaKode(k); assert.deepEqual(J(r.soalIds), J(ids)); assert.deepEqual(J(r.tidakDikenal), []);
    }
    // P tetap memakai nomor P untuk soal yang sama
    const kp = UT.buatKode({ id: 'utp', tingkat: 'C', menit: 10, soalIds: K.soalSet('P').map(x => x.id) }); assert.ok(kp.includes('.sP~1-10.'), kp);
    assert.deepEqual(J(UT.bacaKode(kp).soalIds), J(P.map(x => x.id)));
    const k1 = UT.buatKode({ id: 'ut1', tingkat: 'C', menit: 3, soalIds: [P[8].id] }); assert.deepEqual(J(UT.bacaKode(k1).soalIds), [P[8].id]);
  });
  it('simulasi paket Q utuh dan bagian: urutan nomor Q, soal bersama di tempatnya, tanpa id ganda', () => {
    const a = M.susunAttempt({ format: 'tryout', kode: 'Q', tingkat: 'C' });
    assert.deepEqual(J(a.soalIds), J(K.soalSet('Q').map(x => x.id))); assert.equal(new Set(a.soalIds).size, 8); assert.equal(a.soalIds[2], P[1].id);
    assert.equal(a.menit, M.waktuPaket(K.daftarSet().find(x => x.set === 'Q'), 'C').menit);
    const b = M.susunAttempt({ format: 'tryout', kode: 'Q', tingkat: 'C', dari: 3, sampai: 7 });
    assert.deepEqual(J(b.soalIds), J(K.soalSet('Q').slice(2, 7).map(x => x.id))); assert.equal(b.soalIds[0], P[1].id); assert.equal(b.soalIds[4], P[8].id); assert.equal(b.bagian, '3–7');
    const perKel = {}; b.soalIds.forEach(id => { const k = K.soal(id).kode; perKel[k] = (perKel[k] || 0) + 1; }); assert.deepEqual(J(b.perKel), perKel);
  });
  it('Latih: jumlah soal room/latih paket Q = 8 dan urutan "Semua" = urutan asli Q', () => {
    assert.equal(UKP.latihBank.jumlahMulaiRoom({ n: 50, set: 'Q' }), 8);
    const u = UKP.latihBank.urutLatih(K.soalSet('Q'), { n: 'semua', set: 'Q', bank: 'campur' }, {});
    assert.deepEqual(J(u.map(x => x.id)), J(K.soalSet('Q').map(x => x.id)));
  });
});

describe('v9.5.5 K-4: "Paket 2" tiruan (46 utama + 4 soal Try Out UKP B lewat juga)', () => {
  const { UKP } = muat(); const K = UKP.konten; const O = lama(UKP); const urutB = O.soalSet(B).map(x => x.id); sisipPaket2(UKP);
  const UT = UKP.belajar.ujianTim; const M = UKP.simulasiTim._murni; const Pk = UKP.belajar.pakai;
  it('daftarSet: Paket 2 = 50 soal dengan judul/tingkat paket C; Try Out UKP B tetap 100', () => {
    const d = K.daftarSet(); const c2 = d.find(x => x.set === C2), b = d.find(x => x.set === B);
    assert.deepEqual(J([c2.n, c2.label, c2.tingkat]), [50, 'Try Out UKP C Paket 2', 'C']); assert.deepEqual(J([b.n, b.label, b.tingkat]), [100, 'Try Out UKP B', 'B']);
    assert.ok(c2.kelompok.includes('A3') && c2.kelompok.includes('B6'));
  });
  it('soalSet: Paket 2 urutan ke-11 = A3-161, ke-15 = A3-162, ke-34 = B6-132, ke-39 = B6-141; Try Out UKP B urutan lama', () => {
    const c = K.soalSet(C2); assert.equal(c.length, 50); assert.equal(new Set(c.map(x => x.id)).size, 50);
    for (const no of Object.keys(BERSAMA)) assert.equal(c[no - 1].id, BERSAMA[no], 'no ' + no);
    assert.deepEqual(J(K.soalSet(B).map(x => x.id)), J(urutB));
    assert.equal(K.noSet(K.soal('A3-161'), B), 75); assert.equal(K.noSet(K.soal('A3-161'), C2), 11);
  });
  it('simulasi Paket 2 utuh (50, 105 menit) dan bagian 1–40 / 41–50', () => {
    const a = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C' });
    assert.equal(a.soalIds.length, 50); assert.equal(a.soalIds[10], 'A3-161'); assert.equal(a.soalIds[38], 'B6-141'); assert.equal(a.menit, 105);
    const b1 = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C', dari: 1, sampai: 40 });
    assert.equal(b1.soalIds.length, 40); assert.equal(b1.soalIds[10], 'A3-161'); assert.ok(!b1.soalIds.includes(undefined)); assert.equal(M.labelSim(b1), 'Try Out UKP C Paket 2 · soal 1–40');
    const b2 = M.susunAttempt({ format: 'tryout', kode: C2, tingkat: 'C', dari: 41, sampai: 50 }); assert.equal(b2.soalIds.length, 10);
    assert.equal(b1.soalIds.filter(x => b2.soalIds.includes(x)).length, 0);
    const tb = M.susunAttempt({ format: 'tryout', kode: B, tingkat: 'B' }); assert.deepEqual(J(tb.soalIds), J(urutB)); assert.equal(tb.soalIds[74], 'A3-161');
  });
  it('ujian tim Paket 2 bagian 1–40: kunci sTO-C-2026-11-2~1-40 memuat soal bersama di urutan ke-11', () => {
    const ids = K.soalSet(C2).slice(0, 40).map(x => x.id);
    const k = UT.buatKode({ id: 'ut2', judul: 'Paket 2', tingkat: 'C', menit: 84, soalIds: ids });
    assert.ok(k.includes('.s' + C2 + '~1-40.'), k);
    const r = UT.bacaKode(k); assert.deepEqual(J(r.soalIds), J(ids)); assert.equal(r.soalIds[10], 'A3-161'); assert.equal(r.soalIds[33], 'B6-132'); assert.deepEqual(J(r.tidakDikenal), []);
    // Try Out UKP B 41–80 tetap memakai nomor B (A3-161 = no 75)
    const idsB = K.soalSet(B).slice(40, 80).map(x => x.id); const kb = UT.buatKode({ id: 'ut3', tingkat: 'B', menit: 84, soalIds: idsB });
    assert.ok(kb.includes('.s' + B + '~41-80.'), kb); assert.equal(UT.bacaKode(kb).soalIds[34], 'A3-161');
  });
  it('K-4f: soal bersama yang dipakai di Paket 2 tercatat per id (A3-161), juga terlihat dari Try Out UKP B', () => {
    Pk.catatBanyak(K.soalSet(C2).slice(0, 40).map(x => x.id), 'ujian', Date.now(), true);
    assert.equal(Pk.ringkas(K.soalSet(B).filter(x => Object.values(BERSAMA).includes(x.id))).terpakai, 4);
    assert.equal(Pk.ringkas(K.soalSet(B)).terpakai, 4, 'keempat soal bersama (no 11, 15, 34, 39) ada di bagian 1–40; soal Try Out UKP B lain tidak tersentuh');
    assert.equal(Pk.ringkas(K.soalSet(C2)).terpakai, 40);
  });
});

describe('v9.5.5 K-4g: validator mengenali dan memeriksa sumber.juga', () => {
  // modul A3 sungguhan ditulis ulang sebagai berkas sementara js/data/mu-A3.js lain, dengan juga yang diubah tiap kasus
  const muatA3 = () => { let m; new Function('UKP', fs.readFileSync(path.join(ROOT, 'js', 'data', 'mu-A3.js'), 'utf8'))({ register(x) { m = x; } }); return m; };
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'v955b-'));
  const jalankan = ubah => { const m = muatA3(); ubah(m.soal.find(x => x.id === 'A3-161'), m); const f = path.join(dir, 'mu-A3.js'); fs.writeFileSync(f, 'UKP.register(' + JSON.stringify(m) + ');\n');
    const r = spawnSync(process.execPath, [path.join(ROOT, 'tools', 'validate-module.js'), f], { encoding: 'utf8' }); return { kode: r.status, teks: r.stdout + r.stderr }; };
  const juga = (no, set) => ({ set: set || C2, no, judul: JUDUL_C2, tingkat: 'C' });
  it('juga yang sah lolos (bentuk keputusan)', () => {
    const r = jalankan(x => { x.sumber.juga = [juga(11)]; }); assert.equal(r.kode, 0, r.teks); assert.ok(/OK/.test(r.teks));
  });
  it('juga cacat ditolak: bukan larik, butir tanpa set atau no, set = paket utama, paket ganda, nomor ganda di satu paket', () => {
    const kasus = [
      [x => { x.sumber.juga = juga(11); }, /sumber\.juga harus larik/],
      [x => { x.sumber.juga = ['TO-C-2026-11-2']; }, /harus objek/],
      [x => { x.sumber.juga = [{ no: 11 }]; }, /set hilang/],
      [x => { x.sumber.juga = [{ set: C2 }]; }, /no harus bilangan bulat positif/],
      [x => { x.sumber.juga = [juga(0)]; }, /no harus bilangan bulat positif/],
      [x => { x.sumber.juga = [juga(11, B)]; }, /sama dengan paket utama/],
      [x => { x.sumber.juga = [juga(11), juga(12)]; }, /ganda di sumber\.juga/],
      [(x, m) => { x.sumber.juga = [juga(11)]; m.soal.find(y => y.id === 'A3-162').sumber.juga = [juga(11)]; }, /nomor 11 paket "TO-C-2026-11-2" ganda/],
      [(x, m) => { const lain = m.soal.find(y => y.sumber && y.sumber.set === B && y.id !== 'A3-161'); x.sumber.juga = [{ set: 'TO-X', no: lain.sumber.no }]; lain.sumber.juga = [{ set: 'TO-X', no: lain.sumber.no }]; }, /paket "TO-X" ganda/],
    ];
    for (const [ubah, pola] of kasus) { const r = jalankan(ubah); assert.equal(r.kode, 1, r.teks); assert.ok(pola.test(r.teks), pola + '\n' + r.teks); }
  });
  it('nomor utama ganda di satu paket dalam modul juga ditolak', () => {
    const r = jalankan((x, m) => { m.soal.find(y => y.id === 'A3-162').sumber.no = x.sumber.no; }); assert.equal(r.kode, 1); assert.ok(/nomor 75 paket "TO-B-2026-11" ganda/.test(r.teks), r.teks);
  });
});
