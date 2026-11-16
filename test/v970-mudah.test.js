/* Uji v9.7.0: blok "Penjelasan mudah" (pembahasan.mudah) dan opsi berkas asal yang dilepas (opsiLepas) di panel UKP.c.umpan.
   - Soal tanpa mudah dan tanpa opsiLepas: tidak ada simpul baru, urutan kelas anak panel sama dengan v9.6.6.
   - Dengan mudah: blok sesudah status dan sebelum inti, judul dan isi persis, inti berawalan "Menurut ketentuan: ".
   - Mudah yang hanya berisi spasi dianggap tidak ada.
   - Opsi lepas: butir terakhir "Mengapa opsi lain salah", teks persis, lipatan muncul walau hanya ada opsi lepas, tidak terbuka sendiri.
   - Kelas kait dipasang js/soal.js dan punya gaya di bagian v9.6 css/app.css. Teks layar baru tanpa tanda pisah panjang dan tanda panah.
   Soal tiruan dibuat di sini (tidak membaca js/data). DOM tiruan kecil di konteks vm. Jalankan: node --test test/ */
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

const dasar = () => ({
  id: 'T-001', topik: 'X0.0', kunci: 'C',
  opsi: { A: 'Rp10.000.000', B: 'Rp12.000.000', C: 'Rp15.000.000', D: 'Rp20.000.000' },
  pembahasan: { inti: 'Penghasilan bruto dikurangi biaya jabatan.', mengapaSalah: { A: 'Lupa menambah tunjangan.', B: 'Memakai tarif lama.', D: 'Tidak mengurangi biaya jabatan.' }, jebakan: 'Biaya jabatan dibatasi.', jejakHitung: [['Bruto', 'Rp16.000.000']] },
  dasarHukum: ['Pasal 21 UU PPh'],
});
const dengan = (ubah) => { const s = dasar(); ubah(s); return s; };
const kelasAnak = panel => panel.elemen.map(c => c.className);
const MUDAH = 'Gaji dikurangi biaya jabatan. Itu saja yang dihitung.';
const MODE = { langsung: { langsung: true }, periksa: {}, hanyaBaca: { hanyaBaca: true, langsung: true } };

describe('v9.7: soal tanpa penjelasan mudah dan tanpa opsi lepas sama dengan v9.6.6', () => {
  // urutan kelas anak .umpan pada v9.6.6 untuk soal tiruan ini (jawaban salah B, 100 detik)
  const HARAP = {
    langsung: ['status blok status-besar', 'inti blok', 'lipat blok', 'lipat blok', 'lipat blok lipat-dasar', 'umpan-kaki blok'],
    periksa: ['status blok', 'inti blok', 'lipat blok', 'dasar-hukum blok', 'lipat blok', 'umpan-kaki blok'],
    hanyaBaca: ['status blok', 'inti blok', 'lipat blok', 'dasar-hukum blok', 'lipat blok', 'umpan-kaki blok'],
  };
  for (const [nm, mo] of Object.entries(MODE)) {
    it(nm + ': tanpa .umpan-mudah, .inti-ket, .umpan-lepas; urutan anak tetap', () => {
      for (const jw of ['C', 'B', null, '-']) {
        const p = UKP.c.umpan(dasar(), jw, 100, Object.assign({}, mo));
        for (const k of ['umpan-mudah', 'umpan-mudah-judul', 'umpan-mudah-isi', 'inti-ket', 'umpan-lepas', 'umpan-lepas-ket']) assert.equal(p.cari(k).length, 0, nm + ' ' + jw + ': .' + k);
        assert.equal(p.cari('inti')[0].textContent, 'Penghasilan bruto dikurangi biaya jabatan.');
      }
      assert.deepEqual(kelasAnak(UKP.c.umpan(dasar(), 'B', 100, Object.assign({}, mo))), HARAP[nm]);
    });
  }
  it('mudah bukan string atau kosong tidak menambah simpul', () => {
    for (const m of [undefined, null, '', 42, ['a'], { teks: 'a' }]) {
      const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = m; }), 'B', 100, { langsung: true });
      assert.deepEqual(kelasAnak(p), HARAP.langsung, String(m));
      assert.equal(p.cari('inti-ket').length, 0);
    }
  });
});

