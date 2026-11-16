/* v9.7.3 halaman Latih (latihan sendiri) DIJALANKAN di DOM tiruan (konteks vm), tanpa peramban. Jalankan: node --test test/
   Muat ulang ditiru dengan konteks baru yang memakai salinan localStorage, sessionStorage, dan history.state dari konteks lama, sesudah
   pendengar pagehide konteks lama dipanggil. Yang diuji: soal yang belum dijawab (kriteria 1), soal yang sudah dijawab dan "Tidak tahu"
   (kriteria 2), layar Latihan selesai tanpa efek samping kedua (kriteria 3), putaran ulang (4), soal hilang dan data gagal dimuat (6),
   sessionStorage tidak tersedia atau melempar (7), dan mode bersama (8). Juga (b): rute { mulai } / { ids } yang dipulihkan selama mode
   bersama aktif tidak memulai latihan bersama baru, dan (c): penjaga klik ganda tombol Mulai di dialog room (js/views-ruang.js).
   Fungsi murni ada di test/v973-titik.test.js. Soal tiruan dibuat di sini (tidak membaca js/data). */
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

const KUNCI = 'ukp.latihSendiri';
// o = { isi (localStorage), sesi (sessionStorage), state (history.state), tanpaSesi, sesiLempar, galatMuat, ruang }
function siapkan(o) {
  o = o || {};
  const D = domTiruan(); const dengar = {}; const isi = Object.assign({}, o.isi || {}); const sesi = Object.assign({}, o.sesi || {});
  const galat = [];
  const konsol = Object.assign({}, console, { error: (...a) => { galat.push(a.map(String).join(' ')); } });
  const ctx = {
    Element: D.El, HTMLElement: D.El, Node: D.El, DocumentFragment: D.El, Event: D.Ev, CustomEvent: D.Ev, console: konsol, Intl, Date, Math, JSON, document: D.document,
    addEventListener: (n, f) => { (dengar[n] = dengar[n] || []).push(f); },
    removeEventListener: (n, f) => { const a = dengar[n] || []; const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    localStorage: { getItem: k => (k in isi ? isi[k] : null), setItem: (k, v) => { isi[k] = String(v); }, removeItem: k => { delete isi[k]; } },
    location: { hash: '#latih', href: 'http://uji/#latih', pathname: '/', search: '', reload() { ctx.__dimuatUlang = (ctx.__dimuatUlang || 0) + 1; } },
    history: { state: o.state ? JSON.parse(JSON.stringify(o.state)) : null, scrollRestoration: o.gulir || 'auto', replaceState(st) { this.state = st; }, pushState(st) { this.state = st; } },
    performance: { now: () => Date.now() }, navigator: { platform: 'Linux', userAgent: '' },
    requestAnimationFrame: f => { const t = setTimeout(f, 0); if (t.unref) t.unref(); return t; }, cancelAnimationFrame: () => {}, scrollTo() {}, innerWidth: 1280, innerHeight: 900,
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t.unref) t.unref(); return t; }, clearTimeout,
    setInterval: (f, ms) => { const t = setInterval(f, ms); if (t.unref) t.unref(); return t; }, clearInterval,
  };
  // sesiLempar: pengakses sessionStorage melempar (dipasang sesudah createContext; aksesor yang dipasang sebelumnya tidak dipertahankan vm).
  // sesiRusak: sessionStorage ada, tetapi getItem, setItem, dan removeItem melempar
  const lempar = () => { throw new Error('SecurityError'); };
  if (o.sesiRusak) ctx.sessionStorage = { getItem: lempar, setItem: lempar, removeItem: lempar };
  else if (!o.tanpaSesi && !o.sesiLempar) ctx.sessionStorage = { getItem: k => (k in sesi ? sesi[k] : null), setItem: (k, v) => { sesi[k] = String(v); }, removeItem: k => { delete sesi[k]; } };
  if (o.galatMuat) ctx.__ukpMuat = { galat: () => o.galatMuat.slice(), siap() {} };
  ctx.window = ctx; vm.createContext(ctx);
  if (o.sesiLempar) {
    vm.runInContext("Object.defineProperty(globalThis, 'sessionStorage', { configurable: true, get() { throw new Error('SecurityError'); } })", ctx);
    assert.throws(() => vm.runInContext('window.sessionStorage', ctx), /SecurityError/, 'pengakses sessionStorage benar-benar melempar');
  }
  const berkas = ['core.js', 'learn.js', 'soal.js', 'views-belajar.js'].concat(o.ruang ? ['views-ruang.js'] : []);
  for (const b of berkas) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  const UKP = ctx.UKP; const L = UKP.belajar;
  UKP.fokusNanti = UKP.fokusNanti || (() => {});
  UKP.views.beranda = () => D.document.createElement('div');
  UKP.register({ meta: { kode: 'B7', nama: 'Akuntansi Perpajakan', diujiDi: ['B', 'C'] }, topik: [{ id: 'B7.1', judul: 'Topik uji' }],
    soal: [1, 2, 3, 4, 5, 6].map(i => ({ id: 'B7-00' + i, topik: 'B7.1', tingkat: ['B', 'C'], jenis: 'konsep', stem: 'Soal uji nomor ' + i, opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, kunci: 'A',
      pembahasan: { inti: 'Inti jawaban soal ' + i + '.', mudah: 'Penjelasan sehari-hari soal ' + i + '.' } })) });
  const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tingkat = 'B'; s.profil.nama = 'Nicky';
  const toast = []; UKP.toast = t => { toast.push(String(t)); };
  if (o.toastAksi) UKP.toast.tutup = () => {}; // toast beraksi (Urungkan) tersedia, seperti di peramban
  const dialog = []; let jawabDialog = () => Promise.resolve(true);
  UKP.konfirmasi = (judul, isiDlg, opsi) => { dialog.push({ judul, isi: isiDlg, opsi }); return jawabDialog(); };
  const efek = { hadir: 0, kirim: 0 };
  const hadirAsli = UKP.hadir.catat; UKP.hadir.catat = (...a) => { efek.hadir++; return hadirAsli.apply(UKP.hadir, a); };
  UKP.tim = { kirimRingkasan: () => { efek.kirim++; } };
  const bersama = () => { L.siapBersama(s); s.bersama.aktif = true; s.bersama.peserta = ['Nicky', 'Mita']; };
  return { ctx, UKP, L, s, main: D.main, dengar, toast, dialog, efek, galat, isi, sesi, bersama, Ev: D.Ev, document: D.document, aturDialog: f => { jawabDialog = f; } };
}
const tunggu = ms => new Promise(r => setTimeout(r, ms));
const teks = T => T.main.textContent.replace(/\s+/g, ' ');
const soalKini = T => { const el = T.main.querySelector('.soal'); return el ? el.getAttribute('data-id') : null; };
const tombol = (T, re) => T.main.querySelectorAll('button').find(b => re.test(b.textContent.replace(/\s+/g, ' ').trim()));
// jawab lewat pintasan huruf (jalur yang sama dengan klik opsi: pilih lalu langsung diperiksa)
const jawab = (T, huruf) => { const w = T.main.querySelector('.soal'); w.dispatchEvent(new T.Ev('keydown', { key: huruf, bubbles: true, target: w })); };
// v10 latih: tombol utama menyebut langkahnya ("Lanjut ke soal N"; soal terakhir "Lihat hasil")
const lanjut = T => { const b = T.main.querySelectorAll('.sticky-actions .btn-primary').find(x => /Lanjut|Lihat hasil/.test(x.textContent)); assert.ok(b, 'tombol Lanjut'); b.click(); };
const titik = T => { const t = T.sesi[KUNCI]; return t ? JSON.parse(t) : null; };
// tiru muat ulang: pagehide di konteks lama, lalu konteks baru dengan salinan penyimpanan dan entri riwayat yang sama
function muatUlang(T, o) {
  (T.dengar.pagehide || []).slice().forEach(f => f({ type: 'pagehide' }));
  T.UKP.store.flush();
  const B = siapkan(Object.assign({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }, o || {}));
  B.UKP.mulaiDariHash();
  return B;
}
const nJawaban = T => (T.UKP.store.get().jawaban || []).length;

