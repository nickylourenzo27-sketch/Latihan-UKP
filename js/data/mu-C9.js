/* Modul C9 — PPh Badan dan SPT PPh Badan untuk transaksi internasional (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi dan rilis cakupan materi, bukan soal asli ujian. Gaya soal mengikuti docs/GAYA-SOAL.md
   (kasus praktik panjang, vignette, kutipan peraturan). Angka rujukan: docs/research/02b bagian A dan D, docs/research/02a bagian C. */
UKP.register({
  meta: {
    kode: "C9", slug: "pph-badan-internasional", nama: "PPh Badan dan SPT PPh Badan untuk transaksi internasional",
    diujiDi: ["C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { C: 0.08 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu menentukan timbulnya bentuk usaha tetap (BUT), menghitung penghasilan neto dan PPh terutang BUT termasuk koreksi pembayaran ke kantor pusat dan force of attraction, lalu menghitung branch profit tax Pasal 26 ayat (4) beserta pengecualian penanaman kembali. Peserta juga mampu menghitung kredit pajak luar negeri Pasal 24 per jenis penghasilan untuk tiap negara, menilai transaksi afiliasi lintas negara (hubungan istimewa, PKKU, dokumentasi, secondary adjustment), memahami kewajiban khas PMA (pembukuan USD, dividen ke luar negeri, fasilitas investasi), dan menerapkan pajak minimum global (IIR, DMTT, UTPR) yang berlaku sejak 2025–2026, serta menuangkannya ke SPT Tahunan PPh Badan.",
    dasarHukumUtama: [
      "UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 2 ayat (5), Pasal 5, Pasal 18, Pasal 24, Pasal 26 ayat (4)",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) Pasal 28 ayat (4) dan (8)",
      "PMK 35/PMK.03/2019 (penentuan BUT); KEP-62/PJ/1995 (biaya kantor pusat)",
      "PMK 14/PMK.03/2011 (penanaman kembali laba BUT)",
      "PMK 192/PMK.03/2018 (kredit pajak luar negeri, nomor mengikuti kurikulum)",
      "PMK 172/2023 (PKKU, dokumentasi harga transfer, MAP, APA)",
      "PMK 112/2025 (tata cara penerapan P3B, Form DGT)",
      "PMK 136/2024 dan PER-6/PJ/2026 (pajak minimum global)",
      "PP 78/2019 (tax allowance); PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday)",
      "PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019 (pembukuan bahasa Inggris dan USD; Pasal 7 ayat (2) dan ayat (3) dicabut Pasal 483 PMK 81/2024, SPT Badan dalam USD kini Pasal 161 ayat (2) PMK 81/2024)",
      "PMK 81/2024, PER-8/PJ/2025, dan PER-11/PJ/2025 (Coretax, SPT, bukti potong)"
    ],
    perubahanTerbaru: [
      { sebelum: "Penerapan P3B dengan Form DGT 7 bagian menurut PER-25/PJ/2018", sesudah: "PMK 112/2025: Form DGT 6 bagian, diserahkan kepada pemotong sebelum atau pada saat pembayaran dan diunggah ke Coretax; SKD lama tetap berlaku sampai periodenya habis", dasar: "PMK 112/2025; PENG-2/PJ.09/2026", berlakuSejak: "2025-12-31" },
      { sebelum: "Dokumentasi TP (PMK 213/PMK.03/2016), MAP (PMK 49/PMK.03/2019), dan APA (PMK 22/PMK.03/2020) diatur terpisah", sesudah: "Satu PMK 172/2023: PKKU ex-ante, dokumentasi mulai tahun pajak 2024, secondary adjustment diperlakukan sebagai dividen, MAP dan APA terpadu", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { sebelum: "Belum ada pajak minimum global", sesudah: "Tarif minimum efektif 15% bagi grup beromzet konsolidasi ≥ EUR 750 juta: IIR dan DMTT berlaku tahun pajak 2025, UTPR tahun pajak 2026; aturan pelaksana PER-6/PJ/2026 (4 Mei 2026)", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2025-01-01" },
      { sebelum: "Setor PPh Pasal 26 paling lambat tanggal 10 bulan berikutnya; bukti potong e-Bupot Unifikasi DJP Online", sesudah: "Setor paling lambat tanggal 15 bulan berikutnya; bukti potong BPNR dan SPT Masa PPh Unifikasi di Coretax dilaporkan paling lambat tanggal 20", dasar: "PMK 81/2024 Pasal 94; PER-11/PJ/2025", berlakuSejak: "2025-01-01" },
      { sebelum: "SPT Tahunan PPh Badan formulir 1771 disampaikan lewat e-Form/DJP Online", sesudah: "SPT Tahunan PPh Badan tahun pajak 2025 (disampaikan 2026) pertama kali lewat Coretax dengan bentuk formulir PER-11/PJ/2025 dan pra-isi dari bukti potong elektronik", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "Permohonan izin pembukuan bahasa Inggris dan USD disampaikan secara manual ke KPP", sesudah: "Permohonan/pemberitahuan pembukuan bahasa Inggris dan USD termasuk layanan administrasi Coretax", dasar: "PMK 81/2024; PER-8/PJ/2025", berlakuSejak: "2025-05-21" }
    ],
    lembarRingkas: [
      { label: "Time test BUT jasa (UU PPh)", nilai: "> 60 hari dalam 12 bulan bergulir, seluruh personel digabung; P3B dengan SKD sah dapat mengatur lain", dasar: "Pasal 2 ayat (5) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Tarif PPh BUT", nilai: "22% × PKP; tanpa Pasal 31E, tarif Tbk 19%, atau PPh final 0,5%", dasar: "Pasal 17 ayat (1) huruf b dan Pasal 31E UU PPh", berlakuSejak: "2022-01-01" },
      { label: "Pembayaran BUT ke kantor pusat yang bukan biaya", nilai: "royalti, jasa manajemen/jasa lain, bunga (kecuali usaha perbankan)", dasar: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01" },
      { label: "Force of attraction", nilai: "usaha/penjualan/jasa sejenis kantor pusat di Indonesia + penghasilan Ps. 26 yang berhubungan efektif", dasar: "Pasal 5 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2001-01-01" },
      { label: "Biaya administrasi kantor pusat", nilai: "boleh sepanjang berkaitan dengan BUT; alokasi proporsional, taat asas", dasar: "Pasal 5 ayat (2) UU PPh; KEP-62/PJ/1995", berlakuSejak: "2001-01-01" },
      { label: "PPh Pasal 15 KPDA", nilai: "0,44% × nilai ekspor bruto (final); KPDA dari negara bukan mitra P3B", dasar: "KMK 634/KMK.04/1994", berlakuSejak: "1995-01-01" },
      { label: "Branch profit tax", nilai: "20% × (PKP − PPh badan) atau tarif P3B; penghasilan yang dikenai PPh final ikut masuk dasar setelah dikurangi PPh finalnya; final, disetor sendiri", dasar: "Pasal 26 ayat (4) dan ayat (5) UU PPh; Pasal 6 PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01" },
      { label: "Penanaman kembali laba BUT", nilai: "seluruh laba setelah pajak; 4 bentuk; paling lambat akhir tahun pajak berikutnya; tidak dialihkan 2 tahun sejak produksi komersial (penyertaan sebagai pendiri) atau 3 tahun (penyertaan pada perusahaan yang sudah berdiri, aktiva tetap, aktiva tidak berwujud)", dasar: "Pasal 1 ayat (3) dan Pasal 2 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" },
      { label: "PPh Pasal 26 umum", nilai: "20% × bruto; tarif P3B bila SKD sah dan penerima pemilik manfaat", dasar: "Pasal 26 ayat (1) UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" },
      { label: "Form DGT", nilai: "6 bagian; terekam di Coretax sebelum pembayaran; SKD lama berlaku s.d. periodenya", dasar: "PMK 112/2025; PENG-2/PJ.09/2026", berlakuSejak: "2025-12-31" },
      { label: "Setor dan lapor PPh 26 (BPNR)", nilai: "setor tanggal 15; SPT Masa PPh Unifikasi tanggal 20 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94; PER-11/PJ/2025", berlakuSejak: "2025-01-01" },
      { label: "Kredit PPh Pasal 24 per jenis penghasilan tiap negara", nilai: "terkecil: pajak LN dibayar, pajak menurut P3B, (neto LN jenis itu dari negara itu ÷ PKP) × PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
      { label: "Rugi usaha di luar negeri", nilai: "tidak digabung dalam PKP; kelebihan pajak LN hangus", dasar: "PMK 192/PMK.03/2018", berlakuSejak: null },
      { label: "Dividen LN non-bursa bukan objek", nilai: "diinvestasikan di Indonesia ≥ 30% laba setelah pajak", dasar: "Pasal 4 ayat (3) huruf f angka 2 UU PPh", berlakuSejak: "2020-11-02" },
      { label: "Angsuran PPh 25 tahun berikutnya", nilai: "(PPh terutang − kredit Ps. 21/22/23/24) ÷ 12", dasar: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Hubungan istimewa", nilai: "kepemilikan ≥ 25% langsung/tidak langsung; penguasaan; keluarga satu derajat", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Ambang Dokumen Induk/Lokal", nilai: "omzet > Rp50 M; barang > Rp20 M; jasa/bunga/HTB > Rp5 M; afiliasi bertarif < 22%", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Tenggat dokumen TP", nilai: "tersedia 4 bulan setelah tahun pajak; diserahkan ≤ 1 bulan sejak diminta", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "CbCR", nilai: "konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Harga di luar rentang", nilai: "disesuaikan ke titik paling tepat dalam rentang, atau median bila titik itu tidak dapat ditentukan; selisih dianggap dividen (secondary adjustment) kecuali kas/setara kas sebesar selisih ditambahkan atau dikembalikan sebelum surat ketetapan pajak terbit, dan/atau WP menyetujui penentuan harga transfer oleh DJP", dasar: "Pasal 12 ayat (7) dan Pasal 37 PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Pembukuan bahasa Inggris/USD", nilai: "setelah izin; diajukan paling lambat 3 bulan sebelum tahun buku; layanan Coretax", dasar: "Pasal 28 ayat (8) UU KUP; PMK 123/PMK.03/2019; PER-8/PJ/2025", berlakuSejak: "2025-05-21" },
      { label: "Tax allowance", nilai: "neto −30% investasi (5%/tahun × 6); dividen WPLN 10%; rugi s.d. 10 tahun", dasar: "PP 78/2019", berlakuSejak: "2019-12-12" },
      { label: "Tax holiday", nilai: "≥ Rp500 M: 100% 5–20 tahun; Rp100–< 500 M: 50% 5 tahun", dasar: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024", berlakuSejak: "2020-10-09" },
      { label: "Cakupan GloBE", nilai: "pendapatan konsolidasi ≥ EUR 750 juta pada 2 dari 4 tahun sebelumnya", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "Tarif minimum dan mulai berlaku", nilai: "ETR 15% per yurisdiksi; IIR dan DMTT TP 2025; UTPR TP 2026", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "Pajak tambahan (top-up)", nilai: "(15% − ETR) × (laba GloBE − SBIE) − DMTT", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "Safe harbour transisi CbCR", nilai: "de minimis < EUR 10 jt dan < EUR 1 jt; ETR 15/16/17% (tahun pajak mulai 2024/2025/2026, yang terakhir sampai tahun pajak berakhir 30 Juni 2028); laba ≤ SBIE", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "GloBE Information Return", nilai: "15 bulan setelah tahun pajak; 18 bulan untuk tahun pertama", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04" },
      { label: "SPT 1771 BUT/PMA", nilai: "4 bulan setelah tahun pajak (30 April bila tahun kalender); denda Rp1.000.000; bentuk PER-11/PJ/2025 (tahun pajak 2025 dan seterusnya): Lampiran 10A sampai 10D hubungan istimewa, 12A penghitungan BPT, 12B pemberitahuan penanaman kembali; format 1771 lama (sampai tahun pajak 2024): 3A, 4A, 6A, 7A", dasar: "Pasal 3 dan Pasal 7 UU KUP; PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "Uji ambang dan tarif minimum GloBE", nilai: "EUR 750 juta pada ≥ 2 dari 4 tahun sebelum tahun uji; 15% diuji per yurisdiksi (BUT ikut yurisdiksi letaknya)", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "SBIE masa transisi", nilai: "2025: gaji 9,6%, aset 7,6%; 2026: gaji 9,4%, aset 7,4%; permanen 5% mulai 2033", dasar: "Pasal 7 ayat (7) dan Pasal 8 ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "Urutan hitung top-up", nilai: "ETR = pajak tercakup ÷ laba GloBE; laba lebih = laba − SBIE; top-up = (15% − ETR) × laba lebih − QDMTT; IIR × porsi kepemilikan", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
      { label: "Tenggat GIR tahun buku non-kalender", nilai: "18 bulan setelah akhir tahun buku pertama (31 Maret 2026 → 30 September 2027), lalu 15 bulan", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04" },
      { label: "BPT BUT kecil", nilai: "PPh badan 22% penuh (tanpa Pasal 31E/PP 55/2022), lalu tarif BPT × (PKP − PPh); tidak terutang hanya bila seluruhnya ditanamkan kembali", dasar: "Pasal 26 ayat (4) dan Pasal 31E UU PPh; PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01" },
      { label: "Kurs KMK vs kurs tengah BI", nilai: "KMK mingguan (Rabu–Selasa) untuk DPP PPh pot/put (BPPU/BPNR) dan PPN; kurs tengah BI untuk pembukuan dan penjabaran neraca", dasar: "KMK kurs mingguan; PP 94/2010 Pasal 9", berlakuSejak: null },
      { label: "Kredit PPh 23 dalam valuta asing", nilai: "sebesar bukti potong (DPP × kurs KMK saat terutang), bukan tarif × pendapatan berkurs pembukuan", dasar: "Pasal 23 dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Kurs kredit PPh Pasal 24", nilai: "pajak luar negeri dengan kurs KMK saat terutang, dibayar, atau dipotong di luar negeri; penghasilan luar negeri sesuai pembukuan", dasar: "Pasal 24 UU PPh; Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" },
      { label: "Selisih kurs fiskal", nilai: "realisasi dan penjabaran akhir tahun diakui sesuai pembukuan yang taat asas (SAK)", dasar: "Pasal 4 ayat (1) huruf l, Pasal 6 ayat (1) huruf e UU PPh; PP 94/2010 Pasal 9", berlakuSejak: null }
    ]
  },
  topik: [
    {
      id: "C9.1", slug: "but-penghasilan-biaya", judul: "Timbulnya BUT, penghasilan BUT, dan biaya kantor pusat",
      estimasiMenit: 16, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "BUT adalah bentuk usaha yang dipakai orang pribadi atau badan luar negeri untuk menjalankan usaha atau kegiatan di Indonesia, antara lain tempat kedudukan manajemen, cabang, kantor perwakilan, pabrik, gudang, proyek konstruksi/instalasi, agen tidak bebas, agen asuransi asing, serta komputer atau agen elektronik penyelenggara transaksi elektronik (Pasal 2 ayat (5) UU PPh).",
        "Pemberian jasa dalam bentuk apa pun oleh pegawai atau orang lain menimbulkan BUT bila dilakukan lebih dari 60 hari dalam jangka waktu 12 bulan — periode 12 bulan bergulir, bukan tahun kalender, dan hari semua personel digabung. Bila ada P3B dan SKD sah, definisi dan time test BUT dalam P3B yang dipakai.",
        "BUT adalah subjek pajak luar negeri yang perlakuan perpajakannya dipersamakan dengan subjek pajak badan: wajib NPWP, pembukuan, angsuran PPh Pasal 25, dan SPT Tahunan PPh Badan dengan tarif 22%. Sebaliknya, Pasal 3 ayat (1) mengecualikan dari subjek pajak: kantor perwakilan negara asing, pejabat diplomatik/konsulat asing (bukan WNI, tanpa penghasilan lain di Indonesia, timbal balik), organisasi internasional yang ditetapkan Menteri Keuangan, dan pejabatnya; kantor perwakilan perusahaan asing tetap BUT dan staf lokal WNI kedutaan tetap subjek pajak dalam negeri.",
        "Objek BUT (Pasal 5 ayat (1)): (a) penghasilan dari usaha/kegiatan BUT dan dari harta yang dimiliki atau dikuasainya; (b) penghasilan kantor pusat dari usaha, penjualan barang, atau pemberian jasa di Indonesia yang sejenis dengan usaha BUT (force of attraction); (c) penghasilan Pasal 26 kantor pusat yang berhubungan efektif dengan harta atau kegiatan BUT. Bila kantor pusat berkedudukan di negara mitra P3B dan SKD sah, huruf b hanya dapat diterapkan sepanjang pasal laba usaha P3B memuat klausul force of attraction serupa.",
        "Biaya administrasi kantor pusat boleh dikurangkan sepanjang berkaitan dengan usaha atau kegiatan BUT (Pasal 5 ayat (3) huruf a UU PPh; KEP-62/PJ./1995), paling tinggi sebanding peredaran usaha BUT terhadap peredaran usaha seluruh perusahaan di dunia; bagian untuk kegiatan kantor pusat di negara lain dikoreksi positif.",
        "Royalti atau imbalan penggunaan harta, imbalan jasa manajemen dan jasa lain, serta bunga yang dibayar BUT kepada kantor pusat tidak boleh dibiayakan, kecuali bunga yang berkenaan dengan usaha perbankan (Pasal 5 ayat (3)).",
        "Pembayaran pihak Indonesia kepada BUT yang terdaftar atas jasa dipotong PPh Pasal 23 (bukti potong BPPU), bukan PPh Pasal 26; PPh 22 dan PPh 23 yang dipotong/dipungut menjadi kredit pajak BUT.",
        "Kewajiban pajak subjektif subjek pajak luar negeri (Pasal 2A UU PPh): yang menjalankan usaha atau melakukan kegiatan melalui BUT dimulai saat mulai menjalankan usaha atau kegiatan melalui BUT dan berakhir saat tidak lagi menjalankannya (ayat (3)); yang menerima penghasilan dari Indonesia tanpa BUT dimulai saat menerima atau memperoleh penghasilan dari Indonesia dan berakhir saat tidak lagi menerimanya (ayat (4)). Pendaftaran NPWP atau penghapusannya tidak menentukan saat itu. Bila kewajiban subjektif dimulai atau berakhir di tengah tahun, kewajiban pajaknya dihitung untuk bagian tahun pajak tersebut. Pembanding: badan dalam negeri dimulai saat didirikan atau bertempat kedudukan di Indonesia (B6.1); subjek pajak luar negeri tanpa BUT memenuhi kewajibannya melalui pemotongan PPh Pasal 26 yang bersifat final."
      ],
      poinKunci: [
        { label: "Time test BUT jasa (domestik)", nilai: "> 60 hari dalam jangka waktu 12 bulan", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tarif PPh BUT", nilai: "22% × PKP (tarif badan)", dasar: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" },
        { label: "Pembayaran ke kantor pusat yang tidak boleh dibiayakan", nilai: "royalti, jasa manajemen/jasa lain, bunga (kecuali usaha perbankan)", dasar: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01" },
        { label: "Force of attraction", nilai: "usaha/penjualan/jasa kantor pusat yang sejenis di Indonesia + penghasilan Ps. 26 yang berhubungan efektif", dasar: "Pasal 5 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2001-01-01" },
        { label: "Biaya administrasi kantor pusat", nilai: "boleh sepanjang berkaitan dengan usaha BUT; paling tinggi sebanding peredaran usaha BUT terhadap seluruh perusahaan", dasar: "Pasal 5 ayat (3) huruf a UU PPh; Pasal 2 KEP-62/PJ./1995", berlakuSejak: "2001-01-01" },
        { label: "Kewajiban subjektif SPLN dengan BUT", nilai: "Mulai saat menjalankan usaha/kegiatan melalui BUT; berakhir saat tidak lagi", dasar: "Pasal 2A ayat (3) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kewajiban subjektif SPLN tanpa BUT", nilai: "Mulai saat menerima penghasilan dari Indonesia; berakhir saat tidak lagi menerimanya", dasar: "Pasal 2A ayat (4) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (1) huruf c, ayat (1a), ayat (4) huruf b, dan ayat (5) UU PPh", catatan: "BUT sebagai subjek pajak dan daftar bentuk BUT" },
        { pasal: "Pasal 5 ayat (1)–(3) UU PPh", catatan: "objek BUT, biaya kantor pusat, pembayaran ke kantor pusat" },
        { pasal: "PMK 35/PMK.03/2019", catatan: "penentuan BUT dan kewajiban pendaftaran" },
        { pasal: "KEP-62/PJ/1995", catatan: "biaya administrasi kantor pusat yang boleh dibebankan" },
        { pasal: "Pasal 23 ayat (1) UU PPh", catatan: "pemotongan atas pembayaran kepada BUT" },
        { pasal: "Pasal 2A ayat (3) dan (4) UU PPh", catatan: "awal dan akhir kewajiban subjektif subjek pajak luar negeri (dengan dan tanpa BUT)" }
      ],
      jebakan: [
        { teks: "Menghitung 60 hari per tahun kalender atau per orang — yang benar periode 12 bulan bergulir dan seluruh personel digabung", tagSebab: "salah-baca" },
        { teks: "Lupa menambahkan laba penjualan langsung kantor pusat atas barang sejenis (force of attraction) ke penghasilan BUT", tagSebab: "lupa-pasal" },
        { teks: "Mengoreksi seluruh biaya administrasi kantor pusat — yang dikoreksi hanya bagian yang tidak berkaitan dengan BUT", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Laba komersial BUT (bukan bank) Rp5.000.000.000 sudah dikurangi royalti kepada kantor pusat Rp600.000.000 dan bunga pinjaman kantor pusat Rp250.000.000. Kantor pusat juga menjual langsung barang sejenis ke Indonesia dengan laba neto Rp400.000.000. Berapa penghasilan neto fiskal BUT?",
        jawaban: "Rp6.250.000.000",
        langkah: [["Laba komersial", "Rp5.000.000.000"], ["+ royalti ke kantor pusat (Ps. 5 ayat (3) huruf a)", "Rp600.000.000"], ["+ bunga ke kantor pusat (Ps. 5 ayat (3) huruf c)", "Rp250.000.000"], ["+ force of attraction (Ps. 5 ayat (1) huruf b)", "Rp400.000.000"], ["Penghasilan neto fiskal", "Rp6.250.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C9.2", slug: "branch-profit-tax", judul: "Branch profit tax Pasal 26 ayat (4) dan penanaman kembali",
      estimasiMenit: 12, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "PKP BUT sesudah dikurangi PPh badan dikenai PPh Pasal 26 ayat (4) sebesar 20% (branch profit tax/BPT), kecuali seluruhnya ditanamkan kembali di Indonesia (Pasal 1 ayat (3) PMK 14/PMK.03/2011).",
        "Dasar BPT = PKP (setelah kompensasi kerugian) − PPh badan terutang; bukan laba komersial dan bukan PKP sebelum pajak. Pengecualian hanya diberikan bila seluruh PKP sesudah dikurangi PPh ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011); penanaman kembali sebagian tidak mengurangi dasar BPT. Bila BUT juga memperoleh penghasilan yang dikenai PPh final (mis. bunga deposito atau jasa giro), penghasilan itu ikut masuk dasar setelah dikurangi PPh finalnya: dasar = (PKP + penghasilan final) − (PPh badan + PPh final) (Pasal 6 PMK 14/PMK.03/2011; petunjuk Lampiran 12A PER-11/PJ/2025).",
        "Bila kantor pusat berkedudukan di negara mitra P3B dan SKD sah, tarif BPT mengikuti batas dalam P3B (sering 10%–15%, ada yang lebih rendah); tarif yang dipakai selalu tarif yang disebut P3B terkait.",
        "BPT terutang walaupun laba tidak dikirim ke kantor pusat — berbeda dengan anak perusahaan PT PMA yang baru memotong PPh Pasal 26 saat dividen dibayarkan atau disediakan untuk dibayarkan.",
        "Bentuk penanaman kembali (PMK 14/PMK.03/2011): penyertaan modal pada perusahaan yang baru didirikan di Indonesia sebagai pendiri/peserta pendiri, penyertaan modal pada perusahaan yang sudah berdiri di Indonesia, pembelian aktiva tetap yang digunakan BUT, atau investasi aktiva tidak berwujud yang digunakan BUT. Deposito, obligasi, dan surat utang lain bukan bentuk penanaman kembali.",
        "Syarat penanaman kembali (Pasal 2 dan Pasal 3 PMK 14/PMK.03/2011): dilakukan paling lama pada akhir tahun pajak berikutnya; penyertaan pada perusahaan baru tidak dialihkan paling sedikit 2 tahun sejak perusahaan itu berproduksi komersial (dan perusahaan baru aktif paling lama 1 tahun sejak didirikan); penyertaan pada perusahaan yang sudah berdiri, aktiva tetap, dan aktiva tidak berwujud tidak dialihkan paling sedikit 3 tahun; bentuk penanaman diberitahukan dengan lampiran SPT Tahunan tahun laba diperoleh dan realisasinya dengan SPT Tahunan tahun realisasi. Bila syarat tidak lagi dipenuhi, BPT atas PKP sesudah PPh itu terutang sejak PKP diperoleh dan dikenai sanksi (Pasal 2 ayat (5)).",
        "BPT bersifat final (Pasal 26 ayat (5)), disetor sendiri oleh BUT, tidak dapat dikreditkan maupun dibiayakan, dan penghitungannya disajikan pada Lampiran 12A SPT Tahunan PPh Badan bentuk PER-11/PJ/2025, sedangkan pemberitahuan penanaman kembali pada Lampiran 12B (format 1771 lama untuk tahun pajak sampai 2024: lampiran khusus 6A)."
      ],
      poinKunci: [
        { label: "Tarif BPT domestik", nilai: "20% × (PKP − PPh badan); bila ada penghasilan yang dikenai PPh final: 20% × (PKP + penghasilan final − PPh badan − PPh final)", dasar: "Pasal 26 ayat (4) UU PPh; Pasal 6 PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01" },
        { label: "Tarif BPT P3B", nilai: "sesuai P3B (mis. 10% atau 12,5%) bila SKD sah", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" },
        { label: "Bentuk penanaman kembali", nilai: "saham perusahaan baru/berdiri, aktiva tetap BUT, aktiva tidak berwujud BUT", dasar: "PMK 14/PMK.03/2011" },
        { label: "Syarat waktu", nilai: "seluruh laba setelah pajak; paling lama akhir tahun pajak berikutnya; tidak dialihkan 2 tahun sejak produksi komersial (penyertaan sebagai pendiri) atau 3 tahun (penyertaan pada perusahaan yang sudah berdiri, aktiva tetap, aktiva tidak berwujud)", dasar: "Pasal 1 ayat (3) dan Pasal 2 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" },
        { label: "Sifat", nilai: "final, disetor sendiri, tidak dikreditkan/dibiayakan", dasar: "Pasal 26 ayat (5) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 26 ayat (4) dan ayat (5) UU PPh", catatan: "tarif 20% atas PKP sesudah PPh BUT; sifat final" },
        { pasal: "PMK 14/PMK.03/2011", catatan: "bentuk dan syarat penanaman kembali; Pasal 6: penghasilan yang dikenai PPh final ikut masuk dasar setelah dikurangi PPh finalnya" },
        { pasal: "PMK 112/2025", catatan: "syarat penerapan tarif P3B (SKD)" }
      ],
      jebakan: [
        { teks: "Menghitung BPT dari PKP sebelum dikurangi PPh badan, atau dari laba komersial", tagSebab: "salah-hitung" },
        { teks: "Memakai 20% padahal stem menyebut P3B dengan SKD sah, atau sebaliknya memakai tarif P3B padahal SKD tidak ada", tagSebab: "lupa-pasal" },
        { teks: "Menganggap deposito/obligasi sebagai penanaman kembali, atau penanaman setelah akhir tahun pajak berikutnya tetap membebaskan BPT", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PKP BUT tahun 2025 Rp1.000.000.000, tidak ada penanaman kembali, dan kantor pusat berkedudukan di negara tanpa P3B dengan Indonesia. Berapa PPh Pasal 26 ayat (4)?",
        jawaban: "Rp156.000.000",
        langkah: [["PPh badan 22% × Rp1.000.000.000", "Rp220.000.000"], ["PKP sesudah PPh", "Rp780.000.000"], ["Tarif domestik", "20%"], ["BPT = 20% × Rp780.000.000", "Rp156.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C9.3", slug: "pph24-kredit-luar-negeri", judul: "Kredit pajak luar negeri Pasal 24",
      estimasiMenit: 16, jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "WP badan dalam negeri dipajaki atas penghasilan dari seluruh dunia; PPh yang dibayar atau terutang di luar negeri atas penghasilan itu dapat dikreditkan terhadap PPh terutang dalam tahun pajak yang sama (Pasal 24 ayat (1)).",
        "Metode kredit biasa (ordinary credit) per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): kredit = nilai terkecil antara pajak luar negeri yang benar-benar dibayar/terutang (sesuai P3B), batas maksimum (penghasilan neto jenis itu dari negara itu ÷ PKP × PPh terutang), dan PPh terutang seluruhnya (bila penghasilan luar negeri melebihi PKP).",
        "Batas dihitung terpisah untuk setiap jenis penghasilan dari setiap negara: laba cabang dan royalti dari negara yang sama mempunyai batas masing-masing, dan sisa batas satu jenis tidak dapat dipakai untuk pajak jenis lain. Kerugian usaha cabang di luar negeri tidak digabungkan dalam menghitung PKP (Pasal 4 ayat (3) PMK 192/PMK.03/2018).",
        "Negara sumber (Pasal 24 ayat (3)): saham/sekuritas — negara badan penerbit; bunga, royalti, sewa harta gerak — negara pembayar; sewa harta tak gerak — negara letak harta; jasa — negara pembayar; BUT — negara BUT; harta tetap — negara letak harta.",
        "Kelebihan pajak luar negeri di atas batas tidak dapat dikreditkan, tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h), tidak dapat dikompensasikan ke tahun berikutnya, dan tidak dapat direstitusi.",
        "Bila pajak luar negeri yang sudah dikreditkan kemudian dikurangkan atau dikembalikan, PPh terutang ditambah sebesar jumlah itu pada tahun pengurangan/pengembalian (Pasal 24 ayat (5)).",
        "Dividen luar negeri dan laba setelah pajak BUT luar negeri yang diinvestasikan di Indonesia sesuai Pasal 4 ayat (3) huruf f angka 2 bukan objek PPh, sehingga pajak luar negeri atasnya tidak dapat dikreditkan. Kredit diajukan bersama SPT Tahunan dengan bukti pembayaran pajak luar negeri; untuk tahun pajak 2025 dan seterusnya dirinci pada Lampiran 3 Bagian A SPT Tahunan PPh Badan bentuk PER-11/PJ/2025, lalu jumlahnya dibawa ke Induk Bagian E angka 13 (format 1771 lama, hanya sampai tahun pajak 2024: lampiran khusus 7A)."
      ],
      poinKunci: [
        { label: "Metode", nilai: "ordinary credit, batas per jenis penghasilan untuk tiap negara", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
        { label: "Batas maksimum per jenis penghasilan tiap negara", nilai: "(neto LN jenis itu dari negara itu ÷ PKP) × PPh terutang, maks. PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018" },
        { label: "Rugi usaha di luar negeri", nilai: "tidak digabung dalam PKP", dasar: "PMK 192/PMK.03/2018" },
        { label: "Pengembalian pajak luar negeri", nilai: "PPh terutang ditambah pada tahun pengembalian", dasar: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Sumber bunga/royalti", nilai: "negara tempat pihak pembayar/yang dibebani berkedudukan", dasar: "Pasal 24 ayat (3) huruf b UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 24 ayat (1)–(5) UU PPh", catatan: "kredit pajak luar negeri, batas, negara sumber, pengembalian" },
        { pasal: "PMK 192/PMK.03/2018", catatan: "pelaksanaan kredit pajak luar negeri (nomor mengikuti kurikulum; literatur lama merujuk KMK 164/KMK.03/2002)" },
        { pasal: "Pasal 9 ayat (1) huruf h UU PPh", catatan: "PPh tidak dapat dibiayakan" },
        { pasal: "Pasal 4 ayat (3) huruf f angka 2 UU PPh s.t.d.t.d. UU 7/2021", catatan: "dividen dan laba BUT luar negeri yang diinvestasikan di Indonesia" }
      ],
      jebakan: [
        { teks: "Memakai batas menyeluruh (overall limitation) atau menggabungkan semua jenis penghasilan dari satu negara dalam satu batas; yang benar per jenis penghasilan untuk tiap negara", tagSebab: "salah-klasifikasi" },
        { teks: "Mengurangkan rugi cabang luar negeri dari PKP", tagSebab: "lupa-pasal" },
        { teks: "Mengkreditkan batas maksimum padahal pajak luar negeri yang dibayar lebih kecil — ambil nilai terkecil", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "PT C (2025): neto dalam negeri Rp2.000.000.000; negara X neto Rp1.000.000.000 dengan pajak X Rp300.000.000; negara Y neto Rp500.000.000 dengan pajak Y Rp50.000.000; negara Z rugi Rp200.000.000. Tanpa Pasal 31E. Berapa kredit PPh Pasal 24?",
        jawaban: "Rp270.000.000",
        langkah: [["PKP = 2.000 + 1.000 + 500 juta (rugi Z tidak digabung)", "Rp3.500.000.000"], ["PPh terutang 22%", "Rp770.000.000"], ["Batas X = 1.000/3.500 × 770 juta → kredit min(300; 220)", "Rp220.000.000"], ["Batas Y = 500/3.500 × 770 juta = 110 juta → kredit min(50; 110)", "Rp50.000.000"], ["Total kredit PPh Pasal 24", "Rp270.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C9.4", slug: "afiliasi-lintas-negara", judul: "Transaksi afiliasi lintas negara, PKKU, dan dokumentasi",
      estimasiMenit: 16, jenisDominan: ["kasus", "hitung"],
      ringkasan: [
        "Hubungan istimewa (Pasal 18 ayat (4)): kepemilikan paling rendah 25% langsung atau tidak langsung, hubungan antara dua WP yang sama-sama dimiliki ≥ 25% oleh pihak yang sama, penguasaan manajemen atau teknologi, serta hubungan keluarga sedarah/semenda lurus dan ke samping satu derajat.",
        "Pasal 18 ayat (3): DJP berwenang menentukan kembali besarnya penghasilan dan pengurangan serta menentukan utang sebagai modal sesuai prinsip kewajaran dan kelaziman usaha (PKKU).",
        "PMK 172/2023 (berlaku 29 Desember 2023) menyatukan PKKU, dokumentasi harga transfer, MAP, dan APA serta mencabut PMK 213/PMK.03/2016, PMK 49/PMK.03/2019, dan PMK 22/PMK.03/2020; harga transfer ditetapkan ex-ante berdasarkan data saat transaksi.",
        "Tahapan PKKU: identifikasi transaksi dan karakteristik, analisis kesebandingan, pemilihan metode (CUP, harga penjualan kembali, biaya-plus, TNMM, pembagian laba, dan metode lain), lalu penentuan harga wajar. Jasa intra-grup wajib lolos uji manfaat: aktivitas pemegang saham dan jasa duplikatif bukan biaya.",
        "Rentang kewajaran: dua pembanding membentuk rentang nilai minimum sampai maksimum, tiga atau lebih pembanding membentuk rentang interkuartil. Harga transfer yang tidak wajar disesuaikan ke titik yang paling tepat di dalam rentang sesuai kesebandingannya, atau ke median bila titik itu tidak dapat ditentukan (Pasal 12 ayat (6) dan (7) PMK 172/2023).",
        "Dokumen Induk dan Dokumen Lokal wajib bila peredaran bruto tahun sebelumnya > Rp50 miliar, atau transaksi afiliasi barang berwujud > Rp20 miliar, atau jasa/bunga/harta tak berwujud/lainnya > Rp5 miliar, atau ada afiliasi di yurisdiksi bertarif PPh di bawah 22%; tersedia paling lama 4 bulan setelah akhir tahun pajak dan ikhtisarnya dilampirkan pada SPT. CbCR: entitas induk dengan peredaran bruto konsolidasi ≥ Rp11 triliun, 12 bulan setelah akhir tahun pajak.",
        "Secondary adjustment: selisih koreksi harga transfer diperlakukan sebagai dividen kepada pemegang saham afiliasi (PPh Pasal 26 bila di luar negeri), kecuali selisih ditambahkan atau dikembalikan dalam bentuk kas atau setara kas sebelum surat ketetapan pajak terbit, dan/atau WP menyetujui penentuan harga transfer oleh DJP (Pasal 37 ayat (4) dan ayat (5) PMK 172/2023). Selisih dari penyesuaian sendiri oleh WP juga diperlakukan sebagai dividen (Pasal 37 ayat (1) huruf b)."
      ],
      poinKunci: [
        { label: "Hubungan istimewa (kepemilikan)", nilai: "≥ 25% langsung/tidak langsung", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Ambang Dokumen Induk/Lokal", nilai: "omzet > Rp50 M; barang afiliasi > Rp20 M; lainnya > Rp5 M; afiliasi bertarif < 22%", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Ketersediaan dokumen TP", nilai: "paling lama 4 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "CbCR", nilai: "peredaran konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Penyesuaian di luar rentang", nilai: "ke titik paling tepat dalam rentang; median bila titik itu tidak dapat ditentukan", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Secondary adjustment", nilai: "selisih dianggap dividen, kecuali kas/setara kas sebesar selisih ditambahkan atau dikembalikan sebelum surat ketetapan pajak terbit, dan/atau WP menyetujui penentuan harga transfer oleh DJP", dasar: "Pasal 37 ayat (1), ayat (4), dan ayat (5) PMK 172/2023", berlakuSejak: "2023-12-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) dan ayat (4) UU PPh", catatan: "kewenangan koreksi dan definisi hubungan istimewa" },
        { pasal: "PMK 172/2023", catatan: "PKKU, dokumentasi, secondary adjustment, MAP, APA" },
        { pasal: "Pasal 26 ayat (1) UU PPh", catatan: "PPh 26 atas dividen (termasuk dividen dari secondary adjustment)" },
        { pasal: "Pasal 4 ayat (1) huruf e UU PPN; PMK 131/2024", catatan: "PPN pemanfaatan JKP dari luar Daerah Pabean, DPP nilai lain 11/12" }
      ],
      jebakan: [
        { teks: "Menganggap kriteria dokumentasi bersifat kumulatif; cukup satu kriteria terpenuhi", tagSebab: "salah-baca" },
        { teks: "Mengoreksi otomatis ke kuartil terdekat; yang dipakai titik paling tepat sesuai kesebandingan, atau median bila titik itu tidak dapat ditentukan", tagSebab: "salah-baca" },
        { teks: "Lupa bahwa kepemilikan tidak langsung (dikalikan berjenjang) dan sesama anak perusahaan juga berhubungan istimewa", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PT E menjual 100.000 unit kepada induknya di luar negeri seharga Rp8.000/unit. Rentang interkuartil CUP Rp9.000–Rp11.000, median Rp10.000; titik yang paling tepat di dalam rentang tidak dapat ditentukan. Berapa koreksi primer dan tambahan PPh badan?",
        jawaban: "Koreksi Rp200.000.000; tambahan PPh Rp44.000.000",
        langkah: [["Harga di luar rentang → ke median", "Rp10.000/unit"], ["Selisih per unit", "Rp2.000"], ["Koreksi primer = 2.000 × 100.000", "Rp200.000.000"], ["Tambahan PPh 22%", "Rp44.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C9.5", slug: "pma-pembukuan-usd-fasilitas", judul: "PMA: pembukuan USD, dividen ke luar negeri, dan fasilitas investasi",
      estimasiMenit: 14, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Pembukuan wajib diselenggarakan di Indonesia dengan huruf Latin, angka Arab, mata uang Rupiah, dalam bahasa Indonesia atau bahasa asing yang diizinkan (Pasal 28 ayat (4) UU KUP); pembukuan bahasa asing dan mata uang selain Rupiah baru dapat diselenggarakan setelah izin Menteri Keuangan (ayat (8)).",
        "Yang dapat menyelenggarakan pembukuan bahasa Inggris dan USD antara lain WP PMA, kontrak karya, KKS migas, BUT, dan emiten di bursa luar negeri (PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019); permohonan/pemberitahuan kini lewat Coretax (PER-8/PJ/2025) dan diajukan paling lambat 3 bulan sebelum tahun buku dimulai.",
        "Dividen kepada pemegang saham luar negeri dipotong PPh Pasal 26 sebesar 20% dari bruto, atau tarif P3B bila SKD sah diserahkan sebelum atau pada saat pembayaran dan penerima adalah pemilik manfaat (PMK 112/2025); dividen kepada badan dalam negeri dikecualikan dari objek PPh.",
        "Bukti potong PPh Pasal 26 non-pegawai adalah BPNR; setor paling lambat tanggal 15 bulan berikutnya dan lapor SPT Masa PPh Unifikasi paling lambat tanggal 20 (PMK 81/2024; PER-11/PJ/2025).",
        "Tax allowance PP 78/2019: pengurangan penghasilan neto 30% dari penanaman modal aktiva tetap berwujud termasuk tanah (5% per tahun selama 6 tahun), penyusutan/amortisasi dipercepat, PPh dividen kepada WPLN 10% atau lebih rendah menurut P3B, dan kompensasi kerugian lebih lama sampai 10 tahun.",
        "Tax holiday (PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024) bagi industri pionir: investasi baru ≥ Rp500 miliar → pengurangan PPh badan 100% selama 5–20 tahun (Rp500 M–< 1 T: 5 tahun; 1–< 5 T: 7; 5–< 15 T: 10; 15–< 30 T: 15; ≥ 30 T: 20) lalu 50% selama 2 tahun; Rp100–< 500 miliar → 50% selama 5 tahun lalu 25% selama 2 tahun.",
        "Fasilitas penanaman modal dilaporkan pada Lampiran 13A (Daftar Fasilitas Penanaman Modal) SPT Tahunan PPh Badan menurut PER-11/PJ/2025 untuk tahun pajak 2025 dan seterusnya (format 1771 untuk tahun pajak sampai 2024: lampiran khusus 4A); fasilitas pengurangan PPh badan (tax holiday) didaftar pada Lampiran 13C (Daftar Fasilitas Pengurangan Pajak Penghasilan Badan). Grup dalam cakupan pajak minimum global tetap dapat dikenai DMTT bila fasilitas menurunkan ETR Indonesia di bawah 15%."
      ],
      poinKunci: [
        { label: "Pembukuan bahasa asing/USD", nilai: "setelah izin Menteri Keuangan", dasar: "Pasal 28 ayat (8) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Batas permohonan pembukuan USD", nilai: "paling lambat 3 bulan sebelum tahun buku dimulai", dasar: "Pasal 4 ayat (2) PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019; Pasal 21 ayat (3) PER-8/PJ/2025" },
        { label: "PPh 26 dividen", nilai: "20% bruto atau tarif P3B dengan SKD sah", dasar: "Pasal 26 ayat (1) UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" },
        { label: "Tax allowance", nilai: "30% investasi (6 × 5%), dividen 10%, rugi s.d. 10 tahun", dasar: "PP 78/2019 Pasal 3" },
        { label: "Tax holiday", nilai: "≥ Rp500 M: 100% 5–20 tahun; Rp100–< 500 M: 50% 5 tahun", dasar: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024" },
        { label: "Setor/lapor PPh 26", nilai: "tanggal 15 / tanggal 20 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 28 ayat (4) dan ayat (8) UU KUP", catatan: "bahasa dan mata uang pembukuan" },
        { pasal: "PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019; PER-8/PJ/2025", catatan: "izin pembukuan bahasa Inggris dan USD, layanan Coretax" },
        { pasal: "Pasal 26 ayat (1) UU PPh; PMK 112/2025", catatan: "PPh 26 dividen dan penerapan P3B" },
        { pasal: "PP 78/2019", catatan: "tax allowance" },
        { pasal: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024", catatan: "tax holiday" }
      ],
      jebakan: [
        { teks: "Menganggap status PMA otomatis membolehkan pembukuan USD tanpa izin", tagSebab: "lupa-pasal" },
        { teks: "Memotong PPh atas dividen kepada PT dalam negeri, atau memakai tarif P3B portofolio padahal fasilitas tax allowance memberi 10%", tagSebab: "salah-klasifikasi" },
        { teks: "Membebankan seluruh 30% tax allowance dalam satu tahun — yang benar 5% per tahun selama 6 tahun", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "PT PMA membagikan dividen Rp2.000.000.000 kepada induknya (memiliki 60% saham) di negara mitra P3B dengan tarif dividen 10% untuk kepemilikan ≥ 25%; SKD sah. Berapa PPh Pasal 26 yang dipotong?",
        jawaban: "Rp200.000.000",
        langkah: [["Kepemilikan 60% ≥ 25% → tarif P3B", "10%"], ["PPh 26 = 10% × Rp2.000.000.000", "Rp200.000.000"], ["Tanpa SKD (pembanding)", "20% = Rp400.000.000"]]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: batas 3 bulan permohonan pembukuan USD (Pasal 4 ayat (2) PMK 196/PMK.03/2007 s.t.d.t.d. PMK 123/PMK.03/2019; Pasal 21 ayat (3) PER-8/PJ/2025) dan lapisan tax holiday (Pasal 2 PMK 130/PMK.010/2020). Yang belum pasti: Pasal 21 PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 membatasi usulan tax holiday paling lambat 31 Desember 2025, dan peraturan yang memperpanjang atau menggantinya belum ada di pustaka."
    },
    {
      id: "C9.6", slug: "pajak-minimum-global", judul: "Pajak minimum global (GloBE): IIR, DMTT, UTPR",
      estimasiMenit: 14, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "PMK 136/2024 (ditetapkan 31 Desember 2024) berlaku bagi WP badan anggota grup PMN dengan pendapatan konsolidasi ≥ EUR 750 juta pada paling sedikit 2 dari 4 tahun pajak sebelumnya.",
        "Tarif minimum efektif 15% dihitung per yurisdiksi (jurisdictional blending): ETR = pajak tercakup yang disesuaikan ÷ laba GloBE seluruh entitas konstituen di yurisdiksi itu — bukan per entitas.",
        "Pajak tambahan (top-up) = (15% − ETR) × laba lebih (laba GloBE − pengecualian berbasis substansi/SBIE atas gaji dan aset berwujud) ± penyesuaian, dikurangi DMTT yang memenuhi syarat.",
        "Tiga mekanisme: DMTT (top-up domestik atas entitas di Indonesia), IIR (entitas induk di Indonesia memungut top-up atas anak luar negeri sesuai porsi kepemilikan), dan UTPR (backstop). IIR dan DMTT berlaku tahun pajak 2025; UTPR tahun pajak 2026. Urutan: DMTT → IIR → UTPR.",
        "Entitas dikecualikan: entitas pemerintah, organisasi internasional, nirlaba, dana pensiun, serta dana investasi/properti yang menjadi entitas induk utama. De minimis: rata-rata pendapatan < EUR 10 juta dan laba < EUR 1 juta per yurisdiksi.",
        "Safe harbour transisi CbCR: uji de minimis, ETR sederhana (15% untuk tahun pajak yang dimulai 2024, 16% untuk 2025, 17% untuk 2026 sampai tahun pajak yang berakhir 30 Juni 2028), atau uji laba rutin (laba ≤ SBIE); satu uji lolos membuat top-up yurisdiksi dianggap nol.",
        "GloBE Information Return (GIR) dan Notifikasi disampaikan paling lama 15 bulan setelah akhir tahun pengenaan GloBE, atau paling lama 18 bulan untuk tahun pengenaan pertama grup masuk cakupan. SPT Tahunan PPh GloBE, DMTT, dan UTPR atas suatu tahun pengenaan dilaporkan sebagai SPT Tahun Pajak GloBE (tahun setelah tahun pengenaan), paling lama 4 bulan setelah akhir tahun itu, dan untuk tahun pengenaan pertama dapat diperpanjang paling lama 2 bulan; aturan pelaksana PER-6/PJ/2026 (4 Mei 2026). Tax holiday yang menurunkan ETR di bawah 15% memicu DMTT di Indonesia."
      ],
      poinKunci: [
        { label: "Ambang grup", nilai: "≥ EUR 750 juta pada ≥ 2 dari 4 tahun sebelumnya", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
        { label: "Tarif minimum efektif", nilai: "15% per yurisdiksi", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
        { label: "Mulai berlaku", nilai: "IIR dan DMTT TP 2025; UTPR TP 2026", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01" },
        { label: "Rumus top-up", nilai: "(15% − ETR) × (laba GloBE − SBIE) − DMTT", dasar: "PMK 136/2024" },
        { label: "Tenggat GIR", nilai: "15 bulan; 18 bulan tahun pertama", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04" }
      ],
      dasarHukum: [
        { pasal: "PMK 136/2024", catatan: "pajak minimum global: cakupan, IIR, UTPR, DMTT, ketentuan berlaku" },
        { pasal: "PER-6/PJ/2026", catatan: "aturan pelaksana dan pelaporan" },
        { pasal: "Model Rules GloBE OECD (2021) dan panduan administratif", catatan: "rujukan teknis safe harbour dan SBIE" }
      ],
      jebakan: [
        { teks: "Menghitung ETR per entitas — yang benar per yurisdiksi (blending)", tagSebab: "salah-klasifikasi" },
        { teks: "Mengalikan 15% (bukan selisih 15% − ETR) atau lupa mengurangkan SBIE", tagSebab: "salah-hitung" },
        { teks: "Menganggap UTPR sudah berlaku 2025 atau DMTT baru 2026", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Satu-satunya entitas grup di Indonesia (dalam cakupan PMK 136/2024) memiliki laba GloBE 2025 Rp200 miliar, pajak tercakup Rp10 miliar, SBIE Rp40 miliar. Berapa DMTT?",
        jawaban: "Rp16.000.000.000",
        langkah: [["ETR = 10 ÷ 200", "5%"], ["Persentase top-up = 15% − 5%", "10%"], ["Laba lebih = 200 − 40 miliar", "Rp160.000.000.000"], ["DMTT = 10% × Rp160 miliar", "Rp16.000.000.000"]]
      },
      verifikasi: "✅"
    }
  ],
  soal: [
    {
      id: "C9-001", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Nordhavn Subsea AS, perusahaan jasa inspeksi bawah laut yang berkedudukan di Negara Valoria (mitra P3B Indonesia), mengirim teknisinya ke anjungan PT Samudra Energi di Indonesia pada 20 Januari–28 Februari 2026, 1–15 April 2026, dan 1–20 September 2026 (setiap hari kehadiran dihitung). Pasal BUT dalam P3B Indonesia–Valoria menyatakan pemberian jasa menimbulkan BUT hanya bila berlangsung lebih dari 90 hari dalam periode 12 bulan, dan P3B tersebut tidak memuat pasal khusus imbalan jasa teknik. Nordhavn tidak memiliki kantor di Indonesia, menyampaikan SKD (Form DGT) yang sah sebelum pembayaran, dan merupakan pemilik manfaat. Imbalan jasa yang dibayar PT Samudra Energi Rp3.000.000.000. Perlakuan PPh yang tepat atas imbalan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Timbul BUT karena kehadiran 75 hari melebihi 60 hari; laba BUT dikenai PPh badan 22% dan branch profit tax setiap tahun",
        B: "Dipotong PPh Pasal 26 sebesar 20% × Rp3.000.000.000 = Rp600.000.000 yang bersifat final, karena P3B tidak memuat pasal jasa teknik",
        C: "Tidak timbul BUT menurut P3B (75 hari tidak melebihi 90 hari), sehingga imbalan merupakan laba usaha yang tidak dipotong PPh Pasal 26",
        D: "Dipotong PPh Pasal 23 sebesar 2% × Rp3.000.000.000 = Rp60.000.000 karena merupakan jasa teknik yang dilakukan di Indonesia"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Secara domestik 75 hari > 60 hari dalam 12 bulan menimbulkan BUT, tetapi P3B berlaku sebagai ketentuan khusus (Pasal 32A UU PPh) dengan ambang lebih dari 90 hari. Karena SKD sah dan kehadiran hanya 75 hari, tidak ada BUT; imbalan jasa adalah laba usaha (Pasal 7 P3B) yang hak pemajakannya ada di Valoria. Karena hak pemajakan ada di Valoria, PPh Pasal 26 tidak dipotong.",
        jejakHitung: [["20 Jan–28 Feb 2026", "40 hari"], ["1–15 Apr 2026", "15 hari"], ["1–20 Sep 2026", "20 hari"], ["Jumlah dalam 12 bulan", "75 hari"], ["Uji domestik > 60 hari", "terpenuhi"], ["Uji P3B > 90 hari (yang berlaku karena SKD sah)", "tidak terpenuhi → tanpa BUT"]],
        mengapaSalah: {
          A: "Memakai time test domestik 60 hari, padahal SKD sah membuat definisi BUT dalam P3B yang berlaku.",
          B: "Tarif 20% hanya dipakai bila SKD tidak sah; dengan SKD, laba usaha tanpa BUT tidak dipajaki Indonesia.",
          D: "PPh Pasal 23 hanya dipotong atas pembayaran kepada WP dalam negeri atau BUT; Nordhavn adalah WPLN tanpa BUT."
        },
        jebakan: "Peserta berhenti pada uji 60 hari domestik dan lupa memeriksa time test P3B yang disebut di stem."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, SKD)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-002", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C9-01",
      stem: "Data untuk soal ini dan dua soal berikutnya: Hanseatic Marine GmbH, berkedudukan di Negara Borealis (mitra P3B; pasal laba usaha P3B memuat klausul force of attraction terbatas atas penjualan barang sejenis, dan P3B membatasi pajak atas laba cabang 10%; SKD sah), menjalankan usaha penjualan suku cadang dan jasa perbaikan kapal melalui cabang (BUT) di Jakarta. Peredaran usaha BUT tahun pajak 2025 Rp62.000.000.000. Laba komersial BUT Rp9.500.000.000 setelah dikurangi: royalti merek kepada kantor pusat Rp1.100.000.000, imbalan jasa manajemen kepada kantor pusat Rp900.000.000, bunga pinjaman dari kantor pusat Rp400.000.000, dan alokasi biaya administrasi kantor pusat Rp600.000.000 yang seluruhnya berkaitan dengan kegiatan BUT. Kantor pusat juga menjual langsung suku cadang sejenis kepada pembeli di Indonesia tanpa melalui BUT dengan penjualan Rp8.000.000.000 dan harga pokok Rp6.800.000.000. Penghasilan neto fiskal BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp11.900.000.000", B: "Rp13.100.000.000", C: "Rp13.700.000.000", D: "Rp12.700.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Royalti, jasa manajemen, dan bunga kepada kantor pusat (BUT bukan bank) dikoreksi positif menurut Pasal 5 ayat (3); biaya administrasi kantor pusat yang berkaitan dengan BUT tetap boleh (ayat (2)); laba penjualan langsung kantor pusat atas barang sejenis digabung sebagai penghasilan BUT (force of attraction, ayat (1) huruf b).",
        jejakHitung: [["Laba komersial", "Rp9.500.000.000"], ["+ royalti ke kantor pusat", "Rp1.100.000.000"], ["+ jasa manajemen ke kantor pusat", "Rp900.000.000"], ["+ bunga ke kantor pusat", "Rp400.000.000"], ["+ laba penjualan sejenis kantor pusat (8.000 − 6.800 juta)", "Rp1.200.000.000"], ["Penghasilan neto fiskal", "Rp13.100.000.000"]],
        mengapaSalah: {
          A: "Lupa force of attraction: laba Rp1.200.000.000 dari penjualan langsung kantor pusat atas barang sejenis tidak digabung.",
          C: "Ikut mengoreksi biaya administrasi kantor pusat Rp600.000.000 yang seluruhnya berkaitan dengan BUT dan boleh dikurangkan.",
          D: "Menganggap bunga kepada kantor pusat boleh dibiayakan; pengecualian hanya untuk usaha perbankan."
        },
        jebakan: "Dua arah sekaligus: menambah pembayaran ke kantor pusat yang dilarang, tetapi tidak mengoreksi biaya administrasi yang sah."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b, ayat (2), dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "KEP-62/PJ/1995" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "C9-003", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C9-01",
      stem: "Lanjutan data Hanseatic Marine GmbH (BUT di Jakarta dari Negara Borealis yang P3B-nya memuat klausul force of attraction terbatas; peredaran usaha 2025 Rp62.000.000.000; laba komersial Rp9.500.000.000 setelah royalti ke kantor pusat Rp1.100.000.000, jasa manajemen ke kantor pusat Rp900.000.000, bunga ke kantor pusat Rp400.000.000, dan biaya administrasi kantor pusat yang terkait BUT Rp600.000.000; penjualan langsung kantor pusat atas suku cadang sejenis Rp8.000.000.000 dengan harga pokok Rp6.800.000.000). Selama 2025 BUT dipungut PPh Pasal 22 impor Rp450.000.000, dipotong PPh Pasal 23 oleh pelanggan jasa perbaikan Rp180.000.000, dan telah membayar PPh Pasal 25 Rp1.560.000.000. PPh Pasal 29 yang harus dilunasi BUT sebelum menyampaikan SPT Tahunan PPh Badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp428.000.000", B: "Rp872.000.000", C: "Rp1.713.800.000", D: "Rp692.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "final-nonfinal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penghasilan neto fiskal Rp13.100.000.000 dikenai tarif 22% (peredaran > Rp50 miliar sehingga tanpa Pasal 31E). PPh 22 impor, PPh 23, dan PPh 25 adalah kredit pajak BUT (Pasal 28). BPT Pasal 26 ayat (4) dihitung terpisah dan tidak masuk PPh Pasal 29.",
        jejakHitung: [["Neto fiskal = 9.500 + 1.100 + 900 + 400 + 1.200 juta", "Rp13.100.000.000"], ["PPh terutang 22%", "Rp2.882.000.000"], ["Kredit: PPh 22 + PPh 23 + PPh 25", "Rp2.190.000.000"], ["PPh Pasal 29", "Rp692.000.000"]],
        mengapaSalah: {
          A: "Memakai neto tanpa force of attraction (22% × Rp11.900.000.000 = Rp2.618.000.000) lalu dikurangi kredit Rp2.190.000.000.",
          B: "Menganggap PPh 23 yang dipotong atas jasa kepada BUT bersifat final sehingga tidak dikreditkan (Rp2.882.000.000 − Rp2.010.000.000).",
          C: "Menggabungkan branch profit tax Rp1.021.800.000 ke dalam PPh Pasal 29, padahal BPT final dan dihitung terpisah."
        },
        jebakan: "PPh 23 atas jasa kepada BUT adalah kredit pajak, bukan PPh final seperti PPh 26 kepada WPLN."
      },
      dasarHukum: [{ pasal: "Pasal 5 dan Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "C9-004",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-01",
      kutipan: "Pasal 26 ayat (4) UU PPh: Penghasilan Kena Pajak sesudah dikurangi Pajak Penghasilan dari suatu bentuk usaha tetap di Indonesia dikenai pajak sebesar 20%, kecuali penghasilan tersebut ditanamkan kembali di Indonesia, yang ketentuannya diatur dengan atau berdasarkan Peraturan Menteri Keuangan.",
      stem: "Lanjutan data Hanseatic Marine GmbH (BUT di Jakarta; peredaran usaha 2025 Rp62.000.000.000; laba komersial Rp9.500.000.000 setelah royalti, jasa manajemen, dan bunga kepada kantor pusat masing-masing Rp1.100.000.000, Rp900.000.000, dan Rp400.000.000 serta biaya administrasi kantor pusat terkait BUT Rp600.000.000; laba penjualan langsung kantor pusat atas suku cadang sejenis Rp1.200.000.000 yang ditarik melalui klausul force of attraction P3B; tanpa kompensasi kerugian; P3B membatasi pajak atas laba cabang 10% dan SKD sah). Pada Maret 2026 BUT membeli kapal kerja Rp4.000.000.000 sebagai aktiva tetap untuk kegiatannya di Indonesia yang bentuk dan waktunya memenuhi PMK 14/PMK.03/2011; sisa laba setelah pajak tidak ditanamkan kembali. Berdasarkan kutipan tersebut, PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp621.800.000", B: "Rp1.021.800.000", C: "Rp2.043.600.000", D: "Rp910.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Dasar BPT adalah PKP sesudah dikurangi PPh badan. Pengecualian penanaman kembali hanya berlaku bila seluruh PKP sesudah PPh ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011); kapal Rp4.000.000.000 hanya sebagian dari Rp10.218.000.000, sehingga tidak mengurangi dasar BPT. Tarif mengikuti batas P3B 10% karena SKD sah.",
        jejakHitung: [
          ["PKP", "Rp13.100.000.000"],
          ["PPh badan 22%", "Rp2.882.000.000"],
          ["PKP sesudah PPh", "Rp10.218.000.000"],
          ["Penanaman kembali (kapal kerja)", "Rp4.000.000.000 (tidak seluruhnya)"],
          ["Dasar BPT", "Rp10.218.000.000"],
          ["BPT = 10% × Rp10.218.000.000", "Rp1.021.800.000"]
        ],
        mengapaSalah: {
          A: "Mengurangkan kapal Rp4.000.000.000 dari dasar BPT (10% × Rp6.218.000.000); penanaman kembali sebagian tidak mengurangi dasar BPT.",
          C: "Memakai tarif domestik 20% (20% × Rp10.218.000.000), padahal SKD sah sehingga batas P3B 10% berlaku.",
          D: "Mengurangkan kapal dari PKP sebelum PPh badan ((13.100 − 4.000 juta) × 10%); dasar BPT adalah seluruh PKP sesudah PPh."
        },
        jebakan: "Penanaman kembali sebagian, walaupun bentuk dan waktunya sah, tidak mengurangi dasar BPT; pengecualian hanya bila seluruh PKP sesudah PPh ditanamkan kembali."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 PMK 14/PMK.03/2011 (penanaman kembali seluruh PKP sesudah PPh)", berlakuSejak: "2011-01-24" }, { pasal: "Pasal 5 PMK 14/PMK.03/2011 (tarif P3B)", berlakuSejak: "2011-01-24" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-005", topik: "C9.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 5 ayat (3) UU PPh (parafrase): Pembayaran kepada kantor pusat yang tidak dibolehkan dibebankan sebagai biaya adalah (a) royalti atau imbalan lainnya sehubungan dengan penggunaan harta, paten, atau hak-hak lainnya; (b) imbalan sehubungan dengan jasa manajemen dan jasa lainnya; (c) bunga, kecuali bunga yang berkenaan dengan usaha perbankan.",
      stem: "Cabang Bank Meridian (BUT bank asing yang kantor pusatnya di Negara Corvia) mencatat empat pembayaran kepada atau atas beban kantor pusat pada tahun pajak 2025: (1) bunga atas dana antarkantor yang dipakai untuk menyalurkan kredit kepada nasabah di Indonesia; (2) royalti penggunaan sistem core banking milik kantor pusat; (3) imbalan jasa manajemen regional; (4) alokasi biaya kampanye merek global kantor pusat untuk pasar Eropa yang tidak berkaitan dengan kegiatan cabang. Berdasarkan kutipan tersebut dan Pasal 5 ayat (2), seluruh pembayaran itu tidak dapat dibebankan sebagai biaya BUT, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "(2) royalti sistem core banking, karena digunakan langsung untuk operasi cabang",
        B: "(3) imbalan jasa manajemen regional, karena didukung perjanjian dan faktur",
        C: "(1) bunga dana antarkantor, karena berkenaan dengan usaha perbankan",
        D: "(4) alokasi biaya kampanye merek global, karena biaya administrasi kantor pusat boleh dialokasikan"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 5 ayat (3) huruf c mengecualikan bunga yang berkenaan dengan usaha perbankan, sehingga bunga dana antarkantor cabang bank yang dipakai untuk penyaluran kredit dapat dibiayakan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Royalti kepada kantor pusat termasuk Pasal 5 ayat (3) huruf a — tetap tidak boleh dibiayakan walaupun dipakai operasi cabang.",
          B: "Jasa manajemen kepada kantor pusat termasuk huruf b; adanya perjanjian tidak mengubah larangan.",
          D: "Biaya administrasi kantor pusat hanya boleh sepanjang berkaitan dengan usaha BUT (ayat (2)); kampanye pasar Eropa tidak berkaitan."
        },
        jebakan: "Pengecualian bunga hanya untuk usaha perbankan; untuk BUT non-bank seluruh bunga ke kantor pusat dikoreksi."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (2) dan ayat (3) huruf c UU PPh", berlakuSejak: "2001-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-006", topik: "C9.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Kalmar Pack AB (Negara Svealand, mitra P3B yang pasal laba usahanya memuat klausul force of attraction serupa Pasal 5 UU PPh) memiliki BUT di Surabaya yang menjual dan memasang mesin pengemas. Pada 2025 kantor pusat juga memperoleh langsung dari Indonesia: (1) laba neto Rp900.000.000 dari penjualan mesin pengemas tipe sama kepada PT Agro Lestari tanpa melalui BUT; (2) royalti Rp1.500.000.000 dari PT Sinar Plastik atas lisensi desain cetakan yang dikelola sepenuhnya oleh kantor pusat dan tidak berkaitan dengan BUT; (3) bunga Rp300.000.000 atas pinjaman kepada PT Agro Lestari yang dananya berasal dari kas BUT dan piutangnya dicatat serta ditagih oleh BUT. Menurut Pasal 5 ayat (1) UU PPh, penghasilan kantor pusat yang harus digabungkan sebagai penghasilan BUT adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) saja, yaitu Rp900.000.000", B: "(1) dan (3), yaitu Rp1.200.000.000", C: "(1), (2), dan (3), yaitu Rp2.700.000.000", D: "(2) dan (3), yaitu Rp1.800.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Huruf b menarik penjualan kantor pusat atas barang sejenis (item 1); huruf c menarik penghasilan Pasal 26 yang berhubungan efektif dengan harta/kegiatan BUT (item 3). Royalti item 2 tidak berhubungan efektif sehingga tetap PPh Pasal 26 yang dipotong PT Sinar Plastik (20% atau tarif P3B).",
        jejakHitung: [["(1) penjualan sejenis — Ps. 5 ayat (1) huruf b", "Rp900.000.000"], ["(3) bunga berhubungan efektif — Ps. 5 ayat (1) huruf c", "Rp300.000.000"], ["(2) royalti tidak berhubungan efektif → PPh 26", "Rp0"], ["Digabung ke penghasilan BUT", "Rp1.200.000.000"]],
        mengapaSalah: {
          A: "Hanya menerapkan force of attraction penjualan, lupa huruf c untuk penghasilan yang berhubungan efektif.",
          C: "Royalti yang tidak berhubungan efektif dengan BUT tidak ditarik; perlakuannya PPh Pasal 26.",
          D: "Penjualan barang sejenis justru contoh utama force of attraction, sedangkan royalti tidak ditarik."
        },
        jebakan: "Uji dua pintu: sejenis (huruf b) atau berhubungan efektif (huruf c); di luar itu tetap rezim PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-007", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Graha Mandiri memakai jasa konsultansi teknik dari Aurora Engineering Pty Ltd yang memiliki BUT terdaftar (NPWP dan NITKU BUT) di Jakarta. Faktur pajak BUT untuk Masa Agustus 2026 mencantumkan penggantian Rp500.000.000 dan PPN dengan DPP nilai lain 11/12. Kantor pusat Aurora berkedudukan di negara mitra P3B dan juga menyerahkan SKD kepada PT Graha Mandiri. Pemotongan PPh yang wajib dilakukan PT Graha Mandiri beserta bukti potongnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 23 Rp10.000.000 dengan bukti potong BPPU",
        B: "PPh Pasal 26 Rp100.000.000 dengan bukti potong BPNR",
        C: "PPh Pasal 23 Rp11.100.000 dengan bukti potong BPPU",
        D: "Tidak dipotong, karena SKD menjadikan imbalan sebagai laba usaha yang hanya dipajaki di negara domisili"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembayaran jasa kepada BUT dipotong PPh Pasal 23 (2% untuk jasa konsultan/teknik) dari jumlah bruto tanpa PPN dan dibuatkan BPPU. P3B justru memberi Indonesia hak memajaki laba yang diatribusikan ke BUT, sehingga SKD tidak membebaskan.",
        jejakHitung: [["DPP PPh 23 = penggantian (tanpa PPN)", "Rp500.000.000"], ["PPN = 12% × 11/12 × Rp500.000.000 (bukan bagian DPP PPh)", "Rp55.000.000"], ["Tarif jasa konsultan/teknik", "2%"], ["PPh Pasal 23 = 2% × Rp500.000.000", "Rp10.000.000"]],
        mengapaSalah: {
          B: "PPh 26 dan BPNR untuk WPLN tanpa BUT; Aurora bertransaksi melalui BUT yang terdaftar.",
          C: "Memasukkan PPN Rp55.000.000 ke dasar pemotongan (2% × Rp555.000.000).",
          D: "Pasal laba usaha P3B mengizinkan negara sumber memajaki laba yang diatribusikan kepada BUT."
        },
        jebakan: "Status penerima (BUT ber-NPWP) menentukan pasal: PPh 23, bukan PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 (jenis jasa lain)" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-008", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 2 ayat (5) UU PPh (parafrase): Bentuk usaha tetap adalah bentuk usaha yang dipergunakan oleh orang pribadi atau badan yang tidak didirikan dan tidak bertempat kedudukan di Indonesia untuk menjalankan usaha atau melakukan kegiatan di Indonesia, antara lain berupa ... pemberian jasa dalam bentuk apa pun oleh pegawai atau oleh orang lain, sepanjang dilakukan lebih dari 60 hari dalam jangka waktu 12 bulan.",
      stem: "Tannery Consult LLC, berkedudukan di negara yang belum memiliki P3B dengan Indonesia, mengirim dua konsultan berbeda ke pabrik PT Kulit Prima di Garut: konsultan pertama hadir 10 November–31 Desember 2025 dan konsultan kedua 5–25 Januari 2026, keduanya untuk satu kontrak jasa yang sama. Tannery tidak memiliki kantor di Indonesia. Berdasarkan kutipan tersebut, simpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak timbul BUT karena kehadiran pada tahun 2025 hanya 52 hari dan pada tahun 2026 hanya 21 hari, masing-masing di bawah 60 hari",
        B: "Tidak timbul BUT karena masing-masing konsultan hadir kurang dari 60 hari sehingga hari kehadirannya tidak digabung",
        C: "Timbul BUT, tetapi imbalan tetap dipotong PPh Pasal 26 20% yang bersifat final oleh PT Kulit Prima sehingga tidak ada SPT Tahunan BUT",
        D: "Timbul BUT karena jasa berlangsung 73 hari dalam jangka waktu 12 bulan; laba atas jasa itu dipajaki sebagai penghasilan BUT dengan tarif 22%"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Time test dihitung dalam jangka waktu 12 bulan bergulir (bukan per tahun kalender) dan mencakup jasa oleh pegawai atau orang lain sehingga hari kedua konsultan digabung: 73 hari > 60 hari. Tanpa P3B, ketentuan domestik berlaku penuh. BUT tersebut juga wajib mendaftarkan diri untuk memperoleh NPWP.",
        jejakHitung: [["10–30 Nov 2025", "21 hari"], ["1–31 Des 2025", "31 hari"], ["5–25 Jan 2026", "21 hari"], ["Jumlah dalam 12 bulan", "73 hari > 60 hari → BUT"]],
        mengapaSalah: {
          A: "Memecah hitungan per tahun kalender; kutipan menyebut jangka waktu 12 bulan.",
          B: "Kutipan menyebut jasa oleh pegawai atau orang lain — kehadiran seluruh personel untuk kegiatan yang sama digabung.",
          C: "Setelah BUT timbul, laba dipajaki sebagai subjek yang dipersamakan dengan badan (SPT Tahunan, tarif 22%), bukan PPh 26 final."
        },
        jebakan: "Kata kunci kutipan: “dalam jangka waktu 12 bulan” dan “oleh pegawai atau oleh orang lain”."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019 (penentuan BUT)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-009", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Fjord Logistics di Batam (kantor pusat di Negara Nordmark) mencatat laba komersial 2025 Rp4.250.000.000. Beban yang sudah dikurangkan meliputi: alokasi biaya administrasi kantor pusat Rp1.500.000.000, yang Rp400.000.000 di antaranya merupakan biaya kantor pusat untuk mengelola cabang di Vietnam; sanksi bunga STP PPh Pasal 25 Rp35.000.000; PPh Pasal 26 ayat (4) tahun pajak 2024 yang dibukukan sebagai beban Rp210.000.000; serta bunga pinjaman dari bank lokal Rp300.000.000. Penghasilan neto fiskal BUT tahun 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.495.000.000", B: "Rp5.995.000.000", C: "Rp4.895.000.000", D: "Rp5.195.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya bagian biaya administrasi kantor pusat yang tidak berkaitan dengan BUT (Rp400.000.000) dikoreksi; sanksi administrasi dan PPh (termasuk BPT) tidak dapat dibiayakan menurut Pasal 9 ayat (1); bunga bank lokal adalah biaya 3M yang sah.",
        jejakHitung: [["Laba komersial", "Rp4.250.000.000"], ["+ biaya kantor pusat untuk cabang Vietnam", "Rp400.000.000"], ["+ sanksi bunga STP", "Rp35.000.000"], ["+ PPh Pasal 26 ayat (4) yang dibebankan", "Rp210.000.000"], ["Penghasilan neto fiskal", "Rp4.895.000.000"]],
        mengapaSalah: {
          A: "Tidak mengoreksi Rp400.000.000 biaya kantor pusat yang tidak berkaitan dengan BUT.",
          B: "Mengoreksi seluruh Rp1.500.000.000 biaya administrasi kantor pusat, padahal Rp1.100.000.000 berkaitan dengan BUT.",
          D: "Ikut mengoreksi bunga bank lokal; larangan Pasal 5 ayat (3) hanya untuk bunga kepada kantor pusat."
        },
        jebakan: "Bedakan bunga kepada kantor pusat (dilarang) dengan bunga kepada pihak ketiga (boleh)."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (2) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h dan huruf k UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-010", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Sumber Tekstil membeli dua unit mesin tenun dari Weberei Anlagen GmbH (Negara Teutonia, mitra P3B) seharga Rp4.000.000.000 dengan penyerahan di pelabuhan muat Teutonia; PPh Pasal 22 impor dipungut saat pengeluaran barang dari kawasan pabean. Berdasarkan kontrak terpisah, dua teknisi Weberei melakukan supervisi pemasangan di pabrik Bandung selama 35 hari pada Maret–April 2026 dengan imbalan Rp600.000.000; Weberei tidak mempunyai kantor, pegawai tetap, atau agen di Indonesia. Pasal BUT dalam P3B Indonesia–Teutonia menetapkan pemberian jasa menimbulkan BUT bila lebih dari 60 hari dalam periode 12 bulan, dan P3B tidak memuat pasal khusus imbalan jasa teknik. Weberei menyerahkan SKD yang sah sebelum pembayaran. PPh Pasal 26 yang wajib dipotong PT Sumber Tekstil atas kedua pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp920.000.000, yaitu 20% × (Rp4.000.000.000 + Rp600.000.000), karena seluruh pembayaran kepada WPLN merupakan objek PPh Pasal 26",
        B: "Rp120.000.000, hanya atas imbalan supervisi (20% × Rp600.000.000) karena jasa dilakukan secara fisik di Indonesia oleh teknisi Weberei",
        C: "Rp12.000.000, yaitu PPh Pasal 23 sebesar 2% × Rp600.000.000 karena teknisi bekerja di Indonesia untuk PT Sumber Tekstil",
        D: "Rp0: harga mesin bukan objek PPh Pasal 26, dan imbalan supervisi adalah laba usaha tanpa BUT yang hanya dipajaki di Teutonia"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembayaran harga barang kepada penjual luar negeri bukan penghasilan yang dipotong PPh Pasal 26 (atas impornya berlaku PPh Pasal 22 impor). Imbalan jasa kepada WPLN pada dasarnya objek PPh Pasal 26 20%, tetapi karena SKD sah dan kehadiran 35 hari tidak melebihi 60 hari, tidak ada BUT sehingga imbalan itu laba usaha (Pasal 7 P3B) yang hanya dipajaki di Teutonia.",
        jejakHitung: [["Harga mesin (pembelian barang)", "bukan objek PPh Pasal 26 → Rp0"], ["Kehadiran teknisi dalam 12 bulan", "35 hari ≤ 60 hari → tanpa BUT"], ["Imbalan supervisi bila tanpa SKD", "20% × Rp600.000.000 = Rp120.000.000"], ["Imbalan supervisi dengan SKD sah (laba usaha, tanpa BUT)", "Rp0"], ["Total PPh Pasal 26", "Rp0"]],
        mengapaSalah: {
          A: "Pembelian barang bukan objek PPh Pasal 26, dan imbalan jasa terlindungi P3B karena SKD sah.",
          B: "Tarif 20% hanya dipakai bila SKD tidak sah; dengan SKD, laba usaha tanpa BUT tidak dipajaki Indonesia.",
          C: "PPh Pasal 23 hanya untuk penerima dalam negeri atau BUT; Weberei adalah WPLN tanpa BUT."
        },
        jebakan: "Pisahkan dulu jenis pembayarannya: harga barang (bukan objek PPh 26) berbeda dengan imbalan jasa (objek PPh 26 yang dapat dibebaskan P3B)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 22 ayat (1) huruf b UU PPh (PPh 22 impor)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, SKD)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "C9-011", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Rostov Machinery di Cikarang (kantor pusat berkedudukan di negara yang belum memiliki P3B dengan Indonesia) melaporkan laba komersial 2025 Rp3.100.000.000. Setelah koreksi fiskal positif, PKP 2025 menjadi Rp3.450.000.000 (peredaran usaha Rp57 miliar, tanpa kompensasi kerugian). Tidak ada penanaman kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp690.000.000", B: "Rp468.200.000", C: "Rp269.100.000", D: "Rp538.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dasar BPT adalah PKP dikurangi PPh badan, dengan tarif domestik 20% karena tidak ada P3B.",
        jejakHitung: [["PKP", "Rp3.450.000.000"], ["PPh badan 22%", "Rp759.000.000"], ["PKP sesudah PPh", "Rp2.691.000.000"], ["BPT 20%", "Rp538.200.000"]],
        mengapaSalah: {
          A: "Mengalikan 20% langsung dengan PKP tanpa mengurangkan PPh badan.",
          B: "Memakai laba komersial sebagai dasar (Rp3.100.000.000 − Rp759.000.000) × 20%.",
          C: "Memakai tarif 10% ala P3B padahal kantor pusat berada di negara tanpa P3B."
        },
        jebakan: "Dasar BPT berbasis fiskal (PKP), bukan laba akuntansi."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-012", topik: "C9.2", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "BUT Pacifica Dredging memperoleh laba setelah PPh tahun 2025 Rp5.000.000.000 dan ingin menanamkan kembali laba tersebut di Indonesia pada 2026 agar tidak terutang branch profit tax. Kantor pusat menyiapkan empat alternatif. Alternatif yang bukan merupakan bentuk penanaman kembali menurut PMK 14/PMK.03/2011 adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Penyertaan modal pada PT baru di Indonesia dengan kantor pusat sebagai pendiri",
        B: "Pembelian kapal keruk yang digunakan BUT untuk kegiatannya di Indonesia",
        C: "Penempatan deposito berjangka 24 bulan di bank BUMN atas nama BUT",
        D: "Investasi aktiva tidak berwujud berupa lisensi perangkat lunak operasional yang digunakan BUT di Indonesia"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Empat bentuk penanaman kembali: penyertaan modal pada perusahaan baru (sebagai pendiri/peserta pendiri), penyertaan modal pada perusahaan yang sudah berdiri, pembelian aktiva tetap untuk BUT, dan investasi aktiva tidak berwujud untuk BUT. Deposito adalah penempatan dana, bukan salah satu bentuk tersebut.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penyertaan modal pada perusahaan baru sebagai pendiri adalah bentuk penanaman kembali.",
          B: "Pembelian aktiva tetap yang digunakan BUT adalah bentuk penanaman kembali.",
          D: "Investasi aktiva tidak berwujud yang digunakan BUT adalah bentuk penanaman kembali."
        },
        jebakan: "Kata “bukan”: cari satu-satunya yang tidak ada dalam daftar PMK."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 14/PMK.03/2011 (bentuk penanaman kembali)" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C9-013",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Helios Solar (kantor pusat di Negara Aurelia; P3B membatasi pajak atas laba cabang 10%; SKD sah) memiliki PKP 2025 Rp2.500.000.000. Seluruh laba setelah PPh direncanakan untuk penyertaan modal pada PT Helios Panel Indonesia yang baru didirikan, tetapi akta pendirian dan penyetoran modal baru terlaksana pada 14 Februari 2027 karena perizinan tertunda. Pernyataan rencana penanaman kembali sudah dilampirkan pada SPT Tahunan 2025. Perlakuan PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Terutang Rp195.000.000 karena penanaman kembali baru dilakukan setelah berakhirnya tahun pajak berikutnya (2026)", B: "Tidak terutang karena pernyataan rencana penanaman kembali sudah dilampirkan pada SPT Tahunan 2025", C: "Terutang Rp390.000.000 karena keterlambatan penanaman kembali menggugurkan tarif P3B", D: "Terutang Rp250.000.000, yaitu 10% × PKP" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penanaman kembali harus dilakukan dalam tahun pajak berjalan atau paling lambat tahun pajak berikutnya (2026). Realisasi Februari 2027 tidak memenuhi syarat sehingga BPT terutang dengan tarif P3B 10% atas PKP sesudah PPh.",
        jejakHitung: [
          ["PKP", "Rp2.500.000.000"],
          ["PPh badan 22%", "Rp550.000.000"],
          ["PKP sesudah PPh", "Rp1.950.000.000"],
          ["Batas waktu penanaman kembali", "31 Desember 2026 — terlewati"],
          ["BPT 10%", "Rp195.000.000"]
        ],
        mengapaSalah: {
          B: "Pernyataan rencana tidak cukup; realisasi harus terjadi dalam batas waktu.",
          C: "Keterlambatan penanaman kembali tidak menggugurkan hak atas tarif P3B selama SKD sah.",
          D: "Dasar BPT adalah PKP sesudah dikurangi PPh, bukan PKP."
        },
        jebakan: "Perhatikan tanggal realisasi, bukan tanggal pernyataan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3), Pasal 2 ayat (1) huruf a, dan Pasal 5 PMK 14/PMK.03/2011 (syarat waktu penanaman kembali; tarif P3B)", berlakuSejak: "2011-01-24" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-014", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Kinabalu Timber di Samarinda (kantor pusat di Negara Kertania) mempunyai PKP 2025 Rp2.400.000.000 dan peredaran usaha Rp66 miliar. P3B Indonesia–Kertania mengatur dividen 15% (10% bila penerima memiliki paling sedikit 25% saham) dan pajak atas laba cabang (branch profit) 12,5%. Kantor pusat menyerahkan SKD yang sah dan tidak ada penanaman kembali. PPh Pasal 26 ayat (4) yang terutang adalah ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: { A: "Rp374.400.000", B: "Rp234.000.000", C: "Rp300.000.000", D: "Rp280.800.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dengan SKD sah, tarif BPT mengikuti ketentuan branch profit P3B (12,5%), bukan tarif dividen, dan dasarnya PKP sesudah PPh badan.",
        jejakHitung: [["PKP", "Rp2.400.000.000"], ["PPh badan 22%", "Rp528.000.000"], ["PKP sesudah PPh", "Rp1.872.000.000"], ["BPT 12,5%", "Rp234.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif domestik 20% padahal SKD sah (20% × Rp1.872.000.000).",
          C: "Mengalikan 12,5% dengan PKP sebelum dikurangi PPh badan.",
          D: "Memakai tarif dividen portofolio 15%; P3B memuat tarif khusus laba cabang 12,5%."
        },
        jebakan: "Tabel P3B memuat beberapa tarif — pilih baris branch profit, bukan dividen."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "C9-015",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Vector Seismic (kantor pusat di Negara Ostland) telah menghitung PPh Pasal 26 ayat (4) atas laba 2025 sebesar Rp180.000.000. Saat menyusun SPT Tahunan PPh Badan 2025, staf pajak mengusulkan beberapa perlakuan. Perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengkreditkan Rp180.000.000 terhadap PPh badan terutang 2025 sebagai pembayaran di muka dalam SPT Tahunan BUT", B: "Membebankan Rp180.000.000 sebagai biaya dalam menghitung penghasilan neto 2025 pada SPT Tahunan BUT", C: "Menunda penyetoran sampai laba benar-benar ditransfer ke kantor pusat di Negara Ostland", D: "Menyetor sendiri Rp180.000.000 sebagai PPh final dan menyajikan penghitungannya pada Lampiran 12A SPT Tahunan PPh Badan" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "BPT bersifat final (Pasal 26 ayat (5)), disetor sendiri oleh BUT, dan penghitungannya disajikan pada Lampiran 12A SPT Tahunan PPh Badan (PER-11/PJ/2025; pada formulir 1771 lama: lampiran khusus 6A).",
        jejakHitung: [],
        mengapaSalah: {
          A: "PPh final tidak dapat dikreditkan terhadap PPh badan.",
          B: "PPh (termasuk BPT) tidak dapat dibiayakan menurut Pasal 9 ayat (1) huruf h.",
          C: "BPT terutang atas PKP sesudah PPh tanpa menunggu pengiriman laba."
        },
        jebakan: "BPT: final, tidak dikreditkan, tidak dibiayakan, tidak menunggu transfer."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) dan ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C9-016",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      formulirRef: "1771.6A.1",
      stem: "Anda menyusun SPT Tahunan PPh Badan tahun pajak 2025 untuk sebuah BUT dengan bentuk formulir menurut PER-11/PJ/2025 dan perlu menyajikan penghitungan PPh Pasal 26 ayat (4) beserta pemberitahuan penanaman kembali laba setelah pajak. Lampiran yang tepat untuk keperluan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 12A (Penghitungan PPh Pasal 26 ayat (4)) dan Lampiran 12B (Pemberitahuan Penanaman Kembali Penghasilan Kena Pajak Sesudah Dikurangi Pajak bagi BUT)", B: "Lampiran 6 (Angsuran PPh Tahun Pajak Berjalan) dan Lampiran 7 (Penghitungan Kompensasi Kerugian Fiskal)", C: "Lampiran 10A (Daftar Transaksi yang Dipengaruhi Hubungan Istimewa) dan Lampiran 10B (Pernyataan Transaksi yang Dipengaruhi Hubungan Istimewa)", D: "Lampiran 3 (Daftar PPh yang Dipotong/Dipungut oleh Pihak Lain) dan Lampiran 4 (Penghasilan yang Dikenakan PPh Final dan yang Tidak Termasuk Objek Pajak)" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk tahun pajak 2025, SPT Tahunan PPh Badan memakai bentuk PER-11/PJ/2025: penghitungan PPh Pasal 26 ayat (4) BUT disajikan pada Lampiran 12A, dan bentuk serta realisasi penanaman kembali diberitahukan pada Lampiran 12B. Formulir 1771 lama (lampiran khusus 6A) hanya dipakai untuk tahun pajak sampai dengan 2024.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Lampiran 6 memuat angsuran PPh tahun berjalan dan Lampiran 7 kompensasi kerugian; nomor 6 tidak sama dengan lampiran khusus 6A format 1771 lama.",
          C: "Lampiran 10A dan 10B untuk transaksi hubungan istimewa, bukan penghitungan BPT.",
          D: "Lampiran 3 untuk PPh yang dipotong/dipungut pihak lain dan Lampiran 4 untuk penghasilan final dan bukan objek; BPT bukan kredit pajak."
        },
        jebakan: "Jangan memakai peta lampiran 1771 lama (6A BPT) untuk SPT tahun pajak 2025; di bentuk PER-11/PJ/2025 BPT ada di Lampiran 12A dan penanaman kembali di Lampiran 12B."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 85 ayat (1) huruf b dan Pasal 138 huruf a PER-11/PJ/2025 (bentuk SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C9-017", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "BUT Andes Copper Services (kantor pusat di negara tanpa P3B dengan Indonesia) memiliki penghasilan neto fiskal 2025 Rp5.000.000.000 dan sisa kerugian fiskal tahun 2023 yang masih dapat dikompensasikan Rp1.200.000.000. Peredaran usaha 2025 Rp71 miliar. Tidak ada penanaman kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp780.000.000", B: "Rp760.000.000", C: "Rp592.800.000", D: "Rp832.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "PKP dihitung setelah kompensasi kerugian (Pasal 6 ayat (2)); BPT = 20% × (PKP − PPh badan).",
        jejakHitung: [["Neto fiskal", "Rp5.000.000.000"], ["− kompensasi rugi 2023", "Rp1.200.000.000"], ["PKP", "Rp3.800.000.000"], ["PPh badan 22%", "Rp836.000.000"], ["PKP sesudah PPh", "Rp2.964.000.000"], ["BPT 20%", "Rp592.800.000"]],
        mengapaSalah: {
          A: "Lupa kompensasi kerugian: (Rp5.000.000.000 − Rp1.100.000.000) × 20%.",
          B: "Mengalikan 20% dengan PKP sebelum dikurangi PPh badan.",
          D: "Mengurangkan PPh badan dari neto sebelum kompensasi kerugian: (Rp5.000.000.000 − Rp836.000.000) × 20%."
        },
        jebakan: "Tiga langkah berurutan: kompensasi rugi → PPh 22% → BPT atas sisanya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-018",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Nordwind menimbang dua struktur untuk usaha di Indonesia yang diproyeksikan menghasilkan PKP Rp10 miliar per tahun, dengan rencana menahan seluruh laba selama tiga tahun: (i) cabang (BUT) atau (ii) anak perusahaan PT PMA yang 100% sahamnya dimiliki kantor pusat. Kantor pusat berkedudukan di negara tanpa P3B dengan Indonesia. Perbandingan perlakuan PPh atas laba yang ditahan selama tiga tahun itu yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "BUT dan PT PMA sama-sama terutang PPh Pasal 26 20% setiap tahun atas laba setelah pajak, walaupun laba itu tidak dibagikan atau dikirim ke kantor pusat", B: "BUT terutang PPh Pasal 26 ayat (4) setiap tahun walaupun laba tidak dikirim, sedangkan PT PMA baru memotong PPh Pasal 26 saat dividen terutang kepada induknya", C: "BUT dan PT PMA sama-sama tidak terutang PPh Pasal 26 sampai laba dikirim ke luar negeri, karena keduanya dimiliki penuh oleh kantor pusat yang sama", D: "PT PMA terutang PPh Pasal 26 setiap tahun atas laba ditahan sebagai dividen terselubung, sedangkan BUT tidak terutang apa pun sampai laba dikirim" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "BPT dikenakan atas PKP sesudah PPh BUT tanpa melihat pengiriman laba (kecuali seluruhnya ditanamkan kembali). Anak perusahaan berbadan hukum Indonesia memotong PPh 26 hanya ketika dividen terutang (dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Laba ditahan PT PMA belum menjadi dividen sehingga belum terutang PPh 26.",
          C: "BPT tidak menunggu pengiriman laba ke kantor pusat.",
          D: "Laba ditahan bukan dividen terselubung; justru BUT yang terutang BPT."
        },
        jebakan: "BPT adalah pajak atas laba cabang yang dianggap tersedia bagi kantor pusat, bukan pajak atas transfer kas."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf a dan ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-019", topik: "C9.3", tingkat: ["C"], jenis: "kasus", kesulitan: 2, kasusId: "V-C9-02",
      stem: "Data untuk soal ini dan tiga soal berikutnya: PT Prima Kencana (WP badan dalam negeri, peredaran bruto 2025 Rp240 miliar) memperoleh pada tahun pajak 2025: penghasilan neto dalam negeri Rp6.000.000.000; laba cabang (BUT) di Negara P sebelum pajak luar negeri Rp2.000.000.000 dengan pajak dibayar di P Rp500.000.000 (laba cabang tidak diinvestasikan di Indonesia sehingga tetap objek PPh); royalti bruto dari Negara Q Rp800.000.000 (tanpa biaya terkait) yang dipotong pajak Q Rp80.000.000; bunga bruto dari Negara R Rp500.000.000 yang dipotong pajak R Rp100.000.000; dan rugi cabang di Negara S Rp700.000.000. Tidak ada sisa kerugian fiskal tahun lalu. PPh terutang PT Prima Kencana tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.892.000.000", B: "Rp1.320.000.000", C: "Rp2.046.000.000", D: "Rp1.896.400.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "WP dalam negeri dipajaki atas penghasilan seluruh dunia (bruto sebelum pajak luar negeri), tetapi rugi usaha di luar negeri tidak digabungkan dalam PKP.",
        jejakHitung: [["Neto dalam negeri", "Rp6.000.000.000"], ["+ Negara P", "Rp2.000.000.000"], ["+ Negara Q", "Rp800.000.000"], ["+ Negara R", "Rp500.000.000"], ["Negara S (rugi) tidak digabung", "Rp0"], ["PKP", "Rp9.300.000.000"], ["PPh terutang 22%", "Rp2.046.000.000"]],
        mengapaSalah: {
          A: "Menggabungkan rugi Negara S: 22% × Rp8.600.000.000.",
          B: "Hanya memajaki penghasilan dalam negeri, padahal WPDN dipajaki atas penghasilan dari seluruh dunia.",
          D: "Menggabungkan penghasilan luar negeri setelah dikurangi pajak luar negeri (Rp2.620.000.000), lalu 22% × Rp8.620.000.000."
        },
        jebakan: "Penghasilan luar negeri digabung bruto sebelum pajak luar negeri; pajaknya diperhitungkan sebagai kredit, bukan pengurang penghasilan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PMK 192/PMK.03/2018 (rugi luar negeri tidak digabung)" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "C9-020",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-02",
      stem: "Lanjutan data PT Prima Kencana 2025 (neto dalam negeri Rp6.000.000.000; Negara P laba cabang Rp2.000.000.000 dengan pajak P Rp500.000.000; Negara Q royalti Rp800.000.000 dengan pajak Q Rp80.000.000; Negara R bunga Rp500.000.000 dengan pajak R Rp100.000.000; Negara S rugi cabang Rp700.000.000; tarif 22%, tanpa Pasal 31E). Jumlah kredit PPh Pasal 24 maksimum yang dapat dikreditkan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp620.000.000", B: "Rp680.000.000", C: "Rp572.000.000", D: "Rp726.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Kredit dihitung per jenis penghasilan untuk tiap negara (di sini tiap negara hanya punya satu jenis penghasilan): nilai terkecil antara pajak luar negeri yang dibayar dan batas (penghasilan dari sumber itu ÷ PKP × PPh terutang). Rugi Negara S tidak digabungkan.",
        jejakHitung: [
          ["PKP (tanpa rugi S)", "Rp9.300.000.000"],
          ["PPh terutang", "Rp2.046.000.000"],
          ["Batas P = 2.000/9.300 × 2.046 juta = 440 juta → min(500; 440)", "Rp440.000.000"],
          ["Batas Q = 176 juta → min(80; 176)", "Rp80.000.000"],
          ["Batas R = 110 juta → min(100; 110)", "Rp100.000.000"],
          ["Total kredit PPh Pasal 24", "Rp620.000.000"]
        ],
        mengapaSalah: {
          B: "Mengkreditkan seluruh pajak luar negeri (500 + 80 + 100 juta) tanpa batas.",
          C: "Memakai batas menyeluruh setelah rugi S digabung: 22% × (3.300 − 700 juta) = Rp572.000.000, padahal batas dihitung per jenis penghasilan untuk tiap negara.",
          D: "Menjumlahkan batas maksimum (440 + 176 + 110 juta) padahal yang dikreditkan adalah nilai terkecil."
        },
        jebakan: "Batas maksimum hanya plafon; untuk Q dan R yang dikreditkan pajak yang benar-benar dibayar."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018 (batas per jenis penghasilan untuk tiap negara)", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-021",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 1,
      kasusId: "V-C9-02",
      stem: "Lanjutan data PT Prima Kencana 2025: pajak yang dibayar cabang di Negara P Rp500.000.000, sedangkan batas maksimum kredit untuk Negara P Rp440.000.000, sehingga terdapat selisih Rp60.000.000. Perlakuan atas selisih Rp60.000.000 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dibebankan sebagai biaya dalam menghitung penghasilan neto 2025 karena benar-benar telah dibayar di Negara P", B: "Dikompensasikan sebagai kredit pajak ke tahun pajak 2026 dan seterusnya paling lama 5 tahun", C: "Dikreditkan terhadap pajak atas penghasilan dari Negara Q yang batas maksimum kreditnya masih tersisa", D: "Tidak dapat dikreditkan, dibebankan sebagai biaya, maupun dikompensasikan ke tahun berikutnya" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 24 hanya memberi kredit sampai batas yang dihitung per jenis penghasilan untuk tiap negara; kelebihannya tidak dapat diperhitungkan dengan PPh terutang, tidak boleh dibebankan sebagai biaya, dan tidak dapat dimintakan restitusi (Pasal 7 PMK 192/PMK.03/2018; Pasal 9 ayat (1) huruf h UU PPh). Tidak ada ketentuan pengkreditan ke tahun berikutnya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PPh, termasuk pajak penghasilan luar negeri, tidak dapat dibiayakan.",
          B: "Kompensasi 5 tahun berlaku untuk kerugian fiskal, bukan untuk kelebihan kredit pajak luar negeri.",
          C: "Batas dihitung per jenis penghasilan untuk tiap negara; sisa batas royalti Negara Q tidak dapat dipakai untuk pajak laba cabang Negara P."
        },
        jebakan: "Jangan mencampur aturan kompensasi kerugian dengan kredit pajak."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan Pasal 7 PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C9-022",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-02",
      stem: "Lanjutan data PT Prima Kencana 2025 (neto dalam negeri Rp6.000.000.000; Negara P Rp2.000.000.000 dengan pajak P Rp500.000.000; Negara Q Rp800.000.000 dengan pajak Q Rp80.000.000; Negara R Rp500.000.000 dengan pajak R Rp100.000.000; Negara S rugi Rp700.000.000; tarif 22%). Kredit pajak dalam negeri: PPh Pasal 23 dipotong pelanggan Rp95.000.000 dan PPh Pasal 25 dibayar Rp1.150.000.000. PPh Pasal 29 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp121.000.000", B: "Rp181.000.000", C: "Rp801.000.000", D: "Rp27.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh terutang Rp2.046.000.000 dikurangi kredit PPh Pasal 24 Rp620.000.000 (dihitung per jenis penghasilan untuk tiap negara) serta kredit dalam negeri (PPh 23 dan PPh 25).",
        jejakHitung: [
          ["PPh terutang (22% × Rp9.300.000.000)", "Rp2.046.000.000"],
          ["− kredit PPh Pasal 24", "Rp620.000.000"],
          ["− PPh Pasal 23", "Rp95.000.000"],
          ["− PPh Pasal 25", "Rp1.150.000.000"],
          ["PPh Pasal 29", "Rp181.000.000"]
        ],
        mengapaSalah: {
          A: "Mengkreditkan seluruh pajak luar negeri Rp680.000.000 tanpa batas per jenis penghasilan untuk tiap negara.",
          C: "Tidak memperhitungkan kredit PPh Pasal 24 sama sekali.",
          D: "Menggabungkan rugi Negara S sehingga PPh terutang hanya Rp1.892.000.000."
        },
        jebakan: "Kurang bayar akhir bergantung pada dua jebakan sebelumnya: rugi luar negeri tidak digabungkan dan batas dihitung per jenis penghasilan untuk tiap negara."
      },
      dasarHukum: [{ pasal: "Pasal 24, Pasal 28, dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "C9-023",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Pasal 24 ayat (3) UU PPh (parafrase): Negara sumber penghasilan ditentukan sebagai berikut: ... (b) penghasilan berupa bunga, royalti, dan sewa sehubungan dengan penggunaan harta gerak adalah negara tempat pihak yang membayar atau dibebani bunga, royalti, atau sewa tersebut bertempat kedudukan atau berada; (c) penghasilan berupa sewa sehubungan dengan penggunaan harta tak gerak adalah negara tempat harta tersebut terletak; ...",
      stem: "PT Lintas Nusa memperoleh dua penghasilan pada 2025: (1) royalti atas lisensi formula yang dibayar oleh Marlow Ltd yang berkedudukan di Negara M, padahal formula itu dipakai di pabrik Marlow di Negara N; (2) sewa gudang milik PT Lintas Nusa yang terletak di Negara N, dibayar oleh perusahaan yang berkedudukan di Negara M. Berdasarkan kutipan tersebut, pengelompokan negara sumber untuk menghitung batas kredit PPh Pasal 24 per jenis penghasilan untuk tiap negara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Royalti: Negara N; sewa gudang: Negara M", B: "Royalti dan sewa gudang: keduanya Negara M (tempat pembayar)", C: "Royalti: Negara M; sewa gudang: Negara N", D: "Royalti dan sewa gudang: keduanya Negara N (tempat penggunaan atau letak harta)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Royalti bersumber di negara tempat pembayar berkedudukan (M), sedangkan sewa harta tak gerak bersumber di negara letak harta (N).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Membalik kedua aturan.",
          B: "Sewa harta tak gerak mengikuti letak harta, bukan domisili pembayar.",
          D: "Royalti mengikuti domisili pembayar, bukan tempat lisensi dipakai."
        },
        jebakan: "Bedakan harta gerak (domisili pembayar) dan harta tak gerak (letak harta)."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (3) huruf b dan huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-024", topik: "C9.3", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Bahari Tambang mengalami rugi usaha dalam negeri tahun 2025 Rp1.500.000.000 (rugi tahun berjalan, bukan sisa rugi tahun lalu), sedangkan cabangnya di Negara K memperoleh laba Rp4.000.000.000 dan membayar pajak di Negara K Rp1.200.000.000 (30%). Peredaran bruto Rp180 miliar sehingga tanpa Pasal 31E. Kredit PPh Pasal 24 yang dapat dikreditkan untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp880.000.000", B: "Rp1.200.000.000", C: "Rp343.750.000", D: "Rp550.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Rugi dalam negeri tahun berjalan mengurangi PKP dunia. Karena penghasilan neto luar negeri melebihi PKP, batas kredit dibatasi sebesar PPh terutang.",
        jejakHitung: [["PKP = 4.000 − 1.500 juta", "Rp2.500.000.000"], ["PPh terutang 22%", "Rp550.000.000"], ["Batas rumus = 4.000/2.500 × 550 juta", "Rp880.000.000"], ["Batas tidak boleh melebihi PPh terutang", "Rp550.000.000"], ["Kredit = min(1.200; 880; 550) juta", "Rp550.000.000"]],
        mengapaSalah: {
          A: "Memakai hasil rumus Rp880.000.000 tanpa plafon PPh terutang.",
          B: "Mengkreditkan seluruh pajak Negara K tanpa batas.",
          C: "Membalik rasio menjadi PKP ÷ neto luar negeri (2.500/4.000 × Rp550.000.000)."
        },
        jebakan: "Bila neto luar negeri > PKP, batas = PPh terutang; sisa pajak luar negeri hangus."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (batas maksimum kredit)" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-025", topik: "C9.3", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 24 ayat (5) UU PPh: Apabila pajak atas penghasilan yang dibayar atau terutang di luar negeri dikurangkan atau dikembalikan, Pajak Penghasilan yang terutang menurut undang-undang ini harus ditambah dengan jumlah tersebut pada tahun pengurangan atau pengembalian itu dilakukan.",
      stem: "Dalam SPT Tahunan 2025, PT Arta Samudra mengkreditkan seluruh pajak Negara R atas bunga bruto Rp500.000.000 sebesar Rp100.000.000 (tarif domestik R 20%; Indonesia belum mempunyai P3B dengan Negara R) karena masih di bawah batas maksimum. Pada Juni 2026, otoritas Negara R mengembalikan Rp50.000.000 setelah keberatan PT Arta Samudra atas pemotongan itu dikabulkan sebagian menurut hukum domestik Negara R. Berdasarkan kutipan tersebut, perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh terutang tahun pajak 2026 ditambah Rp50.000.000",
        B: "Membetulkan SPT Tahunan 2025 untuk mengurangi kredit PPh Pasal 24 sebesar Rp50.000.000",
        C: "Tidak ada konsekuensi karena pengembalian terjadi di luar negeri",
        D: "Pengembalian Rp50.000.000 diperlakukan sebagai penghasilan 2026 sehingga PPh bertambah Rp11.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 24 ayat (5) mengatur penyesuaian pada tahun pengembalian: PPh terutang 2026 ditambah sebesar pajak luar negeri yang dikembalikan.",
        jejakHitung: [["Kredit PPh 24 tahun 2025", "Rp100.000.000"], ["Dikembalikan Juni 2026", "Rp50.000.000"], ["Tambahan PPh terutang 2026", "Rp50.000.000"]],
        mengapaSalah: {
          B: "Undang-undang menunjuk tahun pengembalian, bukan pembetulan tahun asal.",
          C: "Pengembalian pajak yang sudah dikreditkan wajib diperhitungkan kembali.",
          D: "Yang ditambahkan adalah jumlah pajaknya ke PPh terutang, bukan diperlakukan sebagai penghasilan yang dikalikan 22%."
        },
        jebakan: "Kata kunci kutipan: “pada tahun pengurangan atau pengembalian itu dilakukan”."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-026",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Cakra Energi Tbk (peredaran bruto 2025 Rp95 miliar; memenuhi seluruh syarat penurunan tarif 3% bagi wajib pajak perseroan terbuka sehingga tarif PPh badannya 19%) pada 2025 memperoleh dari Negara P: laba cabang Rp1.000.000.000 dengan pajak P Rp300.000.000 dan bunga Rp200.000.000 dengan pajak P Rp30.000.000. Laba cabang tidak diinvestasikan di Indonesia. PKP seluruhnya (termasuk penghasilan dalam negeri) Rp5.000.000.000. Kredit PPh Pasal 24 untuk Negara P adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp220.000.000", B: "Rp228.000.000", C: "Rp330.000.000", D: "Rp264.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): laba cabang dan bunga dari Negara P masing-masing mempunyai batas sendiri. PPh terutang yang menjadi dasar batas dihitung dengan tarif perseroan terbuka 19%.",
        jejakHitung: [
          ["PPh terutang = 19% × Rp5.000.000.000", "Rp950.000.000"],
          ["Laba cabang: batas = 1.000/5.000 × 950 juta", "Rp190.000.000"],
          ["Kredit laba cabang = min(300; 190) juta", "Rp190.000.000"],
          ["Bunga: batas = 200/5.000 × 950 juta", "Rp38.000.000"],
          ["Kredit bunga = min(30; 38) juta", "Rp30.000.000"],
          ["Kredit PPh Pasal 24 Negara P", "Rp220.000.000"]
        ],
        mengapaSalah: {
          B: "Menggabungkan laba cabang dan bunga dalam satu batas negara (1.200/5.000 × 950 juta = Rp228.000.000); batas dihitung per jenis penghasilan, sehingga sisa batas bunga tidak dapat dipakai untuk pajak laba cabang.",
          C: "Mengkreditkan seluruh pajak Negara P tanpa batas.",
          D: "Memakai tarif umum 22% dan menggabungkan per negara (1.200/5.000 × Rp1.100.000.000) padahal tarif perseroan terbuka 19%."
        },
        jebakan: "Dua lapis: tarif yang benar (19% Tbk) menentukan PPh terutang, lalu batas dihitung per jenis penghasilan untuk tiap negara, bukan digabung per negara."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (2b) UU PPh s.t.d.t.d. UU 7/2021; PP 55/2022 (tarif perseroan terbuka 19%)", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018 (per jenis penghasilan untuk tiap negara)", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-027",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Maju Sinergi menerima dividen Rp3.000.000.000 dari anak perusahaan yang tidak tercatat di bursa di Negara V; Negara V memotong pajak 10% (Rp300.000.000). Seluruh dividen diinvestasikan di Indonesia sesuai ketentuan sehingga memenuhi syarat dikecualikan dari objek PPh berdasarkan Pasal 4 ayat (3) huruf f angka 2 UU PPh s.t.d.t.d. UU 7/2021. Perlakuan pajak Negara V Rp300.000.000 dalam SPT Tahunan PPh Badan adalah ...",
      kataKualifikasi: ["dikecualikan"],
      opsi: { A: "Dikreditkan penuh sebagai PPh Pasal 24 karena di bawah batas 22%", B: "Dimintakan restitusi karena dividen bukan objek sehingga pajak Negara V merupakan kelebihan pembayaran", C: "Tidak dapat dikreditkan karena penghasilan dividen tersebut bukan objek PPh di Indonesia", D: "Dibebankan sebagai biaya karena tidak dapat dikreditkan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit Pasal 24 hanya untuk pajak luar negeri atas penghasilan yang dikenai PPh di Indonesia. Dividen yang dikecualikan karena diinvestasikan tidak masuk PKP, sehingga pajak luar negerinya tidak dapat dikreditkan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tidak ada PPh Indonesia atas dividen yang dikecualikan sehingga tidak ada yang dapat dikreditkan.",
          B: "Pajak dipungut Negara V; DJP tidak mengembalikan pajak negara lain.",
          D: "PPh (termasuk pajak penghasilan luar negeri) tidak dapat dibiayakan, terlebih untuk penghasilan bukan objek."
        },
        jebakan: "Fasilitas pengecualian dividen luar negeri dan kredit Pasal 24 saling meniadakan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f angka 2 dan angka 8 UU PPh (disisipkan UU 11/2020 yang ditetapkan ulang dengan UU 6/2023; dipertahankan UU 7/2021)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 24 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 31 ayat (1) PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-028",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.7A.1",
      stem: "Staf pajak PT Garuda Mineral menyiapkan SPT Tahunan PPh Badan tahun pajak 2025 dengan bentuk formulir menurut PER-11/PJ/2025 yang memuat kredit pajak luar negeri dari tiga negara. Rincian penghasilan dari luar negeri beserta pajak yang dibayar atau dipotong di luar negeri dan kredit PPh Pasal 24 yang dapat diperhitungkan disajikan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 4 (penghasilan yang dikenakan PPh final dan penghasilan yang tidak termasuk objek pajak)", B: "Lampiran 12A (penghitungan PPh Pasal 26 ayat (4))", C: "Induk SPT Bagian E angka 14 (angsuran PPh Pasal 25)", D: "Lampiran 3 Bagian A (penghasilan dari luar negeri), yang jumlahnya dibawa ke Induk SPT Bagian E angka 13 (kredit pajak)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk tahun pajak 2025 SPT Tahunan PPh Badan memakai bentuk PER-11/PJ/2025. Lampiran 3 dipakai untuk melaporkan penghasilan, PPh yang dipotong/dipungut pihak lain, dan kredit pajak luar negeri; penghasilan dan pajak luar negeri dirinci di Bagian A per pemotong, negara, dan jenis penghasilan, lalu jumlah kredit pajak dibawa ke Induk Bagian E angka 13.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Lampiran 4 untuk penghasilan yang dikenakan PPh final dan yang bukan objek pajak; penghasilan luar negeri yang kreditnya diperhitungkan adalah penghasilan tidak final.",
          B: "Lampiran 12A untuk PPh Pasal 26 ayat (4) BUT, bukan kredit pajak luar negeri.",
          C: "Bagian E angka 14 untuk angsuran PPh Pasal 25; kredit pajak luar negeri masuk Bagian E angka 13 melalui Lampiran 3."
        },
        jebakan: "Formulir 1771 lama (lampiran khusus 7A) hanya untuk tahun pajak sampai 2024. Di bentuk PER-11/PJ/2025 kredit luar negeri dan PPh yang dipotong pihak lain sama-sama di Lampiran 3, tetapi di bagian berbeda (A dan B)."
      },
      dasarHukum: [{ pasal: "Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 85 ayat (1) huruf b, Pasal 138 huruf a, dan Lampiran (petunjuk pengisian Induk Bagian E angka 13 dan Lampiran 3) PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C9-029",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-03",
      stem: "Data untuk soal ini dan dua soal berikutnya: PT Sinar Komponen Indonesia (PMA) 100% sahamnya dimiliki Lumen Holdings Pte. Ltd. di Negara Lumeria (tarif PPh badan Lumeria 17%). Pada 2025 PT Sinar menjual 250.000 unit komponen kepada Lumen seharga Rp12.000 per unit. Dalam pemeriksaan, analisis CUP menghasilkan rentang interkuartil harga wajar Rp13.000–Rp15.500 per unit dengan median Rp14.200; pemeriksa tidak dapat menentukan titik yang paling tepat di dalam rentang. Lumen tidak mengembalikan selisih harga dalam bentuk kas, PT Sinar tidak menyetujui koreksi, dan Lumen tidak menyerahkan SKD. Koreksi primer atas penghasilan PT Sinar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp250.000.000", B: "Rp550.000.000", C: "Rp875.000.000", D: "Rp121.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Harga transaksi Rp12.000 berada di luar rentang interkuartil sehingga tidak wajar. Menurut Pasal 12 ayat (7) PMK 172/2023, harga disesuaikan ke titik yang paling tepat di dalam rentang sesuai kesebandingannya; karena titik itu tidak dapat ditentukan, dipakai median Rp14.200.",
        jejakHitung: [
          ["Harga transaksi", "Rp12.000/unit"],
          ["Titik paling tepat tidak dapat ditentukan → median", "Rp14.200/unit"],
          ["Selisih per unit", "Rp2.200"],
          ["Koreksi primer = 2.200 × 250.000", "Rp550.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke kuartil bawah Rp13.000 ((13.000 − 12.000) × 250.000) seolah titik rentang terdekat yang dipakai; PMK 172/2023 memakai titik paling tepat atau median.",
          C: "Menyesuaikan ke kuartil atas Rp15.500 ((15.500 − 12.000) × 250.000) tanpa dasar kesebandingan.",
          D: "Menyebut tambahan PPh 22% (Rp121.000.000) sebagai koreksi penghasilan."
        },
        jebakan: "Urutan Pasal 12 ayat (7): titik kewajaran, titik paling tepat di dalam rentang, lalu median bila titik paling tepat tidak dapat ditentukan. Bukan otomatis ke titik rentang terdekat."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 ayat (6) dan ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-030",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-03",
      kutipan: "PMK 172/2023 (parafrase): Dalam hal dilakukan koreksi atas harga transaksi yang dipengaruhi hubungan istimewa, selisih yang timbul diperlakukan sebagai dividen yang dibagikan kepada pemegang saham afiliasi (secondary adjustment), kecuali dalam hal tertentu yang diatur, antara lain selisih tersebut dikembalikan dalam bentuk kas atau setara kas.",
      stem: "Lanjutan data PT Sinar Komponen Indonesia (menjual 250.000 unit komponen kepada induknya, Lumen Holdings Pte. Ltd. di Negara Lumeria, seharga Rp12.000 per unit; harga disesuaikan ke median Rp14.200 per unit; Lumen tidak mengembalikan selisih dalam bentuk kas, PT Sinar tidak menyetujui koreksi, dan Lumen tidak menyerahkan SKD). Berdasarkan kutipan tersebut, PPh Pasal 26 atas secondary adjustment adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp55.000.000", B: "Rp121.000.000", C: "Rp0, karena koreksi primer sudah dikenai PPh badan", D: "Rp110.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Selisih Rp550.000.000 diperlakukan sebagai dividen kepada Lumen. Karena Lumen tidak menyerahkan SKD, PPh Pasal 26 dipotong dengan tarif domestik 20%.",
        jejakHitung: [
          ["Selisih = (14.200 − 12.000) × 250.000", "Rp550.000.000"],
          ["Diperlakukan sebagai dividen kepada Lumen", "Rp550.000.000"],
          ["Tarif PPh 26 tanpa SKD", "20%"],
          ["PPh Pasal 26", "Rp110.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif P3B 10% padahal SKD tidak diserahkan.",
          B: "Memakai tarif PPh badan 22%; secondary adjustment adalah dividen (PPh 26), bukan tambahan PPh badan.",
          C: "Koreksi primer (PPh badan) dan secondary adjustment (PPh 26 atas dividen) adalah dua konsekuensi terpisah."
        },
        jebakan: "Koreksi TP berlapis: PPh badan atas koreksi primer + PPh 26 atas dividen dari secondary adjustment."
      },
      dasarHukum: [{ pasal: "Pasal 37 ayat (1) dan ayat (4) serta Pasal 38 ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "C9-031",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-03",
      stem: "Lanjutan data PT Sinar Komponen Indonesia (PMA; induknya Lumen Holdings Pte. Ltd. di Negara Lumeria yang tarif PPh badannya 17%). Data tahun pajak 2024: peredaran bruto Rp42 miliar; penjualan komponen kepada Lumen Rp3 miliar; pembayaran royalti teknologi kepada Lumen Rp5,6 miliar. Kewajiban dokumentasi penentuan harga transfer PT Sinar untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Wajib Dokumen Induk dan Dokumen Lokal karena royalti kepada afiliasi tahun 2024 melebihi Rp5 miliar", B: "Tidak wajib, karena peredaran bruto tahun pajak sebelumnya Rp42 miliar tidak melebihi Rp50 miliar", C: "Tidak wajib, karena transaksi barang berwujud dengan afiliasi Rp3 miliar tidak melebihi Rp20 miliar", D: "Hanya wajib menyampaikan Laporan per Negara (CbCR) karena berstatus PMA dengan induk di luar negeri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kriteria Pasal 16 ayat (3) PMK 172/2023 bersifat alternatif: cukup satu terpenuhi. Pembayaran royalti (pemanfaatan barang tidak berwujud) kepada afiliasi tahun 2024 Rp5,6 miliar melebihi ambang Rp5 miliar, dan afiliasi juga berada di yurisdiksi bertarif lebih rendah dari tarif PPh badan Indonesia (17% < 22%).",
        jejakHitung: [
          ["Peredaran bruto 2024 > Rp50 M?", "tidak (Rp42 M)"],
          ["Barang afiliasi > Rp20 M?", "tidak (Rp3 M)"],
          ["Barang tidak berwujud afiliasi > Rp5 M?", "ya (Rp5,6 M)"],
          ["Afiliasi di yurisdiksi tarif < 22%?", "ya (17%)"],
          ["Kesimpulan", "wajib Dokumen Induk dan Lokal"]
        ],
        mengapaSalah: {
          B: "Peredaran bruto hanya salah satu kriteria alternatif; kriteria lain sudah terpenuhi.",
          C: "Ambang Rp20 miliar hanya untuk barang berwujud; royalti memakai ambang Rp5 miliar.",
          D: "Laporan per negara wajib bagi entitas induk dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun (Pasal 16 ayat (4)) atau entitas konstituen dalam kondisi Pasal 16 ayat (5), bukan karena status PMA; status itu juga tidak menghapus kewajiban Dokumen Induk dan Lokal menurut Pasal 16 ayat (3)."
        },
        jebakan: "Gagal satu kriteria tidak berarti bebas: periksa semua kriteria alternatif Pasal 16 ayat (3)."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (3) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-032", topik: "C9.4", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Gamma Ltd (Negara K) memiliki 60% saham Delta Pte. Ltd. (Negara L), 40% saham PT Epsilon (Indonesia), dan 20% saham PT Eta (Indonesia). Delta memiliki 50% saham PT Zeta (Indonesia). Tidak ada hubungan penguasaan manajemen, teknologi, atau keluarga di antara mereka. Pada 2026 PT Zeta bertransaksi dengan Gamma, Delta, PT Epsilon, dan PT Eta. Pihak yang mempunyai hubungan istimewa dengan PT Zeta menurut Pasal 18 ayat (4) UU PPh adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Delta saja, karena hanya Delta yang memiliki saham PT Zeta secara langsung",
        B: "Gamma dan Delta saja",
        C: "Gamma, Delta, dan PT Epsilon",
        D: "Gamma, Delta, PT Epsilon, dan PT Eta"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kepemilikan tidak langsung dihitung berjenjang: Gamma memiliki 60% × 50% = 30% PT Zeta. Gamma juga memiliki 40% PT Epsilon; dua WP yang sama-sama dimiliki ≥ 25% oleh pihak yang sama saling berhubungan istimewa. Kepemilikan Gamma di PT Eta hanya 20%.",
        jejakHitung: [["Delta → Zeta (langsung)", "50%"], ["Gamma → Zeta (tidak langsung) = 60% × 50%", "30%"], ["Gamma → Epsilon", "40% → Epsilon–Zeta berhubungan istimewa"], ["Gamma → Eta", "20% < 25% → tidak"]],
        mengapaSalah: {
          A: "Pasal 18 ayat (4) mencakup kepemilikan tidak langsung.",
          B: "Lupa hubungan antara dua WP yang sama-sama dimiliki ≥ 25% oleh Gamma (Epsilon dan Zeta).",
          D: "Kepemilikan Gamma 20% di PT Eta di bawah ambang 25%."
        },
        jebakan: "Hitung kepemilikan tidak langsung dengan mengalikan persentase berjenjang."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-033", topik: "C9.4", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Nusantara Retail (anak perusahaan Velto Group, Negara Corvia) membebankan management fee kepada induknya Rp2.400.000.000 untuk 2025, terdiri atas: (a) penyusunan laporan keuangan konsolidasi dan rapat pemegang saham grup Rp600.000.000; (b) layanan helpdesk TI dan lisensi ERP yang benar-benar digunakan dan nilainya sudah diuji wajar Rp1.300.000.000; (c) jasa rekrutmen yang sama dengan pekerjaan divisi SDM PT Nusantara sendiri Rp500.000.000. Koreksi fiskal positif atas management fee tersebut berdasarkan uji manfaat dalam PKKU adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.100.000.000", B: "Rp600.000.000", C: "Rp0", D: "Rp2.400.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jasa intra-grup hanya dapat dibiayakan bila benar-benar diberikan, bermanfaat bagi penerima, dan tidak duplikatif. Aktivitas pemegang saham (a) dan jasa duplikatif (c) dikoreksi.",
        jejakHitung: [["(a) aktivitas pemegang saham", "Rp600.000.000"], ["(c) jasa duplikatif", "Rp500.000.000"], ["(b) bermanfaat dan wajar", "tidak dikoreksi"], ["Koreksi positif", "Rp1.100.000.000"]],
        mengapaSalah: {
          B: "Hanya mengoreksi aktivitas pemegang saham dan melupakan jasa yang duplikatif.",
          C: "Perjanjian dan faktur tidak cukup; manfaat ekonomi harus dibuktikan.",
          D: "Jasa yang lolos uji manfaat dan bernilai wajar tetap boleh dibiayakan."
        },
        jebakan: "Uji manfaat menyaring per komponen layanan, bukan semua atau tidak sama sekali."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (uji manfaat jasa intra-grup)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-034", topik: "C9.4", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Andalas Kimia (PKP) memanfaatkan jasa teknik dari afiliasinya, Corvex AG (Negara Helvara, mitra P3B), senilai Rp800.000.000 pada Masa September 2026. Jasa dilakukan sepenuhnya dari luar negeri dan Corvex tidak memiliki BUT di Indonesia; Corvex menyerahkan SKD yang sah dan merupakan pemilik manfaat; P3B Indonesia–Helvara memperlakukan imbalan jasa teknik sebagai laba usaha (tanpa pasal khusus fee for technical services). Harga sudah sesuai PKKU. Jumlah pajak yang wajib disetor sendiri oleh PT Andalas atas transaksi ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp96.000.000", B: "Rp88.000.000", C: "Rp248.000.000", D: "Rp168.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dengan SKD sah dan tanpa BUT, imbalan jasa adalah laba usaha yang tidak dipajaki Indonesia (PPh 26 nihil). Pemanfaatan JKP dari luar Daerah Pabean tetap terutang PPN yang disetor sendiri: 12% × DPP nilai lain 11/12.",
        jejakHitung: [["PPh Pasal 26 (laba usaha, tanpa BUT, SKD sah)", "Rp0"], ["DPP PPN = 11/12 × Rp800.000.000", "Rp733.333.333"], ["PPN = 12% × DPP", "Rp88.000.000"], ["Total disetor sendiri", "Rp88.000.000"]],
        mengapaSalah: {
          A: "Mengabaikan DPP nilai lain 11/12 (12% × Rp800.000.000).",
          C: "Memotong PPh 26 20% (Rp160.000.000) padahal SKD sah dan imbalan merupakan laba usaha.",
          D: "Memakai tarif 10% seperti bunga/royalti P3B (Rp80.000.000) untuk imbalan jasa yang merupakan laba usaha."
        },
        jebakan: "P3B membebaskan PPh, tetapi tidak menyentuh PPN atas pemanfaatan jasa luar negeri."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf e UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 (tarif 12%, DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-035", topik: "C9.4", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 18 ayat (3) UU PPh (parafrase): Direktur Jenderal Pajak berwenang menentukan kembali besarnya penghasilan dan pengurangan serta menentukan utang sebagai modal untuk menghitung besarnya Penghasilan Kena Pajak bagi Wajib Pajak yang mempunyai hubungan istimewa dengan Wajib Pajak lainnya sesuai dengan kewajaran dan kelaziman usaha yang tidak dipengaruhi hubungan istimewa.",
      stem: "PT Borneo Fiber (peredaran bruto Rp130 miliar) menerima pinjaman Rp15.000.000.000 dari induknya di Negara Tasmara dengan bunga 12% per tahun; bunga 2025 Rp1.800.000.000 dibebankan seluruhnya. Analisis kesebandingan menunjukkan suku bunga wajar untuk pinjaman sejenis 8% per tahun, dan rasio utang terhadap modal PT Borneo masih di bawah 4:1. Berdasarkan kutipan tersebut, koreksi fiskal dan tambahan PPh badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp1.800.000.000; tambahan PPh Rp396.000.000",
        B: "Koreksi positif Rp1.200.000.000; tambahan PPh Rp264.000.000",
        C: "Tidak ada koreksi karena rasio utang terhadap modal di bawah 4:1",
        D: "Koreksi positif Rp600.000.000; tambahan PPh Rp132.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Bunga yang melebihi kewajaran kepada pihak afiliasi dikoreksi sebesar selisihnya; uji DER dan uji kewajaran adalah dua uji terpisah.",
        jejakHitung: [["Bunga dibebankan (12%)", "Rp1.800.000.000"], ["Bunga wajar 8% × Rp15.000.000.000", "Rp1.200.000.000"], ["Koreksi positif", "Rp600.000.000"], ["Tambahan PPh 22%", "Rp132.000.000"]],
        mengapaSalah: {
          A: "Menolak seluruh bunga afiliasi padahal bagian yang wajar tetap boleh dibiayakan.",
          B: "Mengoreksi bagian yang wajar, bukan kelebihannya.",
          C: "Lolos DER tidak membebaskan dari uji kewajaran suku bunga."
        },
        jebakan: "Koreksi = selisih terhadap harga wajar, bukan seluruh transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (kewajaran transaksi keuangan)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "C9-036",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Optima Elektronik (tahun buku Januari–Desember) memenuhi kriteria wajib Dokumen Induk dan Dokumen Lokal untuk tahun pajak 2025. Menurut PMK 172/2023, dokumen tersebut harus sudah tersedia paling lama ..., dan perlakuannya dalam SPT Tahunan adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "31 Maret 2026 (3 bulan setelah akhir tahun pajak); dokumen lengkap diunggah bersama SPT Tahunan", B: "31 Desember 2026 (12 bulan setelah akhir tahun pajak); dokumen cukup disimpan sampai diminta", C: "30 April 2026 (4 bulan setelah akhir tahun pajak); ikhtisarnya dilampirkan pada SPT Tahunan PPh Badan 2025", D: "Tidak ada batas waktu; dokumen cukup disusun ketika pemeriksaan dimulai dan diserahkan bila diminta" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen Induk dan Dokumen Lokal tersedia paling lama 4 bulan setelah akhir tahun pajak, dan ikhtisarnya dilampirkan pada SPT Tahunan PPh Badan.",
        jejakHitung: [
          ["Akhir tahun pajak", "31 Desember 2025"],
          ["+ 4 bulan", "30 April 2026"]
        ],
        mengapaSalah: {
          A: "31 Maret adalah batas SPT Tahunan orang pribadi; yang dilampirkan hanya ikhtisar.",
          B: "Batas 12 bulan berlaku untuk Laporan per Negara (CbCR).",
          D: "Prinsip ex-ante menuntut dokumen tersedia sejak awal, bukan disusun saat pemeriksaan."
        },
        jebakan: "Tiga tenggat berbeda: SPT OP 31 Maret, TP Doc 4 bulan, CbCR 12 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) dan Pasal 19 ayat (1) dan ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-037",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "PT Indo Holding adalah entitas induk utama grup usaha yang berkedudukan di Indonesia dengan anak perusahaan di lima negara. Peredaran bruto konsolidasi grup tahun pajak 2024 Rp12,1 triliun dan tahun pajak 2025 Rp12,4 triliun. Kewajiban Laporan per Negara (CbCR) PT Indo Holding untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak wajib, karena ambang CbCR adalah pendapatan konsolidasi EUR 750 juta menurut PMK 136/2024", B: "Wajib (konsolidasi paling sedikit Rp11 triliun), disampaikan paling lama 12 bulan setelah akhir tahun pajak", C: "Wajib (konsolidasi paling sedikit Rp11 triliun), disampaikan paling lama 4 bulan setelah akhir tahun pajak bersama SPT Tahunan", D: "Tidak wajib, karena CbCR hanya untuk entitas konstituen yang entitas induknya berkedudukan di luar negeri" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Entitas induk yang merupakan Wajib Pajak dalam negeri dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun pada tahun pajak sebelum tahun pajak yang dilaporkan (2024: Rp12,1 triliun) wajib menyelenggarakan laporan per negara (Pasal 16 ayat (4) PMK 172/2023) dan menyampaikannya paling lama 12 bulan setelah akhir tahun pajak (Pasal 23 ayat (4)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "EUR 750 juta adalah ambang GloBE (Pasal 2 ayat (1) PMK 136/2024). Dalam PMK 172/2023 ambang setara EUR 750 juta hanya dipakai untuk entitas induk yang berkedudukan di luar negeri (Pasal 22 ayat (1) huruf d); bagi entitas induk dalam negeri ambangnya Rp11 triliun.",
          C: "4 bulan adalah tenggat ketersediaan Dokumen Induk/Lokal, bukan CbCR.",
          D: "Entitas induk di Indonesia justru pihak utama yang wajib CbCR."
        },
        jebakan: "Jangan menukar ambang CbCR (Rp11 triliun) dengan ambang GloBE (EUR 750 juta)."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (4) dan Pasal 23 ayat (4) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 2 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C9-038",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      formulirRef: "1771.3A.1",
      stem: "PT Mega Polimer (PMA) pada 2025 memiliki transaksi penjualan dan pembayaran royalti dengan induknya di luar negeri, serta saldo pinjaman dari pemegang saham asing tersebut; perusahaan wajib menyelenggarakan Dokumen Induk dan Dokumen Lokal. Dalam SPT Tahunan PPh Badan tahun pajak 2025 (bentuk menurut PER-11/PJ/2025), pengungkapan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Transaksi afiliasi pada Lampiran 10A dan pernyataannya pada Lampiran 10B, ikhtisar dokumentasi pada Lampiran 10D, dan pinjaman dari pemegang saham pada Lampiran 2 (Daftar Kepemilikan) serta Lampiran 11C", B: "Seluruhnya cukup dicantumkan pada Lampiran 2 (Daftar Kepemilikan) karena lawan transaksinya pemegang saham", C: "Transaksi afiliasi pada lampiran khusus 3A beserta ikhtisar dokumentasi, dan utang kepada pemegang saham pada lampiran 1771-VI", D: "Transaksi afiliasi tidak diungkapkan dalam SPT karena sudah ada dokumentasi harga transfer; pinjaman cukup di neraca" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPT Tahunan PPh Badan tahun pajak 2025 memakai bentuk PER-11/PJ/2025 (Pasal 85): Lampiran 10A daftar transaksi yang dipengaruhi hubungan istimewa, Lampiran 10B pernyataannya, Lampiran 10D ikhtisar Dokumen Induk dan Dokumen Lokal (Pasal 19 ayat (2) PMK 172/2023), dan Lampiran 2 Daftar Kepemilikan yang memuat daftar utang dan piutang dari pemegang saham atau afiliasi. Karena pemberi pinjaman berada di luar negeri, pinjaman itu juga dilaporkan pada Lampiran 11C Laporan Utang Swasta Luar Negeri.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Lampiran 2 memuat pemegang saham, pengurus, penyertaan, serta utang dan piutang afiliasi, tetapi transaksi penjualan dan royalti tetap dirinci di Lampiran 10A dan 10B.",
          C: "Kode 3A dan 1771-VI adalah format 1771 lama (PER-34/PJ/2010) yang menurut Pasal 138 PER-11/PJ/2025 hanya dipakai sampai tahun pajak 2024.",
          D: "Pengungkapan di SPT tetap wajib; dokumentasi harga transfer tidak menggantikannya, ikhtisarnya justru dilampirkan pada SPT (Lampiran 10D), dan pinjaman dari pemegang saham asing dilaporkan pada Lampiran 2 dan Lampiran 11C, bukan cukup di neraca."
        },
        jebakan: "Mulai tahun pajak 2025 kode lampiran SPT Badan berubah: hubungan istimewa di kelompok 10 (10A, 10B, 10C, 10D), kepemilikan dan utang afiliasi di Lampiran 2."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 85 ayat (1) dan Pasal 138 huruf a PER-11/PJ/2025", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 19 ayat (1) dan ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-039", topik: "C9.5", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 28 UU KUP (parafrase): (4) Pembukuan atau pencatatan wajib diselenggarakan di Indonesia dengan menggunakan huruf Latin, angka Arab, satuan mata uang Rupiah, dan disusun dalam bahasa Indonesia atau dalam bahasa asing yang diizinkan oleh Menteri Keuangan. (8) Pembukuan yang menggunakan bahasa asing dan mata uang selain Rupiah dapat diselenggarakan oleh Wajib Pajak setelah mendapat izin Menteri Keuangan.",
      stem: "PT Kirana Auto Parts (PMA; induk di Negara Nippora) yang hampir seluruh transaksi ekspornya dalam dolar AS, sejak 1 Januari 2026 langsung menyusun pembukuan dalam bahasa Inggris dan USD tanpa mengajukan permohonan apa pun kepada DJP, dengan alasan statusnya PMA. Berdasarkan kutipan tersebut, penilaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Sah, karena setiap PMA otomatis boleh membukukan dalam bahasa Inggris dan USD tanpa permohonan kepada DJP",
        B: "Sah, asalkan laporan keuangannya diaudit akuntan publik dan dijabarkan ke Rupiah saat menyampaikan SPT Tahunan",
        C: "Belum memenuhi Pasal 28 ayat (8), karena pembukuan dalam bahasa asing dan mata uang selain Rupiah baru sah setelah mendapat izin Menteri Keuangan",
        D: "Belum memenuhi Pasal 28, tetapi cukup diperbaiki dengan menyampaikan SPT Tahunan dalam Rupiah memakai kurs akhir tahun tanpa perlu izin"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Status PMA hanya membuat WP termasuk pihak yang dapat diberi izin; pembukuan bahasa Inggris dan USD tetap baru sah setelah izin Menteri Keuangan (PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019; layanan Coretax PER-8/PJ/2025).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tidak ada izin otomatis; ayat (8) mensyaratkan izin.",
          B: "Audit laporan keuangan bukan pengganti izin pembukuan.",
          D: "Konversi saat pelaporan tidak memperbaiki pembukuan yang diselenggarakan tanpa izin."
        },
        jebakan: "“Dapat diselenggarakan setelah mendapat izin” — syarat izin mendahului pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (4) dan ayat (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019" }, { pasal: "PER-8/PJ/2025 (layanan Coretax)", berlakuSejak: "2025-05-21" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C9-040",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Hoshino Presisi Indonesia (PMA, tahun buku Januari–Desember, terdaftar sejak 2019 dan selama ini membukukan dalam Rupiah) pada 27 Oktober 2026 memutuskan untuk beralih ke pembukuan bahasa Inggris dan USD. Menurut PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019, permohonan diajukan paling lambat 3 bulan sebelum tahun buku dimulai. Kesimpulan yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Permohonan masih dapat diajukan sampai 31 Desember 2026 sehingga pembukuan USD dimulai 1 Januari 2027, awal tahun buku berikutnya", B: "Batas untuk tahun buku 2027 adalah 30 September 2026 dan sudah lewat, sehingga pembukuan USD paling cepat dimulai tahun buku 2028", C: "Permohonan diajukan bersama SPT Tahunan 2026 paling lambat 30 April 2027 dan izinnya berlaku surut sejak 1 Januari 2027", D: "Permohonan dapat diajukan kapan saja dan izin berlaku mulai bulan berikutnya setelah disetujui oleh DJP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Tiga bulan sebelum 1 Januari 2027 adalah 30 September 2026; keputusan pada 27 Oktober 2026 sudah melewati batas sehingga peralihan paling cepat untuk tahun buku 2028. Untuk tahun buku 2028, permohonan diajukan paling lambat 30 September 2027.",
        jejakHitung: [
          ["Awal tahun buku 2027", "1 Januari 2027"],
          ["Batas permohonan (3 bulan sebelumnya)", "30 September 2026"],
          ["Tanggal keputusan", "27 Oktober 2026 → terlambat"],
          ["Tahun buku paling cepat", "2028 (permohonan paling lambat 30 September 2027)"]
        ],
        mengapaSalah: {
          A: "Batas dihitung 3 bulan sebelum tahun buku, bukan sampai hari terakhir tahun sebelumnya.",
          C: "Izin pembukuan bukan lampiran SPT dan tidak berlaku surut.",
          D: "Perubahan bahasa dan mata uang pembukuan terikat tahun buku, tidak per bulan."
        },
        jebakan: "Hitung mundur dari awal tahun buku yang dituju, lalu bandingkan dengan tanggal hari ini."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a PMK 196/PMK.03/2007 s.t.d.t.d. PMK 123/PMK.03/2019", berlakuSejak: "2019-08-27" }, { pasal: "Pasal 16 ayat (3) huruf c dan Pasal 21 ayat (3) huruf b PER-8/PJ/2025 (layanan Coretax)" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-041", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "RUPS PT Dirgantara Kemas (PMA) pada 10 Juni 2026 menetapkan dividen tunai Rp10.000.000.000 yang dibayar 24 Juni 2026. Pemegang saham: Orbis Packaging BV (Negara Nedera, mitra P3B) 80% dan PT Mitra Lokal (badan dalam negeri) 20%. P3B Indonesia–Nedera: dividen 10% bila penerima berbentuk badan yang memiliki paling sedikit 25% saham, 15% lainnya. Orbis telah menyampaikan SKD yang sah sebelum pembayaran dan merupakan pemilik manfaat. Total PPh atas dividen yang wajib dipotong PT Dirgantara adalah ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: { A: "Rp1.600.000.000", B: "Rp1.200.000.000", C: "Rp1.100.000.000", D: "Rp800.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bagian Orbis (Rp8 miliar) dipotong PPh 26 dengan tarif P3B penyertaan substansial 10%. Dividen kepada badan dalam negeri dikecualikan dari objek PPh (Pasal 4 ayat (3) huruf f angka 1) sehingga tidak dipotong.",
        jejakHitung: [["Bagian Orbis 80%", "Rp8.000.000.000"], ["Tarif P3B (kepemilikan ≥ 25%)", "10%"], ["PPh 26 Orbis", "Rp800.000.000"], ["Bagian PT Mitra Lokal (bukan objek)", "Rp0"], ["Total dipotong", "Rp800.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif domestik 20% atas bagian Orbis padahal SKD sah.",
          B: "Memakai tarif portofolio 15% padahal kepemilikan 80% ≥ 25%.",
          C: "Ikut memotong PPh 23 15% (Rp300.000.000) atas dividen kepada badan dalam negeri yang bukan objek."
        },
        jebakan: "Satu dividen, dua rezim: WPLN (PPh 26/P3B) dan badan dalam negeri (bukan objek)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) huruf f angka 1 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-042", topik: "C9.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Dirgantara Kemas memotong PPh Pasal 26 sebesar Rp800.000.000 (tarif P3B 10%, SKD sah) atas dividen kepada Orbis Packaging BV (WPLN, tanpa BUT di Indonesia) yang ditetapkan RUPS pada 10 Juni 2026 dan dibayar pada 24 Juni 2026. Kewajiban administrasi di Coretax yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat bukti potong BPNR, menyetor paling lambat 15 Juli 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Juli 2026",
        B: "Membuat bukti potong BPPU, menyetor paling lambat 10 Juli 2026, dan melaporkan paling lambat 20 Juli 2026",
        C: "Membuat bukti potong BP21, menyetor paling lambat 15 Juli 2026, dan melaporkan pada SPT Masa PPh 21/26 paling lambat 20 Juli 2026",
        D: "Membuat bukti potong BPNR, menyetor paling lambat 31 Juli 2026, dan melaporkannya bersama SPT Tahunan"
      },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPh 26 atas dividen kepada WPLN dibuatkan BPNR dan dilaporkan pada SPT Masa PPh Unifikasi; setor tanggal 15 dan lapor tanggal 20 bulan berikutnya (Masa Juni 2026 → 15 Juli dan 20 Juli 2026).",
        jejakHitung: [["Masa pajak", "Juni 2026"], ["Batas setor (tanggal 15 bulan berikutnya)", "Rabu, 15 Juli 2026"], ["Batas lapor (tanggal 20 bulan berikutnya)", "Senin, 20 Juli 2026"]],
        mengapaSalah: {
          B: "Tanggal 10 adalah batas setor lama sebelum PMK 81/2024; BPPU untuk penerima dalam negeri.",
          C: "BP21 dan SPT Masa PPh 21/26 untuk penghasilan orang pribadi sehubungan pekerjaan/jasa, bukan dividen kepada badan luar negeri.",
          D: "PPh 26 adalah kewajiban masa, bukan tahunan."
        },
        jebakan: "Kode bupot Coretax: BPPU untuk dalam negeri, BPNR untuk luar negeri."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 94 (batas setor tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPNR, SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C9-043", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Sentosa Kimia (PMA) memperoleh fasilitas tax allowance PP 78/2019 atas penanaman modal berupa aktiva tetap berwujud (termasuk tanah) untuk kegiatan usaha utama Rp400.000.000.000 dan mulai berproduksi komersial pada 2025. Penghasilan neto fiskal 2025 sebelum fasilitas Rp95.000.000.000; peredaran bruto Rp640 miliar; tidak ada sisa kerugian. PPh badan terutang tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp16.500.000.000", B: "Rp20.900.000.000", C: "Rp0, karena pengurangan 30% × Rp400 miliar = Rp120 miliar dibebankan sekaligus sehingga rugi fiskal", D: "Rp14.300.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengurangan penghasilan neto 30% dari nilai investasi dibebankan 5% per tahun selama 6 tahun sejak produksi komersial.",
        jejakHitung: [["Pengurangan total 30% × Rp400 miliar", "Rp120.000.000.000"], ["Jatah per tahun 5% × Rp400 miliar", "Rp20.000.000.000"], ["PKP = 95 − 20 miliar", "Rp75.000.000.000"], ["PPh badan 22%", "Rp16.500.000.000"]],
        mengapaSalah: {
          B: "Tidak memanfaatkan fasilitas: 22% × Rp95 miliar.",
          C: "Pengurangan 30% tidak dibebankan sekaligus, melainkan 5% per tahun.",
          D: "Membagi 30% dalam 4 tahun (Rp30 miliar per tahun): 22% × Rp65 miliar."
        },
        jebakan: "30% total, tetapi 5% per tahun selama 6 tahun."
      },
      dasarHukum: [{ pasal: "PP 78/2019 Pasal 3 (fasilitas tax allowance)" }, { pasal: "Pasal 31A UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-044", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sentosa Kimia, pemegang fasilitas tax allowance PP 78/2019 yang masih berlaku, membagikan dividen Rp5.000.000.000 pada Agustus 2026 kepada pemegang sahamnya, Kestrel Chemicals plc (Negara Albria, mitra P3B), yang memiliki 20% saham. P3B Indonesia–Albria: dividen 10% bila penerima memiliki paling sedikit 25% saham, 15% lainnya; SKD sah. PPh Pasal 26 yang dipotong adalah ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: { A: "Rp1.000.000.000", B: "Rp750.000.000", C: "Rp500.000.000", D: "Rp0, karena dividen dari wajib pajak penerima tax allowance dibebaskan" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tax allowance memberi tarif PPh atas dividen kepada WPLN 10% atau lebih rendah menurut P3B. Karena kepemilikan Kestrel 20% (< 25%), tarif P3B 15%; yang dipakai adalah tarif terendah, yaitu 10% dari fasilitas.",
        jejakHitung: [["Tarif domestik", "20%"], ["Tarif P3B (kepemilikan 20% < 25%)", "15%"], ["Tarif fasilitas tax allowance", "10%"], ["PPh 26 = 10% × Rp5.000.000.000", "Rp500.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif domestik 20% dan mengabaikan P3B maupun fasilitas.",
          B: "Memakai tarif P3B 15% tanpa memperhatikan fasilitas tax allowance yang lebih rendah.",
          D: "Fasilitas menurunkan tarif, tidak membebaskan dividen."
        },
        jebakan: "Bandingkan tiga tarif (domestik, P3B, fasilitas) dan pakai yang paling rendah sesuai syarat."
      },
      dasarHukum: [{ pasal: "PP 78/2019 Pasal 3 (tarif dividen 10%)" }, { pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "C9-045",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Baja Hijau Indonesia (industri pionir logam dasar hulu) memperoleh keputusan tax holiday berdasarkan PMK 130/PMK.010/2020 dengan rencana penanaman modal baru Rp1.200.000.000.000 dan mulai berproduksi komersial pada tahun pajak 2025. Fasilitas pengurangan PPh badan yang diperoleh adalah ...",
      kataKualifikasi: [],
      opsi: { A: "100% selama 5 tahun pajak, lalu 25% selama 2 tahun pajak berikutnya", B: "100% selama 7 tahun pajak sejak produksi komersial, lalu 50% selama 2 tahun pajak berikutnya", C: "50% selama 5 tahun pajak (mini tax holiday), karena investasi di bawah Rp5 triliun", D: "100% selama 10 tahun pajak, lalu 50% selama 2 tahun pajak berikutnya" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Investasi Rp1 triliun sampai kurang dari Rp5 triliun mendapat pengurangan 100% selama 7 tahun pajak, diikuti masa transisi 50% selama 2 tahun.",
        jejakHitung: [
          ["Nilai investasi", "Rp1,2 triliun"],
          ["Lapisan Rp1 T–< Rp5 T", "100% selama 7 tahun"],
          ["Transisi", "50% selama 2 tahun"]
        ],
        mengapaSalah: {
          A: "5 tahun untuk lapisan Rp500 miliar–< Rp1 triliun; transisi 25% milik mini tax holiday.",
          C: "Mini tax holiday 50% untuk investasi Rp100 miliar–< Rp500 miliar.",
          D: "10 tahun untuk lapisan Rp5 triliun–< Rp15 triliun."
        },
        jebakan: "Baca nilai investasi dengan teliti terhadap batas lapisan."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (3) huruf a, ayat (4) huruf b, ayat (6) huruf a, dan Pasal 12 ayat (1) PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024", berlakuSejak: "2020-10-09" }, { pasal: "Pasal 18 ayat (3) huruf e dan ayat (4) UU 25/2007 s.t.d.t.d. UU 6/2023 (Penanaman Modal)", berlakuSejak: "2022-12-30" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "C9-046", topik: "C9.5", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Lestari Agro (PMA; bukan bank, lembaga pembiayaan, asuransi, pertambangan berkontrak, atau infrastruktur) membayar bunga Rp1.500.000.000 pada 2025 atas pinjaman dari induknya, Palmera Holdings (Negara Selvia, mitra P3B; tarif bunga P3B 10%; SKD sah). Rata-rata saldo akhir bulan utang 2025 Rp25.000.000.000 dan modal Rp5.000.000.000; suku bunga sudah wajar. Koreksi fiskal atas biaya bunga dan PPh Pasal 26 yang dipotong atas pembayaran bunga tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp375.000.000; PPh 26 Rp150.000.000",
        B: "Koreksi positif Rp300.000.000; PPh 26 Rp120.000.000",
        C: "Koreksi positif Rp300.000.000; PPh 26 Rp150.000.000",
        D: "Tanpa koreksi; PPh 26 Rp300.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "DER 5:1 melebihi 4:1, sehingga biaya pinjaman yang boleh dikurangkan = 4/5 bagian. Pemotongan PPh 26 tetap atas seluruh bunga yang dibayar dengan tarif P3B 10%, tidak bergantung pada bagian yang boleh dibiayakan.",
        jejakHitung: [["DER = 25 ÷ 5", "5 : 1"], ["Biaya pinjaman boleh = 4/5 × Rp1.500.000.000", "Rp1.200.000.000"], ["Koreksi positif", "Rp300.000.000"], ["PPh 26 = 10% × Rp1.500.000.000", "Rp150.000.000"]],
        mengapaSalah: {
          A: "Menghitung bagian tidak boleh sebagai 1/4 (Rp375.000.000), padahal (5 − 4)/5 = 1/5.",
          B: "Memotong PPh 26 hanya atas bagian yang boleh dibiayakan; pemotongan atas jumlah bruto yang dibayar.",
          D: "Mengabaikan batas DER dan memakai tarif domestik 20% padahal SKD sah."
        },
        jebakan: "Koreksi DER (sisi biaya pembayar) dan PPh 26 (sisi penghasilan penerima) adalah dua hal terpisah."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015 (DER 4:1)", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 26 ayat (1) huruf b UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-047",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.4A.1",
      stem: "PT Sentosa Kimia memanfaatkan fasilitas tax allowance (PP 78/2019) pada tahun pajak 2025. Dalam SPT Tahunan PPh Badan tahun pajak 2025 menurut PER-11/PJ/2025, daftar fasilitas penanaman modal tersebut disajikan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 7 (penghitungan kompensasi kerugian fiskal)", B: "Lampiran 13A (daftar fasilitas penanaman modal)", C: "Lampiran 9 (daftar penyusutan dan amortisasi fiskal)", D: "Lampiran 4 (penghasilan yang dikenai PPh final dan yang tidak termasuk objek pajak)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 85 ayat (1) PER-11/PJ/2025 menyediakan Lampiran 13A - Daftar Fasilitas Penanaman Modal untuk fasilitas seperti tax allowance. Format 1771 lama (lampiran khusus 4A) hanya dipakai untuk tahun pajak sampai 2024.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Lampiran 7 memuat penghitungan kompensasi kerugian, walaupun tax allowance dapat memperpanjang masanya.",
          C: "Lampiran 9 memuat penyusutan dan amortisasi; penyusutan dipercepat tetap dicatat di sana, tetapi daftar fasilitasnya di Lampiran 13A.",
          D: "Lampiran 4 untuk PPh final dan penghasilan bukan objek; tax allowance bukan pembebasan objek."
        },
        jebakan: "Fasilitas investasi tercermin di beberapa lampiran, tetapi daftarnya di Lampiran 13A. Jangan tertukar dengan Lampiran 13C (fasilitas pengurangan PPh badan atau tax holiday) dan Lampiran 13B (tambahan pengurangan penghasilan bruto)."
      },
      dasarHukum: [{ pasal: "PP 78/2019 (fasilitas PPh untuk penanaman modal)", berlakuSejak: "2019-11-12" }, { pasal: "Pasal 85 ayat (1) dan Pasal 138 huruf a PER-11/PJ/2025 (bentuk SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C9-048",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Halcyon (entitas induk utama di Negara Tervia) memiliki anak perusahaan PT Halcyon Indonesia. Pendapatan konsolidasi grup: 2021 EUR 760 juta, 2022 EUR 700 juta, 2023 EUR 780 juta, dan 2024 EUR 735 juta. Untuk tahun pajak 2025, status PT Halcyon Indonesia terhadap pajak minimum global (PMK 136/2024) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Termasuk cakupan, karena pendapatan konsolidasi ≥ EUR 750 juta pada 2 dari 4 tahun sebelumnya (2021 dan 2023)", B: "Tidak termasuk, karena pendapatan tahun 2024 (tahun tepat sebelumnya) di bawah ambang EUR 750 juta", C: "Tidak termasuk, karena rata-rata pendapatan empat tahun hanya EUR 743,75 juta, di bawah EUR 750 juta", D: "Termasuk cakupan hanya bila peredaran bruto konsolidasi ≥ Rp11 triliun sesuai ambang CbCR Indonesia" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Uji cakupan GloBE: pendapatan konsolidasi ≥ EUR 750 juta pada paling sedikit 2 dari 4 tahun pajak sebelumnya. Tahun 2021 (760) dan 2023 (780) memenuhi, sehingga grup masuk cakupan untuk 2025.",
        jejakHitung: [
          ["2021", "EUR 760 juta ≥ 750 ✔"],
          ["2022", "EUR 700 juta"],
          ["2023", "EUR 780 juta ≥ 750 ✔"],
          ["2024", "EUR 735 juta"],
          ["Tahun memenuhi", "2 dari 4 → masuk cakupan"]
        ],
        mengapaSalah: {
          B: "Uji tidak hanya melihat tahun tepat sebelumnya.",
          C: "Uji memakai hitungan tahun yang memenuhi, bukan rata-rata.",
          D: "Rp11 triliun adalah ambang CbCR PMK 172/2023, bukan ambang GloBE."
        },
        jebakan: "“2 dari 4 tahun” — hitung jumlah tahun, jangan rata-ratakan."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 Pasal 2 ayat (1)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-049", topik: "C9.6", tingkat: ["C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "PMK 136/2024 (parafrase ketentuan berlaku): Income Inclusion Rule dan Pajak Minimum Domestik Tambahan berlaku untuk tahun pajak yang dimulai sejak 1 Januari 2025, sedangkan Undertaxed Profit Rule berlaku untuk tahun pajak yang dimulai sejak 1 Januari 2026.",
      stem: "PT Garuda Holding (Indonesia) adalah entitas induk utama grup PMN beromzet konsolidasi EUR 2 miliar dengan: (i) anak perusahaan 100% di Negara Zarvia yang ETR GloBE-nya 6% dan Zarvia tidak menerapkan pajak minimum domestik; (ii) anak perusahaan 100% PT Garuda Smelter di Indonesia yang ETR yurisdiksi Indonesianya 4% karena tax holiday. Berdasarkan kutipan tersebut, mekanisme yang berlaku untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "UTPR atas laba Zarvia dan DMTT atas PT Garuda Smelter",
        B: "Tidak ada pajak tambahan karena tax holiday adalah fasilitas sah dan UTPR baru berlaku 2026",
        C: "IIR oleh PT Garuda Holding atas laba Zarvia dan DMTT atas PT Garuda Smelter",
        D: "IIR atas kedua anak perusahaan, karena DMTT baru berlaku 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Untuk 2025, entitas induk utama di Indonesia menerapkan IIR atas anak luar negeri yang ETR-nya di bawah 15%, sedangkan laba Indonesia yang ETR-nya rendah dikenai DMTT. UTPR baru berlaku 2026 dan berfungsi sebagai backstop.",
        jejakHitung: [],
        mengapaSalah: {
          A: "UTPR belum berlaku pada 2025 dan bukan mekanisme utama bila induk menerapkan IIR.",
          B: "Fasilitas sah tetap dapat memicu top-up bila ETR < 15%.",
          D: "DMTT sudah berlaku 2025 dan didahulukan atas entitas di Indonesia."
        },
        jebakan: "Cocokkan mekanisme dengan tahun berlaku: 2025 = IIR + DMTT; 2026 = + UTPR."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 (ketentuan berlaku IIR, DMTT, UTPR)", berlakuSejak: "2025-01-01" }, { pasal: "PER-6/PJ/2026", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-050",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Kalimaya Smelter (anak perusahaan grup PMN Velmora yang entitas induk utamanya di luar negeri, dalam cakupan PMK 136/2024, dan satu-satunya entitas konstituen grup di Indonesia) menikmati tax holiday sehingga pada tahun pajak 2025 laba GloBE-nya Rp200.000.000.000 dengan pajak tercakup yang disesuaikan Rp10.000.000.000. Pengecualian penghasilan berbasis substansi (SBIE) atas gaji dan aset berwujud Rp40.000.000.000. Tidak ada penyesuaian lain. Pajak minimum domestik tambahan (DMTT) tahun 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000.000.000", B: "Rp16.000.000.000", C: "Rp24.000.000.000", D: "Rp27.200.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Top-up = (15% − ETR) × (laba GloBE − SBIE). Tax holiday menurunkan ETR menjadi 5%, sehingga Indonesia memungut sendiri selisihnya melalui DMTT.",
        jejakHitung: [
          ["ETR = 10 ÷ 200 miliar", "5%"],
          ["Persentase top-up = 15% − 5%", "10%"],
          ["Laba lebih = 200 − 40 miliar", "Rp160.000.000.000"],
          ["DMTT = 10% × Rp160 miliar", "Rp16.000.000.000"]
        ],
        mengapaSalah: {
          A: "Lupa mengurangkan SBIE: 10% × Rp200 miliar.",
          C: "Mengalikan tarif minimum 15% (bukan selisih 10%) dengan laba lebih.",
          D: "Memakai tarif PPh badan 22% sebagai acuan (22% − 5% = 17%)."
        },
        jebakan: "Tarif acuan GloBE adalah 15%, bukan tarif domestik 22%."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 Pasal 1 angka 32 dan 33, Pasal 6 ayat (3), (4), dan (6), Pasal 52 ayat (1) (DMTT)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday)" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-051",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sagara Resources (entitas induk utama di Indonesia) memiliki 80% saham Kordova Mining Ltd. Pada tahun pajak 2025, yurisdiksi Kordova (hanya entitas ini) mencatat laba GloBE Rp300.000.000.000, pajak tercakup yang disesuaikan Rp27.000.000.000, dan SBIE Rp50.000.000.000; Kordova tidak menerapkan pajak minimum domestik. Pajak tambahan berdasarkan IIR yang terutang oleh PT Sagara Resources untuk 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp15.000.000.000", B: "Rp14.400.000.000", C: "Rp0, karena UTPR baru berlaku 2026", D: "Rp12.000.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "IIR memungut bagian top-up anak perusahaan sesuai porsi kepemilikan entitas induk (allocable share).",
        jejakHitung: [
          ["ETR = 27 ÷ 300 miliar", "9%"],
          ["Persentase top-up = 15% − 9%", "6%"],
          ["Laba lebih = 300 − 50 miliar", "Rp250.000.000.000"],
          ["Top-up yurisdiksi = 6% × Rp250 miliar", "Rp15.000.000.000"],
          ["Bagian induk 80%", "Rp12.000.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak memperhitungkan porsi kepemilikan 80%.",
          B: "Lupa mengurangkan SBIE: 6% × Rp300 miliar × 80%.",
          C: "IIR sudah berlaku 2025; UTPR yang baru berlaku 2026."
        },
        jebakan: "IIR = top-up × porsi kepemilikan; DMTT negara anak (bila ada) dikurangkan lebih dulu."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 Pasal 6 ayat (1), (3), dan (4), Pasal 14, dan Pasal 15 ayat (1) dan (2) (IIR, rasio inklusi); Pasal 73 (UTPR mulai 2026)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-052",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Orion (dalam cakupan PMK 136/2024) memiliki dua entitas konstituen di Indonesia pada tahun pajak 2025: PT Orion Nikel (tax holiday) dengan laba GloBE Rp100.000.000.000 dan pajak tercakup Rp0, serta PT Orion Trading dengan laba GloBE Rp300.000.000.000 dan pajak tercakup yang disesuaikan Rp66.000.000.000. Abaikan SBIE dan penyesuaian lain. Pajak minimum domestik tambahan untuk yurisdiksi Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0, karena ETR yurisdiksi Indonesia 16,5% tidak kurang dari 15%", B: "Rp15.000.000.000 atas PT Orion Nikel karena ETR entitasnya 0%", C: "Rp22.000.000.000, yaitu 22% × laba PT Orion Nikel yang dibebaskan", D: "Rp15.000.000.000 yang dipungut negara induk melalui IIR karena DMTT tidak berlaku bagi penerima tax holiday" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "ETR GloBE dihitung per yurisdiksi dengan menggabungkan seluruh entitas konstituen (jurisdictional blending): (0 + 66) ÷ (100 + 300) = 16,5% ≥ 15%, sehingga tidak ada top-up.",
        jejakHitung: [
          ["Pajak tercakup yurisdiksi = 0 + 66 miliar", "Rp66.000.000.000"],
          ["Laba GloBE yurisdiksi = 100 + 300 miliar", "Rp400.000.000.000"],
          ["ETR yurisdiksi", "16,5%"],
          ["Top-up", "Rp0"]
        ],
        mengapaSalah: {
          B: "ETR tidak dihitung per entitas.",
          C: "Acuan GloBE adalah 15% per yurisdiksi, bukan tarif domestik 22% atas laba yang dibebaskan.",
          D: "DMTT justru berlaku atas entitas di Indonesia termasuk penerima tax holiday; di sini tidak ada top-up karena ETR yurisdiksi ≥ 15%."
        },
        jebakan: "Pajak entitas bertarif tinggi dapat “menutup” entitas bertarif rendah di yurisdiksi yang sama."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 Pasal 1 angka 32, Pasal 5 ayat (1) (ETR per yurisdiksi), Pasal 52 ayat (1)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "C9-053",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Garuda Holding (entitas induk utama Grup PMN di Indonesia, tahun buku kalender) untuk pertama kalinya masuk cakupan pajak minimum global pada tahun pajak 2025, sehingga 2025 adalah Tahun Pengenaan GloBE pertama grup. Batas waktu penyampaian GloBE Information Return (GIR) untuk Tahun Pengenaan GloBE 2025 adalah paling lama ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "31 Maret 2027 (15 bulan setelah akhir tahun pajak)", B: "30 Juni 2027 (18 bulan, khusus tahun pertama)", C: "30 April 2026, bersamaan dengan SPT Tahunan PPh Badan", D: "31 Desember 2026 (12 bulan, sama dengan CbCR)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk Tahun Pengenaan GloBE pertama, GIR disampaikan paling lama 18 bulan setelah akhir Tahun Pengenaan GloBE (Pasal 13 ayat (2) PER-6/PJ/2026), yaitu 30 Juni 2027. Untuk tahun berikutnya tenggatnya 15 bulan (Pasal 13 ayat (1)).",
        jejakHitung: [
          ["Akhir Tahun Pengenaan GloBE 2025", "31 Desember 2025"],
          ["GIR: + 18 bulan (Tahun Pengenaan GloBE pertama)", "30 Juni 2027"]
        ],
        mengapaSalah: {
          A: "15 bulan (31 Maret 2027) adalah tenggat GIR untuk Tahun Pengenaan GloBE kedua dan seterusnya, bukan tahun pertama.",
          C: "30 April 2026 adalah batas SPT Tahunan PPh Badan 2025, bukan GIR.",
          D: "12 bulan adalah tenggat CbCR, bukan GIR."
        },
        jebakan: "Kata “pertama kalinya” mengubah tenggat GIR dari 15 menjadi 18 bulan. Jangan disamakan dengan SPT Tahunan PPh dalam rangka GloBE: tenggatnya 4 bulan setelah akhir Tahun Pajak GloBE (Pasal 11 ayat (1) PER-6/PJ/2026) dan untuk tahun pertama dapat diperpanjang paling lama 2 bulan dengan pemberitahuan (Pasal 11 ayat (2))."
      },
      dasarHukum: [{ pasal: "Pasal 65 ayat (3), ayat (13), ayat (14) dan Pasal 69 PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 dan Pasal 13 PER-6/PJ/2026", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-054",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "Dalam pajak minimum global, beberapa entitas berstatus entitas yang dikecualikan (excluded entity) sehingga laba dan pajaknya tidak ikut dihitung dalam ETR yurisdiksi. Dari entitas anggota grup berikut, yang bukan entitas yang dikecualikan adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Entitas pemerintah (government entity)", B: "Organisasi internasional (international organisation)", C: "Dana pensiun (pension fund)", D: "Anak perusahaan manufaktur penerima tax holiday" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Entitas pemerintah, organisasi internasional, nirlaba, dan dana pensiun adalah entitas yang dikecualikan. Anak perusahaan manufaktur penerima fasilitas tetap entitas konstituen yang dihitung.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Entitas pemerintah termasuk entitas yang dikecualikan.",
          B: "Organisasi internasional termasuk entitas yang dikecualikan.",
          C: "Dana pensiun termasuk entitas yang dikecualikan."
        },
        jebakan: "Fasilitas pajak tidak membuat entitas dikecualikan; justru memicu top-up."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C9-055",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Untuk tahun pajak 2025, data CbCR berkualitas grup Lyra untuk yurisdiksi Indonesia: pendapatan EUR 40 juta, laba sebelum pajak EUR 3 juta, pajak penghasilan sederhana EUR 465 ribu (ETR sederhana 15,5%), dan nilai pengecualian berbasis substansi (SBIE) EUR 3,4 juta. Berdasarkan safe harbour transisi CbCR yang diadopsi PMK 136/2024, kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Gagal semua uji karena ETR sederhana 15,5% di bawah ambang 2025 sebesar 16%, sehingga wajib menghitung GloBE penuh", B: "Lolos uji de minimis karena laba sebelum pajak EUR 3 juta di bawah EUR 10 juta, sehingga pajak tambahan dianggap nol", C: "Lolos uji laba rutin karena laba sebelum pajak (EUR 3 juta) tidak melebihi SBIE (EUR 3,4 juta); pajak tambahan dianggap nol", D: "Lolos uji ETR karena ETR sederhana 15,5% sudah melampaui tarif minimum 15%, sehingga pajak tambahan dianggap nol" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Safe harbour CbCR periode tertentu memiliki tiga uji alternatif. Uji de minimis gagal (pendapatan tidak kurang dari EUR 10 juta) dan uji ETR sederhana gagal (15,5% < 16% untuk tahun pajak 2025), tetapi uji laba rutin lolos karena laba sebelum pajak ≤ SBIE.",
        jejakHitung: [
          ["De minimis: pendapatan < EUR 10 juta dan laba < EUR 1 juta?", "tidak (EUR 40 juta; EUR 3 juta)"],
          ["ETR sederhana ≥ 16% (2025)?", "tidak (15,5%)"],
          ["Laba ≤ SBIE?", "ya (3 ≤ 3,4)"],
          ["Kesimpulan", "safe harbour berlaku, top-up dianggap nol"]
        ],
        mengapaSalah: {
          A: "Lupa bahwa uji bersifat alternatif; uji laba rutin masih lolos.",
          B: "De minimis menguji pendapatan < EUR 10 juta dan laba < EUR 1 juta, bukan laba < EUR 10 juta.",
          D: "Ambang 15% hanya untuk tahun pajak yang dimulai pada 2024; untuk tahun pajak yang dimulai pada 2025 ambangnya 16%."
        },
        jebakan: "Ambang ETR sederhana naik bertahap: 15% (tahun pajak mulai 2024), 16% (2025), dan 17% (2026 sampai tahun pajak yang berakhir 30 Juni 2028)."
      },
      dasarHukum: [{ pasal: "Pasal 56 ayat (3) sampai ayat (6) dan ayat (11) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-056", topik: "C9.4", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Wira Komponen (PMA, peredaran bruto 2025 Rp310 miliar, DER 2:1) 90% sahamnya dimiliki Ostara Industries AG yang berkedudukan di Negara Helvara (mitra P3B; tarif P3B dividen 10% untuk kepemilikan paling sedikit 25%, bunga 10%, royalti 10%; P3B tidak memuat pasal khusus imbalan jasa teknik). Ostara telah menyerahkan Form DGT yang sah sebelum pembayaran, merupakan pemilik manfaat, dan tidak mempunyai BUT di Indonesia. Pada Masa Agustus 2026 PT Wira membayar kepada Ostara: (1) harga bahan baku impor Rp6.000.000.000 (barang dikirim dari Helvara dan PPh Pasal 22 impor telah dipungut saat pengeluaran barang); (2) royalti lisensi teknologi produksi Rp1.000.000.000; (3) imbalan jasa desain cetakan yang seluruhnya dikerjakan di Helvara Rp400.000.000; (4) bunga pinjaman pemegang saham Rp300.000.000. Seluruh harga sudah sesuai prinsip kewajaran. PPh Pasal 26 yang wajib dipotong PT Wira untuk Masa Agustus 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp170.000.000", B: "Rp340.000.000", C: "Rp130.000.000", D: "Rp430.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembelian barang dari luar negeri bukan objek PPh Pasal 26 (penghasilan penjual adalah laba usaha di luar negeri; di Indonesia yang dikenakan PPh Pasal 22 impor). Dengan Form DGT sah, royalti dan bunga dipotong dengan tarif P3B 10%, sedangkan imbalan jasa desain yang dikerjakan di luar negeri merupakan laba usaha tanpa BUT sehingga tidak dipotong.",
        jejakHitung: [["(1) Bahan baku impor — pembelian barang, bukan objek PPh Pasal 26", "Rp0"], ["(2) Royalti 10% × Rp1.000.000.000", "Rp100.000.000"], ["(3) Jasa desain di Helvara — laba usaha tanpa BUT (Pasal 7 P3B)", "Rp0"], ["(4) Bunga 10% × Rp300.000.000", "Rp30.000.000"], ["Total PPh Pasal 26 Masa Agustus 2026", "Rp130.000.000"]],
        mengapaSalah: {
          A: "Memperlakukan jasa desain seperti royalti dan memotong 10% × Rp400.000.000; P3B tanpa pasal jasa teknik menjadikannya laba usaha yang hanya dipajaki di Helvara bila tidak ada BUT.",
          B: "Mengabaikan Form DGT dan memotong 20% atas royalti, jasa, dan bunga (20% × Rp1.700.000.000).",
          D: "Memotong 5% (20% × perkiraan neto 25%) atas harga bahan baku seolah-olah penjualan harta di Indonesia (Pasal 26 ayat (2)); pembelian barang impor bukan objek PPh Pasal 26."
        },
        jebakan: "Empat pembayaran ke pihak yang sama punya empat perlakuan: barang (bukan objek), royalti dan bunga (tarif P3B), jasa di luar negeri (laba usaha)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 22 UU PPh (PPh Pasal 22 impor)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-057", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Tirta Pangan membeli mesin pengolah air dari Aqualis Ltd yang berkedudukan di Negara Rhenia seharga Rp2.000.000.000; mesin dikirim dari Rhenia dan PPh Pasal 22 impor dipungut saat pengeluaran barang. Berdasarkan kontrak terpisah, dua teknisi Aqualis memasang mesin di pabrik Cikarang selama 20 hari pada Juli 2026 dengan imbalan Rp300.000.000. PT Tirta juga membayar premi asuransi pengangkutan mesin Rp50.000.000 langsung kepada Marisure Ltd, perusahaan asuransi di Rhenia, dengan PT Tirta sebagai tertanggung. Indonesia mempunyai P3B dengan Rhenia, tetapi baik Aqualis maupun Marisure tidak menyerahkan Form DGT; keduanya tidak mempunyai BUT di Indonesia. Jumlah PPh Pasal 26 yang wajib dipotong PT Tirta atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp70.000.000", B: "Rp165.000.000", C: "Rp61.000.000", D: "Rp65.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Harga mesin adalah pembelian barang dari luar negeri sehingga bukan objek PPh Pasal 26. Imbalan pemasangan 20 hari tidak menimbulkan BUT, tetapi tanpa Form DGT dipotong 20% dari bruto. Premi asuransi yang dibayar tertanggung kepada asuransi luar negeri dipotong 20% × perkiraan penghasilan neto 50% = 10% dari premi.",
        jejakHitung: [["Harga mesin (pembelian barang)", "Rp0"], ["Imbalan pemasangan 20% × Rp300.000.000", "Rp60.000.000"], ["Premi asuransi: 20% × 50% × Rp50.000.000", "Rp5.000.000"], ["Total PPh Pasal 26", "Rp65.000.000"]],
        mengapaSalah: {
          A: "Memotong premi asuransi 20% dari bruto (Rp10.000.000); premi asuransi memakai perkiraan penghasilan neto.",
          B: "Memotong 5% atas harga mesin (Rp100.000.000) seolah-olah penjualan harta di Indonesia.",
          C: "Memakai tarif efektif 2% untuk premi yang dibayar perusahaan asuransi dalam negeri; yang membayar di sini tertanggung (10%)."
        },
        jebakan: "Beli barang dari luar negeri = bukan objek PPh 26; jasa dan premi asuransi tetap objek, dengan dasar pemotongan yang berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 624/KMK.04/1994 (perkiraan penghasilan neto premi asuransi ke luar negeri)" }, { pasal: "Pasal 2 ayat (5) huruf m UU PPh (time test BUT jasa)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (tanpa Form DGT berlaku tarif UU PPh)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-058", topik: "C9.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 3 ayat (1) UU PPh (parafrase): Tidak termasuk subjek pajak: (a) kantor perwakilan negara asing; (b) pejabat perwakilan diplomatik dan konsulat atau pejabat lain dari negara asing serta orang yang diperbantukan kepada mereka, dengan syarat bukan warga negara Indonesia, di Indonesia tidak menerima atau memperoleh penghasilan lain di luar jabatan atau pekerjaannya, dan negara bersangkutan memberikan perlakuan timbal balik; (c) organisasi internasional dengan syarat Indonesia menjadi anggota dan organisasi itu tidak menjalankan usaha atau kegiatan lain untuk memperoleh penghasilan dari Indonesia selain memberikan pinjaman kepada pemerintah yang dananya berasal dari iuran anggota; (d) pejabat perwakilan organisasi internasional tersebut, dengan syarat bukan warga negara Indonesia dan tidak menjalankan usaha, kegiatan, atau pekerjaan lain untuk memperoleh penghasilan dari Indonesia.",
      stem: "Pada 2026 kantor konsultan pajak Anda menerima empat permintaan analisis status subjek pajak dari calon klien. Berdasarkan kutipan tersebut, pihak yang tidak termasuk subjek pajak adalah ...",
      kataKualifikasi: ["tidak termasuk"],
      opsi: {
        A: "Kantor perwakilan dagang Sakura Trading Co. (Negara Nippora) di Jakarta yang mempromosikan produk dan mengumpulkan pesanan untuk kantor pusatnya",
        B: "Tuan Hendrik (WN Valoria), pejabat konsulat Valoria di Surabaya, yang juga menerima sewa Rp180.000.000 per tahun dari apartemen miliknya di Jakarta",
        C: "Tuan Arvid (WN Nordmark), pejabat organisasi internasional yang ditetapkan Menteri Keuangan, tanpa usaha atau pekerjaan lain di Indonesia",
        D: "Ibu Ratna (WNI), staf administrasi lokal Kedutaan Besar Negara Corvia di Jakarta yang digaji oleh kedutaan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pejabat perwakilan organisasi internasional yang ditetapkan Menteri Keuangan, bukan WNI, dan tidak memperoleh penghasilan lain dari Indonesia memenuhi Pasal 3 ayat (1) huruf d sehingga tidak termasuk subjek pajak.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kantor perwakilan perusahaan asing adalah BUT (Pasal 2 ayat (5) huruf c), bukan kantor perwakilan negara asing.",
          B: "Pejabat konsulat kehilangan pengecualian karena menerima penghasilan lain di Indonesia (sewa apartemen).",
          D: "Syarat “bukan warga negara Indonesia” tidak terpenuhi; staf lokal WNI tetap subjek pajak dalam negeri."
        },
        jebakan: "“Kantor perwakilan” perusahaan asing (BUT) berbeda dengan “kantor perwakilan negara asing” (bukan subjek pajak)."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (5) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-059",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Ibu Ratna (WNI, berdomisili di Bekasi) bekerja sebagai staf administrasi lokal Kedutaan Besar Negara Corvia dengan gaji Rp15.000.000 per bulan sejak Januari 2026. Tuan Laurent (WN Corvia) adalah sekretaris pertama di kedutaan yang sama, tinggal di Jakarta lebih dari 183 hari dalam 2026, tidak menerima penghasilan lain di Indonesia, dan Corvia memberikan perlakuan timbal balik. Kedutaan tidak menjalankan kegiatan usaha. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kedutaan wajib memotong PPh Pasal 21 atas gaji Ibu Ratna setiap bulan; Tuan Laurent tidak termasuk subjek pajak karena memenuhi syarat Pasal 3 ayat (1) huruf b UU PPh", B: "Kedutaan bukan pemotong PPh Pasal 21, sehingga Ibu Ratna wajib menghitung, menyetor, dan melaporkan sendiri PPh atas gajinya; Tuan Laurent tidak termasuk subjek pajak karena memenuhi syarat Pasal 3 ayat (1) huruf b UU PPh", C: "Kedutaan bukan pemotong PPh Pasal 21, sehingga gaji Ibu Ratna bukan objek PPh; Tuan Laurent tidak termasuk subjek pajak karena memenuhi syarat Pasal 3 ayat (1) huruf b UU PPh", D: "Kedutaan bukan pemotong PPh Pasal 21, sehingga Ibu Ratna wajib menghitung, menyetor, dan melaporkan sendiri PPh atas gajinya; Tuan Laurent menjadi subjek pajak dalam negeri karena berada di Indonesia lebih dari 183 hari" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Kantor perwakilan negara asing tidak termasuk subjek pajak dan tidak termasuk pemotong PPh Pasal 21, tetapi gaji staf lokal WNI tetap objek PPh yang harus dibayar dan dilaporkan sendiri. Pejabat diplomatik asing tanpa penghasilan lain dan dengan perlakuan timbal balik dikecualikan sebagai subjek pajak, berapa pun lama tinggalnya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kantor perwakilan negara asing dikecualikan dari kewajiban sebagai pemotong PPh Pasal 21.",
          C: "Tidak adanya pemotong tidak menghapus status gaji sebagai objek PPh.",
          D: "Uji 183 hari tidak berlaku bagi pejabat diplomatik yang memenuhi Pasal 3 ayat (1) huruf b."
        },
        jebakan: "Opsi hanya berbeda pada satu anak kalimat; periksa dua hal: siapa pemotong dan apakah syarat Pasal 3 terpenuhi."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 21 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) huruf a PMK 168/2023 (kantor perwakilan negara asing bukan pemotong PPh Pasal 21)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-060",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Samudra Kimia Tbk (peredaran bruto 2025 Rp180 miliar) mencatatkan 45% saham disetornya di Bursa Efek Indonesia. Laporan biro administrasi efek menunjukkan saham tersebut dimiliki paling sedikit 300 pihak yang masing-masing memiliki kurang dari 5% hanya selama 150 hari dalam tahun 2025. Data fiskal 2025: penghasilan neto dalam negeri Rp7.000.000.000; royalti bruto dari Negara Tavora Rp1.000.000.000 yang dipotong pajak Tavora Rp150.000.000 sesuai tarif P3B 15%. Kredit pajak dalam negeri: PPh Pasal 22 Rp120.000.000, PPh Pasal 23 Rp80.000.000, dan PPh Pasal 25 Rp1.300.000.000. Tidak ada sisa kerugian fiskal. PPh kurang atau lebih bayar dalam SPT Tahunan PPh Badan 2025 adalah ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: { A: "Kurang bayar (PPh Pasal 29) Rp110.000.000", B: "Lebih bayar Rp130.000.000", C: "Kurang bayar (PPh Pasal 29) Rp40.000.000", D: "Kurang bayar (PPh Pasal 29) Rp260.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penurunan tarif 3% bagi perseroan terbuka mensyaratkan kepemilikan publik (≥ 300 pihak, masing-masing < 5%) terpenuhi paling sedikit 183 hari dalam setahun; 150 hari tidak cukup sehingga tarif 22%. Kredit PPh Pasal 24 Tavora = nilai terkecil antara pajak dibayar dan batas yang dihitung per jenis penghasilan untuk tiap negara (royalti Tavora).",
        jejakHitung: [
          ["PKP = 7.000 + 1.000 juta", "Rp8.000.000.000"],
          ["Syarat 183 hari tidak terpenuhi → tarif", "22%"],
          ["PPh terutang", "Rp1.760.000.000"],
          ["Batas Tavora = 1.000/8.000 × 1.760 juta = 220 juta → min(150; 220)", "Rp150.000.000"],
          ["Kredit: PPh 24 + 22 + 23 + 25 = 150 + 120 + 80 + 1.300 juta", "Rp1.650.000.000"],
          ["PPh Pasal 29", "Rp110.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai tarif 19% (PPh Rp1.520.000.000) padahal syarat 183 hari tidak terpenuhi.",
          C: "Mengkreditkan batas maksimum Rp220.000.000, bukan pajak Tavora yang benar-benar dibayar Rp150.000.000.",
          D: "Lupa mengkreditkan PPh Pasal 24 Rp150.000.000."
        },
        jebakan: "Status “Tbk” saja tidak otomatis memberi tarif 19%; cek syarat kepemilikan publik dan 183 hari."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 (syarat penurunan tarif perseroan terbuka)", berlakuSejak: "2022-12-20" }, { pasal: "Pasal 24, Pasal 28, dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-061", topik: "C9.4", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Nusa Investama (WP badan dalam negeri, bukan perseroan terbuka; peredaran bruto 2025 Rp120 miliar) memiliki penyertaan: (1) 70% saham PT Nusa Agro (Indonesia), dividen diterima 2025 Rp3.000.000.000; (2) 100% saham Nusa Pacific Ltd (Negara Lorenia, tidak tercatat di bursa, menjalankan usaha perkebunan aktif tanpa penghasilan pasif), dividen Rp2.000.000.000 yang dipotong pajak Lorenia Rp200.000.000 dan seluruhnya diinvestasikan di Indonesia dalam bentuk dan jangka waktu yang memenuhi Pasal 4 ayat (3) huruf f angka 2 UU PPh; (3) 3% saham Harbor Corp (Negara Lorenia, tercatat di bursa Lorenia), dividen Rp500.000.000 yang dipotong pajak Lorenia Rp50.000.000 dan tidak diinvestasikan di Indonesia. Penghasilan neto fiskal lainnya Rp10.000.000.000. Dividen yang digabungkan dalam PKP 2025 dan kredit PPh Pasal 24 yang dapat diklaim adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.500.000.000; kredit PPh Pasal 24 Rp250.000.000", B: "Rp500.000.000; kredit PPh Pasal 24 Rp110.000.000", C: "Rp5.500.000.000; kredit PPh Pasal 24 Rp250.000.000", D: "Rp500.000.000; kredit PPh Pasal 24 Rp50.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dividen dari PT dalam negeri dan dividen luar negeri yang diinvestasikan di Indonesia sesuai ketentuan bukan objek PPh, sehingga pajak Lorenia atasnya tidak dapat dikreditkan. Hanya dividen Harbor Rp500.000.000 yang digabung; kreditnya nilai terkecil antara Rp50.000.000 dan batas Lorenia.",
        jejakHitung: [["(1) Dividen PT Nusa Agro — Pasal 4 ayat (3) huruf f angka 1", "bukan objek"], ["(2) Dividen Nusa Pacific diinvestasikan — Pasal 4 ayat (3) huruf f angka 2", "bukan objek"], ["(3) Dividen Harbor tidak diinvestasikan", "Rp500.000.000"], ["PKP = 10.000 + 500 juta; PPh 22%", "Rp2.310.000.000"], ["Batas Lorenia = 500/10.500 × 2.310 juta = 110 juta → min(50; 110)", "Rp50.000.000"]],
        mengapaSalah: {
          A: "Menggabungkan dividen Nusa Pacific yang sudah diinvestasikan sesuai ketentuan dan mengkreditkan pajaknya.",
          B: "Benar menggabungkan Rp500.000.000, tetapi ikut mengkreditkan pajak Rp200.000.000 atas dividen bukan objek sehingga kredit naik sampai batas Rp110.000.000.",
          C: "Menggabungkan semua dividen, termasuk dividen dalam negeri yang bukan objek PPh bagi WP badan dalam negeri."
        },
        jebakan: "Penyertaan afiliasi tidak otomatis berarti dividennya objek; uji sumbernya (dalam/luar negeri), syarat investasi, lalu baru kredit PPh Pasal 24. Penyertaan pada afiliasi tetap diungkapkan pada lampiran SPT Tahunan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f angka 1 dan angka 2 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "PMK 18/PMK.03/2021 (investasi dividen luar negeri; CFC atas penghasilan tertentu)" }, { pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "C9-062", topik: "C9.1", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Sakura Instruments KK berkedudukan di Negara Nippora (mitra P3B; pasal BUT P3B memuat ketentuan agen tidak bebas yang sejalan dengan UU PPh; Form DGT sah) dan tidak mempunyai kantor di Indonesia. Sejak Januari 2026 Sakura menunjuk Tuan Bima (WNI, tinggal di Surabaya) sebagai perwakilan penjualan. Tuan Bima hanya bekerja untuk Sakura, menerima gaji tetap ditambah komisi, serta berwenang dan secara rutin menandatangani kontrak penjualan atas nama Sakura dengan pelanggan Indonesia; barang dikirim langsung dari Nippora. Penjualan 2026 melalui Tuan Bima Rp14.000.000.000. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Tuan Bima merupakan agen yang kedudukannya bebas, sehingga Sakura tidak mempunyai BUT di Indonesia dan laba penjualan melalui Tuan Bima hanya dipajaki di Nippora",
        B: "Tuan Bima merupakan agen yang kedudukannya tidak bebas, sehingga Sakura mempunyai BUT di Indonesia dan laba penjualan melalui Tuan Bima dipajaki sebagai penghasilan BUT dengan tarif 22%",
        C: "Tuan Bima merupakan agen yang kedudukannya tidak bebas, sehingga Sakura mempunyai BUT di Indonesia, tetapi laba penjualan melalui Tuan Bima cukup dipotong PPh Pasal 26 sebesar 20% dari harga barang oleh pelanggan",
        D: "Tuan Bima merupakan agen yang kedudukannya tidak bebas, tetapi Sakura tidak mempunyai BUT karena Sakura sendiri tidak menempatkan pegawainya di Indonesia lebih dari 60 hari dalam jangka waktu 12 bulan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Orang yang bekerja hanya untuk satu prinsipal dan secara rutin menandatangani kontrak atas namanya adalah agen tidak bebas, salah satu bentuk BUT dalam Pasal 2 ayat (5). Laba penjualan yang diatribusikan kepada BUT dipajaki dengan tarif badan 22% melalui SPT Tahunan BUT (dan atas laba sesudah pajaknya berlaku Pasal 26 ayat (4)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Agen bebas bertindak dalam kegiatan usahanya yang biasa untuk banyak prinsipal; Tuan Bima eksklusif dan menandatangani kontrak.",
          C: "Setelah BUT ada, laba dipajaki sebagai penghasilan BUT, bukan PPh Pasal 26 final atas harga barang.",
          D: "Uji lebih dari 60 hari hanya untuk BUT pemberian jasa; BUT agen tidak bebas tidak memakai uji waktu."
        },
        jebakan: "Pengiriman barang langsung dari luar negeri tidak menghapus BUT agen; kuncinya kewenangan menandatangani kontrak dan ketergantungan agen."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) huruf m dan huruf n UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019 (penentuan BUT)" }, { pasal: "Pasal 5 ayat (1) huruf a dan Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-063",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Aster memiliki entitas induk utama Aster AG di Negara Halvia dengan pendapatan konsolidasi EUR 1,1 miliar setiap tahun sejak 2021. Aster AG memiliki langsung 100% saham PT Aster Indonesia (ETR GloBE yurisdiksi Indonesia 18%) dan 100% saham Aster Rolvia Ltd (ETR GloBE yurisdiksi Rolvia 7%). Halvia tidak menerapkan IIR maupun UTPR, Rolvia tidak menerapkan pajak minimum domestik, dan tidak ada entitas induk antara. Untuk tahun pajak 2026, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Atas top-up yurisdiksi Rolvia, UTPR dapat diterapkan di Indonesia terhadap PT Aster Indonesia, karena UTPR berlaku sejak tahun pajak 2026 dan top-up itu tidak dipungut melalui IIR", B: "Atas top-up yurisdiksi Rolvia, IIR dapat diterapkan di Indonesia oleh PT Aster Indonesia, karena PT Aster Indonesia dan Aster Rolvia Ltd berada dalam satu grup yang sama", C: "Atas top-up yurisdiksi Rolvia, DMTT dapat diterapkan di Indonesia terhadap PT Aster Indonesia, karena DMTT berlaku atas laba seluruh entitas konstituen grup yang ETR-nya di bawah 15%", D: "Atas top-up yurisdiksi Rolvia, tidak ada pajak tambahan yang dapat diterapkan di Indonesia, karena ETR yurisdiksi Indonesia sendiri 18% sudah di atas tarif minimum 15%" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "IIR hanya diterapkan oleh entitas induk yang memiliki kepemilikan pada entitas berpajak rendah, dan DMTT Indonesia hanya atas entitas konstituen di Indonesia. Karena Halvia tidak menerapkan IIR dan Rolvia tidak punya pajak minimum domestik, top-up Rolvia menjadi sasaran UTPR sebagai backstop. UTPR dikenakan kepada entitas konstituen di Indonesia dan berlaku mulai 1 Januari 2026.",
        jejakHitung: [],
        mengapaSalah: {
          B: "PT Aster Indonesia tidak memiliki saham Aster Rolvia (keduanya bersaudara), sehingga tidak dapat menerapkan IIR.",
          C: "DMTT Indonesia hanya mengenakan top-up atas entitas konstituen di Indonesia, yang ETR-nya 18%.",
          D: "ETR Indonesia yang tinggi tidak menghalangi UTPR; UTPR dialokasikan ke yurisdiksi UTPR berdasarkan jumlah pegawai dan harta berwujud entitas grup di sana."
        },
        jebakan: "Safe harbour UTPR transisi hanya menolkan UTPR atas entitas induk utama di yurisdiksinya (Halvia), bukan atas Rolvia. UTPR yang dialokasikan ke Indonesia juga menjadi nol bila grup masih dalam fase awal kegiatan internasional (paling banyak 6 yurisdiksi dan nilai buku bersih harta berwujud di luar yurisdiksi acuan tidak lebih dari EUR 50 juta), karena itu opsi A memakai kata “dapat”."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1), Pasal 17, Pasal 18, Pasal 52 ayat (1), Pasal 62, dan Pasal 68 PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 73 PMK 136/2024 (UTPR berlaku 1 Januari 2026)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "C9-064", topik: "C9.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-C9-04",
      kutipan: "PMK 112/2025 (parafrase): Pemotong pajak menerapkan tarif P3B apabila wajib pajak luar negeri berhak atas manfaat P3B dan telah menyerahkan Form DGT yang diisi lengkap kepada pemotong sebelum atau pada saat penghasilan dibayarkan; Form DGT itu diunggah pemotong ke sistem administrasi DJP (Coretax). Apabila persyaratan tersebut tidak terpenuhi, pemotongan dilakukan sesuai UU PPh, yaitu PPh Pasal 26 sebesar 20%.",
      stem: "Data untuk soal ini dan soal berikutnya: PT Sakti Presisi Indonesia (PMA, PKP) 75% sahamnya dimiliki Kenwa Holdings Co. di Negara Nippora (mitra P3B; tarif P3B royalti 10% dan dividen 10% untuk kepemilikan paling sedikit 25%). Kenwa adalah pemilik manfaat dan tidak mempunyai BUT di Indonesia. Pada 14 September 2026 PT Sakti membayar royalti Rp900.000.000 kepada Kenwa. Form DGT Kenwa diisi lengkap dan disahkan otoritas Nippora pada 2 September 2026, tetapi baru diserahkan kepada PT Sakti pada 25 September 2026 dan diunggah ke Coretax pada hari itu juga. Berdasarkan kutipan tersebut, perlakuan yang tepat untuk Masa Pajak September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat BPNR dengan tarif P3B 10% (Rp90.000.000), menyetor paling lambat 15 Oktober 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026",
        B: "Membuat BPNR dengan tarif 20% (Rp180.000.000), menyetor paling lambat 15 Oktober 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026",
        C: "Membuat BPPU dengan tarif 20% (Rp180.000.000), menyetor paling lambat 15 Oktober 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026",
        D: "Membuat BPNR dengan tarif 20% (Rp180.000.000), menyetor paling lambat 10 Oktober 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Yang menentukan adalah tanggal Form DGT diserahkan kepada pemotong, bukan tanggal pengesahan oleh otoritas Nippora. Form diserahkan 25 September, setelah pembayaran 14 September, sehingga syarat tarif P3B tidak terpenuhi dan PPh Pasal 26 dipotong 20% dengan bukti potong BPNR; kelebihan atas tarif P3B hanya dapat dipulihkan Kenwa melalui mekanisme pengembalian yang berlaku.",
        jejakHitung: [["Tanggal pembayaran", "14 September 2026"], ["Form DGT diserahkan", "25 September 2026 → sesudah pembayaran"], ["PPh Pasal 26 = 20% × Rp900.000.000", "Rp180.000.000"], ["Setor (tanggal 15 bulan berikutnya)", "Kamis, 15 Oktober 2026"], ["Lapor SPT Masa PPh Unifikasi", "Selasa, 20 Oktober 2026"]],
        mengapaSalah: {
          A: "Membaca tanggal pengesahan (2 September) sebagai tanggal penyerahan; kutipan mensyaratkan Form DGT diserahkan sebelum atau pada saat pembayaran.",
          C: "BPPU untuk penerima dalam negeri; WPLN memakai BPNR.",
          D: "Tanggal 10 adalah batas setor lama sebelum PMK 81/2024."
        },
        jebakan: "Dokumen sah tetapi terlambat diserahkan tetap menggugurkan tarif P3B pada saat pemotongan."
      },
      dasarHukum: [{ pasal: "PMK 112/2025 (syarat penerapan P3B dan Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) huruf c UU PPh (royalti)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94; PER-11/PJ/2025 (BPNR)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-065",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-C9-04",
      kutipan: "PMK 81/2024 (parafrase Pasal 94 dan Pasal 100): Pajak masa, termasuk PPh Pasal 26 dan PPN atas pemanfaatan jasa kena pajak dari luar Daerah Pabean, wajib disetor paling lambat tanggal 15 bulan berikutnya setelah masa pajak berakhir. Apabila batas waktu penyetoran bertepatan dengan hari libur, termasuk hari Sabtu, hari Minggu, libur nasional, atau cuti bersama, penyetoran dapat dilakukan paling lambat pada hari kerja berikutnya.",
      stem: "Lanjutan data PT Sakti Presisi Indonesia (PMA, PKP; induk Kenwa Holdings Co., Negara Nippora, kepemilikan 75%, tarif P3B dividen 10%). Pada Masa Oktober 2026 PT Sakti: (1) membayar dividen Rp4.000.000.000 kepada Kenwa yang kali ini menyerahkan Form DGT sah sebelum pembayaran; (2) membayar honorarium Rp50.000.000 kepada Dr. Kenji Mori (orang pribadi WN Nippora, bukan subjek pajak dalam negeri) yang hadir 6 hari sebagai narasumber pelatihan dan tidak menyerahkan Form DGT; (3) memanfaatkan jasa desain dari Kenwa yang seluruhnya dikerjakan di Nippora senilai Rp300.000.000 sehingga terutang PPN atas pemanfaatan jasa kena pajak dari luar Daerah Pabean. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lambat"],
      opsi: { A: "Dividen dibuatkan BPNR dalam SPT Masa PPh Unifikasi; honorarium Dr. Kenji dibuatkan bukti potong PPh Pasal 26 (BP26) dalam SPT Masa PPh 21/26; PPh Pasal 26 dan PPN atas jasa desain disetor paling lambat Senin, 16 November 2026", B: "Dividen dibuatkan BPNR dalam SPT Masa PPh Unifikasi; honorarium Dr. Kenji juga dibuatkan BPNR dalam SPT Masa PPh Unifikasi; PPh Pasal 26 dan PPN atas jasa desain disetor paling lambat Senin, 16 November 2026", C: "Dividen dibuatkan BPNR dalam SPT Masa PPh Unifikasi; honorarium Dr. Kenji dibuatkan bukti potong PPh Pasal 26 (BP26) dalam SPT Masa PPh 21/26; PPh Pasal 26 dan PPN atas jasa desain disetor paling lambat Jumat, 13 November 2026", D: "Dividen dibuatkan BPNR dalam SPT Masa PPh Unifikasi; honorarium Dr. Kenji dibuatkan bukti potong PPh Pasal 26 (BP26) dalam SPT Masa PPh 21/26; PPh Pasal 26 dan PPN atas jasa desain disetor paling lambat Selasa, 10 November 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "PPh Pasal 26 atas imbalan pekerjaan, jasa, atau kegiatan orang pribadi luar negeri masuk rezim PPh 21/26 (bukti potong PPh Pasal 26 dalam SPT Masa PPh 21/26), sedangkan dividen kepada badan luar negeri memakai BPNR dalam SPT Masa PPh Unifikasi. Batas setor 15 November 2026 jatuh pada hari Minggu sehingga bergeser ke hari kerja berikutnya, Senin 16 November 2026; SPT Masa PPh tetap dilaporkan paling lambat Jumat, 20 November 2026.",
        jejakHitung: [
          ["PPh Pasal 26 dividen = 10% × Rp4.000.000.000", "Rp400.000.000"],
          ["PPh Pasal 26 honorarium (tanpa Form DGT) = 20% × Rp50.000.000", "Rp10.000.000"],
          ["PPN jasa luar negeri = 12% × 11/12 × Rp300.000.000", "Rp33.000.000"],
          ["Batas setor tanggal 15 November 2026", "hari Minggu"],
          ["Bergeser ke hari kerja berikutnya", "Senin, 16 November 2026"]
        ],
        mengapaSalah: {
          B: "BPNR mencakup PPh Pasal 26 selain atas pekerjaan, jasa, atau kegiatan orang pribadi; honorarium narasumber orang pribadi masuk SPT Masa PPh 21/26.",
          C: "Batas yang jatuh pada hari libur digeser ke hari kerja berikutnya, bukan dimajukan.",
          D: "Tanggal 10 adalah batas setor lama sebelum PMK 81/2024."
        },
        jebakan: "Satu masa pajak, dua SPT Masa PPh yang berbeda, ditambah aturan pergeseran tanggal karena hari libur."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 94 ayat (2) huruf g dan huruf i, Pasal 100, dan Pasal 171", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 7 ayat (1) huruf d (BP26) dan Pasal 18 ayat (1) huruf b (BPNR)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 168/2023 (PPh Pasal 26 atas orang pribadi luar negeri)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 4 ayat (1) huruf e UU PPN; PMK 131/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-066",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Altamar Engineering (jasa rekayasa industri; kantor pusat di Negara Lusitara, mitra P3B yang membatasi pajak atas laba cabang 12,5%; SKD sah) melaporkan data tahun pajak 2025: laba komersial Rp17.900.000.000, sudah dikurangi bunga pinjaman kepada kantor pusat Rp1.200.000.000 dan royalti perangkat lunak kepada kantor pusat Rp800.000.000; sisa kerugian fiskal 2022 Rp2.400.000.000; PPh Pasal 23 yang dipotong pelanggan Rp1.050.000.000; PPh Pasal 25 yang dibayar Rp2.900.000.000; jumlah pegawai 312 orang; nilai buku aktiva tetap Rp96 miliar; kurs rata-rata 2025 Rp16.300/USD. Pada Mei 2026 BUT membeli mesin fabrikasi Rp3.000.000.000 untuk digunakan di Indonesia (bentuk dan waktunya memenuhi PMK 14/PMK.03/2011) dan pada Juni 2026 menempatkan deposito berjangka 24 bulan Rp2.000.000.000; sisa laba tidak ditanamkan kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.940.250.000", B: "Rp1.331.250.000", C: "Rp1.706.250.000", D: "Rp1.511.250.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bunga dan royalti kepada kantor pusat (BUT bukan bank) dikoreksi positif, kerugian 2022 dikompensasikan, lalu BPT 12,5% dikenakan atas seluruh PKP sesudah PPh. Mesin memenuhi bentuk dan waktu, tetapi hanya sebagian laba, dan deposito bukan bentuk penanaman kembali; karena tidak seluruh PKP sesudah PPh ditanamkan kembali, pengecualian Pasal 1 ayat (3) PMK 14/PMK.03/2011 tidak berlaku. Kredit PPh 23/25, jumlah pegawai, nilai aktiva, dan kurs tidak dipakai.",
        jejakHitung: [
          ["Neto fiskal = 17.900 + 1.200 + 800 juta", "Rp19.900.000.000"],
          ["PKP = 19.900 − 2.400 juta", "Rp17.500.000.000"],
          ["PPh badan 22%", "Rp3.850.000.000"],
          ["PKP sesudah PPh", "Rp13.650.000.000"],
          ["Penanaman kembali yang sah (mesin)", "Rp3.000.000.000 (tidak seluruhnya)"],
          ["BPT = 12,5% × Rp13.650.000.000", "Rp1.706.250.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengompensasikan sisa kerugian fiskal 2022 yang masih dalam masa 5 tahun: 12,5% × (Rp19.900.000.000 − 22% × Rp19.900.000.000) = 12,5% × Rp15.522.000.000.",
          B: "Mengurangkan mesin Rp3.000.000.000 dari dasar BPT (12,5% × Rp10.650.000.000); penanaman kembali sebagian tidak mengurangi dasar BPT.",
          D: "Tidak mengoreksi bunga dan royalti kepada kantor pusat: 12,5% × Rp12.090.000.000."
        },
        jebakan: "Separuh data hanya pengalih perhatian (kredit pajak, pegawai, aktiva, kurs); yang menentukan adalah koreksi Pasal 5 ayat (3), kompensasi rugi, dan syarat seluruh laba ditanamkan kembali."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) dan Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 PMK 14/PMK.03/2011 (penanaman kembali seluruh PKP sesudah PPh)", berlakuSejak: "2011-01-24" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-067",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Mitra Energi Nusantara (WP badan dalam negeri, bukan perseroan terbuka; peredaran bruto 2025 Rp410 miliar; 540 pegawai) melaporkan data tahun pajak 2025: penghasilan neto dalam negeri Rp14.200.000.000; dari Negara Kaldera: laba cabang sebelum pajak Rp2.600.000.000 dengan pajak Kaldera Rp780.000.000 serta imbalan jasa konsultansi bruto Rp400.000.000 dari perusahaan Kaldera yang dipotong pajak Kaldera Rp40.000.000; dari Negara Ombra: bunga bruto Rp1.000.000.000 yang dipotong pajak Ombra Rp150.000.000 sesuai tarif P3B 15%; dari Negara Velda: rugi cabang Rp900.000.000 dan dividen anak perusahaan Rp1.500.000.000 (dipotong pajak Velda Rp150.000.000) yang seluruhnya diinvestasikan di Indonesia sesuai Pasal 4 ayat (3) huruf f angka 2 UU PPh. Data lain: nilai buku aset cabang Kaldera Rp9 miliar, PPh Pasal 23 Rp600.000.000, PPh Pasal 25 Rp3.100.000.000, dan dividen yang dibagikan PT Mitra kepada pemegang sahamnya Rp5 miliar. Kredit PPh Pasal 24 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp762.000.000", B: "Rp810.000.000", C: "Rp880.000.000", D: "Rp912.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Rugi cabang Velda dan dividen Velda yang diinvestasikan tidak masuk PKP, sehingga tidak ada kredit untuk Velda. Batas dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): laba cabang Kaldera dan jasa Kaldera dibatasi sendiri-sendiri, demikian pula bunga Ombra. Kredit tiap jenis = nilai terkecil antara pajak dibayar dan batas.",
        jejakHitung: [
          ["PKP = 14.200 + 2.600 + 400 + 1.000 juta", "Rp18.200.000.000"],
          ["PPh terutang 22%", "Rp4.004.000.000"],
          ["Laba cabang Kaldera: batas 2.600/18.200 × 4.004 juta = 572 juta → min(780; 572)", "Rp572.000.000"],
          ["Jasa Kaldera: batas 400/18.200 × 4.004 juta = 88 juta → min(40; 88)", "Rp40.000.000"],
          ["Bunga Ombra: batas 1.000/18.200 × 4.004 juta = 220 juta → min(150; 220)", "Rp150.000.000"],
          ["Velda (rugi tidak digabung; dividen bukan objek)", "Rp0"],
          ["Total kredit PPh Pasal 24", "Rp762.000.000"]
        ],
        mengapaSalah: {
          B: "Menggabungkan laba cabang dan jasa Kaldera dalam satu batas negara (3.000/18.200 × 4.004 juta = 660 juta) sehingga sisa batas jasa dipakai untuk pajak laba cabang; batas dihitung per jenis penghasilan.",
          C: "Menjumlahkan batas maksimum (572 + 88 + 220 juta) tanpa membandingkannya dengan pajak yang benar-benar dibayar.",
          D: "Ikut mengkreditkan pajak Velda Rp150.000.000 atas dividen yang bukan objek PPh (762 + 150 juta)."
        },
        jebakan: "Data aset, pegawai, kredit dalam negeri, dan dividen yang dibagikan tidak memengaruhi kredit PPh Pasal 24; pilah dahulu penghasilan per jenis untuk tiap negara."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) dan Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018 (rugi luar negeri tidak digabung; per jenis penghasilan untuk tiap negara)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 4 ayat (3) huruf f angka 2 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-068",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-05",
      stem: "Data untuk soal ini dan tiga soal berikutnya: Ridgeline Geoservices Inc., berkedudukan di Negara Kordela yang belum memiliki P3B dengan Indonesia, menjalankan usaha jasa survei geologi serta penjualan alat ukur geofisika melalui cabang (BUT) di Balikpapan yang terdaftar sejak 2019 dan mempekerjakan 64 pegawai. Untuk tahun pajak 2025 BUT mencatat peredaran usaha Rp40.000.000.000 dan laba komersial Rp6.080.000.000. Beban yang sudah dikurangkan antara lain: alokasi biaya administrasi kantor pusat Rp1.800.000.000; imbalan jasa manajemen kepada kantor pusat Rp700.000.000; PPh Pasal 26 ayat (4) tahun pajak 2024 yang dibukukan sebagai beban Rp310.000.000; bunga pinjaman bank lokal Rp250.000.000; dan sewa kantor Rp420.000.000. Kantor pusat mengalokasikan biaya administrasinya secara taat asas berdasarkan perbandingan peredaran usaha (cara yang diterima KEP-62/PJ/1995): biaya administrasi kantor pusat 2025 seluruhnya Rp24.000.000.000 dan peredaran usaha seluruh grup Rp800.000.000.000. Di luar pembukuan BUT, kantor pusat menjual langsung alat ukur sejenis kepada PT Mahakam Eksplorasi seharga Rp2.550.000.000 dengan harga pokok Rp1.900.000.000. Penghasilan neto fiskal BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp8.340.000.000", B: "Rp8.590.000.000", C: "Rp7.740.000.000", D: "Rp7.690.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bagian biaya administrasi kantor pusat yang wajar bagi BUT = Rp40 miliar ÷ Rp800 miliar × Rp24 miliar = Rp1.200.000.000, sehingga kelebihan alokasi Rp600.000.000 dikoreksi (Pasal 5 ayat (2)). Jasa manajemen kepada kantor pusat (Pasal 5 ayat (3)) dan PPh Pasal 26 ayat (4) yang dibebankan (Pasal 9 ayat (1) huruf h) dikoreksi positif, dan laba penjualan langsung kantor pusat atas barang sejenis ditambahkan (Pasal 5 ayat (1) huruf b; tanpa P3B sehingga force of attraction domestik berlaku penuh).",
        jejakHitung: [
          ["Laba komersial", "Rp6.080.000.000"],
          ["Biaya administrasi wajar = 40/800 × Rp24.000.000.000", "Rp1.200.000.000"],
          ["+ kelebihan alokasi biaya administrasi (1.800 − 1.200 juta)", "Rp600.000.000"],
          ["+ jasa manajemen kepada kantor pusat", "Rp700.000.000"],
          ["+ PPh Pasal 26 ayat (4) 2024 yang dibebankan", "Rp310.000.000"],
          ["+ force of attraction (2.550 − 1.900 juta)", "Rp650.000.000"],
          ["Penghasilan neto fiskal", "Rp8.340.000.000"]
        ],
        mengapaSalah: {
          B: "Ikut mengoreksi bunga pinjaman bank lokal Rp250.000.000 seolah bunga kepada kantor pusat (8.340 + 250 juta); Pasal 5 ayat (3) hanya melarang bunga kepada kantor pusat, sedangkan bunga kepada bank lokal adalah biaya usaha BUT.",
          C: "Menganggap seluruh alokasi biaya administrasi Rp1.800.000.000 boleh dibebankan; bagian di atas porsi peredaran BUT (Rp600.000.000) tidak berkaitan dengan BUT.",
          D: "Lupa force of attraction: laba Rp650.000.000 dari penjualan langsung kantor pusat atas barang sejenis tidak digabung."
        },
        jebakan: "Bunga bank lokal dan sewa kantor adalah biaya sah BUT; yang dikoreksi hanya beban terkait kantor pusat yang dilarang atau berlebih dan PPh yang dibebankan."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b, ayat (2), dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "KEP-62/PJ/1995 (biaya administrasi kantor pusat)" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-069", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C9-05",
      stem: "Lanjutan data Ridgeline Geoservices Inc. (BUT di Balikpapan; kantor pusat di Negara Kordela tanpa P3B; peredaran usaha 2025 Rp40.000.000.000; penghasilan neto fiskal 2025 Rp8.340.000.000). BUT masih mempunyai sisa kerugian fiskal tahun 2023 Rp1.000.000.000 yang belum dikompensasikan. Kredit pajak 2025: PPh Pasal 23 yang dipotong pelanggan jasa survei Rp540.000.000, PPh Pasal 22 impor atas alat ukur Rp95.000.000, dan PPh Pasal 25 yang telah dibayar Rp660.000.000. Staf keuangan BUT berpendapat bahwa karena peredaran usaha di bawah Rp50 miliar, BUT berhak atas fasilitas Pasal 31E. PPh Pasal 29 BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp222.912.000", B: "Rp539.800.000", C: "Rp859.800.000", D: "Rp319.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "final-nonfinal" },
      pembahasan: {
        inti: "Pasal 31E hanya untuk WP badan dalam negeri, sedangkan BUT adalah subjek pajak luar negeri, sehingga tarif 22% berlaku atas seluruh PKP. PKP = neto fiskal − kompensasi kerugian 2023 (masih dalam masa 5 tahun). PPh 22, PPh 23, dan PPh 25 dikreditkan (Pasal 28).",
        jejakHitung: [["PKP = 8.340 − 1.000 juta", "Rp7.340.000.000"], ["PPh terutang 22% (tanpa Pasal 31E)", "Rp1.614.800.000"], ["Kredit: PPh 23 + PPh 22 + PPh 25 = 540 + 95 + 660 juta", "Rp1.295.000.000"], ["PPh Pasal 29", "Rp319.800.000"]],
        mengapaSalah: {
          A: "Menerapkan Pasal 31E (12% PKP bertarif 11%, PPh Rp1.517.912.000) pada BUT, padahal fasilitas itu hanya bagi WP badan dalam negeri.",
          B: "Lupa mengompensasikan sisa rugi 2023 (22% × Rp8.340.000.000 − Rp1.295.000.000).",
          C: "Menganggap PPh 23 atas jasa kepada BUT bersifat final sehingga tidak dikreditkan (Rp1.614.800.000 − Rp755.000.000)."
        },
        jebakan: "Peredaran di bawah Rp50 miliar memancing Pasal 31E; periksa dulu apakah WP-nya badan dalam negeri."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (4) dan Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 6 ayat (2), Pasal 28, dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-070",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-05",
      kutipan: "PMK 14/PMK.03/2011 (parafrase Pasal 1 ayat (3) dan Pasal 2 ayat (1)): Penghasilan Kena Pajak sesudah dikurangi Pajak Penghasilan dari BUT dikecualikan dari PPh Pasal 26 ayat (4) apabila seluruhnya ditanamkan kembali di Indonesia dalam bentuk penyertaan modal pada perusahaan yang baru didirikan atau yang sudah didirikan di Indonesia, pembelian aktiva tetap yang digunakan BUT, atau investasi aktiva tidak berwujud yang digunakan BUT. Penanaman kembali harus dilakukan paling lama pada akhir tahun pajak berikutnya.",
      stem: "Lanjutan data Ridgeline Geoservices Inc. (BUT di Balikpapan; kantor pusat di Negara Kordela yang belum memiliki P3B dengan Indonesia; PKP 2025 setelah kompensasi kerugian Rp7.340.000.000; PPh badan terutang Rp1.614.800.000). Atas laba setelah pajak 2025, BUT melakukan: (a) pembelian alat survei seismik Rp1.500.000.000 pada Mei 2026 yang dicatat sebagai aktiva tetap dan digunakan untuk kegiatan BUT; (b) penempatan deposito berjangka 24 bulan Rp1.000.000.000 pada Juni 2026; (c) penyertaan modal Rp800.000.000 pada PT Borneo Survei Mandiri (perusahaan yang telah berdiri di Indonesia) yang akta dan penyetorannya baru terlaksana pada 3 Februari 2027. Pemberitahuan penanaman kembali dilampirkan pada SPT Tahunan 2025. Berdasarkan kutipan tersebut, PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp685.040.000", B: "Rp1.145.040.000", C: "Rp845.040.000", D: "Rp485.040.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian BPT hanya berlaku bila seluruh PKP sesudah dikurangi PPh ditanamkan kembali dalam bentuk dan waktu yang memenuhi syarat. Di sini deposito (b) bukan bentuk penanaman kembali dan penyertaan (c) baru terlaksana setelah akhir tahun pajak 2026, sehingga yang memenuhi syarat hanya alat survei Rp1.500.000.000, jauh di bawah Rp5.725.200.000. Karena tidak seluruhnya ditanamkan kembali, tidak ada pengurangan: BPT dihitung dari seluruh PKP sesudah PPh dengan tarif 20% (Kordela tanpa P3B).",
        jejakHitung: [
          ["PKP sesudah PPh = 7.340.000.000 − 1.614.800.000", "Rp5.725.200.000"],
          ["Penanaman kembali yang memenuhi syarat (hanya a)", "Rp1.500.000.000"],
          ["Seluruh PKP sesudah PPh ditanamkan kembali?", "Tidak (1.500.000.000 < 5.725.200.000)"],
          ["Dasar BPT", "Rp5.725.200.000"],
          ["BPT = 20% × Rp5.725.200.000", "Rp1.145.040.000"]
        ],
        mengapaSalah: {
          A: "Mengurangkan alat survei dan penyertaan Februari 2027 (20% × Rp3.425.200.000); penyertaan itu terlambat dan penanaman kembali sebagian tidak mengurangi dasar BPT.",
          C: "Mengurangkan alat survei Rp1.500.000.000 (20% × Rp4.225.200.000); pengecualian hanya berlaku bila seluruh PKP sesudah PPh ditanamkan kembali, bukan sebagian.",
          D: "Menganggap deposito dan penyertaan yang terlambat sebagai penanaman kembali dan mengurangkannya (20% × Rp2.425.200.000)."
        },
        jebakan: "Uji bentuk dan waktu tiap penanaman kembali, lalu uji jumlahnya: hanya penanaman kembali seluruh PKP sesudah PPh yang membebaskan BPT; penanaman kembali sebagian tidak mengurangi dasar BPT."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 ayat (1) huruf a PMK 14/PMK.03/2011 (penanaman kembali seluruh PKP sesudah PPh)", berlakuSejak: "2011-01-24" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-071",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-05",
      formulirRef: "1771.6A.1",
      stem: "Lanjutan data Ridgeline Geoservices Inc. (BUT; kantor pusat di Negara Kordela tanpa P3B; penghasilan neto fiskal 2025 Rp8.340.000.000; kompensasi kerugian 2023 Rp1.000.000.000; PPh badan terutang Rp1.614.800.000; atas laba setelah pajak 2025 yang memenuhi bentuk dan waktu penanaman kembali hanya pembelian alat survei Rp1.500.000.000, sedangkan deposito Rp1.000.000.000 dan penyertaan Februari 2027 Rp800.000.000 tidak memenuhi syarat). Saat mengisi Lampiran 12A SPT Tahunan PPh Badan (Penghitungan PPh Pasal 26 ayat (4), bentuk PER-11/PJ/2025), nilai yang tepat untuk angka 3 'Dasar Pengenaan Pajak PPh Pasal 26 ayat (4)' dan angka 4a 'PPh Pasal 26 ayat (4) terutang' berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.725.200.000 dan Rp1.145.040.000", B: "Rp7.340.000.000 dan Rp1.468.000.000", C: "Rp5.725.200.000 dan Rp845.040.000", D: "Rp6.725.200.000 dan Rp1.345.040.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Angka 3 Lampiran 12A diisi PKP (setelah kompensasi kerugian) dikurangi PPh terutang dari induk SPT; angka 4a diisi tarif (20% karena Kordela tanpa P3B) dikalikan angka 3. Lampiran 12A tidak mengenal pengurangan untuk penanaman kembali sebagian: BPT hanya tidak terutang bila seluruh PKP sesudah PPh ditanamkan kembali, dan di sini hanya Rp1.500.000.000 yang memenuhi syarat.",
        jejakHitung: [
          ["PKP = 8.340 − 1.000 juta", "Rp7.340.000.000"],
          ["Angka 3: DPP = 7.340.000.000 − 1.614.800.000", "Rp5.725.200.000"],
          ["Seluruh PKP sesudah PPh ditanamkan kembali?", "Tidak (hanya Rp1.500.000.000)"],
          ["Angka 4a: 20% × Rp5.725.200.000", "Rp1.145.040.000"]
        ],
        mengapaSalah: {
          B: "Memakai PKP sebelum dikurangi PPh badan sebagai DPP (20% × Rp7.340.000.000).",
          C: "Mengurangkan alat survei Rp1.500.000.000 dari DPP; penanaman kembali sebagian tidak mengurangi dasar BPT (20% × Rp4.225.200.000).",
          D: "Memakai neto fiskal sebelum kompensasi kerugian (Rp8.340.000.000 − Rp1.614.800.000)."
        },
        jebakan: "Lampiran 12A hanya punya dua jalan: terutang atas seluruh DPP, atau tidak terutang karena P3B atau karena seluruhnya ditanamkan kembali; tidak ada baris pengurang untuk penanaman kembali sebagian."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "Pasal 85 ayat (1) huruf b PER-11/PJ/2025 dan petunjuk pengisian Lampiran 12A", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-072", topik: "C9.1", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Sorrento Design adalah cabang perusahaan desain interior dari Negara Valdora (belum memiliki P3B dengan Indonesia; kantor pusatnya perusahaan terbuka yang sahamnya tercatat di bursa Valdora) dan terdaftar sejak 2023. Data tahun pajak 2025: peredaran usaha Rp18.000.000.000, PKP Rp1.500.000.000, tidak ada sisa kerugian, dan tidak ada penanaman kembali. Staf pajak menyusun empat simpulan tentang PPh badan dan PPh Pasal 26 ayat (4) BUT tersebut. Simpulan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Karena peredaran usaha tidak melebihi Rp50 miliar, BUT memperoleh fasilitas Pasal 31E sehingga PPh badan Rp286.000.000, dan PPh Pasal 26 ayat (4) 20% dihitung dari PKP sesudah PPh tersebut, yaitu Rp242.800.000",
        B: "Karena Pasal 31E hanya berlaku bagi WP badan dalam negeri, PPh badan 22% atas seluruh PKP Rp330.000.000, dan PPh Pasal 26 ayat (4) 20% dihitung dari PKP sebelum dikurangi PPh, yaitu Rp300.000.000",
        C: "Karena kantor pusatnya perusahaan terbuka, BUT dikenai tarif 19% sehingga PPh badan Rp285.000.000, dan PPh Pasal 26 ayat (4) 20% dihitung dari PKP sesudah PPh tersebut, yaitu Rp243.000.000",
        D: "Karena Pasal 31E hanya berlaku bagi WP badan dalam negeri, PPh badan 22% atas seluruh PKP Rp330.000.000, dan PPh Pasal 26 ayat (4) 20% dihitung dari PKP sesudah dikurangi PPh, yaitu Rp234.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "BUT adalah subjek pajak luar negeri yang perlakuannya dipersamakan dengan badan, tetapi Pasal 31E dan penurunan tarif perseroan terbuka hanya untuk WP badan dalam negeri. Jadi tarif 22% atas seluruh PKP, lalu BPT 20% (tanpa P3B) atas PKP sesudah PPh.",
        jejakHitung: [["PPh badan = 22% × Rp1.500.000.000", "Rp330.000.000"], ["PKP sesudah PPh", "Rp1.170.000.000"], ["BPT = 20% × Rp1.170.000.000", "Rp234.000.000"]],
        mengapaSalah: {
          A: "Pasal 31E mensyaratkan WP badan dalam negeri; BUT tidak berhak walaupun peredarannya kecil.",
          B: "Dasar BPT adalah PKP sesudah dikurangi PPh badan, bukan PKP.",
          C: "Penurunan tarif 3% hanya bagi WP badan dalam negeri berbentuk perseroan terbuka yang memenuhi syarat pencatatan di bursa Indonesia; status kantor pusat di bursa asing tidak relevan."
        },
        jebakan: "Keempat simpulan hanya berbeda pada alasan tarif dan dasar BPT; tentukan dulu status subjeknya (BUT = subjek pajak luar negeri)."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1a) dan ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b, ayat (2b), dan Pasal 31E UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-073", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2,
      kutipan: "KMK 634/KMK.04/1994 (parafrase): Kantor perwakilan dagang asing di Indonesia dikenai Pajak Penghasilan Pasal 15 sebesar 0,44% dari nilai ekspor bruto; pajak tersebut bersifat final.",
      stem: "Hanzo Trading Co., berkedudukan di Negara Kirena yang belum memiliki P3B dengan Indonesia, mempunyai kantor perwakilan dagang asing (KPDA) di Jakarta dengan 9 pegawai lokal. Kegiatan KPDA terbatas pada mencari pemasok, memeriksa mutu, dan mengoordinasikan pembelian produk furnitur Indonesia untuk diekspor ke kantor pusat; KPDA tidak menandatangani kontrak penjualan di Indonesia. Selama Juli 2026 nilai ekspor bruto barang yang dibeli melalui koordinasi KPDA Rp12.500.000.000; biaya operasional KPDA bulan itu Rp410.000.000 dan gaji pegawai lokal Rp180.000.000 (PPh Pasal 21 telah dipotong). Berdasarkan kutipan tersebut, PPh Pasal 15 atas nilai ekspor bruto Juli 2026 tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.500.000", B: "Rp55.000.000", C: "Rp47.000.000", D: "Rp330.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "KPDA dari negara tanpa P3B dikenai PPh Pasal 15 final 0,44% × nilai ekspor bruto; biaya operasional dan gaji tidak mengurangi dasar pengenaan.",
        jejakHitung: [["Dasar: nilai ekspor bruto Juli 2026", "Rp12.500.000.000"], ["Tarif efektif (norma 1% × [30% + 20% × 70%])", "0,44%"], ["PPh Pasal 15 = 0,44% × Rp12.500.000.000", "Rp55.000.000"]],
        mengapaSalah: {
          A: "Hanya memakai unsur PPh badan dalam norma (1% × 22%), lupa unsur pajak atas laba setelah pajak yang membentuk tarif 0,44%.",
          C: "Menghitung ulang norma dengan tarif badan 22% (0,376%); tarif yang ditetapkan tetap 0,44% × nilai ekspor bruto.",
          D: "Tarif 2,64% berlaku untuk perusahaan pelayaran/penerbangan luar negeri, bukan KPDA."
        },
        jebakan: "Tarif khusus KPDA memakai nilai ekspor bruto, bukan laba atau biaya KPDA."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 634/KMK.04/1994 (KPDA)" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-074", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Velka Components s.r.o., produsen suku cadang turbin di Negara Bohemara (mitra P3B Indonesia), menyewa gudang di Cikarang dari PT Graha Logistik sejak Februari 2025 dengan sewa Rp360.000.000 per tahun. Gudang hanya dipakai untuk menyimpan persediaan suku cadang milik Velka dan menyerahkannya kepada pembeli; pesanan diterima, dinegosiasikan, dan kontraknya ditandatangani di Bohemara. Pada 2025 Velka juga mengirim seorang teknisi selama 20 hari untuk pelatihan pemakaian suku cadang di pabrik PT Turbin Nusantara tanpa imbalan terpisah. Pasal BUT dalam P3B Indonesia–Bohemara mengecualikan 'penggunaan fasilitas semata-mata untuk tujuan penyimpanan, pameran, atau penyerahan barang milik perusahaan' dan menetapkan BUT jasa bila pemberian jasa lebih dari 90 hari dalam periode 12 bulan. Velka telah menyerahkan Form DGT yang sah dan merupakan pemilik manfaat. Penjualan suku cadang kepada pembeli Indonesia pada 2025 Rp15.000.000.000 dengan laba Rp2.100.000.000. Perlakuan PPh yang paling tepat atas laba penjualan tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Timbul BUT karena gudang termasuk bentuk usaha tetap dalam Pasal 2 ayat (5) UU PPh; laba Rp2.100.000.000 dikenai PPh badan 22% dan branch profit tax",
        B: "Tidak timbul BUT menurut P3B, tetapi pembeli wajib memotong PPh Pasal 26 sebesar 20% × Rp15.000.000.000 karena barang diserahkan dari gudang di Indonesia",
        C: "Tidak timbul BUT menurut P3B karena gudang semata-mata untuk penyimpanan dan penyerahan barang dan teknisi hanya 20 hari; laba tidak dipajaki di Indonesia",
        D: "Timbul BUT jasa karena masa sewa gudang sejak Februari 2025 digabung dengan kehadiran teknisi melebihi 60 hari; laba penjualan dipajaki sebagai penghasilan BUT"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "P3B berlaku sebagai ketentuan khusus (Pasal 32A) sepanjang Form DGT sah. Pasal BUT P3B mengecualikan fasilitas yang semata-mata untuk penyimpanan dan penyerahan barang, dan time test jasa 90 hari tidak terlampaui; laba penjualan adalah laba usaha tanpa BUT yang hanya dipajaki di Bohemara. Harga barang juga bukan objek PPh Pasal 26.",
        jejakHitung: [["Gudang: semata-mata penyimpanan dan penyerahan", "dikecualikan pasal BUT P3B"], ["Kehadiran teknisi 20 hari vs time test 90 hari", "tidak terlampaui"], ["Laba usaha tanpa BUT", "hanya dipajaki di Bohemara"], ["Harga pembelian barang", "bukan objek PPh 26"]],
        mengapaSalah: {
          A: "Daftar BUT domestik (gudang) dikesampingkan oleh pengecualian dalam pasal BUT P3B karena Form DGT sah.",
          B: "Harga pembelian barang bukan objek PPh Pasal 26; lokasi gudang tidak mengubahnya.",
          D: "Masa sewa gudang bukan hari pemberian jasa; time test jasa P3B 90 hari hanya menghitung kehadiran personel (20 hari)."
        },
        jebakan: "Gudang ada dalam daftar BUT domestik, tetapi soal yang menyebut P3B dengan klausul pengecualian dan Form DGT sah menuntut pengujian menurut P3B."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-075", topik: "C9.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "BUT Tarsis Offshore di Batam, cabang perusahaan jasa perawatan anjungan dari Negara Melora (belum memiliki P3B dengan Indonesia), melaporkan data tahun pajak 2025: peredaran usaha Rp61.000.000.000; laba komersial Rp1.650.000.000; koreksi fiskal positif bersih Rp350.000.000 sehingga penghasilan neto fiskal Rp2.000.000.000; PPh Pasal 23 yang dipotong pelanggan Rp610.000.000; dan PPh Pasal 25 yang dibayar Rp0. Daftar sisa kerugian fiskal yang belum dikompensasikan: rugi tahun 2019 Rp400.000.000 dan rugi tahun 2021 Rp700.000.000. Tidak ada penanaman kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp140.400.000", B: "Rp260.000.000", C: "Rp312.000.000", D: "Rp202.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Kerugian dikompensasikan paling lama 5 tahun: rugi 2019 hanya sampai 2024 sehingga tidak dapat dipakai pada 2025, sedangkan rugi 2021 masih dapat. Dasar BPT = PKP setelah kompensasi dikurangi PPh badan; tarif domestik 20% karena tidak ada P3B.",
        jejakHitung: [["Neto fiskal", "Rp2.000.000.000"], ["− kompensasi rugi 2021 (rugi 2019 sudah lewat 5 tahun)", "Rp700.000.000"], ["PKP", "Rp1.300.000.000"], ["PPh badan 22%", "Rp286.000.000"], ["PKP sesudah PPh", "Rp1.014.000.000"], ["BPT = 20% × Rp1.014.000.000", "Rp202.800.000"]],
        mengapaSalah: {
          A: "Ikut mengompensasikan rugi 2019 yang masa kompensasinya berakhir 2024 (PKP Rp900.000.000; PPh badan Rp198.000.000; BPT 20% × Rp702.000.000 = Rp140.400.000).",
          B: "Mengalikan 20% langsung dengan PKP Rp1.300.000.000 tanpa mengurangkan PPh badan.",
          C: "Tidak mengompensasikan kerugian sama sekali (20% × (Rp2.000.000.000 − Rp440.000.000))."
        },
        jebakan: "Hitung masa kompensasi per tahun rugi: rugi tahun X hanya dapat dipakai sampai tahun X+5. PPh 23 yang melebihi PPh terutang tidak memengaruhi BPT."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-076", topik: "C9.2", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Calderon Mining Services (kantor pusat di Negara Ostria, mitra P3B yang membatasi pajak atas laba cabang 10%; SKD sah) mengalami rugi fiskal tahun 2025 Rp3.000.000.000 karena biaya mobilisasi alat, sedangkan pada 2026 diproyeksikan memperoleh penghasilan neto fiskal Rp5.000.000.000. Tidak ada kerugian lain dan tidak ada rencana penanaman kembali. Pernyataan yang paling tepat mengenai PPh Pasal 26 ayat (4) BUT tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Untuk 2025 tidak terutang karena tidak ada PKP; untuk 2026 dasarnya adalah PKP setelah kompensasi rugi 2025 dikurangi PPh badan, yaitu Rp2.000.000.000 − Rp440.000.000 = Rp1.560.000.000, sehingga terutang 10% atau Rp156.000.000",
        B: "Untuk 2025 tidak terutang karena tidak ada PKP; untuk 2026 dasarnya adalah penghasilan neto fiskal sebelum kompensasi dikurangi PPh badan, yaitu Rp5.000.000.000 − Rp440.000.000 = Rp4.560.000.000, sehingga terutang 10% atau Rp456.000.000",
        C: "Untuk 2025 tetap terutang 10% atas laba komersial cabang karena PPh Pasal 26 ayat (4) tidak bergantung pada PKP; untuk 2026 dasarnya Rp1.560.000.000, sehingga terutang Rp156.000.000",
        D: "Untuk 2025 tidak terutang karena tidak ada PKP; untuk 2026 dasarnya Rp1.560.000.000, tetapi tarifnya 20% (Rp312.000.000) karena kompensasi kerugian menggugurkan hak atas tarif P3B"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dasar BPT adalah PKP sesudah PPh. Rugi 2025 membuat PKP nihil sehingga tidak ada BPT, dan rugi itu dikompensasikan pada 2026 (PKP Rp2.000.000.000). Tarif P3B 10% tetap berlaku karena SKD sah.",
        jejakHitung: [["PKP 2026 = 5.000 − 3.000 juta", "Rp2.000.000.000"], ["PPh badan 22%", "Rp440.000.000"], ["Dasar BPT", "Rp1.560.000.000"], ["BPT 10% (P3B)", "Rp156.000.000"]],
        mengapaSalah: {
          B: "Kompensasi kerugian mengurangi PKP sehingga juga mengurangi dasar BPT.",
          C: "Pasal 26 ayat (4) mengenakan PKP sesudah PPh, bukan laba komersial; tanpa PKP tidak ada BPT.",
          D: "Hak atas tarif P3B ditentukan oleh P3B dan SKD, bukan oleh ada atau tidaknya kompensasi kerugian."
        },
        jebakan: "Opsi berbeda hanya pada dasar 2026 atau tarif; pastikan dasar BPT memakai PKP setelah kompensasi."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) dan Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-077", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "BUT Kowloon Textile Trading (kantor pusat di Negara Huaxin) memiliki PKP 2025 Rp1.500.000.000 dan peredaran usaha Rp75 miliar. P3B Indonesia–Huaxin mengatur dividen 10% (kepemilikan paling sedikit 25%) atau 15% (lainnya) serta pajak atas laba cabang 15%; SKD sah dan tidak ada penanaman kembali. PPh Pasal 26 ayat (4) yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp234.000.000", B: "Rp175.500.000", C: "Rp225.000.000", D: "Rp117.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "BPT = tarif laba cabang dalam P3B (15%) × (PKP − PPh badan 22%).",
        jejakHitung: [["PPh badan = 22% × Rp1.500.000.000", "Rp330.000.000"], ["PKP sesudah PPh", "Rp1.170.000.000"], ["BPT = 15% × Rp1.170.000.000", "Rp175.500.000"]],
        mengapaSalah: {
          A: "Memakai tarif domestik 20% padahal SKD sah.",
          C: "Mengalikan 15% dengan PKP sebelum dikurangi PPh badan.",
          D: "Memakai tarif dividen 10%, bukan tarif khusus laba cabang."
        },
        jebakan: "P3B memuat beberapa tarif; pilih yang khusus untuk laba cabang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C9-078", topik: "C9.3", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C9-06",
      stem: "Data untuk soal ini dan tiga soal berikutnya: PT Kencana Rasa Nusantara (WP badan dalam negeri, bukan perseroan terbuka, berdiri 2012, bukan pengguna PPh final PP 55/2022) memproduksi bumbu instan. Peredaran bruto tahun pajak 2025 — seluruh penghasilan usaha dan luar usaha, termasuk dari luar negeri — Rp40.000.000.000. Data fiskal 2025: penghasilan neto dalam negeri Rp2.600.000.000; dari Negara Selandra, royalti resep Rp600.000.000 tanpa biaya terkait yang dipotong pajak Selandra 25% (Rp150.000.000) karena PT Kencana terlambat menyerahkan surat keterangan domisili kepada pembayar, padahal P3B Indonesia–Selandra membatasi pajak royalti 10%; dari Negara Varnia, laba cabang sebelum pajak Rp800.000.000 dengan pajak Varnia Rp200.000.000 (laba tidak diinvestasikan di Indonesia); cabang di Negara Ostrava rugi Rp300.000.000. Tidak ada sisa kerugian dalam negeri. Kredit pajak dalam negeri: PPh Pasal 22 Rp40.000.000, PPh Pasal 23 Rp55.000.000, dan PPh Pasal 25 Rp300.000.000. PPh terutang PT Kencana tahun pajak 2025 (sebelum kredit pajak) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp880.000.000", B: "Rp765.160.000", C: "Rp440.000.000", D: "Rp827.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Rugi cabang Ostrava tidak digabung sehingga PKP Rp4.000.000.000. Peredaran bruto Rp40 miliar (tidak melebihi Rp50 miliar) membuat Pasal 31E wajib diterapkan: bagian PKP dari peredaran sampai Rp4,8 miliar (4,8/40 = 12%) bertarif 11%, sisanya 22%.",
        jejakHitung: [["PKP = 2.600 + 600 + 800 juta (rugi Ostrava tidak digabung)", "Rp4.000.000.000"], ["PKP fasilitas = 4,8/40 × Rp4.000.000.000", "Rp480.000.000"], ["11% × Rp480.000.000", "Rp52.800.000"], ["22% × Rp3.520.000.000", "Rp774.400.000"], ["PPh terutang", "Rp827.200.000"]],
        mengapaSalah: {
          A: "Lupa Pasal 31E (22% × Rp4.000.000.000).",
          B: "Mengurangkan rugi Ostrava sehingga PKP Rp3.700.000.000.",
          C: "Menerapkan tarif 11% atas seluruh PKP, padahal fasilitas hanya untuk bagian PKP dari peredaran sampai Rp4,8 miliar."
        },
        jebakan: "Peredaran bruto untuk Pasal 31E dalam soal ini sudah mencakup penghasilan luar negeri; rugi cabang luar negeri tetap dikeluarkan dari PKP."
      },
      dasarHukum: [{ pasal: "Pasal 31E ayat (1) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "SE-02/PJ/2015 (penghitungan Pasal 31E)" }, { pasal: "Pasal 24 UU PPh; PMK 192/PMK.03/2018 (rugi luar negeri tidak digabung)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "C9-079",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-06",
      stem: "Lanjutan data PT Kencana Rasa Nusantara 2025 (peredaran bruto Rp40.000.000.000; PKP Rp4.000.000.000; PPh terutang dengan Pasal 31E Rp827.200.000; Selandra: royalti Rp600.000.000 dipotong pajak 25% = Rp150.000.000, sedangkan P3B membatasi 10%; Varnia: laba cabang Rp800.000.000 dengan pajak Rp200.000.000; Ostrava: rugi cabang Rp300.000.000). Kredit PPh Pasal 24 yang dapat diperhitungkan dalam SPT Tahunan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp225.440.000", B: "Rp289.520.000", C: "Rp350.000.000", D: "Rp236.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Kredit per jenis penghasilan untuk tiap negara (royalti Selandra dan laba usaha cabang Varnia) = nilai terkecil antara pajak luar negeri yang dibayar, pajak yang seharusnya terutang menurut P3B, dan batas (penghasilan itu ÷ PKP × PPh terutang setelah Pasal 31E). Kelebihan pemotongan Selandra di atas 10% harus dimintakan kembali ke Selandra, bukan dikreditkan.",
        jejakHitung: [
          ["Batas Selandra = 600/4.000 × Rp827.200.000", "Rp124.080.000"],
          ["Pajak menurut P3B = 10% × Rp600.000.000", "Rp60.000.000"],
          ["Kredit Selandra = min(150; 60; 124,08 juta)", "Rp60.000.000"],
          ["Batas Varnia = 800/4.000 × Rp827.200.000", "Rp165.440.000"],
          ["Kredit Varnia = min(200; 165,44 juta)", "Rp165.440.000"],
          ["Total kredit PPh Pasal 24", "Rp225.440.000"]
        ],
        mengapaSalah: {
          B: "Mengabaikan batas tarif P3B untuk Selandra sehingga mengkreditkan Rp124.080.000.",
          C: "Mengkreditkan seluruh pajak luar negeri tanpa batas.",
          D: "Menghitung batas dari PPh 22% tanpa Pasal 31E (Rp880.000.000): Rp60.000.000 + Rp176.000.000."
        },
        jebakan: "Tiga pembatas sekaligus: pajak yang dibayar, tarif P3B, dan batas proporsional dari PPh terutang yang sudah memperhitungkan Pasal 31E."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018 (per jenis penghasilan untuk tiap negara; nilai terkecil; memperhatikan P3B)", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-080", topik: "C9.3", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C9-06",
      stem: "Lanjutan data PT Kencana Rasa Nusantara (PPh terutang 2025 Rp827.200.000; kredit PPh Pasal 24 yang dapat diperhitungkan Rp225.440.000; PPh Pasal 22 Rp40.000.000; PPh Pasal 23 Rp55.000.000; PPh Pasal 25 yang dibayar selama 2025 Rp300.000.000). SPT Tahunan 2025 disampaikan tepat waktu pada 28 April 2026 dan tidak ada penghasilan tidak teratur. Besarnya angsuran PPh Pasal 25 per bulan untuk tahun pajak 2026 berdasarkan SPT Tahunan 2025 (dibulatkan ke rupiah penuh) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp17.230.000", B: "Rp61.016.667", C: "Rp42.230.000", D: "Rp45.750.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 25 ayat (1): angsuran = (PPh terutang tahun lalu − PPh yang dipotong/dipungut Pasal 21, 22, 23 − PPh Pasal 24 yang boleh dikreditkan) ÷ 12. PPh Pasal 25 yang dibayar tahun lalu bukan pengurang dasar angsuran.",
        jejakHitung: [["PPh terutang 2025", "Rp827.200.000"], ["− PPh 22 dan PPh 23", "Rp95.000.000"], ["− PPh Pasal 24", "Rp225.440.000"], ["Dasar angsuran", "Rp506.760.000"], ["Angsuran per bulan = Rp506.760.000 ÷ 12", "Rp42.230.000"]],
        mengapaSalah: {
          A: "Ikut mengurangkan PPh 25 yang dibayar tahun lalu (Rp206.760.000 ÷ 12) — angka Rp206.760.000 adalah PPh Pasal 29, bukan dasar angsuran.",
          B: "Tidak mengurangkan kredit PPh Pasal 24 (Rp732.200.000 ÷ 12).",
          D: "Memakai PPh tanpa Pasal 31E dan kredit Pasal 24 versi tarif 22% ((Rp880.000.000 − Rp95.000.000 − Rp236.000.000) ÷ 12)."
        },
        jebakan: "Dasar angsuran mengurangkan kredit pajak pihak lain (Pasal 21/22/23/24), bukan angsuran yang dibayar sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 215/PMK.03/2018" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-081",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      kasusId: "V-C9-06",
      formulirRef: "1771.induk.7b",
      stem: "Lanjutan data PT Kencana Rasa Nusantara: kredit PPh Pasal 24 tahun pajak 2025 sebesar Rp225.440.000 telah dihitung per jenis penghasilan untuk tiap negara dan dirinci pada Lampiran 3 Bagian A (penghasilan dari luar negeri) SPT Tahunan PPh Badan bentuk PER-11/PJ/2025. Angka tersebut kemudian dibawa ke formulir induk SPT Tahunan PPh Badan sebagai ...",
      kataKualifikasi: [],
      opsi: { A: "Penyesuaian fiskal negatif pada lampiran rekonsiliasi laporan keuangan (Lampiran 1A sampai 1L) sehingga mengurangi penghasilan neto fiskal tahun 2025", B: "Bagian kredit pajak pada induk SPT yang mengurangi PPh terutang tahun 2025, bersama kredit pajak lainnya", C: "PPh final pada Lampiran 4 karena pajak luar negeri dianggap telah melunasi pajak atas penghasilan tersebut", D: "Pengurang dasar angsuran PPh Pasal 25 tahun berikutnya saja, tanpa mengurangi PPh terutang tahun 2025" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh Pasal 24 adalah kredit pajak menurut Pasal 28 ayat (1) UU PPh, sehingga mengurangi PPh terutang. Dalam SPT bentuk PER-11/PJ/2025, kredit pajak luar negeri dari Lampiran 3 Bagian A dijumlahkan dengan PPh yang dipotong/dipungut pihak lain menjadi Jumlah Kredit Pajak Lampiran 3, lalu dipindahkan ke Induk Bagian E angka 13 (Kredit Pajak), sebelum dikurangi angsuran PPh Pasal 25 di Bagian E angka 14. Kredit itu juga dipakai lagi sebagai pengurang dasar angsuran PPh Pasal 25 tahun berikutnya.",
        jejakHitung: [
          ["Lampiran 3 Bagian A: kredit pajak luar negeri", "Rp225.440.000"],
          ["Lampiran 3: Jumlah Kredit Pajak ke Induk Bagian E angka 13", "Rp225.440.000 + PPh dipotong/dipungut pihak lain"]
        ],
        mengapaSalah: {
          A: "Pajak luar negeri bukan biaya (Pasal 9 ayat (1) huruf h UU PPh) sehingga tidak masuk penyesuaian fiskal di Lampiran 1A sampai 1L; ia kredit pajak.",
          C: "Penghasilan luar negeri tetap digabung dalam PKP dan dikenai tarif umum; Lampiran 4 untuk penghasilan yang dikenai PPh final dan yang bukan objek pajak.",
          D: "Kredit Pasal 24 mengurangi PPh terutang tahun 2025; pengurangan dasar PPh 25 tahun berikutnya hanya akibat lanjutannya."
        },
        jebakan: "Pajak luar negeri masuk induk SPT di Bagian E angka 13 (kredit pajak), bukan di rekonsiliasi fiskal. Formulir 1771 lama (lampiran khusus 7A) hanya untuk tahun pajak sampai 2024."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) PMK 192/PMK.03/2018 (per jenis penghasilan untuk tiap negara)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 85 ayat (1) huruf b, Pasal 138 huruf a, dan Lampiran (petunjuk pengisian Induk Bagian E angka 13 dan Lampiran 3) PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-082", topik: "C9.3", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Arsa Teknika (WP badan dalam negeri) memiliki cabang di Negara Delmora. Laporan cabang tahun 2025: laba sebelum pajak penghasilan Rp1.500.000.000, sudah dikurangi pajak bumi dan bangunan Delmora atas gedung cabang Rp40.000.000 serta pajak pertambahan nilai Delmora atas pembelian yang tidak dapat dikreditkan di sana Rp210.000.000; pajak penghasilan badan Delmora yang dibayar cabang Rp375.000.000. Selain itu, PT Arsa menerima royalti Rp500.000.000 dari perusahaan Delmora yang dipotong pajak penghasilan Delmora 10% sesuai P3B. Pernyataan yang paling tepat mengenai pajak Delmora tersebut dalam SPT Tahunan PT Arsa adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Seluruh pajak yang dibayar di Delmora — pajak penghasilan, pajak pertambahan nilai, dan pajak bumi dan bangunan — dapat dikreditkan menurut Pasal 24 sepanjang tidak melebihi batas maksimum Negara Delmora",
        B: "Pajak penghasilan dan pajak pertambahan nilai Delmora dapat dikreditkan menurut Pasal 24, sedangkan pajak bumi dan bangunan Delmora diperhitungkan sebagai biaya cabang",
        C: "Hanya pajak penghasilan Delmora yang dapat dikreditkan menurut Pasal 24, sedangkan pajak pertambahan nilai dan pajak bumi dan bangunan Delmora tidak boleh diperhitungkan sama sekali karena dibayar di luar negeri",
        D: "Hanya pajak penghasilan Delmora (atas laba cabang dan atas royalti) yang dapat dikreditkan menurut Pasal 24, sedangkan pajak pertambahan nilai dan pajak bumi dan bangunan Delmora yang berkaitan dengan usaha cabang diperhitungkan sebagai biaya dalam laba cabang"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 24 hanya untuk pajak atas penghasilan yang dibayar/terutang di luar negeri. Pajak lain yang berkaitan dengan usaha (selain PPh) merupakan biaya menurut Pasal 6 ayat (1) huruf a, sehingga tetap mengurangi laba cabang.",
        jejakHitung: [["Pajak penghasilan Delmora (cabang + royalti)", "Rp375.000.000 + Rp50.000.000"], ["PPN dan PBB Delmora", "biaya cabang (sudah mengurangi laba Rp1.500.000.000)"]],
        mengapaSalah: {
          A: "PPN dan PBB bukan pajak atas penghasilan sehingga tidak masuk Pasal 24.",
          B: "PPN Delmora tetap bukan pajak atas penghasilan.",
          C: "Pajak selain PPh yang berkaitan dengan usaha boleh dibiayakan (Pasal 6 ayat (1) huruf a) walaupun dibayar di luar negeri."
        },
        jebakan: "Kata 'pajak' di luar negeri tidak otomatis menjadi kredit Pasal 24; uji apakah pajaknya atas penghasilan."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-083",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 8 ayat (1) dan ayat (1a) UU KUP: Wajib Pajak dengan kemauan sendiri dapat membetulkan Surat Pemberitahuan yang telah disampaikan dengan menyampaikan pernyataan tertulis, dengan syarat Direktur Jenderal Pajak belum melakukan tindakan pemeriksaan. Dalam hal pembetulan Surat Pemberitahuan menyatakan rugi atau lebih bayar, pembetulan Surat Pemberitahuan harus disampaikan paling lama 2 (dua) tahun sebelum daluwarsa penetapan.",
      stem: "PT Bayu Samudra Logistik menyampaikan SPT Tahunan PPh Badan tahun pajak 2025 melalui Coretax pada 28 April 2026 dengan PPh Pasal 29 Rp150.000.000 yang telah dilunasi. Pada Oktober 2026 staf pajak menemukan bahwa pajak penghasilan yang dipotong di Negara Lirva atas imbalan jasa angkutan Rp400.000.000 belum dikreditkan, padahal masih di bawah batas maksimum dan bukti pemotongannya lengkap. Bila dikreditkan, SPT 2025 menjadi lebih bayar Rp250.000.000. PT Bayu belum pernah diperiksa untuk tahun pajak 2025, dan PER-12/PJ/2026 mengatur bahwa pembetulan di Coretax memperhitungkan pembayaran yang telah dilakukan. Berdasarkan kutipan tersebut, batas waktu PT Bayu menyampaikan pembetulan SPT Tahunan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Paling lambat 31 Desember 2028, yaitu 2 tahun sebelum daluwarsa penetapan tahun pajak 2025 pada 31 Desember 2030, dengan melampirkan bukti pembayaran pajak luar negeri", B: "Paling lambat 30 April 2028, yaitu 2 tahun setelah batas waktu penyampaian SPT Tahunan 2025, dengan melampirkan bukti pembayaran pajak luar negeri", C: "Paling lambat 31 Desember 2030, yaitu saat daluwarsa penetapan, karena pembetulan dapat disampaikan selama belum dilakukan pemeriksaan", D: "Tidak dapat dibetulkan, karena kredit PPh Pasal 24 hanya dapat diajukan dalam SPT Tahunan yang pertama kali disampaikan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembetulan yang menghasilkan lebih bayar dibatasi Pasal 8 ayat (1a): paling lama 2 tahun sebelum daluwarsa penetapan. Daluwarsa penetapan tahun pajak 2025 adalah 5 tahun setelah berakhirnya tahun pajak (31 Desember 2030), sehingga batasnya 31 Desember 2028.",
        jejakHitung: [
          ["Akhir tahun pajak", "31 Desember 2025"],
          ["Daluwarsa penetapan (+5 tahun, Pasal 13 ayat (1))", "31 Desember 2030"],
          ["Batas pembetulan lebih bayar (−2 tahun)", "31 Desember 2028"]
        ],
        mengapaSalah: {
          B: "Daluwarsa dihitung dari akhir tahun pajak, bukan dari batas penyampaian SPT.",
          C: "Syarat 'belum diperiksa' berlaku umum, tetapi pembetulan rugi/lebih bayar wajib paling lama 2 tahun sebelum daluwarsa.",
          D: "Pembetulan SPT Tahunan juga merupakan SPT Tahunan; kredit Pasal 24 dapat diajukan melaluinya sepanjang syarat Pasal 8 terpenuhi."
        },
        jebakan: "Bedakan pembetulan kurang bayar (sepanjang belum diperiksa) dan pembetulan lebih bayar/rugi (paling lama 2 tahun sebelum daluwarsa)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) dan ayat (1a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 13 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) dan Pasal 8 PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 80A PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 (pembetulan SPT Tahunan di Coretax)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "C9-084",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-07",
      stem: "Data untuk soal ini dan tiga soal berikutnya: PT Lumina Kosmetik Indonesia (PMA, PKP, tahun buku kalender, peredaran bruto 2025 Rp180 miliar) 85% sahamnya dimiliki Lumière Beauté SA di Negara Gallia (mitra P3B; tarif PPh badan Gallia 25%; P3B: royalti 10%, dividen 10% bila penerima memiliki paling sedikit 25% saham; Form DGT sah diserahkan sebelum pembayaran; Lumière pemilik manfaat tanpa BUT di Indonesia). Sepanjang 2025 PT Lumina membayar royalti merek kepada Lumière sebesar 6% dari penjualan bersih produk berlisensi Rp150.000.000.000, yaitu Rp9.000.000.000. Uji eksistensi dan analisis DEMPE menunjukkan merek tersebut benar-benar ada, dikembangkan dan dipelihara Lumière, serta dimanfaatkan PT Lumina. Dalam pemeriksaan, analisis dengan metode perbandingan transaksi independen (comparable uncontrolled transaction/CUT) atas persentase royalti lisensi merek sebanding menghasilkan rentang interkuartil 3,0%–4,5% dari penjualan bersih dengan median 3,8%. Koreksi primer atas biaya royalti dan tambahan PPh badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi Rp2.250.000.000; tambahan PPh Rp495.000.000", B: "Koreksi Rp3.300.000.000; tambahan PPh Rp726.000.000", C: "Koreksi Rp9.000.000.000; tambahan PPh Rp1.980.000.000", D: "Koreksi Rp4.500.000.000; tambahan PPh Rp990.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Royalti lolos uji eksistensi sehingga tetap boleh dibiayakan sebatas yang wajar. Tarif 6% berada di luar rentang interkuartil 3,0%–4,5% sehingga tidak wajar. Karena data tidak menunjukkan titik yang paling tepat di dalam rentang, harga wajar ditentukan pada median 3,8% (Pasal 12 ayat (7) huruf c PMK 172/2023).",
        jejakHitung: [
          ["Royalti dibayar = 6% × Rp150.000.000.000", "Rp9.000.000.000"],
          ["Royalti wajar = 3,8% (median) × Rp150.000.000.000", "Rp5.700.000.000"],
          ["Koreksi primer = 9.000.000.000 − 5.700.000.000", "Rp3.300.000.000"],
          ["Tambahan PPh badan 22% × Rp3.300.000.000", "Rp726.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke batas atas rentang (4,5%); tanpa dasar titik paling tepat, penyesuaian dilakukan ke median.",
          C: "Mengoreksi seluruh royalti seolah-olah dilarang seperti pembayaran BUT ke kantor pusat (Pasal 5 ayat (3) huruf b UU PPh); bagi PT PMA royalti afiliasi boleh dibiayakan sebatas wajar.",
          D: "Menyesuaikan ke batas bawah rentang (3,0%); tanpa dasar titik paling tepat, penyesuaian dilakukan ke median."
        },
        jebakan: "Urutan PMK 172/2023 Pasal 12 ayat (7): titik kewajaran, lalu titik paling tepat di dalam rentang sesuai kesebandingan, baru median bila titik paling tepat tidak dapat ditentukan. Pasal 5 ayat (3) UU PPh hanya untuk BUT; anak perusahaan (PT PMA) diuji dengan PKKU."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (8) dan Pasal 12 ayat (6) huruf b dan ayat (7) huruf c PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-085", topik: "C9.4", tingkat: ["C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C9-07",
      stem: "Lanjutan data PT Lumina Kosmetik Indonesia (PMA, PKP; membayar royalti merek Rp9.000.000.000 sepanjang 2025 kepada induknya, Lumière Beauté SA di Negara Gallia; P3B royalti 10%; Form DGT sah sebelum pembayaran; Lumière pemilik manfaat tanpa BUT; merek dimanfaatkan di Indonesia). Koreksi primer harga transfer Rp3.300.000.000 baru ditetapkan dalam pemeriksaan tahun 2026. Jumlah PPh Pasal 26 yang dipotong ditambah PPN atas pemanfaatan barang kena pajak tidak berwujud dari luar Daerah Pabean yang wajib disetor PT Lumina atas pembayaran royalti 2025 tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp900.000.000", B: "Rp2.790.000.000", C: "Rp1.890.000.000", D: "Rp1.980.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "PPh Pasal 26 memakai tarif P3B 10% karena Form DGT sah; PPN pemanfaatan BKP tidak berwujud dari luar Daerah Pabean tetap terutang (P3B hanya mengatur pajak penghasilan) dengan tarif 12% × DPP nilai lain 11/12.",
        jejakHitung: [["PPh 26 = 10% × Rp9.000.000.000", "Rp900.000.000"], ["PPN = 12% × 11/12 × Rp9.000.000.000", "Rp990.000.000"], ["Jumlah", "Rp1.890.000.000"]],
        mengapaSalah: {
          A: "P3B tidak membebaskan PPN atas pemanfaatan BKP tidak berwujud dari luar Daerah Pabean.",
          B: "Memakai tarif PPh 26 domestik 20% padahal Form DGT sah (Rp1.800.000.000 + Rp990.000.000).",
          D: "Menghitung PPN 12% dari nilai penuh (Rp1.080.000.000) tanpa DPP nilai lain 11/12."
        },
        jebakan: "Koreksi harga transfer di kemudian hari tidak mengubah PPh 26 dan PPN yang terutang saat royalti dibayar."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 4 ayat (1) huruf d UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-086",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-07",
      formulirRef: "1771.l1.7",
      stem: "Lanjutan data PT Lumina Kosmetik Indonesia. Misalkan sebelum menyampaikan SPT Tahunan PPh Badan 2025, PT Lumina sendiri menyimpulkan bahwa Rp3.300.000.000 dari royalti Rp9.000.000.000 yang dibayar kepada Lumière Beauté SA melebihi harga wajar dan memutuskan melakukan penyesuaian sendiri dalam SPT. Penyesuaian tersebut dituangkan dalam SPT sebagai ...",
      kataKualifikasi: [],
      opsi: { A: "Penyesuaian fiskal positif pada Lampiran I (rekonsiliasi fiskal) sebesar Rp3.300.000.000 sehingga penghasilan neto fiskal bertambah", B: "Penyesuaian fiskal negatif pada Lampiran I sebesar Rp3.300.000.000", C: "Pengungkapan pada lampiran transaksi hubungan istimewa (format 1771: lampiran khusus 3A) saja, tanpa mengubah penghasilan neto fiskal", D: "Penghasilan yang dikenai PPh final pada Lampiran IV sebesar Rp3.300.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Biaya royalti yang melebihi harga wajar tidak boleh dikurangkan (Pasal 18 ayat (3) UU PPh; Pasal 3 ayat (1) PMK 172/2023 mewajibkan WP sendiri menerapkan PKKU). Bagian itu dikoreksi positif dalam rekonsiliasi fiskal. Dalam SPT Tahunan PPh Badan tahun pajak 2025 (PER-11/PJ/2025) rekonsiliasi ada di Lampiran 1 (format 1771 lama: Lampiran I), sedangkan transaksinya tetap diungkapkan di Lampiran 10A Daftar Transaksi yang Dipengaruhi Hubungan Istimewa.",
        jejakHitung: [
          ["Royalti dibayar", "Rp9.000.000.000"],
          ["Bagian yang melebihi harga wajar", "Rp3.300.000.000"],
          ["Lampiran 1 (rekonsiliasi): penyesuaian fiskal positif", "+Rp3.300.000.000"]
        ],
        mengapaSalah: {
          B: "Koreksi atas biaya yang tidak wajar menambah, bukan mengurangi, penghasilan neto fiskal.",
          C: "Pengungkapan saja tidak mengubah pajak; kelebihan biaya tetap harus dikoreksi. Untuk tahun pajak 2025 daftar transaksi hubungan istimewa ada di Lampiran 10A, bukan lampiran khusus 3A format 1771.",
          D: "Royalti yang tidak wajar bukan penghasilan yang dikenai PPh final; Lampiran 4 untuk penghasilan final dan bukan objek pajak."
        },
        jebakan: "Pengungkapan (Lampiran 10A) dan koreksi (Lampiran 1) adalah dua hal berbeda. Selisih yang disesuaikan sendiri oleh WP juga diperlakukan sebagai dividen kepada Lumière (Pasal 37 ayat (1) huruf b PMK 172/2023), kecuali dikembalikan dalam kas atau setara kas."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (1) dan Pasal 37 ayat (1) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 85 ayat (1) PER-11/PJ/2025 (Lampiran 1 dan Lampiran 10A SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-087",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-07",
      stem: "Lanjutan data PT Lumina Kosmetik Indonesia: pemeriksaan tahun pajak 2025 menetapkan koreksi primer atas royalti kepada Lumière Beauté SA (pemegang 85% saham, Negara Gallia, P3B dividen 10% untuk kepemilikan paling sedikit 25%, Form DGT sah) sebesar Rp3.300.000.000. Direksi menanyakan konsekuensi lanjutan (secondary adjustment) menurut PMK 172/2023. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Selisih Rp3.300.000.000 tidak diperlakukan sebagai dividen apabila PT Lumina mencatatnya sebagai piutang kepada Lumière tanpa jadwal pelunasan, karena secara akuntansi kelebihan royalti telah dipulihkan", B: "Selisih Rp3.300.000.000 diperlakukan sebagai bunga terselubung kepada Lumière sehingga dipotong PPh Pasal 26 sesuai tarif bunga P3B, kecuali dikembalikan dalam bentuk kas", C: "Selisih Rp3.300.000.000 tetap diperlakukan sebagai dividen walaupun Lumière mengembalikannya dalam bentuk kas sebelum surat ketetapan pajak terbit, karena pengecualian hanya berlaku bila PT Lumina menyetujui koreksi primer", D: "Selisih Rp3.300.000.000 diperlakukan sebagai dividen yang dikenai PPh Pasal 26, kecuali antara lain Lumière mengembalikannya kepada PT Lumina dalam bentuk kas atau setara kas sebelum surat ketetapan pajak terbit" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Selisih koreksi primer merupakan pembagian laba secara tidak langsung kepada Pihak Afiliasi yang diperlakukan sebagai dividen (Pasal 37 ayat (1) PMK 172/2023); bagi Lumière di luar negeri dikenai PPh Pasal 26 dengan manfaat P3B (Pasal 38 ayat (2)). Ketentuan ini tidak berlaku bila ada pengembalian kas atau setara kas sebesar selisih yang dilakukan sebelum surat ketetapan pajak terbit, dan/atau WP menyetujui penentuan harga transfer oleh DJP (Pasal 37 ayat (4) dan ayat (5)).",
        jejakHitung: [
          ["Koreksi primer (selisih)", "Rp3.300.000.000"],
          ["Perlakuan sekunder", "dividen kepada Lumière (PPh Pasal 26, manfaat P3B)"],
          ["Pengecualian", "kas/setara kas sebelum SKP terbit, dan/atau WP menyetujui koreksi DJP"]
        ],
        mengapaSalah: {
          A: "Pencatatan piutang tanpa pelunasan bukan pengembalian kas atau setara kas.",
          B: "PMK 172/2023 memperlakukan selisih sebagai dividen, bukan bunga.",
          C: "Pengembalian kas atau setara kas sebelum SKP terbit sudah cukup untuk pengecualian (Pasal 37 ayat (4) huruf a dan ayat (5)); persetujuan WP atas koreksi adalah pengecualian lain (huruf b), bukan satu-satunya."
        },
        jebakan: "Dua pengecualian berdiri sendiri (dan/atau): pengembalian kas atau setara kas yang dilakukan sebelum SKP terbit, atau persetujuan WP atas penentuan harga transfer oleh DJP. Pengembalian setelah SKP terbit tidak lagi menghapus perlakuan dividen."
      },
      dasarHukum: [{ pasal: "Pasal 37 ayat (1), ayat (4), ayat (5) dan Pasal 38 ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C9-088",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Prima Distribusi Elektronik (PMA) adalah distributor berisiko terbatas yang 100% sahamnya dimiliki Kaito Electronics Co. di Negara Nippora; seluruh barang dagangan dibeli dari Kaito. Data tahun pajak 2025: penjualan bersih Rp200.000.000.000; harga pokok penjualan (pembelian dari Kaito) Rp176.000.000.000; beban usaha Rp21.600.000.000; laba usaha Rp2.400.000.000; pendapatan bunga deposito Rp300.000.000 (PPh final); beban bunga pinjaman bank Rp150.000.000; 210 pegawai. Pemeriksa menerapkan metode TNMM dengan indikator laba usaha terhadap penjualan bersih; rentang interkuartil pembanding 2,5%–4,5% dengan median 3,4%. Tidak ada koreksi lain. Koreksi primer atas harga pembelian dari Kaito dan tambahan PPh badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi Rp2.600.000.000; tambahan PPh Rp572.000.000", B: "Koreksi Rp4.250.000.000; tambahan PPh Rp935.000.000", C: "Koreksi Rp4.400.000.000; tambahan PPh Rp968.000.000", D: "Koreksi Rp6.600.000.000; tambahan PPh Rp1.452.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Rasio laba usaha 1,2% (Rp2.400.000.000 ÷ Rp200.000.000.000) berada di bawah rentang interkuartil 2,5%–4,5% sehingga tidak wajar. Karena data tidak menunjukkan titik yang paling tepat di dalam rentang, laba wajar ditentukan pada median 3,4% (Pasal 12 ayat (7) huruf c PMK 172/2023). TNMM membandingkan laba operasi bersih (Pasal 10 ayat (5)), sehingga bunga deposito dan beban bunga bank tidak termasuk indikator.",
        jejakHitung: [
          ["Rasio laba usaha = 2.400 ÷ 200.000 juta", "1,2%"],
          ["Laba usaha wajar = 3,4% (median) × Rp200.000.000.000", "Rp6.800.000.000"],
          ["Koreksi primer = 6.800 − 2.400 juta", "Rp4.400.000.000"],
          ["Tambahan PPh badan 22% × Rp4.400.000.000", "Rp968.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke batas bawah 2,5% (Rp5.000.000.000 − Rp2.400.000.000); tanpa dasar titik paling tepat, penyesuaian dilakukan ke median.",
          B: "Memasukkan bunga deposito dan beban bunga bank ke indikator (laba Rp2.550.000.000), padahal TNMM memakai laba operasi bersih.",
          D: "Menyesuaikan ke batas atas 4,5% (Rp9.000.000.000 − Rp2.400.000.000); tanpa dasar titik paling tepat, penyesuaian dilakukan ke median."
        },
        jebakan: "TNMM membandingkan laba operasi bersih; keluarkan pos di luar usaha sebelum menguji. Median dipakai bila titik paling tepat di dalam rentang tidak dapat ditentukan."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 ayat (5), Pasal 12 ayat (6) huruf b dan ayat (7) huruf c PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-089",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "PMK 172/2023 (parafrase Pasal 18 ayat (1) dan Pasal 34 ayat (2)): Dokumen Induk dan Dokumen Lokal harus tersedia paling lama 4 bulan setelah akhir tahun pajak dan, bila diminta Direktur Jenderal Pajak dalam rangka pengawasan kepatuhan dan pemeriksaan, wajib disampaikan paling lama 1 bulan sejak permintaan disampaikan.",
      stem: "PT Wahana Ban Indonesia (PMA, tahun buku Januari–Desember) memenuhi kriteria wajib Dokumen Induk dan Dokumen Lokal untuk tahun pajak 2024, tahun pertama dokumentasi menurut PMK 172/2023. Dalam pemeriksaan tahun pajak 2024, pemeriksa menyampaikan surat permintaan dokumen penentuan harga transfer tertanggal 9 Oktober 2026. Berdasarkan kutipan tersebut, kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen harus sudah tersedia paling lama 30 April 2025 dan diserahkan paling lama 23 Oktober 2026 (14 hari sejak permintaan)", B: "Dokumen harus sudah tersedia paling lama 30 April 2025 dan diserahkan paling lama 9 November 2026 (1 bulan sejak permintaan)", C: "Dokumen cukup disusun setelah ada permintaan, lalu diserahkan paling lama 9 November 2026 (1 bulan sejak permintaan)", D: "Dokumen harus sudah tersedia paling lama 31 Desember 2025 dan diserahkan paling lama 9 Januari 2027 (3 bulan sejak permintaan)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Dokumen tahun pajak 2024 (tahun pertama menurut Pasal 73 angka 3 PMK 172/2023) harus tersedia paling lama 4 bulan setelah akhir tahun pajak, yaitu 30 April 2025 (Pasal 18 ayat (1)). Bila diminta dalam pemeriksaan, dokumen wajib disampaikan paling lama 1 bulan sejak permintaan disampaikan (Pasal 34 ayat (2)); untuk surat yang disampaikan 9 Oktober 2026, batasnya 9 November 2026.",
        jejakHitung: [
          ["Akhir tahun pajak 2024", "31 Desember 2024"],
          ["+ 4 bulan: wajib tersedia", "30 April 2025"],
          ["Permintaan disampaikan", "9 Oktober 2026"],
          ["+ 1 bulan: batas penyampaian", "9 November 2026"]
        ],
        mengapaSalah: {
          A: "14 hari bukan jangka waktu penyampaian dokumen harga transfer; Pasal 34 ayat (2) memberi 1 bulan.",
          C: "Dokumen harus sudah tersedia 4 bulan setelah akhir tahun pajak (Pasal 18 ayat (1)), bukan disusun setelah diminta.",
          D: "Ketersediaan dihitung 4 bulan setelah akhir tahun pajak, dan penyampaian 1 bulan sejak permintaan, bukan 3 bulan."
        },
        jebakan: "Dua tenggat berbeda: ketersediaan (4 bulan setelah akhir tahun pajak) dan penyampaian saat diminta (1 bulan sejak permintaan disampaikan, bukan sejak tanggal yang tertera di surat bila surat diterima kemudian)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1), Pasal 34 ayat (2), dan Pasal 73 angka 3 PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Tenggat 4 bulan (Pasal 18 ayat (1)) dan 1 bulan sejak permintaan disampaikan (Pasal 34 ayat (2) PMK 172/2023) sudah cocok dengan naskah. Yang belum pasti: cara hitung \"1 bulan sejak 9 Oktober 2026\" (9 November atau 8 November) yang sedang ditanyakan ke pengguna, dan stem menyebut tanggal surat, sedangkan naskah menghitung sejak permintaan disampaikan."
    },
    {
      id: "C9-090",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Kriteria pemilik manfaat (parafrase PMK 112/2025 Pasal 19 ayat (1) huruf b dan ayat (2)): wajib pajak badan luar negeri merupakan pemilik manfaat bila tidak bertindak sebagai agen, nomine, atau perusahaan conduit; mempunyai kendali untuk menggunakan atau menikmati dana, aset, atau hak yang mendatangkan penghasilan dari Indonesia; tidak menggunakan lebih dari 50% penghasilannya untuk memenuhi kewajiban kepada pihak lain; menanggung risiko atas aset, modal, atau kewajiban yang dimiliki; dan tidak mempunyai kewajiban tertulis maupun tidak tertulis untuk meneruskan sebagian atau seluruh penghasilan dari Indonesia kepada pihak lain.",
      stem: "RUPS PT Arunika Semen Indonesia (PMA) menetapkan dividen tunai Rp6.000.000.000 yang dibayar pada 20 Juli 2026. Pemegang saham: Cendana Holdings BV di Negara Nedera (mitra P3B; dividen 10% bila penerima badan memiliki paling sedikit 25% saham, 15% lainnya) 60% dan PT Mitra Bangun (WP badan dalam negeri) 40%. Cendana hanya mempunyai dua pegawai administrasi, tidak menjalankan usaha lain, dan berdasarkan perjanjian wajib meneruskan 90% dividen yang diterimanya dalam 10 hari kepada induknya, Taurus Capital Ltd di Negara Tarsia yang tidak mempunyai P3B dengan Indonesia. Cendana menyerahkan Form DGT sebelum pembayaran, tetapi bagian uji pemilik manfaat memuat fakta tersebut. Berdasarkan kutipan tersebut, PPh atas dividen yang wajib dipotong PT Arunika adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp720.000.000", B: "Rp360.000.000", C: "Rp540.000.000", D: "Rp1.200.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Cendana wajib meneruskan 90% dividen kepada Taurus, sehingga lebih dari 50% penghasilannya dipakai untuk kewajiban kepada pihak lain dan ia mempunyai kewajiban tertulis untuk meneruskan penghasilan dari Indonesia (PMK 112/2025 Pasal 19 ayat (2) huruf b dan huruf d). Cendana bukan pemilik manfaat, tarif P3B tidak dapat diterapkan, dan PPh Pasal 26 dipotong 20% dari dividen bagian Cendana. Dividen kepada PT Mitra Bangun (badan dalam negeri) bukan objek PPh.",
        jejakHitung: [
          ["Dividen bagian Cendana = 60% × Rp6.000.000.000", "Rp3.600.000.000"],
          ["Uji pemilik manfaat: diteruskan 90% > 50% dan ada kewajiban meneruskan", "tidak lolos"],
          ["PPh 26 = 20% × Rp3.600.000.000", "Rp720.000.000"],
          ["Dividen PT Mitra Bangun (badan dalam negeri)", "bukan objek"]
        ],
        mengapaSalah: {
          B: "Menerapkan tarif P3B 10% walaupun Cendana bukan pemilik manfaat.",
          C: "Memakai tarif dividen 15%; masalahnya bukan persentase kepemilikan, tetapi status pemilik manfaat.",
          D: "Ikut memotong dividen kepada badan dalam negeri yang dikecualikan dari objek PPh (20% × Rp6.000.000.000)."
        },
        jebakan: "Form DGT yang sudah diserahkan belum menjamin tarif P3B; uji pemilik manfaat dapat menggugurkannya."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan ayat (1a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 Pasal 19 ayat (1) huruf b dan ayat (2) (pemilik manfaat)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 4 ayat (3) huruf f angka 1 UU PPh s.t.d.t.d. UU 7/2021 (dividen badan dalam negeri)", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-091", topik: "C9.5", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 13 ayat (2) UU KUP s.t.d.t.d. UU 7/2021 (parafrase): Jumlah kekurangan pajak yang terutang dalam SKPKB ditambah sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan (suku bunga acuan ditambah 15% dibagi 12) dan dikenakan paling lama 24 bulan, dihitung sejak saat terutangnya pajak atau berakhirnya Masa Pajak sampai dengan diterbitkannya SKPKB; bagian dari bulan dihitung penuh 1 bulan.",
      stem: "Pada Maret 2025 PT Kayana Mesin (PMA) membayar royalti Rp1.500.000.000 kepada Hiroden Co. di Negara Nippora (P3B royalti 10%) dan memotong PPh Pasal 26 sebesar 10% (Rp150.000.000) yang disetor dan dilaporkan tepat waktu. Dalam pemeriksaan diketahui Form DGT Hiroden baru diterima dua bulan setelah pembayaran, setelah batas waktu penyampaian SPT Masa Maret 2025, sehingga menurut ketentuan yang berlaku saat itu (PER-25/PJ/2018) syarat penerapan P3B tidak terpenuhi untuk pembayaran tersebut. SKPKB PPh Pasal 26 Masa Pajak Maret 2025 diterbitkan pada 20 Oktober 2026. Anggap tarif bunga per bulan Pasal 13 ayat (2) yang berlaku untuk penghitungan ini 1,84%. Berdasarkan kutipan tersebut, pokok kurang bayar dan sanksi bunga dalam SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pokok Rp150.000.000; bunga Rp66.240.000", B: "Pokok Rp150.000.000; bunga Rp28.785.000", C: "Pokok Rp300.000.000; bunga Rp104.880.000", D: "Pokok Rp150.000.000; bunga Rp52.440.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Tanpa Form DGT yang sah pada waktunya, tarif 20% berlaku: kurang potong (20% − 10%) × Rp1.500.000.000 = Rp150.000.000. Bunga Pasal 13 ayat (2) dihitung sejak berakhirnya Masa Pajak Maret 2025 sampai SKPKB terbit: 18 bulan 20 hari, dibulatkan menjadi 19 bulan.",
        jejakHitung: [["PPh 26 seharusnya = 20% × Rp1.500.000.000", "Rp300.000.000"], ["Telah dipotong dan disetor", "Rp150.000.000"], ["Pokok kurang bayar", "Rp150.000.000"], ["31 Maret 2025 s.d. 20 Oktober 2026", "18 bulan 20 hari → 19 bulan"], ["Bunga = Rp150.000.000 × 1,84% × 19", "Rp52.440.000"]],
        mengapaSalah: {
          A: "Langsung memakai batas maksimum 24 bulan (Rp150.000.000 × 1,84% × 24), padahal masa sebenarnya 19 bulan.",
          B: "Memakai tarif bunga Pasal 9 ayat (2a) yang uplift-nya 5% (contoh 1,01% × 19 bulan), padahal SKPKB hasil pemeriksaan memakai Pasal 13 ayat (2).",
          C: "Tidak mengurangkan PPh 26 yang telah dipotong dan disetor (pokok 20% penuh)."
        },
        jebakan: "Pokok SKPKB hanya selisih yang belum dipotong; bulan dihitung dari akhir Masa Pajak dan bagian bulan dibulatkan penuh."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-25/PJ/2018 (penerapan P3B s.d. 30 Desember 2025; kini PMK 112/2025)", berlakuSejak: "2019-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-092", topik: "C9.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "PENG-2/PJ.09/2026 (parafrase): Surat keterangan domisili Wajib Pajak luar negeri yang diterbitkan berdasarkan PER-25/PJ/2018 sebelum berlakunya PMK 112/2025 tetap dapat digunakan sampai dengan berakhirnya periode yang tercantum di dalamnya.",
      stem: "PT Sentra Optik Nusantara (PMA) membayar bunga pinjaman kepada Albion Finance Ltd di Negara Albria (P3B bunga 10%; Albion pemilik manfaat tanpa BUT di Indonesia) sebesar Rp500.000.000 pada 15 Mei 2026 dan Rp500.000.000 pada 14 Agustus 2026. Albion hanya pernah menyerahkan Form DGT format PER-25/PJ/2018 yang disahkan otoritas Albria untuk periode 1 Juli 2025–30 Juni 2026 dan telah terekam di Coretax; hingga 14 Agustus 2026 tidak ada Form DGT baru format PMK 112/2025. Berdasarkan kutipan tersebut, total PPh Pasal 26 yang wajib dipotong PT Sentra atas kedua pembayaran adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000.000", B: "Rp150.000.000", C: "Rp200.000.000", D: "Rp50.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembayaran Mei 2026 masih dalam periode SKD lama sehingga tarif P3B 10% (Rp50.000.000). Pembayaran Agustus 2026 di luar periode SKD dan tanpa Form DGT baru sehingga dipotong 20% (Rp100.000.000).",
        jejakHitung: [["15 Mei 2026: 10% × Rp500.000.000", "Rp50.000.000"], ["14 Agustus 2026: 20% × Rp500.000.000", "Rp100.000.000"], ["Jumlah", "Rp150.000.000"]],
        mengapaSalah: {
          A: "Menganggap SKD lama masih berlaku untuk Agustus 2026, padahal periodenya berakhir 30 Juni 2026.",
          C: "Menganggap SKD format PER-25/PJ/2018 langsung gugur sejak PMK 112/2025 berlaku; PENG-2/PJ.09/2026 menegaskan tetap berlaku sampai periodenya berakhir.",
          D: "Tidak memotong pembayaran Agustus; tanpa SKD yang sah bunga kepada WPLN tetap dipotong 20%."
        },
        jebakan: "Periksa periode berlaku SKD terhadap tanggal setiap pembayaran, bukan terhadap tahun pajak."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PENG-2/PJ.09/2026 (peralihan SKD)", berlakuSejak: "2026-01-09" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C9-093", topik: "C9.5", tingkat: ["C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Sakura Rasa Indonesia adalah PMA yang 100% sahamnya dimiliki perusahaan di Negara Nippora, berdiri sejak 2015, berkedudukan di Bekasi, dan membukukan dalam Rupiah. Peredaran bruto tahun pajak 2025 Rp24.000.000.000 dan PKP Rp2.000.000.000; laba belum dibagikan. Pernyataan yang paling tepat mengenai PPh PT Sakura Rasa adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Karena berstatus PMA, PT Sakura Rasa dikenai tarif 22% atas seluruh PKP tanpa fasilitas Pasal 31E, dan PPh Pasal 26 terutang ketika dividen dibayarkan atau disediakan untuk dibayarkan",
        B: "Karena berstatus PMA, PT Sakura Rasa diperlakukan sebagai BUT sehingga atas PKP sesudah PPh terutang PPh Pasal 26 ayat (4) setiap tahun walaupun laba tidak dibagikan kepada induknya",
        C: "PT Sakura Rasa adalah WP badan dalam negeri: Pasal 31E berlaku atas PKP dari bruto sampai Rp4,8 miliar, dan PPh Pasal 26 baru terutang saat dividen dibayarkan atau disediakan untuk dibayarkan",
        D: "PT Sakura Rasa dapat memilih PPh final 0,5% dari peredaran bruto karena peredarannya tidak melebihi Rp50 miliar, dan PPh Pasal 26 terutang saat dividen dibayarkan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PMA berbentuk PT yang didirikan di Indonesia adalah subjek pajak badan dalam negeri, sehingga Pasal 31E berlaku sepanjang peredaran bruto tidak melebihi Rp50 miliar. Laba yang ditahan tidak memicu PPh 26 (berbeda dengan BUT).",
        jejakHitung: [["Pembanding: PKP fasilitas = 4,8/24 × Rp2.000.000.000", "Rp400.000.000"], ["PPh = 11% × Rp400.000.000 + 22% × Rp1.600.000.000", "Rp396.000.000"]],
        mengapaSalah: {
          A: "Status PMA tidak menghapus hak atas Pasal 31E.",
          B: "PMA berbentuk PT adalah badan dalam negeri, bukan BUT; tidak ada branch profit tax.",
          D: "PPh final 0,5% hanya untuk peredaran bruto sampai Rp4,8 miliar dan bagi PT dalam jangka waktu 3 tahun pajak; PT Sakura Rasa melampaui keduanya."
        },
        jebakan: "Bedakan PMA (PT, WP dalam negeri) dari BUT (subjek pajak luar negeri)."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (3) huruf b dan Pasal 31E UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 (PPh final 0,5%)", berlakuSejak: "2022-12-20" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C9-094",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.l1.9",
      stem: "PT Delta Agro Industri (PMA) memperoleh fasilitas tax allowance PP 78/2019 atas penanaman modal aktiva tetap berwujud (termasuk tanah) untuk kegiatan usaha utama Rp240.000.000.000 dan mulai berproduksi komersial pada Maret 2024. Tahun pajak 2025 adalah tahun kedua pemanfaatan; penghasilan neto fiskal 2025 sebelum fasilitas Rp58.000.000.000 dan penyusutan dipercepat sudah dihitung dalam lampiran penyusutan. Penyajian fasilitas pengurangan penghasilan neto tahun 2025 dalam SPT Tahunan PPh Badan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.000.000.000 dikurangkan sebagai fasilitas pengurangan penghasilan neto pada induk SPT Bagian D angka 5, dirinci pada Lampiran 13A Daftar Fasilitas Penanaman Modal", B: "Rp72.000.000.000 (30% × Rp240 miliar) dikurangkan sekaligus pada induk SPT Bagian D angka 5, dirinci pada Lampiran 13A Daftar Fasilitas Penanaman Modal", C: "Rp12.000.000.000 disajikan sebagai tambahan penyusutan fiskal pada Lampiran 9 Daftar Penyusutan dan Amortisasi Fiskal, bukan pada induk SPT Bagian D angka 5", D: "Rp12.000.000.000 dikurangkan sebagai kredit pajak pada induk SPT, setelah PPh terutang dihitung" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengurangan penghasilan neto 30% dari nilai investasi dibebankan 5% per tahun selama 6 tahun: 5% × Rp240 miliar = Rp12 miliar per tahun. Dalam SPT Tahunan PPh Badan bentuk PER-11/PJ/2025 (Tahun Pajak 2025), jumlah itu diisi pada induk Bagian D angka 5 dari Jumlah Fasilitas Pengurangan Penghasilan Neto di Lampiran 13A, lalu mengurangi penghasilan neto fiskal pada Bagian D angka 7.",
        jejakHitung: [
          ["Total fasilitas = 30% × Rp240.000.000.000", "Rp72.000.000.000"],
          ["Per tahun = 5% × Rp240.000.000.000", "Rp12.000.000.000"],
          ["Neto fiskal setelah fasilitas = 58.000 − 12.000 juta", "Rp46.000.000.000"]
        ],
        mengapaSalah: {
          B: "Fasilitas 30% tidak dibebankan sekaligus, tetapi 5% per tahun selama 6 tahun.",
          C: "Pengurangan penghasilan neto adalah fasilitas tersendiri (induk Bagian D angka 5 dan Lampiran 13A), bukan penyusutan; penyusutan dipercepat sudah dihitung di Lampiran 9.",
          D: "Tax allowance mengurangi penghasilan neto, bukan PPh terutang."
        },
        jebakan: "Tax allowance mengurangi penghasilan neto; tax holiday mengurangi PPh terutang. Kode lampiran 1771 lama (4A, Lampiran I) hanya untuk Tahun Pajak 2024 dan sebelumnya."
      },
      dasarHukum: [{ pasal: "PP 78/2019 Pasal 3 ayat (1) huruf a dan ayat (4) huruf a (tax allowance)" }, { pasal: "PER-11/PJ/2025 Pasal 85 dan Lampiran (induk SPT Tahunan PPh Badan Bagian D angka 5, Lampiran 13A), Pasal 138 huruf a", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-095",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase): Atas penghasilan berupa dividen, bunga, royalti, dan penghasilan lain dengan nama dan dalam bentuk apa pun yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh subjek pajak dalam negeri kepada Wajib Pajak luar negeri selain BUT, dipotong pajak sebesar 20% dari jumlah bruto oleh pihak yang wajib membayarkan.",
      stem: "Direksi PT Mahkota Fiber Indonesia (PMA), dengan persetujuan Dewan Komisaris sesuai anggaran dasar, menetapkan dividen interim pada 22 Desember 2025 dan pada hari itu juga mencatatnya sebagai utang dividen. Dividen untuk Orion Fibers Ltd (Negara Lirva, mitra P3B; dividen 10% untuk kepemilikan paling sedikit 25%; kepemilikan 70%; SKD format PER-25/PJ/2018 yang masih berlaku telah terekam di Coretax) sebesar Rp2.800.000.000 baru ditransfer pada 12 Januari 2026. Berdasarkan kutipan tersebut, kewajiban administrasi PT Mahkota yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membuat BPNR Masa Januari 2026 sebesar Rp280.000.000, menyetor paling lambat 15 Februari 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Februari 2026", B: "Membuat BPNR Masa Desember 2025 sebesar Rp280.000.000, menyetor paling lambat 10 Januari 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Januari 2026", C: "Membuat BPNR Masa Desember 2025 sebesar Rp560.000.000, menyetor paling lambat 15 Januari 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Januari 2026", D: "Membuat BPNR Masa Desember 2025 sebesar Rp280.000.000, menyetor paling lambat 15 Januari 2026, dan melaporkan SPT Masa PPh Unifikasi paling lambat 20 Januari 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang pada saat dividen dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo — mana yang terjadi lebih dulu. Pencatatan utang dividen pada 22 Desember 2025 berarti dividen telah disediakan untuk dibayarkan pada Masa Desember 2025; tarif P3B 10% karena SKD sah.",
        jejakHitung: [
          ["PPh 26 = 10% × Rp2.800.000.000", "Rp280.000.000"],
          ["Masa Pajak terutang", "Desember 2025 (disediakan untuk dibayarkan)"],
          ["Batas setor", "15 Januari 2026"],
          ["Batas lapor SPT Masa PPh Unifikasi", "20 Januari 2026"]
        ],
        mengapaSalah: {
          A: "Memakai saat transfer, padahal saat disediakan untuk dibayarkan terjadi lebih dulu.",
          B: "Batas setor tanggal 10 sudah diganti tanggal 15 sejak 2025 (PMK 81/2024).",
          C: "Memakai tarif domestik 20% padahal SKD sah."
        },
        jebakan: "Untuk dividen yang sudah dicatat sebagai utang, masa pajaknya mengikuti saat disediakan untuk dibayarkan, bukan tanggal transfer."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 15 ayat (4) (saat pemotongan PPh Pasal 26)" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171 ayat (1) (setor tanggal 15, lapor tanggal 20)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPNR, SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: Pasal 26 ayat (1) UU PPh, PP 94/2010 Pasal 15 ayat (4) (pemotongan PPh 26 pada akhir bulan dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dulu), serta PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171 ayat (1) (setor tanggal 15, lapor tanggal 20). Belum pasti: naskah tidak mendefinisikan \"disediakan untuk dibayarkan\"; penafsirannya sebagai saat dividen interim dicatat sebagai utang mengikuti praktik umum."
    },
    {
      id: "C9-096",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-08",
      stem: "Data untuk soal ini dan soal berikutnya: Grup Merapi (entitas induk utama di Negara Halvia; pendapatan konsolidasi EUR 3 miliar setiap tahun sejak 2020) memiliki dua entitas konstituen di Indonesia pada tahun pajak 2025. PT Merapi Nikel (menikmati tax holiday): laba GloBE Rp400.000.000.000, pajak tercakup yang disesuaikan Rp8.000.000.000, biaya gaji pegawai yang memenuhi syarat Rp50.000.000.000, dan nilai tercatat aset berwujud yang memenuhi syarat Rp500.000.000.000. PT Merapi Logistik: laba GloBE Rp100.000.000.000, pajak tercakup yang disesuaikan Rp22.000.000.000, biaya gaji Rp30.000.000.000, dan aset berwujud Rp100.000.000.000. Untuk tahun pajak 2025, persentase transisi pengecualian berbasis substansi (SBIE) adalah 9,6% atas biaya gaji dan 7,6% atas aset berwujud. Tidak ada safe harbour yang dipilih. Nilai SBIE yurisdiksi Indonesia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp56.000.000.000", B: "Rp42.800.000.000", C: "Rp53.280.000.000", D: "Rp34.000.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "SBIE dihitung per yurisdiksi dengan menjumlahkan biaya gaji dan aset berwujud semua entitas konstituen di Indonesia, lalu dikalikan persentase transisi tahun 2025.",
        jejakHitung: [
          ["Gaji = 50 + 30 miliar", "Rp80.000.000.000"],
          ["9,6% × Rp80.000.000.000", "Rp7.680.000.000"],
          ["Aset berwujud = 500 + 100 miliar", "Rp600.000.000.000"],
          ["7,6% × Rp600.000.000.000", "Rp45.600.000.000"],
          ["SBIE yurisdiksi", "Rp53.280.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai persentase awal tahun 2023 (10% gaji dan 8% aset).",
          B: "Hanya menghitung PT Merapi Nikel; SBIE dihitung untuk seluruh yurisdiksi.",
          D: "Memakai persentase permanen 5% yang baru berlaku setelah masa transisi."
        },
        jebakan: "Semua komponen GloBE — laba, pajak tercakup, dan SBIE — digabung per yurisdiksi."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (2) dan ayat (7) serta Pasal 8 ayat (1) dan ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-097",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C9-08",
      stem: "Lanjutan data Grup Merapi tahun pajak 2025 (yurisdiksi Indonesia: PT Merapi Nikel laba GloBE Rp400.000.000.000 dengan pajak tercakup yang disesuaikan Rp8.000.000.000; PT Merapi Logistik laba GloBE Rp100.000.000.000 dengan pajak tercakup yang disesuaikan Rp22.000.000.000; SBIE yurisdiksi Rp53.280.000.000, sedangkan SBIE PT Merapi Nikel saja Rp42.800.000.000; tidak ada penyesuaian lain). Pajak minimum domestik tambahan (DMTT) yurisdiksi Indonesia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp46.436.000.000", B: "Rp40.204.800.000", C: "Rp45.000.000.000", D: "Rp67.008.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "ETR dihitung per yurisdiksi: (8 + 22) ÷ (400 + 100) miliar = 6%. Persentase top-up 9% dikalikan laba lebih (laba GloBE − SBIE yurisdiksi).",
        jejakHitung: [
          ["Pajak tercakup yurisdiksi", "Rp30.000.000.000"],
          ["Laba GloBE yurisdiksi", "Rp500.000.000.000"],
          ["ETR = 30 ÷ 500", "6%"],
          ["Persentase top-up = 15% − 6%", "9%"],
          ["Laba lebih = 500 − 53,28 miliar", "Rp446.720.000.000"],
          ["DMTT = 9% × Rp446.720.000.000", "Rp40.204.800.000"]
        ],
        mengapaSalah: {
          A: "Menghitung per entitas (PT Merapi Nikel ETR 2%: 13% × (400 − 42,8) miliar), padahal ETR digabung per yurisdiksi.",
          C: "Lupa mengurangkan SBIE (9% × Rp500.000.000.000).",
          D: "Mengalikan tarif 15% penuh dengan laba lebih, bukan selisih 15% − ETR."
        },
        jebakan: "Entitas bertarif tinggi di yurisdiksi yang sama menurunkan top-up melalui blending."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1), Pasal 6 ayat (3), ayat (4), ayat (6), dan Pasal 53 PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-098",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Tervalis (entitas induk utama di Negara Ardenia yang menerapkan IIR sejak 2024; pendapatan konsolidasi EUR 2,4 miliar) memiliki 100% saham PT Tervalis Indonesia. Untuk tahun pajak 2025 ETR GloBE yurisdiksi Indonesia 9% karena tax holiday, dan Indonesia memungut DMTT yang memenuhi syarat (qualified) sesuai PMK 136/2024. Pernyataan yang paling tepat mengenai pemungutan pajak tambahan atas yurisdiksi Indonesia adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Pajak tambahan yurisdiksi Indonesia dipungut lebih dulu oleh Indonesia melalui DMTT; IIR di Ardenia hanya dapat memungut sisa pajak tambahan setelah dikurangi DMTT yang memenuhi syarat, yang menjadi nihil bila DMTT telah menutup seluruhnya", B: "Pajak tambahan yurisdiksi Indonesia dipungut lebih dulu oleh Ardenia melalui IIR; DMTT Indonesia hanya dapat memungut sisa pajak tambahan setelah dikurangi IIR yang telah dibayar entitas induk utama", C: "Pajak tambahan yurisdiksi Indonesia dipungut penuh oleh Indonesia melalui DMTT dan penuh oleh Ardenia melalui IIR, karena keduanya merupakan pajak yang berdiri sendiri", D: "Pajak tambahan yurisdiksi Indonesia tidak dipungut oleh siapa pun untuk tahun pajak 2025, karena tax holiday yang diberikan sebelum PMK 136/2024 dikecualikan dari penghitungan ETR" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Urutan penerapan: DMTT, lalu IIR, lalu UTPR. DMTT yang memenuhi syarat dikurangkan dari pajak tambahan yang dihitung menurut IIR, sehingga hak memungut atas laba bertarif rendah di Indonesia lebih dulu ada pada Indonesia.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Urutan terbalik; DMTT didahulukan.",
          C: "Pengurangan DMTT dalam IIR mencegah pemajakan ganda atas pajak tambahan yang sama.",
          D: "Tax holiday tidak dikecualikan; justru menurunkan ETR dan memicu DMTT."
        },
        jebakan: "Opsi A dan B hanya bertukar urutan DMTT dan IIR."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1), ayat (2), ayat (5) dan Pasal 52 PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-099",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "PMK 136/2024 Pasal 65 ayat (3) dan Pasal 69 ayat (1) (parafrase): GloBE Information Return (GIR) disampaikan paling lama 15 bulan setelah berakhirnya tahun pajak; untuk tahun pajak pertama grup masuk cakupan, paling lama 18 bulan setelah berakhirnya tahun pajak.",
      stem: "PT Garuda Holding (entitas induk utama di Indonesia, tahun buku Januari–Desember) pertama kali masuk cakupan pajak minimum global pada tahun pajak 2025 dan telah menjadwalkan GloBE Information Return tahun pajak 2025 paling lambat 30 Juni 2027. Manajer pajak kini menyusun kalender kepatuhan tahun pajak 2026, termasuk SPT Tahunan PPh Badan 2026 yang jatuh tempo 30 April 2027 dan Laporan per Negara (CbCR) tahun pajak 2026. Berdasarkan kutipan tersebut, batas waktu penyampaian GloBE Information Return tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "30 Juni 2028", B: "30 April 2027", C: "31 Desember 2027", D: "31 Maret 2028" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Perpanjangan 18 bulan hanya untuk tahun pertama (2025). GIR tahun pajak 2026 memakai 15 bulan: 31 Desember 2026 + 15 bulan = 31 Maret 2028.",
        jejakHitung: [
          ["Akhir tahun pajak 2026", "31 Desember 2026"],
          ["+ 15 bulan", "31 Maret 2028"]
        ],
        mengapaSalah: {
          A: "Menerapkan lagi 18 bulan, padahal hanya untuk tahun pertama.",
          B: "Itu batas SPT Tahunan PPh Badan 2026 (4 bulan), bukan GIR.",
          C: "12 bulan adalah tenggat CbCR, bukan GloBE Information Return."
        },
        jebakan: "Tenggat GIR berbeda dari SPT Tahunan PPh GloBE. Pajak tambahan tahun pengenaan 2026 dilaporkan dalam SPT Tahun Pajak GloBE 2027, paling lama 30 April 2028 (4 bulan setelah akhir 2027). Tiga tenggat lain untuk tahun pajak 2026: SPT Badan 30 April 2027, CbCR 31 Desember 2027, GIR 31 Maret 2028."
      },
      dasarHukum: [{ pasal: "Pasal 65 ayat (3), ayat (13), ayat (14) dan Pasal 69 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (1) dan Pasal 13 PER-6/PJ/2026", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-100",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Solenne (dalam cakupan PMK 136/2024) mempunyai satu entitas konstituen di Indonesia. Rata-rata tiga tahun terakhir untuk yurisdiksi Indonesia: pendapatan GloBE EUR 9,2 juta dan laba GloBE EUR 1,1 juta; ETR GloBE 2025 sebesar 8%. Kesimpulan yang tepat mengenai pengecualian de minimis untuk yurisdiksi Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dikecualikan karena rata-rata pendapatan di bawah EUR 10 juta; syarat laba tidak perlu diuji", B: "Dikecualikan karena ETR 8% masih di atas separuh tarif minimum 15%", C: "Tidak memenuhi pengecualian de minimis karena rata-rata laba EUR 1,1 juta tidak kurang dari EUR 1 juta, padahal kedua syarat harus terpenuhi", D: "Tidak memenuhi pengecualian de minimis karena pengecualian itu hanya untuk grup dengan pendapatan konsolidasi di bawah EUR 750 juta" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "De minimis mensyaratkan rata-rata pendapatan GloBE kurang dari EUR 10 juta dan rata-rata laba GloBE kurang dari EUR 1 juta (atau rugi); laba EUR 1,1 juta gagal pada syarat kedua.",
        jejakHitung: [
          ["Rata-rata pendapatan EUR 9,2 juta < EUR 10 juta", "terpenuhi"],
          ["Rata-rata laba EUR 1,1 juta < EUR 1 juta", "tidak terpenuhi"],
          ["Kesimpulan", "tidak dikecualikan"]
        ],
        mengapaSalah: {
          A: "Kedua syarat bersifat kumulatif.",
          B: "Tidak ada pengecualian berbasis 'separuh tarif minimum'.",
          D: "De minimis adalah pengecualian per yurisdiksi bagi grup yang sudah masuk cakupan; grup di bawah EUR 750 juta justru di luar cakupan sama sekali."
        },
        jebakan: "Perhatikan kata 'dan' pada dua syarat de minimis."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "C9-101",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Bintang Kaca Indonesia adalah satu-satunya entitas konstituen Grup Bintang (dalam cakupan PMK 136/2024) di Indonesia. Data tahun pajak 2025: laba GloBE Rp200.000.000.000; PPh badan tahun berjalan Rp14.000.000.000 (setelah fasilitas tax allowance); PPh final Pasal 4 ayat (2) atas sewa bangunan yang diterimanya Rp2.000.000.000 (penghasilan sewa termasuk dalam laba GloBE); PBB-P2 Rp3.000.000.000; bea meterai Rp200.000.000; PPh Pasal 21 yang dipotong dari gaji pegawai Rp9.000.000.000; SBIE Rp40.000.000.000. Tidak ada penyesuaian pajak tangguhan dan tidak ada safe harbour. Pajak minimum domestik tambahan (DMTT) tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.800.000.000", B: "Rp11.200.000.000", C: "Rp8.640.000.000", D: "Rp4.000.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak tercakup adalah pajak atas penghasilan atau laba entitas itu sendiri, termasuk PPh final atas penghasilan yang masuk laba GloBE; PBB, bea meterai, dan PPh 21 yang dipotong dari pegawai bukan pajak tercakup. ETR = 16 ÷ 200 = 8%.",
        jejakHitung: [
          ["Pajak tercakup = 14 + 2 miliar", "Rp16.000.000.000"],
          ["ETR = 16 ÷ 200", "8%"],
          ["Persentase top-up = 15% − 8%", "7%"],
          ["Laba lebih = 200 − 40 miliar", "Rp160.000.000.000"],
          ["DMTT = 7% × Rp160.000.000.000", "Rp11.200.000.000"]
        ],
        mengapaSalah: {
          A: "Mengeluarkan PPh final atas sewa (ETR 7%); pajak final atas penghasilan tetap pajak atas penghasilan.",
          C: "Memasukkan PBB dan bea meterai yang bukan pajak atas penghasilan (ETR 9,6%).",
          D: "Memasukkan PPh 21 pegawai (ETR 12,5%), padahal itu pajak penghasilan pegawai yang hanya dipotong entitas."
        },
        jebakan: "Uji setiap pajak: apakah dikenakan atas penghasilan/laba entitas itu sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 32 ayat (1) huruf a PMK 136/2024 (Pajak Tercakup)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 6 ayat (3), ayat (4), dan ayat (6) PMK 136/2024 (DMTT)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-102",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Data CbCR berkualitas Grup Altair untuk yurisdiksi Indonesia tahun pajak 2026: pendapatan EUR 60 juta; laba sebelum pajak EUR 8 juta; pajak penghasilan sederhana EUR 1,32 juta (ETR sederhana 16,5%); nilai pengecualian berbasis substansi EUR 5 juta. Grup selama 2024–2025 selalu lolos safe harbour transisi untuk Indonesia. Berdasarkan safe harbour transisi CbCR yang diadopsi PMK 136/2024, kesimpulan yang tepat untuk tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak lolos, karena ambang ETR 2026 adalah 17% dan uji de minimis serta uji laba rutin juga gagal", B: "Lolos uji ETR sederhana karena ETR 16,5% tidak kurang dari ambang 16% yang berlaku untuk 2026", C: "Lolos uji ETR sederhana karena ETR 16,5% melebihi tarif minimum 15% yang berlaku sejak 2025", D: "Lolos uji laba rutin karena laba sebelum pajak tidak melebihi 15% dari pendapatan yurisdiksi" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Ambang ETR sederhana safe harbour transisi CbCR naik bertahap: 15% untuk tahun pajak yang dimulai 2024, 16% untuk 2025, dan 17% untuk tahun pajak yang dimulai 2026 sampai tahun pajak yang berakhir 30 Juni 2028. ETR 16,5% gagal untuk 2026; de minimis gagal (pendapatan tidak kurang dari EUR 10 juta) dan uji laba rutin gagal (laba EUR 8 juta melebihi SBIE EUR 5 juta). Akibatnya, safe harbour transisi tidak berlaku untuk Indonesia pada 2026 dan top-up dihitung menurut ketentuan GloBE (permanent safe harbour masih dapat diuji).",
        jejakHitung: [
          ["ETR sederhana = 1,32 ÷ 8", "16,5% < 17%"],
          ["De minimis: pendapatan EUR 60 juta", "≥ EUR 10 juta → gagal"],
          ["Laba rutin: EUR 8 juta vs SBIE EUR 5 juta", "laba > SBIE → gagal"]
        ],
        mengapaSalah: {
          B: "Ambang 16% hanya untuk tahun pajak yang dimulai 2025.",
          C: "15% adalah ambang tahun pajak yang dimulai 2024 (dan sama dengan Tarif Minimum), bukan ambang safe harbour 2026.",
          D: "Uji laba rutin membandingkan laba sebelum pajak dengan SBIE, bukan dengan persentase pendapatan."
        },
        jebakan: "Ambang safe harbour bergantung pada tahun pajak dimulainya; baca tahunnya. Gagal di satu tahun membuat safe harbour transisi tidak dapat dipakai lagi untuk tahun berikutnya dalam masa transisi (Pasal 56 ayat (12))."
      },
      dasarHukum: [{ pasal: "Pasal 56 ayat (3) sampai ayat (6) dan ayat (11) PMK 136/2024 (safe harbour CbCR pada periode tertentu)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-103",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-09",
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 5 ayat (3) UU PPh (parafrase): Dalam menentukan penghasilan bentuk usaha tetap tidak boleh dikurangkan pembayaran kepada kantor pusat berupa royalti atau imbalan lain sehubungan dengan penggunaan harta, paten, atau hak lainnya; imbalan sehubungan dengan jasa manajemen dan jasa lainnya; serta bunga, kecuali bunga yang berkenaan dengan usaha perbankan.",
      stem: "Data untuk soal ini dan dua soal berikutnya: Fjellstad Subsea AS berkedudukan di Negara Nordvik (mitra P3B; pasal laba usaha P3B memuat klausul force of attraction terbatas atas penjualan barang sejenis; P3B membatasi pajak atas laba cabang 10%; Form DGT kantor pusat sah) dan menjalankan jasa inspeksi bawah laut serta penjualan peralatan ROV melalui BUT di Batam (bukan bank; pembukuan Rupiah; 84 pegawai). Tahun pajak 2025: peredaran usaha BUT Rp96.000.000.000, sedangkan peredaran usaha seluruh perusahaan setara Rp1.200.000.000.000; laba komersial BUT Rp8.950.000.000. Beban yang sudah dikurangkan: royalti perangkat lunak inspeksi kepada kantor pusat Rp1.100.000.000; imbalan jasa manajemen kepada kantor pusat Rp750.000.000; bunga pinjaman dari kantor pusat Rp420.000.000; bunga pinjaman bank lokal Rp380.000.000; dan alokasi biaya administrasi umum kantor pusat Rp3.300.000.000, padahal seluruh biaya administrasi umum kantor pusat setara Rp30.000.000.000 dan dasar alokasi yang taat asas adalah perbandingan peredaran usaha yang dibukukan BUT dengan peredaran usaha seluruh perusahaan. Pendapatan yang sudah dicatat: imbalan jasa teknik dari kantor pusat atas dukungan proyek kantor pusat di negara lain Rp500.000.000. Di luar pembukuan BUT, kantor pusat menjual langsung peralatan ROV sejenis kepada pembeli di Indonesia Rp4.000.000.000 dengan harga pokok Rp3.150.000.000. Kurs tengah BI 31 Desember 2025 Rp16.780/USD. Berdasarkan kutipan tersebut dan ketentuan Pasal 5 lainnya, penghasilan neto fiskal BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp11.570.000.000", B: "Rp12.970.000.000", C: "Rp12.050.000.000", D: "Rp12.470.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Royalti, jasa manajemen, dan bunga kepada kantor pusat (BUT bukan bank) dikoreksi positif. Biaya administrasi kantor pusat hanya boleh sebesar bagian proporsional 96/1.200 × Rp30.000.000.000 = Rp2.400.000.000, sehingga kelebihan Rp900.000.000 dikoreksi. Imbalan yang diterima dari kantor pusat bukan objek sehingga dikeluarkan, sedangkan laba penjualan langsung barang sejenis ditarik sebagai force of attraction karena P3B memuat klausul itu.",
        jejakHitung: [
          ["Laba komersial BUT", "Rp8.950.000.000"],
          ["+ royalti, jasa manajemen, bunga ke kantor pusat (1.100 + 750 + 420 juta)", "Rp2.270.000.000"],
          ["Biaya administrasi wajar = 96/1.200 × Rp30.000.000.000", "Rp2.400.000.000"],
          ["+ kelebihan alokasi = 3.300 − 2.400 juta", "Rp900.000.000"],
          ["− imbalan jasa dari kantor pusat (bukan objek)", "Rp500.000.000"],
          ["+ force of attraction = 4.000 − 3.150 juta", "Rp850.000.000"],
          ["Penghasilan neto fiskal", "Rp12.470.000.000"]
        ],
        mengapaSalah: {
          A: "Menerima seluruh alokasi biaya administrasi Rp3.300.000.000 tanpa menguji bagian proporsionalnya, sehingga kelebihan Rp900.000.000 tidak dikoreksi.",
          B: "Memperlakukan imbalan jasa dari kantor pusat Rp500.000.000 sebagai penghasilan BUT; transaksi internal BUT dengan kantor pusatnya bukan objek.",
          C: "Membiarkan bunga kepada kantor pusat Rp420.000.000 sebagai biaya; pengecualian hanya untuk usaha perbankan, sedangkan BUT ini bukan bank."
        },
        jebakan: "Kurs akhir tahun, jumlah pegawai, dan bunga bank lokal hanya pengalih; uji tiap pos dengan Pasal 5 ayat (1)–(3) dan alokasi proporsional biaya kantor pusat."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b, ayat (2), dan ayat (3) huruf a, b, c UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 2 KEP-62/PJ./1995 (biaya administrasi kantor pusat sebanding peredaran usaha)", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-104",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-09",
      formulirRef: "1771.6A.1",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Fjellstad Subsea AS (BUT di Batam; kantor pusat di Negara Nordvik, mitra P3B yang membatasi pajak atas laba cabang 10%; Form DGT sah; penghasilan neto fiskal 2025 Rp12.470.000.000). BUT masih mempunyai sisa kerugian fiskal tahun 2023 Rp470.000.000 dan telah membayar PPh Pasal 25 tahun 2025 Rp1.200.000.000. Atas laba setelah pajak 2025, BUT melakukan: (a) Agustus 2026 membeli kapal pendukung ROV Rp6.360.000.000 yang dicatat sebagai aktiva tetap dan digunakan BUT; (b) Oktober 2026 membeli obligasi negara Rp1.000.000.000; (c) Desember 2026 menyetor modal Rp1.500.000.000 sebagai pendiri PT Riau Subsea Services yang baru didirikan di Indonesia dan sejak didirikan langsung aktif menjalankan kegiatan usaha sesuai akta pendiriannya; (d) Januari 2027 membeli lisensi perangkat lunak yang digunakan BUT Rp500.000.000. Pemberitahuan penanaman kembali dilampirkan pada SPT Tahunan 2025 dan tidak ada investasi yang dialihkan. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Nihil", B: "Rp150.000.000", C: "Rp936.000.000", D: "Rp1.200.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengecualian BPT hanya diberikan bila seluruh PKP sesudah PPh ditanamkan kembali dalam bentuk dan waktu yang memenuhi PMK 14/PMK.03/2011. Keempat rencana berjumlah Rp9.360.000.000, tetapi obligasi negara bukan bentuk penanaman kembali dan lisensi dibeli Januari 2027, melewati akhir tahun pajak berikutnya (31 Desember 2026). Yang memenuhi hanya kapal (aktiva tetap BUT) dan penyertaan sebagai pendiri pada perusahaan baru yang sudah aktif berusaha sesuai aktanya (Pasal 2 ayat (2) huruf a), seluruhnya Rp7.860.000.000, sehingga tidak seluruh laba ditanamkan kembali dan BPT dikenakan atas seluruh PKP sesudah PPh. Tarif P3B 10% berlaku karena Form DGT sah.",
        jejakHitung: [
          ["PKP = 12.470.000.000 − 470.000.000", "Rp12.000.000.000"],
          ["PPh badan 22%", "Rp2.640.000.000"],
          ["PKP sesudah PPh", "Rp9.360.000.000"],
          ["Penanaman kembali yang memenuhi syarat (a) + (c)", "Rp7.860.000.000 (tidak seluruhnya)"],
          ["Dasar BPT", "Rp9.360.000.000"],
          ["BPT = 10% × Rp9.360.000.000", "Rp936.000.000"]
        ],
        mengapaSalah: {
          A: "Menganggap obligasi negara dan lisensi Januari 2027 ikut memenuhi syarat sehingga seluruh laba seolah ditanamkan kembali; obligasi bukan bentuk penanaman kembali dan lisensi melewati akhir tahun pajak berikutnya.",
          B: "Mengurangkan penanaman kembali yang memenuhi syarat Rp7.860.000.000 dari dasar BPT (10% × Rp1.500.000.000); Pasal 1 ayat (3) PMK 14/PMK.03/2011 hanya membebaskan bila seluruh PKP sesudah PPh ditanamkan kembali.",
          D: "Tidak mengurangkan PPh badan: 10% × PKP Rp12.000.000.000."
        },
        jebakan: "Penanaman kembali sebagian tidak mengurangi dasar BPT. PPh Pasal 25 yang dibayar juga hanya pengalih; dasar BPT memakai PPh terutang, bukan PPh yang sudah dibayar."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) dan ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3), Pasal 2, dan Pasal 5 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-105",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-09",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Fjellstad Subsea AS (BUT di Batam; PKP 2025 Rp12.000.000.000; PPh badan terutang Rp2.640.000.000; PPh Pasal 25 yang dibayar Rp1.200.000.000). Jasa inspeksi kepada PT Lautan Energi ditagih dalam USD dan dibayar pada tanggal faktur: faktur 17 Maret 2025 USD 1.500.000 (kurs KMK yang berlaku Rp16.320; kurs tengah BI Rp16.390) dan faktur 22 September 2025 USD 2.000.000 (kurs KMK Rp16.410; kurs tengah BI Rp16.350). PT Lautan Energi memotong PPh Pasal 23 sebesar 2% dan menerbitkan bukti potong. BUT membukukan pendapatan dengan kurs tengah BI, dan laba selisih kurs Rp185.000.000 (sudah termasuk dalam laba komersial) diakui secara taat asas. Pelanggan lain yang membayar dalam Rupiah memotong PPh Pasal 23 Rp54.000.000. Kurs tengah BI 31 Desember 2025 Rp16.780. PPh Pasal 29 BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp211.400.000", B: "Rp294.000.000", C: "Rp240.000.000", D: "Rp240.300.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Kredit PPh Pasal 23 adalah jumlah dalam bukti potong. Pemotong mengonversi DPP valuta asing dengan kurs KMK yang berlaku pada saat terutang, bukan kurs tengah BI yang dipakai BUT untuk membukukan pendapatan.",
        jejakHitung: [
          ["PPh 23 faktur Maret = 2% × USD 1.500.000 × Rp16.320", "Rp489.600.000"],
          ["PPh 23 faktur September = 2% × USD 2.000.000 × Rp16.410", "Rp656.400.000"],
          ["+ PPh 23 dari pelanggan Rupiah", "Rp54.000.000"],
          ["Total kredit PPh 23", "Rp1.200.000.000"],
          ["PPh 29 = 2.640.000.000 − 1.200.000.000 − 1.200.000.000", "Rp240.000.000"]
        ],
        mengapaSalah: {
          A: "Menghitung kredit PPh 23 dengan kurs tengah BI akhir tahun (2% × USD 3.500.000 × Rp16.780 + Rp54.000.000 = Rp1.228.600.000); kurs neraca hanya untuk penjabaran pos moneter.",
          B: "Lupa mengkreditkan PPh Pasal 23 dari pelanggan yang membayar dalam Rupiah Rp54.000.000 (kredit PPh 23 hanya Rp1.146.000.000).",
          D: "Menghitung ulang kredit dengan kurs tengah BI tanggal faktur (Rp1.199.700.000), padahal bukti potong memakai kurs KMK."
        },
        jebakan: "Laba selisih kurs Rp185.000.000 tidak dikoreksi karena diakui taat asas dan tidak mengubah kredit pajak; angka kredit selalu mengikuti bukti potong."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan yang taat asas)" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-106",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 2 ayat (5) UU PPh (parafrase): Bentuk usaha tetap antara lain dapat berupa tempat kedudukan manajemen, cabang, kantor perwakilan, gedung kantor, pabrik, bengkel, gudang, ruang promosi dan penjualan, proyek konstruksi, instalasi, atau proyek perakitan, serta pemberian jasa dalam bentuk apa pun oleh pegawai atau orang lain sepanjang dilakukan lebih dari 60 hari dalam jangka waktu 12 bulan.",
      stem: "Valdora Instruments GmbH berkedudukan di Negara Valdora, mitra P3B Indonesia. Pasal BUT dalam P3B mengatur: proyek instalasi menjadi BUT hanya bila berlangsung lebih dari 6 bulan; fasilitas yang semata-mata dipakai untuk menyimpan barang milik perusahaan bukan BUT; pemberian jasa menjadi BUT bila lebih dari 90 hari dalam 12 bulan. Valdora tidak pernah menyerahkan Form DGT, sehingga selama 2025–2026 tidak ada SKD yang sah. Kegiatan Valdora di Indonesia: (1) sejak Januari 2025 menyewa gudang di Cikarang yang semata-mata dipakai untuk menyimpan suku cadang miliknya; (2) proyek instalasi sistem kendali di pabrik pelanggan selama 4 bulan (Maret–Juni 2025); (3) jasa kalibrasi oleh tiga teknisi: A selama 25 hari (November–Desember 2025), B selama 30 hari (Januari–Februari 2026), dan C selama 20 hari (Maret 2026). Berdasarkan kutipan tersebut, pernyataan yang paling tepat mengenai BUT Valdora adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Ketiga kegiatan tidak menimbulkan BUT karena masing-masing memenuhi pengecualian atau belum melewati batas waktu dalam P3B Indonesia–Valdora", B: "Hanya proyek instalasi yang menimbulkan BUT karena UU PPh tidak memberi batas waktu proyek, sedangkan gudang penyimpanan selalu dikecualikan dari BUT", C: "Gudang dan proyek instalasi menimbulkan BUT, tetapi jasa kalibrasi tidak karena tidak ada teknisi yang melewati 60 hari dalam satu tahun kalender", D: "Ketiganya menimbulkan BUT menurut Pasal 2 ayat (5) UU PPh, termasuk jasa kalibrasi 75 hari dalam 12 bulan, karena P3B tidak dapat diterapkan tanpa SKD yang sah" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Tanpa SKD yang sah, ketentuan BUT dalam P3B tidak dapat diterapkan sehingga BUT diuji dengan Pasal 2 ayat (5) UU PPh: gudang disebut tegas sebagai bentuk BUT, proyek instalasi tidak mengenal batas waktu, dan pemberian jasa oleh seluruh personel dinilai bersama. Menurut Pasal 8 ayat (3) PMK 35/PMK.03/2019 periode waktu dimulai saat pemberian jasa mulai dilakukan dan berakhir saat selesai dilakukan (November 2025 sampai Maret 2026); periode itu, dan juga jumlah hari kerja ketiga teknisi (75 hari), melebihi 60 hari dalam jangka waktu 12 bulan.",
        jejakHitung: [
          ["Hari jasa kalibrasi (seluruh teknisi digabung)", "25 + 30 + 20 = 75 hari"],
          ["Periode pemberian jasa (Pasal 8 ayat (3) PMK 35/PMK.03/2019)", "November 2025 sampai Maret 2026"],
          ["Uji Pasal 2 ayat (5) UU PPh", "lebih dari 60 hari dalam 12 bulan → BUT"]
        ],
        mengapaSalah: {
          A: "Pengecualian gudang dan batas waktu proyek maupun jasa dalam P3B hanya dapat dipakai bila SKD sah.",
          B: "Gudang disebut tegas sebagai BUT dalam Pasal 2 ayat (5) UU PPh; pengecualian fasilitas penyimpanan hanya ada di P3B.",
          C: "Hari dihitung untuk seluruh personel dalam jangka waktu 12 bulan bergulir, bukan per orang atau per tahun kalender."
        },
        jebakan: "Baca status SKD lebih dulu: tanpa SKD, kelonggaran P3B gugur dan yang berlaku daftar Pasal 2 ayat (5) UU PPh."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh (P3B)" }, { pasal: "Pasal 2 ayat (3) huruf b dan ayat (4) PMK 112/2025 (penerapan P3B, Formulir DGT)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 4 ayat (2), Pasal 5 ayat (1), Pasal 6 ayat (1), Pasal 7 ayat (4), dan Pasal 8 ayat (1) dan ayat (3) PMK 35/PMK.03/2019 (penentuan BUT)", berlakuSejak: "2019-04-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-107", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 2, formulirRef: "1771.6A.1", laporanUjian: ["C-2026-10"],
      stem: "BUT Semenda Rubber Trading di Medan adalah cabang perusahaan perdagangan karet dari Negara Semenda (mitra P3B yang membatasi pajak atas laba cabang 12,5%; Form DGT sah). Tahun pajak 2025: peredaran bruto BUT Rp28.000.000.000; PKP setelah kompensasi kerugian Rp3.200.000.000; kredit PPh Pasal 22 Rp150.000.000 dan PPh Pasal 25 Rp420.000.000; 26 pegawai; kurs tengah BI 31 Desember 2025 Rp16.780/USD. Staf BUT mengusulkan fasilitas Pasal 31E karena peredaran bruto di bawah Rp50 miliar. Seluruh laba setelah pajak dikirim ke kantor pusat pada 2026 dan tidak ada penanaman kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp312.000.000", B: "Rp319.542.857", C: "Rp400.000.000", D: "Rp499.200.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "BUT adalah subjek pajak luar negeri sehingga tidak berhak Pasal 31E yang khusus untuk WP badan dalam negeri; PPh badan dihitung 22% penuh, lalu BPT memakai tarif P3B 12,5% atas laba setelah pajak.",
        jejakHitung: [["PPh badan = 22% × Rp3.200.000.000", "Rp704.000.000"], ["Laba setelah pajak", "Rp2.496.000.000"], ["BPT = 12,5% × Rp2.496.000.000", "Rp312.000.000"]],
        mengapaSalah: {
          B: "Memakai Pasal 31E (PPh badan Rp643.657.143) padahal BUT bukan WP badan dalam negeri.",
          C: "Mengenakan 12,5% atas PKP sebelum dikurangi PPh badan.",
          D: "Memakai tarif domestik 20% padahal Form DGT sah dan P3B membatasi 12,5%."
        },
        jebakan: "Peredaran di bawah Rp50 miliar memancing Pasal 31E; untuk BUT, uji status subjek pajaknya lebih dulu."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b dan Pasal 31E UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-108",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Kalvik Systems Oy berkedudukan di Negara Suomira (mitra P3B; pasal laba usaha P3B tidak memuat klausul force of attraction; Form DGT sah) dan mempunyai BUT di Jakarta yang menjual serta memelihara sistem otomasi pelabuhan. Pada 2025: (1) kantor pusat menjual langsung dari Suomira sistem otomasi sejenis kepada PT Dermaga Prima Rp6.000.000.000 tanpa keterlibatan BUT; (2) PT Pelabuhan Timur membayar royalti Rp900.000.000 langsung kepada kantor pusat atas lisensi perangkat lunak yang dipasang, dikonfigurasi, dan dipelihara BUT berdasarkan kontrak yang ditandatangani BUT; (3) BUT membayar bunga Rp300.000.000 kepada kantor pusat atas pinjaman modal kerja; (4) BUT menerima imbalan Rp250.000.000 dari kantor pusat atas dukungan teknis proyek kantor pusat di negara lain. Pernyataan yang paling tepat mengenai penghasilan neto BUT tahun 2025 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Penjualan langsung Rp6.000.000.000 ditarik ke BUT sebagai force of attraction, sedangkan royalti Rp900.000.000 cukup dikenai PPh Pasal 26 di tingkat kantor pusat", B: "Royalti Rp900.000.000 digabung sebagai penghasilan BUT karena berhubungan efektif, sedangkan penjualan langsung kantor pusat tidak ditarik karena P3B tidak memuat force of attraction", C: "Bunga Rp300.000.000 boleh dibiayakan karena pinjaman dipakai untuk modal kerja BUT, dan imbalan Rp250.000.000 dari kantor pusat merupakan penghasilan BUT", D: "Royalti dan penjualan langsung sama-sama ditarik ke BUT karena Pasal 5 ayat (1) UU PPh selalu didahulukan daripada pasal laba usaha P3B, walaupun SKD sah" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 5 ayat (1) huruf c menarik penghasilan Pasal 26 kantor pusat yang berhubungan efektif dengan harta atau kegiatan BUT, seperti royalti atas lisensi yang dipasang dan dipelihara BUT berdasarkan kontrak BUT. Force of attraction (huruf b) hanya dapat diterapkan bila pasal laba usaha P3B memuatnya; di sini tidak, sehingga penjualan langsung kantor pusat tidak ditarik. Bunga kepada kantor pusat (bukan bank) tidak boleh dibiayakan, dan imbalan dari kantor pusat bukan objek.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Terbalik: penjualan langsung tidak dapat ditarik tanpa klausul force of attraction dalam P3B, sedangkan royalti yang berhubungan efektif masuk penghasilan BUT.",
          C: "Pasal 5 ayat (3) melarang pembebanan bunga kepada kantor pusat kecuali usaha perbankan; imbalan dari kantor pusat bukan objek.",
          D: "Dengan SKD sah, ketentuan P3B membatasi penerapan force of attraction (Pasal 32A UU PPh)."
        },
        jebakan: "Bedakan dua jalur: force of attraction bergantung pada P3B, sedangkan hubungan efektif melekat pada harta atau kegiatan BUT."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b dan c, ayat (3) huruf b dan c UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 32A UU PPh (P3B)" }, { pasal: "Pasal 2 ayat (2) sampai ayat (4) PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-109",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      formulirRef: "1771.7A.1",
      laporanUjian: ["C-2026-10"],
      stem: "PT Arka Pangan Nusantara (WP badan dalam negeri; peredaran bruto 2025 Rp240 miliar; pembukuan Rupiah dengan kurs tengah BI) mempunyai penghasilan neto dalam negeri 2025 Rp7.800.000.000 dan sisa kerugian fiskal dalam negeri tahun 2022 Rp1.300.000.000. Penghasilan luar negeri: (1) dividen USD 250.000 dari Qadira Foods Ltd (Negara Qadira, tanpa P3B; saham tidak diperdagangkan di bursa; kepemilikan 40%; dividen tidak diinvestasikan di Indonesia) yang dipotong pajak Qadira 25% dan diterima Selasa 12 Agustus 2025 (kurs tengah BI Rp16.180; kurs KMK 6–12 Agustus Rp16.240); (2) bunga USD 100.000 dari Lorvia Trading Co. (Negara Lorvia; P3B membatasi bunga 10%) yang dipotong pajak Lorvia 10% pada Senin 10 November 2025 (kurs tengah BI Rp16.700; kurs KMK 5–11 November Rp16.640). Kurs tengah BI 31 Desember 2025 Rp16.780. Kebijakan konversi yang dipakai: penghasilan luar negeri masuk PKP sebesar nilai pembukuan (kurs tengah BI tanggal transaksi), sedangkan pajak luar negeri dikonversi dengan kurs KMK yang berlaku pada tanggal pajak itu dipotong. Kredit PPh Pasal 24 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.056.900.000", B: "Rp1.181.400.000", C: "Rp1.059.600.000", D: "Rp1.056.300.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PKP = Rp7.800.000.000 − Rp1.300.000.000 + Rp4.045.000.000 + Rp1.670.000.000 = Rp12.215.000.000, sehingga PPh terutang Rp2.687.300.000. Batas dihitung per jenis penghasilan untuk tiap negara (dividen Qadira, bunga Lorvia): pajak Qadira Rp1.015.000.000 melebihi batas Rp889.900.000, sehingga kredit sebatas batas; pajak Lorvia Rp166.400.000 di bawah batas Rp367.400.000, sehingga dikreditkan penuh.",
        jejakHitung: [
          ["Dividen Qadira = USD 250.000 × Rp16.180", "Rp4.045.000.000"],
          ["Bunga Lorvia = USD 100.000 × Rp16.700", "Rp1.670.000.000"],
          ["PKP = 7.800 − 1.300 + 4.045 + 1.670 juta", "Rp12.215.000.000"],
          ["PPh terutang 22%", "Rp2.687.300.000"],
          ["Qadira: pajak USD 62.500 × Rp16.240 = Rp1.015.000.000; batas 4.045/12.215 × PPh terutang", "kredit Rp889.900.000"],
          ["Lorvia: pajak USD 10.000 × Rp16.640 = Rp166.400.000; batas Rp367.400.000", "kredit Rp166.400.000"],
          ["Total kredit PPh Pasal 24", "Rp1.056.300.000"]
        ],
        mengapaSalah: {
          A: "Mengonversi pajak Lorvia dengan kurs tengah BI (USD 10.000 × Rp16.700 = Rp167.000.000), bertentangan dengan kebijakan konversi pajak luar negeri.",
          B: "Memakai batas gabungan semua negara (overall limitation), sehingga seluruh pajak Rp1.181.400.000 tampak dapat dikreditkan; batas dihitung per jenis penghasilan untuk tiap negara.",
          C: "Memasukkan penghasilan luar negeri dengan kurs KMK (dividen Rp4.060.000.000), sehingga PKP dan batas Qadira ikut bergeser menjadi Rp893.200.000."
        },
        jebakan: "Satu soal, tiga kurs: penghasilan mengikuti pembukuan, pajak luar negeri mengikuti kurs KMK tanggal pemotongan, dan kurs akhir tahun tidak dipakai."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4), Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018 (kredit pajak luar negeri)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 6 ayat (2) UU PPh (kompensasi kerugian)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-110", topik: "C9.5", tingkat: ["C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Kirana Global (PMA; pembukuan Rupiah; pos moneter valuta asing dijabarkan dengan kurs tengah BI pada tanggal neraca sesuai SAK dan diterapkan taat asas) pada 2026 mencatat: (1) royalti USD 80.000 kepada Lumen Ltd (Negara Sarvia; P3B membatasi royalti 10%; Form DGT sah) yang terutang dan dibebankan pada Selasa, 30 Juni 2026; (2) utang usaha USD 200.000 kepada pemasok luar negeri yang belum dilunasi sampai 31 Desember 2026; (3) bunga USD 50.000 dari anak usaha di Negara Sarvia setelah dipotong pajak Sarvia 10%. Kurs: KMK berlaku Rabu 24 Juni–Selasa 30 Juni 2026 Rp16.420; kurs tengah BI 30 Juni 2026 Rp16.385; kurs tengah BI 31 Desember 2026 Rp16.600. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "PPh Pasal 26 atas royalti dihitung dengan kurs tengah BI 30 Juni 2026 agar sama dengan pembukuan, yaitu Rp131.080.000, sehingga tidak ada selisih kurs",
        B: "Rugi selisih kurs yang belum terealisasi atas utang usaha USD 200.000 pada 31 Desember 2026 baru boleh dibiayakan saat utang dilunasi",
        C: "PPh Pasal 26 atas royalti Rp131.360.000 memakai kurs KMK, beban royalti memakai kurs tengah BI, dan selisih Rp280.000 dicatat sebagai rugi selisih kurs",
        D: "Utang usaha USD 200.000 dijabarkan pada 31 Desember 2026 dengan kurs KMK minggu itu agar sama dengan kurs dasar pembayaran pajak"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kurs KMK (kurs pajak mingguan) dipakai untuk menghitung pajak atas transaksi valuta asing, sedangkan kurs tengah BI dipakai pembukuan. Utang PPh 26 (USD 8.000 × Rp16.420) lebih besar daripada bagian beban yang dibukukan dengan kurs tengah BI (USD 8.000 × Rp16.385), sehingga timbul rugi selisih kurs Rp280.000. Selisih kurs penjabaran akhir tahun diakui fiskal karena pembukuan taat asas sesuai SAK (PP 94/2010 Pasal 9).",
        jejakHitung: [["PPh 26 = 10% × USD 80.000 × Rp16.420 (kurs KMK 24–30 Juni)", "Rp131.360.000"], ["Beban royalti = USD 80.000 × Rp16.385", "Rp1.310.800.000"], ["Utang royalti neto = USD 72.000 × Rp16.385", "Rp1.179.720.000"], ["Rugi selisih kurs = 131.360.000 + 1.179.720.000 − 1.310.800.000", "Rp280.000"]],
        mengapaSalah: {
          A: "DPP pemotongan dalam valuta asing dikonversi dengan kurs KMK, bukan kurs tengah BI.",
          B: "PP 94/2010 Pasal 9 mengikuti pembukuan yang taat asas sesuai SAK; selisih penjabaran akhir tahun diakui pada tahun terjadinya.",
          D: "Kurs KMK tidak dipakai untuk penjabaran pembukuan; pos moneter dijabarkan dengan kurs tengah BI tanggal neraca."
        },
        jebakan: "Dua kurs berjalan berdampingan: kurs KMK untuk angka pajak, kurs tengah BI untuk angka pembukuan; selisihnya masuk akun selisih kurs, bukan koreksi PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PP 94/2010 Pasal 9; Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh (selisih kurs)" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "C9-111", topik: "C9.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Harsa Kimia (PMA; pembukuan Rupiah) membayar bunga pinjaman USD 150.000 kepada Brevia Capital Bank (Negara Brevia; P3B membatasi bunga 10%; Form DGT sah telah terekam di Coretax sebelum pembayaran; pemilik manfaat; tidak mempunyai BUT di Indonesia). Bunga jatuh tempo dan dibayar pada Selasa, 30 Juni 2026. Data kurs: KMK berlaku 24–30 Juni 2026 Rp16.455/USD; KMK berlaku 8–14 Juli 2026 Rp16.510 (minggu rencana penyetoran PPh, Jumat 10 Juli 2026); kurs tengah BI 30 Juni 2026 Rp16.430; kurs jual bank saat transfer Rp16.520. Langkah administrasi yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat BPNR dengan PPh Pasal 26 Rp246.825.000 (kurs KMK 24–30 Juni), menyetor paling lambat 15 Juli 2026, dan melapor SPT Masa PPh Unifikasi paling lambat 20 Juli 2026",
        B: "Membuat BPNR dengan PPh Pasal 26 Rp246.450.000 (kurs tengah BI 30 Juni), menyetor paling lambat 15 Juli 2026, dan melapor SPT Masa PPh Unifikasi paling lambat 20 Juli 2026",
        C: "Membuat BPPU dengan PPh Pasal 26 Rp247.800.000 (kurs jual bank), menyetor paling lambat 10 Juli 2026, dan melapor SPT Masa PPh Unifikasi paling lambat 20 Juli 2026",
        D: "Membuat BPNR dengan PPh Pasal 26 Rp247.650.000 (kurs KMK minggu penyetoran), menyetor paling lambat 15 Juli 2026, dan melapor SPT Masa PPh Unifikasi paling lambat 20 Juli 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang saat bunga dibayar atau jatuh tempo (30 Juni 2026, sekaligus akhir Masa Juni), sehingga DPP dikonversi dengan kurs KMK yang berlaku pada tanggal itu (24–30 Juni: Rp16.455), bukan kurs pada minggu penyetoran. Penerima luar negeri dibuatkan BPNR; PPh Masa Juni disetor paling lambat 15 Juli dan dilaporkan paling lambat 20 Juli 2026.",
        jejakHitung: [["PPh 26 = 10% × USD 150.000 × Rp16.455", "Rp246.825.000"], ["Batas setor Masa Juni 2026", "Rabu, 15 Juli 2026"], ["Batas lapor SPT Masa PPh Unifikasi", "Senin, 20 Juli 2026"]],
        mengapaSalah: {
          B: "Kurs tengah BI dipakai untuk pembukuan, bukan untuk DPP pemotongan.",
          C: "Kurs jual bank tidak dipakai; BPPU untuk penerima dalam negeri; tanggal 10 adalah batas setor lama sebelum PMK 81/2024.",
          D: "Kurs dikunci pada saat terutang, bukan pada minggu pajak disetor."
        },
        jebakan: "Menunda penyetoran tidak mengubah jumlah PPh dalam Rupiah; kurs mengikuti saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PMK 81/2024 Pasal 94 (batas setor tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPNR, SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-112",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Cakrawala Baterai Indonesia adalah satu-satunya entitas konstituen Grup Volta di Indonesia (entitas induk utama di Negara Ardenia; pendapatan konsolidasi EUR 2,4 miliar setiap tahun sejak 2021). Data tahun pajak 2026: laba GloBE Rp500.000.000.000; pajak tercakup yang disesuaikan Rp30.000.000.000 (setelah fasilitas tax allowance); PPN yang disetor Rp45.000.000.000; PBB-P2 Rp2.000.000.000; PPh Pasal 21 yang dipotong dari pegawai Rp12.000.000.000; biaya gaji pegawai yang memenuhi syarat Rp80.000.000.000; nilai tercatat aset berwujud yang memenuhi syarat Rp900.000.000.000; kurs rata-rata EUR 1 = Rp18.200. Persentase transisi SBIE: tahun 2025 gaji 9,6% dan aset 7,6%; tahun 2026 gaji 9,4% dan aset 7,4%. Tidak ada penyesuaian lain dan safe harbour tidak dapat dipakai. Pajak minimum domestik tambahan (DMTT) tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp38.152.800.000", B: "Rp36.853.200.000", C: "Rp40.590.000.000", D: "Rp38.329.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "ETR = 30 ÷ 500 = 6% (PPN, PBB, dan PPh 21 pegawai bukan pajak tercakup), sehingga persentase top-up 9%. SBIE 2026 = 9,4% × Rp80 miliar + 7,4% × Rp900 miliar = Rp74,12 miliar; laba lebih Rp425,88 miliar; DMTT = 9% × laba lebih.",
        jejakHitung: [
          ["ETR = 30 ÷ 500 miliar", "6%"],
          ["Persentase top-up = 15% − 6%", "9%"],
          ["SBIE gaji = 9,4% × Rp80.000.000.000", "Rp7.520.000.000"],
          ["SBIE aset = 7,4% × Rp900.000.000.000", "Rp66.600.000.000"],
          ["Laba lebih = 500.000.000.000 − 74.120.000.000", "Rp425.880.000.000"],
          ["DMTT = 9% × Rp425.880.000.000", "Rp38.329.200.000"]
        ],
        mengapaSalah: {
          A: "Memakai persentase SBIE tahun 2025 (9,6% dan 7,6%) untuk tahun pajak 2026.",
          B: "Menukar persentase: 7,4% untuk gaji dan 9,4% untuk aset.",
          C: "Memakai persentase permanen 5% untuk gaji dan aset yang baru berlaku setelah masa transisi."
        },
        jebakan: "PPN, PBB, PPh 21, dan kurs EUR hanya pengalih; yang menentukan adalah tahun SBIE dan pasangan persentase gaji–aset."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (6), Pasal 7 ayat (7), dan Pasal 8 ayat (5) PMK 136/2024 (DMTT dan SBIE)", berlakuSejak: "2025-01-01" }, { pasal: "PER-6/PJ/2026 (aturan pelaksana)", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-113",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nusa Mineral Holding adalah entitas induk utama grup PMN di Indonesia (pendapatan konsolidasi EUR 1,9 miliar; laba konsolidasi Rp4,1 triliun) yang memiliki 75% saham Pelagos Mining Ltd, satu-satunya entitas konstituen grup di Negara Pelagia. Tahun pajak 2025 untuk yurisdiksi Pelagia: laba GloBE Rp400.000.000.000; pajak tercakup yang disesuaikan Rp24.000.000.000; SBIE Rp60.000.000.000. Pelagia menerapkan pajak minimum domestik yang memenuhi syarat (QDMTT), tetapi tidak memenuhi safe harbour QDMTT; QDMTT terutang Pelagos untuk 2025 Rp18.000.000.000. Pelagos membagikan dividen Rp50.000.000.000 kepada pemegang sahamnya pada 2025. Pajak tambahan berdasarkan IIR yang terutang oleh PT Nusa Mineral Holding untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.600.000.000", B: "Rp9.450.000.000", C: "Rp4.950.000.000", D: "Rp13.500.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Top-up yurisdiksi Pelagia = (15% − 6%) × (Rp400 miliar − Rp60 miliar) = Rp30,6 miliar, dikurangi QDMTT Rp18 miliar = Rp12,6 miliar. IIR memungut bagian entitas induk sesuai kepemilikan 75%.",
        jejakHitung: [
          ["ETR = 24 ÷ 400 miliar", "6%"],
          ["Persentase top-up = 15% − 6%", "9%"],
          ["Laba lebih = 400 − 60 miliar", "Rp340.000.000.000"],
          ["Top-up sebelum QDMTT = 9% × Rp340.000.000.000", "Rp30.600.000.000"],
          ["− QDMTT Pelagia", "Rp18.000.000.000"],
          ["Top-up setelah QDMTT", "Rp12.600.000.000"],
          ["IIR = 75% × Rp12.600.000.000", "Rp9.450.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak menerapkan porsi kepemilikan 75%.",
          C: "Mengalikan 75% lebih dulu lalu mengurangkan seluruh QDMTT (75% × Rp30,6 miliar − Rp18 miliar); QDMTT mengurangi top-up yurisdiksi sebelum dialokasikan ke induk.",
          D: "Lupa mengurangkan SBIE: 75% × (9% × Rp400 miliar − Rp18 miliar)."
        },
        jebakan: "Urutan: top-up yurisdiksi → kurangi QDMTT → kalikan porsi kepemilikan induk; dividen dan laba konsolidasi hanya pengalih."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) dan ayat (5), Pasal 14, dan Pasal 15 PMK 136/2024 (IIR, pengurangan QDMTT, rasio inklusi)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-114",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Halden (entitas induk utama Halden ASA di Negara Norvik; pendapatan konsolidasi EUR 3,2 miliar) mempunyai dua entitas konstituen di Indonesia pada tahun pajak 2025: PT Halden Kimia Indonesia (tax holiday 100%) dengan laba GloBE Rp180.000.000.000, pajak tercakup Rp0, dan SBIE Rp30.000.000.000; serta BUT Halden Engineering di Jakarta (cabang Halden Engineering AS, anggota grup di Norvik) dengan laba GloBE yang diatribusikan Rp70.000.000.000, PPh badan BUT Rp15.400.000.000 sebagai pajak tercakup, dan SBIE Rp10.000.000.000. Seluruh laba setelah pajak BUT ditanamkan kembali sehingga tidak ada PPh Pasal 26 ayat (4). ETR yurisdiksi Norvik 21%. Tidak ada penyesuaian lain dan tidak ada safe harbour. DMTT yurisdiksi Indonesia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp18.564.000.000", B: "Rp22.100.000.000", C: "Rp22.500.000.000", D: "Rp19.448.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "BUT adalah entitas konstituen tersendiri yang berlokasi di Indonesia, sehingga laba, pajak tercakup, dan SBIE-nya digabung dengan PT Halden Kimia Indonesia: ETR = 15,4 ÷ 250 = 6,16%, persentase top-up 8,84%, laba lebih Rp210 miliar.",
        jejakHitung: [
          ["Laba GloBE Indonesia = 180 + 70 miliar", "Rp250.000.000.000"],
          ["ETR = 15,4 ÷ 250", "6,16%"],
          ["Persentase top-up = 15% − 6,16%", "8,84%"],
          ["SBIE = 30 + 10 miliar", "Rp40.000.000.000"],
          ["Laba lebih = 250 − 40 miliar", "Rp210.000.000.000"],
          ["DMTT = 8,84% × Rp210.000.000.000", "Rp18.564.000.000"]
        ],
        mengapaSalah: {
          B: "Lupa mengurangkan SBIE (8,84% × Rp250 miliar).",
          C: "Mengeluarkan BUT dari yurisdiksi Indonesia atau menghitung per entitas, sehingga hanya PT: 15% × (Rp180 miliar − Rp30 miliar).",
          D: "Hanya mengurangkan SBIE PT (Rp30 miliar); SBIE BUT terlewat."
        },
        jebakan: "BUT ikut yurisdiksi tempat BUT berada, bukan yurisdiksi kantor pusatnya; ETR Norvik hanya pengalih."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1), Pasal 5 ayat (1), dan Pasal 6 ayat (6) PMK 136/2024 (BUT sebagai entitas konstituen, ETR per yurisdiksi, DMTT)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 2 ayat (5) UU PPh (BUT)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-115",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sinar Nikel Prima adalah satu-satunya entitas konstituen Grup Aurum di Indonesia (entitas induk utama di Negara Ardenia yang menerapkan IIR sejak 2024; pendapatan konsolidasi EUR 5 miliar) dan memperoleh tax holiday pengurangan PPh badan 100% untuk 2023–2032 berdasarkan PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024. Tahun pajak 2025: laba GloBE Rp600.000.000.000, pajak tercakup yang disesuaikan Rp6.000.000.000 (ETR 1%), SBIE Rp100.000.000.000, dan Indonesia menerapkan DMTT yang memenuhi syarat. Manajemen menilai dampak pajak minimum global terhadap fasilitasnya. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tax holiday tetap dinikmati penuh karena pengurangan PPh dari fasilitas penanaman modal dikeluarkan dari penghitungan ETR GloBE", B: "Pajak tambahan Rp70.000.000.000 dipungut Negara Ardenia melalui IIR karena IIR didahulukan daripada pajak minimum domestik", C: "PT Sinar Nikel Prima terutang DMTT Rp70.000.000.000 di Indonesia, dan DMTT itu mengurangi pajak tambahan IIR Ardenia atas yurisdiksi Indonesia", D: "DMTT baru dapat dikenakan mulai tahun pajak 2026 bersamaan dengan UTPR, sehingga untuk 2025 pajak tambahan hanya dipungut melalui IIR" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Fasilitas yang menurunkan pajak tercakup tetap masuk penghitungan ETR GloBE, sehingga ETR 1% memicu top-up 14% × (Rp600 miliar − Rp100 miliar) = Rp70 miliar. Dengan DMTT yang memenuhi syarat, pajak tambahan itu dipungut Indonesia lebih dulu dan mengurangi top-up IIR di Ardenia (urutan DMTT → IIR → UTPR).",
        jejakHitung: [
          ["Persentase top-up = 15% − 1%", "14%"],
          ["Laba lebih = 600 − 100 miliar", "Rp500.000.000.000"],
          ["DMTT = 14% × Rp500.000.000.000", "Rp70.000.000.000"]
        ],
        mengapaSalah: {
          A: "Pengurangan PPh dari tax holiday justru menurunkan pajak tercakup; GloBE tidak mengecualikannya.",
          B: "Urutan penerapan: DMTT lebih dulu, lalu IIR, lalu UTPR.",
          D: "DMTT dan IIR berlaku tahun pajak 2025; hanya UTPR yang mulai tahun pajak 2026."
        },
        jebakan: "Manfaat tax holiday bagi grup dalam cakupan tergerus sampai ETR 15%; pertanyaannya hanya siapa yang memungut, dan jawabannya Indonesia lewat DMTT."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) dan ayat (6), Pasal 73, dan Pasal 74 PMK 136/2024 (DMTT, IIR, UTPR)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 15A PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday dan pajak tambahan minimum domestik)", berlakuSejak: "2024-10-09" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-116",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arunika Holdings adalah entitas induk utama grup PMN di Indonesia dengan tahun buku 1 April–31 Maret. Pendapatan konsolidasi grup baru memenuhi ambang PMK 136/2024 sehingga tahun buku 1 April 2025–31 Maret 2026 adalah tahun pertama grup masuk cakupan pajak minimum global. SPT Tahunan PPh Badan untuk tahun buku itu jatuh tempo 31 Juli 2026, sedangkan Laporan per Negara (CbCR) disampaikan paling lambat 31 Maret 2027. Batas waktu penyampaian GloBE Information Return (GIR) oleh PT Arunika Holdings untuk tahun buku 1 April 2025–31 Maret 2026, dan untuk tahun buku berikutnya, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "31 Juli 2026, bersamaan dengan SPT Tahunan PPh Badan; tahun buku berikutnya 31 Juli 2027", B: "31 Maret 2027, bersamaan dengan CbCR; tahun buku berikutnya 31 Maret 2028", C: "30 Juni 2027 (15 bulan); tahun buku berikutnya juga 15 bulan, yaitu 30 Juni 2028", D: "30 September 2027 (18 bulan); tahun buku berikutnya 15 bulan, yaitu 30 Juni 2028" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Entitas induk utama yang merupakan subjek pajak dalam negeri wajib menyampaikan GIR paling lama 15 bulan setelah akhir Tahun Pengenaan GloBE, diperpanjang menjadi 18 bulan untuk Tahun Pengenaan GloBE pertama grup masuk cakupan. Tahun pajak mengikuti periode akuntansi laporan keuangan konsolidasi (1 April–31 Maret). Akhir tahun buku pertama 31 Maret 2026 + 18 bulan = 30 September 2027; tahun buku berikutnya berakhir 31 Maret 2027 + 15 bulan = 30 Juni 2028.",
        jejakHitung: [
          ["Akhir tahun buku pertama", "31 Maret 2026"],
          ["+ 18 bulan (tahun pertama)", "30 September 2027"],
          ["Akhir tahun buku berikutnya", "31 Maret 2027"],
          ["+ 15 bulan", "30 Juni 2028"]
        ],
        mengapaSalah: {
          A: "Tenggat SPT Tahunan PPh Badan (4 bulan setelah akhir tahun buku) tidak berlaku untuk GIR.",
          B: "Tenggat CbCR (12 bulan) berbeda dari tenggat GIR.",
          C: "Tahun pertama mendapat 18 bulan, bukan 15 bulan."
        },
        jebakan: "Hitung dari akhir tahun buku grup, bukan 31 Desember; tambahan 3 bulan hanya untuk tahun pertama. Jangan samakan GIR dengan SPT Tahunan PPh dalam rangka GloBE (GloBE, DMTT, UTPR): SPT itu dilaporkan untuk Tahun Pajak GloBE, yaitu tahun setelah Tahun Pengenaan GloBE, paling lama 4 bulan setelah akhir Tahun Pajak GloBE, dengan perpanjangan paling lama 2 bulan untuk tahun pertama."
      },
      dasarHukum: [{ pasal: "Pasal 65 ayat (3) dan Pasal 69 ayat (1) PMK 136/2024 (tenggat GIR)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 dan Pasal 13 ayat (1) dan ayat (2) PER-6/PJ/2026 (tenggat SPT dan GIR)", berlakuSejak: "2026-05-04" }, { pasal: "Pasal 23 ayat (4) PMK 172/2023 (CbCR)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "C9-117",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      formulirRef: "1771.7A.1",
      laporanUjian: ["C-2026-10"],
      stem: "PT Selaras Agro (WP badan dalam negeri; peredaran bruto 2025 Rp410 miliar; pembukuan Rupiah dengan kurs tengah BI) mempunyai penghasilan neto dalam negeri 2025 Rp6.000.000.000 (belum termasuk dividen luar negeri). Dividen luar negeri 2025: (1) dari Mekara Plantation Sdn (Negara Mekara; kepemilikan 45%; non-bursa) USD 300.000 bruto, dipotong pajak Mekara 10% (USD 30.000), diterima Selasa 20 Mei 2025 (kurs tengah BI Rp16.350; kurs KMK 14–20 Mei Rp16.420); dividen ini 40% dari laba setelah pajak Mekara Plantation dan seluruhnya diinvestasikan di Indonesia sesuai syarat Pasal 4 ayat (3) huruf f angka 2 UU PPh; (2) dari Ostra Logistics AG (Negara Ostria; kepemilikan 30%; non-bursa; tidak diinvestasikan) USD 120.000 bruto, dipotong pajak Ostria 15% (USD 18.000), diterima Senin 15 September 2025 (kurs tengah BI Rp16.400; kurs KMK 10–16 September Rp16.380). Kurs tengah BI 31 Desember 2025 Rp16.780. Kredit PPh Pasal 23 Rp210.000.000 dan PPh Pasal 25 Rp1.050.000.000. Dengan kebijakan konversi penghasilan sesuai pembukuan dan pajak luar negeri dengan kurs KMK tanggal pemotongan, PPh Pasal 29 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp197.760.000", B: "Rp198.120.000", C: "Rp200.952.000", D: "Rp784.620.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dividen Mekara memenuhi syarat bukan objek sehingga dikeluarkan dari PKP dan pajak Mekara tidak dapat dikreditkan. Dividen Ostria objek PPh: masuk PKP sebesar USD 120.000 × Rp16.400 = Rp1.968.000.000; pajak Ostria USD 18.000 × Rp16.380 = Rp294.840.000 di bawah batas 22% × Rp1.968.000.000 = Rp432.960.000, sehingga dikreditkan penuh.",
        jejakHitung: [
          ["PKP = 6.000.000.000 + 1.968.000.000", "Rp7.968.000.000"],
          ["PPh terutang 22%", "Rp1.752.960.000"],
          ["Kredit PPh 24 Ostria = min(Rp294.840.000; Rp432.960.000)", "Rp294.840.000"],
          ["− PPh 23 dan PPh 25 (210 + 1.050 juta)", "Rp1.260.000.000"],
          ["PPh Pasal 29", "Rp198.120.000"]
        ],
        mengapaSalah: {
          A: "Mengonversi pajak Ostria dengan kurs tengah BI (Rp295.200.000).",
          C: "Mengonversi penghasilan dan pajak Ostria dengan kurs tengah BI akhir tahun Rp16.780.",
          D: "Lupa pengecualian Pasal 4 ayat (3) huruf f: dividen Mekara ikut masuk PKP (USD 300.000 × Rp16.350 = Rp4.905.000.000; PPh terutang menjadi Rp2.832.060.000) dan pajak Mekara Rp492.600.000 ikut dikreditkan."
        },
        jebakan: "Dividen yang dikecualikan membawa pajak luar negerinya ikut keluar: tidak dikreditkan dan tidak dibiayakan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f angka 2, angka 5, dan angka 8 UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 24 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 dan Pasal 10 PMK 192/PMK.03/2018 (kredit pajak luar negeri)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 23 dan Pasal 31 ayat (1) PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-118",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sakura Elektronik Indonesia adalah entitas konstituen Grup Hoshi yang entitas induk utamanya, Hoshi Corp, berkedudukan di Negara Nippora (pendapatan konsolidasi EUR 4 miliar; tahun buku kalender; Nippora menerapkan IIR). Hoshi Corp akan menyampaikan GloBE Information Return tahun pajak 2025 di Nippora, dan Nippora mempunyai perjanjian pertukaran GIR antarotoritas yang berlaku dengan Indonesia. Yurisdiksi Indonesia terutang DMTT untuk 2025, dan PT Sakura telah menyampaikan SPT Tahunan PPh Badan 2025 pada 28 April 2026. Kewajiban PT Sakura di Indonesia terkait pajak minimum global tahun pajak 2025 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak menyampaikan GIR sendiri, tetapi memberitahukan entitas pelapor dan yurisdiksinya, serta tetap menghitung, menyetor, dan melaporkan DMTT di Indonesia", B: "Menyampaikan GIR sendiri di Indonesia walaupun Hoshi Corp sudah menyampaikannya di Nippora, karena GIR tidak dapat dipertukarkan antarotoritas", C: "Tidak mempunyai kewajiban apa pun di Indonesia karena seluruh pajak tambahan grup, termasuk atas yurisdiksi Indonesia, dipungut Nippora melalui IIR", D: "Cukup melampirkan salinan GIR Hoshi Corp pada SPT Tahunan PPh Badan 2025 yang disampaikan pada 28 April 2026 sebagai pengganti GIR lokal" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Bila GIR disampaikan entitas induk utama di yurisdiksi yang mempunyai perjanjian pertukaran GIR yang berlaku dengan Indonesia, entitas konstituen di Indonesia tidak menyampaikan GIR sendiri, tetapi memberitahukan entitas pelapor dan yurisdiksinya. DMTT tetap kewajiban di Indonesia yang disetor dan dilaporkan dalam SPT pajak tambahan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "GIR justru dirancang untuk dipertukarkan; kewajiban lokal digantikan pemberitahuan bila ada perjanjian yang berlaku.",
          C: "DMTT Indonesia didahulukan dan tetap terutang di Indonesia.",
          D: "GIR bukan lampiran SPT Tahunan PPh Badan dan tenggatnya berbeda (15 bulan; 18 bulan untuk tahun pertama)."
        },
        jebakan: "Pembebasan dari penyampaian GIR lokal tidak membebaskan dari DMTT maupun dari pemberitahuan entitas pelapor."
      },
      dasarHukum: [{ pasal: "Pasal 65 ayat (5), ayat (8), dan ayat (11) PMK 136/2024 (Notifikasi, GIR, SPT DMTT)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 7 ayat (6), Pasal 12 ayat (5), Pasal 14, dan Pasal 15 PER-6/PJ/2026", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "C9-119",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "Manajer pajak PT Lintang Persada, anak perusahaan grup PMN yang entitas induk utamanya berkedudukan di luar negeri, menyusun ringkasan pajak minimum global untuk direksi. Pendapatan laporan keuangan konsolidasi grup tahun 2022, 2023, 2024, dan 2025 berturut-turut EUR 690 juta, EUR 770 juta, EUR 730 juta, dan EUR 780 juta. Menurut PMK 136/2024, kesimpulan yang tepat untuk tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Grup tidak masuk cakupan karena pendapatan konsolidasi 2022 dan 2024 di bawah EUR 750 juta, padahal ambang harus terpenuhi pada setiap tahun dari empat tahun sebelumnya", B: "Grup masuk cakupan, dan tarif minimum efektif 15% diuji atas ETR gabungan seluruh entitas grup di semua negara", C: "Grup masuk cakupan karena pendapatan konsolidasi paling sedikit EUR 750 juta pada 2 dari 4 tahun sebelumnya (2023 dan 2025), dan tarif minimum efektif 15% diuji per yurisdiksi", D: "Grup masuk cakupan, dan tarif minimum efektifnya 22% mengikuti tarif PPh badan Indonesia sehingga ETR di bawah 22% menimbulkan pajak tambahan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Grup PMN masuk cakupan bila pendapatan laporan keuangan konsolidasi entitas induk utama paling sedikit EUR 750 juta dalam sekurang-kurangnya 2 dari 4 tahun pajak sebelum tahun yang diuji. Untuk tahun pajak 2026 tahun ujinya 2022–2025, dan ambang terpenuhi pada 2023 dan 2025. Tarif minimum efektif 15% diuji per yurisdiksi (seluruh entitas konstituen di satu yurisdiksi digabung), bukan per entitas atau secara global.",
        jejakHitung: [
          ["Tahun uji untuk tahun pajak 2026", "2022–2025"],
          ["Pendapatan ≥ EUR 750 juta", "2023 (EUR 770 juta) dan 2025 (EUR 780 juta) → 2 dari 4 tahun"],
          ["Kesimpulan", "Masuk cakupan; tarif minimum 15% diuji per yurisdiksi"]
        ],
        mengapaSalah: {
          A: "Ambang cukup terpenuhi pada 2 dari 4 tahun sebelumnya, tidak harus setiap tahun.",
          B: "ETR GloBE dihitung per yurisdiksi; GloBE tidak memakai penggabungan global seluruh negara.",
          D: "Tarif minimum GloBE 15%, terpisah dari tarif PPh badan 22% menurut UU PPh."
        },
        jebakan: "Baca ambang sebagai “2 dari 4 tahun”, bukan “setiap tahun”, dan uji tarif 15% per yurisdiksi."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 33, Pasal 2 ayat (1), dan Pasal 5 ayat (1) PMK 136/2024 (cakupan grup PMN, Tarif Minimum 15%, ETR per yurisdiksi)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C9-120", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Kalingga Manufaktur (PMA; pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) membayar bunga pinjaman USD 40.000 kepada Arven Capital Ltd. (Negara Arvenia; P3B membatasi bunga 10%; Form DGT sah terekam di Coretax sebelum pembayaran; pemilik manfaat; tidak mempunyai BUT di Indonesia). Bunga jatuh tempo dan dibayar pada Kamis, 16 Juli 2026, dan PPh-nya direncanakan disetor pada Rabu, 12 Agustus 2026. Data kurs: KMK berlaku 15–21 Juli 2026 Rp16.360; kurs tengah BI 16 Juli 2026 Rp16.395; KMK berlaku 12–18 Agustus 2026 Rp16.290. PPh Pasal 26 yang wajib dipotong adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp65.580.000",
        B: "Rp130.880.000",
        C: "Rp65.160.000",
        D: "Rp65.440.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "DPP PPh Pasal 26 dalam valuta asing dikonversi dengan kurs KMK yang berlaku pada saat PPh terutang (16 Juli 2026 → KMK 15–21 Juli Rp16.360), bukan kurs tengah BI pembukuan dan bukan kurs KMK minggu penyetoran. Dengan Form DGT sah dan status pemilik manfaat, tarif P3B 10%: 10% × USD 40.000 × Rp16.360 = Rp65.440.000.",
        jejakHitung: [["Saat terutang", "16 Juli 2026 (jatuh tempo dan dibayar) → KMK 15–21 Juli 2026"], ["DPP = USD 40.000 × Rp16.360", "Rp654.400.000"], ["PPh Pasal 26 = 10% × DPP (tarif P3B)", "Rp65.440.000"]],
        mengapaSalah: {
          A: "Memakai kurs tengah BI Rp16.395 (kurs pembukuan); DPP pemotongan memakai kurs KMK.",
          B: "Mengabaikan Form DGT yang sah sehingga memakai tarif domestik 20%.",
          C: "Memakai kurs KMK minggu penyetoran (Rp16.290); kurs dikunci pada saat terutang."
        },
        jebakan: "Kurs pajak mengikuti saat terutang, bukan tanggal setor atau kurs pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs mingguan sebagai dasar pelunasan PPh (kurs pada saat terutang)" }, { pasal: "PMK 112/2025 (penerapan tarif P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C9-121", topik: "C9.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Pada 2026 dua badan dari Negara Kordela (belum mempunyai P3B dengan Indonesia) memperoleh penghasilan dari Indonesia. (1) Ridgeline Survey Inc. membuka kantor cabang di Balikpapan yang mulai beroperasi melayani klien pada 1 Maret 2026; NPWP BUT terbit 20 Maret 2026; cabang ditutup dan seluruh kegiatannya berhenti pada 31 Oktober 2026. (2) Kordela Patents Ltd. tidak mempunyai tempat usaha atau personel di Indonesia; kontrak lisensinya dengan PT Nusa Kimia ditandatangani 2 Februari 2026, dan royalti pertama diterima 15 Mei 2026. Saat mulai dan berakhirnya kewajiban pajak subjektif kedua badan tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Ridgeline: mulai 1 Maret 2026 saat mulai menjalankan usaha melalui BUT dan berakhir 31 Oktober 2026 saat tidak lagi menjalankannya; Kordela Patents: mulai 15 Mei 2026 saat menerima penghasilan dari Indonesia dan berakhir saat tidak lagi menerima penghasilan tersebut",
        B: "Ridgeline: mulai 20 Maret 2026 saat NPWP BUT diterbitkan; Kordela Patents: mulai 2 Februari 2026 saat kontrak lisensi ditandatangani",
        C: "Ridgeline: mulai 1 Maret 2026 dan berakhir 31 Oktober 2026; Kordela Patents tidak pernah menjadi subjek pajak karena tidak berada di Indonesia",
        D: "Keduanya mulai 1 Januari 2026 dan berakhir 31 Desember 2026 karena kewajiban subjektif selalu mengikuti tahun pajak penuh"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 2A ayat (3): kewajiban subjektif SPLN yang menjalankan usaha melalui BUT dimulai saat mulai menjalankan usaha melalui BUT dan berakhir saat tidak lagi menjalankannya. Pasal 2A ayat (4): SPLN tanpa BUT mulai saat menerima atau memperoleh penghasilan dari Indonesia dan berakhir saat tidak lagi menerimanya.",
        jejakHitung: [],
        mengapaSalah: {
          B: "NPWP bersifat administratif dan penandatanganan kontrak belum menghasilkan penghasilan; saat yang menentukan adalah kegiatan melalui BUT dan penerimaan penghasilan.",
          C: "Subjek pajak luar negeri yang menerima penghasilan dari Indonesia tetap subjek pajak walaupun tidak berada di Indonesia; kewajibannya dipenuhi lewat PPh Pasal 26.",
          D: "Kewajiban subjektif dapat dimulai atau berakhir di tengah tahun; selebihnya berlaku bagian tahun pajak."
        },
        jebakan: "Mengaitkan awal kewajiban subjektif dengan tanggal NPWP atau tanggal kontrak."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (3) dan (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (4) dan (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-122", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Sakura Instruments KK (berkedudukan di Negara Nippora) menjalankan usaha di Indonesia melalui kantor cabang (BUT) di Bekasi sejak 2019. Untuk memperluas usaha, grup mendirikan PT Sakura Instrumen Indonesia dengan akta notaris tanggal 3 Februari 2026; pengesahan badan hukum terbit 17 Februari 2026, NPWP terbit 2 Maret 2026, dan operasi komersial dimulai 1 Juni 2026. Seluruh kegiatan cabang dialihkan kepada PT tersebut sehingga cabang berhenti beroperasi pada 31 Mei 2026, sedangkan permohonan penghapusan NPWP BUT baru diajukan pada 15 Juli 2026. Pernyataan yang tepat mengenai kewajiban pajak subjektif kedua wajib pajak itu adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kewajiban subjektif BUT berakhir 31 Mei 2026 saat tidak lagi menjalankan usaha melalui BUT, sehingga kewajiban PPh BUT Tahun 2026 meliputi bagian tahun pajak 1 Januari–31 Mei 2026; kewajiban subjektif PT Sakura Instrumen Indonesia dimulai 3 Februari 2026",
        B: "Kewajiban subjektif BUT berakhir saat NPWP BUT dihapus; kewajiban subjektif PT Sakura Instrumen Indonesia dimulai 1 Juni 2026 saat operasi komersial",
        C: "Kewajiban subjektif BUT berakhir 31 Mei 2026; kewajiban subjektif PT Sakura Instrumen Indonesia dimulai 2 Maret 2026 saat NPWP diterbitkan",
        D: "BUT dan PT Sakura Instrumen Indonesia adalah wajib pajak yang sama karena berada dalam satu grup, sehingga kewajiban subjektif BUT berlanjut pada PT tanpa bagian tahun pajak"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban subjektif BUT berakhir saat tidak lagi menjalankan usaha melalui BUT (31 Mei 2026), terlepas dari kapan NPWP-nya dihapus. PT adalah badan dalam negeri yang kewajiban subjektifnya dimulai saat didirikan, yaitu tanggal akta pendirian (3 Februari 2026). Keduanya wajib pajak terpisah.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Penghapusan NPWP adalah tindakan administratif; operasi komersial bukan saat mulai kewajiban subjektif badan dalam negeri.",
          C: "Penerbitan NPWP tidak menentukan awal kewajiban subjektif; untuk badan dalam negeri yang menentukan adalah saat didirikan.",
          D: "BUT adalah subjek pajak luar negeri dan PT adalah subjek pajak badan dalam negeri; kepemilikan satu grup tidak menyatukan kewajiban pajaknya."
        },
        jebakan: "Memakai tanggal administratif (NPWP, penghapusan NPWP, operasi komersial) sebagai saat mulai atau berakhir kewajiban subjektif."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (2) dan (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-123", topik: "C9.1", tingkat: ["C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Kordela Patents Ltd., badan dari Negara Kordela yang belum mempunyai P3B dengan Indonesia, tidak mempunyai BUT di Indonesia. Sepanjang Mei–September 2026 badan itu menerima royalti dari PT Nusa Kimia seluruhnya Rp1.000.000.000; kontrak lisensi berakhir 30 September 2026 dan tidak diperpanjang. Pernyataan yang tepat mengenai kewajiban perpajakan Kordela Patents Ltd. di Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kordela Patents wajib mendaftarkan diri sebagai BUT dan menyampaikan SPT Tahunan PPh Badan 2026 atas royalti tersebut",
        B: "Kewajiban pajaknya dipenuhi melalui pemotongan PPh Pasal 26 sebesar 20% × Rp1.000.000.000 = Rp200.000.000 oleh PT Nusa Kimia yang bersifat final; kewajiban subjektifnya berakhir saat tidak lagi menerima royalti dari Indonesia",
        C: "PT Nusa Kimia memotong PPh Pasal 23 sebesar 15% dari royalti, ditambah 100% karena penerima tidak ber-NPWP",
        D: "Kewajiban subjektif Kordela Patents berakhir 31 Desember 2026, sehingga PPh Pasal 26 dihitung atas royalti yang disetahunkan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Subjek pajak luar negeri tanpa BUT memenuhi kewajiban pajaknya melalui PPh Pasal 26 yang dipotong pembayar (20% dari bruto, final, tanpa P3B); kewajiban subjektifnya mulai saat menerima penghasilan dari Indonesia dan berakhir saat tidak lagi menerimanya.",
        jejakHitung: [["PPh Pasal 26 = 20% × Rp1.000.000.000", "Rp200.000.000"]],
        mengapaSalah: {
          A: "Tanpa tempat usaha, personel, atau kegiatan di Indonesia tidak ada BUT; penerimaan royalti saja tidak menimbulkan kewajiban SPT Tahunan.",
          C: "PPh Pasal 23 hanya untuk penerima dalam negeri dan BUT; royalti kepada subjek pajak luar negeri dipotong PPh Pasal 26.",
          D: "PPh Pasal 26 dipotong atas setiap pembayaran bruto, tanpa penyetahunan; kewajiban subjektif berakhir saat penghasilan tidak lagi diterima."
        },
        jebakan: "Memperlakukan penerima royalti luar negeri seperti wajib pajak dalam negeri atau BUT."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) dan (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-124",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-C9-10",
      laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal ini dan dua soal berikutnya: Brennholt Pumpen AG, berkedudukan di Negara Marvela yang belum mempunyai P3B dengan Indonesia, menjual dan merawat pompa industri melalui kantor cabang (BUT) di Cikarang. Pembukuan BUT dalam Rupiah. Data tahun pajak 2025: peredaran usaha Rp72.000.000.000; laba komersial sebelum PPh Rp6.800.000.000. Laba itu sudah dikurangi royalti merek kepada kantor pusat Rp900.000.000, bunga pinjaman dari kantor pusat Rp350.000.000, bunga pinjaman dari PT Bank Kemakmuran (pihak ketiga di Indonesia) Rp420.000.000, dan alokasi biaya administrasi kantor pusat Rp1.200.000.000 yang Rp300.000.000 di antaranya untuk riset pasar kantor pusat di Afrika. Laba itu sudah termasuk bunga deposito Rp150.000.000 (telah dipotong PPh final 20% sebesar Rp30.000.000). Pada 2025 kantor pusat juga menjual langsung pompa industri sejenis kepada PT Petro Kimia Gresik dengan laba neto Rp600.000.000, serta menjual lisensi perangkat lunak akuntansi (bukan usaha BUT) kepada pembeli di Indonesia dengan laba neto Rp250.000.000. Tidak ada sisa kerugian fiskal. Penghasilan neto fiskal BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.700.000.000", B: "Rp8.800.000.000", C: "Rp9.050.000.000", D: "Rp8.200.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Royalti dan bunga kepada kantor pusat (bukan usaha perbankan) dikoreksi positif (Pasal 5 ayat (3)); bunga kepada bank pihak ketiga tetap biaya. Dari alokasi biaya administrasi kantor pusat hanya bagian yang tidak berkaitan dengan BUT (Rp300.000.000) yang dikoreksi. Bunga deposito final dikeluarkan, dan laba penjualan langsung pompa sejenis oleh kantor pusat ditambahkan (force of attraction tanpa P3B); lisensi perangkat lunak tidak sejenis sehingga tidak ditarik.",
        jejakHitung: [
          ["Laba komersial", "Rp6.800.000.000"],
          ["+ royalti kepada kantor pusat", "Rp900.000.000"],
          ["+ bunga kepada kantor pusat", "Rp350.000.000"],
          ["+ bagian biaya administrasi kantor pusat yang tidak berkaitan dengan BUT", "Rp300.000.000"],
          ["− bunga deposito (PPh final)", "Rp150.000.000"],
          ["+ force of attraction: laba penjualan pompa sejenis oleh kantor pusat", "Rp600.000.000"],
          ["Penghasilan neto fiskal", "Rp8.800.000.000"]
        ],
        mengapaSalah: {
          A: "Mengoreksi seluruh alokasi biaya administrasi kantor pusat Rp1.200.000.000; yang boleh dikoreksi hanya bagian yang tidak berkaitan dengan BUT.",
          C: "Ikut menarik laba lisensi perangkat lunak Rp250.000.000, padahal force of attraction hanya menjangkau usaha atau penjualan yang sejenis dengan usaha BUT.",
          D: "Lupa menambahkan laba penjualan pompa sejenis oleh kantor pusat (Pasal 5 ayat (1) huruf b)."
        },
        jebakan: "Tiga lapis koreksi sekaligus: pembayaran ke kantor pusat (Ps. 5 ayat (3)), alokasi biaya kantor pusat (hanya bagian tak terkait), dan force of attraction (hanya yang sejenis)."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf a dan b, ayat (2), dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "KEP-62/PJ/1995 (biaya administrasi kantor pusat)" }, { pasal: "Pasal 4 ayat (2) UU PPh (bunga deposito final)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 210,
      verifikasi: "✅"
    },
    {
      id: "C9-125", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-C9-10", laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Brennholt Pumpen AG (BUT di Cikarang; kantor pusat di Negara Marvela tanpa P3B; PKP 2025 Rp8.800.000.000; tidak ada sisa kerugian fiskal). Pembayaran dan pemotongan pajak sepanjang 2025 yang tercatat di BUT: (1) PPh Pasal 22 impor atas pompa dan suku cadang yang dibayar BUT saat impor Rp260.000.000; (2) PPh Pasal 23 yang dipotong pelanggan dalam negeri atas jasa perawatan, sesuai bukti potong atas nama BUT, Rp118.000.000; (3) angsuran PPh Pasal 25 Rp1.100.000.000, ditambah sanksi bunga dalam STP atas keterlambatan pembayaran angsuran Maret 2025 Rp12.000.000; (4) PPh Pasal 26 sebesar 20% yang dipotong dan disetor BUT atas imbalan jasa konsultan teknik kepada Arvo Consulting (perusahaan independen di Negara Marvela) Rp45.000.000; (5) PPh Pasal 21 pegawai yang dipotong dan disetor BUT Rp540.000.000. PPh Pasal 29 BUT tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp413.000.000", B: "Rp446.000.000", C: "Rp718.000.000", D: "Rp458.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "PPh badan BUT 22% × Rp8.800.000.000 = Rp1.936.000.000. Kredit pajak (Pasal 28 ayat (1)) hanya pajak atas penghasilan BUT sendiri yang dibayar sendiri atau dipotong/dipungut pihak lain: PPh Pasal 22 impor, PPh Pasal 23 dalam bukti potong atas nama BUT, dan angsuran PPh Pasal 25. Sanksi bunga STP bukan pajak yang terutang atas penghasilan sehingga tidak dikreditkan. PPh Pasal 26 dan PPh Pasal 21 yang dipotong BUT adalah pajak milik penerima penghasilan; BUT hanya pemotong yang menyetorkannya.",
        jejakHitung: [["PPh terutang = 22% × Rp8.800.000.000", "Rp1.936.000.000"], ["Kredit = PPh 22 impor 260.000.000 + PPh 23 118.000.000 + PPh 25 1.100.000.000", "Rp1.478.000.000"], ["Sanksi bunga STP; PPh 26 dan PPh 21 yang dipotong BUT", "tidak dikreditkan"], ["PPh Pasal 29 = 1.936.000.000 − 1.478.000.000", "Rp458.000.000"]],
        mengapaSalah: {
          A: "Ikut mengkreditkan PPh Pasal 26 Rp45.000.000 yang dipotong BUT; pajak itu milik Arvo Consulting dan BUT hanya berkewajiban menyetorkannya.",
          B: "Ikut mengkreditkan sanksi bunga STP Rp12.000.000; sanksi administrasi bukan pembayaran di muka PPh, tidak dapat dikreditkan, dan juga tidak dapat dibiayakan.",
          C: "Menganggap PPh Pasal 22 impor final sehingga tidak dikreditkan; PPh Pasal 22 impor adalah pembayaran di muka yang dapat dikreditkan dalam SPT Tahunan."
        },
        jebakan: "Bedakan pajak yang dipotong DARI BUT (kredit pajak) dengan pajak yang dipotong OLEH BUT (kewajiban pemotong); sanksi administrasi tidak pernah menjadi kredit pajak."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 22, Pasal 23, Pasal 25, dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 21 dan Pasal 26 ayat (1) UU PPh (BUT sebagai pemotong)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh (sanksi administrasi)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-126",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C9-10",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Brennholt Pumpen AG (BUT; kantor pusat di Negara Marvela yang belum mempunyai P3B dengan Indonesia; PKP 2025 Rp8.800.000.000; PPh badan terutang Rp1.936.000.000; laba 2025 sudah termasuk bunga deposito Rp150.000.000 yang telah dipotong PPh final 20% sebesar Rp30.000.000; tidak ada sisa kerugian fiskal). Atas laba 2025, BUT: (1) pada November 2025 membeli lisensi perangkat lunak pemantauan pompa jarak jauh Rp1.000.000.000 yang dicatat sebagai aktiva tidak berwujud BUT dan dipakai untuk layanan perawatan di Indonesia; (2) pada Maret 2026 membayar mesin uji tekanan Rp1.500.000.000 yang dikirim ke, dicatat oleh, dan dipakai di pabrik kantor pusat di Marvela; (3) pada Juli 2026 mengirim Rp2.000.000.000 kepada kantor pusat sebagai transfer laba. Tidak ada aset yang dialihkan, dan penanaman kembali diberitahukan bersama SPT Tahunan 2025. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.372.800.000", B: "Rp1.396.800.000", C: "Rp1.196.800.000", D: "Rp400.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PKP sesudah PPh Rp6.864.000.000. Bunga deposito yang dikenai PPh final ikut masuk dasar BPT setelah dikurangi PPh finalnya (Pasal 6 PMK 14/PMK.03/2011; petunjuk Lampiran 12A PER-11/PJ/2025), sehingga dasar = (Rp8.800.000.000 + Rp150.000.000) − (Rp1.936.000.000 + Rp30.000.000) = Rp6.984.000.000. Lisensi (1) memenuhi bentuk dan waktu (aktiva tidak berwujud yang digunakan BUT, dibeli dalam tahun pajak berjalan), tetapi mesin (2) dipakai kantor pusat di luar negeri sehingga bukan aktiva tetap yang digunakan BUT, dan transfer laba (3) bukan penanaman kembali. Karena tidak seluruhnya ditanamkan kembali, pengecualian Pasal 1 ayat (3) PMK 14/PMK.03/2011 tidak berlaku dan BPT 20% (tanpa P3B) dikenakan atas seluruh Rp6.984.000.000, dikirim ke kantor pusat atau tidak.",
        jejakHitung: [
          ["PKP sesudah PPh = 8.800.000.000 − 1.936.000.000", "Rp6.864.000.000"],
          ["+ bunga deposito setelah PPh final = 150.000.000 − 30.000.000 (petunjuk Lampiran 12A)", "Rp120.000.000"],
          ["Penanaman kembali yang memenuhi syarat (lisensi November 2025)", "Rp1.000.000.000 (tidak seluruhnya)"],
          ["Dasar BPT", "Rp6.984.000.000"],
          ["PPh Pasal 26 ayat (4) = 20% × Rp6.984.000.000", "Rp1.396.800.000"]
        ],
        mengapaSalah: {
          A: "Hanya memakai PKP sesudah PPh badan (20% × Rp6.864.000.000); bunga deposito yang dikenai PPh final ikut masuk dasar BPT setelah dikurangi PPh finalnya.",
          C: "Mengurangkan lisensi Rp1.000.000.000 dari dasar BPT (20% × Rp5.984.000.000); pengecualian hanya diberikan bila seluruh PKP sesudah PPh ditanamkan kembali.",
          D: "Mengenakan BPT hanya atas laba yang dikirim ke kantor pusat (20% × Rp2.000.000.000); BPT tidak bergantung pada pengiriman laba."
        },
        jebakan: "Penanaman kembali sebagian tidak mengurangi BPT. Uji juga siapa yang memakai aset (harus BUT), ingat pengiriman laba bukan pemicu BPT, dan masukkan penghasilan yang dikenai PPh final setelah dikurangi PPh finalnya."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 ayat (1) PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "Pasal 6 PMK 14/PMK.03/2011 (penghasilan BUT yang dikenai PPh final)", berlakuSejak: "2011-01-24" }, { pasal: "Petunjuk pengisian Lampiran 12A PER-11/PJ/2025 (keadaan PPh final dan tidak final)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-127", topik: "C9.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 2 ayat (5) UU PPh (parafrase): Bentuk usaha tetap antara lain berupa ... n. orang atau badan yang bertindak selaku agen yang kedudukannya tidak bebas; o. agen atau pegawai dari perusahaan asuransi yang tidak didirikan dan tidak bertempat kedudukan di Indonesia yang menerima premi asuransi atau menanggung risiko di Indonesia; dan p. komputer, agen elektronik, atau peralatan otomatis yang dimiliki, disewa, atau digunakan oleh penyelenggara transaksi elektronik untuk menjalankan kegiatan usaha melalui internet.",
      stem: "Empat badan dari negara yang belum mempunyai P3B dengan Indonesia menjalankan kegiatan berikut pada 2026: (1) Nordhem Assurance Ltd menunjuk Ibu Laras di Surabaya untuk menerima premi dari tertanggung di Indonesia atas nama Nordhem sejak Maret 2026; (2) Kalyx Commerce Ltd menempatkan server miliknya di pusat data sewaan di Jakarta untuk menjalankan toko daring yang melayani pembeli Indonesia; (3) Varga Trading memasarkan produknya melalui PT Niaga Bebas, makelar yang melayani 30 prinsipal dalam kegiatan usahanya yang lazim dan tidak berwenang menandatangani kontrak atas nama Varga; (4) Zento Inc. mengirim dua auditor mutu ke pabrik pemasoknya di Bekasi pada 2–26 Maret 2026 dan 11–31 Mei 2026, tanpa kunjungan lain dalam 12 bulan. Berdasarkan kutipan tersebut, kegiatan yang menimbulkan BUT di Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(1), (2), dan (3)", C: "(2) saja", D: "(1), (2), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Agen perusahaan asuransi luar negeri yang menerima premi di Indonesia (huruf o) dan server milik penyelenggara transaksi elektronik di Indonesia (huruf p) menimbulkan BUT tanpa uji waktu. Makelar yang bebas dan bertindak dalam kegiatan usahanya yang lazim bukan BUT, dan jasa auditor mutu 25 + 21 = 46 hari tidak melebihi 60 hari dalam 12 bulan.",
        jejakHitung: [["Kunjungan 1: 2–26 Maret 2026", "25 hari"], ["Kunjungan 2: 11–31 Mei 2026", "21 hari"], ["Jumlah dalam 12 bulan", "46 hari ≤ 60 hari → bukan BUT"]],
        mengapaSalah: {
          B: "Makelar yang kedudukannya bebas, melayani banyak prinsipal, dan tidak berwenang mengikat prinsipal bukan agen tidak bebas.",
          C: "Melupakan huruf o: agen asuransi asing yang menerima premi di Indonesia adalah BUT tanpa syarat jangka waktu.",
          D: "Hari jasa digabung 46 hari, masih di bawah ambang lebih dari 60 hari dalam 12 bulan."
        },
        jebakan: "Tidak semua bentuk BUT memakai uji waktu; huruf o dan p berlaku begitu kegiatannya ada."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) huruf m, n, o, dan p UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019 (penentuan BUT)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-128",
      topik: "C9.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "StreamNova Inc., berkedudukan di Negara Estmar yang belum mempunyai P3B dengan Indonesia, menjual langganan film daring kepada pengguna di Indonesia dengan penerimaan sekitar Rp80.000.000.000 setahun. StreamNova tidak mempunyai kantor, pegawai, agen, maupun server di Indonesia (seluruh server berada di luar negeri), dan sejak 2022 telah ditunjuk sebagai pemungut PPN PMSE. Pelanggan seluruhnya orang pribadi. Pernyataan yang paling tepat mengenai kewajiban perpajakan StreamNova pada 2026 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "StreamNova otomatis menjadi BUT karena penerimaannya melampaui ambang penunjukan pemungut PPN PMSE, sehingga wajib menyampaikan SPT Tahunan PPh Badan dengan tarif 22%", B: "StreamNova memungut PPN PMSE atas langganan dari pengguna Indonesia; dari sisi PPh, tanpa tempat usaha, agen, atau server di Indonesia tidak timbul BUT menurut Pasal 2 ayat (5) UU PPh", C: "StreamNova wajib terdaftar sebagai BUT karena penunjukan sebagai pemungut PPN PMSE hanya dapat diberikan kepada subjek pajak luar negeri yang mempunyai BUT di Indonesia", D: "StreamNova membayar PPh final 0,5% dari peredaran bruto karena penerimaannya dari Indonesia di bawah Rp4,8 miliar per bulan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penunjukan sebagai pemungut PPN PMSE adalah kewajiban PPN (Pasal 332 PMK 81/2024), bukan penetapan BUT. Untuk PPh, BUT menurut Pasal 2 ayat (5) UU PPh memerlukan bentuk tertentu, misalnya tempat usaha, agen tidak bebas, atau komputer/server di Indonesia; StreamNova tidak mempunyai satu pun. Pasal 6 ayat (6) Lampiran UU 2/2020 hanya menyatakan pedagang atau penyedia jasa luar negeri yang memenuhi kehadiran ekonomi signifikan dapat diperlakukan sebagai BUT, dengan ambang dan tata cara yang diserahkan kepada PP dan PMK (ayat (7), (12), dan (13)); tidak ada penetapan BUT otomatis karena melampaui ambang pemungut PPN PMSE.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ambang pemungut PPN PMSE tidak menciptakan BUT; tidak ada penetapan BUT otomatis.",
          C: "Pemungut PPN PMSE dapat berupa pedagang atau penyedia jasa luar negeri tanpa BUT; penunjukan pemungut tidak bergantung pada status BUT dan tidak menciptakannya.",
          D: "PP 55/2022 hanya untuk wajib pajak dalam negeri tertentu, bukan subjek pajak luar negeri."
        },
        jebakan: "Memisahkan rezim PPN PMSE (pemungut) dari rezim PPh (ada atau tidaknya BUT)."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 332 dan Pasal 334 PMK 81/2024 (PPN PMSE)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 6 ayat (6) sampai ayat (8) Lampiran UU 2/2020 (kehadiran ekonomi signifikan)" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-129", topik: "C9.1", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 5 ayat (3) UU PPh (parafrase): Pembayaran kepada kantor pusat yang tidak dibolehkan dibebankan sebagai biaya adalah (a) royalti atau imbalan lainnya sehubungan dengan penggunaan harta, paten, atau hak-hak lainnya; (b) imbalan sehubungan dengan jasa manajemen dan jasa lainnya; (c) bunga, kecuali bunga yang berkenaan dengan usaha perbankan.",
      stem: "Grup Kestrel Turbines (negara mitra P3B; P3B membatasi royalti 10%) menimbang dua struktur untuk usaha perakitan turbin di Indonesia mulai 2027: (i) kantor cabang yang menjadi BUT, atau (ii) PT Kestrel Turbin Indonesia (PT PMA) yang 100% sahamnya dimiliki induk. Pada kedua struktur, entitas di Indonesia akan membayar royalti teknologi Rp1.500.000.000 per tahun kepada Kestrel di luar negeri (pemilik manfaat; Form DGT sah), dan nilai royalti itu sudah wajar menurut analisis kesebandingan. Berdasarkan kutipan tersebut, perbandingan perlakuan PPh atas royalti yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pada kedua struktur royalti dapat dibebankan sepanjang wajar, karena prinsip kewajaran berlaku sama bagi BUT dan PT PMA",
        B: "Pada kedua struktur royalti tidak dapat dibebankan karena dibayar kepada pihak yang mempunyai hubungan istimewa",
        C: "Pada BUT royalti dapat dibebankan asalkan dipotong PPh Pasal 26 dengan tarif P3B 10%, sedangkan pada PT PMA royalti tidak dapat dibebankan",
        D: "Pada BUT royalti kepada kantor pusat tidak dapat dibebankan; pada PT PMA royalti kepada induk dapat dibebankan sepanjang wajar dan bermanfaat, dengan pemotongan PPh Pasal 26 tarif P3B 10% karena Form DGT sah"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "BUT dan kantor pusatnya adalah satu entitas, sehingga Pasal 5 ayat (3) melarang pembebanan royalti kepada kantor pusat walaupun nilainya wajar. PT PMA adalah wajib pajak terpisah: royalti kepada induk adalah biaya untuk mendapatkan penghasilan sepanjang memenuhi prinsip kewajaran (Pasal 18 ayat (3); PMK 172/2023), dan dipotong PPh Pasal 26 dengan tarif P3B bila Form DGT sah.",
        jejakHitung: [["PT PMA: PPh Pasal 26 = 10% × Rp1.500.000.000", "Rp150.000.000"], ["BUT: koreksi fiskal positif royalti kepada kantor pusat", "Rp1.500.000.000"]],
        mengapaSalah: {
          A: "Bagi BUT larangan Pasal 5 ayat (3) bersifat khusus dan tidak bergantung pada kewajaran nilai.",
          B: "Hubungan istimewa tidak otomatis menghapus hak membebankan biaya bagi PT PMA; yang diuji adalah kewajaran dan manfaatnya.",
          C: "Perlakuan dibalik: larangan pembebanan berlaku pada BUT, bukan pada PT PMA; pemotongan PPh tidak mengubah larangan Pasal 5 ayat (3)."
        },
        jebakan: "BUT tidak boleh membiayakan royalti, imbalan jasa, dan bunga (kecuali perbankan) kepada kantor pusatnya; anak perusahaan boleh dengan uji kewajaran."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 18 ayat (3) dan Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (PKKU)", berlakuSejak: "2023-12-29" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-130", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Orvik Marine Supplies Ltd, berkedudukan di Negara Kaldera yang belum mempunyai P3B dengan Indonesia, tidak mempunyai kantor di Indonesia. Sejak Januari 2025 Bapak Hendra (WNI, berdomisili di Batam) menjadi agen tunggal Orvik: ia hanya bekerja untuk Orvik dan secara rutin menandatangani kontrak penjualan suku cadang kapal atas nama Orvik, sehingga Orvik mempunyai BUT agen tidak bebas. Data tahun pajak 2025 yang diatribusikan kepada BUT (harga pokok dianggap wajar): penjualan melalui Hendra Rp20.000.000.000; harga pokok suku cadang yang dikirim dari Kaldera Rp14.500.000.000; komisi 5% kepada Hendra Rp1.000.000.000; biaya operasional penjualan di Batam Rp500.000.000; imbalan jasa manajemen yang dibebankan kantor pusat Rp300.000.000. Selain itu, kantor pusat menjual langsung suku cadang kapal kepada galangan kapal di Surabaya tanpa melalui Hendra dengan penjualan Rp3.000.000.000 dan harga pokok Rp2.600.000.000. Tidak ada sisa kerugian dan tidak ada penanaman kembali. PPh badan terutang dan PPh Pasal 26 ayat (4) BUT tahun pajak 2025 masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh badan Rp880.000.000; PPh Pasal 26 ayat (4) Rp624.000.000",
        B: "PPh badan Rp902.000.000; PPh Pasal 26 ayat (4) Rp639.600.000",
        C: "PPh badan Rp968.000.000; PPh Pasal 26 ayat (4) Rp686.400.000",
        D: "PPh badan Rp968.000.000; PPh Pasal 26 ayat (4) Rp880.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Agen tidak bebas menjadikan Orvik ber-BUT, sehingga laba penjualan melalui Hendra dipajaki sebagai penghasilan BUT. Komisi kepada Hendra (pihak di luar kantor pusat) dan biaya operasional di Batam boleh dikurangkan, sedangkan imbalan jasa manajemen kepada kantor pusat tidak (Pasal 5 ayat (3)). Tanpa P3B, laba penjualan langsung barang sejenis oleh kantor pusat ditarik ke BUT (Pasal 5 ayat (1) huruf b). BPT 20% dihitung dari PKP sesudah PPh badan.",
        jejakHitung: [["Laba kotor penjualan melalui agen = 20.000.000.000 − 14.500.000.000", "Rp5.500.000.000"], ["− komisi Hendra dan biaya operasional (1.000.000.000 + 500.000.000)", "Rp1.500.000.000"], ["Imbalan jasa manajemen kepada kantor pusat Rp300.000.000", "tidak dapat dikurangkan"], ["+ force of attraction = 3.000.000.000 − 2.600.000.000", "Rp400.000.000"], ["PKP", "Rp4.400.000.000"], ["PPh badan = 22% × Rp4.400.000.000", "Rp968.000.000"], ["PPh Pasal 26 ayat (4) = 20% × (4.400.000.000 − 968.000.000)", "Rp686.400.000"]],
        mengapaSalah: {
          A: "Lupa menarik laba penjualan langsung suku cadang sejenis oleh kantor pusat (force of attraction tanpa P3B), sehingga PKP hanya Rp4.000.000.000.",
          B: "Membiayakan imbalan jasa manajemen Rp300.000.000 kepada kantor pusat yang dilarang Pasal 5 ayat (3), sehingga PKP menjadi Rp4.100.000.000.",
          D: "Menghitung BPT dari PKP sebelum dikurangi PPh badan: 20% × Rp4.400.000.000."
        },
        jebakan: "Setelah agen tidak bebas menimbulkan BUT, prinsipal dipajaki seperti BUT lain: komisi agen menjadi biaya, pembayaran ke kantor pusat tunduk Pasal 5 ayat (3), force of attraction berlaku tanpa P3B, dan BPT menyusul."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) huruf n UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 5 ayat (1) huruf a dan b serta ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-131", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Vestfold Automation di Batam (kantor pusat di Negara Vestria) membukukan dalam Rupiah dengan kurs tengah BI tanggal transaksi. Pada Kamis, 12 Juni 2025 BUT mencatat dua nota debit dari kantor pusat sebagai beban: (1) alokasi biaya administrasi umum kantor pusat EUR 120.000, yang EUR 30.000 di antaranya merupakan biaya hubungan investor dan pencatatan saham kantor pusat di bursa Vestria (tidak berkaitan dengan kegiatan BUT); (2) imbalan jasa manajemen dan dukungan teknologi informasi dari kantor pusat EUR 50.000. Kurs tengah BI 12 Juni 2025 Rp18.600/EUR; kurs KMK berlaku 11–17 Juni 2025 Rp18.540/EUR. Koreksi fiskal positif atas kedua nota debit tersebut dalam SPT Tahunan BUT 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp930.000.000", B: "Rp3.162.000.000", C: "Rp1.483.200.000", D: "Rp1.488.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Imbalan jasa manajemen kepada kantor pusat tidak dapat dibebankan (Pasal 5 ayat (3) huruf b), sedangkan alokasi biaya administrasi kantor pusat hanya dikoreksi sebesar bagian yang tidak berkaitan dengan BUT. Koreksi fiskal membalik beban sebesar nilai yang dibukukan, yaitu dengan kurs pembukuan (kurs tengah BI tanggal transaksi); kurs KMK hanya dipakai untuk menghitung pajak yang dipotong atau dipungut.",
        jejakHitung: [["Bagian alokasi yang tidak berkaitan dengan BUT", "EUR 30.000"], ["Imbalan jasa manajemen kepada kantor pusat", "EUR 50.000"], ["Koreksi = EUR 80.000 × Rp18.600 (kurs pembukuan)", "Rp1.488.000.000"]],
        mengapaSalah: {
          A: "Hanya mengoreksi imbalan jasa manajemen; bagian alokasi biaya untuk kegiatan kantor pusat sendiri juga harus dikoreksi.",
          B: "Mengoreksi seluruh alokasi biaya administrasi; bagian yang berkaitan dengan BUT boleh dibebankan (Pasal 5 ayat (2)).",
          C: "Memakai kurs KMK; koreksi membalik beban yang tercatat sehingga harus memakai kurs pembukuan."
        },
        jebakan: "Koreksi fiskal atas beban valas mengikuti nilai buku beban, bukan kurs KMK."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (2) dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "KEP-62/PJ/1995 (biaya administrasi kantor pusat)" }, { pasal: "PP 94/2010 Pasal 9 (pembukuan taat asas sesuai SAK)" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-132", topik: "C9.1", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Calvera Drilling di Balikpapan (kantor pusat bukan bank, berkedudukan di Negara Tarsia yang belum mempunyai P3B dengan Indonesia) membukukan dalam Rupiah dengan kurs tengah BI tanggal transaksi. Pada Rabu, 18 Maret 2026 BUT membayar dan membebankan: (1) bunga USD 60.000 atas pinjaman dari kantor pusatnya; (2) bunga USD 40.000 kepada Brevia Capital Bank (Negara Brevia; P3B membatasi bunga 10%; pemilik manfaat; Form DGT sah terekam di Coretax sebelum pembayaran; tidak mempunyai BUT di Indonesia). Kurs KMK berlaku 18–24 Maret 2026 Rp16.450/USD; kurs tengah BI 18 Maret 2026 Rp16.500/USD. PPh Pasal 26 atas bunga kepada Brevia Capital Bank dan koreksi fiskal positif atas bunga kepada kantor pusat dalam SPT Tahunan BUT 2026 masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 26 Rp66.000.000; koreksi fiskal positif Rp990.000.000",
        B: "PPh Pasal 26 Rp65.800.000; koreksi fiskal positif Rp987.000.000",
        C: "PPh Pasal 26 Rp65.800.000; koreksi fiskal positif Rp990.000.000",
        D: "PPh Pasal 26 Rp65.800.000; koreksi fiskal positif Rp1.650.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "BUT wajib memotong PPh Pasal 26 atas bunga kepada bank luar negeri; DPP valas dikonversi dengan kurs KMK saat terutang dan tarif P3B 10% dipakai karena Form DGT sah. Bunga kepada kantor pusat yang bukan bank tidak dapat dibebankan (Pasal 5 ayat (3) huruf c) dan dikoreksi sebesar beban yang dibukukan dengan kurs tengah BI. Bunga kepada bank pihak ketiga tetap biaya.",
        jejakHitung: [["PPh 26 = 10% × USD 40.000 × Rp16.450 (kurs KMK 18–24 Maret)", "Rp65.800.000"], ["Beban bunga kantor pusat = USD 60.000 × Rp16.500 (kurs pembukuan)", "Rp990.000.000"], ["Koreksi fiskal positif", "Rp990.000.000"]],
        mengapaSalah: {
          A: "PPh Pasal 26 dihitung dengan kurs tengah BI; DPP pemotongan dalam valas memakai kurs KMK.",
          B: "Koreksi fiskal dihitung dengan kurs KMK; koreksi membalik beban sebesar nilai bukunya.",
          D: "Ikut mengoreksi bunga kepada bank pihak ketiga; larangan Pasal 5 ayat (3) hanya untuk bunga kepada kantor pusat."
        },
        jebakan: "Dalam satu soal, kurs KMK untuk PPh yang dipotong dan kurs pembukuan untuk koreksi beban."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) huruf c UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "C9-133",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Aurum Valve di Cilegon (kantor pusat di Negara Merovia, mitra P3B yang membatasi pajak atas laba cabang 10%; Form DGT kantor pusat sah) membukukan dalam Rupiah dan menjabarkan pos moneter valuta asing dengan kurs tengah BI tanggal neraca secara taat asas sesuai SAK. Laba komersial sebelum PPh tahun 2025 Rp5.400.000.000, yang sudah termasuk laba selisih kurs belum terealisasi Rp180.000.000 dari penjabaran piutang USD pelanggan per 31 Desember 2025 dan bunga deposito Rp100.000.000 (telah dipotong PPh final 20% sebesar Rp20.000.000), serta sudah dikurangi royalti desain kepada kantor pusat Rp700.000.000 dan biaya jamuan tanpa daftar nominatif Rp40.000.000. Tidak ada sisa kerugian fiskal dan tidak ada penanaman kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp465.080.000", B: "Rp479.120.000", C: "Rp471.120.000", D: "Rp958.240.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Laba selisih kurs belum terealisasi dari penjabaran pos moneter dengan kurs tengah BI diakui fiskal karena pembukuan taat asas sesuai SAK (PP 94/2010 Pasal 9), sehingga tidak dikoreksi. Bunga deposito final dikeluarkan dari PKP; royalti kepada kantor pusat dan jamuan tanpa daftar nominatif dikoreksi positif; PPh badan 22%. Dasar BPT mengikuti Pasal 6 PMK 14/PMK.03/2011 dan petunjuk Lampiran 12A PER-11/PJ/2025: penghasilan yang dikenai PPh final ikut masuk setelah dikurangi PPh finalnya, sehingga dasar = (PKP + bunga deposito) − (PPh badan + PPh final). Tarif BPT 10% sesuai P3B.",
        jejakHitung: [
          ["Laba komersial", "Rp5.400.000.000"],
          ["− bunga deposito final", "Rp100.000.000"],
          ["+ royalti kepada kantor pusat", "Rp700.000.000"],
          ["+ jamuan tanpa daftar nominatif", "Rp40.000.000"],
          ["PKP", "Rp6.040.000.000"],
          ["PPh badan 22%", "Rp1.328.800.000"],
          ["PKP sesudah PPh", "Rp4.711.200.000"],
          ["+ bunga deposito setelah PPh final = 100.000.000 − 20.000.000 (petunjuk Lampiran 12A)", "Rp80.000.000"],
          ["Dasar BPT", "Rp4.791.200.000"],
          ["BPT = 10% × Rp4.791.200.000", "Rp479.120.000"]
        ],
        mengapaSalah: {
          A: "Mengeluarkan laba selisih kurs belum terealisasi Rp180.000.000 dari PKP (PKP Rp5.860.000.000; dasar Rp4.650.800.000), padahal selisih kurs penjabaran diakui fiskal mengikuti pembukuan yang taat asas.",
          C: "Hanya memakai PKP sesudah PPh badan (10% × Rp4.711.200.000); bunga deposito yang dikenai PPh final ikut masuk dasar BPT setelah dikurangi PPh finalnya (Pasal 6 PMK 14/PMK.03/2011; petunjuk Lampiran 12A).",
          D: "Memakai tarif domestik 20% (20% × Rp4.791.200.000) padahal Form DGT kantor pusat sah dan P3B membatasi 10%."
        },
        jebakan: "Selisih kurs belum terealisasi bukan koreksi fiskal bila pembukuan taat asas; jangan pula menghitung ulang dengan kurs KMK. Bunga deposito dikeluarkan dari PKP untuk PPh badan, tetapi masuk lagi ke dasar BPT setelah dikurangi PPh finalnya."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs)" }, { pasal: "Pasal 5 ayat (3) dan Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 6 PMK 14/PMK.03/2011 (penghasilan BUT yang dikenai PPh final)", berlakuSejak: "2011-01-24" }, { pasal: "Petunjuk pengisian Lampiran 12A PER-11/PJ/2025 (keadaan PPh final dan tidak final)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "C9-134", topik: "C9.2", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "BUT Corvex Mining Services (kantor pusat di Negara Ostria, mitra P3B yang membatasi pajak atas laba cabang 10%; Form DGT kantor pusat sah) melaporkan dalam SPT Tahunan 2024 PKP Rp4.000.000.000 dan PPh Pasal 26 ayat (4) Rp312.000.000; tidak ada penanaman kembali. Pemeriksaan pada 2026 menetapkan koreksi positif Rp1.500.000.000 atas imbalan jasa manajemen kepada kantor pusat yang dibebankan BUT; koreksi itu disetujui BUT dan tidak ada koreksi lain. Tambahan pokok PPh Pasal 26 ayat (4) tahun pajak 2024 akibat koreksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp117.000.000", B: "Rp150.000.000", C: "Rp234.000.000", D: "Nihil, karena PPh Pasal 26 ayat (4) bersifat final dan dihitung hanya dari PKP yang dilaporkan sendiri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Koreksi PKP menambah PPh badan, dan sisa koreksi sesudah tambahan PPh badan menambah dasar BPT. Tambahan PPh badan 22% × Rp1.500.000.000 = Rp330.000.000; tambahan dasar BPT Rp1.170.000.000; dengan tarif P3B 10% tambahan BPT Rp117.000.000.",
        jejakHitung: [["Tambahan PPh badan = 22% × Rp1.500.000.000", "Rp330.000.000"], ["Tambahan PKP sesudah PPh = 1.500.000.000 − 330.000.000", "Rp1.170.000.000"], ["Tambahan BPT = 10% × Rp1.170.000.000", "Rp117.000.000"], ["Cek: BPT baru 10% × (5.500.000.000 − 1.210.000.000) − 312.000.000", "Rp117.000.000"]],
        mengapaSalah: {
          B: "Mengalikan tarif BPT dengan koreksi sebelum dikurangi tambahan PPh badan.",
          C: "Memakai tarif domestik 20% padahal Form DGT kantor pusat sah.",
          D: "Sifat final berarti BPT tidak dapat dikreditkan, bukan kebal terhadap koreksi; dasar BPT mengikuti PKP yang benar."
        },
        jebakan: "Setiap koreksi PKP BUT berdampak ganda: PPh badan dan PPh Pasal 26 ayat (4)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) dan ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 5 ayat (3) huruf b UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C9-135",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Hollis Equipment di Surabaya (kantor pusat di Negara Kordela yang belum mempunyai P3B dengan Indonesia) menyewakan dan menjual alat berat. Penghasilan neto fiskal 2025 dari kegiatan BUT sendiri (sudah dikoreksi) Rp3.000.000.000. Pada 2025 kantor pusat juga menjual langsung alat berat sejenis kepada PT Bumi Raya Tambang dengan laba neto Rp500.000.000 yang belum dimasukkan BUT. BUT mempunyai sisa kerugian fiskal tahun 2023 Rp400.000.000. Pada Juli 2026 BUT menyetor penyertaan modal Rp1.000.000.000 pada PT Hollis Rental Indonesia yang sudah berdiri, tidak akan dialihkan sedikitnya 3 tahun, dan diberitahukan bersama SPT Tahunan 2025; sisa laba tidak ditanamkan kembali. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp405.600.000", B: "Rp546.000.000", C: "Rp483.600.000", D: "Rp283.600.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Laba penjualan alat berat sejenis oleh kantor pusat masuk penghasilan BUT (force of attraction, tanpa P3B), kerugian 2023 dikompensasikan, lalu PPh badan 22%. Penyertaan Rp1.000.000.000 pada perusahaan yang sudah berdiri memenuhi bentuk, waktu, dan masa tidak dialihkan 3 tahun, tetapi hanya sebagian dari PKP sesudah PPh; karena pengecualian hanya bila seluruhnya ditanamkan kembali, BPT 20% dikenakan atas seluruh Rp2.418.000.000.",
        jejakHitung: [
          ["PKP = 3.000.000.000 + 500.000.000 − 400.000.000", "Rp3.100.000.000"],
          ["PPh badan 22%", "Rp682.000.000"],
          ["PKP sesudah PPh", "Rp2.418.000.000"],
          ["Penanaman kembali (penyertaan)", "Rp1.000.000.000 (tidak seluruhnya)"],
          ["BPT = 20% × Rp2.418.000.000", "Rp483.600.000"]
        ],
        mengapaSalah: {
          A: "Lupa memasukkan laba force of attraction Rp500.000.000 ke PKP BUT (20% × Rp2.028.000.000).",
          B: "Lupa mengompensasikan kerugian fiskal 2023 sebelum menghitung PPh badan dan BPT (20% × Rp2.730.000.000).",
          D: "Mengurangkan penyertaan Rp1.000.000.000 dari dasar BPT (20% × Rp1.418.000.000); penanaman kembali sebagian tidak mengurangi dasar BPT."
        },
        jebakan: "Force of attraction menaikkan PPh badan sekaligus dasar BPT. Penanaman kembali yang sah tetapi hanya sebagian tidak mengurangi dasar BPT; penyertaan pada perusahaan yang sudah berdiri harus dipertahankan 3 tahun."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 6 ayat (2) dan Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-136",
      topik: "C9.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Teralis Engineering (kantor pusat di negara yang belum mempunyai P3B dengan Indonesia) mempunyai PKP sesudah PPh tahun 2025 Rp5.000.000.000. Rencana yang diberitahukan bersama SPT Tahunan 2025: (1) membeli crane Rp1.500.000.000 pada Juni 2026 untuk dipakai BUT, tetapi direncanakan dijual kembali pada Agustus 2027; (2) menyetor modal Rp2.000.000.000 sebagai pendiri PT Teralis Fabrikasi Indonesia pada Oktober 2026 dan mempertahankan sahamnya paling sedikit 3 tahun; (3) membeli lisensi perangkat lunak desain (aktiva tidak berwujud) Rp500.000.000 pada Desember 2026 untuk dipakai BUT selama 5 tahun; (4) membeli saham perusahaan terbuka di Bursa Efek Indonesia Rp1.000.000.000 pada September 2026 untuk dijual dalam 6 bulan. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.000.000.000", B: "Nihil", C: "Rp500.000.000", D: "Rp300.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian BPT hanya diberikan bila seluruh PKP sesudah PPh (Rp5.000.000.000) ditanamkan kembali dan setiap penanaman memenuhi syarat. Rencana BUT memang berjumlah Rp5.000.000.000, tetapi crane akan dijual kurang dari 3 tahun sejak perolehan (Pasal 2 ayat (4) PMK 14/PMK.03/2011) dan saham bursa, yaitu penyertaan pada perusahaan yang sudah berdiri, akan dijual kurang dari 3 tahun sejak penyertaan (Pasal 2 ayat (3)). Karena tidak seluruh laba ditanamkan kembali secara sah, BPT 20% dikenakan atas seluruh Rp5.000.000.000.",
        jejakHitung: [
          ["Penanaman kembali yang memenuhi syarat = 2.000.000.000 + 500.000.000", "Rp2.500.000.000 (tidak seluruhnya)"],
          ["Dasar BPT = seluruh PKP sesudah PPh", "Rp5.000.000.000"],
          ["BPT = 20% × Rp5.000.000.000", "Rp1.000.000.000"]
        ],
        mengapaSalah: {
          B: "Menganggap semua rencana sah sehingga seluruh laba dianggap ditanamkan kembali; crane dan saham bursa akan dialihkan sebelum 3 tahun.",
          C: "Mengurangkan penyertaan pendiri dan lisensi (Rp2.500.000.000) dari dasar BPT: 20% × Rp2.500.000.000; penanaman kembali sebagian tidak mengurangi dasar BPT.",
          D: "Ikut mengurangkan saham bursa yang akan dijual dalam 6 bulan dan memakai pengurangan sebagian: 20% × (5.000.000.000 − 3.500.000.000)."
        },
        jebakan: "Masa tidak dialihkan berbeda per bentuk: 2 tahun sejak perusahaan baru berproduksi komersial untuk penyertaan sebagai pendiri, 3 tahun untuk penyertaan pada perusahaan yang sudah berdiri, aktiva tetap, dan aktiva tidak berwujud. Satu penanaman yang gugur membuat seluruh laba terkena BPT."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) dan Pasal 2 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-137", topik: "C9.3", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C9-11", laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal ini dan soal berikutnya: PT Mahesa Teknik (WP badan dalam negeri, bukan perseroan terbuka; peredaran bruto 2025 Rp310 miliar; pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) mempunyai penghasilan neto dalam negeri 2025 Rp9.000.000.000 dan memperoleh: (1) royalti USD 200.000 dari Valtek AG di Negara Valoria (P3B membatasi royalti 10%), diterima Rabu 17 September 2025 setelah dipotong pajak Valoria 15% (USD 30.000); kurs tengah BI 17 September 2025 Rp16.300/USD; kurs KMK 17–23 September 2025 Rp16.250/USD; (2) bunga EUR 150.000 dari Corvia Holding di Negara Corvia (tanpa P3B), diterima Rabu 22 Oktober 2025 setelah dipotong pajak Corvia 30% (EUR 45.000); kurs tengah BI 22 Oktober 2025 Rp17.600/EUR; kurs KMK 22–28 Oktober 2025 Rp17.500/EUR; (3) rugi cabang di Negara Selandra Rp800.000.000. Penghasilan luar negeri dicatat bruto (sebelum pajak luar negeri) dengan kurs pembukuan. PPh terutang PT Mahesa Teknik tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.278.000.000", B: "Rp3.102.000.000", C: "Rp3.272.500.000", D: "Rp2.996.180.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penghasilan luar negeri masuk PKP secara bruto (sebelum dipotong pajak luar negeri) sebesar nilai pembukuan, dan rugi cabang Selandra tidak digabungkan. Peredaran di atas Rp50 miliar sehingga tarif 22% penuh.",
        jejakHitung: [["Royalti = USD 200.000 × Rp16.300", "Rp3.260.000.000"], ["Bunga = EUR 150.000 × Rp17.600", "Rp2.640.000.000"], ["PKP = 9.000.000.000 + 3.260.000.000 + 2.640.000.000 (rugi Selandra tidak digabung)", "Rp14.900.000.000"], ["PPh terutang 22%", "Rp3.278.000.000"]],
        mengapaSalah: {
          B: "Menggabungkan rugi cabang Selandra Rp800.000.000 sehingga PKP Rp14.100.000.000.",
          C: "Mengonversi penghasilan dengan kurs KMK (PKP Rp14.875.000.000); kurs KMK dipakai untuk angka pajak, bukan untuk penghasilan yang dibukukan.",
          D: "Memasukkan penghasilan neto setelah pajak luar negeri (USD 170.000 dan EUR 105.000), padahal yang masuk PKP adalah penghasilan bruto."
        },
        jebakan: "Penghasilan luar negeri digross-up ke bruto, dikonversi dengan kurs pembukuan, dan rugi luar negeri tidak dikurangkan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (rugi luar negeri tidak digabung)" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "C9-138",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C9-11",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data PT Mahesa Teknik 2025 (PKP Rp14.900.000.000; PPh terutang Rp3.278.000.000; royalti Valoria bruto Rp3.260.000.000 dengan pajak Valoria dipotong 15% = USD 30.000 padahal P3B membatasi 10%, kurs KMK 17–23 September 2025 Rp16.250/USD dan kurs tengah BI Rp16.300/USD; bunga Corvia bruto Rp2.640.000.000 dengan pajak Corvia 30% = EUR 45.000, kurs KMK 22–28 Oktober 2025 Rp17.500/EUR). Kebijakan konversi yang dipakai: pajak luar negeri dikonversi dengan kurs KMK yang berlaku pada tanggal pajak itu dipotong. Kredit PPh Pasal 24 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp906.800.000", B: "Rp905.800.000", C: "Rp1.068.300.000", D: "Rp1.112.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kredit dihitung per jenis penghasilan untuk tiap negara: nilai terkecil antara pajak luar negeri yang sesuai P3B dan batas maksimum. Pajak Valoria atas royalti yang dapat diperhitungkan hanya sebesar tarif P3B 10% (USD 20.000), di bawah batasnya. Pajak Corvia atas bunga Rp787.500.000 melebihi batas Rp580.800.000 sehingga dikreditkan sebatas batas; kelebihannya tidak dapat diperhitungkan, dibiayakan, atau direstitusi (Pasal 7 PMK 192/PMK.03/2018).",
        jejakHitung: [
          ["Valoria: pajak sesuai P3B = 10% × USD 200.000 × Rp16.250", "Rp325.000.000"],
          ["Valoria: batas = 3.260/14.900 × Rp3.278.000.000", "Rp717.200.000 → kredit Rp325.000.000"],
          ["Corvia: pajak = EUR 45.000 × Rp17.500", "Rp787.500.000"],
          ["Corvia: batas = 2.640/14.900 × Rp3.278.000.000", "Rp580.800.000 → kredit Rp580.800.000"],
          ["Total kredit PPh Pasal 24", "Rp905.800.000"]
        ],
        mengapaSalah: {
          A: "Mengonversi pajak Valoria dengan kurs tengah BI (USD 20.000 × Rp16.300 = Rp326.000.000), bertentangan dengan kebijakan konversi pajak luar negeri.",
          C: "Mengkreditkan seluruh potongan Valoria 15% (Rp487.500.000); kelebihan di atas tarif P3B harus dimintakan kembali ke Valoria, bukan dikreditkan.",
          D: "Tidak menerapkan batas maksimum untuk Corvia sehingga seluruh Rp787.500.000 dikreditkan."
        },
        jebakan: "Dua pembatas berbeda: tarif P3B membatasi pajak Valoria, batas maksimum Pasal 24 membatasi pajak Corvia."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3), Pasal 6 ayat (2) dan ayat (4), Pasal 7, serta Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-139",
      topik: "C9.4",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Garnet Rekayasa Indonesia (PMA) 100% sahamnya dimiliki Halvorsen Engineering AS di Negara Nordvik dan hanya memberikan jasa desain teknik kepada Halvorsen dengan imbalan biaya ditambah markup 4%. Tahun pajak 2025: total biaya operasional Rp60.000.000.000 dan pendapatan jasa dari Halvorsen Rp62.400.000.000 (peredaran bruto di atas Rp50 miliar, sehingga fasilitas Pasal 31E tidak berlaku). Analisis kesebandingan dengan metode TNMM memakai indikator net cost plus; rentang interkuartil pembanding 7%–11% dengan median 9%. Koreksi primer atas penghasilan dan tambahan PPh badan (tarif 22%, tanpa Pasal 31E) masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi Rp1.800.000.000; tambahan PPh Rp396.000.000", B: "Koreksi Rp3.000.000.000; tambahan PPh Rp660.000.000", C: "Koreksi Rp4.200.000.000; tambahan PPh Rp924.000.000", D: "Koreksi Rp5.400.000.000; tambahan PPh Rp1.188.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Markup 4% berada di luar rentang interkuartil 7%–11% sehingga tidak wajar. Karena data tidak menunjukkan titik yang paling tepat di dalam rentang, markup wajar ditentukan pada median 9% (Pasal 12 ayat (7) huruf c PMK 172/2023). Pendapatan wajar = biaya × 109% = Rp65.400.000.000; koreksi primer = Rp65.400.000.000 − Rp62.400.000.000. Peredaran bruto melebihi Rp50 miliar sehingga tarif penuh 22% tanpa Pasal 31E.",
        jejakHitung: [
          ["Pendapatan wajar = 60.000.000.000 × 109%", "Rp65.400.000.000"],
          ["Koreksi primer = 65.400.000.000 − 62.400.000.000", "Rp3.000.000.000"],
          ["Tambahan PPh badan = 22% × Rp3.000.000.000", "Rp660.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke kuartil bawah 7%; tanpa dasar titik paling tepat, penyesuaian dilakukan ke median.",
          C: "Menyesuaikan ke kuartil atas 11% (Rp66.600.000.000 − Rp62.400.000.000).",
          D: "Menambahkan 9% × Rp60.000.000.000 sebagai koreksi tanpa memperhitungkan markup 4% yang sudah dibebankan."
        },
        jebakan: "Koreksi TNMM = laba wajar pada median dikurangi laba yang sudah dilaporkan, bukan seluruh markup median. Median dipakai bila titik paling tepat di dalam rentang tidak dapat ditentukan."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 ayat (5), Pasal 12 ayat (6) huruf b dan ayat (7) huruf c PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C9-140", topik: "C9.4", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 18 ayat (4) UU PPh (parafrase): Hubungan istimewa dianggap ada apabila (a) wajib pajak mempunyai penyertaan modal langsung atau tidak langsung paling rendah 25% pada wajib pajak lain, atau hubungan antara wajib pajak dengan penyertaan paling rendah 25% pada dua wajib pajak atau lebih; (b) wajib pajak menguasai wajib pajak lainnya atau dua atau lebih wajib pajak berada di bawah penguasaan yang sama, baik langsung maupun tidak langsung; atau (c) terdapat hubungan keluarga sedarah atau semenda dalam garis keturunan lurus dan/atau ke samping satu derajat. Penjelasannya: penguasaan dapat terjadi melalui manajemen atau penggunaan teknologi walaupun tidak terdapat hubungan kepemilikan.",
      stem: "Pada 2026 PT Sagara Logam (Indonesia) bertransaksi dengan empat pihak luar negeri: (1) Sirius Metals Ltd (Negara Kaldera) memiliki 20% saham PT Sagara, tetapi berdasarkan perjanjian pemegang saham berhak mengangkat seluruh direksi dan menentukan kebijakan operasional PT Sagara; (2) Kaldera Commerce Bank memberi pinjaman Rp50.000.000.000 tanpa kepemilikan saham dan tanpa wakil di manajemen; (3) Brandt Trading GmbH (Negara Teutonia), yang 40% sahamnya dimiliki Tuan Brandt, sedangkan Tuan Brandt juga memiliki 30% saham PT Sagara; (4) Tranz Holdings (Negara Lumeria) yang memiliki 60% saham Delta Pte. Ltd., sedangkan Delta memiliki 30% saham PT Sagara. Tidak ada hubungan penguasaan lain selain yang disebut. Berdasarkan kutipan tersebut, pihak yang mempunyai hubungan istimewa dengan PT Sagara Logam adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (3)", B: "(3) saja", C: "(1), (3), dan (4)", D: "(1), (2), dan (3)" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sirius berhubungan istimewa melalui penguasaan manajemen walaupun kepemilikannya hanya 20%. PT Sagara dan Brandt Trading sama-sama dimiliki paling rendah 25% oleh Tuan Brandt. Kepemilikan tidak langsung Tranz atas PT Sagara hanya 60% × 30% = 18%, di bawah 25%. Pemberi pinjaman tanpa kepemilikan atau penguasaan tidak berhubungan istimewa.",
        jejakHitung: [["Tranz → PT Sagara (tidak langsung) = 60% × 30%", "18% < 25%"], ["Tuan Brandt: 30% di PT Sagara dan 40% di Brandt Trading", "keduanya ≥ 25% → hubungan istimewa"]],
        mengapaSalah: {
          B: "Melupakan hubungan istimewa karena penguasaan melalui manajemen, yang tidak memerlukan kepemilikan 25%.",
          C: "Menganggap Tranz berhubungan istimewa; kepemilikan tidak langsung dihitung berjenjang dan hanya 18%.",
          D: "Pinjaman besar tanpa kepemilikan atau penguasaan manajemen tidak menimbulkan hubungan istimewa."
        },
        jebakan: "Hubungan istimewa bisa timbul tanpa kepemilikan 25% (penguasaan), dan kepemilikan tidak langsung harus dikalikan berjenjang."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (4) UU PPh dan penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (hubungan istimewa dan PKKU)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C9-141", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "RUPS PT Rimba Kertas Nusantara (PMA; pembukuan Rupiah) pada Rabu, 17 Juni 2026 menetapkan dividen tunai USD 400.000 yang pada hari itu juga dicatat sebagai utang dividen, dan dibayar pada Rabu, 1 Juli 2026. Pemegang saham: Kanto Paper Co., badan di Negara Nippora (70%), dan Tuan Hiroshi Takeda, orang pribadi penduduk Negara Nippora (30%). P3B Indonesia–Nippora membatasi pajak dividen 10% bila penerimanya badan yang memiliki paling sedikit 25% saham dan 15% dalam hal lainnya. Keduanya pemilik manfaat, Form DGT keduanya sah dan terekam di Coretax sebelum RUPS, dan tidak ada yang mempunyai BUT di Indonesia. Kurs KMK berlaku 17–23 Juni 2026 Rp16.280/USD; kurs tengah BI 17 Juni 2026 Rp16.310/USD; kurs KMK berlaku 1–7 Juli 2026 Rp16.350/USD. Jumlah PPh Pasal 26 yang wajib dipotong PT Rimba Kertas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp651.200.000", B: "Rp752.100.000", C: "Rp846.560.000", D: "Rp748.880.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Tarif 10% hanya untuk penerima badan dengan kepemilikan paling sedikit 25%; Tuan Takeda orang pribadi sehingga memakai 15% (tetap tarif P3B karena Form DGT sah). PPh Pasal 26 terutang saat dividen disediakan untuk dibayarkan (dicatat sebagai utang pada 17 Juni 2026), sehingga DPP dikonversi dengan kurs KMK 17–23 Juni 2026.",
        jejakHitung: [["Kanto: 10% × 70% × USD 400.000", "USD 28.000"], ["Takeda: 15% × 30% × USD 400.000", "USD 18.000"], ["Jumlah", "USD 46.000"], ["Konversi kurs KMK 17–23 Juni 2026: USD 46.000 × Rp16.280", "Rp748.880.000"]],
        mengapaSalah: {
          A: "Memakai 10% untuk kedua pemegang saham; tarif substansial P3B ini hanya untuk penerima badan.",
          B: "Memakai kurs KMK minggu pembayaran; saat terutang sudah terjadi ketika dividen dicatat sebagai utang pada 17 Juni 2026.",
          C: "Memakai tarif domestik 20% untuk Tuan Takeda seolah-olah P3B tidak berlaku bagi orang pribadi."
        },
        jebakan: "Baca syarat tarif P3B (jenis penerima dan persentase kepemilikan), lalu kunci kurs pada saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C9-142", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "RUPS PT Andara Kimia Indonesia (PMA; pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) pada Rabu, 10 Juni 2026 menetapkan dividen USD 500.000 untuk Hallberg Chemicals BV di Negara Nedera (kepemilikan 90%; P3B dividen 10%; Form DGT sah; pemilik manfaat). Pada tanggal itu seluruh USD 500.000 dicatat sebagai utang dividen dengan kurs tengah BI Rp16.300/USD. PPh Pasal 26 dihitung dengan kurs KMK berlaku 10–16 Juni 2026 Rp16.250/USD dan dicatat sebagai utang PPh dalam Rupiah. Pada Rabu, 8 Juli 2026 dividen neto USD 450.000 ditransfer dengan kurs tengah BI Rp16.420/USD. Jumlah bersih selisih kurs yang diakui atas transaksi dividen tersebut sampai pembayaran adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rugi Rp54.000.000", B: "Rugi Rp60.000.000", C: "Rugi Rp51.500.000", D: "Tidak ada selisih kurs, karena utang dividen dilunasi sebesar nilai tercatatnya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Utang dividen USD 500.000 tercatat Rp8.150.000.000. Bagian PPh USD 50.000 (nilai buku Rp815.000.000) diselesaikan dengan utang PPh Rupiah berdasarkan kurs KMK Rp812.500.000, sehingga laba selisih kurs Rp2.500.000. Bagian neto USD 450.000 dibayar dengan kurs Rp16.420, menimbulkan rugi Rp54.000.000. Selisih bersih rugi Rp51.500.000.",
        jejakHitung: [["Utang dividen = USD 500.000 × Rp16.300", "Rp8.150.000.000"], ["Utang PPh 26 = 10% × USD 500.000 × Rp16.250 (kurs KMK)", "Rp812.500.000"], ["Kas = USD 450.000 × Rp16.420", "Rp7.389.000.000"], ["Selisih = 8.150.000.000 − 812.500.000 − 7.389.000.000", "−Rp51.500.000 (rugi)"], ["Rincian: laba Rp2.500.000 bagian PPh; rugi Rp54.000.000 bagian neto", "rugi bersih Rp51.500.000"]],
        mengapaSalah: {
          A: "Hanya menghitung rugi atas bagian neto USD 450.000 dan melupakan laba Rp2.500.000 dari bagian PPh yang dikonversi dengan kurs KMK.",
          B: "Menganggap seluruh USD 500.000 dilunasi dengan kurs pembayaran, padahal bagian PPh diselesaikan dengan utang pajak Rupiah berkurs KMK.",
          D: "Utang valas yang dilunasi dengan kurs berbeda dari kurs pencatatan selalu menimbulkan selisih kurs."
        },
        jebakan: "Selisih kurs muncul di dua tempat: kurs KMK versus kurs buku pada bagian PPh, dan kurs buku versus kurs bayar pada bagian neto."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan taat asas)" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C9-143",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-C9-12",
      laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal ini dan dua soal berikutnya: PT Kencana Mineral Nusantara adalah entitas induk utama grup PMN di Indonesia (pendapatan konsolidasi EUR 1,6 miliar setiap tahun sejak 2021; tahun buku kalender). PT Kencana memiliki 100% saham Selvia Holdings Ltd di Negara Selvia (tidak menerapkan IIR maupun pajak minimum domestik). Selvia Holdings memiliki 60% saham Maravia Copper Ltd (40% sisanya dimiliki investor di luar grup) dan 100% saham Maravia Logistics Ltd; keduanya berkedudukan di Negara Maravia, yang tidak menerapkan pajak minimum domestik. Data GloBE tahun pajak 2025 yurisdiksi Maravia: Maravia Copper laba GloBE Rp150.000.000.000 dengan pajak tercakup yang disesuaikan Rp9.000.000.000; Maravia Logistics rugi GloBE Rp30.000.000.000 dengan pajak tercakup Rp0. Tidak ada penyesuaian lain dan tidak ada safe harbour yang dapat dipakai. ETR yurisdiksi Maravia dan persentase pajak tambahan (top-up percentage) tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "ETR 6%; persentase top-up 9%", B: "ETR 5%; persentase top-up 10%", C: "ETR 7,5%; persentase top-up 7,5%", D: "ETR 7,5%; persentase top-up 15%" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "ETR dihitung per yurisdiksi: pajak tercakup seluruh entitas konstituen di Maravia (Rp9 miliar) dibagi laba GloBE neto yurisdiksi, yaitu laba Maravia Copper dikurangi rugi Maravia Logistics (Rp120 miliar). ETR 7,5%, sehingga persentase top-up = 15% − 7,5% = 7,5%.",
        jejakHitung: [
          ["Laba GloBE neto = 150.000.000.000 − 30.000.000.000", "Rp120.000.000.000"],
          ["Pajak tercakup yurisdiksi = 9.000.000.000 + 0", "Rp9.000.000.000"],
          ["ETR = 9 ÷ 120 miliar", "7,5%"],
          ["Persentase top-up = 15% − 7,5%", "7,5%"]
        ],
        mengapaSalah: {
          A: "Menghitung ETR per entitas (9 ÷ 150 = 6%); GloBE memblending seluruh entitas konstituen dalam satu yurisdiksi, termasuk yang rugi.",
          B: "Menjumlahkan nilai absolut laba dan rugi (9 ÷ 180); rugi GloBE justru mengurangi laba GloBE neto yurisdiksi.",
          D: "Persentase top-up adalah selisih 15% − ETR, bukan 15% penuh."
        },
        jebakan: "Rugi entitas lain di yurisdiksi yang sama menurunkan laba GloBE neto dan menaikkan ETR yurisdiksi."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 32 dan 35, Pasal 5 ayat (1), dan Pasal 6 ayat (3) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-144",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C9-12",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Grup Kencana tahun pajak 2025 (yurisdiksi Maravia: laba GloBE neto Rp120.000.000.000; ETR 7,5%). Data substansi yurisdiksi Maravia: biaya gaji yang memenuhi syarat seluruhnya Rp25.000.000.000; nilai tercatat aset berwujud yang memenuhi syarat Maravia Copper Rp220.000.000.000 pada awal tahun dan Rp260.000.000.000 pada akhir tahun, Maravia Logistics Rp50.000.000.000 pada awal tahun dan Rp70.000.000.000 pada akhir tahun. Persentase transisi pengecualian berbasis substansi (SBIE) tahun 2025: 9,6% atas biaya gaji dan 7,6% atas aset berwujud. Pajak tambahan (top-up tax) yurisdiksi Maravia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.110.000.000", B: "Rp6.939.000.000", C: "Rp9.000.000.000", D: "Rp9.360.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SBIE aset memakai rata-rata nilai tercatat awal dan akhir tahun: (220 + 260)/2 + (50 + 70)/2 = Rp300 miliar. SBIE = 9,6% × Rp25 miliar + 7,6% × Rp300 miliar = Rp25,2 miliar; laba lebih = Rp120 miliar − Rp25,2 miliar = Rp94,8 miliar; pajak tambahan = 7,5% × laba lebih.",
        jejakHitung: [
          ["SBIE gaji = 9,6% × Rp25.000.000.000", "Rp2.400.000.000"],
          ["Rata-rata aset = (220 + 260)/2 + (50 + 70)/2 miliar", "Rp300.000.000.000"],
          ["SBIE aset = 7,6% × Rp300.000.000.000", "Rp22.800.000.000"],
          ["Laba lebih = 120.000.000.000 − 25.200.000.000", "Rp94.800.000.000"],
          ["Pajak tambahan = 7,5% × Rp94.800.000.000", "Rp7.110.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai nilai tercatat akhir tahun (Rp330 miliar) sehingga SBIE Rp27,48 miliar; yang dipakai rata-rata awal dan akhir tahun.",
          C: "Tidak mengurangkan SBIE: 7,5% × Rp120 miliar.",
          D: "Menghitung laba lebih dari laba Maravia Copper saja (Rp150 miliar − SBIE), padahal laba lebih dihitung dari laba GloBE neto yurisdiksi."
        },
        jebakan: "Aset berwujud SBIE dinilai dengan rata-rata awal dan akhir tahun, dan laba lebih dihitung dari laba neto yurisdiksi."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (4), Pasal 7 ayat (1) dan ayat (7), serta Pasal 8 ayat (5) dan ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-145",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C9-12",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data Grup Kencana tahun pajak 2025: pajak tambahan yurisdiksi Maravia Rp7.110.000.000; laba GloBE Maravia Copper Rp150.000.000.000 dan rugi GloBE Maravia Logistics Rp30.000.000.000. PT Kencana Mineral Nusantara (entitas induk utama di Indonesia) memiliki 100% Selvia Holdings, yang memiliki 60% Maravia Copper (40% dimiliki investor di luar grup) dan 100% Maravia Logistics. Selvia maupun Maravia tidak menerapkan IIR atau pajak minimum domestik. Pajak tambahan berdasarkan IIR yang terutang oleh PT Kencana Mineral Nusantara untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.110.000.000", B: "Rp4.266.000.000", C: "Rp3.555.000.000", D: "Rp0, karena PT Kencana tidak memiliki langsung saham entitas di Maravia dan IIR hanya berlaku atas kepemilikan langsung" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak tambahan yurisdiksi dialokasikan ke entitas konstituen secara proporsional dengan laba GloBE masing-masing; entitas yang rugi tidak menerima alokasi, sehingga seluruh Rp7,11 miliar dialokasikan ke Maravia Copper. PT Kencana memungut IIR sebesar porsinya atas Maravia Copper (100% × 60% = 60%), karena entitas induk antara di Selvia tidak menerapkan IIR.",
        jejakHitung: [
          ["Alokasi ke Maravia Copper = 7.110.000.000 × 150/150", "Rp7.110.000.000"],
          ["Alokasi ke Maravia Logistics (rugi GloBE)", "Rp0"],
          ["Porsi PT Kencana = 100% × 60%", "60%"],
          ["IIR = 60% × Rp7.110.000.000", "Rp4.266.000.000"]
        ],
        mengapaSalah: {
          A: "Mengabaikan porsi 40% investor di luar grup; IIR hanya sebesar bagian entitas induk.",
          C: "Membagi pajak tambahan dengan bobot 150 : 30 seolah-olah entitas yang rugi ikut menerima alokasi (7,11 miliar × 150/180 × 60%).",
          D: "IIR berlaku atas kepemilikan langsung maupun tidak langsung; entitas induk utama menerapkan IIR atas bagiannya melalui Selvia Holdings."
        },
        jebakan: "Alokasi hanya ke entitas yang berlaba GloBE, lalu dikalikan porsi kepemilikan (langsung atau tidak langsung) entitas induk."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (8) dan ayat (9), Pasal 14 ayat (1) dan ayat (2), serta Pasal 15 ayat (1) dan ayat (2) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-146",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-C9-13",
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 34 ayat (1) PMK 136/2024: Jumlah penyesuaian pajak tangguhan sebagaimana dimaksud dalam Pasal 30 ayat (1) huruf b pada suatu Entitas Konstituen untuk suatu Tahun Pajak dihitung dengan ketentuan sebagai berikut: a. sebesar Beban Pajak Tangguhan yang diakui dalam laporan keuangan dalam hal tarif pajak penghasilan yang berlaku lebih rendah dari Tarif Minimum; atau b. sebesar Beban Pajak Tangguhan yang dihitung kembali (recast) pada Tarif Minimum dalam hal tarif pajak penghasilan yang berlaku lebih tinggi dari Tarif Minimum. (Tarif Minimum ditetapkan 15%, Pasal 1 angka 33.)",
      stem: "Data untuk soal ini dan dua soal berikutnya: PT Sentosa Nikel Indonesia adalah satu-satunya entitas konstituen Grup Sentosa di Indonesia (entitas induk utama Sentosa Resources Plc di Negara Albavia yang menerapkan IIR; pendapatan konsolidasi EUR 2,1 miliar setiap tahun sejak 2021) dan memperoleh tax holiday pengurangan PPh badan 50%. Data tahun pajak 2025: laba GloBE Rp240.000.000.000; PPh badan tahun berjalan setelah pengurangan 50% Rp13.200.000.000; beban pajak tangguhan Rp13.200.000.000 dari kenaikan liabilitas pajak tangguhan atas perbedaan temporer Rp60.000.000.000 akibat penyusutan fiskal dipercepat mesin smelter (diukur dengan tarif 22%); PPN yang disetor Rp18.000.000.000. Tidak ada penyesuaian lain. Berdasarkan kutipan tersebut, ETR dan persentase pajak tambahan yurisdiksi Indonesia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "ETR 5,5%; persentase top-up 9,5%", B: "ETR 11%; persentase top-up 4%", C: "ETR 3,75%; persentase top-up 11,25%", D: "ETR 9,25%; persentase top-up 5,75%" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Pajak tercakup = PPh badan tahun berjalan Rp13,2 miliar + beban pajak tangguhan yang dihitung ulang dengan 15% (15% × Rp60 miliar = Rp9 miliar) = Rp22,2 miliar. ETR = 22,2 ÷ 240 = 9,25%; persentase top-up = 15% − 9,25% = 5,75%. PPN bukan pajak tercakup.",
        jejakHitung: [
          ["Pajak tangguhan dihitung ulang = 15% × Rp60.000.000.000", "Rp9.000.000.000"],
          ["Pajak tercakup = 13.200.000.000 + 9.000.000.000", "Rp22.200.000.000"],
          ["ETR = 22,2 ÷ 240 miliar", "9,25%"],
          ["Persentase top-up = 15% − 9,25%", "5,75%"]
        ],
        mengapaSalah: {
          A: "Mengabaikan pajak tangguhan sehingga hanya PPh tahun berjalan yang dihitung (13,2 ÷ 240).",
          B: "Memasukkan beban pajak tangguhan bertarif 22% tanpa dihitung ulang ke 15% (26,4 ÷ 240).",
          C: "Hanya memperhitungkan pajak tangguhan yang dihitung ulang dan melupakan PPh badan tahun berjalan (9 ÷ 240)."
        },
        jebakan: "Pajak tangguhan masuk pajak tercakup, tetapi dibatasi tarif 15%; PPN tetap bukan pajak tercakup."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 33, Pasal 30 ayat (1), Pasal 32 ayat (1), dan Pasal 34 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday)" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-147",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C9-13",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data PT Sentosa Nikel Indonesia tahun pajak 2025 (laba GloBE Rp240.000.000.000; ETR yurisdiksi Indonesia 9,25% setelah pajak tangguhan dihitung ulang 15%). Data substansi: gaji pegawai Rp27.000.000.000 ditambah iuran pensiun dan jaminan sosial yang ditanggung pemberi kerja Rp3.000.000.000; rata-rata nilai tercatat mesin dan bangunan smelter Rp400.000.000.000; aset hak guna (right-of-use) gudang yang disewa Rp50.000.000.000; gedung kantor di Kendari yang seluruhnya disewakan kepada pihak lain sebagai properti investasi Rp80.000.000.000; persediaan bijih nikel Rp120.000.000.000. Persentase transisi SBIE tahun 2025: biaya gaji 9,6% dan aset berwujud 7,6%. Indonesia menerapkan DMTT yang memenuhi syarat dan safe harbour tidak dapat dipakai. DMTT PT Sentosa Nikel Indonesia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp11.318.300.000", B: "Rp11.667.900.000", C: "Rp13.800.000.000", D: "Rp19.277.400.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Biaya gaji yang memenuhi syarat mencakup iuran pensiun dan iuran jaminan sosial yang ditanggung pemberi kerja (Rp30 miliar). Harta berwujud yang memenuhi syarat: mesin dan bangunan (aset tetap) serta aset hak-guna (Rp450 miliar); properti investasi dikecualikan dan persediaan tidak termasuk. SBIE Rp37,08 miliar; laba ekses Rp202,92 miliar; DMTT = 5,75% × laba ekses.",
        jejakHitung: [
          ["SBIE gaji = 9,6% × Rp30.000.000.000", "Rp2.880.000.000"],
          ["SBIE aset = 7,6% × (400 + 50) miliar", "Rp34.200.000.000"],
          ["SBIE total", "Rp37.080.000.000"],
          ["Laba lebih = 240.000.000.000 − 37.080.000.000", "Rp202.920.000.000"],
          ["DMTT = 5,75% × Rp202.920.000.000", "Rp11.667.900.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan gedung yang disewakan sebagai properti investasi (Rp80 miliar) ke aset berwujud SBIE.",
          C: "Tidak mengurangkan SBIE: 5,75% × Rp240 miliar.",
          D: "Memakai persentase top-up 9,5% dari ETR tanpa pajak tangguhan (5,5%)."
        },
        jebakan: "Yang dikecualikan dari harta berwujud SBIE adalah properti investasi (termasuk tanah atau bangunan), aset tidak lancar yang dikuasai untuk dijual, aset yang disewakan secara sewa pembiayaan, dan harta pelayaran internasional; persediaan tidak termasuk daftar harta berwujud yang memenuhi syarat. Aset hak-guna dan iuran pensiun serta jaminan sosial pemberi kerja termasuk."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (6), Pasal 7 ayat (3) dan ayat (7), Pasal 8 ayat (2), ayat (4), ayat (5), dan ayat (6), serta Pasal 53 PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "PER-6/PJ/2026 (aturan pelaksana)", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C9-148",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 3,
      kasusId: "V-C9-13",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan data PT Sentosa Nikel Indonesia: dalam pajak tercakup tahun pajak 2025 terdapat penyesuaian pajak tangguhan Rp9.000.000.000 (setelah dihitung ulang 15%) yang seluruhnya berasal dari perbedaan temporer penyusutan fiskal dipercepat atas mesin smelter. Konsultan grup memperingatkan direksi: ‘Bila liabilitas pajak tangguhan itu tidak berbalik dalam 5 tahun pajak berikutnya, jumlahnya ditarik kembali (recapture), ETR 2025 dihitung ulang, dan DMTT tambahan akan timbul.’ Penilaian yang paling tepat atas peringatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tepat; setiap liabilitas pajak tangguhan yang tidak berbalik dalam 5 tahun pajak berikutnya ditarik kembali tanpa pengecualian", B: "Tidak tepat; pajak tangguhan sama sekali tidak diperhitungkan dalam pajak tercakup GloBE, sehingga tidak ada yang perlu ditarik kembali", C: "Tidak tepat untuk kasus ini; liabilitas pajak tangguhan dari penyusutan aset berwujud termasuk akrual yang dikecualikan dari recapture, walaupun aturan 5 tahun berlaku bagi liabilitas pajak tangguhan lain", D: "Tepat, tetapi jangka waktu recapture adalah 3 tahun pajak berikutnya, bukan 5 tahun" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Liabilitas pajak tangguhan yang tidak dibayar atau berbalik dalam 5 tahun pajak berikutnya ditarik kembali (recapture), kecuali kategori akrual yang dikecualikan, antara lain penyusutan (cost recovery) aset berwujud. Karena seluruh Rp9 miliar berasal dari penyusutan dipercepat mesin smelter, recapture tidak berlaku.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mengabaikan daftar akrual yang dikecualikan dari recapture (recapture exception accrual), termasuk penyusutan aset berwujud.",
          B: "Pajak tangguhan diperhitungkan dalam pajak tercakup (dihitung ulang 15%); justru karena itu ada aturan recapture.",
          D: "Jangka waktu recapture adalah 5 tahun pajak berikutnya."
        },
        jebakan: "Aturan recapture 5 tahun punya pengecualian; penyusutan aset berwujud adalah pengecualian terpenting bagi industri padat modal."
      },
      dasarHukum: [{ pasal: "Pasal 34 ayat (5) dan ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-149",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Wahana Pangan Nusantara Tbk adalah entitas induk utama grup PMN di Indonesia; laporan keuangan konsolidasinya disajikan dalam Rupiah dengan tahun buku kalender. Pendapatan konsolidasi: 2022 Rp12,0 triliun; 2023 Rp12,6 triliun; 2024 Rp12,7 triliun; 2025 Rp12,9 triliun. Untuk soal ini, ambang EUR 750 juta dikonversi ke Rupiah dengan kurs rata-rata EUR bulan Desember tahun sebelum tiap tahun yang diuji: Desember 2021 Rp16.150; Desember 2022 Rp16.600; Desember 2023 Rp17.050; Desember 2024 Rp16.900. Kurs rata-rata Desember 2025 Rp19.300. Status grup terhadap pajak minimum global (PMK 136/2024) untuk tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masuk cakupan, karena ambang terlampaui pada 2023 dan 2025, yaitu 2 dari 4 tahun pajak sebelumnya", B: "Tidak masuk cakupan, karena dengan kurs Desember 2025 ambang menjadi Rp14,475 triliun dan tidak pernah terlampaui", C: "Masuk cakupan, karena pendapatan konsolidasi setiap tahun melebihi Rp11 triliun", D: "Tidak masuk cakupan, karena ambang harus terlampaui pada 2 tahun pajak berturut-turut" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Untuk tahun pajak 2026 diuji tahun 2022–2025, masing-masing dibandingkan dengan ambang yang dikonversi dengan kurs yang ditentukan. Ambang terlampaui pada 2023 (Rp12,6 T ≥ Rp12,45 T) dan 2025 (Rp12,9 T ≥ Rp12,675 T); tidak perlu berturut-turut.",
        jejakHitung: [
          ["2022: ambang EUR 750 juta × Rp16.150 = Rp12,1125 T", "Rp12,0 T < ambang"],
          ["2023: ambang EUR 750 juta × Rp16.600 = Rp12,45 T", "Rp12,6 T ≥ ambang"],
          ["2024: ambang EUR 750 juta × Rp17.050 = Rp12,7875 T", "Rp12,7 T < ambang"],
          ["2025: ambang EUR 750 juta × Rp16.900 = Rp12,675 T", "Rp12,9 T ≥ ambang"],
          ["Jumlah tahun terlampaui", "2 dari 4 → masuk cakupan"]
        ],
        mengapaSalah: {
          B: "Memakai satu kurs terbaru (Desember 2025) untuk semua tahun, bertentangan dengan dasar konversi yang ditetapkan untuk tiap tahun yang diuji.",
          C: "Rp11 triliun adalah ambang Laporan per Negara (CbCR) PMK 172/2023, bukan ambang pajak minimum global.",
          D: "Uji 2 dari 4 tahun tidak mensyaratkan tahun berturut-turut."
        },
        jebakan: "Ambang GloBE dalam euro; bagi grup yang melapor dalam Rupiah konversi dilakukan per tahun yang diuji, dan Rp11 triliun hanya ambang CbCR."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1) dan Pasal 51 ayat (1) dan ayat (2) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 16 ayat (4) PMK 172/2023 (ambang laporan per negara Rp11 triliun)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-150",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Lembayung Kosmetik Tbk adalah entitas induk utama grup PMN di Indonesia (pendapatan konsolidasi EUR 1,2 miliar setiap tahun sejak 2021; laporan konsolidasi dalam Rupiah) dan memiliki 100% saham Lembayung Serandia Ltd, satu-satunya entitas konstituen grup di Negara Serandia (tidak menerapkan pajak minimum domestik). Data yurisdiksi Serandia — pendapatan GloBE: 2023 Rp150.000.000.000, 2024 Rp170.000.000.000, 2025 Rp160.000.000.000; laba GloBE: 2023 Rp12.000.000.000, 2024 Rp16.000.000.000, 2025 Rp20.000.000.000. Tahun pajak 2025: ETR yurisdiksi Serandia 4% dan SBIE Rp4.000.000.000. Untuk konversi ke euro gunakan EUR 1 = Rp18.000 untuk semua tahun. PT Lembayung memilih pengecualian de minimis untuk Serandia. Pajak tambahan berdasarkan IIR yang terutang oleh PT Lembayung atas Serandia untuk tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.760.000.000, karena laba GloBE 2025 setara EUR 1,11 juta tidak kurang dari EUR 1 juta", B: "Rp2.200.000.000, karena SBIE tidak dikurangkan dari laba yurisdiksi berpajak rendah", C: "Rp0, karena ETR Serandia dihitung bersama yurisdiksi Indonesia sehingga melampaui 15%", D: "Rp0, karena rata-rata tiga tahun pendapatan setara EUR 8,89 juta dan laba setara EUR 0,89 juta memenuhi de minimis yang dipilih" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Uji de minimis memakai rata-rata tahun berjalan dan dua tahun sebelumnya: pendapatan Rp160 miliar (EUR 8,89 juta < EUR 10 juta) dan laba Rp16 miliar (EUR 0,89 juta < EUR 1 juta). Kedua syarat terpenuhi dan grup memilihnya, sehingga pajak tambahan Serandia dianggap nol.",
        jejakHitung: [
          ["Rata-rata pendapatan = (150 + 170 + 160) ÷ 3 miliar", "Rp160.000.000.000 ≈ EUR 8,89 juta"],
          ["Rata-rata laba = (12 + 16 + 20) ÷ 3 miliar", "Rp16.000.000.000 ≈ EUR 0,89 juta"],
          ["Syarat < EUR 10 juta dan < EUR 1 juta", "terpenuhi"],
          ["Pembanding tanpa de minimis = (15% − 4%) × (20 − 4) miliar", "Rp1.760.000.000"],
          ["IIR tahun pajak 2025", "Rp0"]
        ],
        mengapaSalah: {
          A: "Menguji laba tahun berjalan saja; de minimis memakai rata-rata tiga tahun.",
          B: "Selain mengabaikan de minimis, juga tidak mengurangkan SBIE (11% × Rp20 miliar).",
          C: "ETR dihitung per yurisdiksi; laba Serandia tidak diblending dengan Indonesia."
        },
        jebakan: "De minimis diuji dengan rata-rata tiga tahun yang dikonversi ke euro, bukan angka tahun berjalan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), ayat (2), ayat (5), dan ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-151",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Corvan (entitas induk utama Corvan Inc. di Negara Ostrava; pendapatan konsolidasi EUR 4 miliar) mempunyai anak perusahaan di Negara Kalvia dengan ETR GloBE 5% untuk tahun pajak 2026. Ostrava tidak menerapkan IIR, Kalvia tidak menerapkan pajak minimum domestik, dan tidak ada entitas induk antara yang menerapkan IIR, sehingga pajak tambahan yurisdiksi Kalvia Rp36.000.000.000 dipungut melalui UTPR. Grup Corvan tidak memenuhi syarat pengecualian fase awal kegiatan internasional (Pasal 68 ayat (1) PMK 136/2024), tidak ada safe harbour yang dapat dipakai, dan tahun buku seluruh entitas grup adalah tahun kalender. Yurisdiksi yang menerapkan UTPR dan mempunyai entitas grup hanya Indonesia (PT Corvan Indonesia: 600 karyawan; nilai aset berwujud Rp600.000.000.000) dan Negara Belvia (900 karyawan; nilai aset berwujud Rp1.400.000.000.000). Bagian pajak tambahan UTPR yang dialokasikan ke Indonesia untuk tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.400.000.000", B: "Rp10.800.000.000", C: "Rp12.600.000.000", D: "Rp18.000.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Persentase UTPR = 50% × porsi jumlah karyawan + 50% × porsi nilai aset berwujud di antara yurisdiksi UTPR: 50% × 600/1.500 + 50% × 600/2.000 = 20% + 15% = 35%. UTPR berlaku di Indonesia mulai tahun pajak 2026.",
        jejakHitung: [
          ["Porsi karyawan = 600 ÷ (600 + 900)", "40%"],
          ["Porsi aset = 600 ÷ (600 + 1.400) miliar", "30%"],
          ["Persentase UTPR = 50% × 40% + 50% × 30%", "35%"],
          ["Alokasi = 35% × Rp36.000.000.000", "Rp12.600.000.000"]
        ],
        mengapaSalah: {
          A: "Hanya memakai porsi jumlah karyawan (40%).",
          B: "Hanya memakai porsi nilai aset berwujud (30%).",
          D: "Membagi rata antara dua yurisdiksi UTPR tanpa rumus karyawan dan aset."
        },
        jebakan: "Kunci alokasi UTPR berbobot sama antara jumlah pegawai dan nilai aset berwujud. Alokasi ke Indonesia menjadi 0 hanya bila grup memenuhi syarat fase awal kegiatan internasional (Pasal 68 ayat (1) PMK 136/2024); stem menyatakan syarat itu tidak dipenuhi."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) dan ayat (2) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 68 ayat (1) PMK 136/2024 (fase awal kegiatan internasional)", berlakuSejak: "2026-01-01" }, { pasal: "Pasal 73 PMK 136/2024 (UTPR berlaku)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C9-152",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Halvor (entitas induk utama Halvor SE di Negara Norvia yang menerapkan IIR sejak 2024; pendapatan konsolidasi EUR 3,5 miliar) memiliki 70% saham PT Halvor Indonesia Tbk; 30% sisanya dimiliki investor publik di luar grup. PT Halvor Indonesia Tbk memiliki 100% saham Halvor Lorvia Ltd di Negara Lorvia yang ETR GloBE-nya 4% untuk tahun pajak 2025; Lorvia tidak menerapkan pajak minimum domestik. Pernyataan yang paling tepat mengenai pemungutan pajak tambahan yurisdiksi Lorvia tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Hanya Halvor SE yang menerapkan IIR karena entitas induk utama selalu didahulukan (pendekatan top-down); PT Halvor Indonesia Tbk tidak memungut apa pun", B: "PT Halvor Indonesia Tbk menerapkan IIR atas 100% pajak tambahan Lorvia karena lebih dari 20% kepemilikannya dipegang pihak di luar grup; IIR Halvor SE dikurangi bagiannya atas IIR itu sehingga menjadi nihil", C: "PT Halvor Indonesia Tbk menerapkan IIR hanya atas 30% pajak tambahan Lorvia, sedangkan 70% dipungut Halvor SE", D: "Pajak tambahan Lorvia dipungut melalui UTPR oleh Indonesia karena entitas induk di Indonesia merupakan perseroan terbuka" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Entitas induk yang dimiliki sebagian (partially-owned parent entity/POPE) adalah entitas induk yang lebih dari 20% kepemilikannya dipegang pihak di luar grup. POPE menerapkan IIR walaupun entitas induk utama juga menerapkan IIR. PT Halvor Indonesia Tbk memiliki 100% Halvor Lorvia sehingga memungut 100% pajak tambahan; IIR Halvor SE atas bagian 70% dikurangi sebesar bagiannya atas IIR PT Halvor Indonesia Tbk.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pendekatan top-down dikecualikan untuk POPE; aturan ini mencegah bagian investor luar lolos dari IIR.",
          C: "Porsi POPE adalah kepemilikannya atas Halvor Lorvia (100%), bukan porsi investor luar atas POPE.",
          D: "UTPR adalah backstop atas pajak tambahan yang tidak dipungut melalui IIR, dan baru berlaku tahun pajak 2026; di sini IIR berlaku."
        },
        jebakan: "Kepemilikan pihak luar lebih dari 20% mengubah entitas induk antara menjadi pemungut IIR yang didahulukan."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 12, Pasal 14 ayat (2) huruf c, Pasal 15 ayat (1), dan Pasal 16 PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 73 PMK 136/2024 (UTPR mulai 1 Januari 2026)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-153",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Tambang Nusa Raya (Persero) adalah BUMN yang seluruh sahamnya dimiliki Negara Republik Indonesia dan menjalankan usaha pertambangan dan pengolahan mineral secara komersial; laporan keuangan konsolidasinya mencatat pendapatan EUR 3 miliar setiap tahun sejak 2021. Entitas yang dikonsolidasi: (1) PT Tambang Nusa Raya (Persero) sendiri sebagai entitas induk utama; (2) Dana Pensiun Tambang Nusa Raya, dana pensiun pemberi kerja yang mengelola program pensiun pegawai grup; (3) Yayasan Tambang Nusa Peduli, organisasi nirlaba di bidang pendidikan yang memenuhi syarat organisasi nirlaba dan penghasilannya tidak dibagikan kepada pihak mana pun; (4) Nusa Raya Marava Ltd, anak perusahaan smelter di Negara Marava. Entitas yang dikecualikan (excluded entity) dari penghitungan pajak minimum global adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) dan (3)", B: "(1), (2), dan (3), karena PT Tambang Nusa Raya (Persero) dimiliki penuh oleh negara sehingga berstatus entitas pemerintah", C: "(2) saja, karena yayasan yang dikonsolidasi tetap entitas konstituen", D: "Tidak ada, karena seluruh entitas yang dikonsolidasi adalah entitas konstituen" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dana pensiun dan organisasi nirlaba adalah entitas yang dikecualikan. Entitas pemerintah yang dikecualikan adalah bagian pemerintah yang menjalankan fungsi pemerintahan dan tidak menjalankan kegiatan usaha; BUMN Persero yang menjalankan usaha komersial bukan entitas pemerintah, sehingga PT Tambang Nusa Raya dan anak perusahaannya adalah entitas konstituen.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Kepemilikan negara 100% tidak menjadikan BUMN entitas pemerintah bila BUMN itu menjalankan usaha komersial.",
          C: "Organisasi nirlaba yang memenuhi syarat termasuk entitas yang dikecualikan walaupun dikonsolidasi.",
          D: "Dana pensiun dan organisasi nirlaba dikecualikan walaupun termasuk dalam laporan keuangan konsolidasi."
        },
        jebakan: "Status ‘milik negara’ bukan ukuran; yang menentukan adalah fungsi pemerintahan tanpa kegiatan usaha."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a, c, dan d, ayat (2), ayat (4), dan ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C9-154",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sakti Pangan Nusantara Tbk adalah entitas induk utama grup PMN di Indonesia dengan tahun buku Januari–Desember. Pendapatan konsolidasi grup: 2022 EUR 600 juta; 2023 EUR 640 juta; 2024 EUR 710 juta; 2025 EUR 790 juta; 2026 EUR 830 juta. SPT Tahunan PPh Badan grup jatuh tempo 30 April tahun berikutnya. Tahun pajak pertama grup masuk cakupan pajak minimum global serta batas waktu penyampaian GloBE Information Return (GIR) untuk tahun itu dan tahun berikutnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tahun pajak 2027; paling lambat 31 Maret 2029, lalu 31 Maret 2030, karena tenggat 18 bulan hanya berlaku untuk tahun pajak 2025", B: "Tahun pajak 2026; paling lambat 30 Juni 2028, lalu 31 Maret 2029", C: "Tahun pajak 2027; paling lambat 30 April 2028 bersama SPT Tahunan PPh Badan, lalu 30 April 2029", D: "Tahun pajak 2027; paling lambat 30 Juni 2029 (18 bulan, tahun pertama), lalu 31 Maret 2030 (15 bulan) untuk tahun pajak 2028" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Grup masuk cakupan bila peredaran bruto konsolidasi paling sedikit EUR 750 juta dalam 2 dari 4 tahun sebelum tahun pengenaan. Untuk tahun pajak 2026 diuji 2022–2025: hanya 2025 yang mencapai ambang, sehingga belum masuk. Untuk tahun pajak 2027 diuji 2023–2026: 2025 dan 2026 mencapai ambang, sehingga masuk. GIR tahun pertama grup masuk cakupan disampaikan paling lama 18 bulan setelah akhir tahun pengenaan; tahun berikutnya 15 bulan.",
        jejakHitung: [
          ["Uji TP 2026 (2022–2025): tahun ≥ EUR 750 juta", "2025 saja → belum masuk"],
          ["Uji TP 2027 (2023–2026): tahun ≥ EUR 750 juta", "2025 dan 2026 → masuk"],
          ["GIR TP 2027 = 31 Desember 2027 + 18 bulan", "30 Juni 2029"],
          ["GIR TP 2028 = 31 Desember 2028 + 15 bulan", "31 Maret 2030"]
        ],
        mengapaSalah: {
          A: "Tenggat 18 bulan berlaku untuk tahun pengenaan pertama grup memenuhi ketentuan cakupan, tidak hanya untuk tahun pajak 2025.",
          B: "Untuk tahun pajak 2026 ambang hanya terpenuhi pada 1 dari 4 tahun sebelumnya (2025).",
          C: "GIR tidak mengikuti tenggat SPT Tahunan PPh Badan; tenggatnya 18 bulan untuk tahun pertama dan 15 bulan untuk tahun berikutnya."
        },
        jebakan: "Tahun yang sedang diuji tidak ikut dihitung. Jangan samakan tenggat GIR dengan SPT pajak tambahan: SPT Tahunan PPh GloBE/DMTT/UTPR untuk tahun pengenaan 2027 dilaporkan sebagai SPT Tahun Pajak GloBE 2028, paling lama 4 bulan setelah akhir tahun itu (30 April 2029), dan dapat diperpanjang 2 bulan untuk tahun pertama."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1), Pasal 65 ayat (3), dan Pasal 69 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3, Pasal 11 ayat (1) dan (2), serta Pasal 13 ayat (1) dan (2) PER-6/PJ/2026", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C9-155",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Pelita Semen Timur adalah satu-satunya entitas konstituen Grup Pelita di Indonesia (entitas induk utama di Negara Ardenia; pendapatan konsolidasi EUR 1,4 miliar) dan menikmati tax holiday 100%. Data tahun pajak 2026: laba GloBE Rp60.000.000.000; pajak tercakup yang disesuaikan Rp1.200.000.000 (ETR 2%); biaya gaji yang memenuhi syarat Rp150.000.000.000; rata-rata nilai tercatat aset berwujud yang memenuhi syarat Rp700.000.000.000. Persentase transisi SBIE tahun 2026: biaya gaji 9,4% dan aset berwujud 7,4%. Safe harbour tidak dipilih. DMTT PT Pelita Semen Timur tahun pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.800.000.000", B: "Rp2.275.000.000", C: "Rp0, karena tax holiday adalah fasilitas yang diakui GloBE sehingga ETR dianggap 22%", D: "Rp0, karena SBIE Rp65.900.000.000 melebihi laba GloBE sehingga laba lebih nihil" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Walaupun ETR hanya 2% (persentase top-up 13%), pajak tambahan dihitung atas laba lebih. SBIE = 9,4% × Rp150 miliar + 7,4% × Rp700 miliar = Rp65,9 miliar, melebihi laba GloBE Rp60 miliar, sehingga laba lebih nol dan DMTT nihil.",
        jejakHitung: [
          ["ETR = 1,2 ÷ 60 miliar", "2% → top-up 13%"],
          ["SBIE = 9,4% × 150 miliar + 7,4% × 700 miliar", "Rp65.900.000.000"],
          ["Laba lebih = maks(0; 60.000.000.000 − 65.900.000.000)", "Rp0"],
          ["DMTT = 13% × Rp0", "Rp0"]
        ],
        mengapaSalah: {
          A: "Tidak mengurangkan SBIE (13% × Rp60 miliar).",
          B: "Memakai persentase permanen 5% yang baru berlaku setelah masa transisi (SBIE Rp42,5 miliar; 13% × Rp17,5 miliar).",
          C: "Tax holiday justru menurunkan pajak tercakup; ETR GloBE dihitung dari pajak yang benar-benar terutang."
        },
        jebakan: "ETR rendah tidak otomatis menimbulkan DMTT; substansi (gaji dan aset berwujud) dapat menghapus laba lebih."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (3), (4), dan (6), Pasal 7 ayat (7) huruf d, serta Pasal 8 ayat (5) huruf d dan ayat (7) PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday)" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C9-156",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Lindqvist (entitas induk utama di Negara Svedia; laporan keuangan konsolidasi disajikan dalam euro; pendapatan konsolidasi EUR 2,8 miliar) mempunyai satu entitas konstituen di Indonesia, PT Lindqvist Indonesia. Dalam paket pelaporan GloBE tahun pajak 2025, laba GloBE PT Lindqvist Indonesia EUR 15.000.000 dan SBIE EUR 3.000.000. PPh badan tahun berjalan PT Lindqvist Indonesia (setelah fasilitas tax allowance) Rp24.300.000.000 dan tidak ada pajak tangguhan. Dalam konsolidasi, pos laba rugi entitas Indonesia dijabarkan ke euro dengan kurs rata-rata 2025 EUR 1 = Rp18.000; kurs tengah BI 31 Desember 2025 EUR 1 = Rp19.440. Tidak ada penyesuaian lain. Pajak tambahan yurisdiksi Indonesia tahun pajak 2025 dalam euro adalah ...",
      kataKualifikasi: [],
      opsi: { A: "EUR 720.000", B: "EUR 800.000", C: "EUR 900.000", D: "EUR 450.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pembilang dan penyebut ETR harus dalam mata uang yang sama dengan dasar penjabaran konsolidasi: Rp24,3 miliar ÷ Rp18.000 = EUR 1.350.000. ETR = 1,35 ÷ 15 = 9%; persentase top-up 6%; laba lebih EUR 12 juta; pajak tambahan EUR 720.000.",
        jejakHitung: [
          ["Pajak tercakup = Rp24.300.000.000 ÷ Rp18.000", "EUR 1.350.000"],
          ["ETR = 1.350.000 ÷ 15.000.000", "9%"],
          ["Persentase top-up = 15% − 9%", "6%"],
          ["Laba lebih = 15.000.000 − 3.000.000", "EUR 12.000.000"],
          ["Pajak tambahan = 6% × EUR 12.000.000", "EUR 720.000"]
        ],
        mengapaSalah: {
          B: "Menjabarkan PPh dengan kurs akhir tahun Rp19.440 (EUR 1,25 juta; ETR 8,33%), padahal laba GloBE dijabarkan dengan kurs rata-rata.",
          C: "Tidak mengurangkan SBIE (6% × EUR 15 juta).",
          D: "Menghitung 15% × laba lebih dikurangi seluruh pajak tercakup; rumus yang benar persentase top-up × laba lebih."
        },
        jebakan: "Konversi pajak tercakup harus konsisten dengan dasar penjabaran laba GloBE; kurs penutup dan kurs rata-rata tidak boleh dicampur."
      },
      dasarHukum: [{ pasal: "PMK 136/2024 (ETR dan pajak tambahan dalam mata uang penyajian laporan konsolidasi; Model Rules GloBE Pasal 5.1–5.2)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke PMK 136/2024 dan PER-6/PJ/2026: Pasal 51 PMK hanya mengatur kurs untuk ambang EUR dan untuk pembayaran dalam Rupiah (kurs KMK); PER-6 Pasal 28 mengatur mata uang SPT. Aturan bahwa pajak tercakup dijabarkan dengan kurs yang sama dengan laba GloBE (kurs rata-rata konsolidasi) tidak tertulis di naskah Indonesia; masih bersandar pada panduan OECD melalui Pasal 72 PMK."
    },
    {
      id: "C9-157",
      topik: "C9.6",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arsa Elektrik Indonesia adalah satu-satunya entitas konstituen di Indonesia dari grup PMN dalam cakupan PMK 136/2024. Laporan keuangan tahun 2025 yang dipakai untuk konsolidasi menunjukkan laba neto setelah pajak Rp150.000.000.000, setelah memperhitungkan: beban pajak penghasilan (kini dan tangguhan) Rp30.000.000.000; pendapatan dividen Rp10.000.000.000 dari PT Arsa Kabel (kepemilikan 30% sejak 2019, bukan entitas konstituen); denda administratif dari otoritas lingkungan hidup Rp1.800.000.000 (satu sanksi); dan penalti keterlambatan penyerahan barang Rp450.000.000 yang dibayar kepada PT Listrik Pesisir (pelanggan swasta) berdasarkan kontrak penjualan. Kurs EUR 1 = Rp18.000. Tidak ada penyesuaian lain. Laba GloBE PT Arsa Elektrik Indonesia tahun 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp181.800.000.000", B: "Rp172.250.000.000", C: "Rp171.800.000.000", D: "Rp141.800.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Laba GloBE berangkat dari laba neto laporan keuangan: tambahkan kembali beban pajak (Rp30 miliar), keluarkan Dividen yang Dikecualikan (kepemilikan 30%, bukan kepemilikan saham portofolio di bawah 10%; Rp10 miliar), dan tambahkan kembali denda dari pemerintah yang melebihi EUR 50.000 (Rp1,8 miliar = EUR 100.000). Penalti kontraktual kepada pelanggan swasta bukan denda dari pemerintah sehingga tetap menjadi pengurang.",
        jejakHitung: [
          ["Laba neto setelah pajak", "Rp150.000.000.000"],
          ["+ beban pajak penghasilan", "Rp30.000.000.000"],
          ["− dividen dikecualikan (kepemilikan 30%)", "Rp10.000.000.000"],
          ["+ denda pemerintah Rp1,8 miliar = EUR 100.000 > EUR 50.000", "Rp1.800.000.000"],
          ["Penalti kontraktual kepada pihak swasta", "tidak disesuaikan"],
          ["Laba GloBE", "Rp171.800.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengeluarkan dividen dari kepemilikan 30%; dividen dikecualikan kecuali dari kepemilikan saham portofolio jangka pendek (hak kurang dari 10%).",
          B: "Ikut menambahkan kembali penalti kontraktual kepada pelanggan swasta; Pasal 21 ayat (5) huruf b PMK 136/2024 hanya menyangkut denda atau penalti dari pemerintah.",
          D: "Tidak menambahkan kembali beban pajak penghasilan; laba GloBE dihitung sebelum pajak tercakup."
        },
        jebakan: "Tiga penyesuaian berbeda arah: pajak ditambahkan, Dividen yang Dikecualikan dikurangkan, dan hanya denda atau penalti dari pemerintah yang melebihi EUR 50.000 dalam setahun yang ditambahkan kembali."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 23 dan 24 serta Pasal 21 ayat (2) huruf a, b, dan g dan ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C9-158",
      topik: "C9.5",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Hanami Presisi Indonesia (PMA) telah memperoleh izin dan menyelenggarakan pembukuan dalam bahasa Inggris dan mata uang dolar AS sejak tahun buku 2024. Royalti USD 60.000 kepada Sakura IP Co. (Negara Nippora; P3B membatasi royalti 10%; Form DGT sah terekam di Coretax sebelum pembayaran; pemilik manfaat; tanpa BUT di Indonesia) jatuh tempo dan dicatat sebagai utang pada Rabu, 18 Februari 2026, lalu dibayar pada Rabu, 4 Maret 2026. Data kurs: KMK berlaku 18–24 Februari 2026 Rp16.820/USD; KMK berlaku 4–10 Maret 2026 Rp16.900/USD; kurs tengah BI 18 Februari 2026 Rp16.795/USD. Nilai PPh Pasal 26 dalam Rupiah yang dicantumkan pada BPNR adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp101.400.000", B: "Rp100.920.000", C: "Rp100.770.000", D: "Rp201.840.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang saat royalti jatuh tempo dan dicatat sebagai utang (18 Februari 2026), lebih dulu dari pembayaran. DPP dalam valuta asing dikonversi dengan kurs KMK yang berlaku saat terutang; izin pembukuan USD tidak mengubah dasar konversi pemotongan. Tarif P3B 10% berlaku karena Form DGT sah.",
        jejakHitung: [
          ["PPh 26 = 10% × USD 60.000", "USD 6.000"],
          ["Kurs KMK 18–24 Februari 2026", "Rp16.820"],
          ["PPh 26 = USD 6.000 × Rp16.820", "Rp100.920.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs KMK minggu pembayaran; saat terutang sudah terjadi pada tanggal jatuh tempo.",
          C: "Memakai kurs tengah BI; kurs BI dipakai untuk pembukuan, bukan untuk DPP pemotongan.",
          D: "Memakai tarif 20% padahal Form DGT sah sudah terekam sebelum pembayaran."
        },
        jebakan: "Pembukuan USD tidak membuat kurs pembukuan berlaku untuk pemotongan; DPP PPh tetap memakai kurs KMK saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh; PP 94/2010 Pasal 15 ayat (4)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }, { pasal: "Pasal 28 ayat (8) UU KUP; PMK 81/2024 Pasal 106 ayat (1) dan Pasal 161 ayat (2) (WP berizin pembukuan bahasa Inggris dan USD)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: PMK 81/2024 Pasal 106 ayat (1) dan Pasal 161 ayat (2) (WP berizin pembukuan USD tetap menyetor PPh Pasal 26 dalam rupiah; hanya SPT Tahunan PPh Badan dalam USD), Pasal 26 ayat (1) UU PPh, dan PP 94/2010 Pasal 15 ayat (4). Belum ditemukan di naskah: dasar bahwa DPP PPh 26 dalam valuta asing dikonversi dengan kurs KMK yang berlaku pada tanggal terutang (bukan akhir bulan atau tanggal bayar)."
    },
    {
      id: "C9-159", topik: "C9.5", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Borneo Kelapa Lestari (PMA; pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) menerima fasilitas tax allowance PP 78/2019 yang masih berlaku, termasuk tarif PPh atas dividen kepada wajib pajak luar negeri 10% atau tarif yang lebih rendah menurut P3B. RUPS pada Rabu, 20 Mei 2026 menetapkan dividen tunai USD 800.000 yang pada hari itu dicatat sebagai utang dividen, dan dibayar pada Rabu, 10 Juni 2026. Pemegang saham: Palmera Holdings BV (Negara Nedera; 80%) dan Orchid Ventures Pte. Ltd. (Negara Singara; 20%). P3B Indonesia–Nedera dan Indonesia–Singara sama-sama membatasi pajak dividen 10% bila penerimanya badan yang memiliki paling sedikit 25% saham, dan 15% dalam hal lainnya. Keduanya pemilik manfaat, Form DGT keduanya sah dan terekam di Coretax sebelum RUPS, dan tidak mempunyai BUT di Indonesia. Kurs: KMK berlaku 20–26 Mei 2026 Rp16.180/USD; kurs tengah BI 20 Mei 2026 Rp16.205/USD; KMK berlaku 10–16 Juni 2026 Rp16.240/USD. Jumlah PPh Pasal 26 yang wajib dipotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.294.400.000", B: "Rp1.423.840.000", C: "Rp1.299.200.000", D: "Rp1.296.400.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tarif dividen fasilitas tax allowance 10% (atau lebih rendah menurut P3B) berlaku untuk kedua penerima: bagi Palmera tarif P3B juga 10%, bagi Orchid tarif fasilitas 10% lebih rendah daripada tarif P3B 15%. PPh terutang saat dividen disediakan untuk dibayarkan (20 Mei 2026), sehingga dipakai kurs KMK 20–26 Mei 2026.",
        jejakHitung: [["Palmera: 10% × 80% × USD 800.000", "USD 64.000"], ["Orchid: 10% (tax allowance) × 20% × USD 800.000", "USD 16.000"], ["Jumlah", "USD 80.000"], ["× kurs KMK 20–26 Mei 2026 Rp16.180", "Rp1.294.400.000"]],
        mengapaSalah: {
          B: "Memakai tarif P3B 15% untuk Orchid; fasilitas tax allowance memberi tarif 10% yang lebih rendah.",
          C: "Memakai kurs KMK minggu pembayaran; saat terutang adalah saat dividen dicatat sebagai utang.",
          D: "Memakai kurs tengah BI, yang hanya dipakai untuk mencatat utang dividen dalam pembukuan."
        },
        jebakan: "Bandingkan tarif P3B dengan tarif fasilitas lalu pakai yang terendah, kemudian kunci kurs KMK pada saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 78/2019 Pasal 3 (tax allowance: PPh dividen kepada WPLN 10% atau lebih rendah menurut P3B)", berlakuSejak: "2019-12-12" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C9-160",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Dirga Konsultindo (WP badan dalam negeri, bukan perseroan terbuka; peredaran bruto 2025 Rp120 miliar; pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) mempunyai penghasilan neto dalam negeri 2025 Rp4.000.000.000. Pada Rabu, 13 Agustus 2025 perusahaan menerima imbalan jasa konsultansi USD 250.000 dari Arden Mining Ltd di Negara Ardenia (belum mempunyai P3B dengan Indonesia) setelah dipotong pajak Ardenia 10% (USD 25.000). Pendapatan dicatat dengan kurs tengah BI 13 Agustus 2025 Rp16.200/USD sebesar Rp4.050.000.000; biaya langsung proyek Rp1.620.000.000. Kurs KMK berlaku 13–19 Agustus 2025 Rp16.150/USD; kurs tengah BI 31 Desember 2025 Rp16.700/USD. Kebijakan yang diterapkan taat asas: pajak luar negeri dikonversi dengan kurs KMK yang berlaku pada tanggal pajak itu dipotong. Kredit PPh Pasal 24 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp405.000.000", B: "Rp534.600.000", C: "Rp403.750.000", D: "Rp417.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Neto luar negeri menurut pembukuan Rp2,43 miliar; PKP Rp6,43 miliar; PPh 22% Rp1.414.600.000 (peredaran bruto di atas Rp50 miliar sehingga tanpa Pasal 31E). Batas = 2,43/6,43 × PPh terutang = Rp534.600.000. Pajak Ardenia = USD 25.000 × Rp16.150 = Rp403.750.000, lebih kecil dari batas, sehingga itulah kreditnya.",
        jejakHitung: [
          ["Neto LN = 4.050.000.000 − 1.620.000.000", "Rp2.430.000.000"],
          ["PKP = 4.000.000.000 + 2.430.000.000", "Rp6.430.000.000"],
          ["PPh terutang = 22% × PKP", "Rp1.414.600.000"],
          ["Batas = 2.430/6.430 × Rp1.414.600.000", "Rp534.600.000"],
          ["Pajak Ardenia = USD 25.000 × Rp16.150 (kurs KMK)", "Rp403.750.000"],
          ["Kredit = nilai terkecil", "Rp403.750.000"]
        ],
        mengapaSalah: {
          A: "Mengonversi pajak luar negeri dengan kurs tengah BI tanggal penerimaan; kurs itu untuk mencatat pendapatan.",
          B: "Mengambil batas maksimum padahal pajak yang dipotong lebih kecil.",
          D: "Mengonversi dengan kurs tengah BI akhir tahun, yang hanya relevan untuk penjabaran pos moneter."
        },
        jebakan: "Penghasilan luar negeri mengikuti kurs pembukuan, pajak luar negeri mengikuti kurs KMK tanggal pemotongan; lalu ambil nilai terkecil."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (4) dan Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "C9-161", topik: "C9.5", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "PP 44/2022 Pasal 21 (parafrase): dalam hal harga jual, penggantian, atau nilai lain yang menjadi dasar pengenaan PPN dinyatakan dalam mata uang asing, nilai tersebut dikonversi ke Rupiah dengan kurs yang ditetapkan Menteri Keuangan yang berlaku pada saat faktur pajak seharusnya dibuat.",
      stem: "PT Sinar Optik Indonesia (PMA; pembukuan Rupiah; transaksi valuta asing dicatat dengan kurs tengah BI tanggal transaksi, dan pos moneter valuta asing dijabarkan dengan kurs tengah BI tanggal neraca sesuai SAK secara taat asas) mempunyai empat transaksi 2026: (1) bunga pinjaman USD kepada bank di Negara Lorvia yang terutang pada 30 Juni 2026 dan dibayar 14 Juli 2026; (2) penyerahan barang kena pajak kepada PT Mitra Optik (PKP dalam negeri) yang ditagih dalam USD dengan saat faktur pajak seharusnya dibuat 15 Juli 2026; (3) saldo utang usaha USD 300.000 pada 31 Desember 2026; (4) pendapatan ekspor USD 120.000 pada 5 Agustus 2026. Berdasarkan kutipan tersebut dan ketentuan pembukuan, pasangan kurs yang tepat untuk tiap keperluan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "(1) DPP PPh 26: kurs KMK minggu pembayaran bunga; (2) DPP PPN: kurs KMK saat faktur seharusnya dibuat; (3) kurs tengah BI 31 Desember 2026; (4) kurs tengah BI 5 Agustus 2026",
        B: "(1) DPP PPh 26: kurs KMK saat terutang; (2) DPP PPN: kurs tengah BI tanggal penyerahan; (3) kurs tengah BI 31 Desember 2026; (4) kurs tengah BI 5 Agustus 2026",
        C: "(1) DPP PPh 26: kurs KMK saat terutang; (2) DPP PPN: kurs KMK saat faktur seharusnya dibuat; (3) kurs KMK minggu 31 Desember 2026 dan selisih kursnya dikoreksi fiskal; (4) kurs tengah BI 5 Agustus 2026",
        D: "(1) DPP PPh 26: kurs KMK saat terutang; (2) DPP PPN: kurs KMK saat faktur seharusnya dibuat; (3) kurs tengah BI 31 Desember 2026, dengan selisih kurs diakui secara fiskal karena pembukuan taat asas; (4) kurs tengah BI 5 Agustus 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kurs KMK adalah kurs untuk menghitung pajak: DPP PPh pemotongan pada saat terutang dan DPP PPN pada saat faktur pajak seharusnya dibuat (PP 44/2022 Pasal 21). Pembukuan memakai kurs transaksi, dan penjabaran akhir periode memakai kurs tengah BI; selisih kurs dari pembukuan yang taat asas diakui secara fiskal.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Saat terutang PPh 26 atas bunga sudah terjadi pada 30 Juni 2026; kurs minggu pembayaran tidak relevan.",
          B: "DPP PPN dalam valuta asing memakai kurs KMK, bukan kurs tengah BI.",
          C: "Penjabaran saldo akhir tahun mengikuti kurs pembukuan (kurs tengah BI), dan selisih kurs dari pembukuan taat asas tidak dikoreksi."
        },
        jebakan: "Pisahkan kurs pajak (KMK) dari kurs pembukuan (kurs transaksi dan kurs tengah BI akhir periode)."
      },
      dasarHukum: [{ pasal: "PP 44/2022 Pasal 21 (kurs KMK saat faktur pajak seharusnya dibuat)" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan taat asas)" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C9-162",
      topik: "C9.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Samudra Keruk Nusantara (WP badan dalam negeri, bukan perseroan terbuka; peredaran bruto 2025 Rp310 miliar; pembukuan Rupiah) mempunyai cabang (BUT) di Negara Kalindra yang mengerjakan proyek pengerukan pelabuhan. Penghasilan neto 2025: dalam negeri Rp14.000.000.000; cabang Kalindra menurut pembukuan Rp6.000.000.000. Pajak penghasilan Kalindra atas laba cabang tahun 2025 sebesar USD 65.000 dibayar dua kali: angsuran USD 40.000 pada Rabu, 16 Juli 2025 (kurs KMK 16–22 Juli 2025 Rp16.300/USD) dan pelunasan USD 25.000 pada Rabu, 11 Maret 2026 (kurs KMK 11–17 Maret 2026 Rp16.850/USD), sebelum SPT Tahunan 2025 disampaikan. Kurs tengah BI 31 Desember 2025 Rp16.700/USD. Kebijakan yang diterapkan taat asas: pajak luar negeri dikonversi dengan kurs KMK yang berlaku pada tanggal masing-masing pembayaran. Tidak ada penghasilan luar negeri lain. Kredit PPh Pasal 24 tahun pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.085.500.000", B: "Rp1.073.250.000", C: "Rp1.320.000.000", D: "Rp1.059.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "PKP Rp20 miliar; PPh 22% Rp4,4 miliar; batas Kalindra = 6/20 × Rp4,4 miliar = Rp1,32 miliar. Pajak Kalindra = USD 40.000 × Rp16.300 + USD 25.000 × Rp16.850 = Rp1.073.250.000, lebih kecil dari batas, sehingga seluruhnya dapat dikreditkan.",
        jejakHitung: [
          ["PKP = 14.000.000.000 + 6.000.000.000", "Rp20.000.000.000"],
          ["PPh terutang = 22% × PKP", "Rp4.400.000.000"],
          ["Batas = 6/20 × Rp4.400.000.000", "Rp1.320.000.000"],
          ["Angsuran = USD 40.000 × Rp16.300", "Rp652.000.000"],
          ["Pelunasan = USD 25.000 × Rp16.850", "Rp421.250.000"],
          ["Pajak Kalindra (nilai terkecil dibanding batas)", "Rp1.073.250.000"]
        ],
        mengapaSalah: {
          A: "Mengonversi seluruh pajak dengan kurs tengah BI akhir tahun (USD 65.000 × Rp16.700).",
          C: "Mengambil batas maksimum, padahal pajak luar negeri yang dibayar lebih kecil.",
          D: "Mengonversi seluruh pajak dengan kurs KMK angsuran pertama, termasuk pelunasan yang dibayar pada 2026."
        },
        jebakan: "Tiap pembayaran pajak luar negeri dikonversi dengan kurs KMK tanggal bayarnya; pelunasan sebelum SPT tetap pajak tahun 2025."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1)–(3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (4) dan Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Keputusan Menteri Keuangan tentang kurs mingguan sebagai dasar pelunasan pajak (kurs KMK)" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    }
  ],
  kartu: [
    { id: "KT-C9-01", topik: "C9.1", tipe: "angka", depan: "Time test BUT jasa menurut UU PPh?", belakang: "Lebih dari 60 hari dalam jangka waktu 12 bulan", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-02", topik: "C9.1", tipe: "pasal", depan: "Pembayaran BUT ke kantor pusat yang tidak boleh dibiayakan?", belakang: "Royalti, jasa manajemen/jasa lain, bunga (kecuali usaha perbankan)", dasar: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-03", topik: "C9.1", tipe: "definisi", depan: "Force of attraction dalam Pasal 5 UU PPh?", belakang: "Usaha sejenis kantor pusat di Indonesia dan penghasilan Ps. 26 berhubungan efektif", dasar: "Pasal 5 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-04", topik: "C9.1", tipe: "definisi", depan: "Kedudukan BUT sebagai subjek pajak?", belakang: "Subjek pajak luar negeri, perlakuannya dipersamakan dengan subjek pajak badan", dasar: "Pasal 2 ayat (1a) dan ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-05", topik: "C9.1", tipe: "prosedur", depan: "Jasa dibayar kepada BUT terdaftar: pasal pemotongannya?", belakang: "PPh Pasal 23 dengan bukti potong BPPU, bukan PPh Pasal 26", dasar: "Pasal 23 ayat (1) UU PPh; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-06", topik: "C9.2", tipe: "angka", depan: "Tarif dan dasar branch profit tax?", belakang: "20% × (PKP − PPh badan), atau tarif P3B", dasar: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-07", topik: "C9.2", tipe: "definisi", depan: "Empat bentuk penanaman kembali laba BUT?", belakang: "Saham perusahaan baru, saham perusahaan berdiri, aktiva tetap BUT, aktiva tak berwujud BUT", dasar: "PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-08", topik: "C9.2", tipe: "angka", depan: "Syarat waktu penanaman kembali laba BUT?", belakang: "Paling lambat akhir tahun pajak berikutnya; tidak dialihkan minimal 2 tahun sejak berproduksi komersial (perusahaan baru) atau 3 tahun (perusahaan berdiri, aktiva tetap, aktiva tak berwujud)", dasar: "PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-09", topik: "C9.2", tipe: "pasal", depan: "Sifat PPh Pasal 26 ayat (4)?", belakang: "Final; tidak dapat dikreditkan maupun dibiayakan", dasar: "Pasal 26 ayat (5) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-10", topik: "C9.2", tipe: "prosedur", depan: "Lampiran SPT Tahunan PPh Badan untuk penghitungan BPT BUT?", belakang: "Lampiran 12A (penghitungan PPh Pasal 26 ayat (4)) dan Lampiran 12B (pemberitahuan penanaman kembali), bentuk PER-11/PJ/2025; format 1771 lama: lampiran khusus 6A", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-11", topik: "C9.3", tipe: "definisi", depan: "Metode kredit pajak luar negeri di Indonesia?", belakang: "Ordinary credit dengan batas per jenis penghasilan untuk tiap negara", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-12", topik: "C9.3", tipe: "angka", depan: "Rumus batas maksimum kredit PPh Pasal 24?", belakang: "(Neto LN jenis penghasilan itu dari negara itu ÷ PKP) × PPh terutang, maksimal PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-13", topik: "C9.3", tipe: "pasal", depan: "Rugi usaha di satu negara asing dalam PKP?", belakang: "Tidak digabungkan dalam menghitung PKP", dasar: "PMK 192/PMK.03/2018", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-14", topik: "C9.3", tipe: "pasal", depan: "Pajak LN yang sudah dikreditkan kemudian dikembalikan?", belakang: "Ditambahkan ke PPh terutang pada tahun pengembalian", dasar: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-15", topik: "C9.3", tipe: "pasal", depan: "Negara sumber royalti dan bunga untuk Pasal 24?", belakang: "Negara tempat pihak pembayar atau yang dibebani berkedudukan", dasar: "Pasal 24 ayat (3) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-16", topik: "C9.3", tipe: "angka", depan: "Kelebihan pajak LN di atas batas kredit?", belakang: "Hangus: tidak dikreditkan, dibiayakan, dikompensasikan, atau direstitusi", dasar: "Pasal 24 ayat (2) dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-17", topik: "C9.4", tipe: "angka", depan: "Batas kepemilikan hubungan istimewa?", belakang: "Paling rendah 25%, langsung maupun tidak langsung", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-18", topik: "C9.4", tipe: "angka", depan: "Ambang wajib Dokumen Induk dan Dokumen Lokal?", belakang: "Omzet > Rp50 M; barang afiliasi > Rp20 M; lainnya > Rp5 M", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: "PMK 213/PMK.03/2016", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-19", topik: "C9.4", tipe: "angka", depan: "Ambang dan tenggat Laporan per Negara (CbCR)?", belakang: "Peredaran konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: "PMK 213/PMK.03/2016", dekTambahan: [] },
    { id: "KT-C9-20", topik: "C9.4", tipe: "definisi", depan: "Secondary adjustment menurut PMK 172/2023?", belakang: "Selisih koreksi dianggap dividen, kecuali dikembalikan dalam kas/setara kas sebelum SKP terbit dan/atau WP menyetujui koreksi DJP", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-21", topik: "C9.4", tipe: "angka", depan: "Kapan Dokumen Induk/Lokal harus tersedia?", belakang: "Paling lama 4 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-22", topik: "C9.4", tipe: "angka", depan: "Harga afiliasi di luar rentang interkuartil disesuaikan ke?", belakang: "Titik paling tepat dalam rentang sesuai kesebandingan; median (nilai tengah) bila titik itu tidak dapat ditentukan", dasar: "Pasal 12 ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-23", topik: "C9.5", tipe: "pasal", depan: "Dasar pembukuan bahasa Inggris dan USD?", belakang: "Pasal 28 ayat (8) KUP: setelah izin Menteri Keuangan", dasar: "Pasal 28 ayat (8) UU KUP; PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-24", topik: "C9.5", tipe: "angka", depan: "Isi fasilitas tax allowance PP 78/2019?", belakang: "30% investasi (6 × 5%), penyusutan dipercepat, dividen 10%, rugi ≤ 10 tahun", dasar: "PP 78/2019 Pasal 3", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-25", topik: "C9.5", tipe: "angka", depan: "Tax holiday: batas investasi dan besar pengurangan?", belakang: "≥ Rp500 M: 100% 5–20 tahun; Rp100–< 500 M: 50% 5 tahun", dasar: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-26", topik: "C9.5", tipe: "prosedur", depan: "Tenggat setor dan lapor PPh Pasal 26 dividen?", belakang: "Setor tanggal 15 bulan berikutnya; SPT Masa Unifikasi tanggal 20", dasar: "PMK 81/2024 Pasal 94; PER-11/PJ/2025", berlakuSejak: "2025-01-01", menggantikan: "setor tanggal 10 (PMK 242/PMK.03/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-27", topik: "C9.5", tipe: "prosedur", depan: "Dasar penerapan P3B dan Form DGT sejak akhir 2025?", belakang: "PMK 112/2025: Form DGT 6 bagian, diserahkan sebelum atau saat pembayaran", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: "PER-25/PJ/2018 (Form DGT 7 bagian)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-28", topik: "C9.6", tipe: "angka", depan: "Ambang grup pajak minimum global?", belakang: "Pendapatan konsolidasi ≥ EUR 750 juta, 2 dari 4 tahun sebelumnya", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-29", topik: "C9.6", tipe: "angka", depan: "Tarif minimum efektif GloBE?", belakang: "15% per yurisdiksi (jurisdictional blending)", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-30", topik: "C9.6", tipe: "angka", depan: "Mulai berlaku IIR, DMTT, dan UTPR di Indonesia?", belakang: "IIR dan DMTT tahun pajak 2025; UTPR tahun pajak 2026", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-31", topik: "C9.6", tipe: "prosedur", depan: "Urutan penerapan pajak tambahan GloBE?", belakang: "DMTT lebih dulu, lalu IIR, lalu UTPR", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-32", topik: "C9.6", tipe: "angka", depan: "Tenggat GloBE Information Return?", belakang: "15 bulan setelah akhir tahun pajak; 18 bulan tahun pertama", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-33", topik: "C9.6", tipe: "angka", depan: "Rumus pajak tambahan (top-up) GloBE?", belakang: "(15% − ETR) × (laba GloBE − SBIE), dikurangi DMTT", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-34", topik: "C9.1", tipe: "pasal", depan: "Harga barang yang dibeli dari penjual luar negeri: dipotong PPh 26?", belakang: "Tidak; bukan objek PPh 26 (impornya dikenai PPh 22 impor)", dasar: "Pasal 26 ayat (1) dan Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-35", topik: "C9.1", tipe: "pasal", depan: "Siapa yang tidak termasuk subjek pajak (Pasal 3 ayat (1) UU PPh)?", belakang: "Perwakilan negara asing, diplomat asing, organisasi internasional yang ditetapkan, pejabatnya (bersyarat)", dasar: "Pasal 3 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-36", topik: "C9.1", tipe: "angka", depan: "PPh Pasal 15 kantor perwakilan dagang asing (KPDA) dari negara tanpa P3B?", belakang: "0,44% × nilai ekspor bruto, bersifat final", dasar: "Pasal 15 UU PPh; KMK 634/KMK.04/1994", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-37", topik: "C9.1", tipe: "pasal", depan: "BUT berhak fasilitas Pasal 31E atau PPh final 0,5% PP 55/2022?", belakang: "Tidak; keduanya hanya bagi WP badan dalam negeri", dasar: "Pasal 2 ayat (4) dan Pasal 31E UU PPh; PP 55/2022", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-38", topik: "C9.1", tipe: "prosedur", depan: "Cara mengalokasikan biaya administrasi kantor pusat ke BUT?", belakang: "Paling tinggi sebanding peredaran usaha BUT terhadap seluruh peredaran usaha perusahaan di dunia", dasar: "Pasal 5 ayat (3) huruf a UU PPh; Pasal 2 KEP-62/PJ./1995", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-39", topik: "C9.1", tipe: "definisi", depan: "Gudang semata-mata untuk penyimpanan/penyerahan barang, bila ada P3B?", belakang: "Bukan BUT bila pasal BUT P3B mengecualikannya dan SKD sah", dasar: "Pasal 32A UU PPh; pasal BUT dalam P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-40", topik: "C9.2", tipe: "angka", depan: "PPh Pasal 26 ayat (4) bila BUT rugi atau PKP nihil?", belakang: "Nihil; dasarnya PKP setelah kompensasi dikurangi PPh badan", dasar: "Pasal 6 ayat (2) dan Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-41", topik: "C9.2", tipe: "prosedur", depan: "Kapan pemberitahuan penanaman kembali laba BUT disampaikan?", belakang: "Bentuk penanaman: dilampirkan pada SPT Tahunan tahun laba diperoleh; realisasi: dilampirkan pada SPT Tahunan tahun realisasi", dasar: "PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-42", topik: "C9.3", tipe: "angka", depan: "Pajak luar negeri dipotong melebihi tarif P3B: berapa yang dapat dikreditkan?", belakang: "Paling banyak sebesar tarif P3B; kelebihannya diminta kembali ke negara sumber", dasar: "Pasal 24 ayat (2) UU PPh; PMK 192/PMK.03/2018", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-43", topik: "C9.3", tipe: "angka", depan: "Dasar angsuran PPh Pasal 25 tahun berikutnya?", belakang: "(PPh terutang − PPh 21/22/23 dipotong − kredit PPh 24) ÷ 12", dasar: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-44", topik: "C9.3", tipe: "pasal", depan: "Batas pembetulan SPT yang menyatakan lebih bayar atau rugi?", belakang: "Paling lama 2 tahun sebelum daluwarsa penetapan", dasar: "Pasal 8 ayat (1a) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-45", topik: "C9.3", tipe: "pasal", depan: "Pajak luar negeri apa yang dapat dikreditkan menurut Pasal 24?", belakang: "Hanya pajak atas penghasilan; PPN/PBB luar negeri menjadi biaya usaha", dasar: "Pasal 24 ayat (1) dan Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-46", topik: "C9.3", tipe: "angka", depan: "Batas kredit Pasal 24 bila WP memakai fasilitas Pasal 31E?", belakang: "(Neto LN ÷ PKP) × PPh terutang setelah Pasal 31E", dasar: "Pasal 24 ayat (2) dan Pasal 31E UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-47", topik: "C9.3", tipe: "angka", depan: "Dividen dari badan luar negeri non-bursa dikecualikan dari objek PPh bila?", belakang: "Diinvestasikan di Indonesia minimal 30% laba setelah pajak, dalam jangka waktu tertentu", dasar: "Pasal 4 ayat (3) huruf f angka 2 UU PPh s.t.d.t.d. UU 7/2021; PMK 18/2021", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-48", topik: "C9.4", tipe: "definisi", depan: "Analisis harta tak berwujud dalam PKKU menurut PMK 172/2023?", belakang: "Uji eksistensi dan kepemilikan dengan analisis fungsi DEMPE", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-49", topik: "C9.4", tipe: "prosedur", depan: "Dokumen harga transfer diminta DJP: diserahkan paling lama?", belakang: "1 bulan sejak permintaan disampaikan (pengawasan kepatuhan dan pemeriksaan)", dasar: "Pasal 34 ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: "PMK 213/PMK.03/2016", dekTambahan: [] },
    { id: "KT-C9-50", topik: "C9.4", tipe: "pasal", depan: "Lampiran SPT Tahunan PPh Badan (bentuk PER-11/PJ/2025) untuk penyertaan, utang, dan piutang pada perusahaan afiliasi?", belakang: "Lampiran 2 Daftar Kepemilikan Bagian B (daftar penyertaan modal, utang, dan/atau piutang pada perusahaan afiliasi); transaksi dengan pihak afiliasi didaftar di Lampiran 10A (format 1771 lama sampai tahun pajak 2024: Lampiran 1771-VI)", dasar: "Pasal 85 dan Pasal 138 huruf a PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-51", topik: "C9.4", tipe: "definisi", depan: "Indikator laba yang diuji dalam metode TNMM?", belakang: "Laba bersih usaha (operasional) terhadap dasar seperti penjualan atau biaya", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-52", topik: "C9.5", tipe: "angka", depan: "Kriteria pemilik manfaat badan: porsi penghasilan untuk kewajiban kepada pihak lain?", belakang: "Tidak lebih dari 50% penghasilannya (menurut laporan keuangan nonkonsolidasi) dipakai untuk memenuhi kewajiban kepada pihak lain, kecuali imbalan wajar kepada karyawan dan biaya usaha yang lazim", dasar: "PMK 112/2025 Pasal 19 ayat (2) huruf b (dahulu PER-25/PJ/2018 Pasal 6 ayat (1) huruf b angka 3)", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-53", topik: "C9.5", tipe: "prosedur", depan: "SKD WPLN format PER-25/PJ/2018 setelah PMK 112/2025 berlaku?", belakang: "Tetap dapat dipakai sampai periodenya berakhir", dasar: "PENG-2/PJ.09/2026; PMK 112/2025", berlakuSejak: "2026-01-09", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-54", topik: "C9.5", tipe: "angka", depan: "Sanksi bunga SKPKB hasil pemeriksaan (Pasal 13 ayat (2) KUP)?", belakang: "(Suku bunga acuan + 15%) ÷ 12 per bulan, maksimal 24 bulan", dasar: "Pasal 13 ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29", menggantikan: "2% per bulan (sebelum UU Cipta Kerja/UU HPP)", dekTambahan: [] },
    { id: "KT-C9-55", topik: "C9.5", tipe: "prosedur", depan: "Letak fasilitas tax allowance dalam SPT Tahunan PPh Badan tahun pajak 2025?", belakang: "Lampiran 13A Daftar Fasilitas Penanaman Modal (PER-11/PJ/2025); format 1771 lama: lampiran khusus 4A", dasar: "PP 78/2019; PER-11/PJ/2025", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-56", topik: "C9.5", tipe: "pasal", depan: "Saat terutang PPh Pasal 26 atas dividen?", belakang: "Saat dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo — mana lebih dulu", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-57", topik: "C9.5", tipe: "pasal", depan: "PT PMA dengan peredaran bruto ≤ Rp50 miliar berhak Pasal 31E?", belakang: "Ya; PMA berbentuk PT adalah WP badan dalam negeri", dasar: "Pasal 2 ayat (3) huruf b dan Pasal 31E UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-58", topik: "C9.6", tipe: "angka", depan: "Persentase SBIE masa transisi untuk tahun 2025?", belakang: "9,6% biaya gaji; 7,6% aset berwujud", dasar: "Pasal 7 ayat (7) dan Pasal 8 ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-59", topik: "C9.6", tipe: "angka", depan: "Syarat pengecualian de minimis GloBE per yurisdiksi?", belakang: "Rata-rata pendapatan < EUR 10 juta dan laba < EUR 1 juta", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-60", topik: "C9.6", tipe: "angka", depan: "Ambang ETR sederhana safe harbour transisi CbCR?", belakang: "15% (tahun pajak mulai 2024), 16% (2025), 17% (2026 sampai tahun pajak yang berakhir 30 Juni 2028)", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-61", topik: "C9.6", tipe: "definisi", depan: "Apa yang termasuk pajak tercakup (covered taxes) GloBE?", belakang: "Pajak atas penghasilan/laba entitas; bukan PPN, PBB, bea meterai", dasar: "PMK 136/2024 (Model Rules GloBE Pasal 4.2)", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-62", topik: "C9.1", tipe: "pasal", depan: "Royalti, imbalan jasa, atau bunga yang diterima BUT dari kantor pusatnya?", belakang: "Bukan objek BUT, kecuali bunga berkenaan dengan usaha perbankan", dasar: "Pasal 5 ayat (3) UU PPh dan penjelasannya", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-63", topik: "C9.1", tipe: "prosedur", depan: "Menguji BUT dengan P3B, tetapi SKD/Form DGT tidak ada?", belakang: "P3B tidak diterapkan; uji dengan Pasal 2 ayat (5) UU PPh", dasar: "Pasal 2 ayat (5) dan Pasal 32A UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-64", topik: "C9.1", tipe: "definisi", depan: "Proyek konstruksi, instalasi, atau perakitan menurut UU PPh: ada batas waktunya?", belakang: "Tidak ada; batas waktu hanya dari P3B bila SKD sah", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-65", topik: "C9.1", tipe: "angka", depan: "Kredit PPh 23 BUT atas jasa yang ditagih dalam USD?", belakang: "Sebesar bukti potong: tarif × DPP × kurs KMK saat terutang", dasar: "Pasal 23 dan Pasal 28 ayat (1) UU PPh; KMK kurs mingguan", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-66", topik: "C9.1", tipe: "definisi", depan: "Penghasilan kantor pusat yang berhubungan efektif dengan BUT?", belakang: "Penghasilan Ps. 26 kantor pusat dari harta/kegiatan BUT; digabung ke laba BUT", dasar: "Pasal 5 ayat (1) huruf c UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-67", topik: "C9.2", tipe: "angka", depan: "Dasar BPT bila sebagian laba ditanamkan kembali?", belakang: "Tetap PKP − PPh badan tanpa pengurangan; pengecualian hanya bila seluruhnya ditanamkan kembali", dasar: "Pasal 26 ayat (4) UU PPh; Pasal 1 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-68", topik: "C9.2", tipe: "definisi", depan: "Contoh investasi yang bukan penanaman kembali laba BUT?", belakang: "Deposito, obligasi, dan surat utang lain (bukan salah satu dari empat bentuk); atau penanaman setelah akhir tahun pajak berikutnya", dasar: "Pasal 1 ayat (3) dan Pasal 2 ayat (1) huruf a PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-69", topik: "C9.3", tipe: "prosedur", depan: "Konversi pajak luar negeri yang dikreditkan sebagai PPh Pasal 24?", belakang: "Kurs KMK saat pajak luar negeri terutang, dibayar, atau dipotong; penghasilan sesuai pembukuan", dasar: "Pasal 24 UU PPh; Pasal 10 ayat (2) dan ayat (5) PMK 192/PMK.03/2018", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-70", topik: "C9.3", tipe: "pasal", depan: "Pajak luar negeri atas dividen luar negeri yang memenuhi syarat bukan objek?", belakang: "Tidak dapat dikreditkan dan tidak dapat dibiayakan", dasar: "Pasal 4 ayat (3) huruf f angka 2 dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-71", topik: "C9.5", tipe: "angka", depan: "Kurs untuk DPP PPh 23/26 dan PPN dalam valuta asing?", belakang: "Kurs KMK mingguan yang berlaku saat terutang (Rabu sampai Selasa)", dasar: "Keputusan Menteri Keuangan tentang kurs mingguan", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-72", topik: "C9.5", tipe: "definisi", depan: "Kurs penjabaran pos moneter valas pada tanggal neraca (SAK)?", belakang: "Kurs tengah BI; selisihnya diakui fiskal bila pembukuan taat asas", dasar: "PP 94/2010 Pasal 9; Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-73", topik: "C9.5", tipe: "prosedur", depan: "Utang PPh 26 (kurs KMK) tidak sama dengan bagian beban (kurs tengah BI)?", belakang: "Selisihnya dicatat sebagai laba/rugi selisih kurs", dasar: "Pasal 26 UU PPh; PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-74", topik: "C9.6", tipe: "angka", depan: "Persentase SBIE masa transisi untuk tahun 2026?", belakang: "9,4% biaya gaji; 7,4% nilai tercatat aset berwujud", dasar: "Pasal 7 ayat (7) dan Pasal 8 ayat (5) PMK 136/2024", berlakuSejak: "2026-01-01", menggantikan: "9,6% gaji dan 7,6% aset (tahun 2025)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-75", topik: "C9.6", tipe: "angka", depan: "Persentase SBIE setelah masa transisi berakhir?", belakang: "5% biaya gaji dan 5% aset berwujud (mulai tahun pajak 2033)", dasar: "Pasal 7 ayat (7) huruf k dan Pasal 8 ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-76", topik: "C9.6", tipe: "definisi", depan: "Kedudukan BUT dalam penghitungan GloBE?", belakang: "Entitas konstituen di yurisdiksi letak BUT; diblending dengan entitas lain di sana", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-77", topik: "C9.6", tipe: "pasal", depan: "Pajak tambahan IIR yang dipungut entitas induk atas satu anak luar negeri?", belakang: "(Top-up yurisdiksi − QDMTT) × porsi kepemilikan induk", dasar: "PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-78", topik: "C9.6", tipe: "prosedur", depan: "Tenggat GIR untuk tahun buku pertama 1 April 2025–31 Maret 2026?", belakang: "30 September 2027 (18 bulan); tahun berikutnya 15 bulan", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-79", topik: "C9.1", tipe: "pasal", depan: "Kewajiban subjektif SPLN yang menjalankan usaha melalui BUT: mulai dan berakhir?", belakang: "Mulai saat menjalankan usaha melalui BUT; berakhir saat tidak lagi menjalankannya", dasar: "Pasal 2A ayat (3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-80", topik: "C9.1", tipe: "pasal", depan: "Kewajiban subjektif SPLN tanpa BUT: mulai dan berakhir?", belakang: "Mulai saat menerima penghasilan dari Indonesia; berakhir saat tidak lagi menerimanya", dasar: "Pasal 2A ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-81", topik: "C9.1", tipe: "pasal", depan: "Agen perusahaan asuransi luar negeri yang menerima premi di Indonesia?", belakang: "BUT tanpa uji waktu (Pasal 2 ayat (5) huruf o)", dasar: "Pasal 2 ayat (5) huruf o UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-82", topik: "C9.1", tipe: "pasal", depan: "Server/komputer penyelenggara transaksi elektronik yang berada di Indonesia?", belakang: "BUT (Pasal 2 ayat (5) huruf p), tanpa uji waktu", dasar: "Pasal 2 ayat (5) huruf p UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-83", topik: "C9.1", tipe: "definisi", depan: "Agen tidak bebas menurut Pasal 2 ayat (5) huruf n?", belakang: "Prinsipal luar negeri ber-BUT; komisi tetap penghasilan agen", dasar: "Pasal 2 ayat (5) huruf n UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-84", topik: "C9.1", tipe: "prosedur", depan: "Koreksi fiskal beban valas dari kantor pusat memakai kurs apa?", belakang: "Kurs pembukuan saat beban dicatat, bukan kurs KMK", dasar: "Pasal 5 ayat (3) UU PPh; PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-85", topik: "C9.2", tipe: "angka", depan: "Tambahan BPT akibat koreksi PKP BUT hasil pemeriksaan?", belakang: "Tarif BPT × (koreksi − tambahan PPh badan 22%)", dasar: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-86", topik: "C9.4", tipe: "definisi", depan: "Hubungan istimewa tanpa kepemilikan 25%?", belakang: "Bisa, melalui penguasaan manajemen atau penggunaan teknologi", dasar: "Pasal 18 ayat (4) huruf b UU PPh dan penjelasannya", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-87", topik: "C9.5", tipe: "prosedur", depan: "Selisih kurs saat melunasi utang dividen valas kepada WPLN?", belakang: "Bagian PPh: kurs KMK vs kurs buku; bagian neto: kurs bayar vs kurs buku", dasar: "Pasal 26 UU PPh; PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-88", topik: "C9.6", tipe: "angka", depan: "Pajak tangguhan dalam pajak tercakup GloBE?", belakang: "Diperhitungkan; dihitung ulang (recast) dengan Tarif Minimum 15% bila tarif yang berlaku lebih tinggi", dasar: "Pasal 34 ayat (1) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-89", topik: "C9.6", tipe: "prosedur", depan: "Recapture liabilitas pajak tangguhan GloBE?", belakang: "Kewajiban pajak tangguhan yang tidak dibayar dalam 5 tahun pajak berikutnya dimunculkan kembali sebagai pengurang pajak tercakup; dikecualikan recapture exception accrual, antara lain cost recovery allowance atas harta berwujud", dasar: "Pasal 34 ayat (5) dan ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-90", topik: "C9.6", tipe: "definisi", depan: "Aset berwujud yang memenuhi syarat SBIE?", belakang: "Aset tetap, sumber daya alam, aset hak-guna, dan hak dari pemerintah atas harta tak bergerak atau sumber daya alam; bukan properti investasi, aset tidak lancar yang dikuasai untuk dijual, aset yang disewakan secara sewa pembiayaan, atau harta untuk pelayaran internasional", dasar: "Pasal 8 ayat (2) dan ayat (4) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-91", topik: "C9.6", tipe: "angka", depan: "Nilai aset berwujud yang dipakai untuk SBIE?", belakang: "Rata-rata jumlah tercatat awal dan akhir tahun laporan keuangan konsolidasi", dasar: "Pasal 8 ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-92", topik: "C9.6", tipe: "definisi", depan: "Biaya gaji yang memenuhi syarat SBIE?", belakang: "Kompensasi pegawai (gaji, upah, manfaat pribadi seperti asuransi kesehatan dan iuran pensiun), tunjangan pajak penghasilan atas gaji, dan iuran jaminan sosial tenaga kerja", dasar: "Pasal 7 ayat (3) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-93", topik: "C9.6", tipe: "prosedur", depan: "Alokasi top-up yurisdiksi ke entitas konstituen?", belakang: "Proporsional laba GloBE entitas terhadap laba GloBE agregat seluruh entitas; entitas rugi tidak menerima alokasi", dasar: "Pasal 6 ayat (8) dan ayat (9) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-94", topik: "C9.6", tipe: "angka", depan: "Persentase UTPR suatu yurisdiksi?", belakang: "50% × porsi jumlah pegawai + 50% × porsi nilai harta berwujud di antara yurisdiksi yang menerapkan UTPR", dasar: "Pasal 18 ayat (2) PMK 136/2024", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-95", topik: "C9.6", tipe: "definisi", depan: "Kapan entitas induk dimiliki sebagian (POPE) menerapkan IIR?", belakang: "Bila lebih dari 20% kepemilikan atas labanya dipegang pihak di luar grup; POPE tetap menerapkan IIR walaupun induk utama menerapkan IIR, dan IIR induk utama dikurangi bagian yang sudah dikenakan pada POPE", dasar: "Pasal 1 angka 12, Pasal 14 ayat (2) huruf c, dan Pasal 16 PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-96", topik: "C9.6", tipe: "definisi", depan: "BUMN Persero yang berusaha komersial: entitas pemerintah dikecualikan?", belakang: "Tidak; badan pemerintah yang dikecualikan adalah Entitas yang tidak menjalankan perdagangan atau bisnis", dasar: "Pasal 3 ayat (1) huruf a dan ayat (2) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-97", topik: "C9.6", tipe: "angka", depan: "Dasar uji de minimis GloBE?", belakang: "Rata-rata tahun pajak berjalan dan dua tahun pajak sebelumnya; ambang dalam EUR (penghasilan < EUR 10 juta dan laba < EUR 1 juta)", dasar: "Pasal 11 ayat (5) dan ayat (6) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-98", topik: "C9.6", tipe: "angka", depan: "Denda yang ditambahkan kembali ke laba GloBE?", belakang: "Biaya ilegal, serta denda atau penalti dari pemerintah dengan jumlah melebihi EUR 50.000 dalam setahun ◐", dasar: "Pasal 21 ayat (2) huruf g dan ayat (5) PMK 136/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-99", topik: "C9.6", tipe: "definisi", depan: "Dividen yang dikecualikan dari laba GloBE?", belakang: "Semua dividen, kecuali portofolio < 10% yang dimiliki < 1 tahun ◐", dasar: "PMK 136/2024 (Model Rules GloBE Pasal 3.2.1 dan 10.1)", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-100", topik: "C9.6", tipe: "prosedur", depan: "Tenggat GIR 18 bulan berlaku untuk tahun pajak apa?", belakang: "Tahun pertama grup masuk cakupan; tahun berikutnya 15 bulan", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2026-05-04", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C9-101", topik: "C9.5", tipe: "angka", depan: "Kurs DPP PPN atas penyerahan yang ditagih dalam valuta asing?", belakang: "Kurs KMK yang berlaku saat faktur pajak seharusnya dibuat", dasar: "PP 44/2022 Pasal 21", menggantikan: null, dekTambahan: [] },
    { id: "KT-C9-102", topik: "C9.2", tipe: "angka", depan: "Dasar BPT bila BUT juga memperoleh bunga deposito atau jasa giro (PPh final)?", belakang: "(PKP + penghasilan final) − (PPh badan + PPh final); penghasilan final ikut masuk setelah dikurangi PPh finalnya", dasar: "Pasal 6 PMK 14/PMK.03/2011; petunjuk Lampiran 12A PER-11/PJ/2025", berlakuSejak: "2011-01-24", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-C9-01", judul: "Laba BUT, PPh Pasal 29, dan branch profit tax", topik: "C9.2", estimasiMenit: 18,
      narasi: "Kestrel Drilling Services Ltd, berkedudukan di Negara Valoria (mitra P3B; pasal laba usaha P3B memuat klausul force of attraction terbatas atas penjualan barang sejenis, dan P3B membatasi pajak atas laba cabang 10%; SKD sah), menjalankan usaha jasa pengeboran serta penjualan peralatan dan suku cadang pengeboran melalui cabang (BUT) di Balikpapan. Untuk tahun pajak 2025 BUT mencatat peredaran usaha Rp84.000.000.000 dan laba komersial Rp7.400.000.000. Beban yang sudah dikurangkan mencakup royalti peralatan kepada kantor pusat Rp1.250.000.000, imbalan jasa manajemen kepada kantor pusat Rp850.000.000, alokasi biaya administrasi kantor pusat Rp900.000.000 (Rp300.000.000 di antaranya untuk kegiatan kantor pusat di negara lain), dan bunga pinjaman bank lokal Rp200.000.000. Laba komersial juga mencakup bunga deposito Rp150.000.000 yang telah dipotong PPh final 20% sebesar Rp30.000.000. Di luar pembukuan BUT, kantor pusat menjual langsung peralatan pengeboran sejenis kepada pelanggan di Indonesia dengan penjualan Rp3.000.000.000 dan harga pokok Rp2.300.000.000. Kredit pajak: PPh Pasal 23 dipotong pelanggan Rp1.020.000.000 dan PPh Pasal 25 Rp900.000.000. Pada Maret 2026 BUT membeli rig senilai Rp2.000.000.000 sebagai aktiva tetap untuk kegiatannya di Indonesia yang termasuk bentuk penanaman kembali menurut PMK 14/PMK.03/2011 (aktiva tetap yang digunakan BUT). Tidak ada sisa kerugian fiskal.",
      data: [
        ["Peredaran usaha BUT", "Rp84.000.000.000"],
        ["Laba komersial", "Rp7.400.000.000"],
        ["Royalti ke kantor pusat", "Rp1.250.000.000"],
        ["Jasa manajemen ke kantor pusat", "Rp850.000.000"],
        ["Biaya admin kantor pusat (tidak terkait BUT)", "Rp300.000.000 dari Rp900.000.000"],
        ["Bunga deposito / PPh final 20%", "Rp150.000.000 / Rp30.000.000"],
        ["Penjualan langsung kantor pusat / harga pokok", "Rp3.000.000.000 / Rp2.300.000.000"],
        ["Kredit PPh 23 / PPh 25", "Rp1.020.000.000 / Rp900.000.000"],
        ["Penanaman kembali (rig, Maret 2026)", "Rp2.000.000.000"],
        ["Tarif BPT P3B", "10%"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Berapa total koreksi positif atas pembayaran dan beban terkait kantor pusat (Rp)?", tipe: "angka", jawaban: 2400000000, toleransi: 0,
          petunjuk: ["Pasal 5 ayat (3): royalti, jasa manajemen, dan bunga ke kantor pusat tidak boleh dibiayakan", "Biaya administrasi kantor pusat hanya boleh sepanjang berkaitan dengan BUT (ayat (2)); bunga bank lokal boleh", "Rp1.250.000.000 + Rp850.000.000 + Rp300.000.000 = Rp2.400.000.000"],
          penjelasan: "Royalti dan jasa manajemen kepada kantor pusat dilarang oleh Pasal 5 ayat (3); bagian biaya administrasi untuk negara lain tidak berkaitan dengan BUT. Bunga kepada bank lokal adalah biaya usaha yang sah." },
        { no: 2, pertanyaan: "Bagaimana perlakuan penjualan langsung kantor pusat atas peralatan sejenis?", tipe: "pilihan",
          opsi: { A: "Bukan penghasilan BUT karena tidak melalui pembukuan BUT", B: "Digabung sebagai penghasilan BUT sebesar laba netonya Rp700.000.000 (force of attraction)", C: "Digabung sebesar penjualan bruto Rp3.000.000.000", D: "Dipotong PPh Pasal 26 20% oleh pembeli dan bersifat final" }, jawaban: "B",
          petunjuk: ["Lihat Pasal 5 ayat (1) huruf b UU PPh", "Barangnya sejenis dengan usaha BUT", "Yang digabung adalah laba neto: Rp3.000.000.000 − Rp2.300.000.000"],
          penjelasan: "Penjualan kantor pusat atas barang sejenis di Indonesia ditarik sebagai penghasilan BUT (force of attraction) sebesar laba netonya Rp700.000.000." },
        { no: 3, pertanyaan: "Berapa penghasilan neto fiskal BUT tahun 2025 (Rp)?", tipe: "angka", jawaban: 10350000000, toleransi: 0,
          petunjuk: ["Mulai dari laba komersial Rp7.400.000.000", "Tambah koreksi positif Rp2.400.000.000 dan force of attraction Rp700.000.000; keluarkan bunga deposito yang final Rp150.000.000", "7.400 + 2.400 + 700 − 150 = 10.350 juta"],
          penjelasan: "Bunga deposito sudah dikenai PPh final sehingga dikoreksi negatif; force of attraction ditambahkan. Hasil: Rp10.350.000.000." },
        { no: 4, pertanyaan: "Berapa PPh badan terutang BUT (Rp)?", tipe: "angka", jawaban: 2277000000, toleransi: 0,
          petunjuk: ["BUT bukan Wajib Pajak badan dalam negeri sehingga tidak berhak atas Pasal 31E, berapa pun peredarannya", "Tarif 22% × PKP", "22% × Rp10.350.000.000 = Rp2.277.000.000"],
          penjelasan: "PKP Rp10.350.000.000 (tanpa kompensasi kerugian) dikalikan tarif badan 22%." },
        { no: 5, pertanyaan: "Berapa PPh Pasal 29 (Rp)?", tipe: "angka", jawaban: 357000000, toleransi: 0,
          petunjuk: ["PPh 23 atas jasa kepada BUT adalah kredit pajak, bukan final", "Kurangkan PPh 23 dan PPh 25 dari PPh terutang", "2.277 − 1.020 − 900 = 357 juta"],
          penjelasan: "PPh terutang Rp2.277.000.000 dikurangi kredit PPh 23 Rp1.020.000.000 dan PPh 25 Rp900.000.000." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 26 ayat (4) atas laba 2025 (Rp)?", tipe: "angka", jawaban: 819300000, toleransi: 0,
          petunjuk: ["Laba setelah pajak = 10.350 − 2.277 = 8.073 juta; tambahkan bunga deposito setelah PPh final (150 − 30 juta), sehingga dasar Rp8.193.000.000 (petunjuk Lampiran 12A)", "Rig Rp2.000.000.000 berbentuk sah dan tepat waktu, tetapi hanya sebagian laba; pengecualian hanya bila seluruhnya ditanamkan kembali", "10% × Rp8.193.000.000 = Rp819.300.000"],
          penjelasan: "Menurut Pasal 6 PMK 14/PMK.03/2011 dan petunjuk Lampiran 12A PER-11/PJ/2025, penghasilan yang dikenai PPh final ikut masuk dasar: (Rp10.350.000.000 + Rp150.000.000) − (Rp2.277.000.000 + Rp30.000.000) = Rp8.193.000.000. Pasal 1 ayat (3) PMK 14/PMK.03/2011 membebaskan BPT hanya bila seluruh PKP sesudah PPh ditanamkan kembali. Rig (Maret 2026) memenuhi bentuk dan waktu, tetapi hanya Rp2.000.000.000 dari Rp8.193.000.000, sehingga BPT tarif P3B 10% dikenakan atas seluruh dasar. Tanpa bunga deposito hasilnya keliru Rp807.300.000." }
      ],
      kesimpulan: "Koreksi pembayaran ke kantor pusat Rp2.400.000.000 dan force of attraction Rp700.000.000 menghasilkan neto fiskal Rp10.350.000.000, PPh badan Rp2.277.000.000, dan PPh Pasal 29 Rp357.000.000. Rig Rp2.000.000.000 hanya sebagian dari laba setelah pajak, sehingga branch profit tax 10% tetap dikenakan atas seluruh dasar Rp8.193.000.000 (laba setelah pajak Rp8.073.000.000 ditambah bunga deposito setelah PPh final Rp120.000.000, menurut petunjuk Lampiran 12A), yaitu Rp819.300.000 (final, disetor sendiri).",
      kalkulatorRef: "bpt",
      kalkulatorInput: { pkp: 10350000000, tarifBadan: 22, tarifP3b: 10, ditanamKembali: 2000000000, penghasilanFinal: 150000000, pphFinal: 30000000 }
    },
    {
      id: "K-C9-02", judul: "Kredit pajak luar negeri tiga negara dengan cabang rugi", topik: "C9.3", estimasiMenit: 16,
      narasi: "PT Arunika Global (WP badan dalam negeri, peredaran bruto 2025 Rp310 miliar sehingga tidak berhak Pasal 31E) memiliki penghasilan neto dalam negeri tahun pajak 2025 Rp12.500.000.000 dan sisa kerugian fiskal tahun 2022 Rp1.500.000.000 yang masih dapat dikompensasikan. Penghasilan luar negeri: dari Negara A berupa laba cabang sebelum pajak luar negeri Rp3.000.000.000 (pajak dibayar di A Rp900.000.000) dan royalti Rp500.000.000 (dipotong pajak A Rp50.000.000); dari Negara B berupa bunga Rp1.000.000.000 (dipotong pajak B Rp150.000.000); sedangkan cabang di Negara C rugi Rp800.000.000. Laba cabang A tidak diinvestasikan di Indonesia sehingga tetap objek PPh. Kredit pajak dalam negeri: PPh Pasal 23 Rp310.000.000 dan PPh Pasal 25 Rp1.800.000.000.",
      data: [
        ["Neto dalam negeri", "Rp12.500.000.000"],
        ["Sisa rugi fiskal 2022", "Rp1.500.000.000"],
        ["Negara A: laba cabang / pajak", "Rp3.000.000.000 / Rp900.000.000"],
        ["Negara A: royalti / pajak", "Rp500.000.000 / Rp50.000.000"],
        ["Negara B: bunga / pajak", "Rp1.000.000.000 / Rp150.000.000"],
        ["Negara C: rugi cabang", "Rp800.000.000"],
        ["Kredit PPh 23 / PPh 25", "Rp310.000.000 / Rp1.800.000.000"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Bagaimana perlakuan rugi cabang di Negara C?", tipe: "pilihan",
          opsi: { A: "Dikurangkan dari PKP tahun 2025", B: "Tidak digabungkan dalam menghitung PKP", C: "Dikompensasikan dengan laba Negara A sebelum menghitung batas Negara A", D: "Dikompensasikan 5 tahun dengan penghasilan dalam negeri" }, jawaban: "B",
          petunjuk: ["Kredit pajak luar negeri dihitung per jenis penghasilan untuk tiap negara", "Kerugian usaha di luar negeri tidak boleh mengurangi penghasilan lain", "Jawaban: B"],
          penjelasan: "Rugi usaha di luar negeri tidak digabungkan dalam menghitung PKP dan tidak dikompensasikan dengan penghasilan negara lain." },
        { no: 2, pertanyaan: "Berapa PKP tahun 2025 (Rp)?", tipe: "angka", jawaban: 15500000000, toleransi: 0,
          petunjuk: ["Gabungkan neto dalam negeri dengan penghasilan Negara A (laba + royalti) dan Negara B", "Kurangkan sisa rugi fiskal dalam negeri 2022; jangan kurangkan rugi Negara C", "12.500 + 3.500 + 1.000 − 1.500 = 15.500 juta"],
          penjelasan: "PKP = Rp12.500.000.000 + Rp3.500.000.000 + Rp1.000.000.000 − kompensasi Rp1.500.000.000 = Rp15.500.000.000." },
        { no: 3, pertanyaan: "Berapa PPh terutang (Rp)?", tipe: "angka", jawaban: 3410000000, toleransi: 0,
          petunjuk: ["Tarif badan 22%", "Tanpa Pasal 31E karena peredaran > Rp50 miliar", "22% × Rp15.500.000.000 = Rp3.410.000.000"],
          penjelasan: "PPh terutang = 22% × Rp15.500.000.000." },
        { no: 4, pertanyaan: "Berapa batas maksimum kredit untuk laba cabang Negara A (Rp)?", tipe: "angka", jawaban: 660000000, toleransi: 1000,
          petunjuk: ["Batas dihitung per jenis penghasilan untuk tiap negara: laba cabang A dan royalti A dibatasi sendiri-sendiri", "Batas = neto jenis itu ÷ PKP × PPh terutang", "3.000/15.500 × Rp3.410.000.000 = Rp660.000.000"],
          penjelasan: "Pasal 6 ayat (2) PMK 192/PMK.03/2018 menghitung kredit per jenis penghasilan untuk tiap negara. Batas laba cabang A Rp660.000.000, lebih kecil dari pajak cabang A Rp900.000.000, sehingga kredit laba cabang A Rp660.000.000. Royalti A dibatasi terpisah: 500/15.500 × Rp3.410.000.000 = Rp110.000.000, sehingga kredit royalti A sebesar pajaknya Rp50.000.000." },
        { no: 5, pertanyaan: "Berapa total kredit PPh Pasal 24 (Rp)?", tipe: "angka", jawaban: 860000000, toleransi: 1000,
          petunjuk: ["Negara A: laba cabang min(Rp900.000.000; Rp660.000.000) dan royalti min(Rp50.000.000; Rp110.000.000)", "Negara B: batas 1.000/15.500 × 3.410 juta = Rp220.000.000; pajak dibayar Rp150.000.000", "660 + 50 + 150 = 860 juta"],
          penjelasan: "Kredit = Rp660.000.000 (laba cabang A) + Rp50.000.000 (royalti A) + Rp150.000.000 (bunga B) = Rp860.000.000; kelebihan pajak cabang A Rp240.000.000 tidak dapat dikreditkan dan tidak dapat dipakai untuk mengisi sisa batas royalti A." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 29 (Rp)?", tipe: "angka", jawaban: 440000000, toleransi: 1000,
          petunjuk: ["Kurangkan kredit PPh 24, PPh 23, dan PPh 25 dari PPh terutang", "3.410 − 860 − 310 − 1.800", "Rp440.000.000"],
          penjelasan: "PPh Pasal 29 = Rp3.410.000.000 − Rp860.000.000 − Rp310.000.000 − Rp1.800.000.000 = Rp440.000.000." }
      ],
      kesimpulan: "Rugi Negara C dikeluarkan, sehingga PKP Rp15.500.000.000 dan PPh terutang Rp3.410.000.000. Kredit PPh Pasal 24 dihitung per jenis penghasilan untuk tiap negara: laba cabang A Rp660.000.000 (dibatasi), royalti A Rp50.000.000 dan bunga B Rp150.000.000 (pajak aktual), total Rp860.000.000. Setelah kredit dalam negeri, PPh Pasal 29 Rp440.000.000.",
      kalkulatorRef: "pph24"
    },
    {
      id: "K-C9-03", judul: "Koreksi harga transfer dan secondary adjustment", topik: "C9.4", estimasiMenit: 15,
      narasi: "PT Mitra Presisi (PMA) 70% sahamnya dimiliki Orion Holdings Ltd (Negara Dravia, mitra P3B dengan tarif dividen 10%). Peredaran bruto PT Mitra Presisi tahun 2024 Rp68 miliar. Pada 2025 PT Mitra Presisi menjual 400.000 unit suku cadang kepada Orion seharga Rp21.000 per unit. Dalam pemeriksaan, analisis CUP menghasilkan rentang interkuartil Rp22.500–Rp26.000 per unit dengan median Rp24.000. Orion tidak mengembalikan selisih harga dalam bentuk kas, PT Mitra Presisi tidak menyetujui koreksi, dan Orion tidak pernah menyerahkan SKD. Data pembanding tidak menunjukkan titik yang paling tepat di dalam rentang. Abaikan sanksi administrasi.",
      data: [
        ["Kepemilikan Orion", "70%"],
        ["Peredaran bruto 2024", "Rp68.000.000.000"],
        ["Volume penjualan ke Orion", "400.000 unit"],
        ["Harga transaksi", "Rp21.000/unit"],
        ["Rentang interkuartil / median", "Rp22.500–Rp26.000 / Rp24.000"],
        ["SKD Orion", "tidak ada"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Apakah PT Mitra Presisi dan Orion mempunyai hubungan istimewa?", tipe: "pilihan",
          opsi: { A: "Ya, karena kepemilikan 70% paling rendah 25%", B: "Tidak, karena Orion WP luar negeri", C: "Ya, tetapi hanya bila Orion juga menguasai manajemen", D: "Tidak, karena kepemilikan kurang dari 100%" }, jawaban: "A",
          petunjuk: ["Lihat Pasal 18 ayat (4) UU PPh", "Ambang kepemilikan 25%", "Jawaban: A"],
          penjelasan: "Kepemilikan langsung 70% memenuhi ambang 25% sehingga transaksi wajib memenuhi PKKU." },
        { no: 2, pertanyaan: "Apakah PT Mitra Presisi wajib Dokumen Induk dan Dokumen Lokal untuk tahun pajak 2025?", tipe: "pilihan",
          opsi: { A: "Wajib, karena peredaran bruto tahun sebelumnya lebih dari Rp50 miliar", B: "Tidak wajib, karena transaksi barang dengan afiliasi di bawah Rp20 miliar", C: "Tidak wajib, karena Dravia adalah mitra P3B", D: "Wajib hanya CbCR" }, jawaban: "A",
          petunjuk: ["Kriteria dokumentasi bersifat alternatif", "Peredaran bruto 2024 Rp68 miliar", "Jawaban: A"],
          penjelasan: "Satu kriteria cukup: peredaran bruto tahun sebelumnya Rp68 miliar melebihi Rp50 miliar." },
        { no: 3, pertanyaan: "Berapa koreksi primer atas penghasilan (Rp)?", tipe: "angka", jawaban: 1200000000, toleransi: 0,
          petunjuk: ["Harga Rp21.000 di luar rentang Rp22.500–Rp26.000", "Sesuaikan ke median Rp24.000: selisih Rp3.000 per unit", "Rp3.000 × 400.000 = Rp1.200.000.000"],
          penjelasan: "Harga di luar rentang tidak wajar; karena titik yang paling tepat di dalam rentang tidak dapat ditentukan, harga disesuaikan ke median (Pasal 12 ayat (7) huruf c PMK 172/2023), sehingga koreksi primer Rp1.200.000.000." },
        { no: 4, pertanyaan: "Berapa tambahan PPh badan dari koreksi primer (Rp)?", tipe: "angka", jawaban: 264000000, toleransi: 0,
          petunjuk: ["Koreksi primer menambah PKP", "Tarif 22%", "22% × Rp1.200.000.000 = Rp264.000.000"],
          penjelasan: "Tambahan PPh badan = 22% × Rp1.200.000.000." },
        { no: 5, pertanyaan: "Berapa PPh Pasal 26 atas secondary adjustment (Rp)?", tipe: "angka", jawaban: 240000000, toleransi: 0,
          petunjuk: ["Selisih tidak dikembalikan dalam kas atau setara kas sebelum surat ketetapan pajak terbit dan WP tidak menyetujui koreksi, sehingga diperlakukan sebagai dividen kepada Orion", "Tanpa SKD, tarif P3B 10% tidak dapat dipakai", "20% × Rp1.200.000.000 = Rp240.000.000"],
          penjelasan: "Secondary adjustment menjadikan selisih Rp1.200.000.000 dividen kepada Orion; tanpa SKD, PPh 26 dipotong 20%." },
        { no: 6, pertanyaan: "Berapa total tambahan pokok pajak akibat koreksi harga transfer (Rp)?", tipe: "angka", jawaban: 504000000, toleransi: 0,
          petunjuk: ["Jumlahkan PPh badan dan PPh 26", "Rp264.000.000 + Rp240.000.000", "Rp504.000.000"],
          penjelasan: "Total tambahan pokok = Rp264.000.000 + Rp240.000.000 = Rp504.000.000 (di luar sanksi)." }
      ],
      kesimpulan: "Hubungan istimewa 70% dan omzet 2024 Rp68 miliar mewajibkan PKKU dan dokumentasi. Penyesuaian ke median menghasilkan koreksi primer Rp1.200.000.000 (PPh badan Rp264.000.000) dan secondary adjustment sebagai dividen (PPh 26 20% Rp240.000.000), total pokok Rp504.000.000.",
      kalkulatorRef: null
    },
    {
      id: "K-C9-04", judul: "Pembayaran PT PMA ke luar negeri dalam satu masa: PPh 26, PPN, dan BPNR", topik: "C9.5", estimasiMenit: 18,
      narasi: "PT Arkana Presisi Indonesia (PMA, PKP, tahun buku kalender) 80% sahamnya dimiliki Kessler Werkzeug AG di Negara Helvara dan 20% oleh PT Lokal Jaya (WP badan dalam negeri). P3B Indonesia–Helvara mengatur dividen 10% bila penerima badan memiliki paling sedikit 25% saham (15% lainnya), bunga 10%, royalti 10%, dan tidak memuat pasal khusus imbalan jasa teknik. Kessler menyerahkan Form DGT yang sah sebelum setiap pembayaran, merupakan pemilik manfaat, dan tidak mempunyai BUT di Indonesia. Pada Masa September 2026 PT Arkana melakukan pembayaran: (1) dividen Rp5.000.000.000 kepada seluruh pemegang saham sesuai porsi kepemilikan; (2) bunga pinjaman Rp800.000.000 pada 18 September 2026 kepada Kessler Finance BV di Negara Nedera (P3B bunga 10%; pemilik manfaat), yang Form DGT-nya baru diserahkan pada 5 Oktober 2026; (3) royalti teknologi Rp1.200.000.000 kepada Kessler; (4) harga mesin produksi Rp3.000.000.000 yang diimpor dari Kessler (PPh Pasal 22 impor dipungut saat pengeluaran barang); (5) imbalan jasa desain teknik Rp400.000.000 kepada Kessler yang seluruhnya dikerjakan di Helvara. Royalti dan hasil jasa desain dimanfaatkan di Indonesia.",
      data: [
        ["Dividen total / porsi Kessler", "Rp5.000.000.000 / 80%"],
        ["Bunga ke Kessler Finance BV (Form DGT 5 Oktober 2026)", "Rp800.000.000"],
        ["Royalti teknologi ke Kessler", "Rp1.200.000.000"],
        ["Harga mesin impor dari Kessler", "Rp3.000.000.000"],
        ["Jasa desain (dikerjakan di Helvara)", "Rp400.000.000"],
        ["Tarif P3B dividen ≥ 25% / bunga / royalti", "10% / 10% / 10%"],
        ["PPN pemanfaatan dari luar Daerah Pabean", "12% × DPP nilai lain 11/12"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Berapa PPh Pasal 26 atas dividen yang dipotong PT Arkana (Rp)?", tipe: "angka", jawaban: 400000000, toleransi: 0,
          petunjuk: ["Dividen kepada PT Lokal Jaya (badan dalam negeri) bukan objek PPh", "Bagian Kessler = 80% × Rp5.000.000.000 = Rp4.000.000.000", "10% × Rp4.000.000.000 = Rp400.000.000"],
          penjelasan: "Kepemilikan 80% (paling sedikit 25%) dan Form DGT sah membuat tarif P3B 10% berlaku atas Rp4.000.000.000; dividen kepada badan dalam negeri dikecualikan dari objek PPh." },
        { no: 2, pertanyaan: "Berapa PPh Pasal 26 atas bunga kepada Kessler Finance BV (Rp)?", tipe: "angka", jawaban: 160000000, toleransi: 0,
          petunjuk: ["Bandingkan tanggal penyerahan Form DGT dengan tanggal pembayaran", "Form DGT diserahkan setelah pembayaran sehingga syarat P3B tidak terpenuhi", "20% × Rp800.000.000 = Rp160.000.000"],
          penjelasan: "PMK 112/2025 mensyaratkan Form DGT diserahkan sebelum atau paling lambat saat pembayaran; karena terlambat, tarif domestik 20% berlaku. Kessler Finance dapat menempuh prosedur pengembalian kelebihan pemotongan." },
        { no: 3, pertanyaan: "Bagaimana perlakuan PPh atas harga mesin impor Rp3.000.000.000?", tipe: "pilihan",
          opsi: { A: "Dipotong PPh Pasal 26 10% sesuai P3B", B: "Dipotong PPh Pasal 26 20% karena dibayar kepada pemegang saham", C: "Bukan objek PPh Pasal 26; atas impornya dipungut PPh Pasal 22 impor", D: "Dipotong PPh Pasal 23 2% sebagai jasa" }, jawaban: "C",
          petunjuk: ["Pembayaran harga barang berbeda dengan imbalan jasa atau penggunaan harta", "Pasal 26 ayat (1) tidak memuat harga pembelian barang", "Jawaban: C"],
          penjelasan: "Harga pembelian barang bukan penghasilan yang dipotong PPh Pasal 26; pajak atas impornya adalah PPh Pasal 22 impor yang dipungut saat pengeluaran barang." },
        { no: 4, pertanyaan: "Bagaimana perlakuan PPh atas imbalan jasa desain Rp400.000.000?", tipe: "pilihan",
          opsi: { A: "PPh Pasal 26 20% = Rp80.000.000", B: "PPh Pasal 26 10% = Rp40.000.000 mengikuti tarif royalti P3B", C: "PPh Pasal 23 2% = Rp8.000.000", D: "Tidak dipotong PPh karena merupakan laba usaha Kessler tanpa BUT yang menurut P3B hanya dipajaki di Helvara" }, jawaban: "D",
          petunjuk: ["P3B tidak memuat pasal khusus imbalan jasa teknik", "Imbalan jasa menjadi laba usaha yang hanya dipajaki negara domisili bila tidak ada BUT", "Jawaban: D"],
          penjelasan: "Tanpa pasal khusus jasa teknik, imbalan jasa termasuk laba usaha (Pasal 7 P3B); karena Kessler tidak mempunyai BUT dan Form DGT sah, Indonesia tidak memajakinya." },
        { no: 5, pertanyaan: "Berapa jumlah PPh Pasal 26 yang dipotong PT Arkana untuk Masa September 2026 (Rp)?", tipe: "angka", jawaban: 680000000, toleransi: 0,
          petunjuk: ["Jumlahkan PPh 26 atas dividen, bunga, dan royalti", "Royalti: 10% × Rp1.200.000.000 = Rp120.000.000", "Rp400.000.000 + Rp160.000.000 + Rp120.000.000 = Rp680.000.000"],
          penjelasan: "Harga mesin dan jasa desain tidak dipotong PPh 26, sehingga jumlahnya hanya dari dividen, bunga, dan royalti." },
        { no: 6, pertanyaan: "Berapa PPN atas pemanfaatan BKP tidak berwujud dan JKP dari luar Daerah Pabean yang disetor sendiri (Rp)?", tipe: "angka", jawaban: 176000000, toleransi: 0,
          petunjuk: ["Royalti (BKP tidak berwujud) dan jasa desain (JKP) dimanfaatkan di Indonesia", "DPP nilai lain = 11/12 × (Rp1.200.000.000 + Rp400.000.000)", "12% × 11/12 × Rp1.600.000.000 = Rp176.000.000"],
          penjelasan: "P3B hanya mengatur pajak penghasilan; PPN atas pemanfaatan dari luar Daerah Pabean tetap terutang dengan DPP nilai lain 11/12 (PMK 131/2024)." },
        { no: 7, pertanyaan: "Kewajiban administrasi PPh Pasal 26 Masa September 2026 yang tepat?", tipe: "pilihan",
          opsi: { A: "BPNR untuk setiap pemotongan; setor paling lambat 15 Oktober 2026; SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026", B: "BPPU; setor paling lambat 10 Oktober 2026; lapor paling lambat 20 Oktober 2026", C: "BPNR; setor dan lapor paling lambat 31 Oktober 2026", D: "Bukti potong PPh 26 dalam SPT Masa PPh 21/26; setor paling lambat 15 Oktober 2026" }, jawaban: "A",
          petunjuk: ["Penerima adalah WP luar negeri berbentuk badan", "Setor tanggal 15 dan lapor tanggal 20 bulan berikutnya (PMK 81/2024)", "Jawaban: A"],
          penjelasan: "PPh 26 atas dividen, bunga, dan royalti kepada badan luar negeri dibuatkan BPNR dalam SPT Masa PPh Unifikasi; setor paling lambat 15 Oktober 2026 dan lapor paling lambat 20 Oktober 2026." }
      ],
      kesimpulan: "PPh Pasal 26 Masa September 2026 Rp680.000.000 (dividen Rp400.000.000 dengan tarif P3B, bunga Rp160.000.000 dengan tarif 20% karena Form DGT terlambat, royalti Rp120.000.000); harga mesin dan jasa desain tidak dipotong PPh 26, sedangkan PPN pemanfaatan dari luar Daerah Pabean Rp176.000.000 disetor sendiri. Seluruh pemotongan dibuatkan BPNR, disetor paling lambat 15 Oktober 2026, dan dilaporkan paling lambat 20 Oktober 2026.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-C9-05", judul: "DMTT yurisdiksi Indonesia dengan entitas rugi dan SBIE", topik: "C9.6", estimasiMenit: 16,
      narasi: "Grup Lintang mempunyai entitas induk utama di Negara Tervia, yang menerapkan IIR mulai tahun pajak 2025. Pendapatan konsolidasi grup 2021–2024 berturut-turut EUR 690 juta, EUR 810 juta, EUR 740 juta, dan EUR 920 juta; tahun pajak 2025 adalah tahun pertama grup masuk cakupan aturan GloBE di yurisdiksi mana pun. Pada tahun pajak 2025 terdapat tiga entitas konstituen di Indonesia: PT Lintang Smelter (tax holiday) dengan laba GloBE Rp300.000.000.000, pajak tercakup yang disesuaikan Rp3.000.000.000, biaya gaji yang memenuhi syarat Rp40.000.000.000, dan aset berwujud Rp400.000.000.000; PT Lintang Energi dengan laba GloBE Rp150.000.000.000, pajak tercakup Rp33.000.000.000, gaji Rp20.000.000.000, dan aset berwujud Rp100.000.000.000; serta PT Lintang Dagang yang rugi GloBE Rp50.000.000.000 tanpa pajak tercakup, dengan gaji Rp10.000.000.000 dan aset berwujud Rp25.000.000.000. Persentase transisi SBIE 2025: 9,6% atas gaji dan 7,6% atas aset berwujud. Tidak ada penyesuaian lain dan tidak ada safe harbour yang dapat dipakai.",
      data: [
        ["Pendapatan konsolidasi 2021–2024 (EUR juta)", "690 / 810 / 740 / 920"],
        ["PT Lintang Smelter: laba / pajak tercakup", "Rp300.000.000.000 / Rp3.000.000.000"],
        ["PT Lintang Energi: laba / pajak tercakup", "Rp150.000.000.000 / Rp33.000.000.000"],
        ["PT Lintang Dagang: rugi / pajak tercakup", "(Rp50.000.000.000) / Rp0"],
        ["Gaji: Smelter / Energi / Dagang", "Rp40 M / Rp20 M / Rp10 M"],
        ["Aset berwujud: Smelter / Energi / Dagang", "Rp400 M / Rp100 M / Rp25 M"],
        ["Persentase SBIE 2025", "gaji 9,6%; aset 7,6%"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Apakah Grup Lintang masuk cakupan PMK 136/2024 untuk tahun pajak 2025?", tipe: "pilihan",
          opsi: { A: "Tidak, karena pendapatan 2021 dan 2023 di bawah EUR 750 juta", B: "Ya, karena pendapatan paling sedikit EUR 750 juta pada 2 dari 4 tahun sebelumnya (2022 dan 2024)", C: "Ya, cukup karena pendapatan tahun terakhir (2024) paling sedikit EUR 750 juta", D: "Tidak, karena pendapatan harus paling sedikit EUR 750 juta pada 4 tahun berturut-turut" }, jawaban: "B",
          petunjuk: ["Uji 4 tahun sebelum tahun pajak 2025: 2021–2024", "Tahun yang mencapai EUR 750 juta: 2022 (810) dan 2024 (920)", "Jawaban: B"],
          penjelasan: "Ambang terpenuhi bila pendapatan konsolidasi paling sedikit EUR 750 juta pada paling sedikit 2 dari 4 tahun sebelumnya; 2022 dan 2024 memenuhi." },
        { no: 2, pertanyaan: "Berapa laba GloBE neto yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 400000000000, toleransi: 0,
          petunjuk: ["Laba dan rugi seluruh entitas konstituen di satu yurisdiksi digabung", "300 + 150 − 50 miliar", "Rp400.000.000.000"],
          penjelasan: "Rugi PT Lintang Dagang mengurangi laba yurisdiksi (jurisdictional blending)." },
        { no: 3, pertanyaan: "Berapa ETR GloBE yurisdiksi Indonesia (%)?", tipe: "angka", jawaban: 9, toleransi: 0.01,
          petunjuk: ["Jumlahkan pajak tercakup: 3 + 33 + 0 = 36 miliar", "ETR = pajak tercakup ÷ laba GloBE neto", "36 ÷ 400 = 9%"],
          penjelasan: "ETR dihitung per yurisdiksi, bukan per entitas; PT Lintang Smelter sendiri ber-ETR 1%, tetapi digabung dengan PT Lintang Energi." },
        { no: 4, pertanyaan: "Berapa SBIE yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 46620000000, toleransi: 0,
          petunjuk: ["Gaji: 40 + 20 + 10 = 70 miliar; aset: 400 + 100 + 25 = 525 miliar", "9,6% × 70 miliar = 6,72 miliar; 7,6% × 525 miliar = 39,9 miliar", "Rp46.620.000.000"],
          penjelasan: "SBIE memakai biaya gaji dan aset berwujud seluruh entitas di yurisdiksi, termasuk entitas yang rugi." },
        { no: 5, pertanyaan: "Berapa laba lebih (excess profit) yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 353380000000, toleransi: 0,
          petunjuk: ["Laba lebih = laba GloBE neto − SBIE", "400 − 46,62 miliar", "Rp353.380.000.000"],
          penjelasan: "Laba lebih adalah dasar pengenaan pajak tambahan." },
        { no: 6, pertanyaan: "Berapa DMTT yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 21202800000, toleransi: 0,
          petunjuk: ["Persentase top-up = 15% − 9% = 6%", "DMTT = 6% × laba lebih", "6% × Rp353.380.000.000 = Rp21.202.800.000"],
          penjelasan: "Tidak ada penyesuaian lain, sehingga DMTT = persentase top-up × laba lebih." },
        { no: 7, pertanyaan: "Bagaimana dampaknya terhadap IIR di Tervia dan kapan batas GloBE Information Return tahun pajak 2025?", tipe: "pilihan",
          opsi: { A: "IIR Tervia tetap memungut Rp21.202.800.000; GIR paling lambat 30 April 2026", B: "DMTT yang memenuhi syarat dikurangkan dari top-up IIR sehingga IIR Tervia atas Indonesia nihil; GIR tahun pertama paling lambat 30 Juni 2027", C: "DMTT dikreditkan sebagai PPh Pasal 24 oleh entitas induk; GIR paling lambat 31 Maret 2027", D: "IIR didahulukan dan DMTT hanya atas sisanya; GIR paling lambat 31 Desember 2026" }, jawaban: "B",
          petunjuk: ["Urutan: DMTT, lalu IIR, lalu UTPR", "Tahun pertama masuk cakupan mendapat 18 bulan", "Jawaban: B"],
          penjelasan: "DMTT yang memenuhi syarat mengurangi pajak tambahan menurut IIR; GloBE Information Return tahun pertama disampaikan paling lama 18 bulan setelah tahun pajak berakhir, yaitu 30 Juni 2027." }
      ],
      kesimpulan: "Grup Lintang masuk cakupan (2 dari 4 tahun ≥ EUR 750 juta). Dengan blending yurisdiksi, laba GloBE Rp400 miliar dan pajak tercakup Rp36 miliar menghasilkan ETR 9%; SBIE Rp46,62 miliar sehingga laba lebih Rp353,38 miliar dan DMTT 6% × laba lebih = Rp21.202.800.000. DMTT yang memenuhi syarat menihilkan IIR Tervia atas Indonesia, dan GIR tahun pertama paling lambat 30 Juni 2027.",
      kalkulatorRef: null
    },
    {
      id: "K-C9-06", judul: "BUT kontraktor instalasi Jepang: dari atribusi laba sampai branch profit tax", topik: "C9.2", estimasiMenit: 24,
      narasi: "Tsubasa Plant Engineering Co., Ltd., berkedudukan di Jepang, mengerjakan kontrak instalasi dan commissioning turbin serta boiler PLTU milik PT Energi Pesisir di Cilacap. Personel Tsubasa berada di lokasi sejak 3 Februari 2025 dan proyek selesai 30 Januari 2026. Ketentuan P3B Indonesia–Jepang yang dipakai dalam kasus ini: proyek instalasi menjadi BUT bila berlangsung lebih dari 6 bulan, dan pajak atas laba BUT setelah pajak (branch profit tax) dibatasi 10%; Tsubasa telah menyerahkan Form DGT yang sah dan merupakan pemilik manfaat. Dalam kasus ini pekerjaan diperlakukan sebagai jasa instalasi mesin dan peralatan (jasa lain Pasal 23), bukan jasa konstruksi yang dikenai PPh final, sehingga PT Energi Pesisir memotong PPh Pasal 23 sebesar 2%. BUT terdaftar, membukukan dalam Rupiah dengan kurs tengah BI, dan tidak mempunyai sisa kerugian. Tagihan 2025 dalam USD dibayar pada tanggal faktur: April USD 2.000.000 (kurs KMK Rp16.450; kurs tengah BI Rp16.480), Agustus USD 2.500.000 (kurs KMK Rp16.240; kurs tengah BI Rp16.200), dan Desember USD 1.500.000 (kurs KMK Rp16.700; kurs tengah BI Rp16.690), sehingga peredaran usaha BUT Rp98.495.000.000. Laba komersial 2025 Rp11.800.000.000 sudah dikurangi royalti desain kepada kantor pusat Rp1.400.000.000, imbalan jasa manajemen kepada kantor pusat Rp900.000.000, bunga pinjaman dari kantor pusat Rp350.000.000, dan alokasi biaya administrasi kantor pusat Rp2.100.000.000; biaya administrasi umum kantor pusat seluruhnya setara Rp45.000.000.000 dan peredaran usaha seluruh perusahaan setara Rp2.462.375.000.000 (alokasi taat asas menurut perbandingan peredaran usaha). Laba komersial juga memuat bunga jasa giro Rp60.000.000 (telah dipotong PPh final 20% sebesar Rp12.000.000) dan laba selisih kurs Rp210.000.000 yang diakui taat asas sesuai pembukuan. PPh Pasal 25 yang dibayar Rp1.000.000.000. Pada Maret 2026, dari laba setelah pajak 2025, Tsubasa menyetor modal Rp4.000.000.000 sebagai pendiri PT Tsubasa Service Indonesia yang baru didirikan, dan menempatkan deposito Rp2.000.000.000.",
      data: [
        ["Masa proyek di lokasi", "3 Februari 2025 – 30 Januari 2026"],
        ["P3B Indonesia–Jepang (data kasus)", "BUT proyek > 6 bulan; BPT 10%; Form DGT sah"],
        ["Tagihan April: USD / kurs KMK / kurs tengah BI", "2.000.000 / Rp16.450 / Rp16.480"],
        ["Tagihan Agustus: USD / kurs KMK / kurs tengah BI", "2.500.000 / Rp16.240 / Rp16.200"],
        ["Tagihan Desember: USD / kurs KMK / kurs tengah BI", "1.500.000 / Rp16.700 / Rp16.690"],
        ["Peredaran BUT / peredaran seluruh perusahaan", "Rp98.495.000.000 / Rp2.462.375.000.000"],
        ["Laba komersial", "Rp11.800.000.000"],
        ["Royalti / jasa manajemen / bunga ke kantor pusat", "Rp1.400.000.000 / Rp900.000.000 / Rp350.000.000"],
        ["Alokasi biaya admin kantor pusat / total biaya admin", "Rp2.100.000.000 / Rp45.000.000.000"],
        ["Bunga jasa giro / PPh final 20% / laba selisih kurs", "Rp60.000.000 / Rp12.000.000 / Rp210.000.000"],
        ["PPh Pasal 25 dibayar", "Rp1.000.000.000"],
        ["Maret 2026: penyertaan pendiri / deposito", "Rp4.000.000.000 / Rp2.000.000.000"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Apakah Tsubasa mempunyai BUT di Indonesia pada tahun pajak 2025?", tipe: "pilihan",
          opsi: { A: "Tidak, karena proyek instalasi berlangsung di bawah 183 hari dalam satu tahun kalender, sehingga cukup dikenai PPh Pasal 26", B: "Ya, karena proyek berlangsung hampir 12 bulan, melebihi 6 bulan menurut P3B; menurut UU PPh pun proyek instalasi merupakan BUT", C: "Ya, tetapi hanya sejak Agustus 2025 karena BUT baru timbul setelah 6 bulan pertama terlewati, sehingga laba Februari–Juli tidak dipajaki", D: "Tidak, karena PT Energi Pesisir sudah memotong PPh Pasal 23 sehingga Tsubasa cukup diperlakukan sebagai WPLN" }, jawaban: "B",
          petunjuk: ["Hitung lamanya proyek: 3 Februari 2025–30 Januari 2026", "P3B: proyek instalasi lebih dari 6 bulan; UU PPh: proyek instalasi tanpa batas waktu", "Jawaban: B"],
          penjelasan: "Proyek berlangsung hampir 12 bulan sehingga melampaui ambang 6 bulan P3B; bila ambang terlampaui, BUT dianggap ada sejak awal proyek. Menurut Pasal 2 ayat (5) UU PPh, proyek instalasi merupakan BUT tanpa batas waktu. Pemotongan PPh 23 justru menandakan Tsubasa diperlakukan sebagai BUT terdaftar." },
        { no: 2, pertanyaan: "Berapa total koreksi positif atas pembayaran dan biaya terkait kantor pusat (Rp)?", tipe: "angka", jawaban: 2950000000, toleransi: 0,
          petunjuk: ["Royalti, jasa manajemen, dan bunga kepada kantor pusat tidak boleh dibiayakan (Pasal 5 ayat (3))", "Biaya administrasi wajar = 98.495/2.462.375 × Rp45.000.000.000 = 4% × Rp45.000.000.000 = Rp1.800.000.000; kelebihan Rp300.000.000", "1.400 + 900 + 350 + 300 juta = Rp2.950.000.000"],
          penjelasan: "Ketiga pembayaran ke kantor pusat dilarang Pasal 5 ayat (3) (BUT ini bukan bank), dan alokasi biaya administrasi melebihi bagian proporsionalnya sebesar Rp300.000.000." },
        { no: 3, pertanyaan: "Berapa penghasilan neto fiskal BUT tahun pajak 2025 (Rp)?", tipe: "angka", jawaban: 14690000000, toleransi: 0,
          petunjuk: ["Mulai dari laba komersial Rp11.800.000.000 dan tambah koreksi positif Rp2.950.000.000", "Keluarkan bunga jasa giro final Rp60.000.000; laba selisih kurs yang diakui taat asas tidak dikoreksi", "11.800 + 2.950 − 60 = 14.690 juta"],
          penjelasan: "Selisih kurs mengikuti pembukuan yang taat asas (PP 94/2010 Pasal 9), sedangkan bunga jasa giro sudah dikenai PPh final sehingga dikoreksi negatif." },
        { no: 4, pertanyaan: "Berapa PPh badan terutang BUT (Rp)?", tipe: "angka", jawaban: 3231800000, toleransi: 0,
          petunjuk: ["BUT tidak berhak Pasal 31E maupun PPh final PP 55/2022", "PKP Rp14.690.000.000 (tanpa kompensasi kerugian)", "22% × Rp14.690.000.000 = Rp3.231.800.000"],
          penjelasan: "PKP dikalikan tarif badan 22%." },
        { no: 5, pertanyaan: "Berapa kredit PPh Pasal 23 sesuai bukti potong (Rp)?", tipe: "angka", jawaban: 1971000000, toleransi: 0,
          petunjuk: ["Pemotong memakai kurs KMK yang berlaku saat terutang, bukan kurs tengah BI pembukuan", "2% × (USD 2.000.000 × 16.450 + USD 2.500.000 × 16.240 + USD 1.500.000 × 16.700)", "658 + 812 + 501 juta = Rp1.971.000.000"],
          penjelasan: "Kredit pajak mengikuti bukti potong. Bila dihitung ulang dengan kurs tengah BI hasilnya Rp1.969.900.000; selisih Rp1.100.000 itulah jebakan kurs." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 29 (Rp)?", tipe: "angka", jawaban: 260800000, toleransi: 0,
          petunjuk: ["PPh terutang dikurangi kredit PPh 23 dan PPh 25", "PPh final bunga jasa giro bukan kredit pajak", "3.231.800.000 − 1.971.000.000 − 1.000.000.000 = Rp260.800.000"],
          penjelasan: "PPh Pasal 29 = Rp3.231.800.000 − Rp1.971.000.000 − Rp1.000.000.000." },
        { no: 7, pertanyaan: "Berapa PPh Pasal 26 ayat (4) atas laba 2025 (Rp)?", tipe: "angka", jawaban: 1150620000, toleransi: 0,
          petunjuk: ["Laba setelah pajak = 14.690.000.000 − 3.231.800.000 = Rp11.458.200.000; tambahkan jasa giro setelah PPh final (60 − 12 juta), sehingga dasar Rp11.506.200.000 (petunjuk Lampiran 12A)", "Penyertaan sebagai pendiri (Maret 2026) berbentuk sah, deposito tidak; yang sah hanya Rp4.000.000.000, bukan seluruh laba", "10% × Rp11.506.200.000 = Rp1.150.620.000"],
          penjelasan: "Menurut Pasal 6 PMK 14/PMK.03/2011 dan petunjuk Lampiran 12A PER-11/PJ/2025, penghasilan yang dikenai PPh final ikut masuk dasar: (Rp14.690.000.000 + Rp60.000.000) − (Rp3.231.800.000 + Rp12.000.000) = Rp11.506.200.000. Pengecualian BPT hanya diberikan bila seluruh laba setelah pajak ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011). Penyertaan Rp4.000.000.000 hanya sebagian, sehingga BPT tarif P3B 10% (Form DGT sah) dikenakan atas seluruh Rp11.506.200.000. Dengan tarif domestik 20% hasilnya Rp2.301.240.000; pengurangan sebagian akan keliru menghasilkan Rp750.620.000; tanpa jasa giro hasilnya keliru Rp1.145.820.000." },
        { no: 8, pertanyaan: "Perlakuan BPT dan penanaman kembali yang tepat adalah ...", tipe: "pilihan",
          opsi: { A: "BPT dikreditkan terhadap PPh badan 2026 (lampiran BPT SPT Tahunan BUT), dan penyertaan boleh dijual kapan saja", B: "BPT final dan disetor sendiri (lampiran BPT SPT Tahunan BUT); penyertaan tidak dialihkan sekurang-kurangnya 2 tahun", C: "BPT baru terutang saat laba ditransfer ke Jepang dan cukup dilaporkan pada SPT Masa PPh Unifikasi bulan transfer", D: "BPT dipotong PT Energi Pesisir sebagai PPh Pasal 26 atas pembayaran tagihan kontrak, lalu dikreditkan BUT" }, jawaban: "B",
          petunjuk: ["Pasal 26 ayat (5): PPh Pasal 26 ayat (4) bersifat final", "PMK 14/PMK.03/2011 Pasal 2 ayat (2): penyertaan sebagai pendiri tidak dialihkan sekurang-kurangnya 2 tahun sejak perusahaan baru berproduksi komersial", "Jawaban: B"],
          penjelasan: "BPT final dan disetor sendiri oleh BUT tanpa menunggu transfer laba. Untuk tahun pajak 2025 penghitungannya disajikan pada Lampiran 12A dan pemberitahuan penanaman kembali pada Lampiran 12B SPT Tahunan PPh Badan bentuk PER-11/PJ/2025 (format 1771 lama, hanya sampai tahun pajak 2024: lampiran khusus 6A). Penyertaan sebagai pendiri perusahaan baru tidak boleh dialihkan sekurang-kurangnya 2 tahun sejak perusahaan itu berproduksi komersial (Pasal 2 ayat (2) huruf b PMK 14/PMK.03/2011); masa 3 tahun berlaku untuk penyertaan pada perusahaan yang sudah berdiri, aktiva tetap, dan aktiva tidak berwujud. Karena di kasus ini laba tidak seluruhnya ditanamkan kembali, BPT tetap terutang atas seluruh dasar pengenaannya (Rp11.506.200.000)." }
      ],
      kesimpulan: "Proyek instalasi hampir 12 bulan menimbulkan BUT. Koreksi pembayaran ke kantor pusat dan kelebihan biaya administrasi Rp2.950.000.000 menghasilkan neto fiskal Rp14.690.000.000 dan PPh badan Rp3.231.800.000; kredit PPh 23 mengikuti bukti potong berkurs KMK (Rp1.971.000.000) sehingga PPh Pasal 29 Rp260.800.000. Penyertaan Rp4.000.000.000 hanya sebagian dari laba setelah pajak, sehingga BPT 10% tetap dikenakan atas seluruh dasar Rp11.506.200.000 (laba setelah pajak Rp11.458.200.000 ditambah jasa giro setelah PPh final Rp48.000.000, menurut petunjuk Lampiran 12A), yaitu Rp1.150.620.000 (final, disetor sendiri).",
      kalkulatorRef: "bpt",
      kalkulatorInput: { pkp: 14690000000, tarifBadan: 22, tarifP3b: 10, ditanamKembali: 4000000000, penghasilanFinal: 60000000, pphFinal: 12000000 }
    },
    {
      id: "K-C9-07", judul: "Grup multinasional: ETR dan pajak tambahan entitas konstituen di Indonesia", topik: "C9.6", estimasiMenit: 20,
      narasi: "Grup Archipel mempunyai entitas induk utama Archipel SE di Negara Ardenia, yang menerapkan IIR sejak 2024. Pendapatan konsolidasi grup 2021–2025 berturut-turut EUR 780 juta, EUR 720 juta, EUR 760 juta, EUR 740 juta, dan EUR 810 juta. Pada tahun pajak 2026 terdapat empat entitas konstituen di Indonesia: PT Archipel Nikel (tax holiday) dengan laba GloBE Rp320.000.000.000 dan pajak tercakup yang disesuaikan Rp4.600.000.000; PT Archipel Distribusi dengan laba GloBE Rp130.000.000.000 dan pajak tercakup yang disesuaikan Rp27.600.000.000; BUT Archipel Engineering di Surabaya (cabang entitas grup di Ardenia) dengan laba GloBE yang diatribusikan Rp50.000.000.000 dan PPh badan BUT Rp11.000.000.000 (seluruh laba setelah pajaknya ditanamkan kembali); serta PT Archipel Digital yang rugi GloBE Rp20.000.000.000 tanpa pajak tercakup. Biaya gaji yang memenuhi syarat seluruh entitas di Indonesia Rp120.000.000.000 dan nilai tercatat aset berwujud yang memenuhi syarat Rp800.000.000.000. Persentase transisi SBIE 2026: 9,4% atas gaji dan 7,4% atas aset berwujud. Data CbCR berkualitas yurisdiksi Indonesia 2026: pendapatan EUR 210 juta dan ETR sederhana 9%. Indonesia menerapkan DMTT yang memenuhi syarat. Data lain: kurs rata-rata EUR 1 = Rp18.200 dan PPN yang disetor entitas di Indonesia Rp60.000.000.000.",
      data: [
        ["Pendapatan konsolidasi 2021–2025 (EUR juta)", "780 / 720 / 760 / 740 / 810"],
        ["PT Archipel Nikel: laba / pajak tercakup", "Rp320.000.000.000 / Rp4.600.000.000"],
        ["PT Archipel Distribusi: laba / pajak tercakup", "Rp130.000.000.000 / Rp27.600.000.000"],
        ["BUT Archipel Engineering: laba / PPh badan BUT", "Rp50.000.000.000 / Rp11.000.000.000"],
        ["PT Archipel Digital: rugi / pajak tercakup", "(Rp20.000.000.000) / Rp0"],
        ["Gaji / aset berwujud seluruh entitas Indonesia", "Rp120.000.000.000 / Rp800.000.000.000"],
        ["Persentase SBIE 2026", "gaji 9,4%; aset 7,4%"],
        ["CbCR Indonesia 2026", "pendapatan EUR 210 juta; ETR sederhana 9%"]
      ],
      langkah: [
        { no: 1, pertanyaan: "Kesimpulan cakupan grup dan safe harbour transisi CbCR untuk yurisdiksi Indonesia tahun pajak 2026 adalah ...", tipe: "pilihan",
          opsi: { A: "Grup tidak masuk cakupan karena pendapatan 2022 dan 2024 di bawah EUR 750 juta, sehingga safe harbour transisi tidak perlu diuji", B: "Grup masuk cakupan (2023 dan 2025 ≥ EUR 750 juta); Indonesia gagal ketiga uji safe harbour: ETR sederhana 9% < 17%, pendapatan > EUR 10 juta, laba > SBIE", C: "Grup masuk cakupan dan Indonesia lolos safe harbour karena ETR sederhana 9% melebihi persentase SBIE, sehingga top-up dianggap nol", D: "Grup masuk cakupan dan Indonesia lolos uji de minimis karena pendapatan yurisdiksi EUR 210 juta masih di bawah ambang EUR 750 juta" }, jawaban: "B",
          petunjuk: ["Tahun uji untuk 2026 adalah 2022–2025: 2023 (760) dan 2025 (810) memenuhi", "Ambang ETR sederhana 2026 adalah 17%; de minimis menuntut pendapatan di bawah EUR 10 juta; uji laba rutin membandingkan laba dengan SBIE", "Jawaban: B"],
          penjelasan: "Ambang EUR 750 juta terpenuhi pada 2 dari 4 tahun sebelumnya. Ketiga uji safe harbour transisi gagal, sehingga pajak tambahan dihitung penuh." },
        { no: 2, pertanyaan: "Berapa laba GloBE neto yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 480000000000, toleransi: 0,
          petunjuk: ["Seluruh entitas konstituen di Indonesia digabung, termasuk BUT dan entitas yang rugi", "320 + 130 + 50 − 20 miliar", "Rp480.000.000.000"],
          penjelasan: "BUT adalah entitas konstituen yang berlokasi di Indonesia, dan rugi PT Archipel Digital mengurangi laba yurisdiksi (jurisdictional blending)." },
        { no: 3, pertanyaan: "Berapa ETR GloBE yurisdiksi Indonesia (%)?", tipe: "angka", jawaban: 9, toleransi: 0.01,
          petunjuk: ["Pajak tercakup = 4,6 + 27,6 + 11 + 0 = Rp43,2 miliar", "ETR = pajak tercakup ÷ laba GloBE neto", "43,2 ÷ 480 = 9%"],
          penjelasan: "ETR dihitung per yurisdiksi; PT Archipel Nikel sendiri ber-ETR sekitar 1,4%, tetapi digabung dengan entitas lain. PPN bukan pajak tercakup." },
        { no: 4, pertanyaan: "Berapa SBIE yurisdiksi Indonesia tahun 2026 (Rp)?", tipe: "angka", jawaban: 70480000000, toleransi: 0,
          petunjuk: ["Pakai persentase tahun 2026, bukan 2025", "9,4% × Rp120 miliar = Rp11,28 miliar; 7,4% × Rp800 miliar = Rp59,2 miliar", "Rp70.480.000.000"],
          penjelasan: "SBIE memakai biaya gaji dan aset berwujud seluruh entitas di yurisdiksi dengan persentase transisi tahun yang bersangkutan." },
        { no: 5, pertanyaan: "Berapa laba lebih (excess profit) yurisdiksi Indonesia (Rp)?", tipe: "angka", jawaban: 409520000000, toleransi: 0,
          petunjuk: ["Laba lebih = laba GloBE neto − SBIE", "480 − 70,48 miliar", "Rp409.520.000.000"],
          penjelasan: "Laba lebih adalah dasar pengenaan pajak tambahan." },
        { no: 6, pertanyaan: "Berapa DMTT yurisdiksi Indonesia tahun pajak 2026 (Rp)?", tipe: "angka", jawaban: 24571200000, toleransi: 0,
          petunjuk: ["Persentase top-up = 15% − 9% = 6%", "DMTT = 6% × laba lebih", "6% × Rp409.520.000.000 = Rp24.571.200.000"],
          penjelasan: "Tanpa penyesuaian lain, DMTT = persentase top-up × laba lebih." },
        { no: 7, pertanyaan: "Siapa yang memungut pajak tambahan itu dan kapan batas GloBE Information Return tahun pajak 2026?", tipe: "pilihan",
          opsi: { A: "IIR Ardenia memungut seluruh Rp24.571.200.000 karena IIR didahulukan dari DMTT; GIR paling lambat 30 Juni 2027", B: "DMTT Indonesia dipungut lebih dulu dan mengurangi top-up IIR Ardenia atas Indonesia; GIR paling lambat 31 Maret 2028", C: "UTPR Indonesia memungutnya karena UTPR mulai berlaku tahun pajak 2026; GIR paling lambat 30 Juni 2028", D: "DMTT Indonesia dipungut; GIR paling lambat 30 Juni 2028 karena tahun pertama mendapat 18 bulan" }, jawaban: "B",
          petunjuk: ["Urutan penerapan: DMTT, lalu IIR, lalu UTPR", "Grup sudah masuk cakupan sejak 2025 (uji 2021–2024: 2021 dan 2023 paling sedikit EUR 750 juta), jadi 2026 bukan tahun pertama", "31 Desember 2026 + 15 bulan = 31 Maret 2028"],
          penjelasan: "DMTT yang memenuhi syarat mengurangi pajak tambahan menurut IIR; UTPR hanya cadangan. Karena 2026 bukan tahun pertama, tenggat GIR 15 bulan setelah akhir tahun pajak, yaitu 31 Maret 2028." }
      ],
      kesimpulan: "Grup Archipel masuk cakupan dan gagal safe harbour transisi. Dengan blending yurisdiksi (termasuk BUT dan entitas rugi), laba GloBE Rp480 miliar dan pajak tercakup Rp43,2 miliar menghasilkan ETR 9%; SBIE 2026 Rp70,48 miliar sehingga laba lebih Rp409,52 miliar dan DMTT 6% × laba lebih = Rp24.571.200.000, dipungut Indonesia lebih dulu daripada IIR Ardenia. GIR tahun pajak 2026 paling lambat 31 Maret 2028.",
      kalkulatorRef: "gmt",
      kalkulatorInput: { pendapatanGrup: 810000000, tahun: "2026", globeIncome: 480000000000, coveredTaxes: 43200000000, gaji: 120000000000, aset: 800000000000, qdmtt: 0 }
    }
  ],
  tips: [
    { teks: "Soal BUT selalu tiga lapis: hitung laba BUT (Pasal 5: koreksi pembayaran ke kantor pusat, force of attraction), lalu PPh badan 22%, baru branch profit tax atas PKP sesudah pajak, ditambah penghasilan yang dikenai PPh final setelah dikurangi PPh finalnya (tidak terutang hanya bila seluruhnya ditanamkan kembali; penanaman kembali sebagian tidak mengurangi dasar).", tagSebab: "salah-hitung" },
    { teks: "Pasal 24: keluarkan dulu cabang yang rugi, hitung batas untuk setiap jenis penghasilan dari setiap negara, lalu ambil nilai terkecil per jenis; jangan menggabungkan jenis penghasilan dalam satu batas atau menjumlahkan batasnya.", tagSebab: "lupa-pasal" },
    { teks: "Sebelum memakai tarif P3B, cari kalimat SKD sah dan pemilik manfaat di stem; tanpa itu kembali ke 20%. Sebaliknya, P3B tidak pernah menghapus PPN atas pemanfaatan jasa luar negeri.", tagSebab: "lupa-pasal" },
    { teks: "Baca dua kali kata pembalik dan batas waktu: “kecuali”, “bukan”, “paling lama”, “paling lambat”, “pertama kalinya”, serta tanggal realisasi dibandingkan tanggal pernyataan.", tagSebab: "salah-baca" },
    { teks: "Angka yang berubah: setor tanggal 15 (bukan 10), Form DGT PMK 112/2025 (bukan PER-25/PJ/2018), PMK 172/2023 (bukan PMK 213/2016), ambang ETR safe harbour 16% untuk 2025 (bukan 15%).", tagSebab: "angka-usang" },
    { teks: "GloBE dihitung per yurisdiksi, bukan per entitas; dan ambang GloBE (EUR 750 juta) berbeda dari ambang CbCR (Rp11 triliun).", tagSebab: "salah-klasifikasi" }
  ]
});
