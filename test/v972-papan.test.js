/* v9.7.2 halaman Latih (papan latihan bersama) DIJALANKAN di DOM tiruan (konteks vm), tanpa peramban. Jalankan: node --test test/
   Yang diuji lewat views.latih yang sebenarnya: rute papan { lanjut, sesi } (D1), pendengar pagehide yang menyimpan titik lanjut dan
   dilepas saat tampilan dilepas (D6), titik lanjut rusak dan data soal yang gagal dimuat (D7, F1), rute yang dipulihkan saat muat
   ulang tidak langsung memulai (F2), penjaga tombol Mulai dan baris Buku Kesalahan (D4, F5), kanal tab lain (D3), dan peringatan
   penyimpanan penuh (D5, F4). Putaran 2: fokus awal dialog di Batal (G1), keterangan tab lain di kartu Lanjutkan dan toast yang bertahan
   (G2), tombol yang diketuk juga bertanya lewat kanal (G3), dan muat ulang di layar evaluasi membuka evaluasi sesi itu (G4). Soal tiruan dibuat di sini (tidak membaca js/data). Skenario peramban ada di tools/uji-muat-ulang.js. */
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

// BroadcastChannel tiruan: satu bus per konteks, pesan dikirim ke saluran lain bernama sama (tidak ke pengirim), secara asinkron
function busKanal() {
  const semua = new Set();
  return class KanalTiruan {
    constructor(nama) { this.nama = nama; this.onmessage = null; this.tutup = false; semua.add(this); }
    postMessage(data) { if (this.tutup) throw new Error('kanal ditutup'); for (const k of semua) if (k !== this && k.nama === this.nama && !k.tutup) setTimeout(() => { if (!k.tutup && k.onmessage) k.onmessage({ data }); }, 5); }
    close() { this.tutup = true; semua.delete(this); }
  };
}