test('kriteria 1: muat ulang di soal yang belum dijawab: soal, urutan, kop, detik, dan riwayat sama', async () => {
  const T = siapkan(); T.UKP.go('latih', {});
  assert.ok(soalKini(T), 'latihan langsung mulai');
  const t0 = titik(T); assert.ok(t0 && t0.ids.length === 6 && t0.idx === 0, 'titik disimpan saat mulai');
  jawab(T, 'A'); lanjut(T);
  assert.match(teks(T), /Soal 2 dari 6 · 1 benar/);
  const id2 = soalKini(T); await tunggu(1100);
  const B = muatUlang(T);
  assert.equal(B.UKP.sekarang().pulih, true);
  assert.equal(soalKini(B), id2, 'soal yang sama');
  assert.match(teks(B), /Soal 2 dari 6 · 1 benar/);
  const t1 = titik(B); assert.deepEqual(t1.ids, t0.ids, 'urutan daftar sama');
  assert.ok(t1.detikSoal >= 1, 'detik soal lanjut: ' + t1.detikSoal);
  assert.equal(t1.riwayat.length, 1); assert.equal(t1.riwayat[0].id, t0.ids[0]);
  assert.ok(tombol(B, /Soal sebelumnya/), 'Soal sebelumnya tetap ada (riwayat utuh)');
  assert.deepEqual(B.galat, []);
  B.UKP.go('beranda');
  assert.equal(titik(B), null, 'navigasi di dalam aplikasi menghapus titik');
});

