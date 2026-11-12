/* Modul B6 — PPh Badan dan SPT PPh Badan (badan dalam negeri). Status ketentuan per 27 Oktober 2026.
   Soal adalah rekonstruksi dari kisi-kisi dan gaya UKP 26–29 Oktober 2026 (kasus praktik panjang), bukan soal asli ujian.
   Angka rujukan: docs/research/02b bagian A dan E; docs/research/02a bagian A, B.6, C, D. */
UKP.register({
  meta: {
    kode: "B6",
    slug: "pph-badan",
    nama: "PPh Badan dan SPT PPh Badan",
    diujiDi: ["B", "C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { B: 0.22, C: 0.15 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu menyusun rekonsiliasi fiskal badan dalam negeri dari laba komersial sampai PPh Pasal 29: memisahkan penghasilan final dan bukan objek, menerapkan koreksi Pasal 6, 9, dan 18 (natura, promosi, sumbangan, piutang, DER 4:1, kewajaran transaksi afiliasi), menghitung penyusutan/amortisasi fiskal, kompensasi kerugian, tarif 22%/19%/Pasal 31E serta rezim PPh final 0,5% pasca-PP 20/2026, mengkreditkan PPh 22, 23, 24 (batas per jenis penghasilan untuk tiap negara), dan 25, menghitung angsuran PPh 25 badan, serta memetakan isian SPT 1771 beserta lampiran, tenggat, dan sanksinya di era Coretax.",
    dasarHukumUtama: [
      "UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 2, 2A, 3, 4, 6, 9, 11, 11A, 17, 18, 24, 25, 28, 28A, 29, 31E",
      "PP 55/2022 s.t.d.d. PP 20/2026",
      "PMK 72/2023 (penyusutan/amortisasi)",
      "PMK 169/PMK.010/2015 (DER)",
      "PMK 192/PMK.03/2018 (PPh 24)",
      "PMK 81/2024 (menggantikan PMK 215/PMK.03/2018 sejak 1 Januari 2025); PER-11/PJ/2025 (menggantikan KEP-537/PJ/2000 sejak 22 Mei 2025) (PPh 25)",
      "PMK 172/2023 (transfer pricing)",
      "PP 78/2019; PMK 130/2020 s.t.d.d. PMK 69/2024; PMK 128/2019; PMK 81/2024 (litbang; menggantikan PMK 153/2020) (fasilitas)",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) Pasal 3, 7, 8, 9",
      "PMK 81/2024; PER-11/PJ/2025 (Coretax, SPT 1771)"
    ],
    perubahanTerbaru: [
      {
        sebelum: "PPh final 0,5% PP 55/2022 dapat dipakai PT (3 tahun), CV/firma/BUMDes/koperasi/perseroan perorangan (4 tahun)",
        sesudah: "Penerima baru hanya orang pribadi, perseroan perorangan yang didirikan satu orang, dan koperasi (4 tahun pajak; koperasi yang terdaftar sebelum PP 20/2026 dan jangkanya berakhir TP 2024–2029: sampai Tahun Pajak 2029); pekerjaan bebas tetap dikecualikan (Pasal 56 ayat (3) huruf a PP 55/2022); CV/firma/PT yang terdaftar sebelum 22 April 2026 tetap memakai sampai jangka waktu lamanya habis",
        dasar: "PP 20/2026 (perubahan PP 55/2022 Pasal 56–59)",
        berlakuSejak: "2026-04-22"
      },
      {
        sebelum: "Batas setor pajak masa berbeda-beda (PPh 21/23/26 yang dipotong tanggal 10; PPh 25 tanggal 15) dan administrasi lewat DJP Online/e-Bupot (PMK 242/2014)",
        sesudah: "Seluruh pajak masa, termasuk PPh 25, disetor paling lambat tanggal 15 bulan berikutnya dan seluruh hak serta kewajiban dijalankan lewat Coretax; pembayaran PPh 25 yang tervalidasi dianggap telah menyampaikan SPT Masa",
        dasar: "PMK 81/2024 Pasal 94 dan ketentuan SPT Masa",
        berlakuSejak: "2025-01-01"
      },
      {
        sebelum: "SPT Tahunan 1771 disampaikan lewat e-Form/e-SPT dengan lampiran I–VI dan lampiran khusus 1A–8A",
        sesudah: "SPT Tahunan PPh Badan disampaikan lewat Coretax (format PER-11/PJ/2025) dengan pra-isi dari bukti potong elektronik; Tahun Pajak 2025 adalah SPT Tahunan badan pertama di Coretax",
        dasar: "PER-11/PJ/2025",
        berlakuSejak: "2025-05-22"
      },
      {
        sebelum: "Pembayaran utang pajak dialokasikan proporsional ke pokok dan sanksi; tidak ada program pengurangan sanksi bertahap",
        sesudah: "Pembayaran dialokasikan ke pokok lebih dulu; fasilitas pengurangan/penghapusan sanksi administratif (penghapusan 100% s.d. 31 Desember 2026, mengecil sampai 30 Juni 2027) dengan permohonan",
        dasar: "PMK 71/2026 (mengubah PMK 118/2024); KEP-239/PJ/2026",
        berlakuSejak: "2026-10-02"
      },
      {
        sebelum: "Pembetulan SPT di Coretax dihitung tanpa memperhitungkan pembayaran/pengembalian yang terjadi sebelum pembetulan",
        sesudah: "Pembetulan SPT memperhitungkan pembayaran dan pengembalian yang terjadi sebelum pembetulan disampaikan",
        dasar: "PER-12/PJ/2026",
        berlakuSejak: "2026-10-01"
      },
      {
        sebelum: "Fasilitas tax holiday menurunkan beban pajak grup multinasional tanpa batas tarif efektif minimum",
        sesudah: "Pajak minimum global 15%: IIR dan DMTT berlaku Tahun Pajak 2025, UTPR Tahun Pajak 2026, sehingga manfaat tax holiday bagi grup beromzet konsolidasi besar dapat tergerus top-up tax",
        dasar: "PMK 136/2024; PER-6/PJ/2026",
        berlakuSejak: "2025-01-01"
      },
      {
        sebelum: "Bangunan permanen wajib disusutkan 20 tahun (garis lurus 5%)",
        sesudah: "Bangunan permanen boleh disusutkan 20 tahun atau sesuai masa manfaat sebenarnya menurut pembukuan (taat asas); pemberitahuan bangunan lama paling lambat 30 April 2024",
        dasar: "Pasal 11 ayat (6a) UU PPh (UU HPP); PMK 72/2023",
        berlakuSejak: "2023-07-17"
      }
    ],
    lembarRingkas: [
      { label: "Tarif PPh badan umum", nilai: "22% × PKP (PKP dibulatkan ke bawah ribuan)", dasar: "Pasal 17 ayat (1) huruf b UU PPh (UU HPP)", berlakuSejak: "2022-01-01" },
      { label: "Tarif perseroan terbuka", nilai: "19% bila ≥ 40% saham di BEI, ≥ 300 pihak masing-masing < 5%, ≥ 183 hari", dasar: "Pasal 17 ayat (2b) UU PPh; PP 55/2022", berlakuSejak: "2022-01-01" },
      { label: "Fasilitas Pasal 31E", nilai: "11% atas PKP × (Rp4,8 M ÷ peredaran bruto); peredaran bruto ≤ Rp50 M", dasar: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2009-01-01" },
      { label: "Peredaran bruto Pasal 31E", nilai: "usaha + luar usaha, termasuk final dan bukan objek; tanpa PPN", dasar: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
      { label: "PPh final 0,5% badan", nilai: "koperasi (4 tahun; koperasi terdaftar sebelum PP 20/2026 yang jangkanya berakhir TP 2024–2029: sampai TP 2029) dan perseroan perorangan; PT/CV lama sampai jangka habis (3/4 tahun); perseroan perorangan ahli jasa sejenis pekerjaan bebas yang sudah memakai PPh final PP 55/2022: sampai TP 2026", dasar: "PP 55/2022 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" },
      { label: "Dividen dalam negeri diterima badan dalam negeri", nilai: "bukan objek, tanpa syarat kepemilikan; tidak dipotong PPh 23", dasar: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
      { label: "Dividen luar negeri non-bursa", nilai: "bukan objek bila diinvestasikan ≥ 30% laba setelah pajak", dasar: "Pasal 4 ayat (3) huruf f angka 2 UU PPh", berlakuSejak: "2020-11-02" },
      { label: "PPh final sewa · deposito · pengalihan tanah/bangunan", nilai: "10% · 20% · 2,5% dari bruto", dasar: "PP 34/2017; PP 131/2000; PP 34/2016", berlakuSejak: "2018-01-02" },
      { label: "DER fiskal", nilai: "4 : 1 dari rata-rata saldo akhir bulan; biaya pinjaman × (4 × modal ÷ utang)", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01" },
      { label: "Sumbangan yang dapat dikurangkan", nilai: "≤ 5% neto fiskal tahun sebelumnya; tidak boleh menimbulkan rugi", dasar: "PP 93/2010 (berlaku sejak Tahun Pajak 2010, Pasal 10)", berlakuSejak: "2010-01-01" },
      { label: "Penyusutan Kelompok 1–4", nilai: "garis lurus 25/12,5/6,25/5%; saldo menurun 50/25/12,5/10%", dasar: "Pasal 11 ayat (6) UU PPh; PMK 72/2023", berlakuSejak: "2009-01-01" },
      { label: "Bangunan", nilai: "permanen 20 tahun atau masa manfaat sebenarnya; tidak permanen 10 tahun; garis lurus saja", dasar: "Pasal 11 ayat (6) dan (6a) UU PPh; PMK 72/2023", berlakuSejak: "2022-01-01" },
      { label: "Kompensasi kerugian", nilai: "5 tahun mulai tahun sesudah rugi; tax allowance s.d. 10 tahun", dasar: "Pasal 6 ayat (2) UU PPh; PP 78/2019", berlakuSejak: "2009-01-01" },
      { label: "Kredit PPh 24", nilai: "per jenis penghasilan untuk tiap negara: terkecil antara pajak LN (memperhatikan P3B) dan (penghasilan LN jenis itu ÷ PKP) × PPh terutang, paling tinggi PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" },
      { label: "Angsuran PPh 25 badan", nilai: "(PPh terutang − PPh 22, 23, 24) ÷ 12; bila SPT lalu memuat kompensasi kerugian, PPh dihitung atas neto tahun lalu dikurangi sisa rugi yang masih dapat dikompensasikan tahun berjalan (habis: neto penuh); mulai bulan SPT disampaikan, paling lambat bulan batas SPT", dasar: "Pasal 25 ayat (1)–(2) dan ayat (6) huruf a UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Pengurangan angsuran PPh 25", nilai: "proyeksi PPh terutang < 75% dasar angsuran", dasar: "PER-11/PJ/2025 Pasal 119 (menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22" },
      { label: "Batas setor pajak masa dan PPh 25", nilai: "tanggal 15 bulan berikutnya; bayar PPh 25 tervalidasi = lapor", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" },
      { label: "Hubungan istimewa", nilai: "kepemilikan ≥ 25% (berantai dikalikan); penguasaan, termasuk satu grup usaha; keluarga satu derajat", dasar: "Pasal 18 ayat (4) UU PPh; PP 55/2022 Pasal 33; PMK 172/2023 Pasal 2 ayat (5)", berlakuSejak: "2009-01-01" },
      { label: "Dokumentasi TP", nilai: "tersedia ≤ 4 bulan setelah akhir tahun pajak; ikhtisar dilampirkan SPT", dasar: "PMK 172/2023", berlakuSejak: "2023-12-29" },
      { label: "Batas SPT 1771", nilai: "4 bulan setelah akhir tahun pajak (30 April); perpanjangan ≤ 2 bulan", dasar: "Pasal 3 ayat (3) huruf c dan ayat (4) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Denda terlambat SPT Tahunan badan", nilai: "Rp1.000.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "PPh Pasal 29", nilai: "lunas sebelum SPT disampaikan", dasar: "Pasal 29 UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Bunga telat bayar/pembetulan (Oktober 2026)", nilai: "(acuan + 5%)/12 = 1,01% per bulan; maks 24 bulan", dasar: "Pasal 8 ayat (2), 9 ayat (2a)/(2b) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Bunga pengungkapan saat pemeriksaan (Oktober 2026)", nilai: "(acuan + 10%)/12 = 1,42% per bulan; sejak batas waktu penyampaian SPT Tahunan berakhir (SPT Masa: sejak jatuh tempo pembayaran) sampai tanggal pembayaran, maks 24 bulan", dasar: "Pasal 8 ayat (5) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Keputusan restitusi", nilai: "SKP ≤ 12 bulan; pengembalian ≤ 1 bulan setelah SKPLB", dasar: "Pasal 17B dan Pasal 11 UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Tax allowance", nilai: "30% investasi (5%/tahun × 6 tahun); dividen ke SPLN 10% atau tarif P3B lebih rendah; kompensasi rugi s.d. 10 tahun", dasar: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12" },
      { label: "Tax holiday", nilai: "100% (≥ Rp500 M) atau 50% (Rp100–<500 M); transisi 2 tahun 50%/25% ◐", dasar: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024", berlakuSejak: "2020-10-09" },
      { label: "Super deduction", nilai: "vokasi ≤ 200%; litbang ≤ 300%", dasar: "PMK 128/PMK.010/2019; PMK 81/2024 (litbang; menggantikan PMK 153/PMK.010/2020)", berlakuSejak: "2019-09-09" },
      { label: "Pajak minimum global", nilai: "15%; grup ≥ EUR 750 juta; IIR/DMTT 2025, UTPR 2026", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2025-01-01" },
      { label: "Branch profit tax BUT", nilai: "20% × (PKP − PPh badan), kecuali seluruhnya ditanamkan kembali di Indonesia, atau tarif P3B", dasar: "Pasal 26 ayat (4) UU PPh; Pasal 1 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01" }
    ]
  },
  topik: [
    {
      id: "B6.1",
      slug: "subjek-badan",
      judul: "Subjek pajak badan, BUT (ringkas), dan pengecualian",
      estimasiMenit: 10,
      jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Badan adalah sekumpulan orang dan/atau modal yang merupakan kesatuan, baik melakukan usaha maupun tidak: PT (termasuk perseroan perorangan), CV, firma, BUMN/BUMD, koperasi, dana pensiun, persekutuan, perkumpulan, yayasan, organisasi massa/sosial politik, lembaga, kontrak investasi kolektif, dan bentuk badan lainnya (Pasal 1 angka 3 UU KUP).",
        "Subjek pajak badan dalam negeri: badan yang didirikan atau bertempat kedudukan di Indonesia, kecuali unit tertentu badan pemerintah yang memenuhi empat kriteria kumulatif: dibentuk berdasarkan peraturan perundang-undangan, dibiayai APBN/APBD, penerimaannya dimasukkan dalam anggaran pemerintah pusat/daerah, dan pembukuannya diperiksa aparat pengawasan fungsional negara (Pasal 2 ayat (3) huruf b).",
        "BUMN dan BUMD dalam bentuk dan nama apa pun tetap subjek pajak badan, walaupun modalnya berasal dari negara.",
        "Kewajiban subjektif badan dalam negeri dimulai saat badan didirikan atau bertempat kedudukan di Indonesia dan berakhir saat dibubarkan atau tidak lagi bertempat kedudukan di Indonesia (Pasal 2A).",
        "BUT adalah subjek pajak luar negeri yang perlakuannya dipersamakan dengan subjek pajak badan; antara lain timbul karena pemberian jasa oleh pegawai/orang lain lebih dari 60 hari dalam 12 bulan. Laba BUT setelah PPh badan dikenai PPh Pasal 26 ayat (4) 20% (branch profit tax), kecuali seluruh laba setelah pajak itu ditanamkan kembali di Indonesia dalam bentuk yang ditentukan (Pasal 1 ayat (3) PMK 14/PMK.03/2011; penanaman kembali sebagian tidak mengurangi dasar), atau diatur lain dalam P3B — materi rinci di C9.",
        "Bukan subjek pajak (Pasal 3): kantor perwakilan negara asing, pejabat perwakilan diplomatik/konsulat berdasarkan asas timbal balik, serta organisasi internasional dan pejabatnya yang ditetapkan Menteri Keuangan sepanjang Indonesia menjadi anggota dan organisasi itu tidak menjalankan usaha atau memperoleh penghasilan dari Indonesia selain pemberian pinjaman kepada pemerintah dari iuran anggota."
      ],
      poinKunci: [
        {
          label: "Kriteria unit pemerintah dikecualikan",
          nilai: "4 kriteria kumulatif (dasar hukum, APBN/APBD, penerimaan masuk anggaran, diperiksa APIP)",
          dasar: "Pasal 2 ayat (3) huruf b UU PPh",
          berlakuSejak: "2009-01-01"
        },
        {
          label: "Mulai kewajiban subjektif badan DN",
          nilai: "saat didirikan/bertempat kedudukan di Indonesia",
          dasar: "Pasal 2A ayat (2) UU PPh (UU 10/1994)",
          berlakuSejak: "1995-01-01"
        },
        { label: "Time test BUT jasa", nilai: "> 60 hari dalam 12 bulan", dasar: "Pasal 2 ayat (5) huruf m UU PPh", berlakuSejak: "2001-01-01" },
        {
          label: "Branch profit tax",
          nilai: "20% × (PKP − PPh badan) BUT, kecuali seluruhnya ditanamkan kembali di Indonesia, atau tarif P3B",
          dasar: "Pasal 26 ayat (4) UU PPh; Pasal 1 ayat (3) PMK 14/PMK.03/2011",
          berlakuSejak: "2009-01-01"
        }
      ],
      dasarHukum: [
        { pasal: "Pasal 2 ayat (1) huruf b, ayat (3) huruf b, ayat (5) UU PPh", catatan: "subjek badan, pengecualian unit pemerintah, BUT" },
        { pasal: "Pasal 2A UU PPh", catatan: "awal dan akhir kewajiban subjektif" },
        { pasal: "Pasal 3 UU PPh", catatan: "yang tidak termasuk subjek pajak" },
        { pasal: "Pasal 1 angka 3 UU KUP", catatan: "definisi badan" }
      ],
      jebakan: [
        {
          teks: "Menganggap BUMD atau PDAM/Perumda bukan subjek karena modal dari pemda — keduanya tetap subjek pajak badan",
          tagSebab: "salah-klasifikasi"
        },
        { teks: "Mengira kewajiban subjektif baru dimulai saat NPWP terbit atau saat mulai beroperasi", tagSebab: "salah-baca" },
        { teks: "Lupa branch profit tax 20% sehingga beban pajak BUT hanya dihitung 22%", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Dinas Pendidikan Kabupaten X dibentuk dengan perda, dibiayai APBD, seluruh penerimaannya masuk APBD, dan pembukuannya diperiksa inspektorat. Apakah subjek PPh badan?",
        jawaban: "Bukan subjek pajak (memenuhi empat kriteria Pasal 2 ayat (3) huruf b)",
        langkah: [
          ["Dibentuk berdasarkan peraturan perundang-undangan", "ya (perda)"],
          ["Dibiayai APBN/APBD", "ya"],
          ["Penerimaan masuk anggaran pemda", "ya"],
          ["Pembukuan diperiksa aparat pengawasan fungsional", "ya → dikecualikan"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.2",
      slug: "objek-badan",
      judul: "Objek, penghasilan final, dan bukan objek pada badan",
      estimasiMenit: 12,
      jenisDominan: ["klasifikasi", "hitung"],
      ringkasan: [
        "Objek PPh (Pasal 4 ayat (1)) adalah setiap tambahan kemampuan ekonomis dengan nama dan bentuk apa pun: laba usaha, keuntungan pengalihan harta, bunga, royalti, sewa, selisih kurs, pembebasan utang, hibah yang tidak dikecualikan, penggantian asuransi atas harta, dan lain-lain.",
        "Penghasilan yang dikenai PPh final Pasal 4 ayat (2) dikeluarkan dari penghasilan neto fiskal (koreksi negatif) dan PPh finalnya tidak dapat dikreditkan: bunga deposito/tabungan 20%, bunga obligasi 10%, sewa tanah/bangunan 10%, pengalihan tanah/bangunan 2,5%, jasa konstruksi 1,75%–6%, penjualan saham di bursa 0,1%.",
        "Dividen dari dalam negeri yang diterima badan dalam negeri bukan objek tanpa syarat persentase kepemilikan dan tanpa syarat investasi (Pasal 4 ayat (3) huruf f angka 1 butir b, sejak UU Cipta Kerja 2020) dan tidak dipotong PPh Pasal 23.",
        "Bukan objek lain yang sering diuji: harta (termasuk uang) yang diterima badan sebagai pengganti saham/penyertaan modal; bantuan/sumbangan dan hibah yang memenuhi syarat (tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan); bagian laba anggota CV/firma yang modalnya tidak terbagi atas saham; sisa lebih badan nirlaba pendidikan/litbang yang ditanamkan kembali paling lama 4 tahun.",
        "Hibah dari rekanan usaha, pembebasan utang oleh kreditur, dan penggantian klaim asuransi kerugian atas harta badan tetap merupakan objek PPh.",
        "Biaya untuk mendapatkan penghasilan final atau bukan objek tidak dapat dikurangkan dari penghasilan yang dikenai tarif umum."
      ],
      poinKunci: [
        {
          label: "Dividen DN → badan DN",
          nilai: "bukan objek, tanpa syarat kepemilikan",
          dasar: "Pasal 4 ayat (3) huruf f UU PPh (UU 11/2020 jo. UU 7/2021)",
          berlakuSejak: "2020-11-02"
        },
        {
          label: "Sisa lebih nirlaba pendidikan/litbang",
          nilai: "bukan objek bila ditanam kembali ≤ 4 tahun",
          dasar: "Pasal 4 ayat (3) huruf m UU PPh",
          berlakuSejak: "2009-01-01"
        },
        { label: "Sewa tanah/bangunan", nilai: "10% final × bruto", dasar: "PP 34/2017", berlakuSejak: "2018-01-02" },
        { label: "Pengalihan hak atas tanah/bangunan", nilai: "2,5% final × bruto", dasar: "PP 34/2016", berlakuSejak: "2016-09-07" },
        { label: "Bunga deposito/tabungan", nilai: "20% final", dasar: "PP 131/2000", berlakuSejak: "2001-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) UU PPh", catatan: "objek pajak, termasuk pembebasan utang (huruf k)" },
        { pasal: "Pasal 4 ayat (2) UU PPh", catatan: "penghasilan yang dapat dikenai PPh final" },
        { pasal: "Pasal 4 ayat (3) UU PPh", catatan: "bukan objek: hibah, penyertaan modal, dividen DN, sisa lebih nirlaba" },
        { pasal: "PMK 18/PMK.03/2021", catatan: "pelaksanaan dividen dan sisa lebih" }
      ],
      jebakan: [
        {
          teks: "Memakai syarat lama dividen bukan objek (kepemilikan ≥ 25% dan dari laba ditahan) — sudah dihapus sejak UU Cipta Kerja",
          tagSebab: "angka-usang"
        },
        { teks: "Memasukkan bunga deposito atau sewa bangunan ke penghasilan neto lalu mengkreditkan PPh finalnya", tagSebab: "final-nonfinal" },
        {
          teks: "Menerapkan syarat investasi 3 tahun (aturan dividen WP orang pribadi) pada dividen yang diterima badan",
          tagSebab: "salah-klasifikasi"
        }
      ],
      contohSoal: {
        stem: "PT A menerima dividen Rp400.000.000 dari PT B (kepemilikan 10%) dan bunga deposito bruto Rp100.000.000. Berapa koreksi negatif fiskal atas kedua penghasilan itu?",
        jawaban: "Rp500.000.000",
        langkah: [
          ["Dividen DN diterima badan DN", "bukan objek → koreksi negatif Rp400.000.000"],
          ["Bunga deposito", "PPh final 20% → koreksi negatif Rp100.000.000"],
          ["Jumlah koreksi negatif", "Rp500.000.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.3",
      slug: "koreksi-fiskal",
      judul: "Koreksi fiskal: deductible, non-deductible, natura, promosi, piutang, cadangan, DER 4:1",
      estimasiMenit: 22,
      jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "Penghasilan neto fiskal = laba komersial + koreksi positif − koreksi negatif. Koreksi positif: biaya komersial yang tidak boleh dikurangkan (Pasal 9) atau penghasilan fiskal yang belum diakui; koreksi negatif: penghasilan final/bukan objek atau biaya fiskal yang belum dibebankan.",
        "Pasal 9 ayat (1) yang paling sering diuji: pembagian laba, biaya kepentingan pribadi pemegang saham, pembentukan cadangan (kecuali bank, sewa guna usaha, asuransi, penjaminan, pertambangan, kehutanan, limbah industri), sumbangan dan hibah (kecuali zakat/sumbangan keagamaan wajib dan sumbangan PP 93/2010), PPh, sanksi administrasi dan pidana pajak, serta jumlah yang melebihi kewajaran kepada pihak afiliasi.",
        "Sejak Tahun Pajak 2022 (UU HPP), natura dan kenikmatan kepada pegawai dapat dibiayakan sepanjang berkaitan dengan 3M; koreksi positif hanya untuk biaya kepentingan pribadi pemegang saham/pihak lain yang tidak terkait usaha.",
        "Biaya promosi dan entertainment hanya dapat dikurangkan bila dibuatkan daftar nominatif (nama, NPWP, alamat, tanggal, bentuk dan jenis biaya, jumlah, PPh yang dipotong) yang dilampirkan pada SPT (PMK 02/PMK.03/2010; SE-27/PJ.22/1986).",
        "Piutang nyata-nyata tidak dapat ditagih boleh dibiayakan bila: dibebankan dalam laba rugi komersial, daftar piutang diserahkan ke DJP, dan penagihannya diserahkan ke PN/PUPN atau ada perjanjian tertulis pembebasan utang atau dipublikasikan atau ada pengakuan debitur (syarat terakhir dikecualikan untuk debitur kecil) (Pasal 6 ayat (1) huruf h; PMK 207/PMK.010/2015).",
        "Sumbangan bencana nasional, litbang, infrastruktur sosial, fasilitas pendidikan, dan pembinaan olahraga dapat dibiayakan paling tinggi 5% dari penghasilan neto fiskal tahun pajak sebelumnya dan tidak boleh menyebabkan rugi (PP 93/2010).",
        "DER paling tinggi 4:1 (rata-rata saldo akhir bulan utang berbunga dibanding modal termasuk pinjaman tanpa bunga dari pihak afiliasi); biaya pinjaman yang dapat dibebankan = (4 × modal ÷ utang) × biaya pinjaman (PMK 169/PMK.010/2015)."
      ],
      poinKunci: [
        { label: "DER maksimum", nilai: "4 : 1", dasar: "PMK 169/PMK.010/2015 Pasal 2", berlakuSejak: "2016-01-01" },
        {
          label: "Sumbangan PP 93/2010",
          nilai: "≤ 5% neto fiskal tahun sebelumnya, tidak menimbulkan rugi",
          dasar: "PP 93/2010 (berlaku sejak Tahun Pajak 2010, Pasal 10)",
          berlakuSejak: "2010-01-01"
        },
        {
          label: "Natura/kenikmatan pegawai",
          nilai: "dapat dibiayakan sejak TP 2022",
          dasar: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf e UU PPh (UU HPP); PP 55/2022",
          berlakuSejak: "2022-01-01"
        },
        { label: "Promosi/entertainment", nilai: "wajib daftar nominatif", dasar: "PMK 02/PMK.03/2010", berlakuSejak: "2010-01-05" },
        {
          label: "Sanksi pajak, PPh badan",
          nilai: "koreksi positif (beda tetap)",
          dasar: "Pasal 9 ayat (1) huruf h dan k UU PPh",
          berlakuSejak: "2009-01-01"
        }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) UU PPh", catatan: "biaya yang dapat dikurangkan" },
        { pasal: "Pasal 9 ayat (1) dan (2) UU PPh", catatan: "biaya yang tidak dapat dikurangkan; pengeluaran bermanfaat > 1 tahun" },
        { pasal: "Pasal 18 ayat (1) UU PPh; PMK 169/PMK.010/2015", catatan: "DER 4:1" },
        {
          pasal: "PMK 02/PMK.03/2010; PMK 207/PMK.010/2015; PMK 81/PMK.03/2009 s.t.d.d. PMK 219/PMK.011/2012",
          catatan: "promosi, piutang tak tertagih, cadangan"
        },
        { pasal: "PP 93/2010", catatan: "sumbangan yang dapat dikurangkan" }
      ],
      jebakan: [
        { teks: "Mengoreksi positif makan siang atau rumah dinas pegawai karena memakai aturan natura pra-UU HPP", tagSebab: "angka-usang" },
        { teks: "Membatasi sumbangan bencana 5% dari neto fiskal tahun berjalan — yang benar tahun pajak sebelumnya", tagSebab: "salah-baca" },
        {
          teks: "Menolak seluruh biaya pinjaman ketika DER melebihi 4:1 — yang ditolak hanya bagian proporsional di atas batas",
          tagSebab: "salah-hitung"
        }
      ],
      contohSoal: {
        stem: "Laba komersial PT C Rp1.000.000.000 termasuk bunga deposito Rp50.000.000, beban sanksi bunga STP Rp10.000.000, dan entertainment tanpa daftar nominatif Rp30.000.000. Berapa penghasilan neto fiskal?",
        jawaban: "Rp990.000.000",
        langkah: [
          ["Laba komersial", "Rp1.000.000.000"],
          ["Koreksi positif: sanksi Rp10.000.000 + entertainment Rp30.000.000", "+Rp40.000.000"],
          ["Koreksi negatif: bunga deposito (final)", "−Rp50.000.000"],
          ["Penghasilan neto fiskal", "Rp990.000.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.4",
      slug: "penyusutan-amortisasi",
      judul: "Penyusutan dan amortisasi fiskal",
      estimasiMenit: 16,
      jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "Harta berwujud bukan bangunan: Kelompok 1 (4 tahun; GL 25%, SM 50%), Kelompok 2 (8 tahun; 12,5%/25%), Kelompok 3 (16 tahun; 6,25%/12,5%), Kelompok 4 (20 tahun; 5%/10%); daftar jenis harta per kelompok ada di lampiran PMK 72/2023.",
        "Bangunan hanya boleh garis lurus: permanen 20 tahun (5%) atau masa manfaat sebenarnya menurut pembukuan bila lebih dari 20 tahun (taat asas); tidak permanen 10 tahun (10%). Tanah hak milik tidak disusutkan.",
        "Penyusutan dimulai pada bulan dilakukannya pengeluaran; harta yang masih dalam proses pengerjaan mulai disusutkan pada bulan selesainya pengerjaan. Dengan persetujuan DJP dapat dimulai pada bulan harta digunakan atau mulai menghasilkan (Pasal 11 ayat (3)–(4)). Tahun pertama dihitung pro rata bulan.",
        "Metode saldo menurun: nilai sisa buku pada akhir masa manfaat disusutkan sekaligus.",
        "Pengalihan harta: harga jual atau penggantian asuransi dibukukan sebagai penghasilan dan nilai sisa buku fiskal sebagai kerugian (Pasal 11 ayat (8)); perbedaan dengan laba/rugi komersial menjadi koreksi fiskal. Pengalihan karena hibah/bantuan yang bukan objek bagi penerima: nilai sisa buku tidak boleh dibebankan.",
        "Amortisasi harta tak berwujud dan biaya lain bermanfaat > 1 tahun mengikuti kelompok 4/8/16/20 tahun (Pasal 11A); biaya pendirian dan perluasan modal boleh dibebankan sekaligus pada tahun terjadinya atau diamortisasi.",
        "Harga perolehan dan pengalihan harta (Pasal 10 UU PPh): jual beli tanpa hubungan istimewa memakai jumlah yang sesungguhnya dikeluarkan atau diterima, sedangkan bila ada hubungan istimewa memakai jumlah yang seharusnya dikeluarkan atau diterima (harga wajar) (ayat (1)); tukar-menukar harta memakai harga pasar (ayat (2)); likuidasi, penggabungan, peleburan, pemekaran, atau pengambilalihan usaha memakai harga pasar kecuali ditentukan lain oleh Menteri Keuangan (ayat (3); rujuk B7.8); harta yang dialihkan sebagai pengganti saham atau penyertaan modal (inbreng) dinilai dengan harga pasar bagi badan yang menerima (ayat (5)). Selisih harga pasar dengan nilai sisa buku fiskal menjadi laba atau rugi pengalihan pihak yang mengalihkan.",
        "Bantuan, sumbangan, atau hibah yang memenuhi syarat bukan objek pajak (Pasal 4 ayat (3) huruf a): nilai perolehan bagi penerima sebesar nilai sisa buku pihak yang mengalihkan atau nilai yang ditetapkan DJP, dan pihak yang mengalihkan tidak boleh membebankan nilai sisa bukunya; bila tidak memenuhi syarat, penerima memakai harga pasar. Persediaan dan pemakaian persediaan untuk harga pokok dinilai berdasarkan harga perolehan dengan metode rata-rata atau FIFO (mendahulukan persediaan yang diperoleh pertama) secara taat asas (Pasal 10 ayat (6)); LIFO tidak diperkenankan."
      ],
      poinKunci: [
        { label: "Kelompok 1 · 2 · 3 · 4 (GL)", nilai: "25% · 12,5% · 6,25% · 5%", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Kelompok 1 · 2 · 3 · 4 (SM)", nilai: "50% · 25% · 12,5% · 10%", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01" },
        {
          label: "Bangunan permanen",
          nilai: "20 tahun (5%) atau masa manfaat sebenarnya",
          dasar: "Pasal 11 ayat (6a) UU PPh; PMK 72/2023",
          berlakuSejak: "2022-01-01"
        },
        { label: "Bangunan tidak permanen", nilai: "10 tahun (10%)", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01" },
        {
          label: "Saat mulai harta dalam pengerjaan",
          nilai: "bulan selesainya pengerjaan",
          dasar: "Pasal 11 ayat (3) UU PPh",
          berlakuSejak: "2001-01-01"
        },
        { label: "Tukar-menukar harta", nilai: "Harga pasar (bukan nilai buku); selisih atas nilai sisa buku = laba/rugi", dasar: "Pasal 10 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Inbreng (harta ditukar saham)", nilai: "Harga pasar bagi badan penerima; selisih atas nilai sisa buku = penghasilan pengalih", dasar: "Pasal 10 ayat (5) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Penilaian persediaan", nilai: "Rata-rata atau FIFO, taat asas (LIFO tidak)", dasar: "Pasal 10 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 11 UU PPh", catatan: "penyusutan harta berwujud, saat mulai, pengalihan" },
        { pasal: "Pasal 11A UU PPh", catatan: "amortisasi harta tak berwujud dan biaya pendirian" },
        { pasal: "PMK 72/2023", catatan: "kelompok harta, bangunan masa manfaat sebenarnya; mencabut PMK 96/PMK.03/2009, 248 dan 249/PMK.03/2008" },
        { pasal: "Pasal 10 ayat (1)–(6) UU PPh", catatan: "harga perolehan/pengalihan harta: hubungan istimewa, tukar-menukar, restrukturisasi, hibah, inbreng, persediaan" }
      ],
      jebakan: [
        {
          teks: "Memulai penyusutan gedung sejak bulan pengeluaran pertama, padahal harta dalam pengerjaan disusutkan sejak bulan selesai",
          tagSebab: "salah-baca"
        },
        { teks: "Menerapkan saldo menurun pada bangunan", tagSebab: "lupa-pasal" },
        { teks: "Menghitung tahun pertama penuh 12 bulan padahal harta diperoleh di tengah tahun", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Mesin Kelompok 2 dibeli 5 April 2025 seharga Rp960.000.000, metode garis lurus. Berapa penyusutan fiskal 2025?",
        jawaban: "Rp90.000.000",
        langkah: [
          ["Tarif GL Kelompok 2", "12,5%"],
          ["Setahun penuh = 960.000.000 × 12,5%", "Rp120.000.000"],
          ["Bulan April–Desember", "9 bulan"],
          ["Penyusutan 2025 = 120.000.000 × 9/12", "Rp90.000.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.5",
      slug: "kompensasi-rugi-badan",
      judul: "Kompensasi kerugian badan",
      estimasiMenit: 10,
      jenisDominan: ["hitung"],
      ringkasan: [
        "Kerugian fiskal (penghasilan neto fiskal negatif setelah koreksi, bukan rugi komersial) dikompensasikan dengan penghasilan mulai tahun berikutnya berturut-turut sampai dengan 5 tahun (Pasal 6 ayat (2)).",
        "Kompensasi memakai urutan kerugian terlama lebih dulu; sisa kerugian yang tidak terpakai pada tahun kelima hangus.",
        "Penghasilan final dan bukan objek tidak dapat dipakai untuk menyerap kerugian, karena sudah dikeluarkan dari penghasilan neto fiskal.",
        "Kerugian usaha di luar negeri tidak dapat dikompensasikan dengan penghasilan dalam negeri maupun penghasilan dari negara lain (PMK 192/PMK.03/2018).",
        "Fasilitas tax allowance (PP 78/2019) memberikan kompensasi lebih lama dari 5 tahun tetapi paling lama 10 tahun; rincian tambahan tahun mengikuti kriteria lokasi, tenaga kerja, belanja litbang, dan bahan baku lokal.",
        "Kerugian dilaporkan dan dilacak per tahun asal pada Lampiran 7 (Penghitungan Kompensasi Kerugian Fiskal) SPT Tahunan PPh Badan menurut PER-11/PJ/2025 mulai Tahun Pajak 2025; format 1771 lama (lampiran khusus 2A) hanya dipakai untuk SPT sampai Tahun Pajak 2024."
      ],
      poinKunci: [
        { label: "Jangka kompensasi umum", nilai: "5 tahun berturut-turut", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "1984-01-01" },
        {
          label: "Jangka kompensasi tax allowance",
          nilai: "> 5 tahun, paling lama 10 tahun",
          dasar: "PP 78/2019 Pasal 3",
          berlakuSejak: "2019-12-12"
        },
        { label: "Rugi luar negeri", nilai: "tidak dikompensasikan dengan penghasilan DN", dasar: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }
      ],
      dasarHukum: [
        { pasal: "Pasal 6 ayat (2) UU PPh", catatan: "kompensasi kerugian 5 tahun" },
        { pasal: "PP 78/2019 Pasal 3", catatan: "kompensasi kerugian lebih lama (tax allowance)" },
        { pasal: "PMK 192/PMK.03/2018", catatan: "kerugian di luar negeri" }
      ],
      jebakan: [
        {
          teks: "Menghitung 5 tahun termasuk tahun terjadinya rugi sehingga rugi 2020 dianggap hangus setelah 2024 — yang benar dapat dipakai sampai 2025",
          tagSebab: "salah-baca"
        },
        { teks: "Mengompensasikan rugi komersial, bukan rugi fiskal setelah koreksi", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Rugi fiskal PT D Tahun Pajak 2021 Rp400.000.000; laba fiskal 2022–2024 masing-masing Rp50.000.000, Rp100.000.000, Rp70.000.000. Sampai tahun berapa sisa rugi dapat dikompensasikan dan berapa sisanya pada awal 2025?",
        jawaban: "Sampai Tahun Pajak 2026; sisa Rp180.000.000",
        langkah: [
          ["Tahun kompensasi rugi 2021", "2022–2026"],
          ["Terpakai 2022–2024 = 50 + 100 + 70 juta", "Rp220.000.000"],
          ["Sisa awal 2025", "Rp180.000.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.6",
      slug: "kredit-pajak-badan",
      judul: "Kredit pajak badan: PPh 22, 23, 24 (per jenis penghasilan tiap negara), 25; Pasal 28A dan 29",
      estimasiMenit: 16,
      jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "Kredit pajak badan (Pasal 28 UU PPh): PPh 22 yang dipungut (impor, bendahara, industri tertentu), PPh 23 yang dipotong, PPh 24 atas penghasilan luar negeri, dan PPh 25 yang dibayar sendiri. PPh final dan sanksi administrasi tidak dapat dikreditkan.",
        "PPh 24 memakai metode kredit biasa dengan batas yang dihitung per jenis penghasilan untuk tiap negara atau yurisdiksi (Pasal 6 ayat (2) PMK 192/PMK.03/2018): kredit = jumlah paling sedikit di antara pajak yang seharusnya terutang di luar negeri menurut P3B (bila ada), pajak yang dibayar/terutang di luar negeri, dan (penghasilan jenis itu dari negara itu ÷ PKP) × PPh terutang, paling tinggi sebesar PPh terutang (Pasal 6 ayat (4)). PKP di rumus tidak termasuk penghasilan yang dikenai PPh final (Pasal 6 ayat (9)). Bila satu negara memberi dua jenis penghasilan (mis. penghasilan usaha dan bunga), masing-masing dihitung sendiri. Kelebihan pajak luar negeri tidak dapat diperhitungkan dengan PPh terutang, tidak boleh dibiayakan, dan tidak dapat direstitusi (Pasal 7).",
        "Kerugian di suatu negara tidak digabung dengan penghasilan negara lain maupun dalam negeri, baik saat menghitung PKP maupun batas kredit (Pasal 4 ayat (3) PMK 192/PMK.03/2018).",
        "Bila PPh terutang lebih besar dari kredit pajak, kekurangannya (PPh Pasal 29) wajib dilunasi sebelum SPT Tahunan disampaikan; keterlambatan pelunasan dikenai bunga Pasal 9 ayat (2b).",
        "Bila kredit pajak lebih besar (lebih bayar), WP dapat meminta pengembalian lewat SPT (Pasal 28A); DJP menerbitkan SKP paling lama 12 bulan sejak permohonan lengkap diterima (Pasal 17B), atau melalui pengembalian pendahuluan bagi WP yang memenuhi syarat.",
        "Bukti potong yang dapat dikreditkan di era Coretax adalah BPPU (PPh 22/23) dan dokumen pemungutan PPh 22 impor (PIB/dokumen kepabeanan); bupot PPh 4 ayat (2) hanya dilaporkan sebagai PPh final."
      ],
      poinKunci: [
        {
          label: "PPh 24",
          nilai: "per jenis penghasilan untuk tiap negara: min(pajak LN menurut P3B; pajak LN dibayar; penghasilan LN jenis itu/PKP × PPh terutang), paling tinggi PPh terutang",
          dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018",
          berlakuSejak: "2018-12-31"
        },
        { label: "PPh 29", nilai: "lunas sebelum SPT disampaikan", dasar: "Pasal 29 UU PPh; Pasal 9 ayat (2) UU KUP", berlakuSejak: "2009-01-01" },
        {
          label: "Keputusan restitusi",
          nilai: "paling lama 12 bulan; lewat → dianggap dikabulkan",
          dasar: "Pasal 17B UU KUP",
          berlakuSejak: "2008-01-01"
        },
        {
          label: "Tidak dapat dikreditkan",
          nilai: "PPh final, sanksi administrasi",
          dasar: "Pasal 4 ayat (2) dan Pasal 28 UU PPh",
          berlakuSejak: "2009-01-01"
        }
      ],
      dasarHukum: [
        { pasal: "Pasal 28, 28A, 29 UU PPh", catatan: "kredit pajak, lebih bayar, kurang bayar" },
        { pasal: "Pasal 24 UU PPh; PMK 192/PMK.03/2018", catatan: "kredit pajak luar negeri" },
        { pasal: "Pasal 17B UU KUP", catatan: "jangka waktu keputusan restitusi" }
      ],
      jebakan: [
        { teks: "Mengkreditkan PPh final atas bunga deposito, sewa bangunan, atau jasa konstruksi", tagSebab: "final-nonfinal" },
        { teks: "Memakai batas kredit keseluruhan (overall limitation), menggabungkan beberapa jenis penghasilan dari satu negara dalam satu batas, atau mengkreditkan seluruh pajak LN yang dibayar", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PPh terutang PT E Rp500.000.000; PPh 22 impor Rp120.000.000; PPh 23 dipotong pelanggan Rp30.000.000; PPh 4 ayat (2) sewa Rp20.000.000; PPh 25 dibayar Rp300.000.000. Berapa PPh Pasal 29?",
        jawaban: "Rp50.000.000",
        langkah: [["Kredit = 120 + 30 + 300 juta (PPh final tidak dikreditkan)", "Rp450.000.000"], ["PPh 29 = 500.000.000 − 450.000.000", "Rp50.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.7",
      slug: "tarif-31e-umkm-badan",
      judul: "Tarif 22%, Tbk 19%, fasilitas Pasal 31E, dan PPh final 0,5% badan",
      estimasiMenit: 16,
      jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Tarif PPh badan dalam negeri dan BUT 22% (Tahun Pajak 2022 dan seterusnya; rencana 20% dibatalkan UU HPP). PKP dibulatkan ke bawah dalam ribuan rupiah penuh.",
        "Perseroan terbuka memperoleh tarif 3% lebih rendah (19%) bila paling sedikit 40% saham disetor tercatat dan diperdagangkan di BEI, dimiliki paling sedikit 300 pihak, masing-masing kurang dari 5%, dan dipenuhi paling singkat 183 hari kalender dalam satu tahun pajak.",
        "Pasal 31E (wajib diterapkan, bukan pilihan): WP badan DN dengan peredaran bruto s.d. Rp50 miliar memperoleh pengurangan 50% tarif atas PKP dari bagian peredaran bruto s.d. Rp4,8 miliar. PKP fasilitas = (4,8 miliar ÷ peredaran bruto) × PKP; PPh = 11% × PKP fasilitas + 22% × sisanya. Peredaran bruto ≤ Rp4,8 miliar → seluruh PKP 11%.",
        "Peredaran bruto untuk Pasal 31E mencakup penghasilan usaha dan luar usaha, termasuk penghasilan yang dikenai PPh final dan yang bukan objek, setelah retur dan potongan, sebelum biaya (SE-02/PJ/2015).",
        "PPh final 0,5% PP 55/2022 setelah PP 20/2026 (berlaku 22 April 2026): penerima baru hanya orang pribadi, perseroan perorangan yang didirikan satu orang, dan koperasi (koperasi paling lama 4 tahun pajak); jasa sehubungan pekerjaan bebas tetap dikecualikan (Pasal 56 ayat (3) huruf a PP 55/2022); batas peredaran bruto Rp4,8 miliar; fasilitas omzet Rp500 juta tidak kena pajak hanya untuk orang pribadi.",
        "Peralihan PP 20/2026: CV, firma, dan PT yang terdaftar dan telah memanfaatkan PPh final sebelum 22 April 2026 tetap dapat memakainya sampai jangka waktu lama berakhir (PT 3 tahun pajak, CV/firma 4 tahun pajak); setelah itu wajib tarif umum dengan Pasal 31E. Koperasi yang terdaftar sebelum PP 20/2026 dan jangka waktu PPh finalnya menurut PP 55/2022 berakhir pada Tahun Pajak 2024–2029 dapat memakai PPh final sampai Tahun Pajak 2029 (PP 20/2026 Pasal II angka 1 huruf b); batas 4 tahun pajak berlaku bagi koperasi yang terdaftar setelah PP 20/2026. Perseroan perorangan yang didirikan orang pribadi berkeahlian khusus untuk jasa sejenis jasa pekerjaan bebas (mis. dokter) dan sudah dikenai PPh final berdasarkan PP 55/2022 masih dapat memakainya sampai akhir Tahun Pajak 2026 (PP 20/2026 Pasal II angka 1 huruf f); yang didirikan setelah 22 April 2026 langsung memakai tarif umum."
      ],
      poinKunci: [
        { label: "Tarif umum badan", nilai: "22%", dasar: "Pasal 17 ayat (1) huruf b UU PPh (UU HPP)", berlakuSejak: "2022-01-01" },
        {
          label: "Perseroan terbuka",
          nilai: "19% (≥ 40% listing, ≥ 300 pihak, < 5%, ≥ 183 hari)",
          dasar: "Pasal 17 ayat (2b) UU PPh; PP 55/2022",
          berlakuSejak: "2022-01-01"
        },
        {
          label: "Pasal 31E",
          nilai: "50% × tarif atas PKP dari omzet s.d. Rp4,8 M; omzet ≤ Rp50 M",
          dasar: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015",
          berlakuSejak: "2009-01-01"
        },
        {
          label: "PPh final UMKM badan",
          nilai: "0,5% × omzet bulanan; hanya koperasi (4 th; koperasi lama yang jangkanya berakhir TP 2024–2029: sampai TP 2029) dan perseroan perorangan",
          dasar: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 57",
          berlakuSejak: "2026-04-22"
        },
        {
          label: "Peralihan PT/CV/firma lama",
          nilai: "PT 3 th, CV/firma 4 th sejak terdaftar",
          dasar: "PP 20/2026 (ketentuan peralihan)",
          berlakuSejak: "2026-04-22"
        }
      ],
      dasarHukum: [
        { pasal: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh", catatan: "tarif 22% dan perseroan terbuka" },
        { pasal: "Pasal 31E UU PPh; SE-02/PJ/2015", catatan: "fasilitas pengurangan tarif dan definisi peredaran bruto" },
        { pasal: "PP 55/2022 Pasal 56–60 s.t.d.d. PP 20/2026", catatan: "PPh final 0,5%, subjek, jangka waktu, peralihan" }
      ],
      jebakan: [
        { teks: "Memakai tarif 25% atau 12,5% (50% × 25%) dari era sebelum 2020", tagSebab: "angka-usang" },
        { teks: "Menganggap CV/PT baru yang terdaftar setelah 22 April 2026 masih boleh memakai PPh final 0,5%", tagSebab: "angka-usang" },
        { teks: "Menghitung peredaran bruto 31E hanya dari penjualan, tanpa penghasilan final dan bukan objek", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT A: peredaran bruto Rp30.000.000.000, PKP Rp3.000.000.000. Berapa PPh badan terutang?",
        jawaban: "Rp607.200.000",
        langkah: [
          ["PKP fasilitas = 4,8/30 × 3.000.000.000", "Rp480.000.000"],
          ["PKP non-fasilitas", "Rp2.520.000.000"],
          ["11% × 480.000.000", "Rp52.800.000"],
          ["22% × 2.520.000.000", "Rp554.400.000"],
          ["PPh terutang", "Rp607.200.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "B6.8",
      slug: "fasilitas-usaha-tertentu",
      judul: "Tax holiday, tax allowance, dan super deduction",
      estimasiMenit: 10,
      jenisDominan: ["konsep", "hitung"],
      ringkasan: [
        "Tax allowance (PP 78/2019) bagi industri tertentu/daerah tertentu: pengurangan penghasilan neto 30% dari nilai penanaman modal berupa aktiva tetap berwujud (termasuk tanah) untuk kegiatan usaha utama, dibebankan 5% per tahun selama 6 tahun; penyusutan/amortisasi dipercepat; PPh atas dividen ke subjek luar negeri 10% (atau lebih rendah menurut P3B); kompensasi kerugian lebih dari 5 tahun paling lama 10 tahun.",
        "Tax holiday industri pionir (PMK 130/2020 s.t.d.d. PMK 69/2024): pengurangan PPh badan 100% untuk penanaman modal baru paling sedikit Rp500 miliar (5–20 tahun sesuai nilai investasi) atau 50% untuk Rp100 miliar s.d. kurang dari Rp500 miliar (5 tahun), diikuti masa transisi 2 tahun dengan pengurangan 50% (pasca-100%) atau 25% (pasca-50%).",
        "Super deduction kegiatan praktik kerja, pemagangan, dan pembelajaran (vokasi) PMK 128/2019: pengurangan penghasilan bruto paling tinggi 200% dari biaya yang dikeluarkan (100% biaya + tambahan 100%).",
        "Super deduction penelitian dan pengembangan (kini diatur PMK 81/2024, menggantikan PMK 153/PMK.010/2020 sejak 1 Januari 2025): pengurangan penghasilan bruto paling tinggi 300% (100% biaya + tambahan paling tinggi 200% secara bertahap menurut capaian paten/komersialisasi/kerja sama).",
        "Investment allowance industri padat karya (PP 45/2019; pelaksanaannya kini PMK 81/2024 Pasal 423 sampai 431, menggantikan PMK 16/PMK.010/2020 sejak 1 Januari 2025): pengurangan penghasilan neto 60% dari investasi aktiva tetap berwujud termasuk tanah, dibebankan selama 6 tahun masing-masing 10% per tahun.",
        "Pemanfaatan fasilitas dilaporkan pada lampiran fasilitas penanaman modal SPT 1771 (lampiran khusus 4A format lama, hanya untuk Tahun Pajak sampai 2024 menurut Pasal 138 huruf a PER-11/PJ/2025); sejak Tahun Pajak 2025 padanannya Lampiran 13A Daftar Fasilitas Penanaman Modal, yang jumlahnya dipindahkan ke Induk Bagian D angka 5 (Lampiran PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026). Pajak minimum global (PMK 136/2024) dapat mengurangi manfaat tax holiday bagi grup multinasional besar."
      ],
      poinKunci: [
        { label: "Tax allowance", nilai: "30% investasi aktiva tetap, 5%/tahun × 6 tahun", dasar: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12" },
        {
          label: "Tax holiday",
          nilai: "100% (≥ Rp500 M) atau 50% (Rp100–<500 M); transisi 2 tahun 50%/25%",
          dasar: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024",
          berlakuSejak: "2020-10-09"
        },
        { label: "Super deduction vokasi", nilai: "paling tinggi 200%", dasar: "PMK 128/PMK.010/2019", berlakuSejak: "2019-09-09" },
        { label: "Super deduction litbang", nilai: "paling tinggi 300%", dasar: "PMK 81/2024 (menggantikan PMK 153/PMK.010/2020)", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 31A UU PPh; PP 78/2019", catatan: "tax allowance" },
        { pasal: "Pasal 18 ayat (3) huruf e dan ayat (4) UU 25/2007 s.t.d.t.d. UU 6/2023 (Penanaman Modal); PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29; PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 Pasal 2", catatan: "tax holiday" },
        {
          pasal: "PP 94/2010 s.t.d.d. PP 45/2019 (pasal sisipan 29A–29C); PMK 128/PMK.010/2019; PMK 81/2024 Pasal 423 sampai 431 (padat karya; menggantikan PMK 16/PMK.010/2020) dan Pasal 432 dst. (litbang; menggantikan PMK 153/PMK.010/2020)",
          catatan: "investment allowance padat karya, super deduction vokasi dan litbang"
        }
      ],
      jebakan: [
        { teks: "Membebankan tax allowance 30% sekaligus di tahun pertama, padahal 5% per tahun selama 6 tahun", tagSebab: "salah-baca" },
        { teks: "Tertukar plafon super deduction vokasi (200%) dan litbang (300%)", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT F (penerima tax allowance) merealisasikan investasi aktiva tetap berwujud Rp120.000.000.000. Berapa pengurangan penghasilan neto per tahun?",
        jawaban: "Rp6.000.000.000 selama 6 tahun",
        langkah: [["30% × 120.000.000.000", "Rp36.000.000.000"], ["Dibagi 6 tahun (5% per tahun)", "Rp6.000.000.000 per tahun"]]
      },
      verifikasi: "◐",
      peringatan: "Rincian PMK 69/2024 (perubahan PMK 130/2020, termasuk batas waktu pengajuan dan kaitan dengan pajak minimum global) serta pasal PP 78/2019 dan PP 45/2019 belum dicek ke teks primer; angka plafon 30%, 60%, 200%, 300%, dan Rp100/500 miliar berkeyakinan tinggi."
    },
    {
      id: "B6.9",
      slug: "pph25-badan",
      judul: "Angsuran PPh Pasal 25 badan",
      estimasiMenit: 10,
      jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "Angsuran PPh 25 = (PPh terutang menurut SPT Tahunan tahun lalu − PPh 22, 23, dan 24 yang dikreditkan) ÷ 12. PPh 25 tahun lalu dan PPh final tidak ikut dikurangkan. Hasil nol atau negatif → angsuran nihil.",
        "Bila SPT Tahunan tahun lalu memuat kompensasi kerugian, angsuran = (PPh atas [penghasilan neto tahun lalu − sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan] − PPh 22, 23, dan 24) ÷ 12; bila kerugian habis dipakai atau hangus, dasarnya neto penuh. Tarif sama seperti PPh terutang (Pasal 31E tetap berlaku). Bukan PPh terutang setelah kompensasi (Pasal 25 ayat (6) huruf a UU PPh dan contoh Penjelasannya: neto 120 juta, sisa kerugian 30 juta, dasar 90 juta).",
        "Angsuran untuk bulan-bulan sebelum SPT Tahunan disampaikan (sebelum batas waktu penyampaiannya) sama dengan angsuran bulan terakhir tahun pajak lalu; angsuran baru berlaku sejak bulan SPT disampaikan (contoh penjelasan undang-undang: SPT disampaikan Februari, angsuran baru mulai Februari), paling lambat sejak bulan batas waktu (April untuk tahun buku kalender) (Pasal 25 ayat (2)).",
        "WP badan tertentu (Pasal 25 ayat (7); PMK 81/2024, menggantikan PMK 215/PMK.03/2018 sejak 1 Januari 2025): bank menghitung angsuran berdasarkan laporan keuangan yang disampaikan kepada OJK sejak awal tahun pajak sampai masa pajak yang dilaporkan, dikurangi antara lain angsuran masa-masa sebelumnya; WP masuk bursa dan WP lain yang wajib membuat laporan keuangan berkala berdasarkan laporan keuangan berkala (triwulanan) yang disampaikan ke bursa/OJK; BUMN/BUMD berdasarkan RKAP yang telah disahkan RUPS.",
        "WP dapat mengajukan pengurangan angsuran bila usahanya diperkirakan menghasilkan PPh terutang kurang dari 75% dari PPh terutang yang menjadi dasar penghitungan angsuran; permohonan diajukan setelah tahun pajak berjalan 3 bulan atau lebih (PER-11/PJ/2025 Pasal 119, menggantikan KEP-537/PJ/2000 sejak 22 Mei 2025).",
        "Penyetoran paling lambat tanggal 15 bulan berikutnya (PMK 81/2024); di Coretax pembayaran PPh 25 yang tervalidasi dianggap sebagai penyampaian SPT Masa."
      ],
      poinKunci: [
        { label: "Rumus angsuran", nilai: "(PPh terutang − kredit 22/23/24) ÷ 12; bila SPT lalu memuat kompensasi kerugian: (PPh atas [neto tahun lalu − sisa rugi yang masih dapat dikompensasikan tahun berjalan] − kredit 22/23/24) ÷ 12", dasar: "Pasal 25 ayat (1) dan ayat (6) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Angsuran sebelum SPT", nilai: "= angsuran Desember tahun lalu", dasar: "Pasal 25 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Syarat pengurangan", nilai: "estimasi PPh terutang < 75% dasar angsuran", dasar: "PER-11/PJ/2025 Pasal 119 (menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22" },
        { label: "Batas setor", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 25 UU PPh", catatan: "angsuran, WP tertentu (ayat (7))" },
        { pasal: "PMK 81/2024", catatan: "angsuran WP tertentu (bank, BUMN, masuk bursa); menggantikan PMK 215/PMK.03/2018 sejak 1 Januari 2025" },
        { pasal: "PER-11/PJ/2025", catatan: "angsuran dalam hal tertentu: pengurangan angsuran (Pasal 119); penghasilan tidak teratur (Pasal 113 dan 115); menggantikan KEP-537/PJ/2000 sejak 22 Mei 2025" },
        { pasal: "PMK 81/2024 Pasal 94", catatan: "batas setor tanggal 15" }
      ],
      jebakan: [
        { teks: "Membagi PPh Pasal 29 dengan 12 atau mengurangkan PPh 25 tahun lalu sebagai kredit", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai PPh terutang setelah kompensasi kerugian sebagai dasar angsuran; Pasal 25 ayat (6) huruf a memakai neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan (bila habis: neto penuh)", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai angsuran baru untuk Masa Januari–Maret sebelum SPT disampaikan", tagSebab: "salah-baca" },
        { teks: "Menyebut batas setor tanggal 10 — itu batas lama PPh 21/23 yang dipotong (pra-2025); PPh 25 sejak dulu tanggal 15 dan kini semua pajak masa tanggal 15", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PPh terutang 2025 Rp607.200.000; PPh 22 Rp40.000.000; PPh 23 Rp27.200.000; PPh 25 dibayar Rp400.000.000. Berapa angsuran PPh 25 per bulan mulai April 2026?",
        jawaban: "Rp45.000.000",
        langkah: [
          ["Dasar = 607.200.000 − 40.000.000 − 27.200.000", "Rp540.000.000"],
          ["Dibagi 12", "Rp45.000.000"],
          ["PPh 25 tahun lalu tidak dikurangkan", "—"]
        ]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan dengan naskah: angsuran Wajib Pajak tertentu (PMK 81/2024 Pasal 226 sampai Pasal 237, mencabut PMK 215/PMK.03/2018), rumus kompensasi kerugian (PER-11/PJ/2025 Pasal 114 serta petunjuk Lampiran 6 dan 7 SPT PPh Badan: dasar angsuran dikurangi kompensasi untuk tahun pajak berjalan), syarat pengurangan 75% (PER-11/PJ/2025 Pasal 119 ayat (1)), dan batas setor tanggal 15 (PMK 81/2024 Pasal 94 ayat (2)). Belum dicocokkan: butir pembayaran PPh 25 di Coretax yang dianggap sebagai penyampaian SPT Masa."
    },
    {
      id: "B6.10",
      slug: "hubungan-istimewa",
      judul: "Hubungan istimewa, PKKU, dan lampiran transaksi afiliasi (ringkas)",
      estimasiMenit: 10,
      jenisDominan: ["klasifikasi", "hitung"],
      ringkasan: [
        "Hubungan istimewa (Pasal 18 ayat (4)) terjadi bila: (a) kepemilikan langsung atau tidak langsung paling rendah 25%, atau hubungan antara dua WP atau lebih yang sama-sama dimiliki paling rendah 25% oleh pihak yang sama; (b) penguasaan melalui manajemen atau teknologi walaupun tanpa kepemilikan, termasuk bila para pihak secara komersial atau finansial diketahui atau menyatakan diri berada dalam satu grup usaha yang sama (PP 55/2022 Pasal 33; PMK 172/2023 Pasal 2 ayat (5)); (c) hubungan keluarga sedarah atau semenda dalam garis lurus dan/atau ke samping satu derajat.",
        "Kepemilikan tidak langsung dihitung berantai: A memiliki 50% B dan B memiliki 50% C → A memiliki 25% C secara tidak langsung (berhubungan istimewa).",
        "DJP berwenang menentukan kembali penghasilan dan biaya transaksi afiliasi berdasarkan prinsip kewajaran dan kelaziman usaha (PKKU/arm's length) (Pasal 18 ayat (3)); selisihnya menjadi koreksi positif dan dapat diikuti penyesuaian sekunder (selisih diperlakukan sebagai dividen) menurut PMK 172/2023.",
        "Dokumentasi penentuan harga transfer wajib menurut ambang PMK 172/2023 (Pasal 16 ayat (3) dan (4)): Dokumen Induk dan Dokumen Lokal harus tersedia paling lama 4 bulan setelah akhir tahun pajak dan ikhtisarnya dilampirkan pada SPT Tahunan PPh Badan; Laporan per Negara bagi grup besar harus tersedia paling lama 12 bulan setelah akhir tahun pajak dan dilampirkan pada SPT Tahunan tahun pajak berikutnya.",
        "Transaksi afiliasi dan pernyataan dokumentasi dilaporkan pada lampiran transaksi hubungan istimewa SPT 1771 (lampiran khusus 3A/3A-1/3A-2 format lama); penyertaan modal dan utang-piutang dengan pemegang saham/afiliasi pada 1771-VI. Format lama hanya untuk Tahun Pajak sampai 2024 (Pasal 138 huruf a PER-11/PJ/2025); sejak Tahun Pajak 2025 padanannya Lampiran 10A sampai 10D (transaksi hubungan istimewa, pernyataan, dan ikhtisar dokumen induk dan dokumen lokal) serta Lampiran 2 Bagian B (penyertaan modal, utang, dan piutang pada perusahaan afiliasi)."
      ],
      poinKunci: [
        { label: "Ambang kepemilikan", nilai: "≥ 25% langsung/tidak langsung", dasar: "Pasal 18 ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        {
          label: "Keluarga",
          nilai: "sedarah/semenda satu derajat (lurus dan ke samping)",
          dasar: "Pasal 18 ayat (4) huruf c UU PPh",
          berlakuSejak: "2009-01-01"
        },
        {
          label: "Dokumentasi TP tersedia",
          nilai: "paling lama 4 bulan setelah akhir tahun pajak",
          dasar: "PMK 172/2023",
          berlakuSejak: "2023-12-29"
        }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) dan (4) UU PPh", catatan: "kewenangan koreksi dan definisi hubungan istimewa" },
        { pasal: "PP 55/2022 Pasal 33; PMK 172/2023 Pasal 2 ayat (5)", catatan: "hubungan istimewa karena penguasaan, termasuk para pihak yang diketahui atau menyatakan diri satu grup usaha" },
        { pasal: "PMK 172/2023", catatan: "PKKU, dokumentasi TP, MAP, APA; mencabut PMK 213/2016, 49/2019, 22/2020" }
      ],
      jebakan: [
        {
          teks: "Mengalikan persentase berantai secara keliru atau menganggap kepemilikan tidak langsung 12% sudah berhubungan istimewa — kecuali ada penguasaan, termasuk para pihak diketahui atau menyatakan diri satu grup usaha",
          tagSebab: "salah-hitung"
        },
        { teks: "Menganggap hubungan istimewa hanya karena kepemilikan, melupakan penguasaan manajemen", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PT P memiliki 60% PT Q; PT Q memiliki 50% PT R. Berapa kepemilikan tidak langsung PT P pada PT R dan apakah berhubungan istimewa?",
        jawaban: "30%; berhubungan istimewa",
        langkah: [["60% × 50%", "30%"], ["Ambang Pasal 18 ayat (4) huruf a", "≥ 25% → berhubungan istimewa"]]
      },
      verifikasi: "◐",
      peringatan: "Ambang dokumentasi TP sudah dicocokkan dengan PMK 172/2023 Pasal 16 ayat (3) dan (4): peredaran bruto tahun sebelumnya lebih dari Rp50 miliar; transaksi afiliasi barang berwujud lebih dari Rp20 miliar atau selain barang berwujud masing-masing lebih dari Rp5 miliar; afiliasi di yurisdiksi bertarif lebih rendah; Laporan per Negara bila peredaran bruto konsolidasi paling sedikit Rp11 triliun. Rujukan PP 55/2022 Pasal 33 dan penyesuaian sekunder belum dicocokkan dengan naskah."
    },
    {
      id: "B6.11",
      slug: "spt-1771",
      judul: "SPT Tahunan PPh Badan (1771): induk, lampiran, dokumen, tenggat, sanksi",
      estimasiMenit: 14,
      jenisDominan: ["baris-spt", "prosedur"],
      ringkasan: [
        "Batas penyampaian SPT Tahunan PPh Badan paling lama 4 bulan setelah akhir tahun pajak (30 April untuk tahun buku kalender; tahun buku Juli–Juni → 31 Oktober); dapat diperpanjang paling lama 2 bulan dengan pemberitahuan disertai penghitungan sementara dan bukti pelunasan (Pasal 3 ayat (3) huruf c dan ayat (4)–(5) UU KUP).",
        "Terlambat menyampaikan SPT Tahunan PPh Badan dikenai denda Rp1.000.000 (Pasal 7 ayat (1) UU KUP); kurang bayar yang dilunasi setelah batas waktu dikenai bunga Pasal 9 ayat (2b) (tarif acuan + 5% dibagi 12 per bulan, maks 24 bulan).",
        "Peta formulir (format 1771 yang diajarkan): Induk (PKP, PPh terutang, kredit, PPh 29/28A, angsuran PPh 25 tahun berikutnya); I rekonsiliasi fiskal; II HPP dan biaya usaha; III kredit pajak dalam negeri (PPh 22, 23); IV PPh final dan penghasilan bukan objek; V pemegang saham dan pengurus/komisaris; VI penyertaan modal serta utang-piutang afiliasi; lampiran khusus 1A penyusutan/amortisasi, 2A kompensasi kerugian, 3A transaksi hubungan istimewa/dokumentasi TP, 4A fasilitas penanaman modal, 5A cabang, 6A PPh 26 ayat (4) BUT, 7A kredit PPh 24, 8A transkrip laporan keuangan. Format ini hanya untuk Tahun Pajak sampai 2024 (Pasal 138 huruf a PER-11/PJ/2025). Sejak Tahun Pajak 2025 (PER-11/PJ/2025 Pasal 85, Coretax): Lampiran 1A–1L rekonsiliasi per sektor; 2 daftar kepemilikan (pemegang saham, pengurus, penyertaan, utang-piutang afiliasi); 3 PPh dipotong/dipungut pihak lain dan kredit PPh 24; 4 penghasilan final dan bukan objek; 6 angsuran PPh 25 tahun berjalan (ke induk Bagian G); 7 kompensasi kerugian; 9 penyusutan/amortisasi; 10A–10D hubungan istimewa dan dokumentasi TP; 11A biaya tertentu; 12A PPh 26 ayat (4); 13A–13C fasilitas.",
        "Dokumen yang dilampirkan: laporan keuangan (diaudit bila diwajibkan), daftar nominatif promosi/entertainment, daftar piutang yang dihapuskan, ikhtisar dokumentasi TP bila wajib, laporan utang swasta luar negeri/DER bila wajib.",
        "SPT dianggap tidak disampaikan bila tidak ditandatangani, tidak sepenuhnya dilampiri keterangan/dokumen yang disyaratkan, SPT lebih bayar disampaikan setelah 3 tahun dan WP telah ditegur, atau disampaikan setelah DJP melakukan pemeriksaan/menerbitkan SKP (Pasal 3 ayat (7) UU KUP).",
        "Pembetulan sukarela yang menyebabkan kurang bayar dikenai bunga Pasal 8 ayat (2) (acuan + 5%)/12 per bulan sejak jatuh tempo SPT sampai pembayaran; sejak PER-12/PJ/2026 pembetulan di Coretax memperhitungkan pembayaran yang telah terjadi."
      ],
      poinKunci: [
        { label: "Batas SPT badan", nilai: "4 bulan setelah akhir tahun pajak", dasar: "Pasal 3 ayat (3) huruf c UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Perpanjangan", nilai: "paling lama 2 bulan", dasar: "Pasal 3 ayat (4) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Denda SPT Tahunan badan", nilai: "Rp1.000.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        {
          label: "Bunga pembetulan/telat bayar PPh 29",
          nilai: "(acuan + 5%)/12 per bulan, maks 24 bulan",
          dasar: "Pasal 8 ayat (2) dan Pasal 9 ayat (2b) UU KUP s.t.d.t.d. UU 7/2021 (tarif bunga KMK sejak UU 11/2020)",
          berlakuSejak: "2020-11-02"
        },
        { label: "1771-V", nilai: "pemegang saham dan pengurus/komisaris", dasar: "Petunjuk pengisian SPT 1771", berlakuSejak: "2014-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3 ayat (3) huruf c, (4), (5), (7) UU KUP", catatan: "batas waktu, perpanjangan, SPT dianggap tidak disampaikan" },
        { pasal: "Pasal 7 ayat (1) UU KUP", catatan: "denda keterlambatan" },
        { pasal: "Pasal 8 ayat (2) dan Pasal 9 ayat (2b) UU KUP", catatan: "bunga pembetulan dan kurang bayar" },
        { pasal: "PER-11/PJ/2025; PER-12/PJ/2026", catatan: "format SPT Coretax dan pembetulan" }
      ],
      jebakan: [
        { teks: "Memakai batas 31 Maret (SPT OP) atau 30 April untuk tahun buku non-kalender", tagSebab: "salah-baca" },
        { teks: "Menulis denda Rp100.000 (SPT Tahunan OP) untuk SPT badan", tagSebab: "salah-klasifikasi" },
        { teks: "Tertukar 1771-V (pemegang saham/pengurus) dengan 1771-VI (penyertaan dan utang-piutang afiliasi)", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT G memakai tahun buku 1 Juli 2025–30 Juni 2026. Kapan batas akhir SPT Tahunan PPh Badan tanpa perpanjangan dan dengan perpanjangan maksimal?",
        jawaban: "31 Oktober 2026; dengan perpanjangan 31 Desember 2026",
        langkah: [["Akhir tahun buku", "30 Juni 2026"], ["+ 4 bulan", "31 Oktober 2026"], ["+ perpanjangan 2 bulan", "31 Desember 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Penomoran lampiran memakai format 1771 yang diajarkan (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017), yang menurut Pasal 138 huruf a PER-11/PJ/2025 hanya dipakai untuk Tahun Pajak sampai 2024; lampiran formulir lama itu belum dicocokkan ke naskah. Sejak SPT Tahun Pajak 2025, formulir disampaikan lewat Coretax dengan struktur lampiran baru (Pasal 85 ayat (1) dan Lampiran PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026), antara lain: Lampiran 2 Daftar Kepemilikan (pemegang saham, pengurus dan komisaris, serta penyertaan dan utang-piutang afiliasi), Lampiran 6 angsuran PPh tahun berjalan, Lampiran 7 kompensasi kerugian fiskal, Lampiran 10A daftar transaksi yang dipengaruhi hubungan istimewa, dan Lampiran 10D ikhtisar dokumen induk dan dokumen lokal. Pemetaan lampiran lainnya belum dicocokkan satu per satu."
    }
  ],
  soal: [
    {
      id: "B6-001",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 2 ayat (3) huruf b UU PPh: subjek pajak dalam negeri adalah badan yang didirikan atau bertempat kedudukan di Indonesia, kecuali unit tertentu dari badan pemerintah yang memenuhi kriteria: (1) pembentukannya berdasarkan ketentuan peraturan perundang-undangan; (2) pembiayaannya bersumber dari APBN atau APBD; (3) penerimaannya dimasukkan dalam anggaran Pemerintah Pusat atau Pemerintah Daerah; dan (4) pembukuannya diperiksa oleh aparat pengawasan fungsional negara.",
      stem: "Kantor konsultan pajak Anda menerima empat calon klien di Kabupaten Sukamaju pada Oktober 2026: (1) Perumda Air Minum Tirta Sukamaju, modal seluruhnya dari pemda dan sebagian labanya disetor ke kas daerah; (2) Badan Pendapatan Daerah yang dibentuk dengan perda, seluruh biayanya dari APBD, penerimaannya masuk APBD, dan pembukuannya diperiksa Inspektorat; (3) Yayasan Pendidikan Bina Bangsa yang menerima hibah APBD untuk gedung sekolah; (4) Koperasi Pegawai Pemda Sukamaju. Berdasarkan kutipan tersebut, entitas yang BUKAN subjek PPh badan adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Perumda Air Minum Tirta Sukamaju, karena modalnya berasal dari pemerintah daerah",
        B: "Yayasan Pendidikan Bina Bangsa, karena menerima hibah APBD",
        C: "Koperasi Pegawai Pemda Sukamaju, karena anggotanya aparatur pemerintah",
        D: "Badan Pendapatan Daerah Kabupaten Sukamaju"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya unit pemerintah yang memenuhi keempat kriteria secara kumulatif yang dikecualikan; Bapenda memenuhi semuanya. Perumda (BUMD), yayasan, dan koperasi tetap subjek pajak badan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "BUMD dalam bentuk dan nama apa pun adalah subjek pajak badan; laba Perumda pun tidak seluruhnya masuk APBD.",
          B: "Hibah APBD hanya sebagian sumber dana; yayasan tidak dibentuk dengan peraturan perundang-undangan dan penerimaannya tidak masuk APBD.",
          C: "Koperasi adalah badan menurut UU KUP; status anggotanya tidak relevan."
        },
        jebakan: "Kriteria unit pemerintah bersifat kumulatif — satu kriteria tidak terpenuhi berarti tetap subjek pajak."
      },
      dasarHukum: [
        { pasal: "Pasal 2 ayat (3) huruf b UU PPh dan penjelasannya", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 1 angka 3 UU KUP", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-002",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Langit Biru Nusantara didirikan dengan akta notaris tanggal 15 Februari 2026, memperoleh pengesahan badan hukum tanggal 2 Maret 2026, terdaftar dan memperoleh NPWP di Coretax tanggal 20 Maret 2026, dan baru mulai berproduksi serta memperoleh penghasilan pertama pada Juni 2026. Direktur bertanya sejak kapan kewajiban pajak subjektif perseroan dimulai dan apa akibatnya terhadap SPT Tahunan 2026. Jawaban yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Sejak 15 Februari 2026 saat badan didirikan; SPT Tahunan 2026 tetap wajib disampaikan untuk bagian tahun pajak Februari–Desember 2026", B: "Sejak 2 Maret 2026 saat pengesahan badan hukum diterbitkan", C: "Sejak 20 Maret 2026 saat NPWP diterbitkan, karena kewajiban pajak baru ada setelah terdaftar", D: "Sejak Juni 2026 saat penghasilan pertama diperoleh, sehingga Februari–Mei tidak termasuk tahun pajak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 2A ayat (2): kewajiban subjektif badan dimulai saat badan didirikan atau bertempat kedudukan di Indonesia, yaitu tanggal akta pendirian.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pengesahan badan hukum adalah tindakan administratif korporasi, bukan saat pendirian menurut Pasal 2A.",
          C: "NPWP adalah sarana administrasi; kewajiban subjektif tidak bergantung pada pendaftaran.",
          D: "Mencampuradukkan kewajiban subjektif dengan kewajiban objektif (saat menerima penghasilan)."
        },
        jebakan: "Bedakan kewajiban subjektif (melekat sejak didirikan) dari kewajiban objektif (ada penghasilan) dan kewajiban administratif (NPWP)."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (2) UU PPh (UU 10/1994)", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-003",
      topik: "B6.1",
      tingkat: ["C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "Novak Engineering GmbH, badan dari negara yang belum memiliki P3B dengan Indonesia, mengirim tim insinyurnya untuk memberikan jasa konsultansi pabrik di Karawang selama 75 hari antara Februari dan Mei 2025 (dalam satu periode 12 bulan) dengan imbalan Rp2.400.000.000. PKP atas kegiatan di Indonesia setelah pembukuan Rp1.000.000.000 dan seluruh laba setelah pajak dikirim ke kantor pusat (tidak ditanamkan kembali). Total PPh badan dan PPh Pasal 26 ayat (4) yang terutang untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp220.000.000", B: "Rp480.000.000", C: "Rp288.000.000", D: "Rp376.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jasa lebih dari 60 hari dalam 12 bulan menimbulkan BUT; BUT membayar PPh 22% atas PKP dan PPh 26 ayat (4) 20% atas laba setelah pajak, kecuali seluruh laba itu ditanamkan kembali di Indonesia (Pasal 1 ayat (3) PMK 14/PMK.03/2011).",
        jejakHitung: [
          ["Jasa 75 hari > 60 hari dalam 12 bulan", "BUT"],
          ["PPh badan = 22% × 1.000.000.000", "Rp220.000.000"],
          ["Laba setelah pajak = 1.000.000.000 − 220.000.000", "Rp780.000.000"],
          ["PPh 26 ayat (4) = 20% × 780.000.000", "Rp156.000.000"],
          ["Total", "Rp376.000.000"]
        ],
        mengapaSalah: {
          A: "Melupakan branch profit tax Pasal 26 ayat (4).",
          B: "Memperlakukan imbalan sebagai penghasilan WPLN tanpa BUT (PPh 26 20% × bruto), padahal time test terlampaui.",
          C: "Menerapkan Pasal 31E (11%) yang hanya untuk WP badan dalam negeri, bukan BUT."
        },
        jebakan: "Begitu BUT terbentuk, pemajakan berpindah dari PPh 26 atas bruto ke PPh badan atas laba plus branch profit tax."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) huruf m UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 26 ayat (4) UU PPh; PMK 14/PMK.03/2011", berlakuSejak: "2011-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-004",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      laporanUjian: ["B-2026-10"],
      stem: "Pihak-pihak berikut memperoleh penghasilan atau menjalankan kegiatan di Indonesia pada 2026. Semua pihak di bawah ini tidak termasuk subjek pajak menurut Pasal 3 UU PPh, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Kedutaan besar negara sahabat yang memberikan perlakuan timbal balik",
        B: "Kantor perwakilan organisasi internasional yang ditetapkan Menteri Keuangan, Indonesia menjadi anggotanya, dan tidak menjalankan usaha di Indonesia",
        C: "Kantor perwakilan organisasi internasional yang menyewakan sebagian ruang kantornya kepada perusahaan swasta untuk memperoleh penghasilan",
        D: "Pejabat konsulat berkewarganegaraan asing yang tidak menjalankan usaha atau pekerjaan lain di Indonesia, dengan asas timbal balik"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Organisasi internasional dikecualikan hanya bila tidak menjalankan usaha atau kegiatan lain untuk memperoleh penghasilan dari Indonesia (selain pinjaman kepada pemerintah dari iuran anggota); menyewakan ruang kantor menghilangkan pengecualian.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kantor perwakilan negara asing dikecualikan berdasarkan Pasal 3 ayat (1) huruf a.",
          B: "Memenuhi seluruh syarat pengecualian Pasal 3 ayat (1) huruf c.",
          D: "Pejabat diplomatik/konsulat dikecualikan sepanjang bukan WNI dan tidak menjalankan usaha di Indonesia, dengan asas timbal balik."
        },
        jebakan: "Pengecualian organisasi internasional bersyarat; begitu ada kegiatan usaha di Indonesia, syaratnya gugur."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a–d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B6-005",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Kencana Agro Lestari (badan dalam negeri) memiliki 10% saham PT Sawit Prima (badan dalam negeri, bukan perseroan terbuka). Pada Mei 2026 PT Kencana menerima dividen tunai Rp500.000.000 yang dibagikan dari laba tahun berjalan 2025. Staf PT Sawit Prima bertanya apakah harus membuat bukti potong PPh Pasal 23, sedangkan staf PT Kencana bertanya perlakuannya dalam rekonsiliasi fiskal 2026. Perlakuan yang benar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Objek PPh 23 15% karena kepemilikan kurang dari 25% dan bukan dari laba ditahan; PPh 23 Rp75.000.000 dapat dikreditkan PT Kencana",
        B: "Bukan objek PPh tanpa syarat persentase kepemilikan atau investasi; tidak dipotong PPh 23; di PT Kencana dikoreksi negatif Rp500.000.000",
        C: "Dikenai PPh final 10% sebesar Rp50.000.000 karena tidak diinvestasikan di Indonesia paling sedikit 3 tahun",
        D: "Bukan objek hanya bila PT Kencana menginvestasikan dividen itu di Indonesia paling lambat akhir bulan ketiga setelah tahun pajak"
      },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak UU Cipta Kerja (dipertahankan UU HPP), dividen dari dalam negeri yang diterima badan dalam negeri dikecualikan dari objek tanpa syarat apa pun, sehingga tidak dipotong PPh 23 dan dikeluarkan dari laba fiskal.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Syarat kepemilikan ≥ 25% dan laba ditahan adalah aturan lama sebelum November 2020.",
          C: "PPh final 10% dan syarat investasi 3 tahun hanya berlaku bagi penerima orang pribadi.",
          D: "Syarat investasi paling lambat akhir bulan ketiga juga berlaku untuk orang pribadi (PMK 18/2021), bukan badan."
        },
        jebakan: "Jangan membawa syarat dividen orang pribadi atau syarat lama 25% ke penerima badan."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (3) huruf f angka 1 butir b UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 23 ayat (4) huruf c UU PPh", berlakuSejak: "2020-11-02" }
      ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-006",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Selain penjualan usaha, PT Mitra Cipta Teknologi (badan dalam negeri, peredaran bruto 2025 di atas Rp50 miliar) membukukan penghasilan luar usaha Tahun Pajak 2025: bunga deposito Rp120.000.000; sewa ruko kepada pihak lain Rp240.000.000; royalti perangkat lunak dari pelanggan (dipotong PPh 23) Rp300.000.000; keuntungan penjualan saham di Bursa Efek Indonesia Rp90.000.000; laba selisih kurs atas piutang valas Rp45.000.000; dan dividen dari PT anak dalam negeri Rp200.000.000. Jumlah penghasilan luar usaha yang tetap digabung dalam penghasilan neto fiskal (dikenai tarif umum) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp545.000.000", B: "Rp435.000.000", C: "Rp585.000.000", D: "Rp345.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", C: "final-nonfinal" },
      pembahasan: {
        inti: "Hanya royalti dan laba selisih kurs yang dikenai tarif umum; bunga deposito, sewa ruko, dan penjualan saham di bursa dikenai PPh final, sedangkan dividen DN bukan objek.",
        jejakHitung: [
          ["Bunga deposito (final 20%)", "dikeluarkan"],
          ["Sewa ruko (final 10%)", "dikeluarkan"],
          ["Saham di bursa (final 0,1% × nilai transaksi)", "dikeluarkan"],
          ["Dividen DN (bukan objek)", "dikeluarkan"],
          ["Royalti + selisih kurs = 300.000.000 + 45.000.000", "Rp345.000.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan dividen DN Rp200.000.000 yang bukan objek.",
          B: "Memasukkan keuntungan saham di bursa Rp90.000.000 yang sudah final.",
          C: "Memasukkan sewa ruko Rp240.000.000 yang dikenai PPh final Pasal 4 ayat (2)."
        },
        jebakan: "Petakan setiap penghasilan ke tiga keranjang: tarif umum, final, bukan objek — baru jumlahkan."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2017 (sewa tanah dan/atau bangunan)", berlakuSejak: "2018-01-02" }, { pasal: "PP 131/2000", berlakuSejak: "2001-01-01" }, { pasal: "PP 14/1997", berlakuSejak: null }, { pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-007",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Yayasan Pendidikan Cahaya Ilmu, badan nirlaba bidang pendidikan yang terdaftar pada instansi pembina, memperoleh sisa lebih Tahun 2025 Rp800.000.000 dan berencana membangun laboratorium sekolah. Agar sisa lebih itu dikecualikan dari objek PPh, sisa lebih harus ditanamkan kembali dalam bentuk sarana dan prasarana pendidikan dalam jangka waktu paling lama ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "2 tahun sejak sisa lebih diperoleh",
        B: "4 tahun sejak sisa lebih diperoleh",
        C: "4 bulan setelah akhir tahun pajak, bersamaan dengan batas SPT badan",
        D: "1 tahun sejak sisa lebih diperoleh, sebelum SPT tahun berikutnya disampaikan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Sisa lebih badan nirlaba pendidikan/litbang bukan objek bila ditanamkan kembali dalam sarana dan prasarana paling lama 4 tahun sejak diperoleh.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Angka 2 tahun tidak dikenal untuk ketentuan ini.",
          C: "Mencampur tenggat SPT badan dengan jangka penanaman kembali.",
          D: "Batas 1 tahun tidak dikenal; jangkanya 4 tahun, dan lewat batas itu sisa lebih menjadi objek."
        },
        jebakan: "Angka '4' muncul di dua tempat (4 bulan SPT badan, 4 tahun sisa lebih) — baca satuannya."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 68/PMK.03/2020", berlakuSejak: "2020-06-17" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B6-008",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Selama 2025 PT Graha Logam Jaya mencatat penerimaan berikut: setoran modal tunai dari investor baru sebagai pengganti saham Rp2.000.000.000; hibah mesin dari pemasok bahan baku utama (rekanan usaha) senilai Rp300.000.000; penggantian klaim asuransi kebakaran gudang Rp100.000.000; dan pembebasan utang dagang oleh kreditur Rp150.000.000. Jumlah penerimaan tersebut yang merupakan objek PPh adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.550.000.000", B: "Rp250.000.000", C: "Rp550.000.000", D: "Rp400.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setoran modal pengganti saham bukan objek; hibah dari rekanan usaha, penggantian asuransi atas harta, dan pembebasan utang adalah objek.",
        jejakHitung: [
          ["Setoran modal (Pasal 4 ayat (3) huruf c)", "bukan objek"],
          ["Hibah dari rekanan (ada hubungan usaha)", "Rp300.000.000"],
          ["Penggantian asuransi atas harta", "Rp100.000.000"],
          ["Pembebasan utang (Pasal 4 ayat (1) huruf k)", "Rp150.000.000"],
          ["Jumlah objek", "Rp550.000.000"]
        ],
        mengapaSalah: {
          A: "Setoran modal pengganti saham dikecualikan dari objek.",
          B: "Pengecualian hibah Pasal 4 ayat (3) huruf a angka 2 hanya bagi keluarga sedarah satu derajat, badan keagamaan/pendidikan/sosial, koperasi, dan OP usaha mikro-kecil, itu pun tanpa hubungan usaha; PT penerima hibah dari pemasok utama tidak memenuhi keduanya.",
          D: "Pembebasan utang oleh kreditur adalah objek Pasal 4 ayat (1) huruf k."
        },
        jebakan: "Kata 'hibah' tidak otomatis bukan objek — periksa hubungan pemberi dan penerima."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (3) huruf a angka 2 dan huruf c UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-009",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Samudra Niaga (bukan pengembang real estat) menjual gudang beserta tanahnya di Bekasi pada Agustus 2025 seharga Rp5.000.000.000 kepada perusahaan lain. Nilai sisa buku fiskal bangunan Rp1.200.000.000 dan harga perolehan tanah Rp1.800.000.000, sehingga laba komersial penjualan Rp2.000.000.000. PPh yang terutang atas transaksi tersebut dan perlakuannya dalam rekonsiliasi fiskal 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh badan tarif umum 22% × Rp2.000.000.000 = Rp440.000.000 dalam SPT 1771", B: "PPh final 2,5% × laba Rp2.000.000.000 = Rp50.000.000", C: "PPh final 2,5% × Rp5.000.000.000 = Rp125.000.000 yang dapat dikreditkan dalam SPT 1771", D: "PPh final 2,5% × Rp5.000.000.000 = Rp125.000.000 disetor sendiri sebelum akta ditandatangani; laba Rp2.000.000.000 dikoreksi negatif dan PPh final tidak dikreditkan" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-hitung", C: "final-nonfinal" },
      pembahasan: {
        inti: "Pengalihan hak atas tanah/bangunan dikenai PPh final 2,5% dari jumlah bruto nilai pengalihan, bukan dari laba; laba dikeluarkan dari penghasilan neto fiskal.",
        jejakHitung: [
          ["Dasar = jumlah bruto pengalihan", "Rp5.000.000.000"],
          ["PPh final 2,5%", "Rp125.000.000"],
          ["Koreksi negatif laba penjualan", "Rp2.000.000.000"]
        ],
        mengapaSalah: {
          A: "Penghasilan dari pengalihan tanah/bangunan tidak digabung dengan tarif umum.",
          B: "Dasar pengenaan adalah nilai bruto pengalihan, bukan laba.",
          C: "PPh final tidak dapat dikreditkan."
        },
        jebakan: "Untuk PPh final, dasar biasanya bruto — jangan memakai laba."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2016", berlakuSejak: "2016-09-07" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-010",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-01",
      stem: "Data PT Sinar Kriya Mandiri (produsen furnitur, Tahun Pajak 2025): laba komersial sebelum pajak Rp2.150.000.000, di dalamnya termasuk bunga deposito Rp150.000.000; dividen dari PT anak dalam negeri Rp300.000.000; biaya entertainment Rp120.000.000 (daftar nominatif hanya untuk Rp80.000.000); sumbangan tunai untuk operasional panti asuhan Rp25.000.000; sanksi bunga STP Rp12.000.000; penyusutan komersial Rp410.000.000 (penyusutan fiskal Rp360.000.000); makan siang seluruh pegawai di kantin Rp180.000.000; dan beban penyisihan piutang tak tertagih Rp63.000.000. Penghasilan neto fiskal PT Sinar Kriya Mandiri 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.070.000.000", B: "Rp2.190.000.000", C: "Rp1.827.000.000", D: "Rp1.890.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Koreksi positif: entertainment tanpa daftar nominatif, sumbangan non-PP 93/2010, sanksi pajak, selisih penyusutan, dan penyisihan piutang; koreksi negatif: bunga deposito (final) dan dividen DN (bukan objek). Makan siang seluruh pegawai dapat dibiayakan.",
        jejakHitung: [
          ["Koreksi positif = 40 + 25 + 12 + 50 + 63 (juta)", "Rp190.000.000"],
          ["Koreksi negatif = 150 + 300 (juta)", "Rp450.000.000"],
          ["Neto fiskal = 2.150.000.000 + 190.000.000 − 450.000.000", "Rp1.890.000.000"]
        ],
        mengapaSalah: {
          A: "Mengoreksi positif makan siang Rp180.000.000 — natura pegawai dapat dibiayakan sejak UU HPP (dan makan bersama sudah dikecualikan sebelum itu).",
          B: "Tidak mengeluarkan dividen DN Rp300.000.000 yang bukan objek.",
          C: "Menganggap penyisihan piutang dapat dibiayakan; bagi perusahaan non-bank pembentukan cadangan dikoreksi positif."
        },
        jebakan: "Kerjakan sistematis: daftar koreksi positif dan negatif terpisah sebelum menjumlah."
      },
      dasarHukum: [
        { pasal: "Pasal 9 ayat (1) huruf c, g, h, k UU PPh", berlakuSejak: "2022-01-01" },
        { pasal: "Pasal 4 ayat (2) dan ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 6 ayat (1) huruf a UU PPh (UU HPP); PP 55/2022", berlakuSejak: "2022-01-01" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-011",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-01",
      stem: "Melanjutkan data PT Sinar Kriya Mandiri: penghasilan neto fiskal Tahun Pajak 2025 Rp1.890.000.000; sisa kerugian fiskal yang belum terkompensasi berasal dari Tahun Pajak 2019 Rp100.000.000 dan Tahun Pajak 2020 Rp200.000.000; peredaran bruto 2025 (termasuk penghasilan final dan bukan objek) Rp24.000.000.000; perusahaan tidak memanfaatkan PPh final UMKM. PPh badan terutang 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp314.820.000", B: "Rp371.800.000", C: "Rp334.620.000", D: "Rp380.250.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Rugi 2019 hangus (batas 2024); hanya rugi 2020 yang dikompensasikan sehingga PKP Rp1.690.000.000, lalu Pasal 31E diterapkan karena peredaran bruto Rp24 miliar ≤ Rp50 miliar.",
        jejakHitung: [
          ["PKP = 1.890.000.000 − 200.000.000 (rugi 2020)", "Rp1.690.000.000"],
          ["PKP fasilitas = 4,8/24 × 1.690.000.000", "Rp338.000.000"],
          ["PKP non-fasilitas", "Rp1.352.000.000"],
          ["11% × 338.000.000", "Rp37.180.000"],
          ["22% × 1.352.000.000", "Rp297.440.000"],
          ["PPh terutang", "Rp334.620.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengompensasikan rugi 2019 yang sudah melewati 5 tahun (2020–2024).",
          B: "Tidak menerapkan Pasal 31E (22% × PKP) padahal fasilitas bersifat wajib.",
          D: "Memakai tarif 25% dan 12,5% dari era sebelum 2020."
        },
        jebakan: "Dua ketentuan sekaligus: umur kerugian (5 tahun sesudah tahun rugi) dan proporsi Pasal 31E."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 17 ayat (1) huruf b dan Pasal 31E ayat (1) UU PPh", berlakuSejak: "2022-01-01" },
        { pasal: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-012",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-01",
      stem: "PT Sinar Kriya Mandiri menghitung PPh terutang Tahun Pajak 2025 Rp334.620.000. Pajak yang telah dipotong, dipungut, dan dibayar selama 2025: PPh 22 impor bahan baku Rp48.000.000; PPh 23 atas jasa desain yang dipotong pelanggan (bukti potong BPPU) Rp22.620.000; angsuran PPh 25 Januari–Desember Rp180.000.000; dan PPh final atas bunga deposito yang dipotong bank Rp30.000.000. PPh Pasal 29 yang harus dilunasi sebelum SPT Tahunan disampaikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp54.000.000", B: "Rp121.180.000", C: "Rp84.000.000", D: "Rp264.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kredit pajak hanya PPh 22, PPh 23, dan PPh 25; PPh final bunga deposito tidak dapat dikreditkan.",
        jejakHitung: [["Kredit = 48.000.000 + 22.620.000 + 180.000.000", "Rp250.620.000"], ["PPh 29 = 334.620.000 − 250.620.000", "Rp84.000.000"]],
        mengapaSalah: {
          A: "Ikut mengkreditkan PPh final bunga deposito Rp30.000.000.",
          B: "Memakai PPh terutang tanpa Pasal 31E (Rp371.800.000).",
          D: "Lupa mengkreditkan angsuran PPh 25 Rp180.000.000."
        },
        jebakan: "PPh final yang dipotong pihak lain tetap tidak bisa dikreditkan walaupun ada bukti potongnya."
      },
      dasarHukum: [
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (2) UU PPh; PP 131/2000", berlakuSejak: "2001-01-01" }
      ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-013",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B6-01",
      stem: "PT Sinar Kriya Mandiri (peredaran bruto 2025 Rp24.000.000.000, termasuk penghasilan final dan bukan objek) menyampaikan SPT 1771 Tahun Pajak 2025 pada 24 April 2026 dengan penghasilan neto fiskal Rp1.890.000.000, kompensasi kerugian Tahun Pajak 2020 Rp200.000.000 yang menghabiskan sisa kerugiannya (rugi 2019 sudah hangus; tidak ada lagi sisa kerugian yang dapat dikompensasikan pada 2026), PPh terutang Rp334.620.000, PPh 22 Rp48.000.000, PPh 23 Rp22.620.000, PPh 25 yang dibayar Rp180.000.000, dan PPh 29 Rp84.000.000. Angsuran PPh 25 Masa Desember 2025 sebesar Rp15.000.000. Tidak ada permohonan pengurangan angsuran dan tidak ada penghasilan tidak teratur. Besarnya angsuran PPh 25 untuk Masa Pajak Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.300.000", B: "Rp22.000.000", C: "Rp25.300.000", D: "Rp15.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Karena SPT 2025 memuat kompensasi kerugian, angsuran 2026 dihitung menurut Pasal 25 ayat (6) huruf a UU PPh: PPh atas penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, dikurangi PPh 22/23/24 tahun lalu, lalu dibagi 12. Rugi 2020 habis dikompensasikan pada 2025 dan rugi 2019 sudah hangus, sehingga sisanya nol dan dasarnya neto penuh Rp1.890.000.000, dikenai tarif seperti PPh terutang (Pasal 31E berlaku karena peredaran bruto Rp24 miliar). Angsuran baru berlaku sejak bulan SPT disampaikan (24 April 2026, sekaligus bulan batas waktu), sehingga Masa Mei 2026 memakai angsuran baru; disetor paling lambat tanggal 15 bulan berikutnya.",
        jejakHitung: [
          ["Sisa kerugian yang masih dapat dikompensasikan pada 2026 (rugi 2020 habis pada 2025, rugi 2019 hangus)", "Rp0"],
          ["Dasar = penghasilan neto 2025 − 0", "Rp1.890.000.000"],
          ["PKP fasilitas Pasal 31E = 4,8 ÷ 24 × 1.890.000.000", "Rp378.000.000"],
          ["PPh = 11% × 378.000.000 + 22% × 1.512.000.000 = 41.580.000 + 332.640.000", "Rp374.220.000"],
          ["Dikurangi PPh 22 dan 23 = 374.220.000 − 70.620.000", "Rp303.600.000"],
          ["Angsuran = 303.600.000 ÷ 12 (berlaku sejak Masa April 2026, termasuk Mei)", "Rp25.300.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengurangkan angsuran PPh 25 yang dibayar selama 2025: (303.600.000 − 180.000.000) ÷ 12; PPh 25 tahun lalu tidak dikurangkan dalam rumus angsuran.",
          B: "Memakai PPh terutang setelah kompensasi: (334.620.000 − 70.620.000) ÷ 12; bila ada kompensasi kerugian, Pasal 25 ayat (6) huruf a menghitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, yang di sini nol.",
          D: "Angsuran Desember hanya dipakai untuk bulan-bulan sebelum SPT disampaikan (di sini Januari–Maret 2026)."
        },
        jebakan: "Kompensasi kerugian yang habis pada tahun lalu tidak lagi mengurangi dasar angsuran tahun berjalan, jadi PPh terutang di SPT tidak dapat langsung dibagi 12; PPh 25 tahun lalu juga tidak dikurangkan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1), (2), dan (6) huruf a UU PPh beserta Penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 232 ayat (4)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 113 ayat (2) huruf a dan Pasal 114 serta Lampiran (petunjuk pengisian Lampiran 6 dan Lampiran 7 SPT PPh Badan); menggantikan KEP-537/PJ/2000", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-014",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Dalam laporan laba rugi 2025 PT Rasa Nusantara Foods terdapat biaya promosi Rp520.000.000 (iklan media, pameran, sponsorship acara, dan produk sampel untuk toko) serta biaya entertainment Rp150.000.000. Daftar nominatif yang dilampirkan pada SPT hanya mencakup biaya promosi Rp430.000.000 dan entertainment Rp110.000.000; sisanya tidak dapat diidentifikasi penerimanya. Total koreksi fiskal positif atas kedua pos tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp90.000.000", B: "Rp335.000.000", C: "Rp40.000.000", D: "Rp130.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Biaya promosi dan entertainment yang tidak tercantum dalam daftar nominatif tidak dapat dikurangkan.",
        jejakHitung: [
          ["Promosi tanpa daftar nominatif = 520.000.000 − 430.000.000", "Rp90.000.000"],
          ["Entertainment tanpa daftar nominatif = 150.000.000 − 110.000.000", "Rp40.000.000"],
          ["Koreksi positif", "Rp130.000.000"]
        ],
        mengapaSalah: {
          A: "Hanya mengoreksi promosi; entertainment juga wajib daftar nominatif.",
          B: "Menerapkan pembatasan 50% yang tidak dikenal untuk promosi/entertainment.",
          C: "Hanya mengoreksi entertainment."
        },
        jebakan: "Daftar nominatif adalah syarat formal: tanpa itu, biaya ditolak seluruhnya untuk bagian yang tidak tercantum."
      },
      dasarHukum: [
        { pasal: "PMK 02/PMK.03/2010", berlakuSejak: "2010-01-05" },
        { pasal: "SE-27/PJ.22/1986", berlakuSejak: "1986-09-23" },
        { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-015",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Bara Sentosa membukukan biaya Tahun Pajak 2025 berikut: makan siang di kantin untuk seluruh pegawai Rp240.000.000; sewa rumah tinggal non-komunal untuk direktur operasional (pegawai, bukan pemegang saham) Rp15.000.000 per bulan selama 12 bulan; keanggotaan klub golf yang diberikan sebagai fasilitas kepada manajer pemasaran Rp60.000.000; dan biaya liburan keluarga pemegang saham yang bukan pegawai Rp40.000.000. Seluruh bukti lengkap dan pemotongan PPh 21 atas natura telah dilakukan sesuai PMK 66/2023. Total koreksi fiskal positif atas pos-pos tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp280.000.000", B: "Rp100.000.000", C: "Rp220.000.000", D: "Rp40.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak Tahun Pajak 2022 natura/kenikmatan kepada pegawai dapat dibiayakan sepanjang terkait 3M, tanpa melihat apakah bagi penerima dikecualikan atau menjadi objek PPh 21; yang dikoreksi hanya biaya kepentingan pribadi pemegang saham.",
        jejakHitung: [
          ["Makan siang seluruh pegawai", "dapat dibiayakan"],
          ["Rumah dinas 12 × 15.000.000 = 180.000.000", "dapat dibiayakan"],
          ["Fasilitas golf pegawai", "dapat dibiayakan"],
          ["Liburan keluarga pemegang saham", "koreksi positif Rp40.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai aturan pra-UU HPP: rumah dinas, golf, dan liburan dikoreksi (180 + 60 + 40 juta).",
          B: "Menganggap fasilitas golf tidak dapat dibiayakan karena golf tidak dikecualikan bagi penerima — batas PMK 66/2023 mengatur sisi penerima, bukan pemberi kerja.",
          C: "Menganggap rumah dinas di atas Rp2 juta/bulan tidak dapat dibiayakan — batas itu menentukan objek PPh 21 penerima."
        },
        jebakan: "Pisahkan sisi pemberi kerja (dapat dibiayakan) dari sisi penerima (objek atau dikecualikan menurut PMK 66/2023)."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf b UU PPh (UU HPP)", berlakuSejak: "2022-01-01" },
        { pasal: "PP 55/2022 (natura dan kenikmatan)", berlakuSejak: "2022-12-20" },
        { pasal: "PMK 66/2023", berlakuSejak: "2023-07-01" }
      ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-016",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "PP 93/2010: sumbangan dalam rangka penanggulangan bencana nasional, penelitian dan pengembangan, fasilitas pendidikan, pembinaan olahraga, dan pembangunan infrastruktur sosial dapat dikurangkan dari penghasilan bruto sepanjang, antara lain, WP mempunyai penghasilan neto fiskal berdasarkan SPT tahun pajak sebelumnya, sumbangan tidak menyebabkan rugi pada tahun pajak sumbangan diberikan, dan nilainya dalam 1 tahun tidak melebihi 5% dari penghasilan neto fiskal tahun pajak sebelumnya.",
      stem: "PT Prima Kemasindo memperoleh penghasilan neto fiskal Tahun Pajak 2024 Rp1.200.000.000. Pada 2025 perusahaan memberikan sumbangan penanggulangan bencana nasional melalui lembaga penerima yang memenuhi syarat Rp80.000.000 (bukti lengkap) serta sumbangan untuk acara peringatan HUT kemerdekaan di lingkungan warga Rp20.000.000. Penghasilan neto fiskal 2025 sebelum memperhitungkan sumbangan Rp1.500.000.000. Berdasarkan kutipan tersebut, koreksi fiskal positif atas sumbangan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000.000", B: "Rp25.000.000", C: "Rp40.000.000", D: "Rp100.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sumbangan bencana dibatasi 5% dari neto fiskal tahun sebelumnya (Rp60.000.000); kelebihan Rp20.000.000 dan sumbangan HUT yang bukan jenis PP 93/2010 dikoreksi positif.",
        jejakHitung: [
          ["Batas = 5% × 1.200.000.000 (neto fiskal 2024)", "Rp60.000.000"],
          ["Kelebihan sumbangan bencana = 80.000.000 − 60.000.000", "Rp20.000.000"],
          ["Sumbangan HUT (Pasal 9 ayat (1) huruf g)", "Rp20.000.000"],
          ["Koreksi positif", "Rp40.000.000"],
          ["Uji tidak menimbulkan rugi: 1.500.000.000 − 60.000.000 > 0", "terpenuhi"]
        ],
        mengapaSalah: {
          A: "Membiayakan seluruh sumbangan bencana tanpa batas 5%.",
          B: "Menghitung batas dari neto fiskal tahun berjalan (5% × 1.500.000.000 = 75.000.000).",
          D: "Menolak seluruh sumbangan, padahal sumbangan bencana nasional dapat dikurangkan dalam batas PP 93/2010."
        },
        jebakan: "Batas 5% memakai neto fiskal tahun pajak SEBELUMNYA."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf i–m UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 93/2010 (berlaku sejak Tahun Pajak 2010, Pasal 10)", berlakuSejak: "2010-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-017",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Sumber Elektrik (perusahaan dagang, bukan bank atau lembaga pembiayaan) pada akhir 2025 menghapus empat piutang yang masing-masing bernilai di atas batas debitur kecil. Seluruhnya telah dibebankan dalam laba rugi komersial dan dicantumkan dalam daftar piutang yang dilampirkan pada SPT. Bukti tambahan: piutang (1) perkara penagihannya telah diserahkan ke Pengadilan Negeri; (2) telah dipublikasikan dalam penerbitan umum; (3) ada perjanjian tertulis pembebasan utang dengan debitur; (4) hanya didukung tiga surat tagihan yang tidak dijawab debitur. Piutang yang TIDAK dapat dibebankan sebagai biaya fiskal adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: {
        A: "Piutang (4) yang hanya didukung surat tagihan tanpa jawaban debitur",
        B: "Piutang (1) yang perkaranya telah diserahkan ke Pengadilan Negeri",
        C: "Piutang (2) yang telah dipublikasikan dalam penerbitan umum",
        D: "Piutang (3) yang memiliki perjanjian tertulis pembebasan utang"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Selain dibebankan dan dicantumkan dalam daftar piutang, harus ada salah satu bukti: perkara diserahkan ke PN/PUPN, perjanjian tertulis pembebasan utang, publikasi, atau pengakuan debitur. Surat tagihan biasa tidak termasuk.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Penyerahan perkara ke PN adalah salah satu bukti yang diakui; tidak perlu menunggu putusan.",
          C: "Publikasi dalam penerbitan umum atau khusus diakui sebagai bukti.",
          D: "Perjanjian tertulis pembebasan utang diakui sebagai bukti."
        },
        jebakan: "Syarat ketiga bersifat alternatif (cukup salah satu), syarat pertama dan kedua kumulatif."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 207/PMK.010/2015", berlakuSejak: "2015-11-11" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-018",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Dalam rekonsiliasi fiskal 2025, PT Andalas Cipta Mesin (tarif 22% tanpa fasilitas Pasal 31E) mencatat: penyusutan komersial melebihi penyusutan fiskal Rp50.000.000; beban cadangan imbalan pascakerja yang belum dibayar Rp120.000.000; penyisihan piutang tak tertagih Rp30.000.000; entertainment tanpa daftar nominatif Rp25.000.000; sanksi bunga STP Rp8.000.000; dan bunga deposito Rp40.000.000. Menurut PSAK 212 (d/h PSAK 46), aset pajak tangguhan yang timbul dari koreksi tahun 2025 tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp51.260.000", B: "Rp44.000.000", C: "Rp35.200.000", D: "Rp50.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "final-nonfinal", D: "angka-usang" },
      pembahasan: {
        inti: "Hanya beda temporer (penyusutan, cadangan imbalan kerja, penyisihan piutang) yang menimbulkan pajak tangguhan; beda tetap (entertainment, sanksi, penghasilan final) tidak.",
        jejakHitung: [["Beda temporer positif = 50 + 120 + 30 (juta)", "Rp200.000.000"], ["Aset pajak tangguhan = 22% × 200.000.000", "Rp44.000.000"]],
        mengapaSalah: {
          A: "Memasukkan beda tetap entertainment dan sanksi ((200 + 25 + 8) juta × 22%).",
          C: "Mengurangkan bunga deposito final ((200 − 40) juta × 22%); penghasilan final adalah beda tetap.",
          D: "Memakai tarif lama 25%."
        },
        jebakan: "Pertanyaan lintas Akuntansi Perpajakan: klasifikasikan dulu tetap vs temporer, baru kalikan tarif yang berlaku saat pemulihan."
      },
      dasarHukum: [
        { pasal: "PSAK 212 Pajak Penghasilan (d/h PSAK 46)", berlakuSejak: "2024-01-01" },
        { pasal: "Pasal 9 ayat (1) huruf c dan Pasal 11 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-019",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Karya Properti Mandiri memperoleh penghasilan Tahun Pajak 2025 berupa imbalan jasa manajemen gedung (tarif umum) Rp10.000.000.000 dan sewa ruang kantor yang dikenai PPh final 10% Rp2.000.000.000. Biaya administrasi dan umum Rp600.000.000 dipakai bersama untuk kedua kegiatan dan tidak dapat dipisahkan; perusahaan membebankan seluruhnya dalam penghitungan penghasilan neto. Koreksi fiskal positif atas biaya bersama tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000.000", B: "Rp120.000.000", C: "Rp0", D: "Rp600.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Biaya untuk penghasilan final tidak dapat dikurangkan; biaya bersama yang tidak dapat dipisahkan dialokasikan secara proporsional terhadap total penghasilan.",
        jejakHitung: [
          ["Total penghasilan = 10.000.000.000 + 2.000.000.000", "Rp12.000.000.000"],
          ["Proporsi final = 2/12", "16,67%"],
          ["Alokasi ke penghasilan final = 2/12 × 600.000.000", "Rp100.000.000"]
        ],
        mengapaSalah: {
          B: "Membagi dengan penghasilan tarif umum saja (2/10), bukan total penghasilan.",
          C: "Mengabaikan larangan membiayakan biaya untuk penghasilan final.",
          D: "Menolak seluruh biaya bersama padahal sebagian terkait penghasilan tarif umum."
        },
        jebakan: "Penyebut alokasi adalah total penghasilan (final + tidak final)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) dan Pasal 9 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 27 ayat (1) dan (2) (pembukuan terpisah; biaya bersama yang tidak dapat dipisahkan dialokasikan secara proporsional)", berlakuSejak: "2010-12-30" }, { pasal: "PP 94/2010 Pasal 13 huruf a (biaya untuk penghasilan yang dikenai PPh final tidak boleh dikurangkan)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-020",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Cakrawala Beton (bukan bank, lembaga pembiayaan, atau asuransi; tidak bergerak di bidang infrastruktur; penghasilannya tidak dikenai PPh final) pada 2025 memiliki rata-rata saldo akhir bulan utang berbunga Rp25.000.000.000 (pinjaman bank dan pinjaman dari induk) dan rata-rata saldo akhir bulan modal Rp4.000.000.000. Biaya pinjaman 2025 (bunga dan provisi) Rp1.500.000.000; bunga kepada induk telah diuji sesuai prinsip kewajaran. Koreksi fiskal positif biaya pinjaman berdasarkan ketentuan DER adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.260.000.000", B: "Rp0", C: "Rp540.000.000", D: "Rp1.500.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "DER 6,25:1 melebihi 4:1, sehingga biaya pinjaman yang dapat dibebankan dibatasi (4 × modal ÷ utang) × biaya pinjaman; sisanya dikoreksi positif.",
        jejakHitung: [
          ["DER = 25.000.000.000 ÷ 4.000.000.000", "6,25 : 1"],
          ["Proporsi boleh = (4 × 4.000.000.000) ÷ 25.000.000.000", "0,64"],
          ["Biaya pinjaman boleh = 0,64 × 1.500.000.000", "Rp960.000.000"],
          ["Koreksi positif = 1.500.000.000 − 960.000.000", "Rp540.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai modal ÷ utang tanpa dikali 4 (4/25 × 1,5 miliar = 240 juta diakui).",
          B: "Menganggap DER hanya berlaku untuk utang kepada afiliasi; DER mencakup seluruh utang berbunga.",
          D: "Menolak seluruh biaya pinjaman; yang ditolak hanya bagian di atas batas 4:1."
        },
        jebakan: "Saldo yang dipakai adalah rata-rata saldo akhir bulan, dan modal termasuk pinjaman tanpa bunga dari pihak afiliasi."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 169/PMK.010/2015 Pasal 2–4", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-021",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B6-02",
      kutipan: "Pasal 11 ayat (3) UU PPh: Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan, penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut.",
      stem: "Data PT Arunika Logistik (PKP, Tahun Pajak 2025): pembangunan gudang permanen dimulai Februari 2025 dengan biaya dikeluarkan bertahap Februari–Juli, selesai dan mulai dipakai Juli 2025, total biaya Rp3.600.000.000; perusahaan memilih masa manfaat 20 tahun. Berdasarkan kutipan tersebut, penyusutan fiskal gudang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp165.000.000", B: "Rp180.000.000", C: "Rp75.000.000", D: "Rp90.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Gudang adalah harta dalam pengerjaan, sehingga penyusutan dimulai Juli 2025 (bulan selesai): 6 bulan × tarif 5% bangunan permanen.",
        jejakHitung: [
          ["Penyusutan setahun = 5% × 3.600.000.000", "Rp180.000.000"],
          ["Bulan Juli–Desember", "6 bulan"],
          ["Penyusutan 2025 = 180.000.000 × 6/12", "Rp90.000.000"]
        ],
        mengapaSalah: {
          A: "Mulai dari bulan pengeluaran pertama (Februari, 11 bulan).",
          B: "Memakai tarif 10% bangunan tidak permanen (atau setahun penuh).",
          C: "Mulai Agustus (bulan setelah selesai), padahal bulan selesai sudah dihitung."
        },
        jebakan: "Pengecualian Pasal 11 ayat (3) untuk harta dalam pengerjaan — bulan selesainya ikut dihitung."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (3) dan ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-022",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-02",
      stem: "PT Arunika Logistik pada 2025 memperoleh tiga harta baru: gudang permanen Rp3.600.000.000 yang selesai dan dipakai Juli 2025 (masa manfaat dipilih 20 tahun); komputer dan server Kelompok 1 yang dibeli 3 Maret 2025 Rp240.000.000 dengan metode saldo menurun; dan truk baru yang menurut lampiran PMK 72/2023 termasuk Kelompok 2, dibeli 20 Mei 2025 Rp720.000.000 dengan metode garis lurus. Total penyusutan fiskal ketiga harta itu untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp250.000.000", B: "Rp200.000.000", C: "Rp390.000.000", D: "Rp340.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hitung per harta dengan tarif kelompok dan metode masing-masing, pro rata sejak bulan perolehan (gudang sejak bulan selesai).",
        jejakHitung: [
          ["Gudang = 5% × 3.600.000.000 × 6/12", "Rp90.000.000"],
          ["Komputer = 50% × 240.000.000 × 10/12 (Maret–Desember)", "Rp100.000.000"],
          ["Truk = 12,5% × 720.000.000 × 8/12 (Mei–Desember)", "Rp60.000.000"],
          ["Total", "Rp250.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai garis lurus 25% untuk komputer (Rp50.000.000) padahal metode yang dipilih saldo menurun.",
          C: "Menghitung setahun penuh untuk ketiga harta (180 + 120 + 90 juta).",
          D: "Memakai tarif 10% untuk gudang permanen (180 juta untuk 6 bulan)."
        },
        jebakan: "Tiga variabel per harta: kelompok, metode, dan jumlah bulan — salah satu saja keliru, totalnya meleset."
      },
      dasarHukum: [
        { pasal: "Pasal 11 ayat (1), (2), (3), (6) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 72/2023 dan lampirannya", berlakuSejak: "2023-07-17" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-023",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-02",
      stem: "PT Arunika Logistik menjual truk lama (Kelompok 2) pada 10 Oktober 2025 seharga Rp320.000.000 kepada pihak tidak berelasi. Nilai sisa buku fiskal truk pada saat dijual Rp255.000.000, sedangkan nilai buku komersialnya Rp200.000.000, sehingga laporan laba rugi mencatat laba penjualan aset Rp120.000.000. Koreksi fiskal atas transaksi penjualan truk tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp55.000.000",
        B: "Koreksi negatif Rp120.000.000 karena laba penjualan harta bukan objek PPh",
        C: "Koreksi negatif Rp55.000.000",
        D: "Koreksi negatif Rp320.000.000 karena penjualan kendaraan dikenai PPh final"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Laba fiskal = harga jual − nilai sisa buku fiskal = Rp65.000.000, lebih kecil dari laba komersial Rp120.000.000, sehingga dikoreksi negatif Rp55.000.000.",
        jejakHitung: [
          ["Laba komersial = 320.000.000 − 200.000.000", "Rp120.000.000"],
          ["Laba fiskal = 320.000.000 − 255.000.000", "Rp65.000.000"],
          ["Koreksi = 65.000.000 − 120.000.000", "negatif Rp55.000.000"]
        ],
        mengapaSalah: {
          A: "Arah koreksi terbalik: laba fiskal lebih kecil dari laba komersial.",
          B: "Keuntungan pengalihan harta adalah objek PPh (Pasal 4 ayat (1) huruf d).",
          D: "Penjualan kendaraan tidak termasuk objek PPh final Pasal 4 ayat (2)."
        },
        jebakan: "Nilai sisa buku fiskal biasanya lebih besar dari komersial bila penyusutan fiskal lebih lambat — laba fiskalnya lebih kecil."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf d dan Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-024",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-02",
      stem: "PT Arunika Logistik (PKP) menjual truk lama yang semula digunakan untuk kegiatan usaha (bukan barang dagangan) seharga Rp320.000.000 pada 10 Oktober 2025. Pajak masukan saat pembelian truk tersebut dahulu telah dikreditkan. Truk bukan barang mewah dan PT Arunika bukan penyalur kendaraan bermotor bekas. PPN yang terutang dan wajib dibuatkan faktur pajak atas penyerahan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp38.400.000", B: "Rp35.200.000", C: "Tidak terutang PPN karena truk bukan barang dagangan", D: "Rp3.520.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penyerahan aktiva yang menurut tujuan semula tidak untuk diperjualbelikan tetap terutang PPN sepanjang pajak masukan saat perolehan dapat dikreditkan; tarif 12% atas DPP nilai lain 11/12 harga jual.",
        jejakHitung: [
          ["DPP nilai lain = 11/12 × 320.000.000", "Rp293.333.333"],
          ["PPN = 12% × 293.333.333", "Rp35.200.000"],
          ["Setara 11% × 320.000.000", "Rp35.200.000"]
        ],
        mengapaSalah: {
          A: "Mengabaikan DPP nilai lain 11/12 (12% × 320.000.000).",
          C: "Melupakan Pasal 16D UU PPN tentang penyerahan aktiva.",
          D: "Memakai besaran tertentu kendaraan bekas yang hanya untuk pengusaha penyalur kendaraan bermotor bekas."
        },
        jebakan: "Soal lintas kelompok: transaksi aset tetap berdampak di PPh (laba fiskal) dan PPN (Pasal 16D) sekaligus."
      },
      dasarHukum: [{ pasal: "Pasal 16D UU PPN", berlakuSejak: "2010-04-01" }, { pasal: "PMK 131/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-025",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Mahkota Hotelindo membeli bangunan hotel permanen (tidak termasuk tanah) pada 1 Februari 2025 seharga Rp7.200.000.000. Menurut pembukuan, masa manfaat bangunan 30 tahun, dan perusahaan memilih menyusutkan sesuai masa manfaat sebenarnya secara taat asas. Penyusutan fiskal Tahun Pajak 2025 atas bangunan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp330.000.000", B: "Rp240.000.000", C: "Rp660.000.000", D: "Rp220.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak UU HPP, bangunan permanen bermasa manfaat lebih dari 20 tahun boleh disusutkan sesuai masa manfaat sebenarnya (garis lurus), dihitung pro rata sejak bulan perolehan.",
        jejakHitung: [
          ["Setahun = 7.200.000.000 ÷ 30", "Rp240.000.000"],
          ["Februari–Desember", "11 bulan"],
          ["Penyusutan 2025 = 240.000.000 × 11/12", "Rp220.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai 20 tahun (5%), padahal WP memilih masa manfaat sebenarnya 30 tahun.",
          B: "Menghitung setahun penuh padahal perolehan Februari.",
          C: "Memakai tarif bangunan tidak permanen 10%."
        },
        jebakan: "Pilihan 20 tahun atau masa manfaat sebenarnya harus taat asas; baca pilihan WP di stem."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (6a) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }, { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-026",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Digital Kreasi membeli laptop untuk karyawan (Kelompok 1) pada Januari 2022 seharga Rp80.000.000 dan memakai metode saldo menurun secara taat asas sejak tahun perolehan. Tidak ada penjualan, penghapusan, atau penambahan atas laptop tersebut sampai akhir 2025. Penyusutan fiskal laptop untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.000.000", B: "Rp20.000.000", C: "Rp10.000.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Tahun 2025 adalah tahun terakhir masa manfaat 4 tahun (2022–2025); pada metode saldo menurun, nilai sisa buku akhir masa manfaat disusutkan sekaligus.",
        jejakHitung: [
          ["2022: 50% × 80.000.000", "Rp40.000.000"],
          ["2023: 50% × 40.000.000", "Rp20.000.000"],
          ["2024: 50% × 20.000.000", "Rp10.000.000"],
          ["2025 (tahun terakhir): sisa buku disusutkan sekaligus", "Rp10.000.000"]
        ],
        mengapaSalah: {
          A: "Tetap memakai 50% × sisa buku; pada tahun terakhir sisa buku dibebankan seluruhnya.",
          B: "Memakai garis lurus 25% × 80.000.000.",
          D: "Menganggap masa manfaat berakhir 2024."
        },
        jebakan: "Saldo menurun tidak pernah habis sendiri — Pasal 11 ayat (2) memerintahkan pembebanan sekaligus di akhir masa manfaat."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) dan ayat (6) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-027",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Baru Sejahtera mengeluarkan biaya pendirian (akta notaris, perizinan, dan pengesahan badan hukum) Rp120.000.000 pada 2025. Perlakuan fiskal yang diperbolehkan atas biaya tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Wajib diamortisasi 4 tahun tanpa pilihan pembebanan sekaligus",
        B: "Tidak dapat dibebankan karena menjadi bagian dari modal disetor",
        C: "Diamortisasi 20 tahun seperti bangunan permanen",
        D: "Dibebankan sekaligus pada tahun terjadinya atau diamortisasi menurut Pasal 11A"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 11A ayat (3): biaya pendirian dan perluasan modal dapat dibebankan pada tahun terjadinya atau diamortisasi.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ada pilihan dibebankan sekaligus.",
          B: "Biaya pendirian adalah biaya 3M yang dapat dibebankan, bukan modal.",
          C: "Tidak ada kaitan dengan tarif bangunan."
        },
        jebakan: "Biaya pendirian berbeda dengan harta tak berwujud lain: ada opsi beban sekaligus."
      },
      dasarHukum: [{ pasal: "Pasal 11A ayat (3) UU PPh", berlakuSejak: "2001-01-01" }],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "B6-028",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kutipan: "Pasal 6 ayat (2) UU PPh: Apabila penghasilan bruto setelah pengurangan sebagaimana dimaksud pada ayat (1) didapat kerugian, kerugian tersebut dikompensasikan dengan penghasilan mulai tahun pajak berikutnya berturut-turut sampai dengan 5 (lima) tahun.",
      stem: "Riwayat penghasilan neto fiskal PT Lintas Samudra Cargo: 2020 rugi Rp500.000.000; 2021 laba Rp100.000.000; 2022 laba Rp150.000.000; 2023 rugi Rp200.000.000; 2024 laba Rp80.000.000; dan 2025 laba Rp600.000.000 (sebelum kompensasi). Perusahaan tidak memperoleh fasilitas kompensasi lebih lama dan kerugian dikompensasikan mulai dari yang terlama. Berdasarkan kutipan tersebut, PKP Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp230.000.000", B: "Rp400.000.000", C: "Rp150.000.000", D: "Rp600.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rugi 2020 berlaku sampai 2025 (lima tahun sesudah tahun rugi) dan sisanya Rp170.000.000; rugi 2023 Rp200.000.000 utuh; keduanya terserap pada 2025.",
        jejakHitung: [
          ["Rugi 2020 terpakai 2021, 2022, 2024 = 100 + 150 + 80 (juta)", "Rp330.000.000"],
          ["Sisa rugi 2020 (batas 2025)", "Rp170.000.000"],
          ["Rugi 2023 (batas 2028)", "Rp200.000.000"],
          ["PKP 2025 = 600.000.000 − 170.000.000 − 200.000.000", "Rp230.000.000"]
        ],
        mengapaSalah: {
          B: "Menganggap rugi 2020 hangus setelah 2024 (menghitung tahun rugi sebagai tahun pertama).",
          C: "Lupa bahwa laba 2024 Rp80.000.000 sudah menyerap sebagian rugi 2020 (sisa dianggap Rp250.000.000).",
          D: "Tidak mengompensasikan kerugian sama sekali."
        },
        jebakan: "Hitung lima tahun mulai tahun SESUDAH rugi: rugi 2020 → 2021 s.d. 2025."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-029",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Wahana Kreatif Digital membukukan rugi komersial Tahun Pajak 2025 Rp300.000.000. Dalam rekonsiliasi fiskal terdapat koreksi positif Rp120.000.000 (sanksi pajak, entertainment tanpa daftar nominatif, dan selisih penyusutan) serta koreksi negatif Rp50.000.000 (bunga deposito yang telah dikenai PPh final). Jumlah kerugian yang dapat dikompensasikan ke tahun berikutnya dan tahun pajak terakhir pemanfaatannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp300.000.000, sampai Tahun Pajak 2030",
        B: "Rp230.000.000, sampai Tahun Pajak 2029",
        C: "Rp130.000.000, sampai Tahun Pajak 2030",
        D: "Rp230.000.000, sampai Tahun Pajak 2030"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Yang dikompensasikan adalah rugi fiskal setelah koreksi, berlaku lima tahun sesudah tahun rugi (2026–2030).",
        jejakHitung: [
          ["Rugi komersial", "−Rp300.000.000"],
          ["+ koreksi positif", "+Rp120.000.000"],
          ["− koreksi negatif", "−Rp50.000.000"],
          ["Rugi fiskal", "−Rp230.000.000"],
          ["Masa kompensasi", "2026–2030"]
        ],
        mengapaSalah: {
          A: "Memakai rugi komersial, bukan rugi fiskal.",
          B: "Menghitung tahun rugi sebagai tahun pertama.",
          C: "Menambahkan bunga deposito final, padahal penghasilan final dikeluarkan (koreksi negatif) sehingga rugi fiskal membesar."
        },
        jebakan: "Koreksi negatif memperbesar rugi fiskal; koreksi positif memperkecilnya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-030",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Global Arsitama (badan dalam negeri) pada Tahun Pajak 2025 memperoleh laba usaha dalam negeri, menderita rugi atas proyek yang dijalankan di Negara P, menerima bunga deposito, dan masih memiliki sisa rugi fiskal dalam negeri Tahun Pajak 2022. Pernyataan berikut tentang kompensasi kerugian benar, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Sisa rugi fiskal 2022 dapat dikompensasikan dengan laba usaha dalam negeri 2025", B: "Rugi proyek di Negara P dapat dikurangkan dari laba usaha dalam negeri 2025 sepanjang didukung laporan keuangan proyek", C: "Bunga deposito yang dikenai PPh final tidak dipakai untuk menyerap kerugian", D: "Sisa rugi fiskal 2022 yang tidak terpakai sampai Tahun Pajak 2027 hangus" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "final-nonfinal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kerugian usaha di luar negeri tidak dapat dikompensasikan dengan penghasilan dalam negeri; pernyataan lain benar.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Benar: rugi 2022 berlaku 2023–2027.",
          C: "Benar: penghasilan final sudah dikeluarkan dari neto fiskal.",
          D: "Benar: batas lima tahun berakhir 2027."
        },
        jebakan: "Rugi luar negeri juga tidak digabung saat menghitung PKP maupun batas kredit PPh 24, yang dihitung per jenis penghasilan untuk tiap negara (Pasal 4 ayat (3) dan Pasal 6 ayat (2) PMK 192/PMK.03/2018)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) dan Pasal 24 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-031",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Energi Hijau Andalan memperoleh fasilitas tax allowance berdasarkan PP 78/2019 untuk investasi pabrik baterai di kawasan industri. Pada tahun kedua produksi komersial perusahaan masih merugi. Menurut PP 78/2019, kerugian tersebut dapat dikompensasikan paling lama ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "5 tahun, sama dengan WP badan lainnya",
        B: "8 tahun tanpa syarat tambahan",
        C: "10 tahun, dengan tambahan tahun di atas 5 tahun sesuai kriteria yang dipenuhi",
        D: "selama masa fasilitas berlaku, tanpa batas jumlah tahun"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Salah satu fasilitas tax allowance adalah kompensasi kerugian lebih dari 5 tahun tetapi tidak lebih dari 10 tahun.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mengabaikan fasilitas PP 78/2019.",
          B: "Tambahan tahun bergantung pada kriteria (lokasi, tenaga kerja, litbang, bahan baku lokal), tidak otomatis 8 tahun.",
          D: "Ada batas maksimum 10 tahun."
        },
        jebakan: "Angka 10 tahun hanya untuk penerima fasilitas tertentu; WP umum tetap 5 tahun."
      },
      dasarHukum: [{ pasal: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12" }],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "B6-032",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Selama 2025 PT Teknika Solusi Integrasi menerima bukti potong/pungut berikut dari pelanggan: BPPU PPh 23 atas jasa teknik 2% × Rp500.000.000 = Rp10.000.000; bukti potong PPh 4 ayat (2) atas sewa ruang server miliknya 10% × Rp300.000.000 = Rp30.000.000; BPPU PPh 23 atas royalti perangkat lunak 15% × Rp200.000.000 = Rp30.000.000; bukti pungut PPh 22 oleh bendahara instansi pemerintah 1,5% × Rp400.000.000 = Rp6.000.000; dan bukti potong PPh 4 ayat (2) atas jasa pekerjaan konstruksi 2,65% × Rp1.000.000.000 = Rp26.500.000. Jumlah yang dapat dikreditkan dalam SPT Tahunan PPh Badan 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp102.500.000", B: "Rp46.000.000", C: "Rp40.000.000", D: "Rp72.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Yang dapat dikreditkan hanya PPh 23 (jasa teknik dan royalti) dan PPh 22 bendahara; PPh 4 ayat (2) atas sewa bangunan dan jasa konstruksi bersifat final.",
        jejakHitung: [
          ["PPh 23 jasa teknik", "Rp10.000.000"],
          ["PPh 23 royalti", "Rp30.000.000"],
          ["PPh 22 bendahara", "Rp6.000.000"],
          ["Jumlah kredit", "Rp46.000.000"]
        ],
        mengapaSalah: {
          A: "Menjumlahkan semua bukti potong termasuk PPh final.",
          C: "Lupa PPh 22 yang dipungut bendahara juga kredit pajak.",
          D: "Ikut mengkreditkan PPh final jasa konstruksi."
        },
        jebakan: "Soal lintas PPh Pot/Put: cek sifat final/tidak final tiap bukti potong sebelum dijumlahkan."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) huruf b dan c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2017", berlakuSejak: "2018-01-02" }, { pasal: "PP 9/2022", berlakuSejak: "2022-02-21" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-033",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Nusantara Konsultan Global (peredaran bruto di atas Rp50 miliar) Tahun Pajak 2025 memperoleh penghasilan neto dalam negeri Rp2.000.000.000; dari Negara X penghasilan neto Rp1.000.000.000 dengan pajak dibayar di sana Rp300.000.000; dari Negara Y penghasilan neto Rp500.000.000 dengan pajak dibayar Rp50.000.000; dan dari Negara Z rugi Rp200.000.000. PKP Rp3.500.000.000 (rugi Negara Z tidak digabung) dan PPh terutang Rp770.000.000. Jumlah PPh Pasal 24 yang dapat dikreditkan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp270.000.000", B: "Rp350.000.000", C: "Rp330.000.000", D: "Rp226.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas kredit dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018): jumlah paling sedikit antara pajak luar negeri dan (penghasilan jenis itu dari negara itu ÷ PKP) × PPh terutang. Di soal ini Negara X dan Negara Y masing-masing hanya memberi satu pos penghasilan neto, sehingga tiap negara diuji sendiri; rugi Negara Z tidak diperhitungkan (Pasal 4 ayat (3)).",
        jejakHitung: [
          ["Batas X = 1.000/3.500 × 770.000.000", "Rp220.000.000"],
          ["Kredit X = min(300.000.000; 220.000.000)", "Rp220.000.000"],
          ["Batas Y = 500/3.500 × 770.000.000", "Rp110.000.000"],
          ["Kredit Y = min(50.000.000; 110.000.000)", "Rp50.000.000"],
          ["Total PPh 24", "Rp270.000.000"]
        ],
        mengapaSalah: {
          B: "Mengkreditkan seluruh pajak LN yang dibayar tanpa batas maksimum.",
          C: "Memakai batas keseluruhan (1.500/3.500 × 770 juta), bukan per jenis penghasilan untuk tiap negara.",
          D: "Menggabungkan rugi Negara Z dengan penghasilan Negara X (batas X menjadi 800/3.500 × 770 juta)."
        },
        jebakan: "Kelebihan pajak di Negara X (Rp80.000.000) tidak dapat diperhitungkan dengan PPh terutang, tidak boleh dibiayakan, dan tidak dapat direstitusi (Pasal 7 PMK 192/PMK.03/2018)."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-034",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Bintang Timur Farma menyampaikan SPT 1771 Tahun Pajak 2025 secara lengkap pada 28 April 2026 dengan status lebih bayar Rp750.000.000 dan memilih pengembalian (restitusi). Perusahaan tidak termasuk WP kriteria tertentu dan tidak memakai pengembalian pendahuluan, sehingga DJP melakukan pemeriksaan. Menurut UU KUP, keputusan atas permohonan itu harus diterbitkan dalam jangka waktu paling lama ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "12 bulan sejak permohonan diterima lengkap; bila terlewati, permohonan dianggap dikabulkan dan SKPLB terbit paling lama 1 bulan kemudian",
        B: "6 bulan sejak SPT diterima; bila terlewati, permohonan dianggap ditolak",
        C: "12 bulan sejak SPT diterima; bila terlewati, permohonan dianggap ditolak dan WP dapat mengajukan keberatan",
        D: "1 bulan sejak SPT diterima, karena restitusi PPh badan diproses seperti pengembalian pendahuluan"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 17B UU KUP: SKP diterbitkan paling lama 12 bulan sejak permohonan diterima lengkap; lewat jangka waktu, permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan setelah jangka waktu berakhir.",
        jejakHitung: [],
        mengapaSalah: {
          B: "6 bulan adalah jangka keputusan permohonan Pasal 36, dan akibat lewat waktunya pun 'dikabulkan'.",
          C: "Akibat lewat waktu adalah dianggap dikabulkan, bukan ditolak.",
          D: "Pengembalian pendahuluan hanya untuk WP yang memenuhi syarat dan memilihnya."
        },
        jebakan: "Dalam KUP, diamnya DJP melewati jangka waktu umumnya berakibat 'dianggap dikabulkan'."
      },
      dasarHukum: [{ pasal: "Pasal 17B ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 28A UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-035",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 31E ayat (1) UU PPh: Wajib Pajak badan dalam negeri dengan peredaran bruto sampai dengan Rp50.000.000.000 mendapat fasilitas berupa pengurangan tarif sebesar 50% dari tarif sebagaimana dimaksud dalam Pasal 17 ayat (1) huruf b dan ayat (2a) yang dikenakan atas Penghasilan Kena Pajak dari bagian peredaran bruto sampai dengan Rp4.800.000.000.",
      stem: "PT Kriya Bambu Lestari terdaftar sejak 2019 dan memakai PPh final 0,5% sampai jangka waktu 3 tahun pajak untuk PT berakhir. Pada Tahun Pajak 2025 peredaran brutonya Rp4.200.000.000 dan PKP Rp380.000.000. Berdasarkan kutipan tersebut, PPh badan terutang 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp21.000.000", B: "Rp83.600.000", C: "Rp41.800.000", D: "Rp47.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Jangka waktu PPh final PT (2019–2021) telah habis, sehingga berlaku tarif umum; peredaran bruto ≤ Rp4,8 miliar membuat seluruh PKP memperoleh tarif 50% × 22% = 11%.",
        jejakHitung: [
          ["Jangka waktu final PT terdaftar 2019", "2019–2021 (habis)"],
          ["Peredaran bruto ≤ Rp4,8 miliar", "seluruh PKP fasilitas"],
          ["PPh = 11% × 380.000.000", "Rp41.800.000"]
        ],
        mengapaSalah: {
          A: "Tetap memakai PPh final 0,5% × omzet yang jangka waktunya sudah habis.",
          B: "Tidak menerapkan Pasal 31E yang wajib.",
          D: "Memakai 12,5% (50% × tarif lama 25%)."
        },
        jebakan: "Setelah keluar dari rezim final, WP kecil tidak langsung 22% — Pasal 31E otomatis berlaku."
      },
      dasarHukum: [
        { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PP 55/2022 Pasal 59 (jangka waktu lama, kini peralihan PP 20/2026)", berlakuSejak: "2022-12-20" }
      ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-036",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "Pada November 2026 empat calon klien menanyakan apakah dapat memakai PPh final 0,5% atas omzet (masing-masing peredaran bruto tahun sebelumnya di bawah Rp4,8 miliar dan belum pernah memilih tarif umum): (1) Koperasi Produsen Tani Makmur, terdaftar 2024; (2) CV Sinar Abadi, didirikan dan terdaftar Juni 2026; (3) PT Cahaya Niaga (bukan perseroan perorangan), terdaftar 2022; (4) perseroan perorangan milik seorang konsultan pajak, didirikan dan terdaftar Juli 2026, yang hanya menjual jasa konsultansi pajak. Menurut PP 55/2022 s.t.d.d. PP 20/2026, yang masih dapat memakai PPh final 0,5% pada 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Hanya (1)", B: "(1) dan (2)", C: "(1) dan (3)", D: "(1) dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasca-PP 20/2026 penerima baru hanya orang pribadi, perseroan perorangan, dan koperasi. Koperasi terdaftar 2024 (menurut PP 55/2022 berakhir TP 2027) termasuk koperasi lama yang dapat memakai PPh final sampai TP 2029 (PP 20/2026 Pasal II angka 1 huruf b), jadi 2026 tercakup. CV baru tidak lagi berhak, PT lama sudah habis jangka 3 tahunnya, dan perseroan perorangan yang didirikan ahli untuk jasa sejenis pekerjaan bebas dikecualikan; peralihan sampai akhir Tahun Pajak 2026 hanya bagi yang sudah dikenai PPh final berdasarkan PP 55/2022, sedangkan butir (4) baru terdaftar Juli 2026.",
        jejakHitung: [
          ["(1) Koperasi terdaftar 2024 (sebelum PP 20/2026)", "jangka PP 55/2022 s.d. TP 2027 → peralihan s.d. TP 2029 → 2026 boleh"],
          ["(2) CV terdaftar setelah 22 April 2026", "tidak boleh (subjek dipersempit)"],
          ["(3) PT terdaftar 2022: 3 tahun pajak", "2022–2024 → habis"],
          ["(4) Perseroan perorangan jasa sejenis pekerjaan bebas, terdaftar Juli 2026", "dikecualikan; tidak ada peralihan"],
          ["Yang masih dapat memakai pada 2026", "hanya (1)"]
        ],
        mengapaSalah: {
          B: "CV yang baru terdaftar setelah 22 April 2026 tidak lagi termasuk subjek PPh final; peralihan hanya untuk CV yang sudah memanfaatkan sebelumnya.",
          C: "Jangka waktu PT 3 tahun pajak (2022–2024) sudah berakhir.",
          D: "Perseroan perorangan yang didirikan ahli untuk menjual jasa sejenis jasa pekerjaan bebas dikecualikan oleh PP 20/2026; peralihan sampai akhir Tahun Pajak 2026 hanya bagi yang sudah dikenai PPh final berdasarkan PP 55/2022, sedangkan perseroan ini baru terdaftar Juli 2026."
        },
        jebakan: "Uji tiga hal berurutan: jenis subjek, tanggal terdaftar terhadap 22 April 2026 (menentukan ada tidaknya peralihan), dan jenis penghasilan (pekerjaan bebas)."
      },
      dasarHukum: [{ pasal: "PP 55/2022 Pasal 56–57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "PP 20/2026 (ketentuan peralihan)", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-037",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "CV Mandiri Rasa (usaha katering) terdaftar sejak 2023 dan sejak itu membayar PPh final 0,5% PP 55/2022. Peredaran bruto 2025 Rp3.900.000.000. Pada Mei 2026, setelah PP 20/2026 berlaku, omzetnya Rp320.000.000 dan seluruh pelanggannya orang pribadi sehingga tidak ada pemotongan. CV belum pernah memberitahukan memilih tarif umum. PPh atas omzet Masa Mei 2026 yang harus disetor sendiri adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0, karena omzet kumulatif belum melebihi Rp500.000.000",
        B: "Rp1.600.000",
        C: "Tidak ada PPh final; omzet masuk penghitungan PPh badan tarif umum dengan Pasal 31E",
        D: "Rp3.200.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "CV yang telah memanfaatkan PPh final sebelum 22 April 2026 tetap memakainya sampai jangka waktu lama berakhir (4 tahun pajak: 2023–2026); tarif 0,5% × omzet bulanan tanpa fasilitas Rp500 juta.",
        jejakHitung: [["Jangka waktu CV terdaftar 2023", "2023–2026"], ["PPh final = 0,5% × 320.000.000", "Rp1.600.000"]],
        mengapaSalah: {
          A: "Bagian omzet Rp500 juta tidak kena pajak hanya untuk WP orang pribadi.",
          C: "Mengabaikan ketentuan peralihan PP 20/2026.",
          D: "Memakai tarif 1% PP 46/2013."
        },
        jebakan: "PP 20/2026 tidak memutus WP lama seketika — periksa ketentuan peralihan dan sisa jangka waktunya."
      },
      dasarHukum: [{ pasal: "PP 55/2022 Pasal 57 dan 59 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22" }, { pasal: "PMK 164/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-038",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Sentra Distribusi Medika Tahun Pajak 2025 membukukan: penjualan neto (setelah retur dan potongan) Rp19.200.000.000; penghasilan sewa ruko yang dikenai PPh final Rp1.800.000.000; dan dividen dari PT anak dalam negeri Rp3.000.000.000. Setelah rekonsiliasi fiskal, PKP Rp2.000.000.000. Dengan definisi peredaran bruto menurut SE-02/PJ/2015 (termasuk penghasilan final dan bukan objek), PPh badan terutang 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp385.000.000", B: "Rp440.000.000", C: "Rp220.000.000", D: "Rp396.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Peredaran bruto Rp24 miliar (19,2 + 1,8 + 3) ≤ Rp50 miliar sehingga Pasal 31E berlaku dengan proporsi 4,8/24 = 20%.",
        jejakHitung: [
          ["Peredaran bruto = 19.200.000.000 + 1.800.000.000 + 3.000.000.000", "Rp24.000.000.000"],
          ["PKP fasilitas = 4,8/24 × 2.000.000.000", "Rp400.000.000"],
          ["11% × 400.000.000", "Rp44.000.000"],
          ["22% × 1.600.000.000", "Rp352.000.000"],
          ["PPh terutang", "Rp396.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai penjualan saja (Rp19,2 miliar) sebagai peredaran bruto → proporsi 25%.",
          B: "Tidak menerapkan Pasal 31E.",
          C: "Menerapkan 11% atas seluruh PKP seolah peredaran bruto ≤ Rp4,8 miliar."
        },
        jebakan: "Peredaran bruto Pasal 31E lebih luas dari 'penjualan' — penghasilan final dan bukan objek ikut dihitung."
      },
      dasarHukum: [{ pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-039",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Nusa Pangan Tbk pada Tahun Pajak 2025: 42% saham disetor tercatat dan diperdagangkan di BEI, dimiliki 1.250 pihak yang masing-masing memiliki kurang dari 5% saham disetor, dan kondisi itu terpenuhi selama 190 hari kalender; laporan kepemilikan dari biro administrasi efek dilampirkan pada SPT. Peredaran bruto Rp850.000.000.000 dan PKP Rp10.000.000.000. Kredit pajak 2025: PPh 22 impor Rp350.000.000, PPh 23 yang dipotong pelanggan Rp120.000.000, dan angsuran PPh 25 Rp1.200.000.000; selain itu bank memotong PPh final atas bunga deposito Rp40.000.000. PPh Pasal 29 PT Nusa Pangan Tbk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp230.000.000", B: "Rp530.000.000", C: "Rp190.000.000", D: "Rp330.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "final-nonfinal", D: "angka-usang" },
      pembahasan: {
        inti: "Seluruh syarat perseroan terbuka terpenuhi (≥ 40%, ≥ 300 pihak, masing-masing < 5%, ≥ 183 hari), sehingga tarif 22% − 3% = 19%; PPh 29 = PPh terutang dikurangi PPh 22, 23, dan 25, sedangkan PPh final bunga deposito tidak dikreditkan.",
        jejakHitung: [
          ["Uji syarat: 42% ≥ 40%; 1.250 ≥ 300; < 5%; 190 ≥ 183 hari", "terpenuhi"],
          ["Tarif = 22% − 3%", "19%"],
          ["PPh terutang = 19% × 10.000.000.000", "Rp1.900.000.000"],
          ["Kredit = 350.000.000 + 120.000.000 + 1.200.000.000", "Rp1.670.000.000"],
          ["PPh 29 = 1.900.000.000 − 1.670.000.000", "Rp230.000.000"]
        ],
        mengapaSalah: {
          B: "Menganggap syarat perseroan terbuka tidak terpenuhi dan memakai 22% (2.200.000.000 − 1.670.000.000).",
          C: "Ikut mengkreditkan PPh final bunga deposito Rp40.000.000 (1.900.000.000 − 1.710.000.000).",
          D: "Memakai tarif lama 20% (25% − 5%) dari era sebelum 2020 (2.000.000.000 − 1.670.000.000)."
        },
        jebakan: "Tiga varian tarif badan (22%, Tbk 19%, Pasal 31E) dan pemisahan PPh final dari kredit pajak sering digabung dalam satu soal PPh 29."
      },
      dasarHukum: [
        { pasal: "Pasal 17 ayat (2b) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" },
        { pasal: "PP 55/2022 (ketentuan perseroan terbuka)", berlakuSejak: "2022-12-20" },
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-040",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Kimia Hijau Nusantara memperoleh fasilitas tax allowance (PP 78/2019) atas penanaman modal baru di bidang industri yang ditetapkan. Realisasi aktiva tetap berwujud untuk kegiatan usaha utama sampai saat mulai berproduksi komersial pada 2025: tanah Rp40.000.000.000, bangunan pabrik Rp70.000.000.000, dan mesin Rp90.000.000.000. Besarnya pengurangan penghasilan neto per tahun berdasarkan fasilitas tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000.000.000 per tahun selama 6 tahun", B: "Rp60.000.000.000 sekaligus pada Tahun Pajak 2025", C: "Rp8.000.000.000 per tahun selama 6 tahun", D: "Rp12.000.000.000 per tahun selama 5 tahun" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengurangan penghasilan neto 30% dari nilai penanaman modal aktiva tetap berwujud termasuk tanah, dibebankan 5% per tahun selama 6 tahun.",
        jejakHitung: [
          ["Nilai investasi = 40 + 70 + 90 (miliar)", "Rp200.000.000.000"],
          ["30% × 200.000.000.000", "Rp60.000.000.000"],
          ["Per tahun = 5% × 200.000.000.000", "Rp10.000.000.000 × 6 tahun"]
        ],
        mengapaSalah: {
          B: "Fasilitas dibebankan bertahap, bukan sekaligus.",
          C: "Mengeluarkan tanah, padahal tanah termasuk nilai penanaman modal.",
          D: "Membagi 30% dalam 5 tahun."
        },
        jebakan: "Tanah tidak disusutkan, tetapi ikut dasar tax allowance."
      },
      dasarHukum: [{ pasal: "Pasal 31A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 78/2019 Pasal 3 ayat (1) huruf a dan ayat (4) huruf a", berlakuSejak: "2019-12-12" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-041",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Otomotif Presisi Indonesia bekerja sama dengan SMK dalam program praktik kerja dan pemagangan yang memenuhi syarat PMK 128/2019 dan pemberitahuannya telah disampaikan melalui sistem OSS sebelum kegiatan dimulai. Biaya program 2025 (honor instruktur, bahan praktik, dan uang saku peserta) Rp300.000.000 telah dibukukan sebagai beban. Jumlah pengurangan penghasilan bruto paling tinggi yang dapat dimanfaatkan atas kegiatan tersebut adalah ...",
      kataKualifikasi: ["paling tinggi"],
      opsi: { A: "Rp300.000.000", B: "Rp600.000.000", C: "Rp900.000.000", D: "Rp450.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Super deduction vokasi memberi pengurangan penghasilan bruto paling tinggi 200% dari biaya: 100% biaya riil ditambah tambahan pengurangan 100%.",
        jejakHitung: [
          ["Biaya riil (100%)", "Rp300.000.000"],
          ["Tambahan pengurangan (100%)", "Rp300.000.000"],
          ["Total paling tinggi (200%)", "Rp600.000.000"]
        ],
        mengapaSalah: {
          A: "Hanya membiayakan biaya riil tanpa tambahan.",
          C: "Memakai plafon 300% milik litbang.",
          D: "Memakai 150% yang tidak dikenal untuk fasilitas ini."
        },
        jebakan: "Vokasi 200%, litbang 300%: keduanya 'paling tinggi', bergantung syarat. Pemberitahuan untuk memperoleh tambahan pengurangan disampaikan melalui sistem OSS dengan melampirkan perjanjian kerja sama dan surat keterangan fiskal (PMK 128/PMK.010/2019 Pasal 7 ayat (1)), bukan lewat Coretax."
      },
      dasarHukum: [{ pasal: "PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29B ayat (1) (super deduction vokasi)", berlakuSejak: "2019-06-26" }, { pasal: "PMK 128/PMK.010/2019 Pasal 2 ayat (1) dan (2), Pasal 4, Pasal 7 ayat (1)", berlakuSejak: "2019-09-09" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-042",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Bio Inovasi Nusantara melakukan kegiatan penelitian dan pengembangan tertentu di Indonesia yang memenuhi syarat fasilitas pengurangan penghasilan bruto (super deduction) litbang menurut PMK 81/2024, pengganti PMK 153/PMK.010/2020. Menurut ketentuan tersebut, pengurangan penghasilan bruto paling tinggi yang dapat diberikan atas biaya litbang adalah ...",
      kataKualifikasi: ["paling tinggi"],
      opsi: { A: "300% dari biaya litbang (100% biaya + tambahan paling tinggi 200%)", B: "200% dari biaya litbang", C: "150% dari biaya litbang", D: "100% dari biaya litbang tanpa tambahan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Super deduction litbang memberikan pengurangan penghasilan bruto paling tinggi 300%: 100% biaya riil dan tambahan paling tinggi 200% yang diberikan bertahap menurut capaian (paten, komersialisasi, kerja sama).",
        jejakHitung: [],
        mengapaSalah: {
          B: "200% adalah plafon super deduction vokasi.",
          C: "150% bukan plafon fasilitas ini.",
          D: "Mengabaikan tambahan pengurangan litbang."
        },
        jebakan: "Tambahan 200% tidak otomatis penuh; diberikan bertahap sesuai capaian."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 432 ayat (1) sampai ayat (3) (mencabut PMK 153/PMK.010/2020)", berlakuSejak: "2025-01-01" }, { pasal: "PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29C ayat (1) (super deduction litbang, plafon 300%)", berlakuSejak: "2019-06-26" }],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "B6-043",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Silikon Pionir Indonesia (industri pionir, bukan bagian grup multinasional yang terkena pajak minimum global) memperoleh pengurangan PPh badan 50% berdasarkan PMK 130/2020 karena merealisasikan penanaman modal baru Rp350.000.000.000, untuk 5 tahun pajak sejak produksi komersial 2021 (2021–2025). Pada Tahun Pajak 2026 PKP Rp20.000.000.000 dan seluruh persyaratan tetap dipenuhi. PPh badan terutang 2026 setelah fasilitas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.200.000.000", B: "Rp3.300.000.000", C: "Rp4.400.000.000", D: "Rp0" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setelah masa pengurangan 50% berakhir, berlaku masa transisi 2 tahun pajak dengan pengurangan 25%; 2026 adalah tahun transisi pertama.",
        jejakHitung: [
          ["PPh sebelum fasilitas = 22% × 20.000.000.000", "Rp4.400.000.000"],
          ["Pengurangan transisi 25%", "Rp1.100.000.000"],
          ["PPh terutang 2026", "Rp3.300.000.000"]
        ],
        mengapaSalah: {
          A: "Masih memakai pengurangan 50% yang sudah berakhir 2025.",
          C: "Melupakan masa transisi 2 tahun.",
          D: "Menganggap pengurangan 100% (hanya untuk investasi paling sedikit Rp500 miliar)."
        },
        jebakan: "Tax holiday punya tiga tahap: masa pengurangan, masa transisi, lalu tarif normal."
      },
      dasarHukum: [{ pasal: "PMK 130/PMK.010/2020 Pasal 2 ayat (3) huruf b, ayat (5), dan ayat (6) huruf b s.t.d.d. PMK 69/2024", berlakuSejak: "2020-10-09" }, { pasal: "PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29 ayat (1)", berlakuSejak: "2019-06-26" }, { pasal: "Pasal 18 ayat (3) huruf e dan ayat (4) UU 25/2007 s.t.d.t.d. UU 6/2023 (Penanaman Modal)", berlakuSejak: "2022-12-30" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-044",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Delta Mekanika (tahun buku kalender) membayar angsuran PPh 25 Masa Desember 2025 sebesar Rp18.000.000. SPT Tahunan 2025 baru disampaikan pada 22 April 2026 dan menghasilkan angsuran baru Rp22.000.000 per bulan. Tidak ada permohonan pengurangan atau penetapan lain dari DJP. Angsuran PPh 25 yang harus dibayar untuk Masa Pajak Februari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp22.000.000", B: "Rp0, karena SPT Tahunan 2025 belum disampaikan", C: "Rp18.000.000", D: "Rp20.000.000, rata-rata angsuran lama dan baru" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk bulan-bulan sebelum SPT Tahunan disampaikan (sebelum batas waktu penyampaiannya), angsuran sama dengan angsuran bulan terakhir tahun pajak lalu. SPT 2025 disampaikan 22 April 2026, sehingga Masa Februari 2026 memakai angsuran Desember 2025.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Angsuran baru berlaku sejak bulan SPT disampaikan (April 2026), bukan surut ke Februari.",
          B: "Belum disampaikannya SPT tidak membuat angsuran nihil.",
          D: "Tidak ada mekanisme rata-rata."
        },
        jebakan: "Bulan-bulan sebelum SPT disampaikan memakai angsuran Desember tahun sebelumnya; bila SPT disampaikan lebih awal (mis. Februari), angsuran baru berlaku sejak bulan itu."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B6-045",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Prima Impor Sejahtera (importir bahan baku) melaporkan PPh terutang Tahun Pajak 2025 Rp300.000.000. Kredit pajak 2025: PPh 22 impor Rp180.000.000, PPh 23 yang dipotong pelanggan Rp132.000.000, dan angsuran PPh 25 Rp60.000.000, sehingga SPT menyatakan lebih bayar Rp72.000.000. Besarnya angsuran PPh 25 per bulan mulai Masa April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Nihil", B: "Rp25.000.000", C: "Rp10.000.000", D: "Rp14.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dasar angsuran = PPh terutang − PPh 22 − PPh 23 = negatif, sehingga angsuran nihil; PPh 25 tahun lalu tidak masuk rumus.",
        jejakHitung: [["Dasar = 300.000.000 − 180.000.000 − 132.000.000", "−Rp12.000.000"], ["Hasil ≤ 0", "angsuran nihil"]],
        mengapaSalah: {
          B: "Membagi PPh terutang dengan 12 tanpa mengurangkan kredit PPh 22 dan 23.",
          C: "Hanya mengurangkan PPh 22 ((300 − 180) juta ÷ 12).",
          D: "Hanya mengurangkan PPh 23 ((300 − 132) juta ÷ 12)."
        },
        jebakan: "Importir dengan PPh 22 besar sering berangsuran nihil — dan cenderung lebih bayar."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-046",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Sandang Prima Tekstil membayar angsuran PPh 25 tahun 2026 sebesar Rp30.000.000 per bulan berdasarkan SPT 2025 (dasar penghitungan setahun Rp360.000.000). Pada Juli 2026 pesanan ekspor anjlok dan proyeksi PPh terutang Tahun Pajak 2026 yang didukung laporan keuangan sementara hanya Rp250.000.000. Langkah yang sesuai ketentuan untuk menyesuaikan angsuran adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Langsung menurunkan sendiri pembayaran angsuran mulai Juli tanpa permohonan", B: "Tidak dapat dikurangi karena proyeksi masih di atas 50% dari dasar angsuran", C: "Tetap membayar Rp30.000.000 dan menunggu restitusi dalam SPT 2026, karena angsuran tahun berjalan tidak dapat diubah", D: "Mengajukan permohonan pengurangan angsuran PPh 25 ke KPP karena proyeksi kurang dari 75% dasar angsuran (Rp250.000.000 < Rp270.000.000)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengurangan angsuran dapat diajukan bila PPh terutang tahun berjalan diperkirakan kurang dari 75% dari PPh terutang yang menjadi dasar angsuran; besarnya ditetapkan DJP atas permohonan.",
        jejakHitung: [
          ["Batas = 75% × 360.000.000", "Rp270.000.000"],
          ["Proyeksi 2026", "Rp250.000.000 < batas → memenuhi"]
        ],
        mengapaSalah: {
          A: "Perubahan angsuran memerlukan keputusan DJP; menurunkan sendiri membuat angsuran kurang bayar.",
          B: "Ambangnya 75%, bukan 50%.",
          C: "Ada mekanisme pengurangan dalam tahun berjalan."
        },
        jebakan: "Ambang 75% dibandingkan dengan PPh terutang yang menjadi dasar angsuran, bukan dengan angsuran bulanan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 119 (pengurangan angsuran PPh Pasal 25; menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-047",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Konsultan menyiapkan memo dasar penghitungan angsuran PPh 25 tahun 2026 untuk beberapa klien badan dengan karakteristik berbeda (bank, BUMN, emiten, dan badan yang baru terdaftar). Pernyataan berikut sesuai Pasal 25 ayat (7) UU PPh dan peraturan pelaksanaannya, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Bank menghitung angsuran berdasarkan laporan keuangan yang disampaikan kepada Otoritas Jasa Keuangan", B: "WP badan yang baru terdaftar wajib membayar angsuran 0,75% dari peredaran bruto bulanan seperti WP orang pribadi pengusaha tertentu", C: "BUMN dan BUMD menghitung angsuran berdasarkan RKAP tahun berjalan yang telah disahkan RUPS", D: "WP masuk bursa dan WP lain yang wajib menyampaikan laporan keuangan berkala menghitung angsuran berdasarkan laporan keuangan berkala terakhir" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Tarif 0,75% dari peredaran bruto bulanan hanya untuk Wajib Pajak orang pribadi pengusaha tertentu (Pasal 25 ayat (7) huruf c UU PPh; PMK 81/2024 Pasal 234 ayat (1)). Wajib Pajak badan yang baru terdaftar tidak memakai skema itu: bila ia bank, Wajib Pajak masuk bursa, BUMN, BUMD, atau Wajib Pajak Lainnya, angsurannya mengikuti Pasal 227 sampai Pasal 229 (PMK 81/2024 Pasal 235); bila hasil penggabungan, peleburan, pengambilalihan, pemekaran, atau perubahan bentuk usaha, mengikuti Pasal 236; selain itu angsurannya pada tahun pajak berjalan ditetapkan nihil (PMK 81/2024 Pasal 237).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Benar: dasar angsuran bank adalah laporan keuangan yang disampaikan kepada OJK, berupa laporan posisi keuangan dan laporan laba rugi sejak awal tahun pajak sampai masa pajak yang dilaporkan (PMK 81/2024 Pasal 227 ayat (1); PMK 81/2024 mencabut PMK 215/PMK.03/2018).",
          C: "Benar: angsuran BUMN dan BUMD (selain yang merupakan bank, Wajib Pajak masuk bursa, atau Wajib Pajak Lainnya) dihitung dari penghasilan neto fiskal menurut Rencana Kerja dan Anggaran tahun pajak bersangkutan yang telah disahkan RUPS (PMK 81/2024 Pasal 229 ayat (1)).",
          D: "Benar: Wajib Pajak masuk bursa dan Wajib Pajak Lainnya memakai laporan keuangan yang disampaikan setiap 3 bulan kepada bursa dan/atau OJK; angsurannya berlaku untuk 3 masa pajak setelah periode yang dilaporkan (PMK 81/2024 Pasal 228 ayat (1) dan (5))."
        },
        jebakan: "Skema OPPT sering dicampur dengan badan baru, padahal keduanya diatur berbeda: OPPT membayar 0,75% dari peredaran bruto bulanan tiap tempat usaha, sedangkan badan baru biasa (bukan Wajib Pajak tertentu dan bukan hasil restrukturisasi) angsurannya nihil pada tahun pajak berjalan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (7) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 226 ayat (2), Pasal 227 sampai Pasal 229, Pasal 234 ayat (1), Pasal 235 sampai Pasal 237 (mencabut PMK 215/PMK.03/2018)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B6-048",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 18 ayat (4) UU PPh: hubungan istimewa dianggap ada apabila: a. Wajib Pajak mempunyai penyertaan modal langsung atau tidak langsung paling rendah 25% pada Wajib Pajak lain, hubungan antara Wajib Pajak dengan penyertaan paling rendah 25% pada dua Wajib Pajak atau lebih, atau hubungan di antara dua Wajib Pajak atau lebih yang disebut terakhir; b. Wajib Pajak menguasai Wajib Pajak lainnya atau dua atau lebih Wajib Pajak berada di bawah penguasaan yang sama baik langsung maupun tidak langsung; atau c. terdapat hubungan keluarga baik sedarah maupun semenda dalam garis keturunan lurus dan/atau ke samping satu derajat.",
      stem: "Struktur kepemilikan pada 2025: PT Alfa memiliki 30% saham PT Beta; PT Beta memiliki 40% saham PT Gama; Tuan Hendra memiliki 25% saham PT Delta dan 30% saham PT Epsilon. Tidak ada direksi atau komisaris yang sama, tidak ada penguasaan manajemen atau teknologi di antara perusahaan-perusahaan tersebut, dan tidak ada pihak yang secara komersial atau finansial diketahui atau menyatakan diri berada dalam satu grup usaha yang sama dengan pihak lain. Berdasarkan kutipan tersebut, pasangan yang TIDAK memiliki hubungan istimewa adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "PT Alfa dan PT Gama", B: "PT Alfa dan PT Beta", C: "PT Beta dan PT Gama", D: "PT Delta dan PT Epsilon" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penyertaan tidak langsung dihitung dengan mengalikan persentase di tiap mata rantai, seperti contoh di Penjelasan Pasal 18 ayat (4) huruf a UU PPh (PT A memiliki 50% PT B dan PT B memiliki 50% PT C, sehingga PT A memiliki 25% PT C). Penyertaan tidak langsung PT Alfa pada PT Gama hanya 30% × 40% = 12% (< 25%), tidak ada penguasaan, dan para pihak tidak diketahui atau menyatakan diri berada dalam satu grup usaha, sehingga keduanya tidak berhubungan istimewa.",
        jejakHitung: [
          ["Alfa → Beta", "30% ≥ 25% → istimewa"],
          ["Beta → Gama", "40% ≥ 25% → istimewa"],
          ["Alfa → Gama tidak langsung = 30% × 40%", "12% < 25% → tidak"],
          ["Delta–Epsilon: sama-sama dimiliki Tuan Hendra ≥ 25%", "istimewa"]
        ],
        mengapaSalah: {
          B: "Kepemilikan langsung 30% melampaui ambang 25%.",
          C: "Kepemilikan langsung 40% melampaui ambang 25%.",
          D: "Dua WP yang sama-sama dimiliki paling rendah 25% oleh pihak yang sama saling berhubungan istimewa."
        },
        jebakan: "Kepemilikan berantai dikalikan, bukan dijumlahkan atau diambil yang terkecil. Namun bila para pihak secara komersial atau finansial diketahui atau menyatakan diri berada dalam satu grup usaha yang sama, hubungan istimewa karena penguasaan dianggap ada (PP 55/2022 Pasal 33; PMK 172/2023 Pasal 2 ayat (5)) walaupun kepemilikan berantainya di bawah 25%."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (4) UU PPh dan penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "PP 55/2022 Pasal 33 (hubungan istimewa karena kepemilikan atau penyertaan modal, penguasaan, dan hubungan keluarga)", berlakuSejak: "2022-12-20" }, { pasal: "PMK 172/2023 Pasal 2 ayat (4) (kepemilikan paling rendah 25%) dan ayat (5) (penguasaan, termasuk satu grup usaha yang sama)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-049",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Mega Tekstil Indonesia (peredaran bruto Rp180 miliar, tarif umum) menjual kain kepada PT Mega Garmen seharga Rp8.000.000.000 pada 2025; PT Mega Tekstil dan PT Mega Garmen masing-masing 60% sahamnya dimiliki PT Mega Holding. Analisis kesebandingan menunjukkan harga wajar transaksi independen yang sebanding Rp10.000.000.000. Harga jual tersebut masih di atas harga pokok produksi. Bila DJP menerapkan Pasal 18 ayat (3) UU PPh, tambahan PPh badan PT Mega Tekstil (sebelum sanksi) akibat koreksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp220.000.000", C: "Rp440.000.000", D: "Rp500.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Penjualan kepada pihak afiliasi di bawah harga wajar dikoreksi ke harga wajar (koreksi positif Rp2.000.000.000), lalu dikenai tarif 22%.",
        jejakHitung: [["Koreksi primer = 10.000.000.000 − 8.000.000.000", "Rp2.000.000.000"], ["Tambahan PPh = 22% × 2.000.000.000", "Rp440.000.000"]],
        mengapaSalah: {
          A: "Harga di atas HPP tidak berarti wajar; ukuran PKKU adalah harga transaksi independen sebanding.",
          B: "Memakai 11% (Pasal 31E) padahal peredaran bruto di atas Rp50 miliar.",
          D: "Memakai tarif lama 25%."
        },
        jebakan: "Uji kewajaran membandingkan dengan transaksi independen, bukan dengan biaya."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) dan (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 172/2023", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-050",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sarana Kimia Utama (peredaran bruto Tahun Pajak 2024 Rp42 miliar) bertransaksi dengan pihak afiliasi dalam negeri dengan nilai yang sama pada 2024 maupun 2025: pembelian bahan baku Rp18 miliar dan pembayaran jasa manajemen kepada induk Rp6 miliar per tahun. Tidak ada transaksi dengan afiliasi di negara bertarif PPh lebih rendah dari Indonesia. Menurut PMK 172/2023, kewajiban dokumentasi penentuan harga transfer PT Sarana untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak wajib karena peredaran bruto di bawah Rp50 miliar dan pembelian barang dari afiliasi di bawah Rp20 miliar", B: "Wajib, tetapi Dokumen Induk dan Dokumen Lokal cukup disusun ketika diminta dalam pemeriksaan", C: "Wajib menyelenggarakan Dokumen Induk dan Dokumen Lokal karena transaksi afiliasi selain barang berwujud melebihi Rp5 miliar", D: "Wajib menyampaikan Laporan per Negara karena bertransaksi dengan induk" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kriteria wajib Dokumen Induk dan Dokumen Lokal bersifat alternatif. Tiga ambang nilai diukur pada tahun pajak sebelumnya (di sini 2024): peredaran bruto > Rp50 miliar, atau transaksi afiliasi barang berwujud > Rp20 miliar, atau transaksi afiliasi selain barang berwujud (jasa, bunga, pemanfaatan barang tidak berwujud, atau lainnya, masing-masing) > Rp5 miliar. Kriteria keempat tanpa ambang nilai: bertransaksi dengan afiliasi di yurisdiksi bertarif PPh lebih rendah daripada tarif Pasal 17 UU PPh. Jasa manajemen Rp6 miliar pada 2024 memicu kewajiban untuk Tahun Pajak 2025. Dokumen Induk dan Dokumen Lokal harus tersedia paling lama 4 bulan setelah akhir tahun pajak, dan ikhtisarnya dilampirkan pada SPT Tahunan.",
        jejakHitung: [
          ["Peredaran bruto 2024 Rp42 miliar", "≤ Rp50 miliar"],
          ["Barang berwujud 2024 Rp18 miliar", "≤ Rp20 miliar"],
          ["Jasa manajemen 2024 Rp6 miliar", "> Rp5 miliar → wajib untuk Tahun Pajak 2025"]
        ],
        mengapaSalah: {
          A: "Lupa ambang transaksi selain barang berwujud Rp5 miliar.",
          B: "Dokumen harus sudah tersedia paling lama 4 bulan setelah akhir tahun pajak, bukan disusun saat diminta.",
          D: "Laporan per Negara diwajibkan bagi entitas induk grup usaha dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun (dan, dalam kondisi tertentu, anggota grup yang entitas induknya di luar negeri), bukan karena bertransaksi dengan induk."
        },
        jebakan: "Satu ambang terlampaui sudah cukup untuk mewajibkan dokumentasi; ambang nilai diuji dengan data tahun pajak sebelumnya, bukan tahun berjalan."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh; PMK 172/2023 Pasal 16 ayat (3), (4), dan (5), Pasal 18 ayat (1), dan Pasal 19 ayat (1) dan (2)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-051",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Graha Investama (badan dalam negeri, peredaran bruto 2025 Rp64 miliar, tarif umum tanpa Pasal 31E) memiliki 40% saham PT Mitra Logam (badan dalam negeri, bukan perseroan terbuka) dan mencatat penyertaan itu dengan metode ekuitas. Laba komersial sebelum pajak Tahun Pajak 2025 Rp5.000.000.000, di dalamnya termasuk: (1) bagian laba PT Mitra Logam menurut metode ekuitas Rp1.200.000.000; dan (2) laba penjualan 5% saham PT Mitra Logam kepada pihak tidak berelasi Rp800.000.000, yaitu harga jual Rp2.500.000.000 dikurangi nilai tercatat metode ekuitas Rp1.700.000.000, sedangkan harga perolehan saham yang dijual Rp1.300.000.000. Dividen tunai dari PT Mitra Logam Rp500.000.000 dicatat mengurangi nilai penyertaan (tidak melalui laba rugi). Tidak ada koreksi fiskal lain. PPh badan terutang PT Graha Investama Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp836.000.000", B: "Rp924.000.000", C: "Rp1.100.000.000", D: "Rp660.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Secara fiskal penyertaan dicatat sebesar harga perolehan: bagian laba metode ekuitas bukan penghasilan (koreksi negatif), dividen DN yang diterima badan DN bukan objek, dan keuntungan penjualan saham non-bursa adalah objek tarif umum yang dihitung dari harga perolehan sehingga Rp400 juta lebih besar dari laba komersial.",
        jejakHitung: [
          ["Bagian laba metode ekuitas (bukan penghasilan fiskal)", "koreksi negatif Rp1.200.000.000"],
          ["Laba fiskal penjualan saham = 2.500.000.000 − 1.300.000.000", "Rp1.200.000.000"],
          ["Koreksi positif = 1.200.000.000 − 800.000.000", "Rp400.000.000"],
          ["Dividen Rp500.000.000 (bukan objek, tidak di laba rugi)", "tanpa koreksi"],
          ["Neto fiskal = 5.000.000.000 − 1.200.000.000 + 400.000.000", "Rp4.200.000.000"],
          ["PPh = 22% × 4.200.000.000", "Rp924.000.000"]
        ],
        mengapaSalah: {
          A: "Mengeluarkan bagian laba ekuitas tetapi tetap memakai laba penjualan komersial (dasar nilai tercatat metode ekuitas): 22% × 3.800.000.000.",
          C: "Tidak melakukan koreksi apa pun: bagian laba metode ekuitas ikut dipajaki dan laba penjualan memakai nilai tercatat (22% × 5.000.000.000).",
          D: "Menganggap keuntungan penjualan saham PT Mitra Logam final/bukan objek (22% × 3.000.000.000); PPh final 0,1% hanya untuk penjualan saham di bursa."
        },
        jebakan: "Soal penyertaan afiliasi memisahkan tiga hal: bagian laba ekuitas (bukan penghasilan fiskal), dividen (bukan objek), dan keuntungan penjualan saham (objek tarif umum dengan dasar harga perolehan)."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) huruf d dan ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 10 ayat (1) UU PPh (harga perolehan)", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 18 ayat (4) huruf a UU PPh (kepemilikan 40% → hubungan istimewa)", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-052",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.l5.1",
      stem: "Saat menyiapkan SPT Tahunan PPh Badan PT Arta Graha Tahun Pajak 2025, staf pajak harus melaporkan susunan pemegang saham beserta modal disetor masing-masing, serta daftar direksi dan komisaris. Menurut peta formulir 1771 yang diajarkan, data tersebut dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 1771-VI", B: "Lampiran 1771-I", C: "Lampiran 1771-V", D: "Lampiran khusus 3A" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dalam format 1771 yang diajarkan, 1771-V memuat daftar pemegang saham/pemilik modal dan susunan pengurus serta komisaris. Format 1771 itu hanya dipakai untuk Tahun Pajak sampai 2024 (Pasal 138 huruf a PER-11/PJ/2025). Untuk Tahun Pajak 2025 di soal ini, SPT PPh Badan Coretax (Lampiran PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026) memuat data yang sama pada Lampiran 2 Daftar Kepemilikan Bagian A.",
        jejakHitung: [],
        mengapaSalah: {
          A: "1771-VI memuat penyertaan modal pada perusahaan afiliasi serta utang-piutang dengan pemegang saham/afiliasi (di Coretax menjadi Lampiran 2 Bagian B).",
          B: "1771-I adalah penghitungan penghasilan neto fiskal (rekonsiliasi).",
          D: "Lampiran khusus 3A untuk transaksi hubungan istimewa dan pernyataan dokumentasi TP."
        },
        jebakan: "V = siapa pemilik dan pengurusnya; VI = hubungan keuangan dengan afiliasi. Di Coretax keduanya digabung dalam Lampiran 2 Daftar Kepemilikan (Bagian A dan Bagian B), jadi nomor lampiran 1771 lama tidak muncul di formulir Coretax."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) UU KUP; petunjuk pengisian SPT 1771", berlakuSejak: "2008-01-01" }, { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026, Lampiran: petunjuk pengisian Lampiran 2 Daftar Kepemilikan SPT PPh Badan", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "B6-053",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.l4.1",
      stem: "PT Rimba Kayu Utama menerima bunga deposito bruto Rp150.000.000 pada Tahun Pajak 2024 (PPh final 20% sebesar Rp30.000.000 telah dipotong bank) dan bunga itu sudah termasuk dalam laba komersial yang menjadi titik awal rekonsiliasi fiskal. Menurut peta formulir 1771 yang diajarkan, perlakuan pelaporan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dilaporkan pada Lampiran 1771-IV sebagai penghasilan final dan dikoreksi negatif pada Lampiran 1771-I", B: "Dilaporkan pada Lampiran 1771-III sebagai kredit pajak dalam negeri sebesar Rp30.000.000", C: "Cukup dilaporkan pada Lampiran 1771-I sebagai penghasilan dari luar usaha tanpa koreksi", D: "Dilaporkan pada Lampiran 1771-II sebagai pengurang biaya usaha" },
      kunci: "A",
      jebakanOpsi: { B: "final-nonfinal", C: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bunga deposito dikenai PPh final 20% dari jumlah bruto (Pasal 2 huruf c angka 1 PP 131/2000 s.t.d.d. PP 123/2015, sama untuk 2024 dan 2025), jadi tidak ikut dalam penghasilan kena pajak tarif umum. SPT Tahun Pajak 2024 masih memakai formulir 1771 lama (Pasal 138 huruf a PER-11/PJ/2025): penghasilan final dan PPh finalnya dilaporkan di 1771-IV, lalu dikeluarkan dari laba fiskal lewat koreksi negatif di 1771-I.",
        jejakHitung: [
          ["PPh final bunga deposito", "20% × Rp150.000.000 = Rp30.000.000"],
          ["Formulir 1771 lama (Tahun Pajak 2024)", "1771-IV (penghasilan dan PPh final) + koreksi negatif di 1771-I"],
          ["Padanan Coretax (PER-11/PJ/2025, Tahun Pajak 2025 ke atas)", "Lampiran 4 Bagian A; kolom \"Dikenakan PPh Bersifat Final\" di Lampiran 1; jumlahnya ke Induk Bagian C angka 2"]
        ],
        mengapaSalah: {
          B: "Lampiran kredit pajak (1771-III; di Coretax Lampiran 3) hanya memuat PPh atas penghasilan yang tidak final; PPh final tidak dapat dikreditkan.",
          C: "Tanpa dikeluarkan dari laba fiskal, bunga deposito terkena pajak dua kali: PPh final dan PPh tarif umum.",
          D: "1771-II adalah rincian HPP dan biaya, bukan tempat penghasilan; bunga tidak mengurangi biaya usaha."
        },
        jebakan: "Satu transaksi muncul di dua tempat: sebagai penghasilan final (1771-IV) dan sebagai pengurang laba komersial (1771-I). Mulai Tahun Pajak 2025 (formulir Coretax), pengurangnya diisi pada kolom \"Dikenakan PPh Bersifat Final\" di Lampiran 1, karena kolom penyesuaian fiskal negatif justru untuk unsur di luar penghasilan final dan bukan objek."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh; Pasal 2 huruf c angka 1 PP 131/2000 s.t.d.d. PP 123/2015", berlakuSejak: "2015-12-28" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 85 ayat (1) dan Lampiran huruf H PER-11/PJ/2025 (padanan Coretax: Lampiran 4 dan Lampiran 1)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110,
      verifikasi: "◐",
      peringatan: "Latar diubah ke Tahun Pajak 2024 agar cocok dengan formulir 1771 lama (Pasal 138 huruf a PER-11/PJ/2025). Padanan Coretax Tahun Pajak 2025 ke atas (Lampiran 4 Bagian A, kolom penghasilan final Lampiran 1) sudah dicocokkan ke Lampiran huruf H PER-11/PJ/2025. Lampiran formulir 1771 lama (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017) tidak ada di pustaka, jadi penomoran 1771-I sampai 1771-IV belum dicocokkan ke naskah."
    },
    {
      id: "B6-054",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.1A.1",
      stem: "PT Bahari Cold Storage menyusun daftar harta berwujud per kelompok beserta tanggal perolehan, harga perolehan, metode, dan penyusutan fiskal tahun berjalan, serta amortisasi biaya pendirian. Menurut peta formulir 1771 yang diajarkan, rincian ini dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran khusus 2A", B: "Lampiran khusus 1A", C: "Lampiran 1771-VI", D: "Lampiran khusus 8A" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pada peta 1771 yang diajarkan, lampiran khusus 1A berisi daftar penyusutan dan amortisasi fiskal. Di formulir Coretax Tahun Pajak 2025 (PER-11/PJ/2025) padanannya adalah Lampiran 9 - Daftar Penyusutan dan Amortisasi Fiskal.",
        jejakHitung: [
          ["Peta 1771 yang diajarkan", "lampiran khusus 1A"],
          ["Padanan Coretax", "Lampiran 9 (diisi bila induk Bagian H angka 21 huruf e dijawab \"Ya\")"]
        ],
        mengapaSalah: {
          A: "2A untuk kompensasi kerugian (di Coretax: Lampiran 7).",
          C: "1771-VI untuk penyertaan modal dan utang-piutang afiliasi (di Coretax: Lampiran 2 Bagian B).",
          D: "8A adalah transkrip kutipan elemen laporan keuangan."
        },
        jebakan: "Urutan lampiran khusus format lama: 1A penyusutan, 2A kompensasi rugi, 3A hubungan istimewa, 4A fasilitas, 5A cabang, 6A BUT, 7A PPh 24, 8A transkrip. Di Coretax nomornya berubah: penyusutan menjadi Lampiran 9, kompensasi kerugian Lampiran 7, hubungan istimewa Lampiran 10A sampai 10D."
      },
      dasarHukum: [{ pasal: "Pasal 11 dan Pasal 11A UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 85 ayat (1) huruf b angka 9 dan Lampiran huruf H PER-11/PJ/2025 (padanan Coretax: Lampiran 9)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 60,
      verifikasi: "◐",
      peringatan: "Padanan Coretax (Lampiran 9) sudah dicocokkan ke Pasal 85 dan Lampiran huruf H PER-11/PJ/2025. Format 1771 lama (induk, Lampiran I–VI, lampiran khusus 1A–8A) menurut Pasal 138 huruf a PER-11/PJ/2025 hanya dipakai untuk Tahun Pajak sampai 2024 (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017); lampiran formulir lama itu tidak ada di pustaka, jadi penomoran lama belum dicocokkan ke naskah."
    },
    {
      id: "B6-055",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 3 ayat (3) huruf c UU KUP: batas waktu penyampaian SPT Tahunan PPh Wajib Pajak badan paling lama 4 (empat) bulan setelah akhir Tahun Pajak. Pasal 3 ayat (4): Wajib Pajak dapat memperpanjang jangka waktu penyampaian SPT Tahunan untuk paling lama 2 (dua) bulan dengan cara menyampaikan pemberitahuan secara tertulis atau dengan cara lain kepada Direktur Jenderal Pajak.",
      stem: "PT Kelapa Sawit Andalas memakai tahun buku 1 Juli 2025 sampai 30 Juni 2026. Perusahaan tidak menyampaikan pemberitahuan perpanjangan dan baru menyampaikan SPT Tahunan PPh Badan untuk tahun buku tersebut lewat Coretax pada 5 November 2026 dengan status nihil. Berdasarkan kutipan tersebut, batas waktu penyampaian SPT dan sanksi administrasinya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "30 April 2027; belum terlambat",
        B: "31 Oktober 2026; denda Rp1.000.000",
        C: "31 Oktober 2026; denda Rp100.000",
        D: "30 September 2026; denda Rp1.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Batas 4 bulan dihitung dari akhir tahun buku (30 Juni 2026) → 31 Oktober 2026; tanpa perpanjangan, keterlambatan SPT Tahunan badan didenda Rp1.000.000 walaupun nihil.",
        jejakHitung: [
          ["Akhir tahun buku", "30 Juni 2026"],
          ["+ 4 bulan", "31 Oktober 2026"],
          ["Disampaikan 5 November 2026", "terlambat"],
          ["Denda Pasal 7 ayat (1)", "Rp1.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai pola tahun kalender (30 April) padahal WP memakai tahun buku Juli–Juni.",
          C: "Rp100.000 adalah denda SPT Tahunan orang pribadi.",
          D: "Menghitung 3 bulan (pola SPT orang pribadi)."
        },
        jebakan: "Status nihil tidak menghapus denda keterlambatan; fasilitas penghapusan sanksi KEP-239/PJ/2026 hanya melalui permohonan."
      },
      dasarHukum: [
        { pasal: "Pasal 3 ayat (3) huruf c dan ayat (4) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-056",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Cemerlang Abadi menyampaikan SPT 1771 Tahun Pajak 2025 pada 28 April 2026 dan PPh 29-nya telah dilunasi. Pada 9 Oktober 2026, sebelum ada pemeriksaan, perusahaan menyampaikan pembetulan karena menemukan biaya entertainment tanpa daftar nominatif, sehingga PPh terutang bertambah Rp84.000.000; kekurangan itu dilunasi pada hari yang sama. Untuk soal ini, anggap tarif bunga per bulan Pasal 8 ayat (2) UU KUP yang berlaku pada awal penghitungan sanksi 1,05%. Sanksi administrasi atas pembetulan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.292.000", B: "Rp4.410.000", C: "Rp10.080.000", D: "Tidak ada sanksi karena pembetulan dilakukan sukarela sebelum pemeriksaan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembetulan SPT Tahunan yang menyebabkan kurang bayar dikenai bunga Pasal 8 ayat (2) sejak batas waktu SPT (30 April 2026) sampai tanggal pembayaran; bagian bulan dihitung penuh.",
        jejakHitung: [
          ["30 April 2026 → 9 Oktober 2026", "5 bulan 9 hari → 6 bulan"],
          ["Bunga = 84.000.000 × 1,05% × 6", "Rp5.292.000"]
        ],
        mengapaSalah: {
          B: "Membulatkan ke bawah menjadi 5 bulan.",
          C: "Memakai bunga flat 2% per bulan (84.000.000 × 2% × 6), yang sudah diganti tarif bunga per bulan dari Menteri Keuangan sejak UU Cipta Kerja (2 November 2020).",
          D: "Pembetulan sukarela tetap dikenai bunga Pasal 8 ayat (2); keuntungannya hanya terhindar dari sanksi yang lebih berat bila kekurangan ditemukan lewat pemeriksaan (Pasal 13 ayat (2)). Penghapusan sanksi PMK 71/2026 jo. KEP-239/PJ/2026 pun hanya lewat permohonan, bukan otomatis."
        },
        jebakan: "Soal lintas KUP: hitung bulan dari batas waktu SPT, bukan dari tanggal SPT disampaikan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan (KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026)", berlakuSejak: "2026-01-01" }, { pasal: "PER-12/PJ/2026", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-057",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Kantor konsultan meninjau kondisi penyampaian SPT Tahunan PPh Badan Tahun Pajak 2025 empat klien yang wajib menyelenggarakan pembukuan. Menurut Pasal 3 ayat (7) UU KUP, SPT dianggap tidak disampaikan dalam kondisi-kondisi berikut, KECUALI ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "SPT disampaikan tanpa laporan keuangan yang wajib dilampirkan",
        B: "SPT disampaikan setelah DJP melakukan pemeriksaan atas tahun pajak tersebut",
        C: "SPT tidak ditandatangani pengurus atau kuasa yang sah",
        D: "SPT disampaikan pada 12 Mei 2026, terlambat 12 hari dari batas waktu"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Keterlambatan menyampaikan SPT tidak membuat SPT dianggap tidak disampaikan; akibatnya denda Pasal 7. Tiga kondisi lain termasuk Pasal 3 ayat (7).",
        jejakHitung: [],
        mengapaSalah: {
          A: "SPT yang tidak sepenuhnya dilampiri dokumen yang disyaratkan dianggap tidak disampaikan.",
          B: "SPT yang disampaikan setelah DJP melakukan pemeriksaan dianggap tidak disampaikan.",
          C: "SPT yang tidak ditandatangani dianggap tidak disampaikan."
        },
        jebakan: "Bedakan 'terlambat' (denda) dengan 'dianggap tidak disampaikan' (SPT tidak diproses)."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "B6-058",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.3A.1",
      stem: "PT Sarana Kimia Utama pada 2025 membeli bahan baku dari perusahaan afiliasi Rp18 miliar, membayar jasa manajemen kepada induk Rp6 miliar, dan memiliki pinjaman tanpa bunga dari pemegang saham Rp3 miliar. Perusahaan juga wajib menyelenggarakan dokumentasi TP. Menurut peta formulir 1771 yang diajarkan, pelaporan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Seluruhnya pada Lampiran 1771-V karena semua transaksi menyangkut pemegang saham", B: "Transaksi afiliasi dan dokumentasi TP pada lampiran khusus 3A; utang kepada pemegang saham pada 1771-VI", C: "Transaksi afiliasi pada Lampiran 1771-III dan pinjaman pemegang saham pada Lampiran 1771-II", D: "Cukup diungkapkan dalam catatan atas laporan keuangan tanpa lampiran khusus SPT" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pada peta 1771 yang diajarkan, transaksi hubungan istimewa dan pernyataan/ikhtisar dokumentasi TP dilaporkan pada lampiran khusus 3A (beserta 3A-1/3A-2), sedangkan utang-piutang dengan pemegang saham/afiliasi pada 1771-VI. Di formulir Coretax Tahun Pajak 2025 padanannya: Lampiran 10A dan 10B (transaksi hubungan istimewa), 10D (ikhtisar dokumen induk dan dokumen lokal), dan Lampiran 2 Bagian B (utang dari pemilik modal atau perusahaan afiliasi).",
        jejakHitung: [
          ["Pembelian bahan baku afiliasi dan jasa manajemen induk", "3A (Coretax: Lampiran 10A dan 10B)"],
          ["Dokumentasi TP", "3A-1/3A-2 (Coretax: Lampiran 10D)"],
          ["Pinjaman pemegang saham", "1771-VI (Coretax: Lampiran 2 Bagian B)"]
        ],
        mengapaSalah: {
          A: "1771-V hanya daftar pemegang saham dan pengurus (di Coretax: Lampiran 2 Bagian A).",
          C: "1771-III untuk kredit pajak; 1771-II untuk HPP dan biaya.",
          D: "Pengungkapan transaksi afiliasi adalah bagian wajib SPT badan; di Coretax induk Bagian H angka 21 mewajibkan Lampiran 10A sampai 10C bila ada transaksi hubungan istimewa."
        },
        jebakan: "Pinjaman pemegang saham dicatat di dua tempat yang berbeda fungsi: daftar utang-piutang afiliasi (1771-VI; Coretax Lampiran 2 Bagian B) dan, bila relevan, penghitungan biaya pinjaman/DER (Coretax Lampiran 11B)."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (3) UU PPh; PMK 172/2023", berlakuSejak: "2023-12-29" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 85 ayat (1) dan Lampiran huruf H PER-11/PJ/2025 (padanan Coretax: Lampiran 10A–10D dan Lampiran 2 Bagian B)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110,
      verifikasi: "◐",
      peringatan: "Padanan Coretax (Lampiran 10A–10D dan Lampiran 2 Bagian B) sudah dicocokkan ke Pasal 85 dan Lampiran huruf H PER-11/PJ/2025. Format 1771 lama (induk, Lampiran I–VI, lampiran khusus 1A–8A) menurut Pasal 138 huruf a PER-11/PJ/2025 hanya dipakai untuk Tahun Pajak sampai 2024 (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017); lampiran formulir lama itu tidak ada di pustaka, jadi penomoran lama belum dicocokkan ke naskah."
    },
    {
      id: "B6-059",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Nirwana Busana Indonesia (produsen garmen, badan dalam negeri bukan perseroan terbuka, terdaftar 2016, tidak pernah memakai PPh final UMKM) melaporkan data Tahun Pajak 2025: penjualan neto Rp28.400.000.000; penghasilan sewa gudang yang dikenai PPh final Rp600.000.000; bunga deposito Rp200.000.000; dividen dari PT anak dalam negeri Rp800.000.000; dan Penghasilan Kena Pajak setelah rekonsiliasi fiskal Rp2.400.000.000. Kredit dan pembayaran pajak 2025: PPh 22 impor bahan baku Rp180.000.000; PPh 23 yang dipotong pelanggan Rp36.000.000; angsuran PPh 25 Rp240.000.000; serta PPh final sewa gudang yang dipotong penyewa Rp60.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp72.000.000", B: "Lebih bayar Rp30.240.000", C: "Rp29.760.000", D: "Rp96.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "final-nonfinal", D: "angka-usang" },
      pembahasan: {
        inti: "Peredaran bruto Pasal 31E mencakup penghasilan final dan bukan objek (Rp30 miliar ≤ Rp50 miliar), sehingga 16% PKP dikenai 11% dan sisanya 22%; kredit pajak hanya PPh 22, PPh 23, dan PPh 25, tanpa PPh final sewa.",
        jejakHitung: [
          ["Peredaran bruto = 28.400.000.000 + 600.000.000 + 200.000.000 + 800.000.000", "Rp30.000.000.000"],
          ["PKP fasilitas = 4,8/30 × 2.400.000.000", "Rp384.000.000"],
          ["11% × 384.000.000", "Rp42.240.000"],
          ["22% × 2.016.000.000", "Rp443.520.000"],
          ["PPh terutang", "Rp485.760.000"],
          ["Kredit = 180.000.000 + 36.000.000 + 240.000.000", "Rp456.000.000"],
          ["PPh 29 = 485.760.000 − 456.000.000", "Rp29.760.000"]
        ],
        mengapaSalah: {
          A: "Tidak menerapkan Pasal 31E: 22% × 2.400.000.000 = 528.000.000, dikurangi kredit 456.000.000.",
          B: "Ikut mengkreditkan PPh final sewa Rp60.000.000 sehingga kredit menjadi Rp516.000.000.",
          D: "Memakai tarif lama 25% dan 12,5% (PPh 552.000.000 − 456.000.000)."
        },
        jebakan: "PPh 29 dengan Pasal 31E menggabungkan tiga langkah: peredaran bruto yang luas, proporsi Rp4,8 miliar, lalu kredit pajak tanpa PPh final."
      },
      dasarHukum: [
        { pasal: "Pasal 17 ayat (1) huruf b dan Pasal 31E ayat (1) UU PPh", berlakuSejak: "2022-01-01" },
        { pasal: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-060",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Samudra Logistik Tbk pada Tahun Pajak 2025 memiliki 45% saham disetor yang tercatat dan diperdagangkan di Bursa Efek Indonesia. Akibat pembelian kembali saham dan akumulasi oleh satu investor, syarat kepemilikan oleh paling sedikit 300 pihak yang masing-masing memiliki kurang dari 5% saham disetor hanya terpenuhi selama 160 hari kalender dalam tahun pajak tersebut. Peredaran bruto Rp1.200.000.000.000 dan PKP Rp15.000.000.000. Kredit pajak 2025: PPh 22 Rp500.000.000; PPh 23 Rp300.000.000; PPh 24 Rp200.000.000 (sudah di bawah batas maksimum yang dihitung per jenis penghasilan untuk tiap negara); dan angsuran PPh 25 Rp1.800.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000.000", B: "Rp500.000.000", C: "Rp200.000.000", D: "Rp700.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Syarat penurunan tarif perseroan terbuka bersifat kumulatif dan harus dipenuhi paling singkat 183 hari dalam satu tahun pajak; 160 hari tidak cukup sehingga tarif yang berlaku 22%.",
        jejakHitung: [
          ["Uji jangka waktu: 160 hari < 183 hari", "tidak terpenuhi → tarif 22%"],
          ["PPh terutang = 22% × 15.000.000.000", "Rp3.300.000.000"],
          ["Kredit = 500 + 300 + 200 + 1.800 (juta)", "Rp2.800.000.000"],
          ["PPh 29 = 3.300.000.000 − 2.800.000.000", "Rp500.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif 19% (2.850.000.000 − 2.800.000.000) padahal syarat 183 hari tidak terpenuhi.",
          C: "Memakai tarif lama perseroan terbuka 20% (25% − 5%).",
          D: "Tidak mengkreditkan PPh 24 Rp200.000.000 yang sudah dalam batas maksimum."
        },
        jebakan: "Sebutan 'Tbk' pada nama perusahaan tidak otomatis berarti tarif 19% — uji keempat syarat, terutama jangka 183 hari."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }, { pasal: "PP 55/2022 (ketentuan penurunan tarif perseroan terbuka)", berlakuSejak: "2022-12-20" }, { pasal: "Pasal 24, Pasal 28 ayat (1), dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-061",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Cipta Pangan Mulia (badan dalam negeri, bukan perseroan terbuka) memiliki 60% saham PT Cipta Pakan (badan dalam negeri, tidak tercatat di bursa) sehingga keduanya berhubungan istimewa. Data Tahun Pajak 2025: penjualan neto Rp48.000.000.000; dividen tunai dari PT Cipta Pakan Rp1.800.000.000; bunga deposito Rp400.000.000 (PPh final Rp80.000.000 dipotong bank). Setelah dividen dan bunga deposito dikeluarkan dalam rekonsiliasi fiskal, PKP Rp3.000.000.000. Kredit pajak: PPh 22 Rp210.000.000, PPh 23 Rp90.000.000, dan angsuran PPh 25 Rp300.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.000.000", B: "Rp456.000.000", C: "Lebih bayar Rp20.000.000", D: "Rp60.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "final-nonfinal" },
      pembahasan: {
        inti: "Dividen dari anak perusahaan dalam negeri bukan objek, tetapi tetap dihitung dalam peredaran bruto Pasal 31E; peredaran bruto menjadi Rp50,2 miliar (> Rp50 miliar) sehingga fasilitas Pasal 31E gugur dan seluruh PKP dikenai 22%.",
        jejakHitung: [
          ["Peredaran bruto = 48.000.000.000 + 1.800.000.000 + 400.000.000", "Rp50.200.000.000"],
          ["Peredaran bruto > Rp50 miliar", "tanpa Pasal 31E"],
          ["PPh terutang = 22% × 3.000.000.000", "Rp660.000.000"],
          ["Kredit = 210.000.000 + 90.000.000 + 300.000.000", "Rp600.000.000"],
          ["PPh 29 = 660.000.000 − 600.000.000", "Rp60.000.000"]
        ],
        mengapaSalah: {
          A: "Menguji Pasal 31E hanya dengan penjualan Rp48 miliar sehingga memberi fasilitas: 11% × 300.000.000 + 22% × 2.700.000.000 = 627.000.000, dikurangi kredit 600.000.000.",
          B: "Memajaki dividen dari anak perusahaan (22% × 4.800.000.000 = 1.056.000.000, dikurangi kredit), padahal dividen DN yang diterima badan DN bukan objek.",
          C: "Ikut mengkreditkan PPh final bunga deposito Rp80.000.000."
        },
        jebakan: "Dividen afiliasi tidak dipajaki, tetapi dapat 'mendorong' peredaran bruto melewati Rp50 miliar — satu pos, dua perlakuan berbeda."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-062",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Prakarsa Investindo (badan dalam negeri, peredaran bruto di atas Rp50 miliar, tarif umum) memiliki penyertaan pada tiga perusahaan dalam negeri yang tidak tercatat di bursa: 35% PT Arta Mineral (metode ekuitas), 10% PT Bumi Kencana (metode biaya), dan 20% PT Ceria Medika (metode ekuitas). Laba komersial sebelum pajak Tahun Pajak 2025 Rp6.000.000.000 sudah memuat: bagian rugi PT Arta Mineral menurut metode ekuitas Rp400.000.000; dividen tunai dari PT Bumi Kencana Rp250.000.000 yang diakui sebagai pendapatan; rugi penurunan nilai (impairment) penyertaan pada PT Ceria Medika Rp300.000.000; dan bunga pinjaman yang diterima dari PT Arta Mineral Rp120.000.000 (dipotong PPh 23 Rp18.000.000). Tidak ada koreksi fiskal lain. PPh badan terutang PT Prakarsa Investindo Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.353.000.000", B: "Rp1.419.000.000", C: "Rp1.474.000.000", D: "Rp1.392.600.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bagian rugi metode ekuitas dan rugi penurunan nilai penyertaan belum terealisasi sehingga tidak dapat dibiayakan (koreksi positif); dividen DN bukan objek tanpa syarat kepemilikan (koreksi negatif); bunga dari afiliasi tetap objek tarif umum.",
        jejakHitung: [
          ["Koreksi positif: bagian rugi ekuitas + impairment = 400.000.000 + 300.000.000", "Rp700.000.000"],
          ["Koreksi negatif: dividen PT Bumi Kencana", "Rp250.000.000"],
          ["Bunga dari PT Arta Mineral (objek; PPh 23 menjadi kredit)", "tanpa koreksi"],
          ["Neto fiskal = 6.000.000.000 + 700.000.000 − 250.000.000", "Rp6.450.000.000"],
          ["PPh = 22% × 6.450.000.000", "Rp1.419.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengoreksi rugi penurunan nilai penyertaan Rp300.000.000 (22% × 6.150.000.000).",
          C: "Memajaki dividen karena kepemilikan hanya 10% — syarat kepemilikan 25% sudah dihapus sejak UU Cipta Kerja (22% × 6.700.000.000).",
          D: "Ikut mengeluarkan bunga dari afiliasi seolah bukan objek (22% × 6.330.000.000)."
        },
        jebakan: "Untuk penyertaan afiliasi, pisahkan pos yang belum terealisasi (bagian laba/rugi ekuitas, impairment), dividen (bukan objek), dan transaksi lain dengan afiliasi (tetap objek)."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) huruf f dan ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 6 ayat (1) huruf d dan Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 23 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-063",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 10 ayat (1) UU PPh: Harga perolehan atau harga penjualan dalam hal terjadi jual beli harta yang tidak dipengaruhi hubungan istimewa sebagaimana dimaksud dalam Pasal 18 ayat (4) adalah jumlah yang sesungguhnya dikeluarkan atau diterima, sedangkan apabila terdapat hubungan istimewa adalah jumlah yang seharusnya dikeluarkan atau diterima.",
      stem: "PT Wira Holding memiliki 80% saham PT Wira Agro dan 80% saham PT Wira Niaga. Pada Juni 2025 PT Wira Agro menjual seluruh penyertaannya berupa 40% saham PT Sinar Tambang (badan dalam negeri yang tidak tercatat di bursa) kepada PT Wira Niaga seharga Rp3.000.000.000. Harga perolehan saham itu Rp4.000.000.000, sehingga PT Wira Agro membukukan rugi penjualan penyertaan Rp1.000.000.000. Laporan penilai independen menunjukkan nilai pasar wajar saham tersebut pada tanggal transaksi Rp6.000.000.000. Berdasarkan kutipan tersebut, koreksi fiskal positif atas laba PT Wira Agro dan tambahan PPh badan (tarif 22%, tanpa Pasal 31E) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp1.000.000.000; tambahan PPh Rp220.000.000",
        B: "Koreksi positif Rp2.000.000.000; tambahan PPh Rp440.000.000",
        C: "Koreksi positif Rp3.000.000.000; tambahan PPh Rp660.000.000",
        D: "Tidak ada koreksi karena penjualan saham dikenai PPh final 0,1%"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "PT Wira Agro dan PT Wira Niaga sama-sama dimiliki 80% oleh PT Wira Holding sehingga berhubungan istimewa; harga jual fiskal adalah nilai pasar Rp6 miliar, sehingga rugi komersial Rp1 miliar berubah menjadi keuntungan fiskal Rp2 miliar.",
        jejakHitung: [
          ["Dua WP dimiliki ≥ 25% oleh pihak yang sama", "berhubungan istimewa"],
          ["Keuntungan fiskal = 6.000.000.000 − 4.000.000.000", "Rp2.000.000.000"],
          ["Hasil komersial", "rugi Rp1.000.000.000"],
          ["Koreksi positif = 2.000.000.000 + 1.000.000.000", "Rp3.000.000.000"],
          ["Tambahan PPh = 22% × 3.000.000.000", "Rp660.000.000"]
        ],
        mengapaSalah: {
          A: "Hanya menolak rugi Rp1 miliar tanpa mengakui keuntungan fiskal pada harga wajar.",
          B: "Mengakui keuntungan Rp2 miliar tetapi lupa membalik rugi komersial Rp1 miliar yang sudah mengurangi laba.",
          D: "PPh final 0,1% hanya untuk penjualan saham di bursa; saham PT Sinar Tambang tidak tercatat di bursa."
        },
        jebakan: "Koreksi bergerak dari angka komersial ke angka fiskal: bila komersial rugi dan fiskal untung, koreksinya adalah jumlah keduanya."
      },
      dasarHukum: [
        { pasal: "Pasal 10 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 18 ayat (3) dan ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-064",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Wiratama Konsultindo (badan dalam negeri) pada Tahun Pajak 2025 menjalankan proyek di Negara P (untung; pajak dibayar di sana bertarif 30%), Negara Q (untung; pajak 10%), dan Negara R (rugi). Dalam rapat penyusunan SPT 1771, empat staf mengajukan rumusan kredit PPh Pasal 24 berikut. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kredit PPh Pasal 24 dihitung secara keseluruhan untuk seluruh negara sumber penghasilan, sebesar nilai terkecil antara pajak yang dibayar atau terutang di luar negeri dan batas maksimum, yaitu penghasilan neto luar negeri yang diperhitungkan dibagi Penghasilan Kena Pajak dikalikan PPh terutang, sedangkan rugi di Negara R tidak digabungkan dengan penghasilan dalam negeri maupun penghasilan Negara P dan Q.", B: "Kredit PPh Pasal 24 dihitung terpisah per jenis penghasilan untuk setiap negara sumber penghasilan, sebesar nilai terbesar antara pajak yang dibayar atau terutang di luar negeri dan batas maksimum, yaitu penghasilan neto luar negeri yang diperhitungkan dibagi Penghasilan Kena Pajak dikalikan PPh terutang, sedangkan rugi di Negara R tidak digabungkan dengan penghasilan dalam negeri maupun penghasilan Negara P dan Q.", C: "Kredit PPh Pasal 24 dihitung terpisah per jenis penghasilan untuk setiap negara sumber penghasilan, sebesar nilai terkecil antara pajak yang dibayar atau terutang di luar negeri dan batas maksimum, yaitu penghasilan neto luar negeri yang diperhitungkan dibagi Penghasilan Kena Pajak dikalikan PPh terutang, sedangkan rugi di Negara R dikurangkan lebih dulu dari penghasilan Negara P dan Q sebelum batas maksimum dihitung.", D: "Kredit PPh Pasal 24 dihitung terpisah per jenis penghasilan untuk setiap negara sumber penghasilan, sebesar nilai terkecil antara pajak yang dibayar atau terutang di luar negeri dan batas maksimum, yaitu penghasilan neto luar negeri yang diperhitungkan dibagi Penghasilan Kena Pajak dikalikan PPh terutang, sedangkan rugi di Negara R tidak digabungkan dengan penghasilan dalam negeri maupun penghasilan Negara P dan Q." },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 6 ayat (2) PMK 192/PMK.03/2018 (pelaksanaan Pasal 24 UU PPh) menghitung PPh luar negeri yang dapat dikreditkan per jenis penghasilan untuk tiap negara atau yurisdiksi: kredit = jumlah paling sedikit antara pajak luar negeri dan jumlah tertentu (penghasilan jenis itu dari negara itu ÷ PKP × PPh terutang), paling tinggi PPh terutang (ayat (4)). Rugi di suatu negara tidak diperhitungkan dengan penghasilan dalam negeri maupun negara lain (Pasal 4 ayat (3)). Di soal ini tiap negara memberi satu jenis penghasilan (penghasilan usaha proyek).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Batas keseluruhan (overall limitation) tidak dianut; batas dihitung per jenis penghasilan untuk tiap negara.",
          B: "Kredit dibatasi jumlah paling sedikit, bukan terbesar; kelebihan pajak luar negeri tidak dapat diperhitungkan, dibiayakan, atau direstitusi (Pasal 7).",
          C: "Rugi di suatu negara tidak boleh mengurangi penghasilan negara lain saat menghitung PKP maupun batas kredit (Pasal 4 ayat (3))."
        },
        jebakan: "Empat kalimat panjang hanya berbeda satu frasa: periksa \"terpisah/keseluruhan\", \"terkecil/terbesar\", dan perlakuan rugi satu per satu."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-065",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Kencana Polimer (tahun buku kalender) membangun pabrik permanen sejak Maret 2025; pengerjaan selesai September 2025, tetapi produksi komersial baru dimulai Januari 2026. Mesin produksi dibeli dan dibayar lunas Desember 2025, lalu dipasang dan mulai dipakai Februari 2026. Perusahaan tidak mengajukan permohonan apa pun kepada Direktur Jenderal Pajak. Untuk memo kepada direksi tentang saat mulai penyusutan fiskal kedua harta tersebut, rumusan Pasal 11 ayat (3) dan (4) UU PPh yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan yang penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut; dengan persetujuan Direktur Jenderal Pajak, Wajib Pajak diperkenankan memulai penyusutan pada bulan harta digunakan untuk mendapatkan, menagih, dan memelihara penghasilan atau pada bulan harta mulai menghasilkan.",
        B: "Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan yang penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut; tanpa memerlukan persetujuan Direktur Jenderal Pajak, Wajib Pajak diperkenankan memulai penyusutan pada bulan harta digunakan untuk mendapatkan, menagih, dan memelihara penghasilan atau pada bulan harta mulai menghasilkan.",
        C: "Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan yang penyusutannya dimulai pada bulan berikutnya setelah selesainya pengerjaan harta tersebut; dengan persetujuan Direktur Jenderal Pajak, Wajib Pajak diperkenankan memulai penyusutan pada bulan harta digunakan untuk mendapatkan, menagih, dan memelihara penghasilan atau pada bulan harta mulai menghasilkan.",
        D: "Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan yang penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut; dengan persetujuan Direktur Jenderal Pajak, Wajib Pajak diperkenankan memulai penyusutan pada tahun pajak harta digunakan untuk mendapatkan, menagih, dan memelihara penghasilan atau pada tahun pajak harta mulai menghasilkan, dengan penyusutan setahun penuh pada tahun itu."
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 11 ayat (3): penyusutan mulai bulan pengeluaran, kecuali harta dalam pengerjaan mulai bulan selesainya; ayat (4): mulai bulan digunakan atau menghasilkan hanya dengan persetujuan DJP. Tanpa permohonan, pabrik disusutkan sejak September 2025 dan mesin sejak Desember 2025.",
        jejakHitung: [
          ["Pabrik (harta dalam pengerjaan), tanpa persetujuan DJP", "mulai September 2025 (4 bulan di 2025)"],
          ["Mesin (dibayar Desember 2025), tanpa persetujuan DJP", "mulai Desember 2025 (1 bulan di 2025)"],
          ["Bila disetujui DJP menurut Pasal 11 ayat (4)", "pabrik Januari 2026; mesin Februari 2026"]
        ],
        mengapaSalah: {
          B: "Memulai penyusutan pada bulan harta digunakan atau mulai menghasilkan memerlukan persetujuan DJP.",
          C: "Bulan selesainya pengerjaan sudah dihitung; tidak menunggu bulan berikutnya.",
          D: "Penyusutan tetap dihitung per bulan, bukan setahun penuh pada tahun mulai digunakan."
        },
        jebakan: "Empat kalimat panjang hanya berbeda satu frasa — tandai 'dengan/tanpa persetujuan', 'bulan selesainya/bulan berikutnya', dan 'bulan/tahun pajak'."
      },
      dasarHukum: [
        { pasal: "Pasal 11 ayat (3) dan ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-066",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 19 ayat (3) UU KUP: Dalam hal Wajib Pajak diperbolehkan menunda penyampaian SPT Tahunan dan ternyata penghitungan sementara pajak yang terutang sebagaimana dimaksud dalam Pasal 3 ayat (5) kurang dari jumlah pajak yang sebenarnya terutang, atas kekurangan pembayaran pajak tersebut dikenai sanksi administratif berupa bunga sebesar tarif bunga sebagaimana dimaksud pada ayat (1), dihitung dari saat berakhirnya batas waktu penyampaian SPT Tahunan sampai dengan tanggal dibayarnya kekurangan tersebut, dan bagian dari bulan dihitung penuh 1 (satu) bulan.",
      stem: "PT Lautan Niaga Prima (tahun buku kalender) pada 24 April 2026 menyampaikan pemberitahuan perpanjangan penyampaian SPT Tahunan PPh Badan 2025 melalui Coretax, dilampiri penghitungan sementara (PPh Pasal 29 sementara Rp150.000.000), laporan keuangan sementara, dan bukti pelunasan Rp150.000.000 yang dibayar 22 April 2026. SPT definitif disampaikan 19 Juni 2026 dengan PPh Pasal 29 Rp230.000.000; kekurangan Rp80.000.000 dilunasi 19 Juni 2026 sebelum SPT dikirim. Anggap tarif bunga per bulan yang berlaku pada awal penghitungan sanksi: tarif Pasal 19 ayat (1) 0,62% dan tarif Pasal 9 ayat (2b) 1,04%. Berdasarkan kutipan tersebut, sanksi administrasi yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga Rp1.664.000", B: "Bunga Rp992.000", C: "Bunga Rp2.852.000", D: "Denda Rp1.000.000 karena SPT disampaikan setelah 30 April 2026" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Pemberitahuan perpanjangan yang lengkap membuat SPT yang disampaikan 19 Juni 2026 tepat waktu (tanpa denda Pasal 7); kekurangan dari penghitungan sementara dikenai bunga Pasal 19 ayat (3) dengan tarif ayat (1) (tanpa uplift), dihitung dari 30 April 2026 sampai tanggal pelunasan.",
        jejakHitung: [
          ["Batas dengan perpanjangan = 30 April 2026 + 2 bulan", "30 Juni 2026 → SPT 19 Juni tepat waktu"],
          ["Kekurangan = 230.000.000 − 150.000.000", "Rp80.000.000"],
          ["30 April → 19 Juni 2026", "1 bulan 20 hari → 2 bulan"],
          ["Bunga = 80.000.000 × 0,62% × 2", "Rp992.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif Pasal 9 ayat (2b) (acuan + 5%); kekurangan akibat penghitungan sementara diatur khusus Pasal 19 ayat (3) dengan tarif ayat (1).",
          C: "Menghitung bunga atas seluruh PPh 29 Rp230.000.000, padahal Rp150.000.000 sudah dilunasi sebelum batas waktu.",
          D: "Perpanjangan yang sah menggeser batas penyampaian sampai 30 Juni 2026, sehingga tidak ada denda keterlambatan SPT."
        },
        jebakan: "Perpanjangan menunda penyampaian SPT, bukan pembayaran: bunga tetap berjalan sejak batas waktu semula 30 April."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (3) huruf c, ayat (4), dan ayat (5) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 19 ayat (1) dan ayat (3) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "PMK 81/2024 (pemberitahuan perpanjangan SPT Tahunan)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B6-067",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 29 UU PPh: Apabila pajak yang terutang untuk suatu tahun pajak ternyata lebih besar daripada kredit pajak sebagaimana dimaksud dalam Pasal 28 ayat (1), kekurangan pembayaran pajak yang terutang harus dilunasi sebelum Surat Pemberitahuan Tahunan Pajak Penghasilan disampaikan.",
      stem: "Pada 27 April 2026 staf pajak PT Delta Rekayasa menyiapkan SPT Tahunan PPh Badan 2025 di Coretax. Hasil penghitungan menunjukkan kurang bayar Rp96.000.000; BPPU PPh 23 dari pelanggan sudah tampil sebagai data pra-isi. Direktur utama terdaftar sebagai penanggung jawab akun badan, sedangkan staf pajak belum ditunjuk sebagai wakil atau kuasa. Berdasarkan kutipan tersebut dan tata cara SPT elektronik di Coretax, urutan langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Buat konsep SPT dan lengkapi lampiran (termasuk memeriksa pra-isi BPPU) → buat kode billing PPh Pasal 29 badan dan lunasi sampai memperoleh NTPN (atau memakai saldo deposit pajak) → penanggung jawab menandatangani dengan kode otorisasi DJP/sertifikat elektronik → kirim SPT dan simpan Bukti Penerimaan Elektronik", B: "Buat konsep SPT dan lengkapi lampiran → penanggung jawab menandatangani dan mengirim SPT berstatus kurang bayar → lunasi PPh Pasal 29 paling lambat tanggal 15 bulan berikutnya → simpan Bukti Penerimaan Elektronik", C: "Buat kode billing PPh Pasal 25 Masa April 2026 dan lunasi kekurangan Rp96.000.000 dengan kode itu → buat konsep SPT → penanggung jawab menandatangani → kirim SPT", D: "Buat konsep SPT dan lengkapi lampiran → lunasi PPh Pasal 29 → staf pajak menandatangani dengan akun pribadinya walaupun belum ditunjuk sebagai wakil atau kuasa → kirim SPT" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh Pasal 29 wajib lunas sebelum SPT disampaikan dan tidak melewati batas waktu penyampaian SPT (Pasal 29 UU PPh; Pasal 95 ayat (1) PMK 81/2024), disetor sebagai PPh Pasal 29 (bukan angsuran PPh 25) atau dibayar memakai Deposit Pajak (Pasal 103 ayat (1) PMK 81/2024). SPT badan lalu ditandatangani secara elektronik dengan Sertifikat Elektronik atau Kode Otorisasi milik wakil Wajib Pajak atau orang yang ditunjuk wakil (Pasal 10 ayat (2) PMK 81/2024).",
        jejakHitung: [
          ["1. Konsep SPT dan periksa pra-isi BPPU", "kredit PPh 23 sesuai bukti potong"],
          ["2. Kode billing jenis setoran PPh Pasal 29 badan → NTPN (atau Deposit Pajak)", "lunas sebelum SPT dikirim"],
          ["3. Tanda tangan elektronik penanggung jawab (wakil Wajib Pajak)", "Kode Otorisasi DJP atau Sertifikat Elektronik"],
          ["4. Kirim SPT", "bukti penerimaan terbit; batas 30 April 2026"]
        ],
        mengapaSalah: {
          B: "Pasal 29 UU PPh dan Pasal 95 ayat (1) PMK 81/2024 mewajibkan pelunasan sebelum SPT disampaikan; tanggal 15 bulan berikutnya adalah batas setor pajak masa.",
          C: "Kekurangan PPh tahunan disetor sebagai PPh Pasal 29, bukan sebagai angsuran PPh 25 masa berjalan.",
          D: "Dokumen elektronik badan ditandatangani dengan Sertifikat Elektronik atau Kode Otorisasi milik wakil Wajib Pajak atau orang yang ditunjuk wakil (Pasal 10 ayat (2) PMK 81/2024); SPT yang tidak ditandatangani pihak berwenang dianggap tidak disampaikan (Pasal 3 ayat (7) huruf a UU KUP)."
        },
        jebakan: "Urutan bayar–tanda tangan–kirim adalah inti soal implementasi; pengecoh memindahkan pembayaran, memakai jenis setoran yang salah, atau penanda tangan yang tidak berwenang."
      },
      dasarHukum: [{ pasal: "Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 3 ayat (1) dan ayat (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (5) dan (6), Pasal 10 ayat (2), Pasal 95 ayat (1), dan Pasal 103 ayat (1) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-068",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-03",
      stem: "Data PT Selaras Bangun Niaga (distributor semen dan baja ringan, badan dalam negeri terdaftar 2014, PKP, tahun buku kalender, tidak pernah memakai PPh final UMKM) Tahun Pajak 2025: pegawai tetap 85 orang; total aset Rp31.000.000.000; penjualan neto Rp46.600.000.000; PPN keluaran Rp5.126.000.000 dan PPN masukan Rp4.540.000.000; bunga deposito Rp300.000.000 (PPh final dipotong bank); dividen dari PT anak dalam negeri Rp1.100.000.000; dan laba komersial sebelum pajak Rp2.900.000.000 (sudah termasuk bunga dan dividen). Beban yang tercatat antara lain gaji Rp6.120.000.000 (PPh 21 yang dipotong dari gaji pegawai Rp210.000.000), PBB gudang Rp45.000.000, sanksi bunga STP PPN Rp60.000.000, dan entertainment tanpa daftar nominatif Rp70.000.000. Sisa rugi fiskal Tahun Pajak 2020 yang belum terkompensasi Rp150.000.000. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp325.600.000", B: "Rp340.670.000", C: "Rp309.320.000", D: "Rp318.725.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pilah data: jumlah pegawai, total aset, PPN, gaji, dan PPh 21 pegawai tidak memengaruhi PKP; PBB adalah biaya yang boleh dikurangkan; yang dikoreksi hanya sanksi, entertainment, bunga deposito, dan dividen. Rugi 2020 masih dapat dipakai pada 2025, dan peredaran bruto Rp48 miliar (tanpa PPN) membuat Pasal 31E berlaku.",
        jejakHitung: [
          ["Koreksi positif = 60.000.000 + 70.000.000", "Rp130.000.000"],
          ["Koreksi negatif = 300.000.000 + 1.100.000.000", "Rp1.400.000.000"],
          ["Neto fiskal = 2.900.000.000 + 130.000.000 − 1.400.000.000", "Rp1.630.000.000"],
          ["PKP = 1.630.000.000 − 150.000.000 (rugi 2020, batas 2025)", "Rp1.480.000.000"],
          ["Peredaran bruto = 46.600.000.000 + 300.000.000 + 1.100.000.000", "Rp48.000.000.000"],
          ["PKP fasilitas = 4,8/48 × 1.480.000.000", "Rp148.000.000"],
          ["11% × 148.000.000 + 22% × 1.332.000.000", "Rp16.280.000 + Rp293.040.000"],
          ["PPh terutang", "Rp309.320.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan PPN keluaran ke peredaran bruto (Rp53,126 miliar > Rp50 miliar) sehingga tanpa Pasal 31E: 22% × 1.480.000.000.",
          B: "Menganggap rugi 2020 sudah hangus; rugi 2020 berlaku 2021–2025 (tanpa kompensasi PKP Rp1.630.000.000).",
          D: "Mengoreksi positif PBB Rp45.000.000, padahal pajak selain PPh dapat dibiayakan (PKP menjadi Rp1.525.000.000)."
        },
        jebakan: "Kasus panjang sengaja memuat data yang tidak dipakai; PPN adalah pajak yang dipungut dari pembeli, bukan bagian peredaran bruto penjual."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) huruf a dan ayat (2), Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
        { pasal: "PMK 02/PMK.03/2010", berlakuSejak: "2010-01-05" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-069",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-03",
      stem: "Melanjutkan data PT Selaras Bangun Niaga: PPh badan terutang Tahun Pajak 2025 Rp309.320.000, dihitung dari penghasilan neto fiskal Rp1.630.000.000 dikurangi kompensasi sisa rugi Tahun Pajak 2020 Rp150.000.000 (tahun terakhir pemakaiannya 2025, sehingga tidak ada lagi sisa kerugian yang dapat dikompensasikan pada 2026), dengan peredaran bruto Rp48.000.000.000 (Pasal 31E berlaku). Selama 2025 tercatat: PPh 22 yang dipungut pabrik semen dan baja atas pembelian barang dagangan Rp105.000.000; PPh 23 atas jasa angkut yang dipotong pelanggan (BPPU atas nama perusahaan) Rp24.320.000; angsuran PPh 25 yang dibayar Rp120.000.000; PPh 21 yang dipotong dari gaji pegawai Rp210.000.000; PPh 23 yang dipotong perusahaan atas sewa truk dari vendor Rp18.000.000; PPh final bunga deposito Rp60.000.000; dan PPN kurang bayar setahun Rp586.000.000. SPT disampaikan 28 April 2026 tanpa permohonan pengurangan angsuran dan tanpa penghasilan tidak teratur. PPh Pasal 29 dan angsuran PPh 25 per bulan mulai Masa April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 29 Rp42.000.000; angsuran Rp16.112.500", B: "PPh 29 Rp60.000.000; angsuran Rp17.612.500", C: "PPh 29 Rp60.000.000; angsuran Rp15.000.000", D: "PPh 29 Rp60.000.000; angsuran Rp5.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kredit pajak hanya pajak atas penghasilan perusahaan sendiri yang dipungut/dipotong pihak lain (PPh 22 dari pabrik, PPh 23 dari pelanggan) serta PPh 25 yang dibayar; PPh yang dipotong perusahaan dari pihak lain (PPh 21 pegawai, PPh 23 vendor), PPh final, dan PPN tidak dikreditkan. Karena SPT 2025 memuat kompensasi kerugian, angsuran 2026 dihitung menurut Pasal 25 ayat (6) huruf a UU PPh: penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada 2026 (di sini nol, karena rugi 2020 habis pada 2025), dikenai tarif termasuk Pasal 31E, dikurangi PPh 22/23/24 tahun lalu, lalu dibagi 12.",
        jejakHitung: [
          ["Kredit = 105.000.000 + 24.320.000 + 120.000.000", "Rp249.320.000"],
          ["PPh 29 = 309.320.000 − 249.320.000", "Rp60.000.000"],
          ["Sisa kerugian yang masih dapat dikompensasikan pada 2026 (rugi 2020 habis pada 2025)", "Rp0"],
          ["Dasar angsuran = penghasilan neto 2025 − 0", "Rp1.630.000.000"],
          ["PKP fasilitas Pasal 31E = 4,8 ÷ 48 × 1.630.000.000", "Rp163.000.000"],
          ["PPh = 11% × 163.000.000 + 22% × 1.467.000.000 = 17.930.000 + 322.740.000", "Rp340.670.000"],
          ["Dikurangi PPh 22 dan 23 = 340.670.000 − 129.320.000", "Rp211.350.000"],
          ["Angsuran = 211.350.000 ÷ 12 (mulai Masa April 2026)", "Rp17.612.500"]
        ],
        mengapaSalah: {
          A: "Mengkreditkan PPh 23 yang dipotong perusahaan sebagai pemotong atas sewa truk vendor Rp18.000.000 (itu kredit pajak milik vendor): PPh 29 menjadi Rp42.000.000 dan angsuran (340.670.000 − 147.320.000) ÷ 12.",
          C: "Memakai PPh terutang setelah kompensasi: (309.320.000 − 129.320.000) ÷ 12; bila SPT tahun lalu memuat kompensasi kerugian, Pasal 25 ayat (6) huruf a menghitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, yang di sini nol.",
          D: "Membagi PPh 29 dengan 12; rumus angsuran memakai PPh atas dasar angsuran dikurangi PPh 22, 23, dan 24, bukan PPh 29."
        },
        jebakan: "Dalam kasus panjang, bedakan posisi perusahaan sebagai pihak yang dipotong (kredit pajak) dan sebagai pemotong (bukan kredit pajak). Kompensasi kerugian yang habis pada tahun lalu tidak lagi mengurangi dasar angsuran tahun berjalan, jadi PPh terutang di SPT tidak dapat langsung dipakai."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1), (2), dan (6) huruf a UU PPh beserta Penjelasannya; Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 217 ayat (1) huruf d dan Pasal 225 ayat (1) (PPh Pasal 22 industri tertentu atas penjualan kepada distributor, tidak final; berlaku Januari sampai Juli 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf d (pemungut PPh Pasal 22 industri semen, kertas, baja, otomotif, dan farmasi atas penjualan kepada distributor)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 81/2024 Pasal 232 ayat (4) (angsuran memperhitungkan fasilitas Pasal 31E)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 113 ayat (2) huruf a dan Pasal 114 serta Lampiran (petunjuk pengisian Lampiran 6 dan Lampiran 7 SPT PPh Badan); menggantikan KEP-537/PJ/2000", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-070",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Pada 2026 Tuan Laurent, warga negara Negara R, bertugas sebagai sekretaris pertama Kedutaan Besar Negara R di Jakarta dan tinggal di Indonesia sepanjang tahun; Negara R memberikan perlakuan timbal balik kepada diplomat Indonesia. Selain gaji dari pemerintahnya, sejak Maret 2026 Tuan Laurent menerima honor narasumber rutin dari PT Wawasan Global Media untuk program televisi tentang budaya negaranya. Kedutaan juga mempekerjakan Nyonya Sari (WNI, bertempat tinggal di Bogor) sebagai staf administrasi lokal dengan gaji bulanan, dan kedutaan sendiri tidak menjalankan usaha di Indonesia. Untuk memo kepada PT Wawasan Global Media, pernyataan yang paling tepat menurut Pasal 3 ayat (1) UU PPh adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Kedutaan Besar Negara R bukan subjek pajak; Tuan Laurent tetap dikecualikan sebagai subjek pajak karena bukan warga negara Indonesia dan ada perlakuan timbal balik, sehingga honor dari PT Wawasan Global Media tidak dikenai PPh; Nyonya Sari merupakan subjek pajak dalam negeri.",
        B: "Kedutaan Besar Negara R bukan subjek pajak; Tuan Laurent tidak lagi memenuhi syarat pengecualian karena menerima penghasilan di luar jabatannya di Indonesia; Nyonya Sari ikut dikecualikan sebagai subjek pajak karena bekerja pada kantor perwakilan negara asing.",
        C: "Kedutaan Besar Negara R merupakan subjek pajak badan dalam negeri karena bertempat kedudukan di Indonesia; Tuan Laurent tidak lagi memenuhi syarat pengecualian karena menerima penghasilan di luar jabatannya di Indonesia; Nyonya Sari merupakan subjek pajak dalam negeri.",
        D: "Kedutaan Besar Negara R bukan subjek pajak; Tuan Laurent tidak lagi memenuhi syarat pengecualian karena menerima penghasilan di luar jabatannya di Indonesia; Nyonya Sari merupakan subjek pajak dalam negeri."
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kantor perwakilan negara asing dikecualikan tanpa syarat (Pasal 3 ayat (1) huruf a). Pejabat diplomatik dikecualikan hanya bila bukan WNI, tidak menerima atau memperoleh penghasilan di luar jabatannya di Indonesia, dan ada timbal balik (huruf b); honor rutin dari PT Wawasan menggugurkan syarat kedua. Staf lokal WNI tidak tercakup pengecualian, sehingga Nyonya Sari tetap subjek pajak dalam negeri.",
        jejakHitung: [
          ["Kedutaan (huruf a)", "bukan subjek pajak, tanpa syarat"],
          ["Tuan Laurent: bukan WNI dan ada timbal balik", "dua syarat terpenuhi"],
          ["Tuan Laurent: penghasilan di luar jabatan di Indonesia", "ada (honor) → pengecualian gugur"],
          ["Nyonya Sari: WNI, bertempat tinggal di Indonesia", "subjek pajak dalam negeri"]
        ],
        mengapaSalah: {
          A: "Syarat pengecualian diplomat bersifat kumulatif; menerima penghasilan lain di Indonesia menggugurkan pengecualian walaupun ada timbal balik.",
          B: "Pengecualian huruf b hanya untuk pejabat dan orang yang diperbantukan yang bukan WNI; staf lokal WNI tetap subjek pajak dalam negeri.",
          C: "Kantor perwakilan negara asing dikecualikan oleh Pasal 3 ayat (1) huruf a; kedudukannya di Indonesia tidak menjadikannya subjek pajak badan."
        },
        jebakan: "Empat kalimat hanya berbeda pada status satu pihak; uji syarat kumulatif pengecualian diplomat satu per satu. Karena kedutaan bukan pemotong PPh 21, Nyonya Sari menyetor sendiri PPh atas gajinya."
      },
      dasarHukum: [
        { pasal: "Pasal 3 ayat (1) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 2 ayat (3) huruf a UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-071",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 2 ayat (6) dan ayat (7) UU KUP (parafrase): Penghapusan NPWP dilakukan oleh Direktur Jenderal Pajak antara lain apabila Wajib Pajak badan dilikuidasi karena penghentian atau penggabungan usaha. Direktur Jenderal Pajak setelah melakukan pemeriksaan harus menerbitkan keputusan atas permohonan penghapusan NPWP dalam jangka waktu 6 (enam) bulan untuk Wajib Pajak orang pribadi atau 12 (dua belas) bulan untuk Wajib Pajak badan, sejak tanggal permohonan diterima secara lengkap.",
      stem: "RUPS PT Andalan Ritel Nusantara (PKP, tahun buku kalender) memutuskan pembubaran perseroan pada 30 Juni 2026. Likuidator menyelesaikan likuidasi pada 30 September 2026 dan melunasi seluruh utang pajak yang tercatat, lalu pada 14 Oktober 2026 mengajukan permohonan penghapusan NPWP dan pencabutan pengukuhan PKP melalui Coretax; permohonan dinyatakan lengkap pada hari itu. Dua tempat kegiatan usaha yang memiliki NITKU sudah ditutup sejak Agustus 2026. Berdasarkan kutipan tersebut, pernyataan yang paling tepat mengenai keputusan penghapusan NPWP adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "DJP melakukan pemeriksaan lebih dulu dan wajib menerbitkan keputusan paling lambat 14 Oktober 2027 (12 bulan sejak permohonan lengkap)", B: "DJP melakukan pemeriksaan lebih dulu dan wajib menerbitkan keputusan paling lambat 14 April 2027 (6 bulan sejak permohonan lengkap)", C: "DJP wajib menerbitkan keputusan paling lambat 14 Oktober 2027 tanpa pemeriksaan, karena likuidasi telah selesai dan utang pajak telah dilunasi", D: "DJP melakukan pemeriksaan lebih dulu dan wajib menerbitkan keputusan paling lambat 30 Juni 2027 (12 bulan sejak RUPS memutuskan pembubaran)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Untuk Wajib Pajak badan, jangka waktu keputusan penghapusan NPWP 12 bulan dihitung sejak permohonan diterima lengkap (14 Oktober 2026), dan keputusan diterbitkan setelah DJP melakukan pemeriksaan untuk memastikan kewajiban perpajakan badan telah diselesaikan.",
        jejakHitung: [
          ["Jenis Wajib Pajak", "badan → 12 bulan (orang pribadi 6 bulan)"],
          ["Titik awal", "permohonan lengkap 14 Oktober 2026"],
          ["Batas keputusan", "14 Oktober 2027"],
          ["Prasyarat keputusan", "pemeriksaan oleh DJP"]
        ],
        mengapaSalah: {
          B: "Enam bulan adalah jangka waktu untuk Wajib Pajak orang pribadi, bukan badan.",
          C: "Kutipan menyebut keputusan diterbitkan setelah melakukan pemeriksaan; pelunasan utang pajak tidak menghapus tahap itu.",
          D: "Jangka waktu dihitung sejak permohonan diterima lengkap, bukan sejak keputusan pembubaran."
        },
        jebakan: "Kasus pembubaran memuat tiga tanggal (RUPS, selesai likuidasi, permohonan lengkap); jangka keputusan selalu dihitung dari permohonan lengkap."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (6) huruf b dan ayat (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 2A ayat (2) UU PPh (UU 10/1994)", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024 Pasal 46 ayat (2) huruf a dan Pasal 47 ayat (3) dan ayat (4)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-072",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Hartmann Anlagenbau GmbH, badan yang berkedudukan di Negara G, menugaskan delapan teknisinya untuk merekondisi dan memelihara mesin produksi PT Sinar Kertas Prima di Serang sejak 2 Februari sampai 30 Juli 2026 (179 hari). P3B Indonesia–Negara G menetapkan BUT jasa timbul bila jasa diberikan lebih dari 90 hari dalam periode 12 bulan dan tarif pajak atas laba cabang 10%. Hartmann telah mendaftarkan BUT-nya di Coretax (NPWP dan pengukuhan PKP), dan BUT tersebut hanya memberikan jasa, tidak menjual barang di Indonesia. Pada 15 Oktober 2026 PT Sinar membayar termin akhir jasa Rp1.500.000.000 (belum termasuk PPN) atas faktur yang diterbitkan BUT, dan pada hari yang sama membayar Rp400.000.000 kepada kantor pusat Hartmann di Negara G atas suku cadang yang dikirim langsung dari Negara G dan diimpor sendiri oleh PT Sinar. Pajak penghasilan yang wajib dipotong PT Sinar atas kedua pembayaran itu adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 26 sebesar 20% × Rp1.900.000.000 = Rp380.000.000",
        B: "PPh Pasal 23 sebesar 2% × Rp1.500.000.000 = Rp30.000.000 dan PPh Pasal 26 sebesar 20% × Rp400.000.000 = Rp80.000.000",
        C: "PPh Pasal 23 sebesar 2% × Rp1.500.000.000 = Rp30.000.000; pembayaran suku cadang tidak dipotong PPh",
        D: "Tidak ada pemotongan atas kedua pembayaran karena menurut P3B laba usaha Hartmann hanya dipajaki di Negara G"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Jasa 179 hari melampaui ambang 90 hari P3B (dan 60 hari UU PPh), sehingga Hartmann mempunyai BUT di Indonesia. BUT diperlakukan seperti Wajib Pajak badan dalam negeri, sehingga imbalan jasa kepadanya dipotong PPh Pasal 23 2%, bukan PPh Pasal 26. Pembayaran harga barang kepada kantor pusat di luar negeri bukan objek PPh Pasal 26; atas impor suku cadang itu PT Sinar sendiri dipungut PPh Pasal 22 impor di pabean.",
        jejakHitung: [
          ["Masa jasa 179 hari > 90 hari (P3B) dan > 60 hari (Pasal 2 ayat (5))", "BUT terbentuk"],
          ["Imbalan jasa kepada BUT", "PPh 23: 2% × 1.500.000.000 = Rp30.000.000"],
          ["Harga suku cadang kepada kantor pusat", "pembelian barang → bukan objek PPh 26"],
          ["Tarif 10% atas laba cabang (P3B)", "kewajiban BUT atas laba setelah pajak, bukan pemotongan oleh PT Sinar"]
        ],
        mengapaSalah: {
          A: "Imbalan kepada BUT tidak dipotong PPh 26, dan harga barang bukan objek PPh 26.",
          B: "PPh 26 hanya atas jenis penghasilan tertentu (dividen, bunga, royalti, sewa, imbalan jasa, hadiah, dan sebagainya); pembelian barang dari luar negeri tidak termasuk.",
          D: "Perlindungan P3B atas laba usaha hanya berlaku sepanjang tidak ada BUT; dengan 179 hari, BUT terbentuk dan laba yang diatribusikan kepadanya dipajaki di Indonesia."
        },
        jebakan: "Begitu BUT terbentuk, imbalan jasa beralih dari rezim PPh 26 ke PPh 23; pembayaran harga barang ke luar negeri tetap bukan objek pemotongan."
      },
      dasarHukum: [
        { pasal: "Pasal 2 ayat (5) dan Pasal 5 UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 23 ayat (1) huruf c angka 2 UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2015-08-24" },
        { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-073",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      laporanUjian: ["B-2026-10"],
      stem: "Pada Oktober 2026 kantor konsultan menerima empat permintaan penegasan status subjek pajak untuk Tahun Pajak 2026. Di antara pihak-pihak berikut, yang merupakan subjek pajak badan dalam negeri adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Yayasan sosial yang didirikan di Indonesia, seluruh dananya berasal dari sumbangan masyarakat, dan tidak menjalankan usaha",
        B: "Unit pelaksana teknis dinas kesehatan kabupaten yang dibentuk dengan peraturan bupati, dibiayai APBD, seluruh penerimaannya masuk APBD, dan pembukuannya diperiksa inspektorat",
        C: "Kantor perwakilan organisasi internasional yang ditetapkan Menteri Keuangan, Indonesia menjadi anggotanya, dan tidak menjalankan usaha di Indonesia",
        D: "Kantor konsulat jenderal negara sahabat di Surabaya"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Badan mencakup yayasan, perkumpulan, dan organisasi lain, baik yang menjalankan usaha maupun tidak (Pasal 1 angka 3 UU KUP). Sumber dana berupa sumbangan menyangkut objek pajak (sumbangan dapat dikecualikan dari objek), bukan status subjek.",
        jejakHitung: [
          ["Yayasan sosial", "badan → subjek pajak badan dalam negeri"],
          ["UPT dinas yang memenuhi empat kriteria", "dikecualikan (Pasal 2 ayat (3) huruf b)"],
          ["Organisasi internasional yang ditetapkan", "bukan subjek (Pasal 3 ayat (1) huruf c)"],
          ["Konsulat negara asing", "bukan subjek (Pasal 3 ayat (1) huruf a)"]
        ],
        mengapaSalah: {
          B: "Unit pemerintah yang memenuhi empat kriteria kumulatif dikecualikan dari subjek pajak badan.",
          C: "Organisasi internasional yang ditetapkan Menteri Keuangan dan memenuhi syarat Pasal 3 bukan subjek pajak.",
          D: "Kantor perwakilan negara asing, termasuk konsulat, bukan subjek pajak."
        },
        jebakan: "Jangan mencampur status subjek dengan objek: yayasan yang hanya menerima sumbangan tetap subjek pajak, walaupun sumbangannya dapat bukan objek."
      },
      dasarHukum: [
        { pasal: "Pasal 1 angka 3 UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 2 ayat (1) huruf b dan ayat (3) huruf b, Pasal 3 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "B6-074",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Bina Karya Mandiri (badan dalam negeri, peredaran bruto di atas Rp50 miliar, tarif umum) mencatat pendapatan lain-lain Tahun Pajak 2025 berikut, seluruhnya sudah termasuk dalam laba komersial: (1) pengembalian PBB Tahun 2023 yang dahulu dibebankan sebagai biaya Rp45.000.000; (2) imbalan bunga atas keterlambatan pengembalian pajak Rp18.000.000; (3) pengembalian kelebihan PPh Badan Tahun Pajak 2023 berdasarkan SKPLB Rp260.000.000 yang dibukukan sebagai pendapatan; (4) hibah tunai dari PT Bina Holding, pemegang 75% sahamnya, Rp500.000.000; (5) laba selisih kurs yang belum direalisasi atas piutang usaha dalam dolar AS Rp70.000.000; (6) bunga deposito rupiah Rp150.000.000 yang telah dipotong PPh final; (7) klaim asuransi kerugian atas truk yang rusak Rp120.000.000; (8) dividen dari PT anak dalam negeri Rp300.000.000; dan (9) pembebasan utang dagang oleh pemasok Rp90.000.000. Perusahaan menyelenggarakan pembukuan sesuai SAK secara taat asas. Jumlah koreksi fiskal negatif atas pendapatan lain-lain tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp773.000.000", B: "Rp1.210.000.000", C: "Rp450.000.000", D: "Rp710.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Yang dikeluarkan dari penghasilan neto hanya pengembalian PPh Badan (PPh tidak pernah menjadi biaya, sehingga pengembaliannya bukan penghasilan), bunga deposito (final), dan dividen dalam negeri (bukan objek). Pengembalian PBB yang dahulu dibiayakan, imbalan bunga, hibah dari pemegang saham, selisih kurs, klaim asuransi, dan pembebasan utang adalah objek PPh tarif umum.",
        jejakHitung: [
          ["(3) Pengembalian PPh Badan (Pasal 9 ayat (1) huruf h)", "bukan penghasilan → −Rp260.000.000"],
          ["(6) Bunga deposito (PPh final)", "−Rp150.000.000"],
          ["(8) Dividen dalam negeri diterima badan dalam negeri", "−Rp300.000.000"],
          ["(1), (2), (4), (5), (7), (9)", "objek tarif umum → tanpa koreksi"],
          ["Koreksi negatif = 260.000.000 + 150.000.000 + 300.000.000", "Rp710.000.000"]
        ],
        mengapaSalah: {
          A: "Menganggap pengembalian PBB dan imbalan bunga bukan objek (+Rp63.000.000); keduanya objek menurut Pasal 4 ayat (1) huruf e dan huruf r.",
          B: "Menganggap hibah dari induk bukan objek (+Rp500.000.000); pengecualian hibah hanya untuk penerima tertentu (keluarga sedarah, badan keagamaan, pendidikan, sosial, pengusaha kecil) dan tanpa hubungan usaha, pekerjaan, kepemilikan, atau penguasaan.",
          C: "Membiarkan pengembalian PPh Badan sebagai penghasilan; karena PPh tidak dapat dibiayakan, pengembaliannya bukan tambahan kemampuan ekonomis yang dikenai pajak."
        },
        jebakan: "Uji setiap pengembalian pajak dengan pertanyaan: dahulu dibiayakan atau tidak? PBB dibiayakan sehingga pengembaliannya objek; PPh tidak dibiayakan sehingga pengembaliannya bukan penghasilan."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (1) huruf e, k, l, dan r UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (3) huruf a angka 2 dan huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PP 94/2010 (selisih kurs diakui mengikuti pembukuan sesuai SAK yang taat asas)" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-075",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 4 ayat (3) huruf f angka 2 UU PPh s.t.d.t.d. UU Cipta Kerja (parafrase): Dikecualikan dari objek pajak dividen yang berasal dari luar negeri yang diterima atau diperoleh Wajib Pajak badan dalam negeri, sepanjang diinvestasikan di wilayah Negara Kesatuan Republik Indonesia dalam jangka waktu tertentu: untuk dividen dari badan usaha luar negeri yang sahamnya diperdagangkan di bursa efek, paling sedikit sebesar dividen yang diterima; untuk dividen dari badan usaha luar negeri yang sahamnya tidak diperdagangkan di bursa efek, paling sedikit 30% dari laba setelah pajak.",
      stem: "PT Nusa Agrindo (badan dalam negeri) memiliki 60% saham Agrindo Holdings Pte. Ltd., badan di Negara S yang sahamnya tidak diperdagangkan di bursa efek. Pada Maret 2026 PT Nusa menerima dividen Rp8.000.000.000 setelah dipotong pajak di Negara S, dan direksi berencana memakai dana itu untuk membangun pabrik di Riau. Berdasarkan kutipan tersebut, rumusan yang paling tepat untuk memo kepada direksi adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Dividen tersebut dikecualikan dari objek PPh sepanjang diinvestasikan di wilayah Indonesia dalam jangka waktu tertentu paling sedikit 30% dari laba sebelum pajak Agrindo Holdings.",
        B: "Dividen tersebut dikecualikan dari objek PPh sepanjang diinvestasikan di wilayah Indonesia dalam jangka waktu tertentu paling sedikit sebesar dividen yang diterima, sama dengan dividen dari badan luar negeri yang sahamnya diperdagangkan di bursa.",
        C: "Dividen tersebut dikecualikan dari objek PPh sepanjang diinvestasikan di wilayah Indonesia dalam jangka waktu tertentu paling sedikit 30% dari laba setelah pajak Agrindo Holdings.",
        D: "Dividen tersebut dikecualikan dari objek PPh tanpa syarat investasi karena diterima Wajib Pajak badan dalam negeri, sama dengan dividen dari badan dalam negeri."
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk dividen dari badan usaha luar negeri yang sahamnya tidak diperdagangkan di bursa, syarat pengecualian adalah investasi di Indonesia dalam jangka waktu tertentu paling sedikit 30% dari laba setelah pajak; bila syarat tidak dipenuhi, dividen itu objek PPh dan pajak yang dibayar di Negara S diperhitungkan menurut Pasal 24.",
        jejakHitung: [
          ["Asal dividen", "badan luar negeri, saham tidak di bursa"],
          ["Syarat pengecualian", "investasi di Indonesia ≥ 30% laba setelah pajak, dalam jangka waktu tertentu"],
          ["Bila tidak dipenuhi", "objek PPh; kredit PPh 24 atas pajak Negara S"]
        ],
        mengapaSalah: {
          A: "Dasar 30% adalah laba setelah pajak, bukan laba sebelum pajak.",
          B: "Syarat 'paling sedikit sebesar dividen yang diterima' berlaku untuk badan luar negeri yang sahamnya diperdagangkan di bursa.",
          D: "Pengecualian tanpa syarat hanya untuk dividen dari badan dalam negeri yang diterima badan dalam negeri; dividen luar negeri bersyarat investasi."
        },
        jebakan: "Kalimat opsi hanya berbeda pada dasar persentase dan jenis badan pembagi; tandai 'bursa/tidak bursa' dan 'laba setelah pajak'."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (3) huruf f angka 2 UU PPh (UU 11/2020 jo. UU 6/2023)", berlakuSejak: "2020-11-02" },
        { pasal: "PMK 18/PMK.03/2021 (pelaksanaan dividen luar negeri yang diinvestasikan)" }
      ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-076",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PP 34/2017 (parafrase): Atas penghasilan dari persewaan tanah dan/atau bangunan dikenai PPh yang bersifat final sebesar 10% dari jumlah bruto nilai persewaan. PPh tersebut dipotong oleh penyewa dalam hal penyewa adalah badan pemerintah, Subjek Pajak badan dalam negeri, penyelenggara kegiatan, BUT, atau perwakilan perusahaan luar negeri lainnya, atau orang pribadi yang ditunjuk sebagai pemotong; dalam hal penyewa bukan pemotong, PPh tersebut wajib dibayar sendiri oleh pihak yang menyewakan.",
      stem: "PT Graha Sentosa Properti (badan dalam negeri, tarif umum, peredaran bruto di atas Rp50 miliar) pada Agustus 2026 menerima penghasilan sewa ruang di gedungnya (seluruh nilai belum termasuk PPN): (1) dari PT Mitra Logistik (badan dalam negeri) sewa Rp300.000.000 dan service charge yang ditagih dengan perjanjian terpisah Rp30.000.000; (2) dari dr. Hendra, orang pribadi yang tidak ditunjuk sebagai pemotong, sewa ruang praktik Rp60.000.000; dan (3) dari kantor perwakilan perusahaan perdagangan asing (KP3A) sewa Rp90.000.000. Penyewa (1) dan (3) telah memotong PPh dan memberikan bukti potong. Berdasarkan kutipan tersebut, PPh final yang wajib dibayar sendiri oleh PT Graha untuk Masa Agustus 2026, batas penyetorannya, dan perlakuan penghasilan sewa dalam rekonsiliasi fiskal adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.000.000 paling lambat 15 September 2026; seluruh penghasilan sewa Rp480.000.000 menjadi koreksi negatif, dan seluruh PPh finalnya dikreditkan dalam SPT Tahunan", B: "Rp6.000.000 paling lambat 15 September 2026; seluruh penghasilan sewa Rp480.000.000, termasuk service charge, dikeluarkan dari penghasilan neto fiskal sebagai penghasilan yang dikenai PPh final", C: "Rp15.000.000 (sewa dari dr. Hendra dan KP3A) paling lambat 15 September 2026; seluruh penghasilan sewa Rp480.000.000 dikeluarkan dari penghasilan neto fiskal", D: "Rp6.000.000 paling lambat 10 September 2026; service charge Rp30.000.000 tetap dikenai tarif umum karena perjanjiannya terpisah" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Hanya penyewa orang pribadi yang tidak ditunjuk sebagai pemotong yang tidak memotong, sehingga PT Graha membayar sendiri 10% × Rp60.000.000 = Rp6.000.000 paling lambat tanggal 15 bulan berikutnya. Seluruh penghasilan sewa, termasuk service charge, dikenai PPh final sehingga dikeluarkan dari penghasilan neto dan PPh-nya tidak dikreditkan.",
        jejakHitung: [
          ["(1) PT Mitra: 10% × (300.000.000 + 30.000.000)", "Rp33.000.000 dipotong penyewa"],
          ["(2) dr. Hendra (bukan pemotong): 10% × 60.000.000", "Rp6.000.000 dibayar sendiri"],
          ["(3) KP3A (perwakilan perusahaan luar negeri): 10% × 90.000.000", "Rp9.000.000 dipotong penyewa"],
          ["Batas setor", "15 September 2026 (PMK 81/2024)"],
          ["Koreksi negatif = 330.000.000 + 60.000.000 + 90.000.000", "Rp480.000.000"]
        ],
        mengapaSalah: {
          A: "PPh final tidak dapat dikreditkan; pelunasannya bersifat final.",
          C: "Perwakilan perusahaan luar negeri termasuk pihak yang wajib memotong, sehingga PT Graha tidak membayar sendiri atas sewa (3).",
          D: "Batas setor seluruh pajak masa sejak 2025 adalah tanggal 15; service charge termasuk jumlah bruto nilai persewaan walaupun perjanjiannya terpisah."
        },
        jebakan: "Siapa pemotongnya menentukan siapa yang menyetor; sifat finalnya tetap sama, sehingga seluruh sewa keluar dari rekonsiliasi."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2017", berlakuSejak: "2018-01-02" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-077",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Barokah Sejahtera Abadi (badan dalam negeri yang seluruh pemegang sahamnya beragama Islam; peredaran bruto Rp86 miliar; tarif umum) melaporkan laba komersial sebelum pajak Tahun Pajak 2025 Rp4.000.000.000. Beban yang tercatat antara lain: tunjangan PPh Pasal 21 yang diberikan kepada seluruh pegawai dan dicantumkan dalam slip gaji Rp180.000.000; PPh Pasal 21 atas gaji direksi yang ditanggung perusahaan tanpa dicantumkan sebagai tunjangan Rp96.000.000; zakat perusahaan yang dibayarkan kepada BAZNAS Rp120.000.000; beasiswa bagi anak pegawai dan mahasiswa berprestasi Rp75.000.000; sumbangan kepada panitia perayaan hari kemerdekaan tingkat RW Rp50.000.000; biaya liburan keluarga direktur utama yang juga pemegang saham Rp60.000.000; PBB dan pajak kendaraan Rp40.000.000; serta sanksi bunga STP PPh Pasal 21 Rp9.000.000. PPh Pasal 21 yang dipotong dari gaji pegawai selama 2025 Rp240.000.000. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp927.300.000", B: "Rp953.700.000", C: "Rp966.900.000", D: "Rp906.180.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dapat dikurangkan: tunjangan PPh dalam bentuk uang sebagai bagian gaji (UU PPh Pasal 6 ayat (1) huruf a angka 2); PPh 21 direksi yang ditanggung perusahaan, karena merupakan penggantian dalam bentuk kenikmatan bagi penerimanya (Lampiran PMK 168/2023 contoh I.4) dan biaya natura/kenikmatan boleh dikurangkan (Pasal 6 ayat (1) huruf n; PMK 66/2023 Pasal 2 ayat (1)); zakat kepada BAZNAS oleh badan dalam negeri milik pemeluk Islam (Pasal 9 ayat (1) huruf g; PP 60/2010 Pasal 1 ayat (1) huruf a); beasiswa (Pasal 6 ayat (1) huruf g); serta PBB dan pajak kendaraan (Pasal 6 ayat (1) huruf a angka 9). Larangan Pasal 9 ayat (1) huruf h hanya untuk PPh yang terutang oleh Wajib Pajak sendiri. Dikoreksi positif: sumbangan perayaan (huruf g), biaya pribadi pemegang saham (huruf b), dan sanksi bunga (huruf k).",
        jejakHitung: [
          ["Koreksi positif = 50.000.000 + 60.000.000 + 9.000.000", "Rp119.000.000"],
          ["PPh 21 direksi yang ditanggung (kenikmatan)", "tidak dikoreksi"],
          ["Neto fiskal = 4.000.000.000 + 119.000.000", "Rp4.119.000.000"],
          ["Peredaran bruto Rp86 miliar > Rp50 miliar", "tanpa Pasal 31E"],
          ["PPh = 22% × 4.119.000.000", "Rp906.180.000"]
        ],
        mengapaSalah: {
          A: "Mengoreksi positif PPh 21 direksi yang ditanggung Rp96.000.000 menurut perlakuan lama (PER-16/PJ/2016): 22% × 4.215.000.000. Sekarang PPh yang ditanggung pemberi kerja adalah kenikmatan bagi pegawai yang biayanya dapat dikurangkan (Pasal 6 ayat (1) huruf n).",
          B: "Mengoreksi zakat Rp120.000.000 (dan PPh 21 yang ditanggung): 22% × 4.335.000.000. Zakat kepada badan amil zakat resmi oleh badan dalam negeri milik pemeluk Islam dikecualikan dari larangan Pasal 9 ayat (1) huruf g.",
          C: "Mengoreksi tunjangan PPh Rp180.000.000 (dan PPh 21 yang ditanggung): 22% × 4.395.000.000. Tunjangan dalam bentuk uang yang dicantumkan sebagai bagian gaji adalah biaya gaji yang dapat dikurangkan."
        },
        jebakan: "Aturan lama membedakan tunjangan PPh (boleh dibiayakan) dan PPh ditanggung (tidak boleh). Sejak natura dan/atau kenikmatan boleh dibiayakan (berlaku 1 Januari 2022 atau awal tahun buku 2022, PMK 66/2023 Pasal 2 ayat (7)), keduanya dapat dibiayakan. PPh 21 yang dipotong dari gaji pegawai bukan beban tambahan perusahaan."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a angka 2 dan angka 9 serta huruf g UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf n UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 9 ayat (1) huruf b, g, h, dan k UU PPh beserta Penjelasan huruf h", berlakuSejak: "2009-01-01" }, { pasal: "PMK 66/2023 Pasal 2 ayat (1) dan ayat (7)", berlakuSejak: "2023-07-01" }, { pasal: "PMK 168/2023 Lampiran contoh I.4 (PPh 21 ditanggung pemberi kerja sebagai kenikmatan)", berlakuSejak: "2024-01-01" }, { pasal: "PP 60/2010 Pasal 1 ayat (1) huruf a", berlakuSejak: "2010-08-20" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-078",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Konsultan meninjau rekonsiliasi fiskal 2025 empat klien yang membebankan pembentukan cadangan dalam laporan laba rugi: PT BPR Makmur Sentosa (cadangan kerugian piutang kredit), PT Tambang Batu Andalan (cadangan biaya reklamasi), PT Olah Limbah Lestari yang usahanya pengolahan limbah industri (cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah), dan PT Distribusi Elektronik Nusa, distributor barang elektronik (cadangan penurunan nilai piutang usaha). Rumusan memo yang paling tepat menurut Pasal 9 ayat (1) huruf c UU PPh adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Pembentukan atau pemupukan dana cadangan tidak dapat dikurangkan, kecuali antara lain cadangan piutang tak tertagih untuk usaha bank dan badan usaha lain yang menyalurkan kredit, cadangan biaya reklamasi untuk usaha pertambangan, dan cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah industri untuk usaha pengolahan limbah industri, yang ketentuan dan syaratnya diatur dengan Peraturan Menteri Keuangan; cadangan ketiga klien pertama dapat dikurangkan sepanjang memenuhi syarat PMK, dan cadangan penurunan nilai piutang PT Distribusi Elektronik Nusa juga dapat dikurangkan karena telah dibebankan dalam laporan laba rugi komersial.",
        B: "Pembentukan atau pemupukan dana cadangan tidak dapat dikurangkan, kecuali antara lain cadangan piutang tak tertagih untuk semua Wajib Pajak yang memiliki piutang usaha, cadangan biaya reklamasi untuk usaha pertambangan, dan cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah industri untuk usaha pengolahan limbah industri, yang ketentuan dan syaratnya diatur dengan Peraturan Menteri Keuangan; cadangan keempat klien dapat dikurangkan sepanjang memenuhi syarat PMK.",
        C: "Pembentukan atau pemupukan dana cadangan tidak dapat dikurangkan, kecuali antara lain cadangan piutang tak tertagih untuk usaha bank dan badan usaha lain yang menyalurkan kredit, cadangan biaya reklamasi untuk usaha pertambangan, dan cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah industri untuk usaha pengolahan limbah industri, yang ketentuan dan syaratnya diatur dengan Peraturan Menteri Keuangan; cadangan ketiga klien pertama dapat dikurangkan tanpa batasan dan syarat apa pun, sedangkan cadangan penurunan nilai piutang PT Distribusi Elektronik Nusa dikoreksi positif.",
        D: "Pembentukan atau pemupukan dana cadangan tidak dapat dikurangkan, kecuali antara lain cadangan piutang tak tertagih untuk usaha bank dan badan usaha lain yang menyalurkan kredit, cadangan biaya reklamasi untuk usaha pertambangan, dan cadangan biaya penutupan dan pemeliharaan tempat pembuangan limbah industri untuk usaha pengolahan limbah industri, yang ketentuan dan syaratnya diatur dengan Peraturan Menteri Keuangan; cadangan ketiga klien pertama dapat dikurangkan sepanjang memenuhi syarat PMK, sedangkan cadangan penurunan nilai piutang PT Distribusi Elektronik Nusa dikoreksi positif."
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 9 ayat (1) huruf c melarang pembentukan cadangan kecuali untuk usaha tertentu (bank dan penyalur kredit, sewa guna usaha dengan hak opsi, pembiayaan konsumen, anjak piutang, asuransi, penjaminan LPS, reklamasi pertambangan, penanaman kembali kehutanan, penutupan limbah bagi usaha pengolahan limbah) dengan syarat PMK. Perusahaan dagang membebankan piutang hanya saat nyata-nyata tidak dapat ditagih menurut Pasal 6 ayat (1) huruf h.",
        jejakHitung: [
          ["BPR (penyalur kredit)", "dikecualikan, dengan syarat PMK"],
          ["Reklamasi pertambangan", "dikecualikan, dengan syarat PMK"],
          ["Penutupan limbah oleh usaha pengolahan limbah", "dikecualikan, dengan syarat PMK"],
          ["Distributor: penurunan nilai piutang", "koreksi positif (beda waktu)"]
        ],
        mengapaSalah: {
          A: "Pembebanan dalam laporan komersial tidak membuat cadangan dapat dikurangkan; distributor hanya dapat membiayakan piutang yang nyata-nyata tidak dapat ditagih.",
          B: "Pengecualian cadangan piutang tidak berlaku untuk semua pemilik piutang usaha, hanya bank dan badan usaha penyalur kredit tertentu.",
          C: "Cadangan yang dikecualikan tetap tunduk pada batasan dan syarat dalam PMK, antara lain jenis usaha dan batas jumlahnya."
        },
        jebakan: "Keempat opsi memuat daftar pengecualian yang mirip; bedanya hanya pada lingkup pengecualian, syarat PMK, dan nasib cadangan distributor."
      },
      dasarHukum: [
        { pasal: "Pasal 9 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 81/PMK.03/2009 s.t.d.d. PMK 219/PMK.011/2012 (cadangan yang dapat dikurangkan)" },
        { pasal: "Pasal 6 ayat (1) huruf h UU PPh; PMK 207/PMK.010/2015", berlakuSejak: "2015-11-11" }
      ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-079",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Andalan Ritel Prima (badan dalam negeri, peredaran bruto Rp140 miliar, tarif umum) menerapkan PSAK 116 untuk dua sewa tanpa hak opsi. Gudang di Cikarang disewa dengan sewa tahunan Rp600.000.000 untuk 2025 yang dibayar Januari 2025 (PPh final 10% Rp60.000.000 dipotong dan disetor PT Andalan sebagai penyewa); di laporan laba rugi 2025 tercatat penyusutan aset hak-guna gudang Rp540.000.000 dan beban bunga liabilitas sewa Rp110.000.000. Forklift disewa dari PT Mesin Prima dengan sewa 2025 Rp110.000.000 (PPh Pasal 23 Rp2.200.000 dipotong); di laporan laba rugi tercatat penyusutan aset hak-guna Rp100.000.000 dan beban bunga Rp20.000.000. Saldo liabilitas sewa akhir 2025 Rp2.100.000.000, dan PPN atas sewa forklift telah dikreditkan. Laba komersial sebelum pajak 2025 Rp3.000.000.000 dan tidak ada koreksi lain. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp660.000.000", B: "Rp688.600.000", C: "Rp673.200.000", D: "Rp646.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Secara fiskal penyewa dalam sewa tanpa hak opsi membebankan sewa yang menjadi bagian tahun berjalan, bukan penyusutan aset hak-guna dan bunga liabilitas sewa. Gudang: beban komersial Rp650.000.000 dibanding sewa Rp600.000.000; forklift: Rp120.000.000 dibanding Rp110.000.000; selisih Rp60.000.000 dikoreksi positif (beda waktu).",
        jejakHitung: [
          ["Gudang: (540.000.000 + 110.000.000) − 600.000.000", "+Rp50.000.000"],
          ["Forklift: (100.000.000 + 20.000.000) − 110.000.000", "+Rp10.000.000"],
          ["Neto fiskal = 3.000.000.000 + 60.000.000", "Rp3.060.000.000"],
          ["PPh = 22% × 3.060.000.000", "Rp673.200.000"]
        ],
        mengapaSalah: {
          A: "Mengikuti beban PSAK 116 apa adanya; perlakuan fiskal penyewa mengikuti sewa yang terutang untuk tahun berjalan.",
          B: "Hanya mengoreksi beban bunga (Rp130.000.000) tanpa mengganti penyusutan aset hak-guna dengan sewa fiskal.",
          D: "Membalik arah koreksi; beban komersial lebih besar daripada sewa fiskal, sehingga koreksinya positif."
        },
        jebakan: "PPh final dan PPh 23 yang dipotong PT Andalan sebagai penyewa, saldo liabilitas sewa, dan PPN adalah data pengalih; yang menentukan hanyalah perbandingan beban PSAK 116 dengan sewa fiskal."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "KMK 1169/KMK.01/1991 (sewa guna usaha tanpa hak opsi)", berlakuSejak: "1991-01-19" },
        { pasal: "PP 94/2010 (penghitungan penghasilan kena pajak berdasarkan pembukuan)" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-080",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Gudang permanen PT Sahabat Pangan Abadi (tahun buku kalender, tarif umum) terbakar pada 12 Mei 2025. Saat terbakar, nilai sisa buku fiskal gudang Rp800.000.000, sedangkan nilai buku komersialnya Rp650.000.000 (penyusutan gudang Januari–April 2025 sama secara komersial dan fiskal). Perusahaan asuransi membayar ganti rugi Rp1.100.000.000 pada Oktober 2025, sehingga laporan laba rugi mencatat keuntungan Rp450.000.000; biaya pembersihan puing Rp25.000.000 dibebankan. Untuk mengganti peralatan yang ikut terbakar, pada 20 Agustus 2025 perusahaan membeli dan melunasi mesin pengemas (Kelompok 2) Rp960.000.000 ditambah PPN yang dapat dikreditkan; secara fiskal mesin disusutkan dengan metode saldo menurun, sedangkan secara komersial dengan garis lurus 10 tahun (penyusutan komersial 2025 Rp40.000.000). Total koreksi fiskal atas kedua peristiwa tersebut untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi negatif Rp210.000.000",
        B: "Koreksi negatif Rp160.000.000",
        C: "Koreksi positif Rp90.000.000",
        D: "Koreksi negatif Rp350.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 11 ayat (8): penggantian asuransi menjadi penghasilan dan nilai sisa buku fiskal menjadi kerugian, sehingga keuntungan fiskal Rp300.000.000 lebih kecil Rp150.000.000 dari keuntungan komersial. Mesin baru disusutkan sejak bulan pengeluaran (Agustus) dengan saldo menurun 25% × 5/12 = Rp100.000.000, lebih besar Rp60.000.000 dari penyusutan komersial.",
        jejakHitung: [
          ["Keuntungan fiskal = 1.100.000.000 − 800.000.000", "Rp300.000.000"],
          ["Keuntungan komersial = 1.100.000.000 − 650.000.000", "Rp450.000.000 → koreksi −Rp150.000.000"],
          ["Penyusutan fiskal mesin = 960.000.000 × 25% × 5/12", "Rp100.000.000"],
          ["Selisih penyusutan = 40.000.000 − 100.000.000", "−Rp60.000.000"],
          ["Total koreksi", "negatif Rp210.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai tarif garis lurus 12,5% (Rp50.000.000) padahal metode fiskal yang dipilih saldo menurun 25%.",
          C: "Membalik arah koreksi kebakaran: nilai sisa buku fiskal lebih besar dari nilai buku komersial, sehingga keuntungan fiskal lebih kecil (koreksi negatif).",
          D: "Menyusutkan mesin setahun penuh (Rp240.000.000) padahal dibeli Agustus sehingga hanya 5 bulan."
        },
        jebakan: "Biaya pembersihan puing dan PPN adalah data pengalih; fokus pada perbedaan nilai sisa buku serta metode dan bulan mulai penyusutan."
      },
      dasarHukum: [
        { pasal: "Pasal 11 ayat (1), (2), (6), dan (8) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 72/2023", berlakuSejak: "2023-07-17" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-081",
      topik: "B6.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Sejak 1 Januari 2024 PT Cahaya Ekspedisi Nusantara menyewa lima truk (golongan II, Kelompok 2) dari PT Mandiri Leasing Finance, perusahaan pembiayaan, dengan sewa guna usaha dengan hak opsi selama 3 tahun; harga perolehan truk oleh lessor Rp1.500.000.000. Pada 2025 PT Cahaya membayar angsuran Rp600.000.000 (bagian pokok Rp480.000.000 dan bunga Rp120.000.000). Dalam laporan keuangan sesuai PSAK 116, PT Cahaya mencatat aset hak-guna dan membebankan penyusutan Rp187.500.000 serta beban bunga Rp120.000.000 untuk 2025. Jumlah yang dapat dibebankan secara fiskal oleh PT Cahaya atas sewa guna usaha tersebut untuk Tahun Pajak 2025, dan perlakuan PPh Pasal 23 atas angsurannya, adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp307.500.000 (penyusutan aset hak-guna dan bunga sesuai PSAK 116); PPh Pasal 23 tidak dipotong",
        B: "Rp600.000.000 (seluruh angsuran sewa guna usaha, lessee tidak menyusutkan truk); PPh Pasal 23 tidak dipotong",
        C: "Rp600.000.000 (seluruh angsuran); PPh Pasal 23 2% × Rp600.000.000 = Rp12.000.000 wajib dipotong",
        D: "Rp120.000.000 (bagian bunga saja); PPh Pasal 23 15% × Rp120.000.000 = Rp18.000.000 wajib dipotong"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Menurut KMK 1169/KMK.01/1991, lessee dalam sewa guna usaha dengan hak opsi tidak menyusutkan barang modal sampai hak opsi digunakan, dan seluruh pembayaran sewa guna usaha (kecuali atas tanah) dapat dibiayakan. Pembayaran sewa guna usaha dengan hak opsi dikecualikan dari pemotongan PPh Pasal 23.",
        jejakHitung: [
          ["Jenis transaksi", "sewa guna usaha dengan hak opsi; masa 3 tahun memenuhi minimum golongan II"],
          ["Biaya fiskal 2025 = angsuran pokok + bunga", "Rp600.000.000"],
          ["Beban komersial = 187.500.000 + 120.000.000", "Rp307.500.000 → koreksi negatif Rp292.500.000"],
          ["PPh 23", "tidak dipotong (Pasal 23 ayat (4) huruf b)"]
        ],
        mengapaSalah: {
          A: "Penyusutan aset hak-guna adalah perlakuan akuntansi; secara fiskal lessee membebankan angsuran, bukan penyusutan.",
          C: "Pasal 23 ayat (4) huruf b mengecualikan sewa yang dibayarkan sehubungan dengan sewa guna usaha dengan hak opsi.",
          D: "Seluruh angsuran (pokok dan bunga) dapat dibiayakan, dan bagian bunga dalam sewa guna usaha dengan hak opsi tidak dipotong PPh 23."
        },
        jebakan: "Bedakan sewa guna usaha dengan hak opsi (dibiayakan penuh, tanpa PPh 23) dari sewa operasi (sewa dibiayakan, dipotong PPh 23 2%)."
      },
      dasarHukum: [
        { pasal: "KMK 1169/KMK.01/1991", berlakuSejak: "1991-01-19" },
        { pasal: "Pasal 23 ayat (4) huruf b UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-082",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-04",
      stem: "Data untuk soal ini dan tiga soal berikutnya (V-B6-04): Grup Sentosa (tahun buku kalender) terdiri dari PT Sentosa Pangan Tbk dan anak usahanya, PT Sentosa Distribusi (99% dimiliki PT Sentosa Pangan Tbk). Pada Tahun Pajak 2025, 41% saham disetor PT Sentosa Pangan Tbk tercatat dan diperdagangkan di BEI, dimiliki 2.400 pihak yang masing-masing memiliki kurang dari 5%, kondisi itu terpenuhi selama 200 hari kalender, dan laporan kepemilikan dari biro administrasi efek tersedia untuk dilampirkan. Peredaran brutonya Rp480 miliar. Laba komersial sebelum pajak Rp52.000.000.000 sudah memuat dividen tunai dari PT Sentosa Distribusi Rp4.000.000.000, bunga deposito Rp1.000.000.000 (PPh final Rp200.000.000), biaya entertainment tanpa daftar nominatif Rp600.000.000, dan sanksi bunga STP Rp150.000.000. Kredit pajak 2025: PPh 22 impor Rp3.100.000.000, PPh 23 dipotong pelanggan Rp420.000.000, dan angsuran PPh 25 Rp5.000.000.000. PPh Pasal 29 PT Sentosa Pangan Tbk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp742.500.000", B: "Rp352.500.000", C: "Rp1.985.000.000", D: "Rp552.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "final-nonfinal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Keempat syarat perseroan terbuka terpenuhi (≥ 40% di BEI, ≥ 300 pihak, masing-masing < 5%, ≥ 183 hari), sehingga tarif 19%. Dividen dari anak dalam negeri (bukan objek) dan bunga deposito (final) dikeluarkan; entertainment tanpa daftar nominatif dan sanksi dikoreksi positif. PPh final tidak dikreditkan.",
        jejakHitung: [
          ["Neto fiskal = 52.000.000.000 − 4.000.000.000 − 1.000.000.000 + 600.000.000 + 150.000.000", "Rp47.750.000.000"],
          ["Syarat Tbk: 41% · 2.400 pihak · < 5% · 200 hari", "terpenuhi → 19%"],
          ["PPh = 19% × 47.750.000.000", "Rp9.072.500.000"],
          ["Kredit = 3.100.000.000 + 420.000.000 + 5.000.000.000", "Rp8.520.000.000"],
          ["PPh 29 = 9.072.500.000 − 8.520.000.000", "Rp552.500.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengeluarkan bunga deposito Rp1.000.000.000 yang sudah dikenai PPh final (PKP Rp48.750.000.000).",
          B: "Mengkreditkan PPh final bunga deposito Rp200.000.000.",
          C: "Memakai tarif 22% (PPh Rp10.505.000.000) padahal seluruh syarat tarif 19% terpenuhi."
        },
        jebakan: "Peredaran bruto Rp480 miliar menutup kemungkinan Pasal 31E; fokuskan uji pada empat syarat tarif 19% lalu pilah pos final dan bukan objek."
      },
      dasarHukum: [
        { pasal: "Pasal 17 ayat (1) huruf b dan ayat (2b) UU PPh", berlakuSejak: "2022-01-01" },
        { pasal: "PP 55/2022 (penurunan tarif perseroan terbuka)", berlakuSejak: "2022-12-20" },
        { pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 28 dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-083",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-04",
      stem: "Melanjutkan data Grup Sentosa (V-B6-04): PT Sentosa Distribusi (badan dalam negeri bukan perseroan terbuka, PKP, terdaftar 2010, tidak pernah memakai PPh final UMKM) pada Tahun Pajak 2025 mencatat penjualan neto Rp47.200.000.000 (PPN keluaran yang dipungut Rp5.192.000.000 tidak termasuk), penghasilan sewa ruko kepada badan usaha Rp600.000.000 (PPh final dipotong penyewa), dan bunga jasa giro Rp200.000.000 (PPh final dipotong bank). Laba komersial sebelum pajak Rp3.400.000.000 sudah memuat kedua penghasilan final itu, biaya pemeliharaan ruko yang disewakan Rp80.000.000, dan biaya entertainment tanpa daftar nominatif Rp70.000.000. Dividen yang dibagikan kepada PT Sentosa Pangan Tbk Rp4.000.000.000 dan kepada pemegang saham minoritas tidak dibebankan dalam laba rugi. PPh badan terutang PT Sentosa Distribusi Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp605.000.000", B: "Rp558.030.000", C: "Rp574.750.000", D: "Rp302.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Peredaran bruto Pasal 31E = penjualan neto + seluruh penghasilan luar usaha termasuk yang final, tanpa PPN: Rp48 miliar (≤ Rp50 miliar). Neto fiskal mengeluarkan penghasilan final dan mengoreksi biaya terkait penghasilan final serta entertainment; fasilitas berlaku atas 4,8/48 = 10% PKP.",
        jejakHitung: [
          ["Neto fiskal = 3.400.000.000 − 600.000.000 − 200.000.000 + 80.000.000 + 70.000.000", "Rp2.750.000.000"],
          ["Peredaran bruto = 47.200.000.000 + 600.000.000 + 200.000.000", "Rp48.000.000.000"],
          ["PKP fasilitas = 4,8/48 × 2.750.000.000", "Rp275.000.000"],
          ["11% × 275.000.000", "Rp30.250.000"],
          ["22% × 2.475.000.000", "Rp544.500.000"],
          ["PPh terutang", "Rp574.750.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan PPN keluaran ke peredaran bruto (Rp53,192 miliar) sehingga Pasal 31E dianggap gugur: 22% × 2.750.000.000.",
          B: "Tidak mengoreksi biaya pemeliharaan ruko yang terkait penghasilan final (PKP Rp2.670.000.000).",
          D: "Mengenakan 11% atas seluruh PKP; tarif 11% atas seluruh PKP hanya bila peredaran bruto ≤ Rp4,8 miliar."
        },
        jebakan: "Pasal 31E bergantung pada definisi peredaran bruto: penghasilan final dan bukan objek masuk, PPN keluaran tidak."
      },
      dasarHukum: [
        { pasal: "Pasal 31E ayat (1) UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
        { pasal: "Pasal 4 ayat (2) dan Pasal 9 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 02/PMK.03/2010; SE-27/PJ.22/1986 (daftar nominatif promosi dan entertainment)", berlakuSejak: "2010-01-05" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-084",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-B6-04",
      stem: "Melanjutkan data Grup Sentosa (V-B6-04): PPh badan terutang PT Sentosa Distribusi Tahun Pajak 2025 Rp574.750.000. Dokumen pajak 2025 yang terkumpul: BPPU PPh Pasal 22 dari bendahara Dinas Kesehatan Kabupaten Sukamaju atas penjualan alat kesehatan Rp840.000.000 (dipungut 1,5% = Rp12.600.000), sedangkan satu pembelian alat tulis oleh dinas yang sama Rp1.800.000 tidak dipungut; BPPU PPh Pasal 23 dari pelanggan atas jasa pengiriman Rp18.400.000; bukti pembayaran angsuran PPh Pasal 25 Rp420.000.000; bukti potong PPh final sewa ruko Rp60.000.000 dan jasa giro Rp40.000.000; bukti potong PPh Pasal 23 yang dibuat PT Sentosa Distribusi atas sewa kendaraan dari vendor Rp9.000.000; struk pembelian BBM armada di SPBU; serta pembayaran STP bunga keterlambatan PPh Pasal 25 Rp1.200.000. PPh Pasal 29 PT Sentosa Distribusi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp123.750.000", B: "Rp114.750.000", C: "Rp23.750.000", D: "Rp122.550.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kredit pajak hanya PPh 22 yang dipungut bendahara, PPh 23 yang dipotong pelanggan, dan angsuran PPh 25. Pembelian alat tulis Rp1.800.000 memang dikecualikan dari pungutan (tidak lebih dari Rp2.000.000, diuji tanpa PPN dan bukan pembayaran yang dipecah); PPh final, PPh 23 yang dipotong perusahaan dari vendor, PPh 22 BBM (dipungut dari SPBU, bukan dari pembeli eceran), dan pembayaran sanksi tidak dikreditkan.",
        jejakHitung: [
          ["PPh 22 bendahara = 1,5% × 840.000.000", "Rp12.600.000"],
          ["Kredit = 12.600.000 + 18.400.000 + 420.000.000", "Rp451.000.000"],
          ["PPh 29 = 574.750.000 − 451.000.000", "Rp123.750.000"]
        ],
        mengapaSalah: {
          B: "Mengkreditkan PPh 23 Rp9.000.000 yang dipotong perusahaan dari vendor; itu kredit pajak milik vendor.",
          C: "Mengkreditkan PPh final sewa dan jasa giro Rp100.000.000.",
          D: "Mengkreditkan pembayaran STP Rp1.200.000; sanksi administrasi bukan kredit pajak."
        },
        jebakan: "Pengecualian Rp2.000.000 pada PPh 22 bendahara dan PPh 22 BBM di SPBU adalah materi Pot/Put yang disisipkan; keduanya tidak menambah kredit pajak pembeli."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 (ketentuan PPh Pasal 22 untuk Januari–Juli 2025) dan PMK 51/2025 (sejak 1 Agustus 2025); PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022 dicabut PMK 81/2024 per 1 Januari 2025" }, { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-085",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kasusId: "V-B6-04",
      stem: "Melanjutkan data Grup Sentosa (V-B6-04): PT Sentosa Pangan Tbk adalah emiten yang wajib menyampaikan laporan keuangan berkala kepada OJK. SPT Tahunan 2025-nya melaporkan PPh terutang Rp9.072.500.000 dengan kredit PPh 22 Rp3.100.000.000 dan PPh 23 Rp420.000.000. Untuk memo penghitungan angsuran PPh Pasal 25 tahun 2026, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Sebagai Wajib Pajak masuk bursa, angsuran PPh Pasal 25 tahun 2026 dihitung dari SPT Tahunan 2025, yaitu PPh terutang dikurangi PPh 22 dan 23 yang dikreditkan lalu dibagi 12, sama seperti Wajib Pajak badan lainnya.", B: "Sebagai Wajib Pajak masuk bursa, angsuran PPh Pasal 25 tahun 2026 dihitung berdasarkan Rencana Kerja dan Anggaran Perusahaan tahun berjalan yang telah disahkan RUPS.", C: "Sebagai Wajib Pajak masuk bursa, angsuran PPh Pasal 25 tahun 2026 dihitung berdasarkan laporan keuangan berkala terakhir, tetapi baru boleh diterapkan setelah memperoleh persetujuan tertulis Direktur Jenderal Pajak.", D: "Sebagai Wajib Pajak masuk bursa, angsuran PPh Pasal 25 tahun 2026 dihitung berdasarkan laporan keuangan berkala terakhir yang disampaikan, sesuai ketentuan Wajib Pajak tertentu dalam Pasal 25 ayat (7) UU PPh dan peraturan pelaksanaannya." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 25 ayat (7) memberi wewenang kepada Menteri Keuangan untuk mengatur angsuran Wajib Pajak tertentu; bagi Wajib Pajak masuk bursa dan Wajib Pajak lain yang wajib membuat laporan keuangan berkala, angsuran dihitung berdasarkan laporan keuangan berkala terakhir, bukan SPT Tahunan tahun lalu.",
        jejakHitung: [
          ["Status PT Sentosa Pangan Tbk", "Wajib Pajak masuk bursa"],
          ["Dasar angsuran", "laporan keuangan berkala terakhir"],
          ["Pembanding", "bank: laporan keuangan yang disampaikan kepada OJK; BUMN/BUMD: RKAP; Wajib Pajak umum: SPT tahun lalu"]
        ],
        mengapaSalah: {
          A: "Rumus SPT tahun lalu dibagi 12 berlaku bagi Wajib Pajak badan umum, bukan Wajib Pajak masuk bursa.",
          B: "RKAP yang disahkan RUPS adalah dasar angsuran BUMN dan BUMD.",
          C: "Penghitungan berdasarkan laporan keuangan berkala tidak memerlukan persetujuan Direktur Jenderal Pajak."
        },
        jebakan: "Data PPh terutang dan kredit 2025 sengaja diberikan untuk memancing rumus umum; status emiten mengubah dasar penghitungan."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (7) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 226 ayat (2) dan Pasal 228 (mencabut PMK 215/PMK.03/2018)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-086",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-05",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-B6-05): PT Garuda Mekatronika (manufaktur, badan dalam negeri, tahun buku kalender, peredaran bruto setiap tahun di atas Rp50 miliar, tanpa fasilitas penanaman modal) memiliki riwayat penghasilan neto fiskal: 2019 rugi Rp1.100.000.000; 2020 rugi Rp1.200.000.000; 2021 laba Rp300.000.000; 2022 laba Rp250.000.000; 2023 rugi Rp1.500.000.000; dan 2024 laba Rp500.000.000. Kompensasi selalu dilakukan mulai dari kerugian yang paling lama. Untuk Tahun Pajak 2025, laba komersial sebelum pajak Rp2.250.000.000; koreksi positif Rp250.000.000 (entertainment tanpa daftar nominatif, sumbangan, dan sanksi pajak) dan koreksi negatif Rp100.000.000 (bunga deposito). Sisa kerugian yang masih dapat dikompensasikan ke Tahun Pajak 2026 dan tahun terakhir pemakaiannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp350.000.000, dapat dipakai sampai Tahun Pajak 2028",
        B: "Rp300.000.000, dapat dipakai sampai Tahun Pajak 2028",
        C: "Rp450.000.000, dapat dipakai sampai Tahun Pajak 2028",
        D: "Nihil, karena seluruh kerugian telah terpakai dan PKP 2025 masih Rp200.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Lima tahun dihitung mulai tahun sesudah rugi, dan kerugian tertua dipakai lebih dulu. Rugi 2019 terpakai sampai 2024 dan sisanya Rp50.000.000 hangus; rugi 2020 dipakai penuh pada tahun terakhirnya (2025); rugi 2023 menyerap sisa laba 2025 dan menyisakan Rp300.000.000 untuk 2026–2028.",
        jejakHitung: [
          ["Rugi 2019: 1.100 − 300 (2021) − 250 (2022) − 500 (2024), dalam juta", "sisa Rp50.000.000 hangus akhir 2024"],
          ["Neto fiskal 2025 = 2.250.000.000 + 250.000.000 − 100.000.000", "Rp2.400.000.000"],
          ["Kompensasi rugi 2020 (tahun terakhir 2025)", "−Rp1.200.000.000"],
          ["Kompensasi rugi 2023", "−Rp1.200.000.000 → PKP nihil"],
          ["Sisa rugi 2023 = 1.500.000.000 − 1.200.000.000", "Rp300.000.000 (sampai 2028)"]
        ],
        mengapaSalah: {
          A: "Menganggap sisa rugi 2019 Rp50.000.000 masih dapat dipakai pada 2025; batas terakhirnya Tahun Pajak 2024.",
          C: "Memakai laba komersial Rp2.250.000.000, bukan penghasilan neto fiskal Rp2.400.000.000.",
          D: "Memakai rugi 2023 lebih dulu pada 2024 sehingga rugi 2019 hangus lebih banyak; soal menyatakan kompensasi dimulai dari kerugian paling lama."
        },
        jebakan: "Buat tabel per tahun asal kerugian dengan kolom 'tahun terakhir' sebelum menjumlah; urutan pemakaian menentukan berapa yang hangus."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-087",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      kasusId: "V-B6-05",
      formulirRef: "1771.2A.1",
      stem: "Melanjutkan data PT Garuda Mekatronika (V-B6-05): dalam SPT Tahunan PPh Badan Tahun Pajak 2025, perusahaan harus melaporkan rugi neto fiskal per tahun asal (2019, 2020, dan 2023) beserta distribusi kompensasinya per tahun pajak, termasuk jumlah yang dikompensasikan pada 2025 sebagai pengurang penghasilan neto. Menurut struktur SPT Tahunan PPh Badan dalam PER-11/PJ/2025, rincian tersebut dilaporkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 1 (rekonsiliasi laporan keuangan) sebagai penyesuaian fiskal negatif atas laba komersial", B: "Lampiran 9 (daftar penyusutan dan amortisasi fiskal) bersama rincian harta", C: "Lampiran 7 (penghitungan kompensasi kerugian fiskal); jumlahnya dibawa ke induk SPT", D: "Lampiran 4 (penghasilan yang dikenai PPh final dan yang tidak termasuk objek pajak)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "final-nonfinal" },
      pembahasan: {
        inti: "Untuk Tahun Pajak 2025 SPT Tahunan PPh Badan memakai struktur PER-11/PJ/2025 (Coretax); format 1771 lama hanya untuk SPT sampai Tahun Pajak 2024 (Pasal 138 huruf a). Kompensasi kerugian bukan penyesuaian fiskal: dihitung setelah penghasilan neto fiskal, dirinci per tahun asal pada Lampiran 7 - Penghitungan Kompensasi Kerugian Fiskal (Pasal 85 ayat (1) huruf b angka 7), lalu jumlahnya mengurangi penghasilan neto di induk untuk menghasilkan PKP.",
        jejakHitung: [
          ["Lampiran 1 (rekonsiliasi)", "laba komersial → penghasilan neto fiskal Rp2.400.000.000"],
          ["Lampiran 7", "rugi neto fiskal 2019, 2020, 2023 dan distribusi kompensasinya; kompensasi Tahun Pajak 2025 Rp2.400.000.000"],
          ["Induk Bagian D angka 8 dan 9", "PKP = neto fiskal − kompensasi = nihil"]
        ],
        mengapaSalah: {
          A: "Penyesuaian fiskal di rekonsiliasi hanya untuk beda tetap dan beda waktu laba tahun berjalan; kompensasi kerugian tahun lalu bukan penyesuaian fiskal dan punya lampiran sendiri.",
          B: "Lampiran 9 memuat daftar penyusutan dan amortisasi fiskal, bukan kerugian.",
          D: "Lampiran 4 memuat penghasilan yang dikenai PPh final dan yang tidak termasuk objek pajak."
        },
        jebakan: "Format 1771 lama menaruh rincian ini di lampiran khusus 2A; untuk SPT Tahun Pajak 2025 namanya Lampiran 7, dan jumlah kompensasi tahun pajak ini dipindahkan ke Induk Bagian D angka 8. Urutannya tetap: rekonsiliasi (neto fiskal) → kompensasi kerugian → induk (PKP)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 85 ayat (1) huruf b angka 7 dan Pasal 138 huruf a", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 80,
      verifikasi: "✅"
    },
    {
      id: "B6-088",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-05",
      stem: "Melanjutkan data PT Garuda Mekatronika (V-B6-05): penghasilan neto fiskal 2025 Rp2.400.000.000 seluruhnya terserap kompensasi kerugian sehingga PPh terutang 2025 nihil, dan sisa rugi 2023 Rp300.000.000 masih dapat dikompensasikan pada 2026. Kredit pajak 2025: PPh 22 impor Rp150.000.000 dan PPh 23 Rp30.000.000; angsuran PPh 25 yang dibayar selama 2025 Rp60.000.000; SPT 2025 disampaikan 27 April 2026 dengan status lebih bayar. Dengan ketentuan penghitungan angsuran bagi Wajib Pajak yang berhak atas kompensasi kerugian (Pasal 25 ayat (6) huruf a UU PPh dan peraturan pelaksanaannya), angsuran PPh Pasal 25 per bulan mulai Masa April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp23.500.000", B: "Nihil", C: "Rp29.000.000", D: "Rp38.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Bagi Wajib Pajak yang berhak atas kompensasi kerugian, angsuran dihitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan, dikenai tarif, dikurangi PPh 22/23/24 tahun lalu, lalu dibagi 12; angsuran tidak otomatis nihil walaupun PPh terutang 2025 nihil.",
        jejakHitung: [
          ["Dasar = 2.400.000.000 − 300.000.000", "Rp2.100.000.000"],
          ["PPh = 22% × 2.100.000.000", "Rp462.000.000"],
          ["Dikurangi PPh 22 dan 23 = 462.000.000 − 180.000.000", "Rp282.000.000"],
          ["Angsuran = 282.000.000 ÷ 12", "Rp23.500.000"]
        ],
        mengapaSalah: {
          B: "Memakai rumus umum (PPh terutang 2025 nihil); Pasal 25 ayat (6) huruf a memberi penghitungan khusus bagi Wajib Pajak yang berhak atas kompensasi kerugian.",
          C: "Tidak mengurangkan sisa kerugian Rp300.000.000 yang masih dapat dikompensasikan pada 2026: (22% × 2.400.000.000 − 180.000.000) ÷ 12.",
          D: "Tidak mengurangkan PPh 22 dan PPh 23: 462.000.000 ÷ 12."
        },
        jebakan: "Angsuran PPh 25 tahun lalu (Rp60.000.000) tidak pernah dikurangkan dalam rumus angsuran; yang dikurangkan hanya PPh 22, 23, dan 24."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) dan ayat (6) huruf a UU PPh beserta Penjelasannya", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 113 ayat (2) huruf a dan Pasal 114 serta Lampiran (petunjuk pengisian Lampiran 6 dan Lampiran 7 SPT PPh Badan); menggantikan KEP-537/PJ/2000", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-089",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      kasusId: "V-B6-06",
      formulirRef: "1771.l1.9",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-B6-06): PT Baterai Hijau Nusantara (badan dalam negeri, industri baterai di kawasan industri) memperoleh fasilitas tax allowance PP 78/2019 dan mulai berproduksi komersial Januari 2024. Realisasi penanaman modal untuk kegiatan usaha utama: tanah Rp30.000.000.000, bangunan pabrik Rp80.000.000.000, dan mesin produksi Rp150.000.000.000; selain itu dibeli kendaraan dinas direksi Rp2.000.000.000 yang tidak digunakan untuk kegiatan usaha utama. Penghasilan neto Tahun Pajak 2025 setelah penyesuaian fiskal positif dan negatif tetapi sebelum fasilitas (Lampiran 1771-I angka 5 − 6 + 7 − 8) Rp25.000.000.000, dan perusahaan masih memiliki kerugian fiskal Tahun Pajak 2024. Besarnya pengurangan penghasilan neto 2025 dari fasilitas tersebut dan tempat pelaporannya menurut peta formulir 1771 yang diajarkan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp13.100.000.000 (5% × Rp262 miliar, termasuk kendaraan direksi) pada baris fasilitas penanaman modal Lampiran 1771-I (angka 9)", B: "Rp78.000.000.000 sekaligus pada Tahun Pajak 2025 sehingga timbul kerugian baru", C: "Rp13.000.000.000 digabungkan ke dalam penyesuaian fiskal negatif (angka 8) Lampiran 1771-I", D: "Rp13.000.000.000 (5% × Rp260 miliar) pada baris fasilitas penanaman modal Lampiran 1771-I (angka 9), dirinci pada lampiran khusus 4A" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dasar tax allowance adalah aktiva tetap berwujud, termasuk tanah, yang dipakai untuk kegiatan usaha utama: Rp260 miliar. Pengurangan 30% (Rp78 miliar) dibebankan 5% per tahun selama 6 tahun, yaitu Rp13 miliar untuk 2025. Menurut peta formulir 1771, pengurangan itu diisi pada baris tersendiri Lampiran 1771-I angka 9 (setelah penyesuaian fiskal, sebelum angka 10 penghasilan neto fiskal) dengan rincian lampiran khusus 4A, sedangkan kompensasi kerugian baru dikurangkan di induk.",
        jejakHitung: [
          ["Dasar investasi = 30 + 80 + 150 (miliar)", "Rp260.000.000.000"],
          ["Pengurangan per tahun = 5% × 260.000.000.000", "Rp13.000.000.000"],
          ["Neto setelah fasilitas = 25.000.000.000 − 13.000.000.000", "Rp12.000.000.000"],
          ["Urutan pengisian", "1771-I: neto komersial → penyesuaian fiskal (7, 8) → fasilitas (9) → neto fiskal (10) → induk: kompensasi kerugian → PKP"]
        ],
        mengapaSalah: {
          A: "Kendaraan direksi tidak digunakan untuk kegiatan usaha utama sehingga bukan dasar fasilitas.",
          B: "Pengurangan 30% dibebankan 5% per tahun selama 6 tahun, bukan sekaligus.",
          C: "Tax allowance bukan penyesuaian fiskal atas laba komersial; ia diisi pada baris fasilitas tersendiri (angka 9) dengan rincian lampiran khusus 4A agar pemanfaatan per tahun dapat dilacak."
        },
        jebakan: "Jangan memasukkan aset non-usaha utama ke dasar fasilitas, dan jangan mengubah pengurangan bertahap menjadi beban sekaligus. Peta 1771-I angka 9 dan lampiran khusus 4A adalah format lama, yang menurut Pasal 138 huruf a PER-11/PJ/2025 hanya untuk Tahun Pajak sampai 2024. Untuk SPT Tahun Pajak 2025 di Coretax, Rp13 miliar ini dirinci di Lampiran 13A (Daftar Fasilitas Penanaman Modal) lalu dipindahkan ke Induk Bagian D angka 5, sebelum kompensasi kerugian di Induk Bagian D angka 8."
      },
      dasarHukum: [{ pasal: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 (padanan Coretax: Lampiran 13A dan Induk Bagian D angka 5)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Angka Rp13 miliar sudah dicocokkan ke PP 78/2019 Pasal 3 ayat (1) huruf a, dan padanan Coretax (Lampiran 13A, Induk Bagian D angka 5) ke Lampiran huruf H PER-11/PJ/2025. Yang belum dicocokkan: penomoran format 1771 lama (1771-I angka 9, lampiran khusus 4A), karena lampiran PER-34/PJ/2010 tidak ada di pustaka."
    },
    {
      id: "B6-090",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-06",
      stem: "Melanjutkan data PT Baterai Hijau Nusantara (V-B6-06): kerugian fiskal Tahun Pajak 2024 Rp40.000.000.000, dan berdasarkan keputusan pemberian fasilitas, jangka waktu kompensasinya 7 tahun (tambahan 2 tahun dari ketentuan umum). Penghasilan neto setelah pengurangan tax allowance: 2025 Rp12.000.000.000; proyeksi 2026 Rp6.000.000.000; 2027 Rp5.000.000.000; 2028 Rp4.000.000.000; 2029 Rp3.000.000.000; 2030 Rp4.000.000.000; 2031 Rp5.000.000.000; dan 2032 Rp7.000.000.000. Tidak ada kerugian lain. Jumlah kerugian 2024 yang pada akhirnya tidak dapat dikompensasikan (hangus) adalah ...",
      kataKualifikasi: ["tidak dapat"],
      opsi: { A: "Rp10.000.000.000", B: "Rp6.000.000.000", C: "Rp1.000.000.000", D: "Nihil" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Dengan jangka 7 tahun, rugi 2024 dapat dipakai 2025–2031. Jumlah neto 2025–2031 Rp39 miliar, sehingga Rp1 miliar hangus; laba 2032 tidak dapat lagi menyerap rugi 2024.",
        jejakHitung: [
          ["Tahun kompensasi", "2025–2031 (7 tahun mulai tahun sesudah rugi)"],
          ["Neto 2025–2031 = 12 + 6 + 5 + 4 + 3 + 4 + 5 (miliar)", "Rp39.000.000.000"],
          ["Hangus = 40.000.000.000 − 39.000.000.000", "Rp1.000.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai jangka umum 5 tahun (2025–2029: Rp30 miliar terserap); keputusan fasilitas memperpanjangnya menjadi 7 tahun.",
          B: "Menghitung 7 tahun termasuk tahun rugi (2024–2030), sehingga hanya 2025–2030 (Rp34 miliar) yang dipakai.",
          D: "Memakai laba 2032 atau menganggap fasilitas otomatis 10 tahun; perpanjangan mengikuti keputusan, paling lama 10 tahun."
        },
        jebakan: "Perpanjangan kompensasi tax allowance tidak otomatis 10 tahun; pakai jangka dalam keputusan dan mulai hitung dari tahun sesudah rugi."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12" }
      ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B6-091",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kasusId: "V-B6-06",
      stem: "Melanjutkan data PT Baterai Hijau Nusantara (V-B6-06): 30% sahamnya dimiliki Lithium Partners Ltd. (badan di Negara H; P3B Indonesia–Negara H mengatur tarif dividen 15%, dan surat keterangan domisili tersedia), sedangkan 70% dimiliki PT Energi Nusantara (badan dalam negeri). Pada Juni 2026 perusahaan membagikan dividen tunai Rp20.000.000.000 sesuai porsi kepemilikan, dan fasilitas tax allowance masih berlaku. Pemotongan pajak atas dividen tersebut yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "PPh Pasal 26 20% × Rp6.000.000.000 = Rp1.200.000.000; dividen kepada PT Energi Nusantara dipotong PPh Pasal 23 15%",
        B: "PPh Pasal 26 10% × Rp6.000.000.000 = Rp600.000.000 sesuai fasilitas tax allowance karena lebih rendah dari tarif P3B; dividen kepada PT Energi Nusantara tidak dipotong PPh",
        C: "PPh Pasal 26 15% × Rp6.000.000.000 = Rp900.000.000 sesuai P3B; dividen kepada PT Energi Nusantara tidak dipotong PPh",
        D: "PPh Pasal 26 10% × Rp6.000.000.000 = Rp600.000.000; dividen kepada PT Energi Nusantara dipotong PPh Pasal 23 15% × Rp14.000.000.000 = Rp2.100.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PP 78/2019 memberi tarif PPh atas dividen kepada subjek pajak luar negeri 10%, atau lebih rendah bila P3B menetapkan tarif lebih rendah; karena P3B menetapkan 15%, berlaku 10%. Dividen kepada badan dalam negeri bukan objek PPh sehingga tidak dipotong.",
        jejakHitung: [
          ["Dividen Lithium Partners = 30% × 20.000.000.000", "Rp6.000.000.000"],
          ["Tarif = terendah antara fasilitas 10% dan P3B 15%", "10%"],
          ["PPh 26 = 10% × 6.000.000.000", "Rp600.000.000"],
          ["Dividen PT Energi Nusantara Rp14.000.000.000", "bukan objek, tidak dipotong"]
        ],
        mengapaSalah: {
          A: "Mengabaikan fasilitas tax allowance dan P3B, serta memotong dividen dalam negeri yang bukan objek.",
          C: "Tarif P3B 15% lebih tinggi daripada tarif fasilitas 10%, sehingga yang dipakai 10%.",
          D: "Dividen dari badan dalam negeri yang diterima badan dalam negeri bukan objek dan tidak dipotong PPh 23."
        },
        jebakan: "Bandingkan tarif fasilitas dengan tarif P3B lalu pakai yang lebih rendah; jangan lupa sisi dalam negeri dari pembagian dividen yang sama."
      },
      dasarHukum: [
        { pasal: "PP 78/2019 Pasal 3 ayat (1)", berlakuSejak: "2019-12-12" },
        { pasal: "Pasal 26 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02" }
      ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-092",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Sinar Logam Abadi, yang masih memiliki sisa kerugian fiskal Tahun Pajak 2023 Rp2.400.000.000, menggabungkan diri ke dalam PT Sinar Baja Utama pada 1 Juli 2026 dengan memakai nilai buku berdasarkan persetujuan Direktur Jenderal Pajak, lalu bubar tanpa likuidasi. PT Sinar Baja Utama sendiri memiliki sisa kerugian fiskal Tahun Pajak 2022 Rp1.000.000.000. Pernyataan yang paling tepat mengenai kompensasi kerugian setelah penggabungan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PT Sinar Baja Utama tetap dapat mengompensasikan sisa kerugiannya sendiri dari Tahun Pajak 2022 sampai Tahun Pajak 2027, tetapi sisa kerugian PT Sinar Logam Abadi yang menggabungkan diri tidak dapat dikompensasikan oleh PT Sinar Baja Utama.", B: "PT Sinar Baja Utama tetap dapat mengompensasikan sisa kerugiannya sendiri dari Tahun Pajak 2022 sampai Tahun Pajak 2027, dan sisa kerugian PT Sinar Logam Abadi ikut dapat dikompensasikan oleh PT Sinar Baja Utama karena penggabungan memakai nilai buku.", C: "PT Sinar Baja Utama tetap dapat mengompensasikan sisa kerugiannya sendiri dari Tahun Pajak 2022 sampai Tahun Pajak 2026, tetapi sisa kerugian PT Sinar Logam Abadi yang menggabungkan diri tidak dapat dikompensasikan oleh PT Sinar Baja Utama.", D: "PT Sinar Baja Utama tetap dapat mengompensasikan sisa kerugiannya sendiri dari Tahun Pajak 2022 sampai Tahun Pajak 2027, dan sisa kerugian PT Sinar Logam Abadi dapat dikompensasikan oleh PT Sinar Baja Utama sepanjang tidak melewati lima tahun sejak kerugian itu timbul." },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penggabungan dengan nilai buku (PMK 81/2024 Pasal 392 ayat (2) dan ayat (3) huruf a) memindahkan harta pada nilai buku, tetapi penerima harta tidak boleh mengompensasikan kerugian atau sisa kerugian badan yang menggabungkan diri (Pasal 402 ayat (1)). Kerugian milik badan penerima sendiri tetap mengikuti UU PPh Pasal 6 ayat (2): rugi 2022 dapat dipakai 2023–2027.",
        jejakHitung: [
          ["Rugi PT Sinar Baja Utama 2022", "dapat dipakai 2023–2027"],
          ["Rugi PT Sinar Logam Abadi 2023", "tidak dapat dikompensasikan oleh penerima penggabungan"],
          ["Syarat penerima (Ps. 392 ayat (3) huruf a)", "sisa rugi penerima Rp1 miliar < Rp2,4 miliar"]
        ],
        mengapaSalah: {
          B: "Nilai buku hanya mengatur nilai pengalihan harta; Pasal 402 ayat (1) PMK 81/2024 melarang kompensasi kerugian badan yang mengalihkan harta.",
          C: "Rugi 2022 dapat dikompensasikan lima tahun mulai 2023, yaitu sampai 2027.",
          D: "Larangan Pasal 402 ayat (1) berlaku penuh, tidak dibatasi lima tahun."
        },
        jebakan: "Sejak 1 Januari 2025 ketentuan nilai buku ada di PMK 81/2024 (PMK 52/PMK.010/2017 dicabut). Opsi membedakan dua hal: tahun terakhir rugi milik sendiri (2027) dan nasib rugi badan yang bergabung (tidak dapat dikompensasikan)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) dan Pasal 10 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 392 ayat (2) dan ayat (3) huruf a serta Pasal 402 ayat (1)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-093",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Tirta Energi Mandiri adalah pengusaha SPBU Pertamina yang bertindak sebagai penyalur BBM dan juga mengelola minimarket serta jasa cuci kendaraan di lokasi yang sama. Data Tahun Pajak 2025: penjualan BBM Rp60.000.000.000 dengan harga tebus BBM tanpa PPN Rp57.600.000.000, dan atas penebusan itu Pertamina memungut PPh Pasal 22 0,25% = Rp144.000.000; pendapatan minimarket dan jasa cuci Rp4.500.000.000. Laba komersial sebelum pajak Rp1.300.000.000 terdiri atas laba segmen BBM Rp1.000.000.000 (setelah biaya langsung SPBU) dan laba segmen minimarket dan jasa cuci Rp300.000.000; tidak ada biaya bersama dan tidak ada koreksi lain. Angsuran PPh Pasal 25 yang dibayar selama 2025 Rp50.000.000. Sebagai pembanding, pelanggan korporatnya, PT Tambang Batu Raya, dipungut PPh Pasal 22 0,3% atas pembelian solar industri untuk alat beratnya. Status PPh Pasal 29 PT Tirta Energi Mandiri Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang bayar Rp92.000.000", B: "Lebih bayar Rp128.000.000", C: "Lebih bayar Rp17.000.000", D: "Kurang bayar Rp16.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "final-nonfinal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh Pasal 22 atas penjualan BBM kepada penyalur/agen bersifat final, sehingga laba segmen BBM dikeluarkan dari penghasilan neto dan PPh 22-nya tidak dikreditkan. Peredaran bruto untuk Pasal 31E tetap memuat penjualan BBM (Rp64,5 miliar > Rp50 miliar), sehingga laba minimarket dan jasa cuci dikenai 22%. Bagi PT Tambang Batu Raya sebagai pemakai, PPh 22 solar 0,3% justru kredit pajak.",
        jejakHitung: [
          ["Laba BBM (PPh 22 final bagi penyalur)", "koreksi negatif Rp1.000.000.000"],
          ["PKP = laba minimarket dan jasa cuci", "Rp300.000.000"],
          ["Peredaran bruto = 60.000.000.000 + 4.500.000.000", "Rp64.500.000.000 → tanpa Pasal 31E"],
          ["PPh = 22% × 300.000.000", "Rp66.000.000"],
          ["PPh 29 = 66.000.000 − 50.000.000 (PPh 22 final tidak dikreditkan)", "Rp16.000.000"]
        ],
        mengapaSalah: {
          A: "Memperlakukan PPh 22 BBM sebagai kredit dan laba BBM sebagai objek tarif umum: 22% × 1.300.000.000 − 144.000.000 − 50.000.000.",
          B: "Mengeluarkan laba BBM sebagai penghasilan final tetapi tetap mengkreditkan PPh 22-nya: 66.000.000 − 144.000.000 − 50.000.000.",
          C: "Menghitung peredaran bruto tanpa penjualan BBM (Rp4,5 miliar ≤ Rp4,8 miliar) sehingga seluruh PKP dikenai 11%: 33.000.000 − 50.000.000."
        },
        jebakan: "Sifat PPh 22 BBM bergantung pada posisi pembeli: final bagi penyalur/agen, kredit bagi pemakai. Penghasilan final tetap dihitung dalam peredaran bruto Pasal 31E."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 51/2025 Pasal 10 ayat (2) (PPh 22 BBM final bagi penyalur/agen; berlaku 1 Agustus 2025) dan, untuk Januari–Juli 2025, ketentuan PPh Pasal 22 dalam PMK 81/2024; PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022 dicabut PMK 81/2024 per 1 Januari 2025" }, { pasal: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09" }, { pasal: "Pasal 28 dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-094",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      kutipan: "Pasal 11 ayat (1) dan ayat (2) UU KUP (parafrase): Atas permohonan Wajib Pajak, kelebihan pembayaran pajak dikembalikan, dengan ketentuan bahwa apabila ternyata Wajib Pajak mempunyai utang pajak, langsung diperhitungkan untuk melunasi lebih dahulu utang pajak tersebut. Pengembalian kelebihan pembayaran pajak dilakukan paling lama 1 (satu) bulan sejak permohonan pengembalian diterima sehubungan dengan diterbitkannya Surat Ketetapan Pajak Lebih Bayar.",
      stem: "PT Bintang Kimia Utama menerima SKPLB PPh Badan Tahun Pajak 2025 sebesar Rp480.000.000 pada 5 Oktober 2026 setelah pemeriksaan atas permohonan restitusinya. Pada saat itu perusahaan masih memiliki STP bunga keterlambatan setor PPh Pasal 25 Rp12.500.000 yang telah jatuh tempo dan tidak diajukan permohonan apa pun, sedangkan SKPKB PPN Masa Maret 2024 Rp70.000.000 telah dilunasi pada Juli 2026. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Seluruh Rp480.000.000 ditransfer ke rekening perusahaan, sedangkan STP Rp12.500.000 ditagih terpisah melalui tindakan penagihan",
        B: "Rp397.500.000 ditransfer setelah diperhitungkan dengan STP Rp12.500.000 dan SKPKB PPN Rp70.000.000",
        C: "Rp467.500.000 ditransfer setelah diperhitungkan dengan STP Rp12.500.000, paling lama 1 bulan sejak permohonan terkait SKPLB diterima",
        D: "Rp467.500.000 ditransfer setelah diperhitungkan dengan STP, paling lama 12 bulan sejak SKPLB diterbitkan"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kelebihan pembayaran lebih dahulu dipakai melunasi utang pajak yang masih ada (STP Rp12.500.000); SKPKB PPN yang sudah lunas tidak lagi menjadi utang pajak. Sisanya dikembalikan paling lama 1 bulan sejak permohonan pengembalian diterima sehubungan dengan terbitnya SKPLB; bila terlambat, Wajib Pajak berhak atas imbalan bunga.",
        jejakHitung: [
          ["SKPLB", "Rp480.000.000"],
          ["Utang pajak yang belum dilunasi", "STP Rp12.500.000"],
          ["Ditransfer = 480.000.000 − 12.500.000", "Rp467.500.000"],
          ["Jangka pengembalian", "paling lama 1 bulan (terlambat → imbalan bunga Pasal 11 ayat (3))"]
        ],
        mengapaSalah: {
          A: "Pasal 11 ayat (1) mewajibkan kelebihan pembayaran langsung diperhitungkan untuk melunasi utang pajak lebih dahulu.",
          B: "SKPKB PPN sudah dilunasi sehingga tidak lagi menjadi utang pajak.",
          D: "Dua belas bulan adalah jangka penerbitan SKP atas permohonan restitusi (Pasal 17B), bukan jangka pengembalian setelah SKPLB terbit."
        },
        jebakan: "Bedakan jangka penerbitan SKP (12 bulan) dari jangka pengembalian uang setelah SKPLB terbit (1 bulan)."
      },
      dasarHukum: [
        { pasal: "Pasal 11 ayat (1)–(3) dan Pasal 17B UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 28A UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "B6-095",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Silikon Global Indonesia adalah entitas konstituen grup multinasional dengan peredaran bruto konsolidasi sekitar EUR 2 miliar per tahun; entitas induk utamanya berkedudukan di Negara J yang telah menerapkan Income Inclusion Rule. Sejak 2023 PT Silikon menikmati pengurangan PPh badan 100% (tax holiday), sehingga tarif pajak efektif yurisdiksi Indonesia untuk grup tersebut pada Tahun Pajak 2025 diperkirakan 3%. Pernyataan yang paling tepat menurut PMK 136/2024 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Indonesia memberlakukan Pajak Minimum Domestik (DMTT) mulai Tahun Pajak 2025, sehingga pajak tambahan atas selisih tarif efektif yurisdiksi Indonesia terhadap 15% dapat terutang di Indonesia dan mengurangi pajak tambahan yang dipungut Negara J melalui IIR; ketentuan ini berlaku bagi grup dengan peredaran bruto konsolidasi paling sedikit EUR 750 juta.",
        B: "Indonesia memberlakukan Pajak Minimum Domestik (DMTT) mulai Tahun Pajak 2026, sehingga pajak tambahan atas selisih tarif efektif yurisdiksi Indonesia terhadap 15% dapat terutang di Indonesia dan mengurangi pajak tambahan yang dipungut Negara J melalui IIR; ketentuan ini berlaku bagi grup dengan peredaran bruto konsolidasi paling sedikit EUR 750 juta.",
        C: "Indonesia memberlakukan Pajak Minimum Domestik (DMTT) mulai Tahun Pajak 2025, sehingga pajak tambahan atas selisih tarif efektif yurisdiksi Indonesia terhadap 22% dapat terutang di Indonesia dan mengurangi pajak tambahan yang dipungut Negara J melalui IIR; ketentuan ini berlaku bagi grup dengan peredaran bruto konsolidasi paling sedikit EUR 750 juta.",
        D: "Indonesia memberlakukan Pajak Minimum Domestik (DMTT) mulai Tahun Pajak 2025, sehingga pajak tambahan atas selisih tarif efektif yurisdiksi Indonesia terhadap 15% dapat terutang di Indonesia dan mengurangi pajak tambahan yang dipungut Negara J melalui IIR; ketentuan ini hanya berlaku bagi grup dengan peredaran bruto konsolidasi paling sedikit EUR 7,5 miliar, sehingga grup PT Silikon belum terkena."
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 136/2024 memberlakukan IIR dan DMTT mulai Tahun Pajak 2025 (UTPR 2026) bagi grup beromzet konsolidasi paling sedikit EUR 750 juta dengan tarif efektif minimum 15%. Dengan DMTT, pajak tambahan atas rendahnya tarif efektif akibat tax holiday dipungut di Indonesia lebih dulu, sehingga manfaat tax holiday bagi grup besar tergerus.",
        jejakHitung: [
          ["Omzet grup EUR 2 miliar", "≥ EUR 750 juta → tercakup"],
          ["Tarif efektif 3% < 15%", "timbul pajak tambahan (top-up tax)"],
          ["Saat berlaku", "IIR dan DMTT Tahun Pajak 2025; UTPR 2026"]
        ],
        mengapaSalah: {
          B: "Tahun Pajak 2026 adalah awal berlakunya UTPR; DMTT dan IIR berlaku mulai 2025.",
          C: "Tarif acuan GloBE adalah tarif efektif minimum 15%, bukan tarif PPh badan 22%.",
          D: "Ambang GloBE adalah EUR 750 juta; grup beromzet EUR 2 miliar tercakup."
        },
        jebakan: "Hafalkan tiga pasangan: IIR/DMTT 2025 dan UTPR 2026; tarif minimum 15%; ambang EUR 750 juta."
      },
      dasarHukum: [
        { pasal: "PMK 136/2024 Pasal 73–74", berlakuSejak: "2025-01-01" },
        { pasal: "PER-6/PJ/2026", berlakuSejak: "2026-05-04" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-096",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Sepatu Prima Nusantara, industri alas kaki padat karya yang mempekerjakan 1.200 pegawai Indonesia, memperoleh fasilitas investment allowance (PP 94/2010 s.t.d.d. PP 45/2019) atas penanaman modal baru berupa aktiva tetap berwujud untuk kegiatan usaha utama Rp24.000.000.000, termasuk tanah Rp4.000.000.000, yang mulai berproduksi komersial pada 2025. Pengurangan penghasilan neto per tahun dari fasilitas tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.400.000.000 sekaligus pada Tahun Pajak 2025", B: "Rp2.400.000.000 per tahun selama 6 tahun", C: "Rp2.000.000.000 per tahun selama 6 tahun", D: "Rp1.200.000.000 per tahun selama 6 tahun" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Investment allowance industri padat karya memberikan pengurangan penghasilan neto 60% dari penanaman modal berupa aktiva tetap berwujud termasuk tanah, dibebankan dalam 6 tahun (10% per tahun).",
        jejakHitung: [
          ["60% × 24.000.000.000", "Rp14.400.000.000"],
          ["Per tahun = 14.400.000.000 ÷ 6 (10% × 24.000.000.000)", "Rp2.400.000.000"]
        ],
        mengapaSalah: {
          A: "Pengurangan dibebankan bertahap selama 6 tahun, bukan sekaligus.",
          C: "Mengeluarkan tanah dari dasar penanaman modal (60% × 20.000.000.000 ÷ 6); tanah termasuk dalam fasilitas ini.",
          D: "Memakai persentase tax allowance 30% (5% per tahun); fasilitas padat karya 60%."
        },
        jebakan: "Dua fasilitas sering tertukar: tax allowance 30% (5% × 6 tahun) dan investment allowance padat karya 60% (10% × 6 tahun)."
      },
      dasarHukum: [{ pasal: "PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29A (investment allowance industri padat karya)", berlakuSejak: "2019-06-26" }, { pasal: "PMK 81/2024 Pasal 423 ayat (2) dan ayat (3) (menggantikan PMK 16/PMK.010/2020)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B6-097",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 9 ayat (2a) UU KUP: Pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo pembayaran atau penyetoran pajak dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan oleh Menteri Keuangan dihitung dari tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran, dan bagian dari bulan dihitung penuh 1 (satu) bulan.",
      stem: "PT Mitra Andalas Sawit wajib membayar angsuran PPh Pasal 25 Masa September 2026 sebesar Rp45.000.000. Karena persetujuan internal tertunda, kode billing baru dibayar pada Senin, 19 Oktober 2026, dan NTPN terbit hari itu; perusahaan tidak menyampaikan SPT Masa PPh 25 secara terpisah. Tarif bunga per bulan Oktober 2026 menurut KMK 47/MK/EF.2/2026: Pasal 19 ayat (1) 0,59% dan Pasal 9 ayat (2a) 1,01%. Berdasarkan kutipan tersebut dan ketentuan bahwa pembayaran PPh Pasal 25 yang telah tervalidasi NTPN dianggap sebagai penyampaian SPT Masa PPh 25 pada tanggal validasi, sanksi administrasi yang dapat ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga Rp265.500", B: "Bunga Rp454.500 dan denda Rp100.000 karena SPT Masa PPh 25 terlambat", C: "Bunga Rp909.000", D: "Bunga Rp454.500" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Jatuh tempo setor 15 Oktober 2026; pembayaran 19 Oktober terlambat 4 hari, dihitung 1 bulan penuh: 1,01% × Rp45.000.000 = Rp454.500. SPT Masa dianggap disampaikan 19 Oktober, masih dalam batas 20 hari setelah masa pajak berakhir, sehingga tidak ada denda Pasal 7.",
        jejakHitung: [
          ["Jatuh tempo setor (PMK 81/2024)", "15 Oktober 2026"],
          ["15 → 19 Oktober 2026", "4 hari → 1 bulan"],
          ["Bunga = 45.000.000 × 1,01% × 1", "Rp454.500"],
          ["SPT Masa dianggap disampaikan 19 Oktober ≤ 20 Oktober", "tanpa denda"]
        ],
        mengapaSalah: {
          A: "Tarif 0,59% (uplift 0%) adalah untuk Pasal 19; keterlambatan setor pajak masa memakai tarif Pasal 9 ayat (2a) dengan uplift 5%.",
          B: "Batas lapor SPT Masa PPh 25 adalah 20 hari setelah masa pajak berakhir (20 Oktober), dan SPT dianggap disampaikan pada tanggal validasi 19 Oktober.",
          C: "Keterlambatan 4 hari dihitung 1 bulan, bukan 2 bulan."
        },
        jebakan: "Pada PPh 25, tanggal bayar sekaligus menjadi tanggal lapor: terlambat bayar belum tentu terlambat lapor."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2020-11-02" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B6-098",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Penjelasan Pasal 18 ayat (4) huruf c UU PPh (parafrase): Hubungan keluarga sedarah dalam garis keturunan lurus satu derajat adalah ayah, ibu, dan anak, sedangkan dalam garis keturunan ke samping satu derajat adalah saudara. Hubungan keluarga semenda dalam garis keturunan lurus satu derajat adalah mertua dan anak tiri, sedangkan dalam garis keturunan ke samping satu derajat adalah ipar.",
      stem: "Konsultan memetakan hubungan para pihak yang bertransaksi pada 2025: (1) Tuan Arman, pemilik 100% PT Arman Jaya Tekstil, menyewakan gudang pribadinya kepada Nyonya Dewi, istri adik kandung Tuan Arman; (2) Tuan Arman menjual tanah kepada Sinta, cucu kandungnya; (3) Tuan Arman meminjamkan uang kepada Bayu, sepupunya; dan (4) PT Kencana Serat dan PT Bintang Benang tidak saling memiliki saham dan tidak dimiliki pihak yang sama, tetapi keduanya dipimpin presiden direktur yang sama yang menentukan harga transaksi di antara keduanya. Berdasarkan kutipan tersebut dan Pasal 18 ayat (4) UU PPh, pasangan yang mempunyai hubungan istimewa adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(2) dan (3)", C: "(1) dan (4)", D: "(1), (3), dan (4)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Hubungan keluarga yang menimbulkan hubungan istimewa terbatas pada sedarah atau semenda dalam garis lurus dan/atau ke samping satu derajat. Ipar adalah semenda ke samping satu derajat; cucu adalah sedarah lurus dua derajat dan sepupu ke samping lebih dari satu derajat. Penguasaan melalui manajemen yang sama menimbulkan hubungan istimewa tanpa kepemilikan.",
        jejakHitung: [
          ["(1) Ipar", "semenda ke samping satu derajat → istimewa"],
          ["(2) Cucu", "sedarah lurus dua derajat → tidak"],
          ["(3) Sepupu", "ke samping lebih dari satu derajat → tidak"],
          ["(4) Presiden direktur sama yang menentukan harga", "penguasaan manajemen → istimewa"]
        ],
        mengapaSalah: {
          A: "Cucu adalah keturunan lurus derajat kedua, di luar batas satu derajat.",
          B: "Cucu dan sepupu sama-sama di luar batas satu derajat; justru ipar dan penguasaan manajemen yang menimbulkan hubungan istimewa.",
          D: "Sepupu bukan keluarga satu derajat."
        },
        jebakan: "Satu derajat ke samping = saudara kandung dan ipar; satu derajat lurus = orang tua, anak, mertua, anak tiri."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (4) huruf b dan c UU PPh beserta penjelasannya", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B6-099",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Surya Resin Persada dan PT Surya Plastik Indah masing-masing 70% sahamnya dimiliki PT Surya Holding. Pada Juni 2025 PT Surya Resin (PKP, peredaran bruto Rp210 miliar, tarif umum) menjual resin kepada PT Surya Plastik seharga Rp12.000.000.000 (belum termasuk PPN) dan menerbitkan faktur pajak dengan DPP nilai lain 11/12 × Rp12.000.000.000 dan tarif 12%. Dalam pemeriksaan 2026, pemeriksa membuktikan dengan data pembanding independen bahwa harga pasar wajar resin tersebut Rp15.000.000.000, dan Wajib Pajak menyetujui koreksi. Resin bukan barang mewah. Tambahan pokok PPh badan dan pokok PPN akibat koreksi tersebut (tanpa sanksi) bagi PT Surya Resin adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Rp660.000.000; PPN Rp360.000.000",
        B: "PPh Rp660.000.000; PPN Rp330.000.000",
        C: "PPh Rp660.000.000; tidak ada koreksi PPN karena faktur telah diterbitkan sesuai harga kontrak",
        D: "PPh Rp605.000.000; PPN Rp330.000.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Kedua perusahaan dimiliki paling rendah 25% oleh pihak yang sama sehingga berhubungan istimewa, baik menurut UU PPh maupun UU PPN. PPh: penghasilan ditentukan kembali sebesar harga wajar (koreksi Rp3 miliar × 22%). PPN: harga jual yang dipengaruhi hubungan istimewa dihitung atas dasar harga pasar wajar, lalu DPP nilai lain 11/12 dengan tarif 12% (efektif 11%).",
        jejakHitung: [
          ["Selisih harga wajar = 15.000.000.000 − 12.000.000.000", "Rp3.000.000.000"],
          ["Tambahan PPh = 22% × 3.000.000.000", "Rp660.000.000"],
          ["Tambahan DPP PPN = 11/12 × 3.000.000.000", "Rp2.750.000.000"],
          ["Tambahan PPN = 12% × 2.750.000.000", "Rp330.000.000"]
        ],
        mengapaSalah: {
          A: "Mengabaikan DPP nilai lain 11/12: 12% × 3.000.000.000.",
          C: "Pasal 2 UU PPN mengharuskan harga pasar wajar sebagai dasar bila harga dipengaruhi hubungan istimewa; faktur yang telah terbit tidak menghalangi koreksi.",
          D: "Memakai DPP nilai lain untuk koreksi PPh (22% × 2.750.000.000); DPP 11/12 hanya untuk PPN."
        },
        jebakan: "Satu koreksi harga transfer berdampak ganda: PPh badan atas selisih penuh, PPN atas selisih setelah DPP nilai lain."
      },
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) dan ayat (4) huruf a UU PPh; PMK 172/2023", berlakuSejak: "2023-12-29" },
        { pasal: "Pasal 2 ayat (1) dan ayat (2) UU PPN", berlakuSejak: "2010-04-01" },
        { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B6-100",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Kencana Retail Indonesia (peredaran bruto Rp320 miliar, tarif umum) membebankan biaya jasa manajemen 2025 kepada induknya, PT Kencana Holding (badan dalam negeri, pemilik 85%), Rp4.000.000.000 (PPN Rp440.000.000 telah dikreditkan dan PPh Pasal 23 telah dipotong). Hasil analisis keberadaan dan manfaat jasa menunjukkan: jasa pengadaan dan teknologi informasi bernilai wajar Rp2.500.000.000 benar-benar diterima dan bermanfaat bagi PT Kencana Retail; Rp900.000.000 merupakan aktivitas pemegang saham (rapat dewan komisaris holding dan penyusunan laporan keuangan konsolidasi grup); dan Rp600.000.000 merupakan jasa duplikatif yang juga dikerjakan staf internal PT Kencana Retail. Laba komersial sebelum pajak Rp12.000.000.000 tanpa koreksi lain. Koreksi fiskal positif atas biaya jasa manajemen dan tambahan PPh badan PT Kencana Retail adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp1.500.000.000; tambahan PPh Rp330.000.000",
        B: "Koreksi positif Rp600.000.000; tambahan PPh Rp132.000.000",
        C: "Koreksi positif Rp1.940.000.000; tambahan PPh Rp426.800.000",
        D: "Koreksi positif Rp4.000.000.000; tambahan PPh Rp880.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Biaya jasa intra-grup hanya dapat dibebankan bila jasanya benar ada, memberi manfaat ekonomis bagi penerima, dan harganya wajar. Aktivitas pemegang saham dan jasa duplikatif tidak memenuhi uji tersebut, sehingga Rp1.500.000.000 dikoreksi positif.",
        jejakHitung: [
          ["Jasa bermanfaat dan wajar", "Rp2.500.000.000 → dapat dibebankan"],
          ["Aktivitas pemegang saham + jasa duplikatif = 900.000.000 + 600.000.000", "Rp1.500.000.000 → koreksi positif"],
          ["Tambahan PPh = 22% × 1.500.000.000", "Rp330.000.000"]
        ],
        mengapaSalah: {
          B: "Hanya mengoreksi jasa duplikatif; aktivitas pemegang saham untuk kepentingan induk juga tidak memberi manfaat bagi anak.",
          C: "Ikut mengoreksi PPN Rp440.000.000 yang telah dikreditkan dan tidak pernah dibebankan.",
          D: "Menolak seluruh biaya padahal Rp2.500.000.000 lulus uji keberadaan, manfaat, dan kewajaran."
        },
        jebakan: "Uji jasa intra-grup tiga lapis: ada, bermanfaat, wajar; kewajaran harga saja tidak cukup."
      },
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 172/2023 (jasa intra-grup)", berlakuSejak: "2023-12-29" }
      ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-101",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      formulirRef: "1771.induk.E",
      stem: "Staf pajak PT Arta Graha Mandiri (tahun buku kalender) telah menghitung angsuran PPh Pasal 25 untuk tahun 2026 sebesar Rp15.000.000 per bulan dari data SPT Tahunan PPh Badan 2025 (PPh terutang dikurangi PPh 22 dan 23, dibagi 12). Menurut peta formulir 1771 yang diajarkan, angka angsuran tersebut dicantumkan pada ...",
      kataKualifikasi: [],
      opsi: { A: "Lampiran 1771-III bersama daftar kredit PPh 22 dan 23", B: "Lampiran khusus 2A bersama daftar kompensasi kerugian", C: "Lampiran 1771-I pada baris koreksi fiskal", D: "Induk SPT, bagian angsuran PPh Pasal 25 tahun pajak berikutnya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Induk SPT 1771 memuat ringkasan PKP, PPh terutang, kredit pajak, PPh 29/28A, dan angsuran PPh Pasal 25 untuk tahun pajak berikutnya; angsuran itu berlaku sejak bulan SPT disampaikan, paling lambat sejak bulan batas waktu penyampaian SPT (Pasal 25 ayat (2) UU PPh). Di formulir Coretax Tahun Pajak 2025, angsuran dihitung di Lampiran 6 (Angsuran PPh Tahun Pajak Berjalan) lalu dipindahkan ke Induk Bagian G.",
        jejakHitung: [
          ["Sumber angka", "PPh terutang 2025 − PPh 22 − PPh 23, dibagi 12"],
          ["Tempat pelaporan (peta 1771)", "induk SPT, bagian angsuran PPh 25 tahun berikutnya"],
          ["Padanan Coretax", "Lampiran 6 angka 7 → Induk Bagian G"],
          ["Mulai berlaku", "bulan SPT disampaikan, paling lambat Masa April 2026"]
        ],
        mengapaSalah: {
          A: "Lampiran III hanya merinci kredit pajak yang dipotong atau dipungut pihak lain.",
          B: "Lampiran 2A khusus kompensasi kerugian.",
          C: "Lampiran I memuat laba komersial dan koreksi fiskal, bukan angsuran."
        },
        jebakan: "Angsuran tahun berikutnya adalah keluaran SPT (di induk), bukan rincian lampiran kredit atau rekonsiliasi. Di Coretax angka itu dihitung di Lampiran 6 dan hasilnya tetap dibawa ke induk (Bagian G)."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) dan ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 85 ayat (1) dan Lampiran huruf H PER-11/PJ/2025 (padanan Coretax: Lampiran 6 dan Induk Bagian G)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 75,
      verifikasi: "◐",
      peringatan: "Padanan Coretax (Lampiran 6 dipindahkan ke Induk Bagian G) sudah dicocokkan ke Lampiran huruf H PER-11/PJ/2025. Format 1771 lama (induk, Lampiran I–VI, lampiran khusus 1A–8A) menurut Pasal 138 huruf a PER-11/PJ/2025 hanya dipakai untuk Tahun Pajak sampai 2024 (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017); lampiran formulir lama itu tidak ada di pustaka, jadi penomoran lama belum dicocokkan ke naskah."
    },
    {
      id: "B6-102",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "1771.induk.7a",
      stem: "Selama Tahun Pajak 2025 PT Mulia Teknik Utama (jasa teknik dan kontraktor bersertifikat) mengumpulkan dokumen kredit dan pelunasan pajak berikut di Coretax: BPPU PPh Pasal 23 atas jasa teknik (bukan jasa konstruksi) Rp36.000.000; BPPU PPh Pasal 22 dari bendahara pemerintah atas penjualan peralatan Rp21.000.000; dokumen impor dengan PPh Pasal 22 impor Rp95.000.000; bukti potong PPh Pasal 4 ayat (2) atas jasa pekerjaan konstruksi Rp158.000.000; bukti potong PPh final bunga deposito Rp12.000.000; bukti pembayaran pajak di Negara M atas penghasilan proyek di sana yang dapat dikreditkan menurut Pasal 24 Rp40.000.000; dan bukti setor angsuran PPh Pasal 25 Rp120.000.000. Menurut peta formulir 1771 yang diajarkan, jumlah yang dilaporkan pada Lampiran 1771-III (kredit pajak dalam negeri yang dipotong/dipungut pihak lain) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp192.000.000", B: "Rp322.000.000", C: "Rp152.000.000", D: "Rp57.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pada peta 1771 yang diajarkan, Lampiran 1771-III memuat PPh yang dipotong atau dipungut pihak lain di dalam negeri dan dapat dikreditkan: PPh 22 (termasuk impor dan bendahara) dan PPh 23. PPh final dilaporkan di Lampiran IV, PPh 24 di lampiran khusus 7A, dan PPh 25 di induk sebagai pajak yang dibayar sendiri. Di formulir Coretax Tahun Pajak 2025 angka Rp152.000.000 ini adalah jumlah Lampiran 3 Bagian B; Lampiran 3 juga memuat Bagian A untuk kredit PPh 24.",
        jejakHitung: [
          ["PPh 23 jasa teknik", "Rp36.000.000"],
          ["PPh 22 bendahara", "Rp21.000.000"],
          ["PPh 22 impor", "Rp95.000.000"],
          ["Jumlah Lampiran 1771-III (Coretax: Lampiran 3 Bagian B)", "Rp152.000.000"],
          ["Tidak masuk: PPh final Rp170.000.000; PPh 24 Rp40.000.000; PPh 25 Rp120.000.000", "Lampiran IV, 7A, dan induk"],
          ["Padanan Coretax untuk kredit pajak seluruhnya", "Lampiran 3 Bagian B Rp152.000.000 + Bagian A Rp40.000.000 = Rp192.000.000 → Induk Bagian E angka 13"]
        ],
        mengapaSalah: {
          A: "Menambahkan PPh 24 Rp40.000.000; kredit pajak luar negeri bukan PPh yang dipotong/dipungut pihak lain di dalam negeri (format lama: lampiran khusus 7A; Coretax: Lampiran 3 Bagian A).",
          B: "Menambahkan PPh final Rp170.000.000; PPh final bukan kredit pajak.",
          D: "Melewatkan PPh 22 impor Rp95.000.000; pungutan impor juga kredit pajak dalam negeri."
        },
        jebakan: "Pisahkan bukti per lampiran sebelum menjumlah: III (PPh 22/23 dalam negeri), IV (final), 7A (PPh 24), induk (PPh 25). Di Coretax PPh 24 ikut Lampiran 3 (Bagian A), sehingga jumlah kredit pajak Lampiran 3 menjadi Rp192.000.000; jangan tertukar dengan jumlah Bagian B."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 138 huruf a PER-11/PJ/2025 (format 1771 PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017 hanya untuk Tahun Pajak sampai 2024)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 85 ayat (1) huruf b angka 3 dan Lampiran huruf H PER-11/PJ/2025 (padanan Coretax: Lampiran 3 Bagian A dan B)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Padanan Coretax (Lampiran 3 Bagian B Rp152.000.000; Bagian A untuk PPh 24) sudah dicocokkan ke Lampiran huruf H PER-11/PJ/2025. Format 1771 lama (induk, Lampiran I–VI, lampiran khusus 1A–8A) menurut Pasal 138 huruf a PER-11/PJ/2025 hanya dipakai untuk Tahun Pajak sampai 2024 (PER-34/PJ/2010 s.t.d.t.d. PER-30/PJ/2017); lampiran formulir lama itu tidak ada di pustaka, jadi penomoran lama belum dicocokkan ke naskah."
    },
    {
      id: "B6-103",
      topik: "B6.11",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 8 ayat (4) dan ayat (5) UU KUP (parafrase): Walaupun telah dilakukan pemeriksaan, sepanjang pemeriksa belum menyampaikan Surat Pemberitahuan Hasil Pemeriksaan, Wajib Pajak dengan kesadaran sendiri dapat mengungkapkan dalam laporan tersendiri tentang ketidakbenaran pengisian SPT yang telah disampaikan. Atas kekurangan pembayaran pajak akibat pengungkapan itu dikenai sanksi administratif berupa bunga per bulan yang dihitung atas jumlah pajak yang kurang dibayar, sejak (a) batas waktu penyampaian SPT Tahunan berakhir sampai dengan tanggal pembayaran, untuk SPT Tahunan, atau (b) jatuh tempo pembayaran berakhir sampai dengan tanggal pembayaran, untuk SPT Masa; paling lama 24 bulan dan bagian dari bulan dihitung penuh 1 bulan. Tarif bunganya (suku bunga acuan + 10%) ÷ 12 (ayat (5a)).",
      stem: "PT Prima Daya Elektrika sedang menjalani pemeriksaan lengkap atas SPT Tahunan PPh Badan Tahun Pajak 2024 yang disampaikan 29 April 2025. Pada 26 Oktober 2026, sebelum SPHP disampaikan, perusahaan menyampaikan laporan tersendiri yang mengungkapkan biaya yang tidak dapat dibuktikan sehingga PPh badan kurang dibayar Rp200.000.000, dan melunasi kekurangan itu pada hari yang sama. Anggap tarif bunga Pasal 8 ayat (5) ((suku bunga acuan + 10%) ÷ 12) yang dipakai 1,42% per bulan, sedangkan tarif Pasal 8 ayat (2) 1,01% per bulan. Berdasarkan kutipan tersebut, sanksi yang harus dilunasi bersama pengungkapan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga Rp51.120.000", B: "Bunga Rp62.480.000", C: "Bunga Rp36.360.000", D: "Denda Rp200.000.000 (100% dari pajak yang kurang dibayar)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengungkapan ketidakbenaran pengisian SPT Tahunan sebelum SPHP dikenai bunga Pasal 8 ayat (5) (uplift 10%), dihitung sejak batas waktu penyampaian SPT Tahunan berakhir (30 April 2025 untuk SPT badan TP 2024) sampai tanggal pembayaran 26 Oktober 2026: 17 bulan lebih 26 hari = 18 bulan.",
        jejakHitung: [
          ["Batas waktu SPT Tahunan badan TP 2024", "30 April 2025 (4 bulan setelah akhir tahun pajak)"],
          ["1 Mei 2025 → 26 Oktober 2026", "17 bulan 26 hari → 18 bulan (≤ 24)"],
          ["Bunga = 200.000.000 × 1,42% × 18", "Rp51.120.000"]
        ],
        mengapaSalah: {
          B: "Menghitung sejak berakhirnya Tahun Pajak 2024 (22 bulan); titik awal itu milik bunga SKPKB Pasal 13 ayat (2), bukan Pasal 8 ayat (5) yang dimulai dari batas waktu penyampaian SPT Tahunan.",
          C: "Memakai tarif pembetulan Pasal 8 ayat (2) (1,01% × 18 bulan); jangka waktunya sama, tetapi pengungkapan saat pemeriksaan memakai uplift 10% (1,42%).",
          D: "Denda 100% adalah sanksi pengungkapan ketidakbenaran perbuatan pada pemeriksaan bukti permulaan (Pasal 8 ayat (3)), bukan pengungkapan pengisian SPT saat pemeriksaan."
        },
        jebakan: "Pembetulan sendiri (ayat (2)) dan pengungkapan saat pemeriksaan (ayat (5)) sama-sama mulai dari batas waktu SPT Tahunan; yang membedakan uplift 5% lawan 10%. Titik awal akhir tahun pajak milik Pasal 13 ayat (2) (SKPKB), dan denda 100% milik pengungkapan perbuatan saat bukti permulaan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (4) UU KUP (UU HPP)", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 8 ayat (5) UU KUP (diubah UU 11/2020)", berlakuSejak: "2020-11-02" }, { pasal: "KMK 488/KMK.010/2021 s.t.d.t.d. KMK 51/2026 (penetapan tarif bunga)" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-104", topik: "B6.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Bahtera Niaga (WP badan dalam negeri) pada 14 Agustus 2026 menukarkan satu ekskavator miliknya dengan satu dump truck milik PT Mitra Tambang. Kedua perusahaan tidak mempunyai hubungan istimewa dan tidak ada pembayaran tunai tambahan. Nilai sisa buku fiskal ekskavator Rp480.000.000, sedangkan harga pasar ekskavator maupun dump truck pada tanggal pertukaran masing-masing Rp700.000.000. Staf akuntansi PT Bahtera mencatat dump truck sebesar nilai buku ekskavator tanpa mengakui laba. Menurut UU PPh, keuntungan pengalihan ekskavator yang diakui PT Bahtera dan harga perolehan dump truck sebagai dasar penyusutan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keuntungan Rp220.000.000; harga perolehan dump truck Rp700.000.000",
        B: "Keuntungan Rp0; harga perolehan dump truck Rp480.000.000",
        C: "Keuntungan Rp220.000.000; harga perolehan dump truck Rp480.000.000",
        D: "Keuntungan Rp700.000.000; harga perolehan dump truck Rp700.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 10 ayat (2): dalam tukar-menukar, nilai pengalihan dan nilai perolehan adalah harga pasar. PT Bahtera mengakui keuntungan sebesar harga pasar dikurangi nilai sisa buku fiskal, dan dump truck dicatat sebesar harga pasarnya.",
        jejakHitung: [["Harga pasar ekskavator", "Rp700.000.000"], ["− Nilai sisa buku fiskal", "(Rp480.000.000)"], ["Keuntungan pengalihan", "Rp220.000.000"], ["Harga perolehan dump truck (harga pasar)", "Rp700.000.000"]],
        mengapaSalah: {
          B: "Pertukaran dengan nilai buku tanpa laba tidak sesuai Pasal 10 ayat (2); nilai buku hanya boleh dipakai bila ada ketentuan khusus (mis. restrukturisasi dengan syarat PMK).",
          C: "Bila keuntungan diakui atas dasar harga pasar, harga perolehan harta pengganti juga harga pasar; mencampur dua dasar tidak konsisten.",
          D: "Keuntungan adalah selisih harga pasar dengan nilai sisa buku, bukan seluruh harga pasar."
        },
        jebakan: "Mengikuti perlakuan komersial yang mencatat pertukaran dengan nilai buku."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B6-105", topik: "B6.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 10 ayat (5) UU PPh (disederhanakan): Apabila harta dialihkan sebagai pengganti saham atau penyertaan modal, nilai perolehan harta tersebut bagi badan yang menerima pengalihan adalah harga pasar.",
      stem: "PT Induk Sentosa (WP badan dalam negeri) menyetorkan modal dalam bentuk mesin produksi (inbreng) kepada anak perusahaannya yang baru didirikan, PT Anak Sentosa, dan menerima saham PT Anak Sentosa dengan nilai nominal Rp1.000.000.000. Penyetoran ini bukan bagian dari penggabungan, peleburan, atau pemekaran usaha. Nilai sisa buku fiskal mesin Rp350.000.000, sedangkan harga pasar mesin menurut penilai independen Rp1.000.000.000. Berdasarkan kutipan, penghasilan yang wajib diakui PT Induk Sentosa dan dasar penyusutan mesin bagi PT Anak Sentosa adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Penghasilan Rp650.000.000; dasar penyusutan Rp1.000.000.000",
        B: "Penghasilan Rp0; dasar penyusutan Rp350.000.000",
        C: "Penghasilan Rp650.000.000; dasar penyusutan Rp350.000.000",
        D: "Penghasilan Rp1.000.000.000; dasar penyusutan Rp1.000.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Inbreng dinilai dengan harga pasar: PT Induk mengakui keuntungan pengalihan sebesar harga pasar dikurangi nilai sisa buku fiskal, dan PT Anak menyusutkan mesin dari harga pasar.",
        jejakHitung: [["Harga pasar mesin", "Rp1.000.000.000"], ["− Nilai sisa buku fiskal", "(Rp350.000.000)"], ["Keuntungan PT Induk", "Rp650.000.000"], ["Dasar penyusutan PT Anak", "Rp1.000.000.000"]],
        mengapaSalah: {
          B: "Nilai buku hanya dapat dipakai dalam restrukturisasi yang memenuhi syarat PMK; inbreng biasa memakai harga pasar.",
          C: "Bagi badan penerima, Pasal 10 ayat (5) menetapkan harga pasar, bukan nilai sisa buku pengalih.",
          D: "Penghasilan pengalih adalah selisih atas nilai sisa buku, bukan seluruh harga pasar."
        },
        jebakan: "Menganggap setoran modal dalam bentuk harta netral pajak seperti merger bernilai buku."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "B6-106", topik: "B6.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Cakra Ekspedisi (WP badan dalam negeri) pada 2 September 2026 menjual satu truk bekas kepada PT Sumber Logistik, yang 60% sahamnya dimiliki PT Cakra, seharga Rp150.000.000. Nilai sisa buku fiskal truk Rp120.000.000, sedangkan harga pasar wajar truk sejenis antarpihak independen Rp260.000.000. PT Cakra mencatat laba penjualan aset Rp30.000.000 dalam laporan keuangannya. Koreksi fiskal yang tepat atas transaksi ini dalam SPT Tahunan PT Cakra adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi positif Rp110.000.000",
        B: "Tidak ada koreksi karena harga sesuai faktur dan dokumen jual beli",
        C: "Koreksi positif Rp140.000.000",
        D: "Koreksi positif Rp260.000.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Kepemilikan 60% menimbulkan hubungan istimewa, sehingga harga penjualan menurut Pasal 10 ayat (1) adalah jumlah yang seharusnya diterima (Rp260.000.000). Laba fiskal Rp140.000.000 dibandingkan laba komersial Rp30.000.000 menghasilkan koreksi positif Rp110.000.000.",
        jejakHitung: [["Laba fiskal = 260.000.000 − 120.000.000", "Rp140.000.000"], ["Laba komersial", "Rp30.000.000"], ["Koreksi positif", "Rp110.000.000"]],
        mengapaSalah: {
          B: "Harga antarpihak yang mempunyai hubungan istimewa diuji kewajarannya; dokumen transaksi tidak menghapus kewajiban memakai harga wajar.",
          C: "Rp140.000.000 adalah laba fiskal, bukan selisih yang harus dikoreksi.",
          D: "Koreksi bukan seluruh harga pasar; nilai sisa buku dan laba yang sudah dicatat harus diperhitungkan."
        },
        jebakan: "Menyamakan besar koreksi dengan laba fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 ayat (3) dan (4) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "B6-107",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kasusId: "V-B6-07",
      laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal ini dan dua soal berikutnya (V-B6-07): Lysberg Prosess AS, badan yang berkedudukan di Negara Fennoria (belum memiliki P3B dengan Indonesia), mengirim empat insinyurnya untuk memberikan jasa konsultansi optimasi proses dan pelatihan operator di kilang PT Samudra Petrokimia, Cilegon. Para insinyur mulai bekerja di lokasi pada Senin, 3 Maret 2025 dan hadir terus-menerus sampai kontrak berakhir 31 Agustus 2026; hari ke-61 kehadiran jatuh pada 2 Mei 2025. Lysberg mendaftarkan BUT-nya di Coretax dan memperoleh NPWP pada 16 Juni 2025, lalu menerbitkan tagihan pertama pada 30 Juni 2025. Data Tahun Pajak 2025 BUT: peredaran usaha Rp12.000.000.000 dan laba komersial Rp900.000.000 setelah dibebani (i) bunga pinjaman dari kantor pusat Rp180.000.000, (ii) royalti perangkat lunak simulasi proses milik kantor pusat Rp240.000.000, (iii) alokasi biaya administrasi kantor pusat yang berkaitan dengan kegiatan BUT dan dihitung sesuai ketentuan Rp120.000.000, serta (iv) pengiriman laba semester I 2025 ke kantor pusat yang dicatat staf sebagai ‘beban dividen kantor pusat’ Rp300.000.000. Seluruh laba setelah pajak 2025 dikirim ke kantor pusat dan tidak ditanamkan kembali di Indonesia. Dengan menganggap berlaku penafsiran (sejalan dengan Commentary Model OECD/PBB) bahwa kehadiran jasa yang melampaui batas 60 hari dalam 12 bulan menjadikan seluruh kegiatan sejak hari pertama sebagai kegiatan melalui BUT, kewajiban pajak subjektif BUT Lysberg di Indonesia dimulai pada ...",
      kataKualifikasi: [],
      opsi: { A: "30 Juni 2025, saat tagihan pertama diterbitkan kepada PT Samudra Petrokimia", B: "16 Juni 2025, saat BUT terdaftar dan memperoleh NPWP di Coretax", C: "3 Maret 2025, saat mulai menjalankan kegiatan di Indonesia melalui BUT", D: "1 Januari 2026, tahun pajak berikutnya setelah syarat BUT terpenuhi" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 2A ayat (3): kewajiban subjektif subjek pajak luar negeri yang menjalankan usaha atau kegiatan melalui BUT dimulai saat mulai menjalankan usaha atau kegiatan itu. Karena jasa diberikan lebih dari 60 hari dalam 12 bulan (Pasal 2 ayat (5) huruf m), kehadiran sejak 3 Maret 2025 merupakan kegiatan melalui BUT, sehingga kewajiban subjektif dimulai pada hari pertama kegiatan.",
        jejakHitung: [
          ["3–31 Maret 2025", "29 hari"],
          ["1–30 April 2025", "30 hari (kumulatif 59)"],
          ["1–2 Mei 2025", "hari ke-60 dan ke-61 → batas 60 hari terlampaui"],
          ["Premis stem: melampaui 60 hari → kegiatan sejak hari pertama melalui BUT", "BUT ada sejak 3 Maret 2025"],
          ["Awal kewajiban subjektif", "3 Maret 2025 (hari pertama kegiatan)"]
        ],
        mengapaSalah: {
          A: "Tanggal tagihan menyangkut saat pengakuan penghasilan, bukan awal kewajiban subjektif; Pasal 2A ayat (3) mengaitkannya dengan saat mulai menjalankan kegiatan melalui BUT, yang pada soal ini adalah hari pertama kehadiran.",
          B: "Pendaftaran NPWP adalah kewajiban administratif yang timbul karena kewajiban subjektif sudah ada, bukan penentu awal kewajiban subjektif.",
          D: "Kewajiban subjektif tidak menunggu tahun pajak berikutnya; BUT sudah menjadi subjek pajak untuk Tahun Pajak 2025."
        },
        jebakan: "Menyamakan awal kewajiban subjektif dengan tanggal NPWP, tanggal tagihan pertama, atau awal tahun pajak berikutnya; tanpa premis dalam stem, sebagian pembaca Pasal 2A ayat (3) menunjuk hari ke-61 (2 Mei 2025)."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (3) UU PPh (UU 10/1994)", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (5) huruf m UU PPh", berlakuSejak: "2001-01-01" }, { pasal: "PMK 35/PMK.03/2019 Pasal 4 ayat (2) huruf b dan Pasal 8 ayat (1) dan ayat (3) huruf a", berlakuSejak: "2019-04-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-108",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B6-07",
      laporanUjian: ["C-2026-10"],
      stem: "Melanjutkan data Lysberg Prosess AS (V-B6-07): BUT Lysberg tidak menjalankan usaha perbankan, dan tidak ada koreksi fiskal selain atas pos (i) sampai (iv). Laba komersial 2025 Rp900.000.000 sudah dikurangi keempat pos tersebut, dan tidak ada sisa kerugian. Penghasilan Kena Pajak BUT Lysberg Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.740.000.000", B: "Rp1.620.000.000", C: "Rp1.320.000.000", D: "Rp1.440.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 5 ayat (3): bunga (kecuali yang berkenaan dengan usaha perbankan) dan royalti yang dibayar BUT kepada kantor pusat tidak dapat dibiayakan. Pengiriman laba ke kantor pusat adalah pembagian laba (Pasal 9 ayat (1) huruf a), bukan biaya. Alokasi biaya administrasi kantor pusat yang berkaitan dengan kegiatan BUT boleh dibebankan (Pasal 5 ayat (2)).",
        jejakHitung: [
          ["Laba komersial", "Rp900.000.000"],
          ["+ Bunga kepada kantor pusat (bukan usaha perbankan)", "Rp180.000.000"],
          ["+ Royalti kepada kantor pusat", "Rp240.000.000"],
          ["+ Pengiriman laba yang dicatat sebagai ‘dividen’", "Rp300.000.000"],
          ["Alokasi biaya administrasi kantor pusat", "tidak dikoreksi"],
          ["PKP = 900 + 180 + 240 + 300 (juta)", "Rp1.620.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengoreksi alokasi biaya administrasi kantor pusat Rp120.000.000, padahal Pasal 5 ayat (2) membolehkannya sepanjang berkaitan dengan kegiatan BUT.",
          C: "Lupa mengoreksi pengiriman laba Rp300.000.000; BUT tidak dapat membebankan ‘dividen’ kepada kantor pusatnya karena itu pembagian laba.",
          D: "Menganggap bunga kepada kantor pusat dapat dibiayakan; pengecualian Pasal 5 ayat (3) hanya untuk bunga yang berkenaan dengan usaha perbankan."
        },
        jebakan: "Memukul rata semua pembebanan kantor pusat: alokasi biaya administrasi boleh, sedangkan royalti, jasa, bunga, dan pengiriman laba tidak."
      },
      dasarHukum: [
        { pasal: "Pasal 5 ayat (2) dan ayat (3) UU PPh", berlakuSejak: "2001-01-01" },
        { pasal: "Pasal 9 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-109",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B6-07",
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (4) dan Pasal 31E ayat (1) UU PPh (parafrase): Penghasilan Kena Pajak sesudah dikurangi Pajak Penghasilan dari suatu bentuk usaha tetap di Indonesia dikenai pajak sebesar 20%, kecuali penghasilan tersebut ditanamkan kembali di Indonesia. Wajib Pajak badan dalam negeri dengan peredaran bruto sampai dengan Rp50.000.000.000 mendapat fasilitas pengurangan tarif sebesar 50% dari tarif Pasal 17 yang dikenakan atas Penghasilan Kena Pajak dari bagian peredaran bruto sampai dengan Rp4.800.000.000.",
      stem: "Melanjutkan data Lysberg Prosess AS (V-B6-07): PKP BUT Lysberg Tahun Pajak 2025 Rp1.620.000.000 dan peredaran usahanya Rp12.000.000.000. Staf akuntansi BUT berpendapat fasilitas Pasal 31E dapat dipakai karena peredaran usaha di bawah Rp50 miliar. Seluruh laba setelah pajak dikirim ke kantor pusat. Berdasarkan kutipan tersebut, jumlah PPh badan dan PPh Pasal 26 ayat (4) yang terutang atas BUT Lysberg untuk Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp356.400.000", B: "Rp680.400.000", C: "Rp552.096.000", D: "Rp609.120.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "BUT adalah subjek pajak luar negeri, sehingga Pasal 31E (khusus Wajib Pajak badan dalam negeri) tidak berlaku: PPh badan 22% × PKP. Karena Fennoria belum memiliki P3B dan laba tidak ditanamkan kembali, laba setelah PPh dikenai PPh Pasal 26 ayat (4) 20%.",
        jejakHitung: [
          ["PPh badan = 22% × 1.620.000.000", "Rp356.400.000"],
          ["Laba setelah PPh = 1.620.000.000 − 356.400.000", "Rp1.263.600.000"],
          ["PPh 26 ayat (4) = 20% × 1.263.600.000", "Rp252.720.000"],
          ["Jumlah = 356.400.000 + 252.720.000", "Rp609.120.000"]
        ],
        mengapaSalah: {
          A: "Hanya PPh badan; lupa branch profit tax 20% atas laba setelah pajak (pengecualian hanya bila seluruh laba itu ditanamkan kembali).",
          B: "Branch profit tax dihitung dari PKP sebelum dikurangi PPh badan (20% × 1.620.000.000 = Rp324.000.000).",
          C: "Menerapkan Pasal 31E (PPh Rp285.120.000 dan branch profit tax Rp266.976.000), padahal fasilitas itu hanya untuk Wajib Pajak badan dalam negeri."
        },
        jebakan: "Peredaran usaha BUT yang kecil memancing pemakaian Pasal 31E; baca subjek yang berhak dalam kutipan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-110",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf a dan huruf c UU PPh (parafrase): Yang tidak termasuk subjek pajak adalah kantor perwakilan negara asing; serta organisasi internasional yang ditetapkan dengan Peraturan Menteri Keuangan, dengan syarat Indonesia menjadi anggota organisasi tersebut dan organisasi tersebut tidak menjalankan usaha atau kegiatan lain untuk memperoleh penghasilan dari Indonesia selain memberikan pinjaman kepada pemerintah yang dananya berasal dari iuran para anggota.",
      stem: "Pada Oktober 2026 kantor konsultan Anda diminta memetakan status subjek pajak empat pihak di Jakarta: (1) Kedutaan Besar Negara Valmora, yang hubungan diplomatiknya dengan Indonesia berdasarkan asas timbal balik; (2) kantor perwakilan Norrsken Handel AB, perusahaan swasta dari Negara Svenmark, yang mempromosikan produk serta menegosiasikan dan menandatangani kontrak penjualan atas nama kantor pusatnya; (3) Lembaga Pangan Kawasan Asia, organisasi internasional yang telah ditetapkan dengan Peraturan Menteri Keuangan, Indonesia menjadi anggotanya, dan kegiatannya di Indonesia hanya memberikan pinjaman kepada pemerintah dari iuran anggota; serta (4) Dewan Karet Antarbangsa, organisasi yang Indonesia menjadi anggotanya tetapi belum ditetapkan dengan Peraturan Menteri Keuangan, dan kantornya di Jakarta menjual jasa riset pasar dan pelatihan berbayar kepada perusahaan swasta Indonesia. Berdasarkan kutipan tersebut, pihak yang merupakan subjek pajak penghasilan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) saja", B: "(2) dan (4)", C: "(1), (2), dan (4)", D: "(3) dan (4)" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Kedutaan (kantor perwakilan negara asing) dan organisasi internasional yang memenuhi seluruh syarat Pasal 3 ayat (1) huruf c dikecualikan. Kantor perwakilan perusahaan swasta asing yang menandatangani kontrak atas nama kantor pusat adalah BUT, sedangkan organisasi yang belum ditetapkan Menteri Keuangan dan menjual jasa di Indonesia tidak memenuhi syarat pengecualian.",
        jejakHitung: [
          ["(1) Kedutaan Besar Negara Valmora", "bukan subjek (Ps. 3 ayat (1) huruf a)"],
          ["(2) Kantor perwakilan perusahaan swasta asing", "subjek pajak luar negeri melalui BUT (Ps. 2 ayat (5))"],
          ["(3) Organisasi internasional yang memenuhi syarat", "bukan subjek (Ps. 3 ayat (1) huruf c)"],
          ["(4) Organisasi belum ditetapkan dan menjual jasa", "subjek pajak"]
        ],
        mengapaSalah: {
          A: "Menganggap setiap organisasi internasional yang beranggotakan Indonesia otomatis dikecualikan; pengecualian mensyaratkan penetapan Menteri Keuangan dan tidak ada kegiatan memperoleh penghasilan dari Indonesia selain pinjaman kepada pemerintah dari iuran anggota.",
          C: "Kedutaan adalah kantor perwakilan negara asing yang dikecualikan Pasal 3 ayat (1) huruf a; jangan disamakan dengan kantor perwakilan perusahaan asing.",
          D: "Pihak (3) memenuhi seluruh syarat pengecualian, sedangkan kantor perwakilan Norrsken yang menandatangani kontrak atas nama kantor pusat justru merupakan BUT."
        },
        jebakan: "Frasa ‘kantor perwakilan’ dipakai untuk dua hal berbeda: perwakilan negara asing (bukan subjek) dan perwakilan perusahaan asing (BUT)."
      },
      dasarHukum: [
        { pasal: "Pasal 3 ayat (1) huruf a dan huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 2 ayat (5) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-111",
      topik: "B6.1",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "Brennan Pumps Ltd, berkedudukan di Negara Albionia (belum memiliki P3B dengan Indonesia), memiliki BUT di Surabaya yang menjual dan memasang pompa industri. Data Tahun Pajak 2025, seluruhnya berupa penghasilan neto setelah biaya yang berkaitan: (1) laba penjualan pompa industri yang dijalankan BUT Rp2.000.000.000; (2) laba kantor pusat dari penjualan langsung pompa industri sejenis kepada PT Tirta Kencana di Gresik tanpa melibatkan BUT Rp400.000.000; (3) royalti yang diterima kantor pusat dari PT Sumber Air Lestari atas paten teknologi pompa yang dikelola dan dikembangkan oleh BUT sehingga terdapat hubungan efektif dengan kegiatan BUT Rp150.000.000; dan (4) bunga yang diterima kantor pusat dari PT Lancar Niaga atas pinjaman yang diberikan langsung oleh kantor pusat dan tidak berkaitan dengan harta maupun kegiatan BUT Rp100.000.000. Penghasilan neto yang menjadi objek pajak BUT Brennan Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.550.000.000", B: "Rp2.000.000.000", C: "Rp2.650.000.000", D: "Rp2.400.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 5 ayat (1): penghasilan BUT meliputi penghasilan dari kegiatan BUT (huruf a), penghasilan kantor pusat dari penjualan barang atau jasa sejenis di Indonesia (force of attraction, huruf b), dan penghasilan Pasal 26 yang diterima kantor pusat sepanjang berhubungan efektif dengan harta atau kegiatan BUT (huruf c). Tanpa P3B yang membatasi, ketiganya digabung.",
        jejakHitung: [
          ["(1) Kegiatan BUT", "Rp2.000.000.000"],
          ["(2) Penjualan sejenis oleh kantor pusat (force of attraction)", "Rp400.000.000"],
          ["(3) Royalti yang berhubungan efektif dengan BUT", "Rp150.000.000"],
          ["(4) Bunga tanpa hubungan efektif", "bukan penghasilan BUT (PPh 26 atas kantor pusat)"],
          ["Penghasilan neto BUT", "Rp2.550.000.000"]
        ],
        mengapaSalah: {
          B: "Hanya laba kegiatan BUT; lupa force of attraction (Pasal 5 ayat (1) huruf b) dan penghasilan yang berhubungan efektif (huruf c).",
          C: "Bunga atas pinjaman yang tidak berhubungan efektif dengan BUT tetap penghasilan kantor pusat yang dipotong PPh Pasal 26, bukan penghasilan BUT.",
          D: "Lupa royalti yang berhubungan efektif dengan harta atau kegiatan BUT (Pasal 5 ayat (1) huruf c)."
        },
        jebakan: "Penghasilan kantor pusat dari Indonesia tidak otomatis masuk BUT; ujinya: barang/jasa sejenis atau hubungan efektif."
      },
      dasarHukum: [
        { pasal: "Pasal 5 ayat (1) huruf a, b, dan c UU PPh", berlakuSejak: "2001-01-01" },
        { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-112",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B6-08",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal ini dan soal berikutnya (V-B6-08): PT Sehat Farma Nusantara (badan dalam negeri, pembukuan dalam Rupiah; transaksi valuta asing dicatat dengan kurs tengah BI tanggal transaksi) memakai lisensi formula obat dari Alpenwerk Pharma AG yang berkedudukan di Negara Alpinia (mitra P3B; tarif royalti menurut P3B 10%). Alpenwerk tidak mempunyai BUT di Indonesia, merupakan pemilik manfaat, dan Form DGT yang sah telah disampaikan melalui Coretax sebelum pembayaran. Royalti semester I 2026 sebesar USD80.000 jatuh tempo dan dibayar pada Jumat, 14 Agustus 2026; PT Sehat memotong PPh Pasal 26 dan membuat bukti potong pada tanggal itu, lalu mentransfer USD72.000 kepada Alpenwerk. Kurs KMK yang berlaku 12–18 Agustus 2026 Rp16.200 per USD dan kurs tengah BI 14 Agustus 2026 Rp16.260. PPh Pasal 26 disetor pada 15 September 2026, ketika kurs KMK yang berlaku Rp16.350 dan kurs tengah BI Rp16.310. PPh Pasal 26 yang wajib dipotong dan disetor PT Sehat dalam Rupiah adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp259.200.000", B: "Rp130.080.000", C: "Rp129.600.000", D: "Rp130.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Atas royalti kepada pemilik manfaat di negara mitra P3B yang Form DGT-nya sah, PPh Pasal 26 dipotong dengan tarif P3B 10%. Jumlah valas dikonversi dengan kurs KMK yang berlaku saat pajak terutang/pemotongan (minggu 12–18 Agustus 2026), bukan kurs tengah BI (kurs pembukuan) dan bukan kurs saat setor.",
        jejakHitung: [
          ["Tarif (Form DGT sah, pemilik manfaat)", "10% (P3B)"],
          ["PPh 26 dalam valas = 10% × USD80.000", "USD8.000"],
          ["Kurs KMK saat pemotongan (14 Agustus 2026)", "Rp16.200"],
          ["PPh 26 = 8.000 × 16.200", "Rp129.600.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif domestik 20% (USD16.000 × 16.200), padahal Form DGT sah dan Alpenwerk pemilik manfaat sehingga tarif P3B 10% berlaku.",
          B: "Memakai kurs tengah BI Rp16.260; kurs tengah BI untuk pembukuan, sedangkan PPh yang dipotong dalam valas dikonversi dengan kurs KMK.",
          D: "Memakai kurs KMK saat penyetoran Rp16.350; kurs yang dipakai adalah yang berlaku saat pajak terutang atau saat pemotongan."
        },
        jebakan: "Tiga kurs tersedia dalam soal (KMK saat potong, kurs tengah BI, KMK saat setor); hanya kurs KMK saat terutang/pemotongan yang menentukan Rupiah PPh 26."
      },
      dasarHukum: [
        { pasal: "Pasal 26 ayat (1) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 112/2025 (penerapan P3B, Form DGT; menggantikan PER-25/PJ/2018 yang berlaku s.d. 30 Desember 2025)", berlakuSejak: "2025-12-31" },
        { pasal: "KMK nilai kurs mingguan (berlaku Rabu–Selasa)" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-113",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B6-08",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Melanjutkan data PT Sehat Farma Nusantara (V-B6-08): lisensi dipakai untuk memproduksi obat yang dijual di dalam negeri, Alpenwerk tidak mempunyai hubungan istimewa dengan PT Sehat, dan tarif royalti sesuai harga pasar. PT Sehat mencatat beban royalti dengan kurs tengah BI tanggal transaksi, mencatat utang PPh Pasal 26 sebesar jumlah Rupiah yang wajib disetor, dan membukukan selisihnya sebagai selisih kurs; penyetoran 15 September 2026 dicatat sebesar utang PPh Pasal 26 tersebut. Pernyataan yang tepat mengenai pencatatan dan perlakuan fiskal pembayaran royalti tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Beban royalti dicatat Rp1.296.000.000 dengan kurs KMK sehingga tidak timbul selisih kurs, dan seluruhnya dapat dikurangkan", B: "Beban royalti Rp1.300.800.000 dapat dikurangkan seluruhnya; keuntungan selisih kurs Rp480.000 diakui sebagai penghasilan, dan penyetoran PPh Pasal 26 tidak menimbulkan selisih kurs", C: "Beban royalti yang dapat dikurangkan hanya Rp1.170.720.000 (USD72.000 yang ditransfer), sedangkan PPh Pasal 26 Rp129.600.000 merupakan beban pajak yang dikoreksi positif", D: "Beban royalti Rp1.300.800.000 dapat dikurangkan, tetapi saat penyetoran timbul kerugian selisih kurs Rp1.200.000 karena kurs KMK naik menjadi Rp16.350" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Royalti bruto USD80.000 adalah biaya 3M (Pasal 6 ayat (1) huruf a) yang dicatat dengan kurs pembukuan Rp16.260. Bagian royalti yang dilunasi dengan PPh 26 Rupiah (kurs KMK) menimbulkan selisih: pajak Rp129.600.000 − bagian valas Rp130.080.000 = keuntungan selisih kurs Rp480.000, diakui mengikuti pembukuan yang taat asas. Utang PPh 26 sudah dalam Rupiah sehingga penyetoran tidak menimbulkan selisih kurs.",
        jejakHitung: [
          ["Debit beban royalti = 80.000 × 16.260", "Rp1.300.800.000"],
          ["Kredit kas = 72.000 × 16.260", "Rp1.170.720.000"],
          ["Kredit utang PPh 26 = 8.000 × 16.200 (kurs KMK)", "Rp129.600.000"],
          ["Bagian valas yang dilunasi dengan pajak = 8.000 × 16.260", "Rp130.080.000"],
          ["Kredit keuntungan selisih kurs = 130.080.000 − 129.600.000", "Rp480.000"],
          ["Setor 15 September 2026 (utang Rupiah)", "tidak ada selisih kurs; tidak ada koreksi fiskal"]
        ],
        mengapaSalah: {
          A: "Kurs KMK hanya untuk menghitung DPP dan pajak terutang; pembukuan memakai kurs transaksi/kurs tengah BI.",
          C: "Biaya adalah royalti bruto; PPh 26 yang dipotong adalah pajak milik Alpenwerk yang dilunasi dari bagian royalti, bukan PPh yang ditanggung PT Sehat.",
          D: "Utang PPh 26 sudah dinyatakan dalam Rupiah sejak pemotongan; kurs saat setor tidak dipakai sehingga tidak ada selisih kurs saat setor."
        },
        jebakan: "Selisih kurs diukur dengan kurs pembukuan; kurs KMK masuk ke selisih kurs hanya pada bagian valas yang dilunasi dengan pajak Rupiah."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a dan huruf e UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 4 ayat (1) huruf l UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "KMK nilai kurs mingguan", berlakuSejak: null }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-114",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Layar Kreasi Digital (badan dalam negeri, platform video berlangganan) memperoleh lisensi penayangan katalog film dari Orbis Reel Pictures Ltd yang berkedudukan di Negara Borvia (mitra P3B; tarif royalti P3B 10%). Orbis tidak mempunyai BUT di Indonesia, bukan pihak afiliasi, dan tidak menyampaikan Form DGT. Perjanjian memuat klausul gross-up: royalti dinaikkan sedemikian rupa sehingga setelah dipotong PPh Pasal 26, Orbis tetap menerima bersih USD40.000; seluruh royalti bruto dicatat sebagai beban royalti dan PPh Pasal 26 dipotong dari royalti bruto tersebut. Royalti dibayar dan PPh dipotong pada Rabu, 9 September 2026; kurs KMK yang berlaku dan kurs tengah BI pada tanggal itu sama, Rp16.400 per USD. Lisensi dipakai untuk menghasilkan pendapatan langganan yang dikenai tarif umum. PPh Pasal 26 yang wajib dipotong dan biaya royalti yang dapat dikurangkan PT Layar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 26 Rp131.200.000; biaya royalti Rp787.200.000", B: "PPh Pasal 26 Rp82.000.000; biaya royalti Rp820.000.000", C: "PPh Pasal 26 Rp131.200.000; biaya royalti Rp656.000.000, sedangkan PPh yang ditanggung dikoreksi positif", D: "PPh Pasal 26 Rp164.000.000; biaya royalti Rp820.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tanpa Form DGT berlaku tarif 20%. Dengan gross-up, royalti bruto = neto ÷ (1 − tarif) = USD50.000; PPh 26 dipotong dari bruto itu dan merupakan pajak penerima. Seluruh royalti bruto adalah biaya 3M (Pasal 6 ayat (1) huruf a). Berbeda dengan PPh yang ditanggung tanpa gross-up, yang termasuk PPh yang tidak dapat dibiayakan (Pasal 9 ayat (1) huruf h).",
        jejakHitung: [
          ["Tarif (tanpa Form DGT)", "20%"],
          ["Royalti bruto = 40.000 ÷ (1 − 20%)", "USD50.000"],
          ["PPh 26 = 20% × 50.000 = USD10.000 × 16.400", "Rp164.000.000"],
          ["Biaya royalti = 50.000 × 16.400", "Rp820.000.000"],
          ["Diterima Orbis = 50.000 − 10.000", "USD40.000 (sesuai perjanjian)"]
        ],
        mengapaSalah: {
          A: "Menghitung PPh 26 dari jumlah bersih USD40.000 seolah tanpa gross-up, lalu membiayakan pajak yang ditanggung; dengan klausul gross-up DPP adalah royalti bruto USD50.000.",
          B: "Memakai tarif P3B 10% padahal Orbis tidak menyampaikan Form DGT, sehingga berlaku tarif 20%.",
          C: "Itu perlakuan PPh ditanggung tanpa gross-up; perjanjian ini memakai gross-up sehingga seluruh royalti bruto adalah biaya dan pajaknya pajak penerima."
        },
        jebakan: "Bedakan gross-up (pajak masuk ke DPP royalti dan seluruh bruto menjadi biaya) dengan PPh 26 yang ditanggung tanpa gross-up (tidak dapat dibiayakan)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT; menggantikan PER-25/PJ/2018 yang berlaku s.d. 30 Desember 2025)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-115",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Pada Oktober 2026 PT Prima Rekayasa Energi melakukan empat pembayaran kepada pihak luar negeri yang tidak mempunyai BUT di Indonesia: (1) Rp2.000.000.000 kepada Ostwind Maschinen GmbH (Negara Rheinmark) atas pembelian dua unit kompresor yang dikirim dari Rheinmark dan diimpor sendiri oleh PT Prima, dengan PPh Pasal 22 impor dilunasi saat impor; (2) Rp500.000.000 kepada Fjellstad Design AS (Negara Norvia, mitra P3B; Form DGT sah; P3B tidak memuat pasal khusus jasa teknik) atas jasa desain teknik yang seluruhnya dikerjakan di Norvia; (3) Rp300.000.000 kepada Corvane Capital Ltd (Negara Marlovia, belum memiliki P3B dengan Indonesia) atas bunga pinjaman; dan (4) Rp400.000.000 kepada Quill Software Inc. (Negara Avalon, mitra P3B dengan tarif royalti 10%) atas royalti lisensi perangkat lunak rekayasa, sedangkan Quill tidak menyampaikan Form DGT. Jumlah PPh Pasal 26 yang wajib dipotong PT Prima atas keempat pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000.000", B: "Rp240.000.000", C: "Rp540.000.000", D: "Rp140.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 26 dikenakan atas penghasilan seperti bunga, royalti, dan imbalan jasa yang diterima subjek pajak luar negeri tanpa BUT; pembayaran atas pembelian barang yang diimpor bukan objek PPh 26. P3B dengan Form DGT sah menempatkan laba usaha (jasa tanpa BUT) hanya di negara domisili, sedangkan tanpa Form DGT tarif kembali 20%.",
        jejakHitung: [
          ["(1) Pembelian kompresor (barang impor)", "bukan objek PPh 26; PPh 22 impor saat impor"],
          ["(2) Jasa desain, P3B, Form DGT sah, tanpa BUT", "Rp0 (laba usaha dipajaki di Norvia)"],
          ["(3) Bunga tanpa P3B = 20% × 300.000.000", "Rp60.000.000"],
          ["(4) Royalti tanpa Form DGT = 20% × 400.000.000", "Rp80.000.000"],
          ["Jumlah PPh 26", "Rp140.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif P3B 10% untuk royalti Quill (Rp40.000.000), padahal Form DGT tidak disampaikan.",
          B: "Memotong 20% atas jasa desain Fjellstad; dengan Form DGT sah dan tanpa BUT, hak pemajakan laba usaha ada di Norvia.",
          C: "Ikut memotong 20% atas pembelian kompresor (Rp400.000.000) di samping bunga dan royalti yang sudah benar (Rp140.000.000); pembelian barang yang diimpor dari luar negeri bukan objek PPh 26."
        },
        jebakan: "P3B tidak berlaku otomatis: tanpa Form DGT berlaku 20% dan penerima dapat menempuh pengembalian pajak yang seharusnya tidak terutang (PMK 81/2024, yang mencabut PMK 187/2015)."
      },
      dasarHukum: [
        { pasal: "Pasal 26 ayat (1) dan Pasal 32A UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 112/2025 (penerapan P3B, Form DGT; menggantikan PER-25/PJ/2018 yang berlaku s.d. 30 Desember 2025)", berlakuSejak: "2025-12-31" },
        { pasal: "PMK 81/2024 (pengembalian pajak yang seharusnya tidak terutang)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-116",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Rimba Kopi Nusantara (badan dalam negeri terdaftar 2015, tahun buku kalender, tidak pernah memakai PPh final UMKM, bukan perseroan terbuka) melaporkan data Tahun Pajak 2025: penjualan kopi sangrai Rp18.400.000.000; penghasilan sewa ruang kantor kepada pihak lain Rp500.000.000 (PPh final 10% dipotong penyewa Rp50.000.000); bunga deposito Rp300.000.000 (PPh final 20% Rp60.000.000); dan dividen dari PT anak dalam negeri Rp800.000.000. Penghasilan Kena Pajak setelah seluruh koreksi fiskal Rp1.500.000.000 dan tidak ada sisa kerugian. Dokumen pajak 2025: PPh Pasal 22 impor mesin sangrai Rp40.000.000; BPPU PPh Pasal 23 dari pelanggan atas jasa maklon sangrai Rp25.400.000; angsuran PPh Pasal 25 Rp150.000.000; dan bukti potong PPh Pasal 26 Rp64.000.000 yang dibuat PT Rimba atas royalti merek kepada pemberi lisensi di luar negeri. PPh Pasal 29 Tahun Pajak 2025 PT Rimba adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kurang bayar Rp11.000.000",
        B: "Kurang bayar Rp114.600.000",
        C: "Kurang bayar Rp75.000.000",
        D: "Lebih bayar Rp50.400.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Peredaran bruto Pasal 31E mencakup penghasilan usaha, penghasilan final, dan bukan objek (Rp20 miliar ≤ Rp50 miliar), sehingga fasilitas 50% tarif berlaku atas PKP × 4,8/20. Kredit hanya PPh 22, 23, dan 25 milik PT Rimba; PPh final dan PPh 26 yang dipotong PT Rimba untuk pihak lain tidak dikreditkan.",
        jejakHitung: [
          ["Peredaran bruto = 18.400 + 500 + 300 + 800 (juta)", "Rp20.000.000.000"],
          ["PKP berfasilitas = 4,8 ÷ 20 × 1.500.000.000", "Rp360.000.000"],
          ["11% × 360.000.000", "Rp39.600.000"],
          ["22% × 1.140.000.000", "Rp250.800.000"],
          ["PPh terutang", "Rp290.400.000"],
          ["Kredit = 40.000.000 + 25.400.000 + 150.000.000", "Rp215.400.000"],
          ["PPh 29 = 290.400.000 − 215.400.000", "Rp75.000.000 kurang bayar"]
        ],
        mengapaSalah: {
          A: "Ikut mengkreditkan PPh 26 Rp64.000.000; itu pajak milik pemberi lisensi yang dipotong PT Rimba sebagai pemotong, bukan kredit pajak PT Rimba.",
          B: "Mengabaikan Pasal 31E (22% × 1.500.000.000 = Rp330.000.000) padahal peredaran bruto hanya Rp20 miliar.",
          D: "Mengenakan 11% atas seluruh PKP (Rp165.000.000); fasilitas hanya untuk bagian PKP dari peredaran bruto sampai Rp4,8 miliar."
        },
        jebakan: "Bukti potong yang dibuat perusahaan sebagai pemotong (PPh 26, PPh 21) sering disangka kredit pajak perusahaan."
      },
      dasarHukum: [
        { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" },
        { pasal: "Pasal 28 ayat (1) dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-117",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "PT Lentera Ritel Indonesia Tbk (peredaran bruto 2025 Rp620 miliar) sepanjang Tahun Pajak 2025 memenuhi seluruh syarat penurunan tarif perseroan terbuka: 45% saham disetor tercatat dan diperdagangkan di Bursa Efek Indonesia, dimiliki 2.400 pihak yang masing-masing menguasai kurang dari 5%, terpenuhi lebih dari 183 hari, dan seluruh syarat administrasinya terpenuhi. Penghasilan neto fiskal 2025 Rp9.200.000.000. Sisa kerugian fiskal yang belum dikompensasikan: Tahun Pajak 2019 Rp400.000.000 dan Tahun Pajak 2021 Rp1.200.000.000. Kredit pajak 2025: PPh Pasal 22 Rp210.000.000, PPh Pasal 23 Rp95.000.000, dan PPh Pasal 25 Rp960.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp255.000.000", B: "Rp179.000.000", C: "Rp495.000.000", D: "Rp335.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Tarif 19% (22% − 3%) berlaku bagi perseroan terbuka yang memenuhi syarat. Kompensasi hanya atas rugi yang masih dalam jangka 5 tahun: rugi 2021 (berlaku sampai 2026) dipakai, rugi 2019 hangus setelah 2024.",
        jejakHitung: [
          ["Rugi 2019 (jangka 2020–2024)", "hangus untuk TP 2025"],
          ["PKP = 9.200.000.000 − 1.200.000.000", "Rp8.000.000.000"],
          ["PPh = 19% × 8.000.000.000", "Rp1.520.000.000"],
          ["Kredit = 210 + 95 + 960 (juta)", "Rp1.265.000.000"],
          ["PPh 29 = 1.520.000.000 − 1.265.000.000", "Rp255.000.000"]
        ],
        mengapaSalah: {
          B: "Ikut mengompensasikan rugi 2019 yang sudah hangus pada akhir 2024 (PKP Rp7,6 miliar).",
          C: "Memakai tarif umum 22% padahal seluruh syarat perseroan terbuka terpenuhi.",
          D: "Memakai 20% (25% − 5%), angka usang dari era tarif 25%."
        },
        jebakan: "Dua jebakan sekaligus: tarif Tbk (19%, bukan 20%) dan rugi yang sudah hangus."
      },
      dasarHukum: [
        { pasal: "Pasal 17 ayat (2b) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" },
        { pasal: "PP 55/2022 (ketentuan perseroan terbuka)", berlakuSejak: "2022-12-20" },
        { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-118",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "PT Mahkota Investama (badan dalam negeri, perusahaan induk, tarif umum, peredaran bruto di atas Rp50 miliar) mencatat penghasilan berikut dalam laba komersial Tahun Pajak 2025: (1) dividen dari PT Mahkota Agro, anak usaha dalam negeri yang 90% sahamnya dimiliki, Rp5.000.000.000; (2) dividen dari PT Bank Sentosa Tbk (kepemilikan portofolio 0,5%) Rp120.000.000; (3) bagian laba sebagai sekutu CV Mahkota Logistik, yang modalnya tidak terbagi atas saham, Rp600.000.000; (4) bunga atas pinjaman kepada PT Mahkota Agro Rp900.000.000 (PPh Pasal 23 dipotong 15%); dan (5) keuntungan penjualan 10% saham PT Sinar Kemasan (tidak tercatat di bursa) kepada pihak independen Rp700.000.000. Jumlah koreksi fiskal negatif atas penghasilan yang bukan objek pajak dalam rekonsiliasi PT Mahkota adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.000.000.000", B: "Rp5.720.000.000", C: "Rp6.420.000.000", D: "Rp5.120.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "final-nonfinal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bukan objek: dividen dalam negeri yang diterima badan dalam negeri berapa pun persentase kepemilikannya (Rp5.000.000.000 + Rp120.000.000) dan bagian laba sekutu CV yang modalnya tidak terbagi atas saham (Rp600.000.000). Bunga pinjaman kepada afiliasi dan keuntungan penjualan saham non-bursa tetap objek tarif umum.",
        jejakHitung: [
          ["(1) Dividen anak usaha DN 90%", "Rp5.000.000.000 → bukan objek"],
          ["(2) Dividen portofolio Tbk 0,5%", "Rp120.000.000 → bukan objek"],
          ["(3) Bagian laba sekutu CV", "Rp600.000.000 → bukan objek"],
          ["(4) Bunga pinjaman ke afiliasi", "objek (kredit PPh 23)"],
          ["(5) Keuntungan saham non-bursa", "objek tarif umum"],
          ["Koreksi negatif", "Rp5.720.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai syarat lama kepemilikan ≥ 25%; sejak UU Cipta Kerja dividen dalam negeri bukan objek tanpa syarat kepemilikan, dan bagian laba sekutu CV juga bukan objek.",
          C: "Memasukkan keuntungan penjualan saham non-bursa; keuntungan itu objek tarif umum (PPh final 0,1% hanya untuk penjualan saham di bursa).",
          D: "Lupa bagian laba sekutu CV yang modalnya tidak terbagi atas saham (Pasal 4 ayat (3) huruf i)."
        },
        jebakan: "Syarat kepemilikan 25% untuk dividen sudah dihapus; jangan pula memperlakukan semua penghasilan dari afiliasi sebagai bukan objek."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (3) huruf f angka 1 butir b UU PPh (UU Cipta Kerja)", berlakuSejak: "2020-11-02" },
        { pasal: "Pasal 4 ayat (3) huruf i UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-119",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "Pasal 9 ayat (1) huruf f UU PPh (parafrase): Untuk menentukan besarnya penghasilan kena pajak bagi Wajib Pajak dalam negeri tidak boleh dikurangkan jumlah yang melebihi kewajaran yang dibayarkan kepada pemegang saham atau kepada pihak yang mempunyai hubungan istimewa sebagai imbalan sehubungan dengan pekerjaan yang dilakukan.",
      stem: "Tuan Rudi Hartanto memiliki 60% saham PT Rudi Makmur Abadi (badan dalam negeri, tarif umum, peredaran bruto di atas Rp50 miliar) dan menjabat direktur utama. Sepanjang 2025 perusahaan membebankan: (1) gaji Tuan Rudi Rp150.000.000 per bulan, sedangkan analisis remunerasi direktur utama perusahaan sejenis yang independen menunjukkan imbalan wajar Rp60.000.000 per bulan; (2) gaji Nyonya Sari, istri Tuan Rudi, Rp20.000.000 per bulan sebagai ‘penasihat’, padahal ia tidak melakukan pekerjaan apa pun bagi perusahaan; dan (3) gaji Bima, adik kandung Tuan Rudi, sebagai manajer pemasaran Rp35.000.000 per bulan, yang sesuai dengan imbalan wajar dan pekerjaannya nyata. Seluruh gaji dibayar tunai dan PPh Pasal 21-nya telah dipotong. Berdasarkan kutipan tersebut, koreksi fiskal positif dan tambahan PPh badan Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Koreksi Rp1.080.000.000; tambahan PPh Rp237.600.000",
        B: "Koreksi Rp2.040.000.000; tambahan PPh Rp448.800.000",
        C: "Koreksi Rp1.320.000.000; tambahan PPh Rp290.400.000",
        D: "Tidak ada koreksi, karena gaji dalam bentuk uang yang PPh Pasal 21-nya telah dipotong selalu dapat dibiayakan"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Imbalan kepada pemegang saham dan pihak yang berhubungan istimewa hanya dapat dibiayakan sebatas kewajaran. Kelebihan gaji Tuan Rudi dan seluruh gaji istri yang tidak bekerja (tidak ada pekerjaan, sehingga seluruhnya melebihi kewajaran dan bukan biaya 3M) dikoreksi positif; gaji adik yang wajar dan nyata tidak dikoreksi.",
        jejakHitung: [
          ["Kelebihan gaji Tuan Rudi = (150 − 60) juta × 12", "Rp1.080.000.000"],
          ["Gaji Nyonya Sari tanpa pekerjaan = 20 juta × 12", "Rp240.000.000"],
          ["Gaji Bima (wajar, pekerjaan nyata)", "tidak dikoreksi"],
          ["Koreksi positif", "Rp1.320.000.000"],
          ["Tambahan PPh = 22% × 1.320.000.000", "Rp290.400.000"]
        ],
        mengapaSalah: {
          A: "Lupa gaji istri yang tidak bekerja; pembayaran tanpa pekerjaan kepada pihak berhubungan istimewa seluruhnya tidak dapat dibiayakan.",
          B: "Mengoreksi seluruh gaji Tuan Rudi (Rp1,8 miliar); yang tidak dapat dibiayakan hanya bagian yang melebihi kewajaran.",
          D: "Pemotongan PPh 21 tidak membuat biaya otomatis dapat dibiayakan; Pasal 9 ayat (1) huruf f membatasi imbalan kepada pemegang saham dan pihak berhubungan istimewa."
        },
        jebakan: "Yang dikoreksi adalah kelebihan atas kewajaran, bukan seluruh gaji, dan hubungan keluarga sedarah/semenda satu derajat termasuk hubungan istimewa."
      },
      dasarHukum: [
        { pasal: "Pasal 9 ayat (1) huruf f UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 18 ayat (4) huruf a dan huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 6 ayat (1) huruf a UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-120",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Delima Pangan Sejahtera (produsen saus, tarif umum, peredaran bruto Rp140 miliar) dimiliki 100% oleh PT Aruna Capital, sedangkan distributor utamanya, PT Cendana Distribusi Nusantara, dimiliki 100% oleh PT Bayu Investama. Tidak ada hubungan kepemilikan langsung maupun tidak langsung dan tidak ada hubungan keluarga di antara para pemegang saham. Namun, Tuan Kevin Wirawan menjabat direktur utama di kedua perseroan dan menetapkan sendiri kebijakan harga jual di antara keduanya. Pada 2025 PT Delima menjual 50.000 karton saus kepada PT Cendana seharga Rp180.000 per karton (belum termasuk PPN), sedangkan analisis kesebandingan menunjukkan harga wajar transaksi independen yang sebanding Rp210.000 per karton. Bila DJP menerapkan Pasal 18 ayat (3) UU PPh, koreksi dan tambahan PPh badan PT Delima (sebelum sanksi) adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak ada koreksi, karena hubungan istimewa hanya timbul dari kepemilikan paling rendah 25% atau hubungan keluarga",
        B: "Koreksi positif Rp10.500.000.000; tambahan PPh Rp2.310.000.000",
        C: "Koreksi positif Rp1.500.000.000, tetapi tidak ada tambahan PPh karena laba yang bergeser tetap dipajaki pada PT Cendana yang juga badan dalam negeri",
        D: "Koreksi positif Rp1.500.000.000; tambahan PPh Rp330.000.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 18 ayat (4) huruf b: hubungan istimewa juga timbul karena penguasaan melalui manajemen atau teknologi walaupun tidak ada kepemilikan. Direktur utama yang sama dan menetapkan harga menunjukkan penguasaan, sehingga harga jual diuji kewajarannya dan selisihnya dikoreksi pada PT Delima.",
        jejakHitung: [
          ["Hubungan istimewa", "penguasaan manajemen (Ps. 18 ayat (4) huruf b)"],
          ["Koreksi = (210.000 − 180.000) × 50.000", "Rp1.500.000.000"],
          ["Tambahan PPh = 22% × 1.500.000.000", "Rp330.000.000"]
        ],
        mengapaSalah: {
          A: "Mengabaikan hubungan istimewa karena penguasaan manajemen atau teknologi, yang tidak mensyaratkan kepemilikan.",
          B: "Koreksi adalah selisih harga wajar dan harga transaksi, bukan seluruh nilai transaksi pada harga wajar.",
          C: "Pasal 18 ayat (3) diterapkan pada Wajib Pajak yang bertransaksi; pergeseran laba ke afiliasi dalam negeri tidak menghapus koreksi pada penjual."
        },
        jebakan: "Mencari angka kepemilikan 25% lalu berhenti; periksa juga penguasaan manajemen/teknologi dan hubungan keluarga."
      },
      dasarHukum: [
        { pasal: "Pasal 18 ayat (3) dan ayat (4) huruf b UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "PMK 172/2023", berlakuSejak: "2023-12-29" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B6-121",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Lintang Kreasi Media (badan dalam negeri, tarif umum, peredaran bruto setiap tahun di atas Rp50 miliar) membukukan rugi komersial Tahun Pajak 2024 Rp800.000.000. Di dalam rugi itu termasuk kerugian penjualan saham yang diperdagangkan di Bursa Efek Indonesia Rp500.000.000 (PPh final 0,1% dari nilai transaksi telah dipotong), pendapatan bunga deposito Rp100.000.000 (PPh final 20%), dan sanksi bunga STP Rp40.000.000. Tidak ada koreksi fiskal lain dan tidak ada sisa kerugian tahun-tahun sebelumnya. Untuk Tahun Pajak 2025, penghasilan neto fiskal sebelum kompensasi kerugian Rp1.000.000.000. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp44.000.000",
        B: "Rp162.800.000",
        C: "Rp140.800.000",
        D: "Rp220.000.000, karena kerugian 2024 timbul dari transaksi saham sehingga tidak dapat dikompensasikan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang dikompensasikan adalah rugi fiskal, bukan rugi komersial. Kerugian saham bursa berkaitan dengan transaksi yang dikenai PPh final sehingga dikeluarkan (koreksi positif), sanksi dikoreksi positif, dan bunga deposito final dikeluarkan (koreksi negatif). Rugi fiskal 2024 Rp360.000.000 dikompensasikan pada 2025.",
        jejakHitung: [
          ["Rugi komersial 2024", "(Rp800.000.000)"],
          ["+ Kerugian saham bursa (transaksi PPh final)", "Rp500.000.000"],
          ["+ Sanksi bunga STP", "Rp40.000.000"],
          ["− Bunga deposito (PPh final)", "(Rp100.000.000)"],
          ["Rugi fiskal 2024 (dapat dipakai s.d. 2029)", "(Rp360.000.000)"],
          ["PKP 2025 = 1.000.000.000 − 360.000.000", "Rp640.000.000"],
          ["PPh = 22% × 640.000.000", "Rp140.800.000"]
        ],
        mengapaSalah: {
          A: "Mengompensasikan rugi komersial Rp800.000.000 (PKP Rp200.000.000); yang dikompensasikan rugi fiskal setelah koreksi.",
          B: "Lupa mengeluarkan bunga deposito final dari rugi, sehingga rugi fiskal dihitung Rp260.000.000 (PKP Rp740.000.000).",
          D: "Rugi fiskal tetap dapat dikompensasikan; yang dikeluarkan hanya kerugian saham bursa yang terkait transaksi PPh final."
        },
        jebakan: "Rugi atas transaksi yang dikenai PPh final tidak membentuk rugi fiskal, dan penghasilan final yang ada di dalam rugi justru memperbesar rugi fiskal."
      },
      dasarHukum: [
        { pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" },
        { pasal: "Pasal 4 ayat (2) UU PPh; PP 41/1994 s.t.d.d. PP 14/1997 (penjualan saham di bursa)" },
        { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }
      ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-122",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nikel Pionir Sulawesi menikmati pengurangan PPh badan 100% (tax holiday PMK 130/2020 s.t.d.d. PMK 69/2024) dan merupakan satu-satunya entitas konstituen di Indonesia dari grup multinasional dengan peredaran bruto konsolidasi EUR 3 miliar; Indonesia memungut DMTT yang memenuhi syarat untuk Tahun Pajak 2025. Data GloBE Tahun Pajak 2025: laba GloBE Rp300.000.000.000; pajak tercakup yang disesuaikan Rp15.000.000.000; biaya gaji pegawai yang memenuhi syarat Rp50.000.000.000; dan rata-rata nilai tercatat aset berwujud yang memenuhi syarat Rp500.000.000.000. Tidak ada safe harbour yang terpenuhi dan tidak ada penyesuaian lain. Dengan persentase pengecualian penghasilan berbasis substansi (SBIE) masa transisi untuk tahun 2025, DMTT PT Nikel Pionir adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp30.000.000.000", B: "Rp25.720.000.000", C: "Rp27.250.000.000", D: "Rp38.580.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Top-up = (15% − ETR) × (laba GloBE − SBIE). ETR 5% karena tax holiday; SBIE 2025 memakai persentase transisi 9,6% atas gaji dan 7,6% atas nilai tercatat aset berwujud. DMTT memungut seluruh top-up di Indonesia.",
        jejakHitung: [
          ["ETR = 15 ÷ 300 (miliar)", "5%"],
          ["Persentase top-up = 15% − 5%", "10%"],
          ["SBIE = 9,6% × 50 M + 7,6% × 500 M", "Rp4,8 miliar + Rp38 miliar = Rp42.800.000.000"],
          ["Laba lebih = 300.000.000.000 − 42.800.000.000", "Rp257.200.000.000"],
          ["DMTT = 10% × 257.200.000.000", "Rp25.720.000.000"]
        ],
        mengapaSalah: {
          A: "Lupa mengurangkan SBIE (10% × Rp300 miliar).",
          C: "Memakai persentase SBIE permanen 5% untuk gaji dan aset, padahal 2025 masih masa transisi (9,6% dan 7,6%).",
          D: "Mengalikan 15% dengan laba lebih; yang dipakai selisih 15% − ETR."
        },
        jebakan: "Tiga kesalahan klasik top-up tax: lupa SBIE, salah persentase SBIE tahun berjalan, dan memakai 15% penuh."
      },
      dasarHukum: [
        {
          pasal: "PMK 136/2024 (pajak minimum global; Model Rules GloBE Pasal 5.3 dan 9.2)",
          berlakuSejak: "2025-01-01"
        },
        { pasal: "PMK 130/PMK.010/2020 s.t.d.d. PMK 69/2024 (tax holiday)" }
      ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B6-123",
      topik: "B6.9",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Bintang Fajar Plastindo (tahun buku kalender, tarif umum, peredaran bruto di atas Rp50 miliar) menyampaikan SPT Tahunan PPh Badan 2025 pada 20 April 2026. Penghasilan neto fiskal 2025 Rp5.000.000.000 tanpa kompensasi kerugian; di dalamnya termasuk keuntungan penjualan 15% saham PT Mitra Polimer (perusahaan tertutup, tidak tercatat di bursa) yang dimiliki sebagai investasi jangka panjang Rp1.500.000.000, sehingga keuntungan itu merupakan penghasilan tidak teratur. PPh terutang Rp1.100.000.000; kredit PPh Pasal 22 Rp150.000.000 dan PPh Pasal 23 Rp86.000.000; angsuran PPh Pasal 25 yang dibayar selama 2025 Rp600.000.000 (Masa Desember 2025 Rp50.000.000); dan PPh Pasal 29 Rp264.000.000. Tidak ada permohonan pengurangan angsuran. Angsuran PPh Pasal 25 untuk Masa Pajak Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp72.000.000", B: "Rp22.000.000", C: "Rp50.000.000", D: "Rp44.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Penghasilan tidak teratur dikeluarkan dari dasar angsuran: PPh dihitung ulang atas penghasilan teratur saja, dikurangi PPh 22 dan 23 (bukan PPh 25), lalu dibagi 12. Angsuran baru berlaku sejak bulan SPT disampaikan (20 April 2026), sehingga Mei 2026 memakai angsuran baru.",
        jejakHitung: [
          ["Penghasilan teratur = 5.000.000.000 − 1.500.000.000", "Rp3.500.000.000"],
          ["PPh atas penghasilan teratur = 22% × 3.500.000.000", "Rp770.000.000"],
          ["− PPh 22 dan PPh 23", "(Rp236.000.000)"],
          ["Dasar angsuran setahun", "Rp534.000.000"],
          ["Angsuran per bulan = 534.000.000 ÷ 12", "Rp44.500.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengeluarkan penghasilan tidak teratur: (1.100.000.000 − 236.000.000) ÷ 12.",
          B: "Ikut mengurangkan PPh 25 tahun lalu: (1.100.000.000 − 236.000.000 − 600.000.000) ÷ 12; dasar angsuran hanya dikurangi PPh 22, 23, dan 24.",
          C: "Angsuran Desember 2025 hanya berlaku untuk bulan-bulan sebelum SPT disampaikan (Januari–Maret 2026); Masa Mei 2026 memakai angsuran baru."
        },
        jebakan: "Keuntungan sekali terjadi yang dibiarkan masuk dasar angsuran membuat PPh 25 tahun berikutnya terlalu tinggi."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1), (2), dan (6) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Pasal 113 ayat (4) dan (5) serta Pasal 115 (sebelumnya diatur dalam KEP-537/PJ/2000)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-124",
      topik: "B6.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Cahaya Baja Perkasa (badan dalam negeri, tahun buku kalender, peredaran bruto Rp96 miliar, bukan perseroan terbuka) melaporkan laba komersial sebelum pajak Tahun Pajak 2025 Rp4.000.000.000. Pos yang perlu ditelaah: (1) PPh Pasal 26 atas jasa konsultan luar negeri yang ditanggung perusahaan tanpa klausul gross-up dan dicatat sebagai beban pajak Rp60.000.000; (2) makan siang bersama di kantin kantor untuk seluruh pegawai Rp180.000.000; (3) sumbangan untuk panitia perayaan hari jadi kota (bukan jenis sumbangan PP 93/2010) Rp50.000.000; (4) sanksi bunga STP Rp20.000.000; (5) kerugian selisih kurs belum terealisasi atas utang USD yang dijabarkan dengan kurs tengah BI akhir tahun secara taat asas Rp70.000.000; (6) beban penyisihan piutang ragu-ragu Rp90.000.000; (7) bunga deposito Rp150.000.000 (PPh final Rp30.000.000); (8) dividen dari PT anak dalam negeri (kepemilikan 30%) Rp400.000.000; serta (9) sewa gudang kepada pihak lain Rp300.000.000 (PPh final 10% Rp30.000.000) dengan penyusutan gudang yang disewakan Rp40.000.000. Tidak ada sisa kerugian. Kredit pajak: PPh Pasal 22 Rp120.000.000, PPh Pasal 23 Rp64.000.000, dan PPh Pasal 25 Rp420.000.000. PPh Pasal 29 Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp86.200.000", B: "Rp201.200.000", C: "Rp124.200.000", D: "Rp146.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Koreksi positif: PPh 26 yang ditanggung (PPh tidak dapat dibiayakan), sumbangan non-PP 93/2010, sanksi, penyisihan piutang (bukan bank), dan penyusutan gudang yang menghasilkan penghasilan final. Koreksi negatif: bunga deposito dan sewa (final) serta dividen dalam negeri (bukan objek). Natura makan siang dan selisih kurs yang diakui taat asas tidak dikoreksi. PPh final tidak dikreditkan.",
        jejakHitung: [
          ["Koreksi positif = 60 + 50 + 20 + 90 + 40 (juta)", "Rp260.000.000"],
          ["Koreksi negatif = 150 + 400 + 300 (juta)", "Rp850.000.000"],
          ["Natura makan siang; selisih kurs taat asas", "tidak dikoreksi"],
          ["Neto fiskal = 4.000.000.000 + 260.000.000 − 850.000.000", "Rp3.410.000.000"],
          ["PPh = 22% × 3.410.000.000", "Rp750.200.000"],
          ["Kredit = 120 + 64 + 420 (juta)", "Rp604.000.000"],
          ["PPh 29 = 750.200.000 − 604.000.000", "Rp146.200.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengkreditkan PPh final deposito dan sewa (Rp60.000.000); PPh final tidak dapat dikreditkan.",
          B: "Mengoreksi natura makan siang dan kerugian selisih kurs; sejak UU HPP natura dapat dibiayakan pemberi kerja, dan selisih kurs diakui mengikuti pembukuan yang taat asas.",
          C: "Lupa mengoreksi PPh 26 yang ditanggung tanpa gross-up dan penyusutan gudang yang menghasilkan penghasilan final."
        },
        jebakan: "Rekonsiliasi lengkap mencampur beda tetap, beda temporer, penghasilan final, dan bukan objek; tabelkan sebelum menjumlah."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) dan Pasal 9 ayat (1) UU PPh (UU HPP)", berlakuSejak: "2022-01-01" }, { pasal: "PP 93/2010 (sumbangan; berlaku sejak Tahun Pajak 2010, Pasal 10)", berlakuSejak: "2010-01-01" }, { pasal: "PP 94/2010", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 28 dan Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 240,
      verifikasi: "✅"
    },
    {
      id: "B6-125",
      topik: "B6.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Kenari Mebel Jepara (badan dalam negeri terdaftar 2012, tahun buku kalender, tidak memakai PPh final UMKM, bukan perseroan terbuka) pada 2025 membuka showroom berbentuk kantor cabang di Negara Valdoria. Showroom itu belum menghasilkan penjualan pada 2025 dan biaya operasionalnya menimbulkan rugi usaha Rp300.000.000. Peredaran bruto Tahun Pajak 2025 Rp30.000.000.000, terdiri atas penjualan mebel di dalam negeri Rp24.000.000.000 serta penghasilan yang dikenai PPh final dan yang bukan objek pajak Rp6.000.000.000. Penghasilan neto fiskal dari kegiatan dalam negeri sebelum kompensasi kerugian Rp2.300.000.000, sehingga laba gabungan dalam laporan keuangan setelah rugi showroom menjadi Rp2.000.000.000. Sisa kerugian fiskal dalam negeri Tahun Pajak 2022 yang belum dikompensasikan Rp500.000.000. PPh badan terutang Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp364.320.000", B: "Rp303.600.000", C: "Rp396.000.000", D: "Rp356.400.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kerugian usaha di luar negeri tidak dapat dikompensasikan dengan penghasilan dalam negeri (PMK 192/PMK.03/2018), sehingga rugi showroom Valdoria tidak mengurangi penghasilan neto. Rugi fiskal dalam negeri 2022 masih dalam jangka 5 tahun (2023–2027) dan dikompensasikan. Pasal 31E lalu diterapkan dengan peredaran bruto yang memuat penghasilan final dan bukan objek: Rp30 miliar ≤ Rp50 miliar, proporsi 4,8/30 = 16%.",
        jejakHitung: [
          ["Rugi showroom Valdoria (usaha di luar negeri)", "tidak digabung; tidak mengurangi penghasilan dalam negeri"],
          ["Rugi 2022 (jangka kompensasi 2023–2027)", "dikompensasikan Rp500.000.000"],
          ["PKP = 2.300.000.000 − 500.000.000", "Rp1.800.000.000"],
          ["PKP berfasilitas = 4,8 ÷ 30 × 1.800.000.000", "Rp288.000.000"],
          ["11% × 288.000.000", "Rp31.680.000"],
          ["22% × 1.512.000.000", "Rp332.640.000"],
          ["PPh terutang", "Rp364.320.000"]
        ],
        mengapaSalah: {
          B: "Mengurangkan rugi showroom Valdoria dari penghasilan dalam negeri (PKP Rp1,5 miliar); kerugian usaha di luar negeri tidak boleh digabung.",
          C: "Tidak menerapkan Pasal 31E (22% × Rp1,8 miliar) padahal peredaran bruto ≤ Rp50 miliar dan fasilitas bersifat wajib.",
          D: "Menghitung proporsi Pasal 31E dengan penjualan mebel saja (4,8 ÷ 24 = 20%); peredaran bruto Pasal 31E mencakup penghasilan final dan bukan objek."
        },
        jebakan: "Dua jenis rugi, dua perlakuan: rugi fiskal dalam negeri tahun lalu dikompensasikan, sedangkan rugi usaha luar negeri tahun berjalan tidak boleh mengurangi penghasilan dalam negeri."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 192/PMK.03/2018 (kerugian usaha di luar negeri)", berlakuSejak: "2018-12-31" }, { pasal: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "SE-02/PJ/2015", berlakuSejak: "2015-01-09" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B6-126",
      topik: "B6.4",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Penjelasan UU PPh Pasal 11 ayat (3) (dikutip try out): Penyusutan dimulai pada bulan dilakukannya pengeluaran atau pada bulan selesainya pengerjaan suatu harta sehingga penyusutan pada tahun pertama dihitung secara prorata.",
      stem: "PT Ortax Services membeli beberapa unit komputer pada 5 Oktober 2026 dengan harga perolehan seluruhnya sebesar Rp120.000.000. Komputer tersebut termasuk dalam Harta Berwujud Bukan Bangunan Kelompok 1. PT Ortax Services menggunakan metode saldo menurun untuk menghitung penyusutan fiskal. Berapakah beban penyusutan fiskal atas komputer tersebut untuk Tahun Pajak 2026?",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Rp60.000.000,00", B: "Rp10.000.000,00", C: "Rp15.000.000,00", D: "Rp7.500.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Kelompok 1 bermasa manfaat 4 tahun dengan tarif saldo menurun 50% (PMK 72/2023 Ps. 2 ayat (3)). Penyusutan dimulai pada bulan pengeluaran dan tahun pertama dihitung prorata, sehingga bulan penyusutan 2026 adalah Oktober–Desember (3 bulan).",
        jejakHitung: [ [ "Tarif saldo menurun Kelompok 1", "50%" ], [ "Bulan penyusutan 2026 (Oktober–Desember)", "3 bulan" ], [ "Penyusutan = 50% × Rp120.000.000 × 3/12", "Rp15.000.000" ] ],
        mengapaSalah: { A: "Menyusutkan setahun penuh tanpa prorata.", B: "Tidak menghitung bulan Oktober sebagai bulan penyusutan (hanya 2 bulan).", D: "Memakai tarif garis lurus Kelompok 1 (25%), padahal metode yang dipakai saldo menurun." },
        jebakan: "Tarif saldo menurun = 2 × tarif garis lurus untuk kelompok yang sama."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 11 ayat (2) dan (3) beserta Penjelasan Pasal 11 ayat (3) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 72/2023 Pasal 2 ayat (3)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 3, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-127",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Ibu Rina, seorang dokter, mendirikan perseroan perorangan PT Ortax Klinik Sehat dan mendaftarkannya pada Juni 2026. Perseroan menyerahkan jasa pemeriksaan kesehatan yang dilakukan Ibu Rina sendiri, dengan peredaran bruto diperkirakan Rp1,2 miliar setahun. Ia mendengar bahwa perseroan perorangan masih boleh memakai PPh final sampai akhir 2026. Analisis yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak dapat: sejak PP 20/2026 berlaku, seluruh perseroan perorangan wajib memakai tarif umum Pasal 17", B: "Tidak dapat: perseroan perorangan yang didirikan ahli untuk jasa sejenis pekerjaan bebas dikecualikan, peralihan hanya bagi yang telah memakainya", C: "Dapat memakai PPh final 0,5% sampai akhir Tahun Pajak 2026 berdasarkan ketentuan peralihan PP 20/2026, lalu beralih ke tarif umum mulai 2027", D: "Dapat memakai PPh final 0,5% karena perseroan perorangan termasuk WP peredaran bruto tertentu dan omzetnya di bawah Rp4,8 miliar setahun" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Perseroan perorangan masih dapat memakai PPh final 0,5%, kecuali yang didirikan oleh orang pribadi berkeahlian khusus yang menyerahkan jasa sejenis jasa pekerjaan bebas, misalnya dokter (PP 55/2022 s.t.d.d. PP 20/2026 Ps. 57 ayat (2) huruf b jo. Ps. 56 ayat (4)). Peralihan sampai akhir Tahun Pajak 2026 hanya berlaku bagi perseroan perorangan tersebut yang sudah dikenai PPh final berdasarkan PP 55/2022. PT Ortax Klinik Sehat baru terdaftar Juni 2026, setelah PP 20/2026 berlaku 22 April 2026, sehingga langsung memakai tarif umum.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tidak semua perseroan perorangan wajib tarif umum; perseroan perorangan selain yang didirikan ahli untuk jasa sejenis pekerjaan bebas masih dapat memakai PPh final 0,5% (Ps. 57 ayat (1)).",
          C: "Ketentuan peralihan sampai akhir 2026 hanya bagi perseroan perorangan dimaksud yang sudah memakai PPh final sebelum PP 20/2026 berlaku; perseroan ini baru terdaftar Juni 2026.",
          D: "Omzet di bawah Rp4,8 miliar tidak cukup; perseroan perorangan yang didirikan dokter untuk jasa sejenis pekerjaan bebas dikecualikan dari PPh final (Ps. 57 ayat (2) huruf b)."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 55/2022 s.t.d.d. PP 20/2026 Pasal 56 ayat (4)."
      },
      dasarHukum: [{ pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 56 ayat (4)", berlakuSejak: "2026-04-22" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 57 ayat (1) huruf b dan ayat (2) huruf b", berlakuSejak: "2026-04-22" }, { pasal: "PP 20/2026 Pasal II angka 1 huruf f (ketentuan peralihan)", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 5, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-128",
      topik: "B6.2",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "UU PPh Pasal 4 ayat (3) huruf f angka 1 (dikutip try out): f. dividen atau penghasilan lain dengan ketentuan sebagai berikut: 1. dividen yang berasal dari dalam negeri yang diterima atau diperoleh Wajib Pajak: a) orang pribadi dalam negeri sepanjang dividen tersebut diinvestasikan di wilayah Negara Kesatuan Republik Indonesia dalam jangka waktu tertentu; dan/atau b) badan dalam negeri;",
      stem: "PT Ortax Manufaktur (Wajib Pajak badan dalam negeri) membukukan laba komersial sebelum pajak Tahun Pajak 2026 sebesar Rp1.200.000.000. Di dalamnya terdapat penghasilan sewa bangunan gudang Rp80.000.000 yang telah dipotong PPh final, dividen dari PT Ortax Services (Wajib Pajak badan dalam negeri) Rp45.000.000, dan keuntungan selisih kurs Rp25.000.000. Tidak terdapat koreksi fiskal lainnya, termasuk atas biaya. Penghasilan neto fiskal yang dikenai tarif umum adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.050.000.000,00", B: "Rp1.155.000.000,00", C: "Rp1.075.000.000,00", D: "Rp1.120.000.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Penghasilan sewa bangunan dikenai PPh final sehingga dikeluarkan dari penghasilan yang dikenai tarif umum. Dividen dalam negeri yang diterima WP badan dalam negeri dikecualikan dari objek pajak tanpa syarat kepemilikan, sehingga juga dikeluarkan. Keuntungan selisih kurs merupakan penghasilan yang dikenai tarif umum dan tetap.",
        jejakHitung: [ [ "Laba komersial", "Rp1.200.000.000" ], [ "Koreksi negatif sewa bangunan (final)", "(Rp80.000.000)" ], [ "Koreksi negatif dividen dalam negeri (bukan objek)", "(Rp45.000.000)" ], [ "Keuntungan selisih kurs", "tetap (tidak dikoreksi)" ], [ "Penghasilan neto fiskal", "Rp1.075.000.000" ] ],
        mengapaSalah: { A: "Ikut mengeluarkan keuntungan selisih kurs, padahal itu objek PPh tarif umum.", B: "Hanya mengeluarkan dividen dan lupa mengeluarkan sewa bangunan yang telah dikenai PPh final.", D: "Hanya mengeluarkan sewa bangunan dan lupa bahwa dividen dalam negeri ke badan dalam negeri dikecualikan dari objek." },
        jebakan: "Pola: keluarkan penghasilan final (sewa tanah/bangunan) dan bukan objek (dividen DN ke badan DN); selisih kurs tetap."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (1), ayat (2) huruf d, dan ayat (3) huruf f angka 1 s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "UU PPh Pasal 6 ayat (1) dan Pasal 17", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 7, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-129",
      topik: "B6.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Penerimaan berikut yang dikecualikan dari objek PPh bagi penerimanya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bagian laba yang diterima anggota perseroan komanditer yang modalnya tidak terbagi atas saham", B: "Hibah berupa kendaraan yang diterima PT dari orang pribadi pemegang saham mayoritasnya", C: "Imbalan bunga yang diterima PT dari DJP atas keterlambatan restitusi", D: "Keuntungan selisih kurs yang diperoleh PT atas pelunasan utang valuta asing" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bagian laba yang diterima anggota dari perseroan komanditer yang modalnya tidak terbagi atas saham dikecualikan dari objek pajak (UU PPh Pasal 4 ayat (3) huruf i). Hibah kepada PT dari pemegang sahamnya, imbalan bunga dari DJP, dan keuntungan selisih kurs tetap merupakan objek pajak.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pengecualian harta hibahan (Pasal 4 ayat (3) huruf a angka 2) hanya untuk keluarga sedarah lurus satu derajat, badan keagamaan, badan pendidikan, badan sosial termasuk yayasan, koperasi, atau orang pribadi usaha mikro dan kecil, dan sepanjang tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan. PT bukan penerima yang disebut dan pemberinya pemegang saham mayoritas, sehingga hibah itu objek pajak.",
          C: "Imbalan bunga menurut UU KUP disebut tegas sebagai objek pajak (Pasal 4 ayat (1) huruf r).",
          D: "Keuntungan selisih kurs mata uang asing adalah objek pajak (Pasal 4 ayat (1) huruf l)."
        },
        jebakan: "Pengecualian Pasal 4 ayat (3) huruf i berlaku untuk bagian laba anggota koperasi, CV yang modalnya tidak terbagi atas saham, persekutuan, perkumpulan, firma, kongsi, dan pemegang unit penyertaan KIK; dividen dari PT diatur tersendiri di huruf f."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 4 ayat (3) huruf a angka 2 dan huruf i s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "UU PPh Pasal 4 ayat (1) huruf l dan huruf r s.t.d.t.d. UU 6/2023", berlakuSejak: null }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 10, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-130",
      topik: "B6.9",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "PER-11/PJ/2025 Pasal 113 ayat (5) (dikutip try out): Tidak termasuk dalam penghasilan teratur sebagaimana dimaksud pada ayat (4) berupa: a. keuntungan selisih kurs dari utang atau piutang dalam mata uang asing sepanjang bukan merupakan penghasilan dari kegiatan usaha pokok; b. keuntungan dari pengalihan harta (capital gain) sepanjang bukan merupakan penghasilan dari kegiatan usaha pokok, dan ...",
      stem: "Berdasarkan SPT Tahunan PPh Badan Tahun Pajak 2025, PT Ortax Manufaktur (peredaran bruto Rp120.000.000.000) memiliki data sebagai berikut: 1. penghasilan neto fiskal sebesar Rp3.200.000.000 yang di dalamnya termasuk keuntungan selisih kurs dari utang dalam mata uang asing sebesar Rp200.000.000 yang bukan merupakan penghasilan dari kegiatan usaha pokok; 2. tidak terdapat sisa kompensasi kerugian fiskal; 3. kredit pajak berupa PPh Pasal 22 dan PPh Pasal 23 yang dapat dikreditkan sebesar Rp180.000.000; 4. tarif PPh Badan yang berlaku sebesar 22%. Berdasarkan ketentuan penghitungan angsuran PPh Pasal 25, berapakah besarnya angsuran PPh Pasal 25 per bulan untuk Tahun Pajak 2026?",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Rp43.666.667,00", B: "Rp40.000.000,00", C: "Rp55.000.000,00", D: "Rp58.666.667,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Keuntungan selisih kurs dari utang dalam mata uang asing yang bukan penghasilan usaha pokok tidak termasuk penghasilan teratur, sehingga dikeluarkan dari dasar penghitungan angsuran (PER-11/PJ/2025 Ps. 113 ayat (5) huruf a, Ps. 115). Fasilitas Ps. 31E tidak relevan karena peredaran bruto Rp120 miliar.",
        jejakHitung: [ [ "Dasar = Rp3.200.000.000 − Rp200.000.000", "Rp3.000.000.000" ], [ "PPh = 22% × Rp3.000.000.000", "Rp660.000.000" ], [ "Dikurangi kredit PPh 22 dan 23", "Rp480.000.000" ], [ "Angsuran = Rp480.000.000 ÷ 12", "Rp40.000.000" ] ],
        mengapaSalah: { A: "Tidak mengeluarkan keuntungan selisih kurs (penghasilan tidak teratur) dari dasar penghitungan.", C: "Mengeluarkan penghasilan tidak teratur, tetapi lupa mengurangkan kredit PPh 22 dan PPh 23.", D: "Tidak mengeluarkan penghasilan tidak teratur dan tidak mengurangkan kredit pajak." },
        jebakan: "Selisih kurs dari utang/piutang valas (bukan usaha pokok) = penghasilan tidak teratur."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 25 ayat (1) dan ayat (6) huruf b s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Pasal 113 ayat (5) huruf a dan Pasal 115", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 11, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-131",
      topik: "B6.7",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Ortax Kreasi, perseroan terbatas dengan beberapa pemegang saham (bukan perseroan perorangan), terdaftar sebagai WP pada 2023 dan sejak itu memakai PPh final 0,5% dengan peredaran bruto sekitar Rp3 miliar per tahun. Untuk Tahun Pajak 2026, perlakuan PPh-nya adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Tetap PPh final 0,5% karena peredaran brutonya belum melebihi Rp4,8 miliar setahun", B: "PPh final 0,5% sampai akhir Tahun Pajak 2026 berdasarkan ketentuan peralihan PP 20/2026", C: "Tarif umum Pasal 17 ayat (1) huruf b dengan fasilitas Pasal 31E karena jangka waktunya telah berakhir", D: "Tarif umum Pasal 17 ayat (1) huruf b tanpa fasilitas Pasal 31E karena sebelumnya pernah memakai PPh final" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setelah PP 20/2026 (berlaku 22 April 2026), WP yang dapat dikenai PPh final 0,5% hanya WP orang pribadi, perseroan perorangan yang didirikan oleh 1 orang, dan koperasi. PT lain yang jangka waktunya belum berakhir hanya melanjutkan sampai jangka waktu menurut PP 55/2022 berakhir, yaitu 3 Tahun Pajak sejak tahun terdaftar (2023–2025). Mulai 2026 PT Ortax Kreasi dikenai tarif Ps. 17 ayat (1) huruf b (22%) dengan fasilitas Ps. 31E karena peredaran brutonya tidak melebihi Rp50 miliar; dengan bruto sekitar Rp3 miliar seluruh PKP-nya memperoleh pengurangan 50% × 22%.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Batas peredaran bruto bukan satu-satunya syarat; jangka waktu PPh final PT (3 Tahun Pajak, 2023–2025) telah berakhir.",
          B: "Peralihan PP 20/2026 bagi PT hanya sampai jangka waktu menurut PP 55/2022 berakhir, yaitu akhir 2025, bukan akhir 2026.",
          D: "Pernah memakai PPh final tidak menghapus hak atas fasilitas Pasal 31E bila syarat peredaran bruto terpenuhi."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 55/2022 s.t.d.d. PP 20/2026 Pasal 57 ayat (1) dan Pasal II angka 1 huruf a, e, dan f."
      },
      dasarHukum: [{ pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 57 ayat (1) dan Pasal II angka 1 huruf a, e, dan f", berlakuSejak: "2026-04-22" }, { pasal: "PP 55/2022 Pasal 59 ayat (1) dan ayat (2) huruf a (sebelum dihapus PP 20/2026)", berlakuSejak: null }, { pasal: "UU PPh Pasal 17 ayat (1) huruf b dan Pasal 31E", berlakuSejak: null }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 15, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-132",
      topik: "B6.3",
      tingkat: [ "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Ortax Properti memakai lantai 1–5 gedungnya sebagai kantor dan menyewakan lantai 6–10 kepada pihak lain dengan PPh final. Pada 2026: pendapatan sewa Rp1.000.000.000 dicatat sebagai pendapatan lain-lain; penyusutan bagian gedung yang disewakan Rp150.000.000 dan biaya pemeliharaan lantai yang disewakan Rp50.000.000 dicatat dalam beban usaha; biaya listrik kantor sendiri Rp80.000.000 juga dicatat dalam beban usaha. Koreksi fiskal yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "hanya pendapatan sewa yang dikoreksi negatif Rp1.000.000.000,00; seluruh biaya tetap dibebankan karena gedung dipakai untuk usaha", B: "pendapatan sewa dikoreksi negatif Rp1.000.000.000,00 dan seluruh biaya Rp280.000.000,00 dikoreksi positif", C: "pendapatan sewa dikoreksi negatif Rp1.000.000.000,00 dan biaya terkait sewa Rp200.000.000,00 dikoreksi positif; biaya listrik kantor tidak dikoreksi", D: "tidak ada koreksi karena PPh final telah dipotong penyewa sehingga pendapatan dan biayanya tetap digabung" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Biaya yang boleh dikurangkan hanyalah biaya untuk mendapatkan, menagih, dan memelihara penghasilan yang dikenai pajak dengan tarif umum; penghasilan yang dikenai PPh final tidak digabung dengan penghasilan lain. Karena itu pendapatan sewa final dikoreksi negatif, dan penyusutan serta pemeliharaan bagian yang disewakan (Rp150.000.000 + Rp50.000.000) dikoreksi positif. Listrik kantor sendiri berkaitan dengan usaha tarif umum sehingga tidak dikoreksi.",
        jejakHitung: [],
        mengapaSalah: { A: "Biaya untuk penghasilan final (penyusutan dan pemeliharaan lantai yang disewakan) tidak boleh dibebankan (PP 94/2010 Ps. 13).", B: "Biaya listrik kantor sendiri berkaitan dengan penghasilan tarif umum sehingga tidak dikoreksi.", D: "Penghasilan final tidak digabung dengan penghasilan tarif umum; pendapatan dan biayanya harus dipisahkan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 4 ayat (2) huruf d, Pasal 6 ayat (1) huruf a, dan Penjelasan Pasal 4 ayat (1)."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (2) huruf d, Pasal 6 ayat (1) huruf a, dan Penjelasan Pasal 4 ayat (1)", berlakuSejak: null },
        { pasal: "PP 94/2010 Pasal 13 huruf a angka 2", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 17, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-133",
      topik: "B6.5",
      tingkat: [ "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      kutipan: "UU PPh Pasal 6 ayat (2) (dikutip try out): Apabila penghasilan bruto setelah pengurangan sebagaimana dimaksud pada ayat (1) didapat kerugian, kerugian tersebut dikompensasikan dengan penghasilan mulai tahun pajak berikutnya berturut-turut sampai dengan 5 (lima) tahun.",
      stem: "Tuan Budi (Wajib Pajak orang pribadi dalam negeri yang menjalankan usaha) dan PT Ortax Agro Lestari (Wajib Pajak badan dalam negeri dengan 3 orang direksi) sama-sama memiliki penghasilan neto fiskal dan sisa kerugian fiskal Tahun Pajak 2022 yang masih dapat dikompensasikan. Pernyataan yang tepat mengenai pengurangan dalam menghitung Penghasilan Kena Pajak Tahun Pajak 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tuan Budi dapat mengurangkan PTKP sesuai keadaan awal tahun pajak, sedangkan PT Ortax Agro Lestari tidak memperoleh PTKP tetapi dapat mengurangkan kompensasi kerugian fiskal", B: "PT Ortax Agro Lestari dapat mengurangkan PTKP sebesar PTKP ketiga direksinya dan kompensasi kerugian fiskal, sedangkan Tuan Budi hanya dapat mengurangkan kompensasi kerugian fiskal tanpa PTKP", C: "Keduanya tidak dapat mengurangkan PTKP karena sama-sama menjalankan usaha dengan peredaran bruto di atas Rp500.000.000,00", D: "Keduanya dapat mengurangkan PTKP, tetapi hanya Tuan Budi yang dapat mengurangkan kompensasi kerugian fiskal" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PTKP diberikan kepada orang pribadi sebagai Wajib Pajak dalam negeri dan ditentukan menurut keadaan awal tahun pajak (UU PPh Ps. 6 ayat (3), Ps. 7 ayat (1)). Badan tidak memperoleh PTKP; pengurang yang tersedia baginya adalah kompensasi kerugian fiskal paling lama 5 tahun (Ps. 6 ayat (2)). Jumlah direksi, peredaran bruto, atau tingkat penghasilan tidak menimbulkan hak PTKP bagi badan.",
        jejakHitung: [],
        mengapaSalah: { B: "Badan tidak memperoleh PTKP berapa pun jumlah direksinya (PTKP direksi diperhitungkan dalam PPh pribadi masing-masing), sedangkan Tuan Budi sebagai orang pribadi dalam negeri justru berhak atas PTKP.", C: "PTKP orang pribadi tidak bergantung pada besarnya peredaran bruto, dan badan tetap tidak berhak PTKP.", D: "Kompensasi kerugian juga berlaku bagi Wajib Pajak badan (Ps. 6 ayat (2)), dan badan tidak memperoleh PTKP." },
        jebakan: "Pengurang: orang pribadi → PTKP (dan kompensasi kerugian bila usaha); badan → kompensasi kerugian saja."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 6 ayat (2) dan (3), Pasal 7 ayat (1), Pasal 17 ayat (1) huruf b s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 21, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-134",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "UU PPh Pasal 9 ayat (1) huruf k (dikutip try out): Untuk menentukan besarnya Penghasilan Kena Pajak bagi Wajib Pajak dalam negeri dan bentuk usaha tetap tidak boleh dikurangkan: ... k. sanksi administrasi berupa bunga, denda, dan kenaikan serta sanksi pidana berupa denda yang berkenaan dengan pelaksanaan ketentuan peraturan perundang-undangan di bidang perpajakan.",
      stem: "PT Ortax Manufaktur memperoleh laba komersial sebelum pajak tahun 2026 sebesar Rp3.000.000.000. Informasi tambahan: 1. sanksi bunga dalam STP PPh Rp25.000.000; 2. sumbangan kepada warga korban banjir di sekitar pabrik yang tidak memenuhi syarat sumbangan yang dapat dikurangkan menurut PP 93/2010 Rp45.000.000; 3. penghasilan sewa gedung yang telah dikenai PPh final Rp120.000.000; 4. penyusutan komersial Rp200.000.000; 5. penyusutan fiskal Rp170.000.000. Penghasilan neto fiskal sebelum kompensasi kerugian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.935.000.000,00", B: "Rp2.980.000.000,00", C: "Rp3.100.000.000,00", D: "Rp2.920.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Sanksi bunga dalam STP dan sumbangan yang tidak memenuhi syarat PP 93/2010 tidak boleh dikurangkan (koreksi positif). Penghasilan sewa gedung yang telah dikenai PPh final dikeluarkan (koreksi negatif). Penyusutan fiskal lebih kecil Rp30.000.000 daripada penyusutan komersial (koreksi positif).",
        jejakHitung: [
          ["Laba komersial", "Rp3.000.000.000"],
          ["Koreksi positif: Rp25.000.000 + Rp45.000.000 + (Rp200.000.000 − Rp170.000.000)", "Rp100.000.000"],
          ["Koreksi negatif: sewa gedung final", "(Rp120.000.000)"],
          ["Penghasilan neto fiskal", "Rp2.980.000.000"]
        ],
        mengapaSalah: {
          A: "Menganggap sumbangan korban banjir boleh dikurangkan sehingga tidak dikoreksi.",
          C: "Tidak mengeluarkan penghasilan sewa gedung yang telah dikenai PPh final.",
          D: "Membalik arah koreksi selisih penyusutan (dikoreksi negatif Rp30.000.000)."
        },
        jebakan: "Selisih penyusutan: fiskal < komersial → koreksi positif; fiskal > komersial → koreksi negatif."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 4 ayat (2) huruf d, Pasal 9 ayat (1) huruf g dan k, Pasal 11 s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PP 93/2010 (sumbangan yang dapat dikurangkan; berlaku sejak Tahun Pajak 2010, Pasal 10)", berlakuSejak: "2010-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 30, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-135",
      topik: "B6.10",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "UU PPh Pasal 18 ayat (4) huruf a (dikutip try out): a. Wajib Pajak mempunyai penyertaan modal langsung atau tidak langsung paling rendah 25% (dua puluh lima persen) pada Wajib Pajak lain; hubungan antara Wajib Pajak dengan penyertaan paling rendah 25% (dua puluh lima persen) pada dua Wajib Pajak atau lebih; atau hubungan di antara dua Wajib Pajak atau lebih yang disebut terakhir;",
      stem: "Nyonya Melati memiliki 30% saham PT Ortax Manufaktur dan 25% saham PT Ortax Services. Ia tidak menjabat sebagai direksi atau komisaris di kedua perseroan, dan di antara PT Ortax Manufaktur dan PT Ortax Services tidak terdapat kepemilikan saham satu sama lain maupun hubungan lain. Menurut Pasal 18 ayat (4) UU PPh, hubungan antara PT Ortax Manufaktur dan PT Ortax Services adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terdapat hubungan istimewa karena tidak ada kepemilikan saham langsung di antara kedua perseroan", B: "Tidak terdapat hubungan istimewa karena penyertaan Nyonya Melati di PT Ortax Services tidak melebihi 25%", C: "Terdapat hubungan istimewa hanya bila Nyonya Melati juga menguasai manajemen kedua perseroan", D: "Terdapat hubungan istimewa karena keduanya sama-sama dimiliki paling rendah 25% oleh pihak yang sama" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hubungan istimewa karena kepemilikan dianggap ada bukan hanya antara pemegang saham dan perseroan dengan penyertaan paling rendah 25%, tetapi juga di antara dua Wajib Pajak atau lebih yang sama-sama dimiliki paling rendah 25% oleh Wajib Pajak yang sama. Ambang yang dipakai \"paling rendah 25%\", sehingga 25% sudah memenuhi; PT Ortax Manufaktur dan PT Ortax Services mempunyai hubungan istimewa meskipun tidak saling memiliki saham dan tidak ada penguasaan manajemen.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mengabaikan hubungan di antara dua Wajib Pajak yang sama-sama dimiliki paling rendah 25% oleh pihak yang sama.",
          B: "Ambangnya paling rendah 25%, sehingga kepemilikan tepat 25% sudah memenuhi.",
          C: "Unsur kepemilikan sudah cukup; penguasaan manajemen tidak disyaratkan."
        },
        jebakan: "Pola \"sister company\": dua perusahaan yang masing-masing dimiliki ≥ 25% oleh pihak yang sama mempunyai hubungan istimewa."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 18 ayat (4) huruf a beserta Penjelasan s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PMK 172/2023 Pasal 2 ayat (4)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 36, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-136",
      topik: "B6.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Manufaktur (WP badan dalam negeri) pada 2026 menyelenggarakan pemagangan bagi siswa SMK berbasis kompetensi tertentu. Sebelum kegiatan dimulai, perusahaan telah menyampaikan pemberitahuan melalui sistem OSS dengan melampirkan perjanjian kerja sama dan surat keterangan fiskal yang masih berlaku, dan penghasilan neto fiskal 2026 tetap positif setelah memperhitungkan tambahan pengurangan. Biaya yang dikeluarkan: penyediaan fasilitas fisik khusus berupa tempat pelatihan Rp60.000.000; honorarium instruktur Rp25.000.000; barang/bahan praktik Rp15.000.000; jamuan makan pada acara pembukaan Rp20.000.000; dan honorarium Rp10.000.000 bagi seorang siswa magang yang merupakan anak kandung direktur utama. Besarnya tambahan pengurangan penghasilan bruto (di luar pembebanan 100% biaya) yang paling tinggi dapat dimanfaatkan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp130.000.000,00", B: "Rp100.000.000,00", C: "Rp110.000.000,00", D: "Rp200.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengurangan penghasilan bruto paling tinggi 200% atas biaya vokasi terdiri atas pembebanan 100% biaya dan tambahan pengurangan paling tinggi 100%. Tambahan hanya diberikan atas jenis biaya dalam PMK 128/PMK.010/2019 Ps. 4 (fasilitas fisik khusus, instruktur, barang/bahan, pemagangan); jamuan tidak termasuk, dan honorarium bagi peserta yang memiliki hubungan keluarga sedarah garis lurus satu derajat dengan direksi tidak mendapat tambahan (Ps. 5 huruf e). Syarat pemanfaatan terpenuhi (pemberitahuan OSS, perjanjian kerja sama, surat keterangan fiskal, tidak menyebabkan rugi fiskal).",
        jejakHitung: [
          ["Biaya berhak tambahan = Rp60.000.000 + Rp25.000.000 + Rp15.000.000", "Rp100.000.000"],
          ["Dikeluarkan: jamuan dan honorarium anak direktur utama", "Rp30.000.000"],
          ["Tambahan pengurangan paling tinggi = 100% × Rp100.000.000", "Rp100.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut memberikan tambahan atas jamuan dan honorarium anak direktur utama.",
          C: "Ikut memberikan tambahan atas honorarium anak kandung direktur utama, padahal dikecualikan (Ps. 5 huruf e).",
          D: "Menghitung pengurangan total 200% (pembebanan 100% plus tambahan 100%), padahal yang ditanya hanya tambahan di luar pembebanan 100%."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29B ayat (1)."
      },
      dasarHukum: [{ pasal: "PP 94/2010 s.t.d.d. PP 45/2019 Pasal 29B ayat (1)", berlakuSejak: "2019-06-26" }, { pasal: "PMK 128/PMK.010/2019 Pasal 2 ayat (2) dan (3), Pasal 4, Pasal 5 huruf e dan g, Pasal 7 ayat (1)", berlakuSejak: "2019-09-09" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Kunci B sudah dicocokkan ke PMK 128/PMK.010/2019 (Pasal 4: jenis biaya berhak tambahan; Pasal 5 huruf e: honorarium peserta yang berhubungan keluarga dengan direksi dikecualikan; jamuan tidak termasuk Pasal 4). Yang belum pasti hanya kesetiaan pada try out asli: rincian biaya hilang dari stem sumber sehingga pasangan jenis biaya dan angka disusun penyunting, opsi B dan C bercampur di sumber (C ditetapkan Rp110.000.000,00), dan pengecoh disusun dari angka. Perlu konfirmasi dari rekaman asli.",
      sumber: { set: "TO-B-2026-11", no: 43, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-137",
      topik: "B6.8",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Ortax Agrindo, penerima fasilitas tax allowance, menanamkan modal dalam aktiva tetap berwujud untuk kegiatan usaha utama sebesar Rp10.000.000.000, terdiri atas tanah Rp2.000.000.000, bangunan Rp5.000.000.000, dan mesin Rp3.000.000.000. Besarnya pengurangan penghasilan neto per tahun dari fasilitas tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp400.000.000,00 selama 6 tahun", B: "Rp500.000.000,00 selama 6 tahun", C: "Rp1.000.000.000,00 selama 6 tahun", D: "Rp3.000.000.000,00 sekaligus pada tahun pertama" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pengurangan penghasilan neto sebesar 30% dari jumlah nilai penanaman modal berupa aktiva tetap berwujud termasuk tanah, dibebankan selama 6 tahun masing-masing 5% (PP 78/2019 Ps. 3 ayat (1) huruf a).",
        jejakHitung: [ [ "Nilai investasi termasuk tanah", "Rp10.000.000.000" ], [ "Pengurangan per tahun = 5% × Rp10.000.000.000", "Rp500.000.000" ], [ "Total 6 tahun (30%)", "Rp3.000.000.000" ] ],
        mengapaSalah: { A: "Mengeluarkan tanah dari nilai investasi (5% × Rp8.000.000.000), padahal tanah termasuk.", C: "Memakai 10% per tahun; yang benar 5% per tahun selama 6 tahun (total 30%).", D: "Total 30% (Rp3 miliar) tidak dibebankan sekaligus, tetapi dibagi rata 5% per tahun selama 6 tahun." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 31A."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 31A", berlakuSejak: null },
        { pasal: "PP 78/2019 Pasal 3 ayat (1) huruf a", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 46, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-138",
      topik: "B6.1",
      tingkat: [ "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      kutipan: "UU PPh Pasal 2 ayat (3) huruf b (diringkas) (dikutip try out): Subjek pajak dalam negeri adalah: ... b. badan yang didirikan atau bertempat kedudukan di Indonesia, kecuali unit tertentu dari badan pemerintah yang memenuhi kriteria: pembentukannya berdasarkan peraturan perundang-undangan, pembiayaannya bersumber dari APBN/APBD, penerimaannya dimasukkan dalam anggaran Pemerintah Pusat/Daerah, dan pembukuannya diperiksa oleh aparat pengawasan fungsional negara.",
      stem: "Yayasan Ortax Peduli didirikan di Surabaya pada Februari 2026 berdasarkan akta notaris dan telah memperoleh pengesahan sebagai badan hukum. Yayasan Ortax Peduli bergerak di bidang sosial dan pendidikan, tidak membagikan sisa hasil kegiatan kepada pembina, pengurus, atau pengawas, dan seluruh kegiatan manajemennya dilakukan di Indonesia. Ketua pengurus berpendapat bahwa karena bersifat nirlaba, yayasan bukan subjek pajak sehingga tidak perlu mendaftarkan diri untuk memperoleh NPWP maupun menyampaikan SPT Tahunan. Berdasarkan Pasal 2 UU Pajak Penghasilan, manakah perlakuan perpajakan yang tepat terhadap Yayasan Ortax Peduli?",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Yayasan Ortax Peduli merupakan Subjek Pajak Badan Dalam Negeri karena didirikan atau bertempat kedudukan di Indonesia sehingga wajib memiliki NPWP dan menyampaikan SPT Tahunan PPh Badan.", B: "Yayasan Ortax Peduli bukan subjek pajak karena tidak mencari laba dan tidak membagikan sisa hasil kegiatan, sehingga tidak wajib memiliki NPWP maupun menyampaikan SPT Tahunan PPh Badan.", C: "Yayasan Ortax Peduli diperlakukan sebagai bagian dari Wajib Pajak orang pribadi para pembinanya sehingga penghasilan yayasan dilaporkan dalam SPT Tahunan PPh Orang Pribadi pembina.", D: "Yayasan Ortax Peduli baru menjadi Subjek Pajak Badan Dalam Negeri apabila dalam satu tahun pajak memperoleh penerimaan bruto lebih dari Rp4,8 miliar, sehingga tahun 2026 belum wajib ber-NPWP." },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 1 angka 3 UU KUP memasukkan yayasan ke dalam pengertian badan, baik yang melakukan usaha maupun tidak. Badan yang didirikan atau bertempat kedudukan di Indonesia merupakan subjek pajak dalam negeri (UU PPh Ps. 2 ayat (3) huruf b); satu-satunya pengecualian adalah unit tertentu dari badan pemerintah yang memenuhi kriteria. Sifat nirlaba hanya relevan untuk menentukan apakah penghasilan tertentu dikecualikan dari objek pajak, bukan untuk menghapus status subjek pajaknya.",
        jejakHitung: [],
        mengapaSalah: { B: "Sifat nirlaba tidak menghapus status subjek pajak; yayasan termasuk badan dan pengecualian subjek hanya untuk unit tertentu badan pemerintah.", C: "Yayasan adalah badan yang terpisah dari pembina, pengurus, dan pengawasnya.", D: "Mencampuradukkan batas peredaran bruto Rp4,8 miliar (pengusaha kecil/PPh final) dengan syarat subjek pajak; status subjek pajak badan tidak bergantung pada besarnya penerimaan." },
        jebakan: "Bedakan subjek pajak (siapa) dan objek pajak (apa). Status nirlaba tidak menghapus status subjek; yang dapat dikecualikan adalah objek penghasilan tertentu."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 1 angka 3 s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "UU PPh Pasal 2 ayat (1) huruf b dan ayat (3) huruf b s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 48, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-139",
      topik: "B6.10",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Penjelasan UU PPh Pasal 18 ayat (4) huruf a (dikutip try out): Hubungan istimewa dianggap ada apabila terdapat hubungan kepemilikan yang berupa penyertaan modal sebesar 25% atau lebih secara langsung ataupun tidak langsung. Misalnya, PT A mempunyai 50% saham PT B ... apabila PT B mempunyai 50% saham PT C, PT A sebagai pemegang saham PT B secara tidak langsung mempunyai penyertaan pada PT C sebesar 25%.",
      stem: "PT Ortax Holdings memiliki 60% saham PT Ortax Manufaktur, dan PT Ortax Manufaktur memiliki 50% saham PT Ortax Agro Lestari. PT Ortax Holdings tidak memiliki saham PT Ortax Agro Lestari secara langsung, dan tidak ada anggota direksi atau komisaris yang sama di antara ketiga perseroan. Menurut Pasal 18 ayat (4) UU PPh, hubungan antara PT Ortax Holdings dan PT Ortax Agro Lestari adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terdapat hubungan istimewa karena PT Ortax Holdings tidak memiliki saham PT Ortax Agro Lestari secara langsung", B: "Terdapat hubungan istimewa karena penyertaan tidak langsung PT Ortax Holdings sebesar 30% (60% × 50%)", C: "Tidak terdapat hubungan istimewa karena penyertaan tidak langsung hanya 10% (60% − 50%)", D: "Terdapat hubungan istimewa hanya apabila terdapat penguasaan melalui manajemen atau teknologi" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Penyertaan modal yang menimbulkan hubungan istimewa dapat bersifat langsung maupun tidak langsung; penyertaan tidak langsung dihitung dengan mengalikan persentase kepemilikan pada setiap mata rantai (contoh Penjelasan: 50% × 50% = 25%). Penyertaan tidak langsung PT Ortax Holdings pada PT Ortax Agro Lestari = 60% × 50% = 30%, di atas ambang 25%, sehingga terdapat hubungan istimewa walaupun tidak ada kepemilikan langsung maupun penguasaan manajemen.",
        jejakHitung: [ [ "Penyertaan langsung PT Ortax Holdings pada PT Ortax Manufaktur", "60%" ], [ "Penyertaan PT Ortax Manufaktur pada PT Ortax Agro Lestari", "50%" ], [ "Penyertaan tidak langsung = 60% × 50%", "30%" ], [ "Dibandingkan ambang Pasal 18 ayat (4) huruf a", "30% ≥ 25% → hubungan istimewa" ] ],
        mengapaSalah: { A: "Penyertaan tidak langsung juga menimbulkan hubungan istimewa.", C: "Penyertaan tidak langsung dihitung dengan perkalian, bukan pengurangan persentase.", D: "Unsur kepemilikan sudah cukup; penguasaan bukan syarat tambahan." },
        jebakan: "Pola: penyertaan tidak langsung = perkalian persentase berantai; ≥ 25% berarti hubungan istimewa."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 18 ayat (4) huruf a beserta Penjelasan s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 172/2023 Pasal 2 ayat (4)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 53, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-140",
      topik: "B6.7",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Niaga (bukan BUT, tidak memakai tarif PPh final 0,5%) memiliki peredaran bruto tahun 2026 Rp24.000.000.000. Penghasilan kena pajak hasil penghitungan sebelum pembulatan Rp1.500.400.500. PPh terutang tahun 2026 adalah ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Rp165.044.000,00", B: "Rp297.079.200,00", C: "Rp297.079.299,00", D: "Rp330.088.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "PKP dibulatkan ke bawah dalam ribuan rupiah penuh menjadi Rp1.500.400.000. Karena peredaran bruto melebihi Rp4,8 miliar tetapi tidak melebihi Rp50 miliar, hanya PKP dari bagian peredaran bruto sampai Rp4,8 miliar (4,8/24 × PKP) yang mendapat pengurangan tarif 50% (tarif efektif 11%); sisa PKP dikenai tarif 22%.",
        jejakHitung: [ [ "PKP dibulatkan ke bawah", "Rp1.500.400.000" ], [ "PKP fasilitas = 4,8/24 × Rp1.500.400.000", "Rp300.080.000" ], [ "PPh fasilitas = 50% × 22% × Rp300.080.000", "Rp33.008.800" ], [ "PKP nonfasilitas = Rp1.500.400.000 − Rp300.080.000", "Rp1.200.320.000" ], [ "PPh nonfasilitas = 22% × Rp1.200.320.000", "Rp264.070.400" ], [ "PPh terutang", "Rp297.079.200" ] ],
        mengapaSalah: { A: "Menerapkan tarif 11% atas seluruh PKP, padahal fasilitas hanya untuk bagian peredaran bruto sampai Rp4,8 miliar.", C: "Tidak membulatkan PKP ke bawah dalam ribuan rupiah penuh sebelum menghitung pajak.", D: "Menerapkan tarif 22% atas seluruh PKP tanpa fasilitas Pasal 31E." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 17 ayat (1) huruf b dan ayat (4)."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 17 ayat (1) huruf b dan ayat (4)", berlakuSejak: null },
        { pasal: "UU PPh Pasal 31E ayat (1) beserta Penjelasan", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 63, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-141",
      topik: "B6.3",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Laba sebelum pajak PT Ortax Elektronik tahun 2026 Rp2.000.000.000. Laporan laba rugi memuat: beban imbalan kerja yang baru dicadangkan Rp120.000.000; biaya keperluan pribadi pemegang saham (bukan pegawai) Rp30.000.000; pendapatan sewa gedung yang telah dikenai PPh final Rp100.000.000; dan penyusutan fiskal lebih besar Rp40.000.000 daripada penyusutan komersial. Penghasilan kena pajak tahun 2026 adalah ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Rp1.890.000.000,00", B: "Rp2.090.000.000,00", C: "Rp2.110.000.000,00", D: "Rp2.010.000.000,00" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Pembentukan cadangan imbalan kerja dan biaya keperluan pribadi pemegang saham tidak boleh dikurangkan (koreksi positif). Pendapatan yang telah dikenai PPh final dikeluarkan dari penghitungan PKP (koreksi negatif). Penyusutan fiskal yang lebih besar menambah pengurangan (koreksi negatif).",
        jejakHitung: [ [ "Koreksi positif = Rp120 jt + Rp30 jt", "Rp150.000.000" ], [ "Koreksi negatif = Rp100 jt + Rp40 jt", "Rp140.000.000" ], [ "PKP = Rp2.000 jt + Rp150 jt − Rp140 jt", "Rp2.010.000.000" ] ],
        mengapaSalah: { A: "Membalik arah koreksi: koreksi positif dikurangkan (Rp2.000 jt − Rp150 jt + Rp40 jt).", B: "Memperlakukan selisih penyusutan sebagai koreksi positif (Rp2.000 jt + Rp150 jt − Rp100 jt + Rp40 jt).", C: "Tidak mengeluarkan pendapatan sewa yang telah dikenai PPh final (Rp2.000 jt + Rp150 jt − Rp40 jt)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 4 ayat (2), Pasal 6 ayat (1), Pasal 9 ayat (1) huruf b dan c, Pasal 11 s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (2), Pasal 6 ayat (1), Pasal 9 ayat (1) huruf b dan c, Pasal 11 s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 72, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-142",
      topik: "B6.2",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      kutipan: "PP 91/2021 Pasal 2 ayat (1) dan (2) (dikutip try out): (1) Atas penghasilan berupa Bunga Obligasi yang diterima atau diperoleh wajib pajak dalam negeri dan bentuk usaha tetap dikenai pajak penghasilan yang bersifat final. (2) Tarif pajak penghasilan yang bersifat final ... sebesar 10% (sepuluh persen) dari dasar pengenaan pajak penghasilan.",
      stem: "CV Ortax Distributor membukukan laba komersial sebelum pajak Tahun Pajak 2026 sebesar Rp650.000.000. Di dalamnya terdapat bunga obligasi korporasi Rp40.000.000 yang telah dipotong PPh final, penghasilan royalti Rp30.000.000, dan keuntungan penjualan kendaraan operasional Rp15.000.000. Tidak terdapat koreksi fiskal lainnya. Penghasilan neto fiskal yang dikenai tarif umum adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp610.000.000,00", B: "Rp565.000.000,00", C: "Rp580.000.000,00", D: "Rp650.000.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "final-nonfinal", D: "salah-hitung" },
      pembahasan: {
        inti: "Bunga obligasi yang diterima Wajib Pajak dalam negeri selain bank dan dana pensiun tertentu dikenai PPh final, sehingga dikeluarkan dari penghasilan yang dikenai tarif umum. Royalti dan keuntungan penjualan kendaraan merupakan objek PPh dengan tarif umum yang sudah termasuk dalam laba, sehingga tidak dikoreksi.",
        jejakHitung: [ [ "Laba komersial", "Rp650.000.000" ], [ "Koreksi negatif bunga obligasi (final)", "(Rp40.000.000)" ], [ "Royalti dan keuntungan penjualan kendaraan", "tetap (tarif umum)" ], [ "Penghasilan neto fiskal", "Rp610.000.000" ] ],
        mengapaSalah: { B: "Mengeluarkan juga royalti dan keuntungan penjualan kendaraan yang merupakan objek tarif umum.", C: "Mengeluarkan royalti seolah-olah final, padahal royalti dikenai tarif umum.", D: "Tidak mengeluarkan bunga obligasi yang telah dikenai PPh final." },
        jebakan: "Hanya penghasilan final/bukan objek yang dikeluarkan; royalti dan keuntungan penjualan aset tetap."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (1) huruf d, ayat (2) huruf a, dan ayat (3) huruf f angka 1; Pasal 6 ayat (1); Pasal 17 s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PP 91/2021 Pasal 2 ayat (1)–(3)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 80, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-143",
      topik: "B6.7",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      kutipan: "PP 55/2022 Pasal 56 ayat (2) dan (3) s.t.d.d. PP 20/2026 (dikutip try out): (2) Tarif Pajak Penghasilan yang bersifat final ... sebesar 0,5% (nol koma lima persen). (3) Tidak termasuk penghasilan dari usaha yang dikenai Pajak Penghasilan yang bersifat final ... : ... penghasilan yang telah dikenai Pajak Penghasilan yang bersifat final dengan ketentuan peraturan perundang-undangan perpajakan tersendiri; dan ... penghasilan yang dikecualikan sebagai objek pajak.",
      stem: "Koperasi Ortax Sejahtera merupakan Wajib Pajak badan berbentuk koperasi yang terdaftar pada Juli 2024 dan memanfaatkan skema PPh bersifat final berdasarkan PP Nomor 55 Tahun 2022 s.t.d.d. PP Nomor 20 Tahun 2026 dengan tarif 0,5%. Peredaran bruto usaha Tahun Pajak 2025 sebesar Rp1.700.000.000. Pada Tahun Pajak 2026, koperasi memperoleh penghasilan sebagai berikut: 1. peredaran bruto dari penjualan barang kebutuhan sehari-hari sebesar Rp1.900.000.000; 2. penghasilan dari persewaan sebidang tanah milik koperasi kepada pihak ketiga sebesar Rp60.000.000; dan 3. dividen dari PT Ortax Manufaktur (Wajib Pajak badan dalam negeri) sebesar Rp40.000.000. Berapakah PPh final 0,5% yang harus dibayar atas peredaran bruto Koperasi Ortax Sejahtera untuk Tahun Pajak 2026?",
      kataKualifikasi: [],
      opsi: { A: "Rp9.500.000,00", B: "Rp9.700.000,00", C: "Rp10.000.000,00", D: "Rp7.000.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Koperasi terdaftar sebelum PP 20/2026 yang jangka waktu PPh finalnya menurut PP 55/2022 berakhir pada Tahun Pajak 2024–2029 dapat dikenai PPh final sampai Tahun Pajak 2029 (Pasal II angka 1 huruf b PP 20/2026), sehingga Tahun Pajak 2026 tercakup dan peredaran bruto 2025 Rp1,7 miliar tidak melebihi Rp4,8 miliar. Penghasilan yang dikenai PPh final 0,5% tidak termasuk penghasilan yang telah dikenai PPh final tersendiri (sewa tanah) dan penghasilan yang dikecualikan dari objek pajak (dividen dalam negeri yang diterima badan dalam negeri). Bagian peredaran bruto Rp500 juta yang tidak dikenai PPh hanya berlaku bagi orang pribadi.",
        jejakHitung: [ [ "Jangka waktu: terdaftar 2024 → menurut PP 55/2022 berakhir TP 2027 → diperpanjang PP 20/2026 s.d. TP 2029", "TP 2026 tercakup" ], [ "Uji batas: peredaran bruto TP 2025", "Rp1.700.000.000 < Rp4.800.000.000" ], [ "Peredaran bruto usaha (sewa tanah dan dividen dikeluarkan)", "Rp1.900.000.000" ], [ "PPh final = 0,5% × Rp1.900.000.000", "Rp9.500.000" ] ],
        mengapaSalah: { B: "Ikut memasukkan dividen yang dikecualikan dari objek pajak: 0,5% × Rp1.940.000.000.", C: "Ikut memasukkan sewa tanah dan dividen: 0,5% × Rp2.000.000.000.", D: "Mengurangkan Rp500.000.000 yang hanya berlaku bagi Wajib Pajak orang pribadi: 0,5% × Rp1.400.000.000." },
        jebakan: "Dua kelompok yang dikeluarkan dari DPP: (1) penghasilan yang sudah final tersendiri; (2) penghasilan bukan objek pajak. Batas 4 Tahun Pajak dalam Pasal 57 ayat (2) huruf f berlaku bagi koperasi yang terdaftar setelah PP 20/2026."
      },
      dasarHukum: [
        { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 56 ayat (2)–(3), Pasal 57 ayat (1) huruf b, Pasal 58 ayat (1) huruf a, Pasal 60 ayat (2) dan (5)", berlakuSejak: null },
        { pasal: "PP 20/2026 Pasal II angka 1 huruf b", berlakuSejak: null },
        { pasal: "UU PPh Pasal 4 ayat (3) huruf f angka 1 huruf b) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 87, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-144",
      topik: "B6.3",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Laporan laba rugi PT Ortax Distributor Tahun 2026 memuat beban: sumbangan kepada panti asuhan yang bukan sumbangan menurut Pasal 6 ayat (1) huruf i–m Rp20.000.000; angsuran PPh Pasal 25 perusahaan yang dicatat sebagai beban Rp30.000.000; biaya promosi kepada pihak lain tanpa daftar nominatif Rp15.000.000; sanksi bunga pajak Rp5.000.000; gaji pegawai Rp900.000.000. Koreksi fiskal positif atas data tersebut adalah ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Rp40.000.000,00", B: "Rp55.000.000,00", C: "Rp65.000.000,00", D: "Rp70.000.000,00" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Sumbangan yang bukan sumbangan menurut Pasal 6 ayat (1) huruf i–m, PPh yang terutang oleh perusahaan sendiri (termasuk angsuran PPh Pasal 25), dan sanksi administrasi perpajakan tidak boleh dikurangkan. Biaya promosi kepada pihak lain yang tidak dibuatkan daftar nominatif juga tidak dapat dikurangkan. Gaji pegawai merupakan biaya untuk mendapatkan, menagih, dan memelihara penghasilan.",
        jejakHitung: [ [ "Sumbangan bukan Pasal 6 ayat (1) huruf i–m", "Rp20.000.000" ], [ "Angsuran PPh Pasal 25 yang dibebankan", "Rp30.000.000" ], [ "Promosi tanpa daftar nominatif", "Rp15.000.000" ], [ "Sanksi bunga pajak", "Rp5.000.000" ], [ "Jumlah koreksi positif (gaji tidak dikoreksi)", "Rp70.000.000" ] ],
        mengapaSalah: { A: "Tidak mengoreksi angsuran PPh Pasal 25 yang dibebankan (Rp20 jt + Rp15 jt + Rp5 jt).", B: "Menganggap biaya promosi tanpa daftar nominatif boleh dikurangkan (Rp20 jt + Rp30 jt + Rp5 jt).", C: "Menganggap sanksi bunga pajak boleh dikurangkan (Rp20 jt + Rp30 jt + Rp15 jt)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf g, h, k s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf g, h, k s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 02/PMK.03/2010 Pasal 6 ayat (1) dan (5)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 88, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-145",
      topik: "B6.3",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "PMK 74/2024 Pasal 4 ayat (2) dan ayat (5): (2) Pembentukan cadangan piutang tak tertagih ... merupakan biaya yang diperoleh dari nilai tercatat cadangan piutang tak tertagih pada akhir Tahun Pajak dikurangi dengan cadangan piutang tak tertagih awal. ... (5) Nilai tercatat cadangan piutang tak tertagih pada akhir Tahun Pajak ... harus menggunakan nilai yang lebih kecil antara: a. nilai yang dihitung berdasarkan standar akuntansi keuangan yang berlaku di Indonesia; atau b. nilai batasan tertentu ...",
      stem: "PT Bank Ortax, bank yang terdaftar dan diawasi Otoritas Jasa Keuangan, membentuk cadangan piutang tak tertagih. Menurut PMK 74/2024, besarnya pembentukan cadangan piutang tak tertagih yang boleh dikurangkan dari penghasilan bruto dalam satu Tahun Pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "seluruh saldo cadangan piutang tak tertagih akhir Tahun Pajak menurut SAK tanpa memperhitungkan saldo awal.", B: "jumlah piutang yang nyata-nyata tidak dapat ditagih dan telah dihapuskan dalam pembukuan selama Tahun Pajak.", C: "nilai yang lebih besar antara nilai menurut SAK dan batasan tertentu, dikurangi cadangan awal Tahun Pajak.", D: "nilai tercatat cadangan akhir Tahun Pajak (nilai terkecil antara SAK dan batasan tertentu) dikurangi cadangan piutang tak tertagih awal Tahun Pajak." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Bank yang terdaftar dan diawasi OJK termasuk Wajib Pajak yang boleh membentuk cadangan piutang tak tertagih. Pembentukan cadangan yang boleh dikurangkan adalah nilai tercatat cadangan pada akhir Tahun Pajak dikurangi cadangan awal, dengan nilai tercatat akhir Tahun Pajak memakai nilai yang lebih kecil antara nilai menurut SAK dan nilai batasan tertentu.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mengabaikan saldo awal; yang dibebankan adalah selisih nilai tercatat akhir dikurangi cadangan awal.",
          B: "Menerapkan cara penghapusan piutang nyata-nyata tidak tertagih (Pasal 6 ayat (1) huruf h UU PPh), bukan pembentukan cadangan bank.",
          C: "Memakai nilai yang lebih besar antara SAK dan batasan tertentu, padahal ketentuan meminta nilai yang lebih kecil."
        },
        jebakan: "Dua langkah: (1) nilai tercatat akhir = nilai terkecil (SAK, batasan); (2) beban = akhir − awal."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 9 ayat (1) huruf c angka 1 s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PMK 74/2024 Pasal 2 ayat (3), Pasal 3 ayat (1) dan ayat (6), Pasal 4 ayat (1), (2), dan (5), Pasal 12", berlakuSejak: "2024-10-18" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 93, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-146",
      topik: "B6.2",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "UU PPh Pasal 4 ayat (3) huruf a s.t.d.t.d. UU 7/2021 (dikutip try out): Yang dikecualikan dari objek pajak adalah: ... harta hibahan yang diterima oleh keluarga sedarah dalam garis keturunan lurus satu derajat, badan keagamaan, badan pendidikan, badan sosial termasuk yayasan, koperasi, atau orang pribadi yang menjalankan usaha mikro dan kecil, sepanjang tidak ada hubungan dengan usaha, pekerjaan, kepemilikan, atau penguasaan di antara pihak-pihak yang bersangkutan.",
      stem: "Koperasi Ortax Sejahtera merupakan Wajib Pajak badan dalam negeri. Pada Tahun Pajak 2026 koperasi menerima: 1. hibah uang Rp200.000.000 dari PT Ortax Agro Lestari yang tidak memiliki hubungan usaha, pekerjaan, kepemilikan, atau penguasaan dengan koperasi; 2. dividen Rp80.000.000 dari PT Ortax Manufaktur (badan dalam negeri) dengan kepemilikan 2%; 3. bunga deposito Rp30.000.000; 4. hadiah undian Rp20.000.000; 5. hibah sebidang tanah senilai Rp150.000.000 dari salah satu pengurus koperasi. Berdasarkan Pasal 4 ayat (3) UU PPh, jumlah penghasilan Koperasi Ortax Sejahtera yang dikecualikan dari objek PPh adalah ...",
      kataKualifikasi: [ "kecuali" ],
      opsi: { A: "Rp330.000.000,00", B: "Rp280.000.000,00", C: "Rp430.000.000,00", D: "Rp200.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Koperasi termasuk penerima harta hibahan yang dikecualikan sepanjang tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan, sehingga hibah dari PT Ortax Agro Lestari dikecualikan (Rp200.000.000). Dividen dari badan dalam negeri yang diterima koperasi dikecualikan tanpa syarat kepemilikan (Rp80.000.000). Hibah tanah dari pengurus tidak dikecualikan karena ada hubungan pekerjaan/penguasaan, sedangkan bunga deposito dan hadiah undian adalah objek yang dikenai PPh final.",
        jejakHitung: [ [ "Hibah dari PT tanpa hubungan (dikecualikan)", "Rp200.000.000" ], [ "Dividen dalam negeri (dikecualikan)", "Rp80.000.000" ], [ "Bunga deposito, hadiah undian, hibah dari pengurus", "objek (bukan dikecualikan)" ], [ "Jumlah dikecualikan", "Rp280.000.000" ] ],
        mengapaSalah: { A: "Menyamakan penghasilan yang dikenai PPh final (bunga deposito dan hadiah undian) dengan penghasilan yang dikecualikan.", C: "Mengabaikan hubungan pekerjaan/penguasaan antara pengurus dan koperasi pada hibah tanah.", D: "Menganggap dividen objek karena kepemilikan di bawah 25% (aturan lama sebelum UU 11/2020)." },
        jebakan: "Bedakan \"dikecualikan dari objek\" dengan \"objek yang dikenai PPh final\"."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 4 ayat (1), ayat (2) huruf a dan b, ayat (3) huruf a angka 2 dan huruf f angka 1 huruf b) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 94, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B6-147",
      topik: "B6.1",
      tingkat: [ "B", "C" ],
      jenis: "kasus",
      kesulitan: 1,
      kutipan: "UU PPh Pasal 2 ayat (3) huruf b (dikutip try out): badan yang didirikan atau bertempat kedudukan di Indonesia, kecuali unit tertentu dari badan pemerintah yang memenuhi kriteria: 1. pembentukannya berdasarkan ketentuan peraturan perundang-undangan; 2. pembiayaannya bersumber dari APBN atau APBD; 3. penerimaannya dimasukkan dalam anggaran Pemerintah Pusat atau Pemerintah Daerah; dan 4. pembukuannya diperiksa oleh aparat pengawasan fungsional negara.",
      stem: "Unit Pelaksana Teknis (UPT) Terminal Ortaxwangi dibentuk berdasarkan Peraturan Bupati Ortaxwangi untuk mengelola terminal penumpang. Seluruh biaya operasionalnya dibiayai dari APBD Kabupaten Ortaxwangi, seluruh penerimaan retribusi terminal dan parkir disetorkan ke kas daerah dan dimasukkan dalam APBD, serta pembukuannya diperiksa oleh Inspektorat Daerah dan Badan Pemeriksa Keuangan. Berdasarkan Pasal 2 ayat (3) huruf b UU Pajak Penghasilan, status UPT Terminal Ortaxwangi sebagai subjek pajak adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tetap menjadi Subjek Pajak Badan karena memungut retribusi dari pengguna terminal yang merupakan pihak swasta.", B: "Dikecualikan sebagai Subjek Pajak Badan semata-mata karena dibentuk berdasarkan Peraturan Bupati, tanpa perlu memenuhi kriteria lainnya.", C: "Tetap menjadi Subjek Pajak Badan karena pembukuannya diperiksa Badan Pemeriksa Keuangan, bukan oleh Direktorat Jenderal Pajak.", D: "Dikecualikan sebagai Subjek Pajak Badan karena memenuhi seluruh kriteria kumulatif unit tertentu dari badan pemerintah." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Unit tertentu dari badan pemerintah dikecualikan dari subjek pajak bila memenuhi seluruh kriteria: dibentuk berdasarkan peraturan perundang-undangan, dibiayai APBN/APBD, penerimaannya dimasukkan dalam anggaran pemerintah, dan pembukuannya diperiksa aparat pengawasan fungsional negara. Keempat kriteria terpenuhi: dibentuk dengan Peraturan Bupati, dibiayai APBD, seluruh penerimaan masuk APBD, dan diperiksa Inspektorat Daerah serta BPK.",
        jejakHitung: [],
        mengapaSalah: { A: "Memungut retribusi dari masyarakat tidak menggugurkan pengecualian sepanjang seluruh penerimaannya masuk APBD.", B: "Kriteria bersifat kumulatif; dasar pembentukan saja tidak cukup.", C: "Kriterianya justru pemeriksaan oleh aparat pengawasan fungsional negara, bukan oleh DJP." },
        jebakan: "Uji keempat kriteria satu per satu; semuanya harus terpenuhi."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 2 ayat (3) huruf b s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 97, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-B6-01", topik: "B6.7", tipe: "angka", depan: "Tarif PPh badan dalam negeri sejak Tahun Pajak 2022?", belakang: "22% dari PKP", dasar: "Pasal 17 ayat (1) huruf b UU PPh (UU HPP)", berlakuSejak: "2022-01-01", menggantikan: "25% s.d. TP 2019; rencana 20% mulai 2022 dibatalkan UU HPP", dekTambahan: [] },
    { id: "KT-B6-02", topik: "B6.7", tipe: "angka", depan: "Tarif perseroan terbuka yang memenuhi syarat?", belakang: "19% (22% dikurangi 3%)", dasar: "Pasal 17 ayat (2b) UU PPh; PP 55/2022", berlakuSejak: "2022-01-01", menggantikan: "20% (25% dikurangi 5%) pada era tarif 25%", dekTambahan: [] },
    { id: "KT-B6-03", topik: "B6.7", tipe: "angka", depan: "Syarat tarif 19% perseroan terbuka?", belakang: "≥ 40% saham di BEI, ≥ 300 pihak, masing-masing < 5%, ≥ 183 hari", dasar: "PP 55/2022 (ketentuan perseroan terbuka)", berlakuSejak: "2022-12-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-04", topik: "B6.7", tipe: "angka", depan: "Pasal 31E: batas peredaran bruto dan bagian berfasilitas?", belakang: "Omzet ≤ Rp50 miliar; fasilitas atas PKP dari omzet s.d. Rp4,8 miliar", dasar: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-05", topik: "B6.7", tipe: "prosedur", depan: "Rumus PKP berfasilitas Pasal 31E?", belakang: "(Rp4,8 miliar ÷ peredaran bruto) × PKP, dikenai 11%", dasar: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-06", topik: "B6.7", tipe: "definisi", depan: "Siapa yang boleh memakai PPh final 0,5% pasca-PP 20/2026?", belakang: "Orang pribadi, perseroan perorangan, koperasi; jasa pekerjaan bebas dikecualikan (perseroan perorangan ahli yang sudah memakai PPh final PP 55/2022: peralihan sampai akhir TP 2026)", dasar: "PP 55/2022 Pasal 56–57 s.t.d.d. PP 20/2026", berlakuSejak: "2026-04-22", menggantikan: "PP 55/2022: juga CV, firma, PT, BUMDes (berjangka waktu)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-07", topik: "B6.7", tipe: "angka", depan: "Jangka waktu PPh final 0,5% bagi koperasi?", belakang: "4 tahun pajak sejak terdaftar; koperasi yang terdaftar sebelum PP 20/2026 dan jangkanya berakhir TP 2024–2029: sampai TP 2029", dasar: "PP 55/2022 Pasal 57 s.t.d.d. PP 20/2026; PP 20/2026 Pasal II angka 1 huruf b", berlakuSejak: "2026-04-22", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-08", topik: "B6.7", tipe: "prosedur", depan: "Peralihan PP 20/2026 bagi CV, firma, PT pengguna PPh final lama?", belakang: "Tetap final sampai jangka lama habis: PT 3 tahun, CV/firma 4 tahun", dasar: "PP 20/2026 (ketentuan peralihan)", berlakuSejak: "2026-04-22", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-09", topik: "B6.5", tipe: "angka", depan: "Jangka kompensasi kerugian fiskal umum?", belakang: "5 tahun berturut-turut mulai tahun sesudah rugi", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "1984-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-10", topik: "B6.5", tipe: "angka", depan: "Kompensasi kerugian bagi penerima tax allowance?", belakang: "Lebih dari 5 tahun, paling lama 10 tahun", dasar: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-11", topik: "B6.2", tipe: "definisi", depan: "Dividen dalam negeri yang diterima badan dalam negeri?", belakang: "Bukan objek tanpa syarat kepemilikan; tidak dipotong PPh 23", dasar: "Pasal 4 ayat (3) huruf f UU PPh", berlakuSejak: "2020-11-02", menggantikan: "bukan objek hanya bila kepemilikan ≥ 25% dan dari laba ditahan", dekTambahan: [] },
    { id: "KT-B6-12", topik: "B6.2", tipe: "angka", depan: "Batas penanaman kembali sisa lebih nirlaba pendidikan/litbang?", belakang: "Paling lama 4 tahun sejak sisa lebih diperoleh", dasar: "Pasal 4 ayat (3) huruf m UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-13", topik: "B6.4", tipe: "angka", depan: "Masa manfaat fiskal bangunan permanen?", belakang: "20 tahun atau masa manfaat sebenarnya (taat asas)", dasar: "Pasal 11 ayat (6a) UU PPh; PMK 72/2023", berlakuSejak: "2022-01-01", menggantikan: "wajib 20 tahun", dekTambahan: [] },
    { id: "KT-B6-14", topik: "B6.4", tipe: "angka", depan: "Tarif garis lurus Kelompok 1–4?", belakang: "25% · 12,5% · 6,25% · 5%", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-15", topik: "B6.4", tipe: "angka", depan: "Tarif saldo menurun Kelompok 1–4?", belakang: "50% · 25% · 12,5% · 10%", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-16", topik: "B6.4", tipe: "pasal", depan: "Saat mulai penyusutan harta yang masih dalam pengerjaan?", belakang: "Bulan selesainya pengerjaan", dasar: "Pasal 11 ayat (3) UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-17", topik: "B6.4", tipe: "angka", depan: "Penyusutan bangunan tidak permanen?", belakang: "10 tahun, garis lurus 10%", dasar: "Pasal 11 ayat (6) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-18", topik: "B6.3", tipe: "angka", depan: "Batas perbandingan utang dan modal (DER) fiskal?", belakang: "4 : 1, dari rata-rata saldo akhir bulan", dasar: "PMK 169/PMK.010/2015", berlakuSejak: "2016-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-19", topik: "B6.3", tipe: "angka", depan: "Batas sumbangan PP 93/2010 yang dapat dibiayakan?", belakang: "5% neto fiskal tahun sebelumnya; tidak boleh menimbulkan rugi", dasar: "PP 93/2010 (berlaku sejak Tahun Pajak 2010, Pasal 10)", berlakuSejak: "2010-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-20", topik: "B6.3", tipe: "definisi", depan: "Natura/kenikmatan pegawai bagi pemberi kerja?", belakang: "Dapat dibiayakan sejak TP 2022 sepanjang terkait 3M", dasar: "Pasal 6 ayat (1) huruf a UU PPh (UU HPP); PP 55/2022", berlakuSejak: "2022-01-01", menggantikan: "tidak dapat dibiayakan (Pasal 9 ayat (1) huruf e lama)", dekTambahan: [] },
    { id: "KT-B6-21", topik: "B6.3", tipe: "prosedur", depan: "Syarat biaya promosi dan entertainment dapat dikurangkan?", belakang: "Daftar nominatif lengkap dilampirkan pada SPT Tahunan", dasar: "PMK 02/PMK.03/2010; SE-27/PJ.22/1986", berlakuSejak: "2010-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-22", topik: "B6.3", tipe: "prosedur", depan: "Syarat piutang tak tertagih dapat dibiayakan?", belakang: "Dibebankan, daftar piutang ke DJP, plus PN/PUPN, perjanjian, publikasi, atau pengakuan debitur", dasar: "Pasal 6 ayat (1) huruf h UU PPh; PMK 207/PMK.010/2015", berlakuSejak: "2015-11-11", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-23", topik: "B6.6", tipe: "prosedur", depan: "Batas kredit PPh Pasal 24?", belakang: "Per jenis penghasilan untuk tiap negara: terkecil antara pajak LN (memperhatikan P3B) dan (penghasilan LN jenis itu ÷ PKP) × PPh terutang, paling tinggi PPh terutang", dasar: "Pasal 24 ayat (2) UU PPh; Pasal 6 ayat (2) dan ayat (4) PMK 192/PMK.03/2018", berlakuSejak: "2018-12-31", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-24", topik: "B6.6", tipe: "pasal", depan: "Jangka waktu keputusan restitusi Pasal 17B UU KUP?", belakang: "12 bulan; lewat → dianggap dikabulkan, SKPLB ≤ 1 bulan", dasar: "Pasal 17B ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-25", topik: "B6.9", tipe: "prosedur", depan: "Rumus angsuran PPh 25 badan?", belakang: "(PPh terutang − PPh 22, 23, 24) ÷ 12; bila SPT lalu memuat kompensasi kerugian, lihat KT-B6-60 (neto tahun lalu dikurangi sisa rugi yang masih dapat dikompensasikan)", dasar: "Pasal 25 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-26", topik: "B6.9", tipe: "prosedur", depan: "Angsuran PPh 25 bulan-bulan sebelum SPT Tahunan disampaikan?", belakang: "Sama dengan angsuran bulan terakhir tahun pajak lalu; angsuran baru mulai bulan SPT disampaikan (paling lambat bulan batas waktu)", dasar: "Pasal 25 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-27", topik: "B6.9", tipe: "angka", depan: "Syarat permohonan pengurangan angsuran PPh 25?", belakang: "Proyeksi PPh terutang < 75% dasar angsuran (dapat diajukan setelah 3 bulan atau lebih tahun pajak berjalan)", dasar: "PER-11/PJ/2025 Pasal 119 (menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-28", topik: "B6.9", tipe: "angka", depan: "Batas setor PPh 25 di era Coretax?", belakang: "Tanggal 15 bulan berikutnya; pembayaran tervalidasi dianggap lapor", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-29", topik: "B6.10", tipe: "angka", depan: "Ambang hubungan istimewa karena kepemilikan modal?", belakang: "≥ 25% langsung atau tidak langsung", dasar: "Pasal 18 ayat (4) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-30", topik: "B6.11", tipe: "angka", depan: "Batas penyampaian SPT Tahunan PPh Badan?", belakang: "4 bulan setelah akhir tahun pajak; perpanjangan paling lama 2 bulan", dasar: "Pasal 3 ayat (3) huruf c dan ayat (4) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-31", topik: "B6.11", tipe: "angka", depan: "Denda terlambat SPT Tahunan PPh Badan?", belakang: "Rp1.000.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-32", topik: "B6.11", tipe: "definisi", depan: "Isi lampiran 1771-V dan 1771-VI?", belakang: "V: pemegang saham dan pengurus; VI: penyertaan dan utang-piutang afiliasi", dasar: "Petunjuk pengisian SPT 1771", berlakuSejak: "2014-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-33", topik: "B6.8", tipe: "angka", depan: "Fasilitas tax allowance PP 78/2019 atas penghasilan neto?", belakang: "30% investasi aktiva tetap, 5% per tahun selama 6 tahun", dasar: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-34", topik: "B6.8", tipe: "angka", depan: "Plafon super deduction vokasi dan litbang?", belakang: "Vokasi paling tinggi 200%; litbang paling tinggi 300%", dasar: "PMK 128/PMK.010/2019; PMK 81/2024 (litbang; menggantikan PMK 153/PMK.010/2020)", berlakuSejak: "2019-09-09", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-35", topik: "B6.1", tipe: "angka", depan: "Branch profit tax atas laba BUT?", belakang: "20% × (PKP − PPh badan), kecuali seluruhnya ditanamkan kembali di Indonesia, atau tarif P3B", dasar: "Pasal 26 ayat (4) UU PPh; Pasal 1 ayat (3) PMK 14/PMK.03/2011", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-36", topik: "B6.1", tipe: "definisi", depan: "Empat kriteria unit pemerintah yang bukan subjek pajak?", belakang: "Dasar peraturan, dibiayai APBN/APBD, penerimaan masuk anggaran, diperiksa APIP", dasar: "Pasal 2 ayat (3) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-37", topik: "B6.11", tipe: "prosedur", depan: "Fasilitas pengurangan sanksi administratif PMK 71/2026?", belakang: "Hapus 100% s.d. 31 Desember 2026, mengecil s.d. 30 Juni 2027; lewat permohonan", dasar: "PMK 71/2026; KEP-239/PJ/2026", berlakuSejak: "2026-10-02", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-38", topik: "B6.11", tipe: "prosedur", depan: "Saluran penyampaian SPT Tahunan badan Tahun Pajak 2025?", belakang: "Coretax (PER-11/PJ/2025), pra-isi dari bukti potong elektronik", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: "e-Form/e-SPT melalui DJP Online", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-39", topik: "B6.1", tipe: "pasal", depan: "Kapan pejabat diplomatik asing kehilangan pengecualian subjek pajak?", belakang: "Bila menerima penghasilan lain di luar jabatannya di Indonesia", dasar: "Pasal 3 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-40", topik: "B6.1", tipe: "angka", depan: "Jangka keputusan permohonan penghapusan NPWP?", belakang: "Badan 12 bulan, orang pribadi 6 bulan sejak permohonan lengkap; setelah pemeriksaan", dasar: "Pasal 2 ayat (6)–(7) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-41", topik: "B6.1", tipe: "prosedur", depan: "Imbalan jasa kepada BUT dipotong pajak apa?", belakang: "PPh Pasal 23, bukan PPh Pasal 26", dasar: "Pasal 23 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-42", topik: "B6.1", tipe: "definisi", depan: "Status yayasan sosial yang tidak menjalankan usaha?", belakang: "Tetap subjek pajak badan; sumbangan yang diterima dapat bukan objek", dasar: "Pasal 1 angka 3 UU KUP; Pasal 2 ayat (1) huruf b UU PPh", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-43", topik: "B6.2", tipe: "definisi", depan: "Syarat dividen dari badan luar negeri non-bursa bukan objek?", belakang: "Diinvestasikan di Indonesia minimal 30% laba setelah pajak, dalam jangka waktu tertentu", dasar: "Pasal 4 ayat (3) huruf f angka 2 UU PPh", berlakuSejak: "2020-11-02", menggantikan: "selalu objek PPh dengan kredit PPh 24", dekTambahan: [] },
    { id: "KT-B6-44", topik: "B6.2", tipe: "definisi", depan: "Pengembalian pajak yang dahulu dibiayakan dan imbalan bunga?", belakang: "Objek PPh; pengembalian PPh badan bukan penghasilan", dasar: "Pasal 4 ayat (1) huruf e dan r; Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-45", topik: "B6.2", tipe: "prosedur", depan: "Sewa bangunan kepada penyewa orang pribadi bukan pemotong?", belakang: "PPh final 10% disetor sendiri pemilik paling lambat tanggal 15", dasar: "PP 34/2017; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-46", topik: "B6.3", tipe: "pasal", depan: "Tunjangan PPh 21 vs PPh 21 ditanggung pemberi kerja?", belakang: "Sejak PMK 66/2023 keduanya penghasilan pegawai dan dapat dibiayakan pemberi kerja (PPh 21 ditanggung = penggantian dalam bentuk kenikmatan, Lampiran PMK 168/2023 contoh I.4)", dasar: "Pasal 6 ayat (1) huruf a UU PPh; PMK 66/2023 Pasal 2 ayat (1); Lampiran PMK 168/2023 contoh I.4", berlakuSejak: "2023-07-01", menggantikan: "PER-16/PJ/2016: PPh ditanggung bukan penghasilan pegawai dan tidak dapat dibiayakan", dekTambahan: [] },
    { id: "KT-B6-47", topik: "B6.3", tipe: "pasal", depan: "Zakat yang dibayar badan dapat dibiayakan bila?", belakang: "Badan DN milik pemeluk Islam membayar ke BAZNAS/LAZ resmi", dasar: "Pasal 9 ayat (1) huruf g UU PPh; PP 60/2010", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-48", topik: "B6.3", tipe: "prosedur", depan: "Biaya fiskal penyewa atas sewa tanpa hak opsi yang dicatat dengan PSAK 116?", belakang: "Sewa tahun berjalan; penyusutan aset hak-guna dan bunga dikoreksi", dasar: "Pasal 6 dan Pasal 9 ayat (2) UU PPh; KMK 1169/KMK.01/1991", berlakuSejak: "1991-01-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-49", topik: "B6.4", tipe: "prosedur", depan: "Perlakuan fiskal lessee sewa guna usaha dengan hak opsi?", belakang: "Tidak menyusutkan; seluruh angsuran dibiayakan; tidak dipotong PPh 23", dasar: "KMK 1169/KMK.01/1991; Pasal 23 ayat (4) huruf b UU PPh", berlakuSejak: "1991-01-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-50", topik: "B6.4", tipe: "pasal", depan: "Harta terbakar lalu diganti asuransi?", belakang: "Nilai sisa buku fiskal menjadi kerugian; ganti rugi asuransi menjadi penghasilan", dasar: "Pasal 11 ayat (8) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-51", topik: "B6.5", tipe: "prosedur", depan: "Urutan pemakaian sisa kerugian fiskal?", belakang: "Kerugian tertua lebih dulu; sisa setelah tahun kelima hangus", dasar: "Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-52", topik: "B6.5", tipe: "definisi", depan: "Sisa rugi badan yang menggabungkan diri (penggabungan nilai buku)?", belakang: "Tidak dapat dikompensasikan oleh badan penerima penggabungan", dasar: "Pasal 402 ayat (1) PMK 81/2024 (menggantikan PMK 52/PMK.010/2017 s.t.d.d. PMK 56/PMK.010/2021)", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-53", topik: "B6.6", tipe: "pasal", depan: "SKPLB terbit saat Wajib Pajak masih punya utang pajak?", belakang: "Diperhitungkan dulu dengan utang pajak; sisanya dikembalikan paling lama 1 bulan", dasar: "Pasal 11 ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-54", topik: "B6.6", tipe: "definisi", depan: "Sifat PPh 22 BBM bagi penyalur/agen dan bagi pembeli pemakai?", belakang: "Final bagi penyalur/agen; kredit pajak bagi pembeli pemakai", dasar: "PMK 51/2025 Pasal 10 ayat (2) (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-55", topik: "B6.6", tipe: "angka", depan: "PPh 22 bendahara atas pembelian sampai Rp2.000.000?", belakang: "Tidak dipungut bila tidak lebih dari Rp2.000.000 (tidak termasuk PPN, bukan pembayaran yang dipecah); di atasnya dipungut 1,5% dan menjadi kredit penjual", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-56", topik: "B6.7", tipe: "prosedur", depan: "Apakah PPN keluaran masuk peredaran bruto Pasal 31E?", belakang: "Tidak; peredaran bruto memuat penghasilan final dan bukan objek, tanpa PPN", dasar: "Pasal 31E UU PPh; SE-02/PJ/2015", berlakuSejak: "2015-01-09", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-57", topik: "B6.7", tipe: "angka", depan: "Tiga tarif dalam kasus PPh 29 badan (laporan peserta UKP 2026)?", belakang: "22% umum; 19% perseroan terbuka; 11% bagian PKP Pasal 31E", dasar: "Pasal 17 ayat (1) huruf b dan ayat (2b), Pasal 31E UU PPh", berlakuSejak: "2022-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-58", topik: "B6.8", tipe: "angka", depan: "Tarif PPh dividen ke subjek luar negeri bagi penerima tax allowance?", belakang: "10%, atau lebih rendah menurut P3B", dasar: "PP 78/2019 Pasal 3", berlakuSejak: "2019-12-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-59", topik: "B6.8", tipe: "angka", depan: "Pajak minimum global: tarif, ambang, dan saat berlaku?", belakang: "15%; omzet grup ≥ EUR 750 juta; IIR/DMTT 2025, UTPR 2026", dasar: "PMK 136/2024; PER-6/PJ/2026", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-60", topik: "B6.9", tipe: "prosedur", depan: "Dasar angsuran PPh 25 Wajib Pajak yang berhak atas kompensasi kerugian?", belakang: "Neto tahun lalu dikurangi sisa rugi yang masih dapat dikompensasikan", dasar: "Pasal 25 ayat (6) huruf a UU PPh; PER-11/PJ/2025 (menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-61", topik: "B6.10", tipe: "definisi", depan: "Keluarga semenda ke samping satu derajat?", belakang: "Ipar; menimbulkan hubungan istimewa", dasar: "Penjelasan Pasal 18 ayat (4) huruf c UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-62", topik: "B6.10", tipe: "prosedur", depan: "Syarat biaya jasa intra-grup dapat dibebankan?", belakang: "Jasa benar ada, bermanfaat, harga wajar; bukan aktivitas pemegang saham", dasar: "Pasal 18 ayat (3) UU PPh; PMK 172/2023", berlakuSejak: "2023-12-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-63", topik: "B6.11", tipe: "angka", depan: "Bunga pengungkapan ketidakbenaran pengisian SPT saat pemeriksaan (Pasal 8 ayat (5))?", belakang: "(Acuan + 10%)/12 per bulan sejak batas waktu penyampaian SPT Tahunan berakhir (SPT Masa: jatuh tempo pembayaran), maksimal 24 bulan", dasar: "Pasal 8 ayat (5) UU KUP (diubah UU 11/2020)", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-64", topik: "B6.11", tipe: "definisi", depan: "Isi Lampiran 1771-III?", belakang: "PPh 22 dan 23 yang dipotong/dipungut pihak lain di dalam negeri", dasar: "Petunjuk pengisian SPT 1771", berlakuSejak: "2014-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-65", topik: "B6.4", tipe: "pasal", depan: "Nilai perolehan dalam tukar-menukar harta?", belakang: "Harga pasar; selisih dengan nilai sisa buku menjadi laba/rugi", dasar: "Pasal 10 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-66", topik: "B6.4", tipe: "pasal", depan: "Nilai perolehan harta inbreng bagi badan penerima?", belakang: "Harga pasar", dasar: "Pasal 10 ayat (5) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-67", topik: "B6.4", tipe: "pasal", depan: "Jual beli harta antarpihak hubungan istimewa: harga yang dipakai?", belakang: "Jumlah yang seharusnya dikeluarkan atau diterima (harga wajar)", dasar: "Pasal 10 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-68", topik: "B6.1", tipe: "pasal", depan: "Awal kewajiban subjektif BUT?", belakang: "Saat mulai menjalankan usaha atau kegiatan melalui BUT", dasar: "Pasal 2A ayat (3) UU PPh (UU 10/1994)", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-69", topik: "B6.1", tipe: "definisi", depan: "Bolehkah BUT memakai fasilitas Pasal 31E?", belakang: "Tidak; Pasal 31E khusus Wajib Pajak badan dalam negeri", dasar: "Pasal 31E ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-70", topik: "B6.1", tipe: "pasal", depan: "Pembayaran BUT ke kantor pusat yang tidak dapat dibiayakan?", belakang: "Royalti, jasa manajemen/lain, bunga (kecuali perbankan), dan pengiriman laba", dasar: "Pasal 5 ayat (3) dan Pasal 9 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-71", topik: "B6.1", tipe: "pasal", depan: "Biaya administrasi kantor pusat bagi BUT?", belakang: "Dapat dibebankan sepanjang berkaitan dengan usaha atau kegiatan BUT", dasar: "Pasal 5 ayat (2) UU PPh", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-72", topik: "B6.1", tipe: "definisi", depan: "Syarat organisasi internasional bukan subjek pajak?", belakang: "Ditetapkan Menkeu, Indonesia anggota, tanpa usaha selain pinjaman pemerintah dari iuran", dasar: "Pasal 3 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-73", topik: "B6.6", tipe: "angka", depan: "Kurs untuk Rupiah PPh 26 atas pembayaran valas?", belakang: "Kurs KMK saat terutang/pemotongan; bukan kurs BI atau kurs setor", dasar: "KMK nilai kurs mingguan", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-74", topik: "B6.6", tipe: "pasal", depan: "PPh 26 yang dipotong perusahaan atas pembayaran ke luar negeri?", belakang: "Pajak milik penerima; bukan kredit pajak perusahaan pemotong", dasar: "Pasal 26 ayat (1) dan Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-75", topik: "B6.3", tipe: "prosedur", depan: "Royalti ke luar negeri dengan klausul gross-up?", belakang: "Bruto = neto ÷ (1 − tarif); seluruh bruto dapat dibiayakan", dasar: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf h UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-76", topik: "B6.6", tipe: "pasal", depan: "Pembelian barang dari luar negeri yang diimpor sendiri: dipotong PPh 26?", belakang: "Tidak; bukan objek PPh 26, PPh 22 impor saat impor", dasar: "Pasal 26 ayat (1) dan Pasal 22 UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-77", topik: "B6.5", tipe: "definisi", depan: "Kerugian penjualan saham di bursa dalam rugi fiskal?", belakang: "Dikeluarkan; transaksi PPh final 0,1% tidak membentuk rugi fiskal", dasar: "Pasal 4 ayat (2) dan Pasal 6 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-78", topik: "B6.8", tipe: "angka", depan: "Persentase SBIE GloBE tahun 2025?", belakang: "Gaji 9,6%; aset berwujud 7,6% (masa transisi)", dasar: "PMK 136/2024; Model Rules GloBE Pasal 9.2", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B6-79", topik: "B6.9", tipe: "prosedur", depan: "Penghasilan tidak teratur dalam angsuran PPh 25 badan?", belakang: "Dikeluarkan; PPh atas penghasilan teratur dikurangi PPh 22/23/24, dibagi 12", dasar: "Pasal 25 ayat (6) UU PPh; PER-11/PJ/2025 Pasal 113 dan 115 (menggantikan KEP-537/PJ/2000)", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-80", topik: "B6.10", tipe: "definisi", depan: "Hubungan istimewa tanpa kepemilikan modal?", belakang: "Penguasaan manajemen/teknologi, mis. direktur sama yang menetapkan harga, atau para pihak diketahui/menyatakan diri satu grup usaha", dasar: "Pasal 18 ayat (4) huruf b UU PPh; PP 55/2022 Pasal 33; PMK 172/2023 Pasal 2 ayat (5)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-81", topik: "B6.10", tipe: "pasal", depan: "Imbalan kerja kepada pemegang saham melebihi kewajaran?", belakang: "Bagian yang melebihi kewajaran tidak dapat dibiayakan", dasar: "Pasal 9 ayat (1) huruf f UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B6-82", topik: "B6.2", tipe: "pasal", depan: "Bagian laba sekutu CV/firma yang modalnya tidak terbagi atas saham?", belakang: "Bukan objek PPh bagi sekutu", dasar: "Pasal 4 ayat (3) huruf i UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-B6-01",
      judul: "Rekonsiliasi fiskal sampai PPh 29 dan PPh 25 — PT Bumi Lestari Pangan",
      topik: "B6.3",
      estimasiMenit: 22,
      narasi: "PT Bumi Lestari Pangan (produsen makanan olahan, badan dalam negeri, tahun buku kalender, tidak memakai PPh final UMKM) menyiapkan SPT 1771 Tahun Pajak 2025. Penjualan neto Rp39.000.000.000 dan laba komersial sebelum pajak Rp3.100.000.000. Di dalam laba itu termasuk bunga deposito Rp240.000.000, sewa ruang kantor kepada pihak lain Rp360.000.000 (PPh final 10% dipotong penyewa), dan dividen dari PT anak dalam negeri Rp400.000.000. Beban yang perlu ditelaah: entertainment tanpa daftar nominatif Rp85.000.000; sumbangan acara komunitas (bukan jenis PP 93/2010) Rp40.000.000; sanksi bunga STP Rp15.000.000; penyusutan komersial melebihi penyusutan fiskal Rp120.000.000; dan biaya pemeliharaan ruang yang disewakan Rp60.000.000. Sisa rugi fiskal: Tahun Pajak 2019 Rp90.000.000 dan Tahun Pajak 2022 Rp220.000.000. Kredit pajak 2025: PPh 22 impor Rp120.000.000, PPh 23 dipotong pelanggan Rp34.960.000, dan angsuran PPh 25 Rp240.000.000.",
      data: [
        ["Penjualan neto", "Rp39.000.000.000"],
        ["Laba komersial", "Rp3.100.000.000"],
        ["Bunga deposito (final)", "Rp240.000.000"],
        ["Sewa ruang (final 10%)", "Rp360.000.000"],
        ["Dividen DN", "Rp400.000.000"],
        ["Entertainment tanpa daftar nominatif", "Rp85.000.000"],
        ["Sumbangan non-PP 93/2010", "Rp40.000.000"],
        ["Sanksi bunga STP", "Rp15.000.000"],
        ["Selisih penyusutan (komersial > fiskal)", "Rp120.000.000"],
        ["Biaya pemeliharaan ruang disewakan", "Rp60.000.000"],
        ["Sisa rugi 2019 / 2022", "Rp90.000.000 / Rp220.000.000"],
        ["PPh 22 / PPh 23 / PPh 25", "Rp120.000.000 / Rp34.960.000 / Rp240.000.000"]
      ],
      langkah: [
        {
          no: 1,
          pertanyaan: "Berapa total koreksi fiskal positif (Rp)?",
          tipe: "angka",
          jawaban: 320000000,
          toleransi: 0,
          petunjuk: [
            "Cari beban yang dilarang Pasal 9 atau terkait penghasilan final",
            "Entertainment, sumbangan, sanksi, selisih penyusutan, biaya untuk penghasilan sewa final",
            "85 + 40 + 15 + 120 + 60 = Rp320.000.000"
          ],
          penjelasan: "Biaya pemeliharaan ruang yang disewakan terkait penghasilan final sehingga tidak dapat dikurangkan; entertainment tanpa daftar nominatif, sumbangan non-PP 93/2010, dan sanksi pajak adalah beda tetap; selisih penyusutan adalah beda temporer."
        },
        {
          no: 2,
          pertanyaan: "Berapa penghasilan neto fiskal (Rp)?",
          tipe: "angka",
          jawaban: 2420000000,
          toleransi: 0,
          petunjuk: [
            "Koreksi negatif = penghasilan final + bukan objek",
            "240 + 360 + 400 = Rp1.000.000.000",
            "3.100.000.000 + 320.000.000 − 1.000.000.000 = Rp2.420.000.000"
          ],
          penjelasan: "Bunga deposito dan sewa (final) serta dividen DN (bukan objek) dikeluarkan dari laba komersial."
        },
        {
          no: 3,
          pertanyaan: "Berapa PKP setelah kompensasi kerugian (Rp)?",
          tipe: "angka",
          jawaban: 2200000000,
          toleransi: 0,
          petunjuk: ["Rugi 2019 hanya dapat dipakai 2020–2024", "Rugi 2022 berlaku 2023–2027", "2.420.000.000 − 220.000.000 = Rp2.200.000.000"],
          penjelasan: "Pasal 6 ayat (2): rugi 2019 sudah hangus pada 2025; hanya rugi 2022 yang dikompensasikan."
        },
        {
          no: 4,
          pertanyaan: "Berapa peredaran bruto yang dipakai untuk menguji dan menghitung Pasal 31E?",
          tipe: "pilihan",
          opsi: {
            A: "Rp39.000.000.000 (penjualan saja)",
            B: "Rp40.000.000.000 (penjualan + penghasilan final + bukan objek)",
            C: "Rp39.600.000.000 (penjualan + penghasilan final)",
            D: "Rp2.420.000.000 (penghasilan neto fiskal)"
          },
          jawaban: "B",
          petunjuk: [
            "SE-02/PJ/2015 memakai seluruh penghasilan usaha dan luar usaha",
            "Termasuk penghasilan final dan bukan objek, sebelum biaya",
            "39.000 + 240 + 360 + 400 (juta) = Rp40 miliar → jawaban B"
          ],
          penjelasan: "Peredaran bruto Rp40 miliar ≤ Rp50 miliar, sehingga Pasal 31E berlaku dengan proporsi 4,8/40 = 12%."
        },
        {
          no: 5,
          pertanyaan: "Berapa PPh badan terutang 2025 (Rp)?",
          tipe: "angka",
          jawaban: 454960000,
          toleransi: 1000,
          petunjuk: [
            "PKP fasilitas = 4,8/40 × 2.200.000.000 = Rp264.000.000",
            "11% × 264.000.000 = Rp29.040.000; 22% × 1.936.000.000 = Rp425.920.000",
            "Jumlah = Rp454.960.000"
          ],
          penjelasan: "Pasal 31E: tarif 50% × 22% atas PKP dari bagian peredaran bruto s.d. Rp4,8 miliar, sisanya 22%."
        },
        {
          no: 6,
          pertanyaan: "Berapa PPh Pasal 29 (Rp)?",
          tipe: "angka",
          jawaban: 60000000,
          toleransi: 1000,
          petunjuk: [
            "Kredit: PPh 22, PPh 23, PPh 25 — bukan PPh final",
            "120.000.000 + 34.960.000 + 240.000.000 = Rp394.960.000",
            "454.960.000 − 394.960.000 = Rp60.000.000"
          ],
          penjelasan: "PPh 29 harus dilunasi sebelum SPT disampaikan (paling lambat 30 April 2026); PPh final atas deposito dan sewa tidak dikreditkan."
        },
        {
          no: 7,
          pertanyaan: "Berapa angsuran PPh 25 per bulan mulai Masa April 2026 (Rp)?",
          tipe: "angka",
          jawaban: 28791333,
          toleransi: 1,
          petunjuk: [
            "SPT 2025 memuat kompensasi kerugian, jadi berlaku Pasal 25 ayat (6) huruf a UU PPh: dasar = penghasilan neto tahun lalu − sisa kerugian yang masih dapat dikompensasikan pada 2026. Rugi 2022 habis dipakai pada 2025 dan rugi 2019 sudah hangus, sehingga sisanya nol dan dasarnya neto penuh Rp2.420.000.000",
            "PKP fasilitas = 4,8/40 × 2.420.000.000 = Rp290.400.000; 11% × 290.400.000 = Rp31.944.000; 22% × 2.129.600.000 = Rp468.512.000; PPh = Rp500.456.000",
            "(500.456.000 − 120.000.000 − 34.960.000) ÷ 12 = 345.496.000 ÷ 12 = Rp28.791.333"
          ],
          penjelasan: "Bukan PPh terutang setelah kompensasi (Rp454.960.000, yang menghasilkan Rp25.000.000): bila SPT tahun lalu memuat kompensasi kerugian, angsuran dihitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan (Pasal 25 ayat (6) huruf a UU PPh dan contoh Penjelasannya; bagian penghitungan angsuran pada SPT Tahunan badan), dikenai tarif seperti PPh terutang (Pasal 31E tetap berlaku), dikurangi PPh 22, 23, dan 24 tahun lalu, lalu dibagi 12. PPh 25 tahun lalu tidak ikut dikurangkan; angsuran baru berlaku sejak bulan SPT disampaikan, paling lambat sejak bulan batas waktu SPT (April 2026). Bila SPT disampaikan lebih awal, misalnya Maret 2026, angsuran baru sudah berlaku sejak Masa Maret."
        }
      ],
      kesimpulan: "Laba komersial Rp3,1 miliar menjadi neto fiskal Rp2,42 miliar setelah koreksi positif Rp320 juta dan negatif Rp1 miliar; PKP Rp2,2 miliar setelah rugi 2022. Dengan peredaran bruto Rp40 miliar, Pasal 31E menghasilkan PPh Rp454.960.000 dan PPh 29 Rp60.000.000. Karena rugi 2022 habis dipakai pada 2025, angsuran PPh 25 2026 dihitung dari neto penuh Rp2,42 miliar (Pasal 25 ayat (6) huruf a UU PPh): Rp28.791.333 per bulan.",
      kalkulatorRef: "pph-badan"
    },
    {
      id: "K-B6-02",
      judul: "DER 4:1 dan transaksi dengan induk — PT Cakra Baja Prima",
      topik: "B6.10",
      estimasiMenit: 16,
      narasi: "PT Cakra Baja Prima (industri baja, badan dalam negeri, bukan bank, lembaga pembiayaan, asuransi, maupun bidang infrastruktur; peredaran bruto di atas Rp50 miliar) dimiliki 70% oleh PT Cakra Holding (badan dalam negeri). Rata-rata saldo akhir bulan Tahun Pajak 2025: pinjaman bank Rp36.000.000.000 (berbunga), pinjaman dari PT Cakra Holding Rp18.000.000.000 (bunga 9% per tahun, telah diuji wajar), utang dagang tidak berbunga Rp6.000.000.000, ekuitas Rp9.000.000.000, dan pinjaman tanpa bunga dari PT Cakra Holding Rp3.000.000.000. Biaya pinjaman 2025: bunga bank Rp2.430.000.000 dan bunga kepada induk Rp1.620.000.000.",
      data: [
        ["Pinjaman bank (berbunga)", "Rp36.000.000.000"],
        ["Pinjaman induk (berbunga 9%)", "Rp18.000.000.000"],
        ["Utang dagang tidak berbunga", "Rp6.000.000.000"],
        ["Ekuitas", "Rp9.000.000.000"],
        ["Pinjaman tanpa bunga dari PT Cakra Holding", "Rp3.000.000.000"],
        ["Bunga bank", "Rp2.430.000.000"],
        ["Bunga kepada induk", "Rp1.620.000.000"],
        ["Kepemilikan induk", "70%"]
      ],
      langkah: [
        {
          no: 1,
          pertanyaan: "Berapa jumlah utang yang diperhitungkan dalam DER (Rp)?",
          tipe: "angka",
          jawaban: 54000000000,
          toleransi: 0,
          petunjuk: ["Utang dalam DER adalah utang yang dibebani bunga", "Utang dagang tidak berbunga dikeluarkan", "36 + 18 = Rp54 miliar"],
          penjelasan: "PMK 169/2015 memakai rata-rata saldo akhir bulan utang berbunga, termasuk utang kepada pihak afiliasi."
        },
        {
          no: 2,
          pertanyaan: "Berapa modal untuk penghitungan DER (Rp)?",
          tipe: "angka",
          jawaban: 12000000000,
          toleransi: 0,
          petunjuk: ["Modal = ekuitas menurut SAK", "Ditambah pinjaman tanpa bunga dari pihak berhubungan istimewa", "9 + 3 = Rp12 miliar"],
          penjelasan: "Pinjaman tanpa bunga dari pihak yang mempunyai hubungan istimewa (induk 70%) dianggap modal dalam PMK 169/2015."
        },
        {
          no: 3,
          pertanyaan: "Berapa DER PT Cakra Baja Prima?",
          tipe: "pilihan",
          opsi: { A: "4,5 : 1", B: "5 : 1", C: "6 : 1", D: "4 : 1" },
          jawaban: "A",
          petunjuk: ["DER = utang ÷ modal", "54 ÷ 12", "4,5 : 1 → jawaban A"],
          penjelasan: "B muncul bila utang dagang tidak berbunga ikut dihitung (60 ÷ 12); C bila pinjaman tanpa bunga tidak dimasukkan ke modal (54 ÷ 9)."
        },
        {
          no: 4,
          pertanyaan: "Berapa biaya pinjaman yang dapat dibebankan secara fiskal (Rp)?",
          tipe: "angka",
          jawaban: 3600000000,
          toleransi: 1000,
          petunjuk: [
            "Total biaya pinjaman = 2.430.000.000 + 1.620.000.000 = Rp4.050.000.000",
            "Proporsi = (4 × 12) ÷ 54 = 48/54",
            "48/54 × 4.050.000.000 = Rp3.600.000.000"
          ],
          penjelasan: "Biaya pinjaman yang dapat dibebankan = (4 × modal ÷ utang) × biaya pinjaman."
        },
        {
          no: 5,
          pertanyaan: "Berapa koreksi fiskal positif biaya pinjaman (Rp)?",
          tipe: "angka",
          jawaban: 450000000,
          toleransi: 1000,
          petunjuk: [
            "Koreksi = biaya pinjaman komersial − yang dapat dibebankan",
            "4.050.000.000 − 3.600.000.000",
            "Rp450.000.000 (tambahan PPh 22% = Rp99.000.000)"
          ],
          penjelasan: "Koreksi positif bersifat beda tetap; tidak dapat dibebankan pada tahun berikutnya."
        },
        {
          no: 6,
          pertanyaan: "Berapa PPh Pasal 23 yang wajib dipotong atas bunga kepada PT Cakra Holding (Rp)?",
          tipe: "angka",
          jawaban: 243000000,
          toleransi: 0,
          petunjuk: [
            "Bunga kepada badan DN selain bank dipotong PPh 23 15%",
            "Pembatasan DER tidak mengurangi dasar pemotongan",
            "15% × 1.620.000.000 = Rp243.000.000"
          ],
          penjelasan: "Bunga kepada bank dikecualikan dari PPh 23, tetapi bunga kepada induk tetap dipotong 15% dari jumlah bruto; koreksi DER hanya berdampak pada PPh badan pembayar."
        }
      ],
      kesimpulan: "DER dihitung dari utang berbunga Rp54 miliar dan modal Rp12 miliar (4,5 : 1), sehingga hanya 48/54 biaya pinjaman Rp4,05 miliar yang dapat dibebankan (Rp3,6 miliar) dan Rp450 juta dikoreksi positif; PPh 23 atas bunga kepada induk tetap Rp243 juta.",
      kalkulatorRef: "der"
    },
    {
      id: "K-B6-03",
      judul: "Kompensasi kerugian dan kredit PPh 24 per jenis penghasilan tiap negara — PT Nusa Arsitek Global",
      topik: "B6.6",
      estimasiMenit: 18,
      narasi: "PT Nusa Arsitek Global (jasa desain, badan dalam negeri, peredaran bruto 2025 Rp68.000.000.000) pada Tahun Pajak 2025 memperoleh penghasilan neto fiskal dalam negeri Rp2.000.000.000 sebelum kompensasi. Proyek di Negara X menghasilkan penghasilan neto Rp1.000.000.000 dengan pajak dibayar di Negara X Rp300.000.000; proyek di Negara Y penghasilan neto Rp500.000.000 dengan pajak dibayar Rp50.000.000; proyek di Negara Z rugi Rp200.000.000. Perusahaan masih memiliki sisa rugi fiskal dalam negeri Tahun Pajak 2021 Rp300.000.000. Kredit pajak dalam negeri: PPh 22 dan 23 Rp150.000.000; angsuran PPh 25 Rp240.000.000.",
      data: [
        ["Neto fiskal DN sebelum kompensasi", "Rp2.000.000.000"],
        ["Negara X: neto / pajak dibayar", "Rp1.000.000.000 / Rp300.000.000"],
        ["Negara Y: neto / pajak dibayar", "Rp500.000.000 / Rp50.000.000"],
        ["Negara Z", "rugi Rp200.000.000"],
        ["Sisa rugi fiskal DN 2021", "Rp300.000.000"],
        ["PPh 22 + 23", "Rp150.000.000"],
        ["PPh 25", "Rp240.000.000"]
      ],
      langkah: [
        {
          no: 1,
          pertanyaan: "Bagaimana perlakuan rugi proyek di Negara Z?",
          tipe: "pilihan",
          opsi: {
            A: "Dikurangkan dari penghasilan dalam negeri",
            B: "Dikurangkan dari penghasilan Negara X",
            C: "Tidak digabung dengan penghasilan dalam negeri maupun negara lain",
            D: "Dikompensasikan 5 tahun dengan penghasilan dalam negeri"
          },
          jawaban: "C",
          petunjuk: ["PMK 192/2018 mengatur kerugian di luar negeri", "Kerugian LN tidak boleh mengurangi penghasilan DN atau negara lain", "Jawaban C"],
          penjelasan: "Rugi Negara Z tidak diperhitungkan dalam PKP (Pasal 4 ayat (3) PMK 192/PMK.03/2018) dan tidak mengurangi penghasilan Negara X atau Negara Y saat menghitung batas kredit."
        },
        {
          no: 2,
          pertanyaan: "Berapa PKP Tahun Pajak 2025 (Rp)?",
          tipe: "angka",
          jawaban: 3200000000,
          toleransi: 0,
          petunjuk: [
            "Rugi 2021 masih berlaku sampai 2026",
            "Neto DN setelah kompensasi = 2.000.000.000 − 300.000.000",
            "1.700.000.000 + 1.000.000.000 + 500.000.000 = Rp3.200.000.000"
          ],
          penjelasan: "Peredaran bruto Rp68 miliar > Rp50 miliar sehingga tidak ada Pasal 31E."
        },
        {
          no: 3,
          pertanyaan: "Berapa PPh terutang (Rp)?",
          tipe: "angka",
          jawaban: 704000000,
          toleransi: 0,
          petunjuk: ["Tarif umum 22%", "Tanpa fasilitas Pasal 31E", "22% × 3.200.000.000 = Rp704.000.000"],
          penjelasan: "Tarif Pasal 17 ayat (1) huruf b."
        },
        {
          no: 4,
          pertanyaan: "Berapa batas maksimum kredit PPh 24 untuk Negara X (Rp)?",
          tipe: "angka",
          jawaban: 220000000,
          toleransi: 1000,
          petunjuk: [
            "Batas = (neto Negara X ÷ PKP) × PPh terutang",
            "1.000.000.000 ÷ 3.200.000.000 × 704.000.000",
            "Rp220.000.000 (lebih kecil dari pajak dibayar Rp300.000.000)"
          ],
          penjelasan: "Kelebihan pajak Negara X Rp80.000.000 tidak dapat dikreditkan."
        },
        {
          no: 5,
          pertanyaan: "Berapa total PPh 24 yang dapat dikreditkan (Rp)?",
          tipe: "angka",
          jawaban: 270000000,
          toleransi: 1000,
          petunjuk: [
            "Batas Y = 500/3.200 × 704.000.000 = Rp110.000.000",
            "Kredit Y = min(50.000.000; 110.000.000) = Rp50.000.000",
            "220.000.000 + 50.000.000 = Rp270.000.000"
          ],
          penjelasan: "Batas dihitung per jenis penghasilan untuk tiap negara (Pasal 6 ayat (2) PMK 192/PMK.03/2018). Di kasus ini tiap negara hanya memberi satu jenis penghasilan (penghasilan usaha proyek), sehingga Negara X dan Negara Y diuji sendiri-sendiri; bila satu negara memberi dua jenis penghasilan, masing-masing dihitung sendiri."
        },
        {
          no: 6,
          pertanyaan: "Berapa PPh Pasal 29 (Rp)?",
          tipe: "angka",
          jawaban: 44000000,
          toleransi: 1000,
          petunjuk: [
            "Kredit total = PPh 24 + PPh 22/23 + PPh 25",
            "270.000.000 + 150.000.000 + 240.000.000 = Rp660.000.000",
            "704.000.000 − 660.000.000 = Rp44.000.000"
          ],
          penjelasan: "Kredit PPh 24 dilaporkan pada lampiran kredit pajak luar negeri (7A format lama) dengan bukti pembayaran pajak di luar negeri."
        }
      ],
      kesimpulan: "Rugi Negara Z diabaikan, rugi DN 2021 dikompensasikan sehingga PKP Rp3,2 miliar dan PPh Rp704 juta. Batas per jenis penghasilan untuk tiap negara membatasi kredit Negara X menjadi Rp220 juta dan Negara Y Rp50 juta (total Rp270 juta), sehingga PPh 29 Rp44 juta.",
      kalkulatorRef: "pph24"
    },
    {
      id: "K-B6-04",
      judul: "PPh Pasal 29 dengan Pasal 31E dan penyertaan pada afiliasi — PT Cahaya Agro Lestari",
      topik: "B6.7",
      estimasiMenit: 22,
      narasi: "PT Cahaya Agro Lestari (produsen pakan ternak, badan dalam negeri bukan perseroan terbuka, terdaftar 2012, tahun buku kalender, tidak pernah memakai PPh final UMKM) menyiapkan SPT 1771 Tahun Pajak 2025. Perusahaan memiliki 40% saham PT Cahaya Benih (badan dalam negeri, tidak tercatat di bursa; dicatat dengan metode ekuitas) dan 15% saham PT Mitra Ternak (badan dalam negeri; metode biaya). Penjualan neto 2025 Rp36.900.000.000. Laba komersial sebelum pajak Rp4.200.000.000 sudah memuat: bagian laba PT Cahaya Benih menurut metode ekuitas Rp900.000.000 (PT Cahaya Benih tidak membagikan dividen pada 2025); dividen tunai dari PT Mitra Ternak Rp300.000.000; bunga pinjaman yang diterima dari PT Cahaya Benih Rp240.000.000 (tingkat bunga wajar; dipotong PPh 23 Rp36.000.000); bunga deposito Rp60.000.000 (PPh final Rp12.000.000); rugi penurunan nilai penyertaan pada PT Mitra Ternak Rp200.000.000; biaya entertainment tanpa daftar nominatif Rp90.000.000; dan sumbangan penanggulangan bencana nasional melalui lembaga yang memenuhi syarat Rp50.000.000 (penghasilan neto fiskal 2024 Rp3.000.000.000). Sisa kerugian fiskal Tahun Pajak 2020 Rp230.000.000. Kredit pajak 2025: PPh 22 impor bahan baku Rp180.000.000, PPh 23 atas bunga Rp36.000.000, dan angsuran PPh 25 Rp300.000.000.",
      data: [
        ["Penjualan neto", "Rp36.900.000.000"],
        ["Laba komersial sebelum pajak", "Rp4.200.000.000"],
        ["Bagian laba metode ekuitas (PT Cahaya Benih 40%)", "Rp900.000.000"],
        ["Dividen PT Mitra Ternak (15%)", "Rp300.000.000"],
        ["Bunga pinjaman dari PT Cahaya Benih (PPh 23 Rp36.000.000)", "Rp240.000.000"],
        ["Bunga deposito (PPh final Rp12.000.000)", "Rp60.000.000"],
        ["Penurunan nilai penyertaan PT Mitra Ternak", "Rp200.000.000"],
        ["Entertainment tanpa daftar nominatif", "Rp90.000.000"],
        ["Sumbangan bencana (neto fiskal 2024 Rp3 miliar)", "Rp50.000.000"],
        ["Sisa rugi fiskal 2020", "Rp230.000.000"],
        ["PPh 22 impor / PPh 23 / PPh 25", "Rp180.000.000 / Rp36.000.000 / Rp300.000.000"]
      ],
      langkah: [
        {
          no: 1,
          pertanyaan: "Berapa total koreksi fiskal negatif (Rp)?",
          tipe: "angka",
          jawaban: 1260000000,
          toleransi: 0,
          petunjuk: [
            "Cari pos laba yang bukan objek, final, atau belum merupakan penghasilan fiskal",
            "Bagian laba metode ekuitas, dividen dalam negeri, dan bunga deposito",
            "900.000.000 + 300.000.000 + 60.000.000 = Rp1.260.000.000"
          ],
          penjelasan: "Bagian laba metode ekuitas belum merupakan penghasilan yang diterima; dividen dalam negeri yang diterima badan dalam negeri bukan objek; bunga deposito final. Bunga dari afiliasi yang wajar tetap objek tarif umum."
        },
        {
          no: 2,
          pertanyaan: "Berapa total koreksi fiskal positif (Rp)?",
          tipe: "angka",
          jawaban: 290000000,
          toleransi: 0,
          petunjuk: [
            "Penurunan nilai penyertaan belum terealisasi",
            "Entertainment tanpa daftar nominatif tidak dapat dikurangkan; sumbangan bencana dibandingkan dengan 5% × Rp3 miliar",
            "200.000.000 + 90.000.000 = Rp290.000.000"
          ],
          penjelasan: "Sumbangan bencana Rp50.000.000 di bawah batas 5% × neto 2024 (Rp150.000.000) sehingga dapat dikurangkan; penurunan nilai penyertaan dan entertainment tanpa daftar nominatif dikoreksi."
        },
        {
          no: 3,
          pertanyaan: "Berapa PKP setelah kompensasi kerugian (Rp)?",
          tipe: "angka",
          jawaban: 3000000000,
          toleransi: 0,
          petunjuk: [
            "Neto fiskal = 4.200.000.000 − 1.260.000.000 + 290.000.000",
            "= Rp3.230.000.000; rugi 2020 berlaku 2021–2025",
            "3.230.000.000 − 230.000.000 = Rp3.000.000.000"
          ],
          penjelasan: "Tahun Pajak 2025 adalah tahun terakhir pemakaian rugi 2020."
        },
        {
          no: 4,
          pertanyaan: "Berapa peredaran bruto untuk menguji dan menghitung Pasal 31E?",
          tipe: "pilihan",
          opsi: {
            A: "Rp36.900.000.000 (penjualan saja)",
            B: "Rp37.500.000.000 (penjualan + dividen + bunga afiliasi + bunga deposito)",
            C: "Rp38.400.000.000 (ditambah bagian laba metode ekuitas)",
            D: "Rp37.440.000.000 (penjualan + dividen + bunga afiliasi, tanpa penghasilan final)"
          },
          jawaban: "B",
          petunjuk: [
            "SE-02/PJ/2015: penghasilan usaha dan luar usaha, termasuk penghasilan final dan bukan objek",
            "Bagian laba metode ekuitas adalah pencatatan akuntansi, bukan penghasilan yang diterima",
            "36.900 + 300 + 240 + 60 (juta) = Rp37,5 miliar → jawaban B"
          ],
          penjelasan: "Peredaran bruto Rp37,5 miliar ≤ Rp50 miliar sehingga Pasal 31E berlaku dengan proporsi 4,8/37,5 = 12,8%."
        },
        {
          no: 5,
          pertanyaan: "Berapa PPh badan terutang (Rp)?",
          tipe: "angka",
          jawaban: 617760000,
          toleransi: 1000,
          petunjuk: [
            "PKP fasilitas = 4,8/37,5 × 3.000.000.000 = Rp384.000.000",
            "11% × 384.000.000 = Rp42.240.000; 22% × 2.616.000.000 = Rp575.520.000",
            "Jumlah = Rp617.760.000"
          ],
          penjelasan: "Tarif 11% (50% × 22%) atas bagian PKP berfasilitas dan 22% atas sisanya."
        },
        {
          no: 6,
          pertanyaan: "Berapa PPh Pasal 29 (Rp)?",
          tipe: "angka",
          jawaban: 101760000,
          toleransi: 1000,
          petunjuk: [
            "Kredit: PPh 22 impor, PPh 23 atas bunga, PPh 25 — bukan PPh final deposito",
            "180.000.000 + 36.000.000 + 300.000.000 = Rp516.000.000",
            "617.760.000 − 516.000.000 = Rp101.760.000"
          ],
          penjelasan: "PPh 29 wajib lunas sebelum SPT disampaikan (paling lambat 30 April 2026)."
        },
        {
          no: 7,
          pertanyaan: "Berapa angsuran PPh 25 per bulan mulai Masa April 2026 (Rp)?",
          tipe: "angka",
          jawaban: 37426800,
          toleransi: 0,
          petunjuk: [
            "SPT 2025 memuat kompensasi kerugian, jadi berlaku Pasal 25 ayat (6) huruf a UU PPh: dasar = penghasilan neto tahun lalu − sisa kerugian yang masih dapat dikompensasikan pada 2026. Rugi 2020 habis dipakai pada 2025 (tahun terakhirnya), sehingga sisanya nol dan dasarnya neto penuh Rp3.230.000.000",
            "PKP fasilitas = 4,8/37,5 × 3.230.000.000 = Rp413.440.000; 11% × 413.440.000 = Rp45.478.400; 22% × 2.816.560.000 = Rp619.643.200; PPh = Rp665.121.600",
            "(665.121.600 − 180.000.000 − 36.000.000) ÷ 12 = 449.121.600 ÷ 12 = Rp37.426.800"
          ],
          penjelasan: "Bukan PPh terutang setelah kompensasi (Rp617.760.000, yang menghasilkan Rp33.480.000): bila SPT tahun lalu memuat kompensasi kerugian, angsuran dihitung dari penghasilan neto tahun lalu dikurangi sisa kerugian yang masih dapat dikompensasikan pada tahun berjalan (Pasal 25 ayat (6) huruf a UU PPh dan contoh Penjelasannya; bagian penghitungan angsuran pada SPT Tahunan badan), dikenai tarif seperti PPh terutang (Pasal 31E tetap berlaku), dikurangi PPh 22, 23, dan 24 tahun lalu, lalu dibagi 12. PPh 25 tahun lalu tidak ikut dikurangkan. Bila SPT disampaikan pada April 2026, angsuran Januari–Maret 2026 tetap sebesar angsuran Desember 2025; bila disampaikan lebih awal, angsuran baru berlaku sejak bulan SPT disampaikan."
        }
      ],
      kesimpulan: "Laba komersial Rp4,2 miliar menjadi neto fiskal Rp3,23 miliar (koreksi negatif Rp1,26 miliar, positif Rp290 juta) dan PKP Rp3 miliar setelah rugi 2020. Peredaran bruto Rp37,5 miliar (tanpa bagian laba ekuitas) membuat Pasal 31E berlaku: PPh Rp617.760.000 dan PPh 29 Rp101.760.000. Karena rugi 2020 habis dipakai pada 2025, angsuran PPh 25 2026 dihitung dari neto penuh Rp3,23 miliar (Pasal 25 ayat (6) huruf a UU PPh): Rp37.426.800 per bulan.",
      kalkulatorRef: "pph-badan"
    },
    {
      id: "K-B6-05",
      judul: "Penyusutan, penjualan truk, dan kompensasi rugi — PT Samudra Armada Logistik",
      topik: "B6.4",
      estimasiMenit: 20,
      narasi: "PT Samudra Armada Logistik (jasa angkutan barang, badan dalam negeri, tahun buku kalender, peredaran bruto 2025 Rp58 miliar) menyusun rekonsiliasi fiskal Tahun Pajak 2025. Laba komersial sebelum pajak Rp1.850.000.000 sudah memuat penyusutan komersial seluruh aset Rp1.120.000.000, laba penjualan truk lama Rp200.000.000, sanksi bunga STP Rp20.000.000, dan bunga deposito Rp45.000.000 (PPh final). Data aset untuk penyusutan fiskal: (1) gudang permanen yang dibeli 2016 dengan harga perolehan Rp4.000.000.000, disusutkan garis lurus 20 tahun; (2) enam truk baru Kelompok 2 yang dibeli dan dibayar 1 April 2025 Rp3.600.000.000, metode saldo menurun; (3) komputer Kelompok 1 yang dibeli Januari 2023 Rp240.000.000, metode garis lurus; dan (4) truk lama Kelompok 2 yang dijual 2 Januari 2025 seharga Rp700.000.000, dengan nilai sisa buku fiskal Rp560.000.000 dan nilai buku komersial Rp500.000.000 (tidak ada penyusutan 2025 atas truk ini). Sisa kerugian fiskal: Tahun Pajak 2019 Rp100.000.000 dan Tahun Pajak 2021 Rp600.000.000. PPh 23 yang dipotong pelanggan atas jasa angkutan Rp84.000.000 dan angsuran PPh 25 Rp150.000.000.",
      data: [
        ["Laba komersial sebelum pajak", "Rp1.850.000.000"],
        ["Penyusutan komersial 2025", "Rp1.120.000.000"],
        ["Gudang permanen (2016, GL 20 tahun)", "Rp4.000.000.000"],
        ["Truk baru Kelompok 2 (1 April 2025, saldo menurun)", "Rp3.600.000.000"],
        ["Komputer Kelompok 1 (Januari 2023, GL)", "Rp240.000.000"],
        ["Truk lama: harga jual / sisa buku fiskal / buku komersial", "Rp700.000.000 / Rp560.000.000 / Rp500.000.000"],
        ["Sanksi bunga STP", "Rp20.000.000"],
        ["Bunga deposito (final)", "Rp45.000.000"],
        ["Sisa rugi 2019 / 2021", "Rp100.000.000 / Rp600.000.000"],
        ["PPh 23 / PPh 25", "Rp84.000.000 / Rp150.000.000"]
      ],
      langkah: [
        {
          no: 1,
          pertanyaan: "Berapa penyusutan fiskal enam truk baru untuk 2025 (Rp)?",
          tipe: "angka",
          jawaban: 675000000,
          toleransi: 0,
          petunjuk: [
            "Kelompok 2 saldo menurun: 25% per tahun",
            "Mulai bulan pengeluaran April → 9 bulan",
            "3.600.000.000 × 25% × 9/12 = Rp675.000.000"
          ],
          penjelasan: "Tahun pertama dihitung pro rata bulan sejak bulan dilakukannya pengeluaran (Pasal 11 ayat (3))."
        },
        {
          no: 2,
          pertanyaan: "Berapa total penyusutan fiskal 2025 (Rp)?",
          tipe: "angka",
          jawaban: 935000000,
          toleransi: 0,
          petunjuk: [
            "Gudang: 5% × 4.000.000.000 = Rp200.000.000",
            "Komputer: 25% × 240.000.000 = Rp60.000.000",
            "200 + 675 + 60 (juta) = Rp935.000.000"
          ],
          penjelasan: "Truk lama yang dijual 2 Januari 2025 tidak disusutkan lagi pada 2025."
        },
        {
          no: 3,
          pertanyaan: "Bagaimana koreksi fiskal atas penyusutan 2025?",
          tipe: "pilihan",
          opsi: {
            A: "Koreksi negatif Rp185.000.000",
            B: "Koreksi positif Rp185.000.000",
            C: "Koreksi positif Rp1.120.000.000",
            D: "Tanpa koreksi karena keduanya penyusutan"
          },
          jawaban: "B",
          petunjuk: [
            "Bandingkan penyusutan komersial dengan penyusutan fiskal",
            "1.120.000.000 − 935.000.000",
            "Komersial lebih besar → koreksi positif Rp185.000.000 → jawaban B"
          ],
          penjelasan: "Penyusutan komersial yang melebihi penyusutan fiskal ditambahkan kembali sebagai beda waktu."
        },
        {
          no: 4,
          pertanyaan: "Berapa koreksi fiskal negatif atas penjualan truk lama (Rp)?",
          tipe: "angka",
          jawaban: 60000000,
          toleransi: 0,
          petunjuk: [
            "Keuntungan fiskal = harga jual − nilai sisa buku fiskal",
            "700.000.000 − 560.000.000 = Rp140.000.000, sedangkan keuntungan komersial Rp200.000.000",
            "Koreksi negatif = 200.000.000 − 140.000.000 = Rp60.000.000"
          ],
          penjelasan: "Pasal 11 ayat (8): nilai sisa buku fiskal dibebankan sebagai kerugian dan harga jual dibukukan sebagai penghasilan."
        },
        {
          no: 5,
          pertanyaan: "Berapa penghasilan neto fiskal 2025 (Rp)?",
          tipe: "angka",
          jawaban: 1950000000,
          toleransi: 0,
          petunjuk: [
            "Koreksi positif: penyusutan 185.000.000 + sanksi 20.000.000",
            "Koreksi negatif: penjualan truk 60.000.000 + bunga deposito 45.000.000",
            "1.850 + 205 − 105 (juta) = Rp1.950.000.000"
          ],
          penjelasan: "Sanksi pajak adalah beda tetap positif; bunga deposito final dikeluarkan dari penghasilan neto."
        },
        {
          no: 6,
          pertanyaan: "Berapa PKP Tahun Pajak 2025 setelah kompensasi kerugian?",
          tipe: "pilihan",
          opsi: {
            A: "Rp1.250.000.000 (rugi 2019 dan 2021 dikompensasikan)",
            B: "Rp1.350.000.000 (hanya rugi 2021)",
            C: "Rp1.850.000.000 (hanya rugi 2019)",
            D: "Rp1.950.000.000 (tanpa kompensasi)"
          },
          jawaban: "B",
          petunjuk: [
            "Rugi 2019 hanya berlaku 2020–2024",
            "Rugi 2021 berlaku 2022–2026",
            "1.950.000.000 − 600.000.000 = Rp1.350.000.000 → jawaban B"
          ],
          penjelasan: "Opsi A memakai rugi 2019 yang sudah hangus pada akhir 2024; opsi C justru memakai rugi yang hangus dan melewatkan rugi yang masih berlaku."
        },
        {
          no: 7,
          pertanyaan: "Berapa PPh Pasal 29 Tahun Pajak 2025 (Rp)?",
          tipe: "angka",
          jawaban: 63000000,
          toleransi: 1000,
          petunjuk: [
            "Peredaran bruto Rp58 miliar > Rp50 miliar → tarif 22% tanpa Pasal 31E",
            "PPh = 22% × 1.350.000.000 = Rp297.000.000",
            "297.000.000 − 84.000.000 − 150.000.000 = Rp63.000.000"
          ],
          penjelasan: "Kredit hanya PPh 23 dari pelanggan dan PPh 25; PPh final deposito tidak dikreditkan."
        }
      ],
      kesimpulan: "Penyusutan fiskal Rp935 juta (truk baru Rp675 juta dengan saldo menurun sejak April) lebih kecil dari penyusutan komersial Rp1,12 miliar sehingga dikoreksi positif Rp185 juta, dan penjualan truk lama dikoreksi negatif Rp60 juta. Neto fiskal Rp1,95 miliar, PKP Rp1,35 miliar setelah rugi 2021 (rugi 2019 hangus), PPh Rp297 juta, dan PPh 29 Rp63 juta.",
      kalkulatorRef: "penyusutan"
    }
  ],
  tips: [
    { teks: "Susun rekonsiliasi dalam tabel tiga kolom (koreksi positif, koreksi negatif, pasal) sebelum menjumlah; soal kasus UKP sengaja mencampur pos final, bukan objek, beda tetap, dan beda temporer.", tagSebab: "salah-klasifikasi" },
    { teks: "Untuk Pasal 31E, cek berurutan: apakah WP masih di rezim PPh final 0,5% (PP 20/2026), berapa peredaran bruto termasuk penghasilan final dan bukan objek, baru hitung proporsi 4,8 miliar.", tagSebab: "salah-klasifikasi" },
    { teks: "Tulis tahun kedaluwarsa di samping setiap saldo rugi: lima tahun dihitung mulai tahun SESUDAH rugi.", tagSebab: "salah-baca" },
    { teks: "Waspadai angka usang yang dijadikan pengecoh: tarif 25%, pengurangan Tbk 5%, natura tidak dapat dibiayakan, PPh final untuk CV/PT baru, dan bunga sanksi 2% flat.", tagSebab: "angka-usang" },
    { teks: "Sebelum mengkredit pajak, pisahkan bukti potong PPh final Pasal 4 ayat (2) dari PPh 22/23; opsi pengecoh hampir selalu memuat jumlah semua bukti potong.", tagSebab: "final-nonfinal" },
    { teks: "Hafalkan pola lampiran 1771: I rekonsiliasi, II biaya, III kredit DN, IV final dan bukan objek, V pemegang saham dan pengurus, VI afiliasi; 1A penyusutan, 2A rugi, 3A hubungan istimewa, 7A PPh 24.", tagSebab: "lupa-pasal" }
  ]
});
