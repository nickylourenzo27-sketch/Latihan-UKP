/* MABAR UKP — inti: registri konten, penyimpanan, util DOM, router, dialog, toast, tema, ikon */
(function (root) {
  const UKP = root.UKP = root.UKP || {};
  UKP.versi = '9.5.2';
  // append/prepend/replaceChildren aman: abaikan null/false, ratakan array
  (function () { const filt = c => c.flat(Infinity).filter(x => x != null && x !== false); for (const P of [Element.prototype, DocumentFragment.prototype]) { const ap = P.append, pp = P.prepend, rc = P.replaceChildren; P.append = function (...c) { return ap.apply(this, filt(c)); }; P.prepend = function (...c) { return pp.apply(this, filt(c)); }; P.replaceChildren = function (...c) { if (typeof rc === 'function') return rc.apply(this, filt(c)); this.textContent = ''; return ap.apply(this, filt(c)); }; } })();
  // v9.4 Kb3: peramban tanpa :has() (Safari < 15.4, Chrome < 105, Samsung Internet < 20) membuang aturan CSS ber-:has() utuh.
  // Aturan yang menentukan tampil-tidaknya bar dan tombol diberi cadangan di css/app.css (blok v9.4 Kb) lewat html.tanpa-has dan
  // atribut body[data-ada-bar] (bar fokus/sesi di #main) dan body[data-ada-aksi] (bar aksi lengket terlihat) yang diisi di sini.
  (function () {
    let bisa = true; try { document.querySelector(':has(*)'); } catch (e) { bisa = false; }
    UKP.dukungHas = bisa;
    if (bisa || typeof MutationObserver !== 'function') return;
    const pasang = () => {
      const b = document.body; if (!b) return; document.documentElement.classList.add('tanpa-has');
      let tunda = 0;
      const atur = (nama, ya) => { if (ya) { if (!b.hasAttribute(nama)) b.setAttribute(nama, ''); } else if (b.hasAttribute(nama)) b.removeAttribute(nama); };
      const perbarui = () => { tunda = 0; atur('data-ada-bar', !!document.querySelector('#main .fokus-bar, #main .sesi-bar')); atur('data-ada-aksi', !!document.querySelector('.sticky-actions:not([hidden]), .nav-topik:not([hidden])')); };
      perbarui();
      try { new MutationObserver(() => { if (!tunda) tunda = setTimeout(perbarui, 0); }).observe(b, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] }); } catch (e) {}
    };
    if (document.body) pasang(); else document.addEventListener('DOMContentLoaded', pasang);
  })();
  UKP.modul = UKP.modul || {};          // kode -> modul konten
  UKP.urutanKelompok = ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8', 'C9', 'C10', 'E'];
  UKP.tingkatKelompok = { A: ['A1', 'A2', 'A3', 'A4', 'A5'], B: ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8'], C: ['A1', 'A2', 'A3', 'A4', 'A5', 'B6', 'B7', 'B8', 'C9', 'C10'] };
  UKP.namaTingkat = { A: 'Tingkat A', B: 'Tingkat B', C: 'Tingkat C' };
  UKP.ref = UKP.ref || null;

  UKP.register = function (m) {
    if (!m || !m.meta || !m.meta.kode) return;
    m.soal = m.soal || []; m.kartu = m.kartu || []; m.kasus = m.kasus || []; m.tips = m.tips || []; m.topik = m.topik || [];
    m.topik.forEach((t, i) => { t.kode = m.meta.kode; t.urut = i + 1; });
    m.soal.forEach(s => { s.kode = m.meta.kode; });
    m.kartu.forEach(k => { k.kode = m.meta.kode; });
    m.kasus.forEach(k => { k.kode = m.meta.kode; });
    UKP.modul[m.meta.kode] = m;
  };
  UKP.registerRef = function (r) { UKP.ref = r; };
  // peta formulir (js/data/formulir.js): { statusPer, catatan, formulir: [{ id, nama, untuk, kelompok, verifikasi, bagian: [{ id, nama, baris: [...] }] }] }
  UKP.formulir = UKP.formulir || null;
  UKP.registerFormulir = function (d) {
    if (!d || typeof d !== 'object') return;
    const formulir = (Array.isArray(d.formulir) ? d.formulir : []).filter(f => f && f.id).map(f => {
      const bagian = (Array.isArray(f.bagian) ? f.bagian : []).filter(Boolean).map((b, bi) => Object.assign({}, b, { id: b.id || 'bagian-' + (bi + 1), baris: (Array.isArray(b.baris) ? b.baris : []).filter(x => x && x.kode) }));
      return Object.assign({}, f, { kelompok: Array.isArray(f.kelompok) ? f.kelompok : f.kelompok ? [f.kelompok] : [], bagian });
    });
    const indeks = Object.create(null);
    formulir.forEach(f => f.bagian.forEach(b => b.baris.forEach(x => { if (!indeks[x.kode]) indeks[x.kode] = { formulir: f, bagian: b, baris: x }; })));
    UKP.formulir = { statusPer: d.statusPer || null, catatan: d.catatan || '', formulir, indeks };
  };
  // { formulir, bagian, baris } untuk kode baris (mis. "1770.induk.1"), atau null
  UKP.formulirBaris = kode => (UKP.formulir && kode && UKP.formulir.indeks[kode]) || null;

  // ---------- util ----------
  // Pemformat Intl di-cache: toLocaleString/toLocaleDateString berargumen opsi membuat pemformat baru tiap panggilan,
  // mahal di daftar panjang (garis waktu Rencana, peta Kemajuan, Referensi)
  const cacheIntl = Object.create(null);
  const fmtTgl = (kunci, o) => cacheIntl['t:' + kunci] || (cacheIntl['t:' + kunci] = new Intl.DateTimeFormat('id-ID', o));
  const fmtNum = (min, max) => { const k = 'n:' + min + '|' + max; return cacheIntl[k] || (cacheIntl[k] = new Intl.NumberFormat('id-ID', { minimumFractionDigits: min, maximumFractionDigits: Math.max(min, max) })); };
  // "YYYY-MM-DD" (tengah malam waktu lokal), ISO lengkap, Date, atau milidetik → Date; null bila tidak sah
  const keTanggal = x => {
    if (x == null || x === '') return null;
    const d = x instanceof Date ? new Date(x.getTime()) : typeof x === 'number' ? new Date(x) : new Date(String(x) + (/^\d{4}-\d{2}-\d{2}$/.test(String(x)) ? 'T00:00:00' : ''));
    return isNaN(d) ? null : d;
  };
  const tglDengan = (kunci, o) => x => { const d = keTanggal(x); return d ? fmtTgl(kunci, o).format(d) : (x ? String(x) : '–'); };
  const fmtFallback = {
    uang(n) { if (n == null || isNaN(n)) return '–'; const neg = n < 0; return (neg ? '−' : '') + 'Rp' + fmtNum(0, 0).format(Math.round(Math.abs(n))); },
    angka(n, d) { if (n == null || isNaN(n)) return '–'; return fmtNum(d || 0, d == null ? 2 : d).format(Number(n)); },
    persen(x, d) { if (x == null || isNaN(x)) return '–'; return fmtNum(d == null ? 0 : d, d == null ? 2 : d).format(x * 100) + '%'; },
    // "29 Okt 2026"
    tanggal: tglDengan('tanggal', { day: 'numeric', month: 'short', year: 'numeric' }),
    // "29 Okt" (garis waktu, daftar tugas)
    pendek: tglDengan('pendek', { day: 'numeric', month: 'short' }),
    // "Kam, 29 Okt" (hari + tanggal ringkas)
    hari: tglDengan('hari', { weekday: 'short', day: 'numeric', month: 'short' }),
    // "Kamis, 29 Oktober 2026"
    tanggalPanjang: tglDengan('panjang', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    bulanTahun(iso) { if (!iso) return '–'; const [y, m] = String(iso).split('-'); const d = new Date(Number(y), Number(m) - 1, 1); return isNaN(d) ? String(iso) : fmtTgl('bulan', { month: 'long', year: 'numeric' }).format(d); },
  };
  // kalkulator.js menetapkan ulang UKP.fmt dengan pemformat tanpa Intl (uang/angka/persen/tanggal/bulanTahun);
  // penetapan ulang digabung di atas cadangan ini sehingga pendek/hari/tanggalPanjang tetap tersedia
  let fmtAktif = Object.assign({}, fmtFallback, UKP.fmt || {});
  try { Object.defineProperty(UKP, 'fmt', { configurable: true, enumerable: true, get: () => fmtAktif, set: v => { fmtAktif = Object.assign({}, fmtFallback, v && typeof v === 'object' ? v : {}); } }); }
  catch (e) { UKP.fmt = fmtAktif; }
  UKP.util = {
    // hari belajar berganti pukul 03.00, bukan tengah malam
    hariIni() { return UKP.util.hariDari(Date.now()); },
    hariDari(ts) { const d = new Date(arguments.length ? ts : Date.now()); if (ts === null || isNaN(d)) return ''; if (d.getHours() < 3) d.setDate(d.getDate() - 1); return UKP.util.iso(d); },
    // jam dalam hari belajar: 00.00–02.59 dihitung 24–26 (masih malam hari sebelumnya)
    jamBelajar(ts) { const d = new Date(arguments.length && ts != null ? ts : Date.now()); const j = isNaN(d) ? new Date().getHours() : d.getHours(); return j < 3 ? j + 24 : j; },
    iso(d) { const z = n => String(n).padStart(2, '0'); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); },
    tglPanjang(iso) { return fmtFallback.tanggalPanjang(iso); },
    selisihHari(a, b) { const d1 = new Date(a + 'T00:00:00'), d2 = new Date(b + 'T00:00:00'); return Math.round((d2 - d1) / 86400000); },
    tambahHari(iso, n) { const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); return UKP.util.iso(d); },
    acak(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    ambil(arr, n) { return UKP.util.acak(arr).slice(0, n); },
    id(prefix) { return (prefix || 'id') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); },
    menitDetik(s) { const m = Math.floor(s / 60), d = Math.round(s % 60); return m + ' mnt' + (d ? ' ' + d + ' dtk' : ''); },
    jam(s) { const z = n => String(n).padStart(2, '0'); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), d = Math.floor(s % 60); return (h ? z(h) + ':' : '') + z(m) + ':' + z(d); },
    esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
    pluralSoal(n) { return n + ' soal'; },
    pita(skor) { return skor < 60 ? 'rendah' : skor < 80 ? 'sedang' : 'tinggi'; },
    clamp(n, a, b) { return Math.max(a, Math.min(b, n)); },
  };

  // ---------- DOM ----------
  const FORM_NILAI = /^(INPUT|TEXTAREA|SELECT)$/;
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    let nilai = null, adaNilai = false;
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'text') el.textContent = v;
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else if (k === 'dataset') { for (const d in v) if (v[d] != null) el.dataset[d] = v[d]; }
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      // value sebagai properti: <textarea>/<select> mengabaikan atribut value; <select> baru diisi setelah <option> terpasang
      else if (k === 'value' && FORM_NILAI.test(el.tagName)) { nilai = v; adaNilai = true; if (el.tagName === 'INPUT') el.setAttribute('value', v); }
      else if (k === 'checked' && el.tagName === 'INPUT') { el.defaultChecked = true; el.checked = true; }
      else el.setAttribute(k, v === true ? '' : v);
    }
    append(el, children);
    if (adaNilai) {
      const sv = String(nilai);
      if (el.tagName !== 'SELECT' || Array.from(el.options).some(o => o.value === sv)) { try { el.value = sv; } catch (e) {} }
    }
    return el;
  }
  function append(el, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) append(el, c);
      else if (typeof c === 'string' || typeof c === 'number') el.appendChild(document.createTextNode(String(c)));
      else el.appendChild(c);
    }
    return el;
  }
  const frag = (...children) => append(document.createDocumentFragment(), children);
  UKP.h = h; UKP.frag = frag;
  // fokus terprogram: elemen non-interaktif diberi tabindex=-1 seperlunya; tanpa menggulir halaman
  UKP.fokus = function (el) {
    if (!el || typeof el.focus !== 'function') return false;
    if (el.tabIndex < 0 && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (e) { try { el.focus(); } catch (e2) { return false; } }
    return document.activeElement === el;
  };

  // ---------- gerak (DESAIN-V6 §E) ----------
  // gerak diizinkan? sistem (prefers-reduced-motion) dan Pengaturan › Kurangi gerak
  UKP.gerakBoleh = () => {
    try { if (root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) return false; } catch (e) {}
    return document.documentElement.dataset.gerak !== 'kurang';
  };
  UKP.gulirHalus = () => (UKP.gerakBoleh() ? 'smooth' : 'auto');
  // angka menghitung naik 400 ms (ease-out kubik); teks akhir tersedia sejak awal untuk pembaca layar.
  // opsi: ms, desimal, akhiran, awalan, dari (nilai awal; bawaan 0), format (fn angka → teks), ulang (abaikan penanda sekali)
  UKP.hitungNaik = function (el, target, opsi) {
    if (!el) return;
    opsi = opsi || {}; const ms = opsi.ms || 400; const desimal = opsi.desimal || 0;
    const nf = fmtNum(desimal, desimal);
    const fmt = typeof opsi.format === 'function' ? opsi.format : n => (opsi.awalan || '') + nf.format(n) + (opsi.akhiran || '');
    const akhir = fmt(target);
    el.setAttribute('aria-label', akhir);
    if (el._hitungRaf) cancelAnimationFrame(el._hitungRaf);
    const dari = Number.isFinite(opsi.dari) ? opsi.dari : 0;
    if (!UKP.gerakBoleh() || !Number.isFinite(target) || target === dari || (el.dataset.sudah && !opsi.ulang)) { el.textContent = akhir; return; }
    el.dataset.sudah = '1';
    const t0 = performance.now();
    const langkah = t => {
      const p = Math.min(1, (t - t0) / ms);
      const v = dari + (target - dari) * (1 - Math.pow(1 - p, 3));
      el.textContent = p < 1 ? fmt(desimal ? v : Math.round(v)) : akhir;
      el._hitungRaf = p < 1 ? requestAnimationFrame(langkah) : null;
    };
    el._hitungRaf = requestAnimationFrame(langkah);
  };
  // pasang hitung naik sekali saat terlihat: <span data-hitung="74" data-akhiran="%" data-desimal="1">74%</span>
  UKP.pasangHitung = function (wadah) {
    const els = Array.from((wadah || document).querySelectorAll('[data-hitung]:not([data-sudah])'));
    if (!els.length) return;
    const jalan = el => UKP.hitungNaik(el, Number(el.dataset.hitung), { akhiran: el.dataset.akhiran || '', awalan: el.dataset.awalan || '', desimal: Number(el.dataset.desimal) || 0 });
    if (!('IntersectionObserver' in root) || !UKP.gerakBoleh()) { els.forEach(jalan); return; }
    // yang sudah terlihat langsung dijalankan (sebelum dicat, tanpa kedip nilai akhir → 0); sisanya saat masuk layar
    const tinggi = root.innerHeight || document.documentElement.clientHeight;
    let io = null;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (el.isConnected && r.bottom > 0 && r.top < tinggi) { jalan(el); return; }
      io = io || new IntersectionObserver(entri => entri.forEach(x => { if (x.isIntersecting) { io.unobserve(x.target); jalan(x.target); } }), { threshold: 0.4 });
      io.observe(el);
    });
  };

  // ---------- ikon ----------
  const I = {
    tim: '<circle cx="9" cy="8" r="3.25"/><path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5"/><path d="M15.5 4.9a3.25 3.25 0 0 1 0 6.2M17.5 14.8c1.8.6 3 2.2 3.5 4.7"/>',
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/>',
    book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/>',
    pen: '<path d="M4 20h4l10-10-4-4L4 16z"/><path d="M13 7l4 4"/>',
    repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h3M13 12h3M8 16h3M13 16h3"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    plan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    sim: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
    kasus: '<path d="M9 3h6l1 3h4v15H4V6h4z"/><path d="M9 12l2 2 4-4"/>',
    ref: '<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M6 17h13"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7v.5"/>',
    etika: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    chat: '<path d="M4 5h16v11H8l-4 4z"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    check: '<path d="M5 12l4 4L19 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    flag: '<path d="M5 21V4h11l-1 4 1 4H5"/>',
    play: '<path d="M7 4l12 8-12 8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    strategi: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    spark: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>',
    formulir: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 15h7M9 19h4"/>',
    lembar: '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h16M4 14h16M10 9v11"/>',
    print: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="1"/><path d="M7 14h10v7H7z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="1"/><path d="M16 8V4H4v12h4"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    // V6 (DESAIN-V6 §F): kanvas 24, garis 1,75
    'chevron-kanan': '<path d="M9 6l6 6-6 6"/>',
    'chevron-bawah': '<path d="M6 9l6 6 6-6"/>',
    tambah: '<path d="M12 5v14M5 12h14"/>',
    'cek-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    'x-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    peringatan: '<path d="M12 4 3 19.5h18z"/><path d="M12 10v4.5M12 17v.5"/>',
    jam: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    suara: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>',
    lampu: '<path d="M9.5 17.5h5M10.5 20.5h3"/><path d="M12 3.5a5.5 5.5 0 0 0-3.2 10c.6.5 1 1.1 1 1.9v.6h4.4v-.6c0-.8.4-1.4 1-1.9A5.5 5.5 0 0 0 12 3.5z"/>',
    keluar: '<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 13.5V20H4V6h6.5"/>',
    unduh: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/>',
    unggah: '<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 20h14"/>',
    saring: '<path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/>',
    hapus: '<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
    dek: '<rect x="4" y="7" width="13" height="13" rx="1.5"/><path d="M8 4h10.5A1.5 1.5 0 0 1 20 5.5V16"/>',
    bulan: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    gembok: '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    setengah: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
    naik: '<path d="M4 16l5-5 4 4 7-7M15 8h5v5"/>',
    turun: '<path d="M4 8l5 5 4-4 7 7M15 16h5v-5"/>',
    'papan-ketik': '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><path d="M6 10h.5M9.5 10h.5M13 10h.5M16.5 10h.5M7 14h10"/>',
    mata: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    'atur-ulang': '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4h4"/>',
    // V7
    'chevron-kiri': '<path d="M15 6l-6 6 6 6"/>',
    kalender: '<rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M8 14h.5M12 14h.5M16 14h.5M8 17.5h.5M12 17.5h.5"/>',
    'titik-tiga': '<circle cx="12" cy="5.5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18.5" r="1.5"/>',
  };
  UKP.ikonAda = name => Object.prototype.hasOwnProperty.call(I, name);
  // UKP.icon(nama, kelas?, kecil?) — kecil (16/12 px) memakai kelas ikon-kecil (garis 2) agar bobot optis setara
  UKP.icon = (name, cls, kecil) => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', kecil ? '2' : '1.75'); s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round'); s.setAttribute('aria-hidden', 'true'); s.setAttribute('focusable', 'false'); s.setAttribute('class', 'ikon' + (kecil ? ' ikon-kecil' : '') + (cls ? ' ' + cls : ''));
    // ukuran bawaan sebagai atribut presentasi: CSS (mis. .btn svg 18 px) selalu menimpanya; tanpa aturan CSS ikon tidak membesar
    s.setAttribute('width', kecil ? '16' : '20'); s.setAttribute('height', kecil ? '16' : '20'); s.innerHTML = I[name] || I.info; return s; };

  // ---------- penyimpanan ----------
  const KEY = 'ukp.v1';
  const DEFAULT = () => ({
    profil: { tingkat: 'A', status: 'baru', tanggalUjian: null, menitHariKerja: 15, menitAkhirPekan: 30, latar: 'non', perangkat: 'tahu', onboardingSelesai: false, dibuat: UKP.util.hariIni() },
    pengaturan: { tema: 'system', kurangiGerak: false, sorotKualifikasi: true, tutorAktif: true, tts: true, teksBesar: false, pintasan: true, jamPengingat: '19:30', icsSeq: 0, icsUbah: null, icsMulai: null },
    jawaban: [], topikDibaca: {}, cekSelesai: {}, kartu: {}, kartuOtomatis: [], sesi: [], hadir: {}, simulasi: [], simulasiAktif: null,
    tutorKuota: { tgl: '', n: 0 }, lencana: {}, tugasRencana: {}, cekPerangkat: {}, bannerTutup: {}, angkaDilihat: {}, sesiAktif: null, kesanUjian: '',
    kasusProgres: {}, eksporTerakhir: null, pengingatEksporTerakhir: null,
    laporan: [],            // laporan mingguan otomatis (UKP.belajar.laporanMingguan), urut minggu ISO naik
    rencanaDasar: null,     // jangkar Rencana v1: { mulai, ujian, tingkat } — "Susun ulang" menggeser mulai ke hari ini
    bersama: { aktif: false, peserta: [] },   // v7.9 latihan bersama: catat jawaban per nama (satu layar, beberapa orang)
    jawabanBersama: [],     // v7.9/v8.0: [{ p, s, kd, t, o, b, d, w, m, k (keyakinan|null), sesi }] terlama → terbaru; tidak ikut ringkasan tim (UKP.belajar.catatJawabanBersama)
    sesiBersama: [],        // v8.0: rekaman sesi latihan bersama [{ id, mulai, selesai, tingkat, peserta, anggaranDetik, soal: [...], sumber }] terlama → terbaru, ≤ 60
                            // v8.1: + tempo, detikPerSoal, mode ('latihan'|'ujian'), judul, ujianId, bahas {soalId: 1}, waktuPeserta {nama: detik} (opsional)
    // v8.1 (opsional, bawaan null; bentuk di js/learn.js): s.bersama.tempo 'ujian' (bila tidak ada) | 'longgar' | 'bebas' (v9.4: tanpa batas)
    ujianTim: null,         // ujian tim aktif di perangkat pemimpin (UKP.belajar.ujianTim)
    lembarJawab: null,      // lembar jawab pribadi di HP anggota (UKP.belajar.lembarJawab)
    bersamaAktif: null,     // sesi latihan bersama yang belum selesai, untuk dilanjutkan (UKP.belajar.bersamaAktif)
    pakai: {},              // v9.5 buku pemakaian soal: { idSoal: [tanda, hari] } (UKP.belajar.pakai; bentuk di rapikanPakai)
  });
  const isObj = x => x != null && typeof x === 'object' && !Array.isArray(x);
  const punya = (o, k) => o != null && Object.prototype.hasOwnProperty.call(o, k);
  const adaView = v => typeof v === 'string' && punya(UKP.views, v) && typeof UKP.views[v] === 'function';
  const KUNCI_BAHAYA = new Set(['__proto__', 'constructor', 'prototype']);
  // salinan dangkal tanpa kunci berbahaya (JSON.parse membuat "__proto__" sebagai properti milik objek)
  function salinAman(src) { const o = {}; if (isObj(src)) for (const k of Object.keys(src)) if (!KUNCI_BAHAYA.has(k)) o[k] = src[k]; return o; }
  // lengkapi dengan default; nilai bertipe salah diganti default
  function rapikan(def, src) {
    const o = salinAman(src);
    for (const k of Object.keys(def)) {
      const dv = def[k], v = o[k];
      if (v === undefined) o[k] = dv;
      else if (dv === null) { if (v !== null && typeof v !== 'string' && typeof v !== 'number') o[k] = null; }
      else if (typeof dv === 'number') { if (typeof v !== 'number' || !isFinite(v)) o[k] = dv; }
      else if (typeof v !== typeof dv) o[k] = dv;
    }
    return o;
  }
  // v9.5 buku pemakaian: entri [tanda, hari]; tanda bit 1 sendiri, 2 bersama, 4 ujian (1..7), hari = floor(ms / 86400000) bilangan bulat ≥ 0.
  // Entri berbentuk salah dibuang; lebih dari BATAS_PAKAI entri → yang hari terakhirnya paling lama dibuang (urutan sisa tetap)
  const BATAS_PAKAI = 8000;
  function rapikanPakai(p) {
    const o = {}; if (!isObj(p)) return o;
    const ent = [];
    for (const k of Object.keys(p)) {
      const v = p[k];
      if (KUNCI_BAHAYA.has(k) || !k || k.length > 40 || !Array.isArray(v) || v.length !== 2) continue;
      if (!Number.isInteger(v[0]) || v[0] < 1 || v[0] > 7 || !Number.isInteger(v[1]) || v[1] < 0) continue;
      ent.push([k, v[0], v[1]]);
    }
    let simpan = null;
    if (ent.length > BATAS_PAKAI) simpan = new Set(ent.map((e, i) => [e[2], i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]).slice(0, BATAS_PAKAI).map(x => x[1]));
    ent.forEach((e, i) => { if (!simpan || simpan.has(i)) o[e[0]] = [e[1], e[2]]; });
    return o;
  }
  // normalisasi data dari localStorage, impor, atau tab lain: default lengkap, tipe benar, tanpa __proto__
  function normal(d) {
    const def = DEFAULT(); const src = salinAman(d); const o = salinAman(src);
    for (const k of Object.keys(def)) {
      const dv = def[k], v = src[k];
      if (k === 'profil' || k === 'pengaturan') o[k] = rapikan(dv, v);
      else if (Array.isArray(dv)) o[k] = Array.isArray(v) ? v.filter(isObj) : dv;
      else if (isObj(dv)) o[k] = isObj(v) ? salinAman(v) : dv;
      else if (dv === null) o[k] = v === undefined || v === null || typeof v === 'boolean' || Array.isArray(v) ? null : v;
      else o[k] = typeof v === typeof dv ? v : dv;
    }
    const p = o.profil, g = o.pengaturan;
    if (!['A', 'B', 'C'].includes(p.tingkat)) p.tingkat = 'A';
    if (p.tanggalUjian != null && !(typeof p.tanggalUjian === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.tanggalUjian))) p.tanggalUjian = null;
    if (!['system', 'light', 'dark'].includes(g.tema)) g.tema = 'system';
    const a = o.simulasiAktif;
    if (a !== null) { if (isObj(a) && Array.isArray(a.soalIds) && isObj(a.jawaban)) { if (!Array.isArray(a.ragu)) a.ragu = []; if (!isObj(a.detik)) a.detik = {}; } else o.simulasiAktif = null; }
    if (o.sesiAktif !== null && !(isObj(o.sesiAktif) && Array.isArray(o.sesiAktif.blok))) o.sesiAktif = null;
    if (typeof o.tutorKuota.n !== 'number' || typeof o.tutorKuota.tgl !== 'string') o.tutorKuota = { tgl: '', n: 0 };
    for (const k of ['eksporTerakhir', 'pengingatEksporTerakhir']) if (o[k] !== null && typeof o[k] !== 'number' && typeof o[k] !== 'string') o[k] = null;
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(String(g.jamPengingat))) g.jamPengingat = '19:30';
    // pengingat .ics: SEQUENCE bilangan bulat ≥ 0, LAST-MODIFIED ms, tanggal awal YYYY-MM-DD
    if (!Number.isInteger(g.icsSeq) || g.icsSeq < 0) g.icsSeq = 0;
    if (g.icsUbah !== null && !(typeof g.icsUbah === 'number' && g.icsUbah > 0)) g.icsUbah = null;
    if (g.icsMulai !== null && !(typeof g.icsMulai === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(g.icsMulai))) g.icsMulai = null;
    const rd = o.rencanaDasar;
    if (rd !== null && !(isObj(rd) && typeof rd.mulai === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(rd.mulai))) o.rencanaDasar = null;
    else if (rd) o.rencanaDasar = salinAman(rd);
    o.laporan = o.laporan.filter(x => typeof x.minggu === 'string');
    // v7.9 latihan bersama: peserta = nama unik (≤ 12, ≤ 24 karakter, tanpa karakter kontrol); entri jawaban berbentuk objek bernama
    // v9.4 W: + 'bebas' (waktu mengerjakan tanpa batas)
    const tempoB = o.bersama.tempo === 'longgar' || o.bersama.tempo === 'ujian' || o.bersama.tempo === 'bebas' ? o.bersama.tempo : null;
    const bahasB = [60, 120, 180, 0].includes(o.bersama.detikBahas) ? o.bersama.detikBahas : null;
    o.bersama = { aktif: o.bersama.aktif === true, peserta: (Array.isArray(o.bersama.peserta) ? o.bersama.peserta : []).filter(x => typeof x === 'string').map(x => x.replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim()).filter((x, i, a) => x && x.length <= 24 && a.findIndex(y => y.toLowerCase() === x.toLowerCase()) === i).slice(0, 12) };
    o.jawabanBersama = o.jawabanBersama.filter(x => typeof x.p === 'string' && typeof x.s === 'string');
    // v8.0: k = keyakinan; entri v7.9 menyimpan kode kelompok di k → pindah ke kd
    const YK = ['yakin', 'ragu', 'menebak'];
    o.jawabanBersama = o.jawabanBersama.map(x => { if (x.k == null || YK.includes(x.k)) return x; const y = salinAman(x); if (typeof y.k === 'string' && !y.kd) y.kd = y.k; y.k = null; return y; });
    if (tempoB) o.bersama.tempo = tempoB;  // v8.1: tanpa field = 'ujian'
    if (bahasB != null) o.bersama.detikBahas = bahasB;  // v9.3: waktu membahas per soal (0 = Bebas); tanpa field = 120
    o.sesiBersama = o.sesiBersama.filter(x => typeof x.id === 'string' && Array.isArray(x.peserta) && Array.isArray(x.soal)).slice(-60);
    // v8.1: keadaan kerja ujian tim / lembar jawab / lanjutkan sesi bersama — bentuk rusak → null (data v8.0 tidak punya field ini)
    if (!(isObj(o.ujianTim) && typeof o.ujianTim.id === 'string' && Array.isArray(o.ujianTim.soalIds) && Array.isArray(o.ujianTim.peserta))) o.ujianTim = null;
    if (!(isObj(o.lembarJawab) && Array.isArray(o.lembarJawab.jawaban))) o.lembarJawab = null;
    if (!(isObj(o.bersamaAktif) && typeof o.bersamaAktif.sesiId === 'string' && Array.isArray(o.bersamaAktif.soalIds))) o.bersamaAktif = null;
    o.pakai = rapikanPakai(o.pakai);  // v9.5
    return o;
  }
  // v9.5 migrasi buku pemakaian: data lama (tanpa field pakai) → UKP.belajar.pakai.bangunDariRiwayat sekali, lalu disimpan.
  // core.js dimuat sebelum learn.js, jadi migrasi yang tertunda dijalankan lagi oleh learn.js (UKP.store.migrasiPakai)
  let migrasiPakaiTunda = false;
  const perluMigrasiPakai = d => isObj(d) && !isObj(d.pakai);
  function migrasiPakai() {
    if (!migrasiPakaiTunda || !state) return false;
    const P = UKP.belajar && UKP.belajar.pakai; if (!P || typeof P.bangunDariRiwayat !== 'function') return false;
    migrasiPakaiTunda = false;
    try { state.pakai = rapikanPakai(P.bangunDariRiwayat(state)); } catch (e) { state.pakai = {}; }
    save();
    return true;
  }
  let state = null; let penyimpananOK = true;
  let dasarRaw = null;   // JSON terakhir yang diketahui sama dengan isi localStorage (dasar gabung tiga arah)
  let saveTimer = null;
  // ganti isi state di tempat, agar referensi `s` yang dipegang view tetap sah
  function isiUlang(baru) { if (!state) { state = baru; return state; } for (const k of Object.keys(state)) delete state[k]; Object.assign(state, baru); return state; }
  function load() {
    if (state) return state;
    let raw = null, d = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { penyimpananOK = false; }
    if (raw) { try { d = JSON.parse(raw); } catch (e) { d = null; try { localStorage.setItem(KEY + '.rusak', raw); } catch (e2) {} } }
    state = normal(d); dasarRaw = raw || JSON.stringify(state);
    if (perluMigrasiPakai(d)) { migrasiPakaiTunda = true; migrasiPakai(); }  // v9.5
    return state;
  }
  function tulis(tanpaGabung) {
    clearTimeout(saveTimer); saveTimer = null;
    if (!state) return;
    try {
      if (!tanpaGabung) { const kini = localStorage.getItem(KEY); if (kini != null && kini !== dasarRaw && sinkronDari(kini)) setTimeout(setelahSinkron, 0); }
      const json = JSON.stringify(state); localStorage.setItem(KEY, json); dasarRaw = json; penyimpananOK = true;
    } catch (e) { penyimpananOK = false; }
  }
  function save() { load(); clearTimeout(saveTimer); saveTimer = setTimeout(() => tulis(), 60); }
  // tulis segera (dipakai saat tab disembunyikan/ditutup dan oleh simulasi)
  function flush() { if (state) tulis(); }
  UKP.store = {
    get: load, save, flush, normal, rapikanPakai, migrasiPakai, BATAS_PAKAI,
    get ok() { return penyimpananOK; },
    reset() { load(); isiUlang(DEFAULT()); try { localStorage.removeItem(KEY + '.rusak'); } catch (e) {} tulis(true); },
    ekspor() { const s = load(); s.eksporTerakhir = Date.now(); save(); return JSON.stringify({ aplikasi: 'pelatih-ukp', versi: UKP.versi, diekspor: new Date().toISOString(), data: s }, null, 1); },
    impor(json) {
      let o;
      try { o = typeof json === 'string' ? JSON.parse(json.replace(/^﻿/, '').trim()) : json; }
      catch (e) { throw new Error('Teks bukan JSON yang valid. Salin ulang seluruh isi ekspor dari perangkat asal.'); }
      if (isObj(o) && o.aplikasi != null && o.aplikasi !== 'pelatih-ukp') throw new Error('Berkas ini bukan ekspor MABAR UKP.');
      const d = isObj(o) && isObj(o.data) ? o.data : o;
      if (!isObj(d) || !isObj(d.profil)) throw new Error('Isinya bukan ekspor MABAR UKP yang utuh. Salin ulang dari perangkat asal.');
      load(); isiUlang(normal(d));
      if (perluMigrasiPakai(d)) { migrasiPakaiTunda = true; migrasiPakai(); }  // v9.5: ekspor lama tanpa buku pemakaian
      tulis(true);
      return true;
    },
  };
  // simulasi berjalan menurut state (bukan atribut DOM): belum selesai, dan bila berwaktu masih dalam waktu
  UKP.simulasiBerjalan = function () { const a = load().simulasiAktif; if (!a || a.selesai) return false; return a.tanpaWaktu ? true : Number(a.akhir) > Date.now(); };

  // ---------- sinkron lintas tab ----------
  // Tab lain menulis → gabung tiga arah: perubahan tab ini sejak sinkron terakhir (kita − dasar)
  // diterapkan di atas data tab lain. Log (jawaban, sesi, simulasi, kartuOtomatis) digabung per entri.
  function sama(a, b) { if (a === b) return true; try { return JSON.stringify(a) === JSON.stringify(b); } catch (e) { return false; } }
  const kunciLog = x => isObj(x) ? (x.id != null ? 'i:' + x.id : 'p:' + x.soal + '|' + x.pada) : JSON.stringify(x);
  function gabungLog(mereka, kita, dasar) {
    const kK = new Set(kita.map(kunciLog)), kD = new Set(dasar.map(kunciLog)), kM = new Set(mereka.map(kunciLog));
    const out = mereka.filter(x => { const k = kunciLog(x); return !(kD.has(k) && !kK.has(k)); })
      .concat(kita.filter(x => { const k = kunciLog(x); return !kD.has(k) && !kM.has(k); }));
    if (out.length && out.every(x => isObj(x) && typeof x.pada === 'number')) out.sort((p, q) => p.pada - q.pada);
    return out;
  }
  // v9.5 entri buku pemakaian yang juga diubah tab lain: tanda digabung (OR), hari terakhir diambil yang paling baru
  const gabungPakai = (a, m) => Array.isArray(a) && Array.isArray(m) && a.length === 2 && m.length === 2 ? [(a[0] | m[0]), Math.max(a[1], m[1])] : a;
  function gabung(kita, mereka, dasar) {
    for (const k of Object.keys(kita)) {
      if (KUNCI_BAHAYA.has(k)) continue;
      const a = kita[k], b = dasar ? dasar[k] : undefined, m = mereka[k];
      if (sama(a, b)) continue;                       // tab ini tidak mengubah kunci ini
      if (Array.isArray(a) && Array.isArray(m)) mereka[k] = gabungLog(m, a, Array.isArray(b) ? b : []);
      else if (isObj(a) && isObj(m) && isObj(b)) {
        for (const ek of new Set(Object.keys(a).concat(Object.keys(b)))) {
          if (KUNCI_BAHAYA.has(ek) || sama(a[ek], b[ek])) continue;
          if (punya(a, ek)) m[ek] = k === 'pakai' ? gabungPakai(a[ek], m[ek]) : a[ek]; else delete m[ek];
        }
      } else mereka[k] = a;
    }
    return mereka;
  }
  // terapkan data tab lain ke state (di tempat); true bila ada perubahan
  function sinkronDari(raw) {
    if (!state || raw == null || raw === dasarRaw) return false;
    let d; try { d = JSON.parse(raw); } catch (e) { return false; }
    let dasar = null; if (dasarRaw) { try { dasar = normal(JSON.parse(dasarRaw)); } catch (e) {} }
    // v9.5: tab versi lama menulis tanpa field pakai → buku pemakaian tab ini dipertahankan (bukan dikosongkan)
    const mereka = normal(d); if (perluMigrasiPakai(d)) mereka.pakai = state.pakai;
    const baru = gabung(state, mereka, dasar);
    // pekerjaan yang sedang berjalan di tab ini tetap milik tab ini
    const v = UKP.sekarang ? UKP.sekarang().view : null;
    const sa = state.simulasiAktif, se = state.sesiAktif;
    if (v === 'simulasi' && sa && !sa.selesai && !baru.simulasi.some(x => x.id === sa.id)) baru.simulasiAktif = sa;
    if (v === 'sesi' && se && !baru.sesi.some(x => x.id === se.id)) baru.sesiAktif = se;
    isiUlang(baru); dasarRaw = raw;
    return true;
  }
  // view tampilan yang aman dirender ulang; view kerja (simulasi, sesi, latih, ulang, kasus, …) tidak diganggu
  const RENDER_ULANG_AMAN = ['beranda', 'tingkat', 'belajar', 'kelompok', 'kemajuan', 'rencana', 'info-ujian', 'profesi', 'pengaturan', 'strategi', 'formulir', 'lembar', 'cakupan', 'bank'];  // v9.5: + bank
  let tundaRender = false, tundaToast = false, toastSinkronTerakhir = 0, renderSinkronTerakhir = 0, renderSinkronTimer = null;
  // render ulang akibat tab lain: paling sering sekali per 2 detik (cegah saling-picu antar-tab yang sama-sama terlihat)
  function renderSinkron() {
    clearTimeout(renderSinkronTimer); renderSinkronTimer = null;
    const v = UKP.sekarang().view;
    if (!RENDER_ULANG_AMAN.includes(v)) return;
    if (document.hidden || sedangMengetikDiMain()) { tundaRender = true; return; }
    const tunggu = 2000 - (Date.now() - renderSinkronTerakhir);
    if (tunggu > 0) { renderSinkronTimer = setTimeout(renderSinkron, tunggu); return; }
    renderSinkronTerakhir = Date.now(); UKP.render();
  }
  function sedangMengetikDiMain() {
    const a = document.activeElement, main = document.getElementById('main');
    if (!a || !main || !main.contains(a)) return false;
    return a.isContentEditable || a.tagName === 'TEXTAREA' || (a.tagName === 'INPUT' && !/^(radio|checkbox|button|submit|reset|range|color|file|image|hidden)$/i.test(a.type || 'text'));
  }
  function umumkanSinkron() { if (Date.now() - toastSinkronTerakhir > 15000) { toastSinkronTerakhir = Date.now(); UKP.toast('Progres diperbarui dari tab lain.'); } }
  function setelahSinkron() {
    try { UKP.terapkanTema(); } catch (e) {}
    const view = UKP.sekarang ? UKP.sekarang().view : null;
    if (!view) return;
    if (view !== 'mulai' && !UKP.VIEW_TAMU[view] && !state.profil.onboardingSelesai && adaView('mulai')) { UKP.go('mulai', {}, { replace: true }); return; }
    try { if (UKP.perbaruiTopbar) UKP.perbaruiTopbar(); if (UKP.perbaruiNav) UKP.perbaruiNav(view); } catch (e) {}
    renderSinkron();
    if (document.hidden) tundaToast = true; else umumkanSinkron();
  }
  // baca nilai terbaru dari localStorage (bukan e.newValue yang bisa sudah usang)
  function periksaTabLain() { let raw; try { raw = localStorage.getItem(KEY); } catch (e) { return; } if (sinkronDari(raw)) setelahSinkron(); }
  window.addEventListener('storage', e => {
    try { if (e.storageArea && e.storageArea !== window.localStorage) return; } catch (err) { return; }
    if (e.key === KEY || e.key === null) periksaTabLain();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { flush(); return; }
    periksaTabLain();   // event storage tidak sampai selama halaman dibekukan
    if (tundaRender) { tundaRender = false; renderSinkron(); }
    if (tundaToast) { tundaToast = false; umumkanSinkron(); }
  });
  window.addEventListener('pagehide', () => flush());
  window.addEventListener('pageshow', e => { if (e.persisted) periksaTabLain(); });

  // ---------- tema ----------
  UKP.terapkanTema = function () {
    const p = load().pengaturan; const r = document.documentElement;
    if (p.tema === 'light' || p.tema === 'dark') r.setAttribute('data-theme', p.tema); else r.removeAttribute('data-theme');
    if (p.kurangiGerak) r.setAttribute('data-gerak', 'kurang'); else r.removeAttribute('data-gerak');
    if (p.teksBesar) r.setAttribute('data-teks', 'besar'); else r.removeAttribute('data-teks');
    // warna bilah peramban mengikuti tema manual (DESAIN-V6 §G.12)
    try {
      const WARNA = { light: '#F6F7F9', dark: '#0A1626' }; // = --bg terang/gelap (v8.3)
      document.querySelectorAll('meta[name="theme-color"]').forEach(m => {
        const asal = /dark/.test(m.getAttribute('media') || '') ? 'dark' : 'light';
        m.setAttribute('content', WARNA[p.tema === 'light' || p.tema === 'dark' ? p.tema : asal]);
      });
    } catch (e) {}
  };
  // tema efektif saat ini ('light' | 'dark'), termasuk "ikut sistem"
  UKP.temaEfektif = function () {
    const t = load().pengaturan.tema; if (t === 'light' || t === 'dark') return t;
    try { return root.matchMedia && root.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } catch (e) { return 'light'; }
  };

  // ---------- toast ----------
  // .toast visual (aria-hidden) + wilayah status tersembunyi yang sudah ada sejak boot, agar pesan
  // terumumkan dengan andal (wilayah yang baru dibuat atau baru dimunculkan sering tidak terbaca).
  // UKP.toast(teks, ms | { nada: 'ok'|'info'|'attn'|'warn', aksi: { label, onclick }, ms, lintasRute })
  // Satu toast sekaligus (yang baru menggantikan). Durasi 4 dtk, 6 dtk bila beraksi; dijeda saat hover (pointer halus)
  // atau fokus, tidak dijeda oleh ketukan pada pointer kasar. Toast beraksi tidak mencuri fokus; tombolnya dapat dicapai
  // dengan Tab dan Alt+Z menjalankan aksinya. Pindah rute menyembunyikan toast lama kecuali lintasRute (toast yang baru
  // saja dipicu sebelum pindah tetap tampil). Toast tidak pernah menutupi bar aksi lengket bawah (lihat posisiToast).
  let toastEl = null, toastLive = null, toastTimer = null, toastUmumTimer = null, toastKeluarTimer = null;
  let toastAksi = null, toastLintas = false, toastSisa = 0, toastMulai = 0, toastPada = 0, toastFokusAsal = null;
  const IKON_NADA = { ok: 'cek-lingkar', attn: 'peringatan', warn: 'peringatan', info: 'info' };
  const pointerKasar = () => { try { return !!(root.matchMedia && root.matchMedia('(pointer: coarse)').matches); } catch (e) { return false; } };
  // ---- posisi: di atas bar aksi lengket bawah yang terlihat ----
  // Bar yang menempel di dasar (tepat di atas bar navigasi bawah, atau di dasar layar pada mode sesi/ujian dan ≥ 600 px)
  // ditulis sebagai --tinggi-aksi (px) pada <body> untuk dipakai css/app.css; dihapus bila tidak ada bar. Sebagai jaring
  // pengaman, bila posisi CSS toast masih menindih bar mana pun, toast diangkat lewat style.bottom tepat di atasnya.
  // Diperbarui saat toast tampil, saat ukuran main/layar berubah, saat menggulir, dan lewat UKP.toast.posisi() dari view.
  const SEL_AKSI_BAWAH = '.sticky-actions:not([hidden]), .nav-topik, .hasil-mini, .ujian-bar, .sesi-bar';
  const JARAK_TOAST = 8;
  let toastRO = null, toastRaf = 0, toastPantau = false;
  function posisiToast() {
    if (toastRaf) { cancelAnimationFrame(toastRaf); toastRaf = 0; }
    const body = document.body; if (!body) return;
    const H = root.innerHeight || document.documentElement.clientHeight || 0; if (!H) return;
    let navAtas = H;
    const bn = document.getElementById('bottomnav');
    if (bn && !bn.hidden) { const r = bn.getBoundingClientRect(); if (r.height && r.top < H && r.bottom > 0) navAtas = Math.max(0, r.top); }
    const bar = [];
    document.querySelectorAll(SEL_AKSI_BAWAH).forEach(el => {
      if (el.closest('dialog')) return;
      const r = el.getBoundingClientRect();
      if (r.width && r.height && r.bottom > 0 && r.top < H) bar.push(r);
    });
    let tinggi = 0;
    bar.forEach(r => { if (r.bottom >= navAtas - 4 && r.top < navAtas && r.top > H / 3) tinggi = Math.max(tinggi, Math.round(navAtas - r.top)); });
    if (tinggi > 0) body.style.setProperty('--tinggi-aksi', tinggi + 'px'); else body.style.removeProperty('--tinggi-aksi');
    if (!toastEl || toastEl.hidden) return;
    toastEl.style.removeProperty('bottom');
    if (!bar.length) return;
    const dasar = parseFloat(getComputedStyle(toastEl).bottom); if (!isFinite(dasar)) return;
    const th = toastEl.offsetHeight || 44;
    let angkat = dasar;
    for (let i = 0; i < 4; i++) {
      const bawahY = H - angkat, atasY = bawahY - th; let batas = Infinity;
      bar.forEach(r => { if (r.top < bawahY + JARAK_TOAST && r.bottom > atasY - JARAK_TOAST) batas = Math.min(batas, r.top); });
      if (batas === Infinity) break;
      angkat = H - batas + JARAK_TOAST;
    }
    angkat = Math.min(angkat, Math.max(dasar, H - th - JARAK_TOAST));   // tetap di dalam layar
    if (angkat > dasar + 0.5) toastEl.style.bottom = Math.round(angkat) + 'px';
  }
  function jadwalPosisiToast() { if (!toastRaf) toastRaf = requestAnimationFrame(() => { toastRaf = 0; posisiToast(); }); }
  function mulaiPantauToast() {
    if (toastPantau) return; toastPantau = true;
    root.addEventListener('resize', jadwalPosisiToast, { passive: true });
    root.addEventListener('scroll', jadwalPosisiToast, { passive: true, capture: true });
    document.addEventListener('ukp:render', jadwalPosisiToast);
    if ('ResizeObserver' in root) {
      // callback RO berjalan setelah tata letak dan sebelum dicat: bar yang baru muncul langsung diperhitungkan tanpa kedip
      if (!toastRO) toastRO = new ResizeObserver(() => { if (toastPantau) posisiToast(); });
      const main = document.getElementById('main'); if (main) toastRO.observe(main);
      toastRO.observe(toastEl);
    }
  }
  function hentiPantauToast() {
    if (!toastPantau) return; toastPantau = false;
    root.removeEventListener('resize', jadwalPosisiToast, { passive: true });
    root.removeEventListener('scroll', jadwalPosisiToast, { passive: true, capture: true });
    document.removeEventListener('ukp:render', jadwalPosisiToast);
    if (toastRO) toastRO.disconnect();
    if (toastRaf) { cancelAnimationFrame(toastRaf); toastRaf = 0; }
    if (document.body) document.body.style.removeProperty('--tinggi-aksi');
    if (toastEl) toastEl.style.removeProperty('bottom');
  }
  function siapkanToast() {
    if (toastEl && toastEl.isConnected) return true;
    if (!document.body) return false;
    toastLive = h('div', { class: 'visually-hidden', role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' });
    toastEl = h('div', { class: 'toast', 'aria-hidden': 'true', hidden: true });
    // jeda saat pointer/fokus di atas toast; lanjut dengan sisa waktu (minimal 1,5 dtk)
    const jeda = () => { if (!toastTimer) return; clearTimeout(toastTimer); toastTimer = null; toastSisa = Math.max(0, toastSisa - (Date.now() - toastMulai)); };
    const lanjut = () => { if (toastEl.hidden || toastTimer) return; if ((!pointerKasar() && toastEl.matches(':hover')) || toastEl.contains(document.activeElement)) return; jadwalTutupToast(Math.max(1500, toastSisa)); };
    // pointer kasar (sentuh): ketukan tidak menjeda timer (hover tiruan dan :hover yang lengket membuat toast tak pernah hilang)
    toastEl.addEventListener('pointerenter', e => { if (e.pointerType === 'touch' || pointerKasar()) return; jeda(); });
    toastEl.addEventListener('pointerleave', e => { if (e.pointerType === 'touch' || pointerKasar()) return; lanjut(); });
    toastEl.addEventListener('focusin', e => { if (e.relatedTarget && !toastEl.contains(e.relatedTarget)) toastFokusAsal = e.relatedTarget; jeda(); });
    toastEl.addEventListener('focusout', e => { if (!toastEl.contains(e.relatedTarget)) setTimeout(lanjut, 0); });
    document.body.append(toastLive, toastEl);
    return true;
  }
  function tutupToast(segera) {
    clearTimeout(toastTimer); toastTimer = null; toastAksi = null;
    if (!toastEl || toastEl.hidden) return;
    // fokus di dalam toast dikembalikan ke asalnya sebelum toast hilang (tidak jatuh ke body)
    if (toastEl.contains(document.activeElement)) { const asal = toastFokusAsal && toastFokusAsal.isConnected ? toastFokusAsal : document.getElementById('main'); UKP.fokus(asal); }
    toastFokusAsal = null;
    const selesai = () => { toastEl.hidden = true; toastEl.classList.remove('keluar'); toastEl.replaceChildren(); hentiPantauToast(); };
    clearTimeout(toastKeluarTimer);
    if (segera || !UKP.gerakBoleh()) { selesai(); return; }
    toastEl.classList.add('keluar'); toastKeluarTimer = setTimeout(selesai, 140);
  }
  function jadwalTutupToast(ms) { clearTimeout(toastTimer); toastMulai = Date.now(); toastSisa = ms; toastTimer = setTimeout(() => tutupToast(), ms); }
  function jalankanAksiToast() {
    const a = toastAksi; if (!a) return false;
    tutupToast();
    try { (a.onclick || a.fn)(); } catch (e) { console.error(e); }
    return true;
  }
  // v8.1 V1: selama papan latihan bersama / ujian tim tampil, toast latar (nada ok/info tanpa aksi, mis. "Siap dipakai offline")
  // ditunda sampai papan hilang, agar tidak menutupi baris status dan blok triase; toast lain tetap tampil (diposisikan di atas, css)
  const sedangSesiBersama = () => { try { return !!document.querySelector('#main .soal-bersama, body[data-mode="ujian"] .ut-bar'); } catch (e) { return false; } };
  let toastTunda = [], toastTundaTimer = null;
  function periksaToastTunda() {
    if (sedangSesiBersama()) return;
    clearInterval(toastTundaTimer); toastTundaTimer = null;
    const x = toastTunda.filter(t => Date.now() - t.pada < 30 * 60000).pop(); toastTunda = [];
    if (x) UKP.toast(x.teks, x.opsi);
  }
  UKP.toast = function (teks, opsi) {
    if (!siapkanToast()) return;
    if (typeof opsi === 'number') opsi = { ms: opsi };
    opsi = opsi || {};
    teks = String(teks == null ? '' : teks);
    if (!opsi.aksi && !opsi.penting && (opsi.nada === 'ok' || opsi.nada === 'info') && sedangSesiBersama()) {
      toastTunda.push({ teks, opsi, pada: Date.now() }); if (toastTunda.length > 3) toastTunda.shift();
      if (!toastTundaTimer) toastTundaTimer = setInterval(periksaToastTunda, 2000);
      return;
    }
    const aksi = opsi.aksi && opsi.aksi.label && typeof (opsi.aksi.onclick || opsi.aksi.fn) === 'function' ? opsi.aksi : null;
    clearTimeout(toastKeluarTimer); toastEl.classList.remove('keluar');
    toastAksi = aksi; toastLintas = !!opsi.lintasRute; toastPada = Date.now();
    const nada = IKON_NADA[opsi.nada] ? opsi.nada : null;
    toastEl.replaceChildren(
      nada ? UKP.icon(IKON_NADA[nada]) : null,
      h('span', { class: 'toast-teks', 'aria-hidden': aksi ? 'true' : null }, teks),
      aksi ? h('button', { type: 'button', class: 'toast-aksi', 'aria-label': aksi.label + ': ' + teks, 'aria-keyshortcuts': 'Alt+Z', onclick: jalankanAksiToast }, aksi.label) : null,
      aksi ? h('button', { type: 'button', class: 'icon-btn sm toast-tutup', 'aria-label': 'Tutup notifikasi', onclick: () => tutupToast() }, UKP.icon('x')) : null);
    if (nada) toastEl.dataset.nada = nada; else delete toastEl.dataset.nada;
    if (aksi) toastEl.removeAttribute('aria-hidden'); else toastEl.setAttribute('aria-hidden', 'true');
    // animasi masuk diputar ulang untuk toast pengganti
    toastEl.hidden = true; void toastEl.offsetWidth; toastEl.hidden = false;
    posisiToast(); mulaiPantauToast();
    toastLive.textContent = '';
    clearTimeout(toastUmumTimer); toastUmumTimer = setTimeout(() => { toastLive.textContent = teks + (aksi ? ' Tekan Alt+Z untuk ' + aksi.label.toLowerCase() + '.' : ''); }, 50);
    jadwalTutupToast(opsi.ms || (aksi ? 6000 : Math.min(10000, Math.max(4000, teks.length * 70))));
  };
  UKP.toast.siapkan = siapkanToast;
  UKP.toast.tutup = () => tutupToast(true);
  // view memanggil ini setelah memasang/mengubah bar aksi lengket di dasar (mis. umpan + Lanjut setelah Periksa)
  UKP.toast.posisi = () => { try { posisiToast(); } catch (e) {} };
  // dipanggil router saat pindah rute: toast lama disembunyikan (kecuali lintasRute atau baru dipicu < 400 ms lalu)
  UKP.toast.pindahRute = () => { if (toastEl && !toastEl.hidden && !toastLintas && Date.now() - toastPada > 400) tutupToast(true); };
  document.addEventListener('keydown', e => { if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === 'z' || e.key === 'Z' || e.code === 'KeyZ') && toastAksi && toastEl && !toastEl.hidden) { e.preventDefault(); jalankanAksiToast(); } });
  // pengumuman sopan lewat wilayah status global (#live)
  UKP.umumkan = function (teks) { const live = document.getElementById('live'); if (!live) return; live.textContent = ''; setTimeout(() => { live.textContent = String(teks || ''); }, 50); };
  if (document.body) siapkanToast(); else document.addEventListener('DOMContentLoaded', siapkanToast);

  // ---------- dialog ----------
  // opts: judul, isi (node | fungsi(dlg)), kaki (node | array | fungsi(dlg): aksi di .dlg-foot), sheet, ukuran ('sm' | 'lg'),
  //       kelas (kelas tambahan), describedby (id kalimat utama), onClose(returnValue),
  //       wajib (tak tertutup lewat Esc/latar), closedby ('any' | 'closerequest' | 'none'),
  //       tanpaTutup (tanpa tombol ×; bawaan untuk closedby 'none')
  // Markup V6: <dialog> → .dlg-head (h2 + tutup) · .dlg-body (gulir sendiri) · .dlg-foot (aksi; bahaya .kiri) bersaudara
  // v9.5 FC4: kotak cadangan (tanpa showModal) yang sedang terbuka, bawah → atas. Esc dan penahan fokus hanya untuk kotak paling atas.
  const tumpukCadangan = [];
  let pasangCadangan = false;
  const atasCadangan = () => { while (tumpukCadangan.length && !tumpukCadangan[tumpukCadangan.length - 1].isConnected) tumpukCadangan.pop(); return tumpukCadangan[tumpukCadangan.length - 1]; };
  function pasangPenjagaCadangan() {
    if (pasangCadangan) return; pasangCadangan = true;
    document.addEventListener('keydown', e => {
      const atas = atasCadangan();
      if (!atas || e.key !== 'Escape' && e.key !== 'Esc') return;
      e.preventDefault(); e.stopPropagation(); atas._escCadangan();
    }, true);
    document.addEventListener('focusin', e => {
      const atas = atasCadangan();
      if (!atas || !e.target || atas.contains(e.target)) return;
      atas._fokusCadangan();
    }, true);
  }
  UKP.dialog = function (opts) {
    opts = opts || {};
    const jid = UKP.util.id('dlg-judul');
    const closedby = opts.closedby || (opts.wajib ? 'none' : null);
    const bolehEsc = closedby !== 'none';
    const bolehLatar = closedby == null || closedby === 'any';
    const tanpaTutup = opts.tanpaTutup != null ? !!opts.tanpaTutup : opts.closedby === 'none';
    const sebelum = document.activeElement;
    const kelas = [opts.sheet ? 'sheet' : null, opts.ukuran || null, opts.kelas || null].filter(Boolean).join(' ') || null;
    const dlg = h('dialog', { class: kelas, 'aria-labelledby': jid, 'aria-describedby': opts.describedby || null, closedby });
    const head = h('div', { class: 'dlg-head' }, h('h2', { id: jid }, opts.judul || ''), tanpaTutup ? null : h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Tutup', onclick: () => dlg.close('batal') }, UKP.icon('x')));
    const body = h('div', { class: 'dlg-body' });
    append(body, [typeof opts.isi === 'function' ? opts.isi(dlg) : opts.isi]);
    const kaki = typeof opts.kaki === 'function' ? opts.kaki(dlg) : opts.kaki;
    dlg.append(opts.sheet ? h('div', { class: 'pegangan', 'aria-hidden': 'true' }) : null, head, body, kaki ? append(h('div', { class: 'dlg-foot' }), [kaki]) : null);
    document.body.appendChild(dlg);
    let selesai = false;
    dlg.addEventListener('close', () => { if (selesai) return; selesai = true; dlg.remove(); if (opts.onClose) opts.onClose(dlg.returnValue); });
    // tutup lewat latar hanya bila tekanan juga dimulai di latar (bukan seret seleksi teks keluar kotak)
    let tekanLatar = null;
    dlg.addEventListener('pointerdown', e => { tekanLatar = e.target === dlg; });
    dlg.addEventListener('click', e => { const dariLatar = tekanLatar !== false; tekanLatar = null; if (e.target === dlg && dariLatar && bolehLatar) dlg.close('batal'); });
    dlg.addEventListener('cancel', e => { if (!bolehEsc) e.preventDefault(); });
    if (typeof dlg.showModal === 'function') { try { dlg.showModal(); return dlg; } catch (e) {} }
    // cadangan untuk peramban tanpa <dialog>.showModal
    dlg.setAttribute('open', ''); dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true');
    // v9.4 Kb3: tanpa <dialog> (iOS < 15.4) kotak ini akan muncul di dasar halaman; data-cadangan + latar = tampil di tengah layar (CSS blok v9.4 Kb)
    dlg.setAttribute('data-cadangan', ''); const latar = h('div', { class: 'dlg-latar-cadangan', 'aria-hidden': 'true' });
    if (dlg.parentNode) dlg.parentNode.insertBefore(latar, dlg);
    latar.addEventListener('click', () => { if (bolehLatar) dlg.close('batal'); }); dlg.addEventListener('close', () => latar.remove());
    // v9.5 FC4: kotak bertumpuk: latar ke-n di atas kotak ke-(n-1) (z-index 1000 + 2n - 1, kotak 1000 + 2n)
    tumpukCadangan.push(dlg); const ke = tumpukCadangan.length;
    latar.style.zIndex = String(1000 + 2 * ke - 1); dlg.style.zIndex = String(1000 + 2 * ke);
    if (!dlg.hasAttribute('tabindex')) dlg.setAttribute('tabindex', '-1');
    const pertama = () => dlg.querySelector('[autofocus]') || dlg.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || dlg;
    dlg._escCadangan = () => { if (bolehEsc) dlg.close('batal'); };
    dlg._fokusCadangan = () => { try { pertama().focus({ preventScroll: true }); } catch (e) {} };
    pasangPenjagaCadangan();
    dlg.close = function (v) {
      if (!dlg.hasAttribute('open')) return;
      const i = tumpukCadangan.indexOf(dlg); if (i >= 0) tumpukCadangan.splice(i, 1);
      dlg.returnValue = v == null ? '' : String(v);
      dlg.removeAttribute('open');
      dlg.dispatchEvent(new Event('close'));
      if (sebelum && sebelum.isConnected && typeof sebelum.focus === 'function') { try { sebelum.focus({ preventScroll: true }); } catch (e) {} }
    };
    // dlg.remove() tanpa close() (mis. layar diganti): keluarkan dari tumpukan agar Esc dan fokus tidak tertahan
    const hapusAsli = dlg.remove;
    dlg.remove = function () { const i = tumpukCadangan.indexOf(dlg); if (i >= 0) tumpukCadangan.splice(i, 1); latar.remove(); return hapusAsli.apply(dlg, arguments); };
    UKP.fokus(pertama());
    return dlg;
  };
  UKP.konfirmasi = function (judul, teks, opsi) {
    opsi = opsi || {};
    return new Promise(resolve => {
      // fokus awal pada pilihan aman: "Batal" untuk aksi berbahaya, tombol utama untuk yang lain.
      // Kaki V6: bahaya terisi di kiri (.kiri), pilihan aman di kanan; selain itu Batal (sekunder) lalu aksi utama (primer, paling kanan)
      const pid = UKP.util.id('dlg-desk');
      UKP.dialog({ judul, ukuran: 'sm', describedby: pid, isi: () => h('p', { id: pid }, teks),
        kaki: dlg => opsi.bahaya
          ? [h('button', { type: 'button', class: 'btn btn-danger btn-attn isi kiri', onclick: () => dlg.close('ya') }, opsi.ya || 'Ya'),
            h('button', { type: 'button', class: 'btn', autofocus: true, onclick: () => dlg.close('batal') }, opsi.tidak || 'Batal')]
          : [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, opsi.tidak || 'Batal'),
            h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => dlg.close('ya') }, opsi.ya || 'Ya')],
        onClose: v => resolve(v === 'ya') });
    });
  };

  // ---------- router ----------
  UKP.views = UKP.views || {};
  // view yang boleh dibuka sebelum onboarding selesai (tautan yang dibagikan pemimpin ke anggota tim)
  UKP.VIEW_TAMU = { ujiantim: 1, lj: 1, room: 1 };
  // v9.0 D5: pengunjung baru yang menuju fitur tertentu diarahkan ke formulir onboarding (mulai { isi: 1 }); akar situs dan Beranda
  // menuju halaman sambutan (mulai tanpa params)
  const paramsMulai = view => (!view || view === 'beranda' || view === 'mulai') ? {} : { isi: 1 };
  UKP.paramsMulai = paramsMulai;
  const TOKEN = { beranda: 'beranda', belajar: 'belajar', latih: 'latih', ulang: 'ulang', kalkulator: 'kalkulator', simulasi: 'simulasi', kasus: 'kasus', rencana: 'rencana', kemajuan: 'kemajuan', referensi: 'referensi', 'info-ujian': 'infoujian', profesi: 'profesi', pengaturan: 'pengaturan', strategi: 'strategi', tutor: 'tutor', mulai: 'mulai', tingkat: 'tingkat', kelompok: 'kelompok', topik: 'topik', formulir: 'formulir', lembar: 'lembar', cakupan: 'cakupan', tim: 'tim', ujiantim: 'ujiantim', lj: 'lj', room: 'room', bank: 'bank' };  // v9.5: + #bank (Bank soal)
  const DARI_TOKEN = Object.create(null); for (const k in TOKEN) DARI_TOKEN[TOKEN[k]] = k;
  // token hash (#infoujian, #topik/A2.8) atau nama view mentah (#info-ujian) → nama view; selain itu null
  function viewDariToken(tok) {
    tok = String(tok || '').replace(/^#/, '').split('?')[0].split('/')[0];
    try { tok = decodeURIComponent(tok); } catch (e) {}
    if (!tok) return null;
    const v = DARI_TOKEN[tok] || tok;
    return adaView(v) ? v : null;
  }
  UKP.viewDariToken = viewDariToken;
  // params kunci ikut di hash agar tautan dapat dibuka di tab baru, dimuat ulang, atau dibagikan:
  // #topik/A2.8 · #kelompok/B7 · #kalkulator/kurs · #lembar/A1 · #tingkat/B · #kasus/K-A1-01 · #cakupan/C ·
  // #formulir/1771 (formulir) atau #formulir/1771.induk.1 (baris). Params lain tetap hanya di history.state.
  // v8.1: #ujiantim/<kode ujian> (UKP.belajar.ujianTim.buatKode; hanya [A-Za-z0-9._~-]) dan #lj (lembar jawab pribadi, tanpa params).
  const PARAM_HASH = { topik: 'id', kelompok: 'kode', kalkulator: 'jenis', lembar: 'kode', tingkat: 'tingkat', kasus: 'id', cakupan: 'tingkat', 'info-ujian': 'tab', tim: 'anggota', ujiantim: 'kode', room: 'kode', mulai: 'isi' };
  // view yang tak bermakna tanpa params → induknya (bukan halaman "tidak ditemukan"); kalkulator, lembar, formulir,
  // dan kasus tanpa params sudah menampilkan daftar induknya sendiri
  const INDUK_TANPA_PARAMS = { topik: 'tingkat', kelompok: 'tingkat' };
  function nilaiHash(view, params) {
    const p = params && typeof params === 'object' ? params : {};
    const v = view === 'formulir' ? (p.baris || p.id) : PARAM_HASH[view] ? p[PARAM_HASH[view]] : null;
    return v == null || v === '' || typeof v === 'object' ? '' : String(v);
  }
  UKP.href = (view, params) => {
    const nilai = nilaiHash(view, params);
    return '#' + (punya(TOKEN, view) ? TOKEN[view] : String(view || 'beranda')) + (nilai ? '/' + encodeURIComponent(nilai) : '');
  };
  // hash → { view, params } (null bila bukan rute, mis. #main atau jangkar di halaman); token lama tanpa params tetap sah
  function ruteDariHash(hash) {
    const s = String(hash || '').replace(/^#/, '').split('?')[0];
    const view = viewDariToken(s); if (!view) return null;
    const i = s.indexOf('/'); let nilai = i < 0 ? '' : s.slice(i + 1);
    try { nilai = decodeURIComponent(nilai); } catch (e) {}
    nilai = nilai.replace(/\/+$/, '').trim();
    const params = {};
    if (nilai) {
      if (view === 'formulir') {
        const F = UKP.formulir; const adaForm = !!(F && Array.isArray(F.formulir) && F.formulir.some(f => String(f.id) === nilai));
        if (UKP.formulirBaris(nilai)) params.baris = nilai; else if (adaForm) params.id = nilai; else params[nilai.includes('.') ? 'baris' : 'id'] = nilai;
      } else if (PARAM_HASH[view]) params[PARAM_HASH[view]] = nilai;
    }
    return { view, params };
  }
  UKP.ruteDariHash = ruteDariHash;
  function arahkanInduk(r) {
    const induk = INDUK_TANPA_PARAMS[r.view];
    return induk && !nilaiHash(r.view, r.params) ? { view: adaView(induk) ? induk : 'beranda', params: {}, dialihkan: true } : r;
  }
  let current = { view: null, params: null };
  let stackLen = 0;
  UKP.sekarang = () => current;
  UKP.go = function (view, params, opsi) {
    params = params || {}; opsi = opsi || {};
    if (!adaView(view)) { console.warn('view tidak ada', view); view = 'beranda'; }
    // v8.1 V1: pengunjung baru yang masuk lewat tautan tim (UKP.VIEW_TAMU) lalu membuka halaman lain tetap diarahkan ke onboarding
    if (view !== 'mulai' && !UKP.VIEW_TAMU[view] && adaView('mulai') && !load().profil.onboardingSelesai) { params = paramsMulai(view); view = 'mulai'; opsi = Object.assign({}, opsi, { replace: true }); }
    const st = { view, params };
    // posisi gulir halaman yang ditinggalkan disimpan di entrinya (dipulihkan saat Kembali)
    if (!opsi.replace) { try { const lama = history.state; if (lama && lama.view) history.replaceState(Object.assign({}, lama, { gulir: Math.round(window.scrollY || 0) }), '', location.hash || UKP.href(lama.view, lama.params)); } catch (e) {} }
    try { if (opsi.replace) history.replaceState(st, '', UKP.href(view, params)); else { history.pushState(st, '', UKP.href(view, params)); stackLen++; } } catch (e) {}
    render(view, params, opsi);
  };
  UKP.kembali = function () { if (stackLen > 0) { history.back(); } else UKP.go('beranda', {}, { replace: true }); };
  // perbarui params rute saat ini di entri riwayat tanpa render ulang (mis. kueri saringan); nilai null/'' menghapus kunci.
  // view (opsional): abaikan bila rute sudah berganti. Kunci lain di history.state (penjaga ujian, dsb.) dipertahankan.
  UKP.perbaruiParams = function (patch, view) {
    if (!current.view || (view && current.view !== view)) return;
    const params = Object.assign({}, current.params || {});
    for (const k in patch || {}) { if (KUNCI_BAHAYA.has(k)) continue; const v = patch[k]; if (v == null || v === '') delete params[k]; else params[k] = v; }
    current = { view: current.view, params };
    try { const st = history.state && history.state.view === current.view ? history.state : { view: current.view }; history.replaceState(Object.assign({}, st, { params }), '', UKP.href(current.view, params)); } catch (e) {}
  };
  window.addEventListener('popstate', e => {
    const st = e.state;
    if (st && st.view) {
      if (stackLen > 0) stackLen--;
      const r = arahkanInduk({ view: adaView(st.view) ? st.view : 'beranda', params: st.params || {} });
      if (r.dialihkan) { try { history.replaceState({ view: r.view, params: r.params }, '', UKP.href(r.view, r.params)); } catch (err) {} }
      render(r.view, r.params, { gulirKe: !r.dialihkan && typeof st.gulir === 'number' ? st.gulir : null }); return;
    }
    // tanpa state: hash diubah manual, tautan jangkar/tab baru (#topik/A2.8), atau skip link sebelum JS siap
    const tok = (location.hash || '').slice(1);
    const rute = ruteDariHash(tok);
    if (rute && rute.view !== 'mulai' && !UKP.VIEW_TAMU[rute.view] && adaView('mulai') && !load().profil.onboardingSelesai) { UKP.go('mulai', paramsMulai(rute.view), { replace: true }); return; }
    if (rute) { const r = arahkanInduk(rute); try { history.replaceState({ view: r.view, params: r.params }, '', UKP.href(r.view, r.params)); } catch (err) {} render(r.view, r.params, {}); return; }
    // bukan rute (#main, kosong, jangkar): tetap di halaman ini, pulihkan URL rute, pindahkan fokus
    if (current.view) { try { history.replaceState({ view: current.view, params: current.params || {} }, '', UKP.href(current.view, current.params)); } catch (err) {} }
    let target = null;
    if (tok && tok !== 'main') { try { target = document.getElementById(decodeURIComponent(tok)); } catch (err) {} }
    UKP.fokus(target || document.getElementById('main'));
  });
  let unmount = null; let masukTimer = null, masukRaf = 0, masukAkhir = null;
  // konteks Tutor dari view yang sedang tampil (view memanggil UKP.setKonteksTutor; dikosongkan saat pindah rute)
  let konteksTutor = null;
  UKP.setKonteksTutor = k => { konteksTutor = k && typeof k === 'object' ? k : null; };
  UKP.konteksTutorSaatIni = function () {
    if (konteksTutor) return Object.assign({}, konteksTutor);
    const p = current.params || {}; const K = UKP.konten;
    try {
      if (current.view === 'topik' && p.id && K && K.topik(p.id)) return { topik: K.topik(p.id) };
      if (current.view === 'kasus' && p.id && K && typeof K.kasus === 'function' && K.kasus(p.id)) return { kasus: K.kasus(p.id) };
      if (current.view === 'kalkulator' && p.jenis) { const kal = (UKP.kalkulator || []).find(k => k.jenis === p.jenis); if (kal) return { kalkulator: kal }; }
    } catch (e) {}
    return {};
  };
  // pemulihan fokus saat render ulang di tempat (UKP.render): cari elemen setara di DOM baru
  function jejakFokus(main) {
    const a = document.activeElement;
    if (!a || a === document.body || !main.contains(a)) return null;
    if (a === main) return { main: true };
    return { id: a.id || null, tag: a.tagName, teks: (a.textContent || '').trim(), label: a.getAttribute('aria-label'), idx: Array.from(main.querySelectorAll(a.tagName)).indexOf(a) };
  }
  function pulihkanFokus(main, j) {
    if (j.main) return UKP.fokus(main);
    let el = j.id ? document.getElementById(j.id) : null;
    if (el && !main.contains(el)) el = null;
    if (!el) {
      const semua = Array.from(main.querySelectorAll(j.tag)); let jarak = Infinity;
      semua.forEach((x, i) => { if ((x.textContent || '').trim() === j.teks && x.getAttribute('aria-label') === j.label && Math.abs(i - j.idx) < jarak) { jarak = Math.abs(i - j.idx); el = x; } });
    }
    if (!el || el.disabled) return false;
    try { el.focus({ preventScroll: true }); } catch (e) { return false; }
    return document.activeElement === el;
  }
  function render(view, params, opsi) {
    opsi = opsi || {};
    const main = document.getElementById('main'); if (!main) return;
    if (!adaView(view)) view = 'beranda';
    const fokusLama = opsi.renderUlang ? jejakFokus(main) : null;
    if (!opsi.renderUlang) {
      // pindah rute: tutup dialog yang masih terbuka (Cari, Tutor, Kirim), hentikan suara, sembunyikan toast/tooltip lama
      document.querySelectorAll('dialog[open]').forEach(d => { try { d.close('navigasi'); } catch (e) { d.remove(); } });
      try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
      try { UKP.toast.pindahRute(); } catch (e) {}
      konteksTutor = null;
    }
    try { if (UKP.tip) UKP.tip.sembunyi(); } catch (e) {}
    if (typeof unmount === 'function') { try { unmount(); } catch (e) {} unmount = null; }
    tundaRender = false; if (!opsi.renderUlang) { clearTimeout(renderSinkronTimer); renderSinkronTimer = null; }
    current = { view, params };
    document.body.dataset.view = view;
    main.textContent = '';
    let out;
    try { out = UKP.views[view](params); } catch (e) { console.error(e); out = h('div', { class: 'page' }, h('h1', null, 'Terjadi kesalahan'), h('p', { class: 'muted' }, 'Halaman ini gagal dimuat: ' + e.message), h('button', { class: 'btn', onclick: () => UKP.go('beranda') }, 'Ke Beranda')); }
    if (out && out.node) { unmount = out.unmount; out = out.node; }
    if (out) main.appendChild(out);
    // transisi antar-rute: pudar 120 ms pada main > .page (CSS main[data-masuk]); tidak untuk render ulang di tempat.
    // Penanda dipasang di requestAnimationFrame (sebelum cat pertama halaman baru) alih-alih memaksa tata letak
    // sinkron lewat main.offsetWidth; .page selalu elemen baru sehingga animasinya tetap berputar dari awal.
    delete main.dataset.masuk; clearTimeout(masukTimer);
    if (masukRaf) { cancelAnimationFrame(masukRaf); masukRaf = 0; }
    if (masukAkhir) { main.removeEventListener('animationend', masukAkhir); masukAkhir = null; }
    if (!opsi.renderUlang && UKP.gerakBoleh()) {
      const halaman = main.firstElementChild;
      masukRaf = requestAnimationFrame(() => {
        masukRaf = 0; if (!halaman || halaman.parentElement !== main) return;
        const lepas = () => { clearTimeout(masukTimer); delete main.dataset.masuk; if (masukAkhir) { main.removeEventListener('animationend', masukAkhir); masukAkhir = null; } };
        masukAkhir = e => { if (e.target.parentElement === main) lepas(); };
        main.addEventListener('animationend', masukAkhir);
        main.dataset.masuk = '';
        masukTimer = setTimeout(lepas, 400); // cadangan bila CSS animasi belum ada
      });
    }
    // sakelar V6: checkbox di dalam .switch diberi role="switch" (dibacakan aktif/nonaktif)
    main.querySelectorAll('.switch input[type="checkbox"]:not([role])').forEach(i => i.setAttribute('role', 'switch'));
    if (UKP.perbaruiNav) UKP.perbaruiNav(view);
    if (!opsi.tetapGulir) { try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); } }
    if (typeof opsi.gulirKe === 'number' && opsi.gulirKe > 0) { const y = opsi.gulirKe; requestAnimationFrame(() => { try { window.scrollTo({ top: y, behavior: 'instant' }); } catch (e) { window.scrollTo(0, y); } }); }
    try { UKP.pasangHitung(main); } catch (e) {}
    const h1 = main.querySelector('h1');
    if (h1 && !h1.hasAttribute('tabindex')) h1.setAttribute('tabindex', '-1');
    if (opsi.renderUlang) { if (fokusLama && !pulihkanFokus(main, fokusLama)) UKP.fokus(h1 || main); }
    else if (!opsi.tanpaFokus) UKP.fokus(h1 || main);
    if (h1) { const jt = (h1.textContent || 'MABAR UKP').trim(); document.title = /MABAR UKP/.test(jt) ? jt : jt + ' · MABAR UKP'; }
    const live = document.getElementById('live'); if (live && h1 && !opsi.renderUlang) live.textContent = h1.textContent;
    document.dispatchEvent(new CustomEvent('ukp:render', { detail: current }));
  }
  UKP.render = () => render(current.view || 'beranda', current.params || {}, { tanpaFokus: true, tetapGulir: true, renderUlang: true });
  // muat pertama: history.state (muat ulang) lebih dulu, lalu hash berparams (tab baru/tautan dibagikan, mis. #topik/A2.8);
  // view yang butuh params tetapi tanpa params diarahkan ke induknya (Belajar), bukan "tidak ditemukan"
  UKP.mulaiDariHash = function () {
    const rute = ruteDariHash(location.hash);
    const st = history.state;
    if (st && st.view && adaView(st.view)) {
      const r = arahkanInduk({ view: st.view, params: st.params || {} });
      if (r.dialihkan) { UKP.go(r.view, r.params, { replace: true }); return; }
      render(r.view, r.params, {}); return;
    }
    const s = load();
    // tautan tim (ikut ujian tim lewat kode, lembar jawab) boleh dibuka pengunjung baru tanpa onboarding (UKP.VIEW_TAMU)
    if (!s.profil.onboardingSelesai && !(rute && UKP.VIEW_TAMU[rute.view])) { UKP.go('mulai', rute && rute.view === 'mulai' ? rute.params : paramsMulai(rute && rute.view), { replace: true }); return; }
    const r = arahkanInduk(rute || { view: 'beranda', params: {} });
    UKP.go(r.view, r.params, { replace: true });
  };
  // tautan internal: <a data-go="view" data-params='{"kode":"A2"}'>; klik dengan pengubah dibiarkan ke peramban
  document.addEventListener('click', e => {
    if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target && e.target.closest ? e.target.closest('[data-go]') : null; if (!a) return;
    e.preventDefault();
    let p = {}; try { p = a.dataset.params ? JSON.parse(a.dataset.params) : {}; } catch (err) {}
    UKP.go(a.dataset.go, p);
  });
  UKP.link = (teks, view, params, cls) => h('a', { href: UKP.href(view, params), 'data-go': view, 'data-params': params ? JSON.stringify(params) : null, class: cls || null }, teks);
  // tautan yang menulis href tanpa params (href="#topik" + data-params) dilengkapi saat ditekan atau difokus,
  // sehingga klik tengah, Ctrl/⌘+klik, "buka di tab baru", dan "salin tautan" membawa params kuncinya
  function lengkapiHref(e) {
    const a = e.target && e.target.closest ? e.target.closest('a[data-go][data-params]') : null; if (!a) return;
    const lama = a.getAttribute('href') || ''; if (lama && lama.charAt(0) !== '#') return;
    let p = null; try { p = JSON.parse(a.dataset.params); } catch (err) { return; }
    const baru = UKP.href(a.dataset.go, p); if (baru !== lama) a.setAttribute('href', baru);
  }
  document.addEventListener('pointerdown', lengkapiHref, true);
  document.addEventListener('focusin', lengkapiHref, true);

  // ---------- komponen umum ----------
  UKP.c = UKP.c || {};
  // cincin penguasaan; opsi.kosong → "–" tanpa angka palsu (data-kosong, dibaca "belum cukup data")
  // V6: isian membawa --p (CSS menganimasikan stroke-dashoffset); opsi.animasi = isi dari 0 lewat JS (cadangan tanpa @starting-style)
  // opsi.ukuran: 'sm' | 'lg' | 'xl' (kelas tambahan), opsi.hitung: angka tengah menghitung naik
  UKP.c.ring = (persen, opsi) => {
    opsi = opsi || {}; const kosong = !!opsi.kosong;
    const p = kosong ? 0 : UKP.util.clamp(Math.round(Number(persen) || 0), 0, 100);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', '0 0 36 36'); svg.setAttribute('aria-hidden', 'true');
    const c1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c1.setAttribute('class', 'track'); c1.setAttribute('cx', 18); c1.setAttribute('cy', 18); c1.setAttribute('r', 15.9155);
    const c2 = c1.cloneNode(); c2.setAttribute('class', 'fill');
    const animasi = !!opsi.animasi && !kosong && p > 0 && UKP.gerakBoleh();
    c2.setAttribute('stroke-dasharray', (animasi ? 0 : p) + ' 100');
    if (!kosong) c2.setAttribute('style', '--p:' + p);
    if (animasi) requestAnimationFrame(() => requestAnimationFrame(() => c2.setAttribute('stroke-dasharray', p + ' 100')));
    svg.append(c1, c2);
    const teks = opsi.teks != null ? opsi.teks : kosong ? '–' : opsi.besar ? p + '%' : p;
    const a = { class: 'ring' + (opsi.besar ? ' besar' : '') + (opsi.ukuran ? ' ' + opsi.ukuran : ''), 'data-kosong': kosong ? '' : null };
    if (kosong) Object.assign(a, { role: 'img', 'aria-label': opsi.label ? (/data/i.test(opsi.label) ? opsi.label : opsi.label + ': belum cukup data') : 'Belum cukup data' });
    else Object.assign(a, { role: 'progressbar', 'aria-valuenow': p, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': opsi.label || 'Penguasaan', 'aria-valuetext': opsi.valuetext || null });
    const label = h('span', { class: 'label', 'aria-hidden': 'true' }, teks);
    if (opsi.hitung != null && !kosong && Number.isFinite(Number(opsi.hitung))) { label.dataset.hitung = String(opsi.hitung); if (opsi.akhiran) label.dataset.akhiran = opsi.akhiran; if (opsi.desimal) label.dataset.desimal = String(opsi.desimal); }
    return h('div', a, svg, label);
  };
  UKP.c.stempel = (teks, tone, opsi) => h('span', { class: 'stempel' + (opsi && opsi.besar ? ' besar' : '') + (opsi && opsi.diraih ? ' diraih' : ''), 'data-tone': tone || 'muted' }, teks);
  // merek MABAR UKP (v8.3): simbol persen (kotak, dua titik, satu garis; viewBox 96) + "MABAR" + lencana "UKP".
  // Warna simbol diatur CSS lewat kelas (.merek-kotak, .merek-titik, .merek-garis) sehingga ikut tema: terang kotak tinta + titik kuning,
  // gelap kotak kuning + titik tinta, garis selalu putih. Ukuran teks mengikuti --merek-u (= ukuran simbol dalam px).
  // opsi.ukuran: px simbol (bawaan 32) · opsi.tanpaTeks: hanya simbol (role="img", aria-label "Logo MABAR UKP") · opsi.kelas: kelas tambahan.
  // Struktur: span.merek > span.mark > svg.merek-simbol, lalu span.brand-teks > span.merek-nama + span.merek-lencana
  // (.mark dan .brand-teks dipertahankan agar aturan tata letak lama, mis. menyembunyikan label di topbar sempit, tetap berlaku).
  UKP.c.merek = opsi => {
    opsi = opsi || {};
    const u = Math.max(12, Math.round(Number(opsi.ukuran) || 32)), NS = 'http://www.w3.org/2000/svg';
    const el = (tag, at) => { const n = document.createElementNS(NS, tag); for (const k in at) n.setAttribute(k, at[k]); return n; };
    const svg = el('svg', { viewBox: '0 0 96 96', width: u, height: u, class: 'merek-simbol', focusable: 'false' });
    if (opsi.tanpaTeks) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Logo MABAR UKP'); } else svg.setAttribute('aria-hidden', 'true');
    svg.append(el('rect', { class: 'merek-kotak', width: 96, height: 96, rx: 20 }), el('circle', { class: 'merek-titik', cx: 30, cy: 30, r: 12 }), el('circle', { class: 'merek-titik', cx: 66, cy: 66, r: 12 }),
      el('line', { class: 'merek-garis', x1: 68, y1: 22, x2: 28, y2: 74, 'stroke-width': 9, 'stroke-linecap': 'round' }));
    const akar = h('span', { class: 'merek' + (opsi.tanpaTeks ? ' merek-simbol-saja' : '') + (opsi.kelas ? ' ' + opsi.kelas : ''), style: '--merek-u:' + u + 'px' }, h('span', { class: 'mark' }, svg));
    if (!opsi.tanpaTeks) akar.appendChild(h('span', { class: 'brand-teks' }, h('span', { class: 'merek-nama' }, 'MABAR'), h('span', { class: 'merek-lencana' }, 'UKP')));
    return akar;
  };
  UKP.c.cite = (d, opsi) => {
    const statusPer = (UKP.ref && UKP.ref.statusPer) || '2026-10-25';
    const items = (Array.isArray(d) ? d : [d]).filter(x => x && (typeof x === 'string' || x.pasal || x.dasar));
    const sep = () => h('span', { class: 'faint', 'aria-hidden': 'true' }, '·');
    return h('div', { class: 'cite' },
      items.map((x, i) => frag(i ? sep() : null, h('span', { class: 'pasal' }, typeof x === 'string' ? x : x.pasal || x.dasar), x.berlakuSejak ? h('span', null, 'berlaku ' + UKP.fmt.tanggal(x.berlakuSejak)) : null)),
      opsi && opsi.status === false ? null : frag(items.length ? sep() : null, h('span', null, 'status per ' + UKP.fmt.tanggal(statusPer))));
  };
  // ikon garis untuk jenis soal (cadangan; js/soal.js boleh menimpanya dengan versinya sendiri)
  const IKON_JENIS = { konsep: ['book', 'konsep'], klasifikasi: ['flag', 'klasifikasi'], hitung: ['calc', 'hitung'], prosedur: ['plan', 'prosedur'], kasus: ['kasus', 'kasus'], 'baris-spt': ['formulir', 'baris SPT'], etika: ['etika', 'etika'] };
  if (!UKP.c.ikonJenis) UKP.c.ikonJenis = jenis => { if (!jenis) return null; const j = IKON_JENIS[jenis] || ['info', String(jenis)]; return h('span', { class: 'ikon-jenis', 'data-jenis': jenis, title: 'Jenis soal: ' + j[1] }, UKP.icon(j[0]), h('span', { class: 'visually-hidden' }, 'Jenis soal ' + j[1] + '. ')); };
  // penanda "perlu verifikasi" (T23): pill warn dengan ikon setengah (bukan glyph ◐ yang terpotong); keterangan lengkap di tooltip + teks tersembunyi
  UKP.c.verif = (v, peringatan) => v === '◐' ? h('span', { class: 'pill', 'data-tone': 'warn', 'data-tip': peringatan || 'Perlu verifikasi ke teks resmi' }, UKP.icon('setengah', null, true), 'perlu cek', h('span', { class: 'visually-hidden' }, ': ' + (peringatan || 'perlu verifikasi ke teks resmi'))) : null;
  // tabel lebar dalam wilayah gulir yang bisa difokus papan ketik
  UKP.c.tabelWrap = (label, tabel) => h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': label || 'Tabel' }, tabel);
  // keadaan kosong (DESAIN-V6 C.14); opsi.ringkas: satu baris tanpa bingkai, opsi.ikon: nama ikon (data-ikon untuk mask CSS)
  UKP.c.kosong = (judul, teks, aksi, opsi) => { opsi = opsi || {}; return h('div', { class: 'kosong' + (opsi.ringkas ? ' ringkas' : ''), 'data-ikon': opsi.ikon || null }, h('strong', null, judul), teks ? h('p', { class: 'small' }, teks) : null, aksi || null); };
  // jejak hitung: tabel tata letak tetap (kolom label 58%); di wadah sempit (< 360 px) baris dialirkan seperti buku besar (css).
  // Nilai teks panjang (> 60 karakter, atau bukan angka dan > 24 karakter) dirender sebagai baris penuh: label tebal di atas,
  // nilai di bawah. Angka pendek (≤ 17 karakter) tidak pernah dipecah (td.angka).
  const teksJejak = v => v == null ? '' : typeof v === 'object' ? String(v.textContent || '') : String(v);
  const nilaiNumerik = t => /\d/.test(t) && t.split(/\s+/).every(w => /\d/.test(w) || w.length <= 4);
  const ANGKA_PENDEK = /^[−–+-]?\s?(?:Rp|€|\$|USD|EUR)?\s?[−–-]?\d[\d.,]*\s?%?$/;
  UKP.c.jejak = (rows, label) => {
    const baris = (rows || []).map(r => {
      const a = Array.isArray(r) ? r : [r, null]; const t = teksJejak(a[1]).trim();
      if (t.length > 60 || (t.length > 24 && !nilaiNumerik(t))) return h('tr', { class: 'penuh' }, h('td', { colspan: '2' }, h('span', { class: 'jejak-label' }, a[0]), h('span', { class: 'jejak-nilai' }, a[1])));
      return h('tr', null, h('td', null, a[0]), h('td', { class: t.length <= 17 && ANGKA_PENDEK.test(t) ? 'angka' : null }, a[1]));
    });
    const wrap = UKP.c.tabelWrap(label || 'Jejak hitung', h('table', { class: 'jejak' }, h('colgroup', null, h('col', { class: 'k-label' }), h('col', { class: 'k-nilai' })), h('tbody', null, baris)));
    wrap.classList.add('jejak-wrap');
    return wrap;
  };
  // butir laporan peserta: kode berhuruf X ("C-2026-10" atau "C") hanya sah untuk soal kelompok UKP.tingkatKelompok[X]
  // yang tingkat-nya memuat X. Opsi vignette: seluruh grup kasusId ikut bila salah satu anggotanya bertanda (anggota tetap disaring).
  const kodeKelompokSoal = s => s.kode || String(s.id || '').split('-')[0];
  UKP.laporanSah = (soal, kode) => { const X = String(kode || '').charAt(0); const kel = UKP.tingkatKelompok[X]; return !!soal && !!kel && kel.includes(kodeKelompokSoal(soal)) && (soal.tingkat || []).includes(X); };
  UKP.soalLaporanSah = (kode, opsi) => {
    const K = UKP.konten; if (!kode || !K || typeof K.soalLaporan !== 'function') return [];
    const tanda = K.soalLaporan(kode).filter(s => UKP.laporanSah(s, kode));
    if (!opsi || !opsi.vignette) return tanda;
    const grup = new Set(tanda.filter(s => s.kasusId).map(s => kodeKelompokSoal(s) + '|' + s.kasusId));
    if (!grup.size) return tanda;
    const ids = new Set(tanda.map(s => s.id));
    return K.semuaKelompok().flatMap(k => ((UKP.modul[k] || {}).soal || []).filter(s => ids.has(s.id) || (!!s.kasusId && grup.has(kodeKelompokSoal(s) + '|' + s.kasusId) && UKP.laporanSah(s, kode))));
  };
  // kop halaman (DESAIN-V6 C.2). Dua bentuk pemanggilan:
  //   UKP.c.kop(crumbs, judul, lead)                                        — bentuk lama (tetap didukung)
  //   UKP.c.kop({ crumbs, eyebrow, judul, lead, meta, aksi, ringkas })       — meta/aksi: node, teks, atau array
  // crumbs: [{ teks, view?, params? }]; aksi maks 1 primer + 1 sekunder + 1 hantu; ringkas: lead 3 baris + "Selengkapnya"
  UKP.c.kop = function (a, judul, lead) {
    const o = a && typeof a === 'object' && !Array.isArray(a) && !a.nodeType && Object.prototype.hasOwnProperty.call(a, 'judul') ? a : { crumbs: a, judul, lead };
    // V7 K-13: butir { teks, pendek?, view?, params? }. Butir tengah memakai `pendek` (teks penuh di title); butir terakhir tanpa view
    // (halaman sekarang) tidak dirender karena h1 sudah menyebutnya; leluhur terdekat = .crumb-induk (< 600 satu-satunya yang tampil, "‹ A1")
    const crAsli = Array.isArray(o.crumbs) ? o.crumbs.filter(c => c && (c.teks != null || c.pendek != null)) : [];
    const nAsli = crAsli.length;
    const crTampil = nAsli && !crAsli[nAsli - 1].view ? crAsli.slice(0, -1) : crAsli;
    let iInduk = -1; crTampil.forEach((c, i) => { if (c.view) iInduk = i; });
    const cr = crTampil.length ? crTampil : null;
    const crumbs = cr ? h('nav', { class: 'crumb', 'aria-label': 'Remah roti' }, cr.map((c, i) => {
      const tengah = i > 0 && i < nAsli - 1 && c.pendek != null && c.pendek !== '';
      const teks = tengah ? c.pendek : (c.teks != null ? c.teks : c.pendek);
      const isi = c.view ? UKP.link([UKP.icon('chevron-kiri', null, true), h('span', { class: 'crumb-teks' }, teks)], c.view, c.params, i === iInduk ? 'crumb-induk' : null) : h('span', { class: 'crumb-teks' }, teks);
      if (tengah && c.teks) isi.setAttribute('title', c.teks);
      return frag(i ? h('span', { class: 'crumb-sep', 'aria-hidden': 'true' }, '›') : null, isi);
    })) : null;
    const lid = o.ringkas && o.lead ? UKP.util.id('lead') : null;
    const leadEl = o.lead ? h('p', { class: 'lead' + (o.ringkas ? ' ringkas' : ''), id: lid }, o.lead) : null;
    let toggle = null;
    if (leadEl && o.ringkas) {
      toggle = h('button', { type: 'button', class: 'btn btn-ghost btn-text btn-sm lead-toggle', 'aria-expanded': 'false', 'aria-controls': lid, hidden: true, onclick: () => {
        const buka = !leadEl.hasAttribute('data-terbuka'); if (buka) leadEl.setAttribute('data-terbuka', ''); else leadEl.removeAttribute('data-terbuka');
        toggle.setAttribute('aria-expanded', String(buka)); toggle.textContent = buka ? 'Ringkas' : 'Selengkapnya';
      } }, 'Selengkapnya');
      // tombol hanya tampil bila teks memang terpotong (CSS memotong 3 baris)
      requestAnimationFrame(() => { if (leadEl.isConnected && leadEl.scrollHeight > leadEl.clientHeight + 2) toggle.hidden = false; });
    }
    const meta = o.meta ? h('div', { class: 'page-meta' }, o.meta) : null;
    const aksi = o.aksi ? h('div', { class: 'page-actions' }, o.aksi) : null;
    const teks = [crumbs, o.eyebrow ? h('p', { class: 'eyebrow' }, o.eyebrow) : null, h('h1', { tabindex: '-1' }, o.judul), leadEl, toggle, meta];
    return aksi || meta || o.eyebrow ? h('header', { class: 'page-head' }, h('div', { class: 'page-head-teks' }, teks), aksi) : h('header', { class: 'page-head' }, teks);
  };
  const IKON_BANNER = { info: 'info', ok: 'cek-lingkar', warn: 'peringatan', attn: 'peringatan' };
  // banner (DESAIN-V6 C.18): ikon bernada · isi (judul opsional + kalimat + aksi) · tutup. id → penutupan diingat
  UKP.c.banner = (teks, tone, id, aksi, opsi) => {
    const s = load(); if (id && s.bannerTutup[id]) return null; opsi = opsi || {};
    const nada = tone || 'info';
    const b = h('div', { class: 'banner', 'data-tone': nada, role: 'note' }, UKP.icon(IKON_BANNER[nada] || 'info'),
      h('div', { class: 'stack-sm' }, opsi.judul ? h('strong', { class: 'judul' }, opsi.judul) : null, h('span', null, teks), aksi || null),
      id || opsi.bisaTutup ? h('button', { type: 'button', class: 'close icon-btn sm', 'aria-label': 'Tutup pemberitahuan', onclick: () => { b.remove(); if (id) { s.bannerTutup[id] = true; save(); } } }, UKP.icon('x')) : null);
    return b;
  };
  UKP.c.sorot = (teks, kata) => {
    const s = load().pengaturan; if (!s.sorotKualifikasi || !kata || !kata.length) return teks;
    const esc = UKP.util.esc(teks);
    const re = new RegExp('\\b(' + kata.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'gi');
    return h('span', { html: esc.replace(re, '<mark>$1</mark>') });
  };
  // ---------- sinonim pencarian ----------
  // Dipakai Cari global (UKP.cari) dan saringan lokal (Referensi, Peta formulir): singkatan ↔ bentuk panjang.
  // Kunci dan nilai huruf kecil; boleh ditambah modul lain (UKP.sinonim.xyz = '...').
  UKP.sinonim = Object.assign({ bupot: 'bukti potong', ter: 'tarif efektif', pm: 'pajak masukan', pk: 'pajak keluaran', skp: 'surat ketetapan pajak', spt: 'surat pemberitahuan', gmt: 'pajak minimum global', qdmtt: 'dmtt', 'top-up': 'pajak minimum global' }, UKP.sinonim || {});
  const normKueri = q => String(q == null ? '' : q).trim().toLowerCase().replace(/\s+/g, ' ');
  // frasa setara untuk kueri (huruf kecil, tanpa duplikat; kueri sendiri lebih dulu):
  // "bupot" → ["bupot", "bukti potong"]; "bukti potong" → [..., "bupot"]; "bupot 23" → ["bupot 23", "bukti potong 23"]
  UKP.frasaKueri = function (q) {
    const k = normKueri(q); if (!k) return [];
    const S = UKP.sinonim || {}; const out = [k];
    const tambah = f => { f = normKueri(f); if (f && !out.includes(f)) out.push(f); };
    if (punya(S, k)) tambah(S[k]);
    for (const a in S) if (punya(S, a) && normKueri(S[a]) === k) tambah(a);
    const kata = k.split(' ');
    if (kata.length > 1 && kata.some(w => punya(S, w))) tambah(kata.map(w => punya(S, w) ? S[w] : w).join(' '));
    return out;
  };
  // kueri diperluas menjadi satu deret kata (penilaian per kata di Cari): "bupot" → "bupot bukti potong"
  UKP.perluasKueri = function (q) {
    const kata = [];
    UKP.frasaKueri(q).forEach(f => f.split(' ').forEach(w => { if (w && !kata.includes(w)) kata.push(w); }));
    return kata.join(' ');
  };
  // saringan lokal: teks memuat kueri atau salah satu frasa setaranya (kueri kosong = cocok)
  UKP.cocokKueri = function (teks, q) {
    const f = UKP.frasaKueri(q); if (!f.length) return true;
    const t = String(teks == null ? '' : teks).toLowerCase();
    return f.some(x => t.includes(x));
  };
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // sorot kecocokan kueri saringan/cari dengan <mark> (teks di-escape dulu); kata < 2 huruf diabaikan.
  // Frasa sinonim ("bupot" → "bukti potong") ikut disorot sebagai satu kesatuan, bukan per kata.
  UKP.c.tandaiKueri = (teks, kueri) => {
    const q = normKueri(kueri);
    const kata = q ? q.split(' ').filter(w => w.length >= 2) : [];
    const t = String(teks == null ? '' : teks); if (!kata.length) return t;
    const pola = UKP.frasaKueri(q).slice(1).filter(f => f.length >= 2).concat(kata)
      .filter((x, i, a) => a.indexOf(x) === i).sort((a, b) => b.length - a.length);
    const re = new RegExp('(' + pola.map(k => escRe(UKP.util.esc(k))).join('|') + ')', 'gi');
    return h('span', { html: UKP.util.esc(t).replace(re, '<mark>$1</mark>') });
  };

  // ================= komponen V6 (DESAIN-V6 §C) =================
  // pill status/metadata: nada ok | attn | warn | info | nila | netral; ikon 12 px opsional
  UKP.c.pill = (teks, nada, ikon, attrs) => h('span', Object.assign({ class: 'pill', 'data-tone': nada && nada !== 'netral' ? nada : null }, attrs || {}), ikon ? UKP.icon(ikon, null, true) : null, teks);
  // kbd (rupa tuts)
  UKP.c.kbd = teks => h('kbd', null, teks);
  UKP.mac = (() => { try { return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || ''); } catch (e) { return false; } })();
  // bar progres (C.9): { nilai, maks?, label?, teks? (angka kanan), nada?, ukuran? 'sm'|'lg', valuetext?, acuan? (0–100), kelas? }
  // lebar isian lewat --p (CSS menganimasikannya dari 0); el.atur(nilai, teks?, valuetext?) memperbarui di tempat
  UKP.c.progress = function (o) {
    o = o || {}; const maks = Number(o.maks) > 0 ? Number(o.maks) : 100;
    const isi = h('span'); const lid = o.label ? UKP.util.id('prog') : null;
    const bar = h('div', { class: 'progress-line' + (o.ukuran ? ' ' + o.ukuran : '') + (o.kelas && !o.label ? ' ' + o.kelas : ''), 'data-nada': o.nada || null, role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(maks), 'aria-labelledby': lid, 'aria-label': !lid ? (o.ariaLabel || 'Progres') : null },
      isi, Number.isFinite(Number(o.acuan)) && o.acuan !== null ? h('i', { class: 'progress-acuan', 'aria-hidden': 'true', style: 'left:' + UKP.util.clamp(Number(o.acuan), 0, 100) + '%' }) : null);
    const angka = o.label ? h('span', { class: 'num' }) : null;
    const el = o.label ? h('div', { class: 'progress' + (o.kelas ? ' ' + o.kelas : '') }, h('div', { class: 'progress-kop' }, h('span', { id: lid }, o.label), angka), bar) : bar;
    el.atur = (nilai, teks, valuetext) => {
      const n = UKP.util.clamp(Number(nilai) || 0, 0, maks); const p = Math.round(n / maks * 1000) / 10;
      isi.style.setProperty('--p', String(p)); bar.setAttribute('aria-valuenow', String(Math.round(n * 10) / 10));
      if (valuetext || o.valuetext) bar.setAttribute('aria-valuetext', valuetext || (typeof o.valuetext === 'function' ? o.valuetext(n, p) : o.valuetext));
      if (angka) angka.textContent = teks != null ? teks : (o.teks != null ? (typeof o.teks === 'function' ? o.teks(n, p) : o.teks) : Math.round(p) + '%');
    };
    el.atur(o.nilai, null, null);
    return el;
  };
  // kerangka saat memuat (C.15): statis tanpa denyut; jenis 'kartu' | 'baris' | 'stat'
  UKP.c.kerangka = (jenis, n, label) => {
    jenis = jenis || 'kartu'; const garis = [];
    if (jenis === 'baris') for (let i = 0; i < (n || 5); i++) garis.push(h('i'));
    else if (jenis === 'stat') for (let i = 0; i < (n || 3); i++) garis.push(h('i', { class: 'judul' }));
    else garis.push(h('i', { class: 'judul' }), h('i'), h('i'), h('i'));
    return h('div', { class: 'kerangka ' + jenis, 'aria-busy': 'true' }, garis, h('span', { class: 'visually-hidden', role: 'status' }, label || 'Memuat …'));
  };
  UKP.c.skeleton = UKP.c.kerangka; // alias
  // sakelar (C.6): seluruh baris berlabel dapat diklik; input role="switch"
  UKP.c.sakelar = o => {
    o = o || {}; const id = o.id || UKP.util.id('sw'); const bid = o.bantu ? id + '-bantu' : null;
    return h('label', { class: 'switch' + (o.kelas ? ' ' + o.kelas : ''), for: id },
      h('span', null, h('strong', null, o.judul || ''), o.bantu ? h('span', { class: 'bantu', id: bid }, o.bantu) : null),
      h('input', { type: 'checkbox', role: 'switch', id, 'aria-describedby': bid, checked: o.nilai ? true : null, disabled: o.nonaktif ? true : null, onchange: o.onchange || null }));
  };
  // salin ke papan klip; cadangan: dialog berisi teks terpilih untuk disalin manual. Mengembalikan true bila tersalin otomatis
  UKP.salinTeks = async function (teks, judul) {
    try { if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('tanpa clipboard'); await navigator.clipboard.writeText(teks); return true; }
    catch (e) {
      UKP.dialog({ judul: judul || 'Salin teks', isi: () => { const ta = h('textarea', { class: 'input mono', rows: 10, readonly: true, 'aria-label': judul || 'Teks untuk disalin', style: { fontSize: '13px' } }); ta.value = teks; setTimeout(() => { ta.focus(); ta.select(); }, 30); return h('div', { class: 'stack-sm' }, h('p', { class: 'small muted' }, 'Salin otomatis tidak tersedia di tampilan ini; teks sudah dipilih, salin dengan Ctrl+C (⌘C).'), ta); } });
      return false;
    }
  };
  // tombol Salin (§E): ikon copy → check + "Tersalin" 1,5 dtk, diumumkan sopan. sumber: teks atau fungsi → teks
  // opsi: label ('Salin'), kelas ('btn btn-sm'), ikonSaja (tombol ikon + tooltip), ariaLabel, pesan (pengumuman), judul (dialog cadangan)
  UKP.c.salin = function (sumber, opsi) {
    opsi = opsi || {}; const label = opsi.label || 'Salin';
    const ikon = h('span', { class: 'ikon-wadah', 'aria-hidden': 'true', style: { display: 'inline-grid' } }, UKP.icon('copy', null, !!opsi.ikonSaja));
    const lbl = opsi.ikonSaja ? null : h('span', null, label);
    let t = null;
    const b = h('button', { type: 'button', class: opsi.kelas || (opsi.ikonSaja ? 'icon-btn sm' : 'btn btn-sm'), 'aria-label': opsi.ariaLabel || (opsi.ikonSaja ? label : null), 'data-tip': opsi.ikonSaja ? (opsi.tip || label) : null, onclick: async () => {
      const teks = typeof sumber === 'function' ? sumber() : String(sumber == null ? '' : sumber);
      if (!(await UKP.salinTeks(teks, opsi.judul))) return;
      clearTimeout(t); ikon.replaceChildren(UKP.icon('check', null, !!opsi.ikonSaja)); if (lbl) lbl.textContent = 'Tersalin'; b.dataset.tersalin = '';
      UKP.umumkan(opsi.pesan || 'Disalin ke papan klip.');
      t = setTimeout(() => { ikon.replaceChildren(UKP.icon('copy', null, !!opsi.ikonSaja)); if (lbl) lbl.textContent = label; delete b.dataset.tersalin; }, 1500);
    } }, ikon, lbl);
    return b;
  };
  // tautan kop kartu (C.3): "Kemajuan ›" dengan chevron yang bergeser saat hover
  UKP.c.tautanKop = (teks, view, params, label) => { const a = UKP.link(teks, view, params, 'tautan-kop'); if (label) a.setAttribute('aria-label', label); a.appendChild(UKP.icon('chevron-kanan', null, true)); return a; };
  // kartu interaktif (C.3): seluruh kartu dapat diklik lewat satu .card-link; tombol lain di kartu tetap dapat diklik
  // { judul, view?, params?, onclick?, eyebrow?, meta? (v7 K-02: teks/node → .card-meta), isi?, kaki?, kanan?, kelas?, kode? (tab indeks), tingkat?, label? }
  UKP.c.kartu = function (o) {
    o = o || {};
    const link = o.view ? h('a', { class: 'card-link', href: UKP.href(o.view, o.params), 'data-go': o.view, 'data-params': o.params ? JSON.stringify(o.params) : null, 'aria-label': o.label || null }, o.judul)
      : h('button', { type: 'button', class: 'card-link', onclick: o.onclick || null, 'aria-label': o.label || null, style: { background: 'none', border: '0', padding: '0', font: 'inherit', color: 'inherit', textAlign: 'left', cursor: 'pointer' } }, o.judul);
    return h('div', { class: 'card klik' + (o.kelas ? ' ' + o.kelas : ''), 'data-kode': o.kode || null, 'data-tingkat': o.tingkat || null },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks stack-sm' }, o.eyebrow ? h('span', { class: 'eyebrow' }, o.eyebrow) : null, h('h3', { class: 'card-title' }, link),
        o.meta != null && o.meta !== '' ? h('p', { class: 'card-meta' }, o.meta) : null), o.kanan ? h('div', { class: 'card-head-kanan' }, o.kanan) : null),
      o.isi || null,
      o.kaki ? h('div', { class: 'card-foot' }, o.kaki) : null);
  };
  // tanggal Indonesia untuk teks bantu isian tanggal (T28): "Selasa, 15 Desember 2026 · 47 hari lagi"
  UKP.c.tglBantu = (iso, opsi) => {
    if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return '';
    let t = UKP.util.tglPanjang(iso);
    if (opsi && opsi.hitungMundur) { const d = UKP.util.selisihHari(UKP.util.hariIni(), iso); t += d > 0 ? ' · ' + d + ' hari lagi' : d === 0 ? ' · hari ini' : ' · sudah lewat ' + (-d) + ' hari'; }
    return t;
  };
  // segmen (C.5): pilihan tunggal 2–4 opsi; opsi: [{ nilai, label, sub?, ikon? }]. radio:true → role radiogroup + panah
  // (bawaan aria-pressed, pola lama). Mengembalikan .field (berlabel) atau .seg saja bila tanpa label
  UKP.c.segmen = function (o) {
    o = o || {}; const lid = o.label ? (o.id || UKP.util.id('seg')) + '-lbl' : null; let aktif = o.aktif;
    const tombol = (o.opsi || []).map(x => h('button', { type: 'button', 'data-nilai': String(x.nilai), role: o.radio ? 'radio' : null, 'aria-checked': o.radio ? String(x.nilai === aktif) : null, 'aria-pressed': o.radio ? null : String(x.nilai === aktif), tabindex: o.radio ? (x.nilai === aktif ? '0' : '-1') : null, 'aria-label': x.ariaLabel || null, onclick: () => pilih(x.nilai, true) },
      x.ikon ? UKP.icon(x.ikon, null, true) : null, h('span', null, x.label), x.sub ? h('small', null, x.sub) : null));
    const bersub = (o.opsi || []).some(x => x && x.sub);
    const seg = h('div', { class: 'seg' + (o.penuh ? ' penuh' : '') + (bersub ? ' bersub' : '') + (o.batas ? ' batas' : ''), role: o.radio ? 'radiogroup' : 'group', 'aria-labelledby': lid, 'aria-label': !lid ? (o.ariaLabel || null) : null, id: o.id || null }, tombol);
    function pilih(v, dariPengguna) {
      aktif = v;
      tombol.forEach(b => { const on = b.dataset.nilai === String(v); if (o.radio) { b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; } else b.setAttribute('aria-pressed', String(on)); });
      if (dariPengguna && o.onPilih) o.onPilih(v);
    }
    if (o.radio) seg.addEventListener('keydown', e => {
      const i = tombol.indexOf(document.activeElement); if (i < 0) return; let j = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % tombol.length; else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + tombol.length) % tombol.length; else if (e.key === 'Home') j = 0; else if (e.key === 'End') j = tombol.length - 1;
      if (j == null) return; e.preventDefault(); tombol[j].focus(); tombol[j].click();
    });
    seg.pilih = v => pilih(v, false);
    if (!o.label) return seg;
    const f = h('div', { class: 'field' }, h('span', { class: 'label', id: lid }, o.label), seg); f.pilih = seg.pilih; return f;
  };
  // tab (C.12): UKP.c.tabs({ id?, label, tab: [{ id, label, hitung?, ikon? }], aktif, isi(id, panel) → node?, onGanti(id) })
  //   → { el, panel(), elPanel, pilih(id), aktif() }. Roving tabindex, ← → Home End, aktivasi otomatis;
  //   isi panel diganti tanpa merender ulang halaman; garis aktif bergeser antar-tab (.tabs-garis)
  UKP.c.tabs = function (o) {
    o = o || {}; const id = o.id || UKP.util.id('tab'); const daftar = (o.tab || []).filter(Boolean);
    let aktif = daftar.some(t => t.id === o.aktif) ? o.aktif : (daftar[0] || {}).id;
    const elPanel = h('div', { role: 'tabpanel', id: id + '-panel', tabindex: '0', class: 'tab-panel' });
    const garis = h('span', { class: 'tabs-garis', 'aria-hidden': 'true', 'data-diam': '' });
    const tombol = daftar.map(t => h('button', { type: 'button', role: 'tab', id: id + '-' + String(t.id).replace(/\W/g, '-'), 'data-tab': t.id, 'aria-controls': elPanel.id, 'aria-selected': String(t.id === aktif), tabindex: t.id === aktif ? '0' : '-1', disabled: t.nonaktif ? true : null, onclick: () => pilih(t.id, true) },
      t.ikon ? UKP.icon(t.ikon, null, true) : null, t.labelPendek ? [h('span', { class: 'lbl-panjang' }, t.label), h('span', { class: 'lbl-pendek' }, t.labelPendek)] : h('span', null, t.label),
      t.hitung != null ? h('span', { class: 'pill' }, String(t.hitung)) : null));
    const el = h('div', { class: 'tabs', role: 'tablist', 'aria-label': o.label || null, 'data-geser': '' }, tombol, garis);
    function posisiGaris() {
      const b = tombol.find(x => x.dataset.tab === String(aktif)); if (!b || !b.offsetWidth) return;
      const pad = parseFloat(getComputedStyle(b).paddingLeft) || 12; const x = b.offsetLeft + pad, w = Math.max(8, b.offsetWidth - 2 * pad);
      garis.style.width = w + 'px'; garis.style.transform = 'translateX(' + x + 'px)';
      el.style.setProperty('--tab-x', x + 'px'); el.style.setProperty('--tab-w', w + 'px');
    }
    function pilih(tid, dariPengguna) {
      if (!daftar.some(t => t.id === tid)) return;
      const berubah = tid !== aktif; aktif = tid;
      tombol.forEach(b => { const on = b.dataset.tab === String(tid); b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on) elPanel.setAttribute('aria-labelledby', b.id); });
      if (garis.isConnected && UKP.gerakBoleh()) delete garis.dataset.diam; else garis.dataset.diam = '';
      posisiGaris();
      tengahkan(dariPengguna);
      if (berubah || !dariPengguna) { if (o.isi) { const n = o.isi(tid, elPanel); if (n != null) elPanel.replaceChildren(n); } }
      if (berubah && dariPengguna && o.onGanti) o.onGanti(tid);
    }
    el.addEventListener('keydown', e => {
      const aktifBtn = tombol.filter(b => !b.disabled); const i = aktifBtn.indexOf(document.activeElement); if (i < 0) return;
      const n = aktifBtn.length; let j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % n; else if (e.key === 'ArrowLeft') j = (i - 1 + n) % n; else if (e.key === 'Home') j = 0; else if (e.key === 'End') j = n - 1;
      if (j == null) return; e.preventDefault(); aktifBtn[j].focus(); pilih(aktifBtn[j].dataset.tab, true);
    });
    // V7 K-10: tab aktif digulir ke tengah (saat terpasang dan saat berganti); data-gulir="kiri kanan" menandai sisi yang masih bisa digulir
    // (CSS memudarkan 24 px di sisi itu). Dihitung manual (bukan scrollIntoView) agar halaman tidak ikut bergulir vertikal.
    function perbaruiGulir() {
      const bisa = el.scrollWidth > el.clientWidth + 1;
      const v = bisa ? [el.scrollLeft > 1 ? 'kiri' : null, el.scrollLeft + el.clientWidth < el.scrollWidth - 1 ? 'kanan' : null].filter(Boolean).join(' ') : '';
      if (v) el.dataset.gulir = v; else delete el.dataset.gulir;
    }
    function tengahkan(halus) {
      const b = tombol.find(x => x.dataset.tab === String(aktif));
      if (!b || !el.isConnected || el.scrollWidth <= el.clientWidth + 1) { perbaruiGulir(); return; }
      const kiri = Math.max(0, Math.min(el.scrollWidth - el.clientWidth, b.offsetLeft - (el.clientWidth - b.offsetWidth) / 2));
      try { el.scrollTo({ left: kiri, behavior: halus && UKP.gerakBoleh() ? 'smooth' : 'auto' }); } catch (e) { el.scrollLeft = kiri; }
      perbaruiGulir();
    }
    el.addEventListener('scroll', perbaruiGulir, { passive: true });
    // posisi garis mengikuti ukuran (pertama kali terpasang, ganti lebar layar, teks besar)
    let sudahTerpasang = false;
    if ('ResizeObserver' in root) { const ro = new ResizeObserver(() => { if (!el.isConnected) return; garis.dataset.diam = ''; posisiGaris(); if (!sudahTerpasang && el.clientWidth) { sudahTerpasang = true; tengahkan(false); } else perbaruiGulir(); }); ro.observe(el); }
    else requestAnimationFrame(() => { posisiGaris(); tengahkan(false); });
    pilih(aktif, false);
    return { el, elPanel, panel: () => elPanel, pilih: tid => pilih(tid, true), aktif: () => aktif };
  };

  // ---------- V7: komponen kontrak (docs/DESAIN-V7.md §4, K-01…K-17) ----------
  // Semua fungsi tahan argumen kosong: tanpa argumen menghasilkan elemen kosong yang sah, bukan galat.
  const C7 = UKP.c;
  const U7 = UKP.util;
  const angkaP = p => U7.clamp(Math.round(Number(p) || 0), 0, 100);
  const adaIsi = x => x != null && x !== false && x !== '';
  // tombol/tautan dari deskripsi aksi { teks, view?, params?, onclick?, gaya?, ikon?, label? } (gaya: primer|sekunder|hantu)
  function tombolAksi(a, kelasTambahan) {
    if (!a) return null;
    if (a.nodeType) return a;
    const kls = 'btn' + (a.gaya === 'primer' ? ' btn-primary' : a.gaya === 'hantu' ? ' btn-ghost' : '') + (kelasTambahan ? ' ' + kelasTambahan : '');
    const isi = [a.ikon ? UKP.icon(a.ikon, null, true) : null, a.teks || ''];
    if (a.view && typeof a.onclick !== 'function') { const l = UKP.link(isi, a.view, a.params, kls); if (a.label) l.setAttribute('aria-label', a.label); return l; }
    return h('button', { type: 'button', class: kls, 'aria-label': a.label || null, onclick: typeof a.onclick === 'function' ? a.onclick : null }, isi);
  }

  // K-01 judul bagian: UKP.c.sect({ judul, meta?, aksi?, id?, ganda?, isi }) → section.sect[aria-labelledby]
  C7.sect = function (o) {
    o = o || {};
    const id = o.id || U7.id('sect');
    const aksi = Array.isArray(o.aksi) ? o.aksi : [o.aksi];
    const kop = adaIsi(o.judul) || adaIsi(o.meta) || aksi.some(Boolean)
      ? h('div', { class: 'sect-head' }, h('h2', { id }, o.judul || ''), adaIsi(o.meta) ? h('span', { class: 'meta' }, o.meta) : null, aksi.map(x => x && !x.nodeType && typeof x === 'object' ? tombolAksi(x) : x))
      : null;
    return h('section', { class: 'sect' + (o.ganda ? ' ganda' : ''), 'aria-labelledby': kop ? id : null, id: o.idBagian || null }, kop, o.isi == null ? null : o.isi);
  };

  // K-05 bar mini: UKP.c.barMini(p, { acuan = 60, nada, tahap, label })
  C7.barMini = function (p, o) {
    o = o || {}; const v = angkaP(p);
    const acuan = o.acuan === null || o.acuan === false ? null : U7.clamp(Number(o.acuan == null ? 60 : o.acuan) || 0, 0, 100);
    const label = o.label || (o.tahap === 'awal' ? 'Perkiraan awal ' + v + ' dari 100' : v + ' dari 100') + (acuan != null ? ', batas aman ' + acuan : '');
    return h('span', { class: 'bar-mini', style: '--p:' + v + (acuan != null ? ';--acuan:' + acuan : ''), 'data-acuan': acuan != null ? String(acuan) : null,
      'data-tahap': o.tahap || null, 'data-nada': o.nada || null, role: 'img', 'aria-label': label });
  };
  C7.titikNada = (nada, label) => h('span', { class: 'titik-nada', 'data-nada': nada || null, role: label ? 'img' : null, 'aria-label': label || null, 'aria-hidden': label ? null : 'true' });

  // K-05 baris skor: UKP.c.barisSkor({ kode, judul, nilai, satuan?, nada?, tahap?, meta?, view?, params?, onclick?, label?, acuan? }) → li.baris-skor
  C7.barisSkor = function (o) {
    o = o || {};
    const adaNilai = o.nilai != null && o.nilai !== '' && isFinite(Number(o.nilai));
    const judul = h('span', { class: 'judul', title: typeof o.judul === 'string' ? o.judul : null }, o.judul == null ? '' : o.judul);
    const kolomJudul = adaIsi(o.meta) ? h('span', { class: 'teks' }, judul, h('span', { class: 'meta' }, o.meta)) : judul;
    const nilaiTeks = adaNilai ? String(Math.round(Number(o.nilai))) : null;
    const isi = [
      h('span', { class: 'kode' }, o.kode == null ? '' : o.kode),
      kolomJudul,
      adaNilai ? C7.barMini(o.nilai, { acuan: o.acuan, nada: o.nada, tahap: o.tahap, label: o.labelBar }) : null,
      adaNilai ? h('span', { class: 'nilai', 'data-nada': o.nada || null }, nilaiTeks, o.satuan ? h('span', { class: 'satuan' }, o.satuan) : null)
        : h('span', { class: 'nilai belum meta' }, o.teksKosong || 'belum dinilai'),
      o.view || typeof o.onclick === 'function' ? h('span', { class: 'chev', 'aria-hidden': 'true' }) : null,
    ];
    let wadah;
    if (o.view) wadah = h('a', { href: UKP.href(o.view, o.params), 'data-go': o.view, 'data-params': o.params ? JSON.stringify(o.params) : null, 'aria-label': o.label || null }, isi);
    else if (typeof o.onclick === 'function') wadah = h('button', { type: 'button', 'aria-label': o.label || null, onclick: o.onclick }, isi);
    else wadah = h('div', { class: 'baris-skor-isi' }, isi);
    return h('li', { class: 'baris-skor', 'data-tahap': o.tahap || null }, wadah);
  };
  C7.daftarSkor = (baris, label) => h('ul', { class: 'daftar-skor', 'aria-label': label || null }, (baris || []).filter(Boolean).map(b => b.nodeType ? b : C7.barisSkor(b)));

  // K-06 ringkasan status: UKP.c.ringkasStatus(teks, aksi?) — aksi: node atau { teks, view, params, onclick }
  C7.ringkasStatus = function (teks, aksi) {
    let a = null;
    if (aksi && aksi.nodeType) a = aksi;
    else if (aksi && typeof aksi === 'object' && aksi.teks) a = aksi.view && typeof aksi.onclick !== 'function' ? UKP.link(aksi.teks, aksi.view, aksi.params) : h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: aksi.onclick || null }, aksi.teks);
    return h('div', { class: 'ringkas-status' }, UKP.icon('info'), h('p', { class: 'teks' }, teks == null ? '' : teks), a);
  };
  // K-06 lipatan sisa: n node pertama + details.lipat berisi sisanya; bila sisa ≤ 2, semua ditampilkan tanpa lipatan
  C7.lipatSisa = function (nodes, n, labelFn) {
    const daftar = Array.from(nodes || []).filter(Boolean);
    const batas = Math.max(0, Math.floor(Number(n) || 0));
    const label = typeof labelFn === 'function' ? labelFn : (sisa, total) => 'Lihat semua ' + total;
    if (daftar.length <= batas + 2) return frag(daftar);
    const awal = daftar.slice(0, batas), sisa = daftar.slice(batas);
    const det = h('details', { class: 'lipat lipat-sisa' }, h('summary', null, label(sisa.length, daftar.length)));
    if (sisa[0].tagName === 'LI') {
      // butir daftar tetap di dalam <ul>/<ol> yang sah: <li class="lipat-sisa"><details><ul>…</ul></details></li>
      const ul = h('ul', null, sisa); det.append(ul);
      const li = h('li', { class: 'lipat-sisa' }, det);
      requestAnimationFrame(() => { const induk = li.parentElement; if (induk && /^(UL|OL)$/.test(induk.tagName) && induk.className) ul.className = induk.className; });
      return frag(awal, li);
    }
    det.append(h('div', { class: 'stack-sm' }, sisa));
    return frag(awal, det);
  };

  // K-07 langkah berikutnya: UKP.c.langkahBerikut(item[], { status?, label? }) → ol.langkah-berikut[.ceklis-mulai]
  C7.langkahBerikut = function (item, o) {
    o = o || {}; let adaPrimer = false;
    const daftar = (Array.isArray(item) ? item : []).filter(Boolean);
    return h('ol', { class: 'langkah-berikut' + (o.status ? ' ceklis-mulai' : ''), 'aria-label': o.label || 'Langkah berikutnya' }, daftar.map((x, i) => {
      const a = x.aksi && x.aksi.nodeType ? x.aksi : x.aksi && typeof x.aksi === 'object' ? Object.assign({}, x.aksi) : null;
      if (a && a.gaya === 'primer') {
        if (adaPrimer) { a.gaya = 'sekunder'; try { console.warn('UKP.c.langkahBerikut: lebih dari satu aksi primer; "' + (a.teks || '') + '" diturunkan menjadi sekunder.'); } catch (e) {} }
        adaPrimer = true;
      }
      const status = o.status ? (x.status || null) : null;
      const tombol = a && !a.nodeType && status !== 'nanti' ? tombolAksi(a) : a && a.nodeType ? a : null;
      const nomor = status === 'selesai'
        ? h('span', { class: 'nomor' }, h('span', { class: 'visually-hidden' }, 'Selesai: '))
        : h('span', { class: 'nomor', 'aria-hidden': 'true' }, String(i + 1));
      return h('li', { class: a && a.gaya === 'primer' && status !== 'nanti' ? 'primer' : null, 'data-status': status, 'aria-current': status === 'aktif' ? 'step' : null },
        nomor,
        h('div', { class: 'isi' }, h('span', { class: 'judul' }, x.judul == null ? '' : x.judul), adaIsi(x.meta) ? h('span', { class: 'meta' }, x.meta) : null),
        tombol ? h('div', { class: 'aksi' }, tombol) : null);
    }));
  };

  // K-08 mode fokus: UKP.mode.fokus(on) — body[data-mode="fokus"]; mode ujian dan sesi tidak ditimpa
  UKP.mode = UKP.mode || {};
  UKP.mode.fokus = function (on) {
    const b = document.body; if (!b) return false;
    const kini = b.dataset.mode;
    if (on) { if (!kini || kini === 'fokus') { b.dataset.mode = 'fokus'; return true; } return false; }
    if (kini === 'fokus') delete b.dataset.mode;
    return false;
  };
  UKP.mode.aktif = () => (document.body && document.body.dataset.mode) || null;
  // bar mode fokus: UKP.c.fokusBar({ judul?, p?, onKeluar, label?, labelKeluar?, aksi?, tengah?, menu?, labelMenu? }) → .fokus-bar
  //   el.atur(teks, p, aksiKanan) · v8.2: el.aturTengah(isi) · el.aturMenu(item)
  //   Kepala tunggal v8.2 (gaya referensi "Latihan UKP · Soal 7 dari 10 · 24:30 | 6 orang: … | Menu"):
  //   - tengah: string | simpul | daftar simpul (mis. "6 orang: Nicky, Mita, …"). Dibuat span.fokus-tengah (elipsis, title = teksnya);
  //     bila ada, judul rata kiri. Di layar < 600 px .fokus-tengah disembunyikan (taruh info wajib di judul). null/'' = tanpa tengah.
  //   - menu: [{ teks, ikon?, onclick?, view?, params?, bahaya? }] → tombol "Menu" di paling kanan (details.menu-lebih.fokus-menu,
  //     lewat UKP.c.menuLebih): Esc menutup dan fokus kembali ke tombol; item bahaya: true diberi kelas .bahaya (warna peringatan).
  //     labelMenu mengganti teks tombol (bawaan "Menu"). Tanpa menu (atau daftar kosong) = tanpa tombol, perilaku lama.
  //   Tanpa tengah/menu, susunan anak sama persis dengan v8.1: button.icon-btn + .fokus-judul + .fokus-kanan.
  C7.fokusBar = function (o) {
    o = o || {};
    const judul = h('span', { class: 'fokus-judul', role: 'status' }, o.judul || '');
    const kanan = h('span', { class: 'fokus-kanan' });
    const el = h('div', { class: 'fokus-bar', role: 'region', 'aria-label': o.label || 'Kemajuan latihan' },
      h('button', { type: 'button', class: 'icon-btn', 'aria-label': o.labelKeluar || 'Keluar dari latihan', onclick: typeof o.onKeluar === 'function' ? o.onKeluar : null }, UKP.icon('x')), judul, kanan);
    // teks: string, atau simpul/daftar simpul (v8.0: mis. "Soal 7 dari 10 · " + span[role=timer] + baris peserta)
    el.atur = (teks, p, aksiKanan) => {
      if (teks != null) { if (typeof teks === 'object') judul.replaceChildren(...[].concat(teks).filter(x => x != null).map(x => x.nodeType ? x : document.createTextNode(String(x)))); else judul.textContent = teks; }
      if (p != null) el.style.setProperty('--p', String(angkaP(p)));
      if (aksiKanan !== undefined) kanan.replaceChildren(...[].concat(aksiKanan || []).filter(Boolean).map(x => x.nodeType ? x : tombolAksi(Object.assign({ gaya: 'hantu' }, x), 'btn-sm')));
    };
    let tengah = null, menu = null;
    el.aturTengah = isi => {
      const kosong = isi == null || isi === '' || (Array.isArray(isi) && !isi.filter(x => x != null).length);
      if (kosong) { if (tengah) { tengah.remove(); tengah = null; } el.classList.remove('ada-tengah'); return; }
      if (!tengah) { tengah = h('span', { class: 'fokus-tengah' }); judul.after(tengah); }
      tengah.replaceChildren(...[].concat(isi).filter(x => x != null).map(x => x.nodeType ? x : document.createTextNode(String(x))));
      tengah.title = tengah.textContent.trim();
      el.classList.add('ada-tengah');
    };
    el.aturMenu = item => {
      const daftar = (item || []).filter(Boolean);
      if (menu) { menu.remove(); menu = null; }
      el.classList.toggle('ada-menu', daftar.length > 0);
      if (!daftar.length) return;
      menu = C7.menuLebih({ label: o.labelMenu || 'Menu', teks: o.labelMenu || 'Menu', item: daftar });
      menu.classList.add('fokus-menu');
      el.appendChild(menu);
    };
    el.atur(null, o.p, o.aksi);
    if (o.tengah != null) el.aturTengah(o.tengah);
    if (o.menu) el.aturMenu(o.menu);
    return el;
  };

  // K-12 input tanggal dan jam berformat Indonesia
  const z2 = n => String(n).padStart(2, '0');
  const isoSah = (y, m, d) => {
    y = Number(y); m = Number(m); d = Number(d);
    if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d) || y < 1900 || y > 2199 || m < 1 || m > 12 || d < 1) return null;
    const maks = new Date(Date.UTC(y, m, 0)).getUTCDate();
    return d > maks ? null : y + '-' + z2(m) + '-' + z2(d);
  };
  // "15/12/2026", "15-12-2026", "15.12.2026", "15 12 2026", "15122026", "151226", "15/12/26", ISO "2026-12-15" → "2026-12-15"; selain itu null
  U7.uraiTanggal = function (s) {
    const t = String(s == null ? '' : s).trim(); if (!t) return null;
    let m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(t);
    if (m) return isoSah(m[1], m[2], m[3]);
    let d, b, y;
    m = /^(\d{1,2})\s*[\/\-.\s]\s*(\d{1,2})\s*[\/\-.\s]\s*(\d{2}|\d{4})$/.exec(t);
    if (m) { d = m[1]; b = m[2]; y = m[3]; }
    else if (/^\d{8}$/.test(t)) { d = t.slice(0, 2); b = t.slice(2, 4); y = t.slice(4); }
    else if (/^\d{6}$/.test(t)) { d = t.slice(0, 2); b = t.slice(2, 4); y = t.slice(4); }
    else return null;
    if (String(y).length === 2) y = 2000 + Number(y);
    return isoSah(y, b, d);
  };
  // "1930", "930", "19.30", "19:30", "7" → "HH:MM" 24 jam; selain itu null
  U7.uraiJam = function (s) {
    const t = String(s == null ? '' : s).trim().replace(/\s+/g, ''); if (!t) return null;
    let j, mnt, m;
    if ((m = /^(\d{1,2})[.:,](\d{2})$/.exec(t))) { j = m[1]; mnt = m[2]; }
    else if (/^\d{3,4}$/.test(t)) { j = t.slice(0, t.length - 2); mnt = t.slice(-2); }
    else if (/^\d{1,2}$/.test(t)) { j = t; mnt = '0'; }
    else return null;
    j = Number(j); mnt = Number(mnt);
    if (!Number.isInteger(j) || !Number.isInteger(mnt) || j < 0 || j > 23 || mnt < 0 || mnt > 59) return null;
    return z2(j) + ':' + z2(mnt);
  };
  U7.fmtTanggal = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '')); return m ? m[3] + '/' + m[2] + '/' + m[1] : ''; };
  U7.fmtJam = hm => { const m = /^(\d{1,2}):(\d{2})/.exec(String(hm || '')); return m ? z2(m[1]) + '.' + m[2] : ''; };
  const GALAT_TGL = 'Tanggal tidak dikenali. Tulis hari/bulan/tahun, misalnya 15/12/2026.';
  const GALAT_LEWAT = 'Tanggal sudah lewat. Pilih hari ini atau sesudahnya.';
  // UKP.c.inputTanggal({ id, nilai (ISO), min, max, describedby, label?, onUbah(iso|null), onGalat(pesan|null) }) → div.input-grup.input-tanggal
  //   el.nilai() → ISO|null · el.setNilai(iso) · el.input (input teks). onGalat(null) dipanggil saat galat sebelumnya pulih.
  C7.inputTanggal = function (o) {
    o = o || {};
    const id = o.id || U7.id('tgl');
    const sah = x => (x && /^\d{4}-\d{2}-\d{2}$/.test(x) ? x : null);
    let nilai = sah(o.nilai), galat = false;
    const teks = h('input', { class: 'input', type: 'text', id, inputmode: 'numeric', autocomplete: 'off', spellcheck: 'false', placeholder: 'hh/bb/tttt',
      'aria-describedby': o.describedby || null, 'aria-label': o.label || null, value: nilai ? U7.fmtTanggal(nilai) : '' });
    const asli = h('input', { type: 'date', class: 'visually-hidden', tabindex: '-1', 'aria-hidden': 'true', min: sah(o.min), max: sah(o.max), value: nilai || '' });
    const tombol = h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Buka kalender', onclick: () => {
      try { asli.value = nilai || ''; if (typeof asli.showPicker === 'function') { asli.showPicker(); return; } } catch (e) {}
      try { asli.focus({ preventScroll: true }); asli.click(); } catch (e) {}
    } }, UKP.icon('kalender'));
    const setGalat = pesan => {
      if (pesan) { galat = true; teks.setAttribute('aria-invalid', 'true'); if (typeof o.onGalat === 'function') o.onGalat(pesan); }
      else { teks.removeAttribute('aria-invalid'); if (galat) { galat = false; if (typeof o.onGalat === 'function') o.onGalat(null); } }
    };
    const terima = iso => {
      setGalat(null); teks.value = iso ? U7.fmtTanggal(iso) : ''; asli.value = iso || '';
      const berubah = iso !== nilai; nilai = iso;
      if (berubah && typeof o.onUbah === 'function') o.onUbah(iso);
    };
    function urai() {
      const s = teks.value.trim();
      if (!s) { terima(null); return true; }
      const iso = U7.uraiTanggal(s);
      if (!iso) { setGalat(GALAT_TGL); return false; }
      if (sah(o.min) && iso < o.min) { setGalat(GALAT_LEWAT); return false; }
      if (sah(o.max) && iso > o.max) { setGalat('Tanggal terlalu jauh. Pilih paling lambat ' + U7.fmtTanggal(o.max) + '.'); return false; }
      terima(iso); return true;
    }
    teks.addEventListener('blur', urai);
    teks.addEventListener('keydown', e => { if (e.key === 'Enter' && !urai()) e.preventDefault(); });
    asli.addEventListener('change', () => { const iso = sah(asli.value); if (iso) terima(iso); teks.focus(); });
    const el = h('div', { class: 'input-grup input-tanggal' }, teks, tombol, asli);
    el.nilai = () => nilai;
    el.setNilai = iso => { nilai = sah(iso); galat = false; teks.removeAttribute('aria-invalid'); teks.value = nilai ? U7.fmtTanggal(nilai) : ''; asli.value = nilai || ''; };
    el.urai = urai;
    el.input = teks;
    return el;
  };
  // UKP.c.inputJam({ id, nilai: '19:30', describedby, onUbah('HH:MM'|null), onGalat(pesan|null) }) → input.input.input-jam (tampil "19.30")
  C7.inputJam = function (o) {
    o = o || {};
    let nilai = U7.uraiJam(o.nilai), galat = false;
    const el = h('input', { class: 'input input-jam', type: 'text', id: o.id || null, inputmode: 'numeric', autocomplete: 'off', spellcheck: 'false', placeholder: 'jj.mm',
      'aria-describedby': o.describedby || null, 'aria-label': o.label || null, value: nilai ? U7.fmtJam(nilai) : '' });
    const setGalat = pesan => {
      if (pesan) { galat = true; el.setAttribute('aria-invalid', 'true'); if (typeof o.onGalat === 'function') o.onGalat(pesan); }
      else { el.removeAttribute('aria-invalid'); if (galat) { galat = false; if (typeof o.onGalat === 'function') o.onGalat(null); } }
    };
    function urai() {
      const s = el.value.trim(); const hm = s ? U7.uraiJam(s) : null;
      if (s && !hm) { setGalat('Jam tidak dikenali. Tulis jam.menit 24 jam, misalnya 19.30.'); return false; }
      setGalat(null); el.value = hm ? U7.fmtJam(hm) : '';
      const berubah = hm !== nilai; nilai = hm;
      if (berubah && typeof o.onUbah === 'function') o.onUbah(hm);
      return true;
    }
    el.addEventListener('blur', urai);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' && !urai()) e.preventDefault(); });
    el.nilai = () => nilai;
    el.setNilai = hm => { nilai = U7.uraiJam(hm); galat = false; el.removeAttribute('aria-invalid'); el.value = nilai ? U7.fmtJam(nilai) : ''; };
    el.urai = urai; el.input = el;
    return el;
  };

  // K-15 menu aksi lain: UKP.c.menuLebih({ label, teks?, item: [{ teks, ikon?, onclick?, view?, params?, bahaya? }] }) → details.menu-lebih
  //   v8.2: teks → pemicu bertulisan (summary.btn.btn-sm "Menu" + ikon) alih-alih ikon ⋮; bahaya: true → item berkelas .bahaya
  C7.menuLebih = function (o) {
    o = o || {}; const label = o.label || 'Aksi lain';
    const ringkas = o.teks
      ? h('summary', { class: 'btn btn-sm menu-lebih-teks', 'aria-label': label !== o.teks ? label : null }, UKP.icon('titik-tiga', null, true), h('span', null, o.teks))
      : h('summary', { class: 'icon-btn', 'aria-label': label, title: label }, UKP.icon('titik-tiga'));
    const det = h('details', { class: 'menu-lebih' });
    const tutup = fokusKembali => { if (!det.open) return; det.open = false; if (fokusKembali) UKP.fokus(ringkas); };
    const isi = h('div', { class: 'menu-lebih-isi' }, (o.item || []).filter(Boolean).map(x => {
      const ik = x.ikon ? UKP.icon(x.ikon, null, true) : null;
      if (x.view && typeof x.onclick !== 'function') { const a = UKP.link([ik, x.teks || ''], x.view, x.params, x.bahaya ? 'bahaya' : null); a.addEventListener('click', () => tutup(false)); return a; }
      return h('button', { type: 'button', class: x.bahaya ? 'bahaya' : null, onclick: e => { tutup(true); if (typeof x.onclick === 'function') x.onclick(e); } }, ik, x.teks || '');
    }));
    det.append(ringkas, isi);
    det.addEventListener('keydown', e => { if (e.key === 'Escape' && det.open) { e.preventDefault(); e.stopPropagation(); tutup(true); } });
    const luar = e => { if (det.open && !det.contains(e.target)) tutup(false); };
    det.addEventListener('toggle', () => {
      if (det.open) { document.addEventListener('pointerdown', luar, true); const p = isi.querySelector('button, a'); if (p) requestAnimationFrame(() => UKP.fokus(p)); }
      else document.removeEventListener('pointerdown', luar, true);
    });
    det.addEventListener('focusout', e => { if (det.open && e.relatedTarget && !det.contains(e.relatedTarget)) tutup(false); });
    return det;
  };

  // ---------- tooltip (DESAIN-V6 C.16) ----------
  // Satu elemen bersama .tip[role=tooltip]#tip; pemicu [data-tip] di luar grafik (.viz punya sorotan sendiri).
  // Muncul 400 ms setelah hover atau langsung saat fokus papan ketik; hilang 150 ms setelah pointer keluar dari pemicu
  // dan tooltip, saat blur, saat menggulir, atau Esc (WCAG 1.4.13). Pointer kasar tanpa tooltip (label tetap lewat aria-label).
  UKP.tip = (function () {
    let el = null, pemicu = null, tTampil = null, tSembunyi = null, siap = false;
    const kasar = () => { try { return root.matchMedia('(hover: none)').matches; } catch (e) { return false; } };
    function elTip() {
      if (el && el.isConnected) return el;
      el = h('div', { class: 'tip', role: 'tooltip', id: 'tip', hidden: true });
      el.addEventListener('mouseenter', () => clearTimeout(tSembunyi)); el.addEventListener('mouseleave', jadwalSembunyi);
      document.body.appendChild(el); return el;
    }
    const cari = t => { const p = t && t.closest ? t.closest('[data-tip]') : null; return p && !p.closest('.viz, figure, .tip') ? p : null; };
    function lepas() { if (!pemicu) return; const sisa = (pemicu.getAttribute('aria-describedby') || '').split(/\s+/).filter(x => x && x !== 'tip'); if (sisa.length) pemicu.setAttribute('aria-describedby', sisa.join(' ')); else pemicu.removeAttribute('aria-describedby'); pemicu = null; }
    function tampil(p) {
      clearTimeout(tTampil); clearTimeout(tSembunyi);
      const teks = p.getAttribute('data-tip'); if (!teks || !p.isConnected) return;
      if (pemicu && pemicu !== p) lepas();
      const t = elTip(); pemicu = p; t.textContent = teks; t.hidden = false; t.removeAttribute('data-sisi');
      const ada = (p.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean); if (!ada.includes('tip') && (p.getAttribute('aria-label') || '').trim() !== teks.trim()) p.setAttribute('aria-describedby', ada.concat('tip').join(' '));
      const r = p.getBoundingClientRect(); const tw = t.offsetWidth, th = t.offsetHeight; const W = root.innerWidth || document.documentElement.clientWidth;
      let top = r.top - th - 8; if (top < 4) { top = r.bottom + 8; t.setAttribute('data-sisi', 'bawah'); }
      const tengah = r.left + r.width / 2; const left = UKP.util.clamp(tengah - tw / 2, 8, Math.max(8, W - tw - 8));
      t.style.left = Math.round(left) + 'px'; t.style.top = Math.round(top) + 'px'; t.style.setProperty('--tip-x', Math.round(tengah - left) + 'px');
    }
    function sembunyi() { clearTimeout(tTampil); clearTimeout(tSembunyi); if (el) el.hidden = true; lepas(); }
    function jadwalSembunyi() { clearTimeout(tSembunyi); tSembunyi = setTimeout(sembunyi, 150); }
    function pasang() {
      if (siap || !document.body) return; siap = true;
      document.addEventListener('pointerover', e => { if (e.pointerType === 'touch' || kasar()) return; const p = cari(e.target); if (!p) return; if (p === pemicu) { clearTimeout(tSembunyi); return; } clearTimeout(tTampil); tTampil = setTimeout(() => tampil(p), 400); });
      document.addEventListener('pointerout', e => { const p = cari(e.target); if (!p) return; const ke = e.relatedTarget; if (ke && (p.contains(ke) || (el && el.contains(ke)))) return; clearTimeout(tTampil); if (p === pemicu) jadwalSembunyi(); });
      document.addEventListener('focusin', e => { const p = cari(e.target); if (!p || e.target !== p || kasar()) return; let fv = true; try { fv = p.matches(':focus-visible'); } catch (er) {} if (fv) tampil(p); });
      document.addEventListener('focusout', e => { if (pemicu && e.target === pemicu) sembunyi(); });
      document.addEventListener('pointerdown', () => { if (el && !el.hidden) sembunyi(); }, true);
      document.addEventListener('keydown', e => { if (e.key === 'Escape' && el && !el.hidden) { e.preventDefault(); e.stopPropagation(); sembunyi(); } }, true);
      root.addEventListener('scroll', () => { if (el && !el.hidden) sembunyi(); }, { passive: true, capture: true });
    }
    return { pasang: () => pasang(), sembunyi };
  })();

  // ---------- gaya cadangan komponen JS ----------
  // Spesifisitas 0 (:where) sehingga aturan css/app.css selalu menang; hanya menjaga komponen baru tetap berfungsi
  // bila kelasnya belum ditata (tooltip, garis tab bergeser, toast beraksi, bar hasil mini, progres ujian, pita rencana).
  const GAYA_CADANGAN = [
    // tata letak V6 (DESAIN-V6 D.0): lebar dasbor 1200 dan grid 12 kolom
    '.page.lebar{max-width:var(--w-lebar,1200px)}',
    ':where(.tata){display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-items:start}',
    '@media (min-width:1024px){:where(.tata){display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:var(--kolom-gap,24px);row-gap:20px;align-items:start} :where(.tata) > *{grid-column:1/-1;min-width:0}'
      + ' :where(.tata) > :where(.k-3){grid-column:span 3} :where(.tata) > :where(.k-4){grid-column:span 4} :where(.tata) > :where(.k-5){grid-column:span 5} :where(.tata) > :where(.k-6){grid-column:span 6} :where(.tata) > :where(.k-7){grid-column:span 7} :where(.tata) > :where(.k-8){grid-column:span 8} :where(.tata) > :where(.k-9){grid-column:span 9}}',
    '@media (min-width:1280px){:where(.tata) > :where(.kl-4){grid-column:span 4} :where(.tata) > :where(.kl-5){grid-column:span 5} :where(.tata) > :where(.kl-7){grid-column:span 7} :where(.tata) > :where(.kl-8){grid-column:span 8}'
      + ' :where(.tata) > :where(.lengket){position:sticky;top:calc(var(--topbar-h,56px) + 16px);max-height:calc(100dvh - var(--topbar-h,56px) - 32px);overflow:auto;overscroll-behavior:contain}}',
    ':where(.pill) svg{width:12px;height:12px;flex:none} :where(.cari-pemicu) svg{width:16px;height:16px;flex:none} :where(.page-head-teks){min-width:0}',
    ':where(.page-head:has(> .page-head-teks)){display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px 24px} :where(.page-head-teks){flex:1 1 28rem;display:grid;gap:8px} :where(.page-actions,.page-meta){display:flex;flex-wrap:wrap;align-items:center;gap:8px}',
    // daftar fakta dua kolom (label | isi) yang bertumpuk di layar sempit
    ':where(.pasal-dl){display:grid;gap:8px;margin:0} :where(.pasal-dl) > div{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;min-width:0} :where(.pasal-dl) dt{flex:0 0 9rem;font-family:var(--font-mono);font-size:var(--fs-caption,.8125rem);color:var(--muted)} :where(.pasal-dl) dd{flex:1 1 14rem;min-width:0;margin:0;font-size:var(--fs-small,.875rem)}',
    ':where(.daftar-isi) a[aria-current="true"]{color:var(--ink);font-weight:600;background:var(--primary-soft);box-shadow:inset 3px 0 0 var(--primary)}',
    ':where(.seg) button > svg{vertical-align:-3px;margin-right:6px}',
    ':where(.tip){position:fixed;z-index:70;max-width:240px;padding:6px 8px;border-radius:3px;background:var(--toast-bg,var(--ink));color:var(--toast-ink,var(--bg));font-size:.8125rem;line-height:1.35;pointer-events:auto}',
    ':where(.tabs){position:relative}',
    ':where(.tabs-garis){position:absolute;left:0;bottom:0;width:0;height:2px;border-radius:1px;background:var(--primary);pointer-events:none;transition:transform 160ms cubic-bezier(.2,.8,.2,1),width 160ms cubic-bezier(.2,.8,.2,1)}',
    ':where(.tabs-garis[data-diam]){transition:none}',
    '.tabs[data-geser] > [role="tab"][aria-selected="true"]::after{opacity:0}',
    ':where(.toast){display:flex;align-items:center;gap:12px}',
    ':where(.toast .toast-aksi){flex:none;min-height:36px;padding:0 12px;border:0;border-radius:3px;background:transparent;color:var(--toast-aksi,var(--primary-soft));font:inherit;font-weight:600;cursor:pointer}',
    ':where(.toast .toast-tutup){color:inherit}',
    ':where(.progress-line){position:relative}',
    ':where(.progress-line) > :where(span[style*="--p"]){width:calc(var(--p) * 1%);transition:width 400ms cubic-bezier(.2,.8,.2,1)}',
    ':where(.progress-acuan){position:absolute;top:0;bottom:0;width:0;border-left:1px dashed var(--ink-faint)}',
    ':where([data-usang]){opacity:.55}',
    ':where(.cari-pemicu){display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:0 6px 0 10px;border:1px solid var(--line-strong);border-radius:6px;background:var(--surface);color:var(--muted);font:inherit;font-size:.875rem;cursor:pointer}',
    ':where(.ujian-progres){position:relative;display:flex;flex:1 1 100%;height:3px;margin-top:6px;background:var(--surface-2);border-radius:2px;overflow:visible}',
    ':where(.ujian-progres) > :where(span){display:block;height:100%;transition:width 120ms cubic-bezier(.4,0,.2,1)}',
    ':where(.ujian-progres) > :where(.isi){background:var(--primary-fill,var(--primary))} :where(.ujian-progres) > :where(.ragu){background:var(--warn)}',
    ':where(.ujian-progres) > :where(.laju){position:absolute;top:-3px;bottom:-3px;width:2px;margin-left:-1px;background:var(--ink);border-radius:1px}',
    ':where(.hasil-mini){position:sticky;bottom:calc(var(--nav-h,56px) + env(safe-area-inset-bottom,0px));z-index:5;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:10px 0;background:var(--bg);border-top:1px solid var(--line)}',
    '@media (min-width:600px){:where(.hasil-mini){bottom:0}}',
    ':where(.rencana-pita){position:sticky;top:calc(var(--topbar-h,56px) + env(safe-area-inset-top,0px));z-index:5;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:10px 0;background:var(--bg);border-bottom:1px solid var(--line)}',
    '@media (min-width:1024px){:where(.kalkulator-grid){display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,400px);column-gap:24px;align-items:start} :where(.kalkulator-grid) > :where(.hasil-kolom){position:sticky;top:calc(var(--topbar-h,56px) + 16px);max-height:calc(100dvh - var(--topbar-h,56px) - 32px);overflow:auto;overscroll-behavior:contain} :where(.hasil-mini){display:none}}',
    '@media (forced-colors:active){.tabs[data-geser] > [role="tab"][aria-selected="true"]::after{opacity:1} :where(.tabs-garis){display:none}}',
    '@media (prefers-reduced-motion:reduce){:where(.tabs-garis,.progress-line > span,.ujian-progres > span){transition:none}}',
    ':root[data-gerak="kurang"] :where(.tabs-garis,.progress-line > span,.ujian-progres > span){transition:none}',
  ].join('\n');
  function pasangGayaCadangan() {
    if (!document.head || document.getElementById('ukp-gaya-cadangan')) return;
    const st = document.createElement('style'); st.id = 'ukp-gaya-cadangan'; st.textContent = GAYA_CADANGAN;
    document.head.appendChild(st);
  }
  function siapkanKomponen() { pasangGayaCadangan(); UKP.tip.pasang(); }
  if (document.body) siapkanKomponen(); else document.addEventListener('DOMContentLoaded', siapkanKomponen);
})(typeof window !== 'undefined' ? window : globalThis);
