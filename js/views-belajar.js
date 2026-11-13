/* Siap UKP — tampilan: Belajar (peta tingkat), Kelompok, Topik, Latih, Ulang, Studi Kasus, Strategi PG */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten; const L = UKP.belajar;
  const diTingkat = (kode, tingkat) => K.kelompok(tingkat).includes(kode);
  const ringSkor = (skor, n, label, opsi) => UKP.c.ringSkor ? UKP.c.ringSkor(skor, n, label, opsi) : UKP.c.ring(skor, Object.assign({ label }, opsi || {}));
  const tabelWrap = (label, tabel) => UKP.c.tabelWrap ? UKP.c.tabelWrap(label, tabel) : h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': label }, tabel);
  // grafik lewat UKP.viz (js/viz.js) bila ada; selain itu cadangan
  const viz = (nama, cfg, cadangan) => {
    if (UKP.c.vizAtau) return UKP.c.vizAtau(nama, cfg, cadangan);
    try { if (UKP.viz && typeof UKP.viz[nama] === 'function') { const r = UKP.viz[nama](cfg); if (r && r.nodeType) return r; } } catch (e) { console.error(e); }
    return cadangan ? cadangan() : null;
  };
  const adaView = v => !!(UKP.views && typeof UKP.views[v] === 'function');
  // kalimat kesalahan di ringkasan latihan: "Tidak ada kesalahan" hanya bila memang tidak ada soal keliru; jawaban "Tidak tahu"
  // (opsi '-') tidak dihitung sebagai kesalahan per topik (statistik tim), tetapi tetap disebut sebagai "N soal belum tahu"
  UKP.kalimatKesalahanLatih = function (o) {
    const nKeliru = o.nKeliru || 0, nBelumTahu = o.nBelumTahu || 0, top = o.top;
    if (!nKeliru) return o.adaJawaban ? { teks: 'Tidak ada kesalahan pada latihan ini.', muted: true } : null;
    const belumTahuTeks = nBelumTahu ? nBelumTahu + ' soal belum tahu.' : '';
    if (top && top[1] > 0) return { teks: top[1] + ' kesalahan di ' + (o.judul || top[0]) + '.' + (belumTahuTeks ? ' ' + belumTahuTeks : ''), muted: false };
    return { teks: belumTahuTeks || nKeliru + ' soal keliru.', muted: false };
  };
  const DEK_PERUBAHAN = 'perubahan-2025-2026';
  // kartu otomatis dari baris angka kunci topik (id KA-poin-<topik>-<i>); pakai mesin belajar bila tersedia
  const idKartuPoin = (t, i) => 'KA-poin-' + t.id + '-' + i;
  const labelPoin = poin => String((poin && poin.label) || '').trim().replace(/[.?:]+$/, '');
  // sudah ada: id baku, atau kartu angka topik yang sama dengan isi sama (bila dibuat mesin belajar dengan id lain)
  const kartuPoinAda = (t, i, poin) => (UKP.store.get().kartuOtomatis || []).some(k => k.id === idKartuPoin(t, i) || (!!poin && k.topik === t.id && k.tipe === 'angka' && k.belakang === String(poin.nilai == null ? '' : poin.nilai) && String(k.depan || '').indexOf(labelPoin(poin)) === 0));
  function kartuDariPoin(poin, t, i) {
    if (typeof L.kartuOtomatisDariPoin === 'function') { try { const r = L.kartuOtomatisDariPoin(poin, t); if (r) return r; } catch (e) { console.error(e); } }
    const s = UKP.store.get(); if (!Array.isArray(s.kartuOtomatis)) s.kartuOtomatis = [];
    const id = idKartuPoin(t, i); const ada = s.kartuOtomatis.find(k => k.id === id); if (ada) return ada;
    const label = labelPoin(poin);
    const kartu = { id, kode: t.kode, topik: t.id, tipe: 'angka', depan: label + '?', belakang: String(poin.nilai == null ? '' : poin.nilai), dasar: poin.dasar || '', berlakuSejak: poin.berlakuSejak || null, menggantikan: poin.menggantikan || null, dekTambahan: poin.menggantikan ? [DEK_PERUBAHAN] : [], sumber: 'otomatis', asal: 'poin', poinRef: t.id + '#' + i, dibuatPada: Date.now() };
    // batas kartu otomatis ditangani mesin belajar (kartu buatan pengguna tidak pernah dibuang)
    s.kartuOtomatis.push(kartu); if (typeof L.rapikanKartuOtomatis === 'function') L.rapikanKartuOtomatis();
    UKP.store.save(); return kartu;
  }
  // label jenis soal untuk chip jenis dominan di daftar topik
  const JENIS_LABEL = { konsep: 'konsep', klasifikasi: 'klasifikasi', hitung: 'hitung', prosedur: 'prosedur', kasus: 'kasus', 'baris-spt': 'baris SPT', etika: 'etika' };

  // ---------- V6: ikon, gerak, kop, pill, bar, pratinjau topik, gaya halaman ----------
  function ikon(n, c, k) { return UKP.viz && UKP.viz.ikon ? UKP.viz.ikon(n, c, k) : UKP.icon(n, c); }
  const gerak = () => (UKP.viz && UKP.viz.gerak ? UKP.viz.gerak() : !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches));
  const cocok = q => { try { return !!(window.matchMedia && matchMedia(q).matches); } catch (e) { return false; } };
  const kop = o => (UKP.c.kopHalaman ? UKP.c.kopHalaman(o) : UKP.c.kop(o.crumbs || null, o.judul, o.lead));
  const pill = (teks, nada, nIkon) => h('span', { class: 'pill', 'data-tone': nada && nada !== 'netral' ? nada : null }, nIkon ? ikon(nIkon, null, true) : null, teks);
  const bar = (p, o) => (UKP.c.barProgres ? UKP.c.barProgres(p, o) : h('div', { class: 'progress-line', 'aria-hidden': 'true' }, h('span', { style: '--p:' + p })));
  // v9.5: teks yang hanya lebih 1 sampai 3 huruf ditampilkan utuh; bila dipotong, potong di spasi terakhir (bukan di tengah kata)
  const pendek = (t, n) => { t = String(t || ''); if (t.length <= n + 3) return t; const p = t.lastIndexOf(' ', n - 1); return t.slice(0, p > n * .4 ? p : n - 1).replace(/[\s,.;:]+$/, '') + '…'; };
  const gulirKe = el => { try { el.scrollIntoView({ block: 'start', behavior: UKP.gulirHalus ? UKP.gulirHalus() : 'auto' }); } catch (e) { el.scrollIntoView(); } };
  // soal cek pemahaman topik: sesuai tingkat target, kecuali kelompok di luar tingkat (semua soalnya dipakai)
  const soalCekTopik = t => { const tg = UKP.store.get().profil.tingkat; const saring = diTingkat(t.kode, tg); return K.soalTopik(t.id).filter(x => !saring || (x.tingkat || []).includes(tg)); };
  // v9.5 jumlah soal cek: paling banyak 5, satu soal per keluarga (soal asli beserta penggantinya)
  const nCekDari = arr => Math.min(5, K.akar ? new Set(arr.map(x => K.akar(x) || x.id)).size : arr.length);
  // v9.5.4 S13: jumlah soal yang benar-benar dimulai tombol "Latih 10 soal <topik>": paling banyak maks (10), satu soal per keluarga,
  // dari pool yang sama dengan #latih { kode, topik } (soal tingkat target; kelompok di luar tingkat target memakai semua soal kelompok itu)
  const nLatihDari = (arr, maks) => Math.min(maks == null ? 10 : maks, K.akar ? new Set(arr.map(x => K.akar(x) || x.id)).size : arr.length);
  const nLatihTopik = (id, maks) => { const t = K.topik(id); return t ? nLatihDari(soalCekTopik(t), maks) : 0; };
  // v9.5.4 C-5: jumlah soal yang benar-benar dimulai #latih { hanyaSalah: true, n: maks } (pool sama dengan basis + soalSalah tanpa kelompok)
  const nLatihSalah = maks => { const tg = UKP.store.get().profil.tingkat; const ids = new Set(L.bukuKesalahan(tg, 200).map(j => j.soal)); return nLatihDari(K.semuaSoal(tg).filter(x => ids.has(x.id)), maks); };

  // ---------- V7: komponen Kontrak v7 (DESAIN-V7 §4) dari core.js/learn.js; gaya ada di css/app.css (Kontrak kelas v7) ----------
  // K-08 mode fokus: navigasi situs disembunyikan selama soal/kartu/langkah kasus berjalan; mode ujian/sesi tidak ditimpa
  const modeFokus = on => UKP.mode.fokus(!!on);
  // K-18 status penguasaan tunggal: topik dinilai setelah 8 soal; angka kelompok setelah 3 topik dinilai
  const teksDinilai = () => L.TEKS_DINILAI;
  const statusTopik = id => L.statusTopik(id);
  const statusKelompok = kode => L.statusKelompok(kode);
  // pill status hanya untuk pengecualian (§3.3): dikuasai → ok, perlu disegarkan → attn; selain itu tanpa pill
  // "perlu disegarkan" = warn (§3.3 aturan 3: merah hanya untuk salah atau berisiko sekarang)
  const pillLabel = st => st && st.label ? pill(st.label, st.label === 'dikuasai' ? 'ok' : 'warn') : null;
  // K-01 judul bagian · K-05 bar mini · K-06 ringkasan status · K-07 langkah berikutnya (maks. satu primer) · K-08 bar fokus
  const sect = o => UKP.c.sect(o);
  const barMini = (p, o) => UKP.c.barMini(p, o);
  const ringkasStatus = (teks, aksi) => UKP.c.ringkasStatus(teks, aksi);
  const langkahBerikut = (item, o) => UKP.c.langkahBerikut(item, o);
  const fokusBar = o => UKP.c.fokusBar(o);

  // pratinjau topik (Momen 9): hover 350 ms (pointer halus) atau fokus papan ketik pada tautan topik → kartu 320 px
  // (kode, judul, status, 2 butir ringkasan, 1 angka kunci, menit + soal cek, tombol Cek dan Buka). Disisipkan tepat
  // setelah tautannya sehingga Tab berikutnya masuk ke tombol pratinjau; Esc menutup; tidak muncul saat menggulir.
  // isi kartu pratinjau (dipakai kartu melayang dan sheet HP); ketId: id kalimat ringkas untuk aria-describedby
  function isiPratinjau(t, ketId) {
    const st = statusTopik(t.id); const nCek = nCekDari(soalCekTopik(t));
    const angka = (t.poinKunci || []).find(x => /\d/.test(String(x.nilai == null ? '' : x.nilai)) && String(x.nilai).length <= 32);
    const ket = h('p', { class: 'small muted', id: ketId || null }, '± ' + (t.estimasiMenit || 10) + ' mnt baca · ' + nCek + ' soal cek');
    return [h('div', { class: 'between' }, h('span', { class: 'mono small muted' }, t.id), pillLabel(st) || h('span', { class: 'meta' }, st.tahap === 'belum' ? 'belum dinilai' : st.teksSampel)),
      h('p', { class: 'judul' }, t.judul),
      (t.ringkasan || []).length ? h('ul', null, t.ringkasan.slice(0, 2).map(r => h('li', null, pendek(r, 120)))) : null,
      angka ? h('p', { class: 'small' }, pendek(angka.label, 60) + ': ', h('strong', { class: 'mono' }, String(angka.nilai))) : null,
      ket,
      h('div', { class: 'btn-row' }, nCek ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => UKP.go('topik', { id: t.id, cek: 1 }) }, 'Cek ' + nCek + ' soal') : null, h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => UKP.go('topik', { id: t.id }) }, 'Buka', ikon('chevron-kanan', null, true)))];
  }
  // Momen 9 untuk pointer kasar (HP): pratinjau sebagai sheet; tombol kecil "Pratinjau <judul>" di baris topik
  function bukaPratinjau(id) {
    const t = K.topik(id); if (!t || !UKP.dialog) return null;
    return UKP.dialog({ judul: 'Pratinjau ' + t.id, sheet: true, isi: () => h('div', { class: 'pratinjau-topik pratinjau-statis' }, isiPratinjau(t)) });
  }
  UKP.bukaPratinjau = bukaPratinjau;
  UKP.c.tombolPratinjau = function (t) {
    if (!t) return null;
    return h('button', { type: 'button', class: 'icon-btn sm tombol-pratinjau', 'aria-label': 'Pratinjau ' + t.judul, 'aria-haspopup': 'dialog', onclick: () => bukaPratinjau(t.id) }, ikon('info', null, true));
  };
  // pasangPratinjau(wadah): tautan a[data-go="topik"] (atau elemen [data-pratinjau="<id topik>"], mis. tombol tugas Rencana)
  // di dalam wadah menampilkan kartu pratinjau saat hover/fokus papan ketik. Diekspor sebagai UKP.pasangPratinjau
  function pasangPratinjau(wadah) {
    if (!wadah || !wadah.addEventListener) return;
    let el = null, anchor = null, tBuka = null, tTutup = null, gulir = 0, diam = null; // diam: tautan yang baru menerima fokus kembali dari Esc
    const halus = () => cocok('(hover: hover) and (pointer: fine)');
    const tautan = t => t && t.closest ? t.closest('a[data-go="topik"], [data-pratinjau]') : null;
    const idDari = a => { if (a.dataset.pratinjau) return a.dataset.pratinjau; try { return JSON.parse(a.dataset.params || '{}').id; } catch (e) { return null; } };
    function tutup() { clearTimeout(tBuka); clearTimeout(tTutup); if (anchor) anchor.removeAttribute('aria-describedby'); if (el) el.remove(); el = null; anchor = null; }
    function jadwalTutup() { clearTimeout(tTutup); tTutup = setTimeout(() => { if (el && (el.matches(':hover') || el.contains(document.activeElement))) return; if (anchor && anchor === document.activeElement) return; tutup(); }, 150); }
    function posisi() {
      if (!el || !anchor) return;
      const op = el.offsetParent || document.body; const ro = op.getBoundingClientRect(); const ra = anchor.getBoundingClientRect();
      const vw = document.documentElement.clientWidth, vh = window.innerHeight || document.documentElement.clientHeight;
      const w = el.offsetWidth, hh = el.offsetHeight;
      const kiri = U.clamp(Math.min(ra.left + 48, ra.right - w), 8, Math.max(8, vw - w - 8));
      let atas = ra.bottom + 4; if (atas + hh > vh - 8 && ra.top - hh - 4 > 8) atas = ra.top - hh - 4;
      el.style.left = Math.round(kiri - ro.left - op.clientLeft) + 'px'; el.style.top = Math.round(atas - ro.top - op.clientTop) + 'px';
    }
    function buka(a) {
      if (!a || !a.isConnected) return;
      const t = K.topik(idDari(a)); if (!t) return;
      tutup(); anchor = a;
      el = h('div', { class: 'pratinjau-topik', role: 'dialog', 'aria-label': 'Pratinjau ' + t.id + ' ' + t.judul }, isiPratinjau(t, 'pratinjau-ket'));
      el.style.position = 'absolute';
      a.after(el); a.setAttribute('aria-describedby', 'pratinjau-ket');
      posisi();
      el.addEventListener('pointerleave', jadwalTutup);
      el.addEventListener('focusout', e => { if (!el || el.contains(e.relatedTarget) || e.relatedTarget === anchor) return; jadwalTutup(); });
      el.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); const a0 = anchor; tutup(); if (a0 && a0.isConnected) { diam = a0; a0.focus(); } } });
    }
    wadah.addEventListener('pointerover', e => {
      if (e.pointerType === 'touch' || !halus() || Date.now() - gulir < 250) return;
      const a = tautan(e.target); if (!a || !wadah.contains(a)) return;
      if (a === anchor) { clearTimeout(tTutup); return; }
      clearTimeout(tBuka); tBuka = setTimeout(() => buka(a), 350);
    });
    wadah.addEventListener('pointerout', e => {
      const a = tautan(e.target); if (!a) return; const ke = e.relatedTarget;
      if (ke && (a.contains(ke) || (el && el.contains(ke)))) return;
      clearTimeout(tBuka); if (a === anchor) jadwalTutup();
    });
    wadah.addEventListener('focusin', e => {
      const a = tautan(e.target); if (!a || e.target !== a) return;
      if (diam === a) { diam = null; return; } diam = null;
      let fv = false; try { fv = a.matches(':focus-visible'); } catch (er) {}
      if (fv && a !== anchor) buka(a); clearTimeout(tTutup);
    });
    wadah.addEventListener('focusout', e => { const a = tautan(e.target); if (!a || a !== anchor) return; if (e.relatedTarget && el && el.contains(e.relatedTarget)) return; jadwalTutup(); });
    wadah.addEventListener('keydown', e => { if (e.key === 'Escape' && el && tautan(e.target) === anchor) { e.preventDefault(); tutup(); } });
    // menggulir membatalkan pratinjau yang belum tampil dan menutup yang tidak sedang difokus; dilepas pada render berikutnya
    const onGulir = () => { gulir = Date.now(); clearTimeout(tBuka); if (el && !el.contains(document.activeElement) && anchor !== document.activeElement) tutup(); };
    window.addEventListener('scroll', onGulir, { passive: true });
    setTimeout(() => document.addEventListener('ukp:render', () => { tutup(); window.removeEventListener('scroll', onGulir); }, { once: true }), 0);
  }
  UKP.pasangPratinjau = pasangPratinjau;
  if (UKP.viz && UKP.viz.gaya) UKP.viz.gaya('ukp-belajar-v6', ''
    + ':where(.kel-nilai){display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 12px}:where(.kel-nilai .angka){font-size:1.75rem}:where(.kel-nilai .angka[data-nada="attn"]){color:var(--attn)}:where(.kel-nilai .bar-mini){align-self:center;margin-left:auto;--bar-w:120px}'
    + ':where(.kartu-kelompok .row-meta){margin:0}:where(.kartu-kelompok .kelompok-arah){margin:0;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.row-link .row-isi){flex:1 1 auto;min-width:0;display:grid;gap:2px}:where(.row-link .row-kanan){display:inline-flex;align-items:center;gap:var(--s-2,8px);flex:none}'
    + ':where(.ringkasan-kel .viz-ring){justify-content:flex-start}:where(.ringkasan-kel .aksi-grid){display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-2,8px)}'
    + ':where(.ringkasan-kel .aksi-grid .btn){justify-content:flex-start}'
    + '@media (min-width:1280px){.kelompok-tata > .page-head{grid-column:1 / span 8;grid-row:1}.kelompok-tata > .ringkasan-kel{grid-column:9 / span 4;grid-row:1 / span 2}.kelompok-tata > .isi-kel{grid-column:1 / span 8;grid-row:2}}'
    + ':where(.aksi-kel .baris-aksi){min-height:40px;padding-block:6px;gap:var(--s-2,8px)}:where(.aksi-kel .baris-aksi > svg:first-child){width:16px;height:16px;flex:none;color:var(--muted)}'
    + ':where(.kel-angka){display:flex;align-items:baseline;margin:0}:where(.kel-perkiraan .meta){margin:0}'
    + ':where(.baris-topik .bar-mini){--bar-w:64px}@media (max-width:479px){.baris-topik .bar-mini{display:none}}'
    + ':where(.cta-lengket){transition:opacity var(--dur-sedang,160ms) var(--ease-keluar,ease-out),transform var(--dur-sedang,160ms) var(--ease-keluar,ease-out)}'
    + ':where(.cta-lengket[data-sembunyi]){opacity:0;transform:translateY(8px);pointer-events:none;visibility:hidden}'
    + ':where(.topik-langkah){display:grid;gap:6px;max-width:420px}'
    + ':where(.latih-ringkas){align-self:start}@media (max-width:1279px){.latih-ringkas{display:none}}@media (min-width:1280px){.page > p.latih-tersedia-hp,.tata > .latih-form > .sticky-actions.latih-aksi-hp{display:none}}'
    + ':where(.latih-angka){display:flex;flex-direction:column;gap:2px;margin:0}:where(.latih-chip .chip svg){width:12px;height:12px;margin-left:4px}:where(.latih-tersedia-hp){margin:0}'
    + ':where(.row-meta svg){width:14px;height:14px;vertical-align:-2px}'
    + ':where(.latih-kop){flex-wrap:wrap}:where(.latih-kop > .progress-line){flex:1 1 100%;margin-top:6px}'
    + ':where(.pemisah-ulang){display:grid;gap:var(--s-3,12px)}'
    + ':where(.ulang-progres){display:grid;gap:6px}'
    + ':where(.data-kasus){display:grid}:where(.data-kasus .hasil-baris:last-child){border-bottom:0}'
    + ':where(.narasi-kasus p){max-width:var(--w-teks,68ch);margin:0}:where(.narasi-kasus p[data-potong]){display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}'
    + '.data-lengket > summary{list-style:none}.data-lengket > summary::-webkit-details-marker{display:none}'
    + ':where(.data-lengket > summary .chev-lipat){width:16px;height:16px;flex:none;align-self:center;transition:transform var(--dur-cepat,120ms)}:where(.data-lengket[open] > summary .chev-lipat){transform:rotate(90deg)}'
    + ':where(.narasi-kasus .lead-toggle,.data-kaki .btn){justify-self:start;text-align:left}'
    + ':where(.data-lengket > summary){display:flex;align-items:baseline;gap:4px}:where(.data-lengket .data-kaki){padding-top:var(--s-3,12px);border-top:1px solid var(--line-subtle,var(--line));margin-top:var(--s-2,8px)}'
    + ':where(.langkah-isi .percobaan){margin:0;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.langkah .langkah-judul .ikon-kunci){width:14px;height:14px;vertical-align:-2px;margin-left:6px;color:var(--ink-faint)}'
    + ':where(.langkah > details > summary){display:flex;flex-wrap:wrap;align-items:baseline;gap:4px var(--s-3,12px);list-style:none}:where(.langkah > details > summary::-webkit-details-marker){display:none}'
    + ':where(.langkah > details > summary .langkah-judul){flex:1 1 16ch;min-width:0}:where(.langkah > details > p){margin:var(--s-2,8px) 0 0}'
    + ':where(.petunjuk){display:flex;gap:var(--s-2,8px);align-items:flex-start}:where(.petunjuk > svg){width:18px;height:18px;flex:none;margin-top:2px}'
    + ':where(.buku-besar-kartu .stempel){justify-self:start}'
    + '.pratinjau-topik.pratinjau-statis{position:static;width:auto;padding:0;border:0;background:transparent;animation:none}'
    + ':where(.baris-pratinjau){display:flex;align-items:center;gap:var(--s-1,4px)}:where(.baris-pratinjau > .row-link){flex:1 1 auto;min-width:0}'
    // HP sempit: tombol info menggantikan chevron, kode dan jarak dipersempit agar judul topik tidak terpecah per kata
    + '@media (max-width:479px){.baris-pratinjau > .row-link{gap:var(--s-2,8px)}.baris-pratinjau .row-link .kode{width:1.75rem}.baris-pratinjau .row-kanan .chev{display:none}}'
    + ':where(.page-actions > .aksi-bantu){flex:1 0 100%;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(ul.perubahan-blok){list-style:none;margin:0;padding:0}:where(.perubahan-baris){display:grid;gap:4px}:where(.perubahan-baris p){margin:0}'
    + '@media (max-width:639px){.sect .perubahan-tabel{display:none}}@media (min-width:640px){.sect .perubahan-blok{display:none}}'
    + ':where(.ringkasan-latih .kalibrasi){margin:0}'
    // topik v7: isi dibatasi lebar baca; panel kanan hanya ≥ 1280 (baris status di bawah isi hanya < 1280)
    + ':where(.topik-isi){max-width:var(--w-teks,68ch)}@media (min-width:1280px){.topik-tata > .topik-isi{max-width:none}.topik-isi .prosa,.topik-isi .sect > p{max-width:var(--w-teks,68ch)}.topik-isi > .status-topik{display:none}}'
    + '@media (max-width:1279px){.tata > aside.card.panel-topik{display:none}}:where(.daftar-bagian){display:grid;gap:2px}'
    + ':where(.daftar-bagian a){display:block;padding:6px 10px;border-left:2px solid var(--line);color:var(--muted);text-decoration:none;font-size:.875rem}:where(.daftar-bagian a[aria-current]){border-left-color:var(--primary);color:var(--ink);font-weight:600}'
    + ':where(.nav-topik .nav-kiri){display:flex;align-items:center;gap:8px;min-width:0}:where(.nav-topik .nav-judul){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:767px){.nav-topik .nav-judul{display:none}}'
    + ':where(.status-panel .meta svg,.status-topik .meta svg){width:14px;height:14px;vertical-align:-2px}'
    + '@media (max-width:1279px){.tata > aside.card.antrean-panel{display:none}}:where(.antrean-panel .row-link[aria-current="true"] .row-title){font-weight:600}'
    + '@media (min-width:1280px){.ulang-tata > .kl-8{grid-column:1 / span 8}.ulang-tata > .kl-4{grid-column:9 / span 4}}');

  // ================= BELAJAR / TINGKAT =================
  UKP.views.belajar = p => UKP.views.tingkat(p);
  UKP.views.tingkat = function (params) {
    const s = UKP.store.get(); const tingkat = (params && params.tingkat) || s.profil.tingkat;
    const page = h('div', { class: 'page lebar' });
    const ref = UKP.ref && UKP.ref.ujian; const fmt = ref && ref.format && ref.format.UKP && ref.format.UKP[tingkat];
    const infoT = ref && ref.tingkat && ref.tingkat[tingkat];
    const kel = K.kelompok(tingkat);
    // kop: angka ringkas sebagai pill (menggantikan tiga tile stat); catatan jumlah soal resmi sebagai pill warn
    const sep = () => h('span', { class: 'sep', 'aria-hidden': 'true' }, '·');
    const metaTeks = arr => h('span', { class: 'meta' }, arr.filter(Boolean).map((x, i) => [i ? sep() : null, x]));
    page.appendChild(kop({ pita: true, judul: 'Peta materi · ' + UKP.namaTingkat[tingkat], lead: 'Kelompok materi kumulatif sesuai cakupan UKP. Tingkat B diuji materi A+B, tingkat C diuji A+B+C.',
      meta: [metaTeks([kel.length + ' kelompok', fmt ? fmt.menit + ' mnt ujian' : null, fmt ? '± ' + fmt.soalPerkiraan + ' soal' : null]), fmt ? pill('jumlah soal resmi belum diumumkan', 'warn', 'peringatan') : null] }));
    // pilihan tingkat: segmen dengan subjudul (V6, T08), bukan chip berwarna blok
    page.appendChild(h('div', { class: 'field' }, h('span', { class: 'label', id: 'tingkat-lbl' }, 'Tingkat'),
      h('div', { class: 'seg batas', role: 'group', 'aria-labelledby': 'tingkat-lbl' }, ['A', 'B', 'C'].map(t => h('button', { type: 'button', 'aria-pressed': String(t === tingkat), onclick: () => {
        if (t === tingkat) return;
        UKP.go('tingkat', { tingkat: t }, { replace: true, tanpaFokus: true });
        const b = document.querySelector('#main .seg[aria-labelledby="tingkat-lbl"] button[aria-pressed="true"]'); if (b) UKP.fokus(b);
      } }, 'Tingkat ' + t, h('small', null, t === s.profil.tingkat ? 'target' : K.kelompok(t).length + ' kelompok')))),
      fmt ? h('p', { class: 'bantu' }, 'Batas lulus 60.' + (infoT && infoT.cakupanIzin ? ' Cakupan izin: ' + infoT.cakupanIzin : '')) : null));
    if (tingkat !== s.profil.tingkat) page.appendChild(h('div', { class: 'banner', 'data-tone': 'info' }, ikon('info'), h('div', { class: 'stack-sm' }, h('span', null, 'Target Anda saat ini Tingkat ' + s.profil.tingkat + '.'), h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { s.profil.tingkat = tingkat; UKP.store.save(); UKP.perbaruiTopbar(); UKP.toast('Target diubah ke Tingkat ' + tingkat + '. Progres kelompok kumulatif tetap tersimpan.'); UKP.render(); } }, 'Pindah target ke ' + tingkat)))));
    // kartu kelompok: satu indikator progres (bar beranimasi dari 0); tanpa angka palsu bila sampel < 8 soal
    const list = h('div', { class: 'card-grid dua rata' });
    // DESAIN-V7 P3-07 (K-18): satu definisi penguasaan. dinilai → angka + bar netral + penanda 60; awal → "Perkiraan awal"
    // + bar putus-putus (tidak pernah merah); belum → "belum dinilai". Jumlah dikuasai sebagai kalimat, bukan pecahan "0/11"
    const statusSemua = kel.map(k => statusKelompok(k));
    // §3.3 aturan 2: bila ≥ 50% kelompok yang dinilai di bawah 60, status ditulis sekali di atas daftar dan bar tetap netral;
    // nada hanya untuk pengecualian (kelompok ≥ 60 saat mayoritas rendah, atau kelompok < 60 saat minoritas)
    const dinilaiSemua = kel.map((k, i) => ({ kode: k, st: statusSemua[i] })).filter(x => x.st.tahap === 'dinilai');
    const rendahSemua = dinilaiSemua.filter(x => x.st.skor < 60).sort((a, b) => a.st.skor - b.st.skor);
    const mayoritasRendah = rendahSemua.length > 0 && rendahSemua.length * 2 >= dinilaiSemua.length;
    const nadaKel = st => st.tahap !== 'dinilai' ? null : mayoritasRendah ? (st.skor >= 60 ? 'ok' : null) : (st.skor < 60 ? 'attn' : null);
    for (const [ki, kode] of kel.entries()) {
      const m = UKP.modul[kode]; const nS = K.soalKelompok(kode, tingkat).length; const st = statusSemua[ki];
      const nKuasai = m.topik.filter(t => statusTopik(t.id).label === 'dikuasai').length;
      const nada = nadaKel(st);
      const nilaiEl = st.tahap === 'dinilai' ? h('div', { class: 'kel-nilai' }, h('span', { class: 'angka', 'data-nada': nada }, String(st.skor)), h('span', { class: 'satuan' }, 'dari 100'), barMini(st.skor, { nada, label: 'Skor ' + st.skor + ' dari 100, batas aman 60' }))
        // awal: struktur sama dengan dinilai (angka + satuan + bar sebaris), bar putus-putus; keterangan "perkiraan awal" di meta
        : st.tahap === 'awal' ? h('div', { class: 'kel-nilai', 'data-tahap': 'awal' }, h('span', { class: 'angka' }, String(st.skor)), h('span', { class: 'satuan' }, 'dari 100'), barMini(st.skor, { tahap: 'awal', label: 'Perkiraan awal ' + st.skor + ' dari 100, batas aman 60' }))
        : h('div', { class: 'kel-nilai' }, h('span', { class: 'meta' }, 'belum dinilai'));
      list.appendChild(h('div', { class: 'card klik kartu-kelompok', 'data-tingkat': kode[0] === 'E' ? null : kode[0] },
        h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('a', { class: 'card-link card-title', href: '#kelompok', 'data-go': 'kelompok', 'data-params': JSON.stringify({ kode }) }, m.meta.nama), h('p', { class: 'card-meta' }, 'Diuji di Tingkat ' + m.meta.diujiDi.join(', ')))),
        nilaiEl,
        st.tahap === 'awal' ? metaTeks(['perkiraan awal', st.nDinilai + ' dari ' + st.nTopik + ' topik dinilai', nS + ' soal'])
          : metaTeks([m.topik.length + ' topik', nS + ' soal', nKuasai + ' dari ' + m.topik.length + ' topik dikuasai'])));
    }
    // definisi "dinilai" ditulis sekali di atas grid, hanya bila belum ada kelompok yang dinilai
    // tautan latih satu kali di ringkasan (bukan per kartu): kelompok pertama yang belum dinilai, utamakan yang sudah berperkiraan awal
    const belumDinilai = kel.filter((k, i) => statusSemua[i].tahap !== 'dinilai');
    const kodeLatih = belumDinilai.find(k => statusSemua[kel.indexOf(k)].tahap === 'awal') || belumDinilai[0];
    const tautanLatih = kodeLatih ? UKP.link(['Latih 10 soal ' + kodeLatih, ikon('chevron-kanan', null, true)], 'latih', { kode: kodeLatih, n: 10, mulai: true }, 'tautan-kop') : null;
    const ringkasDef = kel.length && statusSemua.every(x => x.tahap !== 'dinilai') ? ringkasStatus(teksDinilai(), tautanLatih) : null;
    if (!kel.length) list.appendChild(UKP.c.kosong('Konten belum dimuat', 'Berkas modul js/data/mu-*.js belum tersedia untuk tingkat ini.'));
    // kartu masuk ke daftar butir cakupan materi resmi (dokumen KLC/BPPK) untuk tingkat yang sedang dilihat, di atas kartu kelompok
    const kartuCakupan = kartuCakupanTingkat(tingkat); if (kartuCakupan) page.appendChild(kartuCakupan);
    if (ringkasDef) page.appendChild(ringkasDef);
    else if (mayoritasRendah) {
      const x = rendahSemua[0]; const nm = String(K.namaKelompok(x.kode)).split(',')[0].split(' dan ')[0].trim();
      page.appendChild(ringkasStatus(rendahSemua.length + ' dari ' + dinilaiSemua.length + ' kelompok yang dinilai masih di bawah batas 60. Mulai dari ' + x.kode + ' ' + nm + ' (' + x.st.skor + ').',
        UKP.link(['Latih ' + x.kode, ikon('chevron-kanan', null, true)], 'latih', { kode: x.kode, n: 10, mulai: true }, 'tautan-kop')));
    } else if (belumDinilai.length) page.appendChild(ringkasStatus(belumDinilai.length + ' dari ' + kel.length + ' kelompok belum dinilai. ' + teksDinilai(), tautanLatih));
    page.appendChild(list);
    if (UKP.modul.E && tingkat) page.appendChild(h('div', { class: 'card klik' }, h('p', { class: 'eyebrow' }, 'Di luar skor UKP'), h('a', { class: 'card-title card-link', href: '#profesi', 'data-go': 'profesi' }, 'Etika & Ujian Profesi Asosiasi'), h('p', { class: 'small muted' }, 'Kode etik tidak lagi diujikan di UKP; diujikan pada ujian profesi asosiasi (wajib digelar paling lambat 31 Desember 2026).')));
    return page;
  };

  // ================= KELOMPOK =================
  // DESAIN-V6 D.3: kop (Lanjutkan primer + Latih 10) · ringkasan kelompok (cincin bersegmen + aksi lain; panel kanan lengket
  // ≥ 1280, di atas daftar < 1280) · daftar topik .row-link dengan pill status dan pratinjau hover/fokus · CTA lengket
  // "Lanjutkan" baru muncul setelah aksi kop keluar layar (BL-1)
  UKP.views.kelompok = function (params) {
    const kode = params.kode; const m = UKP.modul[kode]; const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    if (!m) return h('div', { class: 'page' }, h('h1', null, 'Kelompok tidak ditemukan'), UKP.link('Kembali ke peta materi', 'tingkat'));
    // v9.5.4 S12: jumlah soal untuk tingkat target, aturan yang sama dengan Peta materi dan Latih (kelompok di luar tingkat target: semua soal)
    const sk = L.skorKelompok(kode); const nS = K.soalKelompok(kode, diTingkat(kode, tingkat) ? tingkat : undefined).length;
    const page = h('div', { class: 'page lebar kelompok' });
    const lanjut = m.topik.find(t => !s.topikDibaca[t.id]);
    // DESAIN-V7 P3-04/D6: langkah berikutnya disebut dengan kode + judul topik (dipotong 40 karakter; teks lengkap di title)
    // tombol pendek "Lanjut ke A1.1" (tidak terpotong); nama topik sebagai .meta di bawah tombol
    const labelLanjut = lanjut ? 'Lanjut ke ' + lanjut.id : '';
    const keLanjut = () => UKP.go('topik', { id: lanjut.id });
    const btnLatih = (primer) => h('button', { type: 'button', class: 'btn' + (primer ? ' btn-primary' : ''), onclick: () => UKP.go('latih', { kode, n: 10, mulai: true }) }, ikon('pen'), 'Latih 10 soal');
    const aksiKop = lanjut ? [h('button', { type: 'button', class: 'btn btn-primary', title: lanjut.id + ' ' + lanjut.judul, onclick: keLanjut }, labelLanjut), btnLatih(false),
      h('p', { class: 'meta lanjut-meta', style: { flexBasis: '100%', margin: '0' } }, 'Berikutnya: ' + lanjut.judul)] : [btnLatih(true)];
    const kopEl = kop({ crumbs: [{ teks: 'Belajar', view: 'tingkat' }, { teks: kode + ' ' + m.meta.nama, pendek: kode }], eyebrow: kode + ' · diuji di ' + m.meta.diujiDi.join(' · '), judul: m.meta.nama, lead: m.meta.tujuan, ringkas: true,
      meta: h('span', { class: 'meta' }, [m.topik.length + ' topik', nS + ' soal', m.kartu.length + ' kartu', m.kasus.length ? m.kasus.length + ' kasus' : null].filter(Boolean).map((x, i) => [i ? h('span', { class: 'sep', 'aria-hidden': 'true' }, '·') : null, x])), aksi: aksiKop });
    // slot tersembunyi (display: none, tidak memakan baris grid/jarak): Profesi (views-alat) menggantinya dengan banner di atas kop
    page.appendChild(h('div', { class: 'kel-slot', hidden: true }));
    // ≥ 1280: kop + daftar di kolom 1–8, panel ringkasan kl-4 sejajar atas dengan kop (baris 1–2); < 1280: kop → ringkasan → daftar
    const tata = h('div', { class: 'tata kelompok-tata' }, kopEl); page.appendChild(tata);
    // ringkasan kelompok: cincin bersegmen per topik (tanpa angka palsu: segmen/total "–" bila sampel < 8) + legenda tepat di bawahnya
    // label pusat "n% · k/N dinilai": angka besar = total kelompok, keterangan kecil = topik yang sudah punya angka (≥ 8 soal)
    const nDinilai = sk.topik.filter(r => r.p.n >= 8).length;
    const stK = statusKelompok(kode);
    const cincinKel = stK.tahap !== 'dinilai' ? h('div', { class: 'stack-sm kel-perkiraan' },
        h('p', { class: 'kel-angka' }, h('span', { class: 'angka' }, stK.tahap === 'awal' && stK.skor != null ? String(stK.skor) : '—'), stK.tahap === 'awal' ? h('span', { class: 'satuan' }, 'perkiraan awal') : null),
        stK.tahap === 'awal' && stK.skor != null ? barMini(stK.skor, { tahap: 'awal', label: 'Perkiraan awal ' + stK.skor + ' dari 100, batas aman 60' }) : null,
        h('p', { class: 'meta' }, stK.teks), h('p', { class: 'meta' }, teksDinilai()))
      : viz('ringSegmen', { segmen: sk.topik.map(r => ({ nilai: r.p.n >= 8 ? r.p.skor : null, label: r.topik.judul })), total: sk.n >= 8 ? sk.skor : null, label: 'Penguasaan ' + kode, netral: true, tanpaPersen: true, hitungDinilai: false, labelDalam: 'dari 100', ukuran: 120, tebal: 10 },
      () => ringSkor(sk.skor, sk.n, 'Penguasaan ' + kode, { besar: true }));
    // aksi lain: baris 40 px bernama dengan isinya ("Dek kartu · 72 kartu"), bukan kisi tombol
    const barisAksi = (teks, nIkon, view, p) => h('a', { class: 'row-link baris-aksi', href: UKP.href ? UKP.href(view, p) : '#' + view, 'data-go': view, 'data-params': JSON.stringify(p) }, ikon(nIkon, null, true), h('span', { class: 'row-isi' }, h('span', { class: 'row-title' }, teks)), ikon('chevron-kanan', 'chev', true));
    const nLembar = Array.isArray(m.meta.lembarRingkas) ? m.meta.lembarRingkas.length : 0;
    const aksiLain = [
      barisAksi('Simulasi 40 soal', 'sim', 'simulasi', { format: 'USKP', kode }),
      barisAksi('Dek kartu · ' + m.kartu.length + ' kartu', 'dek', 'ulang', { kode }),
      m.kasus.length ? barisAksi('Studi kasus · ' + m.kasus.length, 'kasus', 'kasus', { kode }) : null,
      nLembar && adaView('lembar') ? barisAksi('Lembar angka · ' + nLembar + ' angka', 'lembar', 'lembar', { kode }) : null].filter(Boolean);
    tata.appendChild(h('aside', { class: 'card ringkas ringkasan-kel lengket', 'aria-labelledby': 'ringkasan-kel-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'ringkasan-kel-j' }, 'Penguasaan ' + kode), stK.tahap === 'dinilai' ? h('p', { class: 'card-meta' }, stK.teks) : null)),
      cincinKel,
      kode !== 'E' && !diTingkat(kode, tingkat) ? h('p', { class: 'meta' }, kode + ' di luar Tingkat ' + tingkat + ' (target Anda). Latihan, kartu, studi kasus, dan simulasi tetap bisa dikerjakan; hasilnya tidak dihitung ke kesiapan tingkat.') : null,
      aksiLain.length ? h('div', { class: 'list-rows aksi-kel' }, aksiLain) : null));
    // daftar topik: kode mono, judul, meta (pill jenis · menit · progres teks), kanan pill status + chevron
    const kasar = cocok('(pointer: coarse)');
    // DESAIN-V7 P3-04 (D2): status per baris hanya untuk pengecualian (dikuasai/perlu disegarkan); sampel ditulis sekali
    // sebagai bar mini netral + teks ("2 dari 8 soal untuk dinilai"), tanpa pill "dikenal" yang berulang di setiap baris
    const rows = m.topik.map((t, i) => {
      const st = statusTopik(t.id); const jenis = (t.jenisDominan || [])[0];
      const metaKiri = [jenis ? JENIS_LABEL[jenis] || jenis : null, '± ' + (t.estimasiMenit || 10) + ' mnt', s.topikDibaca[t.id] ? 'dibaca' : null].filter(Boolean);
      const baris = h('a', { class: 'row-link baris-topik', href: '#topik', 'data-go': 'topik', 'data-params': JSON.stringify({ id: t.id }) },
        h('span', { class: 'kode' }, String(i + 1).padStart(2, '0')),
        h('span', { class: 'row-isi' }, h('span', { class: 'row-title' }, t.judul),
          h('span', { class: 'meta' }, metaKiri.map((x, j) => [j ? h('span', { class: 'sep', 'aria-hidden': 'true' }, '·') : null, x]), h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), st.teksSampel)),
        h('span', { class: 'row-kanan' }, st.nSoal ? barMini(st.tahap === 'dinilai' ? st.skor : Math.round(st.nSoal / st.butuh * 100), { tahap: st.tahap === 'dinilai' ? 'dinilai' : 'awal', label: st.tahap === 'dinilai' ? 'Skor ' + st.skor + ' dari 100, batas aman 60' : st.teksSampel }) : null, pillLabel(st), ikon('chevron-kanan', 'chev', true)));
      return kasar ? h('div', { class: 'baris-pratinjau' }, baris, UKP.c.tombolPratinjau(t)) : baris;
    });
    const daftar = h('div', { class: 'list-rows daftar-topik' }, rows);
    pasangPratinjau(daftar);
    const isi = h('div', { class: 'stack isi-kel' }, sect({ id: 'topik-kel-j', judul: 'Topik dalam kisi-kisi', meta: m.topik.length + ' topik', isi: daftar }));
    // perubahan
    if (m.meta.perubahanTerbaru && m.meta.perubahanTerbaru.length) {
      const dasarUbah = c => c.dasar + (c.berlakuSejak ? ' · ' + UKP.fmt.tanggal(c.berlakuSejak) : '');
      const tabelUbah = tabelWrap('Perubahan 2024–2026 ' + kode, h('table', { class: 'tabel' }, h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Sebelum'), h('th', { scope: 'col' }, 'Sesudah'), h('th', { scope: 'col' }, 'Dasar'))), h('tbody', null, m.meta.perubahanTerbaru.map(c => h('tr', null, h('td', { class: 'muted' }, c.sebelum), h('td', null, c.sesudah), h('td', { class: 'tiny mono' }, dasarUbah(c)))))));
      tabelUbah.classList.add('perubahan-tabel');
      // HP (< 640): tiap perubahan satu blok "Sebelum → Sesudah" dengan dasar di bawahnya (tanpa tabel 3 kolom sempit)
      const blokUbah = h('ul', { class: 'list-rows perubahan-blok', 'aria-label': 'Perubahan 2024–2026 ' + kode }, m.meta.perubahanTerbaru.map(c => h('li', { class: 'perubahan-baris' },
        h('p', { class: 'small muted' }, h('span', { class: 'visually-hidden' }, 'Sebelum: '), c.sebelum),
        h('p', null, h('span', { 'aria-hidden': 'true' }, '→ '), h('span', { class: 'visually-hidden' }, 'Sesudah: '), c.sesudah),
        h('p', { class: 'tiny muted mono' }, h('span', { class: 'visually-hidden' }, 'Dasar: '), dasarUbah(c)))));
      isi.appendChild(sect({ judul: 'Perubahan 2024–2026', meta: m.meta.perubahanTerbaru.length + ' perubahan', isi: [tabelUbah, blokUbah] }));
    }
    if ((m.meta.dasarHukumUtama || []).length) isi.appendChild(sect({ judul: 'Dasar hukum utama', isi: h('ul', { class: 'dasar-hukum' }, m.meta.dasarHukumUtama.map(d => h('li', null, h('span', { class: 'pasal' }, d)))) }));
    if (m.tips && m.tips.length) isi.appendChild(sect({ judul: 'Tips strategi', isi: h('ul', { class: 'bersih small' }, m.tips.map(t => h('li', null, t.teks, ' ', t.tagSebab ? h('span', { class: 'pill tag-sebab', 'data-tone': 'warn' }, UKP.tagLabel(t.tagSebab)) : null))) }));
    tata.appendChild(isi);
    // CTA lengket "Lanjutkan": tampil (naik + pudar 160 ms) hanya setelah aksi kop keluar dari layar
    if (lanjut) {
      const cta = h('div', { class: 'sticky-actions cta-lengket', 'data-sembunyi': '' }, h('button', { type: 'button', class: 'btn btn-primary', tabindex: '-1', title: lanjut.id + ' ' + lanjut.judul, onclick: keLanjut }, labelLanjut));
      page.appendChild(cta);
      const aksiEl = kopEl.querySelector('.page-actions') || kopEl;
      const atur = tampil => { cta.toggleAttribute('data-sembunyi', !tampil); const b = cta.querySelector('button'); b.tabIndex = tampil ? 0 : -1; if (tampil) b.removeAttribute('aria-hidden'); else b.setAttribute('aria-hidden', 'true'); };
      atur(false);
      if ('IntersectionObserver' in window) { const io = new IntersectionObserver(en => { const e = en[0]; if (!cta.isConnected) { io.disconnect(); return; } atur(!e.isIntersecting && e.boundingClientRect.top < 0); }); io.observe(aksiEl); }
      else atur(true);
    }
    return page;
  };

  // ================= TOPIK =================
  // DESAIN-V7 P3-06: kop ringkas (eyebrow kode · kelompok, meta satu baris, pill hanya untuk pengecualian, stepper tanpa teks);
  // semua bagian .sect berjudul h2 sans, satu .sect.ganda untuk "Cek pemahaman"; ≥ 1280 panel lengket "Di halaman ini"
  // (tautan bagian aktif, status, Cek pemahaman, Tandai dibaca); navigasi lengket "‹ Sebelumnya" · "Berikutnya: A1.3 …".
  // Satu primer: Cek pemahaman selama cek belum tuntas, sesudahnya "Berikutnya".
  UKP.views.topik = function (params) {
    const t = K.topik(params.id); const s = UKP.store.get();
    if (!t) return h('div', { class: 'page' }, h('h1', null, 'Topik tidak ditemukan'), UKP.link('Kembali', 'tingkat'));
    const m = UKP.modul[t.kode]; const page = h('div', { class: 'page lebar topik' });
    const i = m.topik.indexOf(t); const prev = m.topik[i - 1], next = m.topik[i + 1];
    // penanda di samping judul: hanya pill pengecualian dari statusTopik (dikuasai / perlu disegarkan)
    const penanda = h('span', { class: 'penanda-status', style: { display: 'inline-flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' } });
    function gambarPenanda() { const st = statusTopik(t.id); const pl = pillLabel(st); penanda.replaceChildren(...(pl ? [h('span', { class: 'visually-hidden' }, 'Status topik: '), pl] : [])); }
    gambarPenanda();
    const langkah = h('div', { class: 'topik-langkah' },
      h('div', { class: 'stepper-h', role: 'img', 'aria-label': 'Topik ' + (i + 1) + ' dari ' + m.topik.length }, m.topik.map(x => h('span', { class: x === t ? 'kini' : s.topikDibaca[x.id] ? 'on' : null, title: x.urut + '. ' + x.judul }))));
    const soalTopik = soalCekTopik(t);
    const nCek = nCekDari(soalTopik);
    const cekTuntas = () => !!s.cekSelesai[t.id] || !nCek;
    const cek = h('section', { class: 'sect ganda', id: 'topik-cek', 'aria-labelledby': 'cek-judul' }, h('div', { class: 'sect-head' }, h('h2', { id: 'cek-judul' }, 'Cek pemahaman'), h('span', { class: 'meta' }, nCek + ' soal')));
    const keCek = () => { gulirKe(cek); const b = cek.querySelector('.mulai-cek') || cek.querySelector('button, h3'); if (b) UKP.fokus(b); };
    const namaKel = K.namaKelompok(t.kode);
    // remah dari UKP.c.kop (K-13) agar sama dengan halaman lain: "Belajar › A1" di desktop, "‹ A1" di HP; disisipkan ke kop ringkasTopik
    const crumbTopik = (() => { try { return UKP.c.kop({ crumbs: [{ teks: 'Belajar', view: 'tingkat' }, { teks: t.kode + ' ' + namaKel, pendek: t.kode, view: 'kelompok', params: { kode: t.kode } }, { teks: t.judul }], judul: t.judul }).querySelector('.crumb'); } catch (e) { return null; } })();
    const ringkas = UKP.c.ringkasTopik(t, { penanda, sisipKop: langkah, kartuPoin: { ada: (poin, i) => kartuPoinAda(t, i, poin), buat: (poin, i) => kartuDariPoin(poin, t, i) } });
    // kop: eyebrow kode + kelompok pendek, meta satu baris (menit · jenis · posisi)
    if (crumbTopik) { const kopT = ringkas.querySelector('.page-head-teks') || ringkas.querySelector('.page-head'); if (kopT) kopT.insertBefore(crumbTopik, kopT.firstChild); else page.appendChild(crumbTopik); }
    const eb = ringkas.querySelector('.page-head .eyebrow'); if (eb) { eb.textContent = t.id + ' · ' + pendek(namaKel, 32); eb.title = t.id + ' · ' + namaKel; }
    const metaKop = ringkas.querySelector('.page-head .page-meta');
    const metaTeks = ['± ' + (t.estimasiMenit || 10) + ' mnt'].concat((t.jenisDominan || []).map(j => JENIS_LABEL[j] || j), 'Topik ' + (i + 1) + ' dari ' + m.topik.length);
    if (metaKop) metaKop.replaceChildren(h('span', { class: 'meta' }, metaTeks.map((x, k) => [k ? h('span', { class: 'sep', 'aria-hidden': 'true' }, '·') : null, x])));
    // status akurasi + dibaca: < 1280 sebagai baris di bawah isi; ≥ 1280 di panel kanan (satu yang tampil)
    const barisStatus = h('div', { class: 'between status-topik' });
    const statusPanel = h('div', { class: 'stack-sm status-panel' });
    // angka yang sama dengan status kop (K-18): skor tertimbang, bukan akurasi mentah
    const teksAkurasi = () => { const st = statusTopik(t.id); if (!st || !st.nSoal) return 'Belum ada jawaban untuk topik ini.'; const ts = String(st.teksSampel || ''); return ts.charAt(0).toUpperCase() + ts.slice(1) + ' (30 hari)'; };
    const tandaiDibaca = () => { s.topikDibaca[t.id] = Date.now(); UKP.store.save(); gambarStatus(); gambarPenanda(); const a = barisStatus.querySelector('.akurasi-topik'); if (a && a.offsetParent) UKP.fokus(a); else { const b = statusPanel.querySelector('.akurasi-topik'); if (b) UKP.fokus(b); } };
    function gambarStatus() {
      const dibacaEl = () => s.topikDibaca[t.id] ? h('span', { class: 'meta' }, ikon('check', null, true), ' Dibaca ' + UKP.fmt.tanggal(U.iso(new Date(s.topikDibaca[t.id]))))
        : h('button', { type: 'button', class: 'btn btn-sm', onclick: tandaiDibaca }, ikon('check', null, true), 'Tandai dibaca');
      barisStatus.replaceChildren(h('span', { class: 'meta akurasi-topik' }, teksAkurasi()), dibacaEl());
      statusPanel.replaceChildren(h('p', { class: 'meta akurasi-topik', style: { margin: 0 } }, teksAkurasi()),
        nCek ? h('button', { type: 'button', class: 'btn btn-block' + (cekTuntas() ? '' : ' btn-primary'), onclick: () => { keCek(); const b = cek.querySelector('.mulai-cek'); if (b) b.click(); } }, cekTuntas() ? 'Ulangi cek pemahaman' : 'Cek pemahaman · ' + nCek + ' soal') : null,
        dibacaEl());
    }
    const butirResmi = bagianCakupanTopik(t);
    const isi = h('div', { class: 'stack kl-8 topik-isi' }, ringkas, barisStatus, butirResmi, cek);
    // panel "Di halaman ini" (≥ 1280): tautan bagian dengan penanda bagian aktif
    const bagian = [['topik-ringkasan', 'Ringkasan'], ['topik-angka', 'Angka kunci'], ['topik-contoh', 'Contoh'], ['topik-jebakan', 'Jebakan'], ['topik-dasar', 'Dasar hukum'], ['topik-cek', 'Cek pemahaman']]
      .filter(([id]) => id === 'topik-cek' || ringkas.querySelector('#' + id));
    const tautBagian = bagian.map(([id, teks]) => h('a', { href: '#' + id, class: 'tautan-bagian', 'data-bagian': id, onclick: e => { e.preventDefault(); const el = id === 'topik-cek' ? cek : ringkas.querySelector('#' + id); if (el) { gulirKe(el); const h2 = el.querySelector('h2'); if (h2) UKP.fokus(h2); } } }, teks));
    const panel = h('aside', { class: 'card ringkas kl-4 lengket panel-topik', 'aria-labelledby': 'panel-topik-j' },
      h('h2', { class: 'card-title', id: 'panel-topik-j' }, 'Di halaman ini'),
      h('nav', { class: 'daftar-bagian', 'aria-label': 'Bagian topik' }, tautBagian), statusPanel);
    gambarStatus();
    page.appendChild(h('div', { class: 'tata topik-tata' }, isi, panel));
    let io = null;
    if ('IntersectionObserver' in window && cocok('(min-width: 1280px)')) {
      const aktif = new Set();
      io = new IntersectionObserver(en => {
        if (!panel.isConnected) { io.disconnect(); return; }
        en.forEach(e => { if (e.isIntersecting) aktif.add(e.target.id); else aktif.delete(e.target.id); });
        const pertama = bagian.map(x => x[0]).find(id => aktif.has(id));
        tautBagian.forEach(a => { if (a.dataset.bagian === pertama) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
      }, { rootMargin: '-15% 0px -60% 0px' });
      bagian.forEach(([id]) => { const el = id === 'topik-cek' ? cek : ringkas.querySelector('#' + id); if (el) io.observe(el); });
    }
    const area = h('div', null); cek.appendChild(area);
    // v9.5: soal cek dipilih lewat L.urutBank (belum dipakai dulu, satu keluarga satu soal)
    const ambilCek = () => L.urutBank ? L.urutBank(soalTopik, 5) : U.ambil(soalTopik, 5);
    let antrean = ambilCek(), idx = 0, benar = 0;
    // navigasi topik lengket dilepas selama soal cek tampil, agar tidak menimpa tombol Periksa/Lanjut yang juga lengket
    const lepasNav = lepas => { if (navTopik) navTopik.style.position = lepas ? 'static' : ''; };
    function gambarCek() {
      area.innerHTML = ''; lepasNav(idx < antrean.length && antrean.length > 0);
      if (!antrean.length) { area.appendChild(UKP.c.kosong('Belum ada soal untuk topik ini', 'Latih soal kelompok ini sebagai gantinya.', h('button', { class: 'btn btn-sm', onclick: () => UKP.go('latih', { kode: t.kode, n: 10, mulai: true }) }, 'Latih soal ' + t.kode))); return; }
      if (idx >= antrean.length) {
        const lulus = benar >= Math.ceil(antrean.length * .8); if (lulus) { s.cekSelesai[t.id] = Date.now(); UKP.store.save(); }
        // status di kop, panel, dan navigasi diperbarui di tempat (BL-3)
        gambarPenanda(); gambarStatus(); aturNav();
        const tawarBaca = lulus && !s.topikDibaca[t.id] ? h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: e => { s.topikDibaca[t.id] = Date.now(); UKP.store.save(); gambarPenanda(); gambarStatus(); e.currentTarget.replaceWith(h('span', { class: 'meta' }, ikon('check', null, true), ' Ditandai dibaca')); } }, 'Tandai dibaca juga') : null;
        // langkah berikutnya bernama: lulus → topik berikutnya (primer di navigasi); belum → latih topik ini
        const hasilCek = h('div', { class: 'card' + (lulus ? ' sorot' : '') }, h('h3', null, benar + ' dari ' + antrean.length + ' benar'), h('p', null, lulus ? 'Cek pemahaman tuntas.' + (next ? ' Lanjut ke ' + next.id + ' ' + next.judul + '.' : '') : 'Baca ulang ringkasan dan jebakan umum, lalu ulangi.'), lulus ? UKP.c.stempel('TUNTAS', 'ok', { besar: true, diraih: true }) : null,
          h('div', { class: 'btn-row' }, h('button', { class: 'btn' + (lulus ? '' : ' btn-primary'), onclick: () => UKP.go('latih', { kode: t.kode, topik: t.id, n: 10, mulai: true }) }, 'Latih ' + nLatihDari(soalTopik) + ' soal ' + t.id), h('button', { class: 'btn' + (lulus ? ' btn-ghost btn-text' : ''), onclick: () => { antrean = ambilCek(); idx = 0; benar = 0; gambarCek(); } }, 'Ulangi dengan soal lain'), tawarBaca));
        area.appendChild(hasilCek); UKP.fokus(hasilCek.querySelector('h3')); return;
      }
      const judulCek = h('h3', { class: 'visually-hidden' }, 'Cek pemahaman, soal ' + (idx + 1) + ' dari ' + antrean.length);
      area.append(judulCek, UKP.c.soal(antrean[idx], { nomor: (idx + 1) + '/' + antrean.length, konteks: 'cek', onLanjut: b => { if (b) benar++; idx++; gambarCek(); } }));
      UKP.fokus(judulCek);
    }
    const mulaiBtn = h('button', { type: 'button', class: 'btn mulai-cek' + (cekTuntas() ? '' : ' btn-primary'), onclick: () => { gambarCek(); mulaiBtn.remove(); } }, cekTuntas() && nCek ? 'Ulangi cek pemahaman · ' + nCek + ' soal' : 'Mulai cek pemahaman · ' + nCek + ' soal');
    area.appendChild(mulaiBtn);
    // navigasi antar topik, lengket di bawah: "‹ Sebelumnya" (+ judul pendek) · "Berikutnya: A1.3 Judul" (dipotong; lengkap di title)
    const sebelum = prev ? h('div', { class: 'nav-kiri' }, (a => { a.title = prev.id + ' ' + prev.judul; a.append(ikon('back', null, true), 'Sebelumnya', h('span', { class: 'visually-hidden' }, ': ' + prev.id + ' ' + prev.judul)); return a; })(UKP.link('', 'topik', { id: prev.id }, 'btn')), h('span', { class: 'meta nav-judul', 'aria-hidden': 'true' }, pendek(prev.judul, 28)))
      : UKP.link([ikon('back', null, true), 'Daftar topik ' + t.kode], 'kelompok', { kode: t.kode }, 'btn btn-ghost btn-text');
    const tautBerikut = next ? (a => { a.title = next.id + ' ' + next.judul; a.append('Berikutnya: ' + next.id + ' ' + pendek(next.judul, 30), ikon('chevron-kanan', null, true)); return a; })(UKP.link('', 'topik', { id: next.id }, 'btn btn-berikut'))
      : UKP.link(['Kembali ke ' + t.kode, ikon('chevron-kanan', null, true)], 'kelompok', { kode: t.kode }, 'btn btn-berikut');
    const navTopik = h('nav', { class: 'sticky-actions nav-topik', 'aria-label': 'Navigasi antar topik ' + t.kode }, sebelum, h('span', { 'aria-hidden': 'true' }), tautBerikut);
    // ≥ 1280 primer cek ada di panel kanan, sehingga tombol di akhir halaman menjadi sekunder (satu primer per layar)
    function aturNav() { tautBerikut.classList.toggle('btn-primary', cekTuntas()); mulaiBtn.classList.toggle('btn-primary', !cekTuntas() && !cocok('(min-width: 1280px)')); }
    aturNav();
    pasangPratinjau(navTopik);
    page.appendChild(navTopik);
    // bar baca 2 px di bawah topbar: proporsi gulir halaman (statis bila gerak dikurangi lewat CSS)
    const barBaca = h('div', { class: 'bar-baca', 'aria-hidden': 'true' }, h('span'));
    page.appendChild(barBaca);
    let raf = 0;
    const onGulir = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; const de = document.documentElement; const maks = Math.max(1, de.scrollHeight - de.clientHeight); barBaca.firstChild.style.setProperty('--p', String(Math.round(U.clamp(window.scrollY / maks, 0, 1) * 1000) / 10)); }); };
    window.addEventListener('scroll', onGulir, { passive: true }); requestAnimationFrame(onGulir);
    // dari pratinjau "Cek 5 soal": gulir ke cek dan fokus tombol mulai
    if (params.cek && nCek) requestAnimationFrame(() => requestAnimationFrame(() => { if (cek.isConnected) keCek(); }));
    return { node: page, unmount: () => { window.removeEventListener('scroll', onGulir); if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); } };
  };

  // ================= CAKUPAN MATERI RESMI (dokumen KLC/BPPK) =================
  // Data UKP.cakupanResmi (js/data/cakupan.js): tingkat → mata ujian → subjek → butir bertingkat (nomor tercetak, topik, cakupan).
  // Status butir daun dihitung dari progres pengguna (satu definisi untuk semua tampilan):
  //   topik "disentuh" = ditandai dibaca, cek pemahaman tuntas, atau pernah menjawab minimal satu soalnya (semua waktu;
  //   jawaban kosong di simulasi tidak dihitung);
  //   'sudah'  = cakupan aplikasi bukan 'belum' dan semua topik terpetanya sudah disentuh;
  //   'tanpa'  = cakupan 'belum' (belum ada materi khusus di aplikasi; tidak pernah dihitung sudah dipelajari);
  //   'belum'  = selain itu.
  // Jumlah "butir" = butir daun (butir tanpa sub-butir), sama dengan hitungan laporan celah.
  const CAKUPAN_TINGKAT = ['A', 'B', 'C'];
  const LABEL_STATUS_BUTIR = { sudah: 'sudah dipelajari', belum: 'belum dipelajari', tanpa: 'belum tercakup' };
  const DEFINISI_DIPELAJARI = 'Sudah dipelajari: semua topik yang dipetakan ke butir itu sudah Anda tandai dibaca, tuntas cek pemahamannya, atau pernah Anda kerjakan soalnya. Belum tercakup: aplikasi belum punya materi khusus untuk butir itu.';
  function topikDisentuh() {
    const s = UKP.store.get(); const set = new Set();
    for (const k in s.topikDibaca || {}) if (s.topikDibaca[k]) set.add(k);
    for (const k in s.cekSelesai || {}) if (s.cekSelesai[k]) set.add(k);
    for (const j of s.jawaban || []) { if (!j || !j.topik || (j.konteks === 'simulasi' && (!j.opsi || j.opsi === '-' || j.opsi === 'kosong'))) continue; set.add(j.topik); }
    return set;
  }
  const statusButir = (b, sentuh) => b.cakupan === 'belum' ? 'tanpa' : (b.topik || []).length && b.topik.every(id => sentuh.has(id)) ? 'sudah' : 'belum';
  const adaAnak = b => Array.isArray(b.anak) && b.anak.length > 0;
  // telusuri butir bertingkat: cb(butir, jalur), jalur = leluhur + butir itu sendiri
  function telusuriButir(arr, cb, jalur) { for (const b of arr || []) { const j = (jalur || []).concat(b); cb(b, j); telusuriButir(b.anak, cb, j); } }
  // penanda tercetak per kedalaman: 1. · a. · 1)
  const penandaButir = (nomor, dalam) => nomor == null || nomor === '' ? '' : String(nomor) + (dalam >= 2 ? ')' : '.');
  const nomorJalur = jalur => jalur.map(b => b.nomor).filter(x => x != null && x !== '').join('.');
  const teksJalur = jalur => jalur.map(b => b.teks).reduce((a, t) => !a ? t : a + (/:\s*$/.test(a) ? ' ' : ' › ') + t, '');
  const modulMu = m => [m.kelompok].concat(m.kelompokLain || []);
  function hitungCakupan(t, sentuh) {
    const C = UKP.cakupanResmi; const T = C && C.tingkat && C.tingkat[t];
    const r = { mataUjian: 0, butir: 0, sudah: 0, belum: 0, tanpa: 0, sebagian: 0, modul: [], per: [] };
    if (!T) return r;
    sentuh = sentuh || topikDisentuh(); const modul = new Set();
    r.mataUjian = T.mataUjian.length;
    for (const m of T.mataUjian) {
      modulMu(m).forEach(k => modul.add(k));
      const x = { butir: 0, sudah: 0, belum: 0, tanpa: 0, sebagian: 0 };
      for (const s of m.subjek) telusuriButir(s.butir, b => { if (adaAnak(b)) return; x.butir++; x[statusButir(b, sentuh)]++; if (b.cakupan === 'sebagian') x.sebagian++; });
      r.per.push(x); for (const k of ['butir', 'sudah', 'belum', 'tanpa', 'sebagian']) r[k] += x[k];
    }
    r.modul = (UKP.urutanKelompok || Array.from(modul)).filter(k => modul.has(k));
    return r;
  }
  // indeks balik topik → butir daun resmi { tingkat, mu, subjek, butir, jalur } (dibangun sekali per data)
  let indeksCakupan = null;
  function indeksTopikCakupan() {
    const C = UKP.cakupanResmi; if (!C || !C.tingkat) return Object.create(null);
    if (indeksCakupan && indeksCakupan.sumber === C) return indeksCakupan.peta;
    const peta = Object.create(null);
    for (const t of CAKUPAN_TINGKAT) { const T = C.tingkat[t]; if (!T) continue;
      for (const m of T.mataUjian) for (const s of m.subjek) telusuriButir(s.butir, (b, jalur) => {
        if (adaAnak(b)) return;
        const e = { tingkat: t, mu: m, subjek: s.nama, butir: b, jalur };
        for (const id of new Set(b.topik || [])) (peta[id] = peta[id] || []).push(e);
      });
    }
    indeksCakupan = { sumber: C, peta }; return peta;
  }
  // v9.5 butir daun per ID → { id, tingkat, mu, subjek, butir, jalur, nomor, teks } (saringan butir di Latih, halaman Bank soal); null bila tidak ada
  let indeksIdButir = null;
  function infoButir(id) {
    const C = UKP.cakupanResmi; if (!C || !C.tingkat || typeof id !== 'string') return null;
    if (!indeksIdButir || indeksIdButir.sumber !== C) {
      const peta = new Map();
      for (const t of CAKUPAN_TINGKAT) { const T = C.tingkat[t]; if (!T) continue;
        for (const m of T.mataUjian) for (const sj of m.subjek) telusuriButir(sj.butir, (b, jalur) => {
          if (adaAnak(b) || typeof b.id !== 'string') return;
          peta.set(b.id, { id: b.id, tingkat: t, mu: m, subjek: sj.nama, butir: b, jalur, nomor: nomorJalur(jalur), teks: teksJalur(jalur) });
        });
      }
      indeksIdButir = { sumber: C, peta };
    }
    return indeksIdButir.peta.get(id) || null;
  }
  // v9.5.4 C-4: label aksesibilitas tombol Latih di Cakupan, seperti Bank soal: "Latih butir 7.c: <nama butir>" (tanpa nomor: ID butir).
  // Bila dua butir satu tingkat tetap berlabel sama (teks dan nomor sama di subjek berbeda), nama subjek ditambahkan sebagai pembeda.
  const labelDasarButir = (b, info) => 'Latih butir ' + ((info && info.nomor) || b.id) + ': ' + pendek(b.teks, 60);
  const labelGanda = new Map();   // tingkat → Set label dasar yang dipakai lebih dari satu butir daun
  function gandaTingkat(t) {
    const C = UKP.cakupanResmi; const T = C && C.tingkat && C.tingkat[t]; if (!T) return new Set();
    const ada = labelGanda.get(t); if (ada && ada.sumber === C) return ada.set;
    const hit = new Map();
    for (const m of T.mataUjian) for (const sj of m.subjek) telusuriButir(sj.butir, b => { if (adaAnak(b) || typeof b.id !== 'string') return; const l = labelDasarButir(b, infoButir(b.id)); hit.set(l, (hit.get(l) || 0) + 1); });
    const set = new Set([...hit].filter(([, n]) => n > 1).map(([l]) => l)); labelGanda.set(t, { sumber: C, set }); return set;
  }
  function labelLatihButir(b, t) {
    const info = infoButir(b.id); const l = labelDasarButir(b, info);
    return gandaTingkat(t).has(l) && info && info.subjek ? l + ' · ' + info.subjek : l;
  }
  UKP.cakupan = { topikDisentuh, status: statusButir, ringkas: (t, sentuh) => hitungCakupan(t, sentuh), indeksTopik: indeksTopikCakupan, definisi: DEFINISI_DIPELAJARI, butir: infoButir, telusuri: telusuriButir, labelLatih: labelLatihButir };
  // titik status (bentuk + warna + teks; warna tidak menjadi satu-satunya penanda)
  // DESAIN-V7 P3-09: titik bernada hanya untuk butir yang belum dipelajari; butir yang sudah cukup bertanda cek redup
  const titikStatus = st => h('span', { class: 'cakupan-status', 'data-status': st, 'data-v7': '' },
    st === 'sudah' ? ikon('check', null, true) : st === 'belum' ? h('span', { class: 'titik-nada', 'aria-hidden': 'true' }) : null, LABEL_STATUS_BUTIR[st]);
  // per butir (§3.3, simetris): status mayoritas sudah/belum ditulis sekali di .ringkas-status dan per butir hanya dibacakan;
  // tanda tampil pada butir minoritas dan pada butir belum tercakup. Jumlah per kelompok ada di kepala ("3 dari 14 dipelajari").
  const titikButir = (st, mayor) => st === mayor ? h('span', { class: 'visually-hidden' }, LABEL_STATUS_BUTIR[st]) : titikStatus(st);
  // mayoritas di antara butir yang tercakup; seri dihitung "belum" (keadaan awal)
  const mayoritasButir = r => r.sudah * 2 > r.butir - r.tanpa ? 'sudah' : 'belum';
  const teksMayoritas = (r, mayor) => {
    const dapat = r.butir - r.tanpa; const n = mayor === 'sudah' ? r.sudah : dapat - r.sudah;
    const lain = [n < dapat ? 'yang ' + LABEL_STATUS_BUTIR[mayor === 'sudah' ? 'belum' : 'sudah'] : null, r.tanpa ? 'yang belum tercakup' : null].filter(Boolean);
    return (n === dapat ? 'Semua ' + dapat : n + ' dari ' + dapat) + ' butir tercakup ' + LABEL_STATUS_BUTIR[mayor] + '.'
      + (lain.length ? ' Tanda hanya ada pada butir ' + lain.join(' dan ') + '.' : '');
  };
  const legendaStatus = () => h('ul', { class: 'cakupan-legenda', 'aria-label': 'Arti penanda status' }, ['sudah', 'belum', 'tanpa'].map(st => h('li', null, titikStatus(st))));
  // bagian kecil di halaman topik: butir resmi yang dipetakan ke topik ini (dikelompokkan per tingkat)
  function bagianCakupanTopik(t) {
    const daftar = indeksTopikCakupan()[t.id] || []; if (!daftar.length) return null;
    const perT = CAKUPAN_TINGKAT.map(x => [x, daftar.filter(e => e.tingkat === x)]).filter(x => x[1].length);
    return h('details', { class: 'lipat cakupan-topik' },
      h('summary', null, h('span', { class: 'cakupan-topik-kop' }, h('span', null, 'Butir cakupan resmi untuk topik ini'), h('span', { class: 'row-meta' }, pill(daftar.length + ' butir'), perT.map(([x, d]) => pill(x + ' ' + d.length, 'nila'))))),
      h('div', { class: 'stack-sm' },
        h('p', { class: 'small muted' }, 'Butir dari dokumen cakupan materi resmi KLC/BPPK yang dipetakan ke ' + t.id + '. Nomor mengikuti penomoran tercetak.'),
        perT.map(([x, d]) => h('div', { class: 'stack-sm' },
          h('div', { class: 'between' }, h('h3', { class: 'eyebrow' }, 'Tingkat ' + x), UKP.c.tautanKop('Daftar Tingkat ' + x, 'cakupan', { tingkat: x }, 'Buka daftar cakupan resmi Tingkat ' + x)),
          h('ul', { class: 'bersih small cakupan-balik' }, d.map(e => {
            const no = nomorJalur(e.jalur);
            return h('li', null, h('span', { class: 'tiny muted' }, (e.mu.no ? e.mu.no + '. ' : '') + e.mu.nama + (e.subjek ? ' · ' + e.subjek : '') + ' · ' + (no ? 'butir ' + no : 'butir tanpa nomor')),
              h('span', { class: 'cakupan-balik-teks' }, teksJalur(e.jalur)),
              e.butir.cakupan !== 'penuh' ? [' ', pill(e.butir.cakupan === 'belum' ? 'belum tercakup' : 'materi sebagian', 'warn')] : null);
          }))))));
  }
  // kartu masuk dari peta materi
  function kartuCakupanTingkat(tingkat) {
    if (!UKP.cakupanResmi || !UKP.cakupanResmi.tingkat || !UKP.cakupanResmi.tingkat[tingkat]) return null;
    const r = hitungCakupan(tingkat);
    return h('section', { class: 'card kartu-cakupan', 'data-tingkat': tingkat, 'aria-labelledby': 'kartu-cakupan-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'stack-sm' }, h('p', { class: 'eyebrow' }, 'Dokumen KLC/BPPK · Okt 2026'), h('h2', { class: 'card-title', id: 'kartu-cakupan-j' }, 'Cakupan materi resmi BPPK')), UKP.c.verif('◐', 'Bersumber dari unggahan peserta; dokumen tidak memuat kop, tanggal, atau nomor')),
      h('p', { class: 'small', style: { maxWidth: '68ch' } }, 'Daftar butir materi Tingkat ' + tingkat + ' dari dokumen cakupan materi yang dibagikan KLC. Menurut laporan peserta, soal ujian tidak keluar dari daftar ini; setiap butir dipetakan ke topik aplikasi beserta status belajar Anda.'),
      h('p', { class: 'row-meta' }, h('span', { class: 'meta' }, r.mataUjian + ' mata ujian', h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), r.butir + ' butir', h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), r.sudah + ' dari ' + (r.butir - r.tanpa) + ' butir dipelajari'), r.tanpa ? pill(r.tanpa + ' belum tercakup', 'warn') : null),
      h('div', { class: 'btn-row' }, UKP.link(['Buka cakupan Tingkat ' + tingkat, ikon('chevron-kanan', null, true)], 'cakupan', { tingkat }, 'btn btn-sm')));
  }

  UKP.views.cakupan = function (params) {
    params = params || {}; const s = UKP.store.get(); const C = UKP.cakupanResmi;
    let tingkat = CAKUPAN_TINGKAT.includes(params.tingkat) ? params.tingkat : CAKUPAN_TINGKAT.includes(s.profil.tingkat) ? s.profil.tingkat : 'A';
    const page = h('div', { class: 'page halaman-cakupan' });
    const judulH1 = t => 'Cakupan materi resmi · Tingkat ' + t;
    const crumbs = [{ teks: 'Belajar', pendek: 'Belajar', view: 'tingkat', params: { tingkat } }, { teks: 'Cakupan materi resmi' }];
    if (!C || !C.tingkat) {
      page.append(kop({ crumbs, judul: judulH1(tingkat) }), UKP.c.kosong('Data cakupan belum dimuat', 'Berkas js/data/cakupan.js belum tersedia di versi ini.', UKP.link('Kembali ke peta materi', 'tingkat', null, 'btn btn-sm')));
      return page;
    }
    const sb = C.sumber || {};
    const kopEl = kop({ pita: true, crumbs, eyebrow: 'Dokumen KLC/BPPK · salinan PDF Nov 2026', judul: judulH1(tingkat), ringkas: true,
      lead: 'Daftar ini menyalin dokumen "Cakupan Materi Uji Kompetensi Perpajakan" yang dibagikan KLC (Kemenkeu Learning Center, BPPK), menurut salinan PDF 13 halaman yang diterima tim pada November 2026. Seratus soal try out Tingkat B seluruhnya jatuh di dalam daftar ini. Setiap butir dipetakan ke topik dan soal aplikasi dan diberi status belajar Anda; penomoran dan ejaan mengikuti dokumen.',
      meta: [pill(sb.penerbit || 'BPPK / KLC Kemenkeu'), UKP.c.verif('◐', 'Bersumber dari unggahan peserta; dokumen tidak memuat kop, tanggal, atau nomor')] });
    page.appendChild(kopEl);
    const h1 = kopEl.querySelector('h1');
    const sentuh = topikDisentuh();
    const judulTopik = id => { const t = K.topik(id); return t ? t.judul : id; };
    // ---- kontrol bersama ketiga tab (dibuat sekali; nilai tersimpan di params rute agar bertahan saat render ulang) ----
    let hanyaBelum = params.belum === '1' || params.belum === true;
    const cari = h('input', { class: 'input', type: 'search', id: 'cakupan-q', placeholder: 'Cari butir atau topik, mis. faktur, BUT, PPSP…', autocomplete: 'off', 'aria-describedby': 'cakupan-jumlah', 'data-cari-lokal': '', 'aria-keyshortcuts': '/', value: params.q || null });
    let tCari = null;
    cari.addEventListener('input', () => { clearTimeout(tCari); tCari = setTimeout(() => { UKP.perbaruiParams({ q: cari.value.trim() || null }, 'cakupan'); gambarDaftar(); }, 160); });
    const jumlah = h('p', { class: 'small muted', role: 'status', id: 'cakupan-jumlah' });
    const sakelar = UKP.c.sakelar({ id: 'cakupan-belum', judul: 'Hanya yang belum dipelajari', bantu: 'Sembunyikan butir yang semua topiknya sudah Anda sentuh.', nilai: hanyaBelum,
      onchange: e => { hanyaBelum = e.target.checked; UKP.perbaruiParams({ belum: hanyaBelum ? '1' : null }, 'cakupan'); gambarDaftar(); } });
    const btnLipat = h('button', { type: 'button', class: 'btn btn-ghost btn-text btn-sm', onclick: () => {
      const semua = Array.from(daftarWadah.querySelectorAll('details.cakupan-mu')); const buka = semua.some(d => !d.open);
      semua.forEach(d => { d.open = buka; terbuka.set(d.dataset.kunci, buka); }); aturLabelLipat();
    } }, 'Buka semua');
    const aturLabelLipat = () => { const semua = Array.from(daftarWadah.querySelectorAll('details.cakupan-mu')); btnLipat.hidden = !semua.length; btnLipat.textContent = semua.some(d => !d.open) ? 'Buka semua' : 'Tutup semua'; };
    const kontrol = h('div', { class: 'stack-sm cakupan-kontrol' },
      h('label', { for: 'cakupan-q', class: 'visually-hidden' }, 'Cari butir cakupan'),
      h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, UKP.icon('search', null, true)), cari),
      sakelar,
      h('div', { class: 'between' }, jumlah, btnLipat));
    const daftarWadah = h('div', { class: 'stack cakupan-daftar' });
    const terbuka = new Map(); // kunci mata ujian → terbuka? (pilihan pengguna dihormati selama halaman terbuka)
    const cacheButir = new Map(); // v9.5.4 S14: tingkat|butir → { n, tunggu }
    const hitungButir = (id, t) => {
      const k = t + '|' + id; if (cacheButir.has(k)) return cacheButir.get(k);
      const arr = K.soalButir(id, t); const P = L && L.pakai;
      const tunggu = arr.length && P && typeof P.ringkas === 'function' && typeof P.menunggu === 'function' ? P.menunggu(P.ringkas(arr)) : 0;
      const x = { n: arr.length, tunggu }; cacheButir.set(k, x); return x;
    };
    const nomorEl = (b, dalam) => { const n = penandaButir(b.nomor, dalam); return h('span', { class: 'cakupan-nomor', 'aria-hidden': n ? null : 'true' }, n); };
    const chipTopik = id => {
      const judul = judulTopik(id); const d = sentuh.has(id);
      return h('a', { class: 'chip chip-topik', href: UKP.href('topik', { id }), 'data-go': 'topik', 'data-params': JSON.stringify({ id }), 'data-tip': id + ' · ' + judul, 'data-disentuh': d ? '' : null,
        'aria-label': 'Topik ' + id + ': ' + judul + (d ? ' (sudah disentuh)' : '') },
        h('span', { class: 'mono' }, id), h('span', { class: 'chip-label' }, pendek(judul, 30)), d ? ikon('check', null, true) : null);
    };
    function gambarDaftar() {
      const T = C.tingkat[tingkat]; const q = cari.value.trim(); const adaSaring = !!q || hanyaBelum;
      const adaPeta = !!(K.adaPetaButir && K.adaPetaButir() && K.soalButir);  // v9.5
      const mayor = mayoritasButir(hitungCakupan(tingkat, sentuh));
      const tandai = teks => q && UKP.c.tandaiKueri ? UKP.c.tandaiKueri(teks, q) : teks;
      const cocokQ = teks => !q || (UKP.cocokKueri ? UKP.cocokKueri(teks, q) : String(teks).toLowerCase().includes(q.toLowerCase()));
      let total = 0, tampil = 0;
      // bawaan tertutup di semua lebar (summary sudah menyebut "x dari y dipelajari"); saringan membuka semua yang cocok
      const bagian = [];
      const lolos = (b, jalur, m) => {
        if (hanyaBelum && statusButir(b, sentuh) === 'sudah') return false;
        return cocokQ([m.nama, m.namaNormal, m.namaTercetak || ''].concat(jalur.map(x => x.teks), (b.topik || []).map(id => id + ' ' + judulTopik(id))).join(' · '));
      };
      const liDaun = (b, dalam) => {
        const st = statusButir(b, sentuh);
        return h('li', { class: 'cakupan-daun', 'data-status': st },
          h('div', { class: 'cakupan-baris' }, nomorEl(b, dalam), h('span', { class: 'cakupan-teks' }, tandai(b.teks))),
          st === mayor && b.cakupan !== 'sebagian' ? titikButir(st, mayor) : h('div', { class: 'cakupan-meta' }, titikButir(st, mayor), b.cakupan === 'sebagian' ? pill('materi sebagian', 'warn') : null),
          (b.topik || []).length ? h('div', { class: 'chip-row cakupan-chip' }, b.topik.map(chipTopik)) : null,
          b.catatan ? h('p', { class: 'tiny muted cakupan-catatan' }, b.catatan) : null,
          adaPeta ? soalButirEl(b) : null);
      };
      // v9.5 jumlah soal terpeta untuk tingkat ini + tautan Latih (hanya bila peta butir tersedia)
      // v9.5.4 S14: kalimat yang sama dengan baris butir di Bank soal ("N soal · M pengganti menunggu"); label tombol tanpa angka.
      // Angka per butir dihitung sekali per halaman (hitungButir), jadi mengetik di kotak cari tidak menghitung ulang ringkasan pemakaian.
      const soalButirEl = b => {
        const x = hitungButir(b.id, tingkat); const n = x.n;
        if (!n) return h('p', { class: 'tiny cakupan-soal', 'data-kosong': '' }, UKP.c.pill('belum ada soal', 'warn'));
        // v9.5: tombol kecil (sasaran ketuk lebih besar dari tautan satu kata)
        const a = UKP.link('Latih', 'latih', { butir: b.id, atur: 1 }, 'btn btn-sm cakupan-latih'); a.setAttribute('aria-label', labelLatihButir(b, tingkat));
        return h('p', { class: 'tiny cakupan-soal' }, h('span', { class: 'meta' }, UKP.fmt.angka(n) + ' soal' + (x.tunggu ? ' · ' + UKP.fmt.angka(x.tunggu) + ' pengganti menunggu' : '')), ' ', a);
      };
      const olButir = (arr, dalam, jalurInduk, m, x) => {
        const li = [];
        for (const b of arr || []) {
          const jalur = jalurInduk.concat(b);
          if (adaAnak(b)) {
            const sub = olButir(b.anak, dalam + 1, jalur, m, x); if (!sub) continue;
            li.push(h('li', { class: 'cakupan-induk' }, h('div', { class: 'cakupan-baris' }, nomorEl(b, dalam), h('span', { class: 'cakupan-teks' }, tandai(b.teks))), sub));
          } else {
            x.total++; x[statusButir(b, sentuh)]++;
            if (!lolos(b, jalur, m)) continue;
            x.tampil++; li.push(liDaun(b, dalam));
          }
        }
        return li.length ? h('ol', { class: 'cakupan-butir', role: 'list', 'data-dalam': String(dalam) }, li) : null; // role: Safari membuang semantik daftar bila list-style none
      };
      T.mataUjian.forEach(m => {
        const x = { total: 0, tampil: 0, sudah: 0, belum: 0, tanpa: 0 };
        const isiSubjek = m.subjek.map(sj => { const ol = olButir(sj.butir, 0, [], m, x); return ol ? h('div', { class: 'stack-sm cakupan-subjek' }, sj.nama ? h('h3', { class: 'cakupan-subjek-judul' }, 'Subjek: ' + sj.nama) : null, ol) : null; }).filter(Boolean);
        total += x.total; tampil += x.tampil;
        if (!isiSubjek.length) return;
        const kunci = tingkat + '.' + m.urut; const modul = modulMu(m);
        const d = h('details', { class: 'lipat cakupan-mu', 'data-kunci': kunci, open: (adaSaring ? true : terbuka.has(kunci) ? terbuka.get(kunci) : false) ? true : null },
          h('summary', null, h('span', { class: 'cakupan-mu-kop' },
            h('span', { class: 'cakupan-mu-judul' }, (m.no ? m.no + '. ' : '') + m.nama, ' ', h('span', { class: 'kode' }, modul.join(' · '))),
            h('span', { class: 'row-meta' }, h('span', { class: 'meta' }, (adaSaring ? x.tampil + ' dari ' : '') + x.total + ' butir', h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), x.sudah + ' dari ' + (x.total - x.tanpa) + ' dipelajari'), x.tanpa ? pill(x.tanpa + ' belum tercakup', 'warn') : null))),
          h('div', { class: 'stack-sm' },
            h('p', { class: 'small muted' }, 'Kelompok di aplikasi: ', modul.map((k, i) => [i ? ' · ' : null, UKP.link(k + ' ' + K.namaKelompok(k), 'kelompok', { kode: k })]),
              m.nama !== m.namaNormal ? ' · nama lengkap: ' + m.namaNormal : null),
            m.catatan ? h('p', { class: 'tiny muted cakupan-catatan' }, 'Catatan dokumen: ' + m.catatan) : null,
            isiSubjek));
        d.addEventListener('toggle', () => { if (!adaSaring) terbuka.set(kunci, d.open); aturLabelLipat(); });
        bagian.push(d);
      });
      daftarWadah.replaceChildren(...(bagian.length ? bagian : [UKP.c.kosong('Tidak ada butir yang cocok', q ? 'Coba kata lain atau hapus pencarian "' + q + '".' : 'Semua butir Tingkat ' + tingkat + ' yang tercakup sudah Anda pelajari.', h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { cari.value = ''; if (hanyaBelum) { hanyaBelum = false; const i = sakelar.querySelector('input'); if (i) i.checked = false; } UKP.perbaruiParams({ q: null, belum: null }, 'cakupan'); gambarDaftar(); UKP.fokus(cari); } }, 'Hapus saringan'), { ikon: 'saring' })]));
      jumlah.textContent = adaSaring ? 'Menampilkan ' + tampil + ' dari ' + total + ' butir.' : total + ' butir dalam ' + T.mataUjian.length + ' mata ujian.';
      aturLabelLipat();
    }
    const tile = o => UKP.viz && UKP.viz.statTile ? UKP.viz.statTile(o) : h('div', { class: 'stat' }, h('span', { class: 'label' }, o.label), h('span', { class: 'nilai' }, String(o.nilai)), o.sub ? h('span', { class: 'tiny muted' }, o.sub) : null);
    function ringkasan(t) {
      const r = hitungCakupan(t, sentuh); const dapat = r.butir - r.tanpa; const pct = dapat ? Math.round(r.sudah / dapat * 100) : 0;
      return h('section', { class: 'stack-sm cakupan-ringkas', 'aria-labelledby': 'cakupan-ringkas-j' },
        h('div', { class: 'sect-head' }, h('h2', { id: 'cakupan-ringkas-j' }, 'Ringkasan Tingkat ' + t)),
        h('div', { class: 'pita-stat' },
          tile({ label: 'Mata ujian', nilai: r.mataUjian, sub: 'Pembagian dokumen KLC. Satu mata ujian bisa memuat beberapa kelompok aplikasi.' }),   // v9.5.4 Sx-B4
          tile({ label: 'Butir', nilai: r.butir, sub: 'butir terkecil yang tercetak' }),
          tile({ label: 'Sudah dipelajari', nilai: r.sudah, sub: pct + '% dari ' + dapat + ' butir yang tercakup' }),
          tile({ label: 'Belum tercakup', nilai: r.tanpa, sub: 'belum ada materi khusus di aplikasi' + (r.sebagian ? '; ' + r.sebagian + ' butir baru sebagian' : '') })),
        UKP.c.progress({ label: 'Butir sudah dipelajari', nilai: r.sudah, maks: Math.max(1, dapat), teks: r.sudah + ' dari ' + dapat, ukuran: 'sm', nada: dapat && r.sudah === dapat ? 'ok' : null, valuetext: r.sudah + ' dari ' + dapat + ' butir tercakup sudah dipelajari' }),
        legendaStatus(),
        h('p', { class: 'meta', style: { maxWidth: '68ch', margin: 0 } }, DEFINISI_DIPELAJARI + ' Penilaian cakupan aplikasi per 30 Oktober 2026; jumlah butir dihitung atas butir terkecil (tanpa sub-butir).'));
    }
    const isiTab = t => { gambarDaftar(); const r = hitungCakupan(t, sentuh);
      return h('div', { class: 'stack' }, ringkasan(t), h('section', { class: 'stack-sm', 'aria-labelledby': 'cakupan-daftar-j' }, h('div', { class: 'sect-head' }, h('h2', { id: 'cakupan-daftar-j' }, 'Butir per mata ujian')),
        r.butir > r.tanpa ? ringkasStatus(teksMayoritas(r, mayoritasButir(r))) : null, kontrol, daftarWadah)); };
    const tabs = UKP.c.tabs({ id: 'cakupan-tab', label: 'Pilih tingkat', aktif: tingkat,
      // "Tingkat " disembunyikan secara visual di layar < 400 px (tetap dibacakan) agar ketiga tab muat tanpa digulir
      tab: CAKUPAN_TINGKAT.filter(t => C.tingkat[t]).map(t => ({ id: t, label: [h('span', { class: 'tab-awal' }, 'Tingkat '), t], hitung: hitungCakupan(t, sentuh).butir })),
      isi: t => { tingkat = t; return isiTab(t); },
      onGanti: t => {
        tingkat = t; if (h1) h1.textContent = judulH1(t); document.title = judulH1(t) + ' · MABAR UKP';
        const remah = kopEl.querySelector('.crumb a[data-go="tingkat"]'); if (remah) { remah.dataset.params = JSON.stringify({ tingkat: t }); remah.setAttribute('href', UKP.href('tingkat', { tingkat: t })); }
        UKP.perbaruiParams({ tingkat: t }, 'cakupan');
      } });
    page.appendChild(h('div', { class: 'stack cakupan-tab' }, tabs.el, tabs.elPanel));
    if (C.catatanDokumen && C.catatanDokumen.length) page.appendChild(h('details', { class: 'lipat cakupan-dok' }, h('summary', null, 'Tentang dokumen dan kejanggalan cetak'),
      h('div', { class: 'stack-sm' }, sb.catatan ? h('p', { class: 'small' }, sb.catatan) : null, sb.kutipan ? h('blockquote', { class: 'small cakupan-kutip' }, '“' + sb.kutipan + '”', h('span', { class: 'tiny muted' }, ' — ' + (sb.dibagikan || 'peserta'))) : null,
        h('ul', { class: 'bersih small' }, C.catatanDokumen.map(x => h('li', null, x))))));
    return page;
  };

  // ================= v7.9 LATIHAN BERSAMA: pengaturan peserta =================
  // UKP.c.aturBersama({ onUbah, judul? }) → elemen pengaturan: sakelar "Catat jawaban per orang" + daftar nama (chip berhapus) + isian
  // "Tambah nama" (Enter / tombol Tambah). Menyimpan ke s.bersama; onUbah({ aktif, peserta }) setiap perubahan. Dipakai di saringan
  // Latih dan Pengaturan › Tim. v9.4 FA1: o.tanpaTempo (dialog "Anggota ujian tim") → tanpa segmen waktu mengerjakan dan kalimatnya,
  // karena ujian tim selalu berwaktu dan tidak membaca s.bersama.tempo. Validasi: UKP.belajar.cekNamaPeserta (unik tanpa peduli kapital, ≤ 12 nama, ≤ 24 karakter)
  UKP.c.aturBersama = function (o) {
    o = o || {}; const s = L.siapBersama(UKP.store.get()); const b = s.bersama;
    const id = U.id ? U.id('bersama') : 'bersama-' + Math.random().toString(36).slice(2, 7);
    const umumkan = t => { if (UKP.umumkan) UKP.umumkan(t); };
    const kabar = () => { UKP.store.save(); if (o.onUbah) { try { o.onUbah({ aktif: b.aktif, peserta: b.peserta.slice() }); } catch (e) { console.error(e); } } gambar(); };
    const galat = h('p', { class: 'galat small', id: id + '-galat', role: 'alert', hidden: true });
    const input = h('input', { class: 'input', id: id + '-nama', type: 'text', maxlength: String(L.MAKS_NAMA_PESERTA), autocomplete: 'off', autocapitalize: 'words', spellcheck: 'false', enterkeyhint: 'done', placeholder: 'Nama anggota', 'aria-describedby': id + '-galat' });
    const setGalat = t => { galat.textContent = t || ''; galat.hidden = !t; if (t) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); };
    function tambah(nama, dariSaran) {
      const c = L.cekNamaPeserta(nama, b.peserta);
      if (c.galat) { setGalat(c.galat); if (!dariSaran) input.focus(); return false; }
      setGalat(null); b.peserta.push(c.nama); if (!dariSaran) input.value = '';
      kabar(); umumkan(c.nama + ' ditambahkan. ' + b.peserta.length + ' orang.');
      if (!dariSaran) input.focus();
      return true;
    }
    function hapus(nama) {
      const i = b.peserta.indexOf(nama); if (i < 0) return;
      b.peserta.splice(i, 1); setGalat(null); kabar(); umumkan(nama + ' dihapus dari daftar.');
      const sisa = daftar.querySelectorAll('.bersama-hapus'); (sisa[Math.min(i, sisa.length - 1)] || input).focus();
    }
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); tambah(input.value); } });
    input.addEventListener('input', () => { if (!galat.hidden) setGalat(null); });
    const daftar = h('ul', { class: 'bersama-daftar', 'aria-label': 'Peserta latihan bersama' });
    const catatan = h('p', { class: 'small muted bersama-catatan' });
    const cepat = h('div', { class: 'bersama-cepat' });
    const sw = UKP.c.sakelar({ id: id + '-sw', judul: 'Catat jawaban per orang', bantu: 'Satu layar untuk beberapa orang: tiap soal mencatat jawaban setiap nama. Data tersimpan di perangkat ini dan tampil di Dasbor tim; tidak dikirim ke server.', nilai: b.aktif, onchange: e => aturAktif(!!e.target.checked) });
    // v8.2 B2: dipakai juga oleh segmen "Sendiri | Bersama" di saringan Latih (opsi tanpaSakelar menyembunyikan sakelar)
    function aturAktif(v) {
      b.aktif = !!v;
      // v9.1/v9.2: daftar kosong diawali nama profil sendiri (bila ada); tidak ada nama dari kode
      if (b.aktif && !b.peserta.length) {
        const pem = L.rapikanNamaPeserta(s.profil && s.profil.nama);
        if (pem && !L.cekNamaPeserta(pem, b.peserta).galat) b.peserta.push(pem);
      }
      kabar(); if (!o.tanpaSakelar) umumkan(b.aktif ? 'Latihan bersama menyala.' + (b.peserta.length <= 1 ? ' Tulis nama tiap orang yang ikut.' : '') : 'Latihan bersama mati.');
    }
    if (o.tanpaSakelar) sw.hidden = true;
    // v8.1 tempo latihan bersama: Ujian (2,1 mnt/soal, sama dengan UKP; bawaan) · Longgar (2,5 mnt/soal); disimpan di s.bersama.tempo
    const fmtMnt = d => String((Math.round(d / 6) / 10).toFixed(1)).replace('.', ',');
    const dUjian = L.tempoUjian ? L.tempoUjian(s.profil && s.profil.tingkat) : 126; const dLonggar = L.TEMPO_LONGGAR || 150;
    const fu = L.formatUjianTingkat ? L.formatUjianTingkat(s.profil && s.profil.tingkat) : { menit: 210, soal: 100 };
    // v9.3 W1: label "Waktu mengerjakan per soal" dengan pilihan yang sama seperti dialog Mulai room ("Seperti ujian 2,1 menit" · "Lebih santai 2,5 menit")
    const segTempo = UKP.c.segmen({ id: id + '-tempo', label: 'Waktu mengerjakan per soal', aktif: L.tempoBersama ? L.tempoBersama().mode : 'ujian',
      // v9.4 W: pilihan ketiga "Tanpa batas" (s.bersama.tempo 'bebas'): tanpa hitung mundur
      opsi: [{ nilai: 'ujian', label: 'Seperti ujian', sub: fmtMnt(dUjian) + ' menit' }, { nilai: 'longgar', label: 'Lebih santai', sub: fmtMnt(dLonggar) + ' menit' }, { nilai: 'bebas', label: 'Tanpa batas', sub: 'tanpa hitung mundur' }],
      onPilih: v => { const t = L.aturTempoBersama ? L.aturTempoBersama(v) : { mode: v }; umumkan(t.mode === 'bebas' ? 'Waktu mengerjakan tanpa batas dipilih. Tidak ada hitung mundur.' : 'Waktu mengerjakan ' + fmtMnt(t.detik || (v === 'longgar' ? dLonggar : dUjian)) + ' menit per soal dipilih.'); gambarPenjelasTempo(); gambarRingkasWaktu(); if (o.onUbah) { try { o.onUbah({ aktif: b.aktif, peserta: b.peserta.slice(), tempo: t.mode }); } catch (e) { console.error(e); } } } });
    segTempo.classList.add('bersama-tempo');
    const bantuTempo = h('p', { class: 'bantu bantu-tempo' });
    const gambarPenjelasTempo = () => { const bebas = (L.tempoBersama ? L.tempoBersama().mode : 'ujian') === 'bebas';
      bantuTempo.textContent = bebas ? 'Tanpa batas: tidak ada hitung mundur. Cocok untuk belajar sambil membahas.' : 'Seperti ujian = waktu UKP: ' + fu.menit + ' menit untuk ±' + fu.soal + ' soal.';
      bantuTempo.toggleAttribute('data-bebas', bebas); };
    gambarPenjelasTempo();
    segTempo.appendChild(bantuTempo);
    // v9.3 W1: "Waktu membahas per soal" (1 menit · 2 menit · 3 menit · Bebas; bawaan 2 menit) + baris ringkas total waktu.
    // Hanya bila pemanggil memberi o.nSoal() (saringan Latihan); dialog lain (ujian tim, Pengaturan) tetap seperti dulu
    const pilBahas = Array.isArray(L.PILIHAN_BAHAS) ? L.PILIHAN_BAHAS : [60, 120, 180, 0];
    const labelBahas = d => d ? Math.round(d / 60) + ' menit' : 'Bebas';
    const bahasKini = () => typeof L.bahasBersama === 'function' ? L.bahasBersama() : 120;
    const segBahas = typeof o.nSoal === 'function' ? UKP.c.segmen({ id: id + '-bahas', label: 'Waktu membahas per soal', aktif: bahasKini(),
      opsi: pilBahas.map(d => ({ nilai: d, label: labelBahas(d) })),
      onPilih: v => { const d = typeof L.aturBahasBersama === 'function' ? L.aturBahasBersama(v) : v; umumkan(d ? 'Waktu membahas ' + labelBahas(d) + ' per soal dipilih.' : 'Waktu membahas bebas dipilih.'); gambarRingkasWaktu(); if (o.onUbah) { try { o.onUbah({ aktif: b.aktif, peserta: b.peserta.slice(), bahas: d }); } catch (e) { console.error(e); } } } }) : null;
    if (segBahas) segBahas.classList.add('bersama-tempo', 'bersama-bahas');
    const ringkasWaktu = segBahas ? h('p', { class: 'small muted bersama-ringkas-waktu', 'aria-live': 'off' }) : null;
    function gambarRingkasWaktu() {
      if (!ringkasWaktu) return;
      const n = Math.max(0, Math.round(Number(o.nSoal()) || 0)); const t = L.tempoBersama ? L.tempoBersama() : { detik: dUjian };
      ringkasWaktu.textContent = UKP.c.teksWaktuBersama(n, t.detik, bahasKini());
      ringkasWaktu.hidden = !n;
    }
    const isian = h('div', { class: 'bersama-tambah' },
      h('label', { class: 'visually-hidden', for: id + '-nama' }, 'Nama anggota'),
      input, h('button', { type: 'button', class: 'btn', onclick: () => tambah(input.value) }, UKP.icon('tambah', null, true), 'Tambah'));
    function gambar() {
      const pem = L.rapikanNamaPeserta(s.profil && s.profil.nama);
      daftar.replaceChildren(...b.peserta.map((n, i) => h('li', { class: 'bersama-chip' }, h('span', { class: 'bersama-nama', title: n }, n),
        h('button', { type: 'button', class: 'bersama-hapus', 'aria-label': 'Hapus ' + n, title: 'Hapus ' + n, onclick: () => hapus(n) }, UKP.icon('x', null, true)))));
      daftar.hidden = !daftar.childNodes.length;
      // "Tambah cepat": nama pemimpin dan nama yang pernah disimpan di perangkat ini (peserta latihan bersama terdahulu) yang belum masuk
      // daftar; tidak pernah nama dari kode
      const pernah = []; try { (L.sesiBersama ? L.sesiBersama() : []).slice(0, 10).forEach(x => (x && Array.isArray(x.peserta) ? x.peserta : []).forEach(n => pernah.push(n))); } catch (e) {}
      const calon = [pem].concat(pernah).filter((n, i, a) => n && a.findIndex(x => x && x.toLowerCase() === n.toLowerCase()) === i && !L.cekNamaPeserta(n, b.peserta).galat);
      const cid = id + '-cepat';
      cepat.replaceChildren(...(calon.length ? [h('span', { class: 'meta', id: cid }, 'Tambah cepat:'), h('ul', { class: 'bersama-daftar', 'aria-labelledby': cid }, calon.map(n => {
        const anda = pem && n.toLowerCase() === pem.toLowerCase();
        return h('li', null, h('button', { type: 'button', class: 'bersama-saran', 'aria-label': 'Tambahkan ' + n + (anda ? ' (Anda)' : ''), onclick: () => { tambah(n, true); const x = cepat.querySelector('.bersama-saran') || input; x.focus(); } }, UKP.icon('tambah', null, true), n, anda ? h('span', { class: 'meta' }, ' Anda') : null));
      }))] : []));
      cepat.hidden = !calon.length;
      const nIn = sw.querySelector('input'); if (nIn) nIn.checked = b.aktif;
      catatan.textContent = b.peserta.length >= L.MAKS_PESERTA ? 'Daftar penuh (' + L.MAKS_PESERTA + ' orang). Urutan nama = urutan baris di papan.'
        : b.aktif ? 'Tulis nama tiap orang yang ikut. Urutan nama = urutan baris di papan.' : 'Mati: latihan mencatat jawaban Anda saja.';
      input.disabled = b.peserta.length >= L.MAKS_PESERTA;
      segTempo.hidden = !b.aktif;
      if (segBahas) segBahas.hidden = !b.aktif;
      if (ringkasWaktu) { gambarRingkasWaktu(); if (!b.aktif) ringkasWaktu.hidden = true; }
    }
    gambar();
    const elAtur = h('div', { class: 'atur-bersama stack-sm', 'data-aktif': b.aktif ? '' : null }, sw, daftar, cepat, isian, galat, catatan, o.tanpaTempo ? null : segTempo, segBahas, ringkasWaktu);
    elAtur.aturAktif = v => { aturAktif(v); elAtur.toggleAttribute('data-aktif', b.aktif); };
    // v9.3 W1: saringan memanggil ini saat jumlah soal berubah
    elAtur.perbaruiWaktu = () => { if (b.aktif) gambarRingkasWaktu(); };
    return elAtur;
  };
  // daftar peserta aktif (≥ 1 nama dan sakelar menyala) atau null
  // v8.1: hitung mundur sesi = jumlah soal × detik tempo (L.tempoBersama: ujian 126 dtk untuk Tingkat B, longgar 150 dtk)
  // v9.4 W: hitung naik (tanpa batas) bisa melewati satu jam → "1:05:09"; di bawah satu jam sama dengan fmtJamPendek ("12:05")
  const fmtNaik = d => { d = Math.max(0, Math.floor(Number(d) || 0)); return d < 3600 ? fmtJamPendek(d) : Math.floor(d / 3600) + ':' + String(Math.floor(d % 3600 / 60)).padStart(2, '0') + ':' + String(d % 60).padStart(2, '0'); };
  const fmtJamPendek = d => { d = Math.max(0, Math.floor(Number(d) || 0)); return Math.floor(d / 60) + ':' + String(d % 60).padStart(2, '0'); };
  const pesertaAktif = () => { const b = L.siapBersama(UKP.store.get()).bersama; return b.aktif && b.peserta.length ? b.peserta.slice() : null; };
  // v9.3 W1: baris ringkas total waktu → "10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)";
  // Bebas → "10 soal · waktu latihan 21 menit, termasuk membahas · membahas per soal tanpa hitung mundur" (v9.5.3 B3). Menit dibulatkan per bagian; total = jumlah kedua bagian
  // v9.4 W: waktu mengerjakan tanpa batas (detikKerja 0) → tidak ada perkiraan lama latihan, ditulis jelas
  UKP.c.teksWaktuBersama = function (nSoal, detikKerja, detikBahas) {
    const n = Math.max(0, Math.round(Number(nSoal) || 0)); const k = Math.max(0, Number(detikKerja) || 0); const b = Math.max(0, Number(detikBahas) || 0);
    if (!k) return n + ' soal · mengerjakan tanpa batas · ' + (b ? 'membahas ' + Math.round(b / 60) + ' menit per soal' : 'membahas bebas') + ' · lama latihan tidak diperkirakan';
    const mk = Math.round(n * k / 60), mb = Math.round(n * b / 60);
    // v9.5.3 B3: membahas Bebas → hitung mundur sesi tetap berjalan saat membahas, jadi menit itu ditulis sebagai waktu latihan
    return b ? n + ' soal · kira-kira ' + (mk + mb) + ' menit (' + mk + ' mengerjakan + ' + mb + ' membahas)' : n + ' soal · waktu latihan ' + mk + ' menit, termasuk membahas · membahas per soal tanpa hitung mundur';
  };

  // v8.1 UKP.c.kartuLanjutBersama() → kartu "Sesi bersama belum selesai · soal 7 dari 20 · 6 orang · sisa 12 mnt" atau null.
  // "Lanjutkan" → #latih { lanjut: 1 } (soal, urutan, papan soal berjalan, sisa waktu dipulihkan); "Akhiri dan lihat evaluasi" →
  // L.akhiriSesiBersama → #tim/sesi:<id> (sesi tanpa soal cukup dibuang). Dipakai di saringan Latih dan Beranda (paling atas)
  UKP.c.kartuLanjutBersama = function (o) {
    o = o || {};
    const ba = L.bersamaAktif ? L.bersamaAktif() : null; if (!ba) return null;
    const sesi = L.sesiBersamaDari ? L.sesiBersamaDari(ba.sesiId) : null; if (!sesi) return null;
    // v9.3: ditinggal saat membahas → "Lanjutkan" membuka lagi soal yang sedang dibahas, jadi kartu menyebut soal itu (bukan soal berikutnya)
    const iBahas = ba.bahas && ba.bahas.soalId ? ba.soalIds.indexOf(ba.bahas.soalId) : -1;
    const n = ba.soalIds.length; const no = iBahas >= 0 ? iBahas + 1 : Math.min(n, (ba.idx || 0) + 1); const sisaMnt = Math.max(0, Math.ceil((ba.sisaDetik || 0) / 60));
    const jid = 'lanjut-bersama-' + Math.random().toString(36).slice(2, 6);
    const meta = [(ba.ulang ? 'ulang · ' : '') + (iBahas >= 0 ? 'membahas soal ' : 'soal ') + no + ' dari ' + n, (sesi.peserta || []).length + ' orang', ba.tempo === 'bebas' ? 'tanpa batas waktu' : ba.sisaDetik > 0 ? 'sisa ' + sisaMnt + ' mnt' : 'waktu latihan habis (boleh lanjut)'].join(' · ');
    const akhiri = () => {
      const isi = Array.isArray(sesi.soal) && sesi.soal.length;
      // v9.3 W1: latihan diakhiri saat membahas → waktu membahas dicatat sampai titik lanjut terakhir disimpan (papan terakhir terbuka)
      if (ba.bahas && typeof L.catatBahasSesi === 'function') { try { L.catatBahasSesi(sesi.id, ba.bahas.soalId, (Math.max(Number(ba.diperbarui) || 0, ba.bahas.mulai) - ba.bahas.mulai) / 1000); } catch (e) { console.error(e); } }
      if (L.simpanBersamaAktif) L.simpanBersamaAktif(null);
      if (isi) { if (L.akhiriSesiBersama) L.akhiriSesiBersama(sesi.id); UKP.go('tim', { anggota: 'sesi:' + sesi.id }); return; }
      if (L.hapusSesiBersama) L.hapusSesiBersama(sesi.id);
      UKP.toast('Latihan tanpa soal dibuang.');
      if (kartu.isConnected) { const ganti = kartu.parentNode; kartu.remove(); if (o.onAkhiri) o.onAkhiri(); else if (ganti && UKP.fokus) { const t = ganti.querySelector('h1, h2'); if (t) UKP.fokus(t); } }
    };
    const kartu = h('section', { class: 'card kartu-lanjut-bersama', 'aria-labelledby': jid },
      h('div', { class: 'kartu-lanjut-isi' }, ikon('tim', 'kartu-lanjut-ikon', true),
        h('div', { class: 'stack-xs' }, h('h2', { class: 'kartu-lanjut-judul', id: jid }, 'Latihan bersama belum selesai'), h('p', { class: 'meta' }, meta))),
      h('div', { class: 'btn-row' },
        h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('latih', { lanjut: 1 }) }, ikon('play'), 'Lanjutkan latihan bersama'),
        h('button', { type: 'button', class: 'btn btn-ghost', onclick: akhiri }, 'Akhiri dan lihat hasil')));
    return kartu;
  };

  // ================= v8.2 B2: LATIHAN BERSAMA DI ROOM TIM =================
  // Runner latihan bersama yang sama (papan UKP.c.soal mode bersama) menyiarkan sesi ke room bila dimulai dengan params.room dan
  // perangkat ini pemandu (UKP.ruang peran 'tuan'). Room tidak tersedia (claude.ai, tanpa WebCrypto) → satu layar seperti v8.1.
  const ruangR = () => UKP.ruang || null;
  function ruangTersedia() {
    const R = ruangR(); if (!R || typeof R.tersedia !== 'function') return false;
    try { const t = R.tersedia(); return t === true || !!(t && t.tersedia); } catch (e) { return false; }
  }
  function infoRoom() { if (!ruangTersedia()) return null; try { return typeof ruangR().info === 'function' ? ruangR().info() : null; } catch (e) { return null; } }
  const peranRoom = () => { const i = infoRoom(); return i ? i.peran : null; };
  const kunciN = n => String(n == null ? '' : n).replace(/\s+/g, ' ').trim().toLowerCase();
  const samaNamaR = (a, b) => !!a && !!b && kunciN(a) === kunciN(b);
  // fungsi murni (diuji di test/bersama.test.js lewat UKP.latihRoom._murni)
  const MR = {
    MAKS_SOAL: 120,
    // v9.4 FA11: tempo latihan yang DILANJUTKAN dari titik lanjut → { mode, detik, lamaAwal }. 'bebas' tetap tanpa batas (detik 0);
    // titik lanjut lama tanpa field tempo tetap berwaktu (Seperti ujian); lamaDetik (lama latihan tanpa batas) terbawa, dibatasi 0..30 hari
    tempoLanjut(lanjut, tingkat) {
      const x = lanjut || {}; const lama = Math.max(0, Math.min(30 * 86400, Math.floor(Number(x.lamaDetik) || 0)));
      if (x.tempo === 'bebas') return { mode: 'bebas', detik: 0, lamaAwal: lama };
      const mode = x.tempo === 'longgar' ? 'longgar' : 'ujian';
      return { mode, detik: x.detikPerSoal || (mode === 'longgar' ? (L.TEMPO_LONGGAR || 150) : (L.tempoUjian ? L.tempoUjian(tingkat) : 126)), lamaAwal: lama };
    },
    // sesi room memuat ≤ 120 soal (batas protokol); → { daftar, dipotong }
    potong(daftar) { const arr = Array.isArray(daftar) ? daftar : []; return arr.length > MR.MAKS_SOAL ? { daftar: arr.slice(0, MR.MAKS_SOAL), dipotong: arr.length - MR.MAKS_SOAL } : { daftar: arr, dipotong: 0 }; },
    // per papan { nama: { opsi, keyakinan, benar } } → per room { nama: { o, k, b } }
    perRoom(per) { const out = {}; Object.keys(per || {}).forEach(n => { const x = per[n] || {}; const o = typeof x.opsi === 'string' ? x.opsi : (typeof x.o === 'string' ? x.o : '-'); out[n] = { o: o || '-', k: o && o !== '-' ? (x.keyakinan || x.k || null) : null, b: (x.benar === true || x.b === 1) && o !== '-' ? 1 : 0 }; }); return out; },
    // skor tim kumulatif dari riwayat papan [{ per: { nama: { opsi, benar } } }] → { benar, dijawab } (dijawab = jawaban selain '-')
    timKumulatif(riwayat) { let benar = 0, dijawab = 0; (riwayat || []).forEach(r => { const per = (r && r.per) || {}; Object.keys(per).forEach(n => { const x = per[n] || {}; const o = x.opsi != null ? x.opsi : x.o; if (o && o !== '-') { dijawab++; if (x.benar === true || x.b === 1) benar++; } }); }); return { benar, dijawab }; },
    // jejak kumulatif per soal [{ ke, benar, dijawab }] untuk "Tim di atas garis lulus sejak soal n"
    jejakTim(riwayat) { const out = []; let b = 0, d = 0; (riwayat || []).forEach((r, i) => { const t = MR.timKumulatif([r]); b += t.benar; d += t.dijawab; out.push({ ke: i + 1, benar: b, dijawab: d }); }); return out; },
    // soal pertama (≥ 5) saat akurasi kumulatif ≥ batas dan tetap di atas sampai sekarang; null bila belum/tidak lagi
    sejakLulus(jejak, batas) {
      batas = Number(batas) || 60; const arr = (jejak || []).filter(x => x && x.dijawab > 0); if (!arr.length) return null;
      const akhir = arr[arr.length - 1]; if (akhir.benar / akhir.dijawab * 100 < batas) return null;
      let sejak = null; arr.forEach(x => { const ok = x.ke >= 5 && x.benar / x.dijawab * 100 >= batas; if (ok && sejak == null) sejak = x.ke; else if (!ok && x.ke >= 5) sejak = null; }); return sejak;
    },
    // v9.2 G1 tulisan baku (satu cara menghitung): "Skor tim 60% · 3 dari 5 jawaban benar"
    teksSkor(tim) { if (!tim || !(tim.dijawab > 0)) return ''; return 'Skor tim ' + Math.round(tim.benar / tim.dijawab * 100) + '% · ' + tim.benar + ' dari ' + tim.dijawab + ' jawaban benar'; },
    // penjelas hasil rotasi v8.1 hanya dikirim bila orang itu benar di per room (syarat bukaKunci); selain itu null
    penjelas(tri, perR) { const pj = tri && tri.penjelas; if (!pj || !perR) return null; const k = Object.keys(perR).find(n => samaNamaR(n, pj)); return k && perR[k].b === 1 ? k : null; },
    // nama yang diisi pemandu dari laptop (T5): sumber 'papan', jawaban selain '-', bukan pemandu sendiri
    diisi(sumber, perR, pemandu) { return Object.keys(sumber || {}).filter(n => sumber[n] === 'papan' && !samaNamaR(n, pemandu) && perR && perR[n] && perR[n].o !== '-'); },
    // status baris dari UKP.ruang.hadir() → { nama: 'online' | 'offline' } (pemandu tidak diberi status)
    // v9.2 G1: 'online' | 'terputus' (pernah online selama latihan ini lalu HP terputus) | 'belum' (belum membuka HP). pernah = Set/larik nama
    // yang pernah online selama latihan berjalan; tanpa pernah, nama yang tercatat di kehadiran room dianggap pernah masuk
    hadirPeta(hadir, peserta, pemandu, pernah) {
      const out = {}; const prn = pernah ? [...pernah] : null;
      (peserta || []).forEach(n => {
        if (samaNamaR(n, pemandu)) return; const k = Object.keys(hadir || {}).find(x => samaNamaR(x, n));
        if (k && hadir[k] && hadir[k].online) out[n] = 'online';
        else out[n] = k && (!prn || prn.some(x => samaNamaR(x, n))) ? 'terputus' : 'belum';
      });
      return out;
    },
    // v9.2 G1 anggota yang menyusul: nama di daftar room yang belum ada di awal latihan maupun di peserta → nama baru (urut daftar room)
    susulan(daftarRoom, awal, peserta) { return (daftarRoom || []).filter(n => typeof n === 'string' && n && !(awal || []).some(x => samaNamaR(x, n)) && !(peserta || []).some(x => samaNamaR(x, n))); },
    // dokumen jawaban HP (UKP.ruang.jawabanSemua()[nama]) → { o, k } untuk soal itu, atau null
    isiDok(dok, soalId) { const j = dok && dok.j && dok.j[soalId]; if (!j) return null; const o = String(j).toUpperCase(); if (o !== '-' && !/^[A-D]$/.test(o)) return null; const k = dok.k && dok.k[soalId]; return { o, k: o !== '-' && (k === 'yakin' || k === 'ragu' || k === 'menebak') ? k : null }; },
  };
  // penyiar sesi ke room (khusus pemandu). R = UKP.ruang (atau tiruan di uji); o = { sesiId, soalIds, detikPerSoal, akhirSesi() }.
  // Setiap langkah mengirim tepat satu perubahan state bila perlu: mulai → mulaiLatihan (bila aktivitas room belum sesi ini) + aturSoal,
  // soal(idx) → aturSoal bila idx/fase berbeda, kunci → bukaKunci (penjelas ditolak → ulang tanpa penjelas), selesai → terbitkanSesi +
  // akhiriAktivitas (bila aktivitas room masih sesi ini), lepas → akhiriAktivitas saja ("Pindah ke satu layar")
  function buatSiarRoom(R, o) {
    const akt = () => { try { const st = R.state(); return st && st.aktivitas && st.aktivitas.jenis === 'latihan' && st.aktivitas.id === o.sesiId ? st.aktivitas : null; } catch (e) { return null; } };
    const siar = {
      milikSesi: () => !!akt(),
      mulai(idx, tetapKunci) {
        // v9.2 G1: daftar orang yang ikut dikirim sebagai peserta (field opsional; versi lama mengabaikannya)
        if (!akt()) { const ak = typeof o.akhirSesi === 'function' ? o.akhirSesi() : o.akhirSesi; const pes = typeof o.peserta === 'function' ? o.peserta() : o.peserta;
          // v9.3 W1: detikBahas (target membahas per soal, 0 = Bebas) ikut dikirim; ruang.js lama mengabaikannya
          const db = typeof o.detikBahas === 'number' && isFinite(o.detikBahas) && o.detikBahas >= 0 && o.detikBahas <= 3600 ? Math.round(o.detikBahas) : null;
          if (!R.mulaiLatihan(Object.assign({ id: o.sesiId, soalIds: o.soalIds.slice(0, MR.MAKS_SOAL), detikPerSoal: o.detikPerSoal, akhirSesi: ak == null ? null : ak }, db != null ? { detikBahas: db } : {}, Array.isArray(pes) && pes.length ? { peserta: pes.slice(0, 12) } : {}))) return false; }
        return siar.soal(idx, tetapKunci);
      },
      // tetapKunci: papan sedang membahas soal idx → room yang sudah di fase kunci soal itu dibiarkan (waktu membahas di HP tidak mulai ulang)
      soal(idx, tetapKunci) {
        const a = akt(); if (!a) return siar.mulai(idx, tetapKunci);
        idx = Math.max(0, Math.min(a.soalIds.length - 1, idx | 0));
        if (tetapKunci && a.idx === idx && a.fase === 'kunci') return true;
        if (a.idx !== idx || a.fase !== 'jawab') return !!R.aturSoal(idx);
        return true;
      },
      faseKunci(idx) { const a = akt(); return !!a && a.idx === idx && a.fase === 'kunci'; },
      kunci(soalId, perR, penjelas, tim) {
        if (!akt()) return false;
        let r = R.bukaKunci(soalId, perR, { penjelas: penjelas || null, tim: tim || null });
        if (!r && penjelas) r = R.bukaKunci(soalId, perR, { penjelas: null, tim: tim || null });
        return !!r;
      },
      selesai(sesi) { let ok = false; if (sesi) ok = !!R.terbitkanSesi(sesi); if (akt()) R.akhiriAktivitas(); return ok; },
      lepas() { if (akt()) R.akhiriAktivitas(); },
      // v9.2 G1: perbarui daftar peserta latihan berjalan (bila ruang.js punya aturPesertaLatihan)
      peserta(daftar) { if (!akt() || typeof R.aturPesertaLatihan !== 'function') return false; try { return !!R.aturPesertaLatihan(daftar.slice(0, 12)); } catch (e) { return false; } },
    };
    return siar;
  }
  // ubah rekaman sesi lokal (penjelas per soal, diisiPemimpin, tim): rekaman di store, bukan salinan
  function ubahSesiLokal(id, fn) {
    const s = UKP.store.get(); const arr = Array.isArray(s.sesiBersama) ? s.sesiBersama : []; const x = arr.find(y => y && y.id === id); if (!x) return false;
    try { fn(x); } catch (e) { console.error(e); return false; }
    UKP.store.save(); return true;
  }
  // v9.3 P1: apakah papan "sedang membahas" soal idx saat menyambung ke room. Saat mount (muat ulang / kembali dari lobi) sambungRoom
  // berjalan SEBELUM soal pertama digambar (elKini null): soal yang akan dipulihkan ke fase membahas (pulih = { idx }) dihitung terkunci,
  // supaya room tidak dikembalikan ke fase menjawab lalu dibuka ulang (HP sekilas ke layar menjawab, mulaiBahas mulai ulang)
  function terkunciSaatSambung(elKini, pertama, pulih, idx) {
    if (elKini) return !!(typeof elKini.terkunci === 'function' && elKini.terkunci());
    return !!(pertama && pulih && pulih.idx === idx);
  }
  // v9.3 P1: detik mengerjakan soal yang dilanjutkan (muat ulang / kembali dari lobi saat MENGERJAKAN). Bawaan: draf.detikSoal (v8.1,
  // disimpan tiap ±5 dtk). Bila room masih di fase menjawab soal yang sama (aktivitas sesi ini, idx dan soalId sama), dihitung dari
  // aktivitas.mulaiSoal (jam perangkat pemimpin ini) supaya papan cocok dengan HP. Nilai tidak wajar → draf.
  function detikKerjaLanjut(draf, a, sesiId, idx, soalId, kini) {
    const dDraf = Math.max(0, Math.floor(Number(draf && draf.detikSoal) || 0));
    if (!a || a.jenis !== 'latihan' || a.id !== sesiId || a.idx !== idx || a.fase !== 'jawab' || !Array.isArray(a.soalIds) || a.soalIds[idx] !== soalId) return dDraf;
    const m = Number(a.mulaiSoal); const d = (Number(kini) - m) / 1000;
    return m > 0 && isFinite(d) && d >= 0 && d <= 86400 ? Math.floor(d) : dDraf;
  }
  UKP.latihRoom = { _murni: MR, buatSiarRoom, ruangTersedia, peranRoom, terkunciSaatSambung, detikKerjaLanjut };
  // v9.5 urutan soal sesi Latih baru (dipisah dari mulai agar bisa diuji): paket try out + "Semua" tetap urutan asli;
  // selain itu L.urutBank (satu keluarga satu soal; f.bank = campur | baru | pengganti). o = { sudah: Set benar hari ini, salah: Set, acak }
  function urutLatih(arr, f, o) {
    o = o || {}; const opsi = { cara: f.bank, salah: o.salah || new Set() }; if (o.acak) opsi.acak = o.acak;
    if (f.n !== 'semua') return L.urutBank(arr, Number(f.n) || 20, opsi);
    const sudah = o.sudah || new Set(); const sisa = arr.filter(x => !sudah.has(x.id));
    return f.set ? (sisa.length ? sisa : arr) : L.urutBank(sisa.length ? sisa : arr, null, opsi);
  }
  // v9.5 saringan butir resmi (resmi=1): soal yang punya paling sedikit satu butir daun cakupan resmi untuk tingkat t.
  // Tanpa peta butir (K.adaPetaButir false) saringan tidak berlaku. luarResmi: soal tingkat t tanpa butir tingkat itu (halaman Bank soal)
  const adaPetaResmi = () => !!(K.adaPetaButir && K.adaPetaButir() && K.butirSoal);
  const butirResmiTingkat = (x, t) => K.butirSoal(x.id).some(b => b.indexOf(t + '.') === 0);
  const saringResmi = (arr, t) => adaPetaResmi() ? arr.filter(x => butirResmiTingkat(x, t)) : arr;
  const luarResmi = t => adaPetaResmi() ? K.semuaSoal(t).filter(x => !butirResmiTingkat(x, t)) : [];
  // v9.5.3 B4/B5: keterangan bila "Belum pernah dipakai" atau "Pengganti soal lama" tidak cukup untuk n soal yang akan dimulai.
  // Mengikuti urutan pengisian L.urutBank (baru: B lalu G lalu R; pengganti: G lalu B lalu R); r = L.pakai.ringkas(...). '' bila cukup
  function teksBankKurang(cara, n, r) {
    n = Math.max(0, Math.floor(Number(n) || 0)); if (!r || !n || (cara !== 'baru' && cara !== 'pengganti')) return '';
    const fa = x => UKP.fmt && UKP.fmt.angka ? UKP.fmt.angka(x) : String(x);
    const baru = Math.max(0, r.baru | 0), ganti = Math.max(0, r.penggantiSiap | 0);
    const punya = cara === 'baru' ? baru : ganti; if (punya >= n) return '';
    const sisa = n - punya; const lain = Math.min(sisa, cara === 'baru' ? ganti : baru); const ulang = sisa - lain;
    const asal = [lain ? fa(lain) + (cara === 'baru' ? ' soal pengganti' : ' soal yang belum pernah dipakai') : null, ulang ? fa(ulang) + ' soal yang sudah pernah dipakai' : null].filter(Boolean).join(' dan ');
    const kepala = cara === 'baru'
      ? (punya ? 'Hanya ' + fa(punya) + ' soal yang belum pernah dipakai. Sisanya ' : 'Tidak ada soal yang belum pernah dipakai di saringan ini. Sesi diisi ')
      : (punya ? 'Hanya ' + fa(punya) + ' soal pengganti yang siap. Sisanya ' : 'Belum ada soal pengganti yang siap di saringan ini. Sesi diisi ');
    return kepala + asal + '.';
  }
  // v9.5.3 B2: jumlah soal yang benar-benar dimulai dialog room "Mulai latihan bersama" (p = { n, set | topik }): pool yang sama dengan
  // #latih { mulai, n, set | topik } (soal tingkat profil, atau soal paket), lalu urutLatih seperti mulai(), dibatasi MR.MAKS_SOAL
  function jumlahMulaiRoom(p) {
    p = p || {}; const st = UKP.store.get(); const t = st && st.profil ? st.profil.tingkat : 'B';
    const n = Number(p.n) || 20; const set = p.set && K.daftarSet && K.daftarSet().some(x => x.set === p.set) ? p.set : '';
    let arr = set ? K.soalSet(set) : K.semuaSoal(t);
    if (p.topik) arr = arr.filter(x => x.topik === p.topik);
    if (!arr.length) return 0;
    return Math.min(urutLatih(arr, { n, bank: 'campur', set }, {}).length, MR.MAKS_SOAL || 120);
  }
  UKP.latihBank = { urutLatih, adaPetaResmi, saringResmi, luarResmi, teksBankKurang, jumlahMulaiRoom, nLatihTopik, nLatihDari, nLatihSalah };

  // ================= LATIH =================
  UKP.views.latih = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    const page = h('div', { class: 'page' });
    let timer = null; // interval tempo per soal; dihentikan saat periksa, saat pindah soal, dan saat unmount
    const hentikanTempo = () => { clearInterval(timer); timer = null; };
    let timerSesi = null; // v8.0 hitung mundur sesi latihan bersama; dihentikan saat sesi berakhir dan saat unmount
    const hentikanSesi = () => { clearInterval(timerSesi); timerSesi = null; };
    let padaLepas = null; // v8.1: simpan keadaan sesi bersama yang bisa dilanjutkan saat unmount
    let padaLepasRoom = null; // v8.2 B2: lepas pendengar room saat unmount (aktivitas room TIDAK diakhiri; pemandu bisa kembali)
    // paket soal bersumber (try out): f.set = kode paket (soal.sumber.set); pool = seluruh soal paket, lintas tingkat
    const paket = K.daftarSet ? K.daftarSet() : []; const paketDari = set => paket.find(p => p.set === set) || null;
    const f = { set: params.set && paketDari(params.set) ? params.set : '', kode: params.kode || '', topik: params.topik || '', jenis: params.jenis || '', kesulitan: params.kesulitan ? String(params.kesulitan) : '', n: params.n === 'semua' ? 'semua' : Number(params.n) || 20, hanyaSalah: !!params.hanyaSalah, kecuali: !!params.kecuali, tempo: !!params.tempo, baru2025: !!params.baru2025, gayaUkp: !!params.gayaUkp, laporan: params.laporan ? String(params.laporan).toUpperCase() : '' };
    // v9.5 bank soal: f.bank = campur (bawaan) | baru | pengganti; f.butir = ID butir daun cakupan resmi (pool = soal yang dipetakan ke butir itu)
    f.bank = params.bank === 'baru' || params.bank === 'pengganti' ? params.bank : 'campur';
    const infoButirF = id => id && UKP.cakupan && typeof UKP.cakupan.butir === 'function' ? UKP.cakupan.butir(id) : null;
    f.butir = typeof params.butir === 'string' && infoButirF(params.butir) ? params.butir : '';
    // v9.5 resmi=1: hanya soal dengan butir resmi tingkat target; diabaikan bila peta kosong atau saringan butir aktif
    const adaPeta = adaPetaResmi(); f.resmi = !!params.resmi && adaPeta;
    const resmiAktif = g => !!g.resmi && adaPeta && !g.butir;
    const kelTingkat = K.kelompok(tingkat);
    const luarTingkat = kode => !!kode && !kelTingkat.includes(kode);
    const gayaUkpNyata = x => x.jenis === 'kasus' || x.kasusId || x.kutipan || (x.stem || '').length >= 220;
    // butir laporan peserta (soal.laporanUjian, mis. "C-2026-10"; pilihan "B"/"C" = semua laporan tingkat itu).
    // Laporan berkode X hanya memuat soal kelompok UKP.tingkatKelompok[X] yang tingkat-nya memuat X (UKP.soalLaporanSah);
    // vignette (kasusId) ikut utuh bila salah satu anggotanya bertanda, tanpa mengubah data.
    // Bila belum ada soal bertanda untuk pilihan itu, saringan jatuh ke gaya UKP nyata.
    const tingkatLap = kode => String(kode || '').charAt(0);
    const sahLap = (x, kode) => UKP.laporanSah ? UKP.laporanSah(x, kode) : (UKP.tingkatKelompok[tingkatLap(kode)] || []).includes(x.kode) && (x.tingkat || []).includes(tingkatLap(kode));
    const cacheLap = new Map();
    function dataLap(kode) {
      if (!kode) return { soal: [], ids: new Set(), nTanda: 0 };
      if (!cacheLap.has(kode)) {
        const tanda = UKP.soalLaporanSah ? UKP.soalLaporanSah(kode) : (K.soalLaporan ? K.soalLaporan(kode) : []).filter(x => sahLap(x, kode));
        const soal = UKP.soalLaporanSah ? UKP.soalLaporanSah(kode, { vignette: true }) : tanda;
        cacheLap.set(kode, { soal, ids: new Set(soal.map(x => x.id)), nTanda: tanda.length });
      }
      return cacheLap.get(kode);
    }
    const soalLap = kode => dataLap(kode).soal;
    const lapAktif = g => !!g.laporan && soalLap(g.laporan).length > 0;
    const laporanAktif = () => lapAktif(f);
    const laporanCadangan = () => !!f.laporan && !laporanAktif();
    // v9.5 soal butir untuk tingkat butir itu (butir A.x memakai soal Tingkat A walau target B)
    const soalButirF = id => { const b = infoButirF(id); return b && K.soalButir ? K.soalButir(id, b.tingkat) : []; };
    // g: filter yang dipakai (bawaan f); opsi Jenis/Kelompok menghitung pool dengan satu saringan diganti
    function basis(g) {
      g = g || f;
      // laporan aktif: pool laporan (sudah tersaring tingkat laporan), dipersempit ke kelompok bila dipilih;
      // tanpa laporan: kelompok di luar tingkat target (mis. B6 untuk target A, atau E) memakai semua soal kelompok itu
      let arr = g.set ? K.soalSet(g.set).filter(x => !g.kode || x.kode === g.kode)
        : lapAktif(g) ? soalLap(g.laporan).filter(x => !g.kode || x.kode === g.kode)
        : g.butir ? soalButirF(g.butir).filter(x => !g.kode || x.kode === g.kode)
        : g.kode ? K.soalKelompok(g.kode, luarTingkat(g.kode) ? undefined : tingkat) : K.semuaSoal(tingkat);
      // v9.5: saringan butir juga mempersempit paket try out dan laporan peserta
      if (g.butir && (g.set || lapAktif(g))) { const ids = new Set(soalButirF(g.butir).map(x => x.id)); arr = arr.filter(x => ids.has(x.id)); }
      if (g.topik) arr = arr.filter(x => x.topik === g.topik);
      if (resmiAktif(g)) arr = saringResmi(arr, tingkat);
      return arr;
    }
    function soalSalah(kode) {
      if (!luarTingkat(kode)) return new Set(L.bukuKesalahan(tingkat, 200).map(j => j.soal));
      return new Set(s.jawaban.filter(j => j.kode === kode && !j.benar && j.opsi !== '-').map(j => j.soal));
    }
    function pool(ganti) {
      const g = ganti ? Object.assign({}, f, ganti) : f;
      let arr = basis(g);
      if (g.jenis) arr = arr.filter(x => x.jenis === g.jenis);
      if (g.kesulitan) arr = arr.filter(x => x.kesulitan === Number(g.kesulitan));
      if (g.kecuali) arr = arr.filter(x => x.kataKualifikasi && x.kataKualifikasi.length);
      if (lapAktif(g)) { const ids = dataLap(g.laporan).ids; arr = arr.filter(x => ids.has(x.id)); }
      if (g.gayaUkp || (!!g.laporan && !lapAktif(g))) arr = arr.filter(gayaUkpNyata);
      if (g.baru2025) arr = arr.filter(x => (x.dasarHukum || []).some(d => d.berlakuSejak && d.berlakuSejak >= '2025-01-01'));
      if (g.hanyaSalah) { const salah = soalSalah(g.kode); arr = arr.filter(x => salah.has(x.id)); }
      return arr;
    }
    // jumlah soal: 10 / 20 / 50 / "semua" (acak, tanpa soal yang sudah dijawab benar hari ini; bila semuanya sudah, pakai semua)
    const awalHari = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); })();
    function benarHariIni() { const ids = new Set(); for (const j of s.jawaban) if (j && j.benar && (j.pada || 0) >= awalHari) ids.add(j.soal); return ids; }
    function mulai(oj) {
      const arr = pool(); if (!arr.length) return false;
      // paket try out + "Semua": urutan asli try out (sumber.no), bukan acak
      // v9.5: selain itu L.urutBank lewat urutLatih (yang terakhir salah didahulukan saat diulang)
      jalankan(urutLatih(arr, f, { sudah: f.n === 'semua' ? benarHariIni() : null, salah: L.idSalahTerakhir ? L.idSalahTerakhir(s) : new Set() }), oj); return true;
    }
    const keSaringan = () => { modeFokus(false); hentikanTempo(); UKP.go('latih', Object.assign({}, f, { mulai: null, atur: 1 })); };
    // oj.ulang: putaran ulang soal yang salah (dari ringkasan); hasilnya tetap tercatat seperti jawaban biasa
    function jalankan(daftar, oj) {
      oj = oj || {};
      hentikanTempo(); page.innerHTML = ''; let idx = 0, benar = 0; const mulaiWaktu = Date.now();
      // v7.7: satu putaran tanpa jeda (penyebut tetap); soal yang salah dikumpulkan untuk "Ulangi N soal yang salah" di ringkasan
      const riwayat = [];
      // v7.9 latihan bersama: peserta dibaca saat putaran dimulai; riwayatB = [{ soal, per: { nama: { opsi, keyakinan, benar } } }]
      // v8.0: rekaman sesi (UKP.belajar.mulaiSesiBersama) + hitung mundur sesi
      // v8.1: hitung mundur = jumlah soal × detik tempo (Ujian 2,1 mnt/soal bawaan, Longgar 2,5); rekaman membawa { tempo, detikPerSoal };
      // oj.lanjut = keadaan L.bersamaAktif() → melanjutkan sesi terputus (soal, urutan, papan soal berjalan, sisa waktu)
      const lanjut = oj.lanjut || null;
      const sesiLama = lanjut && L.sesiBersamaDari ? L.sesiBersamaDari(lanjut.sesiId) : null;
      const peserta = sesiLama && sesiLama.peserta && sesiLama.peserta.length ? sesiLama.peserta.slice() : pesertaAktif(); const riwayatB = [];
      // v8.2 B2 room tim: niat room (params.room saat mulai, atau titik lanjut yang membawa room); sesi room ≤ 120 soal
      const R = ruangR();
      // V3: lanjut.room === 'terbit' = sesi room yang sudah dipindah ke satu layar → tidak menyambung lagi, tetapi rekaman tetap diterbitkan
      let roomNiat = !!peserta && !oj.ulang && !!(oj.room || (lanjut && lanjut.room && lanjut.room !== 'terbit')) && ruangTersedia();
      if (peserta && oj.room && !roomNiat && !lanjut) UKP.toast('Room tidak tersedia di halaman ini. Latihan berjalan di satu layar.');
      if (roomNiat && !lanjut && peranRoom() !== 'tuan') { roomNiat = false; UKP.toast('Perangkat ini bukan pemimpin room. Latihan berjalan di satu layar.'); }
      if (roomNiat && !sesiLama) { const pt = MR.potong(daftar); if (pt.dipotong) { daftar = pt.daftar; UKP.toast('Room memuat paling banyak ' + MR.MAKS_SOAL + ' soal; ' + MR.MAKS_SOAL + ' soal pertama dipakai.'); } }
      let diRoom = false, roomPernah = !!(peserta && lanjut && lanjut.room === 'terbit'), siar = null, lepasR = [], elKini = null, soalKini = null;
      let kunciKini = null; // v9.3 W1: { soalId, perR, pj, tim } kiriman bukaKunci terakhir (dikirim ulang bila room tersambung saat papan membahas)
      const hadirSesi = new Set(); // V3: nama yang benar-benar online/menjawab dari HP selama sesi (untuk "x dari 6 hadir")
      // v9.4 W: tempo 'bebas' (tanpa batas) → detik 0; titik lanjut tanpa batas tetap tanpa batas
      // v9.4 FA11: penentuan tempo lanjutan ada di MR.tempoLanjut (diuji di test/v94-w.test.js)
      const tl = lanjut ? MR.tempoLanjut(lanjut, tingkat) : null;
      const tb = tl ? { mode: tl.mode, detik: tl.detik } : (L.tempoBersama ? L.tempoBersama() : { mode: 'longgar', detik: 150 });
      const tanpaBatas = tb.mode === 'bebas';
      const detikTempo = tanpaBatas ? 0 : tb.detik;
      // v9.3 W1: waktu membahas per soal (0 = Bebas). Lanjutan: dari titik lanjut / rekaman (titik lanjut v9.2 tanpa field → Bebas)
      const angkaB = v => typeof v === 'number' && isFinite(v) && v >= 0 && v <= 3600 ? Math.round(v) : null;
      const detikBahasT = lanjut ? (angkaB(lanjut.detikBahas) != null ? angkaB(lanjut.detikBahas) : sesiLama && angkaB(sesiLama.detikBahas) != null ? angkaB(sesiLama.detikBahas) : 0)
        : (typeof L.bahasBersama === 'function' ? L.bahasBersama() : 0);
      // anggaran waktu latihan = jumlah soal × (waktu mengerjakan + waktu membahas); Bebas → jumlah soal × waktu mengerjakan. Lanjutan: anggaran tersimpan
      // v9.4 W: tanpa batas → anggaran 0 (tidak ada hitung mundur sesi; kop menampilkan lama latihan berjalan)
      const anggaranSesi = !peserta || tanpaBatas ? 0 : lanjut && lanjut.anggaranDetik ? lanjut.anggaranDetik : daftar.length * (detikTempo + detikBahasT);
      // sesi baru: sesi lama yang masih bisa dilanjutkan ditutup lebih dulu (tetap tersimpan bila berisi soal)
      if (peserta && !sesiLama && L.bersamaAktif) { const ba = L.bersamaAktif(); if (ba && L.akhiriSesiBersama) L.akhiriSesiBersama(ba.sesiId); }
      const sesiId = sesiLama ? sesiLama.id : peserta && L.mulaiSesiBersama ? L.mulaiSesiBersama(peserta, daftar.map(x => x.id), anggaranSesi, { tempo: tb.mode, detikPerSoal: detikTempo, detikBahas: detikBahasT, mode: 'latihan' }) : null;
      let sesiSelesai = false;
      // rotasi penjelas: hitungan per nama dalam sesi ini (dinaikkan setiap kali seseorang ditunjuk menjelaskan)
      const hitungPenjelas = {};
      const tunjuk = tri => { if (tri && tri.penjelas) hitungPenjelas[tri.penjelas] = (hitungPenjelas[tri.penjelas] || 0) + 1; };
      // v9.3 W1: muat ulang saat membahas → soal itu tampil lagi dengan kunci jawaban terbuka dan penghitung membahas melanjutkan dari
      // saat kunci dibuka (titik lanjut.bahas). Soal itu sudah tercatat; jawabannya diambil dari rekaman dan tidak dicatat ulang
      const pulihB = (() => {
        if (!sesiLama || !lanjut || !lanjut.bahas || typeof lanjut.bahas.soalId !== 'string') return null;
        const i = Math.min(Math.max(0, lanjut.idx || 0), daftar.length) - 1; const m = Number(lanjut.bahas.mulai);
        const q = i >= 0 && daftar[i] && daftar[i].id === lanjut.bahas.soalId ? (sesiLama.soal || []).find(y => y && y.id === lanjut.bahas.soalId) : null;
        return q && m > 0 && isFinite(m) ? { idx: i, soalId: q.id, mulai: Math.min(m, Date.now()), q } : null;
      })();
      let pulihKini = null; // soal yang sedang dipulihkan (onPeriksaBersama tidak mencatat ulang)
      if (sesiLama) {
        idx = Math.min(Math.max(0, lanjut.idx || 0), daftar.length);
        if (pulihB) idx = pulihB.idx;
        // soal yang sudah dibuka sebelum terputus: riwayat ringkasan + rotasi penjelas dipulihkan dari rekaman sesi
        (sesiLama.soal || []).forEach(q => {
          const so = K.soal(q.id); if (!so) return; const per = {};
          Object.keys(q.jawaban || {}).forEach(n => { const x = q.jawaban[n] || {}; per[n] = { opsi: x.o || '-', keyakinan: x.k || null, benar: !!x.b }; });
          riwayatB.push({ soal: so, per, detik: q.detik || 0 });
          // soal yang dipulihkan menghitung penjelasnya sendiri saat kunci dibuka ulang (rotasi tetap sama)
          if (L.triaseSoal && !(pulihB && q.id === pulihB.soalId)) { try { tunjuk(L.triaseSoal(so, per, { urutan: peserta, hitungPenjelas })); } catch (e) {} }
        });
      }
      const waktuEl = peserta ? h('span', { class: 'waktu-sesi', role: 'timer', 'aria-live': 'off' }) : null;
      // v9.2 G1: "Sisa waktu latihan 38:20"; habis → "waktu latihan habis (boleh lanjut)" (warna redup, latihan tetap berjalan)
      const fmtSisa = d => d <= 0 ? 'waktu latihan habis (boleh lanjut)' : 'Sisa waktu latihan ' + fmtJamPendek(d);
      // sisa waktu dihitung dari titik mulai hitung (sesi baru: anggaran penuh; lanjutan: sisa yang tersimpan)
      const sisaAwal = lanjut ? Math.max(0, Number(lanjut.sisaDetik) || 0) : anggaranSesi; const tHitung = Date.now();
      const sisaSesi = () => Math.ceil(sisaAwal - (Date.now() - tHitung) / 1000);
      // v9.4 W: lama latihan berjalan (tanpa batas): lanjutan meneruskan lama yang tersimpan di titik lanjut (lamaDetik)
      const lamaAwal = tl ? tl.lamaAwal : 0;
      const lamaSesi = () => Math.max(0, Math.floor(lamaAwal + (Date.now() - tHitung) / 1000));
      // v9.3 W1: kata "waktu" dibungkus .waktu-kata (disembunyikan di HP 320 px: "Sisa latihan 9:53"); teks lengkap tetap untuk pembaca layar
      const gambarWaktu = () => { if (!waktuEl) return;
        // v9.4 W: tanpa batas → "Waktu latihan 12:05" (hitung naik), tidak pernah habis
        if (tanpaBatas) { const dl = fmtNaik(lamaSesi()); if (waktuEl.textContent !== 'Waktu latihan ' + dl) waktuEl.replaceChildren(h('span', { class: 'waktu-kata' }, 'Waktu '), h('span', { class: 'waktu-kapital' }, 'latihan '), dl); waktuEl.dataset.naik = ''; return; }
        const d = sisaSesi(); const t = fmtSisa(d);
        if (waktuEl.textContent !== t) { if (d > 0) waktuEl.replaceChildren('Sisa ', h('span', { class: 'waktu-kata' }, 'waktu '), 'latihan ' + fmtJamPendek(d)); else waktuEl.textContent = t; } waktuEl.toggleAttribute('data-habis', d <= 0); if (d > 0 && d <= 120) waktuEl.dataset.sisa = 'sedikit'; else delete waktuEl.dataset.sisa; };
      // v9.3 W1 penghitung fase di kop (satu fase, satu penghitung; jam perangkat ini):
      //   soal tampil → "Mengerjakan · sisa 1:21" → habis "Mengerjakan · lewat 0:12" (nada peringatan)
      //   kunci jawaban dibuka → "Membahas · sisa 1:30" → "Membahas · lewat 0:20"; Bebas → "Membahas 0:45" (hitung naik)
      // Tanpa tindakan otomatis saat habis; satu pengumuman pembaca layar per fase ("Waktu mengerjakan habis." / "Waktu membahas habis.")
      const lajuEl = peserta ? h('span', { class: 'laju-soal fase-waktu', role: 'timer', 'aria-live': 'off' }) : null;
      let mulaiSoal = Date.now(), lajuJalan = false, drafSoal = null; // drafSoal = { soalId, jb, yb } papan soal berjalan
      let kunciTerbuka = false; // kunci soal berjalan sudah dibuka (soal tercatat) → titik lanjut = soal berikutnya
      let faseBahas = null; // { soalId, mulai (ms) } selama membahas; null selama mengerjakan
      let habisDiumumkan = ''; // kunci fase yang sudah diumumkan habis
      const detikSoalKini = () => Math.max(0, Math.floor((Date.now() - mulaiSoal) / 1000 + 0.05)); // +50 ms: detak interval yang sedikit lebih awal tetap terhitung
      const detikBahasKini = () => faseBahas ? Math.max(0, Math.floor((Date.now() - faseBahas.mulai) / 1000 + 0.05)) : 0;
      const gambarLaju = () => {
        if (!lajuEl) return;
        const bahas = !!faseBahas; const d = bahas ? detikBahasKini() : detikSoalKini(); const target = bahas ? detikBahasT : detikTempo;
        const label = bahas ? 'Membahas' : 'Mengerjakan'; const sisa = target - d; const lewat = target > 0 && sisa < 0;
        const angka = target > 0 ? (lewat ? 'lewat ' + fmtJamPendek(-sisa) : 'sisa ' + fmtJamPendek(sisa)) : fmtNaik(d);
        const sep = target > 0 ? ' · ' : ' ';
        // v9.3 P1: ikon jam + label + angka (mono tebal, lihat blok CSS "v9.3 P1"); bagian dibuat sekali, tiap detik hanya teksnya diganti
        if (!lajuEl.querySelector('.laju-angka')) lajuEl.replaceChildren(ikon('jam', 'laju-ikon', true), h('span', { class: 'laju-label' }), h('span', { class: 'laju-sep' }), h('span', { class: 'laju-angka' }));
        const elL = lajuEl.querySelector('.laju-label'), elS = lajuEl.querySelector('.laju-sep'), elA = lajuEl.querySelector('.laju-angka');
        if (elL.textContent !== label) elL.textContent = label;
        if (elS.textContent !== sep) elS.textContent = sep;
        // "sisa"/"lewat" huruf biasa (.laju-kata), angka waktu mono tebal (.laju-digit): muat di HP 320 px tanpa memotong angka
        if (elA.textContent !== angka) { const m = /^(sisa |lewat )?(.*)$/.exec(angka); elA.replaceChildren(m[1] ? h('span', { class: 'laju-kata' }, m[1]) : null, h('span', { class: 'laju-digit' }, m[2])); }
        lajuEl.dataset.fase = bahas ? 'bahas' : 'kerja';
        lajuEl.toggleAttribute('data-lewat', lewat);
        lajuEl.title = bahas ? (target > 0 ? 'Waktu membahas soal ini, target ' + fmtJamPendek(target) : 'Waktu membahas soal ini (bebas)') : target > 0 ? 'Waktu mengerjakan soal ini, target ' + fmtJamPendek(target) : 'Waktu mengerjakan soal ini (tanpa batas)';
        const kunciFase = (bahas ? 'b:' + faseBahas.soalId : 'k:' + ((daftar[idx] || {}).id || ''));
        if (target > 0 && sisa <= 0 && habisDiumumkan !== kunciFase) { habisDiumumkan = kunciFase; if (UKP.umumkan) UKP.umumkan(bahas ? 'Waktu membahas habis.' : 'Waktu mengerjakan habis.'); }
      };
      // waktu membahas soal yang sedang dibahas dicatat (saat Lanjut, saat latihan diakhiri, atau sebelum soal lain digambar)
      const catatBahasKini = () => {
        const fb = faseBahas; faseBahas = null; if (!fb || !sesiId || sesiSelesai || typeof L.catatBahasSesi !== 'function') return;
        try { L.catatBahasSesi(sesiId, fb.soalId, (Date.now() - fb.mulai) / 1000); } catch (e) { console.error(e); }
      };
      // v8.1 lanjutkan sesi: keadaan disimpan saat mulai, setiap perubahan papan, kunci dibuka, Lanjut, dan tiap ±5 detik; null saat sesi berakhir
      const simpanAktif = () => {
        if (!sesiId || sesiSelesai || !L.simpanBersamaAktif) return;
        L.simpanBersamaAktif({ sesiId, soalIds: daftar.map(x => x.id), idx: idx + (kunciTerbuka ? 1 : 0), sisaDetik: tanpaBatas ? 0 : Math.max(0, sisaSesi()), anggaranDetik: anggaranSesi, tempo: tb.mode, detikPerSoal: detikTempo, lamaDetik: lamaSesi(), ulang: oj.ulang ? 1 : null, room: roomNiat ? 1 : roomPernah ? 'terbit' : null,
          detikBahas: detikBahasT, bahas: faseBahas ? { soalId: faseBahas.soalId, mulai: faseBahas.mulai } : null,
          draf: !kunciTerbuka && lajuJalan && daftar[idx] ? { soalId: daftar[idx].id, jb: (drafSoal && drafSoal.jb) || {}, yb: (drafSoal && drafSoal.yb) || {}, detikSoal: detikSoalKini() } : null });
      };
      const lepasAktif = () => { if (sesiId && L.simpanBersamaAktif) { const a = UKP.store.get().bersamaAktif; if (!a || a.sesiId === sesiId) L.simpanBersamaAktif(null); } };
      padaLepas = peserta ? simpanAktif : null; // unmount (pindah halaman di tengah sesi): simpan titik lanjut terakhir
      let tik = 0;
      // v9.3 P1: detak 250 ms (DOM hanya berubah bila teks berubah) supaya penghitung fase tidak tertinggal sampai 1 detik dari saat
      // kunci dibuka / soal tampil (detak 1 detik tidak selaras dengan awal fase); titik lanjut tetap tiap ±5 detik (20 detak)
      if (waktuEl) { gambarWaktu(); hentikanSesi(); timerSesi = setInterval(() => { if (!waktuEl.isConnected && !page.isConnected) { hentikanSesi(); return; } gambarWaktu(); gambarLaju(); if (++tik % 20 === 0) simpanAktif(); }, 250); }
      // baris peserta di kop: ≥ 768 px "6 orang: Nicky, Mita, …"; di HP cukup "6 orang" (daftar lengkap di title)
      const pesertaEl = peserta ? h('span', { class: 'fokus-peserta', title: peserta.join(', ') }, h('span', null, peserta.length + ' orang'), h('span', { class: 'fokus-peserta-nama' }, ': ' + peserta.join(', '))) : null;
      const metaBersama = null; // v9.2 G1: bilah bawah cukup 'N dari M orang sudah menjawab' (dari komponen soal)
      // DESAIN-V7 P3-01: mode fokus (tanpa topbar/bar bawah di HP); bar 48 px berisi Keluar · "Soal 7 dari 20 · 5 benar" · Atur saringan · progres 2 px.
      // "Selesai" ada di dalam konfirmasi Keluar
      modeFokus(true);
      const kop = fokusBar({ label: 'Kemajuan latihan', onKeluar: () => keluar() }); const area = h('div', { class: 'latih-area' });
      // v8.2 B2 (T1): skor tim kumulatif sebagai kepala, tepat di bawah bar fokus (latihan bersama, dengan atau tanpa room)
      const skorEl = peserta ? h('div', { class: 'kop-tim-latih', hidden: true }) : null;
      page.append(...[kop, skorEl, area].filter(Boolean));
      // latihan bersama selalu memakai halaman lebar (papan 6 orang dan stem selebar kartu), dari saringan maupun dari #latih langsung
      if (peserta) { kop.classList.add('fokus-bersama'); page.classList.add('lebar'); }
      const tautanAtur = () => h('button', { type: 'button', class: 'btn btn-text btn-sm tautan-atur', onclick: () => { if (riwayat.length && UKP.tim) UKP.tim.kirimRingkasan({ selesai: true }); keSaringan(); } }, 'Atur saringan');
      // v8.2 B2: Menu kop (fokusBar opsi menu, B4) berisi Ke menu · Atur saringan · Pindah ke satu layar (room) · Selesai sekarang;
      // bila fokusBar belum mendukung menu, tombol lama tetap di bar aksi
      const adaMenuKop = !!peserta && typeof kop.aturMenu === 'function';
      function itemMenuKop() {
        // v9.2 G1: lewat room → Kembali ke lobi (latihan tetap berjalan) · Lanjut tanpa HP anggota · Akhiri; "Atur saringan" hanya di satu layar
        const room = diRoom || roomNiat;
        return [room ? { teks: 'Kembali ke lobi (latihan tetap berjalan)', ikon: 'back', onclick: () => keLobi() } : { teks: 'Atur saringan', ikon: 'saring', onclick: () => keMenu() },
          diRoom ? { teks: 'Lanjut tanpa HP anggota', ikon: 'tim', onclick: () => pindahSatuLayar() } : null,
          { teks: 'Akhiri latihan dan lihat hasil', ikon: 'keluar', bahaya: true, onclick: () => selesaiSekarang() }].filter(Boolean);
      }
      if (adaMenuKop) kop.aturMenu(itemMenuKop());
      // kanan bar fokus (bersama): tempo soal, laju, pill sambungan room (dibuat ulang tiap kali: pill melepas pendengarnya saat terlepas)
      let tempoKini = null;
      const kananBersama = () => [tempoKini, lajuEl, diRoom && typeof UKP.c.statusRoom === 'function' ? (() => { try { return UKP.c.statusRoom({ ringkas: true }); } catch (e) { return null; } })() : null,
        diRoom && !adaMenuKop ? h('button', { type: 'button', class: 'btn btn-text btn-sm', onclick: () => pindahSatuLayar() }, 'Lanjut tanpa HP anggota') : null];
      function gambarSkor() {
        if (!skorEl) return;
        const tim = MR.timKumulatif(riwayatB);
        if (!tim.dijawab) { skorEl.hidden = true; skorEl.replaceChildren(); return; }
        const sejak = MR.sejakLulus(MR.jejakTim(riwayatB));
        let el = null;
        if (typeof UKP.c.skorTim === 'function') { try { el = UKP.c.skorTim(tim, { sejak }); } catch (e) { console.error(e); el = null; } }
        if (!el) el = h('div', { class: 'skor-tim' }, h('p', { class: 'skor-tim-teks' }, h('strong', null, MR.teksSkor(tim))), sejak ? h('p', { class: 'skor-tim-sejak small' }, 'Tim di atas garis lulus sejak soal ' + sejak) : null);
        skorEl.replaceChildren(el); skorEl.hidden = false;
      }
      // "Selesai sekarang" (latihan bersama): konfirmasi → akhiri sesi → evaluasi tim
      function selesaiSekarang() {
        const n = riwayatB.length;
        UKP.konfirmasi('Akhiri latihan dan lihat hasil?', 'Hanya soal yang kunci jawabannya sudah dibuka yang masuk hasil (' + n + ' soal).' + (kunciTerbuka ? '' : ' Soal yang sedang tampil tidak dihitung.'), { ya: 'Akhiri dan lihat hasil', tidak: 'Lanjutkan latihan' }).then(ya => { if (ya && page.isConnected) selesai(); });
      }
      // v9.2 G1: "Kembali ke lobi (latihan tetap berjalan)": room tidak diakhiri, titik lanjut disimpan; lobi menawarkan "Kembali ke latihan"
      function keLobi() {
        simpanAktif(); UKP.go('room');
      }
      // tutup rekaman sesi (sekali) → salinan sesi atau null; room: rekaman (dengan tim) diterbitkan dan aktivitas room diakhiri
      function akhiriSesi() {
        if (!sesiSelesai) catatBahasKini(); // v9.3 W1: soal terakhir: waktu membahas dicatat saat latihan diakhiri
        const sesi = sesiId && !sesiSelesai && L.akhiriSesiBersama ? L.akhiriSesiBersama(sesiId) : null; lepasAktif(); sesiSelesai = true;
        akhirRoom(sesi);
        return sesi;
      }
      // "Ke menu" (latihan bersama): kembali ke saringan; sesi yang sudah berisi soal ditutup dan tetap tersimpan di Dasbor tim
      function keMenu() {
        const tutup = () => { hentikanSesi(); akhiriSesi(); if (riwayat.length && UKP.tim) UKP.tim.kirimRingkasan({ selesai: true }); keSaringan(); };
        if (!riwayatB.length) { tutup(); return; }
        UKP.konfirmasi('Kembali ke saringan?', 'Latihan bersama diakhiri. ' + riwayatB.length + ' soal yang kunci jawabannya sudah dibuka tetap tersimpan dan bisa dilihat di Dasbor tim.', { ya: 'Akhiri dan atur saringan', tidak: 'Lanjutkan latihan' }).then(ya => { if (ya && page.isConnected) tutup(); });
      }
      function keluar() {
        const n = peserta ? riwayatB.length : riwayat.length;
        if (!n) { if (peserta) { hentikanSesi(); akhiriSesi(); } if (langsungMulai) { modeFokus(false); hentikanTempo(); UKP.kembali(); } else keSaringan(); return; }
        UKP.konfirmasi('Keluar dari latihan?', n + ' jawaban sudah tercatat. Ringkasan latihan ditampilkan setelah keluar.', { ya: 'Keluar dan lihat ringkasan', tidak: 'Lanjutkan latihan' }).then(ya => { if (ya && page.isConnected) selesai(); });
      }
      // ---- room: sambung, putus, siaran ----
      const namaPemandu = () => { const i = infoRoom(); return (i && i.nama) || String((UKP.store.get().profil || {}).nama || '').trim(); };
      const lepasPendengar = () => { lepasR.forEach(f => { try { f(); } catch (e) {} }); lepasR = []; };
      function isiPapanJauh() {
        if (!diRoom || !elKini || typeof elKini.isiJauh !== 'function' || !soalKini) return;
        const pm = namaPemandu();
        try { const jw = R.jawabanSemua(sesiId) || {}; Object.keys(jw).forEach(n => { if (samaNamaR(n, pm)) return; const v = MR.isiDok(jw[n], soalKini.id); if (v) elKini.isiJauh(n, v); }); } catch (e) { console.error(e); }
        gambarHadir();
      }
      function gambarHadir() {
        if (!elKini || typeof elKini.aturHadir !== 'function') return;
        if (!diRoom) { elKini.aturHadir(null); return; }
        let hd = {}; try { hd = R.hadir() || {}; } catch (e) {}
        Object.keys(hd).forEach(n => { if (hd[n] && hd[n].online) hadirSesi.add(n); });
        elKini.aturHadir(MR.hadirPeta(hd, peserta, namaPemandu(), hadirSesi));
      }
      function sambungRoom() {
        if (!roomNiat || diRoom || sesiSelesai || !sesiId) return false;
        if (peranRoom() !== 'tuan') return false;
        lepasPendengar();
        siar = buatSiarRoom(R, { sesiId, soalIds: daftar.map(x => x.id), detikPerSoal: detikTempo, detikBahas: detikBahasT, akhirSesi: () => tanpaBatas ? null : Date.now() + Math.max(0, sisaSesi()) * 1000, peserta: () => peserta.slice() });
        // v9.3 W1: papan yang sedang membahas (mis. setelah muat ulang) tidak mengembalikan room ke fase menjawab
        // v9.3 P1: juga saat mount, sebelum soal yang dipulihkan ke fase membahas digambar (lihat terkunciSaatSambung)
        const terkunciKini = terkunciSaatSambung(elKini, pertama, pulihB, Math.min(idx, daftar.length - 1));
        if (!siar.mulai(Math.min(idx, daftar.length - 1), terkunciKini)) { siar = null; return false; }
        if (terkunciKini && kunciKini && soalKini && kunciKini.soalId === soalKini.id && !siar.faseKunci(idx)) siar.kunci(kunciKini.soalId, kunciKini.perR, kunciKini.pj, kunciKini.tim);
        diRoom = true; roomPernah = true;
        lepasR.push(R.on('jawaban', ev => {
          if (!diRoom || !ev || ev.aktivitas !== sesiId || !elKini || !soalKini || typeof elKini.isiJauh !== 'function' || samaNamaR(ev.nama, namaPemandu())) return;
          elKini.isiJauh(ev.nama, MR.isiDok(ev.dok, soalKini.id));
        }));
        lepasR.push(R.on('hadir', () => { if (diRoom) gambarHadir(); }));
        // V9 R1: setelah muat ulang/kembali dari lobi, yang sudah punya dokumen jawaban di latihan ini dianggap pernah masuk (status "HP terputus")
        try { Object.keys(R.jawabanSemua(sesiId) || {}).forEach(n => hadirSesi.add(n)); } catch (e) {}
        // v9.2 G1 anggota yang menyusul: daftar room yang bertambah selama latihan → baris baru mulai soal berikutnya
        // V9 T1: patokan daftar room awal disimpan di rekaman latihan (sekali), jadi tetap benar setelah muat ulang atau kembali dari lobi
        if (!daftarRoomAwal) { const rk = daftarRoomKini(); daftarRoomAwal = (typeof L.roomAwalSesi === 'function' ? L.roomAwalSesi(sesiId, rk) : null) || rk; }
        lepasR.push(R.on('state', () => { if (diRoom) cekSusulan(); }));
        lepasR.push(R.on('peran', () => { if (diRoom && peranRoom() !== 'tuan') { const st = (() => { try { return R.state(); } catch (e) { return null; } })(); putusRoom(false); roomPernah = false; UKP.toast(((st && st.tuan) || 'Perangkat lain') + ' sekarang memandu room. Latihan ini berlanjut di satu layar.'); } }));
        if (adaMenuKop) kop.aturMenu(itemMenuKop());
        kop.atur(null, null, kananBersama());
        if (elKini && !(elKini.terkunci && elKini.terkunci()) && soalKini) { siar.soal(idx); isiPapanJauh(); }
        simpanAktif();
        return true;
      }
      // v9.2 G1 anggota yang menyusul (daftar room bertambah: pemimpin menambah nama, atau perangkat pemimpin menambahkan anggota bernama baru)
      let daftarRoomAwal = null; const dikabari = new Set();
      function daftarRoomKini() { try { const st = R.state(); return st && st.room && Array.isArray(st.room.peserta) ? st.room.peserta.slice() : []; } catch (e) { return []; } }
      // nama yang menyusul = di daftar room sekarang, tidak di patokan awal, belum di peserta (yang dilepas centangnya di dialog Mulai ada di patokan → tidak ikut)
      const susulKini = () => !peserta || !daftarRoomAwal ? [] : MR.susulan(daftarRoomKini(), daftarRoomAwal, peserta).slice(0, Math.max(0, (L.MAKS_PESERTA || 12) - peserta.length));
      function cekSusulan() {
        const baru = susulKini().filter(n => !dikabari.has(n.toLowerCase())); if (!baru.length) return;
        baru.forEach(n => dikabari.add(n.toLowerCase()));
        UKP.toast(L.gabungNama(baru) + ' ikut mulai soal berikutnya.');
      }
      // dipanggil di awal gambar(): nama yang menyusul masuk daftar papan, rekaman latihan, dan daftar peserta di room
      function terapkanSusulan() {
        if (!diRoom) return;
        const masuk = [];
        susulKini().forEach(n => { const nm = sesiId && L.tambahPesertaSesi ? L.tambahPesertaSesi(sesiId, n) : n; if (nm && !peserta.some(x => samaNamaR(x, nm)) && peserta.length < (L.MAKS_PESERTA || 12)) { peserta.push(nm); masuk.push(nm); } });
        if (masuk.length && siar && typeof siar.peserta === 'function') siar.peserta(peserta);
      }
      // lanjutkan setelah muat ulang: room dipulihkan oleh boot (UKP.ruangUI.boot) sesudah view dirender → tunggu peran tuan
      function tungguRoom() {
        if (!roomNiat || diRoom || !R || typeof R.on !== 'function') return;
        const coba = () => { if (sambungRoom() || !roomNiat || sesiSelesai) { lepasTunggu.forEach(f => { try { f(); } catch (e) {} }); lepasTunggu = []; } };
        let lepasTunggu = ['status', 'state', 'peran'].map(nm => R.on(nm, coba));
        lepasR.push(() => { lepasTunggu.forEach(f => { try { f(); } catch (e) {} }); lepasTunggu = []; });
      }
      function putusRoom(akhiri) {
        lepasPendengar();
        if (akhiri && siar) { try { siar.lepas(); } catch (e) {} }
        diRoom = false; roomNiat = false; siar = null;
        if (elKini && typeof elKini.aturHadir === 'function') elKini.aturHadir(null);
        if (adaMenuKop) kop.aturMenu(itemMenuKop());
        kop.atur(null, null, kananBersama());
        simpanAktif();
      }
      // "Pindah ke satu layar" (T5): room dilepas untuk sesi ini; soal, nomor, dan jawaban yang sudah masuk tetap; rekaman tetap diterbitkan
      function pindahSatuLayar() {
        UKP.konfirmasi('Lanjut tanpa HP anggota?', 'HP anggota berhenti menerima soal dan kembali ke lobi. Soal, nomor soal, dan jawaban yang sudah masuk tetap di sini; jawaban berikutnya Anda ketuk di papan. Hasil tetap dikirim ke room saat latihan selesai.', { ya: 'Lanjut tanpa HP anggota', tidak: 'Tetap pakai HP anggota' })
          .then(ya => { if (!ya || !page.isConnected || !diRoom) return; putusRoom(true); UKP.toast('Latihan berlanjut tanpa HP anggota.'); });
      }
      // akhir sesi: rekaman dilengkapi tim (+ diisiPemimpin dari rekaman lokal) lalu diterbitkan; aktivitas room diakhiri
      function akhirRoom(sesi) {
        lepasPendengar();
        const pernah = roomPernah; diRoom = false; roomNiat = false;
        if (!pernah || peranRoom() !== 'tuan') { siar = null; return; }
        const sr = siar || buatSiarRoom(R, { sesiId, soalIds: daftar.map(x => x.id), detikPerSoal: detikTempo, detikBahas: detikBahasT, akhirSesi: null }); siar = null;
        if (sesi) {
          try {
            const pj = {}; (sesi.soal || []).forEach(q => { if (q && q.penjelas) pj[q.id] = q.penjelas; });
            let dariRoom = {}; try { dariRoom = R.penjelasSemua(sesiId) || {}; } catch (e) {}
            let paham = {}; try { paham = R.jawabanSemua(sesiId) || {}; } catch (e) {}
            // V3: hadir = pemandu + yang online atau menjawab dari HP selama sesi; yang hanya diisi pemandu (tidak pernah di room) tidak dihitung hadir
            const hadirNama = (sesi.peserta || []).filter(n => samaNamaR(n, namaPemandu()) || [...hadirSesi].some(x => samaNamaR(x, n)) || Object.keys(paham).some(x => samaNamaR(x, n) && paham[x] && paham[x].j && Object.keys(paham[x].j).length));
            const tim = typeof L.timDariSesi === 'function' ? L.timDariSesi(sesi, { paham, penjelas: Object.assign(pj, dariRoom), hadir: hadirNama }) : Object.assign(MR.timKumulatif(riwayatB), {});
            if (tim) { sesi.tim = tim; ubahSesiLokal(sesi.id, x => { x.tim = tim; }); }
          } catch (e) { console.error(e); }
        }
        try { sr.selesai(sesi); } catch (e) { console.error(e); }
      }
      const dari = daftar.length;
      const judulKop = (no, nBenar) => peserta
        // v9.2 G1: daftar nama tidak lagi di kop (jumlah orang ada di bilah bawah papan)
        ? [h('span', { class: 'fokus-baris' }, (oj.ulang ? 'Ulang · soal ' : 'Soal ') + no + ' dari ' + dari + ' · ', waktuEl)]
        : (oj.ulang ? 'Ulang · soal ' : 'Soal ') + no + ' dari ' + dari + ' · ' + nBenar + ' benar';
      let pertama = true;
      function gambar() {
        tutupLihat(true);
        catatBahasKini(); // v9.3 W1 (biasanya sudah dicatat oleh Lanjut)
        hentikanTempo(); area.innerHTML = '';
        if (idx >= daftar.length) { selesai(); return; }
        terapkanSusulan();
        const soal = daftar[idx]; const anggaran = soal.anggaranDetik || 150; const no = idx;
        // v9.5.3 B1: papan bersama tidak memakai hitung mundur "Waktu ketat per soal"; waktu per soal hanya mengikuti "Waktu mengerjakan per soal"
        const tempoEl = f.tempo && !peserta ? h('span', { class: 'timer', role: 'timer' }, U.jam(anggaran)) : null;
        // v8.1 laju soal: mulai dari 0 (atau dari draf yang dipulihkan); papan soal berjalan dipulihkan lewat bersama.awal
        const pulihIni = pertama && pulihB && pulihB.idx === idx && pulihB.soalId === soal.id ? pulihB : null;
        const draf = !pulihIni && pertama && lanjut && lanjut.draf && lanjut.draf.soalId === soal.id ? lanjut.draf : null; pertama = false;
        // v9.3 P1: lewat room, room yang masih di fase menjawab soal ini menentukan detik mengerjakan (sama dengan HP); lainnya draf
        let aktR = null; if (draf && roomNiat && R && typeof R.state === 'function') { try { const st = R.state(); aktR = st && st.aktivitas; } catch (e) { aktR = null; } }
        const detikDraf = draf ? detikKerjaLanjut(draf, aktR, sesiId, idx, soal.id, Date.now()) : 0;
        mulaiSoal = Date.now() - detikDraf * 1000; lajuJalan = !!peserta; kunciTerbuka = false;
        drafSoal = draf ? { soalId: soal.id, jb: Object.assign({}, draf.jb), yb: Object.assign({}, draf.yb) } : { soalId: soal.id, jb: {}, yb: {} };
        let awal = null;
        if (draf) { awal = {}; Object.keys(draf.jb || {}).forEach(n => { awal[n] = { o: draf.jb[n], k: (draf.yb || {})[n] || null }; }); }
        if (pulihIni) { awal = {}; const jw = pulihIni.q.jawaban || {}; Object.keys(jw).forEach(n => { const x = jw[n] || {}; awal[n] = { o: x.o || '-', k: x.k || null }; }); }
        if (lajuEl) gambarLaju();
        // nomor soal hanya di bar fokus (satu rumah per fakta); kop soal cukup menampilkan kesulitan
        tempoKini = tempoEl;
        kop.atur(judulKop(no + 1, benar), no / Math.max(1, dari) * 100, peserta ? kananBersama() : [tempoEl, tautanAtur()]);
        let triKini = null;
        const el = UKP.c.soal(soal, { konteks: 'latih', detikAwal: detikDraf,
          bersama: peserta ? { peserta, awal, hitungPenjelas, namaPemandu: roomNiat ? namaPemandu() : null, onTriase: tri => { triKini = tri; tunjuk(tri); },
            // v8.2 B2: isian dari HP tidak masuk draf lanjutan (setelah muat ulang diambil lagi dari room, hurufnya tetap tersembunyi)
            onUbah: (nama, v) => { const dariHp = !!(el && el.sumberBersama && el.sumberBersama()[nama] === 'hp'); if (v.o && !dariHp) drafSoal.jb[nama] = v.o; else delete drafSoal.jb[nama]; if (v.k && !dariHp) drafSoal.yb[nama] = v.k; else delete drafSoal.yb[nama]; simpanAktif(); },
            // v8.2 B2: setelah kunci + triase → penjelas disimpan di rekaman lokal; room: bukaKunci(soalId, per, { penjelas, tim }) + catatan diisi pemandu
            onKunci: ({ per, tri, sumber }) => {
              const perR = MR.perRoom(per); const pj = MR.penjelas(tri, perR);
              const diisi = diRoom ? MR.diisi(sumber, perR, namaPemandu()) : [];
              if (sesiId && (pj || diisi.length)) ubahSesiLokal(sesiId, x => {
                const q = (x.soal || []).find(y => y && y.id === soal.id); if (q && pj) q.penjelas = pj;
                if (diisi.length) { x.diisiPemimpin = x.diisiPemimpin && typeof x.diisiPemimpin === 'object' ? x.diisiPemimpin : {}; diisi.forEach(n => { const d = x.diisiPemimpin[n] = Array.isArray(x.diisiPemimpin[n]) ? x.diisiPemimpin[n] : []; if (d.indexOf(soal.id) < 0) d.push(soal.id); }); }
              });
              gambarSkor();
              const t = MR.timKumulatif(riwayatB); kunciKini = { soalId: soal.id, perR, pj, tim: { benar: Math.min(1000, t.benar), dijawab: Math.min(1000, t.dijawab) } };
              if (diRoom && siar) siar.kunci(soal.id, perR, pj, kunciKini.tim);
            } } : null,
          onPeriksaBersama: peserta ? (per, detik) => {
            // v9.3 W1: soal yang dipulihkan (muat ulang saat membahas): sudah tercatat → hanya fase membahas yang dilanjutkan
            if (pulihKini && pulihKini.soalId === soal.id) {
              const pb = pulihKini; pulihKini = null; lajuJalan = false; kunciTerbuka = true; faseBahas = { soalId: soal.id, mulai: pb.mulai }; gambarLaju(); simpanAktif(); return;
            }
            const m = {}; Object.keys(per).forEach(n => { m[n] = { o: per[n].opsi, k: per[n].keyakinan || null }; });
            L.catatJawabanBersama(soal, m, detik, sesiId ? { sesi: sesiId } : null);
            if (sesiId && L.catatSoalSesi) L.catatSoalSesi(sesiId, soal, per, detik);
            riwayatB.push({ soal, per, detik });
            // laju berhenti saat kunci dibuka; soal ini sudah tercatat → titik lanjut = soal berikutnya
            // v9.3 W1: fase berganti ke membahas (penghitung membahas mulai dari saat kunci jawaban dibuka)
            lajuJalan = false; faseBahas = { soalId: soal.id, mulai: Date.now() }; gambarLaju();
            kunciTerbuka = true; simpanAktif();
          } : null,
          onKeMenu: peserta && !adaMenuKop ? keMenu : null, onSelesaiSekarang: peserta && !adaMenuKop ? selesaiSekarang : null, metaBersama,
          aksiKiri: soalSelesai().length ? tombolLihat() : null,
          onPeriksa: (b, jawab, detik, keyakinan) => { hentikanTempo(); riwayat.push({ soal, benar: !!b, jawab, detik, ulang: !!oj.ulang, keyakinan: keyakinan || null }); kop.atur(peserta ? null : judulKop(no + 1, benar + (b ? 1 : 0)), (no + 1) / Math.max(1, dari) * 100, peserta ? undefined : [tautanAtur()]); }, onKeyakinan: v => { const r = riwayat[riwayat.length - 1]; if (r && r.soal === soal) r.keyakinan = v || null; },
          onLanjut: (b) => { if (b) benar++; if (peserta && sesiId && triKini && triKini.kelas !== 'dikuasai' && L.tandaiBahas) L.tandaiBahas(sesiId, soal.id, true); catatBahasKini(); idx++; gambar(); if (idx < daftar.length) simpanAktif(); } });
        area.append(h('h1', { class: 'visually-hidden' }, (oj.ulang ? 'Putaran ulang, soal ' : 'Soal ') + (no + 1) + ' dari ' + dari), el);
        elKini = peserta ? el : null; soalKini = peserta ? soal : null; wrapKini = el;
        // v9.3 P1: soal yang dipulihkan ke fase membahas: room yang sudah di fase kunci soal ini dibiarkan (tetapKunci)
        if (diRoom && siar) { siar.soal(idx, !!pulihIni); isiPapanJauh(); }
        // v9.3 W1: pulihkan fase membahas: kunci jawaban dibuka ulang dari jawaban yang tercatat (tanpa mencatat ulang)
        if (pulihIni) {
          pulihKini = pulihIni;
          if (typeof el.bukaKunci === 'function') { try { el.bukaKunci(); } catch (e) { console.error(e); } }
          if (pulihKini) { pulihKini = null; idx++; gambar(); return; } // tidak bisa dibuka ulang → lanjut ke soal berikutnya seperti dulu
        }
        if (tempoEl) {
          let sisa = anggaran;
          timer = setInterval(() => {
            // berhenti bila soal sudah diperiksa (panel umpan/terkunci) atau elemen sudah dilepas
            if (!tempoEl.isConnected || el.querySelector('.terkunci, .umpan')) { hentikanTempo(); return; }
            sisa--; tempoEl.textContent = U.jam(Math.max(0, sisa)); if (sisa <= 30) tempoEl.dataset.sisa = 'sedikit';
            if (sisa <= 0) { hentikanTempo(); UKP.toast('Anggaran waktu soal ini habis — di ujian, tandai ragu lalu lanjut.'); }
          }, 1000);
        }
        window.scrollTo({ top: 0 });
        UKP.fokusNanti(area.querySelector('h1'));
      }
      function selesai() {
        tutupLihat(true);
        hentikanTempo(); area.innerHTML = ''; kop.remove(); if (skorEl) skorEl.remove(); modeFokus(false); elKini = null; soalKini = null;
        const menit = Math.max(1, Math.round((Date.now() - mulaiWaktu) / 60000));
        if (idx > 0) UKP.hadir.catat('HADIR', menit);
        if (idx > 0 && UKP.tim) UKP.tim.kirimRingkasan({ selesai: true }); // dasbor tim (js/tim.js): ringkasan, debounce 5 dtk, diam bila tidak tersambung
        if (peserta) {
          hentikanSesi();
          const sesi = akhiriSesi();
          if (sesi && typeof UKP.c.evaluasiBersama === 'function') { tampilEvaluasi(sesi); return; }
          ringkasanBersama(menit); return;
        }
        const salahTerakhir = s.jawaban.filter(j => j.pada >= mulaiWaktu && !j.benar && j.opsi !== '-');
        const perTopik = {}; salahTerakhir.forEach(j => { perTopik[j.topik] = (perTopik[j.topik] || 0) + 1; });
        const top = Object.entries(perTopik).sort((a, b) => b[1] - a[1])[0];
        // ringkasan (LT-3): akurasi (cincin + hitung naik), daftar soal keliru yang bisa dibuka, "Ulangi N soal yang salah" (aksi sekunder)
        const utama = riwayat; const ulangRun = !!oj.ulang;
        const benarPertama = utama.filter(r => r.benar).length; const akurasi = utama.length ? Math.round(benarPertama / utama.length * 100) : null;
        const keliru = utama.filter(r => !r.benar);
        const labelAkurasi = ulangRun ? 'Akurasi putaran ulang' : 'Akurasi percobaan pertama';
        const ring = akurasi != null ? UKP.c.ring(akurasi, { besar: true, label: labelAkurasi, teks: akurasi + '%', hitung: akurasi, akhiran: '%', animasi: true, valuetext: akurasi + ' persen benar' + (ulangRun ? ' pada putaran ulang' : ' pada percobaan pertama') }) : null;
        const kalimat = utama.length ? utama.length + (ulangRun ? ' soal diulang · ' + benarPertama + ' benar' : ' soal · ' + benarPertama + ' benar pada percobaan pertama') + (idx < daftar.length ? ' (berhenti di soal ' + (idx + 1) + ' dari ' + daftar.length + ')' : '') + ' · ' + menit + ' mnt.' : 'Belum ada soal yang dijawab.';
        // kalibrasi keyakinan (Momen 2), percobaan pertama saja: yakin-benar, yakin-keliru, ragu, menebak
        const berYakin = utama.filter(r => r.keyakinan); let kalibrasi = null;
        if (berYakin.length) {
          const grup = v => berYakin.filter(r => r.keyakinan === v); const nBenar = a => a.filter(r => r.benar).length;
          const yk = grup('yakin'), rg = grup('ragu'), tb = grup('menebak');
          const bagian = [yk.length ? 'yakin dan benar ' + nBenar(yk) : null, yk.length ? 'yakin tetapi keliru ' + (yk.length - nBenar(yk)) : null,
            rg.length ? 'ragu ' + rg.length + ' (' + nBenar(rg) + ' benar)' : null, tb.length ? 'nebak ' + tb.length + ' (' + nBenar(tb) + ' benar)' : null].filter(Boolean);
          const yakinKeliru = yk.length - nBenar(yk);
          kalibrasi = h('p', { class: 'small kalibrasi' }, h('strong', null, 'Kalibrasi: '), bagian.join(' · ') + '.',
            yakinKeliru ? h('span', { class: 'muted' }, ' Soal yang yakin tetapi keliru paling berharga untuk diulang.') : null);
        }
        const bukaSoal = r => UKP.dialog({ judul: 'Soal ' + r.soal.id, isi: () => h('div', { class: 'stack' }, UKP.c.soal(r.soal, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: r.jawab, detik: r.detik || 0, konteks: 'ulas', tanpaTutor: true })) });
        area.append(h('h1', null, ulangRun ? 'Putaran ulang selesai' : 'Latihan selesai'),
          h('div', { class: 'card sorot ringkasan-latih' }, h('div', { class: 'between' }, h('div', { class: 'stack-sm' }, h('p', { class: 'eyebrow' }, 'Ringkasan'), h('p', null, kalimat), kalibrasi, (() => { const kk = UKP.kalimatKesalahanLatih({ nKeliru: keliru.length, nBelumTahu: keliru.filter(r => r.jawab === '-').length, top, judul: top ? (K.topik(top[0]) || {}).judul : '', adaJawaban: !!idx }); return kk ? h('p', { class: 'small' + (kk.muted ? ' muted' : '') }, kk.teks) : null; })()), ring),
            // langkah berikutnya bernama (DESAIN-V7 D6): topik dengan kesalahan terbanyak disebut kode + judulnya
            (() => { const tt = top ? K.topik(top[0]) : null; const latihLagi = () => UKP.go('latih', Object.assign({}, f, { mulai: true }));
              const ulangSalah = keliru.map(r => r.soal).filter((x, i, a) => a.indexOf(x) === i);
              return h('div', { class: 'btn-row' },
                tt && nLatihTopik(tt.id) ? h('button', { type: 'button', class: 'btn btn-primary', title: tt.id + ' ' + tt.judul, onclick: () => UKP.go('latih', { topik: tt.id, kode: tt.kode, n: 10, mulai: true }) }, 'Latih ' + nLatihTopik(tt.id) + ' soal ' + tt.id + ' ' + pendek(tt.judul, 32))
                  : h('button', { type: 'button', class: 'btn btn-primary', onclick: latihLagi }, f.n === 'semua' ? 'Latih semua soal lagi' : 'Latih ' + f.n + ' soal lagi'),
                ulangSalah.length ? h('button', { type: 'button', class: 'btn btn-ulang-salah', onclick: () => jalankan(U.acak(ulangSalah), { ulang: true }) }, 'Ulangi ' + ulangSalah.length + ' soal yang salah') : null,
                h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: keSaringan }, 'Atur saringan'),
                UKP.link('Ke Hari Ini', 'beranda', null, 'btn btn-ghost btn-text')); })()),
          keliru.length ? sect({ id: 'keliru-judul', judul: ulangRun ? 'Masih keliru' : 'Keliru pada percobaan pertama', meta: keliru.length + ' soal', isi:
            h('div', { class: 'list-rows daftar-kartu' }, keliru.map(r => { const tag = r.jawab && r.jawab !== '-' ? (r.soal.jebakanOpsi || {})[r.jawab] : null; return h('button', { type: 'button', class: 'row-link baris-tombol', 'aria-haspopup': 'dialog', onclick: () => bukaSoal(r) }, h('span', { class: 'kode' }, r.soal.id.split('-').pop()), h('span', { class: 'row-isi' }, h('span', { class: 'row-title small' }, pendek(r.soal.stem, 110)), h('span', { class: 'row-meta' }, h('span', { class: 'meta' }, h('span', { class: 'kode' }, r.soal.id), h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), r.jawab === '-' ? 'belum tahu' : 'jawaban ' + r.jawab + ', kunci ' + r.soal.kunci), r.keyakinan === 'yakin' ? pill('yakin', 'attn', 'peringatan') : null, tag ? pill(UKP.tagLabel(tag), 'warn') : null)), ikon('chevron-kanan', 'chev', true)); })) }) : null);
        requestAnimationFrame(() => { if (typeof UKP.pasangHitung === 'function') UKP.pasangHitung(area); });
        UKP.fokus(area.querySelector('h1')); window.scrollTo({ top: 0 });
      }
      // v8.0 evaluasi tim (UKP.c.evaluasiBersama, js/views-tim.js); "Ulangi N soal yang salah" tetap bersama dan membuat sesi baru
      function tampilEvaluasi(sesi) {
        const ulangi = ids => { const arr = (ids || []).map(id => K.soal(id)).filter(Boolean); if (arr.length) jalankan(U.acak(arr), { ulang: true }); };
        let el = null;
        try { el = UKP.c.evaluasiBersama(sesi, { onUlangi: ulangi, onTutup: () => UKP.go('tim', { anggota: 'sesi:' + sesi.id }) }); } catch (e) { console.error(e); el = null; }
        if (!el) { ringkasanBersama(Math.max(1, Math.round((Date.now() - mulaiWaktu) / 60000))); return; }
        // V3 (butir 10c): sesi room selesai → pemandu diarahkan kembali ke lobi room untuk sesi berikutnya (sesi "ulangi"/"lagi" dari sini berjalan di satu layar)
        const keLobi = roomPernah && peranRoom() === 'tuan'
          ? UKP.c.banner('Rekap sudah tampil di HP anggota. Latihan bersama berikutnya dimulai dari lobi room agar HP ikut.', 'info', null, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm ke-lobi-room', onclick: () => UKP.go('room') }, 'Ke lobi room')))
          : null;
        area.append(h('h1', { class: 'visually-hidden' }, (oj.ulang ? 'Putaran ulang bersama selesai' : 'Latihan bersama selesai') + ': evaluasi tim'), keLobi, el);
        UKP.fokus(area.querySelector('h1')); window.scrollTo({ top: 0 });
      }
      // ringkasan latihan bersama: tabel per peserta (urutan daftar), soal yang salah oleh siapa pun, ulangi gabungan
      function ringkasanBersama(menit) {
        const ulangRun = !!oj.ulang; const nSoal = riwayatB.length;
        const baris = peserta.map(n => { let b = 0, j = 0; riwayatB.forEach(r => { const x = r.per[n]; if (!x) return; if (x.opsi !== '-') j++; if (x.benar) b++; }); return { nama: n, benar: b, dijawab: j, total: nSoal, p: j ? Math.round(b / j * 100) : null }; }); // skor = benar ÷ jawaban yang masuk
        const salahSoal = riwayatB.filter(r => Object.keys(r.per).some(n => !r.per[n].benar));
        const ulangSalah = salahSoal.map(r => r.soal).filter((x, i, a) => a.indexOf(x) === i);
        const tbl = h('table', { class: 'tabel tabel-bersama' }, h('caption', { class: 'visually-hidden' }, 'Hasil per anggota'),
          h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Nama'), h('th', { scope: 'col', class: 'angka' }, 'Benar'), h('th', { scope: 'col', class: 'angka' }, 'Skor'))),
          h('tbody', null, baris.map(x => h('tr', null, h('th', { scope: 'row' }, h('span', { class: 'nama-peserta', title: x.nama }, x.nama)),
            h('td', { class: 'angka' }, x.benar + '/' + x.total, x.dijawab < x.total ? h('span', { class: 'meta' }, ' · ' + (x.total - x.dijawab) + ' tidak menjawab') : null),
            h('td', { class: 'angka' }, x.p == null ? '–' : x.p + '%')))));
        const kalimat = nSoal ? nSoal + (ulangRun ? ' soal diulang' : ' soal') + ' · bersama ' + peserta.length + ' orang' + (idx < daftar.length ? ' (berhenti di soal ' + (idx + 1) + ' dari ' + daftar.length + ')' : '') + ' · ' + menit + ' mnt.' : 'Belum ada soal yang dijawab.';
        const bukaSoal = r => UKP.dialog({ judul: 'Soal ' + r.soal.id, isi: () => h('div', { class: 'stack' }, UKP.c.soal(r.soal, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: '-', detik: r.detik || 0, konteks: 'ulas', tanpaTutor: true })) });
        const latihLagi = () => UKP.go('latih', Object.assign({}, f, { mulai: true }));
        area.append(h('h1', null, ulangRun ? 'Putaran ulang bersama selesai' : 'Latihan bersama selesai'),
          h('div', { class: 'card sorot ringkasan-latih ringkasan-bersama' }, h('div', { class: 'stack-sm' }, h('p', { class: 'eyebrow' }, 'Ringkasan'), h('p', null, kalimat)),
            nSoal ? tabelWrap('Hasil per anggota', tbl) : null,
            h('p', { class: 'small muted' }, 'Jawaban tiap orang tersimpan di perangkat ini dan tampil di ', UKP.link('Dasbor tim', 'tim'), '.'),
            h('div', { class: 'btn-row' },
              h('button', { type: 'button', class: 'btn btn-primary', onclick: latihLagi }, f.n === 'semua' ? 'Latih semua soal lagi' : 'Latih ' + f.n + ' soal lagi'),
              ulangSalah.length ? h('button', { type: 'button', class: 'btn btn-ulang-salah', onclick: () => jalankan(U.acak(ulangSalah), { ulang: true }) }, 'Ulangi ' + ulangSalah.length + ' soal yang salah') : null,
              h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: keSaringan }, 'Atur saringan'),
              UKP.link('Ke Hari Ini', 'beranda', null, 'btn btn-ghost btn-text'))),
          salahSoal.length ? sect({ id: 'keliru-judul', judul: 'Soal dengan jawaban salah', meta: salahSoal.length + ' soal', isi:
            h('div', { class: 'list-rows daftar-kartu' }, salahSoal.map(r => { const salah = peserta.filter(n => r.per[n] && !r.per[n].benar).map(n => n + ' (' + (r.per[n].opsi === '-' ? '–' : r.per[n].opsi) + ')');
              return h('button', { type: 'button', class: 'row-link baris-tombol', 'aria-haspopup': 'dialog', onclick: () => bukaSoal(r) }, h('span', { class: 'kode' }, r.soal.id.split('-').pop()), h('span', { class: 'row-isi' }, h('span', { class: 'row-title small' }, pendek(r.soal.stem, 110)), h('span', { class: 'row-meta' }, h('span', { class: 'meta' }, h('span', { class: 'kode' }, r.soal.id), h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), 'kunci ' + r.soal.kunci, h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), 'salah: ' + salah.join(', ')))), ikon('chevron-kanan', 'chev', true)); })) }) : null);
        UKP.fokus(area.querySelector('h1')); window.scrollTo({ top: 0 });
      }
      // ================= v9.1 K1: MODE LIHAT LAGI (kembali melihat soal yang sudah selesai) =================
      // Tombol "Soal sebelumnya" (kiri bar aksi, opsi aksiKiri UKP.c.soal) membuka soal-soal yang sudah selesai di tempat yang sama, hanya
      // baca. Soal berjalan TIDAK dibuat ulang: .latih-area disembunyikan (tetap terpasang), jadi papan, isian HP (isiJauh), laju, waktu,
      // dan baris aktif tetap; papan dijeda (wrap.jedaPapan) agar kunci tidak terbuka sendiri; pintasan papan tidak bisa mengenainya karena
      // fokus tidak mungkin berada di elemen tersembunyi. Tidak ada yang dikirim ke room. Data: latihan bersama → rekaman sesi
      // (L.sesiBersamaDari, tetap ada setelah muat ulang + Lanjutkan); latihan pribadi → riwayat putaran ini.
      let wrapKini = null, lihat = null; // lihat = { el, pos, gulir, judul, kini }
      const nomorDari = id => { const i = daftar.findIndex(x => x && x.id === id); return i >= 0 ? i + 1 : null; };
      function soalSelesai() {
        const kini = daftar[idx] ? daftar[idx].id : null;
        if (peserta) {
          const sesi = sesiId && L.sesiBersamaDari ? L.sesiBersamaDari(sesiId) : null;
          if (sesi && Array.isArray(sesi.soal)) {
            // rotasi penjelas diputar ulang dengan urutan yang sama seperti saat kunci dibuka (lihat pemulihan sesiLama di atas)
            const hp = {}; const out = [];
            sesi.soal.forEach(q => {
              const so = q && K.soal(q.id); if (!so) return; const per = {};
              Object.keys(q.jawaban || {}).forEach(n => { const x = q.jawaban[n] || {}; per[n] = { opsi: x.o || '-', keyakinan: x.k || null, benar: !!x.b }; });
              let tri = null;
              if (L.triaseSoal) { try { tri = L.triaseSoal(so, per, { urutan: sesi.peserta || peserta, hitungPenjelas: hp, pemimpin: namaPemandu() || null }); if (tri && tri.penjelas) hp[tri.penjelas] = (hp[tri.penjelas] || 0) + 1; } catch (e) { tri = null; } }
              if (q.id !== kini) out.push({ soal: so, q, tri, peserta: sesi.peserta && sesi.peserta.length ? sesi.peserta : peserta, nomor: nomorDari(q.id) });
            });
            return out;
          }
          return riwayatB.filter(r => r.soal.id !== kini).map(r => { const jw = {}; Object.keys(r.per).forEach(n => { const x = r.per[n]; jw[n] = { o: x.opsi || '-', k: x.keyakinan || null, b: x.benar ? 1 : 0 }; }); return { soal: r.soal, q: { id: r.soal.id, kunci: r.soal.kunci, detik: r.detik || 0, jawaban: jw }, tri: null, peserta, nomor: nomorDari(r.soal.id) }; });
        }
        return riwayat.filter(r => r.soal.id !== kini).map(r => ({ soal: r.soal, r, nomor: nomorDari(r.soal.id) }));
      }
      function tombolLihat() {
        return h('button', { type: 'button', class: 'btn btn-ghost aksi-lihat-lagi', 'aria-label': 'Soal sebelumnya', title: 'Lihat lagi soal yang sudah selesai', onclick: () => bukaLihat() },
          ikon('back', null, true), h('span', { class: 'aksi-lihat-label' }, 'Soal sebelumnya'));
      }
      const NADA_TRI = { dikuasai: 'ok', rapuh: 'info', terbelah: 'warn', tersandung: 'attn' };
      // isi satu soal latihan bersama: "Benar X dari N" + keterangan (sama dengan saat kunci dibuka), triase (tanpa stopwatch), jawaban tiap orang
      function isiLihatBersama(it) {
        const so = it.soal, q = it.q; const kunci = q.kunci || so.kunci;
        // V9 S1: hanya nama yang ikut soal itu (punya kunci di rekaman); urutan mengikuti daftar latihan
        const kunciQ = Object.keys(q.jawaban || {}); const urut = it.peserta && it.peserta.length ? it.peserta : kunciQ;
        const nama = kunciQ.length ? urut.filter(n => kunciQ.some(x => samaNamaR(x, n))).concat(kunciQ.filter(x => !urut.some(n => samaNamaR(x, n)))) : urut;
        const jOf = n => { const jw = q.jawaban || {}; const k = Object.keys(jw).find(x => samaNamaR(x, n)); const x = k != null ? jw[k] || {} : {}; return { o: x.o || '-', k: x.o && x.o !== '-' ? x.k || null : null, b: x.b ? 1 : 0 }; };
        // v9.2 G1: blok hasil yang sama persis dengan papan saat kunci jawaban dibuka (UKP.c.hasilBersama, tanpa stopwatch)
        const perH = {}; nama.forEach(n => { const j = jOf(n); perH[n] = { opsi: j.o, keyakinan: j.k }; });
        const hb = typeof UKP.c.hasilBersama === 'function' ? UKP.c.hasilBersama(Object.assign({}, so, { kunci }), nama, perH, { tri: it.tri, pemimpin: namaPemandu() || null }) : null;
        const st = hb ? hb.status : h('p', { class: 'status blok' }, 'Jawaban benar: ' + kunci); const triEl = hb ? hb.triase : null;
        const hasilSel = j => j.o === '-' ? 'kosong' : j.b ? 'benar' : 'salah';
        const daftarJ = h('ul', { class: 'eval-dlg-jawab lihat-jawab', 'aria-label': 'Jawaban tiap orang' }, nama.map(n => { const j = jOf(n); const hs = hasilSel(j);
          return h('li', { 'data-hasil': hs }, h('span', { class: 'eval-dlg-nama', title: n }, n), h('span', { class: 'eval-sel', 'data-hasil': hs }, j.o === '-' ? '–' : j.o),
            h('span', { class: 'meta' }, (hs === 'kosong' ? 'tidak menjawab' : hs) + (j.k ? ' · ' + ({ yakin: 'yakin', ragu: 'ragu', menebak: 'nebak' }[j.k] || '') : ''))); }));
        const el = UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: '-', detik: q.detik || 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true });
        const stLama = el.querySelector('.umpan .status'); if (stLama) stLama.replaceWith(st); else { const u = el.querySelector('.umpan'); if (u) u.prepend(st); }
        if (triEl) st.after(triEl);
        const fsEl = el.querySelector('fieldset.opsi'); if (fsEl) fsEl.after(h('div', { class: 'lihat-papan stack-xs' }, h('p', { class: 'eyebrow' }, 'Jawaban tiap orang'), daftarJ)); else el.prepend(daftarJ);
        return el;
      }
      function isiLihatPribadi(it) {
        const r = it.r; const so = r.soal; const LBL = { yakin: 'yakin', ragu: 'ragu', menebak: 'nebak' };
        const el = UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: r.jawab, detik: r.detik || 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true });
        const teks = r.jawab === '-' ? 'Anda memilih "Tidak tahu".' : 'Jawaban Anda ' + r.jawab + (r.benar ? ', benar' : ', kunci ' + so.kunci) + (r.keyakinan && LBL[r.keyakinan] ? ' · ' + LBL[r.keyakinan] : '') + '.';
        const fsEl = el.querySelector('fieldset.opsi'); const p = h('p', { class: 'meta lihat-jawaban-sendiri' }, teks);
        if (fsEl) fsEl.after(p); else el.prepend(p);
        return el;
      }
      function gambarLihat(fokusJudul) {
        if (!lihat) return;
        const arr = soalSelesai(); if (!arr.length) { tutupLihat(); return; }
        lihat.pos = Math.max(0, Math.min(arr.length - 1, lihat.pos));
        const it = arr[lihat.pos]; const noKini = idx + 1; const berjalan = idx < daftar.length;
        const judulTeks = 'Melihat lagi soal ' + (it.nomor || '?') + ' dari ' + dari;
        const jid = 'lihat-judul-' + Math.random().toString(36).slice(2, 6);
        const judul = h('h1', { class: 'lihat-judul', id: jid, tabindex: '-1' }, judulTeks);
        const isi = peserta ? isiLihatBersama(it) : isiLihatPribadi(it);
        // tautan yang meninggalkan layar latihan (topik, peta formulir) tidak ditampilkan selama sesi berjalan
        isi.querySelectorAll('.pelajari-lagi, .tautan-formulir').forEach(x => x.remove());
        const sebelum = h('button', { type: 'button', class: 'btn lihat-sebelum', 'aria-label': 'Soal sebelumnya yang sudah selesai', disabled: lihat.pos === 0 ? true : null, onclick: () => geserLihat(-1) }, ikon('back', null, true), h('span', { class: 'lihat-nav-label' }, 'Sebelumnya'));
        const berikut = h('button', { type: 'button', class: 'btn lihat-berikut', 'aria-label': 'Soal berikutnya yang sudah selesai', disabled: lihat.pos >= arr.length - 1 ? true : null, onclick: () => geserLihat(1) }, h('span', { class: 'lihat-nav-label' }, 'Berikutnya'), ikon('chevron-kanan', null, true));
        const kembali = h('button', { type: 'button', class: 'btn btn-primary btn-lg lihat-kembali', 'aria-keyshortcuts': 'Escape', onclick: () => tutupLihat() }, 'Kembali ke soal ' + noKini, ikon('chevron-kanan'));
        lihat.el.setAttribute('aria-labelledby', jid);
        lihat.el.replaceChildren(
          h('div', { class: 'lihat-pita' }, ikon('jam', 'lihat-pita-ikon', true), h('div', { class: 'lihat-pita-teks' }, judul, berjalan ? h('p', { class: 'lihat-pita-ket' }, 'Soal ' + noKini + ' masih berjalan.') : null)),
          isi,
          h('div', { class: 'sticky-actions lihat-aksi' }, h('span', { class: 'lihat-nav' }, sebelum, h('span', { class: 'meta lihat-posisi' }, (lihat.pos + 1) + ' / ' + arr.length), berikut), kembali));
        if (fokusJudul !== false) { window.scrollTo({ top: 0 }); UKP.fokus(judul); }
        if (UKP.umumkan) UKP.umumkan('Melihat lagi soal ' + (it.nomor || '?') + '.');
      }
      function geserLihat(d) {
        if (!lihat) return; const arr = soalSelesai(); const baru = lihat.pos + d; if (baru < 0 || baru >= arr.length) return;
        const fokusDi = document.activeElement; const kelas = fokusDi && fokusDi.classList && (fokusDi.classList.contains('lihat-sebelum') ? 'lihat-sebelum' : fokusDi.classList.contains('lihat-berikut') ? 'lihat-berikut' : null);
        lihat.pos = baru; gambarLihat(!kelas);
        if (kelas) { window.scrollTo({ top: 0 }); const b = lihat.el.querySelector('.' + kelas); const alt = lihat.el.querySelector(kelas === 'lihat-sebelum' ? '.lihat-berikut' : '.lihat-sebelum'); UKP.fokus(b && !b.disabled ? b : alt && !alt.disabled ? alt : lihat.el.querySelector('.lihat-kembali')); }
      }
      function bukaLihat() {
        if (lihat || !page.isConnected) return;
        const arr = soalSelesai(); if (!arr.length) return;
        lihat = { el: h('section', { class: 'lihat-lagi stack' }), pos: arr.length - 1, gulir: window.scrollY };
        if (wrapKini && typeof wrapKini.jedaPapan === 'function') wrapKini.jedaPapan(true);
        lihat.penanda = h('span', { class: 'pill fokus-penanda-lihat', 'data-tone': 'info' }, ikon('jam', null, true), 'melihat lagi');
        const jd = kop.querySelector('.fokus-judul .fokus-baris') || kop.querySelector('.fokus-judul'); if (jd) jd.prepend(lihat.penanda);
        kop.setAttribute('data-lihat', '');
        page.classList.add('sedang-lihat');
        area.after(lihat.el);
        gambarLihat(true);
        area.hidden = true;
        if (skorEl) skorEl.toggleAttribute('data-lihat', true);
        document.addEventListener('keydown', tombolLihatKey);
      }
      function tutupLihat(diam) {
        if (!lihat) return;
        const l = lihat; lihat = null;
        document.removeEventListener('keydown', tombolLihatKey);
        l.el.remove(); if (l.penanda) l.penanda.remove(); kop.removeAttribute('data-lihat'); page.classList.remove('sedang-lihat');
        if (skorEl) skorEl.removeAttribute('data-lihat');
        area.hidden = false;
        if (diam) return; // gambar()/selesai(): soal berjalan segera diganti, jadi jeda papannya tidak perlu dilepas
        const mulaiHitung = wrapKini && typeof wrapKini.jedaPapan === 'function' ? wrapKini.jedaPapan(false) : false;
        window.scrollTo({ top: l.gulir || 0 });
        const h1 = area.querySelector('h1'); if (h1) UKP.fokus(h1);
        if (UKP.umumkan) UKP.umumkan('Kembali ke soal ' + (idx + 1) + '.' + (mulaiHitung ? ' Semua sudah menjawab. Kunci jawaban dibuka dalam 2 detik.' : ''));
      }
      function tombolLihatKey(e) {
        if (!lihat || !lihat.el.isConnected) { document.removeEventListener('keydown', tombolLihatKey); return; }
        if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
        if (document.querySelector('dialog[open]')) return;
        const t = e.target; if (t && t.closest && t.closest('input, textarea, select, [contenteditable="true"], details.menu-lebih[open]')) return;
        if (e.key === 'Escape') { e.preventDefault(); tutupLihat(); return; }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { if (t && t.closest && t.closest('.fokus-bar')) return; e.preventDefault(); geserLihat(e.key === 'ArrowLeft' ? -1 : 1); }
      }
      if (peserta) gambarSkor();
      if (roomNiat && !sambungRoom()) { if (lanjut) tungguRoom(); else { roomNiat = false; UKP.toast('Room tidak tersambung. Latihan berjalan di satu layar.'); } }
      padaLepasRoom = peserta ? lepasPendengar : null;
      gambar();
      if (peserta) simpanAktif();
    }
    let tUmum = null; // jeda pengumuman jumlah cocok
    const hasil = () => ({ node: page, unmount: () => { if (padaLepas) { try { padaLepas(); } catch (e) {} } if (padaLepasRoom) { try { padaLepasRoom(); } catch (e) {} } hentikanTempo(); hentikanSesi(); clearTimeout(tUmum); modeFokus(false); } });
    // v7.7: #latih tanpa params (ubin Beranda, menu Latih) langsung mulai: acak dari tingkat target, 20 soal, jawab langsung.
    // Halaman saringan tetap lewat params apa pun (mis. { atur: 1 } dari "Atur saringan", atau kode/n tanpa mulai)
    // v8.1: sesi bersama yang bisa dilanjutkan → #latih tanpa params TIDAK memulai sesi baru; saringan menampilkan kartu "Lanjutkan"
    const bisaLanjut = L.bersamaAktif ? L.bersamaAktif() : null;
    if (!bisaLanjut && s.bersamaAktif && L.simpanBersamaAktif) L.simpanBersamaAktif(null); // keadaan kedaluwarsa dibersihkan
    if (params.lanjut && bisaLanjut) {
      const arr = bisaLanjut.soalIds.map(id => K.soal(id)).filter(Boolean);
      if (arr.length === bisaLanjut.soalIds.length) { jalankan(arr, { lanjut: bisaLanjut, ulang: !!bisaLanjut.ulang }); return hasil(); }
    }
    const langsungMulai = !bisaLanjut && !Object.keys(params).some(k => params[k] != null && params[k] !== '' && params[k] !== false);
    // params.mulai / params.ids juga tidak memulai sesi bersama baru selama ada sesi yang bisa dilanjutkan (mis. muat ulang halaman:
    // history.state masih membawa { mulai: true }); saringan menampilkan kartu "Lanjutkan"
    const tahanMulai = !!bisaLanjut && !!pesertaAktif();
    // v8.0: params.ids = 'B8-076,A3-138' → putaran ulang soal itu (dipakai "Ulangi N soal yang salah" di #tim/sesi:<id>); bersama bila s.bersama aktif
    if (params.ids && !tahanMulai) { const arr = String(params.ids).split(',').map(id => K.soal(id.trim())).filter(Boolean); if (arr.length) { jalankan(U.acak(arr), { ulang: true }); return hasil(); } }
    if ((params.mulai && !tahanMulai || langsungMulai) && mulai({ room: !!params.room && !langsungMulai })) return hasil();
    // form filter (DESAIN-V6 D.5): jumlah soal di atas, sakelar role="switch", tombol Mulai membawa jumlah cocok (LT-1);
    // ≥ 1280 ringkasan jumlah cocok di panel kanan lengket
    page.classList.add('lebar');
    // v8.1: kartu "Sesi bersama belum selesai" paling atas
    const kartuLanjut = bisaLanjut ? UKP.c.kartuLanjutBersama() : null; if (kartuLanjut) page.appendChild(kartuLanjut);
    page.appendChild(kop({ pita: true, judul: 'Latih soal', lead: 'Pilih kelompok dan jumlah soal. Setiap jawaban langsung dibahas: inti jawaban, langkah hitung, dan dasar hukumnya.' }));
    if ((params.mulai && !tahanMulai) || langsungMulai) page.appendChild(h('div', { class: 'banner', 'data-tone': 'warn', role: 'note' }, ikon('peringatan'), h('span', null, 'Tidak ada soal yang cocok dengan filter ini. Longgarkan filter di bawah lalu mulai lagi.')));
    const semuaKel = K.semuaKelompok(); const luar = semuaKel.filter(k => !kelTingkat.includes(k));
    const opsiKel = k => h('option', { value: k, selected: f.kode === k ? true : null }, k + ' · ' + K.namaKelompok(k));
    const opsiSemuaKel = h('option', { value: '' }, 'Semua kelompok Tingkat ' + tingkat);
    const selKode = h('select', { class: 'select', id: 'f-kode', onchange: e => { f.kode = e.target.value; f.topik = ''; isiTopik(); hitung(); } }, opsiSemuaKel,
      h('optgroup', { label: 'Tingkat ' + tingkat + ' (target)' }, kelTingkat.map(opsiKel)),
      luar.length ? h('optgroup', { label: 'Di luar target' }, luar.map(opsiKel)) : null);
    const catatanKode = h('p', { class: 'small muted', hidden: true });
    const selTopik = h('select', { class: 'select', id: 'f-topik', onchange: e => { f.topik = e.target.value; hitung(); } });
    function isiTopik() { selTopik.innerHTML = ''; selTopik.appendChild(h('option', { value: '' }, 'Semua topik')); if (f.kode && UKP.modul[f.kode]) UKP.modul[f.kode].topik.forEach(t => selTopik.appendChild(h('option', { value: t.id, selected: f.topik === t.id ? true : null }, t.id + ' ' + t.judul))); selTopik.disabled = !f.kode; }
    const JENIS = ['konsep', 'klasifikasi', 'hitung', 'prosedur', 'kasus', 'baris-spt', 'etika'];
    const selJenis = h('select', { class: 'select', id: 'f-jenis', onchange: e => { f.jenis = e.target.value; hitung(); } });
    // jenis yang tidak ada di kelompok/topik terpilih disembunyikan; jumlah per jenis dihitung dari pool() dengan saringan lain tetap
    // (termasuk butir laporan), dan jenis yang tersaring habis ditandai "(0)" serta dinonaktifkan (kecuali sedang terpilih)
    function isiJenis() {
      const ada = new Set(basis(Object.assign({}, f, { laporan: '' })).concat(basis()).map(x => x.jenis).filter(Boolean));
      if (f.jenis && !ada.has(f.jenis)) f.jenis = '';
      const urut = JENIS.filter(j => ada.has(j)).concat([...ada].filter(j => !JENIS.includes(j)));
      selJenis.replaceChildren(h('option', { value: '' }, 'Semua jenis'), urut.map(j => { const n = pool({ jenis: j }).length; return h('option', { value: j, selected: f.jenis === j ? true : null, disabled: !n && f.jenis !== j ? true : null }, j + (n ? '' : ' (0)')); }));
    }
    // kelompok: jumlah dari pool() dengan kelompok itu (topik dilepas) dan saringan lain tetap; "(0)" + nonaktif bila habis
    function isiKelompok() {
      opsiSemuaKel.textContent = laporanAktif() ? 'Semua kelompok laporan Tingkat ' + tingkatLap(f.laporan) : 'Semua kelompok Tingkat ' + tingkat;
      selKode.querySelectorAll('option[value]:not([value=""])').forEach(o => { const n = pool({ kode: o.value, topik: '' }).length; o.textContent = o.value + ' · ' + K.namaKelompok(o.value) + (n ? '' : ' (0)'); o.disabled = !n && f.kode !== o.value; });
    }
    isiTopik();
    const selKes = h('select', { class: 'select', id: 'f-kes', onchange: e => { f.kesulitan = e.target.value; hitung(); } }, h('option', { value: '' }, 'Semua kesulitan'), [1, 2, 3].map(k => h('option', { value: k, selected: f.kesulitan === String(k) ? true : null }, k === 1 ? '1 · mudah' : k === 2 ? '2 · sedang' : '3 · sulit')));
    const segN = h('div', { class: 'seg batas', role: 'group', 'aria-labelledby': 'f-n-lbl' }, [10, 20, 50, 'semua'].map(n => h('button', { type: 'button', 'aria-pressed': String(String(f.n) === String(n)), onclick: e => { f.n = n; segN.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); perbaruiTombol(nCocok); } }, n === 'semua' ? 'Semua' : n)));
    // Sumber soal: Semua soal · <paket try out…>; bawaan tersembunyi bila belum ada soal ber-sumber
    const segSet = paket.length ? h('div', { class: 'seg batas', role: 'group', 'aria-labelledby': 'f-set-lbl' }, [['', 'Semua soal']].concat(paket.map(p => [p.set, p.label])).map(([v, l]) => h('button', { type: 'button', 'aria-pressed': String(f.set === v), onclick: e => { f.set = v; segSet.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); hitung(); } }, l))) : null;
    const catatanSet = h('p', { class: 'small muted', hidden: true });
    // v9.5 Pilih soal: Campur · Belum pernah dipakai · Pengganti soal lama (nonaktif bila data belum punya soal pengganti)
    const adaPengganti = !!(K.adaPengganti && K.adaPengganti());
    const OPSI_BANK = [['campur', 'Campur'], ['baru', 'Belum pernah dipakai'], ['pengganti', 'Pengganti soal lama']];
    const catatanBank = adaPengganti ? null : h('p', { class: 'small muted', id: 'f-bank-ket' }, 'Belum ada soal pengganti.');
    const segBank = h('div', { class: 'seg seg-bank', role: 'group', 'aria-labelledby': 'f-bank-lbl' }, OPSI_BANK.map(([v, l]) => h('button', { type: 'button', 'data-nilai': v, 'aria-pressed': String(f.bank === v),
      disabled: v === 'pengganti' && !adaPengganti && f.bank !== v ? true : null, 'aria-describedby': v === 'pengganti' && catatanBank ? 'f-bank-ket' : null,
      onclick: e => { f.bank = v; segBank.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); perbaruiTombol(nCocok); } }, l)));
    const hitungBank = h('p', { class: 'meta hitung-bank' });
    const tautanBank = h('p', { class: 'small tautan-bank' }, UKP.link(['Lihat bank soal', ikon('chevron-kanan', null, true)], 'bank', null, 'tautan'));
    // v9.5 saringan butir juga tertulis di form (chip saringan ada di panel kanan yang tersembunyi di layar sempit)
    const bF = infoButirF(f.butir);
    const catatanButir = bF ? h('p', { class: 'small catatan-butir' }, 'Hanya butir ' + bF.tingkat + ' ' + (bF.mu.no ? bF.mu.no + '.' : '') + bF.nomor + ': ' + pendek(bF.teks, 90) + ' ',
      h('button', { type: 'button', class: 'btn btn-text btn-sm', onclick: () => hapusSaring({ butir: '' }) }, 'Hapus saringan butir')) : null;
    const togg = (key, label, bantu) => h('label', { class: 'switch' }, h('span', null, h('strong', null, label), bantu ? h('span', { class: 'bantu' }, bantu) : null), h('input', { type: 'checkbox', role: 'switch', checked: f[key] ? true : null, onchange: e => { f[key] = e.target.checked; hitung(); } }));
    const jumlah = h('p', { class: 'small muted', 'aria-live': 'polite' });
    // segmen butir laporan peserta + toggle gaya UKP (dicentang dan dikunci selama saringan cadangan dipakai)
    const OPSI_LAP = [['', 'Semua'], ['B', 'Tingkat B'], ['C', 'Tingkat C']];
    const tombolLap = OPSI_LAP.map(([v, l]) => h('button', { type: 'button', 'aria-pressed': String(tingkatLap(f.laporan) === v), onclick: () => { if (tingkatLap(f.laporan) === v && f.laporan.length <= 1) return; f.laporan = v; hitung(); } }, l, v && v === tingkat ? h('small', null, 'target') : null));
    const segLap = h('div', { class: 'seg', role: 'group', 'aria-labelledby': 'f-lap-lbl', 'aria-describedby': 'f-lap-bantu' }, tombolLap);
    const catatanLap = h('p', { class: 'small muted', hidden: true });
    const toggGaya = togg('gayaUkp', 'Hanya soal kasus berangkai dan berkutipan', 'Seperti ujian 26–29 Oktober 2026.');
    const inGaya = toggGaya.querySelector('input');
    // v9.5.3 B1/Bx2: "Waktu ketat per soal" hanya untuk latihan sendiri; di mode Bersama nonaktif dengan keterangan singkat
    const toggTempo = togg('tempo', 'Waktu ketat per soal', 'Hitung mundur sesuai target waktu tiap soal.');
    const inTempo = toggTempo.querySelector('input'); const bantuKetat = toggTempo.querySelector('.bantu');
    function aturKetat() {
      const ber = modeLatih === 'bersama'; inTempo.disabled = ber;
      bantuKetat.textContent = ber ? 'Tidak berlaku di latihan bersama. Waktu per soal mengikuti pilihan Waktu mengerjakan per soal.' : 'Hitung mundur sesuai target waktu tiap soal.';
    }
    // v9.5.3 Bx3: judul lipatan "Saringan lanjutan · N aktif" ikut berubah saat sakelar diubah
    const ringkasLanjut = h('summary', null, 'Saringan lanjutan');
    const nLanjutKini = () => [f.laporan, f.gayaUkp, resmiAktif(f), f.kecuali, f.baru2025, f.tempo && modeLatih !== 'bersama'].filter(Boolean).length;
    // v9.5.3 B4/B5: keterangan jujur bila pilihan soal tidak cukup (lihat teksBankKurang)
    const catatanBankKurang = h('p', { class: 'small muted catatan-bank-kurang', hidden: true });
    let rBank = null, rBankSemua = null;
    // v9.5 pilihan butir resmi (tidak tampil bila peta kosong; nonaktif selama saringan butir dipakai)
    const toggResmi = adaPeta ? togg('resmi', 'Hanya butir resmi Tingkat ' + tingkat, 'Soal di luar daftar cakupan materi resmi tingkat ini dilewati.') : null;
    if (toggResmi && f.butir) toggResmi.querySelector('input').disabled = true;
    function perbaruiLaporan() {
      const tL = tingkatLap(f.laporan); const cad = laporanCadangan();
      OPSI_LAP.forEach(([v], i) => tombolLap[i].setAttribute('aria-pressed', String(tL === v)));
      catatanLap.hidden = !f.laporan;
      if (f.laporan) catatanLap.textContent = cad
        ? 'Belum ada soal bertanda laporan peserta Tingkat ' + tL + '. Sementara dipakai saringan soal kasus berangkai dan berkutipan.'
        : (d => d.nTanda + ' soal kelompok Tingkat ' + tL + ' bertanda laporan peserta' + (f.laporan.length > 1 ? ' (' + f.laporan + ')' : '') + (d.soal.length > d.nTanda ? ', ditambah ' + (d.soal.length - d.nTanda) + ' soal lain dari kasus berangkai yang sama' : '') + '.')(dataLap(f.laporan));
      if (inGaya) { inGaya.checked = !!(f.gayaUkp || cad); inGaya.disabled = cad; }
    }
    // DESAIN-V7 P3-05: jumlah tersedia ditulis sekali (panel kanan ≥ 1280, satu baris .meta di bawahnya); satu tombol Mulai
    // (panel kanan ≥ 1280, aksi lengket di bawahnya); saringan aktif sebagai chip yang bisa dihapus
    const angkaCocok = h('span', { class: 'angka', 'aria-hidden': 'true' }, '0');
    const labelCocok = h('span', { class: 'meta' }, 'soal tersedia untuk saringan ini');
    const metaCocok = h('p', { class: 'meta latih-tersedia-hp', 'aria-hidden': 'true' });
    const chipAktif = h('div', { class: 'chip-row latih-chip', role: 'group', 'aria-label': 'Saringan aktif' });
    let nCocok = null; let nKeluarga = 0; let aturWaktu = null;  // v9.5 nKeluarga: "Semua" = satu soal per keluarga
    let nTampil = null;  // v9.5 angka di panel: soal yang bisa dimulai (satu soal per keluarga), bukan semua soal cocok
    // v9.5.3 B6: "Semua" dihitung dari himpunan yang sama dengan mulai() (tanpa soal yang sudah dijawab benar hari ini; lihat urutLatih)
    let nSemuaHari = 0;
    const nSemua = () => nSemuaHari; // v9.3 W1: panel bersama (baris ringkas total waktu ikut jumlah soal)
    const nPenuh = () => f.set ? (nCocok || 0) : nKeluarga; // jumlah 10/20/50 diambil dari pool penuh
    // v9.3 W1: nSoal = jumlah soal yang akan dimulai (untuk baris ringkas total waktu)
    const nMulai = () => { const n = nCocok || 0; return f.n === 'semua' ? nSemua() : Math.min(Number(f.n) || 0, nKeluarga || n); };
    let modeLatih = 'sendiri'; // v8.2 B2: 'sendiri' | 'bersama' (segmen di atas kartu saringan)
    const klikMulai = e => {
      if (modeLatih === 'bersama' && peranRoom() === 'anggota') { UKP.go('room'); return; }
      if (e.currentTarget.getAttribute('aria-disabled') === 'true') { UKP.toast('Tidak ada soal yang cocok dengan saringan.'); return; }
      if (!mulai({ room: modeLatih === 'bersama' && !!pesertaAktif() && peranRoom() === 'tuan' })) { hitung(); UKP.toast('Tidak ada soal yang cocok dengan saringan.'); }
    };
    const tombolMulai = h('button', { type: 'button', class: 'btn btn-primary btn-block', onclick: klikMulai });
    const tombolMulaiHp = h('button', { type: 'button', class: 'btn btn-primary', onclick: klikMulai });
    const hapusSaring = ganti => UKP.go('latih', Object.assign({}, f, ganti), { replace: true, tanpaFokus: true });
    function perbaruiTombol(lama) {
      const n = nCocok || 0;
      const anggotaRoom = modeLatih === 'bersama' && peranRoom() === 'anggota'; const tuanRoom = modeLatih === 'bersama' && !!pesertaAktif() && peranRoom() === 'tuan';
      [tombolMulai, tombolMulaiHp].forEach(b => {
        if (anggotaRoom) { b.removeAttribute('aria-disabled'); b.replaceChildren(ikon('tim'), 'Masuk room'); return; }
        if (!n) { b.setAttribute('aria-disabled', 'true'); b.replaceChildren('Tidak ada soal cocok'); }
        else { b.removeAttribute('aria-disabled'); b.replaceChildren(ikon('play'), (tuanRoom ? 'Mulai latihan bersama di room · ' : pesertaAktif() ? 'Mulai latihan bersama · ' : 'Mulai latihan · ') + (f.n === 'semua' ? 'semua (' + UKP.fmt.angka(nSemua()) + ')' : Math.min(Number(f.n), nKeluarga || n) + ' soal')); }
      });
      // v9.5: soal pengganti yang menunggu giliran tidak ikut dihitung; kata "bisa dimulai" dipakai bila angkanya lebih kecil dari soal cocok
      const nB = Math.min(n, (f.n === 'semua' ? nSemua() : nPenuh()) || 0); const kurang = nB < n; const tLama = nTampil; nTampil = nB;
      if (UKP.hitungNaik && lama != null && tLama != null && tLama !== nB) UKP.hitungNaik(angkaCocok, nB, { dari: tLama, ulang: true }); else angkaCocok.textContent = UKP.fmt.angka(nB);
      labelCocok.textContent = kurang ? 'soal bisa dimulai untuk saringan ini' : 'soal tersedia untuk saringan ini';
      metaCocok.textContent = UKP.fmt.angka(nB) + (kurang ? ' soal bisa dimulai' : ' soal tersedia');
      if (aturWaktu && typeof aturWaktu.perbaruiWaktu === 'function') aturWaktu.perbaruiWaktu();
      const tKurang = n && !(f.set && f.n === 'semua') ? teksBankKurang(f.bank, nMulai(), f.n === 'semua' ? rBankSemua : rBank) : '';
      catatanBankKurang.textContent = tKurang; catatanBankKurang.hidden = !tKurang;
      aturKetat();
      const nL = nLanjutKini(); ringkasLanjut.textContent = 'Saringan lanjutan' + (nL ? ' · ' + nL + ' aktif' : '');
      const chip = (teks, ganti) => h('button', { type: 'button', class: 'chip', 'aria-label': 'Hapus saringan ' + teks, onclick: () => hapusSaring(ganti) }, teks, ikon('x', null, true));
      const aktif = [f.kode ? chip(f.kode + (f.topik ? ' · ' + f.topik : ''), { kode: '', topik: '' }) : null, f.jenis ? chip(JENIS_LABEL[f.jenis] || f.jenis, { jenis: '' }) : null, f.kesulitan ? chip('kesulitan ' + f.kesulitan, { kesulitan: '' }) : null,
        f.set ? chip((paketDari(f.set) || {}).label || 'Try Out', { set: '' }) : null, f.laporan ? chip('mirip ujian ' + tingkatLap(f.laporan), { laporan: '' }) : null, f.hanyaSalah ? chip('pernah keliru', { hanyaSalah: false }) : null, f.gayaUkp ? chip('kasus berangkai', { gayaUkp: false }) : null,
        f.kecuali ? chip('soal "kecuali"', { kecuali: false }) : null, f.baru2025 ? chip('ketentuan 2025+', { baru2025: false }) : null, f.tempo && modeLatih !== 'bersama' ? chip('waktu ketat', { tempo: false }) : null,
        f.butir ? chipButir() : null, resmiAktif(f) ? chip('butir resmi', { resmi: false }) : null, f.bank !== 'campur' ? chip(f.bank === 'baru' ? 'belum pernah dipakai' : 'pengganti soal lama', { bank: '' }) : null].filter(Boolean);
      function chipButir() {
        const b = infoButirF(f.butir); const teks = 'butir ' + (b ? (b.tingkat + ' ' + (b.mu.no ? b.mu.no + '.' : '') + b.nomor) : f.butir);
        const el = chip(b ? teks + ' · ' + pendek(b.teks, 34) : teks, { butir: '' }); el.classList.add('chip-butir');
        if (b) { el.setAttribute('title', b.teks); el.setAttribute('aria-label', 'Hapus saringan ' + teks + ': ' + pendek(b.teks, 80)); }
        return el;
      }
      const pb = pesertaAktif();
      chipAktif.replaceChildren(...(aktif.length ? aktif : [h('span', { class: 'meta' }, 'Tanpa saringan: semua kelompok Tingkat ' + tingkat + '.')]), ...(pb ? [h('span', { class: 'chip chip-bersama', title: pb.join(', ') }, UKP.icon('tim', null, true), h('span', { class: 'chip-teks' }, 'Bersama: ' + pb.join(', ')))] : []));
    }
    function hitung() {
      isiJenis(); isiKelompok();
      const arrP = pool(); const n = arrP.length; const lama = nCocok; nCocok = n;
      // v9.5 baris hitungan bank untuk saringan aktif; nKeluarga = banyak soal yang bisa dimulai (satu soal per keluarga)
      nKeluarga = K.akar ? new Set(arrP.map(x => K.akar(x) || x.id)).size : n;
      // v9.5.3 B6: "Semua" = urutLatih tanpa soal yang sudah dijawab benar hari ini (bila semuanya sudah, pakai semua)
      const sudahHari = benarHariIni(); const sisaHari = arrP.filter(x => !sudahHari.has(x.id)); const basisSemua = sisaHari.length ? sisaHari : arrP;
      nSemuaHari = f.set ? basisSemua.length : K.akar ? new Set(basisSemua.map(x => K.akar(x) || x.id)).size : basisSemua.length;
      rBank = null; rBankSemua = null;
      if (L.pakai && L.pakai.ringkas) {
        const r = L.pakai.ringkas(arrP); rBank = r; rBankSemua = basisSemua.length === arrP.length ? r : L.pakai.ringkas(basisSemua); const tunggu = L.pakai.menunggu ? L.pakai.menunggu(r) : 0;
        hitungBank.textContent = [UKP.fmt.angka(r.total) + ' soal', UKP.fmt.angka(r.baru) + ' belum dipakai', UKP.fmt.angka(r.penggantiSiap) + ' pengganti siap', UKP.fmt.angka(r.terpakai) + ' sudah dipakai'].join(' · ') + (tunggu ? '. ' + UKP.fmt.angka(tunggu) + ' soal pengganti menunggu giliran.' : '');
      }
      const nB = Math.min(n, (f.n === 'semua' ? nSemua() : nPenuh()) || 0);
      const teks = n ? UKP.fmt.angka(nB) + (nB < n ? ' soal bisa dimulai' : ' soal tersedia') + (laporanCadangan() ? ' (saringan kasus berangkai).' : '.') : 'Tidak ada soal yang cocok; longgarkan saringan.';
      // wilayah aria-live (tersembunyi visual) diperbarui setelah 500 ms diam, bukan pada setiap klik
      clearTimeout(tUmum); if (lama == null) jumlah.textContent = teks; else tUmum = setTimeout(() => { jumlah.textContent = teks; }, 500);
      perbaruiLaporan();
      catatanSet.hidden = !f.set; if (f.set) { const p = paketDari(f.set); catatanSet.textContent = p ? p.judul + ': ' + p.n + ' soal' + (p.tingkat ? ' setara UKP Tingkat ' + p.tingkat : '') + '; kelompok ' + p.kelompok.join(', ') + '. Pilih "Semua" untuk urutan asli try out.' : ''; }
      const lt = luarTingkat(f.kode); catatanKode.hidden = !lt;
      if (lt) catatanKode.textContent = f.kode === 'E' ? 'Etika & Profesi tidak diujikan di UKP; latihan ini untuk ujian profesi asosiasi.' : f.kode + ' di luar Tingkat ' + tingkat + ' (target Anda): semua soal kelompok ini dipakai; hasilnya tidak dihitung ke kesiapan tingkat.';
      perbaruiTombol(lama);
    }
    jumlah.className = 'visually-hidden';
    hitung();
    page.appendChild(metaCocok);
    // v8.2 B2 (audit T3): segmen besar "Sendiri | Bersama · N orang" di atas kartu saringan; rincian peserta dan tempo hanya saat Bersama.
    // Perangkat di room: pemandu → tombol "Mulai latihan bersama di room" (params room); anggota → ajakan "Masuk room" alih-alih papan
    const sBer = L.siapBersama(UKP.store.get()).bersama;
    // v9.2 G1: jumlah orang hanya dari daftar yang sudah diisi; label segmen "Bersama" sampai ada nama
    const nOrang = () => L.siapBersama(UKP.store.get()).bersama.peserta.length;
    const labelBersama = () => nOrang() ? 'Bersama · ' + nOrang() + ' orang' : 'Bersama';
    const peranR = peranRoom();
    modeLatih = params.bersama || (sBer.aktif && sBer.peserta.length) ? 'bersama' : 'sendiri';
    const pintuUjian = h('p', { class: 'pintu-ujian-tim small' }, h('a', { href: UKP.href ? UKP.href('simulasi', { tim: 1 }) : '#simulasi', class: 'tautan', onclick: e => { e.preventDefault(); UKP.go('simulasi', { tim: 1 }); } }, ikon('tim', null, true), 'Ujian tim: kunci dan nilai di akhir'));
    const atur = peranR === 'anggota' ? null : UKP.c.aturBersama({ tanpaSakelar: true, nSoal: nMulai, onUbah: () => { labelSeg(); perbaruiTombol(nCocok); } });
    aturWaktu = atur;
    const infoR = infoRoom();
    const ajakanRoom = peranR === 'anggota' ? h('div', { class: 'ajakan-room stack-xs' }, h('p', null, h('strong', null, 'Anda sedang di room' + (infoR && infoR.namaRoom ? ' "' + infoR.namaRoom + '"' : '') + '.')),
      h('p', { class: 'small muted' }, 'Latihan bersama dipimpin dari laptop pemimpin. Jawab dari HP ini lewat layar room.')) : null;
    const catatanRoom = peranR === 'tuan' ? h('p', { class: 'small muted catatan-room' }, 'Perangkat ini memimpin room' + (infoR && infoR.namaRoom ? ' "' + infoR.namaRoom + '"' : '') + ': soal tampil di HP anggota, jawaban mereka masuk ke papan.') : null;
    const panelBersama = h('div', { class: 'latih-bersama stack-sm', id: 'latih-bersama-panel', hidden: modeLatih !== 'bersama' }, catatanRoom, ajakanRoom || atur, ajakanRoom ? null : pintuUjian);
    const segMode = UKP.c.segmen({ id: 'f-mode', ariaLabel: 'Cara latihan', aktif: modeLatih, penuh: true,
      opsi: [{ nilai: 'sendiri', label: 'Sendiri', ikon: 'pen' }, { nilai: 'bersama', label: labelBersama(), ikon: 'tim' }],
      onPilih: v => {
        modeLatih = v; panelBersama.hidden = v !== 'bersama';
        if (atur) atur.aturAktif(v === 'bersama');
        labelSeg(); perbaruiTombol(nCocok);
        if (UKP.umumkan) UKP.umumkan(v === 'bersama' ? 'Latihan bersama dipilih. ' + (peranR === 'anggota' ? 'Masuk room untuk menjawab dari HP.' : nOrang() + ' orang.') : 'Latihan sendiri dipilih.');
      } });
    segMode.classList.add('latih-mode'); segMode.setAttribute('aria-controls', 'latih-bersama-panel');
    const segModeEl = segMode;
    function labelSeg() { const b = segMode.querySelector('button[data-nilai="bersama"] > span'); if (b) b.textContent = labelBersama(); }
    // tautan "Latihan bersama" (sidebar, params.bersama) menyalakan mode bersama di perangkat ini
    if (modeLatih === 'bersama' && atur && !(sBer.aktif && sBer.peserta.length)) { atur.aturAktif(true); labelSeg(); }
    if (modeLatih === 'sendiri' && sBer.aktif && atur) atur.aturAktif(false);
    perbaruiTombol(nCocok);
    // v9.5.3 Bx3 (peninjau): lipatan terbuka bila ada saringan lanjutan yang aktif, dihitung sesudah mode diketahui (waktu ketat tidak dihitung di mode Bersama)
    const nLanjut = [f.laporan, f.gayaUkp, resmiAktif(f), f.kecuali, f.baru2025, f.tempo && modeLatih !== 'bersama'].filter(Boolean).length;
    const tata = h('div', { class: 'tata' }); page.appendChild(tata);
    tata.appendChild(h('div', { class: 'card kl-8 latih-form' },
      segModeEl, panelBersama,
      h('div', { class: 'field' }, h('span', { class: 'label', id: 'f-n-lbl' }, 'Jumlah soal'), segN),
      segSet ? h('div', { class: 'field' }, h('span', { class: 'label', id: 'f-set-lbl' }, 'Sumber soal'), segSet, catatanSet) : null,
      h('div', { class: 'field field-bank' }, h('span', { class: 'label', id: 'f-bank-lbl' }, 'Pilih soal'), segBank, catatanBank, hitungBank, catatanBankKurang, tautanBank, catatanButir),
      h('div', { class: 'form-grid dua' }, h('div', { class: 'field' }, h('label', { for: 'f-kode' }, 'Kelompok'), selKode, catatanKode), h('div', { class: 'field' }, h('label', { for: 'f-topik' }, 'Topik'), selTopik), h('div', { class: 'field' }, h('label', { for: 'f-jenis' }, 'Jenis soal'), selJenis), h('div', { class: 'field' }, h('label', { for: 'f-kes' }, 'Kesulitan'), selKes)),
      togg('hanyaSalah', 'Hanya soal yang pernah keliru', 'Diambil dari Buku Kesalahan.'),
      h('details', { class: 'lipat saringan-lanjut', open: nLanjut ? true : null }, ringkasLanjut,
        h('div', { class: 'stack-sm' },
          h('div', { class: 'field' }, h('span', { class: 'label', id: 'f-lap-lbl' }, 'Soal mirip ujian Oktober 2026'), h('p', { class: 'bantu', id: 'f-lap-bantu' }, 'Diambil dari topik yang dilaporkan peserta. Untuk Tingkat A, laporan B juga memuat A1–A5.'), segLap, catatanLap),
          toggGaya, toggResmi,
          togg('kecuali', 'Hanya soal "kecuali"', 'Soal dengan kata kualifikasi: kecuali, bukan, paling lama, paling sedikit.'),
          togg('baru2025', 'Hanya ketentuan 2025+', 'Soal yang dasar hukumnya berlaku sejak 1 Januari 2025 atau sesudahnya.'),
          toggTempo)),
      jumlah,
      h('div', { class: 'sticky-actions latih-aksi-hp' }, tombolMulaiHp)));
    tata.appendChild(h('aside', { class: 'card ringkas latih-ringkas kl-4 lengket', 'aria-labelledby': 'latih-ringkas-j' },
      h('h2', { class: 'visually-hidden', id: 'latih-ringkas-j' }, 'Ringkasan saringan'),
      h('p', { class: 'latih-angka' }, angkaCocok, labelCocok),
      chipAktif, tombolMulai,
      h('button', { type: 'button', class: 'btn btn-ghost rata', onclick: () => UKP.go('latih', { atur: 1 }, { replace: true }) }, ikon('atur-ulang', null, true), 'Atur ulang saringan')));
    const bk = L.bukuKesalahan(tingkat, 5);
    if (bk.length) page.appendChild(sect({ judul: 'Buku Kesalahan terbaru', meta: bk.length + ' soal', isi: h('div', { class: 'list-rows daftar-kartu' }, bk.map(j => { const so = K.soal(j.soal); return so ? h('a', { class: 'row-link', href: '#latih', onclick: e => { e.preventDefault(); jalankan([so]); } }, h('span', { class: 'kode' }, so.id.split('-').pop()), h('span', { class: 'row-isi' }, h('span', { class: 'row-title small' }, pendek(so.stem, 90)), h('span', { class: 'row-meta' }, h('span', { class: 'kode' }, so.id), j.tag ? pill(UKP.tagLabel(j.tag), 'warn') : null)), ikon('chevron-kanan', 'chev', true)) : null; })) }));
    return hasil();
  };

  // ================= ULANG (flashcard) =================
  // DESAIN-V6 D.7 + UL-1..4: kop satu baris dengan meta antrean (diperbarui di tempat), dek sebagai .tabs bergulir
  // (ganti dek tanpa merender ulang halaman), bar progres dek, kartu masuk/keluar bergerak halus, fokus ke tombol Balik
  UKP.views.ulang = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    const page = h('div', { class: 'page lebar halaman-ulang' });
    const kel = K.kelompok(tingkat);
    // pilihan dek aktif (kode kelompok atau dek khusus); diperbarui saat tab berganti
    const pil = { kode: params.kode || null, dek: params.dek || null };
    const kodeLuar = () => !!pil.kode && !kel.includes(pil.kode);
    const kodeLuarAwal = kodeLuar() ? pil.kode : null;
    const kartuKode = kode => (((UKP.modul[kode] || {}).kartu) || []).concat(s.kartuOtomatis.filter(k => k.kode === kode));
    // kartu buatan pengguna (Jadikan kartu dari Lembar/Topik) didahulukan di antara kartu baru; dek "Kartu saya" berisi kartu itu saja
    const urutBaru = list => UKP.srs.urutBaru ? UKP.srs.urutBaru(list) : list;
    const kartuSaya = () => UKP.srs.kartuSaya ? UKP.srs.kartuSaya() : [];
    const belumDinilai = k => { const st = s.kartu[k.id]; return !st || !st.reps; };
    const nSaya = kartuSaya().length;
    // dek per kelompok (termasuk di luar tingkat target dan E): jatuh tempo dulu, lalu kartu yang belum pernah dinilai
    function antreanKode(kode) {
      const now = Date.now(); const semua = kartuKode(kode);
      const jt = semua.filter(k => { const st = s.kartu[k.id]; return st && st.reps && st.jatuhTempo <= now; });
      const baru = urutBaru(semua.filter(belumDinilai)).slice(0, 10);
      return U.acak(jt).concat(baru).slice(0, 30);
    }
    function susunAntrean(p) {
      p = p || pil; const luar = !!p.kode && !kel.includes(p.kode);
      if (luar) return antreanKode(p.kode);
      const q = UKP.srs.antrean(tingkat, { kode: p.kode || null, dek: p.dek || null, maks: p.dek ? 30 : 60 });
      return !q.length && p.kode ? antreanKode(p.kode) : q;
    }
    let antrean = susunAntrean(); let tinjau = false;
    const sumberTinjau = () => pil.kode ? kartuKode(pil.kode) : pil.dek === 'saya' ? kartuSaya() : pil.dek === 'perubahan' ? K.semuaKartu(tingkat).filter(k => (k.dekTambahan || []).includes('perubahan-2025-2026')) : K.semuaKartu(tingkat);
    // DESAIN-V7 P3-01: bar fokus selama kartu berjalan (posisi kartu hanya di sini); Keluar kembali ke Hari Ini (nilai sudah tersimpan)
    const fbar = fokusBar({ label: 'Kemajuan dek', labelKeluar: 'Keluar dari ulang kartu', onKeluar: () => { modeFokus(false); UKP.go('beranda'); } });
    fbar.hidden = true; page.appendChild(fbar);
    // kop: meta antrean hari ini (UL-1) sebagai satu kalimat .meta; hanya angka > 0 yang ditulis (P3-02)
    const kopEl = kop({ judul: 'Ulang kartu', meta: [h('span')] });
    page.appendChild(kopEl);
    const metaEl = kopEl.querySelector('.page-meta') || kopEl.appendChild(h('div', { class: 'page-meta' }));
    function perbaruiMeta() {
      const r = UKP.srs.ringkas(tingkat); const sisa = Math.max(0, antrean.length - idx);
      const bag = [sisa ? sisa + ' kartu ' + (tinjau ? 'untuk ditinjau' : 'hari ini') : 'Tidak ada kartu tersisa', r.jatuhTempo ? r.jatuhTempo + ' jatuh tempo' : null, r.baru ? r.baru + ' baru' : null, r.kuat ? r.kuat + ' kuat' : null].filter(Boolean);
      metaEl.replaceChildren(h('span', { class: 'meta' }, bag.map((b, i) => [i ? h('span', { class: 'sep', 'aria-hidden': 'true' }, '·') : null, b])));
    }
    // dek → tab dengan hitungan antrean; "Antrean hari ini" (UL-3) = jatuh tempo + baru
    const idDari = p => p.dek ? 'dek:' + p.dek : p.kode ? 'kode:' + p.kode : 'semua';
    const pilDari = id => id === 'semua' ? { kode: null, dek: null } : id.indexOf('dek:') === 0 ? { kode: null, dek: id.slice(4) } : { kode: id.slice(5), dek: null };
    const daftarTab = [{ id: 'semua', label: 'Antrean hari ini', labelPendek: 'Hari ini' }, { id: 'dek:perubahan', label: 'Perubahan 2025–2026', labelPendek: 'Perubahan' }, nSaya || pil.dek === 'saya' ? { id: 'dek:saya', label: 'Kartu saya' } : null]
      .concat(kel.map(k => ({ id: 'kode:' + k, label: k })), kodeLuarAwal ? [{ id: 'kode:' + kodeLuarAwal, label: kodeLuarAwal }] : []).filter(Boolean)
      .map(t => Object.assign(t, { hitung: susunAntrean(pilDari(t.id)).length }));
    const area = h('div', { class: 'stack-sm area-dek' });
    let idx = 0, dinilai = 0; let mulaiWaktu = Date.now();
    function mulaiTinjau() { antrean = U.ambil(sumberTinjau(), 10); tinjau = true; idx = 0; dinilai = 0; mulaiWaktu = Date.now(); gambar(true); }
    function gantiDek(id) { Object.assign(pil, pilDari(id)); antrean = susunAntrean(); tinjau = false; idx = 0; dinilai = 0; mulaiWaktu = Date.now(); }
    if (UKP.c.tabs) {
      const tabs = UKP.c.tabs({ label: 'Pilih dek', tab: daftarTab, aktif: idDari(pil), isi: id => { if (id !== idDari(pil)) gantiDek(id); gambar(false); return area; },
        onGanti: () => { if (UKP.perbaruiParams) UKP.perbaruiParams({ kode: pil.kode, dek: pil.dek }, 'ulang'); } });
      tabs.el.classList.add('tabs-dek');
      // ≥ 1280: kartu di kl-8, kartu kecil "Cara kerja" di kl-4 (tanpa daftar dek: tab sudah menjadi satu-satunya navigasi dek, prinsip 1);
      // < 1280 kartu itu turun ke bawah area kartu
      const panelCara = h('aside', { class: 'card ringkas kl-4 lengket cara-kerja', 'aria-labelledby': 'cara-kerja-j' },
        h('h2', { class: 'card-title', id: 'cara-kerja-j' }, 'Cara kerja'),
        h('p', { class: 'meta', style: { margin: '0' } }, 'Kartu yang Anda ingat akan muncul makin jarang (1, 3, 7 hari, dan seterusnya). Kartu yang lupa kembali dalam 10 menit.'));
      page.appendChild(h('div', { class: 'tata ulang-tata' }, h('div', { class: 'kl-8 stack-sm' }, tabs.el, tabs.elPanel), panelCara));
    } else {
      // cadangan core.js lama: chip filter (pindah rute)
      const chip = (teks, aktif, p) => h('button', { type: 'button', class: 'chip', 'aria-pressed': String(aktif), onclick: () => UKP.go('ulang', p, { replace: true }) }, teks);
      page.appendChild(h('div', { class: 'chip-row gulir', role: 'group', 'aria-label': 'Pilih dek' }, daftarTab.map(t => chip(t.label + (t.hitung ? ' · ' + t.hitung : ''), t.id === idDari(pil), pilDari(t.id)))));
      page.appendChild(area); gambar(false);
      page.appendChild(h('p', { class: 'meta' }, 'Kartu yang Anda ingat akan muncul makin jarang (1, 3, 7 hari, dan seterusnya). Kartu yang lupa kembali dalam 10 menit.'));
    }
    function aturFokus(on) { fbar.hidden = !on; modeFokus(on); }
    function gambar(fokus) {
      area.innerHTML = ''; perbaruiMeta(); aturFokus(antrean.length > 0 && idx < antrean.length);
      if (pil.dek === 'saya') area.appendChild(h('p', { class: 'small muted' }, 'Kartu yang Anda buat lewat "Jadikan kartu" di Lembar Angka dan angka kunci topik, dari semua tingkat. Kartu baru di dek ini tidak dibatasi kuota harian.'));
      if (kodeLuar()) area.appendChild(h('p', { class: 'small muted' }, pil.kode === 'E' ? 'Dek Etika & Profesi (di luar skor UKP).' : 'Dek ' + pil.kode + ' di luar Tingkat ' + tingkat + ' (target Anda).'));
      if (!antrean.length) {
        const bisaTinjau = sumberTinjau().length > 0;
        const dekSayaKosong = pil.dek === 'saya' && !bisaTinjau;
        // kuota kartu baru hari ini habis, tetapi masih ada kartu buatan pengguna yang belum pernah diulang → tawarkan dek Kartu saya
        const sayaBaru = !tinjau && pil.dek !== 'saya' ? kartuSaya().filter(belumDinilai).length : 0;
        const judulKosong = tinjau ? 'Tidak ada kartu untuk ditinjau' : dekSayaKosong ? 'Belum ada kartu buatan Anda' : 'Tidak ada kartu jatuh tempo';
        const teksKosong = tinjau ? 'Dek ini belum berisi kartu.' : dekSayaKosong ? 'Buat kartu lewat tombol "Jadikan kartu" di Lembar Angka atau di tabel angka kunci topik.'
          : 'Semua kartu sudah dinilai hari ini.' + (sayaBaru ? ' Kuota kartu baru hari ini sudah terpakai; ' + sayaBaru + ' kartu buatan Anda belum pernah diulang.' : ' Tambah kartu baru lewat topik atau kembali besok.');
        const aksiKosong = [
          sayaBaru ? h('button', { class: 'btn btn-sm btn-primary', onclick: () => UKP.go('ulang', { dek: 'saya' }, { replace: true }) }, 'Ulang Kartu saya') : null,
          bisaTinjau && !tinjau ? h('button', { class: 'btn btn-sm', 'aria-describedby': 'ulang-tinjau-ket', onclick: mulaiTinjau }, 'Tinjau 10 kartu acak') : null,
          bisaTinjau && !tinjau ? h('span', { class: 'tiny muted', id: 'ulang-tinjau-ket' }, 'Latihan bebas: menilai kartu di mode tinjau tidak mengubah jadwal pengulangan.') : null].filter(Boolean);
        area.appendChild(UKP.c.kosong(judulKosong, teksKosong, aksiKosong.length ? h('div', { class: 'stack-sm' }, aksiKosong) : null));
        return;
      }
      if (idx >= antrean.length) {
        const menit = Math.max(1, Math.round((Date.now() - mulaiWaktu) / 60000)); if (dinilai) UKP.hadir.catat('HADIR', menit);
        area.appendChild(h('div', { class: 'card sorot' }, h('h2', null, dinilai + ' kartu ' + (tinjau ? 'ditinjau' : 'dinilai')), h('p', { class: 'small muted' }, tinjau ? 'Mode tinjau: jadwal pengulangan kartu tidak berubah.' : 'Jadwal berikutnya mengikuti tangga interval tiap kartu.'), UKP.c.stempel('DEK SELESAI', 'ok', { besar: true, diraih: true }), h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-primary', onclick: () => UKP.go('beranda') }, 'Hari Ini'), h('button', { class: 'btn', onclick: () => { antrean = susunAntrean(); tinjau = false; idx = 0; dinilai = 0; mulaiWaktu = Date.now(); gambar(true); } }, 'Cek jatuh tempo lagi'))));
        if (fokus) UKP.fokusNanti(area.querySelector('h2'));
        return;
      }
      const k = antrean[idx];
      // mode tinjau: simpan keadaan SRS sebelum dinilai lalu kembalikan, sehingga jadwal tidak berubah
      const sebelum = tinjau && s.kartu[k.id] ? JSON.parse(JSON.stringify(s.kartu[k.id])) : null;
      const fl = UKP.c.flash(k, { nomor: idx + 1, total: antrean.length, tinjau, fokus: false, onNilai: () => { if (tinjau) { if (sebelum) s.kartu[k.id] = sebelum; else delete s.kartu[k.id]; UKP.store.save(); } dinilai++; idx++; gambar(true); } });
      fbar.atur((tinjau ? 'Tinjau · ' : '') + 'Kartu ' + (idx + 1) + ' dari ' + antrean.length + ' · ' + dinilai + ' dinilai', idx / antrean.length * 100);
      area.append(tinjau ? h('p', { class: 'meta' }, 'Mode tinjau: jadwal pengulangan tidak berubah.') : null, fl);
      // fokus ke tombol Balik (bukan wadah kartu); tidak merebut fokus dari tab saat dek berganti
      // kartu berikutnya setelah dinilai dengan klik/ketuk: fokus tanpa cincin (K-20); lewat 1/2/3 cincin tetap tampak
      if (fokus) { const el = fl.fokusAwal || fl; if (UKP.c.flash.lewatPointer) requestAnimationFrame(() => { if (el.isConnected && !document.querySelector('dialog[open]')) { try { el.focus({ preventScroll: true, focusVisible: false }); } catch (e) { UKP.fokus(el); } } }); else UKP.fokusNanti(el); }
    }
    // render pertama: setelah router memfokuskan h1, fokus pindah ke tombol Balik agar Spasi langsung membalik kartu
    // tanpa cincin fokus (K-20): fokus programatik saat halaman dibuka bukan hasil interaksi papan ketik
    requestAnimationFrame(() => { const b = area.querySelector('.flash-balik'); if (b && b.isConnected && !document.querySelector('dialog[open]')) { try { b.focus({ preventScroll: true, focusVisible: false }); } catch (e) { UKP.fokus(b); } } });
    return { node: page, unmount: () => modeFokus(false) };
  };

  // ================= STUDI KASUS =================
  // progres per kasus (langkah aktif, status, petunjuk, isian) agar tidak hilang saat membuka kalkulator lalu Kembali
  function ambilProgres(id) { if (L.ambilKasusProgres) return L.ambilKasusProgres(id) || null; const s = UKP.store.get(); return (s.kasusProgres || {})[id] || null; }
  function simpanProgres(id, pr) { if (L.simpanKasusProgres) { L.simpanKasusProgres(id, pr); return; } const s = UKP.store.get(); s.kasusProgres = s.kasusProgres || {}; if (pr) s.kasusProgres[id] = pr; else delete s.kasusProgres[id]; UKP.store.save(); }
  // kalkulator terhubung (kasus.kalkulatorRef) ditampilkan dengan namanya, bukan id
  const kalkulatorKasus = k => (k && k.kalkulatorRef && UKP.kalkulatorByJenis ? UKP.kalkulatorByJenis(k.kalkulatorRef) : null);
  UKP.views.kasus = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    const page = h('div', { class: 'page' });
    if (params.id) {
      const k = K.kasus(params.id); if (!k) return h('div', { class: 'page' }, h('h1', null, 'Kasus tidak ditemukan'), UKP.link('Daftar studi kasus', 'kasus'));
      // DESAIN-V7 P3-01: langkah kasus berjalan dalam mode fokus; Keluar kembali ke daftar (progres tersimpan otomatis)
      page.classList.add('lebar');
      const fbar = fokusBar({ label: 'Kemajuan studi kasus', labelKeluar: 'Keluar dari studi kasus', onKeluar: () => { modeFokus(false); UKP.go('kasus', { kode: k.kode }); } });
      page.appendChild(fbar);
      page.appendChild(UKP.c.stepper(k, { onSelesai: () => UKP.go('kasus'), onProgres: (sel, n) => { const selesai = sel >= n; fbar.atur(selesai ? 'Semua ' + n + ' langkah selesai' : 'Langkah ' + (sel + 1) + ' dari ' + n + ' · ' + sel + ' selesai', sel / Math.max(1, n) * 100); modeFokus(!selesai); } }));
      return { node: page, unmount: () => modeFokus(false) };
    }
    page.appendChild(kop({ judul: 'Studi kasus', lead: 'Alur hitung multi-langkah dengan data kasus, petunjuk bertahap, dan kalkulator terhubung.' }));
    // params.kode: semua kasus kelompok itu, termasuk kelompok di luar tingkat target dan E
    const daftar = params.kode ? (((UKP.modul[params.kode] || {}).kasus) || []) : K.semuaKasus(tingkat);
    if (params.kode) page.appendChild(h('p', { class: 'small muted' }, 'Kelompok ' + params.kode + ' · ' + K.namaKelompok(params.kode) + (diTingkat(params.kode, tingkat) ? '' : ' (di luar Tingkat ' + tingkat + ')') + '. ', UKP.link('Tampilkan semua kasus Tingkat ' + tingkat, 'kasus')));
    if (!daftar.length) page.appendChild(UKP.c.kosong('Belum ada studi kasus', params.kode ? 'Kelompok ini belum memiliki studi kasus.' : 'Konten kasus untuk tingkat ini belum dimuat.'));
    // status per kartu sebagai pill (stempel hanya untuk capaian di halaman kasus itu sendiri)
    page.appendChild(h('div', { class: 'card-grid dua rata' }, daftar.map(k => { const t = K.topik(k.topik); const selesai = s.cekSelesai['kasus:' + k.id]; const pr = ambilProgres(k.id); const berjalan = !selesai && pr && pr.aktif > 0 && pr.aktif < k.langkah.length; return h('div', { class: 'card klik', 'data-tingkat': k.kode[0] === 'E' ? null : k.kode[0] }, h('p', { class: 'eyebrow' }, k.kode + ' · ' + (t ? t.judul : '')), h('a', { class: 'card-link card-title', href: '#kasus', 'data-go': 'kasus', 'data-params': JSON.stringify({ id: k.id }) }, k.judul), h('p', { class: 'row-meta' }, pill(k.langkah.length + ' langkah'), pill('± ' + k.estimasiMenit + ' mnt', 'netral', 'jam'), k.kalkulatorRef ? h('span', null, ikon('calc', null, true), ' ' + ((kalkulatorKasus(k) || {}).nama || k.kalkulatorRef)) : null), selesai ? pill('selesai', 'ok', 'check') : berjalan ? pill('berjalan · langkah ' + (pr.aktif + 1) + '/' + k.langkah.length, 'info') : null); })));
    return page;
  };
  // bulan panjang → pendek untuk nilai data kasus ("16 Februari 2026" → "16 Feb 2026")
  const BULAN_PENDEK = { Januari: 'Jan', Februari: 'Feb', Maret: 'Mar', April: 'Apr', Juni: 'Jun', Juli: 'Jul', Agustus: 'Agu', September: 'Sep', Oktober: 'Okt', November: 'Nov', Desember: 'Des' };
  const nilaiData = v => String(v == null ? '' : v).replace(/\b(Januari|Februari|Maret|April|Juni|Juli|Agustus|September|Oktober|November|Desember)\b/g, b => BULAN_PENDEK[b]);
  // label baris buku besar dari pertanyaan langkah (dipendekkan) dan nilainya dari jawaban (tanpa data baru)
  const labelLangkah = l => { const t = String(l.pertanyaan || '').replace(/\s*\((Rp|%|hari|bulan|tahun)\)/gi, '').replace(/^(Berapa(kah)?|Apakah|Bagaimana|Kapan|Siapa|Mana)\s+/i, '').replace(/[?.:]+\s*$/, '').trim(); return pendek(t.charAt(0).toUpperCase() + t.slice(1), 64); };
  const nilaiLangkah = l => l.tipe === 'angka' ? (/\(Rp\)/i.test(l.pertanyaan || '') ? 'Rp' : '') + UKP.fmt.angka(l.jawaban) + (/\(%\)/.test(l.pertanyaan || '') ? '%' : '') : 'Opsi ' + l.jawaban;
  UKP.c.stepper = function (k, opsi) {
    opsi = opsi || {}; const s = UKP.store.get();
    // HP: narasi dipotong 5 baris + "Baca selengkapnya", data kasus dilipat; desktop (≥1024): narasi utuh, data kasus terbuka
    const lebar = !window.matchMedia || matchMedia('(min-width: 1024px)').matches;
    const wrap = h('div', { class: 'stack kasus' });
    // kalkulator terhubung di kop kasus: tersedia di semua langkah (angka maupun pilihan), dengan nama kalkulatornya
    const kal = kalkulatorKasus(k); const idKal = 'kasus-kal-' + k.id;
    const n = k.langkah.length; let pr0 = ambilProgres(k.id) || {};
    // kembali dari kalkulator (penanda keKalkulator ≤ 6 jam): fokus ke input langkah aktif setelah halaman tampil
    const dariKalkulator = Number(pr0.keKalkulator) > 0 && Date.now() - Number(pr0.keKalkulator) < 6 * 3600000;
    // kasus yang sudah tuntas lebih dari 30 menit lalu dimulai lagi dari awal (keadaan selesai hanya untuk kembali dari kalkulator)
    if (Number(pr0.aktif) >= n && Date.now() - (Number(pr0.pada) || 0) > 30 * 60000) { simpanProgres(k.id, null); pr0 = {}; }
    let aktif = U.clamp(Number(pr0.aktif) || 0, 0, n); let status = Object.assign({}, pr0.status); let petunjukN = Object.assign({}, pr0.petunjukN); let isian = Object.assign({}, pr0.isian);
    // percobaan per langkah (tampilan: "Percobaan 2 · Petunjuk 1/3" dan ringkasan kinerja), disimpan bersama progres kasus
    let percobaan = Object.assign({}, pr0.percobaan);
    function simpan() { simpanProgres(k.id, { aktif, status, petunjukN, isian, percobaan, pada: Date.now() }); }
    function parseAngka(v) { if (v == null) return NaN; const t = String(v).replace(/rp/i, '').replace(/\s/g, '').replace(/\./g, '').replace(',', '.'); if (t === '' || !/\d/.test(t)) return NaN; return Number(t); }
    // ke kalkulator: progres disimpan beserta penanda kembali; kasus.kalkulatorInput (opsional) dikirim sebagai nilai awal (params.input)
    const keKalkulator = () => {
      simpanProgres(k.id, { aktif, status, petunjukN, isian, percobaan, pada: Date.now(), keKalkulator: Date.now() });
      const p = { jenis: k.kalkulatorRef, dariKasus: k.id };
      if (k.kalkulatorInput && typeof k.kalkulatorInput === 'object') p.input = Object.assign({}, k.kalkulatorInput);
      UKP.go('kalkulator', p);
    };
    const adaKalkulator = !!kal;
    // kop: eyebrow kode, judul, meta, progres langkah (stepper horizontal berteks); aksi Buka kalkulator
    const progresTeks = h('p', { class: 'small muted' }); const progresSeg = h('div', { class: 'stepper-h', 'aria-hidden': 'true' });
    function gambarProgres() { const sel = Math.min(aktif, n); progresTeks.textContent = sel >= n ? 'Semua ' + n + ' langkah selesai' : 'Langkah ' + (sel + 1) + ' dari ' + n; progresSeg.replaceChildren(...k.langkah.map((l, i) => h('span', { class: i < sel ? 'on' : i === sel ? 'kini' : null }))); if (typeof opsi.onProgres === 'function') { try { opsi.onProgres(sel, n); } catch (e) { console.error(e); } } }
    // posisi langkah ditulis sekali: di bar fokus bila ada (onProgres), selain itu di bawah judul
    if (typeof opsi.onProgres === 'function') progresTeks.hidden = true;
    gambarProgres();
    // DESAIN-V7 P3-08: kop hanya judul + "Langkah 1 dari 6" + stepper; kalkulator pindah ke kaki panel Data kasus (bila ada data)
    const tombolKal = (kelas, teks) => h('button', { type: 'button', class: kelas, title: kal.nama + (k.kalkulatorInput ? ' · diisi angka kasus' : ''), onclick: () => keKalkulator() }, ikon('calc', null, true), teks);
    const kopEl = kop({ eyebrow: k.id + ' · ' + K.namaKelompok(k.kode), judul: k.judul,
      aksi: kal && !(k.data || []).length ? [tombolKal('btn btn-sm', 'Buka kalkulator'), h('span', { class: 'meta' }, kal.nama), h('span', { class: 'visually-hidden', id: idKal }, k.kalkulatorInput ? 'diisi angka kasus' : '')] : null });
    (kopEl.querySelector('.page-head-teks') || kopEl).appendChild(h('div', { class: 'topik-langkah' }, progresTeks, progresSeg));
    wrap.appendChild(kopEl);
    // narasi di kartu (bukan lead muted), maks 68ch; dipotong 4 baris + "Baca narasi lengkap" (tombol rata tepi teks)
    const narasiP = h('p', { id: 'narasi-' + k.id, 'data-potong': '' }, k.narasi);
    const narasiToggle = h('button', { type: 'button', class: 'btn btn-sm btn-ghost rata lead-toggle', 'aria-expanded': 'false', 'aria-controls': narasiP.id, onclick: () => { const buka = narasiP.hasAttribute('data-potong'); narasiP.toggleAttribute('data-potong', !buka); narasiToggle.setAttribute('aria-expanded', String(buka)); narasiToggle.textContent = buka ? 'Ringkas narasi' : 'Baca narasi lengkap'; } }, 'Baca narasi lengkap');
    const narasiEl = h('section', { class: 'card narasi-kasus', 'aria-labelledby': 'narasi-judul-' + k.id }, h('h2', { class: 'card-title', id: 'narasi-judul-' + k.id }, 'Narasi kasus'), narasiP, narasiToggle);
    wrap.appendChild(narasiEl);
    requestAnimationFrame(() => { if (narasiP.isConnected && narasiP.scrollHeight <= narasiP.clientHeight + 2) narasiToggle.hidden = true; });
    // data kasus: label kiri membungkus, nilai mono nowrap rata kanan (turun ke baris kedua bila tidak muat), tanggal "16 Feb 2026"
    const data = k.data || [];
    const barisData = () => h('div', { class: 'data-kasus' }, data.map(d => { const v = nilaiData(d[1]); const teks = v.length > 24 && !/\d/.test(v.slice(0, 4)); return h('div', { class: 'hasil-baris' }, h('span', null, d[0]), h('span', { class: 'n' + (teks ? ' teks' : '') }, v)); }));
    const dataEl = data.length ? h('details', { class: 'card data-lengket', open: lebar ? true : null }, h('summary', null, ikon('chevron-kanan', 'chev-lipat', true), h('span', { class: 'card-title' }, 'Data kasus'), h('span', { class: 'meta' }, data.length + ' baris')), barisData(),
      kal ? h('div', { class: 'data-kaki' }, tombolKal('btn btn-sm', 'Buka kalkulator'), h('span', { class: 'meta' }, kal.nama)) : null) : null;
    // HP: lembar bawah "Data kasus" dari langkah aktif (KS-5); fokus kembali ke pemicu saat ditutup
    const bukaDataSheet = () => UKP.dialog({ judul: 'Data kasus', sheet: true, isi: barisData() });
    // buku besar kasus (Momen 8): langkah benar "dibukukan" sebagai baris; baris baru bergaris bawah tergambar
    const bukuBesar = h('div', { class: 'buku-besar' });
    const bukuKartu = h('section', { class: 'card buku-besar-kartu', 'aria-labelledby': 'bb-judul-' + k.id }, h('div', { class: 'card-head' }, h('p', { class: 'eyebrow', id: 'bb-judul-' + k.id }, 'Buku besar kasus'), h('span', { class: 'small muted bb-hitung' })), bukuBesar);
    let barisBaru = -1;
    function teksJejak() { return 'JEJAK KASUS · ' + k.id + ' ' + k.judul + '\n' + k.langkah.map((l, i) => (i < aktif ? l.no + '. ' + labelLangkah(l) + ': ' + nilaiLangkah(l) : null)).filter(Boolean).join('\n'); }
    function gambarBukuBesar() {
      const sel = k.langkah.filter((l, i) => i < aktif || status[i] === 'benar');
      bukuKartu.querySelector('.bb-hitung').textContent = sel.length + '/' + n + ' dibukukan';
      if (sel.length) { bukuBesar.setAttribute('role', 'list'); bukuBesar.setAttribute('aria-label', 'Buku besar kasus'); } else { bukuBesar.removeAttribute('role'); bukuBesar.removeAttribute('aria-label'); }
      bukuBesar.replaceChildren(...(sel.length ? sel.map(l => { const i = k.langkah.indexOf(l); return h('div', { class: 'bb-baris', role: 'listitem', 'data-baru': i === barisBaru && gerak() ? '' : null }, h('span', null, labelLangkah(l)), h('span', { class: 'n' }, nilaiLangkah(l))); })
        : [h('p', { class: 'small muted' }, 'Setiap langkah yang benar tercatat di sini.')]));
      barisBaru = -1;
    }
    const stepper = h('ol', { class: 'stepper' });
    // ≥1280: .panel-kanan — stepper (+ buku besar) di kiri, data kasus lengket di panel kanan 320px; di bawah itu data kasus di atas stepper
    let mqPanel = null; try { mqPanel = window.matchMedia ? matchMedia('(min-width: 1280px)') : null; } catch (e) {}
    const panel = h('div', { class: 'panel-kanan' });
    const kiri = h('div', { class: 'stack' });
    const sisi = h('aside', { class: 'panel-kanan-isi stack', 'aria-label': 'Data kasus' });
    function tata() {
      const kanan = !!(dataEl && mqPanel && mqPanel.matches);
      if (kanan) {
        kiri.replaceChildren(narasiEl, stepper, bukuKartu); sisi.replaceChildren(dataEl); panel.replaceChildren(kiri, sisi); if (panel.parentNode !== wrap) wrap.appendChild(panel); dataEl.open = true;
        // cadangan bila stylesheet belum memuat .panel-kanan: grid dua kolom (aside meregang agar data kasus tetap lengket)
        requestAnimationFrame(() => { if (panel.isConnected && getComputedStyle(panel).display !== 'grid') Object.assign(panel.style, { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: '16px' }); });
      }
      else { if (panel.parentNode === wrap) panel.remove(); wrap.appendChild(narasiEl); if (dataEl) wrap.appendChild(dataEl); wrap.append(stepper, bukuKartu); }
    }
    tata();
    if (mqPanel && dataEl) {
      const ubah = () => { if (!wrap.isConnected) { lepasMq(); return; } const ae = document.activeElement; tata(); if (ae && ae !== document.activeElement && wrap.contains(ae)) { try { ae.focus({ preventScroll: true }); } catch (e) {} } };
      const lepasMq = () => { try { mqPanel.removeEventListener('change', ubah); } catch (e) {} };
      try { mqPanel.addEventListener('change', ubah); } catch (e) {}
    }
    function gambar(dariPeriksa) {
      stepper.innerHTML = ''; let target = null; gambarProgres(); gambarBukuBesar();
      k.langkah.forEach((l, i) => {
        // status tampilan: benar (langkah lewat), aktif/salah (langkah aktif; salah bila percobaan terakhir keliru), terkunci
        const st = i < aktif || status[i] === 'benar' ? 'benar' : i === aktif ? (status[i] === 'salah' ? 'salah' : 'aktif') : 'terkunci';
        const li = h('li', { class: 'langkah', 'data-status': st, 'aria-current': i === aktif ? 'step' : null });
        const simpul = h('span', { class: 'simpul', 'aria-hidden': 'true' }, st === 'benar' ? ikon('check', null, true) : st === 'salah' ? ikon('x', null, true) : String(l.no));
        const sr = h('span', { class: 'visually-hidden' }, 'Langkah ' + l.no + ' dari ' + n + (st === 'benar' ? ', selesai' : st === 'terkunci' ? ', terkunci' : ', aktif') + ': ');
        if (st === 'terkunci') { li.append(simpul, h('p', { class: 'langkah-judul' }, sr, l.pertanyaan, ikon('gembok', 'ikon-kunci', true))); stepper.appendChild(li); return; }
        if (st === 'benar') {
          // ringkas satu baris (judul + jawaban mono + pill); dapat dibuka untuk penjelasan
          li.append(simpul, h('details', null, h('summary', null, h('span', { class: 'langkah-judul' }, sr, labelLangkah(l)), l.tipe === 'angka' ? h('span', { class: 'mono small' }, nilaiLangkah(l)) : h('span', { class: 'small' }, h('span', { class: 'mono' }, l.jawaban + '.'), ' ' + pendek(l.opsi ? l.opsi[l.jawaban] : '', 48)), pill('benar', 'ok', 'check')),
            h('p', { class: 'small muted' }, l.penjelasan)));
          stepper.appendChild(li); return;
        }
        // langkah aktif: judul + kartu sorot (.langkah-isi) berisi isian/opsi, Periksa, Petunjuk, Data kasus (HP)
        const umpan = h('div', { role: 'status', class: 'stack-sm' });
        const errId = 'galat-' + k.id + '-' + i;
        const err = h('p', { class: 'small galat', id: errId, hidden: true, style: { color: 'var(--attn)' } });
        const infoCoba = h('p', { class: 'percobaan', hidden: true });
        let fokusGalat = null; let isiEl; let ambilNilai = () => null;
        // Periksa ber-aria-disabled sampai ada isian/pilihan (tetap bisa diklik: klik menampilkan galat yang menjelaskan)
        let btnPeriksa = null; const aturPeriksa = ada => { if (!btnPeriksa) return; if (ada) btnPeriksa.removeAttribute('aria-disabled'); else btnPeriksa.setAttribute('aria-disabled', 'true'); };
        if (l.tipe === 'angka') {
          const rp = /\(Rp\)/i.test(l.pertanyaan || '');
          const inp = h('input', { class: 'input angka mono', inputmode: 'decimal', id: 'langkah-' + i, placeholder: rp ? '0' : 'Jawaban angka', 'aria-label': 'Jawaban langkah ' + l.no, value: isian[i] || null, oninput: e => { isian[i] = e.target.value; aturPeriksa(/\d/.test(e.target.value)); if (inp.hasAttribute('aria-invalid')) { inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); err.hidden = true; } simpan(); } });
          fokusGalat = inp; target = inp;
          isiEl = h('div', { class: 'field' }, rp ? h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, 'Rp'), inp) : inp, err);
          inp.addEventListener('keydown', e => { if (e.key === 'Enter') cek(parseAngka(inp.value)); });
          ambilNilai = () => parseAngka(inp.value);
        } else {
          let pilih = isian[i] || null; const name = 'lk-' + k.id + '-' + i;
          // opsi keliru yang terakhir diperiksa ditandai (KS-2) sampai pengguna memilih opsi lain
          const salahTerakhir = status[i] === 'salah' && pilih && pilih !== l.jawaban ? pilih : null;
          const fs = h('fieldset', { class: 'opsi', 'aria-describedby': errId }, h('legend', { class: 'visually-hidden' }, 'Pilihan jawaban langkah ' + l.no), ['A', 'B', 'C', 'D'].map(o => l.opsi && l.opsi[o] ? h('label', { 'data-dipilih': pilih === o ? '' : null, 'data-hasil': salahTerakhir === o ? 'salah' : null }, h('input', { type: 'radio', name, value: o, checked: pilih === o ? true : null, onchange: () => { pilih = o; isian[i] = o; aturPeriksa(true); fs.querySelectorAll('label').forEach(lb => { lb.toggleAttribute('data-dipilih', lb.querySelector('input').value === o); lb.removeAttribute('data-hasil'); const t = lb.querySelector('.tanda'); if (t) t.replaceChildren(); }); err.hidden = true; simpan(); } }), h('kbd', null, o), h('span', { class: 'teks' }, l.opsi[o]), h('span', { class: 'tanda' }, salahTerakhir === o ? [ikon('x', null, true), 'Belum tepat'] : null)) : null));
          fokusGalat = fs.querySelector('input'); target = fs.querySelector('input:checked') || fokusGalat;
          isiEl = h('div', { class: 'stack-sm' }, fs, err);
          ambilNilai = () => pilih;
        }
        const btnPetunjuk = h('button', { type: 'button', class: 'btn', onclick: () => { petunjukN[i] = Math.min((petunjukN[i] || 0) + 1, 3); simpan(); gambarPetunjuk(); perbaruiInfo(); } });
        btnPeriksa = h('button', { type: 'button', class: 'btn btn-primary', 'aria-disabled': (l.tipe === 'angka' ? /\d/.test(String(isian[i] || '')) : !!isian[i]) ? null : 'true', onclick: () => cek(ambilNilai()) }, ikon('check'), 'Periksa');
        const btnRow = h('div', { class: 'btn-row' }, btnPeriksa, btnPetunjuk,
          data.length && !lebar ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', 'aria-haspopup': 'dialog', onclick: bukaDataSheet }, ikon('lembar', null, true), 'Data kasus') : null);
        li.append(simpul, h('p', { class: 'langkah-judul' }, sr, l.pertanyaan), h('div', { class: 'langkah-isi' }, isiEl, btnRow, infoCoba, umpan));
        function perbaruiInfo() {
          const m = petunjukN[i] || 0; const c = percobaan[i] || 0;
          btnPetunjuk.replaceChildren(ikon('lampu', null, true), m >= 3 || !(l.petunjuk && l.petunjuk[m]) ? 'Petunjuk habis' : 'Petunjuk ' + (m + 1) + '/' + Math.min(3, (l.petunjuk || []).length || 3));
          btnPetunjuk.toggleAttribute('disabled', m >= 3 || !(l.petunjuk && l.petunjuk[m]));
          infoCoba.hidden = !c && !m; infoCoba.textContent = 'Percobaan ' + (c + 1) + ' · petunjuk ' + m + '/' + Math.min(3, (l.petunjuk || []).length || 3);
        }
        function galat(teks) { err.textContent = teks; err.hidden = false; if (fokusGalat && fokusGalat.classList.contains('input')) { fokusGalat.setAttribute('aria-invalid', 'true'); fokusGalat.setAttribute('aria-describedby', errId); } if (fokusGalat) fokusGalat.focus(); }
        function gambarPetunjuk() { umpan.replaceChildren(); const m = petunjukN[i] || 0; for (let j = 0; j < m; j++) if (l.petunjuk && l.petunjuk[j]) umpan.appendChild(h('div', { class: 'petunjuk' }, ikon('lampu'), h('span', null, h('strong', null, 'Petunjuk ' + (j + 1) + '/' + Math.min(3, l.petunjuk.length) + ': '), l.petunjuk[j]))); }
        function cek(v) {
          let benar;
          if (l.tipe === 'angka') { if (isNaN(v)) { galat('Masukkan angka, misalnya 1.250.000.'); return; } benar = Math.abs(v - l.jawaban) <= (l.toleransi || 0); }
          else { if (!v) { galat('Pilih salah satu opsi.'); return; } benar = v === l.jawaban; }
          percobaan[i] = (percobaan[i] || 0) + (benar ? 0 : 1);
          if (benar) { status[i] = 'benar'; aktif = i + 1; barisBaru = i; if (aktif >= n) s.cekSelesai['kasus:' + k.id] = Date.now(); simpan(); UKP.store.save(); gambar(true); }
          else {
            status[i] = 'salah'; petunjukN[i] = Math.min((petunjukN[i] || 0) + 1, 3); li.dataset.status = 'salah'; simpul.replaceChildren(ikon('x', null, true)); simpan(); gambarPetunjuk(); perbaruiInfo();
            if (l.tipe !== 'angka') { const lb = Array.from(li.querySelectorAll('.opsi label')).find(x => x.querySelector('input').value === v); if (lb) { lb.dataset.hasil = 'salah'; const t = lb.querySelector('.tanda'); if (t) t.replaceChildren(ikon('x', null, true), 'Belum tepat'); } }
            // arah selisih untuk isian angka hanya setelah petunjuk 2 dipakai, agar tidak memberi jawaban (KS-2)
            const arah = l.tipe === 'angka' && (petunjukN[i] || 0) >= 2 ? (v > l.jawaban ? ' Jawaban Anda terlalu besar.' : ' Jawaban Anda terlalu kecil.') : '';
            umpan.appendChild(h('p', { class: 'small', style: { color: 'var(--attn)' } }, 'Kurang tepat. Coba lagi dengan petunjuk di atas.' + arah));
            if ((petunjukN[i] || 0) >= 3 && UKP.store.get().pengaturan.tutorAktif) umpan.appendChild(h('button', { class: 'btn btn-sm', onclick: () => UKP.tutor.buka({ kasus: k, langkah: l }) }, ikon('chat', null, true), 'Tanya Tutor'));
          }
        }
        gambarPetunjuk(); perbaruiInfo();
        stepper.appendChild(li);
      });
      if (aktif >= n) {
        // kasus selesai: ringkasan kinerja (KS-4), stempel SELESAI menutup buku besar, salin jejak
        const nUlang = k.langkah.reduce((a, l, i) => a + (percobaan[i] || 0), 0); const nPetunjuk = k.langkah.reduce((a, l, i) => a + (petunjukN[i] || 0), 0);
        // salin jejak lewat UKP.c.salin/UKP.salinTeks (core.js): tanpa izin papan klip muncul dialog berisi teks terpilih
        // untuk disalin manual, lalu fokus kembali ke tombol ini
        const btnSalin = typeof UKP.c.salin === 'function' ? UKP.c.salin(teksJejak, { label: 'Salin jejak', kelas: 'btn btn-ghost btn-text', judul: 'Salin jejak kasus', pesan: 'Jejak kasus disalin.' })
          : h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: async () => {
            const ok = UKP.salinTeks ? await UKP.salinTeks(teksJejak(), 'Salin jejak kasus') : false;
            if (ok) UKP.toast('Jejak kasus disalin.'); else if (!UKP.salinTeks) UKP.toast('Gagal menyalin jejak.');
          } }, ikon('copy', null, true), 'Salin jejak');
        const kartu = h('div', { class: 'card sorot' }, h('h2', null, 'Kasus selesai'), h('p', { class: 'small muted' }, n + ' langkah · ' + nUlang + ' percobaan ulang · ' + nPetunjuk + ' petunjuk dipakai'), h('p', null, k.kesimpulan), UKP.c.stempel('SELESAI', 'ok', { besar: true, diraih: !!dariPeriksa }),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => opsi.onSelesai && opsi.onSelesai() }, 'Lanjut'), adaKalkulator ? h('button', { type: 'button', class: 'btn', onclick: keKalkulator }, 'Coba angka lain di kalkulator') : null, btnSalin, h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { aktif = 0; status = {}; petunjukN = {}; isian = {}; percobaan = {}; simpanProgres(k.id, null); gambar(true); } }, 'Ulangi kasus')));
        stepper.appendChild(h('li', { class: 'langkah-akhir' }, kartu)); target = kartu.querySelector('h2');
      }
      if (wrap.isConnected && target) {
        UKP.fokus(target);
        // langkah aktif digulir ke tengah layar setelah langkah sebelumnya dibukukan
        if (dariPeriksa) { const li = target.closest('li'); if (li) try { li.scrollIntoView({ block: 'nearest', behavior: UKP.gulirHalus ? UKP.gulirHalus() : 'auto' }); } catch (e) {} }
      }
      return target;
    }
    const targetAwal = gambar(false);
    if (dariKalkulator) {
      simpan(); // penanda kembali dipakai sekali
      if (targetAwal) {
        if (UKP.fokusNanti) UKP.fokusNanti(targetAwal); else requestAnimationFrame(() => { if (targetAwal.isConnected) UKP.fokus(targetAwal); });
        requestAnimationFrame(() => { if (targetAwal.isConnected && targetAwal.scrollIntoView) targetAwal.scrollIntoView({ block: 'center' }); });
      }
    }
    return wrap;
  };

  // ================= STRATEGI PG =================
  UKP.views.strategi = function () {
    const page = h('div', { class: 'page' }); const list = (UKP.ref && UKP.ref.strategiPG) || [];
    page.appendChild(kop({ judul: 'Strategi pilihan ganda', lead: 'Teknik lintas kelompok untuk ujian berbasis komputer: eliminasi, menandai ragu, alokasi waktu per kelompok, dan membaca kata kualifikasi.' }));
    if (list.length) page.appendChild(sect({ judul: 'Teknik menjawab', meta: list.length + ' teknik', isi: h('div', { class: 'card-grid' }, list.map(x => h('div', { class: 'card' }, h('h3', { class: 'card-title' }, x.judul), h('p', { class: 'small' }, x.isi)))) }));
    page.appendChild(h('div', { class: 'card sorot' }, h('h2', { class: 'card-title' }, 'Latih soal jebakan "kecuali"'), h('p', { class: 'small muted' }, 'Hanya soal dengan kata kualifikasi (kecuali, bukan, paling lama, paling sedikit). Kata disorot bila pengaturan sorot aktif.'), h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-primary', onclick: () => UKP.go('latih', { kecuali: true, n: 10, mulai: true }) }, 'Latih 10 soal "kecuali"'), h('button', { class: 'btn', onclick: () => UKP.go('latih', { tempo: true, n: 10, mulai: true }) }, 'Latih 10 soal dengan waktu ketat'))));
    return page;
  };
})(typeof window !== 'undefined' ? window : globalThis);