describe('v9.7: blok Penjelasan mudah', () => {
  for (const [nm, mo] of Object.entries(MODE)) {
    it(nm + ': blok sesudah status, sebelum inti; judul dan isi persis; inti berawalan "Menurut ketentuan: "', () => {
      for (const jw of ['C', 'B', null, '-']) {
        const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = '  ' + MUDAH + '\n'; }), jw, 100, Object.assign({}, mo));
        const kl = kelasAnak(p); const iM = kl.indexOf('umpan-mudah'), iI = kl.indexOf('inti blok');
        assert.ok(iM > 0, 'blok bukan anak pertama'); assert.ok(/(^| )status( |$)/.test(kl[0]), 'anak pertama tetap status');
        assert.equal(iI, iM + 1, 'inti langsung sesudah blok');
        const blok = p.elemen[iM]; assert.equal(blok.tagName, 'DIV');
        assert.deepEqual(blok.elemen.map(c => c.tagName + '.' + c.className), ['P.umpan-mudah-judul', 'P.umpan-mudah-isi']);
        assert.equal(blok.elemen[0].textContent, 'Penjelasan mudah');
        assert.equal(blok.elemen[1].textContent, MUDAH);
        assert.equal(blok.elemen[1].getAttribute('tabindex'), '-1');
        assert.equal(blok.elemen[1].innerHTML, '', 'teks biasa, bukan innerHTML');
        const inti = p.elemen[iI];
        assert.equal(inti.elemen[0].className, 'inti-ket'); assert.equal(inti.elemen[0].textContent, 'Menurut ketentuan: ');
        assert.equal(inti.textContent, 'Menurut ketentuan: Penghasilan bruto dikurangi biaya jabatan.');
      }
    });
  }
  it('baris kartu yang ditonjolkan ("Yakin tetapi keliru") tetap di atas blok', () => {
    const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = MUDAH; }), 'B', 100, { langsung: true, keyakinan: 'yakin', kartu: { id: 'KA-T-001', baru: true } });
    const kl = kelasAnak(p); assert.equal(kl.indexOf('small kartu-info blok'), 1); assert.equal(kl.indexOf('umpan-mudah'), 2); assert.equal(kl.indexOf('inti blok'), 3);
  });
  it('tanpa inti di data: inti cadangan tanpa label "Menurut ketentuan"', () => {
    const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = MUDAH; s.pembahasan.inti = ''; }), 'B', 100, { langsung: true });
    assert.equal(p.cari('umpan-mudah').length, 1); assert.equal(p.cari('inti-ket').length, 0);
  });
  it('mudah yang hanya berisi spasi dianggap tidak ada', () => {
    for (const m of ['   ', '\n\t ']) {
      const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = m; }), 'B', 100, { langsung: true });
      assert.equal(p.cari('umpan-mudah').length, 0); assert.equal(p.cari('inti-ket').length, 0);
      assert.equal(p.cari('inti')[0].textContent, 'Penghasilan bruto dikurangi biaya jabatan.');
    }
  });
});

describe('v9.7: opsi berkas asal yang dilepas', () => {
  const LEPAS = { teks: 'Rp18.000.000.', alasan: 'Angka ini memakai biaya jabatan tanpa batas.' };
  const ul = p => p.cari('umpan-salah-opsi')[0];
  it('butir terakhir dengan teks persis, juga saat opsi pilihan dinaikkan ke atas', () => {
    for (const [nm, mo] of Object.entries(MODE)) for (const jw of ['C', 'B', '-']) {
      const p = UKP.c.umpan(dengan(s => { s.opsiLepas = LEPAS; }), jw, 100, Object.assign({}, mo));
      const li = ul(p).elemen; const akhir = li[li.length - 1];
      assert.equal(li.length, 4, nm + ' ' + jw); assert.equal(akhir.className, 'umpan-lepas');
      assert.equal(akhir.elemen[0].tagName, 'SPAN', 'bukan strong (lencana huruf)'); assert.equal(akhir.elemen[0].className, 'umpan-lepas-ket');
      assert.equal(akhir.textContent, 'Pilihan berkas asal yang tidak dipakai: “Rp18.000.000”. Angka ini memakai biaya jabatan tanpa batas.');
      assert.ok(li.slice(0, 3).every(x => x.elemen[0].tagName === 'STRONG'));
    }
    const p = UKP.c.umpan(dengan(s => { s.opsiLepas = LEPAS; }), 'B', 100, { langsung: true });
    assert.equal(ul(p).elemen[0].getAttribute('data-dipilih'), '', 'opsi pilihan tetap butir pertama');
  });
  it('tanpa alasan: berakhir titik sesudah tanda petik', () => {
    const p = UKP.c.umpan(dengan(s => { s.opsiLepas = { teks: 'Rp18.000.000' }; }), 'C', 100, { langsung: true });
    const li = ul(p).elemen; assert.equal(li[li.length - 1].textContent, 'Pilihan berkas asal yang tidak dipakai: “Rp18.000.000”.');
  });
  it('lipatan muncul walau hanya ada opsi lepas, dan tidak terbuka sendiri', () => {
    const tanpaAlasan = s => { s.pembahasan.mengapaSalah = {}; delete s.pembahasan.jebakan; };
    for (const [nm, mo] of Object.entries(MODE)) {
      const tanpa = UKP.c.umpan(dengan(tanpaAlasan), 'B', 100, Object.assign({}, mo));
      assert.equal(tanpa.cari('umpan-salah-opsi').length, 0, nm + ': tanpa lipatan seperti v9.6.6');
      for (const jw of ['C', 'B', '-']) {
        const p = UKP.c.umpan(dengan(s => { tanpaAlasan(s); s.opsiLepas = LEPAS; }), jw, 100, Object.assign({}, mo));
        const u = ul(p); assert.ok(u, nm + ' ' + jw); assert.deepEqual(u.elemen.map(x => x.className), ['umpan-lepas']);
        const lip = u.parentNode; assert.equal(lip.tagName, 'DETAILS'); assert.equal(lip.hasAttribute('open'), false, nm + ' ' + jw + ': tertutup');
        assert.equal(lip.elemen[0].textContent, nm === 'langsung' ? 'Mengapa opsi lain salah' : 'Mengapa opsi lain keliru');
      }
    }
  });
  it('teks dan alasan dirapikan: spasi di tepi dibuang, tidak ada spasi ganda', () => {
    const p = UKP.c.umpan(dengan(s => { s.opsiLepas = { teks: ' x. ', alasan: '  Sebab y.  ' }; }), 'C', 100, { langsung: true });
    const li = ul(p).elemen; assert.equal(li[li.length - 1].textContent, 'Pilihan berkas asal yang tidak dipakai: \u201cx\u201d. Sebab y.');
  });
  it('bentuk yang tidak sah diabaikan', () => {
    for (const ol of [null, 'teks', { teks: '' }, { teks: '  ' }, { teks: 5 }, { alasan: 'x' }, { teks: '...' }]) {
      const p = UKP.c.umpan(dengan(s => { s.opsiLepas = ol; }), 'B', 100, { langsung: true });
      assert.equal(p.cari('umpan-lepas').length, 0, JSON.stringify(ol)); assert.equal(ul(p).elemen.length, 3);
    }
  });
});

