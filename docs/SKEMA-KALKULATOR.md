# Skema Mesin Kalkulator — `js/kalkulator.js`

Satu berkas JavaScript tanpa dependensi, berjalan di browser **dan** Node (untuk uji). Pola pembungkus wajib:

```js
(function (root) {
  const UKP = root.UKP = root.UKP || {};
  // ---- util format (dipakai seluruh aplikasi) ----
  UKP.fmt = {
    uang(n, opsi) { /* "Rp12.000.000" (bulatkan ke rupiah; negatif "−Rp…"); opsi {desimal:0} */ },
    angka(n, desimal) { /* "1.234,5" format id-ID */ },
    persen(x, desimal) { /* 0.0101 -> "1,01%" */ },
    tanggal(iso) { /* "2026-02-15" -> "15 Feb 2026" (bulan singkat Indonesia) */ },
    bulanTahun(iso) { /* "2026-02" -> "Februari 2026" */ },
  };
  // ---- tabel referensi yang dipakai rumus ----
  UKP.tabel = {
    ptkp: { TK0: 54000000, TK1: 58500000, TK2: 63000000, TK3: 67500000, K0: 58500000, K1: 63000000, K2: 67500000, K3: 72000000, KI0: 112500000, KI1: 117000000, KI2: 121500000, KI3: 126000000 },
    lapisanPs17: [ [60000000, 0.05], [250000000, 0.15], [500000000, 0.25], [5000000000, 0.30], [Infinity, 0.35] ],
    terKategori: { TK0: "A", TK1: "A", K0: "A", TK2: "B", TK3: "B", K1: "B", K2: "B", K3: "C" },
    terBulanan: { A: [ [5400000, 0], [5650000, 0.0025], /* ... SEMUA lapisan sesuai Lampiran PP 58/2023, batas atas inklusif, lapisan terakhir Infinity */ ], B: [...], C: [...] },
    terHarian: [ [450000, 0], [2500000, 0.005] ],   // di atas 2,5 jt/hari: 50% × tarif Ps. 17 bulanan (jelaskan di asumsi)
    kmkBunga: UKP.ref && UKP.ref.kmkBunga ? UKP.ref.kmkBunga : [],   // diisi dari js/data/ref.js bila ada; fallback tabel internal 12 bulan terakhir ditulis di sini juga
    penyusutan: { /* kelompok: masa manfaat & tarif GL/SM per Ps. 11 UU PPh */ },
    globe: { tarifMinimum: 0.15, ambangEur: 750000000, deMinimisPendapatanEur: 10000000, deMinimisLabaEur: 1000000,
             sbieTransisi: { "2025": { gaji: 0.096, aset: 0.076 }, /* ... s.d. "2029": { gaji: 0.082, aset: 0.066 } */ } },
  };
  // ---- daftar kalkulator ----
  UKP.kalkulator = [ /* 19 objek: 17 urut SPESIFIKASI §5, lalu 2 tambahan Tingkat C (lihat "Daftar kalkulator") */ ];
  UKP.kalkulatorByJenis = function (jenis) { ... };
  if (typeof module !== 'undefined' && module.exports) module.exports = UKP;
})(typeof window !== 'undefined' ? window : globalThis);
```

## Daftar kalkulator

Urutan array `UKP.kalkulator` (dikunci uji `kontrak umum`). Nomor 1–17 mengikuti SPESIFIKASI §5; nomor 18–19 ditambahkan dari laporan peserta yang lulus UKP Tingkat C (docs/PENGALAMAN-UJIAN.md, 28 Okt 2026: "kurs KMK & kurs tengah pasti muncul, jebakannya di selisih kurs"; "Top-up Tax GMT banyak"). `UKP.kalkulatorByJenis(jenis)` mengenali semua slug di bawah.