const IDS = ['B7-001', 'B7-002', 'B7-003', 'B7-004'];
function siapkan(o) {
  o = o || {};
  const D = domTiruan(); const dengar = {}; const isi = {}; let penuh = false;
  const ctx = {
    Element: D.El, HTMLElement: D.El, Node: D.El, DocumentFragment: D.El, Event: D.Ev, CustomEvent: D.Ev, console, Intl, Date, Math, JSON, document: D.document,
    addEventListener: (n, f) => { (dengar[n] = dengar[n] || []).push(f); },
    removeEventListener: (n, f) => { const a = dengar[n] || []; const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    localStorage: { getItem: k => (k in isi ? isi[k] : null), setItem: (k, v) => { if (penuh) throw new Error('QuotaExceededError'); isi[k] = String(v); }, removeItem: k => { delete isi[k]; } },
    location: { hash: '#latih', href: 'http://uji/#latih', pathname: '/', search: '', reload() { ctx.__dimuatUlang = (ctx.__dimuatUlang || 0) + 1; } },
    history: { state: null, replaceState(st) { this.state = st; }, pushState(st) { this.state = st; } },
    performance: { now: () => Date.now() }, navigator: { platform: 'Linux', userAgent: '' },
    requestAnimationFrame: f => { const t = setTimeout(f, 0); if (t.unref) t.unref(); return t; }, cancelAnimationFrame: () => {}, scrollTo() {}, innerWidth: 1280, innerHeight: 900,
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t.unref) t.unref(); return t; }, clearTimeout,
    setInterval: (f, ms) => { const t = setInterval(f, ms); if (t.unref) t.unref(); return t; }, clearInterval,
  };
  if (o.kanal) ctx.BroadcastChannel = busKanal();
  if (o.galatMuat) ctx.__ukpMuat = { galat: () => o.galatMuat.slice(), siap() {} };
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of ['core.js', 'learn.js', 'soal.js', 'views-belajar.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  const UKP = ctx.UKP; const L = UKP.belajar;
  UKP.fokusNanti = UKP.fokusNanti || (() => {});
  UKP.views.beranda = () => D.document.createElement('div');
  // satu modul soal tiruan (B7). Modul lain sengaja tidak didaftarkan
  UKP.register({ meta: { kode: 'B7', nama: 'Akuntansi Perpajakan', diujiDi: ['B', 'C'] }, topik: [{ id: 'B7.1', judul: 'Topik uji' }],
    soal: [1, 2, 3, 4, 5, 6].map(i => ({ id: 'B7-00' + i, topik: 'B7.1', tingkat: ['B', 'C'], jenis: 'pg', stem: 'Soal uji nomor ' + i, opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, kunci: 'A', bahas: 'Pembahasan.' })) });
  const s = UKP.store.get(); s.profil.onboardingSelesai = true; s.profil.tingkat = 'B'; s.profil.nama = 'Nicky';
  const toast = []; const toastOpsi = []; UKP.toast = (t, op) => { toast.push(String(t)); toastOpsi.push(op || null); };
  const konfirmasiAsli = UKP.konfirmasi;
  const dialog = []; let jawabDialog = () => Promise.resolve(false);
  UKP.konfirmasi = (judul, isiDlg, opsi) => { dialog.push({ judul, isi: isiDlg, opsi }); return jawabDialog(); };
  const bersama = () => { L.siapBersama(s); s.bersama.aktif = true; s.bersama.peserta = ['Nicky', 'Mita']; };
  // sesi latihan bersama yang belum selesai dengan titik lanjut di soal ke-(idx+1)
  const sesi = (ids, idx) => {
    bersama();
    const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ids || IDS, 600, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120, mode: 'latihan' });
    L.catatSoalSesi(id, { id: 'B7-001', kunci: 'A', kode: 'B7', topik: 'B7.1' }, { Nicky: { o: 'A', k: 'yakin' }, Mita: { o: 'B', k: 'ragu' } }, 30);
    L.simpanBersamaAktif({ sesiId: id, soalIds: ids || IDS, idx: idx == null ? 1 : idx, sisaDetik: 300, anggaranDetik: 600, tempo: 'ujian', detikPerSoal: 126 });
    return id;
  };
  return { ctx, UKP, L, s, main: D.main, dengar, toast, toastOpsi, konfirmasiAsli, dialog, bersama, sesi, Ev: D.Ev, document: D.document,
    aturDialog: f => { jawabDialog = f; }, aturPenuh: v => { penuh = v; } };
}
const tunggu = ms => new Promise(r => setTimeout(r, ms));
const params = U => JSON.parse(JSON.stringify(U.sekarang().params));
const adaPapan = T => !!T.main.querySelector('.soal');
const teks = T => T.main.textContent.replace(/\s+/g, ' ');
const tombolMulai = T => T.main.querySelectorAll('button').find(b => /^Mulai latihan/.test(b.textContent.trim()) || b.classList.contains('btn-block'));

test('D1: papan latihan bersama baru menulis rutenya menjadi { lanjut: 1, sesi } (mulai dan ids dibuang)', () => {
  const T = siapkan(); T.bersama();
  T.UKP.go('latih', { ids: 'B7-002,B7-003', n: 10 });
  assert.ok(adaPapan(T), 'papan tampil');
  const a = T.L.bersamaAktif(); assert.ok(a && a.sesiId, 'titik lanjut tercatat');
  assert.deepEqual(params(T.UKP), { n: 10, lanjut: 1, sesi: a.sesiId });
  T.UKP.go('beranda');
});

test('D6: pendengar pagehide menyimpan titik lanjut saat itu juga dan dilepas saat tampilan dilepas', () => {
  const T = siapkan(); const id = T.sesi(IDS, 1);
  const dasar = (T.dengar.pagehide || []).length; // pendengar milik core.js (flush)
  T.UKP.go('latih', { lanjut: 1 });
  assert.ok(adaPapan(T)); assert.match(teks(T), /Soal 2 dari 4/);
  const pg = T.dengar.pagehide || []; assert.equal(pg.length, dasar + 1, 'papan memasang satu pendengar pagehide');
  // titik lanjut di penyimpanan dibuat basi tanpa lewat papan; pagehide harus menimpanya dengan keadaan papan yang sebenarnya
  T.s.bersamaAktif.sisaDetik = 99999; T.s.bersamaAktif.diperbarui = 1000; T.s.bersamaAktif.idx = 0;
  let flush = 0; const asli = T.UKP.store.flush; T.UKP.store.flush = () => { flush++; return asli(); };
  pg.slice().forEach(f => f({ type: 'pagehide' }));
  T.UKP.store.flush = asli;
  const a = T.s.bersamaAktif;
  assert.equal(a.sesiId, id); assert.equal(a.idx, 1, 'soal yang sedang tampil');
  assert.ok(a.sisaDetik <= 300, 'sisa waktu dari papan, bukan nilai basi: ' + a.sisaDetik);
  assert.ok(Date.now() - a.diperbarui < 5000, 'diperbarui baru');
  assert.ok(flush >= 1, 'langsung ditulis ke penyimpanan');
  T.UKP.go('beranda');
  assert.equal((T.dengar.pagehide || []).length, dasar, 'pendengar dilepas saat tampilan dilepas');
});

