/* Uji v10.3.2: panel pembahasan jalur lama (UKP.c.umpan) dan layar Ulas jawaban Simulasi.
   - Penjelasan mudah: kalimat pokok dalam span.mudah-pokok, "Cara ingat" dalam span.mudah-ingat; textContent tetap sama persis dengan data,
     untuk semua pembahasan.mudah di bank soal.
   - Jawaban salah: lipatan "Mengapa opsi lain keliru" terbuka dan opsi yang dipilih di urutan pertama, juga di luar jawab langsung.
   - CSS: blok v10.3.2 ada, memakai token ukuran v10.3.1, dua kolom mulai 1100px, tanpa :has().
   DOM tiruan disalin dari test/v970-mudah.test.js. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const baca = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// ---------- DOM tiruan: cukup untuk UKP.h, UKP.icon, dan membaca pohon panel ----------
function domTiruan() {
  class El {
    constructor(tag) { this.tagName = String(tag).toUpperCase(); this.attr = new Map(); this.children = []; this.parentNode = null; this.style = {}; this.dataset = {}; this._teks = '';
      const self = this; this.classList = { add: k => self.attr.set('class', ((self.attr.get('class') || '') + ' ' + k).trim()), remove() {}, contains: k => self.className.split(' ').includes(k), toggle() {} }; }
    set className(v) { this.attr.set('class', v); } get className() { return this.attr.get('class') || ''; }
    setAttribute(k, v) { this.attr.set(k, String(v)); } getAttribute(k) { return this.attr.has(k) ? this.attr.get(k) : null; } hasAttribute(k) { return this.attr.has(k); } removeAttribute(k) { this.attr.delete(k); }
    addEventListener() {} removeEventListener() {}
    appendChild(c) { if (c.tagName === '#FRAG') { c.children.slice().forEach(x => this.appendChild(x)); return c; } c.parentNode = this; this.children.push(c); return c; }
    set innerHTML(v) { this._html = v; } get innerHTML() { return this._html || ''; }
    set textContent(v) { this.children = []; this._teks = String(v); }
    get textContent() { return this.tagName === 'SVG' ? '' : this._teks + this.children.map(c => c.textContent).join(''); }
    get elemen() { return this.children.filter(c => c.tagName !== '#TEXT'); }
    semua() { const out = []; const jalan = n => n.children.forEach(c => { out.push(c); jalan(c); }); jalan(this); return out; }
    cari(kelas) { return this.semua().filter(n => n.tagName !== '#TEXT' && n.className.split(' ').includes(kelas)); }
  }
  const doc = {
    addEventListener() {}, removeEventListener() {}, body: null, head: null, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
    createElement: t => new El(t), createElementNS: (ns, t) => new El(t), createTextNode: t => { const e = new El('#text'); e._teks = String(t); return e; },
    createDocumentFragment: () => new El('#frag'),
  };
  doc.documentElement = new El('html');
  return doc;
}
function muat() {
  const noop = () => {};
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, document: domTiruan(),
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop, performance: { now: () => 0 },
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(baca('js/core.js'), ctx, { filename: 'core.js' });
  // js/learn.js tidak dimuat: panel hanya butuh K.topik (soal tiruan tanpa topik yang dikenal)
  ctx.UKP.konten = ctx.UKP.konten || { topik: () => null };
  ctx.UKP.belajar = ctx.UKP.belajar || { hapusKartuOtomatis: () => true };
  vm.runInContext(baca('js/soal.js'), ctx, { filename: 'soal.js' });
  return ctx.UKP;
}
const UKP = muat();

const SOAL = { id: 'T-001', topik: 'T1.1', kunci: 'C', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' },
  pembahasan: { inti: 'Penghasilan bruto dikurangi biaya jabatan.', mengapaSalah: { A: 'Alasan A.', B: 'Alasan B.', D: 'Alasan D.' } } };
const dengan = f => { const s = JSON.parse(JSON.stringify(SOAL)); f(s); return s; };
const isiMudah = (teks, jw) => UKP.c.umpan(dengan(s => { s.pembahasan.mudah = teks; }), jw || 'B', 60, { hanyaBaca: true }).cari('umpan-mudah-isi')[0];

describe('v10.3.2: susunan Penjelasan mudah', () => {
  it('kalimat pokok tebal dan Cara ingat di baris sendiri; teks tidak berubah', () => {
    const t = 'Pajak kini dihitung dari laba pajak. Pajak tangguhan hanya dari beda temporer. Cara ingat: koreksi positif temporer = manfaat.';
    const p = isiMudah(t); assert.equal(p.textContent, t);
    assert.equal(p.cari('mudah-pokok')[0].textContent, 'Pajak kini dihitung dari laba pajak.');
    const ingat = p.cari('mudah-ingat')[0]; assert.equal(ingat.textContent, 'Cara ingat: koreksi positif temporer = manfaat.');
    assert.equal(p.cari('mudah-ingat-ket')[0].textContent, 'Cara ingat:');
  });
  it('satu kalimat: tanpa penebalan; tanpa Cara ingat: tanpa baris ingat', () => {
    const p = isiMudah('Hanya satu kalimat di sini.'); assert.equal(p.cari('mudah-pokok').length, 0); assert.equal(p.cari('mudah-ingat').length, 0);
    assert.equal(p.textContent, 'Hanya satu kalimat di sini.');
    const r = isiMudah('Urutannya tetap. Lalu hitung. Cara ingat urutannya: bruto, biaya, neto.'); assert.equal(r.cari('mudah-ingat-ket')[0].textContent, 'Cara ingat urutannya:');
    assert.equal(r.textContent, 'Urutannya tetap. Lalu hitung. Cara ingat urutannya: bruto, biaya, neto.');
    const q = isiMudah('Dasar pengenaan Rp5.000.000 per bulan. Tarifnya 5%.'); assert.equal(q.cari('mudah-pokok')[0].textContent, 'Dasar pengenaan Rp5.000.000 per bulan.');
  });
  it('semua pembahasan.mudah di bank soal: textContent sama persis dengan data (sesudah trim)', () => {
    const ctx = { window: {} }; ctx.window.UKP = { data: {} }; ctx.UKP = ctx.window.UKP; vm.createContext(ctx);
    let n = 0;
    for (const f of fs.readdirSync(path.join(ROOT, 'js/data')).filter(x => /^mu-.*\.js$/.test(x))) {
      const teks = baca('js/data/' + f); const re = /\bmudah:\s*("(?:[^"\\]|\\.)*")/g; let m;
      while ((m = re.exec(teks))) { const t = JSON.parse(m[1]).trim(); if (!t) continue; n++; const p = isiMudah(t); if (p.textContent !== t) assert.fail(f + ': teks berubah: ' + t.slice(0, 60)); }
    }
    assert.ok(n > 1000, 'jumlah penjelasan mudah yang diuji: ' + n);
  });
});

describe('v10.3.2: alasan opsi yang dipilih langsung terlihat', () => {
  it('salah saat mengulas: lipatan terbuka, opsi yang dipilih pertama dan bertanda', () => {
    const p = UKP.c.umpan(dengan(() => {}), 'B', 60, { hanyaBaca: true });
    const ul = p.cari('umpan-salah-opsi')[0]; const det = ul.parentNode;
    assert.equal(det.tagName, 'DETAILS'); assert.ok(det.hasAttribute('open') || det.open === true, 'lipatan terbuka');
    assert.equal(det.elemen[0].textContent, 'Mengapa jawaban Anda dan opsi lain keliru'); assert.equal(ul.elemen[0].textContent, 'B. Alasan B.'); assert.equal(ul.elemen[0].getAttribute('data-dipilih'), '');
    assert.deepEqual(ul.elemen.map(li => li.textContent.slice(0, 1)), ['B', 'A', 'D']);
  });
  it('benar atau tidak dijawab: lipatan tetap tertutup dan urutan huruf biasa', () => {
    for (const jw of ['C', null, '-']) {
      const p = UKP.c.umpan(dengan(() => {}), jw, 60, { hanyaBaca: true }); const ul = p.cari('umpan-salah-opsi')[0];
      assert.ok(!(ul.parentNode.hasAttribute('open') || ul.parentNode.open === true), 'tertutup untuk ' + jw);
      assert.deepEqual(ul.elemen.map(li => li.textContent.slice(0, 1)), ['A', 'B', 'D']);
    }
  });
});

describe('v10.3.2: gaya', () => {
  const css = baca('css/app.css'); const a = css.indexOf('v10.3.2: panel pembahasan jalur lama'); const blok = css.slice(a, css.indexOf('/* v10 lain: selesai */'));
  it('blok ada di dalam bagian v10 dan tanpa :has()', () => { assert.ok(a > 0); assert.ok(blok.length > 500); assert.ok(!blok.includes(':has(')); });
  it('kait baru bergaya', () => { for (const k of ['.umpan .mudah-pokok', '.umpan .mudah-ingat', '.umpan .mudah-ingat-ket', '.umpan .inti > .inti-ket']) assert.ok(blok.includes(k + ' {'), k); });
  it('Ulas jawaban memakai token ukuran teks soal', () => {
    assert.match(blok, /\.halaman-ulas \.umpan \{ font-size: var\(--v10-t-baca\); line-height: var\(--v10-tb-baca\); \}/);
    assert.ok(blok.includes('.halaman-ulas .umpan :is(.umpan-mudah-isi, .inti,')); assert.ok(!/jejak[^{]*\{[^}]*--fs-caption/.test(blok), 'nama langkah jejak tidak di bawah ukuran hitung');
  });
  it('dua kolom mulai 1100px: soal kiri, pembahasan kanan', () => {
    const m = blok.slice(blok.indexOf('@media screen and (min-width: 1100px)'));
    assert.ok(m.includes('grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)')); assert.ok(!m.includes('position: sticky') && !m.includes('overflow'), 'kartu soal tidak dipotong'); assert.ok(m.includes('> .stack > .soal { grid-column: 1; }')); assert.ok(m.includes(':is(.umpan, .ulas-kaki) { grid-column: 2;'));
  });
  it('layar Ulas jawaban tetap menaruh panel sebagai saudara kartu soal di dalam .halaman-ulas', () => {
    const v = baca('js/views-simulasi.js'); assert.ok(v.includes("class: 'page halaman-ulas'")); assert.ok(v.includes("el.querySelector('.umpan') ? null : UKP.c.umpan(so, dipilih || 'kosong', r.detik[so.id] || 0)"));
  });
});
