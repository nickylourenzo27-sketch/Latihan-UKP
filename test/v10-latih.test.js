/* v10 latih: Latih dan pembahasan latihan sendiri "Langkah Tegas" (ARAH-DESAIN bagian 4, 6, dan 9 Tahap 1). Jalankan: node --test test/
   Halaman Latih DIJALANKAN di DOM tiruan (konteks vm, sama dengan test/v973-latih.test.js). Yang diuji: Cara ingat tidak tampil untuk soal
   tanpa kalimatnya; alasan vonis memakai opsi yang dipilih; "Kenapa bukan" tidak memuat opsi yang dipilih; penanda susulan muncul hanya
   bila keyakinan kosong dan memperbarui baris keterangan; benar dan yakin memakai versi pendek; "Tidak tahu" tetap bekerja; opsi keluar
   dari urutan Tab sesudah vonis; kop sesi dengan ruas; konteks lain (cek, ulas, papan bersama, Simulasi) tetap jalur lama; Simulasi
   tanpa warna vonis sebelum dikirim. Soal tiruan dibuat di sini (tidak membaca js/data). */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// ---------- DOM tiruan: cukup untuk UKP.h, papan latihan, dan halaman saringan ----------
function domTiruan() {
  const dok = {};
  class Ev { constructor(type, o) { this.type = type; this.bubbles = !!(o && o.bubbles); this.defaultPrevented = false; Object.assign(this, o || {}); } preventDefault() { this.defaultPrevented = true; } stopPropagation() { this.berhenti = true; } }
  class El {
    constructor(tag) {
      this.tagName = String(tag).toUpperCase(); this.attr = new Map(); this.children = []; this.parentNode = null; this.listener = new Map();
      this.style = { setProperty() {}, removeProperty() {} }; this.dataset = {}; this._teks = '';
      const self = this;
      this.classList = {
        add: (...k) => { const c = self.className.split(' ').filter(Boolean); k.forEach(x => { if (!c.includes(x)) c.push(x); }); self.className = c.join(' '); },
        remove: (...k) => { self.className = self.className.split(' ').filter(x => !k.includes(x)).join(' '); },
        toggle: (k, v) => { const mau = v === undefined ? !self.classList.contains(k) : !!v; if (mau) self.classList.add(k); else self.classList.remove(k); return mau; },
        contains: k => self.className.split(' ').includes(k),
      };
    }
    set className(v) { this.attr.set('class', String(v)); } get className() { return this.attr.get('class') || ''; }
    set id(v) { this.attr.set('id', String(v)); } get id() { return this.attr.get('id') || ''; }
    setAttribute(k, v) { this.attr.set(k, String(v)); } getAttribute(k) { return this.attr.has(k) ? this.attr.get(k) : null; }
    hasAttribute(k) { return this.attr.has(k); } removeAttribute(k) { this.attr.delete(k); }
    toggleAttribute(k, v) { if (v === undefined ? !this.attr.has(k) : v) this.attr.set(k, ''); else this.attr.delete(k); }
    get textContent() { return this.tagName === '#TEXT' ? this._teks : this.children.map(c => c.textContent).join(' '); }
    set textContent(v) { this.children.forEach(c => { c.parentNode = null; }); this.children = []; if (this.tagName === '#TEXT') this._teks = String(v); else if (v !== '' && v != null) this.append(String(v)); }
    get innerText() { return this.textContent; } set innerText(v) { this.textContent = v; }
    get innerHTML() { return ''; } set innerHTML(v) { this.textContent = ''; }
    get firstChild() { return this.children[0] || null; } get firstElementChild() { return this.children.find(c => c.tagName !== '#TEXT') || null; }
    get lastElementChild() { return this.children.filter(c => c.tagName !== '#TEXT').pop() || null; } get childNodes() { return this.children; }
    get nextElementSibling() { const p = this.parentNode; return p ? p.children[p.children.indexOf(this) + 1] || null : null; }
    get offsetParent() { return null; } getBoundingClientRect() { return { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 }; }
    addEventListener(t, fn) { if (!this.listener.has(t)) this.listener.set(t, []); this.listener.get(t).push(fn); }
    removeEventListener(t, fn) { const m = this.listener.get(t); if (m) { const i = m.indexOf(fn); if (i >= 0) m.splice(i, 1); } }
    dispatchEvent(ev) {
      ev.target = ev.target || this;
      for (let n = this; n; n = n.parentNode) { const m = n.listener.get(ev.type); if (m) for (const f of m.slice()) { ev.currentTarget = n; f.call(n, ev); } if (!ev.bubbles || ev.berhenti) break; }
      return !ev.defaultPrevented;
    }
    appendChild(c) { if (c == null) return c; if (c.tagName === '#FRAG') { c.children.slice().forEach(x => this.appendChild(x)); return c; } if (c.parentNode) c.remove(); c.parentNode = this; this.children.push(c); return c; }
    append(...cs) { cs.forEach(c => { if (c == null || c === false) return; if (typeof c !== 'object') { const t = new El('#text'); t._teks = String(c); this.appendChild(t); } else this.appendChild(c); }); }
    prepend(...cs) { cs.reverse().forEach(c => { if (typeof c !== 'object') { const t = new El('#text'); t._teks = String(c); c = t; } if (c.parentNode) c.remove(); c.parentNode = this; this.children.unshift(c); }); }
    before(...cs) { const p = this.parentNode; if (p) cs.forEach(c => p.insertBefore(c, this)); }
    after(...cs) { const p = this.parentNode; if (!p) return; const nx = this.nextElementSibling; cs.forEach(c => p.insertBefore(c, nx)); }
    replaceChildren(...cs) { this.children.forEach(c => { c.parentNode = null; }); this.children = []; this.append(...cs); }
    replaceWith(c) { const p = this.parentNode; if (!p) return; p.insertBefore(c, this); this.remove(); }
    insertBefore(c, ref) { if (c.parentNode) c.remove(); const i = ref ? this.children.indexOf(ref) : -1; c.parentNode = this; this.children.splice(i < 0 ? this.children.length : i, 0, c); return c; }
    removeChild(c) { c.remove(); return c; }
    remove() { const p = this.parentNode; if (!p) return; p.children.splice(p.children.indexOf(this), 1); this.parentNode = null; }
    get isConnected() { let n = this; while (n.parentNode) n = n.parentNode; return n === dok.html; }
    contains(x) { for (let n = x; n; n = n.parentNode) if (n === this) return true; return false; }
    closest(sel) { for (let n = this; n && n.cocok; n = n.parentNode) if (n.cocok(sel)) return n; return null; }
    semua() { const out = []; const jalan = n => n.children.forEach(c => { if (c.tagName !== '#TEXT') out.push(c); jalan(c); }); jalan(this); return out; }
    cocok(sel) {
      return String(sel).split(',').map(s => s.trim()).some(s => {
        const m = /^([a-z0-9]*)((?:\.[\w-]+)*)((?:\[[^\]]+\])*)$/i.exec(s.split(/\s+/).pop()); if (!m) return false;
        if (m[1] && this.tagName !== m[1].toUpperCase()) return false;
        for (const c of (m[2].match(/\.[\w-]+/g) || [])) if (!this.classList.contains(c.slice(1))) return false;
        for (const a of (m[3].match(/\[[^\]]+\]/g) || [])) { const [k, v] = a.slice(1, -1).split('='); if (!this.attr.has(k) || (v != null && this.attr.get(k) !== v.replace(/"/g, ''))) return false; }
        return true;
      });
    }
    querySelector(sel) { return this.semua().find(n => n.cocok(sel)) || null; }
    querySelectorAll(sel) { return this.semua().filter(n => n.cocok(sel)); }
    // v9.7.3: nodeType dan cloneNode (fokusBar dan aksiKiri memeriksa nodeType; cincin ringkasan memakai cloneNode)
    get nodeType() { return this.tagName === '#TEXT' ? 3 : this.tagName === '#FRAG' ? 11 : 1; }
    cloneNode(dalam) { const c = new El(this.tagName.toLowerCase()); this.attr.forEach((v, k) => c.attr.set(k, v)); c._teks = this._teks; if (dalam) this.children.forEach(x => c.appendChild(x.cloneNode(true))); return c; }
    focus() {} blur() {} scrollIntoView() {}
    click() { this.dispatchEvent(new Ev('click', { bubbles: true })); }
    showModal() { this.setAttribute('open', ''); } close(v) { this.removeAttribute('open'); this.returnValue = v; this.dispatchEvent(new Ev('close')); }
  }
  dok.html = new El('html'); dok.head = new El('head'); dok.body = new El('body'); dok.html.appendChild(dok.head); dok.html.appendChild(dok.body);
  const main = new El('main'); main.id = 'main'; dok.body.appendChild(main);
  const document = {
    get activeElement() { return dok.body; }, body: dok.body, documentElement: dok.html, head: dok.head, title: '', hidden: false, visibilityState: 'visible',
    createElement: t => new El(t), createElementNS: (ns, t) => new El(t), createTextNode: t => { const e = new El('#text'); e._teks = String(t); return e; }, createDocumentFragment: () => new El('#frag'),
    addEventListener() {}, removeEventListener() {}, dispatchEvent: () => true,
    getElementById: id => dok.html.semua().find(n => n.id === id) || null, querySelector: s => dok.html.querySelector(s), querySelectorAll: s => dok.html.querySelectorAll(s),
  };
  return { El, Ev, document, main };
}

const SOAL = [1, 2, 3, 4].map(i => ({ id: 'B7-01' + i, topik: 'B7.1', tingkat: ['B', 'C'], jenis: 'konsep', stem: 'Soal uji nomor ' + i, opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, kunci: 'A',
  pembahasan: { inti: 'Inti jawaban soal ' + i + '.', jebakan: i === 1 ? 'Jebakan soal satu.' : undefined,
    mudah: i % 2 ? 'Kalimat pertama soal ' + i + '. Kalimat kedua. Cara ingat: barang kembali pakai retur.' : 'Penjelasan tanpa kalimat ingat. Kalimat kedua.',
    mengapaSalah: { B: 'Alasan B keliru.', C: 'Alasan C keliru.', D: 'Alasan D keliru.' } },
  dasarHukum: [{ pasal: 'Pasal 5A ayat (2) UU PPN', berlakuSejak: '2010-04-01' }] }));
function siapkan() {
  const D = domTiruan(); const isi = {}; const sesi = {};
  const ctx = {
    Element: D.El, HTMLElement: D.El, Node: D.El, DocumentFragment: D.El, Event: D.Ev, CustomEvent: D.Ev, console, Intl, Date, Math, JSON, document: D.document,
    addEventListener() {}, removeEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    localStorage: { getItem: k => (k in isi ? isi[k] : null), setItem: (k, v) => { isi[k] = String(v); }, removeItem: k => { delete isi[k]; } },
    sessionStorage: { getItem: k => (k in sesi ? sesi[k] : null), setItem: (k, v) => { sesi[k] = String(v); }, removeItem: k => { delete sesi[k]; } },
    location: { hash: '#latih', href: 'http://uji/#latih', pathname: '/', search: '', reload() {} },
    history: { state: null, scrollRestoration: 'auto', replaceState(st) { this.state = st; }, pushState(st) { this.state = st; } },
    performance: { now: () => Date.now() }, navigator: { platform: 'Linux', userAgent: '' },
    requestAnimationFrame: f => { const t = setTimeout(f, 0); if (t.unref) t.unref(); return t; }, cancelAnimationFrame: () => {}, scrollTo() {}, scrollBy() {}, innerWidth: 390, innerHeight: 844,
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t.unref) t.unref(); return t; }, clearTimeout,
    setInterval: (f, ms) => { const t = setInterval(f, ms); if (t.unref) t.unref(); return t; }, clearInterval,
  };
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of ['core.js', 'learn.js', 'soal.js', 'views-belajar.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  const UKP = ctx.UKP;
  UKP.fokusNanti = UKP.fokusNanti || (() => {});
  UKP.views.beranda = () => D.document.createElement('div');
  UKP.register({ meta: { kode: 'B7', nama: 'Akuntansi Perpajakan', diujiDi: ['B', 'C'] }, topik: [{ id: 'B7.1', judul: 'Topik uji' }], soal: SOAL });
  const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tingkat = 'B'; s.profil.nama = 'Nicky';
  const toast = []; UKP.toast = t => { toast.push(String(t)); }; UKP.toast.tutup = () => {};
  UKP.konfirmasi = () => Promise.resolve(true);
  UKP.tim = { kirimRingkasan() {} };
  UKP.util.acak = a => a.slice(); // urutan tetap supaya soal yang tampil bisa dipilih
  return { ctx, UKP, s, main: D.main, toast, Ev: D.Ev, document: D.document };
}
const teks = el => el.textContent.replace(/\s+/g, ' ').trim();
const soalEl = T => T.main.querySelector('.soal');
const soalKini = T => SOAL.find(x => x.id === soalEl(T).getAttribute('data-id'));
const ketuk = (T, huruf) => { const inp = soalEl(T).querySelectorAll('input').find(i => i.getAttribute('value') === huruf); inp.checked = true; inp.dispatchEvent(new T.Ev('change', { bubbles: true })); };
const yakinAwal = (T, v) => soalEl(T).querySelector('.keyakinan-awal').querySelectorAll('button').find(b => b.getAttribute('data-yakin') === v).click();
const lanjut = T => soalEl(T).querySelectorAll('.btn-primary').find(b => /Lanjut|Lihat hasil/.test(b.textContent)).click();
const mulai = ids => { const T = siapkan(); T.UKP.go('latih', { ids: ids.join(',') }); return T; };

test('pisahMudah: kalimat pertama, Cara ingat berhuruf kapital, singkatan tidak memotong kalimat', () => {
  const T = siapkan(); const P = T.UKP.pisahMudah;
  const a = P('Nota pembatalan dipakai untuk jasa. Kalau jasa batal, buat nota. Cara ingat: barang kembali pakai retur.');
  assert.equal(a.pertama, 'Nota pembatalan dipakai untuk jasa.'); assert.equal(a.sisa, 'Kalau jasa batal, buat nota.'); assert.equal(a.ingat, 'Barang kembali pakai retur.');
  const b = P('Tanpa kalimat ingat. Kalimat kedua.'); assert.equal(b.ingat, ''); assert.equal(b.pertama, 'Tanpa kalimat ingat.');
  assert.equal(P('Menurut UU No. 7 Tahun 2021 tarifnya naik. Lalu turun.').pertama, 'Menurut UU No. 7 Tahun 2021 tarifnya naik.');
  assert.equal(P('Satu kalimat saja tanpa titik').pertama, 'Satu kalimat saja tanpa titik');
});

test('kop sesi latihan sendiri: kelas kop-sesi-v10, judul dan angka berlabel, ruas per soal dengan ruas sekarang', () => {
  const T = mulai(['B7-011', 'B7-012', 'B7-013']);
  const kop = T.main.querySelector('.fokus-bar'); assert.ok(kop.classList.contains('kop-sesi-v10'));
  assert.equal(teks(kop.querySelector('.fokus-judul')), 'Ulang · soal 1 dari 3 · 0 benar');
  let ruas = kop.querySelector('.kop-sesi-ruas').querySelectorAll('i'); assert.equal(ruas.length, 3);
  assert.deepEqual(ruas.map(i => i.className), ['kini', '', '']);
  ketuk(T, 'A');
  ruas = kop.querySelector('.kop-sesi-ruas').querySelectorAll('i');
  assert.deepEqual(ruas.map(i => i.className), ['ok', '', ''], 'soal yang sudah divonis langsung terisi, tanpa ruas kuning');
  assert.match(teks(kop.querySelector('.fokus-judul')), /1 benar$/);
  lanjut(T); ruas = kop.querySelector('.kop-sesi-ruas').querySelectorAll('i');
  assert.deepEqual(ruas.map(i => i.className), ['ok', 'kini', '']);
});

test('fokusBar tanpa opsi sesi tidak berubah (papan bersama, room, dek Ulang)', () => {
  const T = siapkan(); const el = T.UKP.c.fokusBar({ onKeluar() {} });
  assert.ok(!el.classList.contains('kop-sesi-v10')); assert.equal(el.aturRuas, undefined); assert.ok(!el.querySelector('.kop-sesi-ruas'));
  assert.deepEqual(el.children.map(c => c.className), ['icon-btn', 'fokus-judul', 'fokus-kanan']);
});

test('kop sesi memasang html[data-kop-sesi] (scroll-padding dan tautan lewati); mode fokus mati mencabutnya', () => {
  const T = siapkan(); const html = T.document.documentElement;
  T.UKP.c.fokusBar({ onKeluar() {} }); assert.ok(!html.hasAttribute('data-kop-sesi'), 'fokusBar tanpa sesi tidak memasang');
  T.UKP.mode.fokus(true); T.UKP.c.fokusBar({ sesi: true, onKeluar() {} }); assert.ok(html.hasAttribute('data-kop-sesi'));
  T.UKP.mode.fokus(false); assert.ok(!html.hasAttribute('data-kop-sesi'));
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
  const dasar = css.slice(css.indexOf('/* v10 dasar: mulai */'), css.indexOf('/* v10 dasar: selesai */'));
  assert.match(dasar, /html\[data-kop-sesi\] \{ scroll-padding-top: calc\(var\(--v10-kop-sesi-h\)/);
  assert.match(dasar, /html\[data-kop-sesi\] \.skip:focus-visible \{ top: calc\(var\(--v10-kop-sesi-h\)/);
});

test('ruas sesi panjang (lebih dari 20 soal) menjadi satu bilah menerus', () => {
  const T = siapkan(); const el = T.UKP.c.fokusBar({ sesi: true, onKeluar() {} });
  el.aturRuas(10, 50, true); const r = el.querySelector('.kop-sesi-ruas');
  assert.ok(r.hasAttribute('data-menerus')); assert.ok(r.querySelector('.ruas-isi')); assert.equal(r.querySelectorAll('i').length, 0);
  el.aturRuas(2, 10, true); assert.ok(!r.hasAttribute('data-menerus')); assert.equal(r.querySelectorAll('i').length, 10);
});

test('sebelum menjawab: segmen keyakinan di atas opsi dengan kalimat penuntun; bar bawah menulis langkahnya dan "Tidak tahu"', () => {
  const T = mulai(['B7-011']); const w = soalEl(T);
  assert.ok(w.classList.contains('soal-v10'));
  const anak = w.children.filter(c => c.tagName !== '#TEXT').map(c => c.className.split(' ')[0]);
  assert.ok(anak.indexOf('keyakinan') >= 0 && anak.indexOf('keyakinan') < anak.indexOf('opsi'), 'segmen di atas opsi: ' + anak.join(','));
  assert.equal(teks(w.querySelector('.keyakinan-awal .label')), 'Seberapa yakin? Pilih bila mau, lalu ketuk jawaban.');
  const bar = w.querySelector('.bar-aksi-v10'); assert.ok(bar && !bar.hidden);
  assert.match(teks(bar), /Ketuk satu jawaban\. Pembahasan langsung muncul\. Tidak tahu/);
  assert.ok(bar.querySelector('.tidak-tahu-baris'), 'kait lama .tidak-tahu-baris tetap ada');
});

test('salah tanpa keyakinan: vonis, alasan dari opsi yang dipilih, Kenapa bukan tanpa opsi itu, penanda susulan, kartu di panel', () => {
  const T = mulai(['B7-011']); ketuk(T, 'B');
  const w = soalEl(T); const u = w.querySelector('.umpan-v10'); assert.ok(u);
  const judul = u.querySelector('.vonis-judul'); assert.equal(teks(judul), 'Salah. Kuncinya A.');
  const alasan = u.querySelector('.vonis-alasan'); assert.equal(teks(alasan), 'Alasan B keliru.');
  assert.equal(judul.getAttribute('aria-describedby'), alasan.id, 'alasan dibaca bersama judul');
  assert.match(teks(u.querySelector('.vonis-ket')), /^Dipilih tanpa tanda yakin/);
  const sub = u.querySelectorAll('.lipat-sub').map(teks);
  assert.ok(sub.includes('Kenapa bukan C, D'), sub.join(' | '));
  assert.ok(!teks(u.querySelector('.v10-bukan')).includes('Alasan B'), 'alasan B tidak diulang di lipatan');
  assert.equal(teks(u.querySelector('.lipat-daftar')), 'Ketentuan, 2 opsi lain, jebakan, 1 pasal');
  assert.equal(teks(u.querySelector('.ingat')), 'Cara ingat Barang kembali pakai retur.');
  assert.equal(teks(u.querySelector('.jelas .inti-kalimat')), 'Kalimat pertama soal 1.');
  const sus = u.querySelector('.yakin-susulan'); assert.ok(sus); assert.equal(teks(sus.querySelector('.label')), 'Tadi Anda seberapa yakin?');
  assert.match(teks(u), /Kartu dari soal ini masuk dek Ulang/); assert.ok(!T.toast.some(x => /Kartu/.test(x)), 'tanpa toast kartu');
  // lencana dan tombol
  const lb = w.querySelectorAll('label');
  assert.equal(teks(lb.find(l => l.dataset.hasil === 'kunci').querySelector('.tanda')), 'Kunci');
  assert.equal(teks(lb.find(l => l.dataset.hasil === 'salah').querySelector('.tanda')), 'Jawaban Anda');
  assert.ok(w.querySelectorAll('input').every(i => i.disabled), 'opsi keluar dari urutan Tab');
  assert.equal(teks(w.querySelector('.bar-aksi-v10 .btn-primary')), 'Lihat hasil');
  // tanpa wilayah status untuk vonis
  assert.equal(teks(w.querySelector('[role=status]')), '');
  // penanda susulan memperbarui baris keterangan dan data keyakinan
  sus.querySelectorAll('button').find(b => b.getAttribute('data-yakin') === 'ragu').click();
  assert.match(teks(u.querySelector('.vonis-ket')), /^Dipilih dengan ragu/);
  const j = T.UKP.store.get().jawaban; assert.equal(j[j.length - 1].keyakinan, 'ragu');
});

test('salah dengan yakin: catatan "Yakin, tapi salah." tanpa penanda susulan', () => {
  const T = mulai(['B7-011']); yakinAwal(T, 'yakin'); ketuk(T, 'C');
  const u = soalEl(T).querySelector('.umpan-v10');
  assert.match(teks(u.querySelector('.vonis-ket')), /^Yakin, tapi salah\./);
  assert.ok(!u.querySelector('.yakin-susulan'));
  const j = T.UKP.store.get().jawaban; assert.equal(j[j.length - 1].keyakinan, 'yakin');
});

test('Cara ingat tidak tampil untuk soal tanpa kalimatnya', () => {
  const T = mulai(['B7-012']); ketuk(T, 'B');
  const u = soalEl(T).querySelector('.umpan-v10');
  assert.equal(u.querySelector('.ingat'), null); assert.ok(u.querySelector('.jelas'));
});

test('benar dan yakin: versi pendek (Penjelasan mudah ikut dilipat); benar dan ragu: Penjelasan mudah tetap terbuka', () => {
  let T = mulai(['B7-011', 'B7-012']); yakinAwal(T, 'yakin'); ketuk(T, 'A');
  let u = soalEl(T).querySelector('.umpan-v10');
  assert.equal(teks(u.querySelector('.vonis-judul')), 'Benar.'); assert.equal(u.querySelector('.vonis-alasan'), null);
  assert.equal(u.querySelector('.jelas'), null); assert.ok(u.querySelector('.ingat'));
  assert.equal(u.querySelectorAll('.lipat-sub').map(teks)[0], 'Penjelasan mudah');
  assert.match(teks(u.querySelector('.lipat-daftar')), /^Penjelasan mudah, ketentuan, 3 opsi lain/);
  assert.equal(teks(soalEl(T).querySelectorAll('label').find(l => l.dataset.hasil === 'kunci').querySelector('.tanda')), 'Jawaban Anda, benar');
  assert.equal(teks(soalEl(T).querySelector('.bar-aksi-v10 .btn-primary')), 'Lanjut ke soal 2');
  T = mulai(['B7-011']); yakinAwal(T, 'ragu'); ketuk(T, 'A');
  u = soalEl(T).querySelector('.umpan-v10'); assert.ok(u.querySelector('.jelas'));
  assert.match(teks(u.querySelector('.vonis-ket')), /^Dipilih dengan ragu/);
});

test('"Tidak tahu" tetap ada dan bekerja: vonis "Kuncinya A.", tanpa penanda susulan, tercatat sebagai jawaban kosong', () => {
  const T = mulai(['B7-011']);
  soalEl(T).querySelectorAll('button').find(b => teks(b) === 'Tidak tahu').click();
  const u = soalEl(T).querySelector('.umpan-v10');
  assert.equal(teks(u.querySelector('.vonis-judul')), 'Kuncinya A.'); assert.match(teks(u.querySelector('.vonis-ket')), /^Ditandai tidak tahu/);
  assert.equal(u.querySelector('.yakin-susulan'), null);
  const j = T.UKP.store.get().jawaban; assert.equal(j[j.length - 1].opsi, '-');
});

test('konteks lain tetap jalur lama: cek, ulas, papan bersama, dialog soal', () => {
  const T = siapkan(); const so = T.UKP.konten.soal('B7-011');
  const cek = T.UKP.c.soal(so, { konteks: 'cek', onLanjut() {}, langsung: true });
  assert.ok(!cek.classList.contains('soal-v10'));
  const v10Tanpa = T.UKP.c.soal(so, { konteks: 'latih', onLanjut() {}, langsung: true });
  assert.ok(!v10Tanpa.classList.contains('soal-v10'), 'tanpa opsi v10 (dialog soal Cari) tetap lama');
  const ulas = T.UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, jawabanAwal: 'B', konteks: 'ulas', v10: true });
  assert.ok(!ulas.classList.contains('soal-v10')); assert.ok(!ulas.querySelector('.umpan-v10')); assert.ok(ulas.querySelector('.umpan .status'));
  const papan = T.UKP.c.soal(so, { konteks: 'latih', v10: true, onLanjut() {}, bersama: { peserta: ['Nicky', 'Mita'] } });
  assert.ok(!papan.classList.contains('soal-v10')); assert.ok(papan.querySelector('.papan-bersama'));
  const panel = T.UKP.c.umpan(so, 'B', 30, { konteks: 'latih', langsung: true });
  assert.ok(!panel.classList.contains('umpan-v10')); assert.ok(panel.querySelector('.status.status-besar'));
});

test('Simulasi tetap tanpa warna vonis sebelum dikirim', () => {
  const T = siapkan(); const so = T.UKP.konten.soal('B7-011');
  const el = T.UKP.c.soal(so, { mode: 'ujian', v10: true, jawabanAwal: 'B', onPilih() {} });
  assert.ok(!el.classList.contains('soal-v10'));
  assert.ok(el.querySelectorAll('label').every(l => !l.dataset.hasil), 'tanpa tanda kunci atau salah');
  assert.equal(el.querySelector('.umpan'), null);
});

test('teks dan komentar baru tanpa tanda pisah panjang, tanda panah, atau jalur folder sementara', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8');
  const blok = css.slice(css.indexOf('/* v10 latih: mulai */'), css.indexOf('/* v10 latih: selesai */'));
  assert.ok(blok.length > 1000);
  const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'soal.js'), 'utf8');
  const baris = src.split('\n').filter(b => /v10/.test(b)).concat(blok.split('\n'));
  // pola dirangkai dari potongan supaya baris ini sendiri tidak memuat karakter atau kata yang dilarang
  const larang = new RegExp('[\\u2014\\u2192\\u2190\\u21D2]|-' + '>|scratch' + 'pad|/' + 'tmp/');
  for (const b of baris) assert.ok(!larang.test(b), b.slice(0, 120));
});