test('D7: titik lanjut yang soalnya sudah tidak ada (semua data termuat) diakhiri dengan banner', () => {
  const T = siapkan(); const id = T.sesi(['B7-001', 'B7-002', 'B7-099'], 1);
  T.UKP.go('latih', { lanjut: 1 });
  assert.ok(!adaPapan(T)); assert.match(teks(T), /tidak bisa dilanjutkan karena sebagian soalnya sudah tidak ada/);
  assert.equal(T.L.bersamaAktif(), null, 'titik lanjut dihapus'); assert.ok(T.L.sesiBersamaDari(id).selesai > 0, 'rekaman ditutup');
  assert.ok(!T.main.querySelector('.kartu-lanjut-bersama'), 'tanpa kartu Lanjutkan');
});

test('F1: modul soal yang tidak termuat tidak mengakhiri sesi: kartu Lanjutkan, banner muat ulang, papan tidak dilanjutkan', () => {
  const T = siapkan(); const id = T.sesi(['B7-001', 'B8-001', 'B7-002'], 1); // modul B8 tidak terdaftar (berkasnya gagal dimuat)
  T.UKP.go('latih', { lanjut: 1, sesi: id });
  assert.ok(!adaPapan(T), 'papan tidak dilanjutkan otomatis');
  assert.match(teks(T), /Sebagian data soal gagal dimuat\. Muat ulang halaman untuk melanjutkan latihan\./);
  assert.ok(T.main.querySelector('.kartu-lanjut-bersama'), 'kartu Lanjutkan tetap ada');
  const a = T.L.bersamaAktif(); assert.ok(a && a.sesiId === id, 'titik lanjut utuh'); assert.equal(T.L.sesiBersamaDari(id).selesai, null, 'rekaman belum ditutup');
  assert.doesNotMatch(teks(T), /sudah diakhiri/);
  const b = T.main.querySelectorAll('button').find(x => x.textContent.trim() === 'Muat ulang'); assert.ok(b, 'tombol Muat ulang'); b.click();
  assert.equal(T.ctx.__dimuatUlang, 1);
});

test('F1: penjaga muat mencatat berkas data gagal: soal yang hilang tidak dianggap terhapus walau modulnya ada', () => {
  const T = siapkan({ galatMuat: ['Berkas gagal dimuat: data/mu-A1.js'] }); const id = T.sesi(['B7-001', 'B7-099'], 0);
  T.UKP.go('latih', { lanjut: 1 });
  assert.ok(T.L.bersamaAktif() && T.L.bersamaAktif().sesiId === id, 'sesi tidak diakhiri');
  assert.match(teks(T), /Sebagian data soal gagal dimuat/);
  // galat lain (bukan berkas data) tidak menahan pengakhiran titik lanjut yang benar-benar rusak
  const T2 = siapkan({ galatMuat: ['Galat skrip: x is not defined @ js/tim.js:1', 'Berkas gagal dimuat: css/app.css'] }); T2.sesi(['B7-001', 'B7-099'], 0);
  T2.UKP.go('latih', { lanjut: 1 });
  assert.equal(T2.L.bersamaAktif(), null);
});

