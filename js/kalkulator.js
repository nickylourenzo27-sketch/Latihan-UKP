/* MABAR UKP — mesin 19 kalkulator pajak (fungsi murni, tanpa DOM).
   Kontrak   : docs/SKEMA-KALKULATOR.md · daftar & rumus: docs/SPESIFIKASI.md §5.
   Sumber    : docs/research/02a-regulasi-kup-pphop-potput.md, docs/research/02b-regulasi-badan-ppn-pbb-intl.md
               (status ketentuan per 25 Oktober 2026).
   Konvensi  : input bertipe "persen" diisi dalam satuan persen (22 = 22%); keluaran berformat "persen" berupa
               pecahan (0,0101 = 1,01%). Semua rupiah dibulatkan ke rupiah penuh; PKP dibulatkan ke bawah ribuan.
   Sintaks dibatasi ES2020; berjalan di browser dan Node 22 (uji: node --test test/). */
(function (root) {
  'use strict';
  const UKP = root.UKP = root.UKP || {};
  const STATUS_PER = '2026-10-25';

  // =====================================================================
  // 1. Util format (dipakai seluruh aplikasi)
  // =====================================================================
  const BULAN_SINGKAT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const BULAN_PANJANG = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  function isNum(n) { return typeof n === 'number' && isFinite(n); }
  function nol(n) { return isNum(n) ? n : 0; }
  function grup(s) { return s.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }

  function fmtAngka(n, desimal) {
    if (!isNum(n)) return '–';
    const neg = n < 0; const a = Math.abs(n);
    const s = desimal == null ? (Math.round(a * 100) / 100).toFixed(2).replace(/\.?0+$/, '') : a.toFixed(desimal);
    const p = s.split('.');
    return (neg && Number(s) !== 0 ? '−' : '') + grup(p[0]) + (p[1] ? ',' + p[1] : '');
  }
  function fmtUang(n, opsi) {
    if (!isNum(n)) return '–';
    const d = opsi && opsi.desimal ? opsi.desimal : 0;
    const neg = n < 0; const a = Math.abs(n);
    const s = d ? a.toFixed(d) : String(Math.round(a));
    const p = s.split('.');
    return (neg && Number(s) !== 0 ? '−' : '') + 'Rp' + grup(p[0]) + (p[1] ? ',' + p[1] : '');
  }
  function fmtPersen(x, desimal) { return isNum(x) ? fmtAngka(x * 100, desimal) + '%' : '–'; }
  function fmtTanggal(iso) {
    const t = parseTgl(iso); if (!t) return iso ? String(iso) : '–';
    return t.d + ' ' + BULAN_SINGKAT[t.m - 1] + ' ' + t.y;
  }
  function fmtBulanTahun(iso) {
    const m = /^(\d{4})-(\d{2})/.exec(String(iso || '')); if (!m) return iso ? String(iso) : '–';
    const b = Number(m[2]); if (b < 1 || b > 12) return String(iso);
    return BULAN_PANJANG[b - 1] + ' ' + m[1];
  }
  UKP.fmt = { uang: fmtUang, angka: fmtAngka, persen: fmtPersen, tanggal: fmtTanggal, bulanTahun: fmtBulanTahun };
  const uang = fmtUang, angka = fmtAngka, persen = fmtPersen, tgl = fmtTanggal, bln = fmtBulanTahun;

  // =====================================================================
  // 2. Util tanggal (UTC, tanpa zona waktu)
  // =====================================================================
  function hariDalamBulan(y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); }
  function parseTgl(iso) {
    if (typeof iso !== 'string') return null;
    const m = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(iso.trim()); if (!m) return null;
    const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3]);
    if (y < 1900 || y > 2200 || mo < 1 || mo > 12 || d < 1 || d > hariDalamBulan(y, mo)) return null;
    return { y: y, m: mo, d: d };
  }
  function keIso(y, m, d) { return y + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0'); }
  function nomorHari(t) { return Math.round(Date.UTC(t.y, t.m - 1, t.d) / 86400000); }
  function dariNomor(n) { const x = new Date(n * 86400000); return keIso(x.getUTCFullYear(), x.getUTCMonth() + 1, x.getUTCDate()); }
  function tambahHari(iso, n) { return dariNomor(nomorHari(parseTgl(iso)) + n); }
  function tambahBulan(iso, n) {
    const t = parseTgl(iso); const total = t.y * 12 + (t.m - 1) + n;
    const y = Math.floor(total / 12), m = (total % 12 + 12) % 12 + 1; const maks = hariDalamBulan(y, m);
    return { iso: keIso(y, m, Math.min(t.d, maks)), dipotong: t.d > maks };
  }
  function hariKe(iso) { const t = parseTgl(iso); return new Date(Date.UTC(t.y, t.m - 1, t.d)).getUTCDay(); }
  function hariKerjaBerikut(iso) { let x = iso; while (hariKe(x) === 0 || hariKe(x) === 6) x = tambahHari(x, 1); return x; }
  function selisihHari(a, b) { return nomorHari(parseTgl(b)) - nomorHari(parseTgl(a)); }
  /** Jumlah bulan sanksi: bagian dari bulan dihitung satu bulan penuh (Ps. 19 ayat (1) UU KUP). */
  function bulanSanksi(mulai, akhir) {
    const a = parseTgl(mulai), b = parseTgl(akhir);
    let n = (b.y - a.y) * 12 + (b.m - a.m);
    if (b.d > a.d) n += 1;
    return Math.max(0, n);
  }
  function namaHari(iso) { return NAMA_HARI[hariKe(iso)]; }

  // =====================================================================
  // 3. Tabel referensi
  // =====================================================================
  const PTKP = { TK0: 54000000, TK1: 58500000, TK2: 63000000, TK3: 67500000, K0: 58500000, K1: 63000000, K2: 67500000, K3: 72000000, KI0: 112500000, KI1: 117000000, KI2: 121500000, KI3: 126000000 };
  const LAPISAN_PS17 = [[60000000, 0.05], [250000000, 0.15], [500000000, 0.25], [5000000000, 0.30], [Infinity, 0.35]];
  const TER_KATEGORI = { TK0: 'A', TK1: 'A', K0: 'A', TK2: 'B', TK3: 'B', K1: 'B', K2: 'B', K3: 'C' };
  // Lampiran PP 58/2023 (dipakai PMK 168/2023). Batas atas inklusif ("sampai dengan"); lapisan terakhir Infinity.
  const TER_BULANAN = {
    A: [[5400000, 0], [5650000, 0.0025], [5950000, 0.005], [6300000, 0.0075], [6750000, 0.01], [7500000, 0.0125], [8550000, 0.015], [9650000, 0.0175],
      [10050000, 0.02], [10350000, 0.0225], [10700000, 0.025], [11050000, 0.03], [11600000, 0.035], [12500000, 0.04], [13750000, 0.05], [15100000, 0.06],
      [16950000, 0.07], [19750000, 0.08], [24150000, 0.09], [26450000, 0.10], [28000000, 0.11], [30050000, 0.12], [32400000, 0.13], [35400000, 0.14],
      [39100000, 0.15], [43850000, 0.16], [47800000, 0.17], [51400000, 0.18], [56300000, 0.19], [62200000, 0.20], [68600000, 0.21], [77500000, 0.22],
      [89000000, 0.23], [103000000, 0.24], [125000000, 0.25], [157000000, 0.26], [206000000, 0.27], [337000000, 0.28], [454000000, 0.29], [550000000, 0.30],
      [695000000, 0.31], [910000000, 0.32], [1400000000, 0.33], [Infinity, 0.34]],
    B: [[6200000, 0], [6500000, 0.0025], [6850000, 0.005], [7300000, 0.0075], [9200000, 0.01], [10750000, 0.015], [11250000, 0.02], [11600000, 0.025],
      [12600000, 0.03], [13600000, 0.04], [14950000, 0.05], [16400000, 0.06], [18450000, 0.07], [21850000, 0.08], [26000000, 0.09], [27700000, 0.10],
      [29350000, 0.11], [31450000, 0.12], [33950000, 0.13], [37100000, 0.14], [41100000, 0.15], [45800000, 0.16], [49500000, 0.17], [53800000, 0.18],
      [58500000, 0.19], [64000000, 0.20], [71000000, 0.21], [80000000, 0.22], [93000000, 0.23], [109000000, 0.24], [129000000, 0.25], [163000000, 0.26],
      [211000000, 0.27], [374000000, 0.28], [459000000, 0.29], [555000000, 0.30], [704000000, 0.31], [957000000, 0.32], [1405000000, 0.33], [Infinity, 0.34]],
    C: [[6600000, 0], [6950000, 0.0025], [7350000, 0.005], [7800000, 0.0075], [8850000, 0.01], [9800000, 0.0125], [10950000, 0.015], [11200000, 0.0175],
      [12050000, 0.02], [12950000, 0.03], [14150000, 0.04], [15550000, 0.05], [17050000, 0.06], [19500000, 0.07], [22700000, 0.08], [26600000, 0.09],
      [28100000, 0.10], [30100000, 0.11], [32600000, 0.12], [35400000, 0.13], [38900000, 0.14], [43000000, 0.15], [47400000, 0.16], [51200000, 0.17],
      [55800000, 0.18], [60400000, 0.19], [66700000, 0.20], [74500000, 0.21], [83200000, 0.22], [95600000, 0.23], [110000000, 0.24], [134000000, 0.25],
      [169000000, 0.26], [221000000, 0.27], [390000000, 0.28], [463000000, 0.29], [561000000, 0.30], [709000000, 0.31], [965000000, 0.32], [1419000000, 0.33],
      [Infinity, 0.34]]
  };
  // Lampiran D PP 58/2023. Di atas Rp2.500.000/hari: tarif Ps. 17 × (50% × bruto harian).
  const TER_HARIAN = [[450000, 0], [2500000, 0.005]];
  // Tabel internal KMK tarif bunga per bulan (= (suku bunga acuan + uplift) / 12). Dilengkapi/ditimpa UKP.ref.kmkBunga bila ada.
  const KMK_INTERNAL = [
    { kmk: 'KMK tarif bunga September 2026 (nomor belum terbaca)', periode: '2026-09', tarif: { '15': 0.0185 }, verifikasi: '◐',
      catatan: 'Data hanya memuat tarif Ps. 13(2) September 2026 (1,85%) sebagai pembanding; tarif pasal lain bulan itu belum tersedia.' },
    { kmk: 'KMK 47/MK/EF.2/2026', periode: '2026-10', tarif: { '0': 0.0059, '5': 0.0101, '10': 0.0142, '15': 0.0184, '20': 0.0226 }, imbalanBunga: 0.0059, verifikasi: '✅' }
  ];
  const PENYUSUTAN = {
    k1: { nama: 'Kelompok 1 (bukan bangunan)', masa: 4, gl: 0.25, sm: 0.50 },
    k2: { nama: 'Kelompok 2 (bukan bangunan)', masa: 8, gl: 0.125, sm: 0.25 },
    k3: { nama: 'Kelompok 3 (bukan bangunan)', masa: 16, gl: 0.0625, sm: 0.125 },
    k4: { nama: 'Kelompok 4 (bukan bangunan)', masa: 20, gl: 0.05, sm: 0.10 },
    'bangunan-permanen': { nama: 'Bangunan permanen', masa: 20, gl: 0.05, sm: null },
    'bangunan-tidak-permanen': { nama: 'Bangunan tidak permanen', masa: 10, gl: 0.10, sm: null }
  };
  const PESANGON = [[50000000, 0], [100000000, 0.05], [500000000, 0.15], [Infinity, 0.25]];
  const PENSIUN_SEKALIGUS = [[50000000, 0], [Infinity, 0.05]];
  const KONSTRUKSI = {
    kecil: { label: 'Pekerjaan konstruksi — kualifikasi kecil / sertifikat kompetensi perseorangan', tarif: 0.0175, pasal: 'Ps. 3 ayat (1) huruf a' },
    'menengah-besar': { label: 'Pekerjaan konstruksi — kualifikasi menengah/besar/spesialis', tarif: 0.0265, pasal: 'Ps. 3 ayat (1) huruf c' },
    'tanpa-sertifikat': { label: 'Pekerjaan konstruksi — tanpa sertifikat badan usaha/kompetensi', tarif: 0.04, pasal: 'Ps. 3 ayat (1) huruf b' },
    terintegrasi: { label: 'Pekerjaan konstruksi terintegrasi — bersertifikat', tarif: 0.0265, pasal: 'Ps. 3 ayat (1) huruf d' },
    'terintegrasi-tanpa': { label: 'Pekerjaan konstruksi terintegrasi — tanpa sertifikat', tarif: 0.04, pasal: 'Ps. 3 ayat (1) huruf e' },
    konsultansi: { label: 'Konsultansi konstruksi — bersertifikat', tarif: 0.035, pasal: 'Ps. 3 ayat (1) huruf f' },
    'konsultansi-tanpa': { label: 'Konsultansi konstruksi — tanpa sertifikat', tarif: 0.06, pasal: 'Ps. 3 ayat (1) huruf g' }
  };
  const DENDA_SPT = { 'spt-masa-ppn': 500000, 'spt-masa-pph': 100000, 'spt-op': 100000, 'spt-badan': 1000000 };
  const UPLIFT = { '19': 0, '9-2a': 5, '9-2b': 5, '8-2': 5, '14-3': 5, '8-5': 10, '13-2': 15, '13-3': 20, imbalan: 0 };
  // Pajak minimum global (PMK 136/2024). Persentase SBIE transisi = tabel OECD GloBE Model Rules Pasal 9.2.1 (gaji) dan
  // 9.2.2 (aset berwujud) untuk tahun pajak yang dimulai pada tahun kalender tsb.; turun 0,2 poin/tahun s.d. 2028, lalu
  // 0,8 poin (gaji) dan 0,4 poin (aset) mulai 2029. Riset docs/research belum mengonfirmasi tabel ini (◐).
  const GLOBE = {
    tarifMinimum: 0.15, ambangEur: 750000000, deMinimisPendapatanEur: 10000000, deMinimisLabaEur: 1000000,
    sbieTransisi: {
      '2025': { gaji: 0.096, aset: 0.076 }, '2026': { gaji: 0.094, aset: 0.074 }, '2027': { gaji: 0.092, aset: 0.072 },
      '2028': { gaji: 0.090, aset: 0.070 }, '2029': { gaji: 0.082, aset: 0.066 }
    }
  };

  function daftarKmk() {
    const peta = {};
    KMK_INTERNAL.forEach(function (x) { peta[x.periode] = x; });
    const ref = UKP.ref && Array.isArray(UKP.ref.kmkBunga) ? UKP.ref.kmkBunga : [];
    ref.forEach(function (x) {
      if (!x || typeof x.periode !== 'string' || !/^\d{4}-\d{2}$/.test(x.periode) || !x.tarif || typeof x.tarif !== 'object') return;
      const lama = peta[x.periode] || {};
      const tarif = Object.assign({}, lama.tarif || {});
      Object.keys(x.tarif).forEach(function (k) { if (isNum(x.tarif[k]) && x.tarif[k] >= 0) tarif[k] = x.tarif[k]; });
      if (!Object.keys(tarif).some(function (k) { return isNum(tarif[k]); })) return;   // baris "belum diisi" diabaikan
      const gabung = Object.assign({}, lama, x, { tarif: tarif });
      gabung.imbalanBunga = isNum(x.imbalanBunga) ? x.imbalanBunga : lama.imbalanBunga;
      if (!gabung.kmk) gabung.kmk = 'KMK tarif bunga ' + x.periode;
      peta[x.periode] = gabung;
    });
    return Object.keys(peta).sort().map(function (k) { return peta[k]; });
  }

  UKP.tabel = {
    ptkp: PTKP,
    lapisanPs17: LAPISAN_PS17,
    terKategori: TER_KATEGORI,
    terBulanan: TER_BULANAN,
    terHarian: TER_HARIAN,
    get kmkBunga() { return daftarKmk(); },
    kmkBungaInternal: KMK_INTERNAL,
    upliftBunga: UPLIFT,
    penyusutan: PENYUSUTAN,
    pesangon: PESANGON,
    pensiunSekaligus: PENSIUN_SEKALIGUS,
    konstruksi: KONSTRUKSI,
    dendaSpt: DENDA_SPT,
    biayaJabatan: { persen: 0.05, maksBulan: 500000, maksTahun: 6000000 },
    ppn: { tarif: 0.12, faktorDppNonMewah: 11 / 12, tarifEfektifNonMewah: 0.11 },
    pphBadan: { tarif: 0.22, tarifTbk: 0.19, batas31E: 4800000000, batasBruto31E: 50000000000 },
    umkm: { tarif: 0.005, bebasOp: 500000000, batasBruto: 4800000000 },
    beaMeterai: { tarif: 10000, ambangUang: 5000000, sanksi: 1 },
    globe: GLOBE
  };

  // =====================================================================
  // 4. Fungsi hitung bersama (juga dipakai mesin kunci jawaban)
  // =====================================================================
  function bulatRibuBawah(n) { return n > 0 ? Math.floor(n / 1000) * 1000 : 0; }
  /** PPh Ps. 17 ayat (1) huruf a berlapis atas dasar `pkp` (tidak dibulatkan di sini). */
  function ps17(pkp) {
    let sisa = Math.max(0, nol(pkp)), bawah = 0, total = 0; const rincian = [];
    for (let i = 0; i < LAPISAN_PS17.length && sisa > 0; i++) {
      const atas = LAPISAN_PS17[i][0], tarif = LAPISAN_PS17[i][1];
      const lebar = Math.min(sisa, atas - bawah);
      const pajak = lebar * tarif;
      rincian.push({ dari: bawah, sampai: atas, dasar: lebar, tarif: tarif, pajak: Math.round(pajak) });
      total += pajak; sisa -= lebar; bawah = atas;
    }
    return { pajak: Math.round(total), rincian: rincian };
  }
  function jejakPs17(rincian) {
    return rincian.map(function (r) {
      const rentang = r.sampai === Infinity ? '> ' + uang(r.dari) : (r.dari ? uang(r.dari) + '–' + uang(r.sampai) : 's.d. ' + uang(r.sampai));
      return [persen(r.tarif) + ' × ' + uang(r.dasar) + ' (lapisan ' + rentang + ')', uang(r.pajak)];
    });
  }
  function lapisanBerjenjang(tabel, jumlah) {
    let sisa = Math.max(0, jumlah), bawah = 0, total = 0; const rincian = [];
    for (let i = 0; i < tabel.length && sisa > 0; i++) {
      const atas = tabel[i][0], tarif = tabel[i][1]; const lebar = Math.min(sisa, atas - bawah);
      rincian.push({ dari: bawah, sampai: atas, dasar: lebar, tarif: tarif, pajak: Math.round(lebar * tarif) });
      total += lebar * tarif; sisa -= lebar; bawah = atas;
    }
    return { pajak: Math.round(total), rincian: rincian };
  }
  function cariTer(kategori, bruto) {
    const t = TER_BULANAN[kategori]; if (!t) return null;
    for (let i = 0; i < t.length; i++) if (bruto <= t[i][0]) return { tarif: t[i][1], lapisan: i + 1, bawah: i ? t[i - 1][0] : 0, atas: t[i][0] };
    return null;
  }
  function rentangTer(r) { return r.atas === Infinity ? '> ' + uang(r.bawah) : (r.bawah ? '> ' + uang(r.bawah) + ' s.d. ' + uang(r.atas) : 's.d. ' + uang(r.atas)); }
  /** Tarif bunga per bulan: input tarif acuan (setahun, %) → tabel KMK bulan mulai → cadangan KMK terbaru + peringatan. */
  function tarifBunga(periode, uplift, tarifAcuan, imbalan) {
    if (isNum(tarifAcuan)) {
      const pct = Math.round((tarifAcuan + uplift) / 12 * 100) / 100;
      return { tarif: pct / 100, sumber: 'acuan', ket: '(' + angka(tarifAcuan) + '% + ' + uplift + '%) ÷ 12, dibulatkan 2 desimal', kmk: 'Tarif acuan diisi pengguna (' + angka(tarifAcuan) + '%)', peringatan: [] };
    }
    const kunci = String(uplift);
    const ambil = function (e) { return imbalan && isNum(e.imbalanBunga) ? e.imbalanBunga : (e.tarif ? e.tarif[kunci] : undefined); };
    const daftar = daftarKmk();
    const tepat = daftar.filter(function (e) { return e.periode === periode && isNum(ambil(e)); })[0];
    if (tepat) {
      const p = [];
      if (tepat.verifikasi === '◐') p.push('Tarif ' + bln(periode) + ' (' + persen(ambil(tepat), 2) + ') berasal dari sumber sekunder dan belum dicek ke teks KMK (◐).');
      return { tarif: ambil(tepat), sumber: 'tabel', ket: tepat.kmk + ' (' + bln(tepat.periode) + ')', kmk: tepat.kmk + ' (' + bln(tepat.periode) + ')', peringatan: p };
    }
    const cadangan = daftar.filter(function (e) { return isNum(ambil(e)); }).pop();
    return {
      tarif: ambil(cadangan), sumber: 'cadangan', ket: cadangan.kmk + ' (' + bln(cadangan.periode) + ', pendekatan)', kmk: cadangan.kmk + ' (' + bln(cadangan.periode) + ') — pendekatan',
      peringatan: ['Tarif KMK untuk ' + bln(periode) + ' belum ada di tabel; dipakai tarif ' + cadangan.kmk + ' (' + bln(cadangan.periode) + ') sebagai pendekatan. Isi "Tarif acuan" (suku bunga acuan setahun pada KMK bulan tersebut) agar hasil tepat.']
    };
  }

  UKP.pajak = {
    ps17: ps17, ter: cariTer, tarifBunga: tarifBunga, bulanSanksi: bulanSanksi, bulatRibuBawah: bulatRibuBawah,
    lapisan: lapisanBerjenjang, tambahHari: tambahHari, tambahBulan: tambahBulan, hariKerjaBerikut: hariKerjaBerikut,
    selisihHari: selisihHari, parseTanggal: parseTgl, jadwalSusut: jadwalSusut
  };

  // =====================================================================
  // 5. Pembantu objek hasil
  // =====================================================================
  function baris(label, nilai, format, utama) {
    const o = { label: label, nilai: format === 'uang' ? Math.round(nilai) : nilai, format: format };
    if (utama) o.utama = true;
    return o;
  }
  function keluaran(o) {
    return { hasil: o.hasil || [], jejak: o.jejak || [], asumsi: o.asumsi || [], dasarHukum: o.dasarHukum || [], peringatan: o.peringatan || [], galat: o.galat || null };
  }
  function salah(pesan, dasarHukum) { return keluaran({ galat: pesan, dasarHukum: dasarHukum || [] }); }
  function kapital(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  /** Validasi angka wajib: daftar [key, label, bolehNegatif]. */
  function cekWajib(v, daftar) {
    for (let i = 0; i < daftar.length; i++) {
      const k = daftar[i][0], label = daftar[i][1], neg = daftar[i][2]; const x = v[k];
      if (x == null || x === '') return 'Isi ' + label + '.';
      if (!isNum(x)) return kapital(label) + ' harus berupa angka.';
      if (!neg && x < 0) return kapital(label) + ' tidak boleh negatif.';
    }
    return null;
  }
  /** Validasi angka opsional (boleh kosong, tidak boleh negatif). */
  function cekOpsional(v, daftar) {
    for (let i = 0; i < daftar.length; i++) {
      const k = daftar[i][0], label = daftar[i][1]; const x = v[k];
      if (x == null || x === '') continue;
      if (!isNum(x)) return kapital(label) + ' harus berupa angka.';
      if (x < 0) return kapital(label) + ' tidak boleh negatif.';
    }
    return null;
  }

  const OPSI_PTKP = [
    { nilai: 'TK0', label: 'TK/0 — tidak kawin, tanpa tanggungan (Rp54.000.000)' }, { nilai: 'TK1', label: 'TK/1 (Rp58.500.000)' },
    { nilai: 'TK2', label: 'TK/2 (Rp63.000.000)' }, { nilai: 'TK3', label: 'TK/3 (Rp67.500.000)' },
    { nilai: 'K0', label: 'K/0 — kawin, tanpa tanggungan (Rp58.500.000)' }, { nilai: 'K1', label: 'K/1 (Rp63.000.000)' },
    { nilai: 'K2', label: 'K/2 (Rp67.500.000)' }, { nilai: 'K3', label: 'K/3 (Rp72.000.000)' }
  ];
  const OPSI_PTKP_KI = OPSI_PTKP.concat([
    { nilai: 'KI0', label: 'K/I/0 — penghasilan istri digabung (Rp112.500.000)' }, { nilai: 'KI1', label: 'K/I/1 (Rp117.000.000)' },
    { nilai: 'KI2', label: 'K/I/2 (Rp121.500.000)' }, { nilai: 'KI3', label: 'K/I/3 (Rp126.000.000)' }
  ]);
  function labelPtkp(s) { return s.replace(/^KI(\d)$/, 'K/I/$1').replace(/^TK(\d)$/, 'TK/$1').replace(/^K(\d)$/, 'K/$1'); }

  // =====================================================================
  // 6. Daftar kalkulator (urut SPESIFIKASI §5)
  // =====================================================================
  const K = [];

  // ---------- 1. PPh OP tahunan ----------
  K.push({
    jenis: 'pph-op', nama: 'PPh Orang Pribadi tahunan', kelompok: 'A1', mvp: true,
    deskripsi: 'Menghitung PKP, PPh Pasal 17 berlapis, PPh final UMKM 0,5%, PPh 29/28A, dan angsuran PPh 25 tahun berikutnya.',
    dasarHukum: ['Pasal 7, 17, 25, 28 UU PPh s.t.d.t.d. UU 7/2021', 'PMK 101/PMK.010/2016 (PTKP)', 'PER-17/PJ/2015 (NPPN)', 'PP 55/2022 s.t.d.d. PP 20/2026', 'PMK 114/2025 (zakat)'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'status', label: 'Status PTKP (awal tahun pajak)', tipe: 'pilihan', default: 'K2', opsi: OPSI_PTKP_KI, bantu: 'Status ditentukan pada awal tahun pajak (Ps. 7 ayat (2)). K/I = penghasilan istri digabung.' },
      { key: 'metode', label: 'Cara menghitung penghasilan usaha', tipe: 'pilihan', default: 'pembukuan', opsi: [
        { nilai: 'pembukuan', label: 'Pembukuan — penghasilan neto fiskal' },
        { nilai: 'nppn', label: 'Norma (NPPN) — peredaran bruto < Rp4,8 miliar' },
        { nilai: 'final', label: 'PPh final UMKM 0,5% (PP 55/2022 jo. PP 20/2026)' }] },
      { key: 'neto', label: 'Penghasilan neto usaha (pembukuan)', tipe: 'uang', default: 245000000, tampilJika: { key: 'metode', nilai: 'pembukuan' }, bantu: 'Laba fiskal setelah koreksi fiskal; boleh negatif bila rugi.' },
      { key: 'bruto', label: 'Peredaran bruto usaha setahun', tipe: 'uang', default: 800000000, min: 0, tampilJika: { key: 'metode', nilai: ['nppn', 'final'] } },
      { key: 'norma', label: 'Persentase norma NPPN', tipe: 'persen', default: 50, min: 0, tampilJika: { key: 'metode', nilai: 'nppn' }, bantu: 'Ambil dari Lampiran I PER-17/PJ/2015 sesuai KLU dan wilayah.' },
      { key: 'netoLain', label: 'Penghasilan neto lain yang tidak final (mis. dari pekerjaan)', tipe: 'uang', default: 0, min: 0, bantu: 'Penghasilan final (bunga deposito, sewa tanah/bangunan, dll.) tidak dimasukkan.' },
      { key: 'zakat', label: 'Zakat/sumbangan keagamaan wajib (bukti sah)', tipe: 'uang', default: 0, min: 0 },
      { key: 'rugi', label: 'Kompensasi kerugian (sisa ≤ 5 tahun)', tipe: 'uang', default: 0, min: 0, tampilJika: { key: 'metode', nilai: 'pembukuan' } },
      { key: 'kredit21', label: 'Kredit PPh 21 (dipotong pemberi kerja)', tipe: 'uang', default: 0, min: 0 },
      { key: 'kredit22', label: 'Kredit PPh 22', tipe: 'uang', default: 0, min: 0 },
      { key: 'kredit23', label: 'Kredit PPh 23', tipe: 'uang', default: 0, min: 0 },
      { key: 'kredit24', label: 'Kredit PPh 24 (luar negeri)', tipe: 'uang', default: 0, min: 0 },
      { key: 'kredit25', label: 'Angsuran PPh 25 yang telah dibayar', tipe: 'uang', default: 9000000, min: 0 }
    ],
    hitung: function (v) {
      const dh = ['Pasal 7, 17 ayat (1) huruf a UU PPh', 'PMK 101/PMK.010/2016', 'Pasal 25, 28, 29 UU PPh'];
      const ptkp = PTKP[v.status]; if (!ptkp) return salah('Pilih status PTKP.', dh);
      const e = cekOpsional(v, [['netoLain', 'penghasilan neto lain'], ['zakat', 'zakat'], ['rugi', 'kompensasi kerugian'], ['kredit21', 'kredit PPh 21'], ['kredit22', 'kredit PPh 22'], ['kredit23', 'kredit PPh 23'], ['kredit24', 'kredit PPh 24'], ['kredit25', 'angsuran PPh 25']]);
      if (e) return salah(e, dh);
      const metode = v.metode || 'pembukuan';
      if (['pembukuan', 'nppn', 'final'].indexOf(metode) < 0) return salah('Pilih cara menghitung penghasilan usaha.', dh);
      const jejak = [], asumsi = [], peringatan = [];
      let netoUsaha = 0, pphFinal = 0;
      if (metode === 'pembukuan') {
        const g = cekWajib(v, [['neto', 'penghasilan neto usaha', true]]); if (g) return salah(g, dh);
        netoUsaha = v.neto;
        jejak.push(['Penghasilan neto usaha (pembukuan)', uang(netoUsaha)]);
      } else if (metode === 'nppn') {
        const g = cekWajib(v, [['bruto', 'peredaran bruto'], ['norma', 'persentase norma']]); if (g) return salah(g, dh);
        if (v.norma > 100) return salah('Persentase norma tidak boleh di atas 100%.', dh);
        netoUsaha = Math.round(v.bruto * v.norma / 100);
        jejak.push(['Neto usaha = ' + uang(v.bruto) + ' × ' + angka(v.norma) + '% (NPPN)', uang(netoUsaha)]);
        dh.push('PER-17/PJ/2015');
        if (v.bruto >= 4800000000) peringatan.push('NPPN hanya untuk peredaran bruto kurang dari Rp4,8 miliar setahun; di atas itu wajib menyelenggarakan pembukuan.');
        peringatan.push('Persentase norma tidak divalidasi kalkulator; cocokkan dengan Lampiran I PER-17/PJ/2015 (KLU dan wilayah).');
        asumsi.push('Penggunaan NPPN diberitahukan dalam 3 bulan pertama tahun pajak (PMK 81/2024); tanpa pemberitahuan dianggap memilih pembukuan.');
        asumsi.push('Kompensasi kerugian tidak berlaku bagi WP yang memakai NPPN.');
      } else {
        const g = cekWajib(v, [['bruto', 'peredaran bruto']]); if (g) return salah(g, dh);
        const kena = Math.max(0, v.bruto - 500000000);
        pphFinal = Math.round(kena * 0.005);
        jejak.push(['Bagian peredaran bruto tidak dikenai PPh (WP OP)', uang(Math.min(v.bruto, 500000000))]);
        jejak.push(['PPh final = 0,5% × (' + uang(v.bruto) + ' − Rp500.000.000)', uang(pphFinal)]);
        dh.push('PP 55/2022 Pasal 56–60 s.t.d.d. PP 20/2026');
        if (v.bruto > 4800000000) peringatan.push('Peredaran bruto melebihi Rp4,8 miliar: tahun pajak berikutnya tidak lagi dapat memakai PPh final 0,5% (wajib tarif Ps. 17).');
        asumsi.push('Sejak PP 20/2026 (22 April 2026) penghasilan jasa sehubungan pekerjaan bebas dikecualikan dari PPh final 0,5%; pastikan omzet berasal dari usaha.');
        asumsi.push('PPh final dibayar per bulan (tanggal 15 bulan berikutnya) dan tidak dapat dikreditkan; nilai di atas adalah jumlah setahun.');
      }
      const netoLain = nol(v.netoLain);
      if (netoLain) jejak.push(['Penghasilan neto lain (tidak final)', uang(netoLain)]);
      const totalNeto = netoUsaha + netoLain;
      if (metode !== 'final' || netoLain) jejak.push(['Jumlah penghasilan neto (dasar Ps. 17)', uang(totalNeto)]);
      const zakatInput = nol(v.zakat); const zakat = Math.min(zakatInput, Math.max(0, totalNeto));
      if (zakatInput > zakat) peringatan.push('Zakat dibatasi sebesar penghasilan neto karena tidak boleh menimbulkan kerugian.');
      if (zakat) jejak.push(['Dikurangi zakat/sumbangan keagamaan wajib', '−' + uang(zakat)]);
      const setelahZakat = totalNeto - zakat;
      const rugiInput = metode === 'pembukuan' ? nol(v.rugi) : 0; const rugi = Math.min(rugiInput, Math.max(0, setelahZakat));
      if (rugi) jejak.push(['Dikurangi kompensasi kerugian', '−' + uang(rugi)]);
      if (rugiInput > rugi) asumsi.push('Sisa kerugian ' + uang(rugiInput - rugi) + ' dapat dikompensasikan ke tahun berikutnya (maks. 5 tahun).');
      const netoAkhir = setelahZakat - rugi;
      jejak.push(['Dikurangi PTKP ' + labelPtkp(v.status), '−' + uang(ptkp)]);
      const pkp = bulatRibuBawah(netoAkhir - ptkp);
      jejak.push(['PKP (dibulatkan ke bawah ribuan penuh)', uang(pkp)]);
      const ps = ps17(pkp);
      jejakPs17(ps.rincian).forEach(function (r) { jejak.push(r); });
      jejak.push(['PPh terutang Ps. 17', uang(ps.pajak)]);
      const k21 = nol(v.kredit21), k22 = nol(v.kredit22), k23 = nol(v.kredit23), k24 = nol(v.kredit24), k25 = nol(v.kredit25);
      const kreditNon25 = k21 + k22 + k23 + k24, kredit = kreditNon25 + k25;
      if (kredit) jejak.push(['Kredit pajak (PPh 21 + 22 + 23 + 24 + 25)', '−' + uang(kredit)]);
      const kb = ps.pajak - kredit;
      jejak.push([kb >= 0 ? 'PPh Ps. 29 kurang bayar' : 'PPh Ps. 28A lebih bayar', uang(Math.abs(kb))]);
      const pph25 = Math.max(0, Math.round((ps.pajak - kreditNon25) / 12));
      jejak.push(['PPh 25 tahun berikutnya = (' + uang(ps.pajak) + ' − ' + uang(kreditNon25) + ') ÷ 12', uang(pph25)]);
      asumsi.push('PKP dibulatkan ke bawah ribuan rupiah penuh; tarif Ps. 17 berlaku sejak Tahun Pajak 2022 (UU HPP).');
      asumsi.push('Zakat hanya dapat dikurangkan bila dibayar ke BAZNAS/LAZ yang disahkan dan tidak boleh menimbulkan rugi (PMK 114/2025).');
      if (zakat) dh.push('Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025');
      if (kb < 0) asumsi.push('Lebih bayar dapat dimintakan restitusi atau dikompensasikan (Ps. 17B/17D UU KUP).');
      const hasil = [];
      const labelKb = kb >= 0 ? 'PPh Ps. 29 kurang bayar' : 'PPh Ps. 28A lebih bayar';
      if (metode === 'final') {
        hasil.push(baris('PPh final UMKM setahun', pphFinal, 'uang', true));
        hasil.push(baris('PKP (penghasilan lain non-final)', pkp, 'uang'));
        hasil.push(baris('PPh terutang Ps. 17', ps.pajak, 'uang'));
      } else {
        hasil.push(baris('PPh terutang Ps. 17', ps.pajak, 'uang', true));
        hasil.push(baris('Penghasilan Kena Pajak', pkp, 'uang'));
        hasil.push(baris('Tarif efektif atas PKP', pkp ? ps.pajak / pkp : 0, 'persen'));
      }
      hasil.push(baris(labelKb, Math.abs(kb), 'uang'));
      hasil.push(baris('Angsuran PPh 25 per bulan tahun berikutnya', pph25, 'uang'));
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 2. PPh 21 TER ----------
  K.push({
    jenis: 'pph21-ter', nama: 'PPh Pasal 21 TER', kelompok: 'A3', mvp: true,
    deskripsi: 'Kategori TER A/B/C, PPh 21 masa Januari–November (TER × bruto), dan PPh 21 Masa Desember (Ps. 17 setahun dikurangi yang sudah dipotong).',
    dasarHukum: ['PP 58/2023 (TER)', 'PMK 168/2023', 'Pasal 17, 21 UU PPh'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'jenisPegawai', label: 'Jenis penerima', tipe: 'pilihan', default: 'tetap', opsi: [
        { nilai: 'tetap', label: 'Pegawai tetap (TER bulanan; Desember dihitung ulang Ps. 17)' },
        { nilai: 'tidak-tetap-bulanan', label: 'Pegawai tidak tetap dibayar bulanan (TER bulanan s.d. Desember)' },
        { nilai: 'harian', label: 'Pegawai tidak tetap harian/mingguan/borongan (TER harian)' }] },
      { key: 'status', label: 'Status PTKP awal tahun', tipe: 'pilihan', default: 'TK0', opsi: OPSI_PTKP, tampilJika: { key: 'jenisPegawai', nilai: ['tetap', 'tidak-tetap-bulanan'] }, bantu: 'A: TK/0, TK/1, K/0 · B: TK/2, TK/3, K/1, K/2 · C: K/3.' },
      { key: 'bruto', label: 'Penghasilan bruto sebulan (gaji + tunjangan + premi JKK/JKM/BPJS Kes dibayar pemberi kerja)', tipe: 'uang', default: 9000000, min: 0, tampilJika: { key: 'jenisPegawai', nilai: ['tetap', 'tidak-tetap-bulanan'] } },
      { key: 'thr', label: 'THR/bonus (dibayar sekali)', tipe: 'uang', default: 9000000, min: 0, tampilJika: { key: 'jenisPegawai', nilai: ['tetap', 'tidak-tetap-bulanan'] } },
      { key: 'bulanThr', label: 'Bulan THR/bonus dibayar (1–12)', tipe: 'angka', default: 3, min: 1, max: 12, tampilJika: { key: 'jenisPegawai', nilai: ['tetap', 'tidak-tetap-bulanan'] } },
      { key: 'iuran', label: 'Iuran pensiun/JHT/JP dibayar pegawai per bulan', tipe: 'uang', default: 270000, min: 0, tampilJika: { key: 'jenisPegawai', nilai: 'tetap' } },
      { key: 'brutoHarian', label: 'Penghasilan bruto sehari (atau rata-rata sehari)', tipe: 'uang', default: 500000, min: 0, tampilJika: { key: 'jenisPegawai', nilai: 'harian' } },
      { key: 'hari', label: 'Jumlah hari kerja dalam masa', tipe: 'angka', default: 20, min: 0, tampilJika: { key: 'jenisPegawai', nilai: 'harian' } },
      { key: 'npwp', label: 'Penerima memiliki NPWP/NIK valid', tipe: 'boolean', default: true, bantu: 'Tanpa NPWP: PPh 21 tidak final 20% lebih tinggi (120%).' }
    ],
    hitung: function (v) {
      const dh = ['PP 58/2023 Lampiran (TER)', 'PMK 168/2023', 'Pasal 21 ayat (5a) UU PPh'];
      const jenis = v.jenisPegawai || 'tetap';
      if (['tetap', 'tidak-tetap-bulanan', 'harian'].indexOf(jenis) < 0) return salah('Pilih jenis penerima.', dh);
      const faktor = v.npwp === false ? 1.2 : 1;
      const jejak = [], asumsi = [], peringatan = [];
      if (faktor !== 1) asumsi.push('Tanpa NPWP: PPh 21 = 120% dari PPh yang seharusnya dipotong (Ps. 21 ayat (5a) UU PPh).');
      if (jenis === 'harian') {
        const g = cekWajib(v, [['brutoHarian', 'penghasilan bruto sehari'], ['hari', 'jumlah hari kerja']]); if (g) return salah(g, dh);
        const b = v.brutoHarian; let perHari, ket;
        if (b <= TER_HARIAN[0][0]) { perHari = 0; ket = '0% (s.d. Rp450.000 sehari)'; }
        else if (b <= TER_HARIAN[1][0]) { perHari = b * 0.005; ket = '0,5% × bruto harian (> Rp450.000 s.d. Rp2.500.000)'; }
        else { const ps = ps17(b * 0.5); perHari = ps.pajak; ket = 'Tarif Ps. 17 × 50% × bruto harian (> Rp2.500.000)'; jejak.push(['Dasar = 50% × ' + uang(b), uang(b * 0.5)]); }
        perHari = Math.round(perHari * faktor);
        const masa = Math.round(perHari * v.hari);
        jejak.unshift(['Bruto sehari', uang(b)], ['TER harian', ket]);
        jejak.push(['PPh 21 per hari' + (faktor !== 1 ? ' (× 120%)' : ''), uang(perHari)]);
        jejak.push(['PPh 21 masa = ' + uang(perHari) + ' × ' + angka(v.hari) + ' hari', uang(masa)]);
        asumsi.push('TER harian (Lampiran D PP 58/2023) berlaku untuk pegawai tidak tetap yang dibayar harian, mingguan, satuan, atau borongan; tidak ada penghitungan ulang di Desember.');
        return keluaran({ hasil: [baris('PPh 21 dalam masa', masa, 'uang', true), baris('PPh 21 per hari', perHari, 'uang'), baris('Tarif harian', ket, 'teks')], jejak: jejak, asumsi: asumsi, dasarHukum: dh.concat(['PP 58/2023 Lampiran D (TER harian)']), peringatan: peringatan });
      }
      const ptkp = PTKP[v.status]; const kat = TER_KATEGORI[v.status];
      if (!kat) return salah('Pilih status PTKP TK/0–K/3.', dh);
      const g = cekWajib(v, [['bruto', 'penghasilan bruto sebulan']]); if (g) return salah(g, dh);
      const e = cekOpsional(v, [['thr', 'THR/bonus'], ['iuran', 'iuran pensiun']]); if (e) return salah(e, dh);
      const thr = nol(v.thr);
      const bulanThr = isNum(v.bulanThr) ? Math.round(v.bulanThr) : 12;
      if (thr && (bulanThr < 1 || bulanThr > 12)) return salah('Bulan THR/bonus harus 1–12.', dh);
      const bruto = v.bruto;
      const terReg = cariTer(kat, bruto);
      const pphReg = Math.round(bruto * terReg.tarif * faktor);
      jejak.push(['Kategori TER (status ' + labelPtkp(v.status) + ')', kat]);
      jejak.push(['TER kategori ' + kat + ' lapisan ' + terReg.lapisan + ' (' + rentangTer(terReg) + ')', persen(terReg.tarif)]);
      jejak.push(['PPh 21 masa reguler = ' + uang(bruto) + ' × ' + persen(terReg.tarif) + (faktor !== 1 ? ' × 120%' : ''), uang(pphReg)]);
      let pphThr = null;
      if (thr) {
        const terThr = cariTer(kat, bruto + thr); pphThr = Math.round((bruto + thr) * terThr.tarif * faktor);
        if (!(jenis === 'tetap' && bulanThr === 12)) jejak.push(['Masa ' + BULAN_PANJANG[bulanThr - 1] + ': (' + uang(bruto) + ' + THR ' + uang(thr) + ') × ' + persen(terThr.tarif) + ' (lapisan ' + terThr.lapisan + ')', uang(pphThr)]);
      }
      const hasil = [baris('PPh 21 per bulan (masa reguler)', pphReg, 'uang', true), baris('Kategori · TER masa reguler', kat + ' · ' + persen(terReg.tarif), 'teks')];
      if (jenis === 'tidak-tetap-bulanan') {
        let total = 0;
        for (let m = 1; m <= 12; m++) total += (thr && m === bulanThr) ? pphThr : pphReg;
        jejak.push(['PPh 21 setahun (12 masa memakai TER bulanan)', uang(total)]);
        if (thr) hasil.push(baris('PPh 21 masa ' + BULAN_PANJANG[bulanThr - 1] + ' (dengan THR/bonus)', pphThr, 'uang'));
        hasil.push(baris('PPh 21 setahun', total, 'uang'));
        asumsi.push('Pegawai tidak tetap yang dibayar bulanan memakai TER bulanan untuk seluruh masa, termasuk Desember (tanpa penghitungan ulang Ps. 17).');
        return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
      }
      // pegawai tetap: Januari–November TER, Desember Ps. 17 setahun
      let sumJanNov = 0;
      for (let m = 1; m <= 11; m++) sumJanNov += (thr && m === bulanThr) ? pphThr : pphReg;
      const brutoSetahun = bruto * 12 + thr;
      const bj = Math.min(Math.round(brutoSetahun * 0.05), 6000000);
      const iuran = nol(v.iuran) * 12;
      const pkp = bulatRibuBawah(brutoSetahun - bj - iuran - ptkp);
      const ps = ps17(pkp);
      const pphSetahun = Math.round(ps.pajak * faktor);
      const pphDes = pphSetahun - sumJanNov;
      jejak.push(['Σ PPh 21 Januari–November', uang(sumJanNov)]);
      jejak.push(['Bruto setahun = ' + uang(bruto) + ' × 12' + (thr ? ' + ' + uang(thr) : ''), uang(brutoSetahun)]);
      jejak.push(['Biaya jabatan 5% (maks. Rp6.000.000 setahun)', '−' + uang(bj)]);
      if (iuran) jejak.push(['Iuran pensiun/JHT/JP setahun', '−' + uang(iuran)]);
      jejak.push(['PTKP ' + labelPtkp(v.status), '−' + uang(ptkp)]);
      jejak.push(['PKP setahun (dibulatkan ke bawah ribuan)', uang(pkp)]);
      jejakPs17(ps.rincian).forEach(function (r) { jejak.push(r); });
      jejak.push(['PPh 21 setahun (Ps. 17' + (faktor !== 1 ? ' × 120%' : '') + ')', uang(pphSetahun)]);
      jejak.push(['PPh 21 Desember = ' + uang(pphSetahun) + ' − ' + uang(sumJanNov), uang(pphDes)]);
      if (thr && bulanThr <= 11) hasil.push(baris('PPh 21 masa ' + BULAN_PANJANG[bulanThr - 1] + ' (dengan THR/bonus)', pphThr, 'uang'));
      hasil.push(baris('Σ PPh 21 Januari–November', sumJanNov, 'uang'));
      hasil.push(baris('PKP setahun', pkp, 'uang'));
      hasil.push(baris('PPh 21 setahun (Ps. 17)', pphSetahun, 'uang'));
      hasil.push(baris(pphDes >= 0 ? 'PPh 21 Masa Desember' : 'Kelebihan potong Jan–Nov (dikembalikan pemberi kerja)', Math.abs(pphDes), 'uang'));
      asumsi.push('Kategori TER ditentukan dari status PTKP awal tahun pajak; bruto bulanan termasuk tunjangan, natura kena pajak, dan premi yang dibayar pemberi kerja.');
      asumsi.push('Masa Desember (masa pajak terakhir): PPh setahun Ps. 17 atas PKP dikurangi PPh yang telah dipotong Januari–November; biaya jabatan 5% maks. Rp500.000/bulan.');
      if (thr && bulanThr === 12) asumsi.push('THR/bonus dibayar Desember sehingga hanya masuk penghitungan ulang Ps. 17 Masa Desember.');
      if (pphDes < 0) asumsi.push('Kelebihan pemotongan dikembalikan pemberi kerja kepada pegawai bersamaan dengan pembayaran penghasilan Desember (PMK 168/2023).');
      asumsi.push('Insentif PPh 21 DTP sektor padat karya (PMK 105/2025) tidak diperhitungkan.');
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh.concat(['Pasal 17 ayat (1) huruf a UU PPh', 'PMK 101/PMK.010/2016 (PTKP)']), peringatan: peringatan });
    }
  });

  // ---------- 3. Sanksi bunga KUP ----------
  const OPSI_PASAL_BUNGA = [
    { nilai: '19', label: 'Ps. 19(1)/(2)/(3) — SKP/STP tidak dilunasi saat jatuh tempo, angsuran/penundaan, perpanjangan SPT — uplift 0%' },
    { nilai: '9-2a', label: 'Ps. 9(2a) terlambat setor pajak masa — uplift 5%' },
    { nilai: '9-2b', label: 'Ps. 9(2b) kurang bayar SPT Tahunan disetor setelah tenggat — uplift 5%' },
    { nilai: '8-2', label: 'Ps. 8(2)/(2a) pembetulan SPT menyebabkan kurang bayar — uplift 5%' },
    { nilai: '14-3', label: 'Ps. 14(3) STP: PPh tahun berjalan kurang bayar / salah tulis-hitung — uplift 5%' },
    { nilai: '8-5', label: 'Ps. 8(5) pengungkapan ketidakbenaran pengisian SPT saat pemeriksaan — uplift 10%' },
    { nilai: '13-2', label: 'Ps. 13(2)/(2a) SKPKB hasil pemeriksaan — uplift 15%' },
    { nilai: '13-3', label: 'Ps. 13(3) huruf a/b jo. 13(3b) SKPKB: SPT tidak disampaikan setelah ditegur / pembukuan tidak dipenuhi — uplift 20%' },
    { nilai: 'imbalan', label: 'Imbalan bunga Ps. 11(3), 17B, 27B (dibayar DJP kepada WP) — tanpa uplift' }
  ];
  const DASAR_PASAL_BUNGA = {
    '19': 'Pasal 19 ayat (1)–(3) UU KUP', '9-2a': 'Pasal 9 ayat (2a) UU KUP', '9-2b': 'Pasal 9 ayat (2b) UU KUP', '8-2': 'Pasal 8 ayat (2)/(2a) UU KUP',
    '14-3': 'Pasal 14 ayat (3) UU KUP', '8-5': 'Pasal 8 ayat (5) UU KUP', '13-2': 'Pasal 13 ayat (2)/(2a) UU KUP', '13-3': 'Pasal 13 ayat (3) jo. (3b) UU KUP', imbalan: 'Pasal 11 ayat (3), 17B, 27B UU KUP'
  };
  const RENTANG_PASAL_BUNGA = {
    '19': 'dihitung sejak jatuh tempo pelunasan (atau batas waktu SPT untuk perpanjangan) sampai tanggal pelunasan',
    '9-2a': 'dihitung sejak jatuh tempo penyetoran sampai tanggal pembayaran',
    '9-2b': 'dihitung sejak berakhirnya batas waktu penyampaian SPT Tahunan sampai tanggal pembayaran',
    '8-2': 'dihitung sejak jatuh tempo pembayaran sampai tanggal pembayaran (pembetulan SPT)',
    '14-3': 'dihitung sejak jatuh tempo pembayaran sampai tanggal pembayaran atau terbit STP',
    '8-5': 'dihitung sejak saat terutang/berakhirnya masa atau tahun pajak sampai tanggal pembayaran',
    '13-2': 'dihitung sejak saat terutang/berakhirnya masa, bagian tahun, atau tahun pajak sampai diterbitkannya SKPKB',
    '13-3': 'dihitung sejak saat terutang/berakhirnya masa atau tahun pajak sampai diterbitkannya SKPKB',
    imbalan: 'dihitung sesuai Ps. 11(3), 17B, atau 27B sampai diterbitkannya SPMKP/keputusan'
  };
  K.push({
    jenis: 'sanksi-bunga', nama: 'Sanksi bunga KUP', kelompok: 'A2', mvp: true,
    deskripsi: 'Bunga = pokok × tarif KMK bulan mulai (acuan + uplift pasal) ÷ 12 × jumlah bulan (bagian bulan dihitung penuh, maks. 24 bulan).',
    dasarHukum: ['Pasal 8, 9, 13, 14, 19 UU KUP s.t.d.t.d. UU 7/2021', 'KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026', 'KMK 47/MK/EF.2/2026 (Oktober 2026)'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'pasal', label: 'Dasar pengenaan', tipe: 'pilihan', default: '9-2a', opsi: OPSI_PASAL_BUNGA, bantu: 'Pilih pasal yang menjadi dasar sanksi; uplift menentukan tarif.' },
      { key: 'pokok', label: 'Pokok pajak kurang/terlambat dibayar', tipe: 'uang', default: 12000000, min: 0 },
      { key: 'mulai', label: 'Jatuh tempo / mulai hitung', tipe: 'tanggal', default: '2026-02-15' },
      { key: 'akhir', label: 'Tanggal pembayaran / terbit STP/SKPKB', tipe: 'tanggal', default: '2026-07-03' },
      { key: 'tarifAcuan', label: 'Tarif acuan KMK bulan mulai (suku bunga acuan setahun)', tipe: 'persen', default: null, bantu: 'Kosongkan untuk memakai tabel KMK bila bulan tersedia (Oktober 2026: acuan ≈ 7,08%).' }
    ],
    hitung: function (v) {
      const kode = Object.prototype.hasOwnProperty.call(UPLIFT, v.pasal) ? v.pasal : null;
      if (!kode) return salah('Pilih dasar pengenaan sanksi.', []);
      const dh = [DASAR_PASAL_BUNGA[kode]];
      const g = cekWajib(v, [['pokok', 'pokok pajak']]); if (g) return salah(g, dh);
      if (!parseTgl(v.mulai)) return salah('Isi tanggal mulai hitung yang valid.', dh);
      if (!parseTgl(v.akhir)) return salah('Isi tanggal pembayaran/terbit yang valid.', dh);
      if (selisihHari(v.mulai, v.akhir) < 0) return salah('Tanggal pembayaran/terbit tidak boleh sebelum tanggal mulai hitung.', dh);
      if (v.tarifAcuan != null && (!isNum(v.tarifAcuan) || v.tarifAcuan < 0)) return salah('Tarif acuan harus angka persen tidak negatif.', dh);
      const uplift = UPLIFT[kode];
      const bulanPenuh = bulanSanksi(v.mulai, v.akhir); const bulan = Math.min(bulanPenuh, 24);
      const tb = tarifBunga(v.mulai.slice(0, 7), uplift, v.tarifAcuan, kode === 'imbalan');
      const bunga = Math.round(v.pokok * tb.tarif * bulan);
      const peringatan = tb.peringatan.slice();
      const jejak = [
        ['Pokok', uang(v.pokok)],
        ['Bulan (' + tgl(tambahHari(v.mulai, 1)) + '–' + tgl(v.akhir) + ', bagian bulan dihitung penuh)', angka(bulanPenuh)]
      ];
      if (bulanPenuh > 24) jejak.push(['Dibatasi paling lama 24 bulan', '24']);
      jejak.push(['Tarif per bulan ' + (tb.sumber === 'acuan' ? tb.ket : '(acuan + ' + uplift + '%) ÷ 12 — ' + tb.ket), persen(tb.tarif, 2)]);
      jejak.push(['Bunga = ' + angka(v.pokok) + ' × ' + persen(tb.tarif, 2) + ' × ' + bulan, uang(bunga)]);
      const asumsi = ['Bagian dari bulan dihitung satu bulan penuh; paling lama 24 bulan.',
        'Tarif yang dipakai adalah tarif KMK yang berlaku pada tanggal mulai dihitungnya sanksi (' + bln(v.mulai) + ').',
        'Rentang: ' + RENTANG_PASAL_BUNGA[kode] + '.'];
      if (kode === '9-2a' && (hariKe(v.mulai) === 0 || hariKe(v.mulai) === 6)) asumsi.push('Tanggal ' + tgl(v.mulai) + ' jatuh pada hari ' + namaHari(v.mulai) + '; setoran masa yang jatuh tempo pada hari libur bergeser ke hari kerja berikutnya (PMK 81/2024 Ps. 100). Periksa kembali tanggal mulai.');
      if (kode === '19') asumsi.push('Jatuh tempo pelunasan SKP/STP (1 bulan sejak terbit) tidak bergeser karena hari libur.');
      if (bulan === 0) asumsi.push('Dibayar pada atau sebelum jatuh tempo: tidak ada sanksi bunga.');
      dh.push(tb.kmk);
      const hasil = [
        baris(kode === 'imbalan' ? 'Imbalan bunga' : 'Sanksi bunga', bunga, 'uang', true),
        baris('Jumlah bulan', bulan, 'angka'),
        baris('Tarif per bulan', tb.tarif, 'persen'),
        baris('Faktor uplift', uplift / 100, 'persen'),
        baris('Pokok + bunga', v.pokok + bunga, 'uang')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 4. Tenggat & denda SPT ----------
  const JENIS_TENGGAT = {
    'setor-masa': { label: 'Setoran pajak masa (PPh 21/23/26/4(2)/15/22/25)', masa: true },
    'spt-masa-pph': { label: 'SPT Masa PPh (21/26, Unifikasi)', masa: true },
    'spt-masa-ppn': { label: 'SPT Masa PPN (setor dan lapor)', masa: true },
    'spt-op': { label: 'SPT Tahunan PPh Orang Pribadi', masa: false },
    'spt-badan': { label: 'SPT Tahunan PPh Badan', masa: false }
  };
  K.push({
    jenis: 'tenggat-spt', nama: 'Tenggat & denda SPT', kelompok: 'A2', mvp: true,
    deskripsi: 'Batas waktu setor/lapor era Coretax, hari terlambat, denda Ps. 7, dan bunga keterlambatan setor Ps. 9.',
    dasarHukum: ['Pasal 3, 7, 9 UU KUP', 'PMK 81/2024 Pasal 94, 100, 171'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'jenis', label: 'Jenis kewajiban', tipe: 'pilihan', default: 'setor-masa', opsi: Object.keys(JENIS_TENGGAT).map(function (k) { return { nilai: k, label: JENIS_TENGGAT[k].label }; }) },
      { key: 'masa', label: 'Masa pajak (TTTT-BB)', tipe: 'teks', default: '2026-09', tampilJika: { key: 'jenis', nilai: ['setor-masa', 'spt-masa-pph', 'spt-masa-ppn'] }, bantu: 'Contoh: 2026-09 untuk Masa September 2026.' },
      { key: 'tahun', label: 'Tahun pajak', tipe: 'angka', default: 2025, tampilJika: { key: 'jenis', nilai: ['spt-op', 'spt-badan'] } },
      { key: 'tanggal', label: 'Tanggal setor/lapor sebenarnya', tipe: 'tanggal', default: '2026-10-27' },
      { key: 'pokok', label: 'Pokok yang disetor terlambat (untuk bunga)', tipe: 'uang', default: 10000000, min: 0, tampilJika: { key: 'jenis', nilai: ['setor-masa', 'spt-masa-ppn', 'spt-op', 'spt-badan'] }, bantu: 'SPT Tahunan: PPh 29 kurang bayar yang dibayar pada tanggal di atas.' },
      { key: 'tarifAcuan', label: 'Tarif acuan KMK bulan tenggat (suku bunga acuan setahun)', tipe: 'persen', default: null, bantu: 'Kosongkan untuk memakai tabel KMK.' }
    ],
    hitung: function (v) {
      const jenis = Object.prototype.hasOwnProperty.call(JENIS_TENGGAT, v.jenis) ? v.jenis : null;
      if (!jenis) return salah('Pilih jenis kewajiban.', []);
      const dh = ['Pasal 3 ayat (3) UU KUP', 'PMK 81/2024'];
      const jejak = [], asumsi = [], peringatan = [];
      let tenggatAsli, dasarTenggat;
      if (JENIS_TENGGAT[jenis].masa) {
        const m = /^(\d{4})-(\d{2})$/.exec(String(v.masa || '').trim());
        if (!m || Number(m[2]) < 1 || Number(m[2]) > 12) return salah('Isi masa pajak dengan format TTTT-BB, mis. 2026-09.', dh);
        const awalBerikut = tambahBulan(m[1] + '-' + m[2] + '-01', 1).iso;
        const y = Number(awalBerikut.slice(0, 4)), mo = Number(awalBerikut.slice(5, 7));
        if (jenis === 'setor-masa') { tenggatAsli = keIso(y, mo, 15); dasarTenggat = 'Tanggal 15 bulan berikutnya (PMK 81/2024 Ps. 94)'; }
        else if (jenis === 'spt-masa-pph') { tenggatAsli = keIso(y, mo, 20); dasarTenggat = '20 hari setelah masa pajak berakhir (Ps. 3 ayat (3) huruf a UU KUP)'; }
        else { tenggatAsli = keIso(y, mo, hariDalamBulan(y, mo)); dasarTenggat = 'Akhir bulan berikutnya (Ps. 3 ayat (3) huruf b UU KUP)'; }
        jejak.push(['Masa pajak', bln(m[1] + '-' + m[2])]);
      } else {
        if (!isNum(v.tahun) || v.tahun < 2000 || v.tahun > 2100) return salah('Isi tahun pajak yang valid.', dh);
        const y = Math.round(v.tahun) + 1;
        if (jenis === 'spt-op') { tenggatAsli = keIso(y, 3, 31); dasarTenggat = '3 bulan setelah akhir tahun pajak (Ps. 3 ayat (3) huruf b UU KUP)'; }
        else { tenggatAsli = keIso(y, 4, 30); dasarTenggat = '4 bulan setelah akhir tahun pajak (Ps. 3 ayat (3) huruf c UU KUP)'; }
        jejak.push(['Tahun pajak', String(Math.round(v.tahun))]);
      }
      if (!parseTgl(v.tanggal)) return salah('Isi tanggal setor/lapor yang valid.', dh);
      if (v.pokok != null && (!isNum(v.pokok) || v.pokok < 0)) return salah('Pokok harus angka tidak negatif.', dh);
      if (v.tarifAcuan != null && (!isNum(v.tarifAcuan) || v.tarifAcuan < 0)) return salah('Tarif acuan harus angka persen tidak negatif.', dh);
      const tenggat = hariKerjaBerikut(tenggatAsli);
      jejak.push(['Batas waktu: ' + dasarTenggat, tgl(tenggatAsli) + ' (' + namaHari(tenggatAsli) + ')']);
      if (tenggat !== tenggatAsli) jejak.push(['Jatuh pada hari libur → hari kerja berikutnya', tgl(tenggat) + ' (' + namaHari(tenggat) + ')']);
      const telat = Math.max(0, selisihHari(tenggat, v.tanggal));
      jejak.push(['Tanggal ' + (jenis === 'setor-masa' ? 'setor' : 'lapor'), tgl(v.tanggal)]);
      jejak.push(['Hari terlambat', angka(telat)]);
      const denda = telat > 0 && DENDA_SPT[jenis] ? DENDA_SPT[jenis] : 0;
      if (DENDA_SPT[jenis]) jejak.push(['Denda Ps. 7 ayat (1) UU KUP (' + uang(DENDA_SPT[jenis]) + ' per SPT)', uang(denda)]);
      let bunga = 0, bulan = 0;
      const adaBunga = jenis !== 'spt-masa-pph';
      if (adaBunga) {
        const pokok = nol(v.pokok);
        bulan = telat > 0 ? Math.min(24, bulanSanksi(tenggat, v.tanggal)) : 0;
        const tb = tarifBunga(tenggat.slice(0, 7), 5, v.tarifAcuan, false);
        bunga = Math.round(pokok * tb.tarif * bulan);
        if (pokok && bulan) { tb.peringatan.forEach(function (p) { peringatan.push(p); }); dh.push(tb.kmk); }
        const ps = jenis === 'spt-op' || jenis === 'spt-badan' ? 'Ps. 9 ayat (2b)' : 'Ps. 9 ayat (2a)';
        jejak.push(['Bunga ' + ps + ' = ' + uang(pokok) + ' × ' + persen(tb.tarif, 2) + ' × ' + bulan + ' bulan', uang(bunga)]);
        dh.push(ps.replace('Ps.', 'Pasal') + ' UU KUP');
      }
      if (denda) dh.push('Pasal 7 ayat (1) UU KUP');
      const hasil = [baris('Batas waktu', tenggat, 'tanggal', true), baris('Hari terlambat', telat, 'angka')];
      if (DENDA_SPT[jenis]) hasil.push(baris('Denda Ps. 7', denda, 'uang'));
      if (adaBunga) { hasil.push(baris('Bunga Ps. 9', bunga, 'uang')); hasil.push(baris('Bulan bunga', bulan, 'angka')); }
      hasil.push(baris('Total sanksi', denda + bunga, 'uang'));
      asumsi.push('Pergeseran ke hari kerja berikutnya hanya memperhitungkan Sabtu/Minggu; bila tenggat jatuh pada libur nasional atau cuti bersama, geser manual ke hari kerja berikutnya.');
      if (jenis === 'setor-masa') asumsi.push('Keterlambatan setor dikenai bunga Ps. 9(2a) (uplift 5%); untuk PPh 25 bukti setor dianggap SPT Masa sehingga dapat juga timbul denda Ps. 7 bila melewati batas lapor.');
      if (jenis === 'spt-masa-ppn') asumsi.push('PPN disetor sebelum SPT Masa PPN disampaikan; bunga dihitung bila setoran dilakukan pada tanggal di atas.');
      if (jenis === 'spt-op' || jenis === 'spt-badan') asumsi.push('Kurang bayar PPh 29 wajib dilunasi sebelum SPT disampaikan; bunga Ps. 9(2b) dihitung sejak batas waktu SPT. Perpanjangan SPT (Ps. 3 ayat (4)) tidak diperhitungkan.');
      asumsi.push('Denda Ps. 7 dikecualikan untuk golongan WP tertentu (Ps. 7 ayat (2)).');
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 5. PPN ----------
  K.push({
    jenis: 'ppn', nama: 'PPN (tarif 12%, DPP nilai lain 11/12)', kelompok: 'A4', mvp: true,
    deskripsi: 'DPP, PPN keluaran, PPnBM, pengkreditan pajak masukan, kurang/lebih bayar, dan saran kompensasi/restitusi.',
    dasarHukum: ['Pasal 7, 8A, 9 UU PPN s.t.d.t.d. UU 7/2021', 'PMK 131/2024', 'PMK 11/2025'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'harga', label: 'Harga jual/penggantian dalam masa (belum termasuk PPN)', tipe: 'uang', default: 100000000, min: 0 },
      { key: 'mewah', label: 'Barang mewah (objek PPnBM)', tipe: 'boolean', default: false, bantu: 'Barang mewah: PPN 12% × harga jual penuh (sejak 1 Feb 2025).' },
      { key: 'tarifPpnbm', label: 'Tarif PPnBM', tipe: 'persen', default: 0, min: 0, tampilJika: { key: 'mewah', nilai: true }, bantu: 'Mis. 20% hunian mewah ≥ Rp30 miliar; 75% yacht.' },
      { key: 'pm', label: 'Pajak masukan yang dapat dikreditkan', tipe: 'uang', default: 4400000, min: 0, bantu: 'PM yang memenuhi Ps. 9 ayat (8) (berhubungan langsung dengan usaha, faktur lengkap). Larangan untuk sedan dan station wagon dihapus UU HPP sejak 1 April 2022.' },
      { key: 'kompensasi', label: 'Kompensasi lebih bayar masa sebelumnya', tipe: 'uang', default: 0, min: 0 },
      { key: 'akhirTahunBuku', label: 'Masa ini adalah akhir tahun buku', tipe: 'boolean', default: false }
    ],
    hitung: function (v) {
      const dh = ['Pasal 7 ayat (1) UU PPN (12%)', 'PMK 131/2024 Pasal 2–3'];
      const g = cekWajib(v, [['harga', 'harga jual/penggantian']]); if (g) return salah(g, dh);
      const e = cekOpsional(v, [['pm', 'pajak masukan'], ['kompensasi', 'kompensasi'], ['tarifPpnbm', 'tarif PPnBM']]); if (e) return salah(e, dh);
      const mewah = v.mewah === true; const jejak = [], asumsi = [], peringatan = [];
      let dpp, ppn;
      if (mewah) { dpp = v.harga; ppn = Math.round(v.harga * 12 / 100); jejak.push(['DPP (barang mewah = harga jual)', uang(dpp)]); jejak.push(['PPN = 12% × ' + uang(dpp), uang(ppn)]); }
      else { dpp = Math.round(v.harga * 11 / 12); ppn = Math.round(v.harga * 11 / 100); jejak.push(['DPP nilai lain = 11/12 × ' + uang(v.harga), uang(dpp)]); jejak.push(['PPN = 12% × ' + uang(dpp) + ' (efektif 11%)', uang(ppn)]); }
      const ppnbm = mewah ? Math.round(v.harga * nol(v.tarifPpnbm) / 100) : 0;
      if (mewah && ppnbm) { jejak.push(['PPnBM = ' + angka(v.tarifPpnbm) + '% × ' + uang(v.harga), uang(ppnbm)]); dh.push('Pasal 8 UU PPN (PPnBM); PP 74/2021; PMK 96/PMK.03/2021 s.t.d.d. PMK 15/2023'); }
      if (mewah && !nol(v.tarifPpnbm)) peringatan.push('Tarif PPnBM belum diisi; PPnBM dihitung nihil.');
      const pm = nol(v.pm), komp = nol(v.kompensasi);
      jejak.push(['Pajak keluaran', uang(ppn)]);
      jejak.push(['Pajak masukan dapat dikreditkan', '−' + uang(pm)]);
      if (komp) jejak.push(['Kompensasi lebih bayar masa sebelumnya', '−' + uang(komp)]);
      const selisih = ppn - pm - komp;
      jejak.push([selisih >= 0 ? 'PPN kurang bayar' : 'PPN lebih bayar', uang(Math.abs(selisih))]);
      let saran;
      if (selisih > 0) saran = 'Setor paling lambat akhir bulan berikutnya, sebelum SPT Masa PPN disampaikan.';
      else if (selisih === 0) saran = 'Nihil — tetap laporkan SPT Masa PPN.';
      else if (v.akhirTahunBuku === true) saran = 'Lebih bayar akhir tahun buku: dapat dimintakan restitusi (Ps. 9 ayat (4b) UU PPN) atau dikompensasikan.';
      else saran = 'Kompensasikan ke masa berikutnya; restitusi tiap masa hanya untuk PKP Ps. 9 ayat (4b) (eksportir, penyerahan ke pemungut, tidak dipungut, belum berproduksi) atau pengembalian pendahuluan.';
      dh.push('Pasal 9 ayat (2)–(4b) UU PPN');
      asumsi.push('Non-mewah: PPN = 12% × 11/12 × harga = efektif 11% (PMK 131/2024; nilai lain dan besaran tertentu disesuaikan PMK 11/2025).');
      asumsi.push('Pajak masukan dikreditkan pada masa yang sama; yang belum dikreditkan dapat dikreditkan paling lama 3 masa berikutnya (Ps. 9 ayat (9)).');
      if (mewah) asumsi.push('PPnBM tidak dapat dikreditkan dan dihitung atas harga jual (DPP PPnBM).');
      const hasil = [
        baris(selisih >= 0 ? 'PPN kurang bayar' : 'PPN lebih bayar', Math.abs(selisih), 'uang', true),
        baris('DPP PPN', dpp, 'uang'),
        baris('PPN keluaran', ppn, 'uang'),
        baris('Tarif efektif', mewah ? 0.12 : 0.11, 'persen')
      ];
      if (mewah) hasil.push(baris('PPnBM', ppnbm, 'uang'));
      hasil.push(baris('Pajak masukan dikreditkan', pm, 'uang'));
      hasil.push(baris('Saran', saran, 'teks'));
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 6. Klasifikasi Pot/Put ----------
  const OPSI_TRANSAKSI = [
    { nilai: 'jasa', label: 'Jasa teknik/manajemen/konsultan/jasa lain (PMK 141/2015)' },
    { nilai: 'sewa-harta', label: 'Sewa harta selain tanah/bangunan (kendaraan, alat)' },
    { nilai: 'sewa-tanah-bangunan', label: 'Sewa tanah dan/atau bangunan' },
    { nilai: 'konstruksi', label: 'Jasa konstruksi' },
    { nilai: 'bunga', label: 'Bunga pinjaman (bukan deposito/tabungan)' },
    { nilai: 'royalti', label: 'Royalti' },
    { nilai: 'dividen', label: 'Dividen' },
    { nilai: 'bunga-deposito', label: 'Bunga deposito/tabungan' },
    { nilai: 'hadiah', label: 'Hadiah/penghargaan (lomba, bukan undian)' },
    { nilai: 'hadiah-undian', label: 'Hadiah undian' },
    { nilai: 'pembelian-bendahara', label: 'Pembelian barang oleh bendahara pemerintah' },
    { nilai: 'pengalihan-tanah', label: 'Pengalihan hak atas tanah/bangunan' }
  ];
  function aturanPotput(v) {
    const t = v.transaksi, p = v.penerima, ln = p === 'wpln';
    if (['op', 'badan', 'wpln'].indexOf(p) < 0) return null;
    const r = { pasal: '', tarif: 0, mode: 'tarif', dppFaktor: 1, sifat: '', pemotong: '', bupot: '', faktorTanpaNpwp: 1, catatan: [], peringatan: [], dasar: [] };
    function pph26() {
      const p3b = v.skd === true && isNum(v.tarifP3b);
      r.pasal = 'PPh Pasal 26'; r.tarif = p3b ? v.tarifP3b / 100 : 0.20; r.sifat = 'Final'; r.pemotong = 'Pihak yang membayar (badan pemerintah, SPDN, BUT)'; r.bupot = 'BPNR';
      r.dasar.push('Pasal 26 ayat (1) UU PPh', 'PMK 112/2025 (penerapan P3B)');
      if (v.skd === true && !p3b) r.peringatan.push('SKD dicentang tetapi tarif P3B kosong; dipakai tarif domestik 20%.');
      r.catatan.push(p3b ? 'Tarif P3B dipakai: SKD/Form DGT disampaikan sebelum pembayaran, penerima beneficial owner, tidak ada penyalahgunaan P3B.' : 'Tanpa SKD yang sah: tarif domestik 20% × bruto.');
    }
    function pph23(tarif) { r.pasal = 'PPh Pasal 23'; r.tarif = tarif; r.sifat = 'Tidak final (kredit bagi penerima)'; r.pemotong = 'Badan pemerintah, SPDN badan, BUT, atau OP yang ditunjuk'; r.bupot = 'BPPU'; r.faktorTanpaNpwp = 2; r.dasar.push('Pasal 23 ayat (1) dan (1a) UU PPh'); }
    function pph42(tarif, dasar) { r.pasal = 'PPh Pasal 4 ayat (2)'; r.tarif = tarif; r.sifat = 'Final'; r.pemotong = 'Pihak yang membayar'; r.bupot = ln ? 'BPNR' : 'BPPU'; r.dasar.push(dasar); }
    switch (t) {
      case 'jasa':
        if (ln) { pph26(); r.catatan.push('Laba usaha WPLN tanpa BUT umumnya hanya dipajaki di negara domisili menurut P3B (isi tarif P3B 0% bila SKD sah).'); }
        else if (p === 'op') { r.pasal = 'PPh Pasal 21 (bukan pegawai)'; r.mode = 'ps17'; r.dppFaktor = 0.5; r.sifat = 'Tidak final'; r.pemotong = 'Pemberi penghasilan (badan/instansi/OP yang ditunjuk)'; r.bupot = 'BP21'; r.faktorTanpaNpwp = 1.2; r.dasar.push('Pasal 21 UU PPh', 'PMK 168/2023'); r.catatan.push('Bukan pegawai: tarif Ps. 17 × 50% × bruto per masa (tidak kumulatif).'); }
        else { pph23(0.02); r.dasar.push('PMK 141/PMK.03/2015'); r.catatan.push('Dasar: jumlah bruto tidak termasuk PPN; material/reimbursement dengan bukti terpisah dapat dikeluarkan.'); }
        break;
      case 'sewa-harta': if (ln) pph26(); else pph23(0.02); break;
      case 'sewa-tanah-bangunan': pph42(0.10, 'PP 34/2017'); r.catatan.push('Dasar: bruto nilai sewa termasuk service charge.'); break;
      case 'konstruksi': {
        if (ln) { pph26(); r.peringatan.push('Jasa konstruksi oleh WPLN umumnya membentuk BUT (time test P3B); bila BUT, berlaku PPh final PP 9/2022.'); break; }
        const k = KONSTRUKSI[v.kualifikasi] || KONSTRUKSI.kecil;
        pph42(k.tarif, 'PP 9/2022 ' + k.pasal); r.catatan.push(k.label + '.'); r.pemotong = 'Pengguna jasa (atau disetor sendiri oleh penyedia)';
        break;
      }
      case 'bunga': if (ln) pph26(); else { pph23(0.15); r.catatan.push('Bunga yang dibayarkan kepada bank/lembaga keuangan tertentu tidak dipotong (Ps. 23 ayat (4)).'); } break;
      case 'royalti': if (ln) pph26(); else pph23(0.15); break;
      case 'dividen':
        if (ln) pph26();
        else if (p === 'badan') { r.pasal = 'Bukan objek PPh (Ps. 4 ayat (3) huruf f)'; r.tarif = 0; r.sifat = 'Dikecualikan'; r.pemotong = 'Tidak dipotong'; r.bupot = '—'; r.dasar.push('Pasal 4 ayat (3) huruf f UU PPh'); }
        else if (v.investasiDividen === true) { r.pasal = 'Bukan objek PPh (diinvestasikan ≥ 3 tahun)'; r.tarif = 0; r.sifat = 'Dikecualikan'; r.pemotong = 'Tidak dipotong'; r.bupot = '—'; r.dasar.push('Pasal 4 ayat (3) huruf f UU PPh', 'PMK 18/PMK.03/2021'); r.catatan.push('Investasi paling lambat akhir bulan ke-3 tahun pajak berikutnya; laporan realisasi s.d. tahun ke-3.'); }
        else { r.pasal = 'PPh Pasal 4 ayat (2) — dividen OP'; r.tarif = 0.10; r.sifat = 'Final'; r.pemotong = 'Disetor sendiri oleh penerima (tanggal 15 bulan berikutnya)'; r.bupot = '— (bukti setor)'; r.dasar.push('Pasal 4 ayat (2) dan Pasal 17 ayat (2c) UU PPh', 'PMK 18/PMK.03/2021'); }
        break;
      case 'bunga-deposito':
        if (ln) { pph26(); r.pasal = 'PPh Pasal 4 ayat (2)/26 — bunga deposito WPLN'; }
        else { pph42(0.20, 'PP 131/2000; KMK 51/KMK.04/2001'); r.pemotong = 'Bank'; r.catatan.push('Dikecualikan: deposito/tabungan yang jumlahnya tidak melebihi Rp7.500.000, bunga yang diterima bank/dana pensiun yang disahkan.'); }
        break;
      case 'hadiah':
        if (ln) pph26();
        else if (p === 'op') { r.pasal = 'PPh Pasal 21 (peserta kegiatan/perlombaan)'; r.mode = 'ps17'; r.sifat = 'Tidak final'; r.pemotong = 'Penyelenggara kegiatan'; r.bupot = 'BP21'; r.faktorTanpaNpwp = 1.2; r.dasar.push('Pasal 21 UU PPh', 'PMK 168/2023'); r.peringatan.push('Perlakuan hadiah lomba kepada OP sebagai PPh 21 peserta kegiatan (Ps. 17 × bruto) perlu dicek ke PMK 168/2023 (◐).'); }
        else pph23(0.15);
        break;
      case 'hadiah-undian': pph42(0.25, 'PP 132/2000'); r.pemotong = 'Penyelenggara undian'; if (ln) r.peringatan.push('Hadiah undian kepada WPLN: periksa ketentuan P3B (◐).'); break;
      case 'pembelian-bendahara':
        if (ln) { pph26(); r.peringatan.push('PPh 22 bendahara berlaku untuk rekanan dalam negeri; pembayaran kepada WPLN dikenai PPh 26.'); break; }
        r.pasal = 'PPh Pasal 22'; r.tarif = 0.015; r.sifat = 'Tidak final (kredit bagi penerima)'; r.pemotong = 'Bendahara pemerintah/KPA (pemungut)'; r.bupot = 'BPPU'; r.faktorTanpaNpwp = 2; r.dasar.push('Pasal 22 ayat (1) dan (3) UU PPh', 'PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022');
        r.catatan.push('Harga pembelian tidak termasuk PPN; dikecualikan pembayaran ≤ Rp2.000.000 (bukan pecahan), BBM/listrik/gas/air/benda pos.');
        break;
      case 'pengalihan-tanah': pph42(0.025, 'PP 34/2016'); r.pemotong = 'Disetor sendiri oleh penjual sebelum akta ditandatangani (dipungut bendahara bila pembeli instansi pemerintah)'; r.bupot = '— (bukti setor)'; r.catatan.push('Tarif 1% untuk rumah/rusun sederhana oleh pengembang; 0% pengalihan kepada pemerintah untuk kepentingan umum.'); break;
      default: return null;
    }
    return r;
  }
  K.push({
    jenis: 'potput', nama: 'Klasifikasi PPh Pot/Put', kelompok: 'A3', mvp: true,
    deskripsi: 'Menentukan pasal (21/22/23/4(2)/26), tarif, sifat final/kredit, pemotong, bukti potong Coretax, dan jumlah PPh.',
    dasarHukum: ['Pasal 4 ayat (2), 21, 22, 23, 26 UU PPh', 'PMK 141/PMK.03/2015', 'PP 9/2022', 'PP 34/2017', 'PMK 168/2023', 'PMK 112/2025', 'PER-11/PJ/2025'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'transaksi', label: 'Jenis transaksi/penghasilan', tipe: 'pilihan', default: 'jasa', opsi: OPSI_TRANSAKSI, bantu: 'Gaji pegawai: gunakan kalkulator PPh 21 TER.' },
      { key: 'penerima', label: 'Penerima penghasilan', tipe: 'pilihan', default: 'badan', opsi: [
        { nilai: 'op', label: 'Orang pribadi dalam negeri' }, { nilai: 'badan', label: 'Badan dalam negeri / BUT' }, { nilai: 'wpln', label: 'Wajib Pajak luar negeri (selain BUT)' }] },
      { key: 'bruto', label: 'Jumlah bruto (tidak termasuk PPN)', tipe: 'uang', default: 50000000, min: 0 },
      { key: 'kualifikasi', label: 'Kualifikasi jasa konstruksi', tipe: 'pilihan', default: 'kecil', tampilJika: { key: 'transaksi', nilai: 'konstruksi' }, opsi: Object.keys(KONSTRUKSI).map(function (k) { return { nilai: k, label: KONSTRUKSI[k].label + ' — ' + persen(KONSTRUKSI[k].tarif) }; }) },
      { key: 'investasiDividen', label: 'Dividen diinvestasikan di Indonesia ≥ 3 tahun', tipe: 'boolean', default: false, tampilJika: { key: 'transaksi', nilai: 'dividen' } },
      { key: 'npwp', label: 'Penerima memiliki NPWP/NIK valid', tipe: 'boolean', default: true },
      { key: 'skd', label: 'WPLN menyerahkan SKD/Form DGT yang sah', tipe: 'boolean', default: false, tampilJika: { key: 'penerima', nilai: 'wpln' } },
      { key: 'tarifP3b', label: 'Tarif P3B', tipe: 'persen', default: 10, min: 0, tampilJika: { key: 'skd', nilai: true }, bantu: 'Mis. royalti Singapura 10%; bunga Belanda pinjaman > 2 tahun 5%.' }
    ],
    hitung: function (v) {
      const g = cekWajib(v, [['bruto', 'jumlah bruto']]); if (g) return salah(g, []);
      if (v.skd === true && v.tarifP3b != null && (!isNum(v.tarifP3b) || v.tarifP3b < 0 || v.tarifP3b > 100)) return salah('Tarif P3B harus 0–100%.', []);
      const r = aturanPotput(v); if (!r) return salah('Pilih jenis transaksi dan penerima.', []);
      const ln = v.penerima === 'wpln';
      const tanpaNpwp = !ln && v.npwp === false;
      const dpp = Math.round(v.bruto * r.dppFaktor);
      let pph, tarifLabel;
      if (r.mode === 'ps17') { pph = ps17(dpp).pajak; tarifLabel = 'Tarif Ps. 17 progresif' + (r.dppFaktor !== 1 ? ' × 50% bruto' : ' × bruto'); }
      else if (v.transaksi === 'pembelian-bendahara' && !ln && v.bruto <= 2000000) { pph = 0; tarifLabel = 'Tidak dipungut (≤ Rp2.000.000)'; }
      else { pph = dpp * r.tarif; tarifLabel = persen(r.tarif); }
      const faktor = tanpaNpwp ? r.faktorTanpaNpwp : 1;
      pph = Math.round(pph * faktor);
      const namaTransaksi = (OPSI_TRANSAKSI.filter(function (o) { return o.nilai === v.transaksi; })[0] || {}).label || v.transaksi;
      const jejak = [['Transaksi', namaTransaksi], ['Pasal', r.pasal], ['Dasar pemotongan', uang(dpp) + (r.dppFaktor !== 1 ? ' (50% × ' + uang(v.bruto) + ')' : '')], ['Tarif', tarifLabel]];
      if (r.mode === 'ps17' && dpp) jejakPs17(ps17(dpp).rincian).forEach(function (x) { jejak.push(x); });
      if (tanpaNpwp) jejak.push(['Tanpa NPWP: ' + (faktor === 2 ? 'tarif 100% lebih tinggi' : faktor === 1.2 ? 'PPh 20% lebih tinggi' : 'tidak ada kenaikan untuk PPh final'), '× ' + angka(faktor)]);
      jejak.push(['PPh', uang(pph)]);
      const asumsi = r.catatan.slice();
      asumsi.push('Bukti potong era Coretax (PER-11/PJ/2025): BPPU untuk PPh 4(2)/15/22/23 WPDN, BPNR untuk WPLN, BP21 untuk PPh 21 selain pegawai tetap.');
      if (tanpaNpwp && faktor === 1) asumsi.push('Kenaikan tarif tanpa NPWP tidak berlaku untuk PPh final/PPh 4(2) atau penghasilan yang dikecualikan.');
      const hasil = [
        baris('PPh dipotong/dipungut', pph, 'uang', true),
        baris('Pasal', r.pasal, 'teks'),
        baris('Tarif efektif atas bruto', v.bruto ? pph / v.bruto : (r.mode === 'tarif' ? r.tarif * faktor : 0), 'persen'),
        baris('Sifat', r.sifat, 'teks'),
        baris('Pemotong/pemungut', r.pemotong, 'teks'),
        baris('Bukti potong', r.bupot, 'teks'),
        baris('Dasar pemotongan', dpp, 'uang')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: r.dasar.concat(['PER-11/PJ/2025 (bukti potong)']), peringatan: r.peringatan });
    }
  });

  // ---------- 7. Pesangon / pensiun sekaligus ----------
  K.push({
    jenis: 'pesangon', nama: 'PPh final pesangon & pensiun sekaligus', kelompok: 'A3', mvp: false,
    deskripsi: 'PPh 21 final atas uang pesangon (0/5/15/25%) atau manfaat pensiun/THT/JHT sekaligus (0/5%) secara kumulatif dalam 2 tahun kalender.',
    dasarHukum: ['PP 68/2009', 'PMK 16/PMK.03/2010', 'Pasal 21 dan 4 ayat (2) UU PPh'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'jenis', label: 'Jenis pembayaran', tipe: 'pilihan', default: 'pesangon', opsi: [
        { nilai: 'pesangon', label: 'Uang pesangon (termasuk uang penghargaan masa kerja dan penggantian hak)' },
        { nilai: 'pensiun', label: 'Uang manfaat pensiun / THT / JHT dibayar sekaligus' }] },
      { key: 'jumlah', label: 'Jumlah dibayar sekarang', tipe: 'uang', default: 150000000, min: 0 },
      { key: 'sudahDibayar', label: 'Jumlah yang sudah dibayar sebelumnya (dalam 2 tahun kalender yang sama)', tipe: 'uang', default: 0, min: 0, bantu: 'Pembayaran bertahap: tarif diterapkan atas jumlah kumulatif.' },
      { key: 'tahunKetiga', label: 'Dibayar pada tahun kalender ketiga atau seterusnya', tipe: 'boolean', default: false }
    ],
    hitung: function (v) {
      const dh = ['PP 68/2009 Pasal 2–4', 'PMK 16/PMK.03/2010'];
      if (v.jenis !== 'pesangon' && v.jenis !== 'pensiun') return salah('Pilih jenis pembayaran.', dh);
      const g = cekWajib(v, [['jumlah', 'jumlah dibayar']]); if (g) return salah(g, dh);
      const e = cekOpsional(v, [['sudahDibayar', 'jumlah yang sudah dibayar']]); if (e) return salah(e, dh);
      const tabel = v.jenis === 'pensiun' ? PENSIUN_SEKALIGUS : PESANGON;
      const jejak = [], asumsi = [], peringatan = [];
      if (v.tahunKetiga === true) {
        const ps = ps17(v.jumlah);
        jejak.push(['Pembayaran tahun ketiga dst.: tarif Ps. 17 × ' + uang(v.jumlah), uang(ps.pajak)]);
        jejakPs17(ps.rincian).forEach(function (r) { jejak.push(r); });
        peringatan.push('Pembayaran pada tahun kalender ketiga dan seterusnya dikenai tarif Ps. 17 (PP 68/2009); sifat final/tidak final perlu dicek (◐).');
        return keluaran({ hasil: [baris('PPh atas pembayaran ini (tarif Ps. 17)', ps.pajak, 'uang', true), baris('Tarif efektif', v.jumlah ? ps.pajak / v.jumlah : 0, 'persen')], jejak: jejak, asumsi: ['Tanpa PTKP dan biaya jabatan.'], dasarHukum: dh.concat(['Pasal 17 UU PPh']), peringatan: peringatan });
      }
      const sebelum = nol(v.sudahDibayar); const kum = sebelum + v.jumlah;
      const total = lapisanBerjenjang(tabel, kum); const lalu = lapisanBerjenjang(tabel, sebelum);
      const pph = total.pajak - lalu.pajak;
      jejak.push(['Jumlah kumulatif = ' + uang(sebelum) + ' + ' + uang(v.jumlah), uang(kum)]);
      total.rincian.forEach(function (r) { jejak.push([persen(r.tarif) + ' × ' + uang(r.dasar) + (r.sampai === Infinity ? ' (> ' + uang(r.dari) + ')' : ' (s.d. ' + uang(r.sampai) + ')'), uang(r.pajak)]); });
      jejak.push(['PPh final atas kumulatif', uang(total.pajak)]);
      if (sebelum) jejak.push(['Dikurangi PPh atas pembayaran sebelumnya', '−' + uang(lalu.pajak)]);
      jejak.push(['PPh final atas pembayaran ini', uang(pph)]);
      asumsi.push('PPh bersifat final, tidak dikurangi PTKP maupun biaya jabatan; dipotong pemberi kerja/dana pensiun/BPJS dengan bukti potong BP21.');
      asumsi.push('Tarif atas penerima tanpa NPWP tidak dinaikkan karena PPh bersifat final.');
      const hasil = [baris('PPh 21 final atas pembayaran ini', pph, 'uang', true), baris('PPh final atas jumlah kumulatif', total.pajak, 'uang'), baris('Jumlah kumulatif', kum, 'uang'), baris('Tarif efektif pembayaran ini', v.jumlah ? pph / v.jumlah : 0, 'persen')];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 8. Denda keberatan/banding ----------
  K.push({
    jenis: 'denda-keberatan', nama: 'Denda keberatan, banding, dan PK', kelompok: 'A2', mvp: false,
    deskripsi: 'Denda 30% (keberatan ditolak/sebagian dan tidak banding) atau 60% (banding/PK) × (pajak menurut keputusan − pajak dibayar sebelum keberatan).',
    dasarHukum: ['Pasal 25 ayat (9), 27 ayat (5d), 27 ayat (5f) UU KUP s.t.d.t.d. UU 7/2021'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'jalur', label: 'Upaya hukum', tipe: 'pilihan', default: 'keberatan', opsi: [
        { nilai: 'keberatan', label: 'Keberatan ditolak/dikabulkan sebagian — denda 30%' },
        { nilai: 'banding', label: 'Banding ditolak/dikabulkan sebagian — denda 60%' },
        { nilai: 'pk', label: 'Putusan PK menambah pajak — denda 60%' }] },
      { key: 'pajakKeputusan', label: 'Pajak menurut SK Keberatan / Putusan Banding / Putusan PK', tipe: 'uang', default: 500000000, min: 0 },
      { key: 'dibayar', label: 'Pajak yang telah dibayar sebelum mengajukan keberatan', tipe: 'uang', default: 200000000, min: 0, bantu: 'Minimal sejumlah yang disetujui dalam PAHP (Ps. 25 ayat (3a)).' },
      { key: 'ajukanBanding', label: 'WP mengajukan banding atas SK Keberatan', tipe: 'boolean', default: false, tampilJika: { key: 'jalur', nilai: 'keberatan' } }
    ],
    hitung: function (v) {
      const tarifMap = { keberatan: 0.30, banding: 0.60, pk: 0.60 };
      const dasarMap = { keberatan: 'Pasal 25 ayat (9) UU KUP', banding: 'Pasal 27 ayat (5d) UU KUP', pk: 'Pasal 27 ayat (5f) dan (5g) UU KUP' };
      const jalur = Object.prototype.hasOwnProperty.call(tarifMap, v.jalur) ? v.jalur : null; if (!jalur) return salah('Pilih upaya hukum.', []);
      const dh = [dasarMap[jalur]];
      const g = cekWajib(v, [['pajakKeputusan', 'pajak menurut keputusan/putusan'], ['dibayar', 'pajak yang telah dibayar']]); if (g) return salah(g, dh);
      const dasar = Math.max(0, v.pajakKeputusan - v.dibayar);
      const banding = jalur === 'keberatan' && v.ajukanBanding === true;
      const tarif = banding ? 0 : tarifMap[jalur];
      const denda = Math.round(dasar * tarif);
      const jejak = [['Pajak menurut keputusan/putusan', uang(v.pajakKeputusan)], ['Dibayar sebelum keberatan', '−' + uang(v.dibayar)], ['Dasar denda', uang(dasar)]];
      jejak.push([banding ? 'Denda 30% tidak dikenakan karena WP banding' : 'Denda ' + persen(tarif) + ' × ' + uang(dasar), uang(denda)]);
      jejak.push(['Sisa pokok + denda yang harus dilunasi', uang(dasar + denda)]);
      const asumsi = ['Denda tidak dikenakan bila keberatan/banding dikabulkan seluruhnya atau pajak menurut keputusan tidak melebihi yang telah dibayar.',
        'Sisa pokok yang belum dibayar tertangguh sampai 1 bulan sejak SK Keberatan/Putusan Banding diterbitkan (Ps. 25(7), 27(5a)).',
        'Sanksi dari keberatan/banding/PK tidak termasuk fasilitas penghapusan sanksi PMK 71/2026.'];
      const peringatan = [];
      if (banding) peringatan.push('Bila banding kemudian ditolak/dikabulkan sebagian, denda 60% Ps. 27(5d) berlaku atas dasar menurut Putusan Banding.');
      const hasil = [baris('Denda', denda, 'uang', true), baris('Tarif denda', tarif, 'persen'), baris('Dasar denda', dasar, 'uang'), baris('Sisa pokok + denda', dasar + denda, 'uang')];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 9. Garis waktu penagihan (PPSP) ----------
  K.push({
    jenis: 'ppsp', nama: 'Garis waktu penagihan (PPSP)', kelompok: 'A2', mvp: false,
    deskripsi: 'Jadwal paling cepat: jatuh tempo → Surat Teguran → Surat Paksa → penyitaan → pengumuman lelang → lelang, plus penyanderaan dan daluwarsa.',
    dasarHukum: ['Pasal 9 ayat (3), (3a), 22 UU KUP', 'UU 19/1997 s.t.d.d. UU 19/2000 (PPSP) Pasal 8, 12, 25, 26, 33', 'PMK 61/2023'],
    statusPer: STATUS_PER, verifikasi: '◐',
    peringatan: 'Konvensi penghitungan hari (jatuh tempo "1 bulan sejak terbit" = tanggal terbit + 1 bulan − 1 hari; "setelah lewat n hari" = hari ke-n+1; penyanderaan = Surat Paksa + 14 hari) dan tenggat pengumuman lelang/lelang 14 hari belum dicek ke teks UU PPSP/PMK 61/2023.',
    input: [
      { key: 'terbit', label: 'Tanggal terbit SKP/STP', tipe: 'tanggal', default: '2026-07-01' },
      { key: 'usahaKecil', label: 'WP usaha kecil / daerah tertentu (jatuh tempo 2 bulan)', tipe: 'boolean', default: false },
      { key: 'utang', label: 'Jumlah utang pajak', tipe: 'uang', default: 150000000, min: 0, bantu: 'Pencegahan dan penyanderaan hanya bila utang ≥ Rp100 juta dan diragukan itikad baiknya.' }
    ],
    hitung: function (v) {
      const dh = ['Pasal 9 ayat (3) UU KUP', 'UU PPSP Pasal 8, 12, 25, 26, 33', 'PMK 61/2023'];
      if (!parseTgl(v.terbit)) return salah('Isi tanggal terbit SKP/STP yang valid.', dh);
      const e = cekOpsional(v, [['utang', 'jumlah utang pajak']]); if (e) return salah(e, dh);
      const nBulan = v.usahaKecil === true ? 2 : 1;
      const tb = tambahBulan(v.terbit, nBulan);
      const jt = tb.dipotong ? tb.iso : tambahHari(tb.iso, -1);
      const batasTeguran = tambahHari(jt, 7), teguran = tambahHari(jt, 8);
      const batasPaksa = tambahHari(teguran, 21), paksa = tambahHari(teguran, 22);
      const sita = tambahHari(paksa, 2);
      const umum = tambahHari(sita, 14);
      const lelang = tambahHari(umum, 14);
      const sandera = tambahHari(paksa, 14);
      const dalu = tambahBulan(v.terbit, 60).iso;
      const utang = nol(v.utang); const bisaSandera = utang >= 100000000;
      const jejak = [
        ['Terbit SKP/STP', tgl(v.terbit)],
        ['Jatuh tempo pelunasan (' + nBulan + ' bulan sejak terbit)', tgl(jt)],
        ['Lewat 7 hari sejak jatuh tempo berakhir', tgl(batasTeguran)],
        ['Surat Teguran paling cepat', tgl(teguran)],
        ['Lewat 21 hari sejak Surat Teguran berakhir', tgl(batasPaksa)],
        ['Surat Paksa paling cepat diberitahukan', tgl(paksa)],
        ['SPMP/penyitaan: setelah 2 × 24 jam sejak Surat Paksa', tgl(sita)],
        ['Pengumuman lelang: paling singkat 14 hari setelah penyitaan', tgl(umum)],
        ['Lelang: paling singkat 14 hari setelah pengumuman', tgl(lelang)],
        ['Penyanderaan (utang ≥ Rp100 juta): paling cepat 14 hari setelah Surat Paksa', bisaSandera ? tgl(sandera) : 'tidak memenuhi syarat'],
        ['Daluwarsa penagihan: 5 tahun sejak terbit (dapat tertangguh)', tgl(dalu)]
      ];
      const asumsi = ['Setiap tindakan diasumsikan dilakukan pada hari pertama yang diperbolehkan dan utang belum dilunasi.',
        'Jatuh tempo pelunasan SKP/STP tidak bergeser karena hari libur; penagihan seketika dan sekaligus (Ps. 6 UU PPSP) tidak dimodelkan.',
        'Daluwarsa penagihan tertangguh bila Surat Paksa diberitahukan, ada pengakuan utang, atau penyidikan (Ps. 22 UU KUP).'];
      const hasil = [
        baris('Jatuh tempo pelunasan', jt, 'tanggal', true),
        baris('Surat Teguran paling cepat', teguran, 'tanggal'),
        baris('Surat Paksa paling cepat', paksa, 'tanggal'),
        baris('Penyitaan (SPMP) paling cepat', sita, 'tanggal'),
        baris('Pengumuman lelang paling cepat', umum, 'tanggal'),
        baris('Lelang paling cepat', lelang, 'tanggal'),
        bisaSandera ? baris('Penyanderaan paling cepat', sandera, 'tanggal') : baris('Penyanderaan', 'Tidak memenuhi syarat (utang < Rp100 juta)', 'teks'),
        baris('Daluwarsa penagihan', dalu, 'tanggal')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: [] });
    }
  });

  // ---------- 10. PPh Badan & 31E ----------
  K.push({
    jenis: 'pph-badan', nama: 'PPh Badan & fasilitas Pasal 31E', kelompok: 'B6', mvp: false,
    deskripsi: 'PPh badan 22% dengan fasilitas 50% tarif Ps. 31E (bruto ≤ Rp50 miliar), tarif Tbk 19%, PPh 29/28A, dan angsuran PPh 25.',
    dasarHukum: ['Pasal 17 ayat (1) huruf b dan (2b), 25, 31E UU PPh s.t.d.t.d. UU 7/2021', 'SE-02/PJ/2015', 'PP 55/2022'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'bruto', label: 'Peredaran bruto setahun', tipe: 'uang', default: 30000000000, min: 0, bantu: 'Termasuk penghasilan luar usaha, final, dan bukan objek (SE-02/PJ/2015).' },
      { key: 'pkp', label: 'Penghasilan Kena Pajak', tipe: 'uang', default: 3000000000 },
      { key: 'tbk', label: 'Perseroan Terbuka memenuhi syarat tarif 19%', tipe: 'boolean', default: false, bantu: '≥ 40% saham di BEI, ≥ 300 pihak, masing-masing < 5%, ≥ 183 hari.' },
      { key: 'kredit', label: 'Kredit PPh 22, 23, 24 setahun', tipe: 'uang', default: 50000000, min: 0 },
      { key: 'pph25', label: 'Angsuran PPh 25 yang telah dibayar setahun', tipe: 'uang', default: 480000000, min: 0 }
    ],
    hitung: function (v) {
      const dh = ['Pasal 17 ayat (1) huruf b UU PPh (22%)', 'Pasal 31E UU PPh', 'SE-02/PJ/2015'];
      const g = cekWajib(v, [['bruto', 'peredaran bruto'], ['pkp', 'PKP', true]]); if (g) return salah(g, dh);
      const e = cekOpsional(v, [['kredit', 'kredit pajak'], ['pph25', 'angsuran PPh 25']]); if (e) return salah(e, dh);
      const jejak = [], asumsi = [], peringatan = [];
      const pkp = bulatRibuBawah(v.pkp);
      if (v.pkp <= 0) peringatan.push('PKP nihil/negatif: tidak ada PPh terutang; rugi fiskal dapat dikompensasikan 5 tahun (Ps. 6 ayat (2)).');
      jejak.push(['PKP (dibulatkan ke bawah ribuan)', uang(pkp)]);
      let pph, fas = 0, non = pkp, ket;
      if (v.tbk === true) {
        pph = Math.round(pkp * 19 / 100); ket = 'Tarif Perseroan Terbuka 19%';
        jejak.push(['PPh = 19% × ' + uang(pkp), uang(pph)]); dh.push('Pasal 17 ayat (2b) UU PPh; PP 55/2022 (Perseroan Terbuka)');
        if (v.bruto <= 50000000000) peringatan.push('Penerapan Ps. 31E bersamaan dengan tarif Perseroan Terbuka tidak dihitung; cek ketentuan.');
      } else if (v.bruto <= 4800000000) {
        fas = pkp; non = 0; pph = Math.round(pkp * 11 / 100); ket = 'Seluruh PKP mendapat fasilitas (bruto ≤ Rp4,8 miliar)';
        jejak.push(['Bruto ≤ Rp4,8 miliar: PPh = 50% × 22% × ' + uang(pkp), uang(pph)]);
        asumsi.push('Bila WP memenuhi syarat dan masih dalam jangka waktu PPh final 0,5% (PP 55/2022 jo. PP 20/2026), PPh final atas omzet yang berlaku, bukan Ps. 31E.');
      } else if (v.bruto <= 50000000000) {
        fas = Math.round(pkp * (4800000000 / v.bruto)); non = pkp - fas;
        const a = Math.round(fas * 11 / 100), b = Math.round(non * 22 / 100); pph = a + b; ket = 'Fasilitas Ps. 31E atas bagian bruto Rp4,8 miliar';
        jejak.push(['PKP fasilitas = Rp4.800.000.000 / ' + uang(v.bruto) + ' × ' + uang(pkp), uang(fas)]);
        jejak.push(['PKP non-fasilitas = ' + uang(pkp) + ' − ' + uang(fas), uang(non)]);
        jejak.push(['50% × 22% × ' + uang(fas), uang(a)]);
        jejak.push(['22% × ' + uang(non), uang(b)]);
        jejak.push(['PPh terutang', uang(pph)]);
      } else {
        pph = Math.round(pkp * 22 / 100); ket = 'Tarif umum 22% (bruto > Rp50 miliar)';
        jejak.push(['Bruto > Rp50 miliar: PPh = 22% × ' + uang(pkp), uang(pph)]);
      }
      const kredit = nol(v.kredit), k25 = nol(v.pph25);
      const kb = pph - kredit - k25;
      jejak.push(['Kredit PPh 22/23/24', '−' + uang(kredit)]);
      jejak.push(['Angsuran PPh 25', '−' + uang(k25)]);
      jejak.push([kb >= 0 ? 'PPh Ps. 29 kurang bayar' : 'PPh Ps. 28A lebih bayar', uang(Math.abs(kb))]);
      const ang = Math.max(0, Math.round((pph - kredit) / 12));
      jejak.push(['PPh 25 tahun berikutnya = (' + uang(pph) + ' − ' + uang(kredit) + ') ÷ 12', uang(ang)]);
      asumsi.push('Ps. 31E bersifat wajib (bukan pilihan) bagi WP badan dalam negeri dengan peredaran bruto s.d. Rp50 miliar.');
      asumsi.push('Angsuran PPh 25 baru berlaku mulai bulan batas waktu SPT; WP tertentu (bank, BUMN, Tbk) memakai ketentuan khusus PMK 215/PMK.03/2018.');
      const hasil = [
        baris('PPh Badan terutang', pph, 'uang', true),
        baris('Perlakuan tarif', ket, 'teks'),
        baris('PKP fasilitas (50% tarif)', fas, 'uang'),
        baris('PKP non-fasilitas', non, 'uang'),
        baris('Tarif efektif atas PKP', pkp ? pph / pkp : 0, 'persen'),
        baris(kb >= 0 ? 'PPh Ps. 29 kurang bayar' : 'PPh Ps. 28A lebih bayar', Math.abs(kb), 'uang'),
        baris('Angsuran PPh 25 per bulan tahun berikutnya', ang, 'uang')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 11. Penyusutan/amortisasi ----------
  function jadwalSusut(harga, masaBulan, tarifTahun, metode, bulanMulai, tahunMulai) {
    const daftar = [];
    // pengaman: masa > 100 tahun, bulan di luar 1–12, atau angka tak hingga akan membuat jadwal tak berujung
    if (!isNum(harga) || harga <= 0 || !isNum(masaBulan) || masaBulan < 1 || masaBulan > 1200 || !isNum(tarifTahun) ||
      !isNum(bulanMulai) || bulanMulai < 1 || bulanMulai > 12 || !isNum(tahunMulai)) return daftar;
    let sisa = harga; let terpakai = 0; let tahun = tahunMulai; let awal = bulanMulai;
    while (sisa > 0 && terpakai < masaBulan) {
      const bulanIni = Math.min(13 - awal, masaBulan - terpakai);
      const terakhir = terpakai + bulanIni >= masaBulan;
      let s;
      if (terakhir) s = sisa;
      else if (metode === 'sm') s = Math.round(sisa * tarifTahun * bulanIni / 12);
      else s = Math.round(harga * tarifTahun * bulanIni / 12);
      s = Math.min(s, sisa); sisa -= s; terpakai += bulanIni;
      daftar.push({ tahun: tahun, bulan: bulanIni, susut: s, sisa: sisa });
      tahun += 1; awal = 1;
    }
    return daftar;
  }
  K.push({
    jenis: 'penyusutan', nama: 'Penyusutan & amortisasi fiskal', kelompok: 'B6', mvp: false,
    deskripsi: 'Tabel penyusutan per tahun (garis lurus/saldo menurun) menurut kelompok harta, nilai sisa buku, dan beda temporer terhadap penyusutan komersial.',
    dasarHukum: ['Pasal 11 dan 11A UU PPh s.t.d.t.d. UU 7/2021', 'PMK 72/2023', 'PP 55/2022'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'kelompok', label: 'Kelompok harta', tipe: 'pilihan', default: 'k2', opsi: Object.keys(PENYUSUTAN).map(function (k) { const p = PENYUSUTAN[k]; return { nilai: k, label: p.nama + ' — ' + p.masa + ' tahun' + (p.sm ? ' (GL ' + persen(p.gl) + ' / SM ' + persen(p.sm) + ')' : ' (GL ' + persen(p.gl) + ')') }; }) },
      { key: 'metode', label: 'Metode', tipe: 'pilihan', default: 'sm', opsi: [{ nilai: 'gl', label: 'Garis lurus' }, { nilai: 'sm', label: 'Saldo menurun (bukan bangunan)' }] },
      { key: 'harga', label: 'Harga perolehan', tipe: 'uang', default: 240000000, min: 0 },
      { key: 'bulan', label: 'Bulan perolehan/mulai disusutkan (1–12)', tipe: 'angka', default: 7, min: 1, max: 12 },
      { key: 'tahun', label: 'Tahun perolehan', tipe: 'angka', default: 2026 },
      { key: 'masaSebenarnya', label: 'Masa manfaat sebenarnya bangunan permanen (tahun, > 20)', tipe: 'angka', default: null, tampilJika: { key: 'kelompok', nilai: 'bangunan-permanen' }, bantu: 'Kosongkan untuk 20 tahun; boleh masa sebenarnya menurut pembukuan bila > 20 tahun (taat asas).' },
      { key: 'masaKomersial', label: 'Masa manfaat komersial garis lurus (tahun) — untuk beda temporer', tipe: 'angka', default: 5, bantu: 'Kosongkan bila tidak perlu membandingkan.' }
    ],
    hitung: function (v) {
      const dh = ['Pasal 11 ayat (1), (2), (6), (6a) UU PPh', 'PMK 72/2023'];
      const kel = PENYUSUTAN[v.kelompok]; if (!kel) return salah('Pilih kelompok harta.', dh);
      const g = cekWajib(v, [['harga', 'harga perolehan']]); if (g) return salah(g, dh);
      if (!isNum(v.bulan) || v.bulan < 1 || v.bulan > 12 || Math.round(v.bulan) !== v.bulan) return salah('Bulan perolehan harus bilangan 1–12.', dh);
      if (!isNum(v.tahun) || v.tahun < 1900 || v.tahun > 2200) return salah('Isi tahun perolehan yang valid.', dh);
      if (v.masaKomersial != null && (!isNum(v.masaKomersial) || v.masaKomersial < 0)) return salah('Masa manfaat komersial harus angka tidak negatif atau dikosongkan.', dh);
      const peringatan = [], asumsi = [];
      let metode = v.metode === 'gl' ? 'gl' : 'sm';
      if (!kel.sm && metode === 'sm') { metode = 'gl'; peringatan.push('Bangunan hanya boleh disusutkan dengan metode garis lurus; metode diubah ke garis lurus.'); }
      let masa = kel.masa, tarif = metode === 'sm' ? kel.sm : kel.gl;
      if (v.kelompok === 'bangunan-permanen' && v.masaSebenarnya != null) {
        if (!isNum(v.masaSebenarnya) || Math.round(v.masaSebenarnya) <= 20 || v.masaSebenarnya > 100) return salah('Masa manfaat sebenarnya bangunan permanen harus lebih dari 20 tahun dan paling lama 100 tahun (atau kosongkan).', dh);
        masa = Math.round(v.masaSebenarnya); tarif = 1 / masa; asumsi.push('Masa manfaat sebenarnya ' + masa + ' tahun dipakai sesuai pembukuan (Ps. 11 ayat (6a) UU PPh; PMK 72/2023), wajib taat asas.');
      }
      const jadwal = jadwalSusut(v.harga, masa * 12, tarif, metode, Math.round(v.bulan), Math.round(v.tahun));
      const jejak = [['Kelompok · masa manfaat', kel.nama + ' · ' + masa + ' tahun'], ['Metode · tarif', (metode === 'sm' ? 'Saldo menurun ' : 'Garis lurus ') + persen(tarif, metode === 'gl' && masa > 20 ? 4 : null)]];
      jadwal.forEach(function (r) { jejak.push([r.tahun + ' (' + r.bulan + ' bln)', uang(r.susut) + ' · sisa ' + uang(r.sisa)]); });
      const pertama = jadwal[0] || { tahun: Math.round(v.tahun), susut: 0, sisa: v.harga, bulan: 13 - Math.round(v.bulan) };
      const hasil = [baris('Penyusutan fiskal tahun pertama (' + pertama.tahun + ')', pertama.susut, 'uang', true), baris('Nilai sisa buku akhir tahun pertama', pertama.sisa, 'uang'), baris('Jumlah tahun buku penyusutan', jadwal.length, 'angka')];
      if (jadwal.length > 1) hasil.push(baris('Penyusutan tahun kedua (' + jadwal[1].tahun + ')', jadwal[1].susut, 'uang'));
      if (isNum(v.masaKomersial) && v.masaKomersial > 0) {
        const kom = Math.round(v.harga / v.masaKomersial * Math.min(pertama.bulan, v.masaKomersial * 12) / 12);
        const beda = pertama.susut - kom;
        jejak.push(['Penyusutan komersial tahun pertama = ' + uang(v.harga) + ' ÷ ' + angka(v.masaKomersial) + ' × ' + pertama.bulan + '/12', uang(kom)]);
        jejak.push(['Beda temporer = fiskal − komersial', uang(beda)]);
        const pt = Math.round(Math.abs(beda) * 22 / 100);
        jejak.push([beda > 0 ? 'Liabilitas pajak tangguhan (22%)' : beda < 0 ? 'Aset pajak tangguhan (22%)' : 'Tidak ada pajak tangguhan', uang(pt)]);
        hasil.push(baris('Penyusutan komersial tahun pertama', kom, 'uang'));
        hasil.push(baris(beda > 0 ? 'Beda temporer kena pajak (fiskal > komersial)' : beda < 0 ? 'Beda temporer dapat dikurangkan (fiskal < komersial)' : 'Beda temporer', Math.abs(beda), 'uang'));
        hasil.push(baris(beda >= 0 ? 'Liabilitas pajak tangguhan (22%)' : 'Aset pajak tangguhan (22%)', pt, 'uang'));
        dh.push('PSAK 212 (pajak tangguhan)');
      }
      asumsi.push('Penyusutan dimulai pada bulan pengeluaran (atau bulan selesai pengerjaan); tahun pertama dihitung pro rata bulan.');
      if (metode === 'sm') asumsi.push('Saldo menurun: nilai sisa buku pada akhir masa manfaat disusutkan sekaligus (Ps. 11 ayat (2)).');
      asumsi.push('Amortisasi harta tak berwujud (Ps. 11A) memakai kelompok dan tarif yang sama.');
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 12. Pajak tangguhan ----------
  K.push({
    jenis: 'pajak-tangguhan', nama: 'Pajak tangguhan (PSAK 212)', kelompok: 'B7', mvp: false,
    deskripsi: 'Aset/liabilitas pajak tangguhan dari beda temporer dan rugi fiskal, beban/manfaat pajak tangguhan, total beban pajak, dan jurnal.',
    dasarHukum: ['PSAK 212 (eks-PSAK 46) Pajak Penghasilan', 'Pasal 17 ayat (1) huruf b UU PPh (22%)'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'bedaKenaPajak', label: 'Beda temporer kena pajak tahun berjalan (mis. penyusutan fiskal > komersial)', tipe: 'uang', default: 20000000, bantu: 'Negatif = pemulihan/pembalikan.' },
      { key: 'bedaDikurangkan', label: 'Beda temporer dapat dikurangkan tahun berjalan (mis. penyisihan piutang, imbalan kerja)', tipe: 'uang', default: 50000000, bantu: 'Negatif = pemulihan/pembalikan.' },
      { key: 'rugiFiskal', label: 'Rugi fiskal yang dapat dikompensasikan (timbul tahun ini)', tipe: 'uang', default: 0, min: 0 },
      { key: 'tarif', label: 'Tarif pajak saat pemulihan', tipe: 'persen', default: 22, min: 0 },
      { key: 'pajakKini', label: 'Beban pajak kini', tipe: 'uang', default: 100000000, min: 0 }
    ],
    hitung: function (v) {
      const dh = ['PSAK 212 Pajak Penghasilan'];
      const g = cekWajib(v, [['tarif', 'tarif pajak']]); if (g) return salah(g, dh);
      if (v.tarif > 100) return salah('Tarif pajak tidak boleh di atas 100%.', dh);
      if (v.bedaKenaPajak != null && !isNum(v.bedaKenaPajak)) return salah('Beda temporer kena pajak harus angka.', dh);
      if (v.bedaDikurangkan != null && !isNum(v.bedaDikurangkan)) return salah('Beda temporer dapat dikurangkan harus angka.', dh);
      const e = cekOpsional(v, [['rugiFiskal', 'rugi fiskal'], ['pajakKini', 'beban pajak kini']]); if (e) return salah(e, dh);
      const kp = nol(v.bedaKenaPajak), dk = nol(v.bedaDikurangkan), rf = nol(v.rugiFiskal), kini = nol(v.pajakKini);
      const t = v.tarif / 100;
      const dtl = Math.round(kp * t), dta = Math.round((dk + rf) * t);
      const neto = dtl - dta; // > 0 beban, < 0 manfaat
      const jejak = [
        ['DTL = ' + uang(kp) + ' × ' + angka(v.tarif) + '%', uang(dtl)],
        ['DTA = (' + uang(dk) + (rf ? ' + rugi fiskal ' + uang(rf) : '') + ') × ' + angka(v.tarif) + '%', uang(dta)],
        [neto >= 0 ? 'Beban pajak tangguhan neto = DTL − DTA' : 'Manfaat pajak tangguhan neto = DTA − DTL', uang(Math.abs(neto))]
      ];
      if (dtl > 0) jejak.push(['Jurnal: Dr Beban Pajak Tangguhan / Cr Liabilitas Pajak Tangguhan', uang(dtl)]);
      if (dtl < 0) jejak.push(['Jurnal: Dr Liabilitas Pajak Tangguhan / Cr Manfaat Pajak Tangguhan (pemulihan)', uang(-dtl)]);
      if (dta > 0) jejak.push(['Jurnal: Dr Aset Pajak Tangguhan / Cr Manfaat Pajak Tangguhan', uang(dta)]);
      if (dta < 0) jejak.push(['Jurnal: Dr Beban Pajak Tangguhan / Cr Aset Pajak Tangguhan (pemulihan)', uang(-dta)]);
      if (kini) jejak.push(['Jurnal: Dr Beban Pajak Kini / Cr Utang Pajak (PPh 29 setelah kredit)', uang(kini)]);
      const total = kini + neto;
      jejak.push(['Total beban pajak = pajak kini ' + (neto >= 0 ? '+ beban' : '− manfaat') + ' tangguhan', uang(total)]);
      const peringatan = [];
      if (rf) peringatan.push('DTA atas rugi fiskal hanya diakui sejauh besar kemungkinan tersedia laba fiskal (maks. kompensasi 5 tahun).');
      const asumsi = ['Pajak tangguhan diukur dengan tarif yang berlaku saat aset dipulihkan/liabilitas diselesaikan; tidak didiskontokan; DTA dan DTL disajikan saling hapus bila memenuhi syarat.',
        'Beda tetap (mis. sumbangan, sanksi pajak, penghasilan final) tidak menimbulkan pajak tangguhan.'];
      const hasil = [
        baris(neto >= 0 ? 'Beban pajak tangguhan' : 'Manfaat pajak tangguhan', Math.abs(neto), 'uang', true),
        baris('Liabilitas pajak tangguhan (DTL)', dtl, 'uang'),
        baris('Aset pajak tangguhan (DTA)', dta, 'uang'),
        baris('Beban pajak kini', kini, 'uang'),
        baris('Total beban pajak penghasilan', total, 'uang')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 13. DER 4:1 ----------
  K.push({
    jenis: 'der', nama: 'DER 4:1 — biaya pinjaman', kelompok: 'B6', mvp: false,
    deskripsi: 'Biaya pinjaman yang dapat dikurangkan menurut perbandingan utang dan modal 4:1 serta koreksi fiskal positifnya.',
    dasarHukum: ['Pasal 18 ayat (1) UU PPh', 'PMK 169/PMK.010/2015', 'PER-25/PJ/2017'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'utang', label: 'Rata-rata saldo utang akhir bulan (berbunga)', tipe: 'uang', default: 10000000000, min: 0, bantu: 'Utang jangka panjang dan pendek, termasuk utang dagang yang dibebani bunga.' },
      { key: 'modal', label: 'Rata-rata saldo modal akhir bulan', tipe: 'uang', default: 2000000000, bantu: 'Ekuitas termasuk pinjaman tanpa bunga dari pihak berhubungan istimewa; boleh negatif.' },
      { key: 'biaya', label: 'Biaya pinjaman setahun', tipe: 'uang', default: 1000000000, min: 0, bantu: 'Bunga, diskonto/premium, biaya tambahan, biaya penjaminan, selisih kurs pinjaman valas.' },
      { key: 'dikecualikan', label: 'WP dikecualikan (bank, pembiayaan, asuransi, migas/minerba berkontrak, seluruhnya final, infrastruktur)', tipe: 'boolean', default: false }
    ],
    hitung: function (v) {
      const dh = ['Pasal 18 ayat (1) UU PPh', 'PMK 169/PMK.010/2015'];
      const g = cekWajib(v, [['utang', 'rata-rata saldo utang'], ['modal', 'rata-rata saldo modal', true], ['biaya', 'biaya pinjaman']]); if (g) return salah(g, dh);
      const jejak = [], asumsi = [], peringatan = [];
      let diakui, derTeks, proporsi;
      if (v.dikecualikan === true) { diakui = v.biaya; proporsi = 1; derTeks = 'dikecualikan'; jejak.push(['WP dikecualikan dari PMK 169/2015', 'seluruh biaya diakui']); }
      else if (v.modal <= 0) { diakui = 0; proporsi = 0; derTeks = 'modal ≤ 0'; jejak.push(['Modal nihil/negatif', 'seluruh biaya pinjaman tidak dapat dikurangkan']); }
      else if (v.utang <= 4 * v.modal) { diakui = v.biaya; proporsi = 1; derTeks = angka(v.utang / v.modal, 2) + ' : 1'; jejak.push(['DER = ' + uang(v.utang) + ' ÷ ' + uang(v.modal), derTeks + ' (≤ 4 : 1)']); }
      else {
        proporsi = 4 * v.modal / v.utang; diakui = Math.round(v.biaya * proporsi); derTeks = angka(v.utang / v.modal, 2) + ' : 1';
        jejak.push(['DER = ' + uang(v.utang) + ' ÷ ' + uang(v.modal), derTeks + ' (> 4 : 1)']);
        jejak.push(['Biaya diakui = (4 × ' + uang(v.modal) + ' ÷ ' + uang(v.utang) + ') × ' + uang(v.biaya), uang(diakui)]);
      }
      const koreksi = v.biaya - diakui;
      jejak.push(['Koreksi fiskal positif', uang(koreksi)]);
      asumsi.push('Utang dan modal memakai rata-rata saldo akhir bulan tahun pajak (atau bagian tahun pajak).');
      asumsi.push('Bagian biaya pinjaman kepada pihak afiliasi tetap diuji kewajaran (PKKU, PMK 172/2023); laporan utang LN disampaikan (PER-25/PJ/2017).');
      const hasil = [baris('Biaya pinjaman dapat dikurangkan', diakui, 'uang', true), baris('Koreksi fiskal positif', koreksi, 'uang'), baris('DER', derTeks, 'teks'), baris('Proporsi diakui', proporsi, 'persen')];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 14. PPh 24 per negara ----------
  K.push({
    jenis: 'pph24', nama: 'Kredit PPh Pasal 24 per negara', kelompok: 'C9', mvp: false,
    deskripsi: 'Batas kredit pajak luar negeri per negara (ordinary credit): nilai terkecil antara pajak LN dan (neto negara ÷ PKP) × PPh terutang; rugi LN tidak digabung.',
    dasarHukum: ['Pasal 24 UU PPh', 'PMK 192/PMK.03/2018'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'netoDn', label: 'Penghasilan neto dalam negeri', tipe: 'uang', default: 2000000000 },
      { key: 'tarif', label: 'Tarif PPh', tipe: 'persen', default: 22, min: 0, bantu: 'Badan 22%; isi tarif lain bila perlu.' },
      { key: 'neto1', label: 'Negara 1 — penghasilan neto', tipe: 'uang', default: 1000000000 },
      { key: 'pajak1', label: 'Negara 1 — pajak dibayar/terutang di LN', tipe: 'uang', default: 300000000, min: 0 },
      { key: 'neto2', label: 'Negara 2 — penghasilan neto', tipe: 'uang', default: 500000000 },
      { key: 'pajak2', label: 'Negara 2 — pajak dibayar/terutang di LN', tipe: 'uang', default: 50000000, min: 0 },
      { key: 'neto3', label: 'Negara 3 — penghasilan neto (negatif = rugi)', tipe: 'uang', default: -200000000 },
      { key: 'pajak3', label: 'Negara 3 — pajak dibayar/terutang di LN', tipe: 'uang', default: 0, min: 0 }
    ],
    hitung: function (v) {
      const dh = ['Pasal 24 ayat (1)–(2) UU PPh', 'PMK 192/PMK.03/2018'];
      const g = cekWajib(v, [['netoDn', 'penghasilan neto dalam negeri', true], ['tarif', 'tarif PPh']]); if (g) return salah(g, dh);
      if (v.tarif > 100) return salah('Tarif PPh tidak boleh di atas 100%.', dh);
      for (let i = 1; i <= 3; i++) {
        if (v['neto' + i] != null && !isNum(v['neto' + i])) return salah('Penghasilan neto negara ' + i + ' harus angka.', dh);
        if (v['pajak' + i] != null && (!isNum(v['pajak' + i]) || v['pajak' + i] < 0)) return salah('Pajak luar negeri negara ' + i + ' harus angka tidak negatif.', dh);
      }
      const negara = [1, 2, 3].map(function (i) { return { no: i, neto: nol(v['neto' + i]), pajak: nol(v['pajak' + i]) }; });
      const lnPositif = negara.reduce(function (s, n) { return s + Math.max(0, n.neto); }, 0);
      const pkp = bulatRibuBawah(v.netoDn + lnPositif);
      const pph = Math.round(pkp * v.tarif / 100);
      const jejak = [['PKP = ' + uang(v.netoDn) + ' + neto LN positif ' + uang(lnPositif) + ' (rugi LN tidak digabung)', uang(pkp)], ['PPh terutang = ' + angka(v.tarif) + '% × ' + uang(pkp), uang(pph)]];
      let total = 0, hangus = 0; const hasilNegara = [];
      negara.forEach(function (n) {
        if (!n.neto && !n.pajak) return;
        const batas = n.neto > 0 && pkp > 0 ? Math.round(Math.min(1, n.neto / pkp) * pph) : 0;
        const kredit = Math.min(n.pajak, batas); total += kredit; hangus += n.pajak - kredit;
        jejak.push(['Negara ' + n.no + ': batas = ' + (n.neto > 0 ? uang(n.neto) + ' ÷ ' + uang(pkp) + ' × ' + uang(pph) : 'rugi — tidak ada batas'), uang(batas)]);
        jejak.push(['Negara ' + n.no + ': kredit = min(' + uang(n.pajak) + ', ' + uang(batas) + ')', uang(kredit)]);
        hasilNegara.push(baris('Kredit negara ' + n.no + ' (batas ' + uang(batas) + ')', kredit, 'uang'));
      });
      const jumlahNegara = total;
      total = Math.min(total, pph);
      if (jumlahNegara > total) {
        jejak.push(['Jumlah kredit per negara ' + uang(jumlahNegara) + ' melebihi PPh terutang (PKP < total neto LN) → dibatasi', uang(total)]);
        hangus += jumlahNegara - total;
      }
      jejak.push(['Total kredit PPh 24', uang(total)]);
      jejak.push(['PPh setelah kredit PPh 24', uang(pph - total)]);
      const asumsi = ['Kredit dihitung per negara (per country limitation); pajak LN di atas batas tidak dapat dikreditkan maupun dibiayakan.',
        'Kerugian di luar negeri tidak dikurangkan dari penghasilan dalam negeri.',
        'PKP diasumsikan = neto DN + neto LN positif (tanpa kompensasi rugi/fasilitas lain); bukti pembayaran pajak LN dilampirkan pada SPT (lampiran 7A).'];
      const peringatan = hangus ? ['Pajak luar negeri sebesar ' + uang(hangus) + ' melebihi batas dan tidak dapat dikreditkan.'] : [];
      const hasil = [baris('Total kredit PPh 24', total, 'uang', true), baris('PKP', pkp, 'uang'), baris('PPh terutang', pph, 'uang')].concat(hasilNegara, [baris('PPh setelah kredit PPh 24', pph - total, 'uang')]);
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 15. BUT & branch profit tax ----------
  K.push({
    jenis: 'bpt', nama: 'BUT & branch profit tax', kelompok: 'C9', mvp: false,
    deskripsi: 'PPh badan BUT dan PPh 26 ayat (4) atas laba setelah pajak (20% atau tarif P3B), nihil atas bagian yang ditanamkan kembali.',
    dasarHukum: ['Pasal 26 ayat (4) UU PPh', 'PMK 14/PMK.03/2011', 'P3B terkait'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'pkp', label: 'PKP BUT', tipe: 'uang', default: 1000000000 },
      { key: 'tarifBadan', label: 'Tarif PPh badan', tipe: 'persen', default: 22, min: 0 },
      { key: 'tarifP3b', label: 'Tarif BPT menurut P3B', tipe: 'persen', default: null, bantu: 'Kosongkan untuk tarif domestik 20%; mis. Singapura 10%, Malaysia 12,5%.' },
      { key: 'ditanamKembali', label: 'Laba setelah pajak yang ditanamkan kembali di Indonesia', tipe: 'uang', default: 0, min: 0, bantu: 'Penyertaan modal pada perusahaan baru/berdiri, aktiva tetap atau tak berwujud BUT, paling lambat akhir tahun berikutnya, tidak dialihkan ≥ 2 tahun.' }
    ],
    hitung: function (v) {
      const dh = ['Pasal 26 ayat (4) UU PPh', 'PMK 14/PMK.03/2011'];
      const g = cekWajib(v, [['pkp', 'PKP BUT', true], ['tarifBadan', 'tarif PPh badan']]); if (g) return salah(g, dh);
      if (v.tarifBadan > 100) return salah('Tarif PPh badan tidak boleh di atas 100%.', dh);
      if (v.tarifP3b != null && (!isNum(v.tarifP3b) || v.tarifP3b < 0 || v.tarifP3b > 100)) return salah('Tarif P3B harus 0–100% atau dikosongkan.', dh);
      const e = cekOpsional(v, [['ditanamKembali', 'laba yang ditanamkan kembali']]); if (e) return salah(e, dh);
      const pkp = bulatRibuBawah(v.pkp);
      const pphBadan = Math.round(pkp * v.tarifBadan / 100);
      const laba = pkp - pphBadan;
      const tarif = isNum(v.tarifP3b) ? v.tarifP3b / 100 : 0.20;
      const tanam = Math.min(nol(v.ditanamKembali), Math.max(0, laba));
      const dasar = Math.max(0, laba - tanam);
      const bpt = Math.round(dasar * tarif);
      const peringatan = [];
      if (nol(v.ditanamKembali) > Math.max(0, laba)) peringatan.push('Jumlah ditanam kembali melebihi laba setelah pajak; dibatasi sebesar laba setelah pajak.');
      if (isNum(v.tarifP3b)) dh.push('P3B (tarif branch profit tax ' + angka(v.tarifP3b) + '%)');
      const jejak = [['PKP BUT', uang(pkp)], ['PPh badan = ' + angka(v.tarifBadan) + '% × ' + uang(pkp), uang(pphBadan)], ['Laba setelah pajak', uang(laba)]];
      if (tanam) jejak.push(['Ditanamkan kembali (PMK 14/2011)', '−' + uang(tanam)]);
      jejak.push(['Dasar BPT', uang(dasar)]);
      jejak.push(['BPT = ' + persen(tarif) + ' × ' + uang(dasar) + (isNum(v.tarifP3b) ? ' (tarif P3B)' : ' (tarif domestik)'), uang(bpt)]);
      const asumsi = ['Tarif P3B hanya dapat dipakai bila kantor pusat menyerahkan SKD/Form DGT yang sah (PMK 112/2025).', 'BPT bersifat final, disetor sendiri oleh BUT; dilaporkan pada lampiran 6A SPT 1771.'];
      const hasil = [baris('Branch profit tax (PPh 26 ayat (4))', bpt, 'uang', true), baris('PPh badan BUT', pphBadan, 'uang'), baris('Laba setelah pajak', laba, 'uang'), baris('Dasar BPT', dasar, 'uang'), baris('Tarif BPT', tarif, 'persen'), baris('Total beban PPh BUT', pphBadan + bpt, 'uang')];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
    }
  });

  // ---------- 16. PBB-P5L / PBB-P2 / BPHTB ----------
  K.push({
    jenis: 'pbb-bphtb', nama: 'PBB-P5L, PBB-P2, dan BPHTB', kelompok: 'B8', mvp: false,
    deskripsi: 'PBB-P5L = 0,5% × NJKP × (NJOP − NJOPTKP); PBB-P2 = tarif Perda × NJKP% × (NJOP − NJOPTKP); BPHTB = tarif × (NPOP − NPOPTKP).',
    dasarHukum: ['UU 12/1985 s.t.d.d. UU 12/1994 (PBB)', 'PP 25/2002', 'PMK 23/PMK.03/2014', 'PMK 186/2019 s.t.d.d. PMK 234/2022', 'UU 1/2022 (HKPD) Pasal 38–49'],
    statusPer: STATUS_PER, verifikasi: '◐',
    peringatan: 'Parameter PBB-P5L (NJKP 40%/20%) dan contoh Perda DKI (NJOPTKP Rp60 juta, NJKP hunian 40%/non-hunian 60%, NPOPTKP waris Rp350 juta) berasal dari pengetahuan peneliti/sumber sekunder; cek PMK 234/2022 dan Perda setempat.',
    input: [
      { key: 'jenis', label: 'Jenis pajak', tipe: 'pilihan', default: 'pbb-p5l', opsi: [
        { nilai: 'pbb-p5l', label: 'PBB-P5L (pusat: perkebunan, perhutanan, pertambangan, sektor lainnya)' },
        { nilai: 'pbb-p2', label: 'PBB-P2 (daerah: perdesaan & perkotaan)' },
        { nilai: 'bphtb', label: 'BPHTB (daerah)' }] },
      { key: 'sektor', label: 'Sektor PBB-P5L', tipe: 'pilihan', default: 'perkebunan', tampilJika: { key: 'jenis', nilai: 'pbb-p5l' }, opsi: [
        { nilai: 'perkebunan', label: 'Perkebunan (NJKP 40%)' }, { nilai: 'perhutanan', label: 'Perhutanan (NJKP 40%)' },
        { nilai: 'pertambangan', label: 'Pertambangan minerba/migas/panas bumi (NJKP 40%)' }, { nilai: 'lainnya', label: 'Sektor lainnya (NJKP 40% bila NJOP ≥ Rp1 miliar, 20% bila kurang)' }] },
      { key: 'njopBumi', label: 'NJOP bumi', tipe: 'uang', default: 50000000000, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p5l' } },
      { key: 'njopBangunan', label: 'NJOP bangunan', tipe: 'uang', default: 2000000000, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p5l' } },
      { key: 'njoptkp', label: 'NJOPTKP PBB-P5L', tipe: 'uang', default: 12000000, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p5l' }, bantu: 'Rp12.000.000 per WP (PMK 23/2014).' },
      { key: 'njopP2', label: 'NJOP bumi + bangunan (PBB-P2)', tipe: 'uang', default: 2060000000, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p2' } },
      { key: 'njoptkpP2', label: 'NJOPTKP menurut Perda', tipe: 'uang', default: 60000000, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p2' }, bantu: 'UU 1/2022: paling sedikit Rp10 juta; DKI Rp60 juta (satu objek per WP).' },
      { key: 'njkpP2', label: 'Persentase dasar pengenaan (NJKP)', tipe: 'persen', default: 40, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p2' }, bantu: 'Perda: 20%–100% (DKI: hunian 40%, non-hunian 60%).' },
      { key: 'tarifP2', label: 'Tarif PBB-P2 menurut Perda', tipe: 'persen', default: 0.5, min: 0, tampilJika: { key: 'jenis', nilai: 'pbb-p2' }, bantu: 'Paling tinggi 0,5%; lahan produksi pangan/ternak lebih rendah.' },
      { key: 'npop', label: 'NPOP (harga transaksi/nilai pasar)', tipe: 'uang', default: 1000000000, min: 0, tampilJika: { key: 'jenis', nilai: 'bphtb' } },
      { key: 'njopBphtb', label: 'NJOP PBB objek', tipe: 'uang', default: 900000000, min: 0, tampilJika: { key: 'jenis', nilai: 'bphtb' }, bantu: 'Bila NPOP lebih rendah atau tidak diketahui, dipakai NJOP.' },
      { key: 'npoptkp', label: 'NPOPTKP', tipe: 'uang', default: 80000000, min: 0, tampilJika: { key: 'jenis', nilai: 'bphtb' }, bantu: 'Paling sedikit Rp80 juta; waris/hibah wasiat keluarga satu derajat paling sedikit Rp300 juta.' },
      { key: 'tarifBphtb', label: 'Tarif BPHTB', tipe: 'persen', default: 5, min: 0, tampilJika: { key: 'jenis', nilai: 'bphtb' }, bantu: 'Paling tinggi 5%.' }
    ],
    hitung: function (v) {
      const jenis = v.jenis;
      const jejak = [], asumsi = [], peringatan = [];
      if (jenis === 'pbb-p5l') {
        const dh = ['Pasal 5–7 UU PBB', 'PP 25/2002 (NJKP)', 'PMK 23/PMK.03/2014 (NJOPTKP)', 'PMK 186/2019 s.t.d.d. PMK 234/2022'];
        if (['perkebunan', 'perhutanan', 'pertambangan', 'lainnya'].indexOf(v.sektor) < 0) return salah('Pilih sektor PBB-P5L.', dh);
        const g = cekWajib(v, [['njopBumi', 'NJOP bumi'], ['njopBangunan', 'NJOP bangunan'], ['njoptkp', 'NJOPTKP']]); if (g) return salah(g, dh);
        const njop = v.njopBumi + v.njopBangunan;
        const njkp = v.sektor === 'lainnya' && njop < 1000000000 ? 0.20 : 0.40;
        const dasar = Math.max(0, njop - v.njoptkp);
        const pbb = Math.round(dasar * njkp * 0.005);
        jejak.push(['NJOP = ' + uang(v.njopBumi) + ' + ' + uang(v.njopBangunan), uang(njop)]);
        jejak.push(['NJOP − NJOPTKP', uang(dasar)]);
        jejak.push(['NJKP ' + persen(njkp) + ' × ' + uang(dasar), uang(Math.round(dasar * njkp))]);
        jejak.push(['PBB = 0,5% × NJKP (efektif ' + persen(njkp * 0.005, 2) + ' × (NJOP − NJOPTKP))', uang(pbb)]);
        asumsi.push('NJOP bumi sektor P5L dihitung dari areal × nilai per m² (perkebunan: + standar investasi tanaman; tambang: angka kapitalisasi × hasil produksi) sesuai PMK 186/2019 s.t.d.d. PMK 234/2022.');
        asumsi.push('SPPT jatuh tempo 6 bulan sejak diterima; keterlambatan dikenai denda 2% per bulan (Ps. 11 UU PBB).');
        return keluaran({ hasil: [baris('PBB-P5L terutang', pbb, 'uang', true), baris('NJOP', njop, 'uang'), baris('NJKP', njkp, 'persen'), baris('Dasar (NJOP − NJOPTKP)', dasar, 'uang'), baris('Tarif efektif atas dasar', njkp * 0.005, 'persen')], jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
      }
      if (jenis === 'pbb-p2') {
        const dh = ['UU 1/2022 (HKPD) Pasal 38–43', 'Perda kabupaten/kota (mis. Perda DKI 1/2024)'];
        const g = cekWajib(v, [['njopP2', 'NJOP'], ['njoptkpP2', 'NJOPTKP'], ['njkpP2', 'persentase dasar pengenaan'], ['tarifP2', 'tarif PBB-P2']]); if (g) return salah(g, dh);
        if (v.njkpP2 > 100) return salah('Persentase dasar pengenaan tidak boleh di atas 100%.', dh);
        if (v.tarifP2 > 0.5) peringatan.push('Tarif PBB-P2 paling tinggi 0,5% (UU 1/2022 Ps. 41).');
        if (v.njkpP2 < 20) peringatan.push('UU 1/2022 menetapkan persentase dasar pengenaan 20%–100%.');
        const dasar = Math.max(0, v.njopP2 - v.njoptkpP2);
        const njkp = Math.round(dasar * v.njkpP2 / 100);
        const pbb = Math.round(njkp * v.tarifP2 / 100);
        jejak.push(['NJOP − NJOPTKP = ' + uang(v.njopP2) + ' − ' + uang(v.njoptkpP2), uang(dasar)]);
        jejak.push(['Dasar pengenaan ' + angka(v.njkpP2) + '% × ' + uang(dasar), uang(njkp)]);
        jejak.push(['PBB-P2 = ' + angka(v.tarifP2) + '% × ' + uang(njkp), uang(pbb)]);
        asumsi.push('Tarif, NJOPTKP, dan persentase dasar pengenaan ditetapkan Perda/Perkada masing-masing daerah; pembebasan/pengurangan daerah tidak diperhitungkan.');
        return keluaran({ hasil: [baris('PBB-P2 terutang', pbb, 'uang', true), baris('Dasar (NJOP − NJOPTKP)', dasar, 'uang'), baris('Dasar pengenaan (NJKP)', njkp, 'uang'), baris('Tarif', v.tarifP2 / 100, 'persen')], jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
      }
      if (jenis === 'bphtb') {
        const dh = ['UU 1/2022 (HKPD) Pasal 44–49', 'Perda kabupaten/kota'];
        const g = cekWajib(v, [['npop', 'NPOP'], ['npoptkp', 'NPOPTKP'], ['tarifBphtb', 'tarif BPHTB']]); if (g) return salah(g, dh);
        const e = cekOpsional(v, [['njopBphtb', 'NJOP']]); if (e) return salah(e, dh);
        if (v.tarifBphtb > 5) peringatan.push('Tarif BPHTB paling tinggi 5% (UU 1/2022 Ps. 47).');
        const njop = nol(v.njopBphtb);
        const dasarNilai = Math.max(v.npop, njop);
        if (njop > v.npop) jejak.push(['NPOP ' + uang(v.npop) + ' < NJOP → dipakai NJOP', uang(njop)]);
        else jejak.push(['NPOP (≥ NJOP ' + uang(njop) + ')', uang(v.npop)]);
        const kena = Math.max(0, dasarNilai - v.npoptkp);
        const bphtb = Math.round(kena * v.tarifBphtb / 100);
        jejak.push(['NPOP kena pajak = ' + uang(dasarNilai) + ' − NPOPTKP ' + uang(v.npoptkp), uang(kena)]);
        jejak.push(['BPHTB = ' + angka(v.tarifBphtb) + '% × ' + uang(kena), uang(bphtb)]);
        asumsi.push('Saat terutang jual beli: tanggal PPJB/akta; waris: pendaftaran peralihan hak; PPAT menandatangani akta setelah BPHTB dibayar.');
        asumsi.push('Pengurangan BPHTB oleh kepala daerah (mis. waris) tidak diperhitungkan.');
        return keluaran({ hasil: [baris('BPHTB terutang', bphtb, 'uang', true), baris('Dasar nilai (NPOP atau NJOP)', dasarNilai, 'uang'), baris('NPOP kena pajak', kena, 'uang'), baris('Tarif', v.tarifBphtb / 100, 'persen')], jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: peringatan });
      }
      return salah('Pilih jenis pajak.', []);
    }
  });

  // ---------- 17. Bea meterai ----------
  const DOKUMEN_BM = {
    perjanjian: { label: 'Surat perjanjian / keterangan / pernyataan (dan rangkapnya)', objek: true, saat: 'Saat dibubuhi tanda tangan (perjanjian) atau saat diserahkan (surat keterangan/pernyataan)', pihak: 'Masing-masing pihak atas dokumen yang diterimanya', pasal: 'Ps. 3 ayat (2) huruf a' },
    'akta-notaris': { label: 'Akta notaris beserta grosse, salinan, kutipan', objek: true, saat: 'Saat dibubuhi tanda tangan', pihak: 'Pihak yang menerima/mendapat manfaat dokumen', pasal: 'Ps. 3 ayat (2) huruf b' },
    'akta-ppat': { label: 'Akta PPAT beserta salinan dan kutipan', objek: true, saat: 'Saat dibubuhi tanda tangan', pihak: 'Pihak yang menerima/mendapat manfaat dokumen', pasal: 'Ps. 3 ayat (2) huruf c' },
    'surat-berharga': { label: 'Surat berharga (saham, obligasi, cek, bilyet giro, dll.)', objek: true, saat: 'Saat selesai dibuat', pihak: 'Pihak yang menerbitkan', pasal: 'Ps. 3 ayat (2) huruf d' },
    'transaksi-sb': { label: 'Dokumen transaksi surat berharga / kontrak berjangka', objek: true, saat: 'Saat selesai dibuat', pihak: 'Pihak yang menerima dokumen', pasal: 'Ps. 3 ayat (2) huruf e' },
    lelang: { label: 'Dokumen lelang (kutipan, minuta, salinan, grosse risalah lelang)', objek: true, saat: 'Saat diserahkan', pihak: 'Pihak yang menerima dokumen', pasal: 'Ps. 3 ayat (2) huruf f' },
    uang: { label: 'Dokumen yang menyatakan jumlah uang (kuitansi, nota, tanda terima pelunasan)', objek: true, saat: 'Saat diserahkan kepada pihak untuk siapa dokumen dibuat', pihak: 'Pihak yang menerima dokumen', pasal: 'Ps. 3 ayat (2) huruf g' },
    pengadilan: { label: 'Dokumen yang digunakan sebagai alat bukti di pengadilan', objek: true, saat: 'Saat diajukan ke pengadilan', pihak: 'Pihak yang mengajukan', pasal: 'Ps. 3 ayat (1) huruf b' },
    'bukan-objek': { label: 'Bukan objek (konosemen, ijazah, tanda terima gaji/pensiun, bukti setor pajak, dokumen BI, dll.)', objek: false, saat: '—', pihak: '—', pasal: 'Ps. 7' }
  };
  K.push({
    jenis: 'bea-meterai', nama: 'Bea meterai', kelompok: 'A5', mvp: false,
    deskripsi: 'Menentukan dokumen terutang atau tidak, bea meterai Rp10.000 per dokumen, dan sanksi 100% bila dimeteraikan kemudian.',
    dasarHukum: ['UU 10/2020 Pasal 3, 5, 7, 8, 9, 17, 18', 'PP 86/2021', 'PMK 78/2024'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'dokumen', label: 'Jenis dokumen', tipe: 'pilihan', default: 'uang', opsi: Object.keys(DOKUMEN_BM).map(function (k) { return { nilai: k, label: DOKUMEN_BM[k].label }; }) },
      { key: 'nilai', label: 'Jumlah uang yang tercantum', tipe: 'uang', default: 7000000, min: 0, tampilJika: { key: 'dokumen', nilai: 'uang' }, bantu: 'Terutang bila lebih dari Rp5.000.000.' },
      { key: 'jumlah', label: 'Jumlah dokumen/rangkap', tipe: 'angka', default: 1, min: 1, bantu: 'Setiap dokumen dan rangkap yang menjadi objek terutang Rp10.000.' },
      { key: 'kemudian', label: 'Bea meterai tidak dibayar saat terutang (pemeteraian kemudian)', tipe: 'boolean', default: false }
    ],
    hitung: function (v) {
      const dh = ['UU 10/2020 Pasal 3 dan 5'];
      const d = DOKUMEN_BM[v.dokumen]; if (!d) return salah('Pilih jenis dokumen.', dh);
      if (!isNum(v.jumlah) || v.jumlah < 1 || Math.round(v.jumlah) !== v.jumlah) return salah('Jumlah dokumen harus bilangan bulat ≥ 1.', dh);
      if (v.dokumen === 'uang') { const g = cekWajib(v, [['nilai', 'jumlah uang']]); if (g) return salah(g, dh); }
      const jejak = [['Dokumen', d.label + ' (' + d.pasal + ' UU 10/2020)']];
      let terutang = d.objek, alasan = d.objek ? 'Objek bea meterai' : 'Bukan objek bea meterai (Ps. 7 UU 10/2020)';
      if (v.dokumen === 'uang') {
        terutang = v.nilai > 5000000;
        alasan = terutang ? 'Jumlah uang ' + uang(v.nilai) + ' > Rp5.000.000' : 'Jumlah uang ' + uang(v.nilai) + ' tidak lebih dari Rp5.000.000';
      }
      jejak.push(['Status', alasan]);
      const bea = terutang ? 10000 * v.jumlah : 0;
      const sanksiBerlaku = terutang && v.kemudian === true && v.dokumen !== 'pengadilan';
      const sanksi = sanksiBerlaku ? bea : 0;
      if (terutang) jejak.push(['Bea meterai = Rp10.000 × ' + v.jumlah + ' dokumen', uang(bea)]);
      if (sanksiBerlaku) { jejak.push(['Sanksi administratif 100% (pemeteraian kemudian)', uang(sanksi)]); dh.push('UU 10/2020 Pasal 17 dan 18'); }
      jejak.push(['Jumlah dibayar', uang(bea + sanksi)]);
      const asumsi = ['Tarif tunggal Rp10.000 per dokumen tanpa memandang nilai (ambang Rp5 juta hanya untuk dokumen yang menyatakan jumlah uang).',
        'Bea meterai bukan syarat sah perjanjian; dibayar dengan meterai tempel, elektronik, teraan/komputerisasi, atau SSP.'];
      if (v.dokumen === 'pengadilan') asumsi.push('Dokumen yang semula bukan objek dan digunakan sebagai alat bukti di pengadilan dimeteraikan kemudian tanpa sanksi; dokumen objek yang belum dibayar tetap dikenai sanksi 100%.');
      if (v.kemudian === true && !terutang) asumsi.push('Dokumen tidak terutang sehingga tidak ada pemeteraian kemudian maupun sanksi.');
      asumsi.push('Daluwarsa kewajiban bea meterai 5 tahun sejak saat terutang (UU 10/2020; nomor pasal daluwarsa ◐).');
      const hasil = [
        baris('Bea meterai + sanksi', bea + sanksi, 'uang', true),
        baris('Status bea meterai', terutang ? 'Terutang' : 'Tidak terutang', 'teks'),
        baris('Bea meterai', bea, 'uang'),
        baris('Sanksi 100%', sanksi, 'uang'),
        baris('Saat terutang', terutang ? d.saat : '—', 'teks'),
        baris('Pihak terutang', terutang ? d.pihak : '—', 'teks')
      ];
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh, peringatan: [] });
    }
  });

  // =====================================================================
  // 18–19. Tambahan dari laporan peserta UKP Tingkat C (docs/PENGALAMAN-UJIAN.md, 28 Okt 2026)
  // =====================================================================
  function punya(o, k) { return typeof k === 'string' && Object.prototype.hasOwnProperty.call(o, k); }
  /** Angka bulat tanpa −0 (agar perbandingan ketat di uji dan tampilan "Rp0" konsisten). */
  function bulat(n) { return Math.round(n) + 0; }
  /** Kurs rupiah per unit valas, sampai 4 desimal tanpa nol di belakang. */
  function fmtKurs(n) { const s = angka(n, 4); return 'Rp' + (s.indexOf(',') >= 0 ? s.replace(/,?0+$/, '') : s); }
  /** Kode mata uang dari isian teks: huruf saja, maksimal 5, huruf besar; selain itu "valas". */
  function kodeValas(x) { const s = typeof x === 'string' ? x.replace(/[^A-Za-z]/g, '').slice(0, 5).toUpperCase() : ''; return s || 'valas'; }
  function labaRugi(n) { return n > 0 ? 'laba ' + uang(n) : n < 0 ? 'rugi ' + uang(-n) : 'nihil (Rp0)'; }
  function akhiranLr(n) { return n > 0 ? ' — laba' : n < 0 ? ' — rugi' : ' — nihil'; }

  // ---------- 18. Kurs KMK vs kurs tengah ----------
  const JENIS_PAJAK_KURS = {
    pph26: { label: 'PPh Pasal 26 — 20% atau tarif P3B (jasa/bunga/royalti kepada WPLN)', nama: 'PPh Pasal 26', tarif: 0.20, potong: true, wpln: true, dasar: 'Pasal 26 ayat (1) UU PPh' },
    'pph26-5': { label: 'PPh Pasal 26 ayat (2) — 5% × harga jual (penjualan saham/harta di Indonesia oleh WPLN)', nama: 'PPh Pasal 26 ayat (2)', tarif: 0.05, potong: true, wpln: true,
      catatan: 'Tarif efektif 5% = 20% × perkiraan penghasilan neto 25% dari harga jual', dasar: 'Pasal 26 ayat (2) UU PPh; KMK 434/KMK.04/1999 (perkiraan penghasilan neto 25%)' },
    'pph23-2': { label: 'PPh Pasal 23 — 2% (jasa, sewa harta selain tanah/bangunan)', nama: 'PPh Pasal 23', tarif: 0.02, potong: true, dasar: 'Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015' },
    'pph23-15': { label: 'PPh Pasal 23 — 15% (bunga, royalti, hadiah)', nama: 'PPh Pasal 23', tarif: 0.15, potong: true, dasar: 'Pasal 23 ayat (1) huruf a UU PPh' },
    'pph42-10': { label: 'PPh Pasal 4 ayat (2) — 10% final (sewa tanah/bangunan)', nama: 'PPh Pasal 4 ayat (2)', tarif: 0.10, potong: true, final: true, dasar: 'Pasal 4 ayat (2) UU PPh; PP 34/2017' },
    'pph15-264': { label: 'PPh Pasal 15 — 2,64% final × peredaran bruto (pelayaran/penerbangan luar negeri)', nama: 'PPh Pasal 15', tarif: 0.0264, potong: true, final: true, wpln: true,
      catatan: 'Tarif efektif 2,64% final atas peredaran bruto berdasarkan norma penghasilan neto khusus perusahaan pelayaran/penerbangan luar negeri', dasar: 'Pasal 15 UU PPh; KMK 417/KMK.04/1996' },
    ppn: { label: 'PPN 12% (DPP nilai lain 11/12 bila dipilih)', nama: 'PPN', tarif: 0.12, potong: false, dasar: 'Pasal 7 ayat (1) UU PPN; PMK 131/2024' },
    'pph22-25': { label: 'PPh Pasal 22 impor — 2,5% (importir ber-API)', nama: 'PPh Pasal 22 impor', tarif: 0.025, potong: false, impor: true, dasar: 'Pasal 22 ayat (1) UU PPh; PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022' },
    'pph22-75': { label: 'PPh Pasal 22 impor — 7,5% (importir tanpa API)', nama: 'PPh Pasal 22 impor', tarif: 0.075, potong: false, impor: true, dasar: 'Pasal 22 ayat (1) UU PPh; PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022' },
    'pph22-10': { label: 'PPh Pasal 22 impor — 10% (barang tertentu Lampiran PMK 34/2017)', nama: 'PPh Pasal 22 impor', tarif: 0.10, potong: false, impor: true, ragu: true, dasar: 'Pasal 22 ayat (1) UU PPh; PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022' }
  };
  const JENIS_KURS_POTONG = Object.keys(JENIS_PAJAK_KURS).filter(function (k) { return JENIS_PAJAK_KURS[k].potong; });
  const JENIS_KURS_IMPOR = Object.keys(JENIS_PAJAK_KURS).filter(function (k) { return JENIS_PAJAK_KURS[k].impor === true; });
  K.push({
    jenis: 'kurs', nama: 'Kurs KMK vs kurs tengah: DPP pajak dan selisih kurs', kelompok: 'B7', mvp: false,
    deskripsi: 'DPP dan pajak dengan kurs KMK (termasuk bea masuk impor dan gross-up), nilai pembukuan dengan kurs tengah BI, selisih kurs atas PPh dipotong/PPN ditagih valas, belum terealisasi (akhir periode), dan terealisasi (pembayaran) beserta laba/rugi dan perlakuan fiskalnya.',
    dasarHukum: ['Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh', 'PP 94/2010 Pasal 9', 'KMK nilai kurs mingguan (Rabu–Selasa) sebagai dasar pelunasan BM, PPN, PPnBM, dan PPh', 'PP 44/2022 Pasal 21 (kurs PPN saat faktur pajak seharusnya dibuat)', 'PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing'],
    statusPer: STATUS_PER, verifikasi: '✅',
    input: [
      { key: 'nilaiValas', label: 'Nilai transaksi dalam valuta asing (bukan rupiah)', tipe: 'uang', default: 10000, min: 0, bantu: 'Jumlah bruto (tidak termasuk PPN) dalam mata uang asing, mis. 10.000 untuk USD 10.000.' },
      { key: 'mataUang', label: 'Kode mata uang', tipe: 'teks', default: 'USD', bantu: 'Mis. USD, SGD, EUR, JPY (hanya label).' },
      { key: 'jenisPajak', label: 'Jenis pajak', tipe: 'pilihan', default: 'pph26', opsi: Object.keys(JENIS_PAJAK_KURS).map(function (k) { return { nilai: k, label: JENIS_PAJAK_KURS[k].label }; }) },
      { key: 'dppNilaiLain', label: 'DPP nilai lain 11/12 (penyerahan non-mewah)', tipe: 'boolean', default: true, tampilJika: { key: 'jenisPajak', nilai: 'ppn' }, bantu: 'Matikan untuk barang mewah: PPN 12% × harga penuh.' },
      { key: 'tarifP3b', label: 'Tarif P3B', tipe: 'persen', default: null, min: 0, tampilJika: { key: 'jenisPajak', nilai: 'pph26' }, bantu: 'Kosongkan untuk tarif domestik 20%; isi bila SKD/DGT Form sah (mis. royalti Singapura 10%).' },
      { key: 'grossUp', label: 'PPh ditanggung pembayar (gross-up)', tipe: 'boolean', default: false, tampilJika: { key: 'jenisPajak', nilai: JENIS_KURS_POTONG }, bantu: 'Nilai valas diisi sebagai jumlah neto yang diterima; DPP = neto ÷ (1 − tarif) dan PPh dibayar pembayar dalam rupiah.' },
      { key: 'ppnValas', label: 'PPN ditagih dalam valas', tipe: 'boolean', default: false, tampilJika: { key: 'jenisPajak', nilai: 'ppn' }, bantu: 'Nyalakan bila tagihan valas memuat PPN (mis. USD 10.000 + PPN USD 1.100): bagian PPN valas menimbulkan selisih kurs terhadap PPN rupiah di faktur.' },
      { key: 'beaMasuk', label: 'Tarif bea masuk (% dari nilai pabean)', tipe: 'persen', default: null, min: 0, tampilJika: { key: 'jenisPajak', nilai: JENIS_KURS_IMPOR }, bantu: 'Kosongkan bila bebas bea masuk. Nilai impor (DPP PPh 22) = nilai pabean CIF + bea masuk, keduanya dengan kurs KMK tanggal PIB.' },
      { key: 'posisi', label: 'Pos moneter valas yang timbul', tipe: 'pilihan', default: 'utang', opsi: [
        { nilai: 'utang', label: 'Utang valas (pembeli jasa/barang, pemotong PPh, importir)' },
        { nilai: 'piutang', label: 'Piutang valas (penjual/penerima penghasilan)' }] },
      { key: 'kursKmk', label: 'Kurs KMK yang berlaku: PPh saat terutang/pemotongan, PPN saat faktur pajak seharusnya dibuat, impor tanggal PIB (Rp per 1 unit)', tipe: 'uang', default: 16250, min: 0, bantu: 'Kurs pajak mingguan (berlaku Rabu–Selasa), mis. 16.250 atau 1,0567. PPh dipotong/dipungut: minggu saat penghasilan dibayar, disediakan untuk dibayar, atau jatuh tempo (mana lebih dahulu); PPN: minggu saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21); impor: tanggal PIB. KMK mengutip JPY per 100 yen — bagi 100.' },
      { key: 'kursTengah', label: 'Kurs tengah BI saat pengakuan transaksi (Rp)', tipe: 'uang', default: 16180, min: 0, bantu: 'Kurs pembukuan tanggal transaksi. Kosongkan bila pembukuan memakai kurs KMK.' },
      { key: 'kursAkhir', label: 'Kurs tengah BI akhir periode/tanggal neraca (Rp)', tipe: 'uang', default: 16420, min: 0, bantu: 'Kosongkan bila pos moneter dilunasi sebelum akhir periode.' },
      { key: 'kursBayar', label: 'Kurs realisasi saat pembayaran/pelunasan (Rp)', tipe: 'uang', default: 16300, min: 0, bantu: 'Kosongkan bila belum dilunasi.' }
    ],
    hitung: function (v) {
      const dh = ['Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh', 'PP 94/2010 Pasal 9', 'KMK nilai kurs mingguan (Rabu–Selasa)', 'PP 44/2022 Pasal 21'];
      const g = cekWajib(v, [['nilaiValas', 'nilai valas'], ['kursKmk', 'kurs KMK']]); if (g) return salah(g, dh);
      if (!(v.kursKmk > 0)) return salah('Kurs KMK harus lebih dari nol.', dh);
      const OPSIONAL = [['kursTengah', 'kurs tengah BI saat pengakuan'], ['kursAkhir', 'kurs tengah BI akhir periode'], ['kursBayar', 'kurs realisasi saat pembayaran']];
      const e = cekOpsional(v, OPSIONAL); if (e) return salah(e, dh);
      for (let i = 0; i < OPSIONAL.length; i++) if (v[OPSIONAL[i][0]] === 0) return salah(kapital(OPSIONAL[i][1]) + ' harus lebih dari nol atau dikosongkan.', dh);
      if (!punya(JENIS_PAJAK_KURS, v.jenisPajak)) return salah('Pilih jenis pajak.', dh);
      if (v.posisi !== 'utang' && v.posisi !== 'piutang') return salah('Pilih posisi pos moneter valas (utang atau piutang).', dh);
      const jp = JENIS_PAJAK_KURS[v.jenisPajak];
      const pakaiP3b = v.jenisPajak === 'pph26' && v.tarifP3b != null && v.tarifP3b !== '';
      if (pakaiP3b && (!isNum(v.tarifP3b) || v.tarifP3b < 0 || v.tarifP3b > 100)) return salah('Tarif P3B harus 0–100% atau dikosongkan.', dh);
      const pakaiBm = jp.impor === true && v.beaMasuk != null && v.beaMasuk !== '';
      if (pakaiBm && (!isNum(v.beaMasuk) || v.beaMasuk < 0 || v.beaMasuk > 500)) return salah('Tarif bea masuk harus 0–500% atau dikosongkan.', dh);

      const mu = kodeValas(v.mataUang), valas = v.nilaiValas, kmk = v.kursKmk, utang = v.posisi === 'utang';
      const adaTengah = isNum(v.kursTengah), adaAkhir = isNum(v.kursAkhir), adaBayar = isNum(v.kursBayar);
      const kursBuku = adaTengah ? v.kursTengah : kmk;
      const ppn = v.jenisPajak === 'ppn', nilaiLain = ppn && v.dppNilaiLain !== false;
      const tarif = pakaiP3b ? v.tarifP3b / 100 : jp.tarif;
      const grossUp = jp.potong === true && v.grossUp === true;   // sakelar diabaikan untuk PPN/PPh 22 impor
      if (grossUp && !(tarif < 1)) return salah('Gross-up memerlukan tarif PPh di bawah 100%.', dh);
      const potongValas = jp.potong === true && !grossUp;         // PPh menggantikan sebagian pos valas
      const ppnValas = ppn && v.ppnValas === true;
      const bm = pakaiBm ? v.beaMasuk / 100 : 0;
      const arah = utang ? -1 : 1;   // kurs naik: utang → rugi, piutang → laba
      const dppDari = function (n) { return nilaiLain ? bulat(n * 11 / 12) : grossUp ? bulat(n / (1 - tarif)) : n + bulat(n * bm); };
      const pajakAtas = function (n) { return ppn ? bulat(n * (nilaiLain ? 11 : 12) / 100) : bulat(dppDari(n) * tarif); };
      const sv = function (n) { return mu + ' ' + angka(n); };

      // 1) Sisi pajak: kurs KMK
      const nilaiKmk = bulat(valas * kmk);
      const bmRp = bulat(nilaiKmk * bm);
      const dpp = dppDari(nilaiKmk);
      const pajak = pajakAtas(nilaiKmk);
      const namaPajak = ppn ? (nilaiLain ? 'PPN 12% × DPP nilai lain 11/12' : 'PPN 12% × harga penuh') : jp.nama + ' ' + persen(tarif) + (pakaiP3b || grossUp ? ' (' + [pakaiP3b ? 'tarif P3B' : '', grossUp ? 'gross-up' : ''].filter(Boolean).join(', ') + ')' : '');
      const momenKurs = ppn ? 'saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21)'
        : jp.impor ? 'tanggal PIB (pemberitahuan impor barang)'
        : 'saat terutang/pemotongan: penghasilan dibayar, disediakan untuk dibayar, atau jatuh tempo — mana lebih dahulu';
      // 2) Sisi pembukuan: kurs tengah BI
      const nilaiBuku = bulat(valas * kursBuku);
      const pajakBuku = pajakAtas(nilaiBuku);
      const selisihTransaksi = nilaiKmk - nilaiBuku;
      // 3) Selisih kurs diukur dengan kurs buku. Kurs KMK hanya masuk pada bagian valas yang dilunasi dengan pajak rupiah:
      //    PPh dipotong (pos valas berkurang) atau PPN ditagih valas (pos valas bertambah) → pajak (KMK) − bagian valas (kurs buku).
      const selisihPph = potongValas ? bulat(arah * (pajak - pajakBuku)) : 0;
      const selisihPpn = ppnValas ? bulat(-arah * (pajak - pajakBuku)) : 0;
      const valasPajak = potongValas ? valas * tarif : ppnValas ? valas * (nilaiLain ? 11 : 12) / 100 : 0;
      const valasPos = potongValas ? Math.round((valas - valasPajak) * 1e6) / 1e6 : ppnValas ? Math.round((valas + valasPajak) * 1e6) / 1e6 : valas;
      const kursDasarBayar = adaAkhir ? v.kursAkhir : kursBuku;
      const belum = adaAkhir ? bulat(arah * valasPos * (v.kursAkhir - kursBuku)) : null;
      const realisasi = adaBayar ? bulat(arah * valasPos * (v.kursBayar - kursDasarBayar)) : null;
      const adaSelisih = potongValas || ppnValas || adaAkhir || adaBayar;
      const total = bulat(selisihPph + selisihPpn + nol(belum) + nol(realisasi));
      const koreksiFinal = jp.final === true && !utang;

      const jejak = [['Jenis pajak', namaPajak], ['Nilai rupiah = ' + sv(valas) + ' × kurs KMK ' + fmtKurs(kmk), uang(nilaiKmk)],
        ['Kurs KMK (mingguan, berlaku Rabu–Selasa) dipakai pada', momenKurs]];
      if (jp.catatan) jejak.push(['Tarif ' + persen(tarif), jp.catatan]);
      if (nilaiLain) jejak.push(['DPP nilai lain = 11/12 × ' + uang(nilaiKmk), uang(dpp)]);
      if (pakaiBm) {
        jejak.push(['Bea masuk = ' + persen(bm) + ' × nilai pabean ' + uang(nilaiKmk), uang(bmRp)]);
        jejak.push(['Nilai impor (DPP PPh 22) = nilai pabean ' + uang(nilaiKmk) + ' + bea masuk ' + uang(bmRp), uang(dpp)]);
      }
      if (grossUp) jejak.push(['DPP gross-up = neto ' + uang(nilaiKmk) + ' ÷ (1 − ' + persen(tarif) + ')', uang(dpp)]);
      jejak.push([namaPajak + ' = ' + (ppn ? '12% × ' + uang(dpp) + (nilaiLain ? ' (efektif 11% × ' + uang(nilaiKmk) + ')' : '') : persen(tarif) + ' × ' + uang(dpp)), uang(pajak)]);
      if (adaTengah && v.kursTengah !== kmk) jejak.push(['Pengecoh: pajak bila keliru memakai kurs tengah ' + fmtKurs(v.kursTengah), uang(pajakBuku)]);
      if (adaBayar && v.kursBayar !== kmk) jejak.push(['Pengecoh: pajak bila keliru memakai kurs tanggal bayar ' + fmtKurs(v.kursBayar), uang(pajakAtas(bulat(valas * v.kursBayar)))]);
      jejak.push(['Nilai pembukuan = ' + sv(valas) + ' × ' + (adaTengah ? 'kurs tengah BI ' : 'kurs KMK (kurs tengah kosong) ') + fmtKurs(kursBuku), uang(nilaiBuku)]);
      jejak.push(['Selisih nilai transaksi (kurs KMK − kurs tengah): bahan ekualisasi, bukan laba/rugi', uang(selisihTransaksi)]);
      if (potongValas) jejak.push(['Selisih kurs atas PPh dipotong = pajak (kurs KMK) − bagian valas (kurs buku): ' + (utang ? 'utang PPh rupiah ' : 'kredit/PPh dibayar rupiah ') + uang(pajak) + ' vs bagian ' + v.posisi + ' valas yang digantikan ' + uang(pajakBuku), labaRugi(selisihPph)]);
      if (grossUp) jejak.push(['PPh ditanggung pembayar (gross-up) dibayar dari kas rupiah, tidak menggantikan bagian ' + v.posisi + ' valas', 'tanpa selisih kurs atas PPh']);
      if (ppnValas) jejak.push(['Selisih kurs atas PPN ditagih valas ' + sv(valasPajak) + ' = bagian valas (kurs buku) ' + uang(pajakBuku) + ' vs ' + (utang ? 'PPN masukan' : 'PPN keluaran') + ' rupiah (kurs KMK) ' + uang(pajak), labaRugi(selisihPpn)]);
      jejak.push(['Penyetoran/pengkreditan pajak rupiah ' + uang(pajak), 'tanpa selisih kurs (pajak sudah dalam rupiah)']);
      jejak.push(['Pos moneter ' + v.posisi + ' valas' + (potongValas ? ' = ' + sv(valas) + ' − ' + persen(tarif) + ' PPh dipotong' : ppnValas ? ' = ' + sv(valas) + ' + PPN ditagih valas' : grossUp ? ' (neto penuh; PPh ditanggung pembayar)' : ''), sv(valasPos) + ' = ' + uang(bulat(valasPos * kursBuku))]);
      if (adaAkhir) jejak.push(['Belum terealisasi (penjabaran akhir periode) = ' + sv(valasPos) + ' × (' + fmtKurs(v.kursAkhir) + ' − ' + fmtKurs(kursBuku) + ')', labaRugi(belum)]);
      if (adaBayar) jejak.push(['Terealisasi saat pembayaran = ' + sv(valasPos) + ' × (' + fmtKurs(v.kursBayar) + ' − ' + fmtKurs(kursDasarBayar) + ')' + (adaAkhir ? ' (dari kurs akhir periode)' : ' (dari kurs pengakuan)'), labaRugi(realisasi)]);
      if (adaSelisih) jejak.push(['Total selisih kurs', labaRugi(total)]);
      if (koreksiFinal) {
        jejak.push(['Perlakuan fiskal', 'Selisih kurs atas penghasilan yang dikenai PPh final tidak diperhitungkan dalam PKP (PP 94/2010 Pasal 9 ayat (2))']);
        if (total) jejak.push(['Koreksi fiskal ' + (total > 0 ? 'negatif' : 'positif') + ' atas selisih kurs', uang(Math.abs(total))]);
      } else {
        jejak.push(['Perlakuan fiskal', 'Laba selisih kurs = penghasilan (Pasal 4 ayat (1) huruf l); rugi = biaya (Pasal 6 ayat (1) huruf e); diakui mengikuti pembukuan taat asas (PP 94/2010 Pasal 9) — tanpa koreksi fiskal']);
      }

      const asumsi = ['Kurs pajak: DPP dan pajak atas transaksi valas dikonversi dengan kurs KMK (kurs pajak mingguan, berlaku Rabu–Selasa). PPh dipotong/dipungut memakai kurs KMK saat terutang/pemotongan, yaitu saat penghasilan dibayar, disediakan untuk dibayar, atau jatuh tempo, mana yang lebih dahulu; PPN memakai kurs KMK saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21); impor (bea masuk dan PPh 22) memakai kurs KMK pada tanggal PIB. Kurs tengah BI dan kurs tanggal pembayaran tidak dipakai untuk menghitung pajak.',
        'Pembukuan (PSAK 221, eks-PSAK 10): transaksi dicatat dengan kurs tengah BI tanggal transaksi; pos moneter valas dijabarkan dengan kurs tengah BI akhir periode (selisih belum terealisasi); saat pelunasan timbul selisih terealisasi. Pos nonmoneter tidak dijabarkan ulang.',
        'Selisih kurs diukur dengan kurs pembukuan (kurs tengah BI saat pengakuan, kurs akhir periode, dan kurs realisasi). Kurs KMK masuk ke selisih kurs hanya pada bagian valas yang dilunasi dengan pajak rupiah (PPh dipotong dari pembayaran valas atau PPN ditagih dalam valas): selisih = pajak (kurs KMK) − bagian valas (kurs buku). Saat pajak rupiah disetor atau dikreditkan tidak ada selisih kurs.',
        'Kurs diisi dalam rupiah per 1 unit valas.'];
      if (potongValas) asumsi.push('PPh dipotong dari pembayaran valas (tidak di-gross-up): kewajiban/kredit PPh dicatat dalam rupiah sebesar pajak dengan kurs KMK, sehingga bagian valas yang digantikan (kurs buku) menimbulkan selisih kurs pada saat pemotongan. Bila PPh ditanggung pembayar, nyalakan sakelar gross-up.');
      if (grossUp) asumsi.push('Gross-up: nilai valas = jumlah neto yang diterima penerima penghasilan; DPP = neto ÷ (1 − tarif) dengan kurs KMK dan PPh = tarif × DPP dibayar pembayar dalam rupiah, sehingga pos moneter = neto penuh dan tidak ada selisih kurs atas PPh. PPh yang sekadar ditanggung tanpa diperjanjikan sebagai gross-up tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h UU PPh).');
      if (ppn && !ppnValas) asumsi.push('PPN pada faktur dihitung dengan kurs KMK serta ditagih dan dilunasi dalam rupiah, sehingga PPN tidak menimbulkan selisih kurs; pos moneter valas = harga. Selisih DPP faktur vs pendapatan/beban buku menjadi bahan ekualisasi PPN.');
      if (ppnValas) asumsi.push('PPN ditagih dalam valas: tagihan memuat PPN ' + (nilaiLain ? '11% (12% × 11/12)' : '12%') + ' × harga dalam valas, sedangkan yang disetor/dikreditkan adalah PPN rupiah di faktur pajak (kurs KMK). Selisih PPN rupiah dengan bagian PPN valas (kurs buku) diakui sebagai selisih kurs saat pengakuan; pos moneter = harga + PPN valas dijabarkan dan dilunasi dengan kurs buku. Selisih DPP faktur vs pendapatan/beban buku tetap menjadi bahan ekualisasi PPN.');
      if (jp.impor) asumsi.push('Nilai impor (DPP PPh 22) = nilai pabean CIF + bea masuk' + (pakaiBm ? ' (' + persen(bm) + ' × nilai pabean)' : ' (tarif bea masuk kosong → dianggap nihil)') + ', keduanya dengan kurs KMK tanggal PIB; cukai dan pungutan kepabeanan lain tidak dihitung. Nilai valas dianggap nilai pabean CIF yang sama dengan utang kepada pemasok; bea masuk dan PPh 22 dibayar dalam rupiah sehingga tidak menimbulkan selisih kurs.');
      if (v.jenisPajak === 'pph26-5') asumsi.push('PPh Pasal 26 ayat (2): 20% × perkiraan penghasilan neto 25% × harga jual = 5% × harga jual (penjualan saham perusahaan Indonesia nonbursa atau harta di Indonesia oleh WPLN). Banyak P3B memberi hak pemajakan capital gain kepada negara domisili (Pasal 13 P3B); bila SKD/DGT Form sah, pemotongan dapat nihil — tidak dihitung di sini.');
      if (v.jenisPajak === 'pph15-264') asumsi.push('PPh Pasal 15 perusahaan pelayaran/penerbangan luar negeri: 2,64% × peredaran bruto (imbalan pengangkutan dari pelabuhan Indonesia), bersifat final; dipotong pencarter/pemberi penghasilan atau disetor sendiri oleh BUT.');
      if (!adaTengah) asumsi.push('Kurs tengah BI saat pengakuan tidak diisi: pembukuan diasumsikan memakai kurs KMK sehingga selisih nilai transaksi nihil.');
      if (!adaAkhir && adaBayar) asumsi.push('Kurs akhir periode tidak diisi: pelunasan dianggap terjadi pada periode yang sama, sehingga selisih terealisasi dihitung dari kurs pengakuan.');
      if (!adaBayar) asumsi.push('Kurs pembayaran tidak diisi: pos moneter belum dilunasi; selisih kurs terealisasi belum dihitung.');
      asumsi.push('Selisih kurs diakui fiskal mengikuti sistem pembukuan yang dianut secara taat asas (PP 94/2010 Pasal 9); Wajib Pajak yang diizinkan membukukan dalam bahasa Inggris dan dolar AS memakai perlakuan berbeda.');

      const peringatan = [];
      if (jp.ragu) peringatan.push('Tarif PPh 22 impor 10% untuk barang tertentu (Lampiran PMK 34/2017) bertanda ◐: belum dicek ke teks lampiran resmi; cek lampiran barangnya.');
      if (!utang && jp.wpln) peringatan.push(jp.nama + ' dipotong dari penghasilan WPLN; posisi piutang menggambarkan sisi penerima dan hanya ilustrasi.');
      if (!utang && jp.impor) peringatan.push('PPh Pasal 22 impor dipungut dari importir (posisi utang kepada pemasok); posisi piutang tidak lazim dan hanya ilustrasi.');

      const hasil = [
        baris('Pajak terutang (kurs KMK): ' + namaPajak, pajak, 'uang', true),
        baris('DPP rupiah (kurs KMK)' + (pakaiBm ? ': nilai impor = CIF + bea masuk' : grossUp ? ': gross-up neto ÷ (1 − tarif)' : ''), dpp, 'uang')
      ];
      if (pakaiBm) hasil.push(baris('Bea masuk (kurs KMK tanggal PIB)', bmRp, 'uang'));
      hasil.push(baris('Nilai pembukuan (' + (adaTengah ? 'kurs tengah BI' : 'kurs tengah kosong → kurs KMK') + ')', nilaiBuku, 'uang'),
        baris('Selisih nilai transaksi: kurs KMK − kurs tengah', selisihTransaksi, 'uang'));
      if (potongValas) hasil.push(baris('Selisih kurs atas PPh dipotong' + akhiranLr(selisihPph), selisihPph, 'uang'));
      if (ppnValas) hasil.push(baris('Selisih kurs atas PPN ditagih valas' + akhiranLr(selisihPpn), selisihPpn, 'uang'));
      if (adaAkhir) hasil.push(baris('Selisih kurs belum terealisasi akhir periode' + akhiranLr(belum), belum, 'uang'));
      if (adaBayar) hasil.push(baris('Selisih kurs terealisasi saat pembayaran' + akhiranLr(realisasi), realisasi, 'uang'));
      if (adaSelisih) hasil.push(baris('Total selisih kurs' + akhiranLr(total) + (koreksiFinal && total ? ' (dikoreksi fiskal)' : ''), total, 'uang'));
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh.concat([jp.dasar], pakaiBm ? ['UU Kepabeanan (nilai pabean sebagai dasar bea masuk)'] : [], ['PSAK 221 (eks-PSAK 10)']), peringatan: peringatan });
    }
  });

  // ---------- 19. Top-up tax pajak minimum global ----------
  K.push({
    jenis: 'gmt', nama: 'Top-up tax pajak minimum global (GloBE, PMK 136/2024)', kelompok: 'C9', mvp: false,
    deskripsi: 'Uji ambang €750 juta, ETR yurisdiksi, top-up percentage, substance-based income exclusion (SBIE), excess profit, dan top-up tax yurisdiksi setelah QDMTT.',
    dasarHukum: ['PMK 136/2024 (pajak minimum global)', 'PER-6/PJ/2026', 'OECD GloBE Model Rules Pasal 5.2, 5.3, 5.5, dan 9.2'],
    statusPer: STATUS_PER, verifikasi: '◐',
    peringatan: 'Persentase SBIE transisi (gaji 9,6/9,4/9,2/9,0/8,2% dan aset berwujud 7,6/7,4/7,2/7,0/6,6% untuk 2025–2029) diambil dari tabel OECD GloBE Model Rules Pasal 9.2.1–9.2.2; angka ini belum dicek ke teks PMK 136/2024. Mulai 2029 penurunannya 0,8 poin (gaji) dan 0,4 poin (aset), bukan 0,2 poin. Uji de minimis disederhanakan (rata-rata tiga tahun diisi langsung).',
    input: [
      { key: 'pendapatanGrup', label: 'Pendapatan laporan keuangan konsolidasi grup PMN (EUR)', tipe: 'uang', default: 900000000, min: 0, bantu: 'Ambang: ≥ €750 juta dalam sekurang-kurangnya 2 dari 4 tahun pajak sebelumnya.' },
      { key: 'tahun', label: 'Tahun pajak (persentase SBIE transisi)', tipe: 'pilihan', default: '2025', opsi: Object.keys(GLOBE.sbieTransisi).map(function (t) {
        const p = GLOBE.sbieTransisi[t]; return { nilai: t, label: t + ' — gaji ' + persen(p.gaji) + ', aset berwujud ' + persen(p.aset) }; }) },
      { key: 'globeIncome', label: 'Laba GloBE neto (GloBE income) yurisdiksi', tipe: 'uang', default: 200000000000, bantu: 'Jumlah seluruh entitas konstituen di yurisdiksi; negatif = rugi GloBE neto.' },
      { key: 'coveredTaxes', label: 'Pajak tercakup disesuaikan (covered taxes) yurisdiksi', tipe: 'uang', default: 20000000000, min: 0 },
      { key: 'gaji', label: 'Biaya gaji memenuhi syarat (eligible payroll costs)', tipe: 'uang', default: 50000000000, min: 0, bantu: 'Kosongkan/nol bila tidak memilih SBIE.' },
      { key: 'aset', label: 'Nilai tercatat aset berwujud memenuhi syarat (eligible tangible assets)', tipe: 'uang', default: 100000000000, min: 0 },
      { key: 'qdmtt', label: 'QDMTT (DMTT) yang sudah dibayar/terutang di yurisdiksi', tipe: 'uang', default: 0, min: 0, bantu: 'Dikurangkan dari top-up tax yurisdiksi (mis. DMTT Indonesia).' },
      { key: 'porsiIIR', label: 'Porsi kepemilikan entitas induk (untuk alokasi IIR)', tipe: 'persen', default: null, min: 0, bantu: 'Opsional, 0–100%. IIR yang dialokasikan ke entitas induk = top-up tax × porsi (penyederhanaan inclusion ratio).' },
      { key: 'deMinimis', label: 'Pilih pengecualian de minimis', tipe: 'boolean', default: false, bantu: 'Rata-rata pendapatan GloBE < €10 juta dan rata-rata GloBE income < €1 juta → top-up yurisdiksi nol.' },
      { key: 'pendapatanYurisdiksi', label: 'Rata-rata pendapatan GloBE yurisdiksi 3 tahun (EUR)', tipe: 'uang', default: 8000000, min: 0, tampilJika: { key: 'deMinimis', nilai: true } },
      { key: 'labaYurisdiksi', label: 'Rata-rata laba/rugi GloBE yurisdiksi 3 tahun (EUR)', tipe: 'uang', default: 600000, tampilJika: { key: 'deMinimis', nilai: true }, bantu: 'Negatif = rugi.' }
    ],
    hitung: function (v) {
      const dh = ['PMK 136/2024', 'OECD GloBE Model Rules Pasal 5.2 (top-up percentage dan top-up tax yurisdiksi)', 'Pasal 5.3 (SBIE)'];
      const g = cekWajib(v, [['pendapatanGrup', 'pendapatan konsolidasi grup'], ['globeIncome', 'GloBE income', true], ['coveredTaxes', 'covered taxes']]); if (g) return salah(g, dh);
      const e = cekOpsional(v, [['gaji', 'biaya gaji memenuhi syarat'], ['aset', 'nilai aset berwujud memenuhi syarat'], ['qdmtt', 'QDMTT']]); if (e) return salah(e, dh);
      if (!punya(GLOBE.sbieTransisi, v.tahun)) return salah('Pilih tahun pajak 2025–2029.', dh);
      const deMin = v.deMinimis === true;
      if (deMin) { const d = cekWajib(v, [['pendapatanYurisdiksi', 'rata-rata pendapatan GloBE yurisdiksi'], ['labaYurisdiksi', 'rata-rata GloBE income yurisdiksi', true]]); if (d) return salah(d, dh); }
      const adaPorsi = v.porsiIIR != null && v.porsiIIR !== '';
      if (adaPorsi && (!isNum(v.porsiIIR) || v.porsiIIR < 0 || v.porsiIIR > 100)) return salah('Porsi kepemilikan entitas induk harus 0–100% atau dikosongkan.', dh);

      const eur = function (n) { return '€' + angka(n); };
      const p = GLOBE.sbieTransisi[v.tahun], min = GLOBE.tarifMinimum;
      const income = v.globeIncome, taxes = v.coveredTaxes, qdmtt = nol(v.qdmtt);
      const dalamCakupan = v.pendapatanGrup >= GLOBE.ambangEur;
      const sbieGaji = bulat(nol(v.gaji) * p.gaji), sbieAset = bulat(nol(v.aset) * p.aset), sbie = sbieGaji + sbieAset;
      const deMinOk = deMin && v.pendapatanYurisdiksi < GLOBE.deMinimisPendapatanEur && v.labaYurisdiksi < GLOBE.deMinimisLabaEur;
      const adaLaba = income > 0;
      // ETR tidak dibulatkan; top-up dihitung dari pembilang (15 × income − 100 × taxes) agar tidak ada galat pembulatan.
      const minPersen = Math.round(min * 10000) / 100;   // 15
      const pembilang = adaLaba ? Math.max(0, minPersen * income - 100 * taxes) : 0;
      const etr = adaLaba ? taxes / income : null;
      const pctTopUp = adaLaba ? pembilang / (100 * income) : 0;
      const excess = adaLaba ? Math.max(0, income - sbie) : 0;
      const topUpAwal = adaLaba ? bulat(excess * pembilang / (100 * income)) : 0;
      const setelahQ = Math.max(0, topUpAwal - qdmtt);
      let topUp = setelahQ, ket = null;
      if (!dalamCakupan) { topUp = 0; ket = 'Grup di bawah ambang €750 juta: tidak dalam cakupan pajak minimum global; angka ETR/top-up hanya ilustrasi.'; }
      else if (!adaLaba) ket = income === 0 ? 'GloBE income nol: ETR tidak dapat dihitung (pembagi nol); tidak ada top-up tax.' : 'Rugi GloBE neto: tidak ada ETR dan tidak ada top-up tax.';
      else if (deMinOk) { topUp = 0; ket = 'De minimis dipilih dan terpenuhi: top-up tax yurisdiksi dianggap nol (Pasal 5.5).'; }
      const porsi = adaPorsi ? v.porsiIIR / 100 : null;
      const iir = adaPorsi ? bulat(topUp * porsi) : null;

      const jejak = [['Ambang: pendapatan konsolidasi ' + eur(v.pendapatanGrup) + (dalamCakupan ? ' ≥ ' : ' < ') + eur(GLOBE.ambangEur), dalamCakupan ? 'dalam cakupan' : 'di luar cakupan']];
      if (adaLaba) {
        jejak.push(['ETR = covered taxes ÷ GloBE income = ' + uang(taxes) + ' ÷ ' + uang(income), persen(etr, 2)]);
        jejak.push(['Top-up percentage = maks(0; 15% − ' + persen(etr, 2) + ')', persen(pctTopUp, 2)]);
      } else {
        jejak.push(['ETR = ' + uang(taxes) + ' ÷ ' + uang(income), income === 0 ? 'tidak terdefinisi (pembagi nol)' : 'tidak dihitung (rugi GloBE neto)']);
      }
      jejak.push(['SBIE gaji = ' + persen(p.gaji) + ' × ' + uang(nol(v.gaji)) + ' (tahun ' + v.tahun + ')', uang(sbieGaji)]);
      jejak.push(['SBIE aset berwujud = ' + persen(p.aset) + ' × ' + uang(nol(v.aset)), uang(sbieAset)]);
      jejak.push(['SBIE total', uang(sbie)]);
      if (adaLaba) {
        jejak.push(['Excess profit = maks(0; ' + uang(income) + ' − ' + uang(sbie) + ')', uang(excess)]);
        jejak.push(['Top-up = ' + persen(pctTopUp, 2) + ' × ' + uang(excess), uang(topUpAwal)]);
        if (qdmtt) jejak.push(['Dikurangi QDMTT', '−' + uang(Math.min(qdmtt, topUpAwal)) + (qdmtt > topUpAwal ? ' (dibatasi; QDMTT ' + uang(qdmtt) + ')' : '')]);
      }
      if (deMin) jejak.push(['De minimis: rata-rata pendapatan ' + eur(v.pendapatanYurisdiksi) + ' (syarat < €10.000.000) dan GloBE income ' + eur(v.labaYurisdiksi) + ' (syarat < €1.000.000)', deMinOk ? 'terpenuhi' : 'tidak terpenuhi']);
      jejak.push(['Top-up tax yurisdiksi', uang(topUp)]);
      if (adaPorsi) jejak.push(['IIR yang dialokasikan = ' + uang(topUp) + ' × porsi kepemilikan entitas induk ' + persen(porsi), uang(iir)]);

      const asumsi = ['GloBE income dan covered taxes diisi sudah disesuaikan menurut aturan GloBE dan dijumlahkan untuk seluruh entitas konstituen di satu yurisdiksi (jurisdictional blending); semua angka yurisdiksi dalam satu mata uang.',
        'Ambang €750 juta diuji atas pendapatan laporan keuangan konsolidasi entitas induk utama dalam sekurang-kurangnya 2 dari 4 tahun pajak sebelumnya; angka yang diisi dianggap mewakili uji itu.',
        'SBIE = ' + persen(p.gaji) + ' × biaya gaji + ' + persen(p.aset) + ' × nilai tercatat aset berwujud (tabel transisi OECD untuk tahun pajak yang dimulai pada ' + v.tahun + ').',
        'Top-up tax yurisdiksi = top-up percentage × excess profit − QDMTT, tidak kurang dari nol.',
        'Safe harbour transisi CbCR (uji de minimis, ETR sederhana, dan routine profits berdasarkan laporan per negara yang memenuhi syarat, untuk tahun pajak yang dimulai paling lambat 31 Desember 2026) tidak diuji: bila salah satu terpenuhi, top-up tax yurisdiksi dianggap nol.',
        'Additional current top-up tax (Pasal 4.1.5 dan 5.4: penghitungan ulang tahun sebelumnya, mis. karena covered taxes atau GloBE income disesuaikan) tidak dihitung; angka di sini hanya top-up tahun berjalan.',
        adaPorsi ? 'IIR yang dialokasikan = top-up tax yurisdiksi × porsi kepemilikan entitas induk (penyederhanaan inclusion ratio Pasal 2.2: GloBE income dikurangi bagian pemilik lain ÷ GloBE income, per entitas konstituen). Offset IIR entitas induk antara (Pasal 2.3) dan UTPR tidak dihitung.'
          : 'Alokasi ke entitas induk (IIR) dihitung hanya bila porsi kepemilikan diisi; UTPR tidak dihitung.',
        'Tax holiday/tax allowance menurunkan covered taxes sehingga ETR dapat di bawah 15%; DMTT Indonesia memungut selisihnya lebih dahulu sebelum IIR/UTPR yurisdiksi lain. IIR dan DMTT berlaku tahun pajak 2025, UTPR tahun pajak 2026.',
        'GloBE Information Return dan SPT top-up tax disampaikan paling lambat 15 bulan setelah akhir tahun pajak (18 bulan untuk tahun pertama).'];
      const peringatan = [];
      if (deMin && !deMinOk) peringatan.push('Syarat de minimis tidak terpenuhi (pendapatan harus < €10 juta dan GloBE income < €1 juta); top-up dihitung normal.');
      if (adaLaba && qdmtt > topUpAwal) peringatan.push('QDMTT ' + uang(qdmtt) + ' melebihi top-up ' + uang(topUpAwal) + '; kelebihannya tidak mengurangi top-up yurisdiksi lain.');

      const hasil = [
        baris('Top-up tax yurisdiksi', topUp, 'uang', true),
        baris('Status ambang €750 juta', dalamCakupan ? 'Dalam cakupan (≥ €750 juta)' : 'Di luar cakupan (< €750 juta)', 'teks')
      ];
      if (adaLaba) hasil.push(baris('ETR yurisdiksi', etr, 'persen'), baris('Top-up percentage', pctTopUp, 'persen'));
      hasil.push(baris('SBIE', sbie, 'uang'));
      if (adaLaba) hasil.push(baris('Excess profit (laba berlebih)', excess, 'uang'), baris('Top-up sebelum QDMTT', topUpAwal, 'uang'));
      if (ket) hasil.push(baris('Keterangan', ket, 'teks'));
      if (adaPorsi) {
        // Maksimal 8 baris: bila penuh (ada Keterangan karena di luar cakupan/de minimis, top-up nihil), IIR dicatat di Keterangan.
        if (hasil.length < 8) hasil.splice(1, 0, baris('IIR yang dialokasikan', iir, 'uang'));
        else hasil[hasil.length - 1].nilai += ' IIR yang dialokasikan ke entitas induk: ' + uang(iir) + '.';
      }
      return keluaran({ hasil: hasil, jejak: jejak, asumsi: asumsi, dasarHukum: dh.concat(deMin ? ['Pasal 5.5 (de minimis)'] : [], adaPorsi ? ['Pasal 2.1–2.2 (IIR dan inclusion ratio)'] : []), peringatan: peringatan });
    }
  });

  // Setiap hitung() dibungkus: v bukan objek → {}, dan exception tak terduga dikembalikan lewat field galat.
  // Pesan diawali "Kesalahan internal" agar uji dapat membedakannya dari galat validasi biasa.
  K.forEach(function (k) {
    const asli = k.hitung;
    k.hitung = function (v) {
      const masukan = v && typeof v === 'object' && !Array.isArray(v) ? v : {};
      try { return asli.call(k, masukan); } catch (e) {
        return keluaran({ galat: 'Kesalahan internal kalkulator: ' + (e && e.message ? e.message : String(e)) + '. Periksa kembali input.', dasarHukum: k.dasarHukum.slice() });
      }
    };
  });

  UKP.kalkulator = K;
  UKP.kalkulatorByJenis = function (jenis) { for (let i = 0; i < K.length; i++) if (K[i].jenis === jenis) return K[i]; return null; };
  /** Hitung dengan nilai default yang ditimpa `ubah` (dipakai mesin kunci jawaban dan uji). */
  UKP.hitungKalkulator = function (jenis, ubah) {
    const k = UKP.kalkulatorByJenis(jenis); if (!k) return null;
    const v = {}; k.input.forEach(function (i) { v[i.key] = i.default === undefined ? null : i.default; });
    return k.hitung(Object.assign(v, ubah || {}));
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = UKP;
})(typeof window !== 'undefined' ? window : globalThis);
