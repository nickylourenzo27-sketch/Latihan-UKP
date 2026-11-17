/* Uji v9.7.0 (data asli): paket Latihan UKP B per mata uji (LM-B-2026-11) dan penjelasan mudah. Jalankan: node --test test/
   Memuat js/data apa adanya seperti test/v955-data.test.js. Harapan angka ada di test/_harap-970.js. */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { LM, JUDUL, MODUL, TAHAP, HARAP, LM_TANPA_B_NO } = require('./_harap-970');
const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const sha = t => crypto.createHash('sha256').update(t).digest('hex');

// Sidik soal lama: semua soal di luar paket LM, tanpa kode dan tanpa pembahasan.mudah.
// v9.7.0: bukan lagi sidik v9.6.6 (e8b33bb43ba410ec0a71ff0b), karena tiga pembetulan pembahasan v9.7.0 mengubah satu teks alasan opsi salah
// di A2-013 (opsi B), A2-184 (opsi C), dan C9-017 (opsi A). Stem, opsi, dan kunci ketiganya tetap. Perbarui bila soal lama berubah lagi.
// v9.7.1: bukan lagi sidik v9.7.0 (9c36e5832b07e521aa9005be). Sanksi pidana pajak disesuaikan UU 1/2026 dan usul audit dipasang pada
// A2-107, A2-111, A2-254, A2-258, A4-142, A4-169, A5-204, E-068, E-080 (pembahasan, dasarHukum, verifikasi, peringatan; opsi A2-107, A2-254,
// A2-258, dan E-068 dibetulkan). Huruf kunci semua soal tetap; stem, opsi, dan kunci soal try out A4-142 tetap.
// v9.7.1 putaran 2: bukan lagi sidik putaran 1 (2196fc011d861f9ffffe0076). Usul putaran 2 dipasang pada A2-111, A2-112, A2-180, A2-258,
// A2-259, C10-044, C10-049, C10-093, C10-095, C10-148, E-068, E-080 (pembahasan, dasarHukum, verifikasi, peringatan). Kewajiban selama APA
// diselaraskan dengan PMK 172/2023: stem dan opsi C10-044, opsi pengecoh C10-093, serta stem C10-095 dan C10-148 dibetulkan. Kuncinya tetap.
// v9.7.1 polesan akhir: bukan lagi sidik putaran 2 (f0ce62d6d729740afe155598). Peringatan A5-204 dilengkapi: pembeda kuncinya juga
// ancaman 3 tahun atau Rp200 juta yang berlaku untuk meterai bekas, bukan meterai tiruan. Stem, opsi, dan kunci tetap.
const SIDIK_LAMA = { n: 2791, sidik: 'a14f65e7274ed31d307bf54b' };
// Sidik penjelasan mudah soal lama: baris "id:mudah" semua soal di luar paket LM, urut id, digabung dengan baris baru, sha256 24 huruf pertama.
// Nilainya dihitung dari pohon v9.7.0 yang terbukti sama persis dengan mudah-bank.json (2.791 soal). Perbarui bila penjelasan mudah soal lama diubah.
// Sebelum rilis, tiga teks (A3-029, A4-086, E-044) diubah supaya tidak mengulang nama tokoh soal; berkas isi di luar repo ikut diubah.
// v9.7.1: bukan lagi sidik v9.7.0 (7115c5234a9d2c210856669d). Penjelasan mudah diselaraskan dengan pembahasan baru pada
// A2-107, A2-254, A4-142, dan E-068.
// v9.7.1 putaran 2: bukan lagi sidik putaran 1 (95f5f07678b377c8a93c2bd4). Penjelasan mudah diubah pada A2-111, A2-112, A2-258,
// A4-142, A5-204, C10-044, C10-049, C10-093, dan E-080. Untuk A4-142 kata "penjara dan/atau denda" dihapus karena bunyi baru Pasal 39A
// baru tingkat Turunan; "diancam pidana" benar menurut bunyi lama maupun baru.
// v9.7.1 polesan akhir: bukan lagi sidik putaran 2 (c6d402b89c6f9ef18ae2d1c1). Penjelasan mudah E-080 ditambah satu kalimat:
// bunyi pasti ancaman sesudah 2 Januari 2026 belum dicocokkan.
const SIDIK_MUDAH = { n: 2791, sidik: '0ef2ed1a9ba7f9acf4c4d976' };
// sha256 (16 huruf pertama) token dan pasangan token nama yang tidak boleh ditulis di berkas proyek. Namanya sengaja tidak ditulis.
const SIDIK_NAMA = ['b3a8951420e0a46e', 'f5a180e8092bfd8a', '45528769b64cd18b', '423a2d91b863827b'];

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
// modul mentah tanpa aplikasi (cara pemuat modul di alat pasang): kode modul dicatat di tiap soal
function muatModul() {
  const ctx = { console, Intl, Date, Math, JSON }; ctx.window = ctx; const modul = {};
  ctx.UKP = { register: m => { if (!m || !m.meta || !m.meta.kode) return; (m.soal || []).forEach(s => { s.kode = m.meta.kode; }); modul[m.meta.kode] = m; }, registerRef: () => {}, registerFormulir: () => {}, registerCakupan: () => {} };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(x => /^mu-.*\.js$/.test(x)).sort()) vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'data', f), 'utf8'), ctx, { filename: f });
  return modul;
}