test('F1: periksaLanjut dan dataSoalKurang', () => {
  const T = siapkan(); const LB = T.UKP.latihBank;
  assert.deepEqual(JSON.parse(JSON.stringify(LB.periksaLanjut(null))), { arr: null, rusak: false, kurang: false });
  let r = LB.periksaLanjut({ soalIds: ['B7-001', 'B7-002'] }); assert.equal(r.arr.length, 2); assert.equal(r.rusak, false); assert.equal(r.kurang, false);
  r = LB.periksaLanjut({ soalIds: ['B7-001', 'B7-099'] }); assert.equal(r.rusak, true); assert.equal(r.kurang, false);
  r = LB.periksaLanjut({ soalIds: ['B7-001', 'C9-001'] }); assert.equal(r.rusak, false); assert.equal(r.kurang, true, 'modul C9 tidak termuat');
  r = LB.periksaLanjut({ soalIds: ['B7-001', 'X9-999'] }); assert.equal(r.rusak, true, 'kode kelompok yang tidak dikenal: soal memang tidak ada');
  assert.equal(LB.dataSoalKurang([]), false);
  T.ctx.__ukpMuat = { galat: () => ['Berkas gagal dimuat: data/mu-E.js'] }; assert.equal(LB.dataSoalKurang([]), true);
  T.ctx.__ukpMuat = { galat: () => { throw new Error('x'); } }; assert.equal(LB.dataSoalKurang([]), false);
});

test('F2: rute yang dipulihkan saat muat ulang selama latihan bersama aktif tidak langsung memulai; navigasi baru tetap langsung mulai', () => {
  const LB = siapkan().UKP.latihBank;
  const b = o => LB.bolehLangsungMulai(Object.assign({ params: {}, bisaLanjut: false, pulih: false, adaPeserta: false }, o));
  assert.equal(b({}), true, 'menu Latih tanpa params');
  assert.equal(b({ adaPeserta: true }), true, 'navigasi baru dengan latihan bersama aktif');
  assert.equal(b({ pulih: true }), true, 'latihan sendiri yang dipulihkan');
  assert.equal(b({ pulih: true, adaPeserta: true }), false);
  assert.equal(b({ bisaLanjut: true }), false);
  assert.equal(b({ params: { atur: 1 } }), false);
  assert.equal(b({ params: { n: '', bersama: false, kode: null } }), true, 'nilai kosong diabaikan');

  const T = siapkan(); T.bersama(); const n0 = (T.s.sesiBersama || []).length;
  T.ctx.history.state = { view: 'latih', params: {} };
  T.UKP.mulaiDariHash();
  assert.equal(T.UKP.sekarang().pulih, true);
  assert.ok(!adaPapan(T), 'halaman saringan'); assert.equal((T.s.sesiBersama || []).length, n0, 'tidak ada sesi baru');
  T.UKP.go('latih', {});
  assert.ok(adaPapan(T), 'navigasi baru langsung mulai'); assert.equal(T.s.sesiBersama.length, n0 + 1);
  T.UKP.go('beranda');
});

test('D3/F2: tab salinan: papan yang hidup menjawab kanal; tab yang dijawab menampilkan saringan dengan rute { atur: 1 }', async () => {
  const T = siapkan({ kanal: true }); const id = T.sesi(IDS, 1);
  T.UKP.go('latih', { lanjut: 1, sesi: id }); await tunggu(500);
  assert.ok(adaPapan(T), 'tanpa tab lain: papan dilanjutkan sesudah menunggu');
  // papan yang hidup menjawab pertanyaan tab lain
  const tanya = new T.ctx.BroadcastChannel('ukp-papan'); const jawab = [];
  tanya.onmessage = ev => jawab.push(ev.data); tanya.postMessage({ tanya: id }); tanya.postMessage({ tanya: 'sb-lain' }); await tunggu(60);
  assert.deepEqual(JSON.parse(JSON.stringify(jawab)), [{ pegang: id }], 'papan menjawab hanya untuk sesinya');
  T.UKP.go('beranda'); jawab.length = 0; tanya.postMessage({ tanya: id }); await tunggu(60);
  assert.equal(jawab.length, 0, 'kanal papan ditutup saat tampilan dilepas');
  // tab ini dimuat ulang saat papan sesi yang sama hidup di tab lain
  tanya.onmessage = ev => { if (ev.data && ev.data.tanya === id) tanya.postMessage({ pegang: id }); };
  const n0 = T.s.sesiBersama.length;
  T.UKP.go('latih', { lanjut: 1, sesi: id }); await tunggu(500);
  assert.ok(!adaPapan(T), 'tidak menjalankan papan kedua');
  assert.ok(T.main.querySelector('.kartu-lanjut-bersama'), 'kartu Lanjutkan');
  assert.ok(T.toast.includes('Latihan ini sedang terbuka di tab lain.'), JSON.stringify(T.toast));
  assert.deepEqual(params(T.UKP), { atur: 1 }, 'rute tab salinan');
  assert.equal(T.s.sesiBersama.length, n0);
  tanya.close();
});