test('kriteria 2: muat ulang di soal yang sudah dijawab: tampil terjawab, tidak dicatat dua kali, Lanjut menghitung benar', () => {
  const T = siapkan(); T.UKP.go('latih', {});
  jawab(T, 'A'); lanjut(T); jawab(T, 'B'); // soal 2 salah, belum dilanjutkan
  assert.match(teks(T), /Soal 2 dari 6 · 1 benar/);
  const id2 = soalKini(T); const n0 = nJawaban(T);
  assert.equal(titik(T).terjawab, 1);
  const B = muatUlang(T);
  assert.equal(soalKini(B), id2);
  assert.equal(nJawaban(B), n0, 'jawaban tidak dicatat ulang');
  const w = B.main.querySelector('.soal');
  assert.ok(w.querySelector('fieldset.terkunci'), 'opsi terkunci');
  const lbl = w.querySelectorAll('label').find(x => x.dataset.hasil === 'salah'); assert.ok(lbl, 'opsi salah ditandai');
  assert.equal(lbl.querySelector('kbd').textContent, 'B', 'opsi yang dipilih ditandai');
  assert.equal(w.querySelectorAll('label').find(x => x.dataset.hasil === 'kunci').querySelector('kbd').textContent, 'A');
  assert.match(teks(B), /Salah/); assert.match(teks(B), /Penjelasan mudah/); assert.match(teks(B), /Penjelasan sehari-hari soal/);
  assert.equal(titik(B).riwayat.length, 2, 'riwayat tidak bertambah');
  lanjut(B);
  assert.match(teks(B), /Soal 3 dari 6 · 1 benar/); assert.equal(nJawaban(B), n0);
  // jalur "Tidak tahu"
  tombol(B, /^Tidak tahu$/).click(); const n1 = nJawaban(B); assert.equal(n1, n0 + 1);
  const C = muatUlang(B);
  // v10 latih: vonis "Tidak tahu" berbunyi "Kuncinya A." dengan baris "Ditandai tidak tahu" (dulu "Belum tahu · kunci A")
  assert.match(teks(C), /Kuncinya A\./); assert.match(teks(C), /Ditandai tidak tahu/); assert.equal(nJawaban(C), n1);
  lanjut(C); assert.match(teks(C), /Soal 4 dari 6 · 1 benar/);
  const t = titik(C); assert.equal(t.riwayat.length, 3); assert.equal(t.riwayat[2].j, '-');
  assert.deepEqual(B.galat.concat(C.galat), []);
});

