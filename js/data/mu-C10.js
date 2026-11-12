/* Modul C10 — Pajak Internasional (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi dan gaya UKP 26–29 Oktober 2026 (kasus panjang, opsi menjebak), bukan soal asli ujian.
   Angka rujukan: docs/research/02b bagian D dan E; docs/research/02a bagian C.6 (PPh 26, PMK 112/2025). Tarif P3B per negara selalu dinyatakan di stem atau kutipan. */
UKP.register({
  meta: {
    kode: "C10", slug: "pajak-internasional", nama: "Pajak Internasional",
    diujiDi: ["C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { C: 0.12 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu membaca P3B secara runtut (residen dan tie-breaker, pasal distributif, tarif maksimum, beneficial owner, SKD/Form DGT PMK 112/2025) lalu menerapkannya pada pemotongan PPh Pasal 26, BUT dan branch profit tax, serta kredit pajak luar negeri Pasal 24 yang dihitung per jenis penghasilan untuk tiap negara. Peserta juga mampu menguji transaksi afiliasi dengan instrumen Pasal 18 (DER, CFC, conduit, PKKU dan dokumentasi PMK 172/2023), memilih jalur penyelesaian sengketa internasional (MAP, APA), dan memahami kewajiban pertukaran informasi keuangan UU 9/2017.",
    dasarHukumUtama: [
      "UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 2 ayat (3) dan (5), 5, 18, 24, 26, 32A",
      "PMK 112/2025 (tata cara penerapan P3B, Form DGT) menggantikan PER-25/PJ/2018",
      "PMK 172/2023 (PKKU, dokumentasi harga transfer, MAP, APA)",
      "PMK 35/PMK.03/2019 (penentuan BUT); PMK 14/PMK.03/2011 (penanaman kembali laba BUT)",
      "PMK 169/PMK.010/2015 (DER); PMK 107/PMK.03/2017 dan perubahannya (CFC)",
      "UU 9/2017; PMK 108/2025 (akses informasi keuangan: CRS dan CARF; berlaku 1 Januari 2026, mencabut PMK 70/PMK.03/2017 beserta perubahannya)",
      "PMK 81/2024 (pengembalian pajak yang seharusnya tidak terutang; menggantikan PMK 187/PMK.03/2015 sejak 1 Januari 2025; Pasal 122 sampai dengan Pasal 137, khusus kelebihan pemotongan terkait P3B Pasal 133 sampai dengan Pasal 136 dengan pemohon pemotong)",
      "PMK 81/2024 dan PER-11/PJ/2025 (Coretax, setor tanggal 15, BPNR)"
    ],
    perubahanTerbaru: [
      { sebelum: "Penerapan P3B dengan Form DGT 7 bagian menurut PER-25/PJ/2018; SKD cukup diterima sebelum batas waktu SPT Masa", sesudah: "PMK 112/2025: Form DGT 6 bagian, disampaikan kepada pemotong dalam rangka pemotongan, lalu dicek dan diunggah pemotong melalui portal wajib pajak; SKD lama tetap berlaku sampai periodenya habis (PENG-2/PJ.09/2026)", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" },
      { sebelum: "Dokumentasi TP diatur PMK 213/PMK.03/2016, MAP PMK 49/PMK.03/2019, APA dan PKKU PMK 22/PMK.03/2020", sesudah: "Satu payung PMK 172/2023: PKKU, dokumentasi (mulai TP 2024), secondary adjustment, MAP dan APA terpadu", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { sebelum: "Permohonan SKD WPLN dan SKD SPDN lewat DJP Online/KPP", sesudah: "Diajukan dan diterbitkan melalui Coretax (termasuk layanan SKD dalam 12 layanan Coretax)", dasar: "PMK 81/2024; PER-8/PJ/2025", berlakuSejak: "2025-01-01" },
      { sebelum: "Penyetoran PPh Pasal 26 paling lambat tanggal 10 bulan berikutnya", sesudah: "Paling lambat tanggal 15 bulan berikutnya; SPT Masa PPh Unifikasi paling lambat 20 hari setelah masa berakhir", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Pengembalian pajak yang seharusnya tidak terutang (termasuk PPh 26 yang dipotong melebihi tarif P3B karena SKD/Form DGT terlambat) diatur PMK 187/PMK.03/2015", sesudah: "PMK 187/PMK.03/2015 dicabut; pengembalian pajak yang seharusnya tidak terutang diatur PMK 81/2024 dalam kerangka Coretax (Pasal 122 sampai dengan Pasal 137; kelebihan pemotongan terkait P3B diminta kembali oleh pemotong dengan surat kuasa WPLN, atau oleh WPLN sendiri bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT, Pasal 133 sampai dengan Pasal 135)", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Bukti potong PPh 26 dalam format bupot unifikasi PER-24/PJ/2021", sesudah: "Kode bukti potong Coretax: BPNR untuk WPLN (PPh 26 selain pekerjaan/jasa/kegiatan orang pribadi, PPh 4 ayat (2), PPh 15)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "Akses informasi keuangan diatur PMK 70/PMK.03/2017 beserta perubahannya (terakhir PMK 47/2024); belum ada kewajiban pelaporan CARF bagi penyedia jasa aset kripto", sesudah: "PMK 108/2025 mencabut PMK 70/PMK.03/2017 beserta perubahannya: Lembaga Simpanan mencakup pengelola uang elektronik tertentu (e-wallet) dan mata uang digital bank sentral; PJAK pelapor CARF wajib uji tuntas dan laporan tahunan (data 2026 paling lambat 30 April 2027); laporan nihil wajib; identifikasi atas data sampai 2025 dan laporan yang disampaikan sampai 30 September 2026 masih rezim lama, sedangkan laporan atau pembetulan yang disampaikan sejak 1 Oktober 2026 memakai PMK 108/2025", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
      { sebelum: "Penelitian keberatan tanpa mekanisme khusus tukar informasi dengan otoritas mitra", sesudah: "PMK 71/2026 mengatur tukar informasi dengan otoritas pajak mitra dalam penelitian keberatan dan perpanjangan jangka waktu tanggapan", dasar: "PMK 71/2026", berlakuSejak: "2026-10-02" }
    ],
    lembarRingkas: [
      { label: "PPh 26 umum (dividen, bunga, royalti, sewa, jasa, hadiah)", nilai: "20% × bruto, final (kecuali BUT/berubah status)", dasar: "Pasal 26 ayat (1) dan (5) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "PPh 26 penjualan harta tertentu di Indonesia (daftar Pasal 2 ayat (4) PMK 82/PMK.03/2009)/saham nonbursa, termasuk conduit", nilai: "20% × 25% = 5% harga jual, final; saham perseroan dalam negeri nonbursa dipotong pembeli (pembeli WPLN: Perseroan menjadi pemungut)", dasar: "Pasal 26 ayat (2) dan (2a) UU PPh; PMK 82/PMK.03/2009; Pasal 238 sampai 240 PMK 81/2024 (saham perseroan dalam negeri nonbursa, sejak 1 Januari 2025; sebelumnya KMK 434/KMK.04/1999); PMK 258/PMK.03/2008 (saham perusahaan antara/conduit)", berlakuSejak: "2009-01-01" },
      { label: "PPh 26 premi asuransi ke luar negeri", nilai: "Tertanggung 10% · asuransi 2% · reasuransi 1% dari premi", dasar: "KMK 624/KMK.04/1994", berlakuSejak: "1995-01-01" },
      { label: "Syarat tarif P3B", nilai: "Form DGT (6 bagian) diterima pemotong dalam rangka pemotongan, dicek, dan diunggah melalui portal wajib pajak; beneficial owner; tanpa penyalahgunaan", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" },
      { label: "SKD lama (PER-25/PJ/2018)", nilai: "Tetap berlaku sampai periodenya berakhir", dasar: "PENG-2/PJ.09/2026", berlakuSejak: "2026-01-09" },
      { label: "Setor PPh 26", nilai: "Tanggal 15 bulan berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Lapor SPT Masa PPh Unifikasi / PPh 21/26", nilai: "20 hari setelah masa pajak berakhir", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Bukti potong WPLN badan", nilai: "BPNR (PPh 26 orang pribadi atas jasa: SPT Masa PPh 21/26)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { label: "Residen orang pribadi", nilai: "> 183 hari dalam 12 bulan, bertempat tinggal, atau berniat tinggal", dasar: "Pasal 2 ayat (3) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "WNA berkeahlian tertentu (SPDN)", nilai: "Hanya penghasilan dari Indonesia selama 4 tahun pajak", dasar: "Pasal 4 ayat (1a) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02" },
      { label: "BUT jasa (tanpa P3B)", nilai: "> 60 hari dalam 12 bulan (P3B dapat menetapkan time test lain, umumnya 60–183 hari)", dasar: "Pasal 2 ayat (5) UU PPh; PMK 35/PMK.03/2019", berlakuSejak: "2009-01-01" },
      { label: "Tarif PPh badan dan BUT", nilai: "22%", dasar: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" },
      { label: "Branch profit tax", nilai: "20% × (PKP − PPh) atau tarif P3B; tidak terutang bila SELURUH laba setelah pajak ditanam kembali di Indonesia paling lambat akhir tahun pajak berikutnya dan tidak dialihkan 2 tahun sejak produksi komersial (perusahaan baru) atau 3 tahun (bentuk lain)", dasar: "Pasal 26 ayat (4) UU PPh; PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01" },
      { label: "Pelayaran/penerbangan luar negeri", nilai: "2,64% × peredaran bruto, final", dasar: "KMK 417/KMK.04/1996", berlakuSejak: "1996-06-14" },
      { label: "Kredit PPh 24", nilai: "Per jenis penghasilan untuk tiap negara; terkecil: pajak LN (≤ tarif P3B), pajak LN dibayar, dan neto jenis itu ÷ PKP × PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
      { label: "Rugi luar negeri / sisa kredit", nilai: "Tidak digabung; sisa kredit hangus (tanpa carry forward)", dasar: "Pasal 24 UU PPh; Pasal 4 ayat (3) dan Pasal 7 PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
      { label: "DER maksimum", nilai: "4 : 1, rata-rata saldo akhir bulan", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" },
      { label: "CFC (deemed dividend)", nilai: "≥ 50% badan LN nonbursa; bulan ke-4 setelah batas SPT LN, atau bulan ke-7", dasar: "Pasal 18 ayat (2) UU PPh; PMK 107/PMK.03/2017 dan perubahannya", berlakuSejak: "2009-01-01" },
      { label: "Hubungan istimewa", nilai: "Kepemilikan ≥ 25%, penguasaan, keluarga satu derajat", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Master File dan Local File", nilai: "Peredaran bruto tahun pajak sebelumnya > Rp50 M; transaksi afiliasi tahun sebelumnya: barang berwujud > Rp20 M, atau jasa/bunga/HTB/lainnya > Rp5 M masing-masing; atau afiliasi di yurisdiksi bertarif PPh lebih rendah (< 22%)", dasar: "Pasal 16 ayat (3) PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Ketersediaan dokumen TP", nilai: "Paling lama 4 bulan setelah akhir tahun pajak; ikhtisar dilampirkan SPT", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "CbCR", nilai: "Konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "MAP", nilai: "Batas sesuai P3B (umumnya 3 tahun sejak pemberitahuan pertama); dapat bersamaan dengan keberatan", dasar: "Pasal 25 P3B; PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Keberatan (tetap berjalan saat MAP)", nilai: "3 bulan sejak SKP dikirim", dasar: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "APA", nilai: "Paling lama 5 tahun pajak; roll-back bila syarat terpenuhi", dasar: "Pasal 18 ayat (3a) UU PPh; PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Laporan rekening keuangan (data 2026 dst.)", nilai: "CRS: LJK di bawah pengawasan OJK → OJK paling lambat 1 Agustus, OJK → DJP 31 Agustus; LJK lainnya dan entitas lain → langsung DJP 30 April. Domestik: semua pelapor, termasuk bank → langsung DJP (Portal Wajib Pajak) 30 April. Tenggat pada hari libur → hari kerja berikutnya; laporan nihil wajib", dasar: "PMK 108/2025 Pasal 9 ayat (1), Pasal 11 ayat (5) sampai (7), Pasal 36, Pasal 37", berlakuSejak: "2026-01-01" },
      { label: "Ambang laporan domestik", nilai: "OP di Lembaga Simpanan: agregat seluruh rekening pada lembaga yang sama per 31 Desember ≥ Rp1 miliar; rekening entitas di Lembaga Simpanan serta rekening di Lembaga Kustodian/Entitas Investasi: tanpa batas saldo", dasar: "PMK 108/2025 (OP: Pasal 35 ayat (8) huruf a angka 1)", berlakuSejak: "2026-01-01" },
      { label: "PJAK pelapor CARF", nilai: "Uji tuntas (self-certification pengguna); laporan tahunan ke DJP (bukan jalur OJK 1 Agustus), data 2026 paling lambat 30 April 2027; laporan nihil tetap wajib; pertukaran mulai 2027", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
      { label: "Peralihan akses informasi keuangan", nilai: "Identifikasi atas data sampai 2025 dan laporan yang disampaikan sampai 30 September 2026: PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024; laporan atau pembetulan yang disampaikan sejak 1 Oktober 2026 (termasuk atas data 2025) dan laporan data 2026 (disampaikan sejak 2027): PMK 108/2025", dasar: "Pasal 59 PMK 108/2025", berlakuSejak: "2026-01-01" },
      { label: "Pajak minimum global", nilai: "Grup ≥ EUR750 juta; ETR 15%; IIR/DMTT 2025, UTPR 2026", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2025-01-01" },
      { label: "PPN pemanfaatan JKP/BKP tidak berwujud dari LN", nilai: "12% × DPP 11/12 (efektif 11%), dipungut sendiri; tak terpengaruh P3B", dasar: "Pasal 4 ayat (1) huruf d dan e UU PPN; PMK 131/2024", berlakuSejak: "2025-01-01" },
      { label: "Kurs DPP PPh 26 dalam valuta asing", nilai: "Kurs KMK yang berlaku saat terutang (dibayar, disediakan untuk dibayar, atau jatuh tempo, mana lebih dahulu)", dasar: "Pasal 26 UU PPh; KMK kurs mingguan", berlakuSejak: "2009-01-01" },
      { label: "Kurs pembukuan vs kurs pajak", nilai: "Pembukuan: kurs transaksi/kurs tengah BI, saldo akhir dengan kurs penutup; pajak dipotong/DPP: kurs KMK", dasar: "PSAK 221; PP 94/2010 Pasal 9", berlakuSejak: "2024-01-01" },
      { label: "Selisih kurs pelunasan utang royalti/jasa valas", nilai: "Diakui fiskal mengikuti pembukuan taat asas; PPh 26 rupiah yang sudah terutang tidak dihitung ulang", dasar: "Pasal 4 ayat (1) huruf l dan 6 ayat (1) huruf e UU PPh; PP 94/2010 Pasal 9", berlakuSejak: "2009-01-01" },
      { label: "Time test BUT jasa (P3B)", nilai: "Hari proyek sama/berhubungan dalam 12 bulan bergulir (dapat melintasi dua tahun kalender)", dasar: "Pasal 2 ayat (5) UU PPh; Pasal 5 ayat (3) huruf b P3B", berlakuSejak: "2009-01-01" },
      { label: "Jangka waktu proyek konstruksi/instalasi (P3B)", nilai: "◐ Sejak persiapan di lokasi sampai selesai; termasuk henti sementara dan pekerjaan subkontraktor", dasar: "Pasal 5 ayat (3) huruf a P3B; Commentary Model OECD Pasal 5", berlakuSejak: "2009-01-01" },
      { label: "Indikator TP di dalam rentang interkuartil", nilai: "Tidak dikoreksi; indikator di luar rentang disesuaikan ke titik yang paling tepat sesuai kesebandingan, atau ke median bila titik itu tidak dapat ditentukan", dasar: "Pasal 12 ayat (1), (6), dan (7) PMK 172/2023", berlakuSejak: "2023-12-29" }
    ]
  },
  topik: [
    {
      id: "C10.1", slug: "p3b-struktur-hak-pemajakan", judul: "Struktur P3B, residen dan tie-breaker, hak pemajakan, beneficial owner, SKD/Form DGT",
      estimasiMenit: 18, jenisDominan: ["klasifikasi", "kasus"],
      ringkasan: [
        "P3B dibuat berdasarkan Pasal 32A UU PPh dan berkedudukan sebagai lex specialis: P3B tidak menciptakan pajak baru, hanya membatasi hak pemajakan negara sumber. Bila P3B tidak membatasi suatu penghasilan, berlaku tarif domestik (PPh 26 20%).",
        "OECD Model berorientasi negara domisili; UN Model memberi hak lebih besar kepada negara sumber (service PE, royalti dipajaki di sumber). P3B Indonesia umumnya memuat unsur UN Model; MLI berlaku bagi Indonesia sejak 1 Agustus 2020 dan menambahkan principal purpose test (PPT).",
        "Urutan membaca P3B: Pasal 1 (orang yang tercakup) dan 2 (pajak yang tercakup) → Pasal 4 (residen dan tie-breaker) → pasal distributif 6–21 → Pasal 23 (metode penghindaran) → Pasal 25 (MAP) dan 26 (pertukaran informasi).",
        "Residen domestik orang pribadi: bertempat tinggal di Indonesia, berada lebih dari 183 hari dalam 12 bulan, atau dalam satu tahun pajak berada dan berniat tinggal (Pasal 2 ayat (3) UU PPh). Bila residen di dua negara, tie-breaker Model OECD: tempat tinggal tetap → pusat kepentingan vital → tempat kebiasaan berdiam → kewarganegaraan → MAP; rumusan tiap P3B dapat berbeda sehingga teks P3B yang berlaku harus dibaca.",
        "Hak pemajakan pokok: laba usaha hanya di negara domisili kecuali melalui BUT (Pasal 7); dividen, bunga, royalti dibagi dengan tarif maksimum negara sumber (Pasal 10–12); harta tak gerak di negara letak (Pasal 6 dan 13 ayat (1)); pekerjaan di negara tempat bekerja bila lebih dari 183 hari atau dibayar/dibebankan pihak di negara sumber (Pasal 15); fee direksi/komisaris dan artis/olahragawan di negara sumber tanpa batas tarif (Pasal 16 dan 17).",
        "Tarif P3B atas dividen, bunga, dan royalti hanya untuk beneficial owner: bukan agen, nominee, atau conduit, memiliki kendali atas penghasilan dan menanggung risikonya; skema yang salah satu tujuan utamanya memperoleh manfaat P3B dapat ditolak (PPT MLI).",
        "Sejak 31 Desember 2025 PMK 112/2025 menggantikan PER-25/PJ/2018: Form DGT 6 bagian disampaikan kepada pemotong dalam rangka pemotongan, lalu dicek dan diunggah pemotong melalui portal wajib pajak (Pasal 8 ayat (1) dan Pasal 10 ayat (3)); bila syaratnya tidak terpenuhi saat pemotongan, dipotong menurut UU PPh 20% (Pasal 10 ayat (4)).",
        "Pengertian perpajakan internasional: ketentuan pajak atas transaksi atau penghasilan yang melintasi batas yurisdiksi. Sumber hukumnya tiga lapis: hukum domestik (UU PPh, terutama Pasal 2, 5, 18, 24, 26, dan 32A), perjanjian bilateral (P3B dan perjanjian pertukaran informasi), serta perjanjian multilateral (MLI, Konvensi MAC). Asas domisili memajaki penghasilan residen dari seluruh dunia, asas sumber memajaki penghasilan yang bersumber di wilayahnya; benturan keduanya menimbulkan pemajakan berganda yuridis (satu wajib pajak, dua negara) yang diatasi kredit pajak Pasal 24 secara sepihak atau P3B.",
        "Pengertian khusus yang dibaca sebelum pasal distributif: residen (Pasal 4 P3B), BUT (Pasal 5), beneficial owner (Pasal 10–12), dan sumber penghasilan (tempat pembayar berkedudukan, tempat harta berada, atau tempat kegiatan dilakukan). Istilah yang tidak didefinisikan P3B diartikan menurut hukum domestik negara yang menerapkan P3B, kecuali konteksnya menghendaki lain (Pasal 3 ayat (2) Model OECD).",
        "Dari sudut negara sumber, pasal distributif P3B memberi tiga macam hak: hak pemajakan penuh (rumusan 'dapat dikenai pajak' tanpa batas tarif: penghasilan harta tak gerak, laba yang diatribusikan kepada BUT, fee direksi/komisaris, artis dan atlet), sehingga berlaku tarif domestik; hak pemajakan terbatas (dividen, bunga, royalti: 'dapat juga dikenai pajak' tetapi tidak melebihi tarif maksimum P3B); dan pelepasan hak pemajakan (rumusan 'hanya dapat dikenai pajak' di negara domisili: laba usaha tanpa BUT, pensiun swasta, keuntungan pengalihan harta yang tidak diberikan kepada negara sumber), sehingga Indonesia tidak memotong PPh 26 bila syarat P3B dipenuhi.",
        "Ketentuan khusus P3B di luar pasal distributif (penomoran Model OECD 2017; nomor dalam P3B tertentu dapat berbeda): nondiskriminasi (Pasal 24: warga negara dan BUT negara mitra tidak boleh dikenai pajak yang lebih berat daripada pihak dalam negeri dalam keadaan yang sama, tanpa kewajiban memberi pengurangan pribadi kepada nonresiden; branch profit tax lazim dikecualikan tegas), MAP (Pasal 25), pertukaran informasi (Pasal 26), bantuan penagihan (Pasal 27), anggota misi diplomatik dan konsulat (Pasal 28), serta hak atas manfaat (Pasal 29: limitation on benefits dan principal purpose test, yang bagi Indonesia berlaku melalui MLI)."
      ],
      poinKunci: [
        { label: "Kedudukan P3B", nilai: "Lex specialis; hanya membatasi hak pemajakan", dasar: "Pasal 32A UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Residen OP domestik", nilai: "Lebih dari 183 hari dalam 12 bulan (atau bertempat tinggal/berniat tinggal)", dasar: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { label: "MLI bagi Indonesia", nilai: "Berlaku 1 Agustus 2020 (PPT)", dasar: "Perpres 77/2019", berlakuSejak: "2020-08-01" },
        { label: "Form DGT", nilai: "6 bagian (sebelumnya 7); disampaikan WPLN kepada pemotong dalam rangka pemotongan, lalu dicek dan diunggah pemotong melalui portal wajib pajak", dasar: "PMK 112/2025 Pasal 8 ayat (1) dan Pasal 10 ayat (3)", berlakuSejak: "2025-12-31" },
        { label: "Fee direksi/komisaris, artis/olahragawan", nilai: "Dipajaki negara sumber tanpa batas tarif P3B → PPh 26 20%", dasar: "Pasal 16 dan 17 P3B; Pasal 26 UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tiga macam hak pemajakan negara sumber", nilai: "Penuh (tanpa batas tarif) · terbatas (tarif maksimum P3B) · pelepasan (hanya negara domisili)", dasar: "Pasal 6–21 P3B (Model OECD/UN)", berlakuSejak: "2009-01-01" },
        { label: "Istilah yang tidak didefinisikan P3B", nilai: "Diartikan menurut hukum domestik negara yang menerapkan, kecuali konteks menghendaki lain", dasar: "Pasal 3 ayat (2) Model OECD" },
        { label: "Ketentuan khusus P3B", nilai: "Nondiskriminasi, MAP, pertukaran informasi, bantuan penagihan, misi diplomatik, hak atas manfaat (LOB/PPT)", dasar: "Pasal 24–29 Model OECD 2017; MLI (Perpres 77/2019)" }
      ],
      dasarHukum: [
        { pasal: "Pasal 32A UU PPh", catatan: "kewenangan membuat P3B dan perjanjian perpajakan lain" },
        { pasal: "Pasal 2 ayat (3) UU PPh", catatan: "subjek pajak dalam negeri" },
        { pasal: "PMK 112/2025", catatan: "tata cara penerapan P3B, SKD/Form DGT, beneficial owner" },
        { pasal: "Pasal 4, 10–17 P3B (model OECD/UN)", catatan: "residen dan pasal distributif" },
        { pasal: "Pasal 3 ayat (2) dan Pasal 24–29 Model OECD 2017", catatan: "interpretasi istilah dan ketentuan khusus P3B (nomor pasal dalam P3B tertentu dapat berbeda)" }
      ],
      jebakan: [
        { teks: "Memakai aturan PER-25/PJ/2018 (Form DGT 7 bagian, cukup diterima sebelum batas SPT Masa) untuk pemotongan 2026", tagSebab: "angka-usang" },
        { teks: "Mengira semua penghasilan WPLN negara mitra otomatis bertarif 10%: fee komisaris dan honor artis tidak dibatasi P3B sehingga tetap 20%", tagSebab: "salah-klasifikasi" },
        { teks: "Langsung lompat ke kewarganegaraan pada tie-breaker; kewarganegaraan baru uji keempat", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Mr. Lim (residen Singapura, Form DGT sah) adalah komisaris PT Bintang Logistik dan menerima honorarium Rp300.000.000. P3B Pasal 16 memberi hak pemajakan kepada negara tempat perusahaan berkedudukan tanpa batas tarif. PPh 26 yang dipotong?",
        jawaban: "Rp60.000.000",
        langkah: [["Pasal P3B", "Pasal 16 (fee direksi/komisaris)"], ["Batas tarif P3B", "tidak ada → tarif domestik"], ["PPh 26 = 20% × Rp300.000.000", "Rp60.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.2", slug: "but-time-test-atribusi", judul: "BUT dalam P3B, time test, dan atribusi laba",
      estimasiMenit: 16, jenisDominan: ["kasus", "hitung"],
      ringkasan: [
        "BUT (Pasal 2 ayat (5) UU PPh) antara lain: tempat kedudukan manajemen, cabang, kantor perwakilan, gedung kantor, pabrik, bengkel, gudang, ruang promosi dan penjualan, pertambangan, proyek konstruksi/instalasi/perakitan, pemberian jasa lebih dari 60 hari dalam 12 bulan, agen tidak bebas, agen/pegawai asuransi LN, serta komputer/agen elektronik untuk usaha melalui internet.",
        "Bila WPLN berhak atas P3B, time test P3B (misalnya jasa lebih dari 90 atau 183 hari dalam 12 bulan; konstruksi 3–6 bulan) mengesampingkan 60 hari domestik. Frasa “lebih dari” berarti hari ke-90 tepat belum membentuk BUT.",
        "Kegiatan persiapan atau penunjang (penyimpanan atau pameran semata, pembelian barang, pengumpulan informasi) tidak membentuk BUT menurut Pasal 5 ayat (4) P3B; agen tidak bebas yang biasa menutup kontrak atas nama perusahaan LN membentuk BUT, agen bebas tidak.",
        "Atribusi laba (Pasal 7 P3B): BUT diperlakukan sebagai perusahaan terpisah yang bertransaksi wajar; biaya eksekutif dan administrasi umum untuk BUT boleh dikurangkan di mana pun dikeluarkan.",
        "Pasal 5 UU PPh: penghasilan BUT mencakup penghasilan kantor pusat dari usaha sejenis di Indonesia dan penghasilan Pasal 26 yang berhubungan efektif (force of attraction); pembayaran BUT ke kantor pusat berupa royalti, imbalan jasa manajemen/jasa lain, dan bunga (kecuali usaha perbankan) tidak dapat dibiayakan.",
        "BUT dikenai tarif badan 22% dan branch profit tax Pasal 26 ayat (4): 20% (atau tarif P3B) × (PKP − PPh terutang), kecuali seluruh laba setelah pajak ditanamkan kembali di Indonesia sesuai PMK 14/PMK.03/2011. Bila BUT juga memperoleh penghasilan yang dikenai PPh final (mis. bunga deposito), dasarnya = (PKP + penghasilan yang dikenai PPh final) − (PPh terutang + PPh final) (Pasal 6 PMK 14/PMK.03/2011; petunjuk Lampiran 12A PER-11/PJ/2025).",
        "Pembayaran dari WPDN kepada BUT di Indonesia dipotong PPh 23 (BUT adalah subjek pajak dalam negeri secara perlakuan), bukan PPh 26."
      ],
      poinKunci: [
        { label: "BUT jasa (domestik)", nilai: "Lebih dari 60 hari dalam 12 bulan", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tarif PPh BUT", nilai: "22%", dasar: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" },
        { label: "Branch profit tax", nilai: "20% × laba setelah pajak, atau tarif P3B", dasar: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Pembayaran ke kantor pusat", nilai: "Royalti, jasa manajemen, bunga (kecuali bank) bukan biaya", dasar: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01" },
        { label: "Syarat bebas BPT", nilai: "Seluruh laba setelah pajak ditanam kembali paling lambat akhir tahun pajak berikutnya dan diberitahukan dengan SPT Tahunan; tidak dialihkan 2 tahun sejak produksi komersial (perusahaan baru) atau 3 tahun (perusahaan yang sudah berdiri, aktiva tetap, aktiva tak berwujud)", dasar: "Pasal 1 ayat (3), Pasal 2, Pasal 3 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (5) dan Pasal 5 UU PPh", catatan: "pengertian dan objek BUT" },
        { pasal: "PMK 35/PMK.03/2019", catatan: "penentuan BUT" },
        { pasal: "Pasal 26 ayat (4) UU PPh; PMK 14/PMK.03/2011", catatan: "branch profit tax dan penanaman kembali" },
        { pasal: "Pasal 5 dan 7 P3B", catatan: "BUT dan laba usaha" }
      ],
      jebakan: [
        { teks: "Menerapkan 60 hari domestik padahal WPLN berhak P3B dengan time test 90/183 hari", tagSebab: "lupa-pasal" },
        { teks: "Mengurangkan royalti, jasa manajemen, atau bunga yang dibayar BUT ke kantor pusat", tagSebab: "salah-klasifikasi" },
        { teks: "Menghitung branch profit tax dari PKP sebelum pajak", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "BUT perusahaan Jepang memiliki PKP 2025 Rp2.000.000.000 dan tidak menanamkan kembali labanya. Tarif branch profit tax P3B 10%. Berapa PPh badan dan PPh 26 ayat (4)?",
        jawaban: "PPh badan Rp440.000.000; BPT Rp156.000.000",
        langkah: [["PPh badan = 22% × Rp2.000.000.000", "Rp440.000.000"], ["Laba setelah pajak", "Rp1.560.000.000"], ["BPT = 10% × Rp1.560.000.000", "Rp156.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.3", slug: "metode-penghindaran-berganda", judul: "Metode penghindaran pajak berganda: kredit Pasal 24 dan pembebasan",
      estimasiMenit: 16, jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "Pasal 23 P3B memberi dua metode bagi negara domisili: pembebasan (23A) dan kredit (23B). Indonesia pada dasarnya memakai kredit biasa (ordinary credit) melalui Pasal 24 UU PPh.",
        "Kredit dihitung per jenis penghasilan untuk tiap negara atau yurisdiksi (Pasal 6 ayat (2) PMK 192/PMK.03/2018): untuk tiap jenis penghasilan dari tiap negara diambil nilai terkecil antara pajak LN yang seharusnya menurut P3B, pajak LN yang dibayar/terutang, dan (penghasilan jenis itu dari negara itu ÷ PKP) × PPh terutang; seluruh kredit paling tinggi sebesar PPh terutang (Pasal 6 ayat (4) dan ayat (7)). Dua jenis penghasilan dari satu negara tidak digabung.",
        "Penghasilan LN digabung sebesar penghasilan neto, sebelum dikurangi pajak LN (Pasal 4 ayat (2) PMK 192/PMK.03/2018). Kerugian di suatu negara tidak digabungkan dengan penghasilan dalam negeri maupun negara lain.",
        "Pajak LN di atas batas tidak dapat dikreditkan, tidak dapat dibiayakan, dan tidak dapat dibawa ke tahun lain; pemotongan di atas tarif P3B harus dimintakan kembali ke negara sumber.",
        "Negara sumber (Pasal 24 ayat (3)): dividen — negara tempat badan pembayar didirikan; bunga, royalti, sewa harta bergerak — negara tempat pembayar/penanggung; sewa dan penjualan harta tak gerak — letak harta; jasa — negara pembayar; BUT — negara BUT; penjualan saham — negara tempat badan penerbit saham didirikan.",
        "Bila pajak LN yang sudah dikreditkan dikurangkan atau dikembalikan, PPh terutang ditambah pada tahun pengembalian (Pasal 24 ayat (5)).",
        "Metode pembebasan dalam UU PPh: dividen LN dan penghasilan setelah pajak BUT di LN dikecualikan dari objek bila diinvestasikan di Indonesia sesuai syarat (Pasal 4 ayat (3) huruf f angka 2; PMK 18/PMK.03/2021); pajak LN atas penghasilan yang dikecualikan tidak dapat dikreditkan."
      ],
      poinKunci: [
        { label: "Metode kredit", nilai: "Ordinary credit, per jenis penghasilan untuk tiap negara", dasar: "Pasal 24 ayat (1) dan (2) UU PPh; Pasal 6 ayat (2) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
        { label: "Batas kredit", nilai: "Per jenis penghasilan untuk tiap negara: terkecil antara pajak LN sesuai P3B, pajak LN dibayar, dan (neto jenis itu ÷ PKP) × PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
        { label: "Rugi LN", nilai: "Tidak digabung dengan penghasilan DN/negara lain", dasar: "Pasal 24 UU PPh; Pasal 4 ayat (3) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01" },
        { label: "Pengembalian pajak LN", nilai: "Tambah PPh terutang pada tahun pengembalian", dasar: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Pembebasan dividen LN", nilai: "Bila diinvestasikan di Indonesia sesuai syarat; pajak LN tidak dikreditkan", dasar: "Pasal 4 ayat (3) huruf f UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }
      ],
      dasarHukum: [
        { pasal: "Pasal 24 ayat (1)–(5) UU PPh", catatan: "kredit pajak luar negeri dan penentuan sumber" },
        { pasal: "PMK 192/PMK.03/2018 (mencabut KMK 164/KMK.03/2002), terutama Pasal 4 ayat (3), Pasal 6, Pasal 7, dan Pasal 8", catatan: "tata cara pengkreditan: per jenis penghasilan untuk tiap negara, rugi luar negeri, kelebihan kredit, bukti pembayaran" },
        { pasal: "Pasal 23A/23B P3B", catatan: "metode pembebasan/kredit" },
        { pasal: "Pasal 4 ayat (3) huruf f UU PPh; PMK 18/PMK.03/2021", catatan: "pembebasan dividen LN yang diinvestasikan" }
      ],
      jebakan: [
        { teks: "Memakai batas gabungan (overall limitation) seluruh negara, atau menggabungkan beberapa jenis penghasilan dari satu negara dalam satu batas", tagSebab: "lupa-pasal" },
        { teks: "Mengkreditkan pemotongan LN di atas tarif P3B", tagSebab: "lupa-pasal" },
        { teks: "Memasukkan penghasilan LN neto setelah pajak LN atau menggabungkan rugi cabang LN", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "PT C (2025): neto DN Rp2 miliar; negara X neto Rp1 miliar (pajak X Rp300 juta); negara Y neto Rp500 juta (pajak Y Rp50 juta); negara Z rugi Rp200 juta. Berapa kredit PPh 24?",
        jawaban: "Rp270.000.000",
        langkah: [["PKP (rugi Z tidak digabung)", "Rp3.500.000.000"], ["PPh terutang 22%", "Rp770.000.000"], ["Batas X = 1.000/3.500 × 770 jt", "Rp220.000.000 → kredit Rp220.000.000"], ["Batas Y = 500/3.500 × 770 jt", "Rp110.000.000 → kredit Rp50.000.000"], ["Total kredit", "Rp270.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.4", slug: "anti-penghindaran-ps18", judul: "Anti-penghindaran Pasal 18: DER, CFC, SPV/conduit, GAAR",
      estimasiMenit: 18, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "DER (Pasal 18 ayat (1); PMK 169/PMK.010/2015): perbandingan utang terhadap modal paling tinggi 4:1, dihitung dari rata-rata saldo akhir bulan. Bila melebihi, biaya pinjaman yang dapat dibiayakan = (4 × modal ÷ utang) × biaya pinjaman; modal nol atau negatif → seluruh biaya pinjaman tidak dapat dibiayakan.",
        "Modal termasuk pinjaman tanpa bunga dari pihak hubungan istimewa; utang mencakup utang jangka pendek/panjang dan utang dagang yang dibebani bunga. Dikecualikan dari DER: bank, lembaga pembiayaan, asuransi/reasuransi, pertambangan migas/minerba yang kontraknya mengatur DER, WP yang seluruh penghasilannya final, dan infrastruktur.",
        "WP yang memiliki utang swasta luar negeri wajib melaporkannya kepada DJP (lampiran SPT); bila tidak, biaya pinjaman atas utang tersebut tidak dapat dibiayakan.",
        "CFC (Pasal 18 ayat (2)): WPDN yang sendiri atau bersama WPDN lain memiliki paling sedikit 50% saham badan LN nonbursa dianggap memperoleh dividen sebesar porsinya; saat diperoleh bulan ke-4 setelah batas waktu SPT badan LN, atau bulan ke-7 setelah akhir tahun pajak bila tidak ada kewajiban/batas waktu SPT.",
        "Pasal 18 ayat (3b)–(3d): pembelian melalui SPV dapat ditentukan kembali; penjualan saham perusahaan antara (conduit) di negara yang memberikan perlindungan pajak yang punya hubungan istimewa dengan badan Indonesia dianggap penjualan saham badan Indonesia → PPh 26 ayat (2a) 20% × perkiraan neto 25% = 5% harga jual.",
        "Hubungan istimewa (Pasal 18 ayat (4)): kepemilikan langsung/tidak langsung paling rendah 25%, penguasaan melalui manajemen atau teknologi, atau hubungan keluarga sedarah/semenda lurus dan ke samping satu derajat.",
        "PP 55/2022 menegaskan instrumen pencegahan penghindaran pajak dan GAAR: bila instrumen khusus tidak dapat diterapkan, DJP dapat menentukan kembali pajak terutang berdasarkan substansi ekonomi (substance over form)."
      ],
      poinKunci: [
        { label: "DER maksimum", nilai: "4:1 (rata-rata saldo akhir bulan)", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" },
        { label: "Ambang CFC", nilai: "≥ 50% saham badan LN nonbursa (sendiri/bersama WPDN)", dasar: "Pasal 18 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Saat deemed dividend", nilai: "Bulan ke-4 setelah batas SPT LN; bulan ke-7 bila tidak ada SPT", dasar: "PMK 107/PMK.03/2017" },
        { label: "Hubungan istimewa", nilai: "Kepemilikan ≥ 25%, penguasaan, keluarga satu derajat", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Penjualan saham conduit", nilai: "5% efektif dari harga jual", dasar: "Pasal 18 ayat (3c), 26 ayat (2a) UU PPh; PMK 258/PMK.03/2008", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 ayat (1)–(4) UU PPh", catatan: "instrumen anti-penghindaran" },
        { pasal: "PMK 169/PMK.010/2015", catatan: "DER dan pelaporan utang swasta luar negeri" },
        { pasal: "PMK 107/PMK.03/2017 s.t.d.d. PMK 93/PMK.03/2019; Pasal 34 PP 55/2022", catatan: "CFC/deemed dividend: dasar = jumlah neto setelah pajak atas penghasilan tertentu (bunga, royalti, dll.); tanpa kewajiban SPT di luar negeri, dividen dianggap diperoleh akhir bulan ketujuh setelah tahun pajak berakhir" },
        { pasal: "Pasal 32 ayat (4) PP 55/2022", catatan: "GAAR substance over form, dipakai bila penghindaran tidak dapat dicegah instrumen khusus Pasal 32 ayat (2)" }
      ],
      jebakan: [
        { teks: "Memasukkan utang dagang tanpa bunga ke dalam utang DER atau melupakan pinjaman tanpa bunga afiliasi sebagai modal", tagSebab: "salah-hitung" },
        { teks: "Menilai ambang CFC dari kepemilikan satu WPDN saja, padahal dihitung bersama WPDN lain", tagSebab: "salah-baca" },
        { teks: "Memotong 20% × harga jual atas penjualan saham conduit, bukan 20% × 25%", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Utang rata-rata Rp10 miliar, modal rata-rata Rp2 miliar, biaya pinjaman Rp1 miliar. Biaya pinjaman yang dapat dibiayakan?",
        jawaban: "Rp800.000.000 (koreksi positif Rp200.000.000)",
        langkah: [["DER", "10 : 2 = 5 : 1 (melebihi 4 : 1)"], ["Porsi = (4 × 2) ÷ 10", "80%"], ["Biaya dapat dibiayakan = 80% × Rp1 miliar", "Rp800.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.5", slug: "transfer-pricing-dokumentasi", judul: "PKKU, metode harga transfer, dan dokumentasi (Master File, Local File, CbCR)",
      estimasiMenit: 18, jenisDominan: ["kasus", "klasifikasi"],
      ringkasan: [
        "Pasal 18 ayat (3) UU PPh memberi DJP kewenangan menentukan kembali penghasilan dan pengurangan atas transaksi yang dipengaruhi hubungan istimewa dengan prinsip kewajaran dan kelaziman usaha (PKKU). PMK 172/2023 (berlaku 29 Desember 2023) menyatukan PKKU, dokumentasi, MAP, dan APA serta mencabut PMK 213/2016, 49/2019, dan 22/2020.",
        "Tahapan PKKU: identifikasi transaksi dan karakterisasi usaha, analisis kesebandingan (karakteristik barang/jasa, fungsi-aset-risiko, ketentuan kontrak, keadaan ekonomi, strategi usaha), pemilihan metode paling tepat, lalu penentuan harga wajar. Pendekatan ex-ante: memakai data yang tersedia saat transaksi.",
        "Metode: CUP, harga penjualan kembali (distributor), biaya plus (produsen kontrak/jasa), TNMM, pembagian laba, serta metode lain (CUT, penilaian harta, penilaian usaha). Untuk jasa intra-grup berlaku uji manfaat: aktivitas pemegang saham dan jasa duplikatif tidak boleh dibebankan.",
        "Rentang kewajaran berupa rentang interkuartil bila terbentuk dari tiga atau lebih pembanding (dua pembanding: nilai minimum sampai maksimum). Indikator WP di luar rentang disesuaikan ke titik yang paling tepat sesuai kesebandingannya, atau ke median bila titik itu tidak dapat ditentukan.",
        "Master File dan Local File wajib bila tahun sebelumnya peredaran bruto lebih dari Rp50 miliar, atau transaksi afiliasi barang berwujud lebih dari Rp20 miliar, atau jasa/bunga/harta tak berwujud/lainnya lebih dari Rp5 miliar, atau bertransaksi dengan afiliasi di yurisdiksi bertarif PPh di bawah 22%; tersedia paling lama 4 bulan setelah akhir tahun pajak dan ikhtisarnya dilampirkan pada SPT Tahunan.",
        "CbCR wajib bagi entitas induk dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun, disampaikan paling lama 12 bulan setelah akhir tahun pajak.",
        "Koreksi harga transfer (koreksi primer) dapat diikuti secondary adjustment: selisihnya diperlakukan sebagai dividen (PPh 26 bila penerimanya di LN), kecuali dikembalikan dalam bentuk kas/setara kas sebelum surat ketetapan pajak terbit atau Wajib Pajak menyetujui penentuan harga transfer oleh DJP (Pasal 37 ayat (4) dan (5) PMK 172/2023)."
      ],
      poinKunci: [
        { label: "Ambang Master/Local File", nilai: "Omzet > Rp50 M; afiliasi barang > Rp20 M; jasa/bunga/HTB/lainnya > Rp5 M", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Ketersediaan dokumen TP", nilai: "Paling lama 4 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "CbCR", nilai: "Konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Penyesuaian di luar rentang", nilai: "Ke titik paling tepat sesuai kesebandingan; ke median bila titik itu tidak dapat ditentukan", dasar: "Pasal 12 ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Secondary adjustment", nilai: "Selisih dianggap dividen, kecuali dikembalikan dalam kas", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) dan (4) UU PPh", catatan: "kewenangan koreksi dan hubungan istimewa" },
        { pasal: "PMK 172/2023", catatan: "PKKU, dokumentasi TP, secondary adjustment" },
        { pasal: "Pasal 9 P3B", catatan: "associated enterprises dan corresponding adjustment" }
      ],
      jebakan: [
        { teks: "Menyesuaikan ke batas bawah rentang, padahal penyesuaian ke titik yang paling tepat sesuai kesebandingan, atau ke median bila titik itu tidak dapat ditentukan", tagSebab: "salah-klasifikasi" },
        { teks: "Menguji ambang dokumentasi dengan data tahun berjalan; yang dipakai data tahun pajak sebelumnya", tagSebab: "salah-baca" },
        { teks: "Masih merujuk PMK 213/2016 atau PMK 22/2020 yang sudah dicabut", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PT E menjual 100.000 unit ke induk LN Rp8.000/unit. Rentang interkuartil CUP Rp9.000–Rp11.000, median Rp10.000. Berapa koreksi primer dan PPh badannya?",
        jawaban: "Koreksi Rp200.000.000; PPh Rp44.000.000",
        langkah: [["Harga di luar rentang; titik paling tepat tidak dapat ditentukan → median", "Rp10.000"], ["Koreksi = (10.000 − 8.000) × 100.000", "Rp200.000.000"], ["PPh badan 22%", "Rp44.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.6", slug: "map", judul: "Prosedur Persetujuan Bersama (MAP)",
      estimasiMenit: 12, jenisDominan: ["prosedur", "kasus"],
      ringkasan: [
        "MAP (Pasal 25 P3B) adalah prosedur antarotoritas pajak untuk menyelesaikan pengenaan pajak yang tidak sesuai P3B: pajak berganda akibat koreksi harga transfer (corresponding adjustment), sengketa residen atau BUT, serta perbedaan penafsiran P3B.",
        "MAP dapat dipicu permohonan WPDN kepada DJP, permohonan WNI yang mengalami diskriminasi di negara mitra, inisiatif DJP, atau permintaan otoritas pajak negara mitra.",
        "Jangka waktu pengajuan mengikuti P3B, umumnya 3 tahun sejak pemberitahuan pertama atas tindakan yang mengakibatkan pengenaan pajak tidak sesuai P3B.",
        "MAP dapat diajukan dan berjalan bersamaan dengan keberatan, banding, atau upaya hukum lain; karena itu tenggat keberatan 3 bulan tetap harus dijaga.",
        "Otoritas wajib berupaya mencapai kesepakatan tetapi tidak wajib berhasil; standar minimum BEPS Aksi 14 menargetkan penyelesaian rata-rata 24 bulan.",
        "Persetujuan bersama ditindaklanjuti DJP dengan keputusan yang membetulkan/mengubah ketetapan pajak; sanksi dihitung ulang mengikuti pokok yang baru. PMK 172/2023 menggantikan PMK 49/PMK.03/2019 dan berlaku juga untuk MAP yang masih berjalan."
      ],
      poinKunci: [
        { label: "Dasar", nilai: "Pasal 25 P3B; PMK 172/2023", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Batas pengajuan", nilai: "Sesuai P3B, umumnya 3 tahun sejak pemberitahuan pertama", dasar: "Pasal 25 ayat (1) P3B", berlakuSejak: "2023-12-29" },
        { label: "Hubungan dengan keberatan", nilai: "Dapat berjalan bersamaan", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Target penyelesaian", nilai: "Rata-rata 24 bulan (BEPS Aksi 14)", dasar: "Standar minimum BEPS Aksi 14", berlakuSejak: "2016-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 25 P3B (Mutual Agreement Procedure)", catatan: "dasar MAP" },
        { pasal: "PMK 172/2023", catatan: "tata cara MAP; mencabut PMK 49/PMK.03/2019" },
        { pasal: "Pasal 25 ayat (3) UU KUP", catatan: "tenggat keberatan 3 bulan yang tetap berjalan" }
      ],
      jebakan: [
        { teks: "Mengira MAP harus menunggu putusan keberatan/banding atau keberatan harus dicabut lebih dulu", tagSebab: "lupa-pasal" },
        { teks: "Memakai tenggat keberatan 3 bulan untuk MAP; MAP mengikuti P3B (umumnya 3 tahun)", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Otoritas Jepang memberitahukan koreksi laba induk pada 10 Maret 2024. P3B mengatur pengajuan MAP dalam 3 tahun sejak pemberitahuan pertama. Kapan batas akhir pengajuan MAP oleh afiliasinya di Indonesia?",
        jawaban: "10 Maret 2027",
        langkah: [["Titik awal", "Pemberitahuan pertama 10 Maret 2024"], ["Jangka waktu P3B", "3 tahun"], ["Batas akhir", "10 Maret 2027"]]
      },
      verifikasi: "✅"
    },
    {
      id: "C10.7", slug: "apa", judul: "Kesepakatan Harga Transfer (APA): unilateral/bilateral, 5 tahun, roll-back",
      estimasiMenit: 12, jenisDominan: ["konsep", "kasus"],
      ringkasan: [
        "APA (Pasal 18 ayat (3a) UU PPh) adalah kesepakatan tertulis tentang kriteria dan/atau harga wajar transaksi afiliasi untuk periode ke depan: unilateral (WP dengan DJP) atau bilateral/multilateral (DJP dengan otoritas mitra melalui mekanisme MAP).",
        "Periode APA paling lama 5 tahun pajak; dapat diberlakukan untuk tahun pajak sebelum periode APA (roll-back) sepanjang syaratnya dipenuhi, antara lain fakta dan kondisi sama serta belum diterbitkan ketetapan pajak.",
        "Permohonan diajukan sebelum tahun pajak pertama periode APA dimulai; dalam APA bilateral, kesepakatan otoritas mitra memberi kepastian di dua negara, sedangkan APA unilateral tidak mengikat otoritas mitra.",
        "Selama periode APA, WP wajib menyampaikan laporan tahunan pelaksanaan APA dan menjaga asumsi kritis; bila asumsi kritis berubah APA dievaluasi, dan APA dapat dibatalkan bila WP memberikan data tidak benar atau tidak mematuhinya.",
        "Bila realisasi berada di luar rentang/kriteria APA, WP melakukan penyesuaian sesuai mekanisme yang ditetapkan dalam APA; pemeriksaan atas transaksi yang dicakup hanya menguji kepatuhan terhadap APA."
      ],
      poinKunci: [
        { label: "Periode APA", nilai: "Paling lama 5 tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Roll-back", nilai: "Ke tahun sebelum periode APA bila syarat terpenuhi (belum ada SKP)", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
        { label: "Jenis", nilai: "Unilateral, bilateral, multilateral", dasar: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kewajiban selama APA", nilai: "Laporan tahunan pelaksanaan APA; jaga asumsi kritis", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3a) UU PPh", catatan: "kewenangan membuat APA" },
        { pasal: "PMK 172/2023", catatan: "tata cara APA; mencabut PMK 22/PMK.03/2020" },
        { pasal: "Pasal 25 P3B", catatan: "dasar APA bilateral" }
      ],
      jebakan: [
        { teks: "Mengira APA unilateral mencegah koreksi oleh otoritas negara mitra", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap roll-back dapat mencakup tahun yang sudah terbit SKP", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "PT Hana mengajukan APA pada 2026 untuk periode yang dimulai Tahun Pajak 2027. Berapa periode paling lama APA dan tahun terakhirnya?",
        jawaban: "5 tahun pajak, 2027–2031",
        langkah: [["Tahun pertama", "2027"], ["Periode paling lama", "5 tahun pajak"], ["Tahun terakhir", "2031"]]
      },
      verifikasi: "◐",
      peringatan: "Riset belum memverifikasi jangka waktu permohonan APA dan rincian syarat roll-back dalam teks PMK 172/2023; ringkasan hanya memuat syarat yang lazim (fakta sama, belum ada SKP)."
    },
    {
      id: "C10.8", slug: "pertukaran-informasi", judul: "Pertukaran informasi (EoI, AEoI/CRS/CARF) dan bantuan penagihan pajak",
      estimasiMenit: 12, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "Pasal 26 P3B memungkinkan pertukaran informasi atas permintaan (on request), spontan, dan otomatis; informasi dijaga kerahasiaannya dan negara diminta tidak boleh menolak semata karena informasi dipegang bank atau lembaga keuangan.",
        "Dasar multilateral: Konvensi MAC (Perpres 159/2014) dan MCAA untuk CRS serta CbCR; Indonesia mulai bertukar informasi CRS September 2018.",
        "UU 9/2017 (penetapan Perppu 1/2017) memberi DJP akses informasi keuangan untuk kepentingan perpajakan; ketentuan rahasia bank tidak menghalangi.",
        "PMK 108/2025 (ditetapkan 29 Desember 2025, diundangkan 31 Desember 2025, berlaku 1 Januari 2026) adalah petunjuk teknis akses informasi keuangan yang berlaku; PMK ini mencabut PMK 70/PMK.03/2017 beserta perubahannya (PMK 73/PMK.03/2017, PMK 19/PMK.03/2018, dan PMK 47/2024), sedangkan dasar undang-undangnya tetap UU 9/2017. Lembaga keuangan pelapor (lembaga jasa keuangan sektor perbankan, pasar modal, dan perasuransian; LJK lainnya; entitas lain) wajib melakukan prosedur identifikasi (uji tuntas) rekening keuangan dan menyampaikan laporan otomatis.",
        "Saluran dan batas waktu laporan rekening keuangan: laporan CRS (internasional) dari LJK di bawah pengawasan OJK disampaikan kepada OJK paling lambat 1 Agustus, lalu OJK meneruskannya kepada DJP paling lambat 31 Agustus; laporan CRS dari LJK lainnya dan entitas lain disampaikan langsung kepada DJP melalui Portal Wajib Pajak paling lambat 30 April. Laporan domestik dari semua lembaga keuangan pelapor, termasuk bank yang diawasi OJK, disampaikan langsung kepada DJP melalui Portal Wajib Pajak paling lambat 30 April. Bila batas waktu jatuh pada hari Sabtu, Minggu, hari libur nasional, atau cuti bersama, laporan disampaikan paling lambat hari kerja berikutnya. Laporan nihil tetap wajib bila tidak ada rekening yang wajib dilaporkan. Untuk kepentingan domestik, rekening orang pribadi pada Lembaga Simpanan dilaporkan bila saldo agregat seluruh rekeningnya pada lembaga yang sama per 31 Desember tahun pelaporan paling sedikit Rp1 miliar atau setara valas (versi awal PMK 70/PMK.03/2017 memakai Rp200 juta); rekening entitas pada Lembaga Simpanan serta rekening pada Lembaga Kustodian dan Entitas Investasi (mis. perusahaan efek, manajer investasi) dilaporkan tanpa batas saldo. Ambang Rp1 miliar tidak berlaku untuk laporan internasional (CRS).",
        "Lembaga keuangan dilarang melayani pembukaan rekening baru bagi nasabah yang menolak prosedur identifikasi (self-certification); larangan ini berasal dari rezim PMK 70/PMK.03/2017 dan sejalan dengan uji tuntas CRS (◐ kesinambungannya dalam teks PMK 108/2025 belum dicek).",
        "Sanksi UU 9/2017 Pasal 7 (tidak berubah dengan terbitnya PMK 108/2025): pimpinan/pegawai lembaga keuangan yang tidak menyampaikan laporan atau tidak melaksanakan prosedur identifikasi dipidana kurungan paling lama 1 tahun atau denda paling banyak Rp1 miliar; lembaga keuangan dipidana denda paling banyak Rp1 miliar.",
        "Ruang lingkup pertukaran informasi otomatis (AEoI) Indonesia: (1) informasi rekening keuangan (CRS) dari lembaga keuangan pelapor; (2) informasi aset kripto (CARF) dari penyedia jasa aset kripto pelapor CARF, dipertukarkan pertama kali pada 2027 untuk data tahun 2026; (3) laporan per negara (CbCR) grup usaha multinasional (C10.5); dan (4) GloBE Information Return (GIR) pajak minimum global (C9.6). Pertukaran otomatis berjalan berdasarkan Konvensi MAC dan perjanjian otoritas berwenang (MCAA) atau P3B; berbeda dengan pertukaran atas permintaan yang diajukan untuk kasus tertentu.",
        "Lembaga Simpanan menurut PMK 108/2025 tidak terbatas pada bank: mencakup entitas yang menerima simpanan dalam kegiatan perbankan atau usaha sejenis serta pengelola produk uang elektronik tertentu (penyelenggara jasa pembayaran/e-wallet) atau mata uang digital bank sentral (PMK 108/2025 Pasal 1 angka 29: Produk Uang Elektronik Tertentu adalah produk yang dikelola PJP yang antara lain merupakan representasi digital Mata Uang Fiat, diterbitkan berdasarkan penerimaan dana untuk transaksi pembayaran, dan dapat ditebus setara kapan saja; menurut Lampiran I Huruf A angka 3 huruf t butir 7, rekening uang elektronik dikecualikan dari Rekening Keuangan bila rata-rata bergulir 90 hari saldo akhir harinya, atau nilainya selama 90 hari berturut-turut, tidak melebihi USD10.000 pada hari apa pun dalam tahun kalender). E-wallet yang memenuhi kriteria wajib melakukan uji tuntas dan melapor, termasuk laporan nihil bila tidak ada rekening yang wajib dilaporkan. Penyedia jasa aset kripto (PJAK) yang memenuhi kriteria menjadi PJAK pelapor CARF: wajib melakukan uji tuntas (self-certification pengguna) dan menyampaikan laporan tahunan kepada DJP (laporan CARF ke DJP paling lambat 30 April, terpisah dari jalur OJK 1 Agustus yang hanya berlaku untuk laporan CRS LJK di bawah pengawasan OJK), juga laporan nihil; laporan pertama atas data tahun 2026 paling lambat 30 April 2027.",
        "Peralihan: prosedur identifikasi atas informasi rekening yang tercatat sampai 31 Desember 2025 masih mengikuti PMK 70/PMK.03/2017 beserta perubahannya, dan laporan atau pembetulan yang disampaikan sampai 30 September 2026 (antara lain laporan atas data tahun 2025) masih memakai rezim lama; laporan atau pembetulan atas data tahun 2025 dan sebelumnya yang disampaikan sejak 1 Oktober 2026 memakai PMK 108/2025; sejak 1 Januari 2026 berlaku PMK 108/2025, sehingga data tahun 2026 (disampaikan pada 2027) memakai rezim baru. Pertukaran otomatis atas data tahun 2026, yaitu CRS menurut PMK 108/2025 dan CARF untuk pertama kali, dengan yurisdiksi mitra berlangsung pada 2027.",
        "Bantuan penagihan pajak (assistance in collection) adalah kerja sama antarnegara untuk menagih klaim pajak suatu negara atas penanggung pajak atau harta yang berada di negara lain. Dasar internasionalnya pasal bantuan penagihan P3B (Pasal 27 Model OECD) dan Pasal 11–16 Konvensi MAC; reservasi Indonesia atas pasal-pasal itu dalam Perpres 159/2014 dipersempit oleh Perpres 56/2024. Dasar domestiknya Pasal 20A UU KUP (UU HPP): Menteri Keuangan berwenang bekerja sama dengan negara atau yurisdiksi mitra secara resiprokal, dan pemberian maupun permintaan bantuan dilaksanakan Direktur Jenderal Pajak.",
        "Bantuan penagihan untuk negara mitra dilakukan setelah DJP menerima klaim pajak yang sudah tidak disengketakan di negara peminta; nilai klaim pajak dipersamakan dengan utang pajak sehingga ditagih dengan instrumen UU PPSP (surat paksa, penyitaan, lelang) oleh juru sita pajak Indonesia, bukan oleh pejabat negara peminta. Sebaliknya, untuk harta penanggung pajak Indonesia yang berada di negara mitra, DJP meminta bantuan penagihan karena surat paksa dan sita Indonesia tidak berlaku di yurisdiksi lain (kaitkan dengan PPSP A2.10)."
      ],
      poinKunci: [
        { label: "Saluran dan tenggat laporan rekening keuangan", nilai: "CRS: LJK di bawah OJK → OJK 1 Agustus, OJK → DJP 31 Agustus; LJK lainnya/entitas lain → DJP 30 April. Domestik: semua pelapor, termasuk bank → DJP 30 April (Portal Wajib Pajak). Tenggat pada hari libur → hari kerja berikutnya; laporan nihil wajib", dasar: "PMK 108/2025 Pasal 11 ayat (5) sampai (7), Pasal 36, Pasal 37", berlakuSejak: "2026-01-01" },
        { label: "Ambang laporan domestik", nilai: "OP di Lembaga Simpanan: agregat per lembaga per 31 Desember ≥ Rp1 miliar; entitas, Lembaga Kustodian, dan Entitas Investasi: tanpa batas", dasar: "PMK 108/2025 (OP: Pasal 35 ayat (8) huruf a angka 1)", berlakuSejak: "2026-01-01" },
        { label: "Lembaga Simpanan", nilai: "Termasuk pengelola uang elektronik tertentu (PJP/e-wallet) dan mata uang digital bank sentral", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "Sanksi pimpinan/pegawai LK", nilai: "Kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar", dasar: "UU 9/2017 Pasal 7", berlakuSejak: "2017-05-08" },
        { label: "Lingkup AEoI", nilai: "Rekening keuangan (CRS), aset kripto (CARF), CbCR, GIR", dasar: "Konvensi MAC; PMK 108/2025; PMK 172/2023; PMK 136/2024" },
        { label: "PJAK pelapor CARF", nilai: "Uji tuntas pengguna; data 2026 dilaporkan ke DJP paling lambat 30 April 2027, bukan melalui jalur OJK 1 Agustus (nihil tetap wajib); pertukaran pertama 2027", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "Peraturan dan peralihan", nilai: "PMK 108/2025 mencabut PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024 sejak 1 Januari 2026; laporan yang disampaikan sampai 30 September 2026 (data 2025) masih rezim lama; laporan atau pembetulan sejak 1 Oktober 2026 dan data 2026 rezim baru", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "Bantuan penagihan (dasar domestik)", nilai: "Resiprokal; dilaksanakan DJP; klaim pajak = utang pajak", dasar: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 26 P3B", catatan: "pertukaran informasi" },
        { pasal: "UU 9/2017 Pasal 2–7", catatan: "akses informasi keuangan dan sanksi" },
        { pasal: "PMK 108/2025", catatan: "petunjuk teknis akses informasi keuangan sejak 1 Januari 2026: CRS, Lembaga Simpanan termasuk e-wallet, PJAK pelapor CARF, laporan nihil" },
        { pasal: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021; PMK 61/2023", catatan: "bantuan penagihan pajak dengan negara/yurisdiksi mitra; klaim pajak sebagai dasar penagihan" },
        { pasal: "Pasal 27 Model OECD; Pasal 11–16 Konvensi MAC (Perpres 159/2014 s.t.d.d. Perpres 56/2024)", catatan: "bantuan penagihan internasional dan reservasi Indonesia" },
        { pasal: "PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024 (dicabut)", catatan: "rezim lama; hanya untuk identifikasi atas data sampai tahun 2025 dan laporan atau pembetulan yang disampaikan sampai 30 September 2026 (Pasal 59 PMK 108/2025)" }
      ],
      jebakan: [
        { teks: "Memakai batas Rp200 juta (versi awal PMK 70/2017) untuk rekening domestik", tagSebab: "angka-usang" },
        { teks: "Tertukar saluran laporan rekening keuangan: jalur OJK 1 Agustus (OJK ke DJP 31 Agustus) hanya untuk laporan CRS LJK di bawah OJK; laporan CRS LJK lainnya/entitas lain dan laporan domestik semua pelapor, termasuk bank, langsung ke DJP paling lambat 30 April", tagSebab: "salah-baca" },
        { teks: "Menerapkan ambang Rp1 miliar pada laporan CRS internasional, rekening entitas, atau rekening di Lembaga Kustodian/Entitas Investasi", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap e-wallet atau PJAK bukan pelapor, atau tidak menyampaikan laporan nihil", tagSebab: "lupa-pasal" },
        { teks: "Memakai PMK 70/PMK.03/2017 untuk data tahun 2026, atau PMK 108/2025 untuk laporan data tahun 2025 yang disampaikan sampai 30 September 2026", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Per 31 Desember 2026 Budi (orang pribadi dalam negeri) memiliki dua rekening simpanan di Bank A dengan saldo Rp600 juta dan Rp500 juta, sedangkan PT Budi Jaya (badan dalam negeri) memiliki satu rekening giro di Bank A dengan saldo Rp40 juta. Rekening mana yang wajib dilaporkan Bank A untuk kepentingan domestik atas data tahun 2026?",
        jawaban: "Keduanya: rekening Budi (agregat Rp1,1 miliar ≥ Rp1 miliar pada lembaga yang sama) dan rekening PT Budi Jaya (rekening entitas di Lembaga Simpanan tanpa batas saldo); dilaporkan pada 2027 menurut PMK 108/2025",
        langkah: [["Saldo agregat Budi pada Bank A", "Rp1.100.000.000"], ["Ambang OP di Lembaga Simpanan", "Rp1.000.000.000 → dilaporkan"], ["Rekening entitas di Lembaga Simpanan", "Tanpa batas saldo → dilaporkan"], ["Dasar", "PMK 108/2025 (data 2026, dilaporkan 2027)"]]
      },
      verifikasi: "◐",
      peringatan: "Ambang USD dalam PMK 108/2025 sudah dicocokkan: rekening lama milik entitas dengan agregat saldo tidak melebihi USD250.000 dikecualikan dari laporan CRS (Pasal 9 ayat (7)), dan rekening uang elektronik tertentu dikecualikan bila tidak melebihi USD10.000 (Lampiran I Huruf A); ambang Rp1 miliar hanya untuk laporan domestik. Rincian reservasi Perpres 56/2024 (jenis pajak yang terbuka untuk bantuan penagihan) dan tata cara PMK 61/2023 dikonfirmasi dari ringkasan sekunder."
    },
    {
      id: "C10.9", slug: "pph26-vs-p3b", judul: "PPh Pasal 26 vs tarif P3B, perkiraan neto, BPNR, dan pengembalian",
      estimasiMenit: 18, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "PPh 26: 20% dari bruto atas dividen, bunga (termasuk premium, diskonto, imbalan jaminan), royalti, sewa, imbalan jasa/pekerjaan/kegiatan, hadiah, pensiun, premi swap, dan keuntungan pembebasan utang yang dibayar kepada WPLN selain BUT; bersifat final kecuali bagi BUT dan WPLN yang berubah status (Pasal 26 ayat (5)).",
        "Perkiraan penghasilan neto: penjualan harta tertentu di Indonesia (perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, pesawat terbang ringan; Pasal 2 ayat (3) dan (4) PMK 82/PMK.03/2009) dan penjualan saham 25% → 5% efektif, final: saham perseroan dalam negeri yang bukan emiten atau perusahaan publik (Pasal 238 PMK 81/2024; sebelum 2025 KMK 434/KMK.04/1999) serta saham perusahaan antara/conduit (Pasal 18 ayat (3c) UU PPh; PMK 258/PMK.03/2008). Untuk saham perseroan nonbursa: dipotong hanya bila menurut P3B hak pemajakan ada pada Indonesia (Pasal 238 ayat (2)); dipotong pembeli, atau dipungut Perseroan bila pembelinya WPLN, disetor paling lambat tanggal 15 bulan berikutnya dan dilaporkan dengan SPT Masa PPh Unifikasi (Pasal 239); Perseroan hanya mencatat akta pemindahan hak setelah WPLN membuktikan PPh-nya lunas (Pasal 240); premi asuransi ke LN 50%/10%/5% → 10% (dibayar tertanggung), 2% (perusahaan asuransi), 1% (perusahaan reasuransi).",
        "Tarif P3B berlaku bila WPLN menyerahkan SKD/Form DGT yang sah (PMK 112/2025), merupakan beneficial owner untuk dividen/bunga/royalti, dan tidak ada penyalahgunaan P3B; bila tidak, 20%.",
        "Saat terutang: saat dibayar, disediakan untuk dibayarkan (termasuk dibebankan sebagai biaya/utang kepada afiliasi), atau jatuh tempo, mana yang lebih dahulu. Setor paling lambat tanggal 15 bulan berikutnya; SPT Masa PPh Unifikasi paling lambat 20 hari setelah masa berakhir; bukti potong BPNR (PPh 26 orang pribadi atas pekerjaan/jasa/kegiatan masuk SPT Masa PPh 21/26).",
        "Bila PPh 26 ditanggung pembayar (gross-up): bruto = jumlah neto ÷ (1 − tarif); PPh = tarif × bruto.",
        "Bila WPLN dipotong 20% padahal berhak atas P3B karena SKD/Form DGT baru terpenuhi setelah pemotongan, kelebihannya adalah kelebihan pemotongan terkait P3B (PMK 81/2024 Pasal 133) yang diminta kembali oleh PEMOTONG dengan permohonan pengembalian pajak yang seharusnya tidak terutang, dilampiri surat kuasa dari WPLN (Pasal 134 ayat (1) dan Pasal 135 ayat (2)); WPLN mengajukan sendiri hanya bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT (Pasal 134 ayat (2)). PMK 81/2024 menggantikan PMK 187/PMK.03/2015 sejak 1 Januari 2025.",
        "PPN atas pemanfaatan BKP tidak berwujud/JKP dari luar daerah pabean tetap terutang (dipungut sendiri oleh penerima, 12% × DPP 11/12) dan tidak terpengaruh P3B."
      ],
      poinKunci: [
        { label: "PPh 26 umum", nilai: "20% × bruto, final", dasar: "Pasal 26 ayat (1) dan (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Premi asuransi ke LN", nilai: "10% tertanggung · 2% asuransi · 1% reasuransi", dasar: "KMK 624/KMK.04/1994" },
        { label: "Penjualan harta tertentu/saham", nilai: "20% × 25% = 5% harga jual, final (harta: daftar Pasal 2 ayat (4) PMK 82/PMK.03/2009; saham perseroan dalam negeri nonbursa: dipotong pembeli, atau dipungut Perseroan bila pembeli WPLN)", dasar: "Pasal 26 ayat (2) dan (2a) UU PPh; PMK 82/PMK.03/2009; Pasal 238 sampai 240 PMK 81/2024 (saham perseroan dalam negeri nonbursa, sejak 1 Januari 2025; sebelumnya KMK 434/KMK.04/1999); PMK 258/PMK.03/2008 (saham perusahaan antara/conduit)", berlakuSejak: "2009-01-01" },
        { label: "Setor dan lapor", nilai: "Setor tanggal 15; SPT Masa 20 hari; BPNR", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-01-01" },
        { label: "Tanpa SKD sah", nilai: "20%; kelebihan di atas tarif P3B diminta kembali oleh pemotong dengan surat kuasa WPLN (WPLN sendiri bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT)", dasar: "PMK 112/2025 Pasal 10 ayat (4) dan Pasal 15; PMK 81/2024 Pasal 133 dan Pasal 134", berlakuSejak: "2025-12-31" }
      ],
      dasarHukum: [
        { pasal: "Pasal 26 ayat (1), (1a), (2), (2a), (4), (5) UU PPh", catatan: "objek, tarif, perkiraan neto, sifat final" },
        { pasal: "PMK 112/2025", catatan: "penerapan tarif P3B" },
        { pasal: "PMK 81/2024 Pasal 122 ayat (1) huruf e, Pasal 133 sampai dengan Pasal 136", catatan: "pengembalian kelebihan pemotongan PPh terkait P3B (diajukan pemotong; WPLN bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT); menggantikan PMK 187/PMK.03/2015 sejak 1 Januari 2025" },
        { pasal: "PMK 81/2024; PER-11/PJ/2025", catatan: "setor tanggal 15, SPT Masa, BPNR" }
      ],
      jebakan: [
        { teks: "Memotong PPh 26 atas imbalan jasa yang menurut P3B merupakan laba usaha tanpa BUT", tagSebab: "salah-klasifikasi" },
        { teks: "Gross-up memakai tarif 20% padahal SKD sah (tarif P3B), atau mengalikan tarif dengan jumlah neto", tagSebab: "salah-hitung" },
        { teks: "Mengira P3B juga membebaskan PPN atas pemanfaatan jasa LN", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT D membayar royalti Rp1.000.000.000 kepada perusahaan Singapura yang beneficial owner dan menyerahkan Form DGT sah sebelum pembayaran; tarif royalti P3B 10%. Berapa PPh 26 dengan dan tanpa SKD?",
        jawaban: "Rp100.000.000 (tanpa SKD: Rp200.000.000)",
        langkah: [["Tarif P3B", "10%"], ["PPh 26 = 10% × Rp1.000.000.000", "Rp100.000.000"], ["Tanpa SKD = 20% × Rp1.000.000.000", "Rp200.000.000"]]
      },
      verifikasi: "✅"
    }
  ],
  soal: [
    {
      id: "C10-001", topik: "C10.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 4 ayat (2) Model OECD (disederhanakan): Bila orang pribadi menjadi residen kedua Negara, (a) ia dianggap residen Negara tempat ia mempunyai tempat tinggal tetap; bila tempat tinggal tetap tersedia di kedua Negara, ia dianggap residen Negara yang hubungan pribadi dan ekonominya lebih erat (pusat kepentingan vital); (b) bila pusat kepentingan vital tidak dapat ditentukan atau tidak ada tempat tinggal tetap di kedua Negara, ia dianggap residen Negara tempat ia biasa berdiam; (c) bila ia biasa berdiam di kedua Negara atau tidak di keduanya, ia dianggap residen Negara tempat ia menjadi warga negara; (d) selebihnya diselesaikan melalui persetujuan bersama.",
      stem: "Tuan Hiroshi Tanaka (WN Jepang) ditugaskan induknya ke PT Sakura Elektrik Indonesia sejak 1 Februari 2025 dan selama 2025 berada di Jakarta 214 hari. Ia menyewa apartemen tahunan di Jakarta yang selalu tersedia baginya, sedangkan istri dan dua anaknya tetap tinggal di rumah milik keluarga di Osaka; tabungan, investasi, dan keanggotaan asosiasi profesinya ada di Jepang. Jepang dan Indonesia sama-sama memperlakukannya sebagai residen menurut UU domestik masing-masing. Anggap P3B yang berlaku memuat tie-breaker seperti kutipan. Berdasarkan kutipan, status residen Tuan Tanaka untuk keperluan P3B adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Residen Indonesia, karena berada lebih dari 183 hari dalam 12 bulan sesuai Pasal 2 ayat (3) UU PPh",
        B: "Residen Jepang, karena tempat tinggal tetap ada di kedua negara dan pusat kepentingan vitalnya berada di Jepang",
        C: "Residen Indonesia, karena tempat kebiasaan berdiam selama 2025 lebih lama di Jakarta daripada di Osaka",
        D: "Residen Jepang, karena kewarganegaraan menjadi penentu pertama bila kedua negara menganggapnya residen"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tie-breaker diuji berurutan. Tempat tinggal tetap (termasuk apartemen sewaan yang terus tersedia) ada di kedua negara, sehingga uji berikutnya adalah pusat kepentingan vital: keluarga, aset, dan hubungan ekonomi utamanya di Jepang. Ia residen Jepang untuk keperluan P3B.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ketentuan 183 hari UU domestik justru yang menimbulkan residen ganda; P3B (lex specialis) yang memutuskan lewat tie-breaker.",
          C: "Tempat kebiasaan berdiam baru diuji bila pusat kepentingan vital tidak dapat ditentukan; di sini sudah jelas di Jepang.",
          D: "Kewarganegaraan adalah uji keempat, dipakai hanya bila tiga uji sebelumnya tidak menentukan."
        },
        jebakan: "Melompati urutan uji tie-breaker atau kembali ke UU domestik setelah P3B berlaku. Rumusan tie-breaker dapat berbeda antar-P3B (ada P3B yang langsung menyerahkan residen ganda orang pribadi kepada persetujuan bersama), jadi selalu baca teks P3B yang berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) Model OECD (sebagaimana dimuat dalam P3B yang berlaku)" }, { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-002", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 16 P3B (disederhanakan): Fee direktur dan pembayaran sejenis yang diperoleh residen suatu Negara dalam kedudukannya sebagai anggota dewan direksi atau dewan komisaris suatu perusahaan yang merupakan residen Negara lainnya dapat dikenai pajak di Negara lainnya tersebut.",
      stem: "Mr. Lim Wei Ming, residen Singapura yang menyerahkan Form DGT sah sebelum pembayaran, adalah anggota dewan komisaris PT Bintang Logistik Indonesia dan tidak merangkap pegawai. Selama 2026 ia hanya 12 hari berada di Jakarta untuk rapat, dan pada Juni 2026 menerima honorarium komisaris tahunan Rp240.000.000 yang dibayar dan dibebankan oleh PT Bintang Logistik. Berdasarkan kutipan, PPh yang wajib dipotong PT Bintang Logistik atas honorarium tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0, karena ia berada di Indonesia kurang dari 183 hari sehingga hanya Singapura yang berhak memajaki",
        B: "Rp24.000.000, memakai tarif 10% P3B Indonesia–Singapura",
        C: "Rp48.000.000, PPh 26 tarif 20% dari bruto",
        D: "Rp12.000.000, PPh 21 tarif Pasal 17 atas 50% bruto seperti bukan pegawai dalam negeri"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Honorarium komisaris masuk Pasal 16 P3B (bukan Pasal 15 pekerjaan) sehingga Indonesia sebagai negara tempat perusahaan berkedudukan berhak memajaki tanpa batas tarif. Karena P3B tidak membatasi tarif, berlaku PPh 26 domestik 20% × Rp240.000.000 = Rp48.000.000.",
        jejakHitung: [["Pasal P3B", "Pasal 16 (fee komisaris)"], ["Batas tarif P3B", "tidak ada → tarif domestik"], ["PPh 26 = 20% × Rp240.000.000", "Rp48.000.000"]],
        mengapaSalah: {
          A: "Uji 183 hari milik Pasal 15 (pekerjaan dalam hubungan kerja), bukan fee komisaris.",
          B: "Tarif 10% adalah batas untuk bunga/royalti/dividen tertentu, tidak berlaku bagi Pasal 16.",
          D: "Penerima adalah WPLN sehingga yang berlaku PPh 26, bukan PPh 21; lagi pula DPP 50% bruto hanya untuk bukan pegawai, bukan untuk komisaris."
        },
        jebakan: "Memakai Form DGT sebagai alasan otomatis menurunkan tarif, padahal pasal distributifnya tidak membatasi tarif."
      },
      dasarHukum: [{ pasal: "Pasal 16 P3B" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-003", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Kencana Agro membagikan dividen Rp2.000.000.000 pada Maret 2026 kepada Alpha Holdings Ltd., pemegang 60% saham, yang berkedudukan di negara mitra P3B dengan batas tarif dividen 10% untuk kepemilikan tersebut. Form DGT terisi lengkap dan disertifikasi otoritas mitra. Namun dari data yang diperoleh PT Kencana Agro: Alpha tidak memiliki pegawai dan kantor, direksinya disediakan penyedia jasa korporasi, dan dalam lima hari setelah menerima dividen Alpha meneruskan 95% dana kepada induknya yang berkedudukan di negara yang tidak memiliki P3B dengan Indonesia. PPh 26 yang tepat atas dividen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp200.000.000, tarif P3B 10% karena Form DGT lengkap dan tersertifikasi",
        B: "Rp0, karena dividen kepada pemegang saham badan dengan kepemilikan besar dikecualikan dari objek",
        C: "Rp100.000.000, yaitu 20% dari perkiraan penghasilan neto 25%",
        D: "Rp400.000.000, tarif domestik 20% karena Alpha bukan beneficial owner"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tarif P3B atas dividen hanya untuk beneficial owner. Alpha tidak bersubstansi dan meneruskan hampir seluruh dividen (conduit), sehingga manfaat P3B ditolak dan berlaku 20% × Rp2.000.000.000 = Rp400.000.000.",
        jejakHitung: [["Uji beneficial owner", "gagal (conduit, tanpa substansi)"], ["Tarif", "20% domestik"], ["PPh 26 = 20% × Rp2.000.000.000", "Rp400.000.000"]],
        mengapaSalah: {
          A: "Form DGT lengkap tidak cukup bila penerima bukan beneficial owner.",
          B: "Pengecualian dividen hanya untuk WP badan dalam negeri, bukan WPLN.",
          C: "Perkiraan neto 25% untuk penjualan harta/saham, bukan dividen."
        },
        jebakan: "Menganggap kelengkapan formulir identik dengan hak atas manfaat P3B."
      },
      dasarHukum: [{ pasal: "PMK 112/2025 (beneficial owner dan pencegahan penyalahgunaan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 P3B" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-004",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Mitra Kimia membayar royalti Rp500.000.000 kepada Kaigen Co., Ltd. (residen Jepang, beneficial owner) pada 20 Februari 2026; batas tarif royalti P3B 10%. Kaigen baru mengirim Form DGT yang ditandatangani dan disertifikasi otoritas Jepang pada 5 Maret 2026, setelah pembayaran dan pemotongan, tetapi sebelum PT Mitra Kimia menyampaikan SPT Masa PPh Unifikasi Masa Februari 2026. Menurut ketentuan yang berlaku sejak PMK 112/2025, perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Mitra Kimia memotong 20% (Rp100.000.000) pada Masa Februari 2026; kelebihannya dapat dimintakan kembali melalui permohonan pengembalian pajak yang seharusnya tidak terutang yang diajukan PT Mitra Kimia sebagai pemotong dengan surat kuasa Kaigen", B: "PT Mitra Kimia memotong 10% (Rp50.000.000) karena Form DGT diterima sebelum batas waktu penyampaian SPT Masa Februari 2026", C: "PT Mitra Kimia memotong 10% karena Jepang adalah negara mitra P3B; Form DGT cukup ditunjukkan saat pemeriksaan", D: "PT Mitra Kimia tidak memotong karena royalti atas lisensi dari Jepang merupakan laba usaha tanpa BUT" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Menurut PMK 112/2025, tarif P3B diterapkan pemotong atas dasar Formulir DGT yang disampaikan WPLN \"dalam rangka pemotongan\" (Pasal 8 ayat (1)), lalu dicek dan diunggah melalui portal wajib pajak sebelum memotong sesuai P3B (Pasal 10 ayat (1) dan (3)). Pada saat royalti dibayar dan PPh 26 dipotong (20 Februari 2026) Kaigen belum menyampaikan Formulir DGT, sehingga syarat Pasal 2 ayat (3) huruf b belum terpenuhi dan pemotongan mengikuti UU PPh: 20% × Rp500.000.000 = Rp100.000.000. Kelebihan di atas tarif P3B adalah kelebihan pemotongan terkait P3B karena persyaratan administratif terlambat dipenuhi (Pasal 15 PMK 112/2025 jo. Pasal 122 ayat (1) huruf e dan Pasal 133 huruf b PMK 81/2024). Permohonan pengembaliannya diajukan PT Mitra Kimia sebagai pemotong dengan surat kuasa Kaigen (Pasal 134 ayat (1) dan Pasal 135 ayat (2) huruf d); Kaigen sendiri hanya mengajukan bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT (Pasal 134 ayat (2)).",
        jejakHitung: [
          ["PPh 26 = 20% × Rp500.000.000", "Rp100.000.000"],
          ["Seandainya Form DGT ada saat pemotongan = 10% × Rp500.000.000", "Rp50.000.000"],
          ["Kelebihan yang dapat dimintakan kembali", "Rp50.000.000"]
        ],
        mengapaSalah: {
          B: "PMK 112/2025 tidak memberi tenggang sampai batas penyampaian SPT Masa; tarif P3B diterapkan pada pemotongan yang didasarkan pada Form DGT yang sudah diterima dan dicek pemotong.",
          C: "Tarif P3B tidak berlaku otomatis; manfaat P3B dibuktikan dengan Form DGT yang disahkan pejabat berwenang (Pasal 2 ayat (3) huruf b) dan disampaikan dalam rangka pemotongan.",
          D: "Royalti diatur pasal royalti P3B dan dipajaki negara sumber dengan batas tarif, bukan laba usaha."
        },
        jebakan: "Memakai patokan lama 'Form DGT cukup diterima sebelum batas SPT Masa'. Form DGT yang terlambat masih dapat dipertimbangkan saat pemeriksaan atau keberatan (Pasal 17 ayat (2) PMK 112/2025), tetapi tidak mengubah tarif pemotongan pada saat pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (3) dan (5), Pasal 8 ayat (1), Pasal 10 ayat (1) dan (3), Pasal 15 PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 122 ayat (1) huruf e, Pasal 133 huruf b, Pasal 134, dan Pasal 135 ayat (2) huruf d PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 112/2025 (Pasal 2 ayat (3) dan (5), Pasal 8 ayat (1), Pasal 10, Pasal 15, Pasal 17 ayat (2)) dan PMK 81/2024 (Pasal 122 ayat (1) huruf e; Pasal 133 sampai Pasal 135: permohonan diajukan pemotong dengan surat kuasa WPLN). Yang belum pasti: PMK 112/2025 tidak menyebut tegas tenggat penyampaian Formulir DGT (mis. \"sebelum pembayaran\") dan tidak mengatur pembetulan bukti potong bila Formulir DGT datang sebelum SPT Masa disampaikan. Kunci bertumpu pada urutan Pasal 10 (Formulir DGT diterima dan dicek saat pemotongan)."
    },
    {
      id: "C10-005",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      kutipan: "Pasal 13 P3B (disederhanakan): (4) Keuntungan yang diperoleh residen suatu Negara dari pengalihan saham yang lebih dari 50% nilainya berasal, langsung atau tidak langsung, dari harta tak gerak yang terletak di Negara lainnya dapat dikenai pajak di Negara lainnya itu. (5) Keuntungan dari pengalihan harta selain yang disebut pada ayat sebelumnya hanya dapat dikenai pajak di Negara tempat pihak yang mengalihkan merupakan residen.",
      stem: "Orchid Capital Ltd., residen negara mitra P3B yang menyerahkan Form DGT sah, menjual 30% saham PT Kencana Retail (perusahaan tertutup) kepada PT Prima Investama (WPDN) seharga Rp40.000.000.000 pada Mei 2026. Aset PT Kencana Retail sebagian besar persediaan dan piutang; harta tak gerak hanya 15% dari total nilai aset. P3B yang berlaku memuat pasal seperti kutipan. Berdasarkan kutipan, PPh atas penjualan saham yang wajib dipotong PT Prima Investama adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.000.000.000, yaitu 20% × perkiraan neto 25% × harga jual", B: "Nihil, karena hanya negara residen penjual yang berhak memajaki", C: "Rp8.000.000.000, yaitu 20% × harga jual tanpa perkiraan neto", D: "Rp4.000.000.000, memakai tarif 10% P3B dari harga jual saham" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Saham PT Kencana Retail tidak memenuhi kriteria ayat (4) karena nilai harta tak geraknya hanya 15% (bukan lebih dari 50%). Keuntungan masuk ayat (5) sehingga hanya negara residen penjual yang berhak memajaki. Menurut Pasal 238 ayat (2) PMK 81/2024, PPh 26 atas penjualan saham perseroan nonbursa hanya dipotong bila menurut P3B hak pemajakannya ada pada Indonesia; dengan Form DGT sah, PPh 26 tidak dipotong.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ini hitungan domestik 20% × perkiraan neto 25% (5% efektif, Pasal 238 ayat (1) dan (3) PMK 81/2024) yang berlaku bila tidak ada P3B, hak pemajakan ada pada Indonesia, atau Form DGT tidak sah.",
          C: "Mengabaikan P3B sekaligus melupakan perkiraan neto 25%.",
          D: "P3B tidak memberi tarif terbatas untuk capital gains; pilihannya dipajaki penuh atau tidak sama sekali."
        },
        jebakan: "Langsung memakai 5% domestik tanpa memeriksa pasal capital gains P3B."
      },
      dasarHukum: [{ pasal: "Pasal 13 P3B" }, { pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 238 ayat (1) sampai (3) PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-006", topik: "C10.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Grup Jaya Abadi berencana memindahkan kepemilikan lisensi merek dari induknya di negara yang tidak memiliki P3B dengan Indonesia ke anak usaha baru di negara mitra P3B (P3B tersebut tercakup MLI) yang batas tarif royaltinya 10%. Anak usaha baru tidak memiliki pegawai dan tidak melakukan pengembangan merek; memo internal grup menyebut tujuan restrukturisasi “menghemat PPh 26 sebesar 10%”. Bila PT Jaya Abadi Indonesia kemudian membayar royalti ke anak usaha tersebut, ketentuan yang paling tepat dipakai untuk menolak tarif P3B adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Principal purpose test (PPT) dari MLI, karena salah satu tujuan utama skema adalah manfaat P3B",
        B: "Ketentuan DER 4:1 dalam Pasal 18 ayat (1) UU PPh atas utang kepada afiliasi",
        C: "Ketentuan CFC Pasal 18 ayat (2) UU PPh karena anak usaha dikuasai lebih dari 50% oleh grup",
        D: "Pasal 26 ayat (2a) UU PPh tentang penjualan saham perusahaan antara (conduit company)"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Skema tanpa substansi yang salah satu tujuan utamanya memperoleh tarif P3B adalah penyalahgunaan P3B; PPT (MLI, berlaku bagi Indonesia sejak 1 Agustus 2020) dan uji beneficial owner dalam PMK 112/2025 menjadi dasar menolak tarif 10%.",
        jejakHitung: [],
        mengapaSalah: {
          B: "DER mengatur biaya pinjaman, bukan royalti.",
          C: "CFC berlaku bagi WPDN yang menguasai badan LN; yang menguasai di sini induk LN, bukan WPDN.",
          D: "Pasal 26 ayat (2a) mengatur penjualan saham conduit, bukan pembayaran royalti."
        },
        jebakan: "Memilih instrumen Pasal 18 yang sering muncul, padahal masalahnya penyalahgunaan P3B."
      },
      dasarHukum: [{ pasal: "Pasal 7 MLI (principal purpose test); Perpres 77/2019", berlakuSejak: "2020-08-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-007", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 10 ayat (2) P3B Indonesia–Jepang (disederhanakan): pajak yang dikenakan negara sumber atas dividen tidak boleh melebihi (a) 10% dari jumlah bruto dividen bila beneficial owner adalah perusahaan yang memiliki paling sedikit 25% saham perusahaan pembayar; (b) 15% dari jumlah bruto dividen dalam hal lainnya.",
      stem: "PT Fuji Presisi Indonesia membagikan dividen tunai Rp5.000.000.000 pada April 2026 kepada pemegang sahamnya: Fuji Holdings Co., Ltd. (Jepang, 60%), PT Sentosa Mandiri (WP badan dalam negeri, 30%), dan Mr. Kenta Sato (orang pribadi residen Jepang, 10%). Fuji Holdings dan Mr. Kenta sama-sama beneficial owner dan telah menyerahkan Form DGT sah sebelum pembayaran. Berdasarkan kutipan dan UU PPh, jumlah seluruh PPh yang wajib dipotong PT Fuji Presisi atas pembagian dividen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp350.000.000",
        B: "Rp600.000.000",
        C: "Rp525.000.000",
        D: "Rp375.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Fuji Holdings (perusahaan, ≥ 25%) 10% × Rp3.000.000.000 = Rp300.000.000; PT Sentosa (badan dalam negeri) dividen dikecualikan dari objek → nihil; Mr. Kenta (orang pribadi) 15% × Rp500.000.000 = Rp75.000.000. Total Rp375.000.000.",
        jejakHitung: [["Fuji Holdings: 60% × Rp5 M × 10%", "Rp300.000.000"], ["PT Sentosa: dividen ke badan DN (bukan objek)", "Rp0"], ["Mr. Kenta: 10% × Rp5 M × 15%", "Rp75.000.000"], ["Total", "Rp375.000.000"]],
        mengapaSalah: {
          A: "Menerapkan 10% juga untuk Mr. Kenta; tarif 10% hanya untuk perusahaan dengan kepemilikan ≥ 25%.",
          B: "Memotong PPh 23 15% atas dividen ke PT Sentosa; dividen kepada badan dalam negeri bukan objek PPh.",
          C: "Memakai 15% untuk Fuji Holdings, mengabaikan kepemilikan 60%."
        },
        jebakan: "Satu pembayaran, tiga perlakuan berbeda: P3B perusahaan, P3B orang pribadi, dan dividen domestik."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) P3B Indonesia–Jepang" }, { pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-008", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-02",
      kutipan: "Pasal 5 ayat (3) huruf b P3B Indonesia–Singapura (disederhanakan): Pemberian jasa, termasuk jasa konsultansi, oleh suatu perusahaan melalui pegawai atau personel lain yang dipekerjakan untuk keperluan tersebut merupakan bentuk usaha tetap hanya jika kegiatan tersebut berlangsung di Indonesia untuk suatu masa atau masa-masa yang berjumlah lebih dari 90 hari dalam jangka waktu 12 bulan.",
      stem: "Data untuk soal V-C10-02: Lionstar Consulting Pte. Ltd. (residen Singapura, Form DGT sah) mengirim tim konsultan ke Jakarta untuk proyek implementasi ERP PT Nusantara Retailindo. Tim hadir 3 Maret–30 April 2026 dan 1–31 Juli 2026 (hari kalender, tanpa kehadiran lain dalam 12 bulan). Fee jasa yang dibayar PT Nusantara Retailindo Rp3.000.000.000. Berdasarkan data dan kutipan, status Lionstar dan PPh atas fee tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Memiliki BUT karena jasa lebih dari 60 hari dalam 12 bulan (Pasal 2 ayat (5) UU PPh); laba BUT dikenai tarif 22%",
        B: "Memiliki BUT karena kehadiran sudah mencapai 90 hari",
        C: "Tidak memiliki BUT; fee merupakan laba usaha yang hanya dipajaki Singapura sehingga PPh 26 nihil (fasilitas P3B dilaporkan pada BPNR)",
        D: "Tidak memiliki BUT, tetapi PPh 26 tetap dipotong 20% (Rp600.000.000) karena jasa dimanfaatkan di Indonesia"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kehadiran 59 hari (3 Maret–30 April) + 31 hari (Juli) = 90 hari, tidak lebih dari 90 hari, sehingga tidak ada BUT menurut P3B. Fee adalah laba usaha (Pasal 7 P3B) yang hanya dipajaki Singapura; dengan SKD sah PPh 26 nihil.",
        jejakHitung: [["3 Maret–30 April 2026", "59 hari"], ["1–31 Juli 2026", "31 hari"], ["Total", "90 hari (tidak lebih dari 90)"]],
        mengapaSalah: {
          A: "60 hari domestik dikesampingkan oleh time test P3B bagi WPLN yang berhak atas P3B.",
          B: "Syaratnya “lebih dari 90 hari”; tepat 90 hari belum memenuhi.",
          D: "Tanpa BUT, Pasal 7 P3B menutup hak pemajakan Indonesia atas laba usaha."
        },
        jebakan: "Batas “lebih dari” dan pilihan antara 60 hari domestik vs time test P3B."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) dan Pasal 7 P3B Indonesia–Singapura" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Time test jasa 90 hari P3B Indonesia–Singapura berasal dari riset berkeyakinan sedang dan dipakai sebagai kutipan yang disederhanakan; cek teks P3B dan posisi MLI sebelum dipakai di luar latihan."
    },
    {
      id: "C10-009", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-02",
      stem: "Lanjutan V-C10-02 (Lionstar Consulting, residen Singapura): seandainya tim kembali ke Jakarta 1–15 Oktober 2026 sehingga total kehadiran dalam 12 bulan menjadi 105 hari dan Lionstar menjadi BUT. Laba yang dapat diatribusikan kepada BUT tahun 2026, setelah biaya terkait termasuk alokasi wajar biaya administrasi kantor pusat, adalah Rp1.200.000.000. Tarif branch profit tax menurut P3B 10% dan tidak ada penanaman kembali. Jumlah PPh badan BUT dan PPh Pasal 26 ayat (4) untuk 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp357.600.000",
        B: "Rp451.200.000",
        C: "Rp384.000.000",
        D: "Rp600.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh badan 22% × Rp1.200.000.000 = Rp264.000.000; laba setelah pajak Rp936.000.000; BPT 10% = Rp93.600.000; jumlah Rp357.600.000.",
        jejakHitung: [["PPh badan = 22% × Rp1.200.000.000", "Rp264.000.000"], ["Laba setelah pajak", "Rp936.000.000"], ["BPT = 10% × Rp936.000.000", "Rp93.600.000"], ["Jumlah", "Rp357.600.000"]],
        mengapaSalah: {
          B: "Memakai BPT domestik 20% (Rp187.200.000) padahal P3B membatasi 10%.",
          C: "Menghitung BPT dari laba sebelum pajak (10% × Rp1.200.000.000).",
          D: "Memotong PPh 26 20% atas seluruh fee bruto; setelah menjadi BUT, yang dipajaki adalah laba BUT."
        },
        jebakan: "Dasar BPT adalah PKP setelah dikurangi PPh badan."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 dan 10 P3B Indonesia–Singapura" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-010", topik: "C10.2", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C10-02",
      stem: "Lanjutan V-C10-02: setelah menjadi BUT, Lionstar Consulting terdaftar dan memiliki NPWP sebagai BUT di Jakarta. Pada November 2026 PT Nusantara Retailindo membayar fee jasa konsultansi lanjutan Rp500.000.000 kepada BUT tersebut. Pemotongan PPh yang tepat oleh PT Nusantara Retailindo adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 tarif 20% Rp100.000.000 dengan BPNR",
        B: "Tidak dipotong karena Lionstar memiliki Form DGT sah",
        C: "PPh 23 tarif 4% Rp20.000.000 karena penerima badan asing",
        D: "PPh 23 tarif 2% Rp10.000.000 dengan BPPU"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "BUT diperlakukan sebagai subjek pajak dalam negeri untuk pemotongan; imbalan jasa konsultan dipotong PPh 23 2% × Rp500.000.000 = Rp10.000.000 dan dibuatkan BPPU. PPh 23 ini menjadi kredit pajak BUT.",
        jejakHitung: [["PPh 23 = 2% × Rp500.000.000", "Rp10.000.000"]],
        mengapaSalah: {
          A: "PPh 26 hanya untuk WPLN selain BUT.",
          B: "Form DGT tidak relevan untuk penghasilan yang diterima melalui BUT.",
          C: "Tarif 100% lebih tinggi hanya bila penerima tidak memiliki NPWP; BUT ini ber-NPWP."
        },
        jebakan: "Begitu ada BUT, pembayaran kepadanya keluar dari rezim PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2015-10-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-011", topik: "C10.2", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "Sendai Machinery Co., Ltd. (residen negara mitra P3B, Form DGT sah) melakukan beberapa kegiatan di Indonesia sepanjang 2026. P3B yang berlaku mengikuti Model OECD untuk pengecualian kegiatan persiapan/penunjang dan ketentuan agen, sedangkan proyek konstruksi/instalasi membentuk BUT bila berlangsung lebih dari 6 bulan. Kegiatan berikut yang BUKAN merupakan BUT menurut P3B tersebut adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Agen tidak bebas di Surabaya yang bekerja eksklusif untuk Sendai Machinery dan secara rutin menegosiasikan serta menandatangani kontrak penjualan atas namanya",
        B: "Gudang di Cikarang yang semata-mata dipakai untuk menyimpan dan memamerkan barang milik Sendai Machinery",
        C: "Proyek instalasi mesin di Karawang yang berlangsung 8 bulan",
        D: "Kantor cabang di Jakarta yang menjual mesin langsung kepada pelanggan Indonesia"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyimpanan dan pameran barang semata-mata adalah kegiatan persiapan/penunjang yang dikecualikan dari BUT oleh Pasal 5 ayat (4) P3B.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Agen tidak bebas yang biasa menutup kontrak atas nama perusahaan membentuk BUT.",
          C: "8 bulan melewati batas lebih dari 6 bulan sehingga membentuk BUT.",
          D: "Cabang yang menjalankan usaha inti adalah BUT."
        },
        jebakan: "Kata BUKAN: tiga opsi lain justru contoh BUT. Ingat juga bahwa Pasal 2 ayat (5) UU PPh menyebut gudang sebagai BUT; P3B (lex specialis) yang mengecualikannya bila semata-mata penunjang, dan agen bebas yang bertindak dalam kegiatan usaha biasanya tidak membentuk BUT."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (4) dan (5) P3B" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C10-012", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "BUT Kawasaki Trading di Jakarta (kegiatan perdagangan, bukan perbankan) melaporkan laba komersial 2025 Rp2.000.000.000. Dalam laba tersebut telah dibebankan pembayaran kepada kantor pusatnya di Jepang: royalti merek Rp400.000.000, imbalan jasa manajemen Rp300.000.000, bunga atas dana yang dipinjamkan kantor pusat Rp200.000.000, dan alokasi biaya administrasi kantor pusat yang berkaitan langsung dengan kegiatan BUT dan dihitung wajar Rp150.000.000. Tidak ada koreksi fiskal lain. Penghasilan kena pajak BUT tahun 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp2.700.000.000",
        B: "Rp3.050.000.000",
        C: "Rp2.900.000.000",
        D: "Rp2.000.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 5 ayat (3) UU PPh: royalti, imbalan jasa manajemen, dan bunga (kecuali usaha perbankan) yang dibayar BUT ke kantor pusat tidak dapat dibiayakan; biaya administrasi kantor pusat yang berkaitan dengan BUT tetap boleh. PKP = Rp2.000.000.000 + Rp900.000.000 = Rp2.900.000.000.",
        jejakHitung: [["Laba komersial", "Rp2.000.000.000"], ["Koreksi positif royalti + jasa manajemen + bunga", "Rp900.000.000"], ["Biaya administrasi kantor pusat (boleh)", "Rp0 koreksi"], ["PKP", "Rp2.900.000.000"]],
        mengapaSalah: {
          A: "Menganggap bunga ke kantor pusat boleh dibiayakan; pengecualian hanya untuk usaha perbankan.",
          B: "Ikut mengoreksi biaya administrasi kantor pusat yang berkaitan dengan BUT.",
          D: "Menganggap pembayaran internal kantor pusat–BUT sudah wajar sehingga tidak dikoreksi."
        },
        jebakan: "Membedakan biaya administrasi kantor pusat (boleh) dari pembayaran royalti/jasa/bunga (tidak boleh)."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (2) dan (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 7 ayat (3) P3B" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-013",
      topik: "C10.2",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "PMK 14/PMK.03/2011 Pasal 1 ayat (2) dan (3), Pasal 2 (disederhanakan): PKP sesudah dikurangi PPh dari suatu BUT dikecualikan dari PPh Pasal 26 ayat (4) apabila SELURUH PKP sesudah dikurangi PPh tersebut ditanamkan kembali di Indonesia dalam bentuk penyertaan modal pada perusahaan yang baru didirikan sebagai pendiri atau peserta pendiri, penyertaan modal pada perusahaan yang sudah berdiri, pembelian aktiva tetap, atau investasi aktiva tidak berwujud; penanaman kembali dilakukan paling lama akhir tahun pajak berikutnya; penyertaan pada perusahaan baru tidak dialihkan paling sedikit 2 tahun sejak perusahaan itu berproduksi komersial, sedangkan bentuk lain paling sedikit 3 tahun.",
      stem: "BUT Sakura Engineering (kantor pusat di Jepang; tarif branch profit tax P3B 10%; peredaran bruto 2025 di atas Rp50 miliar) memiliki PKP 2025 Rp5.000.000.000. Pada Agustus 2026 BUT tersebut menyetor Rp2.400.000.000 sebagai penyertaan modal pendiri pada PT baru di Indonesia; sisa laba setelah pajak tidak ditanamkan kembali. Penyertaan itu memenuhi syarat bentuk, waktu, dan pemberitahuan PMK 14/PMK.03/2011 sebagaimana kutipan. PPh Pasal 26 ayat (4) atas laba 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp390.000.000", B: "Rp300.000.000", C: "Rp260.000.000", D: "Rp150.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Laba setelah pajak = Rp5.000.000.000 − 22% × Rp5.000.000.000 = Rp3.900.000.000. Pengecualian PPh Pasal 26 ayat (4) hanya diberikan bila SELURUH laba setelah pajak ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011). Yang ditanamkan kembali hanya Rp2.400.000.000, sehingga pengecualian tidak berlaku dan BPT dihitung atas seluruh laba setelah pajak dengan tarif P3B (Pasal 5): 10% × Rp3.900.000.000 = Rp390.000.000.",
        jejakHitung: [
          ["PPh badan = 22% × Rp5.000.000.000", "Rp1.100.000.000"],
          ["Laba setelah pajak", "Rp3.900.000.000"],
          ["Penanaman kembali Rp2.400.000.000", "Sebagian, bukan seluruhnya → tidak dikecualikan"],
          ["BPT = 10% × Rp3.900.000.000", "Rp390.000.000"]
        ],
        mengapaSalah: {
          B: "Mengurangkan penanaman kembali sebagian dan memakai tarif domestik 20% (20% × Rp1.500.000.000), padahal P3B membatasi 10% dan penanaman kembali sebagian tidak mengurangi dasar BPT.",
          C: "Mengurangkan penanaman kembali dari PKP sebelum pajak (10% × Rp2.600.000.000); urutannya salah dan penanaman kembali sebagian tidak dikecualikan.",
          D: "Mengurangkan penanaman kembali sebagian dari dasar BPT (10% × Rp1.500.000.000); PMK 14/PMK.03/2011 hanya mengecualikan bila seluruh laba setelah pajak ditanamkan kembali."
        },
        jebakan: "Pengecualian BPT bersifat seluruhnya atau tidak sama sekali: penanaman kembali sebagian tidak mengurangi dasar BPT. Urutan: PKP → kurangi PPh badan → uji apakah SELURUH laba ditanamkan kembali → tarif P3B."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3), Pasal 2, dan Pasal 5 PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "Pasal 10 P3B (branch profit tax)" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-014", topik: "C10.2", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "Kanagawa Electronics Co., Ltd. (Jepang) menunjuk PT Sumber Niaga sebagai distributor di Indonesia. PT Sumber Niaga membeli barang atas namanya sendiri, menjual kepada pelanggan dengan risiko sendiri, juga menjadi distributor bagi empat prinsipal lain, memperoleh margin wajar, dan tidak berwenang menandatangani kontrak atas nama Kanagawa. Status PT Sumber Niaga bagi Kanagawa adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Agen bebas, sehingga tidak menimbulkan BUT bagi Kanagawa",
        B: "Agen tidak bebas, karena kegiatan distribusinya berlangsung terus-menerus di Indonesia",
        C: "BUT berupa ruang promosi dan penjualan karena produk Kanagawa dipajang di toko PT Sumber Niaga",
        D: "BUT jasa karena kegiatan penjualan berlangsung lebih dari 60 hari dalam 12 bulan"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Distributor yang bertindak atas nama dan risiko sendiri, melayani banyak prinsipal, dan tidak menutup kontrak atas nama prinsipal adalah agen bebas dalam kegiatan usaha yang wajar; tidak menimbulkan BUT. Laba PT Sumber Niaga dipajaki sebagai WPDN.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Kontinuitas kegiatan tidak membuat agen menjadi tidak bebas; ukurannya ketergantungan hukum dan ekonomi.",
          C: "Ruang pamer milik distributor sendiri, bukan tempat usaha Kanagawa.",
          D: "Uji 60 hari berlaku untuk pemberian jasa oleh perusahaan LN, bukan penjualan oleh distributor independen."
        },
        jebakan: "Membedakan agen bebas dan tidak bebas."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (5) dan (6) P3B" }, { pasal: "Pasal 2 ayat (5) UU PPh; PMK 35/PMK.03/2019", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C10-015",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-C10-04",
      stem: "Data untuk soal V-C10-04: PT Garuda Agro Lestari (WPDN, peredaran bruto di atas Rp50 miliar) Tahun Pajak 2025 memiliki: penghasilan neto dalam negeri Rp6.000.000.000; laba neto cabang (BUT) di Malaysia sebelum pajak Malaysia Rp2.000.000.000 dengan pajak Malaysia dibayar Rp480.000.000 (laba cabang tidak diinvestasikan di Indonesia); bunga bruto dari afiliasi di Jepang Rp1.000.000.000 yang dipotong pajak Jepang 20% (Rp200.000.000) padahal batas P3B 10%; serta rugi usaha cabang di Vietnam Rp500.000.000. Penghasilan kena pajak dan PPh terutang PT Garuda 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PKP Rp8.500.000.000; PPh terutang Rp1.870.000.000", B: "PKP Rp8.800.000.000; PPh terutang Rp1.936.000.000", C: "PKP Rp6.000.000.000; PPh terutang Rp1.320.000.000", D: "PKP Rp9.000.000.000; PPh terutang Rp1.980.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "final-nonfinal" },
      pembahasan: {
        inti: "Penghasilan LN digabung sebesar penghasilan neto sebelum dikurangi pajak LN (Pasal 4 ayat (2) PMK 192/PMK.03/2018): Rp6.000.000.000 + Rp2.000.000.000 + Rp1.000.000.000 = Rp9.000.000.000; rugi Vietnam tidak digabung (Pasal 4 ayat (3)). PPh terutang 22% = Rp1.980.000.000.",
        jejakHitung: [
          ["Neto DN", "Rp6.000.000.000"],
          ["+ Laba cabang Malaysia (sebelum pajak Malaysia)", "Rp2.000.000.000"],
          ["+ Bunga Jepang (sebelum pajak Jepang)", "Rp1.000.000.000"],
          ["Rugi Vietnam", "tidak digabung"],
          ["PKP", "Rp9.000.000.000"],
          ["PPh 22%", "Rp1.980.000.000"]
        ],
        mengapaSalah: {
          A: "Mengurangkan rugi cabang Vietnam; kerugian LN tidak digabungkan.",
          B: "Memasukkan bunga Jepang neto setelah pajak (Rp800.000.000).",
          C: "Menganggap penghasilan LN sudah final di negara sumber."
        },
        jebakan: "Penghasilan neto sebelum dikurangi pajak LN, bukan setelah pajak LN; rugi LN dikeluarkan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 24 ayat (2) UU PPh (beserta Penjelasan)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) sampai (3) PMK 192/PMK.03/2018" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-016",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C10-04",
      stem: "Lanjutan V-C10-04 (PT Garuda Agro Lestari, PKP 2025 Rp9.000.000.000, PPh terutang Rp1.980.000.000): pajak Malaysia atas laba cabang Rp2.000.000.000 dibayar Rp480.000.000; bunga Jepang Rp1.000.000.000 dipotong Rp200.000.000 (20%) padahal batas P3B Indonesia–Jepang 10%; cabang Vietnam rugi Rp500.000.000. Jumlah kredit PPh Pasal 24 yang dapat dikreditkan PT Garuda untuk 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp680.000.000", B: "Rp640.000.000", C: "Rp660.000.000", D: "Rp540.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kredit dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018); di sini tiap negara hanya memberi satu jenis penghasilan. Laba usaha cabang Malaysia: batas 2.000/9.000 × Rp1.980.000.000 = Rp440.000.000 (dibayar Rp480.000.000 → kredit Rp440.000.000). Bunga Jepang: pajak yang seharusnya menurut P3B 10% = Rp100.000.000, batas Rp220.000.000 → kredit Rp100.000.000. Rugi cabang Vietnam tidak diperhitungkan. Total Rp540.000.000.",
        jejakHitung: [
          ["Batas Malaysia = 2.000/9.000 × 1.980 jt", "Rp440.000.000"],
          ["Kredit Malaysia = min(480 jt; 440 jt)", "Rp440.000.000"],
          ["Pajak Jepang sesuai P3B = 10% × 1.000 jt", "Rp100.000.000"],
          ["Batas Jepang = 1.000/9.000 × 1.980 jt", "Rp220.000.000"],
          ["Kredit Jepang = min(100 jt; 200 jt; 220 jt)", "Rp100.000.000"],
          ["Total PPh 24", "Rp540.000.000"]
        ],
        mengapaSalah: {
          A: "Mengkreditkan seluruh pajak LN tanpa batas (480 + 200).",
          B: "Mengkreditkan pemotongan Jepang 20% penuh; kelebihan di atas tarif P3B tidak dapat dikreditkan.",
          C: "Memakai batas gabungan (3.000/9.000 × 1.980 = 660), padahal batas dihitung per jenis penghasilan untuk tiap negara."
        },
        jebakan: "Tiga pembanding sekaligus untuk tiap jenis penghasilan dari tiap negara: pajak sesuai P3B, pajak dibayar, dan batas proporsional."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 11 dan 23 P3B Indonesia–Jepang" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C10-017", topik: "C10.3", tingkat: ["C"], jenis: "konsep", kesulitan: 2, kasusId: "V-C10-04",
      stem: "Lanjutan V-C10-04: setelah menghitung kredit PPh 24, tim pajak PT Garuda Agro Lestari menemukan dua sisa masalah, yaitu kelebihan pemotongan pajak di Jepang Rp100.000.000 (di atas batas tarif P3B 10%) dan rugi cabang Vietnam Rp500.000.000. Perlakuan yang tepat atas keduanya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kelebihan Rp100.000.000 dimintakan kembali kepada otoritas pajak Jepang; rugi Vietnam tidak dikurangkan dari penghasilan dalam negeri maupun negara lain",
        B: "Kelebihan Rp100.000.000 dibebankan sebagai biaya; rugi Vietnam dikompensasikan dengan penghasilan dalam negeri selama 5 tahun",
        C: "Kelebihan Rp100.000.000 dikreditkan pada SPT tahun berikutnya; rugi Vietnam digabung dengan laba cabang Malaysia",
        D: "Kelebihan Rp100.000.000 dimintakan restitusi kepada DJP melalui SPT lebih bayar; rugi Vietnam diabaikan"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak yang dipotong melebihi tarif P3B bukan beban Indonesia; WP memintanya kembali ke negara sumber (Jepang). Kerugian di LN tidak boleh digabungkan dalam menghitung PKP di Indonesia.",
        jejakHitung: [],
        mengapaSalah: {
          B: "PPh bukan biaya (Pasal 9 ayat (1) huruf h) dan rugi LN tidak dikompensasikan di Indonesia.",
          C: "Tidak ada carry forward kredit PPh 24; rugi satu negara tidak menutup laba negara lain.",
          D: "DJP tidak mengembalikan pajak yang dipungut negara lain."
        },
        jebakan: "Kelebihan pemotongan LN diselesaikan di negara sumber, bukan di SPT Indonesia."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (2) UU PPh dan Penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-018",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Bahari Nusantara (WPDN) menerima beberapa penghasilan dari luar negeri pada 2025 dan menyusun tabel negara sumber untuk menghitung batas kredit PPh 24 per jenis penghasilan untuk tiap negara. Penentuan negara sumber berikut sesuai Pasal 24 ayat (3) UU PPh, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Dividen dari Alpha Ltd. yang didirikan di Hong Kong, walaupun dibayar melalui rekening bank di Singapura → sumber Hong Kong", B: "Sewa gudang yang terletak di Malaysia → sumber Malaysia", C: "Royalti yang dibayar dan dibebankan Beta GmbH yang berkedudukan di Jerman → sumber Jerman", D: "Keuntungan penjualan saham Gamma Pte. Ltd. (didirikan di Singapura) kepada pembeli di Jepang → sumber Jepang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sumber penghasilan penjualan saham adalah negara tempat badan penerbit saham didirikan atau berkedudukan (Singapura), bukan negara pembeli.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Benar: dividen bersumber di negara tempat badan pembagi dividen didirikan.",
          B: "Benar: sewa harta tak gerak bersumber di negara letak harta.",
          C: "Benar: royalti bersumber di negara tempat pihak yang membayar/membebankan berkedudukan."
        },
        jebakan: "Kata KECUALI: cari satu pernyataan yang salah."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (1) dan Pasal 6 ayat (3) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C10-019", topik: "C10.3", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 24 ayat (5) UU PPh: Apabila pajak atas penghasilan yang dibayar atau terutang di luar negeri dikurangkan atau dikembalikan, maka Pajak Penghasilan yang terutang menurut undang-undang ini harus ditambah dengan jumlah tersebut pada tahun pengurangan atau pengembalian itu dilakukan.",
      stem: "Dalam SPT Tahunan PPh Badan 2024, PT Andalan Teknik mengkreditkan PPh 24 Rp150.000.000 atas penghasilan jasa dari Filipina (seluruhnya di bawah batas kredit). Pada Agustus 2026 otoritas pajak Filipina mengembalikan Rp60.000.000 karena keberatan PT Andalan Teknik di sana dikabulkan. Berdasarkan kutipan, perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membetulkan SPT Tahunan 2024 sehingga kredit menjadi Rp90.000.000 dan membayar kekurangannya beserta sanksi bunga Pasal 8 ayat (2) UU KUP",
        B: "Menambahkan Rp60.000.000 pada PPh terutang dalam SPT Tahunan PPh Badan 2026",
        C: "Mencatat Rp60.000.000 sebagai penghasilan bukan objek karena berasal dari pengembalian pajak",
        D: "Mengakui Rp60.000.000 sebagai penghasilan 2026 yang dikenai tarif 22% (Rp13.200.000)"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 24 ayat (5): pengembalian pajak LN tidak membuka kembali tahun 2024, tetapi menambah PPh terutang pada tahun pengembalian (2026) sebesar jumlah yang dikembalikan, Rp60.000.000.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Undang-undang mengatur penambahan pada tahun pengembalian, bukan pembetulan tahun kredit.",
          C: "Pengembalian pajak LN justru menambah PPh terutang.",
          D: "Yang ditambahkan adalah PPh-nya (Rp60.000.000), bukan penghasilan yang dikenai tarif 22%."
        },
        jebakan: "Menambah pajak, bukan menambah penghasilan; pada tahun pengembalian."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-020", topik: "C10.3", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mahakarya Investama memiliki 100% saham Siam Mahakarya Co., Ltd. (Thailand, sahamnya tidak diperdagangkan di bursa). Pada Juni 2025 Siam Mahakarya membagikan dividen Rp3.000.000.000 yang dipotong pajak Thailand 10% (Rp300.000.000). PT Mahakarya menginvestasikan dividen tersebut di Indonesia dan memenuhi seluruh syarat pengecualian (jumlah, bentuk, dan jangka waktu investasi serta pelaporan realisasi) menurut PMK 18/PMK.03/2021. Perlakuan dividen dan pajak Thailand tersebut dalam SPT Tahunan PPh Badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dividen menjadi objek PPh tarif 22% dan pajak Thailand Rp300.000.000 dikreditkan sebagai PPh 24",
        B: "Dividen dikecualikan dari objek PPh, tetapi pajak Thailand Rp300.000.000 tetap dapat dikreditkan terhadap PPh atas penghasilan lain",
        C: "Dividen dikecualikan dari objek PPh dan pajak Thailand Rp300.000.000 tidak dapat dikreditkan",
        D: "Dividen dikenai PPh final 10% sehingga pajak Thailand menjadi pelunasan PPh final"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Dengan metode pembebasan (Pasal 4 ayat (3) huruf f angka 2 UU PPh), dividen LN yang diinvestasikan sesuai syarat bukan objek PPh; karena tidak ada PPh Indonesia atas penghasilan itu, pajak Thailand tidak dapat dikreditkan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Metode kredit hanya berlaku bila syarat pengecualian tidak dipenuhi.",
          B: "Kredit PPh 24 dibatasi pajak Indonesia atas penghasilan yang sama; penghasilan yang dikecualikan memberi batas nol.",
          D: "Tidak ada PPh final 10% atas dividen LN yang diterima WP badan."
        },
        jebakan: "Pembebasan dan kredit tidak dapat dinikmati sekaligus atas penghasilan yang sama."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f angka 2 UU PPh", berlakuSejak: "2020-11-02" }, { pasal: "PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }, { pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-021",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.7A.1",
      stem: "PT Garuda Agro Lestari akan melaporkan kredit pajak luar negeri Rp540.000.000 beserta rinciannya per jenis penghasilan dan negara dalam SPT Tahunan PPh Badan Tahun Pajak 2025. Menurut bentuk SPT Tahunan PPh Badan dalam PER-11/PJ/2025, rincian penghasilan luar negeri dan kredit PPh Pasal 24 per jenis penghasilan dan negara dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 4 (penghasilan yang dikenai PPh final dan yang tidak termasuk objek pajak)", B: "Lampiran 12A (penghitungan PPh Pasal 26 ayat (4) BUT)", C: "Lampiran 3 (daftar PPh yang dipotong/dipungut oleh pihak lain dan kredit pajak luar negeri)", D: "Lampiran 10A (daftar transaksi yang dipengaruhi hubungan istimewa)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dalam SPT Tahunan PPh Badan bentuk PER-11/PJ/2025, Lampiran 3 dipakai untuk melaporkan penghasilan, PPh yang dipotong/dipungut pihak lain, dan kredit pajak luar negeri. Bagian A memuat penghasilan dari luar negeri dan pajaknya; kredit dihitung per jenis penghasilan untuk tiap negara atau yurisdiksi (Pasal 6 ayat (2) PMK 192/PMK.03/2018). Pertanyaan pada Induk SPT bagian pengurang PPh terutang mengarahkan pengisian ke Lampiran 3.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Lampiran 4 untuk penghasilan yang dikenai PPh final dan yang tidak termasuk objek pajak.",
          B: "Lampiran 12A untuk penghitungan branch profit tax BUT.",
          D: "Lampiran 10A untuk transaksi yang dipengaruhi hubungan istimewa."
        },
        jebakan: "Kode lama 1771-III, 6A, 7A, dan 3A berasal dari formulir PER-34/PJ/2010 yang hanya dipakai sampai TP 2024. Di PER-11/PJ/2025 kredit PPh dalam negeri dan luar negeri digabung dalam Lampiran 3 (bagian berbeda)."
      },
      dasarHukum: [{ pasal: "Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026 (SPT Tahunan PPh Badan, Lampiran 3)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C10-022", topik: "C10.4", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Baja Prima Utama (industri baja; bukan bank, lembaga pembiayaan, asuransi, pertambangan, atau infrastruktur) menyajikan rata-rata saldo akhir bulan Tahun Pajak 2025: pinjaman bank berbunga Rp30.000.000.000; pinjaman berbunga dari induk di Singapura Rp20.000.000.000; utang dagang tanpa bunga Rp10.000.000.000; ekuitas Rp9.000.000.000; pinjaman tanpa bunga dari pemegang saham Rp1.000.000.000. Biaya pinjaman 2025 Rp4.500.000.000 dan tingkat bunganya telah teruji wajar. Biaya pinjaman yang dapat dibebankan dalam penghitungan PKP 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp3.000.000.000",
        B: "Rp3.600.000.000",
        C: "Rp3.240.000.000",
        D: "Rp4.500.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Utang DER = pinjaman bank + pinjaman induk = Rp50 miliar (utang dagang tanpa bunga tidak dihitung). Modal = ekuitas + pinjaman tanpa bunga pemegang saham = Rp10 miliar. DER 5:1 > 4:1 sehingga biaya pinjaman yang dapat dibebankan = (4 × 10 ÷ 50) × Rp4,5 miliar = Rp3.600.000.000; koreksi positif Rp900.000.000.",
        jejakHitung: [["Utang (berbunga)", "Rp50.000.000.000"], ["Modal (ekuitas + pinjaman tanpa bunga)", "Rp10.000.000.000"], ["DER", "5 : 1"], ["Porsi = (4 × 10) ÷ 50", "80%"], ["Dapat dibebankan = 80% × Rp4.500.000.000", "Rp3.600.000.000"], ["Koreksi positif", "Rp900.000.000"]],
        mengapaSalah: {
          A: "Memasukkan utang dagang tanpa bunga sehingga utang Rp60 miliar.",
          C: "Tidak memasukkan pinjaman tanpa bunga pemegang saham ke modal.",
          D: "Menganggap hanya utang afiliasi yang dihitung; DER mencakup utang kepada pihak independen."
        },
        jebakan: "Komponen utang dan modal DER, bukan sekadar angka neraca."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-023", topik: "C10.4", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Samudra Kimia memiliki pinjaman dari bank di Hong Kong (utang swasta luar negeri) Rp15.000.000.000 dengan bunga 2025 Rp1.200.000.000. DER rata-rata 2025 hanya 2:1. Namun PT Samudra Kimia tidak menyampaikan laporan utang swasta luar negeri kepada DJP sebagaimana diwajibkan PMK 169/PMK.010/2015. Konsekuensi atas bunga Rp1.200.000.000 dalam penghitungan PKP 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tetap dapat dibebankan seluruhnya karena DER di bawah 4:1",
        B: "Dapat dibebankan 4/5 bagian, yaitu Rp960.000.000",
        C: "Tidak dapat dibebankan seluruhnya, sehingga dikoreksi positif Rp1.200.000.000",
        D: "Tetap dapat dibebankan, tetapi perusahaan dikenai denda keterlambatan pelaporan Rp1.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban melaporkan utang swasta luar negeri berdiri sendiri di luar uji DER; bila tidak dilaporkan, biaya pinjaman atas utang tersebut tidak dapat dibebankan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Lolos uji DER tidak menghapus kewajiban pelaporan utang swasta luar negeri.",
          B: "Porsi 4/5 adalah logika DER 5:1, tidak relevan di sini.",
          D: "Sanksinya berupa tidak dapat dibebankannya biaya pinjaman, bukan denda Pasal 7 UU KUP."
        },
        jebakan: "Ada dua uji terpisah dalam PMK 169/2015: DER dan pelaporan utang LN."
      },
      dasarHukum: [{ pasal: "PMK 169/PMK.010/2015 (pelaporan utang swasta luar negeri)", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-024",
      topik: "C10.4",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      kasusId: "V-C10-05",
      stem: "Data untuk soal V-C10-05: Merak Holdings Ltd. didirikan di British Virgin Islands, sahamnya tidak diperdagangkan di bursa, dan di negaranya tidak dikenai pajak penghasilan serta tidak wajib menyampaikan SPT. Pemegang sahamnya: PT Andalas Investama (WPDN) 40%, PT Bukit Sejahtera (WPDN) 20%, dan Orient Capital Pte. Ltd. (Singapura) 40%. Tahun buku Merak Holdings sama dengan tahun kalender; laba 2025 seluruhnya berasal dari bunga dan royalti dan tidak dibagikan. Bagi PT Andalas Investama, ketentuan CFC Pasal 18 ayat (2) UU PPh atas laba Merak Holdings 2025 ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak berlaku, karena kepemilikan PT Andalas sendiri hanya 40% (kurang dari 50%)", B: "Berlaku, dan dividen dianggap diterima pada Juli 2026 (bulan ke-7 setelah tahun pajak berakhir)", C: "Berlaku, dan dividen dianggap diterima pada April 2026 (bulan ke-4 setelah tahun pajak berakhir)", D: "Berlaku, dan dividen dianggap diterima pada Desember 2025 saat laba diperoleh" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ambang 50% dihitung bersama WPDN lain: 40% + 20% = 60%. Karena Merak Holdings tidak wajib SPT di negaranya, deemed dividend dianggap diperoleh bulan ke-7 setelah tahun pajak berakhir, yaitu Juli 2026.",
        jejakHitung: [
          ["Kepemilikan WPDN bersama", "40% + 20% = 60% (≥ 50%)"],
          ["Kewajiban SPT di BVI", "tidak ada"],
          ["Saat deemed dividend", "bulan ke-7 setelah Desember 2025 = Juli 2026"]
        ],
        mengapaSalah: {
          A: "Ambang CFC memperhitungkan kepemilikan bersama WPDN lain.",
          C: "Bulan ke-4 dihitung setelah batas waktu SPT di negara CFC, dan hanya bila ada kewajiban SPT.",
          D: "CFC menetapkan saat diperolehnya dividen tersendiri, bukan saat laba diperoleh."
        },
        jebakan: "Ambang gabungan WPDN dan dua patokan waktu (ke-4 vs ke-7)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 34 ayat (1) sampai (3) PP 55/2022", berlakuSejak: "2022-12-20" }, { pasal: "PMK 107/PMK.03/2017 sebagaimana diubah PMK 93/PMK.03/2019" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-025",
      topik: "C10.4",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-C10-05",
      stem: "Lanjutan V-C10-05 (Merak Holdings Ltd., BVI, nonbursa; PT Andalas Investama 40%, PT Bukit Sejahtera 20%, investor Singapura 40%): laba Merak Holdings 2025 Rp9.000.000.000, terdiri atas pendapatan bunga Rp6.000.000.000 dan royalti Rp4.000.000.000 dikurangi biaya Rp1.000.000.000, tanpa pajak di BVI, dan tidak ada dividen aktual. PT Andalas tidak menginvestasikan dividen tersebut di Indonesia sehingga tidak memperoleh fasilitas pengecualian. Deemed dividend yang dilaporkan PT Andalas Investama dan PPh terutangnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.600.000.000 dalam SPT Tahunan 2026; PPh Rp792.000.000", B: "Rp5.400.000.000 dalam SPT Tahunan 2026; PPh Rp1.188.000.000", C: "Rp3.600.000.000; PPh final 10% Rp360.000.000", D: "Rp4.000.000.000 dalam SPT Tahunan 2026; PPh Rp880.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "final-nonfinal", D: "salah-hitung" },
      pembahasan: {
        inti: "Deemed dividend = porsi kepemilikan PT Andalas 40% × Rp9.000.000.000 = Rp3.600.000.000, diperoleh Juli 2026 sehingga masuk SPT Tahunan 2026 dan dikenai tarif umum 22% = Rp792.000.000.",
        jejakHitung: [
          ["Laba neto CFC (bunga + royalti − biaya)", "Rp9.000.000.000"],
          ["Porsi PT Andalas 40%", "Rp3.600.000.000"],
          ["PPh 22%", "Rp792.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai kepemilikan gabungan 60%; ambang dihitung bersama, tetapi porsi tetap milik masing-masing.",
          C: "Deemed dividend bukan PPh final; masuk penghasilan kena pajak tarif umum.",
          D: "Memakai pendapatan bruto Rp10 miliar sebelum biaya."
        },
        jebakan: "Ambang memakai kepemilikan gabungan, porsi deemed dividend memakai kepemilikan sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 34 ayat (1) dan ayat (3) PP 55/2022", berlakuSejak: "2022-12-20" }, { pasal: "Pasal 2 ayat (3a), Pasal 3 ayat (2), Pasal 4 ayat (1), (2), (9), dan (11) PMK 107/PMK.03/2017 s.t.d.d. PMK 93/PMK.03/2019", berlakuSejak: "2019-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-026", topik: "C10.4", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      kutipan: "Pasal 18 ayat (3c) UU PPh (disederhanakan): Penjualan atau pengalihan saham perusahaan antara atau perusahaan pipa (conduit company atau special purpose company) yang didirikan atau bertempat kedudukan di negara yang memberikan perlindungan pajak yang mempunyai hubungan istimewa dengan badan yang didirikan atau bertempat kedudukan di Indonesia dapat ditentukan sebagai badan yang didirikan atau bertempat kedudukan di Indonesia, sehingga penjualan sahamnya diperlakukan sebagai penjualan saham badan Indonesia. Pasal 26 ayat (2a): atas penghasilan dari penjualan atau pengalihan saham tersebut dikenai pajak 20% dari perkiraan penghasilan neto.",
      stem: "Golden Bridge Ltd. (British Virgin Islands; tidak ada P3B dengan Indonesia) memiliki 100% saham Bridge Indo Holdings Ltd. (Cayman Islands), perusahaan antara tanpa pegawai dan tanpa kegiatan selain memiliki 95% saham PT Jembatan Emas Indonesia. Pada September 2026 Golden Bridge menjual seluruh saham Bridge Indo Holdings kepada investor Hong Kong seharga Rp800.000.000.000. Perkiraan penghasilan neto atas penjualan saham 25% dari harga jual (PMK 258/PMK.03/2008). Berdasarkan kutipan, PPh Pasal 26 atas transaksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp160.000.000.000",
        B: "Rp0, karena penjualan terjadi di luar negeri antara dua WPLN",
        C: "Rp40.000.000.000",
        D: "Rp176.000.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penjualan saham conduit di negara tax haven yang mempunyai hubungan istimewa dengan PT Jembatan Emas dianggap penjualan saham badan Indonesia: 20% × 25% × Rp800.000.000.000 = Rp40.000.000.000. Karena penjual di negara tanpa P3B, tidak ada pembatasan tarif.",
        jejakHitung: [["Perkiraan neto = 25% × Rp800.000.000.000", "Rp200.000.000.000"], ["PPh 26 = 20% × Rp200.000.000.000", "Rp40.000.000.000"]],
        mengapaSalah: {
          A: "Melupakan perkiraan neto 25% (20% × harga jual).",
          B: "Pasal 18 ayat (3c) justru menarik transaksi offshore ini ke yurisdiksi Indonesia.",
          D: "Tarif badan 22% tidak berlaku bagi WPLN tanpa BUT."
        },
        jebakan: "Look-through conduit dan dasar perkiraan neto 25%."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3c) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (2a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 258/PMK.03/2008", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-027", topik: "C10.4", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Arunika Pangan sedang menyusun daftar pihak hubungan istimewa untuk lampiran transaksi afiliasi SPT Tahunan 2025. Pihak berikut yang BUKAN merupakan pihak hubungan istimewa PT Arunika menurut Pasal 18 ayat (4) UU PPh adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "PT Bumi Raya, pemilik 30% saham PT Arunika",
        B: "PT Elang Perkasa, pemilik 20% saham PT Arunika, tanpa hubungan pengurusan, teknologi, atau keluarga",
        C: "PT Cendana Lestari, yang 40% sahamnya dimiliki Tuan Joko, pemegang 30% saham PT Arunika",
        D: "PT Fajar Logistik, yang pengurusannya berada di bawah penguasaan manajemen yang sama dengan PT Arunika"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kepemilikan 20% di bawah ambang 25% dan tidak ada penguasaan atau hubungan keluarga, sehingga PT Elang Perkasa bukan pihak hubungan istimewa.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kepemilikan langsung 30% ≥ 25%.",
          C: "Dua badan yang sama-sama dimiliki ≥ 25% oleh pihak yang sama memiliki hubungan istimewa.",
          D: "Penguasaan melalui manajemen menimbulkan hubungan istimewa tanpa melihat kepemilikan."
        },
        jebakan: "Hubungan istimewa juga timbul secara tidak langsung dan karena penguasaan."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C10-028",
      topik: "C10.4",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Tim pemeriksa menemukan empat skema pada Grup Nusa Prima: (1) PT Nusa Prima memiliki 80% saham anak usaha nonbursa di British Virgin Islands yang tidak pernah membagikan laba; (2) PT Nusa Kimia memiliki utang afiliasi berbunga dengan DER rata-rata 8:1; (3) pemegang saham di negara bertarif rendah menjual saham perusahaan antara yang memiliki PT Nusa Mineral; (4) rangkaian transaksi berlapis tanpa substansi ekonomi yang tidak dapat dijangkau instrumen khusus mana pun. Instrumen yang tepat untuk skema (1), (2), (3), dan (4) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "CFC; DER; Pasal 18 ayat (3c) jo. 26 ayat (2a); GAAR", B: "DER; CFC; GAAR; Pasal 18 ayat (3c) jo. 26 ayat (2a)", C: "CFC; PKKU Pasal 18 ayat (3); Pasal 18 ayat (3c); MAP", D: "GAAR; DER; CFC; Pasal 18 ayat (3c) jo. 26 ayat (2a)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penahanan laba di anak usaha LN yang dikuasai → CFC; utang berlebih → DER; penjualan saham conduit → Pasal 18 ayat (3c) jo. 26 ayat (2a); skema tanpa substansi yang tidak tercakup instrumen khusus → GAAR. Dasarnya: CFC Pasal 18 ayat (2) UU PPh, DER Pasal 18 ayat (1) UU PPh, dan GAAR substance over form PP 55/2022.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Menukar CFC dengan DER dan conduit dengan GAAR; GAAR dipakai terakhir bila instrumen khusus tidak dapat diterapkan.",
          C: "DER 8:1 ditangani instrumen DER, dan MAP bukan instrumen anti-penghindaran.",
          D: "GAAR tidak didahulukan bila tersedia instrumen khusus (CFC)."
        },
        jebakan: "Instrumen khusus didahulukan; GAAR sebagai jaring terakhir."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (2) dan ayat (3c) jo. Pasal 26 ayat (2a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 ayat (1) UU PPh s.t.d.t.d. UU 7/2021 (batasan biaya pinjaman, antara lain DER)" }, { pasal: "Pasal 32 ayat (2) dan ayat (4) PP 55/2022", berlakuSejak: "2022-12-20" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-029",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kasusId: "V-C10-03",
      stem: "Data untuk soal V-C10-03: PT Sinar Komponen Indonesia (PMA; 90% sahamnya dimiliki Sinar Holdings Pte. Ltd., residen Singapura yang beneficial owner dan memiliki Form DGT sah) pada Tahun Pajak 2024 menjual 200.000 unit komponen kepada Sinar Holdings seharga Rp45.000 per unit. Dalam pemeriksaan 2026, pemeriksa menerapkan metode CUP dengan tujuh pembanding independen dan memperoleh rentang interkuartil Rp48.000–Rp55.000 dengan median Rp51.000. Data pembanding tidak memberi dasar untuk menentukan titik yang paling tepat di dalam rentang. Berdasarkan PMK 172/2023, koreksi primer atas penghasilan PT Sinar Komponen 2024 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp600.000.000", B: "Rp1.200.000.000", C: "Rp2.000.000.000", D: "Rp264.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Tujuh pembanding membentuk rentang interkuartil (Pasal 12 ayat (6) huruf b PMK 172/2023). Harga Rp45.000 di luar rentang Rp48.000–Rp55.000 sehingga tidak wajar. Karena tidak ada dasar untuk menentukan titik yang paling tepat, harga disesuaikan ke titik tengah (median) Rp51.000 (Pasal 12 ayat (7) huruf c): (51.000 − 45.000) × 200.000 = Rp1.200.000.000.",
        jejakHitung: [
          ["Harga transaksi", "Rp45.000 (di bawah rentang Rp48.000–Rp55.000)"],
          ["Titik penyesuaian (tidak ada titik paling tepat)", "median Rp51.000"],
          ["Koreksi = 6.000 × 200.000", "Rp1.200.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke batas bawah Rp48.000; batas rentang bukan titik penyesuaian bila titik paling tepat tidak dapat ditentukan.",
          C: "Menyesuaikan ke batas atas Rp55.000.",
          D: "Itu PPh badan atas koreksi (22%), bukan koreksi primer."
        },
        jebakan: "Di luar rentang, Pasal 12 ayat (7) PMK 172/2023 lebih dulu memakai titik yang paling tepat sesuai kesebandingannya; median dipakai bila titik itu tidak dapat ditentukan. Soal tidak memberi dasar kesebandingan untuk memilih titik lain, sehingga yang dipakai median, bukan batas bawah atau batas atas."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 ayat (6) dan ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-030", topik: "C10.5", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-03",
      stem: "Lanjutan V-C10-03 (PT Sinar Komponen Indonesia; koreksi primer TP 2024 Rp1.200.000.000; induk Sinar Holdings Pte. Ltd. memiliki 90% saham, beneficial owner, Form DGT sah; batas tarif dividen P3B Indonesia–Singapura 10% untuk kepemilikan ≥ 25% dan 15% dalam hal lainnya). Selisih tersebut tidak dikembalikan dalam bentuk kas/setara kas dan PT Sinar Komponen tidak menyetujui koreksi pada pembahasan akhir. Jumlah tambahan PPh badan atas koreksi primer dan PPh 26 atas secondary adjustment (belum termasuk sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp504.000.000",
        B: "Rp264.000.000",
        C: "Rp384.000.000",
        D: "Rp444.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PPh badan 22% × Rp1.200.000.000 = Rp264.000.000. Secondary adjustment: selisih dianggap dividen kepada Sinar Holdings; tarif P3B 10% (kepemilikan 90%) = Rp120.000.000. Jumlah Rp384.000.000.",
        jejakHitung: [["PPh badan = 22% × Rp1.200.000.000", "Rp264.000.000"], ["Dividen terselubung (secondary adjustment)", "Rp1.200.000.000"], ["PPh 26 = 10% × Rp1.200.000.000", "Rp120.000.000"], ["Jumlah", "Rp384.000.000"]],
        mengapaSalah: {
          A: "Memakai PPh 26 20% padahal SKD sah dan beneficial owner.",
          B: "Melupakan secondary adjustment yang diatur PMK 172/2023.",
          D: "Memakai tarif dividen 15% (portofolio) padahal kepemilikan 90%."
        },
        jebakan: "Koreksi TP berlapis: PPh badan atas koreksi primer dan PPh 26 atas dividen terselubung."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (secondary adjustment)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 P3B Indonesia–Singapura" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-031", topik: "C10.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C10-03",
      stem: "Lanjutan V-C10-03: manajemen PT Sinar Komponen Indonesia ingin agar selisih koreksi primer Rp1.200.000.000 atas penjualan kepada Sinar Holdings Pte. Ltd. tidak diperlakukan sebagai dividen terselubung yang dikenai PPh 26. Langkah yang sesuai dengan PMK 172/2023 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Sinar Holdings mengembalikan selisih Rp1.200.000.000 kepada PT Sinar Komponen dalam bentuk kas atau setara kas sesuai PMK 172/2023",
        B: "PT Sinar Komponen menerbitkan nota kredit internal kepada Sinar Holdings tanpa aliran kas pada tahun 2026",
        C: "PT Sinar Komponen mengajukan APA unilateral yang diberlakukan surut untuk Tahun Pajak 2024 yang sedang diperiksa oleh DJP",
        D: "PT Sinar Komponen membebankan selisih Rp1.200.000.000 sebagai biaya (koreksi negatif) dalam SPT Tahunan PPh Badan 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Secondary adjustment dikecualikan bila kelebihan yang dinikmati afiliasi dikembalikan kepada WP dalam bentuk kas atau setara kas sesuai syarat PMK 172/2023, sehingga tidak ada dividen terselubung. Pengembalian itu harus memenuhi syarat dan jangka waktu yang diatur PMK 172/2023.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Nota kredit tanpa aliran kas tidak memenuhi syarat pengembalian.",
          C: "APA tidak dapat menghapus koreksi tahun yang sedang diperiksa dan bukan alat menghindari secondary adjustment.",
          D: "Koreksi primer tidak dapat dinetralkan sepihak dengan membebankan biaya."
        },
        jebakan: "Yang menghindarkan dividen terselubung adalah pengembalian nyata dalam kas/setara kas sesuai syarat PMK 172/2023; nota kredit, APA, atau pembebanan sepihak tidak cukup."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (secondary adjustment)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-032", topik: "C10.6", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-03",
      stem: "Lanjutan V-C10-03: SKPKB PPh Badan 2024 atas koreksi TP diterima PT Sinar Komponen Indonesia pada 12 Agustus 2026 dan perusahaan telah mengajukan keberatan. Otoritas pajak Singapura belum melakukan penyesuaian berkaitan (corresponding adjustment) atas laba Sinar Holdings Pte. Ltd., sehingga Rp1.200.000.000 dipajaki di dua negara. Langkah yang tepat untuk menghilangkan pajak berganda ekonomi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Menunggu putusan banding berkekuatan hukum tetap, karena MAP tidak dapat berjalan bersama upaya hukum domestik",
        B: "Mengajukan permohonan MAP kepada DJP dalam batas waktu P3B; MAP dapat berjalan bersamaan dengan keberatan",
        C: "Mengajukan APA bilateral untuk Tahun Pajak 2024 agar koreksi otomatis dibatalkan oleh kedua otoritas",
        D: "Mengajukan gugatan ke Pengadilan Pajak atas tidak dilakukannya penyesuaian oleh otoritas Singapura"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak berganda ekonomi akibat koreksi TP diselesaikan lewat MAP (Pasal 25 P3B) agar Singapura memberi corresponding adjustment. PMK 172/2023 membolehkan MAP berjalan bersamaan dengan keberatan; hasil MAP dilaksanakan dengan keputusan yang mengubah ketetapan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "MAP tidak harus menunggu proses domestik selesai.",
          C: "APA berorientasi ke depan dan tidak membatalkan ketetapan yang sudah terbit.",
          D: "Pengadilan Pajak tidak berwenang atas tindakan otoritas negara lain."
        },
        jebakan: "MAP adalah jalur antarotoritas; ia melengkapi, bukan menggantikan, keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 P3B" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 25 UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-033",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arta Medika Indonesia (anak usaha grup Jerman) memiliki data Tahun Pajak 2024: peredaran bruto Rp42.000.000.000; pembelian bahan baku dari induk di Jerman Rp18.000.000.000; pembayaran jasa manajemen kepada afiliasi di Jepang Rp6.000.000.000. Seluruh afiliasinya berada di yurisdiksi dengan tarif PPh badan tidak lebih rendah dari 22%, dan grup tidak memiliki entitas induk di Indonesia. Kewajiban dokumentasi harga transfer PT Arta Medika untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak wajib, karena peredaran bruto di bawah Rp50 miliar dan transaksi barang di bawah Rp20 miliar", B: "Wajib menyampaikan CbCR karena merupakan anggota grup usaha multinasional", C: "Wajib Local File saja; Master File hanya diselenggarakan oleh entitas induk", D: "Wajib menyelenggarakan Master File dan Local File, karena transaksi jasa afiliasi tahun sebelumnya lebih dari Rp5 miliar" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ambang diuji dengan data tahun pajak sebelumnya dan bersifat alternatif: omzet (Rp42 miliar) dan barang (Rp18 miliar) belum melewati ambang, tetapi jasa afiliasi Rp6 miliar melebihi Rp5 miliar, sehingga Master File dan Local File wajib.",
        jejakHitung: [
          ["Peredaran bruto 2024 vs Rp50 miliar", "tidak melewati"],
          ["Barang berwujud Rp18 M vs Rp20 M", "tidak melewati"],
          ["Jasa afiliasi Rp6 M vs Rp5 M", "melewati → wajib"]
        ],
        mengapaSalah: {
          A: "Lupa bahwa satu kriteria saja (jasa > Rp5 miliar) sudah cukup.",
          B: "CbCR hanya bagi entitas induk ber-omzet konsolidasi ≥ Rp11 triliun atau entitas tertentu bila induk LN tidak wajib/tidak dipertukarkan.",
          C: "Master File dan Local File diwajibkan bersama bagi WP yang memenuhi ambang."
        },
        jebakan: "Kriteria ambang bersifat “atau”, bukan “dan”."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (2), ayat (3), dan ayat (4) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-034", topik: "C10.5", tingkat: ["C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Delta Otomotif (tahun buku sama dengan tahun kalender) wajib menyelenggarakan Master File dan Local File untuk Tahun Pajak 2025, sedangkan induknya di Indonesia dengan peredaran bruto konsolidasi Rp14 triliun wajib menyampaikan CbCR. Master File dan Local File harus tersedia paling lama ..., dan CbCR Tahun Pajak 2025 disampaikan paling lama ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "30 April 2026 dan 30 April 2026 (bersamaan dengan SPT Tahunan)",
        B: "30 April 2026 dan 31 Desember 2026",
        C: "31 Maret 2026 dan 31 Desember 2026",
        D: "1 bulan setelah diminta DJP untuk kedua dokumen"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Master File dan Local File tersedia paling lama 4 bulan setelah akhir tahun pajak (30 April 2026); CbCR paling lama 12 bulan setelah akhir tahun pajak (31 Desember 2026).",
        jejakHitung: [["Akhir tahun pajak", "31 Desember 2025"], ["+ 4 bulan (Master/Local File)", "30 April 2026"], ["+ 12 bulan (CbCR)", "31 Desember 2026"]],
        mengapaSalah: {
          A: "CbCR punya tenggat 12 bulan, tidak harus bersamaan dengan SPT.",
          C: "Tenggat dokumen TP 4 bulan, bukan 3 bulan.",
          D: "Batas penyerahan setelah diminta adalah aturan terpisah; dokumen harus sudah tersedia 4 bulan setelah tahun pajak."
        },
        jebakan: "Dua tenggat berbeda untuk dua jenis dokumen."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (dokumentasi dan CbCR)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C10-035", topik: "C10.5", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Dalam satu grup: (1) PT Mesin Presisi adalah produsen kontrak yang memproduksi sesuai spesifikasi induk dan menjual seluruh produknya kepada induk; tersedia data mark-up atas biaya pabrikan independen dengan fungsi serupa; (2) PT Niaga Prima membeli produk jadi dari afiliasi dan menjual kembali kepada pelanggan independen tanpa pengolahan berarti; tersedia data margin laba kotor distributor independen yang sebanding. Metode harga transfer yang paling tepat untuk (1) dan (2) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Metode biaya plus; metode harga penjualan kembali",
        B: "Metode harga penjualan kembali; metode biaya plus",
        C: "Metode perbandingan harga antara pihak independen (CUP); metode pembagian laba",
        D: "Metode pembagian laba; metode laba bersih transaksional (TNMM)"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Produsen kontrak berfungsi rutin dan dinilai dari mark-up atas biaya (biaya plus); distributor tanpa pengolahan dinilai dari margin kotor penjualan kembali (harga penjualan kembali). Ketersediaan data pembanding menguatkan pilihan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Metodenya tertukar.",
          C: "Tidak ada data harga produk identik untuk CUP, dan pembagian laba untuk kontribusi unik kedua pihak.",
          D: "Pembagian laba tidak tepat untuk fungsi rutin produsen kontrak."
        },
        jebakan: "Pemilihan metode mengikuti karakter usaha dan data pembanding yang tersedia."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (metode penentuan harga transfer)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-036", topik: "C10.5", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Hikari Indonesia membayar management fee Rp2.400.000.000 pada 2025 kepada induknya di Jepang. Hasil uji manfaat menunjukkan: (a) Rp600.000.000 untuk penyusunan laporan konsolidasi dan rapat investor induk; (b) Rp1.200.000.000 untuk layanan sistem TI yang dipakai operasional harian PT Hikari, yang akan dibeli dari pihak lain bila tidak disediakan induk, dengan harga yang telah teruji wajar; (c) Rp600.000.000 untuk pelatihan pajak yang materi dan pesertanya sama dengan pelatihan yang sudah dibeli PT Hikari dari konsultan lokal. Management fee yang dapat dibebankan sebagai biaya dalam penghitungan PKP 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp2.400.000.000, karena didukung perjanjian dan faktur",
        B: "Rp1.800.000.000",
        C: "Rp1.200.000.000",
        D: "Rp0, karena management fee kepada afiliasi luar negeri tidak boleh dibiayakan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Uji manfaat PKKU: aktivitas pemegang saham (a) dan jasa duplikatif (c) tidak memberi manfaat ekonomi bagi PT Hikari sehingga tidak dapat dibebankan; hanya layanan TI (b) Rp1.200.000.000 yang lolos.",
        jejakHitung: [["(a) aktivitas pemegang saham", "dikoreksi Rp600.000.000"], ["(b) layanan TI bermanfaat dan wajar", "boleh Rp1.200.000.000"], ["(c) jasa duplikatif", "dikoreksi Rp600.000.000"], ["Dapat dibebankan", "Rp1.200.000.000"]],
        mengapaSalah: {
          A: "Dokumen formal tidak menggantikan uji keberadaan dan manfaat jasa.",
          B: "Hanya mengoreksi aktivitas pemegang saham dan lupa jasa duplikatif.",
          D: "Jasa afiliasi LN yang nyata, bermanfaat, dan wajar tetap dapat dibiayakan."
        },
        jebakan: "Uji manfaat memisahkan jasa bermanfaat dari shareholder activity dan duplikasi."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (uji manfaat jasa intra-grup)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-037", topik: "C10.6", tingkat: ["C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 25 ayat (1) P3B (disederhanakan): Apabila seorang residen menganggap bahwa tindakan salah satu atau kedua Negara mengakibatkan pengenaan pajak yang tidak sesuai dengan Persetujuan, ia dapat mengajukan kasusnya kepada pejabat berwenang Negara tempat ia menjadi residen dalam waktu 3 tahun sejak pemberitahuan pertama atas tindakan tersebut.",
      stem: "PT Hanei Indonesia menerima SKPKB hasil koreksi harga transfer atas pembelian dari afiliasinya di Jepang; SKPKB tersebut merupakan pemberitahuan pertama atas tindakan yang menimbulkan pajak berganda dan diterima pada 10 Maret 2024. Berdasarkan kutipan, PT Hanei Indonesia paling lambat harus mengajukan MAP kepada DJP pada tanggal ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "10 Juni 2024, sama dengan batas pengajuan keberatan",
        B: "10 Maret 2027",
        C: "31 Desember 2027, tiga tahun sejak akhir tahun pemberitahuan",
        D: "10 Maret 2026"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Jangka waktu MAP mengikuti P3B: 3 tahun sejak pemberitahuan pertama (10 Maret 2024), sehingga paling lambat 10 Maret 2027.",
        jejakHitung: [["Pemberitahuan pertama", "10 Maret 2024"], ["+ 3 tahun", "10 Maret 2027"]],
        mengapaSalah: {
          A: "3 bulan adalah tenggat keberatan UU KUP, bukan MAP.",
          C: "Dihitung sejak tanggal pemberitahuan, bukan akhir tahun.",
          D: "Memakai 2 tahun, tidak sesuai kutipan."
        },
        jebakan: "Tenggat MAP mengikuti P3B, tenggat keberatan mengikuti UU KUP."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) P3B" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "C10-038", topik: "C10.6", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Dalam rapat manajemen PT Sinar Logam, direktur keuangan membandingkan jalur keberatan dan MAP untuk sengketa koreksi harga transfer dengan afiliasi di Korea Selatan, karena perusahaan ingin kepastian bahwa pajak berganda pasti hilang. Pernyataan yang paling tepat mengenai sifat hasil MAP adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Otoritas kedua negara wajib mencapai kesepakatan paling lama 12 bulan; bila tidak, permohonan Wajib Pajak dianggap dikabulkan",
        B: "Hasil MAP diputus oleh Pengadilan Pajak setelah mendengar kedua otoritas dan Wajib Pajak, dan putusannya mengikat",
        C: "MAP hanya dapat membahas penafsiran P3B, tidak termasuk pajak berganda akibat koreksi harga transfer antarafiliasi",
        D: "Otoritas wajib berupaya mencapai persetujuan bersama tetapi tidak wajib berhasil; bila tidak tercapai, ketetapan semula tetap berlaku"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 25 P3B mewajibkan otoritas berupaya (endeavour) menyelesaikan kasus, bukan menjamin hasil; karena itu hak keberatan tetap perlu dijaga.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Fiksi “dianggap dikabulkan” 12 bulan milik keputusan keberatan UU KUP.",
          B: "MAP adalah negosiasi antarotoritas, bukan proses peradilan.",
          C: "Pajak berganda akibat koreksi TP (Pasal 9 P3B) justru objek utama MAP."
        },
        jebakan: "MAP tidak menjamin hasil; jangan lepaskan jalur keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (2) P3B" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-039", topik: "C10.6", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Atas Tahun Pajak 2023 DJP menerbitkan SKPKB kepada PT Daehan Indonesia dengan koreksi harga transfer Rp2.000.000.000 atas pembelian dari afiliasi di Korea Selatan. Melalui MAP, DJP dan otoritas Korea Selatan menyepakati koreksi menjadi Rp800.000.000, dan Korea Selatan memberikan penyesuaian berkaitan atas bagian tersebut; PT Daehan Indonesia menyetujui hasil MAP. Pokok PPh badan atas koreksi TP setelah ditindaklanjuti dengan keputusan pelaksanaan MAP (tarif 22%) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp440.000.000",
        B: "Rp176.000.000",
        C: "Rp264.000.000",
        D: "Rp0"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Hasil MAP dilaksanakan dengan keputusan yang mengubah SKPKB: koreksi menjadi Rp800.000.000 sehingga pokok PPh = 22% × Rp800.000.000 = Rp176.000.000 (turun dari Rp440.000.000); sanksi ikut dihitung ulang.",
        jejakHitung: [["Koreksi semula × 22%", "Rp440.000.000"], ["Koreksi hasil MAP", "Rp800.000.000"], ["Pokok PPh = 22% × Rp800.000.000", "Rp176.000.000"]],
        mengapaSalah: {
          A: "Menganggap MAP tidak mengubah ketetapan yang sudah terbit.",
          C: "Menghitung 22% atas selisih yang dibatalkan (Rp1,2 miliar).",
          D: "MAP mengurangi, bukan menghapus seluruh koreksi."
        },
        jebakan: "Yang tersisa adalah koreksi yang disepakati, bukan selisihnya."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pelaksanaan persetujuan bersama)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 25 ayat (2) P3B" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-040", topik: "C10.6", tingkat: ["C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Gemilang Tekstil menerima SKPKB PPh Badan 2023 hasil koreksi harga transfer atas penjualan kepada afiliasi di Jepang; SKPKB dikirim dan diterima pada 15 Juli 2026. Perusahaan ingin menempuh MAP sekaligus tetap mempertahankan hak keberatan agar tidak kehilangan jalur domestik bila MAP gagal. Langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Cukup mengajukan MAP; jangka waktu keberatan otomatis tertangguh sampai MAP selesai atau dihentikan",
        B: "Mengajukan keberatan paling lama 6 bulan sejak SKPKB dikirim (15 Januari 2027) karena disertai MAP",
        C: "Mengajukan keberatan paling lama 15 Oktober 2026 (3 bulan sejak SKPKB dikirim) dan MAP dalam batas waktu P3B secara bersamaan",
        D: "Mengajukan keberatan terlebih dahulu; MAP baru boleh diajukan setelah Surat Keputusan Keberatan terbit dan tidak diajukan banding"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keberatan tetap tunduk pada Pasal 25 ayat (3) UU KUP (3 bulan sejak SKP dikirim, yaitu 15 Oktober 2026), sedangkan MAP mengikuti P3B; PMK 172/2023 membolehkan keduanya berjalan bersamaan.",
        jejakHitung: [["SKPKB dikirim", "15 Juli 2026"], ["+ 3 bulan (keberatan)", "15 Oktober 2026"]],
        mengapaSalah: {
          A: "Pengajuan MAP tidak menangguhkan tenggat keberatan.",
          B: "Tenggat keberatan tetap 3 bulan.",
          D: "MAP tidak harus menunggu keputusan keberatan."
        },
        jebakan: "Dua jalur, dua tenggat: UU KUP untuk keberatan, P3B untuk MAP."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 25 P3B" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-041", topik: "C10.7", tingkat: ["C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Hana Elektronik membayar royalti teknologi kepada induknya di Korea Selatan dan ingin kepastian, untuk lima tahun pajak ke depan, bahwa tingkat royalti yang dipakai tidak dikoreksi baik oleh DJP maupun oleh otoritas pajak Korea Selatan. Instrumen yang paling sesuai adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "APA bilateral antara DJP dan otoritas pajak Korea Selatan",
        B: "APA unilateral yang disepakati PT Hana Elektronik dan DJP",
        C: "MAP atas sengketa koreksi yang sudah terjadi di kedua negara",
        D: "SKD/Form DGT dari induk agar tarif royalti P3B berlaku"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kepastian di dua negara untuk periode ke depan hanya diberikan APA bilateral, yang disepakati DJP dan otoritas mitra melalui mekanisme MAP.",
        jejakHitung: [],
        mengapaSalah: {
          B: "APA unilateral hanya mengikat DJP; otoritas Korea Selatan tetap dapat mengoreksi.",
          C: "MAP menyelesaikan sengketa yang sudah timbul, bukan memberi kepastian ke depan.",
          D: "SKD hanya menentukan tarif PPh 26, bukan kewajaran tingkat royalti."
        },
        jebakan: "Bedakan instrumen ke depan (APA) dan penyelesaian sengketa (MAP)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (APA)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "C10-042", topik: "C10.7", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Kirana Kimia (tahun buku sama dengan tahun kalender) membeli bahan baku dari induknya di Jepang. Agar harga transfernya tidak dikoreksi baik oleh DJP maupun oleh otoritas pajak Jepang, pada Juni 2026 perusahaan mengajukan permohonan APA bilateral untuk periode yang dimulai Tahun Pajak 2027. Menurut PMK 172/2023, periode APA paling lama mencakup tahun pajak ... dan kesepakatan bilateralnya dicapai melalui ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "2027–2029; perundingan DJP dengan otoritas pajak Jepang melalui mekanisme MAP",
        B: "2026–2030; kesepakatan antara PT Kirana Kimia dan DJP saja",
        C: "2027–2031; perundingan DJP dengan otoritas pajak Jepang melalui mekanisme MAP",
        D: "2027–2031; kesepakatan antara PT Kirana Kimia dan DJP saja, yang otomatis mengikat otoritas Jepang"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Periode APA paling lama 5 tahun pajak sejak tahun pajak pertama periode APA (2027–2031). APA bilateral disepakati DJP dengan otoritas pajak negara mitra melalui mekanisme MAP, sehingga memberi kepastian di kedua negara.",
        jejakHitung: [["Tahun pertama", "2027"], ["Periode paling lama", "5 tahun pajak"], ["Tahun terakhir", "2031"], ["Pihak yang bersepakat (bilateral)", "DJP dan otoritas pajak Jepang (melalui MAP)"]],
        mengapaSalah: {
          A: "Hanya 3 tahun pajak; batasnya 5 tahun pajak.",
          B: "Tahun pengajuan bukan tahun pertama periode APA, dan kesepakatan WP dengan DJP saja adalah APA unilateral.",
          D: "Kesepakatan WP dengan DJP adalah APA unilateral yang tidak mengikat otoritas Jepang."
        },
        jebakan: "Hitung lima tahun sejak tahun pertama periode, bukan sejak tahun pengajuan; bilateral berarti melibatkan otoritas mitra."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (periode dan jenis APA)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 25 P3B" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C10-043",
      topik: "C10.7",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "APA unilateral PT Kirana Kimia untuk periode 2026–2030 atas transaksi pembelian bahan baku dari afiliasinya disepakati pada September 2026, dan perusahaan meminta roll-back. Data tahun sebelumnya: Tahun Pajak 2023 sudah terbit SKPKB hasil pemeriksaan pada 2025; Tahun Pajak 2024 dan 2025 SPT sudah disampaikan, belum diterbitkan ketetapan, tidak sedang dalam pemeriksaan bukti permulaan atau penyidikan, dan fakta serta kondisi transaksinya sama dengan yang dicakup APA. Tahun pajak yang dapat dicakup roll-back adalah ...",
      kataKualifikasi: [],
      opsi: { A: "2023, 2024, dan 2025", B: "Tidak ada; APA hanya berlaku untuk tahun pajak dalam periode APA", C: "Hanya 2025, karena roll-back paling banyak satu tahun", D: "2024 dan 2025" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Roll-back dapat diterapkan pada tahun sebelum periode APA yang fakta dan kondisinya sama dan belum diterbitkan ketetapan; 2023 sudah terbit SKPKB sehingga dikecualikan, tersisa 2024 dan 2025.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tahun yang sudah terbit SKP tidak dapat dicakup roll-back.",
          B: "PMK 172/2023 mengenal roll-back.",
          C: "Tidak ada batas satu tahun; ukurannya syarat roll-back."
        },
        jebakan: "Periksa status ketetapan tiap tahun sebelum memasukkannya ke roll-back."
      },
      dasarHukum: [{ pasal: "Pasal 55 ayat (4) dan ayat (6) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-044", topik: "C10.7", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Kirana Kimia telah memiliki APA untuk periode 2026–2030 dengan asumsi kritis antara lain kapasitas produksi dan struktur fungsi usaha. Pada 2027 perusahaan menutup satu lini produksi sehingga fungsi produksinya berubah signifikan. Kewajiban PT Kirana Kimia selama periode APA dan atas perubahan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Melaporkan pelaksanaan APA setiap tahun dan memberitahukan perubahan asumsi kritis",
        B: "Tidak ada kewajiban tambahan karena APA mengikat sampai 2030 dalam keadaan apa pun",
        C: "Mengajukan permohonan APA baru setiap tahun sebagai pengganti laporan tahunan pelaksanaan APA",
        D: "Mengajukan MAP dengan otoritas mitra untuk setiap tahun pajak dalam periode APA"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Selama periode APA, WP wajib melaporkan pelaksanaan APA setiap tahun dan menjaga asumsi kritis; perubahan asumsi kritis membuka evaluasi atau perubahan APA. Pemberitahuan perubahan asumsi kritis memungkinkan APA dievaluasi atau disesuaikan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "APA bergantung pada asumsi kritis; perubahan signifikan memengaruhi keberlakuannya.",
          C: "APA berlaku untuk satu periode; yang tahunan adalah laporan pelaksanaan.",
          D: "APA unilateral tidak melibatkan otoritas mitra dan tidak memerlukan MAP tahunan."
        },
        jebakan: "APA bukan cek kosong lima tahun."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pelaksanaan dan evaluasi APA)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-045", topik: "C10.7", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "APA unilateral PT Mitra Distribusi (distributor) menetapkan metode TNMM dengan rentang margin laba operasi 3,0%–5,0% dari penjualan; menurut klausul APA, bila realisasi berada di bawah rentang, WP wajib menyesuaikan laba ke titik terendah rentang dalam SPT tahun bersangkutan. Realisasi 2027: penjualan Rp200.000.000.000 dan laba operasi Rp4.000.000.000. Penyesuaian laba dan tambahan PPh badan (tarif 22%) yang wajib dilakukan dalam SPT 2027 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Penyesuaian Rp4.000.000.000; PPh Rp880.000.000",
        B: "Rp0, karena APA hanya mengatur metode dan bukan angka",
        C: "Penyesuaian Rp6.000.000.000; PPh Rp1.320.000.000",
        D: "Penyesuaian Rp2.000.000.000; PPh Rp440.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Margin realisasi 2,0% di bawah rentang. Laba harus disesuaikan ke 3,0% × Rp200 miliar = Rp6 miliar; penyesuaian Rp2 miliar; PPh 22% = Rp440.000.000.",
        jejakHitung: [["Margin realisasi = 4 ÷ 200", "2,0%"], ["Laba pada titik terendah = 3,0% × Rp200.000.000.000", "Rp6.000.000.000"], ["Penyesuaian = 6 M − 4 M", "Rp2.000.000.000"], ["PPh = 22% × Rp2.000.000.000", "Rp440.000.000"]],
        mengapaSalah: {
          A: "Menyesuaikan ke titik tengah 4,0%, padahal klausul APA menunjuk titik terendah.",
          B: "APA dengan rentang margin justru menuntut penyesuaian bila realisasi di luar rentang.",
          C: "Menganggap seluruh laba pada titik terendah sebagai tambahan."
        },
        jebakan: "Ikuti titik penyesuaian yang disepakati dalam APA, bukan kebiasaan median pemeriksaan."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pelaksanaan APA)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-046",
      topik: "C10.8",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Untuk data rekening keuangan tahun kalender 2026, dua lembaga keuangan pelapor menyiapkan laporan otomatis menurut PMK 108/2025: PT Bank Nusantara Raya, bank umum di bawah pengawasan OJK, yang laporannya memuat rekening nasabah residen yurisdiksi mitra (CRS); dan PT Arta Kelola Dana, entitas lain yang dikategorikan sebagai lembaga keuangan pelapor dan tidak berada di bawah pengawasan OJK. Saluran dan batas waktu penyampaian laporan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bank langsung kepada DJP paling lambat 30 April 2027; PT Arta Kelola Dana kepada OJK paling lambat 1 Agustus 2027", B: "Keduanya menurut PMK 70/PMK.03/2017 s.t.d.t.d. PMK 19/PMK.03/2018: laporan domestik paling lambat 30 April 2027 dan laporan internasional paling lambat 1 Agustus 2027", C: "Bank kepada OJK paling lambat Senin, 2 Agustus 2027 (1 Agustus 2027 jatuh pada hari Minggu), lalu OJK meneruskannya kepada DJP paling lambat 31 Agustus 2027; PT Arta Kelola Dana langsung kepada DJP melalui Portal Wajib Pajak paling lambat 30 April 2027", D: "Keduanya langsung kepada DJP paling lambat 30 September 2027, mengikuti jadwal pertukaran antarnegara" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Data tahun 2026 mengikuti PMK 108/2025. Laporan CRS bank (LJK di bawah pengawasan OJK) disampaikan kepada OJK paling lambat 1 Agustus (Pasal 9 ayat (1) huruf a, Pasal 11 ayat (5)); karena 1 Agustus 2027 jatuh pada hari Minggu, batasnya bergeser ke hari kerja berikutnya, Senin, 2 Agustus 2027 (Pasal 11 ayat (7)). OJK meneruskannya kepada DJP paling lambat 31 Agustus 2027. Entitas lain menyampaikan laporan langsung kepada DJP melalui Portal Wajib Pajak paling lambat 30 April 2027 (Pasal 11 ayat (6)). Laporan domestik bank tidak melalui OJK: semua pelapor menyampaikannya langsung kepada DJP paling lambat 30 April (Pasal 36 dan Pasal 37). Laporan nihil tetap wajib bila tidak ada rekening yang wajib dilaporkan.",
        jejakHitung: [
          ["Laporan CRS bank (LJK di bawah pengawasan OJK)", "OJK: 1 Agustus 2027 (Minggu) → Senin, 2 Agustus 2027; OJK → DJP paling lambat 31 Agustus 2027"],
          ["Entitas lain", "Langsung ke DJP paling lambat Jumat, 30 April 2027"]
        ],
        mengapaSalah: {
          A: "Saluran tertukar: jalur OJK untuk laporan CRS LJK yang diawasi OJK, jalur langsung ke DJP untuk LJK lainnya dan entitas lain.",
          B: "PMK 70/PMK.03/2017 beserta perubahannya dicabut sejak 1 Januari 2026; rezim lama hanya untuk identifikasi atas data sampai 2025 dan laporan yang disampaikan sampai 30 September 2026, sedangkan laporan data 2026 memakai PMK 108/2025.",
          D: "30 September adalah jadwal pertukaran antarotoritas, bukan batas waktu laporan lembaga keuangan."
        },
        jebakan: "Tentukan dulu jenis laporan (CRS atau domestik) dan saluran pelapor (melalui OJK atau langsung ke DJP), baru tenggatnya; tenggat yang jatuh pada hari Sabtu, Minggu, atau hari libur bergeser ke hari kerja berikutnya."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 Pasal 9 ayat (1), Pasal 11 ayat (5) sampai (7), Pasal 36, Pasal 37, dan Pasal 59", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017 Pasal 2", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "C10-047", topik: "C10.8", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Per 31 Desember 2026 Bank Mega Sentosa (bank umum; Lembaga Simpanan) mencatat saldo rekening simpanan nasabah dalam negeri berikut: Ani (orang pribadi) Rp850.000.000 pada satu rekening tabungan; Budi (orang pribadi) Rp1.200.000.000 pada satu rekening deposito; Citra (orang pribadi) Rp600.000.000 pada rekening tabungan dan Rp500.000.000 pada rekening giro, keduanya di Bank Mega Sentosa; serta PT Dwi Karya Mandiri (badan dalam negeri) Rp75.000.000 pada rekening giro. Menurut PMK 108/2025, rekening yang wajib dimuat dalam laporan bank atas data tahun 2026 untuk kepentingan perpajakan domestik adalah milik ...",
      kataKualifikasi: [],
      opsi: {
        A: "Budi, Citra, dan PT Dwi Karya Mandiri",
        B: "Budi dan Citra saja, karena ambang Rp1 miliar juga berlaku bagi rekening badan",
        C: "Ani, Budi, dan Citra, karena batas saldo orang pribadi Rp200.000.000",
        D: "Budi dan PT Dwi Karya Mandiri, karena saldo orang pribadi dinilai per rekening"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "angka-usang", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk kepentingan domestik, rekening orang pribadi pada Lembaga Simpanan dilaporkan bila saldo agregat seluruh rekeningnya pada lembaga yang sama per 31 Desember paling sedikit Rp1 miliar: Budi (Rp1,2 miliar) dan Citra (Rp600 juta + Rp500 juta = Rp1,1 miliar) dilaporkan, Ani (Rp850 juta) tidak. Rekening entitas pada Lembaga Simpanan dilaporkan tanpa batas minimum, sehingga rekening PT Dwi Karya Mandiri (Rp75 juta) juga dilaporkan.",
        jejakHitung: [["Ani", "Rp850.000.000 < Rp1 M → tidak dilaporkan"], ["Budi", "Rp1.200.000.000 ≥ Rp1 M → dilaporkan"], ["Citra = 600 jt + 500 jt", "Rp1.100.000.000 ≥ Rp1 M → dilaporkan"], ["PT Dwi Karya Mandiri (entitas)", "Tanpa batas saldo → dilaporkan"]],
        mengapaSalah: {
          B: "Ambang Rp1 miliar hanya untuk rekening orang pribadi di Lembaga Simpanan; rekening entitas dilaporkan berapa pun saldonya.",
          C: "Batas Rp200 juta adalah versi awal PMK 70/PMK.03/2017 yang sudah dinaikkan menjadi Rp1 miliar oleh PMK 73/PMK.03/2017; selain itu rekening badan terlewat.",
          D: "Saldo orang pribadi dijumlahkan (agregat) atas seluruh rekeningnya pada lembaga yang sama, sehingga Citra juga dilaporkan."
        },
        jebakan: "Ambang Rp1 miliar hanya untuk orang pribadi di Lembaga Simpanan dan dihitung agregat per lembaga; rekening entitas tanpa batas saldo."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 Pasal 35 ayat (8) huruf a angka 1", berlakuSejak: "2026-01-01" }, { pasal: "PMK 108/2025 (rekening entitas pada Lembaga Simpanan tanpa batas saldo)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-048", topik: "C10.8", tingkat: ["C"], jenis: "konsep", kesulitan: 1,
      stem: "Dalam pemeriksaan PPh Badan 2024, pemeriksa menduga PT Cahaya Bintang menyembunyikan penjualan melalui rekening atas nama afiliasinya di bank di Singapura, lalu mengusulkan agar DJP meminta data rekening tersebut secara khusus kepada otoritas pajak Singapura berdasarkan Pasal 26 P3B. Bentuk pertukaran informasi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pertukaran informasi otomatis (AEoI/CRS)",
        B: "Pertukaran informasi spontan (spontaneous)",
        C: "Prosedur persetujuan bersama (MAP)",
        D: "Pertukaran informasi atas permintaan (EOIR)"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Permintaan informasi spesifik atas kasus tertentu kepada otoritas mitra adalah exchange of information on request berdasarkan Pasal 26 P3B.",
        jejakHitung: [],
        mengapaSalah: {
          A: "AEoI dikirim berkala tanpa permintaan kasus per kasus.",
          B: "Pertukaran spontan dilakukan atas inisiatif negara pemberi informasi.",
          C: "MAP untuk menyelesaikan pengenaan pajak yang tidak sesuai P3B, bukan mengumpulkan informasi."
        },
        jebakan: "Bedakan tiga jenis EoI menurut siapa yang memulai."
      },
      dasarHukum: [{ pasal: "Pasal 26 P3B" }, { pasal: "UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "C10-049", topik: "C10.8", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      stem: "Pada 2027 pimpinan Bank Perdana menolak permintaan DJP atas informasi rekening nasabah untuk kepentingan perpajakan dengan alasan ketentuan rahasia bank dalam UU Perbankan, dan bank juga tidak menyampaikan laporan otomatis atas data tahun 2026 yang diwajibkan menurut PMK 108/2025. Berdasarkan UU 9/2017, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Penolakan sah karena rahasia bank hanya dapat dibuka dengan izin tertulis OJK untuk setiap nasabah yang diminta",
        B: "Karena PMK 70/PMK.03/2017 telah dicabut oleh PMK 108/2025, ancaman pidana UU 9/2017 tidak lagi berlaku dan bank hanya dikenai sanksi administrasi berupa denda Rp1.000.000 per laporan",
        C: "Rahasia bank tidak menghalangi akses DJP, dan pimpinan/pegawai yang tidak memenuhinya diancam kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar",
        D: "Akses informasi hanya berlaku bagi nasabah warga negara asing yang informasinya dipertukarkan dengan negara lain melalui AEoI"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "UU 9/2017 menyatakan ketentuan kerahasiaan dalam UU Perbankan dan UU sektor keuangan lain tidak berlaku bagi akses DJP; pelanggaran kewajiban diancam pidana kurungan paling lama 1 tahun atau denda paling banyak Rp1 miliar bagi pimpinan/pegawai, dan denda paling banyak Rp1 miliar bagi lembaga keuangan. PMK 108/2025 hanya mengganti petunjuk teknis (PMK 70/PMK.03/2017); dasar kewajiban dan sanksinya tetap UU 9/2017.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mekanisme izin tertulis per nasabah dikesampingkan untuk akses perpajakan menurut UU 9/2017.",
          B: "Pencabutan PMK 70/PMK.03/2017 tidak menyentuh UU 9/2017; sanksinya tetap pidana menurut Pasal 7, bukan denda administrasi kecil.",
          D: "Akses juga untuk kepentingan domestik atas nasabah dalam negeri."
        },
        jebakan: "UU 9/2017 mengesampingkan rahasia bank untuk perpajakan; pencabutan PMK 70/PMK.03/2017 tidak mengubah sanksi pidananya."
      },
      dasarHukum: [{ pasal: "UU 9/2017 Pasal 7 (sanksi)", berlakuSejak: "2017-05-08" }, { pasal: "UU 9/2017 (pengesampingan kerahasiaan sektor keuangan bagi akses DJP)", berlakuSejak: "2017-05-08" }, { pasal: "PMK 108/2025 (petunjuk teknis)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-050",
      topik: "C10.8",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Pada Maret 2026 seorang calon nasabah datang ke PT Sekuritas Andalan (perusahaan efek; lembaga keuangan pelapor) untuk membuka rekening efek baru, tetapi menolak mengisi formulir pernyataan diri (self-certification) tentang negara domisilinya untuk keperluan perpajakan. Menurut PMK 108/2025, yang mengatur prosedur identifikasi rekening keuangan sejak 1 Januari 2026, tindakan yang wajib dilakukan perusahaan efek adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak melayani pembukaan rekening baru tersebut", B: "Membuka rekening lalu mencatatnya sebagai rekening yang tidak terdokumentasi", C: "Membuka rekening dengan batas saldo paling banyak Rp1 miliar", D: "Membuka rekening setelah meminta persetujuan tertulis DJP" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rekening baru yang dibuka sejak 1 Januari 2026 tunduk pada prosedur identifikasi (uji tuntas) menurut PMK 108/2025: lembaga keuangan dilarang melayani pembukaan rekening baru bagi calon nasabah yang menolak prosedur identifikasi rekening keuangan, termasuk self-certification.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Kategori tidak terdokumentasi hanya untuk rekening lama tertentu, bukan rekening baru.",
          C: "Ambang Rp1 miliar hanya menyangkut laporan domestik rekening orang pribadi di Lembaga Simpanan, bukan syarat pembukaan rekening; rekening di perusahaan efek bahkan dilaporkan tanpa batas saldo.",
          D: "Tidak ada mekanisme persetujuan DJP untuk pembukaan rekening."
        },
        jebakan: "Tanpa self-certification, rekening baru tidak boleh dibuka."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) huruf a PMK 108/2025", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017", berlakuSejak: "2017-08-23" }],
      anggaranDetik: 70,
      verifikasi: "✅"
    },
    {
      id: "C10-051", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-01",
      stem: "Data untuk soal V-C10-01: Pada Masa Pajak Maret 2026 PT Cakra Digital Nusantara (PKP) melakukan tiga pembayaran ke luar negeri: (a) royalti lisensi perangkat lunak Rp800.000.000 kepada Kaigen Software Co., Ltd. (Jepang; beneficial owner; Form DGT sah diterima sebelum pembayaran; batas tarif royalti P3B 10%); (b) imbalan jasa konsultansi teknis Rp500.000.000 kepada Redpoint Advisory Pte. Ltd. (Singapura; Form DGT sah; jasa murni tanpa pengalihan informasi/know-how sehingga menurut P3B bukan royalti; seluruh jasa dilakukan di Singapura dan Redpoint tidak memiliki BUT di Indonesia); (c) bunga pinjaman Rp300.000.000 kepada Harbor Lending Ltd. (Cayman Islands; tidak ada P3B). Jumlah PPh Pasal 26 yang wajib dipotong PT Cakra Digital untuk Masa Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp320.000.000",
        B: "Rp190.000.000",
        C: "Rp140.000.000",
        D: "Rp240.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "(a) Royalti: tarif P3B 10% × Rp800 juta = Rp80 juta. (b) Jasa: laba usaha tanpa BUT (Pasal 7 P3B) sehingga nihil. (c) Bunga ke Cayman Islands tanpa P3B: 20% × Rp300 juta = Rp60 juta. Total Rp140.000.000.",
        jejakHitung: [["(a) 10% × Rp800.000.000", "Rp80.000.000"], ["(b) Pasal 7 P3B, tanpa BUT", "Rp0"], ["(c) 20% × Rp300.000.000", "Rp60.000.000"], ["Total", "Rp140.000.000"]],
        mengapaSalah: {
          A: "Mengabaikan P3B: 20% atas semua pembayaran.",
          B: "Memperlakukan jasa seperti royalti (10%).",
          D: "Memotong 20% atas jasa yang menurut P3B hanya dipajaki Singapura."
        },
        jebakan: "Satu masa, tiga rezim: tarif terbatas, hak pemajakan nihil, dan tarif domestik."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 dan 12 P3B" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-052", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-01",
      stem: "Lanjutan V-C10-01 (PT Cakra Digital Nusantara, PKP; Masa Maret 2026: royalti perangkat lunak Rp800.000.000 kepada perusahaan Jepang, jasa konsultansi Rp500.000.000 kepada perusahaan Singapura yang dimanfaatkan di Indonesia, dan bunga pinjaman Rp300.000.000 kepada pemberi pinjaman di Cayman Islands). Atas pemanfaatan BKP tidak berwujud dan JKP dari luar daerah pabean tersebut, PPN yang wajib disetor sendiri oleh PT Cakra Digital dan perlakuannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp156.000.000 (12% × Rp1.300.000.000); dapat dikreditkan",
        B: "Rp176.000.000 (11% × Rp1.600.000.000, termasuk bunga); dapat dikreditkan",
        C: "Rp0, karena P3B dengan Jepang dan Singapura membebaskan pajak atas pembayaran tersebut",
        D: "Rp143.000.000 (12% × 11/12 × Rp1.300.000.000); disetor sendiri dan dapat dikreditkan sebagai pajak masukan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Royalti (BKP tidak berwujud) dan jasa konsultansi (JKP) yang dimanfaatkan di Indonesia terutang PPN: 12% × 11/12 × Rp1.300.000.000 = Rp143.000.000, disetor sendiri oleh penerima dan dapat dikreditkan. Bunga adalah imbalan jasa keuangan yang dibebaskan dari PPN.",
        jejakHitung: [["DPP penggantian (royalti + jasa)", "Rp1.300.000.000"], ["DPP nilai lain 11/12", "Rp1.191.666.667"], ["PPN = 12% × DPP", "Rp143.000.000"]],
        mengapaSalah: {
          A: "Mengabaikan DPP nilai lain 11/12 (PMK 131/2024).",
          B: "Memasukkan bunga, padahal jasa keuangan dibebaskan dari PPN (Pasal 16B UU PPN; PP 49/2022).",
          C: "P3B hanya mengatur pajak penghasilan, tidak menyentuh PPN."
        },
        jebakan: "PPh 26 nihil/berkurang karena P3B tidak berarti PPN ikut nihil."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf d dan e UU PPN", berlakuSejak: "2022-04-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 16B UU PPN; PP 49/2022 (jasa keuangan dibebaskan dari PPN)", berlakuSejak: "2022-04-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-053", topik: "C10.9", tingkat: ["C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-C10-01",
      formulirRef: "BPNR.c.1",
      stem: "Lanjutan V-C10-01: atas royalti Rp800.000.000 kepada Kaigen Software Co., Ltd. (Jepang), PT Cakra Digital memotong PPh 26 Rp80.000.000 dengan fasilitas P3B pada Masa Maret 2026. Bukti potong serta batas paling lambat penyetoran dan pelaporan yang tepat di Coretax adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "BPNR; disetor paling lambat 15 April 2026; dilaporkan dalam SPT Masa PPh Unifikasi Masa Maret 2026 paling lambat 20 April 2026",
        B: "BPPU; disetor paling lambat 15 April 2026; dilaporkan dalam SPT Masa PPh Unifikasi paling lambat 20 April 2026",
        C: "BP21; disetor paling lambat 15 April 2026; dilaporkan dalam SPT Masa PPh 21/26 paling lambat 20 April 2026",
        D: "BPNR; disetor paling lambat 10 April 2026; dilaporkan paling lambat 20 April 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "PPh 26 kepada badan LN dibuatkan BPNR dan masuk SPT Masa PPh Unifikasi; setor paling lambat tanggal 15 bulan berikutnya (15 April 2026) dan lapor paling lambat 20 hari setelah masa berakhir (20 April 2026).",
        jejakHitung: [],
        mengapaSalah: {
          B: "BPPU untuk penerima dalam negeri.",
          C: "BP21 untuk PPh 21 penerima dalam negeri; SPT Masa PPh 21/26 hanya memuat PPh 26 orang pribadi atas pekerjaan/jasa/kegiatan, sedangkan Kaigen adalah badan.",
          D: "Tanggal 10 adalah tenggat setor sebelum PMK 81/2024."
        },
        jebakan: "Kode bupot Coretax dan tenggat tanggal 15/20."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (BPNR, SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 (setor tanggal 15, lapor 20 hari)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C10-054", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-C10-01",
      stem: "Lanjutan V-C10-01: untuk lisensi tambahan pada April 2026, PT Cakra Digital sepakat menanggung PPh 26 sehingga Kaigen Software Co., Ltd. (Jepang; beneficial owner; Form DGT masih berlaku; batas tarif royalti P3B 10%) menerima bersih Rp900.000.000. PPh 26 yang wajib disetor PT Cakra Digital adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp90.000.000",
        B: "Rp100.000.000",
        C: "Rp225.000.000",
        D: "Rp180.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Gross-up dengan tarif P3B: bruto = Rp900.000.000 ÷ (1 − 10%) = Rp1.000.000.000; PPh 26 = 10% × Rp1.000.000.000 = Rp100.000.000.",
        jejakHitung: [["Bruto = 900.000.000 ÷ 0,9", "Rp1.000.000.000"], ["PPh 26 = 10% × bruto", "Rp100.000.000"], ["Cek: bruto − PPh", "Rp900.000.000"]],
        mengapaSalah: {
          A: "Mengalikan tarif dengan jumlah neto tanpa gross-up.",
          C: "Gross-up dengan tarif 20% padahal SKD sah.",
          D: "Tarif 20% atas jumlah neto: salah tarif dan salah dasar."
        },
        jebakan: "PPh ditanggung → gross-up memakai tarif yang benar-benar berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 P3B Indonesia–Jepang" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-055",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      kutipan: "Pasal 9 ayat (2a) UU KUP (disederhanakan): Apabila pembayaran atau penyetoran pajak dilakukan setelah tanggal jatuh tempo, dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan (suku bunga acuan ditambah 5%, dibagi 12) yang dihitung dari tanggal jatuh tempo sampai dengan tanggal pembayaran, dan bagian dari bulan dihitung penuh 1 bulan.",
      stem: "PT Lautan Media membayar royalti konten Rp250.000.000 pada 22 September 2026 kepada Seoul Contents Co., Ltd. (Korea Selatan) yang tidak menyerahkan SKD/Form DGT. PPh 26 Masa September 2026 jatuh tempo 15 Oktober 2026, tetapi baru akan disetor pada 10 Desember 2026. Tarif bunga Pasal 9 ayat (2a) yang berlaku pada awal penghitungan (KMK 47/MK/EF.2/2026, Oktober 2026) adalah 1,01% per bulan. Sanksi bunga atas keterlambatan penyetoran PPh 26 tersebut (sebelum memperhitungkan permohonan pengurangan/penghapusan sanksi menurut PMK 71/2026) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.000.000", B: "Rp505.000", C: "Rp1.840.000", D: "Rp1.010.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Tanpa SKD, PPh 26 = 20% × Rp250.000.000 = Rp50.000.000. Dari 15 Oktober s.d. 10 Desember 2026 = 1 bulan 25 hari, dibulatkan menjadi 2 bulan. Bunga = Rp50.000.000 × 1,01% × 2 = Rp1.010.000.",
        jejakHitung: [
          ["PPh 26 = 20% × Rp250.000.000", "Rp50.000.000"],
          ["15 Okt–15 Nov", "1 bulan"],
          ["15 Nov–10 Des (bagian bulan)", "1 bulan"],
          ["Bunga = 50.000.000 × 1,01% × 2", "Rp1.010.000"]
        ],
        mengapaSalah: {
          A: "Memakai bunga 2% flat per bulan yang berlaku sebelum UU Cipta Kerja (UU 11/2020; sejak 2 November 2020 diganti tarif bunga bulanan KMK).",
          B: "Bagian bulan tidak dibulatkan ke atas.",
          C: "Memakai tarif Pasal 13 ayat (2) (uplift 15%) yang untuk SKPKB hasil pemeriksaan."
        },
        jebakan: "Tarif PPh 26 tanpa SKD, uplift pasal yang tepat, dan pembulatan bulan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }, { pasal: "PMK 81/2024 (jatuh tempo tanggal 15)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-056", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 2,
      stem: "Pada Juni 2026 terdapat tiga pembayaran premi kepada perusahaan asuransi/reasuransi luar negeri yang tidak menyerahkan SKD: (i) PT Kilang Energi (tertanggung) membayar premi asuransi langsung kepada Atlas Insurance Ltd. Rp400.000.000; (ii) PT Asuransi Pelita (perusahaan asuransi dalam negeri) membayar premi kepada perusahaan asuransi luar negeri Rp1.000.000.000; (iii) PT Reasuransi Nusa (perusahaan reasuransi dalam negeri) membayar premi kepada perusahaan reasuransi luar negeri Rp2.000.000.000. PPh Pasal 26 yang dipotong masing-masing pembayar (i), (ii), dan (iii) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp80.000.000; Rp200.000.000; Rp400.000.000",
        B: "Rp40.000.000; Rp100.000.000; Rp200.000.000",
        C: "Rp40.000.000; Rp20.000.000; Rp20.000.000",
        D: "Rp4.000.000; Rp20.000.000; Rp200.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Perkiraan neto premi: 50% (tertanggung), 10% (perusahaan asuransi), 5% (reasuransi). PPh 26 efektif 10%, 2%, 1%: Rp40.000.000; Rp20.000.000; Rp20.000.000.",
        jejakHitung: [["(i) 20% × 50% × Rp400.000.000", "Rp40.000.000"], ["(ii) 20% × 10% × Rp1.000.000.000", "Rp20.000.000"], ["(iii) 20% × 5% × Rp2.000.000.000", "Rp20.000.000"]],
        mengapaSalah: {
          A: "20% dari premi bruto tanpa perkiraan neto.",
          B: "Memakai 10% efektif untuk semua pembayar.",
          D: "Persentase tertanggung dan reasuransi tertukar."
        },
        jebakan: "Tarif efektif ditentukan oleh siapa pembayarnya."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 624/KMK.04/1994" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-057", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 2,
      stem: "PT Gema Promosindo menyelenggarakan konser di Jakarta pada Agustus 2026 dan membayar honor Rp1.500.000.000 langsung kepada penyanyi Ms. Yoon Seo-yeon (orang pribadi residen Korea Selatan; Form DGT sah; hanya 2 hari di Indonesia; tidak memiliki tempat tetap di Indonesia). Pasal 17 P3B Indonesia–Korea Selatan memberi hak pemajakan atas penghasilan artis kepada negara tempat pertunjukan dilakukan, tanpa batas tarif. PPh dan pelaporan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 Rp300.000.000 (20% × bruto), dilaporkan dalam SPT Masa PPh 21/26",
        B: "Nihil, karena ia berada di Indonesia kurang dari 183 hari dan tidak memiliki tempat tetap",
        C: "PPh 26 Rp150.000.000 (tarif 10% P3B), dilaporkan dengan BPNR dalam SPT Masa PPh Unifikasi",
        D: "PPh 26 Rp300.000.000, dilaporkan dengan BPNR dalam SPT Masa PPh Unifikasi"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 17 P3B mengesampingkan uji 183 hari dan tempat tetap: Indonesia berhak memajaki tanpa batas tarif, sehingga PPh 26 20% × Rp1.500.000.000 = Rp300.000.000. Karena penerima orang pribadi atas jasa/kegiatan, pelaporannya melalui SPT Masa PPh 21/26, bukan BPNR.",
        jejakHitung: [["PPh 26 = 20% × Rp1.500.000.000", "Rp300.000.000"]],
        mengapaSalah: {
          B: "Uji 183 hari dan tempat tetap tidak berlaku untuk artis/olahragawan.",
          C: "Pasal 17 tidak memberi batas tarif 10%.",
          D: "BPNR tidak dipakai untuk PPh 26 orang pribadi atas pekerjaan/jasa/kegiatan."
        },
        jebakan: "Pasal khusus artis dan jalur pelaporan PPh 26 orang pribadi."
      },
      dasarHukum: [{ pasal: "Pasal 17 P3B Indonesia–Korea Selatan" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-058", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 11 ayat (2) P3B Indonesia–Belanda sebagaimana diubah Protokol 2015 (disederhanakan): pajak negara sumber atas bunga tidak melebihi 10% dari jumlah bruto bunga, namun 5% bila bunga dibayarkan atas pinjaman yang jangka waktunya lebih dari 2 tahun.",
      stem: "PT Pelita Kemasan menerima pinjaman berjangka 5 tahun dari Atlas Finance B.V. (Belanda; beneficial owner; Form DGT sah sebelum pembayaran). Bunga dibayar per kuartal; pembayaran bunga kuartal II 2026 sebesar Rp400.000.000. Berdasarkan kutipan, PPh 26 atas pembayaran bunga kuartal II 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp40.000.000",
        B: "Rp20.000.000",
        C: "Rp80.000.000",
        D: "Rp0, karena bunga kepada lembaga keuangan luar negeri dikecualikan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pinjaman berjangka 5 tahun (lebih dari 2 tahun) sehingga tarif P3B 5%: 5% × Rp400.000.000 = Rp20.000.000.",
        jejakHitung: [["Jangka pinjaman", "5 tahun (> 2 tahun)"], ["PPh 26 = 5% × Rp400.000.000", "Rp20.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif umum 10%, mengabaikan jangka pinjaman.",
          C: "Memakai tarif domestik 20% padahal SKD sah.",
          D: "Tidak ada pengecualian umum untuk bunga kepada lembaga keuangan LN."
        },
        jebakan: "Tarif bunga P3B bisa bertingkat menurut jangka pinjaman."
      },
      dasarHukum: [{ pasal: "Pasal 11 P3B Indonesia–Belanda (Protokol 2015)" }, { pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C10-059", topik: "C10.9", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Wahana Kreasi membebankan royalti merek kepada induknya di Hong Kong sebesar Rp600.000.000 untuk Tahun Buku 2025 dan mencatatnya sebagai biaya dan utang royalti dalam jurnal penyesuaian 31 Desember 2025. Royalti baru dibayar pada 18 Maret 2026, dan induk tidak menyerahkan SKD. Saat terutang PPh 26 dan tanggal paling lambat penyetorannya yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "Masa Maret 2026 (saat royalti benar-benar dibayar); disetor paling lambat 15 April 2026",
        B: "Masa Desember 2025 (saat dibebankan sebagai utang); disetor paling lambat 10 Januari 2026",
        C: "Masa April 2026 (bulan setelah royalti dibayar); disetor paling lambat 15 Mei 2026",
        D: "Masa Desember 2025 (saat disediakan untuk dibayarkan); disetor paling lambat 15 Januari 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "PPh 26 terutang saat dibayar, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu. Pembebanan sebagai utang kepada afiliasi pada 31 Desember 2025 berarti disediakan untuk dibayarkan, sehingga terutang Masa Desember 2025 (20% × Rp600.000.000 = Rp120.000.000) dan disetor paling lambat 15 Januari 2026.",
        jejakHitung: [["PPh 26 = 20% × Rp600.000.000", "Rp120.000.000"], ["Saat terutang", "Desember 2025"], ["Batas setor", "15 Januari 2026"]],
        mengapaSalah: {
          A: "Saat pembayaran kas datang lebih lambat daripada saat disediakan untuk dibayarkan.",
          B: "Tanggal 10 adalah tenggat sebelum PMK 81/2024.",
          C: "Tidak ada aturan yang menggeser saat terutang ke bulan setelah pembayaran."
        },
        jebakan: "Pencatatan utang kepada afiliasi memicu saat terutang PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 26 UU PPh (saat terutang: dibayar, disediakan untuk dibayarkan, atau jatuh tempo)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "C10-060", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Prima Medika Nusantara (PKP, importir ber-API) pada Mei 2026 melakukan tiga pembayaran kepada Delft MedTech B.V. (residen Belanda; tidak memiliki BUT di Indonesia; beneficial owner; Form DGT sah terekam di Coretax sebelum pembayaran): (1) harga empat unit mesin MRI yang dikirim dari Rotterdam dan diimpor sendiri oleh PT Prima Rp2.000.000.000; (2) imbalan supervisi instalasi oleh dua teknisi Delft MedTech di Surabaya selama 10 hari Rp150.000.000, yang menurut P3B merupakan laba usaha (Pasal 7), bukan royalti; (3) lisensi tahunan perangkat lunak pengoperasian mesin Rp100.000.000, yang menurut P3B merupakan royalti dengan batas tarif 10%. Jumlah PPh Pasal 26 yang wajib dipotong PT Prima Medika atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000.000", B: "Rp110.000.000", C: "Rp10.000.000", D: "Rp410.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Harga barang yang dibayar kepada penjual luar negeri tidak tercantum sebagai objek Pasal 26 ayat (1), dan Pasal 26 ayat (2) hanya untuk penjualan harta yang berada di Indonesia; atas impor mesin itu berlaku PPh Pasal 22 impor yang dipungut Bea Cukai. Supervisi 10 hari tanpa BUT adalah laba usaha yang hanya dipajaki Belanda. Yang dipotong hanya royalti: 10% × Rp100.000.000 = Rp10.000.000.",
        jejakHitung: [["(1) Harga mesin impor", "bukan objek PPh 26 (PPh 22 impor saat impor)"], ["(2) Supervisi 10 hari, tanpa BUT", "Pasal 7 P3B → Rp0"], ["(3) Royalti = 10% × Rp100.000.000", "Rp10.000.000"], ["Total PPh 26", "Rp10.000.000"]],
        mengapaSalah: {
          A: "Memotong 20% atas supervisi (Rp30.000.000), padahal P3B memberi hak pemajakan laba usaha tanpa BUT hanya kepada Belanda.",
          B: "Memakai perkiraan neto 25% (5% × Rp2.000.000.000) seolah penjualan harta di Indonesia; mesin dibeli dari luar negeri lalu diimpor.",
          D: "Memotong 20% atas harga barang; pembelian barang bukan objek PPh 26."
        },
        jebakan: "Pembelian barang dari luar negeri bukan objek PPh 26 (pajaknya PPh 22 impor); yang dipotong hanya penghasilan dalam daftar Pasal 26 yang hak pemajakannya tidak dihapus P3B."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 22 UU PPh; PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022 (PPh 22 impor)" }, { pasal: "Pasal 5, 7, dan 12 P3B Indonesia–Belanda" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "C10-061", topik: "C10.9", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Admin pajak PT Bahtera Energi Samudra menyusun daftar pembayaran ke luar negeri Masa Juli 2026 sebelum membuat bukti potong di Coretax. Seluruh penerima tidak memiliki BUT di Indonesia dan belum ada Form DGT yang terekam. Tanpa memperhatikan P3B, pembayaran berikut yang BUKAN objek pemotongan PPh Pasal 26 menurut UU PPh adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Harga suku cadang turbin yang dibeli dari pemasok di Tiongkok dan dikirim dari Shanghai, yang atas impornya telah dipungut PPh Pasal 22 impor",
        B: "Sewa crane milik perusahaan Malaysia yang dipakai di proyek PT Bahtera di Kalimantan Timur",
        C: "Premi asuransi rangka kapal yang dibayar PT Bahtera sebagai tertanggung langsung kepada perusahaan asuransi di Inggris",
        D: "Imbalan jaminan (guarantee fee) kepada induk di Singapura atas pinjaman bank yang diterima PT Bahtera"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Objek PPh 26 terbatas pada daftar Pasal 26 ayat (1) dan (2): dividen, bunga (termasuk imbalan jaminan pengembalian utang), royalti, sewa dan penggunaan harta, imbalan jasa/pekerjaan/kegiatan, hadiah, pensiun, premi swap, pembebasan utang, penjualan harta di Indonesia, serta premi asuransi/reasuransi ke luar negeri. Harga pembelian barang dari pemasok luar negeri tidak termasuk; atas impornya dipungut PPh 22 impor.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Sewa dan penghasilan lain sehubungan dengan penggunaan harta yang dibayar ke WPLN adalah objek Pasal 26 ayat (1) (20% sebelum P3B).",
          C: "Premi asuransi yang dibayar tertanggung kepada perusahaan asuransi luar negeri objek Pasal 26 ayat (2): 20% × perkiraan neto 50% = 10% dari premi.",
          D: "Imbalan sehubungan dengan jaminan pengembalian utang termasuk pengertian bunga dalam Pasal 26 ayat (1)."
        },
        jebakan: "Tidak semua pembayaran ke luar negeri dipotong PPh 26; pembelian barang adalah jebakan yang dilaporkan peserta ujian."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 624/KMK.04/1994 (premi asuransi ke luar negeri)" }, { pasal: "Pasal 22 UU PPh (PPh 22 impor)" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "C10-062", topik: "C10.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-C10-06",
      kutipan: "Pasal 3 ayat (1) UU PPh (diringkas): Tidak termasuk subjek pajak: (a) kantor perwakilan negara asing; (b) pejabat perwakilan diplomatik dan konsulat atau pejabat lain dari negara asing dan orang yang diperbantukan kepada mereka yang bekerja pada dan bertempat tinggal bersama mereka, dengan syarat bukan warga negara Indonesia, di Indonesia tidak menerima atau memperoleh penghasilan di luar jabatan atau pekerjaannya tersebut, serta negara bersangkutan memberikan perlakuan timbal balik; (c) organisasi internasional dengan syarat Indonesia menjadi anggota dan organisasi tersebut tidak menjalankan usaha atau kegiatan lain untuk memperoleh penghasilan dari Indonesia selain memberikan pinjaman kepada pemerintah yang dananya berasal dari iuran para anggota.",
      stem: "Data untuk soal V-C10-06: Sepanjang 2026 di Jakarta terdapat (1) Kedutaan Besar Negara Valdoria, yang negaranya memberikan perlakuan timbal balik kepada Indonesia; (2) Mr. Anton Kovač, warga negara Valdoria, sekretaris pertama kedutaan yang tinggal di Jakarta sejak 2023 dan tidak memperoleh penghasilan lain di Indonesia; (3) Mr. Pedro Alves, warga negara Valdoria, pengemudi yang diperbantukan kepada Mr. Kovač, bekerja pada dan tinggal bersama keluarganya, tanpa penghasilan lain di Indonesia; (4) kantor regional Organisasi Kopi Asia Tenggara, organisasi internasional yang ditetapkan Menteri Keuangan dengan Indonesia sebagai anggota, yang sejak Maret 2026 juga menjual kopi kemasan bermerek organisasi kepada jaringan ritel di Indonesia. Berdasarkan kutipan, pihak yang TIDAK memenuhi syarat pengecualian sehingga menjadi subjek pajak Indonesia adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: {
        A: "Kedutaan Besar Negara Valdoria, karena memiliki kantor tetap di Jakarta",
        B: "Mr. Anton Kovač, karena berada di Indonesia lebih dari 183 hari dalam 12 bulan",
        C: "Kantor regional Organisasi Kopi Asia Tenggara",
        D: "Mr. Pedro Alves, karena pengemudi bukan pejabat perwakilan diplomatik"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pengecualian organisasi internasional bersyarat: selain keanggotaan Indonesia, organisasi tidak boleh menjalankan usaha atau kegiatan lain untuk memperoleh penghasilan dari Indonesia selain pinjaman kepada pemerintah dari iuran anggota. Penjualan kopi kemasan kepada ritel menggugurkan syarat itu, sehingga organisasi tersebut menjadi subjek pajak atas penghasilannya dari Indonesia.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kantor perwakilan negara asing dikecualikan tanpa melihat ada atau tidaknya kantor tetap (huruf a).",
          B: "Uji 183 hari Pasal 2 ayat (3) tidak relevan selama pejabat diplomatik memenuhi seluruh syarat Pasal 3 ayat (1) huruf b.",
          D: "Huruf b juga mengecualikan orang yang diperbantukan yang bekerja pada dan tinggal bersama pejabat, sepanjang bukan WNI dan tanpa penghasilan lain di Indonesia."
        },
        jebakan: "Setiap pengecualian Pasal 3 bersyarat; cari syarat yang gugur (WNI, penghasilan lain, usaha komersial, tanpa timbal balik)."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a, b, dan c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-063", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C10-06",
      kutipan: "Pasal 3 ayat (1) huruf d UU PPh: Tidak termasuk subjek pajak pejabat perwakilan organisasi internasional sebagaimana dimaksud pada huruf c, dengan syarat bukan warga negara Indonesia dan tidak menjalankan usaha, kegiatan, atau pekerjaan lain untuk memperoleh penghasilan dari Indonesia.",
      stem: "Lanjutan V-C10-06 (pengecualian subjek pajak): Dr. Mei Lin Tan, warga negara Singapura yang tidak berstatus residen negara lain, menjabat country director perwakilan suatu organisasi internasional lain di Jakarta yang memenuhi syarat Pasal 3 ayat (1) huruf c, dan tinggal di Jakarta sejak 2023. Pada Mei 2026 ia juga menerima honorarium Rp120.000.000 sekaligus dari Universitas Nusantara Jaya (pemotong PPh 21) sebagai dosen tamu satu semester, bukan sebagai pegawai universitas; ia telah memiliki NPWP. Berdasarkan kutipan dan ketentuan PPh Pasal 21 bukan pegawai, PPh yang wajib dipotong universitas atas honorarium tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0, karena pejabat perwakilan organisasi internasional tidak termasuk subjek pajak",
        B: "Rp3.000.000, PPh Pasal 21 tarif Pasal 17 atas 50% penghasilan bruto",
        C: "Rp24.000.000, PPh Pasal 26 tarif 20% karena ia warga negara asing",
        D: "Rp6.000.000, PPh Pasal 21 tarif 5% atas seluruh penghasilan bruto"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengecualian huruf d gugur karena Dr. Tan menjalankan pekerjaan lain (mengajar berbayar) untuk memperoleh penghasilan dari Indonesia. Status subjeknya lalu ditentukan Pasal 2 ayat (3): ia tinggal di Jakarta sejak 2023 sehingga subjek pajak dalam negeri, dan honornya dipotong PPh 21 bukan pegawai: 5% × 50% × Rp120.000.000 = Rp3.000.000.",
        jejakHitung: [["Syarat huruf d", "gugur: ada pekerjaan lain berpenghasilan dari Indonesia"], ["Status", "subjek pajak dalam negeri (tinggal di Jakarta sejak 2023)"], ["DPP bukan pegawai = 50% × Rp120.000.000", "Rp60.000.000"], ["PPh 21 = 5% × Rp60.000.000", "Rp3.000.000"]],
        mengapaSalah: {
          A: "Membaca pengecualian tanpa syaratnya; syarat tidak menjalankan pekerjaan lain untuk memperoleh penghasilan dari Indonesia tidak terpenuhi.",
          C: "Kewarganegaraan tidak menentukan status subjek pajak; ia bertempat tinggal di Indonesia sehingga subjek pajak dalam negeri, bukan WPLN.",
          D: "Dasar pengenaan PPh 21 bukan pegawai adalah 50% dari penghasilan bruto."
        },
        jebakan: "Begitu syarat Pasal 3 gugur, status ditentukan ulang dengan kriteria Pasal 2 ayat (3), bukan otomatis menjadi WPLN."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf c dan d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (PPh 21 bukan pegawai)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "C10-064",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Nusantara Investama (WPDN, bukan perseroan terbuka, peredaran bruto 2025 Rp120 miliar) memiliki penyertaan pada dua afiliasi. Data Tahun Pajak 2025: penghasilan neto fiskal dari usaha sendiri Rp4.000.000.000 (belum termasuk dividen); dividen dari PT Bumi Lestari (WPDN, kepemilikan 40%) Rp800.000.000; dividen bruto dari Hanguk Parts Co., Ltd. (Korea Selatan, kepemilikan 30%, saham tidak diperdagangkan di bursa) Rp1.000.000.000 yang dipotong pajak Korea 10% sesuai P3B (Rp100.000.000) dan tidak diinvestasikan di Indonesia; PPh Pasal 23 yang dipotong pihak lain Rp40.000.000; angsuran PPh Pasal 25 yang dibayar Rp600.000.000. PPh Pasal 29 PT Nusantara Investama Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp338.000.000", B: "Rp536.000.000", C: "Rp240.000.000", D: "Rp360.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dividen dari afiliasi dalam negeri yang diterima WP badan dalam negeri bukan objek PPh. Dividen dari afiliasi luar negeri hanya dikecualikan bila diinvestasikan di Indonesia sesuai syarat; karena tidak, dividen Korea masuk PKP sebesar jumlah sebelum dipotong pajak Korea (penghasilan neto, Pasal 4 ayat (2) huruf c PMK 192/PMK.03/2018) dan pajak Korea dikreditkan menurut batas per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018). Kepemilikan 30% di bawah 50% sehingga tidak ada deemed dividend CFC.",
        jejakHitung: [
          ["Neto usaha", "Rp4.000.000.000"],
          ["Dividen PT Bumi Lestari (badan DN)", "bukan objek → Rp0"],
          ["Dividen Korea (bruto, tidak diinvestasikan)", "Rp1.000.000.000"],
          ["PKP", "Rp5.000.000.000"],
          ["PPh terutang 22%", "Rp1.100.000.000"],
          ["Batas PPh 24 Korea = 1.000/5.000 × Rp1.100.000.000", "Rp220.000.000 → kredit Rp100.000.000"],
          ["PPh 29 = 1.100 − 100 − 40 − 600 (juta)", "Rp360.000.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan dividen Korea neto setelah pajak (Rp900.000.000): PKP Rp4.900.000.000 dan PPh Rp1.078.000.000.",
          B: "Memasukkan dividen PT Bumi Lestari ke PKP (Rp5.800.000.000; PPh Rp1.276.000.000), padahal dividen dari badan dalam negeri bukan objek.",
          C: "Memperlakukan dividen luar negeri seperti dividen dalam negeri (dikecualikan tanpa syarat) sehingga PKP Rp4.000.000.000; pengecualian dividen LN mensyaratkan investasi di Indonesia."
        },
        jebakan: "Satu portofolio penyertaan, dua rezim dividen: dalam negeri bebas tanpa syarat bagi badan, luar negeri bebas hanya bila diinvestasikan di Indonesia; bila tidak, masuk sebesar jumlah sebelum dipotong pajak luar negeri dan dikreditkan per jenis penghasilan untuk tiap negara."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 10 P3B Indonesia–Korea Selatan" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "C10-065",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Sentra Digital Tbk (peredaran bruto 2025 Rp400 miliar) memenuhi seluruh syarat penurunan tarif 3% bagi perseroan terbuka untuk Tahun Pajak 2025: paling sedikit 40% saham disetor diperdagangkan di Bursa Efek Indonesia, dimiliki paling sedikit 300 pihak yang masing-masing kurang dari 5%, selama paling singkat 183 hari. Data 2025: penghasilan neto dalam negeri Rp8.000.000.000; laba neto cabang (BUT) di Filipina sebelum pajak Rp2.000.000.000 dengan pajak Filipina dibayar 25% (Rp500.000.000) dan laba cabang tidak diinvestasikan di Indonesia; angsuran PPh Pasal 25 yang dibayar Rp1.000.000.000. PPh Pasal 29 PT Sentra Digital Tbk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp520.000.000", B: "Rp760.000.000", C: "Rp400.000.000", D: "Rp460.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Tarif 19% berlaku atas seluruh PKP termasuk laba cabang Filipina, sehingga batas kredit Pasal 24 ikut turun: 2.000/10.000 × Rp1.900.000.000 = Rp380.000.000. Pajak Filipina Rp500.000.000 hanya dapat dikreditkan Rp380.000.000; PPh 29 = Rp1.900.000.000 − Rp380.000.000 − Rp1.000.000.000 = Rp520.000.000.",
        jejakHitung: [
          ["PKP = 8.000 + 2.000 (juta)", "Rp10.000.000.000"],
          ["PPh terutang 19% (22% − 3%)", "Rp1.900.000.000"],
          ["Batas Filipina = 2.000/10.000 × Rp1.900.000.000", "Rp380.000.000"],
          ["Kredit = min(Rp500.000.000; Rp380.000.000)", "Rp380.000.000"],
          ["PPh 29 = 1.900 − 380 − 1.000 (juta)", "Rp520.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai tarif umum 22% (PPh Rp2.200.000.000; batas Rp440.000.000) padahal syarat perseroan terbuka terpenuhi.",
          C: "Mengkreditkan seluruh pajak Filipina Rp500.000.000 melebihi batas untuk laba usaha cabang Filipina (Rp380.000.000).",
          D: "Menghitung batas kredit dengan tarif 22% (Rp440.000.000) sementara PPh terutang memakai 19%."
        },
        jebakan: "Tarif khusus perseroan terbuka menurunkan PPh terutang sekaligus batas kredit PPh 24; kelebihan pajak luar negeri hangus."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (2b) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 (ketentuan perseroan terbuka)", berlakuSejak: "2022-12-20" }, { pasal: "Pasal 24 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "C10-066",
      topik: "C10.2",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "BUT Osaka Builders di Indonesia (kantor pusat di Jepang; tarif branch profit tax P3B 10%) memperoleh laba setelah pajak Tahun Pajak 2025 Rp6.000.000.000 dan berencana menanamkan seluruhnya kembali dengan mendirikan PT Osaka Beton Indonesia sebagai pendiri. Konsultan menyiapkan empat rumusan memo untuk direksi yang hanya berbeda pada satu frasa. Rumusan yang PALING TEPAT menurut Pasal 26 ayat (4) UU PPh dan PMK 14/PMK.03/2011 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Laba setelah pajak 2025 tidak dikenai PPh Pasal 26 ayat (4) sepanjang ditanamkan kembali di Indonesia sebagai penyertaan modal pada perusahaan baru yang didirikan dan berkedudukan di Indonesia sebagai pendiri atau peserta pendiri, dilakukan paling lambat 4 bulan setelah akhir Tahun Pajak 2025, dan tidak dialihkan sekurang-kurangnya 2 tahun sesudah perusahaan baru tersebut berproduksi komersial.", B: "Laba setelah pajak 2025 tidak dikenai PPh Pasal 26 ayat (4) sepanjang ditanamkan kembali di Indonesia sebagai penyertaan modal pada perusahaan baru yang didirikan dan berkedudukan di Indonesia sebagai pendiri atau peserta pendiri, dilakukan paling lambat akhir Tahun Pajak 2026, dan tidak dialihkan sekurang-kurangnya 2 tahun sesudah perusahaan baru tersebut berproduksi komersial.", C: "Laba setelah pajak 2025 tidak dikenai PPh Pasal 26 ayat (4) sepanjang ditanamkan kembali di Indonesia sebagai penyertaan modal pada perusahaan baru yang didirikan dan berkedudukan di Indonesia sebagai pendiri atau peserta pendiri, dilakukan paling lambat akhir Tahun Pajak 2026, dan tidak dialihkan sekurang-kurangnya 5 tahun sesudah perusahaan baru tersebut berproduksi komersial.", D: "Laba setelah pajak 2025 tidak dikenai PPh Pasal 26 ayat (4) sepanjang ditanamkan kembali di Indonesia sebagai penyertaan modal pada perusahaan baru yang didirikan dan berkedudukan di Indonesia sebagai pendiri atau peserta pendiri, dilakukan paling lambat akhir Tahun Pajak 2026 setelah memperoleh persetujuan tertulis Direktur Jenderal Pajak, dan tidak dialihkan sekurang-kurangnya 2 tahun sesudah perusahaan baru tersebut berproduksi komersial." },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 14/PMK.03/2011 mengecualikan laba setelah pajak BUT dari PPh Pasal 26 ayat (4) bila ditanamkan kembali di Indonesia dalam bentuk yang diatur (antara lain penyertaan modal pada perusahaan baru sebagai pendiri/peserta pendiri), dilakukan paling lambat dalam tahun pajak berikutnya, dan tidak dialihkan paling singkat 2 tahun sesudah perusahaan baru berproduksi komersial. Penanaman kembali diberitahukan bersama SPT Tahunan, bukan menunggu persetujuan.",
        jejakHitung: [
          ["BPT bila tidak ditanamkan kembali = 10% × Rp6.000.000.000", "Rp600.000.000"],
          ["BPT bila seluruhnya ditanamkan kembali sesuai syarat", "Rp0"]
        ],
        mengapaSalah: {
          A: "Batas 4 bulan adalah batas SPT Tahunan badan; penanaman kembali boleh sampai akhir tahun pajak berikutnya (2026).",
          C: "Masa larangan pengalihan 2 tahun, bukan 5 tahun.",
          D: "Tidak ada syarat persetujuan tertulis Dirjen Pajak; BUT cukup memenuhi syarat dan memberitahukannya bersama SPT Tahunan."
        },
        jebakan: "Empat kalimat panjang yang identik kecuali satu frasa: periksa tenggat, masa larangan pengalihan, dan syarat administratifnya satu per satu."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) huruf a, Pasal 2 ayat (1) dan (2), Pasal 3 ayat (1) PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "Ketentuan branch profit tax dalam P3B Indonesia–Jepang" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-067",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Lintas Media Asia akan membayar royalti siaran Rp900.000.000 pada 20 November 2026 kepada Hanbit Broadcasting Co., Ltd., residen Korea Selatan, yang menurut P3B Indonesia–Korea Selatan berhak atas tarif royalti paling tinggi 15%. Kepala bagian pajak menyusun empat rumusan syarat penerapan tarif P3B untuk SOP pemotongan yang hanya berbeda pada satu frasa. Rumusan yang PALING TEPAT menurut PMK 112/2025 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tarif P3B dapat diterapkan sepanjang Hanbit bukan subjek pajak dalam negeri Indonesia, Form DGT yang sah cukup disampaikan paling lambat batas waktu penyampaian SPT Masa PPh Unifikasi Masa November 2026 walaupun royalti sudah dipotong lebih dahulu, Hanbit merupakan beneficial owner atas royalti, dan tidak terdapat penyalahgunaan P3B; bila tidak, dipotong 20%.", B: "Tarif P3B dapat diterapkan sepanjang Hanbit bukan subjek pajak dalam negeri Indonesia, Form DGT yang sah telah disampaikan kepada PT Lintas Media Asia dalam rangka pemotongan lalu dicek dan diunggah PT Lintas Media Asia melalui portal wajib pajak, tanpa perlu menguji beneficial owner karena syarat itu hanya untuk dividen dan bunga, dan tidak terdapat penyalahgunaan P3B; bila tidak, dipotong 20%.", C: "Tarif P3B dapat diterapkan sepanjang Hanbit bukan subjek pajak dalam negeri Indonesia, Form DGT yang sah telah disampaikan kepada PT Lintas Media Asia dalam rangka pemotongan lalu dicek dan diunggah PT Lintas Media Asia melalui portal wajib pajak, Hanbit merupakan beneficial owner atas royalti, dan tidak terdapat penyalahgunaan P3B; bila tidak, dipotong 20%.", D: "Tarif P3B dapat diterapkan sepanjang Hanbit tidak memiliki pemegang saham warga negara Indonesia, Form DGT yang sah telah disampaikan kepada PT Lintas Media Asia dalam rangka pemotongan lalu dicek dan diunggah PT Lintas Media Asia melalui portal wajib pajak, Hanbit merupakan beneficial owner atas royalti, dan tidak terdapat penyalahgunaan P3B; bila tidak, dipotong 20%." },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PMK 112/2025: WPLN berhak atas manfaat P3B bila bukan subjek pajak dalam negeri, penduduk negara mitra, dan tidak menyalahgunakan P3B, termasuk merupakan beneficial owner (Pasal 2 ayat (4) dan Pasal 8 ayat (2)). Formulir DGT disampaikan kepada pemotong dalam rangka pemotongan (Pasal 8 ayat (1)); pemotong mengeceknya, mengunggahnya melalui portal wajib pajak, lalu memotong sesuai P3B (Pasal 10 ayat (3)); bila syaratnya tidak terpenuhi saat pemotongan, dipotong menurut UU PPh (Pasal 10 ayat (4)). Bila terpenuhi, PPh 26 = 15% × Rp900.000.000 = Rp135.000.000; bila tidak, 20% = Rp180.000.000.",
        jejakHitung: [
          ["PPh 26 dengan tarif P3B = 15% × Rp900.000.000", "Rp135.000.000"],
          ["PPh 26 tanpa SKD sah = 20% × Rp900.000.000", "Rp180.000.000"]
        ],
        mengapaSalah: {
          A: "Tenggat sampai batas waktu SPT Masa adalah pola PER-25/PJ/2018 yang sudah diganti. Menurut PMK 112/2025 Form DGT disampaikan dalam rangka pemotongan; bila syaratnya belum terpenuhi saat pemotongan, dipotong 20% (Pasal 10 ayat (4)) dan kelebihannya hanya dapat diminta kembali.",
          B: "Pernyataan beneficial owner adalah bagian dari Formulir DGT untuk semua jenis penghasilan (Pasal 8 ayat (2) huruf c angka 8 PMK 112/2025), termasuk royalti.",
          D: "Kriteria yang benar adalah bukan subjek pajak dalam negeri (residen), bukan kewarganegaraan pemegang saham."
        },
        jebakan: "Frasa pembeda: kapan Form DGT harus tersedia (dalam rangka pemotongan, bukan sampai batas SPT Masa) dan cakupan beneficial owner (termasuk royalti)."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (4), Pasal 8 ayat (1) dan (2), serta Pasal 10 ayat (3) dan (4) PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 P3B Indonesia–Korea Selatan" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-068", topik: "C10.9", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "PMK 81/2024 (parafrase): PPh Pasal 26 yang dipotong wajib disetor paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir, dan SPT Masa PPh Unifikasi disampaikan paling lambat 20 hari setelah Masa Pajak berakhir. PER-11/PJ/2025 (parafrase): bukti pemotongan atas penghasilan Wajib Pajak luar negeri, selain penghasilan orang pribadi dari pekerjaan, jasa, dan kegiatan, dibuat dalam bentuk BPNR.",
      stem: "PT Arunika Game Studio membayar royalti mesin permainan Rp450.000.000 pada 22 September 2026 kepada Kumo Interactive K.K. (residen Jepang; beneficial owner; batas tarif royalti P3B 10%). Form DGT Kumo yang sah telah terekam di Coretax pada 1 September 2026. Rangkaian dokumen dan tenggat yang tepat bagi admin pajak PT Arunika untuk Masa Pajak September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat BPPU di menu eBupot dengan tarif 10% (Rp45.000.000); menyetor dengan kode billing paling lambat 15 Oktober 2026; menyampaikan SPT Masa PPh Unifikasi Masa September 2026 paling lambat 20 Oktober 2026",
        B: "Membuat BPNR di menu eBupot dengan tarif 10% (Rp45.000.000); menyetor dengan kode billing paling lambat 10 Oktober 2026; menyampaikan SPT Masa PPh Unifikasi Masa September 2026 paling lambat 20 Oktober 2026",
        C: "Membuat BP21 dengan tarif 10% (Rp45.000.000); menyetor dengan kode billing paling lambat 15 Oktober 2026; melaporkannya dalam SPT Masa PPh 21/26 Masa September 2026",
        D: "Membuat BPNR di menu eBupot dengan merujuk Form DGT yang terekam dan tarif 10% (Rp45.000.000); menyetor dengan kode billing paling lambat 15 Oktober 2026; menyampaikan SPT Masa PPh Unifikasi Masa September 2026 paling lambat 20 Oktober 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penerima adalah badan luar negeri sehingga bukti potongnya BPNR (BPPU untuk penerima dalam negeri; BP21 untuk PPh 21). Form DGT sah terekam sebelum pembayaran, jadi tarif P3B 10% berlaku. PPh 26 Masa September disetor paling lambat 15 Oktober 2026 dan SPT Masa PPh Unifikasi disampaikan paling lambat 20 Oktober 2026 (keduanya hari kerja).",
        jejakHitung: [["PPh 26 = 10% × Rp450.000.000", "Rp45.000.000"], ["Batas setor", "15 Oktober 2026"], ["Batas SPT Masa PPh Unifikasi", "20 Oktober 2026"]],
        mengapaSalah: {
          A: "BPPU dipakai untuk penerima dalam negeri (PPh 4 ayat (2), 15, 22, 23), bukan WPLN.",
          B: "Tanggal 10 adalah tenggat setor sebelum PMK 81/2024.",
          C: "BP21 dan SPT Masa PPh 21/26 untuk PPh 21 (dan PPh 26 orang pribadi atas pekerjaan/jasa); penerima di sini badan sehingga masuk BPNR dan SPT Masa PPh Unifikasi."
        },
        jebakan: "Kode bukti potong ditentukan jenis penerima: badan luar negeri → BPNR, bukan BPPU atau BP21."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 (tenggat setor dan SPT Masa)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPNR)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-069",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 24 ayat (1) UU PPh: Pajak yang dibayar atau terutang di luar negeri atas penghasilan dari luar negeri yang diterima atau diperoleh Wajib Pajak dalam negeri boleh dikreditkan terhadap pajak yang terutang berdasarkan Undang-Undang ini dalam tahun pajak yang sama. Pasal 24 ayat (2) (diringkas): besarnya kredit paling tinggi sama dengan pajak yang terutang atas penghasilan luar negeri, tetapi tidak boleh melebihi penghitungan pajak yang terutang menurut Undang-Undang ini.",
      stem: "PT Kreasi Animasi Nusantara (WPDN) akan menerima royalti animasi Rp2.000.000.000 pada Desember 2026 dari Sakura Media Co., Ltd. di Jepang. Sakura Media menyatakan akan memotong pajak dengan tarif domestik Jepang 20,42% kecuali PT Kreasi menyerahkan surat keterangan domisili (certificate of residence) yang diterbitkan otoritas pajak Indonesia sebelum pembayaran, agar tarif royalti P3B Indonesia–Jepang 10% dapat diterapkan. Langkah yang paling tepat bagi PT Kreasi adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengisi Form DGT sesuai PMK 112/2025 dan menyerahkannya kepada Sakura Media sebagai bukti residen Indonesia sebelum pembayaran", B: "Memohon SKD subjek pajak dalam negeri melalui Coretax, menyerahkannya kepada Sakura Media sebelum pembayaran, lalu mengkreditkan pajak Jepang 10%", C: "Membiarkan pemotongan 20,42% karena seluruh pajak Jepang Rp408.400.000 dapat dikreditkan sebagai PPh Pasal 24 dalam SPT Tahunan PPh Badan 2026", D: "Mengajukan permohonan MAP kepada DJP sebelum pembayaran agar otoritas Jepang menerapkan tarif royalti P3B 10%" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bukti residen Indonesia untuk dipakai di negara mitra adalah SKD bagi subjek pajak dalam negeri, yang sejak 2025 dimohonkan melalui layanan Coretax. Dengan SKD, Jepang memotong 10% (Rp200.000.000) dan jumlah itu dikreditkan dalam batas untuk royalti dari Jepang. Bila dibiarkan 20,42%, kelebihan di atas tarif P3B tidak dapat dikreditkan di Indonesia dan harus diminta kembali ke Jepang. Kredit pajak Jepang 10% diambil dalam SPT Tahunan PPh Badan 2026, paling banyak sebesar batas yang dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018).",
        jejakHitung: [
          ["Pajak Jepang sesuai P3B = 10% × Rp2.000.000.000", "Rp200.000.000"],
          ["Tanpa SKD = 20,42% × Rp2.000.000.000", "Rp408.400.000"],
          ["Bagian yang tidak dapat dikreditkan di Indonesia", "Rp208.400.000"]
        ],
        mengapaSalah: {
          A: "Form DGT adalah dokumen WPLN yang menerima penghasilan dari Indonesia, bukan bukti residen Indonesia untuk negara lain.",
          C: "Kredit PPh 24 dibatasi pajak yang seharusnya terutang menurut P3B (10%); kelebihan pemotongan tidak dapat dikreditkan.",
          D: "MAP untuk pengenaan pajak yang tidak sesuai P3B, bukan pengganti bukti residen dalam pemotongan rutin."
        },
        jebakan: "Arah dokumen terbalik: Form DGT untuk WPLN yang menerima penghasilan dari Indonesia; SKD subjek pajak dalam negeri untuk WPDN yang menerima penghasilan dari luar negeri."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-8/PJ/2025 (layanan Coretax, termasuk SKD)", berlakuSejak: "2025-05-21" }, { pasal: "Pasal 12 P3B Indonesia–Jepang" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "C10-070", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C10-07",
      stem: "Data untuk soal V-C10-07: PT Rimba Kreatif Nusantara (PKP sejak 2018; peredaran bruto 2025 Rp80 miliar; 210 pegawai) mencatat transaksi Masa Agustus 2026: (1) royalti hak cipta desain Rp600.000.000 kepada Van Dijk Design B.V. (Belanda; beneficial owner; Form DGT sah terekam di Coretax sebelum pembayaran; batas tarif royalti P3B 10%); (2) bunga pinjaman 3 tahun Rp400.000.000 kepada Harbour Bank Ltd. (Singapura; beneficial owner; Form DGT sah; batas tarif bunga P3B 10%); (3) imbalan jasa desain grafis Rp200.000.000 kepada Mr. Marco Rossi (orang pribadi residen Italia; seluruh pekerjaan dilakukan di Milan; Form DGT sah; menurut P3B hanya dipajaki Italia); (4) pembayaran bahan baku impor dari Guangzhou Textile Co. (Tiongkok) dengan nilai impor Rp3.000.000.000 yang PPh Pasal 22 impornya Rp75.000.000 telah dipungut Bea Cukai; (5) imbalan jaminan (guarantee fee) Rp100.000.000 kepada induk, Rimba Holdings Ltd. (Hong Kong), yang belum menyampaikan Form DGT; (6) gaji pegawai Rp1.250.000.000 dengan PPh 21 Rp62.400.000. Jumlah PPh Pasal 26 yang wajib dipotong PT Rimba untuk Masa Agustus 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000.000", B: "Rp110.000.000", C: "Rp120.000.000", D: "Rp160.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya tiga pembayaran yang dipotong: royalti 10% × Rp600.000.000 = Rp60.000.000; bunga 10% × Rp400.000.000 = Rp40.000.000; imbalan jaminan (termasuk bunga) tanpa Form DGT 20% × Rp100.000.000 = Rp20.000.000. Jasa Mr. Rossi hanya dipajaki Italia, pembelian bahan baku impor bukan objek PPh 26, dan data gaji, PPh 21, serta PPh 22 impor tidak dipakai. Total Rp120.000.000.",
        jejakHitung: [["(1) Royalti 10% × Rp600.000.000", "Rp60.000.000"], ["(2) Bunga 10% × Rp400.000.000", "Rp40.000.000"], ["(3) Jasa Mr. Rossi (P3B: hanya Italia)", "Rp0"], ["(4) Bahan baku impor", "bukan objek PPh 26"], ["(5) Imbalan jaminan 20% × Rp100.000.000 (tanpa Form DGT)", "Rp20.000.000"], ["Total PPh 26", "Rp120.000.000"]],
        mengapaSalah: {
          A: "Menganggap imbalan jaminan bukan objek; Pasal 26 ayat (1) memasukkan imbalan sehubungan dengan jaminan pengembalian utang ke dalam bunga.",
          B: "Menerapkan tarif P3B 10% atas imbalan jaminan padahal induk Hong Kong belum menyampaikan Form DGT, sehingga berlaku 20%.",
          D: "Memotong 20% atas jasa Mr. Rossi (Rp40.000.000) padahal Form DGT sah dan P3B memberi hak pemajakan hanya kepada Italia."
        },
        jebakan: "Data berlebih (gaji, PPh 21, PPh 22 impor, jumlah pegawai, omzet) sengaja dicampur; pilah dulu mana yang objek PPh 26, lalu cek syarat P3B per penerima."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b, c, dan d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal bunga, royalti, dan jasa dalam P3B terkait" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "C10-071", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-07",
      stem: "Lanjutan V-C10-07 (PT Rimba Kreatif Nusantara, PKP; Masa Agustus 2026): royalti hak cipta desain Rp600.000.000 kepada Van Dijk Design B.V. (Belanda; PPh 26 dipotong Rp60.000.000); bunga pinjaman Rp400.000.000 kepada Harbour Bank Ltd. (Singapura); jasa desain grafis Rp200.000.000 oleh Mr. Marco Rossi yang dikerjakan di Milan dan hasilnya dipakai PT Rimba di Indonesia; impor bahan baku dengan nilai impor Rp3.000.000.000 yang PPN impornya telah dipungut Bea Cukai; serta imbalan jaminan Rp100.000.000 kepada induk di Hong Kong. Anggap atas bunga dan imbalan jaminan (jasa keuangan) tidak terutang PPN dan seluruh transaksi bukan atas barang mewah. PPN atas pemanfaatan BKP tidak berwujud dan JKP dari luar daerah pabean yang wajib dipungut dan disetor sendiri oleh PT Rimba untuk Masa Agustus 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp88.000.000", B: "Rp96.000.000", C: "Rp81.400.000", D: "Rp66.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPN pemanfaatan BKP tidak berwujud (royalti hak cipta) dan JKP (jasa desain yang dimanfaatkan di Indonesia) dari luar daerah pabean dipungut sendiri oleh penerima dan tidak dipengaruhi P3B. DPP adalah jumlah yang dibayar sebelum dipotong PPh 26, dengan nilai lain 11/12: 12% × 11/12 × (Rp600.000.000 + Rp200.000.000) = Rp88.000.000. Impor bahan baku sudah dipungut PPN impor oleh Bea Cukai.",
        jejakHitung: [["DPP royalti (BKP tidak berwujud)", "Rp600.000.000"], ["DPP jasa desain (JKP dari luar daerah pabean)", "Rp200.000.000"], ["DPP nilai lain = 11/12 × Rp800.000.000", "Rp733.333.333"], ["PPN = 12% × Rp733.333.333", "Rp88.000.000"]],
        mengapaSalah: {
          B: "Mengalikan 12% langsung dengan Rp800.000.000 tanpa DPP nilai lain 11/12 untuk transaksi bukan barang mewah.",
          C: "Memakai royalti neto setelah PPh 26 (Rp540.000.000) sebagai DPP; DPP adalah jumlah yang dibayar atau seharusnya dibayar sebelum pemotongan PPh.",
          D: "Mengecualikan jasa Mr. Rossi karena dikerjakan di luar negeri atau karena P3B; PPN terutang di tempat jasa dimanfaatkan dan P3B tidak mengatur PPN."
        },
        jebakan: "P3B hanya membatasi PPh; PPN pemanfaatan dari luar negeri tetap terutang dengan DPP bruto sebelum PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf d dan e UU PPN" }, { pasal: "PMK 131/2024 (tarif 12%, DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-072", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 15 P3B (disederhanakan): (1) Gaji, upah, dan imbalan serupa yang diterima residen suatu Negara dari pekerjaan hanya dikenai pajak di Negara itu, kecuali pekerjaan dilakukan di Negara lainnya. (2) Walaupun demikian, imbalan atas pekerjaan yang dilakukan di Negara lainnya hanya dikenai pajak di Negara pertama apabila: (a) penerima berada di Negara lainnya tidak lebih dari 183 hari dalam 12 bulan; (b) imbalan dibayar oleh atau atas nama pemberi kerja yang bukan residen Negara lainnya; dan (c) imbalan tidak dibebankan kepada bentuk usaha tetap yang dimiliki pemberi kerja di Negara lainnya.",
      stem: "Encik Faiz bin Rahman, residen Malaysia yang menyerahkan Form DGT sah, adalah pegawai Melaka Rekabina Sdn. Bhd. Perusahaan itu memiliki BUT terdaftar di Balikpapan untuk proyek konstruksi kilang yang berlangsung 14 bulan. Faiz ditugaskan pada proyek tersebut 1 Maret–15 Juni 2026 (107 hari) tanpa keluarga dan tidak berniat menetap. Selama penugasan ia memperoleh gaji Rp270.000.000 yang dibayar kantor pusat di Kuala Lumpur lalu dibebankan sebagai biaya BUT melalui alokasi biaya, serta tunjangan perumahan Rp30.000.000 yang dibayar langsung oleh BUT. Data lain: Faiz tidak memiliki NPWP dan peredaran bruto BUT 2026 diperkirakan Rp120 miliar. Berdasarkan kutipan, PPh yang wajib dipotong BUT Melaka Rekabina atas imbalan Faiz untuk penugasan itu adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0, karena Faiz berada di Indonesia tidak lebih dari 183 hari",
        B: "Rp54.000.000, yaitu PPh 26 tarif 20% atas gaji saja",
        C: "Rp6.000.000, yaitu PPh 26 tarif 20% atas tunjangan perumahan saja karena gaji dibayar dari Kuala Lumpur",
        D: "Rp60.000.000, yaitu PPh 26 tarif 20% atas seluruh imbalan Rp300.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Ketiga syarat Pasal 15 ayat (2) bersifat kumulatif. Syarat 183 hari dan pemberi kerja nonresiden terpenuhi, tetapi seluruh imbalan (gaji yang dialokasikan dan tunjangan) dibebankan kepada BUT di Indonesia sehingga syarat (c) gagal dan Indonesia berhak memajaki. Faiz adalah WPLN (107 hari, tanpa niat menetap), maka BUT memotong PPh 26 20% × Rp300.000.000 = Rp60.000.000 dan melaporkannya dalam SPT Masa PPh 21/26.",
        jejakHitung: [["Hari di Indonesia", "107 hari (≤ 183) → syarat (a) terpenuhi"], ["Pembayar", "kantor pusat Malaysia → syarat (b) terpenuhi"], ["Dibebankan kepada BUT di Indonesia", "ya → syarat (c) gagal, Indonesia berhak memajaki"], ["Imbalan = Rp270.000.000 + Rp30.000.000", "Rp300.000.000"], ["PPh 26 = 20% × Rp300.000.000", "Rp60.000.000"]],
        mengapaSalah: {
          A: "Uji 183 hari hanya satu dari tiga syarat kumulatif; syarat pembebanan kepada BUT tidak terpenuhi.",
          B: "Tunjangan perumahan juga imbalan pekerjaan yang dibebankan kepada BUT, sehingga ikut dipotong.",
          C: "Tempat pembayaran tidak menentukan bila imbalan dibebankan kepada BUT; seluruh imbalan menjadi hak pemajakan Indonesia."
        },
        jebakan: "Berhenti pada uji 183 hari tanpa memeriksa siapa yang menanggung biaya imbalan."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (2) P3B" }, { pasal: "Pasal 26 ayat (1) UU PPh (imbalan sehubungan dengan pekerjaan)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) dan (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C10-073",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Dr. Klaus Becker (warga negara Jerman) adalah ahli metalurgi bersertifikat yang bekerja pada PT Baja Hijau Indonesia sejak 2 Januari 2024 dan sejak itu tinggal di Cilegon bersama keluarganya, sehingga menjadi subjek pajak dalam negeri mulai Tahun Pajak 2024. Ia memenuhi kriteria keahlian tertentu, telah mengajukan permohonan dan memperoleh surat persetujuan Direktur Jenderal Pajak untuk dikenai PPh hanya atas penghasilan dari Indonesia, dan tidak memanfaatkan P3B Indonesia–Jerman atas penghasilannya dari Jerman. Penghasilan Tahun Pajak 2026: gaji Rp1.440.000.000 dari PT Baja Hijau (PPh 21 dipotong); sewa apartemen di München setara Rp240.000.000 yang telah dipajaki Jerman; dan bunga deposito bank Jerman setara Rp30.000.000. Pernyataan yang paling tepat tentang pemajakan Dr. Becker di Indonesia untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Ia subjek pajak luar negeri karena berkewarganegaraan asing, sehingga gajinya dipotong PPh 26 20% dan penghasilan dari Jerman tidak dikenai PPh di Indonesia", B: "Ia subjek pajak dalam negeri yang untuk Tahun Pajak 2026 hanya dikenai PPh atas penghasilan dari Indonesia (gaji Rp1.440.000.000), karena masih dalam empat tahun pajak sejak menjadi subjek pajak dalam negeri (2024–2027)", C: "Ia subjek pajak dalam negeri yang untuk Tahun Pajak 2026 dikenai PPh atas seluruh penghasilan (Rp1.710.000.000), dengan pajak Jerman atas sewa dikreditkan per jenis penghasilan untuk tiap negara menurut Pasal 24", D: "Ia subjek pajak dalam negeri yang untuk Tahun Pajak 2026 hanya dikenai PPh atas penghasilan dari Indonesia, dan perlakuan itu berlaku tanpa batas waktu selama ia bekerja di Indonesia" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dr. Becker bertempat tinggal di Indonesia sejak 2024 sehingga subjek pajak dalam negeri (Pasal 2 ayat (3) huruf a UU PPh). Pasal 4 ayat (1a) UU PPh membatasi objek PPh WNA berkeahlian tertentu pada penghasilan dari Indonesia selama 4 tahun pajak sejak menjadi subjek pajak dalam negeri, yaitu 2024 sampai 2027 (Pasal 444 ayat (1) PMK 81/2024). Perlakuan ini dipilih dengan permohonan dan berlaku karena DJP telah menerbitkan surat persetujuan (Pasal 446 dan 447 PMK 81/2024). Untuk 2026 hanya gaji Rp1.440.000.000 yang dikenai PPh; sewa dan bunga dari Jerman tidak termasuk. Mulai 2028 seluruh penghasilan dikenai PPh dengan kredit Pasal 24.",
        jejakHitung: [
          ["Menjadi SPDN", "Tahun Pajak 2024"],
          ["Empat tahun pajak", "2024, 2025, 2026, 2027"],
          ["Penghasilan dari Indonesia 2026", "Rp1.440.000.000 (objek)"],
          ["Penghasilan dari Jerman (sewa + bunga)", "Rp270.000.000 (bukan objek 2026)"],
          ["Seandainya tanpa surat persetujuan", "Rp1.710.000.000 (seluruh penghasilan)"]
        ],
        mengapaSalah: {
          A: "Status subjek pajak ditentukan tempat tinggal dan lama berada, bukan kewarganegaraan; ia tinggal di Indonesia sejak 2024.",
          C: "Pemajakan atas seluruh penghasilan Rp1.710.000.000 hanya berlaku bila tidak ada surat persetujuan atau 4 tahun pajak sudah lewat; untuk 2026 ia memegang surat persetujuan dan masih dalam jangka 2024 sampai 2027.",
          D: "Perlakuan itu terbatas 4 tahun pajak sejak pertama kali menjadi SPDN; mulai 2028 penghasilan dari luar negeri ikut dikenai PPh."
        },
        jebakan: "Mengira kewarganegaraan menentukan status subjek pajak, lupa batas empat tahun pajak, atau lupa bahwa fasilitas ini harus dimohonkan dan disetujui DJP. Ketentuan pelaksananya kini Pasal 442 sampai 447 PMK 81/2024 (menggantikan Pasal 7 sampai 13 PMK 18/PMK.03/2021 sejak 1 Januari 2025)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1a) UU PPh sebagaimana diubah UU Cipta Kerja (kini UU 6/2023)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 442, Pasal 444, Pasal 446, dan Pasal 447 PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-074",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PMK 112/2025 dan PENG-2/PJ.09/2026 (parafrase): Tarif P3B diterapkan bila WPLN menyampaikan Formulir DGT kepada pemotong dalam rangka pemotongan dan pemotong, setelah mengecek pemenuhan syaratnya, mengunggahnya melalui portal wajib pajak; bila syarat itu tidak terpenuhi pada saat pemotongan, PPh Pasal 26 dipotong sesuai UU PPh dengan tarif 20%. SKD WPLN yang diterbitkan berdasarkan PER-25/PJ/2018 sebelum PMK 112/2025 berlaku tetap dapat digunakan sampai periode berlakunya berakhir.",
      stem: "PT Samudra Kabel Nusantara membayar bunga pinjaman kepada Pacific Cable Finance Pte. Ltd. (Singapura; beneficial owner; batas tarif bunga P3B 10%) setiap kuartal sebesar Rp600.000.000, yaitu pada 15 Januari, 15 April, 15 Juli, dan 15 Oktober 2026. Pacific Cable telah menyerahkan Form DGT format PER-25/PJ/2018 yang disertifikasi otoritas Singapura dengan periode berlaku 1 Oktober 2025 s.d. 30 September 2026, dan dokumen itu sudah diterima sebelum pembayaran pertama. Form DGT format PMK 112/2025 baru terekam di Coretax pada 20 Oktober 2026. Berdasarkan kutipan, jumlah PPh Pasal 26 atas keempat pembayaran bunga tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp240.000.000", B: "Rp480.000.000", C: "Rp300.000.000", D: "Rp180.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Tiga pembayaran pertama (Januari, April, Juli) masih dalam periode SKD lama yang tetap berlaku sampai 30 September 2026: 3 × 10% × Rp600.000.000 = Rp180.000.000. Pembayaran 15 Oktober 2026 terjadi setelah SKD lama berakhir, sedangkan Form DGT baru terekam 20 Oktober 2026 (setelah pembayaran), sehingga dipotong 20% = Rp120.000.000. Total Rp300.000.000; kelebihan Rp60.000.000 di atas tarif P3B dapat dimintakan kembali melalui permohonan pengembalian yang diajukan PT Samudra Kabel Nusantara sebagai pemotong dengan surat kuasa Pacific Cable (PMK 81/2024 Pasal 133 huruf b dan Pasal 134 ayat (1)).",
        jejakHitung: [
          ["Januari, April, Juli: 3 × 10% × Rp600.000.000", "Rp180.000.000"],
          ["Oktober (SKD lama berakhir; Form DGT baru terekam setelah pembayaran): 20% × Rp600.000.000", "Rp120.000.000"],
          ["Total PPh 26 tahun 2026", "Rp300.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai logika PER-25/PJ/2018 (cukup diterima sebelum batas SPT Masa). Menurut PMK 112/2025 Form DGT disampaikan kepada pemotong dalam rangka pemotongan lalu diunggah pemotong melalui portal wajib pajak; karena pada pembayaran 15 Oktober syarat itu belum terpenuhi, dipotong 20% (Pasal 10 ayat (4)) dan kelebihannya diminta kembali.",
          B: "SKD lama tidak gugur karena PMK 112/2025; tetap berlaku sampai periodenya berakhir.",
          D: "PPh 26 atas pembayaran Oktober tetap terutang saat dibayar; pemotongan tidak ditunda sampai Form DGT baru terekam."
        },
        jebakan: "Periksa periode berlaku SKD pada setiap tanggal pembayaran, bukan sekali untuk setahun."
      },
      dasarHukum: [{ pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "PENG-2/PJ.09/2026", berlakuSejak: "2026-01-09" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 133 huruf b dan Pasal 134 ayat (1) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Aturan peralihan bahwa Form DGT format lama tetap dipakai sampai masa berlakunya berakhir bersandar pada PENG-2/PJ.09/2026, yang naskahnya belum dicocokkan. Bagian lain sudah dicocokkan: Pasal 8 dan Pasal 10 PMK 112/2025 serta Pasal 133 dan Pasal 134 PMK 81/2024."
    },
    {
      id: "C10-075", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Hamburg Verpackung GmbH (residen Jerman) memiliki BUT di Jakarta berupa kantor cabang yang menjual mesin pengemas. Anggap Pasal 7 ayat (1) P3B yang berlaku mengikuti Model PBB (limited force of attraction): laba dari penjualan barang sejenis yang dilakukan langsung oleh kantor pusat di Indonesia dapat diatribusikan kepada BUT, sejalan dengan Pasal 5 ayat (1) huruf b UU PPh. Data Tahun Pajak 2025: penjualan BUT Rp40.000.000.000; harga pokok penjualan Rp28.000.000.000; biaya operasional Rp6.000.000.000, termasuk royalti merek kepada kantor pusat Rp1.000.000.000 dan alokasi biaya administrasi kantor pusat yang wajar dan berkaitan dengan BUT Rp500.000.000. Kantor pusat juga menjual langsung dua unit mesin pengemas sejenis kepada PT Sari Pangan (Bekasi) seharga Rp8.000.000.000 dengan laba neto Rp1.500.000.000. Data lain: bunga deposito BUT Rp100.000.000 telah dikenai PPh final dan tidak termasuk dalam angka di atas; PPh 22 impor yang dibayar BUT Rp900.000.000. Penghasilan kena pajak BUT Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp8.500.000.000",
        B: "Rp7.000.000.000",
        C: "Rp7.500.000.000",
        D: "Rp15.000.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Laba komersial BUT Rp6 miliar. Royalti kepada kantor pusat tidak dapat dibiayakan (Pasal 5 ayat (3)) sehingga ditambahkan Rp1 miliar, sedangkan alokasi biaya administrasi yang wajar tetap boleh. Karena P3B memuat limited force of attraction, laba neto penjualan langsung kantor pusat atas barang sejenis (Rp1,5 miliar) diatribusikan kepada BUT. PKP = Rp6 M + Rp1 M + Rp1,5 M = Rp8,5 miliar. Bunga deposito final dan PPh 22 impor (kredit pajak) tidak memengaruhi PKP.",
        jejakHitung: [["Laba komersial BUT = 40.000 − 28.000 − 6.000 (juta)", "Rp6.000.000.000"], ["Koreksi royalti kepada kantor pusat", "+Rp1.000.000.000"], ["Force of attraction: laba neto penjualan langsung kantor pusat", "+Rp1.500.000.000"], ["PKP BUT", "Rp8.500.000.000"]],
        mengapaSalah: {
          B: "Mengabaikan force of attraction yang diizinkan P3B dan Pasal 5 ayat (1) huruf b UU PPh.",
          C: "Lupa mengoreksi royalti kepada kantor pusat yang tidak dapat dibiayakan.",
          D: "Menambahkan harga jual bruto Rp8 miliar, bukan laba netonya."
        },
        jebakan: "Yang diatribusikan adalah laba neto penjualan sejenis, bukan nilai penjualannya, dan hanya bila P3B tidak menutup force of attraction."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 7 ayat (1) P3B (Model PBB)" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-076",
      topik: "C10.2",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      formulirRef: "1771.6A.1",
      stem: "BUT Kobe Precision (kantor pusat di Jepang; batas tarif branch profit tax P3B 10%) Tahun Pajak 2025 memiliki PKP Rp6.000.000.000 dan PPh badan terutang Rp1.320.000.000. Dari laba setelah pajak, Rp2.680.000.000 ditanamkan kembali pada Maret 2026 dalam bentuk pembelian aktiva tetap BUT dan diberitahukan bersama SPT Tahunan; sisanya tidak ditanamkan kembali. Dalam SPT Tahunan PPh Badan Tahun Pajak 2025 menurut PER-11/PJ/2025, penghitungan PPh Pasal 26 ayat (4) dilaporkan pada lampiran ... dengan jumlah terutang ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 10A; Rp468.000.000", B: "Lampiran 12A; Rp936.000.000", C: "Lampiran 12A; Rp468.000.000", D: "Lampiran 12A; Rp200.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Di SPT Tahunan PPh Badan bentuk PER-11/PJ/2025 (TP 2025 dan seterusnya), PPh Pasal 26 ayat (4) BUT dihitung pada Lampiran 12A, sedangkan pemberitahuan penanaman kembali pada Lampiran 12B. Pengecualian BPT hanya diberikan bila SELURUH laba setelah pajak ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011). Karena hanya Rp2.680.000.000 dari Rp4.680.000.000 yang ditanamkan kembali, pengecualian tidak berlaku: BPT = 10% × Rp4.680.000.000 = Rp468.000.000.",
        jejakHitung: [
          ["Laba setelah pajak = 6.000.000.000 − 1.320.000.000", "Rp4.680.000.000"],
          ["Ditanamkan kembali", "Rp2.680.000.000 (sebagian, bukan seluruhnya)"],
          ["Dasar branch profit tax", "Rp4.680.000.000"],
          ["BPT = 10% × Rp4.680.000.000", "Rp468.000.000"]
        ],
        mengapaSalah: {
          A: "Lampiran 10A untuk daftar transaksi yang dipengaruhi hubungan istimewa, bukan branch profit tax.",
          B: "Memakai tarif domestik 20% padahal P3B membatasi 10%.",
          D: "Mengurangkan penanaman kembali sebagian dari dasar BPT; PMK 14/PMK.03/2011 hanya mengecualikan bila seluruh laba setelah pajak ditanamkan kembali."
        },
        jebakan: "Penanaman kembali bersifat seluruhnya atau tidak sama sekali. Kode lampiran 6A, 7A, dan 3A adalah struktur formulir 1771 lama (PER-34/PJ/2010) yang hanya dipakai sampai TP 2024; di PER-11/PJ/2025 menjadi Lampiran 12A/12B (BPT), Lampiran 3 (kredit PPh 24), dan Lampiran 10A (hubungan istimewa)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 1 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2011-01-24" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026 (SPT Tahunan PPh Badan, Lampiran 12A dan 12B)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "C10-077",
      topik: "C10.2",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 2 ayat (5) UU PPh (parafrase): Bentuk usaha tetap adalah bentuk usaha yang dipergunakan oleh orang pribadi yang tidak bertempat tinggal di Indonesia atau badan yang tidak didirikan dan tidak bertempat kedudukan di Indonesia untuk menjalankan usaha atau melakukan kegiatan di Indonesia, yang antara lain dapat berupa pemberian jasa dalam bentuk apa pun oleh pegawai atau oleh orang lain, sepanjang dilakukan lebih dari 60 hari dalam jangka waktu 12 bulan.",
      stem: "Atlas Geoscan Ltda. berkedudukan di negara yang belum memiliki P3B dengan Indonesia. Atas kontrak dengan PT Borneo Mineral, satu tim survei geologi Atlas yang selalu bekerja bersama berada di lokasi tambang di Kalimantan pada 10 Januari–8 Februari 2026 (30 hari), 1–20 Mei 2026 (20 hari), dan 1–15 September 2026 (15 hari). Atlas tidak menyewa kantor di Indonesia. Atlas mendaftarkan diri sebagai BUT melalui Coretax dan memperoleh NPWP pada 22 September 2026; imbalan Rp3.000.000.000 (jasa teknik yang menjadi objek PPh Pasal 23) dibayar PT Borneo pada 30 September 2026. Berdasarkan kutipan, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Atlas bukan BUT karena kehadiran tim tidak berturut-turut; PT Borneo memotong PPh Pasal 26 20% sebesar Rp600.000.000 dari imbalan bruto", B: "Atlas merupakan BUT karena jasa 65 hari melebihi 60 hari dalam 12 bulan; PT Borneo memotong PPh Pasal 23 2% sebesar Rp60.000.000, bukan PPh Pasal 26", C: "Atlas bukan BUT karena negaranya tidak memiliki P3B dengan Indonesia sehingga time test tidak berlaku; PT Borneo memotong PPh Pasal 26 20%", D: "Atlas merupakan BUT hanya sejak terdaftar September 2026, sehingga 15/65 bagian imbalan dipotong PPh Pasal 23 2% dan sisanya PPh Pasal 26 20%" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tanpa P3B, berlaku time test domestik: hari pemberian jasa dijumlahkan dalam 12 bulan (30 + 20 + 15 = 65 hari) dan melebihi 60 hari, sehingga Atlas mempunyai BUT. BUT diperlakukan sebagai WP badan: terdaftar melalui Coretax, PPh badan 22%, SPT Tahunan PPh Badan (untuk Tahun Pajak 2025 dan seterusnya dalam bentuk PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026, bukan formulir 1771 lama), dan branch profit tax. Pembayaran oleh WPDN kepada BUT ber-NPWP dipotong PPh 23: 2% × Rp3.000.000.000 = Rp60.000.000.",
        jejakHitung: [
          ["Hari pemberian jasa = 30 + 20 + 15", "65 hari > 60 hari dalam 12 bulan"],
          ["Status", "BUT (tanpa P3B → time test domestik)"],
          ["PPh 23 = 2% × Rp3.000.000.000", "Rp60.000.000"]
        ],
        mengapaSalah: {
          A: "Time test menjumlahkan hari dalam 12 bulan; kehadiran tidak harus berturut-turut.",
          C: "Justru tanpa P3B, ketentuan domestik 60 hari berlaku penuh.",
          D: "Status BUT melekat pada kegiatan jasa itu secara keseluruhan; imbalan kepada BUT dipotong PPh 23 seluruhnya."
        },
        jebakan: "Tanpa P3B pakai 60 hari domestik; hitung hari secara kumulatif dalam 12 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019" }, { pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 (pendaftaran melalui Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C10-078",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Arjuna Teknologi (bukan perseroan terbuka; peredaran bruto 2025 Rp95 miliar) Tahun Pajak 2025 memiliki penghasilan neto dalam negeri Rp6.000.000.000. Penghasilan luar negeri: (1) royalti bruto Rp1.000.000.000 dari Jepang yang dipotong 20,42% (Rp204.200.000) karena formulir permohonan fasilitas P3B terlambat diserahkan, padahal batas tarif royalti P3B Indonesia–Jepang 10%; (2) laba cabang di Vietnam sebelum pajak Rp2.000.000.000 dengan pajak Vietnam dibayar Rp400.000.000; (3) dividen Rp1.500.000.000 dari anak usaha nonbursa di Korea Selatan yang dipotong 10% (Rp150.000.000) dan seluruhnya diinvestasikan di Indonesia sesuai syarat sehingga dikecualikan dari objek; (4) rugi cabang Filipina Rp500.000.000. Kredit pajak lain: PPh 23 dipotong pihak lain Rp80.000.000 dan angsuran PPh 25 Rp1.100.000.000. PPh Pasal 29 PT Arjuna Teknologi Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp195.800.000", B: "Rp480.000.000", C: "Rp300.000.000", D: "Rp400.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PKP = Rp6 M + Rp1 M (royalti Jepang, sebesar penghasilan neto sebelum dipotong pajak Jepang; tidak ada pengurang penghasilan bruto yang disebut) + Rp2 M (laba cabang Vietnam, sebesar penghasilan neto sebelum pajak Vietnam) = Rp9 M; dividen Korea dikecualikan dan rugi Filipina tidak digabung. PPh 22% = Rp1,98 M. Jepang: dibayar Rp204,2 juta dan batas proporsional Rp220 juta, tetapi kredit dibatasi tarif P3B 10% = Rp100 juta. Vietnam: batas Rp440 juta, dibayar Rp400 juta → Rp400 juta. Kredit PPh 24 Rp500 juta; PPh 29 = Rp1.980 jt − Rp500 jt − Rp80 jt − Rp1.100 jt = Rp300 juta.",
        jejakHitung: [
          ["PKP = 6.000 + 1.000 + 2.000 (juta)", "Rp9.000.000.000"],
          ["PPh terutang 22%", "Rp1.980.000.000"],
          ["Jepang: min(Rp204,2 jt dibayar; Rp100 jt sesuai P3B; 1.000/9.000 × Rp1,98 M = Rp220 jt)", "Rp100.000.000"],
          ["Vietnam: min(Rp400 jt; 2.000/9.000 × Rp1,98 M = Rp440 jt)", "Rp400.000.000"],
          ["PPh 29 = 1.980 − 500 − 80 − 1.100 (juta)", "Rp300.000.000"]
        ],
        mengapaSalah: {
          A: "Mengkreditkan seluruh Rp204,2 juta pajak Jepang (masih di bawah batas proporsional Rp220 juta), padahal kelebihan di atas tarif P3B harus diminta kembali ke Jepang: PPh 29 = 1.980 − 604,2 − 80 − 1.100 (juta).",
          B: "Memasukkan dividen Korea yang dikecualikan dan mengkreditkan pajaknya; pajak luar negeri atas penghasilan yang dikecualikan tidak dapat dikreditkan.",
          D: "Pemotongan di atas tarif P3B tetap dapat dikreditkan sampai batas tarif P3B, bukan nol."
        },
        jebakan: "Tiga saringan sekaligus: penghasilan yang dikecualikan keluar dari PKP, rugi luar negeri tidak digabung, dan pajak luar negeri dibatasi tarif P3B serta batas per jenis penghasilan untuk tiap negara."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) dan ayat (3), Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 4 ayat (3) huruf f UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C10-079",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Tim pajak PT Pelangi Kargo (WPDN; peredaran bruto 2025 Rp140 miliar) menyiapkan SPT Tahunan 2025. Cabang Vietnam membukukan laba Rp3.000.000.000 dengan pajak Vietnam Rp600.000.000, sedangkan cabang Filipina rugi Rp800.000.000. Konsultan menyusun empat rumusan kebijakan kredit pajak luar negeri yang hanya berbeda pada satu frasa. Rumusan yang paling tepat menurut Pasal 24 UU PPh adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Laba Vietnam digabungkan sebesar penghasilan neto sebelum dikurangi pajak Vietnam, rugi Filipina tidak mengurangi penghasilan lain, dan pajak Vietnam yang melebihi batas kredit untuk laba usaha cabang Vietnam tidak dapat dikreditkan, tidak dapat dibebankan sebagai biaya, dan tidak dapat dibawa ke tahun berikutnya", B: "Laba Vietnam digabungkan sebesar penghasilan neto sebelum dikurangi pajak Vietnam, rugi Filipina dikurangkan dari laba Vietnam sebelum batas kredit dihitung, dan pajak Vietnam yang melebihi batas kredit untuk laba usaha cabang Vietnam tidak dapat dikreditkan, tidak dapat dibebankan sebagai biaya, dan tidak dapat dibawa ke tahun berikutnya", C: "Laba Vietnam digabungkan sebesar penghasilan neto sebelum dikurangi pajak Vietnam, rugi Filipina tidak mengurangi penghasilan lain, dan pajak Vietnam yang melebihi batas kredit untuk laba usaha cabang Vietnam dapat dibebankan sebagai biaya dalam penghitungan penghasilan neto", D: "Laba Vietnam digabungkan sebesar penghasilan neto sebelum dikurangi pajak Vietnam, rugi Filipina tidak mengurangi penghasilan lain, dan pajak Vietnam yang melebihi batas kredit untuk laba usaha cabang Vietnam dapat dikreditkan pada tahun pajak berikutnya" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 24 memakai ordinary credit yang dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): penghasilan luar negeri digabungkan sebesar penghasilan neto, yaitu sebelum dikurangi pajak luar negeri (Pasal 4 ayat (2) huruf a PMK 192/PMK.03/2018 untuk penghasilan usaha cabang), rugi di luar negeri tidak diperhitungkan (Pasal 4 ayat (3)), dan sisa pajak luar negeri di atas batas hangus, yaitu tidak diperhitungkan dengan PPh terutang, tidak dibiayakan (Pasal 7 PMK 192/PMK.03/2018; Pasal 9 ayat (1) huruf h UU PPh), dan tidak dapat dibawa ke tahun lain.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Rugi cabang Filipina tidak dapat diperhitungkan, juga tidak terhadap laba negara lain (Pasal 4 ayat (3) PMK 192/PMK.03/2018).",
          C: "Pajak penghasilan, termasuk pajak luar negeri, tidak dapat dibiayakan.",
          D: "Tidak ada carry forward kelebihan kredit pajak luar negeri."
        },
        jebakan: "Opsi panjang hanya berbeda di ujung kalimat; baca sampai akhir."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) dan ayat (3), Pasal 6 ayat (2), dan Pasal 7 PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "C10-080",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Ibu Ratna Pertiwi (TK/0, subjek pajak dalam negeri) adalah pegawai tetap PT Sinar Abadi. Tahun Pajak 2025: penghasilan neto dari pekerjaan setelah biaya jabatan dan iuran pensiun Rp534.000.000, dengan PPh 21 setahun yang dipotong pemberi kerja (BPA1) Rp89.000.000. Ia juga menerima bunga obligasi korporasi Jepang Rp120.000.000 (bruto) yang dipotong pajak Jepang 15,315% (Rp18.378.000) karena ia tidak menyerahkan formulir permohonan fasilitas P3B; batas tarif bunga P3B Indonesia–Jepang 10%. Data lain: rumah di Depok Rp2.000.000.000 dan saldo tabungan Rp350.000.000 dilaporkan dalam daftar harta. PTKP TK/0 Rp54.000.000. PPh Pasal 29 dalam SPT Tahunan 2025 Ibu Ratna adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp16.622.000", B: "Rp23.000.000", C: "Rp35.000.000", D: "Rp0" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "PKP = Rp534 jt + Rp120 jt − Rp54 jt = Rp600 jt; PPh Pasal 17 = Rp124 jt. Kredit PPh 24 = terkecil antara pajak Jepang yang dibayar (Rp18,378 jt), pajak menurut P3B 10% (Rp12 jt), dan batas (120/600) × Rp124 jt = Rp24,8 jt, yaitu Rp12 jt. PPh 29 = Rp124 jt − Rp89 jt − Rp12 jt = Rp23 jt; kelebihan pemotongan di Jepang diminta kembali ke Jepang.",
        jejakHitung: [
          ["PKP = 534.000.000 + 120.000.000 − 54.000.000", "Rp600.000.000"],
          ["PPh Pasal 17: 5% × 60 jt + 15% × 190 jt + 25% × 250 jt + 30% × 100 jt", "Rp124.000.000"],
          ["Batas untuk bunga Jepang = 120/600 × Rp124.000.000", "Rp24.800.000"],
          ["Pajak Jepang menurut P3B = 10% × Rp120.000.000", "Rp12.000.000"],
          ["PPh 29 = 124.000.000 − 89.000.000 − 12.000.000", "Rp23.000.000"]
        ],
        mengapaSalah: {
          A: "Mengkreditkan seluruh pajak Jepang Rp18.378.000 (15,315%); bagian di atas tarif P3B 10% tidak dapat dikreditkan.",
          C: "Tidak mengkreditkan pajak Jepang sama sekali; orang pribadi dalam negeri juga berhak atas kredit Pasal 24.",
          D: "Memperlakukan bunga obligasi luar negeri seperti bunga final dalam negeri sehingga dikeluarkan dari PKP (PPh atas Rp480 juta = Rp89 juta, habis oleh PPh 21); penghasilan dari luar negeri dikenai tarif Pasal 17 dengan kredit Pasal 24."
        },
        jebakan: "Untuk orang pribadi, batas kredit dihitung dari PPh progresif atas seluruh PKP; kredit tetap dibatasi tarif P3B."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PMK 101/PMK.010/2016 (PTKP)", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "C10-081", topik: "C10.4", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Karya Plastindo (industri kemasan; bukan sektor yang dikecualikan dari DER) Tahun Pajak 2025: saldo pinjaman berbunga (bank dalam negeri dan pinjaman afiliasi Singapura) pada akhir setiap bulan Januari–Juni Rp80.000.000.000 dan pada akhir setiap bulan Juli–Desember Rp100.000.000.000 setelah pencairan pinjaman afiliasi Juli 2025. Pada akhir setiap bulan: ekuitas Rp16.000.000.000, pinjaman tanpa bunga dari pemegang saham pengendali (kepemilikan 60%) Rp4.000.000.000, dan utang dagang tanpa bunga Rp30.000.000.000. Biaya pinjaman 2025 Rp9.000.000.000 (bunga Rp8.600.000.000 dan provisi pinjaman Rp400.000.000), tingkat bunganya telah teruji wajar, dan utang swasta luar negeri telah dilaporkan. Koreksi fiskal positif atas biaya pinjaman 2025 menurut PMK 169/PMK.010/2015 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp1.800.000.000",
        B: "Rp2.600.000.000",
        C: "Rp3.000.000.000",
        D: "Rp1.000.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Rata-rata utang berbunga = (6 × Rp80 M + 6 × Rp100 M) ÷ 12 = Rp90 M; modal = Rp16 M + Rp4 M (pinjaman tanpa bunga dari pemegang saham) = Rp20 M; DER 4,5 : 1. Biaya pinjaman yang dapat dibebankan = (4 × 20 ÷ 90) × Rp9 M = Rp8 M, sehingga koreksi Rp1 M.",
        jejakHitung: [["Rata-rata utang berbunga = (6 × 80 + 6 × 100) ÷ 12 (miliar)", "Rp90.000.000.000"], ["Modal = 16 M + 4 M", "Rp20.000.000.000"], ["DER", "90 : 20 = 4,5 : 1 (> 4 : 1)"], ["Biaya dapat dibebankan = (80 ÷ 90) × Rp9.000.000.000", "Rp8.000.000.000"], ["Koreksi fiskal positif", "Rp1.000.000.000"]],
        mengapaSalah: {
          A: "Memakai saldo akhir tahun Rp100 M, bukan rata-rata saldo akhir bulan.",
          B: "Mengeluarkan pinjaman tanpa bunga dari pemegang saham dari modal (modal Rp16 M).",
          C: "Memasukkan utang dagang tanpa bunga ke dalam utang (Rp120 M)."
        },
        jebakan: "Rata-rata saldo akhir bulan, pinjaman tanpa bunga dari pihak hubungan istimewa sebagai modal, dan hanya utang berbunga yang dihitung."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-082", topik: "C10.4", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 18 ayat (3b) UU PPh (parafrase): Wajib Pajak yang melakukan pembelian saham atau aktiva perusahaan melalui pihak lain atau badan yang dibentuk untuk maksud demikian (special purpose company) dapat ditetapkan sebagai pihak yang sebenarnya melakukan pembelian tersebut sepanjang Wajib Pajak yang bersangkutan mempunyai hubungan istimewa dengan pihak lain atau badan tersebut dan terdapat ketidakwajaran penetapan harga.",
      stem: "PT Mega Tambang Nusantara membeli 70% saham PT Batu Hitam Kaltim melalui Silverline Holdings Pte. Ltd., SPV di Singapura yang didirikan dan 100% dimiliki PT Mega Tambang khusus untuk transaksi itu. Silverline membeli saham tersebut dari penjual independen seharga Rp500 miliar, lalu dua bulan kemudian menjualnya kepada PT Mega Tambang seharga Rp650 miliar tanpa perubahan apa pun pada PT Batu Hitam; selisih Rp150 miliar tertahan di Silverline. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "DJP dapat menetapkan PT Mega Tambang sebagai pihak yang sebenarnya membeli saham dari penjual independen dengan harga Rp500 miliar, karena PT Mega Tambang mempunyai hubungan istimewa dengan Silverline dan terdapat ketidakwajaran penetapan harga",
        B: "DJP dapat menetapkan PT Mega Tambang sebagai pihak yang sebenarnya membeli saham dengan harga Rp500 miliar, walaupun tidak terdapat hubungan istimewa, karena Silverline berkedudukan di luar negeri",
        C: "DJP tidak dapat menerapkan ketentuan tersebut karena Singapura adalah negara mitra P3B sehingga P3B mengesampingkan Pasal 18 UU PPh",
        D: "DJP menetapkan selisih Rp150 miliar sebagai penghasilan Silverline yang dikenai PPh Pasal 26 sebesar 5% dari harga jual"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 18 ayat (3b) memungkinkan DJP menetapkan PT Mega Tambang sebagai pembeli sebenarnya bila ada hubungan istimewa dengan SPV dan penetapan harga tidak wajar. Kedua syarat terpenuhi (kepemilikan 100% dan mark-up 30% tanpa nilai tambah), sehingga harga perolehan saham bagi PT Mega Tambang ditetapkan Rp500 miliar.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Ketentuan ini mensyaratkan hubungan istimewa; lokasi SPV di luar negeri saja tidak cukup.",
          C: "P3B tidak menghalangi penerapan aturan anti-penghindaran domestik; MLI juga memuat principal purpose test.",
          D: "PPh 26 5% atas penjualan saham conduit adalah Pasal 18 ayat (3c) jo. Pasal 26 ayat (2a), instrumen yang berbeda."
        },
        jebakan: "Bedakan pembelian melalui SPV (ayat (3b)) dari penjualan saham perusahaan antara/conduit (ayat (3c))."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3b) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 (instrumen pencegahan penghindaran pajak)", berlakuSejak: "2022-12-20" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-083", topik: "C10.4", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Empat WP badan berikut memiliki rata-rata DER di atas 4 : 1 pada Tahun Pajak 2025 dan membebankan biaya pinjaman dalam SPT Tahunan. Menurut PMK 169/PMK.010/2015, WP yang tetap wajib membatasi biaya pinjamannya dengan DER 4 : 1 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PT Bank Arta Sejahtera, bank umum",
        B: "PT Multifinance Andalan, perusahaan pembiayaan",
        C: "PT Serat Nusantara, industri tekstil yang penghasilannya dikenai PPh dengan tarif umum",
        D: "PT Bangun Persada, kontraktor yang seluruh penghasilannya dikenai PPh final jasa konstruksi"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pengecualian DER berlaku bagi bank, lembaga pembiayaan, asuransi/reasuransi, pertambangan migas/minerba yang kontraknya mengatur DER, WP yang seluruh penghasilannya dikenai PPh final, dan infrastruktur. Industri tekstil bertarif umum tidak dikecualikan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Bank dikecualikan dari DER.",
          B: "Lembaga pembiayaan dikecualikan dari DER.",
          D: "WP yang seluruh penghasilannya dikenai PPh final dikecualikan dari DER."
        },
        jebakan: "DER untuk WP bertarif umum; sektor keuangan dan WP final dikecualikan."
      },
      dasarHukum: [{ pasal: "PMK 169/PMK.010/2015 (pengecualian DER)", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "C10-084", topik: "C10.4", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Andalas Polimer (peredaran bruto 2025 Rp180 miliar; tarif 22% tanpa fasilitas Pasal 31E) melaporkan laba sebelum pajak 2025 menurut laporan keuangan Rp10.000.000.000. Rekonsiliasi fiskal hanya memuat dua pos: (1) koreksi DER atas biaya pinjaman kepada afiliasi Rp1.000.000.000, yang menurut PMK 169/PMK.010/2015 tidak dapat dibebankan pada tahun mana pun; dan (2) penyusutan komersial melebihi penyusutan fiskal Rp500.000.000, yang akan berbalik pada tahun-tahun berikutnya. Data lain: angsuran PPh 25 Rp2.000.000.000 dan PPh 26 atas bunga kepada afiliasi Rp150.000.000. Tidak ada saldo pajak tangguhan awal. Menurut PSAK 212 (dahulu PSAK 46), beban pajak penghasilan (pajak kini ditambah pajak tangguhan) dalam laporan laba rugi 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp2.530.000.000",
        B: "Rp2.420.000.000",
        C: "Rp2.200.000.000",
        D: "Rp2.640.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Koreksi DER adalah beda tetap (tidak pernah dapat dibebankan), sedangkan selisih penyusutan adalah beda temporer yang dapat dikurangkan. PKP = Rp10 M + Rp1 M + Rp0,5 M = Rp11,5 M; pajak kini 22% = Rp2,53 M. Aset pajak tangguhan 22% × Rp0,5 M = Rp110 juta menimbulkan manfaat pajak tangguhan, sehingga beban pajak = Rp2,53 M − Rp0,11 M = Rp2,42 M.",
        jejakHitung: [["PKP = 10.000 + 1.000 + 500 (juta)", "Rp11.500.000.000"], ["Pajak kini 22%", "Rp2.530.000.000"], ["Manfaat pajak tangguhan = 22% × Rp500.000.000", "(Rp110.000.000)"], ["Beban pajak penghasilan", "Rp2.420.000.000"]],
        mengapaSalah: {
          A: "Hanya pajak kini; mengabaikan pajak tangguhan atas beda temporer.",
          C: "Memperlakukan koreksi DER sebagai beda temporer (22% × Rp1,5 M = Rp330 juta).",
          D: "Membalik tanda: beda temporer yang dapat dikurangkan menimbulkan aset (manfaat), bukan beban tambahan."
        },
        jebakan: "Koreksi DER tidak dapat dibawa ke tahun berikutnya sehingga bersifat beda tetap; PPh 25 dan PPh 26 yang dipotong tidak memengaruhi beban pajak."
      },
      dasarHukum: [{ pasal: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }, { pasal: "PSAK 212 Pajak Penghasilan (dahulu PSAK 46)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-085",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Elektra Distribusi Indonesia adalah distributor rutin yang membeli seluruh produk dari induknya di Korea Selatan dan menjualnya kepada pelanggan independen tanpa pengolahan. Tahun Pajak 2024: penjualan Rp250.000.000.000; harga pokok penjualan Rp220.000.000.000; biaya operasional Rp25.000.000.000; laba operasi Rp5.000.000.000. Data lain: PPh 22 impor Rp6.600.000.000, 140 pegawai, dan peredaran bruto 2023 Rp230 miliar. Dalam pemeriksaan 2026, pemeriksa menerapkan TNMM dengan indikator margin laba operasi atas penjualan; sembilan pembanding menghasilkan rentang interkuartil 3,2%–5,6% dengan median 4,4%. Data pembanding tidak memberi dasar untuk menentukan titik yang paling tepat di dalam rentang. Berdasarkan PMK 172/2023, koreksi primer atas penghasilan PT Elektra 2024 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.000.000.000", B: "Rp9.000.000.000", C: "Rp11.000.000.000", D: "Rp6.000.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Margin laba operasi 2,0% (Rp5 M ÷ Rp250 M) berada di bawah rentang interkuartil 3,2%–5,6% sehingga tidak wajar. Karena tidak ada dasar untuk menentukan titik yang paling tepat, margin disesuaikan ke median 4,4% (Pasal 12 ayat (7) huruf c PMK 172/2023): laba operasi wajar 4,4% × Rp250 M = Rp11 M; koreksi primer Rp6 M (PPh badan 22% = Rp1,32 M).",
        jejakHitung: [
          ["Margin realisasi = 5.000 ÷ 250.000", "2,0% (di bawah rentang)"],
          ["Laba operasi wajar = 4,4% × Rp250.000.000.000", "Rp11.000.000.000"],
          ["Koreksi primer = 11 M − 5 M", "Rp6.000.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke kuartil bawah 3,2% (Rp8 M − Rp5 M).",
          B: "Menyesuaikan ke kuartil atas 5,6% (Rp14 M − Rp5 M).",
          C: "Menganggap seluruh laba operasi wajar sebagai koreksi."
        },
        jebakan: "Koreksi adalah selisih laba wajar pada median dengan laba aktual, bukan laba wajar itu sendiri. Median dipakai karena titik yang paling tepat sesuai kesebandingan tidak dapat ditentukan dari data (Pasal 12 ayat (7) PMK 172/2023)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 ayat (6) dan ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C10-086",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      formulirRef: "1771.3A.1",
      stem: "PT Sinar Garmen Indonesia wajib menyelenggarakan Master File dan Local File untuk Tahun Pajak 2025 dan bertransaksi dengan induknya di Jepang. Saat menyiapkan SPT Tahunan PPh Badan Tahun Pajak 2025 melalui Coretax, staf pajak harus melaporkan transaksi yang dipengaruhi hubungan istimewa dan melampirkan ikhtisar dokumentasi harga transfer. Menurut struktur SPT Tahunan PPh Badan dalam PER-11/PJ/2025, informasi itu dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 10A (daftar transaksi yang dipengaruhi hubungan istimewa), Lampiran 10B (pernyataan transaksi tersebut), dan Lampiran 10D (ikhtisar Dokumen Induk dan Dokumen Lokal)", B: "Lampiran 2 (daftar kepemilikan) beserta ikhtisar Dokumen Induk dan Dokumen Lokal", C: "Lampiran 10C (pernyataan transaksi dengan penduduk negara tax haven) saja", D: "Lampiran khusus 3A dan 3A-1 formulir 1771 (PER-34/PJ/2010) beserta ikhtisar dokumentasi" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Untuk Tahun Pajak 2025, SPT Tahunan PPh Badan mengikuti PER-11/PJ/2025. Pasal 85 ayat (1) huruf b menyediakan Lampiran 10A untuk daftar transaksi yang dipengaruhi hubungan istimewa, Lampiran 10B untuk pernyataannya, dan Lampiran 10D untuk ikhtisar Dokumen Induk dan Dokumen Lokal. Ikhtisar itu wajib dilampirkan pada SPT Tahunan PPh Badan (Pasal 19 ayat (2) PMK 172/2023).",
        jejakHitung: [
          ["Tahun pajak yang dilaporkan", "2025 → struktur PER-11/PJ/2025 (Coretax)"],
          ["Transaksi afiliasi", "Lampiran 10A dan 10B"],
          ["Ikhtisar Master File dan Local File", "Lampiran 10D"]
        ],
        mengapaSalah: {
          B: "Lampiran 2 hanya daftar kepemilikan, bukan tempat melaporkan transaksi afiliasi.",
          C: "Lampiran 10C khusus transaksi dengan penduduk negara tax haven; induk di Jepang, dan transaksi afiliasi serta ikhtisar tetap dilaporkan di 10A, 10B, dan 10D.",
          D: "Lampiran khusus 3A formulir 1771 (PER-34/PJ/2010) hanya dipakai untuk Tahun Pajak sampai dengan 2024 (Pasal 138 huruf a PER-11/PJ/2025)."
        },
        jebakan: "Nama lampiran formulir 1771 lama (3A, 3A-1, 3A-2) tidak berlaku untuk Tahun Pajak 2025; di Coretax transaksi hubungan istimewa ada di kelompok Lampiran 10."
      },
      dasarHukum: [{ pasal: "Pasal 85 ayat (1) huruf b angka 10, 11, dan 13 PER-11/PJ/2025", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 19 ayat (1) dan ayat (2) PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026 (SPT Tahunan PPh Badan, Lampiran 10A, 10B, dan 10D)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "C10-087",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Presisi Mekanika Indonesia adalah produsen kontrak yang menjual seluruh produknya kepada induknya di Jepang. Tahun Pajak 2024: biaya produksi Rp80.000.000.000 dan biaya operasional Rp10.000.000.000 (total biaya Rp90.000.000.000); penjualan kepada induk Rp94.500.000.000. Pemeriksa memakai TNMM dengan indikator laba operasi atas total biaya (net cost plus); rentang interkuartil pembanding 7,0%–11,0% dengan median 9,0%. Data pembanding tidak memberi dasar untuk menentukan titik yang paling tepat di dalam rentang. Koreksi primer atas penghasilan PT Presisi Mekanika 2024 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.800.000.000", B: "Rp2.700.000.000", C: "Rp3.600.000.000", D: "Rp8.100.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Mark-up realisasi = Rp4,5 M ÷ Rp90 M = 5,0%, di bawah rentang 7,0%–11,0%. Karena tidak ada dasar untuk menentukan titik yang paling tepat, indikator disesuaikan ke median (Pasal 12 ayat (7) huruf c PMK 172/2023): laba wajar 9,0% × Rp90 M = Rp8,1 M; koreksi = Rp8,1 M − Rp4,5 M = Rp3,6 M.",
        jejakHitung: [
          ["Laba operasi = 94.500 − 90.000 (juta)", "Rp4.500.000.000 (5,0% atas total biaya)"],
          ["Laba wajar = 9,0% × Rp90.000.000.000", "Rp8.100.000.000"],
          ["Koreksi primer = 8,1 M − 4,5 M", "Rp3.600.000.000"]
        ],
        mengapaSalah: {
          A: "Menyesuaikan ke kuartil bawah 7,0% (Rp6,3 M − Rp4,5 M).",
          B: "Mengalikan median dengan biaya produksi saja: laba wajar 9% × Rp80.000.000.000 = Rp7.200.000.000, lalu koreksi Rp7.200.000.000 − Rp4.500.000.000 = Rp2.700.000.000; padahal indikatornya atas total biaya Rp90.000.000.000.",
          D: "Menganggap seluruh laba wajar sebagai koreksi."
        },
        jebakan: "Basis indikator (total biaya atau biaya produksi) harus sama dengan basis pembanding. Median dipakai karena titik yang paling tepat sesuai kesebandingan tidak dapat ditentukan dari data (Pasal 12 ayat (7) PMK 172/2023)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 ayat (6) dan ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C10-088",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Rasa Nusantara Foods membayar royalti merek 5% dari penjualan kepada induknya, Gourmet Brands B.V. (Belanda), pemilik hukum merek yang terdaftar. Fakta pemeriksaan: seluruh pengembangan resep, kampanye pemasaran, pemeliharaan mutu, dan perlindungan merek di Indonesia dilakukan dan dibiayai PT Rasa Nusantara; Gourmet Brands hanya memiliki dua pegawai administrasi dan tidak mengendalikan risiko yang terkait dengan merek. PPh 26 atas royalti telah dipotong 10% sesuai P3B dengan Form DGT sah. Pernyataan yang paling tepat menurut PKKU dalam PMK 172/2023 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Royalti wajar karena kepemilikan hukum merek oleh Gourmet Brands sudah cukup untuk membenarkan seluruh imbal hasil atas merek tersebut, terlepas dari siapa yang menjalankan fungsinya", B: "Kewajaran royalti diuji dengan analisis DEMPE; karena fungsi dan risikonya dijalankan PT Rasa Nusantara, pemilik hukum yang hanya administratif tidak berhak atas seluruh imbal hasil", C: "Kewajaran royalti cukup diuji dengan membandingkan tarif 5% dengan batas tarif royalti P3B Indonesia–Belanda 10%; karena di bawah batas itu, royalti wajar", D: "Royalti tidak dapat dikoreksi karena PPh 26 telah dipotong dengan tarif P3B berdasarkan Form DGT yang sah, sehingga kewajarannya dianggap telah diterima DJP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Imbal hasil atas harta tak berwujud mengikuti pihak yang menjalankan fungsi DEMPE dan mengendalikan risikonya, bukan semata pemilik hukum. Karena fungsi itu dijalankan PT Rasa Nusantara, royalti kepada pemilik hukum yang hanya administratif dapat dikoreksi sebagian atau seluruhnya. DEMPE adalah pengembangan, peningkatan, pemeliharaan, perlindungan, dan eksploitasi harta tak berwujud.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kepemilikan hukum saja tidak membenarkan seluruh imbal hasil atas harta tak berwujud.",
          C: "Tarif P3B adalah batas PPh 26 negara sumber, bukan ukuran kewajaran royalti.",
          D: "Pemotongan PPh 26 tidak menghalangi koreksi biaya royalti bagi pembayar."
        },
        jebakan: "Bedakan pemilik hukum dan pihak yang secara ekonomis menjalankan fungsi atas harta tak berwujud."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 13 ayat (3) dan Pasal 14 PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-089", topik: "C10.6", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C10-08",
      kutipan: "Pasal 9 ayat (2) P3B (disederhanakan): Apabila suatu Negara memasukkan ke dalam laba perusahaan di Negara itu laba yang telah dikenai pajak di Negara lainnya atas perusahaan Negara lainnya, dan laba tersebut seharusnya diperoleh perusahaan Negara pertama seandainya syarat-syarat di antara kedua perusahaan sama dengan syarat di antara perusahaan independen, Negara lainnya akan melakukan penyesuaian yang wajar atas jumlah pajak yang dikenakan atas laba tersebut. Dalam menentukan penyesuaian itu, pejabat berwenang kedua Negara akan saling berkonsultasi bila perlu.",
      stem: "Data untuk soal V-C10-08: PT Hikari Komponen Indonesia (WPDN; tahun buku sama dengan tahun kalender) menjual seluruh produksinya kepada induknya, Hikari Corporation (Jepang). Pada 5 Februari 2026 otoritas pajak Jepang menyampaikan pemberitahuan pertama koreksi harga transfer kepada Hikari Corporation untuk tahun fiskal 2024: harga pembelian dari PT Hikari Indonesia dinilai terlalu tinggi sehingga laba Hikari Corporation dikoreksi naik setara Rp3.000.000.000. PT Hikari Indonesia telah melaporkan dan melunasi PPh Badan 2024, dan tahun itu belum pernah diperiksa DJP. P3B Indonesia–Jepang memuat penyesuaian berkaitan seperti kutipan serta MAP dengan batas 3 tahun sejak pemberitahuan pertama. Untuk menghilangkan pajak berganda, langkah yang tepat bagi PT Hikari Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengajukan keberatan kepada DJP atas SPT Tahunan 2024 paling lambat 5 Mei 2026, yaitu 3 bulan sejak koreksi Jepang",
        B: "Membetulkan sendiri SPT Tahunan 2024 untuk menurunkan laba Rp3.000.000.000 lalu meminta pengembalian kelebihan pembayaran pajaknya",
        C: "Tidak ada upaya di Indonesia; pajak berganda hanya dapat diselesaikan Hikari Corporation melalui keberatan kepada otoritas Jepang",
        D: "Mengajukan MAP kepada DJP untuk penyesuaian berkaitan paling lambat 5 Februari 2029; laba 2024 baru diturunkan setelah persetujuan bersama"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyesuaian berkaitan (Pasal 9 ayat (2) P3B) atas koreksi otoritas mitra dilakukan melalui MAP, yang dapat dimohonkan WPDN kepada DJP dalam batas waktu P3B: 3 tahun sejak 5 Februari 2026, yaitu paling lambat 5 Februari 2029. Penurunan laba dilakukan berdasarkan persetujuan bersama, bukan secara sepihak.",
        jejakHitung: [["Pemberitahuan pertama", "5 Februari 2026"], ["Batas pengajuan MAP (3 tahun)", "5 Februari 2029"]],
        mengapaSalah: {
          A: "Keberatan diajukan atas surat ketetapan atau pemotongan/pemungutan; SPT yang dilaporkan sendiri bukan objek keberatan.",
          B: "Penyesuaian berkaitan tidak dilakukan sepihak melalui pembetulan; jumlahnya ditentukan persetujuan bersama.",
          C: "WPDN dapat memohon MAP kepada DJP untuk penyesuaian berkaitan."
        },
        jebakan: "Koreksi oleh negara mitra diselesaikan lewat MAP, bukan keberatan atau pembetulan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan Pasal 25 P3B" }, { pasal: "PMK 172/2023 (MAP dan penyesuaian berkaitan)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C10-090", topik: "C10.6", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-08",
      stem: "Lanjutan V-C10-08 (PT Hikari Komponen Indonesia; koreksi Jepang atas tahun fiskal 2024 setara Rp3.000.000.000): melalui MAP, otoritas Jepang menurunkan koreksinya menjadi setara Rp2.000.000.000 dan DJP menyetujui penyesuaian berkaitan sebesar jumlah yang sama atas Tahun Pajak 2024 PT Hikari Indonesia. Data SPT 2024 PT Hikari Indonesia: peredaran bruto Rp210 miliar; PKP Rp25.000.000.000; PPh terutang 22% Rp5.500.000.000; kredit PPh 22 impor Rp800.000.000; angsuran PPh 25 Rp4.700.000.000 (SPT nihil). Kelebihan pembayaran PPh Badan 2024 yang timbul setelah DJP menerbitkan keputusan pelaksanaan persetujuan bersama adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp440.000.000",
        B: "Rp660.000.000",
        C: "Rp220.000.000",
        D: "Rp0"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penyesuaian berkaitan menurunkan PKP 2024 sebesar jumlah yang disepakati (Rp2 M): PKP Rp23 M dan PPh Rp5,06 M. Kredit pajak tetap Rp5,5 M sehingga timbul lebih bayar Rp440 juta yang dikembalikan setelah keputusan pelaksanaan persetujuan bersama terbit.",
        jejakHitung: [["PKP setelah penyesuaian = 25 M − 2 M", "Rp23.000.000.000"], ["PPh terutang 22%", "Rp5.060.000.000"], ["Kredit pajak = 800 jt + 4.700 jt", "Rp5.500.000.000"], ["Lebih bayar", "Rp440.000.000"]],
        mengapaSalah: {
          B: "Memakai koreksi awal Jepang Rp3 M, bukan jumlah yang disepakati.",
          C: "Memakai selisih penurunan koreksi Jepang (Rp1 M).",
          D: "Penyesuaian berkaitan hasil MAP dilaksanakan dengan keputusan DJP dan dapat menimbulkan kelebihan pembayaran."
        },
        jebakan: "Yang dipakai adalah jumlah penyesuaian dalam persetujuan bersama."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan Pasal 25 P3B" }, { pasal: "PMK 172/2023 (pelaksanaan persetujuan bersama)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-091", topik: "C10.6", tingkat: ["C"], jenis: "konsep", kesulitan: 1,
      stem: "Ibu Sari Wulandari, WNI yang sejak 2023 menjadi residen Australia, dikenai pajak atas penghasilan usahanya di Australia lebih berat daripada warga negara Australia dalam keadaan yang sama, padahal P3B Indonesia–Australia memuat ketentuan nondiskriminasi. Pada waktu yang sama, PT Kanguru Mining Indonesia meminta penyesuaian berkaitan atas koreksi otoritas Australia terhadap afiliasinya. Pernyataan yang paling tepat mengenai pihak yang dapat memulai MAP menurut PMK 172/2023 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "MAP hanya dapat dimulai oleh WPDN yang telah menerima surat ketetapan pajak dari DJP",
        B: "MAP hanya dapat dimulai oleh DJP; Wajib Pajak cukup menempuh keberatan",
        C: "MAP dapat dimulai atas permohonan WPDN, permohonan WNI yang menjadi residen negara mitra dan mengalami diskriminasi di negara mitra, inisiatif DJP, atau permintaan otoritas pajak negara mitra",
        D: "MAP dapat dimulai atas permohonan WPDN, inisiatif DJP, atau permintaan otoritas pajak negara mitra, tetapi tidak atas permohonan WNI yang mengalami diskriminasi di negara mitra"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "MAP dapat dimulai atas permohonan WPDN, permohonan WNI yang menjadi residen negara mitra dan mengalami perlakuan diskriminatif, inisiatif DJP, atau permintaan otoritas negara mitra; jadi baik Ibu Sari maupun PT Kanguru Mining dapat memohon MAP kepada DJP.",
        jejakHitung: [],
        mengapaSalah: {
          A: "MAP tidak mensyaratkan adanya ketetapan DJP; koreksi otoritas mitra pun dapat menjadi dasar.",
          B: "Wajib Pajak berhak memohon MAP, dan MAP berbeda dari keberatan.",
          D: "Kasus nondiskriminasi WNI justru diajukan kepada otoritas negara kewarganegaraannya (Indonesia)."
        },
        jebakan: "Pemohon MAP tidak hanya WPDN; WNI residen negara mitra dapat mengajukan kasus nondiskriminasi."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pihak yang dapat mengajukan MAP)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 24 dan 25 P3B (nondiskriminasi dan MAP)" }],
      anggaranDetik: 70, verifikasi: "✅"
    },
    {
      id: "C10-092", topik: "C10.6", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Hanil Logam Indonesia menerima SKPKB PPh Badan 2023 yang memuat koreksi harga transfer Rp2.500.000.000 atas pembelian dari afiliasinya di Korea Selatan: pokok Rp550.000.000 dan sanksi bunga Pasal 13 ayat (2) UU KUP Rp178.200.000 (1,80% per bulan × 18 bulan). PT Hanil melunasi seluruh SKPKB Rp728.200.000, tidak mengajukan keberatan, dan menempuh MAP. Persetujuan bersama menurunkan koreksi menjadi Rp1.000.000.000; DJP melaksanakannya dengan keputusan yang mengubah SKPKB, dan sanksi bunga dihitung ulang atas pokok baru dengan tarif dan jumlah bulan yang sama. Data lain: PPh 26 atas pembayaran kepada afiliasi telah disetor dan peredaran bruto 2023 Rp300 miliar. Kelebihan pembayaran yang dikembalikan kepada PT Hanil (sebelum memperhitungkan imbalan bunga, bila ada) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp330.000.000",
        B: "Rp436.920.000",
        C: "Rp106.920.000",
        D: "Rp728.200.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Pokok baru = 22% × Rp1 M = Rp220 juta; sanksi baru = Rp220 jt × 1,80% × 18 = Rp71,28 juta; kewajiban setelah MAP Rp291,28 juta. Kelebihan = Rp728,2 jt − Rp291,28 jt = Rp436,92 juta (pokok Rp330 jt + sanksi Rp106,92 jt).",
        jejakHitung: [["Pokok baru = 22% × Rp1.000.000.000", "Rp220.000.000"], ["Sanksi baru = Rp220.000.000 × 1,80% × 18", "Rp71.280.000"], ["Kewajiban setelah MAP", "Rp291.280.000"], ["Kelebihan = Rp728.200.000 − Rp291.280.000", "Rp436.920.000"]],
        mengapaSalah: {
          A: "Hanya mengembalikan selisih pokok; sanksi ikut turun mengikuti pokok baru.",
          C: "Hanya selisih sanksi.",
          D: "MAP mengurangi, tidak menghapus seluruh koreksi."
        },
        jebakan: "Sanksi administrasi mengikuti pokok yang baru setelah persetujuan bersama dilaksanakan."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pelaksanaan persetujuan bersama)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 13 ayat (2) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-093", topik: "C10.7", tingkat: ["C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C10-09",
      kutipan: "Pasal 18 ayat (3a) UU PPh (parafrase): Direktur Jenderal Pajak berwenang melakukan perjanjian dengan Wajib Pajak dan bekerja sama dengan otoritas pajak negara lain untuk menentukan harga transaksi antarpihak yang mempunyai hubungan istimewa, yang berlaku selama suatu periode tertentu, mengawasi pelaksanaannya, serta melakukan renegosiasi setelah periode tertentu tersebut berakhir.",
      stem: "Data untuk soal V-C10-09: PT Seojin Kosmetik Indonesia (85% sahamnya dimiliki Seojin Beauty Co., Ltd., Korea Selatan) membayar royalti merek dan formula kepada induknya. Perusahaan memperoleh APA bilateral (disepakati DJP dan otoritas pajak Korea Selatan melalui mekanisme MAP) untuk Tahun Pajak 2027–2031 dengan ketentuan: tarif royalti wajar paling tinggi 3% dari penjualan neto; asumsi kritis: fungsi pemasaran tetap dijalankan PT Seojin; dan kelebihan royalti di atas 3% dikoreksi fiskal positif dalam SPT tahun bersangkutan. Manajemen ingin kepastian yang sama untuk Tahun Pajak 2032–2036. Berdasarkan kutipan, langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak perlu langkah apa pun karena APA berlaku otomatis sampai ada perubahan asumsi kritis atau pencabutan oleh DJP",
        B: "Cukup menyampaikan laporan tahunan pelaksanaan APA 2031, yang dengan sendirinya memperpanjang APA lima tahun berikutnya",
        C: "Mengajukan MAP setiap tahun mulai 2032 untuk menegaskan kembali tarif royalti paling tinggi 3% dari penjualan neto",
        D: "Mengajukan permohonan APA baru untuk periode 2032–2036 sebelum periode itu dimulai, karena APA hanya berlaku untuk periode tertentu"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 18 ayat (3a) menyebut APA berlaku untuk periode tertentu dan dirundingkan kembali setelah periode berakhir. APA 2027–2031 tidak otomatis berlanjut; PT Seojin perlu mengajukan permohonan APA baru untuk 2032–2036 sebelum tahun pajak pertama periode itu dimulai.",
        jejakHitung: [],
        mengapaSalah: {
          A: "APA terikat periode (paling lama 5 tahun pajak), bukan berlaku tanpa batas.",
          B: "Laporan tahunan adalah kewajiban pelaksanaan, bukan sarana perpanjangan.",
          C: "MAP tahunan bukan instrumen kepastian harga transfer ke depan; instrumennya APA."
        },
        jebakan: "APA tidak memperpanjang dirinya sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (APA)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-094", topik: "C10.7", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-C10-09",
      stem: "Lanjutan V-C10-09 (APA bilateral PT Seojin Kosmetik Indonesia 2027–2031: royalti wajar paling tinggi 3% dari penjualan neto; kelebihan dikoreksi fiskal positif): realisasi Tahun Pajak 2028 menunjukkan penjualan neto Rp180.000.000.000 dan royalti yang dibayar kepada Seojin Beauty 4,5% dari penjualan neto (Rp8.100.000.000); atas royalti itu telah dipotong PPh 26 sesuai batas tarif royalti P3B 15% (Rp1.215.000.000). Laba sebelum pajak 2028 Rp12.000.000.000 dan asumsi kritis terpenuhi. Koreksi fiskal positif atas royalti dan tambahan PPh badan 2028 menurut klausul APA adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi Rp2.700.000.000; tambahan PPh badan Rp594.000.000",
        B: "Koreksi Rp8.100.000.000; tambahan PPh badan Rp1.782.000.000",
        C: "Koreksi Rp2.700.000.000; tambahan PPh badan Rp405.000.000",
        D: "Koreksi Rp5.400.000.000; tambahan PPh badan Rp1.188.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Hanya kelebihan di atas 3% yang dikoreksi: Rp8,1 M − Rp5,4 M = Rp2,7 M; tambahan PPh badan 22% = Rp594 juta. Tarif PPh 26 15% adalah pajak penerima royalti, bukan tarif koreksi bagi pembayar.",
        jejakHitung: [["Batas royalti = 3% × Rp180.000.000.000", "Rp5.400.000.000"], ["Royalti dibayar", "Rp8.100.000.000"], ["Koreksi = 8,1 M − 5,4 M", "Rp2.700.000.000"], ["Tambahan PPh = 22% × Rp2.700.000.000", "Rp594.000.000"]],
        mengapaSalah: {
          B: "Seluruh royalti dikoreksi, padahal APA mengakui royalti sampai 3%.",
          C: "Memakai tarif PPh 26 15%, bukan tarif PPh badan 22%.",
          D: "Mengoreksi bagian yang justru wajar menurut APA (3% × penjualan)."
        },
        jebakan: "Koreksi APA hanya atas bagian di luar kriteria yang disepakati."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pelaksanaan APA)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-095", topik: "C10.7", tingkat: ["C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"], kasusId: "V-C10-09",
      stem: "Lanjutan V-C10-09: DJP memeriksa SPT PPh Badan 2029 PT Seojin Kosmetik Indonesia. Royalti 2029 tercatat 2,8% dari penjualan neto, fungsi pemasaran tetap dijalankan PT Seojin, dan laporan tahunan pelaksanaan APA telah disampaikan. Pemeriksa menemukan pembanding independen baru dengan tarif royalti median 2,2%. Pernyataan yang paling tepat tentang pemeriksaan atas transaksi royalti tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Pemeriksa dapat menguji ulang kewajaran royalti dengan pembanding baru dan mengoreksinya ke median 2,2%, karena data pembanding baru lebih mutakhir",
        B: "Pemeriksaan terbatas pada kepatuhan terhadap APA dan asumsi kritisnya; karena royalti 2,8% dalam batas 3% dan asumsi kritis terpenuhi, royalti tidak dikoreksi",
        C: "Transaksi royalti sama sekali tidak dapat diperiksa selama periode APA, termasuk pemenuhan asumsi kritisnya, karena APA mengikat DJP",
        D: "Pemeriksa wajib memperoleh persetujuan otoritas pajak Korea Selatan sebelum memeriksa transaksi royalti yang dicakup APA bilateral"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Selama periode APA, pemeriksaan atas transaksi yang dicakup hanya menguji kepatuhan terhadap APA dan terpenuhinya asumsi kritis. Royalti 2,8% berada dalam kriteria (≤ 3%) dan asumsi kritis terpenuhi, sehingga tidak ada koreksi meskipun ada pembanding baru.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pengujian ulang kewajaran dengan pembanding baru meniadakan kepastian APA.",
          C: "Kepatuhan terhadap APA dan asumsi kritis tetap dapat diperiksa.",
          D: "Pemeriksaan domestik tidak memerlukan persetujuan otoritas mitra."
        },
        jebakan: "APA membatasi apa yang diuji, bukan meniadakan pemeriksaan."
      },
      dasarHukum: [{ pasal: "PMK 172/2023 (pemeriksaan atas WP yang memiliki APA)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "C10-096", topik: "C10.7", tingkat: ["C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Lotus Tekstil memiliki APA unilateral dengan DJP untuk Tahun Pajak 2026–2030 atas penjualan benang kepada afiliasinya di Vietnam. Pada 2027 otoritas pajak Vietnam mengoreksi laba afiliasi tersebut dengan menyatakan harga pembelian dari PT Lotus terlalu tinggi, sehingga laba yang sama dipajaki di dua negara. Instrumen yang tepat untuk menghilangkan pajak berganda tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keberatan kepada DJP atas APA unilateral yang telah disepakati dengan PT Lotus",
        B: "Pembetulan SPT PT Lotus untuk menurunkan harga jual sesuai koreksi otoritas Vietnam",
        C: "MAP berdasarkan Pasal 25 P3B Indonesia–Vietnam, karena APA unilateral tidak mengikat otoritas Vietnam",
        D: "Tidak ada; APA unilateral otomatis mengikat otoritas Vietnam sehingga koreksi Vietnam batal demi hukum"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "APA unilateral hanya mengikat DJP dan Wajib Pajak. Pajak berganda akibat koreksi otoritas mitra diselesaikan melalui MAP berdasarkan Pasal 25 P3B.",
        jejakHitung: [],
        mengapaSalah: {
          A: "APA bukan surat ketetapan yang dapat diajukan keberatan.",
          B: "Pembetulan sepihak tidak menghilangkan pajak berganda dan bertentangan dengan APA yang mengikat DJP.",
          D: "Hanya APA bilateral/multilateral yang melibatkan otoritas mitra."
        },
        jebakan: "Bila ingin kepastian dua negara, pilih APA bilateral sejak awal."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 25 P3B" }, { pasal: "PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 70, verifikasi: "✅"
    },
    {
      id: "C10-097", topik: "C10.8", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-C10-10",
      stem: "Data untuk soal V-C10-10: Bank Samudra Raya (bank umum di bawah pengawasan OJK; Lembaga Simpanan) adalah lembaga keuangan pelapor. Per 31 Desember 2026 tercatat rekening simpanan nasabah orang pribadi berikut: (1) Ms. Akiko Sato, residen Jepang, tabungan yang dibuka Februari 2026 setara Rp450.000.000; (2) Mr. Daniel Lim, residen Singapura, deposito yang dibuka Januari 2026 senilai Rp800.000.000; (3) Budi Santoso, residen Indonesia, tabungan Rp700.000.000 dan giro Rp400.000.000; (4) Citra Lestari, residen Indonesia, deposito Rp900.000.000 di Bank Samudra Raya dan Rp600.000.000 di bank lain; (5) Eko Prasetyo, residen Indonesia, deposito Rp1.500.000.000. Jepang dan Singapura termasuk yurisdiksi tujuan pelaporan CRS bagi Indonesia, dan seluruh nasabah telah menyerahkan self-certification. Menurut PMK 108/2025, rekening yang wajib dimasukkan ke laporan atas data tahun 2026 untuk pertukaran informasi internasional (CRS) adalah milik ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak ada, karena saldo rekening Akiko dan Daniel di bawah ambang Rp1 miliar",
        B: "Akiko, Daniel, Budi, Citra, dan Eko",
        C: "Akiko, Daniel, Budi, dan Eko, karena laporan CRS juga memuat rekening orang pribadi dalam negeri yang saldo agregatnya paling sedikit Rp1 miliar",
        D: "Akiko dan Daniel"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Laporan CRS memuat rekening milik residen yurisdiksi tujuan pelaporan: Akiko dan Daniel. Ambang Rp1 miliar hanya berlaku untuk laporan domestik rekening orang pribadi di Lembaga Simpanan, sehingga rekening Akiko (Rp450 juta) dan Daniel (Rp800 juta) tetap masuk laporan CRS. Nasabah residen Indonesia (Budi, Citra, Eko) tidak dipertukarkan; mereka diuji terhadap ambang laporan domestik.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ambang Rp1 miliar adalah ketentuan laporan domestik orang pribadi di Lembaga Simpanan, bukan ambang CRS; rekening Akiko dan Daniel tetap dilaporkan walaupun saldonya di bawah Rp1 miliar.",
          B: "Nasabah residen Indonesia tidak dipertukarkan ke yurisdiksi lain; mereka masuk (atau tidak masuk) laporan domestik.",
          C: "Laporan CRS hanya memuat pemegang rekening residen yurisdiksi tujuan pelaporan; Budi dan Eko masuk bagian laporan domestik, bukan CRS."
        },
        jebakan: "Pisahkan dua pengujian: laporan CRS untuk residen yurisdiksi tujuan pelaporan (tanpa ambang Rp1 miliar) dan laporan domestik untuk rekening orang pribadi di Lembaga Simpanan (ambang Rp1 miliar per lembaga)."
      },
      dasarHukum: [{ pasal: "PMK 108/2025", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017 Pasal 2", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-098",
      topik: "C10.8",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-C10-10",
      stem: "Lanjutan V-C10-10 (Bank Samudra Raya, bank umum di bawah pengawasan OJK; saldo per 31 Desember 2026: Akiko, residen Jepang, Rp450 juta pada tabungan yang dibuka Februari 2026; Daniel, residen Singapura, Rp800 juta pada deposito yang dibuka Januari 2026; Budi Rp700 juta + Rp400 juta; Citra Rp900 juta di bank ini dan Rp600 juta di bank lain; Eko Rp1,5 miliar; rekening Budi, Citra, dan Eko sudah dibuka sebelum 2026). Bank menyiapkan dua laporan otomatis atas data tahun 2026: laporan CRS untuk pertukaran informasi internasional dan laporan domestik untuk kepentingan perpajakan dalam negeri. Pernyataan yang paling tepat mengenai isi dan dasar kedua laporan tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Menurut PMK 108/2025, bagian CRS memuat rekening Akiko dan Daniel, sedangkan bagian domestik memuat rekening Budi dan Eko (saldo agregat masing-masing pada Bank Samudra Raya paling sedikit Rp1 miliar)", B: "Menurut PMK 108/2025, bagian CRS memuat rekening Akiko dan Daniel, sedangkan bagian domestik memuat rekening Budi, Citra, dan Eko (saldo agregat masing-masing di seluruh bank paling sedikit Rp1 miliar)", C: "Karena rekening Budi, Citra, dan Eko dibuka sebelum 2026, laporan atas data tahun 2026 untuk rekening tersebut masih disusun menurut PMK 70/PMK.03/2017; hanya rekening Akiko dan Daniel yang dilaporkan menurut PMK 108/2025", D: "Menurut PMK 108/2025, bagian CRS memuat rekening Akiko dan Daniel, sedangkan bagian domestik memuat rekening Eko saja (saldo satu rekening paling sedikit Rp1 miliar)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "angka-usang", D: "salah-hitung" },
      pembahasan: {
        inti: "Data tahun 2026 (disampaikan pada 2027) dilaporkan menurut PMK 108/2025, termasuk untuk rekening yang dibuka sebelum 2026; rezim PMK 70/PMK.03/2017 hanya untuk identifikasi atas informasi yang tercatat sampai 31 Desember 2025. Laporan domestik memuat rekening orang pribadi di Lembaga Simpanan dengan saldo agregat pada lembaga yang sama paling sedikit Rp1 miliar: Budi (Rp1,1 miliar) dan Eko (Rp1,5 miliar); Citra hanya Rp900 juta di bank ini karena saldo di bank lain tidak diagregasi. Laporan CRS memuat Akiko dan Daniel; saldo keduanya (Rp450 juta dan Rp800 juta) di bawah Rp1 miliar, tetapi laporan CRS tidak memakai ambang Rp1 miliar. Salurannya berbeda: laporan CRS bank disampaikan kepada OJK paling lambat 1 Agustus 2027, yang jatuh pada hari Minggu sehingga bergeser ke Senin, 2 Agustus 2027, lalu OJK meneruskannya kepada DJP paling lambat 31 Agustus 2027; laporan domestik disampaikan bank langsung kepada DJP melalui Portal Wajib Pajak paling lambat 30 April 2027.",
        jejakHitung: [
          ["Budi = 700 jt + 400 jt", "Rp1.100.000.000 ≥ Rp1 M"],
          ["Citra pada Bank Samudra Raya", "Rp900.000.000 < Rp1 M"],
          ["Eko", "Rp1.500.000.000 ≥ Rp1 M"],
          ["Saluran", "CRS: OJK paling lambat Senin, 2 Agustus 2027 (1 Agustus hari Minggu) → DJP 31 Agustus 2027; domestik: langsung DJP 30 April 2027"]
        ],
        mengapaSalah: {
          B: "Agregasi saldo dilakukan per lembaga yang sama, bukan di seluruh bank.",
          C: "Rezim lama hanya untuk identifikasi atas informasi yang tercatat sampai 31 Desember 2025 dan laporan yang disampaikan sampai 30 September 2026; laporan atas data tahun 2026 seluruhnya mengikuti PMK 108/2025.",
          D: "Saldo beberapa rekening orang pribadi yang sama pada satu lembaga dijumlahkan, sehingga Budi juga dilaporkan."
        },
        jebakan: "Agregasi per lembaga, pemisahan laporan CRS dan domestik (isi dan salurannya berbeda), serta rezim menurut tahun data (data 2026 memakai PMK 108/2025)."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 Pasal 11 ayat (5) sampai (7), Pasal 35 ayat (7) dan ayat (8) huruf a angka 1, Pasal 36, dan Pasal 37", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017 Pasal 2", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-099", topik: "C10.8", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 26 ayat (3) dan (5) P3B (Model OECD, disederhanakan): Ketentuan pertukaran informasi tidak mewajibkan suatu Negara memberikan informasi yang akan mengungkapkan rahasia dagang, usaha, industri, komersial, atau profesi, atau yang pengungkapannya bertentangan dengan kebijakan umum. Namun, ketentuan tersebut tidak dapat ditafsirkan sebagai izin bagi suatu Negara untuk menolak memberikan informasi semata-mata karena informasi itu dipegang oleh bank, lembaga keuangan lain, nominee, atau orang yang bertindak sebagai agen atau fidusia.",
      stem: "Dalam pemeriksaan PT Cahaya Mineral, DJP mengirim permintaan informasi kepada otoritas pajak negara mitra P3B atas dua hal: (1) mutasi rekening bank atas nama Bright Star Ltd., nominee yang diduga menampung hasil penjualan PT Cahaya Mineral di negara mitra; dan (2) rincian formula proses pemurnian yang dirahasiakan oleh pembeli independen di negara mitra, yang tidak diperlukan untuk menghitung harga jual. Berdasarkan kutipan, tanggapan otoritas mitra yang sesuai dengan P3B adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Otoritas mitra dapat menolak kedua permintaan karena informasi bank dan rahasia dagang sama-sama dilindungi oleh P3B",
        B: "Otoritas mitra tidak dapat menolak (1) semata-mata karena informasi dipegang bank atau nominee, tetapi dapat menolak (2) karena rahasia dagang",
        C: "Otoritas mitra wajib memenuhi kedua permintaan karena P3B mewajibkan pertukaran seluruh informasi yang diminta tanpa pengecualian",
        D: "Otoritas mitra dapat menolak permintaan (1) karena rahasia bank, tetapi wajib memenuhi permintaan (2) karena relevan bagi pemeriksaan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 26 ayat (5) P3B melarang penolakan semata-mata karena informasi dipegang bank atau nominee, sehingga permintaan (1) harus dipenuhi. Pasal 26 ayat (3) membolehkan penolakan atas informasi yang mengungkapkan rahasia dagang, seperti formula proses milik pihak ketiga pada permintaan (2).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Rahasia bank bukan alasan penolakan yang sah menurut ayat (5).",
          C: "Ayat (3) memberi pengecualian, antara lain rahasia dagang dan kebijakan umum.",
          D: "Kebalikan dari kutipan: rahasia bank tidak boleh menjadi alasan, rahasia dagang boleh."
        },
        jebakan: "Rahasia bank tidak melindungi; rahasia dagang dapat melindungi."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (3) dan (5) P3B" }, { pasal: "UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-100", topik: "C10.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Laras Wulandari (WNI, subjek pajak dalam negeri, pegawai) menyampaikan SPT Tahunan PPh Orang Pribadi 2024 pada 20 Maret 2025 dengan status nihil; PKP-nya Rp300.000.000. Ia lupa melaporkan bunga deposito di bank Singapura setara Rp80.000.000 (Singapura tidak memotong pajak atas bunga itu). Data tersebut diterima DJP melalui pertukaran informasi otomatis (CRS), dan pada Agustus 2026 KPP mengirim SP2DK. Ibu Laras belum diperiksa, lalu membetulkan SPT 2024 dan melunasi kekurangan PPh pada 15 Oktober 2026. Anggap tarif bunga Pasal 8 ayat (2) UU KUP yang berlaku pada awal penghitungan 0,80% per bulan. Data lain: saldo deposito setara Rp2.400.000.000. Sanksi bunga atas pembetulan tersebut, sebelum memperhitungkan fasilitas pengurangan/penghapusan sanksi menurut PMK 71/2026, adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp3.648.000",
        B: "Rp2.880.000",
        C: "Rp7.600.000",
        D: "Rp3.040.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "angka-usang" },
      pembahasan: {
        inti: "SP2DK bukan pemeriksaan, sehingga pembetulan Pasal 8 ayat (1) masih dapat dilakukan dengan sanksi bunga Pasal 8 ayat (2). PKP naik dari Rp300 juta menjadi Rp380 juta, seluruhnya di lapisan 25%, sehingga kurang bayar Rp20 juta. Bunga dihitung sejak jatuh tempo pembayaran PPh 29 (batas SPT 31 Maret 2025, yang bertepatan dengan libur Idulfitri sehingga bergeser ke hari kerja berikutnya, 8 April 2025) sampai 15 Oktober 2026 = 18 bulan lebih beberapa hari, dihitung penuh 19 bulan (dari 31 Maret 2025 pun tetap 19 bulan): Rp20.000.000 × 0,80% × 19 = Rp3.040.000. Data rekening tahun 2024 itu dipertukarkan pada 2025, sebelum PMK 108/2025 berlaku; penerimaannya oleh DJP berdasarkan Konvensi MAC dan perjanjian otoritas berwenang dengan Singapura, sedangkan PMK 108/2025 mengatur kewajiban lembaga keuangan di Indonesia.",
        jejakHitung: [["Kurang bayar = 25% × Rp80.000.000", "Rp20.000.000"], ["Jangka waktu 8 April 2025 (hari kerja setelah libur Idulfitri) – 15 Oktober 2026", "18 bulan 7 hari → 19 bulan"], ["Bunga = Rp20.000.000 × 0,80% × 19", "Rp3.040.000"]],
        mengapaSalah: {
          A: "Memakai lapisan 30%, padahal PKP Rp380 juta masih di lapisan 25%.",
          B: "Bagian bulan diabaikan; bagian dari bulan dihitung satu bulan penuh.",
          C: "Memakai bunga 2% per bulan yang berlaku sebelum UU Cipta Kerja (sejak November 2020 diganti tarif bunga KMK bulanan)."
        },
        jebakan: "Bunga Pasal 8 ayat (2) dihitung sejak batas waktu pembayaran SPT, bukan sejak tanggal SPT disampaikan, dan bagian bulan dihitung penuh."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) dan (2) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Konvensi MAC (Perpres 159/2014) dan perjanjian otoritas berwenang CRS dengan Singapura (sumber data AEoI tahun 2024)" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-101", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Fajar Kemasindo (bukan perseroan terbuka) membagikan dividen tunai Rp10.000.000.000 pada Juni 2026 kepada: Harbour Rich Ltd. (Hong Kong, 30%; beneficial owner; Form DGT sah terekam sebelum pembayaran; batas tarif dividen P3B 5% untuk kepemilikan paling sedikit 25%, selainnya 10%); Lion Gate Pte. Ltd. (Singapura, 15%; beneficial owner; Form DGT sah; batas tarif 10% untuk kepemilikan paling sedikit 25%, selainnya 15%); Mr. John Carter (orang pribadi residen Amerika Serikat, 5%; tidak menyerahkan Form DGT; batas tarif P3B 15%); PT Fajar Investama (badan dalam negeri, 40%); dan Ny. Ratna Dewi (orang pribadi dalam negeri, 10%; dividen tidak diinvestasikan). Jumlah PPh Pasal 26 yang wajib dipotong PT Fajar Kemasindo adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp400.000.000",
        B: "Rp450.000.000",
        C: "Rp475.000.000",
        D: "Rp575.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Harbour Rich (30% ≥ 25%): 5% × Rp3 M = Rp150 jt. Lion Gate (15% < 25%): 15% × Rp1,5 M = Rp225 jt. John Carter tanpa Form DGT: 20% × Rp500 jt = Rp100 jt. Total PPh 26 Rp475 jt. Dividen kepada PT Fajar Investama bukan objek, dan dividen Ny. Ratna dikenai PPh final 10% (Pasal 17 ayat (2c)), bukan PPh 26.",
        jejakHitung: [["Harbour Rich = 5% × Rp3.000.000.000", "Rp150.000.000"], ["Lion Gate = 15% × Rp1.500.000.000", "Rp225.000.000"], ["John Carter (tanpa SKD) = 20% × Rp500.000.000", "Rp100.000.000"], ["Total PPh 26", "Rp475.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif 10% untuk Lion Gate, padahal kepemilikan 15% di bawah ambang 25%.",
          B: "Memakai tarif P3B 15% untuk John Carter yang tidak menyerahkan Form DGT.",
          D: "Memasukkan PPh final 10% atas dividen Ny. Ratna (orang pribadi dalam negeri) sebagai PPh 26."
        },
        jebakan: "Cocokkan persentase kepemilikan dengan ambang tarif P3B dan periksa SKD per penerima."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 P3B (dividen)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 4 ayat (3) huruf f dan Pasal 17 ayat (2c) UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-102",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PMK 81/2024 Pasal 134: (1) Dalam hal terdapat kelebihan pemotongan atau pemungutan Pajak Penghasilan terhadap subjek pajak luar negeri sebagaimana dimaksud dalam Pasal 133 [antara lain karena keterlambatan pemenuhan persyaratan administratif untuk menerapkan P3B setelah terjadi pemotongan], pajak yang seharusnya tidak dipotong atau tidak dipungut tersebut dapat diminta kembali oleh Wajib Pajak pemotong atau pemungut pajak dengan mengajukan permohonan. (2) Dalam hal Wajib Pajak yang melakukan pemotongan atau pemungutan sebagaimana dimaksud pada ayat (1): a. tidak dapat ditemukan yang dapat berupa pembubaran usaha; atau b. tidak dapat melakukan pembetulan Surat Pemberitahuan, permohonan diajukan oleh subjek pajak luar negeri.",
      stem: "Kumo Animation K.K. (Jepang; beneficial owner; batas tarif royalti P3B 10%) menerima royalti Rp700.000.000 dari PT Layar Kreatif pada 18 Agustus 2026. Form DGT format PMK 112/2025 baru terekam di Coretax pada 2 September 2026, sehingga PT Layar Kreatif memotong PPh Pasal 26 20% (Rp140.000.000), menyetornya pada 15 September 2026, dan menerbitkan BPNR Masa Agustus 2026. PT Layar Kreatif masih beroperasi dan SPT Masa PPh Unifikasi Agustus 2026-nya belum diperiksa. Berdasarkan kutipan, langkah dan jumlah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Layar Kreatif, dengan surat kuasa dari Kumo Animation, mengajukan permohonan pengembalian pajak yang seharusnya tidak terutang sebesar Rp70.000.000 kepada DJP", B: "PT Layar Kreatif membetulkan SPT Masa PPh Unifikasi Agustus 2026 menjadi tarif 10% karena Form DGT terekam sebelum batas penyampaian SPT Masa", C: "Tidak ada pengembalian sama sekali karena PPh 26 bersifat final dan pemotongannya sudah benar", D: "Kumo Animation sendiri mengajukan permohonan pengembalian Rp70.000.000 karena hanya pihak yang dipotong yang berhak memohon" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Form DGT terekam setelah pembayaran, sehingga pemotongan 20% sudah benar (PMK 112/2025 Pasal 10 ayat (4)). Keterlambatan itu termasuk kelebihan pemotongan terkait P3B (PMK 81/2024 Pasal 133 huruf b), yang menurut Pasal 134 ayat (1) diminta kembali oleh Wajib Pajak pemotong, yaitu PT Layar Kreatif, dengan permohonan yang dilampiri surat kuasa dari Kumo (Pasal 135 ayat (2) huruf d). Jumlahnya (20% − 10%) × Rp700.000.000 = Rp70.000.000.",
        jejakHitung: [
          ["Dipotong 20% × Rp700.000.000", "Rp140.000.000"],
          ["Seharusnya menurut P3B 10% × Rp700.000.000", "Rp70.000.000"],
          ["Dapat dimintakan kembali", "Rp70.000.000"],
          ["Pemohon", "PT Layar Kreatif (pemotong) dengan surat kuasa Kumo; Kumo sendiri hanya bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT"]
        ],
        mengapaSalah: {
          B: "Logika PER-25/PJ/2018 (cukup sebelum batas SPT Masa) tidak berlaku lagi; pemotongan 20% sudah benar dan kelebihannya dipulihkan melalui permohonan pengembalian, bukan dengan mengubah tarif dalam pembetulan SPT Masa.",
          C: "Sifat final tidak menghalangi pengembalian kelebihan pemotongan terkait P3B (PMK 81/2024 Pasal 133 dan Pasal 134); pemotongan 20% memang benar, tetapi selisih di atas tarif P3B tetap dapat diminta kembali.",
          D: "Jumlahnya benar, tetapi pemohonnya pemotong (Pasal 134 ayat (1)); subjek pajak luar negeri baru mengajukan sendiri bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT (Pasal 134 ayat (2)), dan stem menyatakan PT Layar Kreatif masih beroperasi serta SPT-nya belum diperiksa."
        },
        jebakan: "Yang dikembalikan hanya selisih di atas tarif P3B, dan untuk kelebihan potong terkait P3B pemohonnya pemotong dengan surat kuasa WPLN, bukan WPLN sendiri."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 133 huruf b dan Pasal 134 ayat (1) dan ayat (2)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 Pasal 135 ayat (2) (lampiran permohonan, termasuk surat kuasa)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 112/2025 Pasal 10 ayat (4) dan Pasal 15", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-103",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "BPNR.a.2",
      stem: "Pada September 2026 admin pajak PT Layar Kreatif membuat bukti potong di Coretax atas royalti Rp500.000.000 kepada Kumo Animation K.K. (Jepang; beneficial owner; Form DGT sah terekam sebelum pembayaran; batas tarif royalti P3B 10%). Isian bukti potong yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "BPPU; identitas NPWP 16 digit; tanpa fasilitas; tarif 20%; PPh Rp100.000.000", B: "BPNR; identitas TIN negara domisili; objek PPh Pasal 26 royalti; fasilitas SKD WPLN; tarif 10%; PPh Rp50.000.000", C: "BPNR; identitas TIN negara domisili; objek PPh Pasal 26 royalti; tanpa fasilitas; tarif 20%; PPh Rp100.000.000", D: "BP21; identitas TIN negara domisili; fasilitas SKD WPLN; tarif 10%; PPh Rp50.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penerima adalah badan luar negeri sehingga bukti potongnya BPNR. Form DGT sah terekam sebelum pembayaran, jadi fasilitas SKD WPLN dipilih dan tarif P3B 10% berlaku: 10% × Rp500.000.000 = Rp50.000.000.",
        jejakHitung: [
          ["Jenis bukti potong", "Penerima badan luar negeri (Jepang) → BPNR, identitas TIN negara domisili"],
          ["Fasilitas dan tarif", "Form DGT sah terekam sebelum pembayaran → fasilitas SKD WPLN, tarif P3B royalti 10%"],
          ["PPh Pasal 26 = 10% × Rp500.000.000", "Rp50.000.000"]
        ],
        mengapaSalah: {
          A: "BPPU untuk penerima dalam negeri; WPLN tidak diidentifikasi dengan NPWP.",
          C: "Mengabaikan Form DGT sah yang telah terekam sehingga memakai 20%.",
          D: "BP21 untuk PPh 21 orang pribadi dalam negeri, bukan PPh 26 badan luar negeri."
        },
        jebakan: "BPNR + fasilitas SKD = tarif P3B; tanpa fasilitas = 20%."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 Pasal 18 ayat (1) huruf b dan ayat (2); Lampiran huruf B (petunjuk pengisian BPNR)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 112/2025 Pasal 10 ayat (3) huruf d", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    /* ---------- Tambahan: butir laporan peserta lulus UKP Tingkat C, 28 Oktober 2026 (docs/PENGALAMAN-UJIAN.md): BUT dalam P3B, transfer pricing, kurs KMK vs kurs pembukuan pada PPh 26 ---------- */
    {
      id: "C10-104", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C10-11",
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 5 ayat (3) huruf b P3B Indonesia–negara mitra (disederhanakan untuk soal): pemberian jasa, termasuk jasa supervisi dan konsultansi, oleh suatu perusahaan melalui pegawai atau personel lain merupakan bentuk usaha tetap hanya jika kegiatan tersebut berlangsung di Indonesia untuk proyek yang sama atau proyek yang berhubungan selama suatu masa atau masa-masa yang berjumlah lebih dari 120 hari dalam jangka waktu 12 bulan.",
      stem: "Data untuk soal V-C10-11: Brightwell Process Engineering Ltd. (residen negara mitra P3B; beneficial owner; Form DGT sah terekam di Coretax; tidak memiliki kantor di Indonesia) mengirim insinyur untuk jasa supervisi dan commissioning pabrik PT Surya Petrokimia di Cilegon berdasarkan satu kontrak. Kehadiran personel untuk kontrak itu: 15 Oktober–30 November 2025, 5 Januari–28 Februari 2026, dan 1–20 Juni 2026. Pada 3–14 Agustus 2026 dua insinyur lain memberi pelatihan perangkat lunak kepada PT Kencana Plastik berdasarkan kontrak terpisah yang tidak berhubungan. Nilai kontrak PT Surya USD1.100.000; kurs KMK pada tanggal penandatanganan kontrak Rp16.150. Berdasarkan kutipan, pernyataan yang paling tepat mengenai status Brightwell adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Bukan BUT, karena kehadiran per tahun kalender hanya 47 hari (2025) dan 75 hari (2026), masing-masing di bawah 120 hari",
        B: "BUT jasa sejak hari ke-61 kehadiran, karena Pasal 2 ayat (5) UU PPh memakai batas 60 hari",
        C: "BUT jasa, karena kehadiran mencapai 134 hari termasuk pelatihan di PT Kencana Plastik",
        D: "BUT jasa, karena kehadiran untuk proyek PT Surya berjumlah 122 hari dalam 12 bulan sejak 15 Oktober 2025"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Time test P3B dihitung dalam jangka 12 bulan bergulir untuk proyek yang sama atau berhubungan, bukan per tahun kalender. Jendela 15 Oktober 2025–14 Oktober 2026 memuat 47 + 55 + 20 = 122 hari untuk kontrak PT Surya, lebih dari 120 hari, sehingga Brightwell memiliki BUT jasa; time test P3B mengesampingkan batas 60 hari UU PPh.",
        jejakHitung: [
          ["15 Oktober–30 November 2025", "17 + 30 = 47 hari"],
          ["5 Januari–28 Februari 2026", "27 + 28 = 55 hari"],
          ["1–20 Juni 2026", "20 hari"],
          ["Jumlah dalam 12 bulan sejak 15 Oktober 2025", "122 hari > 120 hari → BUT jasa"],
          ["Pelatihan PT Kencana (3–14 Agustus 2026)", "12 hari, proyek tidak berhubungan → tidak dihitung"]
        ],
        mengapaSalah: {
          A: "Kutipan memakai jangka 12 bulan (bergulir), bukan tahun kalender; memecah per tahun membuat 122 hari tampak di bawah batas.",
          B: "Brightwell berhak atas P3B, sehingga time test 120 hari dalam P3B yang berlaku, bukan 60 hari Pasal 2 ayat (5) UU PPh (Pasal 32A UU PPh).",
          C: "Kutipan hanya menjumlahkan hari untuk proyek yang sama atau berhubungan; pelatihan untuk PT Kencana adalah kontrak lain yang tidak berhubungan."
        },
        jebakan: "Jendela 12 bulan dapat melintasi dua tahun kalender; nilai kontrak dan kurs tidak relevan untuk time test."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) huruf b P3B (BUT jasa)" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-105", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-11",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan V-C10-11 (Brightwell Process Engineering Ltd. memiliki BUT jasa di Indonesia; P3B mengikuti Pasal 7 Model OECD tanpa force of attraction dan membatasi branch profit tax 10%). Data Tahun Pajak 2026 dalam rupiah: fee supervisi dan commissioning dari PT Surya Rp9.600.000.000; gaji dan tunjangan insinyur di Indonesia Rp3.200.000.000; akomodasi dan perjalanan Rp800.000.000; sewa peralatan uji Rp400.000.000; alokasi wajar biaya eksekutif dan administrasi umum kantor pusat untuk BUT Rp600.000.000; royalti internal atas perangkat lunak kantor pusat Rp500.000.000 dan bunga internal atas dana kantor pusat Rp300.000.000 yang dibebankan kantor pusat kepada BUT. Kantor pusat juga memperoleh Rp2.000.000.000 dari jasa desain yang seluruhnya dikerjakan di luar negeri untuk PT Kencana Plastik. PPh 23 yang dipotong PT Surya Rp192.000.000; laba tidak ditanamkan kembali. PPh badan BUT dan PPh Pasal 26 ayat (4) Tahun Pajak 2026 berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp1.012.000.000 dan Rp358.800.000",
        B: "Rp836.000.000 dan Rp296.400.000",
        C: "Rp1.452.000.000 dan Rp514.800.000",
        D: "Rp1.012.000.000 dan Rp460.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pendekatan entitas terpisah Pasal 7 P3B: laba BUT adalah fee yang dihasilkan melalui BUT dikurangi biaya untuk BUT, termasuk alokasi wajar biaya eksekutif dan administrasi umum kantor pusat; royalti dan bunga internal kepada kantor pusat tidak dikurangkan. PKP Rp4.600.000.000, PPh badan 22% Rp1.012.000.000, dan branch profit tax 10% × Rp3.588.000.000 = Rp358.800.000.",
        jejakHitung: [
          ["Fee melalui BUT", "Rp9.600.000.000"],
          ["Biaya langsung 3.200 + 800 + 400 (juta)", "(Rp4.400.000.000)"],
          ["Alokasi biaya eksekutif dan administrasi kantor pusat", "(Rp600.000.000)"],
          ["Royalti dan bunga internal kepada kantor pusat", "tidak dikurangkan"],
          ["PKP BUT", "Rp4.600.000.000"],
          ["PPh badan = 22% × 4.600.000.000", "Rp1.012.000.000"],
          ["BPT = 10% × (4.600.000.000 − 1.012.000.000)", "Rp358.800.000"]
        ],
        mengapaSalah: {
          B: "Mengurangkan royalti dan bunga internal Rp800.000.000; menurut Pasal 5 ayat (3) UU PPh dan Pasal 7 P3B keduanya tidak dapat dibiayakan (BUT bukan usaha perbankan).",
          C: "Menambahkan Rp2.000.000.000 jasa desain kantor pusat (force of attraction); P3B tanpa force of attraction hanya mengatribusikan laba yang dihasilkan melalui BUT.",
          D: "Branch profit tax dihitung dari PKP Rp4.600.000.000, padahal dasarnya laba setelah PPh badan Rp3.588.000.000."
        },
        jebakan: "PPh 23 Rp192.000.000 adalah kredit pajak BUT, bukan pengurang PKP; jasa yang tidak dikerjakan melalui BUT tidak diatribusikan. BUT bukan Wajib Pajak badan dalam negeri sehingga tidak memperoleh fasilitas Pasal 31E walaupun peredaran brutonya di bawah Rp50 miliar; tarifnya 22% penuh."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1)–(3) P3B (Model OECD)" }, { pasal: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-106", topik: "C10.2", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Lindqvist Medical AB (residen negara mitra P3B; beneficial owner; Form DGT sah) membuka kantor perwakilan di Jakarta sejak 2024 dengan tiga pegawai lokal. Kegiatannya: riset pasar, menghadiri pameran, mengumpulkan informasi regulasi alat kesehatan, dan meneruskan pertanyaan calon pembeli ke kantor pusat. Pegawai kantor perwakilan tidak berwenang menegosiasikan harga atau menandatangani kontrak; seluruh penjualan diputuskan dan ditandatangani di kantor pusat, dan barang dikirim langsung dari luar negeri kepada distributor independen. Biaya kantor perwakilan Rp2.400.000.000 per tahun ditanggung kantor pusat. P3B yang berlaku memuat Pasal 5 ayat (4) Model OECD. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Kantor perwakilan merupakan BUT karena disebut tegas dalam Pasal 2 ayat (5) UU PPh, dan undang-undang domestik mengesampingkan P3B",
        B: "Kantor perwakilan merupakan BUT jasa karena ketiga pegawainya bekerja di Jakarta lebih dari 60 hari dalam 12 bulan",
        C: "Kantor perwakilan bukan BUT menurut P3B karena kegiatannya semata persiapan atau penunjang; P3B diutamakan (Pasal 32A UU PPh)",
        D: "Kantor perwakilan bukan BUT, sehingga harga barang yang dijual kantor pusat kepada distributor Indonesia dipotong PPh Pasal 26 20%"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 2 ayat (5) UU PPh menyebut kantor perwakilan sebagai BUT, tetapi bagi residen negara mitra yang berhak atas P3B berlaku Pasal 5 ayat (4) P3B: tempat usaha yang semata-mata dipakai untuk kegiatan persiapan atau penunjang (pengumpulan informasi, promosi, pameran) tidak merupakan BUT. P3B diterapkan sebagai ketentuan khusus (Pasal 32A UU PPh).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 32A UU PPh: P3B membatasi hak pemajakan Indonesia dan diutamakan bagi residen negara mitra yang memenuhi syarat; undang-undang domestik tidak mengesampingkan P3B.",
          B: "Pegawai kantor perwakilan tidak memberikan jasa kepada pelanggan di Indonesia; kegiatan internal persiapan atau penunjang bukan BUT jasa.",
          D: "Harga barang yang dijual dari luar negeri bukan objek PPh 26 (atas impornya dipungut PPh 22 impor), dan tanpa BUT laba usaha Lindqvist hanya dipajaki negara domisili."
        },
        jebakan: "Daftar BUT dalam Pasal 2 ayat (5) UU PPh bukan kata akhir bila WPLN berhak atas P3B; periksa Pasal 5 ayat (4) P3B dan ada tidaknya agen tidak bebas."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (4) P3B (kegiatan persiapan atau penunjang)" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-107",
      topik: "C10.2",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Hanse Anlagenbau GmbH (residen negara mitra P3B; Form DGT sah) mengerjakan instalasi turbin di PLTU milik PT Daya Kalimantan. P3B yang berlaku menetapkan bahwa proyek konstruksi, instalasi, atau perakitan merupakan BUT hanya jika berlangsung lebih dari 6 bulan. Kronologi 2026: kontrak ditandatangani di Hamburg 2 Februari; pekerjaan persiapan di lokasi (kantor lapangan dan mobilisasi alat) mulai 20 Maret; instalasi fisik 1 April–31 Juli; pekerjaan terhenti seluruhnya 1–31 Agustus karena banjir lalu dilanjutkan 1 September; instalasi selesai 15 September; uji akhir oleh subkontraktor yang ditunjuk Hanse berlangsung sampai 30 September dan proyek diserahterimakan hari itu. Nilai kontrak EUR4.500.000. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Bukan BUT: jangka waktu dihitung sejak instalasi fisik 1 April sampai 30 September 2026, tepat 6 bulan", B: "BUT: jangka waktu 20 Maret–30 September 2026 (6 bulan 11 hari), termasuk masa terhenti dan uji akhir subkontraktor", C: "Bukan BUT: Agustus dikeluarkan karena pekerjaan terhenti, sehingga proyek hanya berlangsung 5 bulan 12 hari", D: "BUT: jangka waktu dihitung sejak kontrak ditandatangani 2 Februari 2026 sehingga hampir 8 bulan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk penerapan P3B, proyek instalasi menjadi BUT bila dikerjakan melebihi periode dalam P3B (Pasal 7 ayat (4) PMK 35/PMK.03/2019). Periode dihitung sejak proyek mulai dikerjakan, yaitu pekerjaan persiapan di lokasi 20 Maret, sampai pekerjaan selesai dan diserahkan 30 September; penghentian sementara karena banjir tidak menunda penghitungan, dan waktu pengerjaan subkontraktor (uji akhir) ikut diperhitungkan (Pasal 7 ayat (5) dan (6)). Durasinya 6 bulan 11 hari menurut kalender, atau 7 bulan bila bagian bulan dihitung penuh (Pasal 7 ayat (6) huruf e); keduanya lebih dari 6 bulan, sehingga timbul BUT.",
        jejakHitung: [
          ["Mulai: pekerjaan persiapan di lokasi", "20 Maret 2026"],
          ["Selesai: uji akhir subkontraktor dan serah terima", "30 September 2026"],
          ["20 Maret–30 September", "195 hari = 6 bulan 11 hari"],
          ["Bagian bulan Maret dihitung penuh (Pasal 7 ayat (6) huruf e)", "7 bulan > 6 bulan → BUT"]
        ],
        mengapaSalah: {
          A: "Pekerjaan persiapan di lokasi sudah merupakan pengerjaan proyek; mulai dari 1 April membuat jangka waktu tepat 6 bulan (183 hari) dan belum melebihi 6 bulan.",
          C: "Penghentian pengerjaan proyek untuk sementara tidak menunda penghitungan periode waktu (Pasal 7 ayat (6) huruf c PMK 35/PMK.03/2019).",
          D: "Penandatanganan kontrak di luar negeri bukan pengerjaan proyek; periode dihitung sejak proyek mulai dikerjakan, bukan dari tanggal kontrak, walaupun kesimpulannya sama-sama BUT."
        },
        jebakan: "Godaan untuk memendekkan durasi: mulai dari instalasi fisik 1 April (April sampai September tepat 6 bulan kalender, belum melebihi 6 bulan) atau mengeluarkan masa terhenti Agustus. Menurut Pasal 7 ayat (6) huruf c dan f PMK 35/PMK.03/2019, penghentian sementara dan waktu pengerjaan subkontraktor tetap dihitung; bagian bulan kalender dihitung penuh (huruf e)."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (4), (5), dan (6) PMK 35/PMK.03/2019", berlakuSejak: "2019-04-01" }, { pasal: "Pasal 5 ayat (3) huruf a P3B (proyek konstruksi/instalasi)" }, { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Cara hitung sudah dicocokkan ke Pasal 7 ayat (4) sampai (6) PMK 35/PMK.03/2019 (penghentian sementara dan subkontraktor ikut dihitung, bagian bulan dihitung penuh). Yang belum pasti: PMK tidak merinci apakah pekerjaan persiapan di lokasi (kantor lapangan, mobilisasi alat) sudah termasuk \"proyek mulai dikerjakan\". Kunci B bergantung pada tafsir itu; bila periode baru dimulai 1 April, jangkanya tepat 6 bulan dan opsi A yang benar. Teks P3B belum dicek."
    },
    {
      id: "C10-108", topik: "C10.2", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 5 ayat (1) huruf c UU PPh: yang menjadi objek pajak BUT termasuk penghasilan sebagaimana tersebut dalam Pasal 26 yang diterima atau diperoleh kantor pusat, sepanjang terdapat hubungan efektif antara BUT dengan harta atau kegiatan yang memberikan penghasilan dimaksud. Pasal 12 ayat (4) P3B (Model OECD, disederhanakan): ketentuan royalti tidak berlaku bila hak yang menghasilkan royalti berhubungan efektif dengan BUT di negara sumber; dalam hal demikian berlaku Pasal 7.",
      stem: "Orion Data Systems Inc. (residen negara mitra P3B; batas tarif royalti P3B 10%; Form DGT sah) memiliki BUT di Jakarta yang terdaftar dan ber-NPWP. BUT tersebut memasarkan, memasang, dan memelihara perangkat lunak manajemen gudang; lisensinya dikelola, ditagih, dan dibukukan oleh BUT sebagai bagian usahanya. Pada September 2026 PT Logistik Prima membayar kepada BUT Orion lisensi perangkat lunak (royalti) Rp800.000.000 dan jasa pemasangan Rp200.000.000. Kantor pusat Orion juga menerima bunga Rp150.000.000 atas pinjaman yang diberikan langsung kepada PT Logistik Prima tanpa keterlibatan BUT. Berdasarkan kutipan, pemotongan PPh oleh PT Logistik Prima atas royalti Rp800.000.000 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 26 tarif P3B 10% (Rp80.000.000), final, dengan BPNR fasilitas SKD",
        B: "PPh Pasal 26 tarif 20% (Rp160.000.000), karena Form DGT tidak berlaku bagi BUT",
        C: "Tidak dipotong, karena royalti yang terkait BUT merupakan laba usaha menurut Pasal 7 P3B",
        D: "PPh Pasal 23 15% (Rp120.000.000) dengan BPPU, yang menjadi kredit pajak BUT"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Hak atas perangkat lunak dikelola dan dibukukan oleh BUT sehingga royalti berhubungan efektif dengan BUT: Pasal 12 ayat (4) P3B mengalihkannya ke Pasal 7, dan Pasal 5 ayat (1) huruf c UU PPh menjadikannya penghasilan BUT. Pembayaran kepada BUT dipotong PPh 23 royalti 15% × Rp800.000.000 = Rp120.000.000 dengan BPPU, lalu dikreditkan BUT dalam SPT Tahunannya.",
        jejakHitung: [
          ["Hubungan efektif", "Lisensi dikelola, ditagih, dan dibukukan BUT → Pasal 7 P3B, bukan Pasal 12"],
          ["Penerima", "BUT (diperlakukan seperti WPDN) → PPh 23, bukan PPh 26"],
          ["PPh 23 = 15% × Rp800.000.000", "Rp120.000.000"]
        ],
        mengapaSalah: {
          A: "Tarif P3B 10% hanya untuk royalti yang tidak berhubungan efektif dengan BUT; di sini royalti menjadi bagian laba usaha BUT.",
          B: "Pembayaran kepada BUT tidak dipotong PPh 26 sama sekali; persoalannya bukan sah tidaknya Form DGT.",
          C: "Laba usaha yang diatribusikan kepada BUT justru dipajaki di Indonesia (Pasal 7 ayat (1) P3B); PPh 23 tetap dipotong sebagai kredit pajak BUT."
        },
        jebakan: "Bunga Rp150.000.000 yang dibayar langsung ke kantor pusat tanpa keterlibatan BUT tetap PPh 26 tarif P3B; jangan disamakan dengan royalti yang berhubungan efektif."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf c UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 23 ayat (1) huruf a UU PPh (royalti 15%)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 dan Pasal 12 ayat (4) P3B" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C10-109",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Grup Aurora mengembangkan bersama platform vaksin hewan: PT Aurora Biofarma Indonesia memiliki dan mengembangkan galur bakteri unik serta paten proses fermentasi yang terdaftar di Indonesia, sedangkan afiliasinya, Aurora Labs Pte. Ltd. (Singapura), memiliki formula dan merek global yang juga unik. Keduanya menanggung risiko pengembangan, dan operasinya sangat terintegrasi sehingga kontribusi masing-masing tidak dapat dinilai terpisah. Tidak ditemukan transaksi atau perusahaan pembanding independen yang memiliki harta tidak berwujud unik serupa. Laba gabungan atas transaksi itu pada 2025 Rp120.000.000.000. Menurut PMK 172/2023, metode harga transfer yang paling tepat dan alasannya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Metode pembagian laba, karena kontribusi kedua pihak unik dan bernilai serta operasinya sangat terintegrasi", B: "TNMM dengan PT Aurora sebagai pihak yang diuji, karena TNMM paling toleran terhadap perbedaan produk", C: "Metode CUP, karena CUP selalu wajib dipakai lebih dahulu bila tersedia data harga pasar vaksin hewan", D: "Metode biaya plus, karena PT Aurora menanggung seluruh biaya penelitian dan pengembangan galur di Indonesia" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 9 ayat (6) PMK 172/2023: metode pembagian laba sesuai bila para pihak sama-sama memiliki kontribusi unik dan bernilai, kegiatan usahanya sangat terintegrasi sehingga kontribusi masing-masing tidak dapat dianalisis terpisah, dan para pihak berbagi risiko yang signifikan. Ketiganya terpenuhi di sini, sehingga metode satu sisi seperti TNMM atau biaya plus tidak dapat menangkap nilai kontribusi masing-masing; CUP tidak dapat dipakai karena tidak ada pembanding.",
        jejakHitung: [],
        mengapaSalah: {
          B: "TNMM (Pasal 9 ayat (7)) sesuai bila salah satu pihak tidak memiliki kontribusi unik dan bernilai dan kegiatannya tidak sangat terintegrasi; di sini kedua pihak memiliki harta tidak berwujud unik.",
          C: "Metode dipilih berdasarkan ketepatan dan keandalannya (Pasal 9 ayat (2)); CUP hanya diutamakan bila keandalannya setara dengan metode lain (Pasal 9 ayat (12)), bukan selalu wajib dipakai lebih dahulu. Di sini CUP juga tidak dapat dipakai karena tidak ada pembanding yang sebanding.",
          D: "Biaya plus (Pasal 9 ayat (5)) sesuai untuk pabrikan atau penyedia jasa yang tidak menanggung risiko signifikan dan tidak memiliki kontribusi unik; biaya litbang tidak mencerminkan nilai paten dan galur unik."
        },
        jebakan: "Kata kunci metode pembagian laba: kontribusi unik di kedua sisi, integrasi tinggi, dan risiko yang dibagi; kata kunci TNMM: ada pihak yang diuji dengan fungsi rutin. CUP hanya diutamakan bila keandalannya setara."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (2), ayat (6), dan ayat (12) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-110",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nikel Harapan Indonesia pada Tahun Pajak 2025 menjual 40.000 ton nickel matte kepada afiliasinya, Harapan Trading Pte. Ltd. (Singapura), seharga USD12.000 per ton dengan syarat FOB pelabuhan Indonesia. Pada periode yang sama PT Nikel menjual produk identik kepada pembeli independen di Jepang seharga USD12.900 per ton dengan syarat CIF; biaya angkut laut dan asuransi yang ditanggung PT Nikel atas penjualan CIF itu USD300 per ton, dan tidak ada perbedaan lain. Penjualan kepada afiliasi dicatat dengan kurs tengah BI tanggal transaksi (rata-rata tertimbang Rp15.900); rata-rata kurs KMK pada tanggal-tanggal itu Rp15.950; kurs tengah BI 31 Desember 2025 Rp16.250. Peredaran bruto 2025 Rp9,1 triliun. Dengan metode CUP internal, koreksi primer atas penjualan kepada Harapan Trading adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp382.800.000.000", B: "Rp572.400.000.000", C: "Rp381.600.000.000", D: "Rp390.000.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "CUP internal disesuaikan untuk perbedaan syarat penyerahan: harga wajar FOB = USD12.900 − USD300 = USD12.600 per ton. Selisih USD600 × 40.000 ton = USD24.000.000, dijabarkan dengan kurs yang dipakai mencatat penjualan (kurs tengah BI tanggal transaksi Rp15.900) = Rp381.600.000.000.",
        jejakHitung: [
          ["Harga CUP disesuaikan ke FOB = 12.900 − 300", "USD12.600 per ton"],
          ["Selisih per ton = 12.600 − 12.000", "USD600"],
          ["Selisih total = 600 × 40.000", "USD24.000.000"],
          ["Koreksi = USD24.000.000 × Rp15.900", "Rp381.600.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs KMK (Rp15.950); kurs KMK untuk menghitung pajak yang dipotong atau dipungut, bukan untuk menjabarkan penghasilan dalam pembukuan.",
          B: "Membandingkan harga CIF dengan FOB tanpa menyesuaikan biaya angkut dan asuransi USD300 per ton (selisih USD900 per ton).",
          D: "Memakai kurs penutup 31 Desember 2025; kurs penutup hanya untuk menjabarkan saldo pos moneter, bukan penghasilan transaksi."
        },
        jebakan: "Dua lapis jebakan: penyesuaian kesebandingan (FOB vs CIF) dan pilihan kurs (pencatatan transaksi vs KMK vs penutup)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (CUP dan analisis kesebandingan)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 9 ayat (1) PP 94/2010 (keuntungan atau kerugian selisih kurs diakui sesuai sistem pembukuan secara taat asas sesuai SAK)" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Penyesuaian FOB/CIF sesuai Pasal 8 ayat (2) huruf c PMK 172/2023 (sudah dicek). Yang belum pasti: kurs untuk menjabarkan koreksi harga transfer dalam valuta asing. PMK 172/2023 tidak mengaturnya dan PP 94/2010 Pasal 9 hanya mengatur selisih kurs secara taat asas sesuai SAK; pemakaian kurs pencatatan transaksi (bukan kurs KMK atau kurs penutup) adalah penalaran, belum ada bunyi naskah yang eksplisit."
    },
    {
      id: "C10-111",
      topik: "C10.5",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sandang Prima Indonesia (peredaran bruto 2024 Rp185 miliar) memiliki dua transaksi afiliasi Tahun Pajak 2024 yang diuji dalam pemeriksaan 2026. (1) Jasa maklon pakaian untuk induknya di Hong Kong: total biaya Rp60.000.000.000 dan laba operasi Rp3.600.000.000; pembanding net cost plus menghasilkan rentang interkuartil 5,0%–9,0%, median 7,0%, dan rata-rata 7,3%. (2) Distribusi kain yang dibeli dari afiliasi di Thailand dan dijual kepada pihak independen: penjualan Rp120.000.000.000 dan laba operasi Rp1.200.000.000; pembanding margin laba operasi atas penjualan menghasilkan rentang interkuartil 2,0%–4,0%, median 3,0%, dan rata-rata 3,2%; rentang penuh pembanding 0,8%–6,1%. Data pembanding tidak memberi dasar untuk menentukan titik yang paling tepat di dalam rentang. Berdasarkan PMK 172/2023, total koreksi primer Tahun Pajak 2024 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.000.000.000", B: "Rp1.200.000.000", C: "Rp2.640.000.000", D: "Rp2.400.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Indikator yang berada di dalam rentang interkuartil (rentang kewajaran bila pembanding tiga atau lebih) memenuhi prinsip kewajaran dan tidak dikoreksi. Bila di luar rentang, Pasal 12 ayat (7) PMK 172/2023 memakai titik yang paling tepat di dalam rentang sesuai kesebandingannya, atau median bila titik paling tepat tidak dapat ditentukan; stem menyatakan data pembanding tidak memberi dasar menentukan titik paling tepat, jadi dipakai median. Segmen (1): 6,0% berada dalam 5,0%–9,0% sehingga tidak dikoreksi. Segmen (2): 1,0% di bawah 2,0% sehingga disesuaikan ke median 3,0%: 3,0% × Rp120.000.000.000 − Rp1.200.000.000 = Rp2.400.000.000.",
        jejakHitung: [
          ["Segmen (1) net cost plus = 3.600.000.000 ÷ 60.000.000.000", "6,0% → dalam rentang 5,0%–9,0%, tanpa koreksi"],
          ["Segmen (2) margin = 1.200.000.000 ÷ 120.000.000.000", "1,0% → di bawah 2,0%"],
          ["Laba wajar segmen (2) = 3,0% × 120.000.000.000", "Rp3.600.000.000"],
          ["Koreksi = 3.600.000.000 − 1.200.000.000", "Rp2.400.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut menyesuaikan segmen (1) ke median (tambahan Rp600.000.000), padahal 6,0% sudah berada dalam rentang interkuartil.",
          B: "Menyesuaikan segmen (2) ke batas bawah 2,0%; batas bawah bukan titik yang paling tepat tanpa dasar kesebandingan, sehingga dipakai median (Pasal 12 ayat (7) huruf c).",
          C: "Memakai rata-rata 3,2%, bukan median 3,0%."
        },
        jebakan: "Rentang penuh 0,8%–6,1% hanya dipakai bila pembandingnya dua; dengan tiga pembanding atau lebih yang dipakai rentang interkuartil, dan penyesuaian hanya bagi indikator di luar rentang."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 ayat (1), ayat (6), dan ayat (7) PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "C10-112", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 1, kasusId: "V-C10-12",
      laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal V-C10-12: PT Sakura Nutri Indonesia (PMA; 70% sahamnya dimiliki Tsubasa Foods K.K., Jepang, beneficial owner dengan Form DGT sah terekam di Coretax sejak 10 Maret 2026; batas tarif royalti P3B 10%) membebankan royalti merek dan formula Semester I 2026 sebesar USD320.000 kepada induknya pada 30 Juni 2026 (dicatat sebagai beban dan utang royalti afiliasi), lalu membayarnya pada 18 Agustus 2026. PT Sakura mencatat transaksi valas dengan kurs tengah BI tanggal transaksi. Data kurs: KMK 24–30 Juni 2026 Rp16.380; kurs tengah BI 30 Juni 2026 Rp16.415; KMK 12–18 Agustus 2026 Rp16.290; kurs bank saat transfer 18 Agustus 2026 Rp16.305. Nilai royalti telah memenuhi PKKU. PPh Pasal 26 dan masa pajaknya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp525.280.000; Masa Pajak Juni 2026",
        B: "Rp524.160.000; Masa Pajak Juni 2026",
        C: "Rp521.280.000; Masa Pajak Agustus 2026",
        D: "Rp521.760.000; Masa Pajak Agustus 2026"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 26 terutang pada saat pembayaran, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu; pembebanan royalti sebagai utang kepada induk pada 30 Juni 2026 adalah saat disediakan untuk dibayarkan. DPP valuta asing dikonversi dengan kurs KMK yang berlaku pada saat terutang: 10% × USD320.000 × Rp16.380 = Rp524.160.000, Masa Pajak Juni 2026.",
        jejakHitung: [
          ["Saat terutang", "30 Juni 2026 (dibebankan sebagai utang kepada afiliasi) → Masa Juni 2026"],
          ["Kurs", "KMK 24–30 Juni 2026 = Rp16.380"],
          ["DPP = USD320.000 × 16.380", "Rp5.241.600.000"],
          ["PPh 26 = 10% × DPP", "Rp524.160.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs tengah BI (kurs pembukuan); kurs pajak untuk PPh yang dipotong adalah kurs KMK. Selisih Rp1.120.000 hanya menjadi selisih kurs di pembukuan.",
          C: "Menggeser saat terutang ke tanggal transfer; PPh 26 sudah terutang ketika royalti dibebankan sebagai utang kepada induk pada 30 Juni.",
          D: "Memakai kurs bank saat transfer dan masa pembayaran; keduanya tidak relevan bagi PPh 26 yang terutang pada Juni."
        },
        jebakan: "Dua pilihan sekaligus: kurs (KMK, bukan BI atau bank) dan tanggal (saat terutang, bukan saat bayar)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs mingguan sebagai dasar pelunasan PPh (kurs pada saat terutang)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-113", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C10-12",
      laporanUjian: ["C-2026-10"],
      kutipan: "PP 94/2010 Pasal 9 ayat (1): keuntungan atau kerugian selisih kurs mata uang asing diakui sebagai penghasilan atau biaya berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan Standar Akuntansi Keuangan yang berlaku di Indonesia.",
      stem: "Lanjutan V-C10-12 (PT Sakura Nutri Indonesia; royalti USD320.000 kepada Tsubasa Foods K.K. dibebankan 30 Juni 2026; PPh 26 10% sebesar Rp524.160.000 dihitung dengan kurs KMK Rp16.380 dan disetor 14 Juli 2026). PT Sakura mencatat utang royalti neto USD288.000 dengan kurs tengah BI 30 Juni 2026 Rp16.415 dan melunasinya pada 18 Agustus 2026 melalui transfer bank dengan kurs Rp16.305 (tidak ada penjabaran ulang saldo di antara kedua tanggal); kurs KMK 12–18 Agustus 2026 Rp16.290 dan kurs tengah BI 18 Agustus 2026 Rp16.300. Seluruh peristiwa terjadi dalam Tahun Pajak 2026. Berdasarkan kutipan, selisih kurs atas pelunasan utang royalti tersebut dan perlakuan fiskalnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keuntungan Rp31.680.000; diakui sebagai penghasilan dalam penghitungan PPh badan 2026",
        B: "Keuntungan Rp31.680.000; tidak diakui fiskal karena berkaitan dengan royalti yang PPh 26-nya final",
        C: "Keuntungan Rp35.200.000; diakui sebagai penghasilan dalam penghitungan PPh badan 2026",
        D: "Keuntungan Rp36.000.000; diakui sebagai penghasilan dalam penghitungan PPh badan 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Utang royalti neto USD288.000 tercatat USD288.000 × Rp16.415 = Rp4.727.520.000 dan dilunasi USD288.000 × Rp16.305 = Rp4.695.840.000, sehingga timbul keuntungan selisih kurs Rp31.680.000. Keuntungan itu penghasilan (Pasal 4 ayat (1) huruf l UU PPh) karena mengikuti pembukuan yang taat asas; sifat final PPh 26 hanya melekat pada penghasilan Tsubasa, bukan pada selisih kurs PT Sakura.",
        jejakHitung: [
          ["Saldo utang royalti = 288.000 × 16.415", "Rp4.727.520.000"],
          ["Pelunasan = 288.000 × 16.305 (kurs bank)", "Rp4.695.840.000"],
          ["Keuntungan selisih kurs", "Rp31.680.000"],
          ["PPh 26 (sudah terkunci kurs KMK 30 Juni)", "Rp524.160.000, tidak dihitung ulang"]
        ],
        mengapaSalah: {
          B: "PP 94/2010 Pasal 9 ayat (2) hanya mengecualikan selisih kurs yang berkaitan dengan penghasilan final atau bukan objek milik WP sendiri; beban royalti PT Sakura adalah biaya biasa, jadi selisih kursnya diakui.",
          C: "Memakai USD320.000 bruto; bagian USD32.000 tidak dilunasi dalam valas, melainkan disetor sebagai PPh 26 rupiah dengan kurs KMK.",
          D: "Memakai kurs KMK minggu pelunasan (Rp16.290); pelunasan utang diukur dengan rupiah yang benar-benar dibayar melalui bank."
        },
        jebakan: "Bila beban dicatat dengan kurs BI, bagian PPh (USD32.000) juga menimbulkan selisih kecil USD32.000 × (16.415 − 16.380) = Rp1.120.000 terhadap PPh rupiah; itu terpisah dari selisih pelunasan utang royalti."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PSAK 221 (pengaruh perubahan kurs valuta asing)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "C10-114",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "baris-spt",
      kesulitan: 1,
      kasusId: "V-C10-12",
      laporanUjian: ["C-2026-10"],
      formulirRef: "BPNR.b.2",
      stem: "Lanjutan V-C10-12: admin pajak PT Sakura Nutri Indonesia membuat bukti potong di Coretax atas royalti USD320.000 kepada Tsubasa Foods K.K. (Jepang; beneficial owner; Form DGT sah terekam 10 Maret 2026; batas tarif royalti P3B 10%) yang dibebankan sebagai utang kepada induk pada 30 Juni 2026 dan dibayar 18 Agustus 2026. Kurs KMK 24–30 Juni 2026 Rp16.380; kurs KMK 12–18 Agustus 2026 Rp16.290; kurs tengah BI 30 Juni 2026 Rp16.415. Isian bukti potong dan tenggat setor yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "BPNR Masa Agustus 2026; DPP Rp5.212.800.000 (kurs KMK 12–18 Agustus); fasilitas SKD; tarif 10%; setor paling lambat 15 September 2026", B: "BPPU Masa Juni 2026; DPP Rp5.241.600.000; PPh Pasal 23 tarif 15% karena objeknya royalti; setor paling lambat 15 Juli 2026", C: "BPNR Masa Juni 2026; DPP Rp5.241.600.000 (kurs KMK 24–30 Juni); fasilitas SKD; tarif 10%; setor paling lambat 15 Juli 2026", D: "BPNR Masa Juni 2026; DPP Rp5.252.800.000 (kurs tengah BI 30 Juni); fasilitas SKD; tarif 10%; setor paling lambat 15 Juli 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penerima badan luar negeri sehingga bukti potongnya BPNR. PPh 26 terutang 30 Juni 2026 (disediakan untuk dibayarkan kepada afiliasi), jadi masuk Masa Juni 2026 dan DPP dikonversi dengan kurs KMK yang berlaku saat itu: USD320.000 × Rp16.380 = Rp5.241.600.000. Form DGT sah → fasilitas SKD, tarif 10% (PPh Rp524.160.000); setor paling lambat 15 Juli 2026 dan SPT Masa PPh Unifikasi Juni paling lambat 20 Juli 2026.",
        jejakHitung: [
          ["Jenis bukti potong", "Penerima badan luar negeri → BPNR"],
          ["Masa pajak", "Saat terutang 30 Juni 2026 → Masa Juni 2026"],
          ["DPP = USD320.000 × Rp16.380 (KMK 24–30 Juni)", "Rp5.241.600.000"],
          ["PPh 26 = 10% × DPP (fasilitas SKD)", "Rp524.160.000; setor ≤ 15 Juli 2026"]
        ],
        mengapaSalah: {
          A: "Memakai masa dan kurs KMK minggu pembayaran; saat terutang sudah terjadi pada 30 Juni ketika royalti dibebankan sebagai utang kepada induk.",
          B: "PPh 23 dan BPPU untuk penerima dalam negeri atau BUT; royalti kepada badan luar negeri adalah objek PPh 26 dengan BPNR.",
          D: "Kurs tengah BI adalah kurs pembukuan; DPP pemotongan dalam valuta asing memakai kurs KMK."
        },
        jebakan: "Masa pajak bukti potong mengikuti saat terutang, bukan tanggal transfer; kurs mengikuti KMK pada minggu saat terutang."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 Pasal 18 ayat (1) huruf b; Lampiran huruf B (petunjuk pengisian BPNR: Tax Period = Masa Pajak saat terutang)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) huruf g (setor tanggal 15) dan Pasal 171 ayat (1) huruf g (lapor 20 hari)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-115",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Pada 9 September 2026 PT Bumi Agro Lestari (WPDN) membeli 30% saham PT Sawit Hijau Nusantara (perseroan tertutup yang didirikan di Indonesia) dari Greenfield Plantation Holdings Ltd., badan luar negeri yang tidak memiliki BUT di Indonesia, seharga USD2.400.000; harga perolehan saham itu bagi Greenfield dahulu USD1.500.000. Greenfield tidak menyerahkan Form DGT sehingga ketentuan domestik berlaku. Harga dibayar lunas pada 9 September 2026. Data kurs: KMK 9–15 September 2026 Rp16.440; kurs tengah BI 9 September 2026 Rp16.470; kurs bank saat transfer Rp16.480. PPh Pasal 26 yang wajib dipotong PT Bumi Agro adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.976.400.000", B: "Rp2.959.200.000", C: "Rp7.891.200.000", D: "Rp1.972.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Penjualan langsung saham perseroan Indonesia nonbursa oleh WPLN selain BUT dikenai PPh 26 sebesar 20% × perkiraan penghasilan neto 25% dari harga jual (efektif 5%, final; Pasal 238 PMK 81/2024), dipotong pembeli WPDN (Pasal 239 ayat (1)); harga perolehan tidak diperhitungkan. DPP dikonversi dengan kurs KMK yang berlaku saat terutang: 5% × USD2.400.000 × Rp16.440 = Rp1.972.800.000.",
        jejakHitung: [
          ["Perkiraan neto = 25% × USD2.400.000", "USD600.000"],
          ["PPh 26 = 20% × USD600.000", "USD120.000 (efektif 5% harga jual)"],
          ["Konversi kurs KMK 9–15 September 2026 = 120.000 × 16.440", "Rp1.972.800.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs tengah BI Rp16.470; untuk menghitung PPh yang dipotong dipakai kurs KMK.",
          B: "Menghitung 20% × keuntungan (USD900.000); Pasal 26 ayat (2) memakai perkiraan neto 25% dari harga jual, bukan keuntungan sebenarnya.",
          C: "Menerapkan 20% atas seluruh harga jual tanpa perkiraan penghasilan neto 25%."
        },
        jebakan: "Data harga perolehan dan kurs bank sengaja diberikan; keduanya tidak dipakai dalam PPh 26 atas penjualan saham."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 238 dan Pasal 239 PMK 81/2024 (penjualan saham Perseroan oleh WPLN selain BUT)", berlakuSejak: "2025-01-01" }, { pasal: "KMK kurs mingguan sebagai dasar pelunasan PPh (kurs pada saat terutang)" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "C10-116",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arunika Media membayar royalti USD150.000 pada 21 Juli 2026 kepada Merlion Digital Pte. Ltd. (Singapura; beneficial owner; batas tarif royalti P3B 10%). Form DGT Merlion baru terekam di Coretax pada 4 Agustus 2026, sehingga PT Arunika memotong PPh 26 tarif 20% dengan kurs KMK 15–21 Juli 2026 Rp16.360, yaitu Rp490.800.000, dan menyetornya 12 Agustus 2026. PT Arunika masih beroperasi dan SPT Masa PPh Unifikasi Juli 2026-nya belum diperiksa. Saat upaya pemulihan ditempuh pada Oktober 2026, kurs KMK yang berlaku Rp16.520 dan kurs tengah BI Rp16.505. Jalan keluar dan jumlah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Arunika membetulkan SPT Masa PPh Unifikasi Juli 2026 dengan tarif 10% karena Form DGT terekam sebelum batas pelaporan; kelebihan Rp245.400.000 dikompensasikan", B: "PT Arunika, dengan surat kuasa dari Merlion, mengajukan permohonan pengembalian pajak yang seharusnya tidak terutang sebesar Rp245.400.000, yaitu selisih rupiah yang disetor", C: "PT Arunika, dengan surat kuasa dari Merlion, mengajukan permohonan pengembalian sebesar Rp247.800.000, yaitu USD15.000 dengan kurs KMK pada saat permohonan", D: "Tidak ada pengembalian; Merlion cukup mengkreditkan seluruh Rp490.800.000 sebagai kredit pajak luar negeri di Singapura" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Form DGT terekam setelah pembayaran, sehingga pemotong wajib memotong 20% (Rp490.800.000) (PMK 112/2025 Pasal 10 ayat (4)). Keterlambatan pemenuhan persyaratan P3B setelah pemotongan adalah kelebihan pemotongan terkait P3B (PMK 81/2024 Pasal 133 huruf b) yang diminta kembali oleh pemotong, PT Arunika, dengan permohonan yang dilampiri surat kuasa Merlion (Pasal 134 ayat (1) dan Pasal 135 ayat (2) huruf d). Jumlahnya selisih antara PPh rupiah yang disetor dan PPh menurut tarif P3B, keduanya dengan kurs KMK saat terutang: Rp490.800.000 − Rp245.400.000 = Rp245.400.000. Kurs saat permohonan tidak dipakai karena yang dikembalikan adalah pajak rupiah yang telah disetor ke Kas Negara (Pasal 136 ayat (3) huruf a menjadikan setoran itu syarat pengembalian).",
        jejakHitung: [
          ["PPh dipotong = 20% × 150.000 × 16.360", "Rp490.800.000"],
          ["PPh menurut P3B = 10% × 150.000 × 16.360", "Rp245.400.000"],
          ["Pajak yang seharusnya tidak terutang", "Rp245.400.000"],
          ["Pemohon", "PT Arunika (pemotong) dengan surat kuasa Merlion"]
        ],
        mengapaSalah: {
          A: "Itu pola PER-25/PJ/2018 (SKD cukup diterima sebelum batas SPT Masa); menurut PMK 112/2025 pemotongan 20% sudah benar dan kelebihannya dipulihkan melalui permohonan pengembalian (PMK 81/2024 Pasal 133 dan Pasal 134), bukan dikompensasikan.",
          C: "Pemohonnya benar, tetapi pajak disetor dalam rupiah dengan kurs KMK saat terutang; jumlah pengembalian tidak dikonversi ulang dengan kurs saat permohonan.",
          D: "Negara domisili umumnya hanya memberi kredit sampai tarif P3B; kelebihan potong di Indonesia dipulihkan melalui pengembalian."
        },
        jebakan: "Untuk kelebihan potong karena Form DGT terlambat, permohonan diajukan pemotong dengan surat kuasa WPLN (WPLN sendiri hanya bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT), dan jumlahnya rupiah yang benar-benar disetor."
      },
      dasarHukum: [{ pasal: "PMK 112/2025 Pasal 10 ayat (4) dan Pasal 15", berlakuSejak: "2025-12-31" }, { pasal: "PMK 81/2024 Pasal 133 huruf b, Pasal 134, Pasal 135 ayat (2), dan Pasal 136 ayat (3)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C10-117",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Pada Agustus 2026 PT Mitra Turbin Energi melakukan dua pembayaran kepada Kestrel Power Services Ltd. (residen negara mitra P3B; beneficial owner; Form DGT sah terekam di Coretax sebelum pembayaran). Tim Kestrel hanya hadir 34 hari, jauh di bawah time test jasa P3B 183 hari dalam 12 bulan, sehingga tidak ada BUT; P3B tidak memuat pasal imbalan jasa teknik sehingga imbalan jasa termasuk laba usaha (Pasal 7). Pembayarannya: (1) jasa inspeksi turbin USD60.000 dibayar 12 Agustus 2026; (2) harga suku cadang yang diimpor USD90.000, atas impornya telah dipungut PPh 22 impor. Kurs KMK 12–18 Agustus 2026 Rp16.290; kurs tengah BI 12 Agustus 2026 Rp16.310. Pemenuhan kewajiban PT Mitra Turbin di Coretax yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "BPNR hanya atas jasa inspeksi: DPP Rp977.400.000 (kurs KMK), fasilitas SKD, PPh Rp0, dilaporkan pada SPT Masa Unifikasi", B: "BPNR atas jasa dan suku cadang: DPP Rp2.443.500.000 (kurs KMK), tanpa fasilitas, tarif 20%, PPh Rp488.700.000", C: "Tidak membuat bukti potong apa pun, karena PPh atas jasa nihil menurut P3B dan suku cadang bukan objek PPh 26", D: "BPNR hanya atas jasa inspeksi: DPP Rp978.600.000 (kurs tengah BI), tanpa fasilitas, tarif 20%, PPh Rp195.720.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Imbalan jasa adalah laba usaha yang tanpa BUT hanya dipajaki negara domisili, sehingga dengan Form DGT sah PPh 26 nihil; bukti potong BPNR tetap dibuat dengan fasilitas SKD dan DPP dikonversi dengan kurs KMK: USD60.000 × Rp16.290 = Rp977.400.000. Harga suku cadang bukan objek PPh 26 (impornya sudah dipungut PPh 22 impor) dan tidak dibuatkan BPNR.",
        jejakHitung: [
          ["Jasa inspeksi: DPP = 60.000 × 16.290", "Rp977.400.000"],
          ["Tarif", "Laba usaha tanpa BUT + Form DGT sah → PPh Rp0 (fasilitas SKD)"],
          ["Suku cadang USD90.000", "Bukan objek PPh 26 (PPh 22 impor)"]
        ],
        mengapaSalah: {
          B: "Harga barang bukan objek PPh 26, dan Form DGT sah membuat imbalan jasa tidak dipotong 20%.",
          C: "PPh nihil karena fasilitas P3B tetap harus dituangkan dalam bukti potong BPNR dengan fasilitas SKD dan dilaporkan dalam SPT Masa.",
          D: "Mengabaikan Form DGT yang sah dan memakai kurs tengah BI; DPP pemotongan memakai kurs KMK."
        },
        jebakan: "PPh nihil bukan berarti tanpa administrasi: BPNR fasilitas SKD tetap dibuat dan dilaporkan; pembelian barang tidak masuk bukti potong."
      },
      dasarHukum: [{ pasal: "Pasal 7 P3B (laba usaha)" }, { pasal: "PMK 112/2025 Pasal 14 ayat (2)", berlakuSejak: "2025-12-31" }, { pasal: "PER-11/PJ/2025 Pasal 18 ayat (1) huruf b dan Pasal 20 ayat (2) huruf d; Lampiran huruf B (BPNR Huruf B.1)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 22 dan Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "C10-118", topik: "C10.9", tingkat: ["C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Senja Interaktif (pembukuan Rupiah dengan kurs tengah BI tanggal transaksi) wajib membayar royalti perangkat lunak USD 50.000 kepada Aster Soft Inc. (residen negara mitra P3B; pemilik manfaat; Form DGT sah terekam di Coretax sebelum pembayaran; batas tarif royalti P3B 10%). Royalti jatuh tempo pada Senin, 31 Agustus 2026 dan dicatat sebagai beban dan utang pada tanggal itu, lalu dibayar pada Rabu, 9 September 2026 melalui transfer bank. Kurs yang dipakai untuk menghitung DPP PPh Pasal 26 dalam BPNR adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kurs tengah BI 31 Agustus 2026, yaitu kurs yang dipakai untuk mencatat beban dan utang royalti",
        B: "Kurs KMK yang berlaku 26 Agustus–1 September 2026, karena PPh Pasal 26 terutang saat royalti jatuh tempo pada 31 Agustus 2026",
        C: "Kurs KMK yang berlaku 9–15 September 2026, karena DPP dikonversi pada minggu royalti dibayar",
        D: "Kurs jual bank pada 9 September 2026, yaitu kurs yang benar-benar dipakai saat dana ditransfer"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang pada saat pembayaran, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu; di sini jatuh tempo 31 Agustus 2026. DPP dalam valuta asing dikonversi dengan kurs KMK (kurs pajak mingguan yang berlaku Rabu–Selasa) pada saat terutang, yaitu KMK 26 Agustus–1 September 2026. Kurs tengah BI hanya untuk pembukuan, sedangkan kurs bank menentukan rupiah yang dibayar dan selisih kurs pelunasan, bukan DPP pajak.",
        jejakHitung: [["Saat terutang", "Jatuh tempo Senin, 31 Agustus 2026 (lebih dahulu daripada pembayaran 9 September)"], ["Minggu KMK yang memuat 31 Agustus 2026", "Rabu, 26 Agustus–Selasa, 1 September 2026"], ["Kurs untuk DPP PPh Pasal 26", "Kurs KMK 26 Agustus–1 September 2026"]],
        mengapaSalah: {
          A: "Kurs tengah BI adalah kurs pembukuan; DPP pemotongan dalam valuta asing memakai kurs KMK.",
          C: "Kurs dikunci pada saat terutang (jatuh tempo 31 Agustus), bukan pada minggu pembayaran.",
          D: "Kurs bank menentukan rupiah yang dibayar dan selisih kurs pelunasan, bukan DPP PPh Pasal 26."
        },
        jebakan: "Tentukan dulu saat terutang, baru cari minggu KMK yang memuat tanggal itu."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs mingguan sebagai dasar pelunasan PPh (kurs pada saat terutang)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "C10-119",
      topik: "C10.4",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "Dalam pelatihan internal tentang instrumen antipenghindaran pajak internasional, staf pajak PT Nusa Kencana Logistik, anak perusahaan grup PMN yang pendapatan laporan keuangan konsolidasinya EUR 900 juta pada setiap tahun 2022–2025, menanyakan pokok pajak minimum global menurut PMK 136/2024 untuk tahun pajak 2026. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tarif minimum efektif 15% diuji per entitas, sehingga setiap entitas konstituen yang ETR-nya di bawah 15% membayar sendiri pajak tambahan atas labanya", B: "Grup masuk cakupan, tetapi tarif minimum efektifnya 22% mengikuti tarif PPh badan Indonesia", C: "Grup masuk cakupan karena pendapatan konsolidasinya paling sedikit EUR 750 juta pada sekurang-kurangnya 2 dari 4 tahun sebelumnya; ETR minimum 15% diuji per yurisdiksi, dan kekurangannya atas yurisdiksi Indonesia dipungut lebih dulu melalui DMTT", D: "Grup belum terkena pajak minimum global karena IIR dan DMTT baru berlaku mulai tahun pajak 2027 bersamaan dengan UTPR" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "PMK 136/2024 berlaku bagi grup PMN dengan pendapatan konsolidasi paling sedikit EUR 750 juta dalam sekurang-kurangnya 2 dari 4 tahun pajak sebelumnya (di sini EUR 900 juta setiap tahun). ETR minimum 15% diuji per yurisdiksi; bila di bawah 15%, pajak tambahan atas yurisdiksi Indonesia dipungut lebih dulu melalui DMTT, sedangkan IIR dan UTPR menjadi lapis berikutnya. IIR dan DMTT berlaku tahun pajak 2025, UTPR tahun pajak 2026.",
        jejakHitung: [
          ["Ambang cakupan", "EUR 900 juta ≥ EUR 750 juta pada 2022–2025 → masuk cakupan"],
          ["Tarif minimum", "ETR 15% per yurisdiksi"],
          ["Urutan pemungutan", "DMTT → IIR → UTPR; IIR/DMTT sejak tahun pajak 2025, UTPR sejak 2026"]
        ],
        mengapaSalah: {
          A: "ETR GloBE dihitung per yurisdiksi dengan menggabungkan seluruh entitas konstituen di yurisdiksi itu, bukan per entitas.",
          B: "Tarif minimum GloBE 15%, terpisah dari tarif PPh badan 22% menurut UU PPh.",
          D: "IIR dan DMTT berlaku sejak tahun pajak 2025; UTPR sejak tahun pajak 2026."
        },
        jebakan: "Bedakan tarif minimum GloBE (15%, diuji per yurisdiksi) dari tarif PPh badan (22%)."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 32 dan 33, Pasal 2 ayat (1), Pasal 5 ayat (1), Pasal 6 ayat (1), Pasal 73, dan Pasal 74 PMK 136/2024", berlakuSejak: "2025-01-01" }, { pasal: "PER-6/PJ/2026 (aturan pelaksana)", berlakuSejak: "2026-05-04" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "C10-120", topik: "C10.1", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, kasusId: "V-C10-13",
      kutipan: "Rumusan pasal P3B Indonesia–Valdora (disederhanakan): Pasal 6 — penghasilan dari harta tak gerak dapat dikenai pajak di Negara tempat harta itu berada. Pasal 7 — laba usaha hanya dapat dikenai pajak di Negara tempat perusahaan berkedudukan, kecuali perusahaan menjalankan usaha melalui BUT di Negara lainnya. Pasal 10 — dividen dapat juga dikenai pajak di Negara tempat perusahaan pembayar berkedudukan, tetapi pajaknya tidak melebihi 10% dari jumlah bruto. Pasal 16 — fee direktur dan komisaris dapat dikenai pajak di Negara tempat perusahaan berkedudukan.",
      stem: "Data untuk soal ini dan soal berikutnya (V-C10-13): Pada 2026 beberapa wajib pajak Indonesia melakukan pembayaran kepada residen Negara Valdora yang merupakan beneficial owner dan telah menyerahkan Form DGT sah sebelum pembayaran: (1) PT Kencana Agro membayar dividen kepada Valdora Holdings Ltd., pemilik 30% sahamnya; (2) PT Sinar Teknik membayar imbalan jasa konsultansi teknik kepada Valdora Engineering Ltd., yang timnya hanya 20 hari di Indonesia dan tidak mempunyai BUT; (3) PT Bintang Logistik membayar honorarium komisaris kepada Mr. Erik Lund; (4) PT Bali Wisata membayar sewa vila di Kabupaten Badung milik Ms. Ingrid Holm. Berdasarkan kutipan, klasifikasi hak pemajakan Indonesia sebagai negara sumber atas pembayaran (1), (2), (3), dan (4) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Terbatas; pelepasan; penuh; penuh",
        B: "Terbatas; terbatas; penuh; pelepasan",
        C: "Penuh; pelepasan; terbatas; penuh",
        D: "Terbatas; pelepasan; terbatas; penuh"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dividen boleh dipajaki Indonesia tetapi dibatasi 10% (hak pemajakan terbatas). Imbalan jasa adalah laba usaha yang tanpa BUT hanya dapat dipajaki Valdora, sehingga Indonesia melepaskan hak pemajakannya. Fee komisaris (Pasal 16) dan penghasilan harta tak gerak (Pasal 6) dapat dipajaki Indonesia tanpa batas tarif, sehingga Indonesia mempunyai hak pemajakan penuh dan berlaku tarif domestik.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Imbalan jasa bukan dividen, bunga, atau royalti; tanpa BUT pasal laba usaha menyerahkannya hanya kepada Valdora. Sewa vila dari harta tak gerak di Indonesia justru hak penuh negara letak harta.",
          C: "Pasal 10 membatasi tarif dividen 10% (terbatas), sedangkan Pasal 16 tidak memuat batas tarif sehingga fee komisaris termasuk hak penuh.",
          D: "Fee komisaris tidak dibatasi tarif P3B; klasifikasinya penuh, bukan terbatas."
        },
        jebakan: "Menganggap semua pembayaran kepada residen negara mitra otomatis memakai 'tarif P3B'. Klasifikasi ditentukan rumusan pasal: 'hanya dapat' (pelepasan), 'dapat juga ... tidak melebihi' (terbatas), 'dapat' tanpa batas (penuh)."
      },
      dasarHukum: [{ pasal: "Pasal 6, 7, 10, dan 16 P3B (Model OECD/UN)" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-121", topik: "C10.1", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-13",
      stem: "Lanjutan V-C10-13 (P3B Indonesia–Valdora: dividen paling tinggi 10%; laba usaha tanpa BUT hanya dipajaki Valdora; fee komisaris dipajaki Indonesia tanpa batas tarif; P3B tidak memuat pasal khusus imbalan jasa teknik). Semua penerima residen Valdora, beneficial owner, dan Form DGT-nya terekam di Coretax sebelum pembayaran. Pada Juni 2026 dibayar: dividen PT Kencana Agro kepada Valdora Holdings Ltd. Rp1.000.000.000; imbalan jasa konsultansi teknik PT Sinar Teknik kepada Valdora Engineering Ltd. (tanpa BUT) Rp400.000.000; dan honorarium komisaris PT Bintang Logistik kepada Mr. Erik Lund Rp150.000.000. Jumlah PPh Pasal 26 yang wajib dipotong ketiga pemotong atas pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp130.000.000",
        B: "Rp210.000.000",
        C: "Rp115.000.000",
        D: "Rp310.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dividen (hak terbatas) dipotong 10%, imbalan jasa tanpa BUT (pelepasan) tidak dipotong, dan fee komisaris (hak penuh) dipotong tarif domestik 20%.",
        jejakHitung: [["Dividen: 10% × Rp1.000.000.000", "Rp100.000.000"], ["Jasa tanpa BUT (pelepasan hak)", "Rp0"], ["Fee komisaris: 20% × Rp150.000.000", "Rp30.000.000"], ["Jumlah PPh Pasal 26", "Rp130.000.000"]],
        mengapaSalah: {
          B: "Memotong 20% atas imbalan jasa (Rp80.000.000), padahal laba usaha tanpa BUT hanya dipajaki Valdora.",
          C: "Memakai 10% untuk fee komisaris (Rp15.000.000); Pasal 16 tidak membatasi tarif sehingga berlaku 20%.",
          D: "Mengabaikan P3B dan memotong 20% atas seluruh pembayaran; Form DGT sah membuat batas dan pelepasan hak dalam P3B berlaku."
        },
        jebakan: "Mengira Form DGT selalu menurunkan tarif ke angka yang sama untuk semua jenis penghasilan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7, 10, dan 16 P3B" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-122", topik: "C10.1", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "Pada Agustus 2026 terdapat tiga pembayaran kepada residen Negara Austral (mitra P3B) yang semuanya beneficial owner dan telah menyerahkan Form DGT sah sebelum pembayaran: (1) uang pensiun bulanan Rp20.000.000 yang dibayar Dana Pensiun Samudra (dana pensiun pemberi kerja PT Samudra Kimia) kepada Mr. Liam Ward, mantan manajer yang sejak 2024 menetap di Austral; (2) honorarium penampilan grup musik asal Austral pada acara ulang tahun PT Samudra Kimia di Jakarta Rp300.000.000; (3) bunga pinjaman yang dibayar PT Samudra Kimia kepada Austral Finance Ltd. Rp500.000.000. P3B mengatur: pensiun sehubungan dengan pekerjaan pada masa lalu hanya dapat dikenai pajak di negara domisili penerima; penghasilan artis dan atlet dapat dikenai pajak di negara tempat kegiatan dilakukan; bunga dapat juga dikenai pajak di negara sumber dengan tarif paling tinggi 10%. Jumlah PPh Pasal 26 yang dipotong atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp110.000.000",
        B: "Rp114.000.000",
        C: "Rp80.000.000",
        D: "Rp164.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pensiun swasta termasuk pelepasan hak pemajakan negara sumber (tidak dipotong), honorarium artis termasuk hak penuh (20% domestik), dan bunga termasuk hak terbatas (10%).",
        jejakHitung: [["Pensiun (pelepasan hak)", "Rp0"], ["Artis: 20% × Rp300.000.000", "Rp60.000.000"], ["Bunga: 10% × Rp500.000.000", "Rp50.000.000"], ["Jumlah PPh Pasal 26", "Rp110.000.000"]],
        mengapaSalah: {
          B: "Memotong 20% atas pensiun (Rp4.000.000), padahal P3B menyerahkan pensiun hanya kepada negara domisili.",
          C: "Memakai 10% untuk honorarium artis (Rp30.000.000); pasal artis tidak membatasi tarif negara tempat kegiatan.",
          D: "Memotong 20% atas semua pembayaran tanpa menerapkan P3B."
        },
        jebakan: "Mengira pensiun yang dibayar dari Indonesia selalu dipajaki Indonesia; dalam P3B rumusan 'hanya dapat dikenai pajak' di negara domisili berarti Indonesia melepaskan haknya."
      },
      dasarHukum: [{ pasal: "Pasal 11, 17, dan 18 P3B (Model OECD)" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-123", topik: "C10.1", tingkat: ["C"], jenis: "konsep", kesulitan: 2,
      stem: "Direksi PT Austral Mining Indonesia, anak perusahaan grup dari Negara Austral, meminta ringkasan ketentuan khusus P3B Indonesia–Austral di luar pasal distributif sebelum grup mendirikan BUT konsultansi di Balikpapan dan menugaskan beberapa ekspatriat ke Indonesia. Konsultan menyusun empat pernyataan. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pasal nondiskriminasi mewajibkan Indonesia memberikan PTKP dan tambahan tanggungan keluarga kepada setiap residen Austral yang menerima penghasilan dari Indonesia, sama seperti wajib pajak orang pribadi dalam negeri",
        B: "Pasal nondiskriminasi melarang pengenaan pajak atas BUT residen Austral yang lebih berat daripada pajak atas perusahaan Indonesia yang menjalankan kegiatan yang sama, kecuali yang secara khusus diizinkan P3B seperti pajak atas laba cabang; pasal itu tidak mewajibkan pemberian pengurangan pribadi kepada nonresiden",
        C: "Pasal bantuan penagihan memberi wewenang kepada pejabat pajak Austral untuk menyita sendiri harta penanggung pajak Austral yang berada di Indonesia",
        D: "Pasal pertukaran informasi hanya dapat dipakai atas permintaan, dan Indonesia boleh menolak permintaan Austral semata-mata karena informasi yang diminta dipegang bank"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Nondiskriminasi (Pasal 24 Model OECD) melindungi warga negara dan BUT negara mitra dari perlakuan pajak yang lebih berat dalam keadaan yang sama. Branch profit tax lazim dikecualikan secara tegas dalam P3B Indonesia, dan pasal itu tidak mewajibkan pemberian pengurangan pribadi kepada nonresiden.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 24 ayat (3) Model OECD menegaskan negara tidak wajib memberikan pengurangan pribadi dan keringanan karena status keluarga kepada residen negara lain.",
          C: "Bantuan penagihan dilaksanakan otoritas negara yang diminta (di Indonesia: DJP dengan instrumen UU PPSP) atas klaim pajak yang diterimanya, bukan oleh pejabat negara peminta.",
          D: "Pertukaran informasi dapat berupa permintaan, spontan, atau otomatis; penolakan semata karena informasi dipegang bank tidak diperkenankan."
        },
        jebakan: "Membaca nondiskriminasi sebagai kewajiban menyamakan seluruh perlakuan, termasuk PTKP, antara residen dan nonresiden."
      },
      dasarHukum: [{ pasal: "Pasal 24, 26, dan 27 Model OECD (sebagaimana dimuat dalam P3B yang berlaku)" }, { pasal: "Pasal 20A UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-124",
      topik: "C10.1",
      tingkat: ["C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Arunika Data Indonesia (WP badan dalam negeri) menerima bunga Rp600.000.000 dari Meridian Corp., debitur yang berkedudukan di Negara Selandra. Selandra memotong pajak 20% atas bunga itu karena bersumber di wilayahnya, sedangkan Indonesia memajaki bunga yang sama sebagai bagian penghasilan PT Arunika dari seluruh dunia. Sampai 2026 Indonesia belum mempunyai P3B dengan Selandra. Pernyataan yang paling tepat mengenai keadaan ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Terjadi pemajakan berganda ekonomis karena dua negara memajaki dua wajib pajak yang berbeda atas penghasilan yang sama; tanpa P3B tidak ada keringanan", B: "Terjadi pemajakan berganda yuridis akibat benturan asas domisili Indonesia dengan asas sumber Selandra; tanpa P3B keringanan diberikan sepihak melalui kredit pajak luar negeri Pasal 24 UU PPh dengan batas yang dihitung per jenis penghasilan untuk tiap negara", C: "Tidak terjadi pemajakan berganda karena tanpa P3B Indonesia tidak berhak memajaki bunga yang bersumber dari Selandra", D: "Terjadi benturan dua klaim residen yang diselesaikan dengan tie-breaker, sehingga hanya negara tempat manajemen efektif yang berhak memajaki" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Satu wajib pajak (PT Arunika) dipajaki dua negara atas penghasilan yang sama: Indonesia berdasarkan asas domisili (penghasilan dari seluruh dunia, Pasal 4 ayat (1) UU PPh) dan Selandra berdasarkan asas sumber. Itu pemajakan berganda yuridis; tanpa P3B, Indonesia memberi keringanan sepihak melalui kredit Pasal 24 (ordinary credit yang dihitung per jenis penghasilan untuk tiap negara, Pasal 6 ayat (2) PMK 192/PMK.03/2018).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pemajakan berganda ekonomis menyangkut dua wajib pajak berbeda (mis. laba perusahaan dan dividen pemegang saham); di sini wajib pajaknya satu, dan Pasal 24 tetap memberi keringanan tanpa P3B.",
          C: "Wajib pajak dalam negeri dipajaki atas penghasilan dari seluruh dunia; P3B hanya membatasi hak pemajakan, tidak menciptakan hak domisili.",
          D: "Tie-breaker dipakai bila satu wajib pajak dianggap residen di dua negara; PT Arunika hanya residen Indonesia."
        },
        jebakan: "Mengira tanpa P3B tidak ada mekanisme penghindaran pajak berganda; kredit Pasal 24 berlaku sepihak."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "C10-125", topik: "C10.8", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021 (parafrase): Menteri Keuangan berwenang melakukan kerja sama bantuan penagihan pajak dengan negara atau yurisdiksi mitra berdasarkan perjanjian internasional secara resiprokal. Pemberian dan permintaan bantuan penagihan pajak dilaksanakan oleh Direktur Jenderal Pajak. Bantuan penagihan untuk negara mitra dilakukan setelah diterima klaim pajak, dan nilai klaim pajak dipersamakan dengan utang pajak.",
      stem: "Otoritas pajak Negara Rhenia (mitra P3B yang memuat pasal bantuan penagihan; kerja sama berlaku resiprokal) menyampaikan klaim pajak kepada DJP atas utang PPh Mr. Anton Keller, residen Rhenia, sebesar ekuivalen Rp2.400.000.000. Utang itu sudah tidak dapat disengketakan lagi di Rhenia. Mr. Keller tidak mempunyai harta di Rhenia, tetapi memiliki apartemen di Jakarta dan deposito pada bank di Surabaya. Berdasarkan kutipan, tindak lanjut yang tepat di Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Juru sita pajak Rhenia datang ke Indonesia dan menyita apartemen serta deposito Mr. Keller dengan didampingi pegawai DJP",
        B: "DJP menagih nilai klaim pajak yang dipersamakan dengan utang pajak, dengan tindakan penagihan menurut UU PPSP (antara lain surat paksa, penyitaan, dan lelang) oleh juru sita pajak Indonesia",
        C: "DJP harus lebih dulu menetapkan Mr. Keller sebagai subjek pajak dalam negeri dan menerbitkan SKPKB PPh sebelum dapat menagih",
        D: "DJP hanya dapat meneruskan data harta Mr. Keller kepada Rhenia melalui pertukaran informasi karena P3B tidak dapat menjadi dasar penagihan di Indonesia"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setelah klaim pajak negara mitra diterima, nilainya dipersamakan dengan utang pajak dan ditagih DJP dengan instrumen hukum Indonesia (UU PPSP). Kewenangan eksekusi tetap pada otoritas negara yang diminta.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pejabat negara peminta tidak mempunyai kewenangan eksekusi di wilayah Indonesia; penyitaan dilakukan juru sita pajak Indonesia.",
          C: "Dasar penagihan adalah klaim pajak negara mitra, bukan ketetapan pajak Indonesia; Mr. Keller tetap residen Rhenia.",
          D: "Pertukaran informasi dan bantuan penagihan adalah dua bentuk kerja sama yang berbeda; Pasal 20A UU KUP dan pasal bantuan penagihan P3B memungkinkan penagihan di Indonesia."
        },
        jebakan: "Mencampuradukkan pertukaran informasi dengan bantuan penagihan, atau mengira pejabat asing dapat menyita langsung di Indonesia."
      },
      dasarHukum: [{ pasal: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 27 Model OECD (pasal bantuan penagihan P3B)" }, { pasal: "UU 19/1997 s.t.d.t.d. UU 19/2000 (PPSP); PMK 61/2023" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "C10-126", topik: "C10.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Andalas Resources mempunyai utang PPh Badan Tahun Pajak 2023 berdasarkan SKPKB sebesar Rp9.000.000.000 yang tidak diajukan keberatan dan telah ditagih dengan surat paksa. Lelang seluruh harta perusahaan di Indonesia hanya menghasilkan Rp3.500.000.000. Hasil penelusuran menunjukkan perusahaan memiliki deposito ekuivalen Rp7.000.000.000 pada bank di Negara Rhenia, mitra yang telah menyepakati kerja sama bantuan penagihan secara resiprokal dengan Indonesia. Langkah DJP yang tepat untuk menagih sisa utang pajak Rp5.500.000.000 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Juru sita pajak menerbitkan surat perintah melaksanakan penyitaan atas deposito di Rhenia dan memerintahkan bank di Rhenia memblokirnya berdasarkan UU PPSP",
        B: "DJP meminta bantuan penagihan kepada otoritas Rhenia dengan menyampaikan klaim pajak atas sisa utang yang sudah tidak disengketakan; penagihan atas deposito dilaksanakan otoritas Rhenia menurut ketentuan Rhenia",
        C: "DJP menunggu PT Andalas Resources mengajukan keberatan atas SKPKB agar utang pajaknya memenuhi syarat untuk dimintakan bantuan penagihan",
        D: "DJP cukup meminta data deposito melalui pertukaran informasi atas permintaan, lalu mengusulkan penghapusan sisa utang karena harta di luar negeri tidak dapat ditagih"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kewenangan juru sita pajak berhenti di wilayah Indonesia. Untuk harta di negara mitra, DJP meminta bantuan penagihan secara resiprokal (Pasal 20A UU KUP) dengan menyampaikan klaim pajak atas utang yang sudah tidak disengketakan; otoritas Rhenia menagih dengan instrumen hukumnya sendiri.",
        jejakHitung: [["Utang menurut SKPKB", "Rp9.000.000.000"], ["Hasil lelang harta di Indonesia", "Rp3.500.000.000"], ["Sisa yang dimintakan bantuan penagihan", "Rp5.500.000.000"]],
        mengapaSalah: {
          A: "Surat paksa dan penyitaan menurut UU PPSP tidak dapat dilaksanakan di yurisdiksi lain.",
          C: "Klaim yang dimintakan bantuan justru harus sudah tidak disengketakan; lagi pula batas waktu keberatan atas SKPKB 2023 sudah lewat.",
          D: "Pertukaran informasi hanya menyediakan data; harta di luar negeri dapat ditagih melalui bantuan penagihan, sehingga penghapusan piutang pajak tidak tepat selama harta itu ada."
        },
        jebakan: "Mengira surat paksa Indonesia berlaku di luar negeri, atau menyamakan permintaan informasi dengan permintaan penagihan."
      },
      dasarHukum: [{ pasal: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 11–16 Konvensi MAC (Perpres 159/2014 s.t.d.d. Perpres 56/2024)" }, { pasal: "UU 19/1997 s.t.d.t.d. UU 19/2000 (PPSP)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-127", topik: "C10.8", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Mr. Paolo Ricci (WNA, subjek pajak dalam negeri sejak 2022) mempunyai utang pajak Rp1.200.000.000 berdasarkan SKPKB PPh Orang Pribadi Tahun Pajak 2024 yang tidak diajukan keberatan. Surat paksa telah diberitahukan pada 10 Agustus 2026, tetapi utang belum dilunasi. Pada September 2026 KPP memperoleh informasi bahwa ia berencana meninggalkan Indonesia untuk selama-lamanya ke Negara Valdora (mitra P3B yang memuat pasal bantuan penagihan dan telah menyepakati kerja sama resiprokal dengan Indonesia) serta memindahkan seluruh tabungannya ke sana. Urutan tindakan yang paling tepat bagi DJP adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengupayakan pencegahan ke luar negeri sebagai tindakan PPSP selama ia masih berada di Indonesia; bila ia telanjur pergi dan hartanya berada di Valdora, mengajukan permintaan bantuan penagihan kepada Valdora atas utang yang sudah tidak disengketakan",
        B: "Langsung mengajukan bantuan penagihan kepada Valdora, karena pencegahan ke luar negeri hanya dapat dikenakan terhadap warga negara Indonesia",
        C: "Menunggu ia menjadi residen Valdora, lalu meminta Valdora memotong pajaknya melalui mekanisme pertukaran informasi otomatis",
        D: "Mengusulkan penghapusan utang pajak karena kewajiban pajak subjektifnya berakhir saat meninggalkan Indonesia untuk selama-lamanya"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Utang Rp1,2 miliar memenuhi batas pencegahan (paling sedikit Rp100 juta) bila penanggung pajak diragukan itikad baiknya, dan pencegahan berlaku bagi penanggung pajak tanpa memandang kewarganegaraan. Berakhirnya kewajiban subjektif tidak menghapus utang pajak; bila harta telanjur berada di Valdora, DJP meminta bantuan penagihan secara resiprokal.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pencegahan menurut UU PPSP ditujukan kepada penanggung pajak, termasuk WNA; bantuan penagihan adalah upaya berikutnya untuk harta di luar negeri.",
          C: "Pertukaran informasi otomatis tidak menagih pajak; penagihan lintas negara memakai bantuan penagihan atas klaim pajak.",
          D: "Utang pajak yang timbul selama menjadi subjek pajak dalam negeri tetap harus dilunasi walaupun kewajiban subjektifnya berakhir."
        },
        jebakan: "Mengira pencegahan hanya untuk WNI, atau mengira berakhirnya kewajiban subjektif menghapus utang pajak."
      },
      dasarHukum: [{ pasal: "Pasal 29 UU 19/1997 s.t.d.t.d. UU 19/2000 (PPSP)" }, { pasal: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 61/2023" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-128", topik: "C10.8", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Untuk pelatihan pegawai baru, Seksi Pertukaran Informasi menyusun contoh arus informasi perpajakan antara Indonesia dan negara mitra pada 2026–2027: (1) saldo dan penghasilan rekening simpanan milik residen Jepang pada bank di Jakarta yang dilaporkan bank melalui OJK; (2) data transaksi penukaran aset kripto milik pengguna residen Singapura pada penyedia jasa aset kripto di Indonesia untuk tahun data 2026; (3) laporan per negara (CbCR) grup usaha yang entitas induk utamanya berkedudukan di Indonesia; (4) salinan kontrak dan mutasi rekening bank afiliasi di Singapura yang diminta DJP karena dibutuhkan dalam pemeriksaan PT Cahaya Mineral. Arus informasi yang BUKAN merupakan pertukaran informasi secara otomatis adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "(1) rekening simpanan residen Jepang",
        B: "(2) transaksi aset kripto residen Singapura",
        C: "(3) CbCR grup berinduk di Indonesia",
        D: "(4) kontrak dan mutasi rekening afiliasi untuk pemeriksaan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Informasi rekening keuangan (CRS), aset kripto (CARF; pertukaran pertama 2027 untuk data 2026), dan CbCR dipertukarkan otomatis secara berkala tanpa permintaan. Dokumen yang diminta untuk pemeriksaan kasus tertentu adalah pertukaran informasi atas permintaan (on request).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Rekening keuangan nonresiden dilaporkan lembaga keuangan dan dipertukarkan otomatis (CRS).",
          B: "Sejak PMK 108/2025, aset kripto masuk lingkup AEoI melalui CARF; anggapan bahwa kripto di luar AEoI berasal dari ketentuan lama.",
          C: "CbCR yang disampaikan entitas induk dipertukarkan otomatis dengan yurisdiksi tempat anggota grup berada."
        },
        jebakan: "Menganggap semua pertukaran informasi berjalan otomatis; permintaan untuk pemeriksaan kasus tertentu adalah EoI atas permintaan."
      },
      dasarHukum: [{ pasal: "Pasal 26 P3B; Konvensi MAC (Perpres 159/2014)" }, { pasal: "PMK 108/2025", berlakuSejak: "2026-01-01" }, { pasal: "PMK 172/2023 (CbCR)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-129",
      topik: "C10.8",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Pada Oktober 2026 petugas kepatuhan PT Kripto Nusantara Exchange (penyedia jasa aset kripto berizin) dan PT Bank Sentosa menelaah kewajiban pelaporan informasi untuk kepentingan perpajakan. Kedua perusahaan masih memakai SOP yang disusun berdasarkan PMK 70/PMK.03/2017. Pernyataan yang paling tepat untuk menyesuaikan SOP keduanya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SOP tetap berdasarkan PMK 70/PMK.03/2017; aset kripto bukan rekening keuangan sehingga penyedia jasa aset kripto tidak mempunyai kewajiban pelaporan", B: "PMK 108/2025 yang berlaku sejak 1 Januari 2026 mencabut PMK 70/PMK.03/2017 beserta perubahannya; bank tetap melaporkan rekening keuangan (CRS) melalui OJK paling lambat 1 Agustus, sedangkan penyedia jasa aset kripto pelapor CARF melaporkan transaksi aset kripto mulai tahun data 2026 untuk pertukaran pertama pada 2027", C: "Penyedia jasa aset kripto menyampaikan data penggunanya langsung kepada otoritas pajak negara residen pengguna tanpa melalui DJP", D: "Bank tidak perlu menyampaikan laporan bila tidak ada rekening yang wajib dilaporkan karena PMK 108/2025 menghapus laporan nihil" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 108/2025 menggantikan PMK 70/PMK.03/2017 sejak 1 Januari 2026 dan menambahkan kewajiban CARF bagi penyedia jasa aset kripto; data 2026 dipertukarkan pertama kali pada 2027. Laporan CRS lembaga jasa keuangan tetap melalui OJK paling lambat 1 Agustus.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PMK 70/PMK.03/2017 sudah dicabut; aset kripto kini dilaporkan melalui kerangka CARF.",
          C: "Laporan disampaikan kepada DJP (langsung atau melalui saluran yang ditetapkan), lalu DJP yang mempertukarkannya dengan otoritas mitra.",
          D: "Laporan nihil tetap wajib bila tidak ada rekening yang wajib dilaporkan."
        },
        jebakan: "Memakai SOP lama berbasis PMK 70/PMK.03/2017 yang sudah dicabut."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 Pasal 9, Pasal 11 ayat (5), Pasal 18 ayat (6), Pasal 60, dan Pasal 61", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017", berlakuSejak: "2017-08-23" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-130",
      topik: "C10.8",
      tingkat: ["C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Dompet Nusa Digital dan PT Saku Rupiah Pay adalah penyelenggara jasa pembayaran yang mengelola produk uang elektronik (e-wallet), memenuhi kriteria Lembaga Simpanan menurut PMK 108/2025, dan terdaftar sebagai lembaga keuangan pelapor. Seluruh pengguna kedua perusahaan adalah residen Indonesia. Per 31 Desember 2026: (1) PT Dompet Nusa Digital hanya mempunyai akun milik orang pribadi, dengan saldo agregat tertinggi per pengguna Rp20.000.000; (2) PT Saku Rupiah Pay mempunyai akun milik orang pribadi dengan saldo agregat tertinggi per pengguna Rp15.000.000 serta 120 akun uang elektronik milik badan usaha dalam negeri (merchant) dengan saldo Rp250.000.000 sampai Rp900.000.000 (rata-rata saldo 90 hari terakhir tiap akun juga di atas nilai setara USD 10.000); seluruh akun tersebut memenuhi definisi rekening keuangan menurut PMK 108/2025. Petugas kepatuhan kedua perusahaan menyimpulkan bahwa e-wallet bukan bank sehingga tidak perlu menyampaikan laporan apa pun atas data tahun 2026. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kesimpulan petugas benar: e-wallet bukan bank, sehingga kedua perusahaan tidak termasuk lembaga keuangan pelapor", B: "PT Dompet Nusa Digital menyampaikan laporan nihil karena tidak ada rekening yang wajib dilaporkan, sedangkan PT Saku Rupiah Pay melaporkan 120 akun badan usaha tanpa menerapkan ambang Rp1 miliar", C: "Kedua perusahaan tidak menyampaikan laporan karena tidak ada akun yang saldonya mencapai Rp1 miliar; kewajiban baru timbul bila ada rekening yang wajib dilaporkan", D: "Kedua perusahaan melaporkan seluruh akun orang pribadi dan badan usaha karena produk uang elektronik tidak mengenal ambang saldo" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PMK 108/2025 memasukkan pengelola produk uang elektronik tertentu (penyelenggara jasa pembayaran/e-wallet) ke dalam Lembaga Simpanan, sehingga keduanya wajib melakukan uji tuntas dan menyampaikan laporan atas data tahun 2026. Untuk kepentingan domestik, akun orang pribadi di Lembaga Simpanan dilaporkan hanya bila saldo agregatnya pada lembaga yang sama per 31 Desember paling sedikit Rp1 miliar (tidak ada yang mencapainya), sedangkan akun entitas dilaporkan tanpa ambang Rp1 miliar; stem menetapkan bahwa seluruh akun merchant memenuhi definisi rekening keuangan. PT Dompet Nusa Digital tidak mempunyai rekening yang wajib dilaporkan sehingga tetap menyampaikan laporan nihil; PT Saku Rupiah Pay melaporkan 120 akun badan usaha.",
        jejakHitung: [
          ["Akun OP tertinggi PT Dompet Nusa Digital", "Rp20.000.000 < Rp1 M → tidak dilaporkan"],
          ["Akun badan PT Dompet Nusa Digital", "Tidak ada → laporan nihil"],
          ["Akun OP tertinggi PT Saku Rupiah Pay", "Rp15.000.000 < Rp1 M → tidak dilaporkan"],
          ["120 akun badan PT Saku Rupiah Pay", "Rp250 juta–Rp900 juta; rekening entitas tanpa ambang Rp1 miliar → dilaporkan"]
        ],
        mengapaSalah: {
          A: "Sejak PMK 108/2025, Lembaga Simpanan mencakup pengelola produk uang elektronik tertentu; status bukan bank tidak membebaskan kewajiban uji tuntas dan pelaporan.",
          C: "Laporan nihil tetap wajib bila tidak ada rekening yang wajib dilaporkan, dan ambang Rp1 miliar hanya untuk akun orang pribadi; akun badan dilaporkan tanpa ambang Rp1 miliar.",
          D: "Ambang Rp1 miliar tetap berlaku bagi akun orang pribadi di Lembaga Simpanan, termasuk e-wallet."
        },
        jebakan: "Menganggap e-wallet bukan pelapor, menerapkan ambang Rp1 miliar pada akun badan, atau tidak menyampaikan laporan nihil."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 Pasal 1 angka 24 dan angka 44 huruf b (Lembaga Simpanan termasuk pengelola Produk Uang Elektronik Tertentu)", berlakuSejak: "2026-01-01" }, { pasal: "PMK 108/2025 Pasal 35 ayat (8) huruf a angka 1 dan angka 2; Pasal 35 ayat (9) (laporan nihil)", berlakuSejak: "2026-01-01" }, { pasal: "PMK 108/2025 Lampiran I Huruf A angka 3 huruf t butir 7) (pengecualian uang elektronik ≤ USD10.000)", berlakuSejak: "2026-01-01" }, { pasal: "UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-131", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-C10-14", laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal V-C10-14: PT Bintang Samudra Logistik (WPDN, bukan bank; pembukuan dalam rupiah dengan kurs tengah BI tanggal transaksi) menerima pinjaman USD2.000.000 dari Harbour Credit Pte. Ltd., residen Singapura yang tidak memiliki BUT di Indonesia, menyatakan diri sebagai beneficial owner, dan Form DGT-nya yang sah terekam di Coretax pada 2 September 2026. Batas tarif bunga menurut P3B Indonesia–Singapura yang dipakai dalam soal ini 10%. Bunga kuartal III 2026 sebesar USD40.000 jatuh tempo dan dibebankan sebagai biaya serta utang bunga pada 30 September 2026, tetapi baru ditransfer pada 12 Oktober 2026. Data kurs: KMK yang berlaku 23–29 September 2026 Rp16.350; KMK yang berlaku 30 September–6 Oktober 2026 Rp16.400; KMK yang berlaku 7–13 Oktober 2026 Rp16.480; kurs tengah BI 30 September 2026 Rp16.420; kurs tengah BI 12 Oktober 2026 Rp16.500. PPh Pasal 26 atas bunga kuartal III dan Masa Pajak terutangnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp65.920.000; Masa Pajak Oktober 2026",
        B: "Rp65.680.000; Masa Pajak September 2026",
        C: "Rp65.600.000; Masa Pajak September 2026",
        D: "Rp131.200.000; Masa Pajak September 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh 26 terutang pada saat dibayar, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu; di sini 30 September 2026 (Masa September). Form DGT sah sudah terekam sebelum saat terutang sehingga tarif P3B 10% berlaku, dan DPP valas dikonversi dengan kurs KMK yang berlaku pada saat terutang (Rp16.400), bukan kurs tengah BI yang dipakai pembukuan.",
        jejakHitung: [["Saat terutang (jatuh tempo, lebih dahulu daripada transfer)", "30 September 2026 → Masa September"], ["Kurs KMK yang berlaku 30 September 2026", "Rp16.400"], ["DPP = USD40.000 × Rp16.400", "Rp656.000.000"], ["PPh 26 = 10% × Rp656.000.000", "Rp65.600.000"], ["Batas setor", "15 Oktober 2026"]],
        mengapaSalah: {
          A: "Memakai tanggal transfer 12 Oktober dan kurs KMK 7–13 Oktober (Rp16.480); saat jatuh tempo lebih dahulu sehingga masa dan kurs mengikuti 30 September.",
          B: "Memakai kurs tengah BI Rp16.420 milik pembukuan; DPP pemotongan PPh memakai kurs KMK.",
          D: "Memakai tarif domestik 20% padahal Form DGT sah sudah terekam sebelum saat terutang."
        },
        jebakan: "Mencampur kurs pembukuan (kurs tengah BI) dengan kurs pajak (KMK), dan memakai tanggal transfer sebagai saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 P3B Indonesia–Singapura (bunga)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "KMK kurs pajak mingguan (kurs pada saat terutang)" }, { pasal: "PMK 81/2024 (setor tanggal 15)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-132",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-C10-14",
      laporanUjian: ["C-2026-10"],
      stem: "Lanjutan V-C10-14 (PT Bintang Samudra Logistik; pinjaman dari Harbour Credit Pte. Ltd., Singapura; batas tarif bunga P3B 10%; Form DGT sah terekam di Coretax pada 2 September 2026; PPh Pasal 26 atas bunga kuartal III terutang 30 September 2026 sebesar Rp65.600.000 dengan kurs KMK Rp16.400). Atas bunga kuartal II yang dibayar 30 Juni 2026, PT Bintang telah memotong dan menyetor PPh 26 tarif 20% sebesar Rp130.400.000 karena Form DGT belum terekam saat itu; menurut tarif P3B seharusnya Rp65.200.000. Saat menyusun SPT Masa PPh Unifikasi Masa September 2026, staf pajak mengusulkan dua penyesuaian: (1) kelebihan potong kuartal II Rp65.200.000 dikompensasikan; (2) rugi selisih kurs atas utang bunga kuartal III Rp3.200.000 (kurs tengah BI 30 September Rp16.420 dan 12 Oktober Rp16.500) dikurangkan dari setoran. Jumlah PPh Pasal 26 Masa September 2026 yang wajib disetor dan dilaporkan PT Bintang, beserta batas waktunya, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp400.000, yaitu Rp65.600.000 dikurangi kompensasi kelebihan potong kuartal II Rp65.200.000; setor paling lambat 15 Oktober 2026", B: "Rp0 untuk Masa September 2026, karena bunga kuartal III baru ditransfer 12 Oktober 2026 sehingga PPh 26 dilaporkan dalam Masa Oktober 2026", C: "Rp62.400.000, yaitu Rp65.600.000 dikurangi rugi selisih kurs Rp3.200.000; setor paling lambat 15 Oktober 2026", D: "Rp65.600.000; setor paling lambat 15 Oktober 2026 dan lapor dalam SPT Masa PPh Unifikasi paling lambat 20 Oktober 2026, tanpa dikurangi kelebihan potong kuartal II maupun selisih kurs" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban PPh 26 Masa September berdiri sendiri: terutang saat bunga kuartal III jatuh tempo (30 September 2026), dihitung 10% × USD40.000 × kurs KMK Rp16.400 = Rp65.600.000, disetor paling lambat tanggal 15 (PMK 81/2024 Pasal 94 ayat (2) huruf g) dan dilaporkan paling lambat 20 hari setelah masa berakhir (Pasal 171 ayat (1) huruf g). Kelebihan potong kuartal II karena Form DGT terekam setelah pemotongan adalah kelebihan pemotongan terkait P3B (Pasal 133 huruf b) yang dipulihkan melalui permohonan pengembalian pajak yang seharusnya tidak terutang, diajukan PT Bintang sebagai pemotong dengan surat kuasa Harbour Credit (Pasal 134 ayat (1); PMK 112/2025 Pasal 15), bukan dikompensasikan ke PPh 26 masa lain. Selisih kurs pembukuan (kurs tengah BI) adalah pos komersial/fiskal dalam PPh Badan PT Bintang, bukan pengurang PPh yang dipotong.",
        jejakHitung: [
          ["Saat terutang bunga kuartal III", "30 September 2026 → Masa September"],
          ["PPh 26 = 10% × USD40.000 × Rp16.400", "Rp65.600.000"],
          ["Kelebihan potong kuartal II", "Tidak dikompensasikan → Rp0; dipulihkan lewat permohonan pengembalian oleh PT Bintang (PMK 81/2024 Pasal 134)"],
          ["Rugi selisih kurs (16.500 − 16.420) × USD40.000", "Rp3.200.000 → tidak mengurangi PPh 26"],
          ["Setor / lapor", "15 Oktober 2026 / 20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Kelebihan potong kuartal II terkait P3B dipulihkan melalui permohonan pengembalian yang diajukan pemotong dengan surat kuasa WPLN (PMK 81/2024 Pasal 133 dan Pasal 134; PMK 112/2025 Pasal 15), bukan dikurangkan sepihak dari utang PPh 26 masa lain.",
          B: "PPh 26 terutang pada saat dibayar, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu; jatuh tempo 30 September mendahului transfer.",
          C: "Selisih kurs antara kurs tengah BI saat pencatatan dan saat pelunasan adalah beban/penghasilan dalam pembukuan PT Bintang; DPP PPh 26 tetap memakai kurs KMK saat terutang dan tidak dikurangi selisih kurs."
        },
        jebakan: "Mencampur tiga hal yang terpisah: utang PPh 26 masa berjalan, permohonan pengembalian atas kelebihan potong masa lalu (diajukan pemotong dengan surat kuasa WPLN), dan selisih kurs pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 Pasal 15", berlakuSejak: "2025-12-31" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) huruf g (setor tanggal 15) dan Pasal 171 ayat (1) huruf g (lapor 20 hari)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 Pasal 133 huruf b dan Pasal 134 ayat (1) (pengembalian kelebihan pemotongan terkait P3B)", berlakuSejak: "2025-01-01" }, { pasal: "KMK kurs pajak mingguan (kurs pada saat terutang)" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-133", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 3, kasusId: "V-C10-14",
      kutipan: "Pasal 26 ayat (1a) UU PPh (parafrase): Negara domisili Wajib Pajak luar negeri selain yang menjalankan usaha melalui bentuk usaha tetap di Indonesia adalah negara tempat tinggal atau tempat kedudukan Wajib Pajak luar negeri yang sebenarnya menerima manfaat dari penghasilan tersebut (beneficial owner).",
      stem: "Lanjutan V-C10-14: dalam pemeriksaan PPh Pasal 26 Masa September 2026 atas PT Bintang Samudra Logistik pada 2027, pemeriksa memperoleh perjanjian yang menunjukkan bahwa Harbour Credit Pte. Ltd. mendanai seluruh pinjaman USD2.000.000 dengan pinjaman back-to-back dari induknya, Crestmoor Capital Ltd. (British Virgin Islands; tidak ada P3B dengan Indonesia), dan wajib meneruskan 98% bunga yang diterimanya kepada Crestmoor paling lambat 5 hari setelah diterima. Harbour Credit hanya mempunyai satu pegawai administrasi dan tidak menanggung risiko kredit. PT Bintang telah memotong PPh 26 Masa September 10% (Rp65.600.000 dari DPP Rp656.000.000) berdasarkan Form DGT yang terekam di Coretax. Berdasarkan kutipan, akibat pajak yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Harbour Credit bukan beneficial owner sehingga tarif P3B tidak dapat diterapkan; kekurangan PPh 26 Masa September Rp65.600.000 ditagih kepada PT Bintang sebagai pemotong melalui SKPKB PPh Pasal 26 ditambah sanksi bunga Pasal 13 ayat (2) UU KUP",
        B: "Tarif 10% tetap berlaku karena Form DGT sah telah terekam di Coretax sebelum saat terutang dan PT Bintang beriktikad baik",
        C: "Hanya permohonan pengembalian atas bunga kuartal II yang ditolak; PPh 26 Masa September tidak dikoreksi karena telah disetor tepat waktu",
        D: "Kekurangan Rp65.600.000 ditagih langsung kepada Harbour Credit melalui STP karena Harbour Credit yang menyatakan diri sebagai beneficial owner dalam Form DGT"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Tarif P3B hanya tersedia bagi penerima yang merupakan beneficial owner (Pasal 26 ayat (1a) UU PPh; PMK 112/2025). Perusahaan antara yang wajib meneruskan hampir seluruh bunga, tanpa substansi dan tanpa menanggung risiko, adalah conduit; karena pemilik manfaatnya berada di negara tanpa P3B, tarif yang berlaku 20%. Pemotong yang kurang memotong ditagih melalui SKPKB PPh Pasal 26 dengan sanksi bunga Pasal 13 ayat (2) UU KUP, dan permohonan pengembalian atas kuartal II juga tidak dapat dikabulkan.",
        jejakHitung: [["PPh 26 seharusnya = 20% × Rp656.000.000", "Rp131.200.000"], ["Telah dipotong 10%", "Rp65.600.000"], ["Pokok kekurangan dalam SKPKB PPh 26", "Rp65.600.000"], ["Ditambah", "Sanksi bunga Pasal 13 ayat (2) UU KUP"]],
        mengapaSalah: {
          B: "Form DGT yang terekam tidak menutup pengujian beneficial owner; bila penerima ternyata conduit, tarif P3B gugur.",
          C: "Pengujian beneficial owner berlaku untuk seluruh pembayaran bunga kepada Harbour Credit, termasuk Masa September.",
          D: "Kewajiban memotong ada pada PT Bintang; kekurangan pemotongan ditagih kepada pemotong melalui SKPKB, bukan kepada WPLN melalui STP."
        },
        jebakan: "Menganggap Form DGT yang terekam otomatis menjamin tarif P3B walaupun penerimanya hanya perusahaan perantara."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (beneficial owner dan penyalahgunaan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 13 ayat (1) huruf a dan ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-134",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Pada 14 Oktober 2026 PT Cahaya Agrindo (WPDN) membeli seluruh saham PT Nadi Perangkat Lunak, perseroan tertutup yang didirikan di Indonesia dan tidak memiliki tanah atau bangunan bernilai material, dari dua pemegang saham yang tidak memiliki BUT di Indonesia: (1) Nordlys Invest AS, residen negara mitra P3B, pemilik 60%, harga USD3.000.000; Form DGT-nya sah dan terekam di Coretax sebelum pembayaran; P3B tersebut menyatakan keuntungan dari pengalihan saham semacam ini hanya dapat dikenai pajak di negara domisili penjual; (2) Kestrel Ventures Ltd., berkedudukan di negara yang tidak mempunyai P3B dengan Indonesia, pemilik 40%, harga USD2.000.000 dengan harga perolehan USD500.000. Harga dibayar lunas pada 14 Oktober 2026. Data kurs: KMK yang berlaku 14–20 Oktober 2026 Rp16.500; kurs tengah BI 14 Oktober 2026 Rp16.530. Perkiraan penghasilan neto atas penjualan saham 25% dari harga jual. Jumlah PPh Pasal 26 yang wajib dipotong PT Cahaya Agrindo adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.125.000.000", B: "Rp1.237.500.000", C: "Rp1.653.000.000", D: "Rp1.650.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Nordlys berhak atas P3B yang menyerahkan hak pemajakan keuntungan pengalihan saham hanya kepada negara domisili, sehingga PPh 26-nya tidak dipotong (Pasal 238 ayat (2) PMK 81/2024: pemotongan hanya bila menurut P3B hak pemajakan ada pada Indonesia; bukti potong tetap dibuat dengan fasilitas P3B). Kestrel tidak berhak atas P3B: PPh 26 = 20% × perkiraan neto 25% × harga jual (efektif 5%, Pasal 238 ayat (1) dan (3)), tanpa memperhitungkan harga perolehan, dipotong pembeli (Pasal 239 ayat (1)) dan dikonversi dengan kurs KMK pada saat terutang.",
        jejakHitung: [
          ["Nordlys (P3B: hanya negara domisili; Form DGT sah)", "PPh 26 Rp0"],
          ["Kestrel: perkiraan neto = 25% × USD2.000.000", "USD500.000"],
          ["PPh 26 = 20% × USD500.000", "USD100.000"],
          ["Konversi = USD100.000 × Rp16.500 (KMK 14–20 Oktober)", "Rp1.650.000.000"]
        ],
        mengapaSalah: {
          A: "Mengenakan 5% atas seluruh harga USD5.000.000, termasuk bagian Nordlys yang dilindungi P3B.",
          B: "Menghitung 5% dari selisih harga jual dan harga perolehan (USD1.500.000); perkiraan neto dihitung dari harga jual.",
          C: "Memakai kurs tengah BI Rp16.530; DPP PPh memakai kurs KMK yang berlaku saat terutang."
        },
        jebakan: "Menerapkan 5% secara seragam kepada semua penjual tanpa memeriksa P3B dan Form DGT masing-masing, atau menghitungnya dari keuntungan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 238 dan Pasal 239 PMK 81/2024 (penjualan saham Perseroan oleh WPLN selain BUT)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 13 P3B (keuntungan dari pengalihan harta)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-135", topik: "C10.9", tingkat: ["C"], jenis: "kasus", kesulitan: 2,
      kutipan: "Pasal 26 ayat (5) UU PPh (parafrase): Pemotongan pajak menurut Pasal 26 bersifat final, kecuali antara lain pemotongan atas penghasilan bagi Wajib Pajak luar negeri yang berubah statusnya menjadi Wajib Pajak dalam negeri atau bentuk usaha tetap.",
      stem: "Mr. Hiroshi Tanaka, warga negara Jepang, datang ke Jakarta pada 2 Februari 2026 sebagai pegawai kontrak tiga bulan PT Mitra Robotika dengan gaji bulanan Rp80.000.000. Karena saat itu ia subjek pajak luar negeri, PT Mitra Robotika memotong PPh Pasal 26 20% atas gaji Februari–April 2026, seluruhnya Rp48.000.000. Pada Mei 2026 ia diangkat menjadi pegawai tetap untuk dua tahun, melepas rumahnya di Osaka, memindahkan keluarganya ke Jakarta, dan sejak Mei 2026 dipotong PPh Pasal 21. Sampai akhir 2026 ia berada di Indonesia lebih dari 183 hari dan tidak memiliki penghasilan lain. Berdasarkan kutipan, perlakuan yang tepat atas PPh 26 Rp48.000.000 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh 26 Rp48.000.000 bersifat final; gaji Februari–April tidak dilaporkan lagi dan PPh 26 tidak dapat dikreditkan",
        B: "Mr. Tanaka telah berubah status menjadi subjek pajak dalam negeri; gaji Februari–April ikut dilaporkan dalam SPT Tahunan PPh Orang Pribadi 2026 dan PPh 26 Rp48.000.000 dikreditkan karena pemotongan itu tidak final",
        C: "PT Mitra Robotika membetulkan SPT Masa PPh 21/26 Februari–April dengan mengganti PPh 26 menjadi PPh 21 dan mengembalikan selisihnya secara tunai kepada Mr. Tanaka",
        D: "Mr. Tanaka mengajukan pengembalian Rp48.000.000 sebagai pajak yang seharusnya tidak terutang karena menurut Pasal 15 P3B Indonesia–Jepang gaji itu hanya dipajaki di Jepang"
      },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 26 ayat (5) UU PPh mengecualikan dari sifat final pemotongan PPh 26 atas WPLN yang berubah status menjadi WPDN atau BUT. Setelah menjadi subjek pajak dalam negeri (berada lebih dari 183 hari dan berniat tinggal), Mr. Tanaka melaporkan penghasilan 2026 dalam SPT Tahunan dan mengkreditkan PPh 26 yang telah dipotong bersama PPh 21.",
        jejakHitung: [["PPh 26 Februari–April = 3 × 20% × Rp80.000.000", "Rp48.000.000"], ["Status sejak Mei 2026", "Subjek pajak dalam negeri (Pasal 2 ayat (3) huruf a UU PPh)"], ["Perlakuan dalam SPT Tahunan 2026", "Kredit pajak bersama PPh 21 (tidak final)"]],
        mengapaSalah: {
          A: "Pemotongan PPh 26 atas WPLN yang berubah status tidak final, sehingga penghasilannya dilaporkan dan pajaknya dikreditkan.",
          C: "Pemotongan PPh 26 pada saat itu sudah benar menurut status saat pembayaran; penyelesaiannya melalui kredit dalam SPT Tahunan, bukan pengembalian tunai oleh pemberi kerja.",
          D: "Gaji atas pekerjaan yang dilakukan di Indonesia lebih dari 183 hari dapat dipajaki Indonesia menurut Pasal 15 P3B, dan Mr. Tanaka kini residen Indonesia."
        },
        jebakan: "Menganggap semua PPh 26 final tanpa memperhatikan pengecualian bagi WPLN yang berubah status."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 15 P3B Indonesia–Jepang (pekerjaan dalam hubungan kerja)" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-136",
      topik: "C10.9",
      tingkat: ["C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Pada Oktober 2026 empat pihak yang tidak memiliki BUT di Indonesia dan tidak menyerahkan Form DGT menerima pembayaran masing-masing Rp10.000.000.000 (seluruhnya bukan saham pendiri): (1) Ms. Clara Weiss menjual tanah dan bangunan vila di Badung, Bali, kepada PT Dewata Resort; (2) Pinewood Capital Ltd. menjual saham PT Sentosa Pangan Tbk melalui transaksi di Bursa Efek Indonesia; (3) Redfern Holdings Ltd. menjual saham PT Arunika Logistik (perseroan tertutup yang didirikan di Indonesia) kepada PT Sinar Niaga; (4) Merchant Bank plc menerima premi swap suku bunga dari PT Baruna Energi. Pemetaan perlakuan PPh yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) PPh 26 5% Rp500.000.000; (2) PPh 26 5% Rp500.000.000; (3) PPh 26 5% Rp500.000.000; (4) PPh 26 20% Rp2.000.000.000", B: "(1) PPh final Pasal 4 ayat (2) 2,5% Rp250.000.000; (2) PPh 26 5% Rp500.000.000; (3) PPh 26 5% Rp500.000.000; (4) PPh 26 20% Rp2.000.000.000", C: "(1) PPh final Pasal 4 ayat (2) 2,5% Rp250.000.000; (2) PPh final 0,1% Rp10.000.000; (3) PPh 26 5% Rp500.000.000; (4) PPh 26 20% Rp2.000.000.000", D: "(1) PPh final Pasal 4 ayat (2) 2,5% Rp250.000.000; (2) PPh final 0,1% Rp10.000.000; (3) PPh 26 20% Rp2.000.000.000; (4) PPh 26 5% Rp500.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 26 ayat (2) UU PPh mengenakan PPh 26 atas penjualan harta di Indonesia kecuali yang diatur Pasal 4 ayat (2). Pengalihan tanah dan/atau bangunan dikenai PPh final 2,5% dan penjualan saham di bursa PPh final 0,1%, siapa pun penjualnya. Saham nonbursa dikenai 20% × perkiraan neto 25% (efektif 5%), sedangkan premi swap adalah objek Pasal 26 ayat (1) dengan 20% × bruto.",
        jejakHitung: [
          ["(1) Tanah dan bangunan: 2,5% × Rp10 M", "Rp250.000.000 (PPh final Pasal 4 ayat (2))"],
          ["(2) Saham bursa: 0,1% × Rp10 M", "Rp10.000.000 (PPh final)"],
          ["(3) Saham nonbursa: 20% × 25% × Rp10 M", "Rp500.000.000 (PPh 26)"],
          ["(4) Premi swap: 20% × Rp10 M", "Rp2.000.000.000 (PPh 26)"]
        ],
        mengapaSalah: {
          A: "Lupa bahwa penjualan harta yang diatur Pasal 4 ayat (2) (tanah/bangunan dan saham bursa) dikecualikan dari PPh 26 ayat (2).",
          B: "Penjualan saham di bursa oleh WPLN juga dikenai PPh final 0,1%, bukan PPh 26 5%.",
          D: "Menukar dasar: perkiraan neto 25% hanya untuk penjualan harta (saham nonbursa), sedangkan premi swap dikenai 20% dari jumlah bruto."
        },
        jebakan: "Menerapkan 5% pada semua penjualan harta oleh WPLN tanpa memeriksa pengecualian Pasal 4 ayat (2). Untuk harta selain saham, PPh 26 ayat (2) 5% pun hanya atas harta tertentu dalam daftar Pasal 2 ayat (4) PMK 82/PMK.03/2009 (perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, pesawat terbang ringan)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2016 (pengalihan hak atas tanah dan/atau bangunan)" }, { pasal: "PP 41/1994 s.t.d.d. PP 14/1997 (penjualan saham di bursa)" }, { pasal: "Pasal 238 PMK 81/2024 (penjualan saham perseroan nonbursa oleh WPLN)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-137", topik: "C10.9", tingkat: ["C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Harapan Baja Konstruksi menyewa crane dari Kuroshio Kikai K.K. (residen Jepang; tidak memiliki BUT di Indonesia; beneficial owner; Form DGT sah terekam di Coretax pada 5 Agustus 2026). P3B Indonesia–Jepang sebagaimana dipakai dalam soal ini memasukkan imbalan atas penggunaan peralatan industri, komersial, atau ilmiah ke dalam pengertian royalti dengan batas tarif 10%. Tagihan sewa Agustus 2026 sebesar JPY18.000.000 diterima dan dibebankan sebagai biaya serta utang sewa pada 31 Agustus 2026, lalu dibayar pada 9 September 2026. Data kurs (dinyatakan per 100 JPY): KMK yang berlaku 26 Agustus–1 September 2026 Rp10.950; KMK yang berlaku 9–15 September 2026 Rp11.020; kurs tengah BI 31 Agustus 2026 Rp10.980. PPh Pasal 26 yang terutang dan Masa Pajaknya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp19.710.000.000; Masa Pajak Agustus 2026",
        B: "Rp198.360.000; Masa Pajak September 2026",
        C: "Rp394.200.000; Masa Pajak Agustus 2026",
        D: "Rp197.100.000; Masa Pajak Agustus 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Sewa dibebankan sebagai utang pada 31 Agustus sehingga PPh 26 terutang Masa Agustus dengan kurs KMK 26 Agustus–1 September. Kurs yen dinyatakan per 100 JPY, jadi jumlah yen dibagi 100 sebelum dikalikan kurs. P3B dalam soal memasukkan sewa peralatan ke royalti dengan batas 10% dan Form DGT sah sudah terekam.",
        jejakHitung: [["Saat terutang", "31 Agustus 2026 (dibebankan sebagai utang) → Masa Agustus"], ["DPP = JPY18.000.000 ÷ 100 × Rp10.950", "Rp1.971.000.000"], ["PPh 26 = 10% × Rp1.971.000.000", "Rp197.100.000"], ["Batas setor", "15 September 2026"]],
        mengapaSalah: {
          A: "Lupa bahwa kurs yen per 100 JPY, sehingga DPP membengkak 100 kali.",
          B: "Memakai kurs KMK saat pembayaran 9 September; utang sudah dibebankan 31 Agustus sehingga PPh terutang lebih dahulu.",
          C: "Memakai 20% karena menganggap sewa peralatan bukan royalti; P3B dalam soal memasukkannya ke royalti dengan batas 10%."
        },
        jebakan: "Satuan kurs yen per 100 JPY dan saat terutang yang lebih dahulu daripada pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 12 P3B Indonesia–Jepang (royalti)" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }, { pasal: "KMK kurs pajak mingguan (kurs pada saat terutang)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-138", topik: "C10.9", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Pada September 2026 beberapa pemberi penghasilan di Indonesia membayar imbalan kepada empat orang pribadi residen negara mitra P3B; seluruhnya beneficial owner dan Form DGT-nya sah terekam di Coretax sebelum pembayaran. P3B yang berlaku memuat ketentuan berikut: penghasilan artis dan atlet dapat dipajaki di negara tempat kegiatan dilakukan; imbalan anggota dewan komisaris atau direksi dapat dipajaki di negara tempat perusahaan berkedudukan; jasa pekerjaan bebas hanya dapat dipajaki di negara sumber bila tersedia tempat tetap secara teratur atau orang tersebut berada di negara sumber lebih dari 120 hari dalam 12 bulan; gaji hanya dipajaki di negara domisili bila tiga syarat Pasal 15 ayat (2) terpenuhi. Penerima: (1) penyanyi yang tampil 2 hari di Jakarta dengan honor Rp1.200.000.000; (2) anggota dewan komisaris PT Prima Kencana dengan honorarium Rp600.000.000; (3) konsultan independen yang memberi pelatihan 12 hari di Surabaya tanpa tempat tetap dengan imbalan Rp400.000.000; (4) teknisi pegawai perusahaan negara mitra yang bekerja 60 hari di Indonesia, gajinya Rp300.000.000 dibayar dan dibebankan oleh BUT perusahaan tersebut di Batam. Pembayaran yang PPh Pasal 26-nya nihil berdasarkan P3B adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "(1) honor penyanyi",
        B: "(2) honorarium anggota dewan komisaris",
        C: "(3) imbalan konsultan independen",
        D: "(4) gaji teknisi"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jasa pekerjaan bebas tanpa tempat tetap dan kehadiran 12 hari (tidak lebih dari 120 hari) hanya dipajaki di negara domisili, sehingga PPh 26 nihil; bukti potong tetap dibuat dengan fasilitas P3B. Artis dan komisaris dapat dipajaki penuh di Indonesia (PPh 26 20%), sedangkan gaji yang dibebankan kepada BUT di Indonesia tidak memenuhi syarat Pasal 15 ayat (2) sehingga juga dipajaki Indonesia.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal artis dan atlet memberi hak pemajakan penuh kepada negara tempat pertunjukan tanpa time test; PPh 26 20%.",
          B: "Imbalan komisaris dapat dipajaki di negara tempat perusahaan berkedudukan; PPh 26 20%.",
          D: "Walaupun hanya 60 hari, gaji dibebankan kepada BUT di Indonesia sehingga salah satu syarat kumulatif Pasal 15 ayat (2) gagal."
        },
        jebakan: "Mengira Form DGT sah selalu membuat PPh 26 nihil, padahal P3B memberi hak pemajakan penuh atas jenis penghasilan tertentu."
      },
      dasarHukum: [{ pasal: "Pasal 14, 15, 16, dan 17 P3B (jasa pekerjaan bebas, pekerjaan, komisaris, artis dan atlet)" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-139", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-15", laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal V-C10-15: Kirkwall Pumps Ltd. (residen negara mitra P3B; Form DGT sah terekam di Coretax) memiliki BUT berupa cabang di Surabaya yang menjual dan merawat pompa industri. P3B yang berlaku mengikuti Pasal 7 Model OECD: hanya laba yang dapat diatribusikan kepada BUT yang dipajaki Indonesia (tanpa force of attraction), biaya eksekutif dan administrasi umum yang dikeluarkan untuk keperluan BUT dapat dikurangkan di mana pun dikeluarkan, dan branch profit tax dibatasi 10%. Data Tahun Pajak 2025: laba komersial BUT Rp5.000.000.000 setelah dibebani (i) bunga atas dana yang disediakan kantor pusat Rp400.000.000, (ii) alokasi biaya administrasi umum kantor pusat yang wajar, berkaitan dengan kegiatan BUT, dan tanpa markup Rp300.000.000, (iii) alokasi biaya riset produk baru untuk pasar Eropa yang tidak berkaitan dengan kegiatan BUT Rp250.000.000, serta (iv) royalti merek kepada kantor pusat Rp350.000.000. Selain itu kantor pusat menjual langsung, tanpa keterlibatan BUT, tiga pompa sejenis kepada PT Petro Jaya di Gresik dengan laba neto Rp1.200.000.000. BUT bukan usaha perbankan dan tidak ada koreksi fiskal lain. Penghasilan kena pajak BUT Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp6.000.000.000",
        B: "Rp7.200.000.000",
        C: "Rp6.300.000.000",
        D: "Rp5.750.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Bunga (bukan usaha perbankan) dan royalti kepada kantor pusat tidak dapat dibiayakan (Pasal 5 ayat (3) UU PPh), begitu pula alokasi biaya yang tidak berkaitan dengan kegiatan BUT; alokasi administrasi umum yang berkaitan tetap boleh. Karena P3B tidak memuat force of attraction dan Form DGT sah, laba penjualan langsung kantor pusat tidak diatribusikan kepada BUT (Pasal 32A UU PPh).",
        jejakHitung: [["Laba komersial BUT", "Rp5.000.000.000"], ["+ Bunga kepada kantor pusat (bukan bank)", "Rp400.000.000"], ["+ Royalti kepada kantor pusat", "Rp350.000.000"], ["+ Alokasi riset yang tidak berkaitan dengan BUT", "Rp250.000.000"], ["Alokasi administrasi umum yang berkaitan", "Tetap dapat dikurangkan"], ["Penjualan langsung kantor pusat", "Tidak diatribusikan (P3B tanpa force of attraction)"], ["PKP", "Rp6.000.000.000"]],
        mengapaSalah: {
          B: "Menambahkan laba penjualan langsung kantor pusat Rp1,2 miliar; force of attraction Pasal 5 ayat (1) huruf b UU PPh dikesampingkan oleh Pasal 7 P3B yang tidak memuatnya.",
          C: "Mengoreksi juga alokasi administrasi umum Rp300 juta yang berkaitan dengan BUT; P3B dan UU PPh membolehkannya.",
          D: "Membiarkan alokasi riset untuk pasar Eropa; biaya yang tidak berkaitan dengan kegiatan BUT tidak dapat dibebankan kepada BUT."
        },
        jebakan: "Menerapkan force of attraction UU PPh padahal P3B yang berlaku tidak memuatnya."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) dan (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 P3B (Model OECD)" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-140", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 2, kasusId: "V-C10-15", laporanUjian: ["C-2026-10"],
      stem: "Lanjutan V-C10-15 (BUT Kirkwall Pumps; PKP Tahun Pajak 2025 Rp6.000.000.000; tarif PPh badan 22% karena peredaran bruto di atas Rp50 miliar; batas branch profit tax P3B 10%). Kredit pajak 2025: PPh Pasal 22 impor Rp300.000.000, PPh Pasal 23 yang dipotong pelanggan Rp100.000.000, dan angsuran PPh Pasal 25 Rp600.000.000. Seluruh laba setelah pajak tidak ditanamkan kembali di Indonesia. PPh atas laba setelah pajak BUT (Pasal 26 ayat (4) UU PPh) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp936.000.000",
        B: "Rp600.000.000",
        C: "Rp568.000.000",
        D: "Rp468.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Dasar branch profit tax adalah PKP dikurangi PPh terutang (bukan PPh kurang bayar), dengan tarif P3B 10% karena Form DGT sah. Kredit pajak hanya memengaruhi PPh Pasal 29, bukan dasar branch profit tax.",
        jejakHitung: [["PPh badan = 22% × Rp6.000.000.000", "Rp1.320.000.000"], ["PKP − PPh terutang", "Rp4.680.000.000"], ["Branch profit tax = 10% × Rp4.680.000.000", "Rp468.000.000"], ["Catatan: PPh 29 = 1.320 − 300 − 100 − 600 (juta)", "Rp320.000.000"]],
        mengapaSalah: {
          A: "Memakai tarif domestik 20%; dengan Form DGT sah berlaku batas P3B 10%.",
          B: "Mengalikan 10% dengan PKP; dasarnya PKP setelah dikurangi PPh terutang.",
          C: "Mengurangkan PPh Pasal 29 (Rp320 juta), bukan PPh terutang Rp1,32 miliar."
        },
        jebakan: "Mengurangkan PPh kurang bayar alih-alih PPh terutang dari PKP."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Ketentuan branch profit tax dalam P3B (umumnya pasal dividen)" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-141", topik: "C10.2", tingkat: ["C"], jenis: "hitung", kesulitan: 3, kasusId: "V-C10-15", laporanUjian: ["C-2026-10"],
      stem: "Lanjutan V-C10-15: seandainya kantor pusat Kirkwall Pumps berkedudukan di negara yang tidak mempunyai P3B dengan Indonesia, sedangkan seluruh data lain sama (laba komersial BUT Rp5.000.000.000 beserta empat pembebanan dari kantor pusat; penjualan langsung tiga pompa sejenis oleh kantor pusat kepada PT Petro Jaya dengan laba neto Rp1.200.000.000; tarif PPh badan 22%; tidak ada penanaman kembali). Penghasilan kena pajak BUT dan branch profit tax Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PKP Rp6.000.000.000; branch profit tax Rp936.000.000",
        B: "PKP Rp7.200.000.000; branch profit tax Rp561.600.000",
        C: "PKP Rp7.200.000.000; branch profit tax Rp1.123.200.000",
        D: "PKP Rp7.500.000.000; branch profit tax Rp1.170.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Tanpa P3B berlaku Pasal 5 ayat (1) huruf b UU PPh: penghasilan kantor pusat dari penjualan barang sejenis dengan yang dijual BUT di Indonesia diatribusikan kepada BUT (force of attraction). Alokasi administrasi umum yang berkaitan dengan BUT tetap dapat dibebankan. Branch profit tax memakai tarif domestik 20% × (PKP − PPh terutang).",
        jejakHitung: [["PKP = Rp6.000.000.000 + laba penjualan langsung Rp1.200.000.000", "Rp7.200.000.000"], ["PPh badan = 22% × Rp7.200.000.000", "Rp1.584.000.000"], ["PKP − PPh terutang", "Rp5.616.000.000"], ["Branch profit tax = 20% × Rp5.616.000.000", "Rp1.123.200.000"]],
        mengapaSalah: {
          A: "Tidak menerapkan force of attraction; tanpa P3B, laba penjualan langsung barang sejenis menjadi penghasilan BUT.",
          B: "Memakai tarif P3B 10% padahal tidak ada P3B; tarif domestik 20%.",
          D: "Ikut mengoreksi alokasi administrasi umum yang berkaitan dengan BUT (Rp300 juta); biaya itu tetap boleh dibebankan."
        },
        jebakan: "Lupa bahwa force of attraction UU PPh berlaku penuh ketika tidak ada P3B, dan tarif branch profit tax kembali 20%."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (1) huruf b dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-142", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "P3B yang berlaku, Pasal 5 ayat (5) dan (6) (parafrase): Seseorang selain agen bebas yang bertindak di suatu Negara atas nama perusahaan Negara lainnya serta mempunyai dan biasa menjalankan wewenang untuk menutup kontrak atas nama perusahaan itu dianggap merupakan BUT perusahaan tersebut. Perusahaan tidak dianggap mempunyai BUT semata-mata karena menjalankan usaha melalui makelar, agen umum, atau agen lain yang berkedudukan bebas, sepanjang mereka bertindak dalam rangka kegiatan usahanya yang lazim.",
      stem: "Fjordline Marine Equipment AS (residen negara mitra P3B; Form DGT sah terekam di Coretax; tidak memiliki kantor di Indonesia) memasarkan peralatan kapal di Indonesia melalui dua perusahaan Indonesia pada 2026: (a) PT Arus Bahari Agensi menegosiasikan harga dan menandatangani kontrak penjualan atas nama Fjordline berdasarkan surat kuasa umum tanpa perlu persetujuan kantor pusat, dan 92% pendapatannya berasal dari komisi Fjordline; (b) PT Lintas Niaga Maritim adalah agen komisi bagi sembilan prinsipal asing, hanya mempromosikan produk dan meneruskan pesanan, sedangkan setiap kontrak disetujui dan ditandatangani Fjordline di Bergen; PT Lintas menanggung sendiri risiko dan biaya usahanya. Berdasarkan kutipan, kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keduanya tidak menimbulkan BUT, karena kedua agen merupakan badan hukum Indonesia tersendiri yang telah dikenai pajak atas komisinya",
        B: "Keduanya menimbulkan BUT, karena Pasal 2 ayat (5) UU PPh menjadikan setiap agen perusahaan luar negeri sebagai BUT",
        C: "Hanya PT Lintas Niaga Maritim yang menimbulkan BUT, karena mewakili banyak prinsipal asing sekaligus",
        D: "PT Arus Bahari Agensi adalah agen tidak bebas yang menimbulkan BUT bagi Fjordline, sedangkan PT Lintas Niaga Maritim adalah agen bebas yang tidak menimbulkan BUT"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Agen yang biasa menutup kontrak atas nama prinsipal tanpa persetujuan kantor pusat dan bergantung hampir seluruhnya pada satu prinsipal adalah agen tidak bebas, sehingga Fjordline mempunyai BUT dan laba penjualan melalui PT Arus diatribusikan kepada BUT (komisi PT Arus menjadi biaya BUT). PT Lintas tidak berwenang menutup kontrak, melayani banyak prinsipal, dan menanggung risiko sendiri, sehingga merupakan agen bebas.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Status badan hukum tersendiri tidak menghalangi terbentuknya BUT agen; yang diuji adalah wewenang menutup kontrak dan kebebasan agen.",
          B: "UU PPh pun hanya menyebut agen yang kedudukannya tidak bebas; agen bebas tidak menimbulkan BUT.",
          C: "Melayani banyak prinsipal justru ciri agen bebas; PT Lintas juga tidak menutup kontrak atas nama Fjordline."
        },
        jebakan: "Menganggap setiap agen di Indonesia, atau sebaliknya tidak ada agen yang berbadan hukum Indonesia, membentuk BUT."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (5) dan (6) P3B (Model OECD)" }, { pasal: "Pasal 2 ayat (5) UU PPh (agen yang kedudukannya tidak bebas)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-143", topik: "C10.2", tingkat: ["C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Valdora Industrial Group, badan yang berkedudukan di Republik Valdora (tidak mempunyai P3B dengan Indonesia), pada 2026 melakukan kegiatan berikut di Indonesia: (1) menyewa gudang di Cikarang yang semata-mata dipakai untuk menyimpan suku cadang miliknya sebelum dikirim kepada pembeli; (2) mengerjakan proyek instalasi conveyor di pabrik PT Gresik Semen selama 75 hari; (3) mengirim dua teknisi untuk memberi pelatihan kepada PT Sinar Kertas selama 45 hari, yang merupakan seluruh pemberian jasa Valdora di Indonesia dalam 12 bulan; (4) membuka kantor perwakilan di Jakarta yang hanya melakukan riset pasar. Menurut UU PPh, kegiatan yang merupakan bentuk usaha tetap Valdora adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Hanya (2), karena gudang penyimpanan dan kantor perwakilan riset pasar merupakan kegiatan persiapan atau penunjang",
        B: "Tidak satu pun, karena proyek instalasi tidak lebih dari 6 bulan dan jasa pelatihan tidak lebih dari 60 hari",
        C: "(1), (2), dan (4)",
        D: "(1), (2), (3), dan (4)"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pengecualian kegiatan persiapan/penunjang dan time test proyek konstruksi berasal dari P3B. Tanpa P3B, Pasal 2 ayat (5) UU PPh berlaku apa adanya: gudang, kantor perwakilan, dan proyek konstruksi, instalasi, atau perakitan merupakan BUT tanpa batas waktu; hanya pemberian jasa yang diuji lebih dari 60 hari dalam 12 bulan, sehingga pelatihan 45 hari bukan BUT.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pengecualian persiapan/penunjang hanya ada dalam P3B; Valdora tidak mempunyai P3B dengan Indonesia.",
          B: "UU PPh tidak memberi time test untuk proyek konstruksi/instalasi; batas 6 bulan adalah contoh rumusan P3B.",
          D: "Jasa pelatihan 45 hari tidak melebihi 60 hari dalam 12 bulan sehingga bukan BUT."
        },
        jebakan: "Memakai pengecualian dan time test P3B untuk perusahaan dari negara yang tidak mempunyai P3B."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 35/PMK.03/2019" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-144", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Brightstone Geotech Ltd. (residen negara mitra P3B) memberikan jasa survei geologi kepada PT Andalan Tambang di Kalimantan dengan tim yang hadir 10 Januari–30 Juni 2026 (172 hari). P3B mengatur bahwa pemberian jasa merupakan BUT bila berlangsung lebih dari 90 hari dalam 12 bulan. Karena Brightstone tidak menyerahkan Form DGT, PT Andalan memotong PPh Pasal 26 20% atas tagihan Januari–Maret 2026 sebesar Rp1.500.000.000, yaitu Rp300.000.000. Pada April 2026 Brightstone terdaftar sebagai BUT dan memperoleh NPWP; atas tagihan April–Juni Rp1.500.000.000 PT Andalan memotong PPh Pasal 23 2% sebesar Rp30.000.000. Perlakuan yang tepat dalam SPT Tahunan PPh Badan BUT Brightstone Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Seluruh imbalan Rp3.000.000.000 menjadi penghasilan BUT; PPh 26 Rp300.000.000 tidak final bagi BUT sehingga dikreditkan bersama PPh 23 Rp30.000.000",
        B: "Hanya imbalan April–Juni Rp1.500.000.000 yang menjadi penghasilan BUT karena PPh 26 atas tagihan Januari–Maret bersifat final",
        C: "Seluruh imbalan menjadi penghasilan BUT; Brightstone mengajukan pengembalian PPh 26 Rp300.000.000 sebagai pajak yang seharusnya tidak terutang dan hanya mengkreditkan PPh 23",
        D: "PT Andalan membetulkan SPT Masa Januari–Maret dengan mengganti PPh 26 menjadi PPh 23 2% dan selisihnya Rp270.000.000 dipindahbukukan ke angsuran PPh 25 BUT"
      },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kehadiran 172 hari melebihi 90 hari sehingga terbentuk BUT jasa, dan seluruh imbalan dari kegiatan itu, termasuk Januari–Maret, adalah penghasilan BUT. Pasal 26 ayat (5) UU PPh menyatakan pemotongan PPh 26 tidak final bagi WPLN yang berubah status menjadi BUT, sehingga Rp300 juta dikreditkan bersama PPh 23 Rp30 juta dalam SPT Tahunan BUT.",
        jejakHitung: [["Hari kehadiran 10 Januari–30 Juni 2026", "172 hari > 90 hari → BUT jasa"], ["Penghasilan bruto BUT", "Rp3.000.000.000"], ["Kredit PPh 26 (tidak final, Pasal 26 ayat (5))", "Rp300.000.000"], ["Kredit PPh 23", "Rp30.000.000"], ["Jumlah kredit pajak", "Rp330.000.000"]],
        mengapaSalah: {
          B: "PPh 26 atas WPLN yang berubah status menjadi BUT tidak final; imbalan Januari–Maret tetap penghasilan BUT.",
          C: "Pemotongan 20% saat itu benar karena belum ada Form DGT maupun NPWP BUT; penyelesaiannya kredit pajak dalam SPT Tahunan BUT, bukan pengembalian.",
          D: "Tidak ada mekanisme mengubah jenis pemotongan yang sudah benar pada saatnya lalu memindahbukukan selisihnya; PPh 26 dikreditkan oleh BUT."
        },
        jebakan: "Memperlakukan PPh 26 sebelum terdaftar sebagai BUT sebagai final dan mengeluarkan imbalannya dari penghasilan BUT."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (5) UU PPh; Pasal 5 P3B (BUT jasa)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-145", topik: "C10.2", tingkat: ["C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Nordhavn Marine A/S (residen negara mitra P3B; beneficial owner; Form DGT sah terekam di Coretax sebelum setiap pembayaran; tidak memiliki tempat usaha lain di Indonesia) mengerjakan dua kontrak pada 2026: Proyek 1, instalasi crane dermaga untuk PT Pelabuhan Samudra di Tanjung Priok, sejak persiapan lokasi 2 Februari sampai selesai 25 April 2026; Proyek 2, instalasi sistem tambat untuk PT Kaltim Terminal di Balikpapan, 1 Juni–20 Agustus 2026. Kedua pemberi kerja tidak berafiliasi, kontraknya terpisah, dan kedua proyek tidak mempunyai keterkaitan komersial maupun geografis. P3B menetapkan: proyek konstruksi, instalasi, atau perakitan beserta kegiatan supervisinya merupakan BUT hanya bila berlangsung lebih dari 3 bulan; pemberian jasa oleh pegawai merupakan BUT hanya bila kegiatan untuk proyek yang sama atau yang berhubungan berlangsung lebih dari 91 hari dalam 12 bulan. Kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "BUT, karena jangka waktu kedua proyek dijumlahkan menjadi lebih dari 5 bulan",
        B: "BUT, karena menurut Pasal 2 ayat (5) UU PPh proyek instalasi merupakan BUT tanpa batas waktu",
        C: "BUT jasa, karena jumlah hari kehadiran kedua proyek 164 hari melebihi 91 hari dalam 12 bulan",
        D: "Tidak ada BUT: setiap proyek tidak lebih dari 3 bulan dan tidak dijumlahkan karena tidak berhubungan, sehingga imbalannya laba usaha yang tidak dipajaki Indonesia; PPh 26 nihil dengan BPNR berfasilitas SKD"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Time test proyek diuji per lokasi atau proyek; proyek yang terpisah secara komersial dan geografis tidak dijumlahkan. Proyek 1 dan Proyek 2 masing-masing kurang dari 3 bulan, dan time test jasa pun hanya menjumlahkan hari untuk proyek yang sama atau berhubungan. Dengan Form DGT sah, P3B mengesampingkan Pasal 2 ayat (5) UU PPh (Pasal 32A).",
        jejakHitung: [["Proyek 1: 2 Februari–25 April 2026", "83 hari (kurang dari 3 bulan)"], ["Proyek 2: 1 Juni–20 Agustus 2026", "81 hari (kurang dari 3 bulan)"], ["Keterkaitan", "Tidak berhubungan → tidak dijumlahkan"], ["Kesimpulan", "Tidak ada BUT; laba usaha hanya dipajaki negara domisili"]],
        mengapaSalah: {
          A: "Jangka waktu proyek yang tidak berhubungan tidak dijumlahkan; masing-masing diuji tersendiri.",
          B: "Dengan Form DGT sah, time test P3B mengesampingkan Pasal 2 ayat (5) UU PPh (Pasal 32A UU PPh).",
          C: "Time test jasa P3B hanya menjumlahkan hari untuk proyek yang sama atau berhubungan; 83 dan 81 hari masing-masing tidak lebih dari 91 hari."
        },
        jebakan: "Menjumlahkan durasi dua proyek yang tidak berhubungan, atau kembali ke aturan domestik walaupun P3B berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (3) P3B (proyek konstruksi dan jasa)" }, { pasal: "Pasal 7 P3B (laba usaha)" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-146", topik: "C10.6", tingkat: ["C"], jenis: "konsep", kesulitan: 3,
      kutipan: "P3B yang berlaku, ketentuan residen ganda bagi badan (rumusan sejalan dengan Pasal 4 MLI, parafrase): Apabila suatu badan selain orang pribadi menjadi penduduk kedua Negara, pejabat berwenang berupaya menentukan melalui persetujuan bersama Negara yang dianggap sebagai negara domisilinya dengan memperhatikan tempat kedudukan manajemen efektif, tempat badan itu didirikan, dan faktor relevan lainnya. Tanpa persetujuan tersebut, badan itu tidak berhak atas keringanan atau pembebasan pajak menurut Persetujuan, kecuali sejauh dan dengan cara yang disepakati pejabat berwenang.",
      stem: "PT Kencana Maritim Holdings didirikan di Indonesia berdasarkan hukum Indonesia, tetapi seluruh direksinya berdomisili di Negara Arvenia, dan seluruh rapat direksi serta keputusan strategis diambil di sana. Otoritas pajak Arvenia memperlakukannya sebagai residen Arvenia berdasarkan tempat kedudukan manajemen efektif, sedangkan DJP memperlakukannya sebagai subjek pajak dalam negeri karena didirikan di Indonesia. Pada 2026 perseroan menerima dividen dari anak usaha di Arvenia dan dikenai pajak sebagai residen di kedua negara. Berdasarkan kutipan, langkah dan akibat yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Perseroan otomatis residen Arvenia karena tempat kedudukan manajemen efektif selalu menjadi penentu tunggal residensi badan dalam P3B",
        B: "Perseroan otomatis residen Indonesia karena UU PPh menetapkan badan yang didirikan di Indonesia sebagai subjek pajak dalam negeri dan ketentuan domestik mendahului P3B",
        C: "Perseroan mengajukan permohonan MAP kepada DJP agar residensinya ditentukan melalui persetujuan bersama; selama belum ada persetujuan, perseroan tidak berhak atas fasilitas P3B kecuali sejauh yang disepakati",
        D: "Perseroan mengajukan APA bilateral agar status residensinya ditetapkan untuk 5 tahun pajak ke depan"
      },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk badan berstatus residen ganda, P3B dalam kutipan tidak memakai tie-breaker otomatis; pejabat berwenang menentukannya kasus per kasus melalui MAP dengan memperhatikan manajemen efektif, tempat pendirian, dan faktor lain. WPDN dapat memulai MAP dengan permohonan kepada DJP (PMK 172/2023); sampai ada kesepakatan, manfaat P3B tidak tersedia kecuali yang disepakati.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tie-breaker otomatis berdasarkan manajemen efektif adalah rumusan lama; P3B dalam kutipan menyerahkannya kepada persetujuan bersama.",
          B: "P3B diutamakan (Pasal 32A UU PPh); status residen ganda diselesaikan menurut tie-breaker P3B, bukan hukum domestik sepihak.",
          D: "APA menyangkut kewajaran harga transaksi afiliasi, bukan status residensi."
        },
        jebakan: "Memakai tie-breaker manajemen efektif yang otomatis padahal P3B berumusan MLI mensyaratkan persetujuan bersama."
      },
      dasarHukum: [{ pasal: "Pasal 4 P3B (residen) sebagaimana dimodifikasi Pasal 4 MLI", berlakuSejak: "2020-08-01" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 2 ayat (3) huruf b dan Pasal 32A UU PPh", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-147", topik: "C10.6", tingkat: ["C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Ketentuan MAP dalam P3B yang berlaku (parafrase): Apabila seseorang menganggap tindakan salah satu atau kedua Negara mengakibatkan atau akan mengakibatkan pengenaan pajak yang tidak sesuai dengan Persetujuan, terlepas dari upaya hukum yang tersedia menurut hukum domestik, ia dapat mengajukan kasusnya kepada pejabat berwenang Negara tempat ia menjadi penduduk dalam waktu tiga tahun sejak pemberitahuan pertama atas tindakan tersebut.",
      stem: "Tasman Engineering Pty Ltd (residen Australia; tidak memiliki BUT di Indonesia; Form DGT sah) memberikan jasa teknik kepada PT Andalas Semen. PT Andalas tidak memotong PPh 26 karena imbalan itu dianggap laba usaha. Pada 10 Agustus 2026 DJP menerbitkan SKPKB PPh Pasal 26 kepada PT Andalas setelah mengklasifikasikan sebagian imbalan sebagai royalti atas know-how menurut P3B. Berdasarkan kontrak, Tasman wajib mengganti pajak yang ditanggung PT Andalas, dan Tasman berpendapat penafsiran DJP tidak sesuai dengan P3B. Berdasarkan kutipan, langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PT Andalas mengajukan permohonan MAP langsung kepada otoritas pajak Australia atas nama Tasman",
        B: "Tasman mengajukan permohonan MAP kepada otoritas pajak Australia dalam waktu tiga tahun sejak pemberitahuan pertama, sedangkan PT Andalas dapat mengajukan keberatan atas SKPKB PPh Pasal 26 paling lama 3 bulan sejak SKPKB dikirim",
        C: "Tasman mengajukan banding langsung ke Pengadilan Pajak tanpa melalui keberatan karena Tasman bukan pihak yang menerima SKPKB",
        D: "Tidak ada jalur bagi Tasman; satu-satunya upaya adalah keberatan PT Andalas, dan MAP baru dapat diajukan setelah ada putusan banding"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Ketentuan MAP dalam kutipan memberi hak kepada orang yang dikenai pajak tidak sesuai P3B untuk mengajukan kasusnya kepada pejabat berwenang negara tempat ia menjadi penduduk, yaitu Australia; otoritas Australia kemudian merundingkannya dengan DJP. MAP berjalan terlepas dari upaya hukum domestik, sehingga PT Andalas tetap menjaga tenggat keberatan 3 bulan atas SKPKB.",
        jejakHitung: [],
        mengapaSalah: {
          A: "WPDN mengajukan permohonan MAP kepada DJP, bukan kepada otoritas negara lain; kasus Tasman diajukan Tasman sendiri ke otoritas negara domisilinya.",
          C: "Banding hanya dapat diajukan atas keputusan keberatan oleh pihak yang berhak; jalur Tasman menurut P3B adalah MAP.",
          D: "MAP tersedia terlepas dari upaya hukum domestik dan tidak menunggu putusan banding."
        },
        jebakan: "Mengira MAP hanya dapat diajukan pemotong di Indonesia atau harus menunggu upaya hukum domestik selesai."
      },
      dasarHukum: [{ pasal: "Pasal prosedur persetujuan bersama (MAP) P3B Indonesia–Australia" }, { pasal: "PMK 172/2023 (MAP)", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "C10-148",
      topik: "C10.7",
      tingkat: ["C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nusantara Motor Parts memperoleh APA unilateral untuk Tahun Pajak 2026–2030 atas penjualan komponen kepada afiliasinya dengan metode TNMM yang mengasumsikan perusahaan hanya menjalankan fungsi manufaktur kontrak berisiko rendah. Saat menelaah laporan tahunan pelaksanaan APA pada 2028, DJP menemukan bahwa sejak sebelum permohonan diajukan perusahaan telah menjalankan fungsi riset dan memiliki paten yang dikembangkannya sendiri, tetapi fakta itu tidak diungkapkan, sehingga data fungsi yang disampaikan dalam permohonan tidak benar. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "APA tetap mengikat sampai 2030; DJP hanya dapat memeriksa kepatuhan terhadap rentang laba yang telah disepakati", B: "DJP mengubah sendiri rentang laba APA tanpa melibatkan Wajib Pajak, dan APA yang telah diubah tetap berlaku sampai 2030", C: "APA hanya dapat diakhiri bila asumsi kritis berubah setelah APA disepakati; penyampaian data yang tidak benar cukup dikenai sanksi denda administrasi", D: "DJP dapat membatalkan APA karena Wajib Pajak menyampaikan data yang tidak benar dan tidak mengungkapkan fakta material; setelah dibatalkan, kewajaran transaksi afiliasi diuji dengan prinsip kewajaran dan kelaziman usaha melalui pemeriksaan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "APA disepakati atas dasar informasi yang disampaikan Wajib Pajak. Bila dari evaluasi terdapat indikasi Wajib Pajak menyampaikan informasi tidak benar atau tidak menyampaikan informasi yang dapat memengaruhi kesepakatan, DJP meminta klarifikasi (tanggapan dalam 21 hari) lalu membatalkan APA (Pasal 70 ayat (1) dan (4) PMK 172/2023). Setelah dibatalkan, Wajib Pajak tidak dapat mengajukan APA lagi untuk periode itu dan DJP dapat melakukan pemeriksaan, sehingga transaksi afiliasi diuji dengan PKKU umum (Pasal 70 ayat (7)). Peninjauan kembali karena perubahan material terhadap asumsi kritis adalah mekanisme lain (Pasal 68 ayat (7) huruf a).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Larangan koreksi atas transaksi yang dicakup APA (Pasal 67 ayat (2)) berlaku bila Wajib Pajak melaksanakan APA yang sah; APA yang disepakati berdasarkan informasi tidak benar dapat dibatalkan.",
          B: "DJP tidak mengubah APA sepihak; perubahan lewat peninjauan kembali dengan perundingan, dan informasi tidak benar berujung pada pembatalan, bukan revisi diam-diam.",
          C: "Perubahan material terhadap asumsi kritis memicu peninjauan kembali; informasi tidak benar atau fakta material yang tidak diungkapkan merupakan dasar pembatalan APA (Pasal 70)."
        },
        jebakan: "Mengira APA melindungi Wajib Pajak dalam segala keadaan, termasuk bila APA diperoleh dengan informasi yang tidak benar."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 68 ayat (7) dan Pasal 70 PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "C10-149", topik: "C10.7", tingkat: ["C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Graha Elektronika (manufaktur kontrak) memiliki APA unilateral untuk Tahun Pajak 2027–2031 atas penjualan seluruh produknya kepada afiliasi di luar negeri dengan metode cost plus: markup atas total biaya 5,0%–8,0%. Klausul APA: bila markup realisasi di bawah rentang, Wajib Pajak menyesuaikan penghasilan sampai titik terendah rentang dalam SPT tahun bersangkutan; bila di atas rentang, tidak ada penyesuaian ke bawah. Realisasi: Tahun Pajak 2027 total biaya Rp150.000.000.000 dan penjualan kepada afiliasi Rp154.500.000.000; Tahun Pajak 2028 total biaya Rp160.000.000.000 dan penjualan kepada afiliasi Rp174.400.000.000. Jumlah penyesuaian penghasilan dan tambahan PPh badan (tarif 22%) atas Tahun Pajak 2027–2028 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Penyesuaian Rp1.400.000.000; PPh Rp308.000.000",
        B: "Penyesuaian Rp5.250.000.000; PPh Rp1.155.000.000",
        C: "Penyesuaian Rp3.000.000.000 (seluruhnya Tahun Pajak 2027); PPh Rp660.000.000",
        D: "Koreksi positif Rp3.000.000.000 untuk 2027 dan koreksi negatif Rp1.600.000.000 untuk 2028; PPh neto Rp308.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setiap tahun diuji sendiri terhadap klausul APA. Markup 2027 hanya 3,0% sehingga penghasilan dinaikkan ke titik terendah 5,0%; markup 2028 9,0% berada di atas rentang dan menurut klausul tidak disesuaikan ke bawah, sehingga tidak dapat mengimbangi kekurangan 2027.",
        jejakHitung: [["Markup 2027 = Rp4,5 M ÷ Rp150 M", "3,0% (di bawah 5,0%)"], ["Penjualan pada titik terendah = 105% × Rp150.000.000.000", "Rp157.500.000.000"], ["Penyesuaian 2027 = 157,5 M − 154,5 M", "Rp3.000.000.000"], ["Markup 2028 = Rp14,4 M ÷ Rp160 M", "9,0% (di atas 8,0%) → tanpa penyesuaian"], ["Tambahan PPh = 22% × Rp3.000.000.000", "Rp660.000.000"]],
        mengapaSalah: {
          A: "Mengimbangi kekurangan 2027 dengan kelebihan 2028 (Rp1,6 miliar di atas batas atas); setiap tahun diuji tersendiri.",
          B: "Menyesuaikan ke median 6,5% (Rp159,75 M − Rp154,5 M); klausul APA menetapkan titik terendah.",
          D: "Klausul APA tidak memberi penyesuaian ke bawah bila realisasi di atas rentang."
        },
        jebakan: "Mengimbangi realisasi antartahun atau memakai median padahal klausul APA menetapkan titik terendah."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023 (APA)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-150", topik: "C10.4", tingkat: ["C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Sinar Investindo (WPDN; tahun buku kalender) memiliki 70% saham Arvenia Trading Ltd., badan di Negara Arvenia yang sahamnya tidak diperdagangkan di bursa. Tahun buku Arvenia Trading berakhir setiap 31 Maret, dan hukum Arvenia mewajibkan SPT tahunan badan disampaikan paling lambat 4 bulan setelah tahun buku berakhir. Untuk tahun buku yang berakhir 31 Maret 2025, laba setelah pajak Arvenia Trading setara Rp8.000.000.000 dan tidak ada dividen yang dibagikan. Saat diperolehnya dividen menurut Pasal 18 ayat (2) UU PPh dan jumlah yang dilaporkan PT Sinar Investindo adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "November 2025; Rp5.600.000.000 dilaporkan dalam SPT Tahunan PPh Badan 2025",
        B: "Oktober 2025 (bulan ketujuh setelah tahun buku berakhir); Rp5.600.000.000 dalam SPT Tahunan PPh Badan 2025",
        C: "Juli 2026 (bulan ketujuh setelah Tahun Pajak 2025 berakhir); Rp5.600.000.000 dalam SPT Tahunan PPh Badan 2026",
        D: "November 2025; Rp8.000.000.000 dilaporkan dalam SPT Tahunan PPh Badan 2025"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Bila badan usaha luar negeri wajib menyampaikan SPT di negaranya dengan batas waktu tertentu, dividen dianggap diperoleh pada bulan keempat setelah batas waktu itu; aturan bulan ketujuh hanya bila tidak ada kewajiban atau batas waktu SPT. Batas SPT Arvenia 31 Juli 2025, sehingga dividen dianggap diterima November 2025 sebesar porsi 70%.",
        jejakHitung: [["Akhir tahun buku Arvenia Trading", "31 Maret 2025"], ["Batas SPT di Arvenia (4 bulan)", "31 Juli 2025"], ["Bulan keempat setelah batas SPT", "November 2025 → SPT Tahunan 2025"], ["Deemed dividend = 70% × Rp8.000.000.000", "Rp5.600.000.000"]],
        mengapaSalah: {
          B: "Aturan bulan ketujuh setelah tahun buku berakhir hanya dipakai bila tidak ada kewajiban atau batas waktu SPT di negara badan tersebut.",
          C: "Saat diperoleh dihitung dari tahun buku dan batas SPT badan luar negeri, bukan dari tahun pajak WPDN.",
          D: "Deemed dividend sebesar porsi kepemilikan WPDN (70%), bukan seluruh laba."
        },
        jebakan: "Memakai aturan bulan ketujuh padahal negara CFC menetapkan batas waktu SPT."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 107/PMK.03/2017 dan perubahannya (CFC)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "C10-151", topik: "C10.4", tingkat: ["C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Meranti Kimia Nusantara (industri kimia; tidak termasuk WP yang dikecualikan dari ketentuan DER; utang swasta luar negerinya telah dilaporkan) menyajikan rata-rata saldo akhir bulan Tahun Pajak 2025: ekuitas Rp20.000.000.000; pinjaman tanpa bunga dari induk Rp5.000.000.000; utang bank dalam negeri berbunga Rp75.000.000.000; pinjaman berbunga dari induk, Meranti Holdings Pte. Ltd. (Singapura; beneficial owner; Form DGT sah terekam sebelum pembayaran; batas tarif bunga P3B 10%), Rp50.000.000.000; dan utang dagang tanpa bunga Rp40.000.000.000. Biaya pinjaman 2025 Rp12.000.000.000, termasuk bunga kepada induk Rp5.000.000.000 yang dibayar pada 2025 dengan tingkat bunga yang telah teruji wajar. Koreksi fiskal positif biaya pinjaman menurut PMK 169/PMK.010/2015 dan PPh Pasal 26 atas bunga kepada induk adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi Rp2.400.000.000; PPh 26 Rp400.000.000",
        B: "Koreksi Rp4.320.000.000; PPh 26 Rp500.000.000",
        C: "Koreksi Rp1.000.000.000; PPh 26 Rp500.000.000",
        D: "Koreksi Rp2.400.000.000; PPh 26 Rp500.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Modal mencakup pinjaman tanpa bunga dari pihak hubungan istimewa, sedangkan utang hanya yang dibebani bunga. DER 5 : 1 melampaui 4 : 1 sehingga biaya pinjaman yang dapat dibebankan = (4 × modal ÷ utang) × seluruh biaya pinjaman. Pembatasan DER hanya memengaruhi biaya fiskal; PPh 26 tetap dipotong atas seluruh bunga yang dibayar kepada induk dengan tarif P3B.",
        jejakHitung: [["Modal = Rp20 M + Rp5 M (pinjaman tanpa bunga afiliasi)", "Rp25.000.000.000"], ["Utang berbunga = Rp75 M + Rp50 M", "Rp125.000.000.000"], ["DER", "125 : 25 = 5 : 1 (> 4 : 1)"], ["Biaya dapat dibebankan = (4 × 25 ÷ 125) × Rp12 M", "Rp9.600.000.000"], ["Koreksi fiskal positif", "Rp2.400.000.000"], ["PPh 26 = 10% × Rp5.000.000.000", "Rp500.000.000"]],
        mengapaSalah: {
          A: "Memotong PPh 26 hanya atas bagian bunga yang dapat dibiayakan; PPh 26 terutang atas seluruh bunga yang dibayar.",
          B: "Mengeluarkan pinjaman tanpa bunga dari induk dari modal (DER 6,25 : 1); PMK 169/PMK.010/2015 memasukkannya ke modal.",
          C: "Membatasi hanya bunga afiliasi (20% × Rp5 M); rasio DER diterapkan pada seluruh biaya pinjaman."
        },
        jebakan: "Mengira biaya bunga yang dikoreksi karena DER tidak perlu dipotong PPh 26."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 26 ayat (1) huruf b UU PPh; Pasal 11 P3B", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "C10-152",
      topik: "C10.3",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Sentosa Rekayasa (WPDN; bukan perseroan terbuka; peredaran bruto 2025 Rp160 miliar) Tahun Pajak 2025 memiliki penghasilan neto dalam negeri Rp8.000.000.000 dan dua penghasilan dari Malaysia: (1) laba cabang (BUT) di Kuala Lumpur sebelum pajak Rp1.500.000.000 dengan pajak penghasilan Malaysia dibayar Rp360.000.000 (laba cabang tidak diinvestasikan di Indonesia); (2) royalti dari pelanggan di Malaysia Rp500.000.000 yang dipotong pajak Malaysia 10% (Rp50.000.000) sesuai batas tarif P3B. Tidak ada penghasilan luar negeri lain. Kredit pajak luar negeri (PPh Pasal 24) yang dapat dikreditkan untuk 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp380.000.000", B: "Rp440.000.000", C: "Rp410.000.000", D: "Rp330.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit PPh Pasal 24 dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018). Laba usaha cabang Malaysia dan royalti Malaysia dihitung sendiri-sendiri: masing-masing kredit = nilai terkecil antara pajak Malaysia (sesuai P3B) dan (penghasilan jenis itu ÷ PKP) × PPh terutang. Kelebihan pajak cabang tidak tertutup oleh rendahnya pajak royalti dari negara yang sama.",
        jejakHitung: [
          ["PKP = 8.000 + 1.500 + 500 (juta)", "Rp10.000.000.000"],
          ["PPh terutang 22%", "Rp2.200.000.000"],
          ["Cabang: batas = 1.500/10.000 × Rp2.200.000.000", "Rp330.000.000"],
          ["Cabang: kredit = min(360; 330) (juta)", "Rp330.000.000"],
          ["Royalti: batas = 500/10.000 × Rp2.200.000.000", "Rp110.000.000"],
          ["Royalti: kredit = min(50; 110) (juta)", "Rp50.000.000"],
          ["Jumlah kredit PPh 24", "Rp380.000.000"]
        ],
        mengapaSalah: {
          B: "Mengambil batas proporsional gabungan Malaysia (2.000/10.000 × 2.200 = 440) seolah jumlah yang dapat dikreditkan.",
          C: "Menggabungkan cabang dan royalti dalam satu batas per negara: min(410; 440) = 410. PMK 192/PMK.03/2018 menghitung per jenis penghasilan untuk tiap negara, sehingga kelebihan pajak cabang Rp30 juta tidak dapat dikreditkan.",
          D: "Hanya menghitung kredit cabang Rp330 juta dan melupakan kredit royalti Rp50 juta."
        },
        jebakan: "Menggabungkan beberapa jenis penghasilan dari satu negara dalam satu batas (per country limitation); batas dihitung per jenis penghasilan untuk tiap negara."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "C10-153", topik: "C10.3", tingkat: ["C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Bahtera Konsultan (WPDN; bukan perseroan terbuka; peredaran bruto 2025 Rp90 miliar; tidak ada sisa kerugian tahun-tahun sebelumnya) Tahun Pajak 2025 menderita rugi fiskal dari kegiatan dalam negeri Rp1.000.000.000. Cabangnya (BUT) di Filipina memperoleh laba sebelum pajak Rp4.000.000.000 dan membayar pajak penghasilan Filipina Rp1.000.000.000 (laba cabang tidak diinvestasikan di Indonesia). Tidak ada penghasilan luar negeri lain dan tidak ada kredit pajak lain. Kredit PPh Pasal 24 Tahun Pajak 2025 dan perlakuan sisa pajak Filipina yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kredit Rp1.000.000.000; PPh lebih bayar Rp340.000.000",
        B: "Kredit Rp880.000.000; PPh lebih bayar Rp220.000.000",
        C: "Kredit Rp660.000.000; PPh Pasal 29 nihil, dan sisa pajak Filipina Rp340.000.000 tidak dapat dikreditkan, dibiayakan, atau dibawa ke tahun berikutnya",
        D: "Kredit Rp0, karena rugi dalam negeri tidak boleh mengurangi laba cabang luar negeri sehingga pajak Filipina dibebankan sebagai biaya"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Rugi dalam negeri mengurangi penghasilan luar negeri dalam PKP (yang tidak digabung adalah rugi di luar negeri). Karena penghasilan Filipina lebih besar daripada PKP, rasio batas melebihi 100%, sehingga kredit dibatasi seluruh PPh terutang. Sisa pajak Filipina hangus: tidak dikreditkan, tidak dibiayakan, dan tidak dibawa ke tahun lain.",
        jejakHitung: [["PKP = −1.000 + 4.000 (juta)", "Rp3.000.000.000"], ["PPh terutang 22%", "Rp660.000.000"], ["Batas rasio = 4.000/3.000 × Rp660.000.000", "Rp880.000.000 → dibatasi PPh terutang"], ["Kredit = min(1.000; 880; 660) (juta)", "Rp660.000.000"], ["Sisa pajak Filipina yang hangus", "Rp340.000.000"]],
        mengapaSalah: {
          A: "Kredit tidak boleh melebihi PPh terutang dan pajak luar negeri tidak menimbulkan lebih bayar.",
          B: "Batas rasio Rp880 juta melebihi PPh terutang; kredit tetap paling tinggi Rp660 juta.",
          D: "Rugi dalam negeri justru boleh mengurangi penghasilan luar negeri; pajak luar negeri yang tidak dapat dikreditkan juga tidak dapat dibiayakan."
        },
        jebakan: "Lupa batas ketiga, yaitu seluruh PPh terutang, ketika ada rugi dalam negeri."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (2) UU PPh (kompensasi kerugian)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    }
  ],
  kartu: [
    { id: "KT-C10-01", topik: "C10.1", tipe: "pasal", depan: "Dasar kewenangan membuat P3B dan kedudukannya terhadap UU PPh?", belakang: "Pasal 32A UU PPh; P3B lex specialis, hanya membatasi hak pemajakan", dasar: "Pasal 32A UU PPh", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-02", topik: "C10.1", tipe: "angka", depan: "Form DGT menurut PMK 112/2025 terdiri atas berapa bagian?", belakang: "6 bagian; disampaikan kepada pemotong dalam rangka pemotongan, lalu diunggah pemotong melalui portal wajib pajak", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: "Form DGT 7 bagian (PER-25/PJ/2018)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-03", topik: "C10.1", tipe: "prosedur", depan: "Status SKD WPLN terbitan PER-25/PJ/2018 setelah PMK 112/2025?", belakang: "Tetap berlaku sampai periode berlakunya berakhir", dasar: "PMK 112/2025; PENG-2/PJ.09/2026", berlakuSejak: "2025-12-31", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-04", topik: "C10.1", tipe: "definisi", depan: "Urutan tie-breaker orang pribadi (Pasal 4 P3B)?", belakang: "Tempat tinggal tetap → kepentingan vital → kebiasaan berdiam → kewarganegaraan → MAP", dasar: "Pasal 4 ayat (2) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-05", topik: "C10.1", tipe: "definisi", depan: "Ciri beneficial owner penerima dividen/bunga/royalti?", belakang: "Bukan agen/nominee/conduit; berkendali atas penghasilan; menanggung risiko", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-06", topik: "C10.1", tipe: "angka", depan: "Kriteria residen orang pribadi menurut UU PPh?", belakang: "Bertempat tinggal, > 183 hari dalam 12 bulan, atau berniat tinggal", dasar: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-07", topik: "C10.1", tipe: "pasal", depan: "Hak pemajakan fee komisaris dan honor artis menurut P3B?", belakang: "Negara sumber, tanpa batas tarif → PPh 26 20%", dasar: "Pasal 16 dan 17 P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-08", topik: "C10.1", tipe: "angka", depan: "Kapan MLI berlaku bagi Indonesia?", belakang: "1 Agustus 2020 (memuat principal purpose test)", dasar: "Perpres 77/2019", berlakuSejak: "2020-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-09", topik: "C10.2", tipe: "angka", depan: "Batas BUT jasa menurut UU PPh?", belakang: "Lebih dari 60 hari dalam 12 bulan (P3B dapat mengatur lain)", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-10", topik: "C10.2", tipe: "pasal", depan: "Pembayaran BUT ke kantor pusat yang tidak dapat dibiayakan?", belakang: "Royalti, jasa manajemen/jasa lain, bunga (kecuali usaha perbankan)", dasar: "Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-11", topik: "C10.2", tipe: "angka", depan: "Branch profit tax domestik?", belakang: "20% × (PKP − PPh terutang), atau tarif P3B", dasar: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-12", topik: "C10.2", tipe: "prosedur", depan: "Syarat laba BUT bebas branch profit tax?", belakang: "SELURUH laba setelah pajak ditanam kembali paling lambat akhir tahun pajak berikutnya; tidak dialihkan 2 tahun sejak produksi komersial (perusahaan baru) atau 3 tahun (bentuk lain); diberitahukan dengan SPT Tahunan", dasar: "PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-13", topik: "C10.2", tipe: "definisi", depan: "Force of attraction dalam Pasal 5 UU PPh?", belakang: "Penghasilan kantor pusat dari usaha sejenis BUT di Indonesia dianggap penghasilan BUT", dasar: "Pasal 5 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-14", topik: "C10.3", tipe: "angka", depan: "Batas kredit PPh 24 dihitung bagaimana?", belakang: "Per jenis penghasilan untuk tiap negara: terkecil antara pajak LN sesuai P3B, pajak LN dibayar, dan (neto jenis itu ÷ PKP) × PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-15", topik: "C10.3", tipe: "pasal", depan: "Pajak LN yang sudah dikreditkan lalu dikembalikan?", belakang: "Tambahkan ke PPh terutang pada tahun pengembalian", dasar: "Pasal 24 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-16", topik: "C10.3", tipe: "definisi", depan: "Negara sumber dividen dan penjualan saham untuk Pasal 24?", belakang: "Negara tempat badan pembayar/penerbit saham didirikan atau berkedudukan", dasar: "Pasal 24 ayat (3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-17", topik: "C10.3", tipe: "definisi", depan: "Perlakuan rugi cabang luar negeri dalam PKP?", belakang: "Tidak digabung dengan penghasilan DN maupun negara lain", dasar: "Pasal 24 UU PPh; Pasal 4 ayat (3) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-18", topik: "C10.4", tipe: "angka", depan: "Batas DER dan dasar perhitungannya?", belakang: "4 : 1, rata-rata saldo akhir bulan", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-19", topik: "C10.4", tipe: "angka", depan: "Ambang kepemilikan CFC?", belakang: "≥ 50% saham badan LN nonbursa, sendiri atau bersama WPDN lain", dasar: "Pasal 18 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-20", topik: "C10.4", tipe: "angka", depan: "Saat deemed dividend CFC bila tidak ada kewajiban SPT di negaranya?", belakang: "Bulan ke-7 setelah tahun pajak berakhir (ke-4 setelah batas SPT bila ada)", dasar: "PMK 107/PMK.03/2017", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-21", topik: "C10.4", tipe: "angka", depan: "Ambang kepemilikan hubungan istimewa Pasal 18?", belakang: "Paling rendah 25%, langsung atau tidak langsung", dasar: "Pasal 18 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-22", topik: "C10.4", tipe: "angka", depan: "PPh 26 atas penjualan saham conduit company?", belakang: "20% × perkiraan neto 25% = 5% harga jual", dasar: "Pasal 18 ayat (3c), 26 ayat (2a) UU PPh; PMK 258/PMK.03/2008", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-23", topik: "C10.5", tipe: "angka", depan: "Ambang wajib Master File dan Local File?", belakang: "Omzet > Rp50 M; afiliasi barang > Rp20 M; lainnya > Rp5 M", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-24", topik: "C10.5", tipe: "angka", depan: "Ambang dan tenggat CbCR?", belakang: "Konsolidasi ≥ Rp11 triliun; 12 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-25", topik: "C10.5", tipe: "angka", depan: "Kapan Master File dan Local File harus tersedia?", belakang: "Paling lama 4 bulan setelah akhir tahun pajak", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-26", topik: "C10.5", tipe: "pasal", depan: "Peraturan TP yang dicabut PMK 172/2023?", belakang: "PMK 213/2016, PMK 49/2019, PMK 22/2020", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: "PMK 213/PMK.03/2016 (dokumentasi), PMK 49/PMK.03/2019 (MAP), PMK 22/PMK.03/2020 (APA/PKKU)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-27", topik: "C10.5", tipe: "definisi", depan: "Secondary adjustment dalam PMK 172/2023?", belakang: "Selisih koreksi TP dianggap dividen, kecuali dikembalikan dalam kas", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-28", topik: "C10.5", tipe: "definisi", depan: "Titik penyesuaian bila harga di luar rentang interkuartil?", belakang: "Median rentang kewajaran", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-29", topik: "C10.6", tipe: "angka", depan: "Batas waktu pengajuan MAP?", belakang: "Sesuai P3B, umumnya 3 tahun sejak pemberitahuan pertama", dasar: "Pasal 25 ayat (1) P3B; PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-30", topik: "C10.6", tipe: "prosedur", depan: "Bolehkah MAP berjalan bersamaan dengan keberatan?", belakang: "Boleh; tenggat keberatan 3 bulan tetap harus dijaga", dasar: "PMK 172/2023; Pasal 25 ayat (3) UU KUP", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-31", topik: "C10.7", tipe: "angka", depan: "Periode paling lama APA?", belakang: "5 tahun pajak; dapat roll-back bila syarat terpenuhi", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-32", topik: "C10.7", tipe: "definisi", depan: "Beda APA unilateral dan bilateral?", belakang: "Unilateral hanya mengikat DJP; bilateral disepakati dengan otoritas mitra", dasar: "Pasal 18 ayat (3a) UU PPh; PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-33", topik: "C10.8", tipe: "angka", depan: "Saluran dan tenggat laporan rekening keuangan (CRS dan domestik) oleh lembaga keuangan (data 2026 dst.)?", belakang: "CRS: LJK diawasi OJK ke OJK 1 Agustus (OJK→DJP 31 Agustus), LJK lainnya/entitas lain ke DJP 30 April. Domestik: semua pelapor, termasuk bank, ke DJP 30 April (Portal Wajib Pajak). Tenggat pada hari libur: hari kerja berikutnya", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: "Domestik 30 April; internasional 1 Agustus (PMK 70/PMK.03/2017 s.t.d.t.d. PMK 19/PMK.03/2018)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-34", topik: "C10.8", tipe: "angka", depan: "Ambang laporan domestik rekening orang pribadi di Lembaga Simpanan?", belakang: "Agregat semua rekening di lembaga yang sama per 31 Desember ≥ Rp1 miliar", dasar: "PMK 108/2025 Pasal 35 ayat (8) huruf a angka 1", berlakuSejak: "2026-01-01", menggantikan: "Rp200 juta (versi awal PMK 70/PMK.03/2017; dinaikkan menjadi Rp1 miliar oleh PMK 73/PMK.03/2017)", dekTambahan: [] },
    { id: "KT-C10-35", topik: "C10.8", tipe: "pasal", depan: "Sanksi pimpinan/pegawai LK yang tidak menyampaikan laporan?", belakang: "Kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar", dasar: "UU 9/2017 Pasal 7", berlakuSejak: "2017-05-08", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-36", topik: "C10.9", tipe: "angka", depan: "Tarif umum PPh 26 dan sifatnya?", belakang: "20% × bruto, final (kecuali BUT); dapat diturunkan P3B", dasar: "Pasal 26 ayat (1) dan (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-37", topik: "C10.9", tipe: "angka", depan: "PPh 26 efektif atas premi asuransi ke LN?", belakang: "Tertanggung 10%; asuransi 2%; reasuransi 1% dari premi", dasar: "KMK 624/KMK.04/1994", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-38", topik: "C10.9", tipe: "prosedur", depan: "Setor, lapor, dan bukti potong PPh 26 badan LN?", belakang: "Setor tanggal 15; SPT Masa Unifikasi 20 hari; BPNR", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-01-01", menggantikan: "setor tanggal 10 (PMK 242/PMK.03/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-39", topik: "C10.9", tipe: "prosedur", depan: "WPLN dipotong 20% padahal berhak P3B?", belakang: "Pemotong mengajukan permohonan pengembalian pajak yang seharusnya tidak terutang dengan surat kuasa WPLN; WPLN sendiri hanya bila pemotong tidak dapat ditemukan atau tidak dapat membetulkan SPT", dasar: "PMK 81/2024 Pasal 133 dan Pasal 134 (menggantikan PMK 187/PMK.03/2015)", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-40", topik: "C10.9", tipe: "angka", depan: "Rumus gross-up PPh 26 yang ditanggung pembayar?", belakang: "Bruto = neto ÷ (1 − tarif); PPh = tarif × bruto", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-41", topik: "C10.1", tipe: "angka", depan: "Objek PPh bagi WNA berkeahlian tertentu yang menjadi SPDN?", belakang: "Hanya penghasilan dari Indonesia, selama 4 tahun pajak sejak menjadi SPDN", dasar: "Pasal 4 ayat (1a) UU PPh (UU Cipta Kerja); PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02", menggantikan: "pemajakan atas seluruh penghasilan (worldwide) bagi semua SPDN", dekTambahan: [] },
    { id: "KT-C10-42", topik: "C10.1", tipe: "prosedur", depan: "Kapan WNI yang tinggal di luar negeri dapat menjadi subjek pajak luar negeri?", belakang: "Berada di luar Indonesia > 183 hari dalam 12 bulan dan memenuhi syarat tertentu", dasar: "UU PPh s.t.d.t.d. UU Cipta Kerja; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-43", topik: "C10.1", tipe: "pasal", depan: "Tiga syarat kumulatif Pasal 15 ayat (2) P3B agar gaji tidak dipajaki negara sumber?", belakang: "≤ 183 hari; dibayar pemberi kerja nonresiden; tidak dibebankan pada BUT di negara sumber", dasar: "Pasal 15 ayat (2) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-44", topik: "C10.1", tipe: "definisi", depan: "PPh 26 atas harga barang yang dibayar kepada pemasok luar negeri?", belakang: "Bukan objek PPh 26; impornya dipungut PPh 22 impor", dasar: "Pasal 26 ayat (1) dan Pasal 22 UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-45", topik: "C10.1", tipe: "pasal", depan: "Syarat pejabat diplomatik/konsulat asing dikecualikan sebagai subjek pajak?", belakang: "Bukan WNI, tanpa penghasilan lain di Indonesia di luar jabatannya, ada timbal balik", dasar: "Pasal 3 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-46", topik: "C10.1", tipe: "pasal", depan: "Syarat organisasi internasional dikecualikan sebagai subjek pajak?", belakang: "Ditetapkan Menteri Keuangan, Indonesia anggota, tidak menjalankan usaha di Indonesia", dasar: "Pasal 3 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-47", topik: "C10.2", tipe: "angka", depan: "PPh atas perusahaan pelayaran atau penerbangan luar negeri?", belakang: "2,64% × peredaran bruto, final (norma 6%)", dasar: "Pasal 15 UU PPh; KMK 417/KMK.04/1996", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-48", topik: "C10.2", tipe: "angka", depan: "PPh atas kantor perwakilan dagang asing?", belakang: "0,44% × nilai ekspor bruto, final (norma 1%)", dasar: "Pasal 15 UU PPh; KMK 634/KMK.04/1994", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-49", topik: "C10.2", tipe: "prosedur", depan: "Bentuk penanaman kembali laba BUT agar bebas branch profit tax?", belakang: "Penyertaan pada perusahaan baru/sudah berdiri, aktiva tetap, atau aktiva tak berwujud BUT", dasar: "PMK 14/PMK.03/2011", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-50", topik: "C10.2", tipe: "definisi", depan: "Gudang penyimpanan, pameran, pembelian barang, atau pengumpulan informasi semata?", belakang: "Kegiatan persiapan/penunjang; tidak membentuk BUT menurut Pasal 5 ayat (4) P3B", dasar: "Pasal 5 ayat (4) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-51", topik: "C10.3", tipe: "pasal", depan: "Nasib pajak luar negeri yang melebihi batas kredit?", belakang: "Tidak dikreditkan, tidak dibiayakan, tidak direstitusi, dan tidak dibawa ke tahun lain", dasar: "Pasal 24 ayat (2) dan Pasal 9 ayat (1) huruf h UU PPh; Pasal 7 PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-52", topik: "C10.3", tipe: "prosedur", depan: "Negara sumber memotong pajak melebihi tarif P3B?", belakang: "Kredit paling tinggi sebesar tarif P3B; kelebihan diminta kembali ke negara sumber", dasar: "Pasal 24 UU PPh; Pasal 6 ayat (4) huruf a PMK 192/PMK.03/2018", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-53", topik: "C10.4", tipe: "angka", depan: "Pajak minimum global: subjek, tarif, dan saat berlaku?", belakang: "Grup ≥ EUR750 juta; ETR 15%; IIR/DMTT 2025, UTPR 2026", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-54", topik: "C10.4", tipe: "definisi", depan: "Unsur modal dan utang dalam penghitungan DER?", belakang: "Modal termasuk pinjaman tanpa bunga afiliasi; utang hanya yang dibebani bunga", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-55", topik: "C10.4", tipe: "definisi", depan: "WP yang dikecualikan dari ketentuan DER?", belakang: "Bank, pembiayaan, asuransi, migas/minerba berkontrak, seluruhnya PPh final, infrastruktur", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-56", topik: "C10.4", tipe: "angka", depan: "Biaya pinjaman bila modal WP nol atau negatif?", belakang: "Seluruhnya tidak dapat dibebankan", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-57", topik: "C10.4", tipe: "pasal", depan: "Pasal 18 ayat (3b) UU PPh: pembelian saham/aktiva melalui SPV?", belakang: "Pembeli dapat ditetapkan sebagai pembeli sebenarnya bila berhubungan istimewa dan harga tidak wajar", dasar: "Pasal 18 ayat (3b) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-58", topik: "C10.5", tipe: "definisi", depan: "Lima faktor kesebandingan dalam PKKU?", belakang: "Karakteristik barang/jasa, fungsi-aset-risiko, kontrak, keadaan ekonomi, strategi usaha", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-59", topik: "C10.5", tipe: "definisi", depan: "Kepanjangan DEMPE dalam analisis harta tak berwujud?", belakang: "Pengembangan, peningkatan, pemeliharaan, perlindungan, eksploitasi", dasar: "PMK 172/2023 (analisis harta tidak berwujud)", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-60", topik: "C10.6", tipe: "prosedur", depan: "Pihak yang dapat memulai MAP?", belakang: "WPDN, WNI terdiskriminasi di negara mitra, DJP, atau otoritas pajak mitra", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-61", topik: "C10.6", tipe: "prosedur", depan: "Cara memperoleh penyesuaian berkaitan atas koreksi TP oleh otoritas mitra?", belakang: "Permohonan MAP kepada DJP; bukan pembetulan SPT sepihak", dasar: "Pasal 9 ayat (2) dan Pasal 25 P3B; PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-62", topik: "C10.7", tipe: "prosedur", depan: "Ruang lingkup pemeriksaan atas transaksi yang dicakup APA?", belakang: "Hanya menguji kepatuhan terhadap APA dan asumsi kritis", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-63", topik: "C10.7", tipe: "pasal", depan: "Apakah APA otomatis berlanjut setelah periodenya berakhir?", belakang: "Tidak; dirundingkan kembali melalui permohonan APA baru", dasar: "Pasal 18 ayat (3a) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-64", topik: "C10.8", tipe: "definisi", depan: "Tiga bentuk pertukaran informasi berdasarkan Pasal 26 P3B?", belakang: "Berdasarkan permintaan, spontan, dan otomatis", dasar: "Pasal 26 P3B dan Commentary Model OECD", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-65", topik: "C10.8", tipe: "pasal", depan: "Bolehkah negara mitra menolak permintaan informasi karena rahasia bank?", belakang: "Tidak, bila semata karena dipegang bank/nominee; rahasia dagang boleh ditolak", dasar: "Pasal 26 ayat (3) dan (5) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-66", topik: "C10.8", tipe: "angka", depan: "Berlakukah ambang Rp1 miliar untuk laporan CRS internasional atas rekening orang pribadi?", belakang: "Tidak; Rp1 miliar hanya untuk laporan domestik OP di Lembaga Simpanan. Ambang USD dalam PMK 108/2025 menyangkut pengecualian tertentu, mis. rekening lama entitas ≤ USD250.000 dan rekening uang elektronik tertentu ≤ USD10.000", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-67", topik: "C10.8", tipe: "prosedur", depan: "Perubahan PMK 71/2026 terkait pertukaran informasi?", belakang: "Tukar informasi dengan otoritas mitra dalam penelitian keberatan", dasar: "PMK 71/2026", berlakuSejak: "2026-10-02", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-68", topik: "C10.9", tipe: "prosedur", depan: "Kapan PPh Pasal 26 dipotong?", belakang: "Saat dibayar, disediakan untuk dibayarkan, atau jatuh tempo, mana lebih dahulu", dasar: "Pasal 26 UU PPh dan penjelasannya", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-69", topik: "C10.9", tipe: "prosedur", depan: "SPT Masa untuk PPh 26 atas jasa/pekerjaan orang pribadi WPLN?", belakang: "SPT Masa PPh 21/26 (BP26), bukan SPT Masa Unifikasi (BPNR)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-70", topik: "C10.9", tipe: "angka", depan: "PPN atas pemanfaatan JKP/BKP tidak berwujud dari luar negeri?", belakang: "12% × DPP 11/12, dipungut sendiri; tidak terpengaruh P3B", dasar: "Pasal 4 ayat (1) huruf d dan e UU PPN; PMK 131/2024", berlakuSejak: "2025-01-01", menggantikan: "11% × DPP penuh (2022–2024)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-71", topik: "C10.2", tipe: "angka", depan: "Cara menghitung time test BUT jasa dalam P3B?", belakang: "Hari proyek sama/berhubungan dalam 12 bulan bergulir, bukan per tahun kalender", dasar: "Pasal 5 ayat (3) huruf b P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-72", topik: "C10.2", tipe: "definisi", depan: "Awal dan akhir jangka waktu proyek konstruksi/instalasi menurut P3B?", belakang: "Sejak persiapan di lokasi sampai selesai; termasuk henti sementara dan subkontraktor", dasar: "Pasal 5 ayat (3) huruf a P3B; Commentary Model OECD Pasal 5", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-73", topik: "C10.2", tipe: "pasal", depan: "Kantor perwakilan yang semata riset pasar dan promosi: BUT?", belakang: "Bukan BUT menurut P3B (persiapan/penunjang), walau tercantum di Pasal 2 ayat (5)", dasar: "Pasal 5 ayat (4) P3B; Pasal 32A UU PPh", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-74", topik: "C10.2", tipe: "definisi", depan: "Atribusi laba BUT menurut Pasal 7 P3B (Model OECD)?", belakang: "Entitas terpisah; biaya administrasi kantor pusat boleh, royalti/bunga internal tidak", dasar: "Pasal 7 P3B; Pasal 5 ayat (3) UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-75", topik: "C10.2", tipe: "pasal", depan: "Royalti yang berhubungan efektif dengan BUT, dibayar WPDN kepada BUT?", belakang: "Penghasilan BUT; dipotong PPh 23 15%, bukan PPh 26", dasar: "Pasal 5 ayat (1) huruf c UU PPh; Pasal 12 ayat (4) P3B", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-76", topik: "C10.9", tipe: "angka", depan: "Kurs untuk DPP PPh 26 atas pembayaran dalam valuta asing?", belakang: "Kurs KMK yang berlaku pada saat PPh terutang", dasar: "Pasal 26 UU PPh; KMK kurs mingguan", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-77", topik: "C10.9", tipe: "prosedur", depan: "Royalti USD dibebankan ke induk 30 Juni, dibayar Agustus: masa dan kurs PPh 26?", belakang: "Masa Juni; kurs KMK minggu 30 Juni; setor paling lambat 15 Juli", dasar: "Pasal 26 UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-78", topik: "C10.9", tipe: "definisi", depan: "Kurs KMK vs kurs tengah BI: dipakai untuk apa?", belakang: "KMK: pajak dipotong/dipungut dan DPP; kurs tengah BI: pembukuan dan saldo akhir", dasar: "KMK kurs mingguan; PP 94/2010 Pasal 9", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-79", topik: "C10.9", tipe: "definisi", depan: "Selisih kurs saat melunasi utang royalti valas yang PPh 26-nya sudah dipotong?", belakang: "Diakui fiskal mengikuti pembukuan; PPh 26 rupiah tidak dihitung ulang", dasar: "PP 94/2010 Pasal 9; Pasal 4 ayat (1) huruf l, 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-80", topik: "C10.9", tipe: "prosedur", depan: "Form DGT terekam setelah pembayaran sehingga dipotong 20%: berapa dikembalikan?", belakang: "Selisih PPh rupiah yang disetor (20%) dengan PPh menurut tarif P3B; diajukan pemotong dengan surat kuasa WPLN; kurs tidak dihitung ulang", dasar: "PMK 112/2025 Pasal 15; PMK 81/2024 Pasal 133 dan Pasal 134", berlakuSejak: "2025-12-31", menggantikan: "SKD cukup diterima sebelum batas SPT Masa (PER-25/PJ/2018)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-81", topik: "C10.9", tipe: "prosedur", depan: "Imbalan jasa WPLN tanpa BUT, Form DGT sah, PPh nihil: tetap buat bukti potong?", belakang: "Ya, BPNR dengan fasilitas SKD dan PPh Rp0, dilaporkan pada SPT Masa", dasar: "PMK 112/2025; PER-11/PJ/2025", berlakuSejak: "2025-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-82", topik: "C10.5", tipe: "definisi", depan: "Indikator laba WP di dalam rentang interkuartil tetapi di bawah median?", belakang: "Dianggap wajar; tidak dikoreksi ke median", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-83", topik: "C10.5", tipe: "definisi", depan: "Kapan metode pembagian laba paling tepat?", belakang: "Kedua pihak berkontribusi unik dan bernilai, operasinya sangat terintegrasi", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-84", topik: "C10.5", tipe: "prosedur", depan: "Membandingkan harga FOB afiliasi dengan harga CIF independen (CUP)?", belakang: "Sesuaikan dulu biaya angkut dan asuransi agar sebanding", dasar: "PMK 172/2023 (analisis kesebandingan)", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-85", topik: "C10.1", tipe: "definisi", depan: "Tiga macam hak pemajakan negara sumber dalam P3B?", belakang: "Penuh (tanpa batas tarif), terbatas (tarif maksimum), pelepasan (hanya negara domisili)", dasar: "Pasal 6–21 P3B (Model OECD/UN)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-86", topik: "C10.1", tipe: "definisi", depan: "Rumusan P3B yang menandai pelepasan hak pemajakan negara sumber?", belakang: "'Hanya dapat dikenai pajak' di negara domisili, mis. laba usaha tanpa BUT", dasar: "Pasal 7 dan 18 Model OECD", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-87", topik: "C10.1", tipe: "definisi", depan: "Contoh hak pemajakan penuh negara sumber?", belakang: "Harta tak gerak, laba BUT, fee direksi/komisaris, artis dan atlet", dasar: "Pasal 6, 7, 16, dan 17 Model OECD", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-88", topik: "C10.1", tipe: "pasal", depan: "Ketentuan khusus P3B di luar pasal distributif?", belakang: "Nondiskriminasi, MAP, pertukaran informasi, bantuan penagihan, misi diplomatik, hak atas manfaat", dasar: "Pasal 24–29 Model OECD 2017", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-89", topik: "C10.1", tipe: "pasal", depan: "Istilah yang tidak didefinisikan P3B diartikan menurut?", belakang: "Hukum domestik negara yang menerapkan P3B, kecuali konteks menghendaki lain", dasar: "Pasal 3 ayat (2) Model OECD", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-90", topik: "C10.1", tipe: "definisi", depan: "Pemajakan berganda yuridis vs ekonomis?", belakang: "Yuridis: satu WP, dua negara; ekonomis: dua WP berbeda atas penghasilan sama", dasar: "Pasal 24 dan 32A UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-91", topik: "C10.8", tipe: "pasal", depan: "Dasar domestik bantuan penagihan pajak lintas negara?", belakang: "Pasal 20A UU KUP (UU HPP): resiprokal, dilaksanakan DJP", dasar: "Pasal 20A UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-92", topik: "C10.8", tipe: "prosedur", depan: "Klaim pajak negara mitra yang diterima DJP berkedudukan sebagai?", belakang: "Utang pajak; ditagih DJP dengan instrumen UU PPSP", dasar: "Pasal 20A UU KUP; PMK 61/2023", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-93", topik: "C10.8", tipe: "definisi", depan: "Empat jenis informasi yang dipertukarkan otomatis (AEoI) oleh Indonesia?", belakang: "Rekening keuangan (CRS), aset kripto (CARF), CbCR, dan GIR", dasar: "Konvensi MAC; PMK 108/2025; PMK 172/2023; PMK 136/2024", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-94", topik: "C10.8", tipe: "angka", depan: "Pertukaran informasi aset kripto (CARF) pertama bagi Indonesia?", belakang: "2027, untuk data tahun 2026", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-95", topik: "C10.8", tipe: "pasal", depan: "Peraturan akses informasi keuangan untuk perpajakan sejak 1 Januari 2026?", belakang: "PMK 108/2025, mencakup CRS dan CARF", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: "PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-96", topik: "C10.8", tipe: "definisi", depan: "Dapatkah e-wallet menjadi Lembaga Simpanan pelapor?", belakang: "Ya: pengelola Produk Uang Elektronik Tertentu (PJP) dan mata uang digital bank sentral; rekening uang elektronik yang rata-rata 90 harinya tidak pernah melebihi USD10.000 dikecualikan", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-97", topik: "C10.8", tipe: "prosedur", depan: "Kewajiban PJAK pelapor CARF atas data tahun 2026?", belakang: "Uji tuntas pengguna; lapor ke DJP paling lambat 30 April 2027; nihil tetap wajib", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-98", topik: "C10.8", tipe: "pasal", depan: "Rezim untuk laporan atas data tahun 2025 yang disampaikan pada 2026?", belakang: "PMK 70/PMK.03/2017 beserta perubahannya bila disampaikan sampai 30 September 2026; laporan atau pembetulan yang disampaikan sejak 1 Oktober 2026 memakai PMK 108/2025; data 2026 memakai PMK 108/2025", dasar: "Pasal 59 huruf c dan d PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-99", topik: "C10.9", tipe: "angka", depan: "Kurs KMK untuk yen Jepang dinyatakan per berapa unit?", belakang: "Per 100 JPY; DPP rupiah = jumlah JPY × kurs ÷ 100", dasar: "KMK kurs pajak mingguan", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-100", topik: "C10.9", tipe: "definisi", depan: "Pemberi pinjaman yang wajib meneruskan hampir seluruh bunga ke induk di negara non-P3B?", belakang: "Bukan beneficial owner; PPh 26 20%; kekurangan ditagih ke pemotong", dasar: "Pasal 26 ayat (1a) UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-101", topik: "C10.9", tipe: "angka", depan: "WPLN menjual tanah/bangunan atau saham bursa di Indonesia: PPh apa?", belakang: "PPh final Pasal 4(2): tanah/bangunan 2,5%, saham bursa 0,1%; bukan PPh 26", dasar: "Pasal 26 ayat (2) UU PPh; PP 34/2016; PP 41/1994", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-102", topik: "C10.9", tipe: "pasal", depan: "Sifat PPh 26 bila WPLN berubah status menjadi SPDN atau BUT?", belakang: "Tidak final; dikreditkan dalam SPT Tahunan (Pasal 26 ayat (5))", dasar: "Pasal 26 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-103", topik: "C10.9", tipe: "prosedur", depan: "Kelebihan potong PPh 26 karena Form DGT terlambat: boleh dikompensasikan pemotong?", belakang: "Tidak; kelebihannya dimintakan kembali lewat permohonan pengembalian yang diajukan pemotong dengan surat kuasa WPLN, PPh 26 masa lain tetap disetor penuh", dasar: "PMK 112/2025 Pasal 15; PMK 81/2024 Pasal 133 dan Pasal 134", berlakuSejak: "2025-12-31", menggantikan: "PMK 187/PMK.03/2015 (dicabut 1 Januari 2025)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-C10-104", topik: "C10.2", tipe: "definisi", depan: "Tanpa P3B: gudang semata penyimpanan, kantor perwakilan, proyek instalasi 75 hari merupakan BUT?", belakang: "Ya; UU PPh tanpa pengecualian penunjang dan tanpa time test konstruksi", dasar: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-105", topik: "C10.2", tipe: "definisi", depan: "Ciri agen tidak bebas yang menimbulkan BUT menurut P3B?", belakang: "Biasa menutup kontrak atas nama prinsipal, bergantung padanya, tanpa risiko usaha sendiri", dasar: "Pasal 5 ayat (5) dan (6) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-106", topik: "C10.2", tipe: "pasal", depan: "Penjualan langsung kantor pusat atas barang sejenis: masuk laba BUT?", belakang: "UU PPh (tanpa P3B): ya, force of attraction; P3B Model OECD: tidak", dasar: "Pasal 5 ayat (1) huruf b UU PPh; Pasal 7 P3B", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-107", topik: "C10.2", tipe: "angka", depan: "Time test konstruksi P3B untuk dua proyek yang tidak berhubungan?", belakang: "Diuji per proyek; jangka waktunya tidak dijumlahkan", dasar: "Pasal 5 ayat (3) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-108", topik: "C10.6", tipe: "prosedur", depan: "Badan residen ganda menurut P3B berumusan MLI?", belakang: "Ditentukan melalui MAP; tanpa kesepakatan, tidak berhak fasilitas P3B", dasar: "Pasal 4 MLI; PMK 172/2023", berlakuSejak: "2020-08-01", menggantikan: "tie-breaker otomatis tempat kedudukan manajemen efektif", dekTambahan: [] },
    { id: "KT-C10-109", topik: "C10.6", tipe: "prosedur", depan: "WPLN dipajaki Indonesia tidak sesuai P3B: MAP diajukan ke mana?", belakang: "Ke pejabat berwenang negara domisilinya, terlepas dari upaya hukum domestik", dasar: "Pasal 25 ayat (1) P3B", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-110", topik: "C10.7", tipe: "prosedur", depan: "Realisasi APA di bawah rentang satu tahun dan di atas rentang tahun lain: boleh diimbangkan?", belakang: "Tidak; tiap tahun diuji sendiri menurut klausul penyesuaian APA", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-111", topik: "C10.7", tipe: "pasal", depan: "Akibat Wajib Pajak menyampaikan data tidak benar dalam permohonan APA?", belakang: "APA dapat dibatalkan; transaksi diuji dengan PKKU melalui pemeriksaan", dasar: "PMK 172/2023 (rincian akibat pembatalan ◐)", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-112", topik: "C10.4", tipe: "angka", depan: "PPh 26 atas bunga afiliasi luar negeri bila DER melampaui 4 : 1?", belakang: "Tetap atas seluruh bunga; DER hanya membatasi biaya fiskal", dasar: "PMK 169/PMK.010/2015; Pasal 26 ayat (1) UU PPh", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-113", topik: "C10.3", tipe: "angka", depan: "Batas kredit PPh 24 bila ada rugi dalam negeri sehingga PKP lebih kecil dari penghasilan LN?", belakang: "Paling tinggi seluruh PPh terutang; sisa pajak luar negeri hangus", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (7) dan Pasal 7 PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-C10-114", topik: "C10.3", tipe: "definisi", depan: "Dua penghasilan dari satu negara dengan beban pajak berbeda: batas kredit dihitung bagaimana?", belakang: "Dihitung sendiri-sendiri per jenis penghasilan untuk tiap negara; kelebihan pajak satu jenis tidak tertutup oleh jenis lain dari negara yang sama", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) PMK 192/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-C10-01", judul: "Kredit PPh 24 per jenis penghasilan untuk tiap negara: cabang, dividen, royalti, dan rugi luar negeri", topik: "C10.3", estimasiMenit: 18,
      narasi: "PT Samudra Global Niaga (bukan perusahaan terbuka; peredaran bruto 2025 Rp120 miliar sehingga tidak memperoleh fasilitas Pasal 31E) memiliki penghasilan neto dalam negeri Tahun Pajak 2025 Rp4.500.000.000. Perusahaan memiliki cabang di Thailand dengan laba neto Rp1.500.000.000 dan pajak Thailand dibayar Rp300.000.000 (laba cabang tidak diinvestasikan di Indonesia). Perusahaan menerima dividen bruto Rp1.000.000.000 dari anak usaha nonbursa di Korea Selatan (kepemilikan 40%; dipotong 10% sesuai P3B = Rp100.000.000; dividen tidak diinvestasikan di Indonesia) dan royalti bruto Rp500.000.000 dari Australia (dipotong 15% sesuai P3B = Rp75.000.000). Cabang di Filipina menderita rugi Rp400.000.000. Angsuran PPh 25 selama 2025 Rp900.000.000; tidak ada kredit pajak lain.",
      data: [["Neto dalam negeri", "Rp4.500.000.000"], ["Laba cabang Thailand / pajak", "Rp1.500.000.000 / Rp300.000.000"], ["Dividen Korea Selatan bruto / pajak", "Rp1.000.000.000 / Rp100.000.000"], ["Royalti Australia bruto / pajak", "Rp500.000.000 / Rp75.000.000"], ["Rugi cabang Filipina", "Rp400.000.000"], ["Angsuran PPh 25", "Rp900.000.000"], ["Tarif PPh badan", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa penghasilan kena pajak PT Samudra Global 2025 (Rp)?", tipe: "angka", jawaban: 7500000000, toleransi: 0,
          petunjuk: ["Penghasilan LN digabung sebesar penghasilan neto, sebelum dikurangi pajak LN", "Rugi cabang Filipina tidak digabung", "4.500 + 1.500 + 1.000 + 500 = Rp7.500.000.000"],
          penjelasan: "Pasal 4 ayat (1) dan ayat (2) PMK 192/PMK.03/2018: penghasilan LN digabung sebesar penghasilan neto sebelum dikurangi pajak LN; Pasal 4 ayat (3): kerugian di LN tidak diperhitungkan." },
        { no: 2, pertanyaan: "Berapa PPh terutang 2025 (Rp)?", tipe: "angka", jawaban: 1650000000, toleransi: 0,
          petunjuk: ["Tarif Pasal 17 ayat (1) huruf b", "Tidak ada fasilitas 31E karena omzet di atas Rp50 miliar", "22% × Rp7.500.000.000 = Rp1.650.000.000"],
          penjelasan: "Tarif badan 22% atas seluruh PKP." },
        { no: 3, pertanyaan: "Berapa kredit PPh 24 yang boleh untuk Thailand (Rp)?", tipe: "angka", jawaban: 300000000, toleransi: 0,
          petunjuk: ["Batas = (neto Thailand ÷ PKP) × PPh terutang", "1.500/7.500 × Rp1.650.000.000 = Rp330.000.000", "Pajak dibayar Rp300.000.000 lebih kecil → kredit Rp300.000.000"],
          penjelasan: "Batas dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): untuk laba usaha cabang Thailand ambil yang terkecil antara pajak LN dan batas proporsional." },
        { no: 4, pertanyaan: "Berapa total kredit PPh 24 seluruh negara (Rp)?", tipe: "angka", jawaban: 475000000, toleransi: 0,
          petunjuk: ["Korea: batas 1.000/7.500 × 1,65 M = Rp220 jt; dibayar Rp100 jt", "Australia: batas 500/7.500 × 1,65 M = Rp110 jt; dibayar Rp75 jt", "300 + 100 + 75 = Rp475.000.000"],
          penjelasan: "Semua negara di bawah batas sehingga kredit sebesar pajak yang dibayar sesuai P3B." },
        { no: 5, pertanyaan: "Bagaimana perlakuan rugi cabang Filipina Rp400.000.000?", tipe: "pilihan",
          opsi: { A: "Dikurangkan dari penghasilan dalam negeri", B: "Dikurangkan dari laba cabang Thailand", C: "Tidak digabung dan tidak mengurangi PKP di Indonesia", D: "Dikompensasikan 5 tahun dengan penghasilan dalam negeri" }, jawaban: "C",
          petunjuk: ["Lihat Pasal 4 ayat (3) PMK 192/PMK.03/2018", "Rugi LN tidak boleh mengurangi penghasilan lain", "Jawaban: C"],
          penjelasan: "Kerugian di luar negeri tidak digabungkan dalam menghitung PKP, sehingga tidak menurunkan PPh Indonesia." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 29 yang harus dibayar (Rp)?", tipe: "angka", jawaban: 275000000, toleransi: 0,
          petunjuk: ["PPh terutang − PPh 24 − PPh 25", "1.650.000.000 − 475.000.000 − 900.000.000", "Rp275.000.000"],
          penjelasan: "Kredit PPh 24 dan PPh 25 mengurangi PPh terutang; sisa dilunasi sebelum SPT disampaikan." }
      ],
      kesimpulan: "PKP Rp7,5 miliar (rugi Filipina dikeluarkan), PPh terutang Rp1,65 miliar. Kredit PPh 24 per jenis penghasilan untuk tiap negara Rp300 juta + Rp100 juta + Rp75 juta = Rp475 juta, semuanya di bawah batas proporsional. Setelah PPh 25 Rp900 juta, PPh 29 Rp275 juta.",
      kalkulatorRef: "pph24"
    },
    {
      id: "K-C10-02", judul: "BUT jasa TI: koreksi pembayaran ke kantor pusat dan branch profit tax", topik: "C10.2", estimasiMenit: 18,
      narasi: "Kyoto Systems Co., Ltd. (residen Jepang) mengerjakan implementasi sistem TI untuk beberapa klien di Indonesia. Sepanjang 2025 personelnya hadir di Indonesia 220 hari. Ketentuan P3B yang relevan (disederhanakan) menetapkan BUT jasa bila kegiatan berlangsung lebih dari 6 bulan dalam 12 bulan, dan tarif branch profit tax P3B 10%. Pembukuan BUT 2025: pendapatan jasa dari klien Indonesia Rp12.000.000.000 (PPh 23 dipotong klien 2% = Rp240.000.000); biaya langsung di Indonesia Rp7.500.000.000; alokasi biaya administrasi kantor pusat yang berkaitan langsung dengan BUT dan wajar Rp500.000.000; royalti perangkat lunak yang dibebankan kantor pusat Rp1.000.000.000; bunga atas dana dari kantor pusat Rp200.000.000. BUT baru terdaftar sehingga tidak ada angsuran PPh 25. Untuk kasus ini fasilitas Pasal 31E tidak diterapkan (fasilitas itu ditujukan bagi WP badan dalam negeri), sehingga seluruh PKP dikenai tarif 22%.",
      data: [["Hari kehadiran 2025", "220 hari"], ["Time test P3B (disederhanakan)", "lebih dari 6 bulan dalam 12 bulan"], ["Pendapatan jasa", "Rp12.000.000.000"], ["PPh 23 dipotong klien", "Rp240.000.000"], ["Biaya langsung", "Rp7.500.000.000"], ["Biaya administrasi kantor pusat (wajar)", "Rp500.000.000"], ["Royalti ke kantor pusat", "Rp1.000.000.000"], ["Bunga ke kantor pusat", "Rp200.000.000"], ["Tarif BPT P3B", "10%"], ["Pasal 31E", "tidak diterapkan (BUT)"]],
      langkah: [
        { no: 1, pertanyaan: "Bagaimana status Kyoto Systems di Indonesia untuk 2025?", tipe: "pilihan",
          opsi: { A: "Bukan BUT karena time test domestik 60 hari dikesampingkan P3B", B: "BUT, karena 220 hari melebihi lebih dari 6 bulan dalam 12 bulan", C: "Bukan BUT karena jasa TI adalah kegiatan penunjang", D: "BUT hanya bila Kyoto Systems menyewa kantor di Indonesia" }, jawaban: "B",
          petunjuk: ["Bandingkan 220 hari dengan time test P3B", "6 bulan ≈ 183 hari", "Jawaban: B"],
          penjelasan: "Kehadiran 220 hari melampaui time test P3B sehingga terbentuk BUT jasa (service PE), walaupun tanpa kantor tetap." },
        { no: 2, pertanyaan: "Berapa koreksi fiskal positif atas pembayaran ke kantor pusat (Rp)?", tipe: "angka", jawaban: 1200000000, toleransi: 0,
          petunjuk: ["Pasal 5 ayat (3) UU PPh", "Royalti dan bunga ke kantor pusat tidak dapat dibiayakan; biaya administrasi yang berkaitan boleh", "Rp1.000.000.000 + Rp200.000.000 = Rp1.200.000.000"],
          penjelasan: "Pembayaran internal berupa royalti dan bunga (bukan usaha perbankan) dikoreksi; biaya administrasi kantor pusat yang wajar tetap dapat dikurangkan." },
        { no: 3, pertanyaan: "Berapa PKP BUT 2025 (Rp)?", tipe: "angka", jawaban: 4000000000, toleransi: 0,
          petunjuk: ["Laba komersial = 12.000 − 7.500 − 500 − 1.000 − 200", "Laba komersial Rp2.800.000.000", "PKP = 2.800 + 1.200 = Rp4.000.000.000"],
          penjelasan: "Atribusi laba BUT: pendapatan dikurangi biaya yang boleh, termasuk alokasi wajar biaya administrasi kantor pusat." },
        { no: 4, pertanyaan: "Berapa PPh Pasal 29 BUT 2025 (Rp)?", tipe: "angka", jawaban: 640000000, toleransi: 0,
          petunjuk: ["PPh terutang = 22% × Rp4.000.000.000 = Rp880.000.000", "Kredit PPh 23 Rp240.000.000; PPh 25 nihil", "Rp880.000.000 − Rp240.000.000 = Rp640.000.000"],
          penjelasan: "PPh 23 yang dipotong klien menjadi kredit pajak BUT." },
        { no: 5, pertanyaan: "Berapa branch profit tax tanpa penanaman kembali (Rp)?", tipe: "angka", jawaban: 312000000, toleransi: 0,
          petunjuk: ["Dasar = PKP − PPh terutang (bukan PPh 29)", "Rp4.000.000.000 − Rp880.000.000 = Rp3.120.000.000", "10% × Rp3.120.000.000 = Rp312.000.000"],
          penjelasan: "Pasal 26 ayat (4) dengan tarif P3B 10%." },
        { no: 6, pertanyaan: "Berapa branch profit tax bila BUT hanya menanamkan kembali Rp1.120.000.000 (sebagian dari laba setelah pajak Rp3.120.000.000) untuk pembelian aktiva tetap BUT (Rp)?", tipe: "angka", jawaban: 312000000, toleransi: 0,
          petunjuk: ["PMK 14/PMK.03/2011 Pasal 1 ayat (3): pengecualian hanya bila SELURUH laba setelah pajak ditanamkan kembali", "Penanaman kembali sebagian tidak mengurangi dasar BPT", "10% × Rp3.120.000.000 = Rp312.000.000"],
          penjelasan: "Pengecualian Pasal 26 ayat (4) bersifat seluruhnya atau tidak sama sekali: karena hanya sebagian yang ditanamkan kembali, BPT tetap dihitung atas seluruh laba setelah pajak. Seandainya seluruh Rp3.120.000.000 ditanamkan kembali dalam bentuk aktiva tetap, aktiva itu tidak boleh dialihkan paling sedikit 3 tahun sejak perolehan." }
      ],
      kesimpulan: "Kehadiran 220 hari membentuk BUT. Royalti dan bunga ke kantor pusat dikoreksi Rp1,2 miliar sehingga PKP Rp4 miliar, PPh Rp880 juta, dan PPh 29 Rp640 juta setelah kredit PPh 23. Branch profit tax 10% × Rp3,12 miliar = Rp312 juta, dan tetap Rp312 juta bila hanya Rp1,12 miliar yang ditanamkan kembali karena pengecualian mensyaratkan seluruh laba setelah pajak ditanamkan kembali.",
      kalkulatorRef: "pph-badan"
    },
    {
      id: "K-C10-03", judul: "DER 4:1 dan PPh 26 bunga pinjaman afiliasi Belanda", topik: "C10.4", estimasiMenit: 15,
      narasi: "PT Pelita Kemasan Nusantara (produsen kemasan plastik; bukan sektor yang dikecualikan dari DER) menyajikan rata-rata saldo akhir bulan Tahun Pajak 2025: ekuitas Rp15.000.000.000; pinjaman tanpa bunga dari pemegang saham Rp5.000.000.000; pinjaman bank dalam negeri Rp40.000.000.000 dengan bunga 2025 Rp3.200.000.000; pinjaman berjangka 5 tahun dari afiliasi Atlas Finance B.V. (Belanda; beneficial owner; Form DGT sah; P3B: 5% untuk pinjaman lebih dari 2 tahun) Rp60.000.000.000 dengan bunga 2025 Rp5.400.000.000 pada tingkat bunga yang telah teruji wajar; utang dagang tanpa bunga Rp8.000.000.000. Utang swasta luar negeri telah dilaporkan kepada DJP.",
      data: [["Ekuitas", "Rp15.000.000.000"], ["Pinjaman tanpa bunga pemegang saham", "Rp5.000.000.000"], ["Pinjaman bank DN / bunga", "Rp40.000.000.000 / Rp3.200.000.000"], ["Pinjaman Atlas Finance (5 tahun) / bunga", "Rp60.000.000.000 / Rp5.400.000.000"], ["Utang dagang tanpa bunga", "Rp8.000.000.000"], ["Tarif bunga P3B Belanda (> 2 tahun)", "5%"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa modal untuk penghitungan DER (Rp)?", tipe: "angka", jawaban: 20000000000, toleransi: 0,
          petunjuk: ["Modal mencakup ekuitas", "Pinjaman tanpa bunga dari pihak hubungan istimewa diperlakukan sebagai modal", "Rp15 M + Rp5 M = Rp20.000.000.000"],
          penjelasan: "PMK 169/2015: pinjaman tanpa bunga dari pihak hubungan istimewa termasuk modal." },
        { no: 2, pertanyaan: "Berapa utang untuk penghitungan DER (Rp)?", tipe: "angka", jawaban: 100000000000, toleransi: 0,
          petunjuk: ["Hanya utang berbunga (termasuk utang dagang yang berbunga)", "Utang dagang tanpa bunga tidak dihitung", "Rp40 M + Rp60 M = Rp100.000.000.000"],
          penjelasan: "DER = 100 : 20 = 5 : 1, melebihi batas 4 : 1." },
        { no: 3, pertanyaan: "Berapa biaya pinjaman yang dapat dibebankan (Rp)?", tipe: "angka", jawaban: 6880000000, toleransi: 0,
          petunjuk: ["Porsi = (4 × modal) ÷ utang", "(4 × 20) ÷ 100 = 80%", "80% × (Rp3.200.000.000 + Rp5.400.000.000) = Rp6.880.000.000"],
          penjelasan: "Biaya pinjaman meliputi seluruh bunga atas utang yang dihitung dalam DER." },
        { no: 4, pertanyaan: "Berapa tambahan PPh badan akibat koreksi DER (Rp)?", tipe: "angka", jawaban: 378400000, toleransi: 0,
          petunjuk: ["Koreksi = Rp8.600.000.000 − Rp6.880.000.000", "Koreksi Rp1.720.000.000", "22% × Rp1.720.000.000 = Rp378.400.000"],
          penjelasan: "Koreksi positif DER menambah PKP dan PPh badan." },
        { no: 5, pertanyaan: "Berapa PPh 26 atas bunga kepada Atlas Finance tahun 2025 (Rp)?", tipe: "angka", jawaban: 270000000, toleransi: 0,
          petunjuk: ["Tarif P3B 5% untuk pinjaman lebih dari 2 tahun", "Dasar adalah seluruh bunga yang dibayar/terutang", "5% × Rp5.400.000.000 = Rp270.000.000"],
          penjelasan: "SKD sah dan beneficial owner terpenuhi sehingga tarif P3B 5% berlaku." },
        { no: 6, pertanyaan: "Apakah bagian bunga yang tidak dapat dibebankan karena DER mengurangi dasar PPh 26?", tipe: "pilihan",
          opsi: { A: "Ya, PPh 26 hanya atas bunga yang dapat dibebankan", B: "Tidak; PPh 26 dipotong atas seluruh bunga yang dibayarkan, DER hanya memengaruhi biaya fiskal pembayar", C: "Ya, bagian tersebut dianggap dividen dan dikenai 20%", D: "Tidak, tetapi tarif menjadi 20% untuk bagian yang dikoreksi" }, jawaban: "B",
          petunjuk: ["DER adalah aturan pengurangan biaya bagi pembayar", "Penerima tetap memperoleh bunga penuh", "Jawaban: B"],
          penjelasan: "Pembatasan DER tidak mengubah karakter maupun jumlah bunga yang diterima WPLN; PPh 26 tetap atas bunga bruto dengan tarif P3B." }
      ],
      kesimpulan: "Modal Rp20 miliar dan utang Rp100 miliar menghasilkan DER 5:1, sehingga hanya 80% biaya pinjaman (Rp6,88 miliar) yang dapat dibebankan; koreksi Rp1,72 miliar menambah PPh Rp378,4 juta. PPh 26 atas bunga ke Belanda tetap dihitung atas seluruh bunga: 5% × Rp5,4 miliar = Rp270 juta.",
      kalkulatorRef: "der"
    },
    {
      id: "K-C10-04", judul: "PPh 26 dan PPN satu masa: royalti, bunga, jasa, dan impor di Coretax", topik: "C10.9", estimasiMenit: 20,
      narasi: "PT Nusantara Robotika (PKP; peredaran bruto 2025 Rp160 miliar) mencatat pembayaran ke luar negeri pada Masa Pajak Juni 2026: (1) royalti paten Rp1.200.000.000 kepada Techno Patent B.V. (Belanda; beneficial owner; Form DGT sah terekam di Coretax sebelum pembayaran; batas tarif royalti P3B 10%); (2) bunga pinjaman berjangka 4 tahun Rp500.000.000 kepada Rhein Kredit AG (Jerman; beneficial owner; Form DGT sah; batas tarif bunga P3B 10%); (3) imbalan jasa pemeliharaan sistem jarak jauh Rp300.000.000 kepada Nordic Cloud AB (Swedia; Form DGT sah; tidak memiliki BUT di Indonesia; menurut P3B merupakan laba usaha); (4) pembayaran suku cadang impor Rp900.000.000 kepada pemasok di Taiwan, yang PPh 22 impor dan PPN impornya telah dipungut Bea Cukai. Royalti dan jasa pemeliharaan dimanfaatkan di Indonesia; bunga merupakan jasa keuangan yang tidak dikenai PPN; seluruh transaksi bukan atas barang mewah.",
      data: [["Royalti paten (Belanda; P3B 10%)", "Rp1.200.000.000"], ["Bunga pinjaman 4 tahun (Jerman; P3B 10%)", "Rp500.000.000"], ["Jasa pemeliharaan jarak jauh (Swedia; tanpa BUT)", "Rp300.000.000"], ["Suku cadang impor (Taiwan)", "Rp900.000.000"], ["PPN pemanfaatan dari luar negeri", "12% × DPP nilai lain 11/12"], ["Masa pajak", "Juni 2026"]],
      langkah: [
        { no: 1, pertanyaan: "Pembayaran mana yang menjadi objek pemotongan PPh Pasal 26 oleh PT Nusantara Robotika?", tipe: "pilihan",
          opsi: { A: "Royalti dan bunga saja", B: "Royalti, bunga, dan jasa pemeliharaan", C: "Seluruh pembayaran, termasuk suku cadang dengan perkiraan neto 25%", D: "Royalti saja karena bunga dibebaskan P3B" }, jawaban: "A",
          petunjuk: ["Jasa tanpa BUT yang menurut P3B merupakan laba usaha hanya dipajaki Swedia", "Pembelian barang dari luar negeri bukan objek PPh 26; impornya dipungut PPh 22 impor", "Jawaban: A"],
          penjelasan: "Royalti (Pasal 12 P3B) dan bunga (Pasal 11 P3B) dapat dipajaki Indonesia dengan tarif terbatas; jasa tanpa BUT (Pasal 7) tidak; pembelian barang bukan objek Pasal 26 ayat (1), dan Pasal 26 ayat (2) hanya untuk penjualan harta di Indonesia." },
        { no: 2, pertanyaan: "Berapa PPh 26 atas royalti paten (Rp)?", tipe: "angka", jawaban: 120000000, toleransi: 0,
          petunjuk: ["Form DGT sah terekam sebelum pembayaran dan syarat beneficial owner terpenuhi", "Tarif P3B royalti 10%", "10% × Rp1.200.000.000 = Rp120.000.000"],
          penjelasan: "Syarat PMK 112/2025 terpenuhi sehingga tarif P3B berlaku." },
        { no: 3, pertanyaan: "Berapa total PPh 26 Masa Juni 2026 (Rp)?", tipe: "angka", jawaban: 170000000, toleransi: 0,
          petunjuk: ["PPh 26 bunga = 10% × Rp500.000.000 = Rp50.000.000", "Tambahkan PPh 26 royalti Rp120.000.000", "Rp120.000.000 + Rp50.000.000 = Rp170.000.000"],
          penjelasan: "Hanya royalti dan bunga yang dipotong; keduanya memakai tarif P3B 10%." },
        { no: 4, pertanyaan: "Berapa PPN atas pemanfaatan BKP tidak berwujud dan JKP dari luar daerah pabean yang wajib dipungut sendiri (Rp)?", tipe: "angka", jawaban: 165000000, toleransi: 0,
          petunjuk: ["Objek: royalti (BKP tidak berwujud) dan jasa pemeliharaan (JKP) yang dimanfaatkan di Indonesia; bunga tidak dikenai PPN", "DPP nilai lain = 11/12 × (Rp1.200.000.000 + Rp300.000.000) = Rp1.375.000.000", "12% × Rp1.375.000.000 = Rp165.000.000"],
          penjelasan: "P3B tidak memengaruhi PPN. DPP adalah jumlah yang dibayar sebelum dipotong PPh 26; PPN impor suku cadang sudah dipungut Bea Cukai." },
        { no: 5, pertanyaan: "Bukti potong dan tenggat yang tepat untuk PPh 26 Masa Juni 2026 adalah ...", tipe: "pilihan",
          opsi: { A: "BPPU; setor paling lambat 10 Juli 2026; lapor paling lambat 20 Juli 2026", B: "BPNR; setor paling lambat 15 Juli 2026; SPT Masa PPh Unifikasi paling lambat 20 Juli 2026", C: "BP21; setor paling lambat 15 Juli 2026; SPT Masa PPh 21/26 paling lambat 20 Juli 2026", D: "BPNR; setor dan lapor paling lambat 31 Juli 2026" }, jawaban: "B",
          petunjuk: ["Penerima adalah badan luar negeri", "PMK 81/2024: setor tanggal 15 bulan berikutnya; lapor 20 hari setelah masa berakhir", "Jawaban: B"],
          penjelasan: "BPNR dipakai untuk PPh 26 atas penghasilan WPLN selain imbalan pekerjaan/jasa/kegiatan orang pribadi (yang memakai BP26 di SPT Masa PPh 21/26), misalnya royalti dan bunga; PPh 26 Masa Juni disetor paling lambat 15 Juli 2026 dan dilaporkan dalam SPT Masa PPh Unifikasi paling lambat 20 Juli 2026." },
        { no: 6, pertanyaan: "Seandainya PT Nusantara Robotika menanggung PPh 26 atas bunga sehingga Rhein Kredit menerima bersih Rp540.000.000, berapa PPh 26 yang disetor (Rp)?", tipe: "angka", jawaban: 60000000, toleransi: 0,
          petunjuk: ["Bruto = jumlah bersih ÷ (1 − tarif P3B)", "Rp540.000.000 ÷ 0,9 = Rp600.000.000", "10% × Rp600.000.000 = Rp60.000.000"],
          penjelasan: "Gross-up memakai tarif P3B karena SKD sah; PPh dihitung atas bruto hasil gross-up." },
        { no: 7, pertanyaan: "Seandainya Form DGT Techno Patent baru terekam setelah pembayaran royalti, perlakuan yang tepat adalah ...", tipe: "pilihan",
          opsi: { A: "Tetap 10% karena Form DGT terekam sebelum batas penyampaian SPT Masa", B: "Dipotong 20% (Rp240.000.000); selisihnya dapat dimintakan kembali melalui permohonan pengembalian pajak yang seharusnya tidak terutang yang diajukan pemotong dengan surat kuasa Techno Patent", C: "Tidak dipotong sampai Form DGT terekam", D: "Dipotong 15% sebagai tarif tengah antara P3B dan domestik" }, jawaban: "B",
          petunjuk: ["PMK 112/2025 Pasal 10: tarif P3B hanya bila Form DGT sudah diterima dan memenuhi syarat saat pemotongan", "Tanpa SKD sah tarif PPh 26 adalah 20%", "Jawaban: B"],
          penjelasan: "Pemotongan 20% benar; selisih Rp120.000.000 di atas tarif P3B adalah kelebihan pemotongan terkait P3B (PMK 81/2024 Pasal 133 huruf b) yang dimintakan kembali oleh pemotong dengan permohonan pengembalian pajak yang seharusnya tidak terutang, dilampiri surat kuasa Techno Patent (Pasal 134 ayat (1) dan Pasal 135 ayat (2)); PMK 81/2024 menggantikan PMK 187/PMK.03/2015 sejak 1 Januari 2025." }
      ],
      kesimpulan: "Hanya royalti dan bunga yang dipotong PPh 26: Rp120 juta + Rp50 juta = Rp170 juta, dibuatkan BPNR, disetor paling lambat 15 Juli 2026, dan dilaporkan paling lambat 20 Juli 2026. PPN pemanfaatan royalti dan jasa luar negeri 12% × 11/12 × Rp1,5 miliar = Rp165 juta dipungut sendiri. Jasa tanpa BUT dan pembelian suku cadang tidak dipotong PPh 26.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-C10-05", judul: "Koreksi TNMM distributor: PPh, sanksi, secondary adjustment, keberatan, dan MAP", topik: "C10.5", estimasiMenit: 22,
      narasi: "PT Mentari Elektronik Indonesia adalah distributor rutin yang membeli seluruh barang dari induknya, Mentari Holdings Pte. Ltd. (Singapura; pemilik 100% saham; beneficial owner; Form DGT sah; batas tarif dividen P3B 10% untuk kepemilikan paling sedikit 25%). Tahun Pajak 2024: penjualan Rp400.000.000.000 dan laba operasi Rp4.000.000.000. Dalam pemeriksaan, DJP menerapkan TNMM dengan indikator margin laba operasi atas penjualan; rentang interkuartil pembanding 2,5%–4,5% dengan median 3,5%. SKPKB PPh Badan 2024 diterbitkan dan dikirim pada 10 September 2026 dan merupakan pemberitahuan pertama atas koreksi tersebut. Anggap tarif bunga Pasal 13 ayat (2) UU KUP yang berlaku pada awal penghitungan 1,80% per bulan. P3B Indonesia–Singapura mengatur MAP dengan batas 3 tahun sejak pemberitahuan pertama. Data pembanding tidak memberi dasar untuk menentukan titik yang paling tepat di dalam rentang.",
      data: [["Penjualan 2024", "Rp400.000.000.000"], ["Laba operasi 2024", "Rp4.000.000.000 (1,0%)"], ["Rentang interkuartil / median", "2,5%–4,5% / 3,5%"], ["SKPKB terbit dan dikirim", "10 September 2026"], ["Tarif bunga Ps. 13 ayat (2) (anggap)", "1,80% per bulan"], ["Tarif dividen P3B (kepemilikan ≥ 25%)", "10%"], ["Tarif PPh badan", "22%"]],
      langkah: [
        { no: 1, pertanyaan: "Ke titik mana margin laba operasi PT Mentari disesuaikan?", tipe: "pilihan",
          opsi: { A: "Kuartil bawah 2,5%", B: "Median 3,5%", C: "Kuartil atas 4,5%", D: "Tidak disesuaikan karena perusahaan masih memperoleh laba operasi" }, jawaban: "B",
          petunjuk: ["Bandingkan margin 1,0% dengan rentang 2,5%–4,5%", "Di luar rentang: titik paling tepat sesuai kesebandingan, atau median bila titik itu tidak dapat ditentukan (Pasal 12 ayat (7) PMK 172/2023)", "Jawaban: B (median)"],
          penjelasan: "Margin 1,0% berada di luar rentang interkuartil. Karena data tidak memberi dasar untuk menentukan titik yang paling tepat, margin disesuaikan ke median 3,5% (Pasal 12 ayat (7) huruf c PMK 172/2023)." },
        { no: 2, pertanyaan: "Berapa koreksi primer atas penghasilan 2024 (Rp)?", tipe: "angka", jawaban: 10000000000, toleransi: 0,
          petunjuk: ["Laba operasi wajar = 3,5% × Rp400.000.000.000 = Rp14.000.000.000", "Kurangi laba operasi aktual Rp4.000.000.000", "Rp10.000.000.000"],
          penjelasan: "Koreksi primer adalah selisih laba wajar pada median dengan laba aktual." },
        { no: 3, pertanyaan: "Berapa pokok PPh Badan kurang bayar atas koreksi tersebut (Rp)?", tipe: "angka", jawaban: 2200000000, toleransi: 0,
          petunjuk: ["Tarif Pasal 17 ayat (1) huruf b UU PPh", "22% × Rp10.000.000.000", "Rp2.200.000.000"],
          penjelasan: "Koreksi primer menambah PKP dan PPh terutang." },
        { no: 4, pertanyaan: "Berapa sanksi bunga Pasal 13 ayat (2) UU KUP dalam SKPKB (Rp)?", tipe: "angka", jawaban: 831600000, toleransi: 1000,
          petunjuk: ["Dihitung sejak akhir Tahun Pajak 2024 sampai SKPKB diterbitkan, paling lama 24 bulan", "1 Januari 2025 – 10 September 2026 = 20 bulan 10 hari → 21 bulan", "Rp2.200.000.000 × 1,80% × 21 = Rp831.600.000"],
          penjelasan: "Bagian bulan dihitung penuh; tarif adalah tarif bunga yang berlaku pada awal penghitungan (dalam kasus ini dianggap 1,80%)." },
        { no: 5, pertanyaan: "Bila Mentari Holdings tidak mengembalikan selisihnya dalam bentuk kas, berapa PPh 26 atas secondary adjustment yang diperlakukan sebagai dividen (Rp)?", tipe: "angka", jawaban: 1000000000, toleransi: 0,
          petunjuk: ["Selisih koreksi primer dianggap dividen kepada induk", "Kepemilikan 100% (≥ 25%) dan Form DGT sah → tarif P3B dividen 10%", "10% × Rp10.000.000.000 = Rp1.000.000.000"],
          penjelasan: "Pasal 37 PMK 172/2023: selisih koreksi primer diperlakukan sebagai dividen kepada pihak afiliasi, kecuali dikembalikan dalam kas/setara kas sebelum surat ketetapan pajak terbit (ayat (4) huruf a dan ayat (5)). SKPKB sudah terbit, sehingga PPh 26 tetap terutang." },
        { no: 6, pertanyaan: "Tenggat upaya penyelesaian yang tepat adalah ...", tipe: "pilihan",
          opsi: { A: "Keberatan paling lambat 10 Desember 2026 dan MAP paling lambat 10 September 2029; keduanya dapat berjalan bersamaan", B: "Keberatan paling lambat 10 Desember 2026; MAP baru boleh diajukan setelah Surat Keputusan Keberatan terbit", C: "MAP paling lambat 10 Desember 2026, sama dengan tenggat keberatan", D: "Keberatan paling lambat 10 Maret 2027 karena disertai MAP" }, jawaban: "A",
          petunjuk: ["Keberatan: 3 bulan sejak tanggal SKP dikirim (Pasal 25 ayat (3) UU KUP)", "MAP: sesuai P3B, 3 tahun sejak pemberitahuan pertama", "Jawaban: A"],
          penjelasan: "PMK 172/2023 membolehkan MAP berjalan bersamaan dengan keberatan; masing-masing tenggat tetap dijaga." },
        { no: 7, pertanyaan: "Melihat ke belakang: cara yang tepat agar secondary adjustment tidak dikenakan, dan kapan harus dilakukan, adalah ...", tipe: "pilihan",
          opsi: { A: "Mentari Holdings mengembalikan Rp10.000.000.000 kepada PT Mentari dalam bentuk kas/setara kas sebelum SKPKB terbit pada 10 September 2026", B: "PT Mentari memotong PPh 26 dengan tarif domestik 20%", C: "PT Mentari mengajukan APA unilateral untuk Tahun Pajak 2024", D: "Mentari Holdings mengembalikan Rp10.000.000.000 dalam bentuk kas setelah SKPKB terbit, asalkan sebelum keberatan diajukan" }, jawaban: "A",
          petunjuk: ["Secondary adjustment muncul karena kelebihan dana tertahan di induk", "Pasal 37 ayat (4) huruf a dan ayat (5) PMK 172/2023: pengembalian kas/setara kas sebesar selisih, dilakukan sebelum terbitnya surat ketetapan pajak", "Jawaban: A"],
          penjelasan: "Pengembalian kas sebesar selisih memulihkan posisi seolah-olah transaksi wajar, sehingga tidak ada dividen terselubung; syaratnya dilakukan sebelum surat ketetapan pajak terbit (Pasal 37 ayat (5) PMK 172/2023). Karena SKPKB sudah terbit 10 September 2026, jalan itu kini tertutup dan secondary adjustment pada langkah 5 tetap berlaku." }
      ],
      kesimpulan: "Margin 1,0% disesuaikan ke median 3,5%: koreksi primer Rp10 miliar, PPh Rp2,2 miliar, dan sanksi bunga Rp831,6 juta (21 bulan × 1,80%). Karena tidak ada pengembalian kas sebelum SKPKB terbit (Pasal 37 ayat (5) PMK 172/2023), secondary adjustment menimbulkan PPh 26 10% = Rp1 miliar. Keberatan paling lambat 10 Desember 2026 dan MAP paling lambat 10 September 2029 dapat ditempuh bersamaan.",
      kalkulatorRef: "sanksi-bunga"
    },
    {
      id: "K-C10-06", judul: "Kantor perwakilan menjadi BUT jasa, lalu PPh 26 royalti USD dengan kurs KMK dan selisih kurs", topik: "C10.2", estimasiMenit: 22,
      narasi: "Nordhavn Automation A/S (residen negara mitra P3B; beneficial owner; Form DGT sah terekam di Coretax sejak 5 Januari 2026) sejak 2023 memiliki kantor perwakilan di Jakarta dengan dua pegawai lokal yang hanya melakukan riset pasar, promosi, dan menjadi penghubung dengan kantor pusat; mereka tidak berwenang bernegosiasi atau menandatangani kontrak. P3B yang berlaku memuat Pasal 5 ayat (4) Model OECD (kegiatan persiapan atau penunjang bukan BUT), BUT jasa bila jasa untuk proyek yang sama atau berhubungan berlangsung lebih dari 120 hari dalam jangka waktu 12 bulan, batas tarif royalti 10%, dan batas tarif branch profit tax 10%. Pada 2026 Nordhavn menandatangani kontrak dengan PT Garuda Semen Nusantara untuk supervisi pemasangan dan commissioning sistem otomasi pabrik; insinyurnya hadir 2 Februari–31 Maret 2026 dan 4 Mei–7 Juli 2026. Berdasarkan perjanjian lisensi terpisah yang dikelola langsung oleh kantor pusat dan tidak berhubungan efektif dengan kegiatan di Indonesia, PT Garuda juga wajib membayar royalti perangkat lunak kendali proses USD250.000 yang jatuh tempo 30 Juni 2026 (dicatat sebagai beban dan utang pada tanggal itu) dan baru dibayar 14 Juli 2026. PT Garuda mencatat transaksi valas dengan kurs tengah BI tanggal transaksi.",
      data: [["Time test jasa P3B", "Lebih dari 120 hari dalam 12 bulan"], ["Kehadiran insinyur", "2 Februari–31 Maret 2026; 4 Mei–7 Juli 2026"], ["Royalti (tidak berhubungan efektif dengan BUT)", "USD250.000; jatuh tempo 30 Juni 2026; dibayar 14 Juli 2026"], ["Tarif royalti P3B / BPT P3B", "10% / 10%"], ["Kurs KMK 24–30 Juni 2026", "Rp16.420"], ["Kurs tengah BI 30 Juni 2026 (pembukuan)", "Rp16.455"], ["Kurs KMK 8–14 Juli 2026", "Rp16.510"], ["Kurs bank saat transfer 14 Juli 2026", "Rp16.540"]],
      langkah: [
        { no: 1, pertanyaan: "Bagaimana status kantor perwakilan Nordhavn sebelum kontrak supervisi 2026?", tipe: "pilihan",
          opsi: { A: "BUT, karena kantor perwakilan tercantum dalam Pasal 2 ayat (5) UU PPh", B: "Bukan BUT menurut P3B, karena kegiatannya semata persiapan atau penunjang", C: "BUT jasa, karena pegawainya bekerja di Indonesia lebih dari 120 hari setahun", D: "Bukan BUT, karena seluruh pegawainya warga negara Indonesia" }, jawaban: "B",
          petunjuk: ["Nordhavn berhak atas P3B (Form DGT sah), sehingga P3B diutamakan (Pasal 32A UU PPh)", "Riset pasar, promosi, dan penghubung adalah kegiatan persiapan atau penunjang menurut Pasal 5 ayat (4) P3B", "Jawaban: B"],
          penjelasan: "Daftar Pasal 2 ayat (5) UU PPh dibatasi P3B; kantor yang semata-mata untuk kegiatan persiapan atau penunjang tidak merupakan BUT, dan pegawainya tidak memberikan jasa kepada pelanggan." },
        { no: 2, pertanyaan: "Berapa jumlah hari jasa supervisi untuk proyek PT Garuda dalam jangka 12 bulan (hari)?", tipe: "angka", jawaban: 123, toleransi: 0,
          petunjuk: ["2 Februari–31 Maret 2026 = 27 + 31 = 58 hari", "4 Mei–7 Juli 2026 = 28 + 30 + 7 = 65 hari", "58 + 65 = 123 hari"],
          penjelasan: "Hari kehadiran untuk proyek yang sama dijumlahkan dalam jangka 12 bulan; kegiatan kantor perwakilan tidak ikut dihitung." },
        { no: 3, pertanyaan: "Apa akibat jasa supervisi tersebut bagi Nordhavn?", tipe: "pilihan",
          opsi: { A: "Timbul BUT jasa (123 > 120 hari dalam 12 bulan); laba atribusinya dikenai PPh badan 22% dan BPT 10% kecuali seluruh laba setelah pajak ditanamkan kembali", B: "Bukan BUT, karena dua kunjungan dipisahkan jeda lebih dari satu bulan sehingga penjumlahan hari terputus", C: "BUT jasa sejak hari ke-61, karena Pasal 2 ayat (5) UU PPh memakai batas 60 hari dalam 12 bulan", D: "Bukan BUT, karena kantor perwakilan yang sudah ada tidak berwenang menandatangani kontrak" }, jawaban: "A",
          petunjuk: ["Bandingkan 123 hari dengan time test P3B", "Jeda antarkunjungan tidak memutus penjumlahan dalam 12 bulan", "Jawaban: A"],
          penjelasan: "Time test P3B (lebih dari 120 hari) terlampaui, sehingga timbul BUT jasa yang laba atribusinya dipajaki 22% dan dikenai branch profit tax sesuai P3B (Pasal 26 ayat (4) UU PPh), kecuali seluruh laba setelah pajak ditanamkan kembali (Pasal 1 ayat (3) PMK 14/PMK.03/2011)." },
        { no: 4, pertanyaan: "Berapa PPh Pasal 26 atas royalti USD250.000 (Rp)?", tipe: "angka", jawaban: 410500000, toleransi: 0,
          petunjuk: ["Royalti tidak berhubungan efektif dengan BUT → tetap Pasal 12 P3B, tarif 10%", "Saat terutang 30 Juni 2026 (jatuh tempo lebih dahulu dari pembayaran) → kurs KMK 24–30 Juni Rp16.420", "10% × 250.000 × 16.420 = Rp410.500.000"],
          penjelasan: "DPP valuta asing dikonversi dengan kurs KMK yang berlaku pada saat PPh terutang, bukan kurs pembukuan atau kurs pada tanggal transfer." },
        { no: 5, pertanyaan: "Masa pajak, bukti potong, dan tenggat yang tepat untuk PPh 26 tersebut adalah ...", tipe: "pilihan",
          opsi: { A: "Masa Juni 2026; BPNR fasilitas SKD; setor paling lambat 15 Juli 2026; SPT Masa PPh Unifikasi paling lambat 20 Juli 2026", B: "Masa Juli 2026; BPNR fasilitas SKD; setor paling lambat 15 Agustus 2026; SPT Masa paling lambat 20 Agustus 2026", C: "Masa Juni 2026; BPPU; setor paling lambat 10 Juli 2026; SPT Masa paling lambat 20 Juli 2026", D: "Masa Juli 2026; tanpa bukti potong karena Form DGT sah; cukup dilaporkan dalam SPT Tahunan" }, jawaban: "A",
          petunjuk: ["Saat terutang 30 Juni 2026 menentukan masa pajak", "Setor tanggal 15 bulan berikutnya dan lapor 20 hari setelah masa berakhir (PMK 81/2024)", "Jawaban: A"],
          penjelasan: "PPh 26 masuk Masa Juni 2026 karena terutang saat jatuh tempo 30 Juni; bukti potong BPNR dengan fasilitas SKD; setor paling lambat 15 Juli 2026 dan SPT Masa PPh Unifikasi paling lambat 20 Juli 2026." },
        { no: 6, pertanyaan: "PT Garuda mencatat utang royalti neto USD225.000 dengan kurs tengah BI 30 Juni dan melunasinya 14 Juli 2026 dengan kurs bank. Berapa rugi selisih kurs atas pelunasan tersebut (Rp)?", tipe: "angka", jawaban: 19125000, toleransi: 0,
          petunjuk: ["Saldo utang = 225.000 × 16.455 = Rp3.702.375.000", "Pelunasan = 225.000 × 16.540 = Rp3.721.500.000", "Rugi = Rp3.721.500.000 − Rp3.702.375.000 = Rp19.125.000"],
          penjelasan: "Selisih kurs pelunasan dihitung atas utang neto USD225.000 (bagian USD25.000 dilunasi sebagai PPh 26 rupiah), dari kurs pencatatan ke kurs bank yang benar-benar dibayar." },
        { no: 7, pertanyaan: "Perlakuan fiskal yang tepat atas akibat kurs tersebut adalah ...", tipe: "pilihan",
          opsi: { A: "PPh 26 dihitung ulang dengan kurs KMK 8–14 Juli 2026 (Rp16.510) dan kekurangannya disetor", B: "Rugi selisih kurs Rp19.125.000 dapat dikurangkan; PPh 26 tetap Rp410.500.000", C: "Rugi selisih kurs tidak dapat dikurangkan karena berkaitan dengan royalti yang PPh 26-nya final", D: "Selisih kurs baru diakui dalam SPT Tahunan dengan kurs KMK akhir tahun" }, jawaban: "B",
          petunjuk: ["PP 94/2010 Pasal 9: selisih kurs mengikuti pembukuan yang taat asas", "PPh 26 rupiah sudah terkunci kurs KMK saat terutang", "Jawaban: B"],
          penjelasan: "Kerugian selisih kurs dapat dikurangkan (Pasal 6 ayat (1) huruf e UU PPh); sifat final PPh 26 melekat pada penghasilan Nordhavn, bukan pada biaya PT Garuda, dan PPh 26 tidak dikonversi ulang." }
      ],
      kesimpulan: "Kantor perwakilan yang semata persiapan atau penunjang bukan BUT menurut P3B, tetapi kehadiran insinyur 58 + 65 = 123 hari dalam 12 bulan melampaui time test 120 hari sehingga timbul BUT jasa (PPh badan 22% atas laba atribusi dan BPT 10%). Royalti yang tidak berhubungan efektif dengan BUT tetap PPh 26 10% dengan kurs KMK saat terutang (30 Juni): Rp410.500.000, Masa Juni, setor paling lambat 15 Juli 2026. Pelunasan utang neto USD225.000 menimbulkan rugi selisih kurs Rp19.125.000 yang dapat dikurangkan tanpa mengubah PPh 26.",
      kalkulatorRef: "kurs",
      kalkulatorInput: { nilaiValas: 250000, mataUang: "USD", jenisPajak: "pph26", kursKmk: 16420, kursTengah: 16455, kursAkhir: null, kursBayar: 16540, posisi: "utang", tarifP3b: 10 }
    }
  ],
  tips: [
    { teks: "Baca P3B berurutan: residen dan tie-breaker → pasal distributif → batas tarif → syarat SKD/Form DGT dan beneficial owner; bila P3B tidak membatasi, kembali ke tarif domestik.", tagSebab: "lupa-pasal" },
    { teks: "Untuk PPh 24 buat tabel per jenis penghasilan untuk tiap negara: penghasilan, pajak LN sesuai P3B, pajak LN dibayar, batas proporsional, lalu ambil yang terkecil; rugi luar negeri tidak masuk.", tagSebab: "salah-hitung" },
    { teks: "Pengecoh favorit adalah aturan lama: PER-25/PJ/2018 (Form DGT 7 bagian), PMK 213/2016 dan 22/2020, setor tanggal 10, bunga 2% flat, batas saldo Rp200 juta, dan PMK 70/PMK.03/2017 untuk data tahun 2026 (sudah diganti PMK 108/2025).", tagSebab: "angka-usang" },
    { teks: "Frasa “lebih dari” pada time test berarti tepat 90 atau 183 hari belum memenuhi; hitung hari kalender dengan teliti.", tagSebab: "salah-baca" },
    { teks: "Bedakan dasar PPh 26: bruto (20%), perkiraan neto (5%, 10%, 2%, 1%), dan laba setelah pajak BUT (branch profit tax).", tagSebab: "salah-klasifikasi" },
    { teks: "PPh 26 bersifat final bagi WPLN, tetapi PPN atas pemanfaatan JKP/BKP tidak berwujud dari LN tetap terutang dan tidak terpengaruh P3B.", tagSebab: "final-nonfinal" }
  ]
});