test('D4/F5: tombol Mulai di saringan meminta persetujuan; klik kedua selama dialog terbuka diabaikan; sesi lama diakhiri sekali', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1);
  let lepas; T.aturDialog(() => new Promise(r => { lepas = r; }));
  T.UKP.go('latih', { atur: 1 });
  const b = tombolMulai(T); assert.ok(b, 'tombol Mulai');
  let akhiri = 0; const asli = T.L.akhiriSesiBersama; T.L.akhiriSesiBersama = x => { akhiri++; return asli(x); };
  b.click(); b.click(); await tunggu(10);
  assert.equal(T.dialog.length, 1, 'satu dialog'); assert.match(T.dialog[0].isi, /soal 2 dari 4 belum selesai/);
  assert.ok(T.L.bersamaAktif() && T.L.bersamaAktif().sesiId === id, 'sesi lama tetap selama dialog terbuka');
  lepas(true); await tunggu(20);
  assert.ok(adaPapan(T), 'papan sesi baru');
  const a = T.L.bersamaAktif(); assert.ok(a && a.sesiId !== id); assert.ok(T.L.sesiBersamaDari(id).selesai > 0);
  assert.equal(T.s.sesiBersama.filter(x => !x.selesai).length, 1, 'satu sesi baru saja');
  assert.equal(T.dialog.length, 1);
  T.L.akhiriSesiBersama = asli;
  assert.equal(akhiri, 1, 'sesi lama diakhiri sekali (jalankan tidak menutup sesi lagi)');
  T.UKP.go('beranda');
});

test('D4: Batal di dialog tombol Mulai membiarkan sesi lama dan tidak memulai apa pun', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1); T.aturDialog(() => Promise.resolve(false));
  T.UKP.go('latih', { atur: 1 }); const n0 = T.s.sesiBersama.length;
  tombolMulai(T).click(); await tunggu(10);
  assert.equal(T.dialog.length, 1); assert.ok(!adaPapan(T));
  assert.equal(T.L.bersamaAktif().sesiId, id); assert.equal(T.s.sesiBersama.length, n0);
});

test('D4: baris Buku Kesalahan meminta persetujuan dulu saat latihan bersama belum selesai', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1);
  const so = T.UKP.konten.soal('B7-005'); T.L.catatJawaban(so, 'B', 10, 'latih');
  T.aturDialog(() => Promise.resolve(false));
  T.UKP.go('latih', { atur: 1 });
  const baris = T.main.querySelector('a.row-link'); assert.ok(baris, 'baris Buku Kesalahan');
  baris.click(); await tunggu(10);
  assert.equal(T.dialog.length, 1, 'dialog persetujuan'); assert.ok(!adaPapan(T)); assert.equal(T.L.bersamaAktif().sesiId, id);
  T.aturDialog(() => Promise.resolve(true));
  T.main.querySelector('a.row-link').click(); await tunggu(20);
  assert.ok(adaPapan(T)); assert.match(teks(T), /Soal 1 dari 1/); assert.ok(T.L.sesiBersamaDari(id).selesai > 0);
  T.UKP.go('beranda');
});

test('buatPenjagaMulai: tanpa latihan bersama langsung jalan; tampilan yang sudah dilepas tidak memulai apa pun', async () => {
  const T = siapkan(); const LB = T.UKP.latihBank;
  let n = 0; const p1 = LB.buatPenjagaMulai({ adaPeserta: () => false, masihAda: () => true });
  p1(() => n++); assert.equal(n, 1, 'langsung (tanpa menunggu)');
  T.sesi(IDS, 0); T.aturDialog(() => Promise.resolve(true));
  const p2 = LB.buatPenjagaMulai({ adaPeserta: () => true, masihAda: () => false });
  assert.equal(await p2(() => n++), false); assert.equal(n, 1);
});