test('kriteria 3 dan 5: muat ulang di layar Latihan selesai menggambar ringkasan yang sama tanpa efek samping kedua', () => {
  const T = siapkan(); T.UKP.go('latih', {});
  for (let i = 0; i < 6; i++) { jawab(T, i % 2 ? 'B' : 'A'); lanjut(T); }
  assert.match(teks(T), /Latihan selesai/); assert.equal(T.efek.hadir, 1); assert.equal(T.efek.kirim, 1);
  const ring = teks(T).match(/6 soal · 3 benar[^.]*\./)[0];
  const t = titik(T); assert.ok(t.selesai && t.selesai.menit >= 1, 'keadaan selesai disimpan');
  const B = muatUlang(T);
  assert.match(teks(B), /Latihan selesai/); assert.ok(!soalKini(B), 'bukan latihan baru');
  assert.ok(teks(B).includes(ring), 'kalimat ringkasan sama: ' + ring);
  assert.equal(B.efek.hadir, 0, 'kehadiran tidak dicatat lagi'); assert.equal(B.efek.kirim, 0, 'ringkasan tim tidak dikirim lagi');
  assert.match(teks(B), /Keliru pada percobaan pertama/);
  // kriteria 4: putaran ulang dari ringkasan yang dipulihkan, lalu muat ulang di tengahnya
  tombol(B, /^Ulangi 3 soal yang salah$/).click();
  assert.match(teks(B), /Ulang · soal 1 dari 3 · 0 benar/);
  jawab(B, 'A'); lanjut(B);
  const C = muatUlang(B);
  assert.match(teks(C), /Ulang · soal 2 dari 3 · 1 benar/); assert.equal(titik(C).ulang, 1);
  assert.deepEqual(B.galat.concat(C.galat), []);
});

test('kriteria 3: keluar lebih awal lalu muat ulang: ringkasan yang sama; tombol ringkasan bekerja', async () => {
  const T = siapkan(); T.UKP.go('latih', {});
  jawab(T, 'A'); lanjut(T); jawab(T, 'C');
  T.main.querySelector('.fokus-bar').querySelectorAll('button')[0].click(); await tunggu(5); // Keluar, konfirmasi ya
  assert.match(teks(T), /Latihan selesai/); assert.match(teks(T), /berhenti di soal 2 dari 6/);
  const B = muatUlang(T);
  assert.match(teks(B), /berhenti di soal 2 dari 6/); assert.equal(B.efek.hadir + B.efek.kirim, 0);
  tombol(B, /^Latih \d+ soal/).click();
  assert.ok(soalKini(B), 'Latih lagi memulai latihan baru'); const t = titik(B); assert.equal(t.idx, 0); assert.equal(t.selesai, null);
});

test('kriteria 5: durasi ringkasan memakai lama aktif (waktu halaman tertutup tidak dihitung)', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  // titik dibuat seakan latihan dimulai 3 jam lalu dengan lama aktif 4 menit
  const t = titik(T); t.mulai -= 3 * 3600 * 1000; t.lama = 4 * 60000; T.sesi[KUNCI] = JSON.stringify(t);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  for (let i = 1; i < 6; i++) { jawab(B, 'A'); lanjut(B); }
  assert.match(teks(B), /6 soal · 6 benar pada percobaan pertama · 4 mnt\./);
});

test('waktu ketat: hitung mundur lanjut dari detik yang tersimpan', () => {
  const T = siapkan(); T.UKP.go('latih', { mulai: true, tempo: true });
  const t = titik(T); t.detikSoal = 100; T.sesi[KUNCI] = JSON.stringify(t);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  assert.equal(B.main.querySelector('.timer').textContent, '00:50', 'anggaran 150 detik dikurangi 100');
});

test('kriteria 6: soal yang sudah tidak ada (semua data termuat): titik dibuang, latihan baru tanpa galat', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  const t = titik(T); t.ids[5] = 'B7-099'; T.sesi[KUNCI] = JSON.stringify(t);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  assert.match(teks(B), /Soal 1 dari 6 · 0 benar/, 'latihan baru');
  assert.ok(!titik(B).ids.includes('B7-099'), 'titik lama diganti'); assert.deepEqual(B.galat, []);
});