// aturan teks penjelasan mudah (sama dengan alat pasang)
const SEBUT_HURUF = /\b(?:opsi|pilihan|jawaban|kunci|huruf)\s+\(?[A-E]\)?(?![A-Za-z0-9])/;
function kalimatTerpanjang(t) {
  const bersih = String(t).replace(/\b(Rp|No|Ps|dst|dll|mis|s\.t\.d\.d|s\.t\.d\.t\.d|a\.n|d\.h)\./gi, '$1').replace(/(\d)\.(\d)/g, '$1$2');
  return Math.max(0, ...bersih.split(/[.!?:;]\s+/).map(k => k.trim().split(/\s+/).filter(Boolean).length));
}
function salahMudah(m) {
  const g = [];
  if (typeof m !== 'string') return ['bukan teks'];
  if (m.trim().length < 140) g.push('kurang dari 140 huruf');
  if (m.length > 650) g.push('lebih dari 650 huruf');
  if (m !== m.trim()) g.push('spasi di tepi');
  if (/\n/.test(m)) g.push('lebih dari satu paragraf');
  if (kalimatTerpanjang(m) > 30) g.push('kalimat lebih dari 30 kata');
  if (/\bPasal\s+\d|\bayat\s+\(\d/i.test(m)) g.push('menyebut nomor pasal atau ayat');
  if (SEBUT_HURUF.test(m)) g.push('menyebut huruf opsi');
  if (/—/.test(m)) g.push('tanda pisah panjang');
  if (/[—–]\s|\s[—–]/.test(m.replace(/\d\s?[–-]\s?\d/g, ''))) g.push('tanda pisah sebagai jeda');
  if (/→|->|=>/.test(m)) g.push('tanda panah');
  return g;
}
// daftar berkas proyek untuk pencarian nama
function berkasProyek() {
  const out = [];
  const jelajah = (dir, re) => { for (const e of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) { const rel = path.join(dir, e.name); if (e.isDirectory()) jelajah(rel, re); else if (re.test(e.name)) out.push(rel); } };
  jelajah('js', /\.js$/); jelajah('docs', /\.md$/);
  for (const f of fs.readdirSync(path.join(ROOT, 'tools'))) if (/\.js$/.test(f)) out.push(path.join('tools', f));
  for (const f of fs.readdirSync(path.join(ROOT, 'test'))) if (/\.js$/.test(f)) out.push(path.join('test', f));
  for (const f of ['README.md', 'index.html']) if (fs.existsSync(path.join(ROOT, f))) out.push(f);
  return out;
}

describe('v9.7.0 data asli: paket Latihan UKP B per mata uji (' + TAHAP + ')', () => {
  const UKP = muat(); const K = UKP.konten;
  const semua = Object.values(UKP.modul || {}).flatMap(m => m.soal || []);
  const lm = semua.filter(s => s.sumber && s.sumber.set === LM);
  const butir = id => { const P = UKP.petaButir; return P && P.peta && Array.isArray(P.peta[id]) ? P.peta[id] : []; };
  const luar = id => { const P = UKP.petaButir; return P && P.luar && typeof P.luar[id] === 'string' ? P.luar[id] : null; };

  it('paket LM: jumlah per bagian sesuai harapan', () => {
    const per = {}; for (const s of lm) per[s.sumber.bagian] = (per[s.sumber.bagian] || 0) + 1;
    assert.deepEqual(per, HARAP.jumlahBagian);
    assert.equal(lm.length, HARAP.jumlah);
    const p = K.daftarSet().find(x => x.set === LM); assert.ok(p, 'paket LM ada di daftarSet'); assert.equal(p.n, HARAP.jumlah);
  });

  it('paket LM: sumber, modul, sejak', () => {
    for (const s of lm) {
      assert.deepEqual(Object.keys(s.sumber), ['set', 'no', 'judul', 'tingkat', 'bagian'], s.id);
      assert.equal(s.sumber.judul, JUDUL, s.id); assert.equal(s.sumber.tingkat, 'B', s.id);
      assert.ok(Number.isInteger(s.sumber.no) && s.sumber.no >= 1, s.id + ' nomor');
      assert.ok(Object.prototype.hasOwnProperty.call(MODUL, s.sumber.bagian), s.id + ' bagian dikenal');
      assert.equal(String(s.id).split('-')[0], MODUL[s.sumber.bagian], s.id + ' berada di modul mata ujinya');
      assert.equal(s.sejak, '9.7.0', s.id); assert.ok(s.tingkat.includes('B'), s.id + ' tingkat memuat B');
      assert.ok(Number(String(s.id).split('-')[1]) < 900, s.id + ' di bawah rentang soal tiruan');
    }
  });

  it('paket LM: nomor dan bagian', () => {
    const a = K.soalSet(LM);
    assert.deepEqual(J(a.map(x => K.noSet(x, LM))), HARAP.nomor);
    const bg = J(K.bagianSet(LM));
    assert.ok(bg.length > 0, 'bagianSet tidak kosong');
    assert.equal(bg.reduce((n, b) => n + b.n, 0), a.length, 'bagian menutupi semua soal');
    assert.deepEqual(bg.map(b => b.nama), Object.keys(MODUL).filter(n => HARAP.jumlahBagian[n]));
    for (const b of bg) assert.equal(b.n, HARAP.jumlahBagian[b.nama], b.nama);
  });

  it('semua soal paket punya penjelasan mudah', () => {
    for (const s of lm) assert.equal(typeof (s.pembahasan && s.pembahasan.mudah), 'string', s.id);
  });

  it('aturan teks penjelasan mudah untuk SEMUA soal yang punya field itu', () => {
    const punya = semua.filter(s => s.pembahasan && s.pembahasan.mudah !== undefined);
    assert.ok(punya.length >= lm.length);
    const salah = punya.map(s => [s.id, salahMudah(s.pembahasan.mudah)]).filter(([, g]) => g.length);
    assert.deepEqual(salah, []);
  });

  it('tidak ada nama penyusun berkas sumber di berkas proyek', () => {
    const terlarang = new Set(SIDIK_NAMA); const temu = [];
    for (const rel of berkasProyek()) {
      const tok = fs.readFileSync(path.join(ROOT, rel), 'utf8').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
      const unik = new Set(tok); for (let i = 1; i < tok.length; i++) unik.add(tok[i - 1] + ' ' + tok[i]);
      for (const t of unik) if (terlarang.has(sha(t).slice(0, 16))) { temu.push(rel); break; }
    }
    assert.deepEqual(temu, []);
  });

  it('stem soal kasus paket berawalan benar', () => {
    const perKasus = {};
    for (const s of lm) {
      if (s.kasusId === undefined) { assert.ok(!/^Data untuk soal/.test(s.stem), s.id + ' tanpa kasus'); continue; }
      const kode = String(s.id).split('-')[0];
      assert.match(String(s.kasusId), new RegExp('^V-' + kode + '-\\d{2,}$'), s.id);
      assert.ok(s.stem.startsWith('Data untuk soal vignette ' + s.kasusId + ': '), s.id + ' awalan stem');
      perKasus[s.kasusId] = (perKasus[s.kasusId] || 0) + 1;
    }
    for (const [k, n] of Object.entries(perKasus)) assert.ok(n >= HARAP.kasusMin, k + ' dipakai ' + n + ' soal');
    if (HARAP.kasus !== undefined) { assert.equal(Object.keys(perKasus).length, HARAP.kasus); assert.equal(Object.values(perKasus).reduce((a, n) => a + n, 0), HARAP.soalKasus); }
  });

  it('opsi tepat empat', () => {
    for (const s of lm) {
      assert.equal(Object.keys(s.opsi).join(''), 'ABCD', s.id);
      const v = Object.values(s.opsi).map(x => String(x).trim()); assert.ok(v.every(Boolean), s.id + ' opsi kosong');
      assert.equal(new Set(v.map(x => x.toLowerCase())).size, 4, s.id + ' opsi kembar');
    }
  });

  it('opsiLepas berbentuk benar', () => {
    for (const s of semua) {
      if (s.opsiLepas === undefined) continue; const o = s.opsiLepas;
      assert.deepEqual(Object.keys(o).sort(), ['alasan', 'teks'], s.id);
      assert.ok(String(o.teks).trim() && String(o.alasan).trim(), s.id + ' isi kosong');
      assert.ok(!Object.values(s.opsi).some(v => String(v).trim().toLowerCase() === o.teks.trim().toLowerCase()), s.id + ' teks sama dengan opsi');
    }
    for (const s of lm) assert.ok(s.opsiLepas, s.id + ' punya opsiLepas');
  });

  it('peta butir paket LM', () => {
    const tanpaB = [];
    for (const s of lm) {
      assert.ok(butir(s.id).length || luar(s.id), s.id + ' ada di peta atau luar');
      for (const t of s.tingkat) { const ada = butir(s.id).some(b => b.startsWith(t + '.')); assert.ok(ada || new RegExp('\\b' + t + '\\b').test(luar(s.id) || ''), s.id + ' tingkat ' + t); }
      if (!butir(s.id).some(b => b.startsWith('B.'))) { tanpaB.push(K.noSet(s, LM)); assert.match(luar(s.id) || '', /\bB\b/, s.id + ' tercatat di luar Tingkat B'); }
    }
    assert.deepEqual(tanpaB.sort((a, b) => a - b), LM_TANPA_B_NO);
    assert.equal(lm.length - tanpaB.length, HARAP.jumlah - LM_TANPA_B_NO.length);
  });

  it('soal bertanda paket LM', () => {
    assert.ok(lm.filter(s => s.verifikasi === '◐').length <= HARAP.batasTanda);
    for (const s of lm) {
      if (s.verifikasi === '◐') assert.ok(typeof s.peringatan === 'string' && s.peringatan.length > 30, s.id);
      else { assert.equal(s.verifikasi, '✅', s.id); assert.equal(s.peringatan, undefined, s.id); }
    }
  });

  it('soal lama tidak berubah selain penjelasan mudah', () => {
    const modul = muatModul(); const baris = [];
    for (const k of Object.keys(modul).sort()) for (const s of modul[k].soal) {
      if (s.sumber && s.sumber.set === LM) continue;
      const o = JSON.parse(JSON.stringify(s)); delete o.kode; if (o.pembahasan) delete o.pembahasan.mudah;
      baris.push([o.id, sha(JSON.stringify(o))]);
    }
    baris.sort((a, b) => a[0] < b[0] ? -1 : 1);
    assert.deepEqual({ n: baris.length, sidik: sha(baris.map(x => x.join(':')).join('\n')).slice(0, 24) }, SIDIK_LAMA);
  });

  it('penjelasan mudah soal lama: jumlah dan sidik', () => {
    const punya = semua.filter(s => typeof (s.pembahasan || {}).mudah === 'string');
    assert.equal(punya.length, HARAP.jumlah + SIDIK_MUDAH.n, 'jumlah soal yang punya penjelasan mudah');
    const modul = muatModul(); const lama = [];
    for (const k of Object.keys(modul)) for (const s of modul[k].soal) if (!(s.sumber && s.sumber.set === LM)) lama.push(s);
    lama.sort((a, b) => a.id < b.id ? -1 : 1);
    for (const s of lama) assert.equal(typeof (s.pembahasan || {}).mudah, 'string', s.id + ' punya penjelasan mudah');
    assert.deepEqual({ n: lama.length, sidik: sha(lama.map(s => s.id + ':' + s.pembahasan.mudah).join('\n')).slice(0, 24) }, SIDIK_MUDAH);
  });

  if (HARAP.sidikLM) it('isi lengkap soal paket LM tidak berubah (sidik)', () => {
    const modul = muatModul(); const baris = [];
    for (const k of Object.keys(modul)) for (const s of modul[k].soal) {
      if (!(s.sumber && s.sumber.set === LM)) continue;
      const o = JSON.parse(JSON.stringify(s)); delete o.kode;
      baris.push([o.id, sha(JSON.stringify(o))]);
    }
    baris.sort((a, b) => a[0] < b[0] ? -1 : 1);
    assert.deepEqual({ n: baris.length, sidik: sha(baris.map(x => x.join(':')).join('\n')).slice(0, 24) }, HARAP.sidikLM);
  });

  if (HARAP.sidikPetaLM) it('peta butir soal paket LM tidak berubah (sidik)', () => {
    const P = UKP.petaButir || {}; const peta = P.peta || {}; const lu = P.luar || {};
    const ids = lm.map(s => s.id).sort();
    const sidik = sha(ids.map(id => id + ':' + JSON.stringify([peta[id] || null, lu[id] || null])).join('\n')).slice(0, 24);
    assert.deepEqual({ n: ids.length, sidik }, HARAP.sidikPetaLM);
  });

  if (TAHAP === 'lengkap') it('sebaran kunci paket LM', () => {
    const n = {}; for (const s of lm) n[s.kunci] = (n[s.kunci] || 0) + 1;
    for (const h of ['A', 'B', 'C', 'D']) { const r = (n[h] || 0) / lm.length; assert.ok(r >= 0.15 && r <= 0.35, h + ': ' + n[h]); }
  });
});