test('dokumen v10: docs/DESAIN-V10.md ada, blok README desain-1000 tepat sebelum mabar-973, keduanya tanpa karakter terlarang', () => {
  const akar = path.join(__dirname, '..');
  const dok = fs.readFileSync(path.join(akar, 'docs', 'DESAIN-V10.md'), 'utf8');
  const readme = fs.readFileSync(path.join(akar, 'README.md'), 'utf8');
  for (const judul of ['## 1. Prinsip', '## 2. Token', '## 3. Aturan komponen', '## 4. Mikrocopy', '## 5. Yang tidak diubah', '## 7. Tahap berikutnya', '## 8. Cara menguji']) assert.ok(dok.includes(judul), judul);
  const a = readme.indexOf('<!-- desain-1000:mulai -->'), b = readme.indexOf('<!-- desain-1000:selesai -->'), c = readme.indexOf('<!-- mabar-973:mulai -->');
  assert.ok(a >= 0 && b > a && c > b, 'urutan blok README');
  assert.equal(readme.slice(b, c).replace('<!-- desain-1000:selesai -->', '').trim(), '');
  const larang = new RegExp('[\\u2014\\u2192\\u2190\\u21D2]|-' + '>|=' + '>|scratch' + 'pad|/' + 'tmp/');
  const penanda = new RegExp('<!-' + '- [a-z0-9:-]+ -' + '-' + '>', 'g');   // penanda blok README boleh
  for (const t of [dok, readme.slice(a, b)]) for (const baris of t.split('\n')) assert.ok(!larang.test(baris.replace(penanda, '')), baris.slice(0, 120));
});