test('kriteria 6: berkas data gagal dimuat: titik tidak dibuang, banner Muat ulang, tanpa latihan baru', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  const t = titik(T); t.ids[5] = 'B8-001'; T.sesi[KUNCI] = JSON.stringify(t); const simpan = T.sesi[KUNCI]; // modul B8 tidak terdaftar
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  assert.ok(!soalKini(B), 'tidak memulai latihan baru');
  assert.match(teks(B), /Sebagian data soal gagal dimuat\. Muat ulang halaman untuk melanjutkan latihan\. Posisi latihan Anda tetap tersimpan\./);
  assert.doesNotMatch(teks(B), /Tidak ada soal yang cocok/);
  assert.equal(B.sesi[KUNCI], simpan, 'titik utuh');
  tombol(B, /^Muat ulang$/).click(); assert.equal(B.ctx.__dimuatUlang, 1);
  B.UKP.go('beranda'); assert.equal(B.sesi[KUNCI], simpan, 'saringan tanpa latihan sendiri tidak menghapus titik');
  // penjaga muat mencatat berkas data gagal walau modulnya ada
  const C = siapkan({ isi: T.isi, sesi: { [KUNCI]: JSON.stringify(Object.assign(titik(T), { ids: titik(T).ids.map((x, i) => i === 5 ? 'B7-077' : x) })) }, state: T.ctx.history.state, galatMuat: ['Berkas gagal dimuat: data/mu-B7.js'] });
  C.UKP.mulaiDariHash(); assert.ok(!soalKini(C)); assert.match(teks(C), /Posisi latihan Anda tetap tersimpan/);
});

test('kriteria 7: sessionStorage tidak tersedia atau melempar: berjalan seperti v9.7.2 tanpa galat konsol', () => {
  for (const o of [{ tanpaSesi: true }, { sesiLempar: true }, { sesiRusak: true }]) {
    const T = siapkan(o); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
    assert.match(teks(T), /Soal 2 dari 6 · 1 benar/);
    const B = muatUlang(T, o);
    assert.match(teks(B), /Soal 1 dari 6 · 0 benar/, 'latihan baru seperti v9.7.2');
    B.UKP.go('beranda');
    assert.deepEqual(T.galat.concat(B.galat), [], JSON.stringify(o));
  }
});

test('kriteria 8: mode bersama aktif: titik latihan sendiri tidak dipakai, perilaku v9.7.2 tetap', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  const simpan = T.sesi[KUNCI];
  (T.dengar.pagehide || []).slice().forEach(f => f({ type: 'pagehide' })); T.UKP.store.flush();
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.bersama(); B.UKP.mulaiDariHash();
  assert.ok(!soalKini(B), 'saringan (F2), bukan latihan sendiri yang dilanjutkan');
  assert.equal((B.s.sesiBersama || []).length, 0, 'tidak ada sesi bersama baru');
  assert.ok(B.sesi[KUNCI], 'titik tidak dibuang');
  // papan bersama yang dimulai lewat navigasi baru menghapus titik sendiri milik tampilan ini? tidak: tampilan lain. Rute papan tetap { lanjut, sesi }
  B.UKP.go('latih', {}); assert.ok(soalKini(B)); const a = B.L.bersamaAktif(); assert.ok(a && a.sesiId);
  assert.equal(B.UKP.sekarang().params.lanjut, 1);
  assert.equal(JSON.parse(simpan).idx, 1);
});

test('navigasi baru ke Latih tetap memulai latihan baru walau titik ada; tab tanpa pulih tidak memakai titik', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state });
  B.UKP.go('latih', {});
  assert.match(teks(B), /Soal 1 dari 6 · 0 benar/); assert.equal(titik(B).idx, 0, 'titik ditimpa latihan baru');
});

test('latihan dari tombol Mulai di saringan (rute { atur: 1 }) juga bertahan saat dimuat ulang', () => {
  const T = siapkan(); T.UKP.go('latih', { atur: 1 });
  assert.ok(!soalKini(T)); tombol(T, /^Mulai/).click();
  return tunggu(5).then(() => {
    assert.ok(soalKini(T)); jawab(T, 'A'); lanjut(T); const id = soalKini(T);
    const B = muatUlang(T);
    assert.equal(soalKini(B), id); assert.match(teks(B), /Soal 2 dari \d+ · 1 benar/);
  });
});