| No | `jenis` | Nama | Kelompok | MVP | Verifikasi |
|---|---|---|---|---|---|
| 1 | `pph-op` | PPh Orang Pribadi tahunan | A1 | ya | ✅ |
| 2 | `pph21-ter` | PPh Pasal 21 TER | A3 | ya | ✅ |
| 3 | `sanksi-bunga` | Sanksi bunga KUP | A2 | ya | ✅ |
| 4 | `tenggat-spt` | Tenggat & denda SPT | A2 | ya | ✅ |
| 5 | `ppn` | PPN (tarif 12%, DPP nilai lain 11/12) | A4 | ya | ✅ |
| 6 | `potput` | Klasifikasi PPh Pot/Put | A3 | ya | ✅ |
| 7 | `pesangon` | PPh final pesangon & pensiun sekaligus | A3 | — | ✅ |
| 8 | `denda-keberatan` | Denda keberatan, banding, dan PK | A2 | — | ✅ |
| 9 | `ppsp` | Garis waktu penagihan (PPSP) | A2 | — | ◐ |
| 10 | `pph-badan` | PPh Badan & fasilitas Pasal 31E | B6 | — | ✅ |
| 11 | `penyusutan` | Penyusutan & amortisasi fiskal | B6 | — | ✅ |
| 12 | `pajak-tangguhan` | Pajak tangguhan (PSAK 212) | B7 | — | ✅ |
| 13 | `der` | DER 4:1 — biaya pinjaman | B6 | — | ✅ |
| 14 | `pph24` | Kredit PPh Pasal 24 per negara | C9 | — | ✅ |
| 15 | `bpt` | BUT & branch profit tax | C9 | — | ✅ |
| 16 | `pbb-bphtb` | PBB-P5L, PBB-P2, dan BPHTB | B8 | — | ◐ |
| 17 | `bea-meterai` | Bea meterai | A5 | — | ✅ |
| 18 | `kurs` | Kurs KMK vs kurs tengah: DPP pajak dan selisih kurs | B7 | — | ✅ |
| 19 | `gmt` | Top-up tax pajak minimum global (GloBE, PMK 136/2024) | C9 | — | ◐ |

### 18. `kurs` — kurs KMK vs kurs tengah BI

- **Input**: nilai valas, kode mata uang (teks, hanya label), jenis pajak (`pph26` PPh 26 20% atau tarif P3B; `pph26-5` PPh 26 ayat (2) 5% × harga jual — penjualan saham/harta di Indonesia oleh WPLN, 20% × perkiraan penghasilan neto 25%; `pph23-2`/`pph23-15` PPh 23 2%/15%; `pph42-10` PPh 4(2) 10% final; `pph15-264` PPh 15 pelayaran/penerbangan luar negeri 2,64% final × peredaran bruto; `ppn` PPN 12% dengan sakelar DPP nilai lain 11/12; `pph22-25`/`pph22-75`/`pph22-10` PPh 22 impor 2,5%/7,5%/10%), posisi pos moneter (`utang` | `piutang`), kurs KMK (wajib, > 0), kurs tengah BI saat pengakuan, kurs tengah BI akhir periode, kurs realisasi saat pembayaran (ketiganya opsional; kosong = tidak dihitung, 0 = galat).
- **Input opsional tambahan** (default tidak mengubah hasil lama):
  - `grossUp` (boolean, default `false`; tampil untuk jenis PPh yang dipotong): PPh ditanggung pembayar → nilai valas = neto yang diterima; DPP = neto × kurs KMK ÷ (1 − tarif); PPh = tarif × DPP dibayar dalam rupiah, pos moneter = neto penuh, **tidak ada** selisih kurs atas PPh. Tarif 100% (P3B) + gross-up → galat.
  - `ppnValas` (boolean, default `false`; tampil untuk `ppn`): PPN ditagih dalam valas → bagian PPN valas = valas × 11% (nilai lain) atau 12%; pos moneter = harga + PPN valas; selisih kurs atas bagian PPN = ∓(PPN rupiah KMK − bagian PPN valas × kurs buku) — arah kebalikan PPh dipotong karena PPN menambah pos valas (penjual/piutang rugi bila KMK > kurs buku; pembeli/utang laba).
  - `beaMasuk` (persen dari nilai pabean, default `null`; tampil untuk PPh 22 impor; 0–500%, kosong = nihil): bea masuk = tarif × nilai pabean CIF × kurs KMK; nilai impor (DPP PPh 22) = CIF + bea masuk. Pos moneter tetap CIF valas (utang pemasok); bea masuk dan PPh 22 dibayar rupiah sehingga selisih kurs tidak berubah. Diabaikan untuk jenis pajak lain.
