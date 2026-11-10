/* Modul A2 — KUP, PPSP, dan Pengadilan Pajak (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi dan pola soal kasus UKP, bukan soal asli ujian.
   Angka rujukan: docs/research/02a bagian A dan Bab F; 02b B.6 dan tabel perubahan 2025-2026.
   Tarif bunga KMK: soal yang penghitungan sanksinya dimulai Oktober 2026 memakai KMK 47/MK/EF.2/2026;
   soal lain menyatakan tarif sebagai data soal ("anggap"). */
UKP.register({
  meta: {
    kode: "A2", slug: "kup", nama: "KUP, PPSP, dan Pengadilan Pajak",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0.25, B: 0.15, C: 0.12 },
    statusPer: "2026-10-27",
    tujuan: "Peserta mampu menerapkan kalender kewajiban pajak era Coretax (setor tanggal 15, lapor 20 hari, PPN akhir bulan, SPT Tahunan 3/4 bulan), menghitung denda dan bunga sanksi administratif berbasis tarif KMK bulanan beserta uplift pasalnya, serta menentukan jenis ketetapan pajak dan daluwarsanya. Peserta juga mampu menelusuri jalur sengketa (pembetulan, keberatan, Pasal 36, banding, gugatan, PK) lengkap dengan tenggat dan denda 30%/60%, dan menyusun linimasa penagihan dengan Surat Paksa sampai lelang, pencegahan, dan penyanderaan. Peserta juga mampu membedakan akses informasi keuangan UU 9/2017 (laporan LJK menurut PMK 108/2025 dan permintaan informasi, bukti, atau keterangan) dari permintaan keterangan pihak ketiga Pasal 35 dan data ILAP Pasal 35A UU KUP.",
    dasarHukumUtama: [
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP)",
      "UU 19/1997 s.t.d.d. UU 19/2000 (UU PPSP)",
      "UU 14/2002 (Pengadilan Pajak)",
      "PP 50/2022 (pelaksanaan hak dan kewajiban perpajakan)",
      "PMK 81/2024 (Coretax)",
      "PMK 118/2024 s.t.d.d. PMK 71/2026 (keberatan, pembetulan, Pasal 36)",
      "PMK 15/2025 (pemeriksaan)",
      "PMK 61/2023 (penagihan)",
      "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 dan KMK tarif bunga bulanan (Oktober 2026: KMK 47/MK/EF.2/2026)",
      "UU 9/2017 (akses informasi keuangan untuk kepentingan perpajakan) dan PMK 108/2025 (laporan LJK, CRS, dan CARF)"
    ],
    perubahanTerbaru: [
      { sebelum: "Setor pajak masa paling lambat tanggal 10 (antara lain PPh 21/26, PPh 23, PPh 4(2) dan PPh 15 yang dipotong, PPh 22 oleh pemungut badan tertentu) atau tanggal 15 (PPh 25; PPh 4(2)/15 yang dibayar sendiri) bulan berikutnya (PMK 242/2014)", sesudah: "Seragam paling lambat tanggal 15 bulan berikutnya; bila hari libur bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 100", berlakuSejak: "2025-01-01" },
      { sebelum: "Keberatan diatur PMK 9/PMK.03/2013, diajukan langsung/pos ke KPP", sesudah: "PMK 118/2024: keberatan, pembetulan, dan Pasal 36 diajukan lewat Portal Wajib Pajak (Coretax); pelunasan minimal sejumlah yang disetujui dalam PAHP", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Pemeriksaan kantor 4 bulan dan lapangan 6 bulan; tanggapan SPHP 7 hari kerja (PMK 17/2013 jo. PMK 184/2015)", sesudah: "Pemeriksaan lengkap 5 bulan, terfokus 3 bulan, spesifik 1 bulan; tanggapan SPHP 5 hari kerja; ada Pembahasan Temuan Sementara", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
      { sebelum: "Bunga sanksi 2% per bulan flat (UU 28/2007); sejak UU Cipta Kerja/UU HPP diganti tarif KMK yang ditetapkan ulang tiap bulan (tarif September 2026 sedikit lebih tinggi)", sesudah: "Tarif KMK bulanan = (suku bunga acuan + uplift 0/5/10/15/20%) : 12; Oktober 2026: 0,59%/1,01%/1,42%/1,84%/2,26%", dasar: "Pasal 8, 9, 13, 14, 19 UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { sebelum: "Pembayaran atas utang pajak dialokasikan proporsional ke pokok dan sanksi", sesudah: "PMK 71/2026: pembayaran dialokasikan ke pokok lebih dulu; ada fasilitas pengurangan/penghapusan sanksi administratif bertahap (KEP-239/PJ/2026: penghapusan 100% s.d. 31 Desember 2026, mengecil hingga 30 Juni 2027)", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02" },
      { sebelum: "Pengembalian pendahuluan Pasal 17D bagi PKP: lebih bayar paling banyak Rp5 miliar, dan PKP persyaratan tertentu ikut diperlakukan sebagai PKP berisiko rendah (PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", sesudah: "PKP persyaratan tertentu: jumlah penyerahan paling banyak Rp4,2 miliar dan lebih bayar paling banyak Rp1 miliar untuk suatu Masa Pajak; tidak lagi diperlakukan sebagai PKP berisiko rendah. OP tanpa usaha, OP usaha/pekerjaan bebas, dan badan tetap termasuk WP persyaratan tertentu dengan batas lebih bayar per Bagian Tahun/Tahun Pajak; pengembalian diproses melalui penelitian, bukan pemeriksaan", dasar: "PMK 28 Tahun 2026 (mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" },
      { sebelum: "PMK 189/PMK.03/2020 tentang tata cara penagihan", sesudah: "PMK 61/2023: rangkaian teguran, Surat Paksa, SPMP, lelang, pencegahan, penyanderaan disesuaikan", dasar: "PMK 61/2023", berlakuSejak: "2023-06-12" },
      { sebelum: "NPWP 15 digit dan NPWP cabang", sesudah: "NIK sebagai NPWP bagi OP penduduk, NPWP 16 digit, NITKU untuk tempat kegiatan usaha (pengganti NPWP cabang)", dasar: "Pasal 2 ayat (1a) UU KUP; PMK 112/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01" },
      { sebelum: "Pembinaan organisasi, administrasi, dan keuangan Pengadilan Pajak oleh Kementerian Keuangan", sesudah: "Wajib dialihkan ke Mahkamah Agung paling lambat 31 Desember 2026; Perpres pengalihan masih dalam harmonisasi per Oktober 2026", dasar: "Putusan MK 26/PUU-XXI/2023", berlakuSejak: "2023-05-25" },
      { sebelum: "Petunjuk teknis akses informasi keuangan: PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024; belum ada pelaporan aset kripto (CARF) oleh PJAK", sesudah: "Baru menurut PMK 108/2025: Lembaga Simpanan mencakup pengelola uang elektronik tertentu/penyelenggara jasa pembayaran (e-wallet) dan mata uang digital bank sentral; PJAK menjadi pelapor CARF (data 2026, paling lambat 30 April 2027, dipertukarkan mulai 2027) dan laporan nihil tetap wajib; informasi yang tercatat s.d. 31 Desember 2025 tetap mengikuti rezim lama. Dimuat dalam PMK 108/2025 tetapi belum dibandingkan dengan rezim lama (◐): tenggat LJK diawasi OJK ke OJK paling lambat 1 Agustus, OJK ke DJP 31 Agustus, LJK lainnya/entitas lain ke DJP 30 April", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" }
    ],
    lembarRingkas: [
      { label: "Setor pajak masa", nilai: "tgl 15 bulan berikutnya; hari libur → hari kerja berikutnya", dasar: "PMK 81/2024 Ps. 94 ayat (2) dan Ps. 100", berlakuSejak: "2025-01-01" },
      { label: "Lapor SPT Masa PPh 21/26 dan Unifikasi", nilai: "20 hari setelah Masa Pajak berakhir", dasar: "Ps. 3 ayat (3) huruf a UU KUP; PMK 81/2024 Ps. 171", berlakuSejak: "2025-01-01" },
      { label: "SPT Masa PPN", nilai: "setor dan lapor akhir bulan berikutnya (setor sebelum lapor)", dasar: "Ps. 3 ayat (3) dan Ps. 9 ayat (1) UU KUP", berlakuSejak: "2010-01-01" },
      { label: "SPT Tahunan OP · Badan", nilai: "3 bulan (31 Maret) · 4 bulan setelah akhir tahun buku (30 April)", dasar: "Ps. 3 ayat (3) huruf b dan c UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Perpanjangan SPT Tahunan", nilai: "paling lama 2 bulan; kekurangan → bunga Ps. 19(3) uplift 0%", dasar: "Ps. 3 ayat (4)–(5) dan Ps. 19 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Jatuh tempo STP/SKPKB/SKPKBT/SK/putusan", nilai: "1 bulan sejak terbit (2 bulan usaha kecil/daerah tertentu); tidak bergeser karena libur", dasar: "Ps. 9 ayat (3)–(3a) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Denda SPT terlambat (Ps. 7)", nilai: "Masa PPN Rp500 rb · Masa lain Rp100 rb · Badan Rp1 jt · OP Rp100 rb", dasar: "Ps. 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Rumus bunga sanksi", nilai: "(acuan + uplift) : 12 per bulan; bagian bulan = 1 bulan; maks 24 bulan", dasar: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026", berlakuSejak: "2021-10-29" },
      { label: "Tarif bunga Oktober 2026", nilai: "0,59% · 1,01% · 1,42% · 1,84% · 2,26% (uplift 0/5/10/15/20%)", dasar: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Uplift per pasal", nilai: "0% Ps. 19 · 5% Ps. 8(2)/(2a), 9(2a)/(2b), 14(3) · 10% Ps. 8(5) · 15% Ps. 13(2) · 20% Ps. 13(3)", dasar: "UU KUP s.t.d.t.d. UU HPP", berlakuSejak: "2021-10-29" },
      { label: "Kenaikan", nilai: "75% Ps. 13(3) (potput tidak disetor, PPN) · 100% Ps. 15(2) SKPKBT dan Ps. 17C/17D", dasar: "Ps. 13 ayat (3), 15 ayat (2), 17C–17D UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Denda faktur pajak", nilai: "1% × DPP (tidak/terlambat/tidak lengkap)", dasar: "Ps. 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Pengungkapan Ps. 8(3) · Ps. 8(4)", nilai: "denda 100% (bukper) · bunga uplift 10% sebelum SPHP", dasar: "Ps. 8 ayat (3a) dan (5) UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Daluwarsa penetapan · penagihan", nilai: "5 tahun setelah akhir masa/tahun pajak · 5 tahun sejak terbit (dapat tertangguh)", dasar: "Ps. 13 ayat (1) dan Ps. 22 UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Pemeriksaan", nilai: "lengkap 5 bln (+4) · terfokus 3 · spesifik 1; tanggapan SPHP 5 hari kerja; PAHP 30 hari kerja", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
      { label: "Keberatan", nilai: "3 bulan sejak SKP dikirim/pemotongan; lunasi jumlah PAHP; putusan 12 bulan", dasar: "Ps. 25–26 UU KUP; PMK 118/2024", berlakuSejak: "2025-01-01" },
      { label: "Denda keberatan · banding/PK", nilai: "30% · 60% × (pajak menurut keputusan − dibayar sebelum keberatan)", dasar: "Ps. 25 ayat (9), Ps. 27 ayat (5d) dan (5f) UU KUP", berlakuSejak: "2021-10-29" },
      { label: "Permohonan Pasal 36", nilai: "keputusan 6 bulan; huruf a–c maks 2 kali; ditolak → gugatan 30 hari", dasar: "Ps. 36 dan Ps. 23 ayat (2) UU KUP; PMK 118/2024", berlakuSejak: "2025-01-01" },
      { label: "Restitusi Ps. 17B", nilai: "SKP 12 bulan; lewat → dikabulkan, SKPLB 1 bulan", dasar: "Ps. 17B UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Ambang Ps. 17D", nilai: "OP usaha ≤ Rp100 jt · badan ≤ Rp1 M · PKP: LB ≤ Rp1 M per Masa Pajak dan penyerahan ≤ Rp4,2 M, sejak 1 Mei 2026 (sebelumnya PKP ≤ Rp5 M)", dasar: "PMK 28 Tahun 2026 (mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" },
      { label: "Pengembalian dan imbalan bunga", nilai: "1 bulan sejak SKPLB; terlambat → imbalan bunga uplift 0% ◐", dasar: "Ps. 11 ayat (2)–(3) dan Ps. 27B UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Linimasa penagihan", nilai: "teguran +7 hari · Surat Paksa +21 hari · SPMP 2×24 jam · umumkan lelang +14 · lelang +14", dasar: "UU PPSP Ps. 8, 12, 26; PMK 61/2023", berlakuSejak: "2023-06-12" },
      { label: "Pencegahan · penyanderaan", nilai: "utang ≥ Rp100 jt + itikad diragukan; 6 + 6 bulan; sandera ≥ 14 hari setelah Surat Paksa", dasar: "UU PPSP Ps. 29–33; PMK 61/2023", berlakuSejak: "2023-06-12" },
      { label: "Banding · gugatan · PK", nilai: "3 bln (putusan 12+3) · 14/30 hari (putusan 6+3) · 3 bln ke MA", dasar: "UU 14/2002 Ps. 35, 40, 81, 92", berlakuSejak: "2002-04-12" },
      { label: "Lapor pengukuhan PKP", nilai: "akhir bulan berikutnya setelah peredaran bruto > Rp4,8 M", dasar: "PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" },
      { label: "Simpan dokumen pembukuan", nilai: "10 tahun di Indonesia, termasuk data elektronik", dasar: "Ps. 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Alokasi pembayaran dan fasilitas sanksi", nilai: "pokok lebih dulu; hapus sanksi 100% s.d. 31 Des 2026 atas permohonan", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02" },
      { label: "Pengadilan Pajak ke MA", nilai: "pembinaan organisasi, administrasi, keuangan paling lambat 31 Des 2026", dasar: "Putusan MK 26/PUU-XXI/2023", berlakuSejak: "2023-05-25" },
      { label: "Akses informasi keuangan", nilai: "laporan otomatis LJK + permintaan IBK; rahasia bank tidak berlaku; tanpa permintaan tertulis Menkeu per nasabah", dasar: "UU 9/2017 Ps. 2 dan 8; IBK (nomor pasal ◐)", berlakuSejak: "2017-05-08" },
      { label: "Pidana UU 9/2017", nilai: "pimpinan/pegawai LJK: kurungan ≤ 1 th atau denda ≤ Rp1 M · LJK: denda ≤ Rp1 M · pernyataan palsu: kurungan ≤ 1 th atau denda ≤ Rp1 M", dasar: "UU 9/2017 Pasal 7 (ketentuan pidana)", berlakuSejak: "2017-05-08" },
      { label: "Laporan LJK (PMK 108/2025)", nilai: "OP di Lembaga Simpanan agregat per lembaga ≥ Rp1 M; entitas/kustodian tanpa batas · diawasi OJK → OJK 1 Agt, OJK → DJP 31 Agt · LJK lain → DJP 30 Apr · nihil wajib", dasar: "PMK 108/2025 ◐ (teks belum dibaca)", berlakuSejak: "2026-01-01" }
    ]
  },
  topik: [
    {
      id: "A2.1", slug: "definisi-istilah", judul: "Definisi dan istilah KUP dan PPSP",
      estimasiMenit: 10, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Wajib Pajak adalah orang pribadi atau badan, meliputi pembayar pajak, pemotong pajak, dan pemungut pajak, yang mempunyai hak dan kewajiban perpajakan (Pasal 1 angka 2 UU KUP).",
        "Tahun Pajak adalah jangka waktu 1 tahun kalender, kecuali WP memakai tahun buku yang tidak sama dengan tahun kalender; Masa Pajak adalah 1 bulan kalender atau jangka waktu lain yang diatur PMK paling lama 3 bulan kalender.",
        "Jenis ketetapan: SKPKB (pokok kurang bayar), SKPKBT (tambahan atas pajak yang telah ditetapkan), SKPLB (kredit pajak lebih besar dari pajak terutang), SKPN (pajak terutang sama dengan kredit pajak, atau tidak terutang dan tidak ada kredit pajak). STP adalah surat untuk menagih pajak dan/atau sanksi bunga/denda.",
        "Kredit Pajak PPh = pajak dibayar sendiri + pokok STP atas PPh tahun berjalan yang tidak/kurang dibayar + pajak dipotong/dipungut + PPh luar negeri yang dapat dikreditkan − pengembalian pendahuluan. Sanksi dan PPh final tidak termasuk.",
        "Penanggung Pajak adalah orang pribadi atau badan yang bertanggung jawab atas pembayaran pajak, termasuk wakil yang menjalankan hak dan memenuhi kewajiban WP (pengurus, ahli waris, kurator).",
        "Utang Pajak menurut UU PPSP adalah pajak yang masih harus dibayar termasuk sanksi bunga, denda, atau kenaikan yang tercantum dalam ketetapan atau surat sejenisnya; biaya penagihan bukan bagian dari utang pajak, tetapi ikut diperintahkan dibayar dalam Surat Paksa.",
        "Pembukuan ditutup dengan laporan keuangan (neraca dan laba rugi); pencatatan hanya mengumpulkan data peredaran/penerimaan bruto dan penghasilan."
      ],
      poinKunci: [
        { label: "Masa Pajak", nilai: "1 bulan kalender atau jangka lain paling lama 3 bulan kalender", dasar: "Pasal 1 UU KUP (definisi Masa Pajak)", berlakuSejak: "2008-01-01" },
        { label: "SKPN", nilai: "pajak terutang = kredit pajak, atau tidak terutang dan tidak ada kredit pajak", dasar: "Pasal 1 dan Pasal 17A UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Kredit Pajak PPh", nilai: "termasuk pokok STP tahun berjalan; dikurangi pengembalian pendahuluan; tanpa sanksi", dasar: "Pasal 1 angka 22 huruf a UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Utang Pajak (PPSP)", nilai: "pokok + bunga + denda + kenaikan; tidak termasuk biaya penagihan", dasar: "Pasal 1 UU PPSP", berlakuSejak: "2000-08-02" }
      ],
      dasarHukum: [
        { pasal: "Pasal 1 UU KUP", catatan: "definisi WP, Tahun/Masa Pajak, SPT, SKP, STP, Kredit Pajak, Pembukuan, Pemeriksaan, Bukti Permulaan" },
        { pasal: "Pasal 1 UU PPSP", catatan: "Penanggung Pajak, Utang Pajak, Biaya Penagihan, Surat Paksa" },
        { pasal: "Pasal 17A UU KUP", catatan: "kriteria SKPN" }
      ],
      jebakan: [
        { teks: "Bunga STP dimasukkan ke kredit pajak — hanya pokok STP atas PPh tahun berjalan yang menjadi kredit pajak", tagSebab: "salah-klasifikasi" },
        { teks: "SKPN dikira hanya untuk WP tanpa kredit pajak — SKPN juga terbit bila pajak terutang sama dengan kredit pajak", tagSebab: "salah-baca" },
        { teks: "Biaya penagihan dianggap bagian Utang Pajak — UU PPSP memisahkannya", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Hasil pemeriksaan PPh Badan Tahun Pajak 2024 PT Arunika: PPh terutang Rp450.000.000, kredit pajak (PPh 22, 23, 25) Rp450.000.000. Ketetapan apa yang terbit?",
        jawaban: "SKPN",
        langkah: [["PPh terutang", "Rp450.000.000"], ["Kredit pajak", "Rp450.000.000"], ["Selisih", "Rp0"], ["Jenis ketetapan (Pasal 17A)", "SKPN"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.2", slug: "npwp-pkp-coretax", judul: "NPWP, NIK, NITKU, pengukuhan PKP, dan akun Coretax",
      estimasiMenit: 12, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "OP penduduk memakai NIK sebagai NPWP; badan, OP bukan penduduk, dan instansi pemerintah memakai NPWP 16 digit; tempat kegiatan usaha (cabang) diberi NITKU, pengganti NPWP cabang. Implementasi penuh 1 Juli 2024.",
        "Dokumen yang memuat NPWP 15 digit sebelum implementasi penuh tetap sah; sejak 1 Januari 2025 seluruh layanan berjalan di Coretax (Portal WP) dengan akun WP, kode otorisasi/sertifikat elektronik, dan penunjukan PIC bagi badan.",
        "Pengusaha yang peredaran brutonya dalam satu tahun buku melebihi Rp4,8 miliar wajib melaporkan usaha untuk dikukuhkan PKP paling lambat akhir bulan berikutnya setelah bulan batas terlampaui; pengusaha kecil boleh memilih menjadi PKP.",
        "DJP dapat menerbitkan NPWP dan/atau mengukuhkan PKP secara jabatan; kewajiban dimulai sejak syarat subjektif dan objektif terpenuhi, paling lama 5 tahun sebelum NPWP diterbitkan/PKP dikukuhkan.",
        "Penghapusan NPWP dan pencabutan PKP dapat atas permohonan atau secara jabatan; keputusan atas permohonan penghapusan NPWP paling lama 6 bulan (OP) atau 12 bulan (badan), pencabutan PKP 6 bulan sejak permohonan lengkap."
      ],
      poinKunci: [
        { label: "NIK sebagai NPWP penuh", nilai: "1 Juli 2024", dasar: "PMK 112/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01" },
        { label: "NITKU", nilai: "identitas tempat kegiatan usaha, pengganti NPWP cabang", dasar: "PMK 112/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01" },
        { label: "Batas pengusaha kecil", nilai: "peredaran bruto ≤ Rp4,8 miliar per tahun buku", dasar: "PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" },
        { label: "Lapor pengukuhan PKP", nilai: "akhir bulan berikutnya setelah bulan Rp4,8 M terlampaui", dasar: "PMK 197/PMK.03/2013; PMK 81/2024", berlakuSejak: "2014-01-01" },
        { label: "NPWP/PKP jabatan", nilai: "kewajiban mundur paling lama 5 tahun", dasar: "Pasal 2 ayat (4a) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (1), (1a), (2), (4), (4a) UU KUP", catatan: "kewajiban mendaftar, NIK sebagai NPWP, NPWP/PKP jabatan" },
        { pasal: "Pasal 2 ayat (6)–(9) UU KUP", catatan: "penghapusan NPWP dan pencabutan PKP" },
        { pasal: "PMK 112/PMK.03/2022 jo. PMK 136/2023", catatan: "NIK, NPWP 16 digit, NITKU" },
        { pasal: "PMK 81/2024", catatan: "pendaftaran, akun WP, dan layanan Coretax" }
      ],
      jebakan: [
        { teks: "Mendaftarkan NPWP cabang untuk toko kedua — sejak Juli 2024 cukup NITKU", tagSebab: "angka-usang" },
        { teks: "Tenggat lapor PKP dihitung akhir bulan yang sama saat omzet terlampaui — yang benar akhir bulan berikutnya", tagSebab: "salah-baca" },
        { teks: "Kewajiban NPWP jabatan dianggap mulai sejak usaha berdiri tanpa batas — dibatasi paling lama 5 tahun ke belakang", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Peredaran bruto kumulatif PT Lancar Abadi melewati Rp4,8 miliar pada bulan Agustus 2026. Kapan batas akhir melapor untuk dikukuhkan sebagai PKP?",
        jawaban: "30 September 2026",
        langkah: [["Bulan batas terlampaui", "Agustus 2026"], ["Tenggat", "akhir bulan berikutnya"], ["Batas lapor", "30 September 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Rincian Pasal 2 ayat (4a) dan (9) UU KUP (5 tahun ke belakang; 6/12 bulan keputusan) bersumber dari teks UU yang belum dibaca ulang langsung pada riset ini; angka NIK/NITKU dan Rp4,8 miliar terverifikasi."
    },
    {
      id: "A2.3", slug: "pembayaran-pelaporan", judul: "Pembayaran, pelaporan SPT, perpanjangan, dan pembetulan",
      estimasiMenit: 16, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Setor pajak masa (PPh 21/26, 22, 23, 4(2), 15, 25, PPN JKP luar negeri, bea meterai) paling lambat tanggal 15 bulan berikutnya; jatuh tempo pada hari libur bergeser ke hari kerja berikutnya (PMK 81/2024 Pasal 94 dan 100).",
        "Lapor SPT Masa PPh (PPh 21/26, Unifikasi) paling lama 20 hari setelah Masa Pajak berakhir; PPN disetor dan dilaporkan paling lama akhir bulan berikutnya, setor sebelum SPT disampaikan.",
        "SPT Tahunan OP paling lama 3 bulan dan badan 4 bulan setelah akhir Tahun Pajak (tahun buku); untuk tahun buku 1 Juli–30 Juni, SPT badan jatuh pada 31 Oktober.",
        "Perpanjangan SPT Tahunan paling lama 2 bulan dengan pemberitahuan tertulis disertai penghitungan sementara dan bukti pelunasan; kekurangan atas penghitungan sementara dikenai bunga Pasal 19 ayat (3) (uplift 0%).",
        "PPh Pasal 29 dilunasi sebelum SPT Tahunan disampaikan; keterlambatan dikenai bunga Pasal 9 ayat (2b) (uplift 5%) sejak batas waktu penyampaian SPT.",
        "Pembetulan SPT dapat dilakukan sepanjang belum dilakukan pemeriksaan; pembetulan yang menyatakan rugi atau lebih bayar paling lama 2 tahun sebelum daluwarsa penetapan; kurang bayar karena pembetulan dikenai bunga Pasal 8 ayat (2)/(2a).",
        "Pelunasan STP/SKPKB/SKPKBT/SK Keberatan/putusan yang menambah pajak: 1 bulan sejak diterbitkan (2 bulan untuk usaha kecil/daerah tertentu)."
      ],
      poinKunci: [
        { label: "Setor pajak masa", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" },
        { label: "Lapor SPT Masa PPh", nilai: "20 hari setelah Masa Pajak berakhir", dasar: "Pasal 3 ayat (3) huruf a UU KUP; PMK 81/2024 Pasal 171", berlakuSejak: "2025-01-01" },
        { label: "SPT Masa PPN", nilai: "setor dan lapor akhir bulan berikutnya", dasar: "Pasal 3 ayat (3) dan Pasal 9 ayat (1) UU KUP", berlakuSejak: "2010-01-01" },
        { label: "SPT Tahunan OP · Badan", nilai: "3 bulan · 4 bulan setelah akhir Tahun Pajak", dasar: "Pasal 3 ayat (3) huruf b dan c UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Perpanjangan SPT Tahunan", nilai: "paling lama 2 bulan", dasar: "Pasal 3 ayat (4)–(5) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Pembetulan rugi/LB", nilai: "paling lama 2 tahun sebelum daluwarsa penetapan", dasar: "Pasal 8 ayat (1a) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3 UU KUP", catatan: "batas waktu SPT dan perpanjangan" },
        { pasal: "Pasal 8 ayat (1), (1a), (2), (2a) UU KUP", catatan: "pembetulan dan bunganya" },
        { pasal: "Pasal 9 ayat (1)–(3a) UU KUP", catatan: "jatuh tempo pembayaran" },
        { pasal: "PMK 81/2024 Pasal 94, 100, 171", catatan: "tanggal 15, hari libur, pelaporan" }
      ],
      jebakan: [
        { teks: "Memakai tanggal 10 untuk PPh 21/23 — usang sejak 1 Januari 2025", tagSebab: "angka-usang" },
        { teks: "Menyamakan batas lapor SPT Masa PPN dengan PPh (20 hari) — PPN akhir bulan berikutnya", tagSebab: "salah-baca" },
        { teks: "Menghitung 4 bulan dari 31 Desember untuk badan yang tahun bukunya berakhir 30 Juni", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "CV Nirmala memotong PPh 23 Masa Juni 2026. Kapan batas setor dan batas lapor SPT Masa PPh Unifikasinya?",
        jawaban: "Setor 15 Juli 2026; lapor 20 Juli 2026",
        langkah: [["Masa Pajak berakhir", "30 Juni 2026"], ["Setor: tanggal 15 bulan berikutnya", "15 Juli 2026 (Rabu)"], ["Lapor: 20 hari setelah masa berakhir", "20 Juli 2026 (Senin)"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.4", slug: "pembukuan-pencatatan", judul: "Pembukuan dan pencatatan",
      estimasiMenit: 10, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Wajib pembukuan: WP OP yang melakukan kegiatan usaha atau pekerjaan bebas dan WP badan (Pasal 28 ayat (1)).",
        "Boleh pencatatan: WP OP yang boleh memakai NPPN (peredaran bruto < Rp4,8 miliar setahun dan memberitahukan pemakaian NPPN dalam 3 bulan pertama Tahun Pajak) serta WP OP yang tidak melakukan usaha/pekerjaan bebas.",
        "Pembukuan diselenggarakan di Indonesia, huruf Latin, angka Arab, satuan Rupiah, bahasa Indonesia atau bahasa asing yang diizinkan Menteri Keuangan; stelsel akrual atau kas secara taat asas.",
        "Perubahan metode pembukuan dan/atau tahun buku wajib mendapat persetujuan DJP; pembukuan bahasa Inggris dan dolar AS (PMA, KKKS, BUT, dll.) setelah izin, teknis Coretax diatur PER-8/PJ/2025.",
        "Buku, catatan, dokumen dasar, termasuk hasil pengolahan data elektronik, wajib disimpan 10 tahun di Indonesia; tidak menyelenggarakan pembukuan dapat berujung SKPKB Pasal 13 ayat (3) dan pidana Pasal 39."
      ],
      poinKunci: [
        { label: "Penyimpanan dokumen", nilai: "10 tahun di Indonesia", dasar: "Pasal 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Batas NPPN (boleh pencatatan)", nilai: "peredaran bruto < Rp4,8 miliar; beri tahu 3 bulan pertama", dasar: "Pasal 14 ayat (2) UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "Bahasa asing / mata uang selain Rupiah", nilai: "setelah izin Menteri Keuangan", dasar: "Pasal 28 ayat (8) UU KUP; PMK 123/PMK.03/2019; PER-8/PJ/2025", berlakuSejak: "2025-05-21" },
        { label: "Ubah metode/tahun buku", nilai: "persetujuan DJP", dasar: "Pasal 28 ayat (6) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 28 UU KUP", catatan: "kewajiban, syarat, dan penyimpanan pembukuan/pencatatan" },
        { pasal: "Pasal 13 ayat (3) dan Pasal 39 ayat (1) UU KUP", catatan: "akibat tidak menyelenggarakan pembukuan" },
        { pasal: "Pasal 14 ayat (2)–(5) UU PPh", catatan: "NPPN dan pemberitahuan" }
      ],
      jebakan: [
        { teks: "CV beromzet kecil dianggap boleh pencatatan — semua WP badan wajib pembukuan", tagSebab: "salah-klasifikasi" },
        { teks: "Masa simpan dokumen disamakan dengan daluwarsa penetapan 5 tahun — yang benar 10 tahun", tagSebab: "lupa-pasal" },
        { teks: "OP beromzet < Rp4,8 miliar otomatis boleh pencatatan walau tidak memberitahukan NPPN", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "dr. Laras (praktik mandiri, peredaran bruto 2025 Rp2,1 miliar) memberitahukan pemakaian NPPN pada 20 Februari 2026. Untuk Tahun Pajak 2026 ia wajib menyelenggarakan apa?",
        jawaban: "Pencatatan",
        langkah: [["Peredaran bruto", "Rp2,1 miliar < Rp4,8 miliar"], ["Pemberitahuan NPPN", "20 Februari 2026 (dalam 3 bulan pertama)"], ["Kewajiban", "pencatatan (Pasal 28 ayat (2))"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.5", slug: "pemeriksaan-penyidikan", judul: "Penelitian, pemeriksaan (PMK 15/2025), bukti permulaan, dan penyidikan",
      estimasiMenit: 14, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "PMK 15/2025 berlaku 14 Februari 2025, menyatukan PMK 17/2013 jo. 184/2015 dan PMK 256/2014. Pemeriksaan menguji kepatuhan: lengkap 5 bulan (dapat diperpanjang 4 bulan untuk grup usaha/indikasi transfer pricing), terfokus 3 bulan, spesifik 1 bulan (kriteria tertentu 10 hari kerja).",
        "Jangka waktu pengujian dihitung sejak SP2/pemberitahuan pemeriksaan sampai SPHP disampaikan; Pembahasan Temuan Sementara dilakukan sebelum SPHP (dikecualikan untuk pemeriksaan spesifik).",
        "WP menanggapi SPHP paling lama 5 hari kerja sejak diterima (sebelumnya 7 hari kerja); tidak menanggapi dituangkan dalam berita acara. PAHP dan laporan diselesaikan dalam 30 hari kerja sejak SPHP disampaikan.",
        "Selama pemeriksaan dan sebelum SPHP disampaikan, WP dapat mengungkapkan ketidakbenaran pengisian SPT (Pasal 8 ayat (4)) dengan bunga uplift 10%; pemeriksaan tetap dilanjutkan.",
        "Pemeriksaan bukti permulaan mendahului penyidikan; pengungkapan ketidakbenaran perbuatan (Pasal 8 ayat (3)) sebelum penyidikan diberitahukan ke penuntut umum disertai denda 100%.",
        "Untuk kepentingan penerimaan negara, Jaksa Agung dapat menghentikan penyidikan atas permintaan Menteri Keuangan setelah WP/tersangka melunasi kerugian pada pendapatan negara ditambah denda 1 kali (Pasal 38), 3 kali (Pasal 39), atau 4 kali jumlah pajak dalam faktur/bukti potong/bukti setor (Pasal 39A) (Pasal 44B)."
      ],
      poinKunci: [
        { label: "Pemeriksaan lengkap · terfokus · spesifik", nilai: "5 bulan · 3 bulan · 1 bulan", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
        { label: "Perpanjangan pemeriksaan lengkap", nilai: "4 bulan (grup usaha/transfer pricing)", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
        { label: "Tanggapan SPHP", nilai: "5 hari kerja (dulu 7)", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
        { label: "PAHP dan laporan", nilai: "30 hari kerja sejak SPHP", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14" },
        { label: "Batas pengungkapan Ps. 8(4)", nilai: "sebelum SPHP disampaikan", dasar: "Pasal 8 ayat (4) UU KUP (UU HPP)", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 29–31 UU KUP", catatan: "kewenangan pemeriksaan" },
        { pasal: "Pasal 8 ayat (3)–(5) UU KUP", catatan: "pengungkapan ketidakbenaran perbuatan dan pengisian SPT" },
        { pasal: "Pasal 43A, 44, 44B UU KUP", catatan: "bukti permulaan, penyidikan, penghentian penyidikan" },
        { pasal: "PMK 15/2025", catatan: "jenis dan jangka waktu pemeriksaan" }
      ],
      jebakan: [
        { teks: "Memakai pemeriksaan kantor 4 bulan / lapangan 6 bulan — sudah diganti PMK 15/2025", tagSebab: "angka-usang" },
        { teks: "Tanggapan SPHP 7 hari kerja — kini 5 hari kerja", tagSebab: "angka-usang" },
        { teks: "Pengungkapan Pasal 8(4) masih bisa sampai SKP terbit — sejak UU HPP hanya sampai sebelum SPHP", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "SPHP pemeriksaan terfokus PT Wira diterima Senin, 5 Oktober 2026. Kapan batas akhir tanggapan tertulis (tanpa hari libur nasional)?",
        jawaban: "Senin, 12 Oktober 2026",
        langkah: [["Hari kerja ke-1 s.d. ke-4", "6, 7, 8, 9 Oktober"], ["Sabtu–Minggu dilewati", "10–11 Oktober"], ["Hari kerja ke-5", "12 Oktober 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Angka PMK 15/2025 terverifikasi; rincian penghentian penyidikan Pasal 44B (pengali denda 1/3/4 kali) dan pidana bersumber dari teks UU yang belum dibaca langsung dalam riset proyek."
    },
    {
      id: "A2.6", slug: "stp-skp", judul: "STP, SKPKB, SKPN, SKPLB, SKPKBT, dan daluwarsa penetapan",
      estimasiMenit: 14, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "STP (Pasal 14) diterbitkan antara lain bila PPh tahun berjalan tidak/kurang dibayar, ada kekurangan karena salah tulis/hitung, dikenai sanksi denda/bunga, PKP tidak membuat/terlambat/tidak lengkap membuat faktur (denda 1% DPP), atau pengembalian pendahuluan ternyata tidak berhak.",
        "SKPKB (Pasal 13 ayat (1)) terbit dalam 5 tahun bila hasil pemeriksaan menunjukkan pajak kurang dibayar, SPT tidak disampaikan setelah ditegur, PPN tidak seharusnya dikompensasikan/0%, atau kewajiban pembukuan tidak dipenuhi.",
        "SKPKB hasil pemeriksaan biasa (Pasal 13 ayat (1) huruf a) dikenai bunga uplift 15% (Pasal 13 ayat (2)) paling lama 24 bulan. SKPKB karena SPT tidak disampaikan setelah ditegur, PPN tidak seharusnya dikompensasikan/0%, atau pembukuan tidak dipenuhi (huruf b–d) dikenai Pasal 13 ayat (3): bunga uplift 20% atas PPh tidak/kurang dibayar atau tidak/kurang dipotong/dipungut, kenaikan 75% atas PPh dipotong/dipungut tetapi tidak disetor dan atas PPN/PPnBM.",
        "SKPKBT (Pasal 15) terbit karena data baru/data semula belum terungkap; dikenai kenaikan 100% dari kekurangan pajak, kecuali WP mengungkapkan sendiri sebelum pemeriksaan.",
        "SKPLB (Pasal 17) terbit bila kredit pajak lebih besar dari pajak terutang; SKPN (Pasal 17A) bila sama atau tidak terutang tanpa kredit.",
        "Daluwarsa penetapan 5 tahun setelah saat terutang atau berakhirnya Masa Pajak, Bagian Tahun Pajak, atau Tahun Pajak."
      ],
      poinKunci: [
        { label: "Bunga SKPKB Ps. 13(2)", nilai: "uplift 15%; Okt 2026 1,84%/bulan; maks 24 bulan", dasar: "Pasal 13 ayat (2) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
        { label: "Bunga Ps. 13(3) huruf a/b", nilai: "uplift 20%; Okt 2026 2,26%/bulan", dasar: "Pasal 13 ayat (3) dan (3b) UU KUP", berlakuSejak: "2026-10-01" },
        { label: "Kenaikan Ps. 13(3) huruf c/d", nilai: "75% (dulu 100%)", dasar: "Pasal 13 ayat (3) UU KUP (UU HPP)", berlakuSejak: "2021-10-29" },
        { label: "Kenaikan SKPKBT", nilai: "100%", dasar: "Pasal 15 ayat (2) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Denda faktur Ps. 14(4)", nilai: "1% × DPP", dasar: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Daluwarsa penetapan", nilai: "5 tahun", dasar: "Pasal 13 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 13 UU KUP", catatan: "SKPKB dan sanksinya" },
        { pasal: "Pasal 14 UU KUP", catatan: "STP" },
        { pasal: "Pasal 15 UU KUP", catatan: "SKPKBT" },
        { pasal: "Pasal 17, 17A UU KUP", catatan: "SKPLB dan SKPN" }
      ],
      jebakan: [
        { teks: "Kenaikan 100% untuk PPh potput tidak disetor — sejak UU HPP 75%", tagSebab: "angka-usang" },
        { teks: "Bunga SKPKB memakai uplift 5% milik Pasal 9 — yang benar 15% (Ps. 13(2)) atau 20% (Ps. 13(3))", tagSebab: "lupa-pasal" },
        { teks: "Daluwarsa dihitung 5 tahun dari tanggal SPT dilaporkan — yang benar dari akhir Masa/Tahun Pajak atau saat terutang", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "SKPKB PPh Badan memuat pokok kurang bayar Rp50.000.000 dengan bunga Pasal 13 ayat (2) selama 24 bulan; anggap tarif KMK 1,84% per bulan. Berapa sanksi bunga?",
        jawaban: "Rp22.080.000",
        langkah: [["Pokok", "Rp50.000.000"], ["Tarif per bulan (acuan + 15%)/12", "1,84%"], ["Bulan (maks 24)", "24"], ["Bunga = 50.000.000 × 1,84% × 24", "Rp22.080.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.7", slug: "keberatan-pasal36", judul: "Pembetulan Pasal 16, keberatan, dan permohonan Pasal 36",
      estimasiMenit: 16, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Pembetulan Pasal 16: DJP membetulkan SKP, STP, atau keputusan yang mengandung kesalahan tulis, kesalahan hitung, dan/atau kekeliruan penerapan ketentuan, karena jabatan atau atas permohonan WP.",
        "Keberatan (Pasal 25) diajukan atas SKPKB, SKPKBT, SKPLB, SKPN, serta pemotongan/pemungutan pihak ketiga, hanya mengenai materi/isi ketetapan, paling lama 3 bulan sejak tanggal dikirim SKP atau tanggal pemotongan/pemungutan, kecuali keadaan di luar kekuasaan WP.",
        "Syarat: tertulis berbahasa Indonesia, mengemukakan jumlah pajak menurut WP disertai alasan, satu keberatan untuk satu SKP, ditandatangani WP/kuasa; sejak 2025 diajukan lewat Portal Wajib Pajak (PMK 118/2024). Atas SKPKB/SKPKBT, WP wajib melunasi paling sedikit jumlah yang disetujui dalam PAHP.",
        "Sisa pajak yang belum dibayar saat keberatan tertangguh sampai 1 bulan sejak SK Keberatan terbit; DJP memutus dalam 12 bulan sejak surat keberatan diterima, lewat waktu dianggap dikabulkan.",
        "Keberatan ditolak/dikabulkan sebagian dan WP tidak banding: denda 30% × (pajak menurut SK Keberatan − pajak yang telah dibayar sebelum keberatan) (Pasal 25 ayat (9)).",
        "Pasal 36 ayat (1): (a) pengurangan/penghapusan sanksi karena khilaf atau bukan kesalahan WP; (b) pengurangan/pembatalan SKP tidak benar; (c) pengurangan/pembatalan STP tidak benar; (d) pembatalan hasil pemeriksaan tanpa SPHP atau PAHP. Huruf a–c paling banyak 2 kali; keputusan 6 bulan, lewat dianggap dikabulkan; tidak boleh bersamaan dengan keberatan atas SKP yang sama.",
        "PMK 71/2026 (berlaku 2 Oktober 2026) mengubah PMK 118/2024: pembayaran dialokasikan ke pokok lebih dulu dan ada fasilitas pengurangan/penghapusan sanksi administratif bertahap (KEP-239/PJ/2026), tidak termasuk sanksi dari keberatan, banding, atau PK."
      ],
      poinKunci: [
        { label: "Tenggat keberatan", nilai: "3 bulan sejak SKP dikirim / tanggal pemotongan", dasar: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Pelunasan minimal sebelum keberatan", nilai: "sejumlah yang disetujui dalam PAHP", dasar: "Pasal 25 ayat (3a) UU KUP; PMK 118/2024 Pasal 10", berlakuSejak: "2025-01-01" },
        { label: "Keputusan keberatan", nilai: "12 bulan; lewat = dikabulkan", dasar: "Pasal 26 ayat (1) dan (5) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Denda keberatan", nilai: "30% (tidak dikenakan bila banding)", dasar: "Pasal 25 ayat (9) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Keputusan Pasal 36", nilai: "6 bulan; huruf a–c maks 2 kali", dasar: "Pasal 36 UU KUP; PMK 118/2024", berlakuSejak: "2025-01-01" },
        { label: "Fasilitas sanksi PMK 71/2026", nilai: "hapus 100% s.d. 31 Des 2026, bertahap s.d. 30 Juni 2027", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02" }
      ],
      dasarHukum: [
        { pasal: "Pasal 16 UU KUP", catatan: "pembetulan kesalahan tulis/hitung/penerapan" },
        { pasal: "Pasal 25, 26, 26A UU KUP", catatan: "keberatan" },
        { pasal: "Pasal 36 UU KUP", catatan: "pengurangan/penghapusan sanksi dan pembatalan" },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", catatan: "tata cara via Portal WP" }
      ],
      jebakan: [
        { teks: "Denda keberatan dihitung dari seluruh pajak menurut SK Keberatan — padahal dikurangi pajak yang telah dibayar sebelum keberatan", tagSebab: "salah-hitung" },
        { teks: "Mengajukan keberatan dan Pasal 36 huruf b sekaligus atas SKP yang sama — dilarang", tagSebab: "lupa-pasal" },
        { teks: "Denda 50% pra-UU HPP — kini 30%", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "SKPKB PPN Rp100.000.000; WP membayar Rp40.000.000 (jumlah disetujui PAHP) lalu keberatan; keberatan ditolak dan WP tidak banding. Berapa denda Pasal 25 ayat (9)?",
        jawaban: "Rp18.000.000",
        langkah: [["Pajak menurut SK Keberatan", "Rp100.000.000"], ["Dibayar sebelum keberatan", "Rp40.000.000"], ["Dasar denda", "Rp60.000.000"], ["Denda 30%", "Rp18.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.8", slug: "sanksi-administrasi-pidana", judul: "Sanksi administrasi (denda, bunga, kenaikan) dan pidana",
      estimasiMenit: 18, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Denda Pasal 7 ayat (1) atas SPT terlambat/tidak disampaikan: SPT Masa PPN Rp500.000, SPT Masa lain Rp100.000, SPT Tahunan PPh Badan Rp1.000.000, SPT Tahunan PPh OP Rp100.000; dikecualikan antara lain OP meninggal, OP tidak lagi berusaha, WNA tidak lagi tinggal di Indonesia, bendahara tidak lagi membayar, WP terkena bencana.",
        "Bunga = tarif KMK per bulan × pokok × jumlah bulan; bagian bulan dihitung satu bulan penuh; paling lama 24 bulan; tarif = (suku bunga acuan + uplift) : 12, yang berlaku pada tanggal dimulainya penghitungan sanksi.",
        "Uplift: 0% (Ps. 19 — angsuran/penundaan, tidak lunas saat jatuh tempo, kurang bayar penghitungan sementara perpanjangan SPT); 5% (Ps. 8(2)/(2a) pembetulan, 9(2a)/(2b) terlambat setor, 14(3) STP); 10% (Ps. 8(5) pengungkapan saat pemeriksaan); 15% (Ps. 13(2) SKPKB); 20% (Ps. 13(3) huruf a/b).",
        "Tarif Oktober 2026 (KMK 47/MK/EF.2/2026): 0,59% · 1,01% · 1,42% · 1,84% · 2,26% per bulan.",
        "Kenaikan dan denda: 75% (Ps. 13(3) huruf c/d), 100% (Ps. 15(2) SKPKBT; Ps. 8(3) pengungkapan perbuatan), denda 1% DPP faktur (Ps. 14(4)), denda keberatan 30% (Ps. 25(9)), denda banding/PK 60% (Ps. 27(5d), (5f)).",
        "Pidana: Pasal 38 (alpa) denda 1–2 kali pajak terutang atau kurungan 3 bulan–1 tahun; Pasal 39 (sengaja) penjara 6 bulan–6 tahun dan denda 2–4 kali; Pasal 44B penghentian penyidikan dengan pelunasan pajak ditambah sanksi denda."
      ],
      poinKunci: [
        { label: "Denda SPT Ps. 7(1)", nilai: "PPN Rp500 rb · Masa lain Rp100 rb · Badan Rp1 jt · OP Rp100 rb", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Uplift 0/5/10/15/20%", nilai: "Ps. 19 · Ps. 8(2), 9(2a), 14(3) · Ps. 8(5) · Ps. 13(2) · Ps. 13(3)", dasar: "UU KUP s.t.d.t.d. UU HPP", berlakuSejak: "2021-10-29" },
        { label: "Tarif Oktober 2026", nilai: "0,59% · 1,01% · 1,42% · 1,84% · 2,26%", dasar: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
        { label: "Maksimal bunga", nilai: "24 bulan; bagian bulan = 1 bulan", dasar: "Pasal 9 ayat (2a), 13 ayat (2), 19 UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Denda keberatan · banding", nilai: "30% · 60%", dasar: "Pasal 25 ayat (9), 27 ayat (5d) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Pengungkapan perbuatan Ps. 8(3)", nilai: "denda 100% (dulu 150%)", dasar: "Pasal 8 ayat (3a) UU KUP", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 7 UU KUP", catatan: "denda keterlambatan SPT" },
        { pasal: "Pasal 8, 9, 13, 14, 15, 19 UU KUP", catatan: "bunga, kenaikan, denda" },
        { pasal: "Pasal 25 ayat (9), 27 ayat (5d) UU KUP", catatan: "denda keberatan dan banding" },
        { pasal: "Pasal 38, 39, 44B UU KUP", catatan: "pidana dan penghentian penyidikan" },
        { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026; KMK 47/MK/EF.2/2026", catatan: "tarif bunga bulanan" }
      ],
      jebakan: [
        { teks: "Bunga 2% flat per bulan — usang sejak UU Cipta Kerja/UU HPP", tagSebab: "angka-usang" },
        { teks: "Membulatkan bulan ke bawah — bagian bulan dihitung penuh", tagSebab: "salah-hitung" },
        { teks: "Memakai tarif uplift pasal lain (mis. 0% untuk keterlambatan setor masa)", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PPh 25 Masa September 2026 Rp18.500.000 jatuh tempo 15 Oktober 2026 dan baru disetor 2 Februari 2027. Tarif Pasal 9 ayat (2a) Oktober 2026 1,01%. Berapa bunga?",
        jawaban: "Rp747.400",
        langkah: [["15 Okt 2026 → 15 Jan 2027", "3 bulan penuh"], ["15 Jan → 2 Feb 2027", "bagian bulan = 1 bulan"], ["Jumlah bulan", "4"], ["Bunga = 18.500.000 × 1,01% × 4", "Rp747.400"]]
      },
      verifikasi: "◐",
      peringatan: "Denda, bunga, uplift, dan tarif Oktober 2026 terverifikasi; rentang pidana Pasal 38–39 (denda 1–2 kali/2–4 kali, kurungan/penjara) bertanda ◐ dalam riset proyek."
    },
    {
      id: "A2.9", slug: "restitusi-imbalan-bunga", judul: "Restitusi, pengembalian pendahuluan, dan imbalan bunga",
      estimasiMenit: 12, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "Permohonan restitusi atas SPT lebih bayar diproses dengan pemeriksaan; DJP wajib menerbitkan SKP paling lama 12 bulan sejak permohonan diterima lengkap; lewat waktu permohonan dianggap dikabulkan dan SKPLB terbit paling lama 1 bulan kemudian (Pasal 17B).",
        "Pengembalian pendahuluan tanpa pemeriksaan, melalui penelitian (sejak 1 Mei 2026 diatur PMK 28 Tahun 2026 yang mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021): Pasal 17C (WP kriteria tertentu/patuh), Pasal 17D (WP persyaratan tertentu: OP tanpa usaha berapa pun, OP usaha ≤ Rp100 juta, badan ≤ Rp1 miliar, PKP dengan lebih bayar ≤ Rp1 miliar dan jumlah penyerahan ≤ Rp4,2 miliar untuk suatu Masa Pajak; sebelumnya PKP ≤ Rp5 miliar), dan PKP berisiko rendah (Pasal 9 ayat (4c) UU PPN). Sejak PMK 28/2026, PKP persyaratan tertentu tidak lagi diperlakukan sebagai PKP berisiko rendah. Keputusan berupa SKPPKP.",
        "Bila setelah pengembalian pendahuluan terbit SKPKB, WP Pasal 17C/17D dikenai kenaikan 100% dari kekurangan pajak (Pasal 17C ayat (5) dan 17D ayat (5)), sedangkan PKP berisiko rendah dikenai bunga Pasal 13 ayat (2).",
        "Kelebihan pembayaran dikembalikan paling lama 1 bulan sejak permohonan (SKPLB/keputusan); lewat 1 bulan, pemerintah memberi imbalan bunga (Pasal 11 ayat (3)) sejak berakhirnya 1 bulan sampai pengembalian, tarif KMK uplift 0%.",
        "Imbalan bunga Pasal 27B diberikan bila keberatan, banding, PK, atau permohonan Pasal 36 dikabulkan sehingga ada kelebihan pembayaran, paling lama 24 bulan.",
        "Kelebihan pembayaran lebih dulu diperhitungkan dengan utang pajak lain (kompensasi) sebelum dikembalikan."
      ],
      poinKunci: [
        { label: "Putusan restitusi Ps. 17B", nilai: "12 bulan; lewat → dikabulkan, SKPLB 1 bulan", dasar: "Pasal 17B ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Ambang Ps. 17D", nilai: "OP usaha ≤ Rp100 jt · badan ≤ Rp1 M · PKP: LB ≤ Rp1 M dan penyerahan ≤ Rp4,2 M per Masa Pajak", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" },
        { label: "PKP persyaratan tertentu", nilai: "tidak lagi diperlakukan sebagai PKP berisiko rendah (Ps. 9 ayat (4c) UU PPN)", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01" },
        { label: "Pengembalian setelah SKPLB", nilai: "1 bulan; terlambat → imbalan bunga Ps. 11(3)", dasar: "Pasal 11 ayat (2)–(3) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Tarif imbalan bunga Okt 2026", nilai: "0,59% per bulan (uplift 0%), maks 24 bulan", dasar: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
        { label: "SKPKB setelah 17C/17D", nilai: "kenaikan 100%", dasar: "Pasal 17C ayat (5), 17D ayat (5) UU KUP", berlakuSejak: "2021-10-29" }
      ],
      dasarHukum: [
        { pasal: "Pasal 11 UU KUP", catatan: "pengembalian kelebihan dan imbalan bunga" },
        { pasal: "Pasal 17B, 17C, 17D UU KUP", catatan: "restitusi dengan pemeriksaan dan pendahuluan" },
        { pasal: "Pasal 27B UU KUP", catatan: "imbalan bunga atas sengketa yang dikabulkan" },
        { pasal: "PMK 28 Tahun 2026", catatan: "tata cara pengembalian pendahuluan, berlaku 1 Mei 2026; mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021" }
      ],
      jebakan: [
        { teks: "Mengira imbalan bunga memakai uplift 5% — imbalan bunga memakai tarif acuan tanpa uplift", tagSebab: "lupa-pasal" },
        { teks: "Memakai ambang PKP Rp5 miliar (PMK 209/2021) — sejak 1 Mei 2026 (PMK 28/2026) batasnya lebih bayar paling banyak Rp1 miliar dan jumlah penyerahan paling banyak Rp4,2 miliar untuk suatu Masa Pajak", tagSebab: "angka-usang" },
        { teks: "Mengira PKP yang memenuhi batas Pasal 17D otomatis PKP berisiko rendah — sejak PMK 28/2026 tidak lagi diperlakukan demikian", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira restitusi yang lewat 12 bulan gugur — justru dianggap dikabulkan", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "PT Kencana mengajukan restitusi PPh Badan 2025 yang diterima lengkap 14 Mei 2026. Paling lambat kapan DJP menerbitkan SKP hasil pemeriksaan?",
        jawaban: "14 Mei 2027",
        langkah: [["Permohonan lengkap", "14 Mei 2026"], ["Jangka waktu Ps. 17B", "12 bulan"], ["Batas", "14 Mei 2027"]]
      },
      verifikasi: "◐",
      peringatan: "Batas PKP Pasal 17D (lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak), tanggal berlaku 1 Mei 2026, dan pencabutan PMK 39/2018 s.t.d.d. PMK 209/2021 terverifikasi dari ringkasan resmi PMK 28 Tahun 2026 (pajak.go.id) ✅; nomor pasal dan ketentuan peralihan PMK 28/2026 belum dibaca dari teks ◐. Media melaporkan batas peredaran usaha badan Rp50 miliar ◐ (belum dicek ke teks). Sanksi kenaikan 100% bersumber dari riset 02b bertanda [P]."
    },
    {
      id: "A2.10", slug: "ppsp-penagihan", judul: "Penagihan Pajak dengan Surat Paksa",
      estimasiMenit: 16, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Urutan (PMK 61/2023, berlaku 12 Juni 2023): Surat Teguran setelah lewat 7 hari sejak jatuh tempo → Surat Paksa setelah lewat 21 hari sejak Surat Teguran disampaikan → SPMP/penyitaan setelah lewat 2 × 24 jam sejak Surat Paksa diberitahukan → pengumuman lelang setelah 14 hari sejak penyitaan → lelang setelah 14 hari sejak pengumuman.",
        "Jatuh tempo utang pajak 1 bulan sejak STP/SKP/keputusan diterbitkan (2 bulan untuk usaha kecil/daerah tertentu).",
        "Penagihan seketika dan sekaligus dapat dilakukan tanpa menunggu jatuh tempo bila Penanggung Pajak akan meninggalkan Indonesia untuk selamanya, memindahtangankan barang, ada tanda pembubaran/penggabungan/pemekaran, badan akan dibubarkan negara, atau terjadi penyitaan pihak ketiga/kepailitan.",
        "Pencegahan ke luar negeri: utang pajak paling sedikit Rp100 juta dan diragukan itikad baiknya; paling lama 6 bulan, dapat diperpanjang paling lama 6 bulan.",
        "Penyanderaan (gijzeling): utang pajak paling sedikit Rp100 juta dan diragukan itikad baiknya (kumulatif), izin tertulis Menteri Keuangan/Gubernur, paling cepat 14 hari setelah Surat Paksa diberitahukan, paling lama 6 bulan dan dapat diperpanjang paling lama 6 bulan; tidak menghapus utang pajak.",
        "Daluwarsa penagihan 5 tahun sejak penerbitan STP/SKP/keputusan; tertangguh bila Surat Paksa diberitahukan, ada pengakuan utang (angsuran/penundaan), SKPKB Pasal 13 ayat (5)/SKPKBT Pasal 15 ayat (4), atau penyidikan.",
        "Barang tertentu (uang tunai, deposito, saham, obligasi, piutang) dijual atau dipindahbukukan tanpa lelang."
      ],
      poinKunci: [
        { label: "Surat Teguran", nilai: "lewat 7 hari sejak jatuh tempo", dasar: "Pasal 8 UU PPSP; PMK 61/2023", berlakuSejak: "2023-06-12" },
        { label: "Surat Paksa", nilai: "lewat 21 hari sejak Surat Teguran", dasar: "Pasal 8 UU PPSP; PMK 61/2023", berlakuSejak: "2023-06-12" },
        { label: "SPMP (sita)", nilai: "lewat 2 × 24 jam sejak Surat Paksa", dasar: "Pasal 12 UU PPSP", berlakuSejak: "2000-08-02" },
        { label: "Pengumuman lelang · lelang", nilai: "+14 hari · +14 hari", dasar: "Pasal 26 UU PPSP", berlakuSejak: "2000-08-02" },
        { label: "Pencegahan · penyanderaan", nilai: "utang ≥ Rp100 jt + itikad diragukan; 6 bln + 6 bln", dasar: "Pasal 29–30, 33 UU PPSP", berlakuSejak: "2000-08-02" },
        { label: "Daluwarsa penagihan", nilai: "5 tahun (dapat tertangguh)", dasar: "Pasal 22 UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "UU 19/1997 s.t.d.d. UU 19/2000 Pasal 6–34", catatan: "seketika-sekaligus, Surat Paksa, sita, lelang, pencegahan, penyanderaan" },
        { pasal: "PMK 61/2023", catatan: "tata cara penagihan" },
        { pasal: "Pasal 9 ayat (3), (3a) dan Pasal 22 UU KUP", catatan: "jatuh tempo dan daluwarsa penagihan" }
      ],
      jebakan: [
        { teks: "Surat Paksa dihitung 21 hari sejak jatuh tempo — yang benar sejak Surat Teguran disampaikan", tagSebab: "salah-baca" },
        { teks: "Penyanderaan cukup utang ≥ Rp100 juta — syaratnya kumulatif dengan itikad baik diragukan", tagSebab: "salah-baca" },
        { teks: "Daluwarsa penagihan tetap 5 tahun walau Surat Paksa sudah diberitahukan — daluwarsa tertangguh", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "STP terbit 3 Agustus 2026 dan tidak dilunasi. Kapan paling cepat Surat Teguran dapat diterbitkan?",
        jawaban: "11 September 2026",
        langkah: [["Jatuh tempo (1 bulan)", "3 September 2026"], ["Lewat 7 hari", "10 September 2026"], ["Paling cepat terbit", "11 September 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Tenggat pengumuman lelang/lelang (14 + 14 hari), syarat pencegahan, dan daftar seketika-sekaligus bersumber dari teks UU PPSP yang tidak terbaca langsung pada riset; tenggat teguran, Surat Paksa, SPMP, dan penyanderaan terverifikasi."
    },
    {
      id: "A2.11", slug: "pengadilan-pajak", judul: "Pengadilan Pajak: banding, gugatan, peninjauan kembali, dan kelembagaan",
      estimasiMenit: 14, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Banding diajukan ke Pengadilan Pajak paling lama 3 bulan sejak SK Keberatan diterima, satu surat banding untuk satu keputusan; putusan paling lama 12 bulan sejak surat banding diterima, dapat diperpanjang 3 bulan (Pasal 35 dan 81 UU 14/2002).",
        "Pajak yang belum dibayar saat banding tertangguh sampai 1 bulan sejak Putusan Banding (Pasal 27 ayat (5a) UU KUP); bila banding ditolak/dikabulkan sebagian, denda 60% × (pajak menurut Putusan Banding − pajak dibayar sebelum keberatan) dan denda 30% Pasal 25 ayat (9) tidak dikenakan.",
        "Gugatan (Pasal 23 ayat (2) UU KUP) atas pelaksanaan Surat Paksa, SPMP, pengumuman lelang, pencegahan, keputusan lain, atau penerbitan SKP/SK Keberatan yang tidak sesuai prosedur: 14 hari sejak pelaksanaan penagihan, 30 hari sejak keputusan lain diterima; putusan 6 bulan + 3 bulan.",
        "Putusan Pengadilan Pajak bersifat akhir dan berkekuatan hukum tetap (Pasal 77); upaya hukum luar biasa Peninjauan Kembali ke Mahkamah Agung, paling lama 3 bulan, hanya sekali, dan tidak menangguhkan pelaksanaan putusan.",
        "MA memutus PK dalam 6 bulan (acara biasa) atau 1 bulan (acara cepat); putusan PK yang menambah pajak dikenai denda 60%.",
        "Putusan MK 26/PUU-XXI/2023: pembinaan organisasi, administrasi, dan keuangan Pengadilan Pajak dialihkan dari Kementerian Keuangan ke Mahkamah Agung paling lambat 31 Desember 2026; per Oktober 2026 R-Perpres masih harmonisasi."
      ],
      poinKunci: [
        { label: "Banding", nilai: "3 bulan sejak SK Keberatan diterima", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "Putusan banding", nilai: "12 bulan + 3 bulan", dasar: "Pasal 81 UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "Gugatan", nilai: "14 hari (penagihan) · 30 hari (keputusan lain)", dasar: "Pasal 40 UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "PK ke MA", nilai: "3 bulan; diputus 6 bulan / 1 bulan", dasar: "Pasal 92–93 UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "Denda banding/PK", nilai: "60% (banding dulu 100%; denda PK baru diatur UU HPP)", dasar: "Pasal 27 ayat (5d), (5f) UU KUP", berlakuSejak: "2021-10-29" },
        { label: "Penyatuan atap ke MA", nilai: "paling lambat 31 Desember 2026", dasar: "Putusan MK 26/PUU-XXI/2023", berlakuSejak: "2023-05-25" }
      ],
      dasarHukum: [
        { pasal: "Pasal 27 dan 27B UU KUP", catatan: "banding, penangguhan, denda 60%, imbalan bunga" },
        { pasal: "Pasal 23 ayat (2) UU KUP", catatan: "objek gugatan" },
        { pasal: "UU 14/2002 Pasal 35–40, 77, 81, 89–93", catatan: "banding, gugatan, putusan, PK" },
        { pasal: "Putusan MK 26/PUU-XXI/2023", catatan: "pembinaan oleh MA" }
      ],
      jebakan: [
        { teks: "Menghitung denda banding 100% — sejak UU HPP 60%", tagSebab: "angka-usang" },
        { teks: "Menjumlahkan denda 30% dan 60% sekaligus — bila banding, 30% tidak dikenakan", tagSebab: "salah-hitung" },
        { teks: "Mengajukan banding atas Surat Paksa — upaya hukumnya gugatan 14 hari", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "SK Keberatan menetapkan PPh kurang bayar Rp300.000.000; sebelum keberatan WP membayar Rp120.000.000. Banding ditolak. Berapa denda Pasal 27 ayat (5d)?",
        jawaban: "Rp108.000.000",
        langkah: [["Pajak menurut Putusan Banding", "Rp300.000.000"], ["Dibayar sebelum keberatan", "Rp120.000.000"], ["Dasar denda", "Rp180.000.000"], ["Denda 60%", "Rp108.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A2.12", slug: "akses-informasi-keuangan", judul: "Akses informasi keuangan untuk kepentingan perpajakan: UU 9/2017, Pasal 35/35A UU KUP, laporan LJK (PMK 108/2025)",
      estimasiMenit: 14, jenisDominan: ["prosedur", "klasifikasi"],
      ringkasan: [
        "UU 9/2017 menetapkan Perppu 1/2017 (berlaku sejak 8 Mei 2017) menjadi undang-undang. DJP berwenang mendapatkan akses informasi keuangan untuk kepentingan perpajakan dari lembaga jasa keuangan (LJK) sektor perbankan, pasar modal, perasuransian, LJK lainnya, dan/atau entitas lain yang dikategorikan sebagai lembaga keuangan menurut standar pertukaran informasi keuangan internasional. Aksesnya dua jalur: laporan otomatis tahunan dari LJK, dan permintaan informasi dan/atau bukti atau keterangan (IBK) oleh DJP yang wajib dipenuhi LJK, termasuk atas rekening yang tidak masuk laporan tahunan.",
        "LJK menyampaikan dua laporan: laporan sesuai standar internasional (CRS/AEoI) untuk setiap rekening yang wajib dilaporkan, dan laporan untuk kepentingan perpajakan domestik atas rekening yang dikelola selama satu tahun kalender. Isinya paling sedikit identitas pemegang rekening, nomor rekening, identitas LJK, saldo atau nilai rekening, dan penghasilan yang terkait dengan rekening. LJK di bawah pengawasan OJK melapor melalui OJK; LJK lainnya dan entitas lain langsung ke DJP. LJK wajib menjalankan prosedur identifikasi rekening (uji tuntas) dan tidak boleh melayani pembukaan rekening baru atau transaksi baru terkait rekening bagi nasabah yang menolak mematuhi ketentuan identifikasi.",
        "Pasal 35 ayat (2) dan Pasal 35A UU KUP, Pasal 40 dan 41 UU Perbankan, Pasal 47 UU Pasar Modal, Pasal 17, 27, dan 29 UU Perdagangan Berjangka Komoditi, serta Pasal 41 dan 42 UU Perbankan Syariah tidak berlaku sepanjang berkaitan dengan akses informasi keuangan untuk kepentingan perpajakan: rahasia bank tidak dapat dijadikan alasan menolak, dan tidak diperlukan lagi permintaan tertulis Menteri Keuangan per bank per nasabah. Di luar itu Pasal 35 UU KUP tetap berlaku bagi pihak ketiga lain (akuntan publik, notaris, konsultan pajak, kantor administrasi) dalam pemeriksaan, penagihan, atau penyidikan atas permintaan tertulis Direktur Jenderal Pajak, dan Pasal 35A tetap mewajibkan instansi pemerintah, lembaga, asosiasi, dan pihak lain (ILAP) memberikan data dan informasi perpajakan (PP 31/2012). Informasi yang diterima DJP adalah data perpajakan yang dirahasiakan menurut Pasal 34 UU KUP dan menjadi basis data untuk penelitian, pemeriksaan (lihat A2.5), penagihan, penyidikan, dan pelaksanaan perjanjian internasional.",
        "Ancaman pidana UU 9/2017: pimpinan dan/atau pegawai LJK yang tidak menyampaikan laporan, tidak melaksanakan prosedur identifikasi, atau tidak memberikan IBK dipidana kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000; LJK yang tidak menyampaikan laporan dipidana denda paling banyak Rp1.000.000.000; setiap orang yang membuat pernyataan palsu atau menyembunyikan atau mengurangkan informasi yang sebenarnya dipidana kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000. Jangan tertukar dengan UU KUP: ILAP yang tidak memenuhi Pasal 35A diancam Pasal 41C, pihak ketiga Pasal 35 yang tidak memberi keterangan atau bukti diancam Pasal 41A, dan penghalang penyidikan diancam Pasal 41B.",
        "PMK 108/2025 (diundangkan 31 Desember 2025, berlaku 1 Januari 2026) mencabut PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024. Lembaga Simpanan kini mencakup pengelola uang elektronik tertentu/penyelenggara jasa pembayaran (e-wallet) dan mata uang digital bank sentral; penyedia jasa aset kripto (PJAK) menjadi pelapor CARF dengan uji tuntas dan laporan tahunan. Laporan domestik memuat rekening orang pribadi di Lembaga Simpanan bila saldo/nilai agregat per lembaga per 31 Desember paling sedikit Rp1.000.000.000, sedangkan rekening entitas serta rekening pada Lembaga Kustodian dan Entitas Investasi dilaporkan tanpa batas saldo. Tenggat: LJK di bawah OJK ke OJK paling lambat 1 Agustus, OJK ke DJP paling lambat 31 Agustus; LJK lainnya/entitas lain langsung ke DJP paling lambat 30 April; laporan nihil tetap wajib. Peralihan: informasi yang tercatat sampai 31 Desember 2025 masih mengikuti ketentuan lama; CARF pertama untuk data 2026 disampaikan paling lambat 30 April 2027 dan dipertukarkan mulai 2027 (pertukaran internasional CRS, CARF, CbCR, dan GIR: lihat C10.8).",
        "Contoh kasus 1: Dalam pemeriksaan PT Gemilang, DJP meminta rekening koran direktur utamanya kepada Bank Prima. Bank menolak dengan alasan rahasia bank dan meminta surat Menteri Keuangan. Penolakan itu tidak berdasar: untuk akses informasi keuangan, rahasia bank dan Pasal 35 ayat (2) UU KUP tidak berlaku, sehingga bank wajib memberikan IBK; pimpinan atau pegawai yang tetap menolak terancam kurungan paling lama 1 tahun atau denda paling banyak Rp1 miliar.",
        "Contoh kasus 2: Per 31 Desember 2026, CV Sinar Logam memiliki giro Rp50.000.000 di Bank Sejahtera (diawasi OJK), dan Nyonya Lili memiliki rekening efek senilai Rp300.000.000 pada Lembaga Kustodian. Keduanya masuk laporan domestik data 2026 karena rekening entitas dan rekening kustodian tidak mengenal batas saldo; ambang Rp1 miliar hanya untuk rekening orang pribadi di Lembaga Simpanan."
      ],
      poinKunci: [
        { label: "Dua jalur akses", nilai: "laporan otomatis tahunan LJK + permintaan IBK oleh DJP", dasar: "Pasal 2 UU 9/2017; ketentuan IBK (nomor pasal ◐)", berlakuSejak: "2017-05-08" },
        { label: "Isi minimal laporan", nilai: "identitas pemegang, nomor rekening, identitas LJK, saldo/nilai, penghasilan terkait rekening", dasar: "Pasal 2 ayat (3) UU 9/2017", berlakuSejak: "2017-05-08" },
        { label: "Saluran laporan", nilai: "LJK diawasi OJK → melalui OJK; LJK lainnya/entitas lain → langsung ke DJP", dasar: "Pasal 2 UU 9/2017; PMK 108/2025", berlakuSejak: "2017-05-08" },
        { label: "Nasabah menolak identifikasi", nilai: "tidak boleh dilayani pembukaan rekening baru atau transaksi baru", dasar: "UU 9/2017, larangan melayani nasabah (nomor pasal ◐)", berlakuSejak: "2017-05-08" },
        { label: "Rahasia bank", nilai: "tidak berlaku untuk akses informasi keuangan; tanpa permintaan tertulis Menkeu per nasabah", dasar: "Pasal 8 UU 9/2017", berlakuSejak: "2017-05-08" },
        { label: "Pidana pimpinan/pegawai LJK", nilai: "kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar", dasar: "UU 9/2017 Pasal 7", berlakuSejak: "2017-05-08" },
        { label: "Pidana LJK · pernyataan palsu", nilai: "denda ≤ Rp1 miliar · kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar", dasar: "UU 9/2017 Pasal 7", berlakuSejak: "2017-05-08" },
        { label: "Pasal 35 · 35A UU KUP", nilai: "pihak ketiga atas permintaan tertulis Dirjen (pemeriksaan, penagihan, penyidikan) · ILAP wajib memberi data (PP 31/2012)", dasar: "Pasal 35, 35A, 41A, 41C UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Ambang laporan domestik", nilai: "OP di Lembaga Simpanan: agregat per lembaga per 31 Des ≥ Rp1 miliar; entitas, Lembaga Kustodian, Entitas Investasi tanpa batas", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "Tenggat laporan", nilai: "diawasi OJK → OJK 1 Agustus; OJK → DJP 31 Agustus; LJK lainnya/entitas lain → DJP 30 April", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "Laporan nihil", nilai: "tetap wajib bila tidak ada rekening atau transaksi yang wajib dilaporkan", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" },
        { label: "CARF (PJAK) dan peralihan", nilai: "data 2026 dilaporkan ≤ 30 April 2027, dipertukarkan mulai 2027; informasi s.d. 31 Des 2025 rezim lama", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01" }
      ],
      dasarHukum: [
        { pasal: "UU 9/2017 (penetapan Perppu 1/2017) Pasal 2", catatan: "kewenangan DJP, dua jenis laporan LJK, isi minimal laporan, saluran OJK atau langsung, prosedur identifikasi rekening" },
        { pasal: "UU 9/2017 (IBK; larangan melayani nasabah) ◐", catatan: "permintaan IBK; larangan melayani nasabah yang menolak identifikasi; nomor pasal belum dicocokkan dengan teks resmi" },
        { pasal: "UU 9/2017 Pasal 7 (ketentuan pidana)", catatan: "pidana pimpinan/pegawai LJK dan LJK; pidana pernyataan palsu; nomor pasal belum dicocokkan dengan teks resmi" },
        { pasal: "UU 9/2017 (data perpajakan dirahasiakan ◐; Pasal 8 pengesampingan kerahasiaan)", catatan: "informasi sebagai data perpajakan yang dirahasiakan (nomor pasal belum dicocokkan dengan teks resmi); Pasal 8: ketentuan kerahasiaan UU KUP, Perbankan, Pasar Modal, PBK, dan Perbankan Syariah tidak berlaku untuk akses ini" },
        { pasal: "Pasal 34, 35, dan 35A UU KUP; PP 31/2012", catatan: "kerahasiaan data WP; keterangan pihak ketiga atas permintaan tertulis Dirjen; kewajiban ILAP" },
        { pasal: "Pasal 41A, 41B, dan 41C UU KUP", catatan: "pidana pihak ketiga Pasal 35, penghalang penyidikan, dan ILAP Pasal 35A" },
        { pasal: "PMK 108/2025", catatan: "petunjuk teknis akses informasi keuangan (CRS dan CARF); mencabut PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024 sejak 1 Januari 2026" }
      ],
      jebakan: [
        { teks: "Bank menolak permintaan DJP dengan alasan rahasia bank — untuk akses informasi keuangan perpajakan, ketentuan rahasia bank tidak berlaku", tagSebab: "lupa-pasal" },
        { teks: "Mengira DJP masih perlu permintaan tertulis Menteri Keuangan per bank per nasabah (Pasal 35 ayat (2) UU KUP) — tidak berlaku untuk akses informasi keuangan sejak UU 9/2017", tagSebab: "angka-usang" },
        { teks: "Mencampur laporan otomatis tahunan dengan permintaan IBK — IBK diminta di luar laporan dan tetap wajib dipenuhi walau laporan tahunan sudah disampaikan", tagSebab: "salah-klasifikasi" },
        { teks: "Ambang Rp1 miliar diterapkan pada rekening entitas, rekening kustodian, atau laporan CRS — ambang itu hanya untuk rekening orang pribadi di Lembaga Simpanan pada laporan domestik", tagSebab: "salah-klasifikasi" },
        { teks: "Tenggat 30 April dipakai untuk bank di bawah OJK — bank melapor ke OJK paling lambat 1 Agustus; 30 April untuk LJK lainnya/entitas lain yang melapor langsung ke DJP", tagSebab: "salah-baca" },
        { teks: "Data 2025 diproses dengan PMK 108/2025 atau dilaporkan sebagai CARF — informasi yang tercatat sampai 31 Desember 2025 masih rezim lama, dan CARF dimulai dari data 2026", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Per 31 Desember 2026 Tuan Hendra memiliki tabungan Rp400.000.000 dan deposito Rp650.000.000 di Bank Mandala, serta tabungan Rp900.000.000 di Bank Citra; kedua bank diawasi OJK. Rekening mana yang wajib dimuat dalam laporan domestik data 2026, dan kapan bank menyampaikannya?",
        jawaban: "Hanya rekening di Bank Mandala (agregat Rp1.050.000.000); disampaikan ke OJK paling lambat 1 Agustus 2027",
        langkah: [["Agregat di Bank Mandala", "Rp400.000.000 + Rp650.000.000 = Rp1.050.000.000 ≥ Rp1 miliar → dilaporkan"], ["Agregat di Bank Citra", "Rp900.000.000 < Rp1 miliar → tidak dilaporkan (agregasi per lembaga, bukan lintas bank)"], ["Tenggat LJK diawasi OJK", "ke OJK paling lambat 1 Agustus 2027; OJK ke DJP paling lambat 31 Agustus 2027"]]
      },
      verifikasi: "◐",
      peringatan: "Teks PMK 108/2025 tidak terbaca langsung: cakupan Lembaga Simpanan (termasuk e-wallet dan mata uang digital bank sentral), ambang Rp1 miliar, tenggat 1 Agustus/31 Agustus/30 April, laporan nihil, CARF, dan ketentuan peralihan diambil dari ringkasan JDIH Kemenkeu, FAQ DJP, IKPI, dan DDTC yang saling konsisten. Nomor pasal UU 9/2017: Pasal 2 (akses dan laporan), Pasal 7 (ketentuan pidana), dan Pasal 8 (pengesampingan Pasal 35 ayat (2)/35A UU KUP dan kerahasiaan sektor keuangan) dicocokkan dengan cuplikan teks resmi (JDIH Kemenkeu, DDTC); Pasal 5 memberi wewenang Menteri Keuangan bertukar informasi dengan otoritas negara lain, Pasal 9 menjadi dasar PMK petunjuk teknis. Nomor pasal untuk IBK, larangan melayani nasabah, dan kerahasiaan data belum dicocokkan (◐)"
    }
  ],
  soal: [
    {
      id: "A2-001", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 1 angka 22 huruf a UU KUP: Kredit Pajak untuk Pajak Penghasilan adalah pajak yang dibayar sendiri oleh Wajib Pajak ditambah dengan pokok pajak yang terutang dalam Surat Tagihan Pajak karena Pajak Penghasilan dalam tahun berjalan tidak atau kurang dibayar, ditambah dengan pajak yang dipotong atau dipungut, ditambah dengan pajak atas penghasilan yang dibayar atau terutang di luar negeri, dikurangi dengan pengembalian pendahuluan kelebihan pajak, yang dikurangkan dari pajak yang terutang.",
      stem: "Tuan Bima Prasetya (pengusaha, NIK sebagai NPWP) untuk Tahun Pajak 2025 memiliki data: PPh Pasal 21 dipotong pemberi kerja Rp12.000.000 (BPA1); angsuran PPh Pasal 25 disetor sendiri 9 bulan × Rp500.000; STP atas 3 bulan angsuran PPh Pasal 25 yang tidak dibayar dengan pokok Rp1.500.000 dan bunga Rp121.200, keduanya telah dilunasi; PPh Pasal 22 impor Rp2.000.000; PPh final Pasal 4 ayat (2) atas sewa ruko yang ia terima Rp3.000.000; tidak ada pengembalian pendahuluan. Berdasarkan kutipan tersebut, kredit pajak yang dapat dikurangkan dari PPh terutang dalam SPT Tahunan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000.000", B: "Rp20.121.200", C: "Rp23.000.000", D: "Rp18.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "final-nonfinal", D: "salah-baca" },
      pembahasan: {
        inti: "Kredit pajak PPh mencakup PPh 21 dipotong, PPh 25 dibayar sendiri, pokok STP atas PPh tahun berjalan, dan PPh 22 dipungut; bunga STP dan PPh final tidak termasuk.",
        jejakHitung: [["PPh 21 (BPA1)", "Rp12.000.000"], ["PPh 25 dibayar sendiri 9 × Rp500.000", "Rp4.500.000"], ["Pokok STP PPh 25", "Rp1.500.000"], ["PPh 22 impor", "Rp2.000.000"], ["Kredit pajak", "Rp20.000.000"]],
        mengapaSalah: { B: "Bunga STP Rp121.200 ikut dihitung, padahal sanksi bukan kredit pajak.", C: "PPh final sewa Rp3.000.000 ikut dihitung, padahal pelunasan final tidak dikreditkan.", D: "Pokok STP Rp1.500.000 dilupakan, padahal kutipan memasukkannya." },
        jebakan: "Pokok STP atas PPh tahun berjalan adalah kredit pajak, tetapi bunganya bukan."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 22 huruf a UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-002", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Pemeriksaan lengkap atas SPT Tahunan PPh Badan 2024 PT Arunika Daya (SPT semula lebih bayar Rp35.000.000 dan dimintakan restitusi) menghasilkan koreksi positif sehingga PPh terutang menurut pemeriksa Rp450.000.000. Kredit pajak yang diakui pemeriksa (PPh 22, PPh 23, dan angsuran PPh 25) juga Rp450.000.000; tidak ada sanksi dan tidak pernah ada pengembalian pendahuluan. Produk hukum yang tepat diterbitkan DJP atas hasil pemeriksaan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKPLB sebesar Rp35.000.000 sesuai SPT semula", B: "SKPKB sebesar Rp35.000.000", C: "SKPN", D: "STP atas restitusi yang tidak seharusnya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak terutang sama dengan kredit pajak sehingga tidak ada kurang atau lebih bayar; DJP menerbitkan SKPN (Pasal 17A).",
        jejakHitung: [["PPh terutang menurut pemeriksa", "Rp450.000.000"], ["Kredit pajak diakui", "Rp450.000.000"], ["Selisih", "Rp0 → SKPN"]],
        mengapaSalah: { A: "Lebih bayar SPT semula hapus karena koreksi pemeriksa.", B: "Nilai koreksi Rp35.000.000 bukan kurang bayar; selisih akhirnya nol.", D: "STP atas pengembalian pendahuluan yang tidak berhak mensyaratkan adanya pengembalian; di sini tidak pernah ada." },
        jebakan: "Koreksi yang menghapus lebih bayar tidak otomatis melahirkan SKPKB; lihat selisih akhir."
      },
      dasarHukum: [{ pasal: "Pasal 1 dan Pasal 17A UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 17B UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-003", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Surat Paksa yang diberitahukan Jurusita Pajak kepada CV Tirta Sejahtera memuat: (1) pokok PPN menurut SKPKB Rp80.000.000; (2) bunga Pasal 13 ayat (2) dalam SKPKB Rp14.720.000; (3) bunga Pasal 19 ayat (1) yang ditagih dengan STP karena SKPKB tidak dilunasi saat jatuh tempo; dan (4) biaya pelaksanaan Surat Paksa. Menurut definisi dalam UU PPSP, unsur berikut termasuk Utang Pajak, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Pokok PPN menurut SKPKB", B: "Bunga Pasal 13 ayat (2) dalam SKPKB", C: "Bunga Pasal 19 ayat (1) yang ditagih dengan STP", D: "Biaya pelaksanaan Surat Paksa" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Utang Pajak = pajak yang masih harus dibayar termasuk sanksi bunga, denda, atau kenaikan dalam ketetapan atau surat sejenis (STP). Biaya penagihan adalah komponen tersendiri yang ikut diperintahkan dibayar dalam Surat Paksa.",
        jejakHitung: [],
        mengapaSalah: { A: "Pokok pajak adalah inti Utang Pajak.", B: "Bunga yang tercantum dalam SKPKB termasuk Utang Pajak.", C: "STP termasuk 'surat sejenisnya', sehingga bunga Pasal 19 di dalamnya termasuk Utang Pajak." },
        jebakan: "Surat Paksa memerintahkan membayar Utang Pajak dan biaya penagihan — dua hal yang berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU PPSP (Utang Pajak, Biaya Penagihan, Surat Paksa)", berlakuSejak: "2000-08-02" }, { pasal: "Pasal 8 UU PPSP", berlakuSejak: "2000-08-02" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-004", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Bumi Lestari memiliki utang pajak yang sudah diterbitkan Surat Paksa. Susunan pihak terkait: Ibu Dewi selaku direktur utama, Bapak Hasan selaku komisaris, PT Holding Nusantara selaku pemegang saham pengendali (60%), dan Sdr. Yoga, staf pajak bergaji tetap yang tugasnya hanya menginput faktur dan tidak memiliki wewenang ikut menentukan kebijakan maupun mengambil keputusan. Pihak berikut dapat diperlakukan sebagai Penanggung Pajak PT Bumi Lestari, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Ibu Dewi (direktur utama)", B: "Bapak Hasan (komisaris)", C: "PT Holding Nusantara (pemegang saham pengendali)", D: "Sdr. Yoga (staf pajak tanpa wewenang menentukan kebijakan)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Penanggung Pajak badan adalah pengurus: direksi, komisaris, pemegang saham mayoritas/pengendali, dan orang yang nyata-nyata berwenang ikut menentukan kebijakan atau mengambil keputusan. Staf pelaksana tanpa wewenang bukan Penanggung Pajak.",
        jejakHitung: [],
        mengapaSalah: { A: "Direksi adalah pengurus badan.", B: "Komisaris termasuk pengurus menurut penjelasan UU PPSP.", C: "Pemegang saham pengendali termasuk Penanggung Pajak (tanggung jawabnya dapat dibatasi proporsional)." },
        jebakan: "Ukurannya wewenang menentukan kebijakan, bukan sekadar menangani urusan pajak."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU PPSP (Penanggung Pajak) dan penjelasannya", berlakuSejak: "2000-08-02" }, { pasal: "Pasal 32 ayat (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A2-005", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Ibu Sari Wulandari (orang pribadi penduduk, NIK sebagai NPWP, PKP pedagang bahan bangunan di Bekasi) membuka toko kedua di Karawang pada Februari 2026. Toko itu dikelola sendiri tanpa badan usaha terpisah, tetapi ia ingin faktur pajak dan bukti potong atas transaksi toko Karawang teridentifikasi per lokasi di Coretax. Kewajiban registrasi yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mendaftarkan NPWP cabang 15 digit di KPP yang wilayahnya meliputi Karawang", B: "Mendaftarkan tempat kegiatan usaha Karawang sehingga memperoleh NITKU dengan identitas NIK yang sama", C: "Mengajukan NPWP 16 digit baru atas nama toko Karawang", D: "Tidak perlu registrasi apa pun karena NIK berlaku secara nasional" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Sejak 1 Juli 2024 NPWP cabang diganti NITKU (Nomor Identitas Tempat Kegiatan Usaha); OP penduduk tetap memakai NIK sebagai NPWP untuk semua lokasi.",
        jejakHitung: [],
        mengapaSalah: { A: "NPWP cabang hanya dipakai sampai 30 Juni 2024.", C: "NPWP 16 digit untuk badan, OP bukan penduduk, dan instansi pemerintah; toko bukan subjek pajak terpisah.", D: "Tempat kegiatan usaha tetap wajib didaftarkan agar memperoleh NITKU." },
        jebakan: "Satu WP satu identitas; lokasi usaha dibedakan dengan NITKU."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 112/PMK.03/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-006", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Lancar Abadi (berdiri 2023, tahun buku kalender, belum PKP, bukan WP PPh final UMKM) mencatat peredaran bruto 2025 Rp4.300.000.000. Peredaran bruto 2026: Januari–Juni Rp3.600.000.000, Juli Rp650.000.000, Agustus Rp720.000.000, September Rp800.000.000. Dengan memperhatikan batasan pengusaha kecil per tahun buku, batas akhir PT Lancar Abadi melaporkan usahanya untuk dikukuhkan sebagai PKP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "31 Agustus 2026", B: "30 September 2026", C: "31 Oktober 2026", D: "31 Desember 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas Rp4,8 miliar dihitung kumulatif per tahun buku; terlampaui pada Agustus 2026 sehingga lapor paling lambat akhir bulan berikutnya, 30 September 2026. Omzet 2025 (Rp4,3 miliar) tidak relevan karena di bawah batas.",
        jejakHitung: [["Kumulatif s.d. Juni", "Rp3.600.000.000"], ["s.d. Juli (+Rp650 jt)", "Rp4.250.000.000 ≤ Rp4,8 M"], ["s.d. Agustus (+Rp720 jt)", "Rp4.970.000.000 > Rp4,8 M"], ["Batas lapor: akhir bulan berikutnya", "30 September 2026"]],
        mengapaSalah: { A: "Akhir bulan yang sama; ketentuan memberi waktu sampai akhir bulan berikutnya.", C: "Menganggap batas terlampaui pada September karena salah menjumlah.", D: "Akhir tahun buku tertukar dengan saat berakhirnya tarif final PP 55 bagi WP yang omzetnya melewati Rp4,8 miliar; kewajiban lapor pengukuhan PKP tetap akhir bulan berikutnya." },
        jebakan: "Hitung kumulatif sejak awal tahun buku, bukan per bulan atau tahun lalu."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (2) UU KUP; Pasal 3A UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-007", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Sejak implementasi penuh 1 Juli 2024, identitas perpajakan di Coretax dibedakan antara NIK sebagai NPWP dan NPWP format 16 digit. NPWP format 16 digit (bukan NIK) diberikan kepada pihak-pihak berikut, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Wajib Pajak badan seperti PT, CV, dan yayasan", B: "Orang pribadi bukan penduduk (WNA yang tidak bertempat tinggal di Indonesia)", C: "Instansi pemerintah selaku pemotong/pemungut", D: "Orang pribadi penduduk yang memiliki NIK" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "OP penduduk memakai NIK sebagai NPWP; badan, OP bukan penduduk, dan instansi pemerintah memakai NPWP 16 digit.",
        jejakHitung: [],
        mengapaSalah: { A: "Badan tidak punya NIK sehingga memakai NPWP 16 digit.", B: "OP bukan penduduk tidak punya NIK.", C: "Instansi pemerintah memakai NPWP 16 digit." },
        jebakan: "Kata 'kecuali' membalik pertanyaan: cari yang memakai NIK."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 112/PMK.03/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-008", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "CV Makmur Jaya beroperasi sebagai distributor sejak 1 Maret 2019 dan sejak tanggal itu sudah memenuhi syarat subjektif dan objektif, tetapi tidak pernah mendaftarkan diri. Berdasarkan data pihak ketiga, DJP menerbitkan NPWP secara jabatan pada 10 Agustus 2026. Menurut Pasal 2 UU KUP, kewajiban perpajakan CV Makmur Jaya yang dapat ditagih dimulai sejak ...",
      kataKualifikasi: [],
      opsi: { A: "1 Maret 2019, saat syarat subjektif dan objektif terpenuhi", B: "10 Agustus 2021, yaitu paling lama 5 tahun sebelum NPWP jabatan diterbitkan", C: "1 Januari 2026, awal Tahun Pajak saat NPWP diterbitkan", D: "10 Agustus 2026, tanggal NPWP jabatan diterbitkan" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban WP yang diberi NPWP secara jabatan dimulai sejak syarat subjektif dan objektif terpenuhi, tetapi dibatasi paling lama 5 tahun sebelum NPWP diterbitkan.",
        jejakHitung: [["Syarat terpenuhi", "1 Maret 2019"], ["NPWP jabatan", "10 Agustus 2026"], ["Batas mundur 5 tahun", "10 Agustus 2021"], ["Mulai kewajiban = yang lebih akhir", "10 Agustus 2021"]],
        mengapaSalah: { A: "Mengabaikan batas 5 tahun.", C: "Kewajiban tidak menunggu tahun NPWP terbit.", D: "NPWP jabatan justru menagih kewajiban ke belakang." },
        jebakan: "Ambil tanggal yang lebih akhir antara saat syarat terpenuhi dan 5 tahun sebelum NPWP jabatan."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (4) dan (4a) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Batas 5 tahun Pasal 2 ayat (4a) UU KUP berasal dari teks UU yang tidak terbaca langsung dalam riset proyek; cek ulang ke teks konsolidasi."
    },
    {
      id: "A2-009", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Cahaya Pratama telah selesai likuidasi dan mengajukan permohonan penghapusan NPWP yang diterima lengkap pada 2 Februari 2026. Pada hari yang sama, ahli waris almarhumah Ny. Rina (orang pribadi, tanpa warisan belum terbagi) juga mengajukan penghapusan NPWP almarhumah. Setelah melakukan pemeriksaan, DJP wajib menerbitkan keputusan atas permohonan PT Cahaya Pratama paling lambat ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "2 Agustus 2026", B: "2 Februari 2027", C: "2 Mei 2026", D: "2 Februari 2028" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Keputusan penghapusan NPWP paling lama 6 bulan untuk WP orang pribadi dan 12 bulan untuk WP badan sejak permohonan diterima lengkap.",
        jejakHitung: [["Permohonan lengkap", "2 Februari 2026"], ["Jangka waktu badan", "12 bulan"], ["Batas keputusan", "2 Februari 2027"]],
        mengapaSalah: { A: "6 bulan berlaku untuk orang pribadi (permohonan Ny. Rina).", C: "3 bulan adalah tenggat keberatan, bukan keputusan penghapusan NPWP.", D: "24 bulan tidak dikenal untuk keputusan ini." },
        jebakan: "Dua permohonan di stem sengaja disandingkan: bedakan OP 6 bulan dan badan 12 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (6) dan (9) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90, verifikasi: "◐",
      peringatan: "Jangka 6/12 bulan berasal dari teks Pasal 2 ayat (9) UU KUP yang tidak terbaca langsung dalam riset proyek; cek ulang."
    },
    {
      id: "A2-010", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Mitra Usaha Sentosa (PKP) untuk Masa Pajak Juni 2026 memiliki kewajiban: PPh Pasal 21 pegawai Rp24.500.000, PPh Pasal 23 atas jasa konsultan Rp3.200.000, dan PPN kurang bayar Rp41.000.000. Tidak ada hari libur yang bertepatan dengan batas waktu. Menurut UU KUP dan PMK 81/2024, kombinasi batas waktu yang benar adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "PPh 21 dan 23 disetor 10 Juli; SPT Masa PPh dilaporkan 20 Juli; PPN disetor dan dilaporkan 31 Juli 2026",
        B: "PPh 21 dan 23 disetor 15 Juli; SPT Masa PPh dilaporkan 20 Juli; PPN wajib disetor 15 Juli dan dilaporkan 31 Juli 2026",
        C: "PPh 21 dan 23 disetor 15 Juli; seluruh SPT Masa, termasuk SPT Masa PPN, dilaporkan paling lambat 20 Juli 2026",
        D: "PPh 21 dan 23 disetor 15 Juli; SPT Masa PPh 21/26 dan Unifikasi dilaporkan 20 Juli; PPN disetor sebelum SPT Masa PPN dilaporkan, paling lambat 31 Juli 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Setor pajak masa tanggal 15 bulan berikutnya, lapor SPT Masa PPh 20 hari setelah masa berakhir, dan PPN disetor serta dilaporkan paling lambat akhir bulan berikutnya dengan setoran sebelum SPT disampaikan.",
        jejakHitung: [["Setor PPh 21/23 Masa Juni", "15 Juli 2026 (Rabu)"], ["Lapor SPT Masa PPh 21/26 dan Unifikasi", "20 Juli 2026 (Senin)"], ["Setor dan lapor PPN", "31 Juli 2026 (Jumat), setor sebelum lapor"]],
        mengapaSalah: { A: "Tanggal 10 adalah ketentuan PMK 242/2014 yang dicabut sejak 2025.", B: "PPN tidak mengikuti tanggal 15; disetor paling lambat akhir bulan berikutnya sebelum SPT dilaporkan.", C: "SPT Masa PPN tidak mengikuti 20 hari; batasnya akhir bulan berikutnya." },
        jebakan: "Tiga ritme berbeda: setor 15, lapor PPh 20, PPN akhir bulan."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a dan Pasal 9 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-011", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Samudra Niaga memakai tahun buku 1 Juli–30 Juni sesuai anggaran dasar yang telah diberitahukan kepada DJP. Untuk tahun buku yang berakhir 30 Juni 2026, perusahaan menyampaikan pemberitahuan perpanjangan penyampaian SPT Tahunan PPh Badan secara lengkap (disertai penghitungan sementara pajak terutang dan bukti pelunasan kekurangannya) sebelum batas waktu normal. Dengan mengabaikan pergeseran hari libur, batas akhir penyampaian SPT Tahunan setelah perpanjangan adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "31 Oktober 2026", B: "30 Juni 2027", C: "31 Desember 2026", D: "30 September 2026" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tahun Pajak mengikuti tahun buku; SPT badan paling lama 4 bulan setelah akhir Tahun Pajak (31 Oktober 2026) dan dapat diperpanjang paling lama 2 bulan menjadi 31 Desember 2026.",
        jejakHitung: [["Akhir tahun buku", "30 Juni 2026"], ["+ 4 bulan (badan)", "31 Oktober 2026"], ["+ perpanjangan paling lama 2 bulan", "31 Desember 2026"]],
        mengapaSalah: { A: "Batas normal tanpa perpanjangan.", B: "Menghitung seolah tahun buku kalender: 30 April + 2 bulan.", D: "Memakai 3 bulan milik SPT OP." },
        jebakan: "Mulai hitung dari akhir tahun buku, bukan 31 Desember."
      },
      dasarHukum: [{ pasal: "Pasal 1 (Tahun Pajak) dan Pasal 3 ayat (3) huruf c UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (4)–(5) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-012", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Bintang Timur (tahun buku kalender) pada November 2026 menemukan biaya promosi Tahun Pajak 2021 dan Tahun Pajak 2023 yang belum dibebankan. Jika SPT Tahunan dibetulkan, keduanya menjadi lebih bayar. Atas kedua Tahun Pajak itu belum pernah dilakukan pemeriksaan dan belum terbit ketetapan. Dengan menggabungkan ketentuan pembetulan SPT dan daluwarsa penetapan, pembetulan yang masih dapat disampaikan pada November 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tahun Pajak 2021 dan 2023", B: "Hanya Tahun Pajak 2023, paling lambat 31 Desember 2026", C: "Hanya Tahun Pajak 2021, karena daluwarsa penetapannya baru berakhir 31 Desember 2026", D: "Tidak keduanya, karena pembetulan lebih bayar hanya dapat dilakukan dalam 2 tahun sejak SPT disampaikan" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Pembetulan yang menyatakan rugi/lebih bayar hanya dapat disampaikan paling lama 2 tahun sebelum daluwarsa penetapan (5 tahun setelah akhir Tahun Pajak).",
        jejakHitung: [["TP 2021: daluwarsa penetapan", "31 Desember 2026"], ["Batas pembetulan LB TP 2021 (−2 tahun)", "31 Desember 2024 → lewat"], ["TP 2023: daluwarsa penetapan", "31 Desember 2028"], ["Batas pembetulan LB TP 2023 (−2 tahun)", "31 Desember 2026 → masih bisa"]],
        mengapaSalah: { A: "Mengabaikan Pasal 8 ayat (1a) untuk TP 2021.", C: "Memakai batas daluwarsa penetapan, padahal pembetulan LB berhenti 2 tahun lebih awal.", D: "Patokan 2 tahun dihitung mundur dari daluwarsa, bukan sejak SPT disampaikan." },
        jebakan: "Pembetulan kurang bayar boleh sampai sebelum pemeriksaan; pembetulan LB punya batas tambahan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) dan (1a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 13 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A2-013", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "dr. Ratna Dewi (orang pribadi, SPT 1770) baru melunasi PPh Pasal 29 Tahun Pajak 2025 sebesar Rp14.600.000 pada 8 Juli 2026 dan menyampaikan SPT Tahunan pada 9 Juli 2026. Batas waktu SPT Tahunan OP Tahun Pajak 2025 adalah 31 Maret 2026 (Selasa). Anggap tarif bunga Pasal 9 ayat (2b) yang berlaku pada tanggal dimulainya penghitungan sanksi adalah 1,01% per bulan. Total sanksi administratif yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.589.840", B: "Rp542.380", C: "Rp589.840", D: "Rp689.840" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dua sanksi sekaligus: bunga Pasal 9 ayat (2b) atas PPh 29 yang dibayar setelah batas waktu SPT, dan denda Pasal 7 ayat (1) Rp100.000 atas SPT Tahunan OP yang terlambat.",
        jejakHitung: [["31 Maret → 8 Juli 2026", "3 bulan 8 hari = 4 bulan"], ["Bunga = 14.600.000 × 1,01% × 4", "Rp589.840"], ["Denda SPT Tahunan OP", "Rp100.000"], ["Total sanksi", "Rp689.840"]],
        mengapaSalah: { A: "Memakai denda SPT Tahunan badan Rp1.000.000.", B: "Bulan dibulatkan ke bawah (3 bulan) sehingga bunga Rp442.380.", C: "Lupa denda keterlambatan SPT Tahunan." },
        jebakan: "Terlambat bayar dan terlambat lapor adalah dua pelanggaran terpisah."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) dan (2b) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (3) huruf b UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-014", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Wira Logam menyampaikan SPT Masa PPh Pasal 21 Masa September 2026 tepat waktu pada 20 Oktober 2026. Pada November 2026 bagian keuangan menemukan bonus yang belum dihitung sehingga PPh 21 kurang setor Rp6.240.000. Kekurangan itu disetor 20 November 2026, lalu SPT Masa pembetulan disampaikan 23 November 2026. Tarif KMK Oktober 2026: uplift 5% = 1,01%; uplift 10% = 1,42%. Sanksi administratif atas pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp63.024", B: "Rp177.216", C: "Rp126.048", D: "Rp100.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembetulan SPT Masa yang menyebabkan kurang bayar dikenai bunga Pasal 8 ayat (2a) (uplift 5%) sejak jatuh tempo penyetoran sampai tanggal pembayaran; tarif mengikuti KMK bulan dimulainya sanksi (Oktober 2026).",
        jejakHitung: [["Jatuh tempo setor Masa September", "15 Oktober 2026"], ["15 Okt → 20 Nov 2026", "1 bulan 5 hari = 2 bulan"], ["Tarif Oktober 2026 uplift 5%", "1,01%"], ["Bunga = 6.240.000 × 1,01% × 2", "Rp126.048"]],
        mengapaSalah: { A: "Hanya 1 bulan; sisa 5 hari dihitung penuh satu bulan.", B: "Uplift 10% hanya untuk pengungkapan saat pemeriksaan (Pasal 8 ayat (5)).", D: "Denda Pasal 7 untuk SPT terlambat; SPT semula tepat waktu." },
        jebakan: "Pembetulan bukan keterlambatan lapor; sanksinya bunga, bukan denda."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-015", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Tuan Hadi (orang pribadi pemilik toko) dan PT Hadi Sentosa (tahun buku sama dengan tahun kalender) sama-sama wajib menyampaikan SPT Tahunan PPh Tahun Pajak 2025 tanpa mengajukan perpanjangan. Batas waktu penyampaian SPT Tahunan masing-masing adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "Tuan Hadi 31 Maret 2026; PT Hadi Sentosa 30 April 2026", B: "Keduanya 30 April 2026", C: "Keduanya 31 Maret 2026", D: "Tuan Hadi 31 Maret 2026; PT Hadi Sentosa 31 Mei 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "SPT Tahunan OP paling lama 3 bulan dan badan 4 bulan setelah akhir Tahun Pajak.",
        jejakHitung: [["OP: 31 Desember 2025 + 3 bulan", "31 Maret 2026"], ["Badan: 31 Desember 2025 + 4 bulan", "30 April 2026"]],
        mengapaSalah: { B: "OP tidak mendapat 4 bulan.", C: "Badan tidak dibatasi 3 bulan.", D: "Badan 4 bulan, bukan 5 bulan." },
        jebakan: "Pemilik dan perusahaannya adalah dua WP dengan tenggat berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (3) huruf b dan c UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-016", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Data WP untuk Tahun Pajak 2026: (1) Tuan Fikri, pedagang kelontong, peredaran bruto 2025 Rp1,9 miliar, memberitahukan pemakaian NPPN pada 15 Maret 2026; (2) CV Sumber Rejeki, peredaran bruto Rp900 juta; (3) Ny. Melati, pegawai tetap tanpa usaha atau pekerjaan bebas; (4) dr. Anton, praktik dokter, peredaran bruto Rp3,2 miliar, tidak menyampaikan pemberitahuan NPPN. Wajib Pajak yang wajib menyelenggarakan pembukuan adalah ...",
      kataKualifikasi: ["wajib"],
      opsi: { A: "(2) dan (4)", B: "(2) saja", C: "(2), (3), dan (4)", D: "(1) dan (2)" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Badan selalu wajib pembukuan; OP usaha/pekerjaan bebas boleh pencatatan hanya bila peredaran bruto < Rp4,8 miliar dan memberitahukan NPPN dalam 3 bulan pertama Tahun Pajak; OP tanpa usaha cukup pencatatan.",
        jejakHitung: [],
        mengapaSalah: { B: "dr. Anton tidak memberitahukan NPPN sehingga wajib pembukuan walau omzetnya di bawah Rp4,8 miliar.", C: "Pegawai tanpa usaha tidak wajib pembukuan.", D: "Pemberitahuan 15 Maret masih dalam 3 bulan pertama, sehingga Tuan Fikri boleh pencatatan." },
        jebakan: "Batas omzet saja tidak cukup; pemberitahuan NPPN menentukan."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 14 ayat (2)–(5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-017", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Direksi PT Andalas Prima berencana memusnahkan arsip faktur, bukti potong, dan data akuntansi elektronik yang berumur lebih dari 5 tahun dengan alasan daluwarsa penetapan pajak hanya 5 tahun, serta memindahkan sisanya ke server induk di Singapura. Menurut Pasal 28 ayat (11) UU KUP, ketentuan penyimpanan dokumen yang benar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "5 tahun, mengikuti daluwarsa penetapan", B: "10 tahun di Indonesia, termasuk hasil pengolahan data elektronik", C: "10 tahun dan boleh disimpan di luar negeri bila induk perusahaan di luar negeri", D: "Sampai daluwarsa penagihan atas seluruh utang pajak berakhir" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Buku, catatan, dokumen dasar, dan hasil pengolahan data elektronik wajib disimpan 10 tahun di Indonesia (tempat kegiatan atau tempat tinggal WP OP / tempat kedudukan badan).",
        jejakHitung: [],
        mengapaSalah: { A: "Daluwarsa penetapan bukan ukuran masa simpan.", C: "Wajib disimpan di Indonesia.", D: "Masa simpan ditetapkan tegas 10 tahun." },
        jebakan: "Angka 5 tahun milik daluwarsa; penyimpanan 10 tahun."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-018", topik: "A2.4", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Nusa Mining (PMA, tahun buku kalender, pembukuan Rupiah berbahasa Indonesia) ingin mulai tahun buku 2027 (i) menyelenggarakan pembukuan dalam bahasa Inggris dan mata uang dolar AS, dan (ii) mengubah tahun buku menjadi 1 April–31 Maret mengikuti induk perusahaan. Pernyataan yang tepat menurut Pasal 28 UU KUP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keduanya cukup diungkapkan dalam catatan atas laporan keuangan", B: "(i) memerlukan izin sesuai Pasal 28 ayat (8) melalui layanan Coretax, dan (ii) memerlukan persetujuan DJP", C: "(i) otomatis boleh karena PMA, dan (ii) cukup pemberitahuan setelah RUPS", D: "(i) memerlukan izin, sedangkan (ii) cukup diputuskan RUPS tanpa persetujuan DJP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembukuan berbahasa asing dan bermata uang selain Rupiah hanya setelah izin (Pasal 28 ayat (8); teknis Coretax PER-8/PJ/2025); perubahan metode pembukuan dan/atau tahun buku wajib mendapat persetujuan DJP (Pasal 28 ayat (6)).",
        jejakHitung: [],
        mengapaSalah: { A: "Pengungkapan akuntansi tidak menggantikan izin/persetujuan pajak.", C: "Status PMA hanya syarat untuk mengajukan izin, bukan izin otomatis; tahun buku butuh persetujuan.", D: "Keputusan RUPS tidak cukup tanpa persetujuan DJP." },
        jebakan: "Dua perubahan, dua rezim izin: bahasa/mata uang dan tahun buku."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (4), (6), dan (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-8/PJ/2025", berlakuSejak: "2025-05-21" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A2-019", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Sinar Fajar tidak menyelenggarakan pembukuan untuk Tahun Pajak 2023 sehingga pemeriksa tidak dapat mengetahui besarnya pajak terutang dan menetapkan PPh Badan kurang bayar Rp60.000.000 secara jabatan. SKPKB terbit 20 Oktober 2026, lebih dari 24 bulan sejak akhir Tahun Pajak 2023. Anggap tarif bunga per bulan yang berlaku: uplift 15% = 1,84%; uplift 20% = 2,26%. Sanksi administratif dalam SKPKB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp26.496.000", B: "Rp45.000.000", C: "Rp46.104.000", D: "Rp32.544.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "SKPKB karena kewajiban pembukuan tidak dipenuhi (Pasal 13 ayat (1) huruf d) dikenai bunga uplift 20% atas PPh yang tidak/kurang dibayar (Pasal 13 ayat (3) huruf a), paling lama 24 bulan.",
        jejakHitung: [["Pokok PPh kurang bayar", "Rp60.000.000"], ["Tarif uplift 20%", "2,26% per bulan"], ["Bulan (31 Des 2023 → 20 Okt 2026 = 34, dibatasi)", "24"], ["Bunga = 60.000.000 × 2,26% × 24", "Rp32.544.000"]],
        mengapaSalah: { A: "Uplift 15% (Pasal 13 ayat (2)) untuk SKPKB hasil pemeriksaan biasa.", B: "Kenaikan 75% hanya untuk PPh dipotong/dipungut tidak disetor dan PPN/PPnBM.", C: "Tidak menerapkan batas 24 bulan (34 bulan)." },
        jebakan: "Tidak menyelenggarakan pembukuan menggeser sanksi ke Pasal 13 ayat (3) dengan uplift tertinggi."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf d dan ayat (3) huruf a UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 28 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-020", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A2-03",
      stem: "Data untuk soal vignette V-A2-03: PT Rimba Kencana (bukan anggota grup usaha, tanpa indikasi transfer pricing) menerima Surat Perintah Pemeriksaan (SP2) pemeriksaan lengkap atas SPT Tahunan PPh Badan Tahun Pajak 2024 (lebih bayar, dimintakan restitusi) pada 12 Januari 2026. Menurut PMK 15/2025, SPHP harus sudah disampaikan paling lambat ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "12 Mei 2026", B: "12 Juni 2026", C: "12 Juli 2026", D: "12 Oktober 2026" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Jangka waktu pengujian pemeriksaan lengkap 5 bulan sejak SP2/pemberitahuan pemeriksaan sampai SPHP disampaikan; perpanjangan 4 bulan hanya untuk grup usaha atau indikasi transfer pricing.",
        jejakHitung: [["SP2 diterima", "12 Januari 2026"], ["+ 5 bulan (pemeriksaan lengkap)", "12 Juni 2026"]],
        mengapaSalah: { A: "4 bulan adalah jangka pemeriksaan kantor rezim PMK 17/2013 jo. 184/2015.", C: "6 bulan adalah jangka pemeriksaan lapangan rezim lama.", D: "Menambah perpanjangan 4 bulan yang tidak berlaku bagi WP ini." },
        jebakan: "Lengkap 5 · terfokus 3 · spesifik 1; lupakan kantor 4/lapangan 6."
      },
      dasarHukum: [{ pasal: "PMK 15/2025 (jangka waktu pengujian)", berlakuSejak: "2025-02-14" }, { pasal: "Pasal 17B UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-021", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A2-03",
      kutipan: "Pasal 8 ayat (4) dan (5) UU KUP (parafrase setia): Walaupun DJP telah melakukan pemeriksaan, dengan syarat belum menyampaikan SPHP, WP dengan kesadaran sendiri dapat mengungkapkan dalam laporan tersendiri ketidakbenaran pengisian SPT. Kekurangan pajak harus dilunasi sebelum laporan disampaikan beserta bunga sebesar tarif bunga per bulan (suku bunga acuan + 10%) : 12, dihitung sejak saat terutangnya pajak atau berakhirnya Masa Pajak, Bagian Tahun Pajak, atau Tahun Pajak sampai dengan tanggal pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan.",
      stem: "Lanjutan V-A2-03: PT Rimba Kencana (pemeriksaan lengkap PPh Badan Tahun Pajak 2024 sejak 12 Januari 2026, tahun buku kalender) pada 6 April 2026, sebelum SPHP disampaikan, menyampaikan laporan tersendiri pengungkapan ketidakbenaran pengisian SPT yang menyebabkan PPh kurang bayar Rp84.000.000, dan melunasinya pada hari yang sama. Batas waktu penyampaian SPT Tahunan 2024 adalah 30 April 2025. Anggap tarif bunga per bulan yang berlaku: uplift 5% = 1,01%; 10% = 1,42%; 15% = 1,84%. Berdasarkan kutipan, sanksi yang wajib dilunasi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp19.084.800", B: "Rp14.313.600", C: "Rp13.574.400", D: "Rp24.729.600" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengungkapan Pasal 8 ayat (4) memakai uplift 10% dan dihitung sejak berakhirnya Tahun Pajak (31 Desember 2024) sampai tanggal pembayaran.",
        jejakHitung: [["31 Des 2024 → 31 Mar 2026", "15 bulan"], ["31 Mar → 6 Apr 2026", "bagian bulan = 1 bulan"], ["Jumlah bulan", "16"], ["Bunga = 84.000.000 × 1,42% × 16", "Rp19.084.800"]],
        mengapaSalah: { B: "Menghitung sejak batas waktu SPT (30 April 2025) seperti pembetulan Pasal 8 ayat (2): 12 bulan.", C: "Memakai uplift 5% milik pembetulan biasa.", D: "Memakai uplift 15% milik SKPKB Pasal 13 ayat (2)." },
        jebakan: "Titik awal dan uplift pengungkapan berbeda dengan pembetulan biasa."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (4) dan (5) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PP 50/2022", berlakuSejak: "2022-12-12" }, { pasal: "PMK 15/2025", berlakuSejak: "2025-02-14" }],
      anggaranDetik: 200, verifikasi: "◐",
      peringatan: "Titik awal penghitungan bunga Pasal 8 ayat (5) (akhir Tahun Pajak) disusun dari pengetahuan teks UU HPP; riset proyek hanya mengonfirmasi uplift 10%, batas sebelum SPHP, dan maksimal 24 bulan. Cek ulang ke teks konsolidasi."
    },
    {
      id: "A2-022", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A2-03",
      stem: "Lanjutan V-A2-03: setelah Pembahasan Temuan Sementara, PT Rimba Kencana menerima SPHP pemeriksaan lengkap PPh Badan 2024 pada Kamis, 4 Juni 2026. Dengan asumsi tidak ada hari libur nasional atau cuti bersama, batas akhir PT Rimba Kencana menyampaikan tanggapan tertulis atas SPHP adalah ...",
      kataKualifikasi: ["batas akhir"],
      opsi: { A: "Kamis, 11 Juni 2026", B: "Senin, 15 Juni 2026", C: "Selasa, 9 Juni 2026", D: "Kamis, 16 Juli 2026" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 15/2025 memangkas jangka waktu tanggapan SPHP menjadi 5 hari kerja sejak SPHP diterima.",
        jejakHitung: [["Hari kerja 1–2", "Jumat 5 Juni, Senin 8 Juni"], ["Hari kerja 3–4", "Selasa 9 Juni, Rabu 10 Juni"], ["Hari kerja 5", "Kamis, 11 Juni 2026"]],
        mengapaSalah: { B: "7 hari kerja adalah ketentuan PMK 17/2013 jo. 184/2015.", C: "Menghitung 5 hari kalender.", D: "30 hari kerja adalah jangka PAHP dan laporan hasil pemeriksaan." },
        jebakan: "Hari kerja, bukan hari kalender; 5, bukan 7."
      },
      dasarHukum: [{ pasal: "PMK 15/2025 (tanggapan SPHP)", berlakuSejak: "2025-02-14" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-023", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      kutipan: "Pasal 8 ayat (3) dan (3a) UU KUP (parafrase setia): Walaupun telah dilakukan tindakan pemeriksaan bukti permulaan, WP dengan kemauan sendiri dapat mengungkapkan ketidakbenaran perbuatannya, sepanjang mulainya penyidikan belum diberitahukan kepada Penuntut Umum, disertai pelunasan kekurangan pembayaran jumlah pajak yang sebenarnya terutang beserta sanksi administratif berupa denda sebesar 100% dari jumlah pajak yang kurang dibayar.",
      stem: "CV Garuda Logistik sedang menjalani pemeriksaan bukti permulaan atas dugaan tindak pidana Pasal 39 terkait PPN Masa Januari–Desember 2024. Sebelum penyidikan dimulai, CV Garuda mengungkapkan sendiri ketidakbenaran perbuatannya secara tertulis dengan PPN yang kurang dibayar Rp230.000.000. Berdasarkan kutipan, jumlah yang harus dilunasi agar pengungkapan diproses dan perkara tidak dilanjutkan ke penyidikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp575.000.000", B: "Rp402.500.000", C: "Rp230.000.000", D: "Rp460.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pengungkapan ketidakbenaran perbuatan saat pemeriksaan bukti permulaan: pokok kurang bayar ditambah denda 100% (UU HPP; sebelumnya 150%).",
        jejakHitung: [["Pokok PPN kurang bayar", "Rp230.000.000"], ["Denda 100%", "Rp230.000.000"], ["Jumlah dilunasi", "Rp460.000.000"]],
        mengapaSalah: { A: "Denda 150% adalah ketentuan sebelum UU HPP.", B: "Kenaikan 75% milik SKPKB Pasal 13 ayat (3).", C: "Hanya denda; pokok juga wajib dilunasi." },
        jebakan: "Bedakan pengungkapan 'perbuatan' (bukper, denda 100%) dan 'pengisian SPT' (pemeriksaan, bunga uplift 10%)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (3) dan (3a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 43A UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-024", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Kirana Medika (bukan anggota grup usaha, tanpa indikasi transfer pricing) menerima Surat Perintah Pemeriksaan (SP2) pemeriksaan terfokus atas pos biaya promosi dalam SPT Tahunan PPh Badan Tahun Pajak 2024 pada 2 Maret 2026. Manajer pajaknya menyusun linimasa internal berdasarkan PMK 15/2025 dan Pasal 8 UU KUP sebagaimana diubah UU HPP. Butir linimasa berikut sudah tepat, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "SPHP paling lambat disampaikan 2 Juni 2026, yaitu 3 bulan sejak SP2 disampaikan",
        B: "Sebelum SPHP disampaikan, pemeriksa melakukan Pembahasan Temuan Sementara dengan WP, karena pengecualian hanya untuk pemeriksaan spesifik",
        C: "Pengungkapan ketidakbenaran pengisian SPT (Pasal 8 ayat (4)) masih dapat disampaikan sepanjang SPHP belum disampaikan, dengan bunga uplift 10%",
        D: "Setelah SPHP diterima, perusahaan memiliki 7 hari kerja untuk menyampaikan tanggapan tertulis"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "angka-usang" },
      pembahasan: {
        inti: "PMK 15/2025 menetapkan tanggapan tertulis atas SPHP paling lama 5 hari kerja sejak SPHP diterima; 7 hari kerja adalah ketentuan PMK 17/2013 jo. 184/2015. Butir lain sudah tepat.",
        jejakHitung: [["SP2 pemeriksaan terfokus", "2 Maret 2026"], ["+ 3 bulan (terfokus)", "SPHP paling lambat 2 Juni 2026"], ["Tanggapan SPHP", "5 hari kerja, bukan 7"]],
        mengapaSalah: { A: "Benar: jangka pengujian pemeriksaan terfokus 3 bulan sejak SP2 sampai SPHP; angka 5 bulan hanya untuk pemeriksaan lengkap.", B: "Benar: Pembahasan Temuan Sementara wajib sebelum SPHP; yang dikecualikan hanya pemeriksaan spesifik.", C: "Benar: sejak UU HPP batas pengungkapan adalah sebelum SPHP disampaikan (dulu sebelum SKP terbit), dengan bunga Pasal 8 ayat (5) uplift 10%." },
        jebakan: "Kata 'kecuali': cari angka usang di antara butir yang sudah sesuai aturan 2025."
      },
      dasarHukum: [{ pasal: "PMK 15/2025", berlakuSejak: "2025-02-14" }, { pasal: "Pasal 8 ayat (4) dan (5) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-025", topik: "A2.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Hartono disidik atas dugaan tindak pidana Pasal 39 ayat (1) huruf d UU KUP (menyampaikan SPT yang isinya tidak benar) dengan kerugian pada pendapatan negara Rp500.000.000. Untuk kepentingan penerimaan negara ia mengajukan permohonan kepada Menteri Keuangan agar Menteri Keuangan meminta Jaksa Agung menghentikan penyidikan. Menurut Pasal 44B UU KUP sebagaimana diubah UU HPP, jumlah yang harus ia lunasi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.500.000.000", B: "Rp1.000.000.000", C: "Rp2.000.000.000", D: "Rp1.500.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penghentian penyidikan Pasal 44B: kerugian pendapatan negara ditambah denda 1 kali (Pasal 38), 3 kali (Pasal 39), atau 4 kali (Pasal 39A).",
        jejakHitung: [["Kerugian pendapatan negara", "Rp500.000.000"], ["Denda 3 × (Pasal 39)", "Rp1.500.000.000"], ["Jumlah dilunasi", "Rp2.000.000.000"]],
        mengapaSalah: { A: "Pengali 4 kali untuk Pasal 39A (faktur fiktif).", B: "Pengali 1 kali untuk Pasal 38 (kealpaan).", D: "Hanya denda 3 kali tanpa pokok kerugian." },
        jebakan: "Pengali mengikuti pasal pidana yang disangkakan, dan pokok kerugian tetap dibayar."
      },
      dasarHukum: [{ pasal: "Pasal 44B ayat (1) dan (2) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 39 ayat (1) huruf d UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Pengali 1/3/4 kali Pasal 44B (UU HPP) dari pengetahuan regulasi; riset proyek menandai pidana ◐. Cek teks konsolidasi UU KUP."
    },
    {
      id: "A2-026", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A2-01",
      stem: "Data untuk soal vignette V-A2-01: PT Graha Mandiri (PKP, menyelenggarakan pembukuan, SPT selalu tepat waktu) diperiksa atas PPN Masa Juni 2024 (SPT Masa semula dilaporkan nihil, tanpa kompensasi atau restitusi). Pemeriksa mengoreksi Pajak Masukan yang tidak memenuhi syarat sehingga PPN kurang bayar Rp150.000.000. SKPKB diterbitkan dan dikirim 16 Oktober 2026. Anggap tarif bunga per bulan yang berlaku untuk penghitungan ini: uplift 15% = 1,84%; uplift 20% = 2,26%. Jumlah yang harus dibayar menurut SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp262.500.000", B: "Rp231.360.000", C: "Rp227.280.000", D: "Rp216.240.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "SKPKB hasil pemeriksaan biasa (Pasal 13 ayat (1) huruf a) dikenai bunga Pasal 13 ayat (2) uplift 15% sejak berakhirnya Masa Pajak sampai SKPKB terbit, paling lama 24 bulan.",
        jejakHitung: [["30 Jun 2024 → 16 Okt 2026", "28 bulan, dibatasi 24"], ["Bunga = 150.000.000 × 1,84% × 24", "Rp66.240.000"], ["Pokok + bunga", "Rp216.240.000"]],
        mengapaSalah: { A: "Kenaikan 75% hanya bila SKPKB terbit karena Pasal 13 ayat (1) huruf b–d (misalnya SPT tidak disampaikan setelah ditegur).", B: "Uplift 20% (Pasal 13 ayat (3)) tidak berlaku untuk pemeriksaan biasa.", C: "Tidak menerapkan batas 24 bulan (28 bulan)." },
        jebakan: "PPN kurang bayar dari pemeriksaan biasa tidak otomatis kenaikan 75%."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf a dan ayat (2) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-027", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-A2-01",
      stem: "Lanjutan V-A2-01: SKPKB PPN Masa Juni 2024 PT Graha Mandiri sebesar Rp216.240.000 (pokok Rp150.000.000 + bunga Rp66.240.000) dikirim 16 Oktober 2026. Dalam Pembahasan Akhir Hasil Pemeriksaan (PAHP), WP menyetujui koreksi pokok Rp40.000.000 dan menolak sisanya. Agar keberatannya memenuhi syarat menurut UU KUP dan PMK 118/2024, langkah yang tepat adalah ...",
      kataKualifikasi: ["paling sedikit", "paling lambat"],
      opsi: {
        A: "Melunasi paling sedikit jumlah yang disetujui dalam PAHP, lalu mengajukan keberatan lewat Portal Wajib Pajak paling lambat 16 Januari 2027",
        B: "Melunasi seluruh SKPKB Rp216.240.000, lalu mengajukan keberatan paling lambat 16 Januari 2027",
        C: "Mengajukan keberatan paling lambat 16 Januari 2027 tanpa pelunasan apa pun karena seluruh pajak tertangguh",
        D: "Melunasi jumlah yang disetujui dalam PAHP, lalu mengajukan keberatan paling lambat 16 November 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan atas SKPKB diajukan paling lama 3 bulan sejak SKP dikirim, setelah melunasi paling sedikit jumlah yang disetujui dalam PAHP; sisanya tertangguh sampai 1 bulan sejak SK Keberatan terbit.",
        jejakHitung: [["SKPKB dikirim", "16 Oktober 2026"], ["+ 3 bulan", "16 Januari 2027"]],
        mengapaSalah: { B: "Pelunasan penuh tidak disyaratkan.", C: "Pasal 25 ayat (3a) mewajibkan pelunasan jumlah yang disetujui dalam PAHP.", D: "1 bulan adalah jatuh tempo pelunasan SKPKB, bukan tenggat keberatan." },
        jebakan: "Tenggat keberatan 3 bulan dihitung dari tanggal dikirim SKP."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (3), (3a), dan (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 Pasal 10 dan 53–54", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-028", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A2-01",
      stem: "Lanjutan V-A2-01: sebelum mengajukan keberatan, PT Graha Mandiri membayar pokok PPN Rp40.000.000. SK Keberatan menolak seluruhnya (pokok tetap Rp150.000.000). WP mengajukan banding, dan Putusan Banding mengabulkan sebagian sehingga pokok PPN menjadi Rp110.000.000. Dasar denda dihitung dari pokok pajak. Sanksi denda yang dikenakan sehubungan dengan Putusan Banding tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp21.000.000", B: "Rp42.000.000", C: "Rp70.000.000", D: "Rp63.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "angka-usang", D: "salah-hitung" },
      pembahasan: {
        inti: "Banding ditolak/dikabulkan sebagian: denda 60% × (pajak menurut Putusan Banding − pajak yang dibayar sebelum keberatan). Karena WP banding, denda 30% Pasal 25 ayat (9) tidak dikenakan.",
        jejakHitung: [["Pokok menurut Putusan Banding", "Rp110.000.000"], ["Dibayar sebelum keberatan", "Rp40.000.000"], ["Dasar denda", "Rp70.000.000"], ["Denda 60%", "Rp42.000.000"]],
        mengapaSalah: { A: "30% adalah denda keberatan bila WP tidak banding.", C: "100% adalah denda banding sebelum UU HPP.", D: "Menjumlahkan 30% dan 60%; denda keberatan gugur karena banding." },
        jebakan: "Satu sengketa, satu denda: 30% atau 60%, tidak keduanya."
      },
      dasarHukum: [{ pasal: "Pasal 27 ayat (5d) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 25 ayat (9) dan (10) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-029", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "KPP menemukan lima peristiwa pada CV Rajawali Teknik: (1) angsuran PPh Pasal 25 Masa Maret 2026 tidak disetor; (2) faktur pajak atas penyerahan BKP dibuat terlambat; (3) hasil pemeriksaan PPh Badan 2024 menunjukkan kurang bayar; (4) SPT Masa PPN Masa April 2026 dilaporkan terlambat; (5) dalam pemeriksaan ditemukan bonus pegawai Juni 2025 yang belum dipotong PPh Pasal 21 dan tidak dilaporkan dalam SPT Masa. Peristiwa yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), dan (4)", B: "(1), (2), (4), dan (5)", C: "(1), (3), dan (4)", D: "(2) dan (4) saja" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "STP (Pasal 14) menagih PPh tahun berjalan yang tidak dibayar, denda/bunga, dan denda faktur; kekurangan pajak hasil pemeriksaan ditetapkan dengan SKPKB (Pasal 13).",
        jejakHitung: [],
        mengapaSalah: { B: "Temuan pemeriksaan (5) ditetapkan dengan SKPKB, bukan STP.", C: "Kurang bayar hasil pemeriksaan (3) adalah SKPKB.", D: "PPh 25 tahun berjalan yang tidak dibayar (1) juga ditagih dengan STP Pasal 14 ayat (1) huruf a." },
        jebakan: "STP untuk tagihan administratif; SKPKB untuk hasil pengujian (pemeriksaan)."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 13 ayat (1) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-030", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Atas PPh Badan Tahun Pajak 2021 PT Kartika Jaya (tahun buku kalender) telah terbit SKPKB pada 2024. Pada Agustus 2026 DJP memperoleh data baru berupa faktur penjualan yang tidak dilaporkan; pemeriksaan ulang menunjukkan tambahan PPh kurang bayar Rp80.000.000. WP tidak pernah mengungkapkan sendiri data tersebut sebelum pemeriksaan. Ketetapan, jumlah, dan batas waktu penerbitan yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "SKPKBT Rp160.000.000, paling lambat 31 Desember 2026",
        B: "SKPKB kedua: pokok Rp80.000.000 ditambah bunga Pasal 13 ayat (2), paling lambat 31 Desember 2026",
        C: "SKPKBT Rp140.000.000, paling lambat 31 Desember 2026",
        D: "SKPKBT Rp160.000.000, paling lambat 5 tahun sejak SKPKB 2024 terbit"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Data baru setelah SKPKB melahirkan SKPKBT dengan kenaikan 100% dari kekurangan pajak, dan tetap tunduk pada daluwarsa penetapan 5 tahun setelah berakhirnya Tahun Pajak.",
        jejakHitung: [["Tambahan pokok", "Rp80.000.000"], ["Kenaikan 100%", "Rp80.000.000"], ["Jumlah SKPKBT", "Rp160.000.000"], ["Daluwarsa TP 2021", "31 Desember 2026"]],
        mengapaSalah: { B: "Ketetapan tambahan atas pajak yang telah ditetapkan adalah SKPKBT, bukan SKPKB kedua.", C: "Kenaikan 75% milik Pasal 13 ayat (3); SKPKBT 100%.", D: "Daluwarsa dihitung dari akhir Tahun Pajak, bukan dari SKPKB sebelumnya." },
        jebakan: "SKPKBT: data baru + kenaikan 100% + daluwarsa tetap 5 tahun dari akhir Tahun Pajak."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 1 UU KUP (definisi SKPKBT)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-031", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Pada 27 Oktober 2026 KPP memperoleh data bahwa PT Mega Sarana (PKP) tidak memungut PPN atas penyerahan BKP pada Masa Pajak November 2021. SPT Masa PPN November 2021 telah dilaporkan pada 28 Desember 2021. Penelitian dan pemeriksaan segera dilakukan. Agar tidak daluwarsa, SKPKB PPN Masa November 2021 harus terbit paling lambat ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "27 Oktober 2031", B: "31 Desember 2026", C: "30 November 2026", D: "30 November 2031" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Daluwarsa penetapan 5 tahun setelah saat terutang atau berakhirnya Masa Pajak; Masa November 2021 berakhir 30 November 2021.",
        jejakHitung: [["Berakhirnya Masa Pajak", "30 November 2021"], ["+ 5 tahun", "30 November 2026"]],
        mengapaSalah: { A: "Daluwarsa tidak dihitung sejak data ditemukan.", B: "Memakai akhir Tahun Pajak, padahal PPN berbasis Masa Pajak.", D: "10 tahun adalah ketentuan daluwarsa sebelum UU 28/2007." },
        jebakan: "Untuk pajak masa, patokannya akhir Masa Pajak, bukan akhir tahun atau tanggal lapor."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A2-032", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 25 ayat (9) dan (10) UU KUP (parafrase setia): Dalam hal keberatan Wajib Pajak ditolak atau dikabulkan sebagian, Wajib Pajak dikenai sanksi administratif berupa denda sebesar 30% dari jumlah pajak berdasarkan keputusan keberatan dikurangi dengan pajak yang telah dibayar sebelum mengajukan keberatan. Sanksi tersebut tidak dikenakan dalam hal Wajib Pajak mengajukan permohonan banding.",
      stem: "SKPKB PPh Pasal 23 Masa Mei 2025 PT Delta Persada memuat pokok Rp96.000.000. Sebelum mengajukan keberatan, WP melunasi pokok yang disetujui dalam PAHP sebesar Rp36.000.000. SK Keberatan mengabulkan sebagian sehingga pokok menjadi Rp72.000.000, dan WP memutuskan tidak mengajukan banding. Dasar denda dihitung dari pokok pajak. Berdasarkan kutipan, denda Pasal 25 ayat (9) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp21.600.000", B: "Rp18.000.000", C: "Rp10.800.000", D: "Rp7.200.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Denda 30% dihitung dari pajak menurut SK Keberatan dikurangi pajak yang dibayar sebelum keberatan.",
        jejakHitung: [["Pokok menurut SK Keberatan", "Rp72.000.000"], ["Dibayar sebelum keberatan", "Rp36.000.000"], ["Dasar denda", "Rp36.000.000"], ["Denda 30%", "Rp10.800.000"]],
        mengapaSalah: { A: "30% × Rp72.000.000 tanpa mengurangi pembayaran sebelum keberatan.", B: "Memakai denda 50% sebelum UU HPP (atau dasar SKPKB semula Rp96 juta − Rp36 juta).", D: "Dasar denda bukan selisih yang dikabulkan (Rp96 juta − Rp72 juta)." },
        jebakan: "Dasar denda = keputusan keberatan − yang sudah dibayar sebelum keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (9) dan (10) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-033", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Ny. Wulan (pengusaha) menerima dua dokumen pada September 2026: (1) STP berisi denda Pasal 7 dan bunga Pasal 9 ayat (2a) karena SPT Masa dan setoran PPh 25 terlambat; keterlambatan terjadi karena ia dirawat inap di rumah sakit dan dapat dibuktikan; (2) SKPKB PPh Orang Pribadi 2024 yang koreksinya menurut ia tidak benar secara materi. Kombinasi upaya yang tepat menurut UU KUP adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengajukan keberatan atas STP dan atas SKPKB",
        B: "Mengajukan banding ke Pengadilan Pajak atas STP, dan keberatan atas SKPKB",
        C: "Mengajukan permohonan Pasal 36 ayat (1) huruf b dan keberatan atas SKPKB yang sama sekaligus agar peluangnya lebih besar",
        D: "Mengajukan permohonan Pasal 36 ayat (1) huruf a atas sanksi dalam STP, dan keberatan atas SKPKB dalam 3 bulan sejak dikirim"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "STP bukan objek keberatan; sanksi yang timbul bukan karena kesalahan WP dimohonkan pengurangan/penghapusan lewat Pasal 36 ayat (1) huruf a. SKPKB yang materinya disengketakan diajukan keberatan, dan tidak boleh bersamaan dengan Pasal 36 atas SKP yang sama.",
        jejakHitung: [],
        mengapaSalah: { A: "Objek keberatan adalah SKPKB, SKPKBT, SKPLB, SKPN, dan pemotongan/pemungutan; STP tidak termasuk.", B: "Banding hanya atas SK Keberatan.", C: "Permohonan Pasal 36 tidak dapat diajukan bersamaan dengan keberatan atas SKP yang sama." },
        jebakan: "Pilih jalur sesuai dokumen: STP → Pasal 36; SKP → keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 36 ayat (1) huruf a dan b UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-034", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "CV Anugerah mengajukan permohonan pengurangan sanksi administratif dalam STP berdasarkan Pasal 36 ayat (1) huruf a. Keputusan atas permohonan pertama yang menolak permohonan itu dikirim 10 Juli 2026. CV Anugerah ingin mencoba lagi. Pernyataan yang tepat tentang permohonan berikutnya adalah ...",
      kataKualifikasi: ["paling lama", "paling banyak"],
      opsi: {
        A: "Permohonan kedua paling lama 10 Oktober 2026; setelah itu tidak dapat diajukan permohonan ketiga",
        B: "Permohonan kedua paling lama 10 Agustus 2026; permohonan ketiga masih dapat diajukan",
        C: "Permohonan kedua paling lama 10 Januari 2027, mengikuti jangka waktu keputusan 6 bulan",
        D: "Permohonan kedua paling lama 10 Oktober 2026; permohonan ketiga dapat diajukan bila ada bukti baru"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Permohonan Pasal 36 ayat (1) huruf a–c paling banyak 2 kali; permohonan kedua paling lama 3 bulan sejak keputusan pertama dikirim.",
        jejakHitung: [["Keputusan pertama dikirim", "10 Juli 2026"], ["+ 3 bulan", "10 Oktober 2026"]],
        mengapaSalah: { B: "1 bulan tidak dikenal; dan permohonan dibatasi 2 kali.", C: "6 bulan adalah jangka waktu DJP memberi keputusan, bukan tenggat permohonan kedua.", D: "Batas 2 kali tidak dapat ditembus dengan bukti baru." },
        jebakan: "Dua kesempatan, jeda paling lama 3 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 36 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }],
      anggaranDetik: 100, verifikasi: "◐",
      peringatan: "Batas 2 kali dan tenggat 3 bulan permohonan kedua bersumber dari ringkasan PMK 118/2024 (riset ✅/◐); titik hitung 'dikirim' perlu dicek ke teks PMK."
    },
    {
      id: "A2-035", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "SKPKB PPh Pasal 23 PT Seroja Abadi mencantumkan pokok Rp45.000.000 dan bunga Pasal 13 ayat (2) Rp19.872.000 (24 bulan × 1,84%), tetapi kolom 'jumlah yang masih harus dibayar' tertulis Rp74.872.000. WP setuju sepenuhnya dengan koreksi dan dasar penetapan; masalahnya hanya penjumlahan. Jumlah yang seharusnya dan upaya yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp64.872.000; keberatan Pasal 25 dalam 3 bulan",
        B: "Rp64.872.000; permohonan pembetulan Pasal 16 karena kesalahan hitung",
        C: "Rp74.872.000 dibayar dulu, lalu restitusi Pasal 17B atas selisihnya",
        D: "Rp45.000.000; permohonan Pasal 36 ayat (1) huruf a untuk menghapus bunga"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Kesalahan tulis, kesalahan hitung, atau kekeliruan penerapan ketentuan dalam ketetapan dibetulkan lewat Pasal 16, tanpa mempersoalkan materi.",
        jejakHitung: [["Pokok", "Rp45.000.000"], ["Bunga 45.000.000 × 1,84% × 24", "Rp19.872.000"], ["Jumlah benar", "Rp64.872.000"], ["Selisih salah jumlah", "Rp10.000.000"]],
        mengapaSalah: { A: "Keberatan untuk sengketa materi; WP tidak menyengketakan materi.", C: "Restitusi Pasal 17B untuk SPT lebih bayar, bukan untuk salah hitung ketetapan.", D: "Bunga dikenakan sah; Pasal 36 huruf a untuk sanksi karena kekhilafan WP atau bukan kesalahannya." },
        jebakan: "Salah hitung → Pasal 16; sengketa materi → Pasal 25."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 13 ayat (2) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-036", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Pada 9 November 2026 PT Fajar Sentosa mengajukan permohonan fasilitas penghapusan sanksi administratif berdasarkan PMK 71/2026 jo. KEP-239/PJ/2026 atas: (1) STP bunga Pasal 9 ayat (2a) Rp4.200.000 yang pokok pajaknya sudah lunas; dan (2) denda Pasal 25 ayat (9) Rp18.000.000 karena keberatannya ditolak dan tidak dibanding. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keduanya dapat dihapus 100% karena diajukan sebelum 31 Desember 2026",
        B: "Hanya sanksi (1) yang dapat dihapus 100%; denda keberatan (2) tidak termasuk fasilitas",
        C: "Keduanya hanya dapat dikurangi 50%",
        D: "Tidak ada yang dapat dihapus karena fasilitas baru berlaku pada 2027"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Fasilitas PMK 71/2026 menghapus 100% sanksi administratif yang dimohonkan sampai 31 Desember 2026 (bertahap mengecil hingga 30 Juni 2027), tetapi tidak mencakup sanksi yang timbul dari keberatan, banding, atau PK; pokok tetap dibayar.",
        jejakHitung: [],
        mengapaSalah: { A: "Denda Pasal 25 ayat (9) berasal dari keberatan sehingga dikecualikan.", C: "Pengurangan 50% adalah tahap kuartal I 2027.", D: "PMK 71/2026 berlaku 2 Oktober 2026 dan tahap 100% berjalan sampai 31 Desember 2026." },
        jebakan: "Fasilitas sanksi bukan pemutihan dan tidak menyentuh sanksi sengketa."
      },
      dasarHukum: [{ pasal: "PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "KEP-239/PJ/2026", berlakuSejak: "2026-10-08" }, { pasal: "Pasal 36 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Rincian PMK 71/2026 dan KEP-239/PJ/2026 bersumber dari ringkasan berita (riset 02b bertanda [W]); teks peraturan belum dibaca langsung."
    },
    {
      id: "A2-037", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 9 ayat (2a) UU KUP (parafrase setia): Pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan, atas jumlah pajak yang dibayar, dihitung dari tanggal jatuh tempo sampai dengan tanggal pembayaran, dan bagian dari bulan dihitung penuh 1 bulan. Tarif dihitung dari suku bunga acuan ditambah 5% dibagi 12, berlaku pada tanggal dimulainya penghitungan sanksi, paling lama 24 bulan.",
      stem: "CV Maju Bersama memotong PPh Pasal 23 Masa September 2026 sebesar Rp23.750.000, tetapi baru menyetorkannya pada 9 Maret 2027. Tarif bunga per bulan Oktober 2026 menurut KMK 47/MK/EF.2/2026: uplift 0% = 0,59%; uplift 5% = 1,01%; uplift 15% = 1,84%. Berdasarkan kutipan, sanksi bunga yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp959.500", B: "Rp2.375.000", C: "Rp700.625", D: "Rp1.199.375" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo setor 15 Oktober 2026, sehingga tarif Oktober 2026 uplift 5% (1,01%) dipakai untuk seluruh periode; bulan dihitung sampai tanggal setor dengan pembulatan ke atas.",
        jejakHitung: [["Jatuh tempo", "15 Oktober 2026"], ["15 Okt 2026 → 15 Feb 2027", "4 bulan"], ["15 Feb → 9 Mar 2027", "bagian bulan = 1"], ["Bunga = 23.750.000 × 1,01% × 5", "Rp1.199.375"]],
        mengapaSalah: { A: "Bulan dibulatkan ke bawah (4 bulan).", B: "Memakai bunga 2% flat sebelum UU Cipta Kerja/HPP.", C: "Memakai uplift 0% milik Pasal 19." },
        jebakan: "Tarif dikunci pada bulan dimulainya sanksi, bukan bulan pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-038", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sinar Kencana (PKP, tahun buku kalender) menyampaikan: SPT Masa PPh 21/26 Masa Juli 2026 pada Senin, 24 Agustus 2026; SPT Masa PPh Unifikasi Masa Juli 2026 pada Selasa, 18 Agustus 2026; SPT Masa PPN Masa Juli 2026 pada Rabu, 2 September 2026; dan SPT Tahunan PPh Badan 2025 pada Senin, 4 Mei 2026. Seluruh batas waktu jatuh pada hari kerja. Total denda Pasal 7 ayat (1) UU KUP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.700.000", B: "Rp1.200.000", C: "Rp1.600.000", D: "Rp2.100.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Periksa setiap SPT terhadap batasnya: PPh 21/26 (20 Agustus) terlambat, Unifikasi tepat waktu, PPN (31 Agustus) terlambat, SPT Tahunan badan (30 April) terlambat.",
        jejakHitung: [["SPT Masa PPh 21/26 (batas 20 Agu)", "Rp100.000"], ["SPT Masa Unifikasi (18 Agu, tepat waktu)", "Rp0"], ["SPT Masa PPN (batas 31 Agu)", "Rp500.000"], ["SPT Tahunan Badan (batas 30 Apr)", "Rp1.000.000"], ["Total", "Rp1.600.000"]],
        mengapaSalah: { A: "Unifikasi dianggap terlambat padahal disampaikan 18 Agustus.", B: "SPT Masa PPN dikenai Rp100.000, padahal Rp500.000.", D: "SPT Masa PPN disamakan dengan SPT Tahunan badan Rp1.000.000." },
        jebakan: "Denda per jenis SPT berbeda; hitung satu per satu."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-039", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Arta Boga tidak menyampaikan SPT Masa PPh Pasal 21 Masa Januari–Desember 2023 dan tetap tidak menyampaikannya setelah ditegur secara tertulis, sehingga DJP menerbitkan SKPKB berdasarkan Pasal 13 ayat (1) huruf b. Hasil penghitungan: (i) PPh 21 Rp40.000.000 telah dipotong dari gaji pegawai tetapi tidak disetor; (ii) PPh 21 Rp25.000.000 atas honorarium tenaga ahli tidak dipotong. SKPKB terbit 20 Oktober 2026, lebih dari 24 bulan sejak berakhirnya setiap Masa Pajak 2023. Anggap tarif: uplift 15% = 1,84%; uplift 20% = 2,26%. Total sanksi dalam SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp53.560.000", B: "Rp43.560.000", C: "Rp41.040.000", D: "Rp35.256.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk SKPKB Pasal 13 ayat (1) huruf b: PPh dipotong tetapi tidak disetor dikenai kenaikan 75% (Pasal 13 ayat (3) huruf c); PPh tidak dipotong dikenai bunga uplift 20% (huruf b), maksimal 24 bulan.",
        jejakHitung: [["(i) Kenaikan 75% × 40.000.000", "Rp30.000.000"], ["(ii) Bunga 25.000.000 × 2,26% × 24", "Rp13.560.000"], ["Total sanksi", "Rp43.560.000"]],
        mengapaSalah: { A: "Kenaikan 100% adalah ketentuan sebelum UU HPP.", C: "Bunga (ii) memakai uplift 15% milik Pasal 13 ayat (2).", D: "Seluruh Rp65 juta dikenai bunga 20%, padahal (i) dikenai kenaikan 75%." },
        jebakan: "Dipotong-tidak-disetor (uang pegawai ditahan) dihukum lebih berat daripada tidak dipotong."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf b dan ayat (3) huruf b, c UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 13 ayat (3b) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A2-040", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "CV Sentra Elektrik (PKP) menyerahkan peralatan listrik (bukan barang mewah) kepada PT Bangun Kota pada 12 Agustus 2026 dengan harga jual Rp240.000.000. Faktur pajak baru dibuat dan diunggah ke Coretax pada 25 November 2026, lewat 3 bulan sejak saat faktur seharusnya dibuat, sehingga dianggap tidak membuat faktur pajak. PPN dihitung 12% × DPP nilai lain 11/12 × harga jual. Sanksi Pasal 14 ayat (4) UU KUP yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.400.000", B: "Rp4.400.000", C: "Rp264.000", D: "Rp2.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "PKP yang tidak membuat faktur, terlambat, atau tidak lengkap dikenai denda 1% dari Dasar Pengenaan Pajak; DPP di sini adalah nilai lain 11/12 × harga jual.",
        jejakHitung: [["DPP = 11/12 × 240.000.000", "Rp220.000.000"], ["Denda 1% × DPP", "Rp2.200.000"]],
        mengapaSalah: { A: "1% dari harga jual, bukan dari DPP.", B: "Tarif denda 2% berlaku sebelum UU HPP.", C: "1% dari PPN (Rp26.400.000), bukan dari DPP." },
        jebakan: "Era PPN 12%: DPP nilai lain 11/12 menjadi dasar denda faktur."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) huruf d dan ayat (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 131/2024", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Penerapan denda 1% atas DPP nilai lain 11/12 mengikuti bunyi 'dari Dasar Pengenaan Pajak'; praktik Coretax atas penyerahan non-mewah belum dikonfirmasi riset."
    },
    {
      id: "A2-041", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Tarif bunga per bulan Oktober 2026 menurut KMK 47/MK/EF.2/2026 adalah 0,59%; 1,01%; 1,42%; 1,84%; dan 2,26%, masing-masing untuk uplift 0%, 5%, 10%, 15%, dan 20%. Tarif 1,42% per bulan dipakai untuk sanksi atas peristiwa ...",
      kataKualifikasi: [],
      opsi: { A: "SKPKB hasil pemeriksaan atas PPh yang kurang dibayar", B: "SKPKB yang tidak dilunasi pada saat jatuh tempo", C: "Pengungkapan ketidakbenaran pengisian SPT saat pemeriksaan sebelum SPHP", D: "Keterlambatan penyetoran pajak masa" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "1,42% adalah tarif uplift 10%, yaitu sanksi Pasal 8 ayat (5) atas pengungkapan ketidakbenaran pengisian SPT selama pemeriksaan.",
        jejakHitung: [],
        mengapaSalah: { A: "SKPKB Pasal 13 ayat (2): uplift 15% (1,84%).", B: "Pasal 19 ayat (1): uplift 0% (0,59%).", D: "Pasal 9 ayat (2a): uplift 5% (1,01%)." },
        jebakan: "Hafal pasangan: 0 Ps. 19 · 5 Ps. 8(2)/9/14 · 10 Ps. 8(5) · 15 Ps. 13(2) · 20 Ps. 13(3)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (5) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-042", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "SKPKB PPh Badan 2024 PT Cemerlang Abadi memuat pokok Rp120.000.000 ditambah bunga Pasal 13 ayat (2), dengan jatuh tempo pelunasan 2 Oktober 2026. Sampai jatuh tempo tidak ada pembayaran apa pun; seluruh jumlah dalam SKPKB baru dilunasi sekaligus pada 14 Desember 2026. Dalam soal ini, bunga Pasal 19 ayat (1) dihitung atas pokok Rp120.000.000 yang tidak dibayar pada saat jatuh tempo. Tarif bunga Oktober 2026: uplift 0% = 0,59%; uplift 5% = 1,01%. Sanksi bunga Pasal 19 ayat (1) yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.636.000", B: "Rp2.124.000", C: "Rp1.416.000", D: "Rp7.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Ketetapan yang tidak dilunasi saat jatuh tempo dikenai bunga Pasal 19 ayat (1) dengan uplift 0% sejak jatuh tempo sampai tanggal pelunasan, bagian bulan dihitung penuh.",
        jejakHitung: [["2 Okt → 2 Des 2026", "2 bulan"], ["2 Des → 14 Des 2026", "bagian bulan = 1"], ["Bunga = 120.000.000 × 0,59% × 3", "Rp2.124.000"]],
        mengapaSalah: { A: "Uplift 5% milik keterlambatan setor pajak masa/tahunan.", C: "Hanya 2 bulan; 12 hari sisa dihitung satu bulan.", D: "Bunga 2% flat sudah usang." },
        jebakan: "Tunggakan ketetapan = uplift 0%; keterlambatan setor = uplift 5%. Dasar bunga dinyatakan di stem (pokok) agar tidak bergantung pada aturan alokasi pembayaran PMK 71/2026."
      },
      dasarHukum: [{ pasal: "Pasal 19 ayat (1) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 9 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-043", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Empat Wajib Pajak berikut terlambat menyampaikan SPT. Menurut Pasal 7 ayat (2) UU KUP, sebagian di antaranya dikecualikan dari denda keterlambatan. Wajib Pajak yang tetap dikenai denda Pasal 7 ayat (1) adalah ...",
      kataKualifikasi: ["tetap"],
      opsi: { A: "Almarhum Tuan Johan, yang SPT Tahunannya terlambat karena ia meninggal dunia pada Februari 2026", B: "Mr. Hans, WNA yang sudah tidak bertempat tinggal di Indonesia lagi", C: "Bendahara proyek yang tidak lagi melakukan pembayaran", D: "CV Damai yang masih beroperasi tetapi omzetnya menurun" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pengecualian denda Pasal 7 ayat (2) antara lain OP meninggal, OP tidak lagi berusaha, WNA tidak lagi tinggal di Indonesia, BUT tidak lagi beroperasi, badan tidak lagi berusaha, bendahara tidak lagi membayar, dan WP terkena bencana. Penurunan omzet bukan alasan pengecualian.",
        jejakHitung: [],
        mengapaSalah: { A: "OP yang meninggal dunia dikecualikan.", B: "WNA yang tidak lagi tinggal di Indonesia dikecualikan.", C: "Bendahara yang tidak lagi membayar dikecualikan." },
        jebakan: "Usaha yang sepi tetap usaha yang berjalan."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-044", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Kencana Agro menyampaikan SPT Tahunan PPh Badan 2025 lebih bayar dan mengajukan restitusi; permohonan diterima lengkap 14 Mei 2026. PT Kencana Agro bukan WP kriteria tertentu maupun persyaratan tertentu, dan tidak sedang dilakukan pemeriksaan bukti permulaan. Sampai 14 Mei 2027 DJP belum menerbitkan surat ketetapan pajak. Akibat hukumnya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Permohonan gugur dan WP harus mengajukan ulang restitusi",
        B: "WP dapat langsung mengajukan gugatan ke Pengadilan Pajak",
        C: "Permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan setelah jangka waktu 12 bulan berakhir",
        D: "DJP dapat memperpanjang jangka waktu 4 bulan seperti pemeriksaan grup usaha"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 17B: keputusan atas restitusi melalui pemeriksaan paling lama 12 bulan sejak permohonan lengkap; lewat waktu, permohonan dianggap dikabulkan dan SKPLB terbit paling lama 1 bulan kemudian.",
        jejakHitung: [["Permohonan lengkap", "14 Mei 2026"], ["+ 12 bulan", "14 Mei 2027"], ["SKPLB fiktif positif paling lama", "+1 bulan"]],
        mengapaSalah: { A: "Undang-undang justru memberi fiktif positif.", B: "Tidak ada keputusan yang dapat digugat; hak WP sudah dijamin fiktif positif.", D: "Batas 12 bulan Pasal 17B ditetapkan undang-undang; perpanjangan PMK 15/2025 menyangkut jangka pengujian, bukan batas ini." },
        jebakan: "Diamnya DJP menguntungkan WP pada restitusi Pasal 17B."
      },
      dasarHukum: [{ pasal: "Pasal 17B ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-045", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Data permohonan pengembalian pendahuluan sebagai WP persyaratan tertentu: (1) Tuan Yudi, pegawai tanpa usaha, SPT Tahunan PPh 2025 lebih bayar Rp14.500.000; (2) Ny. Lina, pedagang (OP berusaha), SPT Tahunan PPh 2025 lebih bayar Rp135.000.000; (3) PT Pelita (peredaran usaha 2025 Rp30 miliar), SPT Tahunan PPh Badan 2025 lebih bayar Rp850.000.000; (4) PT Samudera (PKP eksportir), SPT Masa PPN Agustus 2026 dengan jumlah penyerahan Rp6.500.000.000 (seluruhnya ekspor dengan PEB) dan lebih bayar Rp800.000.000. Semua SPT disampaikan tepat waktu. Berdasarkan ketentuan pengembalian pendahuluan yang berlaku bagi masing-masing SPT, yang memenuhi batas WP persyaratan tertentu (Pasal 17D) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (3), dan (4)", B: "(1) dan (3) saja", C: "(1), (2), (3), dan (4)", D: "(1) saja" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas Pasal 17D: OP tanpa usaha berapa pun; OP berusaha ≤ Rp100 juta; badan ≤ Rp1 miliar (batas lebih bayar OP dan badan tidak berubah). Untuk SPT Masa PPN sejak 1 Mei 2026 berlaku PMK 28 Tahun 2026: PKP harus memenuhi dua batas untuk suatu Masa Pajak, yaitu lebih bayar ≤ Rp1 miliar dan jumlah penyerahan ≤ Rp4,2 miliar; batas lama PKP Rp5 miliar (PMK 209/2021) tidak berlaku lagi.",
        jejakHitung: [["(1) OP tanpa usaha", "memenuhi (tanpa batas jumlah)"], ["(2) OP berusaha Rp135 jt > Rp100 jt", "tidak"], ["(3) badan Rp850 jt ≤ Rp1 M", "memenuhi"], ["(4) PKP Masa Agustus 2026: lebih bayar Rp800 jt ≤ Rp1 M", "terpenuhi"], ["(4) penyerahan Rp6,5 M > Rp4,2 M per Masa Pajak", "tidak memenuhi"]],
        mengapaSalah: { A: "Memakai batas PKP lama (lebih bayar ≤ Rp5 miliar, PMK 209/2021) atau hanya menguji lebih bayar; untuk Masa Agustus 2026 PMK 28/2026 juga membatasi jumlah penyerahan Rp4,2 miliar per Masa Pajak, sedangkan penyerahan PT Samudera Rp6,5 miliar.", C: "Ny. Lina melewati batas Rp100 juta untuk OP berusaha, dan PT Samudera melewati batas penyerahan Rp4,2 miliar.", D: "Badan juga dapat menjadi WP persyaratan tertentu; PT Pelita memenuhi batas lebih bayar Rp1 miliar." },
        jebakan: "Sejak 1 Mei 2026 uji PKP memakai dua angka per Masa Pajak (lebih bayar dan penyerahan); lebih bayar di bawah Rp1 miliar belum cukup."
      },
      dasarHukum: [{ pasal: "Pasal 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 28 Tahun 2026 (mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Batas PKP (lebih bayar ≤ Rp1 miliar dan penyerahan ≤ Rp4,2 miliar per Masa Pajak, sejak 1 Mei 2026) terverifikasi dari ringkasan resmi PMK 28 Tahun 2026 ✅. Batas OP berusaha Rp100 juta dan badan Rp1 miliar mengikuti PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021 dan pemberitaan PMK 28/2026; batas peredaran usaha badan yang diberitakan (Rp50 miliar) serta nomor pasal PMK 28/2026 belum dibaca dari teks ◐."
    },
    {
      id: "A2-046", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "SKPLB PPh Badan PT Hijau Lestari sebesar Rp300.000.000 terbit 5 Oktober 2026 dan WP tidak memiliki utang pajak. Batas waktu pengembalian 1 bulan berakhir 5 November 2026, tetapi pengembalian baru dilakukan (SP2D terbit dan dana ditransfer ke rekening WP) pada 18 Januari 2027. Anggap tarif imbalan bunga per bulan yang berlaku 0,59% (uplift 0%), sedangkan tarif uplift 5% 1,01%. Imbalan bunga Pasal 11 ayat (3) yang diterima WP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.090.000", B: "Rp7.080.000", C: "Rp3.540.000", D: "Rp5.310.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Imbalan bunga Pasal 11 ayat (3) dihitung sejak batas waktu 1 bulan berakhir sampai pengembalian dilakukan, dengan tarif uplift 0%, bagian bulan dihitung penuh.",
        jejakHitung: [["5 Nov 2026 → 5 Jan 2027", "2 bulan"], ["5 Jan → 18 Jan 2027", "bagian bulan = 1"], ["Imbalan = 300.000.000 × 0,59% × 3", "Rp5.310.000"]],
        mengapaSalah: { A: "Memakai uplift 5% milik sanksi, bukan imbalan bunga.", B: "Dihitung sejak SKPLB terbit (4 bulan), bukan sejak batas 1 bulan berakhir.", C: "Bulan dibulatkan ke bawah (2 bulan)." },
        jebakan: "Imbalan bunga mulai setelah jatah 1 bulan DJP habis."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) dan (3) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK tarif bunga bulanan (uplift 0%)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Ketentuan imbalan bunga Pasal 11 ayat (3) bertanda ◐ dalam riset; tarif bulan November 2026 belum terbit saat penyusunan sehingga dinyatakan sebagai asumsi soal."
    },
    {
      id: "A2-047", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "PT Pelita (WP persyaratan tertentu) memperoleh pengembalian pendahuluan PPh Badan 2025 berdasarkan Pasal 17D. Pada 2026 DJP memeriksa dan menerbitkan SKPKB dengan kekurangan PPh Rp50.000.000 karena ternyata ada penghasilan yang tidak dilaporkan. Jumlah yang ditagih dalam SKPKB (pokok dan sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000.000, karena dikenai kenaikan 100%", B: "Rp50.000.000 ditambah bunga Pasal 13 ayat (2) uplift 15%", C: "Rp87.500.000, karena dikenai kenaikan 75%", D: "Rp50.000.000 tanpa sanksi karena pengembalian telah disetujui DJP" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "WP yang menerima pengembalian pendahuluan Pasal 17C/17D lalu terbit SKPKB dikenai kenaikan 100% dari jumlah kekurangan pembayaran pajak (Pasal 17C ayat (5) dan 17D ayat (5)).",
        jejakHitung: [["Kekurangan pajak", "Rp50.000.000"], ["Kenaikan 100%", "Rp50.000.000"], ["Jumlah SKPKB", "Rp100.000.000"]],
        mengapaSalah: { B: "Bunga Pasal 13 ayat (2) berlaku untuk PKP berisiko rendah, bukan WP 17C/17D.", C: "75% milik Pasal 13 ayat (3).", D: "Pengembalian pendahuluan tidak menghapus hak DJP memeriksa." },
        jebakan: "Jalur cepat restitusi dibayar mahal bila ternyata keliru."
      },
      dasarHukum: [{ pasal: "Pasal 17C ayat (5) dan 17D ayat (5) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 100, verifikasi: "◐",
      peringatan: "Kenaikan 100% Pasal 17C/17D bersumber dari riset 02b bertanda [P]; nomor ayat perlu dicek ke teks konsolidasi UU KUP."
    },
    {
      id: "A2-048", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Hijau Asri menerima SKPLB PPh Badan 2024 sebesar Rp75.000.000. Pada saat itu PT Hijau Asri masih mempunyai STP PPh Pasal 25 yang telah jatuh tempo dan belum dilunasi sebesar Rp12.400.000 (pokok Rp12.000.000 dan bunga Rp400.000), tanpa utang pajak lain. Jumlah yang dikembalikan (ditransfer) kepada WP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp75.000.000", B: "Rp63.000.000", C: "Rp62.600.000", D: "Rp87.400.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Kelebihan pembayaran dikembalikan setelah lebih dahulu diperhitungkan dengan utang pajak (pokok dan sanksi) yang dimiliki WP.",
        jejakHitung: [["SKPLB", "Rp75.000.000"], ["Utang STP (pokok + bunga)", "Rp12.400.000"], ["Dikembalikan", "Rp62.600.000"]],
        mengapaSalah: { A: "Tidak memperhitungkan utang pajak.", B: "Hanya pokok STP yang diperhitungkan, bunga dilupakan.", D: "Utang pajak justru ditambahkan." },
        jebakan: "Utang Pajak termasuk sanksi; kompensasi dilakukan sebelum transfer."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 1 UU PPSP (Utang Pajak)", berlakuSejak: "2000-08-02" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-049", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-A2-02",
      stem: "Data untuk soal vignette V-A2-02: CV Sumber Makmur menerima STP PPN tertanggal 6 Juli 2026 sebesar Rp185.000.000 dengan jatuh tempo pelunasan Kamis, 6 Agustus 2026. Sampai jatuh tempo, utang tidak dibayar dan tidak ada permohonan angsuran atau penundaan. Menurut UU PPSP dan PMK 61/2023, Surat Teguran paling cepat dapat diterbitkan pada ...",
      kataKualifikasi: ["paling cepat"],
      opsi: { A: "7 Agustus 2026", B: "14 Agustus 2026", C: "28 Agustus 2026", D: "6 September 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Surat Teguran diterbitkan setelah lewat 7 hari sejak jatuh tempo pelunasan.",
        jejakHitung: [["Jatuh tempo", "6 Agustus 2026"], ["Lewat 7 hari", "s.d. 13 Agustus 2026"], ["Paling cepat terbit", "14 Agustus 2026 (Jumat)"]],
        mengapaSalah: { A: "Sehari setelah jatuh tempo belum lewat 7 hari.", C: "21 hari adalah jeda Surat Teguran ke Surat Paksa.", D: "Tidak ada jeda 1 bulan untuk teguran." },
        jebakan: "Jatuh tempo +7 → teguran; teguran +21 → Surat Paksa."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) UU PPSP", berlakuSejak: "2000-08-02" }, { pasal: "PMK 61/2023 Pasal 5 dan 6", berlakuSejak: "2023-06-12" }, { pasal: "Pasal 9 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-050", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-A2-02",
      stem: "Lanjutan V-A2-02: Surat Teguran untuk CV Sumber Makmur (utang PPN Rp185.000.000, jatuh tempo 6 Agustus 2026) disampaikan Selasa, 18 Agustus 2026, dan utang tetap tidak dibayar. Surat Paksa diberitahukan pada tanggal paling cepat yang diperbolehkan, pukul 10.00. Linimasa yang benar adalah ...",
      kataKualifikasi: ["paling cepat"],
      opsi: {
        A: "Surat Paksa diberitahukan 9 September 2026; SPMP paling cepat setelah lewat 2 × 24 jam, yaitu 11 September 2026 setelah pukul 10.00",
        B: "Surat Paksa diberitahukan 25 Agustus 2026; SPMP paling cepat 27 Agustus 2026",
        C: "Surat Paksa diberitahukan 9 September 2026; SPMP paling cepat 23 September 2026",
        D: "Surat Paksa diberitahukan 27 Agustus 2026; SPMP paling cepat 29 Agustus 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Surat Paksa diterbitkan setelah lewat 21 hari sejak Surat Teguran disampaikan; penyitaan (SPMP) setelah lewat 2 × 24 jam sejak Surat Paksa diberitahukan.",
        jejakHitung: [["Teguran disampaikan", "18 Agustus 2026"], ["Lewat 21 hari", "s.d. 8 September 2026"], ["Surat Paksa paling cepat", "9 September 2026"], ["+ 2 × 24 jam", "11 September 2026 setelah pukul 10.00"]],
        mengapaSalah: { B: "Memakai 7 hari untuk Surat Paksa.", C: "14 hari adalah jeda pengumuman lelang/penyanderaan, bukan penyitaan.", D: "21 hari dihitung dari jatuh tempo, padahal dari Surat Teguran." },
        jebakan: "Patokan 21 hari adalah tanggal Surat Teguran disampaikan."
      },
      dasarHukum: [{ pasal: "Pasal 8 dan Pasal 12 ayat (1) UU PPSP", berlakuSejak: "2000-08-02" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-051", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"], kasusId: "V-A2-02",
      stem: "Lanjutan V-A2-02: utang pajak CV Sumber Makmur Rp185.000.000; Surat Paksa diberitahukan 9 September 2026. Jurusita menemukan bahwa direktur selaku Penanggung Pajak memindahkan aset ke kerabat sehingga itikad baiknya diragukan. Pernyataan yang tepat tentang penyanderaan terhadap direktur tersebut adalah ...",
      kataKualifikasi: ["paling cepat", "paling lama"],
      opsi: {
        A: "Dapat dilakukan segera setelah Surat Paksa diberitahukan karena utang pajak sudah lebih dari Rp100 juta",
        B: "Tidak dapat dilakukan karena utang pajak belum mencapai Rp500 juta",
        C: "Dapat dilakukan paling cepat 14 hari setelah Surat Paksa diberitahukan, dengan izin tertulis Menteri Keuangan, paling lama 6 bulan dan dapat diperpanjang paling lama 6 bulan",
        D: "Dapat dilakukan, dan setelah masa sandera berakhir utang pajak dianggap lunas"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyanderaan mensyaratkan utang paling sedikit Rp100 juta dan itikad baik diragukan (kumulatif), izin tertulis Menteri Keuangan/Gubernur, paling cepat 14 hari setelah Surat Paksa diberitahukan; jangka 6 bulan dapat diperpanjang 6 bulan; utang tidak hapus.",
        jejakHitung: [["Utang ≥ Rp100 juta", "Rp185.000.000 → terpenuhi"], ["Itikad baik diragukan", "terpenuhi"], ["Surat Paksa + 14 hari", "paling cepat setelah 23 September 2026"]],
        mengapaSalah: { A: "Ada jeda 14 hari dan izin Menteri.", B: "Ambang penyanderaan Rp100 juta.", D: "Penyanderaan tidak menghapus utang pajak." },
        jebakan: "Syarat penyanderaan kumulatif dan ada jeda waktu."
      },
      dasarHukum: [{ pasal: "Pasal 33 dan 34 UU PPSP", berlakuSejak: "2000-08-02" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-052", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "SKPKB PPh Badan 2019 PT Cendana diterbitkan 15 Maret 2021 dan tidak pernah dilunasi. Surat Paksa diberitahukan kepada Penanggung Pajak pada 20 Juni 2022; setelah itu tidak ada tindakan penagihan lain maupun pengakuan utang. Pada Oktober 2026 PT Cendana berpendapat utangnya sudah daluwarsa. Hak DJP untuk menagih utang tersebut daluwarsa pada ...",
      kataKualifikasi: [],
      opsi: { A: "15 Maret 2026, sehingga utang sudah daluwarsa", B: "31 Desember 2024, 5 tahun setelah Tahun Pajak 2019 berakhir", C: "15 Maret 2031", D: "20 Juni 2027" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Daluwarsa penagihan 5 tahun sejak ketetapan diterbitkan, tetapi tertangguh bila Surat Paksa diterbitkan; daluwarsa dihitung ulang sejak tanggal penyampaian Surat Paksa.",
        jejakHitung: [["Daluwarsa awal (15 Mar 2021 + 5 tahun)", "15 Maret 2026"], ["Tertangguh: Surat Paksa disampaikan", "20 Juni 2022"], ["Daluwarsa baru (+5 tahun)", "20 Juni 2027"]],
        mengapaSalah: { A: "Mengabaikan penangguhan karena Surat Paksa.", B: "Itu daluwarsa penetapan, bukan penagihan.", C: "Daluwarsa penagihan 5 tahun, bukan 10 tahun." },
        jebakan: "Daluwarsa penetapan ≠ daluwarsa penagihan; Surat Paksa me-reset hitungan."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) dan (2) huruf a UU KUP beserta penjelasannya", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-053", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "Jurusita Pajak dapat melakukan penagihan seketika dan sekaligus terhadap Penanggung Pajak tanpa menunggu tanggal jatuh tempo pembayaran apabila terdapat keadaan tertentu. Keadaan berikut termasuk alasan penagihan seketika dan sekaligus, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Penanggung Pajak akan meninggalkan Indonesia untuk selama-lamanya",
        B: "Penanggung Pajak memindahtangankan barang yang dimiliki atau dikuasai untuk menghentikan atau mengecilkan kegiatan usaha",
        C: "Wajib Pajak mengajukan keberatan atas SKPKB yang belum jatuh tempo",
        D: "Terdapat tanda-tanda badan usaha akan dibubarkan, digabungkan, atau dimekarkan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Alasan penagihan seketika dan sekaligus menyangkut risiko hilangnya jaminan pelunasan (meninggalkan Indonesia, memindahtangankan harta, pembubaran/penggabungan, pembubaran oleh negara, penyitaan pihak ketiga/kepailitan); mengajukan keberatan adalah hak WP dan justru menangguhkan sebagian pembayaran.",
        jejakHitung: [],
        mengapaSalah: { A: "Termasuk alasan Pasal 6 UU PPSP.", B: "Termasuk alasan Pasal 6 UU PPSP.", D: "Termasuk alasan Pasal 6 UU PPSP." },
        jebakan: "Keberatan bukan tanda niat menghindari pelunasan."
      },
      dasarHukum: [{ pasal: "Pasal 6 UU PPSP", berlakuSejak: "2000-08-02" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 60, verifikasi: "◐",
      peringatan: "Daftar alasan seketika-sekaligus bertanda ◐ dalam riset (teks UU PPSP tidak terbaca langsung)."
    },
    {
      id: "A2-054", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Berdasarkan SPMP, Jurusita menyita dari PT Sinar Laut: (1) tanah dan bangunan gudang; (2) deposito Rp250.000.000 di bank; (3) dua unit truk. Utang pajak tidak juga dilunasi. Pernyataan yang tepat tentang tindak lanjut atas barang sitaan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Seluruh barang, termasuk deposito, dijual melalui lelang setelah lewat 14 hari sejak pengumuman lelang",
        B: "Deposito dipindahbukukan untuk melunasi utang tanpa lelang; gudang dan truk dilelang setelah pengumuman lelang (paling cepat lewat 14 hari sejak penyitaan) dan pelaksanaan lelang (lewat 14 hari sejak pengumuman)",
        C: "Lelang gudang dan truk dapat langsung dilakukan tanpa pengumuman bila nilainya melebihi Rp100 juta",
        D: "Gudang dan truk dilelang setelah lewat 2 × 24 jam sejak penyitaan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Barang tertentu (uang tunai, deposito, saham, obligasi, piutang) dipindahbukukan/dijual tanpa lelang; barang lain dilelang dengan urutan sita → lewat 14 hari → pengumuman lelang → lewat 14 hari → lelang.",
        jejakHitung: [["Penyitaan", "hari ke-0"], ["Pengumuman lelang", "setelah lewat 14 hari"], ["Lelang", "setelah lewat 14 hari sejak pengumuman"]],
        mengapaSalah: { A: "Deposito tidak dilelang.", C: "Pengumuman lelang wajib; tidak ada pengecualian karena nilai.", D: "2 × 24 jam adalah jeda Surat Paksa ke penyitaan." },
        jebakan: "Urutan angka: 7 – 21 – 2×24 jam – 14 – 14."
      },
      dasarHukum: [{ pasal: "Pasal 25 dan 26 UU PPSP", berlakuSejak: "2000-08-02" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Jeda 14 + 14 hari dan perlakuan barang tertentu bertanda ◐ dalam riset (teks UU PPSP Pasal 25–26 tidak terbaca langsung)."
    },
    {
      id: "A2-055", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "SK Keberatan atas SKPKB PPh Pasal 26 PT Orbit Teknologi diterbitkan 2 Juni 2026 dan diterima WP 5 Juni 2026 (abaikan pergeseran karena hari libur). WP tidak setuju dan ingin membawa sengketa ke Pengadilan Pajak. Pernyataan yang tepat tentang tenggat banding dan jangka waktu putusannya adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "Banding paling lama 5 September 2026; putusan paling lama 12 bulan sejak surat banding diterima dan dapat diperpanjang 3 bulan",
        B: "Banding paling lama 2 September 2026, dihitung sejak SK Keberatan diterbitkan",
        C: "Banding paling lama 5 Juli 2026 (30 hari), seperti gugatan atas keputusan",
        D: "Banding paling lama 5 September 2026; putusan paling lama 6 bulan sejak surat banding diterima"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Banding diajukan paling lama 3 bulan sejak SK Keberatan diterima; Pengadilan Pajak memutus paling lama 12 bulan sejak surat banding diterima, dapat diperpanjang 3 bulan.",
        jejakHitung: [["SK Keberatan diterima", "5 Juni 2026"], ["+ 3 bulan", "5 September 2026"]],
        mengapaSalah: { B: "Patokan banding adalah tanggal diterima, bukan diterbitkan.", C: "30 hari milik gugatan atas keputusan lain.", D: "6 bulan adalah jangka putusan gugatan." },
        jebakan: "Keberatan dihitung sejak dikirim; banding sejak diterima."
      },
      dasarHukum: [{ pasal: "Pasal 35 ayat (2) dan Pasal 81 ayat (1) UU 14/2002", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 27 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-056", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Surat Paksa atas utang PPN PT Laras Niaga diberitahukan pada Rabu, 9 September 2026, tetapi diserahkan oleh pegawai KPP yang bukan Jurusita Pajak dan tanpa berita acara. PT Laras Niaga ingin mempersoalkan cacat prosedur pelaksanaan Surat Paksa tersebut. Upaya hukum dan tenggat yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Banding paling lambat 9 Desember 2026", B: "Gugatan paling lambat 9 Oktober 2026 (30 hari)", C: "Gugatan paling lambat 23 September 2026 (14 hari)", D: "Keberatan paling lambat 11 September 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pelaksanaan Surat Paksa, SPMP, atau pengumuman lelang adalah objek gugatan (Pasal 23 ayat (2) UU KUP) yang diajukan paling lama 14 hari sejak tanggal pelaksanaan penagihan.",
        jejakHitung: [["Pelaksanaan Surat Paksa", "9 September 2026"], ["+ 14 hari", "23 September 2026"]],
        mengapaSalah: { A: "Banding hanya atas SK Keberatan.", B: "30 hari untuk gugatan atas keputusan selain pelaksanaan penagihan.", D: "Keberatan hanya atas SKP dan pemotongan/pemungutan." },
        jebakan: "Tindakan penagihan → gugatan 14 hari."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (2) huruf a UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A2-057", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 27 ayat (5d) UU KUP (parafrase setia): Dalam hal permohonan banding ditolak atau dikabulkan sebagian, Wajib Pajak dikenai sanksi administratif berupa denda sebesar 60% dari jumlah pajak berdasarkan Putusan Banding dikurangi dengan pembayaran pajak yang telah dibayar sebelum mengajukan keberatan.",
      stem: "PT Orbit Teknologi menerima SKPKB PPh Pasal 26 dengan pokok Rp420.000.000. Sebelum keberatan, WP melunasi pokok yang disetujui dalam PAHP Rp150.000.000. SK Keberatan menolak seluruhnya; WP mengajukan banding, dan Putusan Banding mengabulkan sebagian sehingga pokok menjadi Rp345.000.000. Dasar denda dihitung dari pokok pajak. Berdasarkan kutipan, denda yang dikenakan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp58.500.000", B: "Rp195.000.000", C: "Rp207.000.000", D: "Rp117.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", C: "salah-hitung" },
      pembahasan: {
        inti: "Denda banding 60% × (pajak menurut Putusan Banding − pembayaran sebelum keberatan); denda keberatan 30% tidak dikenakan karena WP banding.",
        jejakHitung: [["Pokok menurut Putusan Banding", "Rp345.000.000"], ["Dibayar sebelum keberatan", "Rp150.000.000"], ["Dasar denda", "Rp195.000.000"], ["Denda 60%", "Rp117.000.000"]],
        mengapaSalah: { A: "Memakai 30% milik keberatan.", B: "Memakai denda 100% sebelum UU HPP.", C: "60% × Rp345.000.000 tanpa mengurangi pembayaran sebelum keberatan." },
        jebakan: "Pengurang selalu 'yang dibayar sebelum keberatan', bukan sebelum banding."
      },
      dasarHukum: [{ pasal: "Pasal 27 ayat (5d) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 25 ayat (10) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-058", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "Putusan Banding yang menolak banding PT Delima Jaya diucapkan dan dikirim 3 Agustus 2026. Pada 10 September 2026 WP menemukan surat bukti yang bersifat menentukan (novum) yang ketika perkara diperiksa tidak dapat ditemukan; penemuan itu dinyatakan di bawah sumpah dan disahkan pejabat berwenang. WP ingin mengajukan Peninjauan Kembali. Pernyataan yang tepat adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "PK paling lambat 3 November 2026 karena dihitung sejak putusan dikirim",
        B: "PK paling lambat 10 Desember 2026; PK tidak menangguhkan pelaksanaan Putusan Banding",
        C: "PK paling lambat 10 Desember 2026; selama PK diperiksa, pelunasan pajak tertangguh",
        D: "Mengajukan kasasi ke Mahkamah Agung dalam 14 hari sejak putusan diterima"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PK dengan alasan novum diajukan paling lama 3 bulan sejak ditemukan surat bukti yang hari dan tanggal ditemukannya dinyatakan di bawah sumpah; PK hanya sekali dan tidak menangguhkan pelaksanaan putusan.",
        jejakHitung: [["Novum ditemukan", "10 September 2026"], ["+ 3 bulan", "10 Desember 2026"]],
        mengapaSalah: { A: "Patokan 'sejak putusan dikirim' untuk alasan lain (Pasal 91 huruf c–e).", C: "Pasal 89 UU 14/2002: PK tidak menangguhkan pelaksanaan putusan.", D: "Putusan Pengadilan Pajak bersifat akhir; tidak ada kasasi." },
        jebakan: "Titik awal 3 bulan PK bergantung pada alasan PK."
      },
      dasarHukum: [{ pasal: "Pasal 77, 89, 91, dan 92 UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-059", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Sejak Putusan Mahkamah Konstitusi Nomor 26/PUU-XXI/2023 (dibacakan 25 Mei 2023), kedudukan Pengadilan Pajak mengalami perubahan kelembagaan yang tenggatnya jatuh pada akhir 2026. Pernyataan yang tepat mengenai putusan tersebut adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "Pembinaan organisasi, administrasi, dan keuangan Pengadilan Pajak dialihkan dari Kementerian Keuangan ke Mahkamah Agung paling lambat 31 Desember 2026",
        B: "Pembinaan teknis peradilan dialihkan dari Kementerian Keuangan ke Mahkamah Agung paling lambat 31 Desember 2026",
        C: "Pengadilan Pajak dibubarkan dan sengketa pajak dialihkan ke PTUN mulai 2024",
        D: "Putusan Pengadilan Pajak kini dapat diajukan kasasi ke Mahkamah Agung"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "MK menyatakan Pasal 5 ayat (2) UU 14/2002 inkonstitusional sepanjang pembinaan organisasi, administrasi, dan keuangan masih di Kementerian Keuangan; pengalihan ke MA paling lambat 31 Desember 2026. Per Oktober 2026, R-Perpres pengalihan masih harmonisasi.",
        jejakHitung: [],
        mengapaSalah: { B: "Pembinaan teknis peradilan sejak awal sudah oleh MA.", C: "Pengadilan Pajak tidak dibubarkan.", D: "Putusan tetap akhir; upaya luar biasa hanya PK." },
        jebakan: "Yang berpindah adalah 'organisasi, administrasi, keuangan', bukan pembinaan teknis."
      },
      dasarHukum: [{ pasal: "Putusan MK 26/PUU-XXI/2023", berlakuSejak: "2023-05-25" }, { pasal: "Pasal 5 dan 77 UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "A2-060", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "KPP menemukan empat peristiwa pada PT Wahana Karya (PKP, tahun buku kalender): (i) angsuran PPh Pasal 25 Masa Juli dan Agustus 2026 tidak dibayar; (ii) pemeriksaan atas SPT Tahunan PPh Badan 2024 yang disampaikan tepat waktu menemukan biaya fiktif sehingga PPh kurang dibayar; (iii) SPT Tahunan PPh Badan 2023 tidak disampaikan dan tetap tidak disampaikan setelah ditegur secara tertulis, lalu pemeriksaan menemukan PPh kurang dibayar; (iv) SPT Masa PPN Masa Maret 2024 tidak disampaikan setelah ditegur secara tertulis, lalu pemeriksaan menemukan PPN kurang dibayar. Pasangan produk hukum dan sanksi administratif atas pokok pajaknya yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(i) STP berisi pokok dan bunga uplift 5%; (iv) SKPKB dengan bunga uplift 20%",
        B: "(ii) SKPKB dengan kenaikan 75%; (iii) SKPKB dengan bunga uplift 20%",
        C: "(i) STP berisi pokok dan bunga uplift 5%; (iii) SKPKB dengan bunga uplift 20%",
        D: "(ii) STP berisi pokok dan bunga uplift 15%; (iv) SKPKB dengan kenaikan 75%"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh tahun berjalan yang tidak dibayar ditagih dengan STP (Pasal 14 ayat (1) huruf a) beserta bunga uplift 5% (Pasal 14 ayat (3)). SPT yang tetap tidak disampaikan setelah ditegur melahirkan SKPKB Pasal 13 ayat (1) huruf b: PPh kurang dibayar dikenai bunga uplift 20% (Pasal 13 ayat (3) huruf a), sedangkan PPN kurang dibayar dikenai kenaikan 75% (huruf d). Temuan pemeriksaan biasa (ii) ditetapkan dengan SKPKB berbunga uplift 15% (Pasal 13 ayat (2)).",
        jejakHitung: [["(i) PPh 25 tahun berjalan tidak dibayar", "STP + bunga uplift 5% (Ps. 14 ayat (3))"], ["(ii) SPT tepat waktu, koreksi pemeriksaan", "SKPKB + bunga uplift 15% (Ps. 13 ayat (2))"], ["(iii) SPT PPh tidak disampaikan setelah ditegur", "SKPKB + bunga uplift 20% (Ps. 13 ayat (3) huruf a)"], ["(iv) SPT PPN tidak disampaikan setelah ditegur", "SKPKB + kenaikan 75% (Ps. 13 ayat (3) huruf d)"]],
        mengapaSalah: { A: "Pasangan (iv) keliru: PPN kurang dibayar dalam SKPKB Pasal 13 ayat (1) huruf b dikenai kenaikan 75%, bukan bunga uplift 20%.", B: "Pasangan (ii) keliru: SKPKB hasil pemeriksaan atas SPT yang disampaikan (huruf a) dikenai bunga uplift 15%; kenaikan 75% hanya untuk huruf b–d.", D: "Pasangan (ii) keliru: kekurangan pajak hasil pemeriksaan ditetapkan dengan SKPKB, bukan ditagih dengan STP." },
        jebakan: "Kata 'ditegur' memindahkan sanksi dari Pasal 13 ayat (2) ke ayat (3), lalu jenis pajaknya (PPh atau PPN) menentukan bunga atau kenaikan."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf a dan b, ayat (2), dan ayat (3) huruf a dan d UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 14 ayat (1) huruf a dan ayat (3) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A2-061", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "Hasil penelitian KPP atas PT Sagara Prima (PKP, tahun buku kalender) per akhir November 2026: (1) SPT Masa PPN Masa Agustus 2026 (kurang bayar Rp18.500.000 yang telah disetor 29 September 2026) baru disampaikan Jumat, 2 Oktober 2026; (2) faktur pajak atas penyerahan BKP 8 Juni 2026 dengan DPP Rp80.000.000 baru dibuat 14 Oktober 2026 sehingga dianggap tidak membuat faktur pajak; (3) PPh Pasal 23 Masa September 2026 Rp12.000.000 disetor, dan SPT Masa PPh Unifikasi-nya disampaikan, pada Senin, 19 Oktober 2026; (4) SKPKB PPh Badan 2024 hasil pemeriksaan (pokok Rp50.000.000 dan bunga Pasal 13 ayat (2) Rp18.400.000) terbit 2 Oktober 2026 dan telah dilunasi seluruhnya 20 Oktober 2026. Tarif KMK Oktober 2026: uplift 0% = 0,59%; 5% = 1,01%; 15% = 1,84%. Jumlah sanksi administratif yang ditagih melalui STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.300.000", B: "Rp2.221.200", C: "Rp1.021.200", D: "Rp1.421.200" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "STP menagih denda dan bunga yang berdiri sendiri: denda SPT Masa PPN terlambat Rp500.000 (Pasal 7 ayat (1)), denda faktur 1% × DPP (Pasal 14 ayat (4)), dan bunga Pasal 9 ayat (2a) atas PPh 23 yang disetor setelah tanggal 15. Bunga dalam SKPKB sudah ditetapkan di SKPKB itu sendiri dan SKPKB dilunasi sebelum jatuh tempo, sehingga tidak ada STP Pasal 19.",
        jejakHitung: [["(1) SPT Masa PPN Agustus terlambat (batas 30 Sep 2026)", "Rp500.000"], ["(2) Denda faktur 1% × Rp80.000.000", "Rp800.000"], ["(3) Jatuh tempo setor 15 Okt → setor 19 Okt 2026", "bagian bulan = 1 bulan"], ["Bunga Ps. 9 ayat (2a) = 12.000.000 × 1,01% × 1", "Rp121.200"], ["(4) SKPKB: bunga di dalam SKPKB, lunas sebelum jatuh tempo 2 Nov 2026", "Rp0 di STP"], ["Total STP", "Rp1.421.200"]],
        mengapaSalah: { A: "Menganggap PPh 23 bebas sanksi karena SPT Masa Unifikasi tepat waktu, padahal setorannya lewat tanggal 15.", B: "Memakai denda faktur 2% × DPP sebelum UU HPP.", C: "SPT Masa PPN terlambat didenda Rp500.000, bukan Rp100.000." },
        jebakan: "Data SKPKB dan PPN kurang bayar sengaja disisipkan: yang ditagih STP hanya sanksi yang tidak tercantum dalam ketetapan lain."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) dan Pasal 14 ayat (1) dan (4) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-062", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-A2-04",
      stem: "Data untuk soal vignette V-A2-04: PT Kaliandra Mitra (tahun buku kalender) menerima SKPKB PPh Badan Tahun Pajak 2024 yang diterbitkan dan dikirim Senin, 20 Juli 2026 dengan pokok Rp400.000.000 ditambah bunga Pasal 13 ayat (2); jatuh tempo pelunasannya 20 Agustus 2026. Dalam PAHP, WP menyetujui koreksi dengan pokok Rp90.000.000 dan melunasinya 18 Agustus 2026. Sisa SKPKB tidak dibayar, dan KPP menyampaikan Surat Teguran pada Selasa, 1 September 2026. Surat keberatan (satu surat untuk SKPKB tersebut, berbahasa Indonesia, memuat jumlah pajak terutang menurut WP beserta alasannya) disampaikan lewat Portal Wajib Pajak dan diterima Senin, 14 September 2026; belum ada Surat Paksa. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Keberatan memenuhi tenggat, tetapi pengajuan keberatan tidak menunda kewajiban membayar dan pelaksanaan penagihan, sehingga Surat Paksa atas sisa SKPKB tetap dapat diterbitkan setelah lewat 21 hari sejak Surat Teguran; DJP wajib memutus keberatan paling lama 14 September 2027",
        B: "Keberatan memenuhi tenggat (paling lambat 20 Oktober 2026) dan syarat pelunasan; jangka waktu pelunasan sisa SKPKB yang belum dibayar tertangguh sampai 1 bulan sejak SK Keberatan diterbitkan sehingga penagihan atas sisa itu tidak dilanjutkan dengan Surat Paksa; DJP wajib memutus keberatan paling lama 14 September 2027",
        C: "Keberatan tidak memenuhi syarat karena Surat Teguran telah disampaikan sebelum keberatan diajukan, sehingga WP harus melunasi seluruh SKPKB lebih dahulu",
        D: "Keberatan memenuhi tenggat dan syarat pelunasan; jangka waktu pelunasan sisa SKPKB tertangguh sampai 1 bulan sejak SK Keberatan diterbitkan; DJP wajib memutus keberatan paling lama 20 Juli 2027, yaitu 12 bulan sejak SKPKB dikirim"
      },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Keberatan diajukan paling lama 3 bulan sejak SKPKB dikirim (20 Oktober 2026) setelah melunasi jumlah yang disetujui dalam PAHP. Sejak keberatan diajukan, jangka waktu pelunasan atas jumlah yang belum dibayar tertangguh sampai 1 bulan sejak SK Keberatan (Pasal 25 ayat (7)), sehingga Surat Teguran yang sudah terbit tidak dilanjutkan dengan Surat Paksa atas sisa itu. DJP memutus paling lama 12 bulan sejak surat keberatan diterima.",
        jejakHitung: [["SKPKB dikirim", "20 Juli 2026"], ["Tenggat keberatan (+3 bulan)", "20 Oktober 2026"], ["Jumlah PAHP dilunasi sebelum keberatan", "Rp90.000.000 (18 Agustus 2026)"], ["Surat Teguran sah (jatuh tempo 20 Agu, lewat 7 hari)", "paling cepat 28 Agustus; disampaikan 1 September 2026"], ["Keberatan diterima", "14 September 2026"], ["Batas keputusan (+12 bulan)", "14 September 2027"]],
        mengapaSalah: { A: "Rumusan 'keberatan tidak menunda kewajiban membayar dan pelaksanaan penagihan' berasal dari UU KUP sebelum UU 28/2007; sejak 2008 jumlah yang belum dibayar saat keberatan tertangguh (Pasal 25 ayat (7)).", C: "Surat Teguran tidak menggugurkan hak keberatan; syarat pelunasan hanya sejumlah yang disetujui dalam PAHP.", D: "Jangka 12 bulan dihitung sejak surat keberatan diterima (Pasal 26 ayat (1)), bukan sejak SKPKB dikirim." },
        jebakan: "Tiga titik awal berbeda dalam satu kasus: keberatan sejak SKP dikirim, Surat Teguran sejak jatuh tempo, keputusan sejak keberatan diterima."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (3), (3a), dan (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 26 ayat (1) dan (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" }, { pasal: "PMK 61/2023 Pasal 6 (Surat Teguran)", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-063", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-A2-04",
      stem: "Lanjutan V-A2-04: keberatan PT Kaliandra Mitra atas SKPKB PPh Badan 2024 (pokok Rp400.000.000; pokok Rp90.000.000 yang disetujui dalam PAHP telah dilunasi sebelum keberatan) ditolak seluruhnya melalui SK Keberatan yang diterbitkan Jumat, 6 Agustus 2027 dan diterima WP Senin, 9 Agustus 2027. WP ingin melanjutkan sengketa ke tingkat berikutnya. Dengan mengabaikan pergeseran hari libur, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lama"],
      opsi: {
        A: "Banding diajukan ke Pengadilan Pajak paling lama 6 November 2027 karena tenggat dihitung sejak SK Keberatan diterbitkan; sisa jumlah SKPKB yang belum dibayar tetap tertangguh sampai 1 bulan sejak Putusan Banding diterbitkan",
        B: "Gugatan diajukan ke Pengadilan Pajak paling lama 8 September 2027 (30 hari sejak SK Keberatan diterima) karena SK Keberatan merupakan keputusan DJP; sisa jumlah SKPKB yang belum dibayar tertangguh sampai 1 bulan sejak putusan gugatan",
        C: "Banding diajukan secara tertulis dalam bahasa Indonesia ke Pengadilan Pajak paling lama 9 November 2027, satu Surat Banding untuk satu SK Keberatan dengan salinan SK Keberatan dilampirkan; sisa jumlah SKPKB yang belum dibayar tetap tertangguh sampai 1 bulan sejak Putusan Banding diterbitkan",
        D: "Banding diajukan secara tertulis dalam bahasa Indonesia ke Pengadilan Pajak paling lama 9 November 2027, tetapi sisa jumlah SKPKB yang belum dibayar jatuh tempo 1 bulan sejak SK Keberatan diterbitkan karena penangguhan hanya berlaku selama proses keberatan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Banding atas SK Keberatan diajukan ke Pengadilan Pajak paling lama 3 bulan sejak SK Keberatan diterima, tertulis dalam bahasa Indonesia, satu Surat Banding untuk satu keputusan dengan salinan keputusan dilampirkan. Pasal 27 ayat (5a) UU KUP melanjutkan penangguhan pelunasan atas jumlah yang belum dibayar saat keberatan sampai 1 bulan sejak Putusan Banding.",
        jejakHitung: [["SK Keberatan diterima", "9 Agustus 2027"], ["+ 3 bulan", "9 November 2027"], ["Sisa yang belum dibayar saat keberatan", "tertangguh s.d. 1 bulan sejak Putusan Banding"]],
        mengapaSalah: { A: "Tenggat banding dihitung sejak SK Keberatan diterima, bukan diterbitkan.", B: "SK Keberatan adalah objek banding (Pasal 27 ayat (1) UU KUP), bukan gugatan; 30 hari milik gugatan atas keputusan lain.", D: "Penangguhan berlanjut bila WP banding (Pasal 27 ayat (5a)); jatuh tempo 1 bulan sejak SK Keberatan hanya berlaku bila WP tidak banding." },
        jebakan: "Keberatan dihitung sejak SKP dikirim, banding sejak SK Keberatan diterima; penangguhan pelunasan ikut berlanjut sampai Putusan Banding."
      },
      dasarHukum: [{ pasal: "Pasal 27 ayat (1) dan (5a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 35 dan 36 UU 14/2002", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 25 ayat (7) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-064", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "KPP Pratama di Medan memetakan pihak-pihak berikut untuk kewajiban mendaftarkan diri (NPWP atau aktivasi NIK sebagai NPWP): (1) Kantor Konsulat Jenderal Negara Valdoria di Medan; (2) Tuan Halim, WNI pengusaha sawit yang diangkat menjadi Konsul Kehormatan Negara Oskaria; (3) Mr. Erik Lund, warga negara Valdoria, Konsul Jenderal, tanpa penghasilan lain di Indonesia, dan Valdoria memberikan perlakuan timbal balik; (4) Ms. Mara Ilic, warga negara Kestria, atase kebudayaan Kedutaan Kestria yang tinggal di Medan, tanpa penghasilan lain di Indonesia, tetapi Kestria tidak memberikan perlakuan timbal balik kepada Indonesia; (5) Dr. Lena Park, WNA, pejabat perwakilan organisasi internasional yang ditetapkan dalam PMK (Indonesia anggota), tidak menjalankan usaha atau pekerjaan lain di Indonesia. Pihak yang tetap merupakan subjek pajak sehingga wajib mendaftarkan diri bila memenuhi syarat objektif adalah ...",
      kataKualifikasi: ["tetap"],
      opsi: { A: "(2) dan (4)", B: "(2) saja", C: "(2), (4), dan (5)", D: "(1), (2), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) UU PPh mengecualikan kantor perwakilan negara asing; pejabat diplomatik/konsulat yang bukan WNI, tidak berpenghasilan lain di Indonesia, dan negaranya memberi perlakuan timbal balik; organisasi internasional yang ditetapkan PMK; serta pejabatnya yang bukan WNI dan tidak menjalankan usaha atau pekerjaan lain di Indonesia. Konsul kehormatan WNI dan diplomat dari negara tanpa timbal balik tidak memenuhi syarat sehingga tetap subjek pajak dan tunduk pada kewajiban pendaftaran Pasal 2 UU KUP.",
        jejakHitung: [["(1) Kantor konsulat negara asing", "bukan subjek pajak (huruf a)"], ["(2) Konsul kehormatan WNI", "subjek pajak: syarat bukan WNI gugur"], ["(3) Konsul Jenderal WNA, tanpa penghasilan lain, timbal balik", "bukan subjek pajak (huruf b)"], ["(4) Atase WNA, tanpa timbal balik", "subjek pajak: syarat timbal balik gugur"], ["(5) Pejabat organisasi internasional, tanpa pekerjaan lain", "bukan subjek pajak (huruf d)"]],
        mengapaSalah: { B: "Melewatkan syarat perlakuan timbal balik yang menggugurkan pengecualian bagi Ms. Mara Ilic.", C: "Pejabat organisasi internasional yang bukan WNI dan tidak menjalankan pekerjaan lain dikecualikan (huruf d).", D: "Kantor perwakilan negara asing dikecualikan dari subjek pajak (huruf a)." },
        jebakan: "Pengecualian melekat pada syarat kumulatif, bukan pada gelar 'konsul' atau 'atase'."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a–d dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) dan (1a) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-065", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf b UU PPh (parafrase setia): Tidak termasuk subjek pajak adalah pejabat perwakilan diplomatik dan konsulat atau pejabat lain dari negara asing dan orang-orang yang diperbantukan kepada mereka yang bekerja pada dan bertempat tinggal bersama-sama mereka, dengan syarat bukan warga negara Indonesia dan di Indonesia tidak menerima atau memperoleh penghasilan di luar jabatan atau pekerjaannya tersebut, serta negara bersangkutan memberikan perlakuan timbal balik.",
      stem: "Mr. Ivo Rask, warga negara Oskaria, menjabat Konsul pada Konsulat Jenderal Oskaria di Surabaya sejak Januari 2025. Ia tinggal di rumah dinas bersama Mr. Pavel Dorn, warga negara Oskaria yang diperbantukan sebagai sopirnya dan tidak memiliki penghasilan lain di Indonesia, serta Bu Narti, WNI yang dipekerjakan sebagai juru masak dan tinggal di rumah dinas itu. Sejak Februari 2026 Mr. Rask menerima bunga deposito pribadinya pada bank di Surabaya, yang telah dipotong PPh final 20% oleh bank. Oskaria memberikan perlakuan timbal balik kepada Indonesia. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Mr. Rask bukan subjek pajak karena berstatus pejabat konsulat dan Oskaria memberikan perlakuan timbal balik; Mr. Pavel bukan subjek pajak; Bu Narti tetap subjek pajak dalam negeri karena pengecualian tidak berlaku bagi WNI",
        B: "Mr. Rask merupakan subjek pajak karena memperoleh penghasilan di luar jabatannya di Indonesia; Mr. Pavel dan Bu Narti bukan subjek pajak karena diperbantukan dan bertempat tinggal bersama pejabat konsulat",
        C: "Mr. Rask bukan subjek pajak karena bunga depositonya telah dikenai PPh final sehingga tidak dihitung sebagai penghasilan di luar jabatan; Mr. Pavel bukan subjek pajak; Bu Narti tetap subjek pajak dalam negeri karena pengecualian tidak berlaku bagi WNI",
        D: "Mr. Rask merupakan subjek pajak karena memperoleh penghasilan di luar jabatannya di Indonesia; Mr. Pavel bukan subjek pajak; Bu Narti tetap subjek pajak dalam negeri karena pengecualian tidak berlaku bagi WNI"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Syarat pengecualian Pasal 3 ayat (1) huruf b kumulatif: bukan WNI, tidak memperoleh penghasilan lain di Indonesia di luar jabatan, dan ada perlakuan timbal balik. Bunga deposito pribadi adalah penghasilan di luar jabatan sehingga pengecualian Mr. Rask gugur; sifat final PPh-nya tidak relevan. Mr. Pavel memenuhi semua syarat orang yang diperbantukan, sedangkan Bu Narti WNI sehingga tetap subjek pajak.",
        jejakHitung: [["Mr. Rask: bukan WNI, timbal balik", "terpenuhi"], ["Mr. Rask: penghasilan lain di Indonesia (bunga deposito)", "ada → pengecualian gugur"], ["Mr. Pavel: diperbantukan, tinggal bersama, bukan WNI, tanpa penghasilan lain", "bukan subjek pajak"], ["Bu Narti: WNI", "tetap subjek pajak dalam negeri"]],
        mengapaSalah: { A: "Mengabaikan syarat 'tidak menerima atau memperoleh penghasilan di luar jabatan' dalam kutipan.", B: "Syarat 'bukan warga negara Indonesia' berlaku juga bagi orang yang diperbantukan; Bu Narti WNI.", C: "Kutipan tidak membedakan penghasilan final dan tidak final; setiap penghasilan di luar jabatan menggugurkan pengecualian." },
        jebakan: "PPh final atas bunga deposito tidak menghapus penghasilannya: penghasilan itu tetap ada dan menggugurkan syarat."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (1) dan (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A2-066", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Nirwana Kargo (bukan anggota grup usaha, tanpa indikasi transfer pricing) menerima SP2 pemeriksaan spesifik atas SPT Masa PPh Pasal 23 Masa Juni 2026 pada Senin, 5 Oktober 2026; pemeriksaan itu tidak termasuk kriteria yang harus diselesaikan dalam 10 hari kerja. Manajer pajak menyiapkan empat ringkasan ketentuan PMK 15/2025 untuk direksi yang hanya berbeda pada satu frasa. Ringkasan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lama"],
      opsi: {
        A: "Jangka waktu pengujian paling lama 1 bulan sejak SP2 disampaikan sampai SPHP disampaikan (5 November 2026); sebelum SPHP wajib dilakukan Pembahasan Temuan Sementara; tanggapan atas SPHP paling lama 5 hari kerja; PAHP dan pelaporan paling lama 30 hari kerja sejak SPHP disampaikan",
        B: "Jangka waktu pengujian paling lama 1 bulan sejak SP2 disampaikan sampai SPHP disampaikan (5 November 2026); sebelum SPHP tidak wajib dilakukan Pembahasan Temuan Sementara; tanggapan atas SPHP paling lama 7 hari kerja; PAHP dan pelaporan paling lama 30 hari kerja sejak SPHP disampaikan",
        C: "Jangka waktu pengujian paling lama 1 bulan sejak SP2 disampaikan sampai SPHP disampaikan (5 November 2026); sebelum SPHP tidak wajib dilakukan Pembahasan Temuan Sementara; tanggapan atas SPHP paling lama 5 hari kerja; PAHP dan pelaporan paling lama 30 hari kerja sejak SPHP disampaikan",
        D: "Jangka waktu pengujian paling lama 3 bulan sejak SP2 disampaikan sampai SPHP disampaikan (5 Januari 2027); sebelum SPHP tidak wajib dilakukan Pembahasan Temuan Sementara; tanggapan atas SPHP paling lama 5 hari kerja; PAHP dan pelaporan paling lama 30 hari kerja sejak SPHP disampaikan"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PMK 15/2025: pemeriksaan spesifik diuji paling lama 1 bulan (10 hari kerja hanya untuk kriteria tertentu) dan dikecualikan dari kewajiban Pembahasan Temuan Sementara; tanggapan SPHP 5 hari kerja serta PAHP dan pelaporan 30 hari kerja berlaku umum.",
        jejakHitung: [["SP2 disampaikan", "Senin, 5 Oktober 2026"], ["+ 1 bulan (spesifik)", "SPHP paling lambat 5 November 2026"], ["Pembahasan Temuan Sementara", "dikecualikan untuk pemeriksaan spesifik"], ["Tanggapan SPHP / PAHP dan pelaporan", "5 hari kerja / 30 hari kerja"]],
        mengapaSalah: { A: "Pemeriksaan spesifik justru dikecualikan dari kewajiban Pembahasan Temuan Sementara.", B: "7 hari kerja adalah ketentuan PMK 17/2013 jo. 184/2015 yang dicabut PMK 15/2025.", D: "3 bulan adalah jangka pemeriksaan terfokus." },
        jebakan: "Empat ringkasan nyaris identik: periksa satu per satu kata 'wajib/tidak wajib', jumlah hari, dan jenis pemeriksaan."
      },
      dasarHukum: [{ pasal: "PMK 15/2025 (jenis dan jangka waktu pemeriksaan, Pembahasan Temuan Sementara, tanggapan SPHP, PAHP)", berlakuSejak: "2025-02-14" }, { pasal: "Pasal 29 UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A2-067", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Berdasarkan SPMP, Jurusita Pajak menyita dua truk milik CV Nusa Bahari pada Kamis, 8 Oktober 2026. CV Nusa Bahari menilai penyitaan itu cacat prosedur karena Surat Paksa tidak pernah diberitahukan secara sah, dan ingin menempuh upaya hukum agar truknya tidak segera dilelang. Kuasa hukumnya menyiapkan empat ringkasan yang hanya berbeda pada satu frasa. Ringkasan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lama"],
      opsi: {
        A: "Gugatan ke Pengadilan Pajak paling lama 22 Oktober 2026; gugatan tidak menunda pelaksanaan penagihan, tetapi penggugat dapat memohon agar tindak lanjut pelaksanaan penagihan ditunda sampai ada putusan; putusan paling lama 6 bulan sejak Surat Gugatan diterima",
        B: "Gugatan ke Pengadilan Pajak paling lama 22 Oktober 2026; gugatan dengan sendirinya menunda pelaksanaan penagihan sampai ada putusan; putusan paling lama 6 bulan sejak Surat Gugatan diterima",
        C: "Gugatan ke Pengadilan Pajak paling lama 7 November 2026; gugatan tidak menunda pelaksanaan penagihan, tetapi penggugat dapat memohon agar tindak lanjut pelaksanaan penagihan ditunda sampai ada putusan; putusan paling lama 6 bulan sejak Surat Gugatan diterima",
        D: "Gugatan ke Pengadilan Pajak paling lama 22 Oktober 2026; gugatan tidak menunda pelaksanaan penagihan, tetapi penggugat dapat memohon agar tindak lanjut pelaksanaan penagihan ditunda sampai ada putusan; putusan paling lama 12 bulan sejak Surat Gugatan diterima"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pelaksanaan SPMP adalah objek gugatan (Pasal 23 ayat (2) huruf a UU KUP) yang diajukan paling lama 14 hari sejak tanggal pelaksanaan penagihan. Gugatan tidak menunda penagihan, tetapi penggugat dapat memohon penundaan tindak lanjut penagihan selama sengketa diperiksa (Pasal 43 UU 14/2002). Putusan gugatan paling lama 6 bulan sejak Surat Gugatan diterima dan dapat diperpanjang 3 bulan.",
        jejakHitung: [["Pelaksanaan penyitaan", "8 Oktober 2026"], ["+ 14 hari", "22 Oktober 2026"], ["Putusan gugatan", "6 bulan (+3) sejak Surat Gugatan diterima"]],
        mengapaSalah: { B: "Gugatan tidak menunda penagihan dengan sendirinya; penundaan tindak lanjut harus dimohonkan.", C: "30 hari berlaku untuk gugatan atas keputusan selain pelaksanaan penagihan.", D: "12 bulan (+3) adalah jangka putusan banding." },
        jebakan: "Gugatan atas penagihan: 14 hari, tidak otomatis menunda, putusan 6 bulan — tiga angka yang mudah tertukar dengan banding."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (2) huruf a UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 40 ayat (2), Pasal 43, dan Pasal 81 ayat (2)–(3) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Ketentuan bahwa gugatan tidak menunda penagihan dan dapat dimohonkan penundaan tindak lanjutnya (Pasal 43 UU 14/2002) disusun dari pengetahuan teks UU; riset proyek hanya mengonfirmasi tenggat 14/30 hari dan jangka putusan 6 bulan (+3)."
    },
    {
      id: "A2-068", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 25 ayat (2), (3), dan (3a) UU KUP serta PMK 118/2024 (parafrase setia): Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan mengemukakan jumlah pajak yang terutang, jumlah pajak yang dipotong atau dipungut, atau jumlah rugi menurut penghitungan Wajib Pajak disertai alasan yang menjadi dasar penghitungan. Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal dikirim surat ketetapan pajak, kecuali Wajib Pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya. Atas surat ketetapan pajak, Wajib Pajak wajib melunasi pajak yang masih harus dibayar paling sedikit sejumlah yang disetujui dalam pembahasan akhir hasil pemeriksaan sebelum Surat Keberatan disampaikan. PMK 118/2024 mengatur satu keberatan untuk satu surat ketetapan pajak yang disampaikan secara elektronik melalui Portal Wajib Pajak.",
      stem: "PT Larasati Tekstil menerima SKPKB PPN Masa Mei 2025 dan SKPKB PPh Pasal 23 Masa Mei 2025 yang keduanya diterbitkan dan dikirim melalui Coretax pada Rabu, 2 September 2026. Dalam PAHP, WP menyetujui pokok PPN Rp25.000.000 dan tidak menyetujui koreksi PPh Pasal 23 sama sekali. Staf pajak menyusun urutan langkah pengajuan keberatan atas kedua SKPKB melalui Portal Wajib Pajak. Berdasarkan kutipan, urutan dan isi langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lambat"],
      opsi: {
        A: "Buat dua surat keberatan terpisah di Portal Wajib Pajak, masing-masing berbahasa Indonesia dengan jumlah pajak terutang menurut WP dan alasannya; tandatangani secara elektronik dan sampaikan paling lambat 2 Desember 2026; lunasi pokok PPN Rp25.000.000 paling lambat sebelum SK Keberatan diterbitkan",
        B: "Lunasi pokok PPN Rp25.000.000 lebih dahulu; buat satu surat keberatan gabungan untuk kedua SKPKB karena Masa Pajaknya sama, berbahasa Indonesia dengan jumlah pajak terutang menurut WP dan alasannya; tandatangani secara elektronik dan sampaikan paling lambat 2 Desember 2026",
        C: "Lunasi pokok PPN Rp25.000.000 lebih dahulu; buat dua surat keberatan terpisah di Portal Wajib Pajak, masing-masing berbahasa Indonesia dengan jumlah pajak terutang menurut WP dan alasannya; tandatangani secara elektronik dan sampaikan paling lambat 2 Oktober 2026",
        D: "Lunasi pokok PPN Rp25.000.000 lebih dahulu; buat dua surat keberatan terpisah di Portal Wajib Pajak, masing-masing berbahasa Indonesia dengan jumlah pajak terutang menurut WP dan alasannya; tandatangani secara elektronik dan sampaikan paling lambat 2 Desember 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pelunasan sejumlah yang disetujui dalam PAHP dilakukan sebelum Surat Keberatan disampaikan; setiap SKPKB diajukan dengan surat keberatan tersendiri; tenggatnya 3 bulan sejak SKP dikirim. Untuk SKPKB PPh Pasal 23 tidak ada jumlah yang disetujui, sehingga tidak ada pelunasan minimal.",
        jejakHitung: [["SKPKB dikirim", "Rabu, 2 September 2026"], ["Tenggat keberatan (+3 bulan)", "Rabu, 2 Desember 2026"], ["Pelunasan minimal sebelum keberatan PPN", "Rp25.000.000"], ["Pelunasan minimal sebelum keberatan PPh 23", "Rp0 (tidak ada yang disetujui)"], ["Jumlah surat keberatan", "2 (satu per SKPKB)"]],
        mengapaSalah: { A: "Pelunasan jumlah PAHP adalah syarat sebelum Surat Keberatan disampaikan, bukan sebelum SK Keberatan terbit.", B: "Satu keberatan hanya untuk satu surat ketetapan pajak walaupun Masa Pajaknya sama.", C: "2 Oktober 2026 adalah jatuh tempo pelunasan SKPKB (1 bulan), bukan tenggat keberatan (3 bulan)." },
        jebakan: "Urutan langkah ikut diuji: bayar jumlah PAHP dulu, baru kirim keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (2), (3), dan (3a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 (keberatan melalui Portal Wajib Pajak)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 (layanan elektronik Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-069", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 3 ayat (3) huruf a UU KUP dan PMK 81/2024 Pasal 94 ayat (2) (parafrase setia): Batas waktu penyampaian Surat Pemberitahuan Masa paling lama 20 hari setelah akhir Masa Pajak. Pembayaran atau penyetoran pajak terutang untuk suatu Masa Pajak, termasuk pajak yang dipotong atau dipungut, dilakukan paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir.",
      stem: "PT Arunika Digital (tahun buku kalender) pada Masa Pajak September 2026 melakukan pemotongan atas: (1) gaji bulanan 40 pegawai tetap; (2) honorarium narasumber seminar, orang pribadi bukan pegawai; (3) jasa konsultan TI yang dibayarkan kepada PT dalam negeri (PPh Pasal 23); (4) royalti perangkat lunak kepada perusahaan di Singapura yang tidak menyerahkan SKD (PPh Pasal 26). Seluruh bukti potong dibuat melalui Coretax. Berdasarkan kutipan dan PER-11/PJ/2025, pernyataan yang paling tepat tentang jenis bukti potong, SPT Masa, dan tenggatnya adalah ...",
      kataKualifikasi: ["paling tepat", "paling lambat"],
      opsi: {
        A: "(1) BPA1 dan (2) BP21 dilaporkan dalam SPT Masa PPh Pasal 21/26; (3) BPPU dan (4) BPNR dilaporkan dalam SPT Masa PPh Unifikasi; seluruh PPh disetor paling lambat 15 Oktober 2026 dan kedua SPT Masa dilaporkan paling lambat 20 Oktober 2026",
        B: "(1) BPMP dan (2) BP21 dilaporkan dalam SPT Masa PPh Pasal 21/26; (3) dan (4) sama-sama dibuatkan BPPU dalam SPT Masa PPh Unifikasi; seluruh PPh disetor paling lambat 15 Oktober 2026 dan kedua SPT Masa dilaporkan paling lambat 20 Oktober 2026",
        C: "(1) BPMP dan (2) BP21 dilaporkan dalam SPT Masa PPh Pasal 21/26; (3) BPPU dan (4) BPNR dilaporkan dalam SPT Masa PPh Unifikasi; seluruh PPh disetor paling lambat 15 Oktober 2026 dan kedua SPT Masa dilaporkan paling lambat 20 Oktober 2026",
        D: "(1) BPMP dan (2) BP21 dilaporkan dalam SPT Masa PPh Pasal 21/26; (3) BPPU dan (4) BPNR dilaporkan dalam SPT Masa PPh Unifikasi; PPh Pasal 21 disetor paling lambat 10 Oktober 2026, PPh Pasal 23/26 paling lambat 15 Oktober 2026, dan kedua SPT Masa dilaporkan paling lambat 20 Oktober 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "PER-11/PJ/2025: PPh 21 bulanan pegawai tetap dibuatkan BPMP dan PPh 21 bukan pegawai BP21 (keduanya masuk SPT Masa PPh 21/26); PPh 23 kepada WP dalam negeri dibuatkan BPPU dan PPh 26 kepada WP luar negeri (selain jasa orang pribadi) BPNR (keduanya masuk SPT Masa PPh Unifikasi). Setor seragam tanggal 15 dan lapor 20 hari setelah Masa Pajak berakhir.",
        jejakHitung: [["(1) gaji bulanan pegawai tetap", "BPMP → SPT Masa PPh 21/26"], ["(2) narasumber bukan pegawai", "BP21 → SPT Masa PPh 21/26"], ["(3) PPh 23 kepada WP dalam negeri", "BPPU → SPT Masa PPh Unifikasi"], ["(4) PPh 26 royalti kepada WP luar negeri", "BPNR → SPT Masa PPh Unifikasi"], ["Setor / lapor Masa September 2026", "Kamis 15 Oktober / Selasa 20 Oktober 2026"]],
        mengapaSalah: { A: "BPA1 adalah bukti potong tahunan yang dibuat pada Masa Pajak terakhir, bukan bukti potong bulanan.", B: "BPPU hanya untuk penerima dalam negeri; PPh 26 kepada WP luar negeri memakai BPNR.", D: "Tanggal 10 untuk PPh 21 adalah ketentuan PMK 242/2014 yang dicabut sejak 2025." },
        jebakan: "Opsi hanya berbeda satu kode atau satu tanggal; cocokkan penerima (dalam/luar negeri, pegawai/bukan pegawai) dengan kode bukti potong."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (bentuk bukti potong BPMP, BP21, BPPU, BPNR)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-070", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A2-05",
      stem: "Data untuk soal vignette V-A2-05: PT Lintas Bahari (tahun buku kalender, bukan perusahaan terbuka, peredaran bruto 2025 Rp42.000.000.000, 120 pegawai, terdaftar di KPP Madya dengan dua NITKU cabang) menyampaikan pemberitahuan perpanjangan SPT Tahunan PPh Badan 2025 pada Selasa, 28 April 2026, disertai penghitungan sementara PPh Pasal 29 Rp150.000.000 yang telah dilunasi 27 April 2026. SPT Tahunan final disampaikan Senin, 29 Juni 2026 dengan PPh terutang Rp740.000.000 dan kredit pajak berupa PPh Pasal 22 Rp60.000.000, PPh Pasal 23 Rp18.000.000, serta angsuran PPh Pasal 25 12 × Rp36.000.000 yang seluruhnya disetor tepat waktu. Kekurangan pembayaran di atas penghitungan sementara dilunasi Rabu, 24 Juni 2026. Anggap tarif KMK yang berlaku pada tanggal dimulainya penghitungan sanksi: uplift 0% = 0,59%; uplift 5% = 1,01%. Sanksi administratif yang timbul dari kekurangan pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp944.000", B: "Rp1.416.000", C: "Rp1.616.000", D: "Rp1.944.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "WP yang memperpanjang penyampaian SPT Tahunan dan ternyata penghitungan sementaranya kurang dikenai bunga Pasal 19 ayat (3) dengan uplift 0%, dihitung dari berakhirnya batas waktu SPT Tahunan badan (30 April 2026) sampai tanggal pelunasan kekurangan. SPT final disampaikan dalam masa perpanjangan 2 bulan sehingga tidak ada denda Pasal 7.",
        jejakHitung: [["PPh Pasal 29 = 740.000.000 − (60.000.000 + 18.000.000 + 432.000.000)", "Rp230.000.000"], ["Kekurangan di atas penghitungan sementara = 230.000.000 − 150.000.000", "Rp80.000.000"], ["30 Apr → 24 Jun 2026", "1 bulan 25 hari = 2 bulan"], ["Bunga Ps. 19 ayat (3) = 80.000.000 × 0,59% × 2", "Rp944.000"], ["SPT final 29 Juni 2026 (batas perpanjangan 30 Juni)", "tanpa denda Pasal 7"]],
        mengapaSalah: { B: "Menghitung sejak 31 Maret, batas SPT Tahunan orang pribadi (3 bulan); batas badan 30 April.", C: "Memakai uplift 5% Pasal 9 ayat (2b); kekurangan dalam rangka perpanjangan SPT diatur khusus Pasal 19 ayat (3) dengan uplift 0%.", D: "Menambah denda Rp1.000.000, padahal SPT final disampaikan dalam masa perpanjangan." },
        jebakan: "Peredaran bruto, jumlah pegawai, dan NITKU tidak dipakai; yang menentukan adalah selisih di atas penghitungan sementara dan pasal bunga yang khusus."
      },
      dasarHukum: [{ pasal: "Pasal 19 ayat (3) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 3 ayat (3) huruf c, ayat (4), dan ayat (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A2-071", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A2-05",
      stem: "Lanjutan V-A2-05: PT Lintas Bahari (peredaran bruto 2025 Rp42 miliar, 120 pegawai) menerima SKPKB PPN Masa November 2024 yang diterbitkan dan dikirim Jumat, 7 Agustus 2026 dengan pokok Rp260.000.000 dan bunga Pasal 13 ayat (2) Rp100.464.000. Dalam PAHP, WP menyetujui pokok Rp60.000.000 dan melunasinya Kamis, 3 September 2026; surat keberatannya diterima KPP Kamis, 10 September 2026. Pada 15 Oktober 2026 WP menyetor lagi Rp40.000.000 atas pokok yang disengketakan. SK Keberatan yang terbit Jumat, 20 Agustus 2027 mengabulkan sebagian sehingga pokok menjadi Rp210.000.000, dan WP memutuskan tidak mengajukan banding. Dasar denda dihitung dari pokok pajak. Sanksi denda Pasal 25 ayat (9) UU KUP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp33.000.000", B: "Rp45.000.000", C: "Rp60.000.000", D: "Rp90.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Denda keberatan 30% dihitung dari pajak menurut SK Keberatan dikurangi pajak yang telah dibayar sebelum mengajukan keberatan; setoran setelah keberatan diajukan tidak ikut dikurangkan, dan bunga dalam SKPKB tidak dipakai karena dasar denda adalah pokok.",
        jejakHitung: [["Pokok menurut SK Keberatan", "Rp210.000.000"], ["Dibayar sebelum keberatan (3 Sep 2026)", "Rp60.000.000"], ["Setoran 15 Okt 2026 (setelah keberatan diterima)", "tidak mengurangi dasar denda"], ["Dasar denda = 210.000.000 − 60.000.000", "Rp150.000.000"], ["Denda 30%", "Rp45.000.000"]],
        mengapaSalah: { A: "Ikut mengurangkan setoran Rp40.000.000 yang dilakukan setelah keberatan diajukan: 30% × Rp110.000.000.", C: "Memakai pokok SKPKB semula Rp260.000.000, padahal dasarnya pajak menurut SK Keberatan: 30% × Rp200.000.000.", D: "Memakai tarif 60% milik Putusan Banding, padahal WP tidak banding." },
        jebakan: "Frasa kunci Pasal 25 ayat (9) adalah 'sebelum mengajukan keberatan': bandingkan tanggal setiap setoran dengan tanggal keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (9) dan (10) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 25 ayat (3a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-072", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Pada Oktober 2026 PT Saka Nusantara (PKP, tahun buku kalender) menerima lima dokumen dari KPP melalui Coretax: (1) STP berisi pokok angsuran PPh Pasal 25 Masa Juli 2026 dan bunga Pasal 14 ayat (3); (2) SKPN PPh Badan 2024 hasil pemeriksaan, padahal SPT semula menyatakan lebih bayar Rp40.000.000; (3) SKPKB PPh Pasal 23 Masa Maret 2025; (4) SK Keberatan atas SKPKB PPN Masa Mei 2024 yang menolak keberatan seluruhnya; (5) Surat Teguran karena SPT Masa PPN Agustus 2026 belum disampaikan. Staf pajak memetakan dokumen yang termasuk 'surat ketetapan pajak' menurut Pasal 1 UU KUP beserta upaya hukum utamanya. Pemetaan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(2) dan (3) adalah surat ketetapan pajak yang dapat diajukan keberatan; (1) juga dapat diajukan keberatan karena memuat pokok pajak; (4) diajukan banding ke Pengadilan Pajak",
        B: "(1), (2), dan (3) adalah surat ketetapan pajak yang dapat diajukan keberatan; (4) diajukan banding ke Pengadilan Pajak",
        C: "(2) dan (3) adalah surat ketetapan pajak yang dapat diajukan keberatan; (1) bukan surat ketetapan pajak sehingga tidak dapat diajukan keberatan, tetapi dapat dimohonkan pengurangan/penghapusan sanksi atau pembatalan berdasarkan Pasal 36; (4) diajukan keberatan ulang kepada Direktur Jenderal Pajak",
        D: "(2) dan (3) adalah surat ketetapan pajak yang dapat diajukan keberatan; (1) bukan surat ketetapan pajak sehingga tidak dapat diajukan keberatan, tetapi dapat dimohonkan pengurangan/penghapusan sanksi atau pembatalan berdasarkan Pasal 36; (4) diajukan banding ke Pengadilan Pajak"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Surat ketetapan pajak hanya meliputi SKPKB, SKPKBT, SKPLB, dan SKPN, dan atas keempatnya dapat diajukan keberatan (Pasal 25 ayat (1)). STP adalah surat tagihan, bukan surat ketetapan, sehingga jalurnya permohonan Pasal 36 ayat (1) huruf a atau c. Atas SK Keberatan, upaya hukumnya banding ke Pengadilan Pajak (Pasal 27 ayat (1)). Surat Teguran SPT hanya peringatan administratif.",
        jejakHitung: [["(1) STP PPh 25 + bunga", "bukan SKP → Pasal 36 ayat (1) huruf a/c"], ["(2) SKPN", "SKP → keberatan (Pasal 25 ayat (1))"], ["(3) SKPKB PPh 23", "SKP → keberatan"], ["(4) SK Keberatan", "bukan SKP → banding (Pasal 27 ayat (1))"], ["(5) Surat Teguran SPT", "bukan keputusan yang disengketakan; data pengecoh"]],
        mengapaSalah: { A: "STP bukan surat ketetapan pajak; Pasal 25 ayat (1) tidak mencantumkan STP sebagai objek keberatan.", B: "Memasukkan STP ke dalam surat ketetapan pajak; definisi Pasal 1 UU KUP hanya memuat SKPKB, SKPKBT, SKPLB, dan SKPN.", C: "SK Keberatan tidak dapat diajukan keberatan lagi; upaya hukum berikutnya banding ke Pengadilan Pajak." },
        jebakan: "SKPN tetap SKP yang dapat diajukan keberatan meskipun tidak ada pajak yang harus dibayar, sedangkan STP yang memuat pokok pajak tetap bukan SKP."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU KUP (definisi surat ketetapan pajak dan STP)", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 25 ayat (1) dan Pasal 27 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 36 ayat (1) huruf a dan c UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-073", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 2 ayat (8) dan (9) UU KUP (parafrase setia): Pencabutan pengukuhan Pengusaha Kena Pajak dilakukan oleh Direktur Jenderal Pajak antara lain apabila diajukan permohonan pencabutan oleh Pengusaha Kena Pajak. Direktur Jenderal Pajak setelah melakukan pemeriksaan harus memberikan keputusan atas permohonan pencabutan pengukuhan Pengusaha Kena Pajak dalam jangka waktu 6 bulan sejak tanggal permohonan diterima secara lengkap.",
      stem: "CV Anggrek Jaya dikukuhkan sebagai PKP sejak 2022 atas permohonan sendiri. Peredaran brutonya turun menjadi Rp1,6 miliar pada 2025 sehingga CV memenuhi kriteria pengusaha kecil, lalu mengajukan permohonan pencabutan pengukuhan PKP melalui Portal Wajib Pajak yang diterima lengkap pada Rabu, 11 Februari 2026. Selama Februari–Juli 2026 CV tetap menjual barang kepada pelanggan yang sama dan belum menerima keputusan apa pun. Sebagai pembanding, permohonan penghapusan NPWP badan diputus paling lama 12 bulan. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat", "paling lama"],
      opsi: {
        A: "Keputusan atas permohonan paling lama 11 Februari 2027; sejak permohonan diterima lengkap CV tidak lagi wajib membuat faktur pajak dan menyampaikan SPT Masa PPN",
        B: "Keputusan atas permohonan paling lama 11 Agustus 2026; sejak permohonan diterima lengkap CV tidak lagi wajib membuat faktur pajak, memungut PPN, maupun menyampaikan SPT Masa PPN karena tinggal menunggu keputusan",
        C: "Keputusan atas permohonan paling lama 11 Agustus 2026 setelah dilakukan pemeriksaan; selama pengukuhan belum dicabut CV tetap wajib membuat faktur pajak, memungut PPN, dan menyampaikan SPT Masa PPN",
        D: "Keputusan atas permohonan paling lama 11 Agustus 2026 tanpa perlu pemeriksaan; status PKP berakhir otomatis sejak tanggal permohonan diterima lengkap"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pencabutan pengukuhan PKP atas permohonan diputus setelah pemeriksaan paling lama 6 bulan sejak permohonan diterima lengkap (11 Agustus 2026). Status PKP baru berakhir dengan keputusan pencabutan, sehingga selama menunggu CV tetap memenuhi seluruh kewajiban PKP.",
        jejakHitung: [["Permohonan diterima lengkap", "Rabu, 11 Februari 2026"], ["Jangka keputusan pencabutan PKP", "6 bulan, setelah pemeriksaan"], ["Batas keputusan", "11 Agustus 2026"], ["Status selama menunggu", "tetap PKP: faktur, pungut PPN, SPT Masa PPN"]],
        mengapaSalah: { A: "12 bulan adalah jangka keputusan penghapusan NPWP badan (Pasal 2 ayat (7)), bukan pencabutan PKP; kewajiban PKP juga belum berhenti.", B: "Tanggal benar, tetapi permohonan tidak menghentikan status PKP; kewajiban berhenti setelah keputusan pencabutan.", D: "Kutipan menyebut keputusan diberikan setelah pemeriksaan; tidak ada pencabutan otomatis sejak permohonan diterima." },
        jebakan: "Data pembanding 12 bulan sengaja disisipkan: 6/12 bulan berlaku untuk penghapusan NPWP orang pribadi/badan, sedangkan pencabutan PKP 6 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (6)–(9) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 81/2024 (layanan administrasi melalui Portal Wajib Pajak)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Jangka 6 bulan Pasal 2 ayat (9) UU KUP bersumber dari teks UU yang belum dibaca ulang langsung dalam riset proyek (sama dengan peringatan topik A2.2); tata cara teknis pencabutan PKP dalam PMK 81/2024 belum diverifikasi."
    },
    {
      id: "A2-074", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 6 ayat (5) UU KUP (parafrase setia): Surat Pemberitahuan dianggap tidak disampaikan apabila: a. tidak ditandatangani; b. tidak sepenuhnya dilampiri keterangan dan/atau dokumen yang dipersyaratkan; c. menyatakan lebih bayar dan disampaikan setelah 3 tahun sesudah berakhirnya Masa Pajak, Bagian Tahun Pajak, atau Tahun Pajak, dan Wajib Pajak telah ditegur secara tertulis; atau d. disampaikan setelah Direktur Jenderal Pajak melakukan pemeriksaan atau Wajib Pajak diterbitkan surat ketetapan pajak.",
      stem: "PT Lumbung Pangan (tahun buku kalender) membereskan kewajiban SPT yang tertinggal: (i) SPT Tahunan PPh Badan 2021 yang menyatakan lebih bayar Rp85.000.000 belum pernah disampaikan; KPP telah menegur secara tertulis pada Maret 2026, dan SPT itu disampaikan lewat Coretax pada 10 Oktober 2026; (ii) SPT Tahunan PPh Badan 2024 baru disampaikan 5 Oktober 2026, padahal SP2 pemeriksaan atas tahun pajak itu telah disampaikan 1 September 2026; (iii) SPT Masa PPh Unifikasi Masa Agustus 2026 disampaikan lengkap dan ditandatangani elektronik pada 25 September 2026. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(i) dan (ii) dianggap tidak disampaikan; (iii) tetap dianggap disampaikan walaupun terlambat, sehingga hanya dikenai denda Pasal 7 ayat (1) sebesar Rp100.000",
        B: "(i) dan (ii) dianggap tidak disampaikan; (iii) juga dianggap tidak disampaikan karena disampaikan setelah batas waktu 20 hari",
        C: "Hanya (ii) yang dianggap tidak disampaikan; (i) tetap diproses sebagai permohonan restitusi karena lebih bayar 2021 belum melewati daluwarsa penetapan 5 tahun; (iii) dikenai denda Rp100.000",
        D: "(i) dan (ii) dianggap tidak disampaikan; (iii) tetap dianggap disampaikan walaupun terlambat, sehingga hanya dikenai denda Pasal 7 ayat (1) sebesar Rp500.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPT lebih bayar 2021 disampaikan lebih dari 3 tahun setelah Tahun Pajak berakhir dan setelah ditegur (huruf c); SPT 2024 disampaikan setelah pemeriksaan dimulai (huruf d). Keterlambatan semata tidak membuat SPT dianggap tidak disampaikan; SPT Masa PPh Unifikasi yang terlambat cukup didenda Rp100.000.",
        jejakHitung: [["(i) Akhir Tahun Pajak 2021 + 3 tahun", "31 Desember 2024 < 10 Oktober 2026; sudah ditegur → huruf c"], ["(ii) SPT 5 Oktober 2026 setelah SP2 1 September 2026", "huruf d"], ["(iii) Batas lapor Masa Agustus 2026", "20 hari setelah masa berakhir; 25 September tetap terlambat walau bergeser ke hari kerja"], ["Denda SPT Masa selain PPN", "Rp100.000"]],
        mengapaSalah: { B: "Terlambat bukan salah satu kriteria Pasal 6 ayat (5); SPT terlambat tetap sah dan dikenai denda.", C: "Kutipan huruf c memakai batas 3 tahun ditambah teguran, bukan daluwarsa penetapan 5 tahun.", D: "Rp500.000 adalah denda SPT Masa PPN; SPT Masa PPh Unifikasi didenda Rp100.000." },
        jebakan: "Dua batas waktu bersaing: 3 tahun (SPT lebih bayar yang ditegur) versus 5 tahun (daluwarsa penetapan)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP; PMK 81/2024 Pasal 171", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Nomor ayat dan rincian kriteria SPT dianggap tidak disampaikan (Pasal 6 ayat (5) UU KUP) disusun dari pengetahuan teks UU; riset proyek tidak memuat kutipan pasal ini."
    },
    {
      id: "A2-075", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "CV Bara Pratama (PKP, tahun buku kalender, peredaran bruto 2023 Rp6,2 miliar, 35 pegawai) diperiksa lengkap atas PPh Badan Tahun Pajak 2023 dan PPN Masa Desember 2023. Walaupun telah diminta secara tertulis, CV tidak memperlihatkan maupun meminjamkan buku, catatan, dan dokumen pendukung, sehingga besarnya pajak terutang tidak dapat diketahui. Pemeriksa menetapkan secara jabatan PPh Badan kurang dibayar Rp48.000.000 dan PPN Masa Desember 2023 kurang dibayar Rp36.000.000; kedua SKPKB diterbitkan Senin, 19 Oktober 2026. Anggap tarif bunga per bulan yang berlaku: uplift 15% = 1,84%; uplift 20% = 2,26%. Jumlah seluruh sanksi administratif dalam kedua SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp45.561.600", B: "Rp48.196.800", C: "Rp53.035.200", D: "Rp63.883.200" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kewajiban Pasal 28 atau 29 yang tidak dipenuhi sehingga pajak terutang tidak dapat diketahui melahirkan SKPKB Pasal 13 ayat (1) huruf d. Sanksinya Pasal 13 ayat (3): PPh kurang dibayar dikenai bunga uplift 20% paling lama 24 bulan, sedangkan PPN kurang dibayar dikenai kenaikan 75%.",
        jejakHitung: [["PPh: 31 Des 2023 → 19 Okt 2026", "33 bulan 19 hari → dibatasi 24 bulan"], ["Bunga PPh = 48.000.000 × 2,26% × 24", "Rp26.035.200"], ["Kenaikan PPN = 75% × 36.000.000", "Rp27.000.000"], ["Total sanksi", "Rp53.035.200"]],
        mengapaSalah: { A: "Memperlakukan PPN seperti PPh dengan bunga uplift 20% (36.000.000 × 2,26% × 24 = Rp19.526.400); untuk PPN sanksinya kenaikan 75%.", B: "Memakai bunga uplift 15% Pasal 13 ayat (2) untuk PPh (Rp21.196.800); SKPKB huruf d tunduk pada Pasal 13 ayat (3).", D: "Tidak membatasi bunga 24 bulan: 48.000.000 × 2,26% × 34 = Rp36.883.200." },
        jebakan: "Peredaran bruto dan jumlah pegawai tidak dipakai; yang menentukan adalah huruf d Pasal 13 ayat (1), jenis pajak, dan batas 24 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf d, ayat (3), dan ayat (3b) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 28 dan Pasal 29 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-076", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Andalan Sejati (tahun buku kalender, peredaran bruto 2024 Rp310 miliar) adalah anggota grup usaha yang bertransaksi dengan pihak afiliasi di tiga negara. SP2 pemeriksaan lengkap atas SPT Tahunan PPh Badan 2024 (lebih bayar Rp2,4 miliar, dimintakan restitusi) disampaikan Senin, 9 Maret 2026. Karena ada indikasi transfer pricing, jangka waktu pengujian diperpanjang sesuai PMK 15/2025. Pemeriksa menyampaikan SPHP pada hari terakhir jangka waktu pengujian. Dengan asumsi tidak ada hari libur nasional atau cuti bersama, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "SPHP paling lambat 9 Agustus 2026; tanggapan tertulis atas SPHP paling lambat 5 hari kerja sejak SPHP diterima; pengungkapan ketidakbenaran pengisian SPT hanya dapat disampaikan sebelum SPHP disampaikan",
        B: "SPHP paling lambat 9 Desember 2026; tanggapan tertulis paling lambat Jumat, 18 Desember 2026; pengungkapan ketidakbenaran pengisian SPT hanya dapat disampaikan sebelum SPHP disampaikan",
        C: "SPHP paling lambat 9 Desember 2026; tanggapan tertulis paling lambat Rabu, 16 Desember 2026; pengungkapan ketidakbenaran pengisian SPT masih dapat disampaikan sampai PAHP selesai",
        D: "SPHP paling lambat 9 Desember 2026; tanggapan tertulis paling lambat Rabu, 16 Desember 2026; pengungkapan ketidakbenaran pengisian SPT hanya dapat disampaikan sebelum SPHP disampaikan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pemeriksaan lengkap 5 bulan dapat diperpanjang 4 bulan untuk grup usaha/indikasi transfer pricing, sehingga SPHP paling lambat 9 Desember 2026. Tanggapan SPHP 5 hari kerja (Rabu 9 Desember → Rabu 16 Desember). Pengungkapan Pasal 8 ayat (4) dibatasi sampai sebelum SPHP disampaikan.",
        jejakHitung: [["SP2 disampaikan", "Senin, 9 Maret 2026"], ["5 bulan + perpanjangan 4 bulan", "Rabu, 9 Desember 2026"], ["Hari kerja ke-1 s.d. ke-5", "10, 11, 14, 15, 16 Desember 2026"], ["Batas tanggapan SPHP", "Rabu, 16 Desember 2026"], ["Batas pengungkapan Pasal 8 ayat (4)", "sebelum SPHP disampaikan"]],
        mengapaSalah: { A: "Mengabaikan perpanjangan 4 bulan yang berlaku karena grup usaha dan indikasi transfer pricing.", B: "18 Desember 2026 adalah hitungan 7 hari kerja (PMK 17/2013 jo. 184/2015) yang telah diganti 5 hari kerja.", C: "Sejak UU HPP, pengungkapan Pasal 8 ayat (4) hanya sampai sebelum SPHP disampaikan, bukan sampai PAHP." },
        jebakan: "Peredaran bruto dan nilai lebih bayar tidak relevan; kata kunci 'grup usaha' dan 'indikasi transfer pricing' memicu perpanjangan 4 bulan."
      },
      dasarHukum: [{ pasal: "PMK 15/2025 (jangka waktu pemeriksaan lengkap dan perpanjangannya; tanggapan SPHP)", berlakuSejak: "2025-02-14" }, { pasal: "Pasal 8 ayat (4) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-077", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Citra Rekayasa (PKP, tahun buku kalender, eksportir jasa desain teknik) diperiksa atas SPT Masa PPN Februari dan Maret 2025 yang dilaporkan tepat waktu. Temuan: (i) Masa Februari 2025, PKP menerapkan tarif 0% atas penyerahan jasa desain dengan penggantian Rp400.000.000 kepada pelanggan luar negeri, padahal jasa itu terbukti dimanfaatkan di dalam daerah pabean sehingga bukan ekspor JKP; PPN terutang dihitung 12% × DPP nilai lain 11/12 × penggantian; (ii) Masa Maret 2025, Pajak Masukan Rp20.000.000 dari faktur yang tidak memenuhi syarat dikoreksi, sehingga SPT yang semula nihil menjadi kurang bayar Rp20.000.000. Kedua SKPKB diterbitkan Senin, 12 Oktober 2026. Anggap tarif bunga uplift 15% yang berlaku 1,84% per bulan. Jumlah sanksi administratif dalam kedua SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp23.184.000", B: "Rp39.992.000", C: "Rp42.992.000", D: "Rp50.992.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "PPN yang tidak seharusnya dikenai tarif 0% ditetapkan dengan SKPKB Pasal 13 ayat (1) huruf c dan dikenai kenaikan 75% (Pasal 13 ayat (3)). Koreksi Pajak Masukan biasa ditetapkan dengan SKPKB Pasal 13 ayat (1) huruf a dan dikenai bunga uplift 15% sejak akhir Masa Pajak sampai SKPKB terbit.",
        jejakHitung: [["(i) PPN = 12% × 11/12 × 400.000.000", "Rp44.000.000"], ["(i) Kenaikan 75%", "Rp33.000.000"], ["(ii) 31 Mar 2025 → 12 Okt 2026", "18 bulan 12 hari = 19 bulan"], ["(ii) Bunga = 20.000.000 × 1,84% × 19", "Rp6.992.000"], ["Total sanksi", "Rp39.992.000"]],
        mengapaSalah: { A: "Memberi bunga uplift 15% juga pada (i): 44.000.000 × 1,84% × 20 = Rp16.192.000; tarif 0% yang tidak seharusnya dikenai kenaikan 75%.", C: "Menghitung PPN (i) dengan 12% × penggantian penuh (Rp48.000.000) sehingga kenaikannya Rp36.000.000; DPP nilai lain 11/12 berlaku sejak 2025.", D: "Memakai kenaikan 100% sebelum UU HPP untuk (i)." },
        jebakan: "Status eksportir dan SPT yang tepat waktu tidak mengubah sanksi; huruf c (tarif 0%) dan huruf a (koreksi biasa) memberi sanksi yang berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf a dan c, ayat (2), dan ayat (3) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A2-078", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 25 ayat (1) dan (3) UU KUP (parafrase setia): Wajib Pajak dapat mengajukan keberatan hanya kepada Direktur Jenderal Pajak atas suatu SKPKB, SKPKBT, SKPLB, SKPN, atau pemotongan atau pemungutan pajak oleh pihak ketiga berdasarkan ketentuan peraturan perundang-undangan perpajakan. Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal dikirim surat ketetapan pajak atau sejak tanggal pemotongan atau pemungutan pajak, kecuali Wajib Pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya.",
      stem: "PT Sinar Desain (penyedia jasa desain interior) menerima pembayaran dari PT Graha Properti pada Senin, 24 Agustus 2026. PT Graha Properti memotong PPh Pasal 23 sebesar 15% (diperlakukan sebagai royalti) atas imbalan Rp200.000.000, yaitu Rp30.000.000, dan membuat BPPU bertanggal 24 Agustus 2026 yang baru diterima PT Sinar Desain melalui Coretax pada Kamis, 27 Agustus 2026. Menurut PT Sinar Desain, imbalan itu adalah jasa dengan tarif 2% (Rp4.000.000). Berdasarkan kutipan, upaya dan tenggat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Keberatan kepada Direktur Jenderal Pajak atas pemotongan tersebut, paling lambat 24 November 2026",
        B: "Keberatan kepada Direktur Jenderal Pajak atas pemotongan tersebut, paling lambat 27 November 2026",
        C: "Keberatan kepada PT Graha Properti selaku pemotong, paling lambat 24 November 2026",
        D: "Banding ke Pengadilan Pajak paling lambat 24 November 2026 karena pemotongan bukan surat ketetapan pajak"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pemotongan oleh pihak ketiga adalah objek keberatan yang diajukan kepada Direktur Jenderal Pajak, dalam 3 bulan sejak tanggal pemotongan (24 Agustus 2026), bukan sejak bukti potong diterima.",
        jejakHitung: [["Tanggal pemotongan (BPPU)", "24 Agustus 2026"], ["+ 3 bulan", "24 November 2026"], ["Selisih PPh menurut WP", "Rp30.000.000 − Rp4.000.000 = Rp26.000.000"]],
        mengapaSalah: { B: "Tenggat dihitung sejak tanggal pemotongan, bukan tanggal bukti potong diterima.", C: "Keberatan hanya diajukan kepada Direktur Jenderal Pajak, bukan kepada pemotong.", D: "Banding hanya atas keputusan keberatan; pemotongan pihak ketiga diajukan keberatan lebih dahulu." },
        jebakan: "Ada dua tanggal (dipotong dan diterima); kutipan menunjuk tanggal pemotongan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A2-079", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Pelangi Nusa (tahun buku kalender, bukan perusahaan terbuka, peredaran bruto 2025 Rp82 miliar sehingga tidak memperoleh fasilitas Pasal 31E) menyampaikan SPT Tahunan PPh Badan 2025 pada Senin, 27 April 2026 dengan PPh Pasal 29 Rp35.000.000 yang telah dilunasi Jumat, 24 April 2026. Pada Oktober 2026, sebelum ada pemeriksaan, perusahaan menemukan biaya entertainment Rp120.000.000 tanpa daftar nominatif yang telah dibebankan, sehingga PPh terutang bertambah 22% × Rp120.000.000. Kekurangan itu disetor Senin, 12 Oktober 2026 dan SPT pembetulan disampaikan Rabu, 14 Oktober 2026. Anggap tarif bunga uplift 5% yang berlaku pada tanggal dimulainya penghitungan sanksi 1,05% per bulan. Sanksi administratif atas pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.386.000", B: "Rp1.940.400", C: "Rp1.663.200", D: "Rp2.663.200" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembetulan sendiri SPT Tahunan yang menambah utang pajak dikenai bunga Pasal 8 ayat (2) uplift 5% sejak batas waktu penyampaian SPT Tahunan badan berakhir (30 April 2026) sampai tanggal pembayaran; SPT semula tepat waktu sehingga tidak ada denda Pasal 7.",
        jejakHitung: [["Tambahan PPh = 22% × 120.000.000", "Rp26.400.000"], ["30 Apr → 12 Okt 2026", "5 bulan 12 hari = 6 bulan"], ["Bunga = 26.400.000 × 1,05% × 6", "Rp1.663.200"], ["Denda Pasal 7 (SPT semula 27 April, tepat waktu)", "Rp0"]],
        mengapaSalah: { A: "Membulatkan bulan ke bawah (5 bulan); bagian bulan dihitung penuh.", B: "Menghitung sejak 31 Maret, batas SPT Tahunan orang pribadi (7 bulan).", D: "Menambahkan denda Rp1.000.000 padahal SPT semula disampaikan tepat waktu; pembetulan tidak membuat SPT terlambat." },
        jebakan: "Tanggal pelunasan PPh 29 semula dan peredaran bruto tidak dipakai; titik awal bunga pembetulan Tahunan adalah batas waktu SPT, titik akhirnya tanggal setor."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) dan (2) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 3 ayat (3) huruf c UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-12/PJ/2026 (pembetulan SPT di Coretax)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-080", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Tirta Makmur (tahun buku kalender, bukan WP kriteria tertentu, dan memilih restitusi melalui pemeriksaan Pasal 17B, bukan pengembalian pendahuluan Pasal 17D) menyampaikan SPT Tahunan PPh Badan 2024 lebih bayar Rp250.000.000 dengan permohonan restitusi yang diterima lengkap Kamis, 3 April 2025. DJP tidak menerbitkan surat ketetapan pajak dalam 12 bulan, sehingga permohonan dianggap dikabulkan; namun SKPLB sebesar Rp250.000.000 baru diterbitkan Selasa, 21 Juli 2026. Anggap tarif imbalan bunga (uplift 0%) yang berlaku pada tanggal dimulainya penghitungan 0,60% per bulan, sedangkan tarif uplift 5% 1,02% per bulan. Imbalan bunga atas keterlambatan penerbitan SKPLB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.500.000", B: "Rp10.200.000", C: "Rp24.000.000", D: "Rp6.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Bila permohonan dianggap dikabulkan, SKPLB wajib terbit paling lama 1 bulan setelah 12 bulan berakhir (3 Mei 2026). Karena terlambat, WP diberi imbalan bunga Pasal 17B ayat (3) sejak berakhirnya jangka waktu 12 bulan (3 April 2026) sampai SKPLB terbit, dengan tarif uplift 0%.",
        jejakHitung: [["Permohonan lengkap + 12 bulan", "3 April 2026"], ["Batas SKPLB (+1 bulan)", "3 Mei 2026 → terlambat"], ["3 Apr → 21 Jul 2026", "3 bulan 18 hari = 4 bulan"], ["Imbalan bunga = 250.000.000 × 0,60% × 4", "Rp6.000.000"]],
        mengapaSalah: { A: "Menghitung sejak 3 Mei 2026 (3 bulan); undang-undang menghitungnya sejak berakhirnya jangka waktu 12 bulan.", B: "Imbalan bunga tidak memakai uplift 5%.", C: "Menghitung sejak permohonan diterima (16 bulan); imbalan bunga hanya untuk periode keterlambatan." },
        jebakan: "Masa tenggang 1 bulan menentukan apakah SKPLB terlambat, tetapi imbalan bunganya dihitung sejak 12 bulan berakhir."
      },
      dasarHukum: [{ pasal: "Pasal 17B ayat (1)–(3) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (imbalan bunga uplift 0%)", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Rumusan Pasal 17B ayat (3) (imbalan bunga atas SKPLB yang terlambat diterbitkan, dihitung sejak berakhirnya jangka waktu 12 bulan) disusun dari pengetahuan teks UU KUP; riset proyek mencatat imbalan bunga Pasal 17B bertanda ◐. Tarif April 2026 dinyatakan sebagai asumsi soal."
    },
    {
      id: "A2-081", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "SKPKB PPN Masa Juni 2020 atas PT Maju Karya sebesar Rp300.000.000 diterbitkan 11 Maret 2022 dan tidak dilunasi saat jatuh tempo. KPP menyampaikan Surat Teguran pada 20 April 2022, tetapi Surat Paksa tidak pernah diterbitkan. Pada 15 Agustus 2024 KPP menerima surat permohonan angsuran dari PT Maju Karya yang menyebutkan jumlah utang SKPKB tersebut; permohonan disetujui dan tiga angsuran dibayar sampai 15 November 2024, lalu pembayaran berhenti. Tidak ada penyidikan maupun SKPKB/SKPKBT karena pidana. Hak untuk melakukan penagihan atas sisa utang tersebut daluwarsa pada ...",
      kataKualifikasi: [],
      opsi: { A: "15 Agustus 2029", B: "11 Maret 2027", C: "20 April 2027", D: "15 November 2029" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Daluwarsa penagihan 5 tahun sejak penerbitan SKPKB (11 Maret 2027) tertangguh karena ada pengakuan utang pajak berupa permohonan angsuran; daluwarsa dihitung ulang 5 tahun sejak tanggal pengakuan (surat permohonan diterima 15 Agustus 2024).",
        jejakHitung: [["Daluwarsa semula: 11 Mar 2022 + 5 tahun", "11 Maret 2027"], ["Surat Teguran 20 Apr 2022", "tidak menangguhkan daluwarsa"], ["Pengakuan utang (permohonan angsuran diterima)", "15 Agustus 2024"], ["Daluwarsa baru: + 5 tahun", "15 Agustus 2029"]],
        mengapaSalah: { B: "Mengabaikan penangguhan karena pengakuan utang pajak.", C: "Surat Teguran bukan sebab penangguhan; yang menangguhkan adalah Surat Paksa, pengakuan utang, SKPKB Pasal 13 ayat (5)/SKPKBT Pasal 15 ayat (4), atau penyidikan.", D: "Titik awal adalah tanggal pengakuan utang, bukan tanggal pembayaran angsuran terakhir." },
        jebakan: "Teguran dan pembayaran angsuran adalah tanggal pengecoh; cari peristiwa yang disebut Pasal 22 ayat (2)."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) dan (2) UU KUP beserta penjelasannya", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (4) UU KUP (angsuran/penundaan)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-082", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["B-2026-10"],
      stem: "CV Mekar Wangi mengajukan permohonan kedua pengurangan sanksi administratif dalam STP berdasarkan Pasal 36 ayat (1) huruf a. Keputusan Direktur Jenderal Pajak yang menolak permohonan itu bertanggal Jumat, 2 Oktober 2026 dan diterima CV pada Senin, 5 Oktober 2026. CV menilai keputusan itu keliru dan ingin membawanya ke Pengadilan Pajak; permohonan ketiga tidak lagi dimungkinkan. Upaya hukum dan tenggat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Banding paling lambat 5 Januari 2027, yaitu 3 bulan sejak keputusan diterima",
        B: "Gugatan paling lambat 4 November 2026, yaitu 30 hari sejak keputusan diterima",
        C: "Gugatan paling lambat 19 Oktober 2026, yaitu 14 hari sejak keputusan diterima",
        D: "Keberatan kepada Direktur Jenderal Pajak paling lambat 5 Januari 2027"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keputusan atas permohonan Pasal 36 adalah keputusan yang berkaitan dengan pelaksanaan keputusan perpajakan selain keputusan keberatan, sehingga upayanya gugatan (Pasal 23 ayat (2) huruf c UU KUP) dalam 30 hari sejak keputusan diterima (Pasal 40 ayat (3) UU 14/2002).",
        jejakHitung: [["Keputusan diterima", "Senin, 5 Oktober 2026"], ["+ 30 hari", "Rabu, 4 November 2026"]],
        mengapaSalah: { A: "Banding hanya atas keputusan keberatan (Pasal 27 UU KUP).", C: "14 hari berlaku untuk gugatan atas pelaksanaan penagihan (Surat Paksa, SPMP, pengumuman lelang).", D: "Keputusan Pasal 36 bukan objek keberatan; keberatan hanya atas SKP dan pemotongan/pemungutan." },
        jebakan: "Gugatan punya dua tenggat: 14 hari untuk tindakan penagihan, 30 hari untuk keputusan lain."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (2) huruf c dan Pasal 36 UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 40 ayat (3) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-083", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 1, kasusId: "V-A2-06", formulirRef: "1771.induk.10",
      stem: "Data untuk soal vignette V-A2-06: PT Sentra Boga Utama (tahun buku kalender, peredaran bruto 2025 Rp46 miliar, bukan WP kriteria tertentu, bukan PKP berisiko rendah) menyampaikan SPT Tahunan PPh Badan 2025 tepat waktu pada 20 April 2026. Isinya: PPh terutang Rp1.160.000.000; kredit pajak PPh Pasal 22 impor Rp310.000.000, PPh Pasal 23 Rp90.000.000, dan angsuran PPh Pasal 25 12 × Rp116.000.000; seluruh bukti potong/pungut dilampirkan. Direksi ingin kelebihan pembayaran dikembalikan tanpa didahului pemeriksaan. Pada baris pilihan atas PPh lebih bayar di induk SPT 1771, isian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Lebih bayar Rp632.000.000 dimohon direstitusikan melalui pemeriksaan (Pasal 17B), karena badan tidak dapat memperoleh pengembalian pendahuluan",
        B: "Lebih bayar Rp632.000.000 dimohon dikembalikan dengan SKPPKP Pasal 17C, karena SPT disampaikan tepat waktu",
        C: "Lebih bayar Rp632.000.000 dimohon dikembalikan dengan SKPPKP Pasal 17D, karena lebih bayar badan tidak melebihi Rp1 miliar",
        D: "Lebih bayar Rp632.000.000 dimohon dikembalikan sebagai pengembalian pendahuluan PKP berisiko rendah (Pasal 9 ayat (4c) UU PPN)"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kredit pajak Rp1.792.000.000 melebihi PPh terutang Rp1.160.000.000 sehingga lebih bayar Rp632.000.000. Badan dengan lebih bayar paling banyak Rp1 miliar memenuhi ambang WP persyaratan tertentu Pasal 17D sehingga dapat memilih pengembalian pendahuluan tanpa pemeriksaan (SKPPKP).",
        jejakHitung: [["Kredit pajak = 310 jt + 90 jt + (12 × 116 jt)", "Rp1.792.000.000"], ["Lebih bayar = 1.792.000.000 − 1.160.000.000", "Rp632.000.000"], ["Ambang Pasal 17D untuk badan", "≤ Rp1.000.000.000 → memenuhi"], ["Isian baris pilihan lebih bayar", "dikembalikan dengan SKPPKP Pasal 17D"]],
        mengapaSalah: { A: "Pasal 17B memang tersedia, tetapi didahului pemeriksaan; badan dengan lebih bayar ≤ Rp1 miliar dapat memakai Pasal 17D.", B: "Pasal 17C khusus WP kriteria tertentu yang ditetapkan DJP; satu SPT tepat waktu tidak cukup.", D: "Pengembalian pendahuluan PKP berisiko rendah hanya untuk PPN, bukan PPh Badan." },
        jebakan: "Bagi badan yang diuji adalah jumlah lebih bayar (≤ Rp1 miliar), bukan PPh terutang atau besarnya kredit pajak; peredaran bruto Rp46 miliar juga masih di bawah batas peredaran usaha badan yang diberitakan untuk PMK 28/2026 (Rp50 miliar ◐)."
      },
      dasarHukum: [{ pasal: "Pasal 17B, 17C, dan 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 28 Tahun 2026 (pengembalian pendahuluan; mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Tahunan PPh Badan)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "SPT disampaikan 20 April 2026, sebelum PMK 28 Tahun 2026 berlaku (1 Mei 2026); batas lebih bayar badan Rp1 miliar sama menurut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021 maupun PMK 28/2026, dan peredaran Rp46 miliar di bawah batas peredaran badan yang diberitakan untuk PMK 28/2026 (Rp50 miliar), sehingga jawaban tidak bergantung pada ketentuan mana yang diterapkan; nomor pasal, batas peredaran, dan ketentuan peralihan PMK 28/2026 belum dibaca dari teks ◐. Label baris pilihan lebih bayar pada induk SPT 1771 versi Coretax (PER-11/PJ/2025) belum dicek langsung; formulirRef mengacu ke baris 1771.induk.10 (kurang/lebih bayar dan pilihan atas lebih bayar) di peta formulir proyek."
    },
    {
      id: "A2-084", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A2-06",
      kutipan: "Pasal 1 angka 22 huruf a UU KUP: Kredit Pajak untuk Pajak Penghasilan adalah pajak yang dibayar sendiri oleh Wajib Pajak ditambah dengan pokok pajak yang terutang dalam Surat Tagihan Pajak karena Pajak Penghasilan dalam tahun berjalan tidak atau kurang dibayar, ditambah dengan pajak yang dipotong atau dipungut, ditambah dengan pajak atas penghasilan yang dibayar atau terutang di luar negeri, dikurangi dengan pengembalian pendahuluan kelebihan pajak, yang dikurangkan dari pajak yang terutang.",
      stem: "Lanjutan V-A2-06: PT Sentra Boga Utama (PPh Badan 2025: PPh terutang menurut SPT Rp1.160.000.000; PPh Pasal 22 Rp310.000.000, PPh Pasal 23 Rp90.000.000, PPh Pasal 25 Rp1.392.000.000) menerima SKPPKP Pasal 17D dan pengembalian pendahuluan Rp632.000.000 pada Juni 2026. Pemeriksaan kemudian menyimpulkan PPh terutang Rp1.390.000.000 dan hanya mengakui PPh Pasal 23 Rp70.000.000 karena bukti potong Rp20.000.000 tidak dapat ditunjukkan; kredit lain diakui penuh. Berdasarkan kutipan, pokok PPh kurang dibayar yang dicantumkan dalam SKPKB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp250.000.000", B: "Rp0; justru terbit SKPLB Rp382.000.000", C: "Rp230.000.000", D: "Rp882.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kredit pajak menurut pemeriksaan dikurangi pengembalian pendahuluan yang sudah diterima. Kurang dibayar = PPh terutang menurut pemeriksaan − (kredit pajak yang diakui − pengembalian pendahuluan).",
        jejakHitung: [["Kredit diakui = 310.000.000 + 70.000.000 + 1.392.000.000", "Rp1.772.000.000"], ["Dikurangi pengembalian pendahuluan", "− Rp632.000.000"], ["Kredit pajak menurut kutipan", "Rp1.140.000.000"], ["Kurang dibayar = 1.390.000.000 − 1.140.000.000", "Rp250.000.000"]],
        mengapaSalah: { B: "Lupa mengurangkan pengembalian pendahuluan: 1.390.000.000 − 1.772.000.000 tampak lebih bayar, padahal Rp632.000.000 sudah dikembalikan.", C: "Mengabaikan koreksi PPh Pasal 23 Rp20.000.000 (hanya 1.390 jt − 1.160 jt).", D: "Menagih kembali seluruh pengembalian pendahuluan ditambah koreksi; yang ditetapkan hanya kekurangan bersih." },
        jebakan: "Pengembalian pendahuluan mengurangi kredit pajak; tanpa langkah ini hasil pemeriksaan terlihat lebih bayar."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 22 huruf a UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 17D UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 13 ayat (1) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-085", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A2-06",
      stem: "Lanjutan V-A2-06: SKPKB PPh Badan 2025 PT Sentra Boga Utama yang diterbitkan Jumat, 16 Oktober 2026 memuat pokok kurang dibayar Rp250.000.000. Perusahaan sebelumnya memperoleh pengembalian pendahuluan berdasarkan Pasal 17D. Anggap tarif bunga uplift 15% yang berlaku 1,84% per bulan. Jumlah yang harus dibayar menurut SKPKB (pokok dan sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp296.000.000", B: "Rp437.500.000", C: "Rp546.000.000", D: "Rp500.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "SKPKB yang terbit setelah pengembalian pendahuluan Pasal 17C/17D dikenai kenaikan 100% dari jumlah kekurangan pembayaran pajak, bukan bunga Pasal 13 ayat (2).",
        jejakHitung: [["Pokok kurang dibayar", "Rp250.000.000"], ["Kenaikan 100%", "Rp250.000.000"], ["Jumlah SKPKB", "Rp500.000.000"]],
        mengapaSalah: { A: "Memakai bunga Pasal 13 ayat (2): 31 Des 2025 → 16 Okt 2026 = 10 bulan × 1,84% × Rp250.000.000 = Rp46.000.000.", B: "Kenaikan 75% milik Pasal 13 ayat (3), bukan sanksi atas pengembalian pendahuluan.", C: "Menjumlahkan kenaikan 100% dan bunga Pasal 13 ayat (2) sekaligus." },
        jebakan: "Tarif 1,84% sengaja diberikan sebagai pengecoh: sanksi khusus pengembalian pendahuluan menggantikan bunga SKPKB biasa."
      },
      dasarHukum: [{ pasal: "Pasal 17C ayat (5) dan 17D ayat (5) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 13 ayat (2) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Kenaikan 100% Pasal 17C/17D bersumber dari riset 02b bertanda [P]; nomor ayat perlu dicek ke teks konsolidasi UU KUP."
    },
    {
      id: "A2-086", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "PMK 44/2026 (parafrase setia): Kuasa di bidang perpajakan dapat berupa konsultan pajak, pihak lain yang memiliki surat keterangan terdaftar, atau keluarga Wajib Pajak, yaitu suami atau istri serta keluarga sedarah atau semenda sampai dengan derajat kedua. Kuasa wajib memiliki surat kuasa khusus yang menyebutkan hak dan/atau kewajiban perpajakan yang dikuasakan beserta masa berlakunya, dan kuasa tidak dapat melimpahkan kuasa tersebut kepada pihak lain.",
      stem: "Ny. Hana Pertiwi (pedagang, NIK sebagai NPWP) dirawat di rumah sakit di luar kota dan ingin mengajukan keberatan atas SKPKB PPh Orang Pribadi 2024 melalui Portal Wajib Pajak lewat seorang kuasa. Calon kuasa: (1) Tuan Arif, adik kandungnya, karyawan swasta tanpa sertifikat brevet; (2) Tuan Bayu, paman dari pihak ibu; (3) Tuan Dimas, kakak kandung suaminya; (4) Sdri. Eka, keponakan (anak dari kakaknya). Draf surat kuasa yang disiapkan berbunyi 'berlaku sampai dicabut' dan 'kuasa berhak menunjuk orang lain untuk mewakili'. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Tuan Arif, Tuan Dimas, dan Sdri. Eka dapat menjadi kuasa keluarga; draf surat kuasa dapat dipakai karena masa berlaku tidak wajib dicantumkan bagi kuasa keluarga",
        B: "Hanya Tuan Arif dan Tuan Dimas yang dapat menjadi kuasa keluarga; surat kuasa khusus harus menyebut hak yang dikuasakan (pengajuan keberatan) dan masa berlaku yang pasti, serta tidak boleh memberi hak substitusi",
        C: "Hanya Tuan Arif dan Tuan Bayu yang dapat menjadi kuasa keluarga karena keduanya keluarga sedarah; surat kuasa khusus harus menyebut hak yang dikuasakan (pengajuan keberatan) dan masa berlaku yang pasti, serta tidak boleh memberi hak substitusi",
        D: "Tuan Arif tidak dapat menjadi kuasa karena tidak memiliki sertifikat brevet; hanya Tuan Dimas yang memenuhi syarat dengan surat kuasa khusus bermasa berlaku pasti"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kuasa keluarga dibatasi sampai derajat kedua: adik kandung (sedarah derajat kedua) dan kakak suami (semenda derajat kedua) memenuhi, sedangkan paman dan keponakan berderajat ketiga. Syarat kompetensi (brevet/ijazah) hanya untuk pihak lain ber-SKT, bukan keluarga. Surat kuasa khusus wajib memuat hak yang dikuasakan dan masa berlaku, tanpa substitusi.",
        jejakHitung: [["(1) Adik kandung", "sedarah derajat 2 → boleh"], ["(2) Paman", "sedarah derajat 3 → tidak boleh"], ["(3) Kakak kandung suami", "semenda derajat 2 → boleh"], ["(4) Keponakan", "sedarah derajat 3 → tidak boleh"], ["Draf 'berlaku sampai dicabut' dan hak substitusi", "harus diperbaiki"]],
        mengapaSalah: { A: "Keponakan berderajat ketiga, dan masa berlaku wajib dicantumkan bagi semua kuasa.", C: "Paman berderajat ketiga; sebaliknya kakak suami (semenda derajat kedua) memenuhi syarat.", D: "Syarat brevet/ijazah perpajakan hanya berlaku bagi pihak lain ber-SKT, bukan kuasa keluarga." },
        jebakan: "Hitung derajat lewat orang tua bersama: saudara kandung derajat 2, paman dan keponakan derajat 3."
      },
      dasarHukum: [{ pasal: "Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 44/2026 Pasal 2–3 dan Pasal 8", berlakuSejak: "2026-07-06" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A2-087", topik: "A2.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ibu Lia Kartika (orang pribadi penduduk, NIK sebagai NPWP) berdagang bahan bangunan dan membayar PPh final 0,5% berdasarkan PP 55/2022 s.t.d.d. PP 20/2026; ia belum PKP. Peredaran bruto 2025 Rp4,1 miliar. Peredaran bruto 2026: Januari–Agustus Rp3.950.000.000, September Rp480.000.000, Oktober Rp510.000.000, dan November diperkirakan Rp450.000.000. Ia tidak memiliki penghasilan dari luar negeri maupun dari pekerjaan bebas. Pernyataan yang paling tepat tentang kewajibannya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Wajib melaporkan usaha untuk dikukuhkan sebagai PKP paling lambat 31 Oktober 2026; PPh final 0,5% berhenti sejak Masa Oktober 2026",
        B: "Wajib melaporkan usaha untuk dikukuhkan sebagai PKP paling lambat 30 November 2026; PPh final 0,5% berhenti sejak Masa November 2026, dan sisa penghasilan tahun 2026 dihitung dengan tarif Pasal 17 dalam SPT Tahunan",
        C: "Wajib melaporkan usaha untuk dikukuhkan sebagai PKP paling lambat 30 November 2026; PPh final 0,5% tetap berlaku sampai akhir Tahun Pajak 2026, dan mulai Tahun Pajak 2027 penghasilannya dikenai tarif umum",
        D: "Wajib melaporkan usaha untuk dikukuhkan sebagai PKP paling lambat 31 Desember 2026, yaitu akhir tahun buku; PPh final 0,5% tetap berlaku sampai akhir Tahun Pajak 2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas Rp4,8 miliar diuji kumulatif dalam tahun buku: terlampaui pada Oktober 2026 sehingga laporan pengukuhan PKP paling lambat akhir bulan berikutnya (30 November 2026). Untuk PPh, batas Rp4,8 miliar diuji atas tahun sebelumnya, sehingga tarif final 0,5% tetap dipakai sampai akhir 2026 dan tarif umum berlaku mulai 2027.",
        jejakHitung: [["s.d. Agustus", "Rp3.950.000.000"], ["s.d. September (+Rp480 jt)", "Rp4.430.000.000 ≤ Rp4,8 M"], ["s.d. Oktober (+Rp510 jt)", "Rp4.940.000.000 > Rp4,8 M"], ["Lapor pengukuhan PKP", "paling lambat 30 November 2026"], ["PPh", "final 0,5% s.d. Desember 2026; tarif umum mulai 2027"]],
        mengapaSalah: { A: "Batas lapor PKP adalah akhir bulan berikutnya, bukan akhir bulan saat batas terlampaui; PPh final juga tidak berhenti di tengah tahun.", B: "PPh final tidak berhenti di tengah tahun pajak; perubahan ke tarif umum berlaku mulai tahun pajak berikutnya.", D: "Kewajiban lapor PKP tidak menunggu akhir tahun buku." },
        jebakan: "Satu angka batas (Rp4,8 miliar) memicu dua akibat dengan waktu berbeda: PPN segera (akhir bulan berikutnya), PPh pada tahun pajak berikutnya."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (2) UU KUP; PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 (batas peredaran bruto PPh final)", berlakuSejak: "2026-04-22" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Ketentuan bahwa PPh final 0,5% tetap dipakai sampai akhir tahun pajak saat peredaran bruto melampaui Rp4,8 miliar disimpulkan dari pengujian batas atas tahun sebelumnya (riset 02a B.6); pasal PP 55/2022 yang mengaturnya belum dikutip langsung."
    },
    {
      id: "A2-088", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Bahtera Niaga (tahun buku kalender) memotong PPh Pasal 21 Masa Oktober 2026. Pada Kamis, 15 Oktober 2026 perusahaan juga menerima SKPKB PPN Masa Juni 2024 yang diterbitkan pada hari yang sama, dengan jatuh tempo pelunasan 1 bulan sejak diterbitkan. Tanggal 15 November 2026 jatuh pada hari Minggu, dan tidak ada hari libur nasional lain pada November 2026. Kombinasi batas waktu yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "PPh Pasal 21 disetor paling lambat Senin, 16 November 2026; SPT Masa PPh 21/26 dilaporkan paling lambat Jumat, 20 November 2026; SKPKB dilunasi paling lambat Minggu, 15 November 2026 karena jatuh tempo pelunasan ketetapan tidak bergeser",
        B: "PPh Pasal 21 disetor paling lambat Jumat, 13 November 2026 karena dimajukan ke hari kerja sebelumnya; SPT Masa PPh 21/26 paling lambat Jumat, 20 November 2026; SKPKB paling lambat Minggu, 15 November 2026",
        C: "PPh Pasal 21 disetor paling lambat Senin, 16 November 2026; SPT Masa PPh 21/26 dilaporkan paling lambat Jumat, 20 November 2026; SKPKB dilunasi paling lambat Senin, 16 November 2026 karena jatuh tempo pelunasan ketetapan ikut bergeser ke hari kerja berikutnya",
        D: "PPh Pasal 21 disetor paling lambat Selasa, 10 November 2026; SPT Masa PPh 21/26 paling lambat Jumat, 20 November 2026; SKPKB paling lambat Minggu, 15 November 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Jatuh tempo penyetoran pajak masa yang jatuh pada hari libur bergeser ke hari kerja berikutnya (PMK 81/2024 Pasal 100), sedangkan jatuh tempo pelunasan SKPKB (1 bulan sejak terbit, Pasal 9 ayat (3)) tidak bergeser; pelunasan dapat dilakukan lebih awal atau melalui kanal elektronik.",
        jejakHitung: [["Setor PPh 21 Masa Oktober: 15 Nov 2026 (Minggu)", "bergeser ke Senin, 16 November 2026"], ["Lapor SPT Masa: 20 hari setelah masa berakhir", "Jumat, 20 November 2026"], ["SKPKB terbit 15 Okt + 1 bulan", "15 November 2026, tidak bergeser"]],
        mengapaSalah: { B: "Jatuh tempo setor bergeser ke hari kerja berikutnya, bukan dimajukan.", C: "Pergeseran hari libur dalam PMK 81/2024 berlaku untuk pembayaran pajak masa, bukan jatuh tempo pelunasan ketetapan.", D: "Tanggal 10 adalah batas setor PPh 21 menurut PMK 242/2014 yang telah dicabut." },
        jebakan: "Dua jatuh tempo pada tanggal yang sama diperlakukan berbeda karena dasar hukumnya berbeda."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 100", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 9 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 100, verifikasi: "◐",
      peringatan: "Penegasan bahwa jatuh tempo pelunasan SKPKB/STP tidak bergeser karena hari libur bersumber dari pemberitaan (riset 02a A.1); teks resminya belum dibaca langsung."
    },
    {
      id: "A2-089", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Untuk Tahun Pajak 2026, KPP memetakan kewajiban pembukuan atau pencatatan lima Wajib Pajak: (1) PT Sejahtera Mandiri, perseroan perorangan yang didirikan satu orang, peredaran bruto Rp700 juta, memakai PPh final 0,5%; (2) Koperasi Tani Makmur, peredaran bruto Rp2 miliar; (3) dr. Sinta, dokter praktik mandiri, peredaran bruto 2025 Rp1,6 miliar, memberitahukan pemakaian NPPN pada 12 Februari 2026; (4) Tuan Joko, pegawai tetap yang juga menerima sewa rumah (PPh final), tanpa usaha atau pekerjaan bebas; (5) Notaris Budi, peredaran bruto 2025 Rp5,2 miliar. Wajib Pajak yang wajib menyelenggarakan pembukuan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(5) saja", B: "(1) dan (5)", C: "(2), (3), dan (5)", D: "(1), (2), dan (5)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 28 ayat (1) mewajibkan pembukuan bagi semua WP badan (termasuk perseroan perorangan dan koperasi walaupun memakai PPh final) dan WP orang pribadi berusaha/pekerjaan bebas. Pencatatan hanya untuk orang pribadi yang boleh dan memberitahukan NPPN serta orang pribadi tanpa usaha/pekerjaan bebas.",
        jejakHitung: [["(1) Perseroan perorangan (badan), PPh final", "pembukuan"], ["(2) Koperasi (badan)", "pembukuan"], ["(3) Dokter, NPPN diberitahukan tepat waktu", "pencatatan"], ["(4) Pegawai tanpa usaha", "pencatatan"], ["(5) Notaris, peredaran bruto > Rp4,8 M", "pembukuan"]],
        mengapaSalah: { A: "Melupakan bahwa badan, sekecil apa pun omzetnya, wajib pembukuan.", B: "Koperasi juga badan sehingga wajib pembukuan.", C: "dr. Sinta memenuhi syarat NPPN dan memberitahukannya dalam 3 bulan pertama, sehingga cukup pencatatan; perseroan perorangan justru wajib pembukuan." },
        jebakan: "PPh final 0,5% bukan alasan bebas pembukuan bagi badan."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 14 ayat (2) UU PPh; PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 (subjek PPh final)", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A2-090", topik: "A2.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 8 ayat (1), (4), dan (5) UU KUP (parafrase setia): Wajib Pajak dengan kemauan sendiri dapat membetulkan SPT yang telah disampaikan, dengan syarat Direktur Jenderal Pajak belum melakukan tindakan pemeriksaan. Walaupun telah dilakukan pemeriksaan, Wajib Pajak dengan kemauan sendiri dapat mengungkapkan dalam laporan tersendiri ketidakbenaran pengisian SPT yang telah disampaikan, sepanjang Surat Pemberitahuan Hasil Pemeriksaan belum disampaikan, disertai pelunasan kekurangan pajak beserta bunga dengan uplift 10%; pemeriksaan tetap dilanjutkan.",
      stem: "PT Delta Sarana (tahun buku kalender) menerima SP2 pemeriksaan terfokus atas SPT Tahunan PPh Badan 2024 pada Senin, 3 Agustus 2026. Pada Senin, 21 September 2026, sebelum SPHP disampaikan, manajer pajak menemukan penghasilan jasa yang belum dilaporkan sehingga PPh kurang dibayar Rp40.000.000. Direksi ingin memperbaiki kesalahan itu sendiri agar sanksinya lebih ringan daripada bila dikoreksi pemeriksa. Berdasarkan kutipan, langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Menyampaikan SPT pembetulan Pasal 8 ayat (1) dan melunasi kekurangan beserta bunga uplift 5%, sehingga pemeriksaan terfokus dihentikan",
        B: "Mengungkapkan ketidakbenaran pengisian SPT dalam laporan tersendiri sebelum SPHP disampaikan, melunasi kekurangan beserta bunga uplift 10%, sehingga pemeriksaan terfokus dihentikan",
        C: "Mengungkapkan ketidakbenaran pengisian SPT dalam laporan tersendiri sebelum SPHP disampaikan, melunasi kekurangan beserta bunga uplift 10%, dan pemeriksaan tetap dilanjutkan",
        D: "Menunggu SPHP lalu menyetujui koreksi dalam PAHP, karena bunga dalam SKPKB juga memakai uplift 10%"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setelah SP2 disampaikan, pembetulan biasa tertutup; jalurnya pengungkapan ketidakbenaran pengisian SPT (Pasal 8 ayat (4)) sebelum SPHP, dengan bunga Pasal 8 ayat (5) uplift 10%. Pemeriksaan tetap dilanjutkan, dan koreksi lain tetap dapat ditetapkan dalam SKP.",
        jejakHitung: [["SP2 disampaikan", "3 Agustus 2026 → pembetulan Pasal 8 ayat (1) tertutup"], ["21 September 2026, SPHP belum ada", "pengungkapan Pasal 8 ayat (4) terbuka"], ["Sanksi pengungkapan", "bunga uplift 10% (Oktober 2026: 1,42% per bulan)"], ["Bila menunggu koreksi pemeriksa", "SKPKB berbunga uplift 15% (1,84% per bulan)"]],
        mengapaSalah: { A: "Pembetulan Pasal 8 ayat (1) hanya dapat dilakukan sebelum DJP melakukan tindakan pemeriksaan.", B: "Pengungkapan tidak menghentikan pemeriksaan.", D: "SKPKB hasil pemeriksaan memakai uplift 15% (Pasal 13 ayat (2)), lebih berat dari 10%." },
        jebakan: "Opsi B dan C hanya berbeda pada akibatnya terhadap pemeriksaan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1), (4), dan (5) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 15/2025", berlakuSejak: "2025-02-14" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A2-091", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Pemeriksaan atas SPT Tahunan PPh Badan 2024 empat perusahaan (semua tahun buku kalender, SPT tepat waktu) selesai pada Oktober 2026: (1) PT Alfa: SPT lebih bayar Rp300.000.000 dimintakan restitusi; menurut pemeriksaan masih lebih bayar Rp120.000.000. (2) PT Beta: SPT lebih bayar Rp90.000.000; menurut pemeriksaan PPh terutang sama dengan kredit pajak. (3) PT Gama: SPT lebih bayar Rp50.000.000; menurut pemeriksaan kurang bayar Rp70.000.000. (4) PT Delta: telah menerima pengembalian pendahuluan Pasal 17C; menurut pemeriksaan kurang bayar Rp40.000.000. Pemetaan produk hukum dan sanksi yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(1) SKPLB Rp120.000.000; (2) SKPN; (3) SKPKB Rp70.000.000 dengan bunga Pasal 13 ayat (2); (4) SKPKB Rp40.000.000 dengan kenaikan 100%",
        B: "(1) SKPLB Rp120.000.000 dan SKPKB Rp180.000.000 atas selisih koreksi; (2) SKPN; (3) SKPKB Rp70.000.000 dengan bunga Pasal 13 ayat (2); (4) SKPKB Rp40.000.000 dengan kenaikan 100%",
        C: "(1) SKPLB Rp120.000.000; (2) SKPLB nihil; (3) STP Rp70.000.000 dengan bunga Pasal 14 ayat (3); (4) SKPKB Rp40.000.000 dengan kenaikan 100%",
        D: "(1) SKPLB Rp120.000.000; (2) SKPN; (3) SKPKB Rp70.000.000 dengan kenaikan 75%; (4) SKPKB Rp40.000.000 dengan bunga Pasal 13 ayat (2)"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Ketetapan mengikuti selisih akhir pajak terutang dan kredit pajak: lebih bayar → SKPLB sebesar lebih bayar menurut pemeriksaan; sama → SKPN; kurang bayar → SKPKB berbunga Pasal 13 ayat (2). Kekurangan setelah pengembalian pendahuluan Pasal 17C dikenai kenaikan 100%.",
        jejakHitung: [["(1) Lebih bayar menurut pemeriksaan", "SKPLB Rp120.000.000 (koreksi Rp180 jt tidak ditagih tersendiri)"], ["(2) Terutang = kredit pajak", "SKPN"], ["(3) Kurang bayar", "SKPKB + bunga uplift 15%"], ["(4) Kurang bayar setelah Pasal 17C", "SKPKB + kenaikan 100%"]],
        mengapaSalah: { B: "Koreksi atas lebih bayar hanya mengurangi SKPLB, tidak menimbulkan SKPKB terpisah.", C: "Hasil pemeriksaan dituangkan dalam SKP, bukan STP; 'SKPLB nihil' tidak dikenal (yang tepat SKPN).", D: "Kenaikan 75% hanya untuk SKPKB Pasal 13 ayat (1) huruf b–d, dan kekurangan setelah pengembalian pendahuluan dikenai kenaikan 100%." },
        jebakan: "Arah koreksi (dari lebih bayar menjadi kurang bayar) tidak mengubah jenis sanksi; yang menentukan adalah dasar penerbitan SKPKB."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf a dan ayat (2), Pasal 17, dan Pasal 17A UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 17C ayat (5) UU KUP", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Kenaikan 100% Pasal 17C bersumber dari riset 02b bertanda [P]; nomor ayat perlu dicek ke teks konsolidasi UU KUP."
    },
    {
      id: "A2-092", topik: "A2.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Wijaya Kusuma menerima SKPKB PPh Pasal 21 Masa Mei 2025 (pokok Rp64.000.000) yang diterbitkan dan dikirim Selasa, 1 September 2026. Pokok Rp14.000.000 yang disetujui dalam PAHP dilunasi 10 September 2026. Pada 25 September 2026 staf keuangan menyampaikan surat keberatan lewat Portal Wajib Pajak yang hanya memuat alasan keberatan tanpa menyebut jumlah pajak terutang menurut perusahaan, dan ditandatangani staf itu sendiri tanpa surat kuasa khusus. Pada Jumat, 9 Oktober 2026 KPP memberitahukan bahwa surat tersebut tidak memenuhi persyaratan. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Hak keberatan atas SKPKB tersebut telah habis karena satu surat ketetapan pajak hanya dapat diajukan keberatan satu kali",
        B: "Surat itu dianggap bukan surat keberatan sehingga tidak dipertimbangkan; perusahaan masih dapat menyampaikan surat keberatan baru yang memenuhi syarat (memuat jumlah pajak terutang menurut WP beserta alasan, ditandatangani pengurus atau kuasa dengan surat kuasa khusus) paling lambat 1 Desember 2026",
        C: "Perusahaan dapat langsung mengajukan banding ke Pengadilan Pajak paling lambat 3 bulan sejak pemberitahuan 9 Oktober 2026",
        D: "Perusahaan dapat menyampaikan surat keberatan baru yang memenuhi syarat (memuat jumlah pajak terutang menurut WP beserta alasan, ditandatangani pengurus atau kuasa dengan surat kuasa khusus) paling lambat 9 Januari 2027, yaitu 3 bulan sejak pemberitahuan tidak memenuhi persyaratan"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Keberatan yang tidak memenuhi persyaratan Pasal 25 ayat (1)–(4) bukan surat keberatan sehingga tidak dipertimbangkan (Pasal 25 ayat (5)); karena belum ada keberatan yang sah, WP masih dapat mengajukan keberatan yang lengkap selama jangka 3 bulan sejak SKP dikirim belum lewat.",
        jejakHitung: [["SKPKB dikirim", "Selasa, 1 September 2026"], ["Tenggat keberatan (+3 bulan)", "Selasa, 1 Desember 2026"], ["Syarat pelunasan PAHP", "Rp14.000.000 lunas 10 September 2026"], ["Cacat surat 25 September", "tanpa jumlah menurut WP; tanpa surat kuasa khusus"]],
        mengapaSalah: { A: "Surat yang tidak memenuhi syarat dianggap bukan surat keberatan, sehingga hak keberatan belum terpakai.", C: "Banding hanya atas SK Keberatan; belum ada keputusan keberatan.", D: "Tenggat tetap dihitung sejak SKP dikirim, bukan sejak pemberitahuan." },
        jebakan: "Pemberitahuan KPP tidak memulai tenggat baru."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1)–(5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 32 ayat (3) UU KUP; PMK 44/2026 (surat kuasa khusus)", berlakuSejak: "2026-07-06" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A2-093", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Kirana Busana menerima SKPKB PPh Badan 2024 yang diterbitkan Selasa, 6 Oktober 2026 dengan pokok Rp90.000.000 dan bunga Pasal 13 ayat (2) Rp36.432.000; jatuh tempo pelunasan Jumat, 6 November 2026. Sebelum jatuh tempo, permohonan angsurannya disetujui: pokok diangsur tiga kali Rp30.000.000 pada 4 Desember 2026, 4 Januari 2027, dan 4 Februari 2027, sedangkan bunga dalam SKPKB dilunasi 4 Maret 2027; semua dibayar tepat jadwal. Dalam soal ini bunga Pasal 19 ayat (2) dihitung per bulan atas sisa pokok yang belum dibayar, dengan tarif selama masa angsuran dianggap 0,59% per bulan (uplift 0%); tarif uplift 5% 1,01%. Jumlah bunga Pasal 19 ayat (2) atas angsuran pokok tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.593.000", B: "Rp1.818.000", C: "Rp3.600.000", D: "Rp1.062.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "angka-usang" },
      pembahasan: {
        inti: "WP yang diperbolehkan mengangsur dikenai bunga Pasal 19 ayat (2) dengan uplift 0% atas jumlah yang masih harus dibayar, sehingga bunga menurun mengikuti sisa pokok setiap bulan.",
        jejakHitung: [["6 Nov → 4 Des 2026 (1 bulan): 90.000.000 × 0,59%", "Rp531.000"], ["4 Des 2026 → 4 Jan 2027 (1 bulan): 60.000.000 × 0,59%", "Rp354.000"], ["4 Jan → 4 Feb 2027 (1 bulan): 30.000.000 × 0,59%", "Rp177.000"], ["Total bunga Pasal 19 ayat (2)", "Rp1.062.000"]],
        mengapaSalah: { A: "Menghitung atas pokok penuh Rp90.000.000 selama 3 bulan tanpa memperhitungkan angsuran.", B: "Memakai uplift 5%; angsuran/penundaan memakai uplift 0% (Pasal 19).", C: "Memakai bunga 2% per bulan sebelum UU Cipta Kerja/UU HPP." },
        jebakan: "Bunga dalam SKPKB (Rp36.432.000) bukan dasar soal ini; dasar bunga angsuran adalah sisa pokok."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4) dan Pasal 19 ayat (2) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A2-094", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-A2-07",
      stem: "Data untuk soal vignette V-A2-07: CV Dharma Niaga (PKP, tahun buku kalender) pada Senin, 5 Oktober 2026 menerima tiga dokumen yang diterbitkan dan dikirim pada hari itu: (i) STP atas angsuran PPh Pasal 25 Masa Juni dan Juli 2026 yang tidak dibayar, berisi pokok Rp18.000.000 dan bunga Pasal 14 ayat (3); (ii) SKPKB PPN Masa Agustus 2024 hasil pemeriksaan dengan pokok Rp120.000.000 ditambah bunga Pasal 13 ayat (2), dan dalam PAHP CV hanya menyetujui pokok Rp30.000.000; (iii) Surat Teguran karena SPT Tahunan PPh Badan 2025 belum disampaikan. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(i) dan (ii) sama-sama dapat diajukan keberatan paling lambat 5 Januari 2027; (iii) merupakan awal tindakan penagihan yang dapat diikuti Surat Paksa setelah lewat 21 hari",
        B: "(i) dapat diajukan keberatan karena memuat pokok pajak; (ii) dapat diajukan keberatan paling lambat 5 Januari 2027 setelah melunasi Rp30.000.000; (iii) bila SPT tetap tidak disampaikan dalam jangka waktu yang ditentukan dalam teguran, PPh dapat ditetapkan dengan SKPKB Pasal 13 ayat (1) huruf b",
        C: "(i) tidak dapat diajukan keberatan, tetapi sanksinya dapat dimohonkan pengurangan/penghapusan berdasarkan Pasal 36; (ii) dapat diajukan keberatan paling lambat 5 Januari 2027 setelah melunasi Rp30.000.000; (iii) bila SPT tetap tidak disampaikan dalam jangka waktu yang ditentukan dalam teguran, PPh dapat ditetapkan dengan SKPKB Pasal 13 ayat (1) huruf b berbunga uplift 20%",
        D: "(i) tidak dapat diajukan keberatan, tetapi sanksinya dapat dimohonkan pengurangan/penghapusan berdasarkan Pasal 36; (ii) dapat diajukan keberatan paling lambat 5 Januari 2027 setelah melunasi seluruh SKPKB beserta bunganya; (iii) bila SPT tetap tidak disampaikan dalam jangka waktu yang ditentukan dalam teguran, PPh dapat ditetapkan dengan SKPKB Pasal 13 ayat (1) huruf b berbunga uplift 20%"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "STP bukan surat ketetapan pajak sehingga tidak dapat diajukan keberatan; sanksinya dapat dimohonkan pengurangan/penghapusan lewat Pasal 36. SKPKB diajukan keberatan dalam 3 bulan setelah melunasi jumlah yang disetujui dalam PAHP. Surat Teguran SPT bukan tindakan penagihan; ketidakpatuhan atasnya membuka SKPKB Pasal 13 ayat (1) huruf b dengan sanksi Pasal 13 ayat (3).",
        jejakHitung: [["(i) STP", "bukan SKP → Pasal 36"], ["(ii) SKPKB dikirim 5 Okt 2026 + 3 bulan", "5 Januari 2027; lunasi Rp30.000.000 lebih dahulu"], ["(iii) Teguran SPT", "dasar SKPKB Pasal 13 ayat (1) huruf b; PPh → bunga uplift 20%"]],
        mengapaSalah: { A: "STP tidak dapat diajukan keberatan, dan Surat Teguran SPT berbeda dari Surat Teguran penagihan dalam UU PPSP.", B: "STP tetap bukan objek keberatan walaupun memuat pokok pajak.", D: "Syarat pelunasan sebelum keberatan hanya sejumlah yang disetujui dalam PAHP, bukan seluruh SKPKB." },
        jebakan: "Istilah 'Surat Teguran' dipakai untuk dua hal: teguran SPT (UU KUP) dan teguran penagihan (UU PPSP)."
      },
      dasarHukum: [{ pasal: "Pasal 13 ayat (1) huruf b dan ayat (3), Pasal 14, Pasal 25 ayat (1), (3), dan (3a), serta Pasal 36 UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A2-095", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-A2-07",
      stem: "Lanjutan V-A2-07: CV Dharma Niaga tidak membayar STP PPh Pasal 25 (pokok Rp18.000.000 ditambah bunga, diterbitkan Senin, 5 Oktober 2026). Atas SKPKB PPN (pokok Rp120.000.000, diterbitkan pada hari yang sama), CV melunasi pokok Rp30.000.000 yang disetujui dalam PAHP pada Rabu, 28 Oktober 2026, lalu menyampaikan keberatan yang memenuhi syarat dan diterima Senin, 2 November 2026; sisa SKPKB tidak dibayar. Tidak ada permohonan angsuran atau penundaan. Pernyataan yang paling tepat tentang tindakan penagihan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Surat Teguran atas STP paling cepat Jumat, 13 November 2026; atas sisa SKPKB tidak diterbitkan Surat Teguran karena jangka waktu pelunasannya tertangguh sampai 1 bulan sejak SK Keberatan; bila teguran STP disampaikan Senin, 16 November 2026, Surat Paksa paling cepat Selasa, 8 Desember 2026",
        B: "Surat Teguran atas STP dan atas sisa SKPKB Rp90.000.000 paling cepat Jumat, 13 November 2026; bila teguran disampaikan Senin, 16 November 2026, Surat Paksa atas keduanya paling cepat Selasa, 8 Desember 2026",
        C: "Surat Teguran atas STP paling cepat Jumat, 6 November 2026; atas sisa SKPKB tidak diterbitkan Surat Teguran karena jangka waktu pelunasannya tertangguh; bila teguran STP disampaikan Senin, 16 November 2026, Surat Paksa paling cepat Selasa, 8 Desember 2026",
        D: "Surat Teguran atas STP paling cepat Jumat, 13 November 2026; atas sisa SKPKB tidak diterbitkan Surat Teguran karena jangka waktu pelunasannya tertangguh sampai 1 bulan sejak SK Keberatan; bila teguran STP disampaikan Senin, 16 November 2026, Surat Paksa paling cepat Senin, 7 Desember 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "STP jatuh tempo 1 bulan sejak terbit (5 November 2026); Surat Teguran diterbitkan setelah lewat 7 hari (paling cepat 13 November), dan Surat Paksa setelah lewat 21 hari sejak teguran disampaikan. Sisa SKPKB yang belum dibayar saat keberatan diajukan tertangguh (Pasal 25 ayat (7)), sehingga belum dapat ditagih.",
        jejakHitung: [["Jatuh tempo STP: 5 Okt + 1 bulan", "Kamis, 5 November 2026"], ["Lewat 7 hari (5 Nov + 7 = 12 Nov)", "teguran paling cepat Jumat, 13 November 2026"], ["Teguran disampaikan 16 Nov + 21 hari = 7 Des", "Surat Paksa paling cepat Selasa, 8 Desember 2026"], ["Sisa SKPKB Rp90.000.000", "tertangguh sejak keberatan diajukan (2 November 2026)"]],
        mengapaSalah: { B: "Sisa SKPKB yang disengketakan dalam keberatan tertangguh pelunasannya sehingga tidak ditagih dengan teguran atau Surat Paksa.", C: "6 November adalah sehari setelah jatuh tempo; teguran baru dapat diterbitkan setelah lewat 7 hari.", D: "Surat Paksa diterbitkan setelah lewat 21 hari, yaitu mulai hari ke-22 (8 Desember), bukan pada hari ke-21." },
        jebakan: "Dua dokumen yang terbit bersamaan berpisah nasib: STP berjalan ke penagihan, SKPKB yang diajukan keberatan tertangguh."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (3) dan Pasal 25 ayat (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 UU PPSP; PMK 61/2023 Pasal 6", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-096", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A2-07",
      stem: "Lanjutan V-A2-07: keberatan CV Dharma Niaga atas SKPKB PPN Masa Agustus 2024 (pokok Rp120.000.000; pokok Rp30.000.000 yang disetujui dalam PAHP telah dilunasi sebelum keberatan) diputus dengan SK Keberatan yang mengabulkan sebagian sehingga pokok menjadi Rp95.000.000. SK diterbitkan Jumat, 3 September 2027 dan diterima CV Senin, 6 September 2027. CV mempertimbangkan banding. Dasar denda dihitung dari pokok pajak. Dengan mengabaikan pergeseran hari libur, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Banding paling lambat 3 Desember 2027; bila banding ditolak, denda Pasal 27 ayat (5d) sebesar 60% × Rp95.000.000 = Rp57.000.000",
        B: "Banding paling lambat 6 Desember 2027; bila banding ditolak, CV membayar denda Pasal 27 ayat (5d) Rp39.000.000 ditambah denda keberatan Pasal 25 ayat (9) sebesar Rp19.500.000",
        C: "Banding paling lambat 6 Desember 2027; bila banding ditolak, denda Pasal 27 ayat (5d) sebesar 60% × Rp95.000.000 = Rp57.000.000",
        D: "Banding paling lambat 6 Desember 2027; bila banding ditolak, denda Pasal 27 ayat (5d) sebesar Rp39.000.000, sedangkan denda 30% Pasal 25 ayat (9) tidak dikenakan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Banding diajukan paling lama 3 bulan sejak SK Keberatan diterima (6 Desember 2027). Bila banding ditolak, denda 60% dihitung dari pajak menurut Putusan Banding dikurangi pembayaran sebelum keberatan, dan denda keberatan 30% gugur karena WP banding.",
        jejakHitung: [["SK Keberatan diterima + 3 bulan", "6 Desember 2027"], ["Pokok menurut putusan (banding ditolak)", "Rp95.000.000"], ["Dibayar sebelum keberatan", "Rp30.000.000"], ["Denda 60% × (95.000.000 − 30.000.000)", "Rp39.000.000"], ["Denda 30% Pasal 25 ayat (9)", "tidak dikenakan (Pasal 25 ayat (10))"]],
        mengapaSalah: { A: "Tenggat dihitung sejak SK diterima, bukan diterbitkan; dasar denda juga harus dikurangi pembayaran sebelum keberatan.", B: "Bila WP banding, denda 30% Pasal 25 ayat (9) tidak dikenakan.", C: "Dasar denda 60% dikurangi pembayaran sebelum keberatan Rp30.000.000." },
        jebakan: "Kalau tidak banding, denda yang berlaku 30% × Rp65.000.000 = Rp19.500.000; banding yang ditolak menaikkannya menjadi Rp39.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (9)–(10) dan Pasal 27 ayat (5d) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A2-097", topik: "A2.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Atas PT Lentera Abadi, Direktorat Jenderal Pajak melakukan empat kegiatan berikut: (1) petugas KPP menilai kelengkapan isian SPT Masa PPN dan lampirannya serta kebenaran penulisan dan penghitungannya, tanpa meminta buku; (2) pemeriksa menghimpun dan mengolah data, keterangan, dan bukti berdasarkan standar pemeriksaan untuk menguji kepatuhan PPh Badan 2024; (3) pemeriksa mencari bukti permulaan atas dugaan penerbitan faktur pajak fiktif; (4) penyidik mengumpulkan bukti untuk membuat terang tindak pidana dan menemukan tersangkanya. Menurut definisi Pasal 1 UU KUP, kegiatan (1) sampai (4) secara berurutan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pemeriksaan; Penelitian; Pemeriksaan Bukti Permulaan; Penyidikan",
        B: "Penelitian; Pemeriksaan; Pemeriksaan Bukti Permulaan; Penyidikan",
        C: "Penelitian; Pemeriksaan Bukti Permulaan; Pemeriksaan; Penyidikan",
        D: "Penelitian; Pemeriksaan; Penyidikan; Pemeriksaan Bukti Permulaan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penelitian menilai kelengkapan dan kebenaran penulisan/penghitungan SPT; Pemeriksaan menghimpun dan mengolah data untuk menguji kepatuhan; Pemeriksaan Bukti Permulaan mencari bukti permulaan dugaan tindak pidana; Penyidikan membuat terang tindak pidana dan menemukan tersangka.",
        jejakHitung: [],
        mengapaSalah: { A: "Kegiatan tanpa meminta buku yang hanya menilai kelengkapan dan hitungan adalah penelitian, bukan pemeriksaan.", C: "Pengujian kepatuhan berdasarkan standar pemeriksaan adalah pemeriksaan; bukti permulaan khusus untuk dugaan pidana.", D: "Pemeriksaan bukti permulaan mendahului penyidikan; penyidikan yang menemukan tersangka." },
        jebakan: "Urutan logis dari administrasi ke pidana: penelitian, pemeriksaan, bukti permulaan, penyidikan."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU KUP (definisi Penelitian, Pemeriksaan, Pemeriksaan Bukti Permulaan, dan Penyidikan)", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 43A UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A2-098", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mahakam Sejahtera (tahun buku kalender, peredaran bruto 2025 Rp63 miliar sehingga tidak memperoleh fasilitas Pasal 31E) melaporkan rugi fiskal 2024 Rp800.000.000 dan mengompensasikannya seluruhnya dalam SPT Tahunan PPh Badan 2025 yang disampaikan tepat waktu (penghasilan neto fiskal 2025 Rp1.500.000.000). Pemeriksaan atas Tahun Pajak 2024 menghasilkan surat ketetapan pajak yang dikirim dan diterima Senin, 14 September 2026, yang menetapkan rugi fiskal 2024 hanya Rp300.000.000. Atas Tahun Pajak 2025 belum pernah dilakukan pemeriksaan. Pernyataan yang paling tepat tentang SPT Tahunan 2025 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Dapat dibetulkan paling lambat 14 Desember 2026, dengan tambahan PPh terutang Rp176.000.000",
        B: "Tidak dapat dibetulkan karena batas waktu SPT Tahunan 2025 telah lewat; selisih kompensasi menunggu pemeriksaan Tahun Pajak 2025",
        C: "Dapat dibetulkan paling lambat 14 Desember 2026, dengan tambahan PPh terutang Rp110.000.000",
        D: "Dapat dibetulkan paling lambat 31 Desember 2026, dengan tambahan PPh terutang Rp110.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "WP yang menerima SKP untuk tahun sebelumnya dengan rugi fiskal berbeda dari yang telah dikompensasikan dapat membetulkan SPT dalam 3 bulan setelah menerima SKP (Pasal 8 ayat (6)). Kompensasi turun Rp500.000.000 sehingga PPh bertambah 22% × Rp500.000.000.",
        jejakHitung: [["Rugi dikompensasikan semula", "Rp800.000.000"], ["Rugi menurut SKP", "Rp300.000.000"], ["Selisih kompensasi", "Rp500.000.000"], ["Tambahan PPh = 22% × 500.000.000", "Rp110.000.000"], ["SKP diterima 14 Sep 2026 + 3 bulan", "14 Desember 2026"]],
        mengapaSalah: { A: "Mengalikan 22% dengan seluruh rugi Rp800.000.000; yang berubah hanya selisih Rp500.000.000.", B: "Pasal 8 ayat (6) memberi hak pembetulan khusus dalam 3 bulan setelah menerima SKP.", D: "Batas pembetulan khusus ini dihitung 3 bulan sejak SKP diterima, bukan akhir tahun." },
        jebakan: "Peredaran bruto di atas Rp50 miliar sengaja disebut agar tarif yang dipakai 22% penuh tanpa Pasal 31E."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (6) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 6 ayat (2) dan Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Hak pembetulan 3 bulan setelah menerima SKP yang mengubah rugi fiskal (Pasal 8 ayat (6) UU KUP) disusun dari pengetahuan teks UU; riset proyek tidak memuat kutipan ayat ini. Sanksi bunga atas pembetulan jenis ini sengaja tidak ditanyakan."
    },
    {
      id: "A2-099", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 28 ayat (9) UU KUP: Pencatatan terdiri atas data yang dikumpulkan secara teratur tentang peredaran atau penerimaan bruto dan/atau penghasilan bruto sebagai dasar untuk menghitung jumlah pajak yang terutang, termasuk penghasilan yang bukan objek pajak dan/atau yang dikenai pajak yang bersifat final.",
      stem: "dr. Sinta Maharani (dokter praktik mandiri di Bandung, peredaran bruto 2025 Rp1,6 miliar) memberitahukan pemakaian NPPN untuk Tahun Pajak 2026 pada 12 Februari 2026 sehingga cukup menyelenggarakan pencatatan. Selama 2026 ia memperoleh: (1) penerimaan dari praktik dokter; (2) bunga deposito yang telah dipotong PPh final 20%; (3) hibah uang dari orang tua kandung; (4) sewa ruko yang telah dipotong PPh final 10%. Ia juga mengeluarkan (5) gaji perawat dan (6) pembelian obat. Berdasarkan kutipan, data yang wajib dicatat dalam pencatatannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), (3), dan (4)", B: "(1) saja", C: "(1), (5), dan (6)", D: "(1), (2), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pencatatan mencakup peredaran/penerimaan bruto dan penghasilan bruto, termasuk penghasilan bukan objek pajak (hibah dari keluarga sedarah satu derajat) dan penghasilan yang dikenai PPh final; biaya tidak perlu dicatat karena neto dihitung dengan norma.",
        jejakHitung: [["(1) Penerimaan praktik", "dicatat (dasar NPPN)"], ["(2) Bunga deposito final", "dicatat"], ["(3) Hibah orang tua (bukan objek)", "dicatat"], ["(4) Sewa ruko final", "dicatat"], ["(5)–(6) Biaya", "tidak wajib; neto = norma × peredaran bruto"]],
        mengapaSalah: { B: "Penghasilan final dan penghasilan bukan objek pajak ikut dicatat menurut kutipan.", C: "Pencatatan tidak memuat biaya; pengurangan biaya digantikan norma.", D: "Melewatkan penghasilan bukan objek pajak (hibah), padahal kutipan menyebutnya." },
        jebakan: "'Bukan objek' dan 'final' tidak sama dengan 'tidak perlu dicatat'."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (2) dan (9) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 4 ayat (2) dan (3) serta Pasal 14 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A2-100", topik: "A2.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "PT Bahari Samudra memakai tahun buku 1 Juli–30 Juni yang telah disetujui DJP. SPT Tahunan PPh Badan untuk tahun buku 1 Juli 2020–30 Juni 2021 disampaikan pada 28 Oktober 2021. SP2 pemeriksaan atas tahun buku tersebut disampaikan 9 Februari 2026, dan pemeriksa menemukan PPh kurang dibayar Rp210.000.000; konsep SKPKB direncanakan terbit Selasa, 20 Oktober 2026. Tidak ada putusan pidana atas WP. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "SKPKB masih dapat diterbitkan sampai 31 Desember 2026 karena daluwarsa dihitung 5 tahun sejak akhir tahun kalender 2021",
        B: "SKPKB tidak dapat lagi diterbitkan karena daluwarsa penetapan berakhir 30 Juni 2026, kecuali bila kemudian WP dipidana berdasarkan putusan berkekuatan hukum tetap (Pasal 13 ayat (5))",
        C: "SKPKB masih dapat diterbitkan karena SP2 disampaikan sebelum daluwarsa, sehingga jangka waktu penetapan tertangguh selama pemeriksaan berlangsung sampai SPHP dan PAHP selesai",
        D: "SKPKB masih dapat diterbitkan sampai 28 Oktober 2026 karena daluwarsa dihitung 5 tahun sejak SPT disampaikan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Daluwarsa penetapan 5 tahun dihitung setelah berakhirnya Tahun Pajak, yang bagi tahun buku non-kalender berakhir pada akhir tahun buku (30 Juni 2021), sehingga berakhir 30 Juni 2026. Pemeriksaan tidak menangguhkan daluwarsa penetapan; pengecualiannya hanya Pasal 13 ayat (5).",
        jejakHitung: [["Akhir tahun buku", "30 Juni 2021"], ["+ 5 tahun", "30 Juni 2026"], ["Rencana SKPKB", "20 Oktober 2026 → lewat daluwarsa"]],
        mengapaSalah: { A: "Tahun Pajak mengikuti tahun buku, bukan tahun kalender.", C: "UU KUP tidak mengenal penangguhan daluwarsa penetapan karena pemeriksaan; penangguhan berlaku untuk daluwarsa penagihan (Pasal 22).", D: "Daluwarsa tidak dihitung dari tanggal SPT disampaikan." },
        jebakan: "Penangguhan milik daluwarsa penagihan sering dipinjam keliru untuk daluwarsa penetapan."
      },
      dasarHukum: [{ pasal: "Pasal 1 (Tahun Pajak) dan Pasal 13 ayat (1) dan (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 22 UU KUP (pembanding)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A2-101", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Aruna Teknik menerima SKPKB PPh Pasal 23 Masa Juli 2025 yang diterbitkan Rabu, 7 Oktober 2026, dengan pokok Rp60.000.000 dan bunga Pasal 13 ayat (2) Rp16.560.000 (jumlah Rp76.560.000). Pada 20 Oktober 2026 perusahaan menyetor Rp38.280.000 dengan kode billing SKPKB tersebut dan belum mengajukan permohonan apa pun. Menurut PMK 118/2024 s.t.d.d. PMK 71/2026 yang berlaku sejak 2 Oktober 2026, sisa utang dalam SKPKB setelah pembayaran itu adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Sisa pokok Rp30.000.000 dan sisa bunga Rp8.280.000, karena pembayaran dialokasikan proporsional ke pokok dan sanksi",
        B: "Sisa pokok Rp38.280.000 dan sisa bunga Rp0, karena pembayaran melunasi sanksi lebih dahulu",
        C: "Sisa pokok Rp21.720.000 dan sisa bunga Rp16.560.000, karena pembayaran dialokasikan ke pokok lebih dahulu",
        D: "Sisa pokok Rp21.720.000, sedangkan bunga Rp16.560.000 terhapus otomatis tanpa permohonan berdasarkan KEP-239/PJ/2026"
      },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 71/2026 mengubah alokasi pembayaran utang pajak: pembayaran dialokasikan ke pokok lebih dahulu (sebelumnya proporsional). Fasilitas pengurangan/penghapusan sanksi (KEP-239/PJ/2026) hanya diberikan atas permohonan.",
        jejakHitung: [["Pembayaran", "Rp38.280.000"], ["Dialokasikan ke pokok: 60.000.000 − 38.280.000", "sisa pokok Rp21.720.000"], ["Bunga belum tersentuh", "Rp16.560.000"], ["Pembanding proporsional (aturan lama, 50%)", "sisa pokok Rp30.000.000; bunga Rp8.280.000"]],
        mengapaSalah: { A: "Alokasi proporsional adalah ketentuan sebelum PMK 71/2026.", B: "Tidak ada ketentuan yang mendahulukan sanksi.", D: "Fasilitas sanksi tidak otomatis; WP harus mengajukan permohonan." },
        jebakan: "Pembayaran tepat separuh jumlah SKPKB dipilih agar hasil proporsional tampak 'rapi' dan menggoda."
      },
      dasarHukum: [{ pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 (alokasi pembayaran; Pasal 27A fasilitas sanksi)", berlakuSejak: "2026-10-02" }, { pasal: "KEP-239/PJ/2026", berlakuSejak: "2026-10-08" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Aturan alokasi pembayaran ke pokok lebih dahulu bersumber dari pemberitaan PMK 71/2026 (riset 02b bagian E); teks pasalnya belum dibaca langsung."
    },
    {
      id: "A2-102", topik: "A2.10", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 21 ayat (1), (3), dan (3a) UU KUP (parafrase setia): Negara mempunyai hak mendahulu untuk utang pajak atas barang-barang milik Penanggung Pajak. Hak mendahulu untuk tagihan pajak melebihi segala hak mendahulu lainnya, kecuali terhadap biaya perkara yang semata-mata disebabkan suatu penghukuman untuk melelang suatu barang bergerak dan/atau tidak bergerak, biaya yang telah dikeluarkan untuk menyelamatkan barang dimaksud, dan/atau biaya perkara yang semata-mata disebabkan pelelangan dan penyelesaian suatu warisan. Dalam hal Wajib Pajak dinyatakan pailit, bubar, atau dilikuidasi, kurator, likuidator, atau orang atau badan yang ditugasi melakukan pemberesan dilarang membagikan harta Wajib Pajak kepada pemegang saham atau kreditur lainnya sebelum menggunakan harta tersebut untuk membayar utang pajak Wajib Pajak tersebut.",
      stem: "PT Samudra Jaya dinyatakan pailit. Kurator memegang hasil penjualan harta pailit Rp1.200.000.000. Tagihan yang tercatat: utang pajak (SKPKB PPN beserta bunga dan STP) Rp700.000.000; biaya perkara pelelangan aset Rp50.000.000; biaya penjagaan dan asuransi untuk menyelamatkan aset sebelum dilelang Rp30.000.000; utang dagang kepada para pemasok (kreditur konkuren) Rp650.000.000; serta permintaan pemegang saham agar sebagian hasil penjualan dibagikan kepada mereka. Berdasarkan kutipan, urutan penggunaan hasil penjualan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Biaya perkara pelelangan Rp50.000.000 dan biaya penyelamatan aset Rp30.000.000 dibayar lebih dahulu, lalu utang pajak Rp700.000.000 dilunasi; sisa Rp420.000.000 untuk kreditur lain, dan pemegang saham hanya menerima bila masih ada sisa",
        B: "Utang pajak Rp700.000.000 dan utang pemasok Rp650.000.000 dibayar secara pro rata dari Rp1.120.000.000 setelah biaya perkara dan biaya penyelamatan aset",
        C: "Utang pajak Rp700.000.000 dilunasi lebih dahulu sebelum biaya perkara pelelangan dan biaya penyelamatan aset, karena hak mendahulu negara melebihi segala hak mendahulu lainnya; sisa Rp500.000.000 baru dipakai untuk biaya dan kreditur lain",
        D: "Sebagian hasil penjualan boleh dibagikan kepada pemegang saham setelah utang pemasok dilunasi, sedangkan utang pajak ditagih kepada direksi secara pribadi"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hak mendahulu negara berada di atas kreditur lain kecuali biaya perkara pelelangan, biaya penyelamatan barang, dan biaya penyelesaian warisan. Kurator dilarang membagikan harta kepada kreditur lain atau pemegang saham sebelum utang pajak dibayar.",
        jejakHitung: [["Hasil penjualan", "Rp1.200.000.000"], ["− biaya perkara pelelangan dan penyelamatan aset", "Rp80.000.000 → sisa Rp1.120.000.000"], ["− utang pajak", "Rp700.000.000 → sisa Rp420.000.000"], ["Sisa untuk kreditur konkuren", "Rp420.000.000 (dari tagihan Rp650.000.000)"]],
        mengapaSalah: { B: "Utang pajak tidak berbagi pro rata dengan kreditur konkuren; ia didahulukan.", C: "Kutipan memberi pengecualian untuk biaya perkara pelelangan dan biaya penyelamatan barang.", D: "Kurator dilarang membagikan harta kepada pemegang saham atau kreditur lain sebelum utang pajak dibayar." },
        jebakan: "'Melebihi segala hak mendahulu lainnya' tetap memiliki tiga pengecualian biaya."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1), (3), dan (3a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "UU PPSP (Penanggung Pajak) dan Pasal 32 UU KUP", berlakuSejak: "2000-08-02" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Kutipan Pasal 21 UU KUP disusun dari pengetahuan teks UU; riset proyek belum memuatnya. Hubungan hak mendahulu pajak dengan upah pekerja dan kreditur separatis sengaja tidak diuji."
    },
    {
      id: "A2-103", topik: "A2.11", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 27 ayat (5f) dan (5g) UU KUP (parafrase setia): Dalam hal Putusan Peninjauan Kembali menyebabkan jumlah pajak yang masih harus dibayar bertambah, Wajib Pajak dikenai sanksi administratif berupa denda sebesar 60% dari jumlah pajak berdasarkan Putusan Peninjauan Kembali dikurangi dengan pembayaran pajak yang telah dibayar sebelum mengajukan keberatan. Sanksi tersebut ditagih dengan STP yang diterbitkan paling lama 2 tahun sejak Putusan Peninjauan Kembali diterima Direktur Jenderal Pajak.",
      stem: "SKPKB PPh Badan PT Orion Prima memuat pokok Rp300.000.000. Sebelum keberatan, WP melunasi pokok yang disetujui dalam PAHP Rp50.000.000. Keberatan ditolak, tetapi Putusan Banding mengabulkan seluruh banding sehingga pokok menjadi Rp50.000.000. DJP mengajukan Peninjauan Kembali, dan Putusan PK yang diterima DJP pada Kamis, 10 September 2026 menetapkan pokok Rp210.000.000. Dasar denda dihitung dari pokok pajak. Berdasarkan kutipan, sanksi dan batas penagihannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Denda 30% × Rp160.000.000 = Rp48.000.000, ditagih dengan STP paling lambat 10 September 2028",
        B: "Denda 60% × (Rp210.000.000 − Rp50.000.000) = Rp96.000.000, ditagih dengan STP paling lambat 10 September 2028",
        C: "Denda 60% × Rp210.000.000 = Rp126.000.000, ditagih dengan STP paling lambat 10 September 2028",
        D: "Denda 60% × (Rp210.000.000 − Rp50.000.000) = Rp96.000.000, ditetapkan dengan SKPKBT paling lambat 10 September 2031"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Putusan PK yang menambah pajak yang masih harus dibayar menimbulkan denda 60% dari pajak menurut Putusan PK dikurangi pembayaran sebelum keberatan, ditagih dengan STP paling lama 2 tahun sejak putusan diterima DJP.",
        jejakHitung: [["Pokok menurut Putusan PK", "Rp210.000.000"], ["Dibayar sebelum keberatan", "Rp50.000.000"], ["Denda = 60% × 160.000.000", "Rp96.000.000"], ["Batas STP: 10 Sep 2026 + 2 tahun", "10 September 2028"]],
        mengapaSalah: { A: "30% adalah denda keberatan; PK memakai 60%.", C: "Lupa mengurangkan pembayaran sebelum keberatan.", D: "Denda ditagih dengan STP dalam 2 tahun, bukan dengan SKPKBT dalam 5 tahun." },
        jebakan: "Pembayaran sebelum keberatan (Rp50.000.000) dikurangkan di semua tingkat: keberatan, banding, dan PK."
      },
      dasarHukum: [{ pasal: "Pasal 27 ayat (5f) dan (5g) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 77 ayat (3) dan Pasal 89–93 UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Denda 60% dan batas STP 2 tahun bersumber dari riset 02a A.4; rumusan pengurang 'pembayaran sebelum mengajukan keberatan' dalam Pasal 27 ayat (5f) belum dibaca langsung dari teks konsolidasi."
    },
    {
      id: "A2-104", topik: "A2.3", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-A2-08", formulirRef: "1111.induk.15",
      stem: "Data untuk soal vignette V-A2-08: PT Mega Teknik Persada (PKP, tahun buku kalender, bukan eksportir, terdaftar di KPP Madya) melaporkan SPT Masa PPN Juli 2026 pada Jumat, 28 Agustus 2026 dengan Pajak Keluaran Rp180.000.000 dan Pajak Masukan Rp150.000.000; kurang bayar Rp30.000.000 telah disetor Kamis, 27 Agustus 2026. Pada Oktober 2026, sebelum ada pemeriksaan, perusahaan menemukan bahwa Pajak Masukan itu mencakup PPN Rp5.500.000 atas jasa renovasi rumah pribadi direktur (penggantian Rp50.000.000) yang tidak berhubungan langsung dengan kegiatan usaha. Perusahaan menyampaikan SPT Masa PPN pembetulan. Isian baris 'PPN kurang atau (lebih) bayar karena pembetulan' pada induk SPT Masa PPN (butir III.F pada peta formulir) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp35.500.000 kurang bayar", B: "Rp6.000.000 kurang bayar", C: "Rp30.000.000 kurang bayar", D: "Rp5.500.000 kurang bayar" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Pajak Masukan atas perolehan yang tidak berhubungan langsung dengan kegiatan usaha tidak dapat dikreditkan. Pada SPT pembetulan, III.D memuat kurang/lebih bayar hasil hitung baru (III.A − III.B − III.C), III.E memuat angka SPT yang dibetulkan, dan III.F = III.D − III.E.",
        jejakHitung: [["PM yang dapat dikreditkan (III.C) = 150.000.000 − 5.500.000", "Rp144.500.000"], ["III.D = 180.000.000 − 0 − 144.500.000", "Rp35.500.000 kurang bayar"], ["III.E (SPT yang dibetulkan)", "Rp30.000.000 kurang bayar"], ["III.F = III.D − III.E", "Rp5.500.000 kurang bayar"]],
        mengapaSalah: { A: "Rp35.500.000 adalah isian III.D (hasil hitung baru), bukan selisih karena pembetulan.", B: "Menghitung ulang 12% × Rp50.000.000 tanpa DPP nilai lain 11/12; yang dikeluarkan dari Pajak Masukan adalah PPN dalam faktur, Rp5.500.000.", C: "Rp30.000.000 adalah isian III.E dari SPT yang dibetulkan." },
        jebakan: "Butir III.D, III.E, dan III.F berurutan dan mudah tertukar; yang disetor sebelum pembetulan hanya III.F."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (8) huruf b UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 8 ayat (1) dan (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa PPN)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Penomoran butir III.A–III.F mengikuti peta formulir proyek (induk SPT Masa PPN 1111 pra-Coretax, kode 1111.induk.15); di Coretax (PER-11/PJ/2025) komponen yang sama tersaji dengan tata letak berbeda dan belum dicek langsung. Jawaban tidak bergantung pada huruf butir."
    },
    {
      id: "A2-105", topik: "A2.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A2-08",
      stem: "Lanjutan V-A2-08: PT Mega Teknik Persada menyetor kekurangan PPN Masa Juli 2026 karena pembetulan sebesar Rp5.500.000 pada Selasa, 13 Oktober 2026 dan menyampaikan SPT Masa PPN pembetulan Rabu, 14 Oktober 2026. SPT Masa PPN semula disampaikan tepat waktu. Anggap tarif bunga uplift 5% yang berlaku pada tanggal dimulainya penghitungan sanksi 1,03% per bulan; tarif Oktober 2026 1,01%. Sanksi administratif atas pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp56.650", B: "Rp111.100", C: "Rp113.300", D: "Rp613.300" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembetulan SPT Masa yang menambah utang pajak dikenai bunga Pasal 8 ayat (2a) uplift 5% sejak jatuh tempo pembayaran PPN Masa Juli 2026 (31 Agustus 2026) sampai tanggal setor, memakai tarif yang berlaku pada tanggal dimulainya sanksi; SPT semula tepat waktu sehingga tidak ada denda.",
        jejakHitung: [["Jatuh tempo setor PPN Masa Juli 2026", "Senin, 31 Agustus 2026"], ["31 Agu → 13 Okt 2026", "1 bulan 13 hari = 2 bulan"], ["Bunga = 5.500.000 × 1,03% × 2", "Rp113.300"], ["Denda Pasal 7", "tidak ada (SPT semula tepat waktu)"]],
        mengapaSalah: { A: "Membulatkan ke bawah menjadi 1 bulan.", B: "Memakai tarif Oktober 2026 (bulan pembayaran), padahal tarif dikunci pada tanggal dimulainya sanksi.", D: "Menambahkan denda Rp500.000 SPT Masa PPN, padahal SPT semula disampaikan tepat waktu." },
        jebakan: "Tarif dikunci pada awal sanksi (Agustus 2026), bukan bulan setor (Oktober 2026)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 3 ayat (3) dan Pasal 9 ayat (1) UU KUP", berlakuSejak: "2010-01-01" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026", berlakuSejak: "2021-10-29" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A2-106", topik: "A2.9", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-A2-08", formulirRef: "1111.induk.16",
      stem: "Lanjutan V-A2-08: untuk Masa Agustus 2026, PT Mega Teknik Persada (PKP, bukan eksportir, tidak menyerahkan kepada pemungut PPN, tidak melakukan penyerahan yang PPN-nya tidak dipungut, dan sudah berproduksi) mencatat Pajak Keluaran Rp120.000.000 dan Pajak Masukan yang dapat dikreditkan Rp185.000.000 karena membeli mesin produksi baru. Direksi ingin kelebihan itu segera dikembalikan dan mengetahui bahwa sejak 1 Mei 2026 pengembalian pendahuluan bagi PKP persyaratan tertentu dibatasi lebih bayar paling banyak Rp1 miliar dan jumlah penyerahan paling banyak Rp4,2 miliar untuk suatu Masa Pajak. Pada butir pilihan atas PPN lebih bayar di induk SPT Masa PPN (butir III.G pada peta formulir), isian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Dikompensasikan ke Masa Pajak berikutnya; pengembalian (restitusi) atas kelebihan yang masih tersisa baru dapat dimohonkan pada akhir tahun buku, yaitu Masa Desember 2026",
        B: "Dikembalikan (restitusi) melalui pengembalian pendahuluan Pasal 17D karena kelebihan Rp65.000.000 dan jumlah penyerahan Masa Agustus 2026 masih di bawah batas PKP persyaratan tertentu (Rp1 miliar dan Rp4,2 miliar), tanpa harus menunggu akhir tahun buku",
        C: "Dikembalikan (restitusi) melalui pemeriksaan Pasal 17B karena setiap PKP berhak meminta restitusi pada setiap Masa Pajak",
        D: "Tidak diisi; kelebihan Pajak Masukan Rp65.000.000 hangus bila tidak dimintakan restitusi pada masa yang sama"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Kelebihan Pajak Masukan dikompensasikan ke masa berikutnya; restitusi hanya pada akhir tahun buku, kecuali bagi PKP tertentu dalam Pasal 9 ayat (4b) UU PPN (eksportir, penyerahan kepada pemungut, penyerahan yang tidak dipungut, PKP belum berproduksi) yang boleh setiap masa. Batas Pasal 17D baru relevan bila hak restitusi sudah ada; sejak 1 Mei 2026 (PMK 28 Tahun 2026) PKP persyaratan tertentu juga tidak lagi diperlakukan sebagai PKP berisiko rendah yang boleh meminta pengembalian pendahuluan setiap masa (Pasal 9 ayat (4c) UU PPN).",
        jejakHitung: [["Lebih bayar = 185.000.000 − 120.000.000", "Rp65.000.000"], ["Termasuk PKP Pasal 9 ayat (4b)?", "tidak"], ["Isian pilihan lebih bayar (III.G) Masa Agustus 2026", "dikompensasikan ke Masa September 2026"], ["Restitusi paling cepat", "Masa Desember 2026 (akhir tahun buku)"]],
        mengapaSalah: { B: "Pasal 17D mengatur cara pengembalian, bukan hak restitusi tiap masa; sejak PMK 28/2026 PKP persyaratan tertentu tidak lagi diperlakukan sebagai PKP berisiko rendah, sehingga PKP biasa baru berhak pada akhir tahun buku.", C: "Restitusi setiap masa hanya untuk PKP dalam Pasal 9 ayat (4b) UU PPN.", D: "Kelebihan Pajak Masukan tidak hangus; ia dikompensasikan ke masa berikutnya." },
        jebakan: "Batas Rp1 miliar dan Rp4,2 miliar sengaja disebut: memenuhi batas pengembalian pendahuluan tidak menciptakan hak restitusi per masa."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (4), (4a), dan (4b) UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "Pasal 17B dan 17D UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 28 Tahun 2026 (pengembalian pendahuluan; mencabut PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", berlakuSejak: "2026-05-01" }],
      anggaranDetik: 140, verifikasi: "◐",
      peringatan: "Penomoran butir III.G mengikuti peta formulir proyek (induk SPT Masa PPN 1111 pra-Coretax, kode 1111.induk.16); tata letak Coretax belum dicek langsung. Rincian Pasal 9 ayat (4b) UU PPN bersumber dari riset 02b B.6 bertanda [P]. Batas PKP Pasal 17D dan ketentuan bahwa PKP persyaratan tertentu tidak lagi diperlakukan sebagai PKP berisiko rendah mengikuti ringkasan resmi PMK 28 Tahun 2026 ✅; nomor pasalnya belum dibaca dari teks ◐."
    },
    {
      id: "A2-107", topik: "A2.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 28 ayat (3) dan Pasal 39 ayat (1) huruf d UU KUP (parafrase setia, sebagian): Pembukuan atau pencatatan harus diselenggarakan dengan memperhatikan iktikad baik dan mencerminkan keadaan atau kegiatan usaha yang sebenarnya. Setiap orang yang dengan sengaja menyampaikan Surat Pemberitahuan dan/atau keterangan yang isinya tidak benar atau tidak lengkap sehingga dapat menimbulkan kerugian pada pendapatan negara dipidana dengan pidana penjara paling singkat 6 bulan dan paling lama 6 tahun dan denda paling sedikit 2 kali dan paling banyak 4 kali jumlah pajak terutang yang tidak atau kurang dibayar.",
      stem: "CV Arunika Jaya (PKP, peredaran bruto 2023 Rp7,5 miliar) dengan sengaja tidak mencatat penjualan tunai salah satu gerainya dalam pembukuan, sehingga SPT Tahunan PPh Badan 2023 yang disampaikan isinya tidak benar. Pemeriksaan bukti permulaan menghitung kerugian pada pendapatan negara (pajak kurang dibayar) Rp150.000.000. Konsultannya membandingkan tiga skenario: (a) mengungkapkan ketidakbenaran perbuatan selama pemeriksaan bukti permulaan, sebelum penyidikan diberitahukan kepada penuntut umum; (b) bila sudah disidik, memohon penghentian penyidikan berdasarkan Pasal 44B atas perkara Pasal 39; (c) perkara diputus pengadilan. Berdasarkan kutipan dan UU KUP setelah UU HPP, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(a) melunasi Rp375.000.000; (b) melunasi Rp600.000.000; (c) pidana penjara 6 bulan–6 tahun dan denda Rp300.000.000–Rp600.000.000",
        B: "(a) melunasi Rp300.000.000; (b) melunasi Rp600.000.000; (c) pidana penjara 6 bulan–6 tahun dan denda Rp300.000.000–Rp600.000.000",
        C: "(a) melunasi Rp300.000.000; (b) melunasi Rp750.000.000; (c) pidana penjara 6 bulan–6 tahun dan denda Rp300.000.000–Rp600.000.000",
        D: "(a) melunasi Rp300.000.000; (b) melunasi Rp600.000.000; (c) pidana kurungan 3 bulan–1 tahun atau denda Rp150.000.000–Rp300.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Skenario (a): pengungkapan ketidakbenaran perbuatan menyampaikan SPT yang isinya tidak benar (Pasal 8 ayat (3)) mewajibkan pelunasan kekurangan ditambah denda 100% (Rp300.000.000). Skenario (b): penghentian penyidikan Pasal 44B mensyaratkan pelunasan kerugian ditambah denda 3 kali untuk perkara Pasal 39 (Rp600.000.000). Skenario (c): Pasal 39 ayat (1) huruf d mengancam penjara 6 bulan–6 tahun dan denda 2–4 kali (Rp300.000.000–Rp600.000.000).",
        jejakHitung: [["(a) 150.000.000 + 100% × 150.000.000", "Rp300.000.000"], ["(b) 150.000.000 + 3 × 150.000.000", "Rp600.000.000"], ["(c) Denda 2× s.d. 4× × 150.000.000", "Rp300.000.000–Rp600.000.000"]],
        mengapaSalah: { A: "Denda pengungkapan 150% berlaku sebelum UU HPP; kini 100%.", C: "Denda 4 kali adalah Pasal 44B sebelum UU HPP; kini pengalinya 1×/3×/4× menurut pasal pidana, dan perkara Pasal 39 memakai 3×.", D: "Kurungan 3 bulan–1 tahun dan denda 1–2 kali adalah Pasal 38 (kealpaan), padahal perbuatan dilakukan dengan sengaja." },
        jebakan: "Ketiga skenario memakai pengali berbeda atas angka yang sama; jangan menyamakan 100%, 3×, dan 2–4×."
      },
      dasarHukum: [{ pasal: "Pasal 39 ayat (1) huruf d UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (3) dan (3a) serta Pasal 44B UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 28 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Rentang pidana Pasal 38–39 dan pengali Pasal 44B bertanda ◐ dalam riset proyek (02a A.4); denda 100% Pasal 8 ayat (3a) terverifikasi. Perbuatan dalam soal sengaja dibatasi pada penyampaian SPT yang isinya tidak benar karena cakupan Pasal 8 ayat (3) pasca-UU HPP (tidak mendaftar, menyalahgunakan NPWP/PKP, tidak/tidak benar menyampaikan SPT, tidak menyetor potput) tidak memuat perbuatan tidak menyelenggarakan pembukuan."
    },
    {
      id: "A2-108", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      kutipan: "Pasal 2 ayat (1) dan (2) UU 9/2017 (parafrase setia): Direktur Jenderal Pajak berwenang mendapatkan akses informasi keuangan untuk kepentingan perpajakan dari lembaga jasa keuangan yang melaksanakan kegiatan di sektor perbankan, pasar modal, perasuransian, lembaga jasa keuangan lainnya, dan/atau entitas lain yang dikategorikan sebagai lembaga keuangan sesuai standar pertukaran informasi keuangan berdasarkan perjanjian internasional di bidang perpajakan. Lembaga tersebut wajib menyampaikan kepada Direktur Jenderal Pajak laporan informasi keuangan sesuai standar pertukaran informasi untuk setiap rekening keuangan yang wajib dilaporkan dan laporan informasi keuangan untuk kepentingan perpajakan yang dikelola selama satu tahun kalender.",
      stem: "Dalam pemeriksaan lengkap PPh Badan Tahun Pajak 2025 atas PT Selaras Niaga, pemeriksa menemukan aliran dana ke rekening pribadi direktur utamanya di PT Bank Cakra (bank umum di bawah pengawasan OJK). Rekening itu tidak tercantum dalam laporan tahunan bank karena saldo akhir tahunnya di bawah ambang laporan domestik. DJP kemudian meminta rekening koran Januari–Desember 2025 atas rekening tersebut. Bank Cakra menjawab bahwa (1) data nasabah dilindungi rahasia bank sehingga diperlukan permintaan tertulis Menteri Keuangan, dan (2) kewajibannya sudah selesai karena laporan tahunan telah disampaikan. Berdasarkan kutipan dan UU 9/2017, penilaian yang paling tepat atas jawaban bank adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Alasan (2) dapat diterima karena rekening yang saldonya di bawah ambang laporan domestik berada di luar kewenangan akses DJP; alasan (1) menjadi tidak relevan",
        B: "Alasan (1) dapat diterima karena Pasal 35 ayat (2) UU KUP tetap mensyaratkan permintaan tertulis Menteri Keuangan untuk bank dalam pemeriksaan; alasan (2) tidak dapat diterima",
        C: "Kedua alasan tidak dapat diterima: di luar laporan tahunan DJP berwenang meminta informasi dan/atau bukti atau keterangan yang wajib dipenuhi bank, dan rahasia bank tidak dapat dijadikan alasan menolak tanpa perlu permintaan tertulis Menteri Keuangan",
        D: "Kedua alasan tidak dapat diterima, tetapi bank cukup memasukkan rekening itu ke laporan tahunan berikutnya yang disampaikan melalui OJK karena akses DJP atas data bank hanya melalui laporan otomatis"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Akses informasi keuangan berjalan dua jalur: laporan otomatis tahunan dan permintaan IBK oleh DJP yang wajib dipenuhi LJK. Ambang saldo hanya menentukan rekening yang masuk laporan otomatis, bukan batas kewenangan meminta IBK, dan ketentuan rahasia bank serta Pasal 35 ayat (2) UU KUP tidak berlaku sepanjang berkaitan dengan akses informasi keuangan.",
        jejakHitung: [["Jalur yang dipakai DJP", "permintaan IBK, terpisah dari laporan tahunan"], ["Rekening di bawah ambang", "tidak masuk laporan otomatis, tetap dapat diminta"], ["Rahasia bank dan izin Menteri Keuangan", "tidak berlaku untuk akses informasi keuangan"]],
        mengapaSalah: { A: "Ambang saldo hanya membatasi isi laporan otomatis domestik; kewenangan meminta IBK tidak dibatasi saldo.", B: "Pasal 35 ayat (2) UU KUP yang mensyaratkan permintaan tertulis Menteri Keuangan untuk bank dinyatakan tidak berlaku sepanjang berkaitan dengan akses informasi keuangan untuk kepentingan perpajakan.", D: "Laporan otomatis dan permintaan IBK adalah dua jalur terpisah; IBK dipenuhi atas permintaan DJP, tidak menunggu laporan tahunan berikutnya." },
        jebakan: "Laporan tahunan yang sudah disampaikan tidak menghapus kewajiban memenuhi permintaan IBK."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (1)–(2) UU 9/2017", berlakuSejak: "2017-05-08" }, { pasal: "Pasal 8 UU 9/2017; ketentuan IBK UU 9/2017 (nomor pasal ◐)", berlakuSejak: "2017-05-08" }, { pasal: "Pasal 35 ayat (2) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Substansi kewenangan meminta IBK dan tidak berlakunya rahasia bank konsisten di sumber; nomor pasal ketentuan IBK dalam UU 9/2017 belum dicocokkan dengan teks resmi sehingga dasar hukumnya ditulis deskriptif (◐). Soal tidak menguji nomor pasal."
    },
    {
      id: "A2-109", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "PT Asuransi Jiwa Pelita (perusahaan perasuransian di bawah pengawasan OJK) menyiapkan sistem pelaporan informasi keuangan untuk kepentingan perpajakan atas polis asuransi bernilai tunai. Tim TI mengusulkan agar laporan hanya memuat nama pemegang polis dan nilai tunai polis karena data lain dianggap rahasia. Menurut UU 9/2017, laporan yang disampaikan lembaga jasa keuangan paling sedikit memuat ...",
      kataKualifikasi: ["paling sedikit"],
      opsi: {
        A: "identitas pemegang rekening keuangan serta saldo atau nilai rekening keuangan; penghasilan yang terkait dengan rekening hanya diberikan bila diminta DJP",
        B: "identitas pemegang rekening keuangan, nomor rekening keuangan, identitas lembaga jasa keuangan, saldo atau nilai rekening keuangan, dan penghasilan yang terkait dengan rekening keuangan",
        C: "identitas pemegang rekening keuangan, nomor rekening keuangan, saldo atau nilai rekening keuangan, dan rincian mutasi transaksi harian selama satu tahun kalender",
        D: "identitas lembaga jasa keuangan dan jumlah agregat saldo seluruh nasabahnya, tanpa identitas pemegang rekening yang tetap dilindungi kerahasiaan"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 2 ayat (3) UU 9/2017 menetapkan lima unsur minimal laporan: identitas pemegang rekening, nomor rekening, identitas LJK, saldo atau nilai rekening, dan penghasilan yang terkait dengan rekening. Ketentuan ini berlaku sama bagi perbankan, pasar modal, dan perasuransian.",
        jejakHitung: [],
        mengapaSalah: { A: "Penghasilan yang terkait dengan rekening termasuk isi minimal laporan, bukan hanya diberikan bila diminta.", C: "Mutasi transaksi harian bukan isi minimal laporan, dan opsi ini menghilangkan identitas LJK serta penghasilan terkait rekening.", D: "Laporan disusun per rekening lengkap dengan identitas pemegangnya; kerahasiaan tidak berlaku untuk akses informasi keuangan perpajakan." },
        jebakan: "Isi minimal laporan ada lima unsur; pengecoh biasanya menghilangkan satu unsur atau menambahkan mutasi transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (3) UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A2-110", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Tiga lembaga berikut dikategorikan sebagai lembaga keuangan pelapor menurut standar pertukaran informasi keuangan: (1) PT Sekuritas Andalan, perusahaan efek di bawah pengawasan OJK yang menatausahakan rekening efek nasabah; (2) PT Bank Sentosa, bank umum di bawah pengawasan OJK; (3) PT Amanah Kelola, entitas lain yang dikategorikan sebagai lembaga keuangan (Entitas Investasi) dan tidak berada di bawah pengawasan OJK. Menurut UU 9/2017, pernyataan yang paling tepat tentang kewajiban ketiganya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(1) dan (2) wajib melaksanakan prosedur identifikasi dan melapor melalui OJK, sedangkan (3) tidak wajib melapor karena tidak berada di bawah pengawasan OJK",
        B: "Ketiganya wajib melaksanakan prosedur identifikasi rekening keuangan dan menyampaikan laporan; laporan (2) disampaikan melalui OJK, sedangkan laporan (1) dan (3) langsung kepada DJP karena saluran OJK hanya untuk bank",
        C: "Hanya (2) yang wajib menyampaikan laporan karena akses informasi keuangan terbatas pada sektor perbankan; (1) dan (3) cukup memberikan data bila diminta",
        D: "Ketiganya wajib melaksanakan prosedur identifikasi rekening keuangan dan menyampaikan laporan; laporan (1) dan (2) disampaikan melalui OJK, sedangkan laporan (3) disampaikan langsung kepada DJP"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban identifikasi dan pelaporan berlaku bagi LJK sektor perbankan, pasar modal, perasuransian, LJK lainnya, dan entitas lain yang dikategorikan sebagai lembaga keuangan. Salurannya ditentukan oleh pengawasan: LJK di bawah pengawasan OJK melapor melalui OJK, sedangkan LJK lainnya dan entitas lain langsung kepada DJP.",
        jejakHitung: [["(1) perusahaan efek, diawasi OJK", "identifikasi + lapor melalui OJK"], ["(2) bank umum, diawasi OJK", "identifikasi + lapor melalui OJK"], ["(3) entitas lain, tidak diawasi OJK", "identifikasi + lapor langsung ke DJP"]],
        mengapaSalah: { A: "Entitas lain yang tidak diawasi OJK tetap wajib melapor, tetapi langsung kepada DJP.", B: "Saluran OJK berlaku untuk semua LJK di bawah pengawasan OJK, termasuk perusahaan efek, bukan hanya bank.", C: "Akses informasi keuangan mencakup pasar modal, perasuransian, LJK lainnya, dan entitas lain, bukan hanya perbankan." },
        jebakan: "Pengawasan OJK menentukan saluran laporan, bukan ada atau tidaknya kewajiban melapor."
      },
      dasarHukum: [{ pasal: "Pasal 2 UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A2-111", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Kepala divisi kepatuhan PT Bank Dirgantara (bank umum di bawah pengawasan OJK) dengan sengaja tidak menjalankan prosedur identifikasi atas 2.000 rekening baru yang dibuka sepanjang 2025, dan Bank Dirgantara sama sekali tidak menyampaikan laporan informasi keuangan data 2025 sampai tenggatnya terlewati. Ketika DJP kemudian meminta keterangan atas sejumlah rekening, kepala divisi itu juga menolak memberikannya. Menurut UU 9/2017, ancaman pidana yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kepala divisi: ancaman Pasal 41A UU KUP (kurungan paling lama 1 tahun; denda paling banyak Rp25.000.000); Bank Dirgantara tidak dapat dipidana karena ancaman pidana hanya untuk orang pribadi",
        B: "Kepala divisi: pidana kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000; Bank Dirgantara: pidana denda paling banyak Rp1.000.000.000",
        C: "Kepala divisi: ancaman Pasal 41B UU KUP (penjara paling lama 3 tahun; denda paling banyak Rp75.000.000); Bank Dirgantara: pidana denda paling banyak Rp1.000.000.000",
        D: "Kepala divisi tidak dipidana karena tanggung jawab pelaporan berada pada bank; Bank Dirgantara: pidana denda paling banyak Rp1.000.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "UU 9/2017 mengancam pimpinan dan/atau pegawai LJK yang tidak menyampaikan laporan, tidak melaksanakan prosedur identifikasi, atau tidak memberikan IBK dengan pidana kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000, dan mengancam LJK yang tidak menyampaikan laporan dengan pidana denda paling banyak Rp1.000.000.000. Pelanggaran kewajiban LJK diatur UU 9/2017, bukan Pasal 41A atau 41B UU KUP.",
        jejakHitung: [["Kepala divisi (pegawai LJK)", "tidak identifikasi + menolak IBK → kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar"], ["Bank Dirgantara (LJK)", "tidak menyampaikan laporan → denda ≤ Rp1 miliar"]],
        mengapaSalah: { A: "Pasal 41A mengatur pihak ketiga yang tidak memberi keterangan atau bukti menurut Pasal 35 UU KUP; kewajiban LJK atas akses informasi keuangan diatur UU 9/2017, yang juga mengancam LJK sebagai badan dengan pidana denda.", C: "Pasal 41B UU KUP ditujukan bagi orang yang menghalangi atau mempersulit penyidikan, bukan pelanggaran kewajiban pelaporan dan identifikasi LJK.", D: "Pimpinan dan/atau pegawai LJK diancam pidana tersendiri; ancaman terhadap LJK tidak menghapus tanggung jawab pribadi mereka." },
        jebakan: "UU 9/2017 menjerat dua subjek sekaligus: orangnya (kurungan atau denda) dan LJK-nya (denda)."
      },
      dasarHukum: [{ pasal: "UU 9/2017, ketentuan pidana pimpinan/pegawai dan LJK (nomor pasal ◐)", berlakuSejak: "2017-05-08" }, { pasal: "Pasal 41A dan 41B UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Besaran ancaman pidana konsisten di beberapa sumber; nomor pasal ketentuan pidana UU 9/2017 belum dicocokkan dengan teks resmi (ringkasan sumber tidak seragam: Pasal 5 atau Pasal 7) sehingga dasar hukumnya ditulis deskriptif (◐). Soal tidak menguji nomor pasal."
    },
    {
      id: "A2-112", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      kutipan: "Pasal 35A ayat (1) UU KUP (parafrase setia): Setiap instansi pemerintah, lembaga, asosiasi, dan pihak lain wajib memberikan data dan informasi yang berkaitan dengan perpajakan kepada Direktorat Jenderal Pajak yang ketentuannya diatur dengan Peraturan Pemerintah, dengan memperhatikan ketentuan Pasal 35 ayat (2).",
      stem: "Tiga perbuatan terungkap pada tahun yang sama: (i) Tuan Gilang, nasabah PT Bank Kencana, dengan sengaja mengisi pernyataan diri (self-certification) bahwa ia bukan penduduk untuk keperluan pajak di suatu negara lain, padahal ia penduduk negara itu, sehingga informasi yang wajib disampaikan bank menjadi tidak benar; (ii) pejabat sebuah instansi pemerintah yang termasuk ILAP menurut PP 31/2012 dengan sengaja tidak menyampaikan data dan informasi perpajakan yang wajib diberikan secara rutin kepada DJP; (iii) Notaris Hana, yang menerima permintaan tertulis Direktur Jenderal Pajak dalam pemeriksaan atas kliennya, dengan sengaja tidak memberikan salinan akta yang diminta. Berdasarkan kutipan, UU KUP, dan UU 9/2017, pasangan dasar ancaman pidana yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(i) UU 9/2017 tentang pernyataan palsu: kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000; (ii) Pasal 41C UU KUP; (iii) UU 9/2017 karena notaris tidak memberikan informasi, bukti, atau keterangan",
        B: "(i) Pasal 39 UU KUP karena menyampaikan keterangan yang isinya tidak benar; (ii) UU 9/2017; (iii) Pasal 41A UU KUP",
        C: "(i) UU 9/2017 tentang pernyataan palsu: kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000; (ii) UU 9/2017, ketentuan pidana bagi pimpinan atau pegawai lembaga jasa keuangan; (iii) Pasal 41B UU KUP",
        D: "(i) UU 9/2017 tentang pernyataan palsu: kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000; (ii) Pasal 41C UU KUP; (iii) Pasal 41A UU KUP"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pernyataan palsu dalam rangka akses informasi keuangan, termasuk pernyataan diri nasabah, diancam UU 9/2017 dengan kurungan paling lama 1 tahun atau denda paling banyak Rp1.000.000.000. Kewajiban ILAP bersumber dari Pasal 35A UU KUP sehingga ancamannya Pasal 41C, sedangkan pihak ketiga yang diminta keterangan atau bukti berdasarkan Pasal 35 (notaris) diancam Pasal 41A.",
        jejakHitung: [["(i) nasabah, pernyataan diri tidak benar", "UU 9/2017 (pernyataan palsu)"], ["(ii) pejabat ILAP, data rutin Pasal 35A", "Pasal 41C UU KUP"], ["(iii) notaris, permintaan tertulis Dirjen Pasal 35", "Pasal 41A UU KUP"]],
        mengapaSalah: { A: "Notaris bukan lembaga jasa keuangan; kewajibannya memberi keterangan atau bukti bersumber dari Pasal 35 UU KUP sehingga ancamannya Pasal 41A.", B: "Pernyataan palsu dalam rangka identifikasi rekening keuangan diatur khusus dalam UU 9/2017, bukan Pasal 39 UU KUP yang menyangkut pemenuhan kewajiban perpajakan Wajib Pajak; selain itu ILAP diancam Pasal 41C, bukan UU 9/2017.", C: "Instansi pemerintah bukan lembaga jasa keuangan, dan Pasal 41B ditujukan bagi orang yang menghalangi atau mempersulit penyidikan, bukan pihak ketiga yang menolak permintaan dalam pemeriksaan." },
        jebakan: "Tentukan dulu sumber kewajibannya (UU 9/2017, Pasal 35, atau Pasal 35A), baru pilih pasal pidananya."
      },
      dasarHukum: [{ pasal: "UU 9/2017, ketentuan pidana pernyataan palsu (nomor pasal ◐)", berlakuSejak: "2017-05-08" }, { pasal: "Pasal 35, 35A, 41A, dan 41C UU KUP; PP 31/2012", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Nomor pasal ketentuan pidana pernyataan palsu dalam UU 9/2017 belum dicocokkan dengan teks resmi sehingga dasar hukumnya ditulis deskriptif (◐); besaran ancamannya konsisten di beberapa sumber. Besaran ancaman Pasal 41C sengaja tidak dijadikan pembeda opsi. Soal tidak menguji nomor pasal UU 9/2017."
    },
    {
      id: "A2-113", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A2-09",
      stem: "Data untuk soal vignette V-A2-09: PT Bank Arta Nusa adalah bank umum di bawah pengawasan OJK. Data rekening per 31 Desember 2026: (1) Tuan Bayu memiliki tabungan Rp350.000.000 dan deposito Rp700.000.000 di Bank Arta Nusa; (2) Nyonya Citra memiliki tabungan Rp600.000.000 di Bank Arta Nusa dan Rp800.000.000 di bank lain; (3) CV Rimba Jaya memiliki giro Rp45.000.000 di Bank Arta Nusa; (4) Tuan Dimas memiliki rekening efek senilai Rp250.000.000 yang ditatausahakan Bank Arta Nusa sebagai Lembaga Kustodian. Menurut PMK 108/2025, rekening yang wajib dimuat Bank Arta Nusa dalam laporan informasi keuangan untuk kepentingan perpajakan domestik data 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) saja", B: "(1), (2), (3), dan (4)", C: "(1), (3), dan (4)", D: "(1) dan (3)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ambang Rp1.000.000.000 hanya berlaku untuk rekening orang pribadi di Lembaga Simpanan dan dihitung dari saldo agregat per lembaga per 31 Desember. Rekening entitas serta rekening pada Lembaga Kustodian dilaporkan tanpa batas saldo.",
        jejakHitung: [["(1) Tuan Bayu: Rp350.000.000 + Rp700.000.000", "Rp1.050.000.000 ≥ Rp1 miliar → dilaporkan"], ["(2) Nyonya Citra di Bank Arta Nusa", "Rp600.000.000 < Rp1 miliar → tidak dilaporkan (agregasi per lembaga)"], ["(3) CV Rimba Jaya (entitas)", "tanpa batas saldo → dilaporkan"], ["(4) Tuan Dimas (Lembaga Kustodian)", "tanpa batas saldo → dilaporkan"]],
        mengapaSalah: { A: "Ambang Rp1 miliar diterapkan juga pada rekening entitas dan rekening kustodian, padahal keduanya tanpa batas saldo.", B: "Saldo Nyonya Citra dijumlahkan lintas bank (Rp1,4 miliar), padahal agregasi dilakukan per lembaga.", D: "Rekening kustodian diperlakukan seperti rekening Lembaga Simpanan; rekening pada Lembaga Kustodian dilaporkan tanpa batas saldo." },
        jebakan: "Rp1 miliar adalah ambang khusus rekening orang pribadi di Lembaga Simpanan, dihitung per lembaga, bukan ambang umum semua rekening."
      },
      dasarHukum: [{ pasal: "PMK 108/2025", berlakuSejak: "2026-01-01" }, { pasal: "Pasal 2 ayat (2) huruf b UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Teks PMK 108/2025 tidak terbaca langsung; ambang Rp1 miliar per lembaga untuk orang pribadi di Lembaga Simpanan, rekening entitas tanpa batas, dan Lembaga Kustodian tanpa batas diambil dari ringkasan JDIH Kemenkeu, FAQ DJP, IKPI, dan DDTC yang konsisten."
    },
    {
      id: "A2-114", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A2-09",
      stem: "Lanjutan V-A2-09: PT Bank Arta Nusa (bank umum di bawah pengawasan OJK) menyiapkan laporan informasi keuangan data 2026. Perusahaan satu grupnya, PT Amanah Kelola, adalah entitas lain yang dikategorikan sebagai lembaga keuangan (Entitas Investasi), tidak berada di bawah pengawasan OJK, dan sepanjang 2026 tidak mempunyai satu pun rekening yang wajib dilaporkan. Menurut PMK 108/2025, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Bank Arta Nusa menyampaikan laporan ke OJK paling lambat 31 Agustus 2027 dan OJK meneruskannya ke DJP paling lambat 30 September 2027; PT Amanah Kelola menyampaikan laporan nihil langsung ke DJP paling lambat 30 April 2027",
        B: "Bank Arta Nusa dan PT Amanah Kelola sama-sama menyampaikan laporan langsung ke DJP paling lambat 30 April 2027, dan laporan PT Amanah Kelola berupa laporan nihil",
        C: "Bank Arta Nusa menyampaikan laporan ke OJK paling lambat 1 Agustus 2027 dan OJK meneruskannya ke DJP paling lambat 31 Agustus 2027; PT Amanah Kelola tidak perlu menyampaikan laporan karena tidak ada rekening yang wajib dilaporkan",
        D: "Bank Arta Nusa menyampaikan laporan ke OJK paling lambat 1 Agustus 2027 dan OJK meneruskannya ke DJP paling lambat 31 Agustus 2027; PT Amanah Kelola menyampaikan laporan nihil langsung ke DJP paling lambat 30 April 2027"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 108/2025 membedakan tenggat menurut jenis pelapor: LJK di bawah pengawasan OJK menyampaikan laporan ke OJK paling lambat 1 Agustus dan OJK meneruskannya ke DJP paling lambat 31 Agustus; LJK lainnya dan entitas lain melapor langsung ke DJP paling lambat 30 April. Pelapor yang tidak mempunyai rekening yang wajib dilaporkan tetap menyampaikan laporan nihil.",
        jejakHitung: [["Bank Arta Nusa (diawasi OJK)", "ke OJK ≤ 1 Agustus 2027; OJK ke DJP ≤ 31 Agustus 2027"], ["PT Amanah Kelola (entitas lain, tidak diawasi OJK)", "langsung ke DJP ≤ 30 April 2027"], ["Tidak ada rekening yang wajib dilaporkan", "laporan nihil tetap wajib"]],
        mengapaSalah: { A: "Tenggat bank ke OJK adalah 1 Agustus; 31 Agustus adalah tenggat OJK meneruskan laporan ke DJP.", B: "Saluran langsung dan tenggat 30 April hanya untuk LJK lainnya/entitas lain; bank di bawah pengawasan OJK melapor melalui OJK paling lambat 1 Agustus.", C: "Laporan nihil tetap wajib walaupun tidak ada rekening yang wajib dilaporkan." },
        jebakan: "Tenggat ditentukan oleh jenis pelapor (diawasi OJK atau tidak), dan keadaan nihil bukan alasan untuk tidak melapor."
      },
      dasarHukum: [{ pasal: "PMK 108/2025", berlakuSejak: "2026-01-01" }, { pasal: "Pasal 2 UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 140, verifikasi: "◐",
      peringatan: "Teks PMK 108/2025 tidak terbaca langsung; tenggat 1 Agustus, 31 Agustus, dan 30 April serta kewajiban laporan nihil diambil dari ringkasan JDIH Kemenkeu, FAQ DJP, IKPI, dan DDTC yang konsisten. Pergeseran tenggat yang jatuh pada hari libur tidak dibahas."
    },
    {
      id: "A2-115", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1, kasusId: "V-A2-09",
      kutipan: "Ketentuan UU 9/2017 tentang nasabah yang menolak identifikasi (parafrase setia): Lembaga jasa keuangan, lembaga jasa keuangan lainnya, dan/atau entitas lain tidak boleh melayani pembukaan rekening keuangan baru, atau transaksi baru terkait rekening keuangan, bagi nasabah yang menolak untuk mematuhi ketentuan identifikasi rekening keuangan.",
      stem: "Lanjutan V-A2-09: Pada Maret 2027 Tuan Erlangga, calon nasabah baru, meminta PT Bank Arta Nusa (bank umum di bawah pengawasan OJK) membuka deposito Rp2.000.000.000. Ia menolak mengisi pernyataan diri (self-certification) tentang negara domisili pajaknya dan menolak menyerahkan dokumen yang diminta dalam prosedur identifikasi rekening keuangan, lalu menawarkan agar deposito tetap dibuka dan dokumen dilengkapi tahun depan. Berdasarkan kutipan, tindakan bank yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Bank boleh membuka deposito karena saldonya di atas Rp1.000.000.000 sehingga rekening itu tetap akan dilaporkan; identifikasi dapat dilengkapi sebelum tenggat laporan",
        B: "Bank tidak boleh melayani pembukaan deposito tersebut selama Tuan Erlangga menolak mematuhi ketentuan identifikasi rekening keuangan",
        C: "Bank boleh membuka deposito karena prosedur identifikasi baru dilakukan atas rekening yang saldonya sudah diketahui per 31 Desember",
        D: "Bank boleh membuka deposito bila Tuan Erlangga warga negara Indonesia, karena prosedur identifikasi hanya diperlukan untuk pertukaran informasi internasional"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "LJK tidak boleh melayani pembukaan rekening baru atau transaksi baru terkait rekening bagi nasabah yang menolak mematuhi ketentuan identifikasi rekening keuangan. Besarnya saldo maupun kewarganegaraan nasabah tidak mengubah larangan itu.",
        jejakHitung: [],
        mengapaSalah: { A: "Kewajiban pelaporan tidak menggantikan prosedur identifikasi; nasabah yang menolak identifikasi tidak boleh dilayani.", C: "Identifikasi dilakukan saat pembukaan rekening baru, bukan menunggu posisi saldo akhir tahun.", D: "Prosedur identifikasi justru menentukan negara domisili pajak setiap pemegang rekening, termasuk WNI, dan larangan melayani berlaku tanpa membedakan kewarganegaraan." },
        jebakan: "Nilai deposito yang besar menggoda untuk tetap dilayani; larangan tidak mengenal pengecualian saldo."
      },
      dasarHukum: [{ pasal: "UU 9/2017, larangan melayani nasabah (nomor pasal ◐)", berlakuSejak: "2017-05-08" }, { pasal: "PMK 108/2025 (prosedur identifikasi rekening keuangan)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Substansi larangan melayani nasabah yang menolak identifikasi konsisten di sumber; nomor pasalnya dalam UU 9/2017 belum dicocokkan dengan teks resmi sehingga dasar hukumnya ditulis deskriptif (◐). Soal tidak menguji nomor pasal."
    },
    {
      id: "A2-116", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 35 ayat (1) dan (2) UU KUP (parafrase setia): Apabila dalam menjalankan ketentuan peraturan perundang-undangan perpajakan diperlukan keterangan atau bukti dari bank, akuntan publik, notaris, konsultan pajak, kantor administrasi, dan/atau pihak ketiga lainnya yang mempunyai hubungan dengan Wajib Pajak yang dilakukan pemeriksaan pajak, penagihan pajak, atau penyidikan tindak pidana di bidang perpajakan, atas permintaan tertulis Direktur Jenderal Pajak pihak-pihak tersebut wajib memberikan keterangan atau bukti yang diminta. Dalam hal pihak-pihak tersebut terikat kewajiban merahasiakan, kewajiban merahasiakan itu ditiadakan, kecuali untuk bank, kewajiban merahasiakan ditiadakan atas permintaan tertulis Menteri Keuangan.",
      stem: "Dalam pemeriksaan lengkap PPh Orang Pribadi Tahun Pajak 2024 atas Tuan Fajar (pengusaha properti), pemeriksa membutuhkan tiga data: (i) salinan akta jual beli tanah yang dibuat Notaris Gita; (ii) rekening koran Tuan Fajar di PT Bank Harapan; (iii) kertas kerja audit kantor akuntan publik yang mengaudit laporan keuangan usaha Tuan Fajar. Notaris dan akuntan publik terikat kewajiban merahasiakan menurut undang-undang profesinya. Berdasarkan kutipan dan UU 9/2017, pernyataan yang paling tepat tentang dasar permintaan data tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(i), (ii), dan (iii) diminta berdasarkan UU 9/2017 karena notaris, akuntan publik, dan bank sama-sama wajib memberikan informasi keuangan untuk kepentingan perpajakan",
        B: "(i), (ii), dan (iii) diminta berdasarkan Pasal 35 UU KUP atas permintaan tertulis Direktur Jenderal Pajak; khusus (ii), kewajiban merahasiakan bank baru ditiadakan setelah ada permintaan tertulis Menteri Keuangan",
        C: "(i) dan (iii) diminta berdasarkan Pasal 35 UU KUP atas permintaan tertulis Direktur Jenderal Pajak dan kewajiban merahasiakan ditiadakan; (ii) diminta berdasarkan UU 9/2017 tanpa perlu permintaan tertulis Menteri Keuangan, dan rahasia bank tidak dapat dijadikan alasan menolak",
        D: "(i) dan (iii) tidak dapat diminta karena kewajiban merahasiakan profesi hanya ditiadakan untuk bank; (ii) diminta berdasarkan UU 9/2017 tanpa perlu permintaan tertulis Menteri Keuangan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Bagi pihak ketiga selain lembaga jasa keuangan, Pasal 35 UU KUP tetap berlaku: dalam pemeriksaan, penagihan, atau penyidikan, notaris dan akuntan publik wajib memberikan keterangan atau bukti atas permintaan tertulis Direktur Jenderal Pajak, dan kewajiban merahasiakan ditiadakan. Bagi bank, Pasal 35 ayat (2) UU KUP tidak berlaku sepanjang berkaitan dengan akses informasi keuangan, sehingga data bank diminta berdasarkan UU 9/2017 tanpa permintaan tertulis Menteri Keuangan.",
        jejakHitung: [["(i) notaris", "Pasal 35 UU KUP; permintaan tertulis Dirjen Pajak; kerahasiaan ditiadakan"], ["(ii) bank", "UU 9/2017; Pasal 35 ayat (2) UU KUP tidak berlaku; tanpa permintaan tertulis Menteri Keuangan"], ["(iii) akuntan publik", "Pasal 35 UU KUP; permintaan tertulis Dirjen Pajak"]],
        mengapaSalah: { A: "UU 9/2017 hanya mengatur lembaga jasa keuangan, LJK lainnya, dan entitas lain yang dikategorikan sebagai lembaga keuangan; notaris dan akuntan publik tetap tunduk pada Pasal 35 UU KUP.", B: "Syarat permintaan tertulis Menteri Keuangan untuk bank dalam Pasal 35 ayat (2) UU KUP tidak berlaku sepanjang berkaitan dengan akses informasi keuangan sejak UU 9/2017.", D: "Pasal 35 ayat (2) UU KUP justru meniadakan kewajiban merahasiakan notaris, akuntan publik, dan pihak ketiga lain untuk keperluan pemeriksaan, penagihan, atau penyidikan." },
        jebakan: "Kutipan Pasal 35 ayat (2) masih menyebut permintaan tertulis Menteri Keuangan untuk bank; ketentuan itu dikesampingkan UU 9/2017 khusus untuk akses informasi keuangan."
      },
      dasarHukum: [{ pasal: "Pasal 35 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 UU 9/2017", berlakuSejak: "2017-05-08" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A2-117", topik: "A2.12", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Pada Februari 2026 dua klien meminta pendapat konsultan pajak tentang PMK 108/2025 yang berlaku 1 Januari 2026. (1) PT Bank Lestari (bank umum di bawah pengawasan OJK) sedang menyiapkan identifikasi dan laporan atas informasi rekening keuangan yang tercatat sampai 31 Desember 2025. (2) PT Kripto Mandiri Digital, penyedia jasa aset kripto (PJAK), bertanya apakah transaksi aset kripto penggunanya selama 2025 harus dilaporkan sebagai CARF pada 2026, dan apa yang harus dilakukan bila kelak tidak ada pengguna atau transaksi yang wajib dilaporkan. Pendapat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "(1) mengikuti ketentuan lama (PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024) untuk informasi yang tercatat sampai 31 Desember 2025; (2) CARF pertama memuat data 2026, disampaikan paling lambat 30 April 2027, dan laporan nihil tetap wajib bila tidak ada yang wajib dilaporkan",
        B: "(1) wajib memakai seluruh ketentuan PMK 108/2025 karena laporan disampaikan setelah 1 Januari 2026; (2) CARF pertama memuat data 2026, disampaikan paling lambat 30 April 2027, dan laporan nihil tetap wajib bila tidak ada yang wajib dilaporkan",
        C: "(1) mengikuti ketentuan lama untuk informasi yang tercatat sampai 31 Desember 2025; (2) transaksi 2025 wajib dilaporkan sebagai CARF paling lambat 30 April 2026, sedangkan laporan nihil tidak diperlukan",
        D: "(1) mengikuti ketentuan lama untuk informasi yang tercatat sampai 31 Desember 2025; (2) CARF pertama memuat data 2026 dan disampaikan paling lambat 30 April 2027, tetapi PJAK yang tidak mempunyai pengguna atau transaksi yang wajib dilaporkan tidak perlu menyampaikan laporan"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Menurut ketentuan peralihan PMK 108/2025, informasi yang tercatat sampai 31 Desember 2025 masih mengikuti rezim lama. Kewajiban CARF bagi PJAK dimulai untuk data 2026, dilaporkan paling lambat 30 April 2027 dan dipertukarkan dengan yurisdiksi mitra mulai 2027; laporan nihil tetap wajib.",
        jejakHitung: [["(1) informasi s.d. 31 Desember 2025", "rezim lama (PMK 70/PMK.03/2017 s.t.d.t.d. PMK 47/2024)"], ["(2) transaksi kripto 2025", "belum ada kewajiban CARF"], ["(2) data CARF 2026", "lapor paling lambat 30 April 2027; pertukaran mulai 2027"], ["Tidak ada yang wajib dilaporkan", "laporan nihil"]],
        mengapaSalah: { B: "Tanggal berlaku PMK baru tidak menarik informasi 2025 ke rezim baru; informasi yang tercatat sampai 31 Desember 2025 masih mengikuti ketentuan lama.", C: "CARF baru berlaku untuk data 2026, dan laporan nihil tetap wajib.", D: "Laporan nihil tetap wajib walaupun tidak ada pengguna atau transaksi yang wajib dilaporkan." },
        jebakan: "Bedakan tahun data dari tahun pelaporan: informasi 2025 dilaporkan pada 2026 dengan rezim lama, data 2026 dilaporkan pada 2027 dengan rezim baru."
      },
      dasarHukum: [{ pasal: "PMK 108/2025 (ketentuan peralihan dan CARF)", berlakuSejak: "2026-01-01" }],
      anggaranDetik: 170, verifikasi: "◐",
      peringatan: "Teks PMK 108/2025 tidak terbaca langsung; ketentuan peralihan, jadwal CARF (data 2026, lapor paling lambat 30 April 2027, pertukaran mulai 2027), dan laporan nihil diambil dari ringkasan JDIH Kemenkeu, FAQ DJP, IKPI, dan DDTC."
    },
    {
      id: "A2-118",
      topik: "A2.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "PMK 81/2024 Pasal 61 ayat (3) dan (6) (diringkas) (dikutip try out): Pengusaha yang memiliki lebih dari 1 tempat kegiatan usaha di luar kawasan bebas harus menentukan salah satu sebagai tempat pelaporan usaha. Bila tempat kedudukan Pengusaha Badan di kawasan bebas dan memilih Kantor Virtual di luar kawasan bebas sebagai tempat pelaporan usaha, ketentuan ayat (4) dan (5) (syarat penyedia Kantor Virtual) berlaku juga.",
      stem: "PT Ortax Distributor berkedudukan di Kawasan Perdagangan Bebas dan Pelabuhan Bebas Batam. Di luar kawasan tersebut perusahaan memiliki gudang di Surabaya dan kantor pemasaran di Jakarta Barat yang memakai kantor virtual. Penyedia jasa kantor virtual itu telah dikukuhkan sebagai PKP, menyediakan ruangan fisik, secara nyata melakukan layanan pendukung kantor, serta memiliki kontrak yang masih berlaku dan NIB. Perusahaan wajib dikukuhkan sebagai PKP pada 2026. Tempat pelaporan usaha untuk pengukuhan PKP yang sesuai ketentuan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "KPP tempat kedudukan di Batam, karena tempat kedudukan selalu menjadi tempat pengukuhan.", B: "KPP di Surabaya dan KPP di Jakarta Barat, masing-masing sebagai tempat pengukuhan.", C: "Salah satu tempat kegiatan usaha di luar kawasan bebas yang ditentukan perusahaan, termasuk kantor virtual di Jakarta Barat.", D: "KPP di Surabaya, karena kantor virtual tidak dapat dijadikan tempat pengukuhan PKP meskipun penyedianya memenuhi seluruh syarat." },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Karena tempat kedudukan berada di kawasan perdagangan bebas dan pelabuhan bebas dan perusahaan memiliki lebih dari satu tempat kegiatan usaha di luar kawasan tersebut, perusahaan harus menentukan salah satu tempat kegiatan usaha itu sebagai tempat pelaporan usaha (PMK 81/2024 Ps. 61 ayat (2)–(3)). Bila yang dipilih kantor virtual di Jakarta Barat, syarat penyedia kantor virtual (PKP, ruangan fisik, layanan nyata, kontrak berlaku, dan NIB) berlaku juga (ayat (6)); menurut data soal syarat itu terpenuhi.",
        jejakHitung: [],
        mengapaSalah: { A: "Tempat kedudukan di kawasan bebas tidak dipakai bila ada tempat kegiatan usaha di luar kawasan bebas (Ps. 61 ayat (2)).", B: "Pengukuhan hanya di satu tempat yang ditentukan; pengukuhan di setiap lokasi adalah pola aturan lama.", D: "Kantor virtual di luar kawasan bebas boleh dipilih sepanjang penyedianya memenuhi syarat Ps. 61 ayat (4) dan (5) (Ps. 61 ayat (6)); menurut data soal syarat itu terpenuhi." },
        jebakan: "Lebih dari satu tempat kegiatan usaha di luar kawasan bebas: pilih salah satu; kantor virtual boleh bila syarat penyedia terpenuhi."
      },
      dasarHukum: [
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 61 ayat (2)–(6)", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 62 ayat (2)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 6, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-119",
      topik: "A2.8",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Ortax Manufaktur, PKP, menyampaikan SPT Masa PPN Masa Pajak Mei 2026 tepat waktu. Pada 18 Agustus 2026, sebelum ada tindakan pemeriksaan, perusahaan membetulkan SPT tersebut sehingga timbul PPN kurang bayar Rp8.000.000 yang dilunasi pada hari yang sama. Tarif bunga KMK (diasumsikan): periode Juni dan Juli 2026 = 0,93% per bulan; periode Agustus 2026 = 0,88% per bulan. Sanksi bunga atas pembetulan tersebut adalah ... (abaikan fasilitas pengurangan atau penghapusan sanksi administratif)",
      kataKualifikasi: [],
      opsi: { A: "Rp223.200,00", B: "Rp140.800,00", C: "Rp74.400,00", D: "Rp148.800,00" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "PPN kurang bayar Masa Pajak Mei 2026 jatuh tempo akhir bulan berikutnya, yaitu 30 Juni 2026 (Selasa). Bunga Ps. 8 ayat (2a) dihitung sejak jatuh tempo pembayaran berakhir sampai tanggal pembayaran, bagian bulan dihitung penuh, dengan tarif yang berlaku pada awal penghitungan (0,93%).",
        jejakHitung: [ [ "Jatuh tempo setor PPN Masa Mei 2026", "30 Juni 2026" ], [ "Jangka 30 Juni–18 Agustus 2026 = 1 bulan 19 hari", "2 bulan" ], [ "Bunga = 2 × 0,93% × Rp8.000.000", "Rp148.800" ] ],
        mengapaSalah: { A: "Menghitung 3 bulan sejak akhir Masa Pajak (31 Mei), bukan sejak jatuh tempo setor.", B: "Memakai tarif Agustus (bulan pembayaran).", C: "Hanya menghitung 1 bulan dan mengabaikan bagian bulan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU KUP Pasal 8 ayat (1), (2a), dan (2b) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 8 ayat (1), (2a), dan (2b) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "UU PPN Pasal 15A ayat (1)", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 94 ayat (3) huruf e", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 18, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-120",
      topik: "A2.11",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Putusan Pengadilan Pajak atas sengketa banding PT Ortax Kimia ternyata tidak memuat pokok sengketa dan alasan hukum yang menjadi dasar putusan. Akibat hukum yang tepat menurut UU Pengadilan Pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "putusan tetap sah karena amar putusan telah mencantumkan jumlah pajak yang masih harus dibayar", B: "putusan batal dan sengketa harus disidangkan kembali dengan acara cepat, kecuali putusan telah melampaui 1 tahun", C: "putusan tidak sah dan para pihak wajib mengajukan permohonan peninjauan kembali ke Mahkamah Agung", D: "putusan dapat diperbaiki sendiri oleh Panitera tanpa persidangan ulang karena kekurangan tersebut hanya bersifat administratif dan tidak menyangkut amar" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pokok sengketa (Ps. 84 ayat (1) huruf g) dan alasan hukum yang menjadi dasar putusan (huruf h) termasuk unsur wajib putusan. Menurut Ps. 84 ayat (2), tidak dipenuhinya salah satu unsur ayat (1) menyebabkan putusan batal dan sengketa disidangkan kembali dengan acara cepat, kecuali putusan tersebut telah melampaui jangka waktu 1 tahun.",
        jejakHitung: [],
        mengapaSalah: { A: "Kelengkapan unsur ayat (1) menentukan sahnya putusan; amar putusan saja tidak cukup.", C: "Akibat yang diatur adalah persidangan kembali dengan acara cepat, bukan kewajiban mengajukan peninjauan kembali.", D: "Panitera tidak berwenang memperbaiki putusan yang tidak memuat unsur wajib." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 14/2002 Pasal 84 ayat (1) huruf g dan h serta ayat (2)."
      },
      dasarHukum: [
        { pasal: "UU 14/2002 Pasal 84 ayat (1) huruf g dan h serta ayat (2)", berlakuSejak: "2002-04-12" }
      ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Rumusan persis Ps. 84 ayat (2) UU 14/2002 perlu dicocokkan dengan naskah (batal/tidak sah, acara cepat, pengecualian 1 tahun). · Opsi B (kunci) terpotong di sumber (hanya \"kecuali putusan telah melampaui 1 tahun\"); bagian awal dilengkapi dari pengecoh C (persidangan kembali dengan acara cepat). Kalimat penjelasan sumber juga terpotong di tempat yang sama.",
      sumber: { set: "TO-B-2026-11", no: 34, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-121",
      topik: "A2.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Surat Pemberitahuan Pemeriksaan Lengkap untuk menguji kepatuhan PPh Badan 2024 PT Ortax Sentosa disampaikan kepada perusahaan pada 3 Maret 2026, dan jangka waktu pengujian tidak diperpanjang. Batas paling lambat SPHP disampaikan kepada perusahaan adalah ...",
      kataKualifikasi: [ "paling lambat" ],
      opsi: { A: "3 Juni 2026", B: "3 April 2026", C: "3 Maret 2027", D: "3 Agustus 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Jangka waktu pengujian Pemeriksaan Lengkap paling lama 5 bulan sejak Surat Pemberitahuan Pemeriksaan disampaikan sampai tanggal SPHP disampaikan (PMK 15/2025 Ps. 6 ayat (2) huruf a). Setelah itu tersedia paling lama 30 hari kerja untuk pembahasan akhir dan pelaporan (Ps. 6 ayat (3)).",
        jejakHitung: [ [ "Surat Pemberitahuan Pemeriksaan disampaikan", "3 Maret 2026" ], [ "Jangka waktu pengujian Pemeriksaan Lengkap", "5 bulan" ], [ "Batas SPHP disampaikan", "3 Agustus 2026" ] ],
        mengapaSalah: { A: "Memakai 3 bulan, yaitu jangka waktu Pemeriksaan Terfokus.", B: "Memakai 1 bulan, yaitu jangka waktu Pemeriksaan Spesifik.", C: "Memakai 12 bulan, jangka waktu menurut ketentuan lama." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 15/2025 Pasal 6 ayat (2) huruf a dan ayat (3)."
      },
      dasarHukum: [
        { pasal: "PMK 15/2025 Pasal 6 ayat (2) huruf a dan ayat (3)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 37, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-122",
      topik: "A2.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "UU KUP Pasal 15 ayat (2) (dikutip try out): Jumlah kekurangan pajak yang terutang dalam Surat Ketetapan Pajak Kurang Bayar Tambahan ditambah dengan sanksi administratif berupa kenaikan sebesar 100% (seratus persen) dari jumlah kekurangan pajak tersebut.",
      stem: "Pada Mei 2025, PT Ortax Manufaktur telah diterbitkan Surat Ketetapan Pajak Lebih Bayar (SKPLB) untuk Tahun Pajak 2023. Pada 2026, berdasarkan pemeriksaan atas data baru yang ditemukan, terdapat kekurangan pembayaran pajak sebesar Rp80.000.000. Atas hal tersebut, Wajib Pajak diterbitkan ... dan sanksi administrasi berupa .... (abaikan fasilitas pengurangan atau penghapusan sanksi administratif)",
      kataKualifikasi: [],
      opsi: { A: "Surat Ketetapan Pajak Kurang Bayar (SKPKB); bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan atas Rp80.000.000,00", B: "Surat Ketetapan Pajak Kurang Bayar Tambahan (SKPKBT); bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan atas Rp80.000.000,00", C: "Surat Ketetapan Pajak Kurang Bayar (SKPKB); kenaikan sebesar 100% atau Rp80.000.000,00", D: "Surat Ketetapan Pajak Kurang Bayar Tambahan (SKPKBT); kenaikan sebesar 100% atau Rp80.000.000,00" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Tahun Pajak 2023 telah diterbitkan SKPLB. Data baru yang kemudian ditemukan dan mengakibatkan kekurangan pajak ditetapkan dengan SKPKBT setelah pemeriksaan, selama masih dalam 5 tahun setelah berakhirnya Tahun Pajak (UU KUP Ps. 15 ayat (1)). Kekurangan pajak dalam SKPKBT ditambah sanksi kenaikan 100%, yaitu Rp80.000.000 (Ps. 15 ayat (2)), bukan sanksi bunga.",
        jejakHitung: [],
        mengapaSalah: { A: "Ketetapan sebelumnya (SKPLB) sudah ada, sehingga yang terbit SKPKBT dan sanksinya kenaikan, bukan bunga.", B: "Jenis ketetapan benar, tetapi sanksi SKPKBT berupa kenaikan 100%, bukan bunga.", C: "Kenaikan 100% melekat pada SKPKBT; SKPKB tidak terbit karena sudah ada SKPLB." },
        jebakan: "SKPLB pun dapat diikuti SKPKBT bila ditemukan data baru."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 15 ayat (1) dan (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 44, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-123",
      topik: "A2.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Atas SPT Tahunan PPh Badan Tahun Pajak 2023, DJP telah menerbitkan SKPKB kepada PT Ortax Distributor dan ketetapan tersebut telah dilunasi. Pada 2026 DJP memperoleh data baru dari pihak ketiga, lalu melakukan pemeriksaan dalam rangka penerbitan SKPKBT. Hasilnya, terdapat tambahan pajak terutang Rp60.000.000. PT Ortax Distributor tidak pernah menyampaikan keterangan tertulis atas kehendak sendiri. Produk hukum dan jumlah yang harus dibayar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKPKBT sebesar Rp120.000.000,00", B: "SKPKBT sebesar Rp60.000.000,00", C: "SKPKB sebesar Rp120.000.000,00", D: "SKPKB sebesar Rp105.000.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Karena SKPKB Tahun Pajak 2023 telah terbit, data baru yang menambah pajak terutang ditetapkan dengan SKPKBT, yang masih dapat diterbitkan dalam 5 tahun setelah berakhirnya Tahun Pajak. Kekurangan pajak dalam SKPKBT ditambah kenaikan 100%, karena tidak ada keterangan tertulis atas kehendak sendiri sebelum pemeriksaan.",
        jejakHitung: [ [ "Kekurangan pajak", "Rp60.000.000" ], [ "Kenaikan 100% × Rp60.000.000", "Rp60.000.000" ], [ "Jumlah SKPKBT", "Rp120.000.000" ] ],
        mengapaSalah: { B: "SKPKBT tanpa kenaikan hanya berlaku bila diterbitkan berdasarkan keterangan tertulis atas kehendak sendiri sebelum pemeriksaan.", C: "Setelah SKPKB terbit, ketetapan atas data baru adalah SKPKBT, bukan SKPKB.", D: "Memakai kenaikan 75% yang berlaku untuk SKPKB tertentu, bukan SKPKBT." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU KUP Pasal 15 ayat (1) dan (2) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 15 ayat (1) dan (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Baris kelompok tidak ada di sumber (soal juga tersalin dobel di akhir Soal No. 48); kelompok A2 (KUP) disimpulkan dari isi.",
      sumber: { set: "TO-B-2026-11", no: 49, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-124",
      topik: "A2.11",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Putusan Pengadilan Pajak atas gugatan CV Ortax Mandiri sekurang-kurangnya harus memuat hal berikut, KECUALI ...",
      kataKualifikasi: [ "kecuali" ],
      opsi: { A: "rekomendasi Majelis mengenai pengurangan sanksi administratif yang dapat diajukan kepada Direktur Jenderal Pajak", B: "pokok sengketa dan alasan hukum yang menjadi dasar putusan", C: "pertimbangan dan penilaian setiap bukti yang diajukan dan hal yang terjadi dalam persidangan", D: "hari, tanggal putusan, nama Hakim yang memutus, nama Panitera, dan keterangan tentang hadir atau tidak hadirnya para pihak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 84 ayat (1) UU 14/2002 memuat unsur wajib putusan secara limitatif: antara lain pertimbangan dan penilaian bukti (huruf f), pokok sengketa (huruf g), alasan hukum (huruf h), amar putusan (huruf i), serta hari, tanggal putusan, nama Hakim, Panitera, dan keterangan kehadiran para pihak (huruf j). Rekomendasi Majelis mengenai pengurangan sanksi administratif tidak termasuk unsur putusan; permohonan pengurangan sanksi merupakan prosedur terpisah kepada Direktur Jenderal Pajak berdasarkan Pasal 36 UU KUP.",
        jejakHitung: [],
        mengapaSalah: { B: "Pokok sengketa dan alasan hukum wajib dimuat (huruf g dan h).", C: "Pertimbangan dan penilaian bukti wajib dimuat (huruf f).", D: "Hari, tanggal putusan, nama Hakim dan Panitera, serta kehadiran para pihak wajib dimuat (huruf j)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 14/2002 Pasal 84 ayat (1) huruf f–j."
      },
      dasarHukum: [
        { pasal: "UU 14/2002 Pasal 84 ayat (1) huruf f–j", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 51, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-125",
      topik: "A2.10",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 1,
      stem: "Tuan Ali meninggal dunia pada Maret 2026 dengan meninggalkan utang pajak, sedangkan harta warisannya belum terbagi. Yang termasuk penanggung pajak atas utang pajak Tuan Ali adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Nyonya Mawar, ahli waris yang mengurus harta peninggalan yang belum terbagi", B: "Nona Sari, keponakan Tuan Ali yang bukan ahli waris dan tidak mengurus harta peninggalan", C: "Bapak Agus, rekan bisnis yang pernah meminjamkan uang kepada Tuan Ali", D: "PT Ortax Manufaktur, perusahaan tempat Tuan Ali bekerja" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bila Wajib Pajak orang pribadi meninggal dunia dan harta warisan belum terbagi, penagihan dilakukan terhadap seorang ahli waris, pelaksana wasiat, atau pihak yang mengurus harta peninggalan, yang bertanggung jawab sebesar harta warisan belum terbagi (bila utang pajak sama atau lebih besar) atau seluruh utang pajak (bila utang pajak lebih kecil) (PMK 61/2023 Pasal 8 huruf c). Ketentuan ini sejalan dengan Pasal 32 ayat (1) huruf e UU KUP. Nyonya Mawar adalah ahli waris yang mengurus harta peninggalan tersebut.",
        jejakHitung: [],
        mengapaSalah: { B: "Keponakan yang bukan ahli waris dan tidak mengurus harta peninggalan tidak termasuk pihak dalam Pasal 8 PMK 61/2023.", C: "Kreditur Wajib Pajak tidak bertanggung jawab atas utang pajaknya.", D: "Pemberi kerja tidak termasuk penanggung pajak atas Wajib Pajak orang pribadi." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU KUP Pasal 1 angka 28 dan Pasal 32 ayat (1) huruf e s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 1 angka 28 dan Pasal 32 ayat (1) huruf e s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "UU 19/1997 s.t.d.d. UU 19/2000 (UU PPSP) Pasal 1 angka 3", berlakuSejak: null },
        { pasal: "PMK 61/2023 Pasal 1 angka 5, Pasal 7 huruf a, dan Pasal 8", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 52, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-126",
      topik: "A2.9",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "PMK 81/2024 Pasal 157 ayat (4) huruf d dan e (dikutip try out): Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak ... diterbitkan paling lama 1 (satu) bulan terhitung sejak: ... d. Surat Keputusan Keberatan ... diterbitkan, e. Putusan Banding atau Putusan Peninjauan Kembali ... diterima kantor Direktorat Jenderal Pajak yang berwenang melaksanakan Putusan Banding atau Putusan Peninjauan Kembali.",
      stem: "Pengadilan Pajak mengabulkan seluruh permohonan banding CV Ortax Distributor atas Surat Keputusan Keberatan PPN yang jumlah pajaknya telah dilunasi, sehingga timbul kelebihan pembayaran pajak. Salinan Putusan Banding dikirim oleh Pengadilan Pajak pada 3 Juni 2026 dan diterima oleh KPP tempat CV Ortax Distributor terdaftar (kantor DJP yang berwenang melaksanakan putusan) pada 9 Juni 2026. Batas waktu bagi KPP untuk menerbitkan Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak (SKPKPP) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "3 Juli 2026", B: "9 Juli 2026", C: "31 Juli 2026", D: "9 September 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk kelebihan pembayaran pajak karena Putusan Banding, SKPKPP diterbitkan paling lama 1 bulan sejak Putusan Banding diterima kantor DJP yang berwenang melaksanakan putusan. Putusan diterima KPP pada 9 Juni 2026, sehingga batas penerbitan SKPKPP 9 Juli 2026 (Kamis). Tanggal pengiriman putusan (3 Juni 2026) bukan titik awal, berbeda dengan surat keputusan DJP (keberatan, pembetulan, pengurangan) yang dihitung sejak tanggal diterbitkan.",
        jejakHitung: [ [ "Pemicu: Putusan Banding diterima KPP", "9 Juni 2026" ], [ "+ 1 bulan", "9 Juli 2026" ], [ "Hari", "Kamis (hari kerja)" ] ],
        mengapaSalah: { A: "Menghitung sejak putusan dikirim/diterbitkan, padahal untuk Putusan Banding titik awalnya tanggal diterima kantor DJP.", C: "Memakai pola akhir bulan berikutnya yang tidak berlaku untuk penerbitan SKPKPP.", D: "Memakai jangka 3 bulan, padahal jangka penerbitan SKPKPP hanya 1 bulan." },
        jebakan: "Khusus Putusan Banding/PK, titik awalnya tanggal DITERIMA kantor DJP pelaksana putusan. Batas dihitung tanggal ke tanggal (9 Juni → 9 Juli); bila dihitung inklusif (8 Juli 2026), tanggal itu tidak tersedia di opsi sehingga jawaban tetap tunggal."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 11 ayat (1) dan (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 151 huruf h dan Pasal 157 ayat (4) huruf e", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 54, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-127",
      topik: "A2.6",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Ortax Distribusi menyampaikan SPT Masa PPN Masa Pajak Maret 2026 pada 30 April 2026. Bila setelah pemeriksaan terdapat PPN yang kurang dibayar, Direktur Jenderal Pajak dapat menerbitkan SKPKB untuk Masa Pajak tersebut paling lambat ...",
      kataKualifikasi: [ "paling lambat" ],
      opsi: { A: "30 April 2031", B: "31 Desember 2031", C: "31 Maret 2036", D: "31 Maret 2031" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "angka-usang" },
      pembahasan: {
        inti: "Jangka waktu 5 tahun penerbitan SKPKB dihitung setelah berakhirnya Masa Pajak. Masa Pajak Maret 2026 berakhir 31 Maret 2026, sehingga SKPKB paling lambat diterbitkan 31 Maret 2031. Tanggal penyampaian SPT Masa tidak menggeser jangka waktu itu.",
        jejakHitung: [],
        mengapaSalah: { A: "Menghitung dari tanggal penyampaian SPT Masa, padahal patokannya berakhirnya Masa Pajak.", B: "Menghitung dari akhir tahun kalender, padahal untuk SPT Masa yang menjadi patokan adalah berakhirnya Masa Pajak.", C: "Memakai jangka waktu 10 tahun menurut ketentuan lama sebelum UU 28/2007." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU KUP Pasal 13 ayat (1) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 13 ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 58, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-128",
      topik: "A2.11",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Putusan banding atas sengketa PT Ortax Elektrik diucapkan pada 24 Februari 2026 dan dikirim kepada para pihak pada 3 Maret 2026. Putusan menolak banding sehingga perusahaan harus melunasi kekurangan pajak. Pada 13 Juli 2026 perusahaan menemukan bukti tertulis baru yang penting dan menentukan; hari dan tanggal penemuannya dinyatakan di bawah sumpah dan disahkan pejabat berwenang. Analisis yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PK paling lambat 3 Juni 2026 (3 bulan sejak putusan dikirim) sehingga sudah terlambat; PK tidak menangguhkan pelaksanaan putusan sehingga penagihan tetap berjalan", B: "PK paling lambat 13 Oktober 2026 (3 bulan sejak bukti ditemukan); PK tidak menangguhkan pelaksanaan putusan sehingga penagihan tetap berjalan", C: "PK paling lambat 13 Oktober 2026 (3 bulan sejak bukti ditemukan); selama PK diperiksa Mahkamah Agung, pelaksanaan putusan ditangguhkan", D: "PK paling lambat 13 Januari 2027 (6 bulan sejak bukti ditemukan); penagihan ditangguhkan sampai putusan PK diucapkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PK hanya dapat diajukan satu kali. Untuk alasan bukti tertulis baru yang penting dan menentukan, PK diajukan paling lambat 3 bulan sejak bukti ditemukan (tanggal penemuan dinyatakan di bawah sumpah dan disahkan pejabat berwenang), yaitu 13 Oktober 2026 (Selasa). Permohonan PK tidak menangguhkan atau menghentikan pelaksanaan putusan Pengadilan Pajak.",
        jejakHitung: [],
        mengapaSalah: { A: "Untuk alasan novum, jangka 3 bulan dihitung sejak bukti ditemukan, bukan sejak putusan dikirim.", C: "Jangka waktunya benar, tetapi PK tidak menangguhkan pelaksanaan putusan.", D: "Jangka PK hanya 3 bulan, dan PK tidak menangguhkan penagihan." },
        jebakan: "Langkah: Tanggal bukti ditemukan (di bawah sumpah): 13 Juli 2026; + 3 bulan: 13 Oktober 2026 (Selasa)."
      },
      dasarHukum: [
        { pasal: "UU 14/2002 Pasal 77 ayat (3), Pasal 89 ayat (1)–(2), Pasal 91 huruf b, Pasal 92 ayat (2)", berlakuSejak: null },
        { pasal: "UU KUP Pasal 27 ayat (5e) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sumber tidak memuat bagian Pengecoh; alasan opsi salah disusun sendiri. · Opsi A, B, C, D terpotong/teracak di sumber (sebagian teks A tercampur dengan akhir B; C berhenti di \"Mahkamah\", D berhenti di \"sampai\"). Opsi dilengkapi dari pembahasan (PK tidak menangguhkan pelaksanaan putusan).",
      sumber: { set: "TO-B-2026-11", no: 61, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-129",
      topik: "A2.11",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Ortax Logistik mengajukan gugatan ke Pengadilan Pajak atas pelaksanaan Surat Paksa. Salinan Surat Tanggapan dari tergugat diterima langsung oleh PT Ortax Logistik pada 10 Agustus 2026. Batas waktu paling lambat PT Ortax Logistik menyerahkan Surat Bantahan adalah ...",
      kataKualifikasi: [ "paling lambat" ],
      opsi: { A: "24 Agustus 2026", B: "9 September 2026", C: "10 September 2026", D: "31 Agustus 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pemohon banding atau penggugat dapat menyerahkan Surat Bantahan dalam jangka waktu 30 hari sejak tanggal diterima salinan Surat Uraian Banding atau Surat Tanggapan. Bila diterima secara langsung, tanggal diterima adalah tanggal saat surat diterima secara langsung.",
        jejakHitung: [ [ "Tanggal diterima", "10 Agustus 2026" ], [ "+ 30 hari", "9 September 2026 (Rabu)" ] ],
        mengapaSalah: { A: "Memakai jangka 14 hari.", C: "Memakai jangka 1 bulan, padahal undang-undang menyebut 30 hari.", D: "Memakai akhir bulan penerimaan, yang tidak dikenal dalam ketentuan Surat Bantahan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 14/2002 Pasal 1 angka 12 dan Pasal 45 ayat (3)."
      },
      dasarHukum: [
        { pasal: "UU 14/2002 Pasal 1 angka 12 dan Pasal 45 ayat (3)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 70, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-130",
      topik: "A2.10",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Surat Paksa atas utang pajak CV Ortax Teknik telah diberitahukan secara sah kepada penanggung pajak, tetapi utang pajak belum juga dilunasi. Tindakan penagihan berikutnya yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "penerbitan Surat Perintah Melaksanakan Penyitaan setelah lewat 2 × 24 jam sejak Surat Paksa diberitahukan", B: "penjualan seluruh barang milik penanggung pajak secara lelang melalui kantor lelang negara tanpa didahului penyitaan", C: "penerbitan Surat Teguran sebagai peringatan pertama kepada penanggung pajak", D: "pengumuman lelang atas barang yang belum disita" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pelaksanaan Surat Paksa tidak dapat dilanjutkan dengan penyitaan sebelum lewat waktu 2 × 24 jam setelah Surat Paksa diberitahukan. Apabila utang pajak tidak dilunasi dalam jangka waktu tersebut, pejabat menerbitkan Surat Perintah Melaksanakan Penyitaan.",
        jejakHitung: [],
        mengapaSalah: { B: "Penjualan secara lelang hanya dilakukan atas barang yang telah disita (Pasal 25 ayat (1)).", C: "Surat Teguran mendahului Surat Paksa, bukan sesudahnya.", D: "Pengumuman lelang dilakukan setelah penyitaan, paling singkat 14 hari setelah penyitaan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 19/1997 s.t.d.d. UU 19/2000 (UU PPSP) Pasal 8 ayat (1) huruf a, Pasal 11, Pasal 12 ayat (1), Pasal 25 ayat (1)."
      },
      dasarHukum: [
        { pasal: "UU 19/1997 s.t.d.d. UU 19/2000 (UU PPSP) Pasal 8 ayat (1) huruf a, Pasal 11, Pasal 12 ayat (1), Pasal 25 ayat (1)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 71, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-131",
      topik: "A2.7",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Dalam penelitian permohonan pembatalan SKPKB yang tidak benar yang diajukan Koperasi Ortax Sejahtera, DJP mengirim surat permintaan dokumen, tetapi koperasi tidak memenuhinya sama sekali. Akibat yang tepat menurut PMK 118/2024 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "permohonan dianggap dicabut oleh Wajib Pajak", B: "permohonan tetap diproses berdasarkan data dan keterangan yang tersedia", C: "permohonan tidak dipertimbangkan dan dikembalikan kepada Wajib Pajak", D: "permohonan langsung ditolak seluruhnya oleh DJP tanpa dilakukan penelitian lebih lanjut" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bila Wajib Pajak tidak memenuhi sebagian atau seluruh permintaan buku, catatan, dokumen, data, informasi, dan/atau keterangan (ayat (4) huruf a atau b), permohonan pengurangan atau pembatalan SKP yang tidak benar tetap diproses sesuai dengan buku, catatan, dokumen, data, informasi, dan/atau keterangan yang tersedia (ayat (8)).",
        jejakHitung: [],
        mengapaSalah: { A: "Tidak ada ketentuan pencabutan otomatis.", C: "\"Tidak dipertimbangkan\" berlaku bila persyaratan formal permohonan tidak dipenuhi, bukan karena tidak memenuhi permintaan dokumen dalam penelitian.", D: "Penelitian tetap dilanjutkan dengan data dan keterangan yang tersedia; tidak ada penolakan otomatis." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 34 ayat (4) huruf a dan ayat (8)."
      },
      dasarHukum: [
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 34 ayat (4) huruf a dan ayat (8)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 85, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-132",
      topik: "A2.11",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 1,
      kutipan: "UU KUP Pasal 23 ayat (2) huruf a dan b (dikutip try out): Gugatan Wajib Pajak atau Penanggung Pajak terhadap: a. pelaksanaan Surat Paksa, Surat Perintah Melaksanakan Penyitaan, atau Pengumuman Lelang; b. keputusan pencegahan dalam rangka penagihan pajak; ... hanya dapat diajukan kepada badan peradilan pajak.",
      stem: "PT Ortax Logistik menerima Surat Paksa atas utang pajak yang telah mempunyai kekuatan hukum tetap, dan karena tidak melunasinya, jurusita pajak melaksanakan Surat Perintah Melaksanakan Penyitaan atas dua unit truknya pada Agustus 2026. PT Ortax Logistik menilai pelaksanaan penyitaan tersebut tidak sesuai prosedur. Upaya hukum yang tepat bagi PT Ortax Logistik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "mengajukan banding kepada Pengadilan Pajak atas pelaksanaan Surat Perintah Melaksanakan Penyitaan", B: "mengajukan gugatan kepada Pengadilan Pajak atas pelaksanaan Surat Perintah Melaksanakan Penyitaan", C: "mengajukan keberatan kepada Direktur Jenderal Pajak atas pelaksanaan Surat Perintah Melaksanakan Penyitaan", D: "mengajukan gugatan kepada Pengadilan Tata Usaha Negara atas pelaksanaan Surat Perintah Melaksanakan Penyitaan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang dipersoalkan adalah pelaksanaan Surat Perintah Melaksanakan Penyitaan, yaitu tindakan penagihan pajak. Pasal 23 ayat (2) huruf a UU KUP menetapkan bahwa gugatan terhadap pelaksanaan Surat Paksa, Surat Perintah Melaksanakan Penyitaan, atau Pengumuman Lelang hanya dapat diajukan kepada badan peradilan pajak; Pasal 31 ayat (3) UU 14/2002 menyebut Pengadilan Pajak dalam hal gugatan memeriksa sengketa atas pelaksanaan penagihan pajak. Banding hanya dapat diajukan atas Surat Keputusan Keberatan.",
        jejakHitung: [],
        mengapaSalah: { A: "Banding hanya atas Surat Keputusan Keberatan; pelaksanaan penyitaan adalah objek gugatan.", C: "Keberatan diajukan atas surat ketetapan pajak atau pemotongan/pemungutan, bukan atas pelaksanaan penyitaan.", D: "Gugatan atas pelaksanaan penagihan pajak hanya dapat diajukan kepada badan peradilan pajak, bukan Pengadilan Tata Usaha Negara." },
        jebakan: "Banding → atas SK Keberatan; gugatan → atas pelaksanaan penagihan (Surat Paksa, SPMP, Pengumuman Lelang), keputusan pencegahan, dan keputusan lain sesuai Pasal 23 ayat (2) UU KUP."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 23 ayat (2) huruf a dan Pasal 27 ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "UU 14/2002 Pasal 31 ayat (2) dan (3)", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Teks opsi B kosong di sumber; disusun dari pembahasan (gugatan kepada Pengadilan Pajak atas pelaksanaan SPMP), sejajar dengan pola opsi lain.",
      sumber: { set: "TO-B-2026-11", no: 86, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-133",
      topik: "A2.8",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Ortax Kimia menerima SKPKB PPh Badan 2024 dengan jumlah pajak yang masih harus dibayar Rp500.000.000. Dalam pembahasan akhir hasil pemeriksaan, perusahaan menyetujui pajak Rp100.000.000 dan melunasinya sebelum mengajukan keberatan atas sisanya. Keberatan dikabulkan sebagian sehingga jumlah pajak yang masih harus dibayar menurut Surat Keputusan Keberatan menjadi Rp400.000.000. Perusahaan tidak mengajukan banding. Sanksi administratif atas keputusan keberatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0,00", B: "Rp120.000.000,00", C: "Rp180.000.000,00", D: "Rp90.000.000,00" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Bila keberatan ditolak atau dikabulkan sebagian dan Wajib Pajak tidak mengajukan banding, dikenakan denda 30% dari jumlah pajak berdasarkan keputusan keberatan dikurangi pajak yang telah dibayar sebelum mengajukan keberatan (Pasal 25 ayat (9) dan Penjelasannya).",
        jejakHitung: [ [ "Dasar denda = Rp400.000.000 − Rp100.000.000", "Rp300.000.000" ], [ "Denda = 30% × Rp300.000.000", "Rp90.000.000" ] ],
        mengapaSalah: { A: "Denda tetap dikenakan karena keberatan hanya dikabulkan sebagian dan tidak diajukan banding.", B: "Tidak mengurangkan pembayaran Rp100.000.000 sebelum keberatan (30% × Rp400.000.000).", C: "Memakai tarif 60% yang berlaku untuk putusan banding (60% × Rp300.000.000)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU KUP Pasal 25 ayat (3a), (9), dan (10) beserta Penjelasan ayat (9) s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 25 ayat (3a), (9), dan (10) beserta Penjelasan ayat (9) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 95, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A2-134",
      topik: "A2.3",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Dalam pembahasan SP2DK, PT Ortax Distributor mengetahui bahwa biaya promosi yang sah belum dibebankan dalam SPT Tahunan PPh Badan 2023 (tahun buku sama dengan tahun kalender), sehingga SPT yang dibetulkan akan menyatakan lebih bayar. Belum ada tindakan pemeriksaan. Tindak lanjut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "membetulkan SPT Tahunan atas kemauan sendiri, paling lama 2 (dua) tahun sebelum daluwarsa penetapan, yaitu 31 Desember 2026.", B: "mengajukan keberatan atas SPT Tahunan yang telah disampaikan, paling lama 3 (tiga) bulan sejak tanggal SP2DK diterima oleh Wajib Pajak.", C: "mengajukan permohonan pengembalian kelebihan pembayaran pajak tanpa membetulkan SPT Tahunan.", D: "tidak dapat membetulkan SPT karena SPT lebih bayar hanya dapat diselesaikan melalui pemeriksaan." },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Selama DJP belum melakukan tindakan pemeriksaan, Wajib Pajak dapat membetulkan SPT atas kemauan sendiri (Pasal 8 ayat (1)). Pembetulan yang menyatakan rugi atau lebih bayar harus disampaikan paling lama 2 tahun sebelum daluwarsa penetapan (Pasal 8 ayat (1a)). Daluwarsa penetapan Tahun Pajak 2023 adalah 31 Desember 2028 (Pasal 13 ayat (1)), sehingga pembetulan lebih bayar paling lama 31 Desember 2026.",
        jejakHitung: [],
        mengapaSalah: { B: "Keberatan hanya dapat diajukan atas surat ketetapan pajak serta pemotongan atau pemungutan oleh pihak ketiga, bukan atas SPT (Pasal 25 ayat (1)).", C: "Kelebihan pembayaran harus dinyatakan dalam SPT terlebih dahulu melalui pembetulan.", D: "Pembetulan yang menyatakan lebih bayar diperbolehkan sepanjang disampaikan paling lama 2 tahun sebelum daluwarsa penetapan." },
        jebakan: "Langkah: Daluwarsa penetapan TP 2023 = 5 tahun setelah berakhirnya tahun pajak: 31 Desember 2028; Batas pembetulan lebih bayar = 2 tahun sebelumnya: 31 Desember 2026."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 8 ayat (1) dan (1a), Pasal 13 ayat (1), Pasal 25 ayat (1) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 98, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-A2-01", topik: "A2.3", tipe: "angka", depan: "Batas setor pajak masa (PPh 21/23/26/4(2)/22/25) sejak 2025?", belakang: "Tanggal 15 bulan berikutnya; hari libur bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 100", berlakuSejak: "2025-01-01", menggantikan: "tanggal 10 untuk PPh 21/26, 23, 4(2)/15 dipotong, dan PPh 22 pemungut badan; tanggal 15 untuk PPh 25 (PMK 242/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-02", topik: "A2.3", tipe: "angka", depan: "Batas lapor SPT Masa PPh 21/26 dan Unifikasi?", belakang: "20 hari setelah Masa Pajak berakhir", dasar: "Pasal 3 ayat (3) huruf a UU KUP; PMK 81/2024 Pasal 171", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-03", topik: "A2.3", tipe: "angka", depan: "Batas setor dan lapor SPT Masa PPN?", belakang: "Akhir bulan berikutnya; setor sebelum SPT disampaikan", dasar: "Pasal 3 ayat (3) dan Pasal 9 ayat (1) UU KUP", berlakuSejak: "2010-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-04", topik: "A2.3", tipe: "angka", depan: "Batas SPT Tahunan OP dan badan?", belakang: "OP 3 bulan, badan 4 bulan setelah akhir Tahun Pajak", dasar: "Pasal 3 ayat (3) huruf b dan c UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-05", topik: "A2.3", tipe: "prosedur", depan: "Perpanjangan SPT Tahunan?", belakang: "Paling lama 2 bulan; lampirkan penghitungan sementara dan bukti pelunasan", dasar: "Pasal 3 ayat (4)–(5) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-06", topik: "A2.3", tipe: "pasal", depan: "Batas pembetulan SPT yang menyatakan rugi atau lebih bayar?", belakang: "Paling lama 2 tahun sebelum daluwarsa penetapan", dasar: "Pasal 8 ayat (1a) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-07", topik: "A2.8", tipe: "angka", depan: "Denda Pasal 7 ayat (1) per jenis SPT?", belakang: "Masa PPN Rp500 rb; Masa lain Rp100 rb; Tahunan Badan Rp1 jt, OP Rp100 rb", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-08", topik: "A2.8", tipe: "angka", depan: "Rumus tarif bunga sanksi per bulan?", belakang: "(Suku bunga acuan + uplift) : 12; bagian bulan = 1 bulan; maks 24", dasar: "Pasal 8, 9, 13, 14, 19 UU KUP; KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026", berlakuSejak: "2021-10-29", menggantikan: "bunga 2% per bulan flat (UU 28/2007)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-09", topik: "A2.8", tipe: "angka", depan: "Tarif bunga Oktober 2026 (uplift 0/5/10/15/20%)?", belakang: "0,59% · 1,01% · 1,42% · 1,84% · 2,26% per bulan", dasar: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01", menggantikan: "tarif KMK bulan sebelumnya (tarif ditetapkan ulang tiap bulan)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-10", topik: "A2.8", tipe: "pasal", depan: "Uplift 0% dipakai untuk pasal apa?", belakang: "Pasal 19: tunggakan ketetapan, angsuran/penundaan, kurang bayar perpanjangan SPT", dasar: "Pasal 19 ayat (1)–(3) UU KUP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-11", topik: "A2.8", tipe: "pasal", depan: "Uplift 5% dipakai untuk pasal apa?", belakang: "Ps. 8(2)/(2a) pembetulan; 9(2a)/(2b) terlambat setor; 14(3) STP", dasar: "UU KUP s.t.d.t.d. UU HPP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-12", topik: "A2.8", tipe: "pasal", depan: "Uplift 10%, 15%, dan 20%?", belakang: "10% Ps. 8(5); 15% Ps. 13(2); 20% Ps. 13(3)", dasar: "Pasal 8 ayat (5), 13 ayat (2) dan (3) UU KUP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-13", topik: "A2.6", tipe: "angka", depan: "Kenaikan Pasal 13 ayat (3) huruf c/d?", belakang: "75%: PPh dipotong/dipungut tidak disetor; PPN/PPnBM kurang bayar", dasar: "Pasal 13 ayat (3) UU KUP (UU HPP)", berlakuSejak: "2021-10-29", menggantikan: "kenaikan 100% (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-14", topik: "A2.6", tipe: "angka", depan: "Sanksi dalam SKPKBT?", belakang: "Kenaikan 100% dari kekurangan pajak, kecuali WP mengungkapkan sendiri sebelum pemeriksaan", dasar: "Pasal 15 ayat (2) dan (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-15", topik: "A2.6", tipe: "angka", depan: "Denda faktur tidak dibuat/terlambat/tidak lengkap?", belakang: "1% × Dasar Pengenaan Pajak", dasar: "Pasal 14 ayat (4) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "2% × DPP (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-16", topik: "A2.6", tipe: "angka", depan: "Daluwarsa penetapan SKPKB/SKPKBT/STP?", belakang: "5 tahun setelah saat terutang atau akhir Masa/Tahun Pajak", dasar: "Pasal 13 ayat (1), 14, 15 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: "10 tahun (UU 16/2000)", dekTambahan: [] },
    { id: "KT-A2-17", topik: "A2.5", tipe: "angka", depan: "Jangka pemeriksaan menurut PMK 15/2025?", belakang: "Lengkap 5 bulan (+4), terfokus 3 bulan, spesifik 1 bulan", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14", menggantikan: "kantor 4 bulan / lapangan 6 bulan (PMK 17/2013 jo. 184/2015)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-18", topik: "A2.5", tipe: "angka", depan: "Tanggapan tertulis atas SPHP?", belakang: "5 hari kerja sejak SPHP diterima", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14", menggantikan: "7 hari kerja (PMK 17/2013 jo. 184/2015)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-19", topik: "A2.5", tipe: "angka", depan: "Jangka PAHP dan laporan hasil pemeriksaan?", belakang: "30 hari kerja sejak SPHP disampaikan", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-20", topik: "A2.5", tipe: "pasal", depan: "Batas dan sanksi pengungkapan ketidakbenaran pengisian SPT saat pemeriksaan?", belakang: "Sebelum SPHP disampaikan; bunga uplift 10%", dasar: "Pasal 8 ayat (4)–(5) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "sebelum SKP terbit dengan kenaikan 50% (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-21", topik: "A2.5", tipe: "angka", depan: "Denda pengungkapan ketidakbenaran perbuatan saat bukti permulaan?", belakang: "100% dari pajak kurang dibayar", dasar: "Pasal 8 ayat (3a) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "150% (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-22", topik: "A2.7", tipe: "angka", depan: "Tenggat mengajukan keberatan?", belakang: "3 bulan sejak SKP dikirim atau tanggal pemotongan/pemungutan", dasar: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-23", topik: "A2.7", tipe: "angka", depan: "Jangka keputusan keberatan?", belakang: "12 bulan sejak surat keberatan diterima; lewat = dikabulkan", dasar: "Pasal 26 ayat (1) dan (5) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-24", topik: "A2.7", tipe: "angka", depan: "Denda keberatan ditolak/dikabulkan sebagian?", belakang: "30% × (pajak SK Keberatan − dibayar sebelum keberatan); gugur bila banding", dasar: "Pasal 25 ayat (9)–(10) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "50% (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-25", topik: "A2.7", tipe: "prosedur", depan: "Pelunasan minimal sebelum keberatan atas SKPKB/SKPKBT?", belakang: "Paling sedikit jumlah yang disetujui dalam PAHP", dasar: "Pasal 25 ayat (3a) UU KUP; PMK 118/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-26", topik: "A2.7", tipe: "angka", depan: "Permohonan Pasal 36: jangka keputusan dan batas pengajuan?", belakang: "Keputusan 6 bulan; huruf a–c paling banyak 2 kali", dasar: "Pasal 36 UU KUP; PMK 118/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-27", topik: "A2.7", tipe: "angka", depan: "Fasilitas penghapusan sanksi PMK 71/2026?", belakang: "Hapus 100% s.d. 31 Des 2026; bertahap mengecil s.d. 30 Juni 2027", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-28", topik: "A2.11", tipe: "angka", depan: "Denda banding atau PK ditolak/dikabulkan sebagian?", belakang: "60% × (pajak menurut putusan − dibayar sebelum keberatan)", dasar: "Pasal 27 ayat (5d) dan (5f) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "denda banding 100% (UU 28/2007); denda PK belum diatur", dekTambahan: [] },
    { id: "KT-A2-29", topik: "A2.11", tipe: "angka", depan: "Tenggat banding dan jangka putusan?", belakang: "3 bulan sejak SK Keberatan diterima; putusan 12 bulan (+3)", dasar: "Pasal 35 ayat (2) dan 81 UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-30", topik: "A2.11", tipe: "angka", depan: "Tenggat gugatan ke Pengadilan Pajak?", belakang: "14 hari sejak pelaksanaan penagihan; 30 hari sejak keputusan lain diterima", dasar: "Pasal 40 UU 14/2002; Pasal 23 ayat (2) UU KUP", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-31", topik: "A2.11", tipe: "prosedur", depan: "Peninjauan Kembali putusan Pengadilan Pajak?", belakang: "Ke MA, 3 bulan, hanya sekali, tidak menangguhkan putusan", dasar: "Pasal 77, 89, 92 UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-32", topik: "A2.11", tipe: "definisi", depan: "Inti Putusan MK 26/PUU-XXI/2023?", belakang: "Pembinaan organisasi, administrasi, keuangan Pengadilan Pajak ke MA paling lambat 31 Des 2026", dasar: "Putusan MK 26/PUU-XXI/2023", berlakuSejak: "2023-05-25", menggantikan: "pembinaan non-teknis oleh Kementerian Keuangan (Pasal 5 ayat (2) UU 14/2002)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-33", topik: "A2.10", tipe: "prosedur", depan: "Urutan dan jeda tindakan penagihan?", belakang: "Teguran +7 hari, Surat Paksa +21, sita 2×24 jam, umumkan +14, lelang +14", dasar: "UU PPSP Pasal 8, 12, 26; PMK 61/2023", berlakuSejak: "2023-06-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-34", topik: "A2.10", tipe: "angka", depan: "Syarat dan jangka penyanderaan?", belakang: "Utang ≥ Rp100 juta dan itikad diragukan; 6 bulan + 6 bulan", dasar: "Pasal 33 UU PPSP; PMK 61/2023", berlakuSejak: "2023-06-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-35", topik: "A2.10", tipe: "pasal", depan: "Daluwarsa penagihan dan penangguhannya?", belakang: "5 tahun sejak terbit; tertangguh: Surat Paksa, pengakuan utang, SKP Ps. 13(5)/15(4), penyidikan", dasar: "Pasal 22 UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-36", topik: "A2.2", tipe: "angka", depan: "Implementasi penuh NIK sebagai NPWP dan pengganti NPWP cabang?", belakang: "1 Juli 2024; cabang memakai NITKU", dasar: "PMK 112/PMK.03/2022 jo. PMK 136/2023", berlakuSejak: "2024-07-01", menggantikan: "NPWP 15 digit dan NPWP cabang", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-37", topik: "A2.2", tipe: "angka", depan: "Kapan wajib lapor untuk dikukuhkan PKP?", belakang: "Akhir bulan berikutnya setelah peredaran bruto melewati Rp4,8 miliar", dasar: "PMK 197/PMK.03/2013", berlakuSejak: "2014-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-38", topik: "A2.4", tipe: "angka", depan: "Masa simpan buku, catatan, dan dokumen dasar?", belakang: "10 tahun di Indonesia", dasar: "Pasal 28 ayat (11) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-39", topik: "A2.9", tipe: "angka", depan: "Batas keputusan restitusi Pasal 17B?", belakang: "12 bulan; lewat = dikabulkan, SKPLB terbit 1 bulan", dasar: "Pasal 17B ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-40", topik: "A2.9", tipe: "angka", depan: "Ambang pengembalian pendahuluan Pasal 17D sejak 1 Mei 2026?", belakang: "OP usaha ≤ Rp100 jt; badan ≤ Rp1 M; PKP: lebih bayar ≤ Rp1 M dan penyerahan ≤ Rp4,2 M per Masa Pajak", dasar: "PMK 28 Tahun 2026", berlakuSejak: "2026-05-01", menggantikan: "PKP ≤ Rp5 miliar (PMK 39/PMK.03/2018 s.t.d.d. PMK 209/PMK.03/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-41", topik: "A2.1", tipe: "definisi", depan: "Kredit Pajak untuk PPh?", belakang: "Bayar sendiri + pokok STP + dipotong/dipungut + PPh LN − pengembalian pendahuluan", dasar: "Pasal 1 angka 22 huruf a UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-42", topik: "A2.1", tipe: "definisi", depan: "Kapan SKPN diterbitkan?", belakang: "Pajak terutang sama dengan kredit pajak, atau tidak terutang tanpa kredit", dasar: "Pasal 1 dan Pasal 17A UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-43", topik: "A2.1", tipe: "definisi", depan: "Dokumen apa saja yang termasuk surat ketetapan pajak?", belakang: "SKPKB, SKPKBT, SKPLB, dan SKPN; STP bukan surat ketetapan pajak", dasar: "Pasal 1 UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-44", topik: "A2.1", tipe: "prosedur", depan: "Siapa yang dapat menjadi kuasa Wajib Pajak menurut PMK 44/2026?", belakang: "Konsultan pajak, pihak lain ber-SKT, atau keluarga sampai derajat kedua", dasar: "PMK 44/2026 Pasal 2–3; Pasal 32 ayat (3) UU KUP", berlakuSejak: "2026-07-06", menggantikan: "hanya konsultan pajak atau karyawan WP (PMK 229/PMK.03/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-45", topik: "A2.1", tipe: "pasal", depan: "Isi wajib surat kuasa khusus menurut PMK 44/2026?", belakang: "Hak/kewajiban yang dikuasakan dan masa berlaku; tidak boleh disubstitusikan", dasar: "PMK 44/2026 Pasal 8", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-46", topik: "A2.3", tipe: "pasal", depan: "Kapan SPT dianggap tidak disampaikan?", belakang: "Tidak ditandatangani, tidak lengkap, LB lewat 3 tahun dan ditegur, atau setelah pemeriksaan/SKP", dasar: "Pasal 6 ayat (5) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-47", topik: "A2.3", tipe: "prosedur", depan: "Jatuh tempo pelunasan STP/SKPKB jatuh pada hari libur?", belakang: "Tidak bergeser; berbeda dengan jatuh tempo setor pajak masa yang bergeser", dasar: "Pasal 9 ayat (3) UU KUP; PMK 81/2024 Pasal 100", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-48", topik: "A2.3", tipe: "pasal", depan: "Pembetulan SPT setelah SKP tahun lalu mengubah rugi fiskal yang dikompensasikan?", belakang: "Paling lama 3 bulan setelah menerima SKP/keputusan/putusan tersebut", dasar: "Pasal 8 ayat (6) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-49", topik: "A2.3", tipe: "prosedur", depan: "Pembetulan SPT di Coretax sejak 1 Oktober 2026?", belakang: "Memperhitungkan pembayaran dan pengembalian yang terjadi sebelum pembetulan disampaikan", dasar: "PER-12/PJ/2026", berlakuSejak: "2026-10-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-50", topik: "A2.5", tipe: "angka", depan: "Jangka maksimal pemeriksaan lengkap untuk grup usaha/indikasi transfer pricing?", belakang: "5 bulan ditambah perpanjangan 4 bulan, total 9 bulan sampai SPHP", dasar: "PMK 15/2025", berlakuSejak: "2025-02-14", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-51", topik: "A2.6", tipe: "pasal", depan: "Sanksi SKPKB PPN karena tarif 0% atau kompensasi yang tidak seharusnya?", belakang: "Kenaikan 75% (Pasal 13 ayat (3)); koreksi PPN biasa: bunga uplift 15%", dasar: "Pasal 13 ayat (1) huruf a dan c, ayat (2), ayat (3) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "kenaikan 100% (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-52", topik: "A2.6", tipe: "pasal", depan: "Kapan SKPKB masih dapat terbit setelah daluwarsa 5 tahun lewat?", belakang: "Hanya bila WP dipidana berdasarkan putusan berkekuatan hukum tetap (Pasal 13 ayat (5))", dasar: "Pasal 13 ayat (5) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-53", topik: "A2.7", tipe: "angka", depan: "Tenggat keberatan atas pemotongan/pemungutan oleh pihak ketiga?", belakang: "3 bulan sejak tanggal pemotongan/pemungutan; diajukan kepada Direktur Jenderal Pajak", dasar: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-54", topik: "A2.7", tipe: "prosedur", depan: "Akibat surat keberatan yang tidak memenuhi syarat?", belakang: "Bukan surat keberatan; boleh diajukan ulang selama tenggat 3 bulan belum lewat", dasar: "Pasal 25 ayat (5) UU KUP; PMK 118/2024", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-55", topik: "A2.8", tipe: "angka", depan: "Bunga atas angsuran atau penundaan pembayaran pajak?", belakang: "Pasal 19 ayat (2), uplift 0%, atas sisa yang masih harus dibayar", dasar: "Pasal 9 ayat (4) dan Pasal 19 ayat (2) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "bunga 2% per bulan (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-56", topik: "A2.8", tipe: "prosedur", depan: "Alokasi pembayaran utang pajak sejak 2 Oktober 2026?", belakang: "Pokok pajak dilunasi lebih dahulu, baru sanksi administratif", dasar: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02", menggantikan: "dialokasikan proporsional ke pokok dan sanksi", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-57", topik: "A2.9", tipe: "pasal", depan: "Imbalan bunga bila SKPLB restitusi terlambat diterbitkan?", belakang: "Sejak 12 bulan berakhir sampai SKPLB terbit; tarif uplift 0%", dasar: "Pasal 17B ayat (3) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "imbalan bunga 2% per bulan (UU 28/2007)", dekTambahan: [] },
    { id: "KT-A2-58", topik: "A2.9", tipe: "pasal", depan: "Siapa yang boleh meminta restitusi PPN setiap Masa Pajak?", belakang: "Eksportir, penyerah ke pemungut/tidak dipungut, PKP belum berproduksi; lainnya akhir tahun buku", dasar: "Pasal 9 ayat (4a)–(4b) UU PPN", berlakuSejak: "2010-04-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-59", topik: "A2.9", tipe: "angka", depan: "Sanksi SKPKB setelah pengembalian pendahuluan Pasal 17C/17D?", belakang: "Kenaikan 100% dari jumlah kekurangan pembayaran pajak", dasar: "Pasal 17C ayat (5) dan 17D ayat (5) UU KUP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-60", topik: "A2.10", tipe: "pasal", depan: "Daluwarsa penagihan bila WP mengajukan angsuran (pengakuan utang)?", belakang: "Tertangguh; 5 tahun dihitung ulang sejak tanggal pengakuan utang", dasar: "Pasal 22 ayat (2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-61", topik: "A2.10", tipe: "pasal", depan: "Batas hak mendahulu negara atas utang pajak?", belakang: "Di atas semua, kecuali biaya perkara lelang, penyelamatan barang, dan penyelesaian warisan", dasar: "Pasal 21 ayat (1) dan (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-62", topik: "A2.10", tipe: "angka", depan: "Syarat dan jangka pencegahan ke luar negeri?", belakang: "Utang ≥ Rp100 juta dan itikad diragukan; 6 bulan, dapat diperpanjang 6 bulan", dasar: "Pasal 29–30 UU PPSP; PMK 61/2023", berlakuSejak: "2023-06-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-63", topik: "A2.11", tipe: "prosedur", depan: "Upaya hukum atas keputusan Pasal 36 yang menolak permohonan?", belakang: "Gugatan ke Pengadilan Pajak, 30 hari sejak keputusan diterima", dasar: "Pasal 23 ayat (2) huruf c UU KUP; Pasal 40 ayat (3) UU 14/2002", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-64", topik: "A2.11", tipe: "angka", depan: "Batas penerbitan STP atas denda 60% Putusan PK?", belakang: "Paling lama 2 tahun sejak Putusan PK diterima DJP", dasar: "Pasal 27 ayat (5f)–(5g) UU KUP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-65", topik: "A2.6", tipe: "definisi", depan: "STP vs SKPKB: dasar terbit dan upaya hukumnya?", belakang: "STP menagih pokok berjalan/sanksi, tidak dapat keberatan; SKPKB hasil pemeriksaan, dapat keberatan", dasar: "Pasal 13, 14, 25 ayat (1), dan 36 UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-66", topik: "A2.10", tipe: "definisi", depan: "Bedakan Surat Teguran SPT dan Surat Teguran penagihan.", belakang: "Teguran SPT: dasar SKPKB Ps. 13(1)b; teguran penagihan: lewat 7 hari jatuh tempo", dasar: "Pasal 13 ayat (1) huruf b UU KUP; Pasal 8 UU PPSP; PMK 61/2023", berlakuSejak: "2023-06-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-67", topik: "A2.12", tipe: "definisi", depan: "Dua jalur akses informasi keuangan DJP menurut UU 9/2017?", belakang: "Laporan otomatis tahunan LJK dan permintaan informasi, bukti, atau keterangan (IBK)", dasar: "Pasal 2 UU 9/2017; ketentuan IBK (nomor pasal ◐)", berlakuSejak: "2017-05-08", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-68", topik: "A2.12", tipe: "pasal", depan: "Dasar meminta data notaris/akuntan publik vs data bank dalam pemeriksaan?", belakang: "Notaris/akuntan: Pasal 35 UU KUP atas permintaan tertulis Dirjen; bank: UU 9/2017", dasar: "Pasal 35 UU KUP; Pasal 8 UU 9/2017", berlakuSejak: "2017-05-08", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-69", topik: "A2.12", tipe: "pasal", depan: "Rahasia bank dalam akses informasi keuangan untuk kepentingan perpajakan?", belakang: "Tidak berlaku; tanpa permintaan tertulis Menteri Keuangan per bank per nasabah", dasar: "Pasal 8 UU 9/2017", berlakuSejak: "2017-05-08", menggantikan: "Pasal 35 ayat (2) UU KUP: rahasia bank ditiadakan atas permintaan tertulis Menteri Keuangan", dekTambahan: [] },
    { id: "KT-A2-70", topik: "A2.12", tipe: "angka", depan: "Ancaman pidana UU 9/2017 bagi pimpinan/pegawai LJK dan bagi LJK?", belakang: "Pimpinan/pegawai: kurungan ≤ 1 tahun atau denda ≤ Rp1 miliar; LJK: denda ≤ Rp1 miliar", dasar: "UU 9/2017 Pasal 7", berlakuSejak: "2017-05-08", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-71", topik: "A2.12", tipe: "prosedur", depan: "Nasabah menolak prosedur identifikasi rekening keuangan?", belakang: "LJK tidak boleh melayani pembukaan rekening baru atau transaksi baru terkait rekening", dasar: "UU 9/2017, larangan melayani nasabah (nomor pasal ◐)", berlakuSejak: "2017-05-08", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-72", topik: "A2.12", tipe: "angka", depan: "Ambang laporan domestik rekening orang pribadi menurut PMK 108/2025?", belakang: "Lembaga Simpanan (sejak 2026 termasuk uang elektronik tertentu): agregat per lembaga per 31 Desember ≥ Rp1 miliar; entitas tanpa batas", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A2-73", topik: "A2.12", tipe: "angka", depan: "Tenggat laporan informasi keuangan menurut PMK 108/2025?", belakang: "LJK diawasi OJK: ke OJK 1 Agustus; OJK ke DJP 31 Agustus; lainnya 30 April", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A2-74", topik: "A2.12", tipe: "prosedur", depan: "Laporan CARF pertama oleh PJAK dan laporan nihil?", belakang: "Data 2026, lapor paling lambat 30 April 2027; laporan nihil tetap wajib", dasar: "PMK 108/2025", berlakuSejak: "2026-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] }
  ],
  kasus: [
    {
      id: "K-A2-01", judul: "Terlambat setor, terlambat lapor, dan pembetulan — PT Cahaya Teknik", topik: "A2.8", estimasiMenit: 18,
      narasi: "PT Cahaya Teknik (PKP, tahun buku kalender) memotong PPh Pasal 21 Masa September 2026 sebesar Rp32.000.000, tetapi karena kas tersendat baru menyetorkannya pada 23 Desember 2026 dan baru melaporkan SPT Masa PPh 21/26 Masa September 2026 pada 28 Desember 2026. SPT Masa PPh Unifikasi Masa September 2026 dilaporkan tepat waktu pada 20 Oktober 2026, tetapi pada awal Januari 2027 ditemukan PPh Pasal 23 kurang setor Rp4.500.000; kekurangan itu disetor 5 Januari 2027 dan SPT pembetulan disampaikan 6 Januari 2027. Tarif bunga Oktober 2026 (KMK 47/MK/EF.2/2026): uplift 0% = 0,59%; 5% = 1,01%; 10% = 1,42%; 15% = 1,84%; 20% = 2,26%. Hitung seluruh sanksi yang akan ditagih dengan STP.",
      data: [["PPh 21 Masa Sep 2026", "Rp32.000.000"], ["Jatuh tempo setor", "15 Oktober 2026 (Kamis)"], ["Tanggal setor PPh 21", "23 Desember 2026"], ["Batas lapor SPT Masa PPh 21/26", "20 Oktober 2026"], ["Tanggal lapor SPT Masa PPh 21/26", "28 Desember 2026"], ["Kurang setor PPh 23 (pembetulan)", "Rp4.500.000, disetor 5 Januari 2027"], ["Tarif uplift 5% Okt 2026", "1,01% per bulan"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa bulan sanksi bunga atas keterlambatan setor PPh 21?", tipe: "angka", jawaban: 3, toleransi: 0,
          petunjuk: ["Hitung dari jatuh tempo 15 Oktober 2026 sampai tanggal setor", "15 Okt → 15 Des = 2 bulan, sisa 8 hari", "Bagian bulan dihitung penuh: 3 bulan"],
          penjelasan: "Pasal 9 ayat (2a): bunga dihitung dari jatuh tempo sampai tanggal pembayaran; bagian dari bulan dihitung penuh 1 bulan." },
        { no: 2, pertanyaan: "Pasal dan tarif bunga yang dipakai untuk keterlambatan setor PPh 21 ini adalah ...", tipe: "pilihan",
          opsi: { A: "Pasal 9 ayat (2a), 1,01% per bulan", B: "Pasal 19 ayat (1), 0,59% per bulan", C: "Pasal 13 ayat (2), 1,84% per bulan", D: "Pasal 8 ayat (5), 1,42% per bulan" }, jawaban: "A",
          petunjuk: ["Peristiwanya terlambat menyetor pajak masa", "Keterlambatan setor memakai uplift 5%", "Jawaban: A"],
          penjelasan: "Keterlambatan penyetoran pajak masa = Pasal 9 ayat (2a), uplift 5%; tarif Oktober 2026 karena sanksi dimulai 15 Oktober 2026." },
        { no: 3, pertanyaan: "Berapa bunga atas keterlambatan setor PPh 21 (Rp)?", tipe: "angka", jawaban: 969600, toleransi: 0,
          petunjuk: ["Bunga = pokok × tarif × bulan", "32.000.000 × 1,01% = 323.200 per bulan", "323.200 × 3 = Rp969.600"],
          penjelasan: "Rp32.000.000 × 1,01% × 3 = Rp969.600." },
        { no: 4, pertanyaan: "Berapa denda atas keterlambatan SPT Masa PPh 21/26 (Rp)?", tipe: "angka", jawaban: 100000, toleransi: 0,
          petunjuk: ["SPT Masa selain PPN", "Pasal 7 ayat (1) UU KUP", "Rp100.000"],
          penjelasan: "SPT Masa selain PPN yang terlambat dikenai denda Rp100.000." },
        { no: 5, pertanyaan: "Berapa bunga atas pembetulan SPT Masa PPh Unifikasi yang kurang setor Rp4.500.000 (Rp)?", tipe: "angka", jawaban: 136350, toleransi: 0,
          petunjuk: ["Pasal 8 ayat (2a): sejak jatuh tempo setor (15 Oktober 2026) sampai tanggal bayar", "15 Okt 2026 → 5 Jan 2027 = 2 bulan 21 hari = 3 bulan", "4.500.000 × 1,01% × 3 = Rp136.350"],
          penjelasan: "Pembetulan yang menyebabkan kurang bayar dikenai bunga uplift 5% sejak jatuh tempo pembayaran sampai tanggal pembayaran; SPT semula tepat waktu sehingga tanpa denda." },
        { no: 6, pertanyaan: "Berapa total sanksi yang ditagih dengan STP (Rp)?", tipe: "angka", jawaban: 1205950, toleransi: 0,
          petunjuk: ["Jumlahkan bunga PPh 21, denda SPT, dan bunga pembetulan", "969.600 + 100.000 + 136.350", "Rp1.205.950"],
          penjelasan: "Total sanksi = Rp969.600 + Rp100.000 + Rp136.350 = Rp1.205.950." }
      ],
      kesimpulan: "Pisahkan peristiwa: terlambat setor (bunga Pasal 9 ayat (2a)), terlambat lapor (denda Pasal 7), dan pembetulan kurang bayar (bunga Pasal 8 ayat (2a)). Ketiganya uplift/denda berbeda, tetapi tarif bunga dikunci pada bulan dimulainya sanksi (Oktober 2026: 1,01%) dan bulan selalu dibulatkan ke atas.",
      kalkulatorRef: "sanksi-bunga"
    },
    {
      id: "K-A2-02", judul: "Dari SKPKB ke keberatan dan banding — PT Prima Logistik", topik: "A2.7", estimasiMenit: 20,
      narasi: "PT Prima Logistik (tahun buku kalender) menerima SKPKB PPh Badan Tahun Pajak 2024 yang diterbitkan dan dikirim 14 Oktober 2026 dengan pokok kurang bayar Rp500.000.000 dan bunga Pasal 13 ayat (2). Anggap tarif bunga per bulan yang berlaku untuk SKPKB ini 1,84%. Dalam PAHP, WP menyetujui koreksi yang menghasilkan pokok Rp120.000.000 dan menolak sisanya. WP melunasi pokok yang disetujui itu, lalu mengajukan keberatan. Dasar denda keberatan/banding dihitung dari pokok pajak. Analisis dua skenario: (a) keberatan ditolak dan WP tidak banding; (b) WP banding dan Putusan Banding menetapkan pokok Rp380.000.000.",
      data: [["Pokok SKPKB", "Rp500.000.000"], ["Akhir Tahun Pajak", "31 Desember 2024"], ["SKPKB diterbitkan dan dikirim", "14 Oktober 2026"], ["Tarif bunga Ps. 13(2) (anggap)", "1,84% per bulan"], ["Pokok disetujui dalam PAHP dan dilunasi", "Rp120.000.000"], ["Pokok menurut Putusan Banding (skenario b)", "Rp380.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa bulan bunga Pasal 13 ayat (2) dalam SKPKB?", tipe: "angka", jawaban: 22, toleransi: 0,
          petunjuk: ["Hitung dari akhir Tahun Pajak sampai SKPKB terbit", "31 Des 2024 → 30 Sep 2026 = 21 bulan, sisa 14 hari", "22 bulan (masih di bawah batas 24)"],
          penjelasan: "Bunga Pasal 13 ayat (2) dihitung sejak berakhirnya Tahun Pajak sampai diterbitkannya SKPKB, paling lama 24 bulan." },
        { no: 2, pertanyaan: "Berapa bunga Pasal 13 ayat (2) dalam SKPKB (Rp)?", tipe: "angka", jawaban: 202400000, toleransi: 0,
          petunjuk: ["500.000.000 × 1,84% = 9.200.000 per bulan", "Kalikan dengan jumlah bulan langkah 1", "9.200.000 × 22 = Rp202.400.000"],
          penjelasan: "Rp500.000.000 × 1,84% × 22 = Rp202.400.000; SKPKB seluruhnya Rp702.400.000." },
        { no: 3, pertanyaan: "Batas akhir pengajuan keberatan adalah ...", tipe: "pilihan",
          opsi: { A: "14 Januari 2027", B: "14 November 2026", C: "14 April 2027", D: "31 Januari 2027" }, jawaban: "A",
          petunjuk: ["Keberatan paling lama 3 bulan", "Dihitung sejak tanggal SKP dikirim", "14 Oktober 2026 + 3 bulan = 14 Januari 2027"],
          penjelasan: "Pasal 25 ayat (3) UU KUP: 3 bulan sejak tanggal dikirim SKP." },
        { no: 4, pertanyaan: "Berapa pokok yang paling sedikit wajib dilunasi sebelum keberatan diajukan (Rp)?", tipe: "angka", jawaban: 120000000, toleransi: 0,
          petunjuk: ["Lihat Pasal 25 ayat (3a) UU KUP", "Yang wajib dilunasi adalah jumlah yang disetujui dalam PAHP", "Rp120.000.000"],
          penjelasan: "WP wajib melunasi paling sedikit jumlah yang disetujui dalam PAHP; sisanya tertangguh sampai 1 bulan sejak SK Keberatan." },
        { no: 5, pertanyaan: "Skenario (a): keberatan ditolak dan WP tidak banding. Berapa denda Pasal 25 ayat (9) (Rp)?", tipe: "angka", jawaban: 114000000, toleransi: 0,
          petunjuk: ["Denda 30%", "Dasar = pajak menurut SK Keberatan − yang dibayar sebelum keberatan = 500 jt − 120 jt", "30% × 380.000.000 = Rp114.000.000"],
          penjelasan: "30% × (Rp500.000.000 − Rp120.000.000) = Rp114.000.000." },
        { no: 6, pertanyaan: "Skenario (b): Putusan Banding menetapkan pokok Rp380.000.000. Berapa denda Pasal 27 ayat (5d) (Rp)?", tipe: "angka", jawaban: 156000000, toleransi: 0,
          petunjuk: ["Denda 60%", "Dasar = pajak menurut Putusan Banding − yang dibayar sebelum keberatan = 380 jt − 120 jt", "60% × 260.000.000 = Rp156.000.000"],
          penjelasan: "60% × (Rp380.000.000 − Rp120.000.000) = Rp156.000.000." },
        { no: 7, pertanyaan: "Dalam skenario (b), bagaimana dengan denda 30% Pasal 25 ayat (9)?", tipe: "pilihan",
          opsi: { A: "Tetap dikenakan di samping denda 60%", B: "Tidak dikenakan karena WP mengajukan banding", C: "Dikenakan bila Putusan Banding mengabulkan sebagian", D: "Diganti denda 100%" }, jawaban: "B",
          petunjuk: ["Baca Pasal 25 ayat (10)", "Denda keberatan gugur bila WP banding", "Jawaban: B"],
          penjelasan: "Pasal 25 ayat (10): denda 30% tidak dikenakan dalam hal WP mengajukan banding; yang berlaku denda 60% atas Putusan Banding." }
      ],
      kesimpulan: "Hitung SKPKB (bunga uplift 15%, 22 bulan), penuhi syarat keberatan (3 bulan, lunasi jumlah PAHP), lalu bandingkan risiko: tanpa banding denda 30% × (SK Keberatan − bayar awal), dengan banding denda 60% × (Putusan Banding − bayar awal) dan denda 30% gugur.",
      kalkulatorRef: "denda-keberatan"
    },
    {
      id: "K-A2-03", judul: "Linimasa penagihan dengan Surat Paksa — CV Bintang Samudra", topik: "A2.10", estimasiMenit: 15,
      narasi: "CV Bintang Samudra menerima STP PPN Rp240.000.000 yang terbit 2 Oktober 2026 dengan jatuh tempo pelunasan Senin, 2 November 2026. Utang tidak dibayar dan tidak ada permohonan angsuran/penundaan. KPP melaksanakan setiap tindakan penagihan pada tanggal paling cepat yang diperbolehkan: Surat Teguran disampaikan pada tanggal paling cepat, Surat Paksa diberitahukan pukul 09.00 pada tanggal paling cepat. Direktur CV diketahui hendak menjual aset pribadi yang terkait usaha sehingga itikad baiknya diragukan. Susun linimasa penagihan.",
      data: [["Utang pajak", "Rp240.000.000"], ["STP terbit", "2 Oktober 2026"], ["Jatuh tempo", "2 November 2026"], ["Surat Teguran", "lewat 7 hari sejak jatuh tempo"], ["Surat Paksa", "lewat 21 hari sejak Surat Teguran"], ["SPMP", "lewat 2 × 24 jam sejak Surat Paksa"]],
      langkah: [
        { no: 1, pertanyaan: "Tanggal paling cepat Surat Teguran adalah ...", tipe: "pilihan",
          opsi: { A: "3 November 2026", B: "10 November 2026", C: "23 November 2026", D: "2 Desember 2026" }, jawaban: "B",
          petunjuk: ["Teguran setelah lewat 7 hari sejak jatuh tempo", "2 November + 7 hari = 9 November", "Paling cepat 10 November 2026"],
          penjelasan: "PMK 61/2023: Surat Teguran diterbitkan setelah lewat 7 hari sejak jatuh tempo." },
        { no: 2, pertanyaan: "Bila Surat Teguran disampaikan 10 November 2026, Surat Paksa paling cepat diberitahukan pada ...", tipe: "pilihan",
          opsi: { A: "17 November 2026", B: "24 November 2026", C: "2 Desember 2026", D: "10 Desember 2026" }, jawaban: "C",
          petunjuk: ["Surat Paksa setelah lewat 21 hari sejak Surat Teguran", "10 November + 21 hari = 1 Desember", "Paling cepat 2 Desember 2026"],
          penjelasan: "Pasal 8 UU PPSP: Surat Paksa diterbitkan setelah lewat 21 hari sejak Surat Teguran disampaikan." },
        { no: 3, pertanyaan: "Surat Paksa diberitahukan 2 Desember 2026 pukul 09.00. SPMP paling cepat dilaksanakan ...", tipe: "pilihan",
          opsi: { A: "3 Desember 2026 pukul 09.00", B: "4 Desember 2026 setelah pukul 09.00", C: "16 Desember 2026", D: "23 Desember 2026" }, jawaban: "B",
          petunjuk: ["Jeda penyitaan dihitung dalam jam", "2 × 24 jam = 48 jam", "4 Desember 2026 setelah pukul 09.00"],
          penjelasan: "Pasal 12 UU PPSP: SPMP diterbitkan bila utang tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan." },
        { no: 4, pertanyaan: "Paling cepat berapa hari setelah Surat Paksa diberitahukan penyanderaan dapat dilakukan?", tipe: "angka", jawaban: 14, toleransi: 0,
          petunjuk: ["Penyanderaan bukan tindakan pertama setelah Surat Paksa", "Ada jeda khusus dalam PMK 61/2023", "14 hari"],
          penjelasan: "Penyanderaan paling cepat 14 hari setelah Surat Paksa diberitahukan, dengan izin tertulis Menteri Keuangan." },
        { no: 5, pertanyaan: "Syarat penyanderaan yang benar untuk direktur CV Bintang Samudra adalah ...", tipe: "pilihan",
          opsi: { A: "Cukup utang ≥ Rp100 juta", B: "Cukup itikad baik diragukan", C: "Utang ≥ Rp100 juta dan itikad baik diragukan, keduanya terpenuhi", D: "Utang ≥ Rp500 juta" }, jawaban: "C",
          petunjuk: ["Syaratnya kumulatif", "Utang Rp240 juta ≥ Rp100 juta; itikad diragukan", "Jawaban: C"],
          penjelasan: "Pasal 33 UU PPSP: penyanderaan hanya terhadap Penanggung Pajak dengan utang paling sedikit Rp100 juta dan diragukan itikad baiknya; lamanya 6 bulan dan dapat diperpanjang 6 bulan." },
        { no: 6, pertanyaan: "Dengan Surat Paksa diberitahukan 2 Desember 2026, daluwarsa penagihan menjadi ...", tipe: "pilihan",
          opsi: { A: "2 Oktober 2031", B: "2 Desember 2031", C: "31 Desember 2031", D: "2 Oktober 2036" }, jawaban: "B",
          petunjuk: ["Daluwarsa penagihan 5 tahun", "Surat Paksa menangguhkan daluwarsa", "Dihitung ulang sejak Surat Paksa: 2 Desember 2031"],
          penjelasan: "Pasal 22 UU KUP: daluwarsa penagihan tertangguh bila Surat Paksa diterbitkan dan dihitung sejak tanggal penyampaian Surat Paksa." }
      ],
      kesimpulan: "Linimasa: jatuh tempo 2 Nov → teguran 10 Nov → Surat Paksa 2 Des → SPMP 4 Des (setelah 48 jam) → penyanderaan paling cepat 14 hari setelah Surat Paksa bila syarat kumulatif terpenuhi; daluwarsa penagihan bergeser ke 2 Desember 2031.",
      kalkulatorRef: "ppsp"
    },
    {
      id: "K-A2-04", judul: "Restitusi PPh Badan, kompensasi utang, dan imbalan bunga — PT Hijau Raya Agrindo", topik: "A2.9", estimasiMenit: 18,
      narasi: "PT Hijau Raya Agrindo (tahun buku kalender, bukan WP kriteria tertentu, lebih bayar di atas ambang Pasal 17D) menyampaikan SPT Tahunan PPh Badan 2024 tepat waktu dengan lebih bayar Rp1.450.000.000 dan memohon restitusi; permohonan diterima lengkap Senin, 28 April 2025. Setelah pemeriksaan, SKPLB diterbitkan Kamis, 23 April 2026: pemeriksa tidak mengakui kredit PPh Pasal 22 Rp270.000.000 karena bukti pungut tidak ada, selebihnya diterima. Saat SKPLB terbit, perusahaan masih memiliki STP PPh Pasal 25 yang telah jatuh tempo dan belum dibayar sebesar Rp41.616.000 (pokok Rp40.000.000 dan bunga Rp1.616.000), tanpa utang pajak lain. Pemindahbukuan untuk melunasi STP dilakukan tepat waktu, tetapi sisa kelebihan baru ditransfer ke rekening perusahaan pada Selasa, 14 Juli 2026. Anggap tarif imbalan bunga (uplift 0%) yang berlaku pada tanggal dimulainya penghitungan 0,60% per bulan. Hitung hak perusahaan secara bertahap.",
      data: [["Lebih bayar menurut SPT", "Rp1.450.000.000"], ["Permohonan diterima lengkap", "Senin, 28 April 2025"], ["Kredit PPh 22 tidak diakui", "Rp270.000.000"], ["SKPLB terbit", "Kamis, 23 April 2026"], ["STP PPh 25 belum dibayar", "Rp41.616.000"], ["Tanggal transfer pengembalian", "Selasa, 14 Juli 2026"], ["Tarif imbalan bunga (anggap)", "0,60% per bulan"]],
      langkah: [
        { no: 1, pertanyaan: "Paling lambat kapan DJP harus menerbitkan surat ketetapan pajak atas permohonan restitusi ini?", tipe: "pilihan",
          opsi: { A: "28 April 2026", B: "28 Mei 2026", C: "30 April 2026", D: "28 Oktober 2025" }, jawaban: "A",
          petunjuk: ["Lihat Pasal 17B ayat (1) UU KUP", "Jangka waktunya 12 bulan sejak permohonan diterima lengkap", "28 April 2025 + 12 bulan = 28 April 2026"],
          penjelasan: "SKP atas permohonan restitusi wajib terbit paling lama 12 bulan sejak permohonan diterima lengkap; SKPLB 23 April 2026 masih tepat waktu." },
        { no: 2, pertanyaan: "Berapa jumlah kelebihan pembayaran menurut SKPLB (Rp)?", tipe: "angka", jawaban: 1180000000, toleransi: 0,
          petunjuk: ["Mulai dari lebih bayar menurut SPT", "Kurangi kredit PPh 22 yang tidak diakui", "1.450.000.000 − 270.000.000 = Rp1.180.000.000"],
          penjelasan: "Koreksi kredit pajak mengurangi lebih bayar menjadi Rp1.180.000.000; selisih Rp270.000.000 tidak menimbulkan SKPKB terpisah." },
        { no: 3, pertanyaan: "Berapa jumlah yang dikembalikan (ditransfer) setelah diperhitungkan dengan utang pajak (Rp)?", tipe: "angka", jawaban: 1138384000, toleransi: 0,
          petunjuk: ["Kelebihan lebih dahulu diperhitungkan dengan utang pajak", "Utang = STP Rp41.616.000 (pokok dan bunga)", "1.180.000.000 − 41.616.000 = Rp1.138.384.000"],
          penjelasan: "Pasal 11 ayat (1) UU KUP: kelebihan dikembalikan setelah diperhitungkan dengan utang pajak, termasuk sanksinya." },
        { no: 4, pertanyaan: "Paling lambat kapan kelebihan pembayaran harus dikembalikan?", tipe: "pilihan",
          opsi: { A: "23 April 2026", B: "23 Mei 2026", C: "23 Juni 2026", D: "28 April 2026" }, jawaban: "B",
          petunjuk: ["Lihat Pasal 11 ayat (2) UU KUP", "Jangka waktunya 1 bulan sejak SKPLB diterbitkan", "23 April 2026 + 1 bulan = 23 Mei 2026"],
          penjelasan: "Pengembalian paling lama 1 bulan sejak SKPLB diterbitkan; transfer 14 Juli 2026 terlambat." },
        { no: 5, pertanyaan: "Berapa bulan imbalan bunga Pasal 11 ayat (3)?", tipe: "angka", jawaban: 2, toleransi: 0,
          petunjuk: ["Hitung sejak batas 1 bulan berakhir sampai pengembalian", "23 Mei → 23 Juni = 1 bulan, sisa 21 hari", "Bagian bulan dihitung penuh: 2 bulan"],
          penjelasan: "Imbalan bunga dihitung sejak berakhirnya jangka 1 bulan sampai saat pengembalian, bagian bulan dihitung penuh, paling lama 24 bulan." },
        { no: 6, pertanyaan: "Faktor uplift yang dipakai untuk imbalan bunga adalah ...", tipe: "pilihan",
          opsi: { A: "0%", B: "5%", C: "10%", D: "15%" }, jawaban: "A",
          petunjuk: ["Imbalan bunga diberikan pemerintah, bukan sanksi", "KMK tarif bunga mencantumkan imbalan bunga bersama Pasal 19", "Uplift 0%"],
          penjelasan: "Tarif imbalan bunga = suku bunga acuan : 12 tanpa uplift (Oktober 2026 sebesar 0,59%)." },
        { no: 7, pertanyaan: "Berapa imbalan bunga yang diterima perusahaan (Rp)?", tipe: "angka", jawaban: 13660608, toleransi: 1,
          petunjuk: ["Dasarnya jumlah yang terlambat dikembalikan", "1.138.384.000 × 0,60% = 6.830.304 per bulan", "6.830.304 × 2 = Rp13.660.608"],
          penjelasan: "Imbalan bunga = Rp1.138.384.000 × 0,60% × 2 = Rp13.660.608; bagian yang dipindahbukukan ke STP tepat waktu tidak diberi imbalan bunga." }
      ],
      kesimpulan: "SKPLB terbit dalam 12 bulan (Pasal 17B) sebesar Rp1.180.000.000, diperhitungkan dulu dengan STP Rp41.616.000, lalu sisanya Rp1.138.384.000 wajib dikembalikan paling lama 23 Mei 2026. Karena baru ditransfer 14 Juli 2026, perusahaan berhak atas imbalan bunga Pasal 11 ayat (3) uplift 0% selama 2 bulan, yaitu Rp13.660.608.",
      kalkulatorRef: "sanksi-bunga"
    },
    {
      id: "K-A2-05", judul: "Pemeriksaan lengkap, pengungkapan Pasal 8 ayat (4), dan SKPKB — PT Nusa Kreasi Mandiri", topik: "A2.5", estimasiMenit: 20,
      narasi: "PT Nusa Kreasi Mandiri (tahun buku kalender, bukan anggota grup usaha, tanpa indikasi transfer pricing) menyampaikan SPT Tahunan PPh Badan 2024 tepat waktu dengan status nihil. SP2 pemeriksaan lengkap atas SPT tersebut disampaikan Senin, 2 Februari 2026. Pada Senin, 18 Mei 2026, sebelum SPHP disampaikan, perusahaan menyampaikan laporan tersendiri pengungkapan ketidakbenaran pengisian SPT atas penghasilan sewa alat yang tidak dilaporkan, dengan PPh kurang dibayar Rp60.000.000, dan melunasi kekurangan itu beserta bunganya pada hari yang sama. SPHP disampaikan dan diterima Kamis, 25 Juni 2026 dengan koreksi tambahan atas biaya yang tidak dapat dikurangkan, sehingga PPh kurang dibayar bertambah Rp90.000.000 di luar jumlah yang telah diungkapkan. Perusahaan tidak menyetujui koreksi tambahan itu, dan SKPKB atas kekurangan Rp90.000.000 diterbitkan serta dikirim Senin, 3 Agustus 2026. Anggap tarif bunga yang berlaku pada tanggal dimulainya penghitungan masing-masing sanksi: uplift 10% = 1,45% per bulan; uplift 15% = 1,87% per bulan. Anggap tidak ada hari libur nasional.",
      data: [["SP2 pemeriksaan lengkap", "Senin, 2 Februari 2026"], ["Akhir Tahun Pajak 2024", "31 Desember 2024"], ["Pengungkapan dan pelunasan", "Senin, 18 Mei 2026; pokok Rp60.000.000"], ["SPHP diterima", "Kamis, 25 Juni 2026"], ["Koreksi tambahan", "PPh kurang dibayar Rp90.000.000"], ["SKPKB diterbitkan dan dikirim", "Senin, 3 Agustus 2026"], ["Tarif (anggap)", "uplift 10% = 1,45%; uplift 15% = 1,87%"]],
      langkah: [
        { no: 1, pertanyaan: "Paling lambat kapan SPHP harus disampaikan?", tipe: "pilihan",
          opsi: { A: "2 Mei 2026", B: "2 Juli 2026", C: "2 Agustus 2026", D: "2 November 2026" }, jawaban: "B",
          petunjuk: ["Pemeriksaan lengkap tanpa perpanjangan", "Jangka waktu pengujian 5 bulan sejak SP2", "2 Februari 2026 + 5 bulan = 2 Juli 2026"],
          penjelasan: "PMK 15/2025: pemeriksaan lengkap 5 bulan sejak SP2 sampai SPHP; perpanjangan 4 bulan hanya untuk grup usaha/indikasi transfer pricing." },
        { no: 2, pertanyaan: "Pengungkapan ketidakbenaran pengisian SPT tanggal 18 Mei 2026 ...", tipe: "pilihan",
          opsi: { A: "Sah karena disampaikan sebelum SPHP disampaikan", B: "Tidak sah karena pemeriksaan sudah dimulai", C: "Sah hanya bila disampaikan sebelum SP2", D: "Sah selama SKP belum terbit" }, jawaban: "A",
          petunjuk: ["Baca Pasal 8 ayat (4) UU KUP setelah UU HPP", "Batasnya dikaitkan dengan SPHP", "Jawaban: A"],
          penjelasan: "Pengungkapan dapat disampaikan walaupun pemeriksaan sudah dimulai, sepanjang SPHP belum disampaikan; pemeriksaan tetap dilanjutkan." },
        { no: 3, pertanyaan: "Berapa bulan bunga Pasal 8 ayat (5) atas pengungkapan tersebut?", tipe: "angka", jawaban: 17, toleransi: 0,
          petunjuk: ["Bunga dihitung sejak berakhirnya Tahun Pajak sampai tanggal pembayaran", "31 Desember 2024 → 30 April 2026 = 16 bulan, sisa 18 hari", "Bagian bulan dihitung penuh: 17 bulan"],
          penjelasan: "Bunga Pasal 8 ayat (5) dihitung sejak berakhirnya Tahun Pajak (31 Desember 2024) sampai tanggal pembayaran 18 Mei 2026: 16 bulan 18 hari menjadi 17 bulan." },
        { no: 4, pertanyaan: "Berapa bunga Pasal 8 ayat (5) (Rp)?", tipe: "angka", jawaban: 14790000, toleransi: 0,
          petunjuk: ["Uplift 10% → tarif 1,45% (anggap)", "60.000.000 × 1,45% = 870.000 per bulan", "870.000 × 17 = Rp14.790.000"],
          penjelasan: "Rp60.000.000 × 1,45% × 17 = Rp14.790.000, dilunasi bersama kekurangan pajak sebelum laporan pengungkapan disampaikan." },
        { no: 5, pertanyaan: "Paling lambat kapan perusahaan menyampaikan tanggapan tertulis atas SPHP?", tipe: "pilihan",
          opsi: { A: "Selasa, 30 Juni 2026", B: "Kamis, 2 Juli 2026", C: "Senin, 6 Juli 2026", D: "Sabtu, 25 Juli 2026" }, jawaban: "B",
          petunjuk: ["Tanggapan SPHP 5 hari kerja sejak diterima (PMK 15/2025)", "Hari kerja: 26 Juni, 29 Juni, 30 Juni, 1 Juli, 2 Juli", "Kamis, 2 Juli 2026"],
          penjelasan: "Lima hari kerja setelah Kamis, 25 Juni 2026, dengan melewati Sabtu–Minggu, jatuh pada Kamis, 2 Juli 2026; 6 Juli adalah hitungan 7 hari kerja aturan lama." },
        { no: 6, pertanyaan: "Berapa bulan bunga Pasal 13 ayat (2) dalam SKPKB?", tipe: "angka", jawaban: 20, toleransi: 0,
          petunjuk: ["Bunga SKPKB dihitung sejak akhir Tahun Pajak sampai SKPKB terbit", "31 Desember 2024 → 31 Juli 2026 = 19 bulan, sisa 3 hari", "Bagian bulan penuh: 20 bulan (di bawah batas 24)"],
          penjelasan: "Pasal 13 ayat (2): sejak berakhirnya Tahun Pajak sampai diterbitkannya SKPKB, paling lama 24 bulan." },
        { no: 7, pertanyaan: "Berapa bunga Pasal 13 ayat (2) dalam SKPKB (Rp)?", tipe: "angka", jawaban: 33660000, toleransi: 0,
          petunjuk: ["Uplift 15% → tarif 1,87% (anggap)", "90.000.000 × 1,87% = 1.683.000 per bulan", "1.683.000 × 20 = Rp33.660.000"],
          penjelasan: "Rp90.000.000 × 1,87% × 20 = Rp33.660.000; jumlah SKPKB Rp123.660.000." },
        { no: 8, pertanyaan: "Paling lambat kapan keberatan atas SKPKB diajukan?", tipe: "pilihan",
          opsi: { A: "3 September 2026", B: "3 Oktober 2026", C: "3 November 2026", D: "3 Agustus 2027" }, jawaban: "C",
          petunjuk: ["Keberatan diajukan dalam 3 bulan", "Dihitung sejak tanggal SKP dikirim", "3 Agustus 2026 + 3 bulan = 3 November 2026"],
          penjelasan: "Pasal 25 ayat (3) UU KUP; karena tidak ada jumlah yang disetujui dalam PAHP atas koreksi tambahan, tidak ada pelunasan minimal sebelum keberatan." }
      ],
      kesimpulan: "Pengungkapan sebelum SPHP membuat kekurangan Rp60.000.000 hanya dikenai bunga uplift 10% selama 17 bulan (Rp14.790.000) yang dilunasi bersama pengungkapan, sementara koreksi yang tidak diungkapkan (Rp90.000.000) ditetapkan dengan SKPKB berbunga uplift 15% selama 20 bulan (Rp33.660.000). Linimasa PMK 15/2025 (SPHP 5 bulan, tanggapan 5 hari kerja) dan tenggat keberatan 3 bulan melengkapi kasus ini.",
      kalkulatorRef: "sanksi-bunga"
    }
  ],
  tips: [
    { teks: "Tentukan dulu tanggal dimulainya sanksi, baru pilih tarif: tarif KMK dikunci pada bulan itu, bukan bulan pembayaran.", tagSebab: "salah-hitung" },
    { teks: "Bulan sanksi selalu dibulatkan ke atas lalu dibatasi 24 bulan — cek keduanya sebelum mengalikan.", tagSebab: "salah-hitung" },
    { teks: "Petakan dokumen ke upaya hukum: SKP → keberatan; SK Keberatan → banding; tindakan penagihan → gugatan 14 hari; sanksi STP karena khilaf → Pasal 36.", tagSebab: "salah-klasifikasi" },
    { teks: "Angka pra-2025 adalah pengecoh favorit: tanggal 10, pemeriksaan kantor 4/lapangan 6 bulan, SPHP 7 hari, denda 50%/100%, kenaikan 100%, bunga 2%.", tagSebab: "angka-usang" },
    { teks: "Baca titik awal tenggat dua kali: keberatan sejak SKP dikirim, banding sejak SK Keberatan diterima, Surat Paksa sejak Surat Teguran disampaikan.", tagSebab: "salah-baca" },
    { teks: "Denda keberatan/banding: kurangkan pajak yang dibayar sebelum keberatan, dan ingat denda 30% gugur bila WP banding.", tagSebab: "lupa-pasal" }
  ]
});