// ---------- (b) rute yang dipulihkan tidak memulai latihan bersama baru ----------
test('(b) mode bersama aktif, rute { mulai } atau { ids } dipulihkan tanpa titik lanjut bersama: saringan, tanpa sesi baru', () => {
  for (const p of [{ mulai: true, n: 10 }, { ids: 'B7-001,B7-002' }]) {
    const T = siapkan({ state: { view: 'latih', params: p } }); T.bersama();
    T.UKP.mulaiDariHash();
    assert.equal(T.UKP.sekarang().pulih, true);
    assert.ok(!soalKini(T), 'halaman saringan: ' + JSON.stringify(p));
    assert.equal((T.s.sesiBersama || []).length, 0, 'tidak ada latihan bersama baru');
    assert.doesNotMatch(teks(T), /Tidak ada soal yang cocok/);
    assert.match(teks(T), /Latih soal/);
    // navigasi baru tetap memulai seperti v9.7.2
    T.UKP.go('latih', p);
    assert.ok(soalKini(T), 'navigasi baru memulai'); assert.equal(T.s.sesiBersama.length, 1);
    T.UKP.go('beranda');
  }
});

// ---------- (c) penjaga klik ganda tombol Mulai di dialog room ----------
test('(c) dua klik beruntun pada tombol Mulai dialog room hanya memulai sekali', async () => {
  for (const adaSesiLama of [false, true]) {
    const T = siapkan({ ruang: true }); T.bersama();
    if (adaSesiLama) {
      const id = T.L.mulaiSesiBersama(['Nicky', 'Mita'], ['B7-001', 'B7-002'], 600, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120, mode: 'latihan' });
      T.L.simpanBersamaAktif({ sesiId: id, soalIds: ['B7-001', 'B7-002'], idx: 1, sisaDetik: 300, anggaranDetik: 600, tempo: 'ujian', detikPerSoal: 126 });
      T.aturDialog(() => new Promise(r => setTimeout(() => r(true), 20)));
    }
    const LB = T.UKP.latihBank; let nTanya = 0; const asli = LB.bolehGantiSesi;
    LB.bolehGantiSesi = () => { nTanya++; return asli(); };
    let nGo = 0; const goAsli = T.UKP.go; T.UKP.go = (v, p, o) => { if (v === 'latih') nGo++; return goAsli(v, p, o); };
    const dlg = T.UKP.ruangUI.dialogMulaiLatihan();
    const b = dlg.querySelector('.room-mulai'); assert.ok(b, 'tombol Mulai');
    b.click(); b.click();
    await tunggu(60);
    assert.equal(nTanya, 1, 'klik kedua diabaikan selama penjaga berjalan (sesi lama: ' + adaSesiLama + ')');
    assert.equal(T.dialog.length, adaSesiLama ? 1 : 0, 'paling banyak satu dialog persetujuan');
    assert.equal(nGo, 1, 'latihan dimulai sekali');
    assert.equal(T.UKP.sekarang().view, 'latih');
    if (adaSesiLama) assert.equal(T.s.sesiBersama.filter(x => !x.selesai).length, 1, 'satu sesi berjalan');
    LB.bolehGantiSesi = asli;
  }
});

test('(c) sesudah Batal, tombol Mulai di dialog room bisa diklik lagi (penjaga dilepas)', async () => {
  const T = siapkan({ ruang: true }); T.bersama();
  const id = T.L.mulaiSesiBersama(['Nicky', 'Mita'], ['B7-001', 'B7-002'], 600, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120, mode: 'latihan' });
  T.L.simpanBersamaAktif({ sesiId: id, soalIds: ['B7-001', 'B7-002'], idx: 1, sisaDetik: 300, anggaranDetik: 600, tempo: 'ujian', detikPerSoal: 126 });
  T.aturDialog(() => Promise.resolve(false));
  const dlg = T.UKP.ruangUI.dialogMulaiLatihan(); const b = dlg.querySelector('.room-mulai');
  b.click(); await tunggu(10);
  assert.equal(T.dialog.length, 1); assert.ok(b.isConnected, 'dialog room tetap terbuka'); assert.equal(T.L.bersamaAktif().sesiId, id);
  T.aturDialog(() => Promise.resolve(true));
  b.click(); await tunggu(10);
  assert.equal(T.dialog.length, 2, 'klik sesudah Batal bertanya lagi'); assert.equal(T.UKP.sekarang().view, 'latih');
});