test('F5: bolehGantiSesi yang dipanggil dua kali selama dialog terbuka memakai dialog dan janji yang sama', async () => {
  const T = siapkan(); const LB = T.UKP.latihBank; const id = T.sesi(IDS, 1);
  let lepas; T.aturDialog(() => new Promise(r => { lepas = r; }));
  let akhiri = 0; const asli = T.L.akhiriSesiBersama; T.L.akhiriSesiBersama = x => { akhiri++; return asli(x); };
  const j1 = LB.bolehGantiSesi(); const j2 = LB.bolehGantiSesi();
  assert.equal(j1, j2, 'janji yang sama'); assert.equal(T.dialog.length, 1);
  lepas(true); assert.deepEqual([await j1, await j2], [true, true]);
  assert.equal(akhiri, 1, 'sesi lama diakhiri sekali'); assert.ok(T.L.sesiBersamaDari(id).selesai > 0);
  assert.equal(await LB.bolehGantiSesi(), true, 'sesudah selesai: tanpa sesi, tanpa dialog baru'); assert.equal(T.dialog.length, 1);
  T.L.akhiriSesiBersama = asli;
});

test('D5: penyimpanan penuh sejak awal sesi: toast sekali per sesi', async () => {
  const T = siapkan(); T.bersama(); T.aturPenuh(true);
  T.UKP.go('latih', { ids: 'B7-001,B7-002,B7-003' }); await tunggu(250);
  const pesan = T.toast.filter(t => /^Penyimpanan peramban penuh/.test(t));
  assert.equal(pesan.length, 1, JSON.stringify(T.toast));
  T.UKP.go('beranda');
});

test('F4: penyimpanan menjadi penuh di tengah sesi: pemimpin diberi tahu sekali sesudah tulisan berikutnya dicoba', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1);
  T.UKP.go('latih', { lanjut: 1 }); await tunggu(250);
  assert.equal(T.toast.filter(t => /^Penyimpanan peramban penuh/.test(t)).length, 0, 'penyimpanan masih cukup');
  T.aturPenuh(true);
  (T.dengar.pagehide || []).slice().forEach(f => f({ type: 'pagehide' })); // simpanAktif lewat pendengar pagehide papan
  await tunggu(250);
  (T.dengar.pagehide || []).slice().forEach(f => f({ type: 'pagehide' })); await tunggu(250);
  assert.equal(T.UKP.store.ok, false);
  assert.equal(T.toast.filter(t => /^Penyimpanan peramban penuh/.test(t)).length, 1, JSON.stringify(T.toast));
  assert.equal(T.L.bersamaAktif().sesiId, id);
  T.UKP.go('beranda');
});

test('beritaPenuh: hanya bila penyimpanan menolak, sekali per sesi', () => {
  const T = siapkan(); const LB = T.UKP.latihBank;
  assert.equal(LB.beritaPenuh('sb-a'), false, 'penyimpanan baik');
  T.aturPenuh(true); T.UKP.store.flush();
  assert.equal(LB.beritaPenuh('sb-a'), true); assert.equal(LB.beritaPenuh('sb-a'), false); assert.equal(LB.beritaPenuh(null), false);
  assert.equal(T.toast.length, 1);
  T.aturPenuh(false); T.UKP.store.flush(); assert.equal(LB.beritaPenuh('sb-b'), false);
});

test('pasangSimpanPergi: pagehide memanggil simpan lalu menulis penyimpanan; pelepas mencabut pendengar', () => {
  const T = siapkan(); const LB = T.UKP.latihBank;
  const dasar = (T.dengar.pagehide || []).length; let n = 0;
  const lepas = LB.pasangSimpanPergi(() => { n++; throw new Error('galat simpan tidak menghentikan flush'); });
  assert.equal(T.dengar.pagehide.length, dasar + 1);
  let flush = 0; const asli = T.UKP.store.flush; T.UKP.store.flush = () => { flush++; };
  const err = console.error; console.error = () => {};
  try { T.dengar.pagehide[dasar]({ type: 'pagehide' }); } finally { console.error = err; T.UKP.store.flush = asli; }
  assert.equal(n, 1); assert.equal(flush, 1);
  lepas(); assert.equal(T.dengar.pagehide.length, dasar);
});