describe('v9.7: kait kelas, gaya, fokus, dan teks layar', () => {
  const css = baca('css/app.css'); const awal = css.search(/\/\* ===== v9\.6 tampilan: /);
  const blok = css.slice(awal).replace(/\/\*[\s\S]*?\*\//g, ''); const src = baca('js/soal.js');
  it('kelas kait dipasang js/soal.js dan punya gaya di bagian v9.6 (pemilih .umpan, juga di ulas simulasi)', () => {
    assert.ok(awal > 0);
    for (const k of ['umpan-mudah', 'umpan-mudah-judul', 'umpan-mudah-isi', 'inti-ket', 'umpan-lepas', 'umpan-lepas-ket']) {
      assert.ok(src.includes("'" + k + "'"), 'js/soal.js: ' + k);
      assert.match(blok, new RegExp('(^|[,}]\\s*)\\.umpan [^{}]*\\.' + k + '(?![\\w-])'), 'gaya .umpan ... .' + k);
    }
    assert.ok(!/\.soal \.umpan \.umpan-mudah/.test(blok), 'bukan .soal .umpan');
    assert.match(blok, /@media \(forced-colors: active\) \{ \.umpan \.umpan-mudah \{ border-left-color: CanvasText; \} \}/);
    assert.match(blok, /@media print \{ \.umpan \.umpan-mudah \{ background: none; border-left-color: #555555; \} \}/);
  });
  it('fokus periksa dulu ke penjelasan mudah bila ada; status tetap untuk jawab langsung; papan bersama tidak diubah', () => {
    assert.ok(src.includes("intiEl = (langsung && panel.querySelector('.status')) || panel.querySelector('.umpan-mudah-isi') || panel.querySelector('.inti');"));
    assert.ok(src.includes('const sisa = [...panel.children].filter(x => x !== stBaru && x !== triEl);'));
    // Enter di .inti (difokuskan tombol Tutor) tetap Lanjut di periksa dulu walau intiEl menunjuk penjelasan mudah
    assert.ok(src.includes("(!langsung && t.classList && t.classList.contains('inti') && umpan.contains(t))"));
  });
  it('gaya cadangan (css belum termuat) memuat blok penjelasan mudah', () => {
    for (const k of ['.umpan .umpan-mudah{', '.umpan .umpan-mudah-judul{', '.umpan .umpan-mudah-isi{']) assert.ok(src.includes(k), 'cadanganUmpan: ' + k);
  });
  it('jarak atas opsi lepas menang atas aturan lama .soal .umpan ... li + li', () => {
    assert.match(blok, /\.umpan \.umpan-salah-opsi > li \+ li\.umpan-lepas \{ margin-top: 6px; \}/);
  });
  it('teks layar baru tanpa tanda pisah panjang dan tanpa tanda panah', () => {
    for (const t of ['Penjelasan mudah', 'Menurut ketentuan: ', 'Pilihan berkas asal yang tidak dipakai: ']) assert.ok(src.includes("'" + t + "'"), t);
    const p = UKP.c.umpan(dengan(s => { s.pembahasan.mudah = MUDAH; s.opsiLepas = { teks: 'Rp18.000.000', alasan: 'Batas biaya jabatan.' }; }), 'B', 100, { langsung: true });
    const teks = p.cari('umpan-mudah')[0].textContent + p.cari('inti-ket')[0].textContent + p.cari('umpan-lepas')[0].textContent;
    assert.ok(!/[—–→←⇒⟶]|->|=>/.test(teks), teks);
  });
});
