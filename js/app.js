/* Pelatih UKP — boot: shell, navigasi, topbar, lembar "Lainnya", pintasan, kapabilitas runtime */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util;

  const NAV_UTAMA = [
    { view: 'beranda', label: 'Hari Ini', ikon: 'home', alias: ['sesi'] },
    { view: 'tingkat', label: 'Belajar', ikon: 'book', alias: ['belajar', 'kelompok', 'topik', 'profesi', 'lembar', 'cakupan'] },
    { view: 'latih', label: 'Latih', ikon: 'pen' },
    { view: 'ulang', label: 'Ulang', ikon: 'repeat' },
  ];
  // butir grup: [view, label, ikon, alias?, params?, kunciNav?] — kunciNav (bawaan = view) membedakan tautan ke view yang sama
  // dengan params lain (mis. "Latihan bersama" → latih { atur: 1 }) agar tidak ikut ditandai aktif atau tersaring dari "Lainnya".
  // v8.2 (audit T3/T11): grup Tim paling atas; Dasbor tim pindah ke sini dan tetap memakai penanda tandaiTim/aturNavTim.
  const GRUP_SIDEBAR = [
    { label: 'Tim', item: [['room', 'Room tim', 'tim'], ['latih', 'Latihan bersama', 'play', null, { atur: 1, bersama: 1 }, 'latih-bersama'], ['ujiantim', 'Ujian tim', 'sim'], ['tim', 'Dasbor tim', 'chart']] },
    { label: 'Harian', item: [['beranda', 'Hari Ini', 'home', ['sesi']], ['rencana', 'Rencana', 'plan'], ['kemajuan', 'Kemajuan', 'chart']] },
    { label: 'Materi', item: [['tingkat', 'Belajar A/B/C', 'book', ['belajar', 'kelompok', 'topik', 'lembar', 'cakupan']], ['latih', 'Latih soal', 'pen'], ['ulang', 'Ulang kartu', 'repeat'], ['kasus', 'Studi kasus', 'kasus'], ['simulasi', 'Simulasi ujian', 'sim'], ['strategi', 'Strategi PG', 'strategi']] },
    { label: 'Alat', item: [['kalkulator', 'Kalkulator', 'calc'], ['referensi', 'Referensi', 'ref'], ['formulir', 'Peta formulir', 'formulir'], ['tutor', 'Tutor AI', 'chat']] },
    { label: 'Ujian', item: [['info-ujian', 'Info ujian', 'info'], ['profesi', 'Etika & Profesi', 'etika']] },
  ];
  // lembar "Lainnya" (v7 P2-10): kelompok dan urutan sama dengan sidebar (Harian/Materi/Alat/Ujian), tanpa tujuan yang sudah
  // punya tab di bar bawah; judul kecil per kelompok; Pengaturan satu baris di bawah garis
  const DI_BAR_BAWAH = new Set(NAV_UTAMA.map(n => n.view));
  const kunciNav = x => x[5] || x[0];
  const GRUP_LAINNYA = GRUP_SIDEBAR.map(g => ({ label: g.label, item: g.item.filter(x => !DI_BAR_BAWAH.has(kunciNav(x))) })).filter(g => g.item.length);
  const LAINNYA = [].concat(...GRUP_LAINNYA.map(g => g.item), [['pengaturan', 'Pengaturan', 'settings']]);
  // view yang dicapai lewat "Lainnya" dan tidak punya tab sendiri di bar bawah → tombol Lainnya ditandai aktif
  const ALIAS_LAINNYA = LAINNYA.filter(x => !x[4]).map(x => x[0]).filter(v => !NAV_UTAMA.some(n => n.view === v || (n.alias || []).includes(v)));
  // item navigasi: ikon + label (+ lencana hitungan opsional). Lencana hidden sampai ada angka.
  const navLink = (v, alias, ...isi) => h('a', { href: UKP.href(v), 'data-go': v, 'data-nav': v, 'data-alias': (alias || []).join(' ') }, ...isi);
  // tautan grup sidebar: params (data-params) dan kunci navigasi tersendiri bila ada
  const navLinkGrup = ([v, , , alias, params, kunci], ...isi) => { const a = navLink(v, alias, ...isi); if (params) { a.setAttribute('href', UKP.href(v, params)); a.dataset.params = JSON.stringify(params); } if (kunci) a.dataset.nav = kunci; return a; };
  const lencana = id => h('span', { class: 'badge', id, hidden: true });
  const LABEL_NAV = Object.create(null);
  [['beranda', 'Hari Ini']].concat(...GRUP_SIDEBAR.map(g => g.item), LAINNYA).forEach(([v, l, , , params]) => { if (!LABEL_NAV[v] && !params) LABEL_NAV[v] = l; });
  // view tingkat puncak (punya tempat sendiri di navigasi); rute lain atau halaman berkop remah adalah rute anak → tombol Kembali tampil
  const PUNCAK = new Set(['beranda', 'mulai', 'tingkat', 'latih', 'ulang', 'rencana', 'kemajuan', 'kasus', 'simulasi', 'strategi', 'kalkulator', 'referensi', 'formulir', 'tutor', 'info-ujian', 'profesi', 'tim', 'pengaturan', 'sesi', 'room', 'ujiantim']);

  // Dasbor tim hanya tampil di navigasi bagi pemimpin tim (pemilik artifact) atau bila tidak ada penyimpanan tim (berkas offline,
  // emulator: dasbor hanya berisi kode hasil yang ditempel di perangkat ini). Tersembunyi sampai UKP.tim.bolehDasbor() menjawab.
  let timTerlihat = false;
  const tandaiTim = (v, el) => { if (v === 'tim') { el.hidden = !timTerlihat; el.setAttribute('data-nav-tim', ''); } return el; };
  function aturNavTim(ya) {
    timTerlihat = !!ya;
    document.querySelectorAll('[data-nav-tim]').forEach(el => { el.hidden = !timTerlihat; });
  }
  UKP.timTerlihat = () => timTerlihat;
  function bangunShell() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    sidebar.appendChild(h('a', { class: 'brand', href: UKP.href('beranda'), 'data-go': 'beranda', 'aria-label': 'Pelatih UKP, ke Hari Ini' }, h('span', { class: 'mark', 'aria-hidden': 'true' }, 'UKP'), h('span', { class: 'brand-teks' }, 'Pelatih UKP')));
    for (const g of GRUP_SIDEBAR) sidebar.appendChild(h('div', { class: 'group', role: 'group', 'aria-label': g.label }, h('div', { class: 'group-label', 'aria-hidden': 'true' }, g.label),
      g.item.map(x => { const [v, l, ik] = x; return tandaiTim(v, navLinkGrup(x, UKP.icon(ik), h('span', { class: 'nav-teks' }, l), v === 'rencana' ? lencana('badge-rencana') : v === 'ulang' ? lencana('badge-ulang-sb') : null)); })));
    const temaBtn = h('button', { type: 'button', class: 'icon-btn sm tema-btn', id: 'btn-tema', 'aria-label': 'Tema gelap', 'aria-pressed': 'false', 'data-tip': 'Tema gelap', onclick: gantiTema }, UKP.icon('bulan'));
    sidebar.appendChild(h('div', { class: 'group foot' },
      h('div', { class: 'foot-baris', style: { display: 'flex', alignItems: 'center', gap: '4px' } }, navLink('pengaturan', null, UKP.icon('settings'), h('span', { class: 'nav-teks' }, 'Pengaturan')), temaBtn),
      h('p', { class: 'tiny muted foot-catatan' }, 'Bukan nasihat pajak. Soal disusun ulang dari kisi-kisi resmi.')));
    const nav = document.getElementById('bottomnav'); nav.innerHTML = '';
    for (const n of NAV_UTAMA) nav.appendChild(navLink(n.view, n.alias, UKP.icon(n.ikon), h('span', null, n.label), n.view === 'ulang' ? h('span', { class: 'badge', id: 'badge-ulang', hidden: true }) : null));
    nav.appendChild(h('button', { type: 'button', onclick: bukaLainnya, 'data-nav': 'lainnya', 'data-alias': ALIAS_LAINNYA.join(' '), 'aria-haspopup': 'dialog' }, UKP.icon('more'), h('span', null, 'Lainnya')));
    // topbar: Kembali (rute anak) · judul ringkas · [merek HP] · Cari (kolom semu ≥ 1024 / ikon) · chip target · Tutor
    const tb = document.getElementById('topbar'); tb.innerHTML = '';
    const kbdCari = UKP.mac ? '⌘ K' : 'Ctrl K';
    tb.append(
      h('button', { type: 'button', class: 'icon-btn', id: 'btn-kembali', 'aria-label': 'Kembali', 'data-tip': 'Kembali', hidden: true, onclick: () => UKP.kembali() }, UKP.icon('back')),
      h('a', { class: 'brand', href: UKP.href('beranda'), 'data-go': 'beranda', 'aria-label': 'Pelatih UKP, ke Hari Ini', style: { minWidth: '26px' } }, h('span', { class: 'mark', 'aria-hidden': 'true' }, 'UKP'), h('span', { class: 'brand-teks' }, 'Pelatih UKP')),
      // judul ringkas menyusut lebih dulu; chip target tidak terpotong
      h('span', { class: 'judul-ringkas', id: 'judul-ringkas', 'aria-hidden': 'true', style: { flexShrink: '20' } }),
      // satu pemicu cari: < 1024 tombol ikon, ≥ 1024 kolom semu berteks + kbd (diatur CSS)
      h('button', { type: 'button', class: 'cari-pemicu', id: 'cari-pemicu', 'aria-label': 'Cari materi, soal, pasal', 'data-tip': 'Cari (' + kbdCari + ')', 'aria-keyshortcuts': 'Control+K Meta+K /', onclick: () => bukaCari() },
        UKP.icon('search'), h('span', { class: 'teks' }, 'Cari materi, soal, pasal…'), h('kbd', { class: 'petunjuk-kbd' }, kbdCari)),
      // status koneksi: tampil hanya saat navigator.onLine false (lihat bagian offline di bawah)
      h('span', { class: 'pill pill-offline', id: 'pill-offline', 'data-tone': 'info', hidden: navigator.onLine !== false, title: 'Tidak ada koneksi internet. Materi, latihan, dan kalkulator tetap bisa dipakai.', style: { flexShrink: '0' } }, 'Offline'),
      h('button', { type: 'button', class: 'chip chip-tingkat', id: 'chip-tingkat', 'data-tingkat': 'A', 'aria-haspopup': 'dialog', style: { flexShrink: '0' }, onclick: bukaTarget }, 'UKP A'),
      h('button', { type: 'button', class: 'icon-btn', id: 'btn-tutor', 'aria-label': 'Tanya Tutor', 'data-tip': 'Tanya Tutor', onclick: () => UKP.tutor.buka(UKP.konteksTutorSaatIni ? UKP.konteksTutorSaatIni() : {}) }, UKP.icon('chat')));
    perbaruiTema();
  }
  // tombol tema di kaki sidebar: tekan = tema gelap
  function perbaruiTema() {
    const b = document.getElementById('btn-tema'); if (!b) return;
    const gelap = UKP.temaEfektif ? UKP.temaEfektif() === 'dark' : false;
    b.setAttribute('aria-pressed', String(gelap)); b.dataset.tip = gelap ? 'Tema gelap aktif · ganti ke terang' : 'Tema terang aktif · ganti ke gelap';
    b.replaceChildren(UKP.icon(gelap ? 'sun' : 'bulan'));
  }
  function gantiTema() {
    const s = UKP.store.get(); const gelap = UKP.temaEfektif() === 'dark';
    s.pengaturan.tema = gelap ? 'light' : 'dark'; UKP.store.save(); UKP.terapkanTema(); perbaruiTema();
    UKP.toast(gelap ? 'Tema terang aktif.' : 'Tema gelap aktif.', { nada: 'ok' });
    if (UKP.sekarang().view === 'pengaturan') UKP.render();
  }
  try { root.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', perbaruiTema); } catch (e) {}
  UKP.perbaruiTema = perbaruiTema;
  // pemilih target (chip "UKP A · 47 hari"): tingkat + tanggal ujian ringkas
  const RENDER_AMAN = ['beranda', 'tingkat', 'belajar', 'kelompok', 'kemajuan', 'rencana', 'info-ujian', 'pengaturan', 'formulir', 'lembar', 'kalkulator', 'referensi'];
  function bukaTarget() {
    if (UKP.simulasiBerjalan && UKP.simulasiBerjalan()) { UKP.toast('Target tidak dapat diubah selama simulasi.'); return; }
    const s = UKP.store.get(); const p = s.profil; const fmt = (((UKP.ref || {}).ujian || {}).format || {}).UKP || {};
    const info = h('p', { class: 'small muted', id: 'tgt-info' });
    const tulisInfo = () => { info.textContent = p.tanggalUjian ? 'Tanggal ujian: ' + UKP.c.tglBantu(p.tanggalUjian, { hitungMundur: true }) + '.' : 'Tanggal ujian belum diisi. Isi di Rencana agar hitung mundur dan jadwal tugas aktif.'; };
    tulisInfo();
    UKP.dialog({ judul: 'Target ujian', ukuran: 'sm', describedby: 'tgt-info', isi: () => h('div', { class: 'stack' },
      UKP.c.segmen({ label: 'Tingkat yang dituju', radio: true, penuh: true, aktif: p.tingkat,
        opsi: ['A', 'B', 'C'].map(t => ({ nilai: t, label: 'Tingkat ' + t, sub: fmt[t] && fmt[t].menit ? fmt[t].menit + ' mnt' : null })),
        onPilih: v => { if (p.tingkat === v) return; p.tingkat = v; UKP.store.save(); UKP.perbaruiTopbar(); UKP.toast('Target diubah ke Tingkat ' + v + '.', { nada: 'ok' }); if (RENDER_AMAN.includes(UKP.sekarang().view)) UKP.render(); } }),
      info),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => { dlg.close(); UKP.go('pengaturan'); } }, 'Pengaturan'), h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => { dlg.close(); UKP.go('rencana'); } }, 'Buka Rencana')] });
  }
  function bukaLainnya() {
    const kini = UKP.sekarang().view;
    const tautan = (dlg, [v, l, ik, , params], kelas) => h('a', { class: kelas || null, href: UKP.href(v, params), 'aria-current': v === kini && !params ? 'page' : null, onclick: e => { if (e.metaKey || e.ctrlKey || e.shiftKey) return; e.preventDefault(); dlg.close(); UKP.go(v, params || {}); } }, UKP.icon(ik), h('span', { class: kelas ? 'row-title' : null }, l), kelas ? UKP.icon('chevron-kanan', 'chev', true) : null);
    UKP.dialog({ judul: 'Lainnya', sheet: true, kelas: 'dlg-lainnya', isi: dlg => h('div', { class: 'lainnya stack' },
      GRUP_LAINNYA.map((g, i) => h('section', { class: 'lainnya-grup stack-sm', 'aria-labelledby': 'lainnya-g' + i },
        h('h3', { class: 'eyebrow', id: 'lainnya-g' + i }, g.label),
        h('div', { class: 'menu-grid' }, g.item.filter(x => x[0] !== 'tim' || timTerlihat).map(x => tautan(dlg, x))))),
      h('div', { class: 'list-rows lainnya-kaki' }, tautan(dlg, ['pengaturan', 'Pengaturan', 'settings'], 'row-link'))) });
  }
  // judul ringkas topbar (v7 P2-01): kosong selama h1 terlihat (remah dan judul tidak ditulis dua kali); setelah h1 keluar
  // layar, isinya judul h1 (sans, elipsis). Halaman tanpa h1 terlihat memakai label navigasinya.
  let pengamatJudul = null;
  function perbaruiJudulRingkas() {
    const el = document.getElementById('judul-ringkas'); if (!el) return;
    if (pengamatJudul) { pengamatJudul.disconnect(); pengamatJudul = null; }
    const main = document.getElementById('main'); const h1 = main && main.querySelector('h1:not(.visually-hidden)');
    const view = UKP.sekarang().view;
    const judul = h1 ? h1.textContent.trim() : (LABEL_NAV[view] || '');
    const tulis = tampil => { el.classList.add('judul'); el.textContent = tampil ? judul : ''; el.title = tampil ? judul : ''; };
    tulis(!h1);
    if (!h1 || !('IntersectionObserver' in root)) return;
    const tinggiBar = (document.getElementById('topbar') || {}).offsetHeight || 56;
    pengamatJudul = new IntersectionObserver(e => { const x = e[e.length - 1]; tulis(!x.isIntersecting && x.boundingClientRect.top < tinggiBar); }, { rootMargin: '-' + tinggiBar + 'px 0px 0px 0px' });
    pengamatJudul.observe(h1);
  }
  // view yang mengganti h1 setelah data tiba (mis. detail anggota tim) memanggil ini agar judul ringkas ikut berganti
  UKP.perbaruiJudulRingkas = () => { try { perbaruiJudulRingkas(); } catch (e) {} };
  // lencana jumlah tugas Rencana hari ini (belum selesai); dihitung saat senggang dan di-cache per keadaan data
  let kunciRencana = null, nRencana = 0, tundaRencana = null;
  function hitungLencanaRencana() {
    const b = document.getElementById('badge-rencana'); if (!b || !UKP.rencana || typeof UKP.rencana.v1 !== 'function') return;
    const s = UKP.store.get(); const p = s.profil; const hari = U.hariIni();
    const kunci = [hari, p.tanggalUjian, p.tingkat, Object.keys(s.tugasRencana).length, Object.keys(s.topikDibaca).length, s.simulasi.length, s.sesi.length, s.rencanaDasar && s.rencanaDasar.mulai].join('|');
    if (kunci !== kunciRencana) {
      kunciRencana = kunci; nRencana = 0;
      try { const v1 = p.tanggalUjian ? UKP.rencana.v1() : null; if (v1 && v1.minggu) v1.minggu.forEach(w => w.tugas.forEach(t => { if (!t.selesai && t.kapan === hari) nRencana++; })); } catch (e) { nRencana = 0; }
    }
    b.hidden = !nRencana; b.replaceChildren(String(nRencana), h('span', { class: 'visually-hidden' }, ' tugas hari ini'));
  }
  function jadwalLencanaRencana() { clearTimeout(tundaRencana); const jalan = () => { try { hitungLencanaRencana(); } catch (e) {} }; if (root.requestIdleCallback) { tundaRencana = setTimeout(() => root.requestIdleCallback(jalan, { timeout: 800 }), 50); } else tundaRencana = setTimeout(jalan, 120); }
  // Cari dinonaktifkan selama simulasi berjalan (ditentukan dari state, bukan atribut DOM)
  function bukaCari() {
    if (UKP.simulasiBerjalan && UKP.simulasiBerjalan()) { UKP.toast('Pencarian nonaktif selama simulasi.'); return; }
    if (typeof UKP.cari === 'function') UKP.cari();
  }
  UKP.perbaruiNav = function (view) {
    document.querySelectorAll('[data-nav]').forEach(a => { const alias = (a.dataset.alias || '').split(' ').filter(Boolean); const aktif = a.dataset.nav === view || alias.includes(view); if (aktif) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    // Kembali hanya pada rute anak (halaman berkop remah, atau view di luar navigasi puncak)
    const back = document.getElementById('btn-kembali');
    if (back) { const main = document.getElementById('main'); const anak = !!(main && main.querySelector('.page-head .crumb')) || !PUNCAK.has(view); back.hidden = view === 'beranda' || view === 'mulai' || !anak; }
    try {
      const n = UKP.srs.jatuhTempo(UKP.store.get().profil.tingkat).length;
      [['badge-ulang', ' kartu jatuh tempo'], ['badge-ulang-sb', ' kartu jatuh tempo']].forEach(([id, ket]) => { const b = document.getElementById(id); if (b) { b.hidden = !n; b.replaceChildren(n > 99 ? '99+' : String(n), h('span', { class: 'visually-hidden' }, ket)); } });
    } catch (e) {}
    jadwalLencanaRencana();
    const tb = document.getElementById('topbar'); if (tb) tb.hidden = view === 'mulai';
    // onboarding (P2-09): sidebar/rail tidak tampil dan tidak terjangkau Tab selama langkah 1–5
    const sb = document.getElementById('sidebar'); if (sb) { sb.inert = view === 'mulai'; if (view === 'mulai') sb.setAttribute('aria-hidden', 'true'); else sb.removeAttribute('aria-hidden'); }
    perbaruiBarBawah();
  };
  // bar bawah disembunyikan pada onboarding, mode ujian, dan mode fokus (K-08); dipanggil juga saat data-mode berubah
  function perbaruiBarBawah() {
    const bn = document.getElementById('bottomnav'); if (!bn) return;
    const mode = document.body.dataset.mode;
    bn.hidden = UKP.sekarang().view === 'mulai' || mode === 'ujian' || mode === 'fokus';
  }
  // penjaga mode fokus (P2-02): setiap mount rute dimulai tanpa mode fokus; view yang membutuhkannya menyalakannya lagi.
  // UKP.mode.fokus (P1) tidak menimpa mode ujian/sesi; cadangan di bawah berperilaku sama.
  function matikanFokus() {
    try { if (UKP.mode && typeof UKP.mode.fokus === 'function') { UKP.mode.fokus(false); return; } } catch (e) {}
    if (document.body.dataset.mode === 'fokus') delete document.body.dataset.mode;
  }
  // router (core.js) memanggil UKP.views[view](params) untuk setiap mount; view dibungkus sekali saat boot
  function pasangPenjagaFokus() {
    const V = UKP.views || {};
    Object.keys(V).forEach(k => {
      const f = V[k]; if (typeof f !== 'function' || f.__penjagaFokus) return;
      const g = function () { matikanFokus(); return f.apply(this, arguments); };
      Object.assign(g, f); g.__penjagaFokus = true; V[k] = g;
    });
    try { new MutationObserver(perbaruiBarBawah).observe(document.body, { attributes: true, attributeFilter: ['data-mode'] }); } catch (e) {}
  }
  UKP.perbaruiTopbar = function () {
    const s = UKP.store.get(); const chip = document.getElementById('chip-tingkat'); if (!chip) return;
    chip.dataset.tingkat = s.profil.tingkat;
    let hari = null; if (s.profil.tanggalUjian) { const d = U.selisihHari(U.hariIni(), s.profil.tanggalUjian); if (d >= 0) hari = d; }
    // v7 P2-01: chip hanya "UKP A"; hitung mundur cukup di h1 Hari Ini, di sini hanya sebagai tooltip (satu rumah per fakta)
    chip.replaceChildren(h('span', { class: 'chip-target' }, 'UKP ' + s.profil.tingkat));
    const tglUjian = s.profil.tanggalUjian ? new Date(s.profil.tanggalUjian + 'T12:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : null;
    const tip = tglUjian ? 'Ujian ' + tglUjian + (hari == null ? '' : hari === 0 ? ' · hari ini' : ' · ' + hari + ' hari lagi') : 'Tanggal ujian belum diisi';
    chip.dataset.tip = tip;
    chip.setAttribute('aria-label', 'Target UKP Tingkat ' + s.profil.tingkat + (hari != null ? ', ' + (hari === 0 ? 'ujian hari ini' : hari + ' hari menuju ujian') : ', tanggal ujian belum diisi') + '. Ubah target');
    perbaruiTema();
  };

  // pintasan global
  const BUKAN_TEKS = /^(radio|checkbox|button|submit|reset|range|color|file|image|hidden)$/i;
  function mengetik(t) {
    if (!t || t.nodeType !== 1) return false;
    if (t.isContentEditable || t.tagName === 'TEXTAREA') return true;
    return t.tagName === 'INPUT' && !BUKAN_TEKS.test(t.type || 'text');
  }
  // peta pintasan terpadu (INTERAKSI-V6 §4): Global · Soal · Kartu · Simulasi · Sesi · Formulir
  function bukaPintasan() {
    const grup = [
      ['Global', [[['/'], 'Cari (atau saring daftar di halaman ini)'], [[UKP.mac ? '⌘ K' : 'Ctrl K'], 'Cari (juga saat mengetik)'], [['?'], 'Bantuan ini'], [['Alt', 'Z'], 'Jalankan aksi toast (mis. Urungkan)']]],
      ['Soal', [[['A', 'B', 'C', 'D'], 'Pilih opsi jawaban'], [['Y', 'R', 'M'], 'Keyakinan: Yakin / Ragu / Menebak'], [['Enter'], 'Periksa / lanjut'], [['T'], 'Tidak tahu']]],
      ['Kartu', [[['Spasi'], 'Balik kartu'], [['1', '2', '3'], 'Nilai: Lupa / Ingat / Mudah']]],
      ['Simulasi', [[['←', '→'], 'Soal sebelumnya / berikutnya (juga K / J)'], [['R'], 'Tandai ragu'], [['G'], 'Daftar soal']]],
      ['Sesi', [[['Esc'], 'Akhiri sesi (sama dengan Cukup)']]],
      ['Formulir', [[['J', 'K'], 'Baris berikutnya / sebelumnya']]],
    ];
    UKP.dialog({ judul: 'Pintasan keyboard', kelas: 'dlg-pintasan', isi: () => h('div', { class: 'stack' },
      grup.map(([judul, isi]) => h('section', { class: 'stack-sm' }, h('h3', { class: 'eyebrow' }, judul), h('ul', { class: 'bersih small' }, isi.map(([k, v]) => h('li', null, k.map((x, i) => [i ? ' ' : null, h('kbd', null, x)]), ' ', v))))),
      h('p', { class: 'tiny muted' }, 'Pintasan satu huruf tidak berlaku saat mengetik di kolom isian. Pintasan /, ?, simulasi, dan formulir bisa dimatikan di Pengaturan. Pencarian nonaktif selama simulasi.')) });
  }
  document.addEventListener('keydown', e => {
    if (e.defaultPrevented || e.isComposing || e.repeat || document.body.dataset.mode === 'akses') return;
    const key = e.key || '';
    const cariK = (e.ctrlKey || e.metaKey) && !e.altKey && key.toLowerCase() === 'k';
    const satu = !e.ctrlKey && !e.metaKey && !e.altKey && (key === '/' || key === '?') && !mengetik(e.target);
    if (!cariK && !satu) return;
    if (satu && UKP.store.get().pengaturan.pintasan === false) return;
    if (key === '?') { if (document.querySelector('dialog[open]')) return; e.preventDefault(); bukaPintasan(); return; }
    // "/" memfokuskan kolom cari halaman bila ada (mis. Peta formulir, Referensi); Ctrl/Cmd+K tetap membuka Cari global
    if (key === '/' && !document.querySelector('dialog[open]')) { const lokal = document.querySelector('#main [data-cari-lokal]'); if (lokal && lokal.offsetParent !== null) { e.preventDefault(); lokal.focus(); try { lokal.select(); } catch (er) {} return; } }
    if (UKP.simulasiBerjalan && UKP.simulasiBerjalan()) { UKP.toast('Pencarian nonaktif selama simulasi.'); return; }
    e.preventDefault();
    if (!document.querySelector('dialog[open]')) bukaCari();
  });

  // kapabilitas runtime (opsional): downloads
  UKP.downloadsAktif = false;
  UKP.simpanBerkas = async function (nama, isi) { try { const d = await window.claude.use('downloads'); if (!d) throw new Error('tidak tersedia'); await d.save({ filename: nama, data: isi }); UKP.toast('Berkas disiapkan.'); } catch (e) { UKP.toast('Simpan berkas tidak tersedia; gunakan Salin ekspor.'); } };

  // skip link: tetap di halaman ini, fokus ke konten utama (bukan navigasi hash)
  function pasangSkipLink() {
    const skip = document.querySelector('a.skip'); if (!skip || skip.dataset.siap) return;
    skip.dataset.siap = '1';
    skip.addEventListener('click', e => { e.preventDefault(); UKP.fokus(document.getElementById('main')); });
  }
  // minta penyimpanan persisten (Safari/ITP dapat menghapus localStorage); hanya setelah onboarding
  function mintaPenyimpananTetap() {
    try {
      const st = navigator.storage; if (!st || typeof st.persist !== 'function') return;
      (typeof st.persisted === 'function' ? st.persisted() : Promise.resolve(false)).then(sudah => sudah || st.persist()).catch(() => {});
    } catch (e) {}
  }
  const waktuDari = x => { if (x == null || x === '') return 0; if (typeof x === 'number') return isFinite(x) ? x : 0; const s = String(x); const t = Date.parse(s.length === 10 ? s + 'T00:00:00' : s); return isNaN(t) ? 0 : t; };
  // hari sejak ekspor terakhir (atau sejak mulai memakai, bila belum pernah) bila lebih dari 14 hari; selain itu 0
  function umurEkspor(s) {
    if (!s.profil.onboardingSelesai || !(s.jawaban.length || s.sesi.length)) return 0;
    if (s.pengingatEksporTerakhir === U.hariIni()) return 0;
    const basis = waktuDari(s.eksporTerakhir) || waktuDari(s.profil.dibuat); if (!basis) return 0;
    const hari = Math.floor((Date.now() - basis) / 86400000);
    return hari > 14 ? hari : 0;
  }
  const bolehMengingatkan = () => { const v = UKP.sekarang().view; return v !== 'mulai' && v !== 'sesi' && !(UKP.simulasiBerjalan && UKP.simulasiBerjalan()); };

  // ---------- offline (PWA) ----------
  // Service worker (sw.js) menyimpan semua aset (HTML, CSS, JS, data materi ±5 MB, ikon) di Cache Storage sehingga aplikasi tetap
  // bisa dibuka tanpa internet, mis. di pesawat. Didaftarkan hanya bila 'serviceWorker' in navigator dan halaman dibuka lewat http(s):
  // file:// tidak mendukung service worker, dan versi berkas tunggal (window.UKP_OFFLINE) sudah memuat semuanya sendiri.
  // Artifact claude.ai: pendaftaran memakai jalur relatif 'sw.js' dengan scope './' (sw.js, manifest.webmanifest, dan icons/* harus ikut
  // dipublikasikan sebagai berkas pendamping). Halaman Artifact berjalan di iframe ber-sandbox dengan origin terpisah, jadi browser bisa
  // menolak: SecurityError saat membaca navigator.serviceWorker, origin/skema tidak diizinkan, atau sw.js tidak ada. Semua galat ditangkap
  // diam-diam dan hanya dicatat lewat console.debug; aplikasi tetap berjalan normal, hanya tanpa cache offline. (claude.ai sendiri butuh
  // internet; untuk dipakai di pesawat, buka dari hosting statis/terpasang sebagai aplikasi, atau versi berkas tunggal.)
  // Selama halaman terbuka, semua materi sudah termuat di memori, jadi putus koneksi di tengah jalan tidak mengganggu latihan.
  const KUNCI_OFFLINE_SIAP = 'ukp.offlineSiap';
  const catatSW = (...a) => { try { console.debug('[UKP offline]', ...a); } catch (e) {} };
  const daring = () => navigator.onLine !== false;
  const bolehToastOffline = () => !(UKP.simulasiBerjalan && UKP.simulasiBerjalan());
  // jalankan f saat toast boleh tampil (bukan selama simulasi); bila belum, coba lagi pada render berikutnya
  function saatBoleh(f) { if (bolehToastOffline()) { f(); return; } document.addEventListener('ukp:render', () => saatBoleh(f), { once: true }); }
  // toast offline tidak muncul selama simulasi (mode ujian); status tetap terbaca dari pill setelahnya
  const toastOffline = () => { if (!daring() && bolehToastOffline()) UKP.toast('Anda offline — materi tetap tersedia.', { nada: 'info' }); };
  function perbaruiKoneksi(e) {
    const pill = document.getElementById('pill-offline'); if (pill) pill.hidden = daring();
    if (!e) return;
    if (e.type === 'offline') toastOffline();
    else if (e.type === 'online' && daring()) UKP.umumkan('Koneksi internet tersambung kembali.');
  }
  function umumkanSiapOffline() {
    try { if (localStorage.getItem(KUNCI_OFFLINE_SIAP)) return; } catch (e) { return; }
    saatBoleh(() => {
      try { if (localStorage.getItem(KUNCI_OFFLINE_SIAP)) return; localStorage.setItem(KUNCI_OFFLINE_SIAP, new Date().toISOString()); } catch (e) { return; }
      UKP.toast('Siap dipakai offline. Aplikasi tetap bisa dibuka tanpa internet.', { nada: 'ok', ms: 6000 });
    });
  }
  // host Artifact claude.ai, atau halaman apa pun yang dibingkai (iframe): bukan tempat service worker
  const hostArtifact = () => { try { if (/(^|\.)(claudeusercontent\.com|claude\.ai)$/i.test(location.hostname)) return true; return root.top !== root; } catch (e) { return true; } };
  function bersihkanSW() {
    let sw; try { sw = navigator.serviceWorker; } catch (e) { return; }
    if (!sw || typeof sw.getRegistrations !== 'function') return;
    const adaKontrol = !!sw.controller;
    const hapusCache = () => (root.caches && typeof caches.keys === 'function')
      ? caches.keys().then(ks => Promise.all(ks.filter(k => /^ukp-/.test(k)).map(k => caches.delete(k)))) : Promise.resolve();
    sw.getRegistrations().then(rs => Promise.all(rs.map(r => r.unregister()))).catch(() => {}).then(hapusCache).catch(() => {})
      .then(() => { if (adaKontrol) catatSW('service worker versi lama dilepas; muat berikutnya langsung dari jaringan'); });
  }
  function pasangOffline() {
    root.addEventListener('online', perbaruiKoneksi);
    root.addEventListener('offline', perbaruiKoneksi);
    perbaruiKoneksi();
    if (!daring()) setTimeout(toastOffline, 900);
    if (root.UKP_OFFLINE || !/^https?:$/.test(location.protocol) || !('serviceWorker' in navigator)) return;
    // Halaman Artifact claude.ai (iframe ber-sandbox di *.claudeusercontent.com) tidak memakai service worker: host-nya menolak skrip SW
    // (HTTP 403) dan halaman itu memang butuh internet. Pendaftaran dilewati, dan sisa pendaftaran/cache dari versi lama dibersihkan
    // agar halaman selalu dimuat segar dari jaringan (sw.js versi ini juga membersihkan diri bila sempat terpasang di host tersebut).
    if (hostArtifact()) { bersihkanSW(); return; }
    const daftar = () => {
      let sw;
      try { sw = navigator.serviceWorker; } catch (e) { catatSW('service worker tidak tersedia di konteks ini', e && e.message); return; }
      if (!sw || typeof sw.register !== 'function') return;
      let muatUlangDiminta = false, sudahMuatUlang = false;
      const muatUlang = () => { if (sudahMuatUlang) return; sudahMuatUlang = true; location.reload(); };
      // versi baru terpasang dan menunggu: tawarkan; tombol → SKIP_WAITING → controllerchange → muat ulang
      const tawarkan = reg => {
        if (!reg.waiting) return;
        saatBoleh(() => {
          const w = reg.waiting; if (!w) return;
          UKP.toast('Versi baru tersedia.', { nada: 'info', ms: 15000, lintasRute: true, aksi: { label: 'Muat ulang', onclick: () => {
            muatUlangDiminta = true;
            try { w.postMessage({ type: 'SKIP_WAITING' }); } catch (e) { catatSW('pesan SKIP_WAITING gagal', e); }
            setTimeout(muatUlang, 4000); // cadangan bila controllerchange tidak datang
          } } });
        });
      };
      try {
        sw.addEventListener('controllerchange', () => { if (muatUlangDiminta) muatUlang(); });
        sw.register('sw.js', { scope: './' }).then(reg => {
          if (reg.waiting && (sw.controller || reg.active)) tawarkan(reg);
          reg.addEventListener('updatefound', () => {
            const baru = reg.installing; if (!baru) return;
            const adaLama = !!(sw.controller || reg.active);
            baru.addEventListener('statechange', () => { if (baru.state === 'installed' && adaLama) tawarkan(reg); });
          });
          // aplikasi yang lama terbuka: cek versi baru saat kembali ke tab (paling sering sekali per jam)
          let cekTerakhir = Date.now();
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState !== 'visible' || !daring() || Date.now() - cekTerakhir < 3600000) return;
            cekTerakhir = Date.now(); reg.update().catch(e => catatSW('cek pembaruan gagal', e && e.message));
          });
          return sw.ready.then(r => { if (r && r.active) umumkanSiapOffline(); });
        }).catch(e => catatSW('pendaftaran service worker gagal; aplikasi berjalan tanpa cache offline', e && e.message));
      } catch (e) { catatSW('pendaftaran service worker gagal', e && e.message); }
    };
    if (document.readyState === 'complete') setTimeout(daftar, 0); else root.addEventListener('load', daftar, { once: true });
  }

  // boot
  function pasangBannerAkun() {
    const ada = document.querySelector('[data-banner-akun-tim]');
    const i = UKP.tim && typeof UKP.tim.info === 'function' ? UKP.tim.info() : {};
    if (!i.akunBeda || UKP.sekarang().view !== 'beranda' || typeof UKP.timBannerAkun !== 'function') { if (ada) ada.remove(); return; }
    if (ada) return;
    const page = document.querySelector('#main .page') || document.getElementById('main'); if (!page) return;
    const b = UKP.timBannerAkun(); if (!b) return;
    b.setAttribute('data-banner-akun-tim', '');
    const kop = page.querySelector(':scope > .page-head');
    if (kop) kop.after(b); else page.prepend(b);
  }
  function boot() {
    document.documentElement.lang = 'id';
    UKP.store.get(); UKP.terapkanTema(); if (UKP.toast.siapkan) UKP.toast.siapkan(); bangunShell(); UKP.perbaruiTopbar();
    pasangPenjagaFokus();
    pasangSkipLink();
    try { pasangOffline(); } catch (e) { catatSW('pemasangan mode offline gagal', e && e.message); }
    // laporan mingguan otomatis sebelum render pertama (banner Hari Ini): Jumat–Minggu → minggu ini, Senin–Kamis → minggu lalu
    if (UKP.store.get().profil.onboardingSelesai && UKP.belajar && typeof UKP.belajar.laporanMingguan === 'function') { try { UKP.belajar.laporanMingguan(); } catch (e) { console.error(e); } }
    UKP.mulaiDariHash();
    // room tim (js/views-ruang.js): melanjutkan room tersimpan dan memasang pengamat global; diam bila modul tidak ada
    try { if (UKP.ruangUI && typeof UKP.ruangUI.boot === 'function') UKP.ruangUI.boot(); } catch (e) { console.error(e); }
    document.addEventListener('ukp:render', () => { UKP.perbaruiTopbar(); perbaruiJudulRingkas(); });
    perbaruiJudulRingkas();
    // penjaga muat (index.html): render pertama selesai; berkas yang gagal dimuat sebelum ini → tawarkan muat ulang (materi bisa tidak lengkap)
    if (root.__ukpMuat && typeof root.__ukpMuat.siap === 'function') {
      root.__ukpMuat.siap();
      const gagal = typeof root.__ukpMuat.galat === 'function' ? root.__ukpMuat.galat().filter(g => /^Berkas gagal/.test(g)) : [];
      if (gagal.length) setTimeout(() => UKP.toast(gagal.length + ' berkas materi gagal dimuat; sebagian materi mungkin tidak tampil.', { nada: 'warn', ms: 15000, lintasRute: true, aksi: { label: 'Muat ulang', onclick: () => location.reload() } }), 3000);
    }
    if (window.claude && typeof window.claude.use === 'function') { UKP.tutor.init(); window.claude.use('downloads').then(d => { UKP.downloadsAktif = !!d; }).catch(() => {}); }
    else { UKP.tutor.siap = true; }
    // dasbor tim (js/tim.js): sambung di latar (use() bisa sampai 10 dtk), lalu kirim bila ada perubahan sejak kiriman terakhir; tidak menunda render
    if (UKP.tim && typeof UKP.tim.siap === 'function') setTimeout(() => {
      UKP.tim.siap().then(c => { if (c) UKP.tim.kirimRingkasan(); }).catch(() => {});
      if (typeof UKP.tim.bolehDasbor === 'function') UKP.tim.bolehDasbor().then(aturNavTim).catch(() => {});
    }, 0);
    // server tim: tersambung belakangan (deteksi ulang) atau sesi berakhir → navigasi Dasbor tim dihitung ulang;
    // progres milik akun server lain (perangkat bersama) → banner di Beranda (js/views-tim.js UKP.timBannerAkun)
    if (UKP.tim) {
      let srvLama = null, akunBedaLama = null;
      document.addEventListener('ukp:tim', e => {
        const d = (e && e.detail) || {};
        if (d.server !== srvLama) { srvLama = d.server; if (typeof UKP.tim.bolehDasbor === 'function') UKP.tim.bolehDasbor().then(aturNavTim).catch(() => {}); }
        if ((d.akunBeda || null) !== akunBedaLama) { akunBedaLama = d.akunBeda || null; pasangBannerAkun(); }
      });
      document.addEventListener('ukp:render', pasangBannerAkun);
    }
    const s = UKP.store.get();
    if (s.profil.onboardingSelesai) mintaPenyimpananTetap();
    // pengingat dalam aplikasi, berurutan agar toast tidak saling menimpa
    const pesan = [];
    if (s.profil.onboardingSelesai && !s.hadir[U.hariIni()] && U.jamBelajar() >= 18 && UKP.sekarang().view !== 'beranda') pesan.push(() => UKP.toast('Sesi hari ini belum tercatat. Kilat 5 menit pun cukup.'));
    const umur = umurEkspor(s);
    if (umur) pesan.push(() => {
      const s2 = UKP.store.get(); if (s2.pengingatEksporTerakhir === U.hariIni()) return;
      s2.pengingatEksporTerakhir = U.hariIni(); UKP.store.save();
      UKP.toast((s2.eksporTerakhir ? 'Sudah ' + umur + ' hari sejak ekspor terakhir.' : 'Progres belum pernah diekspor.') + ' Simpan cadangan di Pengaturan › Data & pindah perangkat.', 8000);
    });
    pesan.forEach((f, i) => setTimeout(() => { if (bolehMengingatkan()) f(); }, 1500 + i * 4500));
  }

  // gerbang akses tim (js/akses.js): nama + sandi tim, sisi klien. Bukan keamanan kuat; lihat README › Akses tim.
  function layarMasuk() {
    const K = root.UKP_AKSES; const A = UKP.akses;
    UKP.store.get(); UKP.terapkanTema();
    document.body.dataset.mode = 'akses';
    let salah = 0; let sibuk = false;
    const lama = (A.sesi() && A.sesi().nama) || (UKP.store.get().profil.nama || '');
    const inNama = h('input', { class: 'input', id: 'akses-nama', type: 'text', autocomplete: 'name', required: true, minlength: 2, maxlength: 40, value: lama, 'aria-describedby': 'akses-nama-bantu' });
    const inSandi = h('input', { class: 'input', id: 'akses-sandi', type: 'password', autocomplete: 'current-password', required: true });
    const lihat = h('button', { type: 'button', class: 'btn btn-ghost akses-lihat', 'aria-pressed': 'false', 'aria-controls': 'akses-sandi', onclick: () => {
      const buka = inSandi.type === 'password'; inSandi.type = buka ? 'text' : 'password'; lihat.setAttribute('aria-pressed', String(buka)); lihat.textContent = buka ? 'Sembunyikan' : 'Lihat'; inSandi.focus(); } }, 'Lihat');
    const galat = h('p', { class: 'galat', id: 'akses-galat', role: 'alert', hidden: true });
    const tombol = h('button', { type: 'submit', class: 'btn btn-primary akses-kirim' }, 'Masuk');
    const tampilGalat = (teks, el) => { galat.textContent = teks; galat.hidden = false; [inNama, inSandi].forEach(x => x.removeAttribute('aria-invalid')); if (el) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', (el === inNama ? 'akses-nama-bantu ' : '') + 'akses-galat'); el.focus(); } };
    const form = h('form', { class: 'akses-form', novalidate: true, onsubmit: async e => {
      e.preventDefault(); if (sibuk) return;
      const nama = inNama.value.replace(/\s+/g, ' ').trim();
      if (nama.length < 2 || nama.length > 40) { tampilGalat('Isi nama Anda (2–40 karakter).', inNama); return; }
      if (!inSandi.value) { tampilGalat('Isi sandi tim.', inSandi); return; }
      sibuk = true; tombol.disabled = true;
      const hasil = await A.hashSandi(inSandi.value, K.salt);
      if (hasil !== K.sandiHash) {
        salah++;
        tampilGalat('Sandi tim salah.', inSandi); inSandi.select();
        if (salah >= 5) { tombol.textContent = 'Tunggu sebentar…'; await new Promise(r => setTimeout(r, 1500)); tombol.textContent = 'Masuk'; }
        sibuk = false; tombol.disabled = false; return;
      }
      A.simpan(nama);
      // nama di gerbang selalu menjadi nama sapaan (anggota lain di perangkat yang sama tidak mewarisi nama sebelumnya)
      const s = UKP.store.get(); if (s.profil.nama !== nama) { s.profil.nama = nama; UKP.store.save(); }
      delete document.body.dataset.mode;
      document.getElementById('main').replaceChildren();
      boot();
    } },
      h('div', { class: 'field' }, h('label', { for: 'akses-nama' }, 'Nama Anda'), inNama, h('span', { class: 'bantu', id: 'akses-nama-bantu' }, 'Dipakai untuk sapaan di Beranda dan Pengaturan.')),
      h('div', { class: 'field' }, h('label', { for: 'akses-sandi' }, 'Sandi tim'), h('div', { class: 'akses-sandi-baris' }, inSandi, lihat)),
      galat, tombol);
    const main = document.getElementById('main');
    main.replaceChildren(h('div', { class: 'akses' }, h('section', { class: 'card akses-kartu', 'aria-labelledby': 'akses-judul' },
      h('div', { class: 'akses-merek' }, h('span', { class: 'mark', 'aria-hidden': 'true' }, 'UKP'), h('span', { class: 'brand-teks' }, 'Pelatih UKP')),
      h('h1', { id: 'akses-judul' }, 'Masuk'),
      h('p', { class: 'muted' }, K.pesan || 'Masukkan nama Anda dan sandi tim.'),
      form)));
    document.title = 'Masuk · Pelatih UKP';
    // penjaga muat (index.html): layar masuk sudah tampil → jangan tampilkan panel pemulihan
    if (root.__ukpMuat && typeof root.__ukpMuat.siap === 'function') root.__ukpMuat.siap();
    setTimeout(() => (inNama.value ? inSandi : inNama).focus(), 0);
  }
  UKP.keluarAkses = () => { if (UKP.akses) UKP.akses.keluar(); location.hash = ''; location.reload(); };
  function mulai() { if (UKP.akses && UKP.akses.perluMasuk()) layarMasuk(); else boot(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mulai); else mulai();
})(typeof window !== 'undefined' ? window : globalThis);