test('G1: dialog persetujuan tombol Mulai memberi fokus awal pada Batal; Enter dua kali tidak mengakhiri sesi lama', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1); const n0 = T.s.sesiBersama.length;
  T.UKP.konfirmasi = T.konfirmasiAsli; // dialog yang sebenarnya (js/core.js)
  T.UKP.go('latih', { atur: 1 });
  tombolMulai(T).click(); await tunggu(10); // Enter pertama pada tombol Mulai
  const dlg = T.document.body.querySelector('dialog'); assert.ok(dlg && dlg.hasAttribute('open'), 'dialog terbuka');
  const fokus = dlg.querySelector('button[autofocus]'); assert.ok(fokus, 'ada tombol berfokus awal');
  assert.equal(fokus.textContent.trim(), 'Batal');
  const bahaya = dlg.querySelectorAll('button').find(b => b.textContent.trim() === 'Akhiri dan mulai baru');
  assert.ok(bahaya && !bahaya.hasAttribute('autofocus'), 'tombol Akhiri tidak berfokus awal');
  fokus.click(); await tunggu(10); // Enter kedua jatuh ke tombol yang berfokus: Batal
  assert.ok(!dlg.hasAttribute('open'), 'dialog tertutup');
  assert.ok(!adaPapan(T), 'tidak ada papan baru');
  assert.equal(T.L.bersamaAktif().sesiId, id, 'sesi lama tetap'); assert.equal(T.L.sesiBersamaDari(id).selesai, null);
  assert.equal(T.s.sesiBersama.length, n0);
});

test('G2/G3: kartu Lanjutkan yang diketuk saat papan sesi itu hidup di tab lain: tanpa papan kedua, saringan dengan keterangan', async () => {
  const T = siapkan({ kanal: true }); const id = T.sesi(IDS, 1);
  const tabLain = new T.ctx.BroadcastChannel('ukp-papan');
  tabLain.onmessage = ev => { if (ev.data && ev.data.tanya === id) tabLain.postMessage({ pegang: id }); };
  const n0 = T.s.sesiBersama.length;
  T.UKP.go('latih', { lanjut: 1 }); // tombol Lanjutkan di kartu (Beranda, halaman Latih, lobi)
  assert.ok(!adaPapan(T), 'menunggu jawaban kanal dulu'); assert.match(teks(T), /Melanjutkan latihan bersama/);
  await tunggu(100);
  assert.ok(!adaPapan(T), 'tidak memasang papan kedua');
  const kartu = T.main.querySelector('.kartu-lanjut-bersama'); assert.ok(kartu, 'kartu Lanjutkan');
  assert.ok(kartu.querySelector('.kartu-lanjut-tablain'), 'keterangan di kartu');
  assert.match(kartu.textContent, /Sedang terbuka di tab lain\./);
  const i = T.toast.indexOf('Latihan ini sedang terbuka di tab lain.'); assert.ok(i >= 0, JSON.stringify(T.toast));
  assert.ok(T.toastOpsi[i] && T.toastOpsi[i].ms >= 8000, 'toast bertahan lama: ' + JSON.stringify(T.toastOpsi[i]));
  assert.deepEqual(params(T.UKP), { atur: 1 });
  assert.equal(T.s.sesiBersama.length, n0); assert.equal(T.L.bersamaAktif().sesiId, id);
  // Kembali ke latihan / Kembali ke papan di room: sama, dan tanda room dibuang dari rute
  T.UKP.go('latih', { lanjut: 1, room: 1 }); await tunggu(100);
  assert.ok(!adaPapan(T)); assert.deepEqual(params(T.UKP), { atur: 1 });
  assert.ok(T.main.querySelector('.kartu-lanjut-tablain'));
  // papan di tab lain ditutup: ketukan Lanjutkan berikutnya memasang papan di tab ini, keterangan hilang
  tabLain.close();
  const b = T.main.querySelectorAll('button').find(x => x.textContent.trim() === 'Lanjutkan latihan bersama'); assert.ok(b, 'tombol Lanjutkan');
  b.click(); await tunggu(450);
  assert.ok(adaPapan(T), 'papan dilanjutkan sesudah menunggu'); assert.match(teks(T), /Soal 2 dari 4/);
  assert.equal(T.UKP.latihBank.papanDiTabLain(id), false);
  T.UKP.go('beranda');
  assert.equal(T.UKP.c.kartuLanjutBersama().querySelector('.kartu-lanjut-tablain'), null, 'kartu tanpa keterangan');
});

