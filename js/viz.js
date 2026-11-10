/* Pelatih UKP — modul visualisasi UKP.viz: batang, kolom, garis, sparkline, ringSegmen, heatmap, statTile.
   Struktur DOM dan kelas mengikuti kontrak di css/app.css ("viz: kelas untuk UKP.viz"):
   <figure class="viz viz-kolom|viz-bar|viz-garis|viz-heat|viz-ring"> + figcaption.viz-judul + <svg role="img" aria-label>
   (.viz-grid · .viz-sumbu · .viz-batang[data-tone|data-pita] · .viz-seri · .viz-titik · .viz-acuan + .viz-acuan-label ·
   .viz-label · .viz-nilai) + ul.viz-legenda > li > span.viz-kunci + details.viz-tabel "Lihat sebagai tabel".
   Kolom, garis, sparkline, dan cincin berupa SVG inline; batang horizontal berupa baris HTML (.viz-baris > .viz-trek > .viz-isi)
   dan heatmap berupa tabel berangka 3 pita (tabel itu sendiri setaranya). Warna hanya lewat kelas/atribut data (token CSS),
   tanpa atribut fill/stroke. Geometri SVG memakai persen + SVG bersarang sehingga teks tetap berukuran asli di lebar berapa pun.
   V6: tooltip data memakai satu elemen .tip bersama (#viz-tip, posisi tetap terhadap layar) dari atribut data-viz-tip;
   tanda bernomor [data-i] disorot saat hover/fokus (yang lain diredupkan), grafik SVG dan cincin dapat dijelajah dengan
   panah kiri/kanan (diumumkan lewat aria-live), sel heatmap memakai fokus berpindah (roving) dengan panah, dan grafik masuk
   dengan animasi lebar/skala/stroke-dashoffset 400 ms yang mati saat gerak dikurangi. Data lengkap selalu tersedia di tabel/aria-label. */
