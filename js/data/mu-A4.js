/* Modul konten A4 — PPN dan SPT Masa PPN. Rekonstruksi dari kisi-kisi resmi; bukan soal asli ujian. Status ketentuan per 28 Oktober 2026. */
UKP.register({
  meta: {
    kode: "A4", slug: "ppn", nama: "PPN dan SPT Masa PPN",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0.20, B: 0.15, C: 0.10 },
    statusPer: "2026-10-28",
    tujuan: "Peserta mampu menentukan objek, subjek, saat dan tempat terutang PPN; menghitung PPN dengan tarif 12% dan DPP nilai lain 11/12 (PMK 131/2024) serta besaran tertentu; menilai keabsahan faktur pajak Coretax dan pajak masukan yang dapat dikreditkan; serta menetapkan kewajiban penyetoran, pelaporan, kompensasi, dan restitusi dalam SPT Masa PPN.",
    dasarHukumUtama: ["UU 8/1983 s.t.d.t.d. UU 7/2021 (UU PPN)", "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP)", "PP 44/2022", "PP 49/2022", "PMK 131/2024", "PMK 11/2025", "PMK 81/2024", "PER-11/PJ/2025"],
    perubahanTerbaru: [
      { sebelum: "Tarif PPN 11% atas harga jual/penggantian penuh", sesudah: "Tarif 12% dengan DPP nilai lain 11/12 untuk barang/jasa non-mewah (beban efektif tetap 11%)", dasar: "PMK 131/2024 Pasal 2–3", berlakuSejak: "2025-01-01" },
      { sebelum: "Barang mewah (objek PPnBM) dikenai 11% atas harga jual", sesudah: "12% atas harga jual penuh; masa transisi 1–31 Januari 2025 masih memakai DPP 11/12", dasar: "PMK 131/2024 Pasal 2 ayat (2)–(3), Pasal 5", berlakuSejak: "2025-02-01" },
      { sebelum: "Besaran tertentu dihitung dari tarif 11% (misal kendaraan bekas 1,1%, pengiriman paket 1,1%)", sesudah: "Rumus disesuaikan dengan faktor 11/12 sehingga beban efektif tidak berubah", dasar: "PMK 11/2025", berlakuSejak: "2025-02-04" },
      { sebelum: "e-Faktur diunggah paling lambat tanggal 15 bulan berikutnya", sesudah: "Faktur pajak Coretax diunggah dan disetujui DJP paling lambat tanggal 20 bulan berikutnya setelah tanggal pembuatan", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "Sembilan kode transaksi faktur (01–09); NSFP diminta ke KPP", sesudah: "Sepuluh kode transaksi (01–10); NSFP diberikan otomatis oleh Coretax", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "Aplikasi e-Faktur desktop dan e-SPT PPN 1111", sesudah: "Faktur pajak, SPT Masa PPN, dan pemberitahuan pemusatan dilakukan melalui Coretax (Portal Wajib Pajak)", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "PPN DTP rumah 2025: 100% (Jan–Jun) lalu 50% (Jul–Des), kemudian 100% penuh", sesudah: "PPN DTP 100% sepanjang 2026 atas bagian harga jual s.d. Rp2 miliar untuk rumah berharga jual maksimal Rp5 miliar", dasar: "PMK 90/2025", berlakuSejak: "2026-01-01" },
      { sebelum: "Pengembalian pendahuluan Pasal 17D bagi PKP: lebih bayar paling banyak Rp5 miliar (PMK 39/2018 s.t.d.d. PMK 209/2021)", sesudah: "Lebih bayar paling banyak Rp1 miliar dan jumlah penyerahan paling banyak Rp4,2 miliar untuk suatu Masa Pajak; PKP yang belum melakukan penyerahan tidak termasuk; PKP persyaratan tertentu tidak lagi diperlakukan sebagai PKP berisiko rendah", dasar: "PMK 28 Tahun 2026 (mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" }
    ],
    lembarRingkas: [
      { label: "Tarif PPN", nilai: "12%", dasar: "Pasal 7 ayat (1) huruf b UU PPN; PMK 131/2024 Pasal 2", berlakuSejak: "2025-01-01" },
      { label: "DPP barang/jasa non-mewah", nilai: "Nilai lain 11/12 × harga → efektif 11%", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" },
      { label: "Barang mewah (objek PPnBM)", nilai: "PPN 12% × harga jual penuh, ditambah PPnBM dari DPP yang sama", dasar: "PMK 131/2024 Pasal 2 dan 5", berlakuSejak: "2025-02-01" },
      { label: "Harga non-mewah termasuk PPN", nilai: "PPN = 11/111 × harga total", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" },
      { label: "Ekspor BKP, BKP tidak berwujud, JKP", nilai: "Tarif 0%; PM tetap dapat dikreditkan", dasar: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" },
      { label: "Rentang perubahan tarif dengan PP", nilai: "5%–15%", dasar: "Pasal 7 ayat (3) UU PPN", berlakuSejak: "2022-04-01" },
      { label: "Batas pengusaha kecil", nilai: "Peredaran bruto BKP/JKP ≤ Rp4,8 miliar per tahun buku", dasar: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" },
      { label: "Lapor pengukuhan PKP setelah batas terlampaui", nilai: "Umum: akhir bulan berikutnya; WP PPh final UMKM: akhir tahun buku, pungut PPN mulai Masa Januari berikutnya ◐", dasar: "PMK 197/PMK.03/2013; PMK 164/2023 Pasal 17–18", berlakuSejak: null },
      { label: "Unggah faktur pajak Coretax", nilai: "Paling lambat tanggal 20 bulan berikutnya setelah tanggal faktur", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "Kode transaksi faktur", nilai: "01–10; 02 instansi pemerintah, 03 pemungut lain, 07 tidak dipungut/DTP, 08 dibebaskan, 09 aktiva Pasal 16D", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "Denda faktur tidak dibuat/terlambat/tidak lengkap", nilai: "1% × DPP", dasar: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Faktur dibuat > 3 bulan sejak seharusnya", nilai: "Dianggap tidak dibuat; PM pembeli tidak dapat dikreditkan", dasar: "PP 44/2022; PER-11/PJ/2025", berlakuSejak: "2022-12-02" },
      { label: "Pengkreditan PM yang tertunda", nilai: "Paling lama 3 Masa Pajak setelah masa faktur, belum dibiayakan", dasar: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" },
      { label: "PM masa sebelum dikukuhkan PKP", nilai: "Pedoman 80% × PK", dasar: "Pasal 9 ayat (9a) UU PPN", berlakuSejak: "2020-11-02" },
      { label: "PM tidak dapat dikreditkan", nilai: "Tak terkait langsung usaha, sedan/station wagon, faktur cacat, terkait penyerahan dibebaskan", dasar: "Pasal 9 ayat (8) dan Pasal 16B ayat (3) UU PPN", berlakuSejak: "2022-04-01" },
      { label: "Setor PPN pemanfaatan JKP/BKP tidak berwujud luar negeri dan KMS", nilai: "Tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" },
      { label: "Setor dan lapor SPT Masa PPN", nilai: "Akhir bulan berikutnya; setor sebelum SPT disampaikan", dasar: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" },
      { label: "Denda terlambat SPT Masa PPN", nilai: "Rp500.000 per SPT", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Bunga terlambat setor / pembetulan", nilai: "(Acuan + 5%) ÷ 12 per bulan, maksimal 24 bulan; Oktober 2026: 1,01%", dasar: "Pasal 8 ayat (2a) dan Pasal 9 ayat (2a) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2021-10-29" },
      { label: "Besaran tertentu kendaraan bekas, paket, freight forwarding, agen asuransi", nilai: "1,1% (pialang asuransi 2,2%); PM tidak dikreditkan ◐", dasar: "Pasal 9A UU PPN; PMK 2022 sektoral jo. PMK 11/2025", berlakuSejak: "2025-02-04" },
      { label: "Kegiatan membangun sendiri", nilai: "2,2% × biaya tanpa tanah; bangunan ≥ 200 m²", dasar: "Pasal 16C UU PPN; PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025", berlakuSejak: "2025-01-01" },
      { label: "PPnBM hunian mewah", nilai: "20% untuk harga jual ≥ Rp30 miliar", dasar: "PMK 96/PMK.03/2021 s.t.d.d. PMK 15/2023", berlakuSejak: null },
      { label: "PPN DTP rumah 2026", nilai: "100% atas bagian harga s.d. Rp2 miliar; harga jual maksimal Rp5 miliar", dasar: "PMK 90/2025", berlakuSejak: "2026-01-01" },
      { label: "Ambang penunjukan pemungut PPN PMSE", nilai: "> Rp600 juta/tahun atau Rp50 juta/bulan; traffic > 12.000/tahun atau 1.000/bulan", dasar: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01" },
      { label: "PPh Pasal 22 bendahara (pembelian barang)", nilai: "1,5% × harga tanpa PPN; dikecualikan ≤ Rp2 juta tidak dipecah", dasar: "PMK 34/PMK.010/2017", berlakuSejak: "2017-03-01" },
      { label: "Restitusi PPN", nilai: "PKP umum akhir tahun buku; tiap masa: ekspor, ke pemungut, tidak dipungut, belum berproduksi", dasar: "Pasal 9 ayat (4a)–(4b) UU PPN", berlakuSejak: "2010-04-01" },
      { label: "Pengembalian pendahuluan Pasal 17D bagi PKP", nilai: "Lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak ✅; SKPPKP 1 bulan", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" },
      { label: "Restitusi melalui pemeriksaan", nilai: "Keputusan paling lama 12 bulan sejak permohonan lengkap", dasar: "Pasal 17B UU KUP", berlakuSejak: "2008-01-01" },
      { label: "SKPKB setelah pengembalian pendahuluan / kompensasi tak seharusnya", nilai: "Kenaikan 100% (Pasal 17C/17D) / kenaikan 75% (Pasal 13 ayat (3))", dasar: "Pasal 13 ayat (3), 17C, 17D UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Kurs PPN dalam valuta asing", nilai: "Kurs KMK yang berlaku saat faktur/dokumen yang dipersamakan seharusnya dibuat; bukan kurs tengah BI, kurs bank, atau kurs pelunasan", dasar: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" },
      { label: "Masa berlaku kurs KMK", nilai: "Mingguan, Rabu s.d. Selasa; transaksi hari Selasa memakai kurs yang berlaku sejak Rabu sebelumnya", dasar: "KMK nilai kurs mingguan (.../MK/EF.2/2026)", berlakuSejak: null },
      { label: "PPN impor dalam valuta asing", nilai: "(CIF + bea masuk + pungutan pabean) × kurs KMK tanggal PIB; PPN = 12% × 11/12 × nilai impor", dasar: "Pasal 1 UU PPN (nilai impor); PP 44/2022 Pasal 21; PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" },
      { label: "PPN JLN dalam valuta asing", nilai: "Kurs KMK saat terutang, yaitu yang paling dahulu di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar; disetor sendiri paling lambat tanggal 15 bulan berikutnya ◐", dasar: "PP 44/2022; PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Uang muka, retur, dan faktur pengganti valas", nilai: "Uang muka: kurs saat diterima; nota retur dan faktur pengganti: kurs faktur semula ◐", dasar: "Pasal 5A dan Pasal 13 ayat (1a) UU PPN; PP 44/2022 Pasal 21; PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "Selisih kurs pelunasan valas", nilai: "Tidak mengubah PPN dalam faktur; diakui sebagai laba/rugi selisih kurs PPh dengan kurs pembukuan SAK", dasar: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh; PP 94/2010 Pasal 9", berlakuSejak: null }
    ]
  },
  topik: [
    {
      id: "A4.1", slug: "karakter-mekanisme", judul: "Karakter hukum PPN dan mekanisme pengkreditan",
      estimasiMenit: 10, jenisDominan: ["konsep", "hitung"],
      ringkasan: [
        "PPN adalah pajak atas konsumsi dalam negeri yang bersifat objektif: terutang karena adanya objek (penyerahan BKP/JKP), bukan karena keadaan subjeknya.",
        "PPN adalah pajak tidak langsung: pemikul beban (konsumen akhir) berbeda dengan penanggung jawab penyetoran (PKP penjual).",
        "PPN dipungut di setiap mata rantai produksi dan distribusi (multi-stage) tetapi tidak kumulatif karena memakai metode pengkreditan (credit method / indirect subtraction): PPN disetor = Pajak Keluaran − Pajak Masukan.",
        "PPN menganut destination principle: ekspor dikenai tarif 0% dan impor dikenai tarif penuh, sehingga netral terhadap perdagangan internasional.",
        "Tarif tunggal 12% berlaku untuk semua BKP/JKP; perbedaan beban efektif muncul dari DPP (nilai lain 11/12, besaran tertentu), bukan dari tarif.",
        "Jumlah PPN yang disetor seluruh mata rantai sama dengan tarif efektif dikalikan harga jual kepada konsumen akhir."
      ],
      poinKunci: [
        { label: "Rumus pengkreditan", nilai: "PPN disetor = PK − PM", dasar: "Pasal 9 ayat (2)–(3) UU PPN", berlakuSejak: "2022-04-01" },
        { label: "Tarif ekspor", nilai: "0%", dasar: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Tarif umum", nilai: "12% sejak 1 Januari 2025", dasar: "Pasal 7 ayat (1) huruf b UU PPN", berlakuSejak: "2025-01-01" },
        { label: "Pemikul beban akhir", nilai: "Konsumen akhir (pajak tidak langsung)", dasar: "Penjelasan Umum UU PPN (karakter pajak tidak langsung)", berlakuSejak: "2010-04-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 1 UU PPN", catatan: "definisi Pajak Keluaran, Pajak Masukan, BKP, JKP, PKP" },
        { pasal: "Pasal 7 UU PPN", catatan: "tarif 12% dan tarif 0% ekspor" },
        { pasal: "Pasal 9 ayat (2)–(4) UU PPN", catatan: "mekanisme pengkreditan PM terhadap PK" }
      ],
      jebakan: [
        { teks: "Menganggap PPN bersifat kumulatif seperti pajak penjualan lama: PPN tidak kumulatif karena PM dapat dikreditkan", tagSebab: "salah-klasifikasi" },
        { teks: "Menyebut PPN sebagai pajak subjektif: PPN objektif, subjek baru relevan untuk menentukan siapa yang memungut", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PKP distributor membeli BKP non-mewah Rp300.000.000 dan menjualnya Rp420.000.000 (keduanya belum termasuk PPN) dalam masa pajak yang sama. PPN yang disetor distributor?",
        jawaban: "Rp13.200.000",
        langkah: [["PK = 12% × 11/12 × 420.000.000", "Rp46.200.000"], ["PM = 12% × 11/12 × 300.000.000", "Rp33.000.000"], ["PPN disetor = PK − PM", "Rp13.200.000"], ["Cek: 11% × nilai tambah 120.000.000", "Rp13.200.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.2", slug: "objek-bukan-objek-fasilitas", judul: "Objek, bukan objek, dan fasilitas PPN",
      estimasiMenit: 14, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Objek Pasal 4 ayat (1): penyerahan BKP dan JKP di dalam Daerah Pabean oleh pengusaha, impor BKP, pemanfaatan BKP tidak berwujud dan JKP dari luar Daerah Pabean, serta ekspor BKP berwujud, BKP tidak berwujud, dan JKP oleh PKP.",
        "Pasal 16C: kegiatan membangun sendiri (KMS) di luar kegiatan usaha; Pasal 16D: penyerahan aktiva yang tujuan semula tidak untuk diperjualbelikan, kecuali aktiva yang PM-nya tidak dapat dikreditkan karena Pasal 9 ayat (8) huruf b dan c.",
        "Pasca-UU HPP, bukan BKP tinggal: makanan/minuman yang disajikan di hotel, restoran, rumah makan, warung dan sejenisnya (objek pajak daerah), serta uang, emas batangan untuk cadangan devisa negara, dan surat berharga.",
        "Bukan JKP pasca-UU HPP: jasa keagamaan, jasa kesenian dan hiburan, jasa perhotelan, jasa pemerintahan umum, jasa penyediaan tempat parkir, dan jasa boga/katering (sebagian besar objek pajak daerah).",
        "Barang kebutuhan pokok, jasa kesehatan, pendidikan, keuangan, asuransi, angkutan umum, dan tenaga kerja kini BKP/JKP tetapi DIBEBASKAN melalui PP 49/2022: PM atas perolehannya tidak dapat dikreditkan (Pasal 16B ayat (3)).",
        "Fasilitas TIDAK DIPUNGUT (kawasan berikat, KEK, alat angkutan tertentu, proyek hibah/pinjaman LN): PM tetap dapat dikreditkan. Kode faktur 07 untuk tidak dipungut/DTP, 08 untuk dibebaskan.",
        "Penyerahan BKP/JKP terutang PPN bila memenuhi syarat kumulatif: (a) yang diserahkan adalah BKP/JKP; (b) penyerahan dilakukan di dalam Daerah Pabean; dan (c) penyerahan dilakukan dalam kegiatan usaha atau pekerjaannya oleh pengusaha (Pasal 4 ayat (1) huruf a dan c UU PPN beserta penjelasannya; pengertian pengusaha Pasal 1 angka 14). Penyerahan di luar kegiatan usaha atau pekerjaan — misalnya pegawai yang menjual mobil pribadinya atau PKP orang pribadi yang menjual perabot rumah tangga yang tidak pernah dipakai dalam usaha — tidak terutang PPN, sedangkan penyerahan aktiva usaha yang semula tidak untuk dijual tetap terutang melalui Pasal 16D."
      ],
      poinKunci: [
        { label: "Dibebaskan vs tidak dipungut", nilai: "Dibebaskan: PM tidak dapat dikreditkan; tidak dipungut: PM dapat dikreditkan", dasar: "Pasal 16B ayat (2)–(3) UU PPN", berlakuSejak: "2022-04-01" },
        { label: "Pengecualian Pasal 16D", nilai: "Aktiva dengan PM tidak dapat dikreditkan karena Ps. 9(8) huruf b dan c", dasar: "Pasal 16D UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Bukan BKP pasca-HPP", nilai: "Makanan/minuman di hotel-restoran; uang, emas batangan cadangan devisa, surat berharga", dasar: "Pasal 4A ayat (2) UU PPN", berlakuSejak: "2022-04-01" },
        { label: "Bukan JKP pasca-HPP", nilai: "Keagamaan, kesenian/hiburan, perhotelan, pemerintahan umum, parkir, boga/katering", dasar: "Pasal 4A ayat (3) UU PPN", berlakuSejak: "2022-04-01" },
        { label: "PPN DTP rumah 2026", nilai: "100% atas bagian harga s.d. Rp2 M, harga jual maks Rp5 M", dasar: "PMK 90/2025", berlakuSejak: "2026-01-01" },
        { label: "Syarat penyerahan terutang PPN", nilai: "BKP/JKP · di dalam Daerah Pabean · dalam kegiatan usaha atau pekerjaan pengusaha", dasar: "Pasal 4 ayat (1) huruf a dan c UU PPN dan penjelasannya", berlakuSejak: "2010-04-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) UU PPN", catatan: "delapan objek PPN" },
        { pasal: "Pasal 4A UU PPN", catatan: "bukan BKP dan bukan JKP, versi UU HPP" },
        { pasal: "Pasal 16B UU PPN jo. PP 49/2022", catatan: "fasilitas dibebaskan dan tidak dipungut" },
        { pasal: "Pasal 16C dan 16D UU PPN", catatan: "KMS dan penyerahan aktiva" },
        { pasal: "Pasal 1 angka 14 dan Penjelasan Pasal 4 ayat (1) huruf a dan c UU PPN", catatan: "pengertian pengusaha; syarat penyerahan yang terutang" }
      ],
      jebakan: [
        { teks: "Masih menganggap beras, jasa pendidikan, atau jasa kesehatan sebagai bukan objek PPN; sejak UU HPP semuanya BKP/JKP yang dibebaskan", tagSebab: "angka-usang" },
        { teks: "Mengkreditkan PM atas perolehan yang berkaitan dengan penyerahan dibebaskan", tagSebab: "salah-klasifikasi" },
        { teks: "Mengenakan PPN Pasal 16D atas penjualan sedan bekas direksi yang PM-nya memang tidak dapat dikreditkan", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PT A (PKP, pabrik tekstil) menjual mesin tenun bekas Rp200.000.000 dan sedan bekas direksi Rp300.000.000 (tidak termasuk PPN). PPN terutang atas kedua penjualan tersebut?",
        jawaban: "Rp22.000.000",
        langkah: [["Mesin: aktiva Pasal 16D, PM semula dapat dikreditkan", "terutang"], ["Sedan: PM semula tidak dapat dikreditkan (Ps. 9(8)c)", "dikecualikan dari 16D"], ["PPN = 12% × 11/12 × 200.000.000", "Rp22.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.3", slug: "subjek-pkp", judul: "Subjek PPN: PKP dan pengusaha kecil",
      estimasiMenit: 9, jenisDominan: ["konsep", "prosedur"],
      ringkasan: [
        "Pengusaha yang menyerahkan BKP/JKP di dalam Daerah Pabean atau melakukan ekspor wajib melaporkan usahanya untuk dikukuhkan sebagai PKP dan memungut, menyetor, serta melaporkan PPN (Pasal 3A ayat (1)).",
        "Pengusaha kecil adalah pengusaha dengan peredaran bruto dan/atau penerimaan bruto penyerahan BKP/JKP tidak lebih dari Rp4.800.000.000 dalam satu tahun buku; ia tidak wajib PKP tetapi dapat memilih dikukuhkan.",
        "Bagi WP PPh final UMKM (PP 55/2022 s.t.d.d. PP 20/2026) yang peredaran brutonya sampai dengan suatu bulan melampaui Rp4,8 miliar, PMK 164/2023 (Pasal 17 ayat (3) dan Pasal 18) mengatur lapor pengukuhan paling lambat akhir tahun buku saat batas terlampaui dan pemungutan PPN mulai Masa Pajak pertama tahun buku berikutnya; tenggat umum PMK 197/2013 adalah akhir bulan berikutnya setelah bulan batas terlampaui.",
        "Ambang dihitung dari peredaran bruto atas penyerahan BKP/JKP dalam rangka kegiatan usaha; penyerahan yang bukan objek PPN (misalnya jasa boga/katering atau makanan di restoran yang menjadi objek pajak daerah) tidak ikut dihitung.",
        "Pengusaha kecil yang memilih dikukuhkan terikat seluruh kewajiban PKP (faktur, SPT Masa PPN) dan dapat mengajukan pencabutan bila tidak lagi memenuhi syarat.",
        "Sejak 2025 pengukuhan dan pencabutan PKP dilakukan melalui Coretax; setiap orang pribadi atau badan yang memanfaatkan BKP tidak berwujud/JKP dari luar Daerah Pabean tetap wajib memungut dan menyetor PPN sendiri walau bukan PKP (Pasal 3A ayat (3))."
      ],
      poinKunci: [
        { label: "Batas pengusaha kecil", nilai: "≤ Rp4,8 miliar per tahun buku", dasar: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013 Pasal 1", berlakuSejak: "2014-01-01" },
        { label: "Tenggat lapor pengukuhan", nilai: "WP PPh final UMKM: akhir tahun buku saat batas terlampaui (umum, PMK 197/2013: akhir bulan berikutnya)", dasar: "PMK 164/2023 Pasal 17 ayat (3)", berlakuSejak: null },
        { label: "Mulai memungut PPN", nilai: "Masa Pajak pertama tahun buku berikutnya", dasar: "PMK 164/2023 Pasal 18", berlakuSejak: null },
        { label: "Kewajiban PKP", nilai: "Memungut, menyetor, melaporkan PPN/PPnBM terutang", dasar: "Pasal 3A ayat (1) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Pemanfaatan dari luar Daerah Pabean", nilai: "PPN dipungut dan disetor oleh pemanfaat (PKP maupun bukan)", dasar: "Pasal 3A ayat (3) UU PPN", berlakuSejak: "2010-04-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3A UU PPN", catatan: "kewajiban pengusaha dan pilihan pengusaha kecil" },
        { pasal: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", catatan: "batasan pengusaha kecil Rp4,8 miliar" },
        { pasal: "PMK 164/2023 Pasal 17–18", catatan: "lapor pengukuhan paling lambat akhir tahun buku; kewajiban PPN mulai Masa pertama tahun buku berikutnya" },
        { pasal: "PMK 81/2024", catatan: "tata cara pengukuhan dan pencabutan PKP melalui Coretax" }
      ],
      jebakan: [
        { teks: "Memakai batas lama Rp600 juta (pra-2014) atau menyamakan ambang PKP dengan ambang NPPN/PPh final 'kurang dari' Rp4,8 M; untuk PKP batasnya 'tidak lebih dari' Rp4,8 M", tagSebab: "angka-usang" },
        { teks: "Bagi WP PPh final UMKM, memakai tenggat umum 'akhir bulan berikutnya' (PMK 197/2013) atau mengira PPN wajib dipungut sejak bulan batas terlampaui; PMK 164/2023 mengatur lapor paling lambat akhir tahun buku dan PPN dipungut mulai Masa pertama tahun buku berikutnya", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Peredaran bruto Toko Berkah (orang pribadi, WP PPh final UMKM PP 55/2022, tahun buku Januari–Desember) atas penyerahan BKP secara kumulatif melampaui Rp4,8 miliar pada 18 Agustus 2026. Paling lambat kapan ia wajib melaporkan usahanya untuk dikukuhkan sebagai PKP, dan mulai Masa Pajak apa ia wajib memungut PPN?",
        jawaban: "Lapor paling lambat 31 Desember 2026; memungut PPN mulai Masa Januari 2027",
        langkah: [["Bulan terlampauinya batas", "Agustus 2026 (tahun buku 2026)"], ["Tenggat: akhir tahun buku saat batas terlampaui (PMK 164/2023 Ps. 17 ayat (3))", "31 Desember 2026"], ["Kewajiban PPN: Masa Pajak pertama tahun buku berikutnya (Ps. 18)", "Masa Januari 2027"]]
      },
      verifikasi: "◐",
      peringatan: "Tenggat akhir tahun buku dan awal pemungutan Masa pertama tahun buku berikutnya (PMK 164/2023) berlaku bagi WP PPh final UMKM; nomor pasal dan cakupannya belum dicek ke teks. Riset mencatat tenggat umum PMK 197/2013 (akhir bulan berikutnya) belum dicabut PMK 81/2024."
    },
    {
      id: "A4.4", slug: "saat-tempat-terutang", judul: "Saat dan tempat PPN terutang, pemusatan",
      estimasiMenit: 10, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "PPN terutang pada saat penyerahan BKP/JKP, impor, pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean, ekspor, atau saat pembayaran apabila pembayaran diterima sebelum penyerahan (Pasal 11 ayat (1)–(2)).",
        "BKP berwujud bergerak: saat diserahkan langsung kepada pembeli/juru kirim/pengusaha angkutan, atau saat harga diakui sebagai piutang/penghasilan atau faktur penjualan diterbitkan, mana yang lebih dulu (PP 44/2022).",
        "BKP tidak bergerak: saat penyerahan hak untuk menggunakan/menguasai secara hukum atau nyata. JKP: saat harga diakui sebagai piutang/penghasilan atau faktur penjualan diterbitkan sesuai prinsip akuntansi.",
        "Pemanfaatan dari luar Daerah Pabean: saat yang lebih dulu antara harga diakui sebagai utang, harga ditagih, atau harga dibayar; PPN disetor sendiri oleh pemanfaat paling lambat tanggal 15 bulan berikutnya dengan SSP sebagai dokumen tertentu.",
        "Tempat terutang (Pasal 12): tempat tinggal/kedudukan dan tempat kegiatan usaha PKP; impor di tempat pemasukan; pemanfaatan dari luar Daerah Pabean di tempat pemanfaat.",
        "PKP dengan lebih dari satu tempat terutang dapat memusatkan tempat terutang dengan pemberitahuan melalui Coretax (PMK 81/2024, menggantikan PER-11/PJ/2020)."
      ],
      poinKunci: [
        { label: "Pembayaran mendahului penyerahan", nilai: "Terutang saat pembayaran (sebesar yang dibayar)", dasar: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Setor PPN pemanfaatan LN", nilai: "Paling lambat tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" },
        { label: "Pemusatan", nilai: "Pemberitahuan melalui Coretax, bukan permohonan izin", dasar: "Pasal 12 ayat (2) UU PPN; PMK 81/2024", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 11 UU PPN", catatan: "saat terutang" },
        { pasal: "Pasal 12 UU PPN", catatan: "tempat terutang dan pemusatan" },
        { pasal: "PP 44/2022 (pengganti PP 1/2012)", catatan: "rincian saat penyerahan BKP bergerak/tidak bergerak dan JKP" }
      ],
      jebakan: [
        { teks: "Memilih tanggal pembayaran sebagai saat terutang padahal barang sudah diserahkan lebih dulu; pembayaran hanya menentukan bila mendahului penyerahan", tagSebab: "salah-baca" },
        { teks: "Memakai tenggat akhir bulan untuk PPN pemanfaatan JKP luar negeri; yang benar tanggal 15 bulan berikutnya (PMK 81/2024)", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PT B menyerahkan BKP kepada perusahaan ekspedisi atas perintah pembeli pada 28 Maret 2026, menerbitkan faktur penjualan 2 April 2026, dan menerima pembayaran 15 April 2026. Kapan PPN terutang?",
        jawaban: "28 Maret 2026",
        langkah: [["Barang bergerak diserahkan kepada juru kirim/pengusaha angkutan", "28 Maret 2026"], ["Faktur penjualan dan pembayaran terjadi setelahnya", "tidak menentukan"], ["Faktur pajak wajib dibuat", "28 Maret 2026 (Masa Maret)"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.5", slug: "faktur-pajak-coretax", judul: "Faktur pajak di Coretax",
      estimasiMenit: 14, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Faktur pajak dibuat pada saat penyerahan, saat pembayaran bila mendahului penyerahan, saat penerimaan termin, atau saat lain yang diatur PMK; faktur gabungan untuk satu pembeli dibuat paling lama akhir bulan penyerahan (Pasal 13 ayat (1a)–(2a)).",
        "Faktur pajak Coretax wajib diunggah dan memperoleh persetujuan DJP paling lambat tanggal 20 bulan berikutnya setelah tanggal pembuatan (PER-11/PJ/2025, berlaku 22 Mei 2025; sebelumnya tanggal 15).",
        "Nomor faktur Coretax diawali 2 digit kode transaksi (01–10), diikuti kode status (normal atau pengganti) dan nomor seri faktur pajak yang diberikan otomatis oleh Coretax; PKP tidak lagi meminta NSFP ke KPP.",
        "Keterangan minimum Pasal 13 ayat (5): identitas penjual; identitas pembeli (nama, alamat, NPWP/NIK/paspor); jenis barang/jasa, harga jual/penggantian, potongan; PPN dipungut; PPnBM; kode, nomor seri, tanggal; nama dan tanda tangan. Faktur yang tidak lengkap = faktur cacat, PM pembeli tidak dapat dikreditkan.",
        "PKP yang tidak membuat, terlambat membuat, atau membuat faktur tidak lengkap dikenai STP denda 1% × DPP (Pasal 14 ayat (4) UU KUP). Faktur yang dibuat lebih dari 3 bulan sejak saat seharusnya dibuat dianggap tidak dibuat: PPN tetap harus disetor, denda 1% tetap dikenakan, dan PM pembeli tidak dapat dikreditkan.",
        "Dokumen tertentu yang dipersamakan dengan faktur pajak (Pasal 13 ayat (6)): PIB dan SSP untuk impor, PEB untuk ekspor, SSP atas pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean, tagihan listrik/telepon/air, tiket dan airway bill, bukti tagihan jasa kepelabuhanan, dan sebagainya.",
        "Fungsi faktur pajak: bukti pungutan PPN (dan PPnBM) yang dibuat PKP atas penyerahan BKP/JKP, sekaligus sarana administrasi bagi PKP pembeli untuk mengkreditkan Pajak Masukan. Faktur bukan bukti setor ke kas negara (penyetoran dibuktikan NTPN), dan wajib dibuat untuk setiap penyerahan, termasuk kepada pembeli bukan PKP.",
        "Faktur harus memenuhi persyaratan formal dan material (Pasal 13 ayat (9) UU PPN): formal berarti keterangan Pasal 13 ayat (5) diisi lengkap, jelas, dan benar; material berarti keterangannya sesuai keadaan sebenarnya mengenai penyerahan BKP/JKP, ekspor, atau pembayaran. Faktur yang tidak memenuhi salah satunya tidak dapat dipakai mengkreditkan PM (Pasal 9 ayat (8) huruf f). Menerbitkan atau menggunakan faktur yang tidak berdasarkan transaksi sebenarnya, atau menerbitkan faktur sebelum dikukuhkan sebagai PKP, diancam pidana penjara 2–6 tahun dan denda 2–6 kali pajak dalam faktur (Pasal 39A UU KUP).",
        "Faktur pajak pengganti dibuat bila faktur yang sudah disetujui DJP memuat kesalahan pengisian atau keterangannya perlu diubah: pengganti menggantikan faktur semula pada Masa Pajak yang sama, sehingga SPT Masa PPN masa itu dibetulkan bila sudah disampaikan. Faktur dibatalkan bila transaksinya tidak pernah terjadi atau faktur terbit ganda; pembatalan faktur yang sudah dilaporkan juga diikuti pembetulan SPT Masa PPN masa faktur tersebut, dan PKP pembeli menyesuaikan PM pada masa yang sama.",
        "Nota retur (atas BKP yang dikembalikan) dan nota pembatalan (atas JKP yang dibatalkan seluruhnya atau sebagian) mengurangi PK penjual dan PM pembeli pada Masa Pajak terjadinya pengembalian atau pembatalan, bukan dengan membetulkan masa faktur semula (Pasal 5A UU PPN). Bila PM semula sudah dikreditkan, pembeli mengurangkan PM pada masa retur; bila PM semula dibiayakan atau dikapitalisasi, PPN atas retur mengurangi biaya atau harga perolehan. Di Coretax dokumen retur/pembatalan dibuat secara elektronik dengan merujuk faktur semula."
      ],
      poinKunci: [
        { label: "Batas unggah faktur", nilai: "Tanggal 20 bulan berikutnya setelah tanggal faktur", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
        { label: "Sanksi faktur", nilai: "Denda 1% × DPP (STP)", dasar: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Faktur sangat terlambat", nilai: "> 3 bulan sejak saat seharusnya → dianggap tidak dibuat", dasar: "PP 44/2022; PER-11/PJ/2025", berlakuSejak: "2022-12-02" },
        { label: "Kode transaksi", nilai: "10 kode (01–10)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
        { label: "Faktur gabungan", nilai: "Paling lama akhir bulan penyerahan", dasar: "Pasal 13 ayat (2a) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Fungsi faktur pajak", nilai: "Bukti pungutan PPN oleh PKP penjual; sarana kredit PM bagi PKP pembeli", dasar: "Pasal 13 ayat (1) dan Pasal 9 ayat (8) huruf f UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Syarat faktur", nilai: "Formal (keterangan Ps. 13 ayat (5) lengkap dan benar) dan material (sesuai transaksi sebenarnya)", dasar: "Pasal 13 ayat (9) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Faktur TBTS atau terbit sebelum dikukuhkan PKP", nilai: "Pidana penjara 2–6 tahun dan denda 2–6 × pajak dalam faktur", dasar: "Pasal 39A UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Retur BKP / pembatalan JKP", nilai: "Kurangi PK penjual dan PM pembeli pada masa retur/pembatalan", dasar: "Pasal 5A UU PPN", berlakuSejak: "2010-04-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 13 UU PPN", catatan: "saat pembuatan, keterangan minimum, dokumen tertentu" },
        { pasal: "Pasal 14 ayat (4) UU KUP", catatan: "denda 1% DPP" },
        { pasal: "PER-11/PJ/2025", catatan: "bentuk faktur Coretax, batas unggah tanggal 20, kode transaksi" },
        { pasal: "Pasal 9 ayat (8) huruf f UU PPN", catatan: "PM atas faktur cacat tidak dapat dikreditkan" },
        { pasal: "Pasal 5A dan Pasal 13 ayat (9) UU PPN", catatan: "nota retur dan nota pembatalan; persyaratan formal dan material faktur" },
        { pasal: "Pasal 39A UU KUP", catatan: "pidana atas faktur yang tidak berdasarkan transaksi sebenarnya" }
      ],
      jebakan: [
        { teks: "Memakai batas unggah tanggal 15 (ketentuan e-Faktur lama) atau sanksi 2% DPP (pra-UU HPP)", tagSebab: "angka-usang" },
        { teks: "Menghitung sanksi 1% dari harga jual, padahal dasarnya DPP (untuk non-mewah DPP = 11/12 × harga jual)", tagSebab: "salah-hitung" },
        { teks: "Mengira faktur yang terlambat lebih dari 3 bulan cukup dikenai sanksi 1%; faktur itu dianggap tidak dibuat sehingga PM pembeli hangus", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PKP menyerahkan BKP non-mewah dengan harga jual Rp60.000.000 pada 5 April 2026 tetapi baru membuat faktur pajak pada 2 Juni 2026. Sanksi administrasi yang ditagih melalui STP?",
        jawaban: "Rp550.000",
        langkah: [["Terlambat < 3 bulan → faktur sah tetapi terlambat", "Ps. 14(4) UU KUP"], ["DPP = 11/12 × 60.000.000", "Rp55.000.000"], ["Denda = 1% × 55.000.000", "Rp550.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.6", slug: "dpp-tarif", judul: "DPP, tarif 12%, nilai lain 11/12, besaran tertentu, KMS, dan PPnBM",
      estimasiMenit: 16, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Tarif PPN 12% berlaku sejak 1 Januari 2025 (Pasal 7 ayat (1) huruf b UU PPN); ekspor BKP berwujud, BKP tidak berwujud, dan JKP dikenai 0% (Pasal 7 ayat (2)). Tarif dapat diubah dalam rentang 5%–15% dengan PP (Pasal 7 ayat (3)).",
        "Untuk BKP/JKP yang tidak tergolong mewah, PMK 131/2024 menetapkan DPP nilai lain 11/12 dari harga jual, penggantian, atau nilai impor, sehingga PPN = 12% × 11/12 × harga = 11% dari harga; beban konsumen tidak berubah dibanding 2024.",
        "Untuk BKP yang tergolong mewah (objek PPnBM), PPN = 12% × harga jual penuh sejak 1 Februari 2025. PPnBM dihitung terpisah = tarif PPnBM × harga jual, dikenakan sekali pada penyerahan oleh pabrikan atau saat impor, dan tidak dapat dikreditkan oleh pembeli.",
        "Harga jual/penggantian mencakup semua biaya yang diminta penjual (misalnya ongkos kirim yang ditagih), tidak termasuk PPN dan potongan harga yang dicantumkan dalam faktur; nilai impor = nilai pabean (CIF) + bea masuk + pungutan lain berdasarkan ketentuan kepabeanan dan cukai.",
        "Bila harga barang/jasa non-mewah sudah termasuk PPN, PPN = 11/111 × harga total; mengalikan 11% langsung ke harga termasuk PPN adalah kesalahan hitung yang sering dipakai sebagai pengecoh.",
        "Besaran tertentu Pasal 9A (PMK sektoral 2022 jo. PMK 11/2025): kendaraan bermotor bekas, jasa pengiriman paket, biro perjalanan wisata, freight forwarding yang tagihannya memuat freight, dan agen asuransi pada umumnya 1,1% efektif; pialang asuransi 2,2%. PM yang berkaitan dengan penyerahan itu tidak dapat dikreditkan.",
        "Kegiatan membangun sendiri (Pasal 16C; sejak 2025 diatur PMK 81/2024 Pasal 323–324 yang mencabut PMK 61/PMK.03/2022, rumusnya diubah PMK 11/2025): bangunan permanen dengan luas paling sedikit 200 m², DPP = biaya membangun tiap masa tanpa harga tanah, besaran tertentu 20% × 11/12 × 12% = 2,2%; PPN KMS disetor paling lambat tanggal 15 bulan berikutnya."
      ],
      poinKunci: [
        { label: "Tarif PPN", nilai: "12% sejak 1 Januari 2025", dasar: "Pasal 7 ayat (1) huruf b UU PPN; PMK 131/2024 Pasal 2", berlakuSejak: "2025-01-01" },
        { label: "DPP non-mewah", nilai: "11/12 × harga → beban efektif 11%", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" },
        { label: "Barang mewah", nilai: "PPN 12% × harga jual penuh, ditambah PPnBM", dasar: "PMK 131/2024 Pasal 2 dan Pasal 5", berlakuSejak: "2025-02-01" },
        { label: "Harga termasuk PPN (non-mewah)", nilai: "PPN = 11/111 × harga total", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" },
        { label: "Kendaraan bermotor bekas, paket, freight forwarding", nilai: "1,1% dari harga jual/nilai tagihan; PM tidak dikreditkan", dasar: "Pasal 9A UU PPN; PMK 65/2022, PMK 71/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04" },
        { label: "KMS", nilai: "2,2% (20% × 11/12 × 12%) × biaya membangun tanpa tanah; luas ≥ 200 m²", dasar: "Pasal 16C UU PPN; PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025 (menggantikan PMK 61/PMK.03/2022)", berlakuSejak: "2025-01-01" },
        { label: "PPnBM hunian mewah", nilai: "20% atas harga jual ≥ Rp30 miliar", dasar: "PMK 96/PMK.03/2021 s.t.d.d. PMK 15/2023", berlakuSejak: null }
      ],
      dasarHukum: [
        { pasal: "Pasal 7 UU PPN", catatan: "tarif 12%, tarif 0% ekspor, rentang 5%–15%" },
        { pasal: "Pasal 8A dan Pasal 9A UU PPN", catatan: "DPP harga jual/penggantian/nilai lain dan PPN besaran tertentu" },
        { pasal: "PMK 131/2024 Pasal 2–5", catatan: "tarif 12%, DPP nilai lain 11/12, barang mewah, masa transisi" },
        { pasal: "PMK 11/2025", catatan: "penyesuaian rumus nilai lain dan besaran tertentu dengan faktor 11/12" },
        { pasal: "Pasal 5 dan Pasal 8 UU PPN", catatan: "PPnBM: dikenakan sekali, tarif 10%–200%" }
      ],
      jebakan: [
        { teks: "Mengalikan 12% langsung ke harga jual barang non-mewah; hasilnya lebih tinggi 1/11 dari PPN yang benar", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai DPP 11/12 untuk barang mewah atau menghitung PPnBM dari DPP 11/12; sejak Februari 2025 keduanya memakai harga jual penuh", tagSebab: "salah-hitung" },
        { teks: "Mengkreditkan PM atas penyerahan yang memakai besaran tertentu (misalnya mobil bekas atau freight forwarding)", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PKP menyerahkan BKP non-mewah dengan harga jual Rp10.000.000 (belum termasuk PPN). Berapa PPN yang dipungut?",
        jawaban: "Rp1.100.000",
        langkah: [["DPP nilai lain = 11/12 × 10.000.000", "Rp9.166.667"], ["PPN = 12% × 9.166.667", "Rp1.100.000"], ["Cek: 11% × 10.000.000", "Rp1.100.000"]]
      },
      verifikasi: "◐",
      peringatan: "KMS 2,2% (PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025) dan kendaraan bermotor bekas 1,1% terkonfirmasi ringkasan sekunder; besaran sektor lain (paket, biro perjalanan, freight forwarding, agen/pialang asuransi) mengikuti prinsip PMK 11/2025 yang menjaga beban efektif, tetapi angka per pasalnya belum dicek ke teks. PMK 53/2025 (berlaku 1 Agustus 2025) mengubah PMK 11/2025; isinya belum dibaca."
    },
    {
      id: "A4.7", slug: "pengkreditan-pm", judul: "Pengkreditan Pajak Masukan",
      estimasiMenit: 15, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "PM dikreditkan dengan PK dalam Masa Pajak yang sama (Pasal 9 ayat (2)); syaratnya faktur memenuhi Pasal 13 ayat (5), perolehan berhubungan langsung dengan kegiatan usaha, dan PM dilaporkan dalam SPT Masa PPN.",
        "PM yang belum dikreditkan pada masa yang sama dapat dikreditkan paling lama 3 Masa Pajak setelah berakhirnya Masa Pajak saat faktur dibuat, sepanjang belum dibebankan sebagai biaya atau ditambahkan ke harga perolehan dan belum dilakukan pemeriksaan (Pasal 9 ayat (9)).",
        "PM tidak dapat dikreditkan (Pasal 9 ayat (8)): perolehan yang tidak berhubungan langsung dengan kegiatan usaha (huruf b); perolehan dan pemeliharaan sedan dan station wagon, kecuali barang dagangan atau disewakan (huruf c); faktur yang tidak memenuhi Pasal 13 ayat (5)/(9), termasuk tanpa identitas pembeli (huruf f).",
        "PM atas perolehan yang berkaitan dengan penyerahan yang dibebaskan tidak dapat dikreditkan (Pasal 16B ayat (3)); PM atas penyerahan yang tidak dipungut, ekspor, atau kepada pemungut tetap dapat dikreditkan.",
        "PKP yang melakukan penyerahan terutang dan dibebaskan: PM yang langsung terkait penyerahan terutang dikreditkan penuh, PM yang langsung terkait penyerahan dibebaskan tidak dikreditkan, dan PM bersama dikreditkan secara proporsional (penyerahan terutang ÷ seluruh penyerahan) (Pasal 9 ayat (5)–(6)).",
        "Untuk masa sebelum pengusaha dikukuhkan sebagai PKP (misalnya pengukuhan secara jabatan), PM dapat dikreditkan memakai pedoman 80% dari PK (Pasal 9 ayat (9a), sisipan UU Cipta Kerja).",
        "PM yang tidak dapat dikreditkan bukan hilang begitu saja: untuk PPh, PM tersebut dapat menjadi bagian biaya atau harga perolehan sepanjang pengeluarannya sendiri boleh dikurangkan."
      ],
      poinKunci: [
        { label: "Batas pengkreditan tertunda", nilai: "Paling lama 3 Masa Pajak setelah masa faktur", dasar: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Sedan dan station wagon", nilai: "PM tidak dapat dikreditkan, kecuali barang dagangan/disewakan", dasar: "Pasal 9 ayat (8) huruf c UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Faktur cacat", nilai: "PM tidak dapat dikreditkan", dasar: "Pasal 9 ayat (8) huruf f UU PPN", berlakuSejak: "2010-04-01" },
        { label: "PM sebelum dikukuhkan PKP", nilai: "Pedoman 80% × PK", dasar: "Pasal 9 ayat (9a) UU PPN (UU Cipta Kerja)", berlakuSejak: "2020-11-02" },
        { label: "PM bersama (terutang + dibebaskan)", nilai: "Proporsional: penyerahan terutang ÷ total penyerahan", dasar: "Pasal 9 ayat (5)–(6) UU PPN", berlakuSejak: "2010-04-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 9 ayat (2), (5), (6), (8), (9), (9a) UU PPN", catatan: "pengkreditan, PM tidak dapat dikreditkan, batas waktu, pedoman 80%" },
        { pasal: "Pasal 16B ayat (3) UU PPN", catatan: "PM atas penyerahan dibebaskan" },
        { pasal: "Pasal 13 ayat (5) UU PPN", catatan: "keterangan minimum faktur" }
      ],
      jebakan: [
        { teks: "Menganggap PM yang terlewat boleh dikreditkan kapan saja sampai akhir tahun buku; batasnya 3 Masa Pajak", tagSebab: "salah-hitung" },
        { teks: "Mengkreditkan PM sedan operasional direksi atau kendaraan yang tidak disewakan/diperdagangkan", tagSebab: "lupa-pasal" },
        { teks: "Mengkreditkan seluruh PM bersama padahal PKP juga punya penyerahan dibebaskan", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PKP menjual barang terutang Rp1.200.000.000 dan barang dibebaskan Rp800.000.000 pada satu masa. PM bersama (sewa gudang, listrik) Rp60.000.000 tidak dapat diidentifikasi ke salah satu penyerahan. PM bersama yang dapat dikreditkan?",
        jawaban: "Rp36.000.000",
        langkah: [["Proporsi = 1.200.000.000 ÷ 2.000.000.000", "60%"], ["PM dapat dikreditkan = 60% × 60.000.000", "Rp36.000.000"], ["Sisa Rp24.000.000", "tidak dapat dikreditkan"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.8", slug: "pemungut-ppn", judul: "Pemungut PPN: instansi pemerintah, BUMN, badan tertentu, dan PMSE",
      estimasiMenit: 11, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "PPN atas penyerahan BKP/JKP kepada pemungut PPN dipungut, disetor, dan dilaporkan oleh pemungut (Pasal 16A ayat (1) UU PPN); PKP penjual tetap membuat faktur pajak dan melaporkan penyerahannya, tetapi tidak menyetor PPN tersebut.",
        "Pemungut PPN meliputi instansi pemerintah (bendahara dan pejabat penerbit SPM), BUMN dan badan usaha tertentu yang ditunjuk, serta pelaku usaha PMSE yang ditunjuk (Pasal 32A UU KUP jo. PMK 60/PMK.03/2022).",
        "Kode transaksi faktur: 02 untuk penyerahan kepada instansi pemerintah dan 03 untuk penyerahan kepada pemungut selain instansi pemerintah (BUMN, KKKS migas, badan tertentu).",
        "Dalam SPT Masa PPN penjual, penyerahan kepada pemungut dicatat terpisah dari penyerahan yang PPN-nya dipungut sendiri; karena PK-nya tidak disetor sendiri, penjual kepada pemungut sering lebih bayar dan termasuk PKP yang dapat meminta restitusi setiap masa (Pasal 9 ayat (4b)).",
        "Bendahara pemerintah juga memungut PPh Pasal 22 sebesar 1,5% dari harga pembelian tidak termasuk PPN, sehingga dana yang diterima rekanan = nilai kontrak − PPN − PPh 22.",
        "Pelaku usaha PMSE luar negeri yang ditunjuk memungut PPN 12% × 11/12 (efektif 11%) atas BKP tidak berwujud/JKP yang dimanfaatkan di Indonesia; kriteria penunjukan: nilai transaksi > Rp600 juta setahun atau Rp50 juta sebulan, dan/atau traffic > 12.000 setahun atau 1.000 sebulan."
      ],
      poinKunci: [
        { label: "Kode faktur ke instansi pemerintah", nilai: "02", dasar: "PER-11/PJ/2025 (meneruskan PER-03/PJ/2022)", berlakuSejak: "2025-05-22" },
        { label: "Kode faktur ke pemungut lain", nilai: "03 (BUMN, KKKS, badan tertentu)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
        { label: "PPh 22 bendahara", nilai: "1,5% × harga tidak termasuk PPN", dasar: "Pasal 22 ayat (1) huruf a UU PPh; PMK 34/PMK.010/2017 s.t.d.t.d.", berlakuSejak: null },
        { label: "Ambang penunjukan PMSE", nilai: "> Rp600 jt/tahun atau Rp50 jt/bulan; traffic > 12.000/tahun atau 1.000/bulan", dasar: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01" },
        { label: "PPN PMSE", nilai: "12% × 11/12 (efektif 11%)", dasar: "PMK 60/2022 jo. PMK 131/2024", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 16A UU PPN", catatan: "pemungutan PPN oleh pemungut" },
        { pasal: "Pasal 32A UU KUP", catatan: "penunjukan pihak lain sebagai pemungut (dasar PMSE)" },
        { pasal: "PMK 60/PMK.03/2022", catatan: "PPN PMSE: kriteria penunjukan, pemungutan, penyetoran, pelaporan" },
        { pasal: "Pasal 9 ayat (4b) huruf b UU PPN", catatan: "restitusi setiap masa bagi penjual kepada pemungut" }
      ],
      jebakan: [
        { teks: "PKP penjual ikut menyetor PPN yang sudah dipungut bendahara sehingga PPN tersetor dua kali", tagSebab: "salah-klasifikasi" },
        { teks: "Menghitung PPh 22 bendahara dari nilai kontrak yang masih termasuk PPN", tagSebab: "salah-hitung" },
        { teks: "Memakai kode 01 atau 03 untuk penyerahan kepada dinas/kementerian; yang benar 02", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "CV Rekan menyerahkan alat tulis kepada bendahara dinas dengan nilai kontrak Rp55.500.000 termasuk PPN. Berapa dana yang diterima CV setelah pemungutan PPN dan PPh 22?",
        jawaban: "Rp49.250.000",
        langkah: [["Harga tidak termasuk PPN = 55.500.000 × 100/111", "Rp50.000.000"], ["PPN dipungut bendahara = 11% × 50.000.000", "Rp5.500.000"], ["PPh 22 = 1,5% × 50.000.000", "Rp750.000"], ["Diterima = 55.500.000 − 5.500.000 − 750.000", "Rp49.250.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A4.9", slug: "restitusi-kompensasi", judul: "Kompensasi, restitusi, dan pengembalian pendahuluan PPN",
      estimasiMenit: 12, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "Bila PM yang dapat dikreditkan lebih besar daripada PK, selisihnya adalah kelebihan pajak yang dikompensasikan ke Masa Pajak berikutnya (Pasal 9 ayat (4) UU PPN).",
        "Permohonan pengembalian (restitusi) kelebihan pajak hanya dapat diajukan pada akhir tahun buku (Pasal 9 ayat (4a)); PKP yang tidak meminta restitusi tetap dapat mengompensasikan kelebihan ke masa berikutnya, termasuk ke tahun berikutnya.",
        "PKP tertentu boleh meminta restitusi setiap masa (Pasal 9 ayat (4b)): eksportir BKP berwujud, penyerahan kepada pemungut PPN, penyerahan yang tidak dipungut, ekspor BKP tidak berwujud, ekspor JKP, dan PKP yang belum berproduksi.",
        "Restitusi melalui pemeriksaan (Pasal 17B UU KUP): keputusan paling lama 12 bulan sejak permohonan diterima lengkap; bila terlampaui permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan kemudian.",
        "Pengembalian pendahuluan tanpa pemeriksaan (sejak 1 Mei 2026 diatur PMK 28/2026, menggantikan PMK 39/2018 s.t.d.d. PMK 209/2021): WP kriteria tertentu (Pasal 17C), WP persyaratan tertentu (Pasal 17D; untuk PKP: lebih bayar paling banyak Rp1 miliar dan jumlah penyerahan paling banyak Rp4,2 miliar untuk suatu Masa Pajak, PKP yang belum melakukan penyerahan tidak termasuk), dan PKP berisiko rendah (Pasal 9 ayat (4c)); sejak PMK 28/2026 PKP persyaratan tertentu tidak lagi diperlakukan sebagai PKP berisiko rendah. Pengembalian diproses melalui penelitian; SKPPKP PPN diterbitkan paling lama 1 bulan.",
        "Bila setelah pengembalian pendahuluan terbit SKPKB, WP Pasal 17C/17D dikenai kenaikan 100% dari kekurangan pajak; PPN yang ternyata tidak seharusnya dikompensasikan atau tidak seharusnya dikenai tarif 0% ditagih dengan SKPKB plus kenaikan 75% (Pasal 13 ayat (3) UU KUP)."
      ],
      poinKunci: [
        { label: "Restitusi PKP umum", nilai: "Hanya pada akhir tahun buku", dasar: "Pasal 9 ayat (4a) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Restitusi setiap masa", nilai: "Ekspor, ke pemungut, tidak dipungut, belum berproduksi", dasar: "Pasal 9 ayat (4b) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Jangka waktu Pasal 17B", nilai: "12 bulan sejak permohonan lengkap", dasar: "Pasal 17B ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Pasal 17D untuk PKP", nilai: "Lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak (sebelumnya lebih bayar ≤ Rp5 miliar)", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" },
        { label: "Kompensasi tidak seharusnya", nilai: "SKPKB + kenaikan 75%", dasar: "Pasal 13 ayat (3) UU KUP", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 9 ayat (4)–(4c) UU PPN", catatan: "kompensasi, restitusi akhir tahun, PKP tertentu, PKP berisiko rendah" },
        { pasal: "Pasal 17B, 17C, 17D UU KUP", catatan: "restitusi dengan pemeriksaan dan pengembalian pendahuluan" },
        { pasal: "PMK 28/2026", catatan: "tata cara pengembalian pendahuluan (Pasal 17C, 17D, PKP berisiko rendah); menggantikan PMK 39/2018 s.t.d.d. PMK 209/2021" },
        { pasal: "Pasal 13 ayat (1) huruf c dan ayat (3) UU KUP", catatan: "SKPKB atas kompensasi/tarif 0% yang tidak seharusnya" }
      ],
      jebakan: [
        { teks: "Mengajukan restitusi di tengah tahun bagi PKP pedagang dalam negeri biasa; restitusi hanya akhir tahun buku", tagSebab: "lupa-pasal" },
        { teks: "Memakai batas Pasal 17D Rp5 miliar untuk PKP (PMK 209/2021); sejak 1 Mei 2026 batasnya lebih bayar Rp1 miliar dengan penyerahan paling banyak Rp4,2 miliar per Masa Pajak (PMK 28/2026)", tagSebab: "angka-usang" },
        { teks: "Menyamakan 12 bulan (Pasal 17B) dengan 1 bulan (SKPPKP PPN)", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PKP pedagang dalam negeri (tahun buku Januari–Desember) lebih bayar Rp20.000.000 pada Masa Juli 2026. Apa perlakuannya?",
        jawaban: "Dikompensasikan ke Masa Agustus 2026; restitusi baru dapat diajukan pada akhir tahun buku (Masa Desember 2026)",
        langkah: [["PKP bukan kriteria Pasal 9 ayat (4b)", "tidak boleh restitusi tiap masa"], ["Perlakuan Masa Juli", "kompensasi ke Agustus"], ["Pilihan restitusi", "SPT Masa Desember 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Batas Pasal 17D bagi PKP menurut PMK 28 Tahun 2026 (lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak, berlaku 1 Mei 2026) terverifikasi dari ringkasan resmi DJP (pajak.go.id) ✅; SKPPKP PPN 1 bulan, nomor pasal, dan teks utuh PMK 28/2026 belum dibaca ◐."
    },
    {
      id: "A4.10", slug: "spt-masa-ppn", judul: "SPT Masa PPN di Coretax",
      estimasiMenit: 13, jenisDominan: ["prosedur", "baris-spt"],
      ringkasan: [
        "PPN kurang bayar disetor paling lama akhir bulan berikutnya setelah Masa Pajak berakhir dan sebelum SPT Masa PPN disampaikan; SPT Masa PPN disampaikan paling lama akhir bulan berikutnya (Pasal 15A UU PPN).",
        "Sejak Masa Pajak Januari 2025 SPT Masa PPN dibuat dan disampaikan melalui Coretax (PMK 81/2024); daftar PK dan PM terisi dari faktur Coretax yang sudah disetujui, dan PM baru masuk SPT setelah dikreditkan oleh pembeli.",
        "SPT Masa PPN wajib disampaikan setiap masa, termasuk masa tanpa transaksi (nihil); terlambat menyampaikan dikenai denda Rp500.000 per SPT (Pasal 7 ayat (1) UU KUP).",
        "Terlambat menyetor PPN kurang bayar dikenai bunga Pasal 9 ayat (2a) UU KUP: (tarif acuan + 5%) ÷ 12 per bulan, bagian bulan dihitung penuh, paling lama 24 bulan; pembetulan yang menimbulkan kurang bayar dikenai bunga Pasal 8 ayat (2a) dengan tarif yang sama.",
        "Susunan isi SPT: penyerahan dikelompokkan menjadi ekspor, penyerahan yang PPN-nya dipungut sendiri, dipungut oleh pemungut, tidak dipungut, dibebaskan, dan tidak terutang; perolehan dikelompokkan menjadi impor/pemanfaatan dari luar Daerah Pabean dan perolehan dalam negeri; PPN kurang bayar = PK yang dipungut sendiri − PM yang dapat diperhitungkan (termasuk kompensasi masa lalu). Lampiran SPT Masa PPN PKP umum di Coretax: A1 (ekspor), A2 (PK dalam negeri), B1 (PM impor dan pemanfaatan dari luar Daerah Pabean), B2 (PM dalam negeri), B3 (PM yang tidak dikreditkan atau mendapat fasilitas).",
        "PKP orang pribadi yang menghitung PPh dengan NPPN tetap PKP biasa untuk PPN: membuat faktur, mengkreditkan PM berdasarkan faktur, dan menyampaikan SPT Masa PPN tiap masa; NPPN hanya mengatur penghitungan penghasilan neto PPh.",
        "PKP yang memusatkan tempat terutang menyampaikan satu SPT Masa PPN untuk seluruh tempat kegiatan usaha; lebih bayar pada SPT dapat dipilih untuk dikompensasikan atau, bila memenuhi syarat, direstitusi."
      ],
      poinKunci: [
        { label: "Batas setor dan lapor", nilai: "Akhir bulan berikutnya; setor sebelum SPT disampaikan", dasar: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Denda terlambat SPT Masa PPN", nilai: "Rp500.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Bunga terlambat setor", nilai: "(Tarif acuan + 5%) ÷ 12 per bulan, maks 24 bulan", dasar: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "SPT nihil", nilai: "Tetap wajib disampaikan", dasar: "Pasal 3 ayat (1) UU KUP; Pasal 15A ayat (2) UU PPN", berlakuSejak: "2010-04-01" },
        { label: "Media", nilai: "Coretax sejak Masa Pajak Januari 2025", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 15A UU PPN", catatan: "batas setor dan lapor SPT Masa PPN" },
        { pasal: "Pasal 7 ayat (1) UU KUP", catatan: "denda Rp500.000" },
        { pasal: "Pasal 8 ayat (2a) dan Pasal 9 ayat (2a) UU KUP", catatan: "bunga pembetulan dan keterlambatan setor" },
        { pasal: "PMK 81/2024; PER-11/PJ/2025", catatan: "SPT Masa PPN Coretax: bentuk, isi, tata cara" }
      ],
      jebakan: [
        { teks: "Memakai tenggat 20 hari setelah masa berakhir (SPT Masa PPh) atau tanggal 15 untuk SPT Masa PPN", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai denda Rp100.000 (SPT Masa lainnya) untuk SPT Masa PPN", tagSebab: "salah-klasifikasi" },
        { teks: "Memasukkan PPN yang dipungut pemungut ke PK yang harus disetor sendiri", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT X menyampaikan SPT Masa PPN Masa Maret 2026 (kurang bayar sudah disetor 28 April 2026) pada 10 Mei 2026. Sanksi administrasinya?",
        jawaban: "Denda Rp500.000",
        langkah: [["Batas lapor Masa Maret", "30 April 2026"], ["Disampaikan 10 Mei 2026", "terlambat"], ["Setoran 28 April tepat waktu", "tanpa bunga"], ["Denda Pasal 7 ayat (1)", "Rp500.000"]]
      },
      verifikasi: "◐",
      peringatan: "Lampiran A1/A2/B1/B2/B3 SPT Masa PPN Coretax terkonfirmasi dari ringkasan sekunder PER-11/PJ/2025; nama dan nomor baris Induk SPT (termasuk pemisahan baris DPP nilai lain) belum dicek ke teks. PER-11/PJ/2025 juga memuat jenis SPT Masa PPN bagi PKP yang memakai pedoman pengkreditan PM dan bagi pemungut; jenis itu tidak diuji di modul ini."
    }
  ],
  soal: [
    {
      id: "A4-001", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Dalam rapat dengan klien, manajer keuangan sebuah pabrik berpendapat bahwa PPN 'menumpuk' karena dipungut di setiap mata rantai (pabrik, distributor, pengecer) sehingga harga ke konsumen naik berlipat. Konsultan pajak menjelaskan bahwa pendapat itu keliru. Alasan yang paling tepat adalah PPN ...",
      kataKualifikasi: [],
      opsi: { A: "hanya dikenakan satu kali pada tingkat pabrikan, sama seperti PPnBM", B: "dikenakan di setiap mata rantai, tetapi setiap PKP mengkreditkan PM terhadap PK sehingga yang disetor hanya PPN atas nilai tambahnya", C: "ditanggung PKP penjual sebagai biaya usaha sehingga tidak dibebankan kepada konsumen", D: "dikenakan dengan tarif yang menurun di setiap mata rantai sehingga bebannya saling meniadakan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPN bersifat multi-tahap tetapi tidak kumulatif: dengan metode pengkreditan (indirect subtraction) setiap PKP hanya menyetor selisih PK − PM, sehingga total PPN seluruh rantai sama dengan tarif efektif × harga kepada konsumen akhir.",
        jejakHitung: [],
        mengapaSalah: { A: "Yang dikenakan sekali pada pabrikan/importir adalah PPnBM, bukan PPN", C: "PPN pajak tidak langsung: bebannya dipikul konsumen akhir, PKP hanya memungut dan menyetor", D: "Tarif PPN tunggal 12% (DPP 11/12 untuk non-mewah) di setiap mata rantai; tidak ada tarif menurun" },
        jebakan: "Multi-tahap tidak sama dengan kumulatif; kuncinya pengkreditan PM."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 7 ayat (1) huruf b UU PPN", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-002", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Rantai distribusi sabun cair (bukan barang mewah) pada Masa April 2026: PT Pabrik Wangi menjual kepada PT Distributor Jaya Rp200.000.000; PT Distributor Jaya menjual kepada Toko Pengecer Sejahtera (PKP) Rp260.000.000; Toko Pengecer Sejahtera menjual kepada konsumen akhir Rp320.000.000. Semua harga belum termasuk PPN dan semua faktur lengkap. PPN yang harus disetor Toko Pengecer Sejahtera untuk transaksi ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.200.000", B: "Rp13.200.000", C: "Rp6.600.000", D: "Rp35.200.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pengecer menyetor PK atas penjualannya dikurangi PM dari faktur distributor; hasilnya sama dengan 11% × nilai tambah pengecer.",
        jejakHitung: [["PK = 12% × 11/12 × 320.000.000", "Rp35.200.000"], ["PM = 12% × 11/12 × 260.000.000", "Rp28.600.000"], ["PPN disetor = PK − PM", "Rp6.600.000"], ["Cek: 11% × nilai tambah 60.000.000", "Rp6.600.000"]],
        mengapaSalah: { A: "Mengalikan 12% penuh pada nilai tambah, seolah-olah sabun barang mewah", B: "Memakai harga dari pabrik (Rp200 juta), padahal PM pengecer berasal dari faktur distributor (Rp260 juta)", D: "Lupa mengkreditkan PM; Rp35,2 juta adalah PK" },
        jebakan: "PM berasal dari faktur pemasok langsung PKP tersebut, bukan dari harga awal di pabrik."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-003", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Konsultan menyusun bahan pelatihan internal tentang karakter PPN Indonesia menurut UU PPN setelah UU HPP untuk staf pajak baru. Semua pernyataan berikut tepat menggambarkan karakter PPN, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "PPN pajak objektif: terutangnya ditentukan oleh adanya objek, bukan oleh keadaan subjek", B: "PPN pajak tidak langsung: pihak yang menyetor berbeda dengan pihak yang memikul beban", C: "PPN menganut prinsip asal (origin principle) sehingga ekspor dikenai tarif yang sama dengan penyerahan dalam negeri", D: "PPN dikenakan atas konsumsi di dalam Daerah Pabean dan netral melalui mekanisme pengkreditan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPN menganut prinsip tujuan (destination principle): ekspor dikenai 0% dan impor dikenai PPN, sehingga yang dipajaki adalah konsumsi di dalam negeri.",
        jejakHitung: [],
        mengapaSalah: { A: "Pernyataan benar: PPN pajak objektif", B: "Pernyataan benar: PPN pajak tidak langsung", D: "Pernyataan benar: PPN pajak atas konsumsi dalam negeri yang netral" },
        jebakan: "Kata 'kecuali' membalik soal: cari satu pernyataan yang salah."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 4 ayat (1) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-004", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Rimba Jati (PKP, produsen furnitur, tahun buku Januari–Desember) pada Masa Juni 2026 mengekspor furnitur dengan nilai ekspor Rp1.500.000.000 (PEB lengkap) dan menjual furnitur di dalam negeri kepada PKP lain Rp300.000.000 (belum termasuk PPN). PM atas bahan baku dan jasa yang fakturnya lengkap dan berhubungan langsung dengan produksi Rp88.000.000. Posisi PPN Masa Juni 2026 dan perlakuannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang bayar Rp110.000.000 karena ekspor juga dikenai PPN efektif 11%", B: "Lebih bayar Rp55.000.000 yang hanya dapat dikompensasikan; restitusi baru pada akhir tahun buku", C: "Kurang bayar Rp33.000.000 karena PM yang terkait ekspor tidak dapat dikreditkan", D: "Lebih bayar Rp55.000.000 yang dapat diajukan restitusi pada Masa Juni 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ekspor dikenai 0% tetapi PM-nya tetap dapat dikreditkan (prinsip tujuan), sehingga timbul lebih bayar Rp55 juta; eksportir BKP berwujud termasuk PKP yang boleh meminta restitusi setiap masa.",
        jejakHitung: [["PK ekspor = 0% × 1.500.000.000", "Rp0"], ["PK dalam negeri = 11% × 300.000.000", "Rp33.000.000"], ["PM dapat dikreditkan", "Rp88.000.000"], ["PK − PM = 33.000.000 − 88.000.000", "lebih bayar Rp55.000.000"], ["Eksportir BKP berwujud (Ps. 9 ayat (4b) huruf a)", "restitusi setiap masa"]],
        mengapaSalah: { A: "Ekspor BKP berwujud dikenai tarif 0%, bukan 11%", B: "Batas 'akhir tahun buku' berlaku bagi PKP umum; eksportir dikecualikan oleh Pasal 9 ayat (4b)", C: "Tarif 0% berbeda dengan dibebaskan: PM atas ekspor tetap dapat dikreditkan" },
        jebakan: "Tarif 0% tidak sama dengan dibebaskan, dan eksportir tidak perlu menunggu akhir tahun untuk restitusi."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (4b) huruf a UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-005", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Graha Priangan (PKP) di Bandung menjalankan beberapa kegiatan pada Masa Juli 2026: (1) jasa perhotelan berupa penyewaan kamar; (2) jasa boga/katering untuk karyawan pabrik; (3) penyewaan ruang kantor di gedung miliknya kepada perusahaan lain; dan (4) jasa penyediaan tempat parkir untuk umum. Berdasarkan Pasal 4A UU PPN setelah UU HPP, kegiatan yang atas penyerahannya terutang PPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) jasa perhotelan", B: "(2) jasa boga/katering", C: "(3) penyewaan ruang kantor", D: "(4) jasa penyediaan tempat parkir" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Perhotelan, boga/katering, dan parkir dikecualikan dari JKP oleh Pasal 4A ayat (3) karena menjadi objek pajak daerah; penyewaan ruang kantor adalah JKP yang terutang PPN.",
        jejakHitung: [],
        mengapaSalah: { A: "Jasa perhotelan bukan JKP (Pasal 4A ayat (3) huruf c)", B: "Jasa boga/katering bukan JKP (Pasal 4A ayat (3) huruf f)", D: "Jasa penyediaan tempat parkir bukan JKP (Pasal 4A ayat (3) huruf e)" },
        jebakan: "Sewa ruang kantor bukan jasa perhotelan; yang dikecualikan hanya jasa yang menjadi objek pajak daerah."
      },
      dasarHukum: [{ pasal: "Pasal 4A ayat (3) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "Pasal 4 ayat (1) huruf c UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-006", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 16B ayat (3) UU PPN: Pajak Masukan atas perolehan Barang Kena Pajak dan/atau Jasa Kena Pajak yang atas penyerahannya dibebaskan dari pengenaan Pajak Pertambahan Nilai tidak dapat dikreditkan.",
      stem: "Klinik Sehat Sentosa (PKP) memberikan jasa pelayanan kesehatan medis (dibebaskan dari PPN berdasarkan PP 49/2022) dan juga menjual produk perawatan kulit di gerainya (terutang PPN). Pada Masa Agustus 2026 klinik membeli alat medis yang hanya dipakai untuk layanan medis dengan PPN Rp22.000.000 dan membeli persediaan produk perawatan kulit untuk dijual dengan PPN Rp5.500.000; kedua faktur lengkap. Berdasarkan kutipan tersebut, PM yang dapat dikreditkan Masa Agustus 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.500.000", B: "Rp22.000.000", C: "Rp0", D: "Rp5.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "PM yang langsung terkait penyerahan dibebaskan (layanan medis) tidak dapat dikreditkan, sedangkan PM untuk penyerahan terutang (produk perawatan kulit) tetap dapat dikreditkan.",
        jejakHitung: [["PM alat medis (untuk penyerahan dibebaskan)", "tidak dapat dikreditkan"], ["PM persediaan produk perawatan kulit (penyerahan terutang)", "Rp5.500.000"], ["PM dapat dikreditkan", "Rp5.500.000"]],
        mengapaSalah: { A: "Menganggap fasilitas dibebaskan sama dengan tidak dipungut sehingga semua PM dikreditkan", B: "Terbalik: yang dapat dikreditkan justru PM produk perawatan kulit", C: "Mengira PKP yang punya penyerahan dibebaskan kehilangan seluruh hak kredit; larangan hanya untuk PM yang terkait penyerahan dibebaskan" },
        jebakan: "Larangan Pasal 16B ayat (3) melekat pada PM yang berkaitan dengan penyerahan dibebaskan, bukan pada PKP-nya."
      },
      dasarHukum: [{ pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-007", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 16D UU PPN: Pajak Pertambahan Nilai dikenakan atas penyerahan Barang Kena Pajak berupa aktiva yang menurut tujuan semula tidak untuk diperjualbelikan oleh Pengusaha Kena Pajak, kecuali atas penyerahan aktiva yang Pajak Masukannya tidak dapat dikreditkan sebagaimana dimaksud dalam Pasal 9 ayat (8) huruf b dan huruf c.",
      stem: "PT Logistik Prima (PKP, jasa logistik dan pergudangan korporasi yang terutang PPN) pada Oktober 2026 menjual tiga aktiva bekas (harga belum termasuk PPN): (1) truk boks Rp250.000.000 yang PM-nya dahulu dikreditkan; (2) sedan operasional direksi Rp180.000.000; (3) mesin fotokopi Rp12.000.000 yang dahulu dibeli dari pengusaha kecil bukan PKP sehingga tidak ada PM. Berdasarkan kutipan tersebut, PPN yang terutang atas penjualan aktiva Masa Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.500.000", B: "Rp48.620.000", C: "Rp28.820.000", D: "Rp31.440.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengecualian Pasal 16D hanya untuk aktiva yang PM-nya tidak dapat dikreditkan karena Pasal 9 ayat (8) huruf b dan c (misalnya sedan); aktiva yang dibeli tanpa PPN dari non-PKP tidak termasuk pengecualian itu, sehingga truk dan mesin fotokopi terutang PPN.",
        jejakHitung: [["Truk: aktiva Pasal 16D, PM dahulu dikreditkan", "terutang"], ["Sedan: PM tidak dapat dikreditkan (Ps. 9 ayat (8) huruf c)", "dikecualikan"], ["Mesin fotokopi: tidak ada PM, tetapi bukan karena huruf b/c", "terutang"], ["DPP = 11/12 × (250.000.000 + 12.000.000)", "Rp240.166.667"], ["PPN = 12% × 240.166.667", "Rp28.820.000"]],
        mengapaSalah: { A: "Mengecualikan mesin fotokopi hanya karena tidak ada PM, padahal pengecualian dibatasi huruf b dan c", B: "Memasukkan sedan yang justru dikecualikan karena PM-nya tidak dapat dikreditkan (huruf c)", D: "Memakai 12% atas harga penuh; aktiva bukan barang mewah memakai DPP 11/12" },
        jebakan: "'Tidak ada PM' tidak sama dengan 'PM tidak dapat dikreditkan karena Pasal 9 ayat (8) huruf b/c'."
      },
      dasarHukum: [{ pasal: "Pasal 16D UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (8) huruf c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-008", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Galangan Samudra (PKP) pada Masa September 2026 menyerahkan satu kapal niaga kepada perusahaan angkutan laut niaga nasional yang memenuhi syarat fasilitas PPN tidak dipungut berdasarkan PP 49/2022. Atas pembangunan kapal tersebut PT Galangan Samudra membayar PM Rp1.100.000.000 dengan faktur lengkap. Kode transaksi faktur pajak penyerahan kapal dan perlakuan PM-nya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kode 08; PM tidak dapat dikreditkan", B: "Kode 08; PM tetap dapat dikreditkan", C: "Kode 07; PM tidak dapat dikreditkan", D: "Kode 07; PM tetap dapat dikreditkan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Fasilitas tidak dipungut memakai kode 07 dan PM atas perolehannya tetap dapat dikreditkan; kode 08 dengan PM tidak dapat dikreditkan hanya untuk penyerahan yang dibebaskan.",
        jejakHitung: [],
        mengapaSalah: { A: "Mengira kapal niaga dibebaskan; fasilitasnya tidak dipungut", B: "Mencampur kode dibebaskan dengan perlakuan PM tidak dipungut", C: "Kode benar, tetapi PM atas penyerahan yang tidak dipungut tetap dapat dikreditkan (Pasal 16B ayat (2))" },
        jebakan: "Tidak dipungut → kode 07, PM tetap dapat dikreditkan; dibebaskan → kode 08, PM tidak dapat dikreditkan."
      },
      dasarHukum: [{ pasal: "Pasal 16B ayat (2) dan (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }, { pasal: "PER-11/PJ/2025 (kode transaksi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-009", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Delta Data (PKP) pada Masa Mei 2026 melakukan: (1) impor server dengan nilai pabean (CIF) Rp400.000.000 dan bea masuk Rp20.000.000; (2) pemanfaatan jasa konsultansi dari konsultan di Singapura yang dimanfaatkan di Jakarta, imbalan Rp150.000.000; (3) pembelian lisensi perangkat lunak dari pengembang di Amerika Serikat (bukan melalui PMSE yang ditunjuk sebagai pemungut) Rp50.000.000. Semuanya bukan barang mewah. Jumlah PPN atas ketiga transaksi tersebut (yang dipungut DJBC dan yang disetor sendiri) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp68.200.000", B: "Rp66.000.000", C: "Rp74.400.000", D: "Rp46.200.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Impor, pemanfaatan JKP, dan pemanfaatan BKP tidak berwujud dari luar Daerah Pabean semuanya objek Pasal 4 ayat (1); nilai impor mencakup bea masuk, dan seluruhnya memakai DPP 11/12.",
        jejakHitung: [["Nilai impor = 400.000.000 + 20.000.000", "Rp420.000.000"], ["PPN impor = 12% × 11/12 × 420.000.000", "Rp46.200.000"], ["PPN pemanfaatan JKP + BKP tidak berwujud = 12% × 11/12 × 200.000.000", "Rp22.000.000"], ["Jumlah", "Rp68.200.000"]],
        mengapaSalah: { B: "Lupa memasukkan bea masuk ke nilai impor", C: "Memakai 12% atas nilai penuh, padahal server, jasa, dan lisensi bukan barang mewah", D: "Mengabaikan PPN pemanfaatan dari luar Daerah Pabean yang wajib disetor sendiri" },
        jebakan: "Nilai impor = CIF + bea masuk + pungutan lain; PPN pemanfaatan dari luar negeri tetap 11% efektif."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf b, d, dan e UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-010", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "PT Pangan Raya (PKP, distributor) menjual beras dan gula konsumsi kepada pengecer pada Masa Maret 2026. Berdasarkan UU PPN setelah UU HPP dan PP 49/2022, penyerahan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bukan objek PPN karena barang kebutuhan pokok dikecualikan Pasal 4A", B: "Penyerahan BKP yang dikenai tarif 0%", C: "Penyerahan BKP yang PPN-nya tidak dipungut (kode 07) sehingga PM terkait tetap dapat dikreditkan", D: "Penyerahan BKP yang dibebaskan dari PPN (kode 08) sehingga PM terkait tidak dapat dikreditkan" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak UU HPP barang kebutuhan pokok adalah BKP, tetapi penyerahannya dibebaskan melalui PP 49/2022 (kode 08) dan PM terkait tidak dapat dikreditkan.",
        jejakHitung: [],
        mengapaSalah: { A: "Itu ketentuan sebelum UU HPP; Pasal 4A ayat (2) kini hanya memuat makanan/minuman di hotel-restoran serta uang, emas batangan cadangan devisa, dan surat berharga", B: "Tarif 0% hanya untuk ekspor", C: "Kebutuhan pokok mendapat fasilitas dibebaskan, bukan tidak dipungut" },
        jebakan: "Sejak UU HPP kebutuhan pokok berpindah dari 'bukan objek' menjadi 'objek yang dibebaskan'."
      },
      dasarHukum: [{ pasal: "Pasal 4A ayat (2) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "Pasal 16B UU PPN jo. PP 49/2022", berlakuSejak: "2022-12-12" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A4-011", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Wulan (orang pribadi pemilik UD Mitra Bangun; belum PKP, tahun buku Januari–Desember, sepanjang 2026 membayar PPh final UMKM 0,5% berdasarkan PP 55/2022 s.t.d.d. PP 20/2026) sepanjang Januari–September 2026 menjual bahan bangunan Rp480.000.000 per bulan. Pada Mei 2026 ia juga menjual rumah tinggal pribadinya, yang bukan barang dagangan dan tidak pernah dipakai dalam usaha, seharga Rp500.000.000. Pada Oktober 2026 penjualan bahan bangunan Rp520.000.000. Ibu Wulan belum pernah memilih dikukuhkan secara sukarela. Bulan terlampauinya batas pengusaha kecil, batas waktu melaporkan usaha untuk dikukuhkan sebagai PKP, dan Masa Pajak mulai wajib memungut PPN berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "September 2026; 31 Desember 2026; Masa Januari 2027", B: "Oktober 2026; 30 November 2026; Masa Desember 2026", C: "Oktober 2026; 31 Desember 2026; Masa Januari 2027", D: "Oktober 2026; 31 Desember 2026; Masa November 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Ambang Rp4,8 miliar dihitung dari peredaran bruto atas penyerahan BKP/JKP dalam kegiatan usaha; penjualan rumah tinggal pribadi di luar usaha tidak dihitung sehingga batas baru terlampaui pada Oktober 2026. Sebagai WP PPh final UMKM, pengusaha wajib melaporkan usahanya paling lambat akhir tahun buku saat batas terlampaui (31 Desember 2026) dan, sebagai PKP, memungut PPN mulai Masa Pajak pertama tahun buku berikutnya (Januari 2027).",
        jejakHitung: [["Penjualan bahan bangunan s.d. September = 9 × 480.000.000", "Rp4.320.000.000"], ["Penjualan rumah tinggal pribadi (bukan penyerahan dalam kegiatan usaha)", "tidak dihitung"], ["Kumulatif s.d. Oktober = 4.320.000.000 + 520.000.000", "Rp4.840.000.000 (> Rp4,8 miliar)"], ["Bulan terlampaui", "Oktober 2026"], ["Batas lapor = akhir tahun buku (PMK 164/2023 Ps. 17 ayat (3))", "31 Desember 2026"], ["Mulai memungut PPN (PMK 164/2023 Ps. 18)", "Masa Januari 2027"]],
        mengapaSalah: { A: "Memasukkan penjualan rumah pribadi di luar usaha sehingga batas seolah terlampaui pada September (4,32 + 0,5 = Rp4,82 miliar)", B: "Memakai tenggat umum 'akhir bulan berikutnya' (PMK 197/2013), padahal bagi WP PPh final UMKM berlaku tenggat akhir tahun buku (PMK 164/2023)", D: "Kewajiban memungut PPN dimulai Masa Pajak pertama tahun buku berikutnya, bukan bulan setelah batas terlampaui" },
        jebakan: "Saring dulu penerimaan di luar penyerahan BKP/JKP dalam usaha, lalu pakai tenggat akhir tahun buku (khusus WP PPh final UMKM) dan awal kewajiban PPN pada tahun buku berikutnya."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 164/2023 Pasal 17 ayat (3) dan Pasal 18", berlakuSejak: null }, { pasal: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013 (batas Rp4,8 miliar)", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 4 ayat (1) huruf a UU PPN (penyerahan dalam kegiatan usaha)", berlakuSejak: "2010-04-01" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Tenggat lapor 'akhir tahun buku' dan awal pemungutan 'Masa pertama tahun buku berikutnya' bersumber dari PMK 164/2023 yang mengatur WP PPh final UMKM; nomor pasal dan cakupannya belum dicek ke teks. Bagi pengusaha di luar rezim PPh final UMKM, riset masih mencatat tenggat umum 'akhir bulan berikutnya' (PMK 197/2013)."
    },
    {
      id: "A4-012", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Toko Daring Kirana (orang pribadi) beromzet Rp2,1 miliar setahun dan memilih dikukuhkan sebagai PKP agar dapat bermitra dengan pembeli korporasi yang membutuhkan faktur pajak. Setelah dikukuhkan, semua konsekuensi berikut berlaku bagi Kirana, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "wajib membuat faktur pajak melalui Coretax untuk setiap penyerahan BKP", B: "wajib menyampaikan SPT Masa PPN setiap masa, termasuk masa tanpa transaksi", C: "berhak mengkreditkan PM atas perolehan yang berhubungan langsung dengan usaha", D: "boleh tidak memungut PPN selama peredaran brutonya masih di bawah Rp4,8 miliar" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengusaha kecil yang memilih menjadi PKP terikat seluruh kewajiban PKP, termasuk memungut PPN atas setiap penyerahan; batas Rp4,8 miliar hanya menentukan kewajiban pengukuhan.",
        jejakHitung: [],
        mengapaSalah: { A: "Pernyataan benar: PKP wajib membuat faktur", B: "Pernyataan benar: SPT Masa PPN wajib tiap masa, termasuk nihil", C: "Pernyataan benar: PKP berhak mengkreditkan PM" },
        jebakan: "Tidak ada PKP 'setengah' yang boleh memilih kapan memungut PPN."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-013", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Yayasan Cerdas Bangsa (bukan PKP, penyelenggara sekolah) menerima tagihan dan langsung membayar jasa desain kurikulum dari konsultan berkedudukan di Australia sebesar Rp80.000.000 pada 12 Juni 2026; jasa dimanfaatkan di Indonesia. Kewajiban PPN yang tepat bagi Yayasan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak ada kewajiban karena Yayasan bukan PKP", B: "Tidak terutang PPN karena Yayasan menyelenggarakan jasa pendidikan yang dibebaskan", C: "Memungut sendiri dan menyetor PPN Rp8.800.000 paling lambat 15 Juli 2026", D: "Memungut sendiri dan menyetor PPN Rp9.600.000 paling lambat 31 Juli 2026" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 3A ayat (3) mewajibkan setiap orang pribadi atau badan yang memanfaatkan JKP dari luar Daerah Pabean, PKP maupun bukan, memungut dan menyetor sendiri PPN; batas setornya tanggal 15 bulan berikutnya.",
        jejakHitung: [["Saat terutang (ditagih dan dibayar)", "12 Juni 2026"], ["PPN = 12% × 11/12 × 80.000.000", "Rp8.800.000"], ["Batas setor = tanggal 15 bulan berikutnya", "15 Juli 2026"]],
        mengapaSalah: { A: "Kewajiban PPN atas pemanfaatan JKP luar negeri tidak bergantung pada status PKP", B: "Yang dibebaskan adalah jasa pendidikan yang diserahkan Yayasan, bukan jasa konsultansi yang dimanfaatkannya", D: "Memakai 12% atas imbalan penuh dan tenggat akhir bulan; yang benar 11% efektif dan tanggal 15" },
        jebakan: "Status bukan PKP tidak membebaskan dari PPN atas JKP luar negeri."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 4 ayat (1) huruf e UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-014", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Andra (orang pribadi, toko grosir, tahun buku Januari–Desember, pada 2025 membayar PPh final UMKM PP 55/2022) peredaran brutonya atas penyerahan BKP melampaui Rp4,8 miliar pada Maret 2025, tetapi sampai akhir 2025 ia tidak melaporkan usahanya untuk dikukuhkan sebagai PKP. Pada Agustus 2026, setelah pemeriksaan, DJP mengukuhkan Tuan Andra sebagai PKP secara jabatan dan menerbitkan SKPKB PPN Masa Mei 2026. Pada masa itu Tuan Andra menyerahkan BKP non-mewah Rp800.000.000 tanpa memungut PPN dan tidak memiliki faktur masukan yang dapat dikreditkan. Pokok PPN kurang bayar dalam SKPKB Masa Mei 2026 (sebelum sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp88.000.000", B: "Rp17.600.000", C: "Rp19.200.000", D: "Rp70.400.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Batas lapor pengukuhan adalah 31 Desember 2025, sehingga kewajiban PPN seharusnya berlaku sejak Masa Januari 2026; untuk masa sebelum dikukuhkan (termasuk Mei 2026) PM diperhitungkan dengan pedoman 80% dari PK (Pasal 9 ayat (9a)), sehingga pokok kurang bayar = 20% × PK.",
        jejakHitung: [["Batas terlampaui Maret 2025 → lapor paling lambat 31 Desember 2025 (PMK 164/2023)", "PPN wajib sejak Masa Januari 2026"], ["PK = 12% × 11/12 × 800.000.000", "Rp88.000.000"], ["PM pedoman = 80% × 88.000.000", "Rp70.400.000"], ["Pokok kurang bayar = 88.000.000 − 70.400.000", "Rp17.600.000"]],
        mengapaSalah: { A: "Mengabaikan pedoman pengkreditan 80% untuk masa sebelum pengukuhan", C: "Memakai 12% atas harga penuh sebelum menerapkan pedoman 80%", D: "Tertukar: Rp70,4 juta adalah PM pedoman, bukan kurang bayar" },
        jebakan: "Pedoman 80% menghasilkan beban 20% × PK, bukan nihil dan bukan PK penuh."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (9a) UU PPN (sisipan UU Cipta Kerja)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 3A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 164/2023 Pasal 17–18", berlakuSejak: null }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Penerapan pedoman 80% pada SKPKB untuk masa sebelum pengukuhan jabatan mengikuti Pasal 9 ayat (9a) UU PPN jo. PMK 18/2021; tata cara pengukuhan jabatan menurut PMK 81/2024 dan PER-7/PJ/2025 (termasuk tanggal efektif PKP) belum dibaca utuh. Tenggat lapor akhir tahun buku (PMK 164/2023) khusus WP PPh final UMKM; nomor pasalnya belum dicek ke teks."
    },
    {
      id: "A4-015", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Bangun Karya (PKP) menerima pesanan unit pendingin sentral (chiller) untuk gedung perkantoran (bukan barang mewah dan tidak mendapat fasilitas) senilai Rp500.000.000 belum termasuk PPN. Uang muka 30% diterima 20 Februari 2026, mesin diserahkan 10 April 2026, dan pelunasan diterima 30 April 2026. PPN yang terutang pada Masa Februari 2026 dan Masa April 2026 berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0 dan Rp55.000.000", B: "Rp16.500.000 dan Rp38.500.000", C: "Rp18.000.000 dan Rp42.000.000", D: "Rp16.500.000 dan Rp55.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pembayaran yang mendahului penyerahan menimbulkan PPN terutang saat pembayaran sebesar yang dibayar; sisa harga terutang saat penyerahan.",
        jejakHitung: [["Uang muka = 30% × 500.000.000", "Rp150.000.000"], ["PPN Masa Februari = 11% × 150.000.000", "Rp16.500.000"], ["Sisa harga saat penyerahan = 500.000.000 − 150.000.000", "Rp350.000.000"], ["PPN Masa April = 11% × 350.000.000", "Rp38.500.000"]],
        mengapaSalah: { A: "Mengabaikan Pasal 11 ayat (2): uang muka sebelum penyerahan sudah terutang PPN", C: "Memakai 12% penuh, padahal chiller bukan barang mewah", D: "Menghitung PPN penuh lagi saat penyerahan sehingga uang muka dipajaki dua kali" },
        jebakan: "Saat penyerahan, DPP hanya sisa harga yang belum difakturkan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-016", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "CV Kreatif Nusantara (PKP, jasa konsultansi pemasaran, pembukuan akrual) menyelesaikan proyek dan menandatangani berita acara serah terima pekerjaan pada 25 Juni 2026; sesuai kebijakan akuntansinya, pendapatan dan piutang diakui pada tanggal BAST. Faktur penjualan (invoice) diterbitkan 3 Juli 2026 dan pembayaran diterima 15 Agustus 2026. PPN atas jasa tersebut terutang pada ...",
      kataKualifikasi: [],
      opsi: { A: "25 Juni 2026 (Masa Juni 2026)", B: "3 Juli 2026, karena faktur penjualan baru terbit", C: "15 Agustus 2026, karena penyerahan jasa diukur saat pembayaran", D: "31 Juli 2026, saat faktur pajak gabungan dibuat" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyerahan JKP terjadi saat harga diakui sebagai piutang/penghasilan atau saat faktur penjualan diterbitkan, mana yang lebih dulu sesuai prinsip akuntansi; di sini pengakuan piutang 25 Juni 2026 mendahului invoice.",
        jejakHitung: [],
        mengapaSalah: { B: "Faktur penjualan menentukan hanya bila lebih dulu daripada pengakuan piutang", C: "Saat pembayaran hanya menentukan bila mendahului penyerahan", D: "Faktur gabungan mengatur waktu pembuatan faktur, bukan saat terutang" },
        jebakan: "Untuk JKP, ikuti pengakuan pendapatan akrual, bukan arus kas."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) huruf c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 (saat penyerahan JKP)", berlakuSejak: "2022-12-02" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-017", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Nusa Digital (PKP) memakai jasa komputasi awan dari penyedia di Irlandia yang tidak ditunjuk sebagai pemungut PPN PMSE. Tagihan diterima 28 Agustus 2026, dicatat sebagai utang 31 Agustus 2026, dan dibayar 5 September 2026. Saat terutang PPN atas pemanfaatan JKP tersebut dan batas penyetorannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "5 September 2026; disetor paling lambat 15 Oktober 2026", B: "28 Agustus 2026; disetor paling lambat 15 September 2026", C: "28 Agustus 2026; disetor paling lambat 30 September 2026", D: "31 Agustus 2026; disetor paling lambat 20 September 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Saat terutang PPN pemanfaatan JKP luar negeri adalah kejadian paling awal di antara pengakuan utang, penagihan, atau pembayaran; batas setornya tanggal 15 bulan berikutnya (PMK 81/2024).",
        jejakHitung: [["Ditagih 28 Agustus; diakui utang 31 Agustus; dibayar 5 September", "paling awal 28 Agustus 2026"], ["Batas setor = tanggal 15 bulan berikutnya", "15 September 2026"]],
        mengapaSalah: { A: "Pembayaran bukan kejadian paling awal", C: "30 September adalah batas SPT Masa PPN Agustus, bukan batas setor PPN pemanfaatan luar negeri", D: "Pengakuan utang bukan kejadian paling awal dan tanggal 20 bukan batas setor PPN ini" },
        jebakan: "Tiga kejadian (utang, tagih, bayar): ambil yang paling awal."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) huruf e UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-018", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Toko Elektronik Prima (PKP) menerima pembayaran penuh Rp33.300.000 (sudah termasuk PPN) dari PT Kantor Maju (PKP) pada 29 Mei 2026 atas pembelian 30 unit printer (bukan barang mewah). Printer baru dikirim dan diterima pembeli pada 8 Juni 2026. Tanggal faktur pajak dan jumlah PPN yang tercantum di dalamnya yang benar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "8 Juni 2026; PPN Rp3.300.000", B: "29 Mei 2026; PPN Rp3.663.000", C: "29 Mei 2026; PPN Rp3.300.000", D: "29 Mei 2026; PPN Rp3.996.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembayaran yang diterima sebelum penyerahan membuat PPN terutang dan faktur wajib dibuat pada 29 Mei 2026; karena harga termasuk PPN, PPN = 11/111 × Rp33,3 juta = Rp3,3 juta.",
        jejakHitung: [["Saat terutang: pembayaran mendahului penyerahan", "29 Mei 2026"], ["Harga tidak termasuk PPN = 33.300.000 × 100/111", "Rp30.000.000"], ["DPP nilai lain = 11/12 × 30.000.000", "Rp27.500.000"], ["PPN = 12% × 27.500.000 (= 11/111 × 33.300.000)", "Rp3.300.000"]],
        mengapaSalah: { A: "Faktur dibuat saat pembayaran karena pembayaran mendahului penyerahan", B: "Mengalikan 11% ke harga yang sudah termasuk PPN", D: "Mengalikan 12% ke harga yang sudah termasuk PPN, seolah-olah barang mewah" },
        jebakan: "Dua jebakan sekaligus: tanggal (bayar dulu → faktur saat bayar) dan harga termasuk PPN (pakai 11/111)."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (1a) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-019", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Sukses Abadi berkedudukan di Bandung dan terdaftar di KPP di Bandung mengimpor bahan baku yang masuk melalui Pelabuhan Tanjung Priok, Jakarta. Tempat PPN impor terutang dan pihak yang memungutnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bandung; disetor sendiri oleh PT Sukses Abadi melalui SPT Masa PPN", B: "Negara asal barang; dipungut oleh penjual luar negeri", C: "KPP tempat terdaftar; dipungut oleh KPP", D: "Tanjung Priok (tempat barang dimasukkan); dipungut oleh DJBC" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk impor, PPN terutang di tempat BKP dimasukkan ke Daerah Pabean dan dipungut melalui DJBC; PIB menjadi dokumen yang dipersamakan dengan faktur pajak.",
        jejakHitung: [],
        mengapaSalah: { A: "Tempat kedudukan PKP adalah tempat terutang untuk penyerahan dalam negeri, bukan impor", B: "Penjual luar negeri tidak memungut PPN Indonesia", C: "KPP tidak memungut PPN impor" },
        jebakan: "Bedakan tempat terutang penyerahan (kedudukan PKP) dan impor (tempat pemasukan)."
      },
      dasarHukum: [{ pasal: "Pasal 12 UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A4-020", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PKP membuat faktur pajak di Coretax tertanggal 26 Februari 2026 atas penyerahan BKP kepada PKP lain. Berdasarkan PER-11/PJ/2025, faktur tersebut harus diunggah dan memperoleh persetujuan DJP paling lambat pada ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "15 Maret 2026", B: "20 Maret 2026", C: "31 Maret 2026", D: "26 Mei 2026" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak 22 Mei 2025 faktur Coretax diunggah paling lambat tanggal 20 bulan berikutnya setelah tanggal pembuatan faktur.",
        jejakHitung: [],
        mengapaSalah: { A: "Tanggal 15 adalah batas unggah e-Faktur lama sebelum PER-11/PJ/2025", C: "31 Maret adalah batas SPT Masa PPN Februari, bukan batas unggah faktur", D: "Tiga bulan adalah batas faktur dianggap tidak dibuat, bukan batas unggah" },
        jebakan: "Tiga tenggat berbeda: unggah tanggal 20, SPT akhir bulan, faktur > 3 bulan dianggap tidak dibuat."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (batas unggah faktur)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 50, verifikasi: "✅"
    },
    {
      id: "A4-021", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 14 ayat (4) UU KUP: Pengusaha yang telah dikukuhkan sebagai Pengusaha Kena Pajak yang tidak membuat faktur pajak atau tidak tepat waktu membuat faktur pajak, atau tidak mengisi faktur pajak secara lengkap ... dikenai sanksi administratif berupa denda sebesar 1% (satu persen) dari Dasar Pengenaan Pajak.",
      stem: "PT Tirta Makmur (PKP) menyerahkan BKP non-mewah dengan harga jual Rp240.000.000 (belum termasuk PPN) kepada PKP lain pada 14 Juli 2026, tetapi faktur pajaknya baru dibuat pada 2 September 2026. Berdasarkan kutipan tersebut, denda yang ditagih melalui STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.400.000", B: "Rp4.400.000", C: "Rp264.000", D: "Rp2.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "Faktur yang terlambat kurang dari 3 bulan tetap sah tetapi dikenai denda 1% dari DPP; untuk barang non-mewah DPP-nya nilai lain 11/12 × harga jual.",
        jejakHitung: [["14 Juli → 2 September", "kurang dari 3 bulan: sah tetapi terlambat"], ["DPP nilai lain = 11/12 × 240.000.000", "Rp220.000.000"], ["Denda = 1% × 220.000.000", "Rp2.200.000"]],
        mengapaSalah: { A: "Mengalikan 1% ke harga jual, bukan ke DPP", B: "Memakai tarif denda 2% sebelum UU HPP", C: "Mengalikan 1% ke jumlah PPN" },
        jebakan: "Dasar denda adalah DPP, dan DPP barang non-mewah sejak 2025 = 11/12 × harga jual."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-022", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Alfa Sentosa (PKP) menyerahkan BKP non-mewah seharga Rp120.000.000 (belum termasuk PPN) kepada PT Beta Jaya (PKP) pada 10 Januari 2026, tetapi baru membuat faktur pajak pada 20 Mei 2026. PT Beta Jaya telah membayar harga beserta PPN-nya. Akibat hukum yang tepat bagi kedua pihak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Faktur dianggap tidak dibuat: PT Alfa tetap wajib menyetor PPN Rp13.200.000 dan dikenai denda Rp1.100.000, sedangkan PM PT Beta tidak dapat dikreditkan", B: "Faktur sah tetapi terlambat: PT Alfa didenda Rp1.100.000 dan PT Beta dapat mengkreditkan PM Rp13.200.000 pada Masa Mei 2026", C: "Faktur sah tetapi terlambat: PT Alfa didenda Rp2.200.000 dan PT Beta dapat mengkreditkan PM Rp13.200.000", D: "PT Alfa tidak dikenai sanksi karena PPN sudah dibayar pembeli, dan PT Beta dapat mengkreditkan PM paling lama 3 masa setelah Mei 2026" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur yang dibuat lebih dari 3 bulan sejak saat seharusnya dianggap tidak dibuat: penjual tetap menyetor PPN dan dikenai denda 1% DPP, sedangkan pembeli tidak dapat mengkreditkan PM-nya.",
        jejakHitung: [["10 Januari + 3 bulan", "10 April 2026"], ["Faktur 20 Mei 2026", "lebih dari 3 bulan: dianggap tidak dibuat"], ["PPN = 11% × 120.000.000", "Rp13.200.000"], ["Denda = 1% × DPP (11/12 × 120.000.000 = 110.000.000)", "Rp1.100.000"]],
        mengapaSalah: { B: "Mengabaikan batas 3 bulan; faktur ini dianggap tidak dibuat", C: "Memakai denda 2% sebelum UU HPP dan mengabaikan batas 3 bulan", D: "Pembayaran oleh pembeli tidak menghapus sanksi, dan faktur yang dianggap tidak dibuat tidak dapat dikreditkan" },
        jebakan: "Lewat 3 bulan: penjual menanggung setoran dan denda, pembeli kehilangan PM."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-023", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Agro Lestari (PKP) pada Masa September 2026 melakukan dua penyerahan: (1) menjual benih padi bersertifikat kepada kelompok tani, yang atas penyerahannya dibebaskan dari PPN berdasarkan PP 49/2022; dan (2) menjual truk operasional bekas miliknya yang PM-nya dahulu dikreditkan. Kode transaksi faktur pajak untuk penyerahan (1) dan (2) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "07 dan 09", B: "08 dan 01", C: "08 dan 09", D: "07 dan 01" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyerahan yang dibebaskan memakai kode 08, sedangkan penyerahan aktiva yang semula tidak untuk diperjualbelikan (Pasal 16D) memakai kode 09.",
        jejakHitung: [],
        mengapaSalah: { A: "Kode 07 untuk tidak dipungut/DTP, bukan dibebaskan", B: "Penjualan aktiva Pasal 16D memiliki kode khusus 09", D: "Keduanya keliru: 07 untuk tidak dipungut dan 01 untuk penyerahan biasa" },
        jebakan: "07 = tidak dipungut/DTP, 08 = dibebaskan, 09 = aktiva Pasal 16D."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (kode transaksi faktur)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 16D UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-024", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Pada 10 Agustus 2026 bagian pajak PT Sari Rasa (PKP) menemukan bahwa faktur pajak Masa Juli 2026 kepada PT Kopi Kita, yang sudah disetujui DJP dan sudah dilaporkan dalam SPT Masa PPN Juli, mencantumkan harga jual Rp55.000.000 padahal seharusnya Rp50.000.000. Tidak ada barang yang dikembalikan. Tindakan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membuat nota retur atas selisih Rp5.000.000 dan melaporkannya di SPT Masa Agustus 2026", B: "Membuat faktur pajak pengganti atas faktur tersebut, lalu membetulkan SPT Masa PPN Juli 2026", C: "Membuat faktur baru berstatus normal tertanggal Agustus 2026 dan melaporkannya di SPT Masa Agustus 2026", D: "Cukup mengoreksi selisih PK di SPT Masa Agustus 2026 tanpa mengubah faktur" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kesalahan pengisian faktur diperbaiki dengan faktur pajak pengganti yang dilaporkan pada masa pajak faktur yang diganti; karena SPT Juli sudah disampaikan, SPT tersebut dibetulkan.",
        jejakHitung: [],
        mengapaSalah: { A: "Nota retur hanya untuk pengembalian barang, bukan salah tulis harga", C: "Faktur baru di masa lain memindahkan PK ke masa yang salah dan faktur lama tetap berlaku", D: "Faktur yang salah tetap tercatat; koreksi harus melalui faktur pengganti dan pembetulan masa yang sama" },
        jebakan: "Salah isi → faktur pengganti (masa asal); barang kembali → retur (masa pengembalian)."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (5) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "Pasal 8 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A4-025", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Mega Impor (PKP) mengumpulkan dokumen untuk mengkreditkan PM dan melaporkan penyerahan Masa Juni 2026. Dokumen berikut kedudukannya dipersamakan dengan faktur pajak, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Pemberitahuan Impor Barang (PIB) beserta bukti pungutan PPN impor", B: "Pemberitahuan Ekspor Barang (PEB) yang telah memperoleh persetujuan ekspor", C: "Bukti setor PPN atas pemanfaatan JKP dari luar Daerah Pabean", D: "Invoice komersial dari pemasok luar negeri yang mencantumkan VAT negaranya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PIB, PEB, dan bukti setor PPN pemanfaatan JKP luar negeri termasuk dokumen tertentu Pasal 13 ayat (6); invoice pemasok luar negeri bukan dokumen yang dipersamakan dengan faktur pajak dan VAT negara lain tidak dapat dikreditkan.",
        jejakHitung: [],
        mengapaSalah: { A: "PIB dipersamakan dengan faktur untuk PPN impor", B: "PEB dipersamakan dengan faktur untuk ekspor", C: "Bukti setor PPN pemanfaatan JKP luar negeri dipersamakan dengan faktur" },
        jebakan: "VAT/GST negara lain tidak pernah menjadi PM di Indonesia."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A4-026", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Sumber Pangan Lestari (PKP) mengirim BKP non-mewah kepada satu pembeli yang sama, PT Resto Nusantara, pada 3, 12, dan 26 Oktober 2026 dan memilih membuat satu faktur pajak gabungan untuk ketiga penyerahan itu. Faktur gabungan tersebut paling lambat dibuat dan paling lambat diunggah ke Coretax pada ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "31 Oktober 2026 dan 20 November 2026", B: "30 November 2026 dan 20 Desember 2026", C: "31 Oktober 2026 dan 15 November 2026", D: "Tidak boleh digabung; faktur dibuat masing-masing pada 3, 12, dan 26 Oktober 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur gabungan untuk penyerahan kepada pembeli yang sama dalam satu bulan dibuat paling lama akhir bulan penyerahan, lalu diunggah paling lambat tanggal 20 bulan berikutnya.",
        jejakHitung: [["Akhir bulan penyerahan", "31 Oktober 2026"], ["Unggah: tanggal 20 bulan berikutnya", "20 November 2026"]],
        mengapaSalah: { B: "Faktur gabungan dibuat paling lama akhir bulan penyerahan, bukan akhir bulan berikutnya", C: "Tanggal 15 adalah batas unggah e-Faktur lama", D: "Pasal 13 ayat (2) justru membolehkan faktur gabungan" },
        jebakan: "Faktur gabungan: dibuat akhir bulan penyerahan; unggah tanggal 20 bulan berikutnya."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (2) dan (2a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-027", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 5A ayat (1) UU PPN: Pajak Pertambahan Nilai atau Pajak Penjualan atas Barang Mewah atas penyerahan Barang Kena Pajak yang dikembalikan dapat dikurangkan dari Pajak Keluaran dan Pajak Penjualan atas Barang Mewah yang terutang dalam Masa Pajak terjadinya pengembalian Barang Kena Pajak tersebut.",
      stem: "PT Kencana Tekstil (PKP) pada April 2026 menjual kain kepada PT Busana (PKP) dengan PPN dalam faktur Rp11.000.000. Pada 18 Mei 2026 PT Busana mengembalikan 40% kain karena cacat dan dokumen retur dibuat di Coretax pada bulan itu. Pada Masa Mei 2026 PT Kencana Tekstil mempunyai PK atas penjualan lain Rp66.000.000 dan PM yang dapat dikreditkan Rp30.000.000. Berdasarkan kutipan tersebut, PPN kurang bayar PT Kencana Tekstil Masa Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000, dan SPT Masa April 2026 dibetulkan untuk mengurangi PK", B: "Rp31.600.000", C: "Rp36.000.000", D: "Rp27.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "PPN atas BKP yang dikembalikan mengurangi PK penjual (dan PM pembeli) pada masa terjadinya pengembalian, yaitu Mei 2026, tanpa membetulkan SPT April.",
        jejakHitung: [["PPN atas barang yang dikembalikan = 40% × 11.000.000", "Rp4.400.000"], ["PK Masa Mei setelah retur = 66.000.000 − 4.400.000", "Rp61.600.000"], ["Kurang bayar = 61.600.000 − 30.000.000", "Rp31.600.000"]],
        mengapaSalah: { A: "Retur tidak dibukukan dengan pembetulan masa penjualan; pengurangan dilakukan di masa pengembalian", C: "Lupa mengurangkan PPN retur dari PK Mei", D: "Mengurangkan PPN retur dua kali (Rp8.800.000)" },
        jebakan: "Retur → masa pengembalian; salah isi faktur → faktur pengganti di masa asal."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (dokumen retur Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-028", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "CV Sinar Jaya (PKP) menjual 50 unit kursi kantor (bukan barang mewah) kepada PT Arunika dengan harga jual Rp45.000.000 belum termasuk PPN pada Masa Juni 2026. PPN yang dipungut CV Sinar Jaya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.400.000", B: "Rp4.500.000", C: "Rp4.459.459", D: "Rp4.950.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "Barang non-mewah: PPN = 12% × 11/12 × harga jual = 11% × Rp45 juta = Rp4.950.000.",
        jejakHitung: [["DPP nilai lain = 11/12 × 45.000.000", "Rp41.250.000"], ["PPN = 12% × 41.250.000", "Rp4.950.000"]],
        mengapaSalah: { A: "12% atas harga penuh hanya untuk barang mewah", B: "Tarif 10% berlaku sebelum April 2022", C: "Memakai 11/111 seolah-olah harga sudah termasuk PPN" },
        jebakan: "Perhatikan apakah harga 'belum' atau 'sudah' termasuk PPN."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) huruf b UU PPN", berlakuSejak: "2025-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 50, verifikasi: "✅"
    },
    {
      id: "A4-029", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-03",
      stem: "Vignette PT Griya Utama Properti (PKP, pengembang), Masa Maret 2026. Pengembang menyerahterimakan rumah tapak baru dalam kondisi siap huni kepada Tuan Budi (WNI, ber-NIK, belum pernah memanfaatkan fasilitas ini) dengan harga jual Rp3.500.000.000 belum termasuk PPN. Berdasarkan PMK 90/2025 tentang PPN DTP rumah tahun 2026, PPN yang tetap harus dibayar Tuan Budi kepada pengembang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp192.500.000", C: "Rp165.000.000", D: "Rp180.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "salah-hitung" },
      pembahasan: {
        inti: "Pada 2026 PPN DTP 100% hanya atas bagian harga jual sampai Rp2 miliar untuk rumah berharga jual paling tinggi Rp5 miliar; PPN atas sisa Rp1,5 miliar tetap dibayar pembeli.",
        jejakHitung: [["Harga jual ≤ Rp5 miliar", "memenuhi syarat"], ["PPN total = 11% × 3.500.000.000", "Rp385.000.000"], ["PPN DTP = 11% × 2.000.000.000", "Rp220.000.000"], ["PPN dibayar pembeli = 11% × 1.500.000.000", "Rp165.000.000"]],
        mengapaSalah: { A: "DTP tidak meliputi bagian harga di atas Rp2 miliar", B: "Memakai skema DTP 50% semester II 2025 atas seluruh PPN", D: "Memakai 12% tanpa DPP 11/12 atas bagian harga di atas Rp2 miliar (12% × Rp1,5 miliar), padahal rumah ini bukan barang mewah" },
        jebakan: "DTP dihitung atas porsi Rp2 miliar, bukan seluruh harga, dan bukan 50%."
      },
      dasarHukum: [{ pasal: "PMK 90/2025 (PPN DTP rumah 2026)", berlakuSejak: "2026-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-030", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-03",
      stem: "Vignette PT Griya Utama Properti (PKP, pengembang), Masa Maret 2026. Pengembang juga menyerahkan satu unit apartemen kepada Nyonya Citra dengan harga jual Rp32.000.000.000 belum termasuk pajak. Apartemen dengan harga jual paling sedikit Rp30 miliar termasuk hunian mewah yang dikenai PPnBM 20%. PPN dan PPnBM yang dipungut pengembang atas penyerahan tersebut berturut-turut adalah ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: { A: "PPN Rp3.520.000.000 dan PPnBM Rp6.400.000.000", B: "PPN Rp3.840.000.000 dan PPnBM Rp5.866.666.667", C: "PPN Rp4.608.000.000 dan PPnBM Rp6.400.000.000", D: "PPN Rp3.840.000.000 dan PPnBM Rp6.400.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Hunian mewah adalah objek PPnBM, sehingga sejak 1 Februari 2025 PPN dihitung 12% × harga jual penuh dan PPnBM 20% × harga jual yang sama; PPnBM tidak masuk DPP PPN.",
        jejakHitung: [["Barang mewah → DPP PPN = harga jual penuh", "Rp32.000.000.000"], ["PPN = 12% × 32.000.000.000", "Rp3.840.000.000"], ["PPnBM = 20% × 32.000.000.000", "Rp6.400.000.000"], ["Jumlah pajak dipungut", "Rp10.240.000.000"]],
        mengapaSalah: { A: "Menerapkan DPP 11/12 pada barang mewah", B: "Menghitung PPnBM dari DPP 11/12", C: "Memasukkan PPnBM ke dalam DPP PPN" },
        jebakan: "Barang mewah: dua pajak dengan dasar yang sama (harga jual penuh), tidak saling menambah dasar."
      },
      dasarHukum: [{ pasal: "PMK 131/2024 Pasal 2", berlakuSejak: "2025-02-01" }, { pasal: "Pasal 5 ayat (1) dan Pasal 8 UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 96/PMK.03/2021 s.t.d.d. PMK 15/2023 (hunian mewah 20%)", berlakuSejak: null }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-031", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-03",
      stem: "Vignette PT Griya Utama Properti (PKP, pengembang), Masa Maret 2026. Pada 25 Maret 2026 pengembang menerima uang muka Rp555.000.000 (sudah termasuk PPN) dari Tuan Dodi untuk rumah tapak seharga Rp6.000.000.000 yang baru akan diserahterimakan pada 2027. Rumah tersebut bukan hunian mewah. PPN atas uang muka yang wajib dipungut dan dilaporkan pada Masa Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp55.000.000", B: "Rp0, karena PPN rumah pada 2026 ditanggung pemerintah", C: "Rp61.050.000", D: "Rp0, karena PPN baru terutang saat serah terima pada 2027" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Uang muka sebelum serah terima membuat PPN terutang saat pembayaran; rumah Rp6 miliar tidak memenuhi batas harga DTP, sehingga PPN = 11/111 × Rp555 juta = Rp55 juta.",
        jejakHitung: [["Harga > Rp5 miliar dan serah terima 2027", "tidak memenuhi syarat DTP"], ["Pembayaran mendahului penyerahan", "terutang Masa Maret 2026"], ["Uang muka tanpa PPN = 555.000.000 × 100/111", "Rp500.000.000"], ["PPN = 11% × 500.000.000 (= 11/111 × 555.000.000)", "Rp55.000.000"]],
        mengapaSalah: { B: "DTP 2026 hanya untuk rumah berharga jual paling tinggi Rp5 miliar yang diserahterimakan dalam 2026", C: "Mengalikan 11% ke uang muka yang sudah termasuk PPN", D: "Pasal 11 ayat (2): pembayaran sebelum penyerahan sudah menimbulkan PPN terutang" },
        jebakan: "Harga di atas Rp5 miliar menggugurkan seluruh fasilitas DTP, bukan hanya bagian di atas Rp2 miliar."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 90/2025", berlakuSejak: "2026-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-032", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A4-04",
      stem: "Vignette mobil penumpang. PT Prima Motor Indonesia (PKP, pabrikan kendaraan) pada Masa Agustus 2026 menjual satu unit mobil penumpang kepada PT Dealer Sentosa (PKP) dengan harga jual Rp400.000.000 belum termasuk pajak. Mobil tersebut objek PPnBM dengan tarif 15%. PPN dan PPnBM yang dipungut PT Prima Motor Indonesia berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPN Rp48.000.000 dan PPnBM Rp60.000.000", B: "PPN Rp44.000.000 dan PPnBM Rp60.000.000", C: "PPN Rp48.000.000 dan PPnBM Rp55.000.000", D: "PPN Rp55.200.000 dan PPnBM Rp60.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kendaraan objek PPnBM tergolong barang mewah: PPN 12% × harga jual penuh dan PPnBM 15% × harga jual yang sama.",
        jejakHitung: [["PPN barang mewah = 12% × 400.000.000", "Rp48.000.000"], ["PPnBM = 15% × 400.000.000", "Rp60.000.000"]],
        mengapaSalah: { B: "Memakai DPP 11/12 yang hanya untuk barang non-mewah", C: "Menghitung PPnBM dari DPP 11/12", D: "Memasukkan PPnBM ke dalam DPP PPN (12% × Rp460 juta)" },
        jebakan: "DPP PPN dan DPP PPnBM sama-sama harga jual, tidak saling menambah."
      },
      dasarHukum: [{ pasal: "PMK 131/2024 Pasal 2", berlakuSejak: "2025-02-01" }, { pasal: "Pasal 5 ayat (1) dan Pasal 8 UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A4-033", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-04",
      stem: "Vignette mobil penumpang. PT Dealer Sentosa (PKP) membeli mobil penumpang objek PPnBM 15% dari pabrikan dengan PPN Rp48.000.000 dan PPnBM Rp60.000.000 tercantum dalam faktur, lalu pada Masa September 2026 menjualnya kepada konsumen akhir dengan harga Rp520.000.000 belum termasuk PPN. Tidak ada transaksi lain. PPN kurang (lebih) bayar PT Dealer Sentosa Masa September 2026 atas mobil itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih bayar Rp45.600.000", B: "Kurang bayar Rp9.200.000", C: "Kurang bayar Rp92.400.000", D: "Kurang bayar Rp14.400.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "PPnBM dikenakan sekali di pabrikan dan tidak dapat dikreditkan; dealer hanya memungut PPN 12% atas harga jual penuh dan mengkreditkan PPN masukannya.",
        jejakHitung: [["PK = 12% × 520.000.000 (barang mewah, harga penuh)", "Rp62.400.000"], ["PPnBM pada tingkat dealer", "tidak dipungut lagi"], ["PM yang dapat dikreditkan (PPN saja)", "Rp48.000.000"], ["PPnBM Rp60.000.000", "tidak dapat dikreditkan, menjadi harga perolehan"], ["Kurang bayar = 62.400.000 − 48.000.000", "Rp14.400.000"]],
        mengapaSalah: { A: "Memperlakukan PPnBM yang dibayar sebagai PM (62,4 − 108)", B: "Memakai DPP 11/12 padahal mobil objek PPnBM tetap barang mewah", C: "Memungut PPnBM lagi di tingkat dealer (15% × Rp520 juta)" },
        jebakan: "PPnBM: sekali pungut, tidak dapat dikreditkan."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 2", berlakuSejak: "2025-02-01" }, { pasal: "Pasal 9 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-034", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "CV Mobilindo Bekas (PKP, usaha jual-beli mobil bekas) pada Masa Juni 2026 menjual satu mobil bekas kepada Tuan Hari dengan harga jual Rp180.000.000 belum termasuk PPN. Atas perbaikan mobil itu sebelum dijual CV membayar PPN Rp1.100.000 kepada bengkel PKP. CV menerapkan PPN besaran tertentu untuk kendaraan bermotor bekas. PPN yang harus disetor CV atas penjualan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.980.000", B: "Rp880.000", C: "Rp19.800.000", D: "Rp2.160.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penyerahan kendaraan bermotor bekas oleh PKP pedagang dikenai PPN besaran tertentu 1,1% dari harga jual dan PM terkait tidak dapat dikreditkan.",
        jejakHitung: [["Besaran tertentu = 10% × 11/12 × 12%", "1,1%"], ["PPN = 1,1% × 180.000.000", "Rp1.980.000"], ["PM perbaikan Rp1.100.000", "tidak dapat dikreditkan"]],
        mengapaSalah: { B: "Mengkreditkan PM, padahal mekanisme besaran tertentu menutup pengkreditan", C: "Memakai tarif efektif umum 11%", D: "Memakai 10% × 12% tanpa faktor 11/12 (PMK 11/2025)" },
        jebakan: "Besaran tertentu bersifat final bagi penjual: tidak ada pengkreditan PM."
      },
      dasarHukum: [{ pasal: "Pasal 9A UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 65/PMK.03/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A4-035", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Lintas Kargo Nusantara (PKP) pada Masa Juli 2026 memperoleh: (1) tagihan jasa pengurusan transportasi (freight forwarding) seluruhnya Rp300.000.000 yang di dalamnya memuat biaya freight; dan (2) tagihan jasa pergudangan Rp100.000.000. PM bulan itu: Rp4.400.000 atas sewa forklift yang hanya dipakai untuk pergudangan dan Rp6.600.000 atas sewa kontainer untuk kegiatan freight forwarding; semua faktur lengkap. Semua nilai belum termasuk PPN. PPN yang harus disetor Masa Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.300.000", B: "Rp33.000.000", C: "Rp9.900.000", D: "Rp14.300.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Freight forwarding yang tagihannya memuat freight dikenai besaran tertentu 1,1% tanpa pengkreditan PM, sedangkan jasa pergudangan memakai mekanisme normal sehingga PM forklift tetap dapat dikreditkan.",
        jejakHitung: [["Freight forwarding: 1,1% × seluruh nilai tagihan 300.000.000", "Rp3.300.000"], ["Pergudangan: PK = 11% × 100.000.000", "Rp11.000.000"], ["PM forklift (pergudangan)", "dapat dikreditkan Rp4.400.000"], ["PM kontainer (freight forwarding)", "tidak dapat dikreditkan"], ["Disetor = 3.300.000 + (11.000.000 − 4.400.000)", "Rp9.900.000"]],
        mengapaSalah: { A: "Mengkreditkan PM kontainer yang terkait penyerahan besaran tertentu", B: "Memperlakukan freight forwarding sebagai JKP biasa 11% dan mengkreditkan semua PM", D: "Mengira PKP yang memakai besaran tertentu kehilangan seluruh hak kredit, termasuk untuk pergudangan" },
        jebakan: "Pisahkan penyerahan besaran tertentu dan penyerahan normal sebelum mengkreditkan PM."
      },
      dasarHukum: [{ pasal: "Pasal 9A UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 71/PMK.03/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-036", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Fajar (karyawan, bukan PKP) membangun sendiri rumah tinggal permanen berkonstruksi beton seluas 250 m² di atas tanah miliknya, bukan dalam kegiatan usaha. Pada Juli 2026 biaya pembangunan (bahan dan upah) yang dikeluarkan Rp400.000.000, tidak termasuk harga tanah. PPN kegiatan membangun sendiri untuk Juli 2026 dan batas penyetorannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.600.000; paling lambat 15 Agustus 2026", B: "Rp8.800.000; paling lambat 15 Agustus 2026", C: "Rp8.800.000; paling lambat 31 Agustus 2026", D: "Rp0, karena Tuan Fajar bukan PKP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "KMS di luar kegiatan usaha atas bangunan permanen paling sedikit 200 m² terutang PPN dengan besaran tertentu 20% × 11/12 × 12% = 2,2% dari biaya membangun tiap masa (tanpa tanah), baik oleh PKP maupun bukan PKP, dan disetor paling lambat tanggal 15 bulan berikutnya.",
        jejakHitung: [["Luas 250 m² ≥ 200 m², konstruksi permanen", "objek KMS"], ["Besaran = 20% × 11/12 × 12% (PMK 81/2024 Ps. 324 s.t.d.d. PMK 11/2025)", "2,2%"], ["PPN KMS = 2,2% × 400.000.000", "Rp8.800.000"], ["Batas setor = tanggal 15 bulan berikutnya", "15 Agustus 2026"]],
        mengapaSalah: { A: "Memakai 20% × 12% tanpa faktor 11/12 (2,4%), rumus yang dikoreksi PMK 11/2025 sejak 1 Januari 2025", C: "Akhir bulan berikutnya adalah batas setor dan lapor SPT Masa PPN PKP, bukan batas setor PPN KMS", D: "PPN KMS dikenakan kepada orang pribadi atau badan yang membangun, tidak bergantung status PKP" },
        jebakan: "KMS adalah objek Pasal 16C yang menyasar siapa saja; besarannya tetap 2,2% berkat faktor 11/12."
      },
      dasarHukum: [{ pasal: "Pasal 16C UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025 (menggantikan PMK 61/PMK.03/2022)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-037", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sentra Niaga (PKP) menjual mesin kasir (bukan barang mewah) kepada PT Toko Raya dengan harga katalog Rp80.000.000. Dalam faktur dicantumkan potongan harga 10%, dan PT Sentra Niaga juga menagih ongkos pengiriman ke gudang pembeli Rp2.000.000. Semua nilai belum termasuk PPN. PPN yang tercantum dalam faktur pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp8.800.000", B: "Rp7.920.000", C: "Rp8.880.000", D: "Rp8.140.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Harga jual mencakup semua biaya yang diminta penjual (termasuk ongkos kirim yang ditagih) dikurangi potongan yang dicantumkan dalam faktur, lalu DPP nilai lain 11/12.",
        jejakHitung: [["Harga setelah potongan = 80.000.000 − 8.000.000", "Rp72.000.000"], ["Ditambah ongkos kirim yang ditagih", "Rp74.000.000"], ["DPP nilai lain = 11/12 × 74.000.000", "Rp67.833.333"], ["PPN = 12% × 67.833.333", "Rp8.140.000"]],
        mengapaSalah: { A: "Mengabaikan potongan harga yang tercantum di faktur", B: "Mengeluarkan ongkos kirim yang ditagih penjual dari harga jual", C: "Memakai 12% atas harga jual penuh" },
        jebakan: "Potongan di faktur mengurangi DPP; biaya yang ditagih penjual menambah DPP."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 18 UU PPN (harga jual)", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-038", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 9 ayat (8) huruf c UU PPN: Pajak Masukan tidak dapat dikreditkan menurut cara sebagaimana diatur pada ayat (2) bagi pengeluaran untuk perolehan dan pemeliharaan kendaraan bermotor berupa sedan dan station wagon, kecuali merupakan barang dagangan atau disewakan.",
      stem: "PT Rental Nusantara (PKP, usaha penyewaan kendaraan) pada Masa Februari 2026 menerima faktur pajak lengkap atas: (1) pembelian 5 sedan untuk disewakan, PPN Rp66.000.000; (2) pembelian 1 station wagon untuk kendaraan dinas direktur, PPN Rp22.000.000; (3) servis berkala sedan sewaan, PPN Rp3.300.000; (4) servis station wagon direktur, PPN Rp1.100.000; dan (5) pembelian minibus antar-jemput karyawan, PPN Rp27.500.000. Berdasarkan kutipan tersebut, PM yang dapat dikreditkan Masa Februari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp96.800.000", B: "Rp69.300.000", C: "Rp119.900.000", D: "Rp27.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Larangan huruf c hanya untuk sedan dan station wagon yang bukan barang dagangan atau disewakan; sedan sewaan beserta pemeliharaannya serta minibus tetap dapat dikreditkan.",
        jejakHitung: [["Sedan disewakan (pengecualian 'disewakan')", "Rp66.000.000"], ["Servis sedan sewaan", "Rp3.300.000"], ["Minibus (bukan sedan/station wagon)", "Rp27.500.000"], ["Station wagon direktur dan servisnya (Rp23.100.000)", "tidak dapat dikreditkan"], ["PM dapat dikreditkan", "Rp96.800.000"]],
        mengapaSalah: { B: "Minibus bukan sedan/station wagon sehingga tidak terkena larangan", C: "Station wagon direktur dan servisnya terkena larangan huruf c", D: "Mengabaikan frasa 'kecuali ... disewakan' sehingga semua sedan dicoret" },
        jebakan: "Baca pengecualian di ujung kutipan: 'kecuali merupakan barang dagangan atau disewakan'."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf c UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-039", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Cahaya Abadi (PKP, distributor alat tulis) menyiapkan SPT Masa PPN Oktober 2026 dengan faktur masukan berikut: (1) barang dagangan tertanggal 5 Oktober 2026, PPN Rp11.000.000, faktur lengkap; (2) barang dagangan tertanggal 12 Oktober 2026, PPN Rp5.500.000, faktur hanya mencantumkan nama pembeli tanpa NPWP/NIK; (3) barang dagangan tertanggal 20 Juni 2026, PPN Rp3.300.000, faktur lengkap, belum pernah dikreditkan maupun dibiayakan; (4) renovasi rumah pribadi direktur yang ditagihkan atas nama perusahaan, PPN Rp2.200.000. PM yang dapat dikreditkan pada Masa Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.300.000", B: "Rp16.500.000", C: "Rp11.000.000", D: "Rp22.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya faktur (1) yang memenuhi semua syarat; faktur tanpa identitas pembeli, faktur yang melewati batas 3 masa, dan pengeluaran pribadi direktur tidak dapat dikreditkan.",
        jejakHitung: [["(1) faktur lengkap, masa yang sama", "Rp11.000.000"], ["(2) tanpa identitas pembeli (Ps. 9 ayat (8) huruf f)", "tidak dapat"], ["(3) faktur Juni: batas kredit Juli–September", "lewat, tidak dapat"], ["(4) tidak berhubungan langsung dengan usaha (Ps. 9 ayat (8) huruf b)", "tidak dapat"], ["PM dapat dikreditkan", "Rp11.000.000"]],
        mengapaSalah: { A: "Faktur Juni hanya dapat dikreditkan sampai Masa September 2026", B: "Faktur tanpa NPWP/NIK pembeli tidak memenuhi Pasal 13 ayat (5)", D: "Mengkreditkan semua faktur tanpa menguji syarat" },
        jebakan: "Uji setiap faktur dengan tiga saringan: kelengkapan, batas 3 masa, hubungan langsung dengan usaha."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf b dan f UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (5) UU PPN", berlakuSejak: "2022-04-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A4-040", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Bina Pangan (PKP) menjual beras (dibebaskan) dan makanan olahan kemasan (terutang PPN). Pada Masa April 2026 penyerahan makanan olahan Rp900.000.000 dan penyerahan beras Rp600.000.000 (belum termasuk PPN). PM bulan itu: Rp44.000.000 langsung terkait makanan olahan, Rp16.500.000 langsung terkait beras, dan Rp22.000.000 PM bersama (sewa gudang dan listrik) yang tidak dapat diidentifikasi. PPN kurang bayar Masa April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp41.800.000", B: "Rp33.000.000", C: "Rp16.500.000", D: "Rp55.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PM yang langsung terkait penyerahan terutang dikreditkan penuh, PM terkait beras (dibebaskan) tidak dikreditkan, dan PM bersama dikreditkan 60% sesuai proporsi penyerahan terutang.",
        jejakHitung: [["PK = 11% × 900.000.000", "Rp99.000.000"], ["Proporsi terutang = 900.000.000 ÷ 1.500.000.000", "60%"], ["PM bersama dikreditkan = 60% × 22.000.000", "Rp13.200.000"], ["PM dapat dikreditkan = 44.000.000 + 13.200.000", "Rp57.200.000"], ["Kurang bayar = 99.000.000 − 57.200.000", "Rp41.800.000"]],
        mengapaSalah: { B: "Mengkreditkan seluruh PM bersama tanpa proporsi", C: "Mengkreditkan semua PM, termasuk yang terkait beras", D: "Tidak mengkreditkan PM bersama sama sekali" },
        jebakan: "Tiga keranjang PM: terutang (penuh), dibebaskan (nol), bersama (proporsional)."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (5) dan (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A4-041", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Faktur pajak masukan tertanggal 28 Januari 2026 atas pembelian bahan baku PT Kirana Food (PKP) terlewat dan belum dikreditkan pada SPT Masa Januari 2026. PM itu belum dibebankan sebagai biaya dan belum ada pemeriksaan. PM tersebut dapat dikreditkan paling lama pada Masa Pajak ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "Maret 2026", B: "April 2026", C: "Desember 2026 (akhir tahun buku)", D: "kapan saja sepanjang belum diperiksa" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PM yang belum dikreditkan dapat dikreditkan paling lama 3 Masa Pajak setelah berakhirnya Masa Pajak saat faktur dibuat, yaitu Februari, Maret, atau April 2026.",
        jejakHitung: [["Masa faktur dibuat", "Januari 2026"], ["3 masa setelah berakhirnya Januari", "Februari, Maret, April"], ["Paling lama", "Masa April 2026"]],
        mengapaSalah: { A: "Menghitung Januari sebagai masa pertama", C: "Tidak ada aturan 'akhir tahun buku' untuk pengkreditan PM", D: "Batas 3 masa berlaku di samping syarat belum diperiksa" },
        jebakan: "Hitung 3 masa mulai bulan setelah masa faktur."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 50, verifikasi: "✅"
    },
    {
      id: "A4-042", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Lumbung Tani (PKP) menerima faktur pajak masukan lengkap tertanggal 14 Juni 2026 dengan PPN Rp7.700.000 atas pembelian bahan kemasan. Karena kelalaian, staf akuntansi membukukan PPN tersebut sebagai beban dalam laporan keuangan Juni 2026 dan tidak mengkreditkannya di SPT Masa Juni. Pada Agustus 2026 perusahaan ingin mengkreditkannya. Perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dapat dikreditkan pada Masa Agustus 2026 karena masih dalam batas 3 masa", B: "Dapat dikreditkan hanya 80% karena terlambat", C: "Tidak dapat dikreditkan karena sudah dibebankan sebagai biaya", D: "Dapat dikreditkan, tetapi harus melalui pembetulan SPT Masa Juni 2026" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pengkreditan PM pada masa yang tidak sama disyaratkan PM belum dibebankan sebagai biaya; karena sudah dibebankan, PM tersebut tidak dapat dikreditkan lagi.",
        jejakHitung: [],
        mengapaSalah: { A: "Batas 3 masa terpenuhi, tetapi syarat 'belum dibebankan sebagai biaya' tidak", B: "Pedoman 80% hanya untuk masa sebelum dikukuhkan PKP", D: "Pembetulan tidak menghidupkan PM yang sudah dibiayakan" },
        jebakan: "Batas waktu bukan satu-satunya syarat: perhatikan juga perlakuan akuntansinya."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A4-043", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A4-01",
      stem: "Vignette PT Sinar Logam (PKP, pabrik peralatan dapur, tahun buku Januari–Desember), Masa Maret 2026: penjualan kepada distributor PKP Rp1.800.000.000; penjualan kepada Dinas Pendidikan Provinsi (bendahara pemungut PPN) Rp200.000.000; ekspor Rp600.000.000 (PEB); pembelian bahan baku dari PKP Rp1.200.000.000 dengan faktur lengkap; pembelian sedan untuk direktur dengan PPN dalam faktur Rp60.000.000; jasa pemeliharaan mesin dengan PPN Rp8.800.000 (faktur lengkap); kompensasi lebih bayar Masa Februari 2026 Rp15.000.000. Semua harga belum termasuk PPN; produk dan bahan baku bukan barang mewah. PM yang dapat dikreditkan pada Masa Maret 2026 (sebelum memperhitungkan kompensasi) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp200.800.000", B: "Rp140.800.000", C: "Rp152.800.000", D: "Rp155.800.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PM bahan baku (11% × Rp1,2 miliar) dan jasa pemeliharaan dapat dikreditkan; PM sedan direktur dilarang Pasal 9 ayat (8) huruf c.",
        jejakHitung: [["PM bahan baku = 11% × 1.200.000.000", "Rp132.000.000"], ["PM jasa pemeliharaan mesin", "Rp8.800.000"], ["PM sedan direktur (Ps. 9 ayat (8) huruf c)", "tidak dapat dikreditkan"], ["PM dapat dikreditkan", "Rp140.800.000"]],
        mengapaSalah: { A: "Memasukkan PM sedan direktur", C: "Menghitung PM bahan baku 12% atas harga penuh", D: "Mencampurkan kompensasi masa lalu ke dalam PM masa ini, padahal soal meminta PM sebelum kompensasi" },
        jebakan: "Pisahkan PM masa berjalan dari kompensasi masa lalu; keduanya baru dijumlahkan saat menghitung kurang/lebih bayar."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan ayat (8) huruf c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-044", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-01",
      stem: "Vignette PT Sinar Logam, Masa Maret 2026: penjualan kepada distributor PKP Rp1.800.000.000; penjualan kepada Dinas Pendidikan Provinsi (bendahara pemungut PPN) Rp200.000.000; ekspor Rp600.000.000 (PEB); PM yang dapat dikreditkan Rp140.800.000; kompensasi lebih bayar Masa Februari 2026 Rp15.000.000. Semua harga belum termasuk PPN dan barang bukan barang mewah. PPN kurang (lebih) bayar yang harus disetor sendiri oleh PT Sinar Logam untuk Masa Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang bayar Rp64.200.000", B: "Kurang bayar Rp57.200.000", C: "Kurang bayar Rp42.200.000", D: "Kurang bayar Rp108.200.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Yang dihadapkan dengan PM hanyalah PK yang dipungut sendiri; PPN atas penyerahan kepada bendahara dipungut dan disetor bendahara, ekspor 0%, dan kompensasi Februari ikut mengurangi.",
        jejakHitung: [["PK dipungut sendiri = 11% × 1.800.000.000", "Rp198.000.000"], ["PPN penyerahan ke bendahara (11% × 200.000.000 = Rp22.000.000)", "dipungut dan disetor bendahara"], ["PK ekspor = 0%", "Rp0"], ["PM + kompensasi = 140.800.000 + 15.000.000", "Rp155.800.000"], ["Kurang bayar = 198.000.000 − 155.800.000", "Rp42.200.000"]],
        mengapaSalah: { A: "PPN yang dipungut bendahara ikut dihitung sebagai PK yang disetor sendiri", B: "Lupa memperhitungkan kompensasi lebih bayar Februari", D: "Ekspor dikenai 0%, bukan 11%" },
        jebakan: "Rumus SPT: PK dipungut sendiri − (PM masa ini + kompensasi)."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (3) dan (4) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-045", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A4-01",
      stem: "Vignette PT Sinar Logam: PPN kurang bayar Masa Maret 2026 sebesar Rp42.200.000 disetor pada 30 April 2026, tetapi SPT Masa PPN Maret 2026 baru disampaikan melalui Coretax pada 4 Mei 2026. Tidak ada kesalahan lain dalam SPT. Sanksi administrasi yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Denda Rp500.000 saja", B: "Denda Rp100.000", C: "Denda Rp500.000 ditambah bunga Pasal 9 ayat (2a) satu bulan atas Rp42.200.000", D: "Tidak ada sanksi karena PPN telah disetor tepat waktu" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setoran tepat waktu sehingga tidak ada bunga; keterlambatan SPT Masa PPN dikenai denda Rp500.000 per SPT.",
        jejakHitung: [["Batas setor dan lapor Masa Maret", "30 April 2026"], ["Setor 30 April", "tepat waktu → tanpa bunga"], ["Lapor 4 Mei", "terlambat"], ["Denda Pasal 7 ayat (1) untuk SPT Masa PPN", "Rp500.000"]],
        mengapaSalah: { B: "Rp100.000 untuk SPT Masa selain PPN", C: "Bunga hanya timbul bila setoran terlambat", D: "Penyampaian SPT adalah kewajiban terpisah dari penyetoran" },
        jebakan: "Pisahkan sanksi setor (bunga) dan sanksi lapor (denda)."
      },
      dasarHukum: [{ pasal: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-046", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-A4-02",
      stem: "Vignette CV Sarana Abadi (PKP, pemasok komputer), Masa Agustus 2026. CV menyerahkan 20 unit komputer kepada Dinas Kesehatan Kota dengan nilai kontrak Rp222.000.000 sudah termasuk PPN; pembayaran dilakukan oleh bendahara pengeluaran dinas yang berstatus pemungut PPN. Kode transaksi faktur pajak dan pihak yang menyetor PPN atas penyerahan ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kode 01; PPN Rp22.000.000 disetor sendiri oleh CV Sarana Abadi", B: "Kode 03; PPN Rp22.000.000 dipungut dan disetor bendahara", C: "Kode 02; PPN Rp24.420.000 dipungut dan disetor bendahara", D: "Kode 02; PPN Rp22.000.000 dipungut dan disetor bendahara" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Penyerahan kepada instansi pemerintah memakai kode 02 dan PPN-nya dipungut, disetor, serta dilaporkan oleh bendahara sebagai pemungut.",
        jejakHitung: [["Harga tanpa PPN = 222.000.000 × 100/111", "Rp200.000.000"], ["PPN = 11% × 200.000.000", "Rp22.000.000"], ["Penyerahan kepada instansi pemerintah", "kode 02; dipungut bendahara (Ps. 16A)"]],
        mengapaSalah: { A: "Kode 01 untuk penyerahan yang PPN-nya dipungut sendiri oleh penjual", B: "Kode 03 untuk pemungut selain instansi pemerintah", C: "Mengalikan 11% ke nilai kontrak yang sudah termasuk PPN" },
        jebakan: "Nilai kontrak pemerintah biasanya sudah termasuk PPN: keluarkan dulu PPN dengan 100/111."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (kode transaksi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-047", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A4-02",
      stem: "Vignette CV Sarana Abadi (PKP, pemasok komputer), Masa Agustus 2026. Atas kontrak pengadaan komputer Rp222.000.000 (termasuk PPN) dengan Dinas Kesehatan Kota, bendahara pengeluaran memungut PPN dan PPh Pasal 22 atas pembelian barang sesuai ketentuan, lalu mentransfer sisanya ke rekening CV. Jumlah uang yang diterima CV Sarana Abadi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp197.000.000", B: "Rp196.670.000", C: "Rp200.000.000", D: "Rp219.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bendahara memungut PPN 11% efektif dan PPh 22 1,5% dari harga tidak termasuk PPN, sehingga CV menerima Rp197 juta; PPh 22 menjadi kredit pajak CV.",
        jejakHitung: [["Harga tanpa PPN = 222.000.000 × 100/111", "Rp200.000.000"], ["PPN dipungut bendahara", "Rp22.000.000"], ["PPh 22 = 1,5% × 200.000.000", "Rp3.000.000"], ["Diterima = 222.000.000 − 22.000.000 − 3.000.000", "Rp197.000.000"]],
        mengapaSalah: { B: "Menghitung PPh 22 dari nilai kontrak termasuk PPN (1,5% × Rp222 juta)", C: "Lupa pemungutan PPh 22 oleh bendahara", D: "Lupa bahwa PPN juga dipungut langsung oleh bendahara" },
        jebakan: "Dasar PPh 22 bendahara adalah harga tidak termasuk PPN."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 22 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-048", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A4-02",
      stem: "Vignette CV Sarana Abadi (PKP, pemasok komputer), Masa Agustus 2026. Selain penyerahan kepada Dinas Kesehatan Kota (harga Rp200.000.000, PPN dipungut bendahara), CV menjual komputer kepada perusahaan swasta Rp150.000.000 (belum termasuk PPN). PM yang dapat dikreditkan bulan itu Rp35.200.000 dan tidak ada kompensasi dari masa sebelumnya. Posisi SPT Masa PPN Agustus 2026 dan pilihan yang tersedia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang bayar Rp3.300.000", B: "Lebih bayar Rp18.700.000; dapat diajukan restitusi pada Masa Agustus 2026 karena melakukan penyerahan kepada pemungut PPN", C: "Lebih bayar Rp18.700.000; hanya dapat dikompensasikan karena restitusi baru boleh pada akhir tahun buku", D: "Lebih bayar Rp18.700.000; wajib dimintakan restitusi melalui pemeriksaan dan tidak boleh dikompensasikan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Karena PPN atas penyerahan ke bendahara tidak disetor sendiri, PM melebihi PK sehingga lebih bayar Rp18,7 juta; penjual kepada pemungut termasuk PKP yang boleh meminta restitusi setiap masa, atau tetap boleh mengompensasikannya.",
        jejakHitung: [["PK dipungut sendiri = 11% × 150.000.000", "Rp16.500.000"], ["PK dipungut bendahara (Rp22.000.000)", "tidak disetor CV"], ["PK − PM = 16.500.000 − 35.200.000", "lebih bayar Rp18.700.000"], ["Penyerahan kepada pemungut (Ps. 9 ayat (4b) huruf b)", "boleh restitusi setiap masa"]],
        mengapaSalah: { A: "Menambahkan PPN yang dipungut bendahara ke PK yang disetor sendiri (16,5 + 22 − 35,2)", C: "Batas akhir tahun buku tidak berlaku bagi penjual kepada pemungut", D: "Restitusi adalah pilihan; lebih bayar tetap boleh dikompensasikan" },
        jebakan: "Lebih bayar karena penyerahan kepada pemungut adalah alasan klasik restitusi setiap masa."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4) dan (4b) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-049", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "PT Medika Farma (PKP, pedagang besar farmasi) pada Masa Agustus 2026 menyerahkan obat kepada: (1) RSUD milik pemerintah kabupaten yang pembayarannya dilakukan bendahara pengeluaran daerah sebagai pemungut PPN; dan (2) PT Kereta Api Indonesia (Persero), BUMN yang ditetapkan sebagai pemungut PPN, untuk klinik karyawannya. Kode transaksi faktur pajak untuk penyerahan (1) dan (2) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "02 dan 03", B: "03 dan 02", C: "01 dan 01", D: "02 dan 01" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyerahan kepada instansi pemerintah (termasuk pemerintah daerah) memakai kode 02, sedangkan kepada pemungut selain instansi pemerintah seperti BUMN memakai kode 03.",
        jejakHitung: [],
        mengapaSalah: { B: "Kode tertukar", C: "Kode 01 untuk penyerahan yang PPN-nya dipungut sendiri; penyerahan kepada pemungut punya kode khusus", D: "BUMN yang ditetapkan sebagai pemungut memakai kode 03" },
        jebakan: "02 = instansi pemerintah; 03 = pemungut lain."
      },
      dasarHukum: [{ pasal: "Pasal 16A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (kode transaksi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 70, verifikasi: "✅"
    },
    {
      id: "A4-050", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Nona Laras (karyawan, bukan PKP) berlangganan layanan musik digital dari penyedia luar negeri yang telah ditunjuk sebagai pemungut PPN PMSE. Harga langganan Rp169.000 per bulan belum termasuk PPN. PPN yang dipungut penyedia setiap bulan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.280", B: "Rp18.590", C: "Rp16.900", D: "Rp0, karena Nona Laras bukan PKP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPN PMSE atas pemanfaatan JKP/BKP tidak berwujud dari luar Daerah Pabean dipungut penyedia yang ditunjuk sebesar 12% × 11/12 = 11% dari harga.",
        jejakHitung: [["DPP nilai lain = 11/12 × 169.000", "Rp154.917"], ["PPN = 12% × 154.916,67", "Rp18.590"]],
        mengapaSalah: { A: "Memakai 12% atas harga penuh", C: "Memakai tarif 10% sebelum April 2022", D: "Konsumen akhir justru pemikul PPN; status PKP tidak relevan" },
        jebakan: "PPN PMSE mengikuti DPP 11/12 seperti barang/jasa non-mewah lainnya."
      },
      dasarHukum: [{ pasal: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 50, verifikasi: "✅"
    },
    {
      id: "A4-051", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "StreamGlobal Pte. Ltd. (berkedudukan di Singapura, tanpa BUT di Indonesia) menjual langganan video daring kepada konsumen di Indonesia. Dalam 12 bulan terakhir nilai transaksinya dengan pembeli Indonesia rata-rata Rp45.000.000 per bulan (Rp540.000.000 setahun), sedangkan jumlah pengakses (traffic) dari Indonesia rata-rata 1.500 per bulan. Berdasarkan kriteria penunjukan pemungut PPN PMSE, kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Belum memenuhi karena nilai transaksi belum melebihi Rp50.000.000 sebulan", B: "Belum memenuhi karena nilai transaksi setahun belum melebihi Rp600.000.000", C: "Memenuhi karena jumlah traffic melebihi 1.000 pengakses dalam sebulan", D: "Memenuhi karena setiap PMSE luar negeri wajib ditunjuk tanpa ambang" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kriteria nilai transaksi dan kriteria traffic bersifat alternatif ('dan/atau'); traffic 1.500 per bulan sudah melampaui 1.000 per bulan sehingga kriteria penunjukan terpenuhi.",
        jejakHitung: [],
        mengapaSalah: { A: "Mengabaikan kriteria traffic yang berdiri sendiri", B: "Hanya memeriksa ambang tahunan nilai transaksi", D: "Penunjukan didasarkan pada kriteria ambang, tidak otomatis" },
        jebakan: "Satu kriteria terpenuhi sudah cukup."
      },
      dasarHukum: [{ pasal: "PMK 60/PMK.03/2022 (kriteria penunjukan pemungut PMSE)", berlakuSejak: "2022-04-01" }, { pasal: "Pasal 32A UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A4-052", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      kutipan: "Pasal 16A ayat (1) UU PPN: Pajak yang terutang atas penyerahan Barang Kena Pajak dan/atau Jasa Kena Pajak kepada Pemungut Pajak Pertambahan Nilai dipungut, disetor, dan dilaporkan oleh Pemungut Pajak Pertambahan Nilai.",
      stem: "Berdasarkan kutipan tersebut, kewajiban PT Konstruksi Andalan (PKP) yang menyerahkan jasa renovasi gedung kepada sebuah kementerian (pemungut PPN) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak perlu membuat faktur pajak karena PPN dipungut kementerian", B: "Membuat faktur pajak kode 02 dan melaporkan penyerahan dalam SPT Masa PPN, tanpa menyetor PPN yang dipungut kementerian", C: "Membuat faktur pajak kode 01 dan menyetor sendiri PPN, lalu kementerian mengkreditkannya", D: "Membuat faktur kode 02 dan menyetor sendiri PPN-nya sebelum menerima pembayaran" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pemungut yang memungut, menyetor, dan melaporkan PPN; penjual tetap membuat faktur (kode 02) dan melaporkan penyerahannya dalam SPT Masa PPN tanpa menyetor PPN tersebut.",
        jejakHitung: [],
        mengapaSalah: { A: "Faktur pajak tetap wajib dibuat oleh PKP penjual", C: "Kode 01 dan setor sendiri bertentangan dengan Pasal 16A", D: "Penyetoran oleh penjual menyebabkan PPN tersetor dua kali" },
        jebakan: "Pemungut mengambil alih penyetoran, bukan pembuatan faktur."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A4-053", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "CV Dagang Makmur (PKP, pedagang besar dalam negeri, tahun buku Januari–Desember) mengalami lebih bayar PPN Rp20.000.000 pada Masa Juli 2026 karena membeli persediaan dalam jumlah besar. CV tidak melakukan ekspor, tidak menyerahkan kepada pemungut, dan tidak menerima fasilitas apa pun. Perlakuan atas lebih bayar tersebut yang sesuai Pasal 9 ayat (4) dan (4a) UU PPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dapat langsung diajukan restitusi pada SPT Masa Juli 2026", B: "Hangus bila tidak dikompensasikan dalam 3 masa berikutnya", C: "Dikompensasikan ke Masa Agustus 2026; restitusi baru dapat diajukan pada akhir tahun buku", D: "Dikompensasikan paling lama sampai Masa Desember 2026 dan tidak dapat dibawa ke tahun berikutnya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PKP umum mengompensasikan lebih bayar ke masa berikutnya; permohonan restitusi hanya pada akhir tahun buku, dan bila tidak diminta kelebihan itu tetap dapat dikompensasikan.",
        jejakHitung: [],
        mengapaSalah: { A: "Restitusi setiap masa hanya untuk PKP Pasal 9 ayat (4b)", B: "Batas 3 masa berlaku untuk pengkreditan faktur, bukan kompensasi lebih bayar", D: "Kelebihan pada akhir tahun dapat direstitusi atau tetap dikompensasikan ke tahun berikutnya" },
        jebakan: "Jangan mencampur batas 3 masa (pengkreditan faktur) dengan kompensasi lebih bayar."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4) dan (4a) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    {
      id: "A4-054", topik: "A4.9", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Kopi Ekspor Nusantara (PKP, eksportir biji kopi) pada 25 September 2026 menyampaikan SPT Masa PPN Agustus 2026 dengan jumlah penyerahan Rp9.500.000.000 (seluruhnya ekspor dengan PEB) dan lebih bayar Rp3.800.000.000, lalu memilih pengembalian pendahuluan sebagai WP persyaratan tertentu (Pasal 17D UU KUP). Perusahaan tidak ditetapkan sebagai WP kriteria tertentu maupun PKP berisiko rendah, serta tidak sedang diperiksa atau disidik. Berdasarkan ketentuan pengembalian pendahuluan yang berlaku sejak 1 Mei 2026, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dapat diproses sebagai pengembalian pendahuluan karena lebih bayar tidak melebihi Rp5.000.000.000; SKPPKP terbit paling lama 1 bulan", B: "Tidak memenuhi Pasal 17D karena lebih bayar melebihi Rp1.000.000.000 dan penyerahan melebihi Rp4.200.000.000 untuk Masa Pajak tersebut; restitusinya diproses melalui pemeriksaan dengan keputusan paling lama 12 bulan (Pasal 17B)", C: "Tidak memenuhi Pasal 17D; karena itu lebih bayar eksportir hanya dapat dikompensasikan dan baru dapat dimintakan restitusi pada akhir tahun buku", D: "Dapat diproses sebagai pengembalian pendahuluan; bila kemudian terbit SKPKB, sanksinya hanya bunga Pasal 13 ayat (2)" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PMK 28/2026 (berlaku 1 Mei 2026, menggantikan PMK 39/2018 s.t.d.d. PMK 209/2021) menurunkan batas Pasal 17D bagi PKP menjadi lebih bayar paling banyak Rp1 miliar dengan jumlah penyerahan paling banyak Rp4,2 miliar untuk suatu Masa Pajak. Tanpa status Pasal 17C atau PKP berisiko rendah, eksportir ini tetap boleh meminta restitusi setiap masa (Pasal 9 ayat (4b)), tetapi melalui pemeriksaan Pasal 17B.",
        jejakHitung: [["Lebih bayar Masa Agustus 2026 Rp3,8 miliar vs batas PKP Rp1 miliar per Masa Pajak", "melebihi"], ["Penyerahan Masa Agustus 2026 Rp9,5 miliar vs batas Rp4,2 miliar per Masa Pajak", "melebihi"], ["Status Pasal 17C / PKP berisiko rendah", "tidak ada"], ["Jalur restitusi", "pemeriksaan Pasal 17B, paling lama 12 bulan"], ["Hak restitusi setiap masa (eksportir, Ps. 9 ayat (4b))", "tetap ada"]],
        mengapaSalah: { A: "Rp5 miliar adalah batas PMK 209/2021 yang berlaku sampai 30 April 2026", C: "Eksportir termasuk PKP yang boleh meminta restitusi setiap masa (Pasal 9 ayat (4b)); yang gugur hanya jalur pendahuluan", D: "Permohonan tidak memenuhi syarat, dan sanksi SKPKB setelah pengembalian pendahuluan Pasal 17D adalah kenaikan 100%, bukan bunga Pasal 13 ayat (2)" },
        jebakan: "Batas Pasal 17D bagi PKP turun dari Rp5 miliar menjadi lebih bayar Rp1 miliar per Masa Pajak (ditambah syarat penyerahan paling banyak Rp4,2 miliar dalam Masa Pajak yang sama) sejak 1 Mei 2026."
      },
      dasarHukum: [{ pasal: "Pasal 17B dan Pasal 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (4b) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 28 Tahun 2026 (pengembalian pendahuluan; mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-055", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Baja Prima (PKP) mengajukan permohonan restitusi lebih bayar PPN akhir tahun buku 2025 melalui SPT Masa PPN Desember 2025, dan permohonan dinyatakan diterima lengkap pada 10 Maret 2026. PT Baja Prima tidak memenuhi kriteria pengembalian pendahuluan sehingga dilakukan pemeriksaan. DJP wajib menerbitkan surat ketetapan pajak paling lama pada ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "10 April 2026", B: "10 September 2026", C: "10 Maret 2027; bila terlampaui permohonan dianggap ditolak", D: "10 Maret 2027; bila terlampaui permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan kemudian" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 17B: keputusan atas permohonan restitusi melalui pemeriksaan paling lama 12 bulan sejak permohonan diterima lengkap; bila terlewati, permohonan dianggap dikabulkan dan SKPLB terbit paling lama 1 bulan setelahnya.",
        jejakHitung: [["Permohonan diterima lengkap", "10 Maret 2026"], ["+ 12 bulan", "10 Maret 2027"]],
        mengapaSalah: { A: "1 bulan adalah jangka SKPPKP pengembalian pendahuluan PPN", B: "Tidak ada jangka 6 bulan dalam Pasal 17B", C: "Akibat lewat waktu adalah dikabulkan, bukan ditolak" },
        jebakan: "Diamnya DJP melewati 12 bulan berarti permohonan dikabulkan."
      },
      dasarHukum: [{ pasal: "Pasal 17B ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    {
      id: "A4-056", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 9 ayat (4b) UU PPN (ringkasan setia): PKP yang dapat mengajukan permohonan pengembalian kelebihan pajak pada setiap Masa Pajak adalah PKP yang melakukan ekspor BKP berwujud; penyerahan BKP dan/atau JKP kepada Pemungut PPN; penyerahan BKP dan/atau JKP yang PPN-nya tidak dipungut; ekspor BKP tidak berwujud; ekspor JKP; dan/atau PKP dalam tahap belum berproduksi.",
      stem: "Empat PKP berikut mengalami lebih bayar PPN pada Masa Juni 2026. Berdasarkan kutipan tersebut, PKP yang tidak dapat mengajukan restitusi pada Masa Juni 2026 dan harus mengompensasikannya atau menunggu akhir tahun buku adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "PT Galangan Bahari, yang menyerahkan kapal niaga dengan fasilitas PPN tidak dipungut", B: "PT Elektronik Jaya, pedagang besar yang lebih bayar karena menimbun persediaan menjelang musim liburan", C: "PT Kode Kreatif, pengembang perangkat lunak yang mengekspor JKP ke Singapura", D: "CV Sarana Medika, yang sebagian besar penjualannya kepada rumah sakit pemerintah (pemungut PPN)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Lebih bayar karena penumpukan persediaan pada penyerahan dalam negeri biasa tidak termasuk daftar Pasal 9 ayat (4b), sehingga restitusinya baru pada akhir tahun buku.",
        jejakHitung: [],
        mengapaSalah: { A: "Penyerahan yang tidak dipungut termasuk daftar ayat (4b)", C: "Ekspor JKP termasuk daftar ayat (4b)", D: "Penyerahan kepada pemungut termasuk daftar ayat (4b)" },
        jebakan: "Restitusi setiap masa untuk lebih bayar 'struktural': PK tidak disetor sendiri atau bertarif 0%."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4a) dan (4b) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-057", topik: "A4.9", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Hasil pemeriksaan atas PT Mulia Jaya (PKP) menunjukkan bahwa lebih bayar PPN Masa Maret 2026 sebesar Rp40.000.000, yang telah dikompensasikan ke Masa April 2026, ternyata berasal dari PM atas faktur yang tidak mencantumkan identitas pembeli sehingga tidak seharusnya dikompensasikan. DJP menerbitkan SKPKB berdasarkan Pasal 13 ayat (1) huruf c UU KUP. Jumlah yang harus dibayar menurut SKPKB (pokok ditambah sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp80.000.000", B: "Rp70.000.000", C: "Rp60.000.000", D: "Rp48.832.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPN yang tidak seharusnya dikompensasikan ditagih melalui SKPKB dengan sanksi kenaikan 75% (sejak UU HPP; sebelumnya 100%).",
        jejakHitung: [["Pokok (kompensasi yang tidak seharusnya)", "Rp40.000.000"], ["Kenaikan Pasal 13 ayat (3) = 75% × 40.000.000", "Rp30.000.000"], ["Jumlah SKPKB", "Rp70.000.000"]],
        mengapaSalah: { A: "Memakai kenaikan 100% sebelum UU HPP", C: "Memakai kenaikan 50%, yang bukan sanksi untuk PPN", D: "Memakai sanksi bunga Pasal 13 ayat (2) (misalnya 1,84% × 12 bulan), padahal kompensasi yang tidak seharusnya dikenai kenaikan" },
        jebakan: "Pasal 13 ayat (3): PPN tidak seharusnya dikompensasikan → kenaikan 75%, bukan bunga."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf c dan ayat (3) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-058", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 3, formulirRef: "1111.induk.2",
      stem: "PT Sinar Pratama (PKP) pada Masa Agustus 2026 melakukan penyerahan berikut (belum termasuk PPN): kepada PKP swasta Rp1.000.000.000; kepada kementerian (pemungut PPN) Rp200.000.000; penyerahan buku pelajaran yang dibebaskan Rp100.000.000; dan ekspor Rp500.000.000. Dalam SPT Masa PPN, jumlah PK pada kelompok baris 'penyerahan yang PPN-nya harus dipungut sendiri' (seluruh baris dipungut sendiri, termasuk yang memakai DPP nilai lain) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp132.000.000", B: "Rp143.000.000", C: "Rp110.000.000", D: "Rp165.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bagian 'dipungut sendiri' hanya memuat penyerahan dalam negeri yang PPN-nya dipungut PKP sendiri; penyerahan kepada pemungut, dibebaskan, dan ekspor dilaporkan di bagian masing-masing.",
        jejakHitung: [["Kepada PKP swasta: 11% × 1.000.000.000", "Rp110.000.000 (dipungut sendiri)"], ["Kepada kementerian (Rp22.000.000)", "bagian dipungut pemungut"], ["Buku pelajaran", "bagian dibebaskan"], ["Ekspor", "bagian ekspor, tarif 0%"], ["PK dipungut sendiri", "Rp110.000.000"]],
        mengapaSalah: { A: "Memasukkan PPN yang dipungut kementerian", B: "Memasukkan penyerahan kepada pemungut dan penyerahan dibebaskan", D: "Memasukkan ekspor seolah-olah terutang 11% (110.000.000 + 55.000.000)" },
        jebakan: "Satu SPT, beberapa keranjang penyerahan; hanya keranjang 'dipungut sendiri' yang menjadi dasar setor."
      },
      dasarHukum: [{ pasal: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Nama kelompok baris Induk SPT Masa PPN Coretax (termasuk pemisahan baris DPP nilai lain/besaran tertentu) belum dicek ke teks PER-11/PJ/2025; soal menguji substansi pengelompokan penyerahan."
    },
    {
      id: "A4-059", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "1111.induk.8",
      stem: "Dalam menyusun SPT Masa PPN Juni 2026, staf pajak PT Delta Data (PKP) harus menempatkan dua dokumen berikut: PIB atas impor server dan bukti setor PPN atas pemanfaatan jasa konsultan dari Singapura, keduanya untuk kegiatan usaha dan PPN-nya dapat dikreditkan. Kedua dokumen tersebut dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran B1: daftar PM atas impor BKP dan pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean", B: "Lampiran B2: daftar PM atas perolehan BKP/JKP dalam negeri", C: "Lampiran A1: daftar ekspor BKP, BKP tidak berwujud, dan JKP", D: "Lampiran B3: daftar PM yang tidak dapat dikreditkan atau mendapat fasilitas" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dokumen tertentu atas impor (PIB) dan pemanfaatan dari luar Daerah Pabean (bukti setor) dilaporkan sebagai PM dari luar negeri (lampiran B1), terpisah dari PM dalam negeri berbasis faktur (B2).",
        jejakHitung: [],
        mengapaSalah: { B: "B2 untuk faktur pajak masukan dalam negeri", C: "A1 untuk penyerahan ekspor (sisi keluaran)", D: "B3 untuk PM yang tidak dapat dikreditkan/fasilitas, sedangkan kedua PM ini dapat dikreditkan" },
        jebakan: "A = keluaran, B = masukan; 1 = luar negeri, 2 = dalam negeri, 3 = tidak dapat dikreditkan/fasilitas."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (lampiran SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    {
      id: "A4-060", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Anugerah Plastik (PKP) memiliki PPN kurang bayar Masa Juni 2026 sebesar Rp80.000.000. Batas penyetoran dan pelaporan Masa Juni adalah 31 Juli 2026, tetapi PPN baru disetor dan SPT Masa PPN baru disampaikan pada 14 September 2026. Anggap tarif bunga per bulan Pasal 9 ayat (2a) yang berlaku untuk penghitungan ini 1,05%. Jumlah seluruh sanksi administrasi (bunga dan denda) yang akan ditagih melalui STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.340.000", B: "Rp2.180.000", C: "Rp1.780.000", D: "Rp3.700.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Keterlambatan setor dikenai bunga Pasal 9 ayat (2a) per bulan dengan bagian bulan dihitung penuh (2 bulan), dan keterlambatan SPT dikenai denda Rp500.000.",
        jejakHitung: [["31 Juli → 14 September 2026", "1 bulan 14 hari → 2 bulan"], ["Bunga = 80.000.000 × 1,05% × 2", "Rp1.680.000"], ["Denda SPT Masa PPN terlambat", "Rp500.000"], ["Jumlah sanksi", "Rp2.180.000"]],
        mengapaSalah: { A: "Membulatkan 1 bulan 14 hari ke bawah menjadi 1 bulan", C: "Memakai denda Rp100.000 milik SPT Masa lain", D: "Memakai bunga 2% per bulan sebelum UU HPP" },
        jebakan: "Dua sanksi berbeda dasar: bunga untuk setor terlambat, denda untuk lapor terlambat."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-061", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Tuan Hendra (PKP orang pribadi, toko bangunan, peredaran bruto Rp3,2 miliar setahun) telah memberitahukan penggunaan NPPN untuk menghitung penghasilan neto PPh Tahun Pajak 2026. Pada Masa Juli 2026 tokonya tutup sementara untuk renovasi sehingga tidak ada penyerahan maupun perolehan. Kewajiban SPT Masa PPN Masa Juli 2026 bagi Tuan Hendra adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak wajib menyampaikan SPT Masa PPN karena tidak ada transaksi", B: "Tidak wajib menyampaikan SPT Masa PPN karena penggunaan NPPN menggantikan mekanisme PPN masa", C: "Wajib menyampaikan SPT Masa PPN nihil paling lambat 31 Agustus 2026", D: "Wajib menyampaikan SPT Masa PPN nihil paling lambat 20 Agustus 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "NPPN hanya mengatur penghitungan penghasilan neto PPh; sebagai PKP, Tuan Hendra tetap wajib menyampaikan SPT Masa PPN setiap masa, termasuk nihil, paling lambat akhir bulan berikutnya.",
        jejakHitung: [],
        mengapaSalah: { A: "SPT Masa PPN nihil tetap wajib disampaikan, dan terlambat tetap didenda Rp500.000", B: "NPPN tidak menghapus kewajiban PPN seorang PKP", D: "20 hari setelah masa berakhir adalah batas SPT Masa PPh, bukan SPT Masa PPN" },
        jebakan: "PPh dan PPN adalah dua rezim terpisah: NPPN tidak menyentuh kewajiban PKP."
      },
      dasarHukum: [{ pasal: "Pasal 15A ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 3 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 81/2024 (SPT Masa PPN Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-062", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Kencana Abadi (PKP) telah menyampaikan SPT Masa PPN Mei 2026 tepat waktu dengan status nihil. Pada 20 Agustus 2026 perusahaan menemukan faktur keluaran Masa Mei 2026 dengan PPN Rp5.500.000 yang dibuat dan diunggah tepat waktu tetapi belum dilaporkan, lalu menyetor kekurangan dan menyampaikan pembetulan SPT pada hari yang sama. Sanksi administrasi atas kekurangan bayar karena pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga Pasal 8 ayat (2a): (tarif acuan + 5%) ÷ 12 per bulan, dihitung sejak 30 Juni 2026 sampai 20 Agustus 2026 (2 bulan)", B: "Denda 1% × DPP faktur karena faktur terlambat dilaporkan (Pasal 14 ayat (4) UU KUP)", C: "Kenaikan 75% × Rp5.500.000 (Pasal 13 ayat (3) UU KUP)", D: "Bunga 2% per bulan sejak berakhirnya Masa Pajak Mei 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Pembetulan SPT Masa yang menyebabkan kurang bayar dikenai bunga Pasal 8 ayat (2a) sejak jatuh tempo penyetoran sampai tanggal pembayaran, bagian bulan dihitung penuh; tidak ada denda faktur karena faktur dibuat tepat waktu.",
        jejakHitung: [["Jatuh tempo setor Masa Mei", "30 Juni 2026"], ["Bayar 20 Agustus 2026", "1 bulan 21 hari → 2 bulan"], ["Sanksi", "bunga Pasal 8 ayat (2a), uplift 5%"]],
        mengapaSalah: { B: "Denda 1% DPP untuk faktur yang tidak/terlambat dibuat atau tidak lengkap, bukan faktur yang terlambat dilaporkan", C: "Kenaikan 75% hanya melalui SKPKB hasil pemeriksaan untuk sebab tertentu", D: "Bunga 2% flat berlaku sebelum UU HPP dan dihitung dari jatuh tempo, bukan akhir masa" },
        jebakan: "Pembetulan sukarela → bunga (uplift 5%), bukan kenaikan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 15A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-063", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Wahana Data (PKP) pada 25 Juni 2026 menerbitkan tagihan jasa pemeliharaan sistem untuk periode Juli–Desember 2026 kepada PT Agri Makmur (PKP) sebesar Rp600.000.000 (belum termasuk PPN) dan membuat faktur pajak Masa Juni 2026 dengan PPN Rp66.000.000; PT Agri Makmur telah mengkreditkannya pada Masa Juni 2026. Pada 7 September 2026 kedua pihak sepakat membatalkan jasa untuk Oktober–Desember 2026 (50% nilai kontrak), dan dokumen pembatalan JKP dibuat di Coretax pada bulan yang sama. Faktur semula tidak memuat kesalahan pengisian. Pernyataan yang paling tepat mengenai perlakuan PPN atas pembatalan sebagian tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPN atas bagian jasa yang dibatalkan sebesar Rp33.000.000 dikurangkan dari PK PT Wahana Data dan dari PM PT Agri Makmur pada Masa Pajak Juni 2026, yaitu masa faktur semula dibuat, dengan membetulkan SPT Masa PPN Juni 2026 kedua pihak", B: "PPN atas bagian jasa yang dibatalkan sebesar Rp33.000.000 dikurangkan dengan menerbitkan faktur pajak pengganti atas faktur Juni 2026 yang memuat DPP Rp300.000.000, lalu membetulkan SPT Masa PPN Juni 2026", C: "PPN atas bagian jasa yang dibatalkan sebesar Rp33.000.000 tidak dapat dikurangkan karena pengurangan PK hanya diperkenankan bila jasa dibatalkan seluruhnya, sehingga PK Masa Juni 2026 tetap Rp66.000.000", D: "PPN atas bagian jasa yang dibatalkan sebesar Rp33.000.000 dikurangkan dari PK PT Wahana Data dan dari PM PT Agri Makmur pada Masa Pajak September 2026, yaitu masa terjadinya pembatalan, tanpa membetulkan SPT Masa PPN Juni 2026" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 5A ayat (2) UU PPN: PPN atas JKP yang dibatalkan, baik seluruhnya maupun sebagian, dikurangkan dari PK dalam Masa Pajak terjadinya pembatalan; penerima jasa mengurangkan PM pada masa yang sama, sehingga SPT Juni tidak perlu dibetulkan.",
        jejakHitung: [["DPP semula", "Rp600.000.000"], ["PPN semula = 12% × 11/12 × 600.000.000", "Rp66.000.000"], ["Bagian dibatalkan = 50% × 600.000.000", "Rp300.000.000"], ["PPN dikurangkan = 12% × 11/12 × 300.000.000", "Rp33.000.000"], ["Masa pengurangan PK penjual dan PM pembeli", "September 2026"]],
        mengapaSalah: { A: "Pembatalan bukan koreksi kesalahan; Pasal 5A ayat (2) menempatkan pengurangan pada masa terjadinya pembatalan, bukan masa faktur semula", B: "Faktur pengganti dipakai untuk kesalahan pengisian atau penulisan faktur, sedangkan faktur Juni benar saat dibuat", C: "Pasal 5A ayat (2) tegas mencakup pembatalan 'seluruhnya maupun sebagian'" },
        jebakan: "Retur BKP dan pembatalan JKP dicatat pada masa terjadinya peristiwa; salah isi faktur diperbaiki dengan faktur pengganti di masa asal."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (dokumen retur dan pembatalan di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-064", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Alkes Prima (PKP) menjual alat medis kepada RS Harapan Sehat dengan harga jual Rp500.000.000 (belum termasuk PPN, bukan barang mewah) dan memungut PPN Rp55.000.000. RS Harapan Sehat hanya menyerahkan jasa pelayanan kesehatan medis yang dibebaskan dari PPN berdasarkan PP 49/2022, dan biaya alat itu diperhitungkan dalam tarif layanan pasien. Dalam diskusi tentang karakter PPN sebagai pajak atas konsumsi yang netral melalui mekanisme pengkreditan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPN Rp55.000.000 atas pembelian alat medis oleh RS Harapan Sehat tidak dapat dikreditkan dan menjadi bagian harga perolehan RS, sehingga PPN tetap membebani pasien secara tersembunyi melalui tarif layanan walaupun tagihan pasien tidak memuat PPN", B: "PPN Rp55.000.000 atas pembelian alat medis oleh RS Harapan Sehat dapat dikreditkan karena PPN menganut metode pengkreditan di setiap mata rantai, sehingga tidak ada PPN yang membebani pasien", C: "PPN Rp55.000.000 atas pembelian alat medis oleh RS Harapan Sehat tidak dapat dikreditkan tetapi dapat dimintakan pengembalian setiap Masa Pajak seperti penyerahan yang tidak dipungut, sehingga tidak ada PPN yang membebani pasien", D: "PPN Rp55.000.000 atas pembelian alat medis oleh RS Harapan Sehat tidak terutang karena pembebasan atas jasa RS ikut membebaskan perolehan alat medisnya, sehingga tidak ada PPN yang membebani pasien" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembebasan memutus mata rantai pengkreditan: PM atas perolehan untuk penyerahan yang dibebaskan tidak dapat dikreditkan (Pasal 16B ayat (3)), sehingga PPN menjadi biaya dan tetap sampai ke konsumen secara tersembunyi; netralitas PPN hanya terjaga bila setiap mata rantai berhak mengkreditkan PM.",
        jejakHitung: [["PPN dipungut penjual = 12% × 11/12 × 500.000.000", "Rp55.000.000"], ["Penyerahan RS dibebaskan (PP 49/2022)", "PM tidak dapat dikreditkan (Ps. 16B ayat (3))"], ["Perlakuan di RS", "dikapitalisasi ke harga perolehan alat"]],
        mengapaSalah: { B: "Hak kredit hanya untuk perolehan yang terkait penyerahan terutang; penyerahan RS dibebaskan", C: "Restitusi setiap masa (Pasal 9 ayat (4b)) berlaku bagi penyerahan yang tidak dipungut, ekspor, atau kepada pemungut, bukan penyerahan yang dibebaskan", D: "Pembebasan melekat pada penyerahan jasa RS, bukan pada pembelian alat dari PKP penjual yang tetap terutang PPN" },
        jebakan: "Dibebaskan tidak sama dengan tidak dipungut: pembebasan menghapus PPN keluaran sekaligus hak kredit, sehingga muncul PPN tersembunyi."
      },
      dasarHukum: [{ pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-065", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 15A UU PPN: (1) Penyetoran Pajak Pertambahan Nilai oleh Pengusaha Kena Pajak harus dilakukan paling lama akhir bulan berikutnya setelah berakhirnya Masa Pajak dan sebelum Surat Pemberitahuan Masa Pajak Pertambahan Nilai disampaikan. (2) Penyampaian Surat Pemberitahuan Masa Pajak Pertambahan Nilai oleh Pengusaha Kena Pajak harus dilakukan paling lama akhir bulan berikutnya setelah berakhirnya Masa Pajak.",
      stem: "Hari ini 27 Oktober 2026. Staf pajak PT Sentosa Kemas (PKP) menyiapkan SPT Masa PPN September 2026 di Coretax. Semua faktur keluaran September sudah disetujui DJP; 14 faktur masukan September yang memenuhi syarat sudah berstatus disetujui tetapi belum dikreditkan; perhitungan sementara menunjukkan kurang bayar. Langkah yang tersedia: (1) mengkreditkan ke-14 faktur masukan untuk Masa Pajak September 2026 pada menu Pajak Masukan e-Faktur Coretax; (2) membuat konsep SPT Masa PPN September 2026 pada menu Surat Pemberitahuan (SPT) sehingga daftar PK dan PM terisi dari faktur; (3) membuat kode billing atas kurang bayar dari konsep SPT dan melunasinya; (4) menandatangani dan mengirim SPT. Berdasarkan kutipan tersebut, urutan yang benar dan tidak menimbulkan sanksi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) → (4) → (3) → (1): SPT dikirim lebih dulu agar tidak terlambat, lalu kurang bayar dilunasi, kemudian faktur masukan dikreditkan", B: "(1) → (2) → (4) → (3): faktur masukan dikreditkan dan konsep SPT disusun, SPT dikirim, lalu kurang bayar dilunasi sebelum akhir bulan", C: "(1) → (3) tanpa membuat dan mengirim SPT, karena di Coretax pelunasan kurang bayar PPN dengan kode billing dianggap sebagai penyampaian SPT Masa PPN", D: "(1) → (2) → (3) → (4): faktur masukan dikreditkan, konsep SPT disusun, kurang bayar dilunasi, baru SPT ditandatangani dan dikirim" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PM baru terbawa ke SPT bila faktur masukan sudah dikreditkan untuk masa itu, konsep SPT disusun dari faktur, dan Pasal 15A ayat (1) mewajibkan PPN disetor sebelum SPT Masa PPN disampaikan; tidak ada ketentuan 'pembayaran dianggap SPT' untuk SPT Masa PPN.",
        jejakHitung: [["Batas setor dan lapor Masa September", "akhir Oktober 2026 (Pasal 15A)"], ["Syarat urutan", "setor sebelum SPT disampaikan"], ["PM yang masuk SPT", "faktur yang sudah dikreditkan untuk Masa September"]],
        mengapaSalah: { A: "Faktur masukan yang dikreditkan setelah SPT terkirim tidak masuk SPT September, dan pelunasan setelah SPT disampaikan melanggar Pasal 15A ayat (1)", B: "Pasal 15A ayat (1): PPN harus disetor sebelum SPT Masa PPN disampaikan, bukan sesudahnya", C: "Pembayaran yang dianggap sebagai penyampaian SPT hanya berlaku untuk SPT Masa tertentu seperti PPh Pasal 25, tidak untuk SPT Masa PPN" },
        jebakan: "Kreditkan dulu, susun konsep, lunasi, baru kirim SPT."
      },
      dasarHukum: [{ pasal: "Pasal 15A ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 (SPT Masa PPN melalui Coretax)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140, verifikasi: "◐",
      peringatan: "Nama menu Coretax (Pajak Masukan pada e-Faktur, Surat Pemberitahuan (SPT), konsep SPT, kode billing dari konsep SPT) ditulis menurut uraian umum panduan Coretax dan belum dicocokkan dengan tampilan terbaru; substansi urutan (PM dikreditkan sebelum SPT disusun, setor sebelum lapor) bersandar pada Pasal 15A UU PPN dan mekanisme pengkreditan faktur di Coretax."
    },
    {
      id: "A4-066", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "PMK 81/2024 Pasal 100 (parafrase setia): dalam hal batas waktu pembayaran atau penyetoran pajak bertepatan dengan hari libur, termasuk hari Sabtu, hari Minggu, dan hari libur nasional, pembayaran atau penyetoran pajak dapat dilakukan paling lambat pada hari kerja berikutnya.",
      stem: "PT Arunika Digital (PKP, Jakarta) memakai jasa pengembangan perangkat lunak dari perusahaan di Jerman yang tidak memiliki BUT dan tidak ditunjuk sebagai pemungut PPN PMSE. Tagihan sebesar Rp360.000.000 diterima dan dicatat sebagai utang pada 12 Oktober 2026, jasa mulai dimanfaatkan pada hari yang sama, dan pembayaran kepada vendor dilakukan 3 November 2026. PPN atas pemanfaatan itu disetor sendiri dengan kode billing yang dibuat di Coretax. Tanggal 15 November 2026 jatuh pada hari Minggu dan tidak ada hari libur lain di sekitarnya. Berdasarkan kutipan tersebut, jumlah PPN yang disetor dan batas akhir penyetorannya tanpa sanksi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp39.600.000; paling lambat Senin, 16 November 2026", B: "Rp39.600.000; paling lambat Jumat, 13 November 2026, karena batas yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", C: "Rp43.200.000; paling lambat Senin, 16 November 2026", D: "Rp39.600.000; paling lambat Selasa, 15 Desember 2026, karena PPN baru terutang saat dibayar pada November 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Saat terutang pemanfaatan JKP dari luar Daerah Pabean adalah peristiwa paling awal di antara harga ditagih, diakui sebagai utang, atau dibayar (12 Oktober 2026); PPN Rp39,6 juta disetor paling lambat tanggal 15 bulan berikutnya, dan karena 15 November 2026 hari Minggu, batasnya bergeser ke Senin, 16 November 2026.",
        jejakHitung: [["Saat terutang (tagihan dan pengakuan utang)", "12 Oktober 2026 → Masa Oktober"], ["PPN = 12% × 11/12 × 360.000.000", "Rp39.600.000"], ["Batas setor normal (PMK 81/2024 Ps. 94)", "15 November 2026 (Minggu)"], ["Bergeser ke hari kerja berikutnya (PMK 81/2024 Ps. 100)", "Senin, 16 November 2026"]],
        mengapaSalah: { B: "Ketentuan hari libur menggeser batas ke hari kerja berikutnya, bukan ke hari kerja sebelumnya", C: "Memakai 12% atas imbalan penuh; jasa non-mewah memakai DPP nilai lain 11/12", D: "Saat terutang adalah peristiwa paling awal (tagihan dan pengakuan utang pada Oktober), bukan saat pembayaran" },
        jebakan: "Tentukan dulu saat terutang, baru hitung tanggal 15 bulan berikutnya, lalu geser bila jatuh pada hari libur."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (3) dan Pasal 11 UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 Pasal 94 dan Pasal 100", berlakuSejak: "2025-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-067", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-05",
      stem: "Vignette PT Kode Nusantara (PKP, pengembang perangkat lunak, berdiri 2017, 46 karyawan, peredaran bruto 2025 Rp21 miliar), Masa September 2026: (a) jasa pengembangan aplikasi untuk klien di Singapura yang dimanfaatkan di luar Daerah Pabean dan memenuhi syarat ekspor JKP Rp1.200.000.000; (b) penjualan lisensi perangkat lunak kepada PKP swasta dalam negeri Rp1.500.000.000; (c) jasa konsultan TI untuk implementasi sistem kepada sebuah kementerian (pemungut PPN) Rp300.000.000; (d) pemanfaatan jasa komputasi awan dari penyedia di Irlandia (bukan pemungut PPN PMSE) Rp200.000.000 yang ditagih dan dibayar 10 September 2026, PPN-nya Rp22.000.000 disetor sendiri 28 September 2026; (e) faktur masukan lengkap: server dan laptop PPN Rp55.000.000, sewa kantor PPN Rp33.000.000 (PPh Pasal 4 ayat (2) atas sewa Rp30.000.000 telah dipotong), sedan untuk direktur PPN Rp48.000.000; (f) PPh Pasal 21 karyawan Rp84.000.000 dan angsuran PPh Pasal 25 Rp35.000.000; (g) lebih bayar Masa Agustus 2026 Rp7.500.000 dikompensasikan ke Masa September. Semua nilai belum termasuk PPN. PPN kurang bayar yang harus dilunasi melalui SPT Masa PPN September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp25.500.000", B: "Rp47.500.000", C: "Rp55.000.000", D: "Rp69.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya PK yang dipungut sendiri (lisensi) yang dihadapkan dengan PM; ekspor JKP 0%, PPN jasa ke kementerian dipungut pemungut, PPN pemanfaatan cloud yang sudah disetor menjadi PM, PM sedan direktur tidak dapat dikreditkan, dan data PPh hanya pengalih.",
        jejakHitung: [["PK dipungut sendiri: lisensi = 12% × 11/12 × 1.500.000.000", "Rp165.000.000"], ["Ekspor JKP (tarif 0%)", "Rp0"], ["Jasa ke kementerian: PPN Rp33.000.000", "dipungut dan disetor pemungut"], ["PM = 55.000.000 + 33.000.000 + 22.000.000 (bukti setor pemanfaatan)", "Rp110.000.000"], ["PM sedan direktur (Ps. 9 ayat (8) huruf c)", "tidak dapat dikreditkan"], ["PM + kompensasi = 110.000.000 + 7.500.000", "Rp117.500.000"], ["Kurang bayar = 165.000.000 − 117.500.000", "Rp47.500.000"], ["Karyawan, omzet 2025, PPh 21, PPh 25, PPh 4(2)", "tidak dipakai"]],
        mengapaSalah: { A: "PPN pemanfaatan Rp22 juta sudah disetor tersendiri lalu dikreditkan sebagai PM; mengurangkannya lagi dari kurang bayar berarti menghitungnya dua kali", C: "Lupa mengurangkan kompensasi lebih bayar Agustus Rp7,5 juta", D: "Bukti setor PPN pemanfaatan JKP dari luar Daerah Pabean dipersamakan dengan faktur pajak, sehingga PPN-nya dapat dikreditkan" },
        jebakan: "Pilah dulu data PPh yang tidak relevan, lalu pisahkan PK sendiri, PK pemungut, ekspor 0%, dan PM yang dilarang."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2), (4), dan (8) huruf c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A4-068", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-05",
      stem: "Vignette PT Kode Nusantara (PKP, pengembang perangkat lunak), Masa September 2026. Atas jasa konsultan TI untuk implementasi sistem kepada sebuah kementerian dengan nilai kontrak Rp300.000.000 belum termasuk PPN, PT Kode Nusantara menagih nilai kontrak ditambah PPN. Bendahara pengeluaran kementerian (pemungut PPN dan pemotong PPh) memungut PPN dan memotong PPh atas jasa tersebut sesuai ketentuan, menerbitkan bukti potong di Coretax, lalu mentransfer sisanya. Data lain bulan itu: lisensi kepada PKP swasta Rp1.500.000.000, ekspor JKP Rp1.200.000.000, PPh Pasal 21 karyawan Rp84.000.000, dan angsuran PPh Pasal 25 Rp35.000.000. Jumlah uang yang diterima PT Kode Nusantara dari bendahara kementerian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp293.340.000", B: "Rp295.500.000", C: "Rp294.000.000", D: "Rp300.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bendahara memungut PPN 11% efektif (Rp33 juta) dan, karena objeknya jasa konsultan, memotong PPh Pasal 23 sebesar 2% dari jumlah bruto tidak termasuk PPN (Rp6 juta), bukan PPh Pasal 22 yang berlaku untuk pembelian barang.",
        jejakHitung: [["Tagihan = 300.000.000 + 33.000.000", "Rp333.000.000"], ["PPN dipungut bendahara = 12% × 11/12 × 300.000.000", "Rp33.000.000"], ["PPh Pasal 23 jasa konsultan = 2% × 300.000.000", "Rp6.000.000"], ["Diterima = 333.000.000 − 33.000.000 − 6.000.000", "Rp294.000.000"], ["Lisensi, ekspor, PPh 21, PPh 25", "tidak dipakai"]],
        mengapaSalah: { A: "PPh Pasal 23 dihitung dari jumlah bruto tidak termasuk PPN, bukan dari Rp333 juta (2% × 333.000.000 = Rp6.660.000)", B: "PPh Pasal 22 1,5% berlaku untuk pembelian barang oleh bendahara; atas jasa dipotong PPh Pasal 23 2%", D: "Lupa pemotongan PPh Pasal 23 oleh bendahara" },
        jebakan: "Bendahara: barang → PPh 22 1,5%; jasa → PPh 23 2%; keduanya dari nilai tanpa PPN."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 23 ayat (1) huruf c angka 2 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 (jasa konsultan sebagai jasa lain)", berlakuSejak: null }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-069", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Sigma Rekayasa (PKP, jasa rekayasa industri yang seluruh penyerahannya terutang PPN) membandingkan dua penawaran jasa desain sistem kontrol pabrik dengan nilai sama, Rp800.000.000 belum termasuk PPN: dari konsultan dalam negeri yang berstatus PKP dan dari konsultan di Korea Selatan yang tidak memiliki BUT di Indonesia serta tidak ditunjuk sebagai pemungut PPN PMSE. Jasa akan dimanfaatkan di pabrik PT Sigma di Cikarang. Direktur keuangan menduga penawaran luar negeri lebih murah dari sisi PPN karena konsultan asing 'tidak menerbitkan faktur pajak'. Ditinjau dari karakter PPN sebagai pajak atas konsumsi dalam negeri yang menganut prinsip tempat tujuan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kedua pilihan netral dari sisi PPN: atas jasa dari Korea Selatan PT Sigma wajib menyetor sendiri PPN Rp88.000.000, dan bukti setornya dipersamakan dengan faktur pajak sehingga dapat dikreditkan sebagai Pajak Masukan, sama seperti PPN dalam faktur konsultan dalam negeri", B: "Pilihan luar negeri lebih hemat Rp88.000.000 karena jasa yang diserahkan dari luar Daerah Pabean tidak terutang PPN di Indonesia; PPN hanya dikenakan atas penyerahan oleh PKP di dalam Daerah Pabean", C: "Kedua pilihan menanggung PPN Rp88.000.000, tetapi PPN atas jasa dari Korea Selatan yang disetor sendiri tidak dapat dikreditkan karena tidak ada faktur pajak dari PKP, sehingga pilihan dalam negeri lebih hemat", D: "Kedua pilihan netral dari sisi PPN: atas jasa dari Korea Selatan PT Sigma wajib menyetor sendiri PPN Rp96.000.000 (12% × imbalan), dan bukti setornya dipersamakan dengan faktur pajak sehingga dapat dikreditkan sebagai Pajak Masukan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Prinsip tempat tujuan membuat jasa luar negeri yang dimanfaatkan di dalam Daerah Pabean tetap terutang PPN (Pasal 4 ayat (1) huruf e) yang disetor sendiri oleh pemanfaat (Pasal 3A ayat (3)); bukti setornya adalah dokumen tertentu (Pasal 13 ayat (6)) sehingga dapat dikreditkan, dan beban bersih PPN bagi PKP pemanfaat sama dengan membeli dari PKP dalam negeri.",
        jejakHitung: [["PPN = 12% × 11/12 × 800.000.000", "Rp88.000.000"], ["Konsultan dalam negeri: PM dari faktur pajak", "Rp88.000.000 dapat dikreditkan"], ["Konsultan Korea Selatan: disetor sendiri, bukti setor = dokumen tertentu", "Rp88.000.000 dapat dikreditkan"], ["Beban bersih PPN kedua pilihan bagi PKP", "Rp0 (netral)"]],
        mengapaSalah: { B: "Pemanfaatan JKP dari luar Daerah Pabean di dalam Daerah Pabean adalah objek PPN tersendiri (Pasal 4 ayat (1) huruf e)", C: "Bukti setor PPN atas pemanfaatan JKP dari luar Daerah Pabean dipersamakan dengan faktur pajak sehingga dapat dikreditkan", D: "Jasa non-mewah memakai DPP nilai lain 11/12; PPN-nya Rp88.000.000, bukan 12% × imbalan" },
        jebakan: "'Tidak ada faktur' bukan berarti tidak ada PPN atau tidak dapat dikreditkan: pemanfaat menyetor sendiri lalu mengkreditkannya."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf e dan Pasal 3A ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-070", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Cemerlang Niaga (PKP, distributor) mencatat PPN memakai akun 'PPN Keluaran' (saldo normal kredit) dan 'PPN Masukan' (saldo normal debit). Pada Masa Juli 2026 penjualan Rp600.000.000 belum termasuk PPN (bukan barang mewah) sehingga saldo PPN Keluaran Rp66.000.000, sedangkan saldo PPN Masukan yang dapat dikreditkan Rp41.800.000; tidak ada kompensasi dari masa sebelumnya. Pada 31 Juli 2026 perusahaan menutup kedua akun tersebut dan mengakui kewajiban PPN kurang bayar yang baru akan disetor pada Agustus 2026. Jurnal penutupan yang tepat pada 31 Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Debit PPN Masukan Rp41.800.000 dan Utang PPN Rp24.200.000; Kredit PPN Keluaran Rp66.000.000", B: "Debit Beban Pajak Rp24.200.000; Kredit Utang PPN Rp24.200.000", C: "Debit PPN Keluaran Rp66.000.000; Kredit PPN Masukan Rp41.800.000 dan Kas Rp24.200.000", D: "Debit PPN Keluaran Rp66.000.000; Kredit PPN Masukan Rp41.800.000 dan Utang PPN Rp24.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Akun PPN Keluaran (saldo kredit) dan PPN Masukan (saldo debit) saling dihapus pada akhir masa; selisih kreditnya diakui sebagai Utang PPN yang dilunasi paling lambat akhir bulan berikutnya.",
        jejakHitung: [["PPN Keluaran = 11% × 600.000.000 (saldo kredit)", "Rp66.000.000"], ["PPN Masukan (saldo debit)", "Rp41.800.000"], ["Kurang bayar = 66.000.000 − 41.800.000", "Rp24.200.000"], ["Jurnal 31 Juli 2026", "Dr PPN Keluaran 66.000.000; Cr PPN Masukan 41.800.000; Cr Utang PPN 24.200.000"], ["Jurnal saat setor (Agustus 2026)", "Dr Utang PPN; Cr Kas"]],
        mengapaSalah: { A: "Membalik sisi debit-kredit: PPN Keluaran bersaldo kredit sehingga ditutup dengan mendebitnya", B: "PPN bukan beban PKP; selisih PK − PM adalah utang kepada negara, bukan biaya", C: "Kas baru keluar saat penyetoran pada Agustus; pada 31 Juli yang diakui adalah utang" },
        jebakan: "PPN adalah pos neraca (titipan), bukan beban; kas baru berkurang saat disetor."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 15A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A4-071", topik: "A4.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Rantai distribusi cat tembok kemasan (BKP non-mewah, tanpa fasilitas) pada Masa Mei 2026: PT Warna Prima (PKP, pabrikan) membeli bahan baku dari PKP pemasok dengan harga Rp250.000.000, lalu menjual seluruh produksinya kepada CV Mitra Cat (PKP, distributor) Rp400.000.000; CV Mitra Cat menjual seluruhnya kepada Toko Bangunan Pak Darmo (pengusaha kecil, peredaran bruto 2025 Rp1,9 miliar, tidak memilih dikukuhkan sebagai PKP) Rp500.000.000; Toko Pak Darmo menjual seluruhnya kepada konsumen akhir Rp640.000.000 tanpa memungut PPN. Harga dari pihak PKP belum termasuk PPN dan semua faktur lengkap. Jumlah PPN yang diterima negara dari seluruh mata rantai atas cat tersebut, termasuk yang disetor melalui pemasok bahan baku, adalah ...",
      kataKualifikasi: ["termasuk"],
      opsi: { A: "Rp70.400.000", B: "Rp27.500.000", C: "Rp55.000.000", D: "Rp60.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "PPN berhenti pada PKP terakhir dalam rantai; karena Toko Pak Darmo bukan PKP, nilai tambahnya (Rp140.000.000) tidak dikenai PPN dan PPN Rp55.000.000 yang dibayarnya menjadi biaya yang tersembunyi dalam harga konsumen.",
        jejakHitung: [["Pemasok: PK = 11% × 250.000.000 (disetor berantai oleh pemasok dan hulunya)", "Rp27.500.000"], ["PT Warna Prima: 11% × 400.000.000 − 27.500.000", "Rp16.500.000"], ["CV Mitra Cat: 11% × 500.000.000 − 44.000.000", "Rp11.000.000"], ["Toko Pak Darmo (bukan PKP)", "tidak memungut, tidak mengkreditkan"], ["Jumlah = 27.500.000 + 16.500.000 + 11.000.000 (= 11% × 500.000.000)", "Rp55.000.000"]],
        mengapaSalah: { A: "Menghitung 11% × harga konsumen seolah-olah Toko Pak Darmo PKP", B: "Hanya menjumlahkan setoran PT Warna Prima dan CV Mitra Cat; setoran berantai melalui pemasok bahan baku ikut diterima negara", D: "Memakai 12% penuh atas harga jual CV Mitra Cat; barang non-mewah memakai DPP 11/12" },
        jebakan: "Total PPN negara = tarif efektif × harga jual PKP terakhir, bukan harga ke konsumen, bila pengecernya bukan PKP."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 3A ayat (1) UU PPN; PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013 (pengusaha kecil)", berlakuSejak: "2014-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-072", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "1111.induk.5",
      stem: "PT Bahari Nusantara (PKP) di Pekalongan pada Masa Agustus 2026 melakukan penyerahan berikut (belum termasuk PPN): (1) ikan segar hasil tangkapan kepada pedagang pasar Rp300.000.000, yang dibebaskan dari PPN berdasarkan PP 49/2022; (2) suku cadang kapal kepada perusahaan angkutan laut niaga nasional untuk kapalnya, yang memenuhi syarat PPN tidak dipungut berdasarkan PP 49/2022, Rp150.000.000; (3) jasa boga/katering untuk acara perusahaan lain Rp40.000.000; dan (4) es balok kepada PKP pengolah ikan Rp60.000.000. Dalam Induk SPT Masa PPN, penempatan penyerahan (1), (2), dan (3) yang tepat berturut-turut adalah baris ...",
      kataKualifikasi: [],
      opsi: { A: "penyerahan yang dibebaskan dari PPN; penyerahan yang PPN-nya tidak dipungut; penyerahan yang tidak terutang PPN", B: "penyerahan yang PPN-nya tidak dipungut; penyerahan yang dibebaskan dari PPN; penyerahan yang tidak terutang PPN", C: "penyerahan yang dibebaskan dari PPN; penyerahan yang PPN-nya tidak dipungut; penyerahan yang PPN-nya harus dipungut sendiri", D: "penyerahan yang tidak terutang PPN; penyerahan yang PPN-nya tidak dipungut; penyerahan yang tidak terutang PPN" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ikan segar tetap BKP tetapi penyerahannya dibebaskan; suku cadang kapal untuk angkutan laut niaga nasional terutang tetapi tidak dipungut; jasa boga/katering bukan JKP (Pasal 4A ayat (3)) sehingga masuk penyerahan yang tidak terutang PPN.",
        jejakHitung: [["(1) Ikan segar, faktur kode 08", "baris dibebaskan"], ["(2) Suku cadang kapal, faktur kode 07", "baris tidak dipungut"], ["(3) Jasa boga/katering, bukan JKP", "baris tidak terutang PPN"], ["(4) Es balok: 11% × 60.000.000 = Rp6.600.000", "baris dipungut sendiri (tidak ditanyakan)"]],
        mengapaSalah: { B: "Menukar fasilitas: ikan segar dibebaskan (PM tidak dapat dikreditkan), suku cadang kapal tidak dipungut (PM dapat dikreditkan)", C: "Jasa boga/katering dikeluarkan dari JKP oleh Pasal 4A ayat (3) karena menjadi objek pajak daerah", D: "Sejak UU HPP ikan segar adalah BKP yang mendapat fasilitas dibebaskan, bukan penyerahan yang tidak terutang PPN" },
        jebakan: "Dibebaskan, tidak dipungut, dan tidak terutang adalah tiga keranjang berbeda dengan akibat PM yang berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 4A ayat (3) dan Pasal 16B UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Nama baris Induk SPT Masa PPN Coretax (dibebaskan, tidak dipungut, tidak terutang) mengikuti susunan logis SPT Masa PPN dan belum dicek ke teks PER-11/PJ/2025; soal menguji substansi pengelompokan penyerahan."
    },
    {
      id: "A4-073", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-A4-06",
      stem: "Vignette PT Samudra Pangan Lestari (PKP, pengolahan hasil laut, tahun buku Januari–Desember), Masa Juli 2026: penjualan ikan segar kepada pedagang Rp1.200.000.000 (dibebaskan dari PPN berdasarkan PP 49/2022); penjualan ikan kaleng kepada distributor PKP dalam negeri Rp1.800.000.000; ekspor ikan kaleng dengan PEB Rp3.000.000.000. PM bulan itu (faktur lengkap): bahan yang langsung dipakai untuk ikan kaleng Rp176.000.000; es dan jasa pendinginan yang langsung dipakai untuk ikan segar Rp22.000.000; PM bersama (listrik, sewa gudang, jasa keamanan) Rp66.000.000; sedan untuk direktur utama Rp44.000.000. PPh Pasal 21 karyawan bulan itu Rp58.000.000. Perlakuan PPN atas penjualan ikan segar dan ekspor ikan kaleng, beserta perlakuan PM yang langsung berkaitan dengan masing-masing, yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ikan segar: faktur pajak kode 07 dan PM terkait Rp22.000.000 dapat dikreditkan; ekspor: PEB sebagai dokumen tertentu, tarif 0%, dan PM terkait dapat dikreditkan", B: "Ikan segar: faktur pajak kode 08 dan PM terkait Rp22.000.000 tidak dapat dikreditkan; ekspor: PEB sebagai dokumen tertentu, tarif 0%, dan PM terkait dapat dikreditkan", C: "Ikan segar: faktur pajak kode 08 dan PM terkait Rp22.000.000 tidak dapat dikreditkan; ekspor: PEB sebagai dokumen tertentu, tarif 0%, sehingga PM terkait juga tidak dapat dikreditkan", D: "Ikan segar: tidak perlu dibuatkan faktur pajak karena bukan objek PPN dan PM terkait Rp22.000.000 tidak dapat dikreditkan; ekspor: PEB sebagai dokumen tertentu, tarif 0%, dan PM terkait dapat dikreditkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Ikan segar adalah BKP yang penyerahannya dibebaskan (kode 08; PM terkait tidak dapat dikreditkan, Pasal 16B ayat (3)); ekspor BKP berwujud terutang dengan tarif 0% sehingga PM terkait tetap dapat dikreditkan, dan PEB berfungsi sebagai dokumen tertentu.",
        jejakHitung: [["Ikan segar: BKP dengan fasilitas dibebaskan (PP 49/2022)", "faktur kode 08; PM Rp22.000.000 tidak dikreditkan"], ["Ekspor ikan kaleng (Pasal 7 ayat (2))", "tarif 0%; PEB = dokumen tertentu"], ["PM terkait ekspor", "dapat dikreditkan (penyerahan terutang)"], ["Sedan direktur dan PPh Pasal 21", "tidak relevan untuk pertanyaan ini"]],
        mengapaSalah: { A: "Kode 07 untuk tidak dipungut/DTP; penyerahan ikan segar mendapat fasilitas dibebaskan sehingga PM-nya tidak dapat dikreditkan", C: "Tarif 0% bukan pembebasan: ekspor tetap penyerahan terutang sehingga PM-nya dapat dikreditkan", D: "Sejak UU HPP hasil laut adalah BKP; penyerahan yang dibebaskan tetap wajib dibuatkan faktur pajak dengan kode 08" },
        jebakan: "Tarif 0% (ekspor) tidak sama dengan dibebaskan: yang pertama mempertahankan hak kredit, yang kedua memutusnya."
      },
      dasarHukum: [{ pasal: "Pasal 16B ayat (1) dan (3) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }, { pasal: "Pasal 7 ayat (2) dan Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (kode transaksi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-074", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-06",
      stem: "Vignette PT Samudra Pangan Lestari (PKP, pengolahan hasil laut), Masa Juli 2026: penyerahan ikan segar yang dibebaskan Rp1.200.000.000; ikan kaleng kepada distributor PKP dalam negeri Rp1.800.000.000; ekspor ikan kaleng dengan PEB Rp3.000.000.000. PM dengan faktur lengkap: langsung untuk ikan kaleng (dalam negeri dan ekspor) Rp176.000.000; langsung untuk ikan segar Rp22.000.000; PM bersama yang tidak dapat diidentifikasi Rp66.000.000; sedan direktur utama Rp44.000.000. Gunakan pedoman pengkreditan proporsional berdasarkan perbandingan penyerahan yang terutang PPN terhadap seluruh penyerahan pada Masa Juli 2026. PM yang dapat dikreditkan pada Masa Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp195.800.000", B: "Rp242.000.000", C: "Rp250.800.000", D: "Rp228.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PM langsung untuk penyerahan terutang dikreditkan penuh, PM langsung untuk penyerahan dibebaskan tidak dikreditkan, dan PM bersama dikreditkan sebesar proporsi penyerahan terutang (termasuk ekspor bertarif 0%) terhadap seluruh penyerahan.",
        jejakHitung: [["Penyerahan terutang = 1.800.000.000 + 3.000.000.000 (ekspor tetap terutang, tarif 0%)", "Rp4.800.000.000"], ["Seluruh penyerahan = 4.800.000.000 + 1.200.000.000", "Rp6.000.000.000"], ["Proporsi = 4.800.000.000 ÷ 6.000.000.000", "80%"], ["PM bersama dapat dikreditkan = 80% × 66.000.000", "Rp52.800.000"], ["PM langsung ikan kaleng", "Rp176.000.000"], ["PM ikan segar dan sedan", "tidak dapat dikreditkan"], ["PM dapat dikreditkan = 176.000.000 + 52.800.000", "Rp228.800.000"]],
        mengapaSalah: { A: "Mengeluarkan ekspor dari pembilang sehingga proporsi 30% (Rp19.800.000), padahal ekspor adalah penyerahan terutang bertarif 0%", B: "Mengkreditkan seluruh PM bersama tanpa pedoman proporsional Pasal 9 ayat (6)", C: "Ikut mengkreditkan PM Rp22.000.000 yang langsung terkait ikan segar yang dibebaskan" },
        jebakan: "Ekspor masuk pembilang proporsi karena terutang PPN (tarif 0%), bukan dibebaskan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (5), (6), dan (8) huruf c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A4-075", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-06",
      stem: "Vignette PT Samudra Pangan Lestari (PKP, pengolahan hasil laut, tahun buku Januari–Desember), Masa Juli 2026: ikan segar yang dibebaskan Rp1.200.000.000; ikan kaleng kepada distributor PKP dalam negeri Rp1.800.000.000; ekspor ikan kaleng dengan PEB Rp3.000.000.000; PM langsung untuk ikan kaleng Rp176.000.000; PM langsung untuk ikan segar Rp22.000.000; PM bersama Rp66.000.000 yang dikreditkan dengan pedoman proporsional penyerahan Masa Juli; PPh Pasal 21 karyawan Rp58.000.000; tidak ada kompensasi dari masa sebelumnya. Semua nilai belum termasuk PPN. Posisi SPT Masa PPN Juli 2026 dan perlakuan yang dapat dipilih perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih bayar Rp30.800.000; dapat diajukan pengembalian pada Masa Juli 2026 karena perusahaan melakukan ekspor BKP berwujud, atau dikompensasikan ke Masa Agustus 2026", B: "Lebih bayar Rp44.000.000; dapat diajukan pengembalian pada Masa Juli 2026 karena perusahaan melakukan ekspor BKP berwujud, atau dikompensasikan ke Masa Agustus 2026", C: "Lebih bayar Rp30.800.000; hanya dapat dikompensasikan, dan pengembalian baru dapat diajukan pada akhir tahun buku (Masa Desember 2026)", D: "Kurang bayar Rp2.200.000 yang harus disetor paling lambat 31 Agustus 2026 sebelum SPT disampaikan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PK yang dipungut sendiri hanya berasal dari ikan kaleng dalam negeri; setelah PM proporsional dihitung timbul lebih bayar, dan karena perusahaan mengekspor BKP berwujud, lebih bayar itu boleh dimintakan kembali pada masa itu juga.",
        jejakHitung: [["PK dipungut sendiri = 11% × 1.800.000.000", "Rp198.000.000"], ["Ekspor (tarif 0%)", "Rp0"], ["PM bersama = 80% × 66.000.000 (proporsi 4,8 M ÷ 6 M)", "Rp52.800.000"], ["PM dapat dikreditkan = 176.000.000 + 52.800.000", "Rp228.800.000"], ["PK − PM = 198.000.000 − 228.800.000", "lebih bayar Rp30.800.000"], ["Eksportir BKP berwujud (Pasal 9 ayat (4b))", "boleh restitusi setiap masa"], ["PPh Pasal 21", "tidak dipakai"]],
        mengapaSalah: { B: "Mengkreditkan seluruh PM bersama Rp66.000.000 tanpa pedoman proporsional", C: "Eksportir BKP berwujud termasuk PKP yang dapat mengajukan pengembalian setiap Masa Pajak (Pasal 9 ayat (4b))", D: "Mengeluarkan ekspor dari pembilang proporsi sehingga PM bersama hanya 30% (PM Rp195.800.000)" },
        jebakan: "Lebih bayar eksportir tidak perlu menunggu akhir tahun buku."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2), (4), (4b), dan (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 7 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A4-076", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013 (parafrase setia): Pengusaha kecil adalah pengusaha yang selama satu tahun buku melakukan penyerahan BKP dan/atau JKP dengan jumlah peredaran bruto dan/atau penerimaan bruto tidak lebih dari Rp4.800.000.000. Pengusaha yang sampai dengan suatu bulan dalam tahun buku jumlah peredaran bruto dan/atau penerimaan brutonya melebihi Rp4.800.000.000 wajib melaporkan usahanya untuk dikukuhkan sebagai Pengusaha Kena Pajak paling lambat akhir bulan berikutnya.",
      stem: "PT Kriya Persada (didirikan dan terdaftar pada 2021, tahun buku Januari–Desember) tidak lagi memenuhi syarat PPh final UMKM sejak Tahun Pajak 2024 karena jangka waktu 3 tahun bagi perseroan terbatas telah berakhir, sehingga pada 2026 membayar PPh dengan tarif umum. Perusahaan belum PKP. Peredaran brutonya atas penyerahan BKP pada 2026: Januari–Juni Rp4.150.000.000, Juli Rp620.000.000, dan Agustus Rp540.000.000. Pada Juli 2026 perusahaan juga menerima bunga deposito Rp35.000.000 yang telah dipotong PPh final. Berdasarkan kutipan tersebut, bulan terlampauinya batas pengusaha kecil dan batas akhir melaporkan usaha untuk dikukuhkan sebagai PKP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Agustus 2026; paling lambat 31 Desember 2026", B: "Juli 2026; paling lambat 31 Agustus 2026", C: "Agustus 2026; paling lambat 30 September 2026", D: "Agustus 2026; paling lambat 15 September 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Batas dihitung hanya dari penyerahan BKP/JKP sehingga terlampaui pada Agustus 2026; karena PT Kriya Persada tidak lagi dikenai PPh final UMKM, berlaku tenggat umum akhir bulan berikutnya, yaitu 30 September 2026.",
        jejakHitung: [["Kumulatif s.d. Juli = 4.150.000.000 + 620.000.000", "Rp4.770.000.000 (belum melebihi)"], ["Bunga deposito Rp35.000.000", "bukan penyerahan BKP/JKP, tidak dihitung"], ["Kumulatif s.d. Agustus = 4.770.000.000 + 540.000.000", "Rp5.310.000.000 > Rp4,8 miliar"], ["Batas lapor: akhir bulan berikutnya", "30 September 2026"]],
        mengapaSalah: { A: "Tenggat akhir tahun buku (PMK 164/2023) khusus bagi WP yang dikenai PPh final UMKM; PT Kriya Persada sudah memakai tarif umum", B: "Memasukkan bunga deposito ke peredaran bruto sehingga batas seolah terlampaui pada Juli (Rp4.805.000.000)", D: "Tanggal 15 adalah batas setor pajak masa, bukan batas lapor pengukuhan" },
        jebakan: "Tentukan dulu rezim PPh-nya: WP PPh final UMKM → akhir tahun buku; selain itu → akhir bulan berikutnya."
      },
      dasarHukum: [{ pasal: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 3A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 164/2023 Pasal 17 (pembanding bagi WP PPh final UMKM)", berlakuSejak: null }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Tenggat umum akhir bulan berikutnya bersumber dari PMK 68/2010 s.t.d.d. PMK 197/2013 yang menurut riset belum dicabut PMK 81/2024; letak pasalnya dan cakupan PMK 164/2023 (khusus WP PPh final UMKM) belum dicek ke teks."
    },
    {
      id: "A4-077", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "CV Rupa Kayu (pengusaha kecil, peredaran bruto 2025 Rp2,6 miliar, belum PKP) menerima pesanan meja kantor Rp150.000.000 dari PT Graha Sentosa (PKP). Bagian pengadaan PT Graha Sentosa meminta faktur pajak agar PPN-nya dapat dikreditkan dan bersedia membayar Rp166.500.000 'sudah termasuk PPN'. CV Rupa Kayu juga menjual meja secara eceran kepada konsumen rumah tangga. Pernyataan yang paling tepat mengenai situasi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "CV Rupa Kayu boleh memungut PPN Rp16.500.000 dan membuat faktur pajak tanpa dikukuhkan karena peredaran brutonya di bawah Rp4,8 miliar, asalkan PPN tersebut disetor paling lambat akhir bulan berikutnya", B: "CV Rupa Kayu dapat memilih dikukuhkan sebagai PKP, tetapi sejak dikukuhkan ia hanya wajib memungut PPN atas penyerahan kepada pembeli PKP yang meminta faktur pajak, sedangkan penjualan eceran kepada konsumen rumah tangga tetap tanpa PPN", C: "CV Rupa Kayu dapat memilih dikukuhkan sebagai PKP, tetapi pilihan itu baru berlaku mulai tahun buku berikutnya sehingga pesanan pada 2026 ini tetap tidak dapat diberi faktur pajak", D: "Selama belum dikukuhkan, CV Rupa Kayu tidak boleh memungut PPN maupun membuat faktur pajak; bila memilih dikukuhkan sebagai PKP, sejak itu ia wajib memungut PPN atas seluruh penyerahan BKP/JKP-nya, termasuk penjualan eceran kepada konsumen rumah tangga" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Hanya PKP yang boleh memungut PPN dan membuat faktur pajak; pengusaha kecil boleh memilih dikukuhkan, dan setelah dikukuhkan ia terikat seluruh kewajiban PKP atas semua penyerahannya.",
        jejakHitung: [],
        mengapaSalah: { A: "Faktur pajak hanya boleh dibuat oleh PKP (Pasal 13 ayat (1)); pengusaha yang belum dikukuhkan tidak berhak memungut PPN", B: "Pengusaha kecil yang memilih dikukuhkan wajib melaksanakan seluruh ketentuan UU PPN atas semua penyerahannya (Pasal 3A ayat (2)), bukan hanya kepada pembeli tertentu", C: "Status PKP berlaku sejak dikukuhkan; tidak ada ketentuan yang menunda berlakunya ke tahun buku berikutnya" },
        jebakan: "Memilih menjadi PKP berarti paket lengkap: memungut atas semua penyerahan, membuat faktur, dan menyampaikan SPT Masa PPN."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-078", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Rahayu (orang pribadi, toko perlengkapan rumah tangga UD Sumber Rejeki, tahun buku Januari–Desember) membayar PPh final UMKM 0,5% berdasarkan PP 55/2022 s.t.d.d. PP 20/2026 dan telah memilih dikukuhkan sebagai PKP sejak Januari 2026. Peredaran bruto kumulatif Januari–Juli 2026 Rp1.400.000.000. Pada Masa Agustus 2026: penjualan BKP non-mewah Rp240.000.000 belum termasuk PPN (seluruhnya dibuatkan faktur); PM yang dapat dikreditkan Rp18.700.000; gaji 4 karyawan Rp16.000.000; dan sewa toko Rp10.000.000. Jumlah PPh final UMKM dan PPN yang harus disetor untuk Masa Agustus 2026 beserta batas setornya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh final Rp1.332.000 paling lambat 15 September 2026; PPN Rp7.700.000 paling lambat 30 September 2026", B: "PPh final Rp1.200.000 paling lambat 15 September 2026; PPN Rp7.700.000 paling lambat 30 September 2026", C: "PPh final Rp1.200.000 dan PPN Rp7.700.000, keduanya paling lambat 15 September 2026", D: "PPh final Rp1.200.000 paling lambat 15 September 2026; PPN Rp26.400.000 paling lambat 30 September 2026 karena WP PPh final UMKM tidak dapat mengkreditkan PM" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "PPh final UMKM dihitung dari peredaran bruto tanpa PPN dan disetor paling lambat tanggal 15; PPN dihitung dengan mekanisme PK − PM seperti PKP lain dan disetor paling lambat akhir bulan berikutnya sebelum SPT Masa PPN disampaikan.",
        jejakHitung: [["Peredaran bruto kumulatif sudah melampaui Rp500.000.000", "seluruh omzet Agustus dikenai 0,5%"], ["PPh final = 0,5% × 240.000.000 (tanpa PPN)", "Rp1.200.000"], ["Batas setor PPh final Masa Agustus", "15 September 2026"], ["PK = 11% × 240.000.000", "Rp26.400.000"], ["PPN kurang bayar = 26.400.000 − 18.700.000", "Rp7.700.000"], ["Batas setor PPN (Pasal 15A)", "30 September 2026, sebelum SPT disampaikan"], ["Gaji dan sewa toko", "tidak dipakai"]],
        mengapaSalah: { A: "PPN yang dipungut bukan bagian peredaran bruto; 0,5% × Rp266.400.000 keliru", C: "Batas setor PPN mengikuti Pasal 15A (akhir bulan berikutnya), berbeda dari pajak masa lain yang tanggal 15", D: "Rezim PPh final hanya mengatur PPh; untuk PPN Ibu Rahayu adalah PKP biasa yang berhak mengkreditkan PM" },
        jebakan: "Dua rezim dalam satu masa: PPh final (bruto tanpa PPN, tanggal 15) dan PPN (PK − PM, akhir bulan berikutnya)."
      },
      dasarHukum: [{ pasal: "PP 55/2022 Pasal 56–57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "Pasal 15A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-079", topik: "A4.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "CV Dapur Nusantara (didirikan 2018, tahun buku Januari–Desember, membayar PPh dengan tarif umum, belum PKP) menjalankan beberapa lini usaha. Data Januari–September 2026: (1) penjualan bumbu kemasan kepada toko dan pasar swalayan Rp3.300.000.000; (2) jasa boga/katering untuk acara perusahaan Rp1.250.000.000; (3) penjualan makanan dan minuman di restoran miliknya Rp980.000.000; (4) penjualan bumbu kemasan kepada dinas pemerintah yang pembayarannya melalui bendahara Rp420.000.000; dan (5) bunga jasa giro Rp12.000.000. Pada Oktober 2026 penjualan bumbu kemasan kepada toko Rp1.150.000.000. Jumlah peredaran bruto yang diperhitungkan untuk batas pengusaha kecil PPN sampai dengan Oktober 2026 dan kesimpulannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.870.000.000; batas Rp4,8 miliar terlampaui pada Oktober 2026 sehingga CV wajib melaporkan usahanya untuk dikukuhkan sebagai PKP", B: "Rp7.112.000.000; batas Rp4,8 miliar sudah terlampaui sebelum Oktober 2026 karena seluruh penerimaan usaha diperhitungkan", C: "Rp4.450.000.000; batas Rp4,8 miliar belum terlampaui karena penjualan yang dibayar melalui bendahara pemerintah tidak diperhitungkan", D: "Rp6.120.000.000; batas Rp4,8 miliar sudah terlampaui sebelum Oktober 2026 karena jasa boga/katering termasuk penyerahan JKP" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya penyerahan BKP/JKP yang dihitung, termasuk yang dibayar melalui pemungut; jasa boga/katering dan makanan di restoran (objek pajak daerah) serta bunga giro dikeluarkan, sehingga batas terlampaui pada Oktober 2026.",
        jejakHitung: [["(1) Bumbu kemasan ke toko (BKP)", "Rp3.300.000.000"], ["(4) Bumbu kemasan ke dinas (BKP; pembelinya pemungut)", "Rp420.000.000"], ["(2) Jasa boga/katering dan (3) makanan di restoran", "bukan JKP/BKP (Pasal 4A), tidak dihitung"], ["(5) Bunga jasa giro", "bukan penyerahan, tidak dihitung"], ["Kumulatif s.d. September", "Rp3.720.000.000"], ["Ditambah Oktober Rp1.150.000.000", "Rp4.870.000.000 > Rp4,8 miliar"]],
        mengapaSalah: { B: "Ikut menghitung katering, restoran, dan bunga giro yang bukan penyerahan BKP/JKP", C: "Penyerahan kepada pemungut tetap penyerahan BKP; yang berbeda hanya pihak yang memungut PPN-nya", D: "Jasa boga/katering dikeluarkan dari JKP oleh Pasal 4A ayat (3) UU PPN" },
        jebakan: "Ambang PKP memakai omzet BKP/JKP saja, bukan seluruh penerimaan usaha."
      },
      dasarHukum: [{ pasal: "Pasal 3A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 4A ayat (2) dan (3) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-080", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Menara Prima Properti (PKP) menjual satu unit ruang kantor strata (bukan hunian dan bukan barang mewah) kepada PT Arta Konsultan dengan harga Rp4.800.000.000 belum termasuk PPN. Kronologi: tanda jadi Rp100.000.000 diterima 12 Mei 2026; uang muka Rp860.000.000 diterima 10 Juni 2026; PPJB ditandatangani 15 Juni 2026; cicilan Rp400.000.000 diterima 10 Juli 2026; serah terima kunci dan berita acara penguasaan unit 28 Juli 2026; AJB ditandatangani di hadapan PPAT pada 20 Agustus 2026 bersamaan dengan pelunasan sisa harga. Semua pembayaran belum termasuk PPN. PPN yang terutang pada Masa Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp44.000.000", B: "Rp528.000.000", C: "Rp460.800.000", D: "Rp422.400.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Pembayaran sebelum penyerahan terutang saat dibayar; penyerahan BKP tidak bergerak terjadi saat hak menguasai diserahkan secara hukum atau secara nyata, mana yang lebih dulu, yaitu serah terima 28 Juli 2026, sehingga seluruh sisa harga terutang pada Masa Juli.",
        jejakHitung: [["Pembayaran sebelum penyerahan (terutang saat dibayar)", "Mei Rp100.000.000; Juni Rp860.000.000; Juli Rp400.000.000"], ["Penyerahan nyata (serah terima kunci) mendahului AJB", "28 Juli 2026"], ["Sisa harga terutang saat penyerahan = 4.800.000.000 − 1.360.000.000", "Rp3.440.000.000"], ["Dasar Masa Juli = 400.000.000 + 3.440.000.000", "Rp3.840.000.000"], ["PPN = 11% × 3.840.000.000", "Rp422.400.000"]],
        mengapaSalah: { A: "Menunggu AJB (penyerahan hukum), padahal penyerahan nyata 28 Juli 2026 lebih dulu; hanya cicilan Juli yang dihitung", B: "Mengenakan PPN atas seluruh harga pada Juli, padahal tanda jadi dan uang muka sudah terutang pada Mei dan Juni", C: "Memakai 12% atas harga penuh; ruang kantor non-mewah memakai DPP 11/12" },
        jebakan: "BKP tidak bergerak: pakai yang lebih dulu antara penyerahan nyata dan penyerahan hukum; uang yang diterima sebelumnya sudah dipajaki."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 (saat penyerahan BKP tidak bergerak)", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-081", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Sumber Elektrik Nusantara (PKP) berkantor pusat di Jakarta dan memiliki tempat kegiatan usaha di Surabaya dan Makassar yang masing-masing menjual barang kepada pelanggan setempat dan membeli persediaan sendiri. Sejak Januari 2026 perusahaan telah menyampaikan pemberitahuan pemusatan tempat PPN terutang di kantor pusat melalui Coretax. Pernyataan yang paling tepat mengenai SPT Masa PPN Agustus 2026 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Setiap tempat kegiatan usaha tetap menyampaikan SPT Masa PPN sendiri, sedangkan penyetoran kurang bayar seluruh tempat dipusatkan di kantor pusat", B: "Seluruh penyerahan dilaporkan dalam satu SPT Masa PPN kantor pusat, tetapi PM tempat kegiatan usaha Surabaya dan Makassar hanya dapat dikreditkan terhadap PK tempat masing-masing", C: "Seluruh penyerahan dan perolehan Jakarta, Surabaya, dan Makassar dilaporkan dalam satu SPT Masa PPN kantor pusat, dan PM dari tempat mana pun dikreditkan terhadap PK seluruh tempat", D: "Pemusatan baru berlaku setelah Kepala Kantor Wilayah DJP menerbitkan keputusan atas permohonan tertulis, sehingga sampai keputusan terbit setiap tempat menyampaikan SPT sendiri" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Dengan pemusatan, kantor pusat menjadi satu-satunya tempat terutang: satu SPT Masa PPN memuat penyerahan dan perolehan semua tempat kegiatan usaha, dan PM dikreditkan secara gabungan terhadap PK seluruh tempat.",
        jejakHitung: [],
        mengapaSalah: { A: "Pemusatan menyatukan pelaporan dan penghitungan, bukan hanya penyetoran", B: "Setelah pemusatan, PK dan PM seluruh tempat dihitung dalam satu SPT sehingga dikreditkan bersama", D: "Sejak 2025 pemusatan cukup dengan pemberitahuan melalui Coretax, bukan permohonan penetapan" },
        jebakan: "Pemusatan berarti satu tempat terutang, satu SPT, dan satu perhitungan PK − PM."
      },
      dasarHukum: [{ pasal: "Pasal 12 UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 (pemberitahuan pemusatan melalui Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-082", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 13 ayat (1a) UU PPN (parafrase setia): Faktur Pajak harus dibuat pada saat penyerahan BKP dan/atau JKP; saat penerimaan pembayaran dalam hal penerimaan pembayaran terjadi sebelum penyerahan; saat penerimaan pembayaran termin dalam hal penyerahan sebagian tahap pekerjaan; atau saat lain yang diatur dengan atau berdasarkan Peraturan Menteri Keuangan.",
      stem: "PT Rekayasa Andalan (PKP) mengerjakan jasa pemasangan instalasi listrik gedung (JKP, tidak mendapat fasilitas) untuk PT Graha Logistik dengan nilai kontrak Rp1.500.000.000 belum termasuk PPN, dibayar per termin sesuai kemajuan pekerjaan: termin I 30% ditagih dan diterima 14 Juli 2026 atas progres 30%; termin II 40% ditagih dan diterima 9 September 2026 atas progres 70%; termin III 30% ditagih dan diterima 12 November 2026 setelah serah terima akhir 2 November 2026. Berdasarkan kutipan tersebut, tanggal faktur pajak termin II, PPN yang tercantum di dalamnya, dan batas unggahnya ke Coretax adalah ...",
      kataKualifikasi: [],
      opsi: { A: "9 September 2026; Rp66.000.000; paling lambat 15 Oktober 2026", B: "2 November 2026 (serah terima akhir) untuk seluruh nilai kontrak; Rp165.000.000; paling lambat 20 Desember 2026", C: "9 September 2026; Rp72.000.000; paling lambat 20 Oktober 2026", D: "9 September 2026; Rp66.000.000; paling lambat 20 Oktober 2026" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Untuk penyerahan sebagian tahap pekerjaan, faktur dibuat saat setiap pembayaran termin diterima; termin II Rp600.000.000 menghasilkan PPN Rp66.000.000 yang wajib diunggah dan disetujui paling lambat tanggal 20 bulan berikutnya.",
        jejakHitung: [["Nilai termin II = 40% × 1.500.000.000", "Rp600.000.000"], ["PPN = 12% × 11/12 × 600.000.000", "Rp66.000.000"], ["Tanggal faktur = saat penerimaan pembayaran termin", "9 September 2026"], ["Batas unggah (PER-11/PJ/2025)", "20 Oktober 2026"]],
        mengapaSalah: { A: "Batas unggah tanggal 15 adalah ketentuan e-Faktur lama; sejak 22 Mei 2025 tanggal 20", B: "Faktur termin dibuat pada setiap penerimaan termin, bukan sekaligus saat serah terima akhir", C: "Jasa non-mewah memakai DPP 11/12 sehingga PPN efektif 11%, bukan 12%" },
        jebakan: "Setiap termin satu faktur pada tanggal terminnya; tanggal 20 untuk unggah, bukan tanggal 15."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-083", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Inti Mesin Nusantara (PKP) pada 7 Oktober 2026 menyerahkan mesin pengemas (bukan barang mewah) kepada PT Pangan Jaya (PKP) dengan harga jual USD25.000 belum termasuk PPN, dan faktur pajak dibuat pada tanggal yang sama dengan nilai dalam dolar AS. Kurs yang tersedia: kurs yang ditetapkan Menteri Keuangan untuk minggu itu Rp16.400 per USD; kurs tengah Bank Indonesia 7 Oktober 2026 Rp16.450 per USD; kurs jual bank tempat pembayaran Rp16.520 per USD; pembayaran diterima 6 November 2026 ketika kurs Menteri Keuangan Rp16.300 per USD. Jumlah PPN dalam rupiah yang tercantum dalam faktur pajak dan dilaporkan dalam SPT Masa PPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp45.237.500", B: "Rp45.100.000", C: "Rp44.825.000", D: "Rp49.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Nilai PPN dalam faktur valuta asing dikonversi ke rupiah dengan kurs KMK (kurs yang ditetapkan Menteri Keuangan) yang berlaku saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21); di soal ini saat itu sama dengan tanggal penyerahan 7 Oktober 2026. Yang dipakai bukan kurs tengah Bank Indonesia, kurs bank, atau kurs saat pembayaran.",
        jejakHitung: [["Kurs yang dipakai: kurs KMK saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21) = tanggal penyerahan 7 Oktober 2026", "Rp16.400"], ["Harga jual = 25.000 × 16.400", "Rp410.000.000"], ["PPN = 12% × 11/12 × 410.000.000", "Rp45.100.000"]],
        mengapaSalah: { A: "Memakai kurs tengah Bank Indonesia (16.450); untuk pelunasan PPN dipakai kurs Menteri Keuangan", C: "Memakai kurs saat pembayaran; PPN terutang dan faktur pajak seharusnya dibuat saat penyerahan 7 Oktober 2026", D: "Memakai 12% atas harga penuh; mesin non-mewah memakai DPP 11/12" },
        jebakan: "Kurs KMK saat faktur pajak seharusnya dibuat (di soal ini tanggal penyerahan 7 Oktober 2026), bukan kurs tengah BI, kurs bank, atau kurs pelunasan."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 11 ayat (1) dan Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)", berlakuSejak: null }, { pasal: "PER-11/PJ/2025 (pengisian faktur pajak)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110, verifikasi: "◐",
      peringatan: "Kaidah kurs bersumber dari PP 44/2022 Pasal 21: PPN dalam valuta asing dikonversi dengan kurs KMK yang berlaku saat faktur pajak seharusnya dibuat; di soal ini saat itu sama dengan tanggal penyerahan 7 Oktober 2026. Rincian teknis pengisian nilai valuta asing dan rupiah pada faktur pajak Coretax (PER-11/PJ/2025) belum dicek ke teks."
    },
    {
      id: "A4-084", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Staf baru PT Agro Benih Unggul (PKP) menyusun prosedur internal pembuatan faktur pajak di Coretax. Pada Masa Oktober 2026 perusahaan melakukan tiga penyerahan: benih padi bersertifikat kepada kelompok tani yang dibebaskan dari PPN berdasarkan PP 49/2022; pupuk kepada perusahaan perkebunan berstatus PKP yang atas penyerahannya terutang PPN; dan ekspor benih sayuran dengan PEB. Pernyataan yang paling tepat untuk prosedur tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Faktur pajak dibuat untuk penyerahan pupuk dan untuk penyerahan benih padi dengan kode 08; ekspor benih sayuran cukup didokumentasikan dengan PEB sebagai dokumen tertentu yang kedudukannya dipersamakan dengan faktur pajak", B: "Faktur pajak hanya dibuat untuk penyerahan pupuk; penyerahan benih padi yang dibebaskan tidak memerlukan faktur karena tidak ada PPN yang dipungut, dan ekspor cukup didokumentasikan dengan PEB", C: "Faktur pajak dibuat untuk penyerahan pupuk dan untuk penyerahan benih padi dengan kode 07; ekspor benih sayuran cukup didokumentasikan dengan PEB sebagai dokumen tertentu yang kedudukannya dipersamakan dengan faktur pajak", D: "Faktur pajak dibuat untuk ketiga penyerahan, termasuk faktur kode 07 atas ekspor, karena PEB hanya dokumen kepabeanan yang tidak dapat menggantikan faktur pajak" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PKP wajib membuat faktur untuk setiap penyerahan BKP/JKP, termasuk penyerahan yang dibebaskan (kode 08); untuk ekspor BKP berwujud, PEB adalah dokumen tertentu yang dipersamakan dengan faktur pajak.",
        jejakHitung: [],
        mengapaSalah: { B: "Kewajiban faktur melekat pada penyerahan, bukan pada ada-tidaknya PPN yang dipungut; penyerahan dibebaskan memakai kode 08", C: "Kode 07 untuk tidak dipungut/DTP; pembebasan memakai kode 08", D: "PEB termasuk dokumen tertentu yang dipersamakan dengan faktur pajak (Pasal 13 ayat (6))" },
        jebakan: "Penyerahan dibebaskan tetap difaktur (kode 08); ekspor barang cukup dengan PEB."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) dan (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 49/2022", berlakuSejak: "2022-12-12" }, { pasal: "PER-11/PJ/2025 (kode transaksi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-085", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Prestige Auto Indonesia (PKP, importir umum pemilik API) mengimpor 2 unit mobil penumpang utuh (CBU) untuk dijual kembali. Data PIB per unit: nilai pabean (CIF) Rp1.200.000.000 dan bea masuk Rp600.000.000; mobil tersebut objek PPnBM dengan tarif 40% dan dasar pengenaan sebesar nilai impor. Perusahaan juga membayar jasa bongkar muat di pelabuhan Rp15.000.000 per unit kepada PKP dan PPh Pasal 22 impor yang dipungut DJBC. Jumlah PPN dan PPnBM impor yang dipungut DJBC untuk 2 unit tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.836.000.000", B: "Rp1.392.000.000", C: "Rp1.872.000.000", D: "Rp1.887.600.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Dasar pengenaan impor adalah nilai impor (CIF ditambah bea masuk); karena mobil objek PPnBM, PPN dihitung 12% × nilai impor penuh tanpa faktor 11/12, dan PPnBM 40% dihitung dari dasar yang sama.",
        jejakHitung: [["Nilai impor per unit = 1.200.000.000 + 600.000.000", "Rp1.800.000.000"], ["Nilai impor 2 unit", "Rp3.600.000.000"], ["PPN impor barang mewah = 12% × 3.600.000.000", "Rp432.000.000"], ["PPnBM = 40% × 3.600.000.000", "Rp1.440.000.000"], ["Jumlah PPN dan PPnBM", "Rp1.872.000.000"], ["Bongkar muat dan PPh Pasal 22 impor", "bukan unsur PPN/PPnBM impor"]],
        mengapaSalah: { A: "Memakai DPP 11/12 untuk PPN (Rp396.000.000) yang hanya berlaku bagi barang tidak mewah", B: "Menghitung PPnBM dari CIF saja (40% × Rp2.400.000.000) tanpa bea masuk", D: "Memasukkan jasa bongkar muat ke nilai impor; nilai impor hanya nilai pabean ditambah pungutan kepabeanan" },
        jebakan: "Barang mewah impor: dasar = CIF + bea masuk, PPN 12% penuh, PPnBM dari dasar yang sama."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b dan Pasal 8A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 2", berlakuSejak: "2025-01-01" }, { pasal: "PP 73/2019 s.t.d.d. PP 74/2021 (PPnBM kendaraan bermotor)", berlakuSejak: "2021-10-16" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-086", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Pada Masa September 2026: (1) CV Proteksi Mandiri (PKP, agen asuransi) menerima komisi dari perusahaan asuransi Rp180.000.000; (2) PT Broker Amanah (PKP, pialang asuransi) menerima komisi atas jasa keperantaraan Rp250.000.000. Keduanya memungut PPN dengan besaran tertentu sesuai ketentuan bagi jasanya. Selain itu CV Proteksi Mandiri membayar PPN Rp3.300.000 atas sewa kantor dengan faktur lengkap. Jumlah PPN yang harus disetor CV Proteksi Mandiri dan PT Broker Amanah untuk Masa September 2026 berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp19.800.000 dan Rp27.500.000", B: "Rp1.980.000 dan Rp2.750.000", C: "Rp0 (lebih bayar Rp1.320.000) dan Rp5.500.000", D: "Rp1.980.000 dan Rp5.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Agen asuransi memakai besaran tertentu efektif 1,1% dan pialang asuransi 2,2% dari komisi; PM yang berkaitan dengan penyerahan yang memakai besaran tertentu tidak dapat dikreditkan.",
        jejakHitung: [["Agen asuransi = 10% × 11/12 × 12% × 180.000.000 (efektif 1,1%)", "Rp1.980.000"], ["Pialang asuransi = 20% × 11/12 × 12% × 250.000.000 (efektif 2,2%)", "Rp5.500.000"], ["PM sewa kantor CV Proteksi Mandiri", "tidak dapat dikreditkan (besaran tertentu)"]],
        mengapaSalah: { A: "Memakai tarif efektif umum 11% atas komisi", B: "Menyamakan pialang dengan agen (1,1%)", C: "Mengkreditkan PM, padahal PKP yang memakai besaran tertentu tidak mengkreditkan PM" },
        jebakan: "Besaran tertentu = persentase kecil × nilai tagihan, tanpa kredit PM."
      },
      dasarHukum: [{ pasal: "Pasal 9A UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 67/PMK.03/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04" }],
      anggaranDetik: 110, verifikasi: "◐",
      peringatan: "Besaran efektif agen asuransi 1,1% dan pialang asuransi 2,2% mengikuti ringkasan sekunder PMK 67/2022 yang disesuaikan PMK 11/2025 (beban efektif tetap); angka per pasal belum dicek ke teks, dan PMK 53/2025 yang mengubah PMK 11/2025 belum dibaca."
    },
    {
      id: "A4-087", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Karya Otomotif Indonesia (PKP, pabrikan kendaraan) pada Masa Oktober 2026 menjual satu unit mobil penumpang kepada PT Dealer Mandiri (PKP). Mobil tersebut objek PPnBM dengan tarif 15% dan dasar pengenaan sebesar harga jual. Kontrak menyebut harga Rp762.000.000 'sudah termasuk PPN dan PPnBM' tanpa potongan harga. Ongkos kirim ke dealer ditanggung sendiri oleh pabrikan dan tidak ditagihkan. Besarnya PPN dan PPnBM yang harus dicantumkan dalam faktur pajak berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPN Rp66.000.000 dan PPnBM Rp90.000.000", B: "PPN Rp72.000.000 dan PPnBM Rp90.000.000", C: "PPN Rp91.440.000 dan PPnBM Rp114.300.000", D: "PPN Rp72.000.000 dan PPnBM Rp100.800.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk barang mewah, PPN (12% × harga jual penuh) dan PPnBM dihitung dari DPP yang sama, sehingga harga yang sudah termasuk keduanya dibagi 1,27 untuk memperoleh DPP Rp600.000.000.",
        jejakHitung: [["Harga termasuk pajak = DPP × (1 + 12% + 15%)", "DPP × 127%"], ["DPP = 762.000.000 ÷ 1,27", "Rp600.000.000"], ["PPN barang mewah = 12% × 600.000.000", "Rp72.000.000"], ["PPnBM = 15% × 600.000.000", "Rp90.000.000"], ["Cek: 600.000.000 + 72.000.000 + 90.000.000", "Rp762.000.000"]],
        mengapaSalah: { A: "Memakai DPP 11/12 untuk PPN barang mewah; sejak 1 Februari 2025 PPN barang mewah 12% × harga jual penuh", C: "Menganggap Rp762.000.000 sebagai DPP padahal sudah termasuk PPN dan PPnBM", D: "Menghitung PPnBM dari DPP ditambah PPN (15% × Rp672.000.000); PPnBM tidak dikenakan atas PPN" },
        jebakan: "Harga 'termasuk PPN dan PPnBM' dibagi (1 + tarif PPN + tarif PPnBM)."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf a dan Pasal 8A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 2", berlakuSejak: "2025-02-01" }, { pasal: "PP 73/2019 s.t.d.d. PP 74/2021", berlakuSejak: "2021-10-16" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-088", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Dalam pelatihan internal, peserta diminta menjelaskan cara pemerintah menerapkan tarif PPN 12% sejak 1 Januari 2025 tanpa menaikkan beban PPN atas sebagian besar barang dan jasa. Contoh yang dipakai: PT Lestari Furnindo (PKP) menjual lemari kantor (bukan barang mewah) seharga Rp50.000.000 belum termasuk PPN kepada PT Bina Usaha (PKP) pada Oktober 2026. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tarif tetap 12%, tetapi untuk barang/jasa yang tidak tergolong mewah DPP-nya berupa nilai lain 11/12 dari harga jual (PMK 131/2024), sehingga faktur memuat DPP Rp45.833.333 dan PPN Rp5.500.000, dan PT Bina Usaha mengkreditkan PPN Rp5.500.000 tersebut", B: "Tarif diturunkan kembali menjadi 11% melalui Peraturan Pemerintah berdasarkan Pasal 7 ayat (3) UU PPN untuk barang/jasa yang tidak tergolong mewah, sehingga faktur memuat DPP Rp50.000.000 dan PPN Rp5.500.000", C: "Tarif tetap 12%, tetapi untuk barang/jasa yang tidak tergolong mewah DPP-nya berupa nilai lain 11/12 dari harga jual (PMK 131/2024), sehingga faktur memuat PPN Rp6.000.000, sedangkan PT Bina Usaha hanya dapat mengkreditkan Rp5.500.000", D: "Tarif tetap 12%, tetapi DPP nilai lain 11/12 hanya berlaku untuk penyerahan kepada konsumen akhir, sehingga penyerahan antar-PKP seperti ini tetap dikenai PPN Rp6.000.000 yang seluruhnya dapat dikreditkan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 131/2024 mempertahankan tarif 12% tetapi menetapkan DPP nilai lain 11/12 untuk barang/jasa non-mewah; PPN dalam faktur Rp5.500.000 (efektif 11%) dan jumlah itulah yang dikreditkan pembeli.",
        jejakHitung: [["DPP nilai lain = 11/12 × 50.000.000", "Rp45.833.333"], ["PPN = 12% × 45.833.333", "Rp5.500.000"], ["PM PT Bina Usaha", "Rp5.500.000 (sesuai faktur)"]],
        mengapaSalah: { B: "Tarif tidak diubah dengan PP; yang diubah DPP melalui nilai lain", C: "PPN yang tercantum dalam faktur sudah dihitung dari DPP nilai lain (Rp5.500.000); tidak ada selisih antara PPN faktur dan PM pembeli", D: "DPP nilai lain 11/12 berlaku untuk semua penyerahan barang/jasa non-mewah, termasuk antar-PKP" },
        jebakan: "Yang berubah DPP, bukan tarif; PM pembeli sama dengan PPN dalam faktur."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) huruf b dan ayat (3) UU PPN", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 8A UU PPN (nilai lain sebagai DPP)", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A4-089", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 9 ayat (9b) UU PPN (parafrase setia, sisipan UU Cipta Kerja): Pajak Masukan atas perolehan BKP/JKP, impor BKP, atau pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean yang tidak dilaporkan dalam SPT Masa PPN dan ditemukan pada waktu dilakukan pemeriksaan dapat dikreditkan oleh Pengusaha Kena Pajak.",
      stem: "PT Sarana Kimia (PKP) diperiksa untuk PPN Masa Januari–Desember 2025; SPT Masa PPN Juni 2025 semula nihil. Pemeriksa mengoreksi PK Masa Juni 2025 yang kurang dilaporkan sebesar Rp88.000.000. Dalam pembahasan akhir, PT Sarana Kimia menunjukkan faktur pajak masukan lengkap tertanggal 10 Juni 2025 dengan PPN Rp30.800.000 atas pembelian bahan baku yang berhubungan langsung dengan kegiatan usaha; faktur itu belum pernah dilaporkan dalam SPT Masa PPN mana pun dan PPN-nya belum dibebankan sebagai biaya. Berdasarkan kutipan tersebut, perlakuan PM tersebut dan pokok PPN kurang bayar Masa Juni 2025 menurut pemeriksaan (anggap tidak ada koreksi lain) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PM tidak dapat dikreditkan karena sudah lewat 3 Masa Pajak sejak Juni 2025; pokok kurang bayar Rp88.000.000", B: "PM dapat dikreditkan, tetapi hanya dengan pedoman 80% sehingga yang diakui Rp24.640.000; pokok kurang bayar Rp63.360.000", C: "PM tidak dapat dikreditkan dalam pemeriksaan, tetapi boleh dikreditkan pada SPT Masa PPN berjalan setelah SKP terbit; pokok kurang bayar Rp88.000.000", D: "PM dapat dikreditkan dalam penghitungan pemeriksaan; pokok kurang bayar Rp57.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 9 ayat (9b) mengizinkan PM yang tidak dilaporkan tetapi ditemukan saat pemeriksaan dikreditkan dalam penghitungan pemeriksaan, sehingga pokok kurang bayar menjadi Rp57.200.000.",
        jejakHitung: [["Koreksi PK Masa Juni 2025", "Rp88.000.000"], ["PM tidak dilaporkan, ditemukan saat pemeriksaan (Pasal 9 ayat (9b))", "Rp30.800.000 dapat dikreditkan"], ["Pokok kurang bayar = 88.000.000 − 30.800.000", "Rp57.200.000"]],
        mengapaSalah: { A: "Batas 3 Masa Pajak (Pasal 9 ayat (9)) mengatur pengkreditan oleh PKP dalam SPT, sedangkan ayat (9b) khusus PM yang ditemukan saat pemeriksaan", B: "Pedoman 80% (Pasal 9 ayat (9a)) untuk PM masa sebelum pengusaha dikukuhkan sebagai PKP", C: "Ayat (9b) justru memberi hak kredit dalam penghitungan pemeriksaan itu sendiri" },
        jebakan: "Bedakan ayat (9) (3 masa, oleh PKP), ayat (9a) (80%, sebelum dikukuhkan), dan ayat (9b) (ditemukan saat pemeriksaan)."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (9b) UU PPN (sisipan UU Cipta Kerja)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 9 ayat (9) dan (9a) UU PPN (pembanding)", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-090", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "RS Kasih Bunda (perseroan terbatas yang seluruh penyerahannya berupa jasa pelayanan kesehatan medis yang dibebaskan dari PPN berdasarkan PP 49/2022) pada 2 Januari 2026 membeli alat CT-scan dari PKP dengan harga Rp2.400.000.000 ditambah PPN Rp264.000.000 (faktur lengkap) serta membayar jasa instalasi kepada PKP Rp100.000.000 ditambah PPN Rp11.000.000. Alat langsung dipakai pada Januari 2026. Untuk keperluan fiskal alat itu disusutkan dengan metode garis lurus dan masa manfaat 8 tahun (anggap kelompok 2). Penyusutan fiskal Tahun Pajak 2026 atas alat tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp312.500.000", B: "Rp345.500.000", C: "Rp346.875.000", D: "Rp300.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Karena RS hanya menyerahkan jasa yang dibebaskan, seluruh PM atas alat dan instalasinya tidak dapat dikreditkan dan menjadi bagian harga perolehan yang disusutkan untuk PPh.",
        jejakHitung: [["PM Rp264.000.000 dan Rp11.000.000 terkait penyerahan dibebaskan", "tidak dapat dikreditkan (Pasal 16B ayat (3))"], ["Harga perolehan = 2.400.000.000 + 264.000.000 + 100.000.000 + 11.000.000", "Rp2.775.000.000"], ["Tarif garis lurus kelompok 2 = 100% ÷ 8", "12,5%"], ["Penyusutan 2026 = 12,5% × 2.775.000.000", "Rp346.875.000"]],
        mengapaSalah: { A: "Mengeluarkan PPN dari harga perolehan seolah-olah dapat dikreditkan (12,5% × Rp2.500.000.000)", B: "Lupa menambahkan PPN atas jasa instalasi (12,5% × Rp2.764.000.000)", D: "Hanya menyusutkan harga alat tanpa PPN dan tanpa biaya instalasi" },
        jebakan: "PM yang tidak dapat dikreditkan tidak hilang: ia menambah harga perolehan atau biaya untuk PPh."
      },
      dasarHukum: [{ pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 11 ayat (1) dan (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023 (penyusutan harta berwujud)", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-091", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Optima Plastindo (PKP, produsen kemasan, pemilik API) pada Masa Agustus 2026: (1) mengimpor mesin cetak (bukan barang mewah) dengan nilai pabean (CIF) Rp900.000.000 dan bea masuk Rp45.000.000; PIB atas nama perusahaan, dan DJBC juga memungut PPh Pasal 22 impor 2,5%; (2) memanfaatkan jasa perawatan perangkat lunak dari vendor di Jepang Rp120.000.000 yang ditagih pada Agustus 2026, PPN-nya disetor sendiri pada 20 Agustus 2026; (3) menerima faktur pajak lengkap atas pembelian bahan baku dengan PPN Rp55.000.000; dan (4) memotong PPh Pasal 21 karyawan Rp42.000.000. Semua perolehan untuk kegiatan usaha. Jumlah PM yang dapat dikreditkan pada Masa Agustus 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp172.150.000", B: "Rp195.775.000", C: "Rp167.200.000", D: "Rp158.950.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "PIB dan bukti setor PPN pemanfaatan JKP adalah dokumen tertentu yang dapat dikreditkan bersama faktur bahan baku; PPh Pasal 22 impor adalah kredit pajak PPh badan dan tidak pernah menjadi PM.",
        jejakHitung: [["Nilai impor = 900.000.000 + 45.000.000", "Rp945.000.000"], ["PPN impor = 11% × 945.000.000 (PIB)", "Rp103.950.000"], ["PPN pemanfaatan JKP = 11% × 120.000.000 (bukti setor)", "Rp13.200.000"], ["PM bahan baku (faktur)", "Rp55.000.000"], ["PM = 103.950.000 + 13.200.000 + 55.000.000", "Rp172.150.000"], ["PPh Pasal 22 impor = 2,5% × 945.000.000", "Rp23.625.000 (kredit PPh, bukan PM)"]],
        mengapaSalah: { B: "Ikut menjumlahkan PPh Pasal 22 impor Rp23.625.000 sebagai PM", C: "Menghitung PPN impor dari CIF saja (Rp99.000.000) tanpa bea masuk", D: "Melupakan PM atas pemanfaatan JKP dari luar Daerah Pabean yang bukti setornya dipersamakan dengan faktur pajak" },
        jebakan: "Dalam pungutan impor ada PPN impor (PM) dan PPh Pasal 22 impor (kredit PPh); jangan dicampur."
      },
      dasarHukum: [{ pasal: "Pasal 8A ayat (1), Pasal 9 ayat (2), dan Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 22 ayat (1) huruf a UU PPh; PMK 34/PMK.010/2017 (PPh 22 impor 2,5% bagi pemilik API)", berlakuSejak: "2017-03-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-092", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 1, formulirRef: "1111.induk.3",
      stem: "PT Wira Konstruksi Baja (PKP) pada Masa Juli 2026 menyerahkan rangka baja (bukan barang mewah) kepada: (1) sebuah kementerian (instansi pemerintah pemungut PPN) Rp800.000.000; (2) BUMN yang ditetapkan sebagai pemungut PPN Rp500.000.000; dan (3) PKP swasta Rp1.200.000.000. Semua nilai belum termasuk PPN. Jumlah PPN yang dilaporkan pada baris 'penyerahan yang PPN-nya dipungut oleh pemungut PPN' dalam Induk SPT Masa PPN Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp88.000.000", B: "Rp143.000.000", C: "Rp275.000.000", D: "Rp156.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Baris dipungut pemungut menampung penyerahan kepada instansi pemerintah (kode 02) dan pemungut lain seperti BUMN (kode 03); penyerahan kepada PKP swasta masuk baris dipungut sendiri.",
        jejakHitung: [["Kementerian (kode 02): 11% × 800.000.000", "Rp88.000.000"], ["BUMN pemungut (kode 03): 11% × 500.000.000", "Rp55.000.000"], ["Baris dipungut pemungut = 88.000.000 + 55.000.000", "Rp143.000.000"], ["PKP swasta: 11% × 1.200.000.000 = Rp132.000.000", "baris dipungut sendiri"]],
        mengapaSalah: { A: "BUMN yang ditetapkan sebagai pemungut juga memungut PPN (kode 03)", C: "Ikut memasukkan penyerahan kepada PKP swasta yang PPN-nya dipungut sendiri", D: "Memakai 12% atas harga penuh untuk barang non-mewah" },
        jebakan: "Kode 02 dan 03 sama-sama masuk keranjang 'dipungut oleh pemungut'."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (kode transaksi dan bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 80, verifikasi: "◐",
      peringatan: "Nama baris Induk SPT Masa PPN Coretax untuk penyerahan kepada pemungut belum dicek ke teks PER-11/PJ/2025; soal menguji substansi pengelompokan penyerahan."
    },
    {
      id: "A4-093", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Bendahara Pengeluaran Dinas Perpustakaan Kota (instansi pemerintah pemungut PPN dan PPh Pasal 22) pada Masa September 2026 membayar tiga tagihan kepada PKP rekanan ber-NPWP, masing-masing satu pesanan utuh yang tidak dipecah: (1) toner printer, harga Rp1.700.000 ditambah PPN Rp187.000; (2) rak buku, harga Rp1.950.000 ditambah PPN Rp214.500; dan (3) dua unit komputer, harga Rp15.000.000 ditambah PPN Rp1.650.000. Semua barang bukan barang mewah dan tidak mendapat fasilitas. Jumlah PPN dan PPh Pasal 22 yang dipungut bendahara berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPN Rp2.051.500 dan PPh Pasal 22 Rp279.750", B: "PPN Rp1.650.000 dan PPh Pasal 22 Rp225.000", C: "PPN Rp1.864.500 dan PPh Pasal 22 Rp254.250", D: "PPN Rp1.864.500 dan PPh Pasal 22 Rp225.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas Rp2.000.000 untuk pemungutan PPN oleh instansi pemerintah diuji dari pembayaran termasuk PPN, sedangkan untuk PPh Pasal 22 dari harga tidak termasuk PPN; rak buku lolos dari PPh Pasal 22 tetapi PPN-nya tetap dipungut bendahara.",
        jejakHitung: [["(1) Pembayaran termasuk PPN = 1.887.000 ≤ Rp2.000.000", "PPN tidak dipungut bendahara (dipungut sendiri oleh rekanan); PPh 22 tidak dipungut"], ["(2) Pembayaran termasuk PPN = 2.164.500 > Rp2.000.000", "PPN Rp214.500 dipungut bendahara"], ["(2) Harga tanpa PPN = 1.950.000 ≤ Rp2.000.000", "PPh 22 tidak dipungut"], ["(3) PPN Rp1.650.000; PPh 22 = 1,5% × 15.000.000", "Rp225.000"], ["PPN dipungut = 214.500 + 1.650.000", "Rp1.864.500"], ["PPh Pasal 22 dipungut", "Rp225.000"]],
        mengapaSalah: { A: "Mengabaikan pengecualian pembayaran sampai dengan Rp2.000.000 untuk kedua jenis pajak", B: "Memakai uji 'tidak termasuk PPN' juga untuk PPN sehingga rak buku dianggap di bawah batas", C: "Memakai uji 'termasuk PPN' juga untuk PPh Pasal 22 sehingga rak buku ikut dipungut (1,5% × Rp1.950.000)" },
        jebakan: "Satu angka Rp2.000.000, dua cara uji: PPN memakai jumlah termasuk PPN, PPh Pasal 22 memakai harga tanpa PPN."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 59/PMK.03/2022 (pemungutan PPN oleh instansi pemerintah)", berlakuSejak: null }, { pasal: "Pasal 22 ayat (1) huruf a UU PPh; PMK 34/PMK.010/2017", berlakuSejak: "2017-03-01" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Batas Rp2.000.000 termasuk PPN bagi instansi pemerintah untuk tidak memungut PPN mengikuti PMK 59/PMK.03/2022 sebagaimana diingat penyusun (sebelumnya Rp1.000.000 menurut KMK 563/KMK.03/2003); teks pasalnya belum dicek. Batas PPh Pasal 22 bendahara Rp2.000.000 tidak termasuk PPN mengikuti PMK 34/PMK.010/2017."
    },
    {
      id: "A4-094", topik: "A4.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Bumi Analitika (PKP, konsultan data) pada Masa Oktober 2026 berlangganan tiga layanan digital dari luar negeri untuk kegiatan usahanya: (1) perangkat lunak desain dari penyedia yang telah ditunjuk sebagai pemungut PPN PMSE, Rp24.000.000 belum termasuk PPN, dengan invoice yang mencantumkan nama dan NPWP PT Bumi Analitika serta PPN yang dipungut; (2) layanan basis data dari penyedia di Kanada yang tidak ditunjuk sebagai pemungut PPN PMSE, Rp60.000.000, ditagih pada Oktober 2026; dan (3) layanan rapat daring dari penyedia yang telah ditunjuk sebagai pemungut PPN PMSE, Rp6.000.000 belum termasuk PPN, dengan invoice yang hanya mencantumkan alamat surel tanpa nama dan NPWP pembeli. PPN yang wajib disetor sendiri telah dibayar pada Oktober 2026. Jumlah PPN yang wajib disetor sendiri oleh PT Bumi Analitika dan PM yang dapat dikreditkan Masa Oktober 2026 berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.600.000 dan Rp9.900.000", B: "Rp9.900.000 dan Rp9.900.000", C: "Rp6.600.000 dan Rp9.240.000", D: "Rp6.600.000 dan Rp2.640.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya layanan dari penyedia yang tidak ditunjuk sebagai pemungut yang PPN-nya disetor sendiri; PPN PMSE dapat dikreditkan bila dokumennya mencantumkan nama dan NPWP pembeli, sedangkan bukti setor PPN pemanfaatan adalah dokumen tertentu.",
        jejakHitung: [["(1) PPN dipungut pemungut PMSE = 11% × 24.000.000", "Rp2.640.000; invoice ber-NPWP → dapat dikreditkan"], ["(2) Disetor sendiri = 11% × 60.000.000", "Rp6.600.000; bukti setor → dapat dikreditkan"], ["(3) PPN dipungut pemungut PMSE = 11% × 6.000.000", "Rp660.000; tanpa identitas pembeli → tidak dapat dikreditkan"], ["PPN disetor sendiri", "Rp6.600.000"], ["PM = 2.640.000 + 6.600.000", "Rp9.240.000"]],
        mengapaSalah: { A: "Ikut mengkreditkan PPN layanan (3) yang dokumennya tidak mencantumkan identitas pembeli", B: "Layanan (1) dan (3) sudah dipungut oleh pemungut PMSE sehingga tidak disetor lagi oleh pembeli", D: "Lupa bahwa bukti setor PPN pemanfaatan JKP dari luar Daerah Pabean dapat dikreditkan" },
        jebakan: "Pemungut PMSE yang memungut; pembeli PKP hanya mengkreditkan bila dokumen memuat identitas dan NPWP-nya."
      },
      dasarHukum: [{ pasal: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01" }, { pasal: "Pasal 3A ayat (3) dan Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Syarat dokumen PPN PMSE (invoice atau bukti pungut) mencantumkan nama dan NPWP pembeli agar dapat dikreditkan mengikuti PMK 60/PMK.03/2022 sebagaimana diingat penyusun; pasalnya belum dicek ke teks."
    },
    {
      id: "A4-095", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A4-07",
      stem: "Vignette PT Kayu Ukir Mandiri (PKP, eksportir furnitur, tahun buku Januari–Desember; bukan WP kriteria tertentu dan bukan PKP berisiko rendah; tidak sedang diperiksa atau disidik), SPT Masa PPN Agustus 2026: ekspor furnitur dengan PEB Rp3.500.000.000; penjualan furnitur kepada PKP dalam negeri Rp500.000.000 belum termasuk PPN; PM yang dapat dikreditkan (faktur lengkap) Rp312.000.000; tidak ada kompensasi dari masa sebelumnya. Perusahaan memiliki 120 karyawan dan menyetor PPh Pasal 21 Rp96.000.000. Perusahaan ingin memperoleh pengembalian secepatnya melalui pengembalian pendahuluan sebagai WP persyaratan tertentu. Berdasarkan ketentuan yang berlaku sejak 1 Mei 2026, posisi SPT dan kelayakannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih bayar Rp257.000.000; memenuhi batas Pasal 17D bagi PKP karena lebih bayar tidak lebih dari Rp1 miliar dan jumlah penyerahan Rp4.000.000.000 tidak lebih dari Rp4,2 miliar", B: "Lebih bayar Rp312.000.000; memenuhi batas Pasal 17D bagi PKP karena lebih bayar tidak lebih dari Rp1 miliar dan jumlah penyerahan Rp4.000.000.000 tidak lebih dari Rp4,2 miliar", C: "Lebih bayar Rp257.000.000; hanya dapat dikompensasikan atau dimintakan kembali pada akhir tahun buku karena perusahaan bukan WP kriteria tertentu", D: "Kurang bayar Rp128.000.000 karena ekspor juga dikenai PPN 11%, sehingga tidak ada lebih bayar yang dapat dikembalikan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Lebih bayar Rp257.000.000; kedua batas PMK 28/2026 bagi PKP per Masa Pajak (lebih bayar paling banyak Rp1 miliar dan jumlah penyerahan paling banyak Rp4,2 miliar) terpenuhi sehingga dapat diajukan pengembalian pendahuluan Pasal 17D.",
        jejakHitung: [["PK dalam negeri = 11% × 500.000.000", "Rp55.000.000"], ["Ekspor (tarif 0%)", "Rp0"], ["Lebih bayar = 312.000.000 − 55.000.000", "Rp257.000.000"], ["Uji 17D: lebih bayar Masa Agustus 2026 ≤ Rp1 miliar per Masa Pajak", "memenuhi"], ["Uji 17D: penyerahan Masa Agustus 2026 = 3.500.000.000 + 500.000.000 ≤ Rp4,2 miliar", "Rp4.000.000.000 → memenuhi"], ["Karyawan dan PPh Pasal 21", "tidak dipakai"]],
        mengapaSalah: { B: "Lupa mengurangkan PK dalam negeri Rp55.000.000", C: "Eksportir boleh meminta pengembalian setiap masa (Pasal 9 ayat (4b)), dan Pasal 17D tidak mensyaratkan status WP kriteria tertentu", D: "Ekspor BKP berwujud bertarif 0%" },
        jebakan: "Uji Pasal 17D bagi PKP memakai dua angka dalam Masa Pajak yang sama: jumlah lebih bayar dan jumlah penyerahan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4b) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-096", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A4-07",
      stem: "Vignette PT Kayu Ukir Mandiri (PKP, eksportir furnitur): SPT Masa PPN Agustus 2026 lebih bayar Rp257.000.000 dengan jumlah penyerahan Rp4.000.000.000, disampaikan melalui Coretax pada 18 September 2026 dengan memilih pengembalian pendahuluan sebagai WP persyaratan tertentu, dan dinyatakan lengkap pada hari yang sama. Perusahaan tidak sedang diperiksa. Pernyataan yang paling tepat mengenai proses selanjutnya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "DJP menerbitkan SKPPKP paling lama 12 bulan sejak permohonan diterima lengkap, dan setelah pengembalian DJP masih dapat melakukan pemeriksaan; bila terbit SKPKB, kekurangan pajak ditambah kenaikan 100%", B: "DJP menerbitkan SKPPKP paling lama 1 bulan sejak permohonan diterima lengkap, dan karena pengembalian pendahuluan bersifat final, SPT Masa Agustus 2026 tidak dapat lagi diperiksa", C: "DJP menerbitkan SKPPKP paling lama 1 bulan sejak permohonan diterima lengkap, dan setelah pengembalian DJP masih dapat melakukan pemeriksaan; bila terbit SKPKB, kekurangan pajak hanya ditambah bunga Pasal 13 ayat (2) paling lama 24 bulan", D: "DJP menerbitkan SKPPKP paling lama 1 bulan sejak permohonan diterima lengkap, dan setelah pengembalian DJP masih dapat melakukan pemeriksaan; bila terbit SKPKB, kekurangan pajak ditambah kenaikan 100%" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Lebih bayar Rp257.000.000 dan penyerahan Rp4.000.000.000 memenuhi batas PKP persyaratan tertentu per Masa Pajak (lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar). Pengembalian pendahuluan PPN diputus dengan SKPPKP paling lama 1 bulan; pengembalian itu tidak menutup kewenangan pemeriksaan, dan SKPKB sesudahnya bagi WP Pasal 17C/17D dikenai kenaikan 100%.",
        jejakHitung: [["Permohonan lengkap", "18 September 2026"], ["SKPPKP PPN paling lama 1 bulan", "18 Oktober 2026"], ["SKPKB setelah pengembalian pendahuluan", "pokok + kenaikan 100%"]],
        mengapaSalah: { A: "12 bulan adalah jangka waktu restitusi melalui pemeriksaan (Pasal 17B)", B: "DJP tetap berwenang memeriksa setelah pengembalian pendahuluan", C: "Sanksi bagi WP Pasal 17C/17D yang kemudian diterbitkan SKPKB adalah kenaikan 100%, bukan bunga" },
        jebakan: "1 bulan (SKPPKP) berbeda dengan 12 bulan (Pasal 17B); kenaikan 100% bila kemudian terbit SKPKB."
      },
      dasarHukum: [{ pasal: "Pasal 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Batas PKP Pasal 17D (lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak) terverifikasi dari ringkasan resmi PMK 28 Tahun 2026 ✅. Jangka waktu SKPPKP PPN 1 bulan mengikuti ringkasan ketentuan pengembalian pendahuluan (PMK 39/2018 yang dicabut PMK 28/2026); nomor pasal dan teks utuh PMK 28/2026 belum dibaca ◐. Kenaikan 100% bersumber dari Pasal 17C ayat (5) dan 17D ayat (5) UU KUP."
    },
    {
      id: "A4-097", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-07",
      kutipan: "Pasal 17C dan Pasal 17D UU KUP (parafrase setia): Apabila setelah dilakukan pemeriksaan Direktur Jenderal Pajak menerbitkan Surat Ketetapan Pajak Kurang Bayar kepada Wajib Pajak yang telah diberi pengembalian pendahuluan kelebihan pembayaran pajak, jumlah kekurangan pajak ditambah dengan sanksi administratif berupa kenaikan sebesar 100% dari jumlah kekurangan pembayaran pajak.",
      stem: "Vignette PT Kayu Ukir Mandiri (PKP, eksportir furnitur): SPT Masa PPN Agustus 2026 melaporkan ekspor Rp3.500.000.000 (PEB), penjualan dalam negeri Rp500.000.000, PM Rp312.000.000, dan lebih bayar Rp257.000.000 yang telah dikembalikan melalui SKPPKP sebagai WP persyaratan tertentu. Pemeriksaan kemudian menemukan bahwa PM Rp90.000.000 berasal dari renovasi rumah pribadi direktur yang tidak berhubungan langsung dengan kegiatan usaha, dan ekspor Rp200.000.000 tidak didukung PEB sehingga diperlakukan sebagai penyerahan dalam negeri yang terutang PPN (efektif 11%). Tidak ada koreksi lain. Berdasarkan kutipan tersebut, jumlah yang harus dibayar menurut SKPKB (pokok ditambah kenaikan) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp196.000.000", B: "Rp224.000.000", C: "Rp180.000.000", D: "Rp112.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kekurangan pajak adalah selisih antara pengembalian yang diterima (Rp257.000.000) dan lebih bayar yang seharusnya (Rp145.000.000), yaitu Rp112.000.000, ditambah kenaikan 100% sehingga SKPKB Rp224.000.000.",
        jejakHitung: [["PK seharusnya = 55.000.000 + 11% × 200.000.000", "Rp77.000.000"], ["PM seharusnya = 312.000.000 − 90.000.000", "Rp222.000.000"], ["Lebih bayar seharusnya = 222.000.000 − 77.000.000", "Rp145.000.000"], ["Pengembalian yang tidak seharusnya = 257.000.000 − 145.000.000", "Rp112.000.000"], ["Kenaikan 100% × 112.000.000", "Rp112.000.000"], ["Jumlah menurut SKPKB", "Rp224.000.000"]],
        mengapaSalah: { A: "Memakai kenaikan 75% (Pasal 13 ayat (3)); bagi WP yang diberi pengembalian pendahuluan Pasal 17C/17D kenaikannya 100%", C: "Hanya mengoreksi PM; ekspor tanpa PEB juga menambah PK Rp22.000.000", D: "Lupa sanksi kenaikan 100%" },
        jebakan: "Koreksi dua sisi (PK naik, PM turun), lalu kenaikan 100% atas kekurangannya."
      },
      dasarHukum: [{ pasal: "Pasal 17C dan Pasal 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (8) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 7 ayat (2) dan Pasal 13 ayat (6) UU PPN (ekspor didukung PEB)", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A4-098", topik: "A4.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 9 ayat (4) dan (4a) UU PPN: Apabila dalam suatu Masa Pajak, Pajak Masukan yang dapat dikreditkan lebih besar daripada Pajak Keluaran, selisihnya merupakan kelebihan pajak yang dikompensasikan ke Masa Pajak berikutnya. Atas kelebihan Pajak Masukan tersebut dapat diajukan permohonan pengembalian pada akhir tahun buku.",
      stem: "PT Sawit Hilir Makmur (PKP, distributor minyak goreng kemasan di dalam negeri; tidak melakukan ekspor, tidak menyerahkan kepada pemungut, dan tidak mendapat fasilitas) memakai tahun buku 1 Juli–30 Juni. Karena pembelian persediaan dalam jumlah besar, SPT Masa PPN Maret 2026 lebih bayar Rp64.000.000 dan dikompensasikan; setelah memperhitungkan kompensasi, Masa April 2026 lebih bayar Rp41.000.000, Masa Mei 2026 lebih bayar Rp29.000.000, dan Masa Juni 2026 lebih bayar Rp18.000.000. Berdasarkan kutipan tersebut, Masa Pajak paling awal perusahaan dapat memilih pengembalian dan jumlah yang dapat dimintakan adalah ...",
      kataKualifikasi: ["paling awal"],
      opsi: { A: "Masa Desember 2026; Rp18.000.000", B: "Masa Juni 2026; Rp152.000.000", C: "Masa Juni 2026; Rp18.000.000", D: "Masa Maret 2026; Rp64.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pengembalian bagi PKP umum hanya pada akhir tahun buku, yaitu Masa Juni 2026 untuk tahun buku Juli–Juni; yang dapat dimintakan adalah lebih bayar pada SPT Masa Juni setelah kompensasi berantai, Rp18.000.000.",
        jejakHitung: [["Akhir tahun buku 1 Juli–30 Juni", "Masa Juni 2026"], ["Lebih bayar Masa Juni setelah kompensasi berantai", "Rp18.000.000"], ["Lebih bayar Maret–Mei", "sudah terserap dalam kompensasi berantai"]],
        mengapaSalah: { A: "Akhir tahun buku perusahaan adalah Juni, bukan Desember", B: "Lebih bayar tiap masa sudah dikompensasikan berantai; menjumlahkannya menghitung kelebihan yang sama berkali-kali", D: "PKP yang bukan kriteria Pasal 9 ayat (4b) tidak dapat meminta pengembalian di tengah tahun buku" },
        jebakan: "Akhir tahun buku tidak selalu Desember bila tahun bukunya tidak sama dengan tahun kalender."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4), (4a), dan (4b) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-099", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 3, formulirRef: "1111.induk.13",
      stem: "Staf pajak PT Delta Prima (PKP, pabrik suku cadang) mengisi baris 'Pajak Masukan yang dapat diperhitungkan' pada bagian perhitungan PPN kurang/lebih bayar dalam konsep SPT Masa PPN Oktober 2026; baris ini memuat PM yang dikreditkan pada masa itu ditambah kompensasi kelebihan PPN masa sebelumnya. Data: (1) faktur masukan Oktober 2026 atas bahan baku, lengkap, PPN Rp74.800.000; (2) faktur masukan tertanggal 18 Juli 2026, lengkap, belum pernah dikreditkan maupun dibiayakan, PPN Rp6.600.000; (3) faktur masukan tertanggal 22 Juni 2026, lengkap, belum pernah dikreditkan maupun dibiayakan, PPN Rp4.400.000; (4) PIB impor bahan penolong Oktober 2026 dengan PPN impor Rp13.200.000; (5) faktur pembelian sedan untuk kendaraan operasional manajer pemasaran, PPN Rp33.000.000; dan (6) lebih bayar Masa September 2026 Rp9.500.000 yang dikompensasikan ke Masa Oktober. Jumlah yang diisikan pada baris tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp104.100.000", B: "Rp108.500.000", C: "Rp97.500.000", D: "Rp94.600.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Baris PM yang dapat diperhitungkan memuat PM yang sah dikreditkan pada Oktober (termasuk faktur Juli yang masih dalam batas 3 masa dan PIB) ditambah kompensasi September; faktur Juni sudah lewat batas dan PM sedan dilarang.",
        jejakHitung: [["(1) Faktur Oktober", "Rp74.800.000"], ["(2) Faktur Juli: batas 3 masa = Oktober 2026", "Rp6.600.000"], ["(3) Faktur Juni: batas 3 masa = September 2026", "tidak dapat lagi dikreditkan"], ["(4) PIB impor", "Rp13.200.000"], ["(5) Sedan (Pasal 9 ayat (8) huruf c)", "tidak dapat dikreditkan"], ["(6) Kompensasi Masa September", "Rp9.500.000"], ["Jumlah = 74.800.000 + 6.600.000 + 13.200.000 + 9.500.000", "Rp104.100.000"]],
        mengapaSalah: { B: "Ikut memasukkan faktur Juni yang batas pengkreditannya berakhir pada Masa September 2026", C: "Mengira faktur Juli tidak dapat dikreditkan lagi, padahal Oktober adalah masa ketiga setelah Juli", D: "Lupa menambahkan kompensasi lebih bayar Masa September" },
        jebakan: "Hitung 3 masa setelah masa faktur: Juli → Agustus, September, Oktober."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2), (8) huruf c, dan (9) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Nama dan isi baris 'Pajak Masukan yang dapat diperhitungkan' (termasuk kompensasi) mengikuti susunan SPT Masa PPN 1111 yang diteruskan secara logis ke Coretax; tata letak baris Coretax belum dicek ke teks PER-11/PJ/2025."
    },
    {
      id: "A4-100", topik: "A4.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-08",
      stem: "Vignette PT Nusantara Kimia Industri (PKP, produsen bahan kimia), SPT Masa PPN Juli 2026: telah disampaikan dan kurang bayar Rp30.000.000 disetor tepat waktu pada 26 Agustus 2026. Perhitungan semula: PK dipungut sendiri Rp180.700.000; PM yang dikreditkan Rp150.700.000, terdiri dari (a) bahan kimia baku Rp121.000.000; (b) jasa pemeliharaan instalasi pabrik Rp5.500.000 (PPh Pasal 23 Rp1.000.000 telah dipotong); (c) renovasi rumah pribadi direktur utama yang tagihannya dibuat atas nama perusahaan Rp13.200.000; dan (d) pembelian station wagon untuk direktur keuangan Rp11.000.000. Semua faktur lengkap. Pada 12 Oktober 2026 auditor internal menemukan kekeliruan pengkreditan; belum ada pemeriksaan. PM yang seharusnya dapat dikreditkan pada Masa Juli 2026 adalah ...",
      kataKualifikasi: ["seharusnya"],
      opsi: { A: "Rp150.700.000", B: "Rp137.500.000", C: "Rp139.700.000", D: "Rp126.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur lengkap tidak otomatis dapat dikreditkan: perolehan yang tidak berhubungan langsung dengan usaha (renovasi rumah direktur) dan station wagon yang tidak diperdagangkan atau disewakan dilarang dikreditkan.",
        jejakHitung: [["(a) Bahan kimia baku", "Rp121.000.000"], ["(b) Pemeliharaan instalasi pabrik", "Rp5.500.000"], ["(c) Renovasi rumah pribadi direktur (Pasal 9 ayat (8) huruf b)", "tidak dapat dikreditkan"], ["(d) Station wagon direksi (Pasal 9 ayat (8) huruf c)", "tidak dapat dikreditkan"], ["PM seharusnya = 121.000.000 + 5.500.000", "Rp126.500.000"], ["PPh Pasal 23", "tidak dipakai"]],
        mengapaSalah: { A: "Menganggap semua faktur yang lengkap dapat dikreditkan", B: "Tetap mengkreditkan station wagon; larangan huruf c meliputi sedan dan station wagon", C: "Tetap mengkreditkan renovasi rumah pribadi direktur yang tidak berhubungan langsung dengan kegiatan usaha" },
        jebakan: "Uji materiil PM: berhubungan langsung dengan usaha dan bukan sedan/station wagon."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf b dan c UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-101", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-A4-08", formulirRef: "1111.induk.15",
      stem: "Vignette PT Nusantara Kimia Industri (PKP): SPT Masa PPN Juli 2026 semula kurang bayar Rp30.000.000 (PK Rp180.700.000; PM Rp150.700.000) dan telah disetor 26 Agustus 2026. Pada Oktober 2026 perusahaan membetulkan SPT tersebut karena PM renovasi rumah pribadi direktur Rp13.200.000 dan PM station wagon direktur Rp11.000.000 tidak dapat dikreditkan. Pada SPT pembetulan, angka pada baris 'PPN kurang (lebih) bayar', baris 'PPN kurang (lebih) bayar pada SPT yang dibetulkan', dan baris 'PPN kurang (lebih) bayar karena pembetulan' berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp24.200.000; Rp30.000.000; Rp54.200.000", B: "Rp54.200.000; Rp30.000.000; Rp24.200.000", C: "Rp54.200.000; Rp0; Rp54.200.000", D: "Rp43.200.000; Rp30.000.000; Rp13.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPT pembetulan memuat hasil hitung baru (Rp54.200.000), angka SPT semula (Rp30.000.000), dan selisihnya (Rp24.200.000) yang harus disetor sebelum pembetulan disampaikan.",
        jejakHitung: [["PM pembetulan = 150.700.000 − 13.200.000 − 11.000.000", "Rp126.500.000"], ["Kurang bayar pembetulan = 180.700.000 − 126.500.000", "Rp54.200.000"], ["Kurang bayar pada SPT yang dibetulkan", "Rp30.000.000"], ["Kurang bayar karena pembetulan = 54.200.000 − 30.000.000", "Rp24.200.000 (setoran tambahan)"]],
        mengapaSalah: { A: "Menukar baris hasil hitung baru dengan baris selisih karena pembetulan", C: "Mengabaikan kurang bayar yang sudah disetor sehingga Rp30.000.000 seolah dibayar dua kali", D: "Hanya mencoret renovasi rumah direktur; station wagon juga tidak dapat dikreditkan" },
        jebakan: "Baris 'karena pembetulan' adalah selisih, bukan jumlah baru."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (8) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (SPT Masa PPN pembetulan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 130, verifikasi: "◐",
      peringatan: "Nama baris pembetulan (kurang/lebih bayar, pada SPT yang dibetulkan, karena pembetulan) mengikuti SPT Masa PPN 1111; susunannya di Coretax, termasuk perhitungan pembayaran sebelum pembetulan menurut PER-12/PJ/2026, belum dicek ke teks."
    },
    {
      id: "A4-102", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-08",
      kutipan: "Pasal 8 ayat (2a) UU KUP (parafrase setia): Dalam hal Wajib Pajak membetulkan sendiri SPT Masa yang mengakibatkan utang pajak menjadi lebih besar, kepadanya dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan atas jumlah pajak yang kurang dibayar, dihitung sejak jatuh tempo pembayaran berakhir sampai dengan tanggal pembayaran, dikenakan paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan. Tarif bunga per bulan dihitung dari suku bunga acuan ditambah 5% dibagi 12.",
      stem: "Vignette PT Nusantara Kimia Industri (PKP): pembetulan SPT Masa PPN Juli 2026 menimbulkan tambahan kurang bayar Rp24.200.000. Jatuh tempo pembayaran Masa Juli 2026 adalah 31 Agustus 2026; tambahan tersebut disetor pada 19 Oktober 2026 dan pembetulan disampaikan pada hari yang sama, sebelum ada pemeriksaan. Anggap tarif bunga per bulan dalam KMK yang berlaku untuk penghitungan ini: uplift 5% (Pasal 8 ayat (2a) dan Pasal 9 ayat (2a)) 1,02%; uplift 10% (Pasal 8 ayat (5)) 1,43%; uplift 15% (Pasal 13 ayat (2)) 1,85%. Berdasarkan kutipan tersebut, sanksi bunga atas pembetulan itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp246.840", B: "Rp692.120", C: "Rp493.680", D: "Rp895.400" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembetulan sendiri sebelum pemeriksaan memakai bunga Pasal 8 ayat (2a) (acuan + 5%) atas tambahan kurang bayar, dihitung 2 bulan sejak 31 Agustus sampai 19 Oktober 2026.",
        jejakHitung: [["Jatuh tempo → tanggal bayar", "31 Agustus → 19 Oktober 2026"], ["Lama = 1 bulan 19 hari, bagian bulan dihitung penuh", "2 bulan"], ["Tarif Pasal 8 ayat (2a)", "1,02% per bulan"], ["Bunga = 24.200.000 × 1,02% × 2", "Rp493.680"]],
        mengapaSalah: { A: "Menghitung hanya 1 bulan; sisa 19 hari dihitung penuh 1 bulan", B: "Memakai tarif Pasal 8 ayat (5) (pengungkapan ketidakbenaran saat pemeriksaan), padahal pembetulan dilakukan sebelum pemeriksaan", D: "Memakai tarif Pasal 13 ayat (2) yang berlaku untuk SKPKB hasil pemeriksaan" },
        jebakan: "Pilih uplift sesuai pasal: pembetulan sendiri memakai acuan + 5%."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK tarif bunga per bulan (ditetapkan Menteri Keuangan setiap bulan)", berlakuSejak: null }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-103", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Hari ini Rabu, 28 Oktober 2026. PT Pelita Grafika (PKP) belum menyetor PPN kurang bayar Masa September 2026 sebesar Rp37.400.000 dan belum menyampaikan SPT Masa PPN-nya. Tanggal 31 Oktober 2026 jatuh pada hari Sabtu dan 1 November 2026 hari Minggu; tidak ada hari libur nasional di sekitarnya. Pernyataan yang paling tepat mengenai batas waktu tanpa sanksi adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPN disetor dan SPT Masa PPN disampaikan paling lambat Senin, 2 November 2026, dengan penyetoran dilakukan sebelum SPT disampaikan", B: "PPN disetor paling lambat Jumat, 30 Oktober 2026, sedangkan SPT Masa PPN boleh disampaikan paling lambat Senin, 2 November 2026, karena hanya batas penyampaian SPT yang bergeser ke hari kerja berikutnya", C: "PPN disetor dan SPT Masa PPN disampaikan paling lambat Jumat, 30 Oktober 2026, karena batas yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", D: "PPN disetor paling lambat Senin, 16 November 2026 mengikuti batas setor pajak masa tanggal 15, sedangkan SPT Masa PPN disampaikan paling lambat Senin, 2 November 2026" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas setor dan lapor SPT Masa PPN September adalah akhir Oktober; karena 31 Oktober 2026 jatuh pada Sabtu, keduanya bergeser ke hari kerja berikutnya (Senin, 2 November 2026), dengan syarat setor mendahului penyampaian SPT.",
        jejakHitung: [["Batas Pasal 15A untuk Masa September", "31 Oktober 2026 (Sabtu)"], ["Hari kerja berikutnya", "Senin, 2 November 2026"], ["Urutan", "setor dulu, lalu SPT"]],
        mengapaSalah: { B: "Pergeseran ke hari kerja berikutnya juga berlaku untuk batas penyetoran (PMK 81/2024 Pasal 100)", C: "Batas yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan sebelumnya", D: "Kurang bayar SPT Masa PPN mengikuti Pasal 15A (akhir bulan berikutnya dan sebelum SPT disampaikan), bukan tanggal 15" },
        jebakan: "Akhir bulan yang jatuh pada akhir pekan bergeser ke Senin berikutnya, untuk setor maupun lapor."
      },
      dasarHukum: [{ pasal: "Pasal 15A ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 81/2024 Pasal 100", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 80, verifikasi: "◐",
      peringatan: "Pergeseran batas penyampaian SPT yang jatuh pada hari libur ke hari kerja berikutnya mengikuti ketentuan lama (PMK 243/PMK.03/2014) yang diteruskan PMK 81/2024; nomor pasal untuk SPT belum dicek ke teks. Pergeseran batas penyetoran mengikuti PMK 81/2024 Pasal 100."
    },
    {
      id: "A4-104", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      kutipan: "Pasal 1A UU PPN (parafrase setia): Termasuk dalam pengertian penyerahan BKP antara lain penyerahan BKP kepada pedagang perantara atau melalui juru lelang dan penyerahan BKP secara konsinyasi. Tidak termasuk dalam pengertian penyerahan BKP antara lain penyerahan BKP kepada makelar sebagaimana dimaksud dalam Kitab Undang-Undang Hukum Dagang, penyerahan BKP untuk jaminan utang-piutang, dan pengalihan BKP dalam rangka penggabungan, peleburan, pemekaran, pemecahan, dan pengambilalihan usaha dengan syarat pihak yang melakukan dan yang menerima pengalihan adalah PKP.",
      stem: "PT Sentra Kosmetika (PKP, produsen kosmetik yang bukan barang mewah) pada Masa September 2026 melakukan: (1) menitipkan produk dengan harga jual Rp200.000.000 kepada Toko Ayu secara konsinyasi pada 8 September 2026, dan sampai 30 September Toko Ayu baru menjual sebagian; (2) menyerahkan produk Rp150.000.000 kepada makelar sebagaimana dimaksud dalam KUHD untuk dijualkan atas nama PT Sentra Kosmetika, yang sampai akhir bulan belum terjual; (3) menyerahkan persediaan Rp300.000.000 kepada bank sebagai jaminan kredit modal kerja; dan (4) menjual produk kepada distributor PKP Rp500.000.000. Semua nilai belum termasuk PPN. Berdasarkan kutipan tersebut, PPN yang terutang pada Masa September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp55.000.000", B: "Rp77.000.000", C: "Rp93.500.000", D: "Rp110.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Konsinyasi termasuk penyerahan BKP sehingga terutang saat barang dititipkan, sedangkan penyerahan kepada makelar KUHD dan penyerahan sebagai jaminan utang bukan penyerahan.",
        jejakHitung: [["(1) Konsinyasi: penyerahan saat dititipkan", "Rp200.000.000 terutang"], ["(2) Penyerahan kepada makelar KUHD", "bukan penyerahan"], ["(3) Jaminan utang-piutang", "bukan penyerahan"], ["(4) Penjualan ke distributor", "Rp500.000.000 terutang"], ["PPN = 11% × (200.000.000 + 500.000.000)", "Rp77.000.000"]],
        mengapaSalah: { A: "Menunda PPN konsinyasi sampai barang terjual kepada konsumen; konsinyasi sudah merupakan penyerahan", C: "Ikut mengenakan PPN atas penyerahan kepada makelar KUHD yang dikecualikan dari pengertian penyerahan", D: "Ikut mengenakan PPN atas penyerahan sebagai jaminan utang" },
        jebakan: "Konsinyasi termasuk penyerahan; makelar KUHD dan jaminan utang tidak termasuk penyerahan."
      },
      dasarHukum: [{ pasal: "Pasal 1A ayat (1) dan (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-105", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-09", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Andalas Teknik Mandiri (PKP, fabrikator boiler; pembukuan dalam rupiah) mengikat kontrak penjualan satu unit boiler (bukan barang mewah) kepada PT Sinar Pangan Lestari (PKP) senilai USD80.000 belum termasuk PPN. Uang muka 25% (USD20.000) diterima Rabu, 2 September 2026; boiler diserahkan Selasa, 6 Oktober 2026; sisa USD60.000 dilunasi 4 November 2026. Setiap faktur pajak dibuat tepat waktu. Data kurs per USD: kurs KMK 26 Agustus–1 September 2026 Rp16.290; kurs KMK 2–8 September 2026 Rp16.380; kurs KMK 30 September–6 Oktober 2026 Rp16.440; kurs KMK 7–13 Oktober 2026 Rp16.400; kurs KMK 4–10 November 2026 Rp16.300; kurs tengah BI 2 September 2026 Rp16.405 dan 6 Oktober 2026 Rp16.462. PPN yang tercantum dalam faktur pajak Masa September 2026 dan Masa Oktober 2026 berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.091.000 dan Rp108.649.200", B: "Rp36.036.000 dan Rp108.240.000", C: "Rp36.036.000 dan Rp108.504.000", D: "Rp36.036.000 dan Rp107.580.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Uang muka yang diterima sebelum penyerahan difakturkan saat diterima, dan sisa harga difakturkan saat penyerahan; masing-masing dikonversi dengan kurs KMK yang berlaku saat faktur seharusnya dibuat. Selasa, 6 Oktober 2026 masih termasuk periode kurs Rabu 30 September–Selasa 6 Oktober.",
        jejakHitung: [["Faktur uang muka: Rabu 2 Sep 2026 → kurs KMK 2–8 Sep", "Rp16.380"], ["Harga uang muka = 20.000 × 16.380", "Rp327.600.000"], ["PPN = 12% × 11/12 × 327.600.000", "Rp36.036.000"], ["Faktur penyerahan: Selasa 6 Okt 2026 → kurs KMK 30 Sep–6 Okt", "Rp16.440"], ["Sisa harga = 60.000 × 16.440", "Rp986.400.000"], ["PPN = 12% × 11/12 × 986.400.000", "Rp108.504.000"]],
        mengapaSalah: { A: "Memakai kurs tengah BI (Rp16.405 dan Rp16.462); kurs tengah BI dipakai pembukuan, sedangkan PPN dikonversi dengan kurs KMK", B: "Memasukkan Selasa 6 Oktober ke periode 7–13 Oktober; periode KMK berjalan Rabu sampai Selasa sehingga 6 Oktober memakai Rp16.440", D: "Memakai kurs tanggal pelunasan 4 November; penyerahan terjadi lebih dulu sehingga faktur sisa harga seharusnya dibuat 6 Oktober" },
        jebakan: "Kurs mengikuti tanggal faktur seharusnya dibuat, dan periode KMK berjalan Rabu–Selasa."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (2) serta Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21 (konversi dengan kurs KMK saat faktur seharusnya dibuat)", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "KMK nilai kurs mingguan (berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-106", topik: "A4.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A4-09", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Andalas Teknik Mandiri (PKP, pembukuan rupiah sesuai SAK): atas penyerahan boiler pada Selasa, 6 Oktober 2026, faktur pajak mencantumkan sisa harga USD60.000 dengan PPN Rp108.504.000 (kurs KMK Rp16.440), dan PPN tersebut telah dibayar pembeli dalam rupiah. Di pembukuan, piutang USD60.000 dicatat dengan kurs transaksi, yaitu kurs tengah BI 6 Oktober 2026 Rp16.462, dan tidak dijabarkan ulang sampai pelunasan. Pelunasan USD60.000 diterima 4 November 2026 dan dibukukan dengan kurs tengah BI hari itu Rp16.318; kurs KMK 4–10 November 2026 Rp16.300. Pernyataan yang paling tepat mengenai selisih kurs dan PPN atas transaksi ini adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Rugi selisih kurs Rp8.640.000 diakui; PPN keluaran tetap Rp108.504.000", B: "Rugi selisih kurs Rp8.400.000 diakui; PPN keluaran tetap Rp108.504.000", C: "Rugi selisih kurs Rp8.640.000 diakui; PPN keluaran dikurangi Rp950.400 pada Masa November 2026", D: "Rugi selisih kurs Rp9.720.000 diakui; PPN keluaran tetap Rp108.504.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Selisih kurs pelunasan piutang adalah urusan pembukuan dan PPh, diukur dari kurs pencatatan piutang (kurs tengah BI 6 Oktober) ke kurs penerimaan (kurs tengah BI 4 November). PPN sudah terutang saat penyerahan dengan kurs KMK dan tidak berubah karena kurs bergerak.",
        jejakHitung: [["Piutang dicatat = 60.000 × 16.462", "Rp987.720.000"], ["Kas diterima = 60.000 × 16.318", "Rp979.080.000"], ["Rugi selisih kurs = 60.000 × (16.462 − 16.318)", "Rp8.640.000"], ["Perlakuan PPh", "biaya (Pasal 6 ayat (1) huruf e UU PPh)"], ["PPN keluaran (faktur 6 Okt, kurs KMK Rp16.440)", "tetap Rp108.504.000"]],
        mengapaSalah: { B: "Mengukur selisih kurs dengan kurs KMK (16.440 − 16.300); kurs KMK untuk menghitung pajak, bukan untuk pembukuan", C: "Selisih kurs bukan pengurangan harga jual; tanpa retur atau pembatalan, PPN dalam faktur tidak dikoreksi", D: "Mencampur kurs tengah BI saat pencatatan dengan kurs KMK saat pelunasan; kedua sisi diukur dengan kurs pembukuan" },
        jebakan: "Selisih kurs tidak menyentuh PPN; ukur dengan kurs pembukuan, bukan kurs KMK."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan SAK yang taat asas)", berlakuSejak: "2010-12-30" }, { pasal: "SAK tentang pengaruh perubahan kurs valuta asing (PSAK 221, dahulu PSAK 10)", berlakuSejak: null }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-107", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "PP 44/2022 Pasal 21 (parafrase): Dalam hal penyerahan BKP/JKP, impor BKP, atau pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean dilakukan dengan mata uang asing, PPN yang terutang dikonversi ke dalam rupiah dengan kurs yang ditetapkan Menteri Keuangan yang berlaku pada saat Faktur Pajak atau dokumen yang dipersamakan dengan Faktur Pajak seharusnya dibuat.",
      stem: "PT Mitra Polimer Sejahtera (PKP) menyerahkan resin plastik (bukan barang mewah) senilai USD45.000 belum termasuk PPN kepada PT Kemasan Prima (PKP) pada Selasa, 8 September 2026. Karena staf penagihan cuti, faktur pajak baru dibuat dan disetujui di Coretax pada Senin, 21 September 2026 dengan tanggal faktur 21 September 2026; pembayaran diterima 30 September 2026. Data kurs per USD: kurs KMK 2–8 September 2026 Rp16.380; kurs KMK 9–15 September 2026 Rp16.352; kurs KMK 16–22 September 2026 Rp16.396; kurs KMK 30 September–6 Oktober 2026 Rp16.440; kurs tengah BI 8 September 2026 Rp16.402. Berdasarkan kutipan tersebut, PPN dalam faktur pajak dan sanksi atas keterlambatan pembuatan faktur adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPN Rp81.160.200; denda Rp6.763.350", B: "PPN Rp81.081.000; tanpa denda karena faktur dibuat sebelum lewat 3 bulan", C: "PPN Rp81.081.000; denda Rp7.371.000", D: "PPN Rp81.081.000; denda Rp6.756.750" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Kurs mengikuti saat faktur seharusnya dibuat, yaitu tanggal penyerahan Selasa 8 September (periode KMK 2–8 September), walaupun faktur baru dibuat 21 September. Keterlambatan membuat faktur dikenai denda 1% dari DPP, dan DPP barang non-mewah adalah nilai lain 11/12 × harga jual.",
        jejakHitung: [["Saat faktur seharusnya dibuat", "Selasa, 8 September 2026 → kurs KMK 2–8 Sep Rp16.380"], ["Harga jual = 45.000 × 16.380", "Rp737.100.000"], ["DPP nilai lain = 11/12 × 737.100.000", "Rp675.675.000"], ["PPN = 12% × 675.675.000", "Rp81.081.000"], ["Denda Pasal 14 ayat (4) UU KUP = 1% × 675.675.000", "Rp6.756.750"]],
        mengapaSalah: { A: "Memakai kurs pada tanggal faktur dibuat (16–22 September), rumusan lama PP 1/2012; PP 44/2022 memakai kurs saat faktur seharusnya dibuat", B: "Batas 3 bulan hanya menentukan apakah faktur dianggap tidak dibuat; faktur yang terlambat kurang dari 3 bulan tetap sah tetapi dikenai denda 1% DPP", C: "Menghitung denda dari harga jual penuh; dasar denda adalah DPP, yaitu nilai lain 11/12 × harga jual" },
        jebakan: "Faktur terlambat tidak menggeser kurs: tetap kurs saat faktur seharusnya dibuat."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-108", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Borneo Agro Mesin (PKP, importir pemilik API-U) mengimpor komponen mesin pengolah sawit (bukan barang mewah) dari Malaysia dengan invoice FOB USD46.500, biaya angkut USD2.900, dan asuransi USD600. Bill of lading bertanggal Selasa, 1 September 2026. PIB didaftarkan serta bea masuk 5%, PPN impor, dan PPh Pasal 22 impor 2,5% dilunasi pada Kamis, 17 September 2026; utang kepada pemasok dibayar 15 Oktober 2026 dengan kurs jual bank Rp16.455. Data kurs per USD: kurs KMK 26 Agustus–1 September 2026 Rp16.290; kurs KMK 16–22 September 2026 Rp16.396; kurs tengah BI 17 September 2026 Rp16.421. Tidak ada pungutan pabean lain. PPN impor yang terutang (sebelum pembulatan) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp94.831.275", B: "Rp94.686.900", C: "Rp94.074.750", D: "Rp90.178.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Nilai impor adalah nilai pabean CIF ditambah bea masuk, dikonversi dengan kurs KMK yang berlaku pada tanggal PIB (dokumen yang dipersamakan dengan faktur pajak); PPN impor barang non-mewah = 12% × 11/12 × nilai impor.",
        jejakHitung: [["CIF = 46.500 + 2.900 + 600", "USD50.000"], ["Kurs KMK tanggal PIB (16–22 Sep)", "Rp16.396"], ["CIF rupiah = 50.000 × 16.396", "Rp819.800.000"], ["Bea masuk 5% × 819.800.000", "Rp40.990.000"], ["Nilai impor", "Rp860.790.000"], ["DPP nilai lain = 11/12 × 860.790.000", "Rp789.057.500"], ["PPN impor = 12% × 789.057.500", "Rp94.686.900"], ["PPh 22 impor dan kurs bank pelunasan utang", "tidak dipakai"]],
        mengapaSalah: { A: "Memakai kurs tengah BI (Rp16.421); pungutan impor memakai kurs KMK", C: "Memakai kurs KMK pada tanggal bill of lading; yang menentukan adalah tanggal PIB", D: "Lupa menambahkan bea masuk ke nilai impor" },
        jebakan: "Nilai impor = CIF + bea masuk, dengan kurs KMK tanggal PIB."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU PPN (definisi nilai impor) dan Pasal 4 ayat (1) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (mingguan)", berlakuSejak: null }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-109", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Cakrawala Data Nusantara (PKP, penyedia jasa analitik) membeli lisensi perangkat lunak analitik (BKP tidak berwujud) dari Emerald Analytics Ltd di Irlandia, yang tidak memiliki BUT dan tidak ditunjuk sebagai pemungut PPN PMSE, seharga USD60.000. Kontrak ditandatangani serta tagihan diterima, dicatat sebagai utang, dan dibayar lunas pada hari yang sama, Rabu, 5 Agustus 2026, sedangkan lisensi baru mulai dipakai Selasa, 1 September 2026. Atas pembayaran itu perusahaan juga memotong PPh Pasal 26 sesuai P3B. Data kurs per USD: kurs KMK 5–11 Agustus 2026 Rp16.215; kurs tengah BI 5 Agustus 2026 Rp16.240; kurs KMK 26 Agustus–1 September 2026 Rp16.290. PPN atas pemanfaatan BKP tidak berwujud dari luar Daerah Pabean yang wajib disetor sendiri dan batas penyetorannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp107.019.000; paling lambat 15 September 2026", B: "Rp107.514.000; paling lambat 15 Oktober 2026", C: "Rp107.019.000; paling lambat 30 September 2026", D: "Rp107.184.000; paling lambat 15 September 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN atas pemanfaatan dari luar Daerah Pabean terutang pada saat yang paling dahulu di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar. Di sini tagihan, utang, dan pembayaran terjadi 5 Agustus 2026, sebelum lisensi dipakai, sehingga konversinya memakai kurs KMK saat itu, dan PPN disetor sendiri paling lambat tanggal 15 bulan berikutnya.",
        jejakHitung: [["Saat terutang: tagihan, utang, dan pembayaran 5 Agu mendahului pemanfaatan 1 Sep", "5 Agustus 2026"], ["Kurs KMK 5–11 Agustus 2026", "Rp16.215"], ["Nilai lisensi = 60.000 × 16.215", "Rp972.900.000"], ["PPN = 12% × 11/12 × 972.900.000", "Rp107.019.000"], ["Batas setor: tanggal 15 bulan berikutnya setelah saat terutang", "15 September 2026"]],
        mengapaSalah: { B: "Menganggap PPN terutang saat lisensi mulai dipakai; bila pembayaran terjadi lebih dulu, saat terutang adalah saat pembayaran", C: "Memakai batas setor dan lapor SPT Masa PPN (akhir bulan berikutnya); PPN pemanfaatan dari luar Daerah Pabean disetor paling lambat tanggal 15 bulan berikutnya", D: "Memakai kurs tengah BI; konversi PPN memakai kurs KMK" },
        jebakan: "Pembayaran di muka menarik saat terutang PPN JLN, sekaligus kursnya, ke tanggal bayar."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf d dan Pasal 3A ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 (saat terutang pemanfaatan dari luar Daerah Pabean) dan Pasal 21 (kurs)", berlakuSejak: "2022-12-02" }, { pasal: "PMK 81/2024 Pasal 94 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Saat terutang PPN JLN pada saat yang paling dahulu di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar mengikuti uraian sekunder DJP/DDTC atas PP 44/2022 dan PMK 40/PMK.03/2010; nomor pasalnya belum dicek ke teks. Batas setor tanggal 15 bulan berikutnya mengikuti PMK 81/2024 sebagaimana dipakai di modul ini; pasal persisnya belum dicek ke teks."
    },
    {
      id: "A4-110", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Lintas Elektrika (PKP, distributor) menjual 40 unit inverter tenaga surya (bukan barang mewah) kepada PT Surya Kencana (PKP) dengan harga kontrak USD22.200 yang menurut kontrak sudah termasuk PPN. Barang diserahkan dan faktur pajak dibuat pada Rabu, 14 Oktober 2026; pembayaran diterima 6 November 2026. Data kurs per USD: kurs KMK 7–13 Oktober 2026 Rp16.400; kurs KMK 14–20 Oktober 2026 Rp16.386; kurs tengah BI 14 Oktober 2026 Rp16.410; kurs KMK 4–10 November 2026 Rp16.300. PPN dalam rupiah yang tercantum dalam faktur pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.102.000", B: "Rp40.014.612", C: "Rp36.049.200", D: "Rp35.860.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Harga kontrak sudah termasuk PPN, sehingga harga jual = USD22.200 ÷ 1,11 = USD20.000; nilainya dikonversi dengan kurs KMK periode 14–20 Oktober karena faktur seharusnya dibuat Rabu 14 Oktober, lalu PPN = 12% × 11/12 × harga jual (setara 11/111 × harga total).",
        jejakHitung: [["Harga jual = 22.200 ÷ (1 + 12% × 11/12)", "USD20.000"], ["Kurs KMK 14–20 Oktober 2026", "Rp16.386"], ["Harga jual rupiah = 20.000 × 16.386", "Rp327.720.000"], ["DPP nilai lain = 11/12 × 327.720.000", "Rp300.410.000"], ["PPN = 12% × 300.410.000", "Rp36.049.200"]],
        mengapaSalah: { A: "Memakai kurs tengah BI (Rp16.410)", B: "Menganggap USD22.200 belum termasuk PPN lalu mengalikan 11% atas harga total", D: "Memakai kurs KMK tanggal pembayaran; penyerahan terjadi lebih dulu sehingga faktur seharusnya dibuat 14 Oktober" },
        jebakan: "Harga 'termasuk PPN': keluarkan PPN dengan 11/111 setelah dikonversi dengan kurs KMK saat faktur pajak seharusnya dibuat (di sini penyerahan 14 Oktober 2026)."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A4-111", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Global Sarana Medika (PKP, distributor alat laboratorium bukan barang mewah) pada Selasa, 1 September 2026 menyerahkan 100 unit centrifuge seharga USD50.000 belum termasuk PPN kepada PT Laboratorium Nusa (PKP) dan membuat faktur pajak pada hari yang sama. Pada Rabu, 14 Oktober 2026, 20 unit (USD10.000) dikembalikan karena cacat dan pembeli membuat nota retur melalui Coretax pada tanggal itu. Data kurs per USD: kurs KMK 26 Agustus–1 September 2026 Rp16.290; kurs KMK 2–8 September 2026 Rp16.380; kurs KMK 14–20 Oktober 2026 Rp16.386; kurs tengah BI 14 Oktober 2026 Rp16.410. Pengurangan pajak keluaran PT Global Sarana Medika akibat retur tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp18.024.600, mengurangi pajak keluaran Masa Oktober 2026", B: "Rp17.919.000, mengurangi pajak keluaran Masa September 2026 melalui pembetulan", C: "Rp19.548.000, mengurangi pajak keluaran Masa Oktober 2026", D: "Rp17.919.000, mengurangi pajak keluaran Masa Oktober 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Yang dikurangkan adalah PPN atas barang yang dikembalikan sebagaimana dipungut dalam faktur semula, yaitu dengan kurs KMK saat faktur seharusnya dibuat (Selasa 1 September, periode 26 Agustus–1 September); pengurangannya dilakukan pada Masa Pajak terjadinya retur.",
        jejakHitung: [["Kurs faktur semula (Selasa 1 Sep → KMK 26 Agu–1 Sep)", "Rp16.290"], ["Harga barang diretur = 10.000 × 16.290", "Rp162.900.000"], ["PPN diretur = 12% × 11/12 × 162.900.000", "Rp17.919.000"], ["Masa pengurangan pajak keluaran", "Oktober 2026 (masa retur)"]],
        mengapaSalah: { A: "Mengonversi dengan kurs KMK tanggal nota retur; PPN yang dikembalikan adalah PPN yang dahulu dipungut dengan kurs faktur semula", B: "Retur tidak membetulkan masa faktur asal; PPN dikurangkan pada masa terjadinya retur (Pasal 5A UU PPN)", C: "Memakai 12% atas harga penuh; barang non-mewah memakai DPP nilai lain 11/12" },
        jebakan: "Retur valas: kurs faktur asal, masa retur."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PER-11/PJ/2025 (nota retur di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140, verifikasi: "◐",
      peringatan: "Pemakaian kurs faktur semula pada nota retur valuta asing diturunkan dari Pasal 5A UU PPN (yang dikurangkan adalah PPN atas BKP yang dikembalikan) dan PP 44/2022 Pasal 21; ketentuan eksplisit tentang kurs nota retur dalam PER-11/PJ/2025 belum dicek ke teks."
    },
    {
      id: "A4-112", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 3, formulirRef: "1111.induk.11", laporanUjian: ["C-2026-10"],
      stem: "Staf pajak PT Prima Kencana Logam (PKP, produsen baja lembaran bukan barang mewah) menyusun baris 'Pajak keluaran yang harus dipungut sendiri' pada SPT Masa PPN Oktober 2026. Transaksi Oktober 2026 (harga belum termasuk PPN, faktur tepat waktu): (1) penyerahan kepada PT Arta (PKP) USD30.000 pada Selasa, 13 Oktober 2026; (2) penyerahan kepada BUMN yang ditunjuk sebagai pemungut PPN USD20.000 pada Kamis, 15 Oktober 2026 (faktur kode 03); (3) penyerahan kepada PT Citra (PKP) pada Senin, 19 Oktober 2026 atas pesanan USD12.000 yang telah dibayar lunas di muka pada 22 September 2026 dan sudah difakturkan saat itu; (4) ekspor jasa konsultansi teknik kepada pelanggan di Jepang USD8.000 yang memenuhi syarat ekspor JKP; dan (5) penyerahan kepada PT Dinamika (PKP) Rp150.000.000 pada 28 Oktober 2026. Kurs per USD: KMK 7–13 Oktober Rp16.400; KMK 14–20 Oktober Rp16.386; KMK 16–22 September Rp16.396; kurs tengah BI 13 Oktober Rp16.428. Jumlah PPN pada baris tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp106.669.200", B: "Rp70.620.000", C: "Rp92.249.520", D: "Rp70.712.400" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Baris pajak keluaran yang dipungut sendiri hanya memuat faktur Masa Oktober yang PPN-nya dipungut sendiri: transaksi (1) dengan kurs KMK periode 7–13 Oktober dan transaksi (5) dalam rupiah.",
        jejakHitung: [["(1) 30.000 × 16.400 (Selasa 13 Okt masih periode 7–13 Okt)", "Rp492.000.000"], ["PPN (1) = 12% × 11/12 × 492.000.000", "Rp54.120.000"], ["(2) Kode 03: PPN dipungut dan disetor BUMN", "tidak masuk baris ini"], ["(3) Sudah difakturkan saat pelunasan di muka (Masa September)", "tidak difakturkan lagi"], ["(4) Ekspor JKP, tarif 0%", "tidak masuk baris ini"], ["PPN (5) = 12% × 11/12 × 150.000.000", "Rp16.500.000"], ["Jumlah = 54.120.000 + 16.500.000", "Rp70.620.000"]],
        mengapaSalah: { A: "Ikut menjumlahkan PPN faktur kode 03 (Rp36.049.200) yang dipungut dan disetor pemungut", C: "Memfakturkan ulang pesanan (3) saat penyerahan (Rp21.629.520), padahal PPN-nya sudah terutang dan difakturkan saat pembayaran di muka pada Masa September", D: "Mengonversi transaksi (1) dengan kurs tengah BI (Rp16.428)" },
        jebakan: "Saring dulu faktur yang PPN-nya dipungut sendiri, baru konversi dengan kurs KMK."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) dan Pasal 16A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 190, verifikasi: "◐",
      peringatan: "Nama baris 'Pajak keluaran yang harus dipungut sendiri' mengikuti susunan SPT Masa PPN 1111 yang diteruskan secara logis ke Coretax; tata letak baris Coretax belum dicek ke teks PER-11/PJ/2025."
    },
    {
      id: "A4-113", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Sentosa Kimia Pratama (PKP) menyerahkan pelarut industri (bukan barang mewah) kepada PT Cat Nusantara (PKP) pada Selasa, 8 September 2026 dan membuat faktur pajak pada hari yang sama dengan harga USD25.000; SPT Masa PPN September 2026 telah disampaikan pada 12 Oktober 2026. Pada Rabu, 14 Oktober 2026 diketahui ada salah ketik harga satuan sehingga harga yang benar USD27.000, lalu PT Sentosa membuat faktur pajak pengganti hari itu. Data kurs per USD: kurs KMK 2–8 September 2026 Rp16.380; kurs KMK 14–20 Oktober 2026 Rp16.386; kurs tengah BI 14 Oktober 2026 Rp16.410. Perlakuan yang paling tepat atas faktur pengganti tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kurs KMK 2–8 September 2026 (Rp16.380); dilaporkan dengan membetulkan SPT Masa PPN September 2026", B: "Kurs KMK 14–20 Oktober 2026 (Rp16.386); dilaporkan dalam SPT Masa PPN Oktober 2026", C: "Kurs KMK 2–8 September 2026 (Rp16.380); dilaporkan dalam SPT Masa PPN Oktober 2026", D: "Kurs tengah BI 14 Oktober 2026 (Rp16.410); dilaporkan dengan membetulkan SPT Masa PPN September 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur pengganti menggantikan faktur semula, sehingga memakai kurs KMK saat faktur semula seharusnya dibuat (8 September) dan dilaporkan pada masa faktur yang diganti melalui pembetulan SPT Masa PPN September 2026; tambahan PPN disetor sebelum pembetulan disampaikan.",
        jejakHitung: [["Saat faktur semula seharusnya dibuat", "Selasa, 8 September 2026 → KMK 2–8 Sep Rp16.380"], ["PPN faktur pengganti = 12% × 11/12 × (27.000 × 16.380)", "Rp48.648.600"], ["PPN faktur semula = 12% × 11/12 × (25.000 × 16.380)", "Rp45.045.000"], ["Tambahan PPN pada pembetulan Masa September", "Rp3.603.600"]],
        mengapaSalah: { B: "Faktur pengganti bukan transaksi baru; kurs dan masa pajaknya mengikuti faktur yang diganti", C: "Kurs sudah benar, tetapi faktur pengganti dilaporkan pada masa faktur yang diganti, bukan masa pembuatan pengganti", D: "Kurs tengah BI tidak dipakai untuk konversi PPN" },
        jebakan: "Faktur pengganti mengikuti faktur yang diganti, baik kurs maupun masa pajaknya."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PER-11/PJ/2025 (faktur pajak pengganti)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 8 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 130, verifikasi: "◐",
      peringatan: "Pemakaian kurs saat faktur semula seharusnya dibuat untuk faktur pengganti mengikuti uraian sekunder atas PER-11/PJ/2025 dan PP 44/2022 Pasal 21; bunyi persis lampiran PER-11/PJ/2025 belum dicek ke teks."
    },
    {
      id: "A4-114", topik: "A4.10", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Garuda Komponen Presisi (PKP, pembukuan rupiah sesuai SAK) menjual seluruh suku cadangnya di dalam negeri dengan harga dalam USD. Untuk Januari–September 2026, penjualan pada laporan laba rugi Rp48.312.000.000 (setiap transaksi dicatat dengan kurs tengah BI tanggal transaksi), sedangkan jumlah harga jual pada faktur pajak dan SPT Masa PPN Rp48.205.000.000 (dikonversi dengan kurs KMK saat faktur seharusnya dibuat). Tidak ada retur, uang muka, penyerahan tanpa faktur, maupun faktur terlambat, dan seluruh PPN telah disetor. Dalam ekualisasi peredaran usaha dengan DPP PPN ditemukan selisih Rp107.000.000. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Selisih Rp107.000.000 adalah penyerahan yang belum difakturkan sehingga perlu faktur tambahan dengan PPN 11% × Rp107.000.000", B: "SPT Masa PPN Januari–September dibetulkan dengan kurs tengah BI agar DPP sama dengan penjualan di laporan laba rugi", C: "Laporan keuangan dikoreksi memakai kurs KMK karena kurs pajak wajib dipakai juga dalam pembukuan", D: "Selisih timbul dari perbedaan kurs KMK (PPN) dan kurs transaksi SAK (pembukuan); cukup dijelaskan dalam rekonsiliasi" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN wajib dikonversi dengan kurs KMK saat faktur seharusnya dibuat, sedangkan pembukuan SAK mencatat penjualan dengan kurs transaksi; bila semua faktur tepat waktu dan lengkap, selisihnya murni perbedaan kurs yang menjadi pos rekonsiliasi, bukan PPN kurang bayar.",
        jejakHitung: [["Penjualan laba rugi (kurs tengah BI)", "Rp48.312.000.000"], ["Harga jual di SPT Masa PPN (kurs KMK)", "Rp48.205.000.000"], ["Selisih = 48.312.000.000 − 48.205.000.000", "Rp107.000.000 (pos rekonsiliasi kurs)"], ["PPN kurang bayar", "nihil"]],
        mengapaSalah: { A: "Selisih kurs bukan penyerahan yang terlewat; semua penyerahan sudah difakturkan tepat waktu", B: "PP 44/2022 mewajibkan kurs KMK untuk PPN; mengganti dengan kurs tengah BI justru membuat SPT salah", C: "Pembukuan mengikuti SAK (kurs transaksi); kurs KMK hanya untuk menghitung pajak" },
        jebakan: "Pada ekualisasi valas, selisih kurs KMK vs kurs pembukuan adalah pos rekonsiliasi, bukan temuan PPN."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 28 UU KUP (pembukuan dalam rupiah, taat asas)", berlakuSejak: "2008-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-115", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Rancang Cipta Digital (PKP) memberikan jasa konsultansi teknologi informasi kepada Orchid Systems Pte Ltd di Singapura; pekerjaan dilakukan dari Jakarta, hasilnya dimanfaatkan sepenuhnya di Singapura, dan kontrak serta bukti pembayaran tersedia sehingga memenuhi syarat ekspor JKP. Tagihan USD40.000 diterbitkan Rabu, 9 September 2026 (kurs KMK 9–15 September Rp16.352) dan dilunasi 2 November 2026 ketika kurs tengah BI Rp16.290, sehingga perusahaan membukukan rugi selisih kurs. Untuk pekerjaan ini perusahaan membeli lisensi dan jasa subkontrak dalam negeri dengan PPN masukan Rp22.000.000. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPN 0% atas ekspor JKP; PPN masukan Rp22.000.000 tidak dapat dikreditkan karena tidak ada pajak keluaran yang dipungut", B: "Terutang PPN 12% × 11/12 × USD40.000 × Rp16.352 karena pekerjaan dilakukan di Indonesia; rugi selisih kurs tidak memengaruhi PPN", C: "PPN 0% dengan pemberitahuan ekspor JKP di Coretax; PPN masukan Rp22.000.000 dapat dikreditkan; rugi selisih kurs tidak memengaruhi PPN", D: "PPN 0%, tetapi PPN masukan baru dapat dikreditkan setelah pelunasan diterima, dan rugi selisih kurs mengurangi nilai ekspor" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Ekspor JKP yang memenuhi syarat dikenai tarif 0% dengan pemberitahuan ekspor JKP (dokumen yang dipersamakan dengan faktur, dibuat di Coretax). Tarif 0% bukan pembebasan, sehingga PPN masukan terkait tetap dapat dikreditkan; selisih kurs saat pelunasan adalah urusan PPh, bukan PPN.",
        jejakHitung: [],
        mengapaSalah: { A: "Tarif 0% bukan pembebasan; PPN masukan atas perolehan untuk ekspor tetap dapat dikreditkan", B: "Tempat pengerjaan tidak menentukan; jasa yang dimanfaatkan di luar Daerah Pabean dan memenuhi syarat ekspor JKP dikenai tarif 0%", D: "Pengkreditan PPN masukan tidak menunggu pelunasan piutang ekspor, dan selisih kurs tidak mengubah nilai ekspor yang telah diberitahukan" },
        jebakan: "Tarif 0% tidak sama dengan dibebaskan, dan selisih kurs bukan urusan PPN."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf h, Pasal 7 ayat (2), dan Pasal 9 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 32/PMK.010/2019 (batasan ekspor JKP)", berlakuSejak: null }, { pasal: "PER-11/PJ/2025 (pemberitahuan ekspor JKP dibuat di Coretax)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Pembuatan pemberitahuan ekspor JKP melalui modul e-Faktur Coretax mengikuti uraian sekunder atas PER-11/PJ/2025; pasal persisnya belum dicek ke teks. Pemenuhan syarat ekspor JKP menurut PMK 32/PMK.010/2019 diasumsikan sesuai stem."
    },
    {
      id: "A4-116", topik: "A4.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Delta Fluida Indonesia (PKP) mencatat empat peristiwa dalam USD pada Oktober 2026: (1) menyerahkan pompa industri kepada PT Xeno (PKP) pada Selasa, 13 Oktober 2026, tetapi faktur pajak baru dibuat Rabu, 14 Oktober 2026; (2) menerima uang muka 30% dari PT Yasa (PKP) pada Selasa, 6 Oktober 2026 atas pompa yang diserahkan Kamis, 8 Oktober 2026 (yang dinilai hanya PPN atas uang muka); (3) mengimpor suku cadang dengan PIB yang didaftarkan dan pungutannya dilunasi Rabu, 7 Oktober 2026 (bill of lading 29 September 2026); dan (4) memanfaatkan jasa konsultan teknik dari Jerman yang mulai dipakai secara nyata pada Jumat, 9 Oktober 2026, sedangkan tagihannya diterima dan dibayar pada Rabu, 14 Oktober 2026. Kurs KMK berlaku mingguan dari Rabu sampai Selasa. PPN atas peristiwa yang dikonversi dengan kurs KMK periode 7–13 Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (3) saja", B: "(1), (3), dan (4)", C: "(2), (3), dan (4)", D: "(3) dan (4) saja" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Kurs mengikuti saat faktur atau dokumen yang dipersamakan seharusnya dibuat: (1) tanggal penyerahan 13 Oktober, (3) tanggal PIB 7 Oktober, dan (4) saat jasa mulai dimanfaatkan 9 Oktober karena mendahului tagihan dan pembayaran; (2) uang muka diterima Selasa 6 Oktober yang masih termasuk periode 30 September–6 Oktober.",
        jejakHitung: [["(1) Seharusnya difakturkan Selasa 13 Okt", "periode 7–13 Okt (ya)"], ["(2) Uang muka diterima Selasa 6 Okt", "periode 30 Sep–6 Okt (tidak)"], ["(3) PIB Rabu 7 Okt", "periode 7–13 Okt (ya)"], ["(4) Mulai dimanfaatkan Jumat 9 Okt, sebelum tagihan dan pembayaran", "periode 7–13 Okt (ya)"]],
        mengapaSalah: { A: "Mengira PPN jasa luar negeri memakai kurs tanggal pembayaran; pembayaran 14 Oktober terjadi setelah jasa mulai dimanfaatkan", C: "Memasukkan Selasa 6 Oktober ke periode 7–13 Oktober dan menggeser (1) ke tanggal faktur dibuat", D: "Memakai kurs saat faktur dibuat (14 Oktober) untuk (1); sejak PP 44/2022 yang dipakai kurs saat faktur seharusnya dibuat" },
        jebakan: "Tentukan dulu tanggal seharusnya, lalu cocokkan dengan periode KMK Rabu–Selasa."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 11 ayat (1) dan (2) serta Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "KMK nilai kurs mingguan (berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Saat terutang PPN pemanfaatan JKP dari luar Daerah Pabean (saat yang paling dahulu di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar) mengikuti uraian sekunder DJP/DDTC atas PP 44/2022; nomor pasalnya belum dicek ke teks. Pada peristiwa (4) pemakaian nyata 9 Oktober adalah peristiwa paling awal, sehingga jawaban tidak bergantung pada urutan pemicu lainnya."
    },
    {
      id: "A4-117", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Prima Logam Sejahtera (PKP) menyerahkan pelat baja (bukan barang mewah) senilai USD18.000 belum termasuk PPN kepada PT Rangka Konstruksi (PKP) pada Selasa, 20 Oktober 2026 dan membuat faktur pajak pada hari yang sama. Ketika faktur dibuat, KMK nilai kurs untuk periode 21–27 Oktober 2026 sudah diterbitkan. Data kurs per USD: kurs KMK 14–20 Oktober 2026 Rp16.386; kurs KMK 21–27 Oktober 2026 Rp16.358; kurs tengah BI 20 Oktober 2026 Rp16.402; pembayaran diterima 4 November 2026 ketika kurs KMK 4–10 November 2026 Rp16.300. Kurs untuk merupiahkan PPN dalam faktur pajak tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurs KMK periode 21–27 Oktober 2026 (Rp16.358), karena merupakan KMK terbaru yang sudah terbit saat faktur dibuat", B: "Kurs tengah BI 20 Oktober 2026 (Rp16.402), karena dipakai untuk mencatat penjualan", C: "Kurs KMK periode 14–20 Oktober 2026 (Rp16.386), karena periode itu masih berlaku pada Selasa, 20 Oktober 2026", D: "Kurs KMK periode 4–10 November 2026 (Rp16.300), karena PPN baru dibayar pembeli pada saat pelunasan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPN dalam valuta asing dikonversi dengan kurs KMK yang berlaku saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21), di sini saat penyerahan Selasa, 20 Oktober 2026. Periode KMK berlaku Rabu sampai Selasa, sehingga 20 Oktober masih memakai kurs periode 14–20 Oktober (Rp16.386), walaupun KMK periode berikutnya sudah terbit.",
        jejakHitung: [["Saat faktur pajak seharusnya dibuat", "Penyerahan Selasa, 20 Oktober 2026"], ["Periode KMK yang mencakup tanggal itu", "14–20 Oktober 2026 → Rp16.386"]],
        mengapaSalah: { A: "Kurs dipilih menurut periode berlakunya, bukan menurut tanggal terbit KMK; periode 21–27 Oktober baru berlaku mulai Rabu", B: "Kurs tengah BI adalah kurs pembukuan, bukan kurs untuk PPN", D: "Faktur pajak seharusnya dibuat saat penyerahan, bukan saat pelunasan; kurs pelunasan tidak mengubah PPN dalam faktur" },
        jebakan: "Selasa adalah hari terakhir periode KMK; kurs dipilih menurut periode berlakunya, bukan tanggal terbitnya."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 70, verifikasi: "✅"
    },
    {
      id: "A4-118", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Sarana Pompa Utama (PKP) pada Kamis, 15 Oktober 2026 menyerahkan pompa air industri (bukan barang mewah) seharga USD10.000 belum termasuk PPN kepada PT Tirta Olahan Nusantara (PKP, bukan pemungut PPN) dan membuat faktur pajak pada hari yang sama. Data kurs per USD: kurs KMK 7–13 Oktober 2026 Rp16.400; kurs KMK 14–20 Oktober 2026 Rp16.386; kurs tengah BI 15 Oktober 2026 Rp16.415. PPN dalam rupiah yang tercantum dalam faktur pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp18.024.600", B: "Rp18.056.500", C: "Rp19.663.200", D: "Rp18.040.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Harga jual valas dirupiahkan dengan kurs KMK yang berlaku saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21): penyerahan Kamis, 15 Oktober 2026 termasuk periode 14–20 Oktober (Rp16.386). Barang bukan barang mewah, sehingga PPN = 12% × DPP nilai lain 11/12 × harga jual (setara 11%).",
        jejakHitung: [["Kurs KMK periode 14–20 Oktober 2026 (penyerahan Kamis, 15 Oktober)", "Rp16.386"], ["Harga jual = 10.000 × 16.386", "Rp163.860.000"], ["DPP nilai lain = 11/12 × 163.860.000", "Rp150.205.000"], ["PPN = 12% × 150.205.000", "Rp18.024.600"]],
        mengapaSalah: { B: "Memakai kurs tengah BI; kurs itu untuk pembukuan, bukan untuk PPN", C: "Memakai 12% atas harga jual penuh; barang non-mewah memakai DPP nilai lain 11/12", D: "Memakai kurs KMK periode 7–13 Oktober; 15 Oktober sudah masuk periode 14–20 Oktober" },
        jebakan: "Cukup dua langkah: kurs KMK periode penyerahan, lalu 12% × 11/12."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A4-119", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Staf baru bagian pembelian PT Pangan Jaya (PKP) menyusun pedoman internal tentang faktur pajak, baik yang diterima dari pemasok maupun yang diterbitkan perusahaan di Coretax. Ia mengajukan empat rumusan kepada manajer pajak. Rumusan yang tepat mengenai fungsi faktur pajak adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Faktur pajak adalah bukti bahwa PPN telah disetor penjual ke kas negara, sehingga pembeli baru boleh mengkreditkan PM setelah memastikan NTPN penjual",
        B: "Faktur pajak adalah bukti pungutan PPN yang dibuat PKP penjual atas penyerahan BKP/JKP dan sekaligus sarana bagi PKP pembeli untuk mengkreditkan Pajak Masukan, sepanjang faktur memenuhi persyaratan formal dan material",
        C: "Faktur pajak hanya wajib dibuat bila pembelinya PKP; atas penyerahan kepada pembeli bukan PKP tidak perlu dibuat faktur",
        D: "Faktur pajak menggantikan invoice komersial, sehingga PKP dilarang menerbitkan invoice terpisah untuk penyerahan yang sama"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Faktur pajak berfungsi sebagai bukti pungutan PPN oleh PKP penjual dan sebagai sarana pengkreditan PM bagi PKP pembeli, sepanjang memenuhi persyaratan formal dan material.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penyetoran dibuktikan NTPN/bukti penerimaan negara milik penjual; faktur adalah bukti pungutan, dan pengkreditan PM tidak bergantung pada NTPN penjual.",
          C: "PKP wajib membuat faktur untuk setiap penyerahan, termasuk kepada pembeli bukan PKP (dengan identitas NIK/paspor atau ketentuan pedagang eceran).",
          D: "Faktur pajak adalah dokumen perpajakan; invoice komersial tetap boleh diterbitkan."
        },
        jebakan: "Menyamakan faktur pajak dengan bukti setor."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) dan (9) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (8) huruf f UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A4-120", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Baja Ringan Nusantara (PKP) mengkreditkan dua faktur pajak dalam SPT Masa PPN Juni 2026. Faktur (1) dari CV Sinar Logam memuat seluruh keterangan Pasal 13 ayat (5) dengan PPN Rp55.000.000, tetapi pemeriksaan membuktikan CV Sinar Logam tidak pernah menyerahkan barang dan uang pembayaran dikembalikan kepada PT Baja melalui pihak ketiga. Faktur (2) dari PT Kawat Prima memuat PPN Rp22.000.000 atas penyerahan yang benar-benar terjadi, tetapi kolom identitas pembeli berisi NPWP perusahaan lain akibat salah ketik. Pajak Masukan dari kedua faktur yang dapat dikreditkan PT Baja pada Masa Juni 2026 dan konsekuensinya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp77.000.000; kedua faktur sah karena telah disetujui Coretax",
        B: "Rp0; faktur (1) tidak memenuhi syarat material sehingga PM-nya tidak dapat dikreditkan dan penerbit maupun pengguna yang sengaja diancam pidana Pasal 39A UU KUP; faktur (2) cacat formal karena identitas pembeli salah sehingga PM baru dapat dikreditkan setelah penjual memperbaiki fakturnya",
        C: "Rp55.000.000; faktur (1) memenuhi syarat formal sehingga dapat dikreditkan, sedangkan faktur (2) tidak",
        D: "Rp22.000.000; faktur (2) dapat dikreditkan karena penyerahan benar-benar terjadi walaupun NPWP pembeli tertulis milik perusahaan lain"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur harus memenuhi syarat formal dan material sekaligus. Faktur (1) lengkap secara formal tetapi tidak berdasarkan transaksi sebenarnya (gagal material); faktur (2) atas transaksi nyata tetapi identitas pembelinya salah (gagal formal). Keduanya tidak dapat dikreditkan sebagaimana adanya.",
        jejakHitung: [["Faktur (1): gagal syarat material", "Rp0"], ["Faktur (2): gagal syarat formal (sebelum diperbaiki)", "Rp0"]],
        mengapaSalah: {
          A: "Persetujuan Coretax hanya validasi administratif; tidak menjamin kebenaran material transaksi.",
          C: "Kelengkapan formal tidak menyelamatkan faktur yang tidak didukung penyerahan sebenarnya.",
          D: "Faktur dengan identitas pembeli pihak lain tidak dapat dikreditkan oleh PT Baja sebelum diperbaiki penjual."
        },
        jebakan: "Menganggap faktur yang disetujui sistem pasti dapat dikreditkan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf f dan Pasal 13 ayat (5) dan (9) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 39A UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-121", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Sinar Elektronik Prima (PKP) menyerahkan 200 unit pendingin ruangan kepada PT Toko Jaya Abadi (PKP) pada 12 Agustus 2026. Karena kesalahan sistem, atas penyerahan yang sama terbit dua faktur pajak dengan nilai identik (PPN masing-masing Rp33.000.000). Keduanya disetujui DJP, dilaporkan dalam SPT Masa PPN Agustus 2026 PT Sinar, dan dikreditkan PT Toko Jaya pada Masa Agustus 2026. Kesalahan ditemukan pada 15 Oktober 2026. Tindakan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PT Toko Jaya membuat dokumen retur atas faktur kedua pada Masa Oktober 2026 sehingga PK dan PM berkurang pada masa itu",
        B: "PT Sinar membuat faktur pajak pengganti atas faktur kedua dengan DPP dan PPN nol, tanpa membetulkan SPT Masa",
        C: "PT Sinar membatalkan faktur kedua di Coretax dan membetulkan SPT Masa PPN Agustus 2026; PT Toko Jaya membetulkan SPT Masa PPN Agustus 2026 untuk mengurangi PM sebesar Rp33.000.000",
        D: "PT Sinar cukup mengurangkan PK Rp33.000.000 pada SPT Masa PPN Oktober 2026 tanpa mengubah faktur"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Faktur kedua tidak didasari penyerahan apa pun, sehingga harus dibatalkan. Karena sudah dilaporkan, SPT Masa PPN Agustus 2026 penjual dibetulkan, dan pembeli juga membetulkan SPT Masa Agustus untuk mengurangi PM yang telanjur dikreditkan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Retur hanya untuk BKP yang benar-benar dikembalikan; di sini tidak ada barang kedua yang diserahkan.",
          B: "Faktur pengganti dipakai untuk memperbaiki keterangan transaksi yang ada, bukan meniadakan faktur atas transaksi yang tidak pernah terjadi; pembetulan SPT tetap diperlukan.",
          D: "Koreksi atas faktur masa lalu dilakukan pada masa faktur itu, bukan dengan mengurangi PK masa berjalan."
        },
        jebakan: "Memakai retur atau pengurangan di masa berjalan untuk faktur yang seharusnya dibatalkan."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (pembatalan faktur dan pembetulan SPT Masa PPN)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 8 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 13 ayat (9) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-122", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Kencana Garmen (PKP) membeli kain dari PT Tenun Prima (PKP) pada April 2026 dengan PPN dalam faktur Rp11.000.000 dan telah mengkreditkannya pada Masa April 2026. Pada 18 Mei 2026 PT Kencana Garmen mengembalikan 40% kain karena cacat dan membuat dokumen retur di Coretax pada bulan itu. Pada Masa Mei 2026 PT Kencana Garmen mempunyai PPN Keluaran Rp80.000.000 dan Pajak Masukan atas perolehan Mei yang dapat dikreditkan Rp50.000.000. PPN kurang bayar PT Kencana Garmen Masa Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp30.000.000, dan SPT Masa April 2026 dibetulkan untuk mengurangi PM Rp4.400.000",
        B: "Rp34.400.000",
        C: "Rp25.600.000",
        D: "Rp41.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Retur mengurangi PM pembeli pada Masa Pajak terjadinya pengembalian (Mei 2026), sebesar PPN atas barang yang dikembalikan (40% × Rp11.000.000).",
        jejakHitung: [["PPN atas retur: 40% × Rp11.000.000", "Rp4.400.000"], ["PM Mei setelah retur: 50.000.000 − 4.400.000", "Rp45.600.000"], ["Kurang bayar: 80.000.000 − 45.600.000", "Rp34.400.000"]],
        mengapaSalah: {
          A: "Retur tidak dilakukan dengan membetulkan masa perolehan; pengurangan PM dilakukan pada masa retur.",
          C: "PPN atas retur justru mengurangi PM, bukan menambahnya.",
          D: "Hanya bagian yang dikembalikan (40%) yang mengurangi PM, bukan seluruh PPN faktur April."
        },
        jebakan: "Membetulkan masa faktur semula atau mengurangkan seluruh PPN faktur."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PER-11/PJ/2025 (dokumen retur Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-123", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Pada Masa Pajak September 2026 terjadi empat penyerahan barang di Surabaya: (1) Tuan Ahmad, manajer pemasaran yang berstatus pegawai tetap PT Sentosa, menjual mobil pribadinya kepada tetangganya seharga Rp180.000.000; (2) CV Mebel Jati (PKP, produsen mebel) menjual mesin serut bekas yang dipakai dalam produksi dan PM perolehannya dahulu dikreditkan, seharga Rp40.000.000; (3) Ny. Sari (PKP orang pribadi, pemilik toko bahan bangunan) menjual lemari dan kulkas rumah tangganya saat pindah rumah, barang yang tidak pernah dipakai atau dicatat dalam usaha tokonya; (4) PT Dealer Motor Jaya (PKP) menjual mobil dari persediaan dagangannya. Penyerahan yang terutang PPN adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "(2) dan (4)",
        B: "(2), (3), dan (4)",
        C: "(1), (2), (3), dan (4)",
        D: "(4) saja"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penyerahan terutang bila dilakukan pengusaha dalam kegiatan usaha atau pekerjaannya. (4) adalah barang dagangan; (2) aktiva usaha yang semula tidak untuk dijual tetap terutang melalui Pasal 16D. (1) dilakukan pegawai di luar kegiatan usaha, dan (3) menyangkut barang pribadi yang tidak pernah dipakai dalam usaha, sehingga keduanya tidak terutang walaupun Ny. Sari berstatus PKP.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Status PKP Ny. Sari tidak membuat penjualan barang rumah tangganya terutang; penyerahan itu di luar kegiatan usaha.",
          C: "Tuan Ahmad bukan pengusaha untuk penjualan mobil pribadi; penyerahan di luar kegiatan usaha tidak terutang.",
          D: "Penyerahan aktiva usaha yang PM-nya dahulu dikreditkan terutang PPN menurut Pasal 16D."
        },
        jebakan: "Menilai terutang tidaknya PPN dari status PKP penjual, bukan dari hubungan penyerahan dengan kegiatan usaha."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf a UU PPN dan penjelasannya", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 1 angka 14 UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16D UU PPN", berlakuSejak: "2022-04-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-124", topik: "A4.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Hendra adalah PKP orang pribadi pemilik toko elektronik 'Hendra Elektronik'. Pada Masa Pajak September 2026 ia melakukan: (1) penjualan barang dagangan elektronik (bukan barang mewah) Rp300.000.000; (2) jasa pemasangan pendingin ruangan kepada pelanggan Rp10.000.000; (3) penjualan etalase kaca bekas toko, yang dicatat sebagai harta usaha dan PM perolehannya dahulu dikreditkan, Rp20.000.000; (4) penjualan mobil keluarga yang dibeli pada 2021 untuk keperluan keluarga, tidak pernah dicatat sebagai harta usaha dan PM-nya tidak pernah dikreditkan, Rp200.000.000. Semua harga belum termasuk PPN; tarif 12% dengan DPP nilai lain 11/12. PPN Keluaran Masa September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp36.300.000",
        B: "Rp58.300.000",
        C: "Rp34.100.000",
        D: "Rp39.600.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Yang terutang adalah penyerahan dalam kegiatan usaha: barang dagangan, jasa pemasangan, dan aktiva usaha (Pasal 16D). Mobil keluarga yang tidak pernah dipakai dalam usaha tidak terutang.",
        jejakHitung: [["DPP terutang: 300.000.000 + 10.000.000 + 20.000.000", "Rp330.000.000"], ["DPP nilai lain 11/12", "Rp302.500.000"], ["PPN 12%", "Rp36.300.000"]],
        mengapaSalah: {
          B: "Memasukkan mobil keluarga Rp200.000.000 yang diserahkan di luar kegiatan usaha.",
          C: "Mengabaikan penjualan etalase; aktiva usaha yang PM-nya dikreditkan terutang menurut Pasal 16D.",
          D: "Memakai 12% atas harga penuh tanpa DPP nilai lain 11/12."
        },
        jebakan: "Menganggap semua penjualan oleh PKP terutang PPN, atau sebaliknya melupakan Pasal 16D."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf a dan c UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16D UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-125", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Klinik Medika Utama (PKP) hanya menyerahkan jasa pelayanan kesehatan medis yang dibebaskan dari PPN, sehingga Pajak Masukannya tidak dapat dikreditkan dan dikapitalisasi ke harga perolehan harta. Pada Juli 2026 klinik membeli alat laboratorium (bukan barang mewah) dari PT Alkes Prima (PKP) dengan harga Rp200.000.000 dan PPN Rp22.000.000 (12% × DPP nilai lain 11/12), lalu mencatat harga perolehan Rp222.000.000. Pada 10 Agustus 2026 klinik mengembalikan 25% alat karena tidak sesuai spesifikasi dan dokumen retur dibuat di Coretax pada bulan itu. Harga perolehan alat setelah retur dan perlakuan PPN bagi PT Alkes Prima adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp166.500.000; PT Alkes Prima mengurangkan PK Rp5.500.000 pada Masa Pajak Agustus 2026",
        B: "Rp172.000.000; klinik mengkreditkan PPN atas retur Rp5.500.000 sebagai Pajak Masukan Masa Agustus 2026",
        C: "Rp150.000.000; PT Alkes Prima mengurangkan PK Rp5.500.000 pada Masa Pajak Agustus 2026",
        D: "Rp166.500.000; PT Alkes Prima membetulkan SPT Masa PPN Juli 2026 untuk mengurangi PK Rp5.500.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Karena PM semula dikapitalisasi, PPN atas BKP yang dikembalikan mengurangi harga perolehan pembeli bersama harga barangnya; penjual mengurangkan PK pada Masa Pajak terjadinya pengembalian.",
        jejakHitung: [["Harga barang yang dikembalikan: 25% × Rp200.000.000", "Rp50.000.000"], ["PPN atas retur: 25% × Rp22.000.000", "Rp5.500.000"], ["Harga perolehan setelah retur: 222.000.000 − 55.500.000", "Rp166.500.000"]],
        mengapaSalah: {
          B: "PM klinik tidak dapat dikreditkan sejak awal; PPN atas retur mengurangi harga perolehan, bukan menjadi PM.",
          C: "Bagian PPN yang dikapitalisasi tetap melekat pada 75% alat yang tidak dikembalikan; harga perolehan bukan sekadar DPP sisa.",
          D: "Retur dikurangkan pada masa terjadinya pengembalian, tanpa membetulkan masa penyerahan."
        },
        jebakan: "Memperlakukan retur pembeli yang PM-nya dikapitalisasi seperti pembeli yang mengkreditkan PM."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 16B ayat (3) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A4-126", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 13 ayat (1a) UU PPN (parafrase): Faktur Pajak harus dibuat pada saat penyerahan BKP dan/atau JKP; saat penerimaan pembayaran dalam hal pembayaran diterima sebelum penyerahan; saat penerimaan pembayaran termin dalam hal terjadi penyerahan sebagian tahap pekerjaan; atau saat lain yang diatur dengan Peraturan Menteri Keuangan.",
      stem: "PT Nusa Sistem Integrasi (PKP) mengikat kontrak jasa implementasi sistem ERP dengan PT Kencana Agro Lestari (PKP) senilai USD120.000 belum termasuk PPN. Kontrak ditandatangani Rabu, 2 September 2026, dengan tiga termin: 30%, 40%, dan 30%. Untuk termin kedua (40% = USD48.000), berita acara kemajuan pekerjaan 70% ditandatangani, tagihan termin diterbitkan, dan pembayaran termin diterima pada hari yang sama, Kamis, 15 Oktober 2026; seluruh pekerjaan diperkirakan selesai pada 5 November 2026. Data kurs per USD: kurs KMK 2–8 September 2026 Rp16.380; kurs KMK 14–20 Oktober 2026 Rp16.386; kurs tengah BI 15 Oktober 2026 Rp16.415; kurs KMK 4–10 November 2026 Rp16.300. Berdasarkan kutipan tersebut, PPN dalam faktur pajak atas termin kedua adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp86.486.400", B: "Rp86.671.200", C: "Rp86.064.000", D: "Rp86.518.080" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Faktur atas termin dibuat saat penerimaan pembayaran termin (Kamis, 15 Oktober 2026), sehingga nilai termin dalam USD dirupiahkan dengan kurs KMK periode 14–20 Oktober 2026 (PP 44/2022 Pasal 21), lalu PPN = 12% × 11/12 × harga termin.",
        jejakHitung: [["Saat faktur termin kedua: penerimaan pembayaran termin Kamis, 15 Okt 2026 → kurs KMK 14–20 Okt", "Rp16.386"], ["Harga termin = 48.000 × 16.386", "Rp786.528.000"], ["DPP nilai lain = 11/12 × 786.528.000", "Rp720.984.000"], ["PPN = 12% × 720.984.000", "Rp86.518.080"]],
        mengapaSalah: {
          A: "Memakai kurs KMK pada tanggal kontrak ditandatangani (Rp16.380); penandatanganan kontrak bukan saat faktur termin seharusnya dibuat",
          B: "Memakai kurs tengah BI (Rp16.415); kurs tengah BI untuk pembukuan, sedangkan PPN memakai kurs KMK",
          C: "Menunda konversi sampai seluruh pekerjaan selesai (kurs Rp16.300); setiap termin difakturkan dan dirupiahkan saat pembayaran terminnya diterima"
        },
        jebakan: "Pada kontrak bertermin, kurs mengikuti saat tiap faktur termin seharusnya dibuat, bukan tanggal kontrak atau tanggal pekerjaan selesai."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "KMK nilai kurs mingguan (berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-127", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Samudra Rekreasi Prima (PKP, importir umum) mengimpor satu unit barang yang tergolong mewah dari Italia dengan nilai pabean CIF EUR40.000. Bill of lading bertanggal Kamis, 1 Oktober 2026; PIB didaftarkan serta bea masuk 10%, PPN impor, dan PPnBM impor dilunasi pada Senin, 19 Oktober 2026; utang kepada pemasok dibayar 30 November 2026. Tarif PPnBM untuk kelompok barang tersebut (diberikan) 20% dengan dasar pengenaan sama dengan nilai impor; tidak ada pungutan pabean lain dan tidak ada fasilitas. Data kurs per EUR: kurs KMK 30 September–6 Oktober 2026 Rp19.050; kurs KMK 14–20 Oktober 2026 Rp19.120; kurs tengah BI 19 Oktober 2026 Rp19.180. PPN impor dan PPnBM impor yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPN Rp92.540.800; PPnBM Rp168.256.000", B: "PPN Rp101.270.400; PPnBM Rp168.784.000", C: "PPN Rp100.953.600; PPnBM Rp168.256.000", D: "PPN Rp100.584.000; PPnBM Rp167.640.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Nilai impor (CIF + bea masuk) dirupiahkan dengan kurs KMK yang berlaku pada tanggal PIB (dokumen yang dipersamakan dengan faktur pajak). Untuk barang mewah, PPN 12% dikenakan atas nilai impor penuh tanpa DPP nilai lain 11/12, dan PPnBM dihitung dari nilai impor yang sama.",
        jejakHitung: [["Kurs KMK tanggal PIB Senin, 19 Okt 2026 (periode 14–20 Okt)", "Rp19.120"], ["CIF rupiah = 40.000 × 19.120", "Rp764.800.000"], ["Bea masuk 10% × 764.800.000", "Rp76.480.000"], ["Nilai impor = 764.800.000 + 76.480.000", "Rp841.280.000"], ["PPN impor = 12% × 841.280.000 (barang mewah, tanpa 11/12)", "Rp100.953.600"], ["PPnBM impor = 20% × 841.280.000", "Rp168.256.000"]],
        mengapaSalah: {
          A: "Memakai DPP nilai lain 11/12 (beban 11%); barang mewah, termasuk impornya, dikenai 12% atas nilai impor penuh (PMK 131/2024 Pasal 2)",
          B: "Memakai kurs tengah BI (Rp19.180); pungutan impor dihitung dengan kurs KMK",
          D: "Memakai kurs KMK pada tanggal bill of lading (Rp19.050); yang menentukan adalah tanggal PIB"
        },
        jebakan: "Impor barang mewah: kurs KMK tanggal PIB, PPN 12% atas nilai impor penuh, dan PPnBM tidak masuk DPP PPN."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU PPN (definisi nilai impor) dan Pasal 4 ayat (1) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 5 ayat (1) dan Pasal 8 UU PPN (PPnBM atas impor barang mewah)", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 2 (barang mewah 12% atas DPP penuh)", berlakuSejak: "2025-01-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-128", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Kencana Pangan Utama (PKP, produsen makanan ringan kemasan yang seluruh penyerahannya terutang PPN; pembukuan rupiah sesuai SAK) membeli mesin pengemas makanan ringan (bukan barang mewah) dari PT Mesindo Agro (PKP) seharga USD30.000 belum termasuk PPN. Mesin diserahkan dan faktur pajak dibuat penjual pada Selasa, 13 Oktober 2026, tetapi faktur baru diperiksa bagian pajak pembeli setelah SPT Masa PPN Oktober 2026 disampaikan, sehingga PM-nya belum dikreditkan pada Masa Oktober, belum dibebankan sebagai biaya maupun ditambahkan ke harga perolehan mesin, dan belum dilakukan pemeriksaan; semua PM memenuhi syarat dikreditkan. Harga dan PPN dilunasi Kamis, 5 November 2026; di pembukuan, utang dicatat dengan kurs tengah BI 13 Oktober 2026 Rp16.420. Pada Masa November 2026 diterima pula faktur pajak pembelian bahan baku dalam rupiah dengan PPN Rp25.000.000. Data kurs per USD: kurs KMK 7–13 Oktober 2026 Rp16.400; kurs KMK 4–10 November 2026 Rp16.300. Pajak Masukan yang dapat dikreditkan dalam SPT Masa PPN November 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp78.790.000", B: "Rp79.120.000", C: "Rp79.186.000", D: "Rp25.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PM yang dikreditkan pembeli adalah PPN yang tercantum dalam faktur pajak, yaitu yang dirupiahkan penjual dengan kurs KMK saat faktur seharusnya dibuat (7–13 Oktober). PM itu boleh dikreditkan pada Masa November karena masih dalam 3 Masa Pajak setelah masa faktur, belum dibiayakan atau dikapitalisasi, dan belum diperiksa; kursnya tidak ikut berubah.",
        jejakHitung: [["Harga dalam faktur = 30.000 × 16.400 (kurs KMK 7–13 Okt)", "Rp492.000.000"], ["PPN dalam faktur = 12% × 11/12 × 492.000.000", "Rp54.120.000"], ["PM bahan baku (rupiah)", "Rp25.000.000"], ["PM dikreditkan Masa November = 54.120.000 + 25.000.000", "Rp79.120.000"]],
        mengapaSalah: {
          A: "Menghitung ulang PPN dengan kurs saat pelunasan (Rp16.300); PM mengikuti PPN dalam faktur, bukan kurs pembayaran",
          C: "Memakai kurs tengah BI pencatatan utang (Rp16.420); kurs pembukuan tidak dipakai untuk PPN",
          D: "PM yang belum dikreditkan pada masa faktur dapat dikreditkan paling lama 3 Masa Pajak berikutnya sepanjang belum dibiayakan atau dikapitalisasi dan belum dilakukan pemeriksaan"
        },
        jebakan: "Pembeli mengkreditkan PPN rupiah sebagaimana tercantum dalam faktur valas, walaupun dikreditkan pada masa lain dan dilunasi dengan kurs berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan ayat (9) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-129", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Medika Instrumen Nusantara (PKP) pada Selasa, 22 September 2026 menyerahkan alat uji laboratorium (bukan barang mewah) seharga USD35.000 belum termasuk PPN kepada PT Rumah Sakit Persada (BUMN yang ditunjuk sebagai pemungut PPN) dan membuat faktur pajak dengan kode transaksi 03 pada hari yang sama. Tagihan dibayar BUMN pada Rabu, 28 Oktober 2026, dan pada saat itu BUMN memungut PPN. Data kurs per USD: kurs KMK 16–22 September 2026 Rp16.396; kurs KMK 23–29 September 2026 Rp16.410; kurs tengah BI 22 September 2026 Rp16.430; kurs KMK 28 Oktober–3 November 2026 Rp16.342. Jumlah PPN yang dipungut BUMN serta perlakuan faktur tersebut dalam SPT Masa PPN PT Medika adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp62.916.700, sesuai kurs KMK saat pembayaran oleh pemungut; faktur dilaporkan dalam SPT Masa PPN Oktober 2026",
        B: "Rp63.255.500; faktur dilaporkan dalam SPT Masa PPN September 2026 tanpa setoran oleh PT Medika",
        C: "Rp63.178.500; faktur dilaporkan dalam SPT Masa PPN September 2026 tanpa setoran oleh PT Medika",
        D: "Rp63.124.600; faktur dilaporkan dalam SPT Masa PPN September 2026 tanpa setoran oleh PT Medika"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "PPN dalam faktur kode 03 dirupiahkan dengan kurs KMK saat faktur seharusnya dibuat (penyerahan Selasa, 22 September 2026 → periode 16–22 September). Pemungut memungut PPN sebesar yang tercantum dalam faktur walaupun membayar lebih dari sebulan kemudian, sedangkan PKP penjual melaporkan faktur pada Masa September tanpa menyetor PPN-nya.",
        jejakHitung: [["Kurs KMK 16–22 Sep 2026 (penyerahan Selasa, 22 Sep)", "Rp16.396"], ["Harga jual = 35.000 × 16.396", "Rp573.860.000"], ["PPN = 12% × 11/12 × 573.860.000 = 11% × 573.860.000", "Rp63.124.600"]],
        mengapaSalah: {
          A: "Saat pembayaran oleh pemungut tidak menggeser kurs dan masa faktur; faktur dibuat dan dilaporkan pada saat penyerahan (September)",
          B: "Memakai kurs tengah BI (Rp16.430); kurs tengah BI adalah kurs pembukuan",
          C: "Memakai kurs KMK periode 23–29 September; Selasa, 22 September masih termasuk periode Rabu 16–Selasa 22 September"
        },
        jebakan: "Pemungut memungut PPN sesuai faktur valas (kurs KMK saat faktur), bukan kurs saat pembayaran."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 13 ayat (1a) dan Pasal 16A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "KMK nilai kurs mingguan (berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A4-130", topik: "A4.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Dalam rapat penutupan buku 31 Desember 2026, manajer pajak PT Cahaya Elektrik Nusantara (PKP, pembukuan rupiah sesuai SAK; banyak transaksi dalam USD) menerima empat pernyataan dari tim akuntansi: (1) PPN atas penyerahan dalam USD dirupiahkan dengan kurs KMK yang berlaku saat faktur pajak seharusnya dibuat, walaupun penjualannya dibukukan dengan kurs transaksi; (2) saldo piutang USD per 31 Desember 2026 dijabarkan ulang dengan kurs KMK, dan selisihnya dibuatkan faktur pajak pengganti agar PPN sesuai kurs akhir tahun; (3) PPN atas jasa konsultan dari Belanda yang mulai dimanfaatkan, ditagih, diakui sebagai utang, dan dibayar pada hari yang sama dirupiahkan dengan kurs KMK yang berlaku hari itu, bukan kurs tengah BI atau kurs bank yang dipakai saat transfer; (4) PM atas faktur valas dari pemasok dikreditkan sebesar rupiah yang benar-benar dibayarkan saat pelunasan. Pernyataan yang benar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (3)", B: "(1), (2), dan (3)", C: "(1), (3), dan (4)", D: "(1) dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kurs KMK hanya dipakai untuk merupiahkan PPN pada saat faktur atau dokumen yang dipersamakan seharusnya dibuat: penyerahan, impor (PIB), atau saat terutang PPN JLN (di sini pemanfaatan, tagihan, pengakuan utang, dan pembayaran jatuh pada hari yang sama, sehingga kurs KMK hari itu yang dipakai). Penjabaran saldo valas akhir periode adalah urusan pembukuan dengan kurs tengah BI dan tidak mengubah PPN, dan PM pembeli mengikuti PPN dalam faktur.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pernyataan (2) keliru: penjabaran saldo akhir tahun memakai kurs tengah BI untuk pembukuan dan tidak menimbulkan faktur pengganti; PPN yang sudah difakturkan tidak berubah karena kurs",
          C: "Pernyataan (4) keliru: PM yang dikreditkan adalah PPN rupiah yang tercantum dalam faktur, bukan rupiah saat pelunasan",
          D: "Melewatkan (3) yang benar dan memilih (4) yang keliru; PPN JLN dirupiahkan dengan kurs KMK pada saat terutang, bukan kurs tengah BI atau kurs bank saat transfer"
        },
        jebakan: "Membawa kurs pembukuan (kurs transaksi, kurs pelunasan, atau kurs tengah BI akhir tahun) ke dalam PPN."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 9 ayat (2) dan Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan SAK yang taat asas)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A4-131", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-10", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Bentala Presisi Teknik (PKP, produsen komponen otomotif, pemilik API; pembukuan rupiah sesuai SAK), Masa November 2026: (a) mengimpor mesin CNC (bukan barang mewah) dari Jerman dengan nilai pabean CIF EUR60.000; bill of lading bertanggal Jumat, 30 Oktober 2026, sedangkan PIB didaftarkan serta bea masuk 5%, PPN impor, dan PPh Pasal 22 impor 2,5% dilunasi pada Kamis, 5 November 2026; (b) memanfaatkan jasa desain perkakas dari Werkzeug Design GmbH di Jerman (tanpa BUT, bukan pemungut PPN PMSE); (c) menjual komponen di dalam negeri, sebagian dalam USD. Atas impor tidak ada pungutan pabean lain dan tidak ada fasilitas. Data kurs per EUR: kurs KMK 28 Oktober–3 November 2026 Rp19.080; kurs KMK 4–10 November 2026 Rp19.150; kurs tengah BI 5 November 2026 Rp19.210 (dipakai bagian akuntansi untuk mencatat mesin). PPN impor dan PPh Pasal 22 impor atas mesin CNC yang dilunasi bersama PIB adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPN Rp132.709.500; PPh Pasal 22 Rp30.255.750",
        B: "PPN Rp132.224.400; PPh Pasal 22 Rp30.051.000",
        C: "PPN Rp132.709.500; PPh Pasal 22 Rp30.161.250",
        D: "PPN Rp132.709.500; PPh Pasal 22 Rp28.725.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Satu nilai impor rupiah dipakai untuk semua pungutan dalam PIB: CIF + bea masuk dirupiahkan dengan kurs KMK yang berlaku pada tanggal PIB (Kamis, 5 November → periode 4–10 November). PPN impor non-mewah = 12% × 11/12 × nilai impor, sedangkan PPh Pasal 22 impor pemilik API = 2,5% × nilai impor yang sama (bukan CIF saja dan bukan kurs tengah BI pembukuan).",
        jejakHitung: [["Kurs KMK tanggal PIB (4–10 Nov 2026)", "Rp19.150"], ["CIF rupiah = 60.000 × 19.150", "Rp1.149.000.000"], ["Bea masuk 5% × 1.149.000.000", "Rp57.450.000"], ["Nilai impor", "Rp1.206.450.000"], ["PPN impor = 12% × 11/12 × 1.206.450.000", "Rp132.709.500"], ["PPh Pasal 22 impor = 2,5% × 1.206.450.000", "Rp30.161.250"], ["Kurs tengah BI Rp19.210", "hanya untuk pencatatan mesin di pembukuan"]],
        mengapaSalah: {
          A: "PPN benar, tetapi PPh Pasal 22 dihitung dari nilai impor dengan kurs tengah BI (2,5% × 1.210.230.000); PPh Pasal 22 impor memakai nilai impor rupiah yang sama dengan PIB, yaitu kurs KMK",
          B: "Memakai kurs KMK pada tanggal bill of lading (Rp19.080) untuk kedua pungutan; yang menentukan adalah tanggal PIB",
          D: "PPh Pasal 22 dihitung dari CIF saja (2,5% × 1.149.000.000); dasarnya nilai impor, yaitu CIF ditambah bea masuk"
        },
        jebakan: "Kurs pembukuan (kurs tengah BI) tidak masuk ke pungutan impor, baik PPN maupun PPh Pasal 22; keduanya berbasis nilai impor dengan kurs KMK tanggal PIB."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU PPN (definisi nilai impor) dan Pasal 4 ayat (1) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 22 ayat (1) huruf a UU PPh; PMK 34/PMK.010/2017 (PPh 22 impor 2,5% bagi pemilik API)", berlakuSejak: "2017-03-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A4-132", topik: "A4.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-10", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Bentala Presisi Teknik, butir (b): kontrak jasa desain perkakas dengan Werkzeug Design GmbH (Jerman, tanpa BUT, bukan pemungut PPN PMSE) bernilai EUR10.000. Tagihan diterima dan dicatat sebagai utang pada Rabu, 11 November 2026; desain mulai dimanfaatkan di pabrik Cikarang pada Senin, 16 November 2026; pembayaran dilakukan Rabu, 2 Desember 2026. Karena Werkzeug tidak menyerahkan SKD, PT Bentala memotong PPh Pasal 26 sebesar 20% sehingga yang ditransfer hanya EUR8.000. Data kurs per EUR: kurs KMK 11–17 November 2026 Rp19.100; kurs tengah BI 11 November 2026 Rp19.160; kurs KMK 2–8 Desember 2026 Rp19.020. PPN atas pemanfaatan JKP dari luar Daerah Pabean yang wajib disetor sendiri dan batas penyetorannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp20.922.000; disetor paling lambat 15 Januari 2027",
        B: "Rp16.808.000; disetor paling lambat 15 Desember 2026",
        C: "Rp21.076.000; disetor paling lambat 15 Desember 2026",
        D: "Rp21.010.000; disetor paling lambat 15 Desember 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN JLN terutang pada peristiwa paling awal di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar, yaitu 11 November 2026 (tagihan dan pengakuan utang). DPP adalah penggantian bruto EUR10.000, termasuk PPh Pasal 26 yang dipotong, dirupiahkan dengan kurs KMK saat terutang; PPN disetor paling lambat tanggal 15 bulan berikutnya.",
        jejakHitung: [["Saat terutang: tagihan dan utang Rabu, 11 Nov 2026 → kurs KMK 11–17 Nov", "Rp19.100"], ["Penggantian bruto = 10.000 × 19.100", "Rp191.000.000"], ["PPN = 12% × 11/12 × 191.000.000 = 11% × 191.000.000", "Rp21.010.000"], ["Batas setor (tanggal 15 bulan berikutnya)", "Selasa, 15 Desember 2026"]],
        mengapaSalah: {
          A: "Menganggap PPN terutang saat pembayaran 2 Desember; tagihan dan pengakuan utang 11 November terjadi lebih dulu, sehingga kurs dan masa terutangnya mengikuti 11 November",
          B: "Memakai jumlah neto yang ditransfer (EUR8.000); PPh Pasal 26 yang dipotong tetap bagian dari penggantian",
          C: "Memakai kurs tengah BI (Rp19.160); PPN JLN dirupiahkan dengan kurs KMK"
        },
        jebakan: "PPN JLN: DPP bruto sebelum PPh 26, kurs KMK pada peristiwa paling awal, bukan kurs transfer."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf e dan Pasal 3A ayat (3) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 8A ayat (1) UU PPN (DPP berupa Penggantian)", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 (saat terutang pemanfaatan dari luar Daerah Pabean) dan Pasal 21 (kurs)", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 Pasal 94 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Saat terutang PPN JLN pada saat yang paling dahulu di antara mulai dimanfaatkan, harga diakui sebagai utang, ditagih, atau dibayar mengikuti uraian sekunder DJP/DDTC atas PP 44/2022; nomor pasalnya belum dicek ke teks. Batas setor tanggal 15 bulan berikutnya mengikuti PMK 81/2024 sebagaimana dipakai di modul ini; pasal persisnya belum dicek ke teks. Bagian yang pasti: DPP bruto termasuk PPh Pasal 26 yang dipotong dan konversi dengan kurs KMK, bukan kurs tengah BI."
    },
    {
      id: "A4-133", topik: "A4.10", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A4-10", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Bentala Presisi Teknik, SPT Masa PPN November 2026. Data: PPN impor mesin CNC menurut PIB 5 November 2026 Rp132.709.500 (dokumen yang dipersamakan dengan faktur pajak); faktur pajak masukan pembelian bahan baku dalam rupiah dengan PPN Rp30.000.000; penyerahan komponen kepada PT Roda Kendaraan Nusantara (PKP) senilai USD50.000 belum termasuk PPN pada Selasa, 10 November 2026, faktur dibuat hari itu dan dilunasi Kamis, 3 Desember 2026; serta penyerahan komponen kepada PKP lain dalam rupiah Rp400.000.000 belum termasuk PPN. Semua barang bukan barang mewah dan semua PM memenuhi syarat dikreditkan. PPN atas jasa desain dari Jerman (butir b) disetor pada Desember 2026 dan, untuk soal ini, tidak diperhitungkan. Data kurs per USD: kurs KMK 4–10 November 2026 Rp16.300; kurs tengah BI 10 November 2026 Rp16.345; kurs KMK 2–8 Desember 2026 Rp16.250. Hasil penghitungan SPT Masa PPN November 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih bayar Rp28.812.000", B: "Lebih bayar Rp29.059.500", C: "Kurang bayar Rp103.650.000", D: "Lebih bayar Rp29.334.500" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak keluaran atas penyerahan dalam USD dirupiahkan dengan kurs KMK saat faktur seharusnya dibuat (Selasa, 10 November → periode 4–10 November), bukan kurs pelunasan. PPN impor yang dibayar dengan PIB adalah Pajak Masukan yang dapat dikreditkan pada masa yang sama.",
        jejakHitung: [["PK valas = 11% × (50.000 × 16.300) = 11% × 815.000.000", "Rp89.650.000"], ["PK rupiah = 11% × 400.000.000", "Rp44.000.000"], ["Jumlah PK", "Rp133.650.000"], ["Jumlah PM = 132.709.500 + 30.000.000", "Rp162.709.500"], ["PK − PM = 133.650.000 − 162.709.500", "Lebih bayar Rp29.059.500"]],
        mengapaSalah: {
          A: "Merupiahkan penjualan USD dengan kurs tengah BI (Rp16.345) sehingga PK menjadi Rp89.897.500",
          C: "Tidak mengkreditkan PPN impor; PIB adalah dokumen yang dipersamakan dengan faktur pajak dan PPN impornya dapat dikreditkan",
          D: "Merupiahkan penjualan USD dengan kurs pelunasan (Rp16.250); kurs ditentukan saat faktur seharusnya dibuat, bukan saat dibayar"
        },
        jebakan: "Di SPT Masa PPN, faktur valas masuk dengan rupiah kurs KMK saat faktur, dan PPN impor ikut dikreditkan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan ayat (4) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 (SPT Masa PPN melalui Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A4-134",
      topik: "A4.1",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Manakah pernyataan yang tepat mengenai mekanisme pengkreditan Pajak Masukan?",
      kataKualifikasi: [],
      opsi: { A: "PM dikreditkan dengan PK dalam Tahun Pajak yang sama, dan kelebihan PM selalu dikembalikan setiap Masa Pajak kepada semua PKP tanpa melihat jenis penyerahan", B: "PK dikreditkan dengan PM masa berikutnya, dan kekurangan pembayarannya dilunasi sekaligus melalui SPT Tahunan PPh Badan setelah tahun buku berakhir", C: "PM dikreditkan dengan PK dalam Masa Pajak yang sama, tetapi kelebihan PM atas PK hanya dapat dikompensasikan sampai akhir Tahun Pajak, lalu hangus", D: "PM dikreditkan dengan PK dalam Masa Pajak yang sama; kelebihan PK disetor, kelebihan PM dikompensasikan ke masa berikutnya atau dimintakan kembali" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "PM dalam suatu Masa Pajak dikreditkan dengan PK dalam masa yang sama. Bila PK lebih besar, selisihnya wajib disetor; bila PM lebih besar, selisihnya dikompensasikan ke masa berikutnya dan dapat dimintakan pengembalian pada akhir tahun buku, atau setiap masa bagi PKP tertentu.",
        jejakHitung: [],
        mengapaSalah: { A: "Pengkreditan dilakukan per Masa Pajak, dan restitusi setiap masa hanya bagi PKP tertentu (Ps. 9 ayat (4b)), bukan semua PKP.", B: "Arah pengkreditan terbalik (PM yang dikreditkan terhadap PK), dan PPN kurang bayar dilunasi melalui SPT Masa PPN, bukan SPT Tahunan PPh Badan.", C: "Kelebihan PM tidak hangus pada akhir tahun; dapat terus dikompensasikan atau dimintakan pengembalian." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 9 ayat (2), (3), (4), (4a), dan (4b)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 9 ayat (2), (3), (4), (4a), dan (4b)", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 375 ayat (1)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 13, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-135",
      topik: "A4.10",
      tingkat: [ "A", "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Berikut transaksi Ibu Wulan, PKP orang pribadi pengusaha konfeksi, selama Masa Agustus 2026: a. pembelian kain dari PKP pemasok dalam negeri Rp40.000.000; b. impor mesin jahit dengan PIB Rp60.000.000; c. pemanfaatan jasa desain pola dari konsultan di luar negeri Rp15.000.000; d. pembelian benang dari PKP pemasok dalam negeri Rp8.000.000. Seluruh PM berhubungan langsung dengan kegiatan usaha dan dapat dikreditkan. Dalam SPT Masa PPN, Ibu Wulan mengisi Formulir B1 atas transaksi ...",
      kataKualifikasi: [],
      opsi: { A: "a dan d", B: "b dan c", C: "a dan b", D: "c dan d" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Formulir B1 memuat PM yang dapat dikreditkan atas impor BKP dan pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean, sehingga impor mesin jahit (b) dan pemanfaatan jasa desain dari luar negeri (c) dilaporkan di B1. Perolehan kain dan benang dari pemasok dalam negeri (a dan d) dilaporkan di B2.",
        jejakHitung: [],
        mengapaSalah: { A: "a dan d adalah perolehan dalam negeri (B2).", C: "a adalah perolehan dalam negeri yang masuk B2.", D: "d adalah perolehan dalam negeri yang masuk B2." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Pasal 72 ayat (1)."
      },
      dasarHukum: [
        { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Pasal 72 ayat (1)", berlakuSejak: null },
        { pasal: "UU PPN Pasal 4 ayat (1) huruf b dan e, Pasal 9 ayat (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 20, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-136",
      topik: "A4.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Ortax Elektronik mengimpor BKP nonmewah dengan nilai CIF Rp500.000.000 dan bea masuk Rp50.000.000; tidak ada pungutan pabean lain. PPN impor dihitung 12% × DPP nilai lain 11/12 dari nilai impor. PPN impor yang harus dibayar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp60.500.000,00", B: "Rp55.000.000,00", C: "Rp66.000.000,00", D: "Rp60.000.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Nilai impor adalah nilai dasar penghitungan bea masuk (CIF) ditambah pungutan berdasarkan ketentuan kepabeanan dan cukai, termasuk bea masuk. Untuk impor BKP nonmewah, PPN = 12% × DPP nilai lain, dengan DPP nilai lain = 11/12 × nilai impor.",
        jejakHitung: [ [ "Nilai impor = Rp500.000.000 + Rp50.000.000", "Rp550.000.000" ], [ "DPP nilai lain = 11/12 × Rp550.000.000", "Rp504.166.667" ], [ "PPN = 12% × DPP nilai lain", "Rp60.500.000" ] ],
        mengapaSalah: { B: "Tidak memasukkan bea masuk ke nilai impor (12% × 11/12 × Rp500.000.000).", C: "Tidak memakai DPP nilai lain 11/12 (12% × Rp550.000.000).", D: "Tidak memasukkan bea masuk dan tidak memakai DPP nilai lain (12% × Rp500.000.000)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 1 angka 20, Pasal 4 ayat (1) huruf b, Pasal 7 ayat (1) huruf b."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 1 angka 20, Pasal 4 ayat (1) huruf b, Pasal 7 ayat (1) huruf b", berlakuSejak: null },
        { pasal: "PMK 131/2024 Pasal 3 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 23, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-137",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Ortax Distributor (PKP) melakukan penyerahan BKP kepada PT Ortax Retail pada 3, 14, dan 25 September 2026, dan memilih membuat Faktur Pajak gabungan. Kapan batas akhir faktur gabungan tersebut dibuat dan batas akhir diunggah untuk memperoleh persetujuan DJP?",
      kataKualifikasi: [],
      opsi: { A: "Dibuat paling lambat 30 September 2026 dan diunggah paling lambat 20 Oktober 2026", B: "Dibuat paling lambat 25 September 2026 dan diunggah paling lambat 15 Oktober 2026", C: "Dibuat paling lambat 15 Oktober 2026 dan diunggah paling lambat 31 Oktober 2026", D: "Dibuat paling lambat 30 September 2026 dan diunggah selambat-lambatnya 2 November 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur Pajak gabungan meliputi seluruh penyerahan kepada pembeli yang sama selama satu bulan kalender dan harus dibuat paling lambat akhir bulan penyerahan, yaitu 30 September 2026 (Rabu). e-Faktur wajib diunggah dan memperoleh persetujuan DJP paling lambat tanggal 20 bulan berikutnya setelah tanggal pembuatannya, yaitu 20 Oktober 2026 (Selasa).",
        jejakHitung: [],
        mengapaSalah: { B: "Faktur gabungan dibuat paling lambat akhir bulan penyerahan, bukan tanggal penyerahan terakhir; tanggal 15 bukan batas unggah.", C: "Faktur gabungan tidak boleh dibuat setelah bulan penyerahan berakhir; akhir bulan berikutnya adalah batas lapor SPT Masa PPN, bukan batas unggah.", D: "Batas unggah adalah tanggal 20 bulan berikutnya, bukan sesuai batas lapor SPT Masa PPN." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 13 ayat (2) dan (2a)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 13 ayat (2) dan (2a)", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 383", berlakuSejak: "2025-01-01" },
        { pasal: "PER-11/PJ/2025 Pasal 32 ayat (3) dan Pasal 44 ayat (1)", berlakuSejak: "2025-05-22" }
      ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Pengecoh tidak tersedia di sumber; alasan disusun sendiri. · Opsi A (kunci) kosong di sumber; dilengkapi dari langkah hitung pembahasan (30 September 2026 dan 20 Oktober 2026).",
      sumber: { set: "TO-B-2026-11", no: 25, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-138",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Ortax Logistik (PKP) menerbitkan Faktur Pajak Juli 2026 kepada PT Ortax Retail untuk 100 unit rak baja @Rp2.000.000. Barang yang benar-benar diserahkan dan disepakati hanya 80 unit; tidak ada barang yang dikembalikan pembeli. Faktur telah dilaporkan kedua pihak dalam SPT Masa PPN Juli 2026, dan belum ada pemeriksaan. Bagaimana koreksi yang tepat?",
      kataKualifikasi: [],
      opsi: { A: "Penjual membuat Faktur Pajak pengganti untuk 80 unit pada Masa Juli 2026, lalu penjual dan pembeli membetulkan SPT Masa PPN Juli 2026", B: "Pembeli membuat nota retur atas 20 unit pada Masa Pajak ditemukannya kesalahan, dan penjual mengurangi pajak keluarannya pada masa itu", C: "Penjual membatalkan faktur dan membuat faktur baru untuk 80 unit yang dilaporkan pada Masa Pajak ditemukannya kesalahan tanpa pembetulan", D: "Penjual membuat faktur tambahan bernilai negatif untuk 20 unit dan melaporkannya pada masa berjalan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jumlah barang yang salah tulis adalah kesalahan pengisian, sehingga dikoreksi dengan Faktur Pajak pengganti yang dilaporkan pada Masa Pajak yang sama dengan faktur yang diganti. Karena faktur lama sudah dilaporkan, penjual dan pembeli membetulkan SPT Masa PPN Juli 2026. Nota retur hanya untuk barang yang benar-benar dikembalikan.",
        jejakHitung: [],
        mengapaSalah: { B: "Nota retur hanya untuk barang yang benar-benar dikembalikan; di sini tidak ada pengembalian barang.", C: "Pembatalan faktur untuk transaksi yang batal, bukan salah isi; koreksi tetap dilaporkan pada Masa Pajak faktur semula dengan pembetulan SPT.", D: "Tidak dikenal faktur tambahan bernilai negatif; kesalahan pengisian dikoreksi dengan faktur pengganti pada masa yang sama." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PER-11/PJ/2025 Pasal 48 ayat (1) dan (6), Pasal 50 ayat (2) dan (3)."
      },
      dasarHukum: [
        { pasal: "PER-11/PJ/2025 Pasal 48 ayat (1) dan (6), Pasal 50 ayat (2) dan (3)", berlakuSejak: "2025-05-22" },
        { pasal: "PMK 81/2024 Pasal 286 ayat (1) dan Pasal 389 ayat (1)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 27, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-139",
      topik: "A4.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Bapak Agus (bukan pengusaha jasa konstruksi) membangun sendiri rumah tinggal berkonstruksi beton dalam dua tahap tanpa kontraktor: tahap pertama seluas 150 m² dikerjakan Januari–Mei 2023 dengan biaya Rp900.000.000, dan tahap kedua berupa penambahan lantai seluas 120 m² dikerjakan Agustus–Desember 2026 dengan biaya Rp800.000.000 (seluruhnya tidak termasuk tanah). Berapa PPN atas kegiatan membangun sendiri yang harus disetor Bapak Agus?",
      kataKualifikasi: [ "bukan", "tidak termasuk" ],
      opsi: { A: "Rp0,00", B: "Rp17.600.000,00", C: "Rp37.400.000,00", D: "Rp40.800.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "KMS bertahap merupakan satu kesatuan hanya bila tenggang waktu antartahap tidak lebih dari 2 tahun (PMK 81/2024 Ps. 323 ayat (5) huruf b). Tahap pertama selesai Mei 2023 dan tahap kedua dimulai Agustus 2026 (sekitar 39 bulan), sehingga masing-masing tahap merupakan kegiatan terpisah (ayat (6)) dan diuji sendiri terhadap kriteria luas paling sedikit 200 m² (ayat (4)). Tahap pertama (150 m²) maupun tahap kedua (120 m²) tidak memenuhi kriteria, sehingga tidak ada PPN KMS terutang.",
        jejakHitung: [ [ "Tenggang Mei 2023–Agustus 2026", "±39 bulan > 24 bulan → kegiatan terpisah" ], [ "Tahap 1: 150 m² < 200 m²", "bukan KMS terutang" ], [ "Tahap 2: 120 m² < 200 m²", "bukan KMS terutang" ], [ "PPN KMS yang disetor", "Rp0" ] ],
        mengapaSalah: { B: "Menganggap tahap kedua terutang (2,2% × Rp800.000.000), padahal luasnya hanya 120 m².", C: "Menggabungkan kedua tahap (2,2% × Rp1.700.000.000), padahal tenggangnya lebih dari 2 tahun.", D: "Menggabungkan kedua tahap dan memakai besaran lama 20% × 12% (2,4% × Rp1.700.000.000)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 16C s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 16C s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 323 ayat (3)–(6) dan Pasal 324 ayat (2)–(3) (ayat (2) diubah PMK 11/2025)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 28, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-140",
      topik: "A4.8",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Pernyataan yang tepat mengenai kewajiban BUMN yang ditunjuk sebagai Pemungut PPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Memungut PPN dari rekanan, sedangkan penyetorannya dilakukan rekanan dengan SSP atas nama rekanan pada akhir bulan berikutnya", B: "Memungut, menyetor, dan melaporkan PPN paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir", C: "Memungut PPN pada saat faktur rekanan harus dibuat, menyetor dengan SSP atas nama pemungut, dan melaporkannya dalam SPT Masa PPN", D: "Memungut PPN hanya atas pembayaran yang nilainya paling banyak Rp10.000.000,00 termasuk PPN" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pemungut PPN memungut PPN pada saat Faktur Pajak rekanan harus dibuat (saat penyerahan, saat penerimaan pembayaran sebelum penyerahan, atau saat pembayaran termin). PPN yang dipungut disetor dengan SSP atau sarana yang disamakan atas nama Pemungut PPN paling lambat akhir bulan berikutnya setelah Masa Pajak berakhir dan sebelum SPT Masa PPN disampaikan, lalu dilaporkan dalam SPT Masa PPN paling lambat akhir bulan berikutnya (PMK 81/2024 Ps. 296; Ps. 94 ayat (3) huruf f).",
        jejakHitung: [],
        mengapaSalah: { A: "PPN yang dipungut disetor oleh pemungut atas nama pemungut, bukan oleh rekanan.", B: "Batas setor dan lapor PPN yang dipungut adalah akhir bulan berikutnya, bukan tanggal 15.", D: "Pembayaran sampai Rp10 juta termasuk PPN justru termasuk yang tidak dipungut; batas itu bukan syarat pemungutan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 16A."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 16A", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 295 ayat (2), Pasal 296 ayat (1)–(4), Pasal 94 ayat (3) huruf f", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 29, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-141",
      topik: "A4.7",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Klinik Medika adalah PKP yang seluruh penyerahannya berupa jasa pelayanan kesehatan medis yang mendapat fasilitas dibebaskan dari PPN. Pada Agustus 2026 klinik itu memanfaatkan jasa pengembangan sistem informasi dari Ortax ABC Co. Ltd (Jepang) berdasarkan kontrak langsung (bukan melalui PMSE) senilai Rp300.000.000 untuk operasional klinik di Indonesia. PPN dihitung 12% × DPP nilai lain 11/12. Analisis yang tepat adalah ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Klinik wajib menyetor sendiri PPN Rp33.000.000,00, tetapi tidak dapat mengkreditkannya karena berkaitan dengan penyerahan yang dibebaskan.", B: "Klinik tidak wajib menyetor PPN karena seluruh penyerahannya mendapat fasilitas dibebaskan dari PPN.", C: "Klinik wajib menyetor sendiri PPN Rp33.000.000,00 dan dapat mengkreditkannya sebagai Pajak Masukan, sehingga SPT Masa PPN klinik menjadi lebih bayar.", D: "Klinik wajib menyetor sendiri PPN Rp36.000.000,00, karena DPP nilai lain 11/12 tidak berlaku untuk pemanfaatan jasa dari luar negeri." },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Fasilitas pembebasan melekat pada penyerahan jasa pelayanan kesehatan medis (PP 49/2022 Ps. 10 huruf a), bukan pada status klinik. Jasa pengembangan sistem informasi dari luar negeri bukan jasa yang dibebaskan, sehingga klinik wajib memungut, menyetor, dan melaporkan sendiri PPN atas pemanfaatan jasa tersebut (UU PPN Ps. 4 ayat (1) huruf e, Ps. 3A ayat (3)). Namun, Pajak Masukan yang berkaitan dengan penyerahan yang dibebaskan tidak dapat dikreditkan (Ps. 16B ayat (3)), sehingga PPN tersebut menjadi biaya.",
        jejakHitung: [ [ "DPP nilai lain = 11/12 × Rp300.000.000", "Rp275.000.000" ], [ "PPN = 12% × Rp275.000.000", "Rp33.000.000" ], [ "Pengkreditan (terkait penyerahan dibebaskan)", "tidak dapat dikreditkan" ] ],
        mengapaSalah: { B: "Pembebasan melekat pada penyerahan jasa kesehatan medis, bukan pada status klinik; pemanfaatan JKP luar negeri tetap terutang PPN.", C: "PM yang berkaitan dengan penyerahan yang dibebaskan tidak dapat dikreditkan (Ps. 16B ayat (3)).", D: "DPP nilai lain 11/12 (PMK 131/2024) berlaku juga untuk pemanfaatan JKP dari luar Daerah Pabean atas barang/jasa nonmewah." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 3A ayat (3), Pasal 4 ayat (1) huruf e, Pasal 16B ayat (3)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 3A ayat (3), Pasal 4 ayat (1) huruf e, Pasal 16B ayat (3)", berlakuSejak: null },
        { pasal: "PP 49/2022 Pasal 10 huruf a", berlakuSejak: null },
        { pasal: "PMK 131/2024 Pasal 3 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Teks penjelasan sumber rusak OCR (tercampur dengan baris dasar hukum); penjelasan disusun ulang dari potongan yang terbaca. Pengecoh tidak tersedia; alasan disusun sendiri.",
      sumber: { set: "TO-B-2026-11", no: 31, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-142",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Tuan Andi menjalankan usaha distribusi bahan bangunan dan belum dikukuhkan sebagai PKP. Pada Juli 2026 ia menjual barang kepada PT Ortax Bangun Jaya (PKP) senilai Rp200.000.000 dan dengan sengaja menerbitkan dokumen yang dinamai Faktur Pajak dengan PPN Rp22.000.000 yang dibayar pembeli. Bagaimana akibat hukumnya?",
      kataKualifikasi: [],
      opsi: { A: "Dokumen itu sah sebagai Faktur Pajak sehingga PM dapat dikreditkan pembeli, dan Tuan Andi hanya dikenai denda 1% dari DPP karena belum dikukuhkan", B: "Dokumen itu bukan Faktur Pajak sehingga PPN Rp22.000.000,00 tidak dapat dikreditkan pembeli; Tuan Andi wajib menyetor PPN yang tercantum dan diancam pidana Pasal 39A UU KUP", C: "Dokumen itu bukan Faktur Pajak, tetapi PT Ortax Bangun Jaya tetap dapat mengkreditkan PM dengan pedoman 80%, dan Tuan Andi hanya ditagih PPN tersebut dengan STP", D: "Dokumen itu bukan Faktur Pajak sehingga PPN Rp22.000.000,00 tidak dapat dikreditkan pembeli; Tuan Andi dikukuhkan secara jabatan dan dikenai bunga tanpa ancaman pidana" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Faktur Pajak adalah bukti pungutan yang dibuat oleh PKP; pengusaha yang belum dikukuhkan tidak berhak menerbitkannya sehingga PPN di dalamnya bukan PM yang dapat dikreditkan. Setiap orang yang dengan sengaja menerbitkan faktur pajak tetapi belum dikukuhkan sebagai PKP diancam pidana penjara 2–6 tahun dan denda 2–6 kali jumlah pajak dalam faktur (UU KUP Ps. 39A huruf b). Selain itu, Tuan Andi wajib menyetorkan PPN yang tercantum dalam dokumen tersebut ke kas negara (UU PPN Ps. 14 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: { A: "Dokumen dari pengusaha yang belum dikukuhkan bukan Faktur Pajak; PM tidak dapat dikreditkan dan perbuatannya diancam pidana, bukan sekadar denda 1%.", C: "PPN dalam dokumen yang bukan Faktur Pajak tidak dapat dikreditkan (Ps. 9 ayat (8) huruf f); pedoman 80% tidak berlaku untuk pembeli.", D: "Penerbitan faktur pajak dengan sengaja oleh pengusaha yang belum dikukuhkan diancam pidana Ps. 39A UU KUP; tidak cukup dengan bunga." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 1 angka 23, Pasal 9 ayat (8) huruf f, Pasal 14 ayat (1) dan (2)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 1 angka 23, Pasal 9 ayat (8) huruf f, Pasal 14 ayat (1) dan (2)", berlakuSejak: null },
        { pasal: "UU KUP Pasal 39A huruf b", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Dasar hukum sumber terpotong (\"UU KUP Ps. 39A huruf\"); huruf b dipilih sesuai substansi (menerbitkan faktur pajak tetapi belum dikukuhkan PKP). RUJUKAN dan pengecoh tidak tersedia. · Opsi B (kunci) kosong di sumber; disusun dari penjelasan. Opsi D rusak OCR (\"uan dikukuhkan\"); dilengkapi \"Tuan Andi dikukuhkan\".",
      sumber: { set: "TO-B-2026-11", no: 35, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-143",
      topik: "A4.8",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "PMK 231/PMK.03/2019 s.t.d.d. PMK 59/PMK.03/2022 Pasal 16 ayat (1)–(2) (dikutip try out): (1) Instansi Pemerintah ditunjuk sebagai pemungut PPN atau PPN dan PPnBM yang terutang atas penyerahan Barang Kena Pajak dan/atau Jasa Kena Pajak oleh PKP Rekanan Pemerintah kepada Instansi Pemerintah. (2) Instansi Pemerintah sebagaimana dimaksud pada ayat (1) wajib memungut, menyetor, dan melaporkan PPN atau PPN dan PPnBM yang terutang.",
      stem: "Pemerintah Kabupaten Ortaxwangi sebagai instansi pemerintah ditunjuk sebagai Pemungut PPN, namun bukan merupakan PKP. Pada Juli 2026, Pemerintah Kabupaten Ortaxwangi membeli 25 unit komputer senilai Rp150.000.000 (belum termasuk PPN) dari PT Ortax Elektronik (PKP). Pembayaran dilakukan dengan mekanisme pembayaran langsung (LS), tidak menggunakan kartu kredit pemerintah dan tidak melalui Sistem Informasi Pengadaan. Atas transaksi tersebut ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "PPN dipungut, disetor, dan dilaporkan oleh Pemerintah Kabupaten Ortaxwangi, dan PT Ortax Elektronik membuat Faktur Pajak dengan kode transaksi 02", B: "PPN dipungut dan disetor sendiri oleh PT Ortax Elektronik dengan Faktur Pajak kode transaksi 04 karena Pemerintah Kabupaten Ortaxwangi bukan PKP", C: "PPN dipungut oleh Pemerintah Kabupaten Ortaxwangi, dan PT Ortax Elektronik membuat Faktur Pajak dengan kode transaksi 03", D: "PPN tidak dipungut karena pembelinya instansi pemerintah, dan PT Ortax Elektronik membuat Faktur Pajak dengan kode transaksi 07" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Instansi pemerintah ditunjuk sebagai pemungut PPN dan wajib memungut, menyetor, dan melaporkan PPN atas penyerahan BKP/JKP oleh PKP rekanan pemerintah (PMK 231/PMK.03/2019 s.t.d.d. PMK 59/PMK.03/2022 Ps. 16 ayat (1)–(2)). Pembayaran LS, bukan kartu kredit pemerintah, bukan pengadaan tanah, dan tidak melalui Sistem Informasi Pengadaan tidak termasuk pengecualian Ps. 18 ayat (1). PT Ortax Elektronik membuat Faktur Pajak kode 02; status Pemkab yang bukan PKP tidak menghapus kewajibannya sebagai pemungut.",
        jejakHitung: [],
        mengapaSalah: { B: "Status bukan PKP tidak menghapus penunjukan instansi pemerintah sebagai pemungut PPN.", C: "Kode 03 untuk pemungut PPN selain instansi pemerintah.", D: "Penyerahan kepada instansi pemerintah tidak otomatis mendapat fasilitas tidak dipungut; kode 07 hanya untuk fasilitas tidak dipungut/DTP." },
        jebakan: "Kode 02 = instansi pemerintah memungut; kode 03 = pemungut lain/Pihak Lain; bila dikecualikan dari pemungutan, kode menurut jenis penyerahan."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 16A ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 231/PMK.03/2019 s.t.d.d. PMK 59/PMK.03/2022 Pasal 16 ayat (1)–(2) dan Pasal 18 ayat (1)–(2)", berlakuSejak: null },
        { pasal: "PER-11/PJ/2025 Lampiran huruf D (kode transaksi 02)", berlakuSejak: "2025-05-22" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 38, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-144",
      topik: "A4.1",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PPN digolongkan sebagai pajak tidak langsung. Alasan yang tepat untuk penggolongan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pengenaannya memperhatikan keadaan pribadi pembeli, seperti jumlah tanggungan dan status kawin.", B: "Beban pajaknya dipikul konsumen akhir, sedangkan penyetorannya ke kas negara dilakukan oleh pengusaha penjual.", C: "Pajaknya dipungut sekali saja pada tingkat pabrikan sehingga tidak ada mekanisme pengkreditan.", D: "Pajak terutangnya dihitung dari penghasilan neto pengusaha pada akhir tahun pajak." },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PPN adalah pajak atas konsumsi dalam negeri. Penanggung bebannya (konsumen akhir) berbeda dengan pihak yang menyetorkannya ke kas negara (pengusaha penjual), sehingga digolongkan pajak tidak langsung. Karakteristik lain: bersifat objektif, dipungut bertingkat pada setiap mata rantai, dan memakai metode pengkreditan Pajak Masukan terhadap Pajak Keluaran.",
        jejakHitung: [],
        mengapaSalah: { A: "PPN bersifat objektif; pengenaannya tidak memperhatikan keadaan pribadi pembeli.", C: "PPN dipungut bertingkat pada setiap mata rantai dengan mekanisme pengkreditan, bukan sekali di tingkat pabrikan.", D: "Penghitungan dari penghasilan neto adalah ciri PPh, bukan PPN." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 4 ayat (1), Pasal 9 ayat (2)–(3), dan Penjelasan Pasal 7 ayat (2)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 4 ayat (1), Pasal 9 ayat (2)–(3), dan Penjelasan Pasal 7 ayat (2)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 39, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-145",
      topik: "A4.7",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Ortax Niaga (PKP) menerima Faktur Pajak dari CV Ortax Sejahtera (PKP) yang seluruh keterangannya terisi lengkap dan telah memperoleh persetujuan DJP. Hasil penelusuran menunjukkan penyerahan barang yang tercantum dalam faktur tidak pernah terjadi. Bagaimana status faktur dan Pajak Masukannya?",
      kataKualifikasi: [],
      opsi: { A: "Faktur memenuhi persyaratan formal dan material sehingga Pajak Masukannya dapat dikreditkan", B: "Faktur hanya tidak memenuhi persyaratan formal sehingga PM dapat dikreditkan setelah dibuat faktur pengganti", C: "Faktur tidak memenuhi persyaratan material sehingga Pajak Masukannya tidak dapat dikreditkan", D: "Faktur tidak memenuhi persyaratan formal; penjual cukup dikenai denda 1% DPP dan PM pembeli tetap dapat dikreditkan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Faktur atas transaksi yang tidak pernah terjadi tidak berisi keterangan yang sebenarnya mengenai penyerahan, sehingga tidak memenuhi persyaratan material. PPN dalam faktur yang tidak memenuhi Ps. 13 ayat (9) UU PPN tidak dapat dikreditkan (Ps. 9 ayat (8) huruf f). Selain itu, setiap orang yang dengan sengaja menerbitkan dan/atau menggunakan faktur pajak yang tidak berdasarkan transaksi yang sebenarnya diancam pidana UU KUP Ps. 39A huruf a.",
        jejakHitung: [],
        mengapaSalah: { A: "Kelengkapan isi dan persetujuan DJP hanya memenuhi syarat formal; syarat material gagal karena transaksinya tidak pernah terjadi.", B: "Cacatnya material, bukan formal; faktur pengganti tidak dapat memperbaiki transaksi yang tidak pernah ada.", D: "Cacatnya material dan PM tidak dapat dikreditkan; perbuatannya diancam pidana Ps. 39A huruf a, bukan sekadar denda 1%." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 9 ayat (8) huruf f dan Pasal 13 ayat (9)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 9 ayat (8) huruf f dan Pasal 13 ayat (9)", berlakuSejak: null },
        { pasal: "PER-11/PJ/2025 Pasal 56 ayat (2)", berlakuSejak: "2025-05-22" },
        { pasal: "UU KUP Pasal 39A huruf a", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Pengecoh tidak tersedia; alasan disusun sendiri. · Opsi C (kunci) kosong di sumber; disusun dari penjelasan (tidak memenuhi persyaratan material, PM tidak dapat dikreditkan).",
      sumber: { set: "TO-B-2026-11", no: 45, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-146",
      topik: "A4.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Pada Agustus 2026 PT Ortax Otomotif mengimpor sebuah mobil yang tergolong BKP mewah dan dikenai PPnBM, dengan rincian: nilai pabean (CIF) Rp400.000.000; bea masuk Rp40.000.000; tarif PPN 12%; tarif PPnBM 20%. Berapakah PPN impor (tidak termasuk PPnBM) yang harus dibayar PT Ortax Otomotif?",
      kataKualifikasi: [ "tidak termasuk" ],
      opsi: { A: "Rp48.400.000,00", B: "Rp52.800.000,00", C: "Rp48.000.000,00", D: "Rp88.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Atas impor BKP yang tergolong mewah dan dikenai PPnBM, PPN dihitung 12% × DPP berupa nilai impor, tanpa DPP nilai lain 11/12 (PMK 131/2024 Pasal 2 ayat (2)–(3)). Nilai impor adalah nilai pabean ditambah bea masuk (UU PPN Pasal 1 angka 20). PPnBM 20% dihitung terpisah.",
        jejakHitung: [ [ "Nilai impor = Rp400.000.000 + Rp40.000.000", "Rp440.000.000" ], [ "PPN = 12% × Rp440.000.000", "Rp52.800.000" ] ],
        mengapaSalah: { A: "Menerapkan DPP nilai lain 11/12 yang hanya berlaku untuk BKP nonmewah.", C: "Memakai CIF tanpa bea masuk.", D: "Adalah besaran PPnBM (20% × nilai impor), bukan PPN." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 1 angka 20 s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 1 angka 20 s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 131/2024 Pasal 2 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 60, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-147",
      topik: "A4.3",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "CV Ortax Kreasi adalah pengusaha kecil yang sejak Januari 2025 memilih dikukuhkan sebagai PKP agar pembelinya dapat mengkreditkan Pajak Masukan. Pada tahun buku 2026 (Januari–Desember) peredaran brutonya hanya Rp2.100.000.000 dan sebagian besar pembelinya kini konsumen akhir. Pengurus ingin berhenti memungut PPN mulai tahun 2027. Analisis yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Status PKP gugur dengan sendirinya pada awal tahun buku 2027 karena peredaran 2026 tidak melebihi Rp4,8 miliar, sehingga CV boleh langsung berhenti membuat faktur pajak.", B: "CV cukup menyampaikan pemberitahuan tertulis bahwa ia kembali menjadi pengusaha kecil, dan pencabutan berlaku sejak pemberitahuan itu diterima KPP.", C: "CV tidak dapat mengajukan pencabutan karena pengusaha kecil yang memilih menjadi PKP terikat pada pilihannya sampai peredarannya melebihi Rp4,8 miliar.", D: "CV dapat mengajukan permohonan pencabutan pengukuhan PKP karena peredaran brutonya dalam satu tahun buku tidak melebihi Rp4,8 miliar; pencabutan diputus berdasarkan pemeriksaan paling lama 6 bulan sejak permohonan diterima lengkap, dan sampai dicabut CV tetap wajib melaksanakan kewajiban PKP." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengusaha kecil yang memilih dikukuhkan wajib melaksanakan ketentuan UU PPN sepenuhnya. Bila peredaran bruto dalam satu tahun buku tidak melebihi Rp4,8 miliar, PKP dapat mengajukan permohonan pencabutan pengukuhan. Pencabutan atas permohonan dilakukan berdasarkan hasil pemeriksaan dan keputusan diterbitkan paling lama 6 bulan sejak permohonan diterima lengkap; bila lewat, permohonan dianggap dikabulkan.",
        jejakHitung: [],
        mengapaSalah: { A: "Status PKP tidak gugur dengan sendirinya; pencabutan harus dimohonkan dan diputus DJP.", B: "Pencabutan tidak cukup dengan pemberitahuan; diperlukan permohonan yang diputus berdasarkan pemeriksaan.", C: "PKP yang peredaran brutonya tidak melebihi Rp4,8 miliar justru dapat mengajukan permohonan pencabutan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 3A ayat (2)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 3A ayat (2)", berlakuSejak: null },
        { pasal: "PMK 68/PMK.03/2010 Pasal 7 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 67 dan Pasal 68 ayat (3)–(5)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sumber tidak memuat bagian Pengecoh; alasan opsi salah disusun sendiri. · Teks opsi D kosong di sumber; potongan \"pencabutan yang diputus berdasarkan pemeriksaan paling lama 6 bulan\" tercetak di akhir opsi C. Opsi C dirapikan dan opsi D disusun dari potongan tersebut dan pembahasan.",
      sumber: { set: "TO-B-2026-11", no: 62, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-148",
      topik: "A4.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "CV Ortax Mobilindo, PKP pedagang kendaraan bermotor bekas, menjual satu unit mobil bekas pada Juli 2026 dengan harga jual Rp150.000.000. Berapa PPN yang harus dipungut?",
      kataKualifikasi: [],
      opsi: { A: "Rp16.500.000,00", B: "Rp1.650.000,00", C: "Rp1.800.000,00", D: "Rp18.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pedagang kendaraan bermotor bekas memungut PPN dengan besaran tertentu 1,1% dari Harga Jual, yaitu 10% × 11/12 × tarif 12%. Pajak Masukan terkait penyerahan ini tidak dapat dikreditkan.",
        jejakHitung: [ [ "Besaran = 10% × 11/12 × 12%", "1,1%" ], [ "PPN = 1,1% × Rp150.000.000", "Rp1.650.000" ] ],
        mengapaSalah: { A: "Memakai 11% (DPP nilai lain 11/12 × 12%) seolah-olah penyerahan biasa, bukan besaran tertentu.", C: "Memakai 10% × 12% = 1,2% tanpa faktor 11/12.", D: "Memakai tarif penuh 12% atas harga jual." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 9A."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 9A", berlakuSejak: null },
        { pasal: "PMK 65/PMK.03/2022 Pasal 2 ayat (5) dan (6) s.t.d.d. PMK 11/2025 Pasal 16", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 64, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-149",
      topik: "A4.10",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Pada Masa Pajak Juni 2026, PT Ortax Distributor mencatat Pajak Keluaran Rp180.000.000 dan Pajak Masukan yang dapat dikreditkan Rp150.000.000. Batas akhir penyetoran PPN kurang bayar Masa Juni 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "15 Juli 2026", B: "20 Juli 2026", C: "31 Juli 2026", D: "31 Agustus 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "PPN kurang bayar Rp30.000.000 wajib disetor paling lambat akhir bulan berikutnya setelah Masa Pajak berakhir, yaitu 31 Juli 2026 (Jumat, hari kerja), dan sebelum SPT Masa PPN disampaikan.",
        jejakHitung: [ [ "PPN kurang bayar = Rp180.000.000 − Rp150.000.000", "Rp30.000.000" ], [ "Masa Juni berakhir 30 Juni 2026 → akhir bulan berikutnya", "31 Juli 2026" ] ],
        mengapaSalah: { A: "Tanggal 15 bulan berikutnya adalah batas setor pajak masa lain (PPh potput/PPh 25), bukan PPN.", B: "Tanggal 20 adalah batas lapor SPT Masa PPh, bukan batas setor PPN.", D: "Terlambat satu bulan; batasnya akhir bulan berikutnya setelah Masa Pajak berakhir." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 15A ayat (1)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 15A ayat (1)", berlakuSejak: null },
        { pasal: "UU KUP Pasal 9 ayat (1)", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 94 ayat (3) huruf e", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 66, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-150",
      topik: "A4.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Jenis jasa berikut yang TIDAK dikenai PPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "jasa konsultansi perpajakan kepada perusahaan", B: "jasa penayangan film melalui layanan streaming digital kepada pelanggan", C: "jasa penyediaan tempat parkir yang merupakan objek pajak daerah", D: "jasa perbaikan kendaraan bermotor di bengkel" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jasa penyediaan tempat parkir, yaitu jasa penyediaan atau penyelenggaraan tempat parkir oleh pemilik atau pengusaha pengelola tempat parkir kepada pengguna tempat parkir yang merupakan objek pajak daerah, termasuk jenis jasa yang tidak dikenai PPN.",
        jejakHitung: [],
        mengapaSalah: { A: "Jasa konsultansi perpajakan adalah JKP yang dikenai PPN.", B: "Penayangan film secara digital (streaming) bukan jasa kesenian dan hiburan objek pajak daerah, sehingga tetap dikenai PPN (Pasal 5 ayat (3)).", D: "Jasa perbaikan kendaraan bermotor adalah JKP yang dikenai PPN." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 4 ayat (1) huruf c dan Pasal 4A ayat (3) huruf n s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 4 ayat (1) huruf c dan Pasal 4A ayat (3) huruf n s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 70/PMK.03/2022 Pasal 5 ayat (2) huruf b dan ayat (3)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 73, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-151",
      topik: "A4.1",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      kutipan: "Penjelasan UU PPN Pasal 9 ayat (2) (dikutip try out): Pembeli Barang Kena Pajak, penerima Jasa Kena Pajak, pengimpor Barang Kena Pajak, pihak yang memanfaatkan Barang Kena Pajak Tidak Berwujud dari luar Daerah Pabean, atau pihak yang memanfaatkan Jasa Kena Pajak dari luar Daerah Pabean wajib membayar Pajak Pertambahan Nilai dan berhak menerima bukti pungutan pajak.",
      stem: "Berikut ini pernyataan yang menunjukkan konsep PPN sebagai pajak tidak langsung adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Konsumen akhir yang membeli televisi dari PT Ortax Elektronik (PKP) membayar PPN, sedangkan yang wajib memungut dan menyetorkan PPN tersebut ke kas negara adalah PT Ortax Elektronik", B: "PPN atas penjualan televisi oleh PT Ortax Elektronik (PKP) dikenakan tanpa memperhatikan keadaan pembeli, seperti tingkat penghasilan atau jumlah tanggungannya", C: "PT Ortax Elektronik (PKP) mengkreditkan Pajak Masukan atas perolehan komponen dengan Pajak Keluaran atas penjualan televisi sehingga yang disetor hanya selisihnya", D: "Penjualan televisi oleh PT Ortax Elektronik (PKP) kepada pembeli di luar negeri dikenai PPN dengan tarif 0% karena PPN hanya dikenakan atas konsumsi barang dan jasa di dalam Daerah Pabean (prinsip tempat tujuan)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Ciri pajak tidak langsung adalah terpisahnya pihak yang memikul beban pajak dari pihak yang wajib menyetorkannya. Konsumen akhir membayar PPN (memikul beban), sedangkan PT Ortax Elektronik sebagai PKP memungut dan menyetorkannya (Penjelasan UU PPN Pasal 9 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: { B: "Menggambarkan PPN sebagai pajak objektif, yaitu kewajiban timbul karena objek tanpa memandang keadaan subjek.", C: "Menggambarkan mekanisme pengkreditan Pajak Masukan (nonkumulatif), bukan pajak tidak langsung.", D: "Menggambarkan prinsip tempat tujuan (konsumsi dalam negeri) yang menjadi dasar tarif 0% atas ekspor." },
        jebakan: "Kata kunci pajak tidak langsung: \"memikul beban\" vs \"menyetor\"."
      },
      dasarHukum: [
        { pasal: "UU PPN Penjelasan Pasal 9 ayat (2), Pasal 9 ayat (2)–(3), Penjelasan Pasal 7 ayat (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 77, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-152",
      topik: "A4.3",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "CV Ortax Busana memakai tahun buku 1 Juli–30 Juni. Pada tahun buku Juli 2025–Juni 2026, peredaran bruto kumulatifnya melampaui Rp4.800.000.000 pada bulan Maret 2026. CV Ortax Busana wajib melaporkan usahanya untuk dikukuhkan sebagai PKP paling lambat tanggal ...",
      kataKualifikasi: [ "paling lambat" ],
      opsi: { A: "30 Juni 2026", B: "30 April 2026", C: "31 Desember 2026", D: "31 Maret 2026" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban melaporkan usaha untuk dikukuhkan sebagai PKP dilakukan paling lambat akhir tahun buku saat peredaran bruto melebihi batas pengusaha kecil. Tahun buku CV Ortax Busana berakhir 30 Juni 2026 (Selasa).",
        jejakHitung: [],
        mengapaSalah: { B: "Memakai ketentuan lama (akhir bulan berikutnya setelah batas terlampaui) yang telah dicabut PMK 164/2023.", C: "Memakai akhir tahun kalender, padahal acuannya akhir tahun buku.", D: "Akhir bulan saat batas terlampaui, bukan akhir tahun buku." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 3A ayat (1) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 3A ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 164/2023 Pasal 17 ayat (1) dan (3)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Kunci A (akhir tahun buku) bertumpu pada PMK 164/2023 Ps. 17 ayat (3), yang mengatur WP PPh final UMKM (PP 55/2022). Stem tidak menyebut CV Ortax Busana memakai PPh final. Modul proyek (mu-A4 poinKunci; soal A2-006) memakai tenggat umum PMK 197/2013 \"akhir bulan berikutnya\" bagi pengusaha yang bukan WP PPh final; dengan aturan itu jawabannya B (30 April 2026). Pengecoh B di sumber menyebut aturan umum itu \"telah dicabut PMK 164/2023\"; klaim ini belum terverifikasi. Usul bila diimpor: tambahkan \"(Wajib Pajak PPh final PP 55/2022)\" ke stem. Rujukan pasal juga perlu dicocokkan dengan PMK 81/2024.",
      sumber: { set: "TO-B-2026-11", no: 78, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-153",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "PER-11/PJ/2025 Lampiran huruf D (diringkas) (dikutip try out): (diringkas) Penyerahan kepada Pemungut PPN atau pemungut PPN lainnya yang PPN-nya dipungut oleh pemungut tersebut tetap menggunakan kode transaksi 02 atau 03, meskipun jenis penyerahannya juga termasuk kategori kode transaksi 04, 05, 06, 09, dan 10.",
      stem: "PT Ortax Mobilindo (PKP) melakukan kegiatan usaha tertentu berupa penyerahan kendaraan bermotor bekas yang wajib memungut dan menyetorkan PPN dengan besaran tertentu. Pada 14 Oktober 2026, PT Ortax Mobilindo menyerahkan sebuah mobil bekas kepada PT Ortax Energi (Persero), BUMN yang ditunjuk sebagai Pemungut PPN, dengan harga jual Rp180.000.000 (belum termasuk PPN). Pembayaran dilakukan sekaligus dan bukan merupakan pembayaran yang dipecah. Atas penyerahan tersebut, PT Ortax Mobilindo wajib membuat Faktur Pajak dengan kode transaksi ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "02", B: "05", C: "03", D: "01" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyerahan kendaraan bermotor bekas dengan besaran tertentu pada dasarnya termasuk kategori kode 05. Namun pembelinya BUMN yang ditunjuk sebagai Pemungut PPN dan pembayaran jauh di atas batas pengecualian Rp10.000.000 termasuk PPN, sehingga PPN dipungut oleh BUMN. Lampiran huruf D PER-11/PJ/2025 menetapkan bahwa penyerahan yang PPN-nya dipungut pemungut PPN selain instansi pemerintah tetap memakai kode 03 meskipun jenis penyerahannya juga termasuk kategori kode 05.",
        jejakHitung: [],
        mengapaSalah: { A: "Kode 02 untuk penyerahan kepada Pemungut PPN instansi pemerintah, bukan BUMN.", B: "Kode 05 hanya bila PPN besaran tertentu dipungut sendiri oleh penjual; bila dipungut pemungut, kode 03 tetap dipakai.", D: "Kode 01 hanya untuk penyerahan di luar kategori kode 02–10." },
        jebakan: "Urutan uji: (a) apakah pembeli pemungut; (b) apakah dikecualikan dari pemungutan; (c) bila dipungut → 02/03, bila dikecualikan → kode menurut jenis penyerahan."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 16A s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 65/PMK.03/2022 Pasal 2 ayat (2) s.t.d.d. PMK 11/2025", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 291 ayat (1), Pasal 292 ayat (1) huruf a, Pasal 294 ayat (1) huruf a", berlakuSejak: "2025-01-01" },
        { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Lampiran huruf D (kode transaksi 03)", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 79, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-154",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Tuan Bima adalah PKP yang menjual mesin pengemas. Ia menerima uang muka 30% dari PT Ortax Manufaktur pada 9 September 2026. Mesin diserahkan pada 6 Oktober 2026 dan sisa pembayaran diterima pada 20 Oktober 2026. Faktur Pajak atas uang muka tersebut wajib dibuat pada ...",
      kataKualifikasi: [],
      opsi: { A: "9 September 2026", B: "6 Oktober 2026", C: "20 Oktober 2026", D: "30 September 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bila penerimaan pembayaran terjadi sebelum penyerahan BKP, Faktur Pajak harus dibuat pada saat penerimaan pembayaran. Uang muka diterima 9 September 2026, sebelum mesin diserahkan, sehingga Faktur Pajak atas uang muka dibuat pada tanggal tersebut. Faktur atas sisa nilai dibuat pada saat penyerahan 6 Oktober 2026.",
        jejakHitung: [],
        mengapaSalah: { B: "6 Oktober 2026 adalah saat pembuatan faktur atas sisa nilai, bukan atas uang muka.", C: "20 Oktober 2026 adalah pelunasan yang terjadi setelah penyerahan.", D: "30 September 2026 adalah akhir bulan penerimaan uang muka, yang hanya relevan untuk faktur gabungan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 13 ayat (1a) huruf a dan b s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 13 ayat (1a) huruf a dan b s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 82, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-155",
      topik: "A4.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Ortax Garmen (PKP) menerima pesanan jasa maklon dari Ortax ABC Co. Ltd (Jepang). Spesifikasi dan bahan baku disediakan Ortax ABC Co. Ltd, pakaian jadi tetap milik Ortax ABC Co. Ltd dan dikirim ke Jepang melalui mekanisme ekspor barang. Terdapat perjanjian tertulis yang memuat jenis, rincian kegiatan, dan nilai jasa, serta bukti pembayaran Rp400.000.000 melalui bank. PPN atas jasa maklon tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp44.000.000,00, karena jasa dilakukan di dalam Daerah Pabean", B: "Rp48.000.000,00, karena DPP nilai lain tidak berlaku untuk jasa maklon", C: "Rp0,00, karena merupakan ekspor JKP dengan tarif 0%", D: "tidak ada, karena jasa maklon untuk pihak luar negeri bukan objek PPN" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Jasa maklon termasuk jenis JKP yang atas ekspornya dikenai PPN 0%, sepanjang memenuhi Pasal 281 ayat (1) PMK 81/2024 (spesifikasi dan bahan dari penerima, hasilnya milik penerima, dan dikirim ke luar Daerah Pabean melalui ekspor barang) serta Pasal 282 ayat (1) (perjanjian tertulis dan bukti pembayaran). Semua syarat terpenuhi, sehingga PPN terutang dengan tarif 0% dan Pajak Masukan terkait dapat dikreditkan.",
        jejakHitung: [],
        mengapaSalah: { A: "Jasa maklon yang memenuhi syarat ekspor JKP dikenai tarif 0%, bukan 12% × DPP nilai lain.", B: "Jasa maklon yang memenuhi syarat ekspor JKP dikenai tarif 0%, bukan tarif 12% penuh.", D: "Ekspor JKP tetap objek PPN (Pasal 4 ayat (1) huruf h), hanya tarifnya 0%; konsekuensinya Pajak Masukan dapat dikreditkan." },
        jebakan: "Langkah: Syarat Pasal 281 ayat (1) dan Pasal 282 ayat (1): terpenuhi; PPN = 0% × Rp400.000.000: Rp0."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 4 ayat (1) huruf h dan Pasal 7 ayat (2) huruf c", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 278, 280 ayat (1) huruf a, 281 ayat (1), 282 ayat (1)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 83, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-156",
      topik: "A4.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Menurut definisi dalam UU PPN, pasangan jenis transaksi dan dasar nilai yang tepat (sebelum penerapan DPP nilai lain 11/12 berdasarkan PMK 131/2024) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ekspor JKP oleh PT Ortax Services — Nilai Ekspor", B: "Penyerahan mesin produksi (BKP berwujud) oleh PT Ortax Manufaktur — Penggantian", C: "Pemanfaatan JKP dari luar Daerah Pabean oleh PT Ortax Logistik — Penggantian", D: "Impor bahan baku (BKP) oleh CV Ortax Distributor — Harga Jual" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penggantian meliputi nilai yang diminta pengusaha karena penyerahan JKP, ekspor JKP, atau ekspor BKP tidak berwujud, dan juga nilai yang dibayar atau seharusnya dibayar penerima jasa karena pemanfaatan JKP dari luar Daerah Pabean (UU PPN Pasal 1 angka 19). Karena itu pemanfaatan JKP dari luar Daerah Pabean memakai Penggantian; PPN-nya 12% × 11/12 × Penggantian (PMK 131/2024 Pasal 3).",
        jejakHitung: [],
        mengapaSalah: { A: "Definisi Penggantian tegas mencakup ekspor JKP dan PMK 81/2024 Pasal 278 ayat (4) menetapkan DPP ekspor JKP adalah Penggantian (ketentuan lama PMK 32/PMK.010/2019 telah dicabut sejak 1 Januari 2025); Nilai Ekspor dipakai untuk ekspor BKP berwujud (Pasal 1 angka 26).", B: "Penyerahan BKP berwujud memakai Harga Jual (Pasal 1 angka 18), bukan Penggantian.", D: "Impor memakai Nilai Impor (Pasal 1 angka 20), bukan Harga Jual." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 1 angka 18, 19, 20, dan 26 s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 1 angka 18, 19, 20, dan 26 s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 278 ayat (4)", berlakuSejak: "2025-01-01" },
        { pasal: "PMK 131/2024 Pasal 3 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 84, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-157",
      topik: "A4.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Pada Agustus 2026 PT Ortax Elektrik (PKP) menerima dua Faktur Pajak masukan dari dua pemasok. Faktur X tidak mencantumkan nama penanda tangan, sedangkan faktur Y tidak mencantumkan Harga Jual. Identitas pembeli pada kedua faktur benar. Langkah apa yang tepat agar PPN pada kedua faktur dapat dikreditkan?",
      kataKualifikasi: [],
      opsi: { A: "Mengkreditkan faktur X karena nama penanda tangan bukan keterangan wajib, dan meminta pembatalan faktur Y", B: "Meminta kedua pemasok membatalkan faktur dan menerbitkan faktur baru, karena setiap kesalahan pengisian keterangan faktur harus diselesaikan dengan pembatalan", C: "Meminta kedua pemasok membuat Faktur Pajak pengganti yang diisi lengkap, lalu mengkreditkan PM berdasarkan faktur pengganti", D: "Langsung mengkreditkan kedua faktur karena kesalahan pengisian hanya berakibat denda bagi penjual" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Nama penanda tangan dan Harga Jual adalah keterangan wajib, sehingga kedua faktur tidak lengkap dan PM-nya tidak dapat dikreditkan. Karena kesalahannya bukan pada identitas pembeli, koreksinya melalui faktur pengganti yang lengkap; PM dikreditkan berdasarkan faktur pengganti.",
        jejakHitung: [],
        mengapaSalah: { A: "Nama penanda tangan termasuk keterangan wajib, dan kesalahan selain identitas pembeli dikoreksi dengan faktur pengganti, bukan pembatalan.", B: "Pembatalan dipakai untuk kesalahan identitas pembeli atau transaksi batal; kesalahan pengisian keterangan lain dikoreksi dengan faktur pengganti.", D: "Faktur yang tidak memuat keterangan wajib secara lengkap tidak dapat dikreditkan Pajak Masukannya (Pasal 9 ayat (8) huruf f)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 9 ayat (8) huruf f dan Pasal 13 ayat (5)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 9 ayat (8) huruf f dan Pasal 13 ayat (5)", berlakuSejak: null },
        { pasal: "PER-11/PJ/2025 Pasal 33, Pasal 48 ayat (1), Pasal 57 ayat (4)", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sumber tidak memuat Pengecoh; alasan opsi salah disusun sendiri. · Stem terpotong di sumber (keterangan faktur X hilang); dilengkapi \"Faktur X tidak mencantumkan nama penanda tangan\" berdasarkan opsi A dan pembahasan.",
      sumber: { set: "TO-B-2026-11", no: 91, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-158",
      topik: "A4.3",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Menurut ketentuan batasan pengusaha kecil PPN yang berlaku, pengusaha kecil adalah pengusaha yang dalam satu tahun buku melakukan penyerahan BKP dan/atau JKP dengan peredaran bruto dan/atau penerimaan bruto ...",
      kataKualifikasi: [],
      opsi: { A: "tidak lebih dari Rp600.000.000,00, dan wajib dikukuhkan sebagai PKP", B: "tidak lebih dari Rp4.800.000.000,00, dan tidak boleh dikukuhkan sebagai PKP", C: "tidak lebih dari Rp4.800.000.000,00, dan dapat memilih dikukuhkan sebagai PKP", D: "tidak lebih dari Rp50.000.000.000,00, dan dapat memilih dikukuhkan sebagai PKP" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Batas pengusaha kecil adalah peredaran bruto dan/atau penerimaan bruto tidak lebih dari Rp4,8 miliar dalam satu tahun buku. Pengusaha kecil dikecualikan dari kewajiban dikukuhkan, tetapi dapat memilih dikukuhkan sebagai PKP; bila memilih, seluruh kewajiban PKP berlaku penuh.",
        jejakHitung: [],
        mengapaSalah: { A: "Rp600 juta adalah batas lama sebelum 2014, dan pengusaha kecil justru tidak wajib dikukuhkan.", B: "Batasnya benar, tetapi pengusaha kecil boleh memilih dikukuhkan sebagai PKP.", D: "Rp50 miliar adalah batas peredaran bruto fasilitas Pasal 31E UU PPh, bukan batas pengusaha kecil PPN." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPN Pasal 3A ayat (1), (1a), dan (2)."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 3A ayat (1), (1a), dan (2)", berlakuSejak: null },
        { pasal: "PMK 68/PMK.03/2010 Pasal 1 ayat (1) s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: null },
        { pasal: "PMK 164/2023 Pasal 21", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Sumber tidak memuat Pengecoh; alasan opsi salah disusun sendiri. · Teks opsi C kosong di sumber; disusun dari pembahasan (tidak lebih dari Rp4,8 miliar, dapat memilih dikukuhkan).",
      sumber: { set: "TO-B-2026-11", no: 92, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-159",
      topik: "A4.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Ortax Software (PKP) memberikan lisensi perangkat lunak kepada Ortax XYZ Pte. Ltd (Singapura) senilai Rp600.000.000. Perjanjian menyatakan perangkat lunak dipasang dan dipakai untuk mengelola proyek Ortax XYZ Pte. Ltd di Surabaya, dan tidak dipakai di luar Indonesia. Imbalan diakui sebagai piutang pada September 2026. Analisis yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ekspor BKP tidak berwujud bertarif 0%, karena penerima lisensi berkedudukan dan membayar imbalannya dari luar negeri.", B: "Bukan objek PPN, karena penerima lisensi bukan subjek pajak dalam negeri sehingga PT Ortax Software tidak dapat memungut PPN.", C: "Pemanfaatan BKP tidak berwujud dari luar Daerah Pabean, sehingga PPN disetor sendiri oleh Ortax XYZ Pte. Ltd.", D: "Penyerahan BKP tidak berwujud di dalam Daerah Pabean oleh PKP, sehingga terutang PPN Rp66.000.000,00 yang dipungut PT Ortax Software." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ekspor BKP tidak berwujud ditentukan oleh tempat pemanfaatan, yaitu di luar Daerah Pabean (UU PPN Pasal 1 angka 28), bukan oleh domisili penerima. Karena lisensi dimanfaatkan di Surabaya, transaksi ini merupakan penyerahan BKP tidak berwujud di dalam Daerah Pabean oleh PKP, dengan PPN 12% × DPP nilai lain 11/12.",
        jejakHitung: [],
        mengapaSalah: { A: "Ekspor BKP tidak berwujud ditentukan oleh tempat pemanfaatan di luar Daerah Pabean, bukan oleh domisili atau asal pembayaran penerima.", B: "Penyerahan BKP tidak berwujud oleh PKP di dalam Daerah Pabean adalah objek PPN tanpa memandang status subjek penerima.", C: "BKP tidak berwujud diserahkan oleh PKP dalam negeri dan dimanfaatkan di dalam negeri, bukan dimanfaatkan dari luar Daerah Pabean." },
        jebakan: "Langkah: DPP nilai lain = 11/12 × Rp600.000.000: Rp550.000.000; PPN = 12% × Rp550.000.000: Rp66.000.000."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 1 angka 28, Pasal 4 ayat (1) huruf a dan g, Pasal 7 ayat (1) huruf b", berlakuSejak: null },
        { pasal: "PMK 131/2024 Pasal 3 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sumber tidak memuat Pengecoh; alasan opsi salah disusun sendiri. · Teks opsi D kosong di sumber; potongan \"Rp66.000.000,00 dipungut PT Ortax Software.\" tercetak di akhir opsi B. Opsi B dirapikan dan opsi D disusun dari potongan tersebut dan pembahasan. Pembahasan sumber menulis \"11/11\" (salah ketik), dibetulkan menjadi 11/12.",
      sumber: { set: "TO-B-2026-11", no: 99, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A4-160",
      topik: "A4.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Penyerahan BKP berupa aktiva yang menurut tujuan semula tidak untuk diperjualbelikan oleh PKP ...",
      kataKualifikasi: [],
      opsi: { A: "bukan objek PPN, karena aktiva tersebut bukan barang dagangan dan tidak dijual dalam kegiatan usaha pokok", B: "terutang PPN, kecuali aktiva yang Pajak Masukannya tidak dapat dikreditkan karena tidak terkait langsung dengan usaha", C: "terutang PPN hanya bila aktiva dijual dengan harga di atas nilai sisa bukunya, sebesar selisih keuntungannya", D: "terutang PPN hanya bila aktiva tersebut diperoleh setelah pengusaha dikukuhkan sebagai PKP dan Pajak Masukannya telah dikreditkan" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 16D mengenakan PPN atas penyerahan aktiva yang menurut tujuan semula tidak untuk diperjualbelikan, seperti mesin, bangunan, dan kendaraan, kecuali aktiva yang Pajak Masukannya tidak dapat dikreditkan berdasarkan Pasal 9 ayat (8) huruf b dan c. Karena huruf c (sedan dan station wagon) telah dihapus UU HPP, pengecualian yang tersisa adalah aktiva yang tidak mempunyai hubungan langsung dengan kegiatan usaha.",
        jejakHitung: [],
        mengapaSalah: { A: "Pasal 16D justru menetapkan penyerahan aktiva yang semula tidak untuk diperjualbelikan sebagai penyerahan yang terutang PPN.", C: "PPN Pasal 16D tidak bergantung pada adanya keuntungan dan tidak dihitung dari selisih keuntungan.", D: "Pengecualian Pasal 16D hanya untuk aktiva yang Pajak Masukannya tidak dapat dikreditkan karena tidak berhubungan langsung dengan usaha, bukan syarat telah dikreditkan." },
        jebakan: "Penjelasan Pasal 16D yang masih menyebut sedan dan station wagon harus dibaca bersama penghapusan Pasal 9 ayat (8) huruf c oleh UU 7/2021."
      },
      dasarHukum: [
        { pasal: "UU PPN Pasal 16D dan Penjelasannya", berlakuSejak: null },
        { pasal: "UU PPN Pasal 9 ayat (8) huruf b (huruf c dihapus UU 7/2021)", berlakuSejak: "2021-10-29" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 100, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-A4-01", topik: "A4.6", tipe: "angka", depan: "Tarif PPN nominal sejak 1 Januari 2025?", belakang: "12%", dasar: "Pasal 7 ayat (1) huruf b UU PPN; PMK 131/2024", berlakuSejak: "2025-01-01", menggantikan: "11% (1 April 2022–31 Desember 2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-02", topik: "A4.6", tipe: "angka", depan: "DPP PPN barang/jasa non-mewah sejak 2025?", belakang: "Nilai lain 11/12 × harga jual/penggantian/nilai impor; beban efektif 11%", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01", menggantikan: "DPP = harga jual penuh dengan tarif 11%", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-03", topik: "A4.6", tipe: "angka", depan: "PPN atas barang mewah (objek PPnBM) sejak 1 Februari 2025?", belakang: "12% × harga jual penuh, ditambah PPnBM", dasar: "PMK 131/2024 Pasal 2 dan 5", berlakuSejak: "2025-02-01", menggantikan: "Januari 2025 (transisi): DPP 11/12", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-04", topik: "A4.6", tipe: "angka", depan: "Harga non-mewah sudah termasuk PPN: rumus PPN?", belakang: "PPN = 11/111 × harga total", dasar: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-05", topik: "A4.6", tipe: "angka", depan: "PPN besaran tertentu kendaraan bermotor bekas?", belakang: "1,1% × harga jual (10% × 11/12 × 12%); PM tidak dikreditkan", dasar: "PMK 65/PMK.03/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04", menggantikan: "Rumus 10% × tarif 11% (2022–2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-06", topik: "A4.6", tipe: "angka", depan: "PPN kegiatan membangun sendiri (KMS): luas minimum dan beban?", belakang: "Bangunan ≥ 200 m²; 2,2% (20% × 11/12 × 12%) × biaya tanpa tanah", dasar: "Pasal 16C UU PPN; PMK 81/2024 Pasal 324 s.t.d.d. PMK 11/2025", berlakuSejak: "2025-01-01", menggantikan: "PMK 61/PMK.03/2022 (dicabut PMK 81/2024): 20% × tarif", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-07", topik: "A4.6", tipe: "angka", depan: "Tarif PPnBM hunian mewah dan batas harganya?", belakang: "20% untuk harga jual ≥ Rp30 miliar", dasar: "PMK 96/PMK.03/2021 s.t.d.d. PMK 15/2023", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-08", topik: "A4.6", tipe: "pasal", depan: "Berapa kali PPnBM dikenakan, dan apakah dapat dikreditkan?", belakang: "Sekali, di pabrikan atau saat impor; tidak dapat dikreditkan", dasar: "Pasal 5 UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-09", topik: "A4.5", tipe: "angka", depan: "Batas unggah faktur pajak Coretax?", belakang: "Tanggal 20 bulan berikutnya setelah tanggal faktur", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: "tanggal 15 bulan berikutnya (e-Faktur)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-10", topik: "A4.5", tipe: "angka", depan: "Denda faktur tidak dibuat, terlambat, atau tidak lengkap?", belakang: "1% × DPP", dasar: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "2% × DPP (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-A4-11", topik: "A4.5", tipe: "prosedur", depan: "Faktur dibuat lebih dari 3 bulan setelah saat seharusnya?", belakang: "Dianggap tidak dibuat; PPN tetap disetor, PM pembeli tidak dapat dikreditkan", dasar: "Pasal 13 UU PPN; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-12", topik: "A4.5", tipe: "angka", depan: "Jumlah kode transaksi faktur di Coretax?", belakang: "10 kode (01–10); nomor seri otomatis dari Coretax", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: "9 kode (01–09) dan NSFP diminta ke KPP", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-13", topik: "A4.5", tipe: "definisi", depan: "Kode faktur 07, 08, dan 09?", belakang: "07 tidak dipungut/DTP; 08 dibebaskan; 09 aktiva Pasal 16D", dasar: "PER-11/PJ/2025 (meneruskan PER-03/PJ/2022)", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-14", topik: "A4.5", tipe: "prosedur", depan: "Faktur gabungan dibuat paling lama kapan?", belakang: "Akhir bulan penyerahan", dasar: "Pasal 13 ayat (2a) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-15", topik: "A4.5", tipe: "pasal", depan: "Retur BKP mengurangi PK penjual pada masa apa?", belakang: "Masa Pajak terjadinya pengembalian BKP", dasar: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-16", topik: "A4.5", tipe: "definisi", depan: "Dokumen tertentu yang dipersamakan dengan faktur pajak (contoh)?", belakang: "PIB, PEB, bukti setor PPN pemanfaatan luar negeri, tagihan listrik/telepon", dasar: "Pasal 13 ayat (6) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-17", topik: "A4.3", tipe: "angka", depan: "Batas peredaran bruto pengusaha kecil PPN?", belakang: "≤ Rp4,8 miliar setahun", dasar: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01", menggantikan: "Rp600 juta (PMK 68/2010, sampai 2013)", dekTambahan: [] },
    { id: "KT-A4-18", topik: "A4.3", tipe: "prosedur", depan: "WP PPh final UMKM: batas lapor pengukuhan PKP setelah omzet melampaui Rp4,8 miliar?", belakang: "Akhir tahun buku saat batas terlampaui; pungut PPN mulai Masa pertama tahun buku berikutnya", dasar: "PMK 164/2023 Pasal 17 ayat (3) dan Pasal 18", berlakuSejak: null, menggantikan: "Tenggat umum akhir bulan berikutnya (PMK 197/2013), tidak dipakai bagi WP PPh final UMKM", dekTambahan: [] },
    { id: "KT-A4-19", topik: "A4.4", tipe: "pasal", depan: "Saat terutang bila pembayaran diterima sebelum penyerahan?", belakang: "Saat pembayaran, sebesar yang dibayar", dasar: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-20", topik: "A4.4", tipe: "prosedur", depan: "Saat terutang dan batas setor PPN pemanfaatan JKP luar negeri?", belakang: "Paling awal: diakui utang, ditagih, atau dibayar; setor tanggal 15 bulan berikutnya", dasar: "Pasal 11 UU PPN; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-21", topik: "A4.2", tipe: "definisi", depan: "Dibebaskan vs tidak dipungut: nasib PM?", belakang: "Dibebaskan: PM tidak dapat dikreditkan; tidak dipungut: PM dapat dikreditkan", dasar: "Pasal 16B ayat (2) dan (3) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-22", topik: "A4.2", tipe: "definisi", depan: "Jasa yang bukan JKP setelah UU HPP?", belakang: "Keagamaan, kesenian/hiburan, perhotelan, pemerintahan umum, parkir, boga/katering", dasar: "Pasal 4A ayat (3) UU PPN", berlakuSejak: "2022-04-01", menggantikan: "Daftar lama termasuk jasa kesehatan, pendidikan, keuangan (kini dibebaskan)", dekTambahan: [] },
    { id: "KT-A4-23", topik: "A4.2", tipe: "angka", depan: "PPN DTP rumah tahun 2026?", belakang: "100% atas bagian harga s.d. Rp2 miliar; harga jual maksimal Rp5 miliar", dasar: "PMK 90/2025", berlakuSejak: "2026-01-01", menggantikan: "2025: 100% Jan–Jun, 50% Jul–Des, kemudian diubah 100%", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-24", topik: "A4.2", tipe: "pasal", depan: "Aktiva Pasal 16D yang dikecualikan dari PPN?", belakang: "Aktiva yang PM-nya tidak dapat dikreditkan karena Pasal 9 ayat (8) huruf b dan c", dasar: "Pasal 16D UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-25", topik: "A4.7", tipe: "angka", depan: "Batas pengkreditan PM yang terlewat?", belakang: "Paling lama 3 Masa Pajak setelah berakhirnya masa faktur", dasar: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-26", topik: "A4.7", tipe: "pasal", depan: "PM sedan dan station wagon dapat dikreditkan?", belakang: "Tidak, kecuali barang dagangan atau disewakan", dasar: "Pasal 9 ayat (8) huruf c UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-27", topik: "A4.7", tipe: "angka", depan: "Pedoman PM untuk masa sebelum dikukuhkan PKP?", belakang: "80% × Pajak Keluaran", dasar: "Pasal 9 ayat (9a) UU PPN (UU Cipta Kerja)", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-28", topik: "A4.7", tipe: "prosedur", depan: "PM bersama untuk penyerahan terutang dan dibebaskan?", belakang: "Dikreditkan proporsional: penyerahan terutang ÷ seluruh penyerahan", dasar: "Pasal 9 ayat (5)–(6) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-29", topik: "A4.8", tipe: "definisi", depan: "Kode faktur ke instansi pemerintah dan ke BUMN pemungut?", belakang: "02 (instansi pemerintah); 03 (pemungut selain instansi pemerintah)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-30", topik: "A4.8", tipe: "angka", depan: "Kriteria penunjukan pemungut PPN PMSE?", belakang: "Transaksi > Rp600 juta/tahun atau Rp50 juta/bulan; traffic > 12.000/tahun atau 1.000/bulan", dasar: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-31", topik: "A4.8", tipe: "angka", depan: "PPh 22 yang dipungut bendahara atas pembelian barang?", belakang: "1,5% × harga tidak termasuk PPN", dasar: "Pasal 22 ayat (1) huruf a UU PPh; PMK 34/PMK.010/2017", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-32", topik: "A4.9", tipe: "pasal", depan: "PKP yang boleh restitusi setiap masa?", belakang: "Eksportir, penyerahan ke pemungut, tidak dipungut, belum berproduksi", dasar: "Pasal 9 ayat (4b) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-33", topik: "A4.9", tipe: "angka", depan: "Jangka waktu keputusan restitusi melalui pemeriksaan?", belakang: "Paling lama 12 bulan; lewat waktu dianggap dikabulkan", dasar: "Pasal 17B UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-34", topik: "A4.9", tipe: "angka", depan: "Batas pengembalian pendahuluan Pasal 17D bagi PKP sejak 1 Mei 2026?", belakang: "Lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01", menggantikan: "Rp5 miliar (PMK 39/2018 s.t.d.d. PMK 209/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-35", topik: "A4.9", tipe: "angka", depan: "Sanksi SKPKB atas PPN yang tidak seharusnya dikompensasikan?", belakang: "Kenaikan 75%", dasar: "Pasal 13 ayat (3) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "Kenaikan 100% (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-A4-36", topik: "A4.10", tipe: "angka", depan: "Batas setor dan lapor SPT Masa PPN?", belakang: "Akhir bulan berikutnya; setor sebelum SPT disampaikan", dasar: "Pasal 15A UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-37", topik: "A4.10", tipe: "angka", depan: "Denda keterlambatan SPT Masa PPN?", belakang: "Rp500.000 per SPT", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-38", topik: "A4.10", tipe: "angka", depan: "Bunga terlambat setor PPN kurang bayar?", belakang: "(Tarif acuan + 5%) ÷ 12 per bulan, maksimal 24 bulan", dasar: "Pasal 9 ayat (2a) UU KUP; KMK tarif bunga bulanan", berlakuSejak: "2021-10-29", menggantikan: "2% per bulan flat (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-A4-39", topik: "A4.10", tipe: "prosedur", depan: "Sejak masa pajak apa SPT Masa PPN disampaikan melalui Coretax?", belakang: "Masa Pajak Januari 2025", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: "e-Faktur desktop dan SPT 1111 via DJP Online", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-40", topik: "A4.1", tipe: "definisi", depan: "Mekanisme pemungutan PPN Indonesia?", belakang: "Indirect subtraction: PPN disetor = Pajak Keluaran − Pajak Masukan", dasar: "Pasal 9 ayat (2)–(3) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-41", topik: "A4.2", tipe: "pasal", depan: "Penyerahan BKP secara konsinyasi: termasuk penyerahan?", belakang: "Ya; PPN terutang saat BKP dititipkan kepada penerima konsinyasi", dasar: "Pasal 1A ayat (1) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-42", topik: "A4.2", tipe: "pasal", depan: "Contoh yang tidak termasuk penyerahan BKP (Pasal 1A ayat (2))?", belakang: "Kepada makelar KUHD, untuk jaminan utang, merger/pemekaran antar-PKP", dasar: "Pasal 1A ayat (2) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-43", topik: "A4.4", tipe: "pasal", depan: "Saat terutang penyerahan BKP tidak bergerak?", belakang: "Saat hak menguasai diserahkan secara hukum atau nyata, mana lebih dulu", dasar: "Pasal 11 UU PPN; PP 44/2022", berlakuSejak: "2022-12-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-44", topik: "A4.5", tipe: "prosedur", depan: "Kapan faktur dibuat atas pekerjaan yang dibayar per termin?", belakang: "Saat penerimaan setiap pembayaran termin", dasar: "Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-45", topik: "A4.5", tipe: "prosedur", depan: "Kurs untuk PPN pada faktur pajak dalam valuta asing?", belakang: "Kurs KMK yang berlaku saat faktur seharusnya dibuat", dasar: "PP 44/2022 Pasal 21; KMK kurs pajak mingguan; PER-11/PJ/2025", berlakuSejak: "2022-12-02", menggantikan: "PP 1/2012: kurs saat faktur dibuat", dekTambahan: [] },
    { id: "KT-A4-46", topik: "A4.6", tipe: "angka", depan: "Dasar PPN dan PPnBM impor barang mewah?", belakang: "Nilai impor (CIF + bea masuk); PPN 12% penuh, PPnBM sesuai tarif", dasar: "Pasal 8A ayat (1) UU PPN; PMK 131/2024 Pasal 2", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-47", topik: "A4.6", tipe: "angka", depan: "Harga barang mewah sudah termasuk PPN dan PPnBM: rumus DPP?", belakang: "DPP = harga ÷ (1 + 12% + tarif PPnBM)", dasar: "Pasal 8A UU PPN; PMK 131/2024 Pasal 2", berlakuSejak: "2025-02-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-48", topik: "A4.7", tipe: "pasal", depan: "PM tidak dilaporkan tetapi ditemukan saat pemeriksaan?", belakang: "Dapat dikreditkan dalam penghitungan pemeriksaan", dasar: "Pasal 9 ayat (9b) UU PPN (UU Cipta Kerja)", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-49", topik: "A4.7", tipe: "definisi", depan: "PM yang tidak dapat dikreditkan: perlakuannya untuk PPh?", belakang: "Menjadi biaya atau harga perolehan, sepanjang pengeluarannya boleh dikurangkan", dasar: "Pasal 16B ayat (3) UU PPN; Pasal 6 dan 11 UU PPh", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-50", topik: "A4.8", tipe: "angka", depan: "Pembayaran bendahara sampai Rp2 juta: perlakuan PPN dan PPh 22?", belakang: "Bendahara tidak memungut PPN bila ≤ Rp2 juta termasuk PPN; PPh 22 diuji tanpa PPN", dasar: "PMK 59/PMK.03/2022; PMK 34/PMK.010/2017", berlakuSejak: null, menggantikan: "Batas PPN Rp1 juta (ketentuan sebelum PMK 59/PMK.03/2022)", dekTambahan: [] },
    { id: "KT-A4-51", topik: "A4.8", tipe: "prosedur", depan: "PPN PMSE dapat dikreditkan pembeli PKP bila?", belakang: "Dokumen pungutan mencantumkan nama dan NPWP pembeli", dasar: "PMK 60/PMK.03/2022", berlakuSejak: "2022-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-52", topik: "A4.9", tipe: "pasal", depan: "Restitusi PKP umum bertahun buku Juli–Juni diajukan pada masa?", belakang: "Masa Juni (akhir tahun buku), bukan Desember", dasar: "Pasal 9 ayat (4a) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-53", topik: "A4.9", tipe: "angka", depan: "SKPKB setelah pengembalian pendahuluan Pasal 17C/17D: sanksinya?", belakang: "Kenaikan 100% dari kekurangan pajak", dasar: "Pasal 17C dan 17D UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-54", topik: "A4.9", tipe: "angka", depan: "Jangka waktu SKPPKP untuk PPN?", belakang: "Paling lama 1 bulan sejak permohonan diterima lengkap", dasar: "Pasal 17C–17D UU KUP; PMK 28/2026", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-55", topik: "A4.10", tipe: "angka", depan: "Bunga pembetulan SPT Masa PPN yang menambah kurang bayar?", belakang: "(Acuan + 5%) ÷ 12 per bulan sejak jatuh tempo, maksimal 24 bulan", dasar: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "2% per bulan flat (sebelum UU Cipta Kerja/UU HPP)", dekTambahan: [] },
    { id: "KT-A4-56", topik: "A4.10", tipe: "prosedur", depan: "Batas setor atau lapor jatuh pada hari libur?", belakang: "Bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 (Pasal 100 untuk penyetoran)", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-57", topik: "A4.3", tipe: "prosedur", depan: "Bukan WP PPh final UMKM, omzet melampaui Rp4,8 miliar: batas lapor PKP?", belakang: "Akhir bulan berikutnya setelah bulan batas terlampaui", dasar: "PMK 68/PMK.03/2010 s.t.d.d. PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-58", topik: "A4.3", tipe: "definisi", depan: "Peredaran bruto untuk batas pengusaha kecil PPN mencakup?", belakang: "Penyerahan BKP/JKP saja; katering, restoran, dan bunga tidak dihitung", dasar: "PMK 197/PMK.03/2013; Pasal 4A UU PPN", berlakuSejak: "2014-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-59", topik: "A4.1", tipe: "definisi", depan: "Pengecer bukan PKP dalam rantai distribusi: akibatnya bagi PPN?", belakang: "PPN berhenti di PKP terakhir; PPN yang dibayar pengecer menjadi biaya", dasar: "Pasal 9 ayat (2) dan Pasal 3A UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-60", topik: "A4.6", tipe: "angka", depan: "Besaran tertentu PPN agen asuransi dan pialang asuransi?", belakang: "Agen 1,1% dan pialang 2,2% dari komisi; PM tidak dikreditkan", dasar: "PMK 67/PMK.03/2022 jo. PMK 11/2025", berlakuSejak: "2025-02-04", menggantikan: "Rumus 10%/20% × tarif 11% (2022–2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-61", topik: "A4.4", tipe: "prosedur", depan: "Akibat pemusatan tempat PPN terutang?", belakang: "Satu SPT Masa PPN di pusat; PK dan PM seluruh tempat digabung", dasar: "Pasal 12 UU PPN; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-62", topik: "A4.5", tipe: "prosedur", depan: "Penyerahan valas dengan uang muka: kurs untuk tiap faktur?", belakang: "Uang muka: kurs KMK saat diterima; sisa harga: kurs KMK saat penyerahan", dasar: "Pasal 13 ayat (1a) UU PPN; PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-63", topik: "A4.5", tipe: "angka", depan: "Masa berlaku kurs KMK mingguan?", belakang: "Rabu sampai Selasa; transaksi hari Selasa memakai kurs yang berlaku sejak Rabu sebelumnya", dasar: "KMK nilai kurs mingguan (nomor .../MK/EF.2/2026)", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-64", topik: "A4.5", tipe: "prosedur", depan: "Faktur valas dibuat terlambat: kurs dan sanksinya?", belakang: "Kurs KMK saat faktur seharusnya dibuat; denda 1% × DPP", dasar: "PP 44/2022 Pasal 21; Pasal 14 ayat (4) UU KUP", berlakuSejak: "2022-12-02", menggantikan: "PP 1/2012: kurs saat faktur dibuat", dekTambahan: [] },
    { id: "KT-A4-65", topik: "A4.6", tipe: "angka", depan: "DPP PPN impor dalam valas?", belakang: "(CIF + bea masuk) × kurs KMK tanggal PIB × 11/12; tarif 12%", dasar: "Pasal 1 UU PPN (nilai impor); PP 44/2022 Pasal 21; PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01", menggantikan: "Nilai impor penuh × 11% (2022–2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-66", topik: "A4.4", tipe: "prosedur", depan: "PPN JLN dibayar sebelum jasa/BKP tidak berwujud dimanfaatkan: kurs dan batas setor?", belakang: "Kurs KMK saat bayar, kecuali tagihan/utang lebih dulu; setor tanggal 15 bulan berikutnya ◐", dasar: "PP 44/2022; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-67", topik: "A4.6", tipe: "definisi", depan: "Selisih kurs saat pelunasan piutang valas: pengaruhnya pada PPN?", belakang: "Tidak ada; PPN tetap sesuai faktur, selisih kurs diakui untuk PPh", dasar: "PP 44/2022 Pasal 21; Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-68", topik: "A4.5", tipe: "prosedur", depan: "Nota retur atau faktur pengganti atas faktur valas: kurs yang dipakai?", belakang: "Kurs KMK faktur semula; retur dikurangkan pada masa retur ◐", dasar: "Pasal 5A UU PPN; PP 44/2022 Pasal 21; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-69", topik: "A4.10", tipe: "definisi", depan: "Ekualisasi penjualan valas vs DPP SPT Masa PPN: sumber selisih yang wajar?", belakang: "Kurs transaksi SAK di pembukuan berbeda dengan kurs KMK untuk PPN", dasar: "PP 44/2022 Pasal 21; PP 94/2010 Pasal 9", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-70", topik: "A4.5", tipe: "definisi", depan: "Fungsi faktur pajak?", belakang: "Bukti pungutan PPN oleh PKP penjual; sarana kredit PM bagi PKP pembeli", dasar: "Pasal 13 ayat (1) dan Pasal 9 ayat (8) huruf f UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-71", topik: "A4.5", tipe: "pasal", depan: "Faktur lengkap secara formal, tetapi transaksinya fiktif?", belakang: "Gagal syarat material; PM tidak dapat dikreditkan; pidana Pasal 39A UU KUP", dasar: "Pasal 13 ayat (9) UU PPN; Pasal 39A UU KUP", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-72", topik: "A4.5", tipe: "prosedur", depan: "Faktur ganda atas satu penyerahan yang sudah dilaporkan?", belakang: "Batalkan faktur duplikat; penjual dan pembeli membetulkan SPT Masa PPN masa faktur", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-73", topik: "A4.5", tipe: "prosedur", depan: "PPN atas retur bila PM semula dibiayakan atau dikapitalisasi?", belakang: "Mengurangi biaya atau harga perolehan pembeli, bukan PM", dasar: "Pasal 5A UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-74", topik: "A4.2", tipe: "definisi", depan: "Tiga syarat penyerahan BKP yang terutang PPN?", belakang: "BKP; di dalam Daerah Pabean; dalam kegiatan usaha atau pekerjaan pengusaha", dasar: "Pasal 4 ayat (1) huruf a UU PPN dan penjelasannya", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-75", topik: "A4.5", tipe: "prosedur", depan: "Faktur atas pembayaran termin dalam valas: kurs yang dipakai?", belakang: "Kurs KMK saat penerimaan pembayaran termin (saat faktur seharusnya dibuat)", dasar: "Pasal 13 ayat (1a) UU PPN; PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-76", topik: "A4.6", tipe: "angka", depan: "Impor barang mewah dalam valas: PPN dan PPnBM?", belakang: "PPN 12% × nilai impor penuh (kurs KMK PIB); PPnBM tarif × nilai impor", dasar: "Pasal 5 dan Pasal 8 UU PPN; PMK 131/2024 Pasal 2; PP 44/2022 Pasal 21", berlakuSejak: "2025-01-01", menggantikan: "PPN 11% atas nilai impor (s.d. 31 Desember 2024); transisi DPP 11/12 Januari 2025 hanya untuk penyerahan barang mewah kepada konsumen akhir", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A4-77", topik: "A4.6", tipe: "prosedur", depan: "DPP PPN JLN bila PPh Pasal 26 dipotong dari pembayaran?", belakang: "Penggantian bruto sebelum potongan PPh 26, kurs KMK saat terutang, × 11/12", dasar: "Pasal 8A ayat (1) UU PPN; PP 44/2022 Pasal 21; PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-78", topik: "A4.10", tipe: "prosedur", depan: "PM faktur valas dikreditkan di masa berikutnya atau dilunasi belakangan: rupiahnya?", belakang: "Tetap PPN rupiah dalam faktur (kurs KMK faktur), bukan kurs pelunasan", dasar: "Pasal 9 ayat (9) UU PPN; PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A4-79", topik: "A4.5", tipe: "prosedur", depan: "Faktur valas kode 03 kepada pemungut: PPN yang dipungut saat pembayaran?", belakang: "Sebesar PPN dalam faktur (kurs KMK saat faktur), bukan kurs saat dibayar", dasar: "Pasal 16A UU PPN; PP 44/2022 Pasal 21", berlakuSejak: "2022-12-02", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-A4-01", judul: "SPT Masa PPN pabrik: pemungut, ekspor, dan PM yang dicoret", topik: "A4.10", estimasiMenit: 18,
      narasi: "PT Mandiri Plastik (PKP, produsen kemasan plastik, tahun buku Januari–Desember) menyiapkan SPT Masa PPN Juni 2026 di Coretax. Pada Juni 2026 perusahaan menjual kemasan kepada PKP swasta Rp2.400.000.000, kepada PT Kereta Api Indonesia (Persero) yang ditetapkan sebagai pemungut PPN Rp600.000.000, dan mengekspor Rp1.000.000.000 dengan PEB. Faktur masukan bulan itu: bahan baku dengan harga Rp1.500.000.000 (faktur lengkap), jasa servis mesin dengan PPN Rp8.800.000 (faktur lengkap), pembelian sedan untuk direktur utama dengan PPN Rp66.000.000, dan pembelian suku cadang dengan PPN Rp3.300.000 yang fakturnya tidak mencantumkan NPWP/NIK perusahaan. Terdapat lebih bayar Masa Mei 2026 Rp12.000.000 yang dikompensasikan. Semua harga belum termasuk PPN dan produk yang dijual bukan barang mewah.",
      data: [["Penjualan ke PKP swasta", "Rp2.400.000.000"], ["Penjualan ke BUMN pemungut", "Rp600.000.000"], ["Ekspor (PEB)", "Rp1.000.000.000"], ["Pembelian bahan baku (harga)", "Rp1.500.000.000"], ["PPN jasa servis mesin", "Rp8.800.000"], ["PPN sedan direktur", "Rp66.000.000"], ["PPN suku cadang, faktur tanpa identitas pembeli", "Rp3.300.000"], ["Kompensasi dari Masa Mei 2026", "Rp12.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa PK yang harus dipungut sendiri (Rp)?", tipe: "angka", jawaban: 264000000, toleransi: 0,
          petunjuk: ["Hanya penjualan dalam negeri kepada PKP swasta yang dipungut sendiri", "11% × Rp2.400.000.000 (= 12% × 11/12)", "Jawaban: Rp264.000.000"],
          penjelasan: "Penyerahan kepada BUMN pemungut dipungut pemungut (Pasal 16A) dan ekspor bertarif 0%; PK dipungut sendiri = 12% × 11/12 × Rp2,4 miliar = Rp264.000.000." },
        { no: 2, pertanyaan: "Bagaimana perlakuan penjualan kepada PT Kereta Api Indonesia (Persero)?", tipe: "pilihan", opsi: { A: "Kode 03; PPN Rp66.000.000 dipungut dan disetor BUMN", B: "Kode 01; PPN Rp66.000.000 disetor sendiri", C: "Kode 02; PPN dipungut bendahara negara", D: "Kode 07; PPN tidak dipungut" }, jawaban: "A",
          petunjuk: ["BUMN yang ditetapkan sebagai pemungut bukan instansi pemerintah", "Cari kode untuk pemungut selain instansi pemerintah", "Jawaban: A"],
          penjelasan: "Kode 03; PPN 11% × Rp600 juta = Rp66.000.000 dipungut dan disetor BUMN, sehingga tidak masuk setoran PT Mandiri Plastik." },
        { no: 3, pertanyaan: "Berapa PM yang dapat dikreditkan (Rp)?", tipe: "angka", jawaban: 173800000, toleransi: 0,
          petunjuk: ["Coret PM sedan (Pasal 9 ayat (8) huruf c) dan faktur tanpa identitas pembeli (huruf f)", "PM bahan baku = 11% × Rp1,5 miliar = Rp165.000.000, ditambah servis mesin", "Jawaban: Rp173.800.000"],
          penjelasan: "PM bahan baku Rp165.000.000 + servis mesin Rp8.800.000 = Rp173.800.000; PM sedan direktur dan faktur suku cadang tanpa identitas pembeli tidak dapat dikreditkan." },
        { no: 4, pertanyaan: "Berapa PPN kurang bayar Masa Juni 2026 (Rp)?", tipe: "angka", jawaban: 78200000, toleransi: 0,
          petunjuk: ["PK dipungut sendiri − PM − kompensasi", "264.000.000 − 173.800.000 − 12.000.000", "Jawaban: Rp78.200.000"],
          penjelasan: "Kurang bayar Rp78.200.000 harus disetor sebelum SPT Masa PPN disampaikan." },
        { no: 5, pertanyaan: "Kapan batas penyetoran dan penyampaian SPT Masa PPN Juni 2026?", tipe: "pilihan", opsi: { A: "Setor 15 Juli 2026, lapor 20 Juli 2026", B: "Setor dan lapor paling lambat 31 Juli 2026, setor sebelum SPT disampaikan", C: "Setor 10 Juli 2026, lapor 31 Juli 2026", D: "Setor dan lapor paling lambat 31 Agustus 2026" }, jawaban: "B",
          petunjuk: ["PPN punya aturan khusus di Pasal 15A UU PPN", "Bukan tanggal 15 atau 20 milik PPh", "Jawaban: B"],
          penjelasan: "Pasal 15A: setor paling lama akhir bulan berikutnya dan sebelum SPT disampaikan; SPT Masa PPN paling lama akhir bulan berikutnya, yaitu 31 Juli 2026." },
        { no: 6, pertanyaan: "Jika setoran tepat waktu tetapi SPT baru disampaikan 3 Agustus 2026, berapa denda yang ditagih (Rp)?", tipe: "angka", jawaban: 500000, toleransi: 0,
          petunjuk: ["Setoran tepat waktu → tidak ada bunga", "Denda Pasal 7 ayat (1) untuk SPT Masa PPN", "Jawaban: Rp500.000"],
          penjelasan: "Keterlambatan SPT Masa PPN dikenai denda Rp500.000 melalui STP." }
      ],
      kesimpulan: "PK dipungut sendiri Rp264 juta (penyerahan ke BUMN pemungut dan ekspor dipisahkan), PM yang dapat dikreditkan Rp173,8 juta setelah mencoret sedan dan faktur cacat, dikurangi kompensasi Rp12 juta, sehingga kurang bayar Rp78,2 juta disetor dan dilaporkan paling lambat 31 Juli 2026. Terlambat lapor saja menimbulkan denda Rp500.000.",
      kalkulatorRef: "ppn"
    },
    {
      id: "K-A4-02", judul: "Pengembang properti: PPN DTP rumah 2026, hunian mewah, dan rumah di atas batas", topik: "A4.6", estimasiMenit: 15,
      narasi: "PT Bumi Asri Residence (PKP, pengembang) pada Masa Mei 2026 menyerahterimakan tiga unit: (1) rumah tapak baru siap huni kepada Nyonya Sari (WNI, ber-NIK, belum pernah memanfaatkan fasilitas) dengan harga jual Rp3.200.000.000; (2) satu unit apartemen premium kepada Tuan Robert dengan harga jual Rp35.000.000.000 (hunian mewah, PPnBM 20%); dan (3) rumah tapak baru kepada Tuan Yoga dengan harga jual Rp5.400.000.000. Semua harga belum termasuk pajak. Fasilitas PPN DTP rumah 2026 (PMK 90/2025) memberikan DTP 100% atas PPN bagian harga jual sampai Rp2 miliar untuk rumah berharga jual paling tinggi Rp5 miliar yang diserahterimakan pada 1 Januari–31 Desember 2026.",
      data: [["Rumah Nyonya Sari", "Rp3.200.000.000"], ["Apartemen Tuan Robert (hunian mewah)", "Rp35.000.000.000"], ["Rumah Tuan Yoga", "Rp5.400.000.000"], ["Batas harga jual DTP", "Rp5.000.000.000"], ["Bagian harga yang DTP", "s.d. Rp2.000.000.000"], ["Tarif PPnBM hunian mewah", "20%"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa PPN terutang atas rumah Nyonya Sari sebelum fasilitas (Rp)?", tipe: "angka", jawaban: 352000000, toleransi: 0,
          petunjuk: ["Rumah non-mewah → DPP nilai lain 11/12", "11% × Rp3.200.000.000", "Jawaban: Rp352.000.000"],
          penjelasan: "12% × 11/12 × Rp3,2 miliar = Rp352.000.000." },
        { no: 2, pertanyaan: "Berapa PPN DTP untuk rumah Nyonya Sari (Rp)?", tipe: "angka", jawaban: 220000000, toleransi: 0,
          petunjuk: ["Harga Rp3,2 miliar ≤ Rp5 miliar → memenuhi syarat", "DTP atas bagian harga s.d. Rp2 miliar: 11% × Rp2 miliar", "Jawaban: Rp220.000.000"],
          penjelasan: "PPN DTP = 11% × Rp2.000.000.000 = Rp220.000.000." },
        { no: 3, pertanyaan: "Berapa PPN yang dibayar Nyonya Sari (Rp)?", tipe: "angka", jawaban: 132000000, toleransi: 0,
          petunjuk: ["PPN total − PPN DTP", "352.000.000 − 220.000.000", "Jawaban: Rp132.000.000"],
          penjelasan: "Sisa PPN atas bagian harga Rp1,2 miliar = 11% × Rp1,2 miliar = Rp132.000.000 dibayar pembeli." },
        { no: 4, pertanyaan: "Kode transaksi faktur untuk penyerahan rumah yang memperoleh PPN DTP?", tipe: "pilihan", opsi: { A: "01", B: "04", C: "07", D: "08" }, jawaban: "C",
          petunjuk: ["DTP dikelompokkan bersama 'tidak dipungut'", "Bukan kode dibebaskan", "Jawaban: C"],
          penjelasan: "Kode 07 dipakai untuk penyerahan yang PPN-nya tidak dipungut atau ditanggung pemerintah; kode 08 untuk dibebaskan." },
        { no: 5, pertanyaan: "Berapa jumlah PPN dan PPnBM atas apartemen Tuan Robert (Rp)?", tipe: "angka", jawaban: 11200000000, toleransi: 0,
          petunjuk: ["Barang mewah: PPN 12% × harga jual penuh", "PPN Rp4,2 miliar + PPnBM 20% × Rp35 miliar = Rp7 miliar", "Jawaban: Rp11.200.000.000"],
          penjelasan: "PPN = 12% × Rp35 miliar = Rp4.200.000.000; PPnBM = 20% × Rp35 miliar = Rp7.000.000.000; jumlah Rp11.200.000.000." },
        { no: 6, pertanyaan: "Bagaimana perlakuan PPN atas rumah Tuan Yoga (Rp5,4 miliar)?", tipe: "pilihan", opsi: { A: "DTP atas bagian Rp2 miliar; PPN dibayar Rp374.000.000", B: "Tidak memperoleh DTP sama sekali; PPN Rp594.000.000 dibayar penuh", C: "DTP 100% karena rumah tapak baru", D: "DTP atas bagian Rp5 miliar; PPN dibayar Rp44.000.000" }, jawaban: "B",
          petunjuk: ["Periksa batas harga jual paling tinggi", "Rp5,4 miliar > Rp5 miliar", "Jawaban: B"],
          penjelasan: "Harga jual di atas Rp5 miliar menggugurkan fasilitas; PPN = 11% × Rp5,4 miliar = Rp594.000.000." }
      ],
      kesimpulan: "Rumah Rp3,2 miliar: PPN Rp352 juta, DTP Rp220 juta, dibayar pembeli Rp132 juta dengan faktur kode 07. Apartemen mewah Rp35 miliar: PPN 12% penuh Rp4,2 miliar ditambah PPnBM Rp7 miliar. Rumah Rp5,4 miliar melewati batas sehingga PPN Rp594 juta dibayar penuh.",
      kalkulatorRef: "ppn"
    },
    {
      id: "K-A4-03", judul: "Sanksi faktur terlambat dan keterlambatan PPN", topik: "A4.5", estimasiMenit: 14,
      narasi: "CV Teknik Mandiri (PKP, pemasok suku cadang) memeriksa kepatuhan PPN Masa Maret 2026. Ditemukan: (1) penyerahan kepada PT Andalas (PKP) tanggal 9 Maret 2026 seharga Rp96.000.000 yang fakturnya baru dibuat 27 April 2026; (2) penyerahan kepada PT Borneo (PKP) tanggal 16 Maret 2026 seharga Rp60.000.000 yang fakturnya baru dibuat 1 Juli 2026; (3) PPN kurang bayar Masa Maret 2026 Rp45.000.000 baru disetor pada 4 Juni 2026 dan SPT Masa PPN Maret disampaikan pada hari yang sama. Anggap tarif bunga Pasal 9 ayat (2a) yang berlaku 1,05% per bulan. Semua harga belum termasuk PPN dan barang bukan barang mewah.",
      data: [["Penyerahan ke PT Andalas", "9 Maret 2026, Rp96.000.000; faktur 27 April 2026"], ["Penyerahan ke PT Borneo", "16 Maret 2026, Rp60.000.000; faktur 1 Juli 2026"], ["PPN kurang bayar Masa Maret", "Rp45.000.000"], ["Jatuh tempo setor dan lapor", "30 April 2026"], ["Tanggal setor dan lapor", "4 Juni 2026"], ["Tarif bunga (anggapan)", "1,05% per bulan"]],
      langkah: [
        { no: 1, pertanyaan: "Bagaimana status faktur untuk PT Andalas (9 Maret → 27 April)?", tipe: "pilihan", opsi: { A: "Sah tetapi terlambat (kurang dari 3 bulan); dikenai denda 1% DPP", B: "Dianggap tidak dibuat", C: "Tepat waktu", D: "Sah tanpa sanksi karena diunggah sebelum tanggal 20 bulan berikutnya" }, jawaban: "A",
          petunjuk: ["Faktur seharusnya dibuat 9 Maret 2026", "Jaraknya kurang dari 3 bulan", "Jawaban: A"],
          penjelasan: "Faktur dibuat terlambat tetapi kurang dari 3 bulan sehingga tetap sah; sanksinya denda 1% DPP (Pasal 14 ayat (4) UU KUP)." },
        { no: 2, pertanyaan: "Berapa denda faktur PT Andalas (Rp)?", tipe: "angka", jawaban: 880000, toleransi: 0,
          petunjuk: ["DPP = 11/12 × 96.000.000 = 88.000.000", "Denda = 1% × DPP", "Jawaban: Rp880.000"],
          penjelasan: "1% × Rp88.000.000 = Rp880.000." },
        { no: 3, pertanyaan: "Bagaimana status faktur PT Borneo (16 Maret → 1 Juli)?", tipe: "pilihan", opsi: { A: "Sah tetapi terlambat; PM PT Borneo dapat dikreditkan", B: "Dianggap tidak dibuat; CV tetap menyetor PPN dan didenda 1% DPP, PM PT Borneo tidak dapat dikreditkan", C: "Batal demi hukum dan PPN tidak terutang", D: "Sah karena diunggah sebelum tanggal 20 bulan berikutnya" }, jawaban: "B",
          petunjuk: ["16 Maret + 3 bulan = 16 Juni 2026", "1 Juli 2026 sudah lewat", "Jawaban: B"],
          penjelasan: "Faktur yang dibuat lebih dari 3 bulan sejak saat seharusnya dianggap tidak dibuat: PPN tetap disetor, denda 1% DPP, dan PM pembeli tidak dapat dikreditkan." },
        { no: 4, pertanyaan: "Berapa denda faktur PT Borneo (Rp)?", tipe: "angka", jawaban: 550000, toleransi: 0,
          petunjuk: ["DPP = 11/12 × 60.000.000 = 55.000.000", "Denda = 1% × DPP", "Jawaban: Rp550.000"],
          penjelasan: "1% × Rp55.000.000 = Rp550.000." },
        { no: 5, pertanyaan: "Berapa bulan bunga keterlambatan setor PPN Masa Maret?", tipe: "angka", jawaban: 2, toleransi: 0,
          petunjuk: ["Jatuh tempo 30 April 2026", "30 April → 4 Juni = 1 bulan 5 hari; bagian bulan dihitung penuh", "Jawaban: 2 bulan"],
          penjelasan: "Bunga dihitung sejak jatuh tempo sampai tanggal bayar; bagian dari bulan dihitung satu bulan penuh." },
        { no: 6, pertanyaan: "Berapa jumlah bunga keterlambatan setor ditambah denda keterlambatan SPT (Rp)?", tipe: "angka", jawaban: 1445000, toleransi: 0,
          petunjuk: ["Bunga = 45.000.000 × 1,05% × 2 = 945.000", "Denda SPT Masa PPN = Rp500.000", "Jawaban: Rp1.445.000"],
          penjelasan: "Bunga Pasal 9 ayat (2a) Rp945.000 ditambah denda Pasal 7 ayat (1) Rp500.000 = Rp1.445.000." }
      ],
      kesimpulan: "Faktur PT Andalas sah tetapi terlambat (denda Rp880.000); faktur PT Borneo dianggap tidak dibuat (denda Rp550.000, PPN tetap disetor, PM pembeli hilang). Keterlambatan setor dan lapor Masa Maret menimbulkan bunga 2 bulan Rp945.000 dan denda Rp500.000.",
      kalkulatorRef: "sanksi-bunga"
    },
    {
      id: "K-A4-04", judul: "Pedagang UMKM melampaui Rp4,8 miliar: pengukuhan, PPN pertama, dan rezim PPh berikutnya", topik: "A4.3", estimasiMenit: 16,
      narasi: "Bapak Hendra Wijaya (orang pribadi, pemilik Toko Listrik Terang yang menjual alat listrik, tahun buku Januari–Desember) membayar PPh final UMKM 0,5% berdasarkan PP 55/2022 s.t.d.d. PP 20/2026 dan belum PKP. Peredaran bruto 2026 atas penyerahan BKP: Januari–Agustus Rp4.560.000.000; September Rp610.000.000; Oktober, November, dan Desember masing-masing Rp600.000.000. Ia melaporkan usahanya pada 15 Desember 2026 dan dikukuhkan sebagai PKP dengan kewajiban memungut PPN mulai Masa Pajak Januari 2027. Pada Masa Januari 2027 ia menjual alat listrik (bukan barang mewah) Rp700.000.000 belum termasuk PPN, menerima faktur masukan lengkap atas pembelian barang dagangan dengan harga Rp480.000.000 belum termasuk PPN, dan membayar PPN Rp1.650.000 atas sewa gudang dengan faktur lengkap. Ia memperkirakan peredaran bruto Tahun 2027 sekitar Rp8.000.000.000.",
      data: [["Peredaran bruto Januari–Agustus 2026", "Rp4.560.000.000"], ["Peredaran bruto September 2026", "Rp610.000.000"], ["Peredaran bruto Oktober–Desember 2026", "Rp600.000.000 per bulan"], ["Penjualan Masa Januari 2027", "Rp700.000.000"], ["Pembelian barang dagangan Januari 2027", "Rp480.000.000"], ["PPN sewa gudang Januari 2027", "Rp1.650.000"], ["Perkiraan peredaran bruto 2027", "Rp8.000.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Pada bulan apa batas pengusaha kecil Rp4,8 miliar terlampaui?", tipe: "pilihan", opsi: { A: "Agustus 2026", B: "September 2026", C: "Oktober 2026", D: "Desember 2026" }, jawaban: "B",
          petunjuk: ["Jumlahkan peredaran bruto secara kumulatif per bulan", "Rp4,56 miliar + Rp610 juta = Rp5,17 miliar", "Jawaban: B"],
          penjelasan: "Sampai Agustus Rp4.560.000.000 (belum melebihi); dengan September menjadi Rp5.170.000.000 sehingga batas terlampaui pada September 2026." },
        { no: 2, pertanyaan: "Paling lambat kapan Bapak Hendra wajib melaporkan usahanya untuk dikukuhkan sebagai PKP?", tipe: "pilihan", opsi: { A: "31 Oktober 2026", B: "15 Oktober 2026", C: "31 Desember 2026", D: "31 Januari 2027" }, jawaban: "C",
          petunjuk: ["Ia adalah WP PPh final UMKM", "PMK 164/2023: paling lambat akhir tahun buku saat batas terlampaui", "Jawaban: C"],
          penjelasan: "Bagi WP PPh final UMKM, laporan pengukuhan paling lambat akhir tahun buku terlampauinya batas (31 Desember 2026), dan PPN dipungut mulai Masa Januari 2027; tenggat umum akhir bulan berikutnya (31 Oktober 2026) tidak dipakai." },
        { no: 3, pertanyaan: "Berapa PPN kurang bayar Masa Januari 2027 (Rp)?", tipe: "angka", jawaban: 22550000, toleransi: 0,
          petunjuk: ["PK = 11% × Rp700.000.000 = Rp77.000.000", "PM = 11% × Rp480.000.000 + Rp1.650.000 = Rp54.450.000", "Jawaban: Rp22.550.000"],
          penjelasan: "PK Rp77.000.000 dikurangi PM Rp54.450.000 (Rp52.800.000 barang dagangan + Rp1.650.000 sewa gudang) = Rp22.550.000." },
        { no: 4, pertanyaan: "Kapan batas setor dan lapor SPT Masa PPN Januari 2027?", tipe: "pilihan", opsi: { A: "Setor 15 Februari 2027 dan lapor 20 Februari 2027", B: "Setor dan lapor paling lambat Senin, 1 Maret 2027 (28 Februari 2027 jatuh pada hari Minggu), dengan setoran sebelum SPT disampaikan", C: "Setor dan lapor paling lambat 31 Januari 2027", D: "Setor 15 Februari 2027 dan lapor paling lambat 28 Februari 2027" }, jawaban: "B",
          petunjuk: ["SPT Masa PPN mengikuti Pasal 15A UU PPN: akhir bulan berikutnya", "28 Februari 2027 jatuh pada hari Minggu", "Jawaban: B"],
          penjelasan: "Setor dan lapor paling lama akhir Februari 2027, setor sebelum SPT disampaikan; karena 28 Februari 2027 hari Minggu, batasnya bergeser ke Senin, 1 Maret 2027." },
        { no: 5, pertanyaan: "Bagaimana rezim PPh Bapak Hendra untuk Tahun Pajak 2027?", tipe: "pilihan", opsi: { A: "Tetap PPh final 0,5% karena sejak PP 20/2026 jangka waktu bagi orang pribadi dihapus", B: "PPh final 0,5% hanya atas peredaran bruto sampai Rp4,8 miliar, kelebihannya dengan tarif Pasal 17", C: "Tidak lagi PPh final UMKM; dikenai tarif Pasal 17 atas penghasilan neto dari pembukuan karena peredaran bruto 2026 melebihi Rp4,8 miliar", D: "Boleh memakai NPPN karena baru pertama kali menjadi PKP" }, jawaban: "C",
          petunjuk: ["Peredaran bruto 2026 = Rp6,97 miliar", "PP 55/2022: melebihi Rp4,8 miliar → tahun pajak berikutnya memakai tarif umum", "Jawaban: C"],
          penjelasan: "Tarif 0,5% tetap dipakai sampai akhir Tahun Pajak 2026, tetapi mulai 2027 dikenai tarif Pasal 17. Penghapusan jangka waktu oleh PP 20/2026 tidak menghapus batas Rp4,8 miliar, dan NPPN tidak dapat dipakai karena syaratnya peredaran bruto setahun kurang dari Rp4,8 miliar (2026 Rp6,97 miliar; 2027 diperkirakan Rp8 miliar), sehingga ia wajib menyelenggarakan pembukuan." },
        { no: 6, pertanyaan: "Berapa PPh final UMKM atas peredaran bruto Desember 2026 (Rp)?", tipe: "angka", jawaban: 3000000, toleransi: 0,
          petunjuk: ["Sampai akhir 2026 tetap PPh final 0,5% walaupun batas sudah terlampaui", "0,5% × Rp600.000.000", "Jawaban: Rp3.000.000"],
          penjelasan: "0,5% × Rp600.000.000 = Rp3.000.000, disetor paling lambat 15 Januari 2027; pada 2026 belum ada PPN karena kewajiban memungut baru dimulai Masa Januari 2027." }
      ],
      kesimpulan: "Batas Rp4,8 miliar terlampaui pada September 2026; sebagai WP PPh final UMKM, Bapak Hendra melapor paling lambat 31 Desember 2026 dan memungut PPN mulai Januari 2027. Masa Januari 2027 kurang bayar Rp22.550.000, disetor dan dilaporkan paling lambat 1 Maret 2027. PPh final 0,5% berlaku sampai Desember 2026 (Rp3.000.000 untuk Desember), dan mulai 2027 ia memakai tarif Pasal 17 dengan pembukuan.",
      kalkulatorRef: "ppn"
    },
    {
      id: "K-A4-05", judul: "Pabrik obat: PPN impor, jasa luar negeri, PMSE, dan penjualan kepada pemungut", topik: "A4.7", estimasiMenit: 18,
      narasi: "PT Mega Farma Nusantara (PKP, produsen obat bebas, pemilik API; seluruh penyerahannya terutang PPN) menyiapkan SPT Masa PPN Oktober 2026. Transaksi Oktober 2026: (1) impor bahan baku obat dengan nilai pabean (CIF) Rp2.000.000.000 dan bea masuk Rp100.000.000; DJBC juga memungut PPh Pasal 22 impor; (2) pemanfaatan jasa konsultansi registrasi produk dari perusahaan di Singapura (tanpa BUT dan bukan pemungut PPN PMSE) Rp400.000.000 yang ditagih dan dicatat sebagai utang pada 6 Oktober 2026 dan dibayar kepada vendor pada 3 November 2026; PPN-nya disetor sendiri pada 20 Oktober 2026; (3) langganan perangkat lunak dari penyedia luar negeri yang ditunjuk sebagai pemungut PPN PMSE Rp30.000.000 belum termasuk PPN, dengan invoice yang mencantumkan nama dan NPWP perusahaan; (4) penjualan obat kepada pedagang besar farmasi (PKP) Rp4.500.000.000; (5) penjualan obat kepada RSUD yang pembayarannya melalui bendahara pengeluaran daerah (pemungut PPN) Rp600.000.000; dan (6) faktur masukan lengkap atas bahan kemasan dengan PPN Rp88.000.000. Semua nilai belum termasuk PPN dan tidak ada barang mewah.",
      data: [["Impor bahan baku: CIF", "Rp2.000.000.000"], ["Bea masuk", "Rp100.000.000"], ["Jasa konsultansi dari Singapura", "Rp400.000.000; ditagih 6 Oktober 2026"], ["Langganan PMSE (invoice ber-NPWP)", "Rp30.000.000"], ["Penjualan ke PBF (PKP)", "Rp4.500.000.000"], ["Penjualan ke RSUD (bendahara pemungut)", "Rp600.000.000"], ["PPN faktur bahan kemasan", "Rp88.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa PPN impor yang dipungut DJBC (Rp)?", tipe: "angka", jawaban: 231000000, toleransi: 0,
          petunjuk: ["Nilai impor = CIF + bea masuk = Rp2.100.000.000", "PPN = 12% × 11/12 × nilai impor", "Jawaban: Rp231.000.000"],
          penjelasan: "11% × Rp2.100.000.000 = Rp231.000.000; PIB menjadi dokumen tertentu untuk mengkreditkannya." },
        { no: 2, pertanyaan: "Berapa PPN atas jasa dari Singapura dan kapan batas akhir penyetorannya tanpa sanksi?", tipe: "pilihan", opsi: { A: "Rp44.000.000; 15 November 2026", B: "Rp44.000.000; Senin, 16 November 2026", C: "Rp48.000.000; Senin, 16 November 2026", D: "Rp44.000.000; 15 Desember 2026" }, jawaban: "B",
          petunjuk: ["Saat terutang: tagihan dan pengakuan utang 6 Oktober 2026 (lebih dulu dari pembayaran)", "Batas tanggal 15 November 2026 jatuh pada hari Minggu", "Jawaban: B"],
          penjelasan: "PPN = 11% × Rp400.000.000 = Rp44.000.000; batas setor tanggal 15 bulan berikutnya bergeser ke Senin, 16 November 2026 (PMK 81/2024 Pasal 100). Perusahaan menyetor lebih awal pada 20 Oktober 2026." },
        { no: 3, pertanyaan: "Berapa PK yang dipungut sendiri pada Masa Oktober 2026 (Rp)?", tipe: "angka", jawaban: 495000000, toleransi: 0,
          petunjuk: ["Penjualan kepada RSUD dipungut bendahara (kode 02)", "11% × Rp4.500.000.000", "Jawaban: Rp495.000.000"],
          penjelasan: "Hanya penjualan kepada PBF yang dipungut sendiri: 11% × Rp4.500.000.000 = Rp495.000.000." },
        { no: 4, pertanyaan: "Berapa PM yang dapat dikreditkan pada Masa Oktober 2026 (Rp)?", tipe: "angka", jawaban: 366300000, toleransi: 0,
          petunjuk: ["PIB Rp231.000.000 + bukti setor jasa Singapura Rp44.000.000", "PPN PMSE ber-NPWP 11% × Rp30.000.000 = Rp3.300.000, ditambah faktur kemasan Rp88.000.000", "Jawaban: Rp366.300.000"],
          penjelasan: "231.000.000 + 44.000.000 + 3.300.000 + 88.000.000 = Rp366.300.000; PPh Pasal 22 impor tidak termasuk PM." },
        { no: 5, pertanyaan: "Berapa PPN kurang bayar Masa Oktober 2026 (Rp)?", tipe: "angka", jawaban: 128700000, toleransi: 0,
          petunjuk: ["PK dipungut sendiri − PM", "495.000.000 − 366.300.000", "Jawaban: Rp128.700.000"],
          penjelasan: "Kurang bayar Rp128.700.000 disetor sebelum SPT disampaikan, paling lambat akhir November 2026." },
        { no: 6, pertanyaan: "Bagaimana perlakuan PPh Pasal 22 impor atas bahan baku tersebut?", tipe: "pilihan", opsi: { A: "Rp52.500.000; dikreditkan sebagai PM pada SPT Masa PPN", B: "Rp52.500.000; kredit pajak PPh badan pada SPT Tahunan, bukan PM", C: "Rp50.000.000; PPh final atas impor", D: "Rp157.500.000 (7,5%) karena impor bahan baku obat" }, jawaban: "B",
          petunjuk: ["Dasar PPh Pasal 22 impor = nilai impor Rp2.100.000.000", "Pemilik API dipungut 2,5% dan sifatnya tidak final", "Jawaban: B"],
          penjelasan: "2,5% × Rp2.100.000.000 = Rp52.500.000, menjadi kredit pajak dalam SPT Tahunan PPh Badan; PPh tidak pernah menjadi Pajak Masukan." },
        { no: 7, pertanyaan: "Kode faktur dan perlakuan penjualan kepada RSUD?", tipe: "pilihan", opsi: { A: "Kode 02; PPN Rp66.000.000 dipungut dan disetor bendahara, tidak termasuk PK yang disetor sendiri", B: "Kode 01; PPN Rp66.000.000 disetor sendiri oleh PT Mega Farma Nusantara", C: "Kode 03; PPN dipungut oleh BUMN", D: "Kode 08; dibebaskan karena pembelinya rumah sakit" }, jawaban: "A",
          petunjuk: ["Pembeli adalah instansi pemerintah daerah yang membayar melalui bendahara", "Instansi pemerintah memakai kode 02", "Jawaban: A"],
          penjelasan: "Penyerahan kepada instansi pemerintah pemungut memakai kode 02; PPN 11% × Rp600.000.000 = Rp66.000.000 dipungut dan disetor bendahara. Pembebasan untuk jasa kesehatan tidak berlaku atas penjualan obat kepada rumah sakit." }
      ],
      kesimpulan: "PM Masa Oktober 2026 Rp366.300.000 terdiri dari PPN impor Rp231.000.000 (PIB), PPN jasa luar negeri Rp44.000.000 (bukti setor, batas setor 16 November 2026), PPN PMSE ber-NPWP Rp3.300.000, dan faktur kemasan Rp88.000.000. Dengan PK dipungut sendiri Rp495.000.000, kurang bayar Rp128.700.000. PPh Pasal 22 impor Rp52.500.000 adalah kredit PPh badan, dan penjualan ke RSUD (kode 02) dipungut bendahara.",
      kalkulatorRef: "ppn"
    }
  ],
  tips: [
    { teks: "Sebelum menghitung, tandai jenis barang: non-mewah → 11% (12% × 11/12); barang mewah → 12% × harga penuh ditambah PPnBM; besaran tertentu → persentase khusus tanpa kredit PM.", tagSebab: "salah-klasifikasi" },
    { teks: "Bila harga 'sudah termasuk PPN', keluarkan PPN dengan 11/111 (harga × 100/111 untuk harga tanpa PPN); jangan kalikan 11% langsung.", tagSebab: "salah-hitung" },
    { teks: "Pada soal PK–PM, saring PM dengan tiga pertanyaan (faktur lengkap? berhubungan langsung dengan usaha dan bukan sedan? masih dalam 3 masa dan belum dibiayakan?), lalu keluarkan PK yang dipungut pemungut dan ekspor sebelum menghitung kurang/lebih bayar.", tagSebab: "lupa-pasal" },
    { teks: "Hafalkan tanggal 2025–2026: setor PPN pemanfaatan luar negeri dan KMS tanggal 15, unggah faktur tanggal 20, setor dan lapor SPT Masa PPN akhir bulan berikutnya; tanggal 10 dan unggah tanggal 15 sudah usang.", tagSebab: "angka-usang" },
    { teks: "Bila opsi hanya berbeda satu frasa (dibebaskan vs tidak dipungut, kode 07 vs 08, 02 vs 03, dikabulkan vs ditolak), tentukan dulu jenis fasilitas atau pembelinya sebelum membaca opsi.", tagSebab: "salah-baca" },
    { teks: "Perbarui angka yang sering dijadikan pengecoh: lapor pengukuhan PKP paling lambat akhir tahun buku (bukan akhir bulan berikutnya) dengan PPN dipungut mulai tahun buku berikutnya, dan batas Pasal 17D bagi PKP sejak 1 Mei 2026 lebih bayar Rp1 miliar dengan penyerahan paling banyak Rp4,2 miliar per Masa Pajak (bukan Rp5 miliar).", tagSebab: "angka-usang" }
  ]
});