// ---------- v9.7.3 putaran pembetulan: temuan pemeriksa ----------
test('scrollRestoration: manual hanya selama latihan sendiri tampil, kembali auto saat Latih dilepas', () => {
  const T = siapkan(); T.UKP.go('latih', {});
  assert.equal(T.ctx.history.scrollRestoration, 'manual', 'entri latihan sendiri: tanpa pemulihan gulir peramban');
  T.UKP.go('beranda');
  assert.equal(T.ctx.history.scrollRestoration, 'auto', 'halaman sesudahnya memakai pemulihan gulir biasa');
  // muat ulang tidak melepas tampilan: entri Latih tetap manual
  T.UKP.go('latih', {}); jawab(T, 'A');
  // muat ulang: peramban mempertahankan nilai entri itu ('manual')
  const B = muatUlang(T, { gulir: 'manual' });
  assert.equal(B.ctx.history.scrollRestoration, 'manual');
  B.UKP.go('beranda'); assert.equal(B.ctx.history.scrollRestoration, 'auto');
});

const nyalakan = (T, re) => { const lab = T.main.querySelectorAll('label').find(l => re.test(l.textContent)); assert.ok(lab, 'sakelar ' + re); const inp = lab.querySelector('input'); inp.checked = true; inp.dispatchEvent(new T.Ev('change', { bubbles: true, target: inp })); };
test('saringan yang dipilih di layar (Waktu ketat, jumlah soal) ikut bertahan saat dimuat ulang', async () => {
  const T = siapkan(); T.UKP.go('latih', { atur: 1 });
  nyalakan(T, /Waktu ketat per soal/);
  const b10 = T.main.querySelectorAll('button').find(b => b.textContent.trim() === '10'); assert.ok(b10, 'segmen 10 soal'); b10.click();
  tombol(T, /^Mulai/).click(); await tunggu(5);
  assert.ok(T.main.querySelector('.timer'), 'hitung mundur sebelum muat ulang');
  const t = titik(T); t.detikSoal = 100; T.sesi[KUNCI] = JSON.stringify(t);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  const tm = B.main.querySelector('.timer'); assert.ok(tm, 'hitung mundur sesudah muat ulang');
  assert.equal(tm.textContent, '00:50');
  await tunggu(1100);
  assert.equal(tm.textContent, '00:49', 'hitung mundur turun dari detik yang tersimpan');
  // ringkasan sesudah muat ulang memakai saringan yang dipilih
  jawab(B, 'A'); B.main.querySelector('.fokus-bar').querySelectorAll('button')[0].click(); await tunggu(5);
  assert.match(teks(B), /Latihan selesai/);
  assert.ok(tombol(B, /^Latih 10 soal lagi$/), 'tombol ringkasan memakai 10 soal');
  assert.deepEqual(B.galat, []);
});

test('detik soal dan waktu mulai asli dipulihkan: detik jawaban, kop terjawab benar, dan kesalahan sebelum muat ulang', () => {
  const T = siapkan(); T.UKP.go('latih', {});
  jawab(T, 'B'); lanjut(T); // soal 1 salah
  const t = titik(T); t.detikSoal = 40; T.sesi[KUNCI] = JSON.stringify(t); T.UKP.store.flush();
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  jawab(B, 'A');
  const s = B.UKP.store.get(); assert.ok(s.jawaban[s.jawaban.length - 1].detik >= 40, 'detik jawaban membawa detik sebelum muat ulang');
  assert.equal(titik(B).detikSoal, 0, 'soal yang sudah dijawab tidak membawa detik berjalan');
  assert.match(teks(B), /Soal 2 dari 6 · 1 benar/);
  const C = muatUlang(B);
  assert.match(teks(C), /Soal 2 dari 6 · 1 benar/, 'kop soal terjawab benar sesudah muat ulang');
  lanjut(C); assert.match(teks(C), /Soal 3 dari 6 · 1 benar/);
  for (let i = 2; i < 6; i++) { jawab(C, 'A'); lanjut(C); }
  assert.match(teks(C), /6 soal · 5 benar/);
  assert.match(teks(C), /1 kesalahan di Topik uji\./, 'kesalahan dari sebelum muat ulang ikut dihitung di ringkasan');
});

