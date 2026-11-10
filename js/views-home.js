/* Pelatih UKP — tampilan: Mulai (onboarding), Hari Ini (beranda), Sesi (runner), Bukti Sesi */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten; const L = UKP.belajar;

  // ---------- cadangan kontrak (bila core.js versi lama) — tidak menimpa implementasi core ----------
  if (!UKP.fokus) UKP.fokus = el => { if (!el) return; if (el.tabIndex < 0 && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) el.tabIndex = -1; try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); } };
  if (!UKP.c.tabelWrap) UKP.c.tabelWrap = (label, tabel) => h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': label }, tabel);
  if (!UKP.simulasiBerjalan) UKP.simulasiBerjalan = () => { const a = UKP.store.get().simulasiAktif; return !!(a && !a.selesai && (a.tanpaWaktu || a.akhir > Date.now())); };
  if (!UKP.store.flush) UKP.store.flush = () => UKP.store.save();
  if (!U.hariDari) U.hariDari = ts => { const d = new Date(ts); if (d.getHours() < 3) d.setDate(d.getDate() - 1); return U.iso(d); };
  if (!U.jamBelajar) U.jamBelajar = () => { const j = new Date().getHours(); return j < 3 ? j + 24 : j; };
  // fokus setelah elemen terpasang di dokumen (render pertama dipasang oleh router sesudah view kembali)
  UKP.fokusNanti = el => { if (!el) return; if (el.isConnected) UKP.fokus(el); else requestAnimationFrame(() => { if (el.isConnected) UKP.fokus(el); }); };
  UKP.gulirHalus = () => (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || document.documentElement.dataset.gerak === 'kurang' ? 'auto' : 'smooth';
  const SAMPEL_MIN = 8;
  // cincin penguasaan: tanpa angka palsu bila sampel < 8 soal
  UKP.c.ringSkor = function (skor, n, label, opsi) {
    opsi = opsi || {};
    if ((n || 0) < SAMPEL_MIN) return UKP.c.ring(0, Object.assign({}, opsi, { kosong: true, teks: '–', label: label + ': belum cukup data, butuh ' + (SAMPEL_MIN - (n || 0)) + ' soal lagi' }));
    return UKP.c.ring(skor, Object.assign({}, opsi, { label }));
  };
  // grid Kartu Hadir satu bulan (dipakai Bukti Sesi dan Kemajuan). Sel hari = tombol (fokus berpindah dengan panah,
  // ±1 hari / ±7 hari, Home/End); memilih hari menampilkan ringkasannya di bawah grid (aria-live). Hari ini dipilih bawaan.
  UKP.c.hadirBulan = function (bulanIso) {
    const s = UKP.store.get(); const [y, m1] = bulanIso.split('-').map(Number); const m = m1 - 1;
    const hariDlm = new Date(y, m + 1, 0).getDate(); const awal = (new Date(y, m, 1).getDay() + 6) % 7; const hariIni = U.hariIni();
    const ringkas = h('p', { class: 'small hadir-ringkas', 'aria-live': 'polite' });
    const tombol = [];
    function teksHari(iso) {
      const st = s.hadir[iso]; const tglT = new Date(iso + 'T12:00:00').toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });
      if (iso > hariIni) return tglT + ' · belum terjadi.';
      const sesiH = s.sesi.filter(x => x && x.tgl === iso).length; let n = 0, b = 0;
      for (const j of s.jawaban) { if (!j || typeof j.pada !== 'number' || kosongSim(j) || U.hariDari(j.pada) !== iso) continue; n++; if (j.benar) b++; }
      const soalT = n ? n + ' soal, ' + b + ' benar' : null;
      if (!st) return [tglT, 'tidak ada catatan', soalT].filter(Boolean).join(' · ') + '.';
      return [tglT, st.status, st.status === 'HADIR' ? Math.round(st.menit || 0) + ' mnt' : null, sesiH ? sesiH + ' sesi' : null, soalT].filter(Boolean).join(' · ') + '.';
    }
    function pilihHari(btn, fokus) { tombol.forEach(x => { const on = x === btn; x.setAttribute('aria-pressed', String(on)); x.tabIndex = on ? 0 : -1; }); ringkas.textContent = teksHari(btn.dataset.tgl); if (fokus) btn.focus(); }
    const sel = []; for (let i = 0; i < awal; i++) sel.push(h('div', { class: 'sel', 'aria-hidden': 'true', style: { visibility: 'hidden' } }));
    for (let d = 1; d <= hariDlm; d++) {
      const iso = U.iso(new Date(y, m, d)); const st = s.hadir[iso];
      const b = h('button', { type: 'button', class: 'sel' + (iso === hariIni ? ' hari-ini' : ''), 'data-status': st ? st.status : null, 'data-tgl': iso, 'aria-pressed': 'false', tabindex: '-1', 'aria-label': UKP.fmt.tanggal(iso) + (st ? ', ' + st.status : '') + (iso === hariIni ? ', hari ini' : ''), onclick: e => pilihHari(e.currentTarget, false) },
        h('span', { 'aria-hidden': 'true' }, d), h('span', { class: 'st', 'aria-hidden': 'true' }, st ? st.status : ''));
      tombol.push(b); sel.push(b);
    }
    const grid = h('div', { class: 'hadir-grid', role: 'group', 'aria-label': 'Kartu Hadir ' + UKP.fmt.bulanTahun(bulanIso) + '. Panah memilih hari.' }, ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(d => h('div', { class: 'tiny muted', 'aria-hidden': 'true', style: { textAlign: 'center' } }, d)), sel);
    grid.addEventListener('keydown', e => {
      const i = tombol.indexOf(document.activeElement); if (i < 0) return;
      const lompat = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 }[e.key]; let j = null;
      if (lompat) j = U.clamp(i + lompat, 0, tombol.length - 1); else if (e.key === 'Home') j = 0; else if (e.key === 'End') j = tombol.length - 1; else return;
      e.preventDefault(); pilihHari(tombol[j], true);
    });
    const awalPilih = tombol.find(b => b.dataset.tgl === hariIni) || tombol[0];
    if (awalPilih) pilihHari(awalPilih, false);
    return h('div', { class: 'hadir-bulan stack-sm' }, grid, ringkas);
  };
  UKP.bulanIni = () => U.hariIni().slice(0, 7);
  UKP.fmtMenit = m => m < 1 ? Math.round(m * 60) + ' dtk' : UKP.fmt.angka(Math.round(m * 10) / 10) + ' mnt';

  // ---------- V6: ikon, gerak, kop halaman, bar progres, strip hadir, gaya halaman ----------
  function ikon(n, c, k) { return UKP.viz && UKP.viz.ikon ? UKP.viz.ikon(n, c, k) : UKP.icon(n, c); }
  const gerak = () => (UKP.viz && UKP.viz.gerak ? UKP.viz.gerak() : UKP.gulirHalus() === 'smooth');
  // kop halaman V6 (DESAIN-V6 C.2) lewat UKP.c.kop({ … }) bila core.js mendukungnya; cadangan: markup yang sama
  function kopHalaman(o) {
    try { const el = UKP.c.kop(o); const j = el && el.querySelector ? el.querySelector('h1') : null; if (j && j.textContent === String(o.judul)) return el; } catch (e) {}
    const cr = Array.isArray(o.crumbs) && o.crumbs.length ? h('nav', { class: 'crumb', 'aria-label': 'Remah roti' }, o.crumbs.map((c, i) => [i ? h('span', { 'aria-hidden': 'true' }, '›') : null, c.view ? UKP.link(c.teks, c.view, c.params) : h('span', null, c.teks)])) : null;
    const teks = h('div', { class: 'page-head-teks' }, cr, o.eyebrow ? h('p', { class: 'eyebrow' }, o.eyebrow) : null, h('h1', { tabindex: '-1' }, o.judul), o.lead ? h('p', { class: 'lead' }, o.lead) : null, o.meta ? h('div', { class: 'page-meta' }, o.meta) : null);
    return h('header', { class: 'page-head' }, teks, o.aksi ? h('div', { class: 'page-actions' }, o.aksi) : null);
  }
  UKP.c.kopHalaman = kopHalaman;
  // bar progres V6: lebar isian lewat --p sehingga CSS menganimasikannya dari 0 (UKP.c.progress bila tersedia)
  function barProgres(p, o) {
    o = o || {}; p = U.clamp(Number(p) || 0, 0, 100); let el = null;
    if (typeof UKP.c.progress === 'function') { try { el = UKP.c.progress({ nilai: p, ukuran: o.ukuran, nada: o.nada, ariaLabel: o.ariaLabel, valuetext: o.valuetext, kelas: o.kelas }); } catch (e) { el = null; } }
    if (!el) el = h('div', { class: 'progress-line' + (o.ukuran ? ' ' + o.ukuran : '') + (o.kelas ? ' ' + o.kelas : ''), 'data-nada': o.nada || null, role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(Math.round(p)), 'aria-label': o.ariaLabel || 'Progres', 'aria-valuetext': o.valuetext || null }, h('span', { style: '--p:' + Math.round(p * 10) / 10 }));
    if (o.ariaHidden) { el.setAttribute('aria-hidden', 'true'); el.removeAttribute('role'); el.removeAttribute('aria-label'); }
    return el;
  }
  UKP.c.barProgres = barProgres;
  // strip Kartu Hadir 7 hari (Hari Ini, Bukti Sesi); opsi.cap: sel hari ini "dicap" stempel mini HADIR (Momen 1)
  // opsi.ringkas (Hari Ini, §3.3): tile netral; hari hadir cukup bertitik, teks status hanya untuk pengecualian (IZIN/CUTI)
  function stripHadir(opsi) {
    opsi = opsi || {}; const hariIni = U.hariIni();
    return h('div', { class: 'hadir-strip' + (opsi.ringkas ? ' ringkas' : ''), role: 'group', 'aria-label': 'Kehadiran 7 hari terakhir' }, UKP.hadir.tujuhHari().map(d => {
      const tg = new Date(d.tgl + 'T00:00:00'); const st = d.st ? d.st.status : '';
      let stEl = opsi.ringkas && (st === 'HADIR' || !st) ? h('span', { class: 'titik-hadir', 'aria-hidden': 'true' }) : h('span', { class: 'st' }, st);
      if (opsi.cap && d.tgl === hariIni && st === 'HADIR') { stEl = UKP.c.stempel('HADIR', 'ok', { diraih: gerak() }); stEl.classList.add('mini'); if (gerak()) { stEl.style.animationDelay = '280ms'; stEl.style.animationFillMode = 'both'; } }
      return h('div', { class: 'sel' + (d.tgl === hariIni ? ' hari-ini' : ''), 'data-status': st || null, title: UKP.fmt.tanggal(d.tgl) + (st ? ' · ' + st.toLowerCase() : opsi.ringkas && d.tgl < hariIni ? ' · tidak hadir' : ''), 'aria-label': opsi.ringkas ? UKP.fmt.tanggal(d.tgl) + ': ' + (st ? st.toLowerCase() : d.tgl < hariIni ? 'tidak hadir' : 'belum tercatat') : null }, h('span', null, tg.toLocaleDateString('id-ID', { weekday: 'short' }).slice(0, 3)), h('span', { class: 'tgl' }, tg.getDate()), stEl);
    }));
  }
  if (UKP.viz && UKP.viz.gaya) UKP.viz.gaya('ukp-home-v6', ''
    + '.card.kesiapan-kop{display:flex;align-items:center;gap:var(--s-3,12px);padding:var(--s-2,8px) var(--s-4,16px) var(--s-2,8px) var(--s-2,8px)}'
    + ':where(.kesiapan-kop .kesiapan-teks){display:grid;gap:2px;min-width:0}:where(.kesiapan-kop .card-link){font-weight:var(--fw-semi,600)}'
    + ':where(.kesiapan-awal){flex:none;min-width:72px;display:grid;justify-items:center;text-align:center;font-family:var(--font-mono);font-size:var(--fs-h2,1.25rem);font-weight:var(--fw-display,700);line-height:1.2}'
    + ':where(.kesiapan-awal .satuan){font-family:var(--font-ui);font-size:var(--fs-meta,.8125rem);font-weight:var(--fw-med,500);color:var(--muted)}'
    + ':where(.kop-minggu){display:grid;gap:6px;width:min(100%,320px)}.page-meta > .kop-minggu{flex:0 0 100%;width:100%;grid-template-columns:minmax(0,320px)}'
    + ':where(.sesi-langkah > li){display:flex;align-items:baseline;gap:var(--s-3,12px)}'
    + ':where(.sesi-langkah .kode){flex:none;width:2rem;font-family:var(--font-mono);font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.sesi-langkah .judul){flex:1 1 auto;min-width:0;font-size:var(--fs-ui,.9375rem)}'
    + ':where(.sesi-langkah .menit){flex:none;font-family:var(--font-mono);font-size:var(--fs-caption,.8125rem);color:var(--muted);white-space:nowrap}'
    + '@media (max-width:599px){.kartu-sesi .mulai-sesi.btn-lg{width:100%}}'
    + ':where(.sesi-tambah){flex-wrap:wrap;gap:var(--s-2,8px) var(--s-3,12px);align-items:center}'
    + ':where(.beranda .row-link .row-title){flex:1 1 auto}'
    + ':where(.hadir-grid button.sel){padding:0;font:inherit;cursor:pointer}'
    + '.hadir-grid button.sel:hover{border-color:var(--line-strong)}.hadir-grid button.sel[aria-pressed="true"]{box-shadow:inset 0 0 0 2px var(--ink-faint)}'
    + ':where(.hadir-ringkas){margin:0;min-height:1.5em}'
    + ':where(.stempel.mini){font-size:var(--fs-micro,.6875rem);border-width:1px;padding:1px 4px}'
    + ':where(.judul-status){display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px}:where(.prosa){max-width:68ch}:where(ul.prosa){display:grid;gap:var(--s-2,8px)}'
    + ':where(.angka-tertutup){color:var(--ink-faint);letter-spacing:.1em}'
    + ':where(.peta-awal .baris-peta){display:flex;align-items:center;gap:var(--s-3,12px)}:where(.peta-awal .nama){flex:1 1 auto;min-width:0;font-size:var(--fs-small,.875rem)}'
    + ':where(.peta-awal .kode){width:2.5rem;flex:none;color:var(--muted);font-size:var(--fs-caption,.8125rem)}:where(.peta-awal .num){flex:none;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.peta-awal .titik){display:inline-flex;gap:6px;flex:none}:where(.peta-awal .titik i){display:block;width:10px;height:10px;border-radius:50%;border:2px solid var(--line-strong);background:var(--surface)}'
    + ':where(.peta-awal .titik i[data-benar]){border-color:var(--primary-fill,var(--primary));background:var(--primary-fill,var(--primary))}'
    + '@keyframes ukp-titik{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}'
    + '@media (prefers-reduced-motion:no-preference){:where(:root:not([data-gerak="kurang"]) .peta-awal .titik i){animation:ukp-titik var(--dur-sedang,160ms) var(--ease-keluar,ease-out) both;animation-delay:calc(var(--i,0) * 60ms)}}'
    + ':where(.bukti .kuitansi){margin:0}:where(ol.list-rows){list-style:none;margin:0;padding:0}:where(.hadir-bulan){max-width:560px}'
    + ':where(.kartu-sesi .card-head > .seg){flex:none}');



  // ---------- grafik: pakai UKP.viz bila ada (js/viz.js), selain itu cadangan teks ----------
  UKP.c.vizAtau = function (nama, cfg, cadangan) {
    const v = UKP.viz;
    if (v && typeof v[nama] === 'function') {
      try {
        const r = v[nama](cfg);
        if (r && typeof r === 'object' && r.nodeType) return r;
        if (typeof r === 'string' && r.trim()) return h('div', { html: r });
      } catch (e) { console.error(e); }
    }
    return typeof cadangan === 'function' ? cadangan() : null;
  };
  const kosongSim = j => j.konteks === 'simulasi' && (!j.opsi || j.opsi === '-' || j.opsi === 'kosong');
  // judul berisi garis miring ("PPh Pemotongan/Pemungutan") boleh pecah tepat setelah "/" (<wbr>), bukan di tengah kata
  const judulPecah = teks => String(teks == null ? '' : teks).split('/').flatMap((b, i, a) => i < a.length - 1 ? [b + '/', h('wbr')] : [b]);
  // jumlah soal dan benar per hari belajar (batas 03.00) untuk nHari terakhir, urut lama → baru
  UKP.aktivitasHarian = function (nHari) {
    const s = UKP.store.get(); const hariIni = U.hariIni(); const awal = U.tambahHari(hariIni, -(nHari - 1));
    const out = []; const peta = {};
    for (let i = 0; i < nHari; i++) { const t = U.tambahHari(awal, i); const d = { tgl: t, n: 0, benar: 0, menit: 0 }; const st = s.hadir[t]; if (st && st.status === 'HADIR') d.menit = Math.round(Number(st.menit) || 0); peta[t] = d; out.push(d); }
    const batas = new Date(awal + 'T00:00:00').getTime() - 86400000; // longgar sehari untuk batas 03.00
    for (const j of s.jawaban) {
      if (!j || typeof j.pada !== 'number' || j.pada < batas || kosongSim(j)) continue;
      const d = peta[U.hariDari(j.pada)]; if (!d) continue;
      d.n++; if (j.benar) d.benar++;
    }
    return out;
  };
  const HARI_PENDEK = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const labelHari = (iso, gaya) => { const d = new Date(iso + 'T00:00:00'); return gaya === 'hari' ? HARI_PENDEK[d.getDay()] : String(d.getDate()); };
  // rentang tanggal ringkas: "19–25 Okt", "27 Okt – 2 Nov" (tahun ditambahkan bila bukan tahun ini)
  const rentangPendek = (a, b) => {
    const da = new Date(String(a) + 'T00:00:00'), db = new Date(String(b || a) + 'T00:00:00'); if (isNaN(da) || isNaN(db)) return '';
    const bln = d => d.toLocaleDateString('id-ID', { month: 'short' });
    const teks = String(a) === String(b || a) ? db.getDate() + ' ' + bln(db)
      : da.getMonth() === db.getMonth() && da.getFullYear() === db.getFullYear() ? da.getDate() + '–' + db.getDate() + ' ' + bln(db)
        : da.getDate() + ' ' + bln(da) + ' – ' + db.getDate() + ' ' + bln(db);
    return teks + (String(db.getFullYear()) !== U.hariIni().slice(0, 4) ? ' ' + db.getFullYear() : '');
  };
  // tile stat dengan sparkline (UKP.viz.statTile: delta angka + satuanDelta + deltaLabel, sub, hitung naik, view → tile tautan); cadangan: .stat biasa
  const teksDelta = cfg => { if (cfg.delta == null || cfg.delta === '') return null; const d = Number(cfg.delta); if (!isFinite(d)) return String(cfg.delta); return (d > 0 ? '+' : d < 0 ? '−' : '±') + Math.abs(d) + (cfg.satuanDelta || '') + (cfg.deltaLabel ? ' ' + cfg.deltaLabel : ''); };
  function tileStat(cfg) {
    return UKP.c.vizAtau('statTile', cfg, () => h('div', { class: 'stat' }, h('span', { class: 'label' }, cfg.label), h('span', { class: 'nilai' }, cfg.nilai), teksDelta(cfg) ? h('span', { class: 'tiny muted' }, teksDelta(cfg)) : null, cfg.sub ? h('span', { class: 'tiny muted' }, cfg.sub) : null));
  }
  // grafik kolom; cadangan: ringkasan teks satu baris
  function grafikKolom(data, judul, sorot, satuan) {
    return UKP.c.vizAtau('kolom', { data, judul, sorot, satuan, kolomLabel: 'Tanggal', kolomNilai: satuan === 'menit' ? 'Menit' : 'Soal' }, () => {
      const total = data.reduce((a, d) => a + d.nilai, 0); const aktif = data.filter(d => d.nilai > 0).length;
      return h('p', { class: 'small muted' }, judul + ': ' + UKP.fmt.angka(total) + ' ' + satuan + ' dalam ' + data.length + ' hari, ' + aktif + ' hari aktif.');
    });
  }

  // ---------- v7: komponen Kontrak v7 (P1) dengan cadangan polos bila core.js/learn.js belum menyediakannya ----------
  // Nama kelas sama persis dengan Kontrak v7 §4 sehingga CSS P1 langsung berlaku; cadangan tidak menimpa UKP.c.
  const sep = () => h('span', { class: 'sep', 'aria-hidden': 'true' }, '·');
  // gabung potongan teks dengan pemisah .sep: ["17 mnt", "10 soal"] → 17 mnt · 10 soal
  const gabungMeta = bagian => bagian.filter(x => x != null && x !== '').flatMap((x, i) => i ? [sep(), x] : [x]);
  // K-02 kepala kartu: .card-head > .card-head-teks (> h2.card-title + .card-meta) + .card-head-kanan
  function kepalaKartu(o) {
    return h('div', { class: 'card-head' },
      h('div', { class: 'card-head-teks' }, h(o.tag || 'h2', { class: 'card-title', id: o.id || null }, o.ikon || null, o.judul),
        o.meta != null && o.meta !== '' ? h('p', { class: 'card-meta' }, Array.isArray(o.meta) ? gabungMeta(o.meta) : o.meta) : null),
      o.kanan ? h('div', { class: 'card-head-kanan' }, o.kanan) : null);
  }
  // K-07 langkah berikutnya · K-05 bar mini dan baris skor · K-06 ringkasan status · K-18 status kelompok (core.js/learn.js)
  const langkahBerikut = (item, o) => UKP.c.langkahBerikut(item, o);
  const barMini = (p, o) => UKP.c.barMini(p, o);
  const barisSkor = o => UKP.c.barisSkor(o);
  const ringkasStatus = (teks, aksi) => UKP.c.ringkasStatus(teks, aksi);
  const TEKS_DINILAI = () => L.TEKS_DINILAI;
  const statusKelompok = kode => L.statusKelompok(kode);
  // nama kelompok ringkas untuk kalimat: "KUP, PPSP, dan Pengadilan Pajak" → "KUP"; "PPN dan SPT Masa PPN" → "PPN"
  const namaPendek = kode => String(K.namaKelompok(kode)).split(',')[0].split(' dan ')[0].trim();
  // K-08 mode fokus (UKP.mode.fokus tidak menimpa mode ujian/sesi)
  const modeFokus = on => UKP.mode.fokus(on);
  // angka hari ini: "20 hari" → .angka "20" + .satuan "hari"; teks bukan angka ("Akhir bulan") memakai sans
  function nilaiAngka(teks) {
    const t = String(teks == null ? '' : teks).trim(); const m = t.match(/^([≤≥<>±+−-]?(?:Rp\s?)?\d[\d.,/]*\s?%?)(?:\s+(.+))?$/);
    if (m) return h('p', { class: 'angka-baris' }, h('span', { class: 'angka' }, m[1]), m[2] ? h('span', { class: 'satuan' }, m[2]) : null);
    return h('p', { class: 'angka-baris' }, h('span', { class: 'angka-teks' }, t));
  }

  // ================= ONBOARDING =================
  UKP.views.mulai = function () {
    const s = UKP.store.get(); const p = s.profil;
    // nama (wajib, 2–40 karakter): sapaan dan nama di dasbor tim; bawaan dari gerbang akses tim bila sudah masuk
    const namaAkses = (() => { try { const x = UKP.akses && UKP.akses.sesi && UKP.akses.sesi(); return x && x.nama || ''; } catch (e) { return ''; } })();
    const draft = { nama: p.nama || namaAkses || '', latar: p.latar, tingkat: p.tingkat, status: p.status, tanggalUjian: p.tanggalUjian, menitHariKerja: p.menitHariKerja, menitAkhirPekan: p.menitAkhirPekan, perangkat: p.perangkat };
    const namaBersih = () => String(draft.nama || '').replace(/\s+/g, ' ').trim();
    // langkah pertama tidak dapat dilewati tanpa nama yang sah
    function cekNama() {
      const v = namaBersih(); if (v.length >= 2 && v.length <= 40) { draft.nama = v; return true; }
      const inp = page.querySelector('#ob-nama'), g = page.querySelector('#ob-nama-galat');
      if (g) { g.textContent = 'Isi nama Anda (2–40 karakter).'; g.hidden = false; }
      if (inp) { inp.setAttribute('aria-invalid', 'true'); inp.focus(); }
      return false;
    }
    let langkah = 0; const total = 5;
    // mode fokus (P2-09): tanpa navigasi situs selama lima langkah; penjaga rute app.js mematikannya di mount berikutnya
    modeFokus(true);
    const page = h('div', { class: 'page onboarding' });
    function pilih(key, val, label, sub) { return h('button', { type: 'button', 'aria-pressed': String(draft[key] === val), onclick: e => { draft[key] = val; e.currentTarget.parentElement.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget))); } }, h('span', null, label), sub ? h('small', null, sub) : null); }
    function saran() {
      const jamMinggu = (draft.menitHariKerja * 5 + draft.menitAkhirPekan * 2) / 60;
      const keb = UKP.rencana.kebutuhanJam[draft.tingkat] || [70, 110]; const minggu = [Math.ceil(keb[0] / jamMinggu), Math.ceil(keb[1] / jamMinggu)];
      let teks = 'Dengan ±' + U.clamp(Math.round(jamMinggu), 1, 99) + ' jam/minggu, tingkat ' + draft.tingkat + ' butuh sekitar ' + minggu[0] + '–' + minggu[1] + ' minggu.';
      if (draft.tingkat !== 'A' && draft.latar !== 'akuntansi') teks += ' Latar non-akuntansi: pertimbangkan A dulu, lalu B setelah SKK A — atau tetap ' + draft.tingkat + ' dengan tanggal ujian yang lebih jauh.';
      if (draft.tanggalUjian) { const hari = U.selisihHari(U.hariIni(), draft.tanggalUjian); if (hari > 0) { const jam = Math.round(((draft.menitHariKerja * 5 + draft.menitAkhirPekan * 2) / 7) * hari / 60); teks += ' Tersedia ±' + jam + ' jam sampai ' + UKP.fmt.tanggal(draft.tanggalUjian) + '; perlu ' + keb[0] + '–' + keb[1] + ' jam' + (jam < keb[0] * .8 ? ' → rencana padat: tambah menit, geser periode, atau fokus kelemahan.' : '.'); } }
      return teks;
    }
    function render() {
      page.innerHTML = '';
      // kepala: posisi langkah + stepper; kanan atas "Lewati, atur nanti" (langkah 5 punya "Lewati diagnosis" sendiri)
      const prog = h('div', { class: 'ob-kepala' }, h('div', { class: 'stack-sm' }, h('p', { class: 'eyebrow' }, 'Langkah ' + (langkah + 1) + ' dari ' + total),
        h('div', { class: 'stepper-h', 'aria-hidden': 'true' }, Array.from({ length: total }, (_, i) => h('span', { class: i < langkah ? 'on' : i === langkah ? 'kini' : null })))),
        langkah < total - 1 ? h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: () => { if (cekNama()) selesai(true); } }, 'Lewati, atur nanti') : null);
      let isi;
      if (langkah === 0) isi = h('div', { class: 'stack' },
        h('h1', null, 'Selamat datang di Pelatih UKP'),
        h('p', { class: 'lead' }, 'Lima pertanyaan singkat (± 1 menit) untuk menyusun target dan menit belajar harian Anda. Semua bisa diubah di Pengaturan.'),
        h('div', { class: 'field' }, h('label', { for: 'ob-nama' }, 'Nama Anda'),
          h('input', { class: 'input', id: 'ob-nama', type: 'text', autocomplete: 'name', required: true, minlength: 2, maxlength: 40, value: draft.nama, 'aria-describedby': 'ob-nama-bantu ob-nama-galat',
            oninput: e => { draft.nama = e.target.value; e.target.removeAttribute('aria-invalid'); const g = page.querySelector('#ob-nama-galat'); if (g) g.hidden = true; },
            onkeydown: e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); const lanjut = page.querySelector('.ob-aksi .btn-primary'); if (lanjut) lanjut.click(); } } }),
          h('span', { class: 'bantu', id: 'ob-nama-bantu' }, 'Wajib, 2–40 karakter. Dipakai untuk sapaan dan, bila Anda belajar bersama tim, tampil di dasbor pemimpin tim.'),
          h('p', { class: 'galat', id: 'ob-nama-galat', role: 'alert', hidden: true })),
        h('div', { class: 'field' }, h('span', { class: 'label', id: 'ob-lbl-latar' }, 'Latar belakang Anda'), h('div', { class: 'ob-opsi', 'aria-labelledby': 'ob-lbl-latar' },
          pilih('latar', 'akuntansi', 'Akuntansi / pajak', 'Lulusan akuntansi, fiskal, atau sudah bekerja di bidang pajak'),
          pilih('latar', 'non', 'Non-akuntansi', 'Belajar dari dasar; rencana diberi waktu lebih longgar'))));
      else if (langkah === 1) isi = h('div', { class: 'stack' },
        h('h1', null, 'Tingkat yang dituju'),
        h('p', { class: 'lead' }, 'UKP tidak berjenjang (PMK 55/2026): Anda boleh langsung memilih B atau C, tetapi materinya kumulatif. Tingkat B diuji materi A + B; tingkat C diuji A + B + C.'),
        h('div', { class: 'ob-opsi' },
          pilih('tingkat', 'A', 'Tingkat A — 5 kelompok materi', 'PPh OP, KUP/PPSP/Pengadilan Pajak, PPh Pot/Put, PPN, Bea Meterai · izin: WP orang pribadi'),
          pilih('tingkat', 'B', 'Tingkat B — 8 kelompok materi', '+ PPh Badan, Akuntansi Perpajakan, PBB-P5L · izin: WP OP dan badan'),
          pilih('tingkat', 'C', 'Tingkat C — 10 kelompok materi', '+ PPh Badan transaksi internasional, Pajak Internasional · izin: semua WP')));
      else if (langkah === 2) isi = h('div', { class: 'stack' },
        h('h1', null, 'Status Anda'),
        h('div', { class: 'ob-opsi' },
          pilih('status', 'baru', 'Peserta baru', 'Belum pernah ikut USKP/UKP'),
          pilih('status', 'mengulang', 'Mengulang', 'Pernah tidak lulus; rencana memakai preset Fokus 60% kelompok lemah + Pemeliharaan 40%'),
          pilih('status', 'uskp', 'Saya dari USKP', 'Nilai USKP per mata ujian hangus di UKP (komprehensif). Peta mata ujian lama → kode UKP tersedia di Info Ujian.')));
      else if (langkah === 3) {
        // tanggal berformat Indonesia hh/bb/tttt (K-12); cadangan: input date bawaan peramban
        const galatTgl = h('p', { class: 'galat', id: 'ob-tgl-galat', role: 'alert', hidden: true });
        const ubahTgl = iso => { draft.tanggalUjian = iso || null; galatTgl.hidden = true; galatTgl.textContent = ''; sar.textContent = saran(); };
        const inTgl = typeof UKP.c.inputTanggal === 'function'
          ? UKP.c.inputTanggal({ id: 'ob-tgl', nilai: draft.tanggalUjian || null, min: U.hariIni(), describedby: 'ob-tgl-bantu ob-tgl-galat', onUbah: ubahTgl, onGalat: pesan => { galatTgl.textContent = pesan; galatTgl.hidden = !pesan; } })
          : h('input', { class: 'input', type: 'date', id: 'ob-tgl', value: draft.tanggalUjian || '', min: U.hariIni(), 'aria-describedby': 'ob-tgl-bantu', oninput: e => ubahTgl(e.target.value) });
        const inHK = h('input', { class: 'input mono', type: 'number', id: 'ob-hk', inputmode: 'numeric', min: 5, max: 240, value: draft.menitHariKerja, oninput: e => { draft.menitHariKerja = U.clamp(Number(e.target.value) || 15, 5, 240); sar.textContent = saran(); } });
        const inAP = h('input', { class: 'input mono', type: 'number', id: 'ob-ap', inputmode: 'numeric', min: 0, max: 480, value: draft.menitAkhirPekan, oninput: e => { draft.menitAkhirPekan = U.clamp(Number(e.target.value) || 0, 0, 480); sar.textContent = saran(); } });
        const sar = h('p', { class: 'small' }, saran());
        isi = h('div', { class: 'stack' },
          h('h1', null, 'Tanggal ujian dan menit belajar'),
          h('p', { class: 'lead' }, 'Belum punya tanggal? Kosongkan; rencana memakai mode kesiapan tanpa tanggal. Jadwal periode UKP ada di Info Ujian.'),
          h('div', { class: 'form-grid' },
            h('div', { class: 'field' }, h('label', { for: 'ob-tgl' }, 'Tanggal ujian (opsional)'), inTgl, h('span', { class: 'bantu', id: 'ob-tgl-bantu' }, 'Hari/bulan/tahun, misalnya 15/12/2026. Kosongkan bila belum ada.'), galatTgl),
            h('div', { class: 'form-grid dua' },
              h('div', { class: 'field' }, h('label', { for: 'ob-hk' }, 'Menit per hari kerja'), inHK, h('span', { class: 'bantu' }, 'Kilat 5 menit adalah batas bawah.')),
              h('div', { class: 'field' }, h('label', { for: 'ob-ap' }, 'Menit per hari akhir pekan'), inAP))),
          h('div', { class: 'banner', 'data-tone': 'info' }, sar));
      } else isi = h('div', { class: 'stack' },
        h('h1', null, 'Perangkat ujian'),
        h('p', { class: 'lead' }, 'UKP dilaksanakan daring dengan Safe Exam Browser dan pengawasan Zoom. Laptop kantor sering dikunci kebijakan IT, jadi pastikan ada laptop pribadi yang memenuhi spesifikasi BPPK paling lambat 30 hari sebelum ujian.'),
        h('div', { class: 'ob-opsi' },
          pilih('perangkat', 'ya', 'Sudah ada laptop pribadi yang memadai'),
          pilih('perangkat', 'tidak', 'Belum ada', 'Rencana menambahkan tugas pinjam/sewa laptop di H-30'),
          pilih('perangkat', 'tahu', 'Belum tahu', 'Cek spesifikasi di Info Ujian › Cek perangkat')),
        h('p', { class: 'meta' }, 'Diagnosis singkat (3 soal per kelompok) bisa dimulai kapan saja dari Kemajuan.'));
      // aksi lengket (P2-09): Kembali (hantu) di kiri, satu primer Lanjut selebar layar di HP
      const nav = h('div', { class: 'sticky-actions ob-aksi' },
        langkah > 0 ? h('button', { type: 'button', class: 'btn btn-ghost', onclick: () => { langkah--; render(); } }, 'Kembali') : null,
        h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block', onclick: () => { if (langkah === 0 && !cekNama()) return; if (langkah < total - 1) { langkah++; render(); } else selesai(false); } }, langkah < total - 1 ? 'Lanjut' : 'Selesai'));
      const h1 = isi.querySelector('h1'); if (h1) h1.id = 'ob-judul';
      isi.querySelectorAll('.ob-opsi').forEach(o => { o.setAttribute('role', 'group'); if (!o.hasAttribute('aria-labelledby')) o.setAttribute('aria-labelledby', 'ob-judul'); });
      const tombolOpsi = Array.from(isi.querySelectorAll('.ob-opsi button'));
      const petunjuk = tombolOpsi.length && window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches ? h('p', { class: 'petunjuk-kbd', 'aria-hidden': 'true' }, h('span', null, h('kbd', null, '1'), '–', h('kbd', null, String(Math.min(9, tombolOpsi.length))), ' pilih'), h('span', null, h('kbd', null, 'Enter'), ' lanjut')) : null;
      page.append(prog, isi, petunjuk, nav);
      // langkah pertama tanpa nama: fokus ke kolom nama; selain itu ke judul
      UKP.fokusNanti(langkah === 0 && !namaBersih() ? isi.querySelector('#ob-nama') : h1);
    }
    // pintasan onboarding (desktop): angka memilih opsi, Enter = Lanjut (bukan saat mengetik atau fokus di tombol lain).
    // Enter pada tombol opsi (.ob-opsi, mis. setelah pintasan angka memindah fokus ke sana) memilih opsi itu lalu Lanjut;
    // Spasi tetap hanya memilih
    page.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      const t = e.target; if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const opsiBtn = Array.from(page.querySelectorAll('.ob-opsi button'));
      if (/^[1-9]$/.test(e.key) && opsiBtn[Number(e.key) - 1]) { e.preventDefault(); opsiBtn[Number(e.key) - 1].click(); opsiBtn[Number(e.key) - 1].focus(); return; }
      if (e.key === 'Enter' && !e.repeat && t && t.tagName === 'BUTTON' && opsiBtn.includes(t)) {
        e.preventDefault();
        if (t.getAttribute('aria-pressed') !== 'true') t.click();
        const lanjut = page.querySelector('.ob-aksi .btn-primary'); if (lanjut) lanjut.click();
        return;
      }
      if (e.key === 'Enter' && (!t || !/^(BUTTON|A|SUMMARY)$/.test(t.tagName))) { const lanjut = page.querySelector('.ob-aksi .btn-primary'); if (lanjut) { e.preventDefault(); lanjut.click(); } }
    });
    function selesai(lewati) {
      Object.assign(p, draft, { nama: namaBersih(), onboardingSelesai: true }); UKP.store.save(); UKP.perbaruiTopbar();
      if (UKP.tim && typeof UKP.tim.kirimRingkasan === 'function') UKP.tim.kirimRingkasan({ segera: true });
      // v7.2: selesai atau dilewati, langsung ke beranda ringkas (kartu "Mulai sesi pertama" + tautan diagnosis)
      UKP.go('beranda', {}, { replace: true });
    }
    render();
    return { node: page, unmount: () => modeFokus(false) };
  };
  L.susunDiagnosis = function () {
    const s = UKP.store.get(); const t = s.profil.tingkat; const kel = K.kelompok(t); if (!kel.length) return null;
    const soal = kel.flatMap(k => U.ambil(K.soalKelompok(k, t).filter(x => x.kesulitan <= 2), 3));
    return { id: U.id('diag'), ukuran: 'diagnosis', menit: Math.round(soal.length * .8), blok: [{ jenis: 'soal', data: soal.map(x => x.id), menit: Math.round(soal.length * .8) }], mulai: Date.now(), posisi: 0, hasil: { kartu: 0, soal: 0, benar: 0, topik: null }, diagnosis: true };
  };

  // ================= HARI INI =================
  // Tata letak v7 (DESAIN-V7 P2-03…P2-08): kop (tanggal · h1 hitung mundur · tanggal ujian; kanan: kesiapan) → .tata dengan
  // dua .kolom bebas tinggi (K-16): kl-8 Sesi → pita stat → Aktivitas | kl-4 Posisi penguasaan → Minggu ini → Angka hari ini.
  // < 1280 kolom luruh (display: contents) dan urutan diatur .urut-1…6. Pengguna baru (belum ada sesi maupun jawaban):
  // kartu "Mulai dari sini" (ceklis K-07) menggantikan Sesi, pita stat, Aktivitas, dan daftar kelompok.
  // Satu rumah per fakta: hitung mundur hanya di h1, kesiapan hanya di kop, rangkaian hanya di tile stat, "Kemajuan ›" hanya di Aktivitas.
  // Dasbor lengkap (beranda lama). opsi.sematkan: tab Ringkasan di Kemajuan (kesiapan, satu baris rangkaian/akurasi, posisi penguasaan);
  // opsi.hanyaSesi: hanya kartu "Sesi hari ini" (dipasang di Rencana)
  function berandaDasbor(opsi) {
    const hanyaSesi = !!(opsi && opsi.hanyaSesi);
    const sem = !!(opsi && (opsi.sematkan || hanyaSesi));
    const s = UKP.store.get(); const p = s.profil; const tingkat = p.tingkat;
    const page = h('div', { class: 'page lebar beranda' });
    const hariIni = U.hariIni(); const hariTersisa = p.tanggalUjian ? U.selisihHari(hariIni, p.tanggalUjian) : null;
    const sapaan = (() => { const jam = new Date().getHours(); return jam < 11 ? 'Selamat pagi' : jam < 15 ? 'Selamat siang' : jam < 18 ? 'Selamat sore' : 'Selamat malam'; })();
    const rencana = UKP.rencana.hitung();
    const kes = L.kesiapanTingkat(tingkat);
    const kelStatus = kes.kelompok.map(k => ({ kode: k.kode, st: statusKelompok(k.kode) }));
    const adaDinilai = kelStatus.some(r => r.st.tahap === 'dinilai');
    const akurasiTingkat = L.akurasiKeseluruhan ? L.akurasiKeseluruhan(tingkat, 3650) : { n: 0, benar: 0 };
    const adaJawaban = s.jawaban.some(j => j && !kosongSim(j));
    const aktifSesi = s.sesiAktif && !s.sesiAktif.selesai && s.sesiAktif.blok && s.sesiAktif.blok.length ? s.sesiAktif : null;
    // pengguna baru (D7): belum ada sesi tercatat maupun jawaban → tanpa deretan angka nol
    const baru = !s.sesi.length && !adaJawaban && !aktifSesi;

    // ----- kop dasbor -----
    // progres minggu dari rencana yang sudah disusun di halaman Rencana (halaman ini tidak membuat jangkar rencana baru)
    function metaMinggu() {
      const d = s.rencanaDasar;
      if (!p.tanggalUjian || !d || d.ujian !== p.tanggalUjian || d.tingkat !== p.tingkat || !d.mulai || d.mulai > hariIni || typeof UKP.rencana.v1 !== 'function') return null;
      let r = null; try { r = UKP.rencana.v1(); } catch (e) { return null; }
      const w = r && r.mingguIni; if (!w || !w.tugas) return null;
      // fase hari ini dari rentang tanggal yang sama dengan halaman Rencana (bukan fase dominan minggu), tanpa kode F1
      const n = w.tugas.length, sel = w.selesai || 0;
      const kini = (r.rentangFase || []).find(x => x.mulai <= hariIni && hariIni <= x.akhir);
      const namaFase = kini ? kini.nama : w.fase ? (UKP.rencana.FASE || {})[w.fase] : null;
      return h('div', { class: 'kop-minggu' }, sel > 0 ? barProgres(n ? sel / n * 100 : 0, { ukuran: 'sm', ariaLabel: 'Tugas rencana minggu ini', valuetext: sel + ' dari ' + n + ' tugas minggu ini selesai' }) : null,
        h('span', { class: 'meta' }, gabungMeta(['Minggu ' + w.no + ' dari ' + r.minggu.length, namaFase ? 'fase ' + namaFase : null, sel + ' dari ' + n + ' tugas'])));
    }
    // kesiapan (satu-satunya rumah angka ini): cincin hanya bila ada kelompok berstatus dinilai (K-18); sebelum itu "Peta awal" tanpa persen
    function kesiapanKop() {
      const href = UKP.href ? UKP.href('tingkat', { tingkat }) : '#tingkat'; const prm = JSON.stringify({ tingkat });
      if (adaDinilai) {
        const ring = UKP.c.ring(kes.skor, { besar: true, label: 'Kesiapan ' + UKP.namaTingkat[tingkat], teks: kes.skor + '%', hitung: kes.skor, akhiran: '%', animasi: true, valuetext: kes.skor + ' persen, perkiraan dari latihan' });
        return h('div', { class: 'card ringkas klik kesiapan-kop' }, ring, h('div', { class: 'kesiapan-teks' }, h('a', { class: 'card-link', href, 'data-go': 'tingkat', 'data-params': prm }, 'Kesiapan ' + UKP.namaTingkat[tingkat]), h('span', { class: 'meta' }, 'Perkiraan dari latihan, bukan prediksi kelulusan')));
      }
      if (!akurasiTingkat.n) return null;
      // angka peta awal ditulis sekali (angka besar + satuan); tautan cukup "Peta awal"
      return h('div', { class: 'card ringkas klik kesiapan-kop' }, h('span', { class: 'kesiapan-awal', 'aria-hidden': 'true' }, h('span', null, akurasiTingkat.benar + '/' + akurasiTingkat.n), h('span', { class: 'satuan' }, 'benar')),
        h('div', { class: 'kesiapan-teks' }, h('a', { class: 'card-link', href, 'data-go': 'tingkat', 'data-params': prm, 'aria-label': 'Peta awal: ' + akurasiTingkat.benar + ' dari ' + akurasiTingkat.n + ' benar. Buka peta materi' }, 'Peta awal'), h('span', { class: 'meta' }, 'Angka kesiapan muncul setelah kelompok dinilai')));
    }
    const judulKop = hariTersisa != null && hariTersisa >= 0 ? (hariTersisa === 0 ? 'Hari ujian' : hariTersisa + ' hari menuju UKP ' + tingkat) : baru ? sapaan + '. Selamat datang.' : sapaan + '. Sesi hari ini?';
    const ujianMeta = p.tanggalUjian && hariTersisa > 0 ? h('span', { class: 'meta' }, 'Ujian ' + U.tglPanjang(p.tanggalUjian)) : null;
    const mg = metaMinggu();
    if (!sem) page.appendChild(kopHalaman({ eyebrow: U.tglPanjang(hariIni), judul: judulKop,
      meta: ujianMeta || mg ? [ujianMeta, mg] : null,
      // pengguna baru: "Buka Rencana" sudah ada di ceklis Mulai dari sini, jadi tidak diulang di kop
      aksi: hariTersisa === 0 ? null : [kesiapanKop(), baru ? null : UKP.link(['Lihat rencana', ikon('chevron-kanan', null, true)], 'rencana', null, 'btn btn-sm btn-ghost btn-text rata')] }));

    // banner (maks. satu yang kontekstual di antara kop dan Sesi; banner sistem tetap)
    if (!sem && !UKP.store.ok) page.appendChild(h('div', { class: 'banner', 'data-tone': 'warn' }, 'Penyimpanan browser tidak tersedia (mode privat?). Latihan bisa dilanjutkan, tetapi progres tidak tersimpan.'));
    const terakhir = UKP.hadir.terakhirBelajar(); const absen = terakhir ? U.selisihHari(terakhir, hariIni) : 0;
    if (!sem && absen >= 7) page.appendChild(UKP.c.banner('Senang Anda kembali. Terakhir belajar ' + absen + ' hari lalu; mulai yang ringan dengan sesi Kilat 5 menit, tanpa menyalahkan diri.', 'info', 'absen-' + hariIni));
    if (!sem) for (const d of rencana.pendaftaran.slice(0, 1)) { const buka = d.buka.slice(0, 10); const sel = U.selisihHari(hariIni, buka); if (sel >= -1 && sel <= 3) page.appendChild(UKP.c.banner('Pendaftaran ' + d.nama + ' ' + (sel > 0 ? 'dibuka dalam ' + sel + ' hari' : 'sedang dibuka') + ' (' + UKP.fmt.tanggal(buka) + ' – ' + UKP.fmt.tanggal(d.tutup.slice(0, 10)) + '). Satu ujian aktif per waktu.', 'info', 'daftar-' + d.id, UKP.link('Buka Info Ujian', 'info-ujian', { tab: 'jadwal' }))); }
    if (!sem && hariTersisa != null && hariTersisa >= 0 && hariTersisa <= 7 && hariTersisa > 0) page.appendChild(UKP.c.banner('Minggu Tenang: tanpa materi baru. Cukup kartu, Buku Kesalahan, satu simulasi, dan cek perangkat.', 'warn', 'tenang-' + hariIni));
    if (!sem && hariTersisa === 0) { page.appendChild(h('section', { class: 'card sorot', 'aria-labelledby': 'hari-h-judul' }, kepalaKartu({ judul: 'Hari ujian', id: 'hari-h-judul' }), h('p', null, 'Masuk Zoom paling lambat 30 menit sebelum sesi; terlambat lebih dari 15 menit tidak dapat ikut. Tanpa kertas buram; dua perangkat; KTP siap. Tidak ada latihan hari ini.'), h('div', { class: 'btn-row' }, UKP.link('Daftar cek hari H', 'info-ujian', { bagian: 'iu-perangkat' }, 'btn')))); return page; }

    // Laporan mingguan baru (dibuat otomatis tiap Jumat oleh mesin laporan); banner sampai dibuka atau ditutup
    // dipasang sesudah kartu Sesi (urut-1) agar tombol Mulai sesi terlihat di layar pertama HP
    let bannerLaporan = null;
    const daftarLaporan = Array.isArray(s.laporan) ? s.laporan : [];
    const lapBaru = daftarLaporan.length ? daftarLaporan[daftarLaporan.length - 1] : null;
    if (!sem && lapBaru && typeof lapBaru === 'object' && !lapBaru.dibaca) {
      const akr = Number(lapBaru.akurasi); const persenLap = isFinite(akr) && lapBaru.akurasi != null ? Math.round(akr <= 1 ? akr * 100 : akr) : null;
      const idLap = String(lapBaru.id || lapBaru.minggu || lapBaru.tgl || lapBaru.dibuat || daftarLaporan.length);
      // laporan bisa untuk minggu lalu (dibuat Senin–Kamis): sebut rentang tanggalnya, bukan "minggu ini"
      const rentangLap = lapBaru.mulai ? rentangPendek(lapBaru.mulai, lapBaru.akhir || lapBaru.mulai) : '';
      const bLap = UKP.c.banner('Laporan ' + (rentangLap || 'mingguan') + ' siap' + (persenLap != null ? ': akurasi ' + persenLap + '%.' : '.') + ' Berisi topik yang naik atau turun, kesalahan berulang, dan saran minggu depan.', 'info', 'laporan-' + idLap,
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { lapBaru.dibaca = lapBaru.dibaca || Date.now(); UKP.store.save(); UKP.go('kemajuan', { tab: 'laporan' }); } }, 'Buka laporan')));
      if (bLap) { bLap.classList.add('banner-laporan'); bannerLaporan = bLap; }
    }
    const tata = h('div', { class: 'tata' + (sem ? ' ringkasan-kemajuan' : '') }); page.appendChild(tata);
    // tersemat di Kemajuan: satu kolom (kesiapan → baris rangkaian/akurasi → posisi penguasaan)
    const kolomKiri = h('div', { class: 'kolom kl-8' }), kolomKanan = sem ? kolomKiri : h('div', { class: 'kolom kl-4' });
    tata.append(kolomKiri); if (!sem) tata.append(kolomKanan);
    const urut = (el, n) => { if (el) el.classList.add('urut-' + n); return el; };
    function mulaiSesi(sesi) { s.sesiAktif = sesi; UKP.store.save(); UKP.go('sesi'); }
    function mulaiDiagnosis() { const d = L.susunDiagnosis(); if (!d) { UKP.toast('Konten untuk tingkat ini belum dimuat.'); return; } mulaiSesi(d); }
    const nDiag = K.kelompok(tingkat).length * 3; const menitDiag = Math.max(1, Math.round(nDiag * .8));

    // ----- Sesi hari ini (kartu sorot) -----
    let ukuran = absen >= 7 || U.jamBelajar() >= 21 ? 'kilat' : 'standar';
    const tgl = new Date(hariIni + 'T12:00:00'); const tglNum = tgl.getDate(); const akhirBulan = new Date(tgl.getFullYear(), tgl.getMonth() + 1, 0).getDate();
    const tenggat = [15, 20, akhirBulan].includes(tglNum);
    if (tenggat) ukuran = 'kilat';
    const hadirHariIni = !!(s.hadir[hariIni] && s.hadir[hariIni].status === 'HADIR');
    const kartuSesi = h('section', { class: 'card sorot kartu-sesi', 'aria-labelledby': 'sesi-judul' });
    const LABEL_UKURAN = { kilat: 'Kilat 5', standar: 'Standar 12', penuh: 'Penuh 30' };
    const SEG_UKURAN = { kilat: ['Kilat', '5 mnt'], standar: ['Standar', '12 mnt'], penuh: ['Penuh', '30 mnt'] };
    const namaBlok = b => b.jenis === 'angka' ? 'Angka hari ini' : b.jenis === 'kartu' ? 'Ulang ' + b.data.length + ' kartu' : b.jenis === 'ringkas' ? 'Baca ringkasan ' + b.data + ' ' + ((K.topik(b.data) || {}).judul || '') : b.jenis === 'soal' ? 'Kerjakan ' + b.data.length + ' soal' : 'Studi kasus';
    // isi sesi dalam satu frasa untuk meta: "ulang kartu, ringkasan, 8 soal"
    const isiSesi = sesi => sesi.blok.filter(b => b.jenis !== 'angka').map(b => b.jenis === 'kartu' ? 'ulang kartu' : b.jenis === 'ringkas' ? 'ringkasan' : b.jenis === 'soal' ? b.data.length + ' soal' : 'studi kasus').join(', ');
    // penanda "diraih" (stempel HADIR) hanya pada render pertama setelah sesi tercatat
    const baruHadir = (() => { try { const v = sessionStorage.getItem('ukp.hadirBaru'); if (v === hariIni) { sessionStorage.removeItem('ukp.hadirBaru'); return true; } } catch (e) {} return false; })();
    function segUkuran() {
      return h('div', { class: 'seg batas', role: 'group', 'aria-label': 'Ukuran sesi' }, ['kilat', 'standar', 'penuh'].map(u => h('button', { type: 'button', 'aria-pressed': String(ukuran === u), onclick: () => { ukuran = u; gambarSesi(); const b = kartuSesi.querySelector('.seg [aria-pressed="true"]'); if (b) b.focus(); } }, h('span', null, SEG_UKURAN[u][0]), h('small', null, SEG_UKURAN[u][1]))));
    }
    // kelompok terlemah yang sudah punya angka (dipakai langkah berikutnya dan Posisi penguasaan)
    const terlemahKel = kelStatus.filter(r => r.st.skor != null).sort((a, b) => a.st.skor - b.st.skor)[0] || null;
    function gambarSesi() {
      kartuSesi.innerHTML = '';
      const aktif = s.sesiAktif;
      if (aktif && !aktif.selesai && aktif.blok && aktif.blok.length) {
        const nama = aktif.ukuran === 'diagnosis' ? 'diagnosis' : (LABEL_UKURAN[aktif.ukuran] || aktif.ukuran);
        kartuSesi.append(kepalaKartu({ judul: 'Lanjutkan sesi ' + nama, id: 'sesi-judul', meta: ['Terhenti di langkah ' + (aktif.posisi + 1) + ' dari ' + aktif.blok.length, 'progres tersimpan'] }),
          barProgres(aktif.posisi / aktif.blok.length * 100, { ukuran: 'sm', ariaLabel: 'Progres sesi', valuetext: aktif.posisi + ' dari ' + aktif.blok.length + ' langkah selesai' }),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-lg mulai-sesi', onclick: () => UKP.go('sesi') }, ikon('play'), 'Lanjutkan sesi'), h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { s.sesiAktif = null; UKP.store.save(); gambarSesi(); } }, 'Buang sesi')));
        return;
      }
      if (hadirHariIni) {
        // keadaan selesai (P2-04): judul tegas + stempel HADIR, satu baris ringkasan, lalu langkah berikutnya dari data
        const hariSesi = s.sesi.filter(x => x && x.tgl === hariIni); const ak = UKP.aktivitasHarian(1)[0] || { n: 0, benar: 0, menit: 0 };
        const kartuH = hariSesi.reduce((a, x) => a + (x.kartu || 0), 0); const menitH = Math.round(Number(s.hadir[hariIni].menit) || ak.menit || 0);
        const stempel = UKP.c.stempel('HADIR', 'ok', { diraih: baruHadir });
        let jatuhTempo = 0; try { jatuhTempo = UKP.srs.jatuhTempo(tingkat).length; } catch (e) {}
        const item = [];
        if (jatuhTempo) item.push({ judul: 'Ulang ' + jatuhTempo + ' kartu jatuh tempo', meta: '± ' + Math.max(1, Math.round(jatuhTempo * .35)) + ' mnt', aksi: { teks: 'Ulang', view: 'ulang' } });
        if (terlemahKel) item.push({ judul: 'Latih 10 soal ' + terlemahKel.kode, meta: 'kelompok terlemah · ' + namaPendek(terlemahKel.kode), aksi: { teks: 'Latih', view: 'latih', params: { kode: terlemahKel.kode, n: 10, mulai: true } } });
        const kilat = L.susunSesi('kilat');
        if (kilat.blok.length) item.push({ judul: 'Sesi tambahan', meta: kilat.menit + ' mnt · ' + isiSesi(kilat), aksi: { teks: 'Tambah sesi', onclick: () => mulaiSesi(kilat), gaya: 'hantu' } });
        kartuSesi.append(kepalaKartu({ judul: 'Sesi hari ini selesai', id: 'sesi-judul', ikon: ikon('cek-lingkar', 'ikon-selesai', true),
          meta: [menitH + ' mnt', hariSesi.length > 1 ? hariSesi.length + ' sesi' : null, ak.n ? ak.n + ' soal' : null, ak.n ? ak.benar + ' benar (' + Math.round(ak.benar / ak.n * 100) + '%)' : null, kartuH ? kartuH + ' kartu' : null],
          kanan: stempel }),
          item.length ? langkahBerikut(item, { label: 'Langkah berikutnya' }) : null);
        return;
      }
      const sesi = L.susunSesi(ukuran);
      const daftar = sesi.blok.length ? h('ol', { class: 'list-rows sesi-langkah', 'aria-label': 'Isi sesi ' + LABEL_UKURAN[ukuran] }, sesi.blok.map((b, i) => h('li', null, h('span', { class: 'kode', 'aria-hidden': 'true' }, String(i + 1)), h('span', { class: 'judul' }, namaBlok(b)), h('span', { class: 'menit' }, UKP.fmtMenit(b.menit)))))
        : h('p', { class: 'muted' }, 'Konten untuk tingkat ini belum dimuat.');
      const tombolMulai = h('button', { type: 'button', class: 'btn btn-primary btn-lg mulai-sesi', disabled: !sesi.blok.length, onclick: () => mulaiSesi(sesi) }, ikon('play'), 'Mulai sesi · ' + sesi.menit + ' mnt');
      const jagaHadir = U.jamBelajar() >= 18 && UKP.hadir.rangkaian() > 0 && !tenggat;
      kartuSesi.append(kepalaKartu({ judul: 'Sesi hari ini', id: 'sesi-judul', meta: tenggat ? 'Hari tenggat pajak' : sesi.lelah ? 'Mode malam' : null }),
        segUkuran(), daftar,
        tenggat ? h('p', { class: 'meta' }, 'Hari ini tanggal ' + tglNum + ', hari tenggat pajak. Sesi dikecilkan ke Kilat; melewati hari ini tidak memutus kehadiran (dicatat CUTI).') : sesi.lelah ? h('p', { class: 'meta' }, 'Sudah lewat pukul 21.00: materi baru ditunda, sesi ini kartu dan soal terlemah saja.') : null,
        jagaHadir ? h('p', { class: 'meta' }, 'Kilat 5 menit cukup agar hari ini tetap tercatat hadir.') : null,
        h('div', { class: 'btn-row' }, tombolMulai, tenggat && !s.hadir[hariIni] ? h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { UKP.hadir.catat('CUTI', 0); UKP.toast('Kehadiran hari ini dicatat CUTI.'); UKP.render(); } }, 'Lewati hari ini') : null));
    }

    // ----- Mulai dari sini (pengguna baru, P2-03): ceklis tiga langkah, satu primer -----
    function kartuMulai() {
      const sesiStd = L.susunSesi('standar');
      return h('section', { class: 'card sorot kartu-mulai', 'aria-labelledby': 'mulai-judul' },
        kepalaKartu({ judul: 'Mulai dari sini', id: 'mulai-judul', meta: 'Tiga langkah untuk minggu pertama Anda' }),
        langkahBerikut([
          { judul: 'Sesi pertama', meta: gabungMeta([sesiStd.menit + ' mnt', isiSesi(sesiStd)]), status: 'aktif', aksi: sesiStd.blok.length ? { teks: 'Mulai sesi', onclick: () => mulaiSesi(sesiStd), gaya: 'primer' } : null },
          { judul: 'Diagnosis ' + nDiag + ' soal', meta: '± ' + menitDiag + ' mnt · memetakan posisi awal Anda', status: 'nanti', aksi: { teks: 'Mulai diagnosis', onclick: mulaiDiagnosis } },
          { judul: 'Isi tanggal ujian', meta: p.tanggalUjian ? 'Ujian ' + U.tglPanjang(p.tanggalUjian) : 'agar jadwal mingguan bisa disusun', status: p.tanggalUjian ? 'selesai' : 'aktif', aksi: { teks: 'Buka Rencana', view: 'rencana', gaya: 'hantu' } },
        ], { status: true, label: 'Langkah memulai' }));
    }
    if (hanyaSesi) { if (hariTersisa === 0) return null; gambarSesi(); return kartuSesi; }
    if (sem) {
      // tersemat di Kemajuan: kesiapan (dulu di kop), lalu satu baris rangkaian/akurasi; tanpa sesi, aktivitas, dan Angka hari ini
      const kk = kesiapanKop(); if (kk) kolomKiri.appendChild(kk);
      const akt7 = UKP.aktivitasHarian(7); const n7 = akt7.reduce((a, d) => a + d.n, 0), b7 = akt7.reduce((a, d) => a + d.benar, 0);
      const nHadir = UKP.hadir.tujuhHari().filter(d => d.st && d.st.status === 'HADIR').length;
      kolomKiri.appendChild(h('p', { class: 'meta baris-ringkas' }, gabungMeta(['Rangkaian ' + UKP.hadir.rangkaian() + ' hari', nHadir + ' dari 7 hari hadir', n7 ? 'akurasi 7 hari ' + Math.round(b7 / n7 * 100) + '% dari ' + n7 + ' soal' : 'belum ada soal 7 hari terakhir'])));
    } else if (baru) kolomKiri.appendChild(urut(kartuMulai(), 1));
    else { gambarSesi(); kolomKiri.appendChild(urut(kartuSesi, 1)); }
    if (bannerLaporan) kolomKiri.appendChild(urut(bannerLaporan, 1));

    // ----- Posisi penguasaan (P2-07): ringkasan status + daftar skor netral dari statusKelompok -----
    const tautanPeta = UKP.c.tautanKop ? UKP.c.tautanKop('Peta materi', 'tingkat', { tingkat }) : UKP.link('Peta materi', 'tingkat', { tingkat }, 'tautan-kop');
    if (baru || !kelStatus.some(r => r.st.skor != null)) {
      kolomKanan.appendChild(urut(h('section', { class: 'card kartu-posisi', 'aria-labelledby': 'posisi-judul' }, kepalaKartu({ judul: 'Posisi penguasaan', id: 'posisi-judul', meta: UKP.namaTingkat[tingkat] }),
        UKP.c.kosong('Belum ada angka penguasaan', TEKS_DINILAI(), baru && !sem ? null : h('button', { type: 'button', class: 'btn btn-sm', onclick: mulaiDiagnosis }, 'Diagnosis ' + nDiag + ' soal · ± ' + menitDiag + ' mnt'), { ringkas: true })), 2));
    } else if (kelStatus.length) {
      // nada attn hanya untuk pengecualian: kelompok dinilai di bawah 60 bila yang demikian minoritas (DESAIN-V7 §3.3)
      const dinilai = kelStatus.filter(r => r.st.tahap === 'dinilai'); const nRendah = dinilai.filter(r => r.st.skor < 60).length;
      const nadaPengecualian = nRendah * 2 < kelStatus.length;
      // status yang dimiliki ≥ 50% kelompok ditulis sekali di kepala kartu; "perkiraan" per baris hanya untuk pengecualian (§3.3)
      const nAwal = kelStatus.filter(r => r.st.tahap === 'awal').length; const awalMayoritas = nAwal * 2 >= kelStatus.length;
      // di daftar sempit (≤ 300 px, mis. kolom kl-4 ≥ 1280) nama pendek ("KUP") tampil lewat aturan .nm-pendek app.css; nama lengkap di title dan aria-label
      const judulKel = kode => { const pj = K.namaKelompok(kode), pd = namaPendek(kode); return pd === pj ? pj : h('span', { title: pj }, h('span', { class: 'nm-panjang' }, pj), h('span', { class: 'nm-pendek', 'aria-hidden': 'true' }, pd)); };
      const daftar = h('ul', { class: 'daftar-skor', 'aria-label': 'Penguasaan per kelompok' }, kelStatus.map(r => barisSkor({ kode: r.kode, judul: judulKel(r.kode), nilai: r.st.skor, tahap: r.st.tahap === 'belum' ? null : r.st.tahap,
        meta: r.st.tahap === 'awal' && !awalMayoritas ? 'perkiraan' : null, nada: r.st.tahap === 'dinilai' && r.st.skor < 60 && nadaPengecualian ? 'attn' : null, view: 'kelompok', params: { kode: r.kode },
        label: r.kode + ' ' + K.namaKelompok(r.kode) + ': ' + (r.st.skor == null ? 'belum dinilai' : (r.st.tahap === 'awal' ? 'perkiraan awal ' : 'penguasaan ') + r.st.skor) })));
      const aksiLemah = terlemahKel ? UKP.link(['Latih ' + terlemahKel.kode, ikon('chevron-kanan', null, true)], 'latih', { kode: terlemahKel.kode, n: 10, mulai: true }, 'tautan-kop') : null;
      kolomKanan.appendChild(urut(h('section', { class: 'card kartu-posisi', 'aria-labelledby': 'posisi-judul' },
        kepalaKartu({ judul: 'Posisi penguasaan', id: 'posisi-judul', meta: [UKP.namaTingkat[tingkat], awalMayoritas ? 'perkiraan awal' : null], kanan: rencana.siapDaftar ? UKP.c.stempel('SIAP DAFTAR', 'ok') : tautanPeta }),
        terlemahKel ? ringkasStatus('Kelompok terlemah: ' + terlemahKel.kode + ' ' + namaPendek(terlemahKel.kode) + ' (' + terlemahKel.st.skor + '). Mulai dari sini.', aksiLemah) : null,
        daftar), 2));
    }

    // ----- Minggu ini: strip Kartu Hadir 7 hari (tanpa angka rangkaian dan tanpa tautan; P2-05) -----
    // judul "7 hari terakhir" (jendela bergulir, beda dari "Soal minggu ini" yang minggu kalender); status hadir ditulis sekali di meta
    const nHadir7 = UKP.hadir.tujuhHari().filter(d => d.st && d.st.status === 'HADIR').length;
    if (!sem) kolomKanan.appendChild(urut(h('section', { class: 'card kartu-hadir', 'aria-labelledby': 'hadir-judul' }, kepalaKartu({ judul: '7 hari terakhir', id: 'hadir-judul', meta: nHadir7 + ' dari 7 hari hadir' }), stripHadir({ ringkas: true })), 4));

    // ----- Angka hari ini (P2-08): angka + satuan, sumber sans, status di title -----
    const angka = L.angkaHariIni();
    // kartu angka hanya dibuat untuk kelompok di tingkat target (kartu di luar tingkat tidak pernah muncul di dek)
    const kodeKartuAngka = angka ? (!angka.kelompok ? 'A2' : K.kelompok(tingkat).includes(angka.kelompok) ? angka.kelompok : null) : null;
    if (angka && !sem) {
      const sudah = () => s.angkaDilihat[angka.idx] === 'kartu';
      const btnKartu = kodeKartuAngka ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { if (!sudah()) tambahKartuAngka(angka, btnKartu); } }) : null;
      if (btnKartu) tandaiKartuAngka(btnKartu, sudah());
      const statusPer = (UKP.ref && UKP.ref.statusPer) || null;
      const sumber = h('ul', { class: 'dasar-hukum', 'aria-label': 'Dasar hukum', title: statusPer ? 'Status per ' + UKP.fmt.tanggal(statusPer) : null }, h('li', null, h('span', { class: 'pasal' }, angka.dasar), angka.berlakuSejak ? h('span', { class: 'meta' }, 'berlaku ' + UKP.fmt.tanggal(angka.berlakuSejak)) : null));
      kolomKanan.appendChild(urut(h('section', { class: 'card kartu-angka', 'aria-labelledby': 'angka-judul' }, kepalaKartu({ judul: 'Angka hari ini', id: 'angka-judul' }),
        nilaiAngka(angka.angka), h('p', null, angka.kalimat), sumber,
        h('div', { class: 'btn-row' }, btnKartu, UKP.store.get().pengaturan.tts && 'speechSynthesis' in window ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text rata', onclick: () => UKP.ucap(angka.angka + '. ' + angka.kalimat + ' Dasar: ' + angka.dasar) }, ikon('suara', null, true), 'Dengarkan') : null)), 6));
    }

    // ----- pita stat dan Aktivitas: hanya bila sudah ada aktivitas (pengguna baru tidak disambut angka nol) -----
    if (!baru && !sem) {
      const akt = UKP.aktivitasHarian(14);
      const tujuhIni = akt.slice(7), tujuhLalu = akt.slice(0, 7);
      const jml = (arr, k) => arr.reduce((a, d) => a + d[k], 0);
      const n7 = jml(tujuhIni, 'n'), b7 = jml(tujuhIni, 'benar'), nL = jml(tujuhLalu, 'n'), bL = jml(tujuhLalu, 'benar');
      const akurasi7 = n7 ? Math.round(b7 / n7 * 100) : null;
      const deltaAkurasi = n7 && nL ? akurasi7 - Math.round(bL / nL * 100) : null;
      // minggu dimulai Senin; dibandingkan dengan periode yang sama minggu lalu
      const tglHI = new Date(hariIni + 'T12:00:00'); const keHari = (tglHI.getDay() + 6) % 7; const senin = U.tambahHari(hariIni, -keHari); const seninLalu = U.tambahHari(senin, -7); const batasLalu = U.tambahHari(seninLalu, keHari);
      const soalMinggu = akt.filter(d => d.tgl >= senin).reduce((a, d) => a + d.n, 0);
      const soalLalu = akt.filter(d => d.tgl >= seninLalu && d.tgl <= batasLalu).reduce((a, d) => a + d.n, 0);
      const dS = soalMinggu - soalLalu;
      const trenAkurasi = akt.filter(d => d.n > 0).map(d => Math.round(d.benar / d.n * 100));
      const rangkaianNow = UKP.hadir.rangkaian();
      // tren dan delta baru bermakna setelah 3 hari aktif (HI-2)
      const hariAktif = akt.filter(d => d.n > 0 || d.menit > 0).length; const trenOk = hariAktif >= 3;
      const belumTren = 'tren muncul setelah 3 hari aktif';
      kolomKiri.appendChild(urut(h('div', { class: 'grid-3 pita-stat pita-tren', role: 'group', 'aria-label': 'Ringkasan belajar' },
        tileStat({ label: 'Rangkaian', nilai: String(rangkaianNow), satuan: 'hari', hitung: rangkaianNow, sub: akt.filter(d => d.menit > 0).length + ' dari 14 hari hadir', trend: trenOk ? akt.map(d => d.menit) : undefined, labelTren: 'Menit belajar 14 hari', view: 'kemajuan', params: { tab: 'hadir' } }),
        tileStat({ label: 'Akurasi 7 hari', nilai: akurasi7 == null ? '–' : akurasi7 + '%', hitung: akurasi7 == null ? null : akurasi7, akhiran: '%', delta: trenOk ? deltaAkurasi : null, satuanDelta: ' poin', deltaLabel: 'vs minggu lalu', sub: n7 ? 'dari ' + n7 + ' soal' + (trenOk ? '' : ' · ' + belumTren) : 'belum ada soal minggu ini', trend: trenOk && trenAkurasi.length >= 3 ? trenAkurasi : undefined, labelTren: 'Akurasi harian (%) pada ' + trenAkurasi.length + ' hari dengan soal', view: 'kemajuan', params: { tab: 'peta' } }),
        tileStat({ label: 'Soal minggu ini', nilai: String(soalMinggu), hitung: soalMinggu, delta: trenOk && (soalLalu || soalMinggu) ? dS : null, deltaLabel: 'vs minggu lalu', sub: soalLalu || soalMinggu ? (trenOk ? null : belumTren) : 'mulai dari sesi hari ini', trend: trenOk ? akt.filter(d => d.tgl >= senin).map(d => d.n) : undefined, labelTren: 'Soal per hari sejak Senin', view: 'kemajuan', params: { tab: 'laporan' } })), 3));

      // Aktivitas 14 hari: figcaption = temuan (bukan pengulangan judul kartu); satu-satunya tautan "Kemajuan ›" di halaman
      const totalAkt = jml(akt, 'n');
      const aktifAkt = akt.filter(d => d.n > 0); const puncak = aktifAkt.slice().sort((a, b) => b.n - a.n || b.tgl.localeCompare(a.tgl))[0];
      const temuan = aktifAkt.length ? 'Rata-rata ' + UKP.fmt.angka(Math.round(totalAkt / aktifAkt.length * 10) / 10) + ' soal per hari aktif; tertinggi ' + new Date(puncak.tgl + 'T12:00:00').toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short' }) + ' (' + puncak.n + ' soal)' : '';
      const tautanKemajuan = sem ? null : UKP.c.tautanKop ? UKP.c.tautanKop('Kemajuan', 'kemajuan', { tab: 'hadir' }) : UKP.link('Kemajuan', 'kemajuan', { tab: 'hadir' }, 'tautan-kop');
      kolomKiri.appendChild(urut(h('section', { class: 'card kartu-aktivitas', 'aria-labelledby': 'aktivitas-judul' }, kepalaKartu({ judul: 'Aktivitas 14 hari', id: 'aktivitas-judul', meta: totalAkt + ' soal', kanan: tautanKemajuan }),
        totalAkt ? grafikKolom(akt.map(d => ({ label: labelHari(d.tgl), nilai: d.n, judulPanjang: UKP.fmt.tanggal(d.tgl) })), temuan, akt.length - 1, 'soal')
          : UKP.c.kosong('Belum ada soal dalam 14 hari terakhir', 'Grafik terisi setelah sesi atau latihan pertama.', null, { ringkas: true })), 5));
    }
    function tandaiKartuAngka(b, sudah) {
      b.replaceChildren(ikon(sudah ? 'check' : 'tambah', null, true), sudah ? 'Sudah di dek' : 'Tambah ke kartu');
      if (sudah) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
    }
    // menambah kartu memperbarui tombol di tempat (tanpa merender ulang halaman; fokus tetap di tombol)
    function tambahKartuAngka(a, btn) { const id = 'KA-angka-' + a.idx; if (!kodeKartuAngka) return; if (!s.kartuOtomatis.some(k => k.id === id)) { const kode = kodeKartuAngka; const m = UKP.modul[kode]; s.kartuOtomatis.push({ id, kode, topik: m && m.topik[0] ? m.topik[0].id : kode + '.1', tipe: 'angka', depan: a.kalimat.replace(/\.$/, '') + '?', belakang: a.angka, dasar: a.dasar, berlakuSejak: a.berlakuSejak, menggantikan: null, dekTambahan: [], sumber: 'otomatis', asal: 'angka', dibuatPada: Date.now() }); if (typeof L.rapikanKartuOtomatis === 'function') L.rapikanKartuOtomatis(); } s.angkaDilihat[a.idx] = 'kartu'; UKP.store.save(); if (btn) tandaiKartuAngka(btn, true); UKP.toast('Ditambahkan ke Kartu saya di dek Ulang; didahulukan di antrean kartu baru.'); }
    // angka bertanda data-hitung (cincin kesiapan) menghitung naik saat terlihat
    requestAnimationFrame(() => { if (page.isConnected && typeof UKP.pasangHitung === 'function') UKP.pasangHitung(page); });
    return sem ? tata : page;
  }
  UKP.c.dasborKemajuan = () => berandaDasbor({ sematkan: true });
  UKP.c.sesiHariIni = () => berandaDasbor({ hanyaSesi: true });
  UKP.views.beranda = function () { const p = UKP.store.get().profil; return p.berandaLengkap === true ? berandaDasbor() : berandaRingkas(); };

  // ----- Beranda ringkas (bawaan v7.2): sapaan, satu kartu Lanjutkan, ubin aksi, satu tautan Kemajuan -----
  function aktivitasTerakhir(s) {
    const a = s.sesiAktif;
    if (a && !a.selesai && a.blok && a.blok.length) return { judul: a.ukuran === 'diagnosis' ? 'Diagnosis' : 'Sesi belajar', meta: 'Langkah ' + (a.posisi + 1) + ' dari ' + a.blok.length, buka: () => UKP.go('sesi'), sesi: true };
    if (UKP.simulasiBerjalan && UKP.simulasiBerjalan()) return { judul: 'Simulasi ujian', meta: 'Sedang berjalan', buka: () => UKP.go('simulasi', { jalan: true }) };
    const cand = [];
    for (let i = s.jawaban.length - 1; i >= 0; i--) { const j = s.jawaban[i]; if (j && j.topik && j.konteks !== 'simulasi' && K.topik(j.topik)) { cand.push({ pada: j.pada || 0, jenis: 'latih', id: j.topik }); break; } }
    for (const id in s.topikDibaca) { const v = s.topikDibaca[id]; if (typeof v === 'number' && K.topik(id)) cand.push({ pada: v, jenis: 'baca', id }); }
    const sim = s.simulasi.filter(x => x && x.selesai).slice(-1)[0]; if (sim) cand.push({ pada: typeof sim.selesai === 'number' ? sim.selesai : 0, jenis: 'sim' });
    const x = cand.sort((a, b) => b.pada - a.pada)[0]; if (!x) return null;
    if (x.jenis === 'sim') return { judul: 'Simulasi ujian', meta: 'Terakhir: skor ' + Math.round(sim.skor || 0), buka: () => UKP.go('simulasi') };
    const t = K.topik(x.id);
    if (x.jenis === 'latih') return { judul: t.id + ' ' + t.judul, meta: 'Latihan soal', buka: () => UKP.go('latih', { topik: t.id, kode: t.kode, n: 10, mulai: true }) };
    return { judul: t.id + ' ' + t.judul, meta: 'Baca materi', buka: () => UKP.go('topik', { id: t.id }) };
  }
  function berandaRingkas() {
    const s = UKP.store.get(); const p = s.profil; const tingkat = p.tingkat; const hariIni = U.hariIni();
    const page = h('div', { class: 'page beranda beranda-ringkas' });
    const jam = new Date().getHours(); const sapa = jam < 11 ? 'Selamat pagi' : jam < 15 ? 'Selamat siang' : jam < 18 ? 'Selamat sore' : 'Selamat malam';
    const nama = typeof p.nama === 'string' ? p.nama.trim() : '';
    const sisa = p.tanggalUjian ? U.selisihHari(hariIni, p.tanggalUjian) : null;
    const ujian = sisa == null || sisa < 0 ? null : sisa === 0 ? 'Hari ujian UKP ' + tingkat : sisa + ' hari menuju UKP ' + tingkat;
    page.appendChild(h('header', { class: 'sapa' }, h('h1', { tabindex: '-1' }, nama ? sapa + ', ' + nama : sapa + '.'), h('p', { class: 'meta' }, gabungMeta([U.tglPanjang(hariIni), ujian]))));
    if (!UKP.store.ok) page.appendChild(h('div', { class: 'banner', 'data-tone': 'warn' }, 'Penyimpanan browser tidak tersedia. Progres tidak tersimpan.'));

    // satu kartu aksi: Lanjutkan (ada aktivitas terakhir) atau Mulai sesi pertama (pengguna baru); ajakan kedua hanya tautan meta
    const akhir = aktivitasTerakhir(s);
    const hadir = !!(s.hadir[hariIni] && s.hadir[hariIni].status === 'HADIR');
    const susun = () => { let x = null; try { x = L.susunSesi('standar'); } catch (e) {} return x && x.blok && x.blok.length ? x : null; };
    const mulaiSesi = x => { s.sesiAktif = x; UKP.store.save(); UKP.go('sesi'); };
    const tautanAlt = (teks, fn) => h('button', { type: 'button', class: 'lanjut-alt', onclick: fn }, teks);
    const kartuAksi = (meta, judul, alt, tombol) => h('section', { class: 'card kartu-lanjut', 'aria-labelledby': 'lanjut-judul' },
      h('div', { class: 'lanjut-teks' }, h('span', { class: 'meta' }, meta), h('h2', { class: 'lanjut-judul', id: 'lanjut-judul' }, judul), alt),
      h('div', { class: 'btn-row' }, tombol));
    if (akhir) {
      const sesi = !akhir.sesi && !hadir ? susun() : null;
      page.appendChild(kartuAksi(akhir.meta, akhir.judul, sesi ? tautanAlt('atau mulai sesi harian · ' + sesi.menit + ' mnt', () => mulaiSesi(sesi)) : null,
        h('button', { type: 'button', class: 'btn btn-primary', onclick: akhir.buka }, ikon('play'), 'Lanjutkan')));
    } else {
      const sesi = susun(); const nDiag = K.kelompok(tingkat).length * 3; const menitDiag = Math.max(1, Math.round(nDiag * .8));
      const diag = () => { const d = L.susunDiagnosis(); if (!d) { UKP.toast('Konten untuk tingkat ini belum dimuat.'); return; } mulaiSesi(d); };
      page.appendChild(kartuAksi('Langkah pertama', 'Mulai sesi pertama', nDiag ? tautanAlt('atau diagnosis ' + nDiag + ' soal · ± ' + menitDiag + ' mnt', diag) : null,
        h('button', { type: 'button', class: 'btn btn-primary', disabled: !sesi, onclick: () => { if (sesi) mulaiSesi(sesi); } }, ikon('play'), sesi ? 'Mulai sesi · ' + sesi.menit + ' mnt' : 'Mulai sesi')));
    }

    let nTempo = 0; try { nTempo = UKP.srs.jatuhTempo(tingkat).length; } catch (e) {}
    const adaKartu = Object.keys(s.kartu || {}).length > 0;
    const ubin = [
      ['book', 'Belajar materi', 'Peta materi ' + (UKP.namaTingkat[tingkat] || 'Tingkat ' + tingkat), 'tingkat', { tingkat }],
      ['pen', 'Latih soal', '20 soal acak, langsung dibahas', 'latih'],
      ['sim', 'Simulasi ujian', 'Waktu dan format ujian', 'simulasi'],
      ['repeat', 'Ulang kartu', nTempo ? nTempo + ' kartu jatuh tempo' : adaKartu ? 'Tidak ada yang jatuh tempo' : 'Belum ada kartu', 'ulang'],
    ];
    page.appendChild(h('nav', { class: 'ubin-aksi', 'aria-label': 'Aksi utama' }, ubin.map(([ik, judul, ket, view, prm]) => UKP.link([ikon(ik), h('span', { class: 'ubin-judul' }, judul), h('span', { class: 'ubin-ket' }, ket)], view, prm || null, 'ubin'))));
    const alat = [['calc', 'Kalkulator pajak', 'kalkulator'], ['ref', 'Referensi', 'referensi'], ['kasus', 'Studi kasus', 'kasus'], ['formulir', 'Cakupan materi resmi', 'cakupan', { tingkat }]];
    page.appendChild(h('nav', { class: 'list-rows alat-ringkas', 'aria-label': 'Alat lain' }, alat.map(([ik, judul, view, prm]) => UKP.link([ikon(ik, null, true), h('span', { class: 'row-title' }, judul), ikon('chevron-kanan', 'chev', true)], view, prm || null, 'row-link'))));
    page.appendChild(h('p', { class: 'tautan-tenang' }, UKP.link(['Lihat kemajuan', ikon('chevron-kanan', null, true)], 'kemajuan', null, 'tautan-kop rata')));
    return page;
  }

  // ================= SESI RUNNER =================
  UKP.views.sesi = function () {
    const s = UKP.store.get(); const sesi = s.sesiAktif;
    if (!sesi || !sesi.blok || !sesi.blok.length) return h('div', { class: 'page' }, h('h1', null, 'Tidak ada sesi aktif'), h('p', { class: 'muted' }, 'Susun sesi dari halaman Hari Ini.'), h('button', { class: 'btn btn-primary', onclick: () => UKP.go('beranda') }, 'Ke Hari Ini'));
    sesi.hasil = sesi.hasil || { kartu: 0, soal: 0, benar: 0, topik: null };
    document.body.dataset.mode = 'sesi'; // mode fokus: tanpa navigasi situs, aksi lengket di bawah
    const page = h('div', { class: 'page' });
    // bar sesi berpola .fokus-bar (K-08, P2-12): kiri Cukup (ikon x), tengah "Langkah 2 dari 4 · Ulang kartu", kanan waktu aktif,
    // progres 2 px di dasar lewat --p; data-mode tetap "sesi"
    const bar = h('div', { class: 'fokus-bar bar-sesi' });
    const area = h('div', null);
    page.append(bar, area);
    // menit aktif: jeda antar-interaksi lebih dari 5 menit tidak ikut dihitung
    const JEDA_MAKS = 5 * 60000;
    function catatAktif() { const now = Date.now(); const d = now - (sesi.terakhir || sesi.mulai || now); sesi.aktifMs = (sesi.aktifMs || 0) + U.clamp(d, 0, JEDA_MAKS); sesi.terakhir = now; }
    function menitAktif() { const d = Date.now() - (sesi.terakhir || sesi.mulai || Date.now()); return ((sesi.aktifMs || 0) + U.clamp(d, 0, JEDA_MAKS)) / 60000; }
    if (sesi.terakhir && Date.now() - sesi.terakhir > JEDA_MAKS) sesi.terakhir = Date.now(); // kembali setelah jeda panjang
    function simpan() { catatAktif(); UKP.store.save(); }
    function adaAktivitas() { const r = sesi.hasil; return (r.kartu || 0) + (r.soal || 0) + (r.ringkas || 0) + (r.kasus || 0) > 0; }
    const NAMA_BLOK = { angka: 'Angka', kartu: 'Kartu', ringkas: 'Ringkas', soal: 'Soal', kasus: 'Kasus' };
    function labelBlok(b) { return NAMA_BLOK[b.jenis] || b.jenis; }
    // nama langkah untuk bar dan pengumuman: "Ulang kartu 3/6", "Soal 2/8", "Ringkasan topik"
    const NAMA_LANGKAH = { angka: 'Angka hari ini', kartu: 'Ulang kartu', ringkas: 'Ringkasan topik', soal: 'Soal', kasus: 'Studi kasus' };
    const nBlok = b => (b.jenis === 'kartu' || b.jenis === 'soal') && Array.isArray(b.data) ? b.data.length : 0;
    function teksPosisi() {
      const b = sesi.blok[sesi.posisi]; if (!b) return 'Bukti sesi';
      const n = nBlok(b); const sub = n ? ' ' + Math.min((sesi.sub || 0) + 1, n) + '/' + n : '';
      if (sesi.diagnosis && sesi.blok.length === 1) return 'Diagnosis · soal' + sub;
      return 'Langkah ' + (sesi.posisi + 1) + ' dari ' + sesi.blok.length + ' · ' + (NAMA_LANGKAH[b.jenis] || labelBlok(b)) + sub;
    }
    // menit pertama ditulis "< 1" agar tidak tampak macet di 0 (SS-2)
    function teksMenit() { const m = menitAktif(); return (m < 1 ? '< 1' : Math.round(m)) + '/' + sesi.menit + ' mnt'; }
    // progres keseluruhan 0–100: langkah selesai + bagian langkah berjalan
    function persenSesi() {
      const n = sesi.blok.length || 1; const b = sesi.blok[sesi.posisi]; const k = b ? nBlok(b) : 0;
      return Math.round(U.clamp((sesi.posisi + (k ? Math.min(sesi.sub || 0, k) / k : 0)) / n, 0, 1) * 100);
    }
    function gambarBar() {
      bar.style.setProperty('--p', String(persenSesi()));
      bar.replaceChildren(
        // teks tersembunyi "Cukup" = nama aksesibel; perilaku sama dengan Esc (konfirmasi bila belum ada aktivitas)
        h('button', { type: 'button', class: 'icon-btn', 'data-tip': 'Cukup, akhiri sesi (Esc)', 'aria-keyshortcuts': 'Escape', onclick: cukup }, UKP.icon('x'), h('span', { class: 'visually-hidden' }, 'Cukup, akhiri sesi')),
        h('p', { class: 'fokus-judul', 'aria-live': 'off' }, teksPosisi()),
        h('span', { class: 'meta waktu', title: 'Waktu aktif dari target sesi' }, h('span', { class: 'visually-hidden' }, 'Waktu aktif '), h('span', { class: 'menit' }, teksMenit())));
    }
    async function cukup() {
      if (adaAktivitas()) { bukti(); return; }
      if (await UKP.konfirmasi('Akhiri sesi?', 'Belum ada yang dikerjakan, jadi sesi ini tidak dicatat sebagai hadir.', { ya: 'Akhiri sesi', tidak: 'Lanjutkan sesi' })) tutupTanpaCatat();
    }
    function tutupTanpaCatat() { s.sesiAktif = null; UKP.store.save(); delete document.body.dataset.mode; const ke = () => UKP.go('beranda', {}, { replace: true }); if (page.isConnected) ke(); else setTimeout(ke, 0); }
    function umumkan(teks) { if (UKP.umumkan) { UKP.umumkan(teks); return; } const live = document.getElementById('live'); if (live) { live.textContent = ''; setTimeout(() => { live.textContent = teks; }, 50); } }
    function lanjutBlok() {
      sesi.posisi++; sesi.sub = 0; simpan(); umpanTerakhir = null;
      if (sesi.posisi < sesi.blok.length) { gambar(); umumkan('Blok ' + (sesi.posisi + 1) + ' dari ' + sesi.blok.length + ': ' + labelBlok(sesi.blok[sesi.posisi])); return; }
      if (adaAktivitas()) bukti(); else { UKP.toast('Sesi berakhir tanpa aktivitas; tidak dicatat.'); tutupTanpaCatat(); }
    }
    // diagnosis ringkas (OB-2): umpan satu baris soal sebelumnya, tampil di atas soal berikutnya
    let umpanTerakhir = null;
    function barisUmpan(u) {
      if (!u) return null;
      const nada = u.benar ? 'benar' : u.jawab === '-' ? 'info' : 'salah';
      const teks = 'Soal ' + u.no + ': ' + (u.benar ? 'benar.' : u.jawab === '-' ? 'belum tahu · kunci ' + u.kunci + '.' : 'kurang tepat · kunci ' + u.kunci + '.');
      return h('p', { class: 'umpan-ringkas', 'data-hasil': nada }, ikon(u.benar ? 'cek-lingkar' : u.jawab === '-' ? 'info' : 'x-lingkar'), h('span', null, teks));
    }
    function gambar() {
      gambarBar(); area.innerHTML = '';
      const b = sesi.blok[sesi.posisi]; sesi.sub = sesi.sub || 0;
      let target = null;
      if (b.jenis === 'angka') {
        // ingat aktif (SS-3): angka ditutup dulu; "Tampilkan angka" membukanya, lalu Lanjut
        const a = b.data;
        const nilai = h('div', { class: 'angka-besar angka-tertutup', 'aria-hidden': 'true' }, '▢▢▢');
        const cite = UKP.c.cite({ pasal: a.dasar, berlakuSejak: a.berlakuSejak }); cite.hidden = true;
        const lanjut = h('button', { type: 'button', class: 'btn btn-primary', hidden: true, onclick: lanjutBlok }, 'Lanjut', ikon('chevron-kanan'));
        const buka = h('button', { type: 'button', class: 'btn btn-primary', onclick: () => {
          nilai.textContent = a.angka; nilai.removeAttribute('aria-hidden'); nilai.classList.remove('angka-tertutup'); nilai.classList.add('kilat'); cite.hidden = false;
          buka.remove(); lanjut.hidden = false; UKP.fokus(lanjut); umumkan('Angka: ' + a.angka);
        } }, ikon('mata'), 'Tampilkan angka');
        area.appendChild(h('div', { class: 'card' }, h('p', { class: 'eyebrow' }, 'Ingat dulu, lalu buka'), h('h1', null, 'Angka hari ini'), h('p', null, a.kalimat), nilai, cite, h('div', { class: 'btn-row' }, buka, lanjut)));
      } else if (b.jenis === 'kartu') {
        const ids = b.data; if (sesi.sub >= ids.length) return lanjutBlok();
        const kartu = K.kartu(ids[sesi.sub]); if (!kartu) { sesi.sub++; return gambar(); }
        const fl = UKP.c.flash(kartu, { nomor: sesi.sub + 1, total: ids.length, fokus: false, onNilai: () => { sesi.hasil.kartu++; sesi.sub++; simpan(); gambar(); } });
        area.append(h('h1', { class: 'visually-hidden' }, 'Kartu ' + (sesi.sub + 1) + ' dari ' + ids.length), fl);
        target = fl.fokusAwal || fl;
      } else if (b.jenis === 'ringkas') {
        const t = K.topik(b.data); if (!t) return lanjutBlok();
        area.appendChild(UKP.c.ringkasTopik(t, { onSelesai: () => { s.topikDibaca[t.id] = Date.now(); sesi.hasil.ringkas = (sesi.hasil.ringkas || 0) + 1; simpan(); lanjutBlok(); }, labelSelesai: 'Tandai dibaca, lanjut ke soal' }));
      } else if (b.jenis === 'soal') {
        const ids = b.data; if (sesi.sub >= ids.length) return lanjutBlok();
        const soal = K.soal(ids[sesi.sub]); if (!soal) { sesi.sub++; return gambar(); }
        // nomor soal sudah tampil di bar sesi; kop soal menampilkan tingkat kesulitan
        area.append(h('h1', { class: 'visually-hidden' }, 'Soal ' + (sesi.sub + 1) + ' dari ' + ids.length), sesi.diagnosis ? barisUmpan(umpanTerakhir) : null,
          UKP.c.soal(soal, { konteks: sesi.diagnosis ? 'diagnosis' : 'sesi', ringkas: !!sesi.diagnosis, onLanjut: (benar, jawab) => {
            sesi.hasil.soal++; if (benar) sesi.hasil.benar++;
            if (sesi.diagnosis) { umpanTerakhir = { no: sesi.sub + 1, benar, jawab, kunci: soal.kunci }; umumkan(barisUmpan(umpanTerakhir).textContent); }
            sesi.sub++; simpan(); gambar();
          } }));
      } else if (b.jenis === 'kasus') {
        const kasus = K.kasus(b.data); if (!kasus) return lanjutBlok();
        area.appendChild(UKP.c.stepper(kasus, { onSelesai: () => { sesi.hasil.kasus = (sesi.hasil.kasus || 0) + 1; simpan(); lanjutBlok(); } }));
      } else return lanjutBlok();
      window.scrollTo({ top: 0 });
      UKP.fokusNanti(target || area.querySelector('h1'));
    }
    // teks kuitansi untuk disalin/dibagikan (Momen 7): tanggal, isi sesi, rangkaian, H-n ujian; tanpa data pribadi lain
    function teksBukti(rekam, rk) {
      const p = s.profil; const sisa = p.tanggalUjian ? U.selisihHari(rekam.tgl, p.tanggalUjian) : null;
      const tglTeks = new Date(rekam.tgl + 'T12:00:00').toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
      const isi = ['Kartu ' + rekam.kartu, rekam.topik ? 'Topik ' + rekam.topik : null, 'Soal ' + rekam.soal + ' (benar ' + rekam.benar + ')', rekam.menit + ' mnt'].filter(Boolean).join(' · ');
      return 'BUKTI SESI · ' + tglTeks + '\n' + isi + '\nRangkaian ' + rk + ' hari · UKP ' + p.tingkat + (sisa != null && sisa >= 0 ? ' H-' + sisa : '');
    }
    function salinTeks(teks) {
      if (typeof UKP.salinTeks === 'function') return UKP.salinTeks(teks, 'Salin bukti sesi');
      // cadangan core lama: textarea sementara; fokus dikembalikan ke asalnya setelah textarea dilepas
      const cadangan = () => { const asal = document.activeElement; const ta = h('textarea', { 'aria-hidden': 'true', style: 'position:fixed;left:-9999px;top:0;opacity:0' }); ta.value = teks; document.body.appendChild(ta); ta.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove(); if (asal && asal.isConnected) { try { asal.focus({ preventScroll: true }); } catch (e) {} } return ok; };
      try { if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(teks).then(() => true, () => cadangan()); } catch (e) {}
      return Promise.resolve(cadangan());
    }
    function bukti() {
      catatAktif(); clearInterval(tik);
      const menit = Math.max(1, Math.round((sesi.aktifMs || 0) / 60000));
      sesi.selesai = Date.now();
      const rekam = { id: sesi.id, tgl: U.hariIni(), ukuran: sesi.ukuran, menit, kartu: sesi.hasil.kartu, soal: sesi.hasil.soal, benar: sesi.hasil.benar, topik: sesi.hasil.topik };
      s.sesi.push(rekam); if (s.sesi.length > 500) s.sesi.shift();
      const rkSebelum = UKP.hadir.rangkaian(); const sudahHadir = !!(s.hadir[rekam.tgl] && s.hadir[rekam.tgl].status === 'HADIR');
      UKP.hadir.catat('HADIR', menit);
      s.sesiAktif = null; UKP.store.save();
      // Hari Ini menampilkan stempel "diraih" sekali setelah sesi ini (Momen 1)
      try { sessionStorage.setItem('ukp.hadirBaru', rekam.tgl); } catch (e) {}
      if (document.body.dataset.mode === 'sesi') delete document.body.dataset.mode;
      const baru = L.cekLencana();
      const rk = UKP.hadir.rangkaian();
      // saran satu kalimat
      let saran = 'Pertahankan ritme; besok lanjutkan dari topik berikutnya dalam rencana.';
      const terlemah = L.topikTerlemah(s.profil.tingkat, 1)[0];
      if (sesi.diagnosis) { const kes = L.kesiapanTingkat(s.profil.tingkat); const lemah = kes.kelompok.slice().sort((a, b) => a.s.skor - b.s.skor)[0]; saran = 'Diagnosis tercatat. Kelompok yang paling perlu perhatian: ' + (lemah ? lemah.kode + ' ' + K.namaKelompok(lemah.kode) : '-') + '; rencana memulai fondasi dari sana.'; }
      else if (sesi.hasil.soal && sesi.hasil.benar < sesi.hasil.soal) { const salah = L.bukuKesalahan(s.profil.tingkat, 10).filter(j => j.pada >= sesi.mulai); const perTopik = {}; salah.forEach(j => { perTopik[j.topik] = (perTopik[j.topik] || 0) + 1; }); const top = Object.entries(perTopik).sort((a, b) => b[1] - a[1])[0]; if (top) { const t = K.topik(top[0]); saran = top[1] + ' kesalahan di ' + (t ? t.judul : top[0]) + '; besok dimulai dari situ.'; } }
      else if (terlemah && terlemah.p.n >= 3) saran = 'Semua benar. Topik paling lemah saat ini: ' + terlemah.topik.judul + ' — layak dilatih 10 soal besok.';
      area.innerHTML = ''; bar.innerHTML = ''; bar.hidden = true;
      // kuitansi: baris muncul bertahap 40 ms (.kuitansi.muncul), lalu stempel HADIR "ditekan" 420 ms
      const ke = s.sesi.filter(x => x && x.tgl === rekam.tgl).length;
      const barisK = [h('div', { class: 'baris' }, h('span', null, 'Kartu'), h('span', null, rekam.kartu)),
        rekam.topik ? h('div', { class: 'baris' }, h('span', null, 'Topik'), h('span', null, rekam.topik)) : null,
        h('div', { class: 'baris' }, h('span', null, 'Soal'), h('span', null, rekam.soal + ', benar ' + rekam.benar)),
        h('div', { class: 'baris' }, h('span', null, 'Durasi aktif'), h('span', null, menit + ' mnt')),
        h('div', { class: 'baris' }, h('span', null, 'Sesi tercatat'), h('span', null, s.sesi.length + ' total'))].filter(Boolean);
      const stempel = UKP.c.stempel('HADIR', 'ok', { besar: true, diraih: true, miring: true }); stempel.classList.add('miring');
      if (gerak()) { stempel.style.animationDelay = (Math.min(6, barisK.length) * 40 + 80) + 'ms'; stempel.style.animationFillMode = 'both'; }
      const nilaiRk = h('span', null, 'Rangkaian ' + rk + ' hari');
      const kuitansi = h('div', { class: 'kuitansi' + (gerak() ? ' muncul' : '') },
        h('div', { class: 'kop' }, 'Bukti Sesi · ' + U.tglPanjang(rekam.tgl)), barisK,
        h('div', { class: 'total' }, h('span', null, 'Sesi ke-' + ke), nilaiRk), stempel);
      if (!sudahHadir && rk > rkSebelum && UKP.hitungNaik) requestAnimationFrame(() => UKP.hitungNaik(nilaiRk, rk, { dari: rkSebelum, awalan: 'Rangkaian ', akhiran: ' hari' }));
      const kilat = L.susunSesi('kilat');
      const bulan = UKP.bulanIni();
      // 7 hari terakhir: strip Kartu Hadir dengan sel hari ini dicap; grafik menit kembali bila ≥ 3 hari aktif (BK-2)
      const akt7 = UKP.aktivitasHarian(7); const aktif7 = akt7.filter(d => d.menit > 0).length;
      const tren7 = h('section', { class: 'sect bukti-tren', 'aria-labelledby': 'bukti-tren-judul' }, h('div', { class: 'sect-head' }, h('h2', { id: 'bukti-tren-judul' }, 'Tujuh hari terakhir')), stripHadir({ cap: true }),
        aktif7 >= 3 ? grafikKolom(akt7.map(d => ({ label: labelHari(d.tgl, 'hari'), nilai: d.menit, judulPanjang: labelHari(d.tgl, 'hari') + ' ' + UKP.fmt.tanggal(d.tgl) })), 'Menit belajar per hari, 7 hari terakhir', akt7.length - 1, 'menit') : null);
      // peta awal diagnosis (OB-4): per kelompok, titik terisi = benar; muncul berurutan 60 ms per titik
      let petaAwal = null, ulasKeliru = null;
      if (sesi.diagnosis) {
        const jaw = s.jawaban.filter(j => j && j.konteks === 'diagnosis' && j.pada >= (sesi.mulai || 0));
        const per = {}; jaw.forEach(j => { (per[j.kode] = per[j.kode] || []).push(j); });
        const kodes = Object.keys(per); let urut = 0;
        if (kodes.length) {
          const lemah = kodes.slice().sort((a, b) => per[a].filter(j => j.benar).length / per[a].length - per[b].filter(j => j.benar).length / per[b].length)[0];
          petaAwal = h('section', { class: 'card peta-awal', 'aria-labelledby': 'peta-awal-judul' }, kepalaKartu({ judul: 'Peta awal', id: 'peta-awal-judul', meta: jaw.filter(j => j.benar).length + ' dari ' + jaw.length + ' benar' }),
            h('ol', { class: 'list-rows' }, kodes.map(kode => { const js = per[kode]; const b = js.filter(j => j.benar).length; return h('li', { class: 'baris-peta' }, h('span', { class: 'kode mono' }, kode), h('span', { class: 'nama' }, K.namaKelompok(kode)),
              h('span', { class: 'titik', role: 'img', 'aria-label': b + ' dari ' + js.length + ' benar' }, js.map(j => h('i', { 'data-benar': j.benar ? '' : null, style: '--i:' + Math.min(14, urut++) }))), h('span', { class: 'num mono' }, b + '/' + js.length)); })),
            h('p', { class: 'small' }, 'Mulai dari ' + lemah + ' ' + K.namaKelompok(lemah) + ': ' + per[lemah].filter(j => j.benar).length + '/' + per[lemah].length + ' benar.'));
          const keliru = jaw.filter(j => !j.benar);
          if (keliru.length) ulasKeliru = h('button', { type: 'button', class: 'btn', 'aria-haspopup': 'dialog', onclick: () => UKP.dialog({ judul: 'Ulas ' + keliru.length + ' soal yang keliru', isi: () => h('div', { class: 'stack' }, keliru.map(j => { const so = K.soal(j.soal); return so ? UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: j.opsi, detik: j.detik || 0, konteks: 'ulas', tanpaTutor: true }) : null; })) }) }, 'Ulas ' + keliru.length + ' yang keliru');
        }
      }
      // salin / bagikan kuitansi (Momen 7)
      const teks = teksBukti(rekam, rk);
      const btnSalin = typeof UKP.c.salin === 'function' ? UKP.c.salin(teks, { label: 'Salin bukti', kelas: 'btn btn-ghost btn-text', judul: 'Salin bukti sesi', pesan: 'Bukti sesi disalin.' })
        : h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => salinTeks(teks).then(ok => {
          // tanpa papan klip, UKP.salinTeks sudah membuka dialog salin manual (false); toast gagal hanya untuk cadangan lama
          if (!ok) { if (typeof UKP.salinTeks !== 'function') UKP.toast('Gagal menyalin. Pilih teks bukti secara manual.'); return; }
          btnSalin.replaceChildren(ikon('check', null, true), 'Tersalin'); UKP.toast('Bukti disalin.');
          setTimeout(() => { if (btnSalin.isConnected) btnSalin.replaceChildren(ikon('copy', null, true), 'Salin bukti'); }, 2000);
        }) }, ikon('copy', null, true), 'Salin bukti');
      const btnBagi = navigator.share ? h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { try { navigator.share({ title: 'Bukti Sesi', text: teks }).catch(() => {}); } catch (e) {} } }, ikon('unggah', null, true), 'Bagikan') : null;
      area.append(h('h1', null, sesi.diagnosis ? 'Diagnosis tercatat' : 'Sesi tercatat'),
        h('div', { class: 'stack bukti' }, kuitansi,
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('beranda', {}, { replace: true }) }, 'Selesai'),
            sesi.diagnosis ? h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('rencana') }, 'Buka rencana') : kilat.blok.length ? h('button', { type: 'button', class: 'btn', onclick: () => { kilat.mulai = Date.now(); s.sesiAktif = kilat; UKP.store.save(); UKP.go('sesi', {}, { replace: true }); } }, 'Lanjut ' + kilat.menit + ' menit lagi?') : null,
            btnSalin, btnBagi),
          petaAwal, ulasKeliru ? h('div', { class: 'btn-row' }, ulasKeliru) : null,
          h('p', null, saran),
          baru.length ? h('p', { class: 'small' }, 'Lencana baru: ', baru.map(b => UKP.c.stempel(b, 'ok', { diraih: true }))) : null,
          tren7,
          h('section', { class: 'sect', 'aria-labelledby': 'bukti-bulan-judul' }, h('div', { class: 'sect-head' }, h('h2', { id: 'bukti-bulan-judul' }, 'Kartu Hadir ' + UKP.fmt.bulanTahun(bulan)), UKP.link(['Kemajuan', ikon('chevron-kanan', null, true)], 'kemajuan', { tab: 'hadir' }, 'tautan-kop')), UKP.c.hadirBulan(bulan))));
      UKP.fokus(area.querySelector('h1')); window.scrollTo({ top: 0 });
    }
    // perbarui menit di bar tanpa render ulang (15 dtk); interaksi menandai waktu aktif
    const tik = setInterval(() => { const m = bar.querySelector('.menit'); if (m) m.textContent = teksMenit(); }, 15000);
    const tandai = () => { if (s.sesiAktif === sesi) catatAktif(); };
    page.addEventListener('pointerdown', tandai, true); page.addEventListener('keydown', tandai, true);
    const onVis = () => { if (document.hidden && s.sesiAktif === sesi) { catatAktif(); UKP.store.flush(); } };
    document.addEventListener('visibilitychange', onVis);
    // Esc = "Cukup" (konfirmasi bila belum ada aktivitas), kecuali saat dialog terbuka atau sedang mengetik (SS-1)
    const onEsc = e => {
      if (e.key !== 'Escape' || e.defaultPrevented || s.sesiAktif !== sesi || bar.hidden || document.querySelector('dialog[open]')) return;
      const t = e.target; if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      e.preventDefault(); cukup();
    };
    document.addEventListener('keydown', onEsc);
    gambar();
    return { node: page, unmount: () => { clearInterval(tik); document.removeEventListener('visibilitychange', onVis); document.removeEventListener('keydown', onEsc); if (s.sesiAktif === sesi) { catatAktif(); UKP.store.save(); UKP.store.flush(); } if (document.body.dataset.mode === 'sesi') delete document.body.dataset.mode; } };
  };

  // ringkasan topik (dipakai sesi & halaman topik)
  // opsi: { onSelesai, labelSelesai, penanda (elemen status di samping judul), kartuPoin: { ada(poin, i) → bool, buat(poin, i) → kartu|null },
  //   aksiKop (node/array: aksi di kop, mis. "Cek 5 soal"), sisipKop (node di bawah meta kop, mis. stepper topik) }
  UKP.c.ringkasTopik = function (t, opsi) {
    opsi = opsi || {};
    const kp = opsi.kartuPoin && typeof opsi.kartuPoin.buat === 'function' ? opsi.kartuPoin : null;
    const poin = t.poinKunci || [];
    // tombol ikon "Jadikan kartu" per baris angka kunci + "semua"; status diperbarui di tempat (tanpa render ulang).
    // aria-disabled (bukan disabled) agar fokus papan ketik tidak hilang setelah kartu dibuat
    const tombolPoin = [];
    function tandaiTombol(b, p, sudah) {
      b.setAttribute('aria-disabled', String(!!sudah)); b.replaceChildren(ikon(sudah ? 'check' : 'tambah', null, true));
      b.setAttribute('aria-label', (sudah ? 'Sudah di dek: ' : 'Jadikan kartu: ') + p.label); b.setAttribute('data-tip', sudah ? 'Sudah di dek' : 'Jadikan kartu');
      b.classList.toggle('sudah', !!sudah);
    }
    // pemberitahuan kartu: toast hanya bila tidak menutupi navigasi topik lengket (.nav-topik); selain itu status di bawah
    // tabel (+ pengumuman #live), agar tombol Topik sebelumnya/berikutnya tetap dapat diketuk (QA-4 P1)
    const statusKartu = h('p', { class: 'small muted status-kartu', hidden: true });
    function beritahuKartu(teks, btn) {
      let tertutup = false;
      const nav = document.querySelector('.nav-topik');
      if (nav) { const r = nav.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight; tertutup = r.height > 0 && r.top < vh && r.bottom > vh - 240; }
      if (!tertutup && UKP.toast) { statusKartu.hidden = true; UKP.toast(teks); return; }
      statusKartu.textContent = teks; statusKartu.hidden = false;
      if (UKP.umumkan) UKP.umumkan(teks);
      // status yang jatuh tepat di bawah navigasi lengket digulir sedikit ke atas agar terbaca (halus kecuali gerak dikurangi);
      // bila jauh di luar layar (HP: tabel angka kunci tinggi), konfirmasi singkat ditulis di sel tombol itu sendiri
      if (nav) requestAnimationFrame(() => {
        if (!statusKartu.isConnected) return;
        const rs = statusKartu.getBoundingClientRect(); const rn = nav.getBoundingClientRect(); const lebih = rs.bottom - rn.top + 8;
        if (lebih > 0 && lebih < 200 && rs.top < rn.top + 200) { try { window.scrollBy({ top: lebih, behavior: UKP.gulirHalus ? UKP.gulirHalus() : 'auto' }); } catch (e) { window.scrollBy(0, lebih); } return; }
        const terlihat = rs.bottom > 0 && rs.bottom <= rn.top;
        const sel = btn && btn.parentElement;
        if (!terlihat && sel && !sel.querySelector('.kartu-ok')) sel.appendChild(h('span', { class: 'tiny muted kartu-ok' }, ' Masuk dek Ulang'));
      });
    }
    function perbaruiSemua() { if (!btnSemua) return; const sisa = poin.filter((p, i) => !kp.ada(p, i)).length; btnSemua.setAttribute('aria-disabled', String(!sisa)); btnSemua.replaceChildren(ikon(sisa ? 'tambah' : 'check', null, true), sisa ? 'Jadikan kartu semua angka (' + sisa + ')' : 'Semua angka sudah di dek'); }
    function buatSatu(p, i) { const k = kp.buat(p, i); return !!k; }
    const btnSemua = kp && poin.length > 1 ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { if (btnSemua.getAttribute('aria-disabled') === 'true') return; let n = 0; poin.forEach((p, i) => { if (!kp.ada(p, i) && buatSatu(p, i)) n++; }); tombolPoin.forEach(([b, p, i]) => tandaiTombol(b, p, kp.ada(p, i))); perbaruiSemua(); if (n) beritahuKartu(n + ' kartu angka ditambahkan ke Kartu saya di dek Ulang; didahulukan di antrean kartu baru.'); } }) : null;
    // kolom nilai: td.num (mono, rata kanan, nowrap, <mark>) hanya untuk angka pendek (≤ 14 karakter tanpa spasi: angka, %, Rp);
    // nilai berupa teks/kalimat mendapat "num teks" (sans, boleh membungkus) agar kolom Dasar dan aksi tetap terlihat (QA-4 P1)
    const angkaPendek = v => v.length <= 14 && !/\s/.test(v) && /^[≤≥<>±+−-]?(Rp)?\d[\d.,]*%?$/.test(v);
    if (poin.length && UKP.viz && UKP.viz.cadangan) UKP.viz.cadangan('kunci-teks', '<table class="tabel kunci"><tbody><tr><td class="num teks">a b</td></tr></tbody></table>',
      p => !/mono|monospace|JetBrains|Consolas/i.test(getComputedStyle(p.querySelector('td')).fontFamily),
      '.tabel.kunci td.num.teks{font-family:var(--font-ui);font-weight:var(--fw-semi,600);text-align:left;white-space:normal}');
    const barisPoin = poin.map((p, i) => {
      const v = String(p.nilai == null ? '' : p.nilai); const pendekAngka = angkaPendek(v);
      let btn = null;
      if (kp) { btn = h('button', { type: 'button', class: 'icon-btn sm', onclick: () => { if (kp.ada(p, i)) return; if (buatSatu(p, i)) { tandaiTombol(btn, p, true); perbaruiSemua(); beritahuKartu('Kartu "' + p.label + '" ditambahkan ke Kartu saya di dek Ulang; didahulukan di antrean kartu baru.', btn); } } }); tandaiTombol(btn, p, kp.ada(p, i)); tombolPoin.push([btn, p, i]); }
      return h('tr', null, h('td', null, p.label), h('td', { class: pendekAngka ? 'num' : 'num teks' }, pendekAngka ? h('mark', null, v) : v), h('td', { class: 'tiny muted' }, (p.dasar || '') + (p.berlakuSejak ? ' · berlaku ' + UKP.fmt.tanggal(p.berlakuSejak) : '')), btn ? h('td', { class: 'aksi' }, btn) : null);
    });
    perbaruiSemua();
    // kop: eyebrow kode · kelompok, judul + penanda status, meta (pill menit + jenis dominan), aksi kop opsional
    const meta = [UKP.c.pill ? UKP.c.pill('± ' + (t.estimasiMenit || 10) + ' mnt', 'netral', 'jam') : h('span', { class: 'pill' }, '± ' + (t.estimasiMenit || 10) + ' mnt')]
      .concat((t.jenisDominan || []).map(j => h('span', { class: 'pill', 'data-jenis': j }, j)));
    const kopEl = kopHalaman({ eyebrow: t.id + ' · ' + K.namaKelompok(t.kode), judul: t.judul, meta, aksi: opsi.aksiKop || null });
    const h1 = kopEl.querySelector('h1');
    if (opsi.penanda && h1) { const judul = h('div', { class: 'judul-status' }); h1.replaceWith(judul); judul.append(h1, opsi.penanda); }
    if (opsi.sisipKop) { const teks = kopEl.querySelector('.page-head-teks') || kopEl; teks.appendChild(opsi.sisipKop); }
    // DESAIN-V7 K-01: bagian berjudul h2 sans (.sect-head), bukan eyebrow
    const bagian = (id, judul, ...isi) => h('section', { class: 'sect', id, 'aria-labelledby': id + '-j' }, h('div', { class: 'sect-head' }, h('h2', { id: id + '-j' }, judul)), ...isi);
    // catatan verifikasi ditulis untuk pembaca: jargon internal dirapikan (UKP.rapikanCatatan di soal.js)
    const catatanVerif = (typeof UKP.rapikanCatatan === 'function' ? UKP.rapikanCatatan(t.peringatan) : t.peringatan) || 'sebagian ketentuan belum dicek ke teks resmi.';
    const statusPer = (UKP.ref && UKP.ref.statusPer) || '2026-10-25';
    const el = h('div', { class: 'stack ringkas-topik' },
      kopEl,
      t.verifikasi === '◐' ? h('div', { class: 'banner', 'data-tone': 'warn' }, ikon('setengah'), h('span', null, 'Perlu verifikasi: ' + catatanVerif)) : null,
      bagian('topik-ringkasan', 'Ringkasan', h('ul', { class: 'bersih prosa' }, (t.ringkasan || []).map(r => h('li', null, r)))),
      poin.length ? bagian('topik-angka', 'Angka kunci', UKP.c.tabelWrap('Angka kunci ' + t.judul, h('table', { class: 'tabel kunci' }, h('tbody', null, barisPoin))), btnSemua ? h('div', { class: 'btn-row' }, btnSemua, h('span', { class: 'tiny muted' }, 'Kartu angka masuk dek Ulang kelompok ' + t.kode + ' dan dek Kartu saya.')) : null, kp ? statusKartu : null) : null,
      t.contohSoal ? bagian('topik-contoh', 'Contoh terpecahkan', h('p', { class: 'prosa' }, t.contohSoal.stem), UKP.c.jejak(t.contohSoal.langkah), h('p', { class: 'small' }, h('strong', null, 'Jawaban: '), t.contohSoal.jawaban)) : null,
      t.jebakan && t.jebakan.length ? bagian('topik-jebakan', 'Jebakan umum', h('ul', { class: 'bersih prosa' }, t.jebakan.map(j => h('li', null, j.teks, ' ', h('span', { class: 'pill tag-sebab', 'data-tone': 'warn' }, UKP.tagLabel(j.tagSebab)))))) : null,
      bagian('topik-dasar', 'Dasar hukum', h('ul', { class: 'dasar-hukum' }, (t.dasarHukum || []).map(d => h('li', null, h('span', { class: 'pasal' }, d.pasal), d.catatan ? ' — ' + d.catatan : ''))), h('p', { class: 'meta', style: { margin: 0 } }, 'Status peraturan per ' + UKP.fmt.tanggal(statusPer) + '.')),
      UKP.store.get().pengaturan.tts && 'speechSynthesis' in window ? h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => UKP.ucap(t.judul + '. ' + (t.ringkasan || []).join('. ')) }, ikon('suara', null, true), 'Dengarkan ringkasan')) : null,
      opsi.onSelesai ? h('div', { class: 'sticky-actions' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: opsi.onSelesai }, opsi.labelSelesai || 'Tandai dibaca')) : null);
    if (UKP.tip && UKP.tip.pasang) UKP.tip.pasang();
    return el;
  };
})(typeof window !== 'undefined' ? window : globalThis);