(function (root) {
  const UKP = root.UKP = root.UKP || {};
  const V = UKP.viz = UKP.viz || {};

  // ---------- util ----------
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const angka = x => typeof x === 'number' && isFinite(x);
  const keAngka = x => { if (x == null || x === '' || typeof x === 'boolean') return null; const n = Number(x); return isFinite(n) ? n : null; };
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const r1 = n => Math.round(n * 100) / 100;
  const fmtAngka = n => angka(n) ? (Math.round(n * 10) / 10).toLocaleString('id-ID') : '–';
  const fmtDari = (format) => typeof format === 'function' ? format : format === 'persen' ? (n => angka(n) ? Math.round(n) + '%' : '–') : format === 'pecahan' ? (n => angka(n) ? Math.round(n * 100) + '%' : '–') : fmtAngka;
  // batas atas "bulat": 1, 2, 5 × 10^k
  function bulatAtas(n) { if (!(n > 0)) return 1; const p = Math.pow(10, Math.floor(Math.log10(n))); const f = n / p; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p; }
  const h = (tag, attrs, ...anak) => {
    if (UKP.h) return UKP.h(tag, attrs, ...anak);
    const el = document.createElement(tag); if (attrs) for (const k in attrs) { const v = attrs[k]; if (v == null || v === false) continue; if (k === 'class') el.className = v; else el.setAttribute(k, v === true ? '' : v); }
    const tambah = c => { if (c == null || c === false) return; if (Array.isArray(c)) c.forEach(tambah); else el.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c))); };
    anak.forEach(tambah); return el;
  };
  // markup SVG → elemen (parser HTML menempatkan <svg> dan anaknya di namespace SVG)
  function svgDari(markup) { const t = document.createElement('div'); t.innerHTML = markup.trim(); return t.firstElementChild; }
  const pita = v => v == null ? 'kosong' : v < 60 ? 'rendah' : v < 80 ? 'sedang' : 'tinggi';
  V.pita = pita;
  // nada: rendah/sedang/tinggi → data-pita; ok/warn/attn/info/redam → data-tone
  const atributNada = t => !t ? '' : /^(rendah|sedang|tinggi)$/.test(t) ? ' data-pita="' + t + '"' : ' data-tone="' + esc(t) + '"';
  const nadaObj = t => !t ? {} : /^(rendah|sedang|tinggi)$/.test(t) ? { 'data-pita': t } : { 'data-tone': t };
  // label sumbu-x: semua bila sedikit/pendek; selain itu tiap k-titik (titik terakhir selalu)
  const langkahLabel = (n, panjangMaks) => n <= 8 || (n <= 16 && panjangMaks <= 3) ? 1 : Math.ceil(n / 7);

  // ---------- cadangan gaya minimum (spesifisitas 0; css/app.css selalu menang) ----------
  (function () {
    if (typeof document === 'undefined' || document.getElementById('ukp-viz-cadangan')) return;
    const st = document.createElement('style'); st.id = 'ukp-viz-cadangan';
    st.textContent = ':where(.viz) text{fill:var(--muted);font-size:11px}:where(.viz) :where(.viz-nilai){fill:var(--ink)}:where(.viz) :where(.viz-batang,.viz-titik){fill:var(--primary)}'
      + ':where(.viz) :where(.viz-seri){fill:none;stroke:var(--primary);stroke-width:2}:where(.viz) :where(.viz-grid,.viz-sumbu,.viz-acuan){stroke:var(--line)}'
      + ':where(.viz-ring) :where(.trek){stroke:var(--surface-2)}:where(.viz-ring) :where(.viz-segmen){stroke:var(--primary)}:where(.viz-ring) :where(.viz-segmen[data-kosong]){stroke:var(--line-strong);stroke-dasharray:2 2}:where(.sparkline) :where(polyline){fill:none;stroke:var(--muted)}';
    const head = document.head || document.documentElement; head.insertBefore(st, head.firstChild);
  })();

  // ---------- bagian bersama ----------
  // tabel setara (lipat). kepala: [teks], baris: [[sel…]]; sel pertama = kepala baris
  function tabelSetara(judul, kepala, baris, opsi) {
    opsi = opsi || {};
    const tbl = h('table', { class: 'tabel' }, h('caption', { class: 'visually-hidden' }, judul || 'Data grafik'),
      h('thead', null, h('tr', null, kepala.map((k, i) => h('th', { scope: 'col', class: i ? 'num' : null }, k)))),
      h('tbody', null, baris.map(r => h('tr', null, r.map((c, i) => i === 0 ? h('th', { scope: 'row' }, c) : h('td', { class: 'num' }, c))))));
    const wrap = UKP.c && UKP.c.tabelWrap ? UKP.c.tabelWrap(judul || 'Data grafik', tbl) : h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': judul || 'Data grafik' }, tbl);
    return h('details', { class: 'viz-tabel' }, h('summary', null, opsi.ringkas || 'Lihat sebagai tabel'), wrap);
  }
  V.tabel = tabelSetara;
  // item: [{ label, seri?, bentuk?, pita?, tone? }]
  const legenda = item => h('ul', { class: 'viz-legenda', 'aria-hidden': 'true' }, item.map(x => h('li', null, h('span', Object.assign({ class: 'viz-kunci', 'data-seri': x.seri || null, 'data-bentuk': x.bentuk || null }, nadaObj(x.pita || x.tone))), x.label)));
  V.legenda = legenda;
  const kosong = (jenis, o) => bungkus(jenis, o, [h('p', { class: 'viz-kosong' }, o.kosong || 'Belum ada data.')]);
  // ---------- V6: gerak, hitung naik, ikon cadangan, gaya ----------
  // gerak diizinkan? (UKP.gerakBoleh dari core.js bila ada; selain itu media query + Pengaturan › Kurangi gerak)
  V.gerak = () => {
    try {
      if (typeof UKP.gerakBoleh === 'function') return !!UKP.gerakBoleh();
      return !(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) && document.documentElement.dataset.gerak !== 'kurang';
    } catch (e) { return false; }
  };
  const gerak = V.gerak;
  // cadangan kontrak bila core.js belum menyediakan UKP.hitungNaik (teks akhir selalu tersedia lewat aria-label)
  if (typeof UKP.hitungNaik !== 'function') UKP.hitungNaik = function (el, target, opsi) {
    if (!el) return; opsi = opsi || {}; const desimal = opsi.desimal || 0; const ms = opsi.ms || 400;
    const nf = new Intl.NumberFormat('id-ID', { minimumFractionDigits: desimal, maximumFractionDigits: desimal });
    const fmt = typeof opsi.format === 'function' ? opsi.format : n => (opsi.awalan || '') + nf.format(n) + (opsi.akhiran || '');
    const akhir = fmt(target); el.setAttribute('aria-label', akhir);
    const dari = angka(opsi.dari) ? opsi.dari : 0;
    if (!gerak() || !angka(target) || target === dari) { el.textContent = akhir; return; }
    const t0 = performance.now();
    const langkah = t => { const p = Math.min(1, (t - t0) / ms); const v = dari + (target - dari) * (1 - Math.pow(1 - p, 3)); el.textContent = p < 1 ? fmt(desimal ? v : Math.round(v)) : akhir; if (p < 1) requestAnimationFrame(langkah); };
    requestAnimationFrame(langkah);
  };
  // hitung naik sekali saat elemen pertama kali terlihat (elemen boleh belum terpasang ketika dipanggil)
  V.hitungSaatTerlihat = function (el, target, opsi) {
    if (!el || !angka(target)) return;
    const jalan = () => UKP.hitungNaik(el, target, opsi);
    if (!gerak() || typeof IntersectionObserver === 'undefined') { jalan(); return; }
    const io = new IntersectionObserver(en => { if (en.some(x => x.isIntersecting)) { io.disconnect(); jalan(); } }, { threshold: 0.4 });
    io.observe(el);
  };
  // ikon garis 24 px; ikon V6 yang belum ada di UKP.icon (core.js lama) memakai jalur cadangan di bawah
  const IKON_V6 = {
    'chevron-kanan': '<path d="M9 6l6 6-6 6"/>', 'chevron-bawah': '<path d="M6 9l6 6 6-6"/>', tambah: '<path d="M12 5v14M5 12h14"/>',
    'cek-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>', 'x-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    peringatan: '<path d="M12 4 3 19.5h18z"/><path d="M12 10v4.5M12 17v.5"/>', jam: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    suara: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>',
    lampu: '<path d="M9.5 17.5h5M10.5 20.5h3"/><path d="M12 3.5a5.5 5.5 0 0 0-3.2 10c.6.5 1 1.1 1 1.9v.6h4.4v-.6c0-.8.4-1.4 1-1.9A5.5 5.5 0 0 0 12 3.5z"/>',
    gembok: '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    naik: '<path d="M4 16l5-5 4 4 7-7M15 8h5v5"/>', turun: '<path d="M4 8l5 5 4-4 7 7M15 16h5v-5"/>',
    dek: '<rect x="4" y="7" width="13" height="13" rx="1.5"/><path d="M8 4h10.5A1.5 1.5 0 0 1 20 5.5V16"/>',
    unggah: '<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 20h14"/>', 'papan-ketik': '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><path d="M6 10h.5M9.5 10h.5M13 10h.5M16.5 10h.5M7 14h10"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="1"/><path d="M16 8V4H4v12h4"/>', check: '<path d="M5 12l4 4L19 7"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
    play: '<path d="M7 4l12 8-12 8z"/>', calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h3M13 12h3M8 16h3M13 16h3"/>', info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7v.5"/>',
  };
  let ikonInfo = null;
  V.ikon = function (nama, kls, kecil) {
    let el = null;
    if (typeof UKP.icon === 'function') {
      el = UKP.icon(nama, kls, kecil);
      if (nama !== 'info' && IKON_V6[nama]) { if (ikonInfo == null) ikonInfo = UKP.icon('info').innerHTML; if (el.innerHTML === ikonInfo) el.innerHTML = IKON_V6[nama]; }
    } else el = svgDari('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"' + (kls ? ' class="' + esc(kls) + '"' : '') + '>' + (IKON_V6[nama] || IKON_V6.info) + '</svg>');
    if (kecil) { el.setAttribute('stroke-width', '2'); el.classList.add('ikon-kecil'); }
    return el;
  };
  // blok <style>: bawaan di awal <head> (app.css menang untuk spesifisitas sama; aturan memakai :where() = 0)
  V.gaya = function (id, css, akhir) {
    if (typeof document === 'undefined' || document.getElementById(id)) return;
    const st = document.createElement('style'); st.id = id; st.textContent = css;
    const head = document.head || document.documentElement;
    if (akhir) head.appendChild(st); else head.insertBefore(st, head.firstChild);
  };
  // cadangan kelas V6: markup contoh diuji sekali terhadap app.css; bila kelasnya belum ada, gaya cadangan
  // disisipkan di akhir <head> (spesifisitas biasa) agar mengalahkan aturan lama yang bertentangan
  const hasilUji = {};
  V.cadangan = function (id, markup, cek, css) {
    if (hasilUji[id] != null) return hasilUji[id];
    if (typeof document === 'undefined' || !document.body) return true;
    let ada = true;
    try {
      const p = document.createElement('div'); p.setAttribute('aria-hidden', 'true');
      p.style.cssText = 'position:absolute;left:-10000px;top:0;width:400px;visibility:hidden;pointer-events:none;contain:layout';
      p.innerHTML = markup; document.body.appendChild(p); ada = !!cek(p); p.remove();
    } catch (e) { ada = true; }
    hasilUji[id] = ada;
    if (!ada) V.gaya('ukp-v6-cadangan-' + id, css, true);
    return ada;
  };
  V.gaya('ukp-viz-v6', ''
    + ':where(.viz [data-i]){transition:opacity var(--dur-cepat,120ms) var(--ease-standar,ease)}'
    + ':where(.viz[data-jelajah] [data-i]:not([data-aktif]):is(.viz-batang,.viz-segmen,.viz-titik)){opacity:.55}'
    + ':where(.viz[data-jelajah] .viz-baris[data-i]:not([data-aktif])){opacity:.7}'
    + ':where(.viz svg[tabindex],.viz .cincin[tabindex]){border-radius:var(--r-xs,3px)}'
    + ':where(.viz svg[tabindex]:focus-visible,.viz .cincin[tabindex]:focus-visible){outline:2px solid var(--focus);outline-offset:4px}'
    + ':where(.viz-baris.klik){position:relative;cursor:pointer;margin-inline:-6px;padding:4px 6px;border-radius:var(--r-xs,3px);transition:background-color var(--dur-cepat,120ms) var(--ease-standar,ease)}'
    + ':where(.viz-baris.klik:hover){background:var(--surface-3,var(--surface-2))}'
    + ':where(.viz-baris.klik .viz-label) :where(a,button)::after{content:"";position:absolute;inset:0}'
    + ':where(.viz-label-tombol){padding:0;border:0;background:none;font:inherit;color:inherit;text-align:left;cursor:pointer}'
    + ':where(.viz-label-tombol:hover){color:var(--primary)}'
    + ':where(.viz-heat td[data-viz-tip]){transition:background-color var(--dur-cepat,120ms) var(--ease-standar,ease),border-color var(--dur-cepat,120ms) var(--ease-standar,ease)}'
    + ':where(.viz-heat td:has(a,button)){cursor:pointer}'
    + ':where(.viz-heat td[data-aktif]){border-color:var(--line-strong)}'
    + ':where(.viz-heat td[tabindex]:focus-visible){outline:2px solid var(--focus);outline-offset:1px}'
    + ':where(.viz-heat .sel-tombol){display:grid;place-items:center;width:100%;min-height:24px;padding:0;border:0;background:none;font:inherit;color:inherit;cursor:pointer}'
    + ':where(.viz-heat .sel-tombol:hover){text-decoration:underline}'
    + ':where(.viz-aksi){position:fixed;z-index:var(--z-toast,60);display:grid;gap:var(--s-2,8px);width:max-content;min-width:200px;max-width:min(300px,calc(100vw - 32px));padding:var(--s-3,12px);background:var(--surface);color:var(--ink);border:1px solid var(--line-strong);border-radius:var(--r-md,8px)}'
    + ':where(.viz-aksi-judul){margin:0;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.viz-aksi) :where(.btn){justify-content:flex-start}'
    + ':where(.stat-tile.klik){position:relative;cursor:pointer;transition:box-shadow var(--dur-cepat,120ms) var(--ease-standar,ease)}'
    + ':where(.stat-tile.klik:hover){box-shadow:inset 0 0 0 1px var(--line-strong)}'
    + ':where(.stat-tile.klik:has(.card-link:focus-visible)){outline:2px solid var(--focus);outline-offset:-2px}'
    + ':where(.stat-tile.klik .card-link:focus-visible){outline:none}'
    + ':where(.stat-tile.klik .card-link){color:inherit;text-decoration:none}'
    + ':where(.stat-tile .delta[data-ikon]){display:inline-flex;align-items:center;gap:4px;justify-self:start}'
    + ':where(.stat-tile .delta) :where(svg){width:12px;height:12px;flex:none}'
    + '.stat-tile .delta[data-ikon][data-arah]::before{content:none}'
    + '.viz-kunci[data-tone="trek"]{background:var(--trek,var(--surface-2));box-shadow:inset 0 0 0 1px var(--line-strong)}'
    // kunci "belum dinilai / belum cukup data": kotak bergaris putus-putus (▢), sama dengan sel/segmen kosong
    + '.viz-kunci[data-bentuk="putus"]{box-sizing:border-box;width:10px;height:10px;background:none;border:1px dashed var(--line-strong);border-radius:2px}'
    // kepala kolom heatmap: singkatan <abbr> di layar < 600 px; teks penuh tetap terbaca pembaca layar
    + ':where(.viz-heat th) :where(.kepala-singkat){display:none;text-decoration:none;cursor:help}'
    + '@media (max-width:599px){:where(.viz-heat th) :where(.kepala-singkat){display:inline}'
    + ':where(.viz-heat th) :where(.kepala-penuh){position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0}}'
    + '@keyframes ukp-viz-lebar{from{width:0}}@keyframes ukp-viz-tumbuh{from{transform:scaleY(0)}}'
    + '@keyframes ukp-viz-busur{from{stroke-dashoffset:var(--pjg,0)}}@keyframes ukp-viz-klip{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}@keyframes ukp-viz-pudar{from{opacity:0}}'
    + '@media (prefers-reduced-motion:no-preference){'
    + ':where(:root:not([data-gerak="kurang"]) .viz[data-viz-masuk] .viz-isi){animation:ukp-viz-lebar var(--dur-angka,400ms) var(--ease-keluar,ease-out) both}'
    + ':where(:root:not([data-gerak="kurang"]) .viz[data-viz-masuk] .viz-kolom-batang){transform-box:fill-box;transform-origin:50% 100%;animation:ukp-viz-tumbuh var(--dur-angka,400ms) var(--ease-keluar,ease-out) both}'
    + ':where(:root:not([data-gerak="kurang"]) .viz[data-viz-masuk] .viz-segmen[style*="--pjg"]){animation:ukp-viz-busur var(--dur-angka,400ms) var(--ease-keluar,ease-out) both}'
    + ':where(:root:not([data-gerak="kurang"]) .viz[data-viz-masuk] .viz-seri-klip){animation:ukp-viz-klip var(--dur-angka,400ms) var(--ease-keluar,ease-out) both}'
    + ':where(:root:not([data-gerak="kurang"]) .viz[data-viz-masuk] .viz-titik){animation:ukp-viz-pudar var(--dur-angka,400ms) var(--ease-standar,ease) both}'
    + '}');

  // redup hover baris batang minimal .7 (kontras teks baris lain tetap terbaca); selektor sama dengan aturan lama di
  // app.css dan dipasang di akhir <head> sehingga menang tanpa !important
  V.gaya('ukp-viz-v6-redup', '.viz-bar:has(.viz-baris:hover) .viz-baris:not(:hover){opacity:.7}', true);

  // relatif "hari ini" / "kemarin" / "n hari lalu" dari ms, ISO lengkap, atau "YYYY-MM-DD" (hari belajar berganti 03.00)
  V.hariLalu = function (x) {
    if (x == null || x === '') return '';
    const U = UKP.util; let n = null;
    if (U && typeof U.hariDari === 'function' && typeof U.selisihHari === 'function') {
      const iso = typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) ? x : U.hariDari(typeof x === 'string' ? Date.parse(x) : Number(x));
      if (!iso) return ''; n = U.selisihHari(iso, U.hariIni());
    } else { const t = typeof x === 'number' ? x : Date.parse(x); if (!isFinite(t)) return ''; n = Math.floor((Date.now() - t) / 86400000); }
    return !isFinite(n) ? '' : n <= 0 ? 'hari ini' : n === 1 ? 'kemarin' : n + ' hari lalu';
  };

  // ---------- tooltip data bersama (.tip) ----------
  let tipEl = null, tipPemilik = null, tipTimer = null;
  function tipSiap() {
    if (tipEl && tipEl.isConnected) return tipEl;
    // .tip (C.16): pointer kasar tanpa tooltip lewat CSS; data tetap di aria-label/tabel
    tipEl = h('div', { class: 'tip viz-tip', id: 'viz-tip', 'aria-hidden': 'true', hidden: true });
    tipEl.style.cssText = 'position:fixed;left:0;top:0;z-index:70;pointer-events:none;max-width:240px;white-space:normal';
    document.body.appendChild(tipEl); return tipEl;
  }
  // tip di atas titik jangkar (x, y) dalam koordinat layar; turun ke bawah bila tidak muat
  V.tip = function (teks, x, y, pemilik, bawahY) {
    if (!teks || typeof document === 'undefined' || !document.body) return;
    const t = tipSiap(); clearTimeout(tipTimer); tipPemilik = pemilik || null;
    t.textContent = teks; t.hidden = false;
    const vw = document.documentElement.clientWidth || root.innerWidth; const w = t.offsetWidth, hh = t.offsetHeight;
    const left = clamp(x - w / 2, 8, Math.max(8, vw - w - 8)); let top = y - hh - 10;
    if (top < 8) { top = (angka(bawahY) ? bawahY : y) + 10; t.dataset.sisi = 'bawah'; } else delete t.dataset.sisi;
    t.style.left = Math.round(left) + 'px'; t.style.top = Math.round(top) + 'px';
    t.style.setProperty('--tip-x', Math.round(clamp(x - left, 10, Math.max(10, w - 10))) + 'px');
  };
  V.tipSembunyi = function (pemilik) { if (!tipEl || (pemilik && tipPemilik && pemilik !== tipPemilik)) return; clearTimeout(tipTimer); tipEl.hidden = true; tipPemilik = null; };
  if (typeof document !== 'undefined') {
    document.addEventListener('ukp:render', () => { V.tipSembunyi(); tutupPanel(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && tipEl && !tipEl.hidden) V.tipSembunyi(); });
    root.addEventListener('scroll', () => { if (tipEl && !tipEl.hidden && !(tipPemilik && tipPemilik.contains && tipPemilik.contains(document.activeElement))) V.tipSembunyi(); }, { passive: true, capture: true });
  }
  // jelajah: tanda bernomor [data-i] (tip di [data-viz-tip]) disorot saat hover; wadah fokus (plot) menerima ←/→/Home/End
  function pasangJelajah(fig, plot) {
    let aktif = -1;
    const live = h('p', { class: 'visually-hidden', 'aria-live': 'polite' }); fig.appendChild(live);
    const tanda = i => Array.from(fig.querySelectorAll('[data-i="' + i + '"]'));
    const jumlah = () => { let m = -1; fig.querySelectorAll('[data-i]').forEach(e => { m = Math.max(m, Number(e.getAttribute('data-i'))); }); return m + 1; };
    const tipDari = i => { const e = fig.querySelector('[data-i="' + i + '"][data-viz-tip]'); return e ? e.getAttribute('data-viz-tip') : ''; };
    function sorot(i) {
      if (i === aktif) return;
      fig.querySelectorAll('[data-aktif]').forEach(e => e.removeAttribute('data-aktif'));
      aktif = i;
      if (i < 0) { delete fig.dataset.jelajah; return; }
      fig.dataset.jelajah = ''; tanda(i).forEach(e => e.setAttribute('data-aktif', ''));
    }
    function lepas() { sorot(-1); V.tipSembunyi(fig); }
    function tipKe(i) {
      const els = tanda(i); const vis = els.find(x => /viz-(batang|segmen|titik|baris)/.test(x.getAttribute('class') || '')) || els[0]; if (!vis) return;
      const r = vis.getBoundingClientRect(); V.tip(tipDari(i), r.left + r.width / 2, r.top, fig, r.bottom);
    }
    const dariPointer = e => {
      const t = e.target && e.target.closest ? e.target.closest('[data-i]') : null;
      if (!t || !fig.contains(t)) { lepas(); return; }
      const i = Number(t.getAttribute('data-i')); sorot(i);
      const teks = tipDari(i); if (teks) V.tip(teks, e.clientX, e.clientY - 4, fig, e.clientY + 12);
      if (e.pointerType === 'touch') { clearTimeout(tipTimer); tipTimer = setTimeout(lepas, 1800); }
    };
    fig.addEventListener('pointermove', e => { if (e.pointerType !== 'touch') dariPointer(e); });
    fig.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') dariPointer(e); });
    fig.addEventListener('pointerleave', e => { if (e.pointerType !== 'touch') lepas(); });
    if (!plot) return;
    plot.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const N = jumlah(); if (!N) return; let i = aktif;
      if (e.key === 'ArrowRight') i = aktif < 0 ? 0 : Math.min(N - 1, aktif + 1);
      else if (e.key === 'ArrowLeft') i = aktif < 0 ? N - 1 : Math.max(0, aktif - 1);
      else if (e.key === 'Home') i = 0; else if (e.key === 'End') i = N - 1;
      else if (e.key === 'Escape') { if (aktif >= 0) { e.preventDefault(); lepas(); } return; }
      else return;
      e.preventDefault(); sorot(i); tipKe(i); live.textContent = tipDari(i);
    });
    plot.addEventListener('blur', lepas);
  }
  function bungkus(jenis, o, isi, jelajah) {
    const fig = h('figure', { class: 'viz viz-' + jenis + (o.kelas ? ' ' + o.kelas : '') });
    if (o.judul) fig.appendChild(h('figcaption', { class: 'viz-judul' }, o.judul, o.sub ? h('span', { class: 'viz-sub' }, o.sub) : null));
    for (const x of isi) if (x) fig.appendChild(x);
    if (jelajah) pasangJelajah(fig, jelajah.nodeType ? jelajah : null);
    // animasi masuk sekali (CSS di blok ukp-viz-v6); penanda dilepas setelah selesai agar pemasangan ulang tidak memutar lagi
    if (gerak() && jenis !== 'heat') {
      fig.setAttribute('data-viz-masuk', ''); let t = null;
      fig.addEventListener('animationend', () => { clearTimeout(t); t = setTimeout(() => fig.removeAttribute('data-viz-masuk'), 120); });
    }
    return fig;
  }
  // panel aksi kecil non-modal (heatmap/batang dengan opsi aksi): fokus ke aksi pertama, Esc kembali ke pemicu
  let panelAktif = null;
  function tutupPanel(kembali) {
    if (!panelAktif) return; const pa = panelAktif; panelAktif = null;
    document.removeEventListener('pointerdown', pa.luar, true); pa.p.remove();
    if (kembali && pa.anchor && pa.anchor.isConnected) { try { pa.anchor.focus({ preventScroll: true }); } catch (e) {} }
  }
  V.panelAksi = function (anchor, judul, aksi) {
    tutupPanel(false); V.tipSembunyi();
    const p = h('div', { class: 'viz-aksi', role: 'dialog', 'aria-label': judul },
      h('p', { class: 'viz-aksi-judul' }, judul),
      (aksi || []).map(a => h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { tutupPanel(false); try { if (typeof a.onclick === 'function') a.onclick(); else if (a.view && UKP.go) UKP.go(a.view, a.params || {}); } catch (e) { console.error(e); } } }, a.label)));
    document.body.appendChild(p);
    const r = anchor.getBoundingClientRect(); const vw = document.documentElement.clientWidth || root.innerWidth, vh = root.innerHeight || document.documentElement.clientHeight;
    const w = p.offsetWidth, hh = p.offsetHeight;
    let top = r.bottom + 6; if (top + hh > vh - 8) top = Math.max(8, r.top - hh - 6);
    p.style.left = Math.round(clamp(r.left, 8, Math.max(8, vw - w - 8))) + 'px'; p.style.top = Math.round(top) + 'px';
    const luar = e => { if (!p.contains(e.target) && !anchor.contains(e.target)) tutupPanel(false); };
    panelAktif = { p, anchor, luar };
    document.addEventListener('pointerdown', luar, true);
    p.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); tutupPanel(true); } });
    p.addEventListener('focusout', e => { if (e.relatedTarget && !p.contains(e.relatedTarget) && e.relatedTarget !== anchor) tutupPanel(false); });
    const b = p.querySelector('button'); if (b) b.focus();
    return p;
  };

  // ---------- batang horizontal (baris HTML) ----------
  // { data: [{ label, nilai, tone?: 'rendah'|'sedang'|'tinggi'|'ok'|'warn'|'attn'|'info'|'redam', sub?, view?, params?,
  //   onklik?: fn(d) (seluruh baris dapat diklik), aksi?: [{ label, view?, params?, onclick? }] (panel aksi kecil) }],
  //   maks?, format?: 'persen'|'pecahan'|fn(n, d), judul, sub?, acuan?, tabel? (default false: baris teks sudah setara), legenda? }
  // V7 K-19: tanpa tone → isi --viz-netral (CSS). Lebar maksimal baris: lebarMaks (CSS length, bawaan 560px); maks berupa teks
  //   ('480px', 'none') juga dibaca sebagai lebar maksimal, sedangkan maks berupa angka tetap skala nilai seperti v6.
  V.batang = function (o) {
    o = Object.assign({}, o || {});
    let lebarMaks = o.lebarMaks != null ? String(o.lebarMaks) : null;
    if (typeof o.maks === 'string' && !/^\s*[\d.]+\s*$/.test(o.maks)) { lebarMaks = lebarMaks || o.maks; delete o.maks; } else if (typeof o.maks === 'string') o.maks = Number(o.maks);
    const data = (o.data || []).filter(d => d && keAngka(d.nilai) != null);
    if (!data.length) return kosong('bar', o);
    const fmt = fmtDari(o.format);
    const maks = angka(o.maks) && o.maks > 0 ? o.maks : Math.max(1, ...data.map(d => Number(d.nilai)));
    const baris = data.map((d, i) => {
      const v = Number(d.nilai); const p = r1(clamp(v / maks * 100, 0, 100)); const teks = fmt(v, d); const ket = d.label + ': ' + teks;
      const aksi = Array.isArray(d.aksi) && d.aksi.length ? d.aksi : null;
      const label = aksi ? h('button', { type: 'button', class: 'viz-label-tombol', 'aria-haspopup': 'dialog', 'aria-label': ket + '. Buka pilihan', onclick: e => V.panelAksi(e.currentTarget, ket, aksi) }, d.label)
        : typeof d.onklik === 'function' ? h('button', { type: 'button', class: 'viz-label-tombol', 'aria-label': ket, onclick: () => d.onklik(d) }, d.label)
          : d.view && UKP.link ? UKP.link(d.label, d.view, d.params || null) : d.label;
      const klik = aksi || typeof d.onklik === 'function' || (d.view && UKP.link);
      return h('div', { class: 'viz-baris' + (klik ? ' klik' : ''), 'data-i': i, 'data-viz-tip': ket },
        h('span', { class: 'viz-label' }, label, d.sub ? h('span', { class: 'meta muted' }, d.sub) : null),
        h('span', { class: 'viz-nilai' }, teks),
        h('span', { class: 'viz-trek', 'aria-hidden': 'true' }, h('span', Object.assign({ class: 'viz-isi', style: 'width:' + p + '%' }, nadaObj(d.tone))),
          angka(o.acuan) ? h('span', { class: 'viz-acuan', style: 'left:' + r1(clamp(o.acuan / maks * 100, 0, 100)) + '%' }) : null));
    });
    const tabel = o.tabel ? tabelSetara(o.judul, [o.kolomLabel || 'Butir', o.kolomNilai || 'Nilai'], data.map(d => [d.label, fmt(Number(d.nilai), d)])) : null;
    const fig = bungkus('bar', o, baris.concat([o.legenda ? legenda(o.legenda) : null, tabel]), true);
    if (lebarMaks && /^(none|\d+(\.\d+)?(px|rem|em|ch|%))$/.test(lebarMaks.trim())) fig.style.setProperty('--viz-bar-maks', lebarMaks.trim());
    return fig;
  };

  // ---------- kolom vertikal (SVG) ----------
  // { data: [{ label, nilai, judulPanjang? }], maks?, judul, sub?, sorot?: indeks|label, tinggi?: 120, format?, satuan?, tabel? (default true) }
  // sorot: batang lain selalu diredupkan; bila sorotan 0, sorotan cukup lewat label sumbu tebal
  V.kolom = function (o) {
    o = o || {};
    const data = (o.data || []).filter(Boolean).map(d => ({ label: String(d.label == null ? '' : d.label), nilai: keAngka(d.nilai) || 0, judulPanjang: d.judulPanjang || null }));
    const n = data.length; if (!n) return kosong('kolom', o);
    const fmt = fmtDari(o.format); const sat = o.satuan ? ' ' + o.satuan : '';
    const maksData = Math.max(0, ...data.map(d => d.nilai));
    const maks = angka(o.maks) && o.maks > 0 ? Math.max(o.maks, maksData) : bulatAtas(maksData || 1);
    const H = clamp(Number(o.tinggi) || 120, 48, 400); const atas = 22, bawah = 22; const total = atas + H + bawah; const dasar = atas + H;
    const sorot = typeof o.sorot === 'number' ? o.sorot : o.sorot != null ? data.findIndex(d => d.label === String(o.sorot)) : -1;
    const bw = n <= 7 ? 24 : n <= 14 ? 14 : n <= 31 ? 8 : 4; const slot = 100 / n;
    const lk = langkahLabel(n, Math.max(...data.map(d => d.label.length)));
    const tinggiBatang = d => d.nilai > 0 ? Math.max(2, Math.round(d.nilai / maks * H)) : 0;
    const puncak = i => i >= 0 && i < n ? dasar - tinggiBatang(data[i]) : dasar;
    // v7 (K-19): warna tidak berganti menurut data; batang selain sorotan selalu redam (juga bila sorotan bernilai 0)
    const redupkan = sorot >= 0 && sorot < n;
    let m = '<line class="viz-grid" x1="0" x2="100%" y1="' + atas + '" y2="' + atas + '"/>'
      + '<text class="viz-label" x="0" y="' + (atas - 6) + '">' + esc(fmt(maks) + sat) + '</text>'
      + '<line class="viz-sumbu" x1="0" x2="100%" y1="' + dasar + '" y2="' + dasar + '"/>';
    data.forEach((d, i) => {
      const hh = tinggiBatang(d);
      const r = Math.min(4, bw / 2, hh); const x0 = -bw / 2, x1 = bw / 2, yt = dasar - hh;
      const dipilih = i === sorot; const teks = fmt(d.nilai) + sat;
      const nada = ' class="viz-batang viz-kolom-batang' + (redupkan && dipilih ? ' sorot" data-sorot=""' : redupkan ? '" data-tone="redam"' : '"') + ' data-i="' + i + '"';
      // label nilai sorotan (hanya bila > 0): slot pertama rata kiri, slot terakhir rata kanan pada tepi batang;
      // tinggi label di atas batang tetangga yang tertimpa teks agar tidak menumpuk
      let labelNilai = '';
      if (dipilih && d.nilai > 0) {
        const akhir = n > 1 && i === n - 1, awal = n > 1 && i === 0;
        const yl = Math.max(12, Math.min(yt, ...(akhir ? [puncak(i - 1), puncak(i - 2)] : awal ? [puncak(i + 1), puncak(i + 2)] : [puncak(i - 1), puncak(i + 1)])) - 6);
        labelNilai = '<text class="viz-nilai" x="' + (akhir ? x1 : awal ? x0 : 0) + '" y="' + yl + '" text-anchor="' + (akhir ? 'end' : awal ? 'start' : 'middle') + '">' + esc(teks) + '</text>';
      }
      m += '<svg class="viz-slot" x="' + r1(i * slot) + '%" y="0" width="' + r1(slot) + '%" height="' + total + '" style="overflow:visible">'
        + '<svg x="50%" y="0" width="1" height="1" style="overflow:visible">'
        + (hh > 0 ? '<path' + nada + ' d="M' + x0 + ' ' + dasar + 'V' + (yt + r) + 'Q' + x0 + ' ' + yt + ' ' + (x0 + r) + ' ' + yt + 'H' + (x1 - r) + 'Q' + x1 + ' ' + yt + ' ' + x1 + ' ' + (yt + r) + 'V' + dasar + 'Z"/>' : '')
        + labelNilai
        + '</svg>'
        + ((i % lk === 0 || i === n - 1 || dipilih) && d.label ? '<text class="' + (dipilih ? 'viz-nilai' : 'viz-label') + '" x="50%" y="' + (dasar + 15) + '" text-anchor="middle"' + (dipilih ? ' style="font-weight:700"' : '') + '>' + esc(d.label) + '</text>' : '')
        + '<rect x="0" y="' + atas + '" width="100%" height="' + H + '" fill-opacity="0" data-i="' + i + '" data-viz-tip="' + esc((d.judulPanjang || d.label) + ': ' + teks) + '"/>'
        + '</svg>';
    });
    const aria = (o.judul || 'Grafik kolom') + '. ' + data.map(d => (d.judulPanjang || d.label) + ' ' + fmt(d.nilai) + sat).join('; ') + '. Panah kiri dan kanan membaca tiap kolom.';
    const svg = svgDari('<svg width="100%" height="' + total + '" style="height:' + total + 'px" role="img" tabindex="0" aria-label="' + esc(aria) + '">' + m + '</svg>');
    const tabel = o.tabel === false ? null : tabelSetara(o.judul, [o.kolomLabel || 'Periode', o.kolomNilai || 'Nilai'], data.map(d => [d.judulPanjang || d.label, fmt(d.nilai) + sat]));
    return bungkus('kolom', o, [svg, tabel], svg);
  };

  // ---------- garis tren (SVG) ----------
  // { titik: [{ x: label, y, judulPanjang? }], acuan?: 60, acuanLabel?, judul, sub?, labelSeri?, min?, maks?, tinggi?: 140, format?, tabel? (default true) }
  V.garis = function (o) {
    o = o || {};
    const pts = (o.titik || []).filter(t => t && keAngka(t.y) != null).map(t => ({ x: String(t.x == null ? '' : t.x), y: Number(t.y), judulPanjang: t.judulPanjang || null }));
    const n = pts.length; if (!n) return kosong('garis', o);
    const fmt = fmtDari(o.format); const acuan = keAngka(o.acuan);
    const ys = pts.map(p => p.y).concat(acuan != null ? [acuan] : []);
    const min = angka(o.min) ? o.min : Math.min(0, ...ys);
    const maks = angka(o.maks) ? o.maks : (Math.max(...ys) <= 100 && min >= 0 ? 100 : bulatAtas(Math.max(...ys)));
    const H = clamp(Number(o.tinggi) || 140, 60, 400); const atas = 16, bawah = 22; const total = atas + H + bawah;
    const ky = v => r1(atas + H - (clamp(v, min, maks) - min) / ((maks - min) || 1) * H);
    const kx = i => n === 1 ? 50 : r1(4 + i * 92 / (n - 1));   // persen lebar
    let m = '<line class="viz-grid" x1="0" x2="100%" y1="' + ky(maks) + '" y2="' + ky(maks) + '"/><text class="viz-label" x="0" y="' + (ky(maks) - 4) + '">' + esc(fmt(maks)) + '</text>'
      + '<line class="viz-sumbu" x1="0" x2="100%" y1="' + ky(min) + '" y2="' + ky(min) + '"/><text class="viz-label" x="0" y="' + (ky(min) - 4) + '">' + esc(fmt(min)) + '</text>';
    // garis acuan tanpa label di dalam plot (label ada di legenda) agar tidak bertabrakan dengan titik data
    if (acuan != null && acuan > min && acuan < maks) m += '<line class="viz-acuan" x1="0" x2="100%" y1="' + ky(acuan) + '" y2="' + ky(acuan) + '"/>';
    if (n > 1) m += '<svg class="viz-seri-klip" x="0" y="0" width="100%" height="' + total + '" viewBox="0 0 1000 ' + total + '" preserveAspectRatio="none" style="overflow:visible"><polyline class="viz-seri" vector-effect="non-scaling-stroke" points="' + pts.map((p, i) => r1(kx(i) * 10) + ',' + ky(p.y)).join(' ') + '"/></svg>';
    const lk = langkahLabel(n, Math.max(...pts.map(p => p.x.length)));
    pts.forEach((p, i) => {
      const akhir = i === n - 1; const anchor = n === 1 ? 'middle' : i === 0 ? 'start' : akhir ? 'end' : 'middle';
      m += '<svg x="' + kx(i) + '%" y="0" width="1" height="1" style="overflow:visible">'
        + (n <= 24 || akhir ? '<circle class="viz-titik' + (akhir ? ' akhir' : '') + '" data-i="' + i + '" cx="0" cy="' + ky(p.y) + '" r="4"/>' : '')
        + (akhir ? '<text class="viz-nilai" x="' + (n === 1 ? 8 : -8) + '" y="' + Math.max(10, ky(p.y) - 8) + '" text-anchor="' + (n === 1 ? 'start' : 'end') + '">' + esc(fmt(p.y)) + '</text>' : '')
        + ((i % lk === 0 || akhir) && p.x ? '<text class="viz-label" x="0" y="' + (atas + H + 16) + '" text-anchor="' + anchor + '">' + esc(p.x) + '</text>' : '')
        + '<circle cx="0" cy="' + ky(p.y) + '" r="12" fill-opacity="0" data-i="' + i + '" data-viz-tip="' + esc((p.judulPanjang || p.x) + ': ' + fmt(p.y)) + '"/>'
        + '</svg>';
    });
    const aria = (o.judul || 'Grafik garis') + '. ' + pts.map(p => (p.judulPanjang || p.x) + ' ' + fmt(p.y)).join('; ') + (acuan != null ? '. Garis acuan ' + fmt(acuan) + '.' : '.') + ' Panah kiri dan kanan membaca tiap titik.';
    const svg = svgDari('<svg width="100%" height="' + total + '" style="height:' + total + 'px" role="img" tabindex="0" aria-label="' + esc(aria) + '">' + m + '</svg>');
    const leg = acuan != null ? legenda([{ label: o.labelSeri || 'Nilai' }, { bentuk: 'acuan', label: (o.acuanLabel || 'acuan') + ' ' + fmt(acuan) }]) : null;
    const tabel = o.tabel === false ? null : tabelSetara(o.judul, [o.kolomLabel || 'Titik', o.kolomNilai || 'Nilai'], pts.map(p => [p.judulPanjang || p.x, fmt(p.y)]));
    return bungkus('garis', o, [svg, leg, tabel], svg);
  };

  // ---------- sparkline (SVG kecil) ----------
  // { nilai: number[] (± 12–14 titik), lebar?: 96, tinggi?: 28, label?: string | false } → <svg class="sparkline">
  V.sparkline = function (o) {
    o = Array.isArray(o) ? { nilai: o } : (o || {});
    const vals = (o.nilai || []).map(keAngka); const ada = vals.map((v, i) => [v, i]).filter(x => x[0] != null);
    const W = clamp(Number(o.lebar) || 96, 24, 400), H = clamp(Number(o.tinggi) || 28, 8, 120), pad = 4; const n = vals.length;
    let isi;
    if (ada.length >= 2) {
      const lo = Math.min(...ada.map(x => x[0])), hi = Math.max(...ada.map(x => x[0]));
      const kx = i => r1(pad + i * (W - pad * 2) / Math.max(1, n - 1));
      const ky = v => r1(hi === lo ? H / 2 : pad + (hi - v) / (hi - lo) * (H - pad * 2));
      const akhir = ada[ada.length - 1];
      isi = '<polyline points="' + ada.map(x => kx(x[1]) + ',' + ky(x[0])).join(' ') + '"/><circle class="akhir" cx="' + kx(akhir[1]) + '" cy="' + ky(akhir[0]) + '" r="3"/>';
    } else isi = '<polyline points="' + pad + ',' + (H / 2) + ' ' + (W - pad) + ',' + (H / 2) + '" stroke-opacity=".5"/>';
    const label = o.label === false ? null : (o.label || ('Tren ' + n + ' titik: ' + vals.map(v => v == null ? 'kosong' : fmtAngka(v)).join(', ')));
    return svgDari('<svg class="sparkline" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" focusable="false"' + (label ? ' role="img" aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + '>' + isi + '</svg>');
  };

  // ---------- cincin bersegmen (SVG) ----------
  // { segmen: [{ nilai: 0–100 | null, label }], total: 0–100 | null, label, ukuran?: 120, tebal?: 10, legenda? (default: pita), tabel?,
  //   hitungDinilai? (default true) }
  // panjang isi tiap segmen = nilainya; warna segmen = pita (< 60 / 60–79 / ≥ 80). Segmen belum dinilai (null) digambar sebagai
  // busur tipis putus-putus --line-strong sepanjang porsinya (≥ 3:1 terhadap kartu; legenda "▢ belum dinilai").
  // Pusat: total "n%" (atau "–" bila belum ada) + teks kecil "k/N dinilai" bila ada segmen belum dinilai; selain itu labelDalam
  // (bawaan: label bila muat, selain itu kata terakhirnya)
  V.ringSegmen = function (o) {
    o = o || {};
    const segs = (o.segmen || []).filter(Boolean); const N = segs.length;
    const size = clamp(Number(o.ukuran) || 120, 48, 320); const c = size / 2; const sw = clamp(Number(o.tebal) || 10, 3, 24);
    const r = r1(c - sw / 2 - 1); const C = 2 * Math.PI * r;
    const celah = N > 1 ? Math.min(3, C / N / 3) : 0; const pjg = N ? C / N - celah : C;
    let m = '';
    if (!N) m = '<circle class="trek" fill="none" cx="' + c + '" cy="' + c + '" r="' + r + '" stroke-width="' + sw + '"/>';
    const tebalKosong = Math.max(1.5, Math.min(2, sw / 4));
    segs.forEach((sg, i) => {
      const v = keAngka(sg.nilai); const mulai = (i * C / N + celah / 2) / C * 360 - 90; const rot = r1(mulai);
      const tf = ' transform="rotate(' + rot + ' ' + c + ' ' + c + ')"'; const ket = esc(sg.label + ': ' + (v == null ? 'belum dinilai' : Math.round(v)));
      const di = ' data-i="' + i + '" data-viz-tip="' + ket + '"';
      if (v == null) {
        // area sentuh/hover selebar cincin (transparan) + busur tipis putus-putus; CSS app.css .viz-segmen[data-kosong] memberi warna dan pola
        m += '<circle class="viz-sentuh" fill="none" stroke="transparent" cx="' + c + '" cy="' + c + '" r="' + r + '" stroke-width="' + sw + '" stroke-dasharray="' + r1(pjg) + ' ' + r1(C) + '"' + tf + di + '/>';
        if (N === 1) m += '<circle class="viz-segmen" data-kosong="" fill="none" cx="' + c + '" cy="' + c + '" r="' + r + '" stroke-width="' + tebalKosong + '"' + di + '/>';
        else {
          const a0 = mulai * Math.PI / 180, a1 = (mulai + pjg / C * 360) * Math.PI / 180;
          const x0 = r1(c + r * Math.cos(a0)), y0 = r1(c + r * Math.sin(a0)), x1 = r1(c + r * Math.cos(a1)), y1 = r1(c + r * Math.sin(a1));
          m += '<path class="viz-segmen" data-kosong="" fill="none" d="M' + x0 + ' ' + y0 + 'A' + r + ' ' + r + ' 0 ' + (pjg / C > 0.5 ? 1 : 0) + ' 1 ' + x1 + ' ' + y1 + '" stroke-width="' + tebalKosong + '"' + di + '/>';
        }
        return;
      }
      m += '<circle class="trek" fill="none" cx="' + c + '" cy="' + c + '" r="' + r + '" stroke-width="' + sw + '" stroke-dasharray="' + r1(pjg) + ' ' + r1(C) + '"' + tf + di + '/>';
      const len = r1(pjg * clamp(v, 0, 100) / 100);
      // o.netral (§3.3): isi segmen --viz-netral tanpa pita nada
      if (len > 0) m += '<circle class="viz-segmen" ' + (o.netral ? 'data-netral=""' : 'data-pita="' + pita(v) + '"') + ' fill="none" cx="' + c + '" cy="' + c + '" r="' + r + '" stroke-width="' + sw + '" stroke-dasharray="' + len + ' ' + r1(C) + '" style="--pjg:' + len + '"' + tf + di + '/>';
    });
    const tot = keAngka(o.total);
    const nDinilai = segs.filter(sg => keAngka(sg.nilai) != null).length; const adaKosong = nDinilai < N;
    const aria = (o.label || 'Penguasaan') + ': ' + (tot == null ? 'belum cukup data' : Math.round(tot) + (o.tanpaPersen ? '' : ' persen'))
      + (N && adaKosong ? '; ' + nDinilai + ' dari ' + N + ' segmen dinilai' : '')
      + (N ? '. ' + N + ' segmen: ' + segs.map(sg => sg.label + ' ' + (keAngka(sg.nilai) == null ? 'belum dinilai' : Math.round(sg.nilai))).join('; ') : '') + '.';
    const svg = svgDari('<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true" focusable="false">' + m + '</svg>');
    // label dalam ringkas agar tidak meluber dari lubang cincin (± 7,5 px per huruf kapital kecil)
    const muat = Math.max(2, Math.floor((size - 2 * sw - 8) / 7.5));
    const lbl = String(o.label || '').trim();
    let dalam = o.labelDalam === false ? '' : o.labelDalam != null && o.labelDalam !== '' ? String(o.labelDalam) : lbl.length <= muat ? lbl : (lbl.split(/\s+/).pop() || '').slice(0, muat);
    // "38% · 0/11 dinilai": angka pusat tidak berdiri sendiri bila sebagian segmen belum dinilai
    if (N && adaKosong && o.hitungDinilai !== false) { const t = nDinilai + '/' + N + ' dinilai'; dalam = t.length <= muat + 2 ? t : nDinilai + '/' + N; }
    const cincin = h('div', { class: 'cincin', role: 'img', tabindex: N ? '0' : null, 'aria-label': aria + (N ? ' Panah kiri dan kanan membaca tiap segmen.' : ''), style: 'width:' + size + 'px;height:' + size + 'px' }, svg,
      h('div', { class: 'label', 'aria-hidden': 'true' }, h('span', null, tot == null ? '–' : Math.round(tot) + (o.tanpaPersen ? '' : '%')), dalam ? h('small', null, dalam) : null));
    const leg = o.legenda === false || !N ? null : Array.isArray(o.legenda) ? legenda(o.legenda) : o.netral ? (adaKosong ? legenda([{ bentuk: 'putus', label: 'belum dinilai' }]) : null) : legenda([{ bentuk: 'kotak', pita: 'rendah', label: '< 60' }, { bentuk: 'kotak', pita: 'sedang', label: '60–79' }, { bentuk: 'kotak', pita: 'tinggi', label: '≥ 80' }].concat(adaKosong ? [{ bentuk: 'putus', label: 'belum dinilai' }] : []));
    const tabel = o.tabel ? tabelSetara(o.label, [o.kolomLabel || 'Segmen', 'Nilai'], segs.map(sg => [sg.label, keAngka(sg.nilai) == null ? '–' : String(Math.round(sg.nilai))])) : null;
    return bungkus('ring', o, [cincin, leg, tabel], N ? cincin : true);
  };

  // ---------- heatmap 3 pita (tabel berangka) ----------
  // { baris: [{ id, label, judulPanjang? }], kolom: [{ id, label, judulPanjang?, singkat? }], nilai: (b, k) => number | null | undefined, judul, sub?,
  //   tautan?: (b, k) => { view, params } | null, aksi?: (b, k) => [{ label, view?, params?, onclick? }] | null (panel aksi kecil),
  //   labelSel?: (b, k) => string, detailSel?: (b, k, v) => string | string[] (mis. "9 soal"), terakhirSel?: (b, k) => ms | ISO
  //   (→ "2 hari lalu"), tipSel?: (b, k, v) => string (teks tooltip pengganti), kolomLabel?, labelKosong?,
  //   tanpaGridBilaKosong? (true → null bila tak satu sel pun bernilai, agar pemanggil menampilkan satu .kosong) }
  // Sel bernilai dijelajah dengan panah (satu sel di urutan Tab), tooltip saat hover/fokus.
  //   undefined = sel tidak ada; null = belum cukup data (sel tanpa teks, hanya garis putus-putus; aria "belum cukup data");
  //   angka 0–100 → pita < 60 / 60–79 / ≥ 80. Label sel: "A1.6 PTKP · 54 · 9 soal · 2 hari lalu" bila detail/terakhir dikirim.
  // Kepala kolom panjang memakai singkatan (<abbr title>) di layar < 600 px: kolom.singkat atau peta SINGKAT_KOLOM.
  const SINGKAT_KOLOM = { konsep: 'kons', klasifikasi: 'klas', hitung: 'hit', prosedur: 'pros', kasus: 'kasus', 'baris spt': 'SPT', 'baris-spt': 'SPT', etika: 'etika' };
  const adaNilaiHeat = o => {
    const B = ((o && o.baris) || []).filter(Boolean), Kl = ((o && o.kolom) || []).filter(Boolean);
    const nilaiFn = o && typeof o.nilai === 'function' ? o.nilai : null; if (!nilaiFn) return false;
    return B.some(b => Kl.some(k => keAngka(nilaiFn(b, k)) != null));
  };
  function kepalaKolom(k) {
    const label = String(k.label == null ? '' : k.label);
    const singkat = k.singkat != null ? String(k.singkat) : (SINGKAT_KOLOM[label.toLowerCase()] || (k.id != null ? SINGKAT_KOLOM[String(k.id).toLowerCase()] : null) || null);
    if (!singkat || singkat === label) return label;
    return [h('span', { class: 'kepala-penuh' }, label), h('abbr', { class: 'kepala-singkat', title: k.judulPanjang || label, 'aria-hidden': 'true' }, singkat)];
  }
  V.heatmap = function (o) {
    o = o || {};
    const B = (o.baris || []).filter(Boolean), Kl = (o.kolom || []).filter(Boolean);
    const nilaiFn = typeof o.nilai === 'function' ? o.nilai : () => undefined;
    if (!B.length || !Kl.length) return o.tanpaGridBilaKosong ? null : kosong('heat', o);
    if (o.tanpaGridBilaKosong && !adaNilaiHeat(o)) return null;
    const labelKosong = o.labelKosong || 'belum cukup data';
    const tbl = h('table', null, h('caption', { class: 'visually-hidden' }, (o.judul || 'Peta panas') + '. Angka 0–100; pita: di bawah 60, 60–79, 80 ke atas; sel tanpa angka: ' + labelKosong + '.'),
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, h('span', { class: 'visually-hidden' }, o.kolomLabel || 'Baris')), Kl.map(k => h('th', { scope: 'col', title: k.judulPanjang || null }, kepalaKolom(k))))),
      h('tbody', null, B.map(b => h('tr', null, h('th', { scope: 'row', title: b.judulPanjang || null }, b.label), Kl.map(k => {
        const mentah = nilaiFn(b, k); if (mentah === undefined) return h('td', { class: 'sel-tiada', 'aria-label': 'tidak ada', style: 'border-color:transparent;background:transparent' });
        const v = keAngka(mentah); const pt = pita(v); const teks = v == null ? '' : String(Math.round(v));
        const dasar = o.labelSel ? o.labelSel(b, k) : (b.judulPanjang || b.label) + ' · ' + (k.judulPanjang || k.label);
        const nilaiTeks = v == null ? labelKosong : teks;
        // detail tambahan dari pemanggil (skor, jumlah soal, waktu jawaban terakhir)
        let detail = o.detailSel ? o.detailSel(b, k, v) : null; detail = (Array.isArray(detail) ? detail : [detail]).filter(x => x != null && x !== '').map(String);
        const lalu = o.terakhirSel ? V.hariLalu(o.terakhirSel(b, k)) : ''; if (lalu) detail.push(lalu);
        const ket = detail.length ? [dasar, nilaiTeks].concat(detail).join(' · ') : dasar + ': ' + nilaiTeks;
        const tip = o.tipSel ? (o.tipSel(b, k, v) || ket) : ket;
        const ak = o.aksi ? o.aksi(b, k) : null; const t = !(ak && ak.length) && o.tautan ? o.tautan(b, k) : null;
        // sel tanpa cukup data: tanpa teks "–" (garis putus-putus dari CSS td[data-kosong]); nama aksesibel tetap lengkap
        let isi = v == null ? h('span', { class: 'visually-hidden' }, labelKosong) : teks;
        if (ak && ak.length) isi = h('button', { type: 'button', class: 'sel-tombol', 'aria-haspopup': 'dialog', 'aria-label': ket + '. Buka pilihan', onclick: e => V.panelAksi(e.currentTarget, ket, ak) }, teks);
        else if (t && t.view && UKP.link) { isi = UKP.link(teks, t.view, t.params || null, 'sel-tautan'); isi.setAttribute('aria-label', ket); isi.setAttribute('style', 'color:inherit;display:block'); }
        // o.netral (§3.3, K-19): sel bernilai netral (--surface, angka --ink); nada hanya dari o.nadaSel untuk pengecualian
        if (o.netral) return h('td', { 'data-netral': v == null ? null : '', 'data-nada': v != null && o.nadaSel ? (o.nadaSel(b, k, v) || null) : null, 'data-kosong': v == null ? '' : null, 'data-viz-tip': tip }, isi);
        return h('td', { 'data-pita': v == null ? null : pt, 'data-kosong': v == null ? '' : null, 'data-viz-tip': tip }, isi);
      })))));
    // wilayah gulir dapat difokus hanya bila tidak ada sel yang dapat difokus (sel yang difokus menggulir dirinya ke layar)
    const nSel = pasangSelHeat(tbl);
    const kotak = h('div', { class: 'tabel-wrap viz-heat-wrap', role: 'region', tabindex: nSel ? null : '0', 'aria-label': (o.judul || 'Peta panas') + (nSel ? '. Panah memindah antarsel.' : '') }, tbl);
    const leg = o.legenda === false ? null : Array.isArray(o.legenda) ? legenda(o.legenda) : o.netral ? legenda([{ bentuk: 'kotak', tone: 'sel', label: o.labelIsi || 'berangka' }, { bentuk: 'kotak', tone: 'kosong', label: labelKosong }])
      : legenda([{ bentuk: 'kotak', pita: 'rendah', label: '< 60' }, { bentuk: 'kotak', pita: 'sedang', label: '60–79' }, { bentuk: 'kotak', pita: 'tinggi', label: '≥ 80' }, { bentuk: 'kotak', tone: 'kosong', label: labelKosong }]);
    return bungkus('heat', o, [kotak, leg]);
  };
  // true bila tak satu sel pun bernilai (pemanggil dapat menampilkan satu keadaan kosong tanpa membangun grid)
  V.heatmap.semuaKosong = o => !adaNilaiHeat(o);

  // sel heatmap: satu target di urutan Tab (roving), panah/Home/End berpindah, tooltip saat hover dan fokus
  function pasangSelHeat(tbl) {
    const body = tbl.tBodies[0]; if (!body) return;
    const grid = Array.from(body.rows).map(tr => Array.from(tr.cells).filter(c => c.tagName === 'TD'));
    const target = td => td.querySelector('a, button') || (td.hasAttribute('data-viz-tip') ? td : null);
    const semua = [];
    grid.forEach((row, i) => row.forEach((td, j) => { const t = target(td); if (!t) return; t.tabIndex = -1; t.dataset.r = i; t.dataset.k = j; semua.push(t); }));
    if (!semua.length) return 0;
    semua[0].tabIndex = 0;
    const di = (i, j) => { const td = grid[i] && grid[i][j]; return td ? target(td) : null; };
    const cari = (i, j, di0, dj) => { let a = i + di0, b = j + dj; while (a >= 0 && a < grid.length && b >= 0 && b < (grid[a] || []).length) { const t = di(a, b); if (t) return t; a += di0; b += dj; } return null; };
    const tampil = (td, pointer) => {
      tbl.querySelectorAll('td[data-aktif]').forEach(x => { if (x !== td) x.removeAttribute('data-aktif'); }); td.setAttribute('data-aktif', '');
      const r = td.getBoundingClientRect(); const fig = tbl.closest('.viz') || tbl;
      if (pointer) V.tip(td.getAttribute('data-viz-tip'), pointer.clientX, pointer.clientY - 4, fig, pointer.clientY + 12); else V.tip(td.getAttribute('data-viz-tip'), r.left + r.width / 2, r.top, fig, r.bottom);
    };
    const lepas = () => { tbl.querySelectorAll('td[data-aktif]').forEach(x => x.removeAttribute('data-aktif')); V.tipSembunyi(tbl.closest('.viz') || tbl); };
    tbl.addEventListener('keydown', e => {
      if (e.altKey || e.metaKey) return;
      const t = e.target.closest ? e.target.closest('[data-r]') : null; if (!t || !tbl.contains(t)) return;
      const i = Number(t.dataset.r), j = Number(t.dataset.k); let d = null;
      if (e.key === 'ArrowRight') d = cari(i, j, 0, 1); else if (e.key === 'ArrowLeft') d = cari(i, j, 0, -1);
      else if (e.key === 'ArrowDown') d = cari(i, j, 1, 0); else if (e.key === 'ArrowUp') d = cari(i, j, -1, 0);
      else if (e.key === 'Home') d = e.ctrlKey ? semua[0] : grid[i].map(target).find(Boolean);
      else if (e.key === 'End') d = e.ctrlKey ? semua[semua.length - 1] : grid[i].map(target).filter(Boolean).pop();
      else if (e.key === 'Escape') { lepas(); return; }
      else return;
      e.preventDefault(); if (d && d !== t) { t.tabIndex = -1; d.tabIndex = 0; d.focus(); }
    });
    tbl.addEventListener('focusin', e => { const t = e.target.closest ? e.target.closest('[data-r]') : null; if (!t) return; semua.forEach(x => { x.tabIndex = x === t ? 0 : -1; }); tampil(t.closest('td')); });
    tbl.addEventListener('focusout', e => { if (!tbl.contains(e.relatedTarget)) lepas(); });
    tbl.addEventListener('pointermove', e => { if (e.pointerType === 'touch') return; const td = e.target.closest ? e.target.closest('td[data-viz-tip]') : null; if (td && tbl.contains(td)) tampil(td, e); else if (!tbl.contains(document.activeElement)) lepas(); });
    tbl.addEventListener('pointerleave', () => { if (!tbl.contains(document.activeElement)) lepas(); });
    return semua.length;
  }

  // ---------- stat tile ----------
  // { label, nilai, delta?: number | string, satuanDelta?: ' poin', deltaLabel?: 'vs minggu lalu', naikBaik? (default true), trend?: number[],
  //   labelTren?: 'Menit belajar 14 hari' (awalan label aksesibel sparkline; bawaan "Tren <label>"), sub?,
  //   hitung?: angka nilai (menghitung naik 400 ms saat pertama terlihat; teks hasil = awalan + angka id-ID + akhiran), awalan?, akhiran?, desimal?,
  //   view?, params? (seluruh tile menjadi tautan) }
  // delta: ikon naik/turun 12 px + teks bertanda +/− dan "naik/turun" untuk pembaca layar; sparkline hanya bila ≥ 3 titik bernilai yang tidak datar
  V.statTile = function (o) {
    o = o || {};
    const kosongNilai = o.nilai == null || o.nilai === '';
    // o.satuan: angka mono + satuan sans (§3.2: "21" + "hari"); hitung naik hanya pada angkanya
    const adaSatuan = !kosongNilai && o.satuan != null && o.satuan !== '';
    const inti = adaSatuan ? h('span', { class: 'nilai-angka' }, o.nilai) : null;
    const nilai = adaSatuan ? h('span', { class: 'nilai' }, inti, h('small', { class: 'satuan' }, ' ' + o.satuan)) : h('span', { class: 'nilai' }, kosongNilai ? '–' : o.nilai);
    const label = o.view && UKP.link ? UKP.link(o.label || '', o.view, o.params || null, 'card-link') : (o.label || '');
    const el = h('div', { class: 'stat stat-tile' + (o.view && UKP.link ? ' klik' : '') }, h('span', { class: 'label' }, label), nilai);
    if (!kosongNilai && angka(o.hitung)) V.hitungSaatTerlihat(inti || nilai, o.hitung, { awalan: o.awalan || '', akhiran: adaSatuan ? '' : (o.akhiran || ''), desimal: o.desimal || 0 });
    if (o.delta != null && o.delta !== '') {
      const d = keAngka(o.delta);
      if (d != null) {
        const arah = d > 0 ? 'naik' : d < 0 ? 'turun' : 'datar';
        const baik = arah === 'datar' ? null : ((arah === 'naik') === (o.naikBaik !== false) ? 'ya' : 'tidak');
        const abs = (Math.round(Math.abs(d) * 10) / 10).toLocaleString('id-ID') + (o.satuanDelta || '');
        el.appendChild(h('span', { class: 'delta', 'data-arah': arah, 'data-baik': baik, 'data-ikon': arah === 'datar' ? null : '' },
          arah === 'datar' ? null : V.ikon(arah, null, true),
          h('span', { class: 'visually-hidden' }, arah === 'datar' ? 'tetap ' : arah + ' '),
          h('span', { 'aria-hidden': arah === 'datar' ? null : 'true' }, arah === 'datar' ? 'tetap' : (d > 0 ? '+' : '−') + abs),
          arah !== 'datar' ? h('span', { class: 'visually-hidden' }, abs) : null,
          o.deltaLabel ? ' ' + o.deltaLabel : null));
      } else el.appendChild(h('span', { class: 'delta' }, String(o.delta)));
    }
    if (o.sub) el.appendChild(h('span', { class: 'tiny muted' }, o.sub));
    const bernilai = Array.isArray(o.trend) ? o.trend.map(keAngka).filter(v => v != null) : [];
    if (bernilai.length >= 3 && Math.max(...bernilai) !== Math.min(...bernilai)) el.appendChild(V.sparkline({ nilai: o.trend, label: (o.labelTren ? String(o.labelTren) : 'Tren ' + (o.label || '')) + ': ' + o.trend.map(v => keAngka(v) == null ? 'kosong' : fmtAngka(Number(v))).join(', ') }));
    return el;
  };
})(typeof window !== 'undefined' ? window : globalThis);