- **Kurs pajak**: kurs KMK mingguan (berlaku Rabu–Selasa). PPh dipotong/dipungut → kurs KMK saat terutang/pemotongan, yaitu saat penghasilan dibayar, disediakan untuk dibayar, atau jatuh tempo (mana lebih dahulu); PPN → kurs KMK saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21); impor → kurs KMK pada tanggal PIB. Jejak memuat baris "Kurs KMK (mingguan, berlaku Rabu–Selasa) dipakai pada" sesuai jenis pajak. Dasar hukum keluaran memuat `PP 44/2022 Pasal 21` dan `KMK nilai kurs mingguan (Rabu–Selasa)`.
- **Rumus**: DPP = valas × kurs KMK (PPN nilai lain: × 11/12; impor: + bea masuk; gross-up: ÷ (1 − tarif)); pajak = tarif × DPP. Nilai buku = valas × kurs tengah (kosong → kurs KMK). Selisih nilai transaksi = valas × (KMK − tengah) — bahan ekualisasi, bukan laba/rugi selisih kurs. Belum terealisasi = pos × (kurs akhir − kurs tengah); terealisasi = pos × (kurs bayar − kurs akhir, atau kurs tengah bila kurs akhir kosong). Tanda: kurs naik → utang **rugi** (negatif), piutang **laba** (positif).
- **Selisih kurs** diukur dengan kurs pembukuan (kurs tengah saat pengakuan, kurs akhir periode, kurs realisasi). Kurs KMK masuk ke selisih kurs **hanya** pada bagian valas yang dilunasi dengan pajak rupiah: PPh dipotong dari pembayaran valas (pos = valas × (1 − tarif); selisih saat pemotongan = ±(pajak KMK − bagian valas kurs buku)) dan PPN ditagih valas (lihat `ppnValas`). Saat pajak rupiah disetor atau dikreditkan tidak ada selisih kurs (jejak: "Penyetoran/pengkreditan pajak rupiah … — tanpa selisih kurs"). PPN ditagih rupiah, PPh 22 impor, bea masuk, dan PPh gross-up tidak menimbulkan selisih kurs; pos = valas penuh.
- **Fiskal**: laba = penghasilan Pasal 4 ayat (1) huruf l, rugi = biaya Pasal 6 ayat (1) huruf e, diakui taat asas PP 94/2010 Pasal 9; sisi penerima PPh final (4(2), PPh 15) → selisih kurs dikoreksi (Pasal 9 ayat (2)). Posisi piutang untuk PPh 26, PPh 26 ayat (2), dan PPh 15 diberi peringatan "hanya ilustrasi" (penerima WPLN).
- **Jejak** memuat pengecoh (pajak bila keliru memakai kurs tengah atau kurs tanggal bayar; ikut memperhitungkan bea masuk/gross-up).
- **Baris hasil** (maks. 8): pajak terutang (utama), DPP rupiah, [bea masuk], nilai pembukuan, selisih nilai transaksi, [selisih kurs atas PPh dipotong | atas PPN ditagih valas], [belum terealisasi], [terealisasi], [total].
- **Acuan uji**: PPh 26 USD 10.000, KMK 16.250, tengah 16.180, akhir 16.420, bayar 16.300 → PPh Rp32.500.000; buku Rp161.800.000; bagian PPh rugi Rp140.000; belum terealisasi rugi Rp1.920.000; terealisasi laba Rp960.000; total rugi Rp1.100.000 (= kas keluar Rp162.900.000 − buku).
- **Acuan uji input baru**: bea masuk 10% atas USD 20.000 × KMK 16.100 → BM Rp32.200.000, nilai impor Rp354.200.000, PPh 22 2,5% Rp8.855.000; gross-up PPh 26 neto USD 8.000 → DPP Rp162.500.000, PPh Rp32.500.000, total rugi Rp960.000; PPN ditagih valas (piutang, KMK 16.000, tengah 15.900, akhir 16.100, bayar 16.050) → bagian PPN rugi Rp110.000, pos USD 11.100, total laba Rp1.555.000; PPh 15 USD 50.000 × 16.000 → Rp21.120.000; PPh 26 ayat (2) USD 1.000.000 (kurs default) → Rp812.500.000, total rugi Rp117.500.000.