test('G4: layar evaluasi menulis rute { evaluasi }; muat ulang membuka evaluasi sesi itu di #tim/sesi:<id>', async () => {
  const T = siapkan(); const id = T.sesi(IDS, 1);
  T.UKP.c.evaluasiBersama = sesi => { const el = T.document.createElement('section'); el.className = 'eval-tiruan'; el.setAttribute('data-sesi', sesi.id); return el; };
  const keTim = []; T.UKP.views.tim = p => { keTim.push(JSON.parse(JSON.stringify(p))); return T.document.createElement('div'); };
  T.UKP.go('latih', { lanjut: 1, sesi: id });
  assert.ok(adaPapan(T));
  T.aturDialog(() => Promise.resolve(true));
  const akhir = T.main.querySelectorAll('button').find(b => /Akhiri latihan dan lihat hasil/.test(b.textContent)); assert.ok(akhir, 'tombol akhiri');
  akhir.click(); await tunggu(20);
  assert.ok(T.main.querySelector('.eval-tiruan'), 'layar evaluasi');
  const p = params(T.UKP); assert.equal(p.evaluasi, id, JSON.stringify(p)); assert.equal(p.lanjut, undefined); assert.equal(p.sesi, undefined);
  assert.ok(T.L.sesiBersamaDari(id).selesai > 0);
  // muat ulang: entri riwayat yang sama dipulihkan
  const n0 = T.s.sesiBersama.length;
  T.UKP.mulaiDariHash(); await tunggu(20);
  assert.equal(T.UKP.sekarang().view, 'tim'); assert.deepEqual(keTim.pop(), { anggota: 'sesi:' + id });
  assert.equal(T.s.sesiBersama.length, n0, 'tidak ada sesi baru');
  // sesi yang sudah dihapus: halaman Latih biasa (saringan), tanpa sesi baru
  T.s.sesiBersama = T.s.sesiBersama.filter(x => x.id !== id);
  T.ctx.history.state = { view: 'latih', params: { evaluasi: id } };
  T.UKP.mulaiDariHash(); await tunggu(20);
  assert.equal(T.UKP.sekarang().view, 'latih'); assert.ok(!adaPapan(T)); assert.equal(T.s.sesiBersama.length, n0 - 1);
});

// v9.7.3: jalur lanjut selesai sebelum halaman saringan disusun. Tombol Keluar di kop papan yang dilanjutkan, saat belum ada kunci
// yang dibuka, harus mengakhiri latihan dan membuka saringan tanpa galat (dulu: variabel langsungMulai belum dipasang, papan tetap tampil)
test('v9.7.3: tombol Keluar pada papan yang dilanjutkan sebelum ada kunci dibuka membuka saringan tanpa galat', () => {
  const T = siapkan(); T.bersama();
  const id = T.L.mulaiSesiBersama(['Nicky', 'Mita'], IDS, 600, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120, mode: 'latihan' });
  T.L.simpanBersamaAktif({ sesiId: id, soalIds: IDS, idx: 0, sisaDetik: 300, anggaranDetik: 600, tempo: 'ujian', detikPerSoal: 126 });
  T.UKP.go('latih', { lanjut: 1 });
  assert.ok(adaPapan(T), 'papan dilanjutkan'); assert.match(teks(T), /Soal 1 dari 4/);
  const x = T.main.querySelectorAll('button').find(b => b.getAttribute('aria-label') === 'Keluar dari latihan'); assert.ok(x, 'tombol Keluar');
  assert.doesNotThrow(() => x.click());
  assert.ok(!adaPapan(T), 'papan ditinggalkan');
  assert.match(teks(T), /Latih soal/);
  assert.equal(T.L.bersamaAktif(), null, 'titik lanjut dilepas');
  assert.equal(params(T.UKP).atur, 1, 'rute saringan');
  T.UKP.go('beranda');
});
