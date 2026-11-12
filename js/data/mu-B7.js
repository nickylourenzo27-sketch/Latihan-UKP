/* Modul B7 — Akuntansi Perpajakan (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi resmi dan pola soal UKP 26–29 Oktober 2026 (kasus praktik panjang), bukan soal asli ujian.
   Angka rujukan: docs/research/02a bagian D dan F, docs/research/02b bagian A dan E. */
UKP.register({
  meta: {
    kode: "B7", slug: "akuntansi-pajak", nama: "Akuntansi Perpajakan",
    diujiDi: ["B", "C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { B: 0.12, C: 0.08 },
    statusPer: "2026-10-27",
    tujuan: "Peserta mampu menjurnal hak dan kewajiban perpajakan (PPh yang dipotong dan memotong, PPN Keluaran/Masukan dengan DPP nilai lain 11/12, PPh 25, Utang PPh 29, PPh final), menilai perlakuan fiskal atas pos akuntansi (piutang, persediaan, biaya dibayar di muka, aset tetap dan tak berwujud, sewa, pendapatan, selisih kurs, imbalan kerja, kewajiban dan ekuitas) serta organisasi nirlaba, menyusun rekonsiliasi fiskal sampai PPh badan terutang dan PPh 29, dan menghitung pajak tangguhan PSAK 212. Di tingkat C ditambah transaksi valas/internasional, lembaga keuangan, jasa konstruksi, dan restrukturisasi usaha.",
    dasarHukumUtama: ["UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) Pasal 28", "UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 4, 6, 9, 10, 11, 11A, 17, 25, 28, 29, 31E", "PP 94/2010 (penghitungan penghasilan kena pajak)", "PMK 72/2023 (penyusutan dan amortisasi)", "PMK 79/PMK.03/2008 (revaluasi aktiva tetap)", "KMK 1169/KMK.01/1991 (sewa guna usaha)", "PMK 207/PMK.010/2015 (piutang tak tertagih)", "PMK 131/2024 (PPN 12%, DPP nilai lain 11/12)", "PMK 81/2024 (Coretax, tenggat setor dan lapor)", "SAK: PSAK 212, 202, 115, 116, 219; ISAK 335"],
    perubahanTerbaru: [
      { sebelum: "PSAK 46 (Pajak Penghasilan), PSAK 14 (Persediaan), PSAK 72 (Pendapatan), PSAK 73 (Sewa), PSAK 24 (Imbalan Kerja)", sesudah: "Nomor baru PSAK 212, PSAK 202, PSAK 115, PSAK 116, PSAK 219 — substansi sama; soal lama masih memakai nomor lama", dasar: "Penomoran ulang SAK oleh DSAK IAI", berlakuSejak: "2024-01-01" },
      { sebelum: "Jurnal PPN Keluaran/Masukan = 11% × harga (April 2022–Desember 2024)", sesudah: "PPN = 12% × DPP nilai lain 11/12 × harga untuk barang/jasa non-mewah (beban efektif tetap 11%); barang mewah 12% × harga jual", dasar: "PMK 131/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Utang PPh 21/23/26/4(2) disetor paling lambat tanggal 10 bulan berikutnya", sesudah: "Disetor paling lambat tanggal 15 bulan berikutnya; SPT Masa PPh dilaporkan paling lama 20 hari setelah masa pajak berakhir; SPT Masa PPN akhir bulan berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Bukti potong unifikasi e-Bupot (PER-24/PJ/2021) dan 1721-A1", sesudah: "Bukti potong BPPU/BPNR dan BP21/BPA1 dibuat di Coretax; kredit PPh 23 di SPT Tahunan berasal dari bukti potong elektronik pra-isi", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "PT, CV, dan firma beromzet ≤ Rp4,8 miliar boleh memakai PPh final 0,5% (PP 55/2022) dalam jangka waktu tertentu tanpa rekonsiliasi fiskal", sesudah: "PPh final UMKM hanya untuk orang pribadi, perseroan perorangan, dan koperasi; PT, CV, dan firma baru memakai tarif umum dengan Pasal 31E dan wajib rekonsiliasi fiskal (WP lama yang sudah memanfaatkan sebelum 22 April 2026 tetap sampai jangka waktu lamanya berakhir)", dasar: "PP 20/2026", berlakuSejak: "2026-04-22" },
      { sebelum: "Tidak ada fasilitas umum pengurangan sanksi; pembayaran dialokasikan proporsional ke pokok dan sanksi", sesudah: "Fasilitas pengurangan/penghapusan sanksi administratif dan alokasi pembayaran ke pokok lebih dulu; sanksi yang tetap dibayar tetap tidak dapat dibiayakan (Pasal 9 ayat (1) huruf k UU PPh)", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02" }
    ],
    lembarRingkas: [
      { label: "Setor PPh dipotong/dipungut dan PPh 25", nilai: "Tanggal 15 bulan berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Lapor SPT Masa PPh (Unifikasi, 21/26)", nilai: "≤ 20 hari setelah masa pajak berakhir", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "SPT Masa PPN", nilai: "Akhir bulan berikutnya; PPN disetor sebelum lapor", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Unggah faktur pajak (Coretax)", nilai: "Tanggal 20 bulan berikutnya", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "PPN barang/jasa non-mewah", nilai: "12% × 11/12 × harga = 11% efektif", dasar: "PMK 131/2024", berlakuSejak: "2025-01-01" },
      { label: "PPh 23", nilai: "2% jasa/sewa harta · 15% dividen/bunga/royalti · tanpa NPWP ×2", dasar: "Pasal 23 UU PPh", berlakuSejak: "2009-01-01" },
      { label: "PPh final sewa tanah/bangunan", nilai: "10% × bruto nilai sewa (termasuk service charge)", dasar: "Pasal 4 ayat (2) UU PPh; PP 34/2017", berlakuSejak: "2018-01-02" },
      { label: "PPh 22 penjualan BBM oleh produsen/importir", nilai: "0,25% ke SPBU yang menjual BBM dari Pertamina/anak usahanya · 0,3% ke SPBU lain dan pihak lain · final bagi penyalur/agen", dasar: "Pasal 3 ayat (1) huruf c angka 1 dan Pasal 10 ayat (2) PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
      { label: "Tarif PPh badan", nilai: "22% · Tbk memenuhi syarat 19%", dasar: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh", berlakuSejak: "2022-01-01" },
      { label: "Pasal 31E", nilai: "11% atas PKP × 4,8 M/omzet; omzet ≤ Rp50 M (termasuk final)", dasar: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2009-01-01" },
      { label: "Kompensasi kerugian fiskal", nilai: "5 tahun berturut-turut", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "SPT 1771 dan PPh 29", nilai: "Akhir bulan ke-4; PPh 29 lunas sebelum SPT", dasar: "Pasal 3 ayat (3) huruf c UU KUP; Pasal 29 UU PPh", berlakuSejak: "2008-01-01" },
      { label: "Denda telat SPT Tahunan badan", nilai: "Rp1.000.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Angsuran PPh 25", nilai: "(PPh terutang − PPh 21/22/23/24) ÷ 12; bila SPT tahun lalu memuat kompensasi kerugian, PPh terutang dihitung ulang dari penghasilan neto tahun lalu sebelum kompensasi dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan (bila sisa itu habis: neto penuh), bukan dari PPh terutang setelah kompensasi (Pasal 25 ayat (6) huruf a); bulan sebelum SPT disampaikan = angsuran Desember; angsuran baru mulai bulan SPT disampaikan (paling lambat bulan batas waktu)", dasar: "Pasal 25 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Penyusutan Kelompok 1–4", nilai: "GL 25/12,5/6,25/5% · SM 50/25/12,5/10%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" },
      { label: "Bangunan", nilai: "Permanen 5% (20 th) atau masa sebenarnya · tidak permanen 10%", dasar: "Pasal 11 ayat (6), (6a) UU PPh", berlakuSejak: "2022-01-01" },
      { label: "Revaluasi aktiva tetap", nilai: "Final 10% · alih sebelum masa manfaat baru +12% · jeda 5 tahun", dasar: "PMK 79/PMK.03/2008" },
      { label: "SGU hak opsi (lessee)", nilai: "Tanpa penyusutan; sewa dibiayakan; tanpa PPh 23", dasar: "KMK 1169/KMK.01/1991", berlakuSejak: "1991-01-19" },
      { label: "DER", nilai: "4 : 1 rata-rata saldo akhir bulan; termasuk selisih kurs pinjaman", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" },
      { label: "Sumbangan yang diperkenankan", nilai: "≤ 5% penghasilan neto fiskal tahun lalu", dasar: "Pasal 6 ayat (1) huruf i–m UU PPh; PP 93/2010", berlakuSejak: "2010-12-30" },
      { label: "PPh 21 final pesangon", nilai: "0% ≤ 50 jt · 5% ≤ 100 jt · 15% ≤ 500 jt · 25% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16" },
      { label: "Imbalan kerja", nilai: "Biaya fiskal saat dibayar; cadangan dikoreksi positif", dasar: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Sisa lebih pendidikan/litbang", nilai: "Bukan objek bila ditanam kembali ≤ 4 tahun", dasar: "Pasal 4 ayat (3) huruf m UU PPh; PMK 68/PMK.03/2020" },
      { label: "Pajak tangguhan", nilai: "22%; tidak didiskontokan; pos OCI diakui di OCI", dasar: "PSAK 212", berlakuSejak: "2024-01-01" },
      { label: "PPh final jasa konstruksi", nilai: "1,75% · 2,65% · 4% · konsultansi 3,5%/6% (atas pembayaran)", dasar: "PP 9/2022", berlakuSejak: "2022-02-21" },
      { label: "PPh 26", nilai: "20% bruto; tarif P3B dengan Form DGT", dasar: "Pasal 26 UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" },
      { label: "Penyimpanan pembukuan", nilai: "10 tahun di Indonesia", dasar: "Pasal 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Bunga pembetulan SPT Tahunan", nilai: "Tarif KMK/bulan sejak batas SPT; maks 24 bulan", dasar: "Pasal 8 ayat (2) UU KUP", berlakuSejak: "2020-11-02" },
      { label: "Kurs KMK (kurs pajak)", nilai: "DPP PPh potong/pungut, PPN, bea masuk, PPh 22 impor — kurs minggu saat pajak terutang (PPN: saat faktur seharusnya dibuat)", dasar: "KMK kurs mingguan; PP 44/2022 Pasal 21 (PPN)" },
      { label: "Kurs pembukuan (PSAK 221, eks-PSAK 10)", nilai: "Awal: kurs spot transaksi · akhir: pos moneter dengan kurs penutup (kurs tengah BI)", dasar: "PSAK 221", berlakuSejak: "2024-01-01" },
      { label: "Selisih kurs fiskal", nilai: "Laba objek Ps. 4(1)l · rugi biaya Ps. 6(1)e · ikut SAK, termasuk belum direalisasi; tanpa koreksi · kecuali terkait langsung usaha yang dikenai PPh final/bukan objek: tidak diakui", dasar: "PP 94/2010 Pasal 9 ayat (1) dan (2)", berlakuSejak: "2010-12-30" },
      { label: "Selisih kurs di jurnal PPh 26/PPN valas", nilai: "Pajak (kurs KMK) ≠ bagian valas pada kurs buku → selisih kurs; saat setor tidak ada selisih", dasar: "Pasal 26 UU PPh; PSAK 221" },
      { label: "Pembukuan bahasa Inggris dan USD", nilai: "◐ Izin/pemberitahuan lebih dulu · SPT Badan dalam USD (berbahasa Indonesia, kecuali laporan keuangan) · PPh 25/29 dibayar dalam USD · PPh potong/pungut tetap Rupiah", dasar: "Pasal 28 ayat (8) UU KUP; PMK 196/PMK.03/2007 s.t.d.t.d. PMK 123/PMK.03/2019; PMK 81/2024" }
    ]
  },
  topik: [
    {
      id: "B7.1", slug: "jurnal-kewajiban-pajak", judul: "Jurnal hak dan kewajiban perpajakan",
      estimasiMenit: 18, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "Sebagai pemotong/pemungut (PPh 21, 23, 26, 4 ayat (2)), perusahaan mencatat PPh yang dipotong sebagai Utang PPh (liabilitas) dan mengurangi kas yang dibayarkan kepada penerima; utang disetor paling lambat tanggal 15 bulan berikutnya dan dilaporkan dalam SPT Masa PPh paling lama 20 hari setelah masa pajak berakhir. Jurnal gaji (pola yang dilaporkan muncul di UKP): Dr Beban gaji sebesar bruto / Cr Utang PPh 21, Cr Utang iuran bagian pegawai, Cr Utang gaji (atau Kas bila dibayar hari itu); saat gaji ditransfer Dr Utang gaji / Cr Kas; saat PPh 21 disetor Dr Utang PPh 21 / Cr Kas. PPh 21 yang dipotong bukan beban perusahaan.",
        "Sebagai pihak yang dipotong/dipungut, PPh 22 dan PPh 23 dicatat sebagai aset 'PPh dibayar di muka' karena menjadi kredit pajak di SPT Tahunan; PPh final Pasal 4 ayat (2) dicatat sebagai beban pajak final dan tidak dapat dikreditkan.",
        "PPN atas penyerahan dicatat sebagai PPN Keluaran (liabilitas) dan PPN atas perolehan sebagai PPN Masukan (aset) bila dapat dikreditkan; sejak 2025 untuk barang/jasa non-mewah PPN = 12% × DPP nilai lain 11/12, sehingga beban efektifnya 11% dari harga.",
        "Pajak Masukan yang tidak dapat dikreditkan (Pasal 9 ayat (8) UU PPN, misalnya perolehan yang tidak berhubungan langsung dengan kegiatan usaha) tidak dicatat sebagai PPN Masukan: dikapitalisasi ke harga perolehan, dibebankan, atau ditagihkan kepada pihak yang menikmati.",
        "Akhir masa: PPN Keluaran dikompensasikan dengan PPN Masukan; selisih kurang dicatat Utang PPN dan disetor sebelum SPT Masa PPN disampaikan (paling lambat akhir bulan berikutnya); selisih lebih dicatat sebagai PPN lebih bayar yang dikompensasikan atau dimintakan kembali.",
        "Angsuran PPh 25 dicatat sebagai PPh 25 dibayar di muka; pada akhir tahun beban pajak kini dikurangi kredit PPh 22, 23, 24, dan 25 dibayar di muka, sisanya Utang PPh Pasal 29 yang wajib dilunasi sebelum SPT Tahunan disampaikan.",
        "Sanksi administrasi dalam STP dicatat sebagai beban tetapi tidak dapat dikurangkan secara fiskal (Pasal 9 ayat (1) huruf k UU PPh). PPh 21 pegawai yang ditanggung pemberi kerja (tanpa tunjangan) merupakan penggantian dalam bentuk kenikmatan (contoh I.4 Lampiran PMK 168/2023): menjadi penghasilan pegawai dan dapat dibiayakan pemberi kerja (Pasal 2 ayat (1) PMK 66/2023), sama dengan tunjangan PPh; aturan lama (PER-16/PJ/2016: bukan penghasilan pegawai dan tidak boleh dibiayakan) tidak berlaku untuk tahun pajak 2023 ke atas (pemotongan sejak Juli 2023). Dokumen pembukuan wajib disimpan 10 tahun di Indonesia (Pasal 28 ayat (11) UU KUP).",
        "Jurnal PPh Pasal 24 (kredit pajak luar negeri): saat menerima penghasilan luar negeri yang telah dipotong pajak negara sumber, pendapatan dicatat bruto, kas sebesar neto, dan pajak luar negeri dicatat sebagai aset 'PPh Pasal 24 dibayar di muka' (Dr Kas, Dr PPh 24 dibayar di muka, Cr Pendapatan). Pada akhir tahun, jumlah yang dapat dikreditkan (terkecil antara pajak luar negeri, batas per negara, dan PPh terutang; C9.3) dikreditkan bersama PPh 22, 23, dan 25 terhadap beban pajak kini; kelebihannya dibebankan (Dr Beban pajak, Cr PPh 24 dibayar di muka) dan tidak dapat dikurangkan, dikompensasikan, maupun direstitusi; bila dibebankan di atas laba sebelum pajak, dikoreksi positif (Pasal 9 ayat (1) huruf h UU PPh)."
      ],
      poinKunci: [
        { label: "Setor PPh yang dipotong/dipungut dan PPh 25", nilai: "Tanggal 15 bulan berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "Lapor SPT Masa PPh (Unifikasi, 21/26)", nilai: "≤ 20 hari setelah masa pajak berakhir", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "SPT Masa PPN", nilai: "Akhir bulan berikutnya; setor sebelum SPT disampaikan", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "PPN non-mewah", nilai: "12% × 11/12 × harga = 11% efektif", dasar: "PMK 131/2024", berlakuSejak: "2025-01-01" },
        { label: "PPh 23 jasa dan sewa harta · royalti", nilai: "2% · 15% dari bruto tanpa PPN", dasar: "Pasal 23 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Utang PPh 29 badan", nilai: "Lunas sebelum SPT; SPT ≤ 4 bulan setelah tahun buku", dasar: "Pasal 29 UU PPh; Pasal 3 ayat (3) huruf c UU KUP" },
        { label: "PPh Pasal 24 di pembukuan", nilai: "Pendapatan LN bruto; pajak LN = PPh 24 dibayar di muka; kelebihan atas batas kredit dibebankan, tidak dapat dikurangkan", dasar: "Pasal 24 ayat (1)–(2) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 28 ayat (1), (7), dan (11) UU KUP", catatan: "kewajiban pembukuan, isi minimal, penyimpanan 10 tahun" },
        { pasal: "Pasal 21, 23 ayat (1), 4 ayat (2) UU PPh", catatan: "objek dan tarif pemotongan" },
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", catatan: "kredit pajak dan pelunasan kurang bayar" },
        { pasal: "Pasal 9 ayat (2) dan ayat (8) UU PPN", catatan: "mekanisme kredit dan Pajak Masukan yang tidak dapat dikreditkan" },
        { pasal: "PMK 131/2024 Pasal 2–3", catatan: "tarif 12% dan DPP nilai lain 11/12" },
        { pasal: "PMK 81/2024", catatan: "tenggat setor tanggal 15 dan lapor 20 hari/akhir bulan" }
      ],
      jebakan: [
        { teks: "Mencatat PPh 23 yang dipotong pelanggan sebagai beban — padahal aset (kredit pajak); hanya PPh final 4 ayat (2) yang menjadi beban", tagSebab: "salah-klasifikasi" },
        { teks: "Menghitung PPN 12% × harga penuh untuk barang non-mewah — sejak 2025 DPP nilai lain 11/12 sehingga efektif 11%", tagSebab: "salah-hitung" },
        { teks: "Memotong PPh 23 dari nilai faktur termasuk PPN — dasar pemotongan adalah jumlah bruto tanpa PPN", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "PT Andika (PKP) menerima tagihan jasa manajemen Rp50.000.000 dari PT Bima (PKP) pada Maret 2026. Jurnal pengakuan utang di PT Andika?",
        jawaban: "Dr Beban jasa 50.000.000; Dr PPN Masukan 5.500.000; Cr Utang PPh 23 1.000.000; Cr Utang usaha 54.500.000",
        langkah: [["PPN = 12% × 11/12 × Rp50.000.000", "Rp5.500.000"], ["PPh 23 = 2% × Rp50.000.000 (tanpa PPN)", "Rp1.000.000"], ["Utang usaha = 50.000.000 + 5.500.000 − 1.000.000", "Rp54.500.000"], ["Utang PPh 23 disetor paling lambat", "15 April 2026"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B7.2", slug: "piutang-persediaan-dibayar-dimuka", judul: "Piutang, persediaan, dan biaya dibayar di muka",
      estimasiMenit: 16, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Pembentukan penyisihan (cadangan) piutang tak tertagih tidak dapat dikurangkan (Pasal 9 ayat (1) huruf c UU PPh), kecuali bagi bank dan badan usaha lain yang menyalurkan kredit, sewa guna usaha dengan hak opsi, pembiayaan konsumen, dan anjak piutang; bagi WP lain beban penyisihan dikoreksi positif sebagai beda temporer.",
        "Piutang yang nyata-nyata tidak dapat ditagih boleh dibiayakan bila: telah dibebankan dalam laba rugi komersial, daftar piutang diserahkan ke DJP, dan perkara penagihannya diserahkan ke Pengadilan Negeri/instansi pengurus piutang negara, atau ada perjanjian tertulis penghapusan, atau dipublikasikan, atau ada pengakuan debitur (Pasal 6 ayat (1) huruf h; PMK 207/PMK.010/2015).",
        "Pada metode penyisihan, penghapusan yang memenuhi syarat menjadi biaya fiskal pada tahun penghapusan walaupun secara komersial didebit ke akun penyisihan — sehingga mengurangi koreksi positif atau menjadi koreksi negatif.",
        "Persediaan dinilai berdasarkan harga perolehan dengan metode rata-rata atau FIFO secara taat asas (Pasal 10 ayat (6) UU PPh); LIFO dilarang baik fiskal maupun PSAK 202 (eks-PSAK 14).",
        "Penurunan nilai persediaan ke nilai realisasi neto (PSAK 202) tidak diakui fiskal sampai persediaan dijual atau dimusnahkan: koreksi positif, beda temporer yang menimbulkan aset pajak tangguhan.",
        "Pengeluaran yang bermanfaat lebih dari satu tahun (sewa, asuransi, lisensi dibayar di muka) dibebankan sesuai masa manfaat (Pasal 9 ayat (2) UU PPh); sewa tanah/bangunan yang dibayar di muka tetap dipotong PPh final 10% atas seluruh pembayaran saat dibayar."
      ],
      poinKunci: [
        { label: "Cadangan piutang yang boleh dibiayakan", nilai: "Bank, SGU hak opsi, pembiayaan konsumen, anjak piutang", dasar: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Syarat hapus piutang", nilai: "Beban komersial + daftar piutang + PN/perjanjian/publikasi/pengakuan", dasar: "Pasal 6 ayat (1) huruf h UU PPh; PMK 207/PMK.010/2015", berlakuSejak: "2009-01-01" },
        { label: "Metode persediaan", nilai: "Rata-rata atau FIFO, taat asas; LIFO dilarang", dasar: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Biaya bermanfaat > 1 tahun", nilai: "Dibebankan sesuai masa manfaat", dasar: "Pasal 9 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Sewa bangunan dibayar di muka", nilai: "PPh final 10% atas seluruh pembayaran", dasar: "Pasal 4 ayat (2) UU PPh; PP 34/2017", berlakuSejak: "2018-01-02" }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) huruf h UU PPh", catatan: "syarat piutang nyata-nyata tidak dapat ditagih" },
        { pasal: "Pasal 9 ayat (1) huruf c UU PPh", catatan: "larangan cadangan dan pengecualiannya" },
        { pasal: "Pasal 9 ayat (2) UU PPh", catatan: "pengeluaran bermanfaat lebih dari 1 tahun" },
        { pasal: "Pasal 10 ayat (6) UU PPh", catatan: "penilaian persediaan" },
        { pasal: "PMK 207/PMK.010/2015 jo. PMK 105/PMK.03/2009", catatan: "tata cara penghapusan piutang" }
      ],
      jebakan: [
        { teks: "Menganggap beban penyisihan piutang perusahaan dagang/manufaktur dapat dikurangkan — hanya lembaga keuangan tertentu", tagSebab: "salah-klasifikasi" },
        { teks: "Menambahkan lagi penghapusan yang memenuhi syarat sebagai koreksi positif — padahal justru biaya fiskal", tagSebab: "salah-hitung" },
        { teks: "Membebankan seluruh premi/sewa dibayar di muka pada tahun pembayaran — fiskal mengikuti masa manfaat", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "PT Citra (distributor) membentuk penyisihan piutang Rp40.000.000 pada 2025 dan belum ada penghapusan. Perlakuan fiskal dan pajak tangguhannya?",
        jawaban: "Koreksi positif Rp40.000.000; aset pajak tangguhan Rp8.800.000",
        langkah: [["Penyisihan non-bank tidak dapat dikurangkan", "Pasal 9 ayat (1) huruf c"], ["Koreksi fiskal positif", "Rp40.000.000"], ["Beda temporer dapat dikurangkan × 22%", "Rp8.800.000"], ["Jurnal", "Dr Aset pajak tangguhan / Cr Manfaat pajak tangguhan"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B7.3", slug: "aset-tetap-tak-berwujud", judul: "Aset tetap, aset tak berwujud, revaluasi, dan sewa",
      estimasiMenit: 20, jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "Fiskal: harta berwujud bukan bangunan dikelompokkan Kelompok 1–4 (masa manfaat 4/8/16/20 tahun; garis lurus 25%/12,5%/6,25%/5% atau saldo menurun 50%/25%/12,5%/10%) menurut PMK 72/2023; komersial memakai taksiran masa manfaat sendiri — selisihnya beda temporer.",
        "Bangunan hanya garis lurus: permanen 20 tahun (5%) atau masa manfaat sebenarnya menurut pembukuan bila lebih dari 20 tahun (taat asas); tidak permanen 10 tahun (10%).",
        "Penyusutan dimulai pada bulan dilakukannya pengeluaran (harta dalam pengerjaan: bulan selesainya), sehingga tahun pertama dihitung pro rata bulan; pada saldo menurun, nilai sisa buku pada akhir masa manfaat disusutkan sekaligus.",
        "Pengalihan harta: selisih harga jual dengan nilai sisa buku fiskal adalah keuntungan/kerugian fiskal (Pasal 11 ayat (8) UU PPh); karena nilai buku komersial berbeda, laba/rugi penjualan komersial harus dikoreksi.",
        "Amortisasi harta tak berwujud (Pasal 11A) memakai kelompok masa manfaat yang sama; harta tak berwujud bermasa manfaat > 20 tahun: 20 tahun atau masa manfaat sebenarnya; biaya pendirian dan perluasan modal boleh dibebankan sekaligus atau diamortisasi.",
        "Revaluasi aktiva tetap (PMK 79/PMK.03/2008): selisih lebih nilai pasar di atas nilai sisa buku fiskal dikenai PPh final 10%; dasar penyusutan baru = nilai revaluasi dengan masa manfaat penuh; revaluasi berikutnya paling cepat 5 tahun.",
        "Sewa guna usaha dengan hak opsi (KMK 1169/KMK.01/1991): lessee tidak menyusutkan sampai opsi dipakai, seluruh pembayaran sewa (pokok dan bunga) dibiayakan, tidak dipotong PPh 23; penyusutan aset hak-guna dan bunga PSAK 116 dikoreksi ke perlakuan ini."
      ],
      poinKunci: [
        { label: "Kelompok 1 · 2 · 3 · 4 (GL / SM)", nilai: "25/50% · 12,5/25% · 6,25/12,5% · 5/10%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" },
        { label: "Bangunan permanen", nilai: "5% GL (20 th) atau masa manfaat sebenarnya > 20 th", dasar: "Pasal 11 ayat (6a) UU PPh; PMK 72/2023", berlakuSejak: "2022-01-01" },
        { label: "Revaluasi aktiva tetap", nilai: "PPh final 10% × (nilai pasar − nilai sisa buku fiskal)", dasar: "Pasal 19 UU PPh; PMK 79/PMK.03/2008" },
        { label: "Revaluasi berikutnya", nilai: "Paling cepat 5 tahun", dasar: "PMK 79/PMK.03/2008" },
        { label: "SGU hak opsi (lessee)", nilai: "Tanpa penyusutan; pembayaran sewa dibiayakan; tanpa PPh 23", dasar: "KMK 1169/KMK.01/1991; Pasal 23 ayat (4) huruf b UU PPh" }
      ],
      dasarHukum: [
        { pasal: "Pasal 11 ayat (1)–(8) UU PPh", catatan: "penyusutan, saat mulai, pengalihan harta" },
        { pasal: "Pasal 11A UU PPh", catatan: "amortisasi harta tak berwujud dan biaya pendirian" },
        { pasal: "PMK 72/2023", catatan: "kelompok harta dan masa manfaat; menggantikan PMK 96/2009, 248/2008, 249/2008" },
        { pasal: "PMK 79/PMK.03/2008", catatan: "penilaian kembali aktiva tetap" },
        { pasal: "KMK 1169/KMK.01/1991", catatan: "perlakuan PPh sewa guna usaha" }
      ],
      jebakan: [
        { teks: "Menyusutkan setahun penuh di tahun perolehan — fiskal pro rata sejak bulan pengeluaran", tagSebab: "salah-hitung" },
        { teks: "Memakai nilai buku komersial untuk menghitung PPh final revaluasi atau laba pengalihan fiskal — yang benar nilai sisa buku fiskal", tagSebab: "salah-klasifikasi" },
        { teks: "Mengikuti PSAK 116 untuk biaya fiskal sewa — fiskal tetap mengikuti KMK 1169/1991", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Mesin Kelompok 2 seharga Rp480.000.000 dibeli dan dipakai 1 April 2025; fiskal memakai saldo menurun. Penyusutan fiskal 2025?",
        jawaban: "Rp90.000.000",
        langkah: [["Tarif saldo menurun Kelompok 2", "25%"], ["Bulan April–Desember", "9 bulan"], ["480.000.000 × 25% × 9/12", "Rp90.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B7.4", slug: "pendapatan-biaya-selisih-kurs", judul: "Pendapatan, biaya, selisih kurs, imbalan kerja, kewajiban dan ekuitas",
      estimasiMenit: 18, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Fiskal mengikuti metode pembukuan yang taat asas (umumnya akrual): penghasilan diakui saat hak timbul, biaya saat terutang; perbedaan waktu dengan PSAK 115 (alokasi multi-elemen, biaya kontrak dikapitalisasi) diperlakukan sebagai beda temporer.",
        "Keuntungan selisih kurs adalah objek PPh (Pasal 4 ayat (1) huruf l) dan kerugian selisih kurs dapat dikurangkan (Pasal 6 ayat (1) huruf e); keduanya diakui berdasarkan sistem pembukuan yang taat asas sesuai SAK (PP 94/2010 Pasal 9), termasuk selisih kurs belum direalisasi pada tanggal neraca.",
        "Kurs Keputusan Menteri Keuangan (kurs pajak) dipakai untuk menghitung dan menyetor pajak atas transaksi valas, bukan untuk menjabarkan saldo pos moneter di pembukuan.",
        "Imbalan pasca-kerja (PSAK 219, eks-PSAK 24): pencadangan tidak dapat dikurangkan; biaya fiskal diakui saat dibayarkan kepada pegawai atau disetor ke dana pensiun yang pendiriannya disahkan OJK — beda temporer yang menimbulkan aset pajak tangguhan.",
        "Beda tetap umum: dividen/pembagian laba, PPh, sanksi administrasi, sumbangan di luar yang diperkenankan Pasal 6 ayat (1), biaya pribadi, entertainment/promosi tanpa daftar nominatif; natura dan kenikmatan dapat dibiayakan sejak Tahun Pajak 2022 (UU HPP).",
        "Kewajiban dan ekuitas: setoran modal dan agio saham bukan objek; dividen tidak dapat dikurangkan; keuntungan pembebasan utang objek PPh (Pasal 4 ayat (1) huruf k); biaya pinjaman dibatasi DER 4:1 (PMK 169/PMK.010/2015).",
        "Penyertaan saham pada entitas asosiasi/afiliasi dengan metode ekuitas (PSAK 228, eks-PSAK 15): bagian laba yang diakui di laba rugi bukan penghasilan fiskal sehingga dikoreksi negatif; dividen dari PT dalam negeri yang diterima badan dalam negeri bukan objek (Pasal 4 ayat (3) huruf f) dan pada metode ekuitas tidak melalui laba rugi; nilai fiskal penyertaan tetap harga perolehan."
      ],
      poinKunci: [
        { label: "Selisih kurs", nilai: "Diakui sesuai pembukuan taat asas SAK (termasuk belum direalisasi)", dasar: "PP 94/2010 Pasal 9" },
        { label: "Imbalan pasca-kerja", nilai: "Biaya fiskal saat dibayar; cadangan dikoreksi positif", dasar: "Pasal 9 ayat (1) huruf c UU PPh" },
        { label: "Natura/kenikmatan bagi pemberi kerja", nilai: "Dapat dibiayakan sejak TP 2022", dasar: "UU 7/2021; PP 55/2022; PMK 66/2023", berlakuSejak: "2022-01-01" },
        { label: "DER", nilai: "4 : 1 (rata-rata saldo akhir bulan)", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" },
        { label: "Sumbangan bencana nasional", nilai: "Dapat dikurangkan, maks 5% penghasilan neto TP sebelumnya", dasar: "Pasal 6 ayat (1) huruf i UU PPh; PP 93/2010" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) huruf k dan l UU PPh", catatan: "pembebasan utang dan keuntungan selisih kurs" },
        { pasal: "Pasal 6 ayat (1) huruf e dan i–m UU PPh", catatan: "kerugian selisih kurs dan sumbangan yang diperkenankan" },
        { pasal: "Pasal 9 ayat (1) huruf a, c, h, k UU PPh", catatan: "dividen, cadangan, PPh, sanksi" },
        { pasal: "PP 94/2010 Pasal 9", catatan: "pengakuan selisih kurs" },
        { pasal: "PMK 169/PMK.010/2015", catatan: "perbandingan utang dan modal" }
      ],
      jebakan: [
        { teks: "Menunda pengakuan selisih kurs sampai direalisasi — fiskal mengikuti pembukuan taat asas sesuai SAK", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap natura masih nondeductible seperti sebelum UU HPP", tagSebab: "angka-usang" },
        { teks: "Menghitung DER dari saldo akhir tahun — yang benar rata-rata saldo akhir bulan", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "PT Delima mencatat beban imbalan pasca-kerja PSAK 219 Rp250.000.000 pada 2025, sementara pembayaran manfaat kepada pegawai yang pensiun Rp70.000.000. Koreksi fiskalnya?",
        jawaban: "Koreksi positif Rp180.000.000",
        langkah: [["Beban komersial", "Rp250.000.000"], ["Biaya fiskal = yang dibayar", "Rp70.000.000"], ["Koreksi positif", "Rp180.000.000"], ["Aset pajak tangguhan 22%", "Rp39.600.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B7.5", slug: "organisasi-nirlaba", judul: "Akuntansi organisasi nirlaba dan sisa lebih",
      estimasiMenit: 12, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Yayasan dan perkumpulan adalah subjek pajak badan (Pasal 2 ayat (1) huruf b UU PPh): wajib NPWP, pembukuan, SPT Tahunan PPh Badan, serta memotong PPh 21/23/4(2) sebagai pemberi kerja/pembayar.",
        "Laporan keuangan entitas berorientasi nonlaba mengikuti ISAK 335 (eks-ISAK 35, berlaku 2020 menggantikan PSAK 45): aset neto dipisahkan menjadi tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya; disajikan laporan penghasilan komprehensif dan laporan perubahan aset neto.",
        "Bantuan/sumbangan/hibah yang diterima tanpa hubungan usaha, pekerjaan, kepemilikan, atau penguasaan, serta zakat yang diterima badan amil resmi, bukan objek PPh (Pasal 4 ayat (3) huruf a UU PPh).",
        "Sisa lebih lembaga nirlaba pendidikan dan/atau litbang yang terdaftar pada instansi pembina dan ditanamkan kembali dalam sarana-prasarana pendidikan/litbang paling lama 4 tahun sejak diperoleh bukan objek PPh (Pasal 4 ayat (3) huruf m; PP 55/2022 Pasal 14 ayat (1); PMK 68/PMK.03/2020 Pasal 4 ayat (1)). Sisa lebih yang dialokasikan dalam bentuk dana abadi yang memenuhi persyaratan tertentu dihitung sebagai penggunaan untuk sarana-prasarana (PP 55/2022 Pasal 14 ayat (3); PMK 68/PMK.03/2020 Pasal 5 ayat (2) dan (3)); frasa \"atau ditempatkan sebagai dana abadi\" dalam undang-undang hanya ada pada huruf p (lembaga sosial dan keagamaan).",
        "Sisa lebih dihitung dari penghasilan objek non-final (misalnya uang sekolah) dikurangi biaya 3M; penghasilan final (bunga deposito 20%, sewa bangunan 10%) dan penghasilan bukan objek (sumbangan) tidak ikut dihitung.",
        "Bagian sisa lebih yang tidak ditanamkan kembali dalam jangka waktu 4 tahun menjadi objek pajak dengan tarif umum badan."
      ],
      poinKunci: [
        { label: "Jangka penanaman kembali sisa lebih", nilai: "Paling lama 4 tahun sejak diperoleh", dasar: "Pasal 4 ayat (3) huruf m UU PPh; PMK 68/PMK.03/2020" },
        { label: "Sumbangan tanpa hubungan usaha", nilai: "Bukan objek PPh penerima", dasar: "Pasal 4 ayat (3) huruf a UU PPh" },
        { label: "Bunga deposito yayasan", nilai: "PPh final 20%, di luar sisa lebih", dasar: "Pasal 4 ayat (2) UU PPh" },
        { label: "Standar pelaporan nonlaba", nilai: "ISAK 335 (eks-ISAK 35) menggantikan PSAK 45", dasar: "SAK Indonesia", berlakuSejak: "2020-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (1) huruf b UU PPh", catatan: "yayasan/perkumpulan subjek pajak badan" },
        { pasal: "Pasal 4 ayat (3) huruf a dan m UU PPh", catatan: "sumbangan dan sisa lebih lembaga pendidikan/litbang" },
        { pasal: "PMK 68/PMK.03/2020", catatan: "perlakuan PPh atas sisa lebih badan nirlaba pendidikan/litbang" }
      ],
      jebakan: [
        { teks: "Menganggap seluruh penghasilan yayasan bukan objek karena 'nirlaba' — uang sekolah dan jasa tetap objek, hanya sisa lebih yang ditanamkan kembali dikecualikan", tagSebab: "salah-klasifikasi" },
        { teks: "Memasukkan bunga deposito (final) atau sumbangan (bukan objek) ke dalam sisa lebih", tagSebab: "final-nonfinal" },
        { teks: "Memakai istilah PSAK 45 'aset neto terikat temporer/permanen' — ISAK 335 memakai 'dengan/tanpa pembatasan'", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Yayasan pendidikan terdaftar memperoleh uang sekolah Rp4,2 miliar, biaya operasional Rp3,5 miliar, bunga deposito Rp80 juta, sumbangan alumni Rp300 juta. Berapa sisa lebih yang dapat dikecualikan bila ditanamkan kembali?",
        jawaban: "Rp700.000.000",
        langkah: [["Uang sekolah (objek non-final)", "Rp4.200.000.000"], ["Dikurangi biaya 3M", "Rp3.500.000.000"], ["Bunga deposito final dan sumbangan bukan objek", "tidak dihitung"], ["Sisa lebih", "Rp700.000.000"]]
      },
      verifikasi: "◐",
      peringatan: "Teks PMK 68/PMK.03/2020 (rincian bentuk penanaman kembali, cara menghitung sisa lebih, dan tahun pengenaan bila tidak ditanamkan) serta rumusan Pasal 4 ayat (3) huruf m pasca-UU HPP ('dana abadi') belum dibaca langsung dari sumber primer; topik juga ditandai ◐ di kurikulum."
    },
    {
      id: "B7.6", slug: "rekonsiliasi-fiskal", judul: "Rekonsiliasi fiskal dan penghitungan PPh badan",
      estimasiMenit: 22, jenisDominan: ["kasus", "hitung"],
      ringkasan: [
        "Rekonsiliasi: laba komersial ± koreksi fiskal = penghasilan neto fiskal; dikurangi kompensasi kerugian (berturut-turut sampai 5 tahun, Pasal 6 ayat (2)) = PKP, dibulatkan ke ribuan penuh ke bawah.",
        "Koreksi positif: biaya yang tidak dapat dikurangkan (Pasal 9) dan biaya komersial yang lebih besar dari biaya fiskal; koreksi negatif: penghasilan final dan bukan objek yang ada di laba komersial serta biaya fiskal yang lebih besar dari komersial.",
        "Beda tetap (sanksi, sumbangan, PPh, dividen diterima, penghasilan final) tidak berbalik; beda temporer (penyusutan, penyisihan piutang, imbalan kerja, penurunan nilai persediaan) berbalik di tahun lain dan menimbulkan pajak tangguhan.",
        "Biaya untuk mendapatkan, menagih, dan memelihara penghasilan final atau bukan objek tidak dapat dikurangkan sehingga ikut dikoreksi positif.",
        "PPh terutang = 22% × PKP; WP badan dalam negeri dengan peredaran bruto ≤ Rp50 miliar wajib memakai Pasal 31E (pengurangan 50% tarif atas PKP dari bagian peredaran bruto s.d. Rp4,8 miliar); Perseroan Terbuka yang memenuhi Pasal 17 ayat (2b) (paling sedikit 40% saham disetor di BEI, ≥ 300 pihak masing-masing < 5%, ≥ 183 hari) memakai 19% atas seluruh PKP.",
        "PPh 29 = PPh terutang − kredit pajak (PPh 22, 23, 24, 25); PPh final dan sanksi tidak dapat dikreditkan; PPh 29 dilunasi sebelum SPT disampaikan, paling lambat akhir bulan keempat setelah tahun buku. Angsuran PPh 25 tahun berikutnya = (PPh terutang − PPh 21, 22, 23, 24) / 12; bila SPT tahun lalu memuat kompensasi kerugian, PPh terutang itu dihitung ulang dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan (bila sisa habis: neto penuh), bukan PPh terutang setelah kompensasi (Pasal 25 ayat (6) huruf a UU PPh).",
        "Pada formulir 1771 format lama: rekonsiliasi di Lampiran 1771-I, rincian HPP dan biaya di 1771-II, kredit PPh 22/23 di 1771-III, PPh final dan bukan objek di 1771-IV; SPT Badan Coretax (PER-11/PJ/2025) menata ulang lampiran dengan substansi serupa."
      ],
      poinKunci: [
        { label: "Tarif PPh badan", nilai: "22% dari PKP", dasar: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" },
        { label: "Pasal 31E", nilai: "50% tarif atas PKP dari omzet s.d. Rp4,8 M; omzet ≤ Rp50 M", dasar: "Pasal 31E UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tarif Perseroan Terbuka", nilai: "19% (22% − 3%) bila ≥ 40% saham di BEI, ≥ 300 pihak < 5%, ≥ 183 hari", dasar: "Pasal 17 ayat (2b) UU PPh; PP 55/2022", berlakuSejak: "2022-01-01" },
        { label: "Kompensasi kerugian", nilai: "Berturut-turut sampai 5 tahun", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kredit pajak badan", nilai: "PPh 22, 23, 24, 25 (bukan PPh final, bukan sanksi)", dasar: "Pasal 28 ayat (1) UU PPh" },
        { label: "Batas SPT 1771", nilai: "Akhir bulan ke-4 setelah tahun buku", dasar: "Pasal 3 ayat (3) huruf c UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) dan (2) UU PPh", catatan: "biaya yang dapat dikurangkan; kompensasi kerugian" },
        { pasal: "Pasal 9 ayat (1) dan (2) UU PPh", catatan: "biaya yang tidak dapat dikurangkan" },
        { pasal: "Pasal 4 ayat (2) dan ayat (3) UU PPh", catatan: "penghasilan final dan bukan objek" },
        { pasal: "Pasal 17 ayat (1) huruf b dan Pasal 31E UU PPh", catatan: "tarif dan fasilitas" },
        { pasal: "Pasal 25, 28, 29 UU PPh", catatan: "angsuran, kredit pajak, kurang bayar" },
        { pasal: "PP 94/2010", catatan: "penghitungan penghasilan kena pajak" }
      ],
      jebakan: [
        { teks: "Lupa mengeluarkan penghasilan final/bukan objek dari laba komersial, atau sebaliknya lupa mengoreksi biaya yang terkait dengannya", tagSebab: "final-nonfinal" },
        { teks: "Mengkreditkan PPh final atau sanksi STP dalam penghitungan PPh 29", tagSebab: "final-nonfinal" },
        { teks: "Menghitung dengan tarif 25% (TP 2019 dan sebelumnya)", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Laba komersial Rp2.000.000.000; koreksi positif Rp300.000.000; koreksi negatif Rp100.000.000; omzet Rp70 miliar; kredit PPh 22/23/25 Rp400.000.000. PPh 29?",
        jawaban: "Rp84.000.000",
        langkah: [["Penghasilan neto fiskal = 2.000 + 300 − 100 (juta)", "Rp2.200.000.000"], ["Omzet > Rp50 M: tanpa 31E; PPh 22%", "Rp484.000.000"], ["Dikurangi kredit pajak", "Rp400.000.000"], ["PPh 29", "Rp84.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B7.7", slug: "pajak-tangguhan", judul: "Pajak tangguhan (PSAK 212)",
      estimasiMenit: 16, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "PSAK 212 (eks-PSAK 46): beban pajak penghasilan = beban pajak kini + beban (manfaat) pajak tangguhan; pajak tangguhan timbul dari beda temporer antara jumlah tercatat aset/liabilitas dan dasar pengenaan pajaknya, serta dari rugi fiskal yang dapat dikompensasikan.",
        "Beda temporer kena pajak (fiskal membebankan lebih cepat, mis. penyusutan fiskal > komersial) → liabilitas pajak tangguhan; beda temporer dapat dikurangkan (penyisihan piutang, imbalan kerja, penurunan nilai persediaan) dan rugi fiskal → aset pajak tangguhan.",
        "Diukur dengan tarif yang diperkirakan berlaku saat pemulihan — PPh badan 22% (ditetapkan UU HPP sejak TP 2022); tidak didiskontokan; aset pajak tangguhan hanya diakui sepanjang besar kemungkinan tersedia laba fiskal.",
        "Beda tetap (sanksi, sumbangan nondeductible, dividen diterima, penghasilan final) tidak menimbulkan pajak tangguhan.",
        "Jurnal: kenaikan aset pajak tangguhan → Dr Aset pajak tangguhan / Cr Manfaat pajak tangguhan; kenaikan liabilitas → Dr Beban pajak tangguhan / Cr Liabilitas pajak tangguhan; pemulihan dijurnal sebaliknya. Beban pajak tangguhan = saldo akhir − saldo awal.",
        "Aset dan liabilitas pajak tangguhan saling hapus bila ada hak legal dan berkaitan dengan otoritas perpajakan yang sama; disajikan sebagai pos tidak lancar."
      ],
      poinKunci: [
        { label: "Tarif pengukuran pajak tangguhan badan", nilai: "22%", dasar: "Pasal 17 ayat (1) huruf b UU PPh; PSAK 212", berlakuSejak: "2022-01-01" },
        { label: "Fiskal > komersial (biaya)", nilai: "Liabilitas pajak tangguhan", dasar: "PSAK 212" },
        { label: "Komersial > fiskal (biaya) / rugi fiskal", nilai: "Aset pajak tangguhan (bila probable)", dasar: "PSAK 212" },
        { label: "Diskonto", nilai: "Tidak didiskontokan", dasar: "PSAK 212" },
        { label: "Nomor standar", nilai: "PSAK 212 menggantikan nomor PSAK 46", dasar: "Penomoran ulang SAK IAI", berlakuSejak: "2024-01-01" }
      ],
      dasarHukum: [
        { pasal: "PSAK 212 Pajak Penghasilan", catatan: "pengakuan dan pengukuran pajak kini dan tangguhan" },
        { pasal: "Pasal 17 ayat (1) huruf b UU PPh", catatan: "tarif 22% untuk pengukuran" },
        { pasal: "Pasal 6 ayat (2) UU PPh", catatan: "rugi fiskal dapat dikompensasikan 5 tahun (dasar aset pajak tangguhan)" }
      ],
      jebakan: [
        { teks: "Mengakui pajak tangguhan atas beda tetap", tagSebab: "salah-klasifikasi" },
        { teks: "Membalik arah: penyusutan fiskal lebih besar dianggap menimbulkan aset pajak tangguhan", tagSebab: "salah-klasifikasi" },
        { teks: "Mencatat saldo akhir sebagai beban tahun berjalan — yang dicatat adalah perubahannya", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Penyusutan fiskal 2025 Rp300.000.000, komersial Rp200.000.000; tidak ada beda temporer lain. Dampak pajak tangguhan?",
        jawaban: "Liabilitas pajak tangguhan Rp22.000.000 (beban pajak tangguhan)",
        langkah: [["Beda temporer kena pajak", "Rp100.000.000"], ["× 22%", "Rp22.000.000"], ["Jurnal", "Dr Beban pajak tangguhan / Cr Liabilitas pajak tangguhan"]]
      },
      verifikasi: "◐",
      peringatan: "Pajak tangguhan lazim diajarkan dan diujikan dalam latihan, tetapi tidak disebut eksplisit dalam kisi-kisi resmi Akuntansi Perpajakan; bobotnya di UKP belum pasti."
    },
    {
      id: "B7.8", slug: "transaksi-khusus-c", judul: "[C] Valas dan transaksi internasional, lembaga keuangan, jasa konstruksi, restrukturisasi usaha",
      estimasiMenit: 18, jenisDominan: ["kasus", "klasifikasi"],
      ringkasan: [
        "Transaksi valas: pos moneter dijabarkan dengan kurs penutup sesuai SAK (PP 94/2010 Pasal 9); pajak atas transaksi valas dihitung dengan kurs KMK; pembukuan dalam bahasa Inggris dan dolar AS hanya setelah izin (Pasal 28 ayat (8) UU KUP).",
        "PPh 26 atas imbalan ke luar negeri: 20% dari bruto atau tarif P3B bila ada SKD; bila kontrak memakai gross-up, PPh 26 menjadi bagian imbalan yang dapat dibiayakan, sedangkan PPh yang sekadar 'ditanggung' tanpa gross-up tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h).",
        "Lembaga keuangan: bank dan lembaga pembiayaan boleh membiayakan cadangan piutang tak tertagih dalam batas peraturan; bunga deposito/tabungan yang diterima bank tidak dipotong PPh final dan menjadi penghasilan tarif umum; bunga yang dibayar kepada bank tidak dipotong PPh 23 (Pasal 23 ayat (4) huruf a).",
        "Jasa konstruksi (PP 9/2022): PPh final atas jumlah pembayaran tanpa PPN — 1,75% kualifikasi kecil/perseorangan, 2,65% menengah/besar dan terintegrasi bersertifikat, 4% tanpa sertifikat, 3,5%/6% konsultansi; terutang mengikuti pembayaran, bukan persentase penyelesaian PSAK 115.",
        "Penggabungan, peleburan, pemekaran, pengambilalihan, likuidasi: pengalihan harta pada dasarnya memakai harga pasar (Pasal 10 ayat (3) UU PPh); nilai buku boleh dipakai setelah mendapat persetujuan Direktur Jenderal Pajak dan memenuhi persyaratan tujuan bisnis menurut Pasal 392 dan 393 PMK 81/2024 (sejak 1 Januari 2025 menggantikan PMK 52/PMK.010/2017 s.t.d.d. PMK 56/PMK.010/2021), dan sisa rugi fiskal pihak yang menggabungkan diri tidak dapat dikompensasikan (Pasal 402 PMK 81/2024).",
        "Likuidasi: pembagian sisa hasil likuidasi yang melebihi modal disetor adalah dividen (Pasal 4 ayat (1) huruf g) — bagi orang pribadi dalam negeri dikecualikan bila diinvestasikan di Indonesia, jika tidak dikenai PPh final 10%; bagi badan dalam negeri bukan objek.",
        "Akuisisi (pengambilalihan) dapat berupa pembelian saham atau pembelian aset/usaha. Pada akuisisi saham, entitas yang diambil alih tetap wajib pajak yang sama: harta, nilai sisa buku fiskal, dan sisa rugi fiskalnya tidak berubah; pembeli mencatat investasi sebesar harga perolehan saham yang tidak disusutkan atau diamortisasi, dan goodwill yang muncul di laporan konsolidasian tidak dapat dibiayakan; keuntungan penjual merupakan objek PPh (saham di bursa: PPh final 0,1%). Pada akuisisi aset, pembeli mencatat tiap harta sebesar harga perolehannya, muhibah (goodwill) yang dibeli diamortisasi menurut Pasal 11A ayat (1) UU PPh, dan penjual mengakui laba/rugi pengalihan atas setiap harta; sisa rugi fiskal penjual tidak ikut beralih.",
        "Konsolidasi: UU PPh tidak mengenal pajak grup. Laporan keuangan konsolidasian hanya untuk pelaporan komersial; SPT Tahunan disusun per entitas dari laporan keuangan entitas tersendiri, sehingga eliminasi transaksi dan laba antarperusahaan tidak menghapus PPN maupun PPh atas transaksi itu, dan rugi fiskal satu entitas tidak dapat dikompensasikan dengan laba entitas lain dalam grup. Transaksi antarentitas grup wajib wajar (Pasal 18 ayat (3) UU PPh). Bagian laba entitas anak menurut metode ekuitas bukan penghasilan fiskal (dikoreksi negatif); dividen dari badan dalam negeri yang diterima WP badan dalam negeri dikecualikan dari objek (Pasal 4 ayat (3) huruf f).",
        "Lembaga keuangan non-bank: (a) perusahaan asuransi — premi bruto adalah penghasilan, pembayaran klaim dan cadangan teknis (cadangan premi, cadangan klaim) yang dibentuk sesuai ketentuan boleh dikurangkan (Pasal 9 ayat (1) huruf c), sedangkan piutang premi baru dapat dibebankan saat dihapus memenuhi Pasal 6 ayat (1) huruf h; (b) perusahaan pembiayaan (sewa guna usaha dengan hak opsi, pembiayaan konsumen, anjak piutang) — cadangan piutang tak tertagih boleh dibiayakan dalam batas PMK, dan angsuran sewa guna usaha dengan hak opsi tidak dipotong PPh 23 (Pasal 23 ayat (4) huruf b), berbeda dengan sewa operasi yang dipotong PPh 23 2%; (c) dana pensiun yang pendiriannya disahkan OJK — iuran yang diterima dan penghasilan dari penanaman modal di bidang tertentu bukan objek (Pasal 4 ayat (3) huruf g dan h)."
      ],
      poinKunci: [
        { label: "Konstruksi kecil · menengah/besar · tanpa sertifikat", nilai: "1,75% · 2,65% · 4%", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21" },
        { label: "Konsultansi konstruksi bersertifikat · tanpa", nilai: "3,5% · 6%", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21" },
        { label: "Pengalihan harta dalam restrukturisasi", nilai: "Harga pasar, kecuali nilai buku dengan persetujuan DJP dan syarat PMK", dasar: "Pasal 10 ayat (3) UU PPh; Pasal 392 PMK 81 Tahun 2024", berlakuSejak: "2025-01-01" },
        { label: "PPh 26 tanpa P3B/SKD", nilai: "20% dari bruto", dasar: "Pasal 26 ayat (1) UU PPh" },
        { label: "Bunga dibayar ke bank", nilai: "Tidak dipotong PPh 23", dasar: "Pasal 23 ayat (4) huruf a UU PPh" },
        { label: "Goodwill (muhibah) secara fiskal", nilai: "Dibeli dari pihak lain (akuisisi aset): diamortisasi Ps. 11A; goodwill konsolidasian akuisisi saham: tidak dapat dibiayakan", dasar: "Pasal 11A ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Konsolidasi", nilai: "Tidak ada pajak grup; SPT per entitas; eliminasi antarperusahaan tidak menghapus PPN/PPh", dasar: "UU PPh (subjek pajak per badan); Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Cadangan LK non-bank yang boleh dibiayakan", nilai: "Cadangan teknis asuransi; cadangan piutang SGU hak opsi, pembiayaan konsumen, anjak piutang (dalam batas PMK)", dasar: "Pasal 9 ayat (1) huruf c UU PPh; PMK 74 Tahun 2024 (cadangan piutang, sejak Tahun Pajak 2024); PMK 81/PMK.03/2009 Pasal 12 sampai Pasal 14 (cadangan asuransi)", berlakuSejak: "2024-01-01" }
      ],
      dasarHukum: [
        { pasal: "PP 94/2010 Pasal 9", catatan: "selisih kurs" },
        { pasal: "Pasal 26 ayat (1) UU PPh; PMK 112/2025", catatan: "PPh 26 dan penerapan P3B" },
        { pasal: "Pasal 9 ayat (1) huruf c UU PPh; PMK 74 Tahun 2024 (cadangan piutang tak tertagih); PMK 81/PMK.03/2009 Pasal 12 sampai Pasal 14 (cadangan asuransi)", catatan: "cadangan lembaga keuangan" },
        { pasal: "PP 9/2022", catatan: "PPh final jasa konstruksi" },
        { pasal: "Pasal 10 ayat (3) UU PPh; Pasal 392 sampai 403 PMK 81/2024 (dahulu PMK 52/PMK.010/2017)", catatan: "nilai buku dalam restrukturisasi" },
        { pasal: "Pasal 11A ayat (1) UU PPh", catatan: "amortisasi muhibah (goodwill) dan harta tak berwujud" },
        { pasal: "Pasal 4 ayat (3) huruf f, g, h dan Pasal 23 ayat (4) huruf b UU PPh", catatan: "dividen antarbadan dalam negeri, dana pensiun, sewa guna usaha dengan hak opsi" }
      ],
      jebakan: [
        { teks: "Menghitung PPh final konstruksi dari pendapatan PSAK 115 (persentase penyelesaian) — dasar pengenaannya pembayaran yang diterima", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai tarif konstruksi lama PP 51/2008 (2%/3%/4%) — sudah diganti PP 9/2022", tagSebab: "angka-usang" },
        { teks: "Menganggap PPh 26 yang ditanggung (tanpa gross-up) dapat dibiayakan", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Kontraktor kualifikasi menengah menerima termin Rp3.000.000.000 (tanpa PPN) pada 2025, sedangkan pendapatan PSAK 115 tahun itu Rp4.000.000.000. PPh final 2025?",
        jawaban: "Rp79.500.000",
        langkah: [["Dasar = pembayaran diterima", "Rp3.000.000.000"], ["Tarif kualifikasi menengah", "2,65%"], ["PPh final", "Rp79.500.000"]]
      },
      verifikasi: "◐",
      peringatan: "Nilai buku (Pasal 392 sampai Pasal 406 PMK 81 Tahun 2024 s.t.d.t.d. PMK 1 Tahun 2026), cadangan piutang bank dan lembaga pembiayaan (PMK 74 Tahun 2024), dan cadangan asuransi kerugian (Pasal 12 dan Pasal 13 PMK 81/PMK.03/2009) sudah dicocokkan dengan naskah. Perlakuan akuisisi saham (sisa rugi fiskal entitas yang diambil alih tetap) disusun dari ketentuan UU PPh dan belum dicek ke teks peraturan pelaksana."
    }
  ],
  soal: [
    /* ---------- B7.1 Jurnal hak dan kewajiban perpajakan ---------- */
    {
      id: "B7-001", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-B7-01",
      stem: "Vignette PT Sinar Mesin Perkasa (1/3). PT Sinar Mesin Perkasa (PKP, produsen suku cadang mesin pertanian, peredaran bruto 2025 Rp68 miliar) pada Masa Pajak Maret 2026 menerima tagihan jasa konsultan manajemen dari PT Konsulindo Utama (PKP, ber-NPWP) sebesar Rp80.000.000 belum termasuk PPN; faktur pajak dibuat dengan DPP nilai lain 11/12. PT Sinar Mesin memotong PPh sesuai ketentuan dan membukukan utang kepada vendor sebesar jumlah neto yang akan ditransfer. Berapa jumlah yang dikreditkan ke akun Utang Usaha – PT Konsulindo?",
      kataKualifikasi: [],
      opsi: { A: "Rp88.800.000", B: "Rp88.000.000", C: "Rp87.024.000", D: "Rp87.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "PPN Masukan = 12% × 11/12 × Rp80.000.000 = Rp8.800.000; PPh 23 atas jasa konsultan = 2% × Rp80.000.000 = Rp1.600.000 (dicatat Utang PPh 23). Utang kepada vendor = 80.000.000 + 8.800.000 − 1.600.000 = Rp87.200.000. Jurnal: Dr Beban jasa konsultan 80.000.000; Dr PPN Masukan 8.800.000; Cr Utang PPh 23 1.600.000; Cr Utang usaha 87.200.000.",
        jejakHitung: [["DPP nilai lain = 11/12 × 80.000.000", "Rp73.333.333"], ["PPN Masukan = 12% × DPP nilai lain", "Rp8.800.000"], ["PPh 23 = 2% × 80.000.000 (tanpa PPN)", "Rp1.600.000"], ["Utang usaha = 80.000.000 + 8.800.000 − 1.600.000", "Rp87.200.000"]],
        mengapaSalah: { A: "Tidak memotong PPh 23, seolah jasa konsultan bukan objek pemotongan", B: "PPN dihitung 12% × harga penuh (Rp9.600.000) tanpa DPP nilai lain 11/12", C: "PPh 23 dihitung dari nilai termasuk PPN (2% × Rp88.800.000 = Rp1.776.000)" },
        jebakan: "Dua dasar yang berbeda dalam satu faktur: PPN memakai DPP nilai lain 11/12, PPh 23 memakai jumlah bruto tanpa PPN."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-002", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-B7-01",
      stem: "Vignette PT Sinar Mesin Perkasa (2/3). Selain jasa konsultan Rp80.000.000 (PPN Masukan Rp8.800.000), pada Masa Maret 2026 PT Sinar Mesin: (1) menjual suku cadang (bukan barang mewah) kepada PT Buana Motor (bukan pemungut PPN) seharga Rp500.000.000; (2) membeli bahan baku dari PKP seharga Rp300.000.000 dengan faktur pajak DPP nilai lain 11/12; (3) membayar renovasi rumah pribadi direktur utama dengan faktur atas nama perusahaan, PPN Rp5.500.000. Tidak ada lebih bayar dari masa sebelumnya dan semua faktur lengkap. Berapa PPN kurang bayar Masa Maret 2026 yang dicatat sebagai Utang PPN?",
      kataKualifikasi: [],
      opsi: { A: "Rp14.400.000", B: "Rp7.700.000", C: "Rp13.200.000", D: "Rp18.200.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PPN Keluaran = 12% × 11/12 × Rp500.000.000 = Rp55.000.000. Pajak Masukan yang dapat dikreditkan hanya yang berhubungan langsung dengan kegiatan usaha: bahan baku Rp33.000.000 + jasa konsultan Rp8.800.000 = Rp41.800.000. PPN renovasi rumah pribadi direktur tidak dapat dikreditkan (Pasal 9 ayat (8) huruf b UU PPN). Kurang bayar Rp13.200.000: Dr PPN Keluaran 55.000.000; Cr PPN Masukan 41.800.000; Cr Utang PPN 13.200.000.",
        jejakHitung: [["PPN Keluaran = 12% × 11/12 × 500.000.000", "Rp55.000.000"], ["PM bahan baku = 12% × 11/12 × 300.000.000", "Rp33.000.000"], ["PM jasa konsultan", "Rp8.800.000"], ["PM renovasi rumah direktur", "tidak dapat dikreditkan"], ["Kurang bayar = 55.000.000 − 41.800.000", "Rp13.200.000"]],
        mengapaSalah: { A: "PK dan PM dihitung 12% × harga penuh (60.000.000 − 36.000.000 − 9.600.000)", B: "Mengkreditkan PPN renovasi rumah pribadi direktur (Rp5.500.000) yang tidak berhubungan langsung dengan kegiatan usaha", D: "PK dihitung 12% × harga penuh (Rp60.000.000) sementara PM sudah benar" },
        jebakan: "Pengeluaran pribadi pengurus yang difakturkan atas nama perusahaan tetap tidak dapat dikreditkan; dijurnal sebagai piutang direktur atau beban yang dikoreksi positif, bukan PPN Masukan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-003", topik: "B7.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-B7-01",
      stem: "Vignette PT Sinar Mesin Perkasa (3/3). Dari transaksi Masa Maret 2026, PT Sinar Mesin mencatat Utang PPh 23 Rp1.600.000 (jasa konsultan PT Konsulindo) dan Utang PPN Rp13.200.000. Seluruh kewajiban diselesaikan melalui Coretax. Pernyataan yang tepat mengenai batas paling lambat penyelesaian kedua utang pajak tersebut adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "Utang PPh 23 disetor paling lambat 15 April 2026 dengan bukti potong BPPU dan dilaporkan dalam SPT Masa PPh Unifikasi paling lambat 20 April 2026; Utang PPN disetor sebelum SPT Masa PPN disampaikan, paling lambat 30 April 2026",
        B: "Utang PPh 23 disetor paling lambat 10 April 2026 dan dilaporkan paling lambat 20 April 2026; Utang PPN disetor paling lambat 15 April 2026 dan SPT Masa PPN dilaporkan paling lambat 20 April 2026",
        C: "Utang PPh 23 disetor paling lambat 15 April 2026 dengan bukti potong BP21 dan dilaporkan dalam SPT Masa PPh 21/26; Utang PPN boleh disetor setelah SPT Masa PPN disampaikan asalkan sebelum 30 April 2026",
        D: "Utang PPh 23 disetor paling lambat 15 April 2026 dan dilaporkan paling lambat 30 April 2026 bersama SPT Masa PPN; Utang PPN disetor paling lambat 15 April 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 81/2024 menyeragamkan penyetoran PPh yang dipotong menjadi tanggal 15 bulan berikutnya dan pelaporan SPT Masa PPh paling lama 20 hari setelah masa pajak berakhir; PPN kurang bayar disetor sebelum SPT Masa PPN disampaikan dengan batas lapor akhir bulan berikutnya. Bukti potong PPh 23 kepada WP dalam negeri di Coretax adalah BPPU (PER-11/PJ/2025).",
        jejakHitung: [],
        mengapaSalah: { B: "Tanggal 10 adalah aturan lama (PMK 242/2014); PPN tidak memakai batas 15/20", C: "BP21 untuk PPh 21 bukan pegawai; PPN kurang bayar wajib disetor sebelum SPT Masa PPN disampaikan", D: "SPT Masa PPh Unifikasi terpisah dari SPT Masa PPN dan berbatas 20 hari; PPN tidak berbatas setor tanggal 15" },
        jebakan: "Bedakan tiga tenggat: setor PPh yang dipotong (15), lapor SPT Masa PPh (20), SPT Masa PPN (akhir bulan, setor sebelum lapor)."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 (tenggat setor dan lapor)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-004", topik: "B7.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Andalan Solusi Data (PKP, penyedia jasa pemeliharaan perangkat lunak) menerbitkan faktur kepada PT Bank Pratama (PKP, pemotong PPh 23) pada Agustus 2026 atas jasa pemeliharaan software Rp150.000.000 belum termasuk PPN (DPP nilai lain 11/12). Pada September 2026 PT Bank Pratama melunasi tagihan setelah memotong PPh sesuai ketentuan dan menerbitkan bukti potong BPPU. Jurnal di pembukuan PT Andalan saat menerima pelunasan yang benar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Kas 163.170.000; Dr PPh 23 dibayar di muka 3.330.000; Cr Piutang usaha 166.500.000",
        B: "Dr Kas 163.500.000; Dr Beban PPh final 3.000.000; Cr Piutang usaha 166.500.000",
        C: "Dr Kas 163.500.000; Dr PPh 23 dibayar di muka 3.000.000; Cr Piutang usaha 166.500.000",
        D: "Dr Kas 163.500.000; Dr Utang PPh 23 3.000.000; Cr Piutang usaha 166.500.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Piutang = Rp150.000.000 + PPN 11% efektif Rp16.500.000 = Rp166.500.000. PPh 23 jasa (perawatan software termasuk jasa lain PMK 141/2015) 2% × Rp150.000.000 = Rp3.000.000 bersifat tidak final, sehingga bagi pihak yang dipotong dicatat sebagai PPh 23 dibayar di muka (kredit pajak SPT Tahunan); kas diterima Rp163.500.000.",
        jejakHitung: [["PPN = 12% × 11/12 × 150.000.000", "Rp16.500.000"], ["Piutang usaha", "Rp166.500.000"], ["PPh 23 = 2% × 150.000.000", "Rp3.000.000"], ["Kas = 166.500.000 − 3.000.000", "Rp163.500.000"]],
        mengapaSalah: { A: "PPh 23 dihitung dari nilai termasuk PPN", B: "PPh 23 bukan PPh final; tidak dibebankan melainkan dikreditkan", D: "Utang PPh 23 adalah akun pemotong (PT Bank Pratama), bukan pihak yang dipotong" },
        jebakan: "Posisi menentukan akun: pemotong mencatat Utang PPh 23, pihak yang dipotong mencatat PPh 23 dibayar di muka."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2015-08-24" }, { pasal: "Pasal 28 ayat (1) UU PPh (kredit pajak)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-005", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Mitra Kemas Nusantara (tahun buku kalender, peredaran bruto 2025 Rp95 miliar) menghitung PPh badan terutang Tahun Pajak 2025 sebesar Rp620.000.000. Selama 2025 tercatat: PPh 22 impor dibayar di muka Rp45.000.000; PPh 23 dibayar di muka (dipotong pelanggan) Rp38.000.000; angsuran PPh 25 Rp12.000.000 per bulan selama 12 bulan; PPh final Pasal 4 ayat (2) atas gudang yang disewakan Rp20.000.000; serta STP bunga keterlambatan PPh 25 Rp3.000.000 yang telah dilunasi. Berapa saldo Utang PPh Pasal 29 yang harus dilunasi sebelum SPT Tahunan disampaikan?",
      kataKualifikasi: [],
      opsi: { A: "Rp438.000.000", B: "Rp390.000.000", C: "Rp373.000.000", D: "Rp393.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Kredit pajak badan hanya PPh 22, 23, 24, dan 25: 45.000.000 + 38.000.000 + 144.000.000 = Rp227.000.000. PPh 29 = 620.000.000 − 227.000.000 = Rp393.000.000. Jurnal: Dr Beban pajak kini 620.000.000 / Cr Utang PPh badan; lalu Dr Utang PPh badan 227.000.000 / Cr PPh 22, 23, 25 dibayar di muka; saldo Utang PPh 29 Rp393.000.000.",
        jejakHitung: [["PPh terutang 2025", "Rp620.000.000"], ["PPh 22 + PPh 23 dibayar di muka", "Rp83.000.000"], ["PPh 25 = 12 × 12.000.000", "Rp144.000.000"], ["Total kredit pajak", "Rp227.000.000"], ["PPh 29 = 620.000.000 − 227.000.000", "Rp393.000.000"]],
        mengapaSalah: { A: "PPh 22 impor tidak final sehingga merupakan kredit pajak", B: "Sanksi bunga STP bukan kredit pajak; dibebankan dan dikoreksi positif", C: "PPh final atas sewa tidak dapat dikreditkan (Pasal 4 ayat (2))" },
        jebakan: "Saldo akun 'pajak dibayar di muka' bisa tercampur PPh final dan sanksi — keluarkan keduanya sebelum menghitung PPh 29."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-006",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Dua perusahaan manufaktur memperlakukan PPh 21 pegawainya secara berbeda pada 2025. PT Alfa membayar 'tunjangan PPh' kepada setiap pegawai sebesar PPh 21 terutang (dihitung dengan metode gross-up) dan mencantumkannya sebagai penghasilan bruto pada bukti potong; totalnya Rp180.000.000. PT Beta menanggung PPh 21 pegawai sebesar Rp180.000.000 tanpa memberikannya sebagai tunjangan PPh (pegawai menerima gaji tanpa potongan PPh 21). Perlakuan fiskal yang tepat dalam rekonsiliasi PPh Badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Alfa dikoreksi positif; PT Beta dapat dikurangkan", B: "PT Alfa: tunjangan PPh dapat dikurangkan; PT Beta: PPh 21 yang ditanggung dikoreksi positif Rp180.000.000", C: "Keduanya dikoreksi positif karena pajak penghasilan tidak dapat dibiayakan", D: "Keduanya dapat dikurangkan karena sama-sama biaya pegawai" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tunjangan PPh (termasuk gross-up) adalah bagian imbalan dalam bentuk uang: biaya 3M yang dapat dikurangkan (Pasal 6 ayat (1) huruf a UU PPh) sekaligus penghasilan pegawai. PPh 21 yang ditanggung pemberi kerja tanpa tunjangan menurut contoh I.4 Lampiran PMK 168/2023 merupakan penggantian dalam bentuk kenikmatan bagi pegawai dan objek pemotongan PPh 21, sedangkan biaya kenikmatan dapat dikurangkan pemberi kerja (Pasal 6 ayat (1) huruf n UU PPh; Pasal 2 ayat (1) PMK 66/2023). Untuk Tahun Pajak 2025 kedua perusahaan karenanya tidak mengoreksi jumlah Rp180.000.000.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kebalikan dari perlakuan lama dan tidak sesuai perlakuan baru: tunjangan PPh selalu biaya gaji",
          B: "Aturan lama (PER-16/PJ/2016): PPh ditanggung bukan penghasilan pegawai dan tidak boleh dibiayakan; kini PPh itu kenikmatan pegawai yang dapat dibiayakan (PMK 66/2023 Pasal 2 ayat (1); contoh I.4 Lampiran PMK 168/2023)",
          C: "Tunjangan PPh dan PPh 21 yang ditanggung sama-sama penghasilan pegawai, sehingga bagi perusahaan keduanya biaya pegawai, bukan PPh perusahaan sendiri"
        },
        jebakan: "Aturan lama membedakan tunjangan PPh (deductible) dan PPh ditanggung (nondeductible); kini keduanya penghasilan pegawai dan dapat dibiayakan. Jangan tertukar dengan PPh badan atau PPh final yang dibebankan perusahaan, yang tetap tidak dapat dikurangkan (Pasal 9 ayat (1) huruf h)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a dan n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 2 ayat (1) PMK 66/2023 (biaya natura dan/atau kenikmatan dapat dikurangkan pemberi kerja)", berlakuSejak: "2023-07-01" }, { pasal: "Lampiran huruf B Bagian Kedua angka I.4 PMK 168/2023 (PPh 21 yang ditanggung pemberi kerja adalah penggantian dalam bentuk kenikmatan)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh (PPh perusahaan sendiri tetap tidak dapat dikurangkan)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-007", topik: "B7.1", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
      kutipan: "Pasal 28 ayat (11) UU KUP: Buku, catatan, dan dokumen yang menjadi dasar pembukuan atau pencatatan dan dokumen lain termasuk hasil pengolahan data dari pembukuan yang dikelola secara elektronik atau secara program aplikasi on-line wajib disimpan selama 10 (sepuluh) tahun di Indonesia, yaitu di tempat kegiatan atau tempat tinggal Wajib Pajak orang pribadi, atau di tempat kedudukan Wajib Pajak badan.",
      stem: "PT Nusa Prima Elektrik (WP badan, PMDN) sedang memindahkan seluruh sistem akuntansinya ke aplikasi berbasis cloud dan berencana mengubah tahun buku dari Januari–Desember menjadi April–Maret mulai 2027. Direktur keuangan meminta ringkasan kewajiban pembukuan menurut Pasal 28 UU KUP. Berdasarkan kutipan dan ketentuan Pasal 28 UU KUP, semua pernyataan berikut benar, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Pembukuan diselenggarakan di Indonesia dengan huruf Latin, angka Arab, satuan mata uang Rupiah, dan bahasa Indonesia atau bahasa asing yang diizinkan Menteri Keuangan",
        B: "Perubahan tahun buku menjadi April–Maret harus mendapat persetujuan Direktur Jenderal Pajak",
        C: "Hasil pengolahan data elektronik termasuk dokumen yang wajib disimpan selama 10 tahun di Indonesia",
        D: "Karena data tersimpan di server cloud, dokumen dasar pembukuan cukup disimpan 5 tahun dan boleh hanya berada di luar negeri"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 28 ayat (11) mewajibkan penyimpanan 10 tahun di Indonesia, termasuk data elektronik; ayat (4) mengatur bahasa/huruf/satuan; ayat (6) mensyaratkan persetujuan DJP untuk perubahan metode pembukuan dan/atau tahun buku. Pernyataan D melanggar jangka dan tempat penyimpanan.",
        jejakHitung: [],
        mengapaSalah: { A: "Sesuai Pasal 28 ayat (4) UU KUP", B: "Sesuai Pasal 28 ayat (6) UU KUP", C: "Sesuai Pasal 28 ayat (11) UU KUP" },
        jebakan: "Soal 'kecuali': cari pernyataan yang salah, bukan yang benar."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (4), (6), dan (11) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-008",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Agro Pangan Lestari (importir pemilik API, PKP) pada Juni 2026 mengimpor mesin pengemas (bukan barang mewah) untuk dipakai sendiri. Nilai CIF dalam rupiah dengan kurs KMK Rp400.000.000; bea masuk 5% dari CIF; tidak ada pungutan lain. PPN impor dan PPh 22 impor dilunasi bersamaan dengan bea masuk sebelum barang dikeluarkan dari kawasan pabean. Berapa jumlah yang didebit ke akun 'PPh Pasal 22 dibayar di muka' dan bagaimana sifatnya?",
      kataKualifikasi: [],
      opsi: { A: "Rp10.500.000; dapat dikreditkan dalam SPT Tahunan PPh Badan 2026", B: "Rp31.500.000; dapat dikreditkan dalam SPT Tahunan PPh Badan 2026", C: "Rp10.000.000; dapat dikreditkan dalam SPT Tahunan PPh Badan 2026", D: "Rp10.500.000; dikapitalisasi ke harga perolehan mesin karena bersifat final" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Nilai impor = CIF + bea masuk = Rp420.000.000. PPh 22 importir ber-API 2,5% × Rp420.000.000 = Rp10.500.000, tidak final, dicatat sebagai pajak dibayar di muka. PPN impor 12% × 11/12 × Rp420.000.000 = Rp46.200.000 menjadi PPN Masukan; harga perolehan mesin Rp420.000.000.",
        jejakHitung: [
          ["Bea masuk = 5% × 400.000.000", "Rp20.000.000"],
          ["Nilai impor = CIF + bea masuk", "Rp420.000.000"],
          ["PPh 22 API = 2,5% × 420.000.000", "Rp10.500.000"],
          ["PPN impor = 12% × 11/12 × 420.000.000", "Rp46.200.000"]
        ],
        mengapaSalah: {
          B: "Tarif 7,5% untuk importir tanpa API",
          C: "Dasar PPh 22 impor adalah nilai impor (CIF + bea masuk), bukan CIF saja",
          D: "PPh 22 impor tidak final; bukan unsur harga perolehan"
        },
        jebakan: "Dasar PPh 22 impor dan PPN impor sama-sama nilai impor (CIF + bea masuk + pungutan lain)."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf b UU PPh; PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    /* ---------- B7.2 Piutang, persediaan, biaya dibayar di muka ---------- */
    {
      id: "B7-009", topik: "B7.2", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 6 ayat (1) huruf h UU PPh: piutang yang nyata-nyata tidak dapat ditagih dapat dikurangkan dengan syarat (1) telah dibebankan sebagai biaya dalam laporan laba rugi komersial; (2) Wajib Pajak menyerahkan daftar piutang yang tidak dapat ditagih kepada Direktorat Jenderal Pajak; dan (3) perkara penagihannya telah diserahkan kepada Pengadilan Negeri atau instansi pemerintah yang menangani piutang negara, atau ada perjanjian tertulis penghapusan piutang/pembebasan utang, atau telah dipublikasikan dalam penerbitan umum atau khusus, atau ada pengakuan debitur bahwa utangnya telah dihapuskan.",
      stem: "PT Mitra Elektrik Sejahtera (distributor peralatan listrik, bukan lembaga keuangan) memakai metode penyisihan. Pada 2025 dibukukan beban penyisihan piutang Rp75.000.000. Selama 2025 didebit ke akun penyisihan: (i) piutang PT Zenit Rp40.000.000 yang perkara penagihannya telah diserahkan ke Pengadilan Negeri dan dicantumkan dalam daftar piutang yang dilampirkan pada SPT; (ii) piutang CV Wira Rp15.000.000 yang hanya didukung memo internal bagian penagihan. Berdasarkan kutipan tersebut, koreksi fiskal atas pos piutang dalam rekonsiliasi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp35.000.000", B: "Koreksi positif Rp75.000.000", C: "Koreksi positif Rp20.000.000", D: "Koreksi positif Rp115.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Beban penyisihan Rp75.000.000 tidak dapat dikurangkan (Pasal 9 ayat (1) huruf c). Biaya fiskal 2025 hanya penghapusan yang memenuhi syarat: piutang PT Zenit Rp40.000.000. Koreksi positif = 75.000.000 − 40.000.000 = Rp35.000.000. Penghapusan CV Wira tidak memenuhi syarat angka (3).",
        jejakHitung: [["Beban penyisihan komersial", "Rp75.000.000"], ["Penghapusan memenuhi syarat (biaya fiskal)", "Rp40.000.000"], ["Penghapusan CV Wira (memo internal)", "bukan biaya fiskal"], ["Koreksi positif = 75.000.000 − 40.000.000", "Rp35.000.000"]],
        mengapaSalah: { B: "Penghapusan PT Zenit yang memenuhi syarat adalah biaya fiskal 2025 dan harus diperhitungkan", C: "Memo internal tidak memenuhi syarat angka (3); CV Wira tidak boleh dibiayakan", D: "Penghapusan yang memenuhi syarat mengurangi koreksi, bukan menambahnya" },
        jebakan: "Pada metode penyisihan, biaya komersial = beban penyisihan, biaya fiskal = penghapusan yang memenuhi syarat; koreksi adalah selisih keduanya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 207/PMK.010/2015" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-010", topik: "B7.2", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      kutipan: "Pasal 9 ayat (1) huruf c UU PPh: tidak boleh dikurangkan pembentukan atau pemupukan dana cadangan, kecuali cadangan piutang tak tertagih untuk usaha bank dan badan usaha lain yang menyalurkan kredit, sewa guna usaha dengan hak opsi, perusahaan pembiayaan konsumen, dan perusahaan anjak piutang; cadangan usaha asuransi; cadangan penjaminan LPS; cadangan biaya reklamasi pertambangan; cadangan biaya penanaman kembali kehutanan; dan cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah industri.",
      stem: "Empat klien sebuah kantor konsultan pajak membentuk cadangan kerugian piutang dalam laporan keuangan 2025 dan membebankannya ke laba rugi. Berdasarkan kutipan tersebut, beban pembentukan cadangan piutang dapat dikurangkan dalam penghitungan PKP (sepanjang dalam batas Peraturan Menteri Keuangan) oleh klien berikut, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "PT Bank Sentosa Raya (bank umum)", B: "PT Andalan Leasing (sewa guna usaha dengan hak opsi)", C: "PT Kredit Motor Rakyat (perusahaan pembiayaan konsumen)", D: "PT Traktor Prima Niaga (distributor alat berat yang menjual secara kredit kepada pelanggannya)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian cadangan piutang hanya untuk usaha bank dan badan lain yang menyalurkan kredit, SGU dengan hak opsi, pembiayaan konsumen, dan anjak piutang. Distributor yang menjual secara kredit bukan lembaga pembiayaan; cadangannya dikoreksi positif dan baru menjadi biaya saat piutang dihapus sesuai Pasal 6 ayat (1) huruf h.",
        jejakHitung: [],
        mengapaSalah: { A: "Bank termasuk pengecualian Pasal 9 ayat (1) huruf c angka 1", B: "SGU dengan hak opsi termasuk pengecualian", C: "Pembiayaan konsumen termasuk pengecualian" },
        jebakan: "'Menjual secara kredit' tidak sama dengan 'menyalurkan kredit' sebagai usaha pembiayaan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/PMK.03/2009 s.t.d.d. PMK 219/PMK.011/2012" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-011", topik: "B7.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-B7-02",
      kutipan: "Pasal 10 ayat (6) UU PPh: Persediaan dan pemakaian persediaan untuk penghitungan harga pokok dinilai berdasarkan harga perolehan yang dilakukan secara rata-rata atau dengan cara mendahulukan persediaan yang diperoleh pertama.",
      stem: "Vignette PT Sumber Pangan Niaga (1/2). PT Sumber Pangan (distributor beras kemasan; pembukuan taat asas memakai FIFO) mencatat untuk 2025: persediaan awal 1.000 karung @ Rp50.000; pembelian Maret 2.000 karung @ Rp55.000; pembelian Agustus 1.500 karung @ Rp60.000; penjualan 3.200 karung. Pada 31 Desember 2025 nilai realisasi neto persediaan akhir hanya Rp65.000.000, sehingga perusahaan membukukan penurunan nilai persediaan ke dalam HPP komersial. Berdasarkan kutipan tersebut, harga pokok penjualan menurut fiskal 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp185.000.000", B: "Rp172.000.000", C: "Rp177.777.778", D: "Rp183.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "HPP FIFO = 1.000 × 50.000 + 2.000 × 55.000 + 200 × 60.000 = Rp172.000.000. Persediaan akhir 1.300 × 60.000 = Rp78.000.000; penurunan ke NRV Rp13.000.000 dibukukan dalam HPP komersial (Rp185.000.000) tetapi tidak diakui fiskal karena persediaan dinilai berdasarkan harga perolehan.",
        jejakHitung: [["1.000 × 50.000", "Rp50.000.000"], ["2.000 × 55.000", "Rp110.000.000"], ["200 × 60.000", "Rp12.000.000"], ["HPP fiskal (FIFO)", "Rp172.000.000"], ["Persediaan akhir 78.000.000 − NRV 65.000.000", "penurunan nilai Rp13.000.000 (tidak diakui fiskal)"]],
        mengapaSalah: { A: "Memasukkan penurunan nilai persediaan Rp13.000.000 ke HPP fiskal", C: "Memakai rata-rata tertimbang padahal pembukuan taat asas memakai FIFO", D: "Memakai LIFO (1.500 × 60.000 + 1.700 × 55.000) yang tidak diperkenankan" },
        jebakan: "Fiskal menilai persediaan pada harga perolehan; penyesuaian ke NRV adalah beda temporer."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 202 Persediaan (eks-PSAK 14)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-012", topik: "B7.2", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-B7-02",
      stem: "Vignette PT Sumber Pangan Niaga (2/2). HPP komersial 2025 PT Sumber Pangan Rp185.000.000 sudah termasuk penurunan nilai persediaan ke NRV Rp13.000.000, sedangkan HPP fiskal Rp172.000.000. Persediaan akhir tersebut terjual seluruhnya pada Februari 2026. Peredaran bruto perusahaan Rp60 miliar (tidak berhak Pasal 31E). Perlakuan rekonsiliasi dan pajak tangguhan yang tepat untuk 2025 dan 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "2025: koreksi positif Rp13.000.000 dan aset pajak tangguhan Rp3.250.000; 2026: koreksi negatif Rp13.000.000",
        B: "2025: koreksi positif Rp13.000.000 sebagai beda tetap tanpa pajak tangguhan; 2026: tidak ada koreksi",
        C: "2025: koreksi negatif Rp13.000.000 dan liabilitas pajak tangguhan Rp2.860.000; 2026: koreksi positif Rp13.000.000",
        D: "2025: koreksi positif Rp13.000.000 dan aset pajak tangguhan Rp2.860.000; 2026: koreksi negatif Rp13.000.000 dan aset pajak tangguhan dipulihkan"
      },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penurunan nilai persediaan baru menjadi biaya fiskal ketika persediaan dijual pada 2026 (melalui HPP fiskal yang memakai harga perolehan). Karena itu 2025 koreksi positif dan timbul beda temporer dapat dikurangkan → aset pajak tangguhan 22% × Rp13.000.000 = Rp2.860.000; 2026 koreksi negatif dan aset pajak tangguhan dipulihkan (Dr Beban pajak tangguhan / Cr Aset pajak tangguhan).",
        jejakHitung: [["Penurunan nilai 2025 (belum diakui fiskal)", "Rp13.000.000"], ["Aset pajak tangguhan = 22% × 13.000.000", "Rp2.860.000"], ["2026: persediaan terjual", "koreksi negatif Rp13.000.000"]],
        mengapaSalah: { A: "Memakai tarif 25% (TP 2019 dan sebelumnya)", B: "Penurunan nilai berbalik saat persediaan dijual — beda temporer, bukan tetap", C: "Arah salah: biaya komersial lebih besar → koreksi positif dan aset pajak tangguhan" },
        jebakan: "Uji 'apakah berbalik?' memisahkan beda temporer dari beda tetap."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-013", topik: "B7.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Kargo Lintas Samudra (perusahaan ekspedisi, tahun buku kalender, pembukuan akrual) pada 2025 membayar: premi asuransi kebakaran gudang Rp72.000.000 untuk periode 1 Oktober 2025–30 September 2027; dan premi asuransi kendaraan operasional Rp18.000.000 untuk periode 1 Juli 2025–30 Juni 2027. Bagian akuntansi membebankan seluruh pembayaran Rp90.000.000 sebagai beban asuransi 2025 tanpa jurnal penyesuaian. Koreksi fiskal yang diperlukan dalam rekonsiliasi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp76.500.000", B: "Tidak ada koreksi, karena premi telah dibayar pada 2025", C: "Koreksi positif Rp13.500.000", D: "Koreksi positif Rp63.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengeluaran bermanfaat lebih dari setahun dibebankan sesuai masa manfaat (Pasal 9 ayat (2)): asuransi gudang 72.000.000 × 3/24 = Rp9.000.000; asuransi kendaraan 18.000.000 × 6/24 = Rp4.500.000. Biaya fiskal 2025 Rp13.500.000; koreksi positif = 90.000.000 − 13.500.000 = Rp76.500.000.",
        jejakHitung: [["Asuransi gudang = 72.000.000 × 3/24", "Rp9.000.000"], ["Asuransi kendaraan = 18.000.000 × 6/24", "Rp4.500.000"], ["Biaya fiskal 2025", "Rp13.500.000"], ["Koreksi positif = 90.000.000 − 13.500.000", "Rp76.500.000"]],
        mengapaSalah: { B: "Fiskal tidak memakai basis kas untuk pengeluaran bermanfaat > 1 tahun", C: "Rp13,5 juta adalah biaya yang boleh dibebankan, bukan besarnya koreksi", D: "Masa manfaat keliru dianggap 12 bulan (72 × 3/12 + 18 × 6/12 = Rp27 juta)" },
        jebakan: "Hitung dulu biaya yang boleh, lalu koreksi = beban komersial − biaya fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 28 ayat (5) UU KUP (stelsel akrual taat asas)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-014", topik: "B7.2", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Pada Januari 2026 PT Cahaya Retail Nusantara memutuskan menghapus piutang dagang PT Toko Makmur Rp230.000.000 karena debitur sudah berhenti beroperasi. Bagian pajak menyiapkan dokumen agar penghapusan dapat dibiayakan dalam SPT Tahunan 2026. Menurut Pasal 6 ayat (1) huruf h UU PPh dan PMK 207/PMK.010/2015, berikut ini yang bukan merupakan syarat yang harus dipenuhi PT Cahaya adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Piutang telah dibebankan sebagai biaya dalam laporan laba rugi komersial",
        B: "Daftar piutang yang tidak dapat ditagih diserahkan kepada DJP sebagai lampiran SPT",
        C: "Perkara penagihan telah diserahkan ke Pengadilan Negeri atau instansi pengurus piutang negara, atau ada perjanjian tertulis, publikasi, atau pengakuan debitur",
        D: "Telah ada putusan pengadilan berkekuatan hukum tetap yang menyatakan debitur pailit"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "salah-baca" },
      pembahasan: {
        inti: "Undang-undang cukup mensyaratkan perkara penagihan telah diserahkan ke PN/instansi pengurus piutang negara (atau alternatif perjanjian tertulis, publikasi, pengakuan debitur); tidak perlu menunggu putusan pailit berkekuatan hukum tetap.",
        jejakHitung: [],
        mengapaSalah: { A: "Syarat angka (1) Pasal 6 ayat (1) huruf h", B: "Syarat angka (2)", C: "Syarat angka (3) dengan alternatifnya" },
        jebakan: "'Diserahkan perkaranya' tidak sama dengan 'sudah diputus pengadilan'."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 207/PMK.010/2015" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-015", topik: "B7.2", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Dirgantara Komponen (manufaktur, peredaran bruto Rp120 miliar) pada 2025 membentuk penyisihan piutang Rp60.000.000 atas piutang PT Lestari; dalam rekonsiliasi 2025 penyisihan tersebut dikoreksi positif dan diakui aset pajak tangguhan. Pada Mei 2026 piutang PT Lestari Rp60.000.000 dihapus dengan mendebit akun penyisihan; perjanjian tertulis pembebasan utang ditandatangani kedua pihak dan piutang dicantumkan dalam daftar piutang. Tidak ada penyisihan baru pada 2026. Dampak pada rekonsiliasi fiskal dan pajak tangguhan 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi negatif Rp60.000.000; aset pajak tangguhan Rp13.200.000 dipulihkan (Dr Beban pajak tangguhan, Cr Aset pajak tangguhan)",
        B: "Tidak ada koreksi karena beban sudah diakui secara komersial pada 2025",
        C: "Koreksi positif Rp60.000.000 karena penghapusan didebit ke akun penyisihan",
        D: "Koreksi negatif Rp60.000.000; aset pajak tangguhan bertambah Rp13.200.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penghapusan yang memenuhi syarat menjadi biaya fiskal 2026 sebesar Rp60.000.000 walaupun tidak ada beban komersial 2026 → koreksi negatif. Beda temporer 2025 berbalik sehingga aset pajak tangguhan 22% × 60.000.000 = Rp13.200.000 dipulihkan sebagai beban pajak tangguhan.",
        jejakHitung: [["Biaya fiskal 2026 (penghapusan memenuhi syarat)", "Rp60.000.000"], ["Biaya komersial 2026", "Rp0"], ["Koreksi negatif", "Rp60.000.000"], ["Pemulihan aset pajak tangguhan = 22% × 60.000.000", "Rp13.200.000"]],
        mengapaSalah: { B: "Beban 2025 sudah dikoreksi positif; biaya fiskalnya baru diakui saat penghapusan 2026", C: "Penghapusan yang memenuhi syarat adalah pengurang, bukan penambah", D: "Pembalikan beda temporer mengurangi, bukan menambah aset pajak tangguhan" },
        jebakan: "Ikuti siklus beda temporer: muncul (koreksi positif + DTA), lalu berbalik (koreksi negatif + DTA berkurang)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    /* ---------- B7.3 Aset tetap, tak berwujud, revaluasi, sewa ---------- */
    {
      id: "B7-016", topik: "B7.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-03",
      stem: "Vignette PT Karya Mandiri Teknik (1/3). PT Karya Mandiri (peredaran bruto Rp85 miliar) membeli mesin bubut CNC seharga Rp480.000.000 dan langsung memakainya pada 1 April 2025. Mesin termasuk Kelompok 2 menurut Lampiran PMK 72/2023, dan untuk fiskal perusahaan memilih metode saldo menurun secara taat asas. Secara komersial mesin disusutkan garis lurus 10 tahun tanpa nilai sisa. Koreksi fiskal atas penyusutan mesin ini pada rekonsiliasi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi negatif Rp84.000.000", B: "Koreksi positif Rp54.000.000", C: "Koreksi negatif Rp54.000.000", D: "Koreksi negatif Rp9.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Penyusutan fiskal saldo menurun Kelompok 2 (25%) dimulai bulan pengeluaran: 480.000.000 × 25% × 9/12 = Rp90.000.000. Komersial: 480.000.000/10 × 9/12 = Rp36.000.000. Biaya fiskal lebih besar → koreksi negatif Rp54.000.000.",
        jejakHitung: [["Fiskal = 480.000.000 × 25% × 9/12", "Rp90.000.000"], ["Komersial = 480.000.000 / 10 × 9/12", "Rp36.000.000"], ["Koreksi negatif = 90.000.000 − 36.000.000", "Rp54.000.000"]],
        mengapaSalah: { A: "Penyusutan fiskal dihitung setahun penuh (Rp120.000.000) tanpa pro rata 9 bulan", B: "Arah terbalik: biaya fiskal > komersial mengurangi laba fiskal", D: "Memakai garis lurus 12,5% (Rp45.000.000) padahal WP memilih saldo menurun" },
        jebakan: "Pro rata bulan berlaku untuk tahun pertama baik garis lurus maupun saldo menurun."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2), (3), dan (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-017", topik: "B7.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-B7-03",
      stem: "Vignette PT Karya Mandiri Teknik (2/3). Atas mesin CNC Rp480.000.000 (fiskal saldo menurun Kelompok 2, komersial garis lurus 10 tahun, dipakai 1 April 2025), penyusutan fiskal 2025 Rp90.000.000 dan komersial Rp36.000.000. Tidak ada beda temporer lain dan tidak ada saldo pajak tangguhan awal; peredaran bruto Rp85 miliar sehingga tarif 22% penuh. Pengakuan pajak tangguhan pada laporan keuangan 2025 yang tepat menurut PSAK 212 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Aset pajak tangguhan Rp11.880.000; Cr Manfaat pajak tangguhan Rp11.880.000",
        B: "Dr Beban pajak tangguhan Rp11.880.000; Cr Liabilitas pajak tangguhan Rp11.880.000",
        C: "Dr Beban pajak tangguhan Rp18.480.000; Cr Liabilitas pajak tangguhan Rp18.480.000",
        D: "Dr Beban pajak tangguhan Rp13.500.000; Cr Liabilitas pajak tangguhan Rp13.500.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Jumlah tercatat komersial Rp444.000.000 lebih besar dari dasar pengenaan pajak Rp390.000.000 → beda temporer kena pajak Rp54.000.000 (pajak lebih besar di masa depan). Liabilitas pajak tangguhan = 22% × 54.000.000 = Rp11.880.000.",
        jejakHitung: [["Jumlah tercatat = 480.000.000 − 36.000.000", "Rp444.000.000"], ["Dasar pengenaan pajak = 480.000.000 − 90.000.000", "Rp390.000.000"], ["Beda temporer kena pajak", "Rp54.000.000"], ["Liabilitas pajak tangguhan = 22% × 54.000.000", "Rp11.880.000"]],
        mengapaSalah: { A: "Penyusutan fiskal lebih cepat menimbulkan liabilitas, bukan aset", C: "Penyusutan fiskal dihitung setahun penuh (Rp120.000.000) sementara komersial pro rata, sehingga selisih menjadi Rp84.000.000 dan 22% × 84.000.000 = Rp18.480.000", D: "Memakai tarif 25% yang berlaku s.d. Tahun Pajak 2019" },
        jebakan: "Fiskal 'mendahulukan' biaya = pajak 'tertunda' = liabilitas pajak tangguhan."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-018", topik: "B7.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-B7-03",
      stem: "Vignette PT Karya Mandiri Teknik (3/3). Mesin CNC (harga perolehan Rp480.000.000, dipakai 1 April 2025; fiskal saldo menurun Kelompok 2; komersial garis lurus 10 tahun) dijual tunai Rp400.000.000 pada 31 Desember 2026 setelah penyusutan tahun 2026 dibukukan penuh. Penyusutan fiskal 2025 Rp90.000.000. Keuntungan pengalihan harta yang diakui dalam penghitungan penghasilan neto fiskal 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp107.500.000", B: "Rp4.000.000", C: "Rp10.000.000", D: "Rp25.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Nilai sisa buku fiskal awal 2026 Rp390.000.000; penyusutan fiskal 2026 = 25% × 390.000.000 = Rp97.500.000; nilai sisa buku fiskal Rp292.500.000. Keuntungan fiskal = 400.000.000 − 292.500.000 = Rp107.500.000 (Pasal 11 ayat (8)). Secara komersial nilai buku Rp396.000.000 sehingga laba Rp4.000.000; selisihnya merupakan pembalikan beda temporer.",
        jejakHitung: [["NSB fiskal awal 2026 = 480.000.000 − 90.000.000", "Rp390.000.000"], ["Penyusutan fiskal 2026 = 25% × 390.000.000", "Rp97.500.000"], ["NSB fiskal 31 Des 2026", "Rp292.500.000"], ["Keuntungan fiskal = 400.000.000 − 292.500.000", "Rp107.500.000"], ["Pembanding komersial: 400.000.000 − 396.000.000", "Rp4.000.000"]],
        mengapaSalah: { B: "Memakai nilai buku komersial (480 − 36 − 48 = Rp396 juta)", C: "Lupa penyusutan fiskal 2026 (400 − 390)", D: "Memakai garis lurus fiskal 12,5% (NSB Rp375 juta)" },
        jebakan: "Laba pengalihan fiskal selalu dihitung dari nilai sisa buku fiskal, bukan nilai buku komersial."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-019",
      topik: "B7.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Graha Properti Logistik (peredaran bruto Rp210 miliar) menyelesaikan pembangunan gedung kantor permanen pada 10 Juli 2025 dengan biaya Rp6.000.000.000 dan langsung memakainya. Dalam pembukuan komersial gedung disusutkan garis lurus 40 tahun, dan perusahaan memilih secara taat asas memakai masa manfaat yang sama untuk fiskal sebagaimana dimungkinkan sejak UU HPP. Penyusutan fiskal gedung Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp300.000.000", B: "Rp150.000.000", C: "Rp62.500.000", D: "Rp75.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Bangunan permanen boleh disusutkan sesuai masa manfaat sebenarnya menurut pembukuan bila lebih dari 20 tahun, garis lurus: 1/40 = 2,5% per tahun. Bangunan dalam pengerjaan mulai disusutkan pada bulan selesainya (Juli) → 6 bulan: 6.000.000.000 × 2,5% × 6/12 = Rp75.000.000.",
        jejakHitung: [
          ["Tarif = 1/40", "2,5% per tahun"],
          ["Bulan Juli–Desember", "6 bulan"],
          ["6.000.000.000 × 2,5% × 6/12", "Rp75.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai 10% (bangunan tidak permanen 10 tahun)",
          B: "Memakai 20 tahun (5%) padahal WP memilih masa manfaat sebenarnya",
          C: "Mulai disusutkan Agustus (5 bulan), padahal mulai bulan selesai pengerjaan"
        },
        jebakan: "Pilihan masa manfaat bangunan > 20 tahun harus taat asas antara komersial dan fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (3), (6), dan (6a) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-020", topik: "B7.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "PMK 79/PMK.03/2008 (pelaksanaan Pasal 19 UU PPh): atas selisih lebih penilaian kembali aktiva tetap perusahaan di atas sisa nilai buku fiskal semula dikenai Pajak Penghasilan yang bersifat final sebesar 10%. Penilaian kembali dilakukan berdasarkan nilai pasar atau nilai wajar yang ditetapkan oleh perusahaan jasa penilai atau ahli penilai yang memperoleh izin Pemerintah.",
      stem: "PT Delta Agro Industri (WP badan dalam negeri yang telah memenuhi seluruh kewajiban pajaknya) melakukan penilaian kembali seluruh aktiva tetap berwujud selain tanah per Juni 2026. Nilai pasar menurut penilai publik Rp3.200.000.000; nilai sisa buku fiskal Rp1.900.000.000; jumlah tercatat komersial (model biaya) Rp2.100.000.000. Berdasarkan kutipan tersebut, PPh yang terutang atas penilaian kembali adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp39.000.000", B: "Rp110.000.000", C: "Rp286.000.000", D: "Rp130.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Selisih lebih = nilai pasar − nilai sisa buku fiskal = 3.200.000.000 − 1.900.000.000 = Rp1.300.000.000; PPh final 10% = Rp130.000.000. Penyusutan fiskal berikutnya memakai nilai revaluasi dengan masa manfaat penuh.",
        jejakHitung: [["Selisih lebih = 3.200.000.000 − 1.900.000.000", "Rp1.300.000.000"], ["Tarif PPh final", "10%"], ["PPh final revaluasi", "Rp130.000.000"]],
        mengapaSalah: { A: "Memakai tarif 3% fasilitas PMK 191/PMK.010/2015 yang hanya berlaku untuk permohonan 2015–2016", B: "Memakai jumlah tercatat komersial Rp2,1 miliar sebagai pembanding", C: "Menggabungkan selisih revaluasi dengan penghasilan tarif umum 22%" },
        jebakan: "Revaluasi fiskal dibandingkan dengan nilai sisa buku fiskal, bukan komersial."
      },
      dasarHukum: [{ pasal: "Pasal 19 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 79/PMK.03/2008" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-021",
      topik: "B7.3",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Sinar Pangan Agrotama telah melakukan penilaian kembali seluruh aktiva tetap berwujud selain tanah pada Juni 2024 (disetujui DJP); selisih lebih yang berasal dari mesin pengering (Kelompok 2, masa manfaat baru 8 tahun) Rp800.000.000 dan PPh final 10% atasnya telah dilunasi. Karena restrukturisasi lini produksi, mesin tersebut dijual kepada pihak tidak berelasi pada Agustus 2026 (bukan karena keadaan kahar, penggabungan usaha, atau penarikan karena rusak berat). Akibat perpajakan tambahan atas pengalihan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tambahan PPh final 12% (22% − 10%) × Rp800.000.000 = Rp96.000.000, disetor paling lama 15 hari setelah berakhirnya bulan pengalihan", B: "Tidak ada tambahan PPh karena selisih lebih telah dikenai PPh final 10%", C: "Tambahan PPh 22% × Rp800.000.000 = Rp176.000.000 digabung dalam PPh badan tarif umum", D: "Tambahan PPh final 15% (25% − 10%) × Rp800.000.000 = Rp120.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Aktiva yang direvaluasi lalu dialihkan sebelum berakhirnya masa manfaat baru (8 tahun untuk Kelompok 2) dikenai tambahan PPh final sebesar tarif tertinggi Pasal 17 ayat (1) huruf b dikurangi 10%, yaitu 12% × Rp800.000.000 = Rp96.000.000.",
        jejakHitung: [
          ["Tarif tambahan = 22% − 10%", "12%"],
          ["Tambahan PPh = 12% × 800.000.000", "Rp96.000.000"]
        ],
        mengapaSalah: {
          B: "Fasilitas 10% bersyarat aktiva tidak dialihkan sebelum masa manfaat baru berakhir",
          C: "Tambahan PPh bersifat final dengan tarif selisih, bukan 22% penuh",
          D: "Memakai tarif badan lama 25%"
        },
        jebakan: "Revaluasi 10% adalah 'diskon bersyarat'; menjual terlalu cepat menagih selisihnya."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) huruf b dan Pasal 8 ayat (1) huruf a dan ayat (2) PMK 79/PMK.03/2008", berlakuSejak: "2008-05-23" }, { pasal: "Pasal 67 ayat (1) dan (2) PER-8/PJ/2025 (dilunasi paling lama 15 hari setelah akhir bulan pengalihan; mencabut PER-12/PJ/2009)", berlakuSejak: "2025-05-21" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh (tarif badan 22%)", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-022", topik: "B7.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Cahaya Distribusi (lessee) pada 1 Januari 2026 menandatangani sewa guna usaha truk dengan PT Andalan Finance (perusahaan pembiayaan) selama 3 tahun dengan hak opsi membeli pada akhir masa sewa; perjanjian memenuhi kriteria sewa guna usaha dengan hak opsi menurut KMK 1169/KMK.01/1991. Angsuran sewa Rp120.000.000 per tahun (pokok dan bunga). Menurut PSAK 116, pada 2026 perusahaan membukukan penyusutan aset hak-guna Rp100.000.000 dan beban bunga liabilitas sewa Rp30.000.000. Koreksi fiskal 2026 dan kewajiban pemotongan PPh atas angsuran adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp130.000.000; angsuran tidak dipotong PPh 23",
        B: "Tidak ada koreksi; angsuran dipotong PPh 23 2% sebagai sewa harta",
        C: "Koreksi positif Rp10.000.000; angsuran tidak dipotong PPh 23",
        D: "Koreksi negatif Rp20.000.000; angsuran dipotong PPh 23 2%"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Fiskal mengikuti KMK 1169/1991: lessee tidak menyusutkan, seluruh angsuran (pokok dan bunga) Rp120.000.000 dibiayakan. Beban komersial PSAK 116 = 100.000.000 + 30.000.000 = Rp130.000.000 → koreksi positif Rp10.000.000 (beda temporer). Sewa guna usaha dengan hak opsi dikecualikan dari pemotongan PPh 23 (Pasal 23 ayat (4) huruf b).",
        jejakHitung: [["Beban komersial = 100.000.000 + 30.000.000", "Rp130.000.000"], ["Biaya fiskal = angsuran SGU", "Rp120.000.000"], ["Koreksi positif = 130.000.000 − 120.000.000", "Rp10.000.000"]],
        mengapaSalah: { A: "Seluruh beban dikoreksi tanpa mengurangkan angsuran SGU yang boleh dibiayakan", B: "Fiskal tidak mengikuti PSAK 116; dan SGU hak opsi tidak dipotong PPh 23", D: "Hanya membandingkan angsuran dengan penyusutan (120 − 100), melupakan beban bunga; dan salah soal PPh 23" },
        jebakan: "PSAK 116 mengubah pembukuan, tidak mengubah KMK 1169/1991."
      },
      dasarHukum: [{ pasal: "KMK 1169/KMK.01/1991" }, { pasal: "Pasal 23 ayat (4) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 116 Sewa (eks-PSAK 73)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-023", topik: "B7.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Inti Data Solusi (peredaran bruto Rp64 miliar) membeli lisensi perangkat lunak ERP (harta tak berwujud) seharga Rp200.000.000 pada 1 Januari 2026; masa manfaat ekonomisnya 5 tahun. Karena tidak ada kelompok bermasa manfaat 5 tahun, untuk fiskal perusahaan memakai kelompok dengan masa manfaat terdekat, yaitu Kelompok 1 (4 tahun) menurut Pasal 11A ayat (2) dan penjelasannya, dengan metode garis lurus. Secara komersial lisensi diamortisasi garis lurus 5 tahun sesuai PSAK 238 (eks-PSAK 19). Koreksi fiskal atas amortisasi 2026 dan dampak pajak tangguhannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp10.000.000; aset pajak tangguhan Rp2.200.000",
        B: "Koreksi negatif Rp10.000.000; liabilitas pajak tangguhan Rp2.200.000",
        C: "Koreksi negatif Rp60.000.000; liabilitas pajak tangguhan Rp13.200.000",
        D: "Tidak ada koreksi karena harta tak berwujud mengikuti masa manfaat komersial"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Amortisasi fiskal Kelompok 1 garis lurus 25% × 200.000.000 = Rp50.000.000; komersial 200.000.000/5 = Rp40.000.000. Fiskal lebih besar → koreksi negatif Rp10.000.000 dan liabilitas pajak tangguhan 22% × 10.000.000 = Rp2.200.000.",
        jejakHitung: [["Fiskal = 25% × 200.000.000", "Rp50.000.000"], ["Komersial = 200.000.000 / 5", "Rp40.000.000"], ["Koreksi negatif", "Rp10.000.000"], ["Liabilitas pajak tangguhan = 22% × 10.000.000", "Rp2.200.000"]],
        mengapaSalah: { A: "Arah terbalik", C: "Memakai saldo menurun 50% padahal dipilih garis lurus", D: "Pasal 11A menetapkan kelompok masa manfaat fiskal sendiri" },
        jebakan: "Amortisasi tunduk pada tabel kelompok yang sama dengan penyusutan."
      },
      dasarHukum: [{ pasal: "Pasal 11A ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-024", topik: "B7.3", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Bumi Sentosa Logistik telah memperoleh persetujuan dan menerapkan penilaian kembali aktiva tetap untuk tujuan perpajakan per 30 September 2024. Karena harga properti di kawasan industri naik tajam, direksi ingin melakukan revaluasi berikutnya. Menurut ketentuan perpajakan, penilaian kembali aktiva tetap berikutnya paling cepat dapat dilakukan ...",
      kataKualifikasi: ["paling cepat"],
      opsi: {
        A: "Setelah lewat 10 tahun, sama dengan batas pengalihan tanah dan bangunan hasil revaluasi",
        B: "Setelah lewat 1 tahun sejak penilaian kembali terakhir, asalkan tahun buku berganti",
        C: "Kapan saja, asalkan memakai penilai publik yang berbeda",
        D: "Setelah lewat 5 tahun sejak penilaian kembali terakhir"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Penilaian kembali aktiva tetap untuk tujuan perpajakan tidak dapat dilakukan kembali sebelum lewat 5 tahun sejak penilaian kembali terakhir (PMK 79/2008, ditegaskan PMK 191/PMK.010/2015).",
        jejakHitung: [],
        mengapaSalah: { A: "10 tahun adalah batas pengalihan tanah/bangunan agar tidak terkena tambahan PPh, bukan jeda revaluasi", B: "Tidak ada ketentuan jeda 1 tahun", C: "Pergantian penilai tidak menghapus jeda 5 tahun" },
        jebakan: "Bedakan angka 5 tahun (jeda revaluasi) dan 10 tahun (tanah/bangunan hasil revaluasi)."
      },
      dasarHukum: [{ pasal: "PMK 79/PMK.03/2008" }, { pasal: "PMK 191/PMK.010/2015" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    /* ---------- B7.4 Pendapatan, biaya, selisih kurs, imbalan kerja, ekuitas ---------- */
    {
      id: "B7-025", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "PP 94/2010 Pasal 9 ayat (1): Keuntungan atau kerugian selisih kurs mata uang asing diakui sebagai penghasilan atau biaya berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan Standar Akuntansi Keuangan yang berlaku di Indonesia.",
      stem: "PT Eksporindo Furnitur (pembukuan Rupiah) pada 10 Desember 2025 mencatat piutang ekspor USD50.000 dengan kurs Rp15.800 dan pada 15 Desember 2025 utang impor bahan USD30.000 dengan kurs Rp15.900. Keduanya belum dilunasi pada 31 Desember 2025. Kurs penutup yang dipakai sesuai SAK (kurs tengah Bank Indonesia) pada 31 Desember 2025 Rp16.200, sedangkan kurs KMK yang berlaku minggu itu Rp16.150. Berdasarkan kutipan tersebut, selisih kurs neto yang diakui dalam penghitungan penghasilan neto fiskal 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keuntungan Rp11.000.000", B: "Keuntungan Rp20.000.000", C: "Nihil, karena selisih kurs belum direalisasi", D: "Keuntungan Rp10.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Selisih kurs diakui mengikuti pembukuan sesuai SAK yang taat asas, termasuk penjabaran pos moneter pada kurs penutup: keuntungan piutang Rp20.000.000 dikurangi kerugian utang Rp9.000.000 = keuntungan neto Rp11.000.000; tidak ada koreksi fiskal.",
        jejakHitung: [["Piutang: 50.000 × (16.200 − 15.800)", "keuntungan Rp20.000.000"], ["Utang: 30.000 × (16.200 − 15.900)", "kerugian Rp9.000.000"], ["Neto", "keuntungan Rp11.000.000"]],
        mengapaSalah: { B: "Hanya mengakui keuntungan; kerugian selisih kurs juga diakui (Pasal 6 ayat (1) huruf e)", C: "PP 94/2010 Pasal 9 tidak mensyaratkan realisasi", D: "Memakai kurs KMK (17.500.000 − 7.500.000) — kurs pajak untuk menghitung pajak, bukan untuk menjabarkan saldo pembukuan" },
        jebakan: "Kurs KMK untuk pajak terutang; kurs SAK untuk saldo pembukuan."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-026", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sinar Tekstil Abadi (peredaran bruto Rp140 miliar) belum mendanakan program pensiunnya ke dana pensiun. Berdasarkan laporan aktuaria PSAK 219, beban imbalan pasca-kerja 2025 yang diakui di laba rugi Rp320.000.000. Selama 2025 perusahaan membayar langsung manfaat pensiun dan pesangon kepada pegawai yang berhenti Rp85.000.000 yang didebit ke liabilitas imbalan kerja (PPh 21 atas pembayaran telah dipotong). Koreksi fiskal 2025 atas pos imbalan kerja adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp320.000.000", B: "Koreksi positif Rp235.000.000", C: "Tidak ada koreksi karena beban dihitung aktuaris sesuai PSAK", D: "Koreksi negatif Rp85.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pencadangan imbalan kerja tidak dapat dikurangkan (Pasal 9 ayat (1) huruf c); biaya fiskal adalah pembayaran nyata Rp85.000.000. Koreksi positif = 320.000.000 − 85.000.000 = Rp235.000.000 — beda temporer yang menimbulkan aset pajak tangguhan Rp51.700.000.",
        jejakHitung: [["Beban komersial", "Rp320.000.000"], ["Biaya fiskal = pembayaran", "Rp85.000.000"], ["Koreksi positif", "Rp235.000.000"], ["Aset pajak tangguhan = 22% × 235.000.000", "Rp51.700.000"]],
        mengapaSalah: { A: "Pembayaran nyata kepada pegawai Rp85 juta adalah biaya fiskal yang harus diperhitungkan", C: "Fiskal tidak mengakui pencadangan", D: "Arah dan jumlah keliru: hanya pembayarannya yang dilihat" },
        jebakan: "Pembayaran yang didebit ke liabilitas tidak tampak di laba rugi, tetapi tetap biaya fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 219 Imbalan Kerja (eks-PSAK 24)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-027", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Solusi Digital Prima (PKP) pada 1 Juli 2025 menjual paket lisensi perangkat lunak (hak pakai) beserta layanan pemeliharaan 24 bulan kepada PT Retail Mandiri (bukan pemungut PPN) seharga Rp600.000.000 belum termasuk PPN, dibayar lunas pada tanggal tersebut. Sesuai PSAK 115 harga dialokasikan: lisensi Rp360.000.000 (diakui saat diserahkan 1 Juli 2025) dan pemeliharaan Rp240.000.000 (diakui merata selama 24 bulan). Pembukuan memakai stelsel akrual secara taat asas. PPN yang terutang dan penghasilan yang diakui untuk PPh Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPN Rp72.000.000 terutang pada Masa Juli 2025; penghasilan PPh 2025 Rp420.000.000",
        B: "PPN Rp46.200.000 mengikuti pengakuan pendapatan 2025; penghasilan PPh 2025 Rp420.000.000",
        C: "PPN Rp66.000.000 terutang pada Masa Juli 2025; penghasilan PPh 2025 Rp600.000.000 (seluruh kas diterima)",
        D: "PPN Rp66.000.000 terutang pada Masa Juli 2025; penghasilan PPh 2025 Rp420.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN terutang saat pembayaran diterima bila pembayaran mendahului penyerahan: 12% × 11/12 × 600.000.000 = Rp66.000.000 pada Masa Juli 2025. PPh mengikuti pembukuan akrual: lisensi Rp360.000.000 + pemeliharaan 6/24 × 240.000.000 = Rp60.000.000 → Rp420.000.000; sisa Rp180.000.000 menjadi liabilitas kontrak dan penghasilan 2026–2027.",
        jejakHitung: [["PPN = 12% × 11/12 × 600.000.000", "Rp66.000.000"], ["Pendapatan lisensi 2025", "Rp360.000.000"], ["Pemeliharaan 2025 = 240.000.000 × 6/24", "Rp60.000.000"], ["Penghasilan PPh 2025", "Rp420.000.000"]],
        mengapaSalah: { A: "PPN 12% × harga penuh tanpa DPP nilai lain 11/12", B: "Saat terutang PPN tidak mengikuti pengakuan pendapatan PSAK 115, melainkan pembayaran/penyerahan mana yang lebih dulu", C: "Fiskal mengikuti akrual taat asas; penerimaan di muka bukan penghasilan seluruhnya" },
        jebakan: "Dua rezim, dua saat: PPN pada pembayaran/penyerahan, PPh pada pengakuan akrual."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 Pasal 3", berlakuSejak: "2025-01-01" }, { pasal: "PSAK 115 (eks-PSAK 72); PP 94/2010", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-028", topik: "B7.4", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Selama 2025 PT Garuda Kimia Nusantara: menerima setoran modal dari investor baru beserta agio saham Rp5 miliar; membagikan dividen tunai kepada pemegang saham; menerima tambahan setoran modal dari pemegang saham lama; dan memperoleh pembebasan sebagian pokok utang bank Rp1,2 miliar dalam rangka restrukturisasi kredit (tidak termasuk pembebasan utang debitur kecil yang dikecualikan). Transaksi pos kewajiban dan ekuitas berikut tidak memengaruhi penghasilan neto fiskal 2025, kecuali ...",
      kataKualifikasi: ["tidak", "kecuali"],
      opsi: { A: "Penerimaan agio saham", B: "Pembagian dividen tunai", C: "Penerimaan tambahan setoran modal", D: "Keuntungan pembebasan utang Rp1,2 miliar" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keuntungan karena pembebasan utang adalah objek PPh (Pasal 4 ayat (1) huruf k). Setoran modal dan agio saham bukan objek (Pasal 4 ayat (3) huruf c); dividen yang dibagikan tidak dapat dikurangkan (Pasal 9 ayat (1) huruf a) dan memang bukan beban laba rugi.",
        jejakHitung: [],
        mengapaSalah: { A: "Agio adalah bagian setoran modal — bukan objek", B: "Dividen dibayarkan dari laba setelah pajak dan tidak dapat dikurangkan", C: "Setoran modal bukan objek" },
        jebakan: "Pembebasan utang menambah ekuitas debitur, tetapi bagi fiskal ia penghasilan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf k dan ayat (3) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "B7-029", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Kemasan Plastik Sentosa (manufaktur; bukan bank, lembaga pembiayaan, asuransi, atau bidang infrastruktur; penghasilannya tidak seluruhnya final) pada 2025 memiliki rata-rata saldo akhir bulan utang berbunga Rp15.000.000.000 dan rata-rata saldo akhir bulan ekuitas Rp2.500.000.000; saldo akhir tahun masing-masing Rp16.000.000.000 dan Rp2.000.000.000. Seluruh pinjaman berasal dari bank pihak ketiga. Biaya pinjaman (bunga dan provisi) 2025 Rp1.200.000.000. Berapa biaya pinjaman yang harus dikoreksi positif menurut ketentuan perbandingan utang dan modal?",
      kataKualifikasi: [],
      opsi: { A: "Rp800.000.000", B: "Rp400.000.000", C: "Rp600.000.000", D: "Nihil, karena pinjaman berasal dari bank pihak ketiga" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "DER dihitung dari rata-rata saldo akhir bulan: 15.000.000.000 / 2.500.000.000 = 6:1 > 4:1. Biaya pinjaman yang boleh = 4/6 × 1.200.000.000 = Rp800.000.000; koreksi positif Rp400.000.000.",
        jejakHitung: [["DER = 15.000.000.000 / 2.500.000.000", "6 : 1"], ["Biaya boleh = 4/6 × 1.200.000.000", "Rp800.000.000"], ["Koreksi positif = 1.200.000.000 − 800.000.000", "Rp400.000.000"]],
        mengapaSalah: { A: "Rp800 juta adalah bagian yang boleh dibiayakan, bukan koreksinya", C: "Memakai saldo akhir tahun (DER 8:1 → koreksi 4/8 × 1,2 M)", D: "PMK 169/2015 menghitung seluruh utang berbunga, termasuk dari pihak ketiga" },
        jebakan: "Rata-rata saldo akhir bulan, bukan saldo akhir tahun."
      },
      dasarHukum: [{ pasal: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-030", topik: "B7.4", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Dalam rekonsiliasi fiskal Tahun Pajak 2025, PT Samudra Agro Lestari (pemberi kerja) mencatat biaya: (1) makan siang di kantin perusahaan bagi seluruh pegawai Rp240.000.000; (2) fasilitas rumah dinas non-komunal untuk para manajer Rp96.000.000. Kedua biaya berkaitan dengan kegiatan usaha, dan PPh 21 atas natura yang menjadi objek telah dipotong sesuai PMK 66/2023. Perlakuan fiskal bagi perusahaan sebagai pemberi kerja adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kedua biaya dikoreksi positif karena natura tidak dapat dibiayakan",
        B: "Kedua biaya dapat dikurangkan; tidak ada koreksi fiskal",
        C: "Hanya makan siang yang dapat dikurangkan; rumah dinas dikoreksi positif",
        D: "Hanya rumah dinas yang dapat dikurangkan; makan siang dikoreksi positif karena bukan objek PPh 21"
      },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak Tahun Pajak 2022 (UU HPP) natura dan kenikmatan yang merupakan biaya 3M dapat dibiayakan oleh pemberi kerja, terlepas dari apakah natura tersebut objek atau dikecualikan bagi penerima menurut PMK 66/2023.",
        jejakHitung: [],
        mengapaSalah: { A: "Aturan lama sebelum UU HPP", C: "Status objek bagi penerima tidak menentukan deductibility bagi pemberi kerja", D: "Prinsip taxable–deductible tidak lagi mensyaratkan natura menjadi objek bagi penerima" },
        jebakan: "Pertanyaan tentang pemberi kerja (deductible), bukan penerima (objek/bukan objek)."
      },
      dasarHukum: [{ pasal: "UU 7/2021 (perubahan Pasal 4 ayat (1) huruf a dan Pasal 9 ayat (1) UU PPh); PP 55/2022", berlakuSejak: "2022-01-01" }, { pasal: "PMK 66/2023", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-031",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Laba sebelum pajak PT Wahana Kreasi Media 2025 adalah Rp3.400.000.000. Di dalamnya terdapat beban: jamuan klien Rp45.000.000, dengan daftar nominatif lengkap hanya untuk Rp30.000.000; sumbangan penanggulangan bencana nasional melalui lembaga resmi Rp20.000.000 yang memenuhi seluruh syarat PP 93/2010; sumbangan kepada panitia peringatan HUT kampung Rp5.000.000; sanksi bunga STP Rp4.000.000; dan PPh 21 pegawai yang ditanggung perusahaan (bukan tunjangan) Rp12.000.000. Total koreksi fiskal positif atas pos-pos tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000", B: "Rp44.000.000", C: "Rp54.000.000", D: "Rp24.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Koreksi positif: jamuan tanpa daftar nominatif Rp15.000.000 + sumbangan HUT kampung Rp5.000.000 (Pasal 9 ayat (1) huruf g) + sanksi Rp4.000.000 (Pasal 9 ayat (1) huruf k) = Rp24.000.000. Sumbangan bencana nasional yang memenuhi PP 93/2010 dapat dikurangkan (Pasal 6 ayat (1) huruf i). PPh 21 pegawai yang ditanggung perusahaan Rp12.000.000 merupakan penggantian dalam bentuk kenikmatan bagi pegawai (contoh I.4 Lampiran PMK 168/2023) yang dapat dibiayakan (Pasal 2 ayat (1) PMK 66/2023), sehingga tidak dikoreksi.",
        jejakHitung: [
          ["Jamuan tanpa daftar nominatif = 45.000.000 − 30.000.000", "Rp15.000.000"],
          ["Sumbangan HUT kampung", "Rp5.000.000"],
          ["Sanksi bunga STP", "Rp4.000.000"],
          ["PPh 21 ditanggung (kenikmatan pegawai)", "Rp0"],
          ["Sumbangan bencana nasional (memenuhi syarat)", "Rp0"],
          ["Total koreksi positif", "Rp24.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengoreksi PPh 21 ditanggung Rp12.000.000 menurut aturan lama (PER-16/PJ/2016); kini PPh itu kenikmatan pegawai yang dapat dibiayakan (PMK 66/2023 Pasal 2 ayat (1); contoh I.4 Lampiran PMK 168/2023)",
          B: "Ikut mengoreksi sumbangan bencana nasional Rp20.000.000 yang diperkenankan",
          C: "Mengoreksi seluruh jamuan Rp45.000.000 termasuk yang didukung daftar nominatif"
        },
        jebakan: "Satu jenis biaya bisa terbelah: sebagian deductible (ada daftar nominatif), sebagian tidak. PPh 21 yang ditanggung pemberi kerja kini bukan lagi koreksi positif."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf i UU PPh; PP 93/2010" }, { pasal: "Pasal 9 ayat (1) huruf g dan k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) PMK 66/2023 (biaya natura dan/atau kenikmatan dapat dikurangkan pemberi kerja)", berlakuSejak: "2023-07-01" }, { pasal: "Lampiran huruf B Bagian Kedua angka I.4 PMK 168/2023 (PPh 21 yang ditanggung pemberi kerja adalah penggantian dalam bentuk kenikmatan)", berlakuSejak: "2024-01-01" }, { pasal: "SE-27/PJ.22/1986 (daftar nominatif biaya entertainment)" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    /* ---------- B7.5 Organisasi nirlaba ---------- */
    {
      id: "B7-032",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B7-05",
      kutipan: "Pasal 4 ayat (3) huruf m UU PPh (parafrase): dikecualikan dari objek pajak sisa lebih yang diterima atau diperoleh badan atau lembaga nirlaba yang bergerak dalam bidang pendidikan dan/atau bidang penelitian dan pengembangan, yang telah terdaftar pada instansi yang membidanginya, yang ditanamkan kembali dalam bentuk sarana dan prasarana kegiatan pendidikan dan/atau penelitian dan pengembangan, dalam jangka waktu paling lama 4 (empat) tahun sejak diperolehnya sisa lebih tersebut.",
      stem: "Vignette Yayasan Pendidikan Cendekia Bangsa (1/2). Yayasan (terdaftar pada kementerian yang membidangi pendidikan) mengelola sekolah menengah. Data 2025: penerimaan uang sekolah Rp5.400.000.000; biaya operasional sekolah (gaji guru, listrik, pemeliharaan) Rp4.650.000.000; bunga deposito Rp120.000.000 yang telah dipotong PPh final; sumbangan alumni tanpa hubungan usaha Rp250.000.000. Berdasarkan kutipan tersebut, sisa lebih 2025 yang dapat dikecualikan dari objek pajak apabila seluruhnya ditanamkan kembali tepat waktu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.120.000.000", B: "Rp870.000.000", C: "Rp1.000.000.000", D: "Rp750.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sisa lebih dihitung dari penghasilan objek non-final dikurangi biaya 3M: 5.400.000.000 − 4.650.000.000 = Rp750.000.000. Bunga deposito sudah final (Pasal 4 ayat (2)) dan sumbangan bukan objek (Pasal 4 ayat (3) huruf a), sehingga keduanya tidak masuk sisa lebih.",
        jejakHitung: [
          ["Uang sekolah (objek non-final)", "Rp5.400.000.000"],
          ["Dikurangi biaya operasional", "Rp4.650.000.000"],
          ["Bunga deposito (final) dan sumbangan (bukan objek)", "dikeluarkan"],
          ["Sisa lebih", "Rp750.000.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan bunga deposito dan sumbangan sekaligus",
          B: "Memasukkan bunga deposito yang sudah dikenai PPh final",
          C: "Memasukkan sumbangan yang memang bukan objek"
        },
        jebakan: "Pisahkan tiga keranjang: final, bukan objek, dan objek non-final; sisa lebih hanya dari keranjang ketiga."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf a dan m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 Pasal 14 ayat (2)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 68/PMK.03/2020 Pasal 4 ayat (2)", berlakuSejak: "2020-06-16" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B7-033",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kasusId: "V-B7-05",
      stem: "Vignette Yayasan Pendidikan Cendekia Bangsa (2/2). Sisa lebih 2025 yayasan Rp750.000.000. Sampai akhir 2029 yayasan hanya menanamkan kembali Rp450.000.000 untuk membangun laboratorium sains; sisanya Rp300.000.000 dipakai membeli unit apartemen investasi atas nama yayasan dan tidak ditempatkan sebagai dana abadi. Akibat perpajakan atas sisa lebih tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak ada akibat pajak karena yayasan adalah badan nirlaba", B: "Seluruh sisa lebih Rp750.000.000 menjadi objek PPh karena syarat penanaman kembali tidak terpenuhi seluruhnya", C: "Rp300.000.000 yang tidak ditanamkan kembali dalam jangka 4 tahun menjadi objek PPh badan dengan tarif umum", D: "Rp300.000.000 dikenai PPh final 10% seperti penghasilan sewa" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pengecualian berlaku sebesar sisa lebih yang ditanamkan kembali dalam sarana-prasarana pendidikan/litbang dalam 4 tahun. Bagian yang tidak ditanamkan (Rp300.000.000, dipakai untuk investasi apartemen) menjadi objek PPh dengan tarif umum badan.",
        jejakHitung: [
          ["Sisa lebih 2025", "Rp750.000.000"],
          ["Ditanamkan kembali s.d. 2029", "Rp450.000.000"],
          ["Tidak ditanamkan → objek", "Rp300.000.000"]
        ],
        mengapaSalah: {
          A: "Status nirlaba tidak membebaskan seluruh penghasilan; pengecualian bersyarat",
          B: "Bagian yang ditanamkan kembali tetap dikecualikan",
          D: "Tidak ada tarif final untuk sisa lebih; berlaku tarif umum"
        },
        jebakan: "Investasi properti bukan sarana-prasarana pendidikan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 Pasal 14 ayat (1)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 68/PMK.03/2020 Pasal 4 ayat (1) dan Pasal 7 ayat (1)", berlakuSejak: "2020-06-16" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-034", topik: "B7.5", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Perkumpulan Peduli Anak Bangsa menerima hibah Rp500.000.000 dari yayasan donor internasional pada November 2025 dengan syarat tertulis bahwa dana hanya boleh dipakai untuk beasiswa siswa SMA tahun ajaran 2026/2027. Sampai 31 Desember 2025 dana belum digunakan. Dalam laporan posisi keuangan 31 Desember 2025 yang disusun sesuai ISAK 335 (eks-ISAK 35), dana tersebut disajikan sebagai ...",
      kataKualifikasi: [],
      opsi: { A: "Aset neto terikat temporer", B: "Aset neto dengan pembatasan dari pemberi sumber daya", C: "Pendapatan usaha yang menjadi objek PPh tahun 2025", D: "Liabilitas jangka pendek kepada donor" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "ISAK 335 mengelompokkan aset neto menjadi tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya; hibah bertujuan khusus yang belum dipakai disajikan sebagai aset neto dengan pembatasan dan direklasifikasi ketika pembatasan terpenuhi. Bagi PPh, hibah tanpa hubungan usaha bukan objek.",
        jejakHitung: [],
        mengapaSalah: { A: "Istilah PSAK 45 yang sudah diganti", C: "Hibah tanpa hubungan usaha bukan objek PPh (Pasal 4 ayat (3) huruf a)", D: "Tidak ada kewajiban mengembalikan selama syarat dipenuhi; disajikan dalam aset neto" },
        jebakan: "Istilah lama 'terikat temporer/permanen' masih muncul di bahan ajar lama."
      },
      dasarHukum: [{ pasal: "ISAK 335 Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 4 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-035",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Yayasan Pendidikan Cendekia Bangsa (badan nirlaba pendidikan terdaftar) menyewakan dua ruang kelas pada sore hari kepada PT Bimbel Juara (WP badan) seharga Rp120.000.000 untuk setahun, dibayar sekaligus pada Maret 2026; PT Bimbel Juara memotong PPh sesuai ketentuan. Perlakuan akuntansi dan perpajakan yang tepat di pembukuan yayasan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dr Kas 120.000.000; Cr Pendapatan sewa 120.000.000 — sewa bukan objek karena diterima badan nirlaba", B: "Dr Kas 108.000.000; Dr PPh dibayar di muka 12.000.000; Cr Pendapatan sewa 120.000.000 — PPh dikreditkan dalam SPT Tahunan yayasan", C: "Dr Kas 108.000.000; Dr Beban PPh final 12.000.000; Cr Pendapatan sewa 120.000.000 — penghasilan sewa dikeluarkan dari perhitungan sisa lebih dan PPh-nya tidak dapat dikreditkan", D: "Dr Kas 117.600.000; Dr PPh 23 dibayar di muka 2.400.000; Cr Pendapatan sewa 120.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sewa bangunan dikenai PPh final 10% Pasal 4 ayat (2) yang dipotong penyewa: Rp12.000.000. Bagi yayasan PPh final dicatat sebagai beban (tidak dapat dikreditkan) dan penghasilan sewa tidak ikut dalam sisa lebih yang dihitung dari penghasilan non-final.",
        jejakHitung: [
          ["PPh final = 10% × 120.000.000", "Rp12.000.000"],
          ["Kas diterima", "Rp108.000.000"]
        ],
        mengapaSalah: {
          A: "Status nirlaba tidak mengecualikan penghasilan sewa",
          B: "PPh final tidak dapat dikreditkan",
          D: "Sewa bangunan dikenai PPh final 10%, bukan PPh 23 2%"
        },
        jebakan: "Badan nirlaba tetap dipotong PPh final atas sewa bangunan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017 (sewa tanah/bangunan)", berlakuSejak: "2018-01-02" }, { pasal: "Pasal 4 ayat (3) huruf m UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-036", topik: "B7.5", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Yayasan Rumah Harapan (lembaga sosial terdaftar) pada 2025 menerima beberapa jenis dana dan meminta konsultan memisahkan mana yang menjadi objek PPh badan. Penerimaan berikut dikecualikan dari objek PPh bagi yayasan, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Sumbangan masyarakat umum yang tidak memiliki hubungan usaha, pekerjaan, kepemilikan, atau penguasaan dengan yayasan",
        B: "Hibah dari perusahaan donor yang tidak memiliki hubungan usaha, pekerjaan, kepemilikan, atau penguasaan dengan yayasan",
        C: "Imbalan jasa pelatihan berbayar yang diselenggarakan yayasan untuk karyawan sebuah bank",
        D: "Bantuan kemanusiaan dari lembaga internasional tanpa hubungan usaha dengan yayasan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bantuan, sumbangan, dan hibah tanpa hubungan usaha/pekerjaan/kepemilikan/penguasaan dikecualikan dari objek (Pasal 4 ayat (3) huruf a). Imbalan jasa pelatihan adalah penghasilan usaha yang menjadi objek PPh tarif umum.",
        jejakHitung: [],
        mengapaSalah: { A: "Memenuhi syarat Pasal 4 ayat (3) huruf a", B: "Memenuhi syarat karena tidak ada hubungan usaha/kepemilikan", D: "Memenuhi syarat Pasal 4 ayat (3) huruf a" },
        jebakan: "Yang dilihat sifat penerimaannya (imbalan jasa), bukan status penerimanya (nirlaba)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    /* ---------- B7.6 Rekonsiliasi fiskal ---------- */
    {
      id: "B7-037", topik: "B7.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-B7-04",
      stem: "Vignette PT Prima Sentosa Makmur (1/4). Data 2025 (peredaran bruto Rp72 miliar): laba sebelum pajak Rp5.000.000.000, sudah termasuk pendapatan bunga deposito Rp120.000.000 (PPh final), sewa gedung Rp300.000.000 (PPh final), dan dividen dari PT anak dalam negeri Rp250.000.000; beban penyisihan piutang Rp150.000.000; beban imbalan kerja Rp200.000.000 (dibayar kepada pegawai Rp50.000.000); penyusutan komersial Rp800.000.000 (fiskal Rp950.000.000; seluruhnya atas aset operasional, tidak termasuk gedung yang disewakan); sanksi bunga STP Rp25.000.000; sumbangan tidak memenuhi syarat Rp40.000.000; biaya pemeliharaan gedung yang disewakan Rp60.000.000. Penghasilan neto fiskal 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.605.000.000", B: "Rp4.855.000.000", C: "Rp4.305.000.000", D: "Rp4.965.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Koreksi positif Rp425.000.000 (penyisihan 150 + imbalan kerja belum dibayar 150 + sanksi 25 + sumbangan 40 + biaya gedung disewakan 60). Koreksi negatif Rp820.000.000 (bunga deposito 120 + sewa 300 + dividen 250 + selisih penyusutan 150). Penghasilan neto fiskal = 5.000 + 425 − 820 = Rp4.605.000.000.",
        jejakHitung: [["Laba komersial", "Rp5.000.000.000"], ["Koreksi positif temporer: 150 + (200 − 50) (juta)", "Rp300.000.000"], ["Koreksi positif tetap: 25 + 40 + 60 (juta)", "Rp125.000.000"], ["Koreksi negatif tetap: 120 + 300 + 250 (juta)", "Rp670.000.000"], ["Koreksi negatif temporer: 950 − 800 (juta)", "Rp150.000.000"], ["Penghasilan neto fiskal = 5.000 + 425 − 820 (juta)", "Rp4.605.000.000"]],
        mengapaSalah: { B: "Dividen dari PT dalam negeri diperlakukan sebagai objek (tidak dikoreksi negatif)", C: "Koreksi positif beda temporer (penyisihan piutang Rp150 juta dan imbalan kerja yang belum dibayar Rp150 juta) terlewat: 4.605 − 300 juta", D: "Penghasilan final tidak dikeluarkan dan biaya terkaitnya tidak dikoreksi" },
        jebakan: "Penghasilan final dikeluarkan (koreksi negatif) dan biaya untuk memperolehnya ikut dikeluarkan (koreksi positif)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) dan ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 6 dan Pasal 9 ayat (1) huruf c, g, k UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "B7-038", topik: "B7.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-B7-04",
      stem: "Vignette PT Prima Sentosa Makmur (2/4). Penghasilan neto fiskal 2025 Rp4.605.000.000; sisa rugi fiskal Tahun Pajak 2022 yang belum dikompensasikan Rp405.000.000; peredaran bruto Rp72 miliar. Kredit pajak 2025: PPh 22 impor Rp110.000.000, PPh 23 Rp64.000.000, PPh 25 Rp55.000.000 × 12 bulan. Selain itu PPh final atas bunga deposito dan sewa gedung Rp54.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000", B: "Rp179.100.000", C: "Rp90.000.000", D: "Rp216.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Rugi 2022 masih dalam jangka 5 tahun (2023–2027): PKP = 4.605.000.000 − 405.000.000 = Rp4.200.000.000. Omzet > Rp50 miliar sehingga tanpa Pasal 31E: PPh = 22% × 4.200.000.000 = Rp924.000.000. Kredit = 110 + 64 + 660 = Rp834.000.000. PPh 29 = Rp90.000.000.",
        jejakHitung: [["PKP = 4.605.000.000 − 405.000.000", "Rp4.200.000.000"], ["PPh terutang = 22% × PKP", "Rp924.000.000"], ["Kredit = 110.000.000 + 64.000.000 + 660.000.000", "Rp834.000.000"], ["PPh 29 = 924.000.000 − 834.000.000", "Rp90.000.000"]],
        mengapaSalah: { A: "Mengkreditkan PPh final Rp54 juta", B: "Tidak mengompensasikan rugi 2022 (22% × 4,605 M − 834 jt)", D: "Memakai tarif 25% (TP 2019 dan sebelumnya)" },
        jebakan: "Urutannya: neto fiskal → kompensasi rugi → PKP → tarif → kredit (tanpa PPh final)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-039", topik: "B7.6", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-B7-04",
      stem: "Vignette PT Prima Sentosa Makmur (3/4). Beda temporer 2025: penyisihan piutang Rp150.000.000 (koreksi positif), imbalan kerja belum dibayar Rp150.000.000 (koreksi positif), dan selisih penyusutan Rp150.000.000 (koreksi negatif, fiskal lebih besar). Rugi fiskal 2022 tidak pernah diakui sebagai aset pajak tangguhan; tidak ada saldo pajak tangguhan lain yang berubah. Jurnal pajak tangguhan neto 2025 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Aset pajak tangguhan Rp99.000.000; Cr Manfaat pajak tangguhan Rp99.000.000",
        B: "Dr Beban pajak tangguhan Rp33.000.000; Cr Liabilitas pajak tangguhan Rp33.000.000",
        C: "Dr Aset pajak tangguhan Rp33.000.000; Cr Manfaat pajak tangguhan Rp33.000.000",
        D: "Dr Aset pajak tangguhan Rp66.000.000; Cr Manfaat pajak tangguhan Rp66.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Beda temporer dapat dikurangkan Rp300.000.000 (aset pajak tangguhan Rp66.000.000) dan beda temporer kena pajak Rp150.000.000 (liabilitas Rp33.000.000). Neto: aset pajak tangguhan bertambah 22% × 150.000.000 = Rp33.000.000 → manfaat pajak tangguhan.",
        jejakHitung: [["Dapat dikurangkan: 150 + 150 (juta)", "Rp300.000.000 → DTA Rp66.000.000"], ["Kena pajak: penyusutan", "Rp150.000.000 → DTL Rp33.000.000"], ["Neto = 66.000.000 − 33.000.000", "DTA Rp33.000.000"]],
        mengapaSalah: { A: "Menjumlahkan semua beda temporer tanpa memperhatikan arah (22% × 450 jt)", B: "Arah terbalik: beda dapat dikurangkan lebih besar", D: "Mengabaikan liabilitas pajak tangguhan dari penyusutan" },
        jebakan: "Pajak tangguhan dihitung dari beda temporer saja, dengan memperhatikan arahnya."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-040",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B7-04",
      formulirRef: "1771.l1.7",
      stem: "Vignette PT Prima Sentosa Makmur (4/4). Dalam SPT Tahunan PPh Badan 2025 (formulir Coretax menurut PER-11/PJ/2025), staf pajak harus mencantumkan koreksi fiskal positif atas sanksi bunga STP Rp25.000.000 dan mengeluarkan dividen dari PT anak Rp250.000.000 yang tidak termasuk objek pajak. Menurut susunan lampiran SPT Tahunan PPh Badan tersebut, kedua penyesuaian itu dicantumkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 9 (daftar penyusutan dan amortisasi fiskal)", B: "Lampiran 11A (rincian biaya tertentu)", C: "Lampiran 3 (daftar PPh yang dipotong/dipungut oleh pihak lain)", D: "Lampiran rekonsiliasi laporan keuangan (Lampiran 1A sampai 1L sesuai sektor usaha): sanksi pada kolom penyesuaian fiskal positif dan dividen pada kolom tidak termasuk objek pajak; rincian dividen juga dicantumkan pada Lampiran 4" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak Tahun Pajak 2025, SPT Tahunan PPh Badan memakai formulir PER-11/PJ/2025 (formulir 1771 lama hanya sampai Tahun Pajak 2024). Koreksi fiskal disusun pada lampiran rekonsiliasi laporan keuangan (Lampiran 1A untuk sektor umum, 1B sampai 1L untuk sektor tertentu) per akun laba rugi: sanksi bunga STP pada kolom penyesuaian fiskal positif, dividen yang tidak termasuk objek pajak pada kolom tidak termasuk objek pajak. Isian kolom itu harus sama dengan Lampiran 4 Bagian B. Kredit PPh 22/23 di Lampiran 3, penyusutan fiskal di Lampiran 9.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Lampiran 9 hanya untuk daftar penyusutan dan amortisasi fiskal",
          B: "Lampiran 11A merinci biaya tertentu (promosi, natura, entertainment, piutang tak tertagih), bukan koreksi fiskal sanksi atau dividen",
          C: "Lampiran 3 untuk PPh yang dipotong/dipungut pihak lain dan kredit pajak luar negeri"
        },
        jebakan: "Nama lampiran 1771-I sampai 1771-IV tidak dipakai lagi untuk Tahun Pajak 2025; koreksi fiskal kini ada di kolom lampiran rekonsiliasi (1A sampai 1L), dan rincian penghasilan final/bukan objek di Lampiran 4."
      },
      dasarHukum: [{ pasal: "Pasal 85 ayat (1) dan Pasal 138 huruf a PER-11/PJ/2025 (bentuk dan isi SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) huruf f angka 1 huruf b) UU PPh s.t.d.t.d. UU 6/2023 (dividen dalam negeri yang diterima WP badan dalam negeri)", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B7-041", topik: "B7.6", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Dalam menyusun rekonsiliasi fiskal 2025, staf pajak PT Arta Boga Nusantara mengelompokkan koreksi menjadi beda tetap dan beda temporer agar dapat menghitung pajak tangguhan sesuai PSAK 212. Pos berikut yang merupakan beda temporer adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Sanksi bunga atas STP PPh Pasal 25", B: "Sumbangan kepada panitia perayaan hari besar yang tidak memenuhi syarat", C: "Selisih penyusutan komersial garis lurus dengan penyusutan fiskal saldo menurun", D: "Dividen dari perseroan terbatas dalam negeri" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Selisih penyusutan berbalik sepanjang umur aset (total penyusutan komersial dan fiskal sama), sehingga merupakan beda temporer. Sanksi, sumbangan nondeductible, dan dividen bukan objek tidak pernah berbalik — beda tetap.",
        jejakHitung: [],
        mengapaSalah: { A: "Sanksi tidak pernah dapat dibiayakan (beda tetap)", B: "Sumbangan tidak memenuhi syarat tidak pernah dapat dibiayakan", D: "Dividen dalam negeri bukan objek secara permanen" },
        jebakan: "Uji berbalik: apakah suatu saat fiskal akan mengakui jumlah yang sama?"
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 9 ayat (1) dan Pasal 11 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 70, verifikasi: "✅"
    },
    {
      id: "B7-042", topik: "B7.6", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Kreasi Kayu Jepara (PT biasa, bukan PT perorangan; terdaftar sejak 2015) pada 2025 memiliki peredaran bruto Rp12.000.000.000 (termasuk penghasilan bunga deposito). Laba komersial Rp1.100.000.000; koreksi fiskal positif Rp150.000.000; koreksi negatif (bunga deposito yang telah dikenai PPh final) Rp50.000.000; tidak ada sisa kerugian. PPh Badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp211.200.000", B: "Rp264.000.000", C: "Rp132.000.000", D: "Rp60.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "PKP = 1.100 + 150 − 50 = Rp1.200.000.000. Peredaran bruto Rp4,8 M < Rp12 M ≤ Rp50 M → Pasal 31E wajib: PKP fasilitas = 4,8/12 × 1.200.000.000 = Rp480.000.000 (tarif 11%), sisanya Rp720.000.000 (22%). PPh = 52.800.000 + 158.400.000 = Rp211.200.000.",
        jejakHitung: [["PKP = 1.100.000.000 + 150.000.000 − 50.000.000", "Rp1.200.000.000"], ["PKP fasilitas = 4,8 M / 12 M × 1.200.000.000", "Rp480.000.000"], ["PKP non-fasilitas", "Rp720.000.000"], ["11% × 480.000.000 + 22% × 720.000.000", "Rp52.800.000 + Rp158.400.000"], ["PPh terutang", "Rp211.200.000"]],
        mengapaSalah: { B: "Tidak menerapkan Pasal 31E yang wajib bagi omzet ≤ Rp50 miliar", C: "Seluruh PKP diberi tarif 11%, padahal hanya porsi omzet s.d. Rp4,8 miliar", D: "PPh final 0,5% tidak berlaku (omzet > Rp4,8 miliar; PT biasa bukan subjek PP 20/2026)" },
        jebakan: "Pasal 31E: porsi PKP fasilitas dihitung dari rasio Rp4,8 M terhadap seluruh peredaran bruto."
      },
      dasarHukum: [{ pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PP 20/2026", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-043", topik: "B7.6", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      kutipan: "Pasal 6 ayat (2) UU PPh: Apabila penghasilan bruto setelah pengurangan sebagaimana dimaksud pada ayat (1) didapat kerugian, kerugian tersebut dikompensasikan dengan penghasilan mulai tahun pajak berikutnya berturut-turut sampai dengan 5 (lima) tahun.",
      stem: "PT Lentera Kimia mengalami rugi fiskal Tahun Pajak 2020 sebesar Rp500.000.000 (tidak ada rugi pada tahun lain dan tidak ada fasilitas perpanjangan kompensasi). Penghasilan neto fiskal sebelum kompensasi: 2021 Rp80.000.000; 2022 Rp120.000.000; 2023 Rp90.000.000; 2024 Rp60.000.000; 2025 Rp400.000.000. Berdasarkan kutipan tersebut, PKP Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp250.000.000", B: "Rp400.000.000", C: "Nihil; sisa rugi Rp100.000.000 dibawa ke 2026", D: "Rp170.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Rugi 2020 dikompensasikan berturut-turut 2021–2025 (tahun ke-5 = 2025). Sisa rugi sesudah 2024 = 500 − 80 − 120 − 90 − 60 = Rp150.000.000; PKP 2025 = 400.000.000 − 150.000.000 = Rp250.000.000. Sisa rugi tidak ada lagi.",
        jejakHitung: [["Sisa setelah 2021 = 500 − 80 (juta)", "Rp420.000.000"], ["Setelah 2022 = 420 − 120", "Rp300.000.000"], ["Setelah 2023 = 300 − 90", "Rp210.000.000"], ["Setelah 2024 = 210 − 60", "Rp150.000.000"], ["PKP 2025 = 400 − 150", "Rp250.000.000"]],
        mengapaSalah: { B: "Menganggap rugi 2020 hanya sampai 2024; padahal tahun ke-5 adalah 2025", C: "Mengabaikan pemakaian rugi pada 2021–2024 (kompensasi wajib berturut-turut)", D: "Melewatkan kompensasi tahun 2021" },
        jebakan: "Kompensasi tidak bisa ditunda atau dipilih tahunnya; ia memotong laba setiap tahun berturut-turut."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-044",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Prima Sentosa Makmur (peredaran bruto 2025 Rp72 miliar, sehingga Pasal 31E tidak berlaku) menyampaikan SPT Tahunan PPh Badan 2025 pada 28 April 2026 dengan penghasilan neto fiskal Rp4.605.000.000, kompensasi kerugian Tahun Pajak 2022 Rp405.000.000 yang menghabiskan sisa kerugiannya (tidak ada lagi sisa kerugian yang dapat dikompensasikan pada 2026), dan PPh terutang Rp924.000.000. Kredit pajak 2025: PPh 22 impor Rp110.000.000, PPh 23 Rp64.000.000, PPh 25 Rp660.000.000; selain itu PPh final atas bunga deposito dan sewa gedung Rp54.000.000. Perusahaan bukan WP tertentu (bukan bank, BUMN/BUMD, atau emiten), tidak ada permohonan pengurangan angsuran, dan tidak ada penghasilan tidak teratur. Angsuran PPh Pasal 25 yang berlaku mulai Masa Pajak April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.925.000", B: "Rp62.500.000", C: "Rp84.425.000", D: "Rp69.925.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Karena SPT 2025 memuat kompensasi kerugian, angsuran 2026 dihitung menurut Pasal 25 ayat (6) huruf a UU PPh: PPh atas penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, dikurangi PPh 21/22/23/24 tahun lalu, lalu dibagi 12. Rugi 2022 habis dipakai pada 2025, sehingga sisanya nol dan dasarnya neto penuh Rp4.605.000.000; peredaran bruto Rp72 miliar, jadi tarif 22% tanpa Pasal 31E. PPh 25 tahun lalu tidak dikurangkan dan PPh final tidak relevan. Angsuran baru berlaku mulai bulan SPT disampaikan (28 April 2026, sehingga mulai Masa April 2026); Januari–Maret memakai angsuran Desember 2025.",
        jejakHitung: [
          ["Sisa kerugian yang masih dapat dikompensasikan pada 2026 (rugi 2022 habis pada 2025)", "Rp0"],
          ["Dasar = penghasilan neto 2025 − 0", "Rp4.605.000.000"],
          ["PPh = 22% × 4.605.000.000", "Rp1.013.100.000"],
          ["Dikurangi PPh 22 dan 23 = 1.013.100.000 − 110.000.000 − 64.000.000", "Rp839.100.000"],
          ["Angsuran = 839.100.000 ÷ 12 (berlaku mulai Masa April 2026)", "Rp69.925.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengurangkan PPh 25 yang dibayar selama 2025: (1.013.100.000 − 834.000.000) ÷ 12; PPh 25 tahun lalu tidak dikurangkan dalam rumus angsuran.",
          B: "Memakai PPh terutang setelah kompensasi: (924.000.000 − 174.000.000) ÷ 12; bila ada kompensasi kerugian, Pasal 25 ayat (6) huruf a menghitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, yang di sini nol.",
          C: "Tidak mengurangkan kredit PPh 22 dan 23 yang dipotong/dipungut pihak lain: 1.013.100.000 ÷ 12."
        },
        jebakan: "Kompensasi kerugian yang habis pada tahun lalu tidak lagi mengurangi dasar angsuran tahun berjalan, jadi PPh terutang di SPT tidak dapat langsung dipakai; PPh 25 tahun lalu juga tidak dikurangkan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1), (2), dan (6) huruf a UU PPh beserta Penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 94 ayat (2) huruf f PMK 81/2024 (setor tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 113 ayat (2) huruf a dan Pasal 114 PER-11/PJ/2025 (penghitungan angsuran dalam hal tertentu; dahulu KEP-537/PJ/2000)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    /* ---------- B7.7 Pajak tangguhan ---------- */
    {
      id: "B7-045", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Nusa Energi Terbarukan (peredaran bruto Rp75 miliar) mengalami rugi fiskal Tahun Pajak 2025 sebesar Rp800.000.000. Manajemen memiliki proyeksi laba fiskal 2026–2028 yang didukung kontrak penjualan listrik jangka panjang, sehingga besar kemungkinan rugi tersebut dapat dikompensasikan dalam 5 tahun. Tidak ada beda temporer lain. Pajak tangguhan yang diakui pada 31 Desember 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak ada, karena rugi fiskal bukan beda temporer",
        B: "Aset pajak tangguhan Rp200.000.000 (Dr Aset pajak tangguhan / Cr Manfaat pajak tangguhan)",
        C: "Aset pajak tangguhan Rp176.000.000 (Dr Aset pajak tangguhan / Cr Manfaat pajak tangguhan)",
        D: "Liabilitas pajak tangguhan Rp176.000.000 (Dr Beban pajak tangguhan / Cr Liabilitas pajak tangguhan)"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Rugi fiskal yang dapat dikompensasikan menimbulkan aset pajak tangguhan sepanjang besar kemungkinan tersedia laba fiskal: 22% × 800.000.000 = Rp176.000.000, dicatat sebagai manfaat pajak tangguhan.",
        jejakHitung: [["Rugi fiskal dapat dikompensasikan", "Rp800.000.000"], ["× 22%", "Rp176.000.000"]],
        mengapaSalah: { A: "PSAK 212 mengakui aset pajak tangguhan atas rugi fiskal yang dapat dikompensasikan", B: "Tarif 25% sudah tidak berlaku", D: "Rugi fiskal mengurangi pajak masa depan — aset, bukan liabilitas" },
        jebakan: "Syarat 'probable' menentukan diakui atau tidak; tarifnya 22%."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "B7-046", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Arunika Busana (peredaran bruto Rp90 miliar; tidak ada saldo pajak tangguhan awal) melaporkan laba sebelum pajak 2025 Rp2.000.000.000. Rekonsiliasi fiskal: koreksi positif beda tetap Rp100.000.000 (sanksi dan sumbangan nondeductible) dan koreksi positif beda temporer Rp200.000.000 (penyisihan piutang); tidak ada koreksi negatif dan tidak ada kompensasi kerugian. Aset pajak tangguhan dapat diakui penuh. Beban pajak penghasilan yang disajikan di laporan laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp506.000.000", B: "Rp462.000.000", C: "Rp440.000.000", D: "Rp550.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak kini = 22% × 2.300.000.000 = Rp506.000.000; manfaat pajak tangguhan = 22% × 200.000.000 = Rp44.000.000; beban pajak penghasilan = Rp462.000.000. Uji silang: 22% × (laba akuntansi + beda tetap) = 22% × 2.100.000.000 = Rp462.000.000.",
        jejakHitung: [["PKP = 2.000 + 100 + 200 (juta)", "Rp2.300.000.000"], ["Pajak kini = 22% × 2.300.000.000", "Rp506.000.000"], ["Manfaat pajak tangguhan = 22% × 200.000.000", "(Rp44.000.000)"], ["Beban pajak = 506.000.000 − 44.000.000", "Rp462.000.000"]],
        mengapaSalah: { A: "Hanya pajak kini; manfaat pajak tangguhan belum dikurangkan", C: "22% × laba akuntansi mengabaikan beda tetap yang menambah pajak secara permanen", D: "Manfaat pajak tangguhan justru ditambahkan" },
        jebakan: "Beban pajak total ≈ 22% × (laba akuntansi ± beda tetap); beda temporer hanya menggeser waktu."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-047", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Bahari Cold Storage (peredaran bruto Rp110 miliar) memiliki satu kelompok mesin pendingin. Pada 31 Desember 2025 jumlah tercatat komersial mesin Rp700.000.000, sedangkan nilai sisa buku fiskalnya Rp520.000.000. Saldo liabilitas pajak tangguhan atas mesin tersebut per 1 Januari 2025 Rp26.400.000; tidak ada beda temporer lain. Beban (manfaat) pajak tangguhan 2025 yang diakui di laba rugi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Beban pajak tangguhan Rp39.600.000", B: "Beban pajak tangguhan Rp13.200.000", C: "Manfaat pajak tangguhan Rp13.200.000", D: "Beban pajak tangguhan Rp18.600.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Beda temporer kena pajak akhir = 700.000.000 − 520.000.000 = Rp180.000.000; saldo liabilitas pajak tangguhan akhir = 22% × 180.000.000 = Rp39.600.000. Beban pajak tangguhan = perubahan saldo = 39.600.000 − 26.400.000 = Rp13.200.000.",
        jejakHitung: [["Beda temporer = 700.000.000 − 520.000.000", "Rp180.000.000"], ["Saldo LPT akhir = 22% × 180.000.000", "Rp39.600.000"], ["Saldo LPT awal", "Rp26.400.000"], ["Beban pajak tangguhan", "Rp13.200.000"]],
        mengapaSalah: { A: "Saldo akhir dicatat seluruhnya sebagai beban tahun berjalan", C: "Liabilitas naik → beban, bukan manfaat", D: "Saldo akhir dihitung dengan tarif 25% (Rp45.000.000)" },
        jebakan: "Pendekatan neraca: beban = saldo akhir − saldo awal."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-048", topik: "B7.7", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Kepala akuntansi PT Lintas Nusantara Kargo menyiapkan kebijakan akuntansi pajak penghasilan untuk laporan keuangan 2026 yang akan diaudit. Pernyataan berikut sesuai PSAK 212 (eks-PSAK 46), kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Aset pajak tangguhan diakui atas rugi fiskal sepanjang besar kemungkinan tersedia laba fiskal untuk memanfaatkannya",
        B: "Aset dan liabilitas pajak tangguhan diukur dengan tarif yang diperkirakan berlaku saat aset dipulihkan atau liabilitas diselesaikan",
        C: "Aset pajak tangguhan didiskontokan ke nilai kini karena pemulihannya baru terjadi beberapa tahun mendatang",
        D: "Aset dan liabilitas pajak tangguhan saling hapus bila ada hak legal dan berkaitan dengan otoritas perpajakan yang sama"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "PSAK 212 melarang pendiskontoan aset dan liabilitas pajak tangguhan. Pernyataan A, B, dan D sesuai standar.",
        jejakHitung: [],
        mengapaSalah: { A: "Sesuai syarat pengakuan aset pajak tangguhan", B: "Sesuai ketentuan pengukuran", D: "Sesuai ketentuan saling hapus" },
        jebakan: "Soal 'kecuali': yang dicari pernyataan yang tidak sesuai."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan (pengukuran dan penyajian)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    {
      id: "B7-049", topik: "B7.7", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Sentra Medika Farma (peredaran bruto Rp95 miliar) dalam rekonsiliasi 2025 mempunyai: koreksi positif sanksi bunga STP Rp50.000.000; koreksi negatif dividen dari PT dalam negeri Rp100.000.000; dan koreksi positif penyusutan karena penyusutan komersial lebih besar dari fiskal Rp80.000.000. Tidak ada beda lain. Dampak pajak tangguhan 2025 yang benar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Aset pajak tangguhan bertambah Rp17.600.000", B: "Aset pajak tangguhan bertambah Rp28.600.000", C: "Liabilitas pajak tangguhan bertambah Rp17.600.000", D: "Aset pajak tangguhan bertambah Rp6.600.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Hanya selisih penyusutan yang temporer: penyusutan komersial lebih besar → biaya fiskal di masa depan lebih besar → aset pajak tangguhan 22% × 80.000.000 = Rp17.600.000. Sanksi dan dividen beda tetap.",
        jejakHitung: [["Beda temporer dapat dikurangkan (penyusutan)", "Rp80.000.000"], ["× 22%", "Rp17.600.000"]],
        mengapaSalah: { B: "Ikut memasukkan sanksi (22% × 130 juta)", C: "Arah terbalik", D: "Menjumlahkan semua koreksi termasuk beda tetap (22% × 30 juta)" },
        jebakan: "Saring dulu beda tetap; sisanya baru dikalikan 22%."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "B7-050", topik: "B7.7", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mega Logistik Andalan (peredaran bruto Rp130 miliar; tidak ada saldo pajak tangguhan awal; tidak ada kompensasi rugi) melaporkan laba sebelum pajak 2025 Rp1.500.000.000. Koreksi fiskal: penyusutan fiskal lebih besar dari komersial Rp100.000.000; beban imbalan kerja yang belum dibayar Rp60.000.000; biaya jamuan tanpa daftar nominatif Rp40.000.000. Seluruh aset pajak tangguhan dapat diakui. Laba bersih setelah pajak yang disajikan di laporan laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.161.200.000", B: "Rp1.170.000.000", C: "Rp1.178.800.000", D: "Rp1.115.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "PKP = 1.500 − 100 + 60 + 40 = Rp1.500.000.000; pajak kini Rp330.000.000. Beda temporer neto kena pajak = 100 − 60 = Rp40.000.000 → beban pajak tangguhan Rp8.800.000. Beban pajak total Rp338.800.000; laba bersih Rp1.161.200.000.",
        jejakHitung: [["PKP = 1.500 − 100 + 60 + 40 (juta)", "Rp1.500.000.000"], ["Pajak kini = 22% × 1.500.000.000", "Rp330.000.000"], ["Pajak tangguhan neto = 22% × (100 − 60) juta", "beban Rp8.800.000"], ["Beban pajak total", "Rp338.800.000"], ["Laba bersih = 1.500.000.000 − 338.800.000", "Rp1.161.200.000"]],
        mengapaSalah: { B: "Hanya mengurangkan pajak kini", C: "Pajak tangguhan diperlakukan sebagai manfaat (arah terbalik)", D: "Memakai tarif 25% atas (laba + beda tetap)" },
        jebakan: "Uji silang: 22% × (1.500 + 40 beda tetap) = Rp338,8 juta."
      },
      dasarHukum: [{ pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    /* ---------- B7.8 [C] Transaksi khusus ---------- */
    {
      id: "B7-051", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-06",
      stem: "Vignette PT Bangun Kokoh Perkasa (1/2). PT Bangun Kokoh (kontraktor pekerjaan konstruksi dengan sertifikat badan usaha kualifikasi menengah) mengerjakan gedung untuk PT Retail Sejahtera (WP badan, pemotong) dengan nilai kontrak Rp10.000.000.000 belum termasuk PPN. Pada 2025 progres 40% sehingga pendapatan PSAK 115 yang diakui Rp4.000.000.000, sedangkan termin yang dibayar PT Retail Sejahtera sepanjang 2025 Rp3.000.000.000 (belum termasuk PPN). PPh atas penghasilan jasa konstruksi PT Bangun Kokoh untuk 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh final Rp106.000.000 (2,65% × Rp4.000.000.000) mengikuti pengakuan pendapatan",
        B: "PPh final Rp79.500.000 (2,65% × Rp3.000.000.000) dipotong pengguna jasa saat pembayaran",
        C: "PPh final Rp90.000.000 (3% × Rp3.000.000.000)",
        D: "PPh final Rp52.500.000 (1,75% × Rp3.000.000.000)"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "PP 9/2022: pekerjaan konstruksi oleh penyedia kualifikasi menengah dikenai PPh final 2,65% dari jumlah pembayaran tidak termasuk PPN, dipotong pengguna jasa saat pembayaran. Dasar 2025 = termin diterima Rp3.000.000.000 → Rp79.500.000.",
        jejakHitung: [["Dasar = pembayaran diterima 2025", "Rp3.000.000.000"], ["Tarif kualifikasi menengah", "2,65%"], ["PPh final", "Rp79.500.000"]],
        mengapaSalah: { A: "Dasar PPh final adalah pembayaran, bukan pendapatan persentase penyelesaian", C: "Tarif 3% berasal dari PP 51/2008 jo. PP 40/2009 yang sudah diganti", D: "1,75% untuk kualifikasi kecil atau perseorangan bersertifikat" },
        jebakan: "Kualifikasi usaha menentukan tarif; pembayaran menentukan saat dan dasar."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1) huruf c", berlakuSejak: "2022-02-21" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-052",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      kasusId: "V-B7-06",
      stem: "Vignette PT Bangun Kokoh Perkasa (2/2). Seluruh penghasilan PT Bangun Kokoh berasal dari jasa konstruksi. Pada 2025 pendapatan PSAK 115 Rp4.000.000.000, termin diterima Rp3.000.000.000, PPh final dipotong Rp79.500.000. Pada 2026 sisa termin Rp7.000.000.000 diterima (PPh final Rp185.500.000) dan pendapatan PSAK 115 Rp6.000.000.000. Perlakuan yang tepat dalam laporan keuangan dan rekonsiliasi fiskal adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Selisih pendapatan PSAK 115 dan termin 2025 Rp1.000.000.000 menimbulkan liabilitas pajak tangguhan 22%", B: "Pendapatan konstruksi dan biaya terkait dikeluarkan dalam rekonsiliasi fiskal karena penghasilannya final; perbedaan waktu pendapatan PSAK 115 dan termin tidak menimbulkan aset/liabilitas pajak tangguhan", C: "PPh final yang dipotong dicatat sebagai PPh dibayar di muka dan dikreditkan dalam SPT Tahunan", D: "Pendapatan konstruksi digabung dengan penghasilan lain dan dikenai tarif 22%, sedangkan PPh final yang dipotong menjadi kredit pajak" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Penghasilan jasa konstruksi dikenai PPh final sehingga, bersama biayanya, dikeluarkan dari penghitungan penghasilan neto fiskal tarif umum. Karena pajaknya final atas pembayaran, perbedaan waktu PSAK 115 tidak menimbulkan beda temporer PSAK 212; PPh final atas termin yang pendapatannya belum diakui lazim dicatat sebagai pajak final dibayar di muka lalu dibebankan saat pendapatannya diakui.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pajak tangguhan PSAK 212 tidak timbul atas penghasilan yang dikenai PPh final",
          C: "PPh final tidak dapat dikreditkan",
          D: "Penghasilan final tidak digabung dengan penghasilan tarif umum"
        },
        jebakan: "Final = keluar dari rekonsiliasi dan keluar dari pajak tangguhan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh; PP 9/2022", berlakuSejak: "2022-02-21" }, { pasal: "PSAK 212 Pajak Penghasilan; PSAK 115", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: penghasilan konstruksi bersifat final (Pasal 4 ayat (2) UU PPh, PP 9/2022) dan dikeluarkan beserta biayanya dalam lampiran rekonsiliasi SPT Badan (PER-11/PJ/2025). Yang belum pasti hanya sisi akuntansi: bahwa PSAK 212 tidak mengakui pajak tangguhan atas perbedaan waktu penghasilan yang dikenai PPh final, dan penyajian PPh final atas termin sebagai pajak final dibayar di muka. Teks PSAK 212 belum dibaca langsung."
    },
    {
      id: "B7-053",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 3,
      kutipan: "Pasal 10 ayat (3) UU PPh: Nilai perolehan atau pengalihan harta yang dialihkan dalam rangka likuidasi, penggabungan, peleburan, pemekaran, pemecahan, atau pengambilalihan usaha adalah jumlah yang seharusnya dikeluarkan atau diterima berdasarkan harga pasar, kecuali ditetapkan lain oleh Menteri Keuangan.",
      stem: "PT Anugrah Pangan (WP badan dalam negeri) menggabungkan diri ke dalam PT Sentosa Pangan efektif 1 Juli 2026; PT Anugrah bubar tanpa likuidasi. Nilai sisa buku fiskal seluruh harta PT Anugrah Rp12.000.000.000 dan nilai pasarnya Rp15.000.000.000; PT Anugrah masih memiliki sisa kerugian fiskal Rp900.000.000. Berdasarkan kutipan tersebut dan ketentuan pelaksanaannya, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Selisih Rp3.000.000.000 dikenai PPh final 10% seperti penilaian kembali aktiva tetap", B: "Penggabungan selalu memakai nilai buku sehingga tidak ada keuntungan, dan sisa rugi Rp900.000.000 beralih ke PT Sentosa", C: "Dengan harga pasar, selisih Rp3.000.000.000 menjadi keuntungan PT Anugrah; dengan nilai buku, sisa rugi PT Anugrah tidak beralih ke PT Sentosa", D: "Keuntungan Rp3.000.000.000 menjadi penghasilan PT Sentosa sebagai pihak yang menerima pengalihan harta" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Prinsip dasar Pasal 10 ayat (3) adalah harga pasar, sehingga keuntungan pengalihan harta (Pasal 4 ayat (1) huruf d) terutang pada pihak yang mengalihkan (PT Anugrah). Sejak 1 Januari 2025 nilai buku diatur Pasal 392 sampai 403 PMK 81/2024 (menggantikan PMK 52/2017 s.t.d.d. PMK 56/2021): nilai buku hanya boleh dipakai setelah mendapat persetujuan Direktur Jenderal Pajak, dengan permohonan paling lama 6 bulan setelah tanggal efektif dan uji tujuan bisnis, dan konsekuensinya sisa rugi pihak yang mengalihkan harta tidak boleh dikompensasikan oleh pihak penerima (Pasal 402 ayat (1)).",
        jejakHitung: [
          ["Nilai pasar − nilai sisa buku fiskal", "Rp3.000.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak ada tarif final; keuntungan masuk penghasilan tarif umum",
          B: "Nilai buku adalah pengecualian bersyarat (perlu persetujuan DJP), bukan otomatis; rugi tidak beralih",
          D: "Keuntungan pengalihan adalah penghasilan pihak yang mengalihkan"
        },
        jebakan: "Dua sisi merger: harga pasar (pajak sekarang) vs nilai buku (pajak tertunda tetapi rugi hangus). Dasar nilai buku kini PMK 81/2024, bukan lagi PMK 52/2017."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (3) dan Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 392, 393, dan 402 ayat (1) PMK 81/2024 s.t.d.t.d. PMK 1/2026 (dahulu PMK 52/PMK.010/2017 s.t.d.d. PMK 56/PMK.010/2021)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-054", topik: "B7.8", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Lama Jaya (modal disetor Rp2.000.000.000) dibubarkan dan dilikuidasi pada 2026. Setelah seluruh utang termasuk utang pajak dilunasi, sisa kekayaan yang dibagikan kepada pemegang saham Rp3.500.000.000. Pemegang saham: PT Induk Jaya (badan dalam negeri, 60%) dan Tuan Rendra (orang pribadi dalam negeri, 40%) yang tidak menginvestasikan dana yang diterimanya di Indonesia. Perlakuan PPh atas bagian Tuan Rendra adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp1.400.000.000 seluruhnya penghasilan yang dikenai tarif Pasal 17 ayat (1) huruf a",
        B: "Rp600.000.000 diperlakukan sebagai dividen dan dikenai PPh final 10% sebesar Rp60.000.000",
        C: "Rp600.000.000 digabung dengan penghasilan lain dan dikenai tarif progresif Pasal 17",
        D: "Rp600.000.000 dipotong PPh Pasal 23 sebesar 15%"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bagian Tuan Rendra = 40% × 3.500.000.000 = Rp1.400.000.000; pengembalian modal 40% × 2.000.000.000 = Rp800.000.000 bukan penghasilan. Kelebihan Rp600.000.000 adalah dividen (pembagian sisa hasil likuidasi melebihi modal disetor). Dividen dalam negeri bagi OP dikecualikan bila diinvestasikan di Indonesia; karena tidak, dikenai PPh final 10% = Rp60.000.000.",
        jejakHitung: [["Bagian Tuan Rendra = 40% × 3.500.000.000", "Rp1.400.000.000"], ["Modal disetor yang kembali = 40% × 2.000.000.000", "Rp800.000.000"], ["Dividen likuidasi", "Rp600.000.000"], ["PPh final 10%", "Rp60.000.000"]],
        mengapaSalah: { A: "Pengembalian modal disetor bukan penghasilan", C: "Dividen OP dalam negeri bersifat final 10%", D: "PPh 23 bukan untuk dividen kepada OP dalam negeri" },
        jebakan: "Pisahkan pengembalian modal dari kelebihannya; hanya kelebihan yang dividen."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf g dan ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 17 ayat (2c) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B7-055",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "PT Bank Nusantara Makmur (bank umum) dalam laporan keuangan 2025 mencatat: (1) pendapatan bunga penempatan deposito pada bank lain Rp2.000.000.000; (2) beban cadangan kerugian penurunan nilai kredit (PSAK 109) Rp50.000.000.000, sementara jumlah pembentukan cadangan yang memenuhi batas peraturan perpajakan untuk bank Rp42.000.000.000. Perlakuan fiskal yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp8.000.000.000; koreksi negatif Rp2.000.000.000 karena bunga deposito dikenai PPh final 20%", B: "Koreksi positif Rp50.000.000.000 atas cadangan; koreksi negatif Rp2.000.000.000 atas bunga deposito final", C: "Koreksi positif Rp8.000.000.000 atas cadangan; bunga antarbank tetap dalam penghasilan neto karena tidak dipotong PPh final", D: "Tidak ada koreksi karena seluruh cadangan bank dapat dibiayakan" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Cadangan piutang tak tertagih bank termasuk pengecualian Pasal 9 ayat (1) huruf c angka 1 UU PPh: dihitung berdasarkan SAK dengan batasan tertentu. Sejak Tahun Pajak 2024 berlaku PMK 74 Tahun 2024: nilai cadangan akhir tahun memakai nilai yang lebih kecil antara nilai menurut SAK dan nilai batasan tertentu, sehingga kelebihan Rp8.000.000.000 dikoreksi positif. Bunga yang diterima bank dikecualikan dari pemotongan PPh final atas bunga deposito (Pasal 3 ayat (1) huruf b PP 131/2000), sehingga menjadi penghasilan tarif umum dan tidak dikoreksi.",
        jejakHitung: [
          ["Cadangan komersial", "Rp50.000.000.000"],
          ["Batas fiskal", "Rp42.000.000.000"],
          ["Koreksi positif", "Rp8.000.000.000"]
        ],
        mengapaSalah: {
          A: "Bunga yang diterima bank dikecualikan dari pemotongan PPh final (Pasal 3 ayat (1) huruf b PP 131/2000)",
          B: "Bank boleh membiayakan cadangan sampai batas tertentu; bunga yang diterima bank bukan penghasilan final",
          D: "Cadangan bank dibatasi: dipakai nilai yang lebih kecil antara nilai SAK dan batasan tertentu (Pasal 4 ayat (5) PMK 74 Tahun 2024)"
        },
        jebakan: "Pengecualian cadangan bank bukan tanpa batas; bunga deposito yang diterima bank bukan final. Untuk Tahun Pajak 2024 dan sesudahnya, batas cadangan bank mengikuti PMK 74 Tahun 2024, bukan lagi PMK 81/PMK.03/2009."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c angka 1 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 4 ayat (1) dan ayat (5) PMK 74 Tahun 2024 (berlaku sejak Tahun Pajak 2024)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b PP 131/2000 (bunga yang diterima bank tidak dipotong PPh final)", berlakuSejak: "2000-12-15" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B7-056", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Teknologi Andalan Indonesia membayar royalti kepada induknya di negara X sebesar USD100.000 neto, dengan klausul kontrak bahwa PPh Indonesia ditanggung PT Teknologi melalui mekanisme gross-up. Induk tidak menyerahkan SKD sehingga tarif P3B tidak dapat diterapkan; kurs KMK dan kurs pembukuan pada tanggal pembayaran sama, Rp16.000/USD, dan nilai royalti telah memenuhi prinsip kewajaran. Perlakuan PPh Pasal 26 dan biaya royalti di PT Teknologi adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 Rp320.000.000 (20% × Rp1.600.000.000); beban royalti Rp1.600.000.000",
        B: "PPh 26 Rp400.000.000; beban royalti Rp2.000.000.000 (termasuk gross-up) dapat dikurangkan",
        C: "PPh 26 Rp400.000.000; bagian PPh tersebut tidak dapat dikurangkan karena merupakan pajak yang ditanggung",
        D: "PPh 23 Rp240.000.000 (15% × Rp1.600.000.000) karena objeknya royalti"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Gross-up: bruto = 100.000 / (1 − 20%) = USD125.000 = Rp2.000.000.000; PPh 26 = 20% × bruto = Rp400.000.000 (disetor tanggal 15 bulan berikutnya). Karena PPh dijadikan bagian imbalan, seluruh Rp2.000.000.000 adalah biaya royalti yang dapat dikurangkan (sepanjang wajar).",
        jejakHitung: [["Bruto = 100.000 / 0,8", "USD125.000"], ["Bruto dalam rupiah × 16.000", "Rp2.000.000.000"], ["PPh 26 = 20% × 2.000.000.000", "Rp400.000.000"], ["Diterima induk = 2.000.000.000 − 400.000.000", "Rp1.600.000.000"]],
        mengapaSalah: { A: "Menghitung dari jumlah neto tanpa gross-up", C: "Dengan gross-up, PPh menjadi bagian imbalan yang dapat dibiayakan; yang tidak dapat dibiayakan adalah PPh yang sekadar ditanggung", D: "Penerima adalah WP luar negeri sehingga berlaku PPh 26, bukan PPh 23" },
        jebakan: "Gross-up mengubah 'pajak' menjadi 'imbalan' — dan dasar PPh menjadi neto/(1 − tarif)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    /* ---------- Tambahan: pola yang dilaporkan peserta UKP Tingkat B Oktober 2026 (docs/PENGALAMAN-UJIAN.md) ---------- */
    {
      id: "B7-057", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-B7-07",
      stem: "Vignette PT Sumber Rasa Abadi (1/2). PT Sumber Rasa Abadi (produsen makanan ringan, pemberi kerja) menghitung gaji Masa Pajak Maret 2026 untuk 85 pegawai tetap: gaji pokok dan tunjangan bruto Rp250.000.000. Dari jumlah itu dipotong PPh Pasal 21 Masa Maret hasil penghitungan TER (sesuai kategori PTKP masing-masing pegawai) Rp9.750.000 serta iuran JHT dan JP bagian pegawai Rp7.500.000; iuran bagian pemberi kerja dicatat dengan jurnal terpisah. Gaji Maret menjadi hak pegawai per 31 Maret 2026, tetapi baru ditransfer pada 2 April 2026. Jurnal yang tepat di pembukuan PT Sumber Rasa per 31 Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban gaji 250.000.000; Cr Utang PPh 21 9.750.000; Cr Utang iuran BPJS Ketenagakerjaan 7.500.000; Cr Kas 232.750.000",
        B: "Dr Beban gaji 250.000.000; Dr Beban PPh 21 9.750.000; Cr Utang PPh 21 9.750.000; Cr Utang iuran BPJS Ketenagakerjaan 7.500.000; Cr Utang gaji 242.500.000",
        C: "Dr Beban gaji 250.000.000; Cr Utang PPh 21 9.750.000; Cr Utang iuran BPJS Ketenagakerjaan 7.500.000; Cr Utang gaji 232.750.000",
        D: "Dr Beban gaji 250.000.000; Dr PPh 21 dibayar di muka 9.750.000; Cr Utang iuran BPJS Ketenagakerjaan 7.500.000; Cr Utang gaji 252.250.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Beban gaji diakui sebesar bruto Rp250.000.000 karena seluruhnya hak pegawai (biaya 3M, Pasal 6 ayat (1) huruf a UU PPh). PPh 21 dan iuran bagian pegawai dipotong dari gaji sehingga menjadi utang perusahaan kepada negara dan BPJS, bukan beban tambahan. Karena transfer baru 2 April, sisanya dicatat Utang gaji: 250.000.000 − 9.750.000 − 7.500.000 = Rp232.750.000.",
        jejakHitung: [["Beban gaji (bruto)", "Rp250.000.000"], ["Utang PPh 21 Masa Maret (TER)", "Rp9.750.000"], ["Utang iuran JHT dan JP bagian pegawai", "Rp7.500.000"], ["Utang gaji = 250.000.000 − 9.750.000 − 7.500.000", "Rp232.750.000"]],
        mengapaSalah: { A: "Gaji belum ditransfer per 31 Maret; yang timbul Utang gaji, bukan pengurangan Kas", B: "PPh 21 dipotong dari gaji pegawai, bukan ditanggung perusahaan; mendebit Beban PPh 21 membebankan dua kali", D: "Perusahaan adalah pemotong; PPh 21 menjadi utang, bukan PPh dibayar di muka (akun milik pihak yang dipotong)" },
        jebakan: "Dalam jurnal gaji, PPh 21 yang dipotong selalu di sisi kredit (Utang PPh 21), dan beban gaji tetap sebesar bruto."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) UU PPh; PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-058", topik: "B7.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["B-2026-10"], kasusId: "V-B7-07",
      stem: "Vignette PT Sumber Rasa Abadi (2/2). Per 31 Maret 2026 PT Sumber Rasa mencatat Utang gaji Rp232.750.000 dan Utang PPh 21 Rp9.750.000 atas gaji Masa Maret 2026 pegawai tetap. Gaji ditransfer ke rekening pegawai pada 2 April 2026, sedangkan PPh 21 disetor melalui Coretax dengan kode billing PPh 21. Jurnal pelunasan kedua utang tersebut beserta batas waktu penyetoran PPh 21 yang benar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "2 April: Dr Utang gaji 232.750.000 / Cr Kas 232.750.000; saat setor PPh 21 (paling lambat 15 April 2026): Dr Utang PPh 21 9.750.000 / Cr Kas 9.750.000",
        B: "2 April: Dr Utang gaji 232.750.000 / Cr Kas 232.750.000; saat setor PPh 21 (paling lambat 10 April 2026): Dr Utang PPh 21 9.750.000 / Cr Kas 9.750.000",
        C: "2 April: Dr Beban gaji 232.750.000 / Cr Kas 232.750.000; saat setor PPh 21 (paling lambat 15 April 2026): Dr Beban PPh 21 9.750.000 / Cr Kas 9.750.000",
        D: "2 April: Dr Utang gaji 232.750.000 / Cr Kas 232.750.000; saat setor PPh 21 (paling lambat 20 April 2026, bersamaan pelaporan SPT Masa PPh 21/26): Dr Utang PPh 21 9.750.000 / Cr Kas 9.750.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pembayaran gaji melunasi Utang gaji; beban sudah diakui 31 Maret. PPh 21 Masa Maret 2026 (penghasilan terutang Maret) disetor paling lambat tanggal 15 bulan berikutnya, yaitu 15 April 2026 (PMK 81/2024), dengan jurnal Dr Utang PPh 21 / Cr Kas; SPT Masa PPh 21/26 beserta bukti pemotongan bulanan (BPMP) dilaporkan paling lama 20 April 2026.",
        jejakHitung: [["Masa pajak PPh 21", "Maret 2026 (gaji terutang 31 Maret)"], ["Batas setor", "15 April 2026"], ["Batas lapor SPT Masa PPh 21/26", "20 April 2026"]],
        mengapaSalah: { B: "Tanggal 10 adalah batas setor lama (PMK 242/2014) sebelum PMK 81/2024", C: "Beban gaji sudah diakui 31 Maret; mendebit beban lagi membebankan dua kali, dan PPh 21 yang dipotong bukan beban perusahaan", D: "Tanggal 20 adalah batas lapor SPT Masa, bukan batas setor" },
        jebakan: "Saat pelunasan, yang didebit adalah utang yang dibentuk sebelumnya; setor tanggal 15, lapor tanggal 20."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 (setor tanggal 15, lapor 20 hari)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPMP dan SPT Masa PPh 21/26)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-059", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Mitra Agro Holdings (WP badan dalam negeri, peredaran bruto Rp150 miliar) memiliki 30% saham PT Sawit Andalas Lestari (PT dalam negeri, tidak tercatat di bursa) dan mencatatnya sebagai investasi pada entitas asosiasi dengan metode ekuitas (PSAK 228, eks-PSAK 15). Pada 2025 PT Sawit Andalas membukukan laba bersih Rp4.000.000.000, sehingga PT Mitra mengakui 'bagian laba entitas asosiasi' Rp1.200.000.000 di laba rugi. Pada Mei 2025 PT Sawit Andalas membagikan dividen tunai atas laba 2024 dan PT Mitra menerima Rp450.000.000, yang dicatat dengan mengkredit akun investasi. Laba sebelum pajak PT Mitra 2025 Rp9.000.000.000 dan tidak ada koreksi fiskal lain. Penghasilan neto fiskal PT Mitra 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp9.000.000.000 — bagian laba entitas asosiasi adalah penghasilan karena sudah diakui secara akrual",
        B: "Rp8.250.000.000 — bagian laba dikeluarkan, tetapi dividen Rp450.000.000 ditambahkan sebagai penghasilan",
        C: "Rp7.350.000.000 — bagian laba Rp1.200.000.000 dan dividen Rp450.000.000 sama-sama dikoreksi negatif",
        D: "Rp7.800.000.000 — bagian laba Rp1.200.000.000 dikoreksi negatif; dividen yang diterima bukan objek dan tidak melalui laba rugi"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Bagian laba metode ekuitas belum diterima atau diperoleh sebagai penghasilan (belum ada pembagian), sehingga dikoreksi negatif Rp1.200.000.000. Dividen Rp450.000.000 dari PT dalam negeri yang diterima badan dalam negeri bukan objek (Pasal 4 ayat (3) huruf f, tanpa syarat persentase kepemilikan sejak UU Cipta Kerja); karena dicatat mengurangi akun investasi dan tidak melalui laba rugi, tidak perlu dikoreksi lagi. Penghasilan neto fiskal = 9.000.000.000 − 1.200.000.000 = Rp7.800.000.000; nilai fiskal penyertaan tetap harga perolehan.",
        jejakHitung: [["Laba sebelum pajak", "Rp9.000.000.000"], ["Koreksi negatif: bagian laba entitas asosiasi", "Rp1.200.000.000"], ["Dividen diterima Rp450.000.000", "bukan objek; tidak melalui laba rugi → tanpa koreksi"], ["Penghasilan neto fiskal = 9.000.000.000 − 1.200.000.000", "Rp7.800.000.000"]],
        mengapaSalah: { A: "Fiskal tidak mengenal metode ekuitas; laba investee baru relevan saat dibagikan, dan dividen dalam negeri bagi badan pun bukan objek", B: "Dividen dari PT dalam negeri yang diterima badan dalam negeri bukan objek (Pasal 4 ayat (3) huruf f)", C: "Dividen tidak tercatat di laba rugi (mengurangi akun investasi), sehingga mengoreksinya lagi berarti mengurangkan dua kali" },
        jebakan: "Pada metode ekuitas dividen tidak lewat laba rugi; yang dikoreksi hanya bagian laba entitas asosiasi."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan ayat (3) huruf f UU PPh (UU Cipta Kerja)", berlakuSejak: "2020-11-02" }, { pasal: "PSAK 228 Investasi pada Entitas Asosiasi dan Ventura Bersama (eks-PSAK 15)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-060", topik: "B7.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Mandala Ritel Nusantara Tbk (peredaran bruto 2025 Rp420 miliar) sepanjang 2025 memenuhi syarat penurunan tarif Perseroan Terbuka: 40% saham disetor tercatat dan diperdagangkan di Bursa Efek Indonesia, dimiliki 1.240 pihak yang masing-masing memiliki kurang dari 5%, kondisi itu terpenuhi selama 365 hari, dan laporan kepemilikan dari biro administrasi efek dilampirkan pada SPT. Rekonsiliasi fiskal menghasilkan PKP Tahun Pajak 2025 Rp8.500.000.000. Kredit pajak: PPh 22 Rp210.000.000, PPh 23 Rp90.000.000, dan PPh 25 Rp1.100.000.000; selain itu PPh final atas ruang toko yang disewakan Rp60.000.000. Jurnal pengakuan pajak kini 2025 yang benar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban pajak kini 1.870.000.000; Cr PPh 22, 23, 25 dibayar di muka 1.400.000.000; Cr Utang PPh 29 470.000.000",
        B: "Dr Beban pajak kini 1.615.000.000; Cr PPh 22, 23, 25 dibayar di muka 1.400.000.000; Cr Utang PPh 29 215.000.000",
        C: "Dr Beban pajak kini 1.615.000.000; Cr PPh 22, 23, 25 dan PPh final dibayar di muka 1.460.000.000; Cr Utang PPh 29 155.000.000",
        D: "Dr Beban pajak kini 1.768.000.000; Cr PPh 22, 23, 25 dibayar di muka 1.400.000.000; Cr Utang PPh 29 368.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "final-nonfinal", D: "salah-baca" },
      pembahasan: {
        inti: "Syarat Pasal 17 ayat (2b) terpenuhi (paling sedikit 40% saham disetor di BEI, ≥ 300 pihak masing-masing < 5%, ≥ 183 hari), sehingga tarif 22% − 3% = 19% berlaku atas seluruh PKP: 19% × 8.500.000.000 = Rp1.615.000.000. Kredit hanya PPh 22, 23, dan 25 = Rp1.400.000.000; PPh final sewa tidak dapat dikreditkan. Utang PPh 29 Rp215.000.000 dilunasi sebelum SPT Tahunan disampaikan (paling lambat 30 April 2026).",
        jejakHitung: [["Tarif Perseroan Terbuka = 22% − 3%", "19%"], ["PPh terutang = 19% × 8.500.000.000", "Rp1.615.000.000"], ["Kredit = 210.000.000 + 90.000.000 + 1.100.000.000", "Rp1.400.000.000"], ["Utang PPh 29 = 1.615.000.000 − 1.400.000.000", "Rp215.000.000"]],
        mengapaSalah: { A: "Memakai tarif umum 22%, padahal syarat penurunan tarif Perseroan Terbuka terpenuhi", C: "PPh final atas sewa (Pasal 4 ayat (2)) tidak dapat dikreditkan", D: "Penurunan 3% berlaku atas seluruh PKP, bukan hanya porsi 40% saham yang tercatat (40% × 19% + 60% × 22%)" },
        jebakan: "Ambang '40%' adalah 'paling sedikit' — tepat 40% sudah memenuhi; tarif 19% berlaku untuk seluruh PKP."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 (persyaratan penurunan tarif Perseroan Terbuka)" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-061", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-B7-08",
      stem: "Vignette PT Kencana Boga Utama (1/3). PT Kencana Boga Utama (produsen roti, pemberi kerja, tahun buku kalender) membayar gaji Masa Pajak Mei 2026 untuk 120 pegawai tetap melalui transfer bank pada 25 Mei 2026, hari yang sama dengan pengakuan bebannya. Menurut daftar gaji: gaji pokok dan tunjangan tetap (bruto) Rp320.000.000; PPh Pasal 21 Masa Mei yang dipotong dengan TER sesuai kategori PTKP masing-masing pegawai Rp14.400.000; iuran bagian pegawai (JHT 2%, JP 1%, dan BPJS Kesehatan 1%) Rp12.800.000. Iuran bagian pemberi kerja Rp34.848.000 dijurnal terpisah. Jurnal yang tepat pada 25 Mei 2026 untuk pembayaran gaji tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban gaji 292.800.000; Cr Kas 292.800.000 (PPh 21 dan iuran baru dijurnal saat disetor)",
        B: "Dr Beban gaji 320.000.000; Dr Beban PPh 21 14.400.000; Cr Utang PPh 21 14.400.000; Cr Utang iuran BPJS 12.800.000; Cr Kas 307.200.000",
        C: "Dr Beban gaji 305.600.000; Dr Utang PPh 21 14.400.000; Cr Utang iuran BPJS 12.800.000; Cr Kas 307.200.000",
        D: "Dr Beban gaji 320.000.000; Cr Utang PPh 21 14.400.000; Cr Utang iuran BPJS 12.800.000; Cr Kas 292.800.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Beban gaji diakui sebesar bruto Rp320.000.000. PPh 21 dan iuran bagian pegawai dipotong dari gaji: perusahaan hanya menahan uang itu untuk disetor, sehingga keduanya dikredit sebagai utang (liabilitas) sejak dipotong. Karena gaji ditransfer pada hari yang sama, sisanya mengkredit Kas: 320.000.000 − 14.400.000 − 12.800.000 = Rp292.800.000.",
        jejakHitung: [["Dr Beban gaji (bruto)", "Rp320.000.000"], ["Cr Utang PPh 21 (dipotong, TER)", "Rp14.400.000"], ["Cr Utang iuran BPJS bagian pegawai = 4% × 320.000.000", "Rp12.800.000"], ["Cr Kas = 320.000.000 − 14.400.000 − 12.800.000", "Rp292.800.000"], ["Cek: debit 320.000.000 = kredit 14.400.000 + 12.800.000 + 292.800.000", "seimbang"]],
        mengapaSalah: { A: "Beban gaji adalah bruto; PPh 21 dan iuran yang dipotong sudah menjadi kewajiban perusahaan saat dipotong, bukan baru saat disetor", B: "PPh 21 dipotong dari gaji pegawai (Pasal 21 UU PPh), bukan ditanggung perusahaan; mendebit Beban PPh 21 membuat beban dan kas keluar terlalu besar", C: "Utang PPh 21 bertambah sehingga dicatat di sisi kredit; menaruhnya di sisi debit sekaligus mengecilkan beban gaji" },
        jebakan: "Pemotong mencatat Cr Utang PPh 21; beban gaji tetap bruto; Kas (atau Utang gaji) = bruto − potongan."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) UU PPh; PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-062", topik: "B7.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-B7-08",
      stem: "Vignette PT Kencana Boga Utama (2/3). Atas gaji Masa Mei 2026 yang dibayar 25 Mei 2026, PT Kencana mencatat Utang PPh 21 Rp14.400.000 dan Utang iuran BPJS Rp47.648.000. Utang iuran itu terdiri atas iuran bagian pegawai yang dipotong dari gaji Rp12.800.000 dan iuran bagian pemberi kerja Rp34.848.000 yang pada 25 Mei telah dijurnal Dr Beban iuran jaminan sosial / Cr Utang iuran BPJS. Pada 10 Juni 2026 perusahaan menyetor PPh 21 Masa Mei dengan kode billing yang dibuat di Coretax dan membayar seluruh iuran BPJS dari rekening yang sama. Jurnal 10 Juni 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Utang PPh 21 14.400.000; Dr Utang iuran BPJS 47.648.000; Cr Kas 62.048.000",
        B: "Dr Beban PPh 21 14.400.000; Dr Utang iuran BPJS 47.648.000; Cr Kas 62.048.000",
        C: "Dr Utang PPh 21 14.400.000; Dr Utang iuran BPJS 12.800.000; Dr Beban iuran jaminan sosial 34.848.000; Cr Kas 62.048.000",
        D: "Dr Utang PPh 21 14.400.000; Dr Utang iuran BPJS 12.800.000; Cr Kas 27.200.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Penyetoran melunasi utang yang sudah dibentuk pada 25 Mei, sehingga yang didebit adalah Utang PPh 21 Rp14.400.000 dan Utang iuran BPJS Rp47.648.000 (bagian pegawai yang dipotong ditambah bagian pemberi kerja yang sudah dibebankan); tidak ada beban baru saat setor. Setoran 10 Juni masih sebelum batas tanggal 15 Juni 2026 (PMK 81/2024), dan PPh 21 Masa Mei dilaporkan dalam SPT Masa PPh 21/26 paling lama 20 hari setelah Masa Pajak Mei berakhir.",
        jejakHitung: [["Dr Utang PPh 21 Masa Mei", "Rp14.400.000"], ["Dr Utang iuran BPJS = 12.800.000 + 34.848.000", "Rp47.648.000"], ["Cr Kas = 14.400.000 + 47.648.000", "Rp62.048.000"], ["Batas setor PPh 21 Masa Mei 2026", "15 Juni 2026"]],
        mengapaSalah: { B: "PPh 21 yang dipotong bukan beban perusahaan; saat disetor yang dilunasi adalah Utang PPh 21", C: "Iuran bagian pemberi kerja sudah dibebankan pada 25 Mei; mendebit beban lagi membebankan dua kali", D: "Iuran bagian pemberi kerja yang sudah tercatat di Utang iuran BPJS ikut dibayar dan harus didebit" },
        jebakan: "Saat menyetor, debit selalu jatuh pada utang yang dibentuk sebelumnya, bukan pada beban."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 21 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "B7-063",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B7-08",
      stem: "Vignette PT Kencana Boga Utama (3/3). Untuk 6 manajernya PT Kencana memberikan fasilitas PPh Pasal 21 ditanggung perusahaan (tidak dalam bentuk tunjangan PPh). Gaji Masa Mei 2026 keenam manajer (bruto) Rp150.000.000, PPh 21 Masa Mei 2026 atas keenam manajer yang ditanggung perusahaan Rp18.600.000, dan iuran bagian manajer Rp4.500.000 tetap dipotong dari gaji. Gaji dibayar 25 Mei 2026. Jurnal pembayaran gaji manajer dan perlakuannya dalam rekonsiliasi fiskal Tahun Pajak 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dr Beban gaji 150.000.000; Cr Utang PPh 21 18.600.000; Cr Utang iuran BPJS 4.500.000; Cr Kas 126.900.000; tidak ada koreksi fiskal", B: "Dr Beban gaji 150.000.000; Dr Beban PPh 21 ditanggung 18.600.000; Cr Utang PPh 21 18.600.000; Cr Utang iuran BPJS 4.500.000; Cr Kas 145.500.000; Beban PPh 21 ditanggung dikoreksi positif Rp18.600.000", C: "Dr Beban gaji 150.000.000; Dr Beban PPh 21 ditanggung 18.600.000; Cr Utang PPh 21 18.600.000; Cr Utang iuran BPJS 4.500.000; Cr Kas 145.500.000; seluruh beban dapat dikurangkan sebagai biaya pegawai", D: "Dr Beban gaji 150.000.000; Dr Beban PPh 21 ditanggung 18.600.000; Cr Utang PPh 21 18.600.000; Cr Kas 150.000.000; seluruh beban dapat dikurangkan sebagai biaya pegawai" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Karena PPh 21 ditanggung, manajer menerima gaji tanpa potongan PPh: Kas = 150.000.000 − 4.500.000 = Rp145.500.000, sedangkan PPh 21 Rp18.600.000 dibayar dari dana perusahaan sehingga didebit sebagai Beban PPh 21 ditanggung dan dikredit Utang PPh 21. Menurut contoh I.4 Lampiran PMK 168/2023, PPh 21 yang ditanggung pemberi kerja merupakan penggantian dalam bentuk kenikmatan bagi pegawai (objek pemotongan PPh 21), dan biaya kenikmatan dapat dikurangkan pemberi kerja (Pasal 2 ayat (1) PMK 66/2023), sehingga tidak dikoreksi dalam rekonsiliasi fiskal.",
        jejakHitung: [
          ["Dr Beban gaji (bruto)", "Rp150.000.000"],
          ["Dr Beban PPh 21 ditanggung", "Rp18.600.000"],
          ["Cr Utang PPh 21", "Rp18.600.000"],
          ["Cr Utang iuran BPJS (bagian manajer)", "Rp4.500.000"],
          ["Cr Kas = 150.000.000 − 4.500.000", "Rp145.500.000"],
          ["Koreksi fiskal (kenikmatan pegawai, dapat dibiayakan)", "nihil"]
        ],
        mengapaSalah: {
          A: "Itu jurnal PPh 21 yang dipotong dari gaji; di sini PPh ditanggung perusahaan sehingga gaji tidak dikurangi PPh",
          B: "Koreksi positif mengikuti aturan lama (PER-16/PJ/2016); kini PPh yang ditanggung pemberi kerja adalah kenikmatan yang dapat dibiayakan (PMK 66/2023 Pasal 2 ayat (1); contoh I.4 Lampiran PMK 168/2023)",
          D: "Iuran bagian manajer Rp4.500.000 tetap dipotong dari gaji, sehingga harus dikredit ke Utang iuran BPJS dan kas yang dibayarkan hanya Rp145.500.000"
        },
        jebakan: "Bandingkan dengan soal 1/3: PPh dipotong → tanpa Beban PPh; PPh ditanggung → ada Beban PPh yang dapat dibiayakan (kenikmatan pegawai); tunjangan PPh → masuk bruto dan deductible."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1) PMK 66/2023 (biaya natura dan/atau kenikmatan dapat dikurangkan pemberi kerja)", berlakuSejak: "2023-07-01" }, { pasal: "Lampiran huruf B Bagian Kedua angka I.4 PMK 168/2023 (PPh 21 yang ditanggung pemberi kerja adalah penggantian dalam bentuk kenikmatan)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (1) UU PPh; PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B7-064",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Cipta Rasa Nusantara (tahun buku kalender, pembukuan akrual) menetapkan gaji Desember 2025 pegawai tetap sebagai hak pegawai per 31 Desember 2025, tetapi karena libur akhir tahun baru mentransfernya pada 5 Januari 2026. Menurut daftar gaji Desember: bruto Rp400.000.000; PPh Pasal 21 Masa Pajak Desember 2025 (Masa Pajak Terakhir: tarif Pasal 17 atas penghasilan setahun dikurangi PPh 21 Januari–November) Rp21.000.000; iuran bagian pegawai Rp16.000.000. Pernyataan yang tepat mengenai jurnal dan akibat perpajakannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak ada jurnal pada 31 Desember 2025; pada 5 Januari 2026 dicatat Dr Beban gaji 400.000.000; Cr Utang PPh 21 21.000.000; Cr Utang iuran BPJS 16.000.000; Cr Kas 363.000.000, sehingga beban gaji menjadi biaya fiskal 2026 dan PPh 21-nya masuk Masa Pajak Januari 2026", B: "Pada 31 Desember 2025 dicatat Dr Beban gaji 400.000.000; Cr Utang PPh 21 21.000.000; Cr Utang iuran BPJS 16.000.000; Cr Utang gaji 363.000.000; beban gaji dikoreksi positif dalam rekonsiliasi 2025 karena baru dibayar 2026, dan PPh 21 masuk Masa Pajak Desember 2025 yang disetor paling lambat 15 Januari 2026", C: "Pada 31 Desember 2025 dicatat Dr Beban gaji 400.000.000; Cr Utang PPh 21 21.000.000; Cr Utang iuran BPJS 16.000.000; Cr Utang gaji 363.000.000; beban gaji menjadi biaya fiskal 2025, dan PPh 21 masuk Masa Pajak Desember 2025 yang disetor paling lambat 15 Januari 2026", D: "Pada 31 Desember 2025 dicatat Dr Beban gaji 400.000.000; Cr Utang PPh 21 21.000.000; Cr Utang iuran BPJS 16.000.000; Cr Utang gaji 363.000.000; beban gaji menjadi biaya fiskal 2025, dan PPh 21 masuk Masa Pajak Desember 2025 yang disetor paling lambat 10 Januari 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Dengan pembukuan akrual, gaji yang sudah menjadi hak pegawai pada 31 Desember 2025 dibebankan pada 2025 dan sisanya dicatat Utang gaji Rp363.000.000; pada 5 Januari 2026 cukup Dr Utang gaji / Cr Kas. Gaji terutang bukan pembentukan cadangan (Pasal 9 ayat (1) huruf c), sehingga merupakan biaya fiskal 2025 tanpa koreksi. PPh 21 terutang pada saat pembayaran atau terutangnya penghasilan, mana yang lebih dahulu (Pasal 19 ayat (1) huruf a PMK 168/2023), yaitu 31 Desember 2025; pemotongan dilakukan paling lambat akhir bulan itu (Masa Pajak Desember 2025, Masa Pajak Terakhir) dan disetor paling lambat 15 Januari 2026 (Pasal 94 ayat (2) huruf c PMK 81/2024).",
        jejakHitung: [
          ["Utang gaji = 400.000.000 − 21.000.000 − 16.000.000", "Rp363.000.000"],
          ["Biaya fiskal gaji Desember", "Tahun Pajak 2025"],
          ["Saat terutang PPh 21 (lebih dahulu antara terutang dan dibayar)", "31 Desember 2025"],
          ["Masa Pajak PPh 21", "Desember 2025"],
          ["Batas setor", "15 Januari 2026"]
        ],
        mengapaSalah: {
          A: "Basis kas bertentangan dengan pembukuan akrual yang dipakai; beban dan PPh 21 terutang ketika gaji menjadi hak pegawai, karena saat terutang adalah peristiwa yang lebih dahulu",
          B: "Koreksi 'baru dibayar' hanya untuk pencadangan seperti imbalan pasca-kerja; utang gaji yang sudah pasti terutang bukan cadangan",
          D: "Tanggal 10 adalah batas setor sebelum PMK 81/2024"
        },
        jebakan: "Utang gaji akhir tahun (sudah pasti terutang) ≠ cadangan imbalan kerja (estimasi aktuaria): yang pertama biaya fiskal tahun berjalan, yang kedua dikoreksi positif. Saat terutang PPh 21 mengikuti peristiwa yang lebih dahulu, bukan tanggal transfer."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (5) UU KUP (stelsel akrual taat asas)", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 19 ayat (1) huruf a dan ayat (3) PMK 168/2023 (saat terutang dan pemotongan PPh 21)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 94 ayat (2) huruf c PMK 81/2024 (setor tanggal 15)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-065", topik: "B7.7", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Graha Niaga Elektronik (distributor peralatan elektronik; bukan bank, lembaga pembiayaan, atau perusahaan anjak piutang; peredaran bruto 2025 Rp88 miliar) pada 31 Desember 2025 membukukan beban kerugian kredit ekspektasian atas piutang usaha (penyisihan menurut PSAK 109, eks-PSAK 71) Rp200.000.000. Selama 2025 belum ada piutang yang dihapus, dan proyeksi laba fiskal 2026–2028 yang disetujui direksi menunjukkan laba kena pajak yang cukup. Tidak ada beda temporer lain dan tidak ada saldo pajak tangguhan awal. Pernyataan yang paling tepat mengenai perlakuan pos tersebut pada 2025 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Beban penyisihan Rp200.000.000 dikoreksi positif dan merupakan beda temporer kena pajak, sehingga diakui liabilitas pajak tangguhan Rp44.000.000 sepanjang kemungkinan besar tersedia laba kena pajak untuk memanfaatkannya",
        B: "Beban penyisihan Rp200.000.000 dikoreksi positif dan merupakan beda tetap, sehingga tidak diakui pajak tangguhan walaupun kemungkinan besar tersedia laba kena pajak untuk memanfaatkannya",
        C: "Beban penyisihan Rp200.000.000 dikoreksi positif dan merupakan beda temporer yang dapat dikurangkan, sehingga aset pajak tangguhan Rp44.000.000 wajib diakui tanpa memperhatikan ketersediaan laba kena pajak di masa depan",
        D: "Beban penyisihan Rp200.000.000 dikoreksi positif dan merupakan beda temporer yang dapat dikurangkan, sehingga diakui aset pajak tangguhan Rp44.000.000 sepanjang kemungkinan besar tersedia laba kena pajak untuk memanfaatkannya"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Bagi WP selain bank dan lembaga pembiayaan tertentu, pembentukan cadangan piutang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf c UU PPh) sehingga dikoreksi positif. Koreksi itu berbalik ketika piutang dihapus dengan memenuhi syarat Pasal 6 ayat (1) huruf h, jadi merupakan beda temporer yang dapat dikurangkan. PSAK 212 mengakui aset pajak tangguhan atas beda tersebut sepanjang kemungkinan besar tersedia laba kena pajak: 22% × 200.000.000 = Rp44.000.000 (Dr Aset pajak tangguhan / Cr Manfaat pajak tangguhan).",
        jejakHitung: [["Koreksi positif (Pasal 9 ayat (1) huruf c)", "Rp200.000.000"], ["Jenis beda", "temporer dapat dikurangkan (berbalik saat penghapusan)"], ["Aset pajak tangguhan = 22% × 200.000.000", "Rp44.000.000"], ["Syarat pengakuan PSAK 212", "kemungkinan besar ada laba kena pajak"]],
        mengapaSalah: { A: "Biaya fiskal di masa depan (saat penghapusan) mengurangi pajak masa depan, sehingga menimbulkan aset, bukan liabilitas", B: "Cadangan piutang berbalik saat piutang dihapus sesuai Pasal 6 ayat (1) huruf h, sehingga bukan beda tetap", C: "PSAK 212 justru mensyaratkan kemungkinan besar tersedianya laba kena pajak; aset pajak tangguhan tidak diakui 'tanpa memperhatikan' syarat itu" },
        jebakan: "Opsi C dan D memuat angka yang sama; bedanya hanya frasa syarat pengakuan, jadi baca kualifikasinya, bukan hanya angkanya."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c dan Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 212 Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B7-066", topik: "B7.4", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Sinar Busana Lestari (produsen garmen, peredaran bruto Rp140 miliar) pada Maret 2026 memberikan bingkisan Idulfitri berupa paket bahan makanan dan perlengkapan ibadah senilai Rp3.600.000 per orang kepada seluruh 400 pegawainya (total Rp1.440.000.000) dan membukukannya sebagai beban kesejahteraan pegawai. Pernyataan yang paling tepat mengenai perlakuan PPh atas pengeluaran tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Pengeluaran Rp1.440.000.000 dapat dikurangkan dari penghasilan bruto PT Sinar Busana sebagai biaya natura, dan nilai bingkisan dikecualikan dari objek PPh pegawai tanpa batasan nilai karena merupakan bingkisan hari raya keagamaan",
        B: "Pengeluaran Rp1.440.000.000 tidak dapat dikurangkan dari penghasilan bruto PT Sinar Busana karena berbentuk natura, dan nilai bingkisan dikecualikan dari objek PPh pegawai tanpa batasan nilai karena merupakan bingkisan hari raya keagamaan",
        C: "Pengeluaran Rp1.440.000.000 dapat dikurangkan dari penghasilan bruto PT Sinar Busana sebagai biaya natura, dan nilai bingkisan dikecualikan dari objek PPh pegawai hanya sampai Rp3.000.000 per pegawai per tahun, sehingga Rp600.000 per pegawai menjadi objek PPh Pasal 21",
        D: "Pengeluaran Rp1.440.000.000 dapat dikurangkan dari penghasilan bruto PT Sinar Busana sebagai biaya natura, dan seluruh nilai bingkisan Rp3.600.000 per pegawai merupakan objek PPh Pasal 21 yang dipotong pada Masa Pajak Maret 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sejak Tahun Pajak 2022 (UU HPP) natura dan kenikmatan yang merupakan biaya untuk mendapatkan, menagih, dan memelihara penghasilan dapat dikurangkan oleh pemberi kerja. Bagi pegawai natura adalah objek PPh, tetapi PMK 66/2023 mengecualikan bingkisan dari pemberi kerja dalam rangka hari raya keagamaan tanpa batasan nilai; batasan nilai per tahun hanya berlaku untuk bingkisan selain hari raya keagamaan.",
        jejakHitung: [],
        mengapaSalah: { B: "Natura yang tidak dapat dikurangkan adalah ketentuan sebelum Tahun Pajak 2022", C: "Batas nilai per tahun berlaku untuk bingkisan selain hari raya keagamaan, bukan bingkisan Idulfitri", D: "Bingkisan hari raya keagamaan termasuk natura yang dikecualikan dari objek PPh pegawai menurut PMK 66/2023" },
        jebakan: "Pasca-UU HPP perlakuan pemberi kerja dan pegawai tidak selalu berpasangan: di sini dapat dibiayakan tetapi bukan objek bagi pegawai."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf a dan Pasal 6 ayat (1) UU PPh s.t.d.t.d. UU 7/2021 (natura dapat dibiayakan)", berlakuSejak: "2022-01-01" }, { pasal: "PMK 66/2023 (natura dan kenikmatan yang dikecualikan)", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-067",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 16A ayat (1) UU PPN: Pajak yang terutang atas penyerahan Barang Kena Pajak dan/atau Jasa Kena Pajak kepada Pemungut Pajak Pertambahan Nilai, dipungut, disetor, dan dilaporkan oleh Pemungut Pajak Pertambahan Nilai.",
      stem: "PT Sarana Rel Teknik (PKP) pada 18 Juni 2026 menyerahkan suku cadang gerbong (bukan barang mewah) kepada PT Kereta Logistik Nusantara (Persero), BUMN yang telah ditetapkan sebagai Pemungut PPN dan termasuk BUMN tertentu yang memungut PPh Pasal 22 sebesar 1,5% dari harga pembelian tidak termasuk PPN. Harga jual Rp600.000.000 belum termasuk PPN; faktur pajak dibuat di Coretax pada 18 Juni 2026 dengan DPP nilai lain 11/12. Saat penyerahan PT Sarana menjurnal Dr Piutang usaha 666.000.000; Cr Penjualan 600.000.000; Cr PPN Keluaran 66.000.000. Pada 22 Juli 2026 pembeli melunasi tagihan setelah memungut PPN dan PPh Pasal 22. Berdasarkan kutipan tersebut, kode transaksi faktur, batas akhir pengunggahan faktur, dan jurnal pelunasan di PT Sarana yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kode 01; diunggah paling lambat 20 Juli 2026; Dr Kas 657.000.000; Dr PPh 22 dibayar di muka 9.000.000; Cr Piutang usaha 666.000.000", B: "Kode 03; diunggah paling lambat 20 Juli 2026; Dr Kas 591.000.000; Dr PPh 22 dibayar di muka 9.000.000; Dr PPN Keluaran 66.000.000; Cr Piutang usaha 666.000.000", C: "Kode 03; diunggah paling lambat 15 Juli 2026; Dr Kas 591.000.000; Dr PPh 22 dibayar di muka 9.000.000; Dr PPN Keluaran 66.000.000; Cr Piutang usaha 666.000.000", D: "Kode 03; diunggah paling lambat 20 Juli 2026; Dr Kas 591.000.000; Dr Beban PPh Pasal 22 9.000.000; Dr PPN Keluaran 66.000.000; Cr Piutang usaha 666.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "angka-usang", D: "final-nonfinal" },
      pembahasan: {
        inti: "Penyerahan kepada pemungut PPN selain instansi pemerintah memakai kode transaksi 03, dan faktur Coretax diunggah paling lambat tanggal 20 bulan berikutnya setelah tanggal pembuatan (20 Juli 2026). PPN Rp66.000.000 dipungut dan disetor pembeli (Pasal 16A), sehingga saat pelunasan PPN Keluaran yang semula dikredit dihapus dengan debit; PPh 22 1,5% × 600.000.000 = Rp9.000.000 tidak final dan menjadi kredit pajak (PPh 22 dibayar di muka). Kas = 666.000.000 − 66.000.000 − 9.000.000 = Rp591.000.000.",
        jejakHitung: [
          ["PPN = 12% × 11/12 × 600.000.000", "Rp66.000.000 (dipungut pembeli)"],
          ["PPh 22 = 1,5% × 600.000.000 (tanpa PPN)", "Rp9.000.000"],
          ["Kas = 666.000.000 − 66.000.000 − 9.000.000", "Rp591.000.000"],
          ["Batas unggah faktur 18 Juni 2026", "20 Juli 2026"]
        ],
        mengapaSalah: {
          A: "Kode 01 (atau kode 04 bila memakai DPP nilai lain 11/12) dipakai untuk penyerahan yang PPN-nya dipungut sendiri oleh penjual; penyerahan kepada pemungut PPN selain instansi pemerintah memakai kode 03, dan PPN-nya dipungut pembeli sehingga tidak ikut diterima penjual",
          C: "Tanggal 15 adalah batas unggah e-Faktur sebelum PER-11/PJ/2025",
          D: "PPh 22 yang dipungut BUMN tidak final; dicatat sebagai kredit pajak, bukan beban"
        },
        jebakan: "Pada kode 03 penjual tetap membuat dan mengunggah faktur serta melaporkan penyerahan, tetapi tidak menyetor PPN-nya."
      },
      dasarHukum: [{ pasal: "Pasal 16A ayat (1) UU PPN" }, { pasal: "PER-11/PJ/2025 (kode transaksi dan batas unggah faktur)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 22 UU PPh; PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B7-068", topik: "B7.8", tingkat: ["C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 4 ayat (1) huruf e UU PPN: Pajak Pertambahan Nilai dikenakan atas pemanfaatan Jasa Kena Pajak dari luar Daerah Pabean di dalam Daerah Pabean. Pasal 13 ayat (6) UU PPN (parafrase): Direktur Jenderal Pajak dapat menetapkan dokumen tertentu yang kedudukannya dipersamakan dengan Faktur Pajak.",
      stem: "PT Nusantara Data Analitika (PKP) memakai jasa konsultasi keamanan siber dari CyberShield Pte. Ltd. (Singapura, tidak mempunyai BUT di Indonesia) untuk kegiatan usahanya di Jakarta. Imbalan USD20.000 dibayar pada 14 Agustus 2026; kurs KMK dan kurs pembukuan pada tanggal itu sama, Rp16.300 per USD. CyberShield tidak menyampaikan Form DGT sebelum pembayaran, dan kontrak tidak memuat klausul gross-up. Berdasarkan kutipan tersebut, kewajiban perpajakan PT Nusantara atas transaksi ini yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 23 Rp6.520.000 dipotong dengan bukti potong BPPU; PPN atas pemanfaatan JKP dari luar Daerah Pabean Rp35.860.000 disetor sendiri paling lambat 15 September 2026 dan bukti setornya dapat dikreditkan sebagai Pajak Masukan",
        B: "PPh Pasal 26 Rp65.200.000 dipotong dengan bukti potong BPNR; PPN atas pemanfaatan JKP dari luar Daerah Pabean Rp35.860.000 disetor sendiri paling lambat 15 September 2026, tetapi tidak dapat dikreditkan karena tidak ada Faktur Pajak dari penyedia jasa",
        C: "PPh Pasal 26 Rp65.200.000 dipotong dengan bukti potong BPNR; PPN atas pemanfaatan JKP dari luar Daerah Pabean Rp35.860.000 disetor sendiri paling lambat 15 September 2026 dan bukti setornya dapat dikreditkan sebagai Pajak Masukan",
        D: "PPh Pasal 26 Rp65.200.000 dipotong dengan bukti potong BPNR; PPN atas pemanfaatan JKP dari luar Daerah Pabean Rp39.120.000 (12% × Rp326.000.000) disetor sendiri paling lambat 15 September 2026 dan bukti setornya dapat dikreditkan sebagai Pajak Masukan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Tanpa Form DGT, tarif P3B tidak dapat dipakai sehingga dipotong PPh Pasal 26 20% × (20.000 × 16.300) = Rp65.200.000 dengan bukti potong BPNR (WP luar negeri). PPN atas pemanfaatan JKP dari luar Daerah Pabean dipungut sendiri oleh penerima jasa: 12% × 11/12 × Rp326.000.000 = Rp35.860.000, disetor paling lambat tanggal 15 bulan berikutnya (15 September 2026); bukti penerimaan negaranya dipersamakan dengan Faktur Pajak sehingga dapat dikreditkan. Jurnal 14 Agustus: Dr Beban jasa konsultasi 326.000.000; Cr Utang PPh 26 65.200.000; Cr Kas 260.800.000; saat PPN disetor: Dr PPN Masukan 35.860.000 / Cr Kas 35.860.000.",
        jejakHitung: [["Imbalan dalam rupiah = 20.000 × 16.300", "Rp326.000.000"], ["PPh 26 = 20% × 326.000.000", "Rp65.200.000"], ["PPN = 12% × 11/12 × 326.000.000", "Rp35.860.000"], ["Kas ke CyberShield = 326.000.000 − 65.200.000", "Rp260.800.000"], ["Batas setor PPh 26 dan PPN JKP luar negeri", "15 September 2026"]],
        mengapaSalah: { A: "PPh 23 dan BPPU untuk penerima dalam negeri; CyberShield adalah WP luar negeri tanpa BUT", B: "Bukti setor PPN pemanfaatan JKP luar negeri adalah dokumen yang dipersamakan dengan Faktur Pajak (Pasal 13 ayat (6)) sehingga dapat dikreditkan", D: "DPP nilai lain 11/12 juga berlaku untuk pemanfaatan JKP dari luar Daerah Pabean (PMK 131/2024), sehingga beban efektifnya 11%" },
        jebakan: "Satu pembayaran ke luar negeri memicu dua kewajiban berbeda: PPh 26 dipotong dari vendor, PPN dipungut sendiri lalu dikreditkan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) huruf e, Pasal 9 ayat (8) huruf g, dan Pasal 13 ayat (6) UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 131/2024; PMK 81/2024; PER-11/PJ/2025 (BPNR)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-069", topik: "B7.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Cahaya Kemasan Lestari (PT biasa, terdaftar sejak 2012, tidak memanfaatkan PPh final UMKM; 140 pegawai; modal disetor Rp5.000.000.000) menyiapkan SPT Tahunan PPh Badan 2025. Peredaran bruto 2025 yang dipakai untuk Pasal 31E Rp32.000.000.000 dan penghasilan kena pajak setelah kompensasi kerugian Rp2.400.000.000. Catatan pajak 2025: PPh 22 impor bahan baku Rp62.000.000; PPh 23 atas jasa maklon yang dipotong pelanggan (BPPU diterima) Rp41.000.000; PPh 23 yang dipotong perusahaan atas jasa kebersihan dari vendor (BPPU diterbitkan perusahaan) Rp9.000.000; PPh 21 pegawai yang dipotong sepanjang 2025 Rp118.000.000; PPh final atas sewa gudang milik perusahaan yang dipotong penyewa Rp12.000.000; angsuran PPh 25 Rp26.000.000 per bulan selama 12 bulan; STP bunga keterlambatan PPh 25 Rp2.500.000 yang telah dibayar; serta PPN kurang bayar Masa Desember 2025 Rp57.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp73.400.000", B: "Rp64.400.000", C: "Rp70.900.000", D: "Rp61.400.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Peredaran bruto Rp32 miliar ≤ Rp50 miliar sehingga Pasal 31E berlaku: PKP fasilitas = 4,8/32 × 2.400.000.000 = Rp360.000.000 (tarif 11%), sisanya Rp2.040.000.000 tarif 22%; PPh terutang Rp488.400.000. Kredit pajak hanya PPh yang dipungut/dipotong pihak lain atas penghasilan perusahaan dan angsuran PPh 25: 62.000.000 + 41.000.000 + 312.000.000 = Rp415.000.000. PPh 29 = Rp73.400.000. Data lain (PPh 21 pegawai, PPh 23 yang dipotong perusahaan dari vendor, PPh final, STP, PPN, jumlah pegawai, modal) tidak dipakai.",
        jejakHitung: [["PKP fasilitas = 4.800.000.000/32.000.000.000 × 2.400.000.000", "Rp360.000.000"], ["PPh fasilitas = 50% × 22% × 360.000.000", "Rp39.600.000"], ["PPh non-fasilitas = 22% × 2.040.000.000", "Rp448.800.000"], ["PPh terutang", "Rp488.400.000"], ["Kredit = 62.000.000 + 41.000.000 + 12 × 26.000.000", "Rp415.000.000"], ["PPh 29 = 488.400.000 − 415.000.000", "Rp73.400.000"]],
        mengapaSalah: { B: "PPh 23 yang dipotong perusahaan dari vendor adalah utang perusahaan dan kredit pajak milik vendor (73.400.000 − 9.000.000)", C: "Sanksi bunga STP bukan pelunasan pajak dan tidak dapat dikreditkan (73.400.000 − 2.500.000)", D: "PPh final atas sewa gudang (Pasal 4 ayat (2)) tidak dapat dikreditkan (73.400.000 − 12.000.000)" },
        jebakan: "Pilah dulu 'dipotong pihak lain atas penghasilan kita' (kredit pajak) dari 'kita yang memotong' (utang) dan pembayaran yang bukan pajak terutang; tiga opsi lain hanya selisih satu pos."
      },
      dasarHukum: [{ pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "B7-070", topik: "B7.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mulia Cetak Grafika (peredaran bruto 2025 Rp70 miliar; 230 pegawai; tahun buku kalender) memiliki mesin cetak digital Kelompok 2 yang diperoleh dan mulai dipakai pada Januari 2022 dengan harga perolehan Rp640.000.000. Untuk fiskal mesin disusutkan garis lurus 12,5%; untuk komersial garis lurus 5 tahun dengan nilai residu Rp40.000.000. Pada 1 Oktober 2025 mesin dijual kepada PT Prima Offset (tidak mempunyai hubungan istimewa) seharga Rp300.000.000 belum termasuk PPN Rp33.000.000 (faktur kode 09), padahal laporan KJPP menyebut nilai pasarnya Rp330.000.000. Kebijakan taat asas perusahaan, baik komersial maupun fiskal: penyusutan tahun penjualan dihitung sampai dengan bulan sebelum bulan penjualan. Pada November 2025 dibeli mesin pengganti Rp900.000.000. Laporan laba rugi 2025 memuat 'laba penjualan aset tetap' Rp110.000.000. Koreksi fiskal atas laba penjualan mesin lama dalam rekonsiliasi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi negatif Rp120.000.000", B: "Koreksi negatif Rp110.000.000", C: "Koreksi negatif Rp130.000.000", D: "Koreksi negatif Rp150.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Laba komersial Rp110.000.000 diganti dengan keuntungan atau kerugian fiskal = harga jual sebenarnya − nilai sisa buku fiskal (Pasal 11 ayat (8); harga sebenarnya karena tidak ada hubungan istimewa, Pasal 10 ayat (1)). Nilai sisa buku fiskal = 640.000.000 − (3 × 80.000.000 + 9/12 × 80.000.000) = Rp340.000.000, sehingga terdapat rugi fiskal Rp40.000.000. Koreksi = −40.000.000 − 110.000.000 = koreksi negatif Rp150.000.000.",
        jejakHitung: [["Penyusutan fiskal per tahun = 12,5% × 640.000.000", "Rp80.000.000"], ["Akumulasi fiskal s.d. September 2025 = 3 × 80.000.000 + 9/12 × 80.000.000", "Rp300.000.000"], ["Nilai sisa buku fiskal = 640.000.000 − 300.000.000", "Rp340.000.000"], ["Rugi fiskal = 300.000.000 − 340.000.000", "(Rp40.000.000)"], ["Cek komersial: nilai buku = 640.000.000 − (3 × 120.000.000 + 90.000.000) = 190.000.000; laba 110.000.000", "sesuai laporan"], ["Koreksi = −40.000.000 − 110.000.000", "koreksi negatif Rp150.000.000"]],
        mengapaSalah: { A: "Nilai pasar KJPP hanya relevan bila ada hubungan istimewa; transaksi wajar memakai harga sebenarnya Rp300.000.000 (330 − 340 = −10 juta; koreksi −120 juta)", B: "Hanya mengeluarkan laba komersial dan lupa mengakui rugi fiskal Rp40.000.000", C: "Penyusutan fiskal 2025 dihitung setahun penuh sehingga nilai sisa buku Rp320.000.000 dan rugi fiskal hanya Rp20.000.000, bertentangan dengan kebijakan taat asas di soal" },
        jebakan: "PPN, kode faktur, nilai KJPP, mesin pengganti, dan jumlah pegawai tidak dipakai; yang menentukan hanya nilai sisa buku fiskal dan harga jual sebenarnya."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (1) dan Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-071",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B7-09",
      stem: "Vignette PT Sumber Tirta Energi (1/2). PT Sumber Tirta Energi (PKP; pengusaha SPBU Pertamina yang bertindak sebagai penyalur BBM; tahun buku kalender) pada 8 Juni 2026 membeli BBM nonsubsidi dari PT Nusa Petro Niaga (anak perusahaan Pertamina; produsen/importir BBM yang ditunjuk sebagai pemungut PPh Pasal 22) seharga Rp600.000.000 belum termasuk PPN, dengan faktur pajak kode 04 (DPP nilai lain 11/12). Pada hari yang sama PT Nusa Petro juga menjual solar industri Rp400.000.000 kepada PT Tambang Batu Raya yang memakainya sendiri untuk alat berat. PT Sumber Tirta membayar tunai seluruh tagihan, termasuk PPh Pasal 22 yang dipungut penjual. Jurnal pembelian BBM di PT Sumber Tirta yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dr Persediaan BBM 600.000.000; Dr PPN Masukan 66.000.000; Dr PPh Pasal 22 dibayar di muka 1.500.000; Cr Kas 667.500.000", B: "Dr Persediaan BBM 600.000.000; Dr PPN Masukan 66.000.000; Dr Beban PPh Pasal 22 final 1.800.000; Cr Kas 667.800.000", C: "Dr Persediaan BBM 600.000.000; Dr PPN Masukan 66.000.000; Dr Beban PPh Pasal 22 final 1.500.000; Cr Kas 667.500.000", D: "Dr Persediaan BBM 600.000.000; Dr PPN Masukan 72.000.000; Dr Beban PPh Pasal 22 final 1.500.000; Cr Kas 673.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Bagi penyalur/agen (SPBU Pertamina), PPh Pasal 22 atas pembelian BBM dari Pertamina atau anak perusahaannya (produsen/importir) bertarif 0,25% dari harga tanpa PPN dan bersifat final, sehingga dicatat sebagai beban pajak final, bukan PPh dibayar di muka. PPN Masukan = 12% × 11/12 × 600.000.000 = Rp66.000.000. PPh 22 dipungut penjual di atas harga, sehingga kas = 600.000.000 + 66.000.000 + 1.500.000 = Rp667.500.000.",
        jejakHitung: [
          ["PPN = 12% × 11/12 × 600.000.000", "Rp66.000.000"],
          ["PPh 22 SPBU Pertamina = 0,25% × 600.000.000", "Rp1.500.000"],
          ["Kas = 600.000.000 + 66.000.000 + 1.500.000", "Rp667.500.000"],
          ["Sifat PPh 22 bagi penyalur", "final → beban, tidak dikreditkan"],
          ["Solar industri PT Tambang (0,3%, tidak final)", "data berlebih"]
        ],
        mengapaSalah: {
          A: "PPh 22 BBM bagi penyalur/agen bersifat final sehingga tidak boleh dicatat sebagai kredit pajak; perlakuan kredit hanya untuk pembeli selain penyalur seperti PT Tambang",
          B: "Tarif 0,3% untuk SPBU yang membeli BBM bukan dari Pertamina atau anak perusahaannya, atau pembeli selain SPBU; PT Sumber Tirta adalah SPBU Pertamina yang membeli dari anak perusahaan Pertamina (0,25%)",
          D: "Memakai 12% × harga penuh; BBM nonsubsidi bukan barang mewah sehingga DPP nilai lain 11/12 (efektif 11%)"
        },
        jebakan: "Tarif 0,25% vs 0,3% dan sifat final vs kredit bergantung pada siapa pembelinya; data PT Tambang disisipkan untuk memancing tarif dan perlakuan yang tertukar."
      },
      dasarHukum: [{ pasal: "Pasal 22 UU PPh; Pasal 3 ayat (1) huruf c angka 1 dan Pasal 10 ayat (2) PMK 51/2025 (PPh Pasal 22 BBM; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-072",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B7-09",
      stem: "Vignette PT Sumber Tirta Energi (2/2). Selain menjalankan SPBU Pertamina sebagai penyalur (PPh Pasal 22 atas pembelian BBM bersifat final), PT Sumber Tirta (PT biasa; tidak memakai PPh final UMKM) menyewakan ruang minimarket di area SPBU dan membuka usaha cuci kendaraan. Data Tahun Pajak 2025: penjualan BBM Rp47.400.000.000 dengan laba neto setelah HPP dan seluruh biaya langsung SPBU Rp900.000.000; pendapatan sewa ruang minimarket Rp120.000.000 (PPh final 10% dipotong penyewa); pendapatan jasa cuci kendaraan Rp480.000.000 dengan biaya Rp300.000.000; beban sanksi bunga STP Rp4.000.000; dan sumbangan untuk panitia perayaan HUT RI di desa setempat Rp36.000.000. Laba sebelum pajak Rp1.160.000.000; tidak ada sisa kerugian; seluruh penghasilan lain dan biaya umum sudah tercakup dalam angka tersebut. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp37.620.000", B: "Rp19.800.000", C: "Rp29.260.000", D: "Rp39.600.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Laba neto penjualan BBM (sudah dikenai PPh 22 final bagi penyalur) dan sewa ruang (PPh final 10%) dikeluarkan beserta biayanya; sanksi dan sumbangan yang bukan sumbangan yang diperkenankan dikoreksi positif, sehingga PKP = Rp180.000.000. Peredaran bruto untuk Pasal 31E mencakup seluruh penghasilan, termasuk yang final: Rp48 miliar ≤ Rp50 miliar, sehingga bagian PKP 4,8/48 dikenai 11% dan sisanya 22%. PPh terutang Rp37.620.000.",
        jejakHitung: [
          ["Neto fiskal = 1.160.000.000 − 900.000.000 − 120.000.000 + 4.000.000 + 36.000.000", "Rp180.000.000"],
          ["Peredaran bruto 31E = 47.400.000.000 + 120.000.000 + 480.000.000", "Rp48.000.000.000"],
          ["PKP fasilitas = 4,8/48 × 180.000.000", "Rp18.000.000"],
          ["PPh = 11% × 18.000.000 + 22% × 162.000.000", "1.980.000 + 35.640.000"],
          ["PPh terutang", "Rp37.620.000"]
        ],
        mengapaSalah: {
          B: "Peredaran bruto Pasal 31E bukan hanya penghasilan bertarif umum (Rp480 juta); termasuk penghasilan final (SE-02/PJ/2015), sehingga omzet Rp48 miliar dan fasilitas hanya untuk bagian 4,8/48",
          C: "Lupa mengoreksi positif sanksi STP dan sumbangan panitia HUT (bukan sumbangan yang diperkenankan Pasal 6 ayat (1)), sehingga PKP hanya Rp140.000.000",
          D: "Mengabaikan Pasal 31E padahal peredaran bruto Rp48 miliar ≤ Rp50 miliar"
        },
        jebakan: "Dua langkah sekaligus: keluarkan penghasilan final dari PKP, tetapi tetap hitung penghasilan final itu dalam peredaran bruto untuk menentukan porsi Pasal 31E."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) dan Pasal 22 UU PPh; Pasal 225 ayat (2) huruf a PMK 81/2024 (sampai 31 Juli 2025) dan Pasal 3 ayat (1) huruf c angka 1 serta Pasal 10 ayat (2) huruf a PMK 51/2025 (PPh Pasal 22 final bagi penyalur BBM)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 9 ayat (1) huruf g dan k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015; Lampiran 8 SPT Tahunan PPh Badan PER-11/PJ/2025", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B7-073",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 5A ayat (1) UU PPN: Pajak Pertambahan Nilai atau Pajak Pertambahan Nilai dan Pajak Penjualan atas Barang Mewah atas penyerahan Barang Kena Pajak yang dikembalikan dapat dikurangkan dari Pajak Pertambahan Nilai atau Pajak Pertambahan Nilai dan Pajak Penjualan atas Barang Mewah yang terutang dalam Masa Pajak terjadinya pengembalian Barang Kena Pajak tersebut.",
      stem: "PT Sinar Logam Niaga (PKP, distributor besi beton; bukan industri baja) pada 12 Mei 2026 menyerahkan 40 ton besi beton kepada PT Mitra Bangun Persada (PKP, bukan pemungut PPN) seharga Rp480.000.000 belum termasuk PPN dengan faktur pajak kode 04 (DPP nilai lain 11/12); pembayaran jatuh tempo 30 hari. Pada 3 Juni 2026, 5 ton senilai Rp60.000.000 dikembalikan karena tidak sesuai spesifikasi, dan PT Mitra Bangun membuat nota retur melalui Coretax pada tanggal yang sama. SPT Masa PPN Mei 2026 PT Sinar Logam telah disampaikan pada 25 Juni 2026. Berdasarkan kutipan tersebut, perlakuan PPN dan jurnal retur di PT Sinar Logam yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengurangkan PPN Keluaran Masa Mei 2026 sebesar Rp6.600.000 melalui pembetulan SPT Masa PPN Mei 2026; jurnal: Dr Retur penjualan 60.000.000; Dr PPN Keluaran 6.600.000; Cr Piutang usaha 66.600.000", B: "Mengurangkan PPN Keluaran Masa Juni 2026 sebesar Rp7.200.000; jurnal: Dr Retur penjualan 60.000.000; Dr PPN Keluaran 7.200.000; Cr Piutang usaha 67.200.000", C: "Mengurangkan PPN Keluaran Masa Juni 2026 sebesar Rp6.600.000; jurnal: Dr Retur penjualan 66.600.000; Cr Piutang usaha 66.600.000", D: "Mengurangkan PPN Keluaran Masa Juni 2026 sebesar Rp6.600.000; jurnal: Dr Retur penjualan 60.000.000; Dr PPN Keluaran 6.600.000; Cr Piutang usaha 66.600.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN atas BKP yang dikembalikan dikurangkan dari PPN terutang pada Masa Pajak terjadinya pengembalian (Juni 2026), bukan dengan membetulkan Masa Mei. PPN retur = 12% × 11/12 × 60.000.000 = Rp6.600.000. Karena piutang semula dicatat termasuk PPN, retur mengurangi piutang Rp66.600.000, mengurangi PPN Keluaran Rp6.600.000, dan dicatat sebagai retur penjualan Rp60.000.000. Di pihak pembeli, PPN Masukan Masa Juni dikurangi sebesar yang sama.",
        jejakHitung: [
          ["PPN atas retur = 12% × 11/12 × 60.000.000", "Rp6.600.000"],
          ["Piutang yang dikurangi = 60.000.000 + 6.600.000", "Rp66.600.000"],
          ["Masa pengurangan", "Juni 2026 (bulan pengembalian)"]
        ],
        mengapaSalah: {
          A: "Pengurangan dilakukan pada Masa terjadinya pengembalian, bukan dengan membetulkan SPT Masa penyerahan; SPT Masa Mei tetap benar",
          B: "Memakai 12% × harga penuh; besi beton bukan barang mewah sehingga PPN efektif 11% dari harga",
          C: "PPN Keluaran yang semula dikredit tidak dikurangi, sehingga liabilitas PPN tetap terlalu besar dan retur penjualan tercatat termasuk PPN"
        },
        jebakan: "Tanggal penyampaian SPT Masa Mei disisipkan untuk memancing pembetulan; retur selalu masuk Masa pengembalian."
      },
      dasarHukum: [{ pasal: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (nota retur di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B7-074",
      topik: "B7.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Cahaya Retail Nusantara (PKP, distributor barang konsumsi; seluruh penyerahan di dalam negeri kepada pembeli yang bukan pemungut PPN; tidak melakukan ekspor; sudah beroperasi normal) pada Masa Pajak Mei 2026 mencatat PPN Keluaran Rp210.000.000 dan PPN Masukan yang dapat dikreditkan Rp258.000.000 karena menimbun stok menjelang musim liburan. Tidak ada kelebihan dari masa sebelumnya. Pernyataan yang paling tepat mengenai pencatatan dan penyelesaian selisih tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Jurnal penutupan masa Dr PPN Keluaran 210.000.000; Dr PPN lebih bayar 48.000.000; Cr PPN Masukan 258.000.000, dan kelebihan Rp48.000.000 dapat langsung dimintakan pengembalian dalam SPT Masa PPN Mei 2026 karena berasal dari pembelian stok", B: "Jurnal penutupan masa Dr PPN Keluaran 210.000.000; Dr PPN lebih bayar 48.000.000; Cr PPN Masukan 258.000.000, dan kelebihan Rp48.000.000 dikompensasikan ke Masa Pajak berikutnya; permohonan pengembalian baru dapat diajukan pada akhir tahun buku", C: "Jurnal penutupan masa Dr PPN Keluaran 210.000.000; Dr Beban PPN 48.000.000; Cr PPN Masukan 258.000.000, karena kelebihan Pajak Masukan atas Pajak Keluaran tidak dapat dikreditkan", D: "Jurnal penutupan masa Dr PPN Keluaran 210.000.000; Dr PPN lebih bayar 48.000.000; Cr PPN Masukan 258.000.000, dan kelebihan Rp48.000.000 hanya dapat dikompensasikan paling lama tiga Masa Pajak berikutnya, sisanya dibebankan" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Kelebihan Pajak Masukan dicatat sebagai aset (PPN lebih bayar) dan dikompensasikan ke Masa Pajak berikutnya (Pasal 9 ayat (4) UU PPN). Pengembalian setiap Masa Pajak hanya dapat diminta PKP dalam Pasal 9 ayat (4b): yang mengekspor BKP berwujud, BKP tidak berwujud, atau JKP; yang menyerahkan BKP/JKP kepada pemungut PPN; atau yang menyerahkan BKP/JKP yang PPN-nya tidak dipungut (huruf f, PKP dalam tahap belum berproduksi, dihapus UU 11/2020 sejak 2 November 2020). PKP lain, seperti distributor dalam negeri ini, hanya dapat mengajukan permohonan pengembalian pada akhir tahun buku (ayat (4a)).",
        jejakHitung: [
          ["PPN Masukan − PPN Keluaran = 258.000.000 − 210.000.000", "Rp48.000.000 lebih bayar"],
          ["Jurnal penutupan masa: Dr PPN Keluaran 210.000.000 + Dr PPN lebih bayar 48.000.000 = Cr PPN Masukan", "Rp258.000.000 (seimbang)"],
          ["Distributor dalam negeri, bukan PKP Pasal 9 ayat (4b) UU PPN", "Dikompensasikan ke Masa Juni 2026; restitusi baru pada akhir tahun buku"]
        ],
        mengapaSalah: {
          A: "Pengembalian setiap Masa Pajak hanya untuk PKP tertentu dalam Pasal 9 ayat (4b); distributor dalam negeri ini tidak termasuk",
          C: "Pajak Masukan yang memenuhi syarat tetap dapat dikreditkan walaupun melebihi Pajak Keluaran; kelebihannya aset, bukan beban",
          D: "Batas tiga Masa Pajak (Pasal 9 ayat (9)) berlaku bagi Pajak Masukan yang belum dikreditkan pada masa perolehannya, bukan bagi kompensasi kelebihan yang sudah dilaporkan"
        },
        jebakan: "Bedakan kompensasi kelebihan (ayat (4)–(4a)) dari pengkreditan Pajak Masukan yang tertunda paling lama tiga masa (ayat (9))."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4) dan (4a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 9 ayat (4b) UU PPN s.t.d.d. UU 11/2020 (huruf f dihapus)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 9 ayat (9) UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "B7-075", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2,
      kutipan: "Pasal 11 ayat (2) UU PPN (parafrase): dalam hal pembayaran diterima sebelum penyerahan Barang Kena Pajak atau Jasa Kena Pajak, saat terutangnya pajak adalah pada saat pembayaran. Pasal 13 ayat (1a) huruf b: Faktur Pajak dibuat pada saat penerimaan pembayaran dalam hal penerimaan pembayaran terjadi sebelum penyerahan.",
      stem: "PT Prima Interior Nusantara (PKP, produsen furnitur kantor; pembukuan akrual) menandatangani kontrak pengadaan 300 set meja dan kursi kantor (penyerahan barang, bukan jasa konstruksi) dengan PT Graha Asuransi Mandiri (bukan pemungut PPN) senilai Rp900.000.000 belum termasuk PPN. Pada 20 Juni 2026 PT Prima menerima uang muka 30% sebesar Rp270.000.000 ditambah PPN-nya; barang diserahkan seluruhnya pada 10 September 2026 dan sisa tagihan dilunasi 10 Oktober 2026. Berdasarkan kutipan tersebut, jurnal penerimaan uang muka dan Masa Pajak PPN-nya yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Kas 299.700.000; Cr Pendapatan penjualan 270.000.000; Cr PPN Keluaran 29.700.000; faktur pajak dibuat 20 Juni 2026 dan dilaporkan dalam SPT Masa PPN Juni 2026",
        B: "Dr Kas 270.000.000; Cr Uang muka penjualan 270.000.000; PPN atas seluruh kontrak baru terutang dan difakturkan pada Masa September 2026 saat barang diserahkan",
        C: "Dr Kas 299.700.000; Cr Uang muka penjualan 270.000.000; Cr PPN Keluaran 29.700.000; faktur pajak dibuat 20 Juni 2026 dan dilaporkan dalam SPT Masa PPN Juni 2026",
        D: "Dr Kas 302.400.000; Cr Uang muka penjualan 270.000.000; Cr PPN Keluaran 32.400.000; faktur pajak dibuat 20 Juni 2026 dan dilaporkan dalam SPT Masa PPN Juni 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pembayaran mendahului penyerahan, sehingga PPN atas uang muka terutang dan faktur dibuat saat uang diterima (20 Juni 2026): 12% × 11/12 × 270.000.000 = Rp29.700.000, dilaporkan dalam SPT Masa PPN Juni 2026. Secara akuntansi dan PPh, uang muka adalah liabilitas karena kewajiban pelaksanaan baru dipenuhi saat penyerahan September 2026; pendapatan Rp900.000.000 diakui pada 2026 saat barang diserahkan. PPN atas sisa Rp630.000.000 terutang pada penyerahan 10 September 2026.",
        jejakHitung: [["PPN uang muka = 12% × 11/12 × 270.000.000", "Rp29.700.000"], ["Kas diterima = 270.000.000 + 29.700.000", "Rp299.700.000"], ["PPN sisa saat penyerahan = 12% × 11/12 × 630.000.000", "Rp69.300.000 (Masa September 2026)"]],
        mengapaSalah: { A: "Uang muka belum memenuhi kewajiban pelaksanaan; pendapatan baru diakui saat barang diserahkan (PSAK 115 dan akrual fiskal)", B: "Pasal 11 ayat (2): pembayaran sebelum penyerahan membuat PPN terutang saat pembayaran, sehingga uang muka harus difakturkan pada Juni", D: "Memakai 12% × harga penuh; furnitur kantor bukan barang mewah (efektif 11%)" },
        jebakan: "PPN mengikuti kas yang mendahului penyerahan, sedangkan pendapatan (akuntansi dan PPh) mengikuti penyerahan — dua saat berbeda untuk satu transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) dan Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024", berlakuSejak: "2025-01-01" }, { pasal: "PSAK 115 (pengakuan pendapatan)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-076", topik: "B7.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sentosa Agro Niaga (distributor pupuk nonsubsidi; tahun buku kalender) menilai persediaan dengan metode rata-rata tertimbang periodik secara taat asas. Data 2025: persediaan awal 2.000 sak @ Rp150.000; pembelian Februari 6.000 sak @ Rp160.000; pembelian Agustus 4.000 sak @ Rp172.500. Selama 2025 terjual 9.000 sak; 500 sak rusak terendam banjir dan dimusnahkan dengan berita acara pemusnahan yang disaksikan pihak independen; sisa 2.500 sak. Nilai realisasi neto persediaan akhir pada 31 Desember 2025 Rp380.000.000. Laporan laba rugi komersial memuat HPP Rp1.462.500.000, kerugian pemusnahan persediaan Rp81.250.000, dan kerugian penurunan nilai persediaan Rp26.250.000. Seluruh pembelian dilengkapi faktur pajak dan PPN Masukannya telah dikreditkan. Koreksi fiskal 2025 atas pos persediaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp26.250.000", B: "Koreksi positif Rp107.500.000", C: "Tidak ada koreksi", D: "Koreksi positif Rp51.250.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Rata-rata tertimbang diperkenankan Pasal 10 ayat (6) sepanjang taat asas: harga rata-rata = 1.950.000.000 / 12.000 = Rp162.500, sehingga HPP Rp1.462.500.000 sudah benar. Kerugian pemusnahan karena bencana yang didukung berita acara adalah kerugian nyata yang dapat dibiayakan. Hanya penurunan nilai ke NRV (belum terealisasi) yang tidak diakui fiskal: koreksi positif Rp26.250.000 (beda temporer).",
        jejakHitung: [["Biaya tersedia = 300.000.000 + 960.000.000 + 690.000.000", "Rp1.950.000.000"], ["Rata-rata = 1.950.000.000 / 12.000 sak", "Rp162.500"], ["HPP = 9.000 × 162.500", "Rp1.462.500.000"], ["Pemusnahan = 500 × 162.500 (berita acara)", "Rp81.250.000 — biaya fiskal"], ["Persediaan akhir = 2.500 × 162.500 = 406.250.000; NRV 380.000.000", "penurunan Rp26.250.000"], ["Koreksi positif", "Rp26.250.000"]],
        mengapaSalah: { B: "Kerugian pemusnahan karena bencana yang didukung berita acara adalah kerugian nyata yang dapat dibiayakan, bukan cadangan", C: "Penurunan nilai ke NRV belum terealisasi; fiskal baru mengakuinya saat persediaan dijual atau dimusnahkan", D: "Fiskal tidak mewajibkan FIFO; rata-rata yang dipakai taat asas diperkenankan sehingga HPP tidak perlu dihitung ulang (selisih FIFO Rp25.000.000)" },
        jebakan: "Pemusnahan (terealisasi) boleh dibiayakan; penurunan nilai (belum terealisasi) dikoreksi — keduanya sama-sama tampil sebagai 'kerugian persediaan' di laporan komersial."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 202 (persediaan; nilai realisasi neto)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-077", topik: "B7.2", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-B7-10",
      kutipan: "Pasal 6 ayat (1) huruf h UU PPh: piutang yang nyata-nyata tidak dapat ditagih dapat dikurangkan dengan syarat (1) telah dibebankan sebagai biaya dalam laporan laba rugi komersial; (2) Wajib Pajak menyerahkan daftar piutang yang tidak dapat ditagih kepada Direktorat Jenderal Pajak; dan (3) perkara penagihannya telah diserahkan kepada Pengadilan Negeri atau instansi pemerintah yang menangani piutang negara, atau ada perjanjian tertulis penghapusan piutang/pembebasan utang, atau telah dipublikasikan dalam penerbitan umum atau khusus, atau ada pengakuan debitur bahwa utangnya telah dihapuskan.",
      stem: "Vignette PT Delta Niaga Elektronika (1/2). PT Delta Niaga Elektronika (distributor; bukan bank atau lembaga pembiayaan; peredaran bruto 2025 Rp96 miliar) tidak memakai metode penyisihan. Pada Desember 2025 perusahaan langsung membebankan ke laba rugi penghapusan empat piutang dagang: (i) PT Arunika Retail Rp120.000.000 — ada perjanjian tertulis penghapusan piutang yang ditandatangani kedua pihak; (ii) Toko Sumber Jaya Rp45.000.000 — baru dikirimi tiga surat somasi; (iii) CV Mandala Teknik Rp80.000.000 — penghapusannya diumumkan dalam surat kabar berskala nasional; (iv) PT Bintang Elektrik Rp60.000.000 — dinilai tidak tertagih berdasarkan memo internal bagian penagihan, tanpa tindakan hukum. Piutang (i) dan (iii) dicantumkan dalam daftar piutang yang dilampirkan pada SPT Tahunan 2025. Berdasarkan kutipan tersebut, koreksi fiskal 2025 atas beban penghapusan piutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp45.000.000", B: "Koreksi positif Rp185.000.000", C: "Koreksi positif Rp60.000.000", D: "Koreksi positif Rp105.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Biaya fiskal hanya penghapusan yang memenuhi ketiga syarat: (i) perjanjian tertulis penghapusan dan (iii) publikasi dalam penerbitan umum — keduanya dibebankan komersial dan tercantum dalam daftar piutang — Rp200.000.000. Somasi (ii) dan memo internal (iv) tidak memenuhi syarat angka (3). Koreksi positif = 305.000.000 − 200.000.000 = Rp105.000.000.",
        jejakHitung: [["Beban komersial = 120 + 45 + 80 + 60 (juta)", "Rp305.000.000"], ["Memenuhi syarat: (i) perjanjian + (iii) publikasi", "Rp200.000.000"], ["Koreksi positif = 305.000.000 − 200.000.000", "Rp105.000.000"]],
        mengapaSalah: { A: "Hanya mengoreksi piutang yang disomasi; piutang PT Bintang yang hanya didukung memo internal juga belum memenuhi syarat", B: "Publikasi penghapusan dalam penerbitan umum adalah salah satu syarat alternatif yang sah, sehingga piutang CV Mandala dapat dibiayakan", C: "Surat somasi bukan penyerahan perkara ke pengadilan negeri, perjanjian, publikasi, atau pengakuan debitur" },
        jebakan: "Syarat angka (3) bersifat alternatif — cukup salah satu — tetapi somasi dan memo internal bukan salah satunya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 207/PMK.010/2015" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-078", topik: "B7.4", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-B7-10",
      stem: "Vignette PT Delta Niaga Elektronika (2/2). PT Arunika Retail (WP badan dalam negeri; peredaran bruto 2025 Rp18 miliar) adalah debitur yang utang dagangnya kepada PT Delta Niaga sebesar Rp120.000.000 dihapuskan berdasarkan perjanjian tertulis pada Desember 2025 karena PT Arunika mengalami kesulitan likuiditas. PT Arunika masih beroperasi, dan pembebasan itu tidak diberikan oleh bank. Pernyataan yang paling tepat mengenai perlakuan di PT Arunika adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Jurnal Dr Utang usaha 120.000.000; Cr Tambahan modal disetor 120.000.000, karena pembebasan utang dari pemasok dicatat di ekuitas sehingga bukan objek PPh",
        B: "Jurnal Dr Utang usaha 120.000.000; Cr Keuntungan pembebasan utang 120.000.000; keuntungan itu objek PPh tarif umum dan tidak dikoreksi negatif dalam rekonsiliasi fiskal 2025",
        C: "Jurnal Dr Utang usaha 120.000.000; Cr Keuntungan pembebasan utang 120.000.000; keuntungan itu dikenai PPh final 10% dan dikoreksi negatif dalam rekonsiliasi fiskal 2025",
        D: "Jurnal Dr Utang usaha 120.000.000; Cr Keuntungan pembebasan utang 120.000.000; karena kreditur telah membiayakan penghapusannya, keuntungan itu bukan objek PPh bagi debitur dan dikoreksi negatif"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 4 ayat (1) huruf k UU PPh: keuntungan karena pembebasan utang, kecuali sampai jumlah tertentu yang ditetapkan PP, adalah objek PPh. Pembebasan oleh pemasok kepada PT yang masih beroperasi menjadi penghasilan bertarif umum; pengecualian debitur kecil tidak berlaku. Simetrinya: kreditur membiayakan penghapusan (Pasal 6 ayat (1) huruf h), debitur mengakui penghasilan.",
        jejakHitung: [],
        mengapaSalah: { A: "Pembebasan utang oleh pemasok bukan setoran modal; tambahan modal disetor hanya timbul dari pemegang saham dalam kapasitasnya sebagai pemilik", C: "Tidak ada ketentuan PPh final atas keuntungan pembebasan utang; penghasilan ini dikenai tarif umum", D: "Pembiayaan oleh kreditur justru berpasangan dengan pengakuan penghasilan oleh debitur; tidak ada pengecualian karena kreditur membiayakannya" },
        jebakan: "Satu perjanjian penghapusan menghasilkan dua sisi: biaya bagi kreditur (bila syarat terpenuhi) dan penghasilan bagi debitur."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-079",
      topik: "B7.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Gemilang Edukasi Digital (penyelenggara kursus daring; tahun buku kalender; peredaran bruto Rp74 miliar) dalam laporan laba rugi komersial 2025 membebankan seluruh pembayaran berikut pada tahun pembayaran: (1) sewa ruko kantor untuk 24 bulan (1 Mei 2025–30 April 2027) Rp480.000.000, dibayar sekaligus pada 28 April 2025 dengan PPh final 10% Rp48.000.000 dipotong perusahaan; dan (2) sewa papan reklame di jalan tol untuk 18 bulan (1 Juli 2025–31 Desember 2026) Rp108.000.000, dibayar sekaligus pada 1 Juli 2025. Sewa mobil operasional 12 bulan sejak 1 Oktober 2025 Rp144.000.000 (PPh 23 2% dipotong) dibebankan proporsional Rp36.000.000 pada 2025. Total koreksi fiskal positif 2025 atas pos-pos tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp392.000.000", B: "Rp320.000.000", C: "Rp372.000.000", D: "Rp312.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengeluaran yang bermanfaat lebih dari satu tahun dibebankan sesuai masa manfaatnya (Pasal 9 ayat (2)). Sewa ruko: biaya fiskal 2025 = 480.000.000 × 8/24 = Rp160.000.000 (Mei–Desember), koreksi Rp320.000.000. Reklame: 108.000.000 × 6/18 = Rp36.000.000, koreksi Rp72.000.000. Sewa mobil sudah proporsional. Total koreksi positif Rp392.000.000 (beda temporer). PPh final sewa tetap dipotong atas seluruh pembayaran saat dibayar.",
        jejakHitung: [
          ["Sewa ruko: 480.000.000 × 8/24", "Rp160.000.000 biaya 2025"],
          ["Koreksi ruko = 480.000.000 − 160.000.000", "Rp320.000.000"],
          ["Reklame: 108.000.000 × 6/18", "Rp36.000.000 biaya 2025"],
          ["Koreksi reklame = 108.000.000 − 36.000.000", "Rp72.000.000"],
          ["Sewa mobil (sudah proporsional)", "Rp0"],
          ["Total koreksi positif", "Rp392.000.000"]
        ],
        mengapaSalah: {
          B: "Sewa reklame 18 bulan juga bermanfaat lebih dari satu tahun sehingga wajib dibebankan sesuai masa manfaat",
          C: "Masa sewa ruko dimulai 1 Mei 2025; tanggal pembayaran 28 April tidak menambah bulan manfaat (8 bulan, bukan 9)",
          D: "Membagi rata per tahun (Rp240.000.000) tanpa memperhatikan bulan mulai sewa"
        },
        jebakan: "Pemotongan PPh final 10% atas seluruh sewa saat dibayar tidak berarti seluruh sewa menjadi biaya tahun itu."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017 (sewa tanah/bangunan)", berlakuSejak: "2018-01-02" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B7-080", topik: "B7.2", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Kriya Rotan Nusantara (PKP, produsen mebel rotan; pembukuan akrual sesuai SAK) pada 15 November 2025 mengirim 200 kursi rotan dengan harga jual Rp2.500.000 per unit (belum termasuk PPN) kepada CV Galeri Interior sebagai komisioner dalam perjanjian konsinyasi; kursi yang tidak laku boleh dikembalikan. Sampai 31 Desember 2025 CV Galeri baru menjual 120 unit kepada konsumen; sisanya terjual pada Februari 2026. Pernyataan yang paling tepat mengenai perlakuan di PT Kriya Rotan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "PPN terutang atas 200 unit pada Masa November 2025; 80 unit yang belum terjual tetap dilaporkan sebagai persediaan; penghasilan PPh 2025 Rp500.000.000 karena pengakuan penghasilan mengikuti faktur pajak",
        B: "PPN terutang atas 200 unit pada Masa November 2025; seluruh 200 unit dikeluarkan dari persediaan pada November 2025 dan diakui sebagai penjualan Rp500.000.000",
        C: "PPN terutang atas 200 unit pada Masa November 2025; 80 unit yang belum terjual tetap dilaporkan sebagai persediaan PT Kriya Rotan per 31 Desember 2025; penghasilan PPh 2025 Rp300.000.000",
        D: "PPN baru terutang atas 120 unit yang dijual komisioner dalam 2025; 80 unit yang belum terjual tetap dilaporkan sebagai persediaan PT Kriya Rotan per 31 Desember 2025; penghasilan PPh 2025 Rp300.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 1A ayat (1) huruf g UU PPN menyatakan penyerahan BKP secara konsinyasi termasuk penyerahan BKP, sehingga PPN atas 200 unit terutang saat diserahkan kepada komisioner (Masa November 2025). Secara akuntansi pengendalian belum beralih kepada konsumen, sehingga barang konsinyasi tetap persediaan konsinyor dan pendapatan diakui saat komisioner menjual: 120 × Rp2.500.000 = Rp300.000.000; PPh mengikuti pembukuan akrual yang taat asas.",
        jejakHitung: [["PPN Masa November 2025 = 12% × 11/12 × (200 × 2.500.000)", "Rp55.000.000"], ["Pendapatan 2025 = 120 × 2.500.000", "Rp300.000.000"], ["Persediaan konsinyasi per 31 Desember 2025", "80 unit (harga perolehan)"]],
        mengapaSalah: { A: "Saat terutang PPN tidak menentukan saat pengakuan penghasilan; penghasilan PPh mengikuti pembukuan akrual sesuai SAK (baru 120 unit terjual)", B: "Penyerahan kepada komisioner bukan penjualan kepada pelanggan; barang yang belum terjual tetap milik konsinyor", D: "Untuk PPN, penyerahan secara konsinyasi sudah merupakan penyerahan BKP saat barang diserahkan kepada komisioner" },
        jebakan: "Konsinyasi adalah contoh klasik beda waktu: PPN pada saat barang dikirim, pendapatan pada saat barang terjual."
      },
      dasarHukum: [{ pasal: "Pasal 1A ayat (1) huruf g UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PSAK 115 (pengaturan konsinyasi)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 28 ayat (5) UU KUP (stelsel akrual taat asas)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B7-081",
      topik: "B7.3",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.1A.1",
      stem: "PT Mega Presisi Manufaktur (tahun buku kalender) membeli dan mulai memakai mesin CNC (Kelompok 2) pada Januari 2024 dengan harga perolehan Rp320.000.000. Untuk fiskal dipilih metode saldo menurun secara taat asas; untuk komersial garis lurus 10 tahun tanpa nilai sisa. Saat mengisi Lampiran 9 (Daftar Penyusutan dan Amortisasi Fiskal) SPT Tahunan PPh Badan Tahun Pajak 2025 (PER-11/PJ/2025), isian baris mesin tersebut pada kolom biaya perolehan, nilai sisa buku fiskal pada awal tahun, metode penyusutan fiskal, dan penyusutan fiskal tahun ini yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Harga perolehan Rp320.000.000; nilai sisa buku awal tahun Rp288.000.000; metode garis lurus; penyusutan tahun ini Rp32.000.000", B: "Harga perolehan Rp320.000.000; nilai sisa buku awal tahun Rp240.000.000; metode saldo menurun; penyusutan tahun ini Rp80.000.000", C: "Harga perolehan Rp320.000.000; nilai sisa buku awal tahun Rp180.000.000; metode saldo menurun; penyusutan tahun ini Rp60.000.000", D: "Harga perolehan Rp320.000.000; nilai sisa buku awal tahun Rp240.000.000; metode saldo menurun; penyusutan tahun ini Rp60.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Lampiran 9 SPT Badan Coretax memuat angka fiskal: nilai sisa buku fiskal awal tahun, metode fiskal, dan penyusutan fiskal tahun ini (angka komersial hanya di kolom pembanding). Saldo menurun Kelompok 2 bertarif 25% dari nilai sisa buku fiskal (Pasal 11 ayat (2) dan (6) UU PPh): 2024 = 25% × 320.000.000 = Rp80.000.000, sehingga nilai sisa buku awal 2025 Rp240.000.000 dan penyusutan 2025 = 25% × 240.000.000 = Rp60.000.000. Kolom selisih penyusutan berisi 60.000.000 − 32.000.000 = Rp28.000.000, yang menjadi penyesuaian fiskal negatif pada rekonsiliasi (Lampiran 1).",
        jejakHitung: [
          ["Penyusutan fiskal 2024 = 25% × 320.000.000", "Rp80.000.000"],
          ["NSB fiskal awal 2025 = 320.000.000 − 80.000.000", "Rp240.000.000"],
          ["Penyusutan fiskal 2025 = 25% × 240.000.000", "Rp60.000.000"],
          ["Selisih penyusutan 2025 = 60.000.000 − 32.000.000", "Rp28.000.000 (penyesuaian fiskal negatif)"]
        ],
        mengapaSalah: {
          A: "Itu angka komersial (garis lurus 10 tahun); kolom yang ditanyakan meminta angka dan metode fiskal",
          B: "Saldo menurun dihitung dari nilai sisa buku awal tahun, bukan dari harga perolehan setiap tahun",
          C: "Rp180.000.000 adalah nilai sisa buku akhir 2025, bukan awal tahun"
        },
        jebakan: "Sejak Tahun Pajak 2025 daftar penyusutan diisi di Lampiran 9 SPT Badan Coretax, bukan Lampiran khusus 1A formulir 1771 (yang hanya untuk Tahun Pajak sampai dengan 2024). Angka komersial/fiskal dan awal/akhir tahun sengaja berdekatan; kolom nilai sisa buku dan penyusutan tahun ini selalu dari sudut fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) dan (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" }, { pasal: "Pasal 85 ayat (1) huruf b angka 9 dan Pasal 138 huruf a PER-11/PJ/2025 (Lampiran 9 SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-082",
      topik: "B7.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Graha Sentosa Abadi (peredaran bruto 2025 Rp62 miliar; usaha utama distribusi alat kesehatan) memiliki gedung kantor permanen 10 lantai yang diperoleh Januari 2020 seharga Rp8.000.000.000 (tanpa tanah). Fiskal: garis lurus 20 tahun; komersial: garis lurus 25 tahun tanpa nilai sisa. Sejak 2023, 4 dari 10 lantai (luas sama) disewakan kepada pihak lain. Laporan laba rugi komersial 2025 memuat: pendapatan sewa lantai Rp900.000.000 (PPh final 10% dipotong penyewa); biaya pemeliharaan khusus lantai yang disewakan Rp60.000.000; penyusutan gedung Rp320.000.000; dan beban PPh final sewa Rp90.000.000. Koreksi fiskal neto 2025 atas seluruh pos yang berkaitan dengan gedung tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi negatif neto Rp760.000.000", B: "Koreksi negatif neto Rp670.000.000", C: "Koreksi negatif neto Rp622.000.000", D: "Koreksi negatif neto Rp830.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Lantai yang disewakan menghasilkan penghasilan final, sehingga pendapatannya dikeluarkan (−Rp900.000.000) dan biaya untuk memperolehnya — pemeliharaan khusus Rp60.000.000 dan penyusutan bagian 40% — tidak dapat dikurangkan; PPh final yang dibebankan juga bukan biaya (Pasal 9 ayat (1) huruf h). Penyusutan fiskal yang boleh dibiayakan hanya bagian kantor sendiri: 60% × 5% × 8.000.000.000 = Rp240.000.000, sedangkan komersial membebankan Rp320.000.000 → koreksi positif Rp80.000.000. Neto = −900 + 60 + 80 + 90 = koreksi negatif Rp670.000.000.",
        jejakHitung: [
          ["Pendapatan sewa final", "−Rp900.000.000"],
          ["Pemeliharaan lantai disewakan", "+Rp60.000.000"],
          ["Penyusutan fiskal boleh = 60% × 5% × 8.000.000.000", "Rp240.000.000"],
          ["Koreksi penyusutan = 320.000.000 − 240.000.000", "+Rp80.000.000"],
          ["Beban PPh final sewa", "+Rp90.000.000"],
          ["Neto", "koreksi negatif Rp670.000.000"]
        ],
        mengapaSalah: {
          A: "PPh final atas sewa yang dibebankan juga harus dikoreksi positif (Pasal 9 ayat (1) huruf h)",
          C: "Hanya menambahkan kembali penyusutan komersial bagian disewakan (40% × 320.000.000 = Rp128.000.000) dan lupa bahwa biaya fiskal bagian kantor sendiri dihitung dengan tarif fiskal 5% (Rp240.000.000)",
          D: "Membiayakan penyusutan fiskal seluruh gedung Rp400.000.000 padahal 40% berkaitan dengan penghasilan final"
        },
        jebakan: "Aset yang dipakai bersama untuk penghasilan final dan tidak final: hanya porsi tidak final yang boleh disusutkan secara fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017", berlakuSejak: "2018-01-02" }, { pasal: "Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 ayat (6a) UU PPh; PMK 72/2023", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B7-083", topik: "B7.3", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 11 ayat (3) UU PPh: Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan, penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut.",
      stem: "PT Nusa Pangan Olahan (tahun buku kalender) membangun gedung pabrik permanen dengan pengeluaran bertahap Februari–September 2025 seluruhnya Rp4.800.000.000; pembangunan selesai pada September 2025, tetapi pabrik baru dipakai berproduksi pada November 2025. Mesin pengemas (Kelompok 2) seharga Rp960.000.000 dibeli, dibayar lunas, dan diterima di pabrik pada 10 Desember 2025, lalu dipasang dan mulai dipakai Februari 2026. Perusahaan memakai metode garis lurus untuk mesin dan tidak menyampaikan pemberitahuan untuk memulai penyusutan pada bulan harta digunakan. Berdasarkan kutipan tersebut, jumlah penyusutan fiskal Tahun Pajak 2025 atas kedua harta adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp90.000.000", B: "Rp80.000.000", C: "Rp50.000.000", D: "Rp230.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Gedung masih dalam proses pengerjaan sampai September 2025, sehingga penyusutannya dimulai bulan selesainya pengerjaan: 5% × 4.800.000.000 × 4/12 = Rp80.000.000. Mesin bukan harta dalam pengerjaan; tanpa pemberitahuan, penyusutan dimulai pada bulan pengeluaran (Desember 2025): 12,5% × 960.000.000 × 1/12 = Rp10.000.000. Total Rp90.000.000.",
        jejakHitung: [["Gedung: 5% × 4.800.000.000 × 4/12 (September–Desember)", "Rp80.000.000"], ["Mesin: 12,5% × 960.000.000 × 1/12 (Desember)", "Rp10.000.000"], ["Total", "Rp90.000.000"]],
        mengapaSalah: { B: "Tanpa pemberitahuan, penyusutan mesin tetap dimulai pada bulan pengeluaran (Desember 2025), bukan bulan mulai dipakai", C: "Penyusutan gedung dimulai bulan selesainya pengerjaan (September), bukan bulan mulai dipakai berproduksi", D: "Harta dalam proses pengerjaan tidak disusutkan sejak pengeluaran pertama (Februari)" },
        jebakan: "Dua harta, dua titik mulai: 'selesai dikerjakan' untuk gedung dan 'bulan pengeluaran' untuk mesin; 'mulai dipakai' hanya berlaku dengan pemberitahuan sesuai Pasal 11 ayat (4)."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (3) dan (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-084",
      topik: "B7.3",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Cahaya Distribusi (lessee) menyelesaikan sewa guna usaha dengan hak opsi atas sebuah truk (Kelompok 2) dari PT Andalan Finance (perusahaan pembiayaan) pada 31 Desember 2025. Selama masa sewa 3 tahun seluruh angsuran Rp540.000.000 telah dibiayakan secara fiskal tanpa pemotongan PPh 23, sedangkan secara komersial (PSAK 116) truk dicatat sebagai aset hak-guna dengan jumlah tercatat per 31 Desember 2025 Rp150.000.000. Pada 2 Januari 2026 PT Cahaya menggunakan hak opsi dengan membayar nilai sisa Rp30.000.000 dan truk menjadi miliknya. Pernyataan yang paling tepat mengenai perlakuan fiskal truk sejak 2026 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Truk disusutkan secara fiskal dari jumlah tercatat aset hak-guna Rp150.000.000 dengan tarif Kelompok 2, karena setelah opsi digunakan dasar fiskal mengikuti PSAK 116", B: "Truk tidak dapat disusutkan lagi secara fiskal karena seluruh angsuran sewa guna usaha telah dibiayakan, sehingga nilai sisa Rp30.000.000 dibebankan sekaligus", C: "Truk disusutkan secara fiskal dari nilai sisa yang dibayar saat opsi digunakan, Rp30.000.000, dengan tarif Kelompok 2 mulai Januari 2026", D: "Truk disusutkan secara fiskal dari harga perolehan awal menurut lessor dengan tarif Kelompok 2, dikurangi angsuran yang telah dibiayakan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Selama masa SGU dengan hak opsi, lessee tidak menyusutkan dan seluruh angsuran dibiayakan. Setelah hak opsi digunakan, dasar penyusutan fiskal lessee adalah nilai sisa yang dibayar (Rp30.000.000) dengan tarif kelompoknya (Kelompok 2), mulai bulan pengeluaran (Januari 2026). Perbedaan dengan jumlah tercatat komersial adalah beda temporer.",
        jejakHitung: [
          ["Dasar penyusutan fiskal = nilai sisa opsi", "Rp30.000.000"],
          ["Contoh penyusutan fiskal 2026 bila garis lurus 12,5%", "Rp3.750.000"]
        ],
        mengapaSalah: {
          A: "Dasar fiskal tidak mengikuti PSAK 116; KMK 1169/KMK.01/1991 menetapkan nilai sisa yang dibayar sebagai dasar",
          B: "Nilai sisa adalah harga perolehan baru bagi lessee dan disusutkan, bukan dibebankan sekaligus",
          D: "Angsuran SGU sudah dibiayakan; memakai harga perolehan lessor berarti membebankan biaya dua kali"
        },
        jebakan: "Jumlah tercatat aset hak-guna disisipkan sebagai pengecoh — dasar fiskal setelah opsi hanya nilai sisa."
      },
      dasarHukum: [{ pasal: "Pasal 12 dan Pasal 16 ayat (1) huruf a, b, c dan ayat (2) KMK 1169/KMK.01/1991", berlakuSejak: "1991-01-19" }, { pasal: "Pasal 11 ayat (3) dan (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" }, { pasal: "PSAK 116 (aset hak-guna)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-085", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Sinar Logistik Persada (peredaran bruto Rp115 miliar) belum mendanakan program imbalan pasca-kerjanya. Pada 2025 dibayarkan langsung kepada pegawai yang berhenti: pesangon dan uang penghargaan masa kerja Tuan Darto Rp180.000.000 sekaligus (Oktober 2025) dan Nyonya Rina Rp60.000.000 sekaligus (November 2025). Laporan aktuaria PSAK 219: beban imbalan kerja di laba rugi 2025 Rp410.000.000 dan kerugian pengukuran kembali di penghasilan komprehensif lain Rp70.000.000. Selain itu, perusahaan membayar premi asuransi kesehatan pegawai Rp96.000.000 yang telah dibiayakan. PPh Pasal 21 yang dipotong atas pembayaran pesangon dan koreksi fiskal 2025 atas pos imbalan kerja adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 21 Rp15.000.000; koreksi positif Rp185.000.000",
        B: "PPh 21 Rp36.000.000; koreksi positif Rp170.000.000",
        C: "PPh 21 Rp15.000.000; koreksi positif Rp240.000.000",
        D: "PPh 21 Rp15.000.000; koreksi positif Rp170.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pesangon sekaligus dipotong PPh 21 final berlapis (PP 68/2009): Tuan Darto 0% × 50 juta + 5% × 50 juta + 15% × 80 juta = Rp14.500.000; Nyonya Rina 0% × 50 juta + 5% × 10 juta = Rp500.000; total Rp15.000.000. Pencadangan imbalan kerja tidak dapat dikurangkan; biaya fiskal adalah jumlah bruto yang dibayarkan (Rp240.000.000, termasuk PPh yang dipotong). Koreksi positif = 410.000.000 − 240.000.000 = Rp170.000.000. Kerugian pengukuran kembali Rp70.000.000 ada di OCI, tidak melalui laba sebelum pajak, sehingga tidak dikoreksi.",
        jejakHitung: [["PPh 21 Darto = 5% × 50.000.000 + 15% × 80.000.000", "Rp14.500.000"], ["PPh 21 Rina = 5% × 10.000.000", "Rp500.000"], ["Total PPh 21 final", "Rp15.000.000"], ["Biaya fiskal = pesangon bruto dibayar", "Rp240.000.000"], ["Koreksi positif = 410.000.000 − 240.000.000", "Rp170.000.000"]],
        mengapaSalah: { A: "Biaya fiskal adalah pembayaran bruto termasuk PPh yang dipotong (Rp240 juta), bukan kas neto Rp225 juta", B: "Pesangon dikenai tarif berlapis 0%/5%/15%/25%, bukan 15% atas seluruh jumlah", C: "Kerugian pengukuran kembali di OCI tidak ada dalam laba sebelum pajak sehingga tidak dikoreksi lagi" },
        jebakan: "Premi asuransi kesehatan dan angka OCI adalah data berlebih; koreksi hanya membandingkan beban PSAK 219 di laba rugi dengan pembayaran bruto."
      },
      dasarHukum: [{ pasal: "PP 68/2009; PMK 16/PMK.03/2010 (PPh 21 final pesangon)" }, { pasal: "Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 219 (imbalan kerja)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-086", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Eksporindo Kriya (pembukuan Rupiah, akrual sesuai SAK; tahun buku kalender) pada 20 November 2025 mengekspor kerajinan kayu senilai USD80.000 dan mencatat piutang dengan kurs transaksi Rp15.900. Pada 31 Desember 2025 kurs tengah Bank Indonesia Rp16.100 dan kurs KMK yang berlaku Rp16.000; piutang dijabarkan dengan kurs tengah BI. Piutang dilunasi pada 10 Februari 2026 dengan kurs yang diterima bank Rp16.350 (kurs KMK minggu itu Rp16.300). PPN ekspor 0% telah dilaporkan. Keuntungan selisih kurs yang diakui sebagai penghasilan fiskal Tahun Pajak 2026 atas piutang tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000", B: "Rp20.000.000", C: "Rp24.000.000", D: "Rp16.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PP 94/2010 Pasal 9: selisih kurs diakui berdasarkan pembukuan yang taat asas sesuai SAK, termasuk yang belum direalisasi pada tanggal neraca. Keuntungan 2025 = 80.000 × (16.100 − 15.900) = Rp16.000.000 sudah menjadi penghasilan TP 2025; pada 2026 hanya diakui selisih dari kurs penutup 2025: 80.000 × (16.350 − 16.100) = Rp20.000.000.",
        jejakHitung: [["2025: 80.000 × (16.100 − 15.900)", "Rp16.000.000 (TP 2025)"], ["2026: 80.000 × (16.350 − 16.100)", "Rp20.000.000 (TP 2026)"], ["Total selama dua tahun", "Rp36.000.000"]],
        mengapaSalah: { A: "Mengakui seluruh selisih saat realisasi seolah 2025 tidak diakui; keuntungan Rp16 juta sudah dipajaki pada 2025 sehingga terhitung dua kali", C: "Kurs KMK dipakai untuk menghitung dan menyetor pajak atas transaksi valas, bukan untuk menjabarkan saldo pos moneter di pembukuan", D: "Rp16.000.000 adalah keuntungan belum direalisasi Tahun Pajak 2025" },
        jebakan: "Bila selisih kurs belum direalisasi sudah diakui tahun lalu, tahun pelunasan hanya mengakui selisih dari kurs penutup."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-087", topik: "B7.4", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Segar Minuman Nusantara pada 2025 mengeluarkan biaya promosi berupa sponsor lomba lari maraton Rp350.000.000 (logo produk ditampilkan di seluruh atribut lomba) dan pembagian sampel produk di pusat perbelanjaan Rp80.000.000. Staf pajak menyusun daftar nominatif biaya promosi (nama penerima, NPWP, alamat, tanggal, bentuk dan jenis biaya, jumlah, serta PPh yang dipotong). Pernyataan yang paling tepat mengenai syarat pembebanannya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Biaya promosi dapat dikurangkan sepanjang tidak melebihi 5% dari penghasilan neto fiskal tahun sebelumnya, dan daftar nominatif cukup disimpan sebagai arsip internal",
        B: "Biaya promosi dapat dikurangkan tanpa daftar nominatif karena sponsor dan sampel produk bukan biaya jamuan",
        C: "Biaya promosi dapat dikurangkan sepanjang dibuat daftar nominatif yang dilaporkan sebagai lampiran SPT Tahunan PPh Badan; tanpa daftar nominatif, biaya itu tidak dapat dikurangkan",
        D: "Biaya promosi dapat dikurangkan sepanjang dibuat daftar nominatif yang dilaporkan sebagai lampiran SPT Masa PPh Unifikasi pada setiap bulan pengeluaran"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 02/PMK.03/2010: biaya promosi (termasuk sponsor dan pengenalan produk) dapat dikurangkan sepanjang dibuat daftar nominatif dengan rincian yang ditentukan dan dilaporkan sebagai lampiran SPT Tahunan PPh Badan; tanpa daftar nominatif biaya itu dikoreksi positif. Tidak ada batas persentase seperti pada sumbangan.",
        jejakHitung: [],
        mengapaSalah: { A: "Batas 5% penghasilan neto tahun sebelumnya berlaku untuk sumbangan tertentu (PP 93/2010), bukan biaya promosi; daftar nominatif wajib dilampirkan", B: "Kewajiban daftar nominatif berlaku untuk biaya promosi, bukan hanya jamuan", D: "Daftar nominatif dilampirkan pada SPT Tahunan, bukan SPT Masa" },
        jebakan: "Syarat promosi = daftar nominatif di SPT Tahunan; syarat sumbangan = batas 5% dan syarat penerima. Jangan tertukar."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a UU PPh; PMK 02/PMK.03/2010" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-088",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B7-11",
      stem: "Vignette Yayasan Panti Asih Sejahtera (1/3). Yayasan Panti Asih Sejahtera (yayasan sosial terdaftar; bukan lembaga pendidikan atau litbang; bukan Wajib Pajak yang dapat memakai PPh final UMKM) menyusun laporan keuangan ISAK 335 dan SPT Tahunan PPh Badan 2025. Data 2025: sumbangan masyarakat tanpa hubungan usaha Rp1.800.000.000; hibah pemerintah daerah Rp300.000.000; bunga deposito Rp60.000.000 (PPh final 20% dipotong bank); penjualan kerajinan hasil binaan anak asuh Rp900.000.000 dengan HPP dan biaya penjualan Rp620.000.000; sewa aula kepada pihak luar Rp150.000.000 (PPh final 10%); dan biaya operasional panti (makan, sekolah anak asuh, gaji pengasuh) Rp1.650.000.000. Surplus menurut laporan penghasilan komprehensif Rp940.000.000. PPh badan terutang yayasan Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp61.600.000", B: "Rp103.400.000", C: "Nihil, karena biaya operasional panti melebihi laba usaha kerajinan", D: "Rp30.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sumbangan dan hibah tanpa hubungan usaha bukan objek; bunga deposito dan sewa aula dikenai PPh final. Objek bertarif umum hanya laba usaha kerajinan Rp280.000.000; biaya operasional panti yang dibiayai sumbangan tidak dapat dikurangkan dari penghasilan usaha. Peredaran bruto yayasan di bawah Rp4,8 miliar, sehingga seluruh PKP mendapat fasilitas Pasal 31E: 11% × 280.000.000 = Rp30.800.000. Pengecualian sisa lebih Pasal 4 ayat (3) huruf m tidak berlaku karena yayasan ini bukan lembaga pendidikan/litbang.",
        jejakHitung: [
          ["Penghasilan neto usaha kerajinan = 900.000.000 − 620.000.000", "Rp280.000.000"],
          ["Peredaran bruto (termasuk final dan bukan objek)", "Rp3.210.000.000 ≤ Rp4,8 miliar"],
          ["Tarif efektif Pasal 31E = 50% × 22%", "11%"],
          ["PPh = 11% × 280.000.000", "Rp30.800.000"]
        ],
        mengapaSalah: {
          A: "Peredaran bruto ≤ Rp50 miliar mewajibkan Pasal 31E; karena ≤ Rp4,8 miliar seluruh PKP dikenai 11%",
          B: "Surplus ISAK 335 mencakup sumbangan (bukan objek) dan penghasilan final; bukan dasar PPh",
          C: "Biaya kegiatan sosial yang dibiayai penghasilan bukan objek tidak dapat dikurangkan dari penghasilan usaha"
        },
        jebakan: "Status nirlaba tidak membebaskan laba usaha; yang dikecualikan hanya sumbangan/hibah, dan pengecualian sisa lebih khusus lembaga pendidikan/litbang."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh (bunga deposito, sewa)" }, { pasal: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B7-089", topik: "B7.5", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1, kasusId: "V-B7-11",
      stem: "Vignette Yayasan Panti Asih Sejahtera (2/3). Pada Maret 2025 Yayasan Panti Asih menerima sumbangan Rp600.000.000 dari PT Bumi Karya dengan syarat tertulis bahwa dana hanya boleh dipakai untuk membangun asrama anak asuh. Asrama selesai dibangun dan seluruh dana terpakai pada November 2025; donatur tidak mensyaratkan pembatasan lain. Dalam laporan keuangan ISAK 335 tahun 2025, perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Saat diterima diakui sebagai penghasilan dengan pembatasan dari pemberi sumber daya; saat asrama selesai, pembatasan terpenuhi sehingga jumlahnya direklasifikasi menjadi aset neto tanpa pembatasan",
        B: "Saat diterima dicatat sebagai liabilitas (utang kepada donatur) sampai asrama selesai, lalu diakui sebagai penghasilan tanpa pembatasan",
        C: "Saat diterima diakui sebagai penghasilan dengan pembatasan dan tetap disajikan sebagai aset neto dengan pembatasan selama umur manfaat asrama",
        D: "Saat diterima diakui langsung sebagai penghasilan tanpa pembatasan karena sumbangan tersebut bukan objek PPh"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "ISAK 335 memisahkan aset neto tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya. Sumbangan bersyarat penggunaan diakui sebagai penghasilan dengan pembatasan; setelah syarat (membangun asrama) terpenuhi pada November 2025, jumlahnya dilepaskan dari pembatasan dan direklasifikasi ke aset neto tanpa pembatasan. Secara pajak sumbangan tetap bukan objek; klasifikasi akuntansi tidak mengubahnya.",
        jejakHitung: [],
        mengapaSalah: { B: "Sumbangan bukan pinjaman; tidak ada kewajiban mengembalikan sepanjang syarat dipenuhi, sehingga bukan liabilitas", C: "Pembatasan berupa tujuan pembangunan sudah terpenuhi dan donatur tidak mensyaratkan pembatasan penggunaan selama umur asrama", D: "Status bukan objek PPh tidak menentukan klasifikasi aset neto; yang menentukan ada tidaknya pembatasan dari pemberi sumber daya" },
        jebakan: "Klasifikasi akuntansi nirlaba (dengan/tanpa pembatasan) dan status pajak (objek/bukan objek) adalah dua pertanyaan terpisah."
      },
      dasarHukum: [{ pasal: "ISAK 335 Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 4 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "B7-090",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-B7-11",
      kutipan: "Pasal 21 ayat (1) UU PPh (parafrase): pemotongan, penyetoran, dan pelaporan pajak atas penghasilan sehubungan dengan pekerjaan, jasa, atau kegiatan yang diterima Wajib Pajak orang pribadi dalam negeri wajib dilakukan antara lain oleh pemberi kerja dan badan yang membayar honorarium atau pembayaran lain sebagai imbalan sehubungan dengan jasa, termasuk jasa tenaga ahli yang melakukan pekerjaan bebas.",
      stem: "Vignette Yayasan Panti Asih Sejahtera (3/3). Pada Masa Pajak Juni 2026 Yayasan Panti Asih: (1) membayar honorarium dr. Lestari (dokter praktik mandiri, bukan pegawai yayasan, NIK telah dipadankan sebagai NPWP) Rp8.000.000 untuk pemeriksaan kesehatan anak asuh — satu-satunya pembayaran kepadanya pada bulan itu; (2) menerima sewa aula Rp30.000.000 dari PT Kreasi Acara Mandiri (WP badan dalam negeri); dan (3) menerima bunga deposito yang telah dipotong PPh final oleh bank. Berdasarkan kutipan tersebut, kewajiban yayasan di Coretax untuk Masa Juni 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membuat bukti potong BP21 dengan PPh 21 Rp400.000 atas honorarium dr. Lestari, menyetornya paling lambat 15 Juli 2026, dan melaporkan SPT Masa PPh 21/26 paling lambat 20 Juli 2026; PPh final sewa aula dipotong PT Kreasi sehingga yayasan cukup menerima bukti potongnya", B: "Membuat bukti potong BP21 dengan PPh 21 Rp200.000 atas honorarium dr. Lestari, menyetornya paling lambat 15 Juli 2026, dan melaporkan SPT Masa PPh 21/26 paling lambat 20 Juli 2026; PPh final sewa aula dipotong PT Kreasi sehingga yayasan cukup menerima bukti potongnya", C: "Membuat bukti potong BP21 dengan PPh 21 Rp200.000 atas honorarium dr. Lestari, menyetornya paling lambat 15 Juli 2026, dan melaporkan SPT Masa PPh 21/26 paling lambat 20 Juli 2026; yayasan juga menyetor sendiri PPh final 10% Rp3.000.000 atas sewa aula", D: "Membuat bukti potong BP21 dengan PPh 21 Rp200.000 atas honorarium dr. Lestari, menyetornya paling lambat 10 Juli 2026, dan melaporkan SPT Masa PPh 21/26 paling lambat 20 Juli 2026; PPh final sewa aula dipotong PT Kreasi sehingga yayasan cukup menerima bukti potongnya" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Yayasan adalah badan yang membayar imbalan jasa tenaga ahli, sehingga wajib memotong PPh 21 bukan pegawai: DPP = 50% × 8.000.000 = Rp4.000.000; PPh 21 = 5% × 4.000.000 = Rp200.000 dengan BP21 di Coretax; disetor paling lambat 15 Juli 2026 dan dilaporkan paling lambat 20 Juli 2026. Atas sewa aula, penyewa berupa WP badan dalam negeri memotong PPh final 10% (Rp3.000.000), sehingga yayasan tidak menyetor sendiri; bunga deposito dipotong bank.",
        jejakHitung: [
          ["DPP = 50% × 8.000.000", "Rp4.000.000"],
          ["PPh 21 = 5% × 4.000.000", "Rp200.000"],
          ["Setor / lapor Masa Juni 2026", "15 Juli 2026 / 20 Juli 2026"],
          ["PPh final sewa aula = 10% × 30.000.000 (dipotong penyewa)", "Rp3.000.000"]
        ],
        mengapaSalah: {
          A: "Untuk bukan pegawai, PPh 21 = tarif Pasal 17 × 50% penghasilan bruto, bukan 5% × bruto",
          C: "Penyewa WP badan dalam negeri adalah pemotong PPh final sewa; yayasan hanya menyetor sendiri bila penyewanya bukan pemotong",
          D: "Tanggal 10 adalah tenggat setor sebelum PMK 81/2024"
        },
        jebakan: "Yayasan bisa sekaligus menjadi pemotong (PPh 21 dokter) dan pihak yang dipotong (sewa, bunga); pilah perannya per transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) UU PPh; PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "PMK 81/2024 (tenggat setor dan lapor)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017", berlakuSejak: "2018-01-02" }, { pasal: "PER-11/PJ/2025 (BP21)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-091", topik: "B7.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Karya Teknik Mandiri (peredaran bruto 2025 Rp140 miliar; seluruh sahamnya dimiliki pemeluk agama Islam; penghasilan neto fiskal 2024 Rp6.000.000.000; tidak mempunyai hubungan istimewa dengan penerima) pada 2025 memberikan: (1) sumbangan pembangunan laboratorium kepada Universitas Cendekia (lembaga pendidikan ber-NPWP) Rp400.000.000 dengan bukti penerimaan; (2) sumbangan uang kepada panitia perayaan HUT RI tingkat kelurahan Rp50.000.000; dan (3) zakat perusahaan melalui BAZNAS Rp120.000.000. Laba sebelum pajak 2025 Rp7.500.000.000 dan sumbangan tidak menyebabkan rugi. Koreksi fiskal positif 2025 atas ketiga pengeluaran di PT Karya Teknik dan perlakuan sumbangan (1) bagi universitas penerima adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp50.000.000; bagi universitas sumbangan bukan objek PPh",
        B: "Koreksi positif Rp270.000.000; bagi universitas sumbangan bukan objek PPh",
        C: "Koreksi positif Rp150.000.000; bagi universitas sumbangan bukan objek PPh",
        D: "Koreksi positif Rp150.000.000; bagi universitas sumbangan objek PPh karena pemberinya dapat membiayakannya"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sumbangan fasilitas pendidikan dapat dikurangkan (Pasal 6 ayat (1) huruf l; PP 93/2010) paling banyak 5% × penghasilan neto fiskal tahun sebelumnya = 5% × 6.000.000.000 = Rp300.000.000, sehingga Rp100.000.000 dikoreksi. Sumbangan panitia HUT bukan jenis sumbangan yang diperkenankan (Pasal 9 ayat (1) huruf g) → koreksi Rp50.000.000. Zakat melalui BAZNAS oleh badan yang dimiliki pemeluk Islam dapat dikurangkan. Total Rp150.000.000. Bagi universitas, sumbangan tanpa hubungan usaha bukan objek (Pasal 4 ayat (3) huruf a).",
        jejakHitung: [["Batas sumbangan pendidikan = 5% × 6.000.000.000", "Rp300.000.000"], ["Koreksi sumbangan pendidikan = 400.000.000 − 300.000.000", "Rp100.000.000"], ["Sumbangan panitia HUT (tidak diperkenankan)", "Rp50.000.000"], ["Zakat melalui BAZNAS", "Rp0 (dapat dikurangkan)"], ["Total koreksi positif", "Rp150.000.000"]],
        mengapaSalah: { A: "Sumbangan fasilitas pendidikan dibatasi 5% dari penghasilan neto fiskal tahun sebelumnya; kelebihan Rp100 juta dikoreksi", B: "Zakat melalui badan amil zakat resmi oleh WP badan yang dimiliki pemeluk Islam dapat dikurangkan (Pasal 9 ayat (1) huruf g; PMK 114/2025)", D: "Bagi penerima, sumbangan tanpa hubungan usaha bukan objek (Pasal 4 ayat (3) huruf a); dapat tidaknya dibiayakan pemberi tidak menentukan" },
        jebakan: "Satu sumbangan, dua sisi: pemberi dibatasi 5% neto tahun lalu, penerima tetap bukan objek."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf i–m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 93/2010", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025 (menggantikan PMK 254/PMK.03/2010)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 4 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-092",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.induk.9b",
      stem: "PT Sukses Mandiri Plastindo membayar angsuran PPh Pasal 25 Tahun Pajak 2025 Rp40.000.000 per bulan, kecuali Masa September 2025 yang terlewat. Atas masa itu DJP menerbitkan STP berisi pokok PPh Pasal 25 Rp40.000.000 dan sanksi bunga Rp1.180.000, yang dilunasi pada Desember 2025; bunga STP dicatat sebagai beban lain-lain. Dalam SPT Tahunan PPh Badan 2025 (formulir PER-11/PJ/2025), isian Bagian E (pengurang PPh terutang) untuk PPh Pasal 25 yang dibayar sendiri dan yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 25 bulanan Rp440.000.000 dan STP PPh Pasal 25 Rp41.180.000 (pokok dan bunga)", B: "PPh Pasal 25 bulanan Rp440.000.000 dan STP PPh Pasal 25 Rp40.000.000 (hanya pokok); bunga Rp1.180.000 tidak dikreditkan dan dikoreksi positif", C: "PPh Pasal 25 bulanan Rp440.000.000 dan STP PPh Pasal 25 Rp40.000.000; bunga Rp1.180.000 dibebankan sebagai biaya bunga yang dapat dikurangkan", D: "PPh Pasal 25 bulanan Rp480.000.000 tanpa baris STP; bunga Rp1.180.000 ikut dikreditkan sebagai PPh yang dibayar sendiri" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kredit pajak hanya berupa pokok pajak. Dalam induk SPT Tahunan PPh Badan (PER-11/PJ/2025) Bagian E, angsuran yang dibayar sendiri 11 × Rp40.000.000 = Rp440.000.000 diisi pada angka 14 (Angsuran PPh Pasal 25), sedangkan pokok PPh 25 yang ditagih dengan STP Rp40.000.000 diisi pada angka 15 (STP PPh Pasal 25, hanya pokok pajak). Sanksi bunga bukan pelunasan pajak terutang, tidak dapat dikreditkan, dan sebagai beban tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k) sehingga dikoreksi positif pada lampiran rekonsiliasi laporan keuangan.",
        jejakHitung: [
          ["PPh 25 dibayar sendiri = 11 × 40.000.000 (Bagian E angka 14)", "Rp440.000.000"],
          ["STP PPh 25, hanya pokok (Bagian E angka 15)", "Rp40.000.000"],
          ["Bunga STP", "tidak dikreditkan; koreksi positif Rp1.180.000"]
        ],
        mengapaSalah: {
          A: "Bunga STP bukan pajak terutang sehingga tidak ikut dikreditkan; isian STP hanya pokok pajak",
          C: "Sanksi administrasi tidak dapat dibiayakan (Pasal 9 ayat (1) huruf k)",
          D: "Bunga tidak pernah menjadi kredit pajak; pokok yang dibayar lewat STP dilaporkan pada baris STP"
        },
        jebakan: "Baris STP PPh 25 bertuliskan 'hanya pokok pajak': bunga dan denda selalu di luar kredit pajak."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 14 ayat (3) UU KUP (bunga STP; tarif KMK)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 14 ayat (1) UU KUP (STP)", berlakuSejak: null }, { pasal: "Pasal 85 PER-11/PJ/2025 dan Lampiran huruf H (induk SPT Badan Bagian E angka 14 dan 15)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "B7-093",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 3,
      formulirRef: "1771.l1.7",
      stem: "PT Graha Niaga Properti (usaha: perdagangan bahan bangunan dan penyewaan ruang usaha; peredaran bruto 2025 Rp84 miliar) mengisi lampiran rekonsiliasi laporan keuangan (Lampiran 1A sampai 1L) SPT Tahunan PPh Badan Tahun Pajak 2025 menurut PER-11/PJ/2025. Dalam laba komersial terdapat: (1) pendapatan sewa ruang usaha Rp600.000.000 yang termasuk peredaran usaha dan telah dipotong PPh final 10%; (2) biaya pemeliharaan ruang yang disewakan Rp90.000.000; (3) penyusutan komersial lebih besar daripada penyusutan fiskal Rp40.000.000; (4) bunga STP Rp5.000.000; (5) PPh Pasal 21 direksi yang ditanggung perusahaan dan tidak diberikan sebagai tunjangan Rp24.000.000; dan (6) imbalan kerja yang dibayar langsung kepada pegawai yang pensiun Rp70.000.000 (perusahaan tidak membentuk pencadangan). Jumlah seluruh nilai yang diisikan pada kolom DIKENAKAN PPh BERSIFAT FINAL dan kolom PENYESUAIAN FISKAL POSITIF lampiran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kolom final Rp600.000.000; kolom penyesuaian fiskal positif Rp205.000.000", B: "Kolom final Rp600.000.000; kolom penyesuaian fiskal positif Rp95.000.000", C: "Kolom final Rp510.000.000; kolom penyesuaian fiskal positif Rp45.000.000", D: "Kolom final Rp600.000.000; kolom penyesuaian fiskal positif Rp135.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "final-nonfinal" },
      pembahasan: {
        inti: "Pada lampiran rekonsiliasi laporan keuangan SPT Badan Coretax, penghasilan yang dikenai PPh final dikeluarkan lewat kolom DIKENAKAN PPh BERSIFAT FINAL: sewa ruang Rp600.000.000. Kolom PENYESUAIAN FISKAL POSITIF memuat biaya untuk mendapatkan penghasilan final (pemeliharaan ruang sewa Rp90.000.000), selisih penyusutan komersial di atas fiskal (Rp40.000.000), dan sanksi administrasi (Rp5.000.000) = Rp135.000.000. PPh 21 direksi yang ditanggung perusahaan adalah kenikmatan bagi direksi (contoh dalam Lampiran PMK 168/2023), sehingga dapat dibiayakan (Pasal 2 ayat (1) PMK 66/2023) dan tidak dikoreksi. Imbalan kerja yang benar-benar dibayar adalah biaya fiskal sehingga tidak dikoreksi; kolom penyesuaian fiskal negatif nihil.",
        jejakHitung: [
          ["Kolom final = pendapatan sewa final dalam laba komersial", "Rp600.000.000"],
          ["Kolom penyesuaian fiskal positif = 90 + 40 + 5 (juta)", "Rp135.000.000"],
          ["PPh 21 direksi ditanggung (kenikmatan, dapat dibiayakan)", "tidak dikoreksi"],
          ["Kolom penyesuaian fiskal negatif", "nihil"],
          ["Imbalan kerja dibayar (tanpa pencadangan)", "tidak dikoreksi"]
        ],
        mengapaSalah: {
          A: "Imbalan kerja yang dibayar kepada pegawai adalah biaya fiskal; yang dikoreksi hanya pencadangan",
          B: "Penyusutan komersial yang lebih besar daripada fiskal adalah penyesuaian fiskal positif, bukan negatif",
          C: "Penghasilan final (kolom final) dan biaya untuk memperolehnya (kolom penyesuaian fiskal positif) dicantumkan bruto pada kolom masing-masing, tidak dinetokan"
        },
        jebakan: "Lampiran rekonsiliasi memisahkan penghasilan final (kolom DIKENAKAN PPh BERSIFAT FINAL) dari biaya untuk memperolehnya (kolom PENYESUAIAN FISKAL POSITIF); jangan dinetokan. Menurut aturan lama PPh 21 yang ditanggung ikut dikoreksi (penyesuaian positif Rp159.000.000); sejak PMK 66/2023 tidak lagi."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2), Pasal 6 ayat (1), dan Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) PMK 66/2023 (natura dan/atau kenikmatan dapat dibiayakan); Lampiran PMK 168/2023 (PPh 21 ditanggung pemberi kerja sebagai kenikmatan)", berlakuSejak: "2023-07-01" }, { pasal: "Pasal 85 ayat (1) huruf b angka 1 PER-11/PJ/2025 (lampiran rekonsiliasi laporan keuangan SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B7-094",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 25 ayat (1) UU PPh (parafrase): angsuran pajak setiap bulan dalam tahun pajak berjalan adalah PPh terutang menurut SPT Tahunan tahun pajak yang lalu dikurangi PPh yang dipotong (Pasal 21 dan 23), dipungut (Pasal 22), serta PPh yang dibayar atau terutang di luar negeri yang boleh dikreditkan (Pasal 24), dibagi 12. Ayat (2): angsuran untuk bulan-bulan sebelum SPT Tahunan PPh disampaikan sebelum batas waktu penyampaian SPT Tahunan PPh sama dengan angsuran bulan terakhir tahun pajak yang lalu.",
      stem: "PT Nusa Kemasan Prima (tahun buku kalender) menyampaikan SPT Tahunan PPh Badan 2025 pada 22 April 2026 dengan PPh terutang Rp960.000.000. Kredit pajak 2025: PPh 22 impor Rp120.000.000, PPh 23 yang dipotong pelanggan Rp48.000.000, dan PPh 25 dibayar sendiri Rp600.000.000; tidak ada PPh 24 dan tidak ada penghasilan tidak teratur. Angsuran PPh 25 Masa Desember 2025 Rp50.000.000. Setiap angsuran dijurnal Dr PPh 25 dibayar di muka / Cr Kas. Berdasarkan kutipan tersebut, jumlah angsuran PPh 25 yang dijurnal untuk Masa Januari sampai dengan Juni 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp348.000.000", B: "Rp396.000.000", C: "Rp198.000.000", D: "Rp332.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Angsuran 2026 = (960.000.000 − 120.000.000 − 48.000.000) / 12 = Rp66.000.000; PPh 25 tahun lalu bukan pengurang dasar angsuran. Menurut Pasal 25 ayat (2) UU PPh, untuk bulan-bulan sebelum SPT Tahunan disampaikan (dalam batas waktunya, 30 April 2026) angsuran sama dengan angsuran Desember 2025, Rp50.000.000. SPT disampaikan 22 April 2026, sehingga Masa Januari–Maret memakai Rp50.000.000 dan angsuran baru berlaku mulai Masa April 2026. Total Januari–Juni = 3 × 50.000.000 + 3 × 66.000.000 = Rp348.000.000.",
        jejakHitung: [
          ["Dasar = 960.000.000 − 120.000.000 − 48.000.000", "Rp792.000.000"],
          ["Angsuran baru = 792.000.000 / 12", "Rp66.000.000"],
          ["Januari–Maret = 3 × 50.000.000", "Rp150.000.000"],
          ["April–Juni = 3 × 66.000.000", "Rp198.000.000"],
          ["Total", "Rp348.000.000"]
        ],
        mengapaSalah: {
          B: "Angsuran baru tidak berlaku surut ke Januari; bulan-bulan sebelum SPT Tahunan disampaikan memakai angsuran Desember tahun lalu",
          C: "PPh 25 yang dibayar tahun lalu tidak mengurangi dasar angsuran (rumus hanya mengurangkan PPh 21, 22, 23, 24); dengan cara itu angsuran menjadi Rp16.000.000",
          D: "Angsuran baru berlaku mulai bulan SPT disampaikan (Masa April 2026), bukan mulai bulan sesudahnya (Mei)"
        },
        jebakan: "Yang menentukan adalah bulan SPT Tahunan disampaikan (dalam batas waktunya): bulan-bulan sebelumnya memakai angsuran bulan terakhir tahun lalu. Di soal ini SPT disampaikan pada April, jadi angsuran baru mulai Masa April. Contoh dalam penjelasan Pasal 25 ayat (2): bila SPT disampaikan pada Februari, angsuran Januari sama dengan angsuran Desember tahun lalu."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) dan (2) UU PPh beserta penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 (penghitungan angsuran PPh 25; setor tanggal 15)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-095",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 8 ayat (2) UU KUP (parafrase): Wajib Pajak yang membetulkan sendiri SPT Tahunan sehingga utang pajak menjadi lebih besar dikenai sanksi bunga atas jumlah pajak yang kurang dibayar, dihitung sejak saat penyampaian SPT berakhir sampai dengan tanggal pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan; tarif bunga per bulan ditetapkan Menteri Keuangan.",
      stem: "Pada Oktober 2026 PT Bintang Kimia Lestari menemukan bahwa beban jamuan tanpa daftar nominatif Rp200.000.000 belum dikoreksi dalam SPT Tahunan PPh Badan 2025 yang telah disampaikan tepat waktu pada 28 April 2026. Perusahaan belum diperiksa dan memutuskan membetulkan SPT sendiri; kekurangan PPh 22% × Rp200.000.000 = Rp44.000.000 dibayar pada 21 Oktober 2026, dan perusahaan tidak memanfaatkan fasilitas pengurangan sanksi. Berdasarkan kutipan tersebut, pernyataan yang paling tepat mengenai sanksi dan pencatatannya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Bunga dihitung sejak 1 Januari 2026 sampai 21 Oktober 2026 (10 bulan) dengan tarif bunga per bulan dari KMK; sanksi dicatat sebagai beban lain-lain dan dikoreksi positif dalam rekonsiliasi Tahun Pajak 2026", B: "Bunga dihitung sejak 30 April 2026 sampai 21 Oktober 2026 (6 bulan) dengan tarif bunga per bulan dari KMK; sanksi dicatat sebagai beban bunga yang dapat dikurangkan pada Tahun Pajak 2026", C: "Bunga dihitung sejak 30 April 2026 sampai 21 Oktober 2026 (6 bulan) dengan tarif bunga per bulan dari KMK; sanksi dicatat sebagai beban lain-lain dan dikoreksi positif dalam rekonsiliasi Tahun Pajak 2026", D: "Bunga 2% per bulan dihitung sejak 30 April 2026 sampai 21 Oktober 2026 (6 bulan); sanksi dicatat sebagai beban lain-lain dan dikoreksi positif dalam rekonsiliasi Tahun Pajak 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Pembetulan SPT Tahunan yang menambah utang pajak dikenai bunga Pasal 8 ayat (2) sejak batas akhir penyampaian SPT (30 April 2026), bukan tanggal SPT disampaikan, sampai tanggal pembayaran (21 Oktober 2026): 5 bulan 21 hari dihitung 6 bulan, dengan tarif bunga per bulan dari KMK (suku bunga acuan ditambah 5%, dibagi 12, yang berlaku pada tanggal dimulainya penghitungan sanksi; Pasal 8 ayat (2b) UU KUP). Sanksi adalah beban yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k) sehingga dikoreksi positif pada tahun pembebanannya.",
        jejakHitung: [
          ["30 April 2026 → 21 Oktober 2026", "5 bulan 21 hari = 6 bulan"],
          ["Kekurangan pokok = 22% × 200.000.000", "Rp44.000.000"]
        ],
        mengapaSalah: {
          A: "Untuk SPT Tahunan, bunga dihitung sejak saat penyampaian SPT berakhir (30 April 2026), bukan sejak awal tahun",
          B: "Sanksi administrasi tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh)",
          D: "Bunga 2% per bulan adalah tarif lama; kini tarif bunga per bulan ditetapkan Menteri Keuangan dengan KMK (untuk pembetulan: suku bunga acuan ditambah 5%, dibagi 12)"
        },
        jebakan: "Tanggal SPT disampaikan (28 April) bukan titik awal; titik awalnya batas akhir penyampaian (30 April)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) dan (2b) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026; KMK tarif bunga bulanan yang berlaku pada tanggal dimulainya penghitungan sanksi" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B7-096", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Lentera Agro Mandiri (peredaran bruto Rp82 miliar) pada 31 Desember 2024 memiliki sisa rugi fiskal Tahun Pajak 2020 Rp300.000.000 (tidak ada rugi tahun lain dan tidak ada fasilitas perpanjangan kompensasi) dan telah mengakui aset pajak tangguhan atasnya Rp66.000.000. Tahun 2025: laba sebelum pajak Rp210.000.000; koreksi positif beda tetap (sanksi dan jamuan tanpa daftar nominatif) Rp20.000.000; penyusutan fiskal lebih besar daripada komersial Rp50.000.000 (beda temporer kena pajak baru; tidak ada saldo awal liabilitas pajak tangguhan). Jumlah beban pajak penghasilan (kini dan tangguhan) yang diakui di laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.600.000", B: "Rp39.600.000", C: "Rp66.000.000", D: "Rp77.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Neto fiskal 2025 = 210 + 20 − 50 = Rp180.000.000, seluruhnya dikompensasikan dengan rugi 2020 (tahun kelima, terakhir); sisa Rp120.000.000 kedaluwarsa. Pajak kini nihil. Aset pajak tangguhan Rp66.000.000 dihapus seluruhnya (Rp39.600.000 terpakai, Rp26.400.000 hangus), dan timbul liabilitas pajak tangguhan 22% × 50.000.000 = Rp11.000.000. Beban pajak = 0 + 66.000.000 + 11.000.000 = Rp77.000.000.",
        jejakHitung: [["Neto fiskal = 210.000.000 + 20.000.000 − 50.000.000", "Rp180.000.000"], ["Kompensasi rugi 2020 (tahun terakhir)", "Rp180.000.000; sisa Rp120.000.000 hangus"], ["Pajak kini", "Rp0"], ["Penghapusan DTA = 39.600.000 terpakai + 26.400.000 hangus", "Rp66.000.000"], ["DTL penyusutan = 22% × 50.000.000", "Rp11.000.000"], ["Beban pajak penghasilan", "Rp77.000.000"]],
        mengapaSalah: { A: "Uji silang 22% × (laba ± beda tetap) hanya berlaku bila tidak ada rugi fiskal yang hangus; aset pajak tangguhan atas rugi Rp120 juta yang kedaluwarsa juga dibebankan", B: "Hanya menghitung pemakaian rugi; lupa bagian yang hangus dan liabilitas dari penyusutan", C: "Lupa liabilitas pajak tangguhan Rp11.000.000 dari selisih penyusutan" },
        jebakan: "Rugi fiskal tahun kelima yang tidak habis dipakai menghapus aset pajak tangguhannya sekaligus, sehingga beban pajak melonjak walau pajak kini nihil."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 212 (aset pajak tangguhan atas rugi fiskal)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-097", topik: "B7.7", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Pelita Garmen Indonesia (peredaran bruto Rp120 miliar; belum mendanakan imbalan kerja) mencatat kerugian pengukuran kembali liabilitas imbalan pasti Rp80.000.000 pada penghasilan komprehensif lain 2025 berdasarkan laporan aktuaria. Liabilitas imbalan kerja baru menjadi biaya fiskal saat dibayarkan, dan manajemen yakin laba fiskal masa depan memadai. Pernyataan yang paling tepat mengenai dampak pajak tangguhannya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Timbul aset pajak tangguhan Rp17.600.000 yang diakui sebagai manfaat pajak tangguhan di laba rugi 2025",
        B: "Timbul aset pajak tangguhan Rp17.600.000 yang diakui di penghasilan komprehensif lain, mengikuti pos yang menimbulkannya",
        C: "Tidak timbul pajak tangguhan karena pengukuran kembali tidak melalui laba rugi sehingga merupakan beda tetap",
        D: "Timbul liabilitas pajak tangguhan Rp17.600.000 yang diakui di penghasilan komprehensif lain, mengikuti pos yang menimbulkannya"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Kenaikan liabilitas imbalan kerja karena pengukuran kembali menambah beda temporer dapat dikurangkan (dasar pengenaan pajak liabilitas nol; biaya fiskal saat dibayar), sehingga timbul aset pajak tangguhan 22% × 80.000.000 = Rp17.600.000. PSAK 212 mengharuskan pajak atas pos yang diakui di luar laba rugi ikut diakui di luar laba rugi — di sini penghasilan komprehensif lain.",
        jejakHitung: [["Aset pajak tangguhan = 22% × 80.000.000", "Rp17.600.000"], ["Jurnal", "Dr Aset pajak tangguhan / Cr Pajak penghasilan terkait OCI"]],
        mengapaSalah: { A: "Pajak tangguhan atas pos OCI diakui di OCI, bukan laba rugi", C: "Pengukuran kembali menambah liabilitas yang kelak dibiayakan saat dibayar — beda temporer, bukan beda tetap", D: "Liabilitas akuntansi yang lebih besar daripada dasar pajaknya menimbulkan aset, bukan liabilitas, pajak tangguhan" },
        jebakan: "Tempat pengakuan pajak tangguhan mengikuti tempat pengakuan pos asalnya: laba rugi, OCI, atau ekuitas."
      },
      dasarHukum: [{ pasal: "PSAK 212 (pajak atas pos di luar laba rugi)", berlakuSejak: "2024-01-01" }, { pasal: "PSAK 219 (pengukuran kembali imbalan pasti di OCI)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-098", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Samudra Pangan Lestari (peredaran bruto Rp160 miliar; tidak ada kompensasi rugi dan tidak ada saldo pajak tangguhan awal) melaporkan laba sebelum pajak 2025 Rp4.000.000.000. Rekonsiliasi fiskal: beda tetap positif — sumbangan kepada organisasi kemasyarakatan Rp60.000.000, sanksi bunga STP Rp15.000.000, jamuan tanpa daftar nominatif Rp25.000.000; beda tetap negatif — dividen dari PT dalam negeri Rp300.000.000 dan bunga deposito (PPh final) Rp150.000.000; beda temporer — penyusutan fiskal lebih besar daripada komersial Rp200.000.000 dan beban imbalan kerja yang belum dibayar Rp120.000.000. Jumlah beban pajak penghasilan (kini dan tangguhan) di laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp803.000.000", B: "Rp785.400.000", C: "Rp880.000.000", D: "Rp836.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pajak kini = 22% × (4.000 + 100 − 450 − 200 + 120) juta = 22% × 3.570.000.000 = Rp785.400.000. Beban pajak tangguhan neto = 22% × (200 − 120) juta = Rp17.600.000 (liabilitas Rp44.000.000 dikurangi aset Rp26.400.000). Total Rp803.000.000 — sama dengan uji silang 22% × (laba ± beda tetap) = 22% × 3.650.000.000.",
        jejakHitung: [["PKP = 4.000 + 100 − 450 − 200 + 120 (juta)", "Rp3.570.000.000"], ["Pajak kini = 22% × 3.570.000.000", "Rp785.400.000"], ["Tangguhan = 22% × 200 juta (DTL) − 22% × 120 juta (DTA)", "Rp17.600.000 beban"], ["Beban pajak penghasilan", "Rp803.000.000"], ["Uji silang 22% × (4.000 + 100 − 450) juta", "Rp803.000.000"]],
        mengapaSalah: { B: "Itu hanya pajak kini; beban pajak tangguhan neto Rp17.600.000 belum ditambahkan", C: "Mengabaikan beda tetap yang tidak pernah berbalik (22% × laba akuntansi)", D: "Bunga deposito final juga beda tetap negatif yang harus dikeluarkan; tanpa itu 22% × (4.000 + 100 − 300) juta = Rp836.000.000" },
        jebakan: "Pakai uji silang dari tips modul: beban pajak = 22% × (laba akuntansi ± beda tetap) bila tidak ada rugi hangus atau perubahan tarif."
      },
      dasarHukum: [{ pasal: "PSAK 212", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-099", topik: "B7.7", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Staf akuntansi PT Lintas Media Kreatif (peredaran bruto Rp70 miliar) menyiapkan kertas kerja pajak tangguhan 2025 atas empat pos yang dikoreksi dalam rekonsiliasi fiskal. Pos berikut yang TIDAK menimbulkan pajak tangguhan adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: {
        A: "Beban imbalan pasca-kerja yang dicadangkan tetapi belum dibayar Rp90.000.000",
        B: "Kerugian penurunan nilai persediaan ke nilai realisasi neto Rp35.000.000",
        C: "Biaya jamuan klien tanpa daftar nominatif Rp28.000.000",
        D: "Selisih antara penyusutan aset hak-guna ditambah bunga liabilitas sewa (PSAK 116) dan pembayaran sewa yang dibiayakan secara fiskal Rp12.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jamuan tanpa daftar nominatif tidak akan pernah dapat dibiayakan — beda tetap tanpa pajak tangguhan. Tiga pos lain adalah beda temporer yang dibiayakan secara fiskal di tahun lain (saat imbalan dibayar, saat persediaan dijual, atau sepanjang masa sewa).",
        jejakHitung: [],
        mengapaSalah: { A: "Cadangan imbalan kerja dibiayakan saat dibayar — beda temporer dapat dikurangkan", B: "Penurunan nilai persediaan diakui fiskal saat dijual/dimusnahkan — beda temporer", D: "Perbedaan pola beban sewa PSAK 116 dan biaya sewa fiskal berbalik sepanjang masa sewa — beda temporer" },
        jebakan: "Tanyakan: apakah pos ini kelak akan menjadi biaya/penghasilan fiskal? Bila tidak pernah, itu beda tetap."
      },
      dasarHukum: [{ pasal: "PSAK 212", berlakuSejak: "2024-01-01" }, { pasal: "PMK 02/PMK.03/2010 (daftar nominatif)" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-100", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Arsitama Rancang Bangun (penyedia jasa konsultansi konstruksi yang memiliki sertifikat badan usaha) mengerjakan perencanaan dan pengawasan proyek pabrik PT Cipta Pangan dengan nilai kontrak Rp2.400.000.000 belum termasuk PPN. Selama 2025: (1) uang muka 20% Rp480.000.000 diterima Februari 2025; (2) tagihan termin pertama Rp1.200.000.000 (progres 50%) dibayar Agustus 2025 sebesar Rp900.000.000 setelah dipotong pengembalian uang muka Rp240.000.000 dan retensi 5% Rp60.000.000. Pendapatan menurut PSAK 115 untuk 2025 Rp1.500.000.000. Seluruh jumlah di atas belum termasuk PPN dan belum dikurangi PPh; PT Cipta Pangan memotong PPh atas setiap pembayaran. Jumlah PPh final jasa konstruksi atas penerimaan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.400.000", B: "Rp52.500.000", C: "Rp36.570.000", D: "Rp48.300.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "PPh final jasa konstruksi terutang atas jumlah pembayaran yang diterima (tanpa PPN), termasuk uang muka, bukan atas pendapatan PSAK 115 atau tagihan bruto. Uang muka Rp480.000.000 sudah dipotong saat diterima; termin dibayar neto Rp900.000.000 (pengembalian uang muka sudah dikenai pajak, retensi belum dibayar). Konsultansi konstruksi bersertifikat: 3,5% × 1.380.000.000 = Rp48.300.000; retensi Rp60.000.000 dipotong saat dibayarkan kelak.",
        jejakHitung: [["Uang muka diterima", "Rp480.000.000"], ["Termin dibayar = 1.200.000.000 − 240.000.000 − 60.000.000", "Rp900.000.000"], ["Dasar = 480.000.000 + 900.000.000", "Rp1.380.000.000"], ["PPh final = 3,5% × 1.380.000.000", "Rp48.300.000"]],
        mengapaSalah: { A: "Retensi Rp60.000.000 belum dibayar sehingga belum menjadi dasar pemotongan (3,5% × 1.440.000.000)", B: "Pendapatan PSAK 115 (persentase penyelesaian) bukan dasar pengenaan PPh final konstruksi", C: "Tarif 2,65% untuk pekerjaan konstruksi kualifikasi menengah/besar; konsultansi konstruksi bersertifikat 3,5%" },
        jebakan: "Uang muka, pengembalian uang muka, dan retensi: pajaki kas yang benar-benar diterima, sekali saja."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1) huruf f", berlakuSejak: "2022-02-21" }, { pasal: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-101", topik: "B7.8", tingkat: ["C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase): atas dividen, bunga, royalti, sewa, imbalan jasa, dan penghasilan lain yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh subjek pajak dalam negeri kepada Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia, dipotong pajak 20% dari jumlah bruto oleh pihak yang wajib membayarkan.",
      stem: "PT Nusantara Komponen Otomotif (PMA; pembukuan Rupiah) memutuskan dalam RUPS tahunan 24 Maret 2026 untuk membagikan dividen tunai Rp5.000.000.000 seluruhnya kepada Tokai Holdings Co., Ltd. (pemegang 100% saham, berkedudukan di negara X, tanpa BUT di Indonesia). P3B Indonesia–negara X membatasi tarif dividen 10% bagi pemegang saham minimal 25%; Tokai telah menyampaikan Form DGT melalui Coretax pada 2 Maret 2026 dan merupakan pemilik manfaat. Dividen ditransfer pada 18 Mei 2026. Berdasarkan kutipan tersebut, jumlah PPh Pasal 26, Masa Pajak terutangnya, dan jurnal pada tanggal RUPS yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 Rp500.000.000 terutang Masa Maret 2026 (dividen disediakan untuk dibayarkan) dan disetor paling lambat 15 April 2026; jurnal: Dr Saldo laba 5.000.000.000; Cr Utang dividen 4.500.000.000; Cr Utang PPh Pasal 26 500.000.000",
        B: "PPh 26 Rp500.000.000 terutang Masa Mei 2026 (saat dividen ditransfer) dan disetor paling lambat 15 Juni 2026; jurnal pada tanggal RUPS: Dr Saldo laba 5.000.000.000; Cr Utang dividen 5.000.000.000",
        C: "PPh 26 Rp1.000.000.000 terutang Masa Maret 2026 dan disetor paling lambat 15 April 2026; jurnal: Dr Saldo laba 5.000.000.000; Cr Utang dividen 4.000.000.000; Cr Utang PPh Pasal 26 1.000.000.000",
        D: "PPh 26 Rp500.000.000 terutang Masa Maret 2026 dan disetor paling lambat 15 April 2026; jurnal: Dr Beban dividen 5.000.000.000; Cr Utang dividen 4.500.000.000; Cr Utang PPh Pasal 26 500.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 26 terutang saat dividen dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo — mana yang lebih dulu. Keputusan RUPS 24 Maret 2026 membuat dividen disediakan untuk dibayarkan, sehingga PPh 26 terutang Masa Maret 2026 dan disetor paling lambat 15 April 2026 (dilaporkan paling lambat 20 April 2026 dengan bukti potong BPNR). Form DGT yang sah dan status pemilik manfaat memungkinkan tarif P3B 10%: 10% × 5.000.000.000 = Rp500.000.000. Dividen adalah pembagian laba (mengurangi saldo laba), bukan beban.",
        jejakHitung: [["PPh 26 = 10% × 5.000.000.000 (P3B, Form DGT)", "Rp500.000.000"], ["Utang dividen neto = 5.000.000.000 − 500.000.000", "Rp4.500.000.000"], ["Masa terutang / setor / lapor", "Maret 2026 / 15 April 2026 / 20 April 2026"]],
        mengapaSalah: { B: "Saat terutang tidak menunggu transfer; dividen sudah disediakan untuk dibayarkan sejak keputusan RUPS", C: "Dengan Form DGT yang sah dan pemilik manfaat, tarif dibatasi P3B 10%, bukan 20%", D: "Dividen adalah distribusi ekuitas (Pasal 9 ayat (1) huruf a: bukan biaya), dicatat mengurangi saldo laba" },
        jebakan: "'Disediakan untuk dibayarkan' memajukan saat terutang PPh 26 ke tanggal keputusan RUPS, walaupun kas baru keluar dua bulan kemudian."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "PMK 81/2024; PER-11/PJ/2025 (BPNR)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-102", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-B7-12",
      stem: "Vignette PT Andalas Pulp Indonesia (1/2). PT Andalas Pulp Indonesia (manufaktur kertas; pembukuan Rupiah; peredaran bruto Rp210 miliar) menerima pinjaman USD2.000.000 dari induknya, Andalas Holdings Ltd. di negara Y (tanpa BUT di Indonesia), pada 1 Juli 2025 dengan kurs Rp16.000. Bunga 6% per tahun dibayar semesteran; bunga Juli–Desember 2025 sebesar USD60.000 dibayar pada 31 Desember 2025, ketika kurs KMK dan kurs transaksi bank sama-sama Rp16.300. P3B Indonesia–negara Y membatasi tarif bunga 10%; Form DGT telah disampaikan melalui Coretax sebelum pembayaran dan Andalas Holdings adalah pemilik manfaat. Kewajiban pemotongan PPh atas pembayaran bunga tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 26 Rp195.600.000 dengan bukti potong BPNR, disetor paling lambat 15 Januari 2026 dan dilaporkan paling lambat 20 Januari 2026",
        B: "PPh Pasal 23 Rp146.700.000 dengan bukti potong BPPU, disetor paling lambat 15 Januari 2026 dan dilaporkan paling lambat 20 Januari 2026",
        C: "PPh Pasal 26 Rp97.800.000 dengan bukti potong BPNR, disetor paling lambat 15 Januari 2026 dan dilaporkan paling lambat 20 Januari 2026",
        D: "PPh Pasal 26 Rp97.800.000 dengan bukti potong BPNR, disetor paling lambat 10 Januari 2026 dan dilaporkan paling lambat 20 Januari 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Bunga kepada WP luar negeri tanpa BUT dipotong PPh Pasal 26; dengan Form DGT dan status pemilik manfaat, tarif P3B 10% dipakai: 10% × (60.000 × 16.300) = Rp97.800.000. Bukti potong BPNR dibuat di Coretax; setor paling lambat 15 Januari 2026 dan SPT Masa PPh Unifikasi dilaporkan paling lambat 20 Januari 2026. Jurnal 31 Desember 2025: Dr Beban bunga 978.000.000; Cr Kas 880.200.000; Cr Utang PPh 26 97.800.000.",
        jejakHitung: [["Bunga = 60.000 × 16.300", "Rp978.000.000"], ["PPh 26 = 10% × 978.000.000", "Rp97.800.000"], ["Kas ke induk = 978.000.000 − 97.800.000", "Rp880.200.000"]],
        mengapaSalah: { A: "Tarif 20% hanya bila syarat P3B tidak terpenuhi; Form DGT sudah disampaikan dan penerima pemilik manfaat", B: "PPh 23 dan BPPU untuk penerima dalam negeri/BUT; induk adalah WP luar negeri", D: "Tanggal 10 adalah tenggat setor sebelum PMK 81/2024" },
        jebakan: "Pemberi pinjaman luar negeri → PPh 26 (BPNR), bukan PPh 23; tarif P3B hanya dengan Form DGT dan pemilik manfaat."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PMK 81/2024; PER-11/PJ/2025 (BPNR)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-103", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-B7-12",
      stem: "Vignette PT Andalas Pulp Indonesia (2/2). Pinjaman USD2.000.000 dari induk (diterima 1 Juli 2025 dengan kurs Rp16.000) dijabarkan dengan kurs tengah BI 31 Desember 2025 Rp16.300, sehingga laba rugi 2025 memuat rugi selisih kurs belum direalisasi Rp600.000.000; beban bunga 2025 Rp978.000.000 merupakan seluruh biaya pinjaman lain perusahaan. Rata-rata saldo akhir bulan 2025: utang Rp30.000.000.000 dan modal Rp6.000.000.000. PT Andalas bukan bank, lembaga pembiayaan, perusahaan asuransi, perusahaan infrastruktur, atau WP yang seluruh penghasilannya dikenai PPh final. Koreksi fiskal positif 2025 terkait biaya pinjaman tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp195.600.000", B: "Rp600.000.000", C: "Rp795.600.000", D: "Rp315.600.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "DER = 30.000.000.000 : 6.000.000.000 = 5 : 1 melebihi 4 : 1, sehingga biaya pinjaman yang dapat dikurangkan = 4/5. Biaya pinjaman menurut PMK 169/PMK.010/2015 mencakup bunga dan selisih kurs atas pinjaman valas: 978.000.000 + 600.000.000 = Rp1.578.000.000. Yang dapat dikurangkan Rp1.262.400.000; koreksi positif Rp315.600.000 (beda tetap). Rugi kurs belum direalisasi itu sendiri diakui fiskal sesuai SAK (PP 94/2010 Pasal 9).",
        jejakHitung: [["DER = 30.000.000.000 / 6.000.000.000", "5 : 1"], ["Biaya pinjaman = 978.000.000 + 600.000.000", "Rp1.578.000.000"], ["Boleh dikurangkan = 4/5 × 1.578.000.000", "Rp1.262.400.000"], ["Koreksi positif = 1.578.000.000 − 1.262.400.000", "Rp315.600.000"]],
        mengapaSalah: { A: "Selisih kurs atas pinjaman valas termasuk biaya pinjaman dalam PMK 169/PMK.010/2015 (1/5 × bunga saja = Rp195.600.000)", B: "Rugi kurs belum direalisasi diakui fiskal mengikuti SAK; yang dibatasi hanya bagian di atas DER 4:1", C: "Mengoreksi selisih kurs seluruhnya dan bunga sebagian; padahal keduanya dibatasi dengan proporsi yang sama 4/5" },
        jebakan: "Dua aturan bertemu: PP 94/2010 mengakui rugi kurs belum direalisasi, PMK 169/2015 membatasinya bersama bunga lewat DER."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh; PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }, { pasal: "PP 94/2010 Pasal 9" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-104",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Anugrah Kemasan (PKP; sisa rugi fiskal Tahun Pajak 2023 Rp1.500.000.000) menggabungkan diri ke dalam PT Sentosa Kemasan (PKP; tidak mempunyai sisa kerugian fiskal) efektif 1 Juli 2026 dan bubar tanpa likuidasi. Penggabungan memenuhi persyaratan tujuan bisnis dan telah memperoleh persetujuan Direktur Jenderal Pajak sehingga pengalihan harta memakai nilai buku sesuai PMK 81 Tahun 2024 s.t.d.t.d. PMK 1 Tahun 2026. Harta yang dialihkan antara lain mesin (nilai sisa buku fiskal Rp4.000.000.000) dan persediaan bahan baku Rp800.000.000. Pernyataan yang paling tepat mengenai akibat perpajakannya bagi PT Sentosa Kemasan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mesin dicatat sebesar nilai sisa buku fiskal Rp4.000.000.000 dan penyusutannya dilanjutkan; sisa rugi fiskal PT Anugrah Rp1.500.000.000 dapat dikompensasikan PT Sentosa sampai sisa jangka lima tahunnya; pengalihan persediaan antar-PKP dalam penggabungan bukan penyerahan BKP sehingga tidak terutang PPN", B: "Mesin dicatat sebesar nilai sisa buku fiskal Rp4.000.000.000 dan penyusutannya dilanjutkan; sisa rugi fiskal PT Anugrah Rp1.500.000.000 tidak dapat dikompensasikan PT Sentosa; pengalihan persediaan antar-PKP dalam penggabungan bukan penyerahan BKP sehingga tidak terutang PPN", C: "Mesin dicatat sebesar nilai sisa buku fiskal Rp4.000.000.000 dan penyusutannya dilanjutkan; sisa rugi fiskal PT Anugrah Rp1.500.000.000 tidak dapat dikompensasikan PT Sentosa; pengalihan persediaan terutang PPN 12% × 11/12 karena merupakan penyerahan BKP", D: "Mesin dicatat sebesar nilai pasar dan disusutkan kembali dengan masa manfaat penuh mulai Juli 2026; sisa rugi fiskal PT Anugrah Rp1.500.000.000 tidak dapat dikompensasikan PT Sentosa; pengalihan persediaan antar-PKP dalam penggabungan bukan penyerahan BKP sehingga tidak terutang PPN" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dengan nilai buku yang disetujui DJP, PT Sentosa mencatat harta sebesar nilai buku dalam pembukuan PT Anugrah dan menyusutkannya berdasarkan sisa masa manfaat (Pasal 403 ayat (1) dan ayat (3) PMK 81 Tahun 2024); tidak ada keuntungan pengalihan bagi PT Anugrah. Namun penerima harta dengan nilai buku tidak boleh mengompensasikan sisa kerugian pihak yang menggabungkan diri (Pasal 402 ayat (1)). Pasal 1A ayat (2) huruf d UU PPN: pengalihan BKP dalam rangka penggabungan usaha antar-PKP tidak termasuk penyerahan BKP.",
        jejakHitung: [
          ["Nilai perolehan mesin bagi PT Sentosa = nilai sisa buku fiskal PT Anugrah", "Rp4.000.000.000; penyusutan dilanjutkan sesuai sisa masa manfaat"],
          ["Sisa rugi fiskal PT Anugrah yang dapat dikompensasikan PT Sentosa", "Rp0 (Rp1.500.000.000 tidak beralih)"],
          ["PPN atas pengalihan persediaan Rp800.000.000 antar-PKP dalam penggabungan", "Rp0; bukan penyerahan BKP"]
        ],
        mengapaSalah: {
          A: "Nilai buku tidak memindahkan sisa rugi fiskal; Pasal 402 ayat (1) PMK 81 Tahun 2024 melarang penerima mengompensasikan kerugian pihak yang mengalihkan harta",
          C: "Pengalihan BKP dalam penggabungan antar-PKP dikecualikan dari pengertian penyerahan (Pasal 1A ayat (2) huruf d UU PPN)",
          D: "Stem menyatakan nilai buku dipakai; harta dicatat sebesar nilai buku pihak yang mengalihkan dan disusutkan sesuai sisa masa manfaat, bukan dinilai kembali ke nilai pasar"
        },
        jebakan: "Nilai buku menghindari pajak atas keuntungan pengalihan, tetapi tidak 'membawa' rugi fiskal pihak yang menggabungkan diri. Sejak 1 Januari 2025 dasar nilai buku adalah PMK 81 Tahun 2024 (PMK 52/PMK.010/2017 sudah dicabut) dan nilai buku memerlukan persetujuan Direktur Jenderal Pajak."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 392 ayat (2) dan ayat (3), Pasal 402 ayat (1), dan Pasal 403 PMK 81 Tahun 2024 s.t.d.t.d. PMK 1 Tahun 2026", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 1A ayat (2) huruf d UU PPN", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-105", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-13", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Samudra Kimia Nusantara (1/3). PT Samudra Kimia Nusantara (PKP, manufaktur cat; pembukuan Rupiah; tahun buku kalender) mencatat transaksi valuta asing dengan kurs tengah Bank Indonesia (BI) pada tanggal transaksi dan menjabarkan pos moneter dengan kurs tengah BI pada tanggal neraca. Pada 18 November 2025 perusahaan mengimpor bahan baku secara kredit senilai USD120.000 (kurs tengah BI Rp15.950; kurs KMK yang dipakai dalam PIB Rp15.900). Utang belum dibayar pada 31 Desember 2025, ketika kurs tengah BI Rp16.200 dan kurs KMK Rp16.180. Utang dilunasi pada 20 Februari 2026 dari rekening Rupiah dengan kurs jual bank Rp16.050 (kurs tengah BI Rp16.030; kurs KMK Rp16.000). Selisih kurs atas utang tersebut yang diakui dalam laporan laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rugi Rp30.000.000", B: "Rugi Rp33.600.000", C: "Rugi Rp27.600.000", D: "Rugi Rp36.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PSAK 221 (eks-PSAK 10): utang usaha valas adalah pos moneter, dicatat awal dengan kurs transaksi (kebijakan perusahaan: kurs tengah BI 15.950) dan dijabarkan pada tanggal neraca dengan kurs penutup (kurs tengah BI 16.200). Utang dalam Rupiah naik Rp30.000.000, sehingga diakui rugi selisih kurs belum direalisasi dalam laba rugi 2025. Kurs KMK dan kurs pelunasan 2026 adalah data berlebih untuk pertanyaan ini.",
        jejakHitung: [["Utang awal = 120.000 × 15.950", "Rp1.914.000.000"], ["Utang 31 Des 2025 = 120.000 × 16.200", "Rp1.944.000.000"], ["Rugi selisih kurs belum direalisasi = 120.000 × (16.200 − 15.950)", "Rp30.000.000"], ["Jurnal 31 Des 2025", "Dr Rugi selisih kurs 30.000.000 / Cr Utang usaha 30.000.000"]],
        mengapaSalah: { B: "Memakai kurs KMK untuk pengakuan awal (15.900) dan penjabaran akhir (16.180); kurs KMK untuk menghitung pungutan impor, bukan untuk mencatat utang usaha", C: "Kurs penutup diambil dari kurs KMK 31 Desember (16.180); pos moneter dijabarkan dengan kurs tengah BI 16.200", D: "Kurs awal diambil dari kurs KMK dalam PIB (15.900), padahal utang dicatat dengan kurs tengah BI tanggal transaksi 15.950" },
        jebakan: "Empat kurs disajikan sekaligus; pembukuan memakai kurs tengah BI tanggal transaksi dan tanggal neraca, kurs KMK hanya untuk menghitung pungutan impor."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B7-106", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-B7-13", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Samudra Kimia Nusantara (2/3). Utang impor USD120.000 PT Samudra Kimia Nusantara dicatat 18 November 2025 dengan kurs tengah BI Rp15.950 dan dijabarkan pada 31 Desember 2025 dengan kurs tengah BI Rp16.200. Utang dilunasi pada 20 Februari 2026: bank mendebit rekening Rupiah perusahaan dengan kurs jual bank Rp16.050, sedangkan pada hari itu kurs tengah BI Rp16.030 dan kurs KMK Rp16.000. Biaya transfer bank Rp150.000 dibebankan dan dijurnal terpisah. Jurnal pelunasan utang yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Utang usaha Rp1.944.000.000; Cr Kas Rp1.923.600.000; Cr Laba selisih kurs Rp20.400.000",
        B: "Dr Utang usaha Rp1.944.000.000; Cr Kas Rp1.920.000.000; Cr Laba selisih kurs Rp24.000.000",
        C: "Dr Utang usaha Rp1.944.000.000; Cr Kas Rp1.926.000.000; Cr Laba selisih kurs Rp18.000.000",
        D: "Dr Utang usaha Rp1.914.000.000; Dr Rugi selisih kurs Rp12.000.000; Cr Kas Rp1.926.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Saat pelunasan, utang dihentikan pengakuannya sebesar nilai tercatat terakhir (kurs penutup 2025: 120.000 × 16.200 = Rp1.944.000.000), sedangkan kas berkurang sebesar Rupiah yang benar-benar dibayar (120.000 × kurs jual bank 16.050 = Rp1.926.000.000). Selisihnya Rp18.000.000 adalah laba selisih kurs yang direalisasi pada 2026.",
        jejakHitung: [["Nilai tercatat utang = 120.000 × 16.200", "Rp1.944.000.000"], ["Kas dibayar = 120.000 × 16.050", "Rp1.926.000.000"], ["Laba selisih kurs = 1.944.000.000 − 1.926.000.000", "Rp18.000.000"], ["Pembanding: total selisih sejak transaksi = 120.000 × (16.050 − 15.950)", "Rugi Rp12.000.000 = rugi 2025 Rp30.000.000 − laba 2026 Rp18.000.000"]],
        mengapaSalah: { A: "Kas yang keluar adalah Rupiah yang benar-benar didebit bank (kurs jual 16.050), bukan USD dikali kurs tengah BI 16.030", B: "Kurs KMK tidak dipakai untuk mencatat pelunasan utang usaha", D: "Mengabaikan penjabaran 31 Desember 2025; saldo utang sudah Rp1.944.000.000 dan rugi Rp30.000.000 sudah diakui pada 2025" },
        jebakan: "Kurs pelunasan dibandingkan dengan kurs penutup tahun lalu, bukan kurs awal transaksi; kurs tengah BI dan kurs KMK pada hari pelunasan hanyalah pengecoh."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-107", topik: "B7.4", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-B7-13", laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 4 ayat (1) huruf l UU PPh: yang menjadi objek pajak termasuk keuntungan selisih kurs mata uang asing. Pasal 6 ayat (1) huruf e UU PPh: kerugian selisih kurs mata uang asing termasuk pengurang penghasilan bruto. PP 94/2010 Pasal 9 ayat (1): keuntungan atau kerugian selisih kurs mata uang asing diakui sebagai penghasilan atau biaya berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan Standar Akuntansi Keuangan yang berlaku di Indonesia.",
      stem: "Vignette PT Samudra Kimia Nusantara (3/3). Atas utang impor USD120.000, PT Samudra Kimia Nusantara mengakui rugi selisih kurs belum direalisasi Rp30.000.000 dalam laba rugi 2025 (penjabaran dengan kurs tengah BI 31 Desember 2025) dan laba selisih kurs yang direalisasi Rp18.000.000 dalam laba rugi 2026 (pelunasan 20 Februari 2026). Tarif PPh badan 22%; perusahaan menerapkan PSAK 212 dan tidak memiliki fasilitas pajak. Berdasarkan kutipan tersebut, perlakuan fiskal dan pajak tangguhan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Rugi Rp30.000.000 dikoreksi positif pada 2025 karena belum direalisasi dan diakui pada 2026 bersama laba realisasi; timbul aset pajak tangguhan Rp6.600.000",
        B: "Rugi Rp30.000.000 tidak dikoreksi pada 2025; pada 2026 laba Rp18.000.000 dikoreksi negatif dan diganti rugi Rp12.000.000 dari kurs awal ke kurs pelunasan",
        C: "Rugi Rp30.000.000 tidak dikoreksi pada 2025, tetapi karena kurs KMK berbeda dengan kurs tengah BI timbul beda temporer yang dicatat sebagai pajak tangguhan",
        D: "Rugi Rp30.000.000 tidak dikoreksi pada 2025 dan laba Rp18.000.000 menjadi penghasilan 2026; karena perlakuan fiskal sama dengan SAK, tidak ada beda temporer dan tidak ada pajak tangguhan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Fiskal mengikuti pembukuan taat asas sesuai SAK: rugi Rp30.000.000 (2025) dapat dikurangkan dan laba Rp18.000.000 (2026) menjadi objek. Dasar pajak utang sama dengan nilai tercatatnya, sehingga tidak ada beda temporer dan tidak ada pajak tangguhan. Total selama dua tahun rugi Rp12.000.000, sama dengan selisih kurs awal ke kurs pelunasan.",
        jejakHitung: [["2025: rugi belum direalisasi", "Rp30.000.000 → dikurangkan, koreksi Rp0"], ["2026: laba realisasi", "Rp18.000.000 → objek, koreksi Rp0"], ["Total dua tahun = −30.000.000 + 18.000.000", "Rugi Rp12.000.000"], ["Beda temporer / pajak tangguhan", "Rp0"]],
        mengapaSalah: { A: "PP 94/2010 Pasal 9 tidak mensyaratkan realisasi; rugi belum direalisasi yang diakui sesuai SAK langsung dapat dikurangkan, sehingga tidak ada beda temporer", B: "Rugi Rp30 juta sudah dibiayakan pada 2025; menghitung ulang dari kurs awal pada 2026 membuat rugi diakui dua kali", C: "Kurs KMK tidak dipakai untuk menjabarkan saldo pembukuan, sehingga perbedaan kurs KMK dengan kurs tengah BI tidak menimbulkan dasar pajak yang berbeda" },
        jebakan: "Selisih kurs belum direalisasi sering dikira beda temporer; menurut PP 94/2010 Pasal 9 fiskal mengikutinya, jadi tidak ada koreksi dan tidak ada pajak tangguhan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "PSAK 212 (pajak penghasilan)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-108", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Nusa Elektrik Mandiri (pembukuan Rupiah; tahun buku kalender) memiliki saldo valuta asing berikut pada 31 Desember 2025: (1) giro USD20.000 tercatat dengan kurs Rp15.950; (2) uang muka pembelian mesin yang tidak dapat dikembalikan USD50.000, dibayar 1 November 2025 dengan kurs Rp15.900, mesin belum diterima; (3) persediaan bahan impor USD30.000 tercatat dengan kurs Rp16.000; dan (4) pinjaman bank USD100.000 tercatat dengan kurs Rp15.980. Kurs tengah BI 31 Desember 2025 Rp16.100, sedangkan kurs KMK minggu itu Rp16.080. Selisih kurs neto yang diakui dalam laba rugi 2025 sesuai PSAK 221 (eks-PSAK 10), yang sekaligus diakui dalam penghasilan neto fiskal, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Laba Rp4.000.000", B: "Rugi Rp9.000.000", C: "Rugi Rp7.400.000", D: "Laba Rp1.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya pos moneter (hak menerima atau kewajiban membayar sejumlah valas tertentu) yang dijabarkan dengan kurs penutup: giro dan pinjaman bank. Uang muka nonrefundable dan persediaan adalah pos nonmoneter yang tetap memakai kurs tanggal transaksi. Laba giro Rp3.000.000 dikurangi rugi pinjaman Rp12.000.000 menghasilkan rugi neto Rp9.000.000, yang juga diakui fiskal (PP 94/2010 Pasal 9).",
        jejakHitung: [["Giro: 20.000 × (16.100 − 15.950)", "Laba Rp3.000.000"], ["Pinjaman: 100.000 × (16.100 − 15.980)", "Rugi Rp12.000.000"], ["Uang muka mesin dan persediaan (nonmoneter)", "Tidak dijabarkan"], ["Neto", "Rugi Rp9.000.000"]],
        mengapaSalah: { A: "Menjabarkan keempat pos; uang muka nonrefundable dan persediaan adalah pos nonmoneter yang tetap memakai kurs historis", C: "Memakai kurs KMK 16.080 sebagai kurs penutup; pembukuan sesuai SAK memakai kurs tengah BI 16.100", D: "Uang muka yang tidak dapat dikembalikan adalah hak atas barang (nonmoneter), bukan hak menerima sejumlah USD" },
        jebakan: "Uang muka pembelian dan persediaan dalam USD sering ikut dijabarkan; keduanya nonmoneter sehingga tidak menimbulkan selisih kurs."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-109",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Delta Plastindo (PKP; importir pemilik API-U; pembukuan Rupiah, transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) mengimpor resin bahan baku dengan nilai CIF USD30.000 secara kredit; PIB didaftarkan dan pungutan impor dilunasi pada 3 Agustus 2026. Kurs KMK yang berlaku untuk pelunasan pungutan impor Rp16.200, sedangkan kurs tengah BI tanggal transaksi Rp16.260. Bea masuk 5%, PPN impor 12% × DPP nilai lain 11/12, dan PPh Pasal 22 impor 2,5%; biaya angkut dari pelabuhan ke gudang Rp4.500.000. Utang kepada pemasok dilunasi 2 September 2026 dengan kurs tengah BI Rp16.310. Jumlah yang didebit ke akun Persediaan bahan baku atas impor ini sampai bahan tiba di gudang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp514.800.000", B: "Rp516.690.000", C: "Rp516.600.000", D: "Rp529.357.500" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Harga barang (utang ke pemasok) dicatat dengan kurs transaksi: 30.000 × 16.260 = Rp487.800.000. Bea masuk dihitung dari nilai pabean dengan kurs KMK: 5% × 30.000 × 16.200 = Rp24.300.000 dan menjadi biaya perolehan, demikian pula angkut ke gudang. PPN impor Rp56.133.000 (Pajak Masukan) dan PPh 22 impor Rp12.757.500 (PPh dibayar di muka) tidak dikapitalisasi.",
        jejakHitung: [
          ["Harga barang = 30.000 × 16.260", "Rp487.800.000"],
          ["Bea masuk = 5% × 30.000 × 16.200", "Rp24.300.000"],
          ["Nilai impor = 486.000.000 + 24.300.000", "Rp510.300.000"],
          ["PPN impor = 12% × 11/12 × 510.300.000 (dikreditkan)", "Rp56.133.000"],
          ["PPh 22 impor = 2,5% × 510.300.000 (kredit pajak)", "Rp12.757.500"],
          ["Persediaan = 487.800.000 + 24.300.000 + 4.500.000", "Rp516.600.000"]
        ],
        mengapaSalah: {
          A: "Harga barang dicatat dengan kurs KMK; kurs KMK hanya untuk menghitung bea masuk, PPN impor, dan PPh 22 impor",
          B: "Bea masuk dihitung ulang dengan kurs tengah BI (Rp24.390.000), padahal yang dibayar Rp24.300.000 berdasarkan kurs KMK",
          D: "PPh 22 impor adalah kredit pajak (PPh dibayar di muka), bukan bagian harga perolehan"
        },
        jebakan: "Dalam satu transaksi impor bekerja dua kurs: kurs KMK untuk pungutan impor, kurs transaksi untuk harga barang dan utang usaha."
      },
      dasarHukum: [{ pasal: "PSAK 202 (persediaan)", berlakuSejak: "2024-01-01" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025; PPh 22 impor 2,5% dengan API)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 131/2024 (PPN 12% × DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B7-110", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1, kasusId: "V-B7-14", laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Vignette PT Arunika Data Solusi (1/3). PT Arunika Data Solusi (PKP; pembukuan Rupiah, transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) memakai jasa konsultansi teknik dari Orion Engineering LLC, perusahaan di negara yang belum memiliki P3B dengan Indonesia dan tidak mempunyai BUT di Indonesia. Imbalan USD25.000 terutang dan dibayar pada 9 Juni 2026 dari rekening giro USD. Pada 9 Juni 2026 kurs KMK yang berlaku Rp16.280, kurs tengah BI Rp16.340, dan kurs jual bank Rp16.395; pada 14 Juli 2026 (tanggal setor) kurs KMK Rp16.150 dan kurs tengah BI Rp16.190. Kontrak tidak memuat klausul gross-up. PPh Pasal 26 yang wajib dipotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp81.400.000", B: "Rp81.700.000", C: "Rp80.750.000", D: "Rp81.975.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Imbalan jasa kepada WP luar negeri tanpa BUT dan tanpa P3B dipotong PPh Pasal 26 sebesar 20% dari jumlah bruto. Jumlah bruto dalam USD dikonversi dengan kurs KMK yang berlaku saat PPh terutang (9 Juni 2026): 20% × 25.000 × 16.280 = Rp81.400.000.",
        jejakHitung: [["Bruto dalam Rupiah = 25.000 × 16.280 (kurs KMK saat terutang)", "Rp407.000.000"], ["PPh 26 = 20% × 407.000.000", "Rp81.400.000"], ["Kurs tengah BI, kurs jual bank, kurs tanggal setor", "Tidak dipakai untuk DPP"]],
        mengapaSalah: { B: "Memakai kurs tengah BI (pembukuan); DPP pemotongan dalam valas dikonversi dengan kurs KMK", C: "Memakai kurs KMK pada tanggal setor; yang berlaku adalah kurs KMK saat PPh terutang (pembayaran 9 Juni 2026)", D: "Kurs jual bank adalah kurs transaksi bank, bukan kurs untuk menghitung pajak" },
        jebakan: "Kurs KMK dipakai pada saat terutang, bukan pada saat setor; kurs pembukuan (kurs tengah BI) tidak dipakai untuk DPP."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PMK 81/2024 (setor tanggal 15, lapor 20 hari)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "B7-111", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-B7-14", laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Vignette PT Arunika Data Solusi (2/3). Atas imbalan jasa konsultansi teknik USD25.000 kepada Orion Engineering LLC (tanpa P3B, tanpa BUT, tanpa gross-up) yang terutang dan dibayar 9 Juni 2026, PT Arunika memotong PPh Pasal 26 dengan kurs KMK Rp16.280 dan mentransfer sisanya dari giro USD yang dijabarkan dengan kurs tengah BI; kurs tengah BI hari itu Rp16.340 dan kurs jual bank Rp16.395. PPN atas pemanfaatan JKP dari luar Daerah Pabean (Rp44.770.000) dijurnal terpisah. Jurnal pembayaran imbalan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban jasa konsultansi Rp408.500.000; Cr Kas (giro USD) Rp326.800.000; Cr Utang PPh 26 Rp81.700.000",
        B: "Dr Beban jasa konsultansi Rp407.000.000; Cr Kas (giro USD) Rp325.600.000; Cr Utang PPh 26 Rp81.400.000",
        C: "Dr Beban jasa konsultansi Rp326.800.000; Dr Beban PPh 26 Rp81.400.000; Cr Kas (giro USD) Rp326.800.000; Cr Utang PPh 26 Rp81.400.000",
        D: "Dr Beban jasa konsultansi Rp408.500.000; Cr Kas (giro USD) Rp326.800.000; Cr Utang PPh 26 Rp81.400.000; Cr Laba selisih kurs Rp300.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Beban jasa dicatat sebesar bruto dengan kurs tengah BI (25.000 × 16.340 = Rp408.500.000); kas USD yang keluar USD20.000 × 16.340 = Rp326.800.000; utang PPh 26 sebesar pajak yang ditetapkan dengan kurs KMK Rp81.400.000. Karena kurs KMK lebih rendah dari kurs pembukuan, jurnal tidak seimbang sebesar Rp300.000 di sisi kredit: laba selisih kurs (USD5.000 × (16.340 − 16.280)).",
        jejakHitung: [["Beban = 25.000 × 16.340", "Rp408.500.000"], ["Kas USD = 20.000 × 16.340", "Rp326.800.000"], ["Utang PPh 26 = 20% × 25.000 × 16.280", "Rp81.400.000"], ["Selisih = 408.500.000 − 326.800.000 − 81.400.000", "Laba selisih kurs Rp300.000"], ["Cek: 5.000 × (16.340 − 16.280)", "Rp300.000"]],
        mengapaSalah: { A: "Utang PPh 26 dihitung dengan kurs tengah BI; jumlah pajak ditetapkan dengan kurs KMK (Rp81.400.000), selisihnya menjadi selisih kurs", B: "Beban dan kas dicatat dengan kurs KMK; pembukuan memakai kurs tengah BI tanggal transaksi", C: "PPh 26 dipotong dari penghasilan Orion, bukan beban PT Arunika; beban jasa adalah jumlah bruto" },
        jebakan: "Pajak ditetapkan dengan kurs KMK, beban dan kas dengan kurs pembukuan; selisih keduanya atas bagian USD yang dipotong adalah selisih kurs, bukan koreksi beban."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-112", topik: "B7.1", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1, kasusId: "V-B7-14", laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Vignette PT Arunika Data Solusi (3/3). PT Arunika mencatat Utang PPh Pasal 26 sebesar Rp81.400.000 (20% × USD25.000 × kurs KMK Rp16.280 pada saat terutang, 9 Juni 2026) dan menyetornya dari rekening Rupiah pada 14 Juli 2026, ketika kurs KMK Rp16.150 dan kurs tengah BI Rp16.190. Bukti potong BPNR telah dibuat di Coretax dan SPT Masa PPh Unifikasi Juni 2026 akan dilaporkan tepat waktu. Perlakuan penyetoran dan pencatatannya yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Menyetor Rp80.750.000 dengan kurs KMK tanggal setor dan mencatat laba selisih kurs Rp650.000 atas Utang PPh 26 yang tercatat Rp81.400.000",
        B: "Menyetor Rp81.400.000 paling lambat 15 Juli 2026; jurnal Dr Utang PPh 26 / Cr Kas Rp81.400.000 tanpa selisih kurs karena jumlah Rupiahnya sudah tetap sejak saat terutang",
        C: "Menyetor Rp80.950.000 dengan kurs tengah BI tanggal setor dan mencatat laba selisih kurs Rp450.000 atas Utang PPh 26 yang tercatat Rp81.400.000",
        D: "Menyetor Rp81.400.000 paling lambat 10 Juli 2026; jurnal Dr Utang PPh 26 / Cr Kas Rp81.400.000 tanpa selisih kurs karena jumlah Rupiahnya sudah tetap sejak saat terutang"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "PPh 26 terutang Masa Juni 2026 dan jumlahnya ditetapkan dalam Rupiah dengan kurs KMK saat terutang (Rp81.400.000). Utang itu bukan pos valas, sehingga perubahan kurs sampai tanggal setor tidak menimbulkan selisih kurs. Setor paling lambat 15 Juli 2026; SPT Masa PPh Unifikasi paling lama 20 hari setelah masa pajak berakhir (20 Juli 2026).",
        jejakHitung: [["Utang PPh 26 (kurs KMK 9 Juni 2026)", "Rp81.400.000"], ["Jumlah disetor 14 Juli 2026", "Rp81.400.000"], ["Selisih kurs saat setor", "Rp0"]],
        mengapaSalah: { A: "Utang PPh 26 adalah kewajiban Rupiah yang ditetapkan pada saat terutang; kurs KMK tanggal setor tidak mengubahnya", C: "Kurs tengah BI tidak dipakai untuk menetapkan jumlah pajak; utang PPh 26 bukan pos valas", D: "Tanggal 10 adalah tenggat setor sebelum PMK 81/2024; sejak 2025 paling lambat tanggal 15 bulan berikutnya" },
        jebakan: "Kurs tanggal setor adalah data berlebih: selisih kurs hanya timbul bila utang pajak keliru dicatat dalam USD atau dengan kurs pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 (setor tanggal 15, lapor 20 hari)", berlakuSejak: "2025-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-113", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Sinar Komponen Presisi (PKP; pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) pada 10 Juni 2026 menyerahkan suku cadang mesin (bukan barang mewah) kepada PT Otomotif Raya (PKP) seharga USD20.000. Sesuai kontrak, seluruh tagihan termasuk PPN dinyatakan dan dibayar dalam USD, sehingga invoice mencantumkan PPN USD2.200 (12% × 11/12). Faktur pajak dibuat pada 10 Juni 2026, ketika kurs KMK yang berlaku Rp16.400 dan kurs tengah BI Rp16.350; pelunasan diterima 30 Juni 2026 dengan kurs tengah BI Rp16.380. Jurnal pengakuan penjualan pada 10 Juni 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Piutang usaha Rp364.080.000; Cr Penjualan Rp327.000.000; Cr PPN Keluaran Rp36.080.000; Cr Laba selisih kurs Rp1.000.000",
        B: "Dr Piutang usaha Rp362.970.000; Cr Penjualan Rp327.000.000; Cr PPN Keluaran Rp35.970.000",
        C: "Dr Piutang usaha Rp362.970.000; Dr Rugi selisih kurs Rp1.110.000; Cr Penjualan Rp328.000.000; Cr PPN Keluaran Rp36.080.000",
        D: "Dr Piutang usaha Rp362.970.000; Dr Rugi selisih kurs Rp110.000; Cr Penjualan Rp327.000.000; Cr PPN Keluaran Rp36.080.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penjualan dan piutang (termasuk PPN USD2.200 yang ditagih dalam USD) dicatat dengan kurs tengah BI 16.350, sedangkan PPN Keluaran adalah kewajiban Rupiah yang dikonversi dengan kurs KMK yang berlaku saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21; di sini sama dengan tanggal penyerahan dan tanggal faktur): 11% × 20.000 × 16.400 = Rp36.080.000. Bagian PPN di piutang hanya bernilai 2.200 × 16.350 = Rp35.970.000, sehingga timbul rugi selisih kurs Rp110.000.",
        jejakHitung: [["Piutang = 22.200 × 16.350", "Rp362.970.000"], ["Penjualan = 20.000 × 16.350", "Rp327.000.000"], ["PPN Keluaran = 12% × 11/12 × 20.000 × 16.400", "Rp36.080.000"], ["Rugi selisih kurs = 327.000.000 + 36.080.000 − 362.970.000", "Rp110.000"], ["Cek: 2.200 × (16.400 − 16.350)", "Rp110.000"]],
        mengapaSalah: { A: "Piutang (termasuk PPN yang ditagih dalam USD) dicatat dengan kurs KMK; piutang adalah pos pembukuan yang memakai kurs tengah BI tanggal transaksi", B: "PPN Keluaran dalam faktur valas dikonversi dengan kurs KMK saat faktur pajak seharusnya dibuat (Rp36.080.000), bukan kurs tengah BI", C: "Penjualan ikut dicatat dengan kurs KMK; hanya PPN Keluaran yang memakai kurs KMK, pendapatan memakai kurs tengah BI 16.350" },
        jebakan: "PPN mengikuti kurs KMK saat faktur pajak seharusnya dibuat (di sini tanggal penyerahan 10 Juni 2026), piutang mengikuti kurs pembukuan; bila keduanya disamakan, selisih Rp110.000 hilang dari jurnal."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21 (PPN dalam valuta asing dikonversi dengan kurs KMK saat faktur pajak seharusnya dibuat)", berlakuSejak: "2022-12-02" }, { pasal: "Pasal 11 ayat (1) dan Pasal 13 UU PPN; PER-11/PJ/2025 (faktur pajak)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 131/2024 (PPN 12% × DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-114", topik: "B7.4", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Dalam rapat penutupan buku 2025, staf akuntansi PT Lintas Benua Logistik (pembukuan Rupiah; memiliki piutang dan utang dalam USD, mengimpor suku cadang, serta membayar jasa dan royalti ke luar negeri) mengusulkan agar seluruh perhitungan valas memakai satu kurs saja supaya laporan keuangan, SPT Masa PPh Pasal 26, SPT Masa PPN, dan SPT Tahunan 'cocok'. Manajer pajak menolak usulan tersebut. Pernyataan yang paling tepat mengenai pemakaian kurs KMK dan kurs tengah BI adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Kurs KMK yang berlaku saat pajak terutang dipakai untuk DPP PPh potong/pungut, PPN, dan pungutan impor; pembukuan memakai kurs transaksi dan kurs penutup (kurs tengah BI) untuk pos moneter; selisih kurs yang timbul diakui fiskal mengikuti pembukuan",
        B: "Kurs KMK yang berlaku saat pajak disetor dipakai untuk DPP PPh potong/pungut, PPN, dan pungutan impor; pembukuan memakai kurs transaksi dan kurs penutup (kurs tengah BI) untuk pos moneter; selisih kurs yang timbul diakui fiskal mengikuti pembukuan",
        C: "Kurs KMK yang berlaku saat pajak terutang dipakai untuk DPP PPh potong/pungut, PPN, dan pungutan impor; pos moneter akhir tahun juga dijabarkan dengan kurs KMK untuk SPT Tahunan, sehingga selisihnya terhadap kurs tengah BI dikoreksi fiskal",
        D: "Kurs KMK yang berlaku saat pajak terutang dipakai untuk DPP PPh potong/pungut, PPN, dan pungutan impor; pembukuan memakai kurs transaksi dan kurs penutup (kurs tengah BI) untuk pos moneter; selisih kurs belum direalisasi baru diakui fiskal saat pelunasan"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dua kurs punya fungsi berbeda: kurs KMK (kurs pajak mingguan) untuk menghitung pajak yang terutang atas transaksi valas pada saat terutangnya, sedangkan kurs transaksi dan kurs penutup (praktiknya kurs tengah BI) untuk pembukuan sesuai PSAK 221. Selisih kurs yang timbul dalam pembukuan, termasuk yang belum direalisasi, diakui fiskal mengikuti pembukuan (PP 94/2010 Pasal 9).",
        jejakHitung: [],
        mengapaSalah: { B: "Kurs KMK ditentukan pada saat pajak terutang (pembayaran/terutangnya imbalan, faktur, atau PIB), bukan saat setor", C: "Tidak ada kewajiban menjabarkan ulang saldo dengan kurs KMK untuk SPT; fiskal mengikuti pembukuan taat asas sesuai SAK", D: "PP 94/2010 Pasal 9 mengakui selisih kurs belum direalisasi sepanjang diakui dalam pembukuan sesuai SAK" },
        jebakan: "Opsi yang tampak lengkap berbeda hanya pada satu frasa: 'saat terutang' vs 'saat disetor', dan 'mengikuti pembukuan' vs 'saat pelunasan'."
      },
      dasarHukum: [{ pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-115",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Prima Tekstil Ekspor (pembukuan Rupiah; tahun buku kalender) sejak awal 2026 mencatat seluruh transaksi USD dengan kurs tetap (budget rate) Rp16.000 yang ditetapkan direksi. Pada 31 Desember 2026 masih terdapat piutang ekspor USD50.000 dan utang impor USD20.000, keduanya tercatat dengan kurs tetap tersebut; kurs tengah BI 31 Desember 2026 Rp16.250 dan kurs KMK yang berlaku Rp16.230. Staf pajak berpendapat bahwa karena perusahaan memakai kurs tetap, selisih kurs baru diakui saat realisasi. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Pendapat staf benar: bagi pemakai kurs tetap, selisih kurs diakui saat realisasi, sehingga laba Rp7.500.000 yang dicatat akuntan dikoreksi negatif pada 2026", B: "Pos moneter dijabarkan dengan kurs KMK Rp16.230 untuk keperluan fiskal, sehingga laba selisih kurs yang diakui dalam SPT 2026 sebesar Rp6.900.000", C: "Pos moneter wajib dijabarkan dengan kurs penutup Rp16.250 sehingga laba selisih kurs neto Rp7.500.000 diakui pada 2026, baik secara komersial maupun fiskal", D: "Hanya piutang yang dijabarkan ke kurs penutup karena utang dicatat sebesar kewajiban kontraktual, sehingga laba selisih kurs 2026 Rp12.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PSAK 221 hanya membolehkan kurs pendekatan (mis. rata-rata) untuk pengakuan awal bila mendekati kurs spot, dan pada tanggal neraca pos moneter tetap wajib dijabarkan dengan kurs penutup. Laba neto (50.000 − 20.000) × (16.250 − 16.000) = Rp7.500.000 diakui pada 2026 dan, menurut PP 94/2010 Pasal 9, juga diakui fiskal tanpa koreksi.",
        jejakHitung: [
          ["Piutang: 50.000 × (16.250 − 16.000)", "Laba Rp12.500.000"],
          ["Utang: 20.000 × (16.250 − 16.000)", "Rugi Rp5.000.000"],
          ["Neto", "Laba Rp7.500.000"],
          ["Koreksi fiskal", "Rp0"]
        ],
        mengapaSalah: {
          A: "SE-03/PJ.31/1997 angka 1 huruf b memang membolehkan pembebanan selisih kurs saat realisasi bagi pemakai kurs tetap, tetapi SE itu terbit pada 1997 berdasarkan UU PPh lama. PP 94/2010 Pasal 9 ayat (1), yang lebih tinggi dan masih berlaku (PP 55/2022 Pasal 72 hanya mencabut Pasal 2A PP 94/2010), mensyaratkan pembukuan taat asas sesuai SAK; menurut PSAK 221 pos moneter pada tanggal neraca dijabarkan dengan kurs penutup, sehingga tidak ada koreksi negatif",
          B: "Kurs KMK untuk menghitung pajak atas transaksi, bukan untuk menjabarkan saldo pembukuan",
          D: "Utang USD juga pos moneter; rugi atasnya (20.000 × 250 = Rp5.000.000) ikut diakui"
        },
        jebakan: "Istilah 'kurs tetap' memancing jawaban lama dari SE-03/PJ.31/1997 (diakui saat realisasi); kuncinya PP 94/2010 Pasal 9 ayat (1) yang mensyaratkan pembukuan taat asas sesuai SAK."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B7-116",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 28 UU KUP (parafrase): (4) Pembukuan atau pencatatan wajib diselenggarakan di Indonesia dengan menggunakan huruf Latin, angka Arab, satuan mata uang Rupiah, dan disusun dalam bahasa Indonesia atau dalam bahasa asing yang diizinkan oleh Menteri Keuangan. (8) Pembukuan yang menggunakan bahasa asing dan mata uang selain Rupiah dapat diselenggarakan oleh Wajib Pajak setelah mendapat izin Menteri Keuangan.",
      stem: "PT Andalan Batubara Kaltim (PMA; induk di Singapura) telah memperoleh izin menyelenggarakan pembukuan dalam bahasa Inggris dan satuan mata uang dolar AS mulai Tahun Buku 2026. Perusahaan menggaji 400 pegawai dalam Rupiah, membayar jasa angkutan kepada kontraktor dalam negeri dalam Rupiah, dan membayar royalti kepada pihak di luar negeri dalam USD. Pada 31 Desember 2026 terdapat Utang PPh Pasal 21 Masa Desember dalam Rupiah dan deposito Rupiah. Berdasarkan kutipan tersebut dan ketentuan pelaksanaannya, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SPT Tahunan PPh Badan disampaikan dalam Rupiah dengan menjabarkan laporan keuangan USD memakai kurs tengah BI 31 Desember 2026; PPh Pasal 21, 23, dan 26 tetap disetor dalam Rupiah; saldo Rupiah tidak menimbulkan selisih kurs", B: "SPT Tahunan PPh Badan disampaikan dalam mata uang dolar AS; PPh Pasal 21, 23, dan 26 tetap dihitung dan disetor dalam Rupiah (valas dikonversi dengan kurs KMK); saldo Rupiah seperti utang PPh 21 dan deposito adalah pos moneter valas yang menimbulkan selisih kurs", C: "SPT Tahunan PPh Badan disampaikan dalam mata uang dolar AS; PPh Pasal 21, 23, dan 26 juga dihitung dan disetor dalam dolar AS mengikuti mata uang pembukuan tanpa kurs KMK; saldo Rupiah tidak menimbulkan selisih kurs", D: "SPT Tahunan PPh Badan disampaikan dalam mata uang dolar AS; izin cukup dimohonkan bersamaan dengan SPT Tahunan pertama; saldo Rupiah seperti utang PPh 21 dan deposito adalah pos moneter valas yang menimbulkan selisih kurs" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dengan izin, pembukuan diselenggarakan dalam bahasa Inggris dan USD, dan SPT Tahunan PPh Badan beserta lampirannya disampaikan dalam mata uang USD (berbahasa Indonesia, kecuali lampiran laporan keuangan); PPh Pasal 25 dan 29 pun dibayar dalam USD. Kewajiban sebagai pemotong (PPh 21, 23, 26) tetap dihitung dan disetor dalam Rupiah; imbalan dalam valas dikonversi dengan kurs KMK. Bagi pembukuan USD, Rupiah adalah mata uang asing: utang PPh 21 dan deposito Rupiah dijabarkan ke USD pada tanggal neraca dan menimbulkan selisih kurs.",
        jejakHitung: [],
        mengapaSalah: {
          A: "WP yang berizin menyampaikan SPT Tahunan PPh Badan dalam mata uang dolar AS, bukan Rupiah; bagi pembukuan USD, saldo Rupiah adalah pos valas",
          C: "Izin pembukuan tidak mengubah kewajiban pemotong: pajak yang dipotong tetap dihitung dan disetor dalam Rupiah; yang dibayar dalam USD adalah PPh Pasal 25 dan 29 perusahaan sendiri",
          D: "Ayat (8) mensyaratkan izin lebih dulu; pembukuan USD baru sah setelah izin, bukan disusulkan bersama SPT"
        },
        jebakan: "Pada pembukuan USD, arah selisih kurs terbalik: yang dijabarkan adalah saldo Rupiah."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 161 ayat (2) PMK 81 Tahun 2024 (SPT Tahunan PPh Badan dalam USD, berbahasa Indonesia kecuali laporan keuangan); Pasal 106 ayat (1) dan ayat (2) huruf a PMK 81 Tahun 2024 (PPh 25/29 dibayar dalam USD, pajak lain dalam Rupiah)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 4 ayat (1) PMK 196/PMK.03/2007; Pasal 21 ayat (1) dan ayat (3) PER-8/PJ/2025 (izin lebih dulu; permohonan paling lambat 3 bulan sebelum tahun buku dimulai)" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-117",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.l1.2",
      laporanUjian: ["C-2026-10"],
      stem: "PT Garuda Logam Ekspor (tahun buku kalender; pembukuan Rupiah sesuai SAK) menyusun Lampiran 1771-I Tahun Pajak 2024. Laba rugi komersial memuat: laba selisih kurs belum direalisasi Rp45.000.000 atas penjabaran piutang ekspor dengan kurs tengah BI 31 Desember 2024; rugi selisih kurs yang direalisasi Rp12.000.000 atas pelunasan utang impor; dan bunga deposito USD Rp8.000.000 yang telah dipotong PPh final. Seandainya dijabarkan dengan kurs KMK, laba belum direalisasi itu hanya Rp41.000.000. Pengisian Lampiran 1771-I yang tepat atas pos-pos tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Laba neto selisih kurs Rp33.000.000 tetap dalam angka 2 (penghasilan dan biaya dari luar usaha) tanpa penyesuaian di angka 7 atau 8; bunga deposito Rp8.000.000 dikurangkan di angka 6", B: "Laba neto selisih kurs Rp33.000.000 tetap dalam angka 2, tetapi laba belum direalisasi Rp45.000.000 disesuaikan negatif di angka 8; bunga deposito Rp8.000.000 dikurangkan di angka 6", C: "Laba neto selisih kurs Rp33.000.000 tetap dalam angka 2, tetapi Rp4.000.000 (selisih kurs tengah BI dan kurs KMK) disesuaikan negatif di angka 8; bunga deposito Rp8.000.000 dikurangkan di angka 6", D: "Laba neto selisih kurs Rp33.000.000 dan bunga deposito Rp8.000.000 sama-sama dikurangkan di angka 6 sebagai penghasilan yang dikenai PPh final atau bukan objek pajak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Laba dan rugi selisih kurs sudah ada dalam penghasilan neto komersial sebagai penghasilan dan biaya dari luar usaha (angka 2). Karena fiskal mengikuti pembukuan sesuai SAK, tidak ada penyesuaian di angka 7 atau 8. Bunga deposito yang dikenai PPh final dikeluarkan di angka 6.",
        jejakHitung: [
          ["Selisih kurs neto = 45.000.000 − 12.000.000", "Rp33.000.000 di angka 2"],
          ["Penyesuaian angka 7/8 atas selisih kurs", "Rp0"],
          ["Bunga deposito final di angka 6", "Rp8.000.000"]
        ],
        mengapaSalah: {
          B: "Laba belum direalisasi yang diakui sesuai SAK adalah penghasilan fiskal (PP 94/2010 Pasal 9); tidak ada koreksi negatif",
          C: "Saldo tidak dijabarkan ulang dengan kurs KMK untuk SPT; angka Rp41.000.000 adalah data berlebih",
          D: "Selisih kurs adalah penghasilan tarif umum (Pasal 4 ayat (1) huruf l); hanya bunga deposito yang final"
        },
        jebakan: "'Belum direalisasi' dan angka kurs KMK memancing koreksi negatif; PP 94/2010 Pasal 9 justru membuat selisih kurs tidak dikoreksi."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-34/PJ/2010 Pasal 4 s.t.d.t.d. PER-30/PJ/2017 (Formulir 1771 dan lampirannya)", berlakuSejak: "2010-07-27" }, { pasal: "PER-11/PJ/2025 Pasal 138 huruf a (formulir lama hanya untuk Tahun Pajak sampai dengan 2024)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Tahun pajak diubah ke 2024 karena PER-11/PJ/2025 Pasal 138 huruf a: Formulir 1771 (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017) hanya untuk Tahun Pajak sampai dengan 2024; Tahun Pajak 2025 memakai Lampiran 1A-1L Rekonsiliasi Laporan Keuangan dan Lampiran 4 (Pasal 85). Yang belum dicocokkan: penomoran angka 2, 6, 7, dan 8 pada Lampiran 1771-I, karena lampiran petunjuk pengisian PER-34/PJ/2010 tidak ada di pustaka."
    },
    {
      id: "B7-118", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Mitra Kakao Ekspor (pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi, pos moneter dijabarkan dengan kurs tengah BI tanggal neraca; hasil ekspor langsung dikonversi bank ke rekening Rupiah) mengekspor biji kakao USD100.000 pada 6 Oktober 2025 (kurs tengah BI Rp15.700; kurs KMK Rp15.650). Pada 5 Desember 2025 diterima USD40.000 yang dikonversi dengan kurs beli bank Rp15.820 (kurs tengah BI Rp15.850). Pada 31 Desember 2025 kurs tengah BI Rp16.050 dan kurs KMK Rp16.000. Sisa piutang dilunasi 16 Januari 2026 dengan kurs beli bank Rp16.120. Keuntungan selisih kurs neto atas piutang ini, termasuk atas USD40.000 yang langsung dikonversi bank, yang diakui dalam penghasilan neto fiskal Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.000.000", B: "Rp22.800.000", C: "Rp4.800.000", D: "Rp25.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tahun Pajak 2025 mengakui dua bagian: laba realisasi atas USD40.000 yang diterima (40.000 × (15.820 − 15.700) = Rp4.800.000) dan laba belum direalisasi atas sisa USD60.000 yang dijabarkan ke kurs tengah BI 31 Desember (60.000 × (16.050 − 15.700) = Rp21.000.000). Jumlahnya Rp25.800.000. Pada 2026 hanya diakui 60.000 × (16.120 − 16.050) = Rp4.200.000.",
        jejakHitung: [["Realisasi 5 Des: 40.000 × (15.820 − 15.700)", "Rp4.800.000"], ["Belum direalisasi 31 Des: 60.000 × (16.050 − 15.700)", "Rp21.000.000"], ["TP 2025", "Rp25.800.000"], ["TP 2026: 60.000 × (16.120 − 16.050)", "Rp4.200.000"], ["Cek total = 40.000 × 120 + 60.000 × 420", "Rp30.000.000"]],
        mengapaSalah: { A: "Penerimaan 5 Desember diukur dengan kurs tengah BI 15.850; laba realisasi dihitung dari Rupiah yang benar-benar diterima (kurs beli bank 15.820)", B: "Sisa piutang dijabarkan dengan kurs KMK 16.000; pembukuan memakai kurs tengah BI 16.050", C: "Hanya mengakui laba yang direalisasi; laba belum direalisasi Rp21.000.000 juga diakui fiskal sesuai SAK" },
        jebakan: "Pelunasan sebagian membagi piutang menjadi bagian realisasi (kurs bank) dan bagian belum direalisasi (kurs penutup); keduanya masuk tahun yang sama."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-119", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Wira Konsultan Manajemen (pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) menagih jasa konsultansi manajemen USD30.000 kepada PT Bumi Tambang Jaya pada 2 September 2026, ketika kurs tengah BI Rp16.240 dan kurs KMK Rp16.190; PPN ditagih dan dibayar terpisah dalam Rupiah. Tagihan itu jatuh tempo 30 September 2026 dan baru dicatat PT Bumi sebagai utang pada tanggal tersebut. Pada 30 September 2026 PT Bumi membayar ke giro USD PT Wira setelah memotong PPh Pasal 23 sebesar 2% dengan kurs KMK yang berlaku hari itu Rp16.280; bukti potong BPPU mencantumkan PPh Pasal 23 Rp9.768.000. Kurs tengah BI 30 September 2026 Rp16.300. Laba selisih kurs dalam jurnal penerimaan pembayaran di PT Wira adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.800.000", B: "Rp1.764.000", C: "Rp1.788.000", D: "Rp1.200.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh Pasal 23 terutang saat penghasilan dibayarkan, disediakan untuk dibayarkan (dicatat sebagai utang), atau jatuh tempo, mana yang lebih dahulu; ketiganya jatuh pada 30 September 2026, sehingga pemotong memakai kurs KMK hari itu Rp16.280, bukan kurs KMK 2 September Rp16.190. Bagi PT Wira, kredit pajak mengikuti jumlah rupiah dalam bukti potong (Rp9.768.000), tidak dikonversi ulang dengan kurs pembukuan. Piutang tercatat 30.000 × 16.240 = Rp487.200.000. Pada pelunasan, kas USD29.400 dicatat 29.400 × 16.300 = Rp479.220.000 dan PPh 23 dibayar di muka sebesar bukti potong Rp9.768.000 (kurs KMK). Jumlah debit melebihi piutang Rp1.788.000: laba selisih kurs (laba 29.400 × (16.300 − 16.240) = Rp1.764.000 ditambah laba 600 × (16.280 − 16.240) = Rp24.000 atas bagian yang dipotong).",
        jejakHitung: [["Saat terutang PPh 23 (dicatat sebagai utang, jatuh tempo, dan dibayar)", "30 September 2026 → kurs KMK Rp16.280"], ["Piutang = 30.000 × 16.240", "Rp487.200.000"], ["Kas = 29.400 × 16.300", "Rp479.220.000"], ["PPh 23 dibayar di muka = 2% × 30.000 × 16.280", "Rp9.768.000"], ["Laba selisih kurs = 479.220.000 + 9.768.000 − 487.200.000", "Rp1.788.000"], ["Kredit pajak di SPT Tahunan PT Wira", "Rp9.768.000 (mengikuti rupiah di bukti potong)"]],
        mengapaSalah: { A: "Menganggap PPh 23 dibayar di muka bernilai USD600 × 16.300; nilainya adalah Rupiah dalam bukti potong (kurs KMK) Rp9.768.000", B: "Hanya menghitung selisih atas USD29.400 yang diterima dan melupakan selisih atas bagian USD600 yang dipotong", D: "Kas USD dicatat dengan kurs KMK; penerimaan giro USD dicatat dengan kurs tengah BI 16.300" },
        jebakan: "Di pihak yang dipotong, kredit pajak mengikuti Rupiah dalam bukti potong (kurs KMK), sedangkan piutang memakai kurs pembukuan; selisihnya ikut masuk selisih kurs."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-120", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Rasa Nusantara Waralaba (pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) membayar royalti merek kepada Brandhaus GmbH di negara yang belum memiliki P3B dengan Indonesia. Kontrak menetapkan Brandhaus menerima USD40.000 bersih dan seluruh PPh Indonesia ditanggung PT Rasa melalui gross-up. Royalti terutang dan dibayar dari giro USD pada 11 Mei 2026, ketika kurs KMK Rp16.150 dan kurs tengah BI Rp16.120; PPh Pasal 26 disetor 12 Juni 2026 saat kurs KMK Rp16.050. Nilai royalti telah memenuhi prinsip kewajaran; PPN atas pemanfaatan BKP tidak berwujud dari luar Daerah Pabean dijurnal terpisah. Jurnal pembayaran royalti pada 11 Mei 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban royalti Rp644.800.000; Dr Beban PPh 26 Rp129.200.000; Cr Kas (giro USD) Rp644.800.000; Cr Utang PPh 26 Rp129.200.000",
        B: "Dr Beban royalti Rp806.000.000; Dr Rugi selisih kurs Rp300.000; Cr Kas (giro USD) Rp644.800.000; Cr Utang PPh 26 Rp161.500.000",
        C: "Dr Beban royalti Rp806.000.000; Cr Kas (giro USD) Rp644.800.000; Cr Utang PPh 26 Rp161.200.000",
        D: "Dr Beban royalti Rp807.500.000; Cr Kas (giro USD) Rp646.000.000; Cr Utang PPh 26 Rp161.500.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dengan gross-up, bruto = USD40.000 ÷ (1 − 20%) = USD50.000; PPh 26 = 20% × 50.000 × 16.150 (kurs KMK) = Rp161.500.000. Beban royalti bruto dicatat dengan kurs tengah BI: 50.000 × 16.120 = Rp806.000.000; kas USD40.000 × 16.120 = Rp644.800.000. Kekurangan debit Rp300.000 = USD10.000 × (16.150 − 16.120) dicatat sebagai rugi selisih kurs. PPh yang di-gross-up menjadi bagian imbalan sehingga beban royalti dapat dikurangkan (bukan PPh yang ditanggung Pasal 9 ayat (1) huruf h).",
        jejakHitung: [["Bruto = 40.000 ÷ 80%", "USD50.000"], ["PPh 26 = 20% × 50.000 × 16.150", "Rp161.500.000"], ["Beban royalti = 50.000 × 16.120", "Rp806.000.000"], ["Kas = 40.000 × 16.120", "Rp644.800.000"], ["Rugi selisih kurs = 644.800.000 + 161.500.000 − 806.000.000", "Rp300.000"]],
        mengapaSalah: { A: "Lupa gross-up: bruto USD50.000 (40.000 ÷ 80%), bukan USD40.000; PPh 26 = Rp161.500.000 dan menjadi bagian beban royalti", C: "PPh 26 dihitung dengan kurs tengah BI; jumlah pajak ditetapkan dengan kurs KMK", D: "Beban dan kas dicatat dengan kurs KMK; pembukuan memakai kurs tengah BI tanggal transaksi" },
        jebakan: "Gross-up mengubah DPP (USD50.000) dan memasukkan PPh ke beban; kurs KMK tanggal setor (16.050) tidak berperan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-121", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Cemerlang Ekspor Furnitur (pembukuan Rupiah sesuai SAK; tahun buku kalender) mempunyai piutang usaha USD50.000 dari pembeli di Belanda yang dicatat pada 10 November 2026 dengan kurs tengah BI Rp16.320 (Rp816.000.000) dan belum dilunasi sampai akhir tahun. Data kurs per USD pada 31 Desember 2026 (rekaan): kurs tengah BI Rp16.450; kurs KMK yang berlaku Rp16.430; kurs beli bank Rp16.405. Nilai piutang usaha tersebut dalam neraca 31 Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp816.000.000, karena piutang tetap dicatat dengan kurs tanggal transaksi sampai dilunasi", B: "Rp821.500.000, dijabarkan dengan kurs KMK yang berlaku 31 Desember 2026", C: "Rp822.500.000, dijabarkan dengan kurs tengah BI 31 Desember 2026", D: "Rp820.250.000, dijabarkan dengan kurs beli bank 31 Desember 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Piutang usaha valas adalah pos moneter, sehingga pada tanggal neraca dijabarkan dengan kurs penutup, yaitu kurs tengah BI 31 Desember 2026 (PSAK 221, eks-PSAK 10): 50.000 × 16.450 = Rp822.500.000. Laba selisih kurs belum direalisasi Rp6.500.000 diakui dalam laba rugi 2026 dan, karena pembukuan diselenggarakan taat asas sesuai SAK, juga diakui fiskal (PP 94/2010 Pasal 9). Kurs KMK hanya dipakai untuk menghitung pajak atas transaksi.",
        jejakHitung: [["Piutang usaha = pos moneter → kurs penutup (kurs tengah BI 31 Desember 2026)", "Rp16.450"], ["Nilai neraca = 50.000 × 16.450", "Rp822.500.000"], ["Laba selisih kurs belum direalisasi = 822.500.000 − 816.000.000", "Rp6.500.000"]],
        mengapaSalah: { A: "Hanya pos nonmoneter (mis. persediaan atau uang muka yang tidak dapat dikembalikan) yang tetap memakai kurs historis; piutang adalah pos moneter", B: "Kurs KMK untuk menghitung pajak atas transaksi, bukan untuk menjabarkan saldo pembukuan", D: "Kurs beli bank baru relevan saat piutang benar-benar dikonversi bank; penjabaran neraca memakai kurs penutup, yaitu kurs tengah BI" },
        jebakan: "Penjabaran pos moneter akhir tahun memakai kurs tengah BI, bukan kurs KMK."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 80, verifikasi: "✅"
    },
    {
      id: "B7-122", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Lensa Kreatif Indonesia (pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) membayar royalti perangkat lunak USD20.000 kepada Nordlicht Software GmbH, beneficial owner di negara mitra P3B yang Form DGT-nya sah (anggap tarif royalti P3B 10%) dan tidak mempunyai BUT di Indonesia. Royalti terutang dan dibayar pada Rabu, 14 Oktober 2026, tanpa klausul gross-up. Data kurs USD (rekaan): kurs KMK periode 7–13 Oktober 2026 Rp16.430; kurs KMK periode 14–20 Oktober 2026 Rp16.395; kurs tengah BI 14 Oktober 2026 Rp16.418. Jumlah yang dikreditkan ke akun Utang PPh Pasal 26 dalam jurnal pembayaran royalti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp32.836.000", B: "Rp65.580.000", C: "Rp32.860.000", D: "Rp32.790.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Utang PPh Pasal 26 adalah kewajiban rupiah yang besarnya ditetapkan dengan kurs KMK pada saat terutang (Rabu, 14 Oktober 2026, hari pertama periode 14–20 Oktober: Rp16.395) dan tarif P3B 10% karena Form DGT sah dan penerima adalah beneficial owner. Beban royalti dan kas USD dicatat dengan kurs tengah BI, sehingga bagian USD2.000 yang dipotong menimbulkan laba selisih kurs Rp46.000 dalam jurnal yang sama.",
        jejakHitung: [["Saat terutang Rabu, 14 Oktober 2026 → kurs KMK periode 14–20 Oktober", "Rp16.395"], ["DPP = 20.000 × 16.395", "Rp327.900.000"], ["Utang PPh 26 = 10% (tarif P3B) × 327.900.000", "Rp32.790.000"], ["Cek jurnal: beban 20.000 × 16.418 = 328.360.000; kas 18.000 × 16.418 = 295.524.000; laba selisih kurs = 328.360.000 − 295.524.000 − 32.790.000", "Rp46.000"]],
        mengapaSalah: { A: "Utang PPh 26 dihitung dengan kurs tengah BI; jumlah pajak ditetapkan dengan kurs KMK", B: "Memakai tarif domestik 20%; dengan Form DGT sah dan penerima beneficial owner berlaku tarif P3B 10%", C: "Memakai kurs KMK periode 7–13 Oktober; Rabu 14 Oktober sudah masuk periode baru 14–20 Oktober" },
        jebakan: "Akun Utang PPh 26 diisi angka bukti potong (kurs KMK), bukan USD × kurs buku."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: null }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "B7-123", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "PT Formula Rasa Nusantara (WP badan dalam negeri; pembukuan Rupiah) memberikan lisensi formula kepada Selandra Foods Ltd. di Negara Selandra (mitra P3B; batas tarif royalti 10%). Pada 15 Mei 2026 perusahaan menerima transfer royalti neto setelah pemotongan pajak Selandra 10%. Dalam Rupiah (sudah dikonversi dengan kurs yang tepat), royalti bruto Rp800.000.000, pajak yang dipotong Selandra Rp80.000.000, dan kas yang diterima Rp720.000.000. Jurnal yang tepat pada saat penerimaan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Kas Rp720.000.000; Dr PPh Pasal 24 dibayar di muka Rp80.000.000; Cr Pendapatan royalti Rp800.000.000",
        B: "Dr Kas Rp720.000.000; Cr Pendapatan royalti Rp720.000.000",
        C: "Dr Kas Rp720.000.000; Dr Beban pajak luar negeri Rp80.000.000; Cr Pendapatan royalti Rp800.000.000",
        D: "Dr Kas Rp720.000.000; Dr PPh Pasal 23 dibayar di muka Rp80.000.000; Cr Pendapatan royalti Rp800.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penghasilan luar negeri diakui bruto karena WP dalam negeri dipajaki atas penghasilan dari seluruh dunia; pajak yang dipotong Selandra adalah calon kredit pajak Pasal 24 sehingga dicatat sebagai aset PPh Pasal 24 dibayar di muka sampai batas kreditnya dihitung pada akhir tahun.",
        jejakHitung: [["Royalti bruto", "Rp800.000.000"], ["Pajak Selandra 10%", "Rp80.000.000 → PPh 24 dibayar di muka"], ["Kas diterima", "Rp720.000.000"]],
        mengapaSalah: {
          B: "Mencatat pendapatan neto mengecilkan penghasilan dan menghilangkan jejak kredit pajak luar negeri.",
          C: "Pajak luar negeri bukan biaya fiskal (Pasal 9 ayat (1) huruf h); ia dikreditkan menurut Pasal 24, dan hanya kelebihan atas batas kredit yang akhirnya dibebankan.",
          D: "PPh Pasal 23 adalah pemotongan oleh pihak dalam negeri; pajak yang dipotong negara lain adalah kredit Pasal 24."
        },
        jebakan: "Mencatat pendapatan neto atau langsung membebankan pajak luar negeri."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 24 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-124", topik: "B7.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-B7-15",
      stem: "Vignette PT Andalas Teknologi Nusantara (1/2). PT Andalas (WP badan dalam negeri; bukan perseroan terbuka; peredaran bruto 2025 Rp120 miliar; pembukuan Rupiah) pada 2025 menerima imbalan jasa rekayasa dari Corvia Energy Ltd. di Negara Corvia (belum ada P3B) sebesar Rp1.000.000.000. Corvia memotong pajak 25% (Rp250.000.000) dan PT Andalas mencatatnya sebagai PPh Pasal 24 dibayar di muka. Biaya langsung atas jasa itu Rp300.000.000, sehingga penghasilan neto dari Corvia Rp700.000.000. PKP 2025 (sudah memperhitungkan penghasilan Corvia dan seluruh koreksi fiskal) Rp5.000.000.000; PPh terutang 22% Rp1.100.000.000. Jurnal penyesuaian 31 Desember 2025 atas saldo PPh Pasal 24 dibayar di muka yang tidak dapat dikreditkan, beserta perlakuannya, adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban pajak penghasilan Rp96.000.000; Cr PPh Pasal 24 dibayar di muka Rp96.000.000 — kelebihan pajak Corvia tidak dapat dikreditkan, dikompensasikan ke tahun berikutnya, maupun direstitusi",
        B: "Tidak ada jurnal penyesuaian; seluruh Rp250.000.000 dikreditkan karena pajak itu benar-benar dibayar di Corvia",
        C: "Dr Piutang restitusi PPh Rp96.000.000; Cr PPh Pasal 24 dibayar di muka Rp96.000.000 karena kelebihan kredit dapat dimintakan kembali",
        D: "Dr Beban usaha (pajak luar negeri) Rp96.000.000; Cr PPh Pasal 24 dibayar di muka Rp96.000.000, dan beban itu boleh dikurangkan dalam menghitung PKP"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Batas kredit Corvia = Rp700.000.000/Rp5.000.000.000 × Rp1.100.000.000 = Rp154.000.000. Kredit yang boleh diperhitungkan adalah yang terkecil (Rp154.000.000); kelebihan Rp96.000.000 dibebankan dan tidak mempunyai manfaat pajak lain.",
        jejakHitung: [["Batas = 700.000.000 ÷ 5.000.000.000 × 1.100.000.000", "Rp154.000.000"], ["Kredit = terkecil (250.000.000; 154.000.000; 1.100.000.000)", "Rp154.000.000"], ["Kelebihan yang dibebankan", "Rp96.000.000"]],
        mengapaSalah: {
          B: "Pasal 24 ayat (2) membatasi kredit per negara; pajak yang benar-benar dibayar tidak otomatis dapat dikreditkan seluruhnya.",
          C: "Kelebihan pajak luar negeri di atas batas tidak dapat direstitusi atau dikompensasikan.",
          D: "PPh, termasuk pajak luar negeri, bukan biaya fiskal (Pasal 9 ayat (1) huruf h); bila dicatat sebagai beban usaha harus dikoreksi positif."
        },
        jebakan: "Mengkreditkan seluruh pajak luar negeri tanpa menghitung batas per negara."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-125", topik: "B7.1", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-B7-15",
      stem: "Vignette PT Andalas Teknologi Nusantara (2/2). Data 2025: PPh terutang Rp1.100.000.000; kredit PPh Pasal 24 atas Corvia yang dapat diperhitungkan Rp154.000.000 (pajak yang dipotong Corvia Rp250.000.000); PPh Pasal 23 yang dipotong pelanggan dalam negeri Rp60.000.000; PPh Pasal 25 yang telah disetor Rp600.000.000. Pada jurnal akhir tahun, beban pajak kini didebit Rp1.100.000.000 dan akun-akun PPh dibayar di muka dikredit. Utang PPh Pasal 29 yang dicatat dan harus dilunasi sebelum SPT Tahunan disampaikan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp286.000.000",
        B: "Rp190.000.000",
        C: "Rp440.000.000",
        D: "Rp346.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "PPh 29 = PPh terutang − kredit PPh 24 yang dapat diperhitungkan − PPh 23 − PPh 25 = 1.100.000.000 − 154.000.000 − 60.000.000 − 600.000.000.",
        jejakHitung: [["PPh terutang", "Rp1.100.000.000"], ["− Kredit PPh 24 (batas per negara)", "(Rp154.000.000)"], ["− PPh 23", "(Rp60.000.000)"], ["− PPh 25", "(Rp600.000.000)"], ["Utang PPh 29", "Rp286.000.000"]],
        mengapaSalah: {
          B: "Mengkreditkan seluruh pajak Corvia Rp250.000.000, padahal batas kreditnya Rp154.000.000.",
          C: "Tidak mengkreditkan PPh Pasal 24 sama sekali.",
          D: "Lupa mengurangkan PPh Pasal 23 Rp60.000.000."
        },
        jebakan: "Memakai saldo PPh 24 dibayar di muka sebelum penyesuaian sebagai kredit."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-126", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mega Pangan Nusantara (WP badan dalam negeri) mengkaji dua cara mengambil alih bisnis roti PT Sari Roti Lestari (WP badan dalam negeri dengan sisa rugi fiskal Tahun Pajak 2023 Rp2.000.000.000). Cara I: membeli 100% saham PT Sari Roti dari para pemegang sahamnya seharga Rp50.000.000.000, sedangkan nilai wajar aset neto PT Sari Roti Rp42.000.000.000, sehingga laporan konsolidasian akan menyajikan goodwill Rp8.000.000.000. Cara II: membeli seluruh aset usaha roti (mesin, merek, dan daftar pelanggan) langsung dari PT Sari Roti seharga Rp50.000.000.000, termasuk muhibah yang dibayar Rp8.000.000.000. Para pihak tidak mempunyai hubungan istimewa dan transaksi bukan penggabungan, peleburan, atau pemekaran. Pernyataan yang tepat menurut UU PPh adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pada Cara I, PT Mega Pangan dapat mengamortisasi goodwill Rp8.000.000.000 secara fiskal karena goodwill itu tercatat dalam laporan konsolidasian",
        B: "Pada Cara I, PT Sari Roti tetap wajib pajak yang sama sehingga sisa rugi fiskal Rp2.000.000.000 tetap dapat dikompensasikannya dalam sisa masa kompensasi, sedangkan goodwill konsolidasian tidak dapat dibiayakan; pada Cara II, muhibah Rp8.000.000.000 yang dibayar PT Mega Pangan diamortisasi menurut Pasal 11A",
        C: "Pada Cara II, sisa rugi fiskal PT Sari Roti beralih kepada PT Mega Pangan bersama aset yang dibelinya",
        D: "Pada Cara I, PT Mega Pangan boleh mengompensasikan sisa rugi fiskal PT Sari Roti dengan labanya sendiri karena menyusun laporan keuangan konsolidasian"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Akuisisi saham tidak mengubah wajib pajak yang diambil alih: atributnya, termasuk sisa rugi fiskal, tetap pada PT Sari Roti. Investasi saham tidak diamortisasi dan goodwill konsolidasian bukan harta dalam pembukuan wajib pajak mana pun. Pada akuisisi aset, muhibah yang dibeli dari pihak lain adalah harta tak berwujud yang diamortisasi Pasal 11A.",
        jejakHitung: [["Harga beli", "Rp50.000.000.000"], ["Nilai wajar aset neto", "Rp42.000.000.000"], ["Goodwill/muhibah", "Rp8.000.000.000"]],
        mengapaSalah: {
          A: "Goodwill konsolidasian hanya ada di laporan konsolidasian; pembeli saham hanya mencatat investasi sebesar harga perolehan, yang tidak diamortisasi.",
          C: "Rugi fiskal melekat pada wajib pajak yang mengalaminya; pembelian aset tidak memindahkan rugi fiskal penjual.",
          D: "UU PPh tidak mengenal pajak grup; laba dan rugi fiskal tiap entitas dihitung sendiri-sendiri."
        },
        jebakan: "Menyamakan goodwill konsolidasian dengan muhibah yang dibeli, dan mengira laporan konsolidasian berlaku untuk SPT."
      },
      dasarHukum: [{ pasal: "Pasal 11A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-127", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Induk Sejahtera (WP badan dalam negeri) memiliki 80% saham PT Anak Sejahtera (WP badan dalam negeri). Laporan laba rugi konsolidasian 2025 menunjukkan laba sebelum pajak Rp35.000.000.000. Laporan keuangan tersendiri PT Induk (investasi pada entitas anak dicatat dengan metode biaya) menunjukkan laba sebelum pajak Rp20.000.000.000, yang di dalamnya termasuk dividen tunai dari PT Anak Rp1.200.000.000 dan laba kotor penjualan bahan baku kepada PT Anak Rp1.500.000.000 (harga wajar, faktur pajak diterbitkan) yang dieliminasi dalam konsolidasi. Tidak ada koreksi fiskal lain. Penghasilan kena pajak PT Induk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp18.800.000.000",
        B: "Rp17.300.000.000",
        C: "Rp20.000.000.000",
        D: "Rp33.800.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "SPT disusun dari laporan keuangan entitas tersendiri. Dividen dari badan dalam negeri yang diterima WP badan dalam negeri bukan objek (koreksi negatif), sedangkan laba penjualan kepada entitas anak tetap penghasilan walaupun dieliminasi dalam konsolidasi.",
        jejakHitung: [["Laba sebelum pajak entitas tersendiri", "Rp20.000.000.000"], ["Koreksi negatif dividen PT Anak (Ps. 4 ayat (3) huruf f)", "(Rp1.200.000.000)"], ["Laba penjualan ke PT Anak", "tidak dikoreksi"], ["PKP", "Rp18.800.000.000"]],
        mengapaSalah: {
          B: "Ikut mengurangkan laba penjualan Rp1.500.000.000 karena dieliminasi dalam konsolidasi; eliminasi tidak berlaku untuk SPT.",
          C: "Memperlakukan dividen dari badan dalam negeri sebagai objek pajak.",
          D: "Memakai laba konsolidasian sebagai dasar SPT; UU PPh tidak mengenal pajak grup."
        },
        jebakan: "Membawa angka konsolidasian atau eliminasi antarperusahaan ke SPT entitas induk."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f UU PPh (perubahan UU Cipta Kerja)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B7-128",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Asuransi Umum Sentosa (perusahaan asuransi kerugian berizin OJK) melaporkan laba sebelum pajak 2025 Rp12.000.000.000. Beban yang telah dikurangkan antara lain: kenaikan cadangan premi tanggungan sendiri dan cadangan klaim tanggungan sendiri (cadangan teknis yang jumlahnya dalam batas ketentuan perpajakan) Rp3.000.000.000; beban cadangan kerugian penurunan nilai piutang premi Rp800.000.000; pembayaran klaim kepada tertanggung Rp20.000.000.000; dan penghapusan piutang premi yang nyata-nyata tidak dapat ditagih dan telah memenuhi syarat Pasal 6 ayat (1) huruf h UU PPh Rp150.000.000. Tidak ada sisa rugi fiskal dan koreksi lain. Penghasilan kena pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.000.000.000", B: "Rp12.800.000.000", C: "Rp15.800.000.000", D: "Rp12.950.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Cadangan untuk usaha asuransi termasuk pengecualian Pasal 9 ayat (1) huruf c angka 2 UU PPh. Bagi asuransi kerugian yang boleh dikurangkan adalah cadangan premi tanggungan sendiri (paling tinggi 40% dari premi tanggungan sendiri tahun itu) dan cadangan klaim tanggungan sendiri (100% klaim yang disepakati tetapi belum dibayar dan klaim yang dilaporkan dan sedang diproses), menurut Pasal 12 dan Pasal 13 PMK 81/PMK.03/2009 yang masih berlaku. Cadangan kerugian piutang premi tidak termasuk: metode cadangan piutang hanya untuk bank dan badan usaha lain yang menyalurkan kredit, sewa guna usaha dengan hak opsi, pembiayaan konsumen, dan anjak piutang (Pasal 2 ayat (3) PMK 74 Tahun 2024). Piutang premi baru dibebankan saat dihapus dengan syarat Pasal 6 ayat (1) huruf h.",
        jejakHitung: [
          ["Laba sebelum pajak", "Rp12.000.000.000"],
          ["+ Cadangan kerugian piutang premi", "Rp800.000.000"],
          ["Cadangan teknis, klaim, penghapusan piutang memenuhi syarat", "tidak dikoreksi"],
          ["PKP", "Rp12.800.000.000"]
        ],
        mengapaSalah: {
          A: "Menganggap semua cadangan perusahaan asuransi boleh dibiayakan; cadangan piutang hanya untuk bank, badan usaha lain yang menyalurkan kredit, sewa guna usaha dengan hak opsi, pembiayaan konsumen, dan anjak piutang.",
          C: "Ikut mengoreksi cadangan teknis Rp3.000.000.000 yang justru dikecualikan dari larangan Pasal 9 ayat (1) huruf c.",
          D: "Penghapusan piutang yang memenuhi Pasal 6 ayat (1) huruf h boleh dibebankan, sehingga tidak dikoreksi."
        },
        jebakan: "Menyamakan semua 'cadangan' asuransi; hanya cadangan teknis (premi dan klaim tanggungan sendiri, dalam batas Pasal 12 dan Pasal 13 PMK 81/PMK.03/2009) yang dikecualikan. PMK 74 Tahun 2024 hanya menggantikan ketentuan cadangan piutang; ketentuan cadangan asuransi dalam PMK 81/PMK.03/2009 tetap berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c angka 2 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 huruf b, Pasal 12, dan Pasal 13 PMK 81/PMK.03/2009 (cadangan asuransi kerugian; tidak dicabut PMK 74 Tahun 2024)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 74 Tahun 2024 (cadangan piutang hanya untuk bank dan lembaga pembiayaan)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B7-129",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Mitra Andalan Finance adalah perusahaan pembiayaan yang menjalankan sewa guna usaha dengan hak opsi dan pembiayaan konsumen, serta menyewakan kendaraan secara sewa operasi (tanpa hak opsi). Pada Juni 2026 PT Logistik Prima (badan dalam negeri, pemotong PPh Pasal 23) membayar kepadanya angsuran sewa guna usaha dengan hak opsi atas lima truk Rp240.000.000 dan sewa operasi dua mobil boks Rp30.000.000 (belum termasuk PPN). Pada akhir 2026 PT Mitra Andalan membentuk cadangan piutang tak tertagih atas portofolio pembiayaannya dalam batas yang diatur PMK. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Logistik Prima memotong PPh Pasal 23 2% atas angsuran sewa guna usaha Rp240.000.000 dan atas sewa operasi Rp30.000.000", B: "Angsuran sewa guna usaha dengan hak opsi tidak dipotong PPh Pasal 23, sewa operasi mobil dipotong PPh Pasal 23 2% × Rp30.000.000 = Rp600.000, dan cadangan piutang tak tertagih PT Mitra Andalan dapat dikurangkan dalam batas PMK", C: "Sewa operasi mobil dipotong PPh final Pasal 4 ayat (2) 10%, sedangkan angsuran sewa guna usaha tidak dipotong", D: "Angsuran sewa guna usaha tidak dipotong PPh Pasal 23, tetapi cadangan piutang tak tertagih PT Mitra Andalan tidak dapat dikurangkan karena pengecualian Pasal 9 ayat (1) huruf c hanya untuk bank" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sewa guna usaha dengan hak opsi dikecualikan dari PPh Pasal 23 (Pasal 23 ayat (4) huruf b), sedangkan sewa kendaraan biasa adalah sewa harta yang dipotong 2% dari bruto tanpa PPN. Cadangan piutang tak tertagih perusahaan sewa guna usaha dengan hak opsi dan pembiayaan konsumen termasuk cadangan yang boleh dibiayakan dalam batas PMK.",
        jejakHitung: [
          ["Angsuran SGU dengan hak opsi", "tidak dipotong"],
          ["PPh 23 sewa operasi = 2% × Rp30.000.000", "Rp600.000"]
        ],
        mengapaSalah: {
          A: "Angsuran sewa guna usaha dengan hak opsi tidak termasuk objek pemotongan PPh Pasal 23.",
          C: "PPh final 10% hanya untuk sewa tanah dan/atau bangunan; sewa kendaraan dipotong PPh Pasal 23 2%.",
          D: "Pasal 9 ayat (1) huruf c juga mengecualikan cadangan piutang usaha sewa guna usaha dengan hak opsi, pembiayaan konsumen, dan anjak piutang."
        },
        jebakan: "Menyamakan angsuran sewa guna usaha dengan hak opsi dengan sewa operasi."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c dan ayat (4) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 (jasa lain dan sewa)", berlakuSejak: "2015-08-24" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B7-130", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-16", laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase setia): atas penghasilan dengan nama dan dalam bentuk apa pun, antara lain royalti, yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya kepada Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia, dipotong pajak sebesar 20% dari jumlah bruto oleh pihak yang wajib membayarkan.",
      stem: "Vignette PT Cakra Media Digital (1/3). PT Cakra Media Digital (pembukuan Rupiah; tahun buku kalender; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) wajib membayar royalti lisensi konten video kepada Lumen Studios Ltd., pemilik manfaat di negara mitra P3B (anggap batas tarif royalti P3B 10%) yang tidak mempunyai BUT di Indonesia dan Form DGT-nya sah sebelum royalti terutang. Royalti semester II 2025 sebesar USD50.000 (tanpa klausul gross-up) jatuh tempo pembayaran pada Jumat, 28 November 2025, dan pada tanggal itu dicatat sebagai beban dan utang; karena kendala arus kas, royalti neto baru ditransfer dari giro USD pada Kamis, 15 Januari 2026. Data kurs USD (rekaan): kurs KMK periode 26 November–2 Desember 2025 Rp15.700; kurs tengah BI 28 November 2025 Rp15.750; kurs tengah BI 31 Desember 2025 Rp15.900; kurs KMK periode 14–20 Januari 2026 Rp15.950; kurs tengah BI 15 Januari 2026 Rp16.000. Berdasarkan kutipan tersebut, PPh Pasal 26 yang wajib dipotong, Masa Pajak terutangnya, dan batas penyetorannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp79.750.000 (kurs KMK saat royalti ditransfer); terutang Masa Januari 2026 dan disetor paling lambat tanggal 15 bulan berikutnya",
        B: "Rp78.750.000 (kurs tengah BI 28 November 2025); terutang Masa November 2025 dan disetor paling lambat 15 Desember 2025",
        C: "Rp78.500.000 (kurs KMK saat jatuh tempo); terutang Masa November 2025 dan disetor paling lambat 15 Desember 2025",
        D: "Rp157.000.000 (20%, karena tarif P3B baru dapat diterapkan saat royalti benar-benar dibayar); terutang Masa November 2025 dan disetor paling lambat 15 Desember 2025"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang pada saat yang paling dahulu di antara dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo pembayaran: di sini jatuh tempo Jumat, 28 November 2025 (sekaligus dicatat sebagai utang), bukan saat transfer 15 Januari 2026. DPP dalam USD dikonversi dengan kurs KMK yang berlaku saat terutang (periode 26 November–2 Desember 2025: Rp15.700) dan, karena Form DGT sah dan Lumen adalah pemilik manfaat, tarif P3B 10% dipakai: 10% × 50.000 × 15.700 = Rp78.500.000, Masa November 2025, disetor paling lambat 15 Desember 2025.",
        jejakHitung: [["Saat terutang = jatuh tempo 28 November 2025 (lebih dahulu dari transfer 15 Januari 2026)", "Masa November 2025"], ["Kurs KMK periode 26 November–2 Desember 2025", "Rp15.700"], ["DPP = 50.000 × 15.700", "Rp785.000.000"], ["PPh 26 = 10% (tarif P3B) × 785.000.000", "Rp78.500.000"], ["Batas setor = tanggal 15 bulan berikutnya", "15 Desember 2025"]],
        mengapaSalah: { A: "Menunggu tanggal transfer; PPh 26 sudah terutang saat jatuh tempo pembayaran sehingga kurs KMK dan Masa Pajaknya mengikuti 28 November 2025", B: "Kurs tengah BI adalah kurs pembukuan; DPP pemotongan dalam valas dikonversi dengan kurs KMK yang berlaku saat terutang", D: "Tarif P3B berlaku sepanjang syarat administrasi (Form DGT sah, pemilik manfaat) terpenuhi saat PPh terutang; tidak ditunda sampai pembayaran" },
        jebakan: "Utang royalti yang belum dibayar tetap memicu PPh 26 pada saat jatuh tempo, dengan kurs KMK minggu jatuh tempo itu."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }, { pasal: "PMK 81/2024 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-131", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-B7-16", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Cakra Media Digital (2/3). Pada 28 November 2025 PT Cakra mencatat royalti USD50.000 kepada Lumen Studios Ltd. sebagai beban dengan kurs tengah BI Rp15.750, mengkredit Utang PPh Pasal 26 sebesar Rp78.500.000 (10% × USD50.000 × kurs KMK Rp15.700), dan mencatat sisanya sebagai utang royalti dalam USD; Utang PPh 26 disetor penuh pada 15 Desember 2025. Utang royalti belum dibayar sampai 31 Desember 2025, ketika kurs tengah BI Rp15.900 dan kurs KMK yang berlaku Rp15.880. Jumlah bersih selisih kurs atas transaksi royalti ini dalam laba rugi 2025 dan perlakuan fiskalnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rugi bersih Rp6.500.000 (laba Rp250.000 saat pencatatan dan rugi Rp6.750.000 saat penjabaran); diakui fiskal tanpa koreksi",
        B: "Rugi Rp7.500.000 (seluruh USD50.000 dijabarkan dengan kurs tengah BI 31 Desember 2025); diakui fiskal tanpa koreksi",
        C: "Rugi bersih Rp6.500.000; rugi penjabaran Rp6.750.000 dikoreksi positif karena belum direalisasi sampai utang dilunasi",
        D: "Rugi bersih Rp5.600.000 (utang royalti dijabarkan dengan kurs KMK 31 Desember 2025); diakui fiskal tanpa koreksi"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Saat pencatatan, beban 50.000 × 15.750 = Rp787.500.000; utang royalti hanya bagian neto USD45.000 × 15.750 = Rp708.750.000; Utang PPh 26 Rp78.500.000 (kurs KMK), sehingga timbul laba selisih kurs Rp250.000. Pada 31 Desember 2025 yang dijabarkan hanya utang royalti USD45.000 dengan kurs tengah BI: 45.000 × (15.900 − 15.750) = rugi Rp6.750.000; Utang PPh 26 adalah kewajiban Rupiah dan sudah disetor. Bersihnya rugi Rp6.500.000, diakui fiskal mengikuti pembukuan yang taat asas sesuai SAK (PP 94/2010 Pasal 9), tanpa koreksi.",
        jejakHitung: [["Beban royalti = 50.000 × 15.750", "Rp787.500.000"], ["Utang royalti neto = 45.000 × 15.750", "Rp708.750.000"], ["Utang PPh 26 (kurs KMK)", "Rp78.500.000"], ["Laba selisih kurs saat pencatatan = 787.500.000 − 708.750.000 − 78.500.000", "Rp250.000"], ["Rugi penjabaran 31 Desember = 45.000 × (15.900 − 15.750)", "Rp6.750.000"], ["Bersih 2025 = 6.750.000 − 250.000", "Rugi Rp6.500.000"], ["Perlakuan fiskal (PP 94/2010 Pasal 9)", "Tanpa koreksi"]],
        mengapaSalah: { B: "Ikut menjabarkan USD5.000 bagian PPh 26, padahal bagian itu sudah menjadi Utang PPh 26 dalam Rupiah dan telah disetor; laba Rp250.000 saat pencatatan juga terlewat", C: "Fiskal mengikuti pembukuan yang taat asas sesuai SAK, termasuk selisih kurs belum direalisasi; tidak ada koreksi menunggu pelunasan", D: "Kurs KMK hanya untuk menghitung pajak; penjabaran pos moneter di neraca memakai kurs tengah BI (kurs penutup)" },
        jebakan: "Yang dijabarkan di akhir tahun hanya utang valas neto; Utang PPh 26 sudah terkunci dalam Rupiah dengan kurs KMK."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-132", topik: "B7.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-B7-16", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Cakra Media Digital (3/3). Utang royalti kepada Lumen Studios Ltd. sebesar USD45.000 (neto setelah PPh Pasal 26 Rp78.500.000 yang sudah disetor 15 Desember 2025) tercatat Rp715.500.000 setelah dijabarkan dengan kurs tengah BI 31 Desember 2025 Rp15.900, dan rugi penjabarannya telah diakui dalam laba rugi 2025. Utang dilunasi dari giro USD pada Kamis, 15 Januari 2026, ketika kurs tengah BI Rp16.000 dan kurs KMK periode 14–20 Januari 2026 Rp15.950; tidak ada biaya bank. Jurnal pelunasan dan perlakuan fiskal selisih kursnya yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Utang royalti Rp708.750.000; Dr Rugi selisih kurs Rp11.250.000; Cr Kas (giro USD) Rp720.000.000; seluruh rugi Rp11.250.000 diakui fiskal pada 2026",
        B: "Dr Utang royalti Rp715.500.000; Dr Rugi selisih kurs Rp2.250.000; Cr Kas (giro USD) Rp717.750.000 (kurs KMK); rugi diakui fiskal pada 2026",
        C: "Dr Utang royalti Rp715.500.000; Dr Rugi selisih kurs Rp4.500.000; Cr Kas (giro USD) Rp720.000.000; rugi ini bersama rugi penjabaran 2025 Rp6.750.000 baru dapat dikurangkan pada 2026 saat realisasi",
        D: "Dr Utang royalti Rp715.500.000; Dr Rugi selisih kurs Rp4.500.000; Cr Kas (giro USD) Rp720.000.000; rugi Rp4.500.000 diakui fiskal pada 2026, sedangkan rugi penjabaran 2025 sudah diakui fiskal pada 2025"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pelunasan mengurangi utang sebesar nilai tercatatnya setelah penjabaran (Rp715.500.000); kas USD keluar 45.000 × 16.000 = Rp720.000.000; selisihnya rugi selisih kurs terealisasi Rp4.500.000 pada 2026. Rugi penjabaran 2025 sudah diakui komersial dan fiskal pada 2025 (PP 94/2010 Pasal 9), sehingga tidak diakui dua kali. Tidak ada PPh 26 baru saat transfer karena pajaknya sudah terutang dan disetor pada saat jatuh tempo.",
        jejakHitung: [["Nilai tercatat utang = 45.000 × 15.900", "Rp715.500.000"], ["Kas USD keluar = 45.000 × 16.000", "Rp720.000.000"], ["Rugi selisih kurs terealisasi 2026 = 720.000.000 − 715.500.000", "Rp4.500.000"], ["Cek total dari pencatatan awal: 45.000 × (16.000 − 15.750) = 6.750.000 (2025) + 4.500.000 (2026)", "Rp11.250.000"]],
        mengapaSalah: { A: "Mengabaikan penjabaran 31 Desember 2025; rugi Rp6.750.000 sudah dibukukan pada 2025 sehingga akan terhitung dua kali", B: "Kurs KMK tidak dipakai untuk mencatat kas USD; kas keluar dicatat dengan kurs tengah BI tanggal transaksi", C: "Fiskal mengikuti pembukuan taat asas sesuai SAK: rugi belum direalisasi 2025 sudah diakui pada 2025, bukan ditunda ke 2026" },
        jebakan: "Selisih kurs pelunasan dihitung dari nilai tercatat terakhir (kurs tengah BI 31 Desember), bukan dari kurs saat pengakuan awal."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-133", topik: "B7.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Borneo Sawit Prima (WP badan dalam negeri; pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) memperoleh pinjaman dari Harbour Capital Ltd., lembaga keuangan di negara mitra P3B yang tidak mempunyai hubungan istimewa dengan perusahaan, tidak mempunyai BUT di Indonesia, merupakan pemilik manfaat, dan Form DGT-nya sah (anggap batas tarif bunga P3B 10%). Kontrak menetapkan Harbour Capital menerima bunga bersih USD45.000 per semester dan seluruh PPh Indonesia ditanggung PT Borneo melalui gross-up. Bunga semester I 2026 terutang dan dibayar dari giro USD pada 30 Juni 2026, ketika kurs KMK yang berlaku Rp16.200 dan kurs tengah BI Rp16.250. Perbandingan utang terhadap modal perusahaan di bawah 4:1 dan tingkat bunganya wajar. Staf akuntansi mencatat: Dr Beban bunga Rp731.250.000; Dr Beban PPh 26 ditanggung Rp72.900.000; Cr Kas Rp731.250.000; Cr Utang PPh 26 Rp72.900.000, lalu mengoreksi positif Beban PPh 26 tersebut dalam rekonsiliasi fiskal 2026. Penilaian yang tepat atas PPh Pasal 26 dan perlakuan fiskalnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 sudah benar Rp72.900.000 (10% × USD45.000 × kurs KMK); koreksi positif atas Beban PPh 26 tepat karena PPh yang ditanggung tidak dapat dikurangkan",
        B: "PPh 26 seharusnya Rp81.000.000 (DPP USD50.000 hasil gross-up); bagian gross-up tetap dikoreksi positif karena merupakan PPh yang ditanggung pemberi penghasilan",
        C: "PPh 26 seharusnya Rp81.000.000 (DPP USD50.000 hasil gross-up); bunga bruto Rp812.500.000 seluruhnya dapat dikurangkan sehingga koreksi positif atas bagian PPh tidak tepat",
        D: "PPh 26 seharusnya Rp81.250.000 (10% × USD50.000 × kurs tengah BI); bunga bruto Rp812.500.000 seluruhnya dapat dikurangkan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dengan klausul gross-up, PPh 26 menjadi bagian imbalan bunga: bunga bruto = 45.000 ÷ (1 − 10%) = USD50.000, sehingga PPh 26 = 10% × 50.000 × kurs KMK 16.200 = Rp81.000.000 (kurang potong Rp8.100.000 yang harus disetor dan SPT Masanya dibetulkan). Beban bunga bruto 50.000 × 16.250 = Rp812.500.000 dapat dikurangkan seluruhnya karena DER dan kewajaran terpenuhi; larangan Pasal 9 ayat (1) huruf h hanya untuk PPh yang sekadar ditanggung tanpa gross-up. Jurnal yang benar juga memuat laba selisih kurs Rp250.000.",
        jejakHitung: [["Bunga bruto = 45.000 ÷ (1 − 10%)", "USD50.000"], ["PPh 26 = 10% × 50.000 × 16.200 (kurs KMK)", "Rp81.000.000"], ["Beban bunga bruto = 50.000 × 16.250", "Rp812.500.000"], ["Kas = 45.000 × 16.250", "Rp731.250.000"], ["Laba selisih kurs = 812.500.000 − 731.250.000 − 81.000.000", "Rp250.000"], ["Kurang potong = 81.000.000 − 72.900.000", "Rp8.100.000"]],
        mengapaSalah: { A: "Pada gross-up, DPP adalah jumlah bruto (neto ÷ (1 − tarif)), bukan bunga bersih; dan PPh hasil gross-up merupakan bagian biaya bunga", B: "Gross-up menjadikan PPh bagian imbalan yang dapat dibiayakan; Pasal 9 ayat (1) huruf h hanya mengenai PPh yang ditanggung tanpa dimasukkan ke imbalan", D: "DPP dikonversi dengan kurs KMK yang berlaku saat terutang, bukan kurs tengah BI" },
        jebakan: "Gross-up mengubah DPP sekaligus membuat PPh 26 dapat dibiayakan; menghitung 10% dari bunga bersih adalah kesalahan paling sering."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015 (DER 4:1)", berlakuSejak: "2016-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan)" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "B7-134",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "PP 94/2010 Pasal 9 (parafrase): keuntungan atau kerugian selisih kurs mata uang asing diakui berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan standar akuntansi keuangan yang berlaku di Indonesia; selisih kurs yang terkait dengan penghasilan yang dikenai PPh final atau yang bukan objek pajak tidak diakui dalam penghitungan penghasilan kena pajak.",
      stem: "PT Lintas Samudra Industri (manufaktur ban; pembukuan Rupiah sesuai SAK; tahun buku kalender; peredaran bruto Rp240 miliar) juga memiliki satu gedung perkantoran yang seluruh ruangnya disewakan kepada pihak lain dengan PPh final 10%. Laba rugi komersial 2025 memuat selisih kurs belum direalisasi hasil penjabaran pos moneter dengan kurs tengah BI 31 Desember 2025: (1) rugi Rp40.000.000 atas utang impor bahan baku karet sintetis; (2) rugi Rp25.000.000 atas pinjaman USD yang khusus dipakai membiayai pembangunan gedung perkantoran yang disewakan; (3) laba Rp18.000.000 atas piutang ekspor ban; (4) rugi Rp9.000.000 atas utang royalti teknologi produksi kepada pemberi lisensi di luar negeri. Berdasarkan kutipan tersebut, koreksi fiskal 2025 atas pos selisih kurs adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak ada koreksi, karena seluruh selisih kurs diakui mengikuti pembukuan yang taat asas sesuai SAK", B: "Koreksi positif Rp25.000.000 atas rugi selisih kurs pinjaman gedung yang disewakan; pos lain tanpa koreksi", C: "Koreksi positif Rp74.000.000 dan koreksi negatif Rp18.000.000, karena selisih kurs yang belum direalisasi baru diakui saat pelunasan", D: "Koreksi positif Rp25.000.000 dan koreksi negatif Rp18.000.000, karena laba selisih kurs piutang ekspor belum direalisasi" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Selisih kurs mengikuti pembukuan taat asas sesuai SAK, termasuk yang belum direalisasi, sehingga pos (1), (3), dan (4) yang berkaitan dengan usaha bertarif umum tidak dikoreksi. Pos (2) berkaitan dengan gedung yang penghasilannya dikenai PPh final sewa 10%, sehingga rugi selisih kursnya tidak diakui: koreksi positif Rp25.000.000 (sejalan dengan larangan membiayakan biaya untuk penghasilan final).",
        jejakHitung: [
          ["(1) Rugi utang impor bahan baku (usaha tarif umum)", "Tanpa koreksi"],
          ["(2) Rugi pinjaman gedung yang disewakan (penghasilan final)", "Koreksi positif Rp25.000.000"],
          ["(3) Laba piutang ekspor", "Tanpa koreksi"],
          ["(4) Rugi utang royalti produksi", "Tanpa koreksi"]
        ],
        mengapaSalah: {
          A: "Melupakan pengecualian selisih kurs yang terkait penghasilan final atau bukan objek pajak",
          C: "Memakai dasar realisasi; PP 94/2010 Pasal 9 mengikuti SAK sehingga selisih kurs belum direalisasi tetap diakui",
          D: "Laba selisih kurs piutang ekspor adalah objek PPh pada tahun diakui menurut SAK, walaupun belum direalisasi"
        },
        jebakan: "Tidak semua selisih kurs ikut SAK tanpa koreksi: yang terkait penghasilan final atau bukan objek pajak dikeluarkan."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017 (PPh final sewa tanah dan/atau bangunan 10%)", berlakuSejak: "2018-01-02" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-135", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Nusantara Kopi Ekspor (pembukuan Rupiah sesuai SAK; tahun buku kalender; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) mencatat piutang ekspor kopi USD60.000 kepada pembeli di Jepang pada 12 Desember 2025 dengan kurs Rp15.850. Pada 31 Desember 2025 kurs tengah BI Rp15.900 dan piutang dijabarkan sesuai SAK. Pada Jumat, 20 Februari 2026 pembeli membayar USD36.000 ke giro USD perusahaan ketika kurs tengah BI Rp16.050 (kurs KMK yang berlaku Rp16.010). Sisa piutang USD24.000 belum tertagih sampai 31 Desember 2026, ketika kurs tengah BI Rp15.800. Jumlah bersih selisih kurs atas piutang tersebut dalam laba rugi 2026 dan perlakuan fiskalnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Laba bersih Rp6.000.000 (dihitung dari kurs pencatatan awal Rp15.850); objek PPh 2026 tanpa koreksi",
        B: "Laba bersih Rp3.000.000; secara fiskal hanya laba terealisasi Rp5.400.000 yang diakui sehingga dikoreksi positif Rp2.400.000",
        C: "Laba bersih Rp1.560.000 (penerimaan kas dicatat dengan kurs KMK Rp16.010); diakui fiskal tanpa koreksi",
        D: "Laba bersih Rp3.000.000 (laba terealisasi Rp5.400.000 dan rugi belum direalisasi Rp2.400.000); diakui fiskal tanpa koreksi"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Awal 2026 piutang tercatat 60.000 × 15.900 = Rp954.000.000. Penerimaan USD36.000: kas 36.000 × 16.050 = Rp577.800.000 dikurangi nilai tercatat 36.000 × 15.900 = Rp572.400.000 → laba terealisasi Rp5.400.000 (jurnal: Dr Kas giro USD 577.800.000; Cr Piutang 572.400.000; Cr Laba selisih kurs 5.400.000). Sisa USD24.000 dijabarkan 31 Desember 2026: 24.000 × (15.800 − 15.900) = rugi Rp2.400.000. Bersih laba Rp3.000.000, diakui fiskal mengikuti SAK tanpa koreksi.",
        jejakHitung: [["Nilai tercatat awal 2026 = 60.000 × 15.900", "Rp954.000.000"], ["Laba terealisasi = 36.000 × (16.050 − 15.900)", "Rp5.400.000"], ["Rugi penjabaran sisa = 24.000 × (15.800 − 15.900)", "−Rp2.400.000"], ["Bersih 2026 = 5.400.000 − 2.400.000", "Laba Rp3.000.000"], ["Perlakuan fiskal (PP 94/2010 Pasal 9)", "Tanpa koreksi"]],
        mengapaSalah: { A: "Mengabaikan penjabaran 31 Desember 2025; laba Rp3.000.000 tahun 2025 akan terhitung dua kali", B: "Fiskal mengikuti pembukuan taat asas sesuai SAK, sehingga rugi belum direalisasi juga diakui", C: "Kas USD dicatat dengan kurs tengah BI tanggal transaksi, bukan kurs KMK" },
        jebakan: "Selisih kurs tahun kedua dihitung dari kurs penutup tahun sebelumnya, bukan kurs pengakuan awal."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-136",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Yayasan Pendidikan Nusa Cendekia (badan nirlaba penyelenggara SD–SMA yang terdaftar pada kementerian yang membidangi pendidikan) mencatat untuk Tahun 2025: uang sekolah Rp6.800.000.000; uang pangkal dan biaya pendaftaran siswa baru Rp400.000.000; sewa ruang kantin kepada pengelola katering Rp150.000.000 (PPh final 10% dipotong penyewa); bunga deposito Rp90.000.000 (PPh final dipotong bank); dan sumbangan alumni tanpa hubungan usaha Rp500.000.000. Biaya operasional pendidikan yang dibukukan Rp6.100.000.000, di dalamnya termasuk biaya pemeliharaan dan kebersihan area kantin yang disewakan Rp30.000.000. Sisa lebih 2025 yang dapat dikecualikan dari objek PPh apabila seluruhnya ditanamkan kembali dalam sarana dan prasarana pendidikan dalam jangka waktu yang ditentukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.840.000.000", B: "Rp1.100.000.000", C: "Rp1.130.000.000", D: "Rp730.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sisa lebih dihitung dari penghasilan objek non-final kegiatan pendidikan (uang sekolah dan uang pangkal/pendaftaran Rp7.200.000.000) dikurangi biaya yang berkaitan dengannya. Sewa kantin dan bunga deposito sudah dikenai PPh final, sumbangan alumni bukan objek; ketiganya dikeluarkan, termasuk biaya pemeliharaan kantin Rp30.000.000 yang berkaitan dengan penghasilan final. Sisa lebih = 7.200.000.000 − 6.070.000.000 = Rp1.130.000.000.",
        jejakHitung: [
          ["Penghasilan non-final = 6.800.000.000 + 400.000.000", "Rp7.200.000.000"],
          ["Biaya terkait = 6.100.000.000 − 30.000.000 (biaya kantin terkait penghasilan final)", "Rp6.070.000.000"],
          ["Sewa kantin, bunga deposito (final), sumbangan (bukan objek)", "Dikeluarkan"],
          ["Sisa lebih = 7.200.000.000 − 6.070.000.000", "Rp1.130.000.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan sewa kantin dan bunga deposito (final) serta sumbangan (bukan objek) ke dalam sisa lebih",
          B: "Tidak mengeluarkan biaya pemeliharaan kantin yang berkaitan dengan penghasilan final",
          D: "Uang pangkal dan biaya pendaftaran adalah penghasilan kegiatan pendidikan yang ikut membentuk sisa lebih"
        },
        jebakan: "Pemisahan final/bukan objek berlaku dua arah: penghasilannya dikeluarkan dan biaya yang terkait dengannya juga dikeluarkan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) huruf a dan Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 Pasal 14 ayat (2)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 68/PMK.03/2020 Pasal 4 ayat (2)", berlakuSejak: "2020-06-16" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B7-137",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Pasal 4 ayat (3) huruf m UU PPh (parafrase): dikecualikan dari objek pajak sisa lebih yang diterima atau diperoleh badan atau lembaga nirlaba yang bergerak dalam bidang pendidikan dan/atau bidang penelitian dan pengembangan, yang telah terdaftar pada instansi yang membidanginya, yang ditanamkan kembali dalam bentuk sarana dan prasarana kegiatan pendidikan dan/atau penelitian dan pengembangan, dalam jangka waktu paling lama 4 (empat) tahun sejak diperolehnya sisa lebih tersebut.",
      stem: "Sebuah kantor konsultan pajak menangani empat klien yang sama-sama menanamkan kembali seluruh kelebihan penghasilan atas biaya Tahun 2025 ke pembangunan gedung baru dalam 2 tahun: (1) Yayasan Bina Ilmu Mandiri, penyelenggara SMA yang terdaftar pada kementerian yang membidangi pendidikan; (2) PT Sekolah Global Mandiri, perseroan terbatas penyelenggara sekolah internasional yang membagikan dividen kepada pemegang sahamnya; (3) Perkumpulan Riset Agro Lestari, lembaga nirlaba penelitian dan pengembangan pertanian yang terdaftar pada instansi pembinanya; (4) Koperasi Guru Sejahtera, koperasi beranggotakan para guru yang menyelenggarakan bimbingan belajar dan membagikan sisa hasil usaha (SHU) kepada anggotanya. Berdasarkan kutipan tersebut, klien yang kelebihan penghasilannya dapat dikecualikan dari objek PPh adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (3)", B: "(1), (2), dan (3)", C: "(1) saja", D: "(1), (3), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian sisa lebih hanya untuk badan atau lembaga nirlaba di bidang pendidikan dan/atau penelitian dan pengembangan yang terdaftar pada instansi pembinanya dan menanamkan kembali dalam sarana-prasarana dalam 4 tahun: yayasan pendidikan (1) dan perkumpulan litbang (3). PT pendidikan (2) bukan badan nirlaba sehingga labanya objek PPh walaupun ditanamkan kembali; koperasi (4) adalah badan usaha yang membagikan SHU kepada anggota, bukan badan nirlaba, sehingga SHU-nya tetap objek PPh badan walaupun kegiatannya bimbingan belajar dan kelebihannya ditanamkan kembali.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Bidang usahanya pendidikan, tetapi PT yang membagikan dividen bukan badan nirlaba",
          C: "Lembaga nirlaba penelitian dan pengembangan yang terdaftar juga tercakup",
          D: "Kegiatan bimbingan belajar tidak cukup; koperasi yang membagikan SHU kepada anggota bukan badan nirlaba, sehingga SHU-nya tetap objek PPh badan"
        },
        jebakan: "Syarat pengecualian bersifat kumulatif: nirlaba, bidang pendidikan/litbang, terdaftar, dan ditanamkan kembali tepat waktu."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf m UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 2 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 Pasal 14 ayat (1)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 68/PMK.03/2020 Pasal 1 angka 2 dan Pasal 4 ayat (1)", berlakuSejak: "2020-06-16" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "B7-138",
      topik: "B7.7",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "PT Surya Kemasan Prima (bukan perseroan terbuka; peredaran bruto Rp180 miliar) pada 31 Desember 2020 memiliki beda temporer kena pajak dari penyusutan fiskal yang lebih cepat Rp1.000.000.000, yang diperkirakan seluruhnya berbalik pada 2022–2025. Saat itu perusahaan mengukur liabilitas pajak tangguhan dengan tarif 20% (tarif yang menurut UU 2/2020 berlaku mulai Tahun Pajak 2022), yaitu Rp200.000.000. UU HPP yang diundangkan 29 Oktober 2021 menetapkan tarif PPh badan 22% mulai Tahun Pajak 2022. Pada 31 Desember 2021 beda temporer tersebut tetap Rp1.000.000.000 dan seluruhnya masih diperkirakan berbalik pada 2022–2025. Perlakuan perubahan tarif dalam laporan keuangan 2021 menurut PSAK 212 (dahulu PSAK 46) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak ada penyesuaian pada 2021; liabilitas pajak tangguhan baru diukur ulang pada 2022 ketika tarif 22% mulai berlaku", B: "Liabilitas pajak tangguhan dinaikkan Rp20.000.000 dengan menyajikan kembali laporan keuangan 2020 melalui saldo laba awal", C: "Liabilitas pajak tangguhan dinaikkan Rp20.000.000 dan dicatat sebagai manfaat pajak tangguhan dalam laba rugi 2021", D: "Liabilitas pajak tangguhan diukur ulang menjadi Rp220.000.000; kenaikan Rp20.000.000 diakui sebagai beban pajak tangguhan dalam laba rugi 2021" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak tangguhan diukur dengan tarif yang diperkirakan berlaku saat beda temporer berbalik, berdasarkan tarif yang telah berlaku atau secara substantif berlaku pada akhir periode pelaporan. Pada 31 Desember 2021 UU HPP sudah diundangkan, sehingga liabilitas diukur ulang 1.000.000.000 × 22% = Rp220.000.000. Perubahan estimasi akibat perubahan tarif diakui prospektif dalam laba rugi periode berjalan (kecuali pos yang semula diakui di OCI/ekuitas): kenaikan liabilitas Rp20.000.000 = beban pajak tangguhan 2021.",
        jejakHitung: [
          ["Liabilitas awal = 1.000.000.000 × 20%", "Rp200.000.000"],
          ["Liabilitas akhir 2021 = 1.000.000.000 × 22%", "Rp220.000.000"],
          ["Kenaikan → Dr Beban pajak tangguhan / Cr Liabilitas pajak tangguhan", "Rp20.000.000"]
        ],
        mengapaSalah: {
          A: "Yang menentukan adalah tarif yang sudah diundangkan pada tanggal pelaporan untuk periode pembalikan, bukan tanggal tarif mulai berlaku",
          B: "Perubahan tarif bukan koreksi kesalahan atau perubahan kebijakan; tidak ada penyajian kembali",
          C: "Kenaikan liabilitas pajak tangguhan menambah beban, bukan manfaat"
        },
        jebakan: "Tarif baru dipakai sejak undang-undangnya disahkan, walaupun tarif itu baru berlaku tahun berikutnya."
      },
      dasarHukum: [{ pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan: pengukuran pajak tangguhan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021 (UU HPP, diundangkan 29 Oktober 2021); Pasal 18 UU 7/2021 mencabut Pasal 5 ayat (1) huruf b Perppu 1/2020 (UU 2/2020)", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B7-139", topik: "B7.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Prima Farma Distribusi (distributor obat; bukan bank atau lembaga pembiayaan; peredaran bruto Rp135 miliar) pada 1 Januari 2025 mempunyai aset pajak tangguhan Rp154.000.000 yang berasal dari liabilitas imbalan pasca-kerja yang belum didanai Rp500.000.000 dan penyisihan piutang tak tertagih Rp200.000.000 (seluruhnya pernah dikoreksi positif). Data 2025: beban imbalan pasca-kerja di laba rugi Rp180.000.000 dan manfaat yang dibayarkan langsung kepada pegawai yang pensiun Rp60.000.000; beban penyisihan piutang Rp40.000.000; penghapusan piutang yang memenuhi syarat Pasal 6 ayat (1) huruf h UU PPh dan didebit ke akun penyisihan Rp90.000.000; sanksi bunga STP Rp25.000.000; dan biaya jamuan tanpa daftar nominatif Rp15.000.000. Seluruh aset pajak tangguhan dapat dipulihkan dan tidak ada pos penghasilan komprehensif lain. Beban (manfaat) pajak tangguhan 2025 di laba rugi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Manfaat pajak tangguhan Rp35.200.000", B: "Manfaat pajak tangguhan Rp15.400.000", C: "Manfaat pajak tangguhan Rp24.200.000", D: "Beban pajak tangguhan Rp15.400.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Beda temporer imbalan kerja bertambah 180.000.000 − 60.000.000 = Rp120.000.000; beda temporer penyisihan piutang berubah 40.000.000 − 90.000.000 = −Rp50.000.000 karena penghapusan yang memenuhi syarat menjadi biaya fiskal (pembalikan). Kenaikan bersih Rp70.000.000 × 22% = manfaat pajak tangguhan Rp15.400.000 (saldo aset pajak tangguhan menjadi Rp169.400.000). Sanksi STP dan jamuan tanpa daftar nominatif adalah beda tetap tanpa pajak tangguhan.",
        jejakHitung: [["Imbalan kerja: 500.000.000 + 180.000.000 − 60.000.000", "Rp620.000.000"], ["Penyisihan piutang: 200.000.000 + 40.000.000 − 90.000.000", "Rp150.000.000"], ["Aset pajak tangguhan akhir = (620.000.000 + 150.000.000) × 22%", "Rp169.400.000"], ["Perubahan = 169.400.000 − 154.000.000", "Manfaat Rp15.400.000"], ["Sanksi STP Rp25.000.000 dan jamuan Rp15.000.000", "Beda tetap"]],
        mengapaSalah: { A: "Melupakan pembalikan beda temporer saat piutang dihapus dengan syarat terpenuhi (−Rp90.000.000)", C: "Memperlakukan sanksi STP dan jamuan tanpa daftar nominatif (beda tetap) sebagai beda temporer", D: "Kenaikan aset pajak tangguhan menghasilkan manfaat, bukan beban" },
        jebakan: "Penghapusan piutang yang memenuhi syarat membalik sebagian beda temporer penyisihan; beda tetap tidak pernah masuk pajak tangguhan."
      },
      dasarHukum: [{ pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 6 ayat (1) huruf h dan Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh (sanksi administrasi)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-140", topik: "B7.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Sinar Bangunan Nusantara (distributor bahan bangunan; bukan bank atau lembaga pembiayaan; peredaran bruto Rp92 miliar) memakai metode penyisihan. Pada 1 Januari 2025 saldo penyisihan piutang Rp150.000.000 (seluruhnya pernah dikoreksi positif) dan aset pajak tangguhan atasnya Rp33.000.000. Selama 2025: beban penyisihan Rp90.000.000; penghapusan piutang PT Karya Beton Rp70.000.000 berdasarkan perjanjian tertulis pembebasan utang yang dicantumkan dalam daftar piutang yang dilampirkan pada SPT; serta penghapusan piutang Toko Abadi Rp25.000.000 yang hanya didukung memo internal bagian penagihan. Kedua penghapusan didebit ke akun penyisihan. Koreksi fiskal 2025 atas pos piutang dan saldo aset pajak tangguhan terkait pada 31 Desember 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi negatif Rp5.000.000; aset pajak tangguhan Rp31.900.000",
        B: "Koreksi positif Rp90.000.000; aset pajak tangguhan Rp52.800.000",
        C: "Koreksi positif Rp20.000.000; aset pajak tangguhan Rp37.400.000",
        D: "Koreksi positif Rp20.000.000; aset pajak tangguhan Rp31.900.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Beban penyisihan Rp90.000.000 tidak dapat dikurangkan, tetapi penghapusan PT Karya Beton Rp70.000.000 memenuhi Pasal 6 ayat (1) huruf h sehingga menjadi biaya fiskal: koreksi positif bersih Rp20.000.000. Penghapusan Toko Abadi tidak memenuhi syarat, sehingga secara fiskal piutangnya masih ada; beda temporer akhir = saldo penyisihan 150.000.000 + 90.000.000 − 95.000.000 = Rp145.000.000 ditambah Rp25.000.000 = Rp170.000.000; aset pajak tangguhan 22% = Rp37.400.000 (naik Rp4.400.000 = 20.000.000 × 22%).",
        jejakHitung: [["Koreksi = beban penyisihan 90.000.000 − penghapusan memenuhi syarat 70.000.000", "Koreksi positif Rp20.000.000"], ["Saldo penyisihan akhir = 150.000.000 + 90.000.000 − 70.000.000 − 25.000.000", "Rp145.000.000"], ["Piutang Toko Abadi yang belum diakui fiskal", "Rp25.000.000"], ["Beda temporer akhir = 145.000.000 + 25.000.000", "Rp170.000.000"], ["Aset pajak tangguhan = 170.000.000 × 22%", "Rp37.400.000"]],
        mengapaSalah: { A: "Menganggap kedua penghapusan dapat dibiayakan; penghapusan tanpa dokumen syarat Pasal 6 ayat (1) huruf h bukan biaya fiskal", B: "Tidak memperhitungkan penghapusan PT Karya Beton yang memenuhi syarat sebagai biaya fiskal", D: "Aset pajak tangguhan dihitung dari saldo penyisihan akuntansi saja; piutang Toko Abadi yang sudah dihapus komersial tetapi belum fiskal tetap merupakan beda temporer" },
        jebakan: "Penghapusan yang tidak memenuhi syarat menghilangkan piutang dari neraca komersial, tetapi tidak dari dasar pengenaan pajaknya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 207/PMK.010/2015 jo. PMK 105/PMK.03/2009" }, { pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B7-141", topik: "B7.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Mutiara Garmen Retail (peredaran bruto Rp78 miliar; persediaan dinilai FIFO secara taat asas) pada 31 Desember 2025 menurunkan nilai 2.000 potong jaket musim dingin dari harga perolehan Rp100.000 per potong menjadi nilai realisasi neto Rp80.000 per potong; kerugian penurunan nilai Rp40.000.000 dimasukkan ke HPP komersial 2025, dikoreksi positif, dan diakui aset pajak tangguhan Rp8.800.000. Selama 2026 terjual 1.200 potong jaket tersebut. Pada 31 Desember 2026 nilai realisasi neto 800 potong sisanya turun lagi menjadi Rp67.500 per potong, dan penurunan tambahan dibebankan ke HPP komersial 2026. Koreksi fiskal neto 2026 atas persediaan jaket dan saldo aset pajak tangguhan terkait pada 31 Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp10.000.000; aset pajak tangguhan Rp11.000.000",
        B: "Koreksi negatif Rp24.000.000; aset pajak tangguhan Rp3.520.000",
        C: "Tidak ada koreksi karena jaket belum seluruhnya terjual; aset pajak tangguhan tetap Rp8.800.000",
        D: "Koreksi negatif Rp14.000.000 (negatif Rp24.000.000 atas jaket terjual dan positif Rp10.000.000 atas penurunan tambahan); aset pajak tangguhan Rp5.720.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Fiskal menilai persediaan pada harga perolehan. Untuk 1.200 jaket terjual, HPP fiskal 1.200 × 100.000 = Rp120.000.000 lebih besar dari HPP komersial 1.200 × 80.000 = Rp96.000.000 → koreksi negatif Rp24.000.000. Penurunan tambahan 800 × (80.000 − 67.500) = Rp10.000.000 belum diakui fiskal → koreksi positif. Neto koreksi negatif Rp14.000.000; beda temporer sisa 800 × (100.000 − 67.500) = Rp26.000.000 × 22% = aset pajak tangguhan Rp5.720.000.",
        jejakHitung: [["Pembalikan atas jaket terjual = 1.200 × (100.000 − 80.000)", "Koreksi negatif Rp24.000.000"], ["Penurunan tambahan = 800 × (80.000 − 67.500)", "Koreksi positif Rp10.000.000"], ["Koreksi neto 2026", "Negatif Rp14.000.000"], ["Beda temporer akhir = 800 × (100.000 − 67.500)", "Rp26.000.000"], ["Aset pajak tangguhan = 26.000.000 × 22%", "Rp5.720.000"]],
        mengapaSalah: { A: "Hanya mengoreksi penurunan tambahan dan melupakan pembalikan atas jaket yang terjual", B: "Melupakan penurunan nilai tambahan 2026 yang juga belum diakui fiskal", C: "Pembalikan terjadi per unit yang terjual, tidak menunggu seluruh persediaan habis" },
        jebakan: "Beda temporer penurunan nilai persediaan berbalik sebanding dengan unit yang terjual, sementara penurunan baru menambah beda temporer."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 202 (eks-PSAK 14) Persediaan", berlakuSejak: "2024-01-01" }, { pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-142",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arka Logistik Global (pembukuan Rupiah sesuai SAK; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) menyewa gudang dan kantor milik PT Graha Properti Andalan (WP badan dalam negeri) untuk 12 bulan, 1 Juli 2026–30 Juni 2027, dengan sewa USD24.000 yang dibayar sekaligus pada 1 Juli 2026 dari giro USD. Perusahaan memilih pengecualian sewa jangka pendek PSAK 116 sehingga pembayaran dicatat sebagai sewa dibayar di muka. Atas sewa bangunan itu PT Arka memotong PPh final Pasal 4 ayat (2) sebesar 10% dan mentransfer sisanya kepada PT Graha. Pada 1 Juli 2026 kurs tengah BI Rp16.250 dan kurs KMK yang berlaku Rp16.300. PPN atas sewa ditagih dan dibayar terpisah dalam Rupiah. Jurnal pembayaran sewa dan perlakuan fiskal selisih kurs yang timbul di PT Arka adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dr Sewa dibayar di muka Rp390.000.000; Cr Kas (giro USD) Rp351.000.000; Cr Utang PPh Pasal 4 ayat (2) Rp39.000.000; tidak ada selisih kurs", B: "Dr Sewa dibayar di muka Rp390.000.000; Dr Rugi selisih kurs Rp120.000; Cr Kas (giro USD) Rp351.000.000; Cr Utang PPh Pasal 4 ayat (2) Rp39.120.000; rugi selisih kurs dikoreksi positif karena terkait penghasilan yang dikenai PPh final", C: "Dr Sewa dibayar di muka Rp391.200.000; Cr Kas (giro USD) Rp352.080.000; Cr Utang PPh Pasal 4 ayat (2) Rp39.120.000; tidak ada selisih kurs", D: "Dr Sewa dibayar di muka Rp390.000.000; Dr Rugi selisih kurs Rp120.000; Cr Kas (giro USD) Rp351.000.000; Cr Utang PPh Pasal 4 ayat (2) Rp39.120.000; rugi selisih kurs dapat dikurangkan oleh PT Arka" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", C: "salah-hitung" },
      pembahasan: {
        inti: "Pembukuan memakai kurs tengah BI: sewa dibayar di muka 24.000 × 16.250 = Rp390.000.000 dan kas yang keluar 21.600 × 16.250 = Rp351.000.000. PPh Pasal 4 ayat (2) atas imbalan valas dihitung dengan kurs KMK saat terutang: 10% × 24.000 × 16.300 = Rp39.120.000. Kredit melebihi debit Rp120.000 sehingga dicatat rugi selisih kurs. Sifat final melekat pada penghasilan sewa PT Graha sebagai pemilik bangunan; bagi PT Arka sewa adalah biaya usaha, sehingga rugi kurs yang menyertainya dapat dikurangkan (Pasal 6 ayat (1) huruf e UU PPh).",
        jejakHitung: [
          ["Sewa dibayar di muka = 24.000 × 16.250 (kurs tengah BI)", "Rp390.000.000"],
          ["PPh Pasal 4 ayat (2) = 10% × 24.000 × 16.300 (kurs KMK)", "Rp39.120.000"],
          ["Kas (giro USD) = 21.600 × 16.250", "Rp351.000.000"],
          ["Rugi selisih kurs = 351.000.000 + 39.120.000 − 390.000.000", "Rp120.000"]
        ],
        mengapaSalah: {
          A: "Utang PPh dihitung dengan kurs tengah BI; DPP PPh atas imbalan valas wajib memakai kurs KMK saat terutang",
          B: "Jurnalnya benar, tetapi PP 94/2010 Pasal 9 ayat (2) hanya mengecualikan selisih kurs yang terkait penghasilan final milik wajib pajak sendiri; penghasilan final di sini milik PT Graha, bukan penyewa",
          C: "Seluruh jurnal dicatat dengan kurs KMK; pembukuan memakai kurs tengah BI, kurs KMK hanya untuk menghitung PPh"
        },
        jebakan: "Kata 'final' pada PPh sewa bangunan tidak membuat rugi kurs penyewa menjadi tidak dapat dikurangkan; yang menerima penghasilan final adalah pemilik bangunan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017 (sewa tanah/bangunan)", berlakuSejak: "2018-01-02" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B7-143", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Kencana Plastik Utama (manufaktur; pembukuan Rupiah sesuai SAK; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) membeli mesin injeksi dari pemasok di Jerman seharga USD100.000. Uang muka 40% (USD40.000) yang tidak dapat dikembalikan dibayar pada 15 Agustus 2025 ketika kurs tengah BI Rp16.100. Mesin diterima, kendali beralih, dan mesin siap dipakai pada 1 Oktober 2025 ketika kurs tengah BI Rp16.300; kurs KMK yang dipakai dalam PIB Rp16.250 (bea masuk 0%; PPN impor dan PPh Pasal 22 impor dijurnal terpisah sebagai pajak yang dapat dikreditkan). Sisa harga USD60.000 dilunasi dari giro USD pada 20 November 2025 ketika kurs tengah BI Rp16.450. Harga perolehan mesin (komersial dan fiskal) dan selisih kurs 2025 atas transaksi ini adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Harga perolehan Rp1.630.000.000 (seluruh USD100.000 dengan kurs tanggal mesin diterima); rugi selisih kurs Rp9.000.000",
        B: "Harga perolehan Rp1.622.000.000; rugi selisih kurs Rp9.000.000 yang diakui dalam laba rugi dan dapat dikurangkan secara fiskal",
        C: "Harga perolehan Rp1.631.000.000 karena rugi kurs saat pelunasan Rp9.000.000 dikapitalisasi ke mesin; tidak ada selisih kurs di laba rugi",
        D: "Harga perolehan Rp1.625.000.000 (seluruh USD100.000 dengan kurs KMK dalam PIB); rugi selisih kurs Rp12.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Uang muka yang tidak dapat dikembalikan adalah pos nonmoneter: bagian mesin yang dibayar di muka dicatat dengan kurs saat uang muka dibayar (40.000 × 16.100 = Rp644.000.000) dan tidak dijabarkan ulang; sisa harga diakui dengan kurs saat mesin diakui (60.000 × 16.300 = Rp978.000.000). Harga perolehan Rp1.622.000.000. Utang USD60.000 adalah pos moneter; pelunasan pada kurs Rp16.450 menimbulkan rugi kurs 60.000 × 150 = Rp9.000.000 di laba rugi, yang secara fiskal diakui mengikuti pembukuan (PP 94/2010 Pasal 9) dan tidak menambah harga perolehan.",
        jejakHitung: [["Bagian uang muka = 40.000 × 16.100", "Rp644.000.000"], ["Sisa saat mesin diakui = 60.000 × 16.300", "Rp978.000.000"], ["Harga perolehan = 644.000.000 + 978.000.000", "Rp1.622.000.000"], ["Rugi kurs pelunasan = 60.000 × (16.450 − 16.300)", "Rp9.000.000"]],
        mengapaSalah: { A: "Uang muka diperlakukan seolah pos moneter yang ikut berubah kurs; bagian yang sudah dibayar terkunci pada kurs saat pembayaran (Rp16.100)", C: "Rugi kurs atas utang yang timbul setelah aset diakui adalah rugi selisih kurs, bukan bagian harga perolehan", D: "Kurs KMK dalam PIB hanya untuk menghitung bea masuk dan pajak dalam rangka impor, bukan untuk mencatat harga mesin" },
        jebakan: "Pada pembelian dengan uang muka valas ada dua kurs perolehan: kurs saat uang muka dibayar dan kurs saat aset diakui; kurs pelunasan hanya menghasilkan selisih kurs."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) dan interpretasinya tentang transaksi valuta asing dan imbalan di muka", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 10 ayat (1) UU PPh (harga perolehan)", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "B7-144", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Kopi Gayo Mandiri (eksportir; pembukuan Rupiah sesuai SAK; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) menandatangani kontrak ekspor kopi arabika senilai USD120.000 dengan pembeli di Jerman. Uang muka 30% (USD36.000) yang tidak dapat dikembalikan diterima pada 5 Oktober 2026 ketika kurs tengah BI Rp16.200 dan dicatat sebagai liabilitas kontrak. Kopi dimuat ke kapal dan kendali beralih kepada pembeli pada 20 November 2026 (kurs tengah BI Rp16.350; kurs KMK dalam PEB Rp16.300); sisa USD84.000 dicatat sebagai piutang dan belum dilunasi sampai 31 Desember 2026, ketika kurs tengah BI Rp16.400 dan kurs KMK Rp16.380. Pendapatan ekspor 2026 dan selisih kurs 2026 atas piutang tersebut (perlakuan komersial sama dengan fiskal) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pendapatan Rp1.962.000.000 (seluruh USD120.000 dengan kurs tanggal kendali beralih); laba selisih kurs Rp4.200.000",
        B: "Pendapatan Rp1.956.000.000 (seluruh USD120.000 dengan kurs KMK dalam PEB); laba selisih kurs Rp8.400.000",
        C: "Pendapatan Rp1.956.600.000; laba selisih kurs Rp4.200.000",
        D: "Pendapatan Rp1.968.000.000 (dijabarkan dengan kurs tengah BI 31 Desember 2026); tidak ada selisih kurs"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Uang muka yang diterima adalah liabilitas nonmoneter: bagian pendapatan yang telah dibayar di muka diakui dengan kurs saat uang muka diterima (36.000 × 16.200 = Rp583.200.000), sedangkan sisanya dengan kurs saat kendali beralih (84.000 × 16.350 = Rp1.373.400.000). Pendapatan Rp1.956.600.000. Piutang USD84.000 adalah pos moneter yang dijabarkan dengan kurs tengah BI 31 Desember 2026: laba kurs 84.000 × (16.400 − 16.350) = Rp4.200.000, diakui fiskal mengikuti pembukuan.",
        jejakHitung: [["Pendapatan bagian uang muka = 36.000 × 16.200", "Rp583.200.000"], ["Pendapatan sisa = 84.000 × 16.350", "Rp1.373.400.000"], ["Pendapatan ekspor", "Rp1.956.600.000"], ["Laba kurs piutang = 84.000 × (16.400 − 16.350)", "Rp4.200.000"]],
        mengapaSalah: { A: "Bagian yang sudah dibayar di muka tidak diukur ulang dengan kurs tanggal penyerahan", B: "Kurs KMK dalam PEB dipakai untuk kepabeanan dan perpajakan, bukan untuk mengukur pendapatan di pembukuan", D: "Pendapatan tidak dijabarkan ulang; hanya pos moneter (piutang) yang dijabarkan dengan kurs penutup" },
        jebakan: "Uang muka penjualan mengunci kurs untuk porsi pendapatan yang dibayar di muka; hanya piutang sisa yang menimbulkan selisih kurs."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) dan interpretasinya tentang transaksi valuta asing dan imbalan di muka", berlakuSejak: "2024-01-01" }, { pasal: "PSAK 115 (eks-PSAK 72) Pendapatan dari Kontrak dengan Pelanggan", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B7-145",
      topik: "B7.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 9 ayat (1) huruf c UU PPh (parafrase): tidak boleh dikurangkan pembentukan atau pemupukan dana cadangan, kecuali cadangan tertentu bagi usaha bank dan pembiayaan, asuransi, penjaminan, reklamasi pertambangan, penanaman kembali kehutanan, serta penutupan dan pemeliharaan tempat pembuangan limbah industri.",
      stem: "PT Mesin Presisi Asia (manufaktur mesin pengemas; pembukuan Rupiah sesuai SAK; tahun buku kalender; bukan usaha yang cadangannya diperkenankan Pasal 9 ayat (1) huruf c UU PPh) memberikan garansi dua tahun atas mesin yang diekspor. Klaim garansi diganti dengan pembayaran USD kepada distributor luar negeri, sehingga provisi garansi diperlakukan sebagai pos moneter valas. Pada 1 Januari 2026 saldo provisi garansi USD50.000 tercatat Rp800.000.000 (kurs Rp16.000); seluruh pembentukannya pada tahun-tahun lalu telah dikoreksi positif dan diakui aset pajak tangguhan Rp176.000.000. Pada 15 September 2026 klaim USD30.000 dibayar dari giro USD (kurs tengah BI Rp16.300) dengan jurnal Dr Provisi garansi Rp480.000.000; Dr Rugi selisih kurs Rp9.000.000; Cr Kas Rp489.000.000. Pada 31 Desember 2026 sisa provisi USD20.000 dijabarkan dengan kurs tengah BI Rp16.400 dan diakui rugi selisih kurs Rp8.000.000. Tidak ada penambahan provisi pada 2026; tarif PPh badan 22%. Koreksi fiskal neto 2026 atas pos provisi garansi (termasuk selisih kursnya) dan saldo aset pajak tangguhan terkait pada 31 Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi negatif Rp472.000.000; aset pajak tangguhan Rp72.160.000", B: "Koreksi negatif Rp480.000.000; aset pajak tangguhan Rp70.400.000", C: "Tidak ada koreksi karena seluruh selisih kurs diakui fiskal mengikuti pembukuan dan klaim dibayar dari provisi; aset pajak tangguhan tetap Rp176.000.000", D: "Koreksi negatif Rp489.000.000; aset pajak tangguhan Rp72.160.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Provisi garansi adalah cadangan yang tidak dapat dikurangkan; biaya fiskalnya baru timbul saat klaim dibayar, sebesar Rupiah yang sesungguhnya dikeluarkan (30.000 × 16.300 = Rp489.000.000). Karena Rp9.000.000 di antaranya sudah menjadi rugi kurs di laba rugi 2026, koreksi negatifnya Rp480.000.000. Rugi penjabaran akhir tahun Rp8.000.000 hanya menambah saldo cadangan yang secara fiskal belum ada, sehingga dikoreksi positif. Koreksi neto negatif Rp472.000.000, sama dengan turunnya beda temporer dari Rp800.000.000 menjadi Rp328.000.000 (20.000 × 16.400); aset pajak tangguhan 22% × 328.000.000 = Rp72.160.000.",
        jejakHitung: [
          ["Biaya fiskal saat klaim dibayar = 30.000 × 16.300", "Rp489.000.000"],
          ["Dikurangi bagian yang sudah dibebankan (rugi kurs saat bayar)", "Rp9.000.000"],
          ["Koreksi negatif atas pembayaran klaim", "Rp480.000.000"],
          ["Rugi penjabaran provisi 31 Desember 2026 (bagian cadangan)", "Koreksi positif Rp8.000.000"],
          ["Koreksi neto = −480.000.000 + 8.000.000", "Negatif Rp472.000.000"],
          ["Beda temporer akhir = 20.000 × 16.400", "Rp328.000.000"],
          ["Aset pajak tangguhan = 328.000.000 × 22%", "Rp72.160.000"]
        ],
        mengapaSalah: {
          B: "Memperlakukan rugi penjabaran provisi sebagai rugi kurs fiskal dan menghitung aset pajak tangguhan dari kurs historis; padahal provisinya sendiri bukan utang fiskal dan nilai tercatatnya Rp328.000.000",
          C: "PP 94/2010 Pasal 9 mengatur saat pengakuan selisih kurs, tidak membuat cadangan yang dilarang Pasal 9 ayat (1) huruf c menjadi dapat dikurangkan; pembayaran klaim juga membalik beda temporer",
          D: "Mengoreksi negatif seluruh pembayaran Rp489.000.000 padahal Rp9.000.000 sudah dibebankan sebagai rugi kurs (dibiayakan dua kali), dan lupa mengoreksi positif rugi penjabaran Rp8.000.000"
        },
        jebakan: "Selisih kurs atas cadangan yang tidak dapat dikurangkan ikut berstatus cadangan: menjadi beda temporer, bukan rugi kurs fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) UU PPh (biaya saat klaim dibayar)", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan", berlakuSejak: "2024-01-01" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: UU PPh Pasal 9 ayat (1) huruf c (provisi garansi bukan cadangan yang dikecualikan) dan PP 94/2010 Pasal 9 ayat (1) sampai (3), yang hanya mengatur pengakuan selisih kurs mengikuti SAK. Belum pasti: tidak ada naskah yang tersurat mengatur selisih kurs atas cadangan valas yang pembentukannya tidak dapat dikurangkan; pendapat yang mengakuinya sebagai rugi kurs fiskal (opsi B) belum diuji terhadap putusan atau penegasan DJP."
    },
    {
      id: "B7-146",
      topik: "B7.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "PP 94/2010 Pasal 9 (parafrase setia): (1) pengakuan keuntungan atau kerugian selisih kurs mata uang asing dilakukan berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan standar akuntansi keuangan yang berlaku di Indonesia; (2) ketentuan ayat (1) tidak berlaku atas keuntungan atau kerugian selisih kurs yang terkait dengan penghasilan yang dikenai PPh bersifat final dan/atau bukan objek pajak.",
      stem: "PT Bahtera Kimia Industri (manufaktur resin; bukan perseroan terbuka; peredaran bruto 2025 Rp185 miliar; pembukuan Rupiah sesuai SAK) melaporkan laba sebelum pajak 2025 Rp4.200.000.000. Di dalamnya termasuk: (1) rugi selisih kurs belum direalisasi Rp150.000.000 atas penjabaran utang impor bahan baku dengan kurs tengah BI 31 Desember 2025 (bila dijabarkan dengan kurs KMK, rugi itu hanya Rp138.000.000); (2) laba selisih kurs belum direalisasi Rp60.000.000 atas piutang ekspor; (3) pendapatan sewa ruko Rp300.000.000 yang telah dipotong PPh final 10%, beban penyusutan ruko Rp70.000.000, dan rugi selisih kurs Rp40.000.000 atas utang USD kepada pemasok luar negeri yang memasok lift dan peralatan ruko tersebut; (4) beban PPh Pasal 26 yang ditanggung perusahaan tanpa klausul gross-up Rp45.000.000. Kredit pajak 2025: PPh Pasal 22 impor Rp180.000.000, PPh Pasal 23 Rp20.000.000, dan PPh Pasal 25 Rp540.000.000. Tidak ada koreksi lain. Berdasarkan kutipan tersebut, PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp171.900.000", B: "Rp193.900.000", C: "Rp152.100.000", D: "Rp154.740.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "salah-baca" },
      pembahasan: {
        inti: "Selisih kurs belum direalisasi (1) dan (2) diakui fiskal mengikuti pembukuan sesuai SAK dan tidak dikoreksi, termasuk tidak 'disesuaikan' ke kurs KMK. Pos ruko (3) berkaitan dengan penghasilan final: pendapatan sewa dikoreksi negatif Rp300.000.000, sedangkan penyusutan Rp70.000.000 dan rugi kurs Rp40.000.000 dikoreksi positif (Pasal 9 ayat (2) PP 94/2010). PPh 26 yang ditanggung tanpa gross-up (4) dikoreksi positif Rp45.000.000. PKP Rp4.055.000.000; PPh 22% Rp892.100.000; dikurangi kredit Rp740.000.000 = PPh 29 Rp152.100.000. Pasal 31E tidak berlaku karena peredaran bruto di atas Rp50 miliar.",
        jejakHitung: [
          ["Laba sebelum pajak", "Rp4.200.000.000"],
          ["Koreksi positif: penyusutan ruko + rugi kurs ruko + PPh 26 ditanggung = 70.000.000 + 40.000.000 + 45.000.000", "Rp155.000.000"],
          ["Koreksi negatif: pendapatan sewa final", "Rp300.000.000"],
          ["PKP = 4.200.000.000 + 155.000.000 − 300.000.000", "Rp4.055.000.000"],
          ["PPh terutang = 22% × 4.055.000.000", "Rp892.100.000"],
          ["Kredit pajak = 180.000.000 + 20.000.000 + 540.000.000", "Rp740.000.000"],
          ["PPh Pasal 29", "Rp152.100.000"]
        ],
        mengapaSalah: {
          A: "Mengoreksi selisih kurs belum direalisasi (+150.000.000 dan −60.000.000); fiskal mengikuti pembukuan taat asas sesuai SAK, termasuk yang belum direalisasi",
          B: "Lupa memisahkan pos ruko: pendapatan sewa final dan seluruh biaya terkaitnya, termasuk rugi kursnya, dikeluarkan dari penghitungan",
          D: "Menambah koreksi positif Rp12.000.000 agar penjabaran 'mengikuti' kurs KMK; kurs KMK tidak dipakai untuk menjabarkan pos moneter"
        },
        jebakan: "Belum direalisasi tidak berarti dikoreksi; yang dikoreksi adalah selisih kurs yang terkait penghasilan final atau bukan objek."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9 ayat (1) dan (2)", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (2) UU PPh; PP 34/2017 (sewa tanah/bangunan)", berlakuSejak: "2018-01-02" }, { pasal: "Pasal 9 ayat (1) huruf h dan Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B7-147",
      topik: "B7.8",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Samudra Gas Energi (PMA; telah memperoleh izin menyelenggarakan pembukuan dalam bahasa Inggris dan satuan dolar AS sejak Tahun Buku 2025) menghitung penghasilan kena pajak Tahun Pajak 2025 sebesar USD2.000.000 (tarif 22%; tidak ada fasilitas). Angsuran PPh Pasal 25 yang telah dibayar dalam dolar AS berjumlah USD360.000. Pada 10 Maret 2025 pelanggan dalam negeri memotong PPh Pasal 23 atas jasa sebesar Rp324.000.000 dan menerbitkan bukti potong dalam Rupiah; pada tanggal itu kurs KMK yang berlaku Rp16.200 dan kurs tengah BI Rp16.250. Pada 31 Desember 2025 kurs tengah BI Rp16.400 dan kurs KMK Rp16.380. PPh Pasal 29 Tahun Pajak 2025 dalam satuan dolar AS adalah ...",
      kataKualifikasi: [],
      opsi: { A: "USD80.000, karena PPh Pasal 23 yang dipotong dalam Rupiah tidak dapat dikreditkan dalam SPT berdenominasi dolar AS", B: "USD60.000", C: "USD60.061,54", D: "USD60.219,78" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPh terutang 22% × USD2.000.000 = USD440.000. Kredit pajak yang dipotong dalam Rupiah tetap dapat dikreditkan setelah dikonversi ke dolar AS dengan kurs KMK yang berlaku pada saat pemotongan: Rp324.000.000 ÷ 16.200 = USD20.000. PPh Pasal 29 = 440.000 − 360.000 − 20.000 = USD60.000. Kurs tengah BI adalah kurs pembukuan, dan kurs akhir tahun tidak relevan untuk kredit pajak.",
        jejakHitung: [
          ["PPh terutang = 22% × USD2.000.000", "USD440.000"],
          ["Kredit PPh 23 = Rp324.000.000 ÷ 16.200 (kurs KMK saat pemotongan)", "USD20.000"],
          ["PPh 29 = 440.000 − 360.000 − 20.000", "USD60.000"]
        ],
        mengapaSalah: {
          A: "Kredit pajak dalam Rupiah tidak hilang; hanya dikonversi ke dolar AS",
          C: "Mengonversi dengan kurs tengah BI (Rp324.000.000 ÷ 16.250 = USD19.938,46); konversi pajak memakai kurs KMK",
          D: "Mengonversi dengan kurs KMK 31 Desember 2025 (Rp324.000.000 ÷ 16.380 = USD19.780,22); yang dipakai kurs KMK pada saat pemotongan"
        },
        jebakan: "Bagi pembukuan USD, kredit pajak Rupiah dikunci pada kurs KMK saat dipotong, bukan kurs akhir tahun atau kurs tengah BI."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (2) PMK 196/PMK.03/2007 (kredit PPh 22/23 Rupiah dikonversi ke USD dengan kurs KMK pada tanggal pemotongan)", berlakuSejak: "2007-12-28" }, { pasal: "Pasal 28 ayat (1) huruf c UU PPh (kredit pajak PPh 23)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 106 ayat (2) huruf a PMK 81 Tahun 2024 (PPh 25 dan PPh 29 dibayar dalam USD)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B7-148", topik: "B7.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Bumi Agro Lestari (perkebunan dan pabrik kelapa sawit; pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) menerima tagihan jasa perawatan mesin pabrik dari PT Teknik Kalibrasi Prima (WP badan dalam negeri) sebesar USD15.000; PPN ditagih dan dibayar terpisah dalam Rupiah. Tagihan diterima, dicatat, dan dibayar pada hari yang sama, 12 Agustus 2026, dari rekening Rupiah: bank mengonversi jumlah neto setelah PPh Pasal 23 sebesar 2% dengan kurs jual bank Rp16.300. Pada tanggal itu kurs tengah BI Rp16.240 dan kurs KMK yang berlaku Rp16.200. Jurnal pembayaran yang tepat di PT Bumi adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dr Beban perawatan mesin Rp243.600.000; Dr Rugi selisih kurs Rp870.000; Cr Kas Rp239.610.000; Cr Utang PPh Pasal 23 Rp4.860.000",
        B: "Dr Beban perawatan mesin Rp243.600.000; Dr Rugi selisih kurs Rp882.000; Cr Kas Rp239.610.000; Cr Utang PPh Pasal 23 Rp4.872.000",
        C: "Dr Beban perawatan mesin Rp244.500.000; Cr Kas Rp239.610.000; Cr Utang PPh Pasal 23 Rp4.890.000",
        D: "Dr Beban perawatan mesin Rp243.000.000; Dr Rugi selisih kurs Rp1.470.000; Cr Kas Rp239.610.000; Cr Utang PPh Pasal 23 Rp4.860.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Beban dicatat dengan kurs tengah BI: 15.000 × 16.240 = Rp243.600.000. PPh Pasal 23 dihitung dari DPP valas dengan kurs KMK: 2% × 15.000 × 16.200 = Rp4.860.000. Kas Rupiah yang keluar = USD14.700 × kurs jual bank 16.300 = Rp239.610.000. Selisih debit Rp870.000 adalah rugi kurs (rugi konversi bank Rp882.000 dikurangi laba Rp12.000 karena porsi PPh dicatat dengan kurs KMK yang lebih rendah), dapat dikurangkan.",
        jejakHitung: [["Beban = 15.000 × 16.240", "Rp243.600.000"], ["PPh 23 = 2% × 15.000 × 16.200", "Rp4.860.000"], ["Kas = 14.700 × 16.300", "Rp239.610.000"], ["Rugi kurs = 239.610.000 + 4.860.000 − 243.600.000", "Rp870.000"]],
        mengapaSalah: { B: "PPh 23 dihitung dengan kurs tengah BI; DPP PPh atas imbalan valas memakai kurs KMK saat terutang", C: "Beban dan PPh dicatat dengan kurs jual bank; beban mengikuti kurs pembukuan dan PPh mengikuti kurs KMK", D: "Beban dicatat dengan kurs KMK; kurs KMK hanya untuk menghitung PPh, bukan untuk pembukuan" },
        jebakan: "Tiga kurs dalam satu jurnal: kurs tengah BI untuk beban, kurs KMK untuk utang PPh, dan kurs jual bank untuk kas Rupiah yang keluar."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015 (jasa lain)", berlakuSejak: "2015-08-24" }, { pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-149", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-17", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Sentosa Farma Impor (1/3). PT Sentosa Farma Impor (PKP; importir pemilik API-U; pembukuan Rupiah sesuai SAK; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi) membeli bahan baku obat USD50.000 secara kredit dengan syarat CIF Tanjung Priok; menurut kontrak, kendali dan risiko beralih saat barang dimuat di pelabuhan muat pada 4 November 2025 (kurs tengah BI Rp15.900). PIB didaftarkan dan pungutan impor dilunasi pada 25 November 2025 dengan kurs KMK Rp16.000 (kurs tengah BI hari itu Rp16.050): bea masuk 5% Rp40.000.000, PPN impor Rp92.400.000, dan PPh Pasal 22 impor 2,5% Rp21.000.000. Utang kepada pemasok belum dibayar pada 31 Desember 2025 dan dilunasi pada 15 Januari 2026. Jumlah yang didebit ke akun Persediaan bahan baku atas impor ini (tanpa biaya lain) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp842.500.000 (harga barang dengan kurs tengah BI tanggal PIB ditambah bea masuk)",
        B: "Rp840.000.000 (nilai CIF dengan kurs KMK dalam PIB ditambah bea masuk)",
        C: "Rp856.000.000 (harga barang dengan kurs tanggal pemuatan, bea masuk, dan PPh Pasal 22 impor)",
        D: "Rp835.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Persediaan diakui saat kendali beralih (pemuatan 4 November 2025) dengan kurs tengah BI hari itu: 50.000 × 15.900 = Rp795.000.000, ditambah bea masuk Rp40.000.000 yang bukan pajak yang dapat dikreditkan = Rp835.000.000. Kurs KMK Rp16.000 hanya dasar menghitung bea masuk, PPN impor, dan PPh 22 impor. PPN impor menjadi Pajak Masukan dan PPh 22 impor menjadi kredit PPh badan, sehingga keduanya tidak masuk persediaan.",
        jejakHitung: [["Harga barang = 50.000 × 15.900 (kurs saat kendali beralih)", "Rp795.000.000"], ["Bea masuk = 5% × 50.000 × 16.000 (kurs KMK)", "Rp40.000.000"], ["Persediaan = 795.000.000 + 40.000.000", "Rp835.000.000"], ["PPN impor dan PPh 22 impor", "Akun pajak, bukan persediaan"]],
        mengapaSalah: { A: "Tanggal PIB bukan tanggal pengakuan persediaan; kendali sudah beralih saat pemuatan", B: "Kurs KMK dalam PIB dipakai untuk pungutan impor, bukan untuk mencatat harga barang", C: "PPh Pasal 22 impor adalah pembayaran di muka PPh badan yang dapat dikreditkan, bukan biaya perolehan" },
        jebakan: "Ada tiga tanggal (pemuatan, PIB, pelunasan) dan dua kurs; harga barang memakai kurs saat kendali beralih."
      },
      dasarHukum: [{ pasal: "PSAK 202 (eks-PSAK 14) Persediaan; PSAK 221 (eks-PSAK 10)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 22 dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 131/2024 (PPN 12% × DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B7-150", topik: "B7.8", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-B7-17", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Sentosa Farma Impor (2/3). PT Sentosa mencatat persediaan bahan baku impor Rp835.000.000 (USD50.000 dengan kurs tengah BI 4 November 2025 Rp15.900, ditambah bea masuk Rp40.000.000) dan utang usaha USD50.000 sebesar Rp795.000.000. Pada 31 Desember 2025 utang belum dibayar dan seluruh bahan baku masih ada di gudang; kurs tengah BI Rp16.100 dan kurs KMK yang berlaku Rp16.080. Selisih kurs atas transaksi ini dalam laba rugi 2025 dan nilai tercatat persediaan bahan baku tersebut pada 31 Desember 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rugi selisih kurs Rp10.000.000; persediaan Rp845.000.000 (ikut dijabarkan dengan kurs tengah BI 31 Desember 2025)",
        B: "Rugi selisih kurs Rp10.000.000; persediaan tetap Rp835.000.000",
        C: "Rugi selisih kurs Rp9.000.000 (utang dijabarkan dengan kurs KMK 31 Desember 2025); persediaan tetap Rp835.000.000",
        D: "Tidak ada rugi selisih kurs karena kenaikan utang Rp10.000.000 ditambahkan ke persediaan menjadi Rp845.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Utang usaha adalah pos moneter yang dijabarkan dengan kurs penutup (kurs tengah BI): 50.000 × (16.100 − 15.900) = rugi Rp10.000.000, diakui di laba rugi 2025 dan sekaligus dalam penghasilan neto fiskal. Persediaan adalah pos nonmoneter yang tetap pada kurs historis, sehingga nilainya tetap Rp835.000.000.",
        jejakHitung: [["Utang dijabarkan = 50.000 × 16.100", "Rp805.000.000"], ["Rugi kurs = 805.000.000 − 795.000.000", "Rp10.000.000"], ["Persediaan (nonmoneter, kurs historis)", "Rp835.000.000"]],
        mengapaSalah: { A: "Persediaan bukan pos moneter dan tidak dijabarkan ulang", C: "Kurs KMK tidak dipakai untuk menjabarkan pos moneter di pembukuan", D: "Selisih kurs utang setelah persediaan diakui masuk laba rugi, tidak dikapitalisasi ke persediaan" },
        jebakan: "Pada tanggal neraca utang impor bergerak mengikuti kurs, persediaannya tidak."
      },
      dasarHukum: [{ pasal: "PSAK 221 (eks-PSAK 10) Pengaruh Perubahan Kurs Valuta Asing", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B7-151", topik: "B7.8", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 3, kasusId: "V-B7-17", laporanUjian: ["C-2026-10"],
      stem: "Vignette PT Sentosa Farma Impor (3/3). Data ringkas: persediaan bahan baku impor dicatat Rp835.000.000 (harga barang USD50.000 dengan kurs tengah BI saat pemuatan Rp15.900 ditambah bea masuk); PPN impor Rp92.400.000 dan PPh Pasal 22 impor Rp21.000.000 dilunasi 25 November 2025; utang USD50.000 dijabarkan dengan kurs tengah BI 31 Desember 2025 Rp16.100 sehingga diakui rugi kurs 2025 Rp10.000.000. Utang dilunasi pada 15 Januari 2026 dari rekening Rupiah dengan kurs jual bank Rp16.230 (kurs tengah BI Rp16.200; kurs KMK Rp16.150). Tarif PPh badan 22%. Pernyataan mengenai perlakuan fiskal transaksi ini yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Harga perolehan fiskal persediaan Rp856.000.000 karena PPh Pasal 22 impor merupakan biaya perolehan; rugi kurs 2025 Rp10.000.000 diakui fiskal; rugi kurs pelunasan 2026 Rp6.500.000 diakui fiskal pada 2026",
        B: "Harga perolehan fiskal persediaan Rp835.000.000; rugi kurs 2025 Rp10.000.000 dikoreksi positif dan menimbulkan aset pajak tangguhan Rp2.200.000; rugi kurs Rp16.500.000 diakui fiskal pada 2026 saat pelunasan",
        C: "Harga perolehan fiskal persediaan Rp835.000.000; rugi kurs 2025 Rp10.000.000 diakui fiskal tanpa pajak tangguhan; rugi kurs pelunasan Rp6.500.000 diakui fiskal pada 2026; PPh Pasal 22 impor menjadi kredit pajak PPh badan Tahun Pajak 2025",
        D: "Harga perolehan fiskal persediaan Rp835.000.000; rugi kurs 2025 Rp10.000.000 diakui fiskal tanpa pajak tangguhan; rugi kurs pelunasan Rp6.500.000 diakui fiskal pada 2026; PPh Pasal 22 impor menjadi kredit pajak PPh badan Tahun Pajak 2026, tahun pelunasan utang impor"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Fiskal mengikuti pembukuan taat asas sesuai SAK: harga perolehan persediaan Rp835.000.000 (PPN impor adalah Pajak Masukan, PPh 22 impor adalah kredit pajak); rugi penjabaran 2025 Rp10.000.000 diakui pada 2025 sehingga tidak ada beda temporer; saat pelunasan hanya diakui selisih terhadap kurs penutup tahun lalu, 50.000 × (16.230 − 16.100) = Rp6.500.000. PPh 22 impor dikreditkan pada tahun pajak saat dipungut (2025), tidak menunggu pelunasan utang kepada pemasok.",
        jejakHitung: [["Rugi kurs 2025 = 50.000 × (16.100 − 15.900)", "Rp10.000.000"], ["Rugi kurs 2026 = 50.000 × (16.230 − 16.100)", "Rp6.500.000"], ["Jumlah Rupiah dibayar 15 Januari 2026 = 50.000 × 16.230", "Rp811.500.000"], ["Pajak tangguhan", "Nihil (tidak ada beda temporer)"]],
        mengapaSalah: { A: "PPh 22 impor bukan biaya perolehan, melainkan kredit pajak", B: "Rugi kurs belum direalisasi tidak dikoreksi; menghitung rugi pelunasan dari kurs awal Rp15.900 berarti rugi 2025 dibiayakan dua kali bila tidak dikoreksi, atau menyimpang dari pembukuan taat asas bila dikoreksi", D: "PPh 22 impor dikreditkan pada tahun pajak saat dipungut (dilunasi bersama PIB 25 November 2025), tidak bergantung pada pelunasan utang dagang" },
        jebakan: "Rugi pelunasan dihitung dari kurs penutup tahun lalu, bukan dari kurs awal transaksi."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 22 dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 212 (eks-PSAK 46) Pajak Penghasilan; PSAK 221 (eks-PSAK 10)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "B7-152",
      topik: "B7.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "PMK 90/PMK.03/2020 Pasal 4 ayat (1) (dikutip try out): Hubungan di antara Pihak-Pihak yang bersangkutan berkenaan dengan usaha sebagaimana dimaksud dalam Pasal 2 ayat (3) huruf b merupakan hubungan yang terjadi apabila terdapat transaksi yang bersifat rutin antara Pihak pemberi dan Pihak penerima.",
      stem: "Yayasan Ortax Peduli (badan sosial) menyewakan sebagian gedungnya kepada PT Ortax Manufaktur sejak 2025 dengan pembayaran sewa setiap bulan. Pada Maret 2026 yayasan menerima sumbangan uang Rp300.000.000 dari PT Ortax Manufaktur. Selain hubungan sewa tersebut, tidak ada hubungan pekerjaan, kepemilikan, atau penguasaan di antara keduanya. Perlakuan fiskal yang tepat atas penerimaan sumbangan tersebut bagi Yayasan Ortax Peduli adalah ...",
      kataKualifikasi: [],
      opsi: { A: "dicatat sebagai penghasilan objek PPh final", B: "dicatat sebagai penghasilan bukan objek PPh", C: "dicatat sebagai penghasilan objek PPh dengan tarif umum", D: "dicatat sebagai tambahan modal yang disetor" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sumbangan atau harta hibahan berupa uang yang diterima badan sosial termasuk yayasan dikecualikan dari objek PPh hanya sepanjang tidak ada hubungan dengan usaha, pekerjaan, kepemilikan, atau penguasaan di antara pihak-pihak yang bersangkutan (UU PPh Pasal 4 ayat (3) huruf a; PP 55/2022 Pasal 7 ayat (1); PMK 114/2025 Pasal 15 ayat (2) dan Pasal 16 ayat (1)). Hubungan dengan usaha terjadi jika terdapat transaksi yang bersifat rutin antara pihak pemberi dan pihak penerima (Penjelasan Pasal 6 ayat (2) huruf b PP 55/2022; rumusan yang sama ada di PMK 90/2020 Pasal 4 ayat (1) yang dikutip try out, tetapi PMK 90/2020 sudah dicabut PMK 114/2025 sejak 31 Desember 2025). Sewa gedung dengan pembayaran bulanan sejak 2025 adalah transaksi rutin, sehingga syarat pengecualian tidak terpenuhi: sumbangan Rp300.000.000 menjadi objek PPh (UU PPh Pasal 4 ayat (1)) dan dikenai tarif umum. Pengecualian khusus PMK 114/2025 Pasal 15 ayat (3) hanya untuk hubungan kepemilikan atau penguasaan, jadi tidak menolong di sini. Secara akuntansi nonlaba (ISAK 335, eks-ISAK 35), sumbangan dicatat sebagai penghasilan yang menambah aset neto.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tidak ada ketentuan yang mengenakan PPh final atas sumbangan atau hibah yang tidak memenuhi syarat; penghasilan itu masuk penghitungan PPh tarif umum.",
          B: "Mengabaikan syarat \"tidak ada hubungan usaha\"; hubungan sewa-menyewa rutin menggugurkan pengecualian.",
          D: "Yayasan tidak mempunyai modal disetor; sumbangan bukan setoran modal."
        },
        jebakan: "Status yayasan saja tidak cukup. Pengecualian khusus PMK 114/2025 Pasal 15 ayat (3) hanya menyangkut hubungan kepemilikan atau penguasaan; hubungan usaha (transaksi rutin seperti sewa bulanan) atau hubungan pekerjaan dengan pemberi tetap menggugurkan pengecualian."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 4 ayat (1) dan ayat (3) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PP 55/2022 Pasal 6 ayat (2) huruf b beserta Penjelasannya dan Pasal 7 ayat (1) (menggantikan PP 18/2009)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 114/2025 Pasal 15 ayat (2) dan ayat (3), Pasal 16 ayat (1) (mencabut PMK 90/PMK.03/2020)", berlakuSejak: "2025-12-31" }, { pasal: "PMK 90/PMK.03/2020 Pasal 4 ayat (1) (rujukan try out; dicabut PMK 114/2025 sejak 31 Desember 2025)", berlakuSejak: null }, { pasal: "ISAK 335 (eks-ISAK 35)", berlakuSejak: null }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 32, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B7-153",
      topik: "B7.5",
      tingkat: [ "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Yayasan Ortax Cerdas (yayasan pendidikan terdaftar) pada 2026 menerima: (1) hibah uang dari Ibu Sari yang tidak memiliki hubungan usaha, pekerjaan, kepemilikan, atau penguasaan dengan yayasan; (2) pendapatan pelatihan komersial terbuka untuk umum; (3) bunga deposito bank dalam negeri. Perlakuan PPh yang tepat atas ketiganya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) bukan objek pajak; (2) bukan objek pajak karena diterima yayasan; (3) bukan objek pajak", B: "(1) objek pajak dengan tarif umum; (2) bukan objek pajak; (3) dikenai PPh final", C: "(1) bukan objek pajak; (2) dikenai PPh final 0,5% dari peredaran bruto; (3) dikenai PPh final", D: "(1) bukan objek pajak; (2) objek pajak dengan tarif umum; (3) dikenai PPh final" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Harta hibahan yang diterima badan pendidikan dikecualikan dari objek pajak sepanjang tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan. Pendapatan pelatihan komersial merupakan objek pajak dengan tarif umum dan masuk penghitungan sisa lebih yayasan; sisa lebih itu baru dikecualikan bila ditanamkan kembali dalam sarana dan prasarana pendidikan paling lama 4 tahun (Pasal 4 ayat (3) huruf m). Bunga deposito dikenai PPh final.",
        jejakHitung: [],
        mengapaSalah: { A: "Status yayasan tidak membuat pendapatan komersial dan bunga deposito menjadi bukan objek pajak.", B: "Hibah kepada badan pendidikan tanpa hubungan istimewa dikecualikan dari objek pajak, sedangkan pendapatan pelatihan komersial adalah objek.", C: "Yayasan tidak termasuk Wajib Pajak badan yang dapat memakai PPh final 0,5% PP 55/2022." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 4 ayat (1), ayat (2) huruf a, ayat (3) huruf a angka 2 dan huruf m."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (1), ayat (2) huruf a, ayat (3) huruf a angka 2 dan huruf m", berlakuSejak: null },
        { pasal: "PP 55/2022 Pasal 7 ayat (1) dan Pasal 57 ayat (1) s.t.d.d. PP 20/2026", berlakuSejak: null },
        { pasal: "PP 131/2000 s.t.d.d. PP 123/2015", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 76, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-B7-01", topik: "B7.1", tipe: "angka", depan: "Batas setor PPh 21/23/26/4(2) yang dipotong sejak 2025?", belakang: "Tanggal 15 bulan berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: "tanggal 10 (PMK 242/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B7-02", topik: "B7.1", tipe: "angka", depan: "Batas lapor SPT Masa PPh (Unifikasi, 21/26)?", belakang: "Paling lama 20 hari setelah masa pajak berakhir", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B7-03", topik: "B7.1", tipe: "angka", depan: "PPN barang/jasa non-mewah sejak 2025 dijurnal sebesar?", belakang: "12% × DPP nilai lain 11/12 = 11% dari harga", dasar: "PMK 131/2024", berlakuSejak: "2025-01-01", menggantikan: "11% × harga (2022–2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B7-04", topik: "B7.1", tipe: "definisi", depan: "PPh 23 yang dipotong pelanggan dicatat sebagai?", belakang: "Aset: PPh 23 dibayar di muka (kredit pajak)", dasar: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-05", topik: "B7.1", tipe: "definisi", depan: "PPh final Pasal 4 ayat (2) yang dipotong pihak lain dicatat sebagai?", belakang: "Beban pajak final; tidak dapat dikreditkan", dasar: "Pasal 4 ayat (2) UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-06", topik: "B7.1", tipe: "pasal", depan: "Pajak Masukan atas perolehan yang tidak berhubungan langsung dengan usaha?", belakang: "Tidak dapat dikreditkan", dasar: "Pasal 9 ayat (8) huruf b UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-07", topik: "B7.1", tipe: "angka", depan: "Lama penyimpanan dokumen pembukuan (termasuk data elektronik)?", belakang: "10 tahun di Indonesia", dasar: "Pasal 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-08", topik: "B7.1", tipe: "prosedur", depan: "Perubahan metode pembukuan atau tahun buku memerlukan?", belakang: "Persetujuan Direktur Jenderal Pajak", dasar: "Pasal 28 ayat (6) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-09", topik: "B7.1", tipe: "pasal", depan: "PPh 21 yang ditanggung perusahaan (bukan tunjangan) dalam rekonsiliasi?", belakang: "Kenikmatan bagi pegawai (objek PPh 21), dapat dibiayakan seperti tunjangan PPh; tidak dikoreksi", dasar: "Pasal 2 ayat (1) PMK 66/2023; contoh I.4 Lampiran PMK 168/2023", berlakuSejak: "2023-07-01", menggantikan: "tidak dapat dikurangkan, koreksi positif (PER-16/PJ/2016; Pasal 9 ayat (1) huruf h UU PPh)", dekTambahan: [] },
    { id: "KT-B7-10", topik: "B7.2", tipe: "pasal", depan: "Siapa saja yang boleh membiayakan cadangan piutang tak tertagih?", belakang: "Bank dan penyalur kredit lain, SGU hak opsi, pembiayaan konsumen, anjak piutang", dasar: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-11", topik: "B7.2", tipe: "prosedur", depan: "Tiga syarat inti penghapusan piutang tak tertagih?", belakang: "Dibebankan komersial; daftar piutang ke DJP; PN/perjanjian/publikasi/pengakuan debitur", dasar: "Pasal 6 ayat (1) huruf h UU PPh; PMK 207/PMK.010/2015", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-12", topik: "B7.2", tipe: "pasal", depan: "Metode penilaian persediaan yang diperkenankan fiskal?", belakang: "Rata-rata atau FIFO, taat asas; LIFO dilarang", dasar: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-13", topik: "B7.2", tipe: "definisi", depan: "Penurunan nilai persediaan ke NRV menurut fiskal?", belakang: "Tidak diakui sampai dijual; koreksi positif, beda temporer", dasar: "Pasal 10 ayat (6) UU PPh; PSAK 202", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-14", topik: "B7.3", tipe: "angka", depan: "Tarif garis lurus / saldo menurun Kelompok 1–4?", belakang: "25/50%, 12,5/25%, 6,25/12,5%, 5/10%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17", menggantikan: "daftar kelompok harta PMK 96/PMK.03/2009 (tarif tidak berubah)", dekTambahan: [] },
    { id: "KT-B7-15", topik: "B7.3", tipe: "angka", depan: "Penyusutan fiskal bangunan permanen?", belakang: "Garis lurus 20 tahun (5%) atau masa manfaat sebenarnya > 20 tahun", dasar: "Pasal 11 ayat (6a) UU PPh; PMK 72/2023", berlakuSejak: "2022-01-01", menggantikan: "hanya 20 tahun (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-B7-16", topik: "B7.3", tipe: "prosedur", depan: "Kapan penyusutan fiskal dimulai?", belakang: "Bulan pengeluaran; harta dalam pengerjaan: bulan selesai", dasar: "Pasal 11 ayat (3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-17", topik: "B7.3", tipe: "angka", depan: "PPh atas selisih lebih revaluasi aktiva tetap?", belakang: "Final 10% × (nilai pasar − nilai sisa buku fiskal)", dasar: "PMK 79/PMK.03/2008", menggantikan: "tarif fasilitas sementara 3%/4%/6% PMK 191/2015 (berakhir 31 Desember 2016)", dekTambahan: [] },
    { id: "KT-B7-18", topik: "B7.3", tipe: "angka", depan: "Jeda minimum antara dua revaluasi aktiva tetap?", belakang: "5 tahun", dasar: "PMK 79/PMK.03/2008; PMK 191/PMK.010/2015", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-19", topik: "B7.3", tipe: "definisi", depan: "Perlakuan fiskal lessee pada SGU dengan hak opsi?", belakang: "Tidak menyusutkan; seluruh angsuran dibiayakan; tanpa PPh 23", dasar: "KMK 1169/KMK.01/1991; Pasal 23 ayat (4) huruf b UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-20", topik: "B7.4", tipe: "pasal", depan: "Dasar pengakuan selisih kurs untuk fiskal?", belakang: "Pembukuan taat asas sesuai SAK, termasuk belum direalisasi", dasar: "PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-21", topik: "B7.4", tipe: "definisi", depan: "Kapan imbalan pasca-kerja menjadi biaya fiskal?", belakang: "Saat dibayar ke pegawai atau ke dana pensiun disahkan OJK", dasar: "Pasal 9 ayat (1) huruf c UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-22", topik: "B7.4", tipe: "definisi", depan: "Natura/kenikmatan bagi pemberi kerja sejak TP 2022?", belakang: "Dapat dibiayakan sepanjang biaya 3M", dasar: "UU 7/2021; PP 55/2022; PMK 66/2023", berlakuSejak: "2022-01-01", menggantikan: "tidak dapat dibiayakan (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-B7-23", topik: "B7.4", tipe: "angka", depan: "Batas perbandingan utang dan modal (DER)?", belakang: "4 : 1, dari rata-rata saldo akhir bulan", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-24", topik: "B7.4", tipe: "pasal", depan: "Keuntungan pembebasan utang bagi debitur?", belakang: "Objek PPh", dasar: "Pasal 4 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-25", topik: "B7.5", tipe: "angka", depan: "Jangka penanaman kembali sisa lebih lembaga pendidikan/litbang?", belakang: "Paling lama 4 tahun sejak sisa lebih diperoleh; alokasi ke dana abadi yang memenuhi persyaratan tertentu dihitung sebagai penggunaan untuk sarana-prasarana, bukan jalur terpisah", dasar: "Pasal 4 ayat (3) huruf m UU PPh; PP 55/2022 Pasal 14 ayat (1) dan (3); PMK 68/PMK.03/2020 Pasal 4 ayat (1) dan Pasal 5 ayat (2)", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-26", topik: "B7.5", tipe: "definisi", depan: "Klasifikasi aset neto entitas nonlaba menurut ISAK 335?", belakang: "Tanpa pembatasan dan dengan pembatasan dari pemberi sumber daya", dasar: "ISAK 335 (eks-ISAK 35)", berlakuSejak: "2020-01-01", menggantikan: "terikat permanen/temporer/tidak terikat (PSAK 45)", dekTambahan: [] },
    { id: "KT-B7-27", topik: "B7.6", tipe: "angka", depan: "Jangka kompensasi kerugian fiskal umum?", belakang: "Berturut-turut sampai 5 tahun", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-28", topik: "B7.6", tipe: "angka", depan: "Fasilitas Pasal 31E?", belakang: "50% tarif atas PKP dari omzet s.d. Rp4,8 M; omzet ≤ Rp50 M", dasar: "Pasal 31E UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-29", topik: "B7.6", tipe: "prosedur", depan: "Rumus angsuran PPh 25 badan?", belakang: "(PPh terutang − PPh 21/22/23/24) / 12; bila SPT tahun lalu memuat kompensasi kerugian: PPh atas (neto tahun lalu − sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan), bukan PPh terutang setelah kompensasi", dasar: "Pasal 25 ayat (1) dan ayat (6) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-30", topik: "B7.6", tipe: "definisi", depan: "Lampiran SPT Tahunan PPh Badan untuk koreksi fiskal positif/negatif?", belakang: "Tahun Pajak 2025 ke atas (SPT Coretax): Lampiran 1 (1A sampai 1L, Rekonsiliasi Laporan Keuangan sesuai jenis usaha); Tahun Pajak sampai dengan 2024: 1771-I", dasar: "Formulir SPT 1771; PER-11/PJ/2025", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-31", topik: "B7.7", tipe: "angka", depan: "Tarif pengukuran pajak tangguhan WP badan?", belakang: "Tarif yang berlaku saat pemulihan; umumnya 22% (Tbk memenuhi syarat 19%)", dasar: "Pasal 17 ayat (1) huruf b UU PPh; PSAK 212", berlakuSejak: "2022-01-01", menggantikan: "25% (s.d. TP 2019)", dekTambahan: [] },
    { id: "KT-B7-32", topik: "B7.7", tipe: "definisi", depan: "Penyusutan fiskal > komersial menimbulkan?", belakang: "Liabilitas pajak tangguhan (beban pajak tangguhan)", dasar: "PSAK 212", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-33", topik: "B7.7", tipe: "definisi", depan: "Nomor baru PSAK 46, 14, 72, 73, 24?", belakang: "PSAK 212, 202, 115, 116, 219", dasar: "Penomoran ulang SAK IAI", berlakuSejak: "2024-01-01", menggantikan: "PSAK 46/14/72/73/24", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B7-34", topik: "B7.8", tipe: "angka", depan: "PPh final konstruksi: kecil, menengah/besar, tanpa sertifikat?", belakang: "1,75%, 2,65%, 4% dari pembayaran tanpa PPN", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21", menggantikan: "2%, 3%, 4% (PP 51/2008 jo. PP 40/2009)", dekTambahan: [] },
    { id: "KT-B7-35", topik: "B7.8", tipe: "pasal", depan: "Nilai pengalihan harta dalam merger/likuidasi pada dasarnya?", belakang: "Harga pasar, kecuali nilai buku dengan persetujuan DJP dan syarat PMK", dasar: "Pasal 10 ayat (3) UU PPh; Pasal 392 PMK 81 Tahun 2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-36", topik: "B7.8", tipe: "definisi", depan: "Sisa hasil likuidasi melebihi modal disetor?", belakang: "Dividen", dasar: "Pasal 4 ayat (1) huruf g UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-37", topik: "B7.1", tipe: "prosedur", depan: "Jurnal gaji: PPh 21 yang dipotong dari gaji pegawai dicatat di?", belakang: "Kredit Utang PPh 21; beban gaji tetap sebesar bruto", dasar: "Pasal 21 UU PPh; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-38", topik: "B7.6", tipe: "angka", depan: "Tarif PPh badan Perseroan Terbuka yang memenuhi syarat?", belakang: "19% (22% − 3%); ≥ 40% saham di BEI, ≥ 300 pihak, ≥ 183 hari", dasar: "Pasal 17 ayat (2b) UU PPh; PP 55/2022", berlakuSejak: "2022-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-39", topik: "B7.1", tipe: "angka", depan: "Batas unggah faktur pajak di Coretax?", belakang: "Tanggal 20 bulan berikutnya setelah tanggal pembuatan faktur", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: "tanggal 15 bulan berikutnya (e-Faktur lama)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B7-40", topik: "B7.1", tipe: "definisi", depan: "Kode transaksi faktur atas penyerahan kepada BUMN pemungut PPN?", belakang: "Kode 03; penyerahan kepada instansi pemerintah memakai kode 02", dasar: "PER-11/PJ/2025; Pasal 16A UU PPN", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-41", topik: "B7.1", tipe: "prosedur", depan: "Uang muka diterima sebelum penyerahan BKP — kapan PPN terutang?", belakang: "Saat uang muka diterima; faktur dibuat atas uang muka itu", dasar: "Pasal 11 ayat (2) dan Pasal 13 ayat (1a) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-42", topik: "B7.1", tipe: "pasal", depan: "PPN atas retur penjualan dikurangkan pada Masa Pajak apa?", belakang: "Masa terjadinya pengembalian BKP, bukan pembetulan masa penyerahan", dasar: "Pasal 5A ayat (1) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-43", topik: "B7.1", tipe: "pasal", depan: "PPN lebih bayar PKP biasa (bukan eksportir/penyerahan ke pemungut)?", belakang: "Dikompensasikan; restitusi hanya dapat diminta pada akhir tahun buku", dasar: "Pasal 9 ayat (4), (4a), (4b) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-44", topik: "B7.1", tipe: "definisi", depan: "PPh 22 atas pembelian BBM oleh SPBU penyalur dicatat sebagai?", belakang: "Beban PPh final (tarif 0,25% bila BBM dibeli dari Pertamina/anak usahanya); tidak dikreditkan", dasar: "Pasal 3 ayat (1) huruf c angka 1 dan Pasal 10 ayat (2) PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-45", topik: "B7.1", tipe: "definisi", depan: "Premi JKK, JKM, BPJS Kesehatan bagian pemberi kerja — bruto PPh 21 pegawai?", belakang: "Ditambahkan ke bruto (TER); iuran JHT/JP pemberi kerja tidak", dasar: "PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-46", topik: "B7.2", tipe: "pasal", depan: "Penyerahan BKP secara konsinyasi — saat terutang PPN?", belakang: "Saat diserahkan ke komisioner; pendapatan diakui saat terjual", dasar: "Pasal 1A ayat (1) huruf g UU PPN; PSAK 115", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-47", topik: "B7.2", tipe: "definisi", depan: "Persediaan rusak dimusnahkan dengan berita acara vs diturunkan ke NRV?", belakang: "Pemusnahan dapat dibiayakan; penurunan nilai NRV dikoreksi positif", dasar: "Pasal 6 ayat (1) dan Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-48", topik: "B7.3", tipe: "angka", depan: "Bangunan tidak permanen — masa manfaat dan tarif fiskal?", belakang: "10 tahun; garis lurus 10%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-49", topik: "B7.3", tipe: "angka", depan: "Aset revaluasi dialihkan sebelum masa manfaat baru berakhir — tambahan PPh?", belakang: "12% (22% − 10%) × selisih lebih revaluasi", dasar: "PMK 79/PMK.03/2008; PER-12/PJ/2009", berlakuSejak: "2020-01-01", menggantikan: "15% (25% − 10%) sebelum tarif badan turun menjadi 22%", dekTambahan: [] },
    { id: "KT-B7-50", topik: "B7.3", tipe: "definisi", depan: "Dasar penyusutan fiskal lessee setelah hak opsi SGU digunakan?", belakang: "Nilai sisa yang dibayar; tarif sesuai kelompok harta", dasar: "KMK 1169/KMK.01/1991", berlakuSejak: "1991-01-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-51", topik: "B7.3", tipe: "pasal", depan: "Penyusutan bagian gedung yang disewakan (PPh final sewa)?", belakang: "Tidak dapat dikurangkan; hanya porsi untuk penghasilan tidak final", dasar: "Pasal 4 ayat (2), Pasal 6 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-52", topik: "B7.3", tipe: "prosedur", depan: "Mulai penyusutan harta dalam pengerjaan vs harta biasa?", belakang: "Bulan selesai dikerjakan; harta biasa bulan pengeluaran", dasar: "Pasal 11 ayat (3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-53", topik: "B7.4", tipe: "angka", depan: "Tarif PPh 21 final pesangon sekaligus?", belakang: "s.d. Rp50 jt 0%; s.d. Rp100 jt 5%; s.d. Rp500 jt 15%; di atasnya 25%", dasar: "PP 68/2009", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-54", topik: "B7.4", tipe: "prosedur", depan: "Syarat biaya promosi dapat dikurangkan?", belakang: "Daftar nominatif dilampirkan pada SPT Tahunan PPh Badan", dasar: "PMK 02/PMK.03/2010", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-55", topik: "B7.4", tipe: "angka", depan: "Batas sumbangan bencana, litbang, infrastruktur sosial, pendidikan, olahraga?", belakang: "Paling banyak 5% penghasilan neto fiskal tahun sebelumnya", dasar: "Pasal 6 ayat (1) huruf i–m UU PPh; PP 93/2010", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-56", topik: "B7.4", tipe: "definisi", depan: "Biaya pinjaman yang dibatasi DER 4:1 mencakup?", belakang: "Bunga, diskonto/premium, biaya perolehan pinjaman, penjaminan, selisih kurs pinjaman valas", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-57", topik: "B7.4", tipe: "prosedur", depan: "Selisih kurs belum direalisasi yang sudah diakui tahun lalu — saat pelunasan?", belakang: "Hanya selisih kurs pelunasan terhadap kurs penutup tahun lalu", dasar: "PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-58", topik: "B7.5", tipe: "definisi", depan: "Sumbangan bersyarat di yayasan (ISAK 335) setelah syaratnya terpenuhi?", belakang: "Dilepaskan dari pembatasan; direklasifikasi ke aset neto tanpa pembatasan", dasar: "ISAK 335", berlakuSejak: "2020-01-01", menggantikan: "terikat temporer → tidak terikat (PSAK 45)", dekTambahan: [] },
    { id: "KT-B7-59", topik: "B7.5", tipe: "definisi", depan: "Laba usaha yayasan sosial (bukan pendidikan/litbang)?", belakang: "Objek PPh tarif umum dengan Pasal 31E; sisa lebih tidak dikecualikan", dasar: "Pasal 4 ayat (1), (3) huruf m, Pasal 31E UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-60", topik: "B7.5", tipe: "angka", depan: "PPh 21 atas honorarium tenaga ahli bukan pegawai yang dibayar yayasan?", belakang: "Tarif Pasal 17 × 50% penghasilan bruto; bukti potong BP21", dasar: "PMK 168/2023; PER-11/PJ/2025", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-61", topik: "B7.6", tipe: "angka", depan: "Peredaran bruto untuk menguji Pasal 31E mencakup?", belakang: "Seluruh penghasilan usaha dan luar usaha, termasuk final dan bukan objek", dasar: "SE-02/PJ/2015", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-62", topik: "B7.6", tipe: "prosedur", depan: "Angsuran PPh 25 untuk bulan-bulan sebelum SPT Tahunan disampaikan (dalam batas waktunya)?", belakang: "Sama dengan angsuran bulan terakhir tahun pajak lalu; angsuran baru mulai bulan SPT disampaikan (SPT Februari → mulai Februari), paling lambat bulan batas waktu", dasar: "Pasal 25 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-63", topik: "B7.6", tipe: "pasal", depan: "PPh 25 yang ditagih dengan STP — yang dikreditkan di SPT Tahunan?", belakang: "Hanya pokok pajak; bunga tidak dikreditkan dan dikoreksi positif", dasar: "Pasal 28 ayat (1) dan Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-64", topik: "B7.6", tipe: "angka", depan: "Denda terlambat SPT Tahunan PPh Badan?", belakang: "Rp1.000.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-65", topik: "B7.6", tipe: "prosedur", depan: "Bunga pembetulan SPT Tahunan (Pasal 8 ayat (2) KUP) dihitung sejak?", belakang: "Batas akhir penyampaian SPT sampai tanggal bayar; maksimal 24 bulan", dasar: "Pasal 8 ayat (2) UU KUP; KMK tarif bunga bulanan", berlakuSejak: "2020-11-02", menggantikan: "2% per bulan (sebelum UU Cipta Kerja)", dekTambahan: [] },
    { id: "KT-B7-66", topik: "B7.7", tipe: "definisi", depan: "Pajak tangguhan atas pengukuran kembali imbalan kerja (OCI)?", belakang: "Diakui di penghasilan komprehensif lain, bukan laba rugi", dasar: "PSAK 212; PSAK 219", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-67", topik: "B7.7", tipe: "prosedur", depan: "Rugi fiskal hangus setelah 5 tahun — dampak aset pajak tangguhan?", belakang: "Bagian yang hangus dihapus dan menambah beban pajak tangguhan", dasar: "Pasal 6 ayat (2) UU PPh; PSAK 212", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-68", topik: "B7.8", tipe: "pasal", depan: "Saat terutang PPh 26 atas dividen ke luar negeri?", belakang: "Saat dibayarkan, disediakan untuk dibayarkan (RUPS), atau jatuh tempo — mana lebih dulu", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-69", topik: "B7.8", tipe: "pasal", depan: "Pengalihan BKP dalam penggabungan usaha antar-PKP — PPN?", belakang: "Bukan penyerahan BKP; tidak terutang PPN", dasar: "Pasal 1A ayat (2) huruf d UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-70", topik: "B7.8", tipe: "definisi", depan: "Merger dengan nilai buku — sisa rugi fiskal pihak yang menggabungkan diri?", belakang: "Tidak dapat dikompensasikan oleh pihak penerima", dasar: "Pasal 402 ayat (1) PMK 81/2024 (dahulu PMK 52/PMK.010/2017)", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-71", topik: "B7.8", tipe: "angka", depan: "Dasar PPh final jasa konstruksi bila ada uang muka dan retensi?", belakang: "Pembayaran diterima tanpa PPN, termasuk uang muka; retensi saat dibayar", dasar: "PP 9/2022", berlakuSejak: "2022-02-21", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-72", topik: "B7.4", tipe: "definisi", depan: "Nomor PSAK baru untuk Pengaruh Perubahan Kurs Valuta Asing?", belakang: "PSAK 221 (eks-PSAK 10)", dasar: "Penomoran ulang SAK oleh DSAK IAI", berlakuSejak: "2024-01-01", menggantikan: "PSAK 10", dekTambahan: [] },
    { id: "KT-B7-73", topik: "B7.4", tipe: "prosedur", depan: "Kurs untuk pengakuan awal transaksi valas di pembukuan?", belakang: "Kurs spot tanggal transaksi (praktik: kurs tengah BI)", dasar: "PSAK 221", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-74", topik: "B7.4", tipe: "prosedur", depan: "Pos moneter valas pada tanggal neraca dijabarkan dengan kurs?", belakang: "Kurs penutup (kurs tengah BI tanggal neraca), bukan kurs KMK", dasar: "PSAK 221; PP 94/2010 Pasal 9", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-75", topik: "B7.4", tipe: "definisi", depan: "Uang muka nonrefundable, persediaan, aset tetap dalam USD pada akhir tahun?", belakang: "Pos nonmoneter: tetap kurs historis, tidak menimbulkan selisih kurs", dasar: "PSAK 221", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-76", topik: "B7.4", tipe: "pasal", depan: "Dasar UU PPh untuk laba dan rugi selisih kurs?", belakang: "Laba: Pasal 4 ayat (1) huruf l; rugi: Pasal 6 ayat (1) huruf e", dasar: "UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-77", topik: "B7.4", tipe: "prosedur", depan: "Rugi selisih kurs belum direalisasi sesuai SAK — rekonsiliasi fiskal dan pajak tangguhan?", belakang: "Tidak dikoreksi; bukan beda temporer, tidak ada pajak tangguhan", dasar: "PP 94/2010 Pasal 9; PSAK 212", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-78", topik: "B7.4", tipe: "prosedur", depan: "Kurs tetap (budget rate) sepanjang tahun — perlakuan pada tanggal neraca?", belakang: "Pos moneter tetap dijabarkan kurs penutup; selisih diakui tahun itu", dasar: "PSAK 221; PP 94/2010 Pasal 9", berlakuSejak: "2024-01-01", menggantikan: "diakui saat realisasi (perlakuan lama pemakai kurs tetap, SE-03/PJ.31/1997)", dekTambahan: [] },
    { id: "KT-B7-79", topik: "B7.8", tipe: "angka", depan: "Kurs untuk DPP PPh 26/23 atas imbalan dalam USD?", belakang: "Kurs KMK yang berlaku saat PPh terutang, bukan saat setor", dasar: "Pasal 26 UU PPh; KMK kurs mingguan", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-80", topik: "B7.8", tipe: "prosedur", depan: "Jurnal pembayaran jasa USD dengan PPh 26 — dari mana selisih kurs muncul?", belakang: "Utang PPh 26 kurs KMK vs bagian USD dipotong kurs buku", dasar: "PSAK 221; Pasal 26 UU PPh", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-81", topik: "B7.8", tipe: "prosedur", depan: "Selisih kurs saat menyetor Utang PPh 26 yang dicatat benar?", belakang: "Nihil; jumlah Rupiah sudah tetap sejak saat terutang", dasar: "Pasal 26 UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-82", topik: "B7.8", tipe: "angka", depan: "Impor: kurs untuk bea masuk, PPN impor, PPh 22 impor vs harga barang?", belakang: "Pungutan: kurs KMK saat PIB; harga barang/utang: kurs transaksi", dasar: "KMK kurs mingguan; PSAK 202; PSAK 221", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-83", topik: "B7.1", tipe: "prosedur", depan: "PPN pada faktur USD yang ditagih dalam USD — jurnal penjualan?", belakang: "PPN Keluaran kurs KMK saat faktur seharusnya dibuat; piutang kurs buku; selisih = selisih kurs", dasar: "PP 44/2022 Pasal 21; PMK 131/2024; PSAK 221", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-84", topik: "B7.8", tipe: "pasal", depan: "Pembukuan bahasa Inggris dan USD — syarat dan SPT Badan?", belakang: "Izin lebih dulu; SPT Badan dalam USD (berbahasa Indonesia, kecuali laporan keuangan); PPh 25/29 dalam USD; PPh potong/pungut tetap Rupiah", dasar: "Pasal 28 ayat (8) UU KUP; Pasal 4 PMK 196/PMK.03/2007; Pasal 106 dan Pasal 161 ayat (2) PMK 81 Tahun 2024", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-85", topik: "B7.1", tipe: "definisi", depan: "Pajak luar negeri atas penghasilan LN yang diterima dicatat sebagai?", belakang: "Aset PPh Pasal 24 dibayar di muka; pendapatan dicatat bruto", dasar: "Pasal 24 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-86", topik: "B7.1", tipe: "prosedur", depan: "Kelebihan pajak LN di atas batas kredit Pasal 24: jurnal dan fiskalnya?", belakang: "Dibebankan; tidak dapat dikurangkan, dikompensasikan, atau direstitusi", dasar: "Pasal 9 ayat (1) huruf h dan Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-87", topik: "B7.8", tipe: "pasal", depan: "Goodwill (muhibah) secara fiskal?", belakang: "Dibeli dalam akuisisi aset: diamortisasi Ps. 11A; goodwill konsolidasian: tidak", dasar: "Pasal 11A ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-88", topik: "B7.8", tipe: "definisi", depan: "Laporan keuangan konsolidasian sebagai dasar SPT Tahunan?", belakang: "Tidak; tanpa pajak grup, SPT disusun per entitas", dasar: "UU PPh (subjek pajak per badan); Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-89", topik: "B7.8", tipe: "pasal", depan: "Cadangan lembaga keuangan non-bank yang boleh dibiayakan?", belakang: "Cadangan teknis asuransi; cadangan piutang SGU hak opsi, pembiayaan konsumen, anjak piutang", dasar: "Pasal 9 ayat (1) huruf c UU PPh; PMK 74 Tahun 2024 (cadangan piutang); PMK 81/PMK.03/2009 Pasal 12 sampai Pasal 14 (asuransi)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-90", topik: "B7.8", tipe: "pasal", depan: "Royalti ke LN jatuh tempo sebelum dibayar: kapan PPh 26 terutang?", belakang: "Saat paling awal: dibayar, disediakan, atau jatuh tempo; kurs KMK saat itu", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-91", topik: "B7.4", tipe: "prosedur", depan: "Utang royalti valas neto PPh 26 di tanggal neraca: apa yang dijabarkan?", belakang: "Hanya utang valas neto (kurs tengah BI); Utang PPh 26 tetap Rupiah", dasar: "PSAK 221; Pasal 26 UU PPh", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-92", topik: "B7.4", tipe: "pasal", depan: "Selisih kurs pos yang terkait penghasilan final atau bukan objek?", belakang: "Tidak diakui fiskal; dikoreksi", dasar: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-93", topik: "B7.8", tipe: "angka", depan: "DPP PPh 26 bila kontrak gross-up (penerima minta neto)?", belakang: "Neto ÷ (1 − tarif); PPh bagian imbalan, dapat dibiayakan", dasar: "Pasal 26 ayat (1) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-94", topik: "B7.7", tipe: "definisi", depan: "Tarif PPh badan diubah undang-undang: saldo pajak tangguhan?", belakang: "Diukur ulang sejak tarif diundangkan; selisih ke laba rugi, kecuali pos OCI", dasar: "PSAK 212", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-95", topik: "B7.5", tipe: "definisi", depan: "Siapa yang dapat mengecualikan sisa lebih yang ditanamkan kembali?", belakang: "Nirlaba pendidikan/litbang terdaftar (huruf m); PT dan koperasi bukan nirlaba", dasar: "Pasal 4 ayat (3) huruf m UU PPh s.t.d.t.d. UU 7/2021", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-96", topik: "B7.2", tipe: "prosedur", depan: "Persediaan yang diturunkan ke NRV lalu terjual sebagian: koreksi fiskal?", belakang: "Koreksi negatif sebesar penurunan atas unit terjual; aset pajak tangguhan berkurang", dasar: "Pasal 10 ayat (6) UU PPh; PSAK 202", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-97", topik: "B7.2", tipe: "prosedur", depan: "Penghapusan piutang tanpa syarat Ps. 6(1)h, didebit ke penyisihan?", belakang: "Bukan biaya fiskal; tetap beda temporer (aset pajak tangguhan)", dasar: "Pasal 6 ayat (1) huruf h UU PPh; PSAK 212", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-98", topik: "B7.8", tipe: "prosedur", depan: "Aset impor dengan uang muka USD nonrefundable: kurs harga perolehannya?", belakang: "Uang muka: kurs saat dibayar; sisa: kurs saat aset diakui", dasar: "PSAK 221 dan interpretasi imbalan di muka; Pasal 10 ayat (1) UU PPh", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-99", topik: "B7.8", tipe: "prosedur", depan: "Uang muka penjualan USD diterima sebelum penyerahan: kurs pendapatannya?", belakang: "Porsi uang muka: kurs saat diterima; sisa: kurs saat kendali beralih", dasar: "PSAK 221; PSAK 115", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-100", topik: "B7.4", tipe: "definisi", depan: "Rugi penjabaran provisi valas yang pembentukannya tidak dapat dikurangkan?", belakang: "Ikut dikoreksi positif; menambah beda temporer (aset pajak tangguhan) ◐", dasar: "Pasal 9 ayat (1) huruf c UU PPh; PSAK 212", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-101", topik: "B7.4", tipe: "pasal", depan: "Rugi kurs penyewa saat membayar sewa bangunan USD dengan PPh 4(2)?", belakang: "Dapat dikurangkan; penghasilan final milik pemilik bangunan, bukan penyewa", dasar: "PP 94/2010 Pasal 9 ayat (2); Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2010-12-30", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-102", topik: "B7.8", tipe: "pasal", depan: "Pembukuan USD: kredit PPh 23 yang dipotong dalam Rupiah?", belakang: "Dikreditkan setelah dikonversi ke USD dengan kurs KMK saat pemotongan", dasar: "Pasal 8 ayat (2) PMK 196/PMK.03/2007", berlakuSejak: "2007-12-28", menggantikan: null, dekTambahan: [] },
    { id: "KT-B7-103", topik: "B7.8", tipe: "prosedur", depan: "Persediaan impor: kurs untuk harga barangnya?", belakang: "Kurs spot saat kendali beralih; bukan kurs KMK PIB atau kurs pelunasan", dasar: "PSAK 202; PSAK 221", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-B7-01", judul: "Dari laba komersial ke PPh 29 dan pajak tangguhan", topik: "B7.6", estimasiMenit: 20,
      narasi: "PT Arunika Pangan Nusantara (produsen makanan kemasan, tahun buku kalender, peredaran bruto 2025 Rp86 miliar sehingga tidak berhak Pasal 31E) melaporkan laba sebelum pajak 2025 Rp3.200.000.000. Penelaahan buku besar menunjukkan: beban penyisihan piutang Rp120.000.000, sementara piutang yang dihapus selama 2025 dan memenuhi syarat Pasal 6 ayat (1) huruf h Rp30.000.000 (didebit ke akun penyisihan); beban imbalan pasca-kerja PSAK 219 Rp180.000.000 dengan pembayaran manfaat kepada pegawai Rp40.000.000; penyusutan komersial Rp640.000.000 sedangkan penyusutan fiskal menurut PMK 72/2023 Rp700.000.000; biaya jamuan tanpa daftar nominatif Rp35.000.000; sanksi bunga STP Rp18.000.000; kekurangan PPh badan Tahun Pajak 2024 (hasil pembetulan SPT) yang dicatat sebagai beban lain-lain Rp27.000.000; pendapatan bunga deposito Rp90.000.000 yang telah dipotong PPh final; dan dividen dari PT dalam negeri Rp150.000.000. Tidak ada sisa kerugian fiskal. Kredit pajak 2025: PPh 22 Rp95.000.000, PPh 23 Rp41.200.000, dan PPh 25 Rp45.000.000 per bulan selama 12 bulan. Tidak ada saldo pajak tangguhan awal.",
      data: [["Laba sebelum pajak", "Rp3.200.000.000"], ["Penyisihan piutang / hapus memenuhi syarat", "Rp120.000.000 / Rp30.000.000"], ["Imbalan kerja: beban / dibayar", "Rp180.000.000 / Rp40.000.000"], ["Penyusutan komersial / fiskal", "Rp640.000.000 / Rp700.000.000"], ["Jamuan tanpa daftar nominatif", "Rp35.000.000"], ["Sanksi bunga STP", "Rp18.000.000"], ["PPh badan TP 2024 dibebankan", "Rp27.000.000"], ["Bunga deposito (final)", "Rp90.000.000"], ["Dividen PT dalam negeri", "Rp150.000.000"], ["Kredit: PPh 22 / PPh 23 / PPh 25", "Rp95.000.000 / Rp41.200.000 / 12 × Rp45.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa total koreksi fiskal positif (Rp)?", tipe: "angka", jawaban: 310000000, toleransi: 0,
          petunjuk: ["Koreksi positif = biaya komersial yang tidak atau belum boleh dibiayakan", "Penyisihan neto 120 − 30 = 90 juta; imbalan kerja 180 − 40 = 140 juta; tambah jamuan, sanksi, dan PPh badan yang dibebankan", "Jawaban: 90 + 140 + 35 + 18 + 27 = Rp310.000.000"],
          penjelasan: "Penyisihan dan imbalan kerja adalah beda temporer (Pasal 9 ayat (1) huruf c); jamuan tanpa daftar nominatif, sanksi (huruf k), dan PPh badan yang dibebankan (huruf h) adalah beda tetap." },
        { no: 2, pertanyaan: "Berapa total koreksi fiskal negatif (Rp)?", tipe: "angka", jawaban: 300000000, toleransi: 0,
          petunjuk: ["Koreksi negatif = penghasilan final/bukan objek dan biaya fiskal yang lebih besar dari komersial", "Penyusutan 700 − 640 = 60 juta; bunga deposito 90 juta; dividen 150 juta", "Jawaban: Rp300.000.000"],
          penjelasan: "Bunga deposito final (Pasal 4 ayat (2)) dan dividen dalam negeri bukan objek (Pasal 4 ayat (3) huruf f) dikeluarkan; selisih penyusutan beda temporer." },
        { no: 3, pertanyaan: "Berapa PKP 2025 (Rp)?", tipe: "angka", jawaban: 3210000000, toleransi: 0,
          petunjuk: ["Laba komersial + koreksi positif − koreksi negatif − kompensasi rugi", "3.200 + 310 − 300 (juta); tidak ada rugi", "Jawaban: Rp3.210.000.000"],
          penjelasan: "PKP dibulatkan ke ribuan penuh ke bawah; angka ini sudah bulat." },
        { no: 4, pertanyaan: "Berapa PPh badan terutang (Rp)?", tipe: "angka", jawaban: 706200000, toleransi: 0,
          petunjuk: ["Omzet > Rp50 miliar: tanpa Pasal 31E", "Tarif 22% (Pasal 17 ayat (1) huruf b)", "Jawaban: 22% × 3.210.000.000 = Rp706.200.000"],
          penjelasan: "Pasal 31E hanya untuk peredaran bruto s.d. Rp50 miliar." },
        { no: 5, pertanyaan: "Berapa PPh Pasal 29 yang harus dilunasi sebelum SPT disampaikan (Rp)?", tipe: "angka", jawaban: 30000000, toleransi: 0,
          petunjuk: ["Kredit pajak: PPh 22 + PPh 23 + PPh 25 setahun; PPh final tidak dikreditkan", "95.000.000 + 41.200.000 + 540.000.000 = 676.200.000", "Jawaban: 706.200.000 − 676.200.000 = Rp30.000.000"],
          penjelasan: "PPh final atas bunga deposito tidak dapat dikreditkan; PPh 29 dilunasi paling lambat sebelum SPT disampaikan (akhir April 2026)." },
        { no: 6, pertanyaan: "Jurnal pajak tangguhan neto 2025 yang tepat?", tipe: "pilihan",
          opsi: { A: "Dr Aset pajak tangguhan Rp50.600.000; Cr Manfaat pajak tangguhan Rp50.600.000", B: "Dr Beban pajak tangguhan Rp37.400.000; Cr Liabilitas pajak tangguhan Rp37.400.000", C: "Dr Aset pajak tangguhan Rp37.400.000; Cr Manfaat pajak tangguhan Rp37.400.000", D: "Dr Aset pajak tangguhan Rp68.200.000; Cr Manfaat pajak tangguhan Rp68.200.000" }, jawaban: "C",
          petunjuk: ["Ambil hanya beda temporer: penyisihan +90, imbalan kerja +140, penyusutan −60 (juta)", "Neto beda temporer dapat dikurangkan = 170 juta", "Jawaban: 22% × 170.000.000 = Rp37.400.000 aset pajak tangguhan (C)"],
          penjelasan: "A mengabaikan liabilitas dari penyusutan (22% × 230 juta); D ikut memasukkan beda tetap (22% × 310 juta); B membalik arah." }
      ],
      kesimpulan: "Koreksi positif Rp310 juta dan negatif Rp300 juta menghasilkan PKP Rp3,21 miliar dan PPh terutang Rp706,2 juta; setelah kredit Rp676,2 juta, PPh 29 Rp30 juta. Beda temporer neto Rp170 juta menimbulkan aset pajak tangguhan Rp37,4 juta, sehingga beban pajak penghasilan di laba rugi Rp668,8 juta (= 22% × (3.200 + 80 beda tetap − 240 penghasilan final/bukan objek) juta).",
      kalkulatorRef: "pph-badan"
    },
    {
      id: "K-B7-02", judul: "Penyusutan komersial vs fiskal dan liabilitas pajak tangguhan", topik: "B7.3", estimasiMenit: 15,
      narasi: "PT Rajawali Cetak Mandiri (percetakan, peredaran bruto Rp58 miliar) membeli mesin cetak offset seharga Rp1.600.000.000 dan memakainya sejak 1 Juli 2025. Menurut Lampiran PMK 72/2023 mesin termasuk Kelompok 3; untuk fiskal perusahaan memilih metode saldo menurun secara taat asas. Secara komersial mesin disusutkan garis lurus 10 tahun tanpa nilai sisa. Tidak ada aset lain yang menimbulkan beda temporer dan tidak ada saldo pajak tangguhan awal. Tarif PPh badan 22%.",
      data: [["Harga perolehan", "Rp1.600.000.000"], ["Mulai dipakai", "1 Juli 2025"], ["Kelompok fiskal", "Kelompok 3 (16 tahun)"], ["Metode fiskal", "Saldo menurun"], ["Komersial", "Garis lurus 10 tahun, tanpa nilai sisa"], ["Tarif PPh badan", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Tarif saldo menurun untuk Kelompok 3?", tipe: "pilihan", opsi: { A: "6,25%", B: "12,5%", C: "25%", D: "10%" }, jawaban: "B",
          petunjuk: ["Kelompok 3 bermasa manfaat 16 tahun", "Tarif saldo menurun = 2 × tarif garis lurus (6,25%)", "Jawaban: 12,5% (B)"],
          penjelasan: "Pasal 11 ayat (6) UU PPh: Kelompok 3 garis lurus 6,25%, saldo menurun 12,5%." },
        { no: 2, pertanyaan: "Penyusutan fiskal Tahun Pajak 2025 (Rp)?", tipe: "angka", jawaban: 100000000, toleransi: 0,
          petunjuk: ["Mulai bulan pengeluaran: Juli–Desember = 6 bulan", "1.600.000.000 × 12,5% × 6/12", "Jawaban: Rp100.000.000"],
          penjelasan: "Tahun pertama dihitung pro rata bulan sejak bulan pengeluaran (Pasal 11 ayat (3))." },
        { no: 3, pertanyaan: "Besarnya koreksi fiskal negatif 2025 (Rp)?", tipe: "angka", jawaban: 20000000, toleransi: 0,
          petunjuk: ["Komersial 2025 = 1.600.000.000 / 10 × 6/12", "Komersial Rp80.000.000; fiskal Rp100.000.000", "Jawaban: 100.000.000 − 80.000.000 = Rp20.000.000 (negatif)"],
          penjelasan: "Biaya fiskal lebih besar dari biaya komersial → koreksi negatif, beda temporer kena pajak." },
        { no: 4, pertanyaan: "Penyusutan fiskal Tahun Pajak 2026 (Rp)?", tipe: "angka", jawaban: 187500000, toleransi: 0,
          petunjuk: ["Saldo menurun dihitung dari nilai sisa buku awal tahun", "NSB awal 2026 = 1.600.000.000 − 100.000.000 = 1.500.000.000", "Jawaban: 12,5% × 1.500.000.000 = Rp187.500.000"],
          penjelasan: "Tahun kedua setahun penuh atas nilai sisa buku fiskal." },
        { no: 5, pertanyaan: "Saldo liabilitas pajak tangguhan pada 31 Desember 2026 (Rp)?", tipe: "angka", jawaban: 10450000, toleransi: 0,
          petunjuk: ["Bandingkan jumlah tercatat komersial dan nilai sisa buku fiskal akhir 2026", "Komersial 1.600 − 80 − 160 = 1.360 juta; fiskal 1.600 − 100 − 187,5 = 1.312,5 juta; selisih 47,5 juta", "Jawaban: 22% × 47.500.000 = Rp10.450.000"],
          penjelasan: "Saldo akhir 2025 Rp4.400.000 (22% × 20 juta) bertambah Rp6.050.000 pada 2026 (22% × 27,5 juta)." }
      ],
      kesimpulan: "Saldo menurun Kelompok 3 (12,5%) membebankan Rp100 juta (2025) dan Rp187,5 juta (2026) dibanding komersial Rp80 juta dan Rp160 juta. Akumulasi beda temporer kena pajak Rp47,5 juta menghasilkan liabilitas pajak tangguhan Rp10,45 juta per akhir 2026; beda ini berbalik di sisa umur mesin atau saat dijual.",
      kalkulatorRef: "penyusutan"
    },
    {
      id: "K-B7-03", judul: "Satu masa pajak: jurnal PPN, PPh 23, PPh 4 ayat (2), dan tenggatnya", topik: "B7.1", estimasiMenit: 15,
      narasi: "PT Kencana Furnindo (PKP, produsen mebel, pemotong PPh) mencatat transaksi Masa Pajak Maret 2026: (1) penjualan mebel (bukan barang mewah) kepada distributor PT Lestari Interior (bukan pemungut PPN) Rp900.000.000; (2) pembelian kayu olahan dari PKP Rp420.000.000 dengan faktur DPP nilai lain 11/12; (3) jasa perawatan mesin dari PT Teknika Servis (PKP, ber-NPWP) Rp50.000.000 dengan faktur DPP nilai lain 11/12; (4) sewa gudang dari Tuan Hadi (orang pribadi bukan PKP) untuk 12 bulan sejak 1 Maret 2026 Rp60.000.000 dibayar sekaligus; (5) PPh 21 pegawai Masa Maret 2026 hasil penghitungan TER Rp14.500.000. Tidak ada lebih bayar PPN masa sebelumnya.",
      data: [["Penjualan non-mewah", "Rp900.000.000"], ["Pembelian kayu (PKP)", "Rp420.000.000"], ["Jasa perawatan mesin (PKP)", "Rp50.000.000"], ["Sewa gudang dari OP non-PKP", "Rp60.000.000 (12 bulan)"], ["PPh 21 Masa Maret 2026", "Rp14.500.000"], ["Tarif PPN", "12% × DPP nilai lain 11/12"]],
      langkah: [
        { no: 1, pertanyaan: "PPN Keluaran Masa Maret 2026 (Rp)?", tipe: "angka", jawaban: 99000000, toleransi: 0,
          petunjuk: ["Barang non-mewah: DPP nilai lain 11/12", "12% × 11/12 × 900.000.000", "Jawaban: Rp99.000.000"],
          penjelasan: "PMK 131/2024: beban efektif 11% dari harga jual." },
        { no: 2, pertanyaan: "PPN Masukan yang dapat dikreditkan (Rp)?", tipe: "angka", jawaban: 51700000, toleransi: 0,
          petunjuk: ["Kayu dan jasa perawatan sama-sama berhubungan langsung dengan usaha", "11% × 420.000.000 = 46.200.000; 11% × 50.000.000 = 5.500.000; sewa dari non-PKP tanpa PPN", "Jawaban: Rp51.700.000"],
          penjelasan: "Tuan Hadi bukan PKP sehingga tidak ada faktur/PPN atas sewa." },
        { no: 3, pertanyaan: "PPN kurang bayar yang dicatat sebagai Utang PPN (Rp)?", tipe: "angka", jawaban: 47300000, toleransi: 0,
          petunjuk: ["PK − PM", "99.000.000 − 51.700.000", "Jawaban: Rp47.300.000"],
          penjelasan: "Jurnal: Dr PPN Keluaran 99.000.000; Cr PPN Masukan 51.700.000; Cr Utang PPN 47.300.000." },
        { no: 4, pertanyaan: "Total PPh yang dipotong PT Kencana dan wajib disetor untuk Masa Maret 2026 (PPh 21 + PPh 23 + PPh 4(2)) (Rp)?", tipe: "angka", jawaban: 21500000, toleransi: 0,
          petunjuk: ["PPh 23 jasa perawatan mesin 2% dari bruto tanpa PPN; sewa bangunan PPh final 10%", "PPh 23 = 1.000.000; PPh 4(2) = 6.000.000; PPh 21 = 14.500.000", "Jawaban: Rp21.500.000"],
          penjelasan: "Perawatan mesin termasuk jasa lain PMK 141/2015 (2%); sewa gudang adalah sewa bangunan (PPh final 10% atas seluruh pembayaran)." },
        { no: 5, pertanyaan: "Jurnal pembayaran sewa gudang yang tepat?", tipe: "pilihan",
          opsi: { A: "Dr Sewa dibayar di muka 60.000.000; Dr PPN Masukan 6.600.000; Cr Kas 66.600.000", B: "Dr Beban sewa 60.000.000; Cr Kas 58.800.000; Cr Utang PPh 23 1.200.000", C: "Dr Sewa dibayar di muka 54.000.000; Cr Kas 54.000.000", D: "Dr Sewa dibayar di muka 60.000.000; Cr Kas 54.000.000; Cr Utang PPh 4(2) 6.000.000" }, jawaban: "D",
          petunjuk: ["Sewa 12 bulan dibayar di muka: aset, dibebankan per bulan", "Pemotongan PPh final 10% atas sewa bangunan", "Jawaban: D"],
          penjelasan: "B salah pasal (PPh 23 2%) dan membebankan sekaligus; C tidak mencatat utang PPh; A menganggap ada PPN padahal pemilik bukan PKP." },
        { no: 6, pertanyaan: "Tenggat penyelesaian kewajiban Masa Maret 2026 yang benar?", tipe: "pilihan",
          opsi: { A: "Setor PPh 10 April 2026; lapor SPT Masa PPh 20 April 2026; SPT Masa PPN 30 April 2026", B: "Setor PPh 15 April 2026; lapor SPT Masa PPh 20 April 2026; SPT Masa PPN 30 April 2026 dengan PPN disetor sebelum lapor", C: "Setor PPh dan PPN 15 April 2026; semua SPT Masa 20 April 2026", D: "Setor PPh 15 April 2026; SPT Masa PPh dan SPT Masa PPN 30 April 2026" }, jawaban: "B",
          petunjuk: ["PMK 81/2024 menyeragamkan setor tanggal 15", "SPT Masa PPh 20 hari setelah masa; SPT Masa PPN akhir bulan berikutnya", "Jawaban: B"],
          penjelasan: "Tanggal 10 adalah ketentuan lama; SPT Masa PPh tidak berbatas akhir bulan." }
      ],
      kesimpulan: "Masa Maret 2026 menghasilkan Utang PPN Rp47,3 juta (PK Rp99 juta − PM Rp51,7 juta) dan utang PPh yang dipotong Rp21,5 juta (PPh 21 Rp14,5 juta, PPh 23 Rp1 juta, PPh 4(2) Rp6 juta). PPh disetor 15 April dan dilaporkan 20 April 2026; PPN disetor sebelum SPT Masa PPN disampaikan paling lambat 30 April 2026.",
      kalkulatorRef: "ppn"
    },
    {
      id: "K-B7-04", judul: "Siklus gaji satu masa: TER, iuran BPJS, jurnal, setor, dan lapor", topik: "B7.1", estimasiMenit: 18,
      narasi: "PT Wira Pangan Lestari (produsen makanan beku; pemberi kerja; tahun buku kalender) menetapkan daftar gaji Masa Pajak Juni 2026 pada 30 Juni 2026 untuk 42 pegawai tetap yang sejak awal tahun berstatus PTKP TK/0 atau K/0 (kategori TER A). Rincian per orang: 30 operator dengan gaji dan tunjangan Rp5.100.000 serta premi JKK, JKM, dan BPJS Kesehatan yang dibayar pemberi kerja Rp230.000; 10 staf dengan gaji dan tunjangan Rp10.500.000 serta premi pemberi kerja Rp480.000; dan 2 manajer dengan gaji dan tunjangan Rp24.400.000 serta premi pemberi kerja Rp600.000. Iuran JHT dan JP bagian pemberi kerja seluruhnya Rp17.400.000, sedangkan iuran bagian pegawai (JHT, JP, BPJS Kesehatan) yang dipotong dari gaji seluruhnya Rp12.150.000. Gaji neto ditransfer pada 1 Juli 2026; PPh 21 dan iuran BPJS disetor kemudian. Cuplikan lampiran tabel TER kategori A: bruto sampai dengan Rp5.400.000 = 0%; di atas Rp10.700.000 sampai dengan Rp11.050.000 = 3%; di atas Rp24.150.000 sampai dengan Rp26.450.000 = 10%.",
      data: [["Pegawai tetap (kategori TER A)", "42 orang"], ["Operator (30): gaji+tunjangan / premi pemberi kerja", "Rp5.100.000 / Rp230.000"], ["Staf (10): gaji+tunjangan / premi pemberi kerja", "Rp10.500.000 / Rp480.000"], ["Manajer (2): gaji+tunjangan / premi pemberi kerja", "Rp24.400.000 / Rp600.000"], ["Iuran JHT dan JP bagian pemberi kerja", "Rp17.400.000"], ["Iuran bagian pegawai dipotong", "Rp12.150.000"], ["TER A: ≤ 5,4 jt · 10,7–11,05 jt · 24,15–26,45 jt", "0% · 3% · 10%"], ["Daftar gaji / transfer gaji", "30 Juni 2026 / 1 Juli 2026"]],
      langkah: [
        { no: 1, pertanyaan: "Dasar dan tarif TER untuk seorang staf?", tipe: "pilihan",
          opsi: { A: "Kategori A, 3% × Rp10.980.000", B: "Kategori A, 3% × Rp10.500.000 (premi bukan bruto)", C: "Kategori A, 2,5% × Rp10.980.000", D: "Kategori B, 3% × Rp10.980.000" }, jawaban: "A",
          petunjuk: ["Bruto TER = gaji dan tunjangan + premi JKK/JKM/BPJS Kesehatan yang dibayar pemberi kerja", "10.500.000 + 480.000 = 10.980.000, masuk lapisan di atas 10.700.000 sampai 11.050.000", "Jawaban: A (3% × Rp10.980.000 = Rp329.400)"],
          penjelasan: "PMK 168/2023: premi asuransi kecelakaan kerja, kematian, dan kesehatan yang dibayar pemberi kerja menambah penghasilan bruto; TK/0 dan K/0 termasuk kategori A. Iuran JHT/JP pemberi kerja tidak menambah bruto." },
        { no: 2, pertanyaan: "Total PPh 21 Masa Juni 2026 (Rp)?", tipe: "angka", jawaban: 8294000, toleransi: 0,
          petunjuk: ["Operator: 5.100.000 + 230.000 = 5.330.000 ≤ 5.400.000 → 0%", "Staf: 10 × 3% × 10.980.000 = 3.294.000; manajer: 2 × 10% × 25.000.000 = 5.000.000", "Jawaban: Rp8.294.000"],
          penjelasan: "TER dikalikan bruto sebulan setiap pegawai; lapisan ditentukan per orang, bukan dari total gaji." },
        { no: 3, pertanyaan: "Utang gaji (gaji neto yang ditransfer 1 Juli 2026) (Rp)?", tipe: "angka", jawaban: 286356000, toleransi: 0,
          petunjuk: ["Gaji neto = gaji dan tunjangan − PPh 21 − iuran bagian pegawai", "Gaji dan tunjangan = 153.000.000 + 105.000.000 + 48.800.000 = 306.800.000", "Jawaban: 306.800.000 − 8.294.000 − 12.150.000 = Rp286.356.000"],
          penjelasan: "Premi dan iuran bagian pemberi kerja dibayarkan ke BPJS, bukan kepada pegawai, sehingga tidak mempengaruhi gaji neto." },
        { no: 4, pertanyaan: "Total Utang iuran BPJS pada jurnal 30 Juni 2026 (Rp)?", tipe: "angka", jawaban: 42450000, toleransi: 0,
          petunjuk: ["Utang iuran = bagian pegawai yang dipotong + seluruh bagian pemberi kerja", "Premi pemberi kerja = 6.900.000 + 4.800.000 + 1.200.000 = 12.900.000; JHT/JP pemberi kerja 17.400.000", "Jawaban: 12.150.000 + 12.900.000 + 17.400.000 = Rp42.450.000"],
          penjelasan: "Bagian pemberi kerja menjadi beban iuran; bagian pegawai mengurangi gaji neto. Keduanya disetor ke BPJS." },
        { no: 5, pertanyaan: "Jurnal 30 Juni 2026 yang tepat?", tipe: "pilihan",
          opsi: { A: "Dr Beban gaji 306.800.000; Dr Beban iuran BPJS 30.300.000; Cr Utang PPh 21 8.294.000; Cr Utang iuran BPJS 42.450.000; Cr Utang gaji 286.356.000", B: "Dr Beban gaji 298.506.000; Dr Beban iuran BPJS 30.300.000; Cr Utang iuran BPJS 42.450.000; Cr Utang gaji 286.356.000", C: "Dr Beban gaji 306.800.000; Dr Beban PPh 21 8.294.000; Dr Beban iuran BPJS 30.300.000; Cr Utang PPh 21 8.294.000; Cr Utang iuran BPJS 42.450.000; Cr Utang gaji 294.650.000", D: "Dr Beban gaji 319.700.000; Cr Utang PPh 21 8.294.000; Cr Utang iuran BPJS 25.050.000; Cr Utang gaji 286.356.000" }, jawaban: "A",
          petunjuk: ["Beban gaji dicatat sebesar gaji dan tunjangan bruto; PPh 21 yang dipotong bukan beban perusahaan", "Beban iuran = premi 12.900.000 + JHT/JP 17.400.000 = 30.300.000", "Jawaban: A"],
          penjelasan: "B mengurangi beban gaji dengan PPh 21; C menjadikan PPh 21 pegawai beban perusahaan sekaligus menambah gaji neto; D melupakan iuran JHT/JP pemberi kerja dan mencampur premi ke beban gaji." },
        { no: 6, pertanyaan: "Tenggat dan jurnal penyetoran PPh 21 Masa Juni 2026 yang tepat?", tipe: "pilihan",
          opsi: { A: "Setor paling lambat 10 Juli 2026; lapor SPT Masa PPh 21/26 paling lambat 20 Juli 2026; Dr Utang PPh 21 8.294.000 / Cr Kas 8.294.000", B: "Setor paling lambat 15 Juli 2026; lapor paling lambat 31 Juli 2026; Dr Beban PPh 21 8.294.000 / Cr Kas 8.294.000", C: "Setor paling lambat 15 Juli 2026; lapor SPT Masa PPh 21/26 paling lambat 20 Juli 2026; Dr Utang PPh 21 8.294.000 / Cr Kas 8.294.000", D: "Setor paling lambat 15 Juli 2026; lapor paling lambat 20 Juli 2026; Dr Utang gaji 8.294.000 / Cr Kas 8.294.000" }, jawaban: "C",
          petunjuk: ["PMK 81/2024: setor tanggal 15 bulan berikutnya; SPT Masa PPh paling lama 20 hari setelah masa berakhir", "Penyetoran melunasi Utang PPh 21 yang dibentuk saat penggajian", "Jawaban: C"],
          penjelasan: "Tanggal 10 adalah ketentuan lama; batas akhir bulan berlaku untuk SPT Masa PPN, bukan SPT Masa PPh 21/26." },
        { no: 7, pertanyaan: "Seandainya PPh 21 kedua manajer ditanggung perusahaan tanpa diberikan sebagai tunjangan (gaji manajer dibayar penuh), perlakuan yang tepat menurut penjelasan DJP atas PMK 66/2023?", tipe: "pilihan",
          opsi: { A: "PPh yang ditanggung dikoreksi positif Rp5.000.000 per bulan karena pajak penghasilan tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h)", B: "PPh yang ditanggung adalah kenikmatan bagi manajer: menambah penghasilan bruto mereka dan dapat dibiayakan perusahaan, sehingga tidak dikoreksi", C: "PPh yang ditanggung dikoreksi negatif karena dibayar dari dana perusahaan", D: "PPh yang ditanggung tidak dikoreksi, tetapi juga tidak menjadi penghasilan manajer" },
          jawaban: "B",
          petunjuk: ["Sejak UU HPP, natura dan kenikmatan dari pemberi kerja menjadi penghasilan pegawai dan biaya pemberi kerja (rinciannya PMK 66/2023)", "DJP (Juli 2023) menjelaskan PPh yang ditanggung pemberi kerja termasuk kenikmatan", "Jawaban: B"],
          penjelasan: "Menurut contoh I.4 Lampiran PMK 168/2023 dan Pasal 2 ayat (1) PMK 66/2023, PPh 21 yang ditanggung pemberi kerja diperlakukan sama dengan tunjangan PPh: penghasilan pegawai dan biaya yang dapat dikurangkan. A adalah aturan lama PER-16/PJ/2016 yang tidak berlaku untuk tahun pajak 2023 ke atas; C membalik arah koreksi; D memisahkan perlakuan pemberi kerja dan pegawai." }
      ],
      kesimpulan: "Bruto TER memasukkan premi JKK, JKM, dan BPJS Kesehatan pemberi kerja (bukan JHT/JP): PPh 21 Masa Juni 2026 Rp8.294.000 (operator 0%, staf 3%, manajer 10%). Jurnal 30 Juni: beban gaji Rp306,8 juta dan beban iuran Rp30,3 juta dengan kredit Utang PPh 21 Rp8,294 juta, Utang iuran BPJS Rp42,45 juta, dan Utang gaji Rp286,356 juta; PPh 21 disetor paling lambat 15 Juli dan dilaporkan paling lambat 20 Juli 2026. Bila PPh manajer ditanggung tanpa tunjangan, sejak PMK 66/2023 (penjelasan DJP) PPh itu menjadi kenikmatan manajer yang dapat dibiayakan dan tidak dikoreksi.",
      kalkulatorRef: "pph21-ter"
    },
    {
      id: "K-B7-05", judul: "Pajak kini dan pajak tangguhan dengan saldo awal", topik: "B7.7", estimasiMenit: 20,
      narasi: "PT Samudra Kemas Nusantara (produsen kemasan karton; peredaran bruto 2025 Rp96 miliar sehingga tidak berhak Pasal 31E) melaporkan laba sebelum pajak 2025 Rp2.500.000.000. Saldo pajak tangguhan 1 Januari 2025: aset pajak tangguhan Rp44.000.000 (dari liabilitas imbalan kerja Rp200.000.000) dan liabilitas pajak tangguhan Rp26.400.000 (dari selisih nilai buku mesin Rp120.000.000). Data 2025: beban imbalan kerja PSAK 219 di laba rugi Rp150.000.000 dan pembayaran manfaat kepada pegawai Rp90.000.000; beban penyisihan piutang Rp80.000.000 dengan penghapusan piutang yang memenuhi syarat Rp30.000.000 (didebit ke penyisihan; tidak ada saldo penyisihan awal); penyusutan fiskal Rp400.000.000 dan komersial Rp340.000.000; sanksi bunga STP Rp20.000.000; jamuan tanpa daftar nominatif Rp15.000.000; dividen dari PT dalam negeri Rp100.000.000; dan bunga deposito (PPh final) Rp40.000.000. Tidak ada sisa kerugian fiskal; tarif PPh badan 22%.",
      data: [["Laba sebelum pajak", "Rp2.500.000.000"], ["DTA awal / DTL awal", "Rp44.000.000 / Rp26.400.000"], ["Imbalan kerja: beban / dibayar", "Rp150.000.000 / Rp90.000.000"], ["Penyisihan piutang / hapus memenuhi syarat", "Rp80.000.000 / Rp30.000.000"], ["Penyusutan fiskal / komersial", "Rp400.000.000 / Rp340.000.000"], ["Sanksi STP / jamuan tanpa nominatif", "Rp20.000.000 / Rp15.000.000"], ["Dividen PT dalam negeri / bunga deposito final", "Rp100.000.000 / Rp40.000.000"], ["Tarif", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Total koreksi fiskal positif 2025 (Rp)?", tipe: "angka", jawaban: 145000000, toleransi: 0,
          petunjuk: ["Temporer: imbalan kerja 150 − 90; penyisihan 80 − 30 (juta)", "Tetap: sanksi STP dan jamuan tanpa daftar nominatif", "Jawaban: 60 + 50 + 20 + 15 = Rp145.000.000"],
          penjelasan: "Pencadangan imbalan kerja dan penyisihan piutang adalah beda temporer (Pasal 9 ayat (1) huruf c); sanksi dan jamuan tanpa nominatif adalah beda tetap." },
        { no: 2, pertanyaan: "Total koreksi fiskal negatif 2025 (Rp)?", tipe: "angka", jawaban: 200000000, toleransi: 0,
          petunjuk: ["Penghasilan bukan objek dan final dikeluarkan; biaya fiskal yang lebih besar dari komersial", "Penyusutan 400 − 340 = 60; dividen 100; bunga deposito 40 (juta)", "Jawaban: Rp200.000.000"],
          penjelasan: "Dividen dari PT dalam negeri bukan objek (Pasal 4 ayat (3) huruf f); bunga deposito final (Pasal 4 ayat (2)); selisih penyusutan beda temporer." },
        { no: 3, pertanyaan: "Pajak kini 2025 (Rp)?", tipe: "angka", jawaban: 537900000, toleransi: 0,
          petunjuk: ["PKP = 2.500 + 145 − 200 (juta)", "PKP Rp2.445.000.000; tanpa Pasal 31E karena peredaran bruto > Rp50 miliar", "Jawaban: 22% × 2.445.000.000 = Rp537.900.000"],
          penjelasan: "PKP dibulatkan ke ribuan penuh ke bawah; angka ini sudah bulat." },
        { no: 4, pertanyaan: "Saldo aset pajak tangguhan (sebelum saling hapus) per 31 Desember 2025 (Rp)?", tipe: "angka", jawaban: 68200000, toleransi: 0,
          petunjuk: ["Beda temporer dapat dikurangkan akhir: liabilitas imbalan kerja 200 + 60 dan saldo penyisihan 50 (juta)", "Total 310.000.000 × 22%", "Jawaban: Rp68.200.000"],
          penjelasan: "Saldo penyisihan akhir = 80 − 30 = 50 juta; liabilitas imbalan kerja akhir = 200 + 150 − 90 = 260 juta." },
        { no: 5, pertanyaan: "Saldo liabilitas pajak tangguhan per 31 Desember 2025 (Rp)?", tipe: "angka", jawaban: 39600000, toleransi: 0,
          petunjuk: ["Beda temporer kena pajak akhir = selisih awal mesin + tambahan tahun ini", "120.000.000 + 60.000.000 = 180.000.000", "Jawaban: 22% × 180.000.000 = Rp39.600.000"],
          penjelasan: "Penyusutan fiskal yang lebih cepat memperbesar selisih jumlah tercatat di atas dasar pajak mesin." },
        { no: 6, pertanyaan: "Jurnal pajak tangguhan 2025 yang tepat?", tipe: "pilihan",
          opsi: { A: "Dr Aset pajak tangguhan 24.200.000; Cr Liabilitas pajak tangguhan 13.200.000; Cr Manfaat pajak tangguhan 11.000.000", B: "Dr Aset pajak tangguhan 68.200.000; Cr Liabilitas pajak tangguhan 39.600.000; Cr Manfaat pajak tangguhan 28.600.000", C: "Dr Beban pajak tangguhan 11.000.000; Cr Liabilitas pajak tangguhan 11.000.000", D: "Dr Aset pajak tangguhan 31.900.000; Cr Manfaat pajak tangguhan 31.900.000" }, jawaban: "A",
          petunjuk: ["Yang dijurnal adalah perubahan saldo, bukan saldo akhir", "DTA naik 68,2 − 44 = 24,2 juta; DTL naik 39,6 − 26,4 = 13,2 juta", "Jawaban: A (manfaat neto Rp11.000.000)"],
          penjelasan: "B memakai saldo akhir; C membalik arah; D mengalikan seluruh koreksi positif (termasuk beda tetap) dengan 22%." },
        { no: 7, pertanyaan: "Beban pajak penghasilan 2025 di laba rugi (Rp)?", tipe: "angka", jawaban: 526900000, toleransi: 0,
          petunjuk: ["Beban pajak = pajak kini − manfaat pajak tangguhan neto", "537.900.000 − 11.000.000", "Jawaban: Rp526.900.000 (uji silang 22% × (2.500 + 35 − 140) juta)"],
          penjelasan: "Beda tetap positif 35 juta (sanksi, jamuan) dan negatif 140 juta (dividen, bunga final) menjelaskan selisih dengan 22% × laba akuntansi." },
        { no: 8, pertanyaan: "Penyajian pajak tangguhan di laporan posisi keuangan 31 Desember 2025?", tipe: "pilihan",
          opsi: { A: "Aset Rp68.200.000 dan liabilitas Rp39.600.000 disajikan terpisah sebagai pos lancar", B: "Aset pajak tangguhan neto Rp28.600.000 sebagai aset tidak lancar, karena keduanya terkait otoritas pajak yang sama dan ada hak legal saling hapus", C: "Aset pajak tangguhan neto Rp28.600.000 sebagai aset lancar karena akan dipulihkan dalam SPT tahun berikutnya", D: "Aset pajak tangguhan neto Rp11.000.000 sebagai aset tidak lancar" }, jawaban: "B",
          petunjuk: ["PSAK 212 mengizinkan saling hapus bila ada hak legal dan otoritas pajak sama", "Pajak tangguhan tidak disajikan sebagai pos lancar", "Jawaban: B (68.200.000 − 39.600.000)"],
          penjelasan: "D memakai perubahan tahun berjalan, bukan saldo; A dan C keliru menyajikan sebagai pos lancar." }
      ],
      kesimpulan: "Koreksi positif Rp145 juta dan negatif Rp200 juta menghasilkan PKP Rp2,445 miliar dan pajak kini Rp537,9 juta. Beda temporer akhir: dapat dikurangkan Rp310 juta (DTA Rp68,2 juta) dan kena pajak Rp180 juta (DTL Rp39,6 juta); kenaikannya menghasilkan manfaat pajak tangguhan neto Rp11 juta, sehingga beban pajak penghasilan Rp526,9 juta. Di neraca disajikan aset pajak tangguhan neto Rp28,6 juta sebagai aset tidak lancar.",
      kalkulatorRef: "pph-badan"
    },
    {
      id: "K-B7-06", judul: "Sewa truk tanpa hak opsi: PSAK 116 vs fiskal, PPh 23, PPN, dan pajak tangguhan", topik: "B7.3", estimasiMenit: 15,
      narasi: "PT Lintas Niaga Distribusi (PKP; tahun buku kalender) pada 1 Januari 2026 menyewa 4 truk boks dari PT Rental Armada Prima (PKP, perusahaan rental; bukan perusahaan pembiayaan) selama 3 tahun tanpa hak opsi membeli. Sewa Rp20.000.000 per bulan belum termasuk PPN, dibayar setiap akhir bulan dengan faktur pajak kode 04 (DPP nilai lain 11/12). Secara komersial (PSAK 116) perusahaan mengakui aset hak-guna dan liabilitas sewa masing-masing Rp600.000.000 (nilai kini pembayaran sewa); aset hak-guna disusutkan garis lurus 3 tahun, dan beban bunga liabilitas sewa 2026 Rp63.800.000 (dibulatkan). Tarif PPh badan 22%.",
      data: [["Masa sewa / hak opsi", "36 bulan sejak 1 Januari 2026 / tidak ada"], ["Sewa per bulan (tanpa PPN)", "Rp20.000.000"], ["PPN", "12% × 11/12"], ["Aset hak-guna = liabilitas sewa awal", "Rp600.000.000"], ["Penyusutan aset hak-guna", "Garis lurus 3 tahun"], ["Beban bunga sewa 2026", "Rp63.800.000"], ["Tarif PPh badan", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Perlakuan fiskal sewa ini bagi lessee?", tipe: "pilihan",
          opsi: { A: "Sewa guna usaha dengan hak opsi: angsuran dibiayakan tanpa pemotongan PPh 23", B: "Sewa biasa tanpa hak opsi: biaya sewa sebesar yang terutang setiap bulan dibiayakan dan dipotong PPh 23 2%", C: "Aset hak-guna disusutkan secara fiskal sebagai harta Kelompok 2 dan bunga sewa dibiayakan", D: "Sewa biasa: dipotong PPh final 10% seperti sewa bangunan" }, jawaban: "B",
          petunjuk: ["Fiskal tidak mengikuti PSAK 116; lihat jenis sewa dan pemberi sewa", "Tanpa hak opsi dan pemberi sewa perusahaan rental → sewa harta selain tanah/bangunan", "Jawaban: B"],
          penjelasan: "KMK 1169/KMK.01/1991: sewa tanpa hak opsi diperlakukan sebagai sewa biasa; sewa harta bergerak dipotong PPh 23 2%. PPh final 10% hanya untuk tanah/bangunan." },
        { no: 2, pertanyaan: "PPh 23 yang dipotong setiap bulan (Rp)?", tipe: "angka", jawaban: 400000, toleransi: 0,
          petunjuk: ["Dasar = jumlah bruto sewa tanpa PPN", "2% × 20.000.000", "Jawaban: Rp400.000"],
          penjelasan: "Dibuat BPPU di Coretax; disetor paling lambat tanggal 15 bulan berikutnya." },
        { no: 3, pertanyaan: "Kas yang dibayarkan kepada PT Rental setiap bulan (Rp)?", tipe: "angka", jawaban: 21800000, toleransi: 0,
          petunjuk: ["PPN = 12% × 11/12 × 20.000.000 = 2.200.000", "PPh 23 dipotong dari pembayaran", "Jawaban: 20.000.000 + 2.200.000 − 400.000 = Rp21.800.000"],
          penjelasan: "Jurnal pembayaran (PSAK 116): Dr Liabilitas sewa 20.000.000; Dr PPN Masukan 2.200.000; Cr Kas 21.800.000; Cr Utang PPh 23 400.000." },
        { no: 4, pertanyaan: "Beban komersial 2026 terkait sewa (penyusutan aset hak-guna + bunga) (Rp)?", tipe: "angka", jawaban: 263800000, toleransi: 0,
          petunjuk: ["Penyusutan aset hak-guna = 600.000.000 / 3", "200.000.000 + bunga 63.800.000", "Jawaban: Rp263.800.000"],
          penjelasan: "PSAK 116 memecah beban sewa menjadi penyusutan aset hak-guna dan beban bunga, sehingga beban tahun awal lebih besar dari pembayaran." },
        { no: 5, pertanyaan: "Biaya sewa yang dapat dikurangkan secara fiskal 2026 (Rp)?", tipe: "angka", jawaban: 240000000, toleransi: 0,
          petunjuk: ["Fiskal: sewa yang terutang dalam tahun berjalan", "12 × 20.000.000", "Jawaban: Rp240.000.000"],
          penjelasan: "Penyusutan aset hak-guna dan bunga sewa dikeluarkan, diganti biaya sewa fiskal." },
        { no: 6, pertanyaan: "Koreksi fiskal positif 2026 atas sewa (Rp)?", tipe: "angka", jawaban: 23800000, toleransi: 0,
          petunjuk: ["Koreksi = beban komersial − biaya fiskal", "263.800.000 − 240.000.000", "Jawaban: Rp23.800.000"],
          penjelasan: "Beda temporer: total beban komersial dan fiskal selama 3 tahun sama, hanya polanya berbeda." },
        { no: 7, pertanyaan: "Pajak tangguhan per 31 Desember 2026?", tipe: "pilihan",
          opsi: { A: "Aset pajak tangguhan Rp5.236.000 (liabilitas sewa Rp423.800.000 melebihi aset hak-guna Rp400.000.000)", B: "Liabilitas pajak tangguhan Rp5.236.000", C: "Aset pajak tangguhan Rp88.000.000 (22% × aset hak-guna Rp400.000.000)", D: "Tidak ada pajak tangguhan karena sewa adalah beda tetap" }, jawaban: "A",
          petunjuk: ["Aset hak-guna akhir = 600 − 200 = 400 juta; liabilitas sewa akhir = 600 + 63,8 − 240 = 423,8 juta; dasar pajak keduanya nol", "Selisih neto 23,8 juta adalah beda temporer dapat dikurangkan", "Jawaban: A (22% × 23.800.000 = Rp5.236.000)"],
          penjelasan: "Neto liabilitas yang lebih besar dari aset terkait menimbulkan aset pajak tangguhan; B membalik arah, C hanya melihat satu sisi, D salah mengklasifikasi." }
      ],
      kesimpulan: "Fiskal mengabaikan PSAK 116: sewa tanpa hak opsi dibiayakan Rp240 juta (12 × Rp20 juta) dan dipotong PPh 23 Rp400 ribu per bulan, sehingga kas per bulan Rp21,8 juta termasuk PPN Rp2,2 juta yang dapat dikreditkan. Beban komersial 2026 Rp263,8 juta (penyusutan Rp200 juta + bunga Rp63,8 juta) menghasilkan koreksi positif Rp23,8 juta, beda temporer yang membentuk aset pajak tangguhan Rp5,236 juta.",
      kalkulatorRef: null
    },
    {
      id: "K-B7-07", judul: "Piutang dan utang USD lintas tahun: dari pengakuan sampai pelunasan", topik: "B7.4", estimasiMenit: 20,
      narasi: "PT Borneo Rotan Internasional (PKP; importir pemilik API; pembukuan Rupiah; tahun buku kalender) mencatat transaksi valas dengan kurs tengah BI tanggal transaksi dan menjabarkan pos moneter dengan kurs tengah BI 31 Desember. Pada 14 November 2025 perusahaan mengekspor mebel rotan USD60.000 secara kredit (PPN ekspor 0%). Pada 3 Desember 2025 perusahaan mengimpor bahan baku secara kredit USD25.000; bea masuk 0%, PPN impor 12% × 11/12 dan PPh Pasal 22 impor 2,5% dilunasi saat PIB dengan kurs KMK. Piutang diterima 10 Februari 2026 dan langsung dikonversi bank ke rekening Rupiah dengan kurs beli bank; utang dibayar 12 Maret 2026 dari rekening Rupiah dengan kurs jual bank. Tarif PPh badan 22%.",
      data: [["Ekspor 14 Nov 2025", "USD60.000 · kurs tengah BI Rp15.880 · kurs KMK Rp15.850"], ["Impor 3 Des 2025", "USD25.000 · kurs tengah BI Rp15.960 · kurs KMK Rp15.930"], ["31 Des 2025", "Kurs tengah BI Rp16.140 · kurs KMK Rp16.100"], ["Pelunasan piutang 10 Feb 2026", "Kurs beli bank Rp16.280 · kurs tengah BI Rp16.320 · kurs KMK Rp16.300"], ["Pembayaran utang 12 Mar 2026", "Kurs jual bank Rp16.450 · kurs tengah BI Rp16.400 · kurs KMK Rp16.380"], ["PPh 22 impor (API)", "2,5% × nilai impor"], ["Tarif PPh badan", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Jumlah yang didebit ke Piutang usaha pada 14 November 2025 (Rp)?", tipe: "angka", jawaban: 952800000, toleransi: 0,
          petunjuk: ["Pengakuan awal memakai kurs transaksi sesuai kebijakan (kurs tengah BI)", "60.000 × 15.880", "Jawaban: Rp952.800.000"],
          penjelasan: "Jurnal: Dr Piutang usaha Rp952.800.000 / Cr Penjualan ekspor Rp952.800.000. Kurs KMK 15.850 tidak dipakai untuk mencatat piutang." },
        { no: 2, pertanyaan: "PPh Pasal 22 impor yang dibayar pada 3 Desember 2025 (Rp)?", tipe: "angka", jawaban: 9956250, toleransi: 0,
          petunjuk: ["Pungutan impor memakai kurs KMK saat PIB", "Nilai impor = 25.000 × 15.930 + bea masuk 0 = 398.250.000", "Jawaban: 2,5% × 398.250.000 = Rp9.956.250"],
          penjelasan: "PPh 22 impor Rp9.956.250 dicatat sebagai PPh dibayar di muka dan PPN impor Rp43.807.500 sebagai Pajak Masukan; utang usaha dicatat dengan kurs tengah BI: 25.000 × 15.960 = Rp399.000.000." },
        { no: 3, pertanyaan: "Selisih kurs neto belum direalisasi yang diakui 31 Desember 2025 (Rp; laba positif, rugi negatif)?", tipe: "angka", jawaban: 11100000, toleransi: 0,
          petunjuk: ["Piutang: 60.000 × (16.140 − 15.880) = laba 15.600.000", "Utang: 25.000 × (16.140 − 15.960) = rugi 4.500.000", "Jawaban: laba neto Rp11.100.000"],
          penjelasan: "Jurnal: Dr Piutang usaha 15.600.000 / Cr Laba selisih kurs 15.600.000; Dr Rugi selisih kurs 4.500.000 / Cr Utang usaha 4.500.000. Dengan kurs KMK hasilnya Rp9.700.000 — pengecoh, karena saldo pembukuan tidak dijabarkan dengan kurs KMK." },
        { no: 4, pertanyaan: "Perlakuan selisih kurs belum direalisasi 2025 dalam rekonsiliasi fiskal?", tipe: "pilihan",
          opsi: { A: "Dikoreksi negatif Rp11.100.000 karena belum direalisasi, lalu diakui pada 2026", B: "Diakui dalam penghasilan neto fiskal 2025 tanpa koreksi; tidak ada pajak tangguhan", C: "Laba piutang diakui, rugi utang Rp4.500.000 dikoreksi positif sampai dibayar", D: "Dijabarkan ulang dengan kurs KMK; selisih Rp1.400.000 dikoreksi negatif" }, jawaban: "B",
          petunjuk: ["PP 94/2010 Pasal 9 merujuk pembukuan taat asas sesuai SAK", "SAK mengakui selisih kurs pos moneter pada tanggal neraca", "Jawaban: B"],
          penjelasan: "Fiskal mengikuti SAK, sehingga laba neto Rp11.100.000 menjadi penghasilan 2025 tanpa koreksi; dasar pajak piutang dan utang sama dengan nilai tercatatnya, jadi tidak ada beda temporer. A dan C memakai prinsip realisasi; D memakai kurs KMK untuk saldo pembukuan." },
        { no: 5, pertanyaan: "Laba selisih kurs yang direalisasi atas piutang pada 10 Februari 2026 (Rp)?", tipe: "angka", jawaban: 8400000, toleransi: 0,
          petunjuk: ["Bandingkan Rupiah diterima dengan nilai tercatat terakhir (kurs penutup 2025)", "60.000 × 16.280 − 60.000 × 16.140", "Jawaban: Rp8.400.000"],
          penjelasan: "Jurnal: Dr Kas Rp976.800.000 / Cr Piutang usaha Rp968.400.000 / Cr Laba selisih kurs Rp8.400.000. Laba Rp15.600.000 tahun 2025 tidak dihitung lagi." },
        { no: 6, pertanyaan: "Jurnal pembayaran utang pada 12 Maret 2026?", tipe: "pilihan",
          opsi: { A: "Dr Utang usaha Rp399.000.000; Dr Rugi selisih kurs Rp12.250.000; Cr Kas Rp411.250.000", B: "Dr Utang usaha Rp403.500.000; Dr Rugi selisih kurs Rp6.500.000; Cr Kas Rp410.000.000", C: "Dr Utang usaha Rp403.500.000; Dr Rugi selisih kurs Rp7.750.000; Cr Kas Rp411.250.000", D: "Dr Utang usaha Rp403.500.000; Dr Rugi selisih kurs Rp6.000.000; Cr Kas Rp409.500.000" }, jawaban: "C",
          petunjuk: ["Utang dihentikan sebesar nilai tercatat 31 Desember 2025 (25.000 × 16.140)", "Kas keluar = 25.000 × kurs jual bank 16.450", "Jawaban: C"],
          penjelasan: "Rugi realisasi = Rp411.250.000 − Rp403.500.000 = Rp7.750.000. A mengabaikan penjabaran 2025 sehingga rugi Rp4.500.000 terhitung dua kali; B dan D memakai kurs tengah BI atau kurs KMK, bukan Rupiah yang benar-benar dibayar." },
        { no: 7, pertanyaan: "Selisih kurs neto yang diakui fiskal Tahun Pajak 2026 atas kedua pos (Rp; laba positif, rugi negatif)?", tipe: "angka", jawaban: 650000, toleransi: 0,
          petunjuk: ["Laba piutang 8.400.000 dan rugi utang 7.750.000", "Kurs pembanding keduanya kurs penutup 2025", "Jawaban: laba neto Rp650.000"],
          penjelasan: "Cek dua tahun: piutang total laba Rp24.000.000 (976.800.000 − 952.800.000), utang total rugi Rp12.250.000 (411.250.000 − 399.000.000), neto Rp11.750.000 = Rp11.100.000 (2025) + Rp650.000 (2026). Tidak ada yang hilang atau terhitung dua kali." }
      ],
      kesimpulan: "Piutang dan utang USD dicatat dengan kurs tengah BI tanggal transaksi; pungutan impor saja yang memakai kurs KMK (PPh 22 impor Rp9.956.250). Pada 31 Desember 2025 kedua pos dijabarkan ke kurs tengah BI sehingga laba neto Rp11.100.000 diakui komersial dan fiskal tanpa koreksi. Pada 2026 laba piutang Rp8.400.000 dan rugi utang Rp7.750.000 dihitung dari kurs penutup 2025, sehingga neto Rp650.000; total dua tahun sama dengan selisih kurs transaksi ke kurs pelunasan.",
      kalkulatorRef: "kurs",
      kalkulatorInput: { nilaiValas: 25000, mataUang: "USD", jenisPajak: "pph22-25", kursKmk: 15930, kursTengah: 15960, kursAkhir: 16140, kursBayar: 16450, posisi: "utang", tarifP3b: null }   // utang impor (langkah 2, 3 bagian utang, dan 6)
    },
    {
      id: "K-B7-08", judul: "Royalti USD: PPh 26 dengan kurs KMK, beban dengan kurs tengah, dan mengapa saat setor tidak ada selisih kurs", topik: "B7.8", estimasiMenit: 18,
      narasi: "PT Cahaya Kosmetik Nusantara (PKP; pembukuan Rupiah; transaksi valas dicatat dengan kurs tengah BI tanggal transaksi dan giro USD dijabarkan harian dengan kurs tengah BI) membayar royalti formula produk kepada Alpina Labs AG di Negara Alpina, yang tidak mempunyai BUT di Indonesia. P3B Indonesia–Negara Alpina membatasi tarif royalti 10%; Form DGT telah disampaikan melalui Coretax sebelum pembayaran dan Alpina Labs adalah pemilik manfaat. Royalti USD80.000 (tanpa gross-up, wajar) terutang dan dibayar pada 12 Agustus 2026: USD setelah PPh ditransfer dari giro USD. PPN atas pemanfaatan BKP tidak berwujud dari luar Daerah Pabean dan PPh Pasal 26 disetor dari rekening Rupiah pada 14 September 2026.",
      data: [["Royalti bruto", "USD80.000 · tarif P3B 10% · tanpa gross-up"], ["12 Agustus 2026", "Kurs KMK Rp16.240 · kurs tengah BI Rp16.190 · kurs jual bank Rp16.270"], ["14 September 2026 (setor)", "Kurs KMK Rp16.310 · kurs tengah BI Rp16.330"], ["PPN pemanfaatan BKP tidak berwujud", "12% × DPP nilai lain 11/12"], ["Pembayaran ke Alpina", "Dari giro USD (kurs tengah BI)"], ["Penyetoran pajak", "Rekening Rupiah, 14 September 2026"]],
      langkah: [
        { no: 1, pertanyaan: "PPh Pasal 26 yang dipotong (Rp)?", tipe: "angka", jawaban: 129920000, toleransi: 0,
          petunjuk: ["Tarif P3B 10% berlaku karena Form DGT dan pemilik manfaat", "DPP dikonversi dengan kurs KMK saat terutang (12 Agustus)", "Jawaban: 10% × 80.000 × 16.240 = Rp129.920.000"],
          penjelasan: "Tanpa Form DGT tarifnya 20% (Rp259.840.000). Kurs tengah BI, kurs jual bank, dan kurs tanggal setor tidak dipakai untuk DPP." },
        { no: 2, pertanyaan: "PPN atas pemanfaatan BKP tidak berwujud dari luar Daerah Pabean (Rp)?", tipe: "angka", jawaban: 142912000, toleransi: 0,
          petunjuk: ["DPP = jumlah yang dibayar atau seharusnya dibayar (bruto USD80.000)", "Tarif efektif 12% × 11/12 = 11%, kurs KMK saat terutang", "Jawaban: 11% × 80.000 × 16.240 = Rp142.912.000"],
          penjelasan: "PPN disetor sendiri oleh PT Cahaya paling lambat tanggal 15 bulan berikutnya dan dapat dikreditkan sebagai Pajak Masukan; jurnalnya Dr PPN Masukan / Cr Utang PPN tanpa selisih kurs karena kedua sisi dalam Rupiah." },
        { no: 3, pertanyaan: "Beban royalti yang dicatat pada 12 Agustus 2026 (Rp)?", tipe: "angka", jawaban: 1295200000, toleransi: 0,
          petunjuk: ["Beban adalah royalti bruto, bukan neto setelah PPh", "Pembukuan memakai kurs tengah BI tanggal transaksi", "Jawaban: 80.000 × 16.190 = Rp1.295.200.000"],
          penjelasan: "Dengan kurs KMK bebannya Rp1.299.200.000 — pengecoh; kurs KMK hanya untuk pajak." },
        { no: 4, pertanyaan: "Selisih yang timbul dalam jurnal pembayaran royalti?", tipe: "pilihan",
          opsi: { A: "Laba selisih kurs Rp400.000", B: "Rugi selisih kurs Rp400.000", C: "Rugi selisih kurs Rp4.000.000", D: "Nihil, karena Utang PPh 26 dicatat dengan kurs tengah BI" }, jawaban: "B",
          petunjuk: ["Kas USD72.000 × 16.190 = Rp1.165.680.000; Utang PPh 26 Rp129.920.000", "Kredit Rp1.295.600.000 melebihi beban Rp1.295.200.000", "Jawaban: B"],
          penjelasan: "Jurnal: Dr Beban royalti Rp1.295.200.000; Dr Rugi selisih kurs Rp400.000; Cr Kas (giro USD) Rp1.165.680.000; Cr Utang PPh 26 Rp129.920.000. Rugi = USD8.000 × (16.240 − 16.190): pajak ditetapkan dengan kurs KMK yang lebih tinggi dari kurs buku. C menerapkan selisih kurs pada seluruh USD80.000; D mencatat utang pajak dengan kurs yang salah." },
        { no: 5, pertanyaan: "Jumlah PPh Pasal 26 yang disetor pada 14 September 2026 (Rp)?", tipe: "angka", jawaban: 129920000, toleransi: 0,
          petunjuk: ["Jumlah Rupiah pajak sudah tetap sejak saat terutang", "Kurs KMK 16.310 dan kurs tengah BI 16.330 tanggal setor tidak dipakai", "Jawaban: Rp129.920.000"],
          penjelasan: "Utang PPh 26 adalah kewajiban Rupiah, bukan pos valas: Dr Utang PPh 26 / Cr Kas Rp129.920.000 tanpa selisih kurs. Setor paling lambat 15 September 2026; bukti potong BPNR dibuat di Coretax." },
        { no: 6, pertanyaan: "Seandainya staf mencatat Utang PPh 26 dengan kurs tengah BI 12 Agustus (USD8.000 × 16.190), selisih yang harus dicatat saat setor (Rp)?", tipe: "angka", jawaban: 400000, toleransi: 0,
          petunjuk: ["Utang tercatat keliru = 8.000 × 16.190 = Rp129.520.000", "Yang wajib disetor tetap Rp129.920.000", "Jawaban: Rp400.000 (didebit sebagai rugi selisih kurs)"],
          penjelasan: "Inilah 'selisih kurs saat setor' yang sering muncul di soal: ia hanya timbul karena utang pajak dicatat dengan kurs buku. Jumlahnya sama dengan rugi selisih kurs pada langkah 4; total beban tidak berubah, hanya waktu pencatatannya bergeser." },
        { no: 7, pertanyaan: "Perlakuan fiskal yang tepat di PT Cahaya?", tipe: "pilihan",
          opsi: { A: "Beban royalti Rp1.295.200.000 dapat dikurangkan; PPh 26 bukan biaya PT Cahaya; PPN Rp142.912.000 dikreditkan sebagai Pajak Masukan", B: "Beban royalti dan PPh 26 Rp129.920.000 sama-sama dibiayakan karena PPh 26 disetor oleh PT Cahaya", C: "Beban royalti dihitung ulang dengan kurs KMK (Rp1.299.200.000) sehingga ada koreksi negatif Rp4.000.000", D: "PPN Rp142.912.000 dibiayakan karena dibayar sendiri dan tidak ada faktur pajak dari Alpina" }, jawaban: "A",
          petunjuk: ["PPh 26 dipotong dari penghasilan Alpina, bukan beban pemotong", "Biaya fiskal mengikuti pembukuan; tidak dihitung ulang dengan kurs KMK", "Jawaban: A"],
          penjelasan: "Beban royalti yang wajar dapat dikurangkan sebesar yang dibukukan; rugi selisih kurs Rp400.000 mengikuti pembukuan (PP 94/2010 Pasal 9). PPh 26 tanpa gross-up adalah pajak penerima. PPN pemanfaatan dari luar Daerah Pabean dikreditkan dengan bukti setor sebagai dokumen yang dipersamakan dengan faktur pajak." }
      ],
      kesimpulan: "PPh 26 (Rp129.920.000) dan PPN pemanfaatan (Rp142.912.000) memakai kurs KMK saat terutang, sedangkan beban royalti (Rp1.295.200.000) dan kas USD memakai kurs tengah BI. Bagian USD8.000 yang dipotong bernilai lebih rendah di pembukuan daripada pajaknya, sehingga timbul rugi selisih kurs Rp400.000 saat pembayaran. Penyetoran pada 14 September 2026 sebesar Rp129.920.000 tidak menimbulkan selisih kurs, kecuali utang pajak keliru dicatat dengan kurs buku.",
      kalkulatorRef: "kurs",
      kalkulatorInput: { nilaiValas: 80000, mataUang: "USD", jenisPajak: "pph26", kursKmk: 16240, kursTengah: 16190, kursAkhir: null, kursBayar: 16190, posisi: "utang", tarifP3b: 10 }   // dibayar dari giro USD pada hari yang sama (kurs tengah BI)
    }
  ],
  tips: [
    { teks: "Tentukan dulu posisi perusahaan dalam transaksi — pemotong (Utang PPh) atau pihak yang dipotong (PPh dibayar di muka, atau beban bila final) — sebelum memilih akun jurnal.", tagSebab: "salah-klasifikasi" },
    { teks: "Pada soal rekonsiliasi panjang, buat dua kolom cepat: beda tetap dan beda temporer, masing-masing dengan tanda +/−; pajak tangguhan hanya dihitung dari kolom temporer.", tagSebab: "salah-klasifikasi" },
    { teks: "Untuk barang/jasa non-mewah 2025–2026, PPN di jurnal = 11% dari harga; opsi yang memakai 12% × harga penuh hampir selalu pengecoh.", tagSebab: "salah-hitung" },
    { teks: "Penghasilan final: keluarkan penghasilannya (koreksi negatif), keluarkan biaya untuk memperolehnya (koreksi positif), dan jangan kreditkan PPh-nya.", tagSebab: "final-nonfinal" },
    { teks: "Waspadai angka usang di opsi: tarif badan 25% (s.d. TP 2019), setor tanggal 10 (pra-2025), revaluasi 3%/4%/6% (2015–2016), tarif konstruksi 2%/3% (pra-PP 9/2022).", tagSebab: "angka-usang" },
    { teks: "Uji silang soal pajak tangguhan: beban pajak total = 22% × (laba akuntansi ± beda tetap); bila hasil Anda berbeda, ada beda tetap yang ikut dihitung sebagai temporer.", tagSebab: "salah-hitung" }
  ]
});