### 19. `gmt` — top-up tax pajak minimum global

- **Input**: pendapatan konsolidasi grup (EUR), tahun pajak 2025–2029, GloBE income yurisdiksi (boleh negatif), covered taxes (≥ 0), biaya gaji dan nilai tercatat aset berwujud memenuhi syarat (opsional), QDMTT (opsional), `porsiIIR` (opsional, persen 0–100, default `null`: porsi kepemilikan entitas induk), sakelar de minimis + rata-rata pendapatan dan GloBE income yurisdiksi (EUR).
- **IIR yang dialokasikan** (hanya bila `porsiIIR` diisi) = top-up tax yurisdiksi (setelah QDMTT) × porsi — penyederhanaan inclusion ratio Pasal 2.2; offset IIR entitas induk antara (Pasal 2.3) dan UTPR tidak dihitung. Baris ditempatkan tepat di bawah baris utama; bila hasil sudah 8 baris (di luar cakupan atau de minimis dengan GloBE income positif, top-up nihil), IIR Rp0 dicatat di akhir baris Keterangan.
- **Asumsi** menyatakan eksplisit bahwa safe harbour transisi CbCR (de minimis, ETR sederhana, routine profits) tidak diuji dan additional current top-up tax (Pasal 4.1.5 dan 5.4) tidak dihitung.
- **Rumus**: ambang pendapatan ≥ €750 juta; ETR = covered taxes ÷ GloBE income; top-up % = maks(0; 15% − ETR); SBIE = %gaji × gaji + %aset × aset; excess profit = maks(0; GloBE income − SBIE); top-up yurisdiksi = maks(0; top-up % × excess − QDMTT). GloBE income ≤ 0 → tidak ada ETR (pembagi nol) dan top-up nihil; di bawah ambang atau de minimis terpenuhi (pendapatan < €10 juta **dan** GloBE income < €1 juta) → nihil. Top-up dihitung dari pembilang (15 × income − 100 × taxes) tanpa membulatkan ETR.
- **Tabel SBIE transisi** (OECD GloBE Model Rules Pasal 9.2.1–9.2.2): gaji 9,6 / 9,4 / 9,2 / 9,0 / 8,2%; aset 7,6 / 7,4 / 7,2 / 7,0 / 6,6% untuk 2025–2029. Penurunan berubah dari 0,2 poin menjadi 0,8 poin (gaji) dan 0,4 poin (aset) mulai 2029. Riset docs/research belum mengonfirmasinya ke teks PMK 136/2024 → kalkulator bertanda ◐.
- **Acuan uji**: GloBE income Rp200 M, covered taxes Rp20 M, gaji Rp50 M, aset Rp100 M, tahun 2025 → ETR 10%, top-up 5%, SBIE Rp12,4 M, excess Rp187,6 M, top-up Rp9.380.000.000; dengan `porsiIIR` 60% → IIR yang dialokasikan Rp5.628.000.000 (QDMTT Rp4 M → Rp3.228.000.000).

Catatan tipe input: jumlah dalam valas/EUR dan kurs memakai `tipe: "uang"` (label menyebut mata uangnya) karena pengurai `uang` di UI memahami titik ribuan dan koma desimal id-ID; tipe `angka` membaca "16.250" sebagai 16,25.

## Objek kalkulator

