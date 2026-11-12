/* MABAR UKP — Kalkulator, Rencana (v1), Kemajuan, Referensi, Info Ujian, Etika & Profesi, Pengaturan, Peta formulir, Lembar angka, Tutor AI, Pencarian */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten; const L = UKP.belajar;

  // ================= KALKULATOR =================
  const tabelWrap = (label, tabel) => UKP.c.tabelWrap ? UKP.c.tabelWrap(label, tabel) : h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': label }, tabel);
  const simBerjalan = () => (UKP.simulasiBerjalan ? UKP.simulasiBerjalan() : false);
  // ---------- v7 (DESAIN-V7 §4): komponen Kontrak v7 milik P1 bila ada; cadangan lokal merender markup kontrak yang sama ----------
  const pakaiC = (nama, cadangan) => (...a) => (typeof UKP.c[nama] === 'function' ? UKP.c[nama] : cadangan)(...a);
  const sect = pakaiC('sect', o => { const id = o.id || U.id('sect'); return h('section', { class: 'sect' + (o.ganda ? ' ganda' : ''), 'aria-labelledby': id }, h('div', { class: 'sect-head' }, h('h2', { id }, o.judul), o.meta != null ? h('span', { class: 'meta' }, o.meta) : null, o.aksi || null), o.isi); });
  const langkahBerikut = pakaiC('langkahBerikut', (items, o) => { o = o || {};
    return h('ol', { class: 'langkah-berikut' + (o.status ? ' ceklis-mulai' : ''), 'aria-label': o.label || 'Langkah berikutnya' }, items.filter(Boolean).map((x, i) => {
      const a = x.aksi; const kelas = 'btn' + (a && a.gaya === 'primer' ? ' btn-primary' : a && a.gaya === 'hantu' ? ' btn-ghost' : '');
      const tombol = !a || x.status === 'nanti' ? null : a.view ? UKP.link(a.teks, a.view, a.params, kelas) : h('button', { type: 'button', class: kelas, onclick: a.onclick || null }, a.teks);
      return h('li', { 'data-status': x.status || null }, h('span', { class: 'nomor', 'aria-hidden': 'true' }, String(i + 1)), h('div', { class: 'isi' }, h('span', { class: 'judul' }, x.judul), x.meta ? h('span', { class: 'meta' }, x.meta) : null), tombol);
    })); });
  // menu "Aksi lain" (K-15): details.menu-lebih > summary.icon-btn + .menu-lebih-isi; tertutup dengan Esc, klik di luar, dan setelah memilih
  const menuLebih = pakaiC('menuLebih', o => { o = o || {};
    const det = h('details', { class: 'menu-lebih' }); const tutup = () => { if (det.open) { det.open = false; } };
    const sum = h('summary', { class: 'icon-btn', 'aria-label': o.label || 'Aksi lain', 'data-tip': o.label || 'Aksi lain' }, UKP.icon('titik-tiga', null, true));
    const isi = h('div', { class: 'menu-lebih-isi', role: 'menu' }, (o.item || []).map(x => h('button', { type: 'button', role: 'menuitem', class: 'btn btn-ghost btn-sm', onclick: () => { tutup(); if (x.onclick) x.onclick(); else if (x.view) UKP.go(x.view, x.params || {}); } }, x.ikon ? UKP.icon(x.ikon, null, true) : null, x.teks)));
    det.append(sum, isi);
    det.addEventListener('keydown', e => { if (e.key === 'Escape' && det.open) { e.preventDefault(); tutup(); sum.focus(); } });
    document.addEventListener('click', e => { if (det.open && !det.contains(e.target)) tutup(); });
    return det; });
  // ---------- K-12: tanggal "15/12/2026" dan jam "19.30" (nilai internal tetap ISO dan HH:MM) ----------
  const z2 = n => String(n).padStart(2, '0');
  const isoKeTampil = iso => /^\d{4}-\d{2}-\d{2}$/.test(iso || '') ? iso.slice(8, 10) + '/' + iso.slice(5, 7) + '/' + iso.slice(0, 4) : '';
  // '' = kosong; null = tidak dikenali; selain itu ISO. Diterima: 15/12/2026, 15-12-2026, 15.12.2026, 15122026, tahun dua digit
  function uraiTanggal(t) {
    t = String(t == null ? '' : t).trim(); if (!t) return '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
    let d, m, y; const cocok = t.match(/^(\d{1,2})\s*[\/.\-]\s*(\d{1,2})\s*[\/.\-]\s*(\d{2}|\d{4})$/);
    if (cocok) { d = +cocok[1]; m = +cocok[2]; y = cocok[3]; } else if (/^\d{8}$/.test(t)) { d = +t.slice(0, 2); m = +t.slice(2, 4); y = t.slice(4); } else if (/^\d{6}$/.test(t)) { d = +t.slice(0, 2); m = +t.slice(2, 4); y = t.slice(4); } else return null;
    y = y.length === 2 ? 2000 + Number(y) : Number(y);
    const dt = new Date(y, m - 1, d); if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null;
    return y + '-' + z2(m) + '-' + z2(d);
  }
  const inputTanggal = pakaiC('inputTanggal', o => {
    o = o || {}; let nilai = /^\d{4}-\d{2}-\d{2}$/.test(o.nilai || '') ? o.nilai : null;
    const asli = h('input', { type: 'date', class: 'visually-hidden', tabindex: '-1', 'aria-hidden': 'true', min: o.min || null, max: o.max || null, value: nilai || '' });
    const inp = h('input', { class: 'input', type: 'text', inputmode: 'numeric', autocomplete: 'off', placeholder: 'hh/bb/tttt', id: o.id || null, value: isoKeTampil(nilai), 'aria-describedby': o.describedby || null, style: { fontVariantNumeric: 'tabular-nums' } });
    const galat = pesan => { if (pesan) inp.setAttribute('aria-invalid', 'true'); else inp.removeAttribute('aria-invalid'); if (o.onGalat) o.onGalat(pesan || null); };
    function terap(v) {
      if (v === null) { galat('Tanggal tidak dikenali. Tulis hari/bulan/tahun, misalnya 15/12/2026.'); return; }
      if (v && o.min && v < o.min) { galat('Tanggal sudah lewat. Pilih hari ini atau sesudahnya.'); return; }
      if (v && o.max && v > o.max) { galat('Tanggal terlalu jauh. Pilih tanggal sampai ' + isoKeTampil(o.max) + '.'); return; }
      if (inp.hasAttribute('aria-invalid')) galat(null);
      inp.value = isoKeTampil(v); asli.value = v || '';
      const baru = v || null; if (baru !== nilai) { nilai = baru; if (o.onUbah) o.onUbah(nilai); }
    }
    inp.addEventListener('blur', () => terap(uraiTanggal(inp.value)));
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); terap(uraiTanggal(inp.value)); } });
    asli.addEventListener('change', () => { terap(asli.value || ''); inp.focus(); });
    const tombol = h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Buka kalender', onclick: () => { try { if (typeof asli.showPicker === 'function') asli.showPicker(); else asli.click(); } catch (e) { inp.focus(); } } }, UKP.icon('kalender'));
    const el = h('div', { class: 'input-grup input-tanggal' }, inp, tombol, asli);
    el.nilai = () => nilai; el.setNilai = iso => { nilai = /^\d{4}-\d{2}-\d{2}$/.test(iso || '') ? iso : null; inp.value = isoKeTampil(nilai); asli.value = nilai || ''; inp.removeAttribute('aria-invalid'); }; el.input = inp;
    return el;
  });
  function uraiJam(t) {
    t = String(t == null ? '' : t).trim().replace(/\s+/g, ''); let jj, mm;
    const c = t.match(/^(\d{1,2})[.:](\d{2})$/);
    if (c) { jj = +c[1]; mm = +c[2]; } else if (/^\d{3,4}$/.test(t)) { jj = +t.slice(0, t.length - 2); mm = +t.slice(-2); } else if (/^\d{1,2}$/.test(t)) { jj = +t; mm = 0; } else return null;
    return jj > 23 || mm > 59 ? null : z2(jj) + ':' + z2(mm);
  }
  const inputJam = pakaiC('inputJam', o => {
    o = o || {}; let nilai = /^\d{2}:\d{2}$/.test(o.nilai || '') ? o.nilai : null;
    const inp = h('input', { class: 'input', type: 'text', inputmode: 'numeric', autocomplete: 'off', placeholder: 'jj.mm', id: o.id || null, value: nilai ? nilai.replace(':', '.') : '', 'aria-describedby': o.describedby || null, style: { fontVariantNumeric: 'tabular-nums', maxWidth: '9rem' } });
    const terap = () => { const v = uraiJam(inp.value); if (!v) { inp.setAttribute('aria-invalid', 'true'); if (o.onGalat) o.onGalat('Jam tidak dikenali. Tulis jam 24 jam, misalnya 19.30.'); return; }
      if (inp.hasAttribute('aria-invalid')) { inp.removeAttribute('aria-invalid'); if (o.onGalat) o.onGalat(null); }
      inp.value = v.replace(':', '.'); if (v !== nilai) { nilai = v; if (o.onUbah) o.onUbah(v); } };
    inp.addEventListener('blur', terap); inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); terap(); } });
    inp.nilai = () => nilai; inp.input = inp;
    return inp;
  });
  // teks bantu tanggal ujian: "Selasa · 43 hari lagi"
  const bantuHari = iso => { if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return ''; const hari = new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', { weekday: 'long' }); const d = U.selisihHari(U.hariIni(), iso); return hari + ' · ' + (d > 0 ? d + ' hari lagi' : d === 0 ? 'hari ini' : 'sudah lewat ' + (-d) + ' hari'); };
  // galat isian di bawah kontrol: pesan → tampil + aria-describedby; null → sembunyi
  const pasangGalat = (elGalat, ctl, idBantu, idGalat) => pesan => { if (pesan) { elGalat.replaceChildren(UKP.icon('peringatan', null, true), h('span', null, pesan)); elGalat.hidden = false; ctl.setAttribute('aria-describedby', idBantu + ' ' + idGalat); } else { elGalat.hidden = true; ctl.setAttribute('aria-describedby', idBantu); } };
  // ---------- urai isian angka kalkulator ----------
  // tanda minus Unicode (− U+2212, – U+2013, — U+2014) diperlakukan sebagai '-'
  const normalMinus = s => String(s == null ? '' : s).replace(/[−–—]/g, '-');
  const FMT_ISIAN = { maximumFractionDigits: 6 };
  const tampilUang = n => Number(n).toLocaleString('id-ID', FMT_ISIAN);
  // gaya Indonesia: titik ribuan, koma desimal; awalan/akhiran mata uang (Rp, €, USD, …) dan spasi diabaikan.
  // Kosong → null; teks lain (mis. "12abc", "1,2,3", "satu juta") → NaN (tidak sah, bukan nol).
  function parseUang(s) {
    let t = normalMinus(s).trim(); if (t === '') return null;
    t = t.replace(/^(-?)\s*(?:rp\.?|idr|€|eur|usd|sgd|jpy|\$)\s*/i, '$1').replace(/\s*(?:rp|idr|€|eur|usd|sgd|jpy)$/i, '').replace(/\s+/g, '');
    if (!/^-?[\d.,]*\d[\d.,]*$/.test(t) || (t.match(/,/g) || []).length > 1) return NaN;
    // satu titik tanpa koma yang tidak diikuti tepat 3 digit = titik desimal (mis. kurs 1.0567); selain itu titik = pemisah ribuan
    if (/^-?\d+\.\d+$/.test(t) && !/^-?\d+\.\d{3}$/.test(t)) return Number(t);
    const n = Number(t.replace(/\./g, '').replace(',', '.')); return isNaN(n) ? NaN : n;
  }
  // persen/angka: koma atau titik desimal, tanda % di akhir boleh; kosong → null; tidak sah → NaN
  function parseDesimal(s) {
    const t = normalMinus(s).trim().replace(/\s+/g, '').replace(/%$/, ''); if (t === '') return null;
    if (!/^-?(\d+([.,]\d+)?|[.,]\d+)$/.test(t)) return NaN;
    return Number(t.replace(',', '.'));
  }
  // kueri saringan disimpan ke entri riwayat (debounce 200 ms) agar tetap ada saat Kembali; hanya selama halaman itu masih tampil
  function simpanKueri(view, input) {
    let t = null;
    input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { if (input.isConnected && UKP.perbaruiParams) UKP.perbaruiParams({ q: input.value.trim() || null }, view); }, 200); });
  }
  // imbuhan mata uang isian uang: "Rp" kecuali label menyebut valuta lain (EUR, valuta asing) atau kalkulator lintas mata uang (gmt)
  function imbuhUang(kal, i) {
    const lbl = String(i.label || '');
    if (/\bEUR\b|€/.test(lbl)) return '€';
    if (/valuta asing|\bvalas\b|bukan rupiah/i.test(lbl) || kal.jenis === 'gmt') return null;
    return 'Rp';
  }
  // pendamping input tanggal kosong (placeholder bawaan peramban mengikuti locale)
  const BANTU_TGL_KOSONG = 'Contoh: 15/12/2026';
  // panel lengket (hasil kalkulator, parameter Rencana) hanya lengket bila isinya muat di layar; bila tidak, ikut menggulir
  // bersama halaman agar aksi di dasar panel tidak terpotong. opsi.inline: timpa juga gaya lengket bawaan CSS (bukan lewat .lengket).
  function lengketBilaMuat(el, opsi) {
    opsi = opsi || {};
    const ruang = () => { const tb = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--topbar-h')) || 56; return (root.innerHeight || 800) - tb - 32; };
    let ro = null;
    const lepas = () => { if (ro) ro.disconnect(); root.removeEventListener('resize', cek); };
    const cek = () => {
      if (!el.isConnected) { if (dipasang) lepas(); return; }
      dipasang = true;
      const muat = el.scrollHeight <= ruang() + 1;
      el.classList.toggle('lengket', muat);
      if (opsi.inline) { el.style.position = muat ? '' : 'static'; el.style.maxHeight = muat ? '' : 'none'; el.style.overflow = muat ? '' : 'visible'; }
    };
    let dipasang = false;
    const amati = () => { if (!('ResizeObserver' in root)) return; if (ro) ro.disconnect(); ro = new ResizeObserver(cek); Array.from(el.children).forEach(c => ro.observe(c)); };
    root.addEventListener('resize', cek, { passive: true });
    requestAnimationFrame(() => { amati(); cek(); });
    return { cek, amati };
  }
  const angkaDariTeks = t => { const m = String(t == null ? '' : t).replace(/[−–]/g, '-').match(/-?\s?(?:Rp|€|USD|EUR)?\s?-?\d[\d.]*(?:,\d+)?/i); return m ? parseUang(m[0].replace(/\s+/g, '')) : NaN; };
  UKP.views.kalkulator = function (params) {
    params = params || {}; const daftar = UKP.kalkulator || [];
    if (simBerjalan()) return h('div', { class: 'page' }, UKP.c.kop({ judul: 'Kalkulator nonaktif selama simulasi', lead: 'Seperti ujian sesungguhnya, kalkulator pajak tidak tersedia sampai simulasi dikirim.', aksi: h('button', { class: 'btn btn-primary', onclick: () => UKP.go('simulasi', { jalan: true }) }, 'Kembali ke simulasi') }));
    const kal = params.jenis ? daftar.find(k => k.jenis === params.jenis) : null;
    if (!kal) {
      const page = h('div', { class: 'page lebar' });
      page.appendChild(UKP.c.kop({ judul: 'Kalkulator pajak', lead: 'Hitung cepat dengan jejak hitung, asumsi, dan dasar hukum. Mesin yang sama dipakai untuk memeriksa kunci soal hitung.', meta: daftar.length ? [UKP.c.pill(daftar.length + ' kalkulator', null, 'calc'), UKP.c.pill('mode tebak dulu', 'nila')] : null }));
      if (!daftar.length) page.appendChild(UKP.c.kosong('Mesin kalkulator belum dimuat', 'Berkas js/kalkulator.js belum tersedia.'));
      const grup = {}; daftar.forEach(k => { (grup[k.kelompok] = grup[k.kelompok] || []).push(k); });
      const kartuKal = (k, kode) => UKP.c.kartu({ judul: k.nama, view: 'kalkulator', params: { jenis: k.jenis }, kode: kode || null,
        isi: h('p', { class: 'small muted' }, k.deskripsi),
        kaki: [h('span', { class: 'chip-row' }, UKP.c.pill(k.input.length + ' isian', null, 'calc'), k.verifikasi === '◐' ? UKP.c.verif('◐', k.peringatan) : null), h('span', { class: 'tautan-kop', 'aria-hidden': 'true' }, 'Buka', UKP.icon('chevron-kanan', null, true))] });
      for (const kode of UKP.urutanKelompok) { if (!grup[kode]) continue; page.appendChild(h('section', { class: 'sect', 'aria-label': kode + ' ' + K.namaKelompok(kode) }, h('div', { class: 'eyebrow' }, kode + ' · ' + K.namaKelompok(kode)), h('div', { class: 'card-grid dua rata' }, grup[kode].map(k => kartuKal(k, kode))))); }
      const lain = daftar.filter(k => !UKP.urutanKelompok.includes(k.kelompok)); if (lain.length) page.appendChild(h('div', { class: 'card-grid dua rata' }, lain.map(k => kartuKal(k, null))));
      return page;
    }
    const page = h('div', { class: 'page lebar halaman-kalkulator' });
    page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Kalkulator', view: 'kalkulator' }, { teks: kal.kelompok }], judul: kal.nama, lead: kal.deskripsi, ringkas: true,
      meta: [UKP.c.pill(kal.kelompok, null, null, { 'data-tip': kal.kelompok + ' · ' + K.namaKelompok(kal.kelompok) }), UKP.c.pill(kal.input.length + ' isian', null, 'calc'), kal.verifikasi === '◐' ? UKP.c.verif('◐', kal.peringatan) : null] }));
    if (kal.verifikasi === '◐') page.appendChild(UKP.c.banner('Perlu verifikasi: ' + (kal.peringatan || 'sebagian tabel/tarif belum dicek ke teks resmi.'), 'warn'));
    // params.input (mis. dari studi kasus: kasus.kalkulatorInput) = nilai awal; dinormalkan per tipe, kunci tak dikenal diabaikan
    const awal = params.input && typeof params.input === 'object' && !Array.isArray(params.input) ? params.input : null;
    function nilaiAwal(i, v) {
      if (v == null || v === '') return null;
      if (i.tipe === 'boolean') return v === true || v === 'true' || v === 1;
      if (i.tipe === 'uang') { const n = typeof v === 'number' ? v : parseUang(v); return Number.isFinite(n) ? n : null; }
      if (i.tipe === 'persen' || i.tipe === 'angka') { const n = typeof v === 'number' ? v : parseDesimal(v); return Number.isFinite(n) ? n : null; }
      if (i.tipe === 'pilihan') { const o = (i.opsi || []).find(x => String(x.nilai) === String(v)); return o ? o.nilai : (i.default === undefined ? null : i.default); }
      return String(v);
    }
    const nilai = {}; kal.input.forEach(i => { nilai[i.key] = awal && Object.prototype.hasOwnProperty.call(awal, i.key) && awal[i.key] !== undefined ? nilaiAwal(i, awal[i.key]) : (i.default === undefined ? null : i.default); });
    const dariKasus = params.dariKasus ? K.kasus(params.dariKasus) : null;
    const keKasus = () => UKP.go('kasus', { id: dariKasus.id });
    if (dariKasus) page.appendChild(UKP.c.banner((awal ? 'Nilai awal diisi dari studi kasus ' : 'Dibuka dari studi kasus ') + dariKasus.id + ' · ' + dariKasus.judul + '. Hasil tetap terlihat di kolom hasil saat Anda mengubah isian.', 'info', null,
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: keKasus }, UKP.icon('back', null, true), 'Kembali ke studi kasus'))));
    // form dibangun sekali; field bersyarat (tampilJika) cukup disembunyikan, sehingga fokus tidak hilang
    const form = h('div', { class: 'card form-grid kal-form' });
    const hasilBox = h('section', { class: 'card sorot hasil-kalkulator', 'aria-labelledby': 'kal-hasil-judul' });
    const galatBox = h('div', { class: 'kal-galat', hidden: true });
    const ringkas = h('p', { class: 'visually-hidden', role: 'status', id: 'kal-ringkas' }); // hanya "label: nilai" yang diumumkan
    const desktop = root.matchMedia ? root.matchMedia('(min-width: 1024px)') : null;
    let tebak = false; let tebakTerbuka = false; let timer = null; let tebakEl = null; const ref = {};
    let rTerakhir = null; let teksUtamaLama = null; let nilaiUtamaLama = null; let tebakan = null; let drafTebak = ''; const riwayatTebak = [];
    // isian berteks tidak sah (per kunci): hasil tidak dihitung sampai diperbaiki/dikosongkan, agar nilai bawaan tidak dipakai diam-diam
    const tidakSah = {};
    function tampil(i) { if (!i.tampilJika) return true; const v = nilai[i.tampilJika.key]; return Array.isArray(i.tampilJika.nilai) ? i.tampilJika.nilai.includes(v) : v === i.tampilJika.nilai; }
    // pesan galat per tipe/label: mata uang disebut sesuai label (EUR, valuta asing, kurs), bukan selalu "rupiah"
    const contohDefault = (i, cadangan) => typeof i.default === 'number' ? String(i.default).replace('.', ',') : cadangan;
    const bolehNegatif = i => i.min == null || i.min < 0;
    function pesanGalat(i) {
      const lbl = String(i.label || ''); const neg = bolehNegatif(i) ? '; nilai negatif ditulis dengan tanda minus' : '';
      if (i.tipe === 'persen') return 'Masukkan persentase berupa angka, misalnya ' + contohDefault(i, '12,5') + '.';
      if (i.tipe === 'angka') return 'Masukkan angka, misalnya ' + contohDefault(i, '12') + '.';
      if (/\bEUR\b|€/.test(lbl)) return 'Masukkan jumlah dalam euro (EUR), misalnya 750.000.000' + neg + '.';
      if (/valuta asing|\bvalas\b/i.test(lbl)) return 'Masukkan jumlah dalam valuta asing, misalnya 10.000 atau 10.000,50' + neg + '.';
      if (/^kurs\b/i.test(lbl)) return 'Masukkan kurs dalam rupiah per satu unit valuta asing, misalnya 16.250 atau 1,0567.';
      if (kal.jenis === 'gmt') return 'Masukkan angka dalam satu mata uang, misalnya 200.000.000.000' + neg + '.';
      return 'Masukkan angka rupiah, misalnya 1.500.000' + neg + '.';
    }
    function catatIsian(i, n) { tidakSah[i.key] = Number.isNaN(n); nilai[i.key] = tidakSah[i.key] ? null : n; setGalat(i.key, tidakSah[i.key] ? pesanGalat(i) : null); }
    function setGalat(key, pesan) {
      const r = ref[key]; if (!r) return;
      const desc = [r.bantuId, r.tglId, pesan ? r.galatId : null].filter(Boolean).join(' ');
      if (desc) r.ctl.setAttribute('aria-describedby', desc); else r.ctl.removeAttribute('aria-describedby');
      if (pesan) { r.galat.replaceChildren(UKP.icon('peringatan', null, true), h('span', null, pesan)); r.galat.hidden = false; r.ctl.setAttribute('aria-invalid', 'true'); }
      else { r.galat.hidden = true; r.ctl.removeAttribute('aria-invalid'); }
    }
    function perbaruiTampil() { for (const i of kal.input) if (ref[i.key]) ref[i.key].w.hidden = !tampil(i); }
    // isian berubah: soal baru → tebakan yang sudah terbuka disembunyikan lagi
    function ubah() { perbaruiTampil(); if (tebak && tebakTerbuka) { tebakTerbuka = false; tebakan = null; drafTebak = ''; } hitung(); }
    function bangunForm() {
      // "Tebak dulu" di atas form (Momen 3): hasil utama disembunyikan sampai tebakan diperiksa
      tebakEl = h('input', { type: 'checkbox', role: 'switch', id: 'k-tebak', 'aria-describedby': 'k-tebak-bantu', onchange: e => { tebak = e.target.checked; tebakTerbuka = false; tebakan = null; hitung(true); if (tebak) setTimeout(() => { const t = document.getElementById('k-tebakan'); if (t && desktop && desktop.matches) t.focus(); }, 30); } });
      form.appendChild(h('label', { class: 'switch tebak-dulu', for: 'k-tebak' }, h('span', null, h('strong', null, 'Tebak dulu'), h('span', { class: 'bantu', id: 'k-tebak-bantu' }, 'Hitung manual, tulis perkiraan hasil utama, lalu bandingkan dengan hasil kalkulator.')), tebakEl));
      let pasangan = null;
      for (const i of kal.input) {
        const id = 'k-' + i.key; const bantuId = i.bantu ? id + '-bantu' : null; const galatId = id + '-galat'; const tglId = i.tipe === 'tanggal' ? id + '-tgl' : null; let ctl, kontrol;
        if (i.tipe === 'pilihan') ctl = h('select', { class: 'select', id, onchange: e => { nilai[i.key] = e.target.value; ubah(); } }, (i.opsi || []).map(o => h('option', { value: o.nilai, selected: String(nilai[i.key]) === String(o.nilai) ? true : null }, o.label)));
        else if (i.tipe === 'boolean') ctl = h('input', { type: 'checkbox', role: 'switch', id, checked: nilai[i.key] ? true : null, onchange: e => { nilai[i.key] = e.target.checked; ubah(); } });
        else if (i.tipe === 'tanggal') {
          const tglEl = h('span', { class: 'bantu tgl-id', id: tglId }, UKP.c.tglBantu(nilai[i.key]) || BANTU_TGL_KOSONG);
          const grupTgl = inputTanggal({ id, nilai: nilai[i.key] || null, onUbah: v => { nilai[i.key] = v || null; tglEl.textContent = UKP.c.tglBantu(nilai[i.key]) || BANTU_TGL_KOSONG; setGalat(i.key, null); ubah(); }, onGalat: pesan => setGalat(i.key, pesan || null) });
          ctl = grupTgl.input || grupTgl.querySelector('input'); kontrol = [grupTgl, tglEl];
        }
        else if (i.tipe === 'uang') {
          ctl = h('input', { class: 'input angka', inputmode: 'decimal', autocomplete: 'off', id, value: nilai[i.key] == null ? '' : tampilUang(nilai[i.key]), oninput: e => { catatIsian(i, parseUang(e.target.value)); ubah(); }, onblur: e => { if (nilai[i.key] != null) e.target.value = tampilUang(nilai[i.key]); } });
          const im = imbuhUang(kal, i); kontrol = im ? h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, im), ctl) : ctl;
        }
        else if (i.tipe === 'persen' || i.tipe === 'angka') {
          ctl = h('input', { class: 'input angka', inputmode: 'decimal', autocomplete: 'off', id, value: nilai[i.key] == null ? '' : String(nilai[i.key]).replace('.', ','), placeholder: i.placeholder || '', oninput: e => { catatIsian(i, parseDesimal(e.target.value)); ubah(); } });
          kontrol = i.tipe === 'persen' ? h('div', { class: 'input-grup' }, ctl, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, '%')) : ctl;
        }
        else ctl = h('input', { class: 'input', id, value: nilai[i.key] || '', oninput: e => { nilai[i.key] = e.target.value; ubah(); } });
        const desc = [bantuId, tglId].filter(Boolean).join(' '); if (desc) ctl.setAttribute('aria-describedby', desc);
        const galat = h('p', { class: 'galat', id: galatId, hidden: true, style: { margin: '0' } });
        const w = i.tipe === 'boolean'
          ? h('div', null, h('label', { class: 'switch', for: id }, h('span', null, h('strong', null, i.label), i.bantu ? h('span', { class: 'bantu', id: bantuId }, i.bantu) : null), ctl), galat)
          : h('div', { class: 'field' }, h('label', { for: id }, i.label, i.tipe === 'persen' ? h('span', { class: 'visually-hidden' }, ' (persen)') : null), kontrol || ctl, i.bantu ? h('span', { class: 'bantu', id: bantuId }, i.bantu) : null, galat);
        ref[i.key] = { w, ctl, galat, bantuId, galatId, tglId };
        // pasangan tanggal (mis. jatuh tempo – tanggal bayar) berdampingan di ≥ 640 px
        if (i.tipe === 'tanggal') { if (pasangan && pasangan.children.length === 1) { pasangan.appendChild(w); pasangan = null; } else { pasangan = h('div', { class: 'form-grid dua' }, w); form.appendChild(pasangan); } }
        else { pasangan = null; form.appendChild(w); }
      }
      perbaruiTampil();
    }
    const fmtNilai = x => x.format === 'uang' ? UKP.fmt.uang(x.nilai) : x.format === 'persen' ? UKP.fmt.persen(x.nilai, 2) : x.format === 'tanggal' ? UKP.fmt.tanggal(x.nilai) : x.format === 'teks' ? String(x.nilai) : UKP.fmt.angka(x.nilai);
    const nilaiTeks = x => x.format === 'teks' || (x.format == null && typeof x.nilai === 'string');
    const numerik = x => x && typeof x.nilai === 'number' && Number.isFinite(x.nilai) && !nilaiTeks(x) && x.format !== 'tanggal';
    const pengecohDari = r => (r.jejak || []).filter(j => Array.isArray(j) && /^pengecoh\b/i.test(String(j[0]))).map(j => ({ label: String(j[0]).replace(/^pengecoh\s*:?\s*/i, ''), teks: String(j[1] == null ? '' : (j[1].textContent || j[1])), n: angkaDariTeks(j[1] && j[1].textContent != null ? j[1].textContent : j[1]) }));
    const fmtSelisih = (d, x) => (d > 0 ? '+' : d < 0 ? '−' : '') + (x.format === 'uang' ? UKP.fmt.uang(Math.abs(d)) : x.format === 'persen' ? UKP.fmt.persen(Math.abs(d), 2) : UKP.fmt.angka(Math.abs(d)));
    // mini bar hasil (< 1024 px): nilai utama selalu terlihat saat mengetik; hilang bila kotak hasil sudah tampak
    // markup kontrak css: .hasil-mini > .label + .nilai + .delta + .btn ([data-galat] saat isian belum sah)
    const miniLabel = h('span', { class: 'label' }); const miniNilai = h('span', { class: 'nilai' }); const miniDelta = h('span', { class: 'delta', 'aria-hidden': 'true' });
    const mini = h('div', { class: 'hasil-mini', role: 'region', 'aria-label': 'Ringkasan hasil' }, miniLabel, miniNilai, miniDelta,
      dariKasus ? h('button', { type: 'button', class: 'btn btn-sm', onclick: keKasus }, UKP.icon('back', null, true), 'Kasus') : null,
      h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { try { hasilBox.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) { hasilBox.scrollIntoView(); } UKP.fokus(hasilBox.querySelector('#k-tebakan') || hasilBox.querySelector('#kal-hasil-judul')); } }, 'Rincian', UKP.icon('chevron-bawah', null, true)));
    let hasilTerlihat = false;
    const aturMini = () => { mini.hidden = !!(desktop && desktop.matches) || hasilTerlihat; };
    if ('IntersectionObserver' in root) new IntersectionObserver(e => { hasilTerlihat = e[e.length - 1].isIntersecting; aturMini(); }, { threshold: 0.25 }).observe(hasilBox);
    if (desktop) { try { desktop.addEventListener('change', aturMini); } catch (e) {} }
    function tulisMini(label, teks, galat) { miniLabel.textContent = label; const lama = miniNilai.textContent; if (lama !== teks) { miniNilai.textContent = teks; if (lama && !galat && !mini.hasAttribute('data-galat') && lama !== 'Hasil disembunyikan') sorotPerubahan(miniNilai); } if (galat) mini.setAttribute('data-galat', ''); else mini.removeAttribute('data-galat'); aturMini(); }
    // salin hasil: nama kalkulator, hasil utama, baris hasil, dasar hukum
    const teksSalin = () => {
      const r = rTerakhir; if (!r) return kal.nama;
      const baris = [kal.nama + ' — MABAR UKP'].concat((r.hasil || []).map(x => x.label + ': ' + fmtNilai(x)));
      const dasar = r.dasarHukum || kal.dasarHukum || []; if (dasar.length) baris.push('Dasar: ' + dasar.join('; '));
      baris.push('Bukan nasihat pajak; cek dasar hukum sebelum dipakai.');
      return baris.join('\n');
    };
    function sorotPerubahan(el) { if (!el || !UKP.gerakBoleh()) return; el.removeAttribute('data-berubah'); void el.offsetWidth; el.setAttribute('data-berubah', ''); setTimeout(() => el.removeAttribute('data-berubah'), 450); }
    // kotak tebakan (Momen 3)
    function kotakTebak(utama, r) {
      const persen = utama.format === 'persen'; const uang = utama.format === 'uang';
      const galat = h('p', { class: 'galat', id: 'k-tebakan-galat', hidden: true, style: { margin: '0' } });
      const inp = h('input', { class: 'input angka', id: 'k-tebakan', inputmode: 'decimal', autocomplete: 'off', 'aria-describedby': 'k-tebakan-bantu', value: tebakan != null ? (persen ? String(Math.round(tebakan * 10000) / 100).replace('.', ',') : tampilUang(tebakan)) : (drafTebak || null),
        onkeydown: e => { if (e.key === 'Enter') { e.preventDefault(); periksa(); } } });
      const kontrol = uang ? h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, 'Rp'), inp) : persen ? h('div', { class: 'input-grup' }, inp, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, '%')) : inp;
      function periksa() {
        const n = persen ? parseDesimal(inp.value) : parseUang(inp.value);
        if (n == null || Number.isNaN(n)) { galat.replaceChildren(UKP.icon('peringatan', null, true), h('span', null, 'Tulis tebakan berupa angka, misalnya ' + (persen ? '12,5' : '1.500.000') + '.')); galat.hidden = false; inp.setAttribute('aria-invalid', 'true'); inp.setAttribute('aria-describedby', 'k-tebakan-bantu k-tebakan-galat'); inp.focus(); return; }
        tebakan = persen ? n / 100 : n; tebakTerbuka = true;
        const d = tebakan - utama.nilai; const rel = utama.nilai ? Math.abs(d) / Math.abs(utama.nilai) : (d === 0 ? 0 : 1);
        const cocok = pengecohDari(r).find(p => Number.isFinite(p.n) && p.n !== 0 && Math.abs(tebakan - p.n) / Math.abs(p.n) <= 0.005);
        const status = cocok ? 'pengecoh' : rel <= 0.005 ? 'tepat' : rel <= 0.05 ? 'dekat' : 'jauh';
        riwayatTebak.unshift({ teks: fmtNilai(Object.assign({}, utama, { nilai: tebakan })), status, rel });
        if (riwayatTebak.length > 5) riwayatTebak.pop();
        tampilkan(true, { status, d, rel, cocok });
      }
      return h('div', { class: 'stack tebak-kotak' },
        h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'kal-hasil-judul' }, 'Tebak dulu'), UKP.c.pill('hasil disembunyikan', 'nila', 'mata')),
        h('div', { class: 'field' }, h('label', { for: 'k-tebakan' }, 'Tebakan Anda: ' + utama.label), kontrol, h('span', { class: 'bantu', id: 'k-tebakan-bantu' }, 'Hitung dengan kertas dan kalkulator biasa dulu. Tekan Enter atau Periksa tebakan.'), galat),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: periksa }, UKP.icon('check'), 'Periksa tebakan'), h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { tebakTerbuka = true; tebakan = null; tampilkan(true, null); } }, 'Lewati, tampilkan hasil')),
        riwayatTebak.length ? h('div', { class: 'stack-sm riwayat-tebak' }, h('span', { class: 'eyebrow' }, 'Tebakan terakhir di halaman ini'), h('ul', { class: 'bersih small' }, riwayatTebak.map(x => h('li', null, h('span', { class: 'mono' }, x.teks), ' ', UKP.c.pill(x.status, x.status === 'tepat' ? 'ok' : x.status === 'dekat' ? 'warn' : 'attn'))))) : null);
    }
    // bangun kotak hasil dari r; status `details` dipertahankan antar-hitung (KL-2)
    function tampilkan(dariTebak, banding) {
      const r = rTerakhir; if (!r) return;
      const terbuka = {}; hasilBox.querySelectorAll('details[data-kunci]').forEach(d => { terbuka[d.dataset.kunci] = d.open; });
      const draf = hasilBox.querySelector('#k-tebakan'); if (draf) drafTebak = draf.value;
      const lipat = (kunci, judul, bawaan, ...isi) => h('details', { class: 'lipat', 'data-kunci': kunci, open: (kunci in terbuka ? terbuka[kunci] : bawaan) ? true : null }, h('summary', null, judul), ...isi);
      const utama = (r.hasil || []).find(x => x.utama) || (r.hasil || [])[0];
      const teksRingkas = r.galat ? r.galat : utama ? utama.label + ': ' + fmtNilai(utama) : '';
      hasilBox.removeAttribute('data-usang'); hasilBox.classList.remove('hasil-basi'); galatBox.hidden = true;
      if (tebak && utama && !tebakTerbuka) {
        hasilBox.replaceChildren(numerik(utama) ? kotakTebak(utama, r) : h('div', { class: 'stack' }, h('h2', { class: 'card-title', id: 'kal-hasil-judul' }, 'Tebak dulu'), h('p', { class: 'small' }, 'Hasil utama berupa ' + (utama.format === 'tanggal' ? 'tanggal' : 'teks') + '; tentukan jawabannya sendiri, lalu tampilkan.'), h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => { tebakTerbuka = true; tampilkan(true, null); } }, UKP.icon('mata'), 'Tampilkan hasil'))));
        if (ringkas.textContent !== 'Hasil disembunyikan. Tulis tebakan Anda.') ringkas.textContent = 'Hasil disembunyikan. Tulis tebakan Anda.';
        tulisMini('Tebak dulu', 'Hasil disembunyikan'); teksUtamaLama = null; nilaiUtamaLama = null;
        return;
      }
      const nilaiEl = utama ? h('span', { class: 'nilai', 'data-nilai': '' }, fmtNilai(utama)) : null;
      const deltaEl = h('span', { class: 'delta-hasil mono small muted', 'aria-hidden': 'true' });
      const bandingEl = banding ? h('div', { class: 'tebak-banding stack-sm kartu-masuk', role: 'status' },
        h('p', { class: 'small' }, 'Tebakan ', h('strong', { class: 'mono' }, fmtNilai(Object.assign({}, utama, { nilai: tebakan }))), ' · hasil ', h('strong', { class: 'mono' }, fmtNilai(utama)), ' · selisih ', h('span', { class: 'mono' }, fmtSelisih(banding.d, utama)), ' (' + UKP.fmt.angka(banding.rel * 100, 2) + ' %)'),
        h('div', { class: 'chip-row' }, banding.status === 'pengecoh' ? UKP.c.pill('sama dengan pengecoh', 'attn', 'peringatan')
          : UKP.c.pill(banding.status === 'tepat' ? 'tepat (≤ 0,5 %)' : banding.status === 'dekat' ? 'dekat (≤ 5 %)' : 'jauh (> 5 %)', banding.status === 'tepat' ? 'ok' : banding.status === 'dekat' ? 'warn' : 'attn', banding.status === 'tepat' ? 'cek-lingkar' : banding.status === 'dekat' ? 'setengah' : 'x-lingkar')),
        banding.cocok ? h('p', { class: 'small pengecoh-cocok' }, 'Tebakan Anda sama dengan pengecoh: ' + banding.cocok.label + '. Periksa langkah itu di jejak hitung.') : null) : null;
      const pengecoh = pengecohDari(r);
      hasilBox.replaceChildren(
        // P4-12: satu judul kartu (label hasil utama), bukan eyebrow "HASIL" + eyebrow label bertumpuk
        h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'kal-hasil-judul' }, utama ? utama.label : 'Hasil'), UKP.c.salin(teksSalin, { label: 'Salin hasil', pesan: 'Hasil kalkulator disalin.' })),
        r.galat ? h('div', { class: 'banner', 'data-tone': 'attn' }, UKP.icon('peringatan'), h('span', null, r.galat)) : null,
        bandingEl,
        utama ? h('div', { class: 'hasil-utama' }, h('span', { class: 'baris-nilai', style: { display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 12px' } }, nilaiEl, deltaEl)) : null,
        (r.hasil || []).filter(x => x !== utama).map(x => h('div', { class: nilaiTeks(x) ? 'hasil-baris teks' : 'hasil-baris' }, h('span', null, x.label), h('span', { class: nilaiTeks(x) ? 'n teks' : 'n' }, fmtNilai(x)))),
        pengecoh.length ? h('div', { class: 'stack-sm pengecoh-blok' }, h('strong', { class: 'small' }, 'Pengecoh yang sering muncul di opsi'), h('div', { class: 'stack-sm small', role: 'list' }, pengecoh.map(p => h('div', { class: 'pengecoh', role: 'listitem' }, UKP.c.pill('pengecoh', 'warn', 'peringatan'), ' ', h('span', null, p.label), ' ', h('strong', { class: 'mono', style: { whiteSpace: 'nowrap' } }, p.teks))))) : null,
        r.jejak && r.jejak.length ? lipat('jejak', 'Jejak hitung', !!(desktop && desktop.matches) || dariTebak, UKP.c.jejak(r.jejak)) : null,
        (r.peringatan || []).map(p => h('div', { class: 'banner', 'data-tone': 'warn' }, UKP.icon('peringatan'), h('span', null, p))),
        lipat('dasar', 'Dasar hukum & asumsi', false, h('ul', { class: 'bersih small' }, (r.dasarHukum || kal.dasarHukum || []).map(d => h('li', null, d))), r.asumsi && r.asumsi.length ? h('ul', { class: 'bersih small muted' }, r.asumsi.map(a => h('li', null, a))) : null, UKP.c.cite([])),
        UKP.store.get().pengaturan.tutorAktif && UKP.tutor ? h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => UKP.tutor.buka({ kalkulator: kal, input: nilai, hasil: r }) }, UKP.icon('chat', null, true), 'Jelaskan langkah ini')) : null);
      const teksUtama = utama ? fmtNilai(utama) : '';
      const teksBanding = banding ? (banding.cocok ? 'Tebakan sama dengan pengecoh: ' + banding.cocok.label + '. ' : 'Tebakan ' + banding.status + '. ') : '';
      if (ringkas.textContent !== teksBanding + teksRingkas) ringkas.textContent = teksBanding + teksRingkas;
      // nilai utama berubah: sorot latar sekali + delta 2 dtk (tanpa menghitung naik saat mengetik)
      if (utama && dariTebak && banding && numerik(utama)) UKP.hitungNaik(nilaiEl, utama.nilai, { dari: tebakan, format: n => fmtNilai(Object.assign({}, utama, { nilai: n })), ulang: true });
      else if (utama && teksUtamaLama != null && teksUtama !== teksUtamaLama) {
        sorotPerubahan(nilaiEl);
        if (numerik(utama) && Number.isFinite(nilaiUtamaLama)) { const d = utama.nilai - nilaiUtamaLama; if (d) { deltaEl.textContent = miniDelta.textContent = fmtSelisih(d, utama); setTimeout(() => { if (deltaEl.isConnected) deltaEl.textContent = ''; miniDelta.textContent = ''; }, 2000); } }
      }
      teksUtamaLama = teksUtama; nilaiUtamaLama = utama && numerik(utama) ? utama.nilai : null;
      tulisMini(utama ? utama.label : 'Hasil', utama ? teksUtama : (r.galat || '–'));
      if (dariTebak) UKP.fokus(hasilBox.querySelector('.tebak-banding') || hasilBox.querySelector('#kal-hasil-judul'));
    }
    function hitung(segera) {
      clearTimeout(timer); timer = setTimeout(() => {
        const salahIsi = kal.input.filter(i => tidakSah[i.key] && tampil(i));
        if (salahIsi.length) {
          // KL-4: hasil terakhir yang sah tetap tampil (diredupkan) di bawah pesan galat
          const daftarLabel = salahIsi.map(i => '"' + i.label + '"').join(', ');
          const teks = 'Hasil belum dihitung: isian ' + daftarLabel + ' tidak dapat dibaca sebagai angka. Perbaiki atau kosongkan isian itu; kalkulator tidak memakai nilai bawaan sebagai gantinya.';
          if (ringkas.textContent !== teks) ringkas.textContent = teks;
          galatBox.replaceChildren(h('div', { class: 'banner', 'data-tone': 'attn', role: 'note' }, UKP.icon('peringatan'), h('div', { class: 'stack-sm' }, h('span', null, teks), rTerakhir ? h('span', { class: 'small muted' }, 'Di bawah ini hasil terakhir yang sah, sebelum isian diubah.') : null, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { const r0 = ref[salahIsi[0].key]; if (r0) r0.ctl.focus(); } }, 'Ke isian ' + (salahIsi.length > 1 ? 'pertama' : 'itu'))))));
          galatBox.hidden = false;
          if (rTerakhir) { hasilBox.setAttribute('data-usang', ''); hasilBox.classList.add('hasil-basi'); } else hasilBox.replaceChildren(h('h2', { class: 'card-title', id: 'kal-hasil-judul' }, 'Hasil'), UKP.c.kosong('Hasil belum dihitung', 'Perbaiki isian yang ditandai.', null, { ringkas: true }));
          tulisMini('Hasil', 'Isian belum sah', true);
          return;
        }
        let r; try { r = kal.hitung(Object.assign({}, nilai)); } catch (e) { r = { galat: 'Gagal menghitung: ' + e.message, hasil: [], jejak: [] }; }
        rTerakhir = r;
        if (UKP.setKonteksTutor) UKP.setKonteksTutor({ kalkulator: kal, input: Object.assign({}, nilai), hasil: r });
        tampilkan(false, null);
      }, segera ? 0 : 200);
    }
    bangunForm(); hitung(true);
    const kolomHasil = h('div', { class: 'hasil-kolom stack' }, galatBox, hasilBox);
    const grid = h('div', { class: 'kalkulator-grid' }, h('div', { class: 'kolom-form stack' }, form), kolomHasil);
    page.append(grid, ringkas);
    lengketBilaMuat(kolomHasil, { inline: true });
    const soalTerkait = K.semuaSoal(UKP.store.get().profil.tingkat).filter(s => s.kode === kal.kelompok && s.jenis === 'hitung').slice(0, 3);
    if (soalTerkait.length) page.appendChild(h('section', { class: 'sect', 'aria-labelledby': 'kal-pakai-j' }, h('div', { class: 'sect-head' }, h('h2', { id: 'kal-pakai-j' }, 'Pakai di soal')), h('p', { class: 'small muted' }, 'Uji jejak hitung yang sama pada soal pilihan ganda kelompok ' + kal.kelompok + '.'), h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: () => UKP.go('latih', { kode: kal.kelompok, jenis: 'hitung', n: 10, mulai: true }) }, UKP.icon('pen'), 'Latih 10 soal hitung ' + kal.kelompok))));
    page.appendChild(mini); aturMini();
    return { node: page, unmount: () => { clearTimeout(timer); if (desktop) { try { desktop.removeEventListener('change', aturMini); } catch (e) {} } } };
  };

  // ================= RENCANA =================
  let paramRencanaBuka = false;
  UKP.views.rencana = function () {
    const s = UKP.store.get(); const p = s.profil; const r = UKP.rencana.hitung(); const page = h('div', { class: 'page lebar halaman-rencana' });
    let v1 = null; try { v1 = UKP.rencana.v1 ? UKP.rencana.v1() : null; } catch (e) { console.error(e); }
    const adaGaris = !!(v1 && v1.minggu.length);
    page.appendChild(UKP.c.kop({ judul: 'Rencana belajar',
      lead: r.tanggalUjian ? 'Jadwal mingguan sampai hari ujian. Centang tugas yang selesai; topik dan simulasi tercentang otomatis.' : 'Isi tanggal ujian agar jadwal mingguan bisa disusun.' }));
    // v7.2: kartu "Sesi hari ini" (dulu di dasbor beranda) tinggal di Rencana
    if (typeof UKP.c.sesiHariIni === 'function') { const ks = UKP.c.sesiHariIni(); if (ks) page.appendChild(ks); }
    // render ulang setelah parameter berubah, ditunda: (1) Tab keluar dari isian → tunggu fokus pindah, lalu render memulihkan fokus
    // ke elemen tujuan (jejak fokus core); (2) keluar dengan klik/ketuk kontrol lain → tunggu tombol pointer dilepas agar klik itu tidak hilang
    let ditekan = false; let tunda = false;
    const lepasTekan = () => { ditekan = false; document.removeEventListener('pointerup', lepasTekan, true); document.removeEventListener('pointercancel', lepasTekan, true); };
    page.addEventListener('pointerdown', () => { ditekan = true; document.addEventListener('pointerup', lepasTekan, true); document.addEventListener('pointercancel', lepasTekan, true); }, true);
    const renderNanti = () => {
      if (tunda) return; tunda = true;
      let cadangan = null;
      const jalan = () => { if (!tunda) return; tunda = false; clearTimeout(cadangan); if (page.isConnected) UKP.render(); };
      if (ditekan) {
        const lanjut = () => { document.removeEventListener('pointerup', lanjut, true); document.removeEventListener('pointercancel', lanjut, true); setTimeout(jalan, 0); };
        document.addEventListener('pointerup', lanjut, true); document.addEventListener('pointercancel', lanjut, true);
        cadangan = setTimeout(() => { lanjut(); }, 2000); // pointer dilepas di luar jendela
      } else requestAnimationFrame(jalan);
    };
    const ubahTanggal = v => { p.tanggalUjian = v; UKP.store.save(); UKP.perbaruiTopbar(); UKP.toast(v ? 'Tanggal ujian diatur ke ' + UKP.fmt.tanggal(v) + '.' : 'Tanggal ujian dikosongkan.', { nada: 'ok' }); renderNanti(); };
    const galatTgl = h('p', { class: 'galat', id: 'r-tgl-galat', hidden: true, style: { margin: '0' } });
    const bantuTgl = h('span', { class: 'bantu', id: 'r-tgl-bantu' }, p.tanggalUjian ? bantuHari(p.tanggalUjian) : 'Kosongkan bila belum mendaftar.');
    let galatR = () => {};
    const inTgl = inputTanggal({ id: 'r-tgl', nilai: p.tanggalUjian || null, min: U.hariIni(), describedby: 'r-tgl-bantu', onUbah: v => { galatR(null); ubahTanggal(v); }, onGalat: pesan => galatR(pesan) });
    galatR = pasangGalat(galatTgl, inTgl.input || inTgl.querySelector('input'), 'r-tgl-bantu', 'r-tgl-galat');
    const inHK = h('input', { class: 'input angka', type: 'number', inputmode: 'numeric', id: 'r-hk', min: 5, max: 240, value: p.menitHariKerja, onchange: e => { p.menitHariKerja = U.clamp(Number(e.target.value) || 15, 5, 240); UKP.store.save(); renderNanti(); } });
    const inAP = h('input', { class: 'input angka', type: 'number', inputmode: 'numeric', id: 'r-ap', min: 0, max: 480, value: p.menitAkhirPekan, onchange: e => { p.menitAkhirPekan = U.clamp(Number(e.target.value) || 0, 0, 480); UKP.store.save(); renderNanti(); } });
    const segTingkat = UKP.c.segmen({ id: 'r-tingkat', label: 'Tingkat', aktif: p.tingkat, penuh: true, opsi: ['A', 'B', 'C'].map(t => ({ nilai: t, label: t, ariaLabel: 'Tingkat ' + t })), onPilih: t => { p.tingkat = t; UKP.store.save(); UKP.perbaruiTopbar(); UKP.render(); const b = document.querySelector('#r-tingkat [aria-pressed="true"]'); if (b) b.focus(); } });
    const isiParam = [h('div', { class: 'field' }, h('label', { for: 'r-tgl' }, 'Tanggal ujian'), inTgl, bantuTgl, galatTgl), segTingkat,
      h('div', { class: 'form-grid dua', style: { alignItems: 'end' } }, h('div', { class: 'field' }, h('label', { for: 'r-hk', style: { whiteSpace: 'nowrap' } }, 'Menit/hari kerja'), inHK), h('div', { class: 'field' }, h('label', { for: 'r-ap', style: { whiteSpace: 'nowrap' } }, 'Menit/akhir pekan'), inAP))];
    // rencana sudah ada: parameter dilipat satu baris agar jadwal minggu ini tampil lebih dulu (pengguna rutin)
    const kartuParam = r.tanggalUjian
      ? h('details', { class: 'lipat lipat-param urut-1', open: paramRencanaBuka || null, ontoggle: e => { paramRencanaBuka = e.currentTarget.open; } },
        h('summary', null, h('span', { class: 'stack-sm', style: { gap: '0' } }, h('span', null, 'Ubah tanggal, tingkat, atau menit'),
          h('span', { class: 'meta', style: { fontWeight: '400' } }, 'Ujian ' + isoKeTampil(p.tanggalUjian), h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), 'Tingkat ' + p.tingkat, h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), p.menitHariKerja + ' mnt hari kerja', h('span', { class: 'sep', 'aria-hidden': 'true' }, '·'), p.menitAkhirPekan + ' mnt akhir pekan'))),
        h('div', { class: 'stack', style: { padding: '0 var(--s-3) var(--s-3)' } }, isiParam))
      : h('section', { class: 'card ringkas', 'aria-labelledby': 'r-param-judul' }, h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'r-param-judul' }, 'Parameter')), isiParam);
    const tile = (label, nilai, satuan, hitung) => h('div', { class: 'stat' }, h('span', { class: 'label' }, label), h('span', { class: 'nilai', style: { whiteSpace: 'nowrap' } }, h('span', hitung != null && Number.isFinite(hitung) ? { class: 'angka', 'data-hitung': String(hitung) } : { class: 'angka' }, nilai), satuan ? h('small', { class: 'satuan' }, ' ' + satuan) : null));
    // K-16: < 1280 urutan butir = parameter (lipat) → jadwal → angka dan status; ≥ 1280 dua kolom
    const kiri = h('div', { class: 'kl-4 lengket stack kolom-param' + (r.tanggalUjian ? ' kolom' : '') }, kartuParam);
    const kanan = h('div', { class: 'kl-8 stack kolom-garis' + (r.tanggalUjian ? ' kolom' : '') });
    if (r.tanggalUjian) {
      kiri.appendChild(h('div', { class: 'pita-stat grid-3' }, tile('Sisa hari', String(Math.max(0, r.hariTersisa)), null, Math.max(0, r.hariTersisa)), tile('Jam tersedia', String(r.jamTersedia), null, r.jamTersedia), tile('Jam dibutuhkan', r.kebutuhan[0] + '–' + r.kebutuhan[1])));
      if (r.padat) kiri.appendChild(UKP.c.banner('Jam tersedia di bawah 80% kebutuhan minimum. Tiga pilihan: tambah menit harian, geser ke periode berikutnya, atau fokus kelemahan.', 'warn', null,
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { p.menitHariKerja = Math.min(240, p.menitHariKerja + 15); UKP.store.save(); UKP.toast('Menit hari kerja menjadi ' + p.menitHariKerja + '.', { nada: 'ok' }); UKP.render(); } }, UKP.icon('tambah', null, true), '15 menit/hari kerja'), UKP.link('Lihat periode', 'info-ujian', { tab: 'jadwal' }, 'btn btn-sm'), h('button', { type: 'button', class: 'btn btn-sm', onclick: () => UKP.go('latih', { hanyaSalah: true, n: 10, mulai: true }) }, 'Fokus kelemahan')), { judul: 'Rencana padat' }));
      else kiri.appendChild(UKP.c.banner('Jam tersedia mencukupi kebutuhan minimum. Konsistensi harian lebih menentukan daripada sesi panjang.', 'ok'));
    } else {
      const ak = L.akurasiKeseluruhan(p.tingkat, 30); const kes = L.kesiapanTingkat(p.tingkat); const nKes = kes.kelompok.reduce((a, k) => a + (k.s.n || 0), 0);
      kiri.appendChild(h('div', { class: 'pita-stat grid-3' }, tile('Jam dibutuhkan', r.kebutuhan[0] + '–' + r.kebutuhan[1]), tile('Akurasi 30 hari', ak.n >= 8 ? Math.round(ak.akurasi * 100) + '%' : '–'), h('div', { class: 'stat', title: nKes < 8 ? 'Belum cukup data (minimal 8 soal)' : null }, h('span', { class: 'label' }, 'Kesiapan'), h('span', { class: 'nilai' }, nKes >= 8 ? kes.skor + '%' : '–'))));
    }
    // siap daftar: stempel hanya bila tercapai (stempel = capaian); selain itu pill status
    kiri.appendChild(h('section', { class: 'card ringkas', 'aria-labelledby': 'r-siap-judul' }, h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'r-siap-judul' }, 'Siap daftar'), r.siapDaftar ? UKP.c.stempel('SIAP DAFTAR', 'ok') : UKP.c.pill('belum', null)), h('p', { class: 'small muted' }, 'Dua simulasi komprehensif berturut ≥ 70 dan tidak ada kelompok materi < 60.')));
    kiri.appendChild(h('details', { class: 'lipat' }, h('summary', null, UKP.icon('bell', null, true), ' Pengingat harian di kalender (.ics)'), kartuPengingat('r')));
    // Rencana v1 (garis waktu mingguan) + kartu "Susun ulang" bila tertinggal > 20%
    if (adaGaris && v1.tertinggalPct > 0.2 && v1.tertinggal >= 2) kanan.appendChild(UKP.c.banner(v1.tertinggal + ' dari ' + v1.jatuhTempo + ' tugas yang tanggalnya sudah lewat belum selesai (' + Math.round(v1.tertinggalPct * 100) + '%). Susun ulang membagi lagi topik yang belum dibaca mulai hari ini sampai sehari sebelum ujian; centang yang sudah ada tetap tersimpan.', 'warn', null,
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: () => { UKP.rencana.susunUlang(); UKP.toast('Rencana disusun ulang mulai hari ini.', { nada: 'ok' }); UKP.render(); } }, UKP.icon('atur-ulang', null, true), 'Susun ulang'), h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { p.menitHariKerja = Math.min(240, p.menitHariKerja + 15); UKP.store.save(); UKP.render(); } }, UKP.icon('tambah', null, true), '15 menit/hari kerja')), { judul: 'Tertinggal dari rencana' }));
    if (adaGaris) kanan.appendChild(garisWaktuRencana(v1));
    // fase: rentang tanggal nyata bila rencana bertanggal
    const rentangF = v1 && v1.rentangFase && v1.rentangFase.length ? v1.rentangFase : null;
    if (rentangF) {
      const hariIni = U.hariIni(); const kini = rentangF.find(x => x.mulai <= hariIni && hariIni <= x.akhir); const isiFase = id => (r.fase.find(f => f.id === id) || {}).isi || '';
      // fase di kolom kiri (≥ 1280) agar jadwal tidak memanjang; < 1280 tampil sesudah jadwal (urut-3)
      kiri.appendChild(h('details', { class: 'lipat' }, h('summary', null, 'Fase belajar' + (kini ? ' · sekarang ' + kini.nama + ' (sampai ' + tglPendek(kini.akhir) + ')' : '')),
        h('p', { class: 'meta', style: { margin: '0 0 var(--s-2)' } }, 'Topik yang belum dibaca dibagi menurut estimasi menit ke fase Fondasi dan Pendalaman.'),
        h('ol', { class: 'timeline' }, rentangF.map(f => h('li', { 'aria-current': kini && kini.id === f.id ? 'step' : null }, h('span', { class: 'kapan' }, rentangTgl(f.mulai, f.akhir)), h('div', null, h('div', { class: 'fase' }, f.nama), h('p', { class: 'small muted' }, isiFase(f.id))))))));
    } else kanan.appendChild(h('section', { class: 'sect', 'aria-label': 'Fase' }, h('div', { class: 'eyebrow' }, 'Fase'), h('ol', { class: 'timeline' }, r.fase.map(f => h('li', null, h('span', { class: 'kapan' }, f.durasi), h('div', null, h('div', { class: 'fase' }, f.nama), h('p', { class: 'small muted' }, f.isi)))))));
    if (p.status === 'mengulang' || p.status === 'uskp') kanan.appendChild(h('section', { class: 'card', 'aria-label': 'Preset' }, h('div', { class: 'eyebrow' }, 'Preset ' + (p.status === 'uskp' ? 'peralihan dari USKP' : 'mengulang')), h('p', { class: 'small' }, 'Fokus 60% pada kelompok lemah (baca ulang, 20 soal/hari, studi kasus, Buku Kesalahan) + Pemeliharaan 40% (kartu + 6 soal campuran). Keluar dari preset bila akurasi 30 hari ≥ 75% dan dua simulasi 40 soal ≥ 70.'), h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-sm', onclick: () => UKP.go('latih', { hanyaSalah: true, n: 20, mulai: true }) }, 'Latih 20 dari Buku Kesalahan'))));
    // jendela pendaftaran; tugas logistik sudah ada di garis waktu (tanpa garis waktu: daftar bercentang seperti biasa)
    const tugas = adaGaris ? [] : r.tugas.slice().sort((a, b) => a.kapan.localeCompare(b.kapan));
    if (tugas.length || r.pendaftaran.length) kanan.appendChild(h('section', { class: 'sect', 'aria-label': 'Pendaftaran' }, h('div', { class: 'eyebrow' }, adaGaris ? 'Jendela pendaftaran' : 'Tugas logistik & jendela pendaftaran'), h('ol', { class: 'timeline' },
      r.pendaftaran.map(d => h('li', null, h('span', { class: 'kapan' }, UKP.fmt.tanggal(d.buka.slice(0, 10)) + ' – ' + UKP.fmt.tanggal(d.tutup.slice(0, 10))), h('div', null, h('div', { class: 'fase' }, 'Pendaftaran ' + d.nama), h('p', { class: 'small muted' }, 'Ujian ' + (d.ujian || []).map(x => UKP.fmt.tanggal(x)).join(' – ') + '. Satu ujian aktif per waktu; daftar ulang setelah hasil terbit.')))),
      tugas.map(t => h('li', null, h('span', { class: 'kapan' }, UKP.fmt.tanggal(t.kapan)), h('label', { class: 'tugas' }, h('input', { type: 'checkbox', class: 'cek', checked: s.tugasRencana[t.id] ? true : null, onchange: e => { s.tugasRencana[t.id] = e.target.checked; UKP.store.save(); e.target.closest('.tugas').classList.toggle('selesai', e.target.checked); } }), h('span', { class: 'teks' }, t.teks)))))));
    // urutan topik berikutnya (tanpa garis waktu; dengan garis waktu topik sudah terjadwal per minggu)
    const berikut = adaGaris ? [] : L.urutanTopik(p.tingkat).filter(t => !s.topikDibaca[t.id]).slice(0, 5);
    if (berikut.length) kanan.appendChild(h('section', { class: 'sect', 'aria-label': 'Topik berikutnya' }, h('div', { class: 'eyebrow' }, 'Topik berikutnya dalam rencana'), h('div', { class: 'list-rows' }, berikut.map(t => h('a', { class: 'row-link', href: '#topik', 'data-go': 'topik', 'data-params': JSON.stringify({ id: t.id }) }, h('span', { class: 'kode' }, t.id), h('span', { class: 'row-title' }, t.judul), UKP.c.pill('± ' + (t.estimasiMenit || 10) + ' mnt', null, 'jam'), UKP.icon('chevron-kanan', 'chev', true))))));
    if (r.tanggalUjian) { Array.from(kanan.children).forEach(c => c.classList.add('urut-2')); Array.from(kiri.children).forEach(c => { if (c !== kartuParam) c.classList.add('urut-3'); }); }
    page.appendChild(h('div', { class: 'tata' }, kiri, kanan));
    lengketBilaMuat(kiri);
    return page;
  };

  // ---------- bantu tanggal ringkas ----------
  const tglPendek = iso => { const d = new Date(iso + 'T00:00:00'); return isNaN(d) ? String(iso) : d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }); };
  const tglHari = iso => { const d = new Date(iso + 'T00:00:00'); return isNaN(d) ? String(iso) : d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }); };
  const rentangTgl = (a, b) => (a === b ? tglPendek(a) : tglPendek(a) + ' – ' + tglPendek(b)) + (String(b).slice(0, 4) !== U.hariIni().slice(0, 4) ? ' ' + String(b).slice(0, 4) : '');

  // ---------- garis waktu Rencana v1 ----------
  // [label jenis, kunci data-jenis, ikon]
  const JENIS_TUGAS = { topik: ['Topik', 'topik', 'book'], simulasi40: ['Simulasi 40 soal', 'simulasi', 'sim'], komprehensif: ['Simulasi komprehensif', 'simulasi', 'sim'], logistik: ['Logistik', 'logistik', 'plan'], kartu: ['Kartu', 'ulang', 'repeat'] };
  // aksi "Buka" sebagai tombol ikon di dalam baris tugas (T26)
  function aksiTugas(t) {
    if (t.selesai) return null;
    const ikonAksi = (label, onclick) => h('button', { type: 'button', class: 'icon-btn sm aksi-tugas', 'aria-label': label, 'data-tip': label, onclick }, UKP.icon('chevron-kanan'));
    if (t.jenis === 'topik') { const a = UKP.link(UKP.icon('chevron-kanan'), 'topik', { id: t.ref }, 'icon-btn sm aksi-tugas'); a.setAttribute('aria-label', 'Buka topik ' + t.ref); return a; }
    if (t.jenis === 'simulasi40') return ikonAksi('Mulai simulasi 40 soal ' + t.ref, () => UKP.go('simulasi', { format: 'USKP', kode: t.ref }));
    if (t.jenis === 'komprehensif') return ikonAksi('Mulai simulasi komprehensif', () => UKP.go('simulasi', { format: 'UKP' }));
    if (t.jenis === 'kartu') return ikonAksi('Buka Ulang kartu', () => UKP.go('ulang'));
    if (['laptop', 'seb', 'dummy', 'ruang'].includes(t.id)) return ikonAksi('Buka cek perangkat di Info ujian', () => UKP.go('info-ujian', { bagian: 'iu-perangkat' }));
    return null;
  }
  // minggu yang tuntas lewat centang di sesi ini mendapat stempel "diraih" sekali
  const mingguTuntasDiumumkan = new Set();
  function garisWaktuRencana(v1) {
    const hari = U.hariIni(); const FASE = UKP.rencana.FASE || {};
    const pct = () => v1.total ? Math.round(v1.selesai / v1.total * 100) : 0;
    const prog = UKP.c.progress({ label: 'Tugas rencana selesai', nilai: v1.selesai, maks: Math.max(1, v1.total), teks: () => v1.selesai + ' dari ' + v1.total + ' · ' + pct() + '%', valuetext: () => pct() + ' persen, ' + v1.selesai + ' dari ' + v1.total + ' tugas', kelas: 'pita-progres' });
    const tulisRingkas = () => prog.atur(v1.selesai);
    // P4-07: hanya minggu ini yang terbuka (atau minggu pertama yang belum lewat); minggu lain = details.lipat satu baris.
    // Tugas dikelompokkan per hari; tanggal hanya di subkepala hari, baris tugas memuat jenis + menit.
    const ol = h('ol', { class: 'timeline-minggu' }); let faseSeb = null;
    const noBuka = v1.mingguIni ? v1.mingguIni.no : ((v1.minggu.find(w => !w.lewat) || {}).no || null);
    let kopKini = null;
    const btnKini = h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', hidden: true, onclick: () => { if (!kopKini) return; try { kopKini.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'center' }); } catch (e) { kopKini.scrollIntoView(); } UKP.fokus(kopKini.querySelector('.minggu-label') || kopKini); } }, UKP.icon('chevron-bawah', null, true), 'Minggu ini');
    const tglHariPanjang = iso => { const d = new Date(iso + 'T00:00:00'); return isNaN(d) ? String(iso) : d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short' }); };
    for (const w of v1.minggu) {
      if (w.fase && w.fase !== faseSeb) { ol.appendChild(h('li', { class: 'timeline-fase', 'aria-hidden': 'true', style: { paddingBottom: 'var(--s-2)' } }, h('span', null, FASE[w.fase] || 'Fase belajar'))); faseSeb = w.fase; }
      const telat = w.tugas.filter(t => !t.selesai && t.kapan < hari).length;
      const status = w.kini ? 'kini' : w.lewat ? (telat ? 'tertinggal' : 'lalu') : 'nanti';
      const rentang = rentangTgl(w.mulai, w.akhir).replace(' – ', '–');
      const buka = w.no === noBuka;
      if (!buka) {
        // minggu terlipat: satu baris ringkas; isi dirender saat dibuka pertama kali
        const det = h('details', { class: 'lipat minggu-lipat' }, h('summary', null, 'Minggu ' + w.no + ' · ' + rentang + ' · ' + w.tugas.length + ' tugas' + (w.selesai ? ' · ' + w.selesai + ' selesai' : '') + (status === 'tertinggal' ? ' · ' + telat + ' tertinggal' : '')));
        let terisi = false; det.addEventListener('toggle', () => { if (det.open && !terisi) { terisi = true; det.appendChild(daftarHari(w)); if (typeof UKP.pasangPratinjau === 'function') { try { UKP.pasangPratinjau(det); } catch (e) {} } } });
        ol.appendChild(h('li', { 'data-status': status, style: { paddingBottom: 'var(--s-3)' } }, det)); continue;
      }
      const meta = h('span', { class: 'meta minggu-meta' }); const pillLebih = h('span', { class: 'pill-lebih' });
      const progMinggu = UKP.c.progress({ nilai: w.selesai, maks: Math.max(1, w.tugas.length), ukuran: 'sm', kelas: 'minggu-progres', ariaLabel: 'Progres minggu ' + w.no, valuetext: () => w.selesai + ' dari ' + w.tugas.length + ' tugas' });
      const stempelWadah = h('span', { class: 'stempel-minggu' });
      const tulisMeta = () => { meta.textContent = w.tugas.length + ' tugas · rencana ' + w.menitRencana + ' mnt, tersedia ' + w.menit + ' mnt'; pillLebih.replaceChildren(w.menitRencana > w.menit ? UKP.c.pill('Lebih ' + (w.menitRencana - w.menit) + ' mnt', 'warn') : null); progMinggu.atur(w.selesai); };
      const tulisStempel = baru => { stempelWadah.replaceChildren(w.tugas.length && w.selesai === w.tugas.length ? UKP.c.stempel('MINGGU TUNTAS', 'ok', { diraih: !!baru }) : null); };
      tulisMeta(); tulisStempel(false);
      const kop = h('div', { class: 'minggu-kop' },
        h('span', { class: 'minggu-label', tabindex: '-1' }, 'Minggu ' + w.no + ' · ' + rentang),
        w.kini ? UKP.c.pill('minggu ini', 'nila') : status === 'tertinggal' ? UKP.c.pill(telat + ' tertinggal', 'warn') : null,
        (w.faseSemua || []).length > 1 ? h('span', { class: 'meta minggu-fase' }, w.faseSemua.map(f => { const rf = (v1.rentangFase || []).find(x => x.id === f); const nama = FASE[f] || 'fase berikutnya'; if (f === w.fase || !rf) return nama; return nama + ' (' + rentangTgl(rf.mulai > w.mulai ? rf.mulai : w.mulai, rf.akhir < w.akhir ? rf.akhir : w.akhir).replace(' – ', '–') + ')'; }).join(' lalu ')) : null,
        meta, pillLebih, stempelWadah);
      const li = h('li', { 'data-status': status, 'aria-current': w.kini ? 'step' : null }, kop, progMinggu, daftarHari(w, { tulisMeta, tulisStempel }));
      if (w.kini || !kopKini) kopKini = li;
      ol.appendChild(li);
    }
    function daftarHari(w, cb) {
      cb = cb || {};
      const perHari = {}; w.tugas.forEach(t => { const k = t.kapanAsli || t.kapan; (perHari[k] = perHari[k] || []).push(t); });
      const blokHari = tgl => {
        const ts = perHari[tgl]; const mnt = ts.reduce((a, t) => a + (t.menit || 0), 0);
        return h('div', { class: 'hari-tugas' }, h('h4', { class: 'hari-kop', style: { font: '600 .8125rem/1.4 var(--font-ui)', margin: '4px 0 6px', color: tgl === hari ? 'var(--primary)' : 'var(--ink)' } }, tglHariPanjang(tgl) + (tgl === hari ? ' (hari ini)' : '') + ' · ' + ts.length + ' tugas' + (mnt ? ' · ' + mnt + ' mnt' : '')),
          h('ul', null, ts.map(t => barisTugas(w, t, cb))));
      };
      // hari yang sudah lewat di minggu terbuka dilipat menjadi satu baris; hari ini dan sesudahnya tetap terbuka
      const tgls = Object.keys(perHari).sort(); const lalu = cb.tulisMeta ? tgls.filter(t => t < hari) : [];
      const nLalu = lalu.reduce((a, t) => a + perHari[t].length, 0); const belumLalu = lalu.reduce((a, t) => a + perHari[t].filter(x => !x.selesai).length, 0);
      return h('div', { class: 'stack-sm tugas-per-hari' },
        lalu.length ? h('details', { class: 'lipat hari-lalu' }, h('summary', null, lalu.length + ' hari sebelumnya · ' + nLalu + ' tugas' + (belumLalu ? ' · ' + belumLalu + ' belum selesai' : ' selesai')), h('div', { class: 'stack-sm' }, lalu.map(blokHari))) : null,
        tgls.filter(t => !lalu.includes(t)).map(blokHari));
    }
    function barisTugas(w, t, cb) {
      const id = 'tg-' + String(t.id).replace(/[^\w-]/g, '-'); const jt = JENIS_TUGAS[t.jenis] || [t.jenis, '', 'plan'];
      const terlambat = !t.selesai && t.kapan < hari;
      // garis kiri 3 px hanya untuk tugas non-baca (simulasi, logistik, kartu)
      const label = h('label', { class: 'tugas' + (t.selesai ? ' selesai' : ''), for: id, 'data-jenis': t.jenis === 'topik' ? 'baca' : jt[1], style: { flex: '1 1 auto' } });
      const aksi = aksiTugas(t);
      const cb2 = h('input', { type: 'checkbox', class: 'cek', id, checked: t.selesai ? true : null, disabled: t.otomatis ? true : null, onchange: e => {
        const on = e.target.checked; if (on === t.selesai) return;
        UKP.rencana.tandai(t.id, on); t.selesai = on; w.selesai += on ? 1 : -1; v1.selesai += on ? 1 : -1;
        label.classList.toggle('selesai', on); if (cb.tulisMeta) cb.tulisMeta(); tulisRingkas();
        const tuntas = w.tugas.length && w.selesai === w.tugas.length;
        if (tuntas && !mingguTuntasDiumumkan.has(w.no)) { mingguTuntasDiumumkan.add(w.no); if (cb.tulisStempel) cb.tulisStempel(true); UKP.umumkan('Minggu ' + w.no + ' tuntas.'); }
        else if (cb.tulisStempel) cb.tulisStempel(false);
        if (aksi) aksi.hidden = on;
      } });
      const tp = t.jenis === 'topik' ? K.topik(t.ref) : null;
      const judul = tp ? tp.id + ' ' + tp.judul : t.teks;
      // tugas topik selalu "baca + cek pemahaman": cukup dibacakan pembaca layar, yang tampil hanya menit
      const metaT = [tp ? null : jt[0].toLowerCase(), t.menit ? '± ' + t.menit + ' mnt' : null, t.otomatis ? 'tercatat otomatis' : null].filter(Boolean).join(' · ');
      // meta mengalir sebaris setelah judul (tidak memakan baris sendiri bila masih muat)
      label.style.paddingBlock = '8px';
      label.append(cb2, h('span', { class: 'teks' }, h('span', { class: 'visually-hidden' }, jt[0] + ': '), h('span', { class: 'judul' }, judul), tp ? h('span', { class: 'visually-hidden' }, ', baca dan cek pemahaman') : null, ' ',
        h('span', { class: 'meta', style: { display: 'inline-block', marginLeft: '4px', whiteSpace: 'nowrap', textDecoration: 'none' } }, metaT),
        terlambat ? h('span', { style: { display: 'block', marginTop: '4px' } }, UKP.c.pill('lewat tanggal', 'warn', 'jam')) : null));
      return h('li', { style: { display: 'flex', alignItems: 'center', gap: '4px' } }, label, aksi);
    }
    // tombol "Minggu ini" muncul bila minggu ini di luar layar
    if (kopKini && 'IntersectionObserver' in root) new IntersectionObserver(e => { btnKini.hidden = e[e.length - 1].isIntersecting; }, { threshold: 0 }).observe(kopKini);
    // pratinjau topik (Momen 9) pada tautan topik di garis waktu
    if (typeof UKP.pasangPratinjau === 'function') { try { UKP.pasangPratinjau(ol); } catch (e) { console.error(e); } }
    return sect({ id: 'r-garis-j', judul: 'Jadwal mingguan', meta: (v1.minggu.length ? 'sampai ' + tglPendek(v1.minggu[v1.minggu.length - 1].akhir) + ' · ' : '') + v1.minggu.length + ' minggu', isi: h('div', { class: 'stack garis-waktu' },
      h('div', { class: 'rencana-pita' }, h('div', { style: { flex: '1 1 16rem', minWidth: '0' } }, prog), btnKini), ol) });
  }

  // ---------- pengingat kalender (.ics) ----------
  const escIcs = t => String(t).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
  const lipatIcs = b => { if (b.length <= 74) return b; let out = b.slice(0, 74); for (let i = 74; i < b.length; i += 73) out += '\r\n ' + b.slice(i, i + 73); return out; };
  // VEVENT harian berulang pada jam lokal (waktu mengambang, ikut zona perangkat); berakhir H-1 bila tanggal ujian diisi
  // UID tetap; opsi.seq = jumlah perubahan jam (SEQUENCE), opsi.ubah = ms perubahan terakhir (LAST-MODIFIED), opsi.mulai = tanggal awal tetap
  UKP.isiIcsPengingat = function (jam, menit, sampai, opsi) {
    opsi = opsi || {}; const z = n => String(n).padStart(2, '0');
    const utc = d => d.getUTCFullYear() + z(d.getUTCMonth() + 1) + z(d.getUTCDate()) + 'T' + z(d.getUTCHours()) + z(d.getUTCMinutes()) + z(d.getUTCSeconds()) + 'Z';
    const stamp = utc(new Date()); const ubah = Number.isFinite(opsi.ubah) && opsi.ubah > 0 ? utc(new Date(opsi.ubah)) : stamp;
    const seq = Number.isInteger(opsi.seq) && opsi.seq > 0 ? opsi.seq : 0;
    const [hh, mm] = String(jam || '19:30').split(':'); const tgl = (/^\d{4}-\d{2}-\d{2}$/.test(opsi.mulai || '') ? opsi.mulai : U.hariIni()).replace(/-/g, '');
    const baris = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//MABAR UKP//Pengingat Belajar//ID', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:pengingat-harian@pelatih-ukp', 'SEQUENCE:' + seq, 'DTSTAMP:' + stamp, 'LAST-MODIFIED:' + ubah, 'DTSTART:' + tgl + 'T' + hh + mm + '00', 'DURATION:PT' + menit + 'M',
      'RRULE:FREQ=DAILY' + (sampai ? ';UNTIL=' + String(sampai).replace(/-/g, '') + 'T235959' : ''),
      'SUMMARY:' + escIcs('Sesi MABAR UKP (' + menit + ' menit)'),
      'DESCRIPTION:' + escIcs('Buka MABAR UKP dan kerjakan sesi hari ini. Sesi Kilat 5 menit pun cukup untuk menjaga rangkaian.'),
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + escIcs('Waktunya sesi MABAR UKP'), 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'];
    return baris.map(lipatIcs).join('\r\n') + '\r\n';
  };
  function kartuPengingat(prefix) {
    const s = UKP.store.get(); const g = s.pengaturan; const p = s.profil; const idJam = prefix + '-ics-jam';
    const ta = h('textarea', { class: 'input mono', rows: 8, readonly: true, 'aria-label': 'Isi berkas pengingat .ics', style: { fontSize: '1rem' } });
    const info = h('p', { class: 'tiny muted' });
    const det = h('details', { class: 'lipat' }, h('summary', null, 'Lihat isi berkas'), ta);
    let isiIcs = '';
    function perbarui() {
      const menit = U.clamp(Number(p.menitHariKerja) || 15, 5, 240); const sampai = p.tanggalUjian && p.tanggalUjian > U.hariIni() ? U.tambahHari(p.tanggalUjian, -1) : null;
      isiIcs = UKP.isiIcsPengingat(g.jamPengingat || '19:30', menit, sampai, { seq: g.icsSeq, ubah: g.icsUbah, mulai: g.icsMulai }); ta.value = isiIcs;
      info.textContent = 'Acara harian pukul ' + (g.jamPengingat || '19:30').replace(':', '.') + ' selama ' + menit + ' menit' + (sampai ? ', berulang sampai ' + UKP.fmt.tanggal(sampai) + ', sehari sebelum ujian.' : ', berulang tanpa tanggal akhir (isi tanggal ujian agar berhenti sehari sebelum ujian).');
    }
    const galatJam = h('p', { class: 'galat', id: idJam + '-galat', hidden: true, style: { margin: '0' } });
    const inJam = inputJam({ id: idJam, nilai: g.jamPengingat || '19:30', describedby: idJam + '-bantu ' + idJam + '-info', onUbah: v => { if (/^([01]\d|2[0-3]):[0-5]\d$/.test(v) && v !== g.jamPengingat) { g.jamPengingat = v; g.icsSeq = (Number.isInteger(g.icsSeq) && g.icsSeq > 0 ? g.icsSeq : 0) + 1; g.icsUbah = Date.now(); g.icsMulai = U.hariIni(); UKP.store.save(); perbarui(); } },
      onGalat: pesan => { if (pesan) { galatJam.replaceChildren(UKP.icon('peringatan', null, true), h('span', null, pesan)); galatJam.hidden = false; } else galatJam.hidden = true; } });
    info.id = idJam + '-info'; perbarui();
    // tanggal awal acara ditetapkan saat berkas pertama kali diambil, agar impor ulang dengan UID yang sama tidak menggeser DTSTART
    const tetapkanMulai = () => { if (!/^\d{4}-\d{2}-\d{2}$/.test(g.icsMulai || '')) { g.icsMulai = U.hariIni(); UKP.store.save(); } };
    const salin = async () => { tetapkanMulai(); perbarui(); try { await navigator.clipboard.writeText(isiIcs); UKP.toast('Isi .ics disalin. Tempel ke berkas teks bernama pengingat-ukp.ics, lalu buka dengan aplikasi kalender.'); } catch (e) { det.open = true; ta.focus(); ta.select(); UKP.toast('Salin otomatis tidak tersedia; teks sudah dipilih, salin manual.'); } };
    return h('div', { class: 'stack-sm' },
      h('p', { class: 'small muted' }, 'Pengingat kalender tetap berbunyi walau situs ini tidak dibuka. Susun berkas .ics berisi acara harian berulang, lalu impor ke Google Calendar, Apple Calendar, atau Outlook.'),
      h('div', { class: 'field' }, h('label', { for: idJam }, 'Jam pengingat'), inJam, h('span', { class: 'bantu', id: idJam + '-bantu' }, 'Format 24 jam, misalnya 19.30'), galatJam), info,
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: salin }, 'Salin'), UKP.downloadsAktif ? h('button', { type: 'button', class: 'btn', onclick: () => { tetapkanMulai(); perbarui(); UKP.simpanBerkas('pengingat-pelatih-ukp.ics', isiIcs); } }, 'Simpan berkas') : null),
      det);
  }

  // ================= KEMAJUAN =================
  const tengahkanChip = page => requestAnimationFrame(() => {
    const c = page.querySelector('.chip-row [aria-pressed="true"]'); const row = c && c.isConnected ? c.closest('.chip-row') : null;
    if (!row || row.scrollWidth <= row.clientWidth + 1) return;
    const rc = c.getBoundingClientRect(), rr = row.getBoundingClientRect();
    row.scrollLeft += (rc.left + rc.width / 2) - (rr.left + rr.width / 2);
  });
  // lencana: [id, nama, progres(s) → [nilai, target, satuan]]
  const LENCANA = [
    ['sesi1', 'Sesi Pertama', s => [s.sesi.length, 1, 'sesi']],
    ['hadir7', '7 Hari Hadir', () => [UKP.hadir.rangkaian(), 7, 'hari rangkaian']],
    ['hadir30', '30 Hari Hadir', () => [UKP.hadir.rangkaian(), 30, 'hari rangkaian']],
    ['sesi25', '25 Sesi', s => [s.sesi.length, 25, 'sesi']],
    ['soal200', '200 Soal', s => [s.jawaban.length, 200, 'soal']],
    ['lulus1', 'Memenuhi Batas 60', s => [s.simulasi.filter(x => x.selesai && x.skor >= 60).length, 1, 'simulasi ≥ 60']],
    ['lulus2', 'Dua Kali Lulus', s => [s.simulasi.filter(x => x.selesai && x.skor >= 60).length, 2, 'simulasi ≥ 60']],
    ['stamina', 'Stamina Komprehensif', s => [s.simulasi.some(x => x.selesai && x.format === 'UKP' && !x.terbagi && !x.tanpaWaktu) ? 1 : 0, 1, 'komprehensif berwaktu']],
  ];
  // panel aksi sel peta kelemahan (Momen 4): latih, baca, kartu
  function bukaAksiTopik(id) {
    const t = K.topik(id); if (!t) { UKP.go('topik', { id }); return; }
    const pg = L.penguasaan(id); const st = L.statusTopik(id); const ada = st.tahap === 'dinilai';
    // K-18: status tunggal; nada pill hanya untuk label pengecualian (perlu disegarkan / dikuasai), selain itu netral
    UKP.dialog({ judul: t.id + ' · ' + t.judul, ukuran: 'sm', isi: () => h('div', { class: 'stack-sm' },
      h('div', { class: 'chip-row' }, ada ? UKP.c.pill('skor ' + st.skor, st.label === 'perlu disegarkan' ? 'attn' : st.label === 'dikuasai' ? 'ok' : null) : UKP.c.pill('belum dinilai'), ada && st.label ? UKP.c.pill(st.label) : null, UKP.c.pill(ada ? st.nSoal + ' soal terjawab' : st.teksSampel), ada && pg && pg.akurasi != null ? UKP.c.pill(Math.round(pg.akurasi * 100) + '% benar 30 hari') : null),
      h('p', { class: 'small muted' }, ada ? 'Pilih langkah berikutnya untuk topik ini.' : (L.TEKS_DINILAI ? L.TEKS_DINILAI.split('. ')[0] + '.' : 'Topik dinilai setelah 8 soal.') + ' Latih topik ini untuk melengkapinya.')),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => { dlg.close(); UKP.go('ulang', { kode: t.kode }); } }, UKP.icon('dek'), 'Kartu ' + t.kode),
        h('button', { type: 'button', class: 'btn', onclick: () => { dlg.close(); UKP.go('topik', { id: t.id }); } }, UKP.icon('book'), 'Baca ringkasan'),
        h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => { dlg.close(); UKP.go('latih', { topik: t.id, kode: t.kode, n: 10, mulai: true }); } }, UKP.icon('pen'), 'Latih 10 soal')] });
  }
  UKP.views.kemajuan = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat; const page = h('div', { class: 'page lebar halaman-kemajuan' });
    // v7.2: tab Ringkasan hanya kesiapan, satu baris rangkaian/akurasi, dan posisi penguasaan (sesi hari ini ada di Rencana)
    const adaRingkasan = typeof UKP.c.dasborKemajuan === 'function';
    const TAB = ['ringkasan', 'hadir', 'peta', 'salah', 'laporan', 'lencana']; const awal = TAB.includes(params.tab) && (params.tab !== 'ringkasan' || adaRingkasan) ? params.tab : adaRingkasan ? 'ringkasan' : 'hadir';
    const hariDari = ts => (U.hariDari ? U.hariDari(ts) : U.iso(new Date(ts)));
    const nRangkaian = UKP.hadir.rangkaian();
    page.appendChild(UKP.c.kop({ judul: 'Kemajuan', lead: 'Lihat topik yang masih lemah dan kesalahan yang berulang, lalu latih langsung dari sini.' }));
    if (UKP.views.bank && typeof UKP.c.barisBank === 'function') { const bb = UKP.c.barisBank(tingkat); if (bb) page.appendChild(bb); }  // v9.5 satu baris Bank soal
    const ctaLatih = () => h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-sm', onclick: () => UKP.go('latih', { n: 10, mulai: true }) }, UKP.icon('pen', null, true), 'Latih 10 soal'));
    const bk = L.bukuKesalahan(tingkat, 60);
    const nLencana = LENCANA.filter(([id]) => s.lencana[id]).length;
    let bulanAktif = /^\d{4}-\d{2}$/.test(params.bulan || '') ? params.bulan : (UKP.bulanIni ? UKP.bulanIni() : U.hariIni().slice(0, 7));
    let tagTuju = params.tag || null;
    // ---------- tab: Kartu Hadir ----------
    function tabHadir(wadah) {
      const bulanIso = bulanAktif; const [y, m1] = bulanIso.split('-').map(Number);
      const geser = n => { const b = new Date(y, m1 - 1 + n, 1); bulanAktif = b.getFullYear() + '-' + String(b.getMonth() + 1).padStart(2, '0'); UKP.perbaruiParams({ bulan: bulanAktif }, 'kemajuan'); wadah.replaceChildren(); tabHadir(wadah); const t = wadah.querySelector(n < 0 ? '[data-geser="-1"]' : '[data-geser="1"]'); if (t) t.focus(); };
      const hadirBulan = Object.entries(s.hadir).filter(([k]) => k.startsWith(bulanIso)); const menitBulan = hadirBulan.reduce((a, [, v]) => a + (v.menit || 0), 0);
      const nHadir = hadirBulan.filter(([, v]) => v.status === 'HADIR').length;
      wadah.appendChild(h('section', { class: 'card', 'aria-labelledby': 'km-bulan' },
        h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'km-bulan', 'aria-live': 'polite' }, UKP.fmt.bulanTahun(bulanIso)),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'icon-btn sm', 'data-geser': '-1', 'aria-label': 'Bulan sebelumnya', 'data-tip': 'Bulan sebelumnya', onclick: () => geser(-1) }, UKP.icon('back')), h('button', { type: 'button', class: 'icon-btn sm', 'data-geser': '1', 'aria-label': 'Bulan berikutnya', 'data-tip': 'Bulan berikutnya', onclick: () => geser(1) }, UKP.icon('chevron-kanan')))),
        UKP.c.hadirBulan ? UKP.c.hadirBulan(bulanIso) : null,
        h('div', { class: 'chip-row' }, UKP.c.pill(nHadir + ' hari hadir', nHadir ? 'ok' : null), UKP.c.pill(Math.round(menitBulan) + ' menit'), nRangkaian ? UKP.c.pill('rangkaian ' + nRangkaian + ' hari', 'nila') : null),
        nRangkaian ? null : h('p', { class: 'small muted' }, 'Sesi pertama hari ini memulai rangkaian.'),
        h('p', { class: 'tiny muted' }, 'HADIR = ada sesi/latihan; IZIN/CUTI = dilewati dengan sadar, rangkaian tidak putus.')));
      if (UKP.viz) {
        const nHari = new Date(y, m1, 0).getDate(); const kini = U.hariIni(); const data = [];
        for (let d = 1; d <= nHari; d++) { const iso = bulanIso + '-' + String(d).padStart(2, '0'); if (iso > kini) break; const v = s.hadir[iso]; data.push({ label: String(d), nilai: v && v.status === 'HADIR' ? Math.round(v.menit || 0) : 0, judulPanjang: UKP.fmt.tanggal(iso) + (v ? ' · ' + v.status : '') }); }
        if (data.length) wadah.appendChild(h('div', { class: 'card' }, UKP.viz.kolom({ judul: 'Menit belajar per hari', sub: UKP.fmt.bulanTahun(bulanIso), data, satuan: 'mnt', sorot: bulanIso === kini.slice(0, 7) ? data.length - 1 : null, kolomLabel: 'Tanggal', kolomNilai: 'Menit' })));
      }
    }
    // ---------- tab: Peta kelemahan (Momen 4: sel dapat diklik → panel aksi) ----------
    function tabPeta(wadah) {
      const V = UKP.viz; const kel = K.kelompok(tingkat);
      // K-18: status penguasaan tunggal (statusTopik/statusKelompok); p (penguasaan) hanya untuk akurasi dan waktu jawaban terakhir
      const stTopik = id => L.statusTopik(id); const stKel = k => (L.statusKelompok ? L.statusKelompok(k) : null);
      const semua = kel.flatMap(k => UKP.modul[k].topik.map(t => ({ t, p: L.penguasaan(t.id), st: stTopik(t.id) })));
      const rows = semua.filter(x => x.st.tahap === 'dinilai').sort((a, b) => a.st.skor - b.st.skor); const kurang = semua.length - rows.length;
      const maksTopik = Math.max(0, ...kel.map(k => UKP.modul[k].topik.length));
      const peta = {}; semua.forEach(x => { peta[x.t.id] = x; });
      const topikDi = (b, k) => UKP.modul[b.id].topik[k.id - 1] || null;
      // status di atas peta + bar sampel (T18)
      wadah.appendChild(h('div', { class: 'stack-sm' }, h('p', { class: 'small' }, h('strong', null, rows.length + ' dari ' + semua.length + ' topik'), ' sudah dinilai · topik dinilai setelah ' + (L.BUTUH_SOAL_TOPIK || 8) + ' soal'), UKP.c.progress({ nilai: rows.length, maks: Math.max(1, semua.length), ukuran: 'sm', ariaLabel: 'Topik yang sudah dinilai', valuetext: rows.length + ' dari ' + semua.length + ' topik' })));
      // §3.3: sel netral (--surface; belum dinilai = --trek); nada attn hanya untuk pengecualian "perlu disegarkan".
      // Bila ≥ 50% topik yang dinilai perlu disegarkan, status ditulis sekali dan hanya 5 terlemah yang bertanda
      const rendah = rows.filter(x => x.st.label === 'perlu disegarkan'); const mayoritasRendah = rendah.length > 0 && rendah.length * 2 >= rows.length;
      const ditandai = new Set((mayoritasRendah ? rendah.slice(0, 5) : rendah).map(x => x.t.id));
      if (mayoritasRendah && UKP.c.ringkasStatus) wadah.appendChild(UKP.c.ringkasStatus(rendah.length + ' dari ' + rows.length + ' topik yang dinilai perlu disegarkan. Mulai dari ' + (rendah.length > 5 ? '5 terlemah, dimulai ' : 'yang terlemah, ') + rendah[0].t.id + ' (skor ' + rendah[0].st.skor + ')' + (rendah.length > 5 ? '; kelima selnya bertanda merah.' : '.')));
      // semua sel belum cukup data → cukup status + bar sampel + satu keadaan kosong (tanpa grid "–")
      if (V && kel.length && maksTopik && rows.length) {
        const kartu = h('div', { class: 'card peta-klik' }, V.heatmap({ netral: true, nadaSel: (b, k) => { const t = topikDi(b, k); return t && ditandai.has(t.id) ? 'attn' : null; },
          judul: 'Peta penguasaan: kelompok × topik', sub: 'klik sel untuk latih, baca, atau buka kartu; topik dinilai setelah ' + (L.BUTUH_SOAL_TOPIK || 8) + ' soal', kolomLabel: 'Kelompok', labelKosong: 'belum dinilai', labelIsi: 'dinilai (skor)',
          baris: kel.map(k => { const sk = stKel(k); return { id: k, label: k, judulPanjang: k + ' ' + K.namaKelompok(k) + (sk ? ' · ' + sk.teks : '') }; }), kolom: Array.from({ length: maksTopik }, (_, i) => ({ id: i + 1, label: String(i + 1), judulPanjang: 'topik ' + (i + 1) })),
          nilai: (b, k) => { const t = topikDi(b, k); if (!t) return undefined; const x = peta[t.id]; return x && x.st.tahap === 'dinilai' ? x.st.skor : null; },
          // label/tooltip sel: "A1.6 PTKP · 54 · 9 soal · 2 hari lalu" (skor dari nilai sel bila n ≥ 8; waktu jawaban terakhir relatif)
          labelSel: (b, k) => { const t = topikDi(b, k); return t ? t.id + ' ' + t.judul : b.label; },
          detailSel: (b, k) => { const t = topikDi(b, k); const x = t ? peta[t.id] : null; if (!x) return null; return x.st.tahap === 'dinilai' ? [x.st.nSoal + ' soal', x.st.label] : x.st.teksSampel; },
          terakhirSel: (b, k) => { const t = topikDi(b, k); const x = t ? peta[t.id] : null; return x && x.p.terakhir ? x.p.terakhir : null; },
          tautan: (b, k) => { const t = topikDi(b, k); return t ? { view: 'topik', params: { id: t.id } } : null; },
          // panel aksi kecil non-modal (Momen 4); viz lama tanpa dukungan aksi tetap memakai tautan + panel dialog di bawah
          aksi: (b, k) => { const t = topikDi(b, k); return t ? [{ label: 'Latih 10 soal topik ini', view: 'latih', params: { topik: t.id, kode: t.kode, n: 10, mulai: true } }, { label: 'Baca ringkasan', view: 'topik', params: { id: t.id } }, { label: 'Kartu ' + t.kode, view: 'ulang', params: { kode: t.kode } }] : null; } }));
        // tautan sel dicegat (fase tangkap) → panel aksi; klik dengan pengubah tetap dibiarkan ke peramban
        kartu.addEventListener('click', e => { if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; const a = e.target.closest && e.target.closest('a[data-go="topik"]'); if (!a || !kartu.contains(a)) return; e.preventDefault(); e.stopPropagation(); let pr = {}; try { pr = JSON.parse(a.dataset.params || '{}'); } catch (er) {} if (pr.id) bukaAksiTopik(pr.id); }, true);
        wadah.appendChild(kartu);
      }
      if (!rows.length) wadah.appendChild(UKP.c.kosong('Belum ada topik dengan data cukup', 'Kerjakan diagnosis atau Latih 10 soal; angka muncul setelah 8 soal per topik.', ctaLatih(), { ikon: 'chart' }));
      else wadah.appendChild(h('section', { class: 'card', 'aria-label': 'Topik terlemah' },
        h('p', { class: 'card-meta' }, 'Skor = akurasi yang ditimbang kebaruan dan tingkat kesulitan; batas aman 60.'),
        // 5 topik terlemah tampil; sisanya dilipat (K-06)
        V ? (() => { const dataBatang = arr => arr.map(x => ({ label: x.t.id + ' ' + x.t.judul, nilai: x.st.skor, tone: null, sub: Math.round(x.p.akurasi * 100) + '% benar dari ' + x.p.n + ' soal', view: 'topik', params: { id: x.t.id } }));
          const semuaB = rows.slice(0, 40); const awalB = semuaB.length > 7 ? semuaB.slice(0, 5) : semuaB; const sisaB = semuaB.slice(awalB.length);
          return [V.batang({ judul: 'Topik terlemah → terkuat', sub: 'garis putus = batas 60', maks: 100, acuan: 60, format: n => 'skor ' + n, data: dataBatang(awalB) }),
            sisaB.length ? h('details', { class: 'lipat lipat-sisa' }, h('summary', null, 'Lihat semua ' + semuaB.length + ' topik'), h('div', { style: { padding: '0 var(--s-3) var(--s-3)' } }, V.batang({ judul: 'Topik ' + (awalB.length + 1) + '–' + semuaB.length, maks: 100, acuan: 60, format: n => 'skor ' + n, data: dataBatang(sisaB) }))) : null]; })()
          : h('ul', { class: 'bersih small' }, rows.slice(0, 40).map(x => h('li', null, UKP.link(x.t.id + ' ' + x.t.judul, 'topik', { id: x.t.id }), ' — skor ' + x.st.skor))),
        kurang ? h('p', { class: 'tiny muted' }, kurang + ' topik lain belum punya 8 soal terjawab, jadi belum dinilai.') : null,
        h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-primary', onclick: () => UKP.go('latih', { topik: rows[0].t.id, kode: rows[0].t.kode, n: 10, mulai: true }) }, UKP.icon('pen'), 'Latih 10 terlemah'))));
      // heatmap kelompok × jenis soal (akurasi; minimal 3 jawaban per sel) — sel bertautan ke Latih kelompok × jenis
      const jenis = ['konsep', 'klasifikasi', 'hitung', 'prosedur', 'kasus', 'baris-spt']; const agg = {};
      for (const j of s.jawaban) { if (j.opsi === '-') continue; const so = K.soal(j.soal); if (!so || !kel.includes(so.kode)) continue; const key = so.kode + '|' + so.jenis; agg[key] = agg[key] || { n: 0, b: 0 }; agg[key].n++; if (j.benar) agg[key].b++; }
      const nilaiJ = Object.values(agg).filter(a => a.n >= 3).map(a => Math.round(a.b / a.n * 100)).sort((a, b) => a - b);
      const rendahJ = nilaiJ.filter(v => v < 60); const mayoritasJ = rendahJ.length > 0 && rendahJ.length * 2 >= nilaiJ.length; const batasJ = mayoritasJ ? (rendahJ[Math.min(2, rendahJ.length - 1)] ?? -1) : 59;
      // §3.3-2: bila ≥ 50% sel di bawah 60, status ditulis sekali dan hanya tiga terendah bertanda merah
      const nTandaJ = nilaiJ.filter(v => v < 60 && v <= batasJ).length; const KATA = ['Nol', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
      const ringkasJ = mayoritasJ && UKP.c.ringkasStatus ? UKP.c.ringkasStatus(rendahJ.length + ' dari ' + nilaiJ.length + ' sel di bawah 60. ' + (KATA[nTandaJ] || String(nTandaJ)) + ' terendah bertanda merah.') : null;
      if (Object.values(agg).some(a => a.n >= 3) && V) wadah.appendChild(h('div', { class: 'card' }, ringkasJ, V.heatmap({ netral: true, labelIsi: '% benar', nadaSel: (b, k, v) => v < 60 && v <= batasJ ? 'attn' : null,
        judul: 'Akurasi per kelompok × jenis soal', sub: '% benar, semua waktu; klik sel untuk latih 10 soal kelompok × jenis itu', kolomLabel: 'Kelompok', labelKosong: 'kurang dari 3 jawaban',
        baris: kel.map(k => ({ id: k, label: k, judulPanjang: k + ' ' + K.namaKelompok(k) })), kolom: jenis.map(j => ({ id: j, label: j === 'baris-spt' ? 'baris SPT' : j })),
        nilai: (b, k) => { const a = agg[b.id + '|' + k.id]; return a && a.n >= 3 ? Math.round(a.b / a.n * 100) : null; },
        labelSel: (b, k) => { const a = agg[b.id + '|' + k.id]; return 'Latih ' + b.label + ' · ' + k.label + (a ? ' (' + a.n + ' jawaban)' : ''); },
        tautan: (b, k) => agg[b.id + '|' + k.id] ? { view: 'latih', params: { kode: b.id, jenis: k.id, n: 10, mulai: true } } : null })));
      // sebab kesalahan: batang → Buku Kesalahan grup tag itu
      const sebab = {}; for (const j of s.jawaban) if (!j.benar && j.tag) sebab[j.tag] = (sebab[j.tag] || 0) + 1;
      const sebabRows = Object.entries(sebab).sort((a, b) => b[1] - a[1]);
      if (sebabRows.length && V) {
        const totalSebab = sebabRows.reduce((a, x) => a + x[1], 0);
        const kartuSebab = h('div', { class: 'card' }, V.batang({ judul: 'Sebab kesalahan', sub: 'klik sebab untuk membuka grupnya di Buku Kesalahan', maks: '560px', data: sebabRows.map(([t, n], i) => ({ label: UKP.tagLabel(t), nilai: n, tone: i === 0 ? 'warn' : null, onklik: () => { tagTuju = t; tabs.pilih('salah'); } })), format: n => n + ' dari ' + totalSebab + ' kesalahan' }),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => tabs.pilih('salah') }, 'Buka Buku Kesalahan')));
        kartuSebab.addEventListener('click', e => { if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; const a = e.target.closest && e.target.closest('a[data-go="kemajuan"]'); if (!a) return; e.preventDefault(); e.stopPropagation(); let pr = {}; try { pr = JSON.parse(a.dataset.params || '{}'); } catch (er) {} tagTuju = pr.tag || null; tabs.pilih('salah'); }, true);
        wadah.appendChild(kartuSebab);
      }
    }
    // ---------- tab: Buku Kesalahan ----------
    function tabSalah(wadah) {
      if (!bk.length) { wadah.appendChild(UKP.c.kosong('Buku Kesalahan masih kosong', 'Soal yang keliru akan tercatat di sini dengan tag sebabnya.', ctaLatih(), { ikon: 'pen' })); return; }
      const grup = {}; bk.forEach(j => { const k = j.tag || '_'; (grup[k] = grup[k] || []).push(j); });
      const urut = Object.keys(grup).sort((a, b) => (grup[b].length - grup[a].length) || ((a === '_') - (b === '_')));
      const namaGrup = k => k === '_' ? 'Tanpa tag sebab' : UKP.tagLabel(k);
      wadah.append(h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-primary', onclick: () => UKP.go('latih', { hanyaSalah: true, n: 10, mulai: true }) }, UKP.icon('repeat'), 'Ulangi 10 dari Buku Kesalahan'),
        urut.length > 1 ? h('div', { class: 'chip-row', role: 'group', 'aria-label': 'Lompat ke sebab' }, urut.map((k, gi) => h('button', { type: 'button', class: 'chip', onclick: () => { const el = document.getElementById('bk-grup-' + gi); if (el) { try { el.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {} UKP.fokus(el); } } }, namaGrup(k) + ' · ' + grup[k].length))) : null));
      if (UKP.viz) wadah.appendChild(h('div', { class: 'card' }, UKP.viz.batang({ judul: 'Sebab kesalahan', sub: bk.length + ' soal terakhir yang keliru', maks: '560px', data: urut.map((k, i) => ({ label: namaGrup(k), nilai: grup[k].length, tone: i === 0 && k !== '_' ? 'warn' : null })), format: n => n + ' dari ' + bk.length + ' soal' })));
      urut.forEach((k, gi) => {
        const idJ = 'bk-grup-' + gi; const tip = TIP_SEBAB[k];
        wadah.appendChild(h('section', { class: 'card', 'aria-labelledby': idJ, 'data-tag': k },
          h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: idJ, tabindex: '-1' }, namaGrup(k), ' ', UKP.c.pill(grup[k].length + ' soal', k === 'angka-usang' ? 'warn' : null)), tip ? UKP.c.tautanKop(tip[0], tip[1], tip[2] || null) : null),
          tip && tip[3] ? h('p', { class: 'small muted' }, tip[3]) : null,
          h('div', { class: 'list-rows' }, grup[k].map(j => {
            const so = K.soal(j.soal); if (!so) return null;
            const status = h('span', { class: 'status-ulang', role: 'status' });
            return h('div', { class: 'baris-salah stack-sm', style: { padding: '12px 0', borderBottom: '1px solid var(--line-subtle, var(--line))' } },
              h('div', { class: 'between' }, h('span', { class: 'mono tiny muted' }, so.id + ' · ' + UKP.fmt.tanggal(hariDari(j.pada)) + ' · ' + j.konteks), h('button', { type: 'button', class: 'btn btn-sm', 'aria-label': 'Kerjakan ulang soal ' + so.id, onclick: () => bukaSoalDialog(so, { onBenar: b => { status.replaceChildren(b ? UKP.c.pill('sudah benar 1×', 'ok', 'cek-lingkar') : UKP.c.pill('masih keliru', 'attn', 'x-lingkar')); } }) }, UKP.icon('repeat', null, true), 'Kerjakan ulang')),
              h('p', { class: 'small' }, so.stem.slice(0, 160) + (so.stem.length > 160 ? '…' : '')),
              h('div', { class: 'chip-row' }, UKP.c.pill('jawaban Anda ' + j.opsi, 'attn'), UKP.c.pill('kunci ' + so.kunci, 'ok'), status),
              (so.pembahasan || {}).inti ? h('p', { class: 'tiny muted' }, so.pembahasan.inti) : null);
          }))));
      });
      if (tagTuju) { const el = wadah.querySelector('[data-tag="' + String(tagTuju).replace(/"/g, '') + '"] h2'); tagTuju = null; if (el) setTimeout(() => { try { el.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {} UKP.fokus(el); }, 30); }
    }
    // ---------- tab: Laporan mingguan (kartu) ----------
    function tabLaporan(wadah) {
      try { if (L.laporanMingguan) L.laporanMingguan(); } catch (e) { console.error(e); }
      const daftar = (Array.isArray(s.laporan) ? s.laporan : []).slice().reverse();
      wadah.appendChild(h('div', { class: 'between' }, h('p', { class: 'tiny muted', style: { flex: '1 1 20rem' } }, 'Laporan tersusun otomatis setiap Jumat dan tersimpan di perangkat ini.'),
        h('div', { class: 'btn-row' }, daftar.length ? UKP.c.salin(() => teksLaporan(daftar[0]), { label: 'Salin laporan terbaru', pesan: 'Laporan disalin.' }) : null,
          h('button', { type: 'button', class: 'btn btn-sm', 'data-aksi': 'buat-laporan', onclick: () => { let lap = null; try { lap = L.laporanMingguan({ minggu: 'ini', paksa: true }); } catch (e) { console.error(e); } UKP.toast(lap ? 'Laporan minggu ini diperbarui.' : 'Laporan belum bisa dibuat.', { nada: lap ? 'ok' : 'info' }); wadah.replaceChildren(); tabLaporan(wadah);
            const judul = lap ? wadah.querySelector('article.laporan h2') : null; const target = judul || wadah.querySelector('[data-aksi="buat-laporan"]');
            if (judul) { try { judul.closest('article').scrollIntoView({ behavior: UKP.gulirHalus(), block: 'nearest' }); } catch (e) {} }
            UKP.fokus(target); } }, UKP.icon('atur-ulang', null, true), 'Buat laporan minggu ini'))));
      if (!daftar.length) { wadah.appendChild(UKP.c.kosong('Belum ada laporan', 'Laporan mingguan muncul setelah ada sesi atau latihan. Tekan "Buat laporan minggu ini" untuk ringkasan sementara.', null, { ikon: 'chart' })); return; }
      const tren = daftar.slice().reverse().filter(l => l.akurasi != null).slice(-12);
      if (tren.length >= 2 && UKP.viz) wadah.appendChild(h('div', { class: 'card' }, UKP.viz.garis({ judul: 'Akurasi per minggu', sub: tren.length + ' minggu terakhir', titik: tren.map(l => ({ x: tglPendek(l.mulai), y: Math.round(l.akurasi * 100), judulPanjang: rentangTgl(l.mulai, l.akhir) })), acuan: 60, acuanLabel: 'batas lulus', format: 'persen', labelSeri: 'Akurasi', kolomLabel: 'Minggu', kolomNilai: 'Akurasi' })));
      wadah.appendChild(kartuLaporan(daftar[0], true));
      if (daftar.length > 1) wadah.appendChild(h('section', { class: 'sect', 'aria-label': 'Laporan sebelumnya' }, h('div', { class: 'eyebrow' }, 'Laporan sebelumnya'), h('div', { class: 'card-grid dua rata' }, daftar.slice(1).map(l => {
        const pct = l.akurasi == null ? null : Math.round(l.akurasi * 100);
        return UKP.c.kartu({ judul: rentangTgl(l.mulai, l.akhir), label: 'Buka laporan ' + rentangTgl(l.mulai, l.akhir), onclick: () => UKP.dialog({ judul: 'Laporan ' + rentangTgl(l.mulai, l.akhir), ukuran: 'lg', isi: () => kartuLaporan(l, false), kaki: dlg => [UKP.c.salin(() => teksLaporan(l), { label: 'Salin', pesan: 'Laporan disalin.' }), h('button', { type: 'button', class: 'btn btn-primary', onclick: () => dlg.close() }, 'Tutup')] }),
          isi: h('div', { class: 'chip-row' }, UKP.c.pill(pct == null ? 'tanpa soal' : 'akurasi ' + pct + '%', pct == null ? null : pct < 60 ? 'attn' : pct < 80 ? 'warn' : 'ok'), UKP.c.pill((l.n || 0) + ' soal'), UKP.c.pill((l.hadir || 0) + ' hari hadir')),
          kaki: [l.final ? null : UKP.c.pill('sementara'), h('span', { class: 'tautan-kop', 'aria-hidden': 'true' }, 'Buka', UKP.icon('chevron-kanan', null, true))] });
      }))));
      let ubah = false; daftar.forEach(l => { if (!l.dibaca) { l.dibaca = Date.now(); ubah = true; } }); if (ubah) UKP.store.save();
    }
    // ---------- tab: Lencana (progres untuk yang belum) ----------
    function tabLencana(wadah) {
      let dilihat = []; try { dilihat = JSON.parse(sessionStorage.getItem('ukp.lencanaDilihat') || '[]'); } catch (e) {}
      const baru = [];
      wadah.appendChild(h('div', { class: 'card-grid dua rata' }, LENCANA.map(([id, nama, fn]) => {
        const d = s.lencana[id]; let pr = [0, 1, '']; try { pr = fn(s); } catch (e) {}
        const [n, target, satuan] = pr; const capai = Math.min(n, target);
        if (d && !dilihat.includes(id)) baru.push(id);
        return h('section', { class: 'card lencana', 'data-diraih': d ? '' : null, 'aria-label': nama + (d ? ', diraih' : ', belum') },
          h('div', { class: 'card-head' }, h('h3', { class: 'card-title' }, nama), d ? UKP.c.stempel('DIRAIH', 'ok', { diraih: !dilihat.includes(id) }) : UKP.c.pill('belum')),
          d ? h('p', { class: 'tiny muted' }, 'Diraih ' + UKP.fmt.tanggal(U.iso(new Date(d.pada))))
            : UKP.c.progress({ label: satuan, nilai: capai, maks: target, teks: capai + '/' + target + (target - capai > 0 ? ' · kurang ' + (target - capai) : ''), ukuran: 'sm', valuetext: capai + ' dari ' + target + ' ' + satuan }));
      })));
      if (baru.length) { try { sessionStorage.setItem('ukp.lencanaDilihat', JSON.stringify(dilihat.concat(baru))); } catch (e) {} }
    }
    const tabRingkasan = wadah => { wadah.appendChild(UKP.c.dasborKemajuan()); };
    const BANGUN = { ringkasan: tabRingkasan, hadir: tabHadir, peta: tabPeta, salah: tabSalah, laporan: tabLaporan, lencana: tabLencana };
    const nLap = Array.isArray(s.laporan) ? s.laporan.filter(l => !l.dibaca).length : 0;
    const tabs = UKP.c.tabs({ id: 'km', label: 'Bagian Kemajuan', aktif: awal,
      tab: [adaRingkasan ? { id: 'ringkasan', label: 'Ringkasan', labelPendek: 'Ringkasan' } : null, { id: 'hadir', label: 'Kartu Hadir', labelPendek: 'Hadir' }, { id: 'peta', label: 'Peta kelemahan', labelPendek: 'Kelemahan' }, { id: 'salah', label: 'Buku Kesalahan', labelPendek: 'Kesalahan', hitung: bk.length || null }, { id: 'laporan', label: 'Laporan', labelPendek: 'Laporan', hitung: nLap || null }, { id: 'lencana', label: 'Lencana', labelPendek: 'Lencana', hitung: nLencana + '/' + LENCANA.length }].filter(Boolean),
      isi: (id, panel) => { const w = h('div', { class: 'stack tab-isi' }); try { BANGUN[id](w); } catch (e) { console.error(e); w.appendChild(UKP.c.kosong('Bagian ini gagal dimuat', e.message)); } if (panel.isConnected) requestAnimationFrame(() => UKP.pasangHitung(panel)); return w; },
      onGanti: id => { UKP.perbaruiParams({ tab: id, tag: null }, 'kemajuan'); } });
    page.append(tabs.el, tabs.elPanel);
    return page;
  };
  // teks laporan untuk disalin (Momen 7, format kuitansi ringkas tanpa data pribadi)
  function teksLaporan(l) {
    const pct = l.akurasi == null ? null : Math.round(l.akurasi * 100);
    return ['Laporan mingguan MABAR UKP · ' + rentangTgl(l.mulai, l.akhir),
      'Akurasi: ' + (pct == null ? '–' : pct + '%') + ' dari ' + (l.n || 0) + ' soal (' + (l.benar || 0) + ' benar)',
      'Hari hadir: ' + (l.hadir || 0) + ' · ' + (l.menit || 0) + ' menit · ' + (l.sesi || 0) + ' sesi',
      (l.topikNaik || []).length ? 'Naik: ' + l.topikNaik.map(x => x.id + ' ' + x.dari + '→' + x.ke + '%').join('; ') : null,
      (l.topikTurun || []).length ? 'Turun: ' + l.topikTurun.map(x => x.id + ' ' + x.dari + '→' + x.ke + '%').join('; ') : null,
      (l.saran || []).length ? 'Saran: ' + l.saran.map(x => x.teks).join(' ') : null].filter(Boolean).join('\n');
  }

  // ---------- Buku Kesalahan: saran per sebab ----------
  const TIP_SEBAB = {
    'angka-usang': ['Dek Perubahan', 'ulang', { dek: 'perubahan' }, 'Jawaban memakai ketentuan lama; ulang kartu perubahan 2025–2026.'],
    'salah-baca': ['Strategi PG', 'strategi', null, 'Baca kata kualifikasi (kecuali, paling lama, paling sedikit) dua kali sebelum memilih.'],
    'salah-hitung': ['Latih soal hitung', 'latih', { jenis: 'hitung', n: 10, mulai: true }, 'Tulis jejak hitung; cek dasar pengenaan dan pembulatan.'],
    'lupa-pasal': ['Indeks peraturan', 'referensi', { tab: 'peraturan' }, 'Hubungkan angka dengan pasalnya; kartu pasal membantu.'],
    'final-nonfinal': ['Latih klasifikasi', 'latih', { jenis: 'klasifikasi', n: 10, mulai: true }, 'Pisahkan penghasilan final dari non-final sebelum menghitung.'],
    'salah-klasifikasi': ['Latih klasifikasi', 'latih', { jenis: 'klasifikasi', n: 10, mulai: true }, null],
  };
  // kerjakan ulang satu soal di dialog (tercatat sebagai latihan)
  function bukaSoalDialog(so, opsi) {
    opsi = opsi || {};
    UKP.dialog({ judul: 'Soal ' + so.id, ukuran: 'lg', isi: dlg => h('div', { class: 'stack' }, UKP.c.soal(so, { konteks: 'latih', fokus: false, tanpaLog: !!opsi.tanpaLog, labelLanjut: 'Tutup', onLanjut: b => { dlg.close(); if (opsi.onBenar) opsi.onBenar(!!b); } })) });
  }

  // ---------- laporan mingguan (satu kartu) ----------
  function kartuLaporan(l, terbaru) {
    const V = UKP.viz; const pct = l.akurasi == null ? null : Math.round(l.akurasi * 100); const idJ = 'lap-' + String(l.minggu).replace(/\W/g, '');
    const tile = (o) => V ? V.statTile(o) : h('div', { class: 'stat' }, h('span', { class: 'label' }, o.label), h('span', { class: 'nilai' }, o.nilai));
    const dSoal = l.final && l.sebelum && typeof l.sebelum.n === 'number' ? l.n - l.sebelum.n : null;
    // subbagian: judul sans h3 (satu eyebrow per kartu, §3.2); keterangan opsional sebagai .meta
    const bagian = (judul, isi, ket) => h('div', { class: 'bagian' }, h('div', { class: 'bagian-kop' }, h('h3', null, judul), ket ? h('span', { class: 'meta' }, ket) : null), isi);
    const judulTopik = x => x.id + ' ' + (x.judul || '');
    const art = h('article', { class: 'laporan', 'data-baru': terbaru && !l.dibaca ? '' : null, 'aria-labelledby': idJ },
      h('div', { class: 'laporan-kop' }, h('span', { class: 'eyebrow' }, 'Laporan mingguan')),
      h('h2', { class: 'card-title', id: idJ, tabindex: '-1' }, rentangTgl(l.mulai, l.akhir).replace(' – ', ' – '), l.final ? null : [' ', UKP.c.pill('sementara')]),
      l.final ? null : h('p', { class: 'meta' }, 'Data sampai ' + tglPendek(l.akhir) + '; angka berubah sampai minggu berakhir.'),
      h('div', { class: 'pita-stat' },
        // delta sebagai kalimat .meta netral, tanpa pill dan tanpa dipotong
        tile({ label: 'Akurasi', nilai: pct == null ? '–' : pct + '%', sub: typeof l.deltaAkurasi === 'number' && l.deltaAkurasi ? (l.deltaAkurasi > 0 ? '+' : '−') + Math.abs(Math.round(l.deltaAkurasi)) + ' poin dari minggu lalu' : null }),
        tile({ label: 'Soal dijawab', nilai: l.n, sub: l.benar + ' benar' + (typeof dSoal === 'number' && dSoal ? ' · ' + (dSoal > 0 ? '+' : '−') + Math.abs(dSoal) + ' dari minggu lalu' : '') }),
        tile({ label: 'Hari hadir', nilai: l.hadir, sub: (l.menit || 0) + ' menit tercatat' }),
        tile({ label: 'Sesi', nilai: l.sesi || 0, sub: (l.simulasi || []).length ? (l.simulasi || []).length + ' simulasi' : 'tanpa simulasi' })),
      (l.topikNaik || []).length || (l.topikTurun || []).length ? bagian('Topik naik dan turun', h('ul', null,
        (l.topikNaik || []).map(x => h('li', { class: 'naik' }, h('span', { class: 'visually-hidden' }, 'Naik: '), UKP.link(judulTopik(x), 'topik', { id: x.id }), ' ' + x.dari + '% → ' + x.ke + '%')),
        (l.topikTurun || []).map(x => h('li', { class: 'turun' }, h('span', { class: 'visually-hidden' }, 'Turun: '), UKP.link(judulTopik(x), 'topik', { id: x.id }), ' ' + x.dari + '% → ' + x.ke + '%'))), 'akurasi vs minggu sebelumnya') : bagian('Topik naik dan turun', h('p', { class: 'small muted' }, 'Belum ada topik yang dikerjakan ≥ 2 soal pada dua minggu berturut-turut.')),
      bagian('Kesalahan terbanyak', (l.kesalahanBerulang || []).filter(x => x.n >= 2).length ? h('ol', null, l.kesalahanBerulang.filter(x => x.n >= 2).map(x => h('li', null, UKP.link(judulTopik({ id: x.topik, judul: x.judul }), 'topik', { id: x.topik }), x.tag ? ' — ' + UKP.tagLabel(x.tag) : '', ' · ' + x.n + '×', x.ulang ? h('span', null, ' ', h('span', { class: 'pill', 'data-tone': 'warn' }, 'berulang')) : null))) : h('p', { class: 'small muted' }, (l.kesalahanBerulang || []).length ? 'Tidak ada kesalahan yang terjadi dua kali atau lebih minggu ini.' : 'Tidak ada jawaban keliru pada minggu ini.')),
      (l.saran || []).length ? bagian('Saran minggu depan', langkahBerikut((l.saran || []).map(x => ({ judul: x.judul || h('span', { class: 'judul kalimat' }, x.teks), meta: x.judul ? x.meta : null, aksi: x.view ? { teks: x.label || 'Buka', view: x.view, params: x.params || {} } : null })), { label: 'Saran minggu depan' })) : null);
    // pratinjau topik (Momen 9) pada tautan topik naik/turun dan kesalahan berulang
    if (typeof UKP.pasangPratinjau === 'function') { try { UKP.pasangPratinjau(art); } catch (e) { console.error(e); } }
    return art;
  }

  // ================= REFERENSI =================
  // teks tabel (dipisah tab) untuk disalin ke lembar kerja atau catatan
  const teksTabel = tbl => Array.from(tbl.querySelectorAll('tr')).map(tr => Array.from(tr.children).map(c => c.textContent.replace(/\s+/g, ' ').trim()).join('\t')).join('\n');
  // wadah tabel V6: tabel panjang → kepala lengket ke halaman (≥ 768, .bebas) atau gulir sendiri di HP (.tinggi);
  // petunjuk "Geser untuk melihat kolom lain" hanya bila memang bisa digeser
  function tabelV6(label, tabel, opsi) {
    opsi = opsi || {}; tabel.classList.add('tabel');
    const wrap = tabelWrap(label, tabel);
    const lebar = root.matchMedia ? root.matchMedia('(min-width: 768px)').matches : true;
    if (opsi.panjang) wrap.classList.add(lebar ? 'bebas' : 'tinggi');
    const geser = h('p', { class: 'petunjuk-geser', hidden: true }, 'Geser untuk melihat kolom lain');
    const cek = () => { geser.hidden = !(wrap.scrollWidth > wrap.clientWidth + 1); };
    if ('ResizeObserver' in root) new ResizeObserver(cek).observe(wrap); else requestAnimationFrame(cek);
    return h('div', { class: 'stack-sm tabel-v6' }, wrap, geser);
  }
  // kop tabel: judul (eyebrow) + aksi salin
  const kopTabel = (judul, tabel, id) => h('div', { class: 'between kop-tabel' }, h('h3', { class: 'eyebrow', id: id || null, tabindex: id ? '-1' : null }, judul), UKP.c.salin(() => judul + '\n' + teksTabel(tabel), { ikonSaja: true, label: 'Salin tabel ' + judul, pesan: 'Tabel ' + judul + ' disalin.' }));
  // tombol "Ke atas" mengambang: muncul setelah dua layar digulir
  function tombolKeAtas() {
    const lebar = root.matchMedia ? root.matchMedia('(min-width: 600px)').matches : true;
    const b = h('button', { type: 'button', class: 'btn btn-sm ke-atas', hidden: true, onclick: () => { try { window.scrollTo({ top: 0, behavior: UKP.gulirHalus() }); } catch (e) { window.scrollTo(0, 0); } UKP.fokus(document.querySelector('#main h1')); },
      style: { position: 'fixed', right: '16px', bottom: lebar ? '24px' : 'calc(var(--nav-h, 56px) + 16px + env(safe-area-inset-bottom, 0px))', zIndex: '8' } },
      h('span', { 'aria-hidden': 'true', style: { display: 'inline-grid', transform: 'rotate(180deg)' } }, UKP.icon('chevron-bawah', null, true)), 'Ke atas');
    const cek = () => { if (!b.isConnected) { window.removeEventListener('scroll', cek); return; } b.hidden = (window.scrollY || 0) < 2 * (window.innerHeight || 800); };
    window.addEventListener('scroll', cek, { passive: true });
    return b;
  }
  // sinonim kueri bersama (Cari global dan saringan Referensi); UKP.perluasKueri (bila ada) didahulukan di saringan
  const SINONIM_CARI = { bupot: 'bukti potong', ter: 'tarif efektif', pm: 'pajak masukan', pk: 'pajak keluaran', skp: 'surat ketetapan pajak', spt: 'surat pemberitahuan', gmt: 'pajak minimum global', qdmtt: 'dmtt', 'top-up': 'pajak minimum global' };
  function perluasKueri(k) {
    k = String(k || '').toLowerCase().trim(); if (!k) return [];
    let r = null;
    if (typeof UKP.frasaKueri === 'function') { try { r = UKP.frasaKueri(k); } catch (e) { r = null; } }
    if (!(Array.isArray(r) && r.length) && typeof UKP.perluasKueri === 'function') { try { r = UKP.perluasKueri(k); } catch (e) { r = null; } }
    const S = UKP.sinonim || SINONIM_CARI;
    const daftar = Array.isArray(r) && r.length ? [k].concat(r) : typeof r === 'string' && r ? [k, r.startsWith(k + ' ') ? r.slice(k.length + 1) : r] : [k].concat(S[k] ? [S[k]] : []);
    return Array.from(new Set(daftar.map(x => String(x == null ? '' : x).toLowerCase().trim()).filter(Boolean)));
  }
  // jenis peraturan → bagian daftar isi tab Indeks peraturan (urutan hierarki; sisanya "Lainnya")
  const JENIS_PERATURAN = [['UU', 'Undang-undang'], ['Perppu', 'Perppu'], ['PP', 'Peraturan Pemerintah'], ['PMK', 'Peraturan Menteri Keuangan'], ['KMK', 'Keputusan Menteri Keuangan'], ['PER', 'Peraturan Dirjen Pajak'], ['KEP', 'Keputusan Dirjen Pajak']];
  UKP.views.referensi = function (params) {
    params = params || {}; const ref = UKP.ref || {}; const TAB = ['glosarium', 'peraturan', 'perubahan', 'angka', 'bunga']; let tab = TAB.includes(params.tab) ? params.tab : 'glosarium';
    const page = h('div', { class: 'page lebar halaman-referensi' });
    const jml = { glosarium: (ref.glosarium || []).length, peraturan: (ref.peraturan || []).length, perubahan: (ref.perubahan || []).length, bunga: (ref.kmkBunga || []).length };
    page.appendChild(UKP.c.kop({ judul: 'Referensi', lead: 'Cari undang-undang, PP, PMK, dan PER yang dipakai di soal, lengkap dengan status berlakunya.',
      meta: h('span', { class: 'meta' }, jml.glosarium + ' istilah · ' + jml.peraturan + ' peraturan' + (ref.statusPer ? ' · status per ' + UKP.fmt.tanggal(ref.statusPer) : '')) }));
    const cari = h('input', { class: 'input', type: 'search', id: 'ref-q', placeholder: 'Saring istilah, nomor, pasal, atau isi…', autocomplete: 'off', 'aria-describedby': 'ref-jumlah', 'data-cari-lokal': '', 'aria-keyshortcuts': '/', value: params.q || null, oninput: () => gambar() });
    simpanKueri('referensi', cari);
    const jumlah = h('p', { class: 'small muted', role: 'status', id: 'ref-jumlah' });
    const statusSaring = h('div', { class: 'chip-row' });
    const bar = h('div', { class: 'stack-sm saring-ref' }, h('label', { for: 'ref-q', class: 'visually-hidden' }, 'Saring daftar referensi'),
      h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, UKP.icon('saring', null, true)), cari), h('div', { class: 'between' }, jumlah, statusSaring));
    const area = h('div', { class: 'stack' });
    const q = () => cari.value.trim();
    let kueriLuas = [];
    const cocok = teks => { if (!kueriLuas.length) return true; const t = String(teks || '').toLowerCase(); return kueriLuas.some(k => t.includes(k)); };
    let ioIsi = null;
    const tandai = t => UKP.c.tandaiKueri(t, q());
    const kosong = () => UKP.c.kosong('Tidak ada yang cocok', q() ? 'Coba kata lain atau hapus saringan "' + q() + '".' : 'Data referensi untuk bagian ini belum dimuat.', null, { ikon: 'saring' });
    function gambar() {
      area.replaceChildren(); let n = 0, total = 0, satuan = ''; kueriLuas = perluasKueri(q());
      if (ioIsi) { ioIsi.disconnect(); ioIsi = null; }
      if (tab === 'glosarium') {
        const semua = ref.glosarium || []; total = semua.length; satuan = 'istilah';
        const g = semua.filter(x => cocok(x.istilah + ' ' + (x.singkatan || '') + ' ' + x.definisi)).sort((a, b) => a.istilah.localeCompare(b.istilah)); n = g.length;
        if (g.length) area.appendChild(h('dl', { class: 'list-rows glosarium' }, g.map(x => h('div', { class: 'glos-baris' },
          h('dt', null, h('strong', null, tandai(x.istilah)), x.singkatan ? [' ', UKP.c.pill(x.singkatan)] : null, ' ', h('span', { class: 'tiny mono muted' }, (x.kelompok || []).join(' '))),
          h('dd', { class: 'small', style: { margin: '4px 0 0' } }, tandai(x.definisi), x.dasar ? h('span', { class: 'tiny muted' }, ' — ' + x.dasar) : null)))));
      } else if (tab === 'peraturan') {
        const semua = ref.peraturan || []; total = semua.length; satuan = 'peraturan';
        const list = semua.filter(x => cocok(x.nomor + ' ' + x.judul + ' ' + (x.kelompok || []).join(' ') + ' ' + (x.pasalDiujikan || []).map(p => p.pasal + ' ' + p.ringkas).join(' '))); n = list.length;
        const kartuPer = (x, i) => { const id = 'per-' + i; return h('article', { class: 'card ringkas peraturan', 'aria-labelledby': id },
          // P4-11: nomor peraturan sebagai .kode (tanpa kapital paksa); satu pill status; kelompok dan verifikasi sebagai .meta
          h('p', { class: 'kode', style: { margin: '0', whiteSpace: 'normal', overflowWrap: 'anywhere' } }, tandai(x.nomor)), // nomor panjang boleh membungkus (.kode bawaan nowrap)
          h('h3', { class: 'card-title', id }, tandai(x.judul)),
          // §3.3: "berlaku" adalah keadaan mayoritas → .meta netral; pill bernada hanya untuk yang dicabut/diubah
          h('div', { class: 'chip-row' }, x.status === 'berlaku' ? null : UKP.c.pill(x.status + (x.dicabutTahun ? ' ' + x.dicabutTahun : ''), 'warn', 'peringatan'),
            h('span', { class: 'meta' }, [x.status === 'berlaku' ? (x.berlakuSejak ? 'berlaku sejak ' + UKP.fmt.tanggal(x.berlakuSejak) : 'berlaku') : null, (x.kelompok || []).join(', '), x.verifikasi === '◐' ? 'perlu dicek ulang' : null].filter(Boolean).join(' · '))),
          (x.menggantikan || []).length || x.digantikanOleh ? h('p', { class: 'small muted' }, [(x.menggantikan || []).length ? 'Menggantikan ' + x.menggantikan.join(', ') + '.' : null, x.digantikanOleh ? ' Digantikan oleh ' + x.digantikanOleh + '.' : null].filter(Boolean).join(' ')) : null,
          (x.pasalDiujikan || []).length ? h('dl', { class: 'pasal-dl' }, x.pasalDiujikan.map(p => h('div', null, h('dt', null, tandai(p.pasal)), h('dd', null, tandai(p.ringkas))))) : null,
          x.urlJdih ? h('a', { class: 'tautan-kop', href: x.urlJdih, target: '_blank', rel: 'noopener' }, 'Buka di JDIH', UKP.icon('keluar', null, true), h('span', { class: 'visually-hidden' }, ' (membuka tab baru)')) : null); };
        if (list.length) {
          // dikelompokkan per jenis (UU, PP, PMK, …); daftar isi: chip bergulir di HP/tablet, panel kanan lengket ≥ 1280 (pola Info ujian)
          const KODE = JENIS_PERATURAN.map(j => j[0]); const jenisDari = x => { const j = x.jenis || (String(x.nomor).match(/^[A-Za-z]+/) || [''])[0]; return KODE.includes(j) ? j : 'lain'; };
          const grup = new Map(); list.forEach((x, i) => { const j = jenisDari(x); if (!grup.has(j)) grup.set(j, []); grup.get(j).push(kartuPer(x, i)); });
          const urut = KODE.concat('lain').filter(j => grup.has(j));
          const idBag = j => 'ref-per-' + j.toLowerCase();
          const namaBag = j => j === 'lain' ? 'Lainnya' : (JENIS_PERATURAN.find(x => x[0] === j) || [j, j])[1] + (JENIS_PERATURAN.find(x => x[0] === j && x[1] !== j) ? ' (' + j + ')' : '');
          // tiap golongan: 5 kartu pertama, sisanya dilipat (K-06); tanpa lipatan saat menyaring
          const lipat = (nodes, nama) => q() || !UKP.c.lipatSisa ? nodes : UKP.c.lipatSisa(nodes, 5, (sisa, total) => 'Lihat semua ' + total + ' ' + nama);
          const isiPer = h('div', { class: 'kl-8 stack daftar-peraturan' }, urut.map(j => h('section', { class: 'sect', id: idBag(j), 'aria-labelledby': idBag(j) + '-j' },
            h('div', { class: 'sect-head' }, h('h2', { id: idBag(j) + '-j', tabindex: '-1', 'data-judul-bagian': '' }, namaBag(j)), h('span', { class: 'meta' }, grup.get(j).length + ' peraturan')), lipat(grup.get(j), j === 'lain' ? 'peraturan lain' : j))));
          if (urut.length > 1) {
            const di = daftarIsi(urut.map(j => [idBag(j), (j === 'lain' ? 'Lainnya' : j) + ' · ' + grup.get(j).length]), 'Daftar isi Indeks peraturan');
            area.append(di.chips, h('div', { class: 'tata' }, isiPer, di.aside));
            requestAnimationFrame(() => { if (isiPer.isConnected) ioIsi = di.amati(); });
          } else area.appendChild(isiPer);
        }
      } else if (tab === 'perubahan') {
        const semua = ref.perubahan || []; total = semua.length; satuan = 'perubahan';
        const list = semua.filter(x => cocok(x.sebelum + ' ' + x.sesudah + ' ' + x.dasar + ' ' + x.kelompok)).sort((a, b) => (b.berlakuSejak || '').localeCompare(a.berlakuSejak || '')); n = list.length;
        if (list.length) {
          const tbl = h('table', null, h('caption', { class: 'visually-hidden' }, 'Perubahan ketentuan 2024–2026'), h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Kel.'), h('th', { scope: 'col' }, 'Sebelum'), h('th', { scope: 'col' }, 'Sesudah'), h('th', { scope: 'col' }, 'Dasar · berlaku'))),
            h('tbody', null, list.map(x => h('tr', null, h('td', { class: 'mono' }, x.kelompok), h('td', { class: 'muted' }, tandai(x.sebelum)), h('td', null, tandai(x.sesudah)), h('td', { class: 'tiny mono' }, x.dasar + ' · ' + UKP.fmt.tanggal(x.berlakuSejak), x.verifikasi === '◐' ? [' ', UKP.c.verif('◐')] : null)))));
          area.append(kopTabel('Perubahan 2024–2026', tbl), tabelV6('Perubahan 2024–2026', tbl, { panjang: list.length >= 15 }),
            h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: () => UKP.go('ulang', { dek: 'perubahan' }) }, UKP.icon('dek'), 'Buka dek kartu Perubahan'), h('button', { class: 'btn btn-ghost btn-text', onclick: () => UKP.go('latih', { baru2025: true, n: 10, mulai: true }) }, UKP.icon('pen'), 'Latih soal ketentuan 2025+')));
        }
      } else if (tab === 'angka') {
        const t = ref.tabelAngka || {}; const bagianTabel = []; satuan = 'baris';
        for (const k in t) {
          const def = t[k]; const obj = def && !Array.isArray(def) && typeof def === 'object' ? def : null;
          const rows0 = Array.isArray(def) ? def : obj && Array.isArray(obj.baris) ? obj.baris : null; if (!rows0 || !rows0.length) continue;
          const judul = (obj && obj.judul) || JUDUL_TABEL[k] || judulDariKunci(k); const kolom = obj && Array.isArray(obj.kolom) ? obj.kolom : null;
          const rows = rows0.map(r => Array.isArray(r) ? r : r && typeof r === 'object' ? Object.values(r).filter(v => v == null || typeof v !== 'object') : [r]).map(r => r.map(c => c == null ? '–' : String(c)));
          total += rows.length;
          const filtered = rows.filter(r => cocok(r.join(' ') + ' ' + judul + ' ' + k)); if (!filtered.length) continue; n += filtered.length;
          const idT = 'tabel-' + k.replace(/\W/g, '');
          bagianTabel.push([idT, judul, (ref.tabelAngkaJudul && ref.tabelAngkaJudul[k]) || judul]);
          const lebarK = Math.max(...filtered.map(r => r.length)); const kepala = kolom || (lebarK === 3 ? ['Uraian', 'Dasar', 'Nilai'] : lebarK === 2 ? ['Uraian', 'Nilai'] : null);
          const selAkhir = filtered.filter(r => r.length > 1).map(r => r[r.length - 1]); const kolomAngka = selAkhir.length > 0 && selAkhir.filter(c => ANGKA_SEL.test(c)).length * 2 > selAkhir.length;
          const tbl = h('table', null, h('caption', { class: 'visually-hidden' }, judul), kepala ? h('thead', null, h('tr', null, kepala.map((c, i) => h('th', { scope: 'col', class: i === kepala.length - 1 && kepala.length > 1 && kolomAngka ? 'num' : null }, c)))) : null,
            h('tbody', null, filtered.map(r => h('tr', null, r.map((c, i) => h('td', { class: i === r.length - 1 && r.length > 1 && ANGKA_SEL.test(c) ? 'num' : null }, i === r.length - 1 && ANGKA_SEL.test(c) ? c : tandai(c)))))));
          area.appendChild(h('section', { class: 'sect', id: idT, 'aria-labelledby': idT + '-j' }, kopTabel(judul, tbl, idT + '-j'), obj && obj.catatan ? h('p', { class: 'tiny muted' }, obj.catatan) : null,
            tabelV6(judul, tbl, { panjang: filtered.length >= 15 }), obj && obj.dasar ? UKP.c.cite({ pasal: obj.dasar, berlakuSejak: obj.berlakuSejak || null }) : null));
        }
        // lompat cepat antartabel (tanpa saringan)
        if (bagianTabel.length > 3 && !q()) area.prepend(h('nav', { class: 'chip-row gulir', 'aria-label': 'Lompat ke tabel' }, bagianTabel.map(([idT, judul, label]) => { const pendek = label.length > 28 ? label.slice(0, 27).trimEnd() + '…' : label; return h('a', { class: 'chip', href: '#' + idT, 'data-tip': pendek !== judul ? judul : null, onclick: e => { e.preventDefault(); const el = document.getElementById(idT); if (el) { try { el.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (er) {} UKP.fokus(document.getElementById(idT + '-j')); } } }, pendek); })));
      } else {
        const semua = ref.kmkBunga || []; total = semua.length; satuan = 'periode';
        const semuaCocok = semua.filter(x => cocok(x.periode + ' ' + UKP.fmt.bulanTahun(x.periode) + ' ' + x.kmk)).sort((a, b) => b.periode.localeCompare(a.periode)); n = semuaCocok.length;
        // periode tanpa satu pun tarif tidak ditampilkan sebagai baris kosong; ditulis sekali sebagai ringkasan status (§3.3)
        const adaTarif = x => !!x.tarif && Object.values(x.tarif).some(v => v != null);
        const list = semuaCocok.filter(adaTarif); const tanpa = semuaCocok.filter(x => !adaTarif(x));
        area.appendChild(h('p', { class: 'small muted' }, 'Tarif bunga per bulan = (tarif acuan + uplift) ÷ 12. Uplift: 0% (Ps. 19), 5% (Ps. 8(2), 8(2a), 9(2a)/(2b), 14(3)), 10% (Ps. 8(5)), 15% (Ps. 13(2)), 20% (Ps. 13(3b)).'));
        if (tanpa.length && UKP.c.ringkasStatus) {
          const per = tanpa.map(x => x.periode).sort(); const rentangP = per.length > 1 ? UKP.fmt.bulanTahun(per[0]) + ' – ' + UKP.fmt.bulanTahun(per[per.length - 1]) : UKP.fmt.bulanTahun(per[0]);
          area.appendChild(UKP.c.ringkasStatus('Tarif ' + rentangP + ' (' + tanpa.length + ' periode) belum tersedia di aplikasi. Untuk bulan tersebut, isi tarif dari KMK resmi secara manual di kalkulator sanksi.'));
        }
        if (list.length && window.innerWidth < 600) {
          // HP: satu kartu per periode berisi dl.fakta (tanpa tabel tujuh kolom yang tergulir ke samping)
          area.append(h('div', { class: 'stack-sm' }, list.map(x => h('section', { class: 'card ringkas', 'aria-label': 'Tarif bunga ' + UKP.fmt.bulanTahun(x.periode) },
            h('h3', { class: 'card-title' }, UKP.fmt.bulanTahun(x.periode), x.verifikasi === '◐' ? [' ', UKP.c.verif('◐')] : null), h('p', { class: 'meta', style: { margin: '0' } }, x.kmk),
            h('dl', { class: 'fakta rapat' }, ['0', '5', '10', '15', '20'].map(u => h('div', null, h('dt', null, 'Uplift ' + u + '%'), h('dd', { class: 'mono' }, x.tarif && x.tarif[u] != null ? UKP.fmt.persen(x.tarif[u], 2) : '–'))))))),
            h('div', { class: 'btn-row' }, UKP.link('Hitung sanksi bunga', 'kalkulator', { jenis: 'sanksi-bunga' }, 'btn btn-sm')));
        } else if (list.length) {
          const tbl = h('table', null, h('caption', { class: 'visually-hidden' }, 'Tarif bunga KMK per bulan'), h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Periode'), h('th', { scope: 'col' }, 'KMK'), ['0', '5', '10', '15', '20'].map(u => h('th', { scope: 'col', class: 'num' }, '+' + u + '%')))),
            h('tbody', null, list.map(x => h('tr', null, h('td', null, UKP.fmt.bulanTahun(x.periode)), h('td', { class: 'tiny mono' }, x.kmk, x.verifikasi === '◐' ? [' ', UKP.c.verif('◐')] : null), ['0', '5', '10', '15', '20'].map(u => h('td', { class: 'num' }, x.tarif && x.tarif[u] != null ? UKP.fmt.persen(x.tarif[u], 2) : '–'))))));
          area.append(kopTabel('Tarif bunga KMK per bulan', tbl), tabelV6('Tarif bunga KMK per bulan', tbl), h('div', { class: 'btn-row' }, UKP.link('Hitung sanksi bunga', 'kalkulator', { jenis: 'sanksi-bunga' }, 'btn btn-sm')));
        }
      }
      if (!n) area.prepend(kosong());
      jumlah.textContent = q() ? n + ' dari ' + total + ' ' + satuan + ' cocok' : total + ' ' + satuan;
      statusSaring.replaceChildren(q() ? h('button', { type: 'button', class: 'chip saring-aktif', 'aria-label': 'Hapus saringan ' + q(), onclick: () => { cari.value = ''; cari.dispatchEvent(new Event('input', { bubbles: true })); cari.focus(); } }, 'Menyaring: ' + q(), UKP.icon('x', null, true)) : null);
    }
    const tabs = UKP.c.tabs({ id: 'ref', label: 'Bagian Referensi', aktif: tab,
      tab: [{ id: 'glosarium', label: 'Glosarium', hitung: jml.glosarium }, { id: 'peraturan', label: 'Indeks peraturan', hitung: jml.peraturan }, { id: 'perubahan', label: 'Perubahan 2024–2026' }, { id: 'angka', label: 'Tabel angka' }, { id: 'bunga', label: 'KMK bunga' }],
      isi: id => { tab = id; gambar(); return UKP.frag(bar, area); },
      onGanti: id => { UKP.perbaruiParams({ tab: id }, 'referensi'); } });
    page.append(tabs.el, tabs.elPanel, tombolKeAtas());
    return page;
  };

  // judul tabel angka referensi; kunci baru tanpa judul dipecah otomatis (camelCase/angka → kata)
  const JUDUL_TABEL = {
    ptkp: 'PTKP', lapisanPs17: 'Lapisan tarif Pasal 17 (OP)', dendaSpt: 'Denda keterlambatan SPT', uplift: 'Uplift sanksi bunga per pasal', tenggat: 'Tenggat setor & lapor',
    potput: 'Tarif pemotongan/pemungutan utama', ppn: 'PPN', pbb: 'PBB / BPHTB / Bea Meterai',
    terBulanan: 'Tarif efektif rata-rata (TER) bulanan PPh 21', terHarian: 'Tarif efektif harian PPh 21', penyusutan: 'Penyusutan & amortisasi fiskal (kelompok harta)',
    pesangon: 'PPh final pesangon, uang manfaat pensiun, THT/JHT', pph22: 'Tarif PPh Pasal 22', pph23: 'Tarif PPh Pasal 23', pph26: 'Tarif PPh Pasal 26',
    pph4ayat2: 'PPh final Pasal 4 ayat (2)', tenggatPbb: 'Tenggat PBB-P5L: SPOP, SPPT, dan pembayaran', ppsp: 'Penagihan pajak dengan surat paksa (PPSP): tahapan dan jangka waktu',
    beaMeterai: 'Bea Meterai', bphtb: 'BPHTB', sanksi: 'Sanksi administrasi', pphFinalUmkm: 'PPh final UMKM', p3b: 'Tarif P3B (tax treaty)',
  };
  // sel bernilai angka (Rp, persen, pecahan, rentang) → rata kanan mono; teks tetap rata kiri
  const ANGKA_SEL = /^(?=.*\d)[\d.,%Rp ×+−–\-=\s()]+$|^[–—-]$/;
  const SINGKATAN_TABEL = { pph: 'PPh', ppn: 'PPN', ppnbm: 'PPnBM', pbb: 'PBB', ter: 'TER', spt: 'SPT', ppsp: 'PPSP', bphtb: 'BPHTB', kup: 'KUP', umkm: 'UMKM', p3b: 'P3B', op: 'OP' };
  function judulDariKunci(k) {
    const kata = String(k).replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([a-zA-Z])(\d)/g, '$1 $2').replace(/(\d)([a-zA-Z])/g, '$1 $2').split(/[\s_-]+/).filter(Boolean)
      .map(w => SINGKATAN_TABEL[w.toLowerCase()] || w.toLowerCase());
    const teks = kata.join(' ').replace(/\bayat (\d+)\b/, 'ayat ($1)');
    return teks.charAt(0).toUpperCase() + teks.slice(1);
  }

  // ================= INFO UJIAN =================
  // daftar isi dalam halaman (IU-1): chip bergulir di HP/tablet, panel kanan lengket ≥ 1280; bagian aktif ditandai saat menggulir
  function daftarIsi(bagian, labelNav, opsi) {
    opsi = opsi || {};
    const mq = root.matchMedia ? root.matchMedia(opsi.media || '(min-width: 1280px)') : null;
    const lompat = (e, id) => { e.preventDefault(); const sec = document.getElementById(id); if (!sec) return; try { sec.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (er) { sec.scrollIntoView(); } UKP.fokus(sec.querySelector('[data-judul-bagian]') || sec); };
    const chips = h('nav', { class: 'chip-row gulir daftar-isi-hp', 'aria-label': labelNav }, bagian.map(([id, label]) => h('a', { class: 'chip', href: '#' + id, 'data-isi': id, onclick: e => lompat(e, id) }, label)));
    // judul panel sama dengan panel Topik (views-belajar): h2.card-title sans, bukan eyebrow
    const panel = h('nav', { class: 'card ringkas daftar-isi', 'aria-label': labelNav }, h('h2', { class: 'card-title' }, 'Di halaman ini'),
      h('ol', { class: 'bersih-v6', style: { listStyle: 'none', margin: '0', padding: '0', display: 'grid', gap: '2px' } }, bagian.map(([id, label]) => h('li', null, h('a', { class: 'row-link toc-link', href: '#' + id, 'data-isi': id, onclick: e => lompat(e, id), style: { minHeight: '40px', display: 'flex', alignItems: 'center' } }, label)))));
    const aside = h('aside', { class: (opsi.kelas || 'kl-4') + ' lengket daftar-isi-wadah', style: { position: 'sticky', top: 'calc(var(--topbar-h, 56px) + 16px)' } }, panel);
    let aturPertama = true;
    const atur = () => { if (!aturPertama && !chips.isConnected && !aside.isConnected) { try { mq.removeEventListener('change', atur); } catch (e) {} return; } aturPertama = false; const besar = !!(mq && mq.matches); chips.hidden = besar; aside.hidden = !besar; };
    atur(); if (mq) { try { mq.addEventListener('change', atur); } catch (e) {} }
    const tandaiAktif = id => [chips, panel].forEach(n => n.querySelectorAll('[data-isi]').forEach(a => { if (a.dataset.isi === id) { a.setAttribute('aria-current', 'true'); a.classList.add('aktif'); } else { a.removeAttribute('aria-current'); a.classList.remove('aktif'); } }));
    const amati = () => {
      if (!('IntersectionObserver' in root)) return;
      const io = new IntersectionObserver(entri => { const terlihat = entri.filter(x => x.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top); if (terlihat[0]) tandaiAktif(terlihat[0].target.id); }, { rootMargin: '-15% 0px -70% 0px' });
      bagian.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
      // penanda awal: bagian pertama aktif sebelum pengguna menggulir (Referensi: bagian pertama mulai di bawah pita pengamatan)
      if (bagian[0] && !panel.querySelector('[aria-current]')) tandaiAktif(bagian[0][0]);
      return io;
    };
    return { chips, aside, amati };
  }
  // ---- Info ujian v7.3: kop satu baris meta · kartu "Yang perlu Anda tahu" · lima tab (params.tab) · lipatan untuk daftar panjang ----
  // bagian tab: section.sect[id] dengan h2 yang dapat difokus (target tautan params.bagian)
  const bagianUjian = (id, judul, ...isi) => h('section', { class: 'sect', id, 'aria-labelledby': id + '-j' }, h('div', { class: 'sect-head' }, h('h2', { id: id + '-j', tabindex: '-1', 'data-judul-bagian': '' }, judul)), ...isi);
  // status verifikasi sekali per bagian (bukan pill per baris): muncul bila ada butir ◐
  const catatanVerif = (butir, teks) => (butir || []).some(x => x && x.verifikasi === '◐') ? h('p', { class: 'meta catatan-verif' }, UKP.icon('setengah', null, true), teks || 'Butir bertanda ini masih perlu cek ke teks resmi.') : null;
  // penanda ◐ kecil per butir (ikon saja, tanpa pill); teks untuk pembaca layar
  const tandaVerif = x => x && x.verifikasi === '◐' ? h('span', { class: 'tanda-verif', title: 'Perlu cek ke teks resmi' }, UKP.icon('setengah', null, true), h('span', { class: 'visually-hidden' }, ' (perlu cek ke teks resmi)')) : null;
  // daftar panjang: n butir pertama tampil; sisanya dalam <details> berisi daftar sejenis (bukan daftar di dalam butir),
  // <ol> melanjutkan nomor lewat start; ringkasan berganti "Sembunyikan" saat terbuka
  const lipatDaftar = (tag, kelas, nodes, nama, n) => {
    n = n || 5; nodes = (nodes || []).filter(Boolean);
    const daftar = (isi, atr) => h(tag, Object.assign({ class: kelas }, atr || {}), isi);
    if (nodes.length <= n + 1) return daftar(nodes);
    const sisa = nodes.slice(n); const teksTutup = 'Tampilkan ' + sisa.length + ' ' + nama + ' lagi';
    const ringkas = h('summary', null, teksTutup);
    const det = h('details', { class: 'lipat lipat-sisa lipat-iu' }, ringkas, daftar(sisa, tag === 'ol' ? { start: String(n + 1) } : null));
    det.addEventListener('toggle', () => { ringkas.textContent = det.open ? 'Sembunyikan ' + sisa.length + ' ' + nama : teksTutup; });
    return [daftar(nodes.slice(0, n)), det];
  };
  // butir ref (tipsHariH, aturan): judul tebal + isi; dasar sebagai .meta; ◐ per butir
  const butirRef = x => { const o = x && typeof x === 'object' ? x : { teks: String(x == null ? '' : x) }; const isi = o.isi || o.teks || ''; return h('li', null, o.judul ? [h('strong', null, o.judul), isi ? ' — ' : null] : null, isi, tandaVerif(o), o.dasar ? h('span', { class: 'meta blok' }, o.dasar) : null); };
  const TAB_IU = ['format', 'jadwal', 'harih', 'laporan', 'tanya'];
  // id bagian lama (daftar isi v7.2) atau nama pendeknya → tab tempat bagian itu kini berada
  const BAGIAN_IU = { 'iu-format': 'format', 'iu-cakupan-resmi': 'format', 'iu-cakupan': 'format', 'iu-jadwal': 'jadwal', 'iu-daftar': 'jadwal', 'iu-aturan': 'jadwal', 'iu-perangkat': 'harih', 'iu-tips': 'harih', 'iu-laporan-c': 'laporan', 'iu-laporan-b': 'laporan', 'iu-faq': 'tanya', 'iu-transisi': 'tanya', 'iu-catatan': 'tanya' };
  const idBagianIU = v => { v = String(v || ''); if (!v) return null; if (v === 'iu-rezim' || v === 'rezim' || v === 'ringkasan') return 'iu-ringkasan'; return BAGIAN_IU[v] ? v : BAGIAN_IU['iu-' + v] ? 'iu-' + v : null; };
  UKP.views['info-ujian'] = function (params) {
    params = params || {};
    const s = UKP.store.get(); const uj = (UKP.ref && UKP.ref.ujian) || {}; const f = uj.format || {}; const fU = f.UKP || {}; const rz = uj.rezim || {}; const rk = uj.ringkas || {};
    const page = h('div', { class: 'page halaman-info' });
    const tgt = ['A', 'B', 'C'].includes(s.profil.tingkat) ? s.profil.tingkat : 'A';
    const hariIni = U.hariIni(); const per = uj.periode || [];
    const tglTeks = (v, cadangan) => v ? h('span', { class: 'tgl' }, UKP.fmt.tanggal(String(v).slice(0, 10))) : h('span', { class: 'meta belum' }, cadangan || 'belum diumumkan');
    const sep = () => h('span', { class: 'sep', 'aria-hidden': 'true' }, '·');
    const statusPer = (UKP.ref && UKP.ref.statusPer) || null;
    page.appendChild(UKP.c.kop({ judul: 'Info ujian', meta: h('p', { class: 'meta' }, [rz.dasar ? 'Dasar ' + rz.dasar : null, rz.penyelenggara || null, statusPer ? 'sumber diperbarui ' + UKP.fmt.tanggal(statusPer) : null].filter(Boolean).map((x, i) => i ? [sep(), x] : x)) }));

    // ---- kartu ringkasan (≤ 6 baris dl.fakta) untuk tingkat target ----
    const ft = fU[tgt] || null; const kel = ft ? ft.kelompok || [] : [];
    // periode UKP terdekat: ujian belum lewat (atau tanggal belum diumumkan), selain ujian profesi asosiasi (tanpa tingkat)
    const perUKP = per.filter(p => (p.tingkat || []).length);
    const akhir = p => ((p.ujian || []).filter(Boolean).slice(-1)[0]) || null;
    const terdekat = perUKP.find(p => !akhir(p) || akhir(p) >= hariIni) || null;
    const hasilMenunggu = perUKP.find(p => akhir(p) && akhir(p) < hariIni && p.hasil && p.hasil >= hariIni) || null;
    const rentang = arr => { const a = (arr || []).filter(Boolean).map(x => String(x).slice(0, 10)); return a.length ? h('span', { class: 'tgl' }, a.map(x => UKP.fmt.tanggal(x)).filter((x, i, b) => b.indexOf(x) === i).join(' – ')) : null; };
    // Jadwal: periode terdekat (satu baris) + hasil yang ditunggu / tanggal ujian Anda (paling banyak satu baris tambahan)
    const ddJadwal = terdekat ? [h('span', null, terdekat.nama.replace(/^UKP periode berikutnya — /, '') + ': '), rentang(terdekat.ujian) || h('span', { class: 'meta belum' }, 'belum diumumkan'),
      terdekat.pendaftaran && terdekat.pendaftaran[0] ? [sep(), 'daftar ', rentang(terdekat.pendaftaran)] : null,
      s.profil.tanggalUjian && s.profil.tanggalUjian >= hariIni ? [h('br'), 'Ujian Anda: ', tglTeks(s.profil.tanggalUjian)] : hasilMenunggu ? [h('br'), 'Hasil periode lalu: ', tglTeks(hasilMenunggu.hasil)] : null] : null;
    const kelTeks = kel.length ? kel.length + ' kelompok (' + kel[0] + '–' + kel[kel.length - 1] + ')' : null;
    // ≤ 4 baris: Bentuk · Materi · Jadwal · Biaya & SKK ("Tidak diuji" ada di Tanya jawab › Kode etik)
    const fakta = [
      ['Bentuk', [rk.bentuk || 'CAT daring, pilihan ganda', ft ? [sep(), '±' + ft.soalPerkiraan + ' soal, ' + ft.menit + ' menit', tandaVerif(ft)] : null, [sep(), 'lulus ≥ ' + (fU.lulus || 60)]]],
      kelTeks ? ['Materi Tingkat ' + tgt, [kelTeks + ' ', UKP.cakupanResmi && UKP.views.cakupan ? UKP.link('lihat butir', 'cakupan', { tingkat: tgt }) : null]] : null,
      ddJadwal ? ['Jadwal', ddJadwal] : null,
      rk.biayaSkk ? ['Biaya & SKK', rk.biayaSkk] : rk.biaya ? ['Biaya', rk.biaya] : null,
    ].filter(Boolean).slice(0, 4);
    page.appendChild(h('section', { class: 'card iu-ringkas', id: 'iu-ringkasan', 'aria-labelledby': 'iu-ringkasan-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'iu-ringkasan-j', tabindex: '-1' }, 'Yang perlu Anda tahu'), h('p', { class: 'card-meta' }, 'UKP Tingkat ' + tgt + ' · target Anda'))),
      h('dl', { class: 'fakta' }, fakta.map(([k, v]) => h('div', null, h('dt', null, k), h('dd', null, v))))));

    // ---- tab 1: format & materi ----
    function tabFormat(w) {
      if (fU.A || fU.B || fU.C) {
        const tbl = h('table', { class: 'rapat' }, h('caption', { class: 'visually-hidden' }, 'Format UKP per tingkat'), h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Tingkat'), h('th', { scope: 'col' }, 'Kelompok materi'), h('th', { scope: 'col', class: 'num' }, 'Soal'), h('th', { scope: 'col', class: 'num' }, 'Menit'))),
          h('tbody', null, ['A', 'B', 'C'].map(t => { const x = fU[t]; if (!x) return null; const k = x.kelompok || []; return h('tr', { 'data-target': t === tgt ? '' : null }, h('td', { class: 'mono' }, t), h('td', { class: 'small' }, k.length ? k[0] + '–' + k[k.length - 1] + ' (' + k.length + ')' : '–'), h('td', { class: 'num' }, '±' + x.soalPerkiraan), h('td', { class: 'num' }, x.menit)); })));
        // satu baris rezim (fakta dari uj.rezim.ringkas) + ringkasan lengkap dalam lipatan
        const rezimPendek = rz.berlakuSejak ? h('p', { class: 'small teks-baca rezim-iu' }, 'Menggantikan USKP sejak ', h('span', { class: 'tgl' }, UKP.fmt.tanggal(rz.berlakuSejak)), rz.dasar ? ' (' + rz.dasar + ')' : null, '. Satu kali duduk per tingkat, CAT daring dengan Safe Exam Browser serta pengawasan AI dan Zoom.') : null;
        w.appendChild(bagianUjian('iu-format', 'Format per tingkat', rezimPendek, tabelV6('Format UKP per tingkat', tbl), h('p', { class: 'meta' }, 'Tidak berjenjang: Tingkat B diuji materi A+B, Tingkat C materi A+B+C.'),
          fU.label ? h('details', { class: 'lipat' }, h('summary', null, [UKP.icon('setengah', 'ikon-verif', true), ' Sumber angka soal dan durasi']), h('p', { class: 'small teks-baca' }, fU.label)) : catatanVerif(['A', 'B', 'C'].map(t => fU[t]), 'Jumlah soal perkiraan: Tingkat A dari laporan peserta 26 Okt 2026, B dan C diasumsikan sama.'),
          rz.ringkas ? h('details', { class: 'lipat' }, h('summary', null, 'Ringkasan ketentuan ' + (rz.dasar || 'UKP')), h('p', { class: 'small teks-baca' }, rz.ringkas)) : null));
      }
      const CR = UKP.cakupanResmi;
      if (CR && CR.tingkat && UKP.cakupan && UKP.views.cakupan) {
        const sentuh = UKP.cakupan.topikDisentuh();
        const baris = ['A', 'B', 'C'].filter(t => CR.tingkat[t]).map(t => { const r = UKP.cakupan.ringkas(t, sentuh); const dasar = Math.max(1, r.butir - r.tanpa);
          return UKP.c.barisSkor({ kode: t, judul: 'Tingkat ' + t + (t === tgt ? ' · target' : ''), meta: r.mataUjian + ' mata ujian · ' + r.butir + ' butir' + (r.tanpa ? ' · belum tercakup ' + r.tanpa : ''), nilai: Math.round(100 * r.sudah / dasar), satuan: '%', acuan: null, labelBar: 'Dipelajari ' + r.sudah + ' dari ' + (r.butir - r.tanpa) + ' butir', view: 'cakupan', params: { tingkat: t }, label: 'Lihat butir cakupan resmi Tingkat ' + t }); });
        w.appendChild(bagianUjian('iu-cakupan-resmi', 'Cakupan materi resmi', h('p', { class: 'small teks-baca' }, 'Butir materi per tingkat dari dokumen KLC/BPPK, dipetakan ke topik; persentase = butir yang sudah Anda pelajari. Menurut peserta, soal tidak melebar dari daftar ini.'),
          UKP.c.daftarSkor(baris, 'Cakupan materi resmi per tingkat'), UKP.cakupan.definisi ? h('details', { class: 'lipat' }, h('summary', null, 'Arti “dipelajari” dan “belum tercakup”'), h('p', { class: 'small teks-baca' }, UKP.cakupan.definisi)) : null,
          catatanVerif([{ verifikasi: '◐' }], 'Dokumen bersumber dari unggahan peserta (tanpa kop, tanggal, atau nomor).')));
      }
      if (uj.tingkat) {
        const T = ['A', 'B', 'C'].filter(t => uj.tingkat[t]);
        w.appendChild(bagianUjian('iu-cakupan', 'Cakupan izin & syarat',
          h('dl', { class: 'fakta' }, T.map(t => h('div', { 'data-tingkat': t }, h('dt', null, 'Tingkat ' + t + (t === tgt ? ' · target' : '')), h('dd', null, uj.tingkat[t].cakupanIzin, uj.tingkat[t].jamBelajar ? h('span', { class: 'meta blok' }, 'Perkiraan belajar ' + uj.tingkat[t].jamBelajar.join('–') + ' jam') : null)))),
          h('details', { class: 'lipat' }, h('summary', null, 'Syarat izin praktik per tingkat'), h('ul', { class: 'bersih small' }, T.filter(t => uj.tingkat[t].syaratIzin).map(t => h('li', null, h('strong', null, 'Tingkat ' + t + ' — '), uj.tingkat[t].syaratIzin.replace(/^Izin:\s*/, ''))))),
          catatanVerif(T.map(t => uj.tingkat[t]))));
      }
    }

    // ---- tab 2: jadwal & daftar ----
    const tombolTanggal = p => {
      const tgl = p.ujian && p.ujian[0]; const ak = akhir(p) || tgl;
      if (!tgl || (ak && ak < hariIni)) return null; // tanpa tanggal atau sudah lewat: tidak ada aksi
      if (tgl < hariIni) return UKP.link('Periode berlangsung · atur tanggal di Rencana', 'rencana', null, 'btn btn-sm');
      const sama = s.profil.tanggalUjian === tgl;
      return h('button', { type: 'button', class: 'btn btn-sm', disabled: sama ? true : null, onclick: e => { if (tgl < U.hariIni()) return; s.profil.tanggalUjian = tgl; UKP.store.save(); UKP.perbaruiTopbar(); UKP.toast('Tanggal ujian diatur ke ' + UKP.fmt.tanggal(tgl) + '.', { nada: 'ok', aksi: { label: 'Lihat Rencana', onclick: () => UKP.go('rencana') } }); e.currentTarget.textContent = 'Tanggal ujian Anda'; e.currentTarget.disabled = true; } }, sama ? 'Tanggal ujian Anda' : 'Jadikan tanggal ujian saya');
    };
    function tabJadwal(w) {
      // urutan: periode bertanggal yang akan datang → satu kartu "belum diumumkan" → periode selesai (terlipat)
      const tglMulai = p => (p.ujian || []).filter(Boolean)[0] || null;
      const lewatP = p => !!akhir(p) && akhir(p) < hariIni;
      const datang = per.filter(p => tglMulai(p) && !lewatP(p)).sort((a, b) => String(tglMulai(a)).localeCompare(String(tglMulai(b))));
      const belum = per.filter(p => !tglMulai(p));
      const selesai = per.filter(lewatP).sort((a, b) => String(akhir(b)).localeCompare(String(akhir(a))));
      const faktaPer = p => h('dl', { class: 'fakta rapat' }, h('div', null, h('dt', null, 'Ujian'), h('dd', null, rentang(p.ujian) || h('span', { class: 'meta belum' }, 'belum diumumkan'))),
        p.pendaftaran && p.pendaftaran[0] ? h('div', null, h('dt', null, 'Pendaftaran'), h('dd', null, rentang(p.pendaftaran))) : null,
        p.hasil ? h('div', null, h('dt', null, 'Hasil'), h('dd', null, tglTeks(p.hasil))) : null, p.skk ? h('div', null, h('dt', null, 'SKK terbit'), h('dd', null, tglTeks(p.skk))) : null);
      const rincian = p => p.catatan ? h('details', { class: 'lipat' }, h('summary', null, 'Rincian'), h('p', { class: 'small teks-baca' }, p.catatan, tandaVerif(p))) : null;
      const namaPendek = p => String(p.nama || '').replace(/^UKP periode berikutnya — /, 'UKP ');
      const isi = [];
      datang.forEach(p => { const aksi = tombolTanggal(p);
        isi.push(h('article', { class: 'card ringkas periode' },
          h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h3', { class: 'card-title' }, p.nama), h('p', { class: 'card-meta' }, (p.tingkat || []).length ? 'Tingkat ' + p.tingkat.join(', ') : 'bukan UKP'))),
          faktaPer(p), rincian(p), aksi ? h('div', { class: 'btn-row' }, aksi) : null)); });
      if (belum.length) isi.push(h('article', { class: 'card ringkas periode periode-belum' },
        h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h3', { class: 'card-title' }, 'Belum diumumkan'), h('p', { class: 'card-meta' }, 'Pantau klc.kemenkeu.go.id/sertifikasi'))),
        h('ul', { class: 'bersih small daftar-iu' }, belum.map(p => h('li', null, h('strong', null, namaPendek(p)), (p.tingkat || []).length ? ' · Tingkat ' + p.tingkat.join(', ') : ' · bukan UKP', tandaVerif(p)))),
        belum.some(p => p.catatan) ? h('details', { class: 'lipat' }, h('summary', null, 'Catatan per periode'), h('ul', { class: 'bersih small' }, belum.filter(p => p.catatan).map(p => h('li', null, h('strong', null, namaPendek(p) + ' — '), p.catatan)))) : null));
      selesai.forEach(p => isi.push(h('details', { class: 'lipat periode-selesai', 'data-lewat': '' },
        h('summary', null, h('span', null, 'Selesai: ' + namaPendek(p), p.hasil ? [' · hasil ', tglTeks(p.hasil)] : null)),
        h('div', { class: 'stack-sm' }, faktaPer(p), p.catatan ? h('p', { class: 'small teks-baca' }, p.catatan, tandaVerif(p)) : null))));
      if (per.length) w.appendChild(bagianUjian('iu-jadwal', 'Jadwal periode', h('div', { class: 'stack-sm' }, isi), catatanVerif(per)));
      // alur bernomor: kesepuluh judul langkah tampil dalam satu <ol>; isi tiap langkah dalam lipatan per butir
      const alur = Array.isArray(uj.alurPendaftaran) ? uj.alurPendaftaran : [];
      if (alur.length) w.appendChild(bagianUjian('iu-daftar', 'Alur pendaftaran', h('ol', { class: 'bersih small alur-iu' }, alur.map((x, i) => { const o = x && typeof x === 'object' ? x : { judul: String(x) };
        return h('li', null, h('details', { class: 'langkah-iu' }, h('summary', null, h('span', { class: 'no', 'aria-hidden': 'true' }, String(o.langkah || i + 1)), h('span', { class: 'judul' }, o.judul || o.teks || ''), tandaVerif(o)),
          o.isi ? h('p', { class: 'small teks-baca' }, o.isi) : null, o.dasar ? h('p', { class: 'meta' }, o.dasar) : null)); })), catatanVerif(alur, 'Langkah bertanda ini rinciannya belum dipastikan dari dokumen resmi.')));
      const at = Array.isArray(uj.aturan) ? uj.aturan : [];
      if (at.length) w.appendChild(bagianUjian('iu-aturan', 'Aturan penting', lipatDaftar('ul', 'bersih small daftar-iu', at.map(butirRef), 'aturan'), catatanVerif(at)));
    }

    // ---- tab 3: hari H ----
    function tabHariH(w) {
      const pr = uj.perangkat || {};
      const cek = [['laptop', 'Laptop pribadi memenuhi spesifikasi', [pr.cpu, pr.ram, pr.os].filter(Boolean).join(' · ')], ['seb', 'Safe Exam Browser ' + (pr.seb || '') + ' terpasang', 'Konfigurasi KLC sudah diunduh'], ['zoom', 'Zoom di perangkat kedua', 'Kamera menghadap meja'], ['ruang', 'Ruangan tenang', 'Pencahayaan cukup, koneksi cadangan'], ['ktp', 'KTP dan kartu peserta siap', null], ['dummy', 'Uji coba perangkat (dummy) BPPK', 'Ikuti sesi uji coba bila diumumkan']];
      const nCek = () => cek.filter(([id]) => s.cekPerangkat[id]).length;
      const progCek = UKP.c.progress({ label: 'Kesiapan perangkat', nilai: nCek(), maks: cek.length, teks: () => nCek() + ' dari ' + cek.length, ukuran: 'sm', valuetext: () => nCek() + ' dari ' + cek.length + ' butir siap' });
      w.appendChild(bagianUjian('iu-perangkat', 'Cek perangkat', h('div', { class: 'card' }, progCek,
        cek.map(([id, judul, bantu]) => UKP.c.sakelar({ id: 'cek-' + id, judul, bantu, nilai: !!s.cekPerangkat[id], onchange: e => { s.cekPerangkat[id] = e.target.checked; UKP.store.save(); progCek.atur(nCek()); UKP.umumkan((e.target.checked ? 'Siap: ' : 'Belum: ') + judul + '. ' + nCek() + ' dari ' + cek.length + ' siap.'); } }))),
        h('p', { class: 'meta' }, 'Masuk Zoom paling lambat ' + (pr.masukSebelumMenit || 30) + ' menit sebelum sesi; terlambat lebih dari ' + (pr.terlambatGugurMenit || 15) + ' menit tidak dapat mengikuti ujian.'), catatanVerif([pr], 'Spesifikasi perangkat dari pedoman KLC yang belum dibaca langsung; cocokkan sebelum hari H.')));
      const tips = Array.isArray(uj.tipsHariH) ? uj.tipsHariH : [];
      if (tips.length) w.appendChild(bagianUjian('iu-tips', 'Tips hari H', lipatDaftar('ul', 'bersih small daftar-iu', tips.map(butirRef), 'tips'), catatanVerif(tips)));
    }

    // ---- tab 4: laporan peserta (bukan dokumen resmi) ----
    const LAPORAN_B = [
      ['B7', 'Jurnal dasar debit/kredit: beban gaji, utang gaji, utang PPh 21, pembayaran'],
      ['B8', 'PBB perkebunan (emplasemen, areal produktif, biaya investasi tanaman), migas lepas pantai, kabel bawah laut; SPPT, keberatan, pengurangan'],
      ['B6', 'PPh Pasal 29 dengan tarif 22% / Tbk 19% / fasilitas Ps. 31E omzet ≤ Rp50 M; penyertaan saham afiliasi'],
      ['A1', 'Suami pegawai sekaligus pengusaha, istri pisah harta (PH/MT), keuntungan penjualan saham'],
      ['A2', 'Surat Teguran, keberatan, banding; STP vs SKPKB'],
      ['A3', 'PPh 26 dan P3B untuk pembelian barang dari luar negeri; PPh 22 bendahara; BBM ke SPBU swasta vs Pertamina vs konsumen akhir'],
      ['A1/A2', 'Pihak yang dikecualikan sebagai subjek pajak dalam negeri'],
    ];
    // laporan peserta lulus UKP Tingkat C, 28 Okt 2026 (docs/PENGALAMAN-UJIAN.md): [kelompok/topik, butir, seberapa sering]
    const LAPORAN_C = [
      ['C9/C10', 'BUT: timbulnya BUT dan time test P3B, penghasilan yang diatribusikan, biaya kantor pusat yang boleh/tidak boleh dikurangkan, branch profit tax Pasal 26 ayat (4) dan penanaman kembali', 'banyak'],
      ['C9.6', 'Top-up Tax / pajak minimum global (GMT, GloBE): ambang €750 juta, ETR yurisdiksi, substance-based income exclusion, top-up tax, QDMTT/IIR/UTPR, pelaporan GIR', 'banyak'],
      ['A3/A4/B7/C9', 'Kurs KMK vs kurs tengah BI: DPP pemotongan/pemungutan dan PPN valas memakai kurs KMK; pembukuan memakai kurs transaksi dan kurs tengah BI akhir periode; jebakan di selisih kurs', 'pasti muncul (pot/put dan akuntansi perpajakan)'],
      ['C10.5/C9.4', 'Transfer pricing: PKKU, metode, dokumentasi, penyesuaian', 'beberapa'],
      ['B8', 'PBB-P5L: hitung dan prosedur', 'sedang'],
      ['A2.10', 'PPSP (penagihan dengan surat paksa): garis waktu dan prosedur', 'sedang'],
      ['A2', 'KUP umum', 'sedikit'],
    ];
    // label kelompok bergaya mono ("A3/A4/B7/C9") diberi titik putus setelah "/" agar tidak melebar di layar 320 px
    const labelKel = teks => String(teks).split('/').map((x, i, a) => i < a.length - 1 ? [x + '/', h('wbr')] : x);
    const butirLap = (kode, teks, frek) => h('li', null, h('span', { class: 'kode' }, labelKel(kode)), h('span', null, frek ? [h('strong', null, frek.charAt(0).toUpperCase() + frek.slice(1)), ' · '] : null, teks));
    function tabLaporan(w) {
      // hanya soal yang sah untuk tingkat laporan (kelompok tingkat itu dan tingkat soal memuatnya), sama dengan saringan Latih
      const nLap = kode => UKP.soalLaporanSah ? UKP.soalLaporanSah(kode).length : K.soalLaporan ? K.soalLaporan(kode).length : 0;
      const nC = nLap('C-2026-10'); const nB = nLap('B-2026-10');
      w.appendChild(h('p', { class: 'meta catatan-verif' }, UKP.icon('setengah', null, true), 'Dari pesan dan catatan peserta, bukan dokumen resmi.'));
      w.appendChild(bagianUjian('iu-laporan-c', 'Tingkat C · 28 Oktober 2026', h('p', { class: 'meta' }, 'Peserta lulus. ' + (nC ? nC + ' soal di bank bertanda butir laporan ini.' : 'Soal bertanda butir laporan ini belum tersedia.')),
        lipatDaftar('ul', 'bersih small daftar-lapor', LAPORAN_C.map(r => butirLap(r[0], r[1], r[2])), 'topik'),
        h('details', { class: 'lipat' }, h('summary', null, 'Jebakan kurs'), h('p', { class: 'small teks-baca' }, 'Kurs KMK (mingguan) untuk DPP dan pajak terutang dalam valuta asing; kurs transaksi dan kurs tengah BI untuk pembukuan; selisih kurs timbul dari beda kurs pencatatan dengan kurs pelunasan atau kurs akhir periode, dan diakui fiskal mengikuti pembukuan yang taat asas.')),
        nC ? h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => UKP.go('latih', { laporan: 'C-2026-10' }) }, UKP.icon('pen', null, true), 'Latih butir laporan C')) : null));
      w.appendChild(bagianUjian('iu-laporan-b', 'Tingkat B · Oktober 2026', h('p', { class: 'meta' }, nB ? nB + ' soal di bank bertanda butir laporan ini.' : 'Soal yang mengarah ke butir ini tersedia lewat Latih › "Hanya soal gaya UKP nyata".'),
        lipatDaftar('ul', 'bersih small daftar-lapor', LAPORAN_B.map(r => butirLap(r[0], r[1])), 'topik'),
        h('div', { class: 'btn-row' }, nB ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => UKP.go('latih', { laporan: 'B-2026-10' }) }, UKP.icon('pen', null, true), 'Latih butir laporan B') : h('button', { type: 'button', class: 'btn btn-sm', onclick: () => UKP.go('latih', { gayaUkp: true, n: 10, mulai: true }) }, UKP.icon('pen', null, true), 'Latih 10 soal gaya UKP nyata'))));
    }

    // ---- tab 5: tanya jawab, transisi USKP, catatan Anda ----
    function tabTanya(w) {
      const faq = Array.isArray(uj.faqTransisi) ? uj.faqTransisi : [];
      if (faq.length) w.appendChild(bagianUjian('iu-faq', 'Tanya jawab', h('div', { class: 'akordeon' }, faq.map(q => h('details', { class: 'lipat' }, h('summary', null, q.tanya, tandaVerif(q)), h('p', { class: 'small' }, q.jawab), q.peringatan ? h('p', { class: 'meta catatan-verif' }, UKP.icon('setengah', null, true), q.peringatan) : null, q.dasar ? h('p', { class: 'meta' }, q.dasar) : null))), catatanVerif(faq)));
      if (uj.rezimLama) {
        const tblL = h('table', null, h('caption', { class: 'visually-hidden' }, 'Peta USKP lama ke kelompok UKP'), h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'USKP'), h('th', { scope: 'col' }, 'Mata ujian lama'), h('th', { scope: 'col' }, 'Kode UKP'))), h('tbody', null, [['A', 'PPh OP & SPT · KUP/PPSP/PP · Pot/Put · PPN · PBB-P5L & Bea Meterai · Kode Etik', 'A1 · A2 · A3 · A4 · (B8 + A5) · E'], ['B', 'PPh Badan & SPT · KUP/PPSP/PP · Pot/Put · PPN · Akuntansi Perpajakan', 'B6 · A2 · A3 · A4 · B7'], ['C', 'PPh Badan · Pajak Internasional · Pot/Put · Akuntansi Perpajakan', 'C9 · C10 · A3 · B7']].map(r => h('tr', null, r.map((c, i) => h('td', { class: i === 0 ? 'mono' : i === 2 ? 'tiny mono' : 'small' }, c))))));
        w.appendChild(bagianUjian('iu-transisi', 'Transisi dari USKP', h('p', { class: 'small teks-baca' }, uj.rezimLama.ringkas),
          h('details', { class: 'lipat' }, h('summary', null, 'Peta mata ujian USKP → kelompok UKP'), tabelV6('Peta USKP lama ke kelompok UKP', tblL))));
      }
      const kesan = h('textarea', { class: 'input', rows: 4, id: 'kesan-ujian', 'aria-describedby': 'kesan-bantu', placeholder: 'Contoh: Tingkat A — 100 soal/210 menit; dominan kasus panjang PPh 21 TER; PPN banyak soal faktur Coretax…' });
      kesan.value = s.kesanUjian || ''; // tampilkan ulang catatan tersimpan (properti value, bukan atribut)
      w.appendChild(bagianUjian('iu-catatan', 'Catatan ujian Anda', h('p', { class: 'meta', id: 'kesan-bantu' }, 'Topik yang muncul, bentuk soal, jebakan. Tersimpan di perangkat ini dan dipakai Tutor sebagai konteks.'),
        h('div', { class: 'field' }, h('label', { for: 'kesan-ujian' }, 'Kesan dan topik yang muncul'), kesan),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => { s.kesanUjian = kesan.value; UKP.store.save(); UKP.toast('Catatan tersimpan.', { nada: 'ok' }); } }, 'Simpan catatan'), UKP.c.salin(() => kesan.value, { label: 'Salin catatan', pesan: 'Catatan disalin.' }))));
    }

    const BANGUN = { format: tabFormat, jadwal: tabJadwal, harih: tabHariH, laporan: tabLaporan, tanya: tabTanya };
    // tab awal: params.tab, atau tab tempat params.bagian (id bagian lama, mis. iu-perangkat / perangkat) berada
    const bagianTuju = idBagianIU(params.bagian) || (TAB_IU.includes(params.tab) ? null : idBagianIU(params.tab));
    const awal = TAB_IU.includes(params.tab) ? params.tab : bagianTuju && BAGIAN_IU[bagianTuju] ? BAGIAN_IU[bagianTuju] : 'format';
    const tabs = UKP.c.tabs({ id: 'iu', label: 'Bagian Info ujian', aktif: awal,
      tab: [{ id: 'format', label: 'Format & materi', labelPendek: 'Format' }, { id: 'jadwal', label: 'Jadwal & daftar', labelPendek: 'Jadwal' }, { id: 'harih', label: 'Hari H', labelPendek: 'Hari H' }, { id: 'laporan', label: 'Laporan peserta', labelPendek: 'Laporan' }, { id: 'tanya', label: 'Tanya jawab', labelPendek: 'Tanya' }],
      isi: id => { const w = h('div', { class: 'stack tab-isi' }); try { BANGUN[id](w); } catch (e) { console.error(e); w.appendChild(UKP.c.kosong('Bagian ini gagal dimuat', e.message)); } return w; },
      onGanti: id => { UKP.perbaruiParams({ tab: id, bagian: null }, 'info-ujian'); } });
    page.append(tabs.el, tabs.elPanel, h('p', { class: 'meta' }, 'Situs ini bukan penyelenggara ujian dan tidak berafiliasi dengan BPPK, DJP, atau asosiasi mana pun. Verifikasi jadwal di portal resmi sebelum mendaftar.'));
    // tautan ke bagian tertentu: gulir ke bagiannya setelah router selesai memfokus h1
    if (bagianTuju) setTimeout(() => { const el = document.getElementById(bagianTuju); if (!el || !el.isConnected) return; const j = el.querySelector('[tabindex="-1"]') || el; try { el.scrollIntoView({ block: 'start', behavior: 'auto' }); } catch (e) {} try { j.focus({ preventScroll: true }); } catch (e) {} }, 120);
    return page;
  };

  // ================= ETIKA & PROFESI =================
  UKP.views.profesi = function () {
    if (!UKP.modul.E) return h('div', { class: 'page' }, h('h1', null, 'Etika & Ujian Profesi'), UKP.c.kosong('Modul belum dimuat'));
    const page = UKP.views.kelompok({ kode: 'E' });
    // banner menggantikan slot kosong Kelompok (div.kel-slot, anak pertama) agar tetap di atas kop; cadangan: sebelum anak kedua
    const banner = h('div', { class: 'banner', 'data-tone': 'info' }, 'Modul ini tidak diujikan di UKP. Kode etik dan standar profesi diuji pada ujian profesi asosiasi (wajib digelar paling lambat 31 Desember 2026). Alur izin: SKK → ujian profesi → izin praktik → PPL tahunan.');
    const slot = page.querySelector(':scope > .kel-slot');
    if (slot) slot.replaceWith(banner); else page.insertBefore(banner, page.children[1] || null);
    return page;
  };

  // ================= VERSI OFFLINE =================
  // Satu berkas HTML mandiri (CSS + semua skrip + font tertanam) dirakit di browser dari halaman yang sedang berjalan,
  // padanan tools/build-offline.js (lihat docs/OFFLINE.md). window.UKP_OFFLINE = true menandai halaman versi offline.
  const OFF = UKP.berkasOffline = UKP.berkasOffline || {};
  OFF.NAMA = 'pelatih-ukp-offline.html';
  OFF.URL_FONT = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap';
  OFF.aktif = () => !!root.UKP_OFFLINE;
  // isi <meta name="pelatih-ukp-offline" content="<versi> <tanggal build>">
  OFF.info = () => { const m = document.querySelector('meta[name="pelatih-ukp-offline"]'); const c = m ? String(m.getAttribute('content') || '').trim().split(/\s+/) : []; return { versi: c[0] || null, dibuat: c[1] || null }; };
  // urutan skrip sama dengan index.html; dipakai hanya bila daftar dari dokumen tidak lengkap
  const OFF_TETAP = { css: ['css/app.css'], js: ['js/core.js', 'js/data/ref.js', 'js/data/formulir.js', 'js/data/mu-A1.js', 'js/data/mu-A2.js', 'js/data/mu-A3.js', 'js/data/mu-A4.js', 'js/data/mu-A5.js', 'js/data/mu-B6.js', 'js/data/mu-B7.js', 'js/data/mu-B8.js', 'js/data/mu-C9.js', 'js/data/mu-C10.js', 'js/data/mu-E.js', 'js/kalkulator.js', 'js/viz.js', 'js/learn.js', 'js/soal.js', 'js/views-home.js', 'js/views-belajar.js', 'js/views-simulasi.js', 'js/views-alat.js', 'js/app.js'] };
  const OFF_KERANGKA_CADANGAN = '<a class="skip" href="#main">Lewati ke konten</a>\n<div class="shell">\n  <nav class="sidebar" id="sidebar" aria-label="Navigasi utama"></nav>\n  <div class="kolom-utama">\n    <header class="topbar" id="topbar"></header>\n    <main id="main" tabindex="-1" aria-live="off"><div class="page muat" aria-busy="true"><p class="eyebrow">Memuat materi…</p></div></main>\n  </div>\n</div>\n<nav class="bottomnav" id="bottomnav" aria-label="Navigasi utama (ponsel)"></nav>\n<div id="live" class="visually-hidden" role="status" aria-live="polite"></div>\n<div id="live-assertive" role="alert" class="visually-hidden"></div>';
  // kerangka <body> asli diambil saat skrip ini dimuat (boot belum merender): tanpa skrip, gaya, meta, dan komentar
  const OFF_KERANGKA = (() => {
    try {
      const b = document.body && document.body.cloneNode(true); if (!b) return null;
      b.querySelectorAll('script,link,style,meta,title,base,noscript,template').forEach(x => x.remove());
      const tw = document.createTreeWalker(b, NodeFilter.SHOW_COMMENT); const kom = []; while (tw.nextNode()) kom.push(tw.currentNode); kom.forEach(x => x.remove());
      const sb = b.querySelector('#sidebar');
      return sb && !sb.children.length && b.querySelector('#main') && b.querySelector('#topbar') && b.querySelector('#bottomnav') ? b.innerHTML.replace(/\n\s*\n+/g, '\n').trim() : null;
    } catch (e) { return null; }
  })();
  const OFF_JUDUL = (() => { try { return String(document.title || '').trim() || 'MABAR UKP'; } catch (e) { return 'MABAR UKP'; } })();
  // isi <script> inline tidak boleh memuat "</script" (menutup tag) atau "<!--" (mode escape skrip HTML)
  const lolosSkrip = t => String(t).replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '\\x3C!--');
  const lolosGaya = t => String(t).replace(/<\/(style)/gi, '<\\/$1');
  const lolosAtr = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  // aset lokal halaman (urutan dokumen): stylesheet css/*.css dan skrip js/**/*.js dari asal yang sama
  OFF.aset = function () {
    const pola = /\/((?:css|js)\/(?:[\w.-]+\/)*[\w.-]+\.(?:css|js))$/;
    const ke = attr => { if (!attr) return null; try { const u = new URL(attr, document.baseURI); if (u.origin !== location.origin) return null; const m = pola.exec(u.pathname); return m ? { url: u.href, label: m[1] } : null; } catch (e) { return null; } };
    const css = [...document.querySelectorAll('link[rel~="stylesheet"][href]')].map(l => ke(l.getAttribute('href'))).filter(x => x && /\.css$/.test(x.label));
    const js = [...document.querySelectorAll('script[src]')].map(s => ke(s.getAttribute('src'))).filter(x => x && /\.js$/.test(x.label));
    const lengkap = js.some(x => /(^|\/)js\/core\.js$/.test(x.label)) && js.some(x => /(^|\/)js\/app\.js$/.test(x.label)) && css.length;
    if (lengkap) return { css, js };
    const dariTetap = l => ({ url: new URL(l, document.baseURI).href, label: l });
    return { css: OFF_TETAP.css.map(dariTetap), js: OFF_TETAP.js.map(dariTetap) };
  };
  const denganBatasWaktu = (ms, fn) => { const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), ms); return fn(ctl.signal).finally(() => clearTimeout(t)); };
  const keBase64 = buf => new Promise((ok, gagal) => { const r = new FileReader(); r.onload = () => ok(String(r.result).slice(String(r.result).indexOf(',') + 1)); r.onerror = () => gagal(r.error); r.readAsDataURL(new Blob([buf])); });
  // @font-face tertanam: blok "/* latin */" Google Fonts (mode cors); font variabel → satu berkas per keluarga dengan rentang bobot.
  // Gagal (CSP, tanpa jaringan, browser tanpa woff2) → '' dan berkas memakai font sistem
  OFF.fontTertanam = async function () {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return '';
    try {
      const css = await denganBatasWaktu(15000, signal => fetch(OFF.URL_FONT, { mode: 'cors', credentials: 'omit', signal }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); }));
      const grup = new Map(); const re = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g; let m;
      while ((m = re.exec(css))) {
        const isi = m[1]; const prop = n => { const x = new RegExp('(?:^|;)\\s*' + n + '\\s*:\\s*([^;]+)', 'i').exec(isi); return x ? x[1].trim() : null; };
        const keluarga = (prop('font-family') || '').replace(/^['"]|['"]$/g, ''); const url = (/url\(\s*['"]?([^'")]+\.woff2)['"]?\s*\)/i.exec(prop('src') || '') || [])[1];
        if (!keluarga || !url || !/^https:\/\/fonts\.gstatic\.com\//.test(url)) continue;
        const k = keluarga + '|' + url; if (!grup.has(k)) grup.set(k, { keluarga, gaya: prop('font-style') || 'normal', bobot: [], rentang: prop('unicode-range'), url });
        grup.get(k).bobot.push(Number(prop('font-weight')) || 400);
      }
      const aturan = [];
      for (const f of grup.values()) {
        const buf = await denganBatasWaktu(15000, signal => fetch(f.url, { mode: 'cors', credentials: 'omit', signal }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); }));
        if (buf.byteLength < 1000 || String.fromCharCode(...new Uint8Array(buf, 0, 4)) !== 'wOF2') continue;
        const b = [...new Set(f.bobot)].sort((x, y) => x - y);
        aturan.push("@font-face{font-family:'" + f.keluarga.replace(/'/g, '') + "';font-style:" + f.gaya + ';font-weight:' + (b.length > 1 ? b[0] + ' ' + b[b.length - 1] : b[0]) + ';font-display:swap;src:url(data:font/woff2;base64,' + await keBase64(buf) + ") format('woff2');" + (f.rentang ? 'unicode-range:' + f.rentang + ';' : '') + '}');
      }
      return aturan.join('\n');
    } catch (e) { return ''; }
  };
  // rakit berkas: onProgres(n, m, label) dipanggil per berkas; hasil { html, byte, font: boolean, nBerkas }
  OFF.rakit = async function (onProgres) {
    const aset = OFF.aset(); const semua = [...aset.css.map(x => Object.assign({ jenis: 'css' }, x)), ...aset.js.map(x => Object.assign({ jenis: 'js' }, x))];
    const m = semua.length + 1; let n = 0; const lapor = label => { if (onProgres) onProgres(n, m, label); };
    const isi = [];
    for (const a of semua) {
      lapor(a.label);
      let teks;
      try { const r = await fetch(a.url, { credentials: 'same-origin' }); if (!r.ok) throw new Error('HTTP ' + r.status); teks = await r.text(); }
      catch (e) { const g = new Error(a.label + ': ' + ((e && e.message) || 'gagal diambil')); g.berkas = a.label; throw g; }
      if (!teks.trim()) { const g = new Error(a.label + ': berkas kosong'); g.berkas = a.label; throw g; }
      isi.push(Object.assign({ teks }, a)); n++;
    }
    lapor('font (Space Grotesk, Inter, IBM Plex Mono)');
    const font = await OFF.fontTertanam(); n++; lapor('selesai');
    const versi = UKP.versi || '0'; const tanggal = U.hariIni();
    const desk = document.querySelector('meta[name="description"]');
    const tema = [...document.querySelectorAll('meta[name="theme-color"]')].map(x => '<meta name="theme-color" content="' + lolosAtr(x.getAttribute('content') || '') + '"' + (x.getAttribute('media') ? ' media="' + lolosAtr(x.getAttribute('media')) + '"' : '') + '>');
    // ikon yang sudah berupa data URI ikut disalin; manifest PWA tidak (hanya berlaku di http(s))
    const ikon = [...document.querySelectorAll('link[rel~="icon"][href^="data:"], link[rel="apple-touch-icon"][href^="data:"]')].map(x => '<link rel="' + lolosAtr(x.getAttribute('rel')) + '"' + (x.getAttribute('type') ? ' type="' + lolosAtr(x.getAttribute('type')) + '"' : '') + (x.getAttribute('sizes') ? ' sizes="' + lolosAtr(x.getAttribute('sizes')) + '"' : '') + ' href="' + lolosAtr(x.getAttribute('href')) + '">');
    const judul = OFF_JUDUL.replace(/\s*[·|–-]\s*.*$/, '') || 'MABAR UKP';
    const html = ['<!doctype html>', '<html lang="id">', '<head>', '<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
      '<meta name="pelatih-ukp-offline" content="' + lolosAtr(versi + ' ' + tanggal) + '">', '<script>window.UKP_OFFLINE = true;</script>', '<!--ARTIFACT-START-->',
      '<title>' + lolosAtr(/offline/i.test(judul) ? judul : judul + ' (offline)') + '</title>', desk ? '<meta name="description" content="' + lolosAtr(desk.getAttribute('content') || '') + '">' : '', ...tema, ...ikon,
      font ? '<style id="font-tertanam">\n' + font + '\n</style>' : '',
      ...isi.filter(x => x.jenis === 'css').map(x => '<style data-sumber="' + lolosAtr(x.label) + '">\n' + lolosGaya(x.teks) + '\n</style>'),
      '<!--ARTIFACT-HEAD-END-->', '</head>', '<body>', '<!--ARTIFACT-BODY-START-->', OFF_KERANGKA || OFF_KERANGKA_CADANGAN,
      ...isi.filter(x => x.jenis === 'js').map(x => '<script data-sumber="' + lolosAtr(x.label) + '">\n' + lolosSkrip(x.teks) + '\n</script>'),
      '<!--ARTIFACT-BODY-END-->', '</body>', '</html>', ''].filter(x => x !== '').join('\n');
    return { html, byte: new Blob([html]).size, font: !!font, nBerkas: semua.length };
  };
  // simpan lewat kapabilitas downloads (aplikasi Claude) bila aktif; selain itu <a download> dengan URL blob.
  // hasil: 'disimpan' | 'ditolak' | 'sibuk' | 'diunduh'
  OFF.simpan = async function (nama, data, tipe) {
    const blob = data instanceof Blob ? data : new Blob([data], { type: tipe || 'text/html;charset=utf-8' });
    if (UKP.downloadsAktif && root.claude && typeof root.claude.use === 'function') {
      let d = null; try { d = await root.claude.use('downloads'); } catch (e) { d = null; }
      if (d) {
        try { await d.save({ filename: nama, data: blob }); return 'disimpan'; }
        catch (e) { const code = e && e.code; if (code === 'declined') return 'ditolak'; if (code === 'rate_limited') return 'sibuk'; /* lainnya: coba unduhan biasa */ }
      }
    }
    const url = URL.createObjectURL(blob); const a = h('a', { href: url, download: nama, hidden: true });
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 60000);
    return 'diunduh';
  };
  const ukuranMb = byte => UKP.fmt.angka(byte / 1048576, 1) + ' MB';
  // petunjuk membuka berkas offline per perangkat
  function caraBukaOffline() {
    const lipat = (judul, ...isi) => h('details', { class: 'lipat' }, h('summary', null, judul), ...isi);
    return h('div', { class: 'akordeon' },
      lipat('Laptop (Windows, macOS, Linux)', h('ol', { class: 'bersih small' },
        h('li', null, 'Simpan ', h('span', { class: 'mono' }, OFF.NAMA), ' di folder tetap, mis. Dokumen.'),
        h('li', null, 'Klik dua kali: berkas terbuka di Chrome, Edge, Firefox, atau Safari tanpa internet. Tandai (bookmark) agar mudah dibuka lagi.'),
        h('li', null, 'Progres tersimpan di browser itu untuk berkas di lokasi itu. Jangan memindahkan atau mengganti nama berkas; untuk memperbarui, timpa berkas lama di lokasi yang sama.'))),
      lipat('Android', h('ol', { class: 'bersih small' },
        h('li', null, 'Unduh saat masih online; berkas masuk folder Download.'),
        h('li', null, 'Buka aplikasi Files/File Saya › Download › ketuk berkas › pilih Chrome (atau Firefox).'),
        h('li', null, 'Di sebagian perangkat, ketik ', h('span', { class: 'mono' }, 'file:///sdcard/Download/' + OFF.NAMA), ' di bilah alamat Chrome.'),
        h('li', null, 'Uji sekali dalam mode pesawat sebelum berangkat.'))),
      lipat('iPhone dan iPad', h('ul', { class: 'bersih small' },
        h('li', null, 'Membuka dari aplikasi Files (pratinjau) atau membagikan ke Safari tidak menjalankan skrip, jadi halaman berhenti di "Memuat materi…".'),
        h('li', null, 'Pakai aplikasi ', h('strong', null, 'Documents by Readdle'), ' (impor berkas, lalu ketuk untuk membuka di peramban bawaannya), atau Chrome iOS lewat Bagikan › Buka dengan Chrome. Uji dulu dalam mode pesawat.'),
        h('li', null, h('strong', null, 'Cara teraman di iPhone: '), 'buka alamat hosting MABAR UKP di Safari, lalu Bagikan › Tambahkan ke Layar Utama (PWA). Buka sekali saat masih online sebelum berangkat.')))
    );
  }
  // isi kartu Pengaturan › Versi offline. catatEkspor: pencatat waktu ekspor dari kartu Data
  function isiKartuOffline(catatEkspor) {
    const status = h('p', { class: 'small', role: 'status', 'aria-live': 'polite' });
    const progresWadah = h('div', { hidden: true });
    if (OFF.aktif()) {
      const inf = OFF.info();
      const eksporBtn = h('button', { type: 'button', class: 'btn btn-primary', onclick: async () => {
        if (catatEkspor) catatEkspor();
        const hasil = await OFF.simpan('pelatih-ukp-progres-' + U.hariIni() + '.json', UKP.store.ekspor(), 'application/json');
        status.textContent = hasil === 'ditolak' ? 'Penyimpanan dibatalkan.' : hasil === 'sibuk' ? 'Masih ada permintaan simpan yang terbuka; coba lagi sebentar.' : 'Berkas ekspor progres disiapkan. Bila tidak muncul, pakai Salin ekspor di bagian Data.';
      } }, UKP.icon('unduh'), 'Ekspor progres');
      return [h('div', { class: 'banner', 'data-tone': 'ok', role: 'note' }, UKP.icon('cek-lingkar'), h('div', { class: 'stack-sm' }, h('strong', { class: 'judul' }, 'Anda sedang memakai versi offline'),
        h('span', null, (inf.versi ? 'MABAR UKP v' + inf.versi : 'MABAR UKP') + (inf.dibuat ? ', berkas dibuat ' + UKP.fmt.tanggal(inf.dibuat) : '') + '. Materi, soal, kartu, kalkulator, dan referensi berjalan tanpa internet; Tutor AI tidak tersedia offline.'))),
        h('p', { class: 'small' }, 'Progres versi offline dan versi daring tersimpan terpisah (tiap alamat punya penyimpanan browser sendiri). Pindahkan lewat Ekspor progres di sini, lalu Impor di bagian Data pada versi lainnya.'),
        h('div', { class: 'btn-row' }, eksporBtn, h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { const d = document.getElementById('pg-data'); if (d) { try { d.scrollIntoView({ behavior: UKP.gulirHalus ? UKP.gulirHalus() : 'auto', block: 'start' }); } catch (e) {} const j = document.getElementById('pg-data-j'); if (j) UKP.fokus(j); } } }, UKP.icon('unggah'), 'Ke Data dan impor')),
        status, caraBukaOffline()];
    }
    const btn = h('button', { type: 'button', class: 'btn btn-primary', onclick: async () => {
      if (btn.disabled) return;
      btn.disabled = true; btn.setAttribute('aria-busy', 'true'); progresWadah.hidden = false; status.textContent = 'Menyiapkan berkas offline…';
      const prog = UKP.c.progress({ label: 'Menyiapkan berkas offline', maks: 1, nilai: 0, teks: '' }); progresWadah.replaceChildren(prog);
      try {
        const hasil = await OFF.rakit((n, m, label) => { prog.atur(n / m, n + ' dari ' + m + ' berkas', n + ' dari ' + m + ' berkas'); status.textContent = n < m ? 'Mengambil berkas ' + (n + 1) + ' dari ' + m + ': ' + label : 'Merakit berkas…'; });
        prog.atur(1, hasil.nBerkas + 1 + ' dari ' + (hasil.nBerkas + 1) + ' berkas');
        const cara = await OFF.simpan(OFF.NAMA, hasil.html);
        const rinci = OFF.NAMA + ' · ' + ukuranMb(hasil.byte) + ' · ' + (hasil.font ? 'font tertanam' : 'font sistem (font web tidak dapat diambil)');
        status.textContent = cara === 'disimpan' ? 'Berkas offline disimpan: ' + rinci + '.' : cara === 'ditolak' ? 'Penyimpanan dibatalkan. Berkas siap (' + rinci + '); tekan tombol lagi untuk menyimpan.' : cara === 'sibuk' ? 'Masih ada permintaan simpan yang terbuka; coba lagi sebentar.' : 'Unduhan dimulai: ' + rinci + '. Bila tidak muncul, periksa folder Unduhan atau izinkan unduhan untuk situs ini.';
        if (cara === 'disimpan' || cara === 'diunduh') UKP.toast('Berkas offline siap (' + ukuranMb(hasil.byte) + ').', { nada: 'ok' });
      } catch (e) {
        progresWadah.hidden = true;
        status.textContent = location.protocol === 'file:' ? 'Browser tidak mengizinkan halaman file:// membaca berkas lain. Halaman ini sudah berjalan dari berkas lokal: salin seluruh folder MABAR UKP untuk dipakai tanpa internet, atau buka lewat alamat hosting lalu coba lagi.' : 'Berkas offline gagal dibuat (' + ((e && e.message) || 'galat') + '). Pastikan masih tersambung internet, muat ulang halaman, lalu coba lagi.';
      } finally { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    } }, UKP.icon('unduh'), 'Unduh berkas offline (±5 MB)');
    return [h('ul', { class: 'bersih small' },
        h('li', null, 'Satu berkas HTML berisi seluruh materi, soal, kartu, studi kasus, kalkulator, dan referensi. Unduh saat masih tersambung internet, lalu buka tanpa jaringan.'),
        h('li', null, 'Tutor AI tidak tersedia offline; pembahasan statis tetap lengkap.'),
        h('li', null, 'Progres versi offline tersimpan terpisah dari versi ini. Pindahkan lewat Ekspor dan Impor di bagian Data.'),
        h('li', null, 'Unduh ulang setelah pembaruan konten agar berkas offline ikut mutakhir.')),
      h('div', { class: 'btn-row' }, btn), progresWadah, status, caraBukaOffline()];
  }

  // ================= PENGATURAN =================
  UKP.views.pengaturan = function () {
    const s = UKP.store.get(); const p = s.profil; const g = s.pengaturan; const page = h('div', { class: 'page lebar halaman-pengaturan' });
    page.appendChild(UKP.c.kop({ judul: 'Pengaturan', lead: 'Target, tampilan, Tutor, dan data Anda. Semua tersimpan otomatis di browser ini.',
      meta: UKP.store.ok ? null : [UKP.c.pill('penyimpanan browser tidak tersedia', 'attn', 'peringatan')] }));
    // grup berjudul; indikator "Tersimpan" bercentang tampil 1,5 dtk di kop grup setelah perubahan (PG-1)
    const indikator = {}; const tTersimpan = {};
    const grup = (id, judul, bantu, ...isi) => { const ind = h('span', { class: 'tersimpan small', 'aria-hidden': 'true', style: { display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--ok)' } }); indikator[id] = ind;
      return h('section', { class: 'card grup-pengaturan', id, 'aria-labelledby': id + '-j' }, h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: id + '-j', tabindex: '-1', 'data-judul-bagian': '' }, judul), ind), bantu ? h('p', { class: 'small muted' }, bantu) : null, ...isi); };
    const tandai = id => { const ind = indikator[id]; if (!ind) return; ind.replaceChildren(UKP.icon('check', null, true), 'Tersimpan'); clearTimeout(tTersimpan[id]); tTersimpan[id] = setTimeout(() => ind.replaceChildren(), 1500); };
    const simpan = id => { UKP.store.save(); UKP.terapkanTema(); UKP.perbaruiTopbar(); if (UKP.perbaruiTema) UKP.perbaruiTema(); tandai(id); UKP.toast('Tersimpan.', { nada: 'ok', ms: 2500 }); };
    const seg = (gid, id, label, opsi, aktif, pilih) => UKP.c.segmen({ id, label, aktif, penuh: true, opsi: opsi.map(([v, l, ikon, sub]) => ({ nilai: v, label: l, ikon, sub })), onPilih: v => { pilih(v); simpan(gid); } });
    const galatTgl = h('p', { class: 'galat', id: 'p-tgl-galat', hidden: true, style: { margin: '0' } });
    const bantuTgl = h('span', { class: 'bantu', id: 'p-tgl-bantu' }, p.tanggalUjian ? bantuHari(p.tanggalUjian) : 'Kosongkan bila belum mendaftar.');
    let galatP = () => {};
    const inTgl = inputTanggal({ id: 'p-tgl', nilai: p.tanggalUjian || null, min: U.hariIni(), describedby: 'p-tgl-bantu', onUbah: v => { galatP(null); p.tanggalUjian = v; bantuTgl.textContent = v ? bantuHari(v) : 'Kosongkan bila belum mendaftar.'; simpan('pg-target'); }, onGalat: pesan => galatP(pesan) });
    galatP = pasangGalat(galatTgl, inTgl.input || inTgl.querySelector('input'), 'p-tgl-bantu', 'p-tgl-galat');
    const angkaIn = (id, label, kunci, min, max, cadangan) => h('div', { class: 'field' }, h('label', { for: id }, label), h('div', { class: 'input-grup' }, h('input', { class: 'input angka', type: 'text', inputmode: 'numeric', autocomplete: 'off', id, value: p[kunci], onchange: e => { p[kunci] = U.clamp(Number(e.target.value) || cadangan, min, max); e.target.value = p[kunci]; simpan('pg-target'); } }), h('span', { class: 'imbuh', 'aria-hidden': 'true' }, 'mnt')));
    const sw = (gid, key, label, bantu, bawaan) => { const nyala = g[key] == null ? !!bawaan : !!g[key]; return UKP.c.sakelar({ id: 'sw-' + key, judul: label, bantu, nilai: nyala, onchange: e => { g[key] = e.target.checked; simpan(gid); } }); };
    const kartuTarget = grup('pg-target', 'Target', null,
      seg('pg-target', 'p-tingkat', 'Tingkat', [['A', 'Tingkat A'], ['B', 'Tingkat B'], ['C', 'Tingkat C']], p.tingkat, v => { p.tingkat = v; }),
      seg('pg-target', 'p-status', 'Status', [['baru', 'Baru'], ['mengulang', 'Mengulang'], ['uskp', 'Dari USKP']], p.status, v => { p.status = v; }),
      h('div', { class: 'form-grid dua' }, h('div', { class: 'field' }, h('label', { for: 'p-tgl' }, 'Tanggal ujian'), inTgl, bantuTgl, galatTgl), seg('pg-target', 'p-latar', 'Latar', [['akuntansi', 'Akuntansi/pajak'], ['non', 'Non-akuntansi']], p.latar, v => { p.latar = v; })),
      h('div', { class: 'form-grid dua', style: { alignItems: 'end' } }, angkaIn('p-hk', 'Menit/hari kerja', 'menitHariKerja', 5, 240, 15), angkaIn('p-ap', 'Menit/akhir pekan', 'menitAkhirPekan', 0, 480, 0)),
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-ghost btn-text rata', onclick: () => UKP.go('mulai') }, UKP.icon('atur-ulang'), 'Ulangi panduan awal')));
    const kartuTampilan = grup('pg-tampilan', 'Tampilan dan belajar', null,
      seg('pg-tampilan', 'p-tema', 'Tema', [['system', 'Ikut sistem', 'sim'], ['light', 'Terang', 'sun'], ['dark', 'Gelap', 'bulan']], g.tema, v => { g.tema = v; }),
      h('div', { class: 'daftar-sakelar' }, sw('pg-tampilan', 'teksBesar', 'Teks lebih besar', 'Memperbesar teks badan sekitar 12%.'), sw('pg-tampilan', 'kurangiGerak', 'Kurangi gerak', 'Mematikan transisi, stempel beranimasi, dan flip kartu.'), sw('pg-tampilan', 'sorotKualifikasi', 'Sorot kata kualifikasi', 'Menyorot "kecuali", "bukan", "paling lama", "paling sedikit" di stem.'), sw('pg-tampilan', 'tts', 'Tombol "Dengarkan"', 'Membacakan teks dengan suara perangkat.'),
        // v7.7: jawab langsung bawaan (profil.jawabLangsung !== false); sakelar menyala = mode lama "periksa dulu" (Periksa + keyakinan)
        UKP.c.sakelar({ id: 'sw-periksaDulu', judul: 'Periksa dulu sebelum lihat jawaban', bantu: 'Bila mati, jawaban dan pembahasan langsung muncul saat opsi dipilih. Bila menyala, pilih jawaban, tandai keyakinan (opsional), lalu tekan Periksa. Simulasi tidak berubah.', nilai: p.jawabLangsung === false, onchange: e => { p.jawabLangsung = !e.target.checked; simpan('pg-tampilan'); } }),
        UKP.c.sakelar({ id: 'sw-berandaLengkap', judul: 'Beranda lengkap (dasbor)', bantu: 'Menampilkan sesi hari ini, penguasaan, dan aktivitas di beranda. Bila mati, beranda hanya berisi aksi; sesi hari ini ada di Rencana dan penguasaan di Kemajuan › Ringkasan.', nilai: p.berandaLengkap === true, onchange: e => { p.berandaLengkap = e.target.checked; simpan('pg-tampilan'); } }),
        sw('pg-tampilan', 'pintasan', 'Pintasan satu tombol', 'Tombol /, ?, dan pintasan simulasi (←/→, R, G). Matikan bila memakai input suara atau perangkat bantu; Ctrl/Cmd+K tetap membuka pencarian.', true)));
    const kartuTutor = grup('pg-tutor', 'Tutor AI', 'Tersedia saat halaman dibuka di aplikasi Claude; memakai kuota akun Anda, maks 20 pertanyaan/hari. Pembahasan statis selalu tersedia.',
      sw('pg-tutor', 'tutorAktif', 'Tampilkan tombol Tutor', 'Tombol "Tanya Tutor" muncul setelah soal diperiksa, di topik, dan di kalkulator.'));
    const kartuIngat = grup('pg-pengingat', 'Pengingat harian (kalender)', null, kartuPengingat('p'));
    // zona data: ekspor/impor, pindah perangkat, hapus semua (bahaya terpisah)
    const ta = h('textarea', { class: 'input mono', rows: 6, hidden: true, 'aria-label': 'Data progres', placeholder: 'Tempel teks ekspor dari perangkat lain di sini.', style: { fontSize: '12px' } });
    const teksEkspor = () => s.eksporTerakhir ? 'Ekspor terakhir: ' + UKP.fmt.tanggal(U.iso(new Date(s.eksporTerakhir))) + '.' : 'Belum pernah diekspor. Ekspor berkala melindungi progres bila data browser terhapus.';
    const infoEkspor = h('p', { class: 'small muted' }, teksEkspor());
    const catatEkspor = () => { s.eksporTerakhir = Date.now(); UKP.store.save(); infoEkspor.textContent = teksEkspor(); };
    const GALAT_KOTAK = 'Impor tidak berhasil: isi kotak bukan ekspor MABAR UKP yang utuh. Salin ulang dari perangkat asal.';
    const GALAT_BERKAS = 'Berkas bukan JSON ekspor MABAR UKP yang valid.';
    const pesanImpor = h('p', { class: 'galat', role: 'alert', hidden: true, style: { margin: '0' } });
    const galatImpor = teks => { pesanImpor.replaceChildren(UKP.icon('peringatan', null, true), h('span', null, teks)); pesanImpor.hidden = false; ta.setAttribute('aria-invalid', 'true'); };
    async function impor(json, galat) {
      if (!(await UKP.konfirmasi('Impor progres?', 'Data saat ini akan diganti dengan isi berkas yang ditempel.', { ya: 'Impor' }))) return;
      try { UKP.store.impor(json); pesanImpor.hidden = true; ta.removeAttribute('aria-invalid'); UKP.terapkanTema(); UKP.perbaruiTopbar(); UKP.toast('Progres diimpor.', { nada: 'ok' }); UKP.go('beranda'); }
      catch (e) { galatImpor(galat); UKP.toast(galat, { nada: 'attn' }); }
    }
    const fileIn = h('input', { type: 'file', accept: 'application/json,.json', class: 'visually-hidden', tabindex: '-1', 'aria-hidden': 'true', onchange: e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { ta.value = r.result; ta.hidden = false; e.target.value = ''; impor(String(r.result || ''), GALAT_BERKAS); }; r.onerror = () => galatImpor(GALAT_BERKAS); r.readAsText(f); } });
    const kartuData = grup('pg-data', 'Data dan pindah perangkat', 'Progres tersimpan hanya di browser ini. Untuk pindah perangkat: salin ekspor di sini, tempel di perangkat lain lalu Impor.',
      infoEkspor,
      h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: async () => { catatEkspor(); ta.value = UKP.store.ekspor(); ta.hidden = false; if (await UKP.salinTeks(ta.value, 'Salin ekspor')) UKP.toast('Ekspor disalin ke papan klip.', { nada: 'ok' }); } }, UKP.icon('copy'), 'Salin ekspor'),
        h('button', { class: 'btn btn-ghost btn-text', onclick: () => { catatEkspor(); ta.value = UKP.store.ekspor(); ta.hidden = false; ta.select(); } }, UKP.icon('mata'), 'Tampilkan ekspor'),
        UKP.downloadsAktif ? h('button', { class: 'btn', onclick: () => { catatEkspor(); UKP.simpanBerkas('pelatih-ukp-progres-' + U.hariIni() + '.json', UKP.store.ekspor()); } }, UKP.icon('unduh'), 'Simpan berkas') : null),
      ta, pesanImpor,
      h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: () => { if (ta.hidden) { ta.value = ''; ta.hidden = false; ta.focus(); return; } if (!ta.value.trim()) { galatImpor('Tempel teks ekspor ke kotak di atas dulu.'); ta.focus(); return; } impor(ta.value, GALAT_KOTAK); } }, UKP.icon('unggah'), 'Impor dari teks'), h('button', { type: 'button', class: 'btn', onclick: () => fileIn.click() }, UKP.icon('unggah'), 'Impor berkas…'), fileIn));
    const kartuBahaya = h('section', { class: 'card zona-data', 'aria-labelledby': 'pg-bahaya-j', style: { borderColor: 'var(--attn)' } }, h('div', { class: 'card-head' }, h('h2', { class: 'card-title', id: 'pg-bahaya-j' }, 'Zona data'), UKP.c.pill('tidak dapat dibatalkan', 'attn', 'peringatan')),
      h('p', { class: 'small muted' }, 'Hapus semua progres dari browser ini. Ekspor dulu bila ingin menyimpan salinan.'),
      h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-danger btn-attn', onclick: async () => { if (await UKP.konfirmasi('Hapus semua progres?', 'Jawaban, kartu, kehadiran, dan simulasi akan dihapus permanen dari browser ini.', { ya: 'Hapus semua', bahaya: true })) { UKP.store.reset(); UKP.terapkanTema(); UKP.go('mulai', {}, { replace: true }); } } }, UKP.icon('hapus'), 'Hapus semua data')));
    const kartuOffline = grup('pg-offline', 'Versi offline (untuk pesawat)', null, ...isiKartuOffline(catatEkspor));
    // Tim (js/tim.js): bagikan ringkasan ke dasbor tim (db Artifact) + status sambungan + kode hasil untuk cadangan tanpa akun
    const T = UKP.tim; let kartuTim = null;
    if (T) {
      const statusTim = h('div', { class: 'stack-sm', role: 'status' }); const aksiTim = h('div', { class: 'btn-row' });
      const waktuPendek = iso => { const d = new Date(iso); return isNaN(d) ? '' : UKP.fmt.tanggal(U.iso(d)).replace(/ \d{4}$/, '') + ', ' + String(d.getHours()).padStart(2, '0') + '.' + String(d.getMinutes()).padStart(2, '0'); };
      const tombolPemimpin = h('button', { type: 'button', class: 'btn', hidden: true, onclick: () => UKP.go('tim') }, UKP.icon('profil'), 'Buka dasbor tim');
      const salinKode = h('button', { type: 'button', class: 'btn', onclick: async () => {
        let kode = ''; try { kode = await T.kodeHasilAsync(); } catch (e) { kode = T.kodeHasil(); }
        if (kode && await UKP.salinTeks(kode, 'Salin kode hasil')) UKP.toast('Kode hasil disalin. Kirim ke pemimpin tim lewat chat; pemimpin menempelnya di Dasbor tim.', { nada: 'ok', ms: 6000 });
      } }, UKP.icon('copy'), 'Salin kode hasil');
      // mode server tim (deploy/server.js): keluar dari akun server (POST keluar, lalu halaman masuk)
      const keluarServer = h('button', { type: 'button', class: 'btn btn-ghost btn-sm', hidden: true, 'data-k': 'keluar-server', onclick: async e => {
        const b = e.currentTarget; b.disabled = true;
        if (typeof T.keluarServer === 'function') await T.keluarServer(); else location.href = 'keluar';
      } }, 'Keluar');
      const kirimKini = h('button', { type: 'button', class: 'btn btn-ghost btn-text', hidden: true, onclick: async () => { await T.kirimRingkasan({ segera: true }); gambarTim(); UKP.toast(T.info().galat ? 'Ringkasan belum terkirim.' : 'Ringkasan terbaru sudah ada di dasbor tim.', { nada: T.info().galat ? 'attn' : 'ok', ms: 3000 }); } }, UKP.icon('atur-ulang'), 'Kirim sekarang');
      // nama di ringkasan tim (profil.nama; juga diminta di onboarding langkah pertama)
      // v9.2 G3: kalimat "tidak ada akun" hanya bila bukan server tim sendiri (di sana memang ada akun)
      const adaAkunServer = () => { try { const i = T.info(); return !!(i && i.modeServer); } catch (e) { return false; } };
      const galatNama = h('p', { class: 'galat small', id: 'pg-tim-nama-galat', role: 'alert', hidden: true });
      const inNama = h('input', { class: 'input', id: 'pg-tim-nama', type: 'text', autocomplete: 'name', minlength: 2, maxlength: 40, value: UKP.store.get().profil.nama || '', 'aria-describedby': 'pg-tim-nama-bantu pg-tim-nama-galat' });
      const simpanNama = () => {
        const v = inNama.value.replace(/\s+/g, ' ').trim();
        if (v.length < 2 || v.length > 40) { galatNama.textContent = 'Isi nama Anda (2–40 karakter).'; galatNama.hidden = false; inNama.setAttribute('aria-invalid', 'true'); inNama.focus(); return; }
        galatNama.hidden = true; inNama.removeAttribute('aria-invalid');
        const s = UKP.store.get(); if (s.profil.nama === v) return;
        s.profil.nama = v; UKP.store.save(); inNama.value = v; tandai('pg-tim');
        T.kirimRingkasan({ segera: true }); UKP.toast('Nama disimpan.', { nada: 'ok', ms: 2500 });
      };
      inNama.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); simpanNama(); } });
      const fieldNama = h('div', { class: 'field' }, h('label', { for: 'pg-tim-nama' }, 'Nama Anda'),
        h('div', { class: 'btn-row' }, inNama, h('button', { type: 'button', class: 'btn', onclick: simpanNama }, 'Simpan nama')),
        h('span', { class: 'bantu', id: 'pg-tim-nama-bantu' }, 'Tampil di dasbor pemimpin tim dan sapaan Beranda.' + (adaAkunServer() ? '' : ' Nama ini hanya tersimpan di perangkat ini. Tidak ada akun.')), galatNama);   // gambarTim() di bawah menyetel ulang teks ini (server tim: teks akun)
      const pemimpinOn = h('p', { class: 'small', hidden: true }, UKP.c.titikNada('ok'), ' Pemimpin online');
      let swTim = null;
      // mode masuk nama (deploy/server.js MASUK_NAMA=1): cookie ukp_nama "kunci|Nama Tampil" untuk akun tanpa sandi → "Masuk sebagai Rina"
      const namaTampilAkun = akun => { try { const m = /(?:^|;\s*)ukp_nama=([^;]+)/.exec(document.cookie || ''); if (m) { const v = decodeURIComponent(m[1]), j = v.indexOf('|'); if (j > 0 && v.slice(0, j) === akun) return v.slice(j + 1).slice(0, 40); } } catch (e) {} return null; };
      function gambarTim() {
        const i = T.info(); let pill, teks;
        const tampilAkun = i.akun ? (namaTampilAkun(i.akun) || i.akun) : i.akun;
        const sl = typeof T.statusLangsung === 'function' ? T.statusLangsung(i) : null;
        pemimpinOn.hidden = !(i.room === 'tamu' && i.pemimpinOnline && i.aktif);
        // bantuan sakelar jujur sesuai jalur: jalur langsung hanya bisa menghapus lewat pemimpin yang sedang online
        const bantuSw = swTim && swTim.querySelector('.bantu');
        if (bantuSw) bantuSw.textContent = i.room === 'tamu' && i.status !== 'tersambung'
          ? 'Bila dimatikan, ringkasan Anda tidak dikirim lagi. Ringkasan yang sudah diterima dihapus dari dasbor pemimpin bila pemimpin online selagi halaman ini terbuka; bila tidak, minta pemimpin menghapusnya.'
          : 'Bila dimatikan, ringkasan Anda dihapus dari dasbor tim dan tidak dikirim lagi.';
        const tunda = i.hapusTertunda ? ' Ringkasan lama belum terhapus dari server; dicoba lagi otomatis saat tersambung.' : '';
        if (i.menyambung) { pill = UKP.c.pill('menyambung…', 'info'); teks = i.modeServer ? 'Memeriksa server tim.' : 'Memeriksa server tim atau akun Claude.'; }
        else if (i.server && i.akunBeda) { pill = UKP.c.pill('progres akun lain', 'warn'); teks = 'Masuk sebagai ' + tampilAkun + ', tetapi progres di perangkat ini milik akun ' + i.akunBeda + '. Tidak ada hasil yang dikirim sampai Anda memilih di bawah ini.'; }
        else if (i.status === 'server-tak-terjangkau') { pill = UKP.c.pill('server tidak terjangkau', 'warn'); teks = 'Server tim tidak terjangkau. Progres tetap tersimpan di perangkat ini dan dikirim otomatis saat tersambung lagi.' + tunda; }
        else if (i.galat === 'sesi-berakhir') { pill = UKP.c.pill('sesi berakhir', 'warn'); teks = 'Sesi Anda di server tim berakhir. Muat ulang halaman untuk masuk lagi; progres belajar di perangkat ini tetap aman.' + tunda; }
        else if (i.server && i.status === 'tersambung' && !i.aktif) { pill = UKP.c.pill(i.hapusTertunda ? 'menunggu penghapusan' : 'tidak dibagikan', 'warn'); teks = 'Masuk sebagai ' + tampilAkun + ' di server tim. Hasil Anda tidak dikirim ke admin tim.' + (i.hapusTertunda ? ' Ringkasan lama belum terhapus dari server; dicoba lagi otomatis.' : ''); }
        else if ((i.status === 'tersambung' || i.status === 'langsung') && !i.aktif) { pill = UKP.c.pill('tidak dibagikan', 'warn'); teks = 'Hasil Anda tidak dikirim ke dasbor tim.'; }
        else if (i.server && i.status === 'tersambung') {
          pill = UKP.c.pill('tersambung ke server', i.galat ? 'warn' : 'ok');
          teks = 'Masuk sebagai ' + tampilAkun + (i.admin ? ' (admin tim)' : '') + '. ' + (i.galat === 'kuota' ? 'Server menahan kiriman sementara karena terlalu sering; dicoba lagi otomatis. ' : i.galat ? 'Kiriman terakhir belum sampai ke server; dicoba lagi setelah sesi berikutnya. ' : '')
            + (i.terakhirKirim ? 'Terakhir dikirim ' + waktuPendek(i.terakhirKirim) + '. ' : '') + 'Ringkasan dikirim otomatis ke admin tim setelah latihan atau simulasi selesai.';
        }
        else if (sl && i.room === 'tamu') { pill = UKP.c.pill(sl.label, sl.nada); teks = sl.teks + ' Kode hasil tetap bisa disalin sebagai cadangan.'; }
        else if (i.status === 'tersambung' && sl) { pill = UKP.c.pill('tersambung', 'ok'); teks = sl.teks; }
        else if (i.status === 'tersambung' && i.galat === 'tidak-diizinkan') { pill = UKP.c.pill('hanya melihat', 'warn'); teks = 'Akses Anda pada halaman ini hanya melihat, jadi hasil tidak bisa dikirim. Minta pemimpin tim memberi akses Kontributor, atau kirim kode hasil.'; }
        else if (i.status === 'tersambung') { pill = UKP.c.pill('tersambung', 'ok'); teks = i.terakhirKirim ? 'Terakhir dikirim ' + waktuPendek(i.terakhirKirim) + '. Dikirim otomatis setelah latihan atau simulasi selesai.' : 'Dikirim otomatis setelah latihan atau simulasi selesai.'; }
        else if (i.status === 'tanpa-akun') { pill = UKP.c.pill('belum masuk', 'warn'); teks = 'Masuk ke claude.ai dengan akun yang diundang pemimpin agar hasil terkirim otomatis. Sementara itu, kirim kode hasil.'; }
        else if (i.modeServer) { pill = UKP.c.pill('server tidak terjangkau', 'warn'); teks = 'Server tim tidak terjangkau. Progres tetap tersimpan di perangkat ini dan dikirim otomatis saat tersambung lagi.' + tunda; }
        else { pill = UKP.c.pill('tidak tersambung', 'netral'); teks = 'Pengiriman otomatis hanya tersedia saat halaman dibuka di claude.ai dalam keadaan masuk. Di sini, salin kode hasil lalu kirimkan ke pemimpin tim.'; }
        if ((i.status === 'tersambung' || i.status === 'langsung') && !i.aktif && i.galat && i.galat !== 'akun-berbeda' && !i.hapusTertunda) teks += ' Galat terakhir: ' + (i.galat === 'kuota' ? 'server menahan permintaan sementara' : 'permintaan ke server gagal') + '.';
        const banner = i.akunBeda && typeof UKP.timBannerAkun === 'function' ? UKP.timBannerAkun() : null;
        statusTim.replaceChildren(h('p', { class: 'small' }, h('span', { class: 'muted' }, 'Status: '), pill), h('p', { class: 'small muted' }, teks), pemimpinOn, banner);
        const inSw = swTim && swTim.querySelector('input'); if (inSw) inSw.disabled = !!i.akunBeda;
        kirimKini.hidden = !(i.status === 'tersambung' && i.aktif && !i.tulisDitolak && !i.akunBeda);
        keluarServer.hidden = !i.server || !!i.akunBeda; // saat akun berbeda, tombol Keluar ada di banner
        const bantuNama = fieldNama.querySelector('#pg-tim-nama-bantu');
        if (bantuNama) bantuNama.textContent = i.server ? (namaTampilAkun(i.akun) ? 'Untuk sapaan Beranda. Di dasbor admin tim, Anda tampil sebagai ' + tampilAkun + '.' : 'Untuk sapaan Beranda. Di dasbor admin tim, Anda tampil dengan nama akun server (' + i.akun + ').') : 'Tampil di dasbor pemimpin tim dan sapaan Beranda. Nama ini hanya tersimpan di perangkat ini. Tidak ada akun.';
      }
      gambarTim();
      const dengar = () => { if (!statusTim.isConnected) { document.removeEventListener('ukp:tim', dengar); return; } gambarTim(); };
      document.addEventListener('ukp:tim', dengar);
      T.siap().then(() => { gambarTim(); return T.pemimpin(); }).then(ya => { if (ya && UKP.views && UKP.views.tim) tombolPemimpin.hidden = false; }).catch(() => {});
      aksiTim.append(salinKode, kirimKini, tombolPemimpin, keluarServer);
      kartuTim = grup('pg-tim', 'Tim', 'Untuk belajar bersama: pemimpin tim melihat ringkasan Anda (nama, tingkat, jumlah dan akurasi latihan, skor simulasi, kehadiran, dan jawaban per soal 30 hari terakhir: kode soal, opsi yang dipilih, benar/salah, waktu, penanda keyakinan). Tidak ada teks bebas.',
        swTim = UKP.c.sakelar({ id: 'sw-bagiHasilTim', judul: 'Bagikan hasil saya ke dasbor tim', bantu: 'Bila dimatikan, ringkasan Anda dihapus dari dasbor tim dan tidak dikirim lagi.', nilai: T.aktif, onchange: async e => {
          const nyala = e.target.checked; T.aktif = nyala; tandai('pg-tim');
          const terhapus = nyala ? true : await T.hapusRingkasan();
          gambarTim();
          const i = T.info();
          if (!nyala && !terhapus && i.hapusTertunda) UKP.toast('Berbagi dimatikan, tetapi ringkasan lama belum terhapus dari server. Dicoba lagi otomatis saat tersambung.', { nada: 'attn', ms: 8000 });
          else if (!nyala && !terhapus && i.status === 'tersambung') UKP.toast('Berbagi dimatikan, tetapi ringkasan lama belum terhapus dari dasbor tim. Nyalakan lalu matikan lagi sakelar ini sebentar lagi untuk mencoba ulang.', { nada: 'attn', ms: 8000 });
          else UKP.toast(nyala ? 'Hasil Anda dibagikan ke dasbor tim.' : 'Hasil Anda tidak lagi dibagikan.', { nada: 'ok', ms: 3000 });
        } }),
        fieldNama, statusTim, aksiTim,
        // v7.9 latihan bersama (UKP.c.aturBersama di views-belajar.js): peserta lokal, tidak ikut ringkasan yang dikirim
        typeof UKP.c.aturBersama === 'function' ? h('div', { class: 'stack-sm pg-bersama' }, h('h3', { class: 'card-title' }, 'Latihan bersama'),
          h('p', { class: 'small muted' }, 'Jawaban peserta latihan bersama hanya tersimpan di perangkat ini; yang dikirim ke pemimpin/server tetap hanya hasil akun Anda sendiri.'),
          UKP.c.aturBersama({ onUbah: () => tandai('pg-tim') })) : null);
      gambarTim();
    }
    // Akses tim (js/akses.js): nama yang sedang masuk + Keluar; tidak tampil bila gerbang mati
    const aksesAktif = !!(root.UKP_AKSES && root.UKP_AKSES.aktif && UKP.akses);
    const kartuAkses = aksesAktif ? grup('pg-akses', 'Akses tim', 'Aplikasi ini dibagikan untuk tim. Keluar bila memakai perangkat bersama.',
      h('p', null, 'Masuk sebagai ', h('strong', null, (UKP.akses.sesi() && UKP.akses.sesi().nama) || '-'), '.'),
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: () => UKP.keluarAkses() }, 'Keluar'))) : null;
    const bagian = [['pg-target', 'Target'], ['pg-tampilan', 'Tampilan dan belajar'], ['pg-tutor', 'Tutor'], ['pg-pengingat', 'Pengingat'], ['pg-data', 'Data']].concat(kartuTim ? [['pg-tim', 'Tim']] : []).concat([['pg-offline', 'Offline']]).concat(aksesAktif ? [['pg-akses', 'Akses tim']] : []);
    const di = daftarIsi(bagian, 'Bagian Pengaturan', { media: '(min-width: 1024px)', kelas: 'k-3' });
    page.append(di.chips, h('div', { class: 'tata' }, di.aside, h('div', { class: 'k-9 stack' }, kartuTarget, kartuTampilan, kartuTutor, kartuIngat, kartuData, kartuTim, kartuOffline, kartuAkses, kartuBahaya,
      h('p', { class: 'meta' }, 'MABAR UKP ' + UKP.versi + ' · konten ' + ((UKP.ref && UKP.ref.versiKonten) || '-') + ' · status per ' + ((UKP.ref && UKP.ref.statusPer) ? UKP.fmt.tanggal(UKP.ref.statusPer) : '-') + '. Bukan nasihat pajak. Soal disusun ulang dari kisi-kisi resmi.'))));
    requestAnimationFrame(() => di.amati());
    return page;
  };

  // ================= PETA FORMULIR =================
  // daftar formulir → bagian → baris (klik) → rincian: isi, sumber angka, pasal, topik, soal terkait. params: { id?, baris?, q? }
  const semuaSoalModul = () => K.semuaKelompok().flatMap(k => UKP.modul[k].soal);
  // soal terkait baris: formulirRef = kode baris, lalu soal jenis baris-spt pada topik yang sama
  function soalTerkaitBaris(x) {
    const semua = semuaSoalModul();
    const tepat = semua.filter(so => so.formulirRef === x.kode);
    const serupa = x.topik ? semua.filter(so => so.jenis === 'baris-spt' && so.topik === x.topik && so.formulirRef !== x.kode) : [];
    return { tepat, serupa };
  }
  // jumlah soal baris-spt yang akan dipakai Latih (kelompok di luar tingkat target: semua soal kelompok itu)
  function nSoalBarisSpt(kode) {
    const s = UKP.store.get(); const t = s.profil.tingkat; if (!UKP.modul[kode]) return 0;
    const diTingkat = K.kelompok(t).includes(kode);
    return K.soalKelompok(kode, diTingkat ? t : undefined).filter(so => so.jenis === 'baris-spt').length;
  }
  function tombolLatihSpt(kodeDaftar, topikId) {
    const kode = (kodeDaftar || []).find(k => nSoalBarisSpt(k) > 0);
    if (kode) return h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('latih', { jenis: 'baris-spt', kode, n: 10, mulai: true }) }, 'Latih soal baris SPT ' + kode + ' (' + nSoalBarisSpt(kode) + ')');
    if (topikId && K.topik(topikId)) return h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('latih', { topik: topikId, kode: topikId.split('.')[0], n: 10, mulai: true }) }, 'Latih soal topik ' + topikId);
    return null;
  }
  const barisFormulir = f => f.bagian.flatMap(b => b.baris.map(x => ({ b, x })));
  function tautanBaris(x, opsi) {
    opsi = opsi || {}; const tandai = t => opsi.q ? UKP.c.tandaiKueri(t, opsi.q) : t;
    return h('a', { class: 'formulir-baris', href: UKP.href('formulir'), 'data-go': 'formulir', 'data-params': JSON.stringify({ baris: x.kode }) },
      h('span', { class: 'nomor' }, x.nomor || '·'), h('span', { class: 'label' }, tandai(x.label), opsi.sub ? h('span', { class: 'tiny muted', style: { display: 'block' } }, opsi.sub) : null), h('span', { class: 'kode' }, tandai(x.kode)));
  }
  UKP.views.formulir = function (params) {
    params = params || {}; const page = h('div', { class: 'page lebar halaman-formulir' }); const F = UKP.formulir; const daftar = F && Array.isArray(F.formulir) ? F.formulir : [];
    const s = UKP.store.get(); const kelT = K.kelompok(s.profil.tingkat);
    if (params.baris) {
      const ent = UKP.formulirBaris ? UKP.formulirBaris(params.baris) : null;
      if (ent) return rincianBaris(ent, page);
      page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Peta formulir', view: 'formulir' }], judul: 'Baris tidak ditemukan' }));
      page.appendChild(UKP.c.kosong('Kode ' + params.baris + ' tidak ada di peta formulir', 'Peta mungkin belum dimuat atau kode baris sudah berubah.', UKP.link('Daftar formulir', 'formulir', null, 'btn btn-sm'), { ikon: 'formulir' }));
      return page;
    }
    const f = params.id ? daftar.find(x => x.id === params.id) : null;
    if (f) return halamanFormulir(f, page);
    page.appendChild(UKP.c.kop({ judul: 'Peta formulir', lead: 'Komponen SPT dan bukti potong baris demi baris: isi, sumber angka, pasal, topik, dan soal latihan terkait.' }));
    if (!daftar.length) { page.appendChild(UKP.c.kosong('Peta formulir belum dimuat', 'Data js/data/formulir.js belum berisi formulir. Sementara itu, latih soal jenis baris SPT di Latih.', h('div', { class: 'btn-row' }, h('button', { class: 'btn btn-sm', onclick: () => UKP.go('latih', { jenis: 'baris-spt', n: 10, mulai: true }) }, 'Latih soal baris SPT')), { ikon: 'formulir' })); return page; }
    const nBelumCek = daftar.filter(fm => fm.verifikasi === '◐').length; const mayoritasBelumCek = nBelumCek * 2 >= daftar.length;
    if (mayoritasBelumCek) page.appendChild(UKP.c.banner((nBelumCek === daftar.length ? 'Semua' : nBelumCek + ' dari ' + daftar.length) + ' struktur formulir masih mengikuti formulir lama, yang berlaku sampai Tahun Pajak 2024. Padanan Coretax ditulis pada baris yang sudah dicocokkan dengan PER-11/PJ/2025; tata letak layar Coretax belum dicek' + (F.statusPer ? ' (status per ' + UKP.fmt.tanggal(F.statusPer) + ')' : '') + '.', 'warn', null, F.catatan ? h('span', { class: 'meta' }, F.catatan) : null));
    else if (F.catatan) page.appendChild(UKP.c.banner(F.catatan, 'info'));
    const kbdCari = UKP.c.kbd('/'); kbdCari.classList.add('petunjuk-kbd');
    const cari = h('input', { class: 'input', type: 'search', id: 'fm-q', placeholder: 'Cari baris: kode, label, isi, atau pasal…', autocomplete: 'off', 'aria-describedby': 'fm-jumlah', 'data-cari-lokal': '', 'aria-keyshortcuts': '/', value: params.q || null });
    simpanKueri('formulir', cari);
    const jumlah = h('p', { class: 'small muted', role: 'status', id: 'fm-jumlah' }); const area = h('div', { class: 'stack' });
    // saring per kelompok (chip, pilihan jamak)
    const kelAda = []; daftar.forEach(fm => fm.kelompok.forEach(k => { if (!kelAda.includes(k)) kelAda.push(k); })); kelAda.sort((a, b) => UKP.urutanKelompok.indexOf(a) - UKP.urutanKelompok.indexOf(b));
    const pilihKel = new Set();
    // chip bergulir satu baris: "Semua · 14" lalu hitungan per kelompok ("A3 · 7")
    const chipSemua = h('button', { type: 'button', class: 'chip', 'aria-pressed': 'true', onclick: () => { pilihKel.clear(); chipKel.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c === chipSemua))); gambar(); } }, 'Semua · ' + daftar.length);
    const chipKel = kelAda.length > 1 ? h('div', { class: 'chip-row gulir', role: 'group', 'aria-label': 'Saring per kelompok' }, chipSemua, kelAda.map(k => h('button', { type: 'button', class: 'chip', 'aria-pressed': 'false', onclick: e => { if (pilihKel.has(k)) pilihKel.delete(k); else pilihKel.add(k); e.currentTarget.setAttribute('aria-pressed', String(pilihKel.has(k))); chipSemua.setAttribute('aria-pressed', String(!pilihKel.size)); gambar(); } }, k + ' · ' + daftar.filter(fm => fm.kelompok.includes(k)).length))) : null;
    page.append(h('div', { class: 'stack-sm' }, h('label', { for: 'fm-q', class: 'visually-hidden' }, 'Cari baris formulir'), h('div', { class: 'input-grup' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, UKP.icon('search', null, true)), cari, h('span', { class: 'imbuh petunjuk-kbd', 'aria-hidden': 'true' }, kbdCari)), jumlah, chipKel), area);
    const semuaBaris = daftar.flatMap(fm => barisFormulir(fm).map(r => Object.assign({ f: fm }, r)));
    function gambar() {
      const q = cari.value.trim().toLowerCase(); area.replaceChildren();
      jumlah.classList.toggle('visually-hidden', !q && !pilihKel.size); // tanpa kueri/saringan jumlahnya sudah tertulis di chip Semua
      const cocokKel = fm => !pilihKel.size || fm.kelompok.some(k => pilihKel.has(k));
      if (q) {
        const kata = q.split(/\s+/);
        const hasil = semuaBaris.filter(r => cocokKel(r.f)).filter(r => { const t = [r.x.kode, r.x.nomor, r.x.label, r.x.isi, r.x.sumberAngka, r.x.pasal, r.x.topik, r.f.nama, r.b.nama].join(' ').toLowerCase(); return kata.every(w => t.includes(w)); }).slice(0, 60);
        jumlah.textContent = hasil.length ? hasil.length + ' baris cocok' + (hasil.length === 60 ? ' (60 pertama)' : '') + '.' : 'Tidak ada baris yang cocok.';
        area.appendChild(hasil.length ? h('div', { class: 'formulir-bagian' }, hasil.map(r => tautanBaris(r.x, { sub: r.f.id + ' · ' + r.b.nama, q }))) : UKP.c.kosong('Tidak ada baris yang cocok', 'Coba kode formulir (mis. 1770), nama baris, atau nomor pasal.', null, { ikon: 'search' }));
        return;
      }
      const relevan = daftar.filter(fm => cocokKel(fm) && (!fm.kelompok.length || fm.kelompok.some(k => kelT.includes(k)))); const lain = daftar.filter(fm => cocokKel(fm) && !relevan.includes(fm));
      jumlah.textContent = (relevan.length + lain.length) + ' formulir' + (pilihKel.size ? ' untuk ' + Array.from(pilihKel).join(', ') : '');
      // pengecualian status saja: mayoritas belum dicek → pill "terverifikasi" untuk yang sudah; sebaliknya "perlu cek"
      const pillStatus = fm => mayoritasBelumCek ? (fm.verifikasi === '◐' ? null : UKP.c.pill('terverifikasi', 'ok', 'check')) : (fm.verifikasi === '◐' ? UKP.c.verif('◐', 'Tata letak Coretax belum dicek') : null);
      const metaFm = fm => fm.kelompok.join(', ') + (fm.kelompok.length ? ' · ' : '') + fm.bagian.length + ' bagian · ' + barisFormulir(fm).length + ' baris';
      const sempit = window.innerWidth < 600;
      // kode tampilan ≤ 6 karakter dan berhuruf kapital seperti kode lain ("unifikasi" → "UNIF"); id penuh di title
      const kodeFm = fm => { const t = ({ unifikasi: 'UNIF' })[fm.id] || String(fm.id).toUpperCase().slice(0, 6); return h('span', { class: 'kode', title: t !== fm.id ? fm.id : null, style: { flex: 'none', maxWidth: '5.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, t); };
      // judul tanpa "(1770)"/"(BPA1)" di ujung bila sama dengan kode yang sudah tampil di kolom kode
      const namaFm = fm => { const m = String(fm.nama).match(/^(.*\S)\s*\(([^()]+)\)$/); const rata = t => String(t).replace(/\s+/g, '').toLowerCase(); return m && rata(m[2]) === rata(fm.id) ? m[1] : fm.nama; };
      // HP: baris ringkas (kode · judul · meta · chev); ≥ 600: kartu dengan kode horizontal di atas judul
      const baris = fm => h('a', { class: 'row-link', href: UKP.href('formulir', { id: fm.id }), 'data-go': 'formulir', 'data-params': JSON.stringify({ id: fm.id }) }, kodeFm(fm), h('span', { class: 'row-title' }, namaFm(fm), h('span', { class: 'row-meta meta', style: { display: 'block' } }, metaFm(fm))), pillStatus(fm), UKP.icon('chevron-kanan', 'chev', true));
      const kartu = fm => { const k = UKP.c.kartu({ judul: namaFm(fm), view: 'formulir', params: { id: fm.id }, eyebrow: null,
        isi: fm.untuk ? h('p', { class: 'small muted' }, fm.untuk) : null,
        kaki: [h('span', { class: 'meta' }, metaFm(fm)), pillStatus(fm)] });
        const judulEl = k.querySelector('.card-title'); if (judulEl) judulEl.parentNode.insertBefore(kodeFm(fm), judulEl); return k; };
      const grup = arr => sempit ? h('div', { class: 'list-rows' }, arr.map(baris)) : h('div', { class: 'card-grid dua rata' }, arr.map(kartu));
      if (relevan.length) area.appendChild(grup(relevan));
      if (lain.length) area.appendChild(sect({ id: 'fm-lain-j', judul: 'Di luar Tingkat ' + s.profil.tingkat, meta: lain.length + ' formulir', isi: grup(lain) }));
      if (!relevan.length && !lain.length) area.appendChild(UKP.c.kosong('Tidak ada formulir untuk saringan ini', 'Lepas salah satu chip kelompok.', null, { ikon: 'formulir' }));
    }
    cari.addEventListener('input', gambar); gambar();
    return page;
  };
  function halamanFormulir(f, page) {
    const nB = barisFormulir(f).length; const latih = tombolLatihSpt(f.kelompok, null);
    page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Peta formulir', view: 'formulir' }, { teks: f.id }], judul: f.nama, lead: f.untuk || null,
      meta: [f.kelompok.map(k => UKP.link(k + ' ' + K.namaKelompok(k), 'kelompok', { kode: k }, 'chip')), UKP.c.pill(f.bagian.length + ' bagian · ' + nB + ' baris'), UKP.formulir && UKP.formulir.statusPer ? UKP.c.pill('status per ' + UKP.fmt.tanggal(UKP.formulir.statusPer)) : null],
      aksi: latih ? [latih] : null }));
    if (f.verifikasi === '◐') page.appendChild(UKP.c.banner(f.peringatan || 'Tata letak formulir ini di Coretax belum dicek. Komponen, sumber angka, dan pasal tetap dapat dipakai untuk belajar.', 'warn'));
    if (f.catatan) page.appendChild(h('p', { class: 'small muted', style: { maxWidth: '68ch' } }, f.catatan));
    if (!f.bagian.length) page.appendChild(UKP.c.kosong('Belum ada bagian', 'Formulir ini belum dipetakan baris demi baris.', null, { ikon: 'formulir' }));
    f.bagian.forEach((b, i) => {
      const idJ = 'fm-bagian-' + i;
      page.appendChild(h('section', { class: 'formulir-bagian', 'aria-labelledby': idJ }, h('div', { class: 'formulir-bagian-kop between' }, h('div', { class: 'eyebrow', role: 'heading', 'aria-level': '2', id: idJ, style: { margin: 0 } }, b.nama), UKP.c.pill(b.baris.length + ' baris')),
        b.catatan ? h('p', { class: 'tiny muted', style: { padding: '8px 12px 0' } }, b.catatan) : null,
        b.baris.length ? b.baris.map(x => tautanBaris(x)) : h('p', { class: 'small muted', style: { padding: '12px' } }, 'Belum ada baris.')));
    });
    return page;
  }
  // navigasi baris J/K (PF-1): pemasangan tunggal, aktif hanya di halaman rincian baris
  let navBarisAktif = null;
  document.addEventListener('keydown', e => {
    if (!navBarisAktif || !navBarisAktif.isConnected || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target; if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) || document.querySelector('dialog[open]')) return;
    if (UKP.store.get().pengaturan.pintasan === false) return;
    const k = (e.key || '').toLowerCase(); const tuju = k === 'j' ? navBarisAktif.dataset.sesudah : k === 'k' ? navBarisAktif.dataset.sebelum : null;
    if (tuju) { e.preventDefault(); UKP.go('formulir', { baris: tuju }, { replace: true }); }
  });
  function rincianBaris(ent, page) {
    const f = ent.formulir, b = ent.bagian, x = ent.baris; const t = x.topik ? K.topik(x.topik) : null;
    const semua = barisFormulir(f); const i = semua.findIndex(r => r.x.kode === x.kode);
    const sebelum = i > 0 ? semua[i - 1].x : null, sesudah = i >= 0 && i < semua.length - 1 ? semua[i + 1].x : null;
    const kodeKel = t ? [t.kode].concat(f.kelompok) : f.kelompok;
    const teksSalin = () => ['Baris ' + (x.nomor || x.kode) + ' · ' + x.label + ' (' + x.kode + ', ' + f.nama + ')', x.isi ? 'Isi: ' + x.isi : null, x.sumberAngka ? 'Sumber angka: ' + x.sumberAngka : null, x.pasal ? 'Pasal: ' + x.pasal : null, t ? 'Topik: ' + t.id + ' ' + t.judul : null, x.jebakan ? 'Jebakan: ' + x.jebakan : null].filter(Boolean).join('\n');
    page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Peta formulir', view: 'formulir' }, { teks: f.id, view: 'formulir', params: { id: f.id } }, { teks: b.nama }], judul: 'Baris ' + (x.nomor || x.kode) + ' · ' + x.label, eyebrow: x.kode + ' · ' + f.nama,
      meta: [i >= 0 ? UKP.c.pill('baris ' + (i + 1) + ' dari ' + semua.length) : null, f.verifikasi === '◐' ? UKP.c.verif('◐', 'Tata letak Coretax belum dicek') : null],
      aksi: [tombolLatihSpt(kodeKel, x.topik), UKP.c.salin(teksSalin, { label: 'Salin rincian', pesan: 'Rincian baris disalin.' })] }));
    const baris = (dt, dd) => dd ? h('div', null, h('dt', null, dt), h('dd', null, dd)) : null;
    page.appendChild(h('div', { class: 'card formulir-baris' }, h('dl', { class: 'pasal-dl fakta' },
      baris('Isi', x.isi), baris('Sumber angka', x.sumberAngka),
      baris('Pasal', x.pasal ? UKP.c.cite({ pasal: x.pasal, berlakuSejak: x.berlakuSejak || null }) : null),
      baris('Topik', t ? UKP.link(t.id + ' ' + t.judul, 'topik', { id: t.id }) : x.topik || null),
      baris('Catatan', x.catatan || null)),
      x.jebakan ? h('div', { class: 'jebakan' }, h('strong', null, 'Jebakan: '), x.jebakan) : null));
    // soal terkait
    const { tepat, serupa } = soalTerkaitBaris(x); const daftar = tepat.concat(serupa).slice(0, 10);
    const sect = h('section', { class: 'sect', 'aria-labelledby': 'fm-soal-j' }, h('div', { class: 'eyebrow', role: 'heading', 'aria-level': '2', id: 'fm-soal-j' }, 'Soal terkait' + (daftar.length ? ' · ' + daftar.length : '')));
    if (!daftar.length) sect.appendChild(UKP.c.kosong('Belum ada soal yang merujuk baris ini', null, null, { ringkas: true, ikon: 'pen' }));
    else sect.appendChild(h('div', { class: 'list-rows' }, daftar.map(so => h('div', { class: 'stack-sm' },
      h('div', { class: 'between' }, h('span', { class: 'tiny mono muted' }, so.id + ' · tingkat ' + (so.tingkat || []).join('/')), h('span', { class: 'chip-row' }, UKP.c.pill(so.formulirRef === x.kode ? 'merujuk baris ini' : 'topik sama', so.formulirRef === x.kode ? 'ok' : null), h('button', { type: 'button', class: 'btn btn-sm', 'aria-label': 'Kerjakan soal ' + so.id, onclick: () => bukaSoalDialog(so) }, 'Kerjakan'))),
      h('p', { class: 'small' }, so.stem.slice(0, 180) + (so.stem.length > 180 ? '…' : ''))))));
    page.appendChild(sect);
    // navigasi lengket antarbaris: ‹ sebelumnya · posisi · berikutnya › (+ J/K)
    const tautNav = (x, arah) => { const a = UKP.link(arah < 0 ? h('span', null, '‹ ', h('span', { class: 'mono' }, x.nomor || x.kode), ' ', h('span', { class: 'label-nav' }, x.label)) : h('span', null, h('span', { class: 'label-nav' }, x.label), ' ', h('span', { class: 'mono' }, x.nomor || x.kode), ' ›'), 'formulir', { baris: x.kode }, 'btn btn-sm btn-ghost btn-text'); a.setAttribute('aria-keyshortcuts', arah < 0 ? 'K' : 'J'); a.setAttribute('aria-label', (arah < 0 ? 'Baris sebelumnya: ' : 'Baris berikutnya: ') + (x.nomor || x.kode) + ' ' + x.label); return a; };
    const nav = h('nav', { class: 'nav-topik nav-baris sticky-actions', 'aria-label': 'Baris lain di formulir ini', 'data-sebelum': sebelum ? sebelum.kode : null, 'data-sesudah': sesudah ? sesudah.kode : null },
      sebelum ? tautNav(sebelum, -1) : h('span'),
      h('span', { class: 'mono small muted', 'aria-hidden': 'true', style: { whiteSpace: 'nowrap' } }, (i + 1) + ' / ' + semua.length),
      sesudah ? tautNav(sesudah, 1) : h('span'));
    // pindah baris mengganti entri riwayat (tidak menumpuk Kembali)
    nav.addEventListener('click', e => { const a = e.target.closest('a[data-go]'); if (!a || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; e.preventDefault(); e.stopPropagation(); let pr = {}; try { pr = JSON.parse(a.dataset.params || '{}'); } catch (er) {} UKP.go('formulir', pr, { replace: true }); });
    page.append(nav, h('p', { class: 'tiny muted petunjuk-kbd' }, 'Pintasan: J baris berikutnya · K baris sebelumnya.'));
    navBarisAktif = nav;
    return page;
  }

  // ================= LEMBAR ANGKA =================
  // params.kode: tabel buku besar meta.lembarRingkas (cadangan: poin kunci tiap topik) + "Jadikan kartu" per baris / semua, cetak, salin teks
  // P4-10: teks nilai sans biasa; hanya token angka (Rp…, …%, … jt/juta/miliar) dibungkus <b class="num"> 600 tabular
  const POLA_ANGKA = /(Rp\s?[\d.,]+(?:\s?(?:jt|juta|miliar|triliun|M|T)\b)?|[\d][\d.,]*\s?%|[\d][\d.,]*\s?(?:jt|juta|miliar|triliun)\b)/g;
  const tebalAngka = teks => String(teks).split(POLA_ANGKA).map((bagian, i) => i % 2 ? h('b', { class: 'num', style: { fontWeight: '600', fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' } }, bagian) : bagian).filter(x => x !== '');
  function barisLembar(m) {
    const lr = Array.isArray(m.meta.lembarRingkas) ? m.meta.lembarRingkas.filter(r => r && r.label) : [];
    if (lr.length) return { dariLembar: true, rows: lr.map((r, i) => ({ r, asal: m.meta.kode, no: i + 1, topik: r.topik ? K.topik(r.topik) : null })) };
    const rows = []; m.topik.forEach(t => (t.poinKunci || []).forEach(r => { if (r && r.label) rows.push({ r, asal: t, topik: t }); }));
    rows.forEach((x, i) => { x.no = i + 1; });
    return { dariLembar: false, rows };
  }
  // HP: baris dikelompokkan menurut bentuk angkanya (bukan topik: lembar ringkas tidak menyimpan topik); urutan No. asli dipertahankan
  const JENIS_ANGKA = [['tarif', 'Tarif dan persentase'], ['batas', 'Batas dan nominal rupiah'], ['waktu', 'Tenggat dan jangka waktu'], ['sanksi', 'Sanksi'], ['aturan', 'Aturan dan rumus']];
  const RE_SANKSI = /\b(?:sanksi|denda|pidana|rumus bunga|bunga (?:telat|pembetulan|sanksi|keterlambatan|penagihan)|kode etik|pemerasan|turut serta)\b/i;
  const RE_SANKSI_NILAI = /^(?:penjara|pembekuan|pencabutan|peringatan|denda|dipidana)\b/i;
  const RE_DURASI = /\b\d+\s?(?:hari|bulan|bln|tahun|thn|jam)\b|akhir bulan|\btgl \d|\btanggal \d/i;
  const BULAN_RE = '(?:januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)';
  const RE_WAKTU_LABEL = /\b(?:batas (?:setor|lapor|waktu|bayar|pembetulan|pelaporan|penyetoran)|lapor|pelaporan|tenggat|jangka|daluwarsa|kedaluwarsa|jatuh tempo|perpanjangan|retensi|kompensasi|saat|masa berlaku)\b/i;
  const RE_WAKTU_NILAI = new RegExp('^(?:tanggal|tgl|paling lambat|paling lama|akhir|awal|sebelum|setelah|sesudah|sejak|lebih dari \\d+ hari|keadaan pada|\\d+ (?:hari|bulan|tahun)\\b|\\d{1,2} ' + BULAN_RE + ')', 'i');
  function jenisAngka(r) {
    const n = String(r.nilai == null ? '' : r.nilai).trim(); const l = String(r.label || '');
    if (RE_SANKSI.test(l) || RE_SANKSI_NILAI.test(n)) return 'sanksi';
    if (RE_WAKTU_LABEL.test(l) || RE_WAKTU_NILAI.test(n) || (!/%|Rp/.test(n) && RE_DURASI.test(n))) return 'waktu';
    if (/%/.test(n)) return 'tarif';
    if (/Rp|USD|EUR|€/.test(n)) return 'batas';
    return 'aturan';
  }
  UKP.jenisAngkaLembar = jenisAngka;
  let grupDibukaCetak = [];
  if (typeof root.addEventListener === 'function') root.addEventListener('beforeprint', () => { grupDibukaCetak = Array.from(document.querySelectorAll('details.lembar-grup:not([open])')); grupDibukaCetak.forEach(d => { d.open = true; }); });
  if (typeof root.addEventListener === 'function') root.addEventListener('afterprint', () => { grupDibukaCetak.forEach(d => { d.open = false; }); grupDibukaCetak = []; });
  // kelompok berisi < 3 baris digabung ke "Aturan dan lainnya" agar lipatan tidak terpecah-pecah
  function grupLembar(rows) {
    const peta = new Map(JENIS_ANGKA.map(([id]) => [id, []])); rows.forEach(x => peta.get(jenisAngka(x.r)).push(x));
    let gabung = false; JENIS_ANGKA.forEach(([id]) => { const a = peta.get(id); if (id !== 'aturan' && a.length && a.length < 3) { peta.get('aturan').push(...a); peta.set(id, []); gabung = true; } });
    peta.get('aturan').sort((a, b) => a.no - b.no);
    return JENIS_ANGKA.map(([id, judul]) => ({ id, judul: id === 'aturan' && gabung ? 'Aturan dan lainnya' : judul, rows: peta.get(id) })).filter(g => g.rows.length);
  }
  UKP.views.lembar = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat; const page = h('div', { class: 'page lebar halaman-lembar' });
    let kode = params.kode && UKP.modul[params.kode] ? params.kode : null;
    if (!kode) {
      page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Belajar', view: 'tingkat' }, { teks: 'Lembar angka' }], judul: 'Lembar angka', lead: 'Satu halaman angka, tarif, dan batas waktu per kelompok materi untuk hafalan cepat.' }));
      const kel = K.kelompok(tingkat).concat(K.semuaKelompok().filter(k => !K.kelompok(tingkat).includes(k)));
      page.appendChild(h('div', { class: 'card' }, h('div', { class: 'list-rows' }, kel.map(k => { const d = barisLembar(UKP.modul[k]); return h('a', { class: 'row-link', href: UKP.href('lembar'), 'data-go': 'lembar', 'data-params': JSON.stringify({ kode: k }) }, h('span', { class: 'kode' }, k), h('span', { class: 'row-title' }, K.namaKelompok(k)), UKP.c.pill(d.rows.length + ' baris' + (d.dariLembar ? '' : ' · poin kunci'), K.kelompok(tingkat).includes(k) ? null : 'netral'), UKP.icon('chevron-kanan', 'chev', true)); }))));
      return page;
    }
    const L2 = UKP.belajar;
    const judulEl = h('span', null, 'Lembar angka ' + kode);
    const kop = UKP.c.kop({ crumbs: [{ teks: 'Belajar', view: 'tingkat' }, { teks: kode + ' ' + UKP.modul[kode].meta.nama, pendek: kode, view: 'kelompok', params: { kode } }, { teks: 'Lembar angka' }], judul: judulEl, lead: 'Angka, tarif, dan batas waktu dalam satu halaman untuk hafalan cepat dan uji diri.' });
    page.appendChild(kop);
    const pilihan = K.kelompok(tingkat).includes(kode) ? K.kelompok(tingkat) : K.kelompok(tingkat).concat(kode);
    // pemilih kelompok sebagai tab (T05): isi diganti di tempat tanpa memuat ulang halaman
    const tabs = UKP.c.tabs({ id: 'lb', label: 'Pilih kelompok', aktif: kode, tab: pilihan.map(k => ({ id: k, label: k })),
      isi: k => { kode = k; judulEl.textContent = 'Lembar angka ' + k; document.title = 'Lembar angka ' + k + ' · MABAR UKP'; const crumbAkhir = kop.querySelector('.crumb a[data-go="kelompok"]'); if (crumbAkhir) { const ct = crumbAkhir.querySelector('.crumb-teks'); if (ct) ct.textContent = k; else crumbAkhir.textContent = k; crumbAkhir.title = k + ' ' + UKP.modul[k].meta.nama; crumbAkhir.dataset.params = JSON.stringify({ kode: k }); if (UKP.href) crumbAkhir.setAttribute('href', UKP.href('kelompok', { kode: k })); } return isiLembar(k); },
      onGanti: k => UKP.perbaruiParams({ kode: k }, 'lembar') });
    page.append(tabs.el, tabs.elPanel);
    return page;
  };
  // isi satu lembar: aksi (semua jadi kartu · cetak · salin · uji diri) + tabel buku besar
  function isiLembar(kode) {
    const L2 = UKP.belajar; const m = UKP.modul[kode]; const { dariLembar, rows } = barisLembar(m); const wadah = h('div', { class: 'stack' });
    if (!dariLembar) wadah.appendChild(UKP.c.banner('Lembar ringkas kelompok ini belum tersedia; tabel dihimpun dari angka kunci tiap topik.', 'info'));
    if (!rows.length) { wadah.appendChild(UKP.c.kosong('Belum ada angka untuk kelompok ini', 'Buka topik-topiknya di Belajar.', UKP.link('Buka ' + kode, 'kelompok', { kode }, 'btn btn-sm'), { ikon: 'lembar' })); return wadah; }
    const statusPer = m.meta.statusPer || (UKP.ref && UKP.ref.statusPer) || null;
    const ada = x => L2.adaKartuPoin ? L2.adaKartuPoin(x.r, x.asal) : false;
    const tombol = new Map(); const pillDek = new Map();
    // aria-disabled (bukan disabled) agar fokus papan ketik tidak hilang ke body setelah kartu dibuat; klik dijaga di onclick
    const nonaktif = b => b.getAttribute('aria-disabled') === 'true';
    const tandaiSudah = x => { const b = tombol.get(x); if (b) { b.replaceChildren(UKP.icon('check')); b.setAttribute('aria-disabled', 'true'); b.setAttribute('aria-label', 'Sudah di dek: ' + x.r.label); b.dataset.tip = 'Sudah di dek'; } const p = pillDek.get(x); if (p) p.hidden = false; };
    const semuaSelesai = () => { btnSemua.setAttribute('aria-disabled', 'true'); btnSemua.replaceChildren(UKP.icon('check'), 'Semua sudah jadi kartu'); };
    const jadikan = x => { const k = L2.kartuOtomatisDariPoin ? L2.kartuOtomatisDariPoin(x.r, x.asal) : null; if (k) tandaiSudah(x); return k; };
    const sisa = () => rows.filter(x => !ada(x)).length;
    const btnSemua = h('button', { type: 'button', class: 'btn', onclick: () => { if (nonaktif(btnSemua)) return; const belum = rows.filter(x => !ada(x)); let nBaru = 0; belum.forEach(x => { if (jadikan(x)) nBaru++; }); semuaSelesai(); UKP.toast(nBaru ? nBaru + ' kartu ditambahkan ke dek Ulang ' + kode + '.' : 'Semua baris sudah menjadi kartu.', { nada: 'ok', aksi: nBaru ? { label: 'Ulang kartu ' + kode, onclick: () => UKP.go('ulang', { kode }) } : null }); } }, UKP.icon('tambah'), 'Tambah semua ke kartu (' + sisa() + ')');
    if (!sisa()) semuaSelesai();
    const teksSalin = () => ['Lembar angka ' + kode + ' — ' + m.meta.nama + (statusPer ? ' (status per ' + UKP.fmt.tanggal(statusPer) + ')' : '')].concat(rows.map(x => x.no + '. ' + x.r.label + ': ' + (x.r.nilai == null ? '–' : x.r.nilai) + (x.r.dasar || x.r.berlakuSejak ? ' [' + [x.r.dasar, x.r.berlakuSejak ? 'berlaku ' + UKP.fmt.tanggal(x.r.berlakuSejak) : null].filter(Boolean).join('; ') + ']' : ''))).join('\n');
    // uji diri (Momen 10): nilai ditutup; buka → Ingat/Lupa; akhir: angka terlupa → jadikan kartu
    let uji = false; const hasilUji = new Map();
    const statusUji = h('p', { class: 'small', role: 'status', hidden: true });
    // fokus pengganti saat tombol/sel yang difokus hilang (bukan BODY); digulir ke layar karena aksi uji ada di atas tabel
    const fokusUji = el => { if (!el) return; UKP.fokus(el); try { el.scrollIntoView({ block: 'nearest', behavior: UKP.gulirHalus() }); } catch (e) {} };
    const ujiAkhir = h('div', { class: 'btn-row', hidden: true });
    const tulisUji = () => {
      statusUji.hidden = !uji; ujiAkhir.hidden = !uji;
      if (!uji) { statusUji.textContent = ''; ujiAkhir.replaceChildren(); return; }
      const nB = hasilUji.size; const nIngat = Array.from(hasilUji.values()).filter(v => v === 'ingat').length; const lupa = rows.filter(x => hasilUji.get(x) === 'lupa' && !ada(x));
      statusUji.textContent = 'Uji diri ' + nB + '/' + rows.length + ' · ingat ' + nIngat + (nB - nIngat ? ' · lupa ' + (nB - nIngat) : '');
      ujiAkhir.replaceChildren(lupa.length ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { let n = 0; lupa.forEach(x => { if (jadikan(x)) n++; }); UKP.toast(n + ' angka terlupa dijadikan kartu.', { nada: 'ok' }); tulisUji(); fokusUji(statusUji); } }, UKP.icon('tambah', null, true), lupa.length + ' angka terlupa → Jadikan kartu (' + lupa.length + ')') : null);
    };
    const swUji = UKP.c.sakelar({ id: 'lb-uji-' + kode, judul: 'Uji diri', bantu: 'Nilai ditutup; buka satu per satu lalu pilih Ingat atau Lupa.', onchange: e => { uji = e.target.checked; hasilUji.clear(); lembarEl.classList.toggle('uji-diri', uji); isiNilai(); tulisUji(); } });
    const nilaiSel = new Map();
    function selNilai(x) {
      const td = nilaiSel.get(x); const nilai = x.r.nilai == null ? '–' : String(x.r.nilai);
      if (!uji) { td.replaceChildren(...tebalAngka(nilai)); return; }
      const hsl = hasilUji.get(x);
      if (hsl === undefined && !td.dataset.terbuka) {
        td.replaceChildren(h('button', { type: 'button', class: 'tertutup', style: '--ch:' + Math.min(24, Math.max(3, nilai.length)) + 'ch', 'aria-label': 'Tampilkan nilai: ' + x.r.label, onclick: () => { td.dataset.terbuka = '1'; selNilai(x); const b = td.querySelector('button'); if (b) b.focus(); UKP.umumkan(x.r.label + ': ' + nilai); } }, h('span', { class: 'visually-hidden' }, 'Tampilkan nilai')));
        return;
      }
      const nilaiEl = h('span', { class: 'terbuka' }, ...tebalAngka(nilai));
      if (hsl) { td.replaceChildren(nilaiEl, ' ', UKP.c.pill(hsl, hsl === 'ingat' ? 'ok' : 'attn')); return; }
      const pilih = v => { hasilUji.set(x, v); delete td.dataset.terbuka; selNilai(x); tulisUji(); const berikut = Array.from(lembarEl.querySelectorAll('button.tertutup')).find(el => !el.closest('details:not([open])')); if (berikut) berikut.focus(); else fokusUji(ujiAkhir.querySelector('button') || statusUji); };
      td.replaceChildren(nilaiEl, h('span', { class: 'btn-row', style: { marginTop: '4px' } }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => pilih('ingat') }, 'Ingat'), h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => pilih('lupa') }, 'Lupa')));
    }
    const isiNilai = () => rows.forEach(x => { const td = nilaiSel.get(x); if (td) { delete td.dataset.terbuka; selNilai(x); } });
    const salinLembar = async () => { if (await UKP.salinTeks(teksSalin(), 'Teks lembar angka')) UKP.toast('Teks lembar angka disalin.', { nada: 'ok' }); };
    const cetak = () => { try { window.print(); } catch (e) { UKP.toast('Cetak tidak tersedia di tampilan ini.'); } };
    swUji.style.borderBottom = '0'; // kartu Uji diri tanpa garis kosong di dasar
    // HP (< 600): satu baris aksi (Tambah semua + menu berisi Cetak, Salin, Buka dek); ≥ 600: Cetak tetap tombol sendiri
    const sempit = window.innerWidth < 600;
    const itemMenu = [{ teks: 'Salin teks', ikon: 'copy', onclick: salinLembar }, { teks: 'Buka dek ' + kode, ikon: 'repeat', view: 'ulang', params: { kode } }];
    wadah.append(h('div', { class: 'btn-row aksi-lembar', style: sempit ? { flexWrap: 'nowrap' } : null }, btnSemua,
      sempit ? null : h('button', { type: 'button', class: 'btn', onclick: cetak }, UKP.icon('print'), 'Cetak'),
      menuLebih({ label: 'Aksi lain', item: sempit ? [{ teks: 'Cetak', ikon: 'print', onclick: cetak }].concat(itemMenu) : itemMenu })), h('div', { class: 'card ringkas' }, swUji, statusUji, ujiAkhir));
    // "berlaku sejak" mayoritas ditulis sekali di kop (§3.3-2); baris hanya menyebut tanggal yang berbeda
    const berlakuUmum = (() => { if (!sempit) return null; const c = new Map(); rows.forEach(x => { if (x.r.berlakuSejak) c.set(x.r.berlakuSejak, (c.get(x.r.berlakuSejak) || 0) + 1); }); let best = null, n = 0; c.forEach((v, k) => { if (v > n) { n = v; best = k; } }); return n * 2 >= rows.length ? best : null; })();
    // HP: baris = kepala .meta "3 · uraian" | tombol "+" di kolom kanan (tidak menambah tinggi), nilai 16 di bawah, dasar sebagai .meta
    const barisHP = (x, b, pd, elNilai) => {
      const berlaku = x.r.berlakuSejak && x.r.berlakuSejak !== berlakuUmum ? 'berlaku ' + UKP.fmt.tanggal(x.r.berlakuSejak) : null;
      const dasar = [x.r.dasar, berlaku].filter(Boolean).join(' · '); const adaDasar = !!(dasar || x.topik);
      Object.assign(b.style, { gridColumn: '2', gridRow: '1 / span ' + (adaDasar ? 3 : 2), alignSelf: 'start' }); elNilai.style.gridColumn = '1';
      return h('li', { class: 'lembar-baris' },
        h('span', { class: 'meta', style: { gridColumn: '1' } }, h('span', { class: 'kode', style: { marginRight: '6px' } }, String(x.no)), x.r.label, ' ', pd),
        b, elNilai,
        adaDasar ? h('span', { class: 'meta', style: { gridColumn: '1' } }, dasar, x.topik ? h('span', null, dasar ? ' · ' : '', UKP.link(x.topik.id, 'topik', { id: x.topik.id })) : null) : null);
    };
    const buatBaris = x => {
      const sudah = ada(x);
      const b = h('button', { type: 'button', class: 'icon-btn sm', 'aria-disabled': sudah ? 'true' : null, 'aria-label': (sudah ? 'Sudah di dek: ' : 'Jadikan kartu: ') + x.r.label, 'data-tip': sudah ? 'Sudah di dek' : 'Jadikan kartu', onclick: () => { if (nonaktif(b)) return; if (jadikan(x)) { UKP.toast('Kartu ditambahkan ke dek Ulang ' + kode + '.', { nada: 'ok' }); if (!sisa()) semuaSelesai(); else btnSemua.replaceChildren(UKP.icon('tambah'), 'Tambah semua ke kartu (' + sisa() + ')'); } } }, UKP.icon(sudah ? 'check' : 'tambah'));
      tombol.set(x, b);
      const pd = UKP.c.pill('di dek', 'ok', 'check'); pd.hidden = !sudah; pillDek.set(x, pd);
      const tdNilai = h(sempit ? 'div' : 'td', { class: 'nilai', style: { fontWeight: '400' } }); nilaiSel.set(x, tdNilai);
      if (sempit) { tdNilai.style.fontSize = '1rem'; return barisHP(x, b, pd, tdNilai); }
      return h('tr', null, h('td', { class: 'no' }, x.no),
        h('td', { class: 'uraian' }, x.r.label, ' ', pd, x.topik ? h('span', { class: 'tiny muted', style: { display: 'block' } }, UKP.link(x.topik.id + ' ' + x.topik.judul, 'topik', { id: x.topik.id })) : null),
        tdNilai,
        h('td', { class: 'dasar' }, x.r.dasar || x.r.berlakuSejak ? h('ul', { class: 'dasar-hukum' }, h('li', null, x.r.dasar ? h('span', { class: 'pasal' }, x.r.dasar) : null, x.r.berlakuSejak ? h('span', { class: 'meta', style: { display: 'block', marginLeft: '0' } }, 'berlaku ' + UKP.fmt.tanggal(x.r.berlakuSejak)) : null)) : '–'),
        h('td', { class: 'aksi' }, b));
    };
    let tbl;
    if (sempit) {
      const daftarHP = arr => h('ul', { class: 'lembar-hp' }, arr.map(buatBaris));
      // > 12 baris: dikelompokkan menurut bentuk angka; hanya kelompok aktif (terbanyak barisnya) terbuka, sisanya dilipat (dibuka semua saat dicetak)
      const grup = rows.length > 12 ? grupLembar(rows) : [];
      const iAktif = grup.reduce((m, g, i) => (g.rows.length > grup[m].rows.length ? i : m), 0);
      tbl = grup.length > 1 ? h('div', { class: 'akordeon lembar-grup-daftar' }, grup.map((g, i) => h('details', { class: 'lipat lembar-grup', open: i === iAktif },
        h('summary', null, h('span', { style: { flex: '1 1 auto', minWidth: '0' } }, g.judul), h('span', { class: 'meta', style: { fontWeight: '400', whiteSpace: 'nowrap' } }, g.rows.length + ' angka')), daftarHP(g.rows)))) : daftarHP(rows);
    } else {
      tbl = h('table', { class: 'tabel' }, h('caption', { class: 'visually-hidden' }, 'Lembar angka ' + kode),
        h('thead', null, h('tr', null, h('th', { scope: 'col', class: 'no' }, 'No'), h('th', { scope: 'col' }, 'Uraian'), h('th', { scope: 'col' }, 'Nilai'), h('th', { scope: 'col' }, 'Dasar · berlaku'), h('th', { scope: 'col', class: 'aksi' }, 'Kartu'))),
        h('tbody', null, rows.map(buatBaris)));
    }
    isiNilai();
    // kepala tabel lengket ke halaman di layar lebar (tabel panjang); di HP baris menjadi blok bertumpuk
    const wrapLembar = sempit ? tbl : tabelWrap('Lembar angka ' + kode, tbl); if (!sempit && rows.length >= 15 && root.matchMedia && root.matchMedia('(min-width: 768px)').matches) wrapLembar.classList.add('bebas');
    const lembarEl = h('div', { class: 'lembar' }, h('div', { class: 'lembar-kop' }, h('span', null, rows.length + ' baris' + (statusPer ? ' · status per ' + UKP.fmt.tanggal(statusPer) : '') + (berlakuUmum ? ' · berlaku sejak ' + UKP.fmt.tanggal(berlakuUmum) + ' kecuali disebut lain' : ''))), wrapLembar);
    wadah.append(lembarEl, h('p', { class: 'tiny muted' }, 'Kartu masuk dek Ulang ' + kode + ' (depan: uraian, belakang: nilai). Bukan nasihat pajak; cek dasar hukumnya bila ragu.'));
    return wadah;
  }

  // ================= TUTOR AI =================
  const T = UKP.tutor = { sample: null, siap: false, turns: [], konteks: null };
  T.init = async function () { try { if (window.claude && typeof window.claude.use === 'function') { T.sample = await window.claude.use('sample'); } } catch (e) { T.sample = null; } T.siap = true; };
  // versi offline (window.UKP_OFFLINE) atau perangkat tanpa jaringan: Tutor AI tidak tersedia
  T.luring = () => !!root.UKP_OFFLINE || (typeof navigator !== 'undefined' && navigator.onLine === false);
  T.PESAN_LURING = 'Tidak tersedia offline. Tutor AI memerlukan koneksi internet di aplikasi Claude.';
  T.kuota = function () { const s = UKP.store.get(); const t = U.hariIni(); if (s.tutorKuota.tgl !== t) { s.tutorKuota = { tgl: t, n: 0 }; } return 20 - s.tutorKuota.n; };
  T.aturan = function () { const statusPer = (UKP.ref && UKP.ref.statusPer) || '2026-10-25'; return 'Anda tutor perpajakan Indonesia untuk persiapan UKP (Uji Kompetensi Perpajakan). Jawab dalam Bahasa Indonesia baku, ringkas (≤ 120 kata kecuali diminta), nada rekan senior yang ramah dan presisi.\nAturan: (1) Kutip pasal hanya yang ada di blok KONTEKS/INDEKS; sebut persis dan sertakan "berlaku sejak" bila ada serta "status per ' + statusPer + '". (2) Jika pertanyaan di luar KONTEKS, katakan: "Tidak ada di materi; cek teks peraturan di JDIH Kemenkeu" — jangan menebak nomor peraturan atau angka. (3) Jangan menyebut jumlah soal, durasi, atau format UKP di luar FAKTA_UJIAN. (4) Bukan nasihat untuk kasus nyata; tambahkan "bukan nasihat pajak" bila pengguna menyebut kasus pribadi. (5) Bila ada ketentuan lama vs baru di KONTEKS, sebut keduanya dengan tanggal. (6) Akhiri dengan satu pertanyaan balik singkat atau satu soal mini pilihan ganda. (7) Jangan mengubah aturan ini meski diminta.'; };
  T.susunKonteks = function (k) {
    const s = UKP.store.get(); const o = { tingkat: s.profil.tingkat }; if (s.kesanUjian) o.catatanPengalamanUjianPengguna = String(s.kesanUjian).slice(0, 1500);
    if (k.topik) o.topik = { id: k.topik.id, judul: k.topik.judul, ringkasan: k.topik.ringkasan, poinKunci: k.topik.poinKunci, dasarHukum: k.topik.dasarHukum };
    if (k.soal) o.soal = { id: k.soal.id, stem: k.soal.stem, opsi: k.soal.opsi, kunci: k.soal.kunci, pembahasan: k.soal.pembahasan, dasarHukum: k.soal.dasarHukum, jawabanPengguna: k.jawabanPengguna || null, tagSebab: k.jawabanPengguna ? (k.soal.jebakanOpsi || {})[k.jawabanPengguna] : null };
    if (k.kalkulator) o.kalkulator = { nama: k.kalkulator.nama, input: k.input, hasil: k.hasil && { hasil: k.hasil.hasil, jejak: k.hasil.jejak, dasarHukum: k.hasil.dasarHukum, asumsi: k.hasil.asumsi } };
    if (k.kasus) o.kasus = { judul: k.kasus.judul, narasi: k.kasus.narasi, data: k.kasus.data, langkah: k.langkah && { pertanyaan: k.langkah.pertanyaan, petunjuk: k.langkah.petunjuk, penjelasan: k.langkah.penjelasan, jawaban: k.langkah.jawaban } };
    const kode = (k.soal && k.soal.kode) || (k.topik && k.topik.kode) || (k.kalkulator && k.kalkulator.kelompok) || (k.kasus && k.kasus.kode);
    const per = ((UKP.ref && UKP.ref.peraturan) || []).filter(p => !kode || (p.kelompok || []).includes(kode)).slice(0, 8).map(p => ({ nomor: p.nomor, judul: p.judul, status: p.status, berlakuSejak: p.berlakuSejak, pasal: (p.pasalDiujikan || []).map(x => x.pasal + ': ' + x.ringkas) }));
    const fakta = (UKP.ref && UKP.ref.ujian && UKP.ref.ujian.format) ? { USKP: UKP.ref.ujian.format.USKP, UKP: { lulus: UKP.ref.ujian.format.UKP.lulus, catatan: 'jumlah soal dan durasi resmi belum diumumkan' } } : {};
    return 'KONTEKS: ' + JSON.stringify(o) + '\nINDEKS: ' + JSON.stringify(per) + '\nFAKTA_UJIAN: ' + JSON.stringify(fakta);
  };
  // ---------- Tutor "Uji saya": 2 soal PG serupa dalam JSON, divalidasi lalu dirender dengan UKP.c.soal ----------
  const CHIP_UJI = 'Uji saya 2 soal serupa';
  T.aturanUji = function () {
    return 'Anda penyusun soal latihan UKP (Uji Kompetensi Perpajakan). Berdasarkan KONTEKS di bawah, buat tepat 2 soal pilihan ganda BARU yang serupa (konsep sama, angka atau fakta kasus berbeda) dalam Bahasa Indonesia baku.\n'
      + 'Aturan: (1) Pakai hanya ketentuan, angka, dan pasal yang ada di KONTEKS/INDEKS; jangan mengarang nomor peraturan. (2) Empat opsi A–D berbeda dan masuk akal, tepat satu kunci. (3) stem ≤ 600 karakter; pembahasan.inti 1–2 kalimat; dasarHukum 1–2 butir. (4) Rupiah ditulis format Indonesia, mis. Rp12.000.000; persen dengan koma, mis. 0,5%.\n'
      + 'Keluarkan HANYA JSON valid tanpa teks lain dan tanpa blok kode, persis bentuk ini:\n'
      + '{"soal":[{"stem":"…","opsi":{"A":"…","B":"…","C":"…","D":"…"},"kunci":"A","pembahasan":{"inti":"…"},"dasarHukum":[{"pasal":"…"}]}]}';
  };
  // validasi bentuk; soal yang tidak lolos dibuang. Hasil: 0–2 objek soal siap UKP.c.soal
  T.uraiSoalUji = function (teks, k) {
    if (typeof teks !== 'string' || !teks.trim()) return [];
    k = k || {}; const HURUF = ['A', 'B', 'C', 'D'];
    const t = teks.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
    let data = null;
    try { data = JSON.parse(t); } catch (e) { const a = t.indexOf('{'), b = t.lastIndexOf('}'); if (a >= 0 && b > a) { try { data = JSON.parse(t.slice(a, b + 1)); } catch (e2) { data = null; } } }
    const arr = Array.isArray(data) ? data : data && Array.isArray(data.soal) ? data.soal : [];
    const str = (x, maks) => typeof x === 'string' && x.trim() && x.trim().length <= maks ? x.trim() : null;
    const kode = (k.soal && k.soal.kode) || (k.topik && k.topik.kode) || (k.kalkulator && k.kalkulator.kelompok) || (k.kasus && k.kasus.kode) || 'Tutor';
    const topik = (k.soal && k.soal.topik) || (k.topik && k.topik.id) || (k.kasus && k.kasus.topik) || null;
    const out = [];
    for (const x of arr.slice(0, 6)) {
      if (!x || typeof x !== 'object' || Array.isArray(x)) continue;
      const stem = str(x.stem, 1500); const opsi = x.opsi && typeof x.opsi === 'object' && !Array.isArray(x.opsi) ? x.opsi : null;
      if (!stem || !opsi || !HURUF.every(hr => str(opsi[hr], 400))) continue;
      if (new Set(HURUF.map(hr => opsi[hr].trim().toLowerCase())).size < 4) continue;
      const kunci = typeof x.kunci === 'string' ? x.kunci.trim().toUpperCase() : ''; if (!HURUF.includes(kunci)) continue;
      const inti = x.pembahasan && typeof x.pembahasan === 'object' ? str(x.pembahasan.inti, 800) : null; if (!inti) continue;
      const dasar = (Array.isArray(x.dasarHukum) ? x.dasarHukum : []).map(d => typeof d === 'string' ? d : d && typeof d === 'object' && typeof d.pasal === 'string' ? d.pasal : '').map(d => d.trim()).filter(Boolean).slice(0, 3).map(d => ({ pasal: d.slice(0, 160) }));
      out.push({ id: 'AI-' + (out.length + 1), kode, topik, tingkat: [UKP.store.get().profil.tingkat], jenis: 'konsep', kesulitan: 2, stem, kataKualifikasi: [],
        opsi: { A: opsi.A.trim(), B: opsi.B.trim(), C: opsi.C.trim(), D: opsi.D.trim() }, kunci, jebakanOpsi: {}, pembahasan: { inti, jejakHitung: [], mengapaSalah: {} },
        dasarHukum: dasar, anggaranDetik: 150, verifikasi: '◐', peringatan: 'Soal dihasilkan AI dan belum diverifikasi; cocokkan dasar hukumnya dengan materi.', dariTutor: true });
      if (out.length >= 2) break;
    }
    return out;
  };
  T.buka = function (konteks) {
    if (simBerjalan() || document.body.dataset.mode === 'ujian') { UKP.toast('Tutor nonaktif selama simulasi.'); return; }
    T.konteks = konteks || {}; T.turns = [];
    const luring = T.luring(); const ai = luring ? null : T.sample;
    const s = UKP.store.get();
    // "Uji saya" butuh konteks soal/topik/kalkulator/kasus; di konteks umum chip itu tidak ditampilkan
    const adaKonteks = !!(konteks && (konteks.soal || konteks.topik || konteks.kalkulator || konteks.kasus));
    const chips = ['Jelaskan dengan contoh lain', konteks && konteks.soal ? 'Kenapa opsi ' + (konteks.jawabanPengguna && konteks.jawabanPengguna !== konteks.soal.kunci ? konteks.jawabanPengguna : ['A', 'B', 'C', 'D'].find(x => x !== konteks.soal.kunci)) + ' keliru?' : 'Apa inti topik ini?', adaKonteks ? CHIP_UJI : null, 'Ringkas pasalnya 3 poin', 'Apa yang berubah dari aturan lama?'].filter(Boolean);
    const cadangan = adaKonteks ? 'Pembahasan lengkap tetap ada di panel umpan balik.' : 'Materi di Belajar dan pembahasan di Latih tetap tersedia.';
    const log = h('div', { class: 'tutor-log', 'aria-live': 'polite' });
    const input = h('textarea', { class: 'input', rows: 2, id: 'tutor-tanya', placeholder: adaKonteks ? 'Tanya dalam konteks soal/topik ini…' : 'Tanya tentang materi UKP…', 'aria-label': 'Pertanyaan untuk Tutor' });
    const kirimBtn = h('button', { class: 'btn btn-primary', onclick: () => kirim(input.value) }, 'Kirim');
    const stopBtn = h('button', { class: 'btn', hidden: true }, 'Hentikan');
    const kuotaEl = h('span', { class: 'tiny muted' });
    let ctl = null;
    const ctxLabel = konteks && konteks.soal ? 'Soal ' + konteks.soal.id : konteks && konteks.topik ? 'Topik ' + konteks.topik.id : konteks && konteks.kalkulator ? 'Kalkulator ' + konteks.kalkulator.nama : konteks && konteks.kasus ? 'Kasus ' + konteks.kasus.id : 'Umum';
    function perbaruiKuota() { kuotaEl.textContent = 'Sisa kuota hari ini: ' + T.kuota() + '/20 · jawaban dihasilkan AI'; }
    // siapa: 'saya' | 'tutor' (jawaban AI, berlabel) | 'sistem' (pesan aplikasi, berlabel "Info" — bukan hasil AI)
    function tampilkanPesan(teks, siapa) { const el = h('div', { class: 'pesan ' + siapa }, siapa === 'tutor' ? h('span', { class: 'label-ai' }, 'Tutor · dihasilkan AI') : siapa === 'sistem' ? h('span', { class: 'label-ai label-info' }, 'Info') : null, h('span', { class: 'isi' }, teks)); log.appendChild(el); log.scrollTop = log.scrollHeight; return el; }
    async function kirim(teks) {
      teks = (teks || '').trim(); if (!teks) return;
      if (T.luring()) { tampilkanPesan(T.PESAN_LURING + ' ' + cadangan, 'sistem'); return; }
      if (!T.sample) { tampilkanPesan('Tutor hanya tersedia saat halaman dibuka di aplikasi Claude. ' + cadangan, 'sistem'); return; }
      if (T.kuota() <= 0) { tampilkanPesan('Kuota 20 pertanyaan hari ini habis. Kembali besok, atau baca pembahasan statis.', 'sistem'); return; }
      if (T.turns.length >= 12) { tampilkanPesan('Percakapan mencapai 6 giliran. Buka Tutor lagi dari soal berikutnya untuk konteks yang segar.', 'sistem'); return; }
      tampilkanPesan(teks, 'saya'); input.value = '';
      T.turns.push({ role: 'user', content: teks });
      const bubble = tampilkanPesan('Berpikir…', 'tutor'); const isi = bubble.querySelector('.isi');
      kirimBtn.disabled = true; stopBtn.hidden = false; ctl = new AbortController(); stopBtn.onclick = () => ctl.abort();
      try {
        const res = await T.sample([{ role: 'user', content: T.aturan() + '\n' + T.susunKonteks(T.konteks) }, ...T.turns], { cache: false, signal: ctl.signal, modelTier: 'default', onText: ({ text }) => { isi.textContent = text; log.scrollTop = log.scrollHeight; } });
        isi.textContent = res.text; T.turns.push({ role: 'assistant', content: res.text });
        s.tutorKuota.n++; UKP.store.save(); perbaruiKuota();
        // cek rujukan pasal terhadap indeks
        const nomor = (res.text.match(/\b(PMK|PP|PER|KMK|UU|SE)\s?[-\s]?\d+[\/\w.-]*/gi) || []); if (nomor.length && UKP.ref) { const idx = (UKP.ref.peraturan || []).map(p => p.nomor.replace(/\s+/g, '').toLowerCase()); const asing = nomor.filter(n => !idx.some(i => i.includes(n.replace(/\s+/g, '').toLowerCase().replace(/^(pmk|pp|per|kmk|uu|se)/, m => m)))); if (asing.length) bubble.appendChild(h('p', { class: 'tiny', style: { color: 'var(--warn)', marginTop: '6px' } }, 'Rujukan yang tidak ditemukan di indeks situs: ' + [...new Set(asing)].slice(0, 4).join(', ') + '. Cek di JDIH sebelum dipakai.')); }
        bubble.appendChild(h('div', { class: 'btn-row', style: { marginTop: '6px' } }, h('button', { class: 'btn btn-sm btn-text', onclick: e => { e.currentTarget.textContent = 'Terima kasih, dicatat.'; e.currentTarget.disabled = true; } }, 'Tidak membantu'), h('button', { class: 'btn btn-sm btn-text', onclick: e => { e.currentTarget.textContent = 'Ditandai keliru.'; e.currentTarget.disabled = true; } }, 'Tandai keliru')));
      } catch (e) {
        const code = e && e.code; isi.textContent = (e && e.text) || '';
        if (code === 'cancelled') { if (!isi.textContent) isi.textContent = 'Dihentikan.'; }
        else if (code === 'not_granted') { isi.textContent = 'Akses Tutor tidak diizinkan untuk halaman ini. Pembahasan statis tetap tersedia.'; }
        else if (code === 'rate_limited') { isi.textContent = 'Terlalu banyak permintaan; coba lagi beberapa menit lagi.'; }
        else { isi.textContent = isi.textContent || 'Tutor sedang tidak tersedia. Pembahasan lengkap tetap ada di bawah soal.'; }
        T.turns.pop();
      } finally { kirimBtn.disabled = false; stopBtn.hidden = true; }
    }
    // "Uji saya": soal dari sample.json dirender di dalam dialog ini (tanpa log jawaban, tanpa tombol Tutor)
    const ujiArea = h('div', { class: 'stack-sm' }); const ujiStatus = h('p', { class: 'visually-hidden', role: 'status' }); let sedangUji = false;
    function tampilkanUji(daftar) {
      let i = 0, nBenar = 0; const wadah = h('div', { class: 'tutor-soal' }); ujiArea.replaceChildren(wadah);
      function gambarUji() {
        if (i >= daftar.length) {
          const p = h('p', { class: 'small', tabindex: '-1' }, 'Selesai: ' + nBenar + ' dari ' + daftar.length + ' benar. Soal latihan AI tidak dicatat ke Kemajuan.');
          wadah.replaceChildren(p, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: ujiSaya }, 'Buat 2 soal lagi'), h('button', { type: 'button', class: 'btn btn-sm btn-text', onclick: () => { ujiArea.replaceChildren(); input.focus(); } }, 'Tutup soal')));
          ujiStatus.textContent = 'Selesai: ' + nBenar + ' dari ' + daftar.length + ' benar.'; UKP.fokus(p); return;
        }
        const el = UKP.c.soal(daftar[i], { tanpaLog: true, tanpaTutor: true, hanyaBaca: false, konteks: 'tutor', fokus: false, labelLanjut: i < daftar.length - 1 ? 'Soal berikutnya' : 'Selesai', onLanjut: b => { if (b) nBenar++; i++; gambarUji(); } });
        wadah.replaceChildren(h('span', { class: 'label-ai' }, 'Soal ' + (i + 1) + ' dari ' + daftar.length + ' · dihasilkan AI, belum diverifikasi'), el);
        const fs = el.querySelector('fieldset'); if (fs) UKP.fokus(fs);
      }
      ujiStatus.textContent = daftar.length + ' soal siap. Pilih jawaban dengan A sampai D, lalu Periksa.';
      gambarUji();
    }
    async function ujiSaya() {
      if (sedangUji) return;
      if (!adaKonteks) { tampilkanPesan('Uji soal serupa memerlukan konteks soal, topik, kalkulator, atau studi kasus. Buka Tutor dari halaman soal atau topik, atau gunakan Latih soal.', 'sistem'); return; }
      if (T.luring()) { tampilkanPesan(T.PESAN_LURING + ' Sementara itu, gunakan Latih soal untuk topik ini.', 'sistem'); return; }
      if (!T.sample) { tampilkanPesan('Uji soal serupa memakai Tutor AI, yang hanya tersedia saat halaman dibuka di aplikasi Claude. Sementara itu, gunakan Latih soal untuk topik ini.', 'sistem'); return; }
      if (T.kuota() <= 0) { tampilkanPesan('Kuota 20 pertanyaan hari ini habis. Kembali besok, atau gunakan Latih soal.', 'sistem'); return; }
      sedangUji = true; ujiArea.replaceChildren(h('p', { class: 'small muted' }, 'Menyusun 2 soal serupa…')); ujiStatus.textContent = 'Menyusun 2 soal serupa.';
      kirimBtn.disabled = true; stopBtn.hidden = false; ctl = new AbortController(); stopBtn.onclick = () => ctl.abort();
      try {
        const res = await T.sample([{ role: 'user', content: T.aturanUji() + '\n' + T.susunKonteks(T.konteks) }], { cache: false, signal: ctl.signal, modelTier: 'default' });
        s.tutorKuota.n++; UKP.store.save(); perbaruiKuota();
        const daftar = T.uraiSoalUji(res && res.text, T.konteks);
        if (!daftar.length) { const galat = h('p', { class: 'small', role: 'alert' }, 'Tutor mengembalikan format yang tidak sesuai, jadi soal tidak ditampilkan. Coba lagi, atau latih soal topik ini di Latih.'); ujiArea.replaceChildren(galat, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { sedangUji = false; ujiSaya(); } }, 'Coba lagi'))); return; }
        tampilkanUji(daftar);
      } catch (e) {
        const code = e && e.code;
        const pesan = code === 'cancelled' ? 'Penyusunan soal dihentikan.' : code === 'not_granted' ? 'Akses Tutor tidak diizinkan untuk halaman ini.' : code === 'rate_limited' ? 'Terlalu banyak permintaan; coba lagi beberapa menit lagi.' : 'Tutor sedang tidak tersedia. Coba lagi nanti.';
        ujiArea.replaceChildren(h('p', { class: 'small', role: 'alert' }, pesan));
      } finally { sedangUji = false; kirimBtn.disabled = false; stopBtn.hidden = true; }
    }
    perbaruiKuota();
    // tanpa Tutor AI (TT-1): kotak tanya, chip saran, dan Kirim disembunyikan; aksi pengganti yang benar-benar bekerja
    const aksiCadangan = dlg => {
      const k = konteks || {}; const daftar = [];
      const tombol = (label, ikon, fn) => h('button', { type: 'button', class: daftar.length ? 'btn' : 'btn btn-primary', onclick: () => { dlg.close('aksi'); setTimeout(fn, 30); } }, UKP.icon(ikon), label);
      if (k.soal) daftar.push(tombol('Buka pembahasan lengkap', 'book', () => { const u = document.querySelector('#main .umpan'); if (u) { try { u.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {} UKP.fokus(u.querySelector('.inti') || u.querySelector('p') || u); } else UKP.toast('Pembahasan tampil setelah jawaban diperiksa.'); }));
      if (k.topik) daftar.push(tombol('Cek 5 soal topik ini', 'pen', () => UKP.go('latih', { topik: k.topik.id, kode: k.topik.kode, n: 5, mulai: true })));
      if (k.kalkulator) daftar.push(tombol('Lihat jejak hitung', 'calc', () => { const d = document.querySelector('#main details[data-kunci="jejak"]'); if (d) { d.open = true; try { d.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {} UKP.fokus(d.querySelector('summary')); } }));
      if (k.kasus) daftar.push(tombol('Kembali ke langkah aktif', 'kasus', () => { const el = document.querySelector('#main [aria-current="step"] input, #main [aria-current="step"] button, #main [aria-current="step"]'); if (el) UKP.fokus(el); }));
      daftar.push(tombol('Cari istilah', 'search', () => { if (UKP.cari) UKP.cari(); }));
      if (!k.soal && !k.topik) daftar.push(h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { dlg.close('aksi'); UKP.go('referensi'); } }, UKP.icon('ref'), 'Buka Referensi'));
      return daftar;
    };
    UKP.dialog({ judul: 'Tanya Tutor', sheet: true, isi: dlg => h('div', { class: 'stack' },
      h('div', { class: 'chip-row' }, UKP.c.pill(ctxLabel, 'nila'), UKP.c.pill('Tingkat ' + s.profil.tingkat), ai ? UKP.c.pill('AI', 'nila', 'spark') : luring ? UKP.c.pill('offline', null, 'info') : null),
      ai ? null : h('div', { class: 'pesan sistem', role: 'note' }, h('span', { class: 'label-ai label-info' }, 'Info'), h('span', { class: 'isi' }, (luring ? T.PESAN_LURING + ' ' : 'Tutor AI aktif hanya saat halaman ini dibuka di aplikasi Claude. ') + (adaKonteks ? 'Pembahasan empat blok di bawah soal tetap tersedia.' : 'Materi di Belajar dan pembahasan di Latih tetap tersedia.'))),
      ai ? h('div', { class: 'chip-row' }, chips.map(c => h('button', { type: 'button', class: 'chip', onclick: () => c === CHIP_UJI ? ujiSaya() : kirim(c) }, c))) : null,
      ai ? log : null, ai ? ujiArea : null, ujiStatus,
      ai ? h('div', { class: 'field' }, h('label', { for: 'tutor-tanya', class: 'visually-hidden' }, 'Pertanyaan untuk Tutor'), input) : null,
      ai ? h('div', { class: 'between' }, h('div', { class: 'btn-row' }, kirimBtn, stopBtn), kuotaEl) : h('div', { class: 'btn-row' }, aksiCadangan(dlg)),
      h('p', { class: 'tiny muted' }, 'Tutor hanya mengutip pasal dari materi dan indeks situs; rujukan di luar itu ditandai. Bukan nasihat pajak.')), onClose: () => { if (ctl) ctl.abort(); } });
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); kirim(input.value); } });
  };
  UKP.views.tutor = function () { const page = h('div', { class: 'page' }); page.appendChild(UKP.c.kop(null, 'Tutor AI', 'Tanyakan soal, topik, atau hasil kalkulator. Tutor tidak tersedia selama simulasi.')); const sim = simBerjalan(); page.appendChild(h('div', { class: 'card' }, h('p', { class: 'small' }, sim ? 'Tutor nonaktif selama simulasi berjalan. Kirim simulasi dulu, lalu tanyakan soal yang keliru dari halaman hasil.' : T.luring() ? T.PESAN_LURING + ' Materi, pembahasan statis, kalkulator, dan referensi tetap tersedia.' : T.sample ? 'Tutor tersedia di tampilan ini.' : 'Tutor aktif hanya saat halaman dibuka di aplikasi Claude; di luar itu seluruh pembahasan statis tetap tersedia.'), h('div', { class: 'btn-row' }, sim ? h('button', { class: 'btn btn-primary', onclick: () => UKP.go('simulasi', { jalan: true }) }, 'Kembali ke simulasi') : h('button', { class: 'btn btn-primary', onclick: () => T.buka({}) }, 'Buka Tutor (konteks umum)')))); return page; };

  // riwayat "Terakhir dibuka" (maks 5, per tab peramban)
  const RIWAYAT_CARI = 'ukp.cariTerakhir';
  const bacaRiwayatCari = () => { try { const a = JSON.parse(sessionStorage.getItem(RIWAYAT_CARI) || '[]'); return Array.isArray(a) ? a.filter(x => x && typeof x.view === 'string' && x.teks).slice(0, 5) : []; } catch (e) { return []; } };
  const catatRiwayatCari = x => { try { const kunci = y => y.view + '|' + JSON.stringify(y.params || {}) + '|' + (y.soal || ''); const baru = { jenis: x.jenis, teks: x.teks, view: x.view, params: x.params || {}, soal: x.soal ? x.soal.id : null }; const a = bacaRiwayatCari().filter(y => kunci(y) !== kunci(baru)); a.unshift(baru); sessionStorage.setItem(RIWAYAT_CARI, JSON.stringify(a.slice(0, 5))); } catch (e) {} };
  const IKON_CARI = { Kelompok: 'book', Topik: 'book', 'Studi kasus': 'kasus', Kalkulator: 'calc', Istilah: 'ref', Peraturan: 'ref', Formulir: 'formulir', 'Baris SPT': 'formulir', 'Lembar angka': 'lembar', Halaman: 'chevron-kanan', Soal: 'pen', 'Terakhir dibuka': 'jam', 'Lompat ke': 'chevron-kanan' };
  const ikonCari = jenis => IKON_CARI[jenis] || (/^Angka /.test(jenis) ? 'lembar' : 'search');
  // ================= PENCARIAN =================
  // palet cari (D.19): kolom 52 px berikon, hasil berkelompok per jenis (urutan skor dipertahankan), sorot kata,
  // pola combobox (fokus tetap di kolom; ↑ ↓ memilih, Enter membuka, Esc menutup); kueri kosong → terakhir dibuka + lompat cepat
  UKP.cari = function () {
    if (simBerjalan()) { UKP.toast('Pencarian nonaktif selama simulasi.'); return; }
    const input = h('input', { class: 'input', type: 'search', id: 'cari-input', role: 'combobox', 'aria-expanded': 'false', 'aria-controls': 'cari-daftar', 'aria-autocomplete': 'list', autocomplete: 'off', spellcheck: 'false', placeholder: 'Topik, istilah, peraturan, kalkulator, kode soal…', 'aria-label': 'Cari', 'aria-describedby': 'cari-status' });
    const hasil = h('div', { class: 'cari-hasil', id: 'cari-daftar', role: 'listbox', 'aria-label': 'Hasil pencarian' });
    const status = h('p', { class: 'visually-hidden', role: 'status', id: 'cari-status' });
    const contoh = h('div', { class: 'chip-row', role: 'group', 'aria-label': 'Contoh kueri' });
    const indeks = [];
    K.semuaKelompok().forEach(k => { const m = UKP.modul[k]; indeks.push({ jenis: 'Kelompok', teks: k + ' ' + m.meta.nama, view: 'kelompok', params: { kode: k } }); m.topik.forEach(t => indeks.push({ jenis: 'Topik', teks: t.id + ' ' + t.judul, meta: k + ' · ± ' + (t.estimasiMenit || 10) + ' mnt', judulL: String(t.judul).toLowerCase(), view: 'topik', params: { id: t.id } })); m.kasus.forEach(c => indeks.push({ jenis: 'Studi kasus', teks: c.id + ' ' + c.judul, view: 'kasus', params: { id: c.id } })); });
    (UKP.kalkulator || []).forEach(k => indeks.push({ jenis: 'Kalkulator', teks: k.nama, sub: 'kalkulator ' + (k.kelompok || ''), view: 'kalkulator', params: { jenis: k.jenis } }));
    // istilahL/singkatanL/judulL: untuk bobot kueri persis (istilah induk dan judul topik di atas istilah turunan)
    ((UKP.ref && UKP.ref.glosarium) || []).forEach(g => indeks.push({ jenis: 'Istilah', teks: g.istilah + (g.singkatan ? ' (' + g.singkatan + ')' : ''), sub: g.definisi.slice(0, 90), istilahL: String(g.istilah).toLowerCase(), singkatanL: String(g.singkatan || '').toLowerCase().split(/\s*\/\s*/).filter(Boolean), view: 'referensi', params: { tab: 'glosarium', q: g.istilah } }));
    ((UKP.ref && UKP.ref.peraturan) || []).forEach(p => indeks.push({ jenis: 'Peraturan', teks: p.nomor + ' ' + p.judul, view: 'referensi', params: { tab: 'peraturan', q: p.nomor } }));
    // peta formulir: formulir + tiap baris; lembar angka per kelompok
    ((UKP.formulir && UKP.formulir.formulir) || []).forEach(f => {
      // kode formulir di awal teks (nama tanpa "(1770)" ganda) + idForm untuk bobot ekstra saat kueri = kode formulir
      const idF = String(f.id); const namaF = String(f.nama || '').replace(/\s*\(([^)]*)\)\s*$/, (m, isi) => isi.replace(/\s+/g, '').toLowerCase() === idF.toLowerCase() ? '' : m);
      indeks.push({ jenis: 'Formulir', teks: idF + ' · ' + namaF, sub: f.untuk || ('formulir ' + idF), idForm: idF.toLowerCase(), view: 'formulir', params: { id: f.id } });
      (f.bagian || []).forEach(b => (b.baris || []).forEach(x => indeks.push({ jenis: 'Baris SPT', teks: x.kode + ' ' + x.label, sub: f.id + ' · ' + b.nama + (x.pasal ? ' · ' + x.pasal : ''), view: 'formulir', params: { baris: x.kode } })));
    });
    K.semuaKelompok().forEach(k => { const m = UKP.modul[k]; indeks.push({ jenis: 'Lembar angka', teks: 'Lembar angka ' + k + ' ' + m.meta.nama, sub: 'tarif, angka, dan batas waktu', view: 'lembar', params: { kode: k } }); (Array.isArray(m.meta.lembarRingkas) ? m.meta.lembarRingkas : []).forEach(r => { if (r && r.label) indeks.push({ jenis: 'Angka ' + k, teks: r.label, sub: String(r.nilai == null ? '' : r.nilai).slice(0, 90), view: 'lembar', params: { kode: k } }); }); });
    [['Hari Ini', 'beranda'], ['Belajar · peta materi', 'tingkat'], ['Cakupan materi resmi BPPK · daftar periksa butir', 'cakupan'], ['Latih soal', 'latih'], ['Bank soal · soal baru dan soal pengganti', 'bank'], ['Ulang kartu', 'ulang'], ['Studi kasus', 'kasus'], ['Simulasi ujian', 'simulasi'], ['Kalkulator pajak', 'kalkulator'], ['Referensi · glosarium dan peraturan', 'referensi'], ['Rencana belajar', 'rencana'], ['Kemajuan', 'kemajuan'], ['Info ujian', 'info-ujian'], ['Tutor AI', 'tutor'], ['Pengaturan', 'pengaturan'], ['Strategi PG', 'strategi'], ['Etika & Profesi', 'profesi'], ['Peta formulir SPT · baris demi baris', 'formulir'], ['Lembar angka · hafalan cepat', 'lembar']].forEach(([t, v]) => indeks.push({ jenis: 'Halaman', teks: t, view: v }));
    const sinonim = UKP.sinonim || SINONIM_CARI;
    // frasa utuh (tidak menempel pada huruf/angka lain), mis. "globe" cocok dengan "(GloBE)" tetapi tidak dengan "globex"
    const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const frasaUtuh = (teks, f) => new RegExp('(^|[^0-9a-zÀ-ɏ])' + escRe(f) + '($|[^0-9a-zÀ-ɏ])').test(teks);
    let daftar = []; let opsiEl = []; let aktif = -1;
    function buka(x) {
      catatRiwayatCari(x);
      dlg.close();
      if (x.soal) { UKP.go('latih', { atur: 1 }); setTimeout(() => { const main = document.getElementById('main'); main.innerHTML = ''; main.appendChild(h('div', { class: 'page' }, h('h1', null, 'Soal ' + x.soal.id), UKP.c.soal(x.soal, { konteks: 'latih', onLanjut: () => UKP.go('latih') }))); const h1 = main.querySelector('h1'); if (h1) UKP.fokus(h1); }, 0); }
      else UKP.go(x.view, x.params || {});
    }
    function setAktif(i, gulir) {
      aktif = opsiEl.length ? UKP.util.clamp(i, 0, opsiEl.length - 1) : -1;
      opsiEl.forEach((a, j) => a.setAttribute('aria-selected', String(j === aktif)));
      const a = opsiEl[aktif];
      if (a) { input.setAttribute('aria-activedescendant', a.id); if (gulir) { try { a.scrollIntoView({ block: 'nearest' }); } catch (e) {} } } else input.removeAttribute('aria-activedescendant');
    }
    // satu baris hasil (role=option); klik membuka, hover memindahkan sorotan
    const baris = (x, q) => {
      const i = daftar.length; daftar.push(x);
      const a = h('a', { id: 'cari-o-' + i, role: 'option', 'aria-selected': 'false', tabindex: '-1', href: UKP.href ? UKP.href(x.view, x.params) : '#' + x.view,
        onclick: e => { if (e.metaKey || e.ctrlKey || e.shiftKey) return; e.preventDefault(); buka(x); }, onmousemove: () => { if (aktif !== i) setAktif(i, false); } },
        h('span', { class: 'cari-ikon', 'aria-hidden': 'true', style: { display: 'inline-grid', color: 'var(--muted)' } }, UKP.icon(ikonCari(x.jenis), null, true)),
        h('span', { class: 'cari-teks', style: { display: 'grid', minWidth: '0' } }, h('span', null, q ? UKP.c.tandaiKueri(x.teks, q) : x.teks), x.sub ? h('span', { class: 'tiny muted' }, q ? UKP.c.tandaiKueri(x.sub, q) : x.sub) : null),
        // P4-14: grup sudah berjudul jenis → kolom kanan berisi meta yang membantu, bukan label jenis berulang
        x.meta ? h('span', { class: 'meta', style: { whiteSpace: 'nowrap' } }, x.meta) : h('span', { class: 'visually-hidden' }, x.jenis));
      a.style.display = 'grid'; a.style.gridTemplateColumns = 'auto minmax(0, 1fr) auto'; a.style.alignItems = 'center'; a.style.gap = '4px 10px';
      opsiEl.push(a); return a;
    };
    const grupHasil = (judul, isi, idx) => { const gid = 'cari-g-' + idx; return h('div', { role: 'group', 'aria-labelledby': gid, class: 'cari-grup' }, h('div', { class: 'eyebrow', id: gid, role: 'presentation', style: { padding: '8px 10px 2px' } }, judul), isi); };
    function gambar() {
      const q = input.value.trim().toLowerCase(); hasil.replaceChildren(); daftar = []; opsiEl = []; aktif = -1;
      contoh.hidden = !!q;
      if (!q) {
        // kueri kosong: terakhir dibuka + lompat ke (CR-1)
        const riwayat = bacaRiwayatCari().map(r => Object.assign({}, r, { soal: r.soal ? K.soal(r.soal) : null })).filter(r => !r.soal || r.soal);
        const lompat = [{ jenis: 'Halaman', teks: 'Latih soal', view: 'latih' }, { jenis: 'Halaman', teks: 'Simulasi ujian', view: 'simulasi' }, { jenis: 'Halaman', teks: 'Kalkulator pajak', view: 'kalkulator' }, { jenis: 'Halaman', teks: 'Lembar angka', view: 'lembar' }];
        if (riwayat.length) hasil.appendChild(grupHasil('Terakhir dibuka', riwayat.map(r => baris(r, '')), 0));
        hasil.appendChild(grupHasil('Lompat ke', lompat.map(r => baris(r, '')), 1));
        input.setAttribute('aria-expanded', 'true'); setAktif(-1);
        status.textContent = '';
        return;
      }
      const qq = sinonim[q] ? q + ' ' + sinonim[q] : q; const kata = qq.split(/\s+/);
      const qn = q.replace(/\s+/g, '');
      // kueri persis (atau sinonimnya): istilah induk (nama/singkatan sama persis) +15/+12 dan judul topik yang memuat frasa utuh +8,
      // sehingga mis. "globe" menaruh istilah "Pajak minimum global (GloBE/GMT)" dan topik C9.6 di atas "GloBE Information Return"
      const frasaKueri = [q].concat(sinonim[q] ? [sinonim[q]] : []);
      const skor = x => {
        const t = (x.teks + ' ' + (x.sub || '') + ' ' + x.jenis).toLowerCase(); let sc = 0; for (const w of kata) if (t.includes(w)) sc += w.length; if (x.teks.toLowerCase().startsWith(q)) sc += 5;
        if (x.idForm && sc > 0) { if (x.idForm === qn) sc += 20; else if (qn.length >= 3 && x.idForm.startsWith(qn)) sc += 10; }
        if (x.istilahL) { if (frasaKueri.includes(x.istilahL)) sc += 15; else if (x.singkatanL.some(s => frasaKueri.includes(s))) sc += 12; }
        if (x.judulL && frasaKueri.some(f => frasaUtuh(x.judulL, f))) sc += 8;
        return sc;
      };
      // baris SPT paling banyak 5 per kueri agar formulir, topik, dan istilah tetap muncul
      let nBaris = 0;
      const urut = indeks.map(x => [x, skor(x)]).filter(([, sc]) => sc > 0).sort((a, b) => b[1] - a[1]).filter(([x]) => x.jenis !== 'Baris SPT' || ++nBaris <= 5).slice(0, 12).map(([x]) => x);
      if (K.soal(q.toUpperCase())) urut.unshift({ jenis: 'Soal', teks: q.toUpperCase(), sub: (K.soal(q.toUpperCase()).stem || '').slice(0, 90), view: 'latih', params: {}, soal: K.soal(q.toUpperCase()) });
      // kelompok per jenis; urutan grup = urutan hasil terbaik tiap jenis (CR-2)
      const grup = []; const peta = {};
      urut.forEach(x => { const j = /^Angka /.test(x.jenis) ? 'Angka kunci' : x.jenis; if (!peta[j]) { peta[j] = []; grup.push(j); } peta[j].push(x); });
      grup.forEach((j, gi) => hasil.appendChild(grupHasil(j === 'Halaman' ? 'Halaman' : j, peta[j].map(x => baris(x, q)), gi + 2)));
      if (!daftar.length) hasil.appendChild(UKP.c.kosong('Tidak ada hasil untuk "' + input.value.trim() + '"', 'Coba istilah lain, kode soal (A2-045), atau nomor formulir (1770).', null, { ringkas: true, ikon: 'search' }));
      input.setAttribute('aria-expanded', String(daftar.length > 0));
      setAktif(daftar.length ? 0 : -1);
      status.textContent = daftar.length ? daftar.length + ' hasil dalam ' + grup.length + ' kelompok. Panah atas dan bawah untuk memilih, Enter untuk membuka.' : 'Tidak ada hasil.';
    }
    contoh.append(h('span', { class: 'small muted' }, 'Coba:'), ['PTKP', '1770', 'A2-045', 'kurs KMK'].map(c => h('button', { type: 'button', class: 'chip', onclick: () => { input.value = c; gambar(); input.focus(); } }, c)));
    input.addEventListener('input', gambar);
    // Esc pertama langsung menutup dialog (bukan sekadar mengosongkan input type=search)
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); dlg.close('batal'); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setAktif(aktif < 0 ? 0 : aktif + 1, true); return; }
      if (e.key === 'ArrowUp') { e.preventDefault(); setAktif(aktif <= 0 ? 0 : aktif - 1, true); return; }
      if (e.key === 'Enter') { e.preventDefault(); const x = daftar[aktif >= 0 ? aktif : 0]; if (x) buka(x); }
    });
    const pintasanAktif = UKP.store.get().pengaturan.pintasan !== false;
    const kbd = UKP.c.kbd;
    const dlg = UKP.dialog({ judul: 'Cari', kelas: 'palet-cari', isi: () => h('div', { class: 'stack-sm' },
      h('div', { class: 'input-grup cari-kolom' }, h('span', { class: 'imbuh', 'aria-hidden': 'true' }, UKP.icon('search')), input), status, contoh, hasil),
      kaki: h('p', { class: 'tiny muted petunjuk-kbd', style: { margin: '0', marginRight: 'auto' } }, kbd('↑'), ' ', kbd('↓'), ' pilih · ', kbd('Enter'), ' buka · ', kbd('Esc'), ' tutup', pintasanAktif ? [' · ', kbd('/'), ' atau ', kbd(UKP.mac ? '⌘ K' : 'Ctrl K'), ' membuka cari'] : [' · ', kbd(UKP.mac ? '⌘ K' : 'Ctrl K'), ' membuka cari']) });
    try { dlg.style.setProperty('--dlg-w', '640px'); dlg.style.marginTop = 'min(12vh, 96px)'; } catch (e) {}
    gambar();
    setTimeout(() => input.focus(), 50);
  };
})(typeof window !== 'undefined' ? window : globalThis);