test('keyakinan: diubah sesudah menjawab langsung disimpan, dipulihkan, dan tidak menambah jawaban', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A');
  const tadi = T.main.querySelector('.keyakinan-tadi'); assert.ok(tadi, 'penanda Tadi Anda');
  tadi.querySelectorAll('button').find(b => b.getAttribute('data-yakin') === 'yakin').click();
  assert.equal(titik(T).riwayat[0].k, 'yakin', 'disimpan saat keyakinan diubah');
  const n0 = nJawaban(T);
  const B = muatUlang(T);
  // v10 latih: keyakinan yang sudah terisi tidak memunculkan penanda susulan lagi; baris keterangan vonis menyebutnya
  assert.ok(!B.main.querySelector('.keyakinan-tadi'), 'penanda susulan hanya bila keyakinan kosong');
  assert.match(B.main.querySelector('.vonis-ket').textContent, /^Dipilih dengan yakin/, 'keyakinan dipulihkan di baris keterangan');
  lanjut(B); assert.equal(titik(B).riwayat[0].k, 'yakin', 'keyakinan riwayat dipulihkan'); assert.equal(nJawaban(B), n0);
});

test('ringkasan yang dipulihkan memakai menit tersimpan', () => {
  const T = siapkan(); T.UKP.go('latih', {}); for (let i = 0; i < 6; i++) { jawab(T, 'A'); lanjut(T); }
  const t = titik(T); t.selesai.menit = 7; T.sesi[KUNCI] = JSON.stringify(t);
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.UKP.mulaiDariHash();
  assert.match(teks(B), /6 soal · 6 benar[^.]*· 7 mnt\./);
});

test('soal salah yang dipulihkan menampilkan lagi baris kartu dengan Urungkan, tanpa toast kedua', () => {
  const T = siapkan({ toastAksi: true }); T.UKP.go('latih', {}); jawab(T, 'B');
  assert.equal((T.UKP.store.get().kartuOtomatis || []).length, 1);
  // v10 latih: baris kartu dek Ulang selalu di panel, juga di desktop (toast tidak lagi menutupi tombol)
  assert.ok(!T.toast.some(x => /Kartu dari soal ini/.test(x)), 'tanpa toast kartu saat menjawab');
  assert.match(teks(T), /Kartu dari soal ini masuk dek Ulang/);
  const B = muatUlang(T, { toastAksi: true });
  assert.match(teks(B), /Kartu dari soal ini masuk dek Ulang/);
  assert.ok(tombol(B, /^Urungkan$/), 'tombol Urungkan');
  assert.ok(!B.toast.some(x => /Kartu dari soal ini/.test(x)), 'tanpa toast kartu');
  assert.equal((B.UKP.store.get().kartuOtomatis || []).length, 1, 'kartu tidak dibuat dua kali');
  tombol(B, /^Urungkan$/).click();
  assert.equal((B.UKP.store.get().kartuOtomatis || []).length, 0, 'Urungkan bekerja');
});

test('titik yang diabaikan karena Mode mabar aktif dihapus saat halaman Latih dilepas', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'A'); lanjut(T);
  (T.dengar.pagehide || []).slice().forEach(f => f({ type: 'pagehide' })); T.UKP.store.flush();
  const B = siapkan({ isi: T.isi, sesi: T.sesi, state: T.ctx.history.state }); B.bersama(); B.UKP.mulaiDariHash();
  assert.ok(!soalKini(B)); assert.ok(titik(B), 'tidak dibuang selama halaman tampil');
  B.UKP.go('beranda');
  assert.equal(titik(B), null, 'dihapus oleh navigasi di dalam aplikasi');
});

test('kartu yang sudah ada sebelum jawaban itu tidak menampilkan baris Urungkan sesudah muat ulang (sama dengan sebelum muat ulang)', () => {
  const T = siapkan(); T.UKP.go('latih', {}); jawab(T, 'B');
  const k = T.UKP.store.get().kartuOtomatis[0]; k.dibuatPada -= 3600 * 1000; T.UKP.store.save();
  const B = muatUlang(T);
  assert.doesNotMatch(teks(B), /Kartu dari soal ini masuk dek Ulang/);
  assert.ok(!tombol(B, /^Urungkan$/));
});