```js
{
  jenis: "sanksi-bunga",                 // slug persis sesuai SPESIFIKASI §5 kolom `jenis`
  nama: "Sanksi bunga KUP",
  kelompok: "A2",                        // kode kelompok materi terkait
  mvp: true,
  deskripsi: "Satu kalimat apa yang dihitung.",
  dasarHukum: ["Pasal 9 ayat (2a) UU KUP", "KMK 47/MK/EF.2/2026"],
  statusPer: "2026-10-25",
  verifikasi: "✅",                       // ✅ | ◐ (wajib `peringatan`)
  input: [
    { key: "pasal", label: "Dasar pengenaan", tipe: "pilihan", default: "9-2a",
      opsi: [ { nilai: "9-2a", label: "Ps. 9(2a)/(2b) terlambat setor — uplift 5%" }, { nilai: "13-2", label: "Ps. 13(2) SKPKB — uplift 15%" } ],
      bantu: "Pilih pasal yang menjadi dasar sanksi." },
    { key: "pokok", label: "Pokok pajak kurang/terlambat dibayar", tipe: "uang", default: 12000000, min: 0 },
    { key: "mulai", label: "Jatuh tempo / mulai hitung", tipe: "tanggal", default: "2026-02-15" },
    { key: "akhir", label: "Tanggal pembayaran / terbit STP", tipe: "tanggal", default: "2026-07-03" },
    { key: "tarifAcuan", label: "Tarif acuan KMK bulan mulai (%)", tipe: "persen", default: null, bantu: "Kosongkan untuk memakai tabel KMK bila bulan tersedia." },
    // tipe lain: "angka" (number), "boolean" (sakelar), "teks"
    // field opsional: tampilJika: { key: "metode", nilai: "pembukuan" }  → disembunyikan bila tidak cocok
  ],
  hitung: function (v) {                 // v = { key: nilai } sudah bertipe number/string/boolean; nilai kosong = null
    return {
      hasil: [ { label: "Sanksi bunga", nilai: 606000, format: "uang", utama: true }, { label: "Jumlah bulan", nilai: 5, format: "angka" } ],  // 1–8 baris; tepat satu `utama`
      jejak: [ ["Pokok", "Rp12.000.000"], ["Bulan (16 Feb–3 Jul, dibulatkan ke atas)", "5"], ["Tarif (0,59% + 5%)/12 ... ", "1,01%"], ["Bunga = 12.000.000 × 1,01% × 5", "Rp606.000"] ],
      asumsi: ["Bagian dari bulan dihitung satu bulan penuh (Ps. 19 ayat 1).", "Maksimal 24 bulan."],
      dasarHukum: ["Pasal 9 ayat (2a) UU KUP", "KMK 47/MK/EF.2/2026 (Oktober 2026)"],
      peringatan: [],                    // string[]; isi bila ada input yang membuat hasil tidak pasti
      galat: null                        // string bila input tidak valid (mis. akhir < mulai); hasil/jejak boleh kosong
    };
  }
}
```

Aturan: fungsi murni (tanpa DOM, tanpa Date.now kecuali default tanggal yang diisi UI); semua angka rupiah dibulatkan ke rupiah penuh; pembulatan PKP ke ribuan penuh ke bawah; jejak hitung memakai `UKP.fmt`. Setiap kalkulator diuji di `test/kalkulator.test.js` (node:test, `node --test test/`) dengan ≥ 8 kasus, termasuk contoh resmi di riset 02a/02b (PT A Ps. 31E Rp607.200.000; PPh 24 Rp270.000.000; BPT Rp156.000.000 / Rp78.000.000; bunga 5 bulan × 1,01% = Rp606.000; PPh OP K/2 PKP Rp177.500.000 → Rp20.625.000; PPh 21 TER kategori A bruto Rp9.000.000 → 1,75% → Rp157.500; PPN Rp100.000.000 non-mewah → DPP 11/12 → PPN Rp11.000.000). Kalkulator tambahan `kurs` dan `gmt` masing-masing diuji ≥ 12 kasus (fixture emas, batas, galat) ditambah uji adversarial identitas arus kas dan rumus silang; input opsional `beaMasuk`, `grossUp`, `ppnValas`, jenis `pph15-264`/`pph26-5`, dan `porsiIIR` punya uji tersendiri (termasuk identitas arus kas gross-up dan PPN ditagih valas, serta uji bahwa rumusan lama "pembuatan/tanggal faktur" dan "selisih kurs bukan …" tidak muncul di label/jejak/asumsi).
