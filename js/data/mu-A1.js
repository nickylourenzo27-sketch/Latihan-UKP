/* Modul A1 — PPh Orang Pribadi dan SPT PPh OP (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi resmi bergaya kasus praktik (docs/GAYA-SOAL.md), bukan soal asli ujian.
   Angka rujukan: docs/research/02a bagian B, C, F; docs/research/02b A.6. Tarif bunga KMK dalam soal pembetulan/keterlambatan diberikan sebagai data soal. */
UKP.register({
  meta: {
    kode: "A1", slug: "pph-op", nama: "PPh Orang Pribadi dan SPT PPh OP",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { A: 0.25, B: 0.12, C: 0.10 },
    statusPer: "2026-10-27",
    tujuan: "Peserta mampu menentukan status subjek pajak orang pribadi dan kewajiban subjektifnya, memilah penghasilan objek non-final, final, dan bukan objek, lalu menghitung penghasilan neto melalui pembukuan (koreksi fiskal, kompensasi kerugian) atau NPPN. Peserta menghitung PKP dengan zakat dan PTKP sesuai status keluarga (KK, HB, PH, MT), PPh terutang Pasal 17, kredit pajak dan PPh Pasal 29/28A, angsuran PPh Pasal 25 termasuk OP pengusaha tertentu, PPh final UMKM 0,5% pasca PP 20/2026, serta memetakan isi dan sanksi SPT Tahunan PPh OP di era Coretax.",
    dasarHukumUtama: [
      "UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 2, 2A, 3, 4, 6, 7, 8, 9, 14, 17, 24, 25, 28, 28A, 29",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) Pasal 3, 7, 8, 9",
      "PP 55/2022 s.t.d.d. PP 20/2026 (PPh final UMKM, natura); PMK 164/2023",
      "PMK 101/PMK.010/2016 (PTKP); PER-17/PJ/2015 (NPPN)",
      "PP 60/2010 jo. PMK 114/2025 (zakat/sumbangan keagamaan wajib)",
      "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 (angsuran PPh 25, OP pengusaha tertentu)",
      "PMK 192/PMK.03/2018 (kredit PPh Pasal 24); PMK 66/2023 (natura); PMK 18/PMK.03/2021",
      "PMK 81/2024 dan PER-11/PJ/2025 (Coretax, SPT Tahunan, bukti potong)"
    ],
    perubahanTerbaru: [
      { sebelum: "PPh final 0,5% PP 55/2022 dapat dipakai OP, koperasi, CV, firma, PT, dan BUMDes", sesudah: "Penerima baru hanya OP, PT perorangan yang didirikan 1 orang, dan koperasi; WP lama tetap sampai jangka waktu lamanya habis", dasar: "PP 20/2026 (perubahan Pasal 57 PP 55/2022)", berlakuSejak: "2026-04-22" },
      { sebelum: "Jasa sehubungan pekerjaan bebas (dokter, notaris, konsultan, influencer) boleh memakai PPh final 0,5%", sesudah: "Dikecualikan; penghasilan neto dihitung dengan pembukuan atau NPPN dan dikenai tarif Pasal 17", dasar: "PP 20/2026 (Pasal 56 PP 55/2022)", berlakuSejak: "2026-04-22" },
      { sebelum: "Jangka waktu PPh final bagi OP 7 tahun pajak; batas Rp4,8 miliar diuji dari peredaran bruto usaha saja", sesudah: "Jangka waktu bagi OP dan PT perorangan dihapus (koperasi tetap 4 tahun); batas diuji dari akumulasi usaha, pekerjaan bebas, dan penghasilan luar negeri", dasar: "PP 20/2026", berlakuSejak: "2026-04-22" },
      { sebelum: "Zakat/sumbangan keagamaan wajib sebagai pengurang penghasilan bruto diatur PMK 254/PMK.03/2010", sesudah: "Diatur PMK 114/2025; daftar lembaga penerima PER-22/PJ/2025", dasar: "PMK 114/2025", berlakuSejak: "2025-12-31" },
      { sebelum: "SPT Tahunan OP disampaikan melalui e-Filing/e-Form DJP Online dengan formulir 1770 SS, 1770 S, atau 1770", sesudah: "SPT Tahunan OP dibuat di Coretax dengan data bukti potong elektronik (BPA1, BP21, BPPU) menurut format PER-11/PJ/2025", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "PPh 21 bukan pegawai berkesinambungan dihitung kumulatif dengan memperhitungkan PTKP", sesudah: "Tarif Pasal 17 × 50% × bruto per masa tanpa kumulasi; PPh 21 ini menjadi kredit di SPT penerima (mis. jasa medis dokter tamu)", dasar: "PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01" }
    ],
    lembarRingkas: [
      { label: "Tarif Pasal 17 orang pribadi", nilai: "5% s.d. Rp60 jt · 15% s.d. Rp250 jt · 25% s.d. Rp500 jt · 30% s.d. Rp5 M · 35% di atas Rp5 M", dasar: "Ps. 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" },
      { label: "PPh kumulatif di batas lapisan", nilai: "Rp3 jt (PKP 60 jt) · Rp31,5 jt (250 jt) · Rp94 jt (500 jt) · Rp1,444 M (5 M)", dasar: "Ps. 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" },
      { label: "Pembulatan PKP", nilai: "ke bawah dalam ribuan rupiah penuh", dasar: "Ps. 17 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Urutan PKP orang pribadi", nilai: "neto − zakat/sumbangan keagamaan wajib − kompensasi rugi − PTKP", dasar: "Ps. 6 ayat (2), 7, 9 ayat (1) huruf g UU PPh", berlakuSejak: "2009-01-01" },
      { label: "PTKP Wajib Pajak sendiri", nilai: "Rp54.000.000 setahun", dasar: "Ps. 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
      { label: "Tambahan PTKP kawin · per tanggungan (maks. 3)", nilai: "Rp4.500.000 · Rp4.500.000", dasar: "Ps. 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
      { label: "Tambahan PTKP istri yang penghasilannya digabung", nilai: "Rp54.000.000 (K/I/0 Rp112,5 jt · K/I/3 Rp126 jt)", dasar: "Ps. 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
      { label: "Saat penentuan status PTKP", nilai: "keadaan pada awal tahun pajak (1 Januari)", dasar: "Ps. 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Suami-istri PH/MT · HB", nilai: "digabung lalu dibagi sebanding neto · dikenai terpisah penuh", dasar: "Ps. 8 ayat (2)–(3) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Uji subjek pajak dalam negeri orang pribadi", nilai: "lebih dari 183 hari dalam jangka waktu 12 bulan", dasar: "Ps. 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" },
      { label: "NPPN", nilai: "peredaran bruto < Rp4,8 M; beri tahu dalam 3 bulan pertama (31 Maret)", dasar: "Ps. 14 ayat (2) UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Kompensasi kerugian", nilai: "5 tahun berturut-turut mulai tahun berikutnya; rugi tertua dahulu", dasar: "Ps. 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Zakat/sumbangan keagamaan wajib", nilai: "ke BAZNAS/LAZ/lembaga resmi, bukti sah, tahun dibayar, tidak menimbulkan rugi", dasar: "Ps. 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" },
      { label: "PPh final UMKM orang pribadi", nilai: "0,5% × peredaran bruto; batas Rp4,8 M; Rp500 jt pertama setahun tidak kena", dasar: "PP 55/2022 s.t.d.d. PP 20/2026; Ps. 7 ayat (2a) UU PPh", berlakuSejak: "2026-04-22" },
      { label: "Penerima baru PPh final UMKM", nilai: "OP, PT perorangan 1 orang, koperasi; pekerjaan bebas dikecualikan; jangka waktu OP dihapus", dasar: "PP 20/2026", berlakuSejak: "2026-04-22" },
      { label: "Angsuran PPh 25 orang pribadi", nilai: "(PPh terutang tahun lalu − PPh 21/22/23/24) ÷ 12; Jan–Feb pakai angsuran Desember", dasar: "Ps. 25 ayat (1)–(2) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Angsuran OP pengusaha tertentu (pengecer)", nilai: "0,75% × peredaran bruto bulanan tiap tempat usaha", dasar: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 Ps. 7", berlakuSejak: "2009-01-01" },
      { label: "Batas setor PPh 25 dan PPh final UMKM", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Ps. 94", berlakuSejak: "2025-01-01" },
      { label: "Kredit pajak SPT orang pribadi", nilai: "PPh 21, 22, 23, 24, 25 — bukan PPh final atau sanksi", dasar: "Ps. 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Batas kredit PPh 24 (per negara)", nilai: "terkecil: pajak luar negeri dibayar atau (neto LN ÷ PKP) × PPh terutang", dasar: "Ps. 24 UU PPh; PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" },
      { label: "Lapor SPT Tahunan OP · perpanjangan", nilai: "31 Maret · paling lama 2 bulan dengan pemberitahuan", dasar: "Ps. 3 ayat (3) huruf b dan ayat (4) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Denda terlambat SPT Tahunan OP", nilai: "Rp100.000 (badan Rp1.000.000); tidak dikenakan bila WP OP meninggal dunia", dasar: "Ps. 7 ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "PPh Pasal 29", nilai: "dilunasi sebelum SPT Tahunan disampaikan", dasar: "Ps. 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Bunga telat bayar · pembetulan kurang bayar", nilai: "(acuan + 5%) ÷ 12 per bulan, maks. 24 bulan; Oktober 2026: 1,01%", dasar: "Ps. 8 ayat (2), 9 ayat (2a)–(2b) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Dividen dalam negeri diterima OP", nilai: "bebas bila diinvestasikan di Indonesia ≥ 3 tahun (paling lambat akhir bulan ke-3 setelah tahun pajak); jika tidak 10% final", dasar: "Ps. 4 ayat (3) huruf f, 17 ayat (2c) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" },
      { label: "Bunga deposito · bunga obligasi · hadiah undian", nilai: "20% · 10% · 25% (final)", dasar: "Ps. 4 ayat (2) UU PPh; PP 131/2000; PP 91/2021; PP 132/2000", berlakuSejak: "2021-08-30" },
      { label: "Pengalihan tanah/bangunan · saham di bursa", nilai: "2,5% × bruto (final, walau rugi) · 0,1% × nilai transaksi (final)", dasar: "PP 34/2016; PP 41/1994 s.t.d.d. PP 14/1997", berlakuSejak: "2016-09-07" },
      { label: "Pesangon dibayar sekaligus (final)", nilai: "0% s.d. Rp50 jt · 5% s.d. Rp100 jt · 15% s.d. Rp500 jt · 25% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16" },
      { label: "Penyusutan Kel. 1 · Kel. 2 · bangunan permanen", nilai: "25% · 12,5% · 5% per tahun (garis lurus), mulai bulan perolehan; tanah tidak", dasar: "Ps. 11 UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" },
      { label: "Natura bukan objek (batas)", nilai: "tempat tinggal non-komunal ≤ Rp2 jt/bulan · olahraga ≤ Rp1,5 jt/tahun · kendaraan: bruto ≤ Rp100 jt/bulan dan bukan pemegang saham", dasar: "PMK 66/2023", berlakuSejak: "2023-07-01" }
    ]
  },
  topik: [
    {
      id: "A1.1", slug: "subjek-pajak-op", judul: "Subjek pajak orang pribadi dan kewajiban subjektif",
      estimasiMenit: 10, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Subjek pajak dalam negeri (SPDN) orang pribadi: bertempat tinggal di Indonesia, berada di Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan, atau dalam suatu tahun pajak berada di Indonesia dan berniat bertempat tinggal di Indonesia (Pasal 2 ayat (3) huruf a UU PPh).",
        "Uji 183 hari memakai jangka waktu 12 bulan, tidak terikat tahun kalender dan tidak harus berturut-turut; beberapa kunjungan dalam 12 bulan dijumlahkan.",
        "Warisan yang belum terbagi sebagai satu kesatuan menggantikan yang berhak sebagai subjek pajak (Pasal 2 ayat (1) huruf a angka 2); kewajibannya dimulai saat timbulnya warisan dan berakhir saat warisan selesai dibagi.",
        "Kewajiban subjektif SPDN orang pribadi dimulai saat dilahirkan, berada, atau berniat bertempat tinggal di Indonesia dan berakhir saat meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya (Pasal 2A ayat (1)); bila mulai atau berakhir dalam tahun berjalan, bagian tahun pajak menggantikan tahun pajak.",
        "Subjek pajak luar negeri (SPLN): tidak bertempat tinggal di Indonesia dan berada tidak lebih dari 183 hari dalam 12 bulan; tanpa BUT dipotong PPh 26 (20% atau tarif P3B bila DGT diserahkan sebelum pembayaran) yang bersifat final dan tidak wajib SPT Tahunan.",
        "Bukan subjek pajak (Pasal 3): kantor perwakilan negara asing; pejabat diplomatik/konsulat serta orang yang diperbantukan dan tinggal bersama mereka, dengan syarat bukan WNI, tidak berpenghasilan lain di Indonesia, dan ada perlakuan timbal balik; organisasi internasional dan pejabatnya yang ditetapkan Menteri Keuangan.",
        "WNA yang menjadi SPDN dan memiliki keahlian tertentu dikenai PPh hanya atas penghasilan dari Indonesia selama 4 tahun pajak sejak menjadi SPDN (Pasal 4 ayat (1a) UU PPh hasil UU Cipta Kerja; PMK 18/PMK.03/2021)."
      ],
      poinKunci: [
        { label: "Uji kehadiran SPDN", nilai: "lebih dari 183 hari dalam 12 bulan", dasar: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kewajiban subjektif OP berakhir", nilai: "meninggal dunia atau meninggalkan Indonesia selama-lamanya", dasar: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Warisan belum terbagi", nilai: "subjek pengganti sampai warisan selesai dibagi", dasar: "Pasal 2 ayat (1) huruf a angka 2 dan Pasal 2A UU PPh", berlakuSejak: "2009-01-01" },
        { label: "WNA berkeahlian tertentu", nilai: "hanya penghasilan dari Indonesia, 4 tahun pajak", dasar: "Pasal 4 ayat (1a) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02" },
        { label: "PPh 26 SPLN tanpa BUT", nilai: "20% × bruto (atau P3B dengan DGT), final", dasar: "Pasal 26 ayat (1) dan (5) UU PPh; PMK 112/2025", berlakuSejak: "2025-12-31" }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (1), (3), dan (4) UU PPh", catatan: "subjek pajak dalam negeri dan luar negeri" },
        { pasal: "Pasal 2A UU PPh", catatan: "saat mulai dan berakhirnya kewajiban subjektif, bagian tahun pajak" },
        { pasal: "Pasal 3 UU PPh", catatan: "pihak yang dikecualikan dari subjek pajak" },
        { pasal: "Pasal 4 ayat (1a) UU PPh; PMK 18/PMK.03/2021", catatan: "WNA berkeahlian tertentu; WNI di luar negeri lebih dari 183 hari" }
      ],
      jebakan: [
        { teks: "Menghitung 183 hari per tahun kalender — yang benar dalam jangka waktu 12 bulan, tidak harus berturut-turut", tagSebab: "salah-baca" },
        { teks: "Menganggap laba usaha warisan bukan objek karena 'warisan' — yang dikecualikan adalah harta warisannya, bukan penghasilan yang dihasilkan warisan belum terbagi", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap semua pegawai kedutaan bukan subjek pajak — orang yang diperbantukan tetap subjek pajak bila WNI", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Mr. Anders (WN Swedia, tanpa niat menetap) berada di Indonesia 10 Januari–30 Juni 2026 dan setelah itu tidak kembali dalam 12 bulan berikutnya. Apakah ia SPDN?",
        jawaban: "Tidak — 172 hari, tidak lebih dari 183 hari; ia SPLN",
        langkah: [ ["10–31 Januari", "22 hari"], ["Februari s.d. Juni (28 + 31 + 30 + 31 + 30)", "150 hari"], ["Jumlah dalam 12 bulan", "172 hari"], ["Uji Pasal 2 ayat (3) huruf a", "172 ≤ 183 → SPLN"] ]
      },
      verifikasi: "◐",
      peringatan: "Fasilitas 4 tahun bagi WNA berkeahlian tertentu bersumber dari UU Cipta Kerja dan PMK 18/PMK.03/2021 yang teks resminya belum dibaca langsung dalam riset proyek; fakta subjek pajak lainnya adalah teks UU PPh yang stabil sejak UU 36/2008."
    },
    {
      id: "A1.2", slug: "objek-penghasilan", judul: "Objek PPh orang pribadi, bukan objek, dan penghasilan final",
      estimasiMenit: 12, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Penghasilan adalah setiap tambahan kemampuan ekonomis dari Indonesia maupun luar negeri yang dapat dipakai untuk konsumsi atau menambah kekayaan, dengan nama dan bentuk apa pun (Pasal 4 ayat (1)); SPDN dikenai PPh atas penghasilan seluruh dunia.",
        "Objek non-final OP yang sering diuji: imbalan pekerjaan termasuk natura/kenikmatan (sejak TP 2022), laba usaha, imbalan pekerjaan bebas, bunga dari pihak bukan bank, royalti, sewa harta selain tanah/bangunan (dipotong PPh 23 2%), keuntungan pengalihan harta selain yang final, dan penghasilan dari luar negeri.",
        "Penghasilan final Pasal 4 ayat (2): bunga deposito/tabungan 20%, bunga obligasi 10%, hadiah undian 25%, sewa tanah/bangunan 10%, pengalihan tanah/bangunan 2,5%, saham di bursa 0,1%, jasa konstruksi, PPh final UMKM 0,5% — dilaporkan di SPT, tidak digabung ke PKP, dan PPh-nya tidak dapat dikreditkan.",
        "Bukan objek Pasal 4 ayat (3) yang sering diuji: hibah dari keluarga sedarah garis lurus satu derajat tanpa hubungan usaha, warisan, pembayaran asuransi kesehatan/kecelakaan/jiwa/dwiguna/beasiswa dari perusahaan asuransi kepada OP, natura tertentu, dan bagian laba anggota CV/firma.",
        "Dividen dalam negeri yang diterima OP dalam negeri dikecualikan dari objek bila diinvestasikan di Indonesia paling sedikit 3 tahun pajak (investasi paling lambat akhir bulan ketiga setelah tahun pajak dividen diterima); bagian yang tidak diinvestasikan dikenai PPh final 10% (Pasal 4 ayat (3) huruf f; Pasal 17 ayat (2c); PMK 18/PMK.03/2021).",
        "Natura bagi penerima merupakan objek kecuali yang dikecualikan PMK 66/2023: makanan/minuman bagi seluruh pegawai di tempat kerja, bingkisan hari raya keagamaan, peralatan kerja, fasilitas olahraga non-golf ≤ Rp1,5 juta/tahun, mes komunal, tempat tinggal non-komunal ≤ Rp2 juta/bulan, dan kendaraan bagi pegawai bukan pemegang saham berpenghasilan bruto ≤ Rp100 juta/bulan."
      ],
      poinKunci: [
        { label: "Bunga deposito/tabungan", nilai: "20% final", dasar: "Pasal 4 ayat (2) huruf a UU PPh; PP 131/2000", berlakuSejak: "2009-01-01" },
        { label: "Sewa tanah/bangunan", nilai: "10% × bruto, final", dasar: "Pasal 4 ayat (2) huruf d UU PPh; PP 34/2017", berlakuSejak: "2009-01-01" },
        { label: "Dividen OP tidak diinvestasikan", nilai: "10% final, disetor sendiri", dasar: "Pasal 17 ayat (2c) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02" },
        { label: "Kendaraan kantor bukan objek", nilai: "pegawai bukan pemegang saham dan bruto ≤ Rp100 juta/bulan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" },
        { label: "Tempat tinggal non-komunal bukan objek", nilai: "≤ Rp2 juta/pegawai/bulan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) UU PPh", catatan: "pengertian dan jenis objek penghasilan" },
        { pasal: "Pasal 4 ayat (2) UU PPh", catatan: "penghasilan yang dapat dikenai PPh final" },
        { pasal: "Pasal 4 ayat (3) UU PPh s.t.d.t.d. UU 7/2021", catatan: "penghasilan yang dikecualikan, termasuk dividen dan natura tertentu" },
        { pasal: "PMK 18/PMK.03/2021; PMK 66/2023", catatan: "investasi dividen; natura yang dikecualikan" }
      ],
      jebakan: [
        { teks: "Menggabungkan bunga deposito, hadiah undian, atau sewa ruko ke PKP dan mengkreditkan PPh finalnya", tagSebab: "final-nonfinal" },
        { teks: "Menganggap hibah dari ayah kandung sebagai objek — bukan objek bila keluarga sedarah garis lurus satu derajat tanpa hubungan usaha", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap natura tetap bukan objek seperti sebelum UU HPP", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Ibu X (SPDN) menerima dividen PT dalam negeri Rp200.000.000 dan menginvestasikan Rp120.000.000 sesuai PMK 18/PMK.03/2021. Berapa PPh final yang disetor sendiri?",
        jawaban: "Rp8.000.000",
        langkah: [ ["Dividen", "Rp200.000.000"], ["Diinvestasikan (bukan objek)", "Rp120.000.000"], ["Tidak diinvestasikan", "Rp80.000.000"], ["10% × Rp80.000.000", "Rp8.000.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.3", slug: "biaya-koreksi-fiskal", judul: "Biaya boleh/tidak boleh dikurangkan, koreksi fiskal, dan natura",
      estimasiMenit: 15, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "WP OP yang menyelenggarakan pembukuan menghitung penghasilan neto dari penghasilan bruto dikurangi biaya untuk mendapatkan, menagih, dan memelihara penghasilan (Pasal 6 ayat (1)); laba komersial disesuaikan melalui koreksi fiskal positif dan negatif.",
        "Tidak boleh dikurangkan (Pasal 9 ayat (1)): premi asuransi jiwa/kesehatan yang dibayar OP untuk dirinya (huruf d), sumbangan/hibah kecuali zakat dan sumbangan tertentu (huruf g), PPh (huruf h), biaya pribadi WP dan tanggungannya termasuk 'gaji' pemilik atau prive (huruf i), serta sanksi administrasi dan pidana pajak (huruf k).",
        "Biaya untuk mendapatkan penghasilan yang dikenai PPh final atau bukan objek tidak dapat dikurangkan dari penghasilan yang dikenai tarif umum; penghasilan final yang ikut dalam laba komersial dikoreksi negatif.",
        "Sejak TP 2022 biaya natura/kenikmatan untuk pegawai dapat dikurangkan pemberi kerja sepanjang memenuhi biaya 3M (Pasal 6 ayat (1) huruf n UU PPh s.t.d.t.d. UU 7/2021); sebelumnya tidak boleh dibiayakan.",
        "PPh 21 pegawai yang ditanggung pemberi kerja tanpa diberikan sebagai tunjangan adalah PPh yang tidak boleh dibiayakan; bila diberikan sebagai tunjangan PPh, menjadi bagian biaya gaji.",
        "Penyusutan fiskal harta berwujud bukan bangunan: Kelompok 1 4 tahun (garis lurus 25%), Kelompok 2 8 tahun (12,5%), Kelompok 3 16 tahun (6,25%), Kelompok 4 20 tahun (5%); dimulai pada bulan pengeluaran dan dihitung proporsional bulan pada tahun pertama."
      ],
      poinKunci: [
        { label: "PPh dan sanksi pajak", nilai: "tidak boleh dibiayakan", dasar: "Pasal 9 ayat (1) huruf h dan k UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Natura untuk pegawai", nilai: "boleh dibiayakan pemberi kerja (biaya 3M)", dasar: "Pasal 6 ayat (1) huruf n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" },
        { label: "Kelompok 1 / Kelompok 2 (garis lurus)", nilai: "4 tahun 25% / 8 tahun 12,5%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" },
        { label: "Premi asuransi jiwa/kesehatan pribadi OP", nilai: "tidak boleh dibiayakan", dasar: "Pasal 9 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) UU PPh s.t.d.t.d. UU 7/2021", catatan: "biaya yang dapat dikurangkan, termasuk natura" },
        { pasal: "Pasal 9 ayat (1) UU PPh", catatan: "biaya yang tidak dapat dikurangkan" },
        { pasal: "Pasal 11 UU PPh; PMK 72/2023", catatan: "penyusutan harta berwujud" },
        { pasal: "PP 94/2010 Pasal 13", catatan: "biaya terkait penghasilan final/bukan objek" }
      ],
      jebakan: [
        { teks: "Mengoreksi positif natura untuk karyawan seperti aturan sebelum UU HPP", tagSebab: "angka-usang" },
        { teks: "Membiarkan 'gaji' pemilik usaha perseorangan sebagai biaya — itu prive", tagSebab: "salah-klasifikasi" },
        { teks: "Menyusutkan setahun penuh harta yang dibeli di tengah tahun", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Laptop (Kelompok 1) Rp24.000.000 dibeli dan dipakai Maret 2026, metode garis lurus. Berapa penyusutan fiskal 2026?",
        jawaban: "Rp5.000.000",
        langkah: [ ["Tarif Kelompok 1 garis lurus", "25%"], ["Penyusutan setahun", "Rp6.000.000"], ["Maret–Desember", "10 bulan"], ["Rp6.000.000 × 10/12", "Rp5.000.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.4", slug: "nppn", judul: "Norma Penghitungan Penghasilan Neto (NPPN)",
      estimasiMenit: 12, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "WP OP yang melakukan usaha atau pekerjaan bebas dengan peredaran bruto setahun kurang dari Rp4,8 miliar boleh menghitung neto dengan NPPN, dengan memberitahukan kepada DJP dalam 3 bulan pertama tahun pajak (Pasal 14 ayat (2) UU PPh); di Coretax pemberitahuan disampaikan paling lambat 31 Maret.",
        "Tidak memberitahukan tepat waktu berarti dianggap memilih menyelenggarakan pembukuan (Pasal 14 ayat (4)); WP yang wajib pembukuan tetapi tidak menyelenggarakannya dapat dihitung neto-nya oleh DJP dengan norma (Pasal 14 ayat (5)).",
        "Neto = persentase norma × peredaran bruto; persentase per jenis kegiatan dibedakan untuk 3 wilayah: 10 ibu kota provinsi (Medan, Palembang, Jakarta, Bandung, Semarang, Surabaya, Denpasar, Manado, Makassar, Pontianak), ibu kota provinsi lainnya, dan daerah lainnya (PER-17/PJ/2015). Di ujian, persentase lazim diberikan.",
        "Pengguna NPPN wajib menyelenggarakan pencatatan peredaran/penerimaan bruto dan penghasilan, bukan pembukuan lengkap (Pasal 28 ayat (2) UU KUP); biaya riil tidak dikurangkan lagi dan PPh yang dipotong pihak lain adalah kredit, bukan pengurang neto.",
        "Imbalan yang diterima dokter, arsitek, atau konsultan dari klien badan (dipotong PPh 21 bukan pegawai 5% × 50% × bruto per masa untuk lapisan pertama) tetap bagian peredaran bruto pekerjaan bebas.",
        "Sejak PP 20/2026 jasa pekerjaan bebas tidak dapat memakai PPh final 0,5%, sehingga NPPN atau pembukuan menjadi jalur penghitungan bagi profesi bebas."
      ],
      poinKunci: [
        { label: "Batas peredaran bruto NPPN", nilai: "kurang dari Rp4,8 miliar setahun", dasar: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tenggat pemberitahuan", nilai: "3 bulan pertama tahun pajak (31 Maret)", dasar: "Pasal 14 ayat (2) UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "Tidak memberitahukan", nilai: "dianggap memilih pembukuan", dasar: "Pasal 14 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kewajiban administrasi pengguna norma", nilai: "pencatatan", dasar: "Pasal 28 ayat (2) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 14 ayat (2)–(5) UU PPh", catatan: "syarat, pemberitahuan, dan akibat tidak memberitahukan" },
        { pasal: "PER-17/PJ/2015", catatan: "persentase norma per jenis kegiatan dan wilayah" },
        { pasal: "Pasal 28 ayat (2) UU KUP", catatan: "pencatatan bagi pengguna norma" },
        { pasal: "PP 20/2026", catatan: "pekerjaan bebas dikecualikan dari PPh final UMKM" }
      ],
      jebakan: [
        { teks: "Membaca batas NPPN sebagai 'paling banyak Rp4,8 miliar' — syaratnya kurang dari Rp4,8 miliar dan WP harus orang pribadi", tagSebab: "salah-baca" },
        { teks: "Mengurangkan PPh 21 yang dipotong atau biaya riil dari neto norma", tagSebab: "salah-hitung" },
        { teks: "Menganggap pemberitahuan NPPN cukup disampaikan bersama SPT Tahunan", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Arsitek OP di Semarang dengan peredaran bruto 2026 Rp1.200.000.000 memberitahukan NPPN pada Februari 2026; persentase norma (diberikan) 35%. Berapa neto?",
        jawaban: "Rp420.000.000",
        langkah: [ ["Syarat: < Rp4,8 miliar dan pemberitahuan ≤ 31 Maret", "terpenuhi"], ["Neto = 35% × Rp1.200.000.000", "Rp420.000.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.5", slug: "kompensasi-rugi", judul: "Kompensasi kerugian fiskal 5 tahun",
      estimasiMenit: 10, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "Kerugian fiskal dikompensasikan dengan penghasilan mulai tahun pajak berikutnya berturut-turut sampai dengan 5 tahun (Pasal 6 ayat (2) UU PPh); rugi 2021 dapat dipakai 2022–2026.",
        "Urutan pemakaian: kerugian tahun terlama lebih dahulu; sisa yang belum terpakai sampai tahun kelima hangus dan tidak dapat dipakai lagi.",
        "Kerugian fiskal hanya timbul dari penghitungan dengan pembukuan; neto menurut NPPN tidak pernah negatif.",
        "Kerugian usaha di luar negeri tidak digabung dengan penghasilan dalam negeri (PMK 192/PMK.03/2018), dan kerugian atas transaksi yang dikenai PPh final (mis. saham di bursa) tidak dikompensasikan.",
        "Dalam SPT OP kompensasi dikurangkan setelah zakat/sumbangan keagamaan wajib dan sebelum PTKP: PKP = neto − zakat − kompensasi kerugian − PTKP; kompensasi tidak boleh melebihi penghasilan neto tahun berjalan.",
        "Bila DJP menerbitkan ketetapan atas tahun rugi, jumlah rugi yang dapat dikompensasikan mengikuti ketetapan tersebut."
      ],
      poinKunci: [
        { label: "Jangka kompensasi", nilai: "5 tahun berturut-turut sejak tahun berikutnya", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Urutan pemakaian", nilai: "rugi tertua lebih dahulu", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Rugi luar negeri", nilai: "tidak digabung dengan penghasilan dalam negeri", dasar: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (2) UU PPh", catatan: "kompensasi kerugian 5 tahun" },
        { pasal: "PMK 192/PMK.03/2018", catatan: "kerugian di luar negeri" },
        { pasal: "Pasal 4 ayat (2) huruf c UU PPh", catatan: "transaksi saham di bursa dikenai PPh final" }
      ],
      jebakan: [
        { teks: "Menghitung 5 tahun termasuk tahun terjadinya rugi", tagSebab: "salah-hitung" },
        { teks: "Tetap mengompensasikan sisa rugi yang sudah lewat 5 tahun", tagSebab: "lupa-pasal" },
        { teks: "Memakai rugi terbaru lebih dahulu sehingga rugi lama hangus", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Rugi fiskal 2025 Rp80.000.000; neto 2026 Rp50.000.000. Berapa sisa rugi dan sampai kapan?",
        jawaban: "Rp30.000.000, sampai Tahun Pajak 2030",
        langkah: [ ["Kompensasi 2026", "Rp50.000.000"], ["Sisa", "Rp30.000.000"], ["Batas: 5 tahun sejak 2026", "2026–2030"] ]
      },
      verifikasi: "◐",
      peringatan: "Butir bahwa jumlah rugi mengikuti ketetapan DJP (SKP/keputusan keberatan) bersumber dari Penjelasan Pasal 6 ayat (2) dan praktik pemeriksaan yang teksnya belum dibaca langsung dalam riset proyek; butir lain adalah teks UU."
    },
    {
      id: "A1.6", slug: "ptkp-status-keluarga", judul: "PTKP dan status perpajakan keluarga (KK, HB, PH, MT)",
      estimasiMenit: 15, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "PTKP setahun: Rp54.000.000 WP sendiri; tambahan Rp4.500.000 WP kawin; tambahan Rp54.000.000 istri yang penghasilannya digabung; Rp4.500.000 per tanggungan, maksimal 3 (Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016).",
        "Tanggungan: anggota keluarga sedarah dan semenda dalam garis keturunan lurus (anak, orang tua, mertua, anak tiri) serta anak angkat yang menjadi tanggungan sepenuhnya; saudara kandung (garis ke samping) tidak termasuk.",
        "Status PTKP ditentukan menurut keadaan pada awal tahun pajak (Pasal 7 ayat (2)): menikah atau anak lahir di tengah tahun baru diperhitungkan tahun berikutnya.",
        "Penghasilan istri digabung dengan suami, kecuali penghasilan istri semata-mata dari satu pemberi kerja, telah dipotong PPh 21, dan pekerjaannya tidak terkait usaha/pekerjaan bebas suami atau anggota keluarga lain (Pasal 8 ayat (1)) — penghasilan itu final bagi keluarga.",
        "HB (hidup berpisah berdasarkan putusan hakim): dikenai pajak sendiri-sendiri. PH (perjanjian pisah harta tertulis) dan MT (istri memilih menjalankan hak dan kewajiban sendiri): neto digabung, PPh dihitung dengan PTKP K/I/n, lalu dibagi sebanding neto masing-masing (Pasal 8 ayat (2)–(3)).",
        "Penghasilan anak yang belum dewasa digabung dengan penghasilan orang tuanya (Pasal 8 ayat (4)); suami-istri PH/MT masing-masing menyampaikan SPT."
      ],
      poinKunci: [
        { label: "PTKP TK/0 · K/0 · K/3", nilai: "Rp54 jt · Rp58,5 jt · Rp72 jt", dasar: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
        { label: "PTKP K/I/0 · K/I/3", nilai: "Rp112,5 jt · Rp126 jt", dasar: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
        { label: "Tanggungan", nilai: "maksimal 3, garis lurus dan anak angkat", dasar: "Pasal 7 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Saat penentuan status", nilai: "awal tahun pajak (1 Januari)", dasar: "Pasal 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Pembagian PPh PH/MT", nilai: "sebanding penghasilan neto", dasar: "Pasal 8 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 7 UU PPh; PMK 101/PMK.010/2016", catatan: "besaran PTKP dan status awal tahun" },
        { pasal: "Pasal 8 ayat (1)–(4) UU PPh", catatan: "keluarga sebagai satu kesatuan ekonomis, HB, PH, MT, anak belum dewasa" }
      ],
      jebakan: [
        { teks: "Menghitung adik kandung sebagai tanggungan atau lebih dari 3 tanggungan", tagSebab: "lupa-pasal" },
        { teks: "Mengubah status PTKP karena menikah atau anak lahir di tengah tahun", tagSebab: "salah-baca" },
        { teks: "Menganggap MT dikenai pajak terpisah seperti HB, atau membagi PPh PH/MT sama rata", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Suami PH dengan neto Rp300.000.000 dan istri Rp200.000.000, satu anak. Berapa PPh bagian istri?",
        jawaban: "Rp25.900.000",
        langkah: [ ["PTKP K/I/1", "Rp117.000.000"], ["PKP gabungan", "Rp383.000.000"], ["PPh gabungan", "Rp64.750.000"], ["Bagian istri 200/500", "Rp25.900.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.7", slug: "tarif-pph-terutang", judul: "Tarif Pasal 17, pembulatan PKP, dan zakat sebagai pengurang",
      estimasiMenit: 14, jenisDominan: ["hitung"],
      ringkasan: [
        "PKP OP = penghasilan neto (dalam dan luar negeri, non-final) − zakat/sumbangan keagamaan wajib − kompensasi kerugian − PTKP; dibulatkan ke bawah dalam ribuan rupiah penuh (Pasal 17 ayat (4) UU PPh).",
        "Tarif Pasal 17 ayat (1) huruf a (UU HPP, sejak TP 2022): 5% s.d. Rp60 juta; 15% di atas Rp60 juta s.d. Rp250 juta; 25% di atas Rp250 juta s.d. Rp500 juta; 30% di atas Rp500 juta s.d. Rp5 miliar; 35% di atas Rp5 miliar.",
        "Jalan pintas: PPh atas PKP Rp60 juta = Rp3 juta; Rp250 juta = Rp31,5 juta; Rp500 juta = Rp94 juta; Rp5 miliar = Rp1,444 miliar.",
        "Zakat dapat dikurangkan bila dibayar kepada BAZNAS/LAZ atau lembaga keagamaan yang dibentuk/disahkan pemerintah, didukung bukti, dikurangkan pada tahun dibayar, dan tidak menimbulkan rugi (Pasal 9 ayat (1) huruf g; PP 60/2010; PMK 114/2025); infak sukarela dan zakat langsung kepada perorangan tidak dapat dikurangkan.",
        "Penghasilan yang telah dikenai PPh final tidak ikut dalam PKP dan tidak memengaruhi lapisan tarif.",
        "Sebelum UU HPP (TP 2021 ke bawah) lapisan pertama hanya s.d. Rp50 juta dan tarif tertinggi 30% — angka ini sering dipakai sebagai pengecoh."
      ],
      poinKunci: [
        { label: "Lapisan Pasal 17 OP", nilai: "5% ≤ 60 jt; 15% ≤ 250 jt; 25% ≤ 500 jt; 30% ≤ 5 M; 35% > 5 M", dasar: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" },
        { label: "Pembulatan PKP", nilai: "ke bawah dalam ribuan rupiah penuh", dasar: "Pasal 17 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Zakat sebagai pengurang", nilai: "ke BAZNAS/LAZ resmi, ada bukti, tidak menimbulkan rugi", dasar: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" },
        { label: "PPh kumulatif di batas lapisan", nilai: "Rp3 jt · Rp31,5 jt · Rp94 jt · Rp1,444 M", dasar: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 17 ayat (1) huruf a dan ayat (4) UU PPh", catatan: "tarif berlapis dan pembulatan PKP" },
        { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PP 60/2010; PMK 114/2025", catatan: "zakat/sumbangan keagamaan wajib" }
      ],
      jebakan: [
        { teks: "Memakai lapisan pertama Rp50 juta atau tarif tertinggi 30% (pra-UU HPP)", tagSebab: "angka-usang" },
        { teks: "Lupa membulatkan PKP ke bawah dalam ribuan", tagSebab: "salah-hitung" },
        { teks: "Memperlakukan zakat sebagai kredit pajak atau mengurangkan infak sukarela", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PKP setelah zakat dan PTKP Rp251.556.789. Berapa PPh terutang?",
        jawaban: "Rp31.889.000",
        langkah: [ ["PKP dibulatkan", "Rp251.556.000"], ["PPh s.d. Rp250 juta", "Rp31.500.000"], ["25% × Rp1.556.000", "Rp389.000"], ["Jumlah", "Rp31.889.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.8", slug: "kredit-pajak-pph29", judul: "Kredit pajak, PPh Pasal 29, dan lebih bayar",
      estimasiMenit: 14, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "Kredit pajak (Pasal 28 ayat (1) UU PPh): PPh 21 yang dipotong, PPh 22 yang dipungut, PPh 23 yang dipotong, PPh 24 (pajak luar negeri), dan PPh 25 yang disetor sendiri, dibuktikan dengan bukti potong/pungut (BPA1, BP21, BPPU) atau bukti setor.",
        "Tidak dapat dikreditkan: PPh final Pasal 4 ayat (2), sanksi administrasi, dan pajak tanpa bukti yang sah.",
        "PPh 24 per negara: kredit maksimum = terkecil antara pajak yang dibayar di luar negeri dan (penghasilan neto luar negeri negara itu ÷ PKP) × PPh terutang; kerugian di luar negeri tidak digabung (PMK 192/PMK.03/2018).",
        "PPh terutang lebih besar dari kredit → kurang bayar (PPh Pasal 29) yang dilunasi sebelum SPT disampaikan (Pasal 9 ayat (2) UU KUP); pembayaran setelah batas waktu SPT dikenai bunga Pasal 9 ayat (2b) dengan tarif KMK (acuan + 5%)/12 per bulan, bagian bulan dihitung penuh.",
        "PPh terutang lebih kecil dari kredit → lebih bayar (Pasal 28A UU PPh); dikembalikan setelah diperhitungkan dengan utang pajak berikut sanksinya.",
        "PPh 22 atas pembelian barang sangat mewah (5% dari harga jual untuk kendaraan/kapal pesiar/pesawat pribadi, 1% untuk rumah/apartemen tertentu) yang dipungut penjual badan dapat dikreditkan oleh pembeli OP."
      ],
      poinKunci: [
        { label: "Kredit pajak OP", nilai: "PPh 21, 22, 23, 24, 25", dasar: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Batas PPh 24", nilai: "min(pajak LN; neto LN/PKP × PPh terutang) per negara", dasar: "Pasal 24 UU PPh; PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" },
        { label: "Pelunasan PPh 29", nilai: "sebelum SPT disampaikan", dasar: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Bunga bayar setelah batas SPT", nilai: "(acuan + 5%)/12 per bulan, maks 24 bulan", dasar: "Pasal 9 ayat (2b) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 28, 28A, dan 29 UU PPh", catatan: "kredit pajak, lebih bayar, kurang bayar" },
        { pasal: "Pasal 24 UU PPh; PMK 192/PMK.03/2018", catatan: "kredit pajak luar negeri per negara" },
        { pasal: "Pasal 9 ayat (2) dan (2b) UU KUP", catatan: "pelunasan PPh 29 dan sanksi bunga" }
      ],
      jebakan: [
        { teks: "Mengkreditkan PPh final bunga deposito atau sewa", tagSebab: "final-nonfinal" },
        { teks: "Mengkreditkan seluruh pajak luar negeri tanpa batas per negara", tagSebab: "lupa-pasal" },
        { teks: "Lupa mengkreditkan PPh 21 bukan pegawai dari klien atau PPh 25 yang sudah disetor", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "PPh terutang Rp30.000.000; kredit PPh 21 Rp20.000.000, PPh 21 bukan pegawai Rp3.000.000, PPh 25 Rp12.000.000, PPh final sewa Rp2.500.000. Berapa kurang/lebih bayar?",
        jawaban: "Lebih bayar Rp5.000.000",
        langkah: [ ["Kredit sah 20 + 3 + 12 juta", "Rp35.000.000"], ["PPh final", "tidak dikreditkan"], ["30.000.000 − 35.000.000", "lebih bayar Rp5.000.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.9", slug: "pph25-oppt", judul: "Angsuran PPh Pasal 25 dan OP pengusaha tertentu (OPPT)",
      estimasiMenit: 12, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "Angsuran bulanan = (PPh terutang menurut SPT tahun lalu − PPh 21, 22, 23 yang dipotong/dipungut − PPh 24 yang boleh dikreditkan) ÷ 12 (Pasal 25 ayat (1) UU PPh); PPh 25 tahun lalu dan PPh final tidak dikurangkan.",
        "Hasil nol atau negatif berarti angsuran nihil. Untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan, angsuran sama dengan angsuran bulan terakhir tahun pajak sebelumnya (Pasal 25 ayat (2)).",
        "WP OP Pengusaha Tertentu (OPPT) adalah pedagang pengecer yang mempunyai satu atau lebih tempat usaha: angsuran 0,75% × peredaran bruto bulanan masing-masing tempat usaha, dan menjadi kredit pajak di SPT Tahunan (PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018).",
        "WP yang seluruh penghasilan usahanya dikenai PPh final 0,5% membayar PPh final, bukan angsuran OPPT 0,75%.",
        "PPh 25 disetor paling lambat tanggal 15 bulan berikutnya; bukti setor yang telah mendapat NTPN dianggap sebagai SPT Masa PPh 25 (PMK 81/2024)."
      ],
      poinKunci: [
        { label: "Rumus angsuran OP biasa", nilai: "(PPh terutang − PPh 21/22/23/24) ÷ 12", dasar: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Angsuran OPPT", nilai: "0,75% × peredaran bruto bulanan per tempat usaha", dasar: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 Pasal 7", berlakuSejak: "2009-01-01" },
        { label: "Batas setor PPh 25", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 25 ayat (1), (2), dan (7) UU PPh", catatan: "rumus angsuran, bulan sebelum SPT, WP tertentu" },
        { pasal: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018", catatan: "OP pengusaha tertentu 0,75%" },
        { pasal: "PMK 81/2024 Pasal 94", catatan: "batas setor tanggal 15" }
      ],
      jebakan: [
        { teks: "Ikut mengurangkan PPh 25 yang sudah disetor atau PPh final", tagSebab: "salah-klasifikasi" },
        { teks: "Menghitung OPPT dari total omzet semua toko sekaligus atau memakai 0,5% UMKM", tagSebab: "final-nonfinal" },
        { teks: "Memakai batas setor tanggal 10 (aturan pemotongan pra-2025)", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PPh terutang 2025 Rp54.600.000; PPh 21 Rp18.000.000, PPh 22 Rp2.400.000, PPh 23 Rp6.000.000, PPh 25 Rp24.000.000. Berapa angsuran 2026?",
        jawaban: "Rp2.350.000 per bulan",
        langkah: [ ["Kredit 21/22/23", "Rp26.400.000"], ["54.600.000 − 26.400.000", "Rp28.200.000"], ["÷ 12", "Rp2.350.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "A1.10", slug: "pph-final-umkm", judul: "PPh final UMKM 0,5% bagi orang pribadi (PP 55/2022 s.t.d.d. PP 20/2026)",
      estimasiMenit: 14, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Tarif 0,5% × peredaran bruto bulanan dan bersifat final; bagi WP OP, bagian peredaran bruto sampai Rp500 juta dalam satu tahun pajak tidak dikenai PPh (Pasal 7 ayat (2a) UU PPh) — dihitung kumulatif sejak Januari.",
        "Syarat peredaran bruto tidak melebihi Rp4,8 miliar dalam satu tahun pajak (diuji dari tahun sebelumnya); bila terlampaui dalam tahun berjalan, tarif 0,5% tetap dipakai sampai akhir tahun pajak itu dan tahun berikutnya memakai tarif umum.",
        "PP 20/2026 (berlaku 22 April 2026): penerima baru hanya OP, PT perorangan yang didirikan 1 orang, dan koperasi; jasa sehubungan pekerjaan bebas dikecualikan; jangka waktu bagi OP dan PT perorangan dihapus (koperasi tetap 4 tahun); WP lama (termasuk CV, firma, PT) tetap sampai jangka waktu lamanya habis.",
        "Uji batas Rp4,8 miliar memakai akumulasi penghasilan usaha dan jasa pekerjaan bebas (final maupun tidak) ditambah seluruh penghasilan dari luar negeri; ada ketentuan anti pemecahan usaha.",
        "Disetor sendiri paling lambat tanggal 15 bulan berikutnya atau dipotong/dipungut pembeli dengan Surat Keterangan; WP dengan peredaran bruto belum melebihi Rp500 juta menyerahkan surat pernyataan agar tidak dipotong (PMK 164/2023).",
        "WP dapat memilih tarif umum Pasal 17 dengan pemberitahuan; setelah memilih tidak dapat kembali ke 0,5%. Penghasilan final UMKM dilaporkan di SPT pada bagian penghasilan final dan tidak digabung ke PKP."
      ],
      poinKunci: [
        { label: "Tarif dan batas", nilai: "0,5%; peredaran bruto ≤ Rp4,8 miliar", dasar: "PP 55/2022 Pasal 56–57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" },
        { label: "Bagian tidak kena pajak OP", nilai: "Rp500 juta pertama setahun (kumulatif)", dasar: "Pasal 7 ayat (2a) UU PPh; PP 55/2022", berlakuSejak: "2022-01-01" },
        { label: "Subjek sejak PP 20/2026", nilai: "OP, PT perorangan 1 orang, koperasi", dasar: "PP 20/2026", berlakuSejak: "2026-04-22" },
        { label: "Pekerjaan bebas", nilai: "dikecualikan dari PPh final 0,5%", dasar: "PP 20/2026", berlakuSejak: "2026-04-22" },
        { label: "Batas setor", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "PP 55/2022 Pasal 56–63 s.t.d.d. PP 20/2026", catatan: "subjek, objek, tarif, batas, peralihan" },
        { pasal: "Pasal 7 ayat (2a) UU PPh s.t.d.t.d. UU 7/2021", catatan: "bagian peredaran bruto Rp500 juta tidak dikenai PPh" },
        { pasal: "PMK 164/2023", catatan: "tata cara pemotongan/pemungutan dan surat pernyataan" }
      ],
      jebakan: [
        { teks: "Mengenakan 0,5% sejak rupiah pertama (aturan PP 23/2018) atau menganggap Rp500 juta berlaku per bulan", tagSebab: "angka-usang" },
        { teks: "Membolehkan dokter, notaris, atau influencer memakai 0,5% setelah PP 20/2026", tagSebab: "salah-klasifikasi" },
        { teks: "Menguji batas Rp4,8 miliar hanya dari omzet usaha dalam negeri", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Omzet OP UMKM: Januari Rp210 juta, Februari Rp190 juta, Maret Rp260 juta. Berapa PPh final Maret?",
        jawaban: "Rp800.000",
        langkah: [ ["Kumulatif s.d. Februari", "Rp400.000.000 (nihil)"], ["Kumulatif s.d. Maret", "Rp660.000.000"], ["Kena pajak Maret", "Rp160.000.000"], ["0,5% × Rp160.000.000", "Rp800.000"] ]
      },
      verifikasi: "◐",
      peringatan: "Ketentuan 'tetap 0,5% sampai akhir tahun bila batas terlampaui' dan teknis PP 20/2026 (peralihan, perlakuan bagian Rp500 juta bila WP juga memiliki pekerjaan bebas) bersumber dari ulasan sekunder; nomor pasal pasca-PP 20/2026 dan aturan pelaksananya perlu dicek ke teks resmi."
    },
    {
      id: "A1.11", slug: "spt-1770", judul: "SPT Tahunan PPh OP: formulir, tenggat, sanksi, dan peta isian",
      estimasiMenit: 14, jenisDominan: ["prosedur", "baris-spt"],
      ringkasan: [
        "Batas penyampaian SPT Tahunan OP 3 bulan setelah akhir tahun pajak (31 Maret); terlambat dikenai denda Rp100.000 (Pasal 3 ayat (3) huruf b dan Pasal 7 ayat (1) UU KUP), apa pun status SPT-nya; kurang bayar dilunasi sebelum SPT disampaikan.",
        "Perpanjangan paling lama 2 bulan dengan pemberitahuan sebelum batas waktu, disertai penghitungan sementara dan bukti pelunasan kekurangan pajak (Pasal 3 ayat (4)–(5) UU KUP).",
        "Sebelum Coretax (SPT sampai Tahun Pajak 2024) formulir dibedakan: 1770 SS (pegawai, bruto ≤ Rp60 juta setahun, tanpa usaha/pekerjaan bebas), 1770 S (pegawai di atas Rp60 juta, lebih dari satu pemberi kerja, penghasilan lain atau final; wajib bagi suami-istri PH/MT), 1770 (usaha/pekerjaan bebas, termasuk WP PPh final UMKM). Di Coretax (SPT Tahun Pajak 2025 dan seterusnya) SPT disusun dari akun WP dengan lampiran yang diisi sesuai jenis penghasilan, sehingga yang diuji adalah bagian tempat tiap penghasilan dan kredit pajak dilaporkan.",
        "Di Coretax (PMK 81/2024; PER-11/PJ/2025) SPT Tahunan OP dibuat dari akun WP dengan data bukti potong elektronik terisi; isinya tetap dipetakan ke bagian yang sama: neto dari pekerjaan, dari usaha/pekerjaan bebas, penghasilan lain dan luar negeri, penghasilan final dan bukan objek, daftar kredit pajak, harta, utang, dan anggota keluarga.",
        "Penghasilan istri yang memenuhi syarat Pasal 8 ayat (1) dilaporkan suami pada lampiran penghasilan final, dan istri didaftarkan dalam daftar anggota keluarga agar tidak dianggap penghasilan suami.",
        "Harta dilaporkan sebesar harga perolehan; utang sebesar sisa pokok pada akhir tahun.",
        "Pembetulan boleh selama belum dilakukan pemeriksaan; pembetulan yang menyebabkan kurang bayar dikenai bunga Pasal 8 ayat (2) (acuan + 5%)/12 per bulan sejak berakhirnya batas waktu SPT sampai tanggal pembayaran."
      ],
      poinKunci: [
        { label: "Batas SPT Tahunan OP", nilai: "31 Maret (3 bulan)", dasar: "Pasal 3 ayat (3) huruf b UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Denda terlambat SPT Tahunan OP", nilai: "Rp100.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Perpanjangan", nilai: "paling lama 2 bulan, pemberitahuan sebelum batas waktu", dasar: "Pasal 3 ayat (4) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Suami-istri PH/MT", nilai: "masing-masing menyampaikan SPT; PPh gabungan dibagi sebanding neto; kredit mengikuti pemilik bukti potong", dasar: "Pasal 8 ayat (2)–(3) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Bunga pembetulan kurang bayar", nilai: "(acuan + 5%)/12 per bulan, maks 24 bulan", dasar: "Pasal 8 ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3 ayat (3) huruf b, (4), (5), dan (7) UU KUP", catatan: "batas waktu, perpanjangan, SPT dianggap tidak disampaikan" },
        { pasal: "Pasal 7 ayat (1) UU KUP", catatan: "denda keterlambatan SPT" },
        { pasal: "Pasal 8 ayat (1)–(2) UU KUP", catatan: "pembetulan dan bunga" },
        { pasal: "PMK 81/2024; PER-11/PJ/2025", catatan: "SPT Tahunan dan bukti potong di Coretax" }
      ],
      jebakan: [
        { teks: "Memakai denda Rp1.000.000 (SPT Tahunan badan) untuk OP", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap istri berstatus PH/MT tidak wajib SPT sendiri karena PPh 21-nya sudah dipotong, atau mengkreditkan PPh 21 istri di SPT suami", tagSebab: "lupa-pasal" },
        { teks: "Membulatkan masa bunga ke bawah; bagian bulan dihitung penuh", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "SPT Tahunan OP 2025 kurang bayar Rp8.000.000 disampaikan dan dilunasi 10 April 2026. Anggap tarif bunga uplift 5% sebesar 1,10% per bulan. Berapa total sanksi?",
        jawaban: "Rp188.000",
        langkah: [ ["Denda Pasal 7 ayat (1)", "Rp100.000"], ["31 Maret–10 April", "1 bulan"], ["Bunga 8.000.000 × 1,10% × 1", "Rp88.000"], ["Jumlah", "Rp188.000"] ]
      },
      verifikasi: "◐",
      peringatan: "Struktur lampiran SPT Tahunan OP di Coretax (PER-11/PJ/2025) dan petunjuk pengisiannya belum dibaca langsung; pernyataan bahwa pembedaan 1770 SS/1770 S/1770 tidak lagi dipakai di Coretax belum dicek ke teks resmi, dan pemetaan isi mengikuti formulir lama serta cuplikan sumber sekunder. Rincian perpanjangan Pasal 3 ayat (4)–(5) UU KUP bertanda ◐ dalam riset."
    }
  ],
  soal: [
    {
      id: "A1-001", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Mr. Lee Min-ho (warga negara Korea Selatan) ditugaskan kantor pusatnya mendampingi proyek di Batam. Ia berada di Indonesia pada 1 Oktober 2025–31 Januari 2026, kembali ke Seoul selama Februari 2026, lalu berada lagi di Indonesia pada 1 Maret–30 April 2026. Ia tidak berniat menetap dan keluarganya tetap tinggal di Seoul. Menurut UU PPh, status subjek pajak Mr. Lee adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Subjek pajak luar negeri, karena pada tahun kalender 2025 maupun 2026 masing-masing hanya berada 92 hari", B: "Subjek pajak luar negeri, karena tidak ada satu kunjungan yang lamanya lebih dari 183 hari berturut-turut", C: "Bukan subjek pajak Indonesia, karena gajinya dibayar oleh kantor pusat di luar negeri", D: "Subjek pajak dalam negeri, karena berada di Indonesia 184 hari dalam jangka waktu 12 bulan sejak 1 Oktober 2025" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 2 ayat (3) huruf a UU PPh menguji kehadiran lebih dari 183 hari dalam jangka waktu 12 bulan, tidak terikat tahun kalender dan tidak harus berturut-turut. 123 + 61 = 184 hari, sehingga Mr. Lee menjadi subjek pajak dalam negeri.",
        jejakHitung: [ ["1 Okt 2025–31 Jan 2026 (31 + 30 + 31 + 31)", "123 hari"], ["1 Mar–30 Apr 2026 (31 + 30)", "61 hari"], ["Jumlah dalam 12 bulan sejak 1 Okt 2025", "184 hari"], ["Uji Pasal 2 ayat (3) huruf a", "184 > 183 → SPDN"] ],
        mengapaSalah: { A: "Memotong hitungan per tahun kalender (92 + 92); undang-undang memakai jangka waktu 12 bulan", B: "Tidak ada syarat berturut-turut; kunjungan terpisah dalam 12 bulan dijumlahkan", C: "Tempat pembayaran gaji tidak menentukan status subjek; yang menentukan tempat tinggal dan lama kehadiran" },
        jebakan: "Angka 92 hari per tahun kalender sengaja dibuat sama agar peserta memotong hitungan per tahun."
      },
      dasarHukum: [ { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-002", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      kutipan: "Pasal 2A ayat (1) UU PPh: kewajiban pajak subjektif orang pribadi sebagai Subjek Pajak dalam negeri dimulai pada saat orang pribadi tersebut dilahirkan, berada, atau berniat untuk bertempat tinggal di Indonesia dan berakhir pada saat meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya. Pasal 2A UU PPh juga menentukan bahwa kewajiban pajak subjektif warisan yang belum terbagi dimulai pada saat timbulnya warisan dan berakhir pada saat warisan tersebut selesai dibagi.",
      stem: "Bapak Surya (pedagang bahan bangunan, menyelenggarakan pembukuan) meninggal dunia pada 14 Mei 2026. Toko tetap beroperasi, dikelola anak sulungnya atas nama warisan yang belum terbagi, sampai para ahli waris menandatangani akta pembagian warisan pada 10 Desember 2026. Berdasarkan kutipan tersebut, perlakuan PPh atas laba toko Tahun Pajak 2026 yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Seluruh laba 2026 dilaporkan para ahli waris secara proporsional karena kewajiban subjektif almarhum berakhir sejak awal tahun ia meninggal", B: "Laba 1 Januari–14 Mei 2026 dilaporkan dalam SPT almarhum untuk bagian tahun pajak; laba 15 Mei–10 Desember 2026 dikenai pajak atas nama warisan yang belum terbagi; laba sesudahnya menjadi penghasilan ahli waris", C: "Laba setelah 14 Mei 2026 bukan objek pajak karena merupakan bagian dari warisan yang dikecualikan Pasal 4 ayat (3)", D: "Kewajiban subjektif almarhum berlanjut sampai 31 Desember 2026 sehingga seluruh laba 2026 dilaporkan dalam satu SPT setahun penuh atas nama almarhum" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kewajiban subjektif Bapak Surya berakhir pada 14 Mei 2026 sehingga ia terutang untuk bagian tahun pajak. Sejak itu warisan yang belum terbagi menggantikan yang berhak sebagai subjek pajak sampai warisan selesai dibagi pada 10 Desember 2026; setelah itu penghasilan menjadi milik masing-masing ahli waris.",
        jejakHitung: [],
        mengapaSalah: { A: "Kewajiban almarhum berakhir pada tanggal meninggal, tidak berlaku surut ke awal tahun; ahli waris baru menanggung setelah warisan dibagi", C: "Yang dikecualikan Pasal 4 ayat (3) adalah harta warisan yang diterima ahli waris, bukan laba yang dihasilkan usaha warisan", D: "Bila kewajiban subjektif berakhir dalam tahun berjalan, bagian tahun pajak menggantikan tahun pajak" },
        jebakan: "Bedakan harta warisan (bukan objek) dengan penghasilan yang dihasilkan warisan belum terbagi (objek)."
      },
      dasarHukum: [ { pasal: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) huruf a angka 2 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) huruf b UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-003", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["B-2026-10"],
      stem: "Kedutaan Besar Negara X di Jakarta (Negara X memberikan perlakuan timbal balik) mempekerjakan beberapa orang pada 2026. Di antara pihak berikut, yang BUKAN termasuk pengecualian subjek pajak menurut Pasal 3 UU PPh sehingga tetap menjadi subjek pajak Indonesia adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Duta Besar Negara X (warga negara X) yang hanya menerima gaji dari pemerintahnya", B: "Staf diplomatik warga negara X yang tinggal bersama Duta Besar dan tidak memiliki penghasilan lain di Indonesia", C: "Kantor perwakilan Negara X itu sendiri", D: "Sopir warga negara Indonesia yang dipekerjakan dan tinggal bersama Duta Besar" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pengecualian bagi orang yang diperbantukan kepada pejabat diplomatik hanya berlaku bila mereka bukan WNI. Sopir WNI tetap SPDN; karena kantor perwakilan negara asing bukan pemotong PPh 21, ia menghitung dan melaporkan sendiri penghasilannya.",
        jejakHitung: [],
        mengapaSalah: { A: "Pejabat diplomatik WNA tanpa penghasilan lain di Indonesia dikecualikan, dengan syarat timbal balik", B: "Orang yang diperbantukan, tinggal bersama, bukan WNI, dan tanpa penghasilan lain dikecualikan", C: "Kantor perwakilan negara asing dikecualikan oleh Pasal 3 ayat (1) huruf a" },
        jebakan: "Syarat 'bukan warga negara Indonesia' sering terlewat karena peserta berfokus pada frasa 'tinggal bersama'."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (kantor perwakilan negara asing bukan pemotong PPh 21)", berlakuSejak: "2024-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-004", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Dr. Hana Sato (warga negara Jepang, ahli robotika) pindah ke Jakarta pada Maret 2024 dan sejak itu menjadi subjek pajak dalam negeri; keahliannya termasuk keahlian tertentu menurut PMK 18/PMK.03/2021 dan ia tidak memanfaatkan P3B. Pada Tahun Pajak 2026 ia menerima: (1) gaji dari PT Robotik Nusantara Rp960.000.000; (2) dividen dari perusahaan di Osaka Rp150.000.000; (3) royalti paten dari perusahaan di Jerman Rp200.000.000. Penghasilan yang dikenai PPh di Indonesia dalam SPT Tahunan 2026 Dr. Hana adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Gaji, dividen Jepang, dan royalti Jerman, karena SPDN selalu dikenai pajak atas penghasilan seluruh dunia", B: "Gaji dan royalti saja, karena dividen luar negeri selalu bukan objek bagi orang pribadi", C: "Hanya gaji dari PT Robotik Nusantara, karena Tahun Pajak 2026 masih dalam 4 tahun pajak sejak ia menjadi SPDN", D: "Tidak ada, karena WNA berkeahlian tertentu dibebaskan dari seluruh PPh selama 4 tahun pajak" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 4 ayat (1a) UU PPh (hasil UU Cipta Kerja) membatasi pemajakan WNA SPDN berkeahlian tertentu hanya atas penghasilan dari Indonesia selama 4 tahun pajak sejak menjadi SPDN: 2024, 2025, 2026, dan 2027. Dividen Jepang dan royalti Jerman tahun 2026 belum dipajaki di Indonesia.",
        jejakHitung: [ ["Menjadi SPDN", "Tahun Pajak 2024"], ["Periode fasilitas 4 tahun pajak", "2024–2027"], ["Tahun Pajak 2026", "masih dalam periode"], ["Objek PPh di Indonesia", "gaji dari PT Robotik Nusantara"] ],
        mengapaSalah: { A: "Mengabaikan pengecualian Pasal 4 ayat (1a) bagi WNA berkeahlian tertentu", B: "Dividen luar negeri pada dasarnya objek bagi SPDN; ia tidak dipajaki di sini karena fasilitas 4 tahun, bukan karena jenisnya", D: "Fasilitas membatasi sumber penghasilan yang dipajaki, bukan membebaskan seluruh PPh; gaji dari Indonesia tetap dipajaki" },
        jebakan: "Fasilitas ini membatasi cakupan penghasilan (hanya dari Indonesia), bukan pembebasan pajak."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1a) UU PPh s.t.d.t.d. UU 6/2023 (Cipta Kerja)", berlakuSejak: "2020-11-02" }, { pasal: "PMK 18/PMK.03/2021 (keahlian tertentu dan tata cara)", berlakuSejak: "2021-02-17" } ],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Fasilitas 4 tahun dan kriteria keahlian tertentu bersumber dari UU Cipta Kerja dan PMK 18/PMK.03/2021 yang teks resminya belum dibaca langsung dalam riset proyek; cek pula pengecualian bagi WNA yang memanfaatkan P3B."
    },
    {
      id: "A1-005", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Mr. Daniel Ho (warga negara Malaysia) bertempat tinggal di Kuala Lumpur dan tidak memiliki BUT di Indonesia. Sepanjang 2026 ia hanya 20 hari berada di Indonesia untuk memberikan pelatihan kepada karyawan PT Sinar Mandiri (Bandung) dengan imbalan Rp150.000.000. Ia tidak menyerahkan DGT/SKD apa pun sebelum pembayaran. Perlakuan PPh atas imbalan tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dipotong PPh Pasal 21 bukan pegawai sebesar tarif Pasal 17 × 50% × Rp150.000.000", B: "Dipotong PPh Pasal 26 sebesar Rp30.000.000 (20% × bruto) oleh PT Sinar Mandiri; Mr. Daniel tidak wajib menyampaikan SPT Tahunan", C: "Mr. Daniel wajib mendaftar NPWP dan melaporkan penghasilan netonya dalam SPT Tahunan OP dengan tarif Pasal 17", D: "Bukan objek pajak di Indonesia karena ia berada di Indonesia kurang dari 183 hari" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Mr. Daniel adalah SPLN (tinggal di Malaysia, hadir 20 hari). Imbalan jasa yang bersumber dari Indonesia dipotong PPh 26 20% dari bruto; tanpa DGT sebelum pembayaran tarif P3B tidak dapat dipakai. PPh 26 bagi SPLN tanpa BUT bersifat final sehingga tidak ada SPT Tahunan; PT Sinar Mandiri melaporkannya dalam SPT Masa PPh 21/26.",
        jejakHitung: [ ["Status", "SPLN (20 hari, tinggal di Malaysia)"], ["Tarif", "PPh 26 20% × bruto (DGT tidak diserahkan)"], ["PPh 26 = 20% × Rp150.000.000", "Rp30.000.000"] ],
        mengapaSalah: { A: "PPh 21 bukan pegawai berlaku bagi penerima dalam negeri; penerima SPLN dikenai PPh 26", C: "PPh 26 atas SPLN tanpa BUT bersifat final (Pasal 26 ayat (5)); tidak ada kewajiban SPT Tahunan", D: "Batas 183 hari menentukan status subjek dalam/luar negeri, bukan menghapus objek; penghasilan bersumber di Indonesia tetap dipajaki" },
        jebakan: "Frasa 'kurang dari 183 hari' menggoda peserta menganggap penghasilannya bebas pajak."
      },
      dasarHukum: [ { pasal: "Pasal 26 ayat (1) dan (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (DGT/SKD sebelum pembayaran)", berlakuSejak: "2025-12-31" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-006", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Tuan Ardi (K/1, pegawai tetap PT Cahaya) pada 2026 menerima: (1) gaji dengan penghasilan neto menurut BPA1 Rp186.000.000; (2) bunga deposito Rp12.000.000 yang telah dipotong PPh 20%; (3) hibah uang Rp100.000.000 dari ayah kandungnya (tanpa hubungan usaha); (4) hadiah undian bank Rp50.000.000 yang telah dipotong PPh 25%; (5) klaim asuransi kesehatan Rp20.000.000 dari perusahaan asuransi; (6) imbalan jasa konsultasi Rp40.000.000 dari PT Delta yang telah dipotong PPh 21 bukan pegawai. Penghasilan yang digabungkan dan dikenai tarif Pasal 17 dalam SPT 2026 Tuan Ardi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), (4), dan (6)", B: "(1), (3), dan (6)", C: "(1) dan (6)", D: "(1), (5), dan (6)" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bunga deposito dan hadiah undian dikenai PPh final Pasal 4 ayat (2) sehingga tidak digabung; hibah dari ayah kandung dan klaim asuransi kesehatan bukan objek Pasal 4 ayat (3). Yang digabung hanya gaji dan imbalan jasa konsultasi.",
        jejakHitung: [ ["(1) Gaji", "non-final → digabung"], ["(2) Bunga deposito", "final 20%"], ["(3) Hibah ayah kandung", "bukan objek"], ["(4) Hadiah undian", "final 25%"], ["(5) Klaim asuransi kesehatan", "bukan objek"], ["(6) Imbalan konsultasi", "non-final → digabung"] ],
        mengapaSalah: { A: "Bunga deposito dan hadiah undian dikenai PPh final; dilaporkan tetapi tidak digabung", B: "Hibah dari keluarga sedarah garis lurus satu derajat tanpa hubungan usaha bukan objek PPh", D: "Pembayaran klaim asuransi kesehatan dari perusahaan asuransi kepada OP bukan objek PPh" },
        jebakan: "Semua penerimaan dilaporkan di SPT, tetapi hanya yang non-final yang masuk PKP."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (3) huruf a angka 2 dan huruf e UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-007", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 4 ayat (3) huruf f UU PPh (s.t.d.t.d. UU 7/2021): dividen yang berasal dari dalam negeri yang diterima atau diperoleh Wajib Pajak orang pribadi dalam negeri dikecualikan dari objek pajak sepanjang diinvestasikan di wilayah Negara Kesatuan Republik Indonesia dalam jangka waktu tertentu. Pasal 17 ayat (2c): dividen yang dibagikan kepada Wajib Pajak orang pribadi dalam negeri dikenai tarif paling tinggi 10% dan bersifat final (tarif yang berlaku 10%).",
      stem: "Ibu Maya (SPDN) pada Juni 2026 menerima dividen tunai Rp400.000.000 dari PT Andalas Tbk (perusahaan dalam negeri). Sebelum akhir Maret 2027 ia menginvestasikan Rp250.000.000 dari dividen itu ke Surat Berharga Negara dan menahannya paling sedikit 3 tahun pajak sesuai PMK 18/PMK.03/2021; sisanya dipakai untuk renovasi rumah. Berdasarkan kutipan tersebut, PPh atas dividen yang wajib disetor sendiri oleh Ibu Maya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp15.000.000", B: "Rp40.000.000", C: "Rp22.500.000", D: "Rp0" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya bagian dividen yang tidak diinvestasikan (Rp150.000.000) dikenai PPh final 10%; bagian yang diinvestasikan sesuai syarat dikecualikan dari objek.",
        jejakHitung: [ ["Dividen diterima", "Rp400.000.000"], ["Diinvestasikan sesuai syarat (bukan objek)", "Rp250.000.000"], ["Tidak diinvestasikan", "Rp150.000.000"], ["PPh final 10% × Rp150.000.000", "Rp15.000.000"] ],
        mengapaSalah: { B: "Mengenakan 10% atas seluruh dividen, padahal bagian yang diinvestasikan dikecualikan", C: "Memakai tarif PPh 23 15% atas dividen; bagi OP dalam negeri tarifnya 10% final", D: "Menganggap seluruh dividen otomatis bebas; pengecualian hanya untuk bagian yang diinvestasikan" },
        jebakan: "Pengecualian dividen bagi OP bersyarat investasi; bagian yang tidak diinvestasikan tetap dikenai 10% final."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (3) huruf f UU PPh (UU 11/2020 jo. UU 7/2021)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 17 ayat (2c) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 18/PMK.03/2021 (tata cara investasi dividen)", berlakuSejak: "2021-02-17" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-008", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Tuan Dimas, manajer pemasaran PT Prima Rasa yang juga memiliki 2% saham perusahaan itu, menerima gaji bruto Rp30.000.000 per bulan. Sepanjang 2026 perusahaan memberinya: (1) makan siang di kantin kantor yang tersedia untuk seluruh pegawai; (2) laptop dan ponsel untuk bekerja; (3) parsel Idulfitri senilai Rp1.500.000; (4) keanggotaan klub golf Rp18.000.000 setahun; (5) mobil operasional yang juga dipakai untuk keperluan pribadi dengan biaya Rp60.000.000 setahun. Natura/kenikmatan yang merupakan objek PPh bagi Tuan Dimas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(4) dan (5)", B: "(4) saja", C: "(3), (4), dan (5)", D: "(2), (4), dan (5)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Golf dikecualikan dari fasilitas olahraga yang dibebaskan, sehingga objek. Kendaraan hanya dikecualikan bagi pegawai yang bukan pemegang saham dan berpenghasilan bruto ≤ Rp100 juta/bulan; Tuan Dimas pemegang saham sehingga objek. Makanan untuk seluruh pegawai, peralatan kerja, dan bingkisan hari raya keagamaan dikecualikan.",
        jejakHitung: [ ["(1) Makan di tempat kerja untuk seluruh pegawai", "dikecualikan"], ["(2) Laptop dan ponsel kerja", "dikecualikan"], ["(3) Parsel hari raya keagamaan", "dikecualikan"], ["(4) Klub golf", "objek"], ["(5) Mobil, pegawai pemegang saham", "objek"] ],
        mengapaSalah: { B: "Melewatkan syarat 'bukan pemegang saham' pada pengecualian kendaraan", C: "Bingkisan hari raya keagamaan termasuk natura yang dikecualikan PMK 66/2023", D: "Laptop dan ponsel untuk bekerja adalah peralatan kerja yang dikecualikan" },
        jebakan: "Dua syarat kendaraan (bukan pemegang saham dan bruto ≤ Rp100 juta/bulan) bersifat kumulatif; kepemilikan 2% saham cukup menggugurkan pengecualian."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PMK 66/2023 Pasal 4 dan Lampiran", berlakuSejak: "2023-07-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-009", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Ibu Laras (TK/0, pegawai swasta) pada 2026 memperoleh bunga deposito Rp30.000.000 yang telah dipotong PPh Rp6.000.000 oleh bank. Dalam SPT Tahunan 2026, perlakuan yang benar atas bunga dan PPh tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga digabung ke penghasilan neto dan PPh Rp6.000.000 dikreditkan sebagai pemotongan oleh pihak lain", B: "Bunga dilaporkan sebagai penghasilan yang dikenai PPh final, tidak digabung ke penghasilan kena pajak, dan PPh Rp6.000.000 tidak dikreditkan", C: "Bunga tidak perlu dilaporkan sama sekali karena PPh-nya sudah final", D: "Bunga digabung ke penghasilan neto, tetapi PPh Rp6.000.000 tidak dapat dikreditkan" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bunga deposito dikenai PPh final 20%: tetap dilaporkan di SPT pada bagian penghasilan final, tetapi tidak masuk PKP dan PPh-nya bukan kredit pajak.",
        jejakHitung: [ ["PPh final 20% × Rp30.000.000", "Rp6.000.000"], ["Masuk PKP?", "tidak"], ["Dikreditkan?", "tidak"] ],
        mengapaSalah: { A: "Mencampur rezim final ke penghitungan tarif umum", C: "Penghasilan final tetap wajib dilaporkan agar SPT benar, lengkap, dan jelas", D: "Menggabungkan penghasilan final ke PKP menimbulkan pemajakan ganda" },
        jebakan: "'Final' berarti tidak dihitung ulang dan tidak dikreditkan, bukan tidak dilaporkan."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (2) huruf a UU PPh (bunga deposito, PP 131/2000)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (1) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A1-010", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Pak Yusuf (K/2, pensiunan, menyelenggarakan pembukuan) pada 2026 menyewakan: (a) satu ruko kepada PT Arta dengan sewa Rp120.000.000 setahun yang dipotong PPh Rp12.000.000; (b) dua unit truk kepada CV Berkah dengan sewa Rp90.000.000 setahun yang dipotong PPh Rp1.800.000. Biaya penyusutan fiskal dan pemeliharaan truk Rp30.000.000, biaya pemeliharaan ruko Rp8.000.000. Penghasilan neto persewaan yang digabung dalam PKP dan kredit pajak yang dapat diperhitungkan dalam SPT 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Neto Rp172.000.000 (ruko Rp112.000.000 + truk Rp60.000.000); kredit pajak Rp13.800.000", B: "Neto Rp90.000.000 (bruto sewa truk); kredit pajak Rp1.800.000", C: "Neto Rp60.000.000 (sewa truk); kredit pajak Rp1.800.000", D: "Neto Rp60.000.000 (sewa truk); kredit pajak Rp13.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sewa ruko (tanah/bangunan) dikenai PPh final 10%: tidak digabung, biayanya tidak dapat dikurangkan, PPh-nya tidak dikreditkan. Sewa truk dipotong PPh 23 2% (tidak final): neto Rp90.000.000 − Rp30.000.000 = Rp60.000.000, dan PPh 23 Rp1.800.000 menjadi kredit.",
        jejakHitung: [ ["Sewa ruko: PPh final 10% × Rp120.000.000", "Rp12.000.000 (tidak digabung, tidak dikreditkan)"], ["Sewa truk bruto", "Rp90.000.000"], ["Biaya truk", "Rp30.000.000"], ["Neto sewa truk", "Rp60.000.000"], ["Kredit PPh 23 2% × Rp90.000.000", "Rp1.800.000"] ],
        mengapaSalah: { A: "Menggabungkan sewa ruko yang final dan mengkreditkan PPh finalnya", B: "Lupa mengurangkan biaya truk padahal Pak Yusuf menyelenggarakan pembukuan", D: "PPh final sewa ruko Rp12.000.000 tidak dapat dikreditkan" },
        jebakan: "Dua jenis sewa, dua rezim: tanah/bangunan final 10%, harta lain PPh 23 2% tidak final."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (2) huruf d UU PPh (sewa tanah/bangunan)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 23 ayat (1) huruf c UU PPh (sewa harta lain)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-011", topik: "A1.3", kasusId: "V-A1-03", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Data untuk soal ini dan dua soal berikutnya: Tuan Bima Prasetya (K/2, Surabaya) menjalankan usaha distribusi suku cadang dengan peredaran bruto 2026 Rp6,2 miliar dan menyelenggarakan pembukuan. Laba komersial 2026 Rp540.000.000. Dalam laba rugi tercatat sebagai beban: PPh Pasal 25 yang disetor Rp36.000.000; 'gaji' Tuan Bima sendiri Rp120.000.000; premi asuransi jiwa Tuan Bima Rp12.000.000; sumbangan panitia lomba 17 Agustus di kampung Rp8.000.000; sanksi bunga STP Rp3.000.000; makan siang dan seragam kerja 15 karyawan Rp45.000.000. Laba juga memuat bunga deposito Rp20.000.000 yang telah dipotong PPh final. Penghasilan neto fiskal 2026 dari usaha Tuan Bima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp744.000.000", B: "Rp719.000.000", C: "Rp579.000.000", D: "Rp699.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "final-nonfinal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Koreksi positif atas PPh, prive, premi asuransi pribadi, sumbangan, dan sanksi; koreksi negatif atas bunga deposito yang final. Natura untuk karyawan boleh dibiayakan sejak UU HPP.",
        jejakHitung: [ ["Laba komersial", "Rp540.000.000"], ["+ PPh 25 dibebankan (Ps. 9(1) h)", "Rp36.000.000"], ["+ 'Gaji' pemilik/prive (Ps. 9(1) i)", "Rp120.000.000"], ["+ Premi asuransi jiwa pribadi (Ps. 9(1) d)", "Rp12.000.000"], ["+ Sumbangan (Ps. 9(1) g)", "Rp8.000.000"], ["+ Sanksi STP (Ps. 9(1) k)", "Rp3.000.000"], ["− Bunga deposito (final)", "Rp20.000.000"], ["Natura karyawan", "tidak dikoreksi"], ["Neto fiskal", "Rp699.000.000"] ],
        mengapaSalah: { A: "Mengoreksi natura karyawan seperti aturan sebelum UU HPP", B: "Lupa mengeluarkan bunga deposito yang sudah dikenai PPh final", C: "Menganggap 'gaji' pemilik usaha perseorangan sebagai biaya; itu pengambilan pribadi (prive)" },
        jebakan: "Pada usaha perseorangan tidak ada 'gaji pemilik' — semua yang diambil pemilik adalah prive."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf d, g, h, i, dan k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf n UU PPh s.t.d.t.d. UU 7/2021 (natura)", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A1-012", topik: "A1.5", kasusId: "V-A1-03", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Bima Prasetya (K/2, pembukuan) memperoleh penghasilan neto fiskal usaha 2026 Rp699.000.000 dan membayar zakat penghasilan melalui BAZNAS Rp15.000.000. Riwayat fiskalnya: rugi 2020 Rp250.000.000; laba 2021 Rp40.000.000; rugi 2022 Rp120.000.000; laba 2023 Rp60.000.000; laba 2024 Rp50.000.000; laba 2025 Rp30.000.000. Seluruh laba 2021–2025 telah dipakai untuk mengompensasikan rugi 2020. Kompensasi kerugian yang boleh dikurangkan dalam SPT 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp190.000.000", B: "Rp120.000.000", C: "Rp370.000.000", D: "Rp0" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Rugi 2020 hanya dapat dikompensasikan pada 2021–2025; sisanya Rp70.000.000 hangus setelah 2025. Rugi 2022 Rp120.000.000 berlaku sampai 2027 dan seluruhnya dapat dikurangkan pada 2026 karena neto setelah zakat Rp684.000.000.",
        jejakHitung: [ ["Rugi 2020", "Rp250.000.000"], ["Dipakai 2021–2025 (40 + 60 + 50 + 30 juta)", "Rp180.000.000"], ["Sisa rugi 2020 (hangus akhir 2025)", "Rp70.000.000"], ["Rugi 2022 (berlaku 2023–2027)", "Rp120.000.000"], ["Neto setelah zakat 2026", "Rp684.000.000"], ["Kompensasi 2026", "Rp120.000.000"] ],
        mengapaSalah: { A: "Ikut mengompensasikan sisa rugi 2020 yang sudah lewat 5 tahun", C: "Menjumlahkan seluruh rugi tanpa memperhitungkan pemakaian dan daluwarsa", D: "WP OP yang menyelenggarakan pembukuan berhak mengompensasikan kerugian" },
        jebakan: "Sisa rugi lama yang tampak 'belum terpakai' belum tentu masih berlaku — cek batas 5 tahunnya."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-013", topik: "A1.7", kasusId: "V-A1-03", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Bima Prasetya (K/2, istri tidak berpenghasilan, dua anak kandung) dalam SPT 2026 memiliki penghasilan neto fiskal usaha Rp699.000.000, zakat melalui BAZNAS Rp15.000.000, dan kompensasi kerugian yang sah Rp120.000.000. Tidak ada penghasilan lain yang dikenai tarif umum. PPh terutang Tuan Bima Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp94.125.000", B: "Rp97.450.000", C: "Rp75.625.000", D: "Rp93.125.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "PKP = 699 − 15 − 120 − 67,5 juta = Rp496.500.000, masih di lapisan 25%.",
        jejakHitung: [ ["Neto − zakat − kompensasi", "Rp564.000.000"], ["PTKP K/2", "Rp67.500.000"], ["PKP", "Rp496.500.000"], ["5% × Rp60.000.000", "Rp3.000.000"], ["15% × Rp190.000.000", "Rp28.500.000"], ["25% × Rp246.500.000", "Rp61.625.000"], ["PPh terutang", "Rp93.125.000"] ],
        mengapaSalah: { A: "Memakai lapisan lama pra-UU HPP (5% hanya s.d. Rp50 juta)", B: "Lupa mengurangkan zakat sehingga PKP Rp511.500.000 masuk lapisan 30%", C: "Ikut mengompensasikan sisa rugi 2020 yang telah hangus (kompensasi Rp190.000.000)" },
        jebakan: "Zakat Rp15 juta menentukan apakah PKP berada di lapisan 25% atau 30%."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-014", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "dr. Kevin menjalankan klinik pratama dan menyelenggarakan pembukuan. Di antara pengeluaran klinik tahun 2026 berikut, yang BOLEH dikurangkan dari penghasilan bruto adalah ...",
      kataKualifikasi: ["boleh"],
      opsi: { A: "Bingkisan Natal dan makan siang harian untuk seluruh perawat klinik", B: "Premi asuransi kesehatan untuk dr. Kevin dan keluarganya", C: "Angsuran PPh Pasal 25 yang disetor setiap bulan", D: "Sanksi bunga atas keterlambatan penyetoran PPh Pasal 21 karyawan" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Natura/kenikmatan untuk pegawai dapat dibiayakan sejak UU HPP sepanjang biaya 3M. Premi asuransi pribadi, PPh, dan sanksi pajak tidak boleh dikurangkan (Pasal 9 ayat (1) huruf d, h, k).",
        jejakHitung: [],
        mengapaSalah: { B: "Premi asuransi kesehatan yang dibayar OP untuk dirinya dan keluarganya tidak boleh dikurangkan (Pasal 9 ayat (1) huruf d)", C: "PPh, termasuk angsuran PPh 25, bukan biaya; ia kredit pajak (Pasal 9 ayat (1) huruf h)", D: "Sanksi administrasi pajak tidak boleh dikurangkan (Pasal 9 ayat (1) huruf k)" },
        jebakan: "Peserta yang masih memakai aturan lama mengira natura tidak boleh dibiayakan sehingga ragu memilih bingkisan dan makan siang perawat."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) huruf n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf d, h, dan k UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A1-015", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Ibu Ratih (pengusaha katering, menyelenggarakan pembukuan, memilih metode garis lurus) membeli dua harta pada 2026: laptop Rp24.000.000 pada Maret 2026 (Kelompok 1) dan mobil boks Rp320.000.000 pada April 2026 (Kelompok 2); keduanya langsung dipakai. Secara komersial ia menyusutkan laptop selama 2 tahun dan mobil boks selama 5 tahun, juga mulai bulan perolehan. Koreksi fiskal atas penyusutan 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi positif Rp12.000.000", B: "Koreksi negatif Rp12.000.000", C: "Koreksi positif Rp38.000.000", D: "Koreksi positif Rp23.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyusutan fiskal dimulai pada bulan perolehan dan dihitung proporsional: laptop 25% × 10/12, mobil boks 12,5% × 9/12. Penyusutan komersial lebih besar sehingga selisihnya dikoreksi positif.",
        jejakHitung: [ ["Fiskal laptop: 24 jt × 25% × 10/12", "Rp5.000.000"], ["Fiskal mobil boks: 320 jt × 12,5% × 9/12", "Rp30.000.000"], ["Total fiskal", "Rp35.000.000"], ["Komersial laptop: 24 jt ÷ 2 × 10/12", "Rp10.000.000"], ["Komersial mobil boks: 320 jt ÷ 5 × 9/12", "Rp48.000.000"], ["Total komersial", "Rp58.000.000"], ["Koreksi = 58 jt − 35 jt", "positif Rp23.000.000"] ],
        mengapaSalah: { A: "Menghitung penyusutan fiskal setahun penuh (Rp6 juta + Rp40 juta) tanpa proporsi bulan", B: "Memakai tarif saldo menurun (50% dan 25%) padahal metode yang dipilih garis lurus", C: "Memasukkan mobil boks ke Kelompok 3 (6,25%)" },
        jebakan: "Bulan perolehan berbeda untuk tiap harta: Maret = 10 bulan, April = 9 bulan."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023 (kelompok harta berwujud)", berlakuSejak: "2023-07-17" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-016", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Ibu Sari (toko bangunan, peredaran bruto 2026 Rp7,1 miliar, menyelenggarakan pembukuan) juga menyewakan satu ruko kepada PT Mitra; sewanya telah dipotong PPh final 10%. Dalam buku toko tercatat PBB, biaya renovasi, dan penyusutan ruko yang disewakan itu sebesar Rp40.000.000 sebagai beban toko. Perlakuan fiskal yang tepat atas Rp40.000.000 tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak dikoreksi karena PBB, renovasi, dan penyusutan termasuk biaya 3M", B: "Dikurangkan dari bruto sewa sehingga PPh final 10% dihitung dari sewa neto", C: "Hanya PBB yang dikoreksi positif karena merupakan pajak; renovasi dan penyusutan tetap boleh dibiayakan", D: "Dikoreksi positif seluruhnya karena merupakan biaya untuk mendapatkan penghasilan yang dikenai PPh final" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Biaya yang berkaitan dengan penghasilan yang dikenai PPh final tidak dapat dikurangkan dari penghasilan yang dikenai tarif umum. PPh final sewa tanah/bangunan dihitung dari bruto, sehingga biaya ruko tidak berpengaruh pada PPh finalnya.",
        jejakHitung: [],
        mengapaSalah: { A: "Biaya 3M hanya dapat dikurangkan dari penghasilan yang dikenai tarif umum, bukan untuk penghasilan final", B: "PPh final sewa 10% dihitung dari jumlah bruto nilai sewa", C: "PBB atas harta usaha biasa memang boleh dibiayakan; di sini seluruh biaya ruko terkait penghasilan final sehingga seluruhnya dikoreksi" },
        jebakan: "PBB biasanya boleh dibiayakan; yang menentukan di sini adalah keterkaitannya dengan penghasilan final."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 13 (biaya untuk penghasilan final/bukan objek)" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-017", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Ny. Indah (apotek, peredaran bruto 2026 Rp5,4 miliar, menyelenggarakan pembukuan) melaporkan laba komersial 2026 Rp410.000.000. Beban yang tercatat antara lain: bunga KPR rumah tinggal pribadi Rp24.000.000; PPh Pasal 21 karyawan yang ditanggung apotek tanpa diberikan sebagai tunjangan Rp9.000.000; PBB gedung apotek Rp6.000.000; biaya pelatihan apoteker pendamping Rp5.000.000; makan siang seluruh karyawan Rp30.000.000. Laba juga memuat bunga deposito Rp8.000.000 (PPh final). Penghasilan neto fiskal 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp435.000.000", B: "Rp465.000.000", C: "Rp426.000.000", D: "Rp441.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Koreksi positif atas bunga KPR rumah pribadi (biaya pribadi) dan PPh 21 yang ditanggung tanpa tunjangan (PPh tidak boleh dibiayakan); koreksi negatif atas bunga deposito final. PBB usaha, pelatihan, dan natura makan karyawan boleh dibiayakan.",
        jejakHitung: [ ["Laba komersial", "Rp410.000.000"], ["+ Bunga KPR rumah pribadi", "Rp24.000.000"], ["+ PPh 21 ditanggung (bukan tunjangan)", "Rp9.000.000"], ["− Bunga deposito (final)", "Rp8.000.000"], ["Neto fiskal", "Rp435.000.000"] ],
        mengapaSalah: { B: "Mengoreksi natura makan karyawan seperti sebelum UU HPP", C: "Menganggap PPh 21 yang ditanggung sebagai biaya gaji; tanpa tunjangan ia tetap PPh yang tidak boleh dibiayakan", D: "Mengoreksi PBB gedung usaha; PBB adalah pajak selain PPh yang boleh dibiayakan" },
        jebakan: "PPh 21 'ditanggung' dan 'tunjangan PPh' berbeda perlakuannya bagi pemberi kerja."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf h dan i UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a dan n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Kunci memperlakukan PPh 21 yang ditanggung pemberi kerja (bukan tunjangan PPh) sebagai PPh yang tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h) dan bukan natura/kenikmatan yang boleh dibiayakan sejak UU HPP; penegasan ini belum dicek ke teks PMK 66/2023 dan PMK 168/2023 dalam riset proyek. Bila ternyata diperlakukan sebagai kenikmatan, neto fiskal menjadi Rp426.000.000 (opsi C)."
    },
    {
      id: "A1-018", topik: "A1.4", kasusId: "V-A1-01", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Data untuk soal ini dan tiga soal berikutnya: dr. Rizal Kurniawan (K/2) adalah dokter spesialis anak di Bandung. Pada 2026 ia (1) pegawai tetap RS Harapan dengan penghasilan neto menurut BPA1 Rp206.400.000 dan PPh 21 dipotong Rp14.835.000; (2) dokter tamu (bukan pegawai) di RS Sehat dengan jasa medis Rp20.000.000 per bulan, dipotong PPh 21 Rp500.000 per bulan; (3) praktik pribadi dengan penerimaan bruto Rp290.000.000. Ia menyampaikan pemberitahuan penggunaan NPPN pada 20 Februari 2026; persentase norma untuk kegiatannya (diberikan) 50%. Penghasilan neto dari pekerjaan bebas dr. Rizal tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp145.000.000", B: "Rp265.000.000", C: "Rp259.000.000", D: "Rp15.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Jasa medis sebagai dokter tamu adalah peredaran bruto pekerjaan bebas. Peredaran bruto Rp240.000.000 + Rp290.000.000 = Rp530.000.000 (kurang dari Rp4,8 miliar, pemberitahuan tepat waktu), neto = 50% × Rp530.000.000.",
        jejakHitung: [ ["Jasa medis RS Sehat (12 × Rp20.000.000)", "Rp240.000.000"], ["Praktik pribadi", "Rp290.000.000"], ["Peredaran bruto pekerjaan bebas", "Rp530.000.000"], ["Neto = 50% × Rp530.000.000", "Rp265.000.000"] ],
        mengapaSalah: { A: "Hanya memakai praktik pribadi; jasa medis dokter tamu juga penghasilan pekerjaan bebas", C: "Mengurangkan PPh 21 yang dipotong dari neto; PPh adalah kredit, bukan pengurang penghasilan", D: "Memakai pola PPh final UMKM (bagian Rp500 juta tidak kena); pekerjaan bebas dikecualikan sejak PP 20/2026" },
        jebakan: "Gaji RS Harapan (pegawai tetap) bukan peredaran bruto pekerjaan bebas, tetapi jasa medis dokter tamu termasuk."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-17/PJ/2015 (persentase norma)" }, { pasal: "PMK 168/2023 (PPh 21 bukan pegawai)", berlakuSejak: "2024-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-019", topik: "A1.7", kasusId: "V-A1-01", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data dr. Rizal Kurniawan (K/2, istri tidak berpenghasilan, dua anak): penghasilan neto 2026 dari pekerjaan (BPA1 RS Harapan) Rp206.400.000; penghasilan neto pekerjaan bebas dengan NPPN Rp265.000.000 (peredaran bruto Rp530.000.000); zakat melalui BAZNAS Rp6.000.000; bunga deposito Rp9.000.000 yang telah dipotong PPh final. PPh terutang dr. Rizal Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp69.475.000", B: "Rp68.475.000", C: "Rp69.975.000", D: "Rp14.085.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "PKP = 206.400.000 + 265.000.000 − 6.000.000 − 67.500.000 = Rp397.900.000; bunga deposito final tidak ikut.",
        jejakHitung: [ ["Neto pekerjaan + pekerjaan bebas", "Rp471.400.000"], ["− Zakat BAZNAS", "Rp6.000.000"], ["− PTKP K/2", "Rp67.500.000"], ["PKP", "Rp397.900.000"], ["5% × 60 jt + 15% × 190 jt", "Rp31.500.000"], ["25% × Rp147.900.000", "Rp36.975.000"], ["PPh terutang", "Rp68.475.000"] ],
        mengapaSalah: { A: "Memakai lapisan pertama Rp50 juta (tarif lama pra-UU HPP)", C: "Lupa mengurangkan zakat (PKP Rp403.900.000)", D: "Memakai PPh final 0,5% × (Rp530 juta − Rp500 juta) untuk praktik dokter; pekerjaan bebas tidak boleh memakai PPh final sejak PP 20/2026" },
        jebakan: "Peredaran bruto dokter yang sedikit di atas Rp500 juta memancing jalur hitung PPh final UMKM yang sudah tidak berlaku bagi pekerjaan bebas."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" }, { pasal: "PP 20/2026 (pekerjaan bebas dikecualikan)", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-020", topik: "A1.8", kasusId: "V-A1-01", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data dr. Rizal Kurniawan (K/2): PPh terutang 2026 Rp68.475.000. Kredit dan pembayaran 2026: PPh 21 RS Harapan (BPA1) Rp14.835.000; PPh 21 jasa medis RS Sehat Rp500.000 × 12 bulan; PPh 25 yang disetor Rp3.500.000 × 12 bulan; PPh final bunga deposito Rp1.800.000. PPh Pasal 29 yang harus dilunasi sebelum SPT 2026 disampaikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.640.000", B: "Rp3.840.000", C: "Rp11.640.000", D: "Rp47.640.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit yang sah: PPh 21 dari kedua rumah sakit dan PPh 25 yang disetor; PPh final bunga deposito tidak dikreditkan.",
        jejakHitung: [ ["PPh terutang", "Rp68.475.000"], ["− PPh 21 RS Harapan", "Rp14.835.000"], ["− PPh 21 jasa medis (12 × Rp500.000)", "Rp6.000.000"], ["− PPh 25 (12 × Rp3.500.000)", "Rp42.000.000"], ["PPh 29 kurang bayar", "Rp5.640.000"] ],
        mengapaSalah: { B: "Ikut mengkreditkan PPh final bunga deposito", C: "Lupa mengkreditkan PPh 21 jasa medis dari RS Sehat", D: "Lupa mengkreditkan PPh 25 yang telah disetor sendiri" },
        jebakan: "Bukti potong BP21 dari rumah sakit tempat praktik sebagai dokter tamu sering terlewat dikreditkan."
      },
      dasarHukum: [ { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-021", topik: "A1.9", kasusId: "V-A1-01", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Lanjutan data dr. Rizal Kurniawan: menurut SPT Tahunan 2026, PPh terutang Rp68.475.000; PPh 21 yang dipotong RS Harapan Rp14.835.000 dan RS Sehat Rp6.000.000; PPh 25 yang disetor selama 2026 Rp42.000.000; PPh final bunga deposito Rp1.800.000. Ia tidak mempunyai penghasilan tidak teratur. Angsuran PPh Pasal 25 per bulan untuk 2027 (setelah SPT 2026 disampaikan) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp470.000", B: "Rp5.706.250", C: "Rp3.970.000", D: "Rp3.820.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pasal 25 ayat (1): PPh terutang dikurangi PPh 21/22/23 dan PPh 24, dibagi 12. PPh 25 tahun berjalan dan PPh final tidak dikurangkan.",
        jejakHitung: [ ["PPh terutang 2026", "Rp68.475.000"], ["− PPh 21 (14.835.000 + 6.000.000)", "Rp20.835.000"], ["Dasar angsuran", "Rp47.640.000"], ["÷ 12", "Rp3.970.000"] ],
        mengapaSalah: { A: "Ikut mengurangkan PPh 25 yang sudah dibayar (hasilnya sama dengan PPh 29 ÷ 12)", B: "Membagi PPh terutang langsung dengan 12 tanpa mengurangkan PPh 21", D: "Ikut mengurangkan PPh final bunga deposito" },
        jebakan: "Dasar angsuran berbeda dengan PPh 29: angsuran tidak mengurangkan PPh 25."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-022", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Ibu Wulan (desainer interior di Jakarta) telah memberitahukan penggunaan NPPN untuk Tahun Pajak 2026 pada Januari 2026; peredaran bruto 2026 diperkirakan Rp2,3 miliar. Konsultannya menjelaskan beberapa konsekuensi. Pernyataan yang benar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ia wajib menyelenggarakan pencatatan peredaran atau penerimaan bruto dan penghasilannya, dan neto dihitung dari persentase norma tanpa mengurangkan biaya riil", B: "Ia tetap wajib menyelenggarakan pembukuan lengkap berupa neraca dan laba rugi, lalu memilih hasil yang lebih kecil antara pembukuan dan norma", C: "Selain persentase norma, ia boleh mengurangkan biaya sewa studio dan gaji asisten yang benar-benar dikeluarkan", D: "Pemberitahuan itu berlaku seterusnya untuk tahun-tahun berikutnya meskipun peredaran brutonya kelak melebihi Rp4,8 miliar" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pengguna NPPN cukup menyelenggarakan pencatatan (Pasal 28 ayat (2) UU KUP). Norma sudah memperhitungkan biaya sehingga biaya riil tidak dikurangkan lagi; hak memakai norma bergantung pada peredaran bruto kurang dari Rp4,8 miliar.",
        jejakHitung: [],
        mengapaSalah: { B: "Tidak ada pilihan 'hasil yang lebih kecil'; pengguna norma cukup pencatatan", C: "Biaya riil sudah tercakup dalam persentase norma", D: "Hak NPPN bersyarat peredaran bruto kurang dari Rp4,8 miliar dan pemberitahuan dalam 3 bulan pertama tahun pajak" },
        jebakan: "Opsi yang mengurangkan biaya riil terdengar wajar secara akuntansi, tetapi norma adalah pengganti biaya, bukan tambahan."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) dan (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 28 ayat (2) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-023", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Untuk Tahun Pajak 2026, keempat Wajib Pajak berikut menyampaikan pemberitahuan penggunaan NPPN pada Februari 2026. Semuanya berhak memakai NPPN, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "CV jasa desain grafis dengan peredaran bruto Rp1,2 miliar", B: "Arsitek orang pribadi dengan peredaran bruto Rp3,9 miliar", C: "Pedagang grosir orang pribadi dengan peredaran bruto Rp1,5 miliar yang tidak memakai PPh final", D: "Penerjemah lepas orang pribadi yang juga pegawai tetap, dengan peredaran bruto pekerjaan bebas Rp350 juta" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NPPN hanya untuk Wajib Pajak orang pribadi (Pasal 14 ayat (2) UU PPh); badan seperti CV wajib menyelenggarakan pembukuan.",
        jejakHitung: [],
        mengapaSalah: { B: "Rp3,9 miliar masih kurang dari Rp4,8 miliar", C: "Batas Rp600 juta adalah ketentuan lama sebelum UU 36/2008; kini kurang dari Rp4,8 miliar", D: "Status pegawai tidak menghalangi NPPN atas penghasilan pekerjaan bebasnya" },
        jebakan: "Peserta sibuk mengecek angka, padahal syarat pertama adalah subjeknya harus orang pribadi."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 28 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A1-024", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Bapak Teguh (Malang) memiliki toko kelontong dengan peredaran bruto 2026 Rp900.000.000 yang memakai PPh final 0,5%, serta praktik jasa arsitek (pekerjaan bebas) dengan penerimaan bruto 2026 Rp600.000.000. Ia menyampaikan pemberitahuan NPPN pada Januari 2026; persentase norma jasa arsitek (diberikan) 35%. Tidak ada penghasilan dari luar negeri dan peredaran bruto 2025 juga di bawah Rp2 miliar. Perlakuan yang tepat untuk Tahun Pajak 2026 setelah PP 20/2026 berlaku adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Seluruh peredaran bruto Rp1,5 miliar (toko dan jasa arsitek) dikenai PPh final 0,5%", B: "Karena memiliki penghasilan pekerjaan bebas, toko tidak lagi boleh memakai PPh final dan seluruhnya dihitung dengan NPPN", C: "Neto dihitung 35% × Rp1,5 miliar = Rp525.000.000 dan seluruhnya digabung dengan tarif Pasal 17", D: "Jasa arsitek: neto 35% × Rp600.000.000 = Rp210.000.000 digabung dan dikenai tarif Pasal 17; toko tetap dikenai PPh final 0,5% karena total peredaran bruto tidak melebihi Rp4,8 miliar" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "PP 20/2026 mengecualikan jasa pekerjaan bebas dari PPh final, tetapi usaha dagang WP yang sama tetap boleh memakai 0,5% selama peredaran bruto yang diuji (usaha + pekerjaan bebas + luar negeri) tidak melebihi Rp4,8 miliar. Penghasilan arsitek dihitung dengan NPPN dan dikenai tarif umum.",
        jejakHitung: [ ["Uji batas: Rp900 juta + Rp600 juta", "Rp1,5 miliar ≤ Rp4,8 miliar"], ["Toko", "PPh final 0,5% (tidak digabung)"], ["Neto arsitek = 35% × Rp600.000.000", "Rp210.000.000 → tarif Pasal 17"] ],
        mengapaSalah: { A: "Pekerjaan bebas dikecualikan dari PPh final sejak PP 20/2026", B: "Tidak ada ketentuan yang menggugurkan PPh final usaha dagang karena WP juga punya pekerjaan bebas; yang diuji total peredaran bruto", C: "Persentase norma arsitek hanya berlaku untuk peredaran bruto pekerjaan bebasnya; omzet toko dikenai PPh final" },
        jebakan: "Satu WP dapat memiliki dua rezim sekaligus: final untuk dagang, tarif umum untuk pekerjaan bebas."
      },
      dasarHukum: [ { pasal: "PP 55/2022 Pasal 56 dan 57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "◐",
      peringatan: "Teknis PP 20/2026 bagi WP yang sekaligus memiliki usaha final dan pekerjaan bebas (termasuk alokasi bagian Rp500 juta) bersumber dari ulasan sekunder; cek aturan pelaksana sebelum dijadikan rujukan pasti."
    },
    {
      id: "A1-025", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 14 ayat (2) UU PPh: Wajib Pajak orang pribadi yang melakukan kegiatan usaha atau pekerjaan bebas yang peredaran brutonya dalam 1 (satu) tahun kurang dari Rp4.800.000.000,00 boleh menghitung penghasilan neto dengan menggunakan Norma Penghitungan Penghasilan Neto, dengan syarat memberitahukan kepada Direktur Jenderal Pajak dalam jangka waktu 3 (tiga) bulan pertama dari tahun pajak yang bersangkutan. Pasal 14 ayat (4): Wajib Pajak yang tidak memberitahukan kepada Direktur Jenderal Pajak untuk menggunakan Norma Penghitungan Penghasilan Neto dianggap memilih menyelenggarakan pembukuan.",
      stem: "Budi (fotografer lepas di Medan, peredaran bruto 2026 Rp1,3 miliar) baru menyampaikan pemberitahuan penggunaan NPPN untuk Tahun Pajak 2026 pada 10 April 2026, dan selama 2026 hanya mencatat penerimaan. Dalam SPT Tahunan 2026 ia menghitung neto dengan norma 50%. Berdasarkan kutipan tersebut, penilaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pemberitahuan terlambat sehingga Budi dianggap memilih pembukuan; neto 2026 tidak boleh dihitung dengan norma", B: "Pemberitahuan sah karena masih dalam 4 bulan pertama tahun pajak", C: "Pemberitahuan tidak diperlukan karena peredaran bruto Budi kurang dari Rp4,8 miliar", D: "Pemberitahuan sah asalkan dilampirkan pada SPT Tahunan yang disampaikan paling lambat 31 Maret 2027" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tiga bulan pertama Tahun Pajak 2026 berakhir 31 Maret 2026. Pemberitahuan 10 April 2026 terlambat; menurut ayat (4) Budi dianggap memilih pembukuan, sehingga wajib menghitung neto berdasarkan pembukuan. Bila pembukuan tidak diselenggarakan, DJP dapat menghitung neto secara jabatan dengan norma (Pasal 14 ayat (5)).",
        jejakHitung: [],
        mengapaSalah: { B: "Batasnya 3 bulan pertama (s.d. 31 Maret), bukan 4 bulan", C: "Batas peredaran bruto hanya syarat kelayakan; pemberitahuan tetap wajib", D: "Pemberitahuan harus dalam 3 bulan pertama tahun pajak yang bersangkutan, tidak dapat menyusul bersama SPT" },
        jebakan: "Angka 4 bulan berasal dari batas SPT badan, bukan pemberitahuan NPPN."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2), (4), dan (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 (pemberitahuan melalui Coretax)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-026", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Ibu Ratna (toko furnitur, menyelenggarakan pembukuan) memiliki riwayat penghasilan neto fiskal: rugi 2021 Rp200.000.000; rugi 2022 Rp150.000.000; laba 2023 Rp60.000.000; laba 2024 Rp40.000.000; laba 2025 Rp30.000.000; laba 2026 Rp180.000.000 (sebelum kompensasi). Kompensasi selama ini dilakukan sesuai ketentuan. Kompensasi kerugian pada SPT 2026 dan sisa kerugian yang masih dapat dibawa ke 2027 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kompensasi Rp150.000.000 (rugi 2022 saja karena rugi 2021 dianggap hangus); sisa Rp0", B: "Kompensasi Rp180.000.000 (sisa rugi 2021 Rp70.000.000 + rugi 2022 Rp110.000.000); sisa rugi 2022 Rp40.000.000 dapat dipakai s.d. 2027", C: "Kompensasi Rp180.000.000 (rugi 2022 Rp150.000.000 + rugi 2021 Rp30.000.000); sisa rugi 2021 Rp40.000.000 dibawa ke 2027", D: "Kompensasi Rp220.000.000 (seluruh sisa rugi) sehingga 2026 menjadi rugi Rp40.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rugi tertua dipakai lebih dahulu. Laba 2023–2025 (Rp130 juta) memakai rugi 2021, sisa Rp70 juta yang batas akhirnya 2026. Laba 2026 Rp180 juta memakai sisa rugi 2021 Rp70 juta, lalu rugi 2022 Rp110 juta; sisa rugi 2022 Rp40 juta berlaku sampai 2027.",
        jejakHitung: [ ["Rugi 2021 dipakai 2023–2025 (60 + 40 + 30 juta)", "Rp130.000.000"], ["Sisa rugi 2021 (batas akhir 2026)", "Rp70.000.000"], ["Rugi 2022 utuh (batas akhir 2027)", "Rp150.000.000"], ["Laba 2026 → pakai rugi 2021 dahulu", "Rp70.000.000"], ["Lalu rugi 2022", "Rp110.000.000"], ["Sisa rugi 2022 ke 2027", "Rp40.000.000"] ],
        mengapaSalah: { A: "Menghitung 5 tahun termasuk tahun rugi; rugi 2021 masih boleh dipakai sampai 2026", C: "Memakai rugi terbaru lebih dahulu dan membawa rugi 2021 melewati batas 5 tahun", D: "Kompensasi tidak boleh melebihi penghasilan neto tahun berjalan dan tidak menciptakan rugi baru" },
        jebakan: "Urutan tertua-dahulu menentukan rugi mana yang tersisa dan sampai kapan."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-027", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Tuan Gunawan (SPDN, menyelenggarakan pembukuan) menyiapkan SPT Tahunan 2026 dengan laba usaha dalam negeri Rp300.000.000. Ia mencatat beberapa kerugian. Kerugian yang DAPAT dikompensasikan dengan penghasilan neto 2026 tersebut adalah ...",
      kataKualifikasi: ["dapat"],
      opsi: { A: "Sisa rugi fiskal usaha dalam negeri Tahun Pajak 2021 sebesar Rp45.000.000", B: "Rugi penjualan saham di Bursa Efek Indonesia tahun 2026 sebesar Rp25.000.000", C: "Rugi usaha cabang di Malaysia tahun 2025 sebesar Rp60.000.000", D: "Sisa rugi fiskal usaha dalam negeri Tahun Pajak 2020 sebesar Rp30.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Rugi 2021 masih dalam batas 5 tahun (2022–2026). Rugi saham di bursa terkait transaksi yang dikenai PPh final; rugi luar negeri tidak digabung dengan penghasilan dalam negeri; rugi 2020 berakhir pada 2025.",
        jejakHitung: [],
        mengapaSalah: { B: "Transaksi saham di bursa dikenai PPh final 0,1%, sehingga ruginya tidak masuk penghitungan tarif umum", C: "Kerugian di luar negeri tidak dapat dikompensasikan dengan penghasilan dalam negeri (PMK 192/PMK.03/2018)", D: "Rugi 2020 hanya dapat dipakai 2021–2025" },
        jebakan: "Tiga opsi salah gugur karena tiga alasan berbeda: final, luar negeri, dan daluwarsa."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (kerugian luar negeri)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 4 ayat (2) huruf c UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-028", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "SPT Tahunan 2025 Ibu Rina (pembukuan) menunjukkan rugi fiskal Rp80.000.000. Pada SPT 2026 penghasilan neto fiskalnya Rp50.000.000 sebelum kompensasi. Sisa kerugian setelah SPT 2026 dan tahun pajak paling lambat sisa itu dapat dipakai adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Rp30.000.000, paling lambat Tahun Pajak 2029", B: "Rp30.000.000, paling lambat Tahun Pajak 2030", C: "Rp80.000.000, paling lambat Tahun Pajak 2030", D: "Rp30.000.000, tanpa batas waktu" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rugi 2025 dikompensasikan mulai 2026 berturut-turut sampai 5 tahun (2026–2030). Setelah dipakai Rp50.000.000, sisanya Rp30.000.000.",
        jejakHitung: [ ["Rugi 2025", "Rp80.000.000"], ["Dipakai 2026", "Rp50.000.000"], ["Sisa", "Rp30.000.000"], ["Lima tahun sejak tahun berikutnya", "2026–2030"] ],
        mengapaSalah: { A: "Menghitung 2025 sebagai tahun pertama", C: "Lupa bahwa Rp50.000.000 sudah dipakai pada 2026", D: "Kompensasi dibatasi 5 tahun" },
        jebakan: "Tahun pertama kompensasi adalah tahun setelah tahun rugi."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-029", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "SPT Tahunan 2023 Ibu Dewi (pembukuan) menyatakan rugi fiskal Rp200.000.000, dan dalam SPT 2024 ia mengompensasikan Rp80.000.000 (laba 2024 Rp80.000.000). Pada Juni 2025 terbit SKP hasil pemeriksaan Tahun Pajak 2023 yang menetapkan rugi fiskal hanya Rp120.000.000; Ibu Dewi tidak mengajukan keberatan. Laba fiskal 2025 sebelum kompensasi Rp100.000.000. Kompensasi kerugian maksimum dalam SPT 2025 adalah ...",
      kataKualifikasi: ["maksimum"],
      opsi: { A: "Rp100.000.000", B: "Rp120.000.000", C: "Rp40.000.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jumlah rugi yang dapat dikompensasikan mengikuti ketetapan DJP (Rp120.000.000). Setelah dipakai Rp80.000.000 pada 2024, sisa yang dapat dipakai pada 2025 hanya Rp40.000.000.",
        jejakHitung: [ ["Rugi 2023 menurut SKP", "Rp120.000.000"], ["Dipakai 2024", "Rp80.000.000"], ["Sisa", "Rp40.000.000"], ["Laba 2025", "Rp100.000.000"], ["Kompensasi 2025 = min(Rp40 juta; Rp100 juta)", "Rp40.000.000"] ],
        mengapaSalah: { A: "Masih memakai rugi menurut SPT (Rp200 juta − Rp80 juta) yang telah dikoreksi SKP", B: "Lupa bahwa Rp80.000.000 sudah dipakai pada 2024; lagi pula kompensasi tidak boleh melebihi laba fiskal 2025 Rp100.000.000", D: "Penerbitan SKP tidak menghapus hak kompensasi; hanya mengubah jumlahnya" },
        jebakan: "Angka rugi dalam SPT bukan angka final bila kemudian ditetapkan lain oleh DJP."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh dan Penjelasannya", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Prinsip bahwa kompensasi mengikuti ketetapan pajak (SKP, keputusan keberatan, putusan banding) bersumber dari Penjelasan Pasal 6 ayat (2) dan praktik pemeriksaan; teks penjelasan belum dibaca langsung dalam riset proyek."
    },
    {
      id: "A1-030", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Pak Andre (pegawai, istri tidak bekerja) pada 1 Januari 2026 menanggung sepenuhnya: dua anak kandung, ibu mertua yang tinggal serumah, dan adik kandungnya (19 tahun, kuliah). Anak ketiganya lahir pada 5 Maret 2026. PTKP yang dipakai dalam SPT Tahunan 2026 Pak Andre adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp67.500.000", B: "Rp72.000.000", C: "Rp81.000.000", D: "Rp126.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Tanggungan yang sah: dua anak kandung dan ibu mertua (semenda garis lurus) = 3. Adik kandung adalah garis ke samping, dan anak yang lahir Maret 2026 belum dihitung karena status ditentukan pada awal tahun.",
        jejakHitung: [ ["WP sendiri", "Rp54.000.000"], ["Tambahan kawin", "Rp4.500.000"], ["3 tanggungan × Rp4.500.000", "Rp13.500.000"], ["PTKP K/3", "Rp72.000.000"] ],
        mengapaSalah: { A: "Tidak menghitung ibu mertua; mertua adalah keluarga semenda dalam garis keturunan lurus", C: "Menghitung lima tanggungan; maksimal 3 dan adik kandung tidak termasuk", D: "Menambahkan PTKP istri Rp54.000.000 padahal istri tidak berpenghasilan" },
        jebakan: "Anak ketiga lahir Maret 2026 — menggoda tetapi baru diperhitungkan pada Tahun Pajak 2027, itu pun tetap dibatasi maksimal 3 tanggungan."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-031", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Pasangan Pak Fajar dan Bu Dina (status KK, dua anak kandung). Pak Fajar pegawai tetap PT Alfa dengan neto BPA1 Rp180.000.000. Bu Dina pegawai tetap PT Beta (tidak terkait usaha keluarga) dengan neto BPA1 Rp96.000.000 dan juga pegawai tidak tetap Yayasan Cendekia dengan upah Rp2.000.000 per bulan; seluruh penghasilannya telah dipotong PPh 21. Tidak ada penghasilan lain. PPh terutang keluarga Pak Fajar Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.475.000", B: "Rp20.775.000", C: "Rp28.875.000", D: "Rp10.875.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Penghasilan Bu Dina tidak semata-mata dari satu pemberi kerja, sehingga seluruhnya digabung dengan penghasilan Pak Fajar dan PTKP ditambah Rp54.000.000 (K/I/2). PPh 21 Bu Dina menjadi kredit pajak.",
        jejakHitung: [ ["Neto gabungan 180 + 96 + 24 juta", "Rp300.000.000"], ["PTKP K/I/2 (67,5 + 54 juta)", "Rp121.500.000"], ["PKP", "Rp178.500.000"], ["5% × Rp60.000.000", "Rp3.000.000"], ["15% × Rp118.500.000", "Rp17.775.000"], ["PPh terutang", "Rp20.775.000"] ],
        mengapaSalah: { A: "Menganggap gaji PT Beta tetap final dan hanya menggabung upah yayasan dengan PTKP K/2", C: "Menggabung penghasilan istri tetapi lupa menambah PTKP istri Rp54.000.000", D: "Mengabaikan seluruh penghasilan Bu Dina seolah final" },
        jebakan: "Syarat 'semata-mata dari satu pemberi kerja' gugur karena pekerjaan kedua, walaupun nilainya kecil."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) huruf c UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-032", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 8 ayat (3) UU PPh: Penghasilan neto suami isteri sebagaimana dimaksud pada ayat (2) huruf b dan huruf c dikenai pajak berdasarkan penggabungan penghasilan neto suami isteri dan besarnya pajak yang harus dilunasi oleh masing-masing suami isteri dihitung sesuai dengan perbandingan penghasilan neto mereka.",
      stem: "Pak Gilang dan Bu Hesti terikat perjanjian pisah harta tertulis (PH) dan menanggung satu anak kandung. Pada 2026 penghasilan neto Pak Gilang (usaha, pembukuan) Rp300.000.000 dan penghasilan neto Bu Hesti (pekerjaan dan usaha) Rp200.000.000. Tidak ada zakat atau kompensasi kerugian. Berdasarkan kutipan tersebut, PPh terutang yang menjadi bagian Bu Hesti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp15.900.000", B: "Rp31.300.000", C: "Rp32.375.000", D: "Rp25.900.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Neto suami dan istri digabung, PTKP memakai K/I/1, lalu PPh gabungan dibagi sebanding neto: bagian Bu Hesti 200/500.",
        jejakHitung: [ ["Neto gabungan", "Rp500.000.000"], ["PTKP K/I/1 (54 + 4,5 + 54 + 4,5 juta)", "Rp117.000.000"], ["PKP gabungan", "Rp383.000.000"], ["PPh gabungan = Rp31.500.000 + 25% × Rp133.000.000", "Rp64.750.000"], ["Bagian Bu Hesti = 200/500 × Rp64.750.000", "Rp25.900.000"] ],
        mengapaSalah: { A: "Menghitung Bu Hesti terpisah dengan PTKP TK/0 seperti status HB", B: "Memakai PTKP K/1 tanpa tambahan PTKP istri", C: "Membagi sama rata 50:50, bukan sebanding penghasilan neto" },
        jebakan: "PH bukan berarti dihitung terpisah; penggabungan tetap dilakukan sebelum dibagi."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) huruf b dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-033", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Yoga (pegawai) sejak 2024 menanggung sepenuhnya ibu kandungnya yang tinggal serumah. Ia menikah pada 15 Juni 2026 dan istrinya tidak bekerja. PTKP yang dipakai Yoga untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp63.000.000 (K/1)", B: "Rp54.000.000 (TK/0)", C: "Rp60.750.000 (K/1 proporsional)", D: "Rp58.500.000 (TK/1)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Status PTKP mengikuti keadaan 1 Januari 2026: belum kawin dengan satu tanggungan (ibu kandung, sedarah garis lurus).",
        jejakHitung: [ ["Status 1 Januari 2026", "belum kawin, 1 tanggungan"], ["Rp54.000.000 + Rp4.500.000", "Rp58.500.000"] ],
        mengapaSalah: { A: "Memakai status setelah menikah; perubahan di tengah tahun berlaku tahun berikutnya", B: "Lupa menghitung ibu kandung yang ditanggung sepenuhnya", C: "PTKP tidak diproporsikan menurut bulan" },
        jebakan: "Pernikahan Juni 2026 baru mengubah status pada 1 Januari 2027."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A1-034", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Bu Nita dan suaminya tidak hidup berpisah dan tidak membuat perjanjian pisah harta. Bu Nita (pengusaha butik) memilih menjalankan hak dan kewajiban perpajakannya sendiri dengan NPWP terpisah, sementara suaminya pegawai swasta. Status dan konsekuensi perpajakan yang tepat untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Status MT: masing-masing dikenai pajak sendiri-sendiri dengan PTKP masing-masing tanpa penggabungan", B: "Status KK: tanpa perjanjian pisah harta, Bu Nita wajib memakai NPWP suami", C: "Status MT: penghasilan neto suami dan istri digabung, PPh dihitung dengan PTKP gabungan, lalu dibagi sebanding penghasilan neto; masing-masing menyampaikan SPT sendiri", D: "Status PH: memilih NPWP sendiri sama dengan pisah harta, sehingga hanya penghasilan Bu Nita yang dihitung dengan PTKP TK/0" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Istri yang memilih menjalankan hak dan kewajiban sendiri berstatus MT (Pasal 8 ayat (2) huruf c); perlakuannya sama dengan PH: digabung lalu dibagi proporsional. Perlakuan terpisah tanpa penggabungan hanya untuk HB berdasarkan putusan hakim.",
        jejakHitung: [],
        mengapaSalah: { A: "Perlakuan terpisah tanpa penggabungan hanya berlaku bagi HB", B: "Undang-undang memberi istri pilihan menjalankan hak dan kewajiban sendiri tanpa perjanjian pisah harta", D: "PH mensyaratkan perjanjian pisah harta tertulis; memilih NPWP sendiri tanpa perjanjian adalah MT" },
        jebakan: "MT dan PH sama perlakuan hitungnya, tetapi berbeda dasar status."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) huruf c dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-035", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Ibu Nur (TK/1, pengusaha, menyelenggarakan pembukuan) memiliki penghasilan neto fiskal 2026 Rp312.456.789 dan membayar zakat penghasilan melalui BAZNAS Rp2.400.000 dengan bukti setor sah. PPh terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp31.889.000", B: "Rp31.889.197", C: "Rp32.489.000", D: "Rp32.889.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "PKP dibulatkan ke bawah dalam ribuan rupiah penuh sebelum tarif diterapkan.",
        jejakHitung: [ ["Neto − zakat", "Rp310.056.789"], ["− PTKP TK/1", "Rp58.500.000"], ["PKP sebelum pembulatan", "Rp251.556.789"], ["PKP dibulatkan ke bawah", "Rp251.556.000"], ["Rp31.500.000 + 25% × Rp1.556.000", "Rp31.889.000"] ],
        mengapaSalah: { B: "Tidak membulatkan PKP ke bawah dalam ribuan", C: "Tidak mengurangkan zakat BAZNAS", D: "Memakai lapisan lama pra-UU HPP (5% hanya s.d. Rp50 juta)" },
        jebakan: "Selisih pembulatan kecil, tetapi cukup memisahkan jawaban benar dari opsi tanpa pembulatan."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a dan ayat (4) UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-036", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      kutipan: "Pasal 9 ayat (1) huruf g UU PPh (diringkas): harta yang dihibahkan, bantuan atau sumbangan tidak boleh dikurangkan dari penghasilan bruto, kecuali sumbangan tertentu dalam Pasal 6 ayat (1) serta zakat yang diterima oleh badan amil zakat atau lembaga amil zakat yang dibentuk atau disahkan oleh pemerintah atau sumbangan keagamaan yang sifatnya wajib bagi pemeluk agama yang diakui di Indonesia, yang diterima oleh lembaga keagamaan yang dibentuk atau disahkan oleh pemerintah.",
      stem: "Pak Harun (K/1, toko sembako, pembukuan) memperoleh penghasilan neto fiskal 2026 Rp150.000.000. Selama 2026 ia membayar: zakat penghasilan melalui BAZNAS Rp6.000.000 (bukti setor sah); infak ke kotak amal masjid kompleks Rp3.000.000; dan zakat yang diserahkan langsung kepada tetangga yang membutuhkan Rp2.000.000. Berdasarkan kutipan tersebut dan PMK 114/2025, PPh terutang Pak Harun Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.400.000", B: "Rp1.050.000", C: "Rp6.150.000", D: "Rp7.050.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya zakat melalui BAZNAS yang dapat dikurangkan; infak sukarela dan zakat langsung kepada perorangan tidak diterima lembaga yang dibentuk/disahkan pemerintah.",
        jejakHitung: [ ["Neto", "Rp150.000.000"], ["− Zakat BAZNAS", "Rp6.000.000"], ["− PTKP K/1", "Rp63.000.000"], ["PKP", "Rp81.000.000"], ["5% × 60 jt + 15% × 21 jt", "Rp6.150.000"] ],
        mengapaSalah: { A: "Mengurangkan seluruh Rp11 juta, termasuk infak dan zakat langsung yang tidak memenuhi syarat", B: "Memperlakukan zakat sebagai kredit pajak (mengurangi PPh), padahal zakat mengurangi penghasilan", D: "Tidak mengurangkan zakat BAZNAS sama sekali" },
        jebakan: "Zakat mengurangi penghasilan (sebelum PTKP), bukan mengurangi pajak."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf g UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 114/2025 (zakat/sumbangan keagamaan wajib)", berlakuSejak: "2025-12-31" }, { pasal: "PP 60/2010" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-037", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Seorang penyanyi (TK/0) yang menghitung penghasilan neto pekerjaan bebasnya dengan pembukuan memiliki Penghasilan Kena Pajak Tahun Pajak 2026 Rp5.600.000.000 (sudah setelah PTKP dan sudah bulat ribuan). PPh terutang menurut Pasal 17 ayat (1) huruf a UU PPh adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.654.000.000", B: "Rp1.960.000.000", C: "Rp1.625.000.000", D: "Rp1.624.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Tarif berlapis: PPh s.d. Rp500 juta Rp94 juta, lapisan 30% sampai Rp5 miliar, dan 35% untuk kelebihannya.",
        jejakHitung: [ ["PPh s.d. Rp500.000.000", "Rp94.000.000"], ["30% × Rp4.500.000.000", "Rp1.350.000.000"], ["35% × Rp600.000.000", "Rp210.000.000"], ["PPh terutang", "Rp1.654.000.000"] ],
        mengapaSalah: { B: "Mengalikan seluruh PKP dengan tarif tertinggi 35%, bukan berlapis", C: "Memakai struktur lama pra-UU HPP: lapisan pertama Rp50 juta dan tarif tertinggi 30%", D: "Lupa lapisan 35% di atas Rp5 miliar sehingga seluruh kelebihan di atas Rp500 juta dikenai 30%" },
        jebakan: "Opsi tarif lama dan opsi tanpa lapisan 35% berselisih tipis; hanya peserta yang hafal lapisan baru yang selamat."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-038", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Hendro (K/0, SPDN) pada 2026 memperoleh penghasilan neto usaha dalam negeri Rp358.500.000 dan penghasilan neto sewa apartemen di Singapura Rp100.000.000; atas sewa itu ia telah membayar pajak di Singapura setara Rp20.000.000 dengan bukti pembayaran lengkap. Tidak ada zakat dan kompensasi kerugian. Kredit PPh Pasal 24 maksimum yang dapat diperhitungkan dalam SPT 2026 adalah ...",
      kataKualifikasi: ["maksimum"],
      opsi: { A: "Rp20.000.000", B: "Rp9.000.000", C: "Rp17.250.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "PKP = 358,5 + 100 − 58,5 juta = Rp400.000.000; PPh terutang Rp69.000.000. Batas Singapura = 100/400 × Rp69.000.000 = Rp17.250.000, lebih kecil dari pajak yang dibayar di Singapura.",
        jejakHitung: [ ["Neto dalam negeri + luar negeri", "Rp458.500.000"], ["− PTKP K/0", "Rp58.500.000"], ["PKP", "Rp400.000.000"], ["PPh terutang = Rp31.500.000 + 25% × Rp150.000.000", "Rp69.000.000"], ["Batas = 100/400 × Rp69.000.000", "Rp17.250.000"], ["Kredit = min(Rp20 juta; Rp17,25 juta)", "Rp17.250.000"] ],
        mengapaSalah: { A: "Mengkreditkan seluruh pajak luar negeri tanpa batas per negara", B: "Menghitung batas dengan tarif Pasal 17 atas penghasilan luar negeri saja, bukan proporsi terhadap PPh terutang", D: "Sewa properti di luar negeri bukan objek PPh final Pasal 4 ayat (2); ia digabung dan pajaknya dapat dikreditkan" },
        jebakan: "Batas kredit memakai proporsi neto luar negeri terhadap PKP, bukan tarif marginal."
      },
      dasarHukum: [ { pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-039", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Ibu Lestari (pegawai yang juga konsultan lepas) mengumpulkan dokumen untuk SPT 2026: BPA1 dengan PPh 21 Rp48.000.000; bukti potong PPh 21 bukan pegawai atas jasa konsultasi Rp4.000.000; bukti pungut PPh 22 atas pembelian mobil seharga Rp2,5 miliar di luar PPN dan PPnBM (barang sangat mewah, 5%) Rp125.000.000; bukti setor PPh 25 Rp24.000.000; bukti potong PPh final bunga deposito Rp6.000.000; dan STP sanksi bunga yang telah dilunasi Rp1.200.000. Jumlah kredit pajak yang dapat diperhitungkan dalam SPT 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp201.000.000", B: "Rp207.000.000", C: "Rp202.200.000", D: "Rp76.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit pajak: PPh 21 (BPA1 dan bukan pegawai), PPh 22 barang sangat mewah, dan PPh 25. PPh final dan sanksi tidak dapat dikreditkan.",
        jejakHitung: [ ["PPh 21 BPA1", "Rp48.000.000"], ["PPh 21 bukan pegawai", "Rp4.000.000"], ["PPh 22 barang sangat mewah", "Rp125.000.000"], ["PPh 25", "Rp24.000.000"], ["Jumlah kredit", "Rp201.000.000"] ],
        mengapaSalah: { B: "Ikut mengkreditkan PPh final bunga deposito", C: "Ikut mengkreditkan sanksi STP; sanksi bukan pajak terutang", D: "Tidak mengkreditkan PPh 22 barang sangat mewah, padahal pungutan itu bersifat tidak final bagi pembeli" },
        jebakan: "PPh 22 atas pembelian barang sangat mewah sering dikira 'pajak barang' yang tidak dapat dikreditkan."
      },
      dasarHukum: [ { pasal: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 22 UU PPh; PMK 253/PMK.03/2008 s.t.d.t.d. PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19" } ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A1-040", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Ibu Fitri menyampaikan SPT Tahunan PPh OP Tahun Pajak 2025 pada 10 April 2026 tanpa pemberitahuan perpanjangan. SPT berstatus kurang bayar Rp8.000.000 dan PPh Pasal 29 itu dilunasi pada hari yang sama. Anggap tarif bunga per bulan menurut KMK untuk sanksi dengan uplift 5% yang berlaku 1,10%. Jumlah sanksi administrasi yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp88.000", B: "Rp260.000", C: "Rp1.088.000", D: "Rp188.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dua sanksi berjalan bersamaan: denda Pasal 7 ayat (1) Rp100.000 karena SPT terlambat dan bunga Pasal 9 ayat (2b) karena PPh 29 dibayar setelah batas waktu SPT; 31 Maret–10 April dihitung 1 bulan.",
        jejakHitung: [ ["Denda SPT Tahunan OP terlambat", "Rp100.000"], ["Masa bunga 31 Mar–10 Apr 2026", "1 bulan"], ["Bunga = Rp8.000.000 × 1,10% × 1", "Rp88.000"], ["Jumlah sanksi", "Rp188.000"] ],
        mengapaSalah: { A: "Lupa denda keterlambatan SPT Pasal 7 ayat (1)", B: "Memakai bunga 2% per bulan sebelum UU HPP", C: "Memakai denda SPT Tahunan badan Rp1.000.000" },
        jebakan: "Terlambat lapor dan terlambat bayar adalah dua pelanggaran berbeda dengan dua sanksi berbeda."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2b) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (tarif bunga bulanan)" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-041", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 28A UU PPh: Apabila pajak yang terutang untuk suatu tahun pajak ternyata lebih kecil dari jumlah kredit pajak sebagaimana dimaksud dalam Pasal 28 ayat (1), setelah diadakan pemeriksaan, kelebihan pembayaran pajak dikembalikan setelah diperhitungkan dengan utang pajak berikut sanksi-sanksinya.",
      stem: "Ibu Fitriani menghitung PPh terutang Tahun Pajak 2025 Rp30.000.000. Kredit dan pembayarannya: PPh 21 (BPA1) Rp20.000.000; PPh 21 bukan pegawai Rp3.000.000; PPh 25 yang disetor Rp12.000.000; PPh final sewa rumah Rp2.500.000. Ia masih memiliki utang STP yang belum dilunasi Rp1.200.000 dan meminta kelebihan dikembalikan. Berdasarkan kutipan tersebut, hasil yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih bayar Rp7.500.000; yang dikembalikan Rp6.300.000 setelah diperhitungkan dengan utang STP", B: "Lebih bayar Rp5.000.000 dikembalikan seluruhnya; utang STP ditagih terpisah", C: "Kurang bayar Rp7.000.000 karena PPh 25 bukan kredit pajak", D: "Lebih bayar Rp5.000.000; yang dikembalikan Rp3.800.000 setelah diperhitungkan dengan utang STP" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kredit sah Rp35.000.000 (PPh final tidak termasuk) melebihi PPh terutang Rp30.000.000, sehingga lebih bayar Rp5.000.000; sebelum dikembalikan, kelebihan diperhitungkan dengan utang STP Rp1.200.000.",
        jejakHitung: [ ["Kredit 20 + 3 + 12 juta", "Rp35.000.000"], ["PPh terutang", "Rp30.000.000"], ["Lebih bayar", "Rp5.000.000"], ["− Utang STP", "Rp1.200.000"], ["Dikembalikan", "Rp3.800.000"] ],
        mengapaSalah: { A: "Ikut mengkreditkan PPh final sewa rumah", B: "Pasal 28A mewajibkan kelebihan diperhitungkan dengan utang pajak berikut sanksinya terlebih dahulu", C: "PPh 25 adalah kredit pajak menurut Pasal 28 ayat (1)" },
        jebakan: "Pengembalian bersih, bukan lebih bayar kotor, yang diterima Wajib Pajak."
      },
      dasarHukum: [ { pasal: "Pasal 28A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 ayat (1) dan Pasal 17B UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A1-042", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Sapto (pengusaha bengkel, pembukuan) menyampaikan SPT Tahunan 2025 dengan PPh terutang Rp54.600.000. Kredit pajak dalam SPT itu: PPh 21 atas honorarium sebagai komisaris PT Sejahtera Rp18.000.000; PPh 22 atas impor suku cadang Rp2.400.000; PPh 23 atas sewa alat yang ia sewakan Rp6.000.000; PPh 25 yang disetor selama 2025 Rp24.000.000. Angsuran PPh Pasal 25 per bulan tahun 2026 setelah SPT 2025 disampaikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp350.000", B: "Rp4.550.000", C: "Rp2.350.000", D: "Rp2.550.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Dasar angsuran = PPh terutang − PPh 21, 22, 23 (dan 24 bila ada), lalu dibagi 12; PPh 25 tahun lalu tidak dikurangkan.",
        jejakHitung: [ ["PPh terutang 2025", "Rp54.600.000"], ["− PPh 21, 22, 23 (18 + 2,4 + 6 juta)", "Rp26.400.000"], ["Dasar angsuran", "Rp28.200.000"], ["÷ 12", "Rp2.350.000"] ],
        mengapaSalah: { A: "Ikut mengurangkan PPh 25 tahun lalu", B: "Tidak mengurangkan kredit sama sekali", D: "Lupa mengurangkan PPh 22 impor" },
        jebakan: "PPh 25 yang sudah dibayar mengurangi PPh 29, tetapi tidak mengurangi dasar angsuran."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-043", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "Ibu Maria adalah pedagang pengecer pakaian dengan dua toko: Toko A di Bekasi dan Toko B di Bogor. Peredaran bruto 2025-nya Rp6,3 miliar sehingga ia tidak memakai PPh final UMKM. Peredaran bruto Maret 2026: Toko A Rp320.000.000 dan Toko B Rp180.000.000. Besarnya angsuran PPh Pasal 25 Masa Maret 2026 dan batas paling lambat penyetorannya yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Total Rp2.500.000 (0,5% × Rp500.000.000) disetor paling lambat 15 April 2026", B: "Toko A Rp2.400.000 dan Toko B Rp1.350.000, disetor paling lambat 10 April 2026", C: "Sebesar PPh terutang SPT 2025 dikurangi kredit pajak lalu dibagi 12, tanpa memperhatikan peredaran bruto bulanan", D: "Toko A Rp2.400.000 dan Toko B Rp1.350.000, masing-masing untuk tempat usahanya, disetor paling lambat 15 April 2026" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Ibu Maria adalah OP pengusaha tertentu (pedagang pengecer dengan tempat usaha): angsurannya 0,75% × peredaran bruto bulanan masing-masing tempat usaha, disetor paling lambat tanggal 15 bulan berikutnya, dan menjadi kredit di SPT Tahunan.",
        jejakHitung: [ ["Toko A: 0,75% × Rp320.000.000", "Rp2.400.000"], ["Toko B: 0,75% × Rp180.000.000", "Rp1.350.000"], ["Jatuh tempo setor", "15 April 2026"] ],
        mengapaSalah: { A: "Memakai tarif PPh final UMKM 0,5%, padahal peredaran bruto 2025 melebihi Rp4,8 miliar", B: "Tanggal 10 adalah batas lama PPh yang dipotong/dipungut sebelum 2025; PPh 25 disetor paling lambat tanggal 15 (kini seragam untuk semua pajak masa, PMK 81/2024 Pasal 94)", C: "Rumus Pasal 25 ayat (1) tidak berlaku bagi OPPT yang memakai ketentuan khusus 0,75%" },
        jebakan: "OPPT dihitung per tempat usaha, bukan total semua toko dalam satu setoran."
      },
      dasarHukum: [ { pasal: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 Pasal 7 ayat (1)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 25 ayat (7) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-044", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Bu Yanti adalah pedagang pengecer sembako dengan satu toko; peredaran bruto 2025 Rp2,4 miliar dan seluruh penghasilan usahanya memakai PPh final 0,5% PP 55/2022 s.t.d.d. PP 20/2026. Kewajiban pembayaran bulanannya pada 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membayar PPh final 0,5% dan sekaligus angsuran PPh 25 OPPT 0,75% atas peredaran bruto yang sama", B: "Membayar angsuran PPh 25 OPPT 0,75% sebagai kredit pajak, bukan PPh final", C: "Membayar PPh final 0,5% atas peredaran bruto bulanan setelah bagian Rp500 juta setahun terlampaui, tanpa angsuran PPh 25 OPPT", D: "Membayar PPh final 0,5% sejak rupiah pertama peredaran bruto bulan Januari" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "angka-usang" },
      pembahasan: {
        inti: "WP yang seluruh penghasilan usahanya dikenai PPh final membayar PPh final, bukan angsuran PPh 25 OPPT; bagi OP, bagian peredaran bruto sampai Rp500 juta setahun tidak dikenai PPh.",
        jejakHitung: [],
        mengapaSalah: { A: "Tidak ada pembayaran ganda; angsuran OPPT hanya bagi pedagang pengecer yang memakai tarif umum", B: "Selama memenuhi syarat dan tidak memilih tarif umum, rezimnya PPh final", D: "Bagian Rp500 juta tidak kena pajak berlaku sejak UU HPP; mengenakan dari rupiah pertama adalah aturan PP 23/2018" },
        jebakan: "Status 'pedagang pengecer' menggoda peserta memakai 0,75%, padahal rezimnya final."
      },
      dasarHukum: [ { pasal: "PP 55/2022 Pasal 56–60 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "Pasal 7 ayat (2a) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-045", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 25 ayat (1) UU PPh: Besarnya angsuran pajak dalam tahun pajak berjalan yang harus dibayar sendiri oleh Wajib Pajak untuk setiap bulan adalah sebesar Pajak Penghasilan yang terutang menurut Surat Pemberitahuan Tahunan Pajak Penghasilan tahun pajak yang lalu dikurangi dengan: a. Pajak Penghasilan yang dipotong sebagaimana dimaksud dalam Pasal 21 dan Pasal 23 serta Pajak Penghasilan yang dipungut sebagaimana dimaksud dalam Pasal 22; dan b. Pajak Penghasilan yang dibayar atau terutang di luar negeri yang boleh dikreditkan sebagaimana dimaksud dalam Pasal 24, dibagi 12 (dua belas) atau banyaknya bulan dalam bagian tahun pajak.",
      stem: "Menurut SPT Tahunan 2025, PPh terutang Bu Kartika (konsultan manajemen) Rp96.000.000. Kredit pajaknya: PPh 21 bukan pegawai Rp30.000.000; PPh 23 atas sewa peralatan yang ia sewakan Rp4.800.000; PPh 24 yang boleh dikreditkan Rp13.200.000; PPh 25 yang disetor selama 2025 Rp36.000.000. Ia juga menerima sewa ruko yang telah dipotong PPh final Rp5.000.000. Berdasarkan kutipan tersebut, angsuran PPh 25 per bulan tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.100.000", B: "Rp1.000.000", C: "Rp3.583.333", D: "Rp4.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Kutipan hanya mengurangkan PPh 21, 22, 23, dan 24; PPh 25 tahun lalu dan PPh final tidak dikurangkan.",
        jejakHitung: [ ["PPh terutang", "Rp96.000.000"], ["− PPh 21 + PPh 23 + PPh 24 (30 + 4,8 + 13,2 juta)", "Rp48.000.000"], ["Dasar angsuran", "Rp48.000.000"], ["÷ 12", "Rp4.000.000"] ],
        mengapaSalah: { A: "Lupa mengurangkan PPh 24 yang boleh dikreditkan (huruf b kutipan)", B: "Ikut mengurangkan PPh 25 tahun lalu", C: "Ikut mengurangkan PPh final sewa ruko" },
        jebakan: "Huruf b kutipan (PPh 24) paling sering terlewat."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-046", topik: "A1.10", kasusId: "V-A1-02", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Data untuk soal ini dan dua soal berikutnya: Pak Hendra Wijaya (K/1, Sleman) memiliki toko grosir sembako, terdaftar sejak 2021 dan memakai PPh final UMKM; peredaran bruto 2025 Rp2,9 miliar. Istrinya, Bu Sinta, pegawai tetap sebuah bank (satu pemberi kerja, tidak terkait usaha keluarga) dengan PPh 21 dipotong sesuai BPA1. Peredaran bruto toko 2026: Januari Rp210.000.000, Februari Rp190.000.000, Maret Rp260.000.000. PPh final UMKM Masa Maret 2026 yang harus disetor Pak Hendra adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.300.000", B: "Rp1.091.667", C: "Rp800.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bagian Rp500 juta tidak kena pajak dihitung kumulatif sejak Januari. Kumulatif s.d. Februari Rp400 juta (nihil); Maret mencapai Rp660 juta, sehingga yang dikenai 0,5% hanya kelebihan Rp160 juta.",
        jejakHitung: [ ["Kumulatif Januari–Februari", "Rp400.000.000 (nihil)"], ["Kumulatif s.d. Maret", "Rp660.000.000"], ["Kena pajak Maret = Rp660 juta − Rp500 juta", "Rp160.000.000"], ["0,5% × Rp160.000.000", "Rp800.000"] ],
        mengapaSalah: { A: "Mengenakan 0,5% atas seluruh omzet Maret tanpa memperhatikan sisa bagian Rp500 juta (pola PP 23/2018)", B: "Membagi rata Rp500 juta menjadi kira-kira Rp41,67 juta per bulan", D: "Menganggap Rp500 juta berlaku per bulan" },
        jebakan: "Bulan ketika batas Rp500 juta terlampaui hanya dikenai pajak atas kelebihannya."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (2a) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 Pasal 56–60 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-047", topik: "A1.11", kasusId: "V-A1-02", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, laporanUjian: ["B-2026-10"],
      formulirRef: "1770.l3.6",
      stem: "Pak Hendra Wijaya (K/1, toko grosir dengan PPh final UMKM) menyusun SPT Tahunan PPh OP 2026 di Coretax. Istrinya, Bu Sinta, pegawai tetap bank (satu pemberi kerja, tidak terkait usaha keluarga, PPh 21 dipotong) dan tidak memiliki NPWP terpisah. Pelaporan yang tepat atas (a) peredaran bruto toko beserta PPh final yang telah disetor dan (b) penghasilan Bu Sinta menurut BPA1 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(a) dan (b) dilaporkan pada lampiran penghasilan yang dikenai PPh final/bersifat final, tidak digabung ke penghasilan neto; Bu Sinta dicantumkan dalam daftar anggota keluarga", B: "(a) pada lampiran penghasilan final; (b) digabung sebagai penghasilan neto dari pekerjaan dan PPh 21-nya dikreditkan", C: "(a) dihitung ulang dengan NPPN dan digabung sebagai penghasilan neto usaha, PPh final dikreditkan; (b) pada lampiran penghasilan final", D: "(a) pada lampiran penghasilan final; (b) tidak perlu dilaporkan karena PPh 21 istri sudah dipotong pemberi kerja" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penghasilan istri yang memenuhi tiga syarat Pasal 8 ayat (1) bersifat final bagi keluarga dan dilaporkan suami pada lampiran penghasilan final; istri didaftarkan dalam daftar anggota keluarga agar penghasilannya tidak dianggap penghasilan suami. PPh final UMKM juga dilaporkan pada lampiran penghasilan final tanpa digabung.",
        jejakHitung: [],
        mengapaSalah: { B: "Penghasilan istri dari satu pemberi kerja yang telah dipotong PPh 21 tidak digabung", C: "Penghasilan yang dikenai PPh final UMKM tidak dihitung ulang dengan NPPN dan PPh-nya tidak dikreditkan", D: "Penghasilan istri tetap dilaporkan dalam SPT suami karena keluarga merupakan satu kesatuan" },
        jebakan: "Di Coretax, BPA1 istri yang tidak dipindahkan ke lampiran final membuat SPT suami tampak kurang bayar."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 (formulir SPT Tahunan OP di Coretax)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-048", topik: "A1.6", kasusId: "V-A1-02", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Pak Hendra Wijaya (K/1) pada 2026 hanya memiliki penghasilan toko yang dikenai PPh final UMKM dan bunga pinjaman Rp30.000.000 dari temannya (orang pribadi, tidak dipotong PPh). Istrinya pegawai tetap bank dengan penghasilan yang memenuhi syarat Pasal 8 ayat (1). Penghitungan PPh Pasal 17 dalam SPT 2026 Pak Hendra adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PTKP K/I/1 Rp117.000.000 karena istri berpenghasilan; gaji istri digabung dengan bunga pinjaman", B: "PTKP K/1 Rp63.000.000; bunga Rp30.000.000 di bawah PTKP sehingga PKP dan PPh Pasal 17 nihil; gaji istri tidak digabung", C: "PTKP K/1 dikurangkan dari peredaran bruto toko lebih dahulu, lalu sisanya dikenai PPh final 0,5%", D: "Bunga pinjaman bebas pajak karena tidak dipotong pihak lain, sehingga tidak perlu dilaporkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penghasilan toko (final) dan penghasilan istri (final bagi keluarga) tidak masuk PKP. Satu-satunya penghasilan non-final adalah bunga pinjaman Rp30.000.000, lebih kecil dari PTKP K/1 Rp63.000.000.",
        jejakHitung: [ ["Neto non-final (bunga pinjaman)", "Rp30.000.000"], ["PTKP K/1", "Rp63.000.000"], ["PKP", "nihil"] ],
        mengapaSalah: { A: "Tambahan PTKP istri hanya bila penghasilan istri digabung; di sini tidak digabung", C: "PTKP tidak dikurangkan dari peredaran bruto PPh final", D: "Bunga dari orang pribadi adalah objek non-final Pasal 4 ayat (1) huruf f yang tetap wajib dilaporkan, walaupun tidak dipotong" },
        jebakan: "Tidak dipotong PPh bukan berarti bebas pajak."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) huruf f UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) dan Pasal 8 ayat (1) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-049", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "Bu Melati (OP, toko bahan bangunan, terdaftar 2022) memakai PPh final UMKM pada 2026 karena peredaran bruto 2025 Rp3,6 miliar. Akibat proyek perumahan di sekitarnya, peredaran bruto kumulatif 2026 menembus Rp4,8 miliar pada Oktober 2026 dan mencapai Rp5,7 miliar pada Desember 2026. Perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Sejak Masa Oktober 2026 wajib beralih ke tarif Pasal 17 karena batas Rp4,8 miliar terlampaui", B: "Tetap PPh final 0,5% sampai Masa Desember 2026; mulai Tahun Pajak 2027 dikenai tarif umum Pasal 17", C: "Seluruh peredaran bruto 2026 dihitung ulang dengan tarif Pasal 17 dan PPh final yang telah disetor dikreditkan", D: "Tetap PPh final pada 2027 karena jangka waktu 7 tahun sejak terdaftar belum berakhir" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Batas Rp4,8 miliar diuji atas peredaran bruto tahun sebelumnya; bila terlampaui dalam tahun berjalan, tarif 0,5% tetap dipakai sampai akhir tahun pajak itu, dan tahun berikutnya memakai tarif umum. Jangka waktu 7 tahun bagi OP sudah dihapus PP 20/2026 dan, kalaupun ada, tidak mengalahkan batas peredaran bruto.",
        jejakHitung: [],
        mengapaSalah: { A: "Peralihan tidak terjadi di tengah tahun pada bulan batas terlampaui", C: "PPh final yang sudah disetor tidak dihitung ulang dan tidak dikreditkan", D: "Jangka waktu tidak menyelamatkan WP yang peredaran bruto tahun sebelumnya melebihi Rp4,8 miliar" },
        jebakan: "Bulan terlampauinya batas sering dikira bulan peralihan rezim."
      },
      dasarHukum: [ { pasal: "PP 55/2022 Pasal 57 dan 58 s.t.d.d. PP 20/2026 (batas peredaran bruto)", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Ketentuan 'tetap 0,5% sampai akhir tahun pajak' berasal dari PP 23/2018 dan PP 55/2022 sebagaimana dikutip sumber sekunder; nomor pasal setelah PP 20/2026 perlu dicek ke teks resmi."
    },
    {
      id: "A1-050", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Pada Oktober 2026 empat Wajib Pajak baru yang belum pernah memakai PPh final UMKM, dengan peredaran bruto di bawah Rp1 miliar, ingin memanfaatkan tarif 0,5%. Yang DAPAT memanfaatkannya menurut PP 55/2022 s.t.d.d. PP 20/2026 adalah ...",
      kataKualifikasi: ["dapat"],
      opsi: { A: "CV Sumber Rejeki yang didirikan Mei 2026", B: "Notaris orang pribadi atas honorarium jasa kenotariatan", C: "PT Karya Bersama yang didirikan dua pemegang saham pada Juni 2026", D: "Ibu Wati, orang pribadi penjual pakaian daring" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Sejak PP 20/2026 penerima baru PPh final UMKM hanya OP, PT perorangan yang didirikan 1 orang, dan koperasi; jasa pekerjaan bebas dikecualikan. Penjual pakaian daring adalah usaha dagang OP.",
        jejakHitung: [],
        mengapaSalah: { A: "CV baru tidak lagi dapat memakai PPh final UMKM sejak PP 20/2026 (sebelumnya boleh 4 tahun)", B: "Jasa sehubungan pekerjaan bebas seperti notaris dikecualikan", C: "PT dengan dua pemegang saham bukan PT perorangan yang didirikan 1 orang" },
        jebakan: "Peserta yang belajar dari materi PP 55/2022 versi awal akan menganggap CV dan PT masih boleh."
      },
      dasarHukum: [ { pasal: "PP 55/2022 Pasal 56 dan 57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-051", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Ibu Kirana (OP) pada Tahun Pajak 2026 memperoleh peredaran bruto toko daring di Indonesia Rp3,9 miliar, imbalan jasa desain grafis lepas (pekerjaan bebas) Rp700 juta, dan penghasilan dari penjualan karya digital melalui platform luar negeri Rp400 juta. Untuk menentukan apakah toko daringnya masih boleh memakai PPh final 0,5% pada Tahun Pajak 2027, kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Boleh, karena yang diuji hanya peredaran bruto usaha dalam negeri Rp3,9 miliar", B: "Boleh, karena penghasilan luar negeri tidak dihitung sehingga totalnya Rp4,6 miliar", C: "Tidak boleh, karena peredaran bruto yang diuji (usaha + pekerjaan bebas + luar negeri) Rp5,0 miliar melebihi Rp4,8 miliar", D: "Boleh untuk toko daring, sedangkan jasa desain dikenai tarif Pasal 17, karena batas diuji per jenis kegiatan" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PP 20/2026 menguji batas Rp4,8 miliar dari akumulasi penghasilan usaha dan jasa pekerjaan bebas ditambah seluruh penghasilan dari luar negeri: Rp3,9 + Rp0,7 + Rp0,4 miliar = Rp5,0 miliar.",
        jejakHitung: [ ["Usaha toko daring", "Rp3,9 miliar"], ["Jasa pekerjaan bebas", "Rp0,7 miliar"], ["Penghasilan luar negeri", "Rp0,4 miliar"], ["Total diuji", "Rp5,0 miliar > Rp4,8 miliar"] ],
        mengapaSalah: { A: "Itu cara uji sebelum PP 20/2026", B: "PP 20/2026 justru menambahkan seluruh penghasilan dari luar negeri", D: "Batas tidak diuji per jenis kegiatan; tujuannya mencegah pemecahan penghasilan" },
        jebakan: "Masing-masing komponen di bawah Rp4,8 miliar, tetapi jumlahnya melampaui."
      },
      dasarHukum: [ { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 (penghitungan peredaran bruto dan anti pemecahan usaha)", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-052", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Bu Ani (OP) menjalankan usaha katering rumahan dengan peredaran bruto sekitar Rp350 juta setahun dan memakai PPh final UMKM. PT Sentosa, pelanggan barunya, berencana memotong PPh atas setiap pembayaran. Agar pembayaran itu tidak dipotong PPh, langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan Surat Keterangan Bebas pemotongan PPh Pasal 23 ke KPP", B: "Tidak perlu melakukan apa pun karena pemotong otomatis mengetahui omzet Bu Ani dari Coretax", C: "Menyerahkan surat pernyataan kepada PT Sentosa bahwa peredaran bruto Bu Ani belum melebihi Rp500 juta dalam tahun pajak berjalan", D: "Meminta PT Sentosa memotong PPh Pasal 23 2% agar dapat dikreditkan di SPT Tahunan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "WP OP PPh final UMKM yang peredaran brutonya belum melebihi Rp500 juta menyerahkan surat pernyataan kepada pemotong/pemungut agar tidak dipotong (PMK 164/2023).",
        jejakHitung: [],
        mengapaSalah: { A: "SKB PPh 23 adalah mekanisme lain; bagi WP UMKM final dokumennya surat pernyataan/Surat Keterangan", B: "Pemotong memerlukan dokumen dari WP sebagai dasar tidak memotong", D: "Penghasilan Bu Ani berada dalam rezim PPh final, bukan PPh 23 yang dikreditkan" },
        jebakan: "Katering biasanya objek PPh 23 2%, tetapi status WP UMKM final mengubah mekanismenya."
      },
      dasarHukum: [ { pasal: "PP 55/2022 Pasal 56–60 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "PMK 164/2023 (surat pernyataan peredaran bruto ≤ Rp500 juta)" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-053", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 3,
      formulirRef: "1770S.l1.3",
      stem: "Tuan Aldo Pratama (K/1: istri tidak bekerja, satu anak; ber-NPWP) adalah pegawai tetap PT Lintas Data. Pada Maret 2026 ia menyusun SPT Tahunan PPh OP Tahun Pajak 2025 di Coretax dengan data: (1) BPA1 PT Lintas Data: penghasilan neto Rp96.000.000, PPh 21 Rp1.650.000; (2) bunga deposito Rp8.000.000 yang telah dipotong PPh final Rp1.600.000; (3) hibah uang Rp50.000.000 dari ayah kandungnya, tanpa hubungan usaha; (4) honorarium sebagai juri lomba dari PT Kreasi Rp10.000.000 dengan bukti potong BP21 (PPh 21 bukan pegawai Rp250.000). Tidak ada zakat. Pelaporan dan status SPT yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (4) sebagai penghasilan neto dengan kredit PPh 21 Rp1.650.000 dan Rp250.000; (2) final tanpa kredit; (3) bukan objek pajak; SPT kurang bayar Rp250.000", B: "(1) dan (4) sebagai penghasilan neto; (2) digabung ke penghasilan neto dan PPh final Rp1.600.000 ikut dikreditkan; (3) bukan objek; SPT lebih bayar Rp950.000", C: "(1) sebagai penghasilan neto; (4) pada bagian penghasilan final karena PPh 21 bukan pegawai sudah dipotong; (2) final; (3) bukan objek; SPT nihil", D: "(1) dan (4) sebagai penghasilan neto dengan kredit PPh 21; (2) final; (3) digabung sebagai penghasilan lain karena berupa uang tunai; SPT kurang bayar Rp6.050.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Gaji (BPA1) dan honorarium juri adalah penghasilan non-final yang digabung; PPh 21 atas keduanya menjadi kredit. Bunga deposito dilaporkan pada bagian penghasilan final tanpa kredit, dan hibah dari ayah kandung dilaporkan sebagai penghasilan yang bukan objek. Karena PPh 21 bukan pegawai hanya dihitung dari 50% bruto, SPT menjadi kurang bayar Rp250.000.",
        jejakHitung: [ ["Neto pekerjaan (BPA1) + honorarium juri", "Rp106.000.000"], ["− PTKP K/1", "Rp63.000.000"], ["PKP", "Rp43.000.000"], ["PPh terutang 5% × Rp43.000.000", "Rp2.150.000"], ["Kredit PPh 21 (Rp1.650.000 + Rp250.000)", "Rp1.900.000"], ["Bunga deposito (final) dan hibah ayah (bukan objek)", "dilaporkan, tidak masuk PKP"], ["Status SPT", "kurang bayar Rp250.000"] ],
        mengapaSalah: { B: "Bunga deposito dikenai PPh final: tidak digabung dan PPh-nya tidak dapat dikreditkan (PKP Rp51 juta, kredit Rp3,5 juta)", C: "PPh 21 bukan pegawai tidak bersifat final; honorarium digabung dan PPh 21-nya menjadi kredit", D: "Hibah dari keluarga sedarah garis lurus satu derajat tanpa hubungan usaha bukan objek PPh (Pasal 4 ayat (3) huruf a angka 2), walaupun berupa uang; tetap dilaporkan sebagai penghasilan bukan objek" },
        jebakan: "Pegawai yang punya honorarium sampingan sering kurang bayar karena PPh 21 bukan pegawai hanya memakai 50% bruto."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1), (2), dan (3) huruf a angka 2 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 28 ayat (1) UU PPh; PMK 168/2023 (PPh 21 bukan pegawai)", berlakuSejak: "2024-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Tahunan OP dan bukti potong di Coretax)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-054", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Tuan Rendra berhenti bekerja pada Juni 2025 dan setelah itu menerima honorarium yang dipotong PPh 21 bukan pegawai, sehingga SPT Tahunan PPh OP Tahun Pajak 2025-nya lebih bayar Rp2.400.000. Ia baru menyampaikan SPT itu pada 5 Mei 2026 tanpa pemberitahuan perpanjangan dan meminta kelebihan dikembalikan. Konsekuensi yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dikenai denda Rp100.000 ditambah bunga 2 bulan atas Rp2.400.000", B: "Tidak dikenai sanksi apa pun karena SPT berstatus lebih bayar", C: "Dikenai denda Rp100.000, tanpa bunga; kelebihan dikembalikan setelah diperhitungkan dengan utang pajak", D: "SPT dianggap tidak disampaikan karena SPT lebih bayar yang terlambat tidak dapat diproses" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Denda Pasal 7 ayat (1) dikenakan atas keterlambatan penyampaian SPT apa pun statusnya. Bunga hanya timbul bila ada pajak yang terlambat dibayar. Kelebihan pembayaran dikembalikan setelah diperhitungkan dengan utang pajak, termasuk denda keterlambatan tersebut.",
        jejakHitung: [ ["Batas SPT", "31 Maret 2026"], ["Disampaikan", "5 Mei 2026 (terlambat)"], ["Denda Pasal 7 ayat (1)", "Rp100.000"], ["Bunga", "tidak ada (tidak ada kurang bayar)"] ],
        mengapaSalah: { A: "Bunga dikenakan atas pajak yang kurang/terlambat dibayar, bukan atas lebih bayar", B: "Status lebih bayar tidak menghapus denda keterlambatan penyampaian", D: "SPT lebih bayar baru dianggap tidak disampaikan bila disampaikan lewat 3 tahun setelah berakhirnya tahun pajak dan WP telah ditegur (Pasal 3 ayat (7) UU KUP)" },
        jebakan: "Status lebih bayar tidak membebaskan dari denda keterlambatan."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (7) dan Pasal 11 ayat (1) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-055", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Ir. Joko (pengusaha distribusi alat kesehatan orang pribadi, menyelenggarakan pembukuan) memperkirakan laporan keuangan 2025-nya belum selesai diaudit sampai akhir Maret 2026. Ia ingin memperpanjang batas penyampaian SPT Tahunan PPh OP Tahun Pajak 2025. Prosedur dan jangka waktu perpanjangan paling lama yang benar menurut Pasal 3 UU KUP adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "Menyampaikan pemberitahuan sebelum 31 Maret 2026; perpanjangan paling lama 4 bulan sampai 31 Juli 2026", B: "Pemberitahuan boleh disampaikan setelah 31 Maret 2026 selama belum menerima Surat Teguran; perpanjangan paling lama 2 bulan", C: "Menyampaikan pemberitahuan perpanjangan sebelum 31 Maret 2026, disertai penghitungan sementara PPh terutang dan bukti pelunasan kekurangan pajak (bila ada); perpanjangan paling lama 2 bulan", D: "Menyampaikan pemberitahuan sebelum 31 Maret 2026 tanpa perlu melunasi kekurangan pajak, karena pelunasan dilakukan bersama SPT definitif" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Perpanjangan paling lama 2 bulan dengan pemberitahuan tertulis/elektronik sebelum batas waktu, disertai penghitungan sementara dan bukti pelunasan kekurangan pajak menurut penghitungan sementara; bila penghitungan sementara kurang, selisihnya dikenai bunga Pasal 19 ayat (3).",
        jejakHitung: [],
        mengapaSalah: { A: "Perpanjangan paling lama 2 bulan, bukan 4 bulan", B: "Pemberitahuan harus disampaikan sebelum batas waktu penyampaian SPT berakhir", D: "Kekurangan pajak menurut penghitungan sementara harus dilunasi dan buktinya dilampirkan" },
        jebakan: "Perpanjangan menunda pelaporan, bukan menunda pelunasan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (4) dan (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 19 ayat (3) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Rincian Pasal 3 ayat (4)–(5) UU KUP bertanda ◐ dalam riset (cuplikan teks tidak ditemukan); cek pula tata cara pemberitahuan perpanjangan di Coretax menurut PMK 81/2024."
    },
    {
      id: "A1-056", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2,
      formulirRef: "1770.l4.1",
      stem: "Pada Agustus 2026 Ibu Sekar membeli rumah tinggal seharga Rp1.200.000.000 dengan uang muka Rp300.000.000 dan KPR Rp900.000.000; sisa pokok KPR pada 31 Desember 2026 Rp850.000.000. NJOP rumah itu pada 2026 Rp950.000.000. Pelaporan yang tepat dalam SPT Tahunan 2026 Ibu Sekar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rumah dilaporkan sebesar Rp350.000.000 (harga perolehan dikurangi sisa KPR) dan utang tidak perlu dicantumkan", B: "Rumah dilaporkan pada daftar harta sebesar harga perolehan Rp1.200.000.000 dan sisa pokok KPR Rp850.000.000 pada daftar utang", C: "Rumah dilaporkan sebesar NJOP Rp950.000.000 dan sisa KPR Rp850.000.000 pada daftar utang", D: "Hanya uang muka Rp300.000.000 dilaporkan sebagai harta karena rumah belum lunas" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Harta dilaporkan sebesar harga perolehan, sedangkan utang dilaporkan terpisah sebesar sisa pokok pada akhir tahun; keduanya tidak saling dikompensasikan.",
        jejakHitung: [ ["Daftar harta: rumah (harga perolehan)", "Rp1.200.000.000"], ["Daftar utang: KPR (sisa pokok 31 Des 2026)", "Rp850.000.000"] ],
        mengapaSalah: { A: "Harta dan utang tidak dinetokan", C: "NJOP adalah dasar PBB, bukan nilai pelaporan harta di SPT", D: "Kepemilikan beralih saat pembelian walaupun dibiayai KPR; seluruh harga perolehan dilaporkan" },
        jebakan: "Data NJOP sengaja disajikan sebagai pengecoh."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-11/PJ/2025 (formulir dan petunjuk SPT Tahunan OP)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Prinsip harga perolehan untuk daftar harta berasal dari petunjuk pengisian SPT OP sebelum Coretax; petunjuk pengisian lampiran Coretax (PER-11/PJ/2025) belum dibaca langsung."
    },
    {
      id: "A1-057", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "Ibu Rani menyampaikan SPT Tahunan 2025 pada 20 Maret 2026 dengan PKP Rp140.000.000 dan status nihil. Pada Juni 2026, sebelum ada pemeriksaan, ia menemukan honorarium Rp20.000.000 (non-final) yang belum dilaporkan beserta bukti potong PPh 21 bukan pegawai Rp500.000 (5% × 50% × Rp20.000.000) atas honorarium itu. Ia menyampaikan SPT pembetulan dan melunasi kekurangannya pada 15 Juni 2026. Anggap tarif bunga per bulan menurut KMK untuk sanksi dengan uplift 5% sebesar 1,10%. Sanksi bunga Pasal 8 ayat (2) UU KUP atas pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp82.500", B: "Rp99.000", C: "Rp55.000", D: "Rp182.500" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tambahan PKP Rp20 juta masih di lapisan 15% (PKP baru Rp160 juta), sehingga tambahan PPh Rp3 juta; dikurangi kredit PPh 21 bukan pegawai Rp500 ribu, kurang bayar Rp2,5 juta. Bunga dihitung sejak berakhirnya batas waktu SPT (31 Maret) sampai 15 Juni = 2 bulan 15 hari, dibulatkan 3 bulan.",
        jejakHitung: [ ["Tambahan PPh 15% × Rp20.000.000", "Rp3.000.000"], ["− Kredit PPh 21 bukan pegawai (5% × 50% × Rp20.000.000)", "Rp500.000"], ["Kurang bayar akibat pembetulan", "Rp2.500.000"], ["31 Mar–15 Jun 2026 (2 bulan 15 hari)", "3 bulan"], ["Bunga = Rp2.500.000 × 1,10% × 3", "Rp82.500"] ],
        mengapaSalah: { B: "Menghitung bunga atas tambahan PPh Rp3.000.000 tanpa mengurangkan kredit PPh 21", C: "Membulatkan masa ke bawah menjadi 2 bulan; bagian bulan dihitung penuh", D: "Menambahkan denda Rp100.000 seolah SPT terlambat; SPT awal disampaikan tepat waktu" },
        jebakan: "Pembetulan sukarela hanya dikenai bunga Pasal 8 ayat (2), bukan denda Pasal 7."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) dan (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (tarif bunga bulanan)" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-058", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Sebuah organisasi internasional yang ditetapkan Menteri Keuangan, dengan Indonesia sebagai anggotanya, membuka kantor regional di Jakarta pada 2026. Kantor itu hanya memberikan pinjaman kepada pemerintah dari iuran anggota. Kepala kantornya warga negara Kanada, sedangkan staf administrasinya warga negara Indonesia yang digaji organisasi tersebut. Pernyataan yang PALING TEPAT tentang status subjek pajak pihak-pihak itu adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Seluruh pihak, termasuk staf WNI, dikecualikan karena penghasilannya dibayar oleh organisasi internasional", B: "Organisasi dikecualikan, demikian pula kepala kantor yang bukan WNI tanpa penghasilan lain dari Indonesia; staf WNI tetap subjek pajak dalam negeri", C: "Organisasi internasional apa pun yang berkantor di Indonesia otomatis bukan subjek pajak, walaupun menjalankan kegiatan usaha", D: "Kepala kantor tetap subjek pajak dalam negeri karena berada di Indonesia lebih dari 183 hari, meskipun organisasinya dikecualikan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf c dan d UU PPh mengecualikan organisasi internasional yang ditetapkan Menteri Keuangan (Indonesia menjadi anggota dan tidak berusaha selain memberi pinjaman kepada pemerintah dari iuran anggota) serta pejabat perwakilannya yang bukan WNI dan tidak memperoleh penghasilan lain dari Indonesia. Staf WNI tidak termasuk pengecualian.",
        jejakHitung: [],
        mengapaSalah: { A: "Pengecualian bagi pejabat mensyaratkan bukan WNI; sumber pembayaran gaji tidak menentukan", C: "Organisasi internasional dikecualikan hanya bila ditetapkan Menteri Keuangan, Indonesia menjadi anggota, dan tidak menjalankan usaha", D: "Pasal 3 adalah ketentuan khusus yang mengecualikan pejabat yang memenuhi syarat terlepas dari lamanya berada di Indonesia" },
        jebakan: "Kata 'staf' WNI di organisasi internasional sering dianggap ikut dikecualikan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf c dan d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (2) UU PPh (penetapan organisasi oleh Menteri Keuangan)", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-059", topik: "A1.2", kasusId: "V-A1-04", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Data untuk soal ini dan dua soal berikutnya: Pak Bagas (status PH dengan Bu Laila, dua anak kandung) adalah pegawai tetap PT Andalan dengan neto BPA1 Rp240.000.000 sekaligus pemilik kafe (pembukuan, peredaran bruto di atas Rp4,8 miliar) dengan neto fiskal 2026 Rp240.000.000. Pada 2026 ia menjual (a) saham PT Sinar Tbk di Bursa Efek Indonesia senilai Rp500.000.000 yang dibeli Rp350.000.000, dan (b) saham PT Kopi Nusantara (perusahaan tertutup) kepada temannya Rp300.000.000 yang dibeli Rp180.000.000. Perlakuan PPh atas kedua penjualan saham itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keuntungan (a) Rp150.000.000 dan (b) Rp120.000.000 seluruhnya digabung dan dikenai tarif Pasal 17", B: "(a) PPh final 0,1% × Rp500.000.000 = Rp500.000 dan tidak digabung; (b) keuntungan Rp120.000.000 digabung dan dikenai tarif Pasal 17", C: "(a) dan (b) sama-sama dikenai PPh final 0,1% dari nilai penjualan: Rp500.000 dan Rp300.000", D: "(a) PPh final 0,1% × keuntungan Rp150.000.000 = Rp150.000; (b) keuntungan Rp120.000.000 digabung" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penjualan saham di bursa dikenai PPh final 0,1% dari nilai transaksi (bukan dari keuntungan) dan tidak digabung. Penjualan saham perusahaan tertutup di luar bursa menghasilkan keuntungan pengalihan harta (Pasal 4 ayat (1) huruf d) yang tidak final dan digabung ke PKP.",
        jejakHitung: [ ["(a) Saham di bursa: 0,1% × Rp500.000.000", "Rp500.000 (final)"], ["(b) Keuntungan saham non-bursa: Rp300 juta − Rp180 juta", "Rp120.000.000 (digabung)"] ],
        mengapaSalah: { A: "Keuntungan saham di bursa tidak digabung karena transaksinya sudah dikenai PPh final", C: "Tarif final 0,1% hanya untuk transaksi di bursa efek", D: "PPh final 0,1% dihitung dari nilai transaksi penjualan, bukan dari keuntungannya" },
        jebakan: "Bursa: final atas nilai jual. Non-bursa: keuntungan digabung."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (2) huruf c UU PPh; PP 41/1994 s.t.d.d. PP 14/1997", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-060", topik: "A1.6", kasusId: "V-A1-04", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data Pak Bagas (status PH dengan Bu Laila, dua anak kandung): penghasilan neto Pak Bagas 2026 terdiri dari neto BPA1 Rp240.000.000, neto kafe Rp240.000.000, dan keuntungan saham non-bursa Rp120.000.000; penjualan saham di bursa telah dikenai PPh final. Bu Laila pegawai tetap bank dengan neto BPA1 Rp200.000.000. Tidak ada zakat atau kompensasi kerugian. PPh terutang yang menjadi bagian Pak Bagas Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp103.750.000", B: "Rp73.775.000", C: "Rp122.812.500", D: "Rp110.662.500" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Status PH: neto suami Rp600 juta dan istri Rp200 juta digabung, PTKP K/I/2, PPh gabungan dibagi sebanding neto; bagian Pak Bagas 600/800 = 75%.",
        jejakHitung: [ ["Neto Pak Bagas (240 + 240 + 120 juta)", "Rp600.000.000"], ["Neto gabungan (+ Rp200 juta)", "Rp800.000.000"], ["PTKP K/I/2", "Rp121.500.000"], ["PKP gabungan", "Rp678.500.000"], ["PPh gabungan = Rp94.000.000 + 30% × Rp178.500.000", "Rp147.550.000"], ["Bagian Pak Bagas = 600/800 × Rp147.550.000", "Rp110.662.500"] ],
        mengapaSalah: { A: "Menghitung Pak Bagas terpisah dengan PTKP K/2 tanpa penggabungan, seperti status HB", B: "Membagi PPh gabungan sama rata 50:50", C: "Menggabungkan penghasilan tetapi lupa menambah PTKP istri Rp54.000.000" },
        jebakan: "Pada PH, PTKP istri ikut dalam PTKP gabungan dan pembagian memakai perbandingan neto."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) huruf b dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A1-061", topik: "A1.8", kasusId: "V-A1-04", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data Pak Bagas (status PH): bagian PPh terutang Pak Bagas 2026 Rp110.662.500. Bukti yang dimilikinya: BPA1 dari PT Andalan dengan PPh 21 Rp19.875.000; bukti setor PPh 25 Rp5.000.000 × 12 bulan; PPh final 0,1% atas penjualan saham di bursa Rp500.000. Bu Laila memiliki BPA1 dengan PPh 21 Rp15.900.000. PPh Pasal 29 yang harus dilunasi Pak Bagas sebelum menyampaikan SPT 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp30.787.500", B: "Rp30.287.500", C: "Rp90.787.500", D: "Rp14.887.500" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pada status PH masing-masing suami dan istri menyampaikan SPT sendiri dan mengkreditkan pajak yang dipotong atas penghasilannya sendiri. Kredit Pak Bagas: PPh 21 miliknya dan PPh 25; PPh final saham tidak dikreditkan, dan PPh 21 Bu Laila dikreditkan di SPT Bu Laila.",
        jejakHitung: [ ["Bagian PPh terutang Pak Bagas", "Rp110.662.500"], ["− PPh 21 (BPA1 PT Andalan)", "Rp19.875.000"], ["− PPh 25 (12 × Rp5.000.000)", "Rp60.000.000"], ["PPh 29 Pak Bagas", "Rp30.787.500"] ],
        mengapaSalah: { B: "Ikut mengkreditkan PPh final penjualan saham di bursa", C: "Lupa mengkreditkan PPh 25 yang telah disetor", D: "Ikut mengkreditkan PPh 21 Bu Laila, padahal pada status PH kredit itu milik SPT istri" },
        jebakan: "PH berarti dua SPT: PPh dibagi proporsional, kredit pajak mengikuti pemilik bukti potong."
      },
      dasarHukum: [ { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 8 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-062", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Mr. Pierre Laurent (warga negara Prancis) adalah konsul pada Konsulat Jenderal Prancis di Surabaya; Prancis memberikan perlakuan timbal balik kepada Indonesia. Sejak Februari 2026, di luar jabatannya, ia juga menerima honorarium mengajar bahasa Prancis dari sebuah universitas swasta di Surabaya. Sopirnya, Mr. Jean Morel (warga negara Prancis), bekerja pada dan tinggal bersama Mr. Pierre serta tidak menerima penghasilan lain di Indonesia. Pernyataan yang PALING TEPAT tentang status subjek pajak keduanya menurut Pasal 3 UU PPh adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Mr. Pierre dan Mr. Jean sama-sama dikecualikan dari subjek pajak karena keduanya bukan WNI, bertugas pada konsulat, dan Prancis memberikan perlakuan timbal balik",
        B: "Mr. Pierre tidak lagi memenuhi syarat pengecualian karena menerima penghasilan lain di Indonesia di luar jabatannya, sedangkan Mr. Jean tetap dikecualikan karena bukan WNI, bekerja pada dan tinggal bersama pejabat konsulat, serta tidak menerima penghasilan lain di Indonesia",
        C: "Mr. Pierre tidak lagi memenuhi syarat pengecualian karena menerima penghasilan lain di Indonesia di luar jabatannya, dan karena itu Mr. Jean yang diperbantukan kepadanya ikut menjadi subjek pajak",
        D: "Mr. Pierre dan Mr. Jean sama-sama dikecualikan dari subjek pajak sepanjang masing-masing berada di Indonesia tidak lebih dari 183 hari dalam jangka waktu 12 bulan"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf b UU PPh mengecualikan pejabat perwakilan diplomatik/konsulat dan orang yang diperbantukan kepada mereka yang bekerja pada dan tinggal bersama mereka, dengan syarat bukan WNI, di Indonesia tidak menerima penghasilan lain di luar jabatan atau pekerjaannya, dan ada perlakuan timbal balik. Syarat diuji pada masing-masing orang: honorarium mengajar menggugurkan pengecualian Mr. Pierre, sedangkan Mr. Jean tetap memenuhi semua syarat.",
        jejakHitung: [ ["Syarat Pasal 3 ayat (1) huruf b", "bukan WNI + tanpa penghasilan lain di Indonesia + timbal balik"], ["Mr. Pierre: honorarium universitas", "syarat 'tanpa penghasilan lain' gugur → subjek pajak"], ["Mr. Jean: WNA, tinggal bersama, tanpa penghasilan lain", "tetap dikecualikan"] ],
        mengapaSalah: { A: "Mengabaikan syarat 'tidak menerima atau memperoleh penghasilan lain di luar jabatannya'; honorarium mengajar adalah penghasilan lain di Indonesia", C: "Syarat pengecualian diuji pada diri masing-masing orang; status Mr. Jean tidak ikut gugur karena atasannya memperoleh penghasilan lain", D: "Pengecualian Pasal 3 tidak memakai uji 183 hari; uji itu dipakai Pasal 2 untuk membedakan subjek pajak dalam dan luar negeri" },
        jebakan: "Frasa 'perlakuan timbal balik' membuat peserta lupa bahwa syarat 'tanpa penghasilan lain di Indonesia' juga harus dipenuhi."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-063", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Data Tahun Pajak 2026 di Jakarta: (1) Kedutaan Besar Negara Pandora sebagai kantor perwakilan negara asing; (2) Ms. Anna Berg (warga negara Pandora), Sekretaris Pertama kedutaan yang tidak menerima penghasilan lain di Indonesia, dan Pandora memberikan perlakuan timbal balik; (3) Rina Lestari (WNI), penerjemah yang bekerja pada dan tinggal bersama Duta Besar Pandora; (4) Mr. Kofi Mensah (warga negara Ghana), kepala perwakilan organisasi internasional X yang ditetapkan Menteri Keuangan (Indonesia menjadi anggota dan organisasi itu hanya memberi pinjaman kepada pemerintah dari iuran anggota), yang juga menyewakan apartemen pribadinya di Jakarta kepada sebuah perusahaan; (5) Mr. Lars Olsen (warga negara Norwegia), pejabat perwakilan organisasi internasional X tanpa penghasilan lain di Indonesia. Pihak yang TETAP merupakan subjek pajak Indonesia adalah ...",
      kataKualifikasi: ["tetap"],
      opsi: { A: "(3) saja", B: "(3) dan (4)", C: "(3), (4), dan (5)", D: "(1), (3), dan (4)" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kantor perwakilan negara asing (1) dikecualikan. Staf diplomatik WNA tanpa penghasilan lain dengan perlakuan timbal balik (2) dikecualikan. Penerjemah WNI (3) tetap subjek pajak karena pengecualian mensyaratkan bukan WNI. Pejabat organisasi internasional dikecualikan hanya bila bukan WNI dan tidak menjalankan usaha, kegiatan, atau pekerjaan lain untuk memperoleh penghasilan dari Indonesia: Mr. Kofi (4) menyewakan apartemen sehingga tetap subjek pajak, sedangkan Mr. Lars (5) dikecualikan.",
        jejakHitung: [ ["(1) Kantor perwakilan negara asing", "dikecualikan (Pasal 3 ayat (1) huruf a)"], ["(2) Staf diplomatik WNA, tanpa penghasilan lain, timbal balik", "dikecualikan (huruf b)"], ["(3) Penerjemah WNI yang tinggal bersama Dubes", "subjek pajak"], ["(4) Pejabat organisasi internasional yang menyewakan apartemen", "subjek pajak (syarat huruf d gugur)"], ["(5) Pejabat organisasi internasional tanpa penghasilan lain", "dikecualikan (huruf d)"] ],
        mengapaSalah: { A: "Melewatkan syarat huruf d: pejabat organisasi internasional yang memperoleh penghasilan lain dari Indonesia (sewa apartemen) tidak dikecualikan", C: "Pejabat organisasi internasional yang ditetapkan Menteri Keuangan, bukan WNI, dan tanpa penghasilan lain dari Indonesia dikecualikan", D: "Kantor perwakilan negara asing dikecualikan dari subjek pajak oleh Pasal 3 ayat (1) huruf a" },
        jebakan: "Sewa apartemen pribadi yang tampak sepele adalah kegiatan lain untuk memperoleh penghasilan dari Indonesia yang menggugurkan pengecualian."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a, b, c, dan d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (2) UU PPh (penetapan organisasi internasional oleh Menteri Keuangan)", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-064", topik: "A1.4", kasusId: "V-A1-05", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Data untuk soal ini dan dua soal berikutnya: Pak Darma Setiawan dan Bu Ayu Pertiwi menikah tanpa perjanjian pisah harta, tetapi Bu Ayu memilih menjalankan hak dan kewajiban perpajakannya sendiri (status MT); mereka menanggung tiga anak kandung. Pada 2026 Pak Darma (1) pegawai tetap PT Sentra Logistik dengan penghasilan neto menurut BPA1 Rp180.000.000; (2) memiliki bengkel mobil di Sidoarjo dengan peredaran bruto Rp900.000.000 — sejak 2024 ia telah memberitahukan memilih tarif umum (tidak memakai PPh final UMKM) dan pada 20 Januari 2026 memberitahukan penggunaan NPPN dengan persentase norma (diberikan) 20%; (3) menjual saham PT Arunika Tbk di Bursa Efek Indonesia Rp400.000.000 (harga perolehan Rp250.000.000) yang telah dikenai PPh final Rp400.000; (4) menjual saham PT Rasa Bumi (perusahaan tertutup) kepada rekannya Rp250.000.000 (harga perolehan Rp160.000.000). Penghasilan neto Pak Darma 2026 yang digabungkan dengan penghasilan neto Bu Ayu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp450.000.000", B: "Rp449.600.000", C: "Rp360.000.000", D: "Rp600.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Neto Pak Darma = neto pekerjaan + neto bengkel menurut NPPN + keuntungan saham non-bursa. Penjualan saham di bursa dikenai PPh final 0,1% dari nilai transaksi sehingga keuntungannya tidak digabung.",
        jejakHitung: [ ["(1) Neto pekerjaan (BPA1)", "Rp180.000.000"], ["(2) Neto bengkel = 20% × Rp900.000.000", "Rp180.000.000"], ["(3) Saham di bursa", "PPh final 0,1% — tidak digabung"], ["(4) Keuntungan saham non-bursa = Rp250 juta − Rp160 juta", "Rp90.000.000"], ["Neto Pak Darma yang digabung", "Rp450.000.000"] ],
        mengapaSalah: { B: "Mengurangkan PPh final Rp400.000 dari neto; PPh bukan pengurang penghasilan dan PPh final saham berada di luar penghitungan tarif umum", C: "Menganggap keuntungan saham perusahaan tertutup ikut final seperti saham di bursa; di luar bursa keuntungannya objek Pasal 4 ayat (1) huruf d yang digabung", D: "Ikut menggabungkan keuntungan saham di bursa Rp150.000.000 yang sudah dikenai PPh final 0,1%" },
        jebakan: "Dua penjualan saham, dua rezim: bursa final atas nilai jual, non-bursa digabung atas keuntungannya."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) huruf d dan ayat (2) huruf c UU PPh; PP 41/1994 s.t.d.d. PP 14/1997", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 8 ayat (2) huruf c UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-065", topik: "A1.6", kasusId: "V-A1-05", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data Pak Darma Setiawan dan Bu Ayu Pertiwi (status MT, tiga anak kandung): penghasilan neto Pak Darma 2026 yang digabung Rp450.000.000 (pekerjaan, bengkel dengan NPPN, dan keuntungan saham non-bursa; penjualan saham di bursa telah dikenai PPh final). Bu Ayu menjalankan butik dengan peredaran bruto Rp5,2 miliar dan menyelenggarakan pembukuan; penghasilan neto fiskalnya Rp150.000.000. Tidak ada zakat atau kompensasi kerugian. PPh terutang yang menjadi bagian Bu Ayu Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp25.600.000", B: "Rp8.400.000", C: "Rp21.875.000", D: "Rp43.750.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Status MT diperlakukan seperti PH: neto suami dan istri digabung, PTKP memakai K/I/3, lalu PPh gabungan dibagi menurut perbandingan penghasilan neto (Pasal 8 ayat (2) huruf c dan ayat (3)).",
        jejakHitung: [ ["Neto gabungan Rp450 juta + Rp150 juta", "Rp600.000.000"], ["PTKP K/I/3 (54 + 4,5 + 3 × 4,5 + 54 juta)", "Rp126.000.000"], ["PKP gabungan", "Rp474.000.000"], ["PPh = Rp31.500.000 + 25% × Rp224.000.000", "Rp87.500.000"], ["Bagian Bu Ayu = 150/600 × Rp87.500.000", "Rp21.875.000"] ],
        mengapaSalah: { A: "Menggabung penghasilan tetapi memakai PTKP K/3 tanpa tambahan Rp54.000.000 untuk istri (PKP Rp528 juta, PPh Rp102,4 juta × 25%)", B: "Menghitung Bu Ayu terpisah dengan PTKP TK/0 seperti status HB", D: "Membagi PPh gabungan sama rata; Pasal 8 ayat (3) memakai perbandingan penghasilan neto" },
        jebakan: "MT tidak berarti terpisah: hitung dahulu PPh keluarga, baru dibagi sebanding neto."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) huruf c dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-066", topik: "A1.8", kasusId: "V-A1-05", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data Pak Darma Setiawan (status MT): bagian PPh terutang Pak Darma 2026 Rp65.625.000. Dokumen yang dimilikinya: BPA1 PT Sentra Logistik dengan PPh 21 Rp10.200.000; BPPU PPh Pasal 23 dari pelanggan badan atas jasa perawatan kendaraan di bengkelnya Rp6.000.000; bukti setor PPh 25 Rp2.000.000 × 12 bulan; PPh final 0,1% atas penjualan saham di bursa Rp400.000. Bu Ayu menyetor PPh 25 atas namanya sendiri Rp1.000.000 × 12 bulan. PPh Pasal 29 yang harus dilunasi Pak Darma sebelum menyampaikan SPT 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp25.025.000", B: "Rp13.425.000", C: "Rp31.425.000", D: "Rp25.425.000" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pada status MT tiap pasangan menyampaikan SPT sendiri dan mengkreditkan pajak atas namanya. Kredit Pak Darma: PPh 21 BPA1, PPh 23 atas jasa bengkel, dan PPh 25 yang ia setor; PPh final saham tidak dikreditkan dan PPh 25 Bu Ayu menjadi kredit di SPT Bu Ayu.",
        jejakHitung: [ ["Bagian PPh terutang Pak Darma (75% × Rp87.500.000)", "Rp65.625.000"], ["− PPh 21 (BPA1)", "Rp10.200.000"], ["− PPh 23 (BPPU jasa bengkel)", "Rp6.000.000"], ["− PPh 25 Pak Darma (12 × Rp2.000.000)", "Rp24.000.000"], ["PPh final saham bursa dan PPh 25 Bu Ayu", "tidak dikreditkan di SPT Pak Darma"], ["PPh Pasal 29", "Rp25.425.000"] ],
        mengapaSalah: { A: "Ikut mengkreditkan PPh final 0,1% atas penjualan saham di bursa", B: "Ikut mengkreditkan PPh 25 yang disetor Bu Ayu; pada status MT kredit itu milik SPT Bu Ayu", C: "Lupa mengkreditkan PPh 23 yang dipotong pelanggan badan; pengguna NPPN tetap mengkreditkan PPh 23" },
        jebakan: "Norma menggantikan biaya, bukan kredit pajak: bukti potong PPh 23 milik pengguna NPPN tetap dikreditkan."
      },
      dasarHukum: [ { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 8 ayat (2) huruf c dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-067", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "Tuan Hadi Gunawan menyampaikan SPT Tahunan PPh OP Tahun Pajak 2024 pada 25 Maret 2025 dengan status nihil. Pada September 2026 ia menyadari penghasilan sewa dua unit truk kepada CV Lancar belum dilaporkan, sehingga pembetulan akan menimbulkan kurang bayar. Sampai saat itu ia belum menerima surat pemberitahuan pemeriksaan maupun ketetapan pajak apa pun. Keempat pernyataan berikut hanya berbeda pada satu frasa. Pernyataan yang PALING TEPAT menurut Pasal 8 UU KUP s.t.d.t.d. UU 7/2021 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Tuan Hadi dapat membetulkan SPT 2024 atas kemauan sendiri selama Direktur Jenderal Pajak belum melakukan tindakan pemeriksaan, dan atas kurang bayarnya dikenai bunga dengan tarif per bulan (suku bunga acuan + 5%) ÷ 12 yang dihitung sejak tanggal penyampaian SPT pembetulan sampai dengan tanggal pembayaran, paling lama 24 bulan",
        B: "Tuan Hadi dapat membetulkan SPT 2024 atas kemauan sendiri selama Direktur Jenderal Pajak belum menerbitkan surat ketetapan pajak, dan atas kurang bayarnya dikenai bunga dengan tarif per bulan (suku bunga acuan + 5%) ÷ 12 yang dihitung sejak berakhirnya batas waktu penyampaian SPT sampai dengan tanggal pembayaran, paling lama 24 bulan",
        C: "Tuan Hadi dapat membetulkan SPT 2024 atas kemauan sendiri selama Direktur Jenderal Pajak belum melakukan tindakan pemeriksaan, dan atas kurang bayarnya dikenai bunga dengan tarif per bulan (suku bunga acuan + 5%) ÷ 12 yang dihitung sejak berakhirnya batas waktu penyampaian SPT sampai dengan tanggal pembayaran, paling lama 24 bulan",
        D: "Tuan Hadi dapat membetulkan SPT 2024 atas kemauan sendiri selama Direktur Jenderal Pajak belum melakukan tindakan pemeriksaan, dan atas kurang bayarnya dikenai bunga dengan tarif per bulan (suku bunga acuan + 10%) ÷ 12 yang dihitung sejak berakhirnya batas waktu penyampaian SPT sampai dengan tanggal pembayaran, paling lama 24 bulan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 8 ayat (1) membolehkan pembetulan atas kemauan sendiri selama DJP belum melakukan tindakan pemeriksaan. Pasal 8 ayat (2) mengenakan bunga atas kurang bayar akibat pembetulan SPT Tahunan dengan tarif KMK uplift 5% per bulan, dihitung sejak berakhirnya batas waktu penyampaian SPT (31 Maret 2025) sampai tanggal pembayaran, paling lama 24 bulan dan bagian bulan dihitung penuh.",
        jejakHitung: [ ["Syarat pembetulan (Pasal 8 ayat (1))", "DJP belum melakukan tindakan pemeriksaan"], ["Awal bunga (Pasal 8 ayat (2))", "berakhirnya batas waktu SPT: 31 Maret 2025"], ["Tarif", "(acuan + 5%) ÷ 12 per bulan, maksimal 24 bulan"], ["Uplift 10% (Pasal 8 ayat (5))", "hanya untuk pengungkapan ketidakbenaran saat pemeriksaan"] ],
        mengapaSalah: { A: "Bunga Pasal 8 ayat (2) dihitung sejak berakhirnya batas waktu penyampaian SPT, bukan sejak SPT pembetulan disampaikan", B: "Batas kesempatan pembetulan adalah dimulainya tindakan pemeriksaan, bukan terbitnya ketetapan; setelah pemeriksaan dimulai yang tersedia adalah pengungkapan ketidakbenaran Pasal 8 ayat (4)", D: "Uplift 10% milik Pasal 8 ayat (5) (pengungkapan ketidakbenaran pengisian SPT dalam pemeriksaan); pembetulan sukarela memakai uplift 5%" },
        jebakan: "Keempat kalimat tampak identik; titik ujinya ada pada pemicu (tindakan pemeriksaan vs ketetapan), titik awal bunga, dan besar uplift."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1), (2), (4), dan (5) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (tarif bunga bulanan)" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-068", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "Ibu Wening Prameswari (SPDN) menerima dividen tunai dari PT Gemilang Tbk (perusahaan dalam negeri) sebesar Rp300.000.000 pada Agustus 2026 dan berencana menginvestasikan sebagian di Indonesia. Konsultannya menyusun empat pernyataan yang hanya berbeda pada satu frasa. Pernyataan yang PALING TEPAT menurut Pasal 4 ayat (3) huruf f dan Pasal 17 ayat (2c) UU PPh s.t.d.t.d. UU 7/2021 serta PMK 18/PMK.03/2021 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Bagian dividen yang diinvestasikan di Indonesia paling lambat akhir bulan ketiga setelah Tahun Pajak 2026 berakhir dan ditahan paling sedikit 3 tahun pajak dikecualikan dari objek PPh; bagian yang tidak diinvestasikan dikenai PPh 10% yang bersifat final dan disetor sendiri; seluruh dividen tetap dilaporkan dalam SPT Tahunan 2026",
        B: "Bagian dividen yang diinvestasikan di Indonesia paling lambat akhir bulan keenam setelah Tahun Pajak 2026 berakhir dan ditahan paling sedikit 3 tahun pajak dikecualikan dari objek PPh; bagian yang tidak diinvestasikan dikenai PPh 10% yang bersifat final dan disetor sendiri; seluruh dividen tetap dilaporkan dalam SPT Tahunan 2026",
        C: "Bagian dividen yang diinvestasikan di Indonesia paling lambat akhir bulan ketiga setelah Tahun Pajak 2026 berakhir dan ditahan paling sedikit 3 tahun pajak dikecualikan dari objek PPh; bagian yang tidak diinvestasikan digabung dengan penghasilan lain dan dikenai tarif Pasal 17; seluruh dividen tetap dilaporkan dalam SPT Tahunan 2026",
        D: "Bagian dividen yang diinvestasikan di Indonesia paling lambat akhir bulan ketiga setelah Tahun Pajak 2026 berakhir dan ditahan paling sedikit 3 tahun pajak dikecualikan dari objek PPh; bagian yang tidak diinvestasikan dikenai PPh 10% yang bersifat final dan disetor sendiri; dividen yang diinvestasikan tidak perlu dilaporkan dalam SPT Tahunan 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dividen dalam negeri bagi OP dalam negeri dikecualikan dari objek sepanjang diinvestasikan di Indonesia (paling lambat akhir bulan ketiga setelah tahun pajak dividen diterima) dan ditahan paling sedikit 3 tahun pajak; bagian yang tidak diinvestasikan dikenai PPh final 10% yang disetor sendiri. Penghasilan bukan objek maupun final tetap dilaporkan dalam SPT.",
        jejakHitung: [ ["Batas waktu investasi", "akhir Maret 2027 (bulan ketiga setelah TP 2026)"], ["Jangka waktu investasi", "paling sedikit 3 tahun pajak"], ["Bagian tidak diinvestasikan", "PPh 10% final, disetor sendiri"], ["Pelaporan SPT 2026", "seluruh dividen dilaporkan (bukan objek dan/atau final)"] ],
        mengapaSalah: { B: "Batas investasi adalah akhir bulan ketiga, bukan keenam, setelah tahun pajak dividen diterima", C: "Pasal 17 ayat (2c) menetapkan PPh 10% yang final; dividen yang tidak diinvestasikan tidak digabung ke PKP", D: "Penghasilan yang dikecualikan dari objek tetap wajib dilaporkan agar SPT benar, lengkap, dan jelas" },
        jebakan: "Frasa yang berbeda sangat kecil (ketiga vs keenam, final vs Pasal 17, dilaporkan vs tidak) adalah titik ujinya."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (3) huruf f UU PPh (UU 11/2020 jo. UU 7/2021)", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 17 ayat (2c) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 18/PMK.03/2021 (tata cara investasi dividen)", berlakuSejak: "2021-02-17" }, { pasal: "Pasal 3 ayat (1) UU KUP", berlakuSejak: "2008-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-069", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 9 ayat (2) UU KUP: Kekurangan pajak yang terutang berdasarkan Surat Pemberitahuan Tahunan Pajak Penghasilan harus dibayar lunas sebelum Surat Pemberitahuan disampaikan. Pasal 9 ayat (2b) UU KUP (diringkas): pembayaran kekurangan pajak tersebut yang dilakukan setelah tanggal jatuh tempo penyampaian SPT dikenai sanksi bunga per bulan sesuai tarif yang ditetapkan Menteri Keuangan, dihitung dari berakhirnya batas waktu penyampaian SPT sampai dengan tanggal pembayaran.",
      stem: "Pada 18 Maret 2027 Ny. Sinta Maharani (pegawai tetap yang juga desainer lepas dengan NPPN) menyusun SPT Tahunan PPh OP Tahun Pajak 2026 di Coretax. Data BPA1 dari pemberi kerja dan BP21 dari klien badan telah terisi otomatis pada konsep SPT, dan hasil hitung menunjukkan PPh Pasal 29 kurang bayar Rp4.750.000. Berdasarkan kutipan tersebut dan PMK 81/2024, urutan langkah yang tepat agar SPT tersampaikan tepat waktu tanpa sanksi adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Buat konsep SPT Tahunan OP Tahun Pajak 2026 di menu SPT → periksa dan lengkapi lampiran (penghasilan, kredit pajak dari BPA1/BP21, harta, utang, anggota keluarga) → lunasi PPh Pasal 29 dengan kode billing atau saldo deposit hingga memperoleh NTPN → tandatangani secara elektronik (kode otorisasi DJP atau sertifikat elektronik), kirim, dan simpan Bukti Penerimaan Elektronik",
        B: "Buat konsep SPT Tahunan OP Tahun Pajak 2026 di menu SPT → periksa dan lengkapi lampiran → tandatangani secara elektronik dan kirim SPT berstatus kurang bayar untuk memperoleh Bukti Penerimaan Elektronik → lunasi PPh Pasal 29 paling lambat 30 April 2027 karena PPh 29 orang pribadi jatuh tempo satu bulan setelah SPT disampaikan",
        C: "Buat konsep SPT Tahunan OP Tahun Pajak 2026 di menu SPT → periksa dan lengkapi lampiran → tandatangani dan kirim SPT tanpa membayar → tunggu STP yang memuat pokok PPh Pasal 29 berikut bunganya, lalu bayar STP tersebut sebagai pelunasan",
        D: "Lunasi PPh Pasal 29 dengan kode billing → buat konsep SPT dan periksa lampiran → cetak SPT, tandatangani basah, dan kirim melalui pos ke KPP paling lambat 31 Maret 2027, karena SPT berstatus kurang bayar wajib disampaikan dalam bentuk kertas"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 9 ayat (2) UU KUP mewajibkan PPh 29 dilunasi sebelum SPT disampaikan. Di Coretax (PMK 81/2024) SPT disusun dari konsep, dilengkapi, lalu setelah PPh 29 dibayar dan NTPN terbit, SPT ditandatangani secara elektronik dan dikirim; Bukti Penerimaan Elektronik adalah tanda terimanya.",
        jejakHitung: [ ["Langkah 1", "buat konsep SPT Tahunan OP TP 2026"], ["Langkah 2", "periksa/lengkapi lampiran dan kredit pajak (BPA1, BP21)"], ["Langkah 3", "lunasi PPh 29 Rp4.750.000 → NTPN"], ["Langkah 4", "tanda tangan elektronik, kirim, simpan bukti penerimaan (paling lambat 31 Maret 2027)"] ],
        mengapaSalah: { B: "Tidak ada tenggat PPh 29 satu bulan setelah SPT; pelunasan wajib sebelum SPT disampaikan, dan pembayaran setelah 31 Maret 2027 dikenai bunga Pasal 9 ayat (2b)", C: "Membiarkan kurang bayar sampai ditagih STP melanggar Pasal 9 ayat (2) dan menimbulkan bunga", D: "Tidak ada kewajiban menyampaikan SPT kurang bayar dalam bentuk kertas; SPT Tahunan OP di Coretax disampaikan secara elektronik dengan tanda tangan elektronik" },
        jebakan: "Urutan 'bayar dahulu, baru kirim' adalah inti soal; opsi yang mengirim SPT lebih dahulu tampak praktis tetapi melanggar Pasal 9 ayat (2)."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2) dan (2b) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "PMK 81/2024 (SPT elektronik, akun WP, kode otorisasi/sertifikat elektronik)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Tahunan OP dan bukti potong)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Nama menu Coretax, mekanisme saldo deposit, dan istilah Bukti Penerimaan Elektronik mengikuti PMK 81/2024 dan panduan DJP sebagaimana dirangkum riset sekunder, belum dicek ke teks resmi; kaidah yang menentukan kunci (PPh 29 dilunasi sebelum SPT disampaikan) adalah teks Pasal 9 ayat (2) UU KUP yang stabil."
    },
    {
      id: "A1-070", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 25 ayat (1) UU PPh (diringkas): angsuran bulanan sama dengan PPh terutang menurut SPT Tahunan tahun pajak yang lalu dikurangi PPh yang dipotong (Pasal 21 dan 23), PPh yang dipungut (Pasal 22), dan PPh Pasal 24 yang boleh dikreditkan, dibagi 12. PER-11/PJ/2025 (parafrase): BPA2 adalah bukti potong PPh 21 tahunan bagi ASN; BP21 dipakai untuk PPh 21 selain pegawai tetap; BPPU dipakai untuk pemotongan/pemungutan PPh Pasal 4 ayat (2), 15, 22, dan 23 atas penerima dalam negeri.",
      stem: "Pak Yohanes Situmorang adalah guru ASN di Medan yang juga menyewakan satu truk dan satu kios. Menurut SPT Tahunan PPh OP Tahun Pajak 2026 yang ia sampaikan pada 20 Maret 2027, PPh terutang Rp21.600.000. Dokumen yang terekam di Coretax: BPA2 dari instansinya dengan PPh 21 Rp4.800.000; BP21 honorarium narasumber dari PT Aksara Media dengan PPh 21 Rp1.200.000; BPPU dari CV Angkut Jaya atas sewa truk dengan PPh Pasal 23 Rp2.400.000; BPPU dari PT Ritel Makmur atas sewa kios dengan PPh Pasal 4 ayat (2) Rp6.000.000; serta bukti setor PPh Pasal 25 tahun 2026 Rp7.200.000. Ia tidak memiliki penghasilan tidak teratur. Berdasarkan kutipan tersebut, angsuran PPh Pasal 25 per bulan tahun 2027 yang dihitung dari SPT 2026 itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp600.000", B: "Rp500.000", C: "Rp1.300.000", D: "Rp1.100.000" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya PPh tidak final yang dipotong/dipungut pihak lain (PPh 21 pada BPA2 dan BP21, PPh 23 pada BPPU sewa truk) yang mengurangi dasar angsuran. BPPU sewa kios memuat PPh Pasal 4 ayat (2) yang final, dan PPh 25 tahun berjalan tidak ikut dikurangkan.",
        jejakHitung: [ ["PPh terutang SPT 2026", "Rp21.600.000"], ["− PPh 21 (BPA2 Rp4.800.000 + BP21 Rp1.200.000)", "Rp6.000.000"], ["− PPh 23 (BPPU sewa truk)", "Rp2.400.000"], ["BPPU sewa kios (PPh 4 ayat (2) final) dan PPh 25 2026", "tidak dikurangkan"], ["Dasar angsuran", "Rp13.200.000"], ["÷ 12", "Rp1.100.000"] ],
        mengapaSalah: { A: "Menganggap semua BPPU kredit pajak; BPPU juga dipakai untuk PPh Pasal 4 ayat (2) final yang tidak mengurangi dasar angsuran", B: "Ikut mengurangkan PPh 25 yang disetor selama 2026; Pasal 25 ayat (1) tidak menyebut PPh 25", C: "Menganggap BPPU selalu memuat PPh final sehingga PPh 23 sewa truk tidak dikurangkan" },
        jebakan: "Kode dokumen yang sama (BPPU) dapat memuat pajak final maupun tidak final; yang menentukan adalah pasal PPh-nya, bukan nama bukti potongnya."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) huruf d dan Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 (BPA2, BP21, BPPU)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-071", topik: "A1.3", kasusId: "V-A1-06", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Data untuk soal ini dan soal berikutnya: Ibu Larasati Wibowo (janda cerai mati sejak 2022, menanggung dua anak kandung; ibu kandungnya ikut tinggal dan ditanggung sepenuhnya sejak Juli 2026) memiliki toko alat tulis dan fotokopi di Yogyakarta, menyelenggarakan pembukuan, dan berstatus PKP. Peredaran bruto 2025 Rp5,6 miliar dan 2026 Rp6,1 miliar; PPN keluaran 2026 Rp610.000.000 dan PPN masukan Rp540.000.000. Laba komersial 2026 Rp612.400.000. Beban yang tercatat antara lain: gaji 6 karyawan Rp240.000.000; THR dan bingkisan Lebaran karyawan Rp18.000.000; PBB toko Rp3.200.000; listrik toko Rp36.000.000; listrik dan air rumah tinggal pribadi Rp9.600.000; PPh Pasal 25 yang disetor Rp30.000.000; sanksi bunga STP Rp1.200.000; iklan Rp12.000.000; dan penyusutan komersial mobil boks Rp40.000.000. Mobil boks (Kelompok 2) itu dibeli Januari 2025 seharga Rp240.000.000 dan secara fiskal disusutkan garis lurus. Laba juga memuat bunga deposito Rp14.000.000 yang telah dipotong PPh final. Di luar pembukuan, pada 2026 ia menerima hibah Rp100.000.000 dari ayah kandungnya. Penghasilan neto fiskal usaha 2026 Ibu Larasati adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp652.400.000", B: "Rp649.200.000", C: "Rp663.200.000", D: "Rp639.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "salah-hitung" },
      pembahasan: {
        inti: "Koreksi positif: PPh 25 yang dibebankan, biaya pribadi rumah tinggal, sanksi STP, dan kelebihan penyusutan komersial atas penyusutan fiskal (Rp40 juta − 12,5% × Rp240 juta). Koreksi negatif: bunga deposito final. Gaji, THR/bingkisan hari raya, PBB toko, listrik toko, dan iklan adalah biaya 3M; data PPN, peredaran bruto, dan hibah tidak memengaruhi neto usaha.",
        jejakHitung: [ ["Laba komersial", "Rp612.400.000"], ["+ PPh 25 dibebankan (Pasal 9 ayat (1) huruf h)", "Rp30.000.000"], ["+ Listrik/air rumah pribadi (huruf i)", "Rp9.600.000"], ["+ Selisih penyusutan (Rp40 juta − 12,5% × Rp240 juta)", "Rp10.000.000"], ["+ Sanksi bunga STP (huruf k)", "Rp1.200.000"], ["− Bunga deposito (final)", "Rp14.000.000"], ["Data tidak dipakai", "PPN, peredaran bruto, gaji, THR, PBB, listrik toko, iklan, hibah"], ["Neto fiskal", "Rp649.200.000"] ],
        mengapaSalah: { A: "Ikut mengoreksi PBB toko; PBB adalah pajak selain PPh yang boleh dibiayakan", C: "Lupa mengeluarkan bunga deposito yang telah dikenai PPh final", D: "Lupa mengoreksi kelebihan penyusutan komersial di atas penyusutan fiskal Kelompok 2" },
        jebakan: "Data PPN, hibah, dan banyak beban 3M sengaja disajikan agar peserta tergoda mengoreksi semuanya; hanya lima pos yang mengubah laba."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) huruf a dan n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h, i, dan k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" }, { pasal: "Pasal 4 ayat (2) huruf a UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A1-072", topik: "A1.7", kasusId: "V-A1-06", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Lanjutan data Ibu Larasati Wibowo (janda cerai mati sejak 2022; menanggung dua anak kandung sejak sebelum 2026; ibu kandungnya ikut tinggal dan ditanggung sepenuhnya sejak Juli 2026): penghasilan neto fiskal usaha 2026 Rp649.200.000. Data lain 2026: zakat penghasilan melalui BAZNAS Rp12.000.000 (bukti sah); infak pembangunan masjid Rp4.000.000; sisa rugi fiskal 2020 Rp25.000.000 dan rugi fiskal 2022 Rp18.000.000 yang belum pernah dikompensasikan (seluruh laba 2021 dan 2023–2025 habis untuk rugi 2020); bunga deposito Rp14.000.000 (PPh final); hibah dari ayah kandung Rp100.000.000; PPh 25 yang disetor Rp30.000.000; rumah tinggal dengan harga perolehan Rp1,4 miliar, NJOP Rp1,1 miliar, dan sisa KPR Rp620.000.000. PPh terutang Ibu Larasati Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp109.510.000", B: "Rp109.660.000", C: "Rp103.360.000", D: "Rp110.860.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "PKP = neto − zakat BAZNAS − kompensasi rugi 2022 − PTKP TK/2. Status PTKP dikunci pada 1 Januari 2026 (ibu kandung baru ditanggung Juli), infak sukarela tidak dapat dikurangkan, dan sisa rugi 2020 sudah lewat 5 tahun. Bunga deposito, hibah ayah, PPh 25, dan data rumah tidak memengaruhi PPh terutang.",
        jejakHitung: [ ["Neto fiskal usaha", "Rp649.200.000"], ["− Zakat BAZNAS", "Rp12.000.000"], ["− Kompensasi rugi 2022 (rugi 2020 hangus akhir 2025)", "Rp18.000.000"], ["− PTKP TK/2 (status 1 Januari 2026)", "Rp63.000.000"], ["PKP", "Rp556.200.000"], ["PPh s.d. Rp500.000.000", "Rp94.000.000"], ["30% × Rp56.200.000", "Rp16.860.000"], ["PPh terutang", "Rp110.860.000"] ],
        mengapaSalah: { A: "Menghitung ibu kandung sebagai tanggungan 2026 (TK/3); tanggungan yang baru ada sejak Juli baru dihitung tahun berikutnya", B: "Ikut mengurangkan infak masjid; hanya zakat/sumbangan keagamaan wajib melalui lembaga resmi yang dapat dikurangkan", C: "Ikut mengompensasikan sisa rugi 2020 yang hanya berlaku sampai Tahun Pajak 2025" },
        jebakan: "Pengecoh hanya berselisih Rp1,2 juta–Rp7,5 juta dari kunci; masing-masing menguji satu ketentuan (status awal tahun, zakat vs infak, daluwarsa rugi), sedangkan data rumah dan hibah tidak dipakai."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) dan (2) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A1-073", topik: "A1.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Sdr. Rudi Hartono (WNI, sebelumnya pegawai di Surabaya) menandatangani kontrak kerja 3 tahun dengan perusahaan konstruksi di Singapura mulai 1 Februari 2026. Istri dan dua anaknya ikut pindah dan bersekolah di sana, rumahnya di Surabaya disewakan, dan seluruh gajinya dibayar di Singapura, tempat ia juga terdaftar sebagai wajib pajak. Selama 1 Februari 2026–31 Januari 2027 ia hanya 21 hari berada di Indonesia untuk cuti Lebaran. Konsultannya menyusun empat pernyataan berikut. Pernyataan yang PALING TEPAT menurut Pasal 2 ayat (4) UU PPh sebagaimana diubah UU Cipta Kerja dan PMK 18/PMK.03/2021 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Sdr. Rudi otomatis menjadi subjek pajak luar negeri sejak 1 Februari 2026 hanya karena berada di luar Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan, tanpa perlu memenuhi persyaratan lain",
        B: "Sdr. Rudi tetap menjadi subjek pajak dalam negeri selama masih berstatus WNI, sehingga gaji dari Singapura wajib digabung dalam SPT Tahunan dan pajak Singapura dikreditkan sebagai PPh Pasal 24",
        C: "Sdr. Rudi dapat diperlakukan sebagai subjek pajak luar negeri bila berada di luar Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan serta memenuhi persyaratan tempat tinggal, pusat kegiatan utama, tempat menjalankan kebiasaan, status subjek pajak, dan/atau persyaratan tertentu lainnya",
        D: "Sdr. Rudi dapat diperlakukan sebagai subjek pajak luar negeri bila berada di luar Indonesia paling sedikit 365 hari berturut-turut serta memenuhi persyaratan tempat tinggal, pusat kegiatan utama, tempat menjalankan kebiasaan, status subjek pajak, dan/atau persyaratan tertentu lainnya"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "UU Cipta Kerja menambahkan kriteria pada Pasal 2 ayat (4) UU PPh: WNI yang berada di luar Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan dan memenuhi persyaratan tempat tinggal, pusat kegiatan utama, tempat menjalankan kebiasaan, status subjek pajak, dan/atau persyaratan tertentu lainnya (dirinci PMK 18/PMK.03/2021) merupakan subjek pajak luar negeri. Uji hari dan uji persyaratan bersifat kumulatif.",
        jejakHitung: [ ["Hari di luar Indonesia, 1 Feb 2026–31 Jan 2027", "365 − 21 = 344 hari"], ["Uji lebih dari 183 hari dalam 12 bulan", "terpenuhi"], ["Persyaratan tempat tinggal, pusat kegiatan utama, kebiasaan, status subjek pajak", "harus dipenuhi dan dibuktikan"], ["Kesimpulan", "dapat menjadi SPLN bila kedua uji terpenuhi"] ],
        mengapaSalah: { A: "Lama berada di luar negeri saja tidak cukup; persyaratan tempat tinggal, pusat kegiatan utama, kebiasaan, dan status subjek pajak juga harus dipenuhi", B: "Kewarganegaraan bukan penentu status subjek pajak dalam negeri; sejak UU Cipta Kerja WNI yang memenuhi kriteria dapat menjadi SPLN sehingga gaji dari Singapura tidak dipajaki di Indonesia", D: "Ujinya lebih dari 183 hari dalam jangka waktu 12 bulan, bukan 365 hari berturut-turut" },
        jebakan: "Opsi A dan C hanya berbeda pada frasa 'tanpa perlu memenuhi persyaratan lain'; opsi C dan D hanya berbeda pada ukuran waktunya."
      },
      dasarHukum: [ { pasal: "Pasal 2 ayat (4) UU PPh s.t.d.t.d. UU 7/2021 (kriteria WNI ditambahkan UU 11/2020)", berlakuSejak: "2020-11-02" }, { pasal: "PMK 18/PMK.03/2021 (kriteria WNI sebagai subjek pajak luar negeri)", berlakuSejak: "2021-02-17" } ],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Rumusan kriteria WNI sebagai subjek pajak luar negeri (tambahan UU 11/2020 pada Pasal 2 ayat (4) UU PPh) dan rinciannya dalam PMK 18/PMK.03/2021 belum dibaca langsung dalam riset proyek; kaidah kunci (uji lebih dari 183 hari dan uji persyaratan bersifat kumulatif) perlu dicek ke teks resmi."
    },
    {
      id: "A1-074", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Benny Santoso (K/2, pegawai tetap PT Sarana Niaga, tidak menjalankan usaha) mengumpulkan data 2026 untuk SPT Tahunannya: (1) BPA1 dengan penghasilan neto Rp150.000.000 dan PPh 21 Rp10.275.000; (2) bunga pinjaman dari CV Sejahtera milik temannya Rp24.000.000 yang dipotong PPh Pasal 23 Rp3.600.000; (3) bunga SBN ritel Rp18.000.000 yang dipotong PPh final 10%; (4) hibah uang Rp50.000.000 dari pamannya (adik kandung ayahnya), tanpa hubungan usaha; (5) hibah uang Rp100.000.000 dari ibu kandungnya; (6) uang pertanggungan asuransi jiwa atas meninggalnya ayahnya Rp200.000.000 dari perusahaan asuransi; (7) hadiah juara lomba karya tulis dari PT Inspirasi Rp15.000.000 yang dipotong PPh 21; (8) hadiah undian tabungan Rp25.000.000 yang dipotong PPh final 25%; (9) hasil penjualan tanah warisan Rp800.000.000 yang telah dikenai PPh final 2,5%. Jumlah penghasilan neto yang digabung untuk penghitungan PPh Pasal 17 dalam SPT 2026 Tuan Benny adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp239.000.000", B: "Rp224.000.000", C: "Rp257.000.000", D: "Rp189.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang digabung hanya penghasilan tidak final: neto pekerjaan (BPA1), bunga pinjaman dari CV yang dipotong PPh 23, hibah dari paman (bukan keluarga sedarah garis lurus satu derajat), dan hadiah lomba yang dipotong PPh 21. Bunga SBN, hadiah undian, dan penjualan tanah dikenai PPh final; hibah dari ibu kandung dan uang pertanggungan asuransi jiwa bukan objek pajak.",
        jejakHitung: [ ["(1) Neto pekerjaan menurut BPA1", "Rp150.000.000"], ["(2) Bunga pinjaman dari CV (PPh 23, tidak final)", "Rp24.000.000"], ["(4) Hibah dari paman (objek, tidak final)", "Rp50.000.000"], ["(7) Hadiah lomba (PPh 21, tidak final)", "Rp15.000.000"], ["(3), (8), (9) PPh final; (5), (6) bukan objek", "dilaporkan, tidak digabung"], ["Jumlah neto yang digabung", "Rp239.000.000"] ],
        mengapaSalah: { B: "Mengeluarkan hadiah lomba karya tulis; hadiah lomba dipotong PPh 21 yang tidak final, berbeda dengan hadiah undian yang final 25%", C: "Ikut menggabungkan bunga SBN ritel Rp18.000.000 yang telah dikenai PPh final 10%", D: "Menganggap hibah dari paman bukan objek; pengecualian Pasal 4 ayat (3) huruf a angka 2 hanya bagi keluarga sedarah garis lurus satu derajat (orang tua atau anak)" },
        jebakan: "Nama pemotong tidak menentukan sifat pajak: bunga dari CV (PPh 23) dan hadiah lomba (PPh 21) tetap digabung, sedangkan bunga SBN dan hadiah undian bersifat final."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) UU PPh (gaji, hadiah, bunga, dan tambahan kemampuan ekonomis lainnya)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh; PP 91/2021 (bunga obligasi 10%); PP 132/2000 (hadiah undian 25%); PP 34/2016 (tanah/bangunan 2,5%)", berlakuSejak: "2021-08-30" }, { pasal: "Pasal 4 ayat (3) huruf a angka 2 dan huruf e UU PPh (hibah keluarga garis lurus; pembayaran asuransi jiwa)", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A1-075", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Pada Juli 2026 Ibu Melinda (SPDN, pegawai swasta) menjual rumah tinggal yang dibelinya pada 2019 seharga Rp1.500.000.000 kepada pembeli orang pribadi dengan harga Rp1.350.000.000, sehingga secara ekonomis ia rugi Rp150.000.000. Rumah itu tercantum dalam daftar harta SPT Tahunan 2025-nya, dan ia tidak menjual harta lain selama 2026. Pernyataan yang PALING TEPAT adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Penjualan itu dikenai PPh final 2,5% dari keuntungan pengalihan; karena rugi, tidak ada PPh yang terutang, dan rumah cukup dikeluarkan dari daftar harta SPT 2026",
        B: "Penjualan itu dikenai PPh final 2,5% dari jumlah bruto nilai pengalihan sebesar Rp33.750.000, yang dapat dikreditkan dalam SPT 2026 karena dibayar sendiri sebelum akta ditandatangani",
        C: "Penjualan itu dikenai PPh final 2,5% dari jumlah bruto nilai pengalihan sebesar Rp33.750.000, dan rugi Rp150.000.000 dapat dikompensasikan dengan penghasilan neto tahun-tahun berikutnya",
        D: "Penjualan itu dikenai PPh final 2,5% dari jumlah bruto nilai pengalihan sebesar Rp33.750.000 walaupun secara ekonomis rugi; nilai pengalihan dilaporkan sebagai penghasilan yang dikenai PPh final dalam SPT 2026 dan rumah dikeluarkan dari daftar harta"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "final-nonfinal", C: "lupa-pasal" },
      pembahasan: {
        inti: "PP 34/2016 mengenakan PPh final 2,5% atas jumlah bruto nilai pengalihan hak atas tanah dan/atau bangunan tanpa memperhitungkan untung atau rugi. PPh final itu dibayar sendiri sebelum akta ditandatangani, tidak dapat dikreditkan, dan transaksinya dilaporkan pada bagian penghasilan final SPT; rumah yang dijual dikeluarkan dari daftar harta.",
        jejakHitung: [ ["Dasar pengenaan: jumlah bruto nilai pengalihan", "Rp1.350.000.000"], ["Tarif PP 34/2016", "2,5%"], ["PPh final", "Rp33.750.000"], ["Rugi ekonomis Rp150.000.000", "tidak mengurangi PPh final dan tidak dikompensasikan"] ],
        mengapaSalah: { A: "Dasar pengenaannya jumlah bruto nilai pengalihan, bukan keuntungan; PPh tetap terutang walaupun rugi", B: "PPh final atas pengalihan tanah/bangunan tidak dapat dikreditkan dalam SPT Tahunan", C: "Kerugian atas transaksi yang dikenai PPh final tidak dapat dikompensasikan; kompensasi Pasal 6 ayat (2) hanya untuk rugi fiskal atas penghasilan yang dikenai tarif umum" },
        jebakan: "Kata 'rugi' memancing kesimpulan 'tidak ada pajak'; PPh final pengalihan tanah/bangunan dihitung dari bruto."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2016 Pasal 2", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A1-076", topik: "A1.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Pak Sutrisno (K/1) di-PHK PT Garmen Lestari pada Maret 2026. Pada April 2026 ia menerima sekaligus uang pesangon Rp150.000.000 dari PT Garmen Lestari dan Jaminan Hari Tua (JHT) Rp80.000.000 dari BPJS Ketenagakerjaan; keduanya baru pertama kali diterima pada 2026 dan tidak ada pembayaran lanjutan. Gaji Januari–Maret 2026 tercantum dalam BPA1 dengan PPh 21 yang telah dipotong. Sejak Juni 2026 ia membuka warung makan dengan PPh final UMKM (peredaran bruto 2026 Rp210.000.000). Jumlah PPh Pasal 21 atas pesangon dan JHT, serta perlakuannya dalam SPT Tahunan 2026, yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp14.000.000; pesangon dan JHT dilaporkan sebagai penghasilan yang dikenai PPh final dan PPh-nya tidak dikreditkan",
        B: "Rp11.500.000; pesangon dan JHT dilaporkan sebagai penghasilan yang dikenai PPh final, tidak digabung ke penghasilan kena pajak, dan PPh-nya tidak dikreditkan",
        C: "Rp11.500.000; pesangon dan JHT digabung dengan gaji sebagai penghasilan neto dari pekerjaan dan PPh-nya dikreditkan",
        D: "Rp10.000.000; JHT dari BPJS Ketenagakerjaan bukan objek pajak, sedangkan pesangon dilaporkan sebagai penghasilan yang dikenai PPh final"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PP 68/2009 mengenakan PPh 21 final berlapis atas pesangon (0%/5%/15%/25%) dan atas JHT yang dibayar sekaligus (0% s.d. Rp50 juta, 5% di atasnya). Keduanya dilaporkan pada bagian penghasilan final SPT dan tidak dikurangi PTKP; warung UMKM tidak memengaruhi penghitungan ini.",
        jejakHitung: [ ["Pesangon: 0% × Rp50.000.000", "Rp0"], ["5% × Rp50.000.000 (di atas Rp50 jt s.d. Rp100 jt)", "Rp2.500.000"], ["15% × Rp50.000.000 (di atas Rp100 jt s.d. Rp150 jt)", "Rp7.500.000"], ["JHT: 0% × Rp50.000.000 + 5% × Rp30.000.000", "Rp1.500.000"], ["Jumlah PPh 21 final", "Rp11.500.000"] ],
        mengapaSalah: { A: "Lapisan 0% untuk Rp50 juta pertama JHT terlewat (5% × Rp80.000.000 = Rp4.000.000)", C: "Pesangon dan JHT yang dibayar sekaligus dikenai PPh final, sehingga tidak digabung dan PPh-nya bukan kredit pajak", D: "JHT yang dibayar sekaligus tetap objek PPh 21 final dengan tarif 5% atas bagian di atas Rp50 juta" },
        jebakan: "Lapisan pesangon dan lapisan JHT dihitung terpisah, masing-masing dengan bagian 0% sampai Rp50 juta."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (2) huruf e dan Pasal 21 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 68/2009 (pesangon; manfaat pensiun, THT, JHT sekaligus)", berlakuSejak: "2009-11-16" }, { pasal: "PMK 168/2023 (bukti potong PPh 21 final)", berlakuSejak: "2024-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-077", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Pak Edi Kusuma menjalankan usaha ekspedisi orang pribadi di Surabaya, menyelenggarakan pembukuan, dengan peredaran bruto 2026 Rp6,8 miliar. Ia membeli sebuah truk (harta Kelompok 2) pada Januari 2023 seharga Rp400.000.000. Secara komersial truk disusutkan garis lurus 5 tahun tanpa nilai sisa; secara fiskal disusutkan garis lurus sesuai Kelompok 2. Truk dijual pada 30 Juni 2026 seharga Rp250.000.000; untuk 2026 penyusutan komersial maupun fiskal dihitung 6 bulan (Januari–Juni). Laporan laba rugi komersial 2026 mencatat beban penyusutan truk Rp40.000.000 dan laba penjualan truk Rp130.000.000; PPN atas penjualan truk dipungut terpisah dan tidak dicatat sebagai pendapatan. Koreksi fiskal 2026 yang timbul dari truk tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Koreksi negatif Rp105.000.000", B: "Koreksi positif Rp15.000.000", C: "Koreksi negatif Rp90.000.000", D: "Koreksi negatif Rp120.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penyusutan fiskal Kelompok 2 adalah 12,5% × Rp400 juta = Rp50 juta setahun, sehingga nilai sisa buku fiskal saat dijual Rp225 juta dan keuntungan fiskal hanya Rp25 juta. Koreksi penyusutan 2026 +Rp15 juta (Rp40 juta − Rp25 juta) dan koreksi laba penjualan −Rp105 juta (Rp25 juta − Rp130 juta), sehingga neto koreksi negatif Rp90 juta.",
        jejakHitung: [ ["Penyusutan fiskal setahun (12,5% × Rp400.000.000)", "Rp50.000.000"], ["Akumulasi fiskal 2023–2025 + 6 bulan 2026", "Rp150.000.000 + Rp25.000.000 = Rp175.000.000"], ["Nilai sisa buku fiskal", "Rp225.000.000"], ["Keuntungan fiskal (Rp250.000.000 − Rp225.000.000)", "Rp25.000.000"], ["Koreksi penyusutan 2026 (Rp40.000.000 − Rp25.000.000)", "+Rp15.000.000"], ["Koreksi laba penjualan (Rp25.000.000 − Rp130.000.000)", "−Rp105.000.000"], ["Koreksi neto", "−Rp90.000.000"] ],
        mengapaSalah: { A: "Hanya mengoreksi laba penjualan; kelebihan penyusutan komersial 2026 atas penyusutan fiskal juga harus dikoreksi positif", B: "Hanya mengoreksi penyusutan; laba penjualan komersial dihitung dari nilai sisa buku komersial sehingga harus diganti dengan keuntungan fiskal (Pasal 11 ayat (8))", D: "Tanda koreksi penyusutan terbalik: penyusutan komersial yang lebih besar dari penyusutan fiskal menghasilkan koreksi positif" },
        jebakan: "Uji cepat: koreksi neto pada tahun penjualan sama dengan minus selisih akumulasi penyusutan komersial dan fiskal sampai akhir 2025 (Rp240 juta − Rp150 juta = Rp90 juta)."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (6), dan (8) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17" }, { pasal: "Pasal 4 ayat (1) huruf d UU PPh (keuntungan pengalihan harta)", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A1-078", topik: "A1.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Ibu Rosa menjalankan toko obat orang pribadi di Palembang dan menyelenggarakan pembukuan. Pada 5 April 2026 ia membeli sebuah ruko seharga Rp2.000.000.000 (menurut akta: tanah Rp800.000.000 dan bangunan permanen Rp1.200.000.000) yang langsung dipakai untuk toko. NJOP ruko 2026 Rp1.650.000.000 dan PBB-nya Rp2.310.000. Ia memakai metode garis lurus dan tidak memilih masa manfaat selain yang ditetapkan undang-undang. Penyusutan fiskal ruko untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp75.000.000", B: "Rp60.000.000", C: "Rp61.875.000", D: "Rp45.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Hanya bangunan yang disusutkan; tanah tidak. Bangunan permanen disusutkan 20 tahun (5% garis lurus) mulai bulan perolehan, sehingga 2026 dihitung 9 bulan (April–Desember).",
        jejakHitung: [ ["Tanah Rp800.000.000", "tidak disusutkan"], ["Bangunan permanen: 5% × Rp1.200.000.000", "Rp60.000.000 setahun"], ["April–Desember 2026", "9 bulan"], ["Rp60.000.000 × 9/12", "Rp45.000.000"], ["NJOP dan PBB", "bukan dasar penyusutan (PBB toko boleh dibiayakan)"] ],
        mengapaSalah: { A: "Ikut menyusutkan tanah (5% × Rp2 miliar × 9/12); tanah bukan harta yang dapat disusutkan", B: "Menyusutkan setahun penuh; penyusutan dimulai pada bulan perolehan dan dihitung proporsional bulan", C: "Memakai NJOP Rp1,65 miliar sebagai dasar; dasar penyusutan adalah harga perolehan bangunan" },
        jebakan: "Data NJOP dan PBB hanya pengalih; dasar penyusutan selalu harga perolehan bangunan."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (6) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PMK 72/2023 (penyusutan harta berwujud)", berlakuSejak: "2023-07-17" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-079", topik: "A1.3", kasusId: "V-A1-08", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Data untuk soal ini dan tiga soal berikutnya: Pak Wayan Sudarma (K/3: istri tidak bekerja; menanggung tiga anak kandung dan ibu kandungnya sejak 2020) memiliki bengkel servis dan pengecatan mobil di Denpasar, menyelenggarakan pembukuan, dengan peredaran bruto 2025 Rp5,3 miliar dan 2026 Rp5,9 miliar. Laba komersial 2026 Rp735.000.000, yang di dalamnya tercatat antara lain: pendapatan sewa sebagian lantai ruko kepada sebuah bank Rp120.000.000 (bruto), dengan PPh final 10% yang dipotong penyewa Rp12.000.000 dicatat sebagai beban pajak; biaya pemeliharaan bagian ruko yang disewakan Rp6.000.000 (tidak ada biaya lain, termasuk penyusutan, yang dapat dialokasikan ke bagian yang disewakan); bunga deposito yang dicatat neto setelah dipotong PPh final Rp16.000.000; gaji 14 karyawan Rp420.000.000; bingkisan hari raya Nyepi untuk seluruh karyawan Rp9.000.000; sumbangan kepada panitia peringatan 17 Agustus di banjar Rp10.000.000; biaya promosi berupa pameran dan hadiah bagi pelanggan Rp18.000.000 tanpa daftar nominatif; PPh Pasal 25 yang disetor Rp48.000.000; biaya sekolah anak-anak Pak Wayan Rp24.000.000; serta dana punia wajib kepada lembaga keagamaan Hindu yang disahkan pemerintah Rp20.000.000 (bukti sah) yang juga dibukukan sebagai beban. Penyusutan komersial sama dengan penyusutan fiskal. Penghasilan neto fiskal usaha 2026 Pak Wayan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp737.000.000", B: "Rp717.000.000", C: "Rp753.000.000", D: "Rp719.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Koreksi negatif atas penghasilan final (sewa ruko dan bunga deposito); koreksi positif atas PPh final dan biaya pemeliharaan yang terkait penghasilan final, sumbangan panitia, promosi tanpa daftar nominatif, PPh 25, biaya sekolah anak (pribadi), serta dana punia wajib yang dibukukan sebagai beban — yang terakhir dikurangkan tersendiri pada tahap penghitungan PKP, bukan dalam neto usaha.",
        jejakHitung: [ ["Laba komersial", "Rp735.000.000"], ["− Sewa ruko dan bunga deposito (PPh final)", "−Rp136.000.000"], ["+ PPh final sewa dan pemeliharaan bagian ruko yang disewakan", "+Rp18.000.000"], ["+ Sumbangan panitia 17 Agustus (Pasal 9 ayat (1) huruf g)", "+Rp10.000.000"], ["+ Promosi tanpa daftar nominatif (PMK 02/PMK.03/2010)", "+Rp18.000.000"], ["+ PPh 25 (huruf h) dan biaya sekolah anak (huruf i)", "+Rp72.000.000"], ["+ Dana punia wajib yang dibukukan sebagai beban (dipindah ke pengurang PKP)", "+Rp20.000.000"], ["Tidak dikoreksi", "gaji, bingkisan Nyepi untuk seluruh karyawan"], ["Penghasilan neto fiskal usaha", "Rp737.000.000"] ],
        mengapaSalah: { B: "Membiarkan dana punia wajib sebagai beban usaha; sumbangan keagamaan wajib dikurangkan tersendiri setelah penghasilan neto, sehingga bila juga dibiarkan dalam laba akan terkurang dua kali", C: "Lupa mengeluarkan bunga deposito Rp16.000.000 yang telah dikenai PPh final", D: "Lupa mengoreksi PPh final sewa dan biaya pemeliharaan bagian ruko yang disewakan (Rp18.000.000), padahal keduanya biaya untuk penghasilan yang dikenai PPh final" },
        jebakan: "Opsi hanya berselisih Rp2 juta–Rp20 juta; tiap pengecoh menguji satu pos (sumbangan keagamaan wajib, bunga final, biaya terkait penghasilan final)."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf g, h, dan i UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a dan d UU PPh; PP 94/2010 Pasal 13 (biaya untuk penghasilan final)", berlakuSejak: "2010-12-30" }, { pasal: "PMK 02/PMK.03/2010 (daftar nominatif biaya promosi)", berlakuSejak: "2010-01-05" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PP 60/2010; PMK 114/2025", berlakuSejak: "2025-12-31" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A1-080", topik: "A1.5", kasusId: "V-A1-08", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Lanjutan data Pak Wayan Sudarma (bengkel di Denpasar, pembukuan): penghasilan neto fiskal usaha 2026 Rp737.000.000 dan dana punia wajib yang dapat dikurangkan Rp20.000.000. Riwayat fiskalnya: rugi 2021 Rp900.000.000; penghasilan neto fiskal sebelum kompensasi 2022 Rp90.000.000, 2023 Rp110.000.000, 2024 Rp100.000.000, dan 2025 Rp400.000.000, yang seluruhnya habis untuk mengompensasikan rugi 2021. Pada 2026 ia juga menderita kerugian Rp50.000.000 dari usaha agen perjalanan miliknya di Timor Leste dan rugi Rp30.000.000 dari penjualan saham di Bursa Efek Indonesia. Kompensasi kerugian dalam SPT Tahunan 2026 Pak Wayan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0, karena rugi 2021 hanya dapat dikompensasikan sampai Tahun Pajak 2025",
        B: "Rp250.000.000, yaitu sisa rugi 2021 ditambah kerugian usaha di Timor Leste",
        C: "Rp200.000.000, yaitu sisa rugi 2021 yang masih dalam batas 5 tahun (2022–2026)",
        D: "Rp230.000.000, yaitu sisa rugi 2021 ditambah rugi penjualan saham di bursa"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Rugi 2021 dapat dikompensasikan pada 2022–2026. Setelah terpakai Rp700 juta sampai 2025, sisanya Rp200 juta masih dapat dipakai pada 2026 (tahun kelima). Kerugian usaha di luar negeri tidak digabung, dan rugi penjualan saham di bursa (transaksi ber-PPh final) tidak dikompensasikan.",
        jejakHitung: [ ["Rugi 2021", "Rp900.000.000"], ["Terpakai 2022–2025 (Rp90 jt + Rp110 jt + Rp100 jt + Rp400 jt)", "Rp700.000.000"], ["Sisa rugi 2021 (batas akhir Tahun Pajak 2026)", "Rp200.000.000"], ["Neto 2026 setelah dana punia (Rp737 jt − Rp20 jt)", "Rp717.000.000 (mencukupi)"], ["Rugi Timor Leste dan rugi saham di bursa", "tidak dikompensasikan"], ["Kompensasi 2026", "Rp200.000.000"] ],
        mengapaSalah: { A: "Lima tahun dihitung mulai tahun berikutnya (2022), sehingga 2026 adalah tahun kelima dan sisa rugi 2021 masih dapat dipakai", B: "Kerugian usaha di luar negeri tidak boleh digabung dengan penghasilan dalam negeri (PMK 192/PMK.03/2018)", D: "Rugi atas transaksi saham di bursa yang dikenai PPh final 0,1% tidak dikompensasikan" },
        jebakan: "Menghitung 2021 sebagai tahun pertama membuat sisa rugi seolah hangus setahun lebih cepat."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (kerugian di luar negeri tidak digabung)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 4 ayat (2) huruf c UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A1-081", topik: "A1.11", kasusId: "V-A1-08", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2,
      formulirRef: "1770.induk.8",
      stem: "Lanjutan data Pak Wayan Sudarma (K/3: istri tidak bekerja; menanggung tiga anak kandung dan ibu kandungnya sejak 2020): penghasilan neto fiskal usaha 2026 Rp737.000.000 (tidak ada penghasilan neto lain), dana punia wajib yang sah Rp20.000.000 (dalam rekonsiliasi fiskal telah dikoreksi positif), dan kompensasi kerugian yang sah Rp200.000.000. Menurut peta logis induk SPT 1770 (angka 6 zakat/sumbangan keagamaan wajib, angka 8 kompensasi kerugian, angka 10 PTKP, angka 11 PKP, angka 12 PPh terutang), isian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Angka 6 Rp0 (sudah dibebankan dalam pembukuan); angka 8 Rp200.000.000; angka 10 Rp72.000.000; angka 11 Rp465.000.000; angka 12 Rp85.250.000",
        B: "Angka 6 Rp20.000.000; angka 8 Rp200.000.000; angka 10 Rp72.000.000; angka 11 Rp445.000.000; angka 12 Rp80.250.000",
        C: "Angka 6 Rp20.000.000; angka 8 Rp200.000.000; angka 10 Rp76.500.000 (empat tanggungan); angka 11 Rp440.500.000; angka 12 Rp79.125.000",
        D: "Angka 6 Rp20.000.000; angka 8 Rp0 (rugi 2021 telah lewat 5 tahun); angka 10 Rp72.000.000; angka 11 Rp645.000.000; angka 12 Rp137.500.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Urutan induk 1770: penghasilan neto dikurangi zakat/sumbangan keagamaan wajib (angka 6), lalu kompensasi kerugian (angka 8), lalu PTKP (angka 10) menghasilkan PKP (angka 11). Tanggungan dibatasi 3 orang sehingga PTKP K/3 Rp72 juta.",
        jejakHitung: [ ["Angka 1/5: neto usaha", "Rp737.000.000"], ["Angka 6: dana punia wajib", "Rp20.000.000"], ["Angka 7: Rp737 jt − Rp20 jt", "Rp717.000.000"], ["Angka 8: kompensasi kerugian", "Rp200.000.000"], ["Angka 9", "Rp517.000.000"], ["Angka 10: PTKP K/3 (tanggungan maks. 3)", "Rp72.000.000"], ["Angka 11: PKP", "Rp445.000.000"], ["Angka 12: Rp31.500.000 + 25% × Rp195.000.000", "Rp80.250.000"] ],
        mengapaSalah: { A: "Dana punia dikoreksi positif dalam rekonsiliasi justru agar dikurangkan pada angka 6; bila angka 6 dikosongkan, pengurang itu hilang", C: "Tanggungan untuk PTKP paling banyak 3 orang walaupun yang ditanggung empat orang", D: "Rugi 2021 masih dapat dikompensasikan sampai Tahun Pajak 2026" },
        jebakan: "Isian angka 6 dan 8 terkait dengan rekonsiliasi fiskal: pos yang dikoreksi positif di pembukuan dikurangkan kembali di induk."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2), Pasal 7 ayat (1), Pasal 9 ayat (1) huruf g, dan Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Tahunan OP di Coretax)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Nomor angka induk mengikuti formulir 1770 pra-Coretax sebagai peta logis; di Coretax (PER-11/PJ/2025) komponen yang sama diisi melalui lampiran sehingga penomoran dapat berbeda. Penghitungan PKP dan PPh yang menjadi kunci tidak bergantung pada penomoran."
    },
    {
      id: "A1-082", topik: "A1.9", kasusId: "V-A1-08", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 25 ayat (1) UU PPh (diringkas): besarnya angsuran pajak dalam tahun pajak berjalan yang harus dibayar sendiri setiap bulan adalah PPh terutang menurut SPT Tahunan tahun pajak yang lalu dikurangi PPh yang dipotong (Pasal 21 dan 23), PPh yang dipungut (Pasal 22), dan PPh Pasal 24 yang boleh dikreditkan, dibagi 12. Pasal 25 ayat (2): besarnya angsuran untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan sama dengan besarnya angsuran untuk bulan terakhir dari tahun pajak yang lalu.",
      stem: "Lanjutan data Pak Wayan Sudarma (bengkel servis dan pengecatan mobil, bukan pedagang pengecer): SPT Tahunan 2026 dengan PPh terutang Rp80.250.000 disampaikan pada 25 Maret 2027. Kredit dan pembayaran 2026: PPh Pasal 22 atas impor cat dan suku cadang Rp6.500.000; PPh Pasal 23 yang dipotong pelanggan badan atas jasa perawatan kendaraan Rp3.850.000; PPh final atas sewa ruko Rp12.000.000; PPh final bunga deposito Rp4.000.000; serta angsuran PPh Pasal 25 Rp4.000.000 setiap bulan selama 2026 (termasuk Masa Desember 2026). Ia tidak memperoleh penghasilan tidak teratur. Berdasarkan kutipan tersebut, angsuran PPh Pasal 25 Masa Februari 2027 dan Masa April 2027 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Februari Rp5.825.000; April Rp5.825.000", B: "Februari Rp4.000.000; April Rp1.825.000", C: "Februari Rp4.000.000; April Rp4.825.000", D: "Februari Rp4.000.000; April Rp5.825.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Bulan sebelum batas waktu SPT (Januari–Februari 2027) memakai angsuran Desember 2026 Rp4.000.000 (Pasal 25 ayat (2)). Setelah SPT 2026 disampaikan, angsuran = (Rp80.250.000 − PPh 22 Rp6.500.000 − PPh 23 Rp3.850.000) ÷ 12 = Rp5.825.000; PPh final dan PPh 25 tahun lalu tidak dikurangkan.",
        jejakHitung: [ ["Masa Februari 2027 (sebelum batas waktu SPT 31 Maret 2027)", "= angsuran Desember 2026 = Rp4.000.000"], ["PPh terutang SPT 2026", "Rp80.250.000"], ["− PPh 22 dan PPh 23", "Rp10.350.000"], ["PPh final sewa dan deposito; PPh 25 2026", "tidak dikurangkan"], ["(Rp80.250.000 − Rp10.350.000) ÷ 12 (berlaku untuk Masa April 2027)", "Rp5.825.000"] ],
        mengapaSalah: { A: "Angsuran baru tidak berlaku untuk bulan-bulan sebelum batas waktu penyampaian SPT; Januari–Februari memakai angsuran Desember tahun lalu", B: "Ikut mengurangkan PPh 25 yang disetor selama 2026; Pasal 25 ayat (1) hanya mengurangkan PPh 21, 22, 23, dan 24", C: "Ikut mengurangkan PPh final sewa ruko; PPh final bukan kredit pajak dan bukan pengurang dasar angsuran" },
        jebakan: "Pertanyaan meminta dua masa sekaligus: satu mengikuti ayat (2), yang lain ayat (1)."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A1-083", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Yosef Pardede (TK/1) tinggal di Kota Bekasi dan menjalankan dua kegiatan pada 2026: (1) toko perlengkapan bayi di Kota Bekasi dengan peredaran bruto Rp1.800.000.000 — pada 2024 ia telah memberitahukan memilih dikenai PPh dengan tarif umum sehingga tidak memakai PPh final UMKM; (2) jasa konsultan manajemen yang dijalankan dari kantornya di Jakarta Selatan dengan penerimaan bruto Rp900.000.000, seluruhnya dari klien badan yang memotong PPh 21 bukan pegawai Rp22.500.000. Pada 12 Februari 2026 ia memberitahukan penggunaan NPPN melalui Coretax untuk kedua kegiatan. Persentase norma (angka hipotetis untuk soal ini): perdagangan eceran — 10 ibu kota provinsi 30%, ibu kota provinsi lainnya 27,5%, daerah lainnya 25%; jasa konsultan — 10 ibu kota provinsi 50%, ibu kota provinsi lainnya 47,5%, daerah lainnya 45%. Ia juga menerima bunga deposito Rp20.000.000 (PPh final) dan menjual mobil pribadinya Rp150.000.000. Penghasilan neto dari usaha dan pekerjaan bebas 2026 menurut NPPN adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp990.000.000", B: "Rp855.000.000", C: "Rp900.000.000", D: "Rp877.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Persentase norma dipilih per kegiatan menurut wilayah tempat kegiatan dijalankan. Toko di Kota Bekasi (bukan ibu kota provinsi) memakai persentase daerah lainnya, sedangkan jasa konsultan di Jakarta memakai persentase 10 ibu kota provinsi. PPh 21 yang dipotong adalah kredit pajak, bukan pengurang neto.",
        jejakHitung: [ ["Toko di Kota Bekasi (daerah lainnya): 25% × Rp1.800.000.000", "Rp450.000.000"], ["Konsultan di Jakarta (10 ibu kota provinsi): 50% × Rp900.000.000", "Rp450.000.000"], ["Syarat NPPN: Rp2,7 miliar < Rp4,8 miliar; pemberitahuan ≤ 31 Maret", "terpenuhi"], ["Bunga deposito (final) dan penjualan mobil pribadi", "bukan peredaran bruto"], ["Neto menurut NPPN", "Rp900.000.000"] ],
        mengapaSalah: { A: "Memakai persentase 10 ibu kota provinsi untuk toko di Kota Bekasi; Bekasi bukan ibu kota provinsi", B: "Memakai wilayah tempat tinggal (Bekasi) untuk kedua kegiatan; persentase mengikuti tempat kegiatan dijalankan", D: "Mengurangkan PPh 21 bukan pegawai dari neto; PPh yang dipotong adalah kredit pajak" },
        jebakan: "Peredaran bruto kedua kegiatan dijumlahkan untuk menguji batas Rp4,8 miliar, tetapi persentase normanya diterapkan per kegiatan dan per wilayah."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-17/PJ/2015 Lampiran I (pengelompokan wilayah dan persentase norma)" }, { pasal: "PMK 81/2024 (pemberitahuan NPPN melalui Coretax)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Persentase norma dalam soal hipotetis. Prinsip bahwa persentase dipilih per kegiatan menurut wilayah tempat kegiatan dijalankan mengikuti pengelompokan wilayah PER-17/PJ/2015 sebagaimana dirangkum riset; rincian lampiran per KLU belum diverifikasi ke teks resmi."
    },
    {
      id: "A1-084", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, laporanUjian: ["B-2026-10"],
      formulirRef: "1770.induk.1",
      stem: "Ibu Dian Puspita (TK/0) adalah pegawai tetap PT Media Kreasi (BPA1: penghasilan neto Rp84.000.000; PPh 21 Rp1.500.000) dan juga penerjemah lepas di Makassar yang memberitahukan penggunaan NPPN pada Januari 2026. Penerimaan bruto penerjemahan 2026 Rp360.000.000 (persentase norma, diberikan, 50%), seluruhnya dari klien badan yang memotong PPh 21 bukan pegawai Rp9.000.000. Ia juga menerima bunga deposito Rp5.000.000 yang telah dipotong PPh final Rp1.000.000. Menurut peta logis induk SPT 1770 (angka 1 neto dari usaha/pekerjaan bebas, angka 2 neto sehubungan dengan pekerjaan, angka 3 neto dalam negeri lainnya, angka 15 PPh yang dipotong/dipungut pihak lain), isian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Angka 1 Rp360.000.000 (penerimaan bruto); angka 2 Rp84.000.000; angka 15 Rp10.500.000; bunga deposito pada lampiran penghasilan final",
        B: "Angka 1 Rp180.000.000; angka 2 Rp84.000.000; angka 15 Rp10.500.000; bunga deposito pada lampiran penghasilan final (tidak masuk angka 1–5) dan PPh finalnya tidak dikreditkan",
        C: "Angka 1 Rp171.000.000 (neto norma dikurangi PPh 21 bukan pegawai); angka 2 Rp84.000.000; angka 15 Rp1.500.000; bunga deposito pada lampiran penghasilan final",
        D: "Angka 1 Rp180.000.000; angka 2 Rp84.000.000; angka 3 Rp5.000.000 (bunga deposito); angka 15 Rp11.500.000 (termasuk PPh final bunga)"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pengguna NPPN mengisi angka 1 dengan neto norma (50% × Rp360 juta = Rp180 juta), neto BPA1 pada angka 2, dan seluruh PPh 21 yang dipotong (BPA1 dan bukti potong bukan pegawai) sebagai kredit pada angka 15. Bunga deposito dilaporkan pada lampiran penghasilan final tanpa kredit.",
        jejakHitung: [ ["Angka 1: 50% × Rp360.000.000", "Rp180.000.000"], ["Angka 2: neto BPA1", "Rp84.000.000"], ["Angka 15: Rp1.500.000 + Rp9.000.000", "Rp10.500.000"], ["Bunga deposito Rp5.000.000", "lampiran penghasilan final; PPh Rp1.000.000 tidak dikreditkan"] ],
        mengapaSalah: { A: "Angka 1 berisi penghasilan neto, bukan penerimaan bruto; neto pengguna NPPN = persentase norma × peredaran bruto", C: "PPh 21 bukan pegawai tidak mengurangi neto; PPh itu kredit pajak pada angka 15 bersama PPh 21 BPA1", D: "Bunga deposito dikenai PPh final: tidak masuk penghasilan neto dalam negeri lainnya dan PPh-nya tidak dikreditkan" },
        jebakan: "Satu baris yang keliru (bruto vs neto, atau final vs kredit) menggeser seluruh hasil SPT."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a UU PPh; PP 131/2000", berlakuSejak: "2001-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Tahunan OP di Coretax)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Nomor angka induk mengikuti formulir 1770 pra-Coretax sebagai peta logis; di Coretax komponen yang sama diisi melalui lampiran sehingga penomoran dapat berbeda. Perlakuan neto norma, kredit PPh 21, dan penghasilan final yang menentukan kunci tidak bergantung pada penomoran."
    },
    {
      id: "A1-085", topik: "A1.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Empat Wajib Pajak orang pribadi memberitahukan penggunaan NPPN untuk Tahun Pajak 2026 pada Februari 2026 dan menjalankan kegiatannya di kota yang berbeda. Menurut pengelompokan wilayah dalam Lampiran PER-17/PJ/2015, pasangan kota dan kelompok wilayah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kota Batam — kelompok 10 ibu kota provinsi", B: "Kota Yogyakarta — kelompok 10 ibu kota provinsi", C: "Kota Denpasar — kelompok ibu kota provinsi lainnya", D: "Kota Pontianak — kelompok 10 ibu kota provinsi" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Sepuluh ibu kota provinsi dalam PER-17/PJ/2015 adalah Medan, Palembang, Jakarta, Bandung, Semarang, Surabaya, Denpasar, Manado, Makassar, dan Pontianak; Pontianak termasuk di dalamnya.",
        jejakHitung: [ ["Kelompok 10 ibu kota provinsi", "Medan, Palembang, Jakarta, Bandung, Semarang, Surabaya, Denpasar, Manado, Makassar, Pontianak"], ["Ibu kota provinsi lainnya", "mis. Yogyakarta, Tanjungpinang"], ["Daerah lainnya", "mis. Batam, Bekasi"] ],
        mengapaSalah: { A: "Batam bukan ibu kota provinsi (ibu kota Kepulauan Riau adalah Tanjungpinang), sehingga termasuk daerah lainnya", B: "Yogyakarta adalah ibu kota provinsi, tetapi tidak termasuk daftar 10 ibu kota provinsi; kelompoknya ibu kota provinsi lainnya", C: "Denpasar termasuk kelompok 10 ibu kota provinsi" },
        jebakan: "Kota besar belum tentu masuk kelompok 10 ibu kota provinsi; hafalkan sepuluh kota itu."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (1) UU PPh (norma disusun Direktur Jenderal Pajak)", berlakuSejak: "2009-01-01" }, { pasal: "PER-17/PJ/2015 Lampiran I (pengelompokan wilayah)" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A1-086", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Bapak Hadi (toko bangunan orang pribadi, menyelenggarakan pembukuan) memiliki rugi fiskal Tahun Pajak 2022 Rp90.000.000. Penghasilan neto fiskal sebelum kompensasi: 2023 Rp20.000.000; 2024 Rp15.000.000; 2025 Rp10.000.000; 2026 Rp25.000.000; 2027 Rp60.000.000. Tidak ada kerugian lain, dan seluruh kompensasi sebelumnya dilakukan sesuai ketentuan. Kompensasi kerugian dalam SPT Tahunan 2027 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000.000", B: "Rp0", C: "Rp60.000.000", D: "Rp90.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rugi 2022 dapat dikompensasikan pada 2023–2027. Setelah terpakai Rp70 juta pada 2023–2026, sisanya Rp20 juta dipakai pada 2027 sebagai tahun kelima.",
        jejakHitung: [ ["Rugi 2022", "Rp90.000.000"], ["Terpakai 2023–2026 (Rp20 jt + Rp15 jt + Rp10 jt + Rp25 jt)", "Rp70.000.000"], ["Sisa", "Rp20.000.000"], ["2027 = tahun kelima", "masih dapat dikompensasikan"] ],
        mengapaSalah: { B: "Tahun 2022 tidak dihitung; lima tahun dimulai 2023 sehingga 2027 masih termasuk", C: "Kompensasi tidak boleh melebihi sisa rugi yang belum dikompensasikan", D: "Sebagian rugi sudah terpakai pada 2023–2026; yang tersisa hanya Rp20.000.000" },
        jebakan: "Tahun terjadinya rugi tidak termasuk dalam hitungan 5 tahun."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A1-087", topik: "A1.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 8 ayat (6) UU KUP (diringkas): dalam hal Wajib Pajak menerima surat ketetapan pajak, surat keputusan keberatan, surat keputusan pembetulan, putusan banding, atau putusan peninjauan kembali untuk tahun pajak sebelumnya yang menyatakan rugi fiskal berbeda dengan rugi fiskal yang telah dikompensasikan dalam SPT yang akan dibetulkan, Wajib Pajak dapat membetulkan SPT tersebut dalam jangka waktu paling lama 3 bulan setelah menerima surat ketetapan, keputusan, atau putusan dimaksud.",
      stem: "SPT Tahunan 2024 Ibu Meiliana (toko elektronik orang pribadi, menyelenggarakan pembukuan) menyatakan rugi fiskal Rp300.000.000. Dalam SPT 2025 yang disampaikan 20 Maret 2026, ia mengompensasikan seluruh rugi itu dengan penghasilan neto fiskal 2025 Rp360.000.000. Pada 10 Juli 2026 ia menerima SKP hasil pemeriksaan Tahun Pajak 2024 yang menetapkan rugi fiskal hanya Rp120.000.000, dan ia memutuskan tidak mengajukan keberatan. SPT 2025 belum diperiksa. Berdasarkan kutipan tersebut, tindakan yang tepat atas SPT 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak perlu tindakan apa pun, karena kompensasi dalam SPT 2025 tetap mengikuti rugi yang dilaporkan sendiri dalam SPT 2024",
        B: "Membetulkan SPT 2025 paling lama 1 bulan setelah menerima SKP (10 Agustus 2026), mengurangi kompensasi menjadi Rp120.000.000, dan melunasi kekurangan pajaknya sebelum pembetulan disampaikan",
        C: "Membetulkan SPT 2025 paling lama 3 bulan setelah menerima SKP (10 Oktober 2026), mengurangi kompensasi menjadi Rp120.000.000, dan melunasi kekurangan pajaknya sebelum pembetulan disampaikan",
        D: "Membetulkan SPT 2025 paling lama 3 bulan setelah menerima SKP (10 Oktober 2026), tetapi tetap mengompensasikan Rp300.000.000 karena ia tidak mengajukan keberatan atas SKP tersebut"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 8 ayat (6) memberi kesempatan membetulkan SPT tahun berikutnya paling lama 3 bulan setelah menerima SKP yang mengubah rugi fiskal. Kompensasi dalam SPT 2025 disesuaikan dengan rugi menurut SKP (Rp120.000.000), sehingga penghasilan neto setelah kompensasi naik Rp180.000.000 dan kekurangan pajaknya dilunasi.",
        jejakHitung: [ ["Rugi 2024 menurut SKP", "Rp120.000.000"], ["Kompensasi semula", "Rp300.000.000"], ["Kenaikan neto setelah kompensasi 2025", "Rp180.000.000"], ["Batas pembetulan: 10 Juli 2026 + 3 bulan", "10 Oktober 2026"] ],
        mengapaSalah: { A: "Jumlah rugi yang dapat dikompensasikan mengikuti ketetapan DJP; SKP yang tidak disengketakan menjadi dasar kompensasi", B: "Jangka waktunya 3 bulan, bukan 1 bulan, setelah menerima SKP", D: "Karena SKP tidak disengketakan, rugi menurut SKP (Rp120.000.000) yang berlaku; kompensasi Rp300.000.000 tidak lagi benar" },
        jebakan: "Opsi B dan C hanya berbeda pada jangka waktu (1 bulan vs 3 bulan); opsi C dan D berbeda pada angka kompensasi."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (6) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Rumusan Pasal 8 ayat (6) UU KUP diringkas dari pengetahuan umum atas UU KUP dan belum dibaca langsung dalam riset proyek; perlakuan sanksi atas kurang bayar akibat pembetulan ini sengaja tidak diuji."
    },
    {
      id: "A1-088", topik: "A1.4", kasusId: "V-A1-09", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Data untuk soal ini dan dua soal berikutnya: Ir. Anton Wibisono (kepala keluarga; istrinya, Bu Mira, tidak memiliki NPWP sendiri; menanggung dua anak kandung) adalah konsultan sistem manajemen mutu lepas di Semarang yang memberitahukan penggunaan NPPN pada 3 Maret 2026; persentase norma untuk kegiatannya (diberikan) 40%. Penerimaan 2026: dari klien badan Rp720.000.000 (setiap pembayaran bulanan per klien tidak melebihi Rp120.000.000 dan dipotong PPh 21 bukan pegawai) serta dari klien orang pribadi Rp180.000.000 (tidak dipotong). Ia mempekerjakan Bu Mira sebagai staf administrasi kantornya dengan gaji Rp7.000.000 per bulan, membayar sewa kantor Rp60.000.000, dan menggaji dua asisten konsultan Rp144.000.000. Ia juga menerima bunga deposito Rp30.000.000 (PPh final) dan hibah Rp100.000.000 dari ayah kandungnya. Penghasilan neto pekerjaan bebas Ir. Anton 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp276.000.000", B: "Rp342.000.000", C: "Rp372.000.000", D: "Rp360.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "final-nonfinal" },
      pembahasan: {
        inti: "Pengguna NPPN menghitung neto = persentase norma × seluruh peredaran bruto pekerjaan bebas (dari klien badan maupun orang pribadi). Biaya riil seperti sewa kantor dan gaji (termasuk gaji Bu Mira) tidak dikurangkan lagi, dan PPh 21 yang dipotong klien adalah kredit pajak.",
        jejakHitung: [ ["Peredaran bruto (Rp720.000.000 + Rp180.000.000)", "Rp900.000.000"], ["Neto = 40% × Rp900.000.000", "Rp360.000.000"], ["Sewa kantor, gaji asisten, gaji Bu Mira", "tidak dikurangkan (sudah tercermin dalam norma)"], ["Bunga deposito (final) dan hibah ayah (bukan objek)", "di luar peredaran bruto"] ],
        mengapaSalah: { A: "Mengurangkan gaji Bu Mira (Rp84 juta); pada NPPN biaya riil tidak dikurangkan", B: "Mengurangkan PPh 21 bukan pegawai (2,5% × Rp720 juta = Rp18 juta); PPh yang dipotong adalah kredit pajak", C: "Memasukkan bunga deposito ke peredaran bruto; bunga deposito dikenai PPh final" },
        jebakan: "Banyak biaya riil disajikan untuk memancing pengurangan; persentase norma sudah memperhitungkan biaya."
      },
      dasarHukum: [ { pasal: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-17/PJ/2015 (persentase norma)" }, { pasal: "PMK 168/2023 (PPh 21 bukan pegawai)", berlakuSejak: "2024-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A1-089", topik: "A1.6", kasusId: "V-A1-09", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data Ir. Anton Wibisono (konsultan lepas dengan NPPN; neto pekerjaan bebas 2026 Rp360.000.000). Bu Mira tidak memiliki NPWP sendiri, tidak membuat perjanjian pisah harta, dan satu-satunya penghasilannya adalah gaji sebagai staf administrasi di kantor konsultan Ir. Anton; BPA1 2026 menunjukkan penghasilan neto Rp79.800.000 dan PPh 21 Rp1.290.000 (dihitung pemberi kerja dengan PTKP TK/0). Pada 1 Januari 2026 mereka menanggung dua anak kandung; ibu kandung Ir. Anton baru tinggal bersama dan ditanggung sepenuhnya sejak Mei 2026. Zakat penghasilan melalui BAZNAS Rp9.000.000 (bukti sah). PPh terutang keluarga Ir. Anton Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp39.875.000", B: "Rp46.325.000", C: "Rp45.200.000", D: "Rp59.825.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penghasilan Bu Mira tidak memenuhi syarat ketiga Pasal 8 ayat (1) karena pekerjaannya berhubungan dengan pekerjaan bebas suami, sehingga digabung. Karena digabung, PTKP bertambah Rp54 juta untuk istri (K/I/2). Ibu kandung yang baru ditanggung sejak Mei belum dihitung karena status PTKP ditentukan pada 1 Januari.",
        jejakHitung: [ ["Neto Ir. Anton (NPPN)", "Rp360.000.000"], ["+ Neto Bu Mira (digabung)", "Rp79.800.000"], ["− Zakat BAZNAS", "Rp9.000.000"], ["− PTKP K/I/2 (Rp54 jt + Rp4,5 jt + Rp54 jt + 2 × Rp4,5 jt)", "Rp121.500.000"], ["PKP", "Rp309.300.000"], ["Rp31.500.000 + 25% × Rp59.300.000", "Rp46.325.000"] ],
        mengapaSalah: { A: "Menganggap penghasilan Bu Mira final (tidak digabung) dengan PTKP K/2; syarat 'tidak ada hubungannya dengan usaha atau pekerjaan bebas suami' tidak terpenuhi", C: "Menghitung ibu kandung sebagai tanggungan 2026 (K/I/3); tanggungan yang baru ada sejak Mei dihitung mulai 2027", D: "Menggabungkan penghasilan Bu Mira tetapi tidak menambah PTKP Rp54 juta untuk istri yang penghasilannya digabung" },
        jebakan: "Gaji istri dari usaha atau pekerjaan bebas suami selalu digabung, walaupun hanya dari satu pemberi kerja dan sudah dipotong PPh 21."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) UU PPh dan penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 7 ayat (1) dan (2) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A1-090", topik: "A1.8", kasusId: "V-A1-09", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Lanjutan data keluarga Ir. Anton Wibisono: PPh terutang 2026 atas penghasilan gabungan Rp46.325.000. Bukti yang tersedia: bukti potong PPh 21 bukan pegawai dari klien badan berjumlah Rp18.000.000; BPA1 Bu Mira (staf kantor Ir. Anton, penghasilannya digabung) dengan PPh 21 Rp1.290.000; bukti setor PPh 25 Ir. Anton Rp1.500.000 × 12 bulan; bukti potong PPh final bunga deposito Rp6.000.000; dan STP atas keterlambatan setor PPh 25 Masa Mei 2026 yang berisi bunga Rp30.300 (pokok PPh 25 Masa Mei sudah termasuk dalam bukti setor di atas). PPh Pasal 29 yang harus dilunasi sebelum SPT 2026 disampaikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.325.000", B: "Rp3.035.000", C: "Rp9.035.000", D: "Rp9.004.700" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Karena penghasilan Bu Mira digabung, PPh 21 pada BPA1-nya ikut menjadi kredit dalam SPT Ir. Anton. Kredit lainnya PPh 21 bukan pegawai dan PPh 25. PPh final deposito dan bunga STP bukan kredit pajak.",
        jejakHitung: [ ["PPh terutang", "Rp46.325.000"], ["− PPh 21 bukan pegawai", "Rp18.000.000"], ["− PPh 21 BPA1 Bu Mira (penghasilan digabung)", "Rp1.290.000"], ["− PPh 25 (12 × Rp1.500.000)", "Rp18.000.000"], ["PPh final deposito dan bunga STP", "tidak dikreditkan"], ["PPh Pasal 29", "Rp9.035.000"] ],
        mengapaSalah: { A: "Tidak mengkreditkan PPh 21 Bu Mira; karena penghasilannya digabung, PPh 21-nya menjadi kredit SPT keluarga", B: "Ikut mengkreditkan PPh final bunga deposito Rp6.000.000", D: "Mengkreditkan bunga STP Rp30.300; sanksi administrasi bukan kredit pajak (yang dikreditkan hanya pokok PPh 25)" },
        jebakan: "Selisih opsi C dan D hanya Rp30.300 — sanksi bunga STP sering disangka kredit pajak."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 29 UU PPh; Pasal 9 ayat (2) UU KUP", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A1-091", topik: "A1.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Pak Robert dan Bu Linda menikah pada 2015 tanpa perjanjian pisah harta dan menanggung satu anak. Sejak Maret 2025 mereka hidup berpisah berdasarkan putusan hakim, tetapi belum bercerai. Pada Tahun Pajak 2026 Pak Robert memperoleh penghasilan dari usaha percetakan dan Bu Linda dari usaha katering (keduanya tidak memakai PPh final). Pernyataan yang PALING TEPAT tentang PPh Tahun Pajak 2026 mereka adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Karena hidup berpisah berdasarkan putusan hakim, penghasilan Pak Robert dan Bu Linda dikenai pajak secara terpisah: masing-masing menghitung penghasilan kena pajak dengan PTKP-nya sendiri dan menyampaikan SPT sendiri, tanpa menggabungkan penghasilan neto",
        B: "Karena hidup berpisah berdasarkan kesepakatan tertulis di antara mereka, penghasilan Pak Robert dan Bu Linda dikenai pajak secara terpisah: masing-masing menghitung penghasilan kena pajak dengan PTKP-nya sendiri dan menyampaikan SPT sendiri, tanpa menggabungkan penghasilan neto",
        C: "Karena hidup berpisah berdasarkan putusan hakim, penghasilan neto Pak Robert dan Bu Linda digabung lebih dahulu, PPh dihitung dengan PTKP gabungan, lalu dibagi sebanding penghasilan neto masing-masing",
        D: "Karena hidup berpisah berdasarkan putusan hakim, penghasilan Bu Linda tetap digabung dengan Pak Robert sebagai kepala keluarga sampai perceraian berkekuatan hukum tetap"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 8 ayat (2) huruf a UU PPh: suami-istri yang hidup berpisah berdasarkan putusan hakim (HB) dikenai pajak secara terpisah tanpa penggabungan. Mekanisme 'gabung lalu bagi proporsional' (Pasal 8 ayat (3)) hanya untuk PH dan MT.",
        jejakHitung: [ ["HB (putusan hakim)", "terpisah penuh, tanpa penggabungan"], ["PH (perjanjian pisah harta) dan MT (istri memilih sendiri)", "digabung, lalu dibagi sebanding neto"], ["KK", "digabung dalam SPT suami"] ],
        mengapaSalah: { B: "Pemisahan penuh mensyaratkan putusan hakim; kesepakatan tertulis bukan dasar status HB (perjanjian pisah harta pun tetap digabung lalu dibagi)", C: "Penggabungan lalu pembagian proporsional berlaku untuk PH dan MT, bukan HB", D: "Status HB tidak menunggu perceraian; putusan hakim tentang hidup berpisah sudah cukup" },
        jebakan: "Opsi A dan B hanya berbeda pada dasar hidup berpisah: putusan hakim vs kesepakatan."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) dan (3) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A1-092", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Tuan Gerald (TK/0, pengusaha garmen dengan pembukuan) menghitung Penghasilan Kena Pajak Tahun Pajak 2026 sebesar Rp1.234.567.890 setelah zakat, kompensasi kerugian, dan PTKP, tetapi belum membulatkannya. PPh terutang menurut Pasal 17 ayat (1) huruf a UU PPh adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp314.370.367", B: "Rp315.370.100", C: "Rp370.370.100", D: "Rp314.370.100" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "PKP dibulatkan ke bawah menjadi Rp1.234.567.000. PPh = Rp94.000.000 (atas Rp500 juta pertama) + 30% × Rp734.567.000.",
        jejakHitung: [ ["PKP dibulatkan ke bawah dalam ribuan", "Rp1.234.567.000"], ["PPh atas Rp500.000.000 pertama", "Rp94.000.000"], ["30% × Rp734.567.000", "Rp220.370.100"], ["PPh terutang", "Rp314.370.100"] ],
        mengapaSalah: { A: "Tidak membulatkan PKP ke bawah dalam ribuan rupiah penuh", B: "Memakai lapisan lama UU 36/2008 (5% hanya s.d. Rp50 juta), sehingga PPh atas Rp500 juta pertama menjadi Rp95 juta", C: "Mengalikan seluruh PKP dengan 30%; tarif Pasal 17 berlapis" },
        jebakan: "Dua pengecoh hanya berselisih Rp267 dan Rp1 juta dari kunci: pembulatan dan lapisan lama."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a dan ayat (4) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A1-093", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Maharani (TK/0, bercerai sejak 2023, tanpa tanggungan) menjalankan pabrik roti dengan pembukuan. Data Tahun Pajak 2026: penghasilan neto fiskal usaha dalam negeri Rp4.850.000.000; dividen dari Siam Bake Co., Ltd. (Thailand) Rp320.000.000 yang tidak diinvestasikan di Indonesia, dengan pajak Thailand yang telah dipotong (diberikan) Rp32.000.000; dividen dari PT Roti Nusantara Tbk (dalam negeri) Rp500.000.000 yang seluruhnya diinvestasikan di Indonesia sesuai PMK 18/PMK.03/2021; zakat penghasilan melalui BAZNAS Rp110.000.000 (bukti sah); infak sukarela Rp15.000.000; dan PPh 25 yang disetor Rp960.000.000. Tidak ada kompensasi kerugian. PPh terutang Ibu Maharani Tahun Pajak 2026 (sebelum kredit pajak) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.446.800.000", B: "Rp1.441.300.000", C: "Rp1.446.100.000", D: "Rp1.349.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Dividen luar negeri yang tidak diinvestasikan di Indonesia digabung dan dikenai tarif Pasal 17 (pajak Thailand nanti menjadi kredit PPh 24), sedangkan dividen dalam negeri yang diinvestasikan bukan objek. PKP = neto dalam negeri + dividen Thailand − zakat − PTKP = Rp5.006.000.000, sehingga Rp6 juta teratas terkena lapisan 35%.",
        jejakHitung: [ ["Neto dalam negeri + dividen Thailand", "Rp5.170.000.000"], ["− Zakat BAZNAS (infak tidak)", "Rp110.000.000"], ["− PTKP TK/0", "Rp54.000.000"], ["PKP", "Rp5.006.000.000"], ["PPh atas Rp5.000.000.000 pertama", "Rp1.444.000.000"], ["35% × Rp6.000.000", "Rp2.100.000"], ["PPh terutang", "Rp1.446.100.000"] ],
        mengapaSalah: { A: "Memakai lapisan pra-UU HPP (5% hanya s.d. Rp50 juta dan tarif tertinggi 30%, tanpa lapisan 35%)", B: "Ikut mengurangkan infak sukarela Rp15.000.000, yang bukan zakat atau sumbangan keagamaan wajib", D: "Memperlakukan dividen Thailand seperti dividen dalam negeri yang dikenai PPh final 10%; dividen luar negeri yang tidak diinvestasikan dikenai tarif Pasal 17" },
        jebakan: "PKP hanya Rp6 juta di atas Rp5 miliar: lapisan 35% mudah terlewat, dan pengecoh A hanya berselisih Rp700.000."
      },
      dasarHukum: [ { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 4 ayat (1) huruf g dan ayat (3) huruf f UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A1-094", topik: "A1.7", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      kutipan: "PMK 114/2025 (parafrase): zakat atau sumbangan keagamaan yang sifatnya wajib dapat dikurangkan dari penghasilan bruto apabila dibayarkan kepada badan amil zakat, lembaga amil zakat, atau lembaga keagamaan yang dibentuk atau disahkan pemerintah, didukung bukti pembayaran yang sah, dan dikurangkan pada tahun pajak dibayarkannya; pengurangan itu tidak boleh menimbulkan kerugian.",
      stem: "Bu Ratna Kusuma adalah pegawai tetap PT Andalas sekaligus pemilik toko kue dengan pembukuan. Pada 2026: (1) zakat penghasilan Rp4.800.000 dipotong dari gajinya oleh PT Andalas dan disetor ke BAZNAS atas namanya; (2) zakat penghasilan atas usaha toko kuenya Rp12.000.000 dibayar sendiri ke LAZ resmi pada 30 Desember 2026 dengan bukti setor sah; (3) zakat Rp3.000.000 diberikan langsung kepada tetangga yang membutuhkan; (4) infak pembangunan musala Rp5.000.000. Penghasilan neto 2026 sebelum zakat Rp240.000.000. Berdasarkan kutipan tersebut, pernyataan yang PALING TEPAT adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Zakat yang dapat dikurangkan Rp16.800.000, tetapi zakat yang dipotong melalui PT Andalas dikurangkan dalam SPT PT Andalas karena perusahaan yang menyetorkannya",
        B: "Zakat yang dapat dikurangkan Rp16.800.000 (butir 1 dan 2) dan dikurangkan dalam SPT Tahunan 2026 Bu Ratna karena dibayar pada 2026 kepada lembaga resmi dengan bukti sah; butir 3 dan 4 tidak dapat dikurangkan",
        C: "Zakat yang dapat dikurangkan Rp19.800.000 (butir 1, 2, dan 3) karena seluruhnya merupakan zakat yang sifatnya wajib, tanpa memandang penerimanya",
        D: "Zakat yang dapat dikurangkan Rp4.800.000 dalam SPT 2026; zakat atas usaha toko yang dibayar 30 Desember 2026 baru dapat dikurangkan dalam SPT 2027 karena diterima lembaga pada akhir tahun"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Zakat yang dipotong melalui pemberi kerja dan zakat yang dibayar sendiri ke LAZ resmi sama-sama menjadi pengurang bagi Bu Ratna pada tahun dibayarkan (2026). Zakat yang diberikan langsung kepada perorangan dan infak sukarela tidak memenuhi syarat.",
        jejakHitung: [ ["(1) Zakat melalui pemberi kerja ke BAZNAS", "Rp4.800.000"], ["(2) Zakat penghasilan usaha ke LAZ resmi, dibayar 2026", "Rp12.000.000"], ["(3) langsung ke perorangan; (4) infak sukarela", "tidak dapat dikurangkan"], ["Jumlah yang dapat dikurangkan", "Rp16.800.000"] ],
        mengapaSalah: { A: "Zakat yang dipotong dari gaji adalah zakat pegawai; pengurangnya ada pada penghitungan PPh pegawai, bukan pada SPT perusahaan", C: "Zakat yang diberikan langsung kepada perorangan tidak memenuhi syarat penerima (BAZNAS, LAZ, atau lembaga resmi)", D: "Zakat dikurangkan pada tahun pajak dibayarkan; pembayaran 30 Desember 2026 masuk SPT 2026" },
        jebakan: "Tiap pengecoh melanggar satu syarat: pihak yang mengurangkan, penerima, atau tahun pengurangan."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf g UU PPh; PP 60/2010; PMK 114/2025", berlakuSejak: "2025-12-31" }, { pasal: "PMK 168/2023 (zakat melalui pemberi kerja sebagai pengurang PPh 21 Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A1-095", topik: "A1.8", kasusId: "V-A1-07", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Data untuk soal ini dan soal berikutnya: Sdri. Clara Wijaya (belum menikah; menanggung sepenuhnya ibu kandungnya sejak 2024, status TK/1) bekerja sebagai pegawai tetap PT Alfa Retail pada Januari–Juni 2026, lalu pindah ke PT Beta Logistik mulai Juli 2026. Masing-masing pemberi kerja menerbitkan BPA1: PT Alfa Retail — penghasilan neto Rp120.000.000, PPh 21 Rp3.225.000; PT Beta Logistik — penghasilan neto Rp150.000.000, PPh 21 Rp7.725.000. Selain itu ia menerima bunga deposito Rp6.000.000 (PPh final Rp1.200.000), membayar premi asuransi jiwa untuk dirinya sendiri Rp6.000.000, dan tidak membayar zakat. Ia tidak memiliki usaha atau pekerjaan bebas. PPh Pasal 29 yang harus dilunasi Sdri. Clara dalam SPT Tahunan 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.000.000", B: "Rp13.575.000", C: "Rp13.875.000", D: "Rp14.775.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dalam SPT, neto kedua BPA1 digabung dan PTKP TK/1 hanya dipakai sekali. Masing-masing pemberi kerja telah memperhitungkan PTKP setahun penuh dan lapisan 5% dari awal, sehingga jumlah kreditnya lebih kecil daripada PPh terutang dan timbul kurang bayar.",
        jejakHitung: [ ["Neto pekerjaan (Rp120.000.000 + Rp150.000.000)", "Rp270.000.000"], ["− PTKP TK/1", "Rp58.500.000"], ["PKP", "Rp211.500.000"], ["PPh: Rp3.000.000 + 15% × Rp151.500.000", "Rp25.725.000"], ["− Kredit PPh 21 (Rp3.225.000 + Rp7.725.000)", "Rp10.950.000"], ["Premi asuransi jiwa pribadi; bunga deposito final", "bukan pengurang; bukan kredit"], ["PPh Pasal 29", "Rp14.775.000"] ],
        mengapaSalah: { A: "Memakai PTKP dua kali (Rp117.000.000) seperti pada masing-masing BPA1; dalam SPT, PTKP hanya sekali setahun", B: "Ikut mengkreditkan PPh final bunga deposito Rp1.200.000", C: "Mengurangkan premi asuransi jiwa pribadi Rp6.000.000; premi yang dibayar orang pribadi untuk dirinya tidak dapat dikurangkan (Pasal 9 ayat (1) huruf d)" },
        jebakan: "Pegawai yang pindah kerja dalam satu tahun hampir selalu kurang bayar karena dua pemberi kerja masing-masing memakai PTKP setahun penuh dan lapisan tarif dari nol."
      },
      dasarHukum: [ { pasal: "Pasal 7, Pasal 17 ayat (1) huruf a, dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (PPh 21 Masa Pajak Terakhir dan BPA1)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 29 UU PPh; Pasal 9 ayat (2) UU KUP", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-096", topik: "A1.11", kasusId: "V-A1-07", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2,
      formulirRef: "1770S.induk.12",
      stem: "Lanjutan data Sdri. Clara Wijaya (TK/1, pegawai tanpa usaha atau pekerjaan bebas): dua BPA1 Tahun Pajak 2026 — PT Alfa Retail (neto Rp120.000.000; PPh 21 Rp3.225.000) dan PT Beta Logistik (neto Rp150.000.000; PPh 21 Rp7.725.000) — serta bunga deposito Rp6.000.000 (PPh final Rp1.200.000); PPh terutang Rp25.725.000. Pada Maret 2027 ia menyusun SPT Tahunan di Coretax. Menurut peta logis formulir 1770 S (angka 1 neto dalam negeri sehubungan dengan pekerjaan, angka 7 PTKP, angka 12 PPh yang dipotong/dipungut pihak lain), isian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Angka 1 Rp270.000.000; angka 7 Rp58.500.000; angka 12 Rp10.950.000; bunga deposito dan PPh finalnya pada lampiran penghasilan final tanpa dikreditkan; status kurang bayar Rp14.775.000",
        B: "Angka 1 Rp270.000.000; angka 7 Rp117.000.000 (PTKP dari dua BPA1); angka 12 Rp10.950.000; bunga deposito pada lampiran penghasilan final; status kurang bayar Rp6.000.000",
        C: "Angka 1 Rp276.000.000 (termasuk bunga deposito); angka 7 Rp58.500.000; angka 12 Rp12.150.000 (termasuk PPh final); status kurang bayar Rp14.475.000",
        D: "Angka 1 Rp150.000.000 (hanya BPA1 pemberi kerja terakhir, karena BPA1 pertama sudah final); angka 7 Rp58.500.000; angka 12 Rp7.725.000; status nihil"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Neto kedua BPA1 dijumlahkan pada angka 1, PTKP TK/1 dicantumkan sekali pada angka 7, dan PPh 21 dari kedua BPA1 dijumlahkan sebagai kredit pada angka 12. Bunga deposito masuk lampiran penghasilan final. Hasilnya kurang bayar Rp14.775.000.",
        jejakHitung: [ ["Angka 1 (Rp120.000.000 + Rp150.000.000)", "Rp270.000.000"], ["Angka 7 PTKP TK/1", "Rp58.500.000"], ["Angka 8 PKP", "Rp211.500.000"], ["Angka 9 PPh terutang", "Rp25.725.000"], ["Angka 12 (Rp3.225.000 + Rp7.725.000)", "Rp10.950.000"], ["Status", "kurang bayar Rp14.775.000"] ],
        mengapaSalah: { B: "PTKP dalam SPT dipakai sekali setahun, bukan per pemberi kerja", C: "Bunga deposito final tidak masuk angka 1 dan PPh finalnya tidak masuk kredit angka 12", D: "PPh 21 pegawai tetap tidak final; seluruh BPA1 tahun berjalan dilaporkan dan digabung" },
        jebakan: "Coretax mengisi lampiran dari bukti potong, tetapi Wajib Pajak tetap harus memastikan kedua BPA1 terambil dan bunga deposito tidak tercampur ke penghasilan tidak final."
      },
      dasarHukum: [ { pasal: "Pasal 7 dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Tahunan OP dan BPA1 di Coretax)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Nomor angka mengikuti formulir 1770 S pra-Coretax sebagai peta logis; di Coretax (PER-11/PJ/2025) komponen yang sama diisi melalui lampiran sehingga penomoran dapat berbeda. Penggabungan dua BPA1 dan perlakuan bunga final yang menentukan kunci tidak bergantung pada penomoran."
    },
    {
      id: "A1-097", topik: "A1.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Hartono Gunadi (K/1, SPDN) memiliki usaha distribusi di Medan dengan pembukuan. Data Tahun Pajak 2026: penghasilan neto usaha dalam negeri Rp763.000.000; penghasilan neto sewa apartemen di Singapura Rp200.000.000 dengan pajak Singapura yang telah dibayar Rp40.000.000; penghasilan neto restoran miliknya di Malaysia Rp100.000.000 dengan pajak Malaysia Rp30.000.000; dan rugi usaha kafe di Vietnam Rp50.000.000. Tidak ada zakat dan kompensasi kerugian; PPh 25 yang disetor Rp120.000.000; seluruh bukti pembayaran pajak luar negeri lengkap. Kredit PPh Pasal 24 maksimum yang dapat diperhitungkan dalam SPT 2026 adalah ...",
      kataKualifikasi: ["maksimum"],
      opsi: { A: "Rp70.000.000", B: "Rp73.200.000", C: "Rp64.400.000", D: "Rp64.105.263" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Batas kredit dihitung per negara: (neto negara itu ÷ PKP) × PPh terutang, dan yang dikreditkan adalah yang terkecil antara batas itu dan pajak yang benar-benar dibayar. Rugi di Vietnam tidak digabung.",
        jejakHitung: [ ["PKP (Rp763 jt + Rp200 jt + Rp100 jt − PTKP K/1 Rp63 jt; rugi Vietnam tidak digabung)", "Rp1.000.000.000"], ["PPh terutang: Rp94.000.000 + 30% × Rp500.000.000", "Rp244.000.000"], ["Batas Singapura: 200/1.000 × Rp244.000.000 = Rp48.800.000", "kredit Rp40.000.000 (pajak dibayar)"], ["Batas Malaysia: 100/1.000 × Rp244.000.000 = Rp24.400.000", "kredit Rp24.400.000 (batas)"], ["Jumlah kredit PPh 24", "Rp64.400.000"] ],
        mengapaSalah: { A: "Mengkreditkan seluruh pajak luar negeri tanpa batas per negara; kelebihan pajak Malaysia Rp5.600.000 tidak dapat dikreditkan", B: "Mengkreditkan batas maksimum Singapura walaupun pajak yang dibayar hanya Rp40 juta; kredit adalah nilai yang terkecil", D: "Menggabungkan rugi Vietnam sehingga PKP turun menjadi Rp950 juta; kerugian di luar negeri tidak digabung" },
        jebakan: "Dua negara, dua hasil berbeda: satu dibatasi pajak yang dibayar, satu dibatasi rumus proporsi."
      },
      dasarHukum: [ { pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (kredit pajak luar negeri; rugi luar negeri)", berlakuSejak: "2018-12-31" } ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A1-098", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Ferry Santoso (K/0) menjalankan usaha percetakan orang pribadi dengan pembukuan (peredaran bruto 2025 Rp5,6 miliar) dan bukan pedagang pengecer. SPT Tahunan 2025 yang ia sampaikan pada 24 Maret 2026 memuat penghasilan neto usaha Rp300.000.000 dan keuntungan penjualan saham PT Kertas Prima (perusahaan tertutup, tidak tercatat di bursa) Rp200.000.000; saham itu dimiliki sebagai investasi jangka panjang, sehingga keuntungannya merupakan penghasilan tidak teratur. Tidak ada zakat dan kompensasi kerugian. Kredit pajak 2025: PPh 22 atas impor tinta Rp4.200.000; PPh 23 yang dipotong pelanggan badan atas jasa cetak Rp3.000.000; PPh 25 yang disetor Rp30.000.000. Angsuran PPh Pasal 25 per bulan yang berlaku untuk Masa April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.014.583", B: "Rp1.918.750", C: "Rp3.368.750", D: "Nihil" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penghasilan tidak teratur dikeluarkan dari dasar angsuran: PPh dihitung ulang atas penghasilan teratur saja (PKP Rp241,5 juta, PPh Rp30.225.000), lalu dikurangi PPh 22 dan PPh 23, kemudian dibagi 12.",
        jejakHitung: [ ["PKP tanpa penghasilan tidak teratur (Rp300.000.000 − PTKP K/0 Rp58.500.000)", "Rp241.500.000"], ["PPh atas penghasilan teratur: Rp3.000.000 + 15% × Rp181.500.000", "Rp30.225.000"], ["− PPh 22 dan PPh 23", "Rp7.200.000"], ["PPh 25 tahun 2025", "tidak dikurangkan"], ["Rp23.025.000 ÷ 12", "Rp1.918.750"] ],
        mengapaSalah: { A: "Memakai PPh terutang seluruhnya (Rp79.375.000) termasuk atas keuntungan saham yang tidak teratur", C: "Mengalokasikan PPh terutang secara proporsional 300/500; yang benar menghitung ulang PPh dengan tarif Pasal 17 atas penghasilan teratur", D: "Ikut mengurangkan PPh 25 yang disetor selama 2025 sehingga hasilnya negatif" },
        jebakan: "Penghasilan tidak teratur membesarkan PPh terutang tahun lalu; bila tidak dikeluarkan, angsuran tahun berjalan membengkak lebih dari tiga kali lipat."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 (angsuran bagi WP yang memperoleh penghasilan tidak teratur)", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Rumus angsuran bagi Wajib Pajak yang memperoleh penghasilan tidak teratur (PPh dihitung ulang atas penghasilan teratur) mengikuti PMK 255/PMK.03/2008 sebagaimana dikenal umum; teks pasal PMK dan perubahannya belum dibaca langsung dalam riset proyek."
    },
    {
      id: "A1-099", topik: "A1.9", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Untuk Tahun Pajak 2026 keempat Wajib Pajak orang pribadi berikut tidak memakai PPh final UMKM karena peredaran bruto 2025-nya di atas Rp4,8 miliar. Wajib Pajak yang angsuran PPh Pasal 25-nya dihitung 0,75% dari peredaran bruto bulanan setiap tempat usaha sebagai Wajib Pajak orang pribadi pengusaha tertentu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bapak Andi, distributor bahan bangunan yang hanya menjual partai besar kepada toko-toko dari gudangnya", B: "dr. Budi, dokter spesialis yang berpraktik di dua rumah sakit", C: "Ibu Citra, pemilik dua gedung rumah kos yang disewakan bulanan", D: "Ibu Dewi, pedagang pengecer pakaian yang memiliki toko di dua pusat perbelanjaan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Wajib Pajak orang pribadi pengusaha tertentu adalah pedagang pengecer yang mempunyai satu atau lebih tempat usaha; angsurannya 0,75% × peredaran bruto bulanan tiap tempat usaha.",
        jejakHitung: [ ["Kriteria OPPT", "pedagang pengecer dengan 1 atau lebih tempat usaha"], ["Ibu Dewi", "pengecer dengan 2 toko → OPPT"] ],
        mengapaSalah: { A: "Distributor yang menjual kepada toko lain adalah pedagang besar, bukan pengecer; angsurannya mengikuti Pasal 25 ayat (1)", B: "Dokter menjalankan pekerjaan bebas, bukan perdagangan eceran", C: "Penghasilan sewa bangunan dikenai PPh final 10%, bukan dasar angsuran OPPT" },
        jebakan: "Kata kuncinya 'pedagang pengecer', bukan sekadar 'punya lebih dari satu tempat usaha'."
      },
      dasarHukum: [ { pasal: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 Pasal 7 ayat (1)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 25 ayat (7) UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "A1-100", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Sulastri (OP, toko bahan kue di Kudus, terdaftar 2020) memakai PPh final UMKM dengan Surat Keterangan yang masih berlaku; peredaran bruto 2025 Rp2,1 miliar. Peredaran bruto 2026: Januari Rp150.000.000; Februari Rp170.000.000; Maret Rp230.000.000; April Rp200.000.000, termasuk penjualan Rp80.000.000 kepada Dinas Pendidikan Kabupaten Kudus. Bendahara dinas tersebut, setelah menerima salinan Surat Keterangan, memungut PPh final 0,5% atas pembayarannya pada April 2026; pembeli lain tidak memotong apa pun. Peredaran bruto 2025 dan 2026 tidak mencakup pekerjaan bebas maupun penghasilan dari luar negeri. PPh final UMKM Masa April 2026 yang masih harus disetor sendiri oleh Ibu Sulastri adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.000.000", B: "Rp850.000", C: "Rp600.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bagian Rp500 juta habis pada Maret (kumulatif Rp550 juta), sehingga seluruh peredaran bruto April Rp200 juta dikenai 0,5% = Rp1.000.000. Bagian Rp80 juta telah dipungut bendahara (Rp400.000) sebagai pelunasan PPh final, sehingga yang disetor sendiri Rp600.000.",
        jejakHitung: [ ["Kumulatif s.d. Maret (Rp150 jt + Rp170 jt + Rp230 jt)", "Rp550.000.000 (Rp500 juta habis di Maret)"], ["PPh final April: 0,5% × Rp200.000.000", "Rp1.000.000"], ["Dipungut bendahara: 0,5% × Rp80.000.000", "Rp400.000"], ["Disetor sendiri (0,5% × Rp120.000.000)", "Rp600.000"] ],
        mengapaSalah: { A: "Lupa bahwa Rp400.000 telah dipungut bendahara sebagai pelunasan PPh final", B: "Menghitung ulang bagian Rp500 juta secara kumulatif pada April (Rp750 juta − Rp500 juta) padahal kelebihan Rp50 juta sudah dikenai pada Masa Maret", D: "Menganggap bagian Rp500 juta berlaku setiap bulan; bagian itu berlaku sekali dalam satu tahun pajak" },
        jebakan: "Bendahara pemerintah lazimnya memungut PPh 22 1,5%; karena Ibu Sulastri menyerahkan Surat Keterangan, yang dipungut adalah PPh final 0,5%."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (2a) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 Pasal 56–63 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "PMK 164/2023 (Surat Keterangan dan pemungutan PPh final UMKM)" }, { pasal: "PMK 81/2024 Pasal 94 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A1-101", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 7 ayat (2a) UU PPh s.t.d.t.d. UU 7/2021: Wajib Pajak orang pribadi yang memiliki peredaran bruto tertentu sebagaimana diatur dalam peraturan pemerintah tidak dikenai Pajak Penghasilan atas bagian peredaran bruto sampai dengan Rp500.000.000 dalam 1 tahun pajak.",
      stem: "Pak Dodi dan Bu Sinta menikah tanpa perjanjian pisah harta, dan Bu Sinta tidak memilih menjalankan hak dan kewajiban perpajakannya sendiri, sehingga kewajiban perpajakan keluarga dijalankan Pak Dodi sebagai kepala keluarga. Pada 2026 keduanya memakai PPh final UMKM: Pak Dodi berjualan bakso dengan peredaran bruto Rp420.000.000 dan Bu Sinta menjalankan usaha binatu dengan peredaran bruto Rp360.000.000. Tidak ada penghasilan lain, pekerjaan bebas, atau penghasilan dari luar negeri. Berdasarkan kutipan tersebut, jumlah PPh final UMKM keluarga ini untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.400.000", B: "Rp0", C: "Rp1.800.000", D: "Rp3.900.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Pada status KK, peredaran bruto istri digabung dengan suami sebagai satu Wajib Pajak, sehingga bagian Rp500 juta yang tidak dikenai pajak hanya berlaku sekali untuk keluarga: 0,5% × (Rp780 juta − Rp500 juta).",
        jejakHitung: [ ["Peredaran bruto keluarga (Rp420 jt + Rp360 jt)", "Rp780.000.000"], ["− Bagian tidak kena pajak (sekali untuk satu Wajib Pajak)", "Rp500.000.000"], ["Dasar pengenaan", "Rp280.000.000"], ["0,5% × Rp280.000.000", "Rp1.400.000"] ],
        mengapaSalah: { B: "Memberi bagian Rp500 juta kepada masing-masing; perlakuan itu untuk suami-istri yang menjalankan kewajiban sendiri-sendiri (PH/MT), bukan KK", C: "Memakai bagian Rp500 juta hanya untuk usaha suami lalu mengenakan seluruh omzet istri; bagian itu berlaku atas peredaran bruto gabungan", D: "Mengenakan 0,5% sejak rupiah pertama seperti PP 23/2018" },
        jebakan: "Status keluarga (KK vs PH/MT) menentukan berapa kali bagian Rp500 juta dapat dipakai."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (2a) dan Pasal 8 ayat (1) UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026; PMK 164/2023", berlakuSejak: "2026-04-22" } ],
      anggaranDetik: 130,
      verifikasi: "◐",
      peringatan: "Perlakuan bagian Rp500 juta bagi suami-istri berstatus KK (sekali untuk keluarga) dan PH/MT (masing-masing) mengikuti penjelasan PP 55/2022 dan PMK 164/2023 sebagaimana dirangkum sumber sekunder; belum dicek ke teks resmi."
    },
    {
      id: "A1-102", topik: "A1.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 9 ayat (2a) UU KUP s.t.d.t.d. UU 7/2021 (diringkas): pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan, dihitung dari tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan. Tarif bunga per bulan = (suku bunga acuan + 5%) ÷ 12.",
      stem: "Ibu Wulandari (OP, warung kelontong dengan PPh final UMKM) menghitung PPh final Masa Mei 2026 Rp1.150.000, tetapi baru membuat kode billing di Coretax dan menyetornya pada 3 Agustus 2026. Batas setor Masa Mei 2026 (15 Juni 2026) jatuh pada hari kerja. Anggap tarif bunga per bulan dengan uplift 5% yang berlaku saat jatuh tempo 1,05%. Berdasarkan kutipan tersebut dan PMK 81/2024, besarnya sanksi bunga Pasal 9 ayat (2a) atas keterlambatan penyetoran itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.075", B: "Rp24.150", C: "Rp36.225", D: "Rp46.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Dari jatuh tempo 15 Juni 2026 sampai pembayaran 3 Agustus 2026 terdapat 1 bulan 19 hari, dihitung 2 bulan. Bunga = Rp1.150.000 × 1,05% × 2 = Rp24.150.",
        jejakHitung: [ ["Jatuh tempo (tanggal 15 bulan berikutnya)", "15 Juni 2026"], ["15 Juni–3 Agustus 2026", "1 bulan 19 hari → 2 bulan"], ["Bunga = Rp1.150.000 × 1,05% × 2", "Rp24.150"] ],
        mengapaSalah: { A: "Bagian bulan dihitung penuh; 1 bulan 19 hari menjadi 2 bulan, bukan 1 bulan", C: "Bunga dihitung sejak tanggal jatuh tempo pembayaran (15 Juni), bukan sejak akhir Masa Pajak Mei", D: "Memakai bunga 2% per bulan yang berlaku sebelum UU HPP" },
        jebakan: "Masa bunga dihitung dari tanggal jatuh tempo setor (tanggal 15), bukan dari akhir masa pajak atau batas lapor."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2a) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" }, { pasal: "PMK 81/2024 Pasal 94 (batas setor tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (tarif bunga bulanan)" } ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A1-103", topik: "A1.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      kutipan: "Pasal 7 ayat (2) UU KUP (diringkas): sanksi denda keterlambatan penyampaian SPT tidak dikenakan terhadap, antara lain, Wajib Pajak orang pribadi yang telah meninggal dunia; Wajib Pajak orang pribadi yang sudah tidak melakukan kegiatan usaha atau pekerjaan bebas; Wajib Pajak orang pribadi berstatus warga negara asing yang tidak tinggal lagi di Indonesia; dan Wajib Pajak yang terkena bencana sesuai ketentuan Menteri Keuangan.",
      stem: "Bapak Hendrik Saragih (pengusaha toko besi orang pribadi, menyelenggarakan pembukuan) meninggal dunia pada 2 Maret 2026 sebelum menyampaikan SPT Tahunan PPh OP Tahun Pajak 2025. Warisannya belum terbagi. Anak sulungnya, selaku wakil ahli waris, baru menyampaikan SPT Tahun Pajak 2025 almarhum pada 12 Mei 2026 dengan status nihil. Berdasarkan kutipan tersebut, pernyataan yang PALING TEPAT adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "SPT disampaikan setelah 31 Maret 2026 sehingga dikenai denda Rp100.000 yang ditagihkan kepada ahli waris",
        B: "SPT disampaikan setelah 31 Maret 2026 sehingga dikenai denda Rp1.000.000 karena almarhum menyelenggarakan pembukuan",
        C: "SPT Tahun Pajak 2025 tidak perlu disampaikan karena kewajiban subjektif almarhum berakhir sebelum batas waktu penyampaian SPT",
        D: "SPT Tahun Pajak 2025 tetap wajib disampaikan oleh wakil ahli waris, tetapi denda keterlambatan Pasal 7 ayat (1) tidak dikenakan karena Wajib Pajak orang pribadi telah meninggal dunia"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Kewajiban menyampaikan SPT Tahun Pajak 2025 tetap ada karena penghasilan 2025 diperoleh saat almarhum masih menjadi subjek pajak, dan dilaksanakan oleh wakil/ahli waris; Pasal 7 ayat (2) mengecualikan denda keterlambatan bagi Wajib Pajak orang pribadi yang telah meninggal dunia.",
        jejakHitung: [ ["Batas SPT Tahun Pajak 2025", "31 Maret 2026"], ["Disampaikan", "12 Mei 2026 (terlambat)"], ["Pasal 7 ayat (2): WP orang pribadi meninggal dunia", "denda tidak dikenakan"] ],
        mengapaSalah: { A: "Mengabaikan pengecualian Pasal 7 ayat (2) bagi Wajib Pajak orang pribadi yang telah meninggal dunia", B: "Denda Rp1.000.000 berlaku untuk SPT Tahunan badan; lagi pula denda dikecualikan karena Wajib Pajak telah meninggal dunia", C: "Kewajiban atas Tahun Pajak 2025 tidak hilang karena kematian pada 2026; SPT disampaikan oleh wakil/ahli waris" },
        jebakan: "Terlambat tidak selalu berarti didenda — periksa dahulu daftar pengecualian Pasal 7 ayat (2)."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) dan (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 32 ayat (1) UU KUP (wakil Wajib Pajak, termasuk untuk warisan yang belum terbagi)", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 2 ayat (1) huruf a angka 2 dan Pasal 2A UU PPh", berlakuSejak: "2009-01-01" } ],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "A1-104",
      topik: "A1.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Pernyataan yang tepat mengenai PTKP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Status ditentukan keadaan akhir tahun, sehingga anak yang lahir Desember menambah PTKP", B: "Tanggungan meliputi saudara kandung dan keponakan yang ditanggung sepenuhnya, paling banyak 3 orang", C: "Tanggungan meliputi keluarga sedarah dan semenda garis lurus serta anak angkat, tanpa batas jumlah", D: "Status ditentukan keadaan awal tahun; tanggungan keluarga garis lurus dan anak angkat, maks. 3 orang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PTKP diberikan untuk diri WP, tambahan kawin, tambahan istri yang penghasilannya digabung, dan Rp4,5 juta untuk setiap anggota keluarga sedarah dan semenda dalam garis keturunan lurus serta anak angkat yang ditanggung sepenuhnya, paling banyak 3 orang. Penerapannya ditentukan menurut keadaan pada awal tahun pajak atau awal bagian tahun pajak.",
        jejakHitung: [],
        mengapaSalah: { A: "PTKP ditentukan menurut keadaan awal tahun pajak, bukan akhir tahun; anak yang lahir pada Desember baru diperhitungkan tahun berikutnya.", B: "Saudara kandung dan keponakan adalah keluarga garis ke samping, bukan garis keturunan lurus, sehingga tidak diakui sebagai tanggungan.", C: "Tanggungan dibatasi paling banyak 3 orang untuk setiap keluarga." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 7 ayat (1) dan (2) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 7 ayat (1) dan (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 101/PMK.010/2016 (besaran PTKP)", berlakuSejak: "2016-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 1, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A1-105",
      topik: "A1.4",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Nona Rina, arsitek yang melakukan pekerjaan bebas, pada 1 Januari 2025 belum kawin dan menanggung sepenuhnya ibu kandungnya yang tidak berpenghasilan. Ia telah memberitahukan penggunaan NPPN dalam 3 bulan pertama Tahun Pajak 2025. Peredaran bruto 2025 Rp360.000.000 dan persentase NPPN jasa arsitek di kotanya 45%. PPh terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.200.000,00", B: "Rp1.800.000,00", C: "Rp9.525.000,00", D: "Rp5.175.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Peredaran bruto di bawah Rp4,8 miliar dan NPPN telah diberitahukan tepat waktu, sehingga neto dihitung dengan persentase NPPN. Jasa arsitek adalah pekerjaan bebas yang dikecualikan dari PPh final 0,5%. Ibu kandung adalah keluarga sedarah garis lurus yang ditanggung sepenuhnya, sehingga status TK/1 dengan PTKP Rp58.500.000; tarif Ps. 17 diterapkan per lapisan.",
        jejakHitung: [ [ "Neto = 45% × Rp360.000.000", "Rp162.000.000" ], [ "PTKP TK/1", "Rp58.500.000" ], [ "PKP = Rp162.000.000 − Rp58.500.000", "Rp103.500.000" ], [ "PPh = 5% × Rp60.000.000 + 15% × Rp43.500.000", "Rp9.525.000" ] ],
        mengapaSalah: { A: "Memakai PTKP TK/0 Rp54.000.000 tanpa tanggungan ibu kandung.", B: "0,5% × peredaran bruto (PP 55/2022) tidak berlaku bagi pekerjaan bebas.", D: "Menerapkan tarif 5% atas seluruh PKP tanpa lapisan progresif." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 7 ayat (1), Pasal 14 ayat (2)–(3), Pasal 17 ayat (1) huruf a s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 7 ayat (1), Pasal 14 ayat (2)–(3), Pasal 17 ayat (1) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 56 ayat (3) huruf a dan ayat (4) huruf a", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 22, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A1-106",
      topik: "A1.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      kutipan: "UU PPh Pasal 8 ayat (2) dan (3) (diringkas) (dikutip try out): Penghasilan suami-isteri dikenai pajak secara terpisah apabila: a. hidup berpisah berdasarkan putusan hakim; b. ada perjanjian tertulis pemisahan harta dan penghasilan; atau c. dikehendaki isteri yang memilih menjalankan hak dan kewajiban perpajakannya sendiri. Penghasilan neto huruf b dan c dikenai pajak berdasarkan penggabungan penghasilan neto suami-isteri, dan pajak masing-masing dihitung sebanding dengan penghasilan neto.",
      stem: "Tuan Hasan adalah karyawan pada satu pemberi kerja, sedangkan istrinya, Nyonya Lina, menjalankan usaha butik dan memilih untuk menjalankan hak dan kewajiban perpajakannya sendiri. Mereka belum memiliki anak, tetapi menanggung sepenuhnya ibu kandung Tuan Hasan. Selama tahun 2026, penghasilan neto Tuan Hasan sebesar Rp80.000.000 dan penghasilan neto Nyonya Lina dari usaha (dengan pembukuan) sebesar Rp200.000.000. Berdasarkan hal tersebut, PPh terutang Nyonya Lina untuk Tahun Pajak 2026 sebesar ...",
      kataKualifikasi: [],
      opsi: { A: "Rp13.178.571,00", B: "Rp15.900.000,00", C: "Rp9.225.000,00", D: "Rp18.964.286,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Istri yang memilih menjalankan hak dan kewajiban perpajakannya sendiri (MT) dikenai pajak berdasarkan penggabungan penghasilan neto suami-istri, lalu PPh dibagi sebanding dengan penghasilan neto masing-masing (UU PPh Ps. 8 ayat (2) huruf c dan ayat (3)). PTKP gabungan K/I/1 = Rp117.000.000. PPh 21 yang dipotong dari gaji Tuan Hasan tidak memengaruhi beban Nyonya Lina; kredit pajak diperhitungkan masing-masing.",
        jejakHitung: [ [ "Neto gabungan = Rp80.000.000 + Rp200.000.000", "Rp280.000.000" ], [ "PTKP K/I/1 = Rp54.000.000 + Rp4.500.000 + Rp54.000.000 + Rp4.500.000", "Rp117.000.000" ], [ "PKP gabungan", "Rp163.000.000" ], [ "PPh gabungan = 5% × Rp60.000.000 + 15% × Rp103.000.000", "Rp18.450.000" ], [ "PPh Nyonya Lina = 200/280 × Rp18.450.000", "Rp13.178.571" ] ],
        mengapaSalah: { B: "Menghitung Nyonya Lina terpisah penuh dengan PTKP TK/0: (Rp200.000.000 − Rp54.000.000) → PPh Rp15.900.000.", C: "Membagi PPh gabungan sama rata (Rp18.450.000 ÷ 2), bukan menurut perbandingan neto.", D: "Tidak memasukkan tambahan PTKP istri Rp54.000.000 (PTKP K/1 Rp63.000.000), sehingga PPh gabungan Rp26.550.000 dan bagian istri Rp18.964.286." },
        jebakan: "Pada MT, istri menjalankan kewajibannya sendiri, tetapi tarif tetap ditentukan dari penghasilan neto gabungan suami-istri."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 7 ayat (1), Pasal 8 ayat (2) huruf c dan ayat (3) beserta Penjelasannya, Pasal 17 ayat (1) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 101/PMK.010/2016 (besaran PTKP)", berlakuSejak: "2016-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 33, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A1-107",
      topik: "A1.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Pada 1 Januari 2026 Tuan Bram, pegawai PT Ortax Energi, tinggal bersama: istri (ibu rumah tangga); [ibu kandung yang tidak berpenghasilan dan ditanggung sepenuhnya]; seorang keponakan (tidak berpenghasilan dan seluruh biaya hidupnya ditanggung Tuan Bram); seorang anak kandung. Besarnya PTKP Tuan Bram untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp72 juta", B: "Rp67,5 juta", C: "Rp121,5 juta", D: "Rp63 juta" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Ibu kandung (sedarah garis lurus ke atas) dan anak kandung (sedarah garis lurus ke bawah) yang ditanggung sepenuhnya diakui; keponakan adalah keluarga sedarah garis ke samping sehingga tidak diakui. Tambahan Rp54 juta untuk istri hanya diberikan bila penghasilan istri digabung dengan penghasilan suami, sedangkan istri tidak berpenghasilan. Status Tuan Bram K/2.",
        jejakHitung: [ [ "PTKP diri", "Rp54.000.000" ], [ "Tambahan kawin", "Rp4.500.000" ], [ "Tanggungan: ibu kandung dan anak = 2 × Rp4.500.000", "Rp9.000.000" ], [ "PTKP K/2", "Rp67.500.000" ] ],
        mengapaSalah: { A: "Rp72 juta (K/3) ikut menghitung keponakan.", C: "Rp121,5 juta menambahkan Rp54 juta untuk istri yang tidak memiliki penghasilan untuk digabung.", D: "Rp63 juta (K/1) tidak menghitung ibu kandung, padahal orang tua termasuk sedarah garis lurus." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 7 ayat (1) huruf a–d dan ayat (2) beserta Penjelasan Pasal 7 ayat (1) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 7 ayat (1) huruf a–d dan ayat (2) beserta Penjelasan Pasal 7 ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 101/PMK.010/2016 (besaran PTKP)", berlakuSejak: "2016-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Stem tidak konsisten dengan pembahasan: tanpa ibu kandung, jawaban yang benar Rp63 juta (K/1, opsi D). Kunci B dipertahankan dengan asumsi butir ibu kandung hilang dari stem. · Stem sumber tidak menyebut ibu kandung, padahal pembahasan menghitung ibu kandung sebagai tanggungan (K/2); butir ibu kandung disisipkan dalam kurung siku sebagai rekonstruksi.",
      sumber: { set: "TO-B-2026-11", no: 42, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-A1-01", topik: "A1.1", tipe: "angka", depan: "Uji kehadiran yang membuat orang asing menjadi SPDN?", belakang: "Berada di Indonesia lebih dari 183 hari dalam 12 bulan", dasar: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-02", topik: "A1.1", tipe: "definisi", depan: "Kapan kewajiban subjektif SPDN orang pribadi berakhir?", belakang: "Saat meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya", dasar: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-03", topik: "A1.1", tipe: "definisi", depan: "Subjek pajak pengganti saat WP OP meninggal dan warisan belum dibagi?", belakang: "Warisan yang belum terbagi, sampai warisan selesai dibagi", dasar: "Pasal 2 ayat (1) huruf a angka 2 dan Pasal 2A UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-04", topik: "A1.1", tipe: "angka", depan: "WNA SPDN berkeahlian tertentu dipajaki atas penghasilan apa, berapa lama?", belakang: "Hanya penghasilan dari Indonesia, selama 4 tahun pajak", dasar: "Pasal 4 ayat (1a) UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02", menggantikan: "penghasilan seluruh dunia bagi semua SPDN (sebelum UU Cipta Kerja)", dekTambahan: [] },
    { id: "KT-A1-05", topik: "A1.1", tipe: "pasal", depan: "Staf WNI kedutaan atau organisasi internasional: subjek pajak?", belakang: "Ya; pengecualian Pasal 3 mensyaratkan bukan WNI", dasar: "Pasal 3 ayat (1) huruf b dan d UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-06", topik: "A1.2", tipe: "angka", depan: "Dividen dalam negeri diterima OP bebas PPh bila?", belakang: "Diinvestasikan di Indonesia paling sedikit 3 tahun pajak", dasar: "Pasal 4 ayat (3) huruf f UU PPh; PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02", menggantikan: "PPh final 10% atas seluruh dividen OP (UU 36/2008)", dekTambahan: [] },
    { id: "KT-A1-07", topik: "A1.2", tipe: "angka", depan: "Tarif PPh dividen OP yang tidak diinvestasikan?", belakang: "10% final, disetor sendiri", dasar: "Pasal 17 ayat (2c) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-08", topik: "A1.2", tipe: "definisi", depan: "Penghasilan final dalam SPT OP diperlakukan bagaimana?", belakang: "Dilaporkan, tidak digabung ke PKP, PPh-nya tidak dikreditkan", dasar: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-09", topik: "A1.2", tipe: "definisi", depan: "Hibah uang yang bukan objek PPh bagi penerima OP?", belakang: "Dari keluarga sedarah garis lurus satu derajat, tanpa hubungan usaha", dasar: "Pasal 4 ayat (3) huruf a angka 2 UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-10", topik: "A1.2", tipe: "angka", depan: "Penjualan saham di bursa oleh OP: tarif dan dasar?", belakang: "0,1% × nilai transaksi, final; keuntungan tidak digabung", dasar: "Pasal 4 ayat (2) huruf c UU PPh; PP 41/1994 s.t.d.d. PP 14/1997", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-11", topik: "A1.2", tipe: "definisi", depan: "Keuntungan penjualan saham perusahaan tertutup (non-bursa) oleh OP?", belakang: "Objek tidak final; digabung dan dikenai tarif Pasal 17", dasar: "Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-12", topik: "A1.3", tipe: "pasal", depan: "Natura untuk pegawai: perlakuan bagi pemberi kerja sejak TP 2022?", belakang: "Boleh dibiayakan (biaya 3M); objek PPh bagi penerima kecuali dikecualikan", dasar: "Pasal 6 ayat (1) huruf n UU PPh; PMK 66/2023", berlakuSejak: "2022-01-01", menggantikan: "tidak boleh dibiayakan dan bukan objek penerima (Pasal 9 ayat (1) huruf e lama)", dekTambahan: [] },
    { id: "KT-A1-13", topik: "A1.3", tipe: "pasal", depan: "PPh, premi asuransi jiwa pribadi, sanksi pajak — boleh dibiayakan?", belakang: "Tidak; Pasal 9 ayat (1) huruf h, d, dan k", dasar: "Pasal 9 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-14", topik: "A1.3", tipe: "angka", depan: "Masa manfaat dan tarif garis lurus Kelompok 1 dan 2?", belakang: "Kelompok 1: 4 tahun 25%; Kelompok 2: 8 tahun 12,5%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2023-07-17", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-15", topik: "A1.3", tipe: "definisi", depan: "'Gaji' pemilik usaha perseorangan yang dibukukan sebagai beban?", belakang: "Prive; dikoreksi positif (Pasal 9 ayat (1) huruf i)", dasar: "Pasal 9 ayat (1) huruf i UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-16", topik: "A1.4", tipe: "angka", depan: "Batas peredaran bruto agar OP boleh memakai NPPN?", belakang: "Kurang dari Rp4,8 miliar setahun", dasar: "Pasal 14 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: "kurang dari Rp600 juta (UU 17/2000)", dekTambahan: [] },
    { id: "KT-A1-17", topik: "A1.4", tipe: "prosedur", depan: "Batas pemberitahuan penggunaan NPPN?", belakang: "Dalam 3 bulan pertama tahun pajak (31 Maret), lewat Coretax", dasar: "Pasal 14 ayat (2) UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-18", topik: "A1.4", tipe: "definisi", depan: "Akibat tidak memberitahukan NPPN tepat waktu?", belakang: "Dianggap memilih menyelenggarakan pembukuan", dasar: "Pasal 14 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-19", topik: "A1.4", tipe: "definisi", depan: "Tiga kelompok wilayah persentase norma?", belakang: "10 ibu kota provinsi, ibu kota provinsi lainnya, daerah lainnya", dasar: "PER-17/PJ/2015 Lampiran I", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-20", topik: "A1.5", tipe: "angka", depan: "Jangka waktu kompensasi kerugian fiskal?", belakang: "5 tahun berturut-turut mulai tahun berikutnya; rugi tertua lebih dahulu", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-21", topik: "A1.5", tipe: "definisi", depan: "Rugi usaha luar negeri boleh mengurangi laba dalam negeri?", belakang: "Tidak boleh", dasar: "Pasal 24 UU PPh; PMK 192/PMK.03/2018 (nomor perlu cek; aturan lama KMK 164/KMK.03/2002)", berlakuSejak: "2018-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-22", topik: "A1.6", tipe: "angka", depan: "PTKP WP sendiri, tambahan kawin, dan per tanggungan?", belakang: "Rp54 juta; +Rp4,5 juta; +Rp4,5 juta per tanggungan (maks 3)", dasar: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01", menggantikan: "Rp36 juta untuk WP sendiri (TP 2015)", dekTambahan: [] },
    { id: "KT-A1-23", topik: "A1.6", tipe: "angka", depan: "Tambahan PTKP istri yang penghasilannya digabung?", belakang: "Rp54.000.000 (status K/I)", dasar: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-24", topik: "A1.6", tipe: "definisi", depan: "Status PTKP ditentukan menurut keadaan kapan?", belakang: "Awal tahun pajak (1 Januari)", dasar: "Pasal 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-25", topik: "A1.6", tipe: "definisi", depan: "Tiga syarat penghasilan istri tidak digabung (final)?", belakang: "Satu pemberi kerja, sudah dipotong PPh 21, tidak terkait usaha keluarga", dasar: "Pasal 8 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-26", topik: "A1.6", tipe: "prosedur", depan: "Cara menghitung PPh suami-istri PH atau MT?", belakang: "Neto digabung, PTKP K/I/n, PPh dibagi sebanding neto masing-masing", dasar: "Pasal 8 ayat (2)–(3) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-27", topik: "A1.6", tipe: "definisi", depan: "Siapa yang termasuk tanggungan PTKP?", belakang: "Sedarah/semenda garis lurus dan anak angkat, ditanggung sepenuhnya", dasar: "Pasal 7 ayat (1) UU PPh dan penjelasannya", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-28", topik: "A1.7", tipe: "angka", depan: "Lapisan tarif Pasal 17 orang pribadi?", belakang: "5%, 15%, 25%, 30%, 35%; batas 60 jt, 250 jt, 500 jt, 5 M", dasar: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01", menggantikan: "lapisan 5% s.d. Rp50 juta dan tarif tertinggi 30% (UU 36/2008)", dekTambahan: [] },
    { id: "KT-A1-29", topik: "A1.7", tipe: "angka", depan: "PPh kumulatif pada PKP Rp250 juta dan Rp500 juta?", belakang: "Rp31,5 juta dan Rp94 juta", dasar: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-30", topik: "A1.7", tipe: "angka", depan: "Aturan pembulatan PKP?", belakang: "Ke bawah dalam ribuan rupiah penuh", dasar: "Pasal 17 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-31", topik: "A1.7", tipe: "pasal", depan: "Syarat zakat sebagai pengurang penghasilan bruto?", belakang: "Ke BAZNAS/LAZ resmi, ada bukti, tidak menimbulkan rugi", dasar: "Pasal 9 ayat (1) huruf g UU PPh; PMK 114/2025", berlakuSejak: "2025-12-31", menggantikan: "PMK 254/PMK.03/2010", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-32", topik: "A1.8", tipe: "pasal", depan: "Kredit pajak dalam SPT Tahunan OP?", belakang: "PPh 21, 22, 23, 24, dan 25; bukan PPh final atau sanksi", dasar: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-33", topik: "A1.8", tipe: "angka", depan: "Batas kredit PPh Pasal 24 per negara?", belakang: "Terkecil: pajak luar negeri atau (neto LN/PKP) × PPh terutang", dasar: "Pasal 24 UU PPh; PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-34", topik: "A1.8", tipe: "prosedur", depan: "Kapan PPh Pasal 29 OP harus dilunasi?", belakang: "Sebelum SPT Tahunan disampaikan (paling lambat 31 Maret)", dasar: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-35", topik: "A1.9", tipe: "angka", depan: "Rumus angsuran PPh 25 orang pribadi biasa?", belakang: "(PPh terutang − PPh 21/22/23/24 tahun lalu) ÷ 12", dasar: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-36", topik: "A1.9", tipe: "angka", depan: "Angsuran PPh 25 OP pengusaha tertentu (pedagang pengecer)?", belakang: "0,75% × peredaran bruto bulanan setiap tempat usaha", dasar: "PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018 Pasal 7", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-37", topik: "A1.9", tipe: "prosedur", depan: "Batas setor PPh 25 dan PPh final UMKM?", belakang: "Tanggal 15 bulan berikutnya (sudah tanggal 15 sebelum 2025)", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-38", topik: "A1.10", tipe: "angka", depan: "Tarif, batas, dan bagian bebas PPh final UMKM orang pribadi?", belakang: "0,5%; peredaran bruto ≤ Rp4,8 miliar; Rp500 juta pertama tidak kena", dasar: "PP 55/2022 s.t.d.d. PP 20/2026; Pasal 7 ayat (2a) UU PPh", berlakuSejak: "2022-01-01", menggantikan: "0,5% sejak rupiah pertama (PP 23/2018)", dekTambahan: [] },
    { id: "KT-A1-39", topik: "A1.10", tipe: "definisi", depan: "Siapa penerima baru PPh final UMKM sejak PP 20/2026?", belakang: "OP, PT perorangan didirikan 1 orang, dan koperasi", dasar: "PP 20/2026", berlakuSejak: "2026-04-22", menggantikan: "OP, koperasi, CV, firma, PT, BUMDes (PP 55/2022 awal)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-40", topik: "A1.10", tipe: "definisi", depan: "Jasa pekerjaan bebas boleh memakai PPh final 0,5%?", belakang: "Tidak; dikecualikan sejak PP 20/2026 (pakai NPPN/pembukuan)", dasar: "PP 20/2026", berlakuSejak: "2026-04-22", menggantikan: "boleh, sepanjang omzet ≤ Rp4,8 miliar (PP 55/2022 awal)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-41", topik: "A1.10", tipe: "angka", depan: "Jangka waktu PPh final UMKM bagi orang pribadi?", belakang: "Tidak dibatasi lagi; koperasi tetap 4 tahun pajak", dasar: "PP 20/2026", berlakuSejak: "2026-04-22", menggantikan: "7 tahun pajak bagi OP (PP 55/2022 Pasal 59)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-42", topik: "A1.10", tipe: "definisi", depan: "Komponen peredaran bruto untuk uji Rp4,8 miliar sejak PP 20/2026?", belakang: "Usaha + jasa pekerjaan bebas + seluruh penghasilan luar negeri", dasar: "PP 20/2026", berlakuSejak: "2026-04-22", menggantikan: "peredaran bruto usaha saja", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-43", topik: "A1.11", tipe: "angka", depan: "Batas lapor SPT Tahunan OP dan denda terlambat?", belakang: "31 Maret; denda Rp100.000", dasar: "Pasal 3 ayat (3) huruf b dan Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-44", topik: "A1.11", tipe: "prosedur", depan: "Suami-istri PH/MT: siapa menyampaikan SPT dan mengkreditkan PPh 21 istri?", belakang: "Masing-masing SPT sendiri; PPh 21 istri dikreditkan di SPT istri", dasar: "Pasal 8 ayat (2)–(3) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-45", topik: "A1.11", tipe: "prosedur", depan: "Perpanjangan penyampaian SPT Tahunan OP?", belakang: "Paling lama 2 bulan; pemberitahuan sebelum batas, lunasi kekurangan", dasar: "Pasal 3 ayat (4)–(5) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-46", topik: "A1.11", tipe: "angka", depan: "Sanksi pembetulan SPT yang menimbulkan kurang bayar?", belakang: "Bunga (acuan + 5%)/12 per bulan, maksimal 24 bulan", dasar: "Pasal 8 ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29", menggantikan: "2% per bulan (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A1-47", topik: "A1.11", tipe: "prosedur", depan: "Media pembuatan SPT Tahunan OP sejak 2025?", belakang: "Coretax, dengan bukti potong elektronik (BPA1, BP21, BPPU)", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: "e-Filing/e-Form DJP Online", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A1-48", topik: "A1.1", tipe: "pasal", depan: "Kapan WNI yang bekerja di luar negeri menjadi subjek pajak luar negeri?", belakang: "Di luar Indonesia > 183 hari dalam 12 bulan dan memenuhi persyaratan tertentu", dasar: "Pasal 2 ayat (4) UU PPh (tambahan UU 11/2020); PMK 18/PMK.03/2021", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-49", topik: "A1.1", tipe: "pasal", depan: "Syarat pejabat diplomatik/konsulat asing dikecualikan dari subjek pajak?", belakang: "Bukan WNI, tanpa penghasilan lain di Indonesia, ada perlakuan timbal balik", dasar: "Pasal 3 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-50", topik: "A1.2", tipe: "angka", depan: "Hadiah undian yang diterima OP: tarif dan sifat PPh?", belakang: "25% dari jumlah bruto hadiah, final", dasar: "Pasal 4 ayat (2) huruf b UU PPh; PP 132/2000", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-51", topik: "A1.2", tipe: "angka", depan: "Penjualan tanah/bangunan oleh OP: dasar dan tarif PPh?", belakang: "2,5% × jumlah bruto nilai pengalihan, final, walaupun rugi", dasar: "Pasal 4 ayat (2) huruf d UU PPh; PP 34/2016", berlakuSejak: "2016-09-07", menggantikan: "5% (PP 48/1994 s.t.d.t.d. PP 71/2008)", dekTambahan: [] },
    { id: "KT-A1-52", topik: "A1.2", tipe: "angka", depan: "Lapisan PPh 21 final atas pesangon yang dibayar sekaligus?", belakang: "0% ≤ Rp50 jt; 5% ≤ Rp100 jt; 15% ≤ Rp500 jt; 25% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-53", topik: "A1.2", tipe: "angka", depan: "JHT atau manfaat pensiun dibayar sekaligus: tarif PPh 21?", belakang: "0% s.d. Rp50 juta; 5% di atasnya, final", dasar: "PP 68/2009", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-54", topik: "A1.2", tipe: "angka", depan: "Bunga obligasi/SBN yang diterima OP dalam negeri?", belakang: "10% final", dasar: "Pasal 4 ayat (2) huruf a UU PPh; PP 91/2021", berlakuSejak: "2021-08-30", menggantikan: "15% (PP 16/2009 s.t.d.t.d. PP 55/2019)", dekTambahan: [] },
    { id: "KT-A1-55", topik: "A1.3", tipe: "angka", depan: "Penyusutan fiskal bangunan permanen?", belakang: "20 tahun (5%) atau masa manfaat lebih panjang menurut pembukuan; tanah tidak", dasar: "Pasal 11 ayat (6) UU PPh s.t.d.t.d. UU 7/2021; PMK 72/2023", berlakuSejak: "2022-01-01", menggantikan: "selalu 20 tahun (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-A1-56", topik: "A1.3", tipe: "prosedur", depan: "Harta usaha dijual: perlakuan fiskalnya?", belakang: "Harga jual menjadi penghasilan; nilai sisa buku fiskal dibebankan sebagai kerugian", dasar: "Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-57", topik: "A1.3", tipe: "angka", depan: "Batas sumbangan pendidikan/bencana nasional yang boleh dibiayakan?", belakang: "Maksimal 5% neto fiskal tahun sebelumnya; tidak boleh menimbulkan rugi", dasar: "Pasal 6 ayat (1) huruf i–m UU PPh; PP 93/2010", berlakuSejak: "2010-11-30", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-58", topik: "A1.3", tipe: "pasal", depan: "Syarat biaya promosi dapat dikurangkan?", belakang: "Daftar nominatif dibuat dan dilampirkan pada SPT Tahunan", dasar: "PMK 02/PMK.03/2010", berlakuSejak: "2010-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-59", topik: "A1.4", tipe: "definisi", depan: "Persentase norma bagi OP dengan kegiatan di beberapa kota?", belakang: "Per kegiatan, menurut wilayah tempat kegiatan dijalankan", dasar: "PER-17/PJ/2015 Lampiran I", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-60", topik: "A1.5", tipe: "prosedur", depan: "Batas membetulkan SPT setelah SKP mengubah rugi fiskal yang dikompensasikan?", belakang: "Paling lama 3 bulan setelah menerima SKP, keputusan, atau putusan", dasar: "Pasal 8 ayat (6) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-61", topik: "A1.6", tipe: "definisi", depan: "Suami-istri hidup berpisah berdasarkan putusan hakim (HB)?", belakang: "Dikenai pajak terpisah penuh, tanpa penggabungan dan pembagian proporsional", dasar: "Pasal 8 ayat (2) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-62", topik: "A1.6", tipe: "definisi", depan: "Istri bekerja pada usaha atau pekerjaan bebas suami: perlakuannya?", belakang: "Digabung; PTKP bertambah Rp54 juta; PPh 21 istri menjadi kredit", dasar: "Pasal 7 ayat (1) dan Pasal 8 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-63", topik: "A1.7", tipe: "angka", depan: "PPh kumulatif orang pribadi pada PKP Rp5 miliar?", belakang: "Rp1.444.000.000; kelebihannya dikenai 35%", dasar: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01", menggantikan: "tarif tertinggi 30% (UU 36/2008)", dekTambahan: [] },
    { id: "KT-A1-64", topik: "A1.8", tipe: "pasal", depan: "Rugi usaha di satu negara dalam penghitungan PPh 24?", belakang: "Tidak digabung; batas kredit dihitung per negara", dasar: "Pasal 24 UU PPh; PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-65", topik: "A1.8", tipe: "definisi", depan: "Mengapa pegawai yang pindah kerja dalam setahun biasanya kurang bayar?", belakang: "Tiap pemberi kerja memakai PTKP setahun dan lapisan 5% dari awal", dasar: "Pasal 17 dan Pasal 21 UU PPh; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-66", topik: "A1.9", tipe: "prosedur", depan: "Angsuran PPh 25 bulan-bulan sebelum batas waktu SPT Tahunan?", belakang: "Sama dengan angsuran bulan terakhir tahun pajak lalu", dasar: "Pasal 25 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-67", topik: "A1.9", tipe: "definisi", depan: "Penghasilan tidak teratur dalam dasar angsuran PPh 25?", belakang: "Dikeluarkan; PPh dihitung ulang atas penghasilan teratur saja", dasar: "Pasal 25 ayat (1) UU PPh; PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-68", topik: "A1.10", tipe: "angka", depan: "Bagian Rp500 juta PPh final UMKM bagi suami-istri?", belakang: "KK: sekali untuk keluarga; PH/MT: masing-masing", dasar: "Pasal 7 ayat (2a) dan Pasal 8 UU PPh; PMK 164/2023", berlakuSejak: "2022-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-69", topik: "A1.10", tipe: "prosedur", depan: "Bendahara membeli dari UMKM yang menyerahkan Surat Keterangan: memungut apa?", belakang: "PPh final 0,5%, bukan PPh 22 1,5%", dasar: "PP 55/2022 s.t.d.d. PP 20/2026; PMK 164/2023", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-70", topik: "A1.11", tipe: "pasal", depan: "Denda terlambat SPT bagi Wajib Pajak OP yang telah meninggal dunia?", belakang: "Tidak dikenakan; SPT tetap disampaikan wakil/ahli waris", dasar: "Pasal 7 ayat (2) dan Pasal 32 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-71", topik: "A1.11", tipe: "prosedur", depan: "Isi angka 12 induk 1770 S (peta logis)?", belakang: "PPh dipotong/dipungut pihak lain (BPA1, BP21, BPPU); bukan PPh final", dasar: "Pasal 28 ayat (1) UU PPh; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A1-72", topik: "A1.11", tipe: "prosedur", depan: "OP pegawai yang juga berusaha: isi SPT dan kredit PPh 21?", belakang: "Pakai 1770: neto BPA1 dan usaha digabung; PPh 21 dikreditkan; omzet UMKM final tidak digabung", dasar: "Pasal 4 ayat (1), Pasal 17, dan Pasal 28 UU PPh; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-A1-01", judul: "Arsitek lepas dengan NPPN: dari peredaran bruto ke PPh 29 dan PPh 25", topik: "A1.4", estimasiMenit: 15,
      narasi: "Ir. Bayu Aditya (K/1, istri tidak bekerja, satu anak) adalah arsitek lepas di Semarang yang tidak menyelenggarakan pembukuan. Pada 16 Februari 2026 ia menyampaikan pemberitahuan penggunaan NPPN melalui Coretax. Peredaran bruto 2026 Rp1.200.000.000, terdiri dari Rp840.000.000 dari klien badan (setiap pembayaran bulanan per klien tidak melebihi Rp120.000.000 dan dipotong PPh 21 bukan pegawai 5% × 50% × bruto) serta Rp360.000.000 dari klien orang pribadi yang tidak memotong pajak. Persentase norma untuk kegiatannya (diberikan) 35%. Ia membayar zakat penghasilan melalui BAZNAS Rp5.000.000, menyetor PPh 25 Rp2.500.000 setiap bulan selama 2026, dan menerima bunga deposito Rp6.000.000 yang telah dipotong PPh final.",
      data: [ ["Status PTKP", "K/1"], ["Pemberitahuan NPPN", "16 Februari 2026"], ["Peredaran bruto 2026", "Rp1.200.000.000"], ["Dari klien badan (dipotong PPh 21 2,5% efektif)", "Rp840.000.000"], ["Persentase norma (diberikan)", "35%"], ["Zakat BAZNAS", "Rp5.000.000"], ["PPh 25 disetor", "12 × Rp2.500.000"], ["Bunga deposito (final)", "Rp6.000.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Apakah Ir. Bayu boleh menghitung penghasilan neto 2026 dengan NPPN?", tipe: "pilihan",
          opsi: { A: "Tidak: arsitek wajib memakai PPh final 0,5%", B: "Tidak: pemberitahuan harus disampaikan sebelum tahun pajak dimulai", C: "Ya: peredaran bruto kurang dari Rp4,8 miliar dan pemberitahuan disampaikan dalam 3 bulan pertama 2026", D: "Ya, tetapi hanya atas penerimaan dari klien orang pribadi" }, jawaban: "C",
          petunjuk: ["Cek dua syarat Pasal 14 ayat (2): batas peredaran bruto dan tenggat pemberitahuan", "Rp1,2 miliar < Rp4,8 miliar; 16 Februari ≤ 31 Maret", "Jawaban: C"],
          penjelasan: "Kedua syarat terpenuhi. PPh final 0,5% tidak tersedia bagi pekerjaan bebas sejak PP 20/2026, dan norma berlaku atas seluruh peredaran bruto pekerjaan bebas." },
        { no: 2, pertanyaan: "Berapa penghasilan neto dari pekerjaan bebas (Rp)?", tipe: "angka", jawaban: 420000000, toleransi: 0,
          petunjuk: ["Neto = persentase norma × seluruh peredaran bruto", "35% × Rp1.200.000.000", "Jawaban: Rp420.000.000"],
          penjelasan: "Penerimaan dari klien badan maupun orang pribadi sama-sama peredaran bruto; PPh 21 yang dipotong tidak mengurangi neto." },
        { no: 3, pertanyaan: "Berapa Penghasilan Kena Pajak (Rp)?", tipe: "angka", jawaban: 352000000, toleransi: 0,
          petunjuk: ["Kurangkan zakat, lalu PTKP K/1", "Rp420.000.000 − Rp5.000.000 − Rp63.000.000", "Jawaban: Rp352.000.000"],
          penjelasan: "Bunga deposito final tidak ikut dalam PKP. PKP sudah bulat ribuan." },
        { no: 4, pertanyaan: "Berapa PPh terutang (Rp)?", tipe: "angka", jawaban: 57000000, toleransi: 0,
          petunjuk: ["Pakai lapisan Pasal 17: 5%, 15%, 25%", "Rp3.000.000 + Rp28.500.000 + 25% × Rp102.000.000", "Jawaban: Rp57.000.000"],
          penjelasan: "PPh atas Rp250 juta pertama Rp31,5 juta; sisa Rp102 juta × 25% = Rp25,5 juta." },
        { no: 5, pertanyaan: "Berapa PPh Pasal 29 yang harus dilunasi (Rp)?", tipe: "angka", jawaban: 6000000, toleransi: 0,
          petunjuk: ["Kredit: PPh 21 bukan pegawai dan PPh 25; PPh final tidak", "PPh 21 = 2,5% × Rp840.000.000 = Rp21.000.000; PPh 25 = Rp30.000.000", "Jawaban: Rp57.000.000 − Rp51.000.000 = Rp6.000.000"],
          penjelasan: "Kurang bayar dilunasi sebelum SPT 2026 disampaikan, paling lambat 31 Maret 2027." },
        { no: 6, pertanyaan: "Berapa angsuran PPh 25 per bulan untuk 2027 (Rp)?", tipe: "angka", jawaban: 3000000, toleransi: 0,
          petunjuk: ["Pasal 25 ayat (1): PPh terutang dikurangi PPh 21/22/23/24, dibagi 12", "(Rp57.000.000 − Rp21.000.000) ÷ 12", "Jawaban: Rp3.000.000"],
          penjelasan: "PPh 25 yang dibayar selama 2026 tidak dikurangkan dari dasar angsuran." }
      ],
      kesimpulan: "Neto norma Rp420 juta, PKP Rp352 juta, PPh terutang Rp57 juta. Setelah kredit PPh 21 Rp21 juta dan PPh 25 Rp30 juta, kurang bayar Rp6 juta; angsuran 2027 Rp3 juta per bulan.",
      kalkulatorRef: "pph-op"
    },
    {
      id: "K-A1-02", judul: "Pedagang UMKM orang pribadi: bagian Rp500 juta dan PPh final bulanan", topik: "A1.10", estimasiMenit: 12,
      narasi: "Ibu Lina (TK/0) berjualan bahan kue di Malang, terdaftar sejak 2021, dan memakai PPh final UMKM. Peredaran bruto 2025 Rp1.850.000.000. Peredaran bruto 2026: Januari Rp140.000.000; Februari Rp155.000.000; Maret Rp230.000.000; April Rp180.000.000; total setahun Rp2.160.000.000. Ia menyetor sendiri PPh final setiap bulan (tidak ada pemotongan oleh pembeli).",
      data: [ ["Status", "OP, TK/0, terdaftar 2021"], ["Peredaran bruto 2025", "Rp1.850.000.000"], ["Januari 2026", "Rp140.000.000"], ["Februari 2026", "Rp155.000.000"], ["Maret 2026", "Rp230.000.000"], ["April 2026", "Rp180.000.000"], ["Total 2026", "Rp2.160.000.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Apakah Ibu Lina masih boleh memakai PPh final 0,5% pada 2026?", tipe: "pilihan",
          opsi: { A: "Tidak: PP 20/2026 menghapus PPh final bagi orang pribadi", B: "Ya: OP dengan usaha dagang dan peredaran bruto 2025 tidak melebihi Rp4,8 miliar", C: "Tidak: jangka waktu 3 tahun bagi OP sudah habis", D: "Ya, tetapi hanya sampai Masa April 2026" }, jawaban: "B",
          petunjuk: ["PP 20/2026 mempersempit subjek, tetapi OP tetap termasuk", "Usaha dagang bukan pekerjaan bebas; Rp1,85 miliar ≤ Rp4,8 miliar", "Jawaban: B"],
          penjelasan: "OP tetap subjek PPh final UMKM; jangka waktu bagi OP dihapus PP 20/2026, dan usaha dagang tidak termasuk pengecualian pekerjaan bebas." },
        { no: 2, pertanyaan: "Berapa PPh final Masa Februari 2026 (Rp)?", tipe: "angka", jawaban: 0, toleransi: 0,
          petunjuk: ["Hitung peredaran bruto kumulatif sejak Januari", "Rp140 juta + Rp155 juta = Rp295.000.000 ≤ Rp500.000.000", "Jawaban: Rp0"],
          penjelasan: "Bagian peredaran bruto sampai Rp500 juta setahun tidak dikenai PPh (Pasal 7 ayat (2a) UU PPh)." },
        { no: 3, pertanyaan: "Berapa PPh final Masa Maret 2026 (Rp)?", tipe: "angka", jawaban: 125000, toleransi: 0,
          petunjuk: ["Kumulatif s.d. Maret = Rp295 juta + Rp230 juta", "Kelebihan di atas Rp500 juta = Rp25.000.000", "Jawaban: 0,5% × Rp25.000.000 = Rp125.000"],
          penjelasan: "Pada bulan batas terlampaui, hanya kelebihan di atas Rp500 juta yang dikenai 0,5%." },
        { no: 4, pertanyaan: "Berapa PPh final Masa April 2026 (Rp)?", tipe: "angka", jawaban: 900000, toleransi: 0,
          petunjuk: ["Bagian bebas Rp500 juta sudah habis pada Maret", "Seluruh omzet April dikenai 0,5%", "Jawaban: 0,5% × Rp180.000.000 = Rp900.000"],
          penjelasan: "Setelah batas terlampaui, seluruh peredaran bruto bulan berikutnya dikenai 0,5%." },
        { no: 5, pertanyaan: "Paling lambat kapan PPh final Masa Maret 2026 disetor?", tipe: "pilihan",
          opsi: { A: "10 April 2026", B: "20 April 2026", C: "30 April 2026", D: "15 April 2026" }, jawaban: "D",
          petunjuk: ["PMK 81/2024 menyeragamkan batas setor pajak masa", "Tanggal 15 bulan berikutnya", "Jawaban: D"],
          penjelasan: "Tanggal 15 bulan berikutnya; bila jatuh pada hari libur, bergeser ke hari kerja berikutnya (PMK 81/2024 Pasal 100). Tanggal 10 adalah batas lama untuk pajak yang dipotong, tanggal 20 batas lapor SPT Masa PPh." },
        { no: 6, pertanyaan: "Berapa total PPh final UMKM Ibu Lina untuk Tahun Pajak 2026 (Rp)?", tipe: "angka", jawaban: 8300000, toleransi: 0,
          petunjuk: ["Total peredaran bruto dikurangi bagian Rp500 juta", "Rp2.160.000.000 − Rp500.000.000 = Rp1.660.000.000", "Jawaban: 0,5% × Rp1.660.000.000 = Rp8.300.000"],
          penjelasan: "Total ini dilaporkan pada lampiran penghasilan final SPT Tahunan dan tidak digabung ke PKP." }
      ],
      kesimpulan: "Bagian Rp500 juta habis pada Maret 2026 sehingga Januari–Februari nihil, Maret Rp125.000, April Rp900.000, dan setahun Rp8.300.000. Penyetoran tiap masa paling lambat tanggal 15 bulan berikutnya.",
      kalkulatorRef: "pph-op"
    },
    {
      id: "K-A1-03", judul: "Suami-istri pisah harta (PH): penggabungan dan pembagian proporsional", topik: "A1.6", estimasiMenit: 14,
      narasi: "Pak Arif dan Bu Citra menikah dengan perjanjian pisah harta tertulis (status PH) dan menanggung dua anak kandung. Pada 2026 Pak Arif memperoleh penghasilan neto usaha (pembukuan) Rp420.000.000. Bu Citra pegawai tetap PT Mandala dengan penghasilan neto BPA1 Rp180.000.000; PPh 21 yang dipotong pemberi kerjanya (dengan status TK/0) Rp12.900.000. Tidak ada zakat, kompensasi kerugian, atau kredit pajak lain.",
      data: [ ["Status", "PH, dua anak kandung"], ["Neto Pak Arif (usaha)", "Rp420.000.000"], ["Neto Bu Citra (BPA1)", "Rp180.000.000"], ["PPh 21 Bu Citra", "Rp12.900.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa PTKP yang dipakai untuk penghasilan gabungan (Rp)?", tipe: "angka", jawaban: 121500000, toleransi: 0,
          petunjuk: ["PH: PTKP suami (kawin + tanggungan) ditambah PTKP istri", "Rp54 juta + Rp4,5 juta + 2 × Rp4,5 juta + Rp54 juta", "Jawaban: Rp121.500.000 (K/I/2)"],
          penjelasan: "Pada PH/MT penghasilan digabung lebih dahulu, sehingga PTKP istri Rp54 juta ikut diperhitungkan." },
        { no: 2, pertanyaan: "Berapa PKP gabungan (Rp)?", tipe: "angka", jawaban: 478500000, toleransi: 0,
          petunjuk: ["Gabungkan neto suami dan istri", "Rp420 juta + Rp180 juta − Rp121,5 juta", "Jawaban: Rp478.500.000"],
          penjelasan: "PKP gabungan sudah bulat ribuan." },
        { no: 3, pertanyaan: "Berapa PPh terutang atas PKP gabungan (Rp)?", tipe: "angka", jawaban: 88625000, toleransi: 0,
          petunjuk: ["PPh atas Rp250 juta pertama = Rp31,5 juta", "Sisa Rp228,5 juta × 25% = Rp57,125 juta", "Jawaban: Rp88.625.000"],
          penjelasan: "PKP gabungan masih di lapisan 25% (di bawah Rp500 juta)." },
        { no: 4, pertanyaan: "Berapa PPh terutang bagian Bu Citra (Rp)?", tipe: "angka", jawaban: 26587500, toleransi: 1,
          petunjuk: ["Bagi sebanding penghasilan neto", "Rp180 juta ÷ Rp600 juta = 30%", "Jawaban: 30% × Rp88.625.000 = Rp26.587.500"],
          penjelasan: "Pasal 8 ayat (3): bagian masing-masing dihitung menurut perbandingan penghasilan neto. Bagian Pak Arif 70% = Rp62.037.500." },
        { no: 5, pertanyaan: "Berapa PPh Pasal 29 yang harus dilunasi Bu Citra (Rp)?", tipe: "angka", jawaban: 13687500, toleransi: 1,
          petunjuk: ["Kurangkan PPh 21 yang dipotong atas penghasilannya sendiri", "Rp26.587.500 − Rp12.900.000", "Jawaban: Rp13.687.500"],
          penjelasan: "Karena berstatus PH, PPh 21 dari pemberi kerja tidak lagi final bagi Bu Citra; ia menyampaikan SPT sendiri dan melunasi kekurangannya." },
        { no: 6, pertanyaan: "Bagaimana kewajiban SPT Tahunan 2026 Bu Citra?", tipe: "pilihan",
          opsi: { A: "Tidak wajib SPT karena penghasilannya dari satu pemberi kerja dan sudah dipotong PPh 21", B: "Cukup dilaporkan Pak Arif pada lampiran penghasilan final istri dalam SPT-nya", C: "Menyampaikan SPT sendiri: melaporkan bagian PPh Rp26.587.500, mengkreditkan PPh 21 Rp12.900.000, dan melunasi kurang bayar Rp13.687.500 sebelum SPT disampaikan", D: "Menyampaikan SPT sendiri dengan PPh dihitung terpisah memakai PTKP TK/0, sehingga nihil karena sama dengan PPh 21 yang dipotong" }, jawaban: "C",
          petunjuk: ["Status PH: suami dan istri masing-masing ber-NPWP dan menyampaikan SPT", "Pengecualian 'final' Pasal 8 ayat (1) hanya bagi istri yang penghasilannya digabung dengan suami (status KK)", "Jawaban: C"],
          penjelasan: "Pada PH/MT bagian PPh istri dihitung proporsional dan kredit pajak mengikuti pemilik bukti potong; PPh 21 Bu Citra tidak final, sehingga ia melaporkan sendiri dan melunasi kekurangannya. Pada SPT sebelum Coretax, istri PH yang hanya berpenghasilan dari pekerjaan memakai formulir 1770 S." }
      ],
      kesimpulan: "Neto gabungan Rp600 juta dikurangi PTKP K/I/2 menghasilkan PKP Rp478,5 juta dan PPh Rp88.625.000. Bagian Bu Citra 30% = Rp26.587.500; setelah kredit PPh 21 Rp12,9 juta, ia kurang bayar Rp13.687.500, sedangkan bagian Pak Arif Rp62.037.500.",
      kalkulatorRef: "pph-op"
    },
    {
      id: "K-A1-04", judul: "Pedagang pengecer dua toko keluar dari PPh final: angsuran 0,75% sampai PPh 29", topik: "A1.9", estimasiMenit: 15,
      narasi: "Bapak Yusuf Halim (K/2: istri tidak bekerja, dua anak kandung) adalah pedagang pengecer barang elektronik dengan dua toko, di Kota Medan dan di Kota Binjai, dan menyelenggarakan pembukuan. Ia memakai PPh final UMKM sampai Masa Desember 2025; peredaran bruto 2025 mencapai Rp5,4 miliar. Peredaran bruto Masa Maret 2026: Toko Medan Rp260.000.000 dan Toko Binjai Rp140.000.000. Peredaran bruto setahun 2026 Rp5.880.000.000, dan seluruh angsuran PPh Pasal 25 2026 telah disetor tepat waktu sesuai ketentuan. Penghasilan neto fiskal 2026 Rp820.000.000; PPh Pasal 22 impor yang dipungut Bea Cukai Rp6.000.000; tidak ada zakat maupun kompensasi kerugian.",
      data: [ ["Status PTKP", "K/2"], ["Peredaran bruto 2025", "Rp5.400.000.000"], ["Maret 2026 — Toko Medan", "Rp260.000.000"], ["Maret 2026 — Toko Binjai", "Rp140.000.000"], ["Peredaran bruto 2026", "Rp5.880.000.000"], ["Neto fiskal 2026", "Rp820.000.000"], ["PPh 22 impor 2026", "Rp6.000.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Rezim PPh Bapak Yusuf untuk Tahun Pajak 2026 adalah ...", tipe: "pilihan",
          opsi: { A: "Tetap PPh final 0,5% karena jangka waktu bagi OP dihapus PP 20/2026", B: "Tarif umum Pasal 17 dengan pembukuan, karena peredaran bruto 2025 melebihi Rp4,8 miliar", C: "PPh final 0,5% hanya untuk Toko Binjai karena omzetnya lebih kecil", D: "Wajib memakai NPPN karena ia pedagang pengecer" }, jawaban: "B",
          petunjuk: ["Batas Rp4,8 miliar diuji dari peredaran bruto tahun sebelumnya", "Rp5,4 miliar > Rp4,8 miliar", "Jawaban: B"],
          penjelasan: "Penghapusan jangka waktu oleh PP 20/2026 tidak menghapus batas Rp4,8 miliar. Karena peredaran 2025 melebihi batas, 2026 memakai tarif umum; NPPN juga tidak tersedia karena peredaran brutonya tidak kurang dari Rp4,8 miliar." },
        { no: 2, pertanyaan: "Bagaimana angsuran PPh Pasal 25 Bapak Yusuf pada 2026 dihitung?", tipe: "pilihan",
          opsi: { A: "(PPh terutang 2025 − kredit PPh 21/22/23/24) ÷ 12", B: "0,75% × peredaran bruto bulanan setiap toko sebagai Wajib Pajak orang pribadi pengusaha tertentu", C: "0,5% × peredaran bruto bulanan seluruh toko", D: "Nihil sepanjang 2026 karena tahun pertama setelah keluar dari PPh final" }, jawaban: "B",
          petunjuk: ["Ia pedagang pengecer dengan dua tempat usaha", "Ketentuan OP pengusaha tertentu (PMK 255/PMK.03/2008 s.t.d.t.d. PMK 215/PMK.03/2018)", "Jawaban: B"],
          penjelasan: "Sebagai pedagang pengecer, Bapak Yusuf adalah Wajib Pajak orang pribadi pengusaha tertentu: angsuran 0,75% dari peredaran bruto bulanan masing-masing tempat usaha, tidak bergantung pada SPT tahun lalu. Karena itu angsurannya tidak nihil walaupun SPT 2025 tidak memuat PPh terutang dengan tarif umum." },
        { no: 3, pertanyaan: "Berapa angsuran PPh Pasal 25 Masa Maret 2026 untuk Toko Medan (Rp)?", tipe: "angka", jawaban: 1950000, toleransi: 0,
          petunjuk: ["Hitung per tempat usaha", "0,75% × Rp260.000.000", "Jawaban: Rp1.950.000"],
          penjelasan: "Angsuran disetor untuk masing-masing tempat usaha; Toko Binjai: 0,75% × Rp140.000.000 = Rp1.050.000." },
        { no: 4, pertanyaan: "Paling lambat kapan angsuran Masa Maret 2026 disetor?", tipe: "pilihan",
          opsi: { A: "10 April 2026", B: "15 April 2026", C: "20 April 2026", D: "30 April 2026" }, jawaban: "B",
          petunjuk: ["PMK 81/2024 menyeragamkan batas setor pajak masa", "Tanggal 15 bulan berikutnya", "Jawaban: B"],
          penjelasan: "Tanggal 15 bulan berikutnya (PMK 81/2024 Pasal 94). Tanggal 10 adalah batas lama untuk pajak yang dipotong; tanggal 20 adalah batas lapor SPT Masa PPh." },
        { no: 5, pertanyaan: "Berapa PPh terutang Tahun Pajak 2026 (Rp)?", tipe: "angka", jawaban: 169750000, toleransi: 0,
          petunjuk: ["PKP = neto − PTKP K/2 Rp67.500.000", "PKP Rp752.500.000; PPh = Rp94.000.000 + 30% × Rp252.500.000", "Jawaban: Rp169.750.000"],
          penjelasan: "PKP sudah bulat ribuan; lapisan 30% berlaku untuk bagian di atas Rp500 juta." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 29 yang harus dilunasi (Rp)?", tipe: "angka", jawaban: 119650000, toleransi: 0,
          petunjuk: ["Kredit: angsuran OPPT setahun dan PPh 22 impor", "0,75% × Rp5.880.000.000 = Rp44.100.000; ditambah Rp6.000.000", "Jawaban: Rp169.750.000 − Rp50.100.000 = Rp119.650.000"],
          penjelasan: "Angsuran OPPT merupakan kredit pajak dalam SPT Tahunan; kurang bayar dilunasi sebelum SPT disampaikan, paling lambat 31 Maret 2027." },
        { no: 7, pertanyaan: "Bagaimana angsuran PPh Pasal 25 tahun 2027 bila ia tetap pedagang pengecer dua toko?", tipe: "pilihan",
          opsi: { A: "(Rp169.750.000 − Rp6.000.000) ÷ 12 = Rp13.645.833 per bulan", B: "(Rp169.750.000 − Rp50.100.000) ÷ 12 per bulan", C: "Tetap 0,75% × peredaran bruto bulanan masing-masing toko", D: "Nihil karena kurang bayar 2026 sudah dilunasi" }, jawaban: "C",
          petunjuk: ["Ketentuan OPPT tidak bergantung pada SPT tahun lalu", "Rumus Pasal 25 ayat (1) tidak dipakai bagi OPPT", "Jawaban: C"],
          penjelasan: "Selama berstatus pedagang pengecer, angsuran dihitung 0,75% dari peredaran bruto bulanan tiap tempat usaha." }
      ],
      kesimpulan: "Karena peredaran bruto 2025 Rp5,4 miliar, Bapak Yusuf memakai tarif umum pada 2026 dan, sebagai pedagang pengecer, mengangsur PPh 25 sebesar 0,75% per toko (Maret: Medan Rp1.950.000, Binjai Rp1.050.000; setahun Rp44.100.000). PPh terutang Rp169.750.000 dikurangi kredit Rp50.100.000 menghasilkan PPh 29 Rp119.650.000.",
      kalkulatorRef: "pph-op"
    },
    {
      id: "K-A1-05", judul: "Pegawai, konsultan lepas, dan apartemen di Singapura: dari NPPN ke PPh 24, PPh 29, dan PPh 25", topik: "A1.8", estimasiMenit: 16,
      narasi: "Ibu Natalia Sembiring (TK/0) adalah pegawai tetap PT Data Prima di Jakarta dengan BPA1 2026: penghasilan neto Rp229.000.000 dan PPh 21 Rp20.250.000. Ia juga konsultan teknologi informasi lepas yang memberitahukan penggunaan NPPN pada 10 Januari 2026; persentase norma (diberikan) 50%. Penerimaan bruto konsultasi 2026 Rp400.000.000: Rp90.000.000 dari klien badan (dipotong PPh 21 bukan pegawai Rp2.250.000) dan Rp310.000.000 dari klien orang pribadi (tidak dipotong). Ia memiliki apartemen di Singapura yang disewakan dengan penghasilan neto Rp125.000.000; pajak penghasilan yang dibayar di Singapura Rp25.000.000 dengan bukti lengkap. Ia belum pernah membayar PPh 25 dan tidak membayar zakat.",
      data: [ ["Status PTKP", "TK/0"], ["Neto BPA1", "Rp229.000.000"], ["PPh 21 BPA1", "Rp20.250.000"], ["Penerimaan konsultasi (norma 50%)", "Rp400.000.000"], ["PPh 21 bukan pegawai", "Rp2.250.000"], ["Neto sewa apartemen Singapura", "Rp125.000.000"], ["Pajak dibayar di Singapura", "Rp25.000.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Bagaimana penghasilan neto dari jasa konsultasi 2026 dihitung?", tipe: "pilihan",
          opsi: { A: "PPh final 0,5% × penerimaan bruto karena di bawah Rp4,8 miliar", B: "NPPN: 50% × seluruh penerimaan bruto, karena pemberitahuan disampaikan dalam 3 bulan pertama", C: "NPPN hanya atas penerimaan dari klien badan", D: "Penerimaan dari klien orang pribadi tidak perlu dilaporkan karena tidak dipotong" }, jawaban: "B",
          petunjuk: ["Konsultan TI menjalankan pekerjaan bebas", "PP 20/2026 mengecualikan pekerjaan bebas dari PPh final; NPPN diberitahukan 10 Januari", "Jawaban: B"],
          penjelasan: "Pekerjaan bebas tidak dapat memakai PPh final 0,5% sejak PP 20/2026. Dengan pemberitahuan tepat waktu dan peredaran bruto di bawah Rp4,8 miliar, neto dihitung dengan norma atas seluruh penerimaan bruto." },
        { no: 2, pertanyaan: "Berapa penghasilan neto dari jasa konsultasi (Rp)?", tipe: "angka", jawaban: 200000000, toleransi: 0,
          petunjuk: ["Persentase norma × seluruh penerimaan bruto", "50% × Rp400.000.000", "Jawaban: Rp200.000.000"],
          penjelasan: "PPh 21 yang dipotong klien badan tidak mengurangi neto; PPh itu kredit pajak." },
        { no: 3, pertanyaan: "Berapa Penghasilan Kena Pajak (Rp)?", tipe: "angka", jawaban: 500000000, toleransi: 0,
          petunjuk: ["Jumlahkan neto pekerjaan, pekerjaan bebas, dan luar negeri", "Rp229.000.000 + Rp200.000.000 + Rp125.000.000 − PTKP TK/0 Rp54.000.000", "Jawaban: Rp500.000.000"],
          penjelasan: "Penghasilan dari luar negeri digabung karena Ibu Natalia subjek pajak dalam negeri yang dipajaki atas penghasilan seluruh dunia." },
        { no: 4, pertanyaan: "Berapa PPh terutang (Rp)?", tipe: "angka", jawaban: 94000000, toleransi: 0,
          petunjuk: ["Lapisan s.d. Rp500 juta: 5%, 15%, 25%", "Rp3.000.000 + Rp28.500.000 + Rp62.500.000", "Jawaban: Rp94.000.000"],
          penjelasan: "PKP tepat di batas lapisan 25%; PPh kumulatif pada Rp500 juta adalah Rp94 juta." },
        { no: 5, pertanyaan: "Berapa kredit PPh Pasal 24 maksimum (Rp)?", tipe: "angka", jawaban: 23500000, toleransi: 0,
          petunjuk: ["Batas = neto luar negeri ÷ PKP × PPh terutang", "Rp125 juta ÷ Rp500 juta × Rp94 juta = Rp23.500.000; pajak dibayar Rp25 juta", "Jawaban: Rp23.500.000 (yang terkecil)"],
          penjelasan: "Kelebihan pajak Singapura Rp1.500.000 tidak dapat dikreditkan maupun dikompensasikan." },
        { no: 6, pertanyaan: "Berapa PPh Pasal 29 yang harus dilunasi (Rp)?", tipe: "angka", jawaban: 48000000, toleransi: 0,
          petunjuk: ["Kredit: PPh 21 BPA1, PPh 21 bukan pegawai, dan PPh 24", "Rp20.250.000 + Rp2.250.000 + Rp23.500.000 = Rp46.000.000", "Jawaban: Rp94.000.000 − Rp46.000.000 = Rp48.000.000"],
          penjelasan: "Kurang bayar dilunasi sebelum SPT disampaikan, paling lambat 31 Maret 2027." },
        { no: 7, pertanyaan: "Berapa angsuran PPh Pasal 25 per bulan untuk 2027 (Rp)?", tipe: "angka", jawaban: 4000000, toleransi: 0,
          petunjuk: ["Pasal 25 ayat (1): PPh terutang dikurangi PPh 21, 22, 23, dan 24, dibagi 12", "(Rp94.000.000 − Rp46.000.000) ÷ 12", "Jawaban: Rp4.000.000"],
          penjelasan: "Karena tidak ada PPh 25 tahun lalu, dasar angsuran sama dengan PPh 29; angsuran baru berlaku setelah SPT 2026 disampaikan." }
      ],
      kesimpulan: "Neto pekerjaan Rp229 juta, neto NPPN Rp200 juta, dan neto Singapura Rp125 juta menghasilkan PKP Rp500 juta dan PPh Rp94 juta. Kredit PPh 24 dibatasi Rp23,5 juta; setelah kredit PPh 21 Rp22,5 juta, PPh 29 Rp48 juta dan angsuran 2027 Rp4 juta per bulan.",
      kalkulatorRef: "pph24"
    }
  ],
  tips: [
    { teks: "Tulis urutan PKP OP sebelum menghitung: neto (pekerjaan + usaha/NPPN + lain-lain + luar negeri) − zakat − kompensasi rugi − PTKP, lalu bulatkan ke ribuan ke bawah.", tagSebab: "salah-hitung" },
    { teks: "Pisahkan dahulu penghasilan final (bunga deposito, sewa tanah/bangunan, saham di bursa, UMKM 0,5%, dividen tidak diinvestasikan): tidak masuk PKP dan PPh-nya tidak masuk kredit.", tagSebab: "final-nonfinal" },
    { teks: "Coret opsi yang memakai angka lama: lapisan pertama Rp50 juta, PTKP Rp36 juta, bunga 2% flat, pekerjaan bebas memakai 0,5%, CV/PT baru memakai PPh final.", tagSebab: "angka-usang" },
    { teks: "Status PTKP dan keluarga dikunci pada 1 Januari; tanggungan maksimal 3 dan hanya garis lurus. Pada PH/MT, gabungkan dahulu baru bagi proporsional.", tagSebab: "salah-baca" },
    { teks: "Untuk PPh 25 kurangkan hanya PPh 21/22/23/24 tahun lalu; untuk PPh 29 kurangkan juga PPh 25 yang sudah disetor. Jangan tertukar.", tagSebab: "lupa-pasal" },
    { teks: "Di soal UMKM, hitung omzet kumulatif sejak Januari untuk menemukan bulan saat Rp500 juta terlampaui; PPh bulan itu hanya atas kelebihannya.", tagSebab: "salah-hitung" }
  ]
});
