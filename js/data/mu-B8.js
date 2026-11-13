// Modul B8 — PBB-P5L (PBB sektor perkebunan, perhutanan, pertambangan migas/panas bumi/minerba, dan sektor lainnya).
// Rekonstruksi dari kisi-kisi resmi, bukan soal asli. Ketentuan yang dipakai: berlaku Oktober 2026
// (UU 12/1985 s.t.d.d. UU 12/1994, PP 25/2002, PMK 186/2019 s.t.d.d. PMK 234/2022, PMK 23/2014, UU 1/2022, PMK 81/2024).
UKP.register({
  meta: {
    kode: "B8", slug: "pbb-p5l", nama: "PBB-P5L",
    diujiDi: ["B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0, B: 0.05, C: 0.04 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu menentukan subjek dan objek PBB sektor perkebunan, perhutanan, pertambangan (migas, panas bumi, minerba), dan sektor lainnya serta membedakannya dari PBB-P2 daerah; menghitung PBB terutang dari luas dan nilai per jenis areal sampai NJKP dan tarif; serta menerapkan prosedur SPOP, SPPT, SKP, STP, keberatan, banding, pengurangan, pembayaran, penagihan, restitusi, dan bagi hasil dalam kasus praktik.",
    dasarHukumUtama: [
      "UU 12/1985 s.t.d.d. UU 12/1994 tentang Pajak Bumi dan Bangunan (UU PBB)",
      "PP 25/2002 tentang Penetapan Besarnya NJKP untuk Penghitungan PBB",
      "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022 (klasifikasi objek dan penetapan NJOP PBB-P5L)",
      "PMK 23/PMK.03/2014 (NJOPTKP Rp12.000.000)",
      "UU 1/2022 (HKPD): batas objek PBB-P2 daerah dan dana bagi hasil PBB",
      "PMK 81/2024 (Coretax) dan PMK 118/2024 (pembetulan, keberatan, pengurangan, penghapusan, dan pembatalan di bidang perpajakan)",
      "PMK 129/2023 (pemberian pengurangan PBB; menggantikan PMK 82/PMK.03/2017)",
      "UU 19/1997 s.t.d.d. UU 19/2000 (PPSP) dan UU 14/2002 (Pengadilan Pajak)"
    ],
    perubahanTerbaru: [
      { sebelum: "PBB-P2 dan BPHTB diatur UU 28/2009 (PDRD); PBB-P2 dialihkan ke daerah paling lambat 2014", sesudah: "UU 1/2022 (HKPD) menjadi dasar PBB-P2 dan BPHTB: PBB-P2 meliputi semua bumi/bangunan kecuali kawasan usaha perkebunan, perhutanan, dan pertambangan, yang tetap PBB-P5L pusat; NJOPTKP PBB-P2 paling sedikit Rp10.000.000 dan NJKP 20%–100% menurut Perda", dasar: "UU 1/2022 Pasal 38–41; Perda wajib menyesuaikan paling lambat 5 Januari 2024", berlakuSejak: "2022-01-05" },
      { sebelum: "Klasifikasi objek dan penetapan NJOP PBB-P5L menurut PMK 186/PMK.03/2019 versi awal", sesudah: "PMK 234/PMK.03/2022 mengubah PMK 186/2019 untuk menyelaraskan cakupan sektor PBB-P5L dengan UU HKPD", dasar: "PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { sebelum: "Pembayaran PBB-P5L dengan e-Billing DJP Online dan identitas NPWP 15 digit", sesudah: "Kode billing dibuat di Coretax dengan NPWP 16 digit/NIK dan NOP; layanan administrasi PBB-P5L dilakukan elektronik", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Sanksi bunga UU KUP dan denda keterlambatan PBB sama-sama 2% per bulan (sebelum UU Cipta Kerja)", sesudah: "Bunga UU KUP memakai tarif bunga per bulan dari KMK (diatur UU Cipta Kerja dan dipertahankan UU HPP); denda PBB-P5L tetap 2% sebulan paling lama 24 bulan karena UU PBB tidak diubah kedua undang-undang itu", dasar: "UU 11/2020 (Cipta Kerja) yang mengubah pasal-pasal sanksi bunga UU KUP (Pasal 8, 9, 13, 14, 19), dipertahankan UU 7/2021 (HPP); Pasal 11 ayat (3) UU PBB", berlakuSejak: "2020-11-02" },
      { sebelum: "Permohonan keberatan, pembetulan, pengurangan denda, serta pengurangan atau pembatalan ketetapan PBB diajukan dengan surat ke KPP berdasarkan PMK tersendiri", sesudah: "Tata cara keberatan, pembetulan, pengurangan denda, serta pengurangan atau pembatalan ketetapan PBB dikonsolidasikan dalam PMK 118/2024 dan diajukan melalui Coretax; pengurangan PBB Pasal 19 tetap diatur tersendiri dalam PMK 129/2023 (rincian khusus PBB perlu dicek ke teks primer)", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" }
    ],
    lembarRingkas: [
      { label: "Tarif PBB-P5L", nilai: "0,5% (tarif tunggal)", dasar: "Pasal 5 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "NJKP perkebunan, perhutanan, pertambangan", nilai: "40% dari NJOP", dasar: "PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJKP objek lainnya (sektor lainnya)", nilai: "40% bila NJOP ≥ Rp1 miliar; 20% bila < Rp1 miliar (diuji sebelum NJOPTKP)", dasar: "PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJOPTKP PBB-P5L", nilai: "Rp12.000.000 per wajib pajak, sekali pada objek ber-NJOP terbesar", dasar: "PMK 23/PMK.03/2014; penjelasan Pasal 3 ayat (3) UU PBB" },
      { label: "Rumus ringkas sektor perkebunan, perhutanan, pertambangan", nilai: "0,2% × (NJOP − Rp12.000.000)", dasar: "Pasal 5–7 UU PBB; PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJOP bumi perkebunan", nilai: "luas × nilai tanah per m² (+ Biaya Investasi Tanaman/SIT pada areal produktif, yaitu areal yang telah ditanami); 1 ha = 10.000 m²", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { label: "NJOP tubuh bumi pertambangan (produksi)", nilai: "minerba: pendapatan bersih × angka kapitalisasi; migas: pendapatan minyak dan/atau gas bumi × angka kapitalisasi (angka kapitalisasi ditetapkan Dirjen Pajak)", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { label: "NJOP bangunan", nilai: "Nilai Perolehan Baru: seluruh biaya untuk memperoleh objek pada saat penilaian dikurangi penyusutan berdasarkan kondisi fisik; benda bergerak tidak dihitung", dasar: "Pasal 1 angka 2–3 UU PBB; Pasal 1 angka 7, Pasal 14 ayat (4), Pasal 15 ayat (4), Pasal 17 ayat (8), Pasal 19 ayat (8), Pasal 21 ayat (8), dan Pasal 33 ayat (5) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "1995-01-01" },
      { label: "Penetapan NJOP", nilai: "setiap 3 tahun; daerah tertentu setiap tahun", dasar: "Pasal 6 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Saat yang menentukan pajak terutang", nilai: "keadaan objek 1 Januari (tanpa pro rata)", dasar: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Tempat pajak terutang", nilai: "kabupaten/kota letak objek", dasar: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Penyampaian SPOP/LSPOP", nilai: "≤ 30 hari setelah tanggal SPOP diterima subjek pajak", dasar: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keterangan 'bukan wajib pajak'", nilai: "diputus ≤ 1 bulan; lewat = dianggap disetujui", dasar: "Pasal 4 ayat (4)–(7) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "SKP PBB", nilai: "pokok (huruf a) atau selisih (huruf b) + denda 25%", dasar: "Pasal 10 ayat (2)–(4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Jatuh tempo SPPT", nilai: "6 bulan sejak SPPT diterima", dasar: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Jatuh tempo SKP dan STP", nilai: "1 bulan sejak diterima", dasar: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Denda telat bayar", nilai: "2% sebulan, paling lama 24 bulan (maks. 48%); ditagih dengan STP", dasar: "Pasal 11 ayat (3)–(4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keberatan", nilai: "atas SPPT/SKP (bukan STP), tertulis, ≤ 3 bulan sejak diterima; tidak menunda bayar", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keputusan keberatan", nilai: "≤ 12 bulan sejak surat keberatan diterima; lewat = dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Banding", nilai: "≤ 3 bulan sejak keputusan keberatan diterima", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
      { label: "Gugatan atas pelaksanaan penagihan", nilai: "14 hari sejak tanggal pelaksanaan penagihan", dasar: "Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
      { label: "Pengurangan PBB", nilai: "atas permohonan: kondisi tertentu objek (paling tinggi 75%) atau bencana/sebab luar biasa (paling tinggi 100%) dari PBB yang belum dilunasi ◐", dasar: "Pasal 19 ayat (1) UU PBB; PMK 129/2023", berlakuSejak: "1995-01-01" },
      { label: "Rantai penagihan", nilai: "Surat Teguran lewat 7 hari → Surat Paksa lewat 21 hari → sita (2 × 24 jam) → pengumuman lelang ≥ 14 hari → lelang ≥ 14 hari", dasar: "UU 19/1997 s.t.d.d. UU 19/2000; PMK 61/2023", berlakuSejak: "2023-06-12" },
      { label: "Pembayaran", nilai: "kode billing Coretax (NPWP 16 digit + NOP); bukti pelunasan ber-NTPN", dasar: "Pasal 11 ayat (5) UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Bagi hasil (DBH PBB)", nilai: "100% untuk daerah: provinsi 16,2%, kabupaten/kota penghasil (letak objek) 73,8%, kabupaten/kota lain dalam provinsi 10%; UU PBB hanya mensyaratkan ≥ 90%", dasar: "Pasal 113 ayat (2) UU 1/2022; Pasal 16 PMK 35/2026; Pasal 18 ayat (1) UU PBB" },
      { label: "Pembanding PBB-P2 (pajak daerah)", nilai: "NJOPTKP ≥ Rp10 juta; dasar pengenaan 20%–100%; tarif ≤ 0,5% (Perda)", dasar: "Pasal 38–41 UU 1/2022", berlakuSejak: "2022-01-05" },
      { label: "PBB dalam PPh Badan", nilai: "PBB dapat dibiayakan; denda SKP/STP dikoreksi positif", dasar: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }
    ]
  },
  topik: [
    {
      id: "B8.1", slug: "pendaftaran-spop", judul: "Subjek, objek, pendaftaran, dan SPOP/LSPOP",
      estimasiMenit: 12, jenisDominan: ["prosedur", "klasifikasi"],
      ringkasan: [
        "PBB-P5L adalah PBB yang tetap dikelola pemerintah pusat (DJP) untuk sektor perkebunan, perhutanan, pertambangan minyak dan gas bumi, panas bumi, mineral atau batubara, serta sektor lainnya; PBB perdesaan dan perkotaan (PBB-P2) sudah menjadi pajak daerah berdasarkan UU 1/2022.",
        "Objek PBB adalah bumi (permukaan bumi dan tubuh bumi di bawahnya, termasuk perairan pedalaman dan laut wilayah) dan/atau bangunan (konstruksi teknik yang ditanam atau dilekatkan secara tetap pada tanah dan/atau perairan), Pasal 1 dan 2 UU PBB.",
        "Subjek pajak (Pasal 4 ayat (1)): orang atau badan yang secara nyata mempunyai suatu hak atas bumi, dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan; pada P5L umumnya pemegang HGU/izin usaha perkebunan, perizinan berusaha pemanfaatan hutan, KKKS migas, pemegang izin panas bumi, dan pemegang IUP/IUPK. Subjek atas bumi dan atas bangunan pada satu areal dapat berbeda.",
        "Bila wajib pajak suatu objek belum jelas, DJP dapat menetapkan subjek pajak sebagai wajib pajak (Pasal 4 ayat (3)); yang ditetapkan dapat memberi keterangan tertulis bahwa ia bukan wajib pajak, dan bila DJP tidak memutus dalam satu bulan sejak keterangan diterima, keterangan dianggap disetujui (Pasal 4 ayat (4)–(7)).",
        "Pendaftaran dilakukan dengan mengisi SPOP (dan LSPOP untuk bangunan) secara jelas, benar, lengkap, ditandatangani, dan disampaikan kepada DJP yang wilayah kerjanya meliputi letak objek paling lambat 30 hari setelah SPOP diterima subjek pajak (Pasal 9).",
        "Keadaan objek yang menentukan pajak terutang adalah keadaan pada 1 Januari tahun pajak (Pasal 8 ayat (2)); tempat pajak terutang adalah kabupaten/kota letak objek (Pasal 8 ayat (3)); objek baru atau perubahan data dilaporkan dengan SPOP/LSPOP dan baru memengaruhi tahun pajak berikutnya.",
        "Sejak Coretax (PMK 81/2024), administrasi PBB-P5L (pendaftaran, penyampaian data, pembayaran) dilakukan secara elektronik dengan NPWP 16 digit; objek diidentifikasi dengan Nomor Objek Pajak (NOP) per letak dan sektor."
      ],
      poinKunci: [
        { label: "Penyampaian SPOP", nilai: "≤ 30 hari setelah SPOP diterima", dasar: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Saat yang menentukan pajak terutang", nilai: "keadaan objek 1 Januari", dasar: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Tempat pajak terutang", nilai: "kabupaten/kota letak objek", dasar: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Keterangan 'bukan wajib pajak'", nilai: "diputus ≤ 1 bulan; lewat = dianggap disetujui", dasar: "Pasal 4 ayat (4)–(7) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "SPOP tidak dikembalikan setelah ditegur", nilai: "SKP + denda 25% dari pokok", dasar: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Sektor PBB-P5L", nilai: "perkebunan, perhutanan, migas, panas bumi, minerba, sektor lainnya", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 1, 2, dan 4 UU PBB", catatan: "definisi bumi dan bangunan, objek, subjek pajak, penetapan wajib pajak" },
        { pasal: "Pasal 8–9 UU PBB", catatan: "keadaan 1 Januari, tempat terutang, SPOP 30 hari" },
        { pasal: "Pasal 38 ayat (1) UU 1/2022", catatan: "objek PBB-P2 daerah mengecualikan kawasan usaha perkebunan, perhutanan, pertambangan" },
        { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", catatan: "klasifikasi sektor PBB-P5L" },
        { pasal: "PMK 81/2024", catatan: "administrasi elektronik di Coretax" }
      ],
      jebakan: [
        { teks: "Menghitung batas SPOP sebagai 'satu bulan' atau sejak 1 Januari; yang benar 30 hari setelah tanggal SPOP diterima", tagSebab: "salah-baca" },
        { teks: "Mendaftarkan kantor pusat perusahaan perkebunan di kota sebagai objek PBB-P5L; bangunan di luar kawasan usaha adalah PBB-P2 daerah", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap subjek atas bumi otomatis juga subjek atas bangunan milik pihak lain di atasnya", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT Geo Panas Selatan menerima SPOP sektor panas bumi pada 14 Juli 2026. Paling lambat kapan SPOP harus disampaikan, dan apa akibatnya bila SPOP tetap tidak disampaikan setelah ditegur secara tertulis?",
        jawaban: "13 Agustus 2026; DJP dapat menerbitkan SKP berisi pokok pajak ditambah denda 25% dari pokok",
        langkah: [ ["SPOP diterima", "14 Juli 2026"], ["30 hari kemudian (17 hari Juli + 13 hari Agustus)", "13 Agustus 2026"], ["Tidak disampaikan setelah teguran", "SKP Pasal 10 ayat (2) huruf a"], ["Jumlah SKP", "pokok + 25% × pokok"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "B8.2", slug: "objek-dikecualikan", judul: "Objek yang dikecualikan dari PBB",
      estimasiMenit: 10, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Pasal 3 ayat (1) UU PBB mengecualikan objek yang: (a) digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan, dan kebudayaan nasional yang tidak dimaksudkan untuk memperoleh keuntungan; (b) digunakan untuk kuburan, peninggalan purbakala, atau yang sejenis; (c) merupakan hutan lindung, hutan suaka alam, hutan wisata, taman nasional, tanah penggembalaan yang dikuasai desa, dan tanah negara yang belum dibebani suatu hak; (d) digunakan perwakilan diplomatik/konsulat berdasarkan asas timbal balik; (e) digunakan badan atau perwakilan organisasi internasional yang ditentukan Menteri Keuangan.",
        "Syarat huruf a kumulatif: penggunaannya semata-mata untuk kepentingan umum dan tidak mencari keuntungan; masjid atau sekolah umum nirlaba di emplasemen kebun dikecualikan, sedangkan klinik atau sekolah yang dikelola komersial tetap objek.",
        "Tanah negara yang sudah dibebani hak (HGU, perizinan pemanfaatan hutan, IUP) menjadi objek; pengecualian huruf c hanya untuk tanah negara yang belum dibebani suatu hak.",
        "Status pengecualian diuji pada keadaan 1 Januari (Pasal 8 ayat (2)): perubahan penggunaan di tengah tahun baru berpengaruh pada tahun pajak berikutnya.",
        "Luas areal yang dikecualikan (mis. pemakaman, masjid umum) dikeluarkan dari luas kena pajak sebelum dikalikan nilai per m²; bangunan yang dikecualikan tidak masuk NJOP bangunan.",
        "Pengecualian objek berbeda dengan NJOPTKP (pengurang tetap NJOP per wajib pajak) dan dengan pengurangan PBB (keringanan atas permohonan, Pasal 19); benda bergerak seperti truk atau alat berat yang tidak melekat bukan bangunan sama sekali."
      ],
      poinKunci: [
        { label: "Kepentingan umum (ibadah, sosial, kesehatan, pendidikan, kebudayaan)", nilai: "dikecualikan bila semata-mata dan nirlaba", dasar: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Kuburan, peninggalan purbakala", nilai: "dikecualikan", dasar: "Pasal 3 ayat (1) huruf b UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Hutan lindung, suaka alam, hutan wisata, taman nasional, tanah penggembalaan desa", nilai: "dikecualikan", dasar: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Tanah negara", nilai: "dikecualikan hanya bila belum dibebani hak", dasar: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Perwakilan diplomatik; organisasi internasional", nilai: "dikecualikan (timbal balik; ditetapkan Menkeu)", dasar: "Pasal 3 ayat (1) huruf d–e UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Benda bergerak (truk, alat berat tidak melekat)", nilai: "bukan bangunan", dasar: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3 ayat (1) UU PBB", catatan: "lima kelompok objek yang tidak dikenakan pajak" },
        { pasal: "Pasal 3 ayat (2) UU PBB", catatan: "objek yang digunakan negara untuk penyelenggaraan pemerintahan diatur dengan PP" },
        { pasal: "Pasal 1 angka 2 UU PBB dan penjelasannya", catatan: "definisi bangunan (termasuk pipa, tangki, dermaga, jalan dalam kawasan)" },
        { pasal: "Pasal 8 ayat (2) UU PBB", catatan: "pengujian status per 1 Januari" }
      ],
      jebakan: [
        { teks: "Menganggap semua fasilitas sosial di kebun dikecualikan, termasuk klinik atau sekolah yang dikelola untuk mencari laba", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira tanah negara selalu dikecualikan, padahal setelah dibebani HGU/izin menjadi objek", tagSebab: "salah-baca" },
        { teks: "Menyamakan pengecualian objek dengan NJOPTKP atau pengurangan PBB", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Areal emplasemen kebun PT Sawit Tunas Mandiri seluas 40 ha (nilai Rp15.000/m²) memuat pemakaman umum 1,5 ha dan masjid umum nirlaba 0,5 ha. Berapa NJOP bumi emplasemen yang dikenai PBB?",
        jawaban: "Rp5.700.000.000",
        langkah: [ ["Luas emplasemen", "40 ha"], ["Dikurangi pemakaman 1,5 ha dan masjid umum 0,5 ha", "38 ha = 380.000 m²"], ["380.000 m² × Rp15.000", "Rp5.700.000.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "B8.3", slug: "njop-njkp-njoptkp", judul: "NJOP, NJKP, NJOPTKP, dan tarif",
      estimasiMenit: 12, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "Dasar pengenaan PBB adalah NJOP (Pasal 6 ayat (1)); NJOP adalah harga rata-rata transaksi jual beli yang wajar, dan bila tidak ada transaksi ditentukan melalui perbandingan harga objek sejenis, nilai perolehan baru, atau NJOP pengganti (Pasal 1 angka 3).",
        "NJOP ditetapkan Menteri Keuangan setiap tiga tahun, kecuali untuk daerah tertentu ditetapkan setiap tahun sesuai perkembangan daerahnya (Pasal 6 ayat (2)); keberatan atas NJOP dalam SPPT diajukan melalui Pasal 15.",
        "Dasar penghitungan (NJKP) ditetapkan 20%–100% dari NJOP (Pasal 6 ayat (3)); PP 25/2002 menetapkan 40% untuk objek perkebunan, kehutanan, dan pertambangan, sedangkan objek lainnya 40% bila NJOP ≥ Rp1.000.000.000 dan 20% bila NJOP < Rp1.000.000.000.",
        "Tarif tunggal 0,5% (Pasal 5) dikalikan dengan NJKP (Pasal 7); untuk sektor perkebunan, perhutanan, dan pertambangan tarif efektifnya 0,5% × 40% = 0,2% × (NJOP − NJOPTKP).",
        "NJOPTKP PBB-P5L Rp12.000.000 per wajib pajak (PMK 23/PMK.03/2014, sebelumnya KMK 201/KMK.04/2000; angka asal UU 12/1994 Rp8.000.000). Bila wajib pajak memiliki beberapa objek, NJOPTKP diberikan sekali pada objek dengan NJOP terbesar; objek lain dikenai penuh (penjelasan Pasal 3 ayat (3)).",
        "Parameter PBB-P2 daerah menurut UU 1/2022 dan Perda (NJOPTKP paling sedikit Rp10.000.000, mis. DKI Rp60.000.000; NJKP 20%–100%; tarif paling tinggi 0,5%) tidak dipakai untuk PBB-P5L."
      ],
      poinKunci: [
        { label: "Tarif PBB", nilai: "0,5%", dasar: "Pasal 5 UU PBB", berlakuSejak: "1995-01-01" },
        { label: "NJKP perkebunan, perhutanan, pertambangan", nilai: "40% dari NJOP", dasar: "PP 25/2002" },
        { label: "NJKP objek lainnya", nilai: "40% bila NJOP ≥ Rp1 miliar; 20% bila < Rp1 miliar", dasar: "PP 25/2002" },
        { label: "NJOPTKP PBB-P5L", nilai: "Rp12.000.000 per wajib pajak", dasar: "PMK 23/PMK.03/2014" },
        { label: "NJOPTKP untuk beberapa objek", nilai: "sekali, pada objek ber-NJOP terbesar", dasar: "Penjelasan Pasal 3 ayat (3) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Rumus ringkas sektor P3", nilai: "0,2% × (NJOP − NJOPTKP)", dasar: "Pasal 5–7 UU PBB; PP 25/2002" },
        { label: "Penetapan NJOP", nilai: "setiap 3 tahun; daerah tertentu setiap tahun", dasar: "Pasal 6 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 1 angka 3 UU PBB", catatan: "definisi NJOP" },
        { pasal: "Pasal 5, 6, dan 7 UU PBB", catatan: "tarif 0,5%, NJOP, NJKP 20%–100%, cara menghitung" },
        { pasal: "Pasal 3 ayat (3) UU PBB dan penjelasannya", catatan: "NJOPTKP satu kali per wajib pajak" },
        { pasal: "PP 25/2002", catatan: "NJKP 40% (P3) dan 40%/20% (objek lainnya)" },
        { pasal: "PMK 23/PMK.03/2014", catatan: "NJOPTKP Rp12.000.000" }
      ],
      jebakan: [
        { teks: "Mengalikan 0,5% langsung ke NJOP tanpa NJKP 40%", tagSebab: "salah-hitung" },
        { teks: "Memakai NJOPTKP PBB-P2 (Rp10 juta minimum UU HKPD atau Rp60 juta DKI) atau angka lama Rp8 juta", tagSebab: "angka-usang" },
        { teks: "Mengurangkan NJOPTKP pada setiap objek atau setiap areal, padahal sekali per wajib pajak", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Objek PBB sektor perkebunan milik PT Agro Jaya (satu-satunya objek) memiliki NJOP bumi Rp50.000.000.000 dan NJOP bangunan Rp2.000.000.000. Berapa PBB-P5L terutang?",
        jawaban: "Rp103.976.000",
        langkah: [ ["NJOP objek", "Rp52.000.000.000"], ["Dikurangi NJOPTKP", "Rp51.988.000.000"], ["NJKP 40%", "Rp20.795.200.000"], ["PBB 0,5%", "Rp103.976.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "B8.4", slug: "hitung-per-sektor", judul: "Penghitungan PBB per sektor",
      estimasiMenit: 18, jenisDominan: ["hitung", "kasus"],
      ringkasan: [
        "PMK 186/2019 s.t.d.d. PMK 234/2022 membagi objek PBB-P5L ke dalam sektor perkebunan, perhutanan, pertambangan migas, pertambangan panas bumi, pertambangan minerba, dan sektor lainnya; tiap sektor punya klasifikasi areal dan cara menentukan NJOP bumi sendiri.",
        "Perkebunan (Pasal 14 PMK 186/2019): bumi dibagi areal produktif (telah ditanami, termasuk tanaman yang belum menghasilkan), areal belum produktif (belum ditanami: belum diolah, sudah diolah tetapi belum ditanami, atau pembibitan), areal tidak produktif (tidak dapat diusahakan), areal pengaman, dan areal emplasemen; NJOP areal produktif = tanah ditambah pengembangan tanah berupa tanaman yang dihitung dengan Biaya Investasi Tanaman (di soal disebut SIT), sedangkan areal lain dinilai dengan nilai tanah per m².",
        "Perhutanan (Pasal 15 PMK 186/2019): areal produktif hutan tanaman adalah areal yang telah ditanami dan dinilai nilai tanah ditambah Biaya Investasi Tanaman (SIT), sedangkan areal yang belum ditanami adalah areal belum produktif; areal produktif hutan alam (blok tebangan) memakai Nilai Jual Pengganti (pendapatan bersih hasil hutan × angka kapitalisasi); areal lain dinilai dengan nilai tanah atau nilai yang ditetapkan Dirjen Pajak.",
        "Pertambangan (migas, panas bumi, minerba): bumi terdiri atas permukaan bumi onshore (dibagi beberapa jenis areal; pada minerba: belum dimanfaatkan, cadangan produksi, tidak produktif, pengaman, emplasemen), permukaan bumi offshore (NJOP ditetapkan dengan Keputusan Dirjen Pajak), dan tubuh bumi; tubuh bumi tahap produksi dinilai dengan Nilai Jual Pengganti: pendapatan × angka kapitalisasi (migas: pendapatan minyak dan/atau gas bumi; minerba: pendapatan bersih).",
        "Bangunan di kawasan usaha (pabrik kelapa sawit, kilang, pipa, tangki timbun, dermaga, conveyor, perumahan karyawan, jalan kebun/tambang) dinilai dengan pendekatan biaya (nilai perolehan baru dikurangi penyusutan) dan dijumlahkan ke NJOP objek.",
        "Sektor lainnya (perairan yang digunakan untuk perikanan tangkap dan pembudidayaan ikan yang telah memiliki Surat Izin Usaha Perikanan, jaringan pipa, jaringan kabel, serta fasilitas penyimpanan dan pengolahan terapung seperti FSO, FPSO, dan FSRU; bangunannya hanya jaringan pipa, jaringan kabel, dan fasilitas tersebut, Pasal 8 dan Pasal 9 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022) memakai NJKP menurut batas NJOP Rp1 miliar (40%/20%); pada sektor lainnya, areal perairan adalah bumi dan bangunannya terbatas pada jaringan pipa, jaringan kabel, serta fasilitas penyimpanan dan pengolahan terapung tersebut, sedangkan kapal adalah benda bergerak; anjungan migas lepas pantai bukan sektor lainnya, melainkan bangunan dalam kawasan pertambangan migas (Pasal 9 ayat (1) huruf c PMK 186/2019).",
        "Urutan baku: (1) luas kena pajak per areal × nilai per m² (+SIT bila produktif) → NJOP bumi; (2) + NJOP bangunan; (3) − NJOPTKP sekali; (4) × NJKP; (5) × 0,5%."
      ],
      poinKunci: [
        { label: "Areal produktif perkebunan (telah ditanami, termasuk tanaman yang belum menghasilkan)", nilai: "luas × (nilai tanah + Biaya Investasi Tanaman, di soal disebut SIT)", dasar: "Pasal 14 ayat (1) huruf a dan ayat (2) huruf a PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" },
        { label: "Areal belum produktif (belum ditanami), tidak produktif, emplasemen", nilai: "luas × nilai tanah per m² (perbandingan harga dengan objek sejenis), tanpa SIT", dasar: "Pasal 14 ayat (1) huruf b, c, dan e serta ayat (2) huruf b, c, dan e PMK 186/PMK.03/2019", berlakuSejak: "2020-01-01" },
        { label: "Areal pengaman perkebunan", nilai: "areal pendukung dan pengaman usaha kebun; dinilai dengan penyesuaian terhadap NJOP bumi per m² areal belum produktif", dasar: "Pasal 14 ayat (1) huruf d dan ayat (2) huruf d PMK 186/PMK.03/2019", berlakuSejak: "2020-01-01" },
        { label: "Tubuh bumi pertambangan (eksploitasi atau operasi produksi)", nilai: "Nilai Jual Pengganti = pendapatan × Angka Kapitalisasi; migas: pendapatan minyak dan/atau gas bumi (penjualan kotor); panas bumi: pendapatan uap dan/atau listrik; minerba: pendapatan bersih", dasar: "Pasal 17 ayat (7), Pasal 18 ayat (1), Pasal 19 ayat (7), Pasal 20 ayat (1), dan Pasal 21 ayat (7) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" },
        { label: "Konversi luas", nilai: "1 ha = 10.000 m²", dasar: "satuan baku penilaian" },
        { label: "Bangunan kawasan usaha", nilai: "masuk NJOP objek (pendekatan biaya)", dasar: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }
      ],
      dasarHukum: [
        { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", catatan: "klasifikasi objek dan tata cara penetapan NJOP per sektor" },
        { pasal: "Pasal 1 angka 1–2 dan Pasal 6 UU PBB", catatan: "bumi termasuk tubuh bumi; bangunan; NJOP" },
        { pasal: "PP 25/2002", catatan: "NJKP 40%" },
        { pasal: "PMK 23/PMK.03/2014", catatan: "NJOPTKP" }
      ],
      jebakan: [
        { teks: "Menambahkan SIT pada areal belum produktif atau emplasemen", tagSebab: "salah-hitung" },
        { teks: "Melupakan tubuh bumi pada objek pertambangan atau NJOP bangunan (pabrik, perumahan, jalan) dalam kawasan", tagSebab: "salah-baca" },
        { teks: "Salah konversi hektare ke m² (1 ha = 10.000 m²)", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Kebun sawit (satu-satunya objek): areal produktif 2.000 ha (nilai tanah Rp3.500/m², SIT Rp5.200/m²), belum produktif 300 ha (Rp3.500/m²), emplasemen 50 ha (Rp12.000/m²), bangunan Rp18.500.000.000. Berapa PBB-P5L?",
        jawaban: "Rp417.976.000",
        langkah: [ ["Produktif 20.000.000 m² × 8.700", "Rp174.000.000.000"], ["Belum produktif 3.000.000 m² × 3.500", "Rp10.500.000.000"], ["Emplasemen 500.000 m² × 12.000", "Rp6.000.000.000"], ["NJOP bumi + bangunan", "Rp209.000.000.000"], ["− NJOPTKP", "Rp208.988.000.000"], ["× 40% × 0,5%", "Rp417.976.000"] ]
      },
      verifikasi: "✅"
    },
    {
      id: "B8.5", slug: "sppt-skp-stp-pbb", judul: "SPPT, SKP PBB, dan STP PBB",
      estimasiMenit: 14, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "PBB adalah pajak yang ditetapkan: berdasarkan SPOP, DJP menerbitkan SPPT (Pasal 10 ayat (1)); SPPT bukan bukti pemilikan hak dan tidak dihitung sendiri oleh wajib pajak.",
        "SKP dapat diterbitkan bila (a) SPOP tidak disampaikan dalam 30 hari dan setelah ditegur secara tertulis tetap tidak disampaikan sesuai batas surat teguran; atau (b) hasil pemeriksaan atau keterangan lain menunjukkan pajak terutang lebih besar daripada yang dihitung berdasarkan SPOP (Pasal 10 ayat (2)).",
        "SKP huruf a = pokok pajak + denda administrasi 25% dari pokok; SKP huruf b = selisih pajak + denda 25% dari selisih (Pasal 10 ayat (3)–(4)). Denda 25% ini bukan kenaikan Pasal 13 UU KUP.",
        "SPPT harus dilunasi paling lambat 6 bulan sejak tanggal diterimanya SPPT; SKP paling lambat 1 bulan sejak diterima (Pasal 11 ayat (1)–(2)).",
        "Pajak yang tidak atau kurang dibayar pada jatuh tempo dikenai denda 2% sebulan dari jatuh tempo sampai hari pembayaran, paling lama 24 bulan (maksimum 48%); denda ditambah utang yang belum dibayar ditagih dengan STP yang harus dilunasi 1 bulan sejak diterima (Pasal 11 ayat (3)–(4)).",
        "UU Cipta Kerja (berlaku 2 November 2020, dipertahankan UU HPP) mengubah sanksi bunga UU KUP menjadi tarif bunga per bulan dari KMK, tetapi tidak mengubah UU PBB; denda keterlambatan PBB-P5L tetap 2% sebulan."
      ],
      poinKunci: [
        { label: "Jatuh tempo SPPT", nilai: "6 bulan sejak SPPT diterima", dasar: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Jatuh tempo SKP", nilai: "1 bulan sejak SKP diterima", dasar: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Jatuh tempo STP", nilai: "1 bulan sejak STP diterima", dasar: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Denda dalam SKP", nilai: "25% dari pokok (huruf a) atau selisih (huruf b)", dasar: "Pasal 10 ayat (3)–(4) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Denda keterlambatan bayar", nilai: "2% sebulan, paling lama 24 bulan", dasar: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 10 UU PBB", catatan: "SPPT dan SKP, denda 25%" },
        { pasal: "Pasal 11 UU PBB", catatan: "jatuh tempo SPPT/SKP/STP, denda 2% sebulan maks 24 bulan" },
        { pasal: "Pasal 9 ayat (2a) UU KUP", catatan: "pembanding: sanksi bunga KUP berbasis KMK, tidak berlaku untuk PBB" }
      ],
      jebakan: [
        { teks: "Memakai tarif bunga KMK atau kenaikan Pasal 13 UU KUP untuk PBB-P5L", tagSebab: "lupa-pasal" },
        { teks: "Menghitung jatuh tempo SPPT sejak tanggal terbit atau 1 Januari, bukan sejak diterima", tagSebab: "salah-baca" },
        { teks: "Menghitung denda 25% SKP huruf b dari seluruh pajak, bukan dari selisih", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "SPPT PBB-P5L 2026 sebesar Rp240.000.000 diterima pada 12 Maret 2026 dan baru dibayar pada 30 Oktober 2026 (bagian bulan dihitung satu bulan). Berapa denda yang ditagih dengan STP?",
        jawaban: "Rp9.600.000",
        langkah: [ ["Jatuh tempo (6 bulan sejak diterima)", "11 September 2026"], ["11 September s.d. 30 Oktober 2026", "1 bulan 19 hari → 2 bulan"], ["Denda 2 × 2% × 240.000.000", "Rp9.600.000"] ]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: bagian dari bulan pada denda Pasal 11 ayat (3) UU PBB dihitung penuh satu bulan (Penjelasan Pasal 11 ayat (3)) dan cara hitung jatuh tempo (Penjelasan Pasal 11 ayat (1) dan (2)). Bentuk elektronik SPPT/SKP/STP di Coretax belum dicek."
    },
    {
      id: "B8.6", slug: "keberatan-pengurangan-pbb", judul: "Keberatan, banding, pengurangan, pembetulan, dan pembatalan PBB",
      estimasiMenit: 12, jenisDominan: ["prosedur", "kasus"],
      ringkasan: [
        "Wajib pajak dapat mengajukan keberatan kepada DJP atas SPPT dan SKP (Pasal 15 ayat (1)); STP tidak termasuk objek keberatan. Keberatan diajukan tertulis dalam bahasa Indonesia dengan alasan yang jelas (ayat (2)).",
        "Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal diterimanya SPPT/SKP, kecuali wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya (Pasal 15); pengajuan keberatan tidak menunda kewajiban membayar.",
        "DJP memberi keputusan paling lama 12 bulan sejak surat keberatan diterima; keputusan dapat menerima seluruhnya/sebagian, menolak, atau menambah pajak terutang; bila 12 bulan lewat tanpa keputusan, keberatan dianggap diterima (Pasal 16).",
        "Atas keputusan keberatan dapat diajukan banding ke Pengadilan Pajak paling lambat 3 bulan sejak keputusan diterima (Pasal 35 ayat (2) UU 14/2002).",
        "Pengurangan (Pasal 19 ayat (1)): atas permohonan wajib pajak, Menteri Keuangan dapat memberi pengurangan (a) karena kondisi tertentu objek yang ada hubungannya dengan subjek pajak dan/atau sebab tertentu lainnya, atau (b) karena objek terkena bencana alam atau sebab lain yang luar biasa; PMK 129/2023 (menggantikan PMK 82/PMK.03/2017) membatasi pengurangan karena kondisi tertentu paling tinggi 75%, dan karena bencana alam atau sebab lain yang luar biasa paling tinggi 100% dari PBB yang belum dilunasi; permohonan karena bencana diajukan pada tahun terjadinya bencana.",
        "Keberatan dipakai bila penetapan tidak benar (luas, NJOP, subjek); pengurangan dipakai bila penetapan benar tetapi wajib pajak membutuhkan keringanan, misalnya objek rusak karena bencana setelah 1 Januari.",
        "Upaya hukum non keberatan PBB-P5L (PMK 118/2024 s.t.d.d. PMK 71/2026): (a) pembetulan SPPT, SKP PBB, atau STP PBB yang memuat kesalahan tulis (nama, alamat, NOP, tanggal jatuh tempo), kesalahan hitung (penjumlahan, pengurangan, perkalian, pembagian), dan/atau kekeliruan penerapan ketentuan, karena jabatan atau atas permohonan; (b) pengurangan PBB karena kondisi tertentu atau bencana (Pasal 19 UU PBB; tata caranya diatur tersendiri dalam PMK 129/2023); (c) pengurangan sebagian atau seluruh denda administratif PBB karena hal-hal tertentu, misalnya denda yang dikenakan karena kekhilafan wajib pajak atau bukan karena kesalahannya (Pasal 20 UU PBB; Pasal 21 huruf a PMK 118/2024); (d) pengurangan atau pembatalan SPPT atau SKP PBB yang tidak benar, dan pembatalan STP PBB yang tidak benar (Pasal 21 huruf b dan c PMK 118/2024).",
        "Memilih jalur: salah tulis atau salah hitung yang tampak dari dokumen → pembetulan; sengketa materi (luas, NJOP, subjek) yang masih dalam 3 bulan → keberatan; tenggat keberatan lewat atau keberatan tidak dipertimbangkan → pengurangan atau pembatalan ketetapan yang tidak benar; penetapan benar tetapi objek terkena bencana atau kondisi tertentu → pengurangan PBB; denda 2% sebulan atau 25% yang timbul karena kekhilafan atau bukan kesalahan wajib pajak → pengurangan denda administratif. STP PBB bukan objek keberatan, sehingga STP yang tidak benar diselesaikan melalui pembetulan atau pembatalan.",
        "Pengurangan atau pembatalan SKP PBB yang tidak benar hanya dapat diajukan bila wajib pajak tidak mengajukan keberatan atau keberatannya tidak dipertimbangkan; banding tidak tersedia karena tidak ada keputusan keberatan. Pengurangan denda administratif PBB hanya diberikan atas denda yang belum dibayar, dan pokok PBB yang menjadi dasar denda dalam STP PBB harus sudah dilunasi; sejak PMK 71/2026 (berlaku 2 Oktober 2026) pembayaran atas STP PBB diperhitungkan lebih dulu terhadap pokok, dan kelebihannya baru terhadap denda. Keputusan atas permohonan pembetulan, pengurangan denda, serta pengurangan atau pembatalan ketetapan diterbitkan paling lama 6 bulan sejak permohonan diterima; jangka waktu keputusan pengurangan PBB Pasal 19 mengikuti PMK 129/2023."
      ],
      poinKunci: [
        { label: "Objek keberatan", nilai: "SPPT dan SKP", dasar: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Batas keberatan", nilai: "3 bulan sejak SPPT/SKP diterima", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Keputusan keberatan", nilai: "≤ 12 bulan; lewat = dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Banding", nilai: "≤ 3 bulan sejak keputusan diterima", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "Pengurangan", nilai: "atas permohonan: kondisi tertentu atau bencana", dasar: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Batas pengurangan PBB", nilai: "kondisi tertentu ≤ 75%; bencana alam atau sebab lain yang luar biasa ≤ 100% dari PBB yang belum dilunasi; permohonan karena bencana diajukan pada tahun terjadinya bencana; keputusan paling lama 4 bulan sejak permohonan diterima", dasar: "Pasal 4 ayat (3), Pasal 5 ayat (5), dan Pasal 13 ayat (4) PMK 129/2023", berlakuSejak: "2023-12-30" },
        { label: "Pengurangan denda administratif PBB", nilai: "kekhilafan atau bukan kesalahan WP; atas denda yang belum dibayar; pokok PBB dasar denda dalam STP PBB sudah lunas; pembayaran STP PBB diperhitungkan ke pokok lebih dulu (sejak PMK 71/2026)", dasar: "Pasal 20 UU PBB; PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 23 ayat (5) huruf a, ayat (6), dan ayat (7)", berlakuSejak: "2026-10-02" },
        { label: "Upaya hukum non keberatan PBB", nilai: "Pembetulan · pengurangan PBB · pengurangan denda administratif · pengurangan/pembatalan SPPT dan SKP PBB yang tidak benar · pembatalan STP PBB yang tidak benar", dasar: "Pasal 19 dan 20 UU PBB; PMK 129/2023 (pengurangan PBB); PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" },
        { label: "Pembetulan SPPT/SKP/STP PBB", nilai: "Kesalahan tulis, hitung, atau kekeliruan penerapan ketentuan; jabatan atau permohonan", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" },
        { label: "Pembatalan SKP PBB tidak benar", nilai: "Hanya bila tidak diajukan keberatan atau keberatan tidak dipertimbangkan", dasar: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" },
        { label: "Keputusan permohonan non keberatan (PMK 118/2024)", nilai: "≤ 6 bulan sejak permohonan diterima: pembetulan, pengurangan denda, pengurangan/pembatalan ketetapan; pengurangan PBB Pasal 19 mengikuti PMK 129/2023", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 15–16 UU PBB", catatan: "keberatan dan keputusannya" },
        { pasal: "Pasal 19 UU PBB", catatan: "pengurangan PBB" },
        { pasal: "Pasal 35 ayat (2) UU 14/2002", catatan: "jangka waktu banding" },
        { pasal: "PMK 118/2024; PMK 129/2023 (pemberian pengurangan PBB; menggantikan PMK 82/PMK.03/2017)", catatan: "tata cara keberatan (PMK 118/2024) dan pengurangan PBB (PMK 129/2023)" },
        { pasal: "Pasal 20 UU PBB", catatan: "pengurangan denda administratif PBB (sebagian atau seluruh) karena hal-hal tertentu atas permintaan wajib pajak" },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", catatan: "pembetulan, pengurangan denda, pengurangan/pembatalan SPPT dan SKP PBB yang tidak benar, serta pembatalan STP PBB yang tidak benar" }
      ],
      jebakan: [
        { teks: "Mengajukan keberatan untuk kerusakan objek setelah 1 Januari; jalurnya pengurangan, bukan keberatan", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira keputusan keberatan yang lewat 12 bulan dianggap ditolak; yang benar dianggap diterima", tagSebab: "salah-baca" },
        { teks: "Menunda pembayaran SPPT/SKP karena sedang keberatan, lalu kaget dikenai denda 2% sebulan", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "SPPT PBB-P5L 2026 diterima 23 Februari 2026 dan surat keberatan diterima KPP pada 4 Mei 2026. Kapan batas keberatan, dan kapan DJP paling lambat harus memutus?",
        jawaban: "Keberatan paling lambat diajukan 22 Mei 2026; keputusan paling lambat 3 Mei 2027",
        langkah: [ ["3 bulan sejak SPPT diterima 23 Februari 2026", "22 Mei 2026"], ["Surat keberatan diterima", "4 Mei 2026 (tepat waktu)"], ["12 bulan sejak surat keberatan diterima", "3 Mei 2027"], ["Lewat tanpa keputusan", "dianggap diterima"] ]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: Pasal 15, 16, 19, dan 20 UU PBB; Pasal 35 ayat (2) UU 14/2002; Pasal 4 ayat (3), Pasal 5 ayat (5), dan Pasal 13 ayat (4) PMK 129/2023; Pasal 6 ayat (1), Pasal 21, Pasal 29 ayat (1), Pasal 35 ayat (1), dan Pasal 41 ayat (1) PMK 118/2024. Kasus K-B8-06 dan soal B8-061 sudah mengikuti pengurangan dari PBB yang belum dilunasi. Cara hitung 'N bulan sejak' mengikuti contoh Penjelasan Pasal 11 ayat (1) dan (2) UU PBB (hari terakhir sehari sebelum tanggal yang sama). Yang belum pasti: stem V-B8-09 (B8-104) masih perlu disusun ulang."
    },
    {
      id: "B8.7", slug: "pembayaran-penagihan-restitusi-pbb", judul: "Pembayaran, penagihan, dan restitusi PBB",
      estimasiMenit: 12, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "PBB-P5L dibayar ke kas negara melalui bank, kantor pos, dan tempat lain yang ditunjuk Menteri Keuangan (Pasal 11 ayat (5) UU PBB); sejak Coretax (PMK 81/2024) pembayaran memakai kode billing dengan NPWP 16 digit dan NOP, dan NTPN pada bukti penerimaan negara menjadi tanda pelunasan.",
        "Tanda pelunasan PBB bukan bukti pemilikan hak atas tanah (penjelasan Pasal 4 ayat (1)).",
        "Dasar penagihan adalah SPPT, SKP, dan STP; utang yang tidak dilunasi sampai jatuh tempo ditagih dengan urutan UU PPSP: Surat Teguran (setelah lewat 7 hari dari jatuh tempo), Surat Paksa (setelah lewat 21 hari sejak Surat Teguran), penyitaan bila tidak dilunasi dalam 2 × 24 jam setelah Surat Paksa diberitahukan, lalu lelang.",
        "Kelebihan pembayaran PBB dikembalikan setelah diperhitungkan lebih dahulu dengan utang pajak yang masih ada: pembayaran ganda atau pembayaran yang lebih besar daripada pajak terutang diminta kembali dengan permohonan (Pasal 123 dan Pasal 124 ayat (1) PMK 81/2024), sedangkan kelebihan karena keputusan keberatan, putusan banding, keputusan pembetulan, keputusan pengurangan atau pembatalan ketetapan, keputusan pengurangan denda, atau keputusan pemberian pengurangan PBB dikembalikan dengan Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak paling lama 1 bulan sejak keputusan diterbitkan atau putusan banding diterima DJP (Pasal 139 ayat (2) dan Pasal 145 ayat (3) PMK 81/2024). Pengurangan PBB Pasal 19 hanya diberikan dari PBB yang belum dilunasi (Pasal 4 ayat (3) PMK 129/2023), sehingga tidak dapat dipakai untuk meminta kembali PBB yang sudah lunas sebelum permohonan diajukan.",
        "Pembayaran yang lebih besar daripada pajak terutang, misalnya karena salah NOP, tahun pajak, atau jenis pajak, diselesaikan dengan permohonan pemindahbukuan (Pasal 109 ayat (1) huruf d dan ayat (2) PMK 81/2024), bukan keberatan atau pengurangan. Pemindahbukuan itu tidak dapat diajukan bila pembayarannya sudah diperhitungkan dengan pajak terutang dalam SPPT, SKP PBB, atau STP PBB (Pasal 109 ayat (3) huruf f); untuk salah NOP, syaratnya SPPT NOP yang tercantum dalam pembayaran itu sudah lunas sehingga pembayaran tersebut merupakan kelebihan.",
        "Dalam PPh Badan, PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a UU PPh), sedangkan denda STP/SKP PBB tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k)."
      ],
      poinKunci: [
        { label: "Tempat pembayaran", nilai: "kas negara via bank/pos persepsi (kode billing)", dasar: "Pasal 11 ayat (5) UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01" },
        { label: "Surat Teguran → Surat Paksa", nilai: "lewat 7 hari dari jatuh tempo → lewat 21 hari", dasar: "UU PPSP; PMK 61/2023" },
        { label: "Surat Paksa → penyitaan", nilai: "tidak lunas dalam 2 × 24 jam", dasar: "Pasal 11–12 UU 19/1997 s.t.d.d. UU 19/2000", berlakuSejak: "2001-01-01" },
        { label: "PBB dalam PPh Badan", nilai: "dapat dibiayakan; dendanya tidak", dasar: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh" },
        { label: "Tanda lunas PBB", nilai: "bukan bukti pemilikan hak", dasar: "Penjelasan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 11–12 UU PBB", catatan: "jatuh tempo, STP, tempat pembayaran" },
        { pasal: "Pasal 8, 11, dan 12 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", catatan: "Surat Paksa dan penyitaan" },
        { pasal: "PMK 81/2024", catatan: "kode billing, pemindahbukuan, dan pengembalian di Coretax" },
        { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh", catatan: "perlakuan biaya PBB dan denda" }
      ],
      jebakan: [
        { teks: "Membayar PBB-P5L ke kas daerah karena mengira hasilnya milik daerah", tagSebab: "salah-klasifikasi" },
        { teks: "Meminta restitusi penuh tanpa memperhitungkan tunggakan pajak yang masih ada", tagSebab: "salah-baca" },
        { teks: "Membiayakan denda STP PBB dalam rekonsiliasi fiskal", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Pada 2026 PT Kebun Nusa Raya membayar PBB-P5L 2026 Rp312.000.000 dan denda STP PBB 2025 Rp6.240.000; keduanya dibebankan di laporan laba rugi komersial. Berapa koreksi fiskal positifnya?",
        jawaban: "Rp6.240.000 (denda); PBB Rp312.000.000 tetap dapat dibiayakan",
        langkah: [ ["PBB-P5L (pajak selain PPh)", "dapat dibiayakan Rp312.000.000"], ["Denda STP (sanksi administrasi)", "tidak dapat dibiayakan"], ["Koreksi fiskal positif", "Rp6.240.000"] ]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: pengembalian kelebihan pembayaran dan imbalan bunga PBB (Pasal 123 sampai 125, 139, dan 145 PMK 81/2024), pemindahbukuan (Pasal 109 PMK 81/2024), pengurangan PBB hanya dari PBB yang belum dilunasi (Pasal 4 ayat (3) PMK 129/2023), serta jangka Surat Teguran, Surat Paksa, dan penyitaan (Pasal 6 PMK 61/2023). Yang belum ada di naskah: alur pembuatan kode billing PBB-P5L di Coretax dan isian NOP di dalamnya (lihat soal B8-064)."
    },
    {
      id: "B8.8", slug: "bagi-hasil-pbb", judul: "Bagi hasil penerimaan PBB",
      estimasiMenit: 8, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Penerimaan PBB-P5L adalah penerimaan negara (pajak pusat) yang dibagi kepada daerah; Pasal 18 ayat (1) UU PBB menetapkan imbangan sekurang-kurangnya 90% untuk pemerintah daerah, dan sejak UU 1/2022 (HKPD) Pasal 113 DBH PBB ditetapkan 100% untuk daerah: 16,2% provinsi, 73,8% kabupaten/kota penghasil, 10% kabupaten/kota lain dalam provinsi itu (Pasal 113 ayat (2) UU 1/2022; rincian yang sama ada di Pasal 16 PMK 35/2026, yang sejak 25 Mei 2026 mencabut PMK 67/2024). Alokasi per daerah dihitung 90% menurut persentase ini dan 10% menurut kinerja pemerintah daerah (Pasal 120 UU 1/2022; Pasal 17 PMK 35/2026).",
        "Sejak UU 1/2022 (HKPD), bagian daerah disalurkan sebagai Dana Bagi Hasil (DBH) pajak dalam transfer ke daerah; DBH pajak bersumber dari PBB, PPh Pasal 21 dan PPh Pasal 25/29 wajib pajak orang pribadi dalam negeri, serta cukai hasil tembakau.",
        "Royalti/iuran produksi minerba, PSDH kehutanan, dan penerimaan migas/panas bumi dibagihasilkan sebagai DBH sumber daya alam, bukan DBH pajak; PBB-P5L atas tambang tetap DBH pajak.",
        "Porsi terbesar DBH PBB diterima kabupaten/kota penghasil (letak objek, Pasal 8 ayat (3) UU PBB), disusul provinsi yang bersangkutan; domisili atau KPP terdaftar wajib pajak tidak menentukan daerah penerima.",
        "PBB-P2 dan BPHTB adalah pajak daerah sehingga penerimaannya menjadi pendapatan asli daerah (PAD), bukan DBH; bea meterai dan PPN tidak dibagihasilkan.",
        "Bila objek keluar dari kawasan usaha perkebunan/perhutanan/pertambangan, sejak tahun pajak berikutnya objek menjadi PBB-P2 dan penerimaannya menjadi PAD."
      ],
      poinKunci: [
        { label: "Bagian daerah menurut UU PBB", nilai: "sekurang-kurangnya 90% (UU PBB); DBH PBB 100%: 16,2% provinsi · 73,8% kab/kota penghasil · 10% kab/kota lain (UU 1/2022)", dasar: "Pasal 18 ayat (1) UU PBB; Pasal 113 UU 1/2022", berlakuSejak: "2022-01-05" },
        { label: "Sumber DBH pajak", nilai: "PBB, PPh 21 dan 25/29 OP DN, cukai hasil tembakau", dasar: "UU 1/2022", berlakuSejak: "2022-01-05" },
        { label: "Penerima porsi terbesar", nilai: "kabupaten/kota penghasil (letak objek)", dasar: "Pasal 8 ayat (3) dan 18 UU PBB; UU 1/2022" },
        { label: "PBB-P2 dan BPHTB", nilai: "PAD, bukan DBH", dasar: "UU 1/2022", berlakuSejak: "2022-01-05" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 UU PBB", catatan: "pembagian hasil penerimaan PBB" },
        { pasal: "UU 1/2022 (HKPD), bagian Dana Bagi Hasil", catatan: "DBH pajak dan DBH SDA" },
        { pasal: "Pasal 8 ayat (3) UU PBB", catatan: "tempat terutang = letak objek" }
      ],
      jebakan: [
        { teks: "Mengira daerah penerima ditentukan domisili/KPP wajib pajak, bukan letak objek", tagSebab: "salah-baca" },
        { teks: "Memasukkan PBB-P5L tambang ke DBH SDA bersama royalti", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap PBB-P2 dibagihasilkan dari pusat padahal sudah pajak daerah (PAD)", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PBB-P5L kebun PT Agro Kalbar Sejahtera (kebun di Kabupaten Sanggau, wajib pajak terdaftar di Jakarta) sebesar Rp640.000.000 telah dilunasi. Berapa bagian daerah minimal menurut Pasal 18 UU PBB, dan daerah mana penerima terbesar?",
        jawaban: "Minimal Rp576.000.000; penerima terbesar Kabupaten Sanggau",
        langkah: [ ["PBB-P5L dilunasi ke kas negara", "Rp640.000.000"], ["Bagian daerah minimal 90% menurut UU PBB", "Rp576.000.000"], ["DBH PBB menurut UU 1/2022: 100%, porsi kabupaten penghasil 73,8%", "Rp472.320.000"], ["Penerima terbesar", "Kabupaten Sanggau (daerah penghasil)"] ]
      },
      verifikasi: "◐",
      peringatan: "Persentase DBH PBB 16,2% / 73,8% / 10% sudah dicocokkan dengan Pasal 113 ayat (2) UU 1/2022 dan Pasal 16 PMK 35/2026 (pengganti PMK 67/2024). Bunyi Pasal 18 ayat (1) UU PBB (sekurang-kurangnya 90% untuk daerah) dicocokkan dari gambar halaman 357 SDSN 2023 karena lapisan teks naskah di pustaka rusak. Yang belum ada di naskah: aturan bahwa objek yang membentang di dua kabupaten didata dengan NOP terpisah (soal B8-100)."
    }
  ],
  soal: [
    {
      id: "B8-001",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 4 ayat (1) UU PBB: Yang menjadi subjek pajak adalah orang atau badan yang secara nyata mempunyai suatu hak atas bumi, dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan. Pasal 3 ayat (6) PMK 186/PMK.03/2019: Dalam hal terdapat areal pada kawasan perkebunan yang dipunyai haknya dan/atau dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Subjek Pajak atau Wajib Pajak, areal tersebut tidak dikenakan PBB Sektor Perkebunan.",
      stem: "PT Lembah Hijau Perkasa memegang HGU seluas 6.200 ha untuk kebun kelapa sawit di Kabupaten Sanggau. Pada 2024 perusahaan menyewakan 6 ha lahan emplasemen di dalam HGU kepada PT Olah Sawit Mandiri dengan perjanjian sewa yang sah; sejak itu seluruh 6 ha tersebut dikuasai dan dimanfaatkan sepenuhnya oleh PT Olah Sawit Mandiri, yang membangun dan memiliki pabrik kelapa sawit (PKS) di atasnya. Pabrik selesai pada November 2025 dan seluruh tanah tetap tercatat dalam HGU PT Lembah Hijau. Berdasarkan kutipan tersebut, perlakuan PBB-P5L Sektor Perkebunan Tahun Pajak 2026 atas bumi kawasan HGU itu yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Lembah Hijau Perkasa menjadi subjek atas bumi seluruh 6.200 ha, karena seluruh tanah tetap tercatat dalam HGU-nya", B: "PT Lembah Hijau Perkasa menjadi subjek atas bumi 6.194 ha, dan PT Olah Sawit Mandiri menjadi Wajib Pajak PBB Sektor Perkebunan atas bumi 6 ha lahan pabrik", C: "PT Lembah Hijau Perkasa menjadi subjek atas bumi 6.194 ha; lahan pabrik 6 ha tidak dikenakan PBB Sektor Perkebunan karena dimanfaatkan sepenuhnya secara nyata dan sah oleh pihak lain", D: "Tidak ada subjek PBB-P5L, karena tanah HGU tetap berstatus tanah negara sehingga dikecualikan dari PBB" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Subjek atas bumi adalah pihak yang mempunyai hak dan/atau memperoleh manfaat atas bumi (Pasal 4 ayat (1) UU PBB), sehingga pemegang HGU menjadi subjek atas bumi kawasan perkebunannya. Namun Pasal 3 ayat (6) PMK 186/PMK.03/2019 mengeluarkan dari PBB Sektor Perkebunan areal yang dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Wajib Pajak. Lahan 6 ha yang disewakan dan dipakai sepenuhnya oleh PT Olah Sawit Mandiri keluar dari PBB-P5L walaupun masih tercatat dalam HGU; sisa 6.200 − 6 = 6.194 ha tetap objek dengan PT Lembah Hijau sebagai subjek.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tercatat dalam HGU tidak cukup: areal yang dimanfaatkan sepenuhnya secara nyata dan sah oleh pihak lain tidak dikenakan PBB Sektor Perkebunan (Pasal 3 ayat (6) PMK 186/2019)",
          B: "Pasal 3 ayat (6) mengeluarkan areal itu dari PBB Sektor Perkebunan sama sekali; penyewa tidak menjadi Wajib Pajak PBB Sektor Perkebunan atas lahan pabrik",
          D: "Pengecualian tanah negara (Pasal 3 ayat (1) huruf c UU PBB) hanya untuk tanah negara yang belum dibebani suatu hak; tanah ber-HGU adalah objek"
        },
        jebakan: "Status tercatat dalam HGU tidak menentukan sendirian: uji juga siapa yang secara nyata dan sah memanfaatkan sepenuhnya tiap bagian areal."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (2) dan (6) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-002",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Panas Bumi Lintas Selatan, pemegang izin panas bumi yang baru memasuki tahap eksploitasi, menerima formulir SPOP sektor panas bumi beserta LSPOP untuk wilayah kerjanya pada 18 Mei 2026. Formulir harus diisi dengan jelas, benar, dan lengkap serta ditandatangani. Paling lambat kapan SPOP tersebut harus disampaikan kepada Direktorat Jenderal Pajak?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "17 Juni 2026", B: "30 Juni 2026", C: "17 November 2026", D: "31 Desember 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 9 ayat (2) UU PBB: SPOP disampaikan paling lambat 30 hari setelah tanggal diterimanya SPOP oleh subjek pajak; 30 hari setelah 18 Mei 2026 jatuh pada 17 Juni 2026.",
        jejakHitung: [
          ["SPOP diterima", "18 Mei 2026"],
          ["Sisa hari Mei (19–31)", "13 hari"],
          ["Hari di Juni agar genap 30", "17 hari"],
          ["Batas penyampaian", "17 Juni 2026"]
        ],
        mengapaSalah: {
          B: "Menghitung 30 hari dari akhir bulan diterimanya SPOP (31 Mei), padahal patokannya tanggal SPOP diterima",
          C: "Memakai jangka 6 bulan untuk pelunasan PBB berdasarkan SPPT (Pasal 11 ayat (1) UU PBB), bukan tenggat penyampaian SPOP",
          D: "Mengira SPOP dilaporkan tahunan sampai akhir tahun"
        },
        jebakan: "Tenggat SPOP dihitung dalam hari (30 hari setelah SPOP diterima), bukan bulan, dan jangan dicampur dengan jangka 6 bulan pelunasan SPPT."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-003", topik: "B8.1", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "PT Batu Hitam Sejahtera, pemegang IUP operasi produksi batubara di Kabupaten Kutai Barat, menyelesaikan pembangunan dermaga khusus dan conveyor permanen di dalam wilayah IUP pada 20 Februari 2026; nilainya kemudian dinilai sebagai NJOP bangunan Rp36.000.000.000. SPPT PBB-P5L Tahun Pajak 2026 yang diterima perusahaan pada 9 Maret 2026 belum memuat dermaga dan conveyor tersebut. Manajer pajak khawatir SPPT 2026 kurang ditetapkan. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SPPT 2026 kurang; bangunan baru dikenai PBB 2026 secara proporsional untuk 10 bulan (Maret–Desember 2026)", B: "SPPT 2026 kurang; karena bangunan selesai sebelum SPPT diterima, DJP wajib menerbitkan SKP 2026 dengan denda 25%", C: "Dermaga dan conveyor tidak pernah dikenai PBB karena merupakan sarana produksi, bukan bangunan", D: "SPPT 2026 sudah benar karena keadaan objek ditentukan per 1 Januari 2026; dermaga dan conveyor dilaporkan melalui SPOP/LSPOP dan baru dikenai PBB mulai Tahun Pajak 2027" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 8 ayat (2) UU PBB: saat yang menentukan pajak terutang adalah keadaan objek pada 1 Januari. Pada 1 Januari 2026 dermaga belum selesai, sehingga baru masuk penetapan 2027; perubahan data objek tetap dilaporkan dengan SPOP/LSPOP. Dermaga dan conveyor yang dilekatkan secara tetap termasuk bangunan.",
        jejakHitung: [],
        mengapaSalah: { A: "PBB tidak mengenal pengenaan proporsional dalam tahun berjalan; objek dikunci keadaan 1 Januari", B: "SKP Pasal 10 ayat (2) huruf b hanya bila pajak menurut keadaan 1 Januari lebih besar daripada SPOP; dermaga belum ada pada 1 Januari 2026", C: "Konstruksi teknik yang dilekatkan tetap pada tanah atau perairan, termasuk dermaga, adalah bangunan objek PBB" },
        jebakan: "Tanggal selesai bangunan dibandingkan dengan 1 Januari, bukan dengan tanggal SPPT diterima."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-004", topik: "B8.1", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Rimba Nusa Lestari memegang perizinan berusaha pemanfaatan hutan (hutan tanaman) di Kabupaten Pelalawan. Pada 1 Januari 2026 perusahaan menguasai: (1) areal tanaman akasia di dalam areal izin; (2) base camp, mess, dan rumah karyawan di dalam areal izin; (3) gedung kantor perwakilan di Kota Pekanbaru yang berada di luar areal izin; (4) jalan angkut kayu yang dibangun permanen di dalam areal izin. Objek yang PBB-nya bukan PBB-P5L, melainkan PBB-P2 yang dipungut pemerintah daerah, adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "(3) saja", B: "(2) dan (3)", C: "(2), (3), dan (4)", D: "Tidak ada; seluruhnya PBB-P5L karena dikuasai pemegang izin kehutanan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB-P5L mencakup bumi dan bangunan di dalam kawasan yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan pertambangan, termasuk perumahan dan jalan di dalam areal izin. Kantor di luar kawasan usaha adalah objek PBB-P2 daerah menurut Pasal 38 ayat (1) UU 1/2022.",
        jejakHitung: [],
        mengapaSalah: { B: "Rumah karyawan di dalam areal izin tetap bagian objek sektor perhutanan; fungsi hunian tidak memindahkannya ke PBB-P2", C: "Jalan angkut permanen di dalam areal izin adalah bangunan sektor perhutanan", D: "Identitas pemilik tidak menentukan; yang menentukan letak dan penggunaan objek di dalam kawasan usaha" },
        jebakan: "Batas PBB-P5L dan PBB-P2 ditentukan kawasan kegiatan usaha, bukan identitas pemiliknya."
      },
      dasarHukum: [ { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-005",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "Pasal 4 ayat (4), (5), dan (7) UU PBB (parafrase): Subjek pajak yang ditetapkan sebagai wajib pajak dapat memberikan keterangan secara tertulis kepada Direktur Jenderal Pajak bahwa ia bukan wajib pajak terhadap objek pajak dimaksud. Bila keterangan disetujui, Direktur Jenderal Pajak membatalkan penetapan dalam jangka waktu satu bulan sejak diterimanya surat keterangan. Apabila setelah jangka waktu satu bulan sejak tanggal diterimanya keterangan tidak diberikan keputusan, keterangan yang diajukan itu dianggap disetujui.",
      stem: "Karena pemegang izin atas suatu areal tambang pasir kuarsa di Kabupaten Belitung Timur belum jelas, DJP menetapkan CV Damar Jaya sebagai wajib pajak PBB-P5L atas areal tersebut. Pada 6 April 2026 KPP menerima keterangan tertulis CV Damar Jaya beserta bukti bahwa IUP areal itu telah beralih kepada PT Kuarsa Prima sejak 2024. Sampai 15 Mei 2026 DJP belum memberikan keputusan apa pun. Berdasarkan kutipan tersebut, status CV Damar Jaya per 15 Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tetap sebagai wajib pajak sampai DJP menerbitkan keputusan tertulis yang membatalkan penetapan", B: "Tetap sebagai wajib pajak; satu-satunya jalan adalah mengajukan keberatan atas SPPT dalam tiga bulan", C: "Keterangannya dianggap disetujui sejak lewat satu bulan (6 Mei 2026), sehingga penetapannya sebagai wajib pajak harus dibatalkan", D: "DJP masih berwenang memutus sampai 12 bulan sejak keterangan diterima, yaitu 5 April 2027" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 4 ayat (7) memberi fiksi persetujuan. Jangka waktu satu bulan sejak 6 April 2026 berakhir 5 Mei 2026 (tanggal diterima dihitung sebagai hari pertama, seperti contoh Penjelasan Pasal 11 ayat (2) UU PBB). Karena sampai saat itu tidak ada keputusan, sejak 6 Mei 2026 keterangan dianggap disetujui, sehingga penetapan CV Damar Jaya sebagai wajib pajak batal.",
        jejakHitung: [
          ["Keterangan diterima", "6 April 2026"],
          ["Hari terakhir jangka waktu 1 bulan", "5 Mei 2026"],
          ["Dianggap disetujui (setelah jangka waktu lewat)", "sejak 6 Mei 2026"],
          ["Keputusan per 15 Mei 2026", "belum ada → dianggap disetujui"]
        ],
        mengapaSalah: {
          A: "Mengabaikan fiksi hukum 'dianggap disetujui' dalam Pasal 4 ayat (7)",
          B: "Untuk penetapan subjek tersedia mekanisme keterangan Pasal 4 ayat (4); keberatan adalah upaya atas SPPT/SKP",
          D: "Jangka 12 bulan adalah batas keputusan keberatan (Pasal 16), bukan keputusan atas keterangan subjek"
        },
        jebakan: "UU PBB memuat dua fiksi 'dianggap': keterangan bukan wajib pajak (1 bulan, dianggap disetujui) dan keberatan (12 bulan, dianggap diterima)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3)–(7) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-006", topik: "B8.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Agro Dwi Sentosa berkedudukan dan terdaftar di Jakarta. Perusahaan memiliki dua kebun dengan HGU terpisah: kebun kelapa sawit di Kabupaten Muaro Jambi (Provinsi Jambi) dan kebun karet di Kabupaten Musi Banyuasin (Provinsi Sumatera Selatan). Pada 2026 staf pajak baru mengusulkan agar kedua kebun digabung dalam satu SPOP dan PBB-nya dianggap terutang di Jakarta supaya administrasi sederhana. Ketentuan yang tepat mengenai tempat terutang dan pendaftaran objek adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB terutang di Jakarta sesuai tempat kedudukan wajib pajak; cukup satu SPOP gabungan", B: "PBB terutang di kabupaten letak kebun, tetapi didaftarkan dan dibayar ke pemerintah kabupaten sebagai PBB-P2", C: "PBB terutang di wilayah kabupaten letak masing-masing kebun; tiap kebun didata sebagai objek tersendiri dengan SPOP masing-masing", D: "PBB terutang di ibu kota provinsi karena objek berada di dua provinsi" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 8 ayat (3) UU PBB menetapkan tempat terutang di wilayah kabupaten/kota yang meliputi letak objek, dan Pasal 9 mewajibkan pendaftaran objek dengan SPOP kepada DJP yang wilayah kerjanya meliputi letak objek; dua kebun di dua kabupaten menjadi dua objek.",
        jejakHitung: [],
        mengapaSalah: { A: "Tempat kedudukan wajib pajak tidak menentukan tempat terutang PBB; yang menentukan letak objek", B: "Kebun dalam HGU adalah objek sektor perkebunan yang tetap dikelola DJP (PBB-P5L), bukan PBB-P2", D: "UU PBB menunjuk kabupaten/kota letak objek, bukan ibu kota provinsi" },
        jebakan: "PBB mengikuti letak objek, berbeda dengan PPh badan yang mengikuti domisili wajib pajak."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1)–(2) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-007", topik: "B8.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-03",
      stem: "Data untuk soal V-B8-03: PT Wana Lestari Abadi, pemegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Kapuas Hulu, menerima SPOP sektor perhutanan Tahun Pajak 2026 pada 3 Februari 2026 tetapi tidak mengembalikannya. KPP mengirim surat teguran tertulis pada 6 April 2026; sampai batas dalam surat teguran SPOP tetap tidak disampaikan. DJP lalu menghitung PBB 2026 dari data administrasi sebesar Rp186.400.000 dan menerbitkan SKP yang diterima perusahaan pada 2 Juli 2026. Kapan batas penyampaian SPOP menurut Pasal 9 ayat (2) UU PBB, dan atas dasar apa DJP menerbitkan SKP tersebut?",
      kataKualifikasi: [],
      opsi: { A: "3 Maret 2026; SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b karena hasil pemeriksaan lebih besar", B: "5 Maret 2026; SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a karena SPOP tidak disampaikan dan tetap tidak disampaikan setelah ditegur", C: "5 Maret 2026; DJP hanya dapat menerbitkan SPPT tanpa sanksi karena PBB adalah pajak yang ditetapkan", D: "31 Maret 2026; DJP menerbitkan STP karena SPOP terlambat" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "30 hari setelah 3 Februari 2026 jatuh pada 5 Maret 2026 (Februari 2026 berisi 28 hari). Karena SPOP tidak disampaikan dan setelah ditegur tertulis tetap tidak disampaikan, syarat Pasal 10 ayat (2) huruf a terpenuhi.",
        jejakHitung: [ ["SPOP diterima", "3 Februari 2026"], ["Sisa Februari (4–28)", "25 hari"], ["Tambahan Maret", "5 hari"], ["Batas SPOP", "5 Maret 2026"] ],
        mengapaSalah: { A: "Menghitung 'satu bulan' (3 Maret) dan memakai huruf b, yang mensyaratkan SPOP disampaikan lalu diperiksa", C: "Pasal 10 ayat (2) huruf a justru memberi wewenang menerbitkan SKP dengan denda 25% bila SPOP tidak dikembalikan setelah teguran", D: "STP menagih denda keterlambatan bayar (Pasal 11 ayat (4)), bukan keterlambatan SPOP; 31 Maret adalah batas SPT Tahunan OP" },
        jebakan: "SKP huruf a (SPOP tidak dikembalikan setelah teguran) berbeda dengan huruf b (hasil pemeriksaan lebih besar daripada SPOP)."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (2) huruf a UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-008", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-03",
      stem: "Lanjutan data V-B8-03: PT Wana Lestari Abadi tidak mengembalikan SPOP 2026 meskipun telah ditegur secara tertulis, sehingga DJP menerbitkan SKP PBB-P5L 2026 dengan pokok pajak Rp186.400.000 yang dihitung dari data administrasi. Jumlah pajak yang harus dibayar menurut SKP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp186.400.000", B: "Rp326.200.000", C: "Rp233.000.000", D: "Rp190.128.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 10 ayat (3) UU PBB: jumlah pajak dalam SKP huruf a adalah pokok pajak ditambah denda administrasi 25% dari pokok.",
        jejakHitung: [ ["Pokok pajak", "Rp186.400.000"], ["Denda 25% × 186.400.000", "Rp46.600.000"], ["Jumlah SKP", "Rp233.000.000"] ],
        mengapaSalah: { A: "Denda administrasi 25% dalam SKP terlupa", B: "Memakai kenaikan 75% Pasal 13 ayat (3) UU KUP yang tidak berlaku untuk PBB (186.400.000 × 175%)", D: "Memakai denda 2% sebulan Pasal 11 ayat (3), yang hanya untuk keterlambatan pembayaran" },
        jebakan: "Denda 25% SKP PBB dikenakan sekali (bukan per bulan) dan dihitung dari pokok."
      },
      dasarHukum: [ { pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-009",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-03",
      stem: "Lanjutan data V-B8-03: SKP PBB-P5L 2026 sebesar Rp233.000.000 diterima PT Wana Lestari Abadi pada 2 Juli 2026. Direksi menilai luas areal dalam data administrasi DJP terlalu besar dan berencana mengajukan keberatan, sambil menunda pembayaran sampai keberatan diputus. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan harus diajukan paling lambat 1 Oktober 2026, dan jatuh tempo SKP tertunda sampai keputusan keberatan terbit", B: "Keberatan harus diajukan paling lambat 1 Oktober 2026, sedangkan SKP tetap jatuh tempo 1 Agustus 2026; keberatan tidak menunda kewajiban membayar", C: "Keberatan dapat diajukan paling lambat 1 Januari 2027 (6 bulan), dan SKP jatuh tempo pada tanggal yang sama", D: "Keberatan tidak dapat diajukan atas SKP; perusahaan hanya dapat memohon pengurangan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan atas SKP diajukan dalam 3 bulan sejak SKP diterima (1 Oktober 2026), sedangkan SKP harus dilunasi 1 bulan sejak diterima (1 Agustus 2026). Pengajuan keberatan tidak menunda kewajiban membayar; pembayaran setelah jatuh tempo dikenai denda 2% sebulan. Tanggal diterima dihitung sebagai hari pertama (contoh Penjelasan Pasal 11 ayat (2) UU PBB: SKP diterima 1 Maret, jatuh tempo 31 Maret).",
        jejakHitung: [
          ["SKP diterima", "2 Juli 2026"],
          ["Jatuh tempo SKP (1 bulan sejak diterima)", "1 Agustus 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "1 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Keberatan tidak menangguhkan jatuh tempo; menunda bayar memicu denda 2% sebulan",
          C: "Enam bulan adalah jatuh tempo SPPT, bukan batas keberatan ataupun jatuh tempo SKP",
          D: "Pasal 15 ayat (1) UU PBB menyebut keberatan dapat diajukan atas SPPT dan SKP"
        },
        jebakan: "Dua tenggat berjalan bersamaan: 1 bulan untuk melunasi SKP dan 3 bulan untuk keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-010", topik: "B8.2", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      kutipan: "Pasal 3 ayat (1) UU PBB (parafrase): Objek pajak yang tidak dikenakan pajak adalah objek yang (a) digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan, dan kebudayaan nasional, yang tidak dimaksudkan untuk memperoleh keuntungan; (b) digunakan untuk kuburan, peninggalan purbakala, atau yang sejenis; (c) merupakan hutan lindung, hutan suaka alam, hutan wisata, taman nasional, tanah penggembalaan yang dikuasai desa, dan tanah negara yang belum dibebani suatu hak; (d) digunakan perwakilan diplomatik/konsulat berdasarkan asas timbal balik; (e) digunakan badan atau perwakilan organisasi internasional yang ditentukan Menteri Keuangan.",
      stem: "Di dalam areal HGU PT Sawit Tunas Mandiri terdapat: masjid yang terbuka untuk umum dan dikelola nirlaba; klinik yang melayani karyawan dan masyarakat dengan tarif komersial dan dikelola anak usaha; pemakaman umum desa; serta gudang pupuk. Berdasarkan kutipan tersebut, objek yang dikecualikan dari PBB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masjid, klinik, dan pemakaman umum", B: "Masjid dan pemakaman umum", C: "Pemakaman umum saja", D: "Masjid, pemakaman umum, dan gudang pupuk" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Masjid umum nirlaba memenuhi huruf a dan pemakaman memenuhi huruf b. Klinik dikelola dengan tarif komersial sehingga tidak memenuhi syarat 'tidak dimaksudkan untuk memperoleh keuntungan', dan gudang pupuk adalah bangunan usaha.",
        jejakHitung: [],
        mengapaSalah: { A: "Klinik bertarif komersial gagal memenuhi syarat nirlaba pada huruf a", C: "Masjid yang terbuka untuk umum dan nirlaba tetap dikecualikan walaupun berada di dalam areal HGU", D: "Gudang pupuk menunjang kegiatan usaha perkebunan sehingga tetap objek" },
        jebakan: "Pengecualian huruf a bersyarat ganda: semata-mata untuk kepentingan umum dan tidak mencari keuntungan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a dan b UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-011",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kopi Dataran Tinggi memegang HGU kebun kopi di Kabupaten Toraja Utara dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif 850 ha dengan nilai tanah Rp4.000/m² dan Biaya Investasi Tanaman (SIT) Rp6.500/m²; areal emplasemen 25 ha dengan nilai Rp9.000/m², yang di dalamnya terdapat masjid umum nirlaba 0,4 ha dan pemakaman umum 1,6 ha; bangunan (pabrik pengolahan, gudang, rumah karyawan; tidak termasuk masjid) NJOP Rp7.500.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp197.976.000", B: "Rp87.116.000", C: "Rp494.040.000", D: "Rp197.616.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Luas masjid umum nirlaba dan pemakaman (2 ha) dikeluarkan dari emplasemen sebelum dinilai; areal produktif memakai nilai tanah ditambah SIT; lalu NJOP objek dikurangi NJOPTKP, dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["Areal produktif 8.500.000 m² × (4.000 + 6.500)", "Rp89.250.000.000"],
          ["Emplasemen kena pajak (25 − 0,4 − 1,6 = 23 ha) 230.000 m² × 9.000", "Rp2.070.000.000"],
          ["NJOP bumi", "Rp91.320.000.000"],
          ["+ NJOP bangunan", "Rp98.820.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp98.808.000.000"],
          ["NJKP 40%", "Rp39.523.200.000"],
          ["PBB 0,5%", "Rp197.616.000"]
        ],
        mengapaSalah: {
          A: "Masjid dan pemakaman tidak dikeluarkan dari emplasemen (25 ha × 10.000 × 9.000)",
          B: "SIT areal produktif tidak ditambahkan",
          C: "Tarif 0,5% dikalikan langsung ke NJOP neto tanpa NJKP 40% (PP 25/2002)"
        },
        jebakan: "Selisih jawaban benar dan pengecoh yang lupa mengeluarkan masjid serta pemakaman hanya Rp360.000; keluarkan dulu luas objek yang dikecualikan sebelum mengalikan nilai per m²."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-012", topik: "B8.2", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Di Kabupaten Kapuas Hulu terdapat empat areal pada 1 Januari 2026: (1) kawasan hutan lindung yang berbatasan langsung dengan areal izin PT Rimba Raya; (2) areal hutan produksi yang telah dibebani perizinan berusaha pemanfaatan hutan tanaman atas nama PT Rimba Raya; (3) kawasan taman nasional; (4) tanah negara bekas HGU yang haknya berakhir pada 2024, belum diberikan hak baru kepada siapa pun, dan tidak dimanfaatkan pihak mana pun. Areal yang merupakan objek PBB-P5L adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) saja", B: "(2) dan (4)", C: "(1) dan (2)", D: "(1), (2), (3), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf c mengecualikan hutan lindung, taman nasional, dan tanah negara yang belum dibebani suatu hak; hanya areal hutan produksi yang telah dibebani perizinan (2) yang menjadi objek sektor perhutanan.",
        jejakHitung: [],
        mengapaSalah: { B: "Tanah negara bekas HGU yang belum dibebani hak baru dan tidak dimanfaatkan siapa pun termasuk pengecualian huruf c", C: "Hutan lindung dikecualikan walaupun berbatasan dengan areal izin", D: "Tidak semua kawasan hutan menjadi objek; Pasal 3 ayat (1) huruf c mengecualikan beberapa kawasan" },
        jebakan: "Tanah negara dikecualikan hanya selama belum dibebani hak; begitu ada HGU atau izin, areal itu menjadi objek."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-013", topik: "B8.2", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Tiga keadaan PBB-P5L Tahun Pajak 2026: (i) gedung sekolah di emplasemen kebun PT Asri Agro dipakai cuma-cuma oleh yayasan untuk sekolah umum nirlaba; (ii) PT Bukit Teh, wajib pajak dengan satu objek, memperoleh pengurang Rp12.000.000 dari NJOP; (iii) PT Cahaya Kebun yang kebunnya dilanda banjir bandang memohon keringanan dan memperoleh potongan 60% dari PBB terutang. Istilah yang tepat untuk (i), (ii), dan (iii) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pengurangan PBB – NJOPTKP – keberatan", B: "Objek dikecualikan – pengurangan PBB – penghapusan sanksi", C: "NJOPTKP – objek dikecualikan – restitusi", D: "Objek dikecualikan – NJOPTKP – pengurangan PBB" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "(i) memenuhi Pasal 3 ayat (1) huruf a (pendidikan, kepentingan umum, nirlaba); (ii) adalah NJOPTKP Rp12.000.000 per wajib pajak; (iii) adalah pengurangan atas permohonan karena bencana alam berdasarkan Pasal 19 UU PBB.",
        jejakHitung: [],
        mengapaSalah: { A: "Pengecualian objek tidak memerlukan permohonan keringanan; keberatan menyangkut kebenaran penetapan, bukan keringanan karena bencana", B: "Pengurang tetap Rp12.000.000 adalah NJOPTKP, bukan pengurangan; potongan pajak pokok karena bencana bukan penghapusan sanksi", C: "NJOPTKP mengurangi NJOP, bukan mengecualikan objek; restitusi adalah pengembalian kelebihan bayar" },
        jebakan: "Tiga mekanisme berbeda: pengecualian (objek keluar), NJOPTKP (pengurang dasar), pengurangan (keringanan atas permohonan)."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-014", topik: "B8.2", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Klinik di emplasemen kebun PT Harapan Agro sejak 2020 melayani masyarakat sekitar secara cuma-cuma dan nirlaba, sehingga dikecualikan dari PBB. Pada 1 Maret 2026 pengelolaan klinik diserahkan kepada PT Medika Kebun yang menarik tarif komersial dan bertujuan mencari laba. Data objek pada 1 Januari 2027 tidak berubah selain status klinik tersebut. Perlakuan PBB-P5L atas bangunan klinik yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tahun Pajak 2026 terutang secara proporsional untuk Maret–Desember 2026", B: "Tahun Pajak 2026 terutang penuh sejak alih kelola 1 Maret 2026 dan ditagih dengan SKP", C: "Tahun Pajak 2026 tidak terutang; mulai Tahun Pajak 2027 terutang karena pada 1 Januari 2027 klinik sudah dikelola untuk mencari keuntungan", D: "Tetap dikecualikan selama klinik berada di dalam areal HGU dan juga melayani karyawan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian Pasal 3 ayat (1) huruf a melekat pada penggunaan nirlaba untuk kepentingan umum, dan statusnya diuji pada keadaan 1 Januari (Pasal 8 ayat (2)); perubahan pada Maret 2026 baru berpengaruh pada Tahun Pajak 2027.",
        jejakHitung: [],
        mengapaSalah: { A: "PBB tidak dihitung proporsional dalam tahun berjalan", B: "Keadaan 1 Januari 2026 masih memenuhi pengecualian, sehingga tidak ada dasar SKP 2026", D: "Letak di dalam areal HGU bukan syarat; pengecualian hilang ketika klinik dikelola untuk mencari keuntungan" },
        jebakan: "Gabungkan dua pasal: syarat pengecualian (Pasal 3) diuji pada tanggal 1 Januari (Pasal 8)."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-015", topik: "B8.2", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "PT Minyak Rawa Jaya, kontraktor kontrak kerja sama migas, memiliki aset di wilayah kerjanya: pipa penyalur minyak yang ditanam permanen, tangki timbun berpondasi beton, stasiun pengumpul yang dilekatkan tetap pada tanah, dan armada truk tangki untuk mengangkut kondensat. Aset yang bukan bangunan objek PBB adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Pipa penyalur minyak yang ditanam permanen", B: "Tangki timbun berpondasi beton", C: "Armada truk tangki pengangkut kondensat", D: "Stasiun pengumpul yang dilekatkan tetap pada tanah" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Bangunan adalah konstruksi teknik yang ditanam atau dilekatkan secara tetap pada tanah dan/atau perairan; truk tangki adalah benda bergerak sehingga bukan objek PBB.",
        jejakHitung: [],
        mengapaSalah: { A: "Pipa yang ditanam tetap adalah bangunan (penjelasan Pasal 1 angka 2 menyebut pipa minyak)", B: "Tempat penampungan minyak yang melekat tetap adalah bangunan", D: "Stasiun pengumpul melekat tetap pada tanah sehingga merupakan bangunan" },
        jebakan: "Ukurannya keterlekatan tetap pada tanah atau perairan, bukan nilai ekonomis atau fungsi produksi."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-016", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Hutan Tanaman Sentosa memiliki objek PBB sektor perhutanan di Kabupaten Siak dengan NJOP bumi Rp84.600.000.000 dan NJOP bangunan Rp3.400.000.000 menurut SPPT Tahun Pajak 2026. Perusahaan tidak memiliki objek PBB-P5L lain. Besarnya PBB-P5L terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp175.976.000", B: "Rp439.940.000", C: "Rp176.000.000", D: "Rp87.988.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PBB = 0,5% × 40% × (NJOP − NJOPTKP); sektor perhutanan memakai NJKP 40% (PP 25/2002) dan NJOPTKP Rp12.000.000.",
        jejakHitung: [ ["NJOP objek 84.600.000.000 + 3.400.000.000", "Rp88.000.000.000"], ["− NJOPTKP", "Rp87.988.000.000"], ["NJKP 40%", "Rp35.195.200.000"], ["PBB 0,5%", "Rp175.976.000"] ],
        mengapaSalah: { B: "Tarif 0,5% dikalikan ke NJOP neto tanpa NJKP 40%", C: "NJOPTKP Rp12.000.000 tidak dikurangkan", D: "Memakai NJKP 20% yang hanya untuk objek lainnya dengan NJOP di bawah Rp1 miliar" },
        jebakan: "Tarif efektif sektor perkebunan, perhutanan, dan pertambangan = 0,2% dari NJOP setelah NJOPTKP."
      },
      dasarHukum: [ { pasal: "Pasal 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-017",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 6 ayat (3) UU PBB: Dasar penghitungan pajak adalah Nilai Jual Kena Pajak yang ditetapkan serendah-rendahnya 20% (dua puluh persen) dan setinggi-tingginya 100% (seratus persen) dari nilai jual obyek pajak. PP 25/2002 (parafrase): NJKP ditetapkan 40% dari NJOP untuk objek perkebunan, kehutanan, dan pertambangan; untuk objek lainnya 40% bila NJOP sama dengan atau lebih dari Rp1.000.000.000, dan 20% bila NJOP kurang dari Rp1.000.000.000. Pasal 5 UU PBB: Tarif pajak yang dikenakan atas obyek pajak adalah sebesar 0,5% (lima persepuluh persen). Pasal 2 ayat (2) dan ayat (3) PMK 23/PMK.03/2014: Dalam penetapan besarnya PBB terutang, setiap Wajib Pajak diberikan NJOPTKP; besarnya NJOPTKP ditetapkan sebesar Rp12.000.000,00 (dua belas juta rupiah).",
      stem: "PT Bahari Kerapu Sejahtera menjalankan usaha pembudidayaan ikan kerapu dengan keramba di perairan laut Teluk Saleh, Kabupaten Sumbawa, berdasarkan Surat Izin Usaha Perikanan, dan areal perairan budidaya itu diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (areal perairan budidaya) Rp760.000.000, tanpa NJOP bangunan. Perusahaan tidak memiliki objek PBB-P5L lain. Berdasarkan kutipan tersebut, PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.496.000", B: "Rp760.000", C: "Rp3.740.000", D: "Rp748.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya tidak termasuk kelompok perkebunan, kehutanan, atau pertambangan, sehingga NJKP bergantung pada batas NJOP Rp1 miliar (Pasal 1 huruf b PP 25/2002); NJOP Rp760.000.000 memakai NJKP 20%. Pada pembudidayaan ikan, objeknya adalah perairan berizin usaha perikanan; keramba tidak termasuk daftar bangunan sektor lainnya (Pasal 9 ayat (2) PMK 186/2019 s.t.d.d. PMK 234/2022).",
        jejakHitung: [
          ["NJOP objek (bumi perairan budidaya)", "Rp760.000.000"],
          ["NJOP < Rp1.000.000.000 → NJKP", "20%"],
          ["NJOP − NJOPTKP", "Rp748.000.000"],
          ["NJKP 20%", "Rp149.600.000"],
          ["PBB 0,5%", "Rp748.000"]
        ],
        mengapaSalah: {
          A: "NJKP 40% otomatis hanya untuk perkebunan, kehutanan, dan pertambangan; objek lainnya di bawah Rp1 miliar memakai 20%",
          B: "NJOPTKP Rp12.000.000 lupa dikurangkan (760.000.000 × 0,1%)",
          C: "Tarif dikalikan ke NJOP neto tanpa NJKP"
        },
        jebakan: "Huruf 'L' dalam P5L tidak otomatis NJKP 40%; cek dulu NJOP objek terhadap Rp1 miliar."
      },
      dasarHukum: [{ pasal: "Pasal 5, Pasal 6 ayat (3), dan Pasal 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (2) dan ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 8 ayat (1) huruf b dan ayat (2) serta Pasal 9 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-018", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Agro Dwi Sentosa memiliki dua objek PBB-P5L Tahun Pajak 2026 atas nama wajib pajak yang sama: kebun kelapa sawit di Kabupaten Muaro Jambi dengan NJOP Rp146.500.000.000 dan kebun karet di Kabupaten Musi Banyuasin dengan NJOP Rp38.250.000.000. Masing-masing kebun memiliki SPPT sendiri. Besarnya PBB-P5L yang tercantum dalam SPPT kebun karet adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp76.500.000", B: "Rp76.476.000", C: "Rp191.250.000", D: "Rp38.250.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NJOPTKP diberikan satu kali untuk setiap wajib pajak pada objek yang nilainya terbesar; objek lain dikenai penuh tanpa pengurang, sehingga SPPT kebun karet = 0,2% × Rp38.250.000.000.",
        jejakHitung: [ ["NJOPTKP diberikan pada objek ber-NJOP terbesar", "kebun sawit (Rp146,5 miliar)"], ["Kebun karet tanpa NJOPTKP", "Rp38.250.000.000"], ["NJKP 40%", "Rp15.300.000.000"], ["PBB 0,5%", "Rp76.500.000"], ["Pembanding: SPPT kebun sawit (146.488.000.000 × 0,2%)", "Rp292.976.000"] ],
        mengapaSalah: { B: "NJOPTKP dikurangkan pada setiap objek, padahal hanya satu kali per wajib pajak", C: "NJKP 40% terlupa (0,5% × NJOP)", D: "Memakai NJKP 20%, padahal objek perkebunan selalu 40%" },
        jebakan: "Total PBB dua kebun sama di objek mana pun NJOPTKP diberikan, tetapi soal SPPT per objek menguji aturan 'objek terbesar'."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-019", topik: "B8.3", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Staf pajak PT Kebun Nusa Raya menyusun lembar kerja simulasi PBB-P5L 2026 dengan parameter berikut: (1) tarif 0,5%; (2) NJKP 40% untuk objek perkebunan; (3) NJOPTKP Rp8.000.000 per wajib pajak; (4) NJOP sebagai dasar pengenaan pajak. Parameter yang tidak tepat dan harus diperbaiki adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "Parameter (1), karena tarif PBB naik mengikuti tarif PPN 12% sejak 2025", B: "Parameter (3), karena NJOPTKP PBB-P5L kini Rp12.000.000 per wajib pajak", C: "Parameter (2), karena UU HKPD mengubah NJKP menjadi 20%–100% sesuai Perda", D: "Parameter (4), karena dasar pengenaan PBB adalah NJKP, bukan NJOP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Rp8.000.000 adalah NJOPTKP versi UU 12/1994 yang telah disesuaikan menjadi Rp12.000.000 (KMK 201/KMK.04/2000, lalu PMK 23/PMK.03/2014); tarif 0,5%, NJKP 40% untuk sektor P3, dan NJOP sebagai dasar pengenaan tetap berlaku.",
        jejakHitung: [],
        mengapaSalah: { A: "Tarif PBB 0,5% diatur Pasal 5 UU PBB dan tidak terkait tarif PPN", C: "Rentang 20%–100% dalam UU HKPD berlaku untuk PBB-P2 daerah, bukan PBB-P5L", D: "Pasal 6 ayat (1): dasar pengenaan adalah NJOP; NJKP adalah dasar penghitungan (Pasal 6 ayat (3) dan Pasal 7)" },
        jebakan: "Pengecoh meminjam perubahan dari pajak lain (PPN 12%, PBB-P2 UU HKPD) yang tidak menyentuh PBB-P5L."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "Pasal 5 dan 6 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-020", topik: "B8.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Mitra Kebun Raya memiliki dua objek pada 1 Januari 2026: (1) kebun teh dalam HGU di Kabupaten Bandung Barat dengan NJOP Rp24.000.000.000; (2) gedung kantor pusat di Kota Jakarta Selatan dengan NJOP Rp18.000.000.000. Perusahaan tidak memiliki objek lain. Konsultan diminta menghitung PBB yang ditetapkan dan diadministrasikan Direktorat Jenderal Pajak untuk Tahun Pajak 2026. Jumlahnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp83.976.000", B: "Rp47.976.000", C: "Rp48.000.000", D: "Rp119.940.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Hanya kebun teh dalam kawasan usaha perkebunan yang menjadi PBB-P5L; gedung kantor di luar kawasan usaha adalah objek PBB-P2 yang ditetapkan Pemprov DKI berdasarkan UU 1/2022 dan Perda.",
        jejakHitung: [ ["Objek yang diadministrasikan DJP", "kebun teh (kantor = PBB-P2 DKI)"], ["NJOP kebun − NJOPTKP = 24.000.000.000 − 12.000.000", "Rp23.988.000.000"], ["NJKP 40%", "Rp9.595.200.000"], ["PBB 0,5%", "Rp47.976.000"] ],
        mengapaSalah: { A: "Kantor pusat ikut dihitung sebagai PBB-P5L ((42.000.000.000 − 12.000.000) × 0,2%), padahal objek PBB-P2", C: "NJOPTKP Rp12.000.000 tidak dikurangkan; kebun adalah satu-satunya objek PBB-P5L sehingga NJOPTKP melekat padanya", D: "Tarif 0,5% dikalikan tanpa NJKP 40%" },
        jebakan: "Pisahkan rezim dulu (P5L pusat vs P2 daerah), baru hitung."
      },
      dasarHukum: [ { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-021",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 6 ayat (1) dan (2) UU PBB: Dasar pengenaan pajak adalah Nilai Jual Objek Pajak. Besarnya Nilai Jual Objek Pajak ditetapkan setiap tiga tahun oleh Menteri Keuangan, kecuali untuk daerah tertentu ditetapkan setiap tahun sesuai dengan perkembangan daerahnya.",
      stem: "NJOP bumi kebun PT Sawit Andalas naik dari Rp180.000.000.000 dalam SPPT 2025 menjadi Rp228.000.000.000 dalam SPPT 2026 yang diterima pada 9 Maret 2026, karena pembukaan jalan provinsi dan kenaikan harga tanah di sekitarnya. Direksi berpendapat kenaikan itu batal karena NJOP 'hanya boleh berubah tiga tahun sekali', dan berniat hanya membayar sebesar PBB 2025. Berdasarkan kutipan tersebut, tanggapan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pendapat direksi tepat; kenaikan NJOP sebelum tiga tahun batal demi hukum sehingga cukup membayar sesuai NJOP 2025", B: "Pendapat direksi tidak tepat; NJOP ditentukan sendiri oleh wajib pajak melalui SPOP sehingga perusahaan dapat menurunkannya dalam SPOP 2026", C: "Pendapat direksi tidak tepat; atas NJOP hanya tersedia permohonan pengurangan, bukan keberatan", D: "Pendapat direksi tidak tepat; NJOP dapat ditetapkan setiap tahun untuk daerah tertentu. Bila tidak setuju dengan NJOP, perusahaan dapat mengajukan keberatan paling lambat 8 Juni 2026, sambil tetap melunasi SPPT paling lambat 8 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 6 ayat (2) membolehkan penetapan NJOP setiap tahun untuk daerah tertentu. Sengketa nilai dalam SPPT diselesaikan melalui keberatan Pasal 15 dalam 3 bulan sejak SPPT diterima (8 Juni 2026), dan keberatan tidak menunda kewajiban melunasi SPPT (jatuh tempo 8 September 2026).",
        jejakHitung: [
          ["SPPT diterima", "9 Maret 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "8 Juni 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "8 September 2026"]
        ],
        mengapaSalah: {
          A: "Frasa 'kecuali untuk daerah tertentu ditetapkan setiap tahun' diabaikan",
          B: "SPOP memuat data objek; NJOP ditetapkan atas nama Menteri Keuangan, bukan oleh wajib pajak",
          C: "Keberatan atas SPPT, termasuk nilai NJOP di dalamnya, diatur Pasal 15 ayat (1)"
        },
        jebakan: "Frasa pengecualian 'kecuali ... setiap tahun' sering terlewat ketika membaca kutipan Pasal 6 ayat (2)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1)–(2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-022", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "NJOP objek PBB-P5L sektor pertambangan minerba milik PT Tambang Selaras (satu-satunya objek wajib pajak tersebut) naik dari Rp300.000.000.000 pada Tahun Pajak 2025 menjadi Rp370.000.000.000 pada Tahun Pajak 2026. Tidak ada perubahan ketentuan tarif, NJKP, maupun NJOPTKP. Kenaikan PBB-P5L 2026 dibanding 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp350.000.000", B: "Rp70.000.000", C: "Rp140.000.000", D: "Rp139.976.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "NJOPTKP yang sama pada kedua tahun saling meniadakan; kenaikan PBB = 0,2% × kenaikan NJOP Rp70.000.000.000.",
        jejakHitung: [ ["PBB 2025 = (300.000.000.000 − 12.000.000) × 0,2%", "Rp599.976.000"], ["PBB 2026 = (370.000.000.000 − 12.000.000) × 0,2%", "Rp739.976.000"], ["Kenaikan", "Rp140.000.000"] ],
        mengapaSalah: { A: "Tarif 0,5% dikalikan ke selisih NJOP tanpa NJKP 40%", B: "Sektor pertambangan memakai NJKP 40%, bukan 20%", D: "NJOPTKP sudah dikurangkan di masing-masing tahun; mengurangkannya lagi pada selisih adalah hitung ganda" },
        jebakan: "Pada soal selisih, NJOPTKP yang sama di dua tahun tidak memengaruhi kenaikan."
      },
      dasarHukum: [ { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-023",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-01",
      stem: "Data untuk soal V-B8-01: PT Sawit Lestari Nusantara memegang HGU kebun kelapa sawit di Kabupaten Seruyan dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif (telah ditanami kelapa sawit) 3.200 ha, nilai tanah Rp4.500/m², SIT kelapa sawit Rp5.800/m²; areal belum produktif (sudah diolah tetapi belum ditanami) 600 ha, nilai tanah Rp4.500/m²; areal emplasemen 45 ha, Rp15.000/m²; areal tidak produktif (rawa) 155 ha, Rp1.200/m²; bangunan (pabrik kelapa sawit, kantor kebun, perumahan karyawan, jalan kebun) NJOP Rp62.400.000.000. Berapa NJOP bumi seluruhnya?",
      kataKualifikasi: [],
      opsi: { A: "Rp365.210.000.000", B: "Rp400.010.000.000", C: "Rp179.610.000.000", D: "Rp363.350.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NJOP bumi = jumlah NJOP tiap jenis areal. Areal produktif perkebunan adalah areal yang telah ditanami dan dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT); areal belum produktif (belum ditanami), areal tidak produktif, dan emplasemen dinilai dengan nilai tanah per m².",
        jejakHitung: [
          ["Areal produktif 32.000.000 m² × (4.500 + 5.800)", "Rp329.600.000.000"],
          ["Belum produktif 6.000.000 m² × 4.500", "Rp27.000.000.000"],
          ["Emplasemen 450.000 m² × 15.000", "Rp6.750.000.000"],
          ["Tidak produktif 1.550.000 m² × 1.200", "Rp1.860.000.000"],
          ["NJOP bumi", "Rp365.210.000.000"]
        ],
        mengapaSalah: {
          B: "SIT ikut ditambahkan pada areal belum produktif yang belum ditanami (+Rp34.800.000.000)",
          C: "SIT areal produktif terlupa (−Rp185.600.000.000)",
          D: "Areal tidak produktif dianggap bukan objek; hanya objek Pasal 3 yang dikecualikan"
        },
        jebakan: "1 ha = 10.000 m². Menurut Pasal 14 ayat (1) PMK 186/2019, kebun yang sudah ditanami tetapi belum menghasilkan tetap areal produktif; areal belum produktif adalah areal yang belum ditanami (belum diolah, sudah diolah tetapi belum ditanami, atau pembibitan)."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 6 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-024",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-01",
      stem: "Lanjutan data V-B8-01 (PT Sawit Lestari Nusantara, satu-satunya objek: areal produktif 3.200 ha dengan nilai tanah Rp4.500/m² dan SIT Rp5.800/m²; belum produktif (belum ditanami) 600 ha Rp4.500/m²; emplasemen 45 ha Rp15.000/m²; rawa tidak produktif 155 ha Rp1.200/m²; bangunan Rp62.400.000.000). PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp855.196.000", B: "Rp924.796.000", C: "Rp730.396.000", D: "Rp2.137.990.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB = 0,5% × 40% × (NJOP bumi + NJOP bangunan − NJOPTKP Rp12.000.000). NJOP bumi: areal produktif (telah ditanami) = nilai tanah + SIT; areal belum produktif (belum ditanami), tidak produktif, dan emplasemen = nilai tanah. Bangunan dalam kawasan kebun, termasuk perumahan dan jalan, ikut menjadi objek PBB-P5L.",
        jejakHitung: [
          ["NJOP bumi (lihat soal sebelumnya)", "Rp365.210.000.000"],
          ["+ NJOP bangunan", "Rp427.610.000.000"],
          ["− NJOPTKP", "Rp427.598.000.000"],
          ["NJKP 40%", "Rp171.039.200.000"],
          ["PBB 0,5%", "Rp855.196.000"]
        ],
        mengapaSalah: {
          B: "SIT ikut dibebankan pada areal belum produktif yang belum ditanami (NJOP bumi Rp400.010.000.000)",
          C: "NJOP bangunan pabrik, kantor, perumahan, dan jalan kebun tidak dijumlahkan",
          D: "Tarif 0,5% dikalikan tanpa NJKP 40%"
        },
        jebakan: "Soal panjang ini menuntut lima langkah; kesalahan satu langkah selalu muncul sebagai salah satu opsi. Ingat: areal produktif perkebunan ditentukan oleh sudah ditanami, bukan sudah menghasilkan (Pasal 14 ayat (1) PMK 186/2019)."
      },
      dasarHukum: [{ pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-025",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-01",
      stem: "Lanjutan data V-B8-01: SPPT PBB-P5L 2026 PT Sawit Lestari Nusantara sebesar Rp855.196.000 diterima pada 16 Maret 2026. Karena antrean persetujuan internal, PBB baru dibayar penuh pada 2 Oktober 2026. Untuk PPh Badan 2026 (tahun buku kalender), manajer pajak menelaah denda dan perlakuan fiskalnya. Asumsikan bagian dari bulan dihitung satu bulan penuh. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Denda Rp17.103.920 ditagih dengan STP; PBB dan denda sama-sama dapat dibiayakan sebesar Rp872.299.920", B: "Denda Rp34.207.840 untuk 2 bulan; PBB dapat dibiayakan, dendanya tidak", C: "Denda Rp17.103.920 ditagih dengan STP; PBB Rp855.196.000 dapat dibiayakan, sedangkan dendanya tidak dapat dikurangkan", D: "Dikenai sanksi bunga Pasal 9 ayat (2a) UU KUP dengan tarif bunga KMK; PBB tidak dapat dibiayakan karena merupakan pajak" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo SPPT 6 bulan sejak diterima (15 September 2026); keterlambatan 17 hari dikenai denda 2% untuk satu bulan dan ditagih dengan STP. Dalam PPh Badan, PBB adalah pajak selain PPh yang dapat dibiayakan, sedangkan sanksi administrasi tidak.",
        jejakHitung: [
          ["SPPT diterima", "16 Maret 2026"],
          ["Jatuh tempo (6 bulan sejak diterima)", "15 September 2026"],
          ["Terlambat 17 hari", "dihitung 1 bulan"],
          ["Denda 2% × 855.196.000", "Rp17.103.920"],
          ["Biaya fiskal PBB (Pasal 6 ayat (1) huruf a UU PPh)", "Rp855.196.000"],
          ["Denda (Pasal 9 ayat (1) huruf k UU PPh)", "tidak dapat dikurangkan"]
        ],
        mengapaSalah: {
          A: "Pasal 9 ayat (1) huruf k UU PPh melarang pembebanan sanksi administrasi berupa denda",
          B: "15 September–2 Oktober 2026 kurang dari satu bulan sehingga dihitung satu bulan, bukan dua",
          D: "Denda PBB diatur Pasal 11 ayat (3) UU PBB (2% sebulan), bukan Pasal 9 ayat (2a) UU KUP; Pasal 6 ayat (1) huruf a UU PPh membolehkan pajak selain PPh dibiayakan"
        },
        jebakan: "Soal lintas kelompok: sanksinya menurut UU PBB, perlakuan biayanya menurut UU PPh."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-026",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Wana Akasia Prima memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Pelalawan dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal produktif (telah ditanami tanaman pokok) 12.000 ha dengan nilai tanah Rp1.800/m² dan SIT hutan tanaman Rp2.400/m²; areal belum produktif (belum ditanami, sebagian sudah diolah) 3.500 ha dengan nilai tanah Rp1.800/m²; areal emplasemen/base camp 20 ha Rp8.000/m²; bangunan (kantor lapangan, mess, jalan angkut, jembatan) NJOP Rp9.600.000.000. Dengan pola penilaian hutan tanaman (SIT hanya pada areal produktif), PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.156.376.000", B: "Rp1.324.376.000", C: "Rp580.376.000", D: "Rp578.188.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pada hutan tanaman, areal produktif adalah areal yang telah ditanami dan dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT); areal yang belum ditanami adalah areal belum produktif dan, seperti emplasemen, hanya dinilai nilai tanah. NJOP bumi ditambah bangunan, dikurangi NJOPTKP, lalu dikali 40% dan 0,5%.",
        jejakHitung: [
          ["Produktif 120.000.000 m² × (1.800 + 2.400)", "Rp504.000.000.000"],
          ["Belum produktif 35.000.000 m² × 1.800", "Rp63.000.000.000"],
          ["Emplasemen 200.000 m² × 8.000", "Rp1.600.000.000"],
          ["NJOP bumi", "Rp568.600.000.000"],
          ["+ Bangunan", "Rp578.200.000.000"],
          ["− NJOPTKP", "Rp578.188.000.000"],
          ["× 40% × 0,5%", "Rp1.156.376.000"]
        ],
        mengapaSalah: {
          B: "SIT ikut ditambahkan pada areal belum produktif yang belum ditanami (+Rp84.000.000.000 NJOP)",
          C: "SIT areal produktif terlupa (−Rp288.000.000.000 NJOP)",
          D: "Memakai NJKP 20%, padahal sektor kehutanan 40%"
        },
        jebakan: "Hektare yang besar membuat salah konversi m² atau salah tempat SIT berlipat menjadi selisih ratusan juta rupiah. Tanaman muda yang sudah ditanam tetap areal produktif (Pasal 15 ayat (1) huruf a angka 2 PMK 186/2019); areal belum produktif adalah yang belum ditanami."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-027",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Bara Mahakam Lestari (IUP operasi produksi batubara; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian Tahun Pajak 2026: permukaan bumi areal produktif (pit, stockpile, jalan tambang) 1.800 ha dengan nilai Rp5.000/m²; permukaan bumi areal belum/tidak produktif 6.200 ha dengan nilai Rp2.500/m²; tubuh bumi dinilai dengan angka kapitalisasi × hasil bersih, dengan hasil bersih Rp48.000.000.000 dan angka kapitalisasi 9,5 (data penilaian); bangunan (conveyor, bengkel, mess, dermaga khusus) NJOP Rp84.000.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp657.976.000", B: "Rp753.976.000", C: "Rp784.988.000", D: "Rp1.569.976.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bumi objek pertambangan meliputi permukaan bumi dan tubuh bumi di bawahnya (Pasal 1 angka 1 UU PBB; Pasal 7 ayat (1) PMK 186/2019). NJOP tubuh bumi operasi produksi = pendapatan bersih mineral atau batubara × angka kapitalisasi (Pasal 21 ayat (7) huruf b PMK 186/2019) = 9,5 × Rp48.000.000.000, lalu dijumlahkan dengan permukaan bumi dan bangunan.",
        jejakHitung: [
          ["Permukaan produktif 18.000.000 m² × 5.000", "Rp90.000.000.000"],
          ["Permukaan nonproduktif 62.000.000 m² × 2.500", "Rp155.000.000.000"],
          ["Tubuh bumi 9,5 × 48.000.000.000", "Rp456.000.000.000"],
          ["NJOP bumi", "Rp701.000.000.000"],
          ["+ Bangunan", "Rp785.000.000.000"],
          ["− NJOPTKP", "Rp784.988.000.000"],
          ["× 40% × 0,5%", "Rp1.569.976.000"]
        ],
        mengapaSalah: {
          A: "Tubuh bumi terlupa sehingga hanya permukaan dan bangunan yang dihitung",
          B: "Hasil bersih dipakai langsung tanpa dikalikan angka kapitalisasi",
          C: "Memakai NJKP 20%, padahal sektor pertambangan 40%"
        },
        jebakan: "Pada sektor pertambangan, porsi terbesar NJOP sering justru dari tubuh bumi, bukan permukaan. PMK 186/2019 menamai areal permukaan bumi minerba sebagai areal belum dimanfaatkan, cadangan produksi, tidak produktif, pengaman, dan emplasemen; label \"produktif\" dan \"belum/tidak produktif\" di stem hanya pengelompokan data penilaian."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 7 ayat (1) dan Pasal 21 ayat (7) huruf b PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-028",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Laporan kebun PT Karet Mulia per 1 Januari 2026 memuat: (1) blok karet umur 9 tahun yang sedang disadap; (2) blok karet hasil peremajaan umur 2 tahun yang belum disadap; (3) rawa dan tebing curam yang tidak dapat ditanami; (4) lokasi pabrik crumb rubber, kantor, dan perumahan karyawan di dalam HGU. Dalam penilaian NJOP bumi sektor perkebunan, pengelompokan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2) areal produktif dengan tambahan SIT karena sama-sama sudah ditanami; (3) areal tidak produktif; (4) areal emplasemen", B: "(1) areal produktif dengan tambahan SIT; (2) areal belum produktif; (3) areal tidak produktif; (4) areal emplasemen", C: "(1) areal produktif; (2) areal belum produktif dengan tambahan SIT; (3) dikecualikan dari PBB; (4) areal emplasemen", D: "(1) areal produktif; (2) areal belum produktif; (3) areal tidak produktif; (4) objek PBB-P2 karena berupa hunian dan pabrik" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Menurut Pasal 14 ayat (1) PMK 186/2019, areal produktif perkebunan adalah areal yang telah ditanami tanaman perkebunan (tanah ditambah pengembangan tanah berupa tanaman), sehingga blok yang sedang disadap dan blok peremajaan yang belum disadap sama-sama areal produktif; areal yang tidak dapat diusahakan adalah areal tidak produktif (tetap objek); lokasi pabrik, kantor, dan perumahan di dalam HGU adalah areal emplasemen.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Blok karet umur 2 tahun sudah ditanami sehingga areal produktif; areal belum produktif adalah areal yang belum ditanami (belum diolah, sudah diolah tetapi belum ditanami, atau pembibitan)",
          C: "Blok yang sudah ditanami bukan areal belum produktif, dan rawa serta tebing di dalam HGU bukan objek Pasal 3 ayat (1) UU PBB sehingga tetap dinilai sebagai areal tidak produktif",
          D: "Blok yang sudah ditanami adalah areal produktif, dan pabrik serta perumahan di dalam kawasan HGU adalah emplasemen PBB-P5L, bukan PBB-P2 (Pasal 38 ayat (1) UU 1/2022)"
        },
        jebakan: "Ukuran areal produktif perkebunan adalah sudah ditanami, bukan sudah menghasilkan. \"Belum produktif\" berarti belum ditanami; \"tidak produktif\" berarti tidak dapat diusahakan untuk kegiatan usaha perkebunan."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-029", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Minyak Rawa Jaya, kontraktor kontrak kerja sama dengan wilayah kerja onshore di Kabupaten Musi Banyuasin (satu-satunya objek PBB-P5L wajib pajak ini), memiliki data penilaian Tahun Pajak 2026: permukaan bumi areal produktif (tapak sumur dan fasilitas produksi) 420 ha dengan nilai Rp7.500/m²; permukaan bumi areal tidak produktif 2.580 ha dengan nilai Rp1.500/m²; NJOP tubuh bumi tahap eksploitasi hasil penilaian DJP Rp1.240.000.000.000; bangunan (pipa penyalur, tangki timbun, stasiun pengumpul) NJOP Rp96.000.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.812.376.000", B: "Rp332.376.000", C: "Rp2.620.376.000", D: "Rp7.030.940.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi meliputi permukaan bumi dan tubuh bumi; pipa, tangki timbun, dan stasiun pengumpul yang melekat tetap adalah bangunan. Seluruhnya dijumlahkan, dikurangi NJOPTKP, lalu dikali 40% dan 0,5%.",
        jejakHitung: [ ["Permukaan produktif 4.200.000 m² × 7.500", "Rp31.500.000.000"], ["Permukaan tidak produktif 25.800.000 m² × 1.500", "Rp38.700.000.000"], ["Tubuh bumi", "Rp1.240.000.000.000"], ["NJOP bumi", "Rp1.310.200.000.000"], ["+ Bangunan", "Rp1.406.200.000.000"], ["− NJOPTKP", "Rp1.406.188.000.000"], ["× 40% × 0,5%", "Rp2.812.376.000"] ],
        mengapaSalah: { B: "Tubuh bumi tidak dihitung, padahal Pasal 1 angka 1 memasukkan tubuh bumi ke dalam 'bumi'", C: "Pipa, tangki, dan stasiun pengumpul dianggap bukan bangunan", D: "Tarif 0,5% dikalikan tanpa NJKP 40%" },
        jebakan: "Objek migas paling sering salah karena tubuh bumi atau bangunan teknis (pipa, tangki) terlewat."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-030",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Samudra Energi Timur adalah kontraktor kontrak kerja sama migas dengan wilayah kerja lepas pantai (offshore) di perairan Indonesia Selat Makassar dan tidak memiliki objek PBB-P5L lain. Data penilaian Tahun Pajak 2026 per 1 Januari 2026: permukaan bumi berupa areal perairan produktif (lokasi anjungan dan sumur) 150 ha dengan nilai Rp2.000/m²; areal perairan wilayah kerja lainnya 48.000 ha dengan nilai Rp50/m²; NJOP tubuh bumi tahap eksploitasi hasil penilaian DJP Rp860.000.000.000; anjungan produksi lepas pantai yang dipancang ke dasar laut Rp540.000.000.000; pipa penyalur bawah laut Rp210.000.000.000; serta dua kapal pemasok (supply vessel) milik sendiri senilai Rp95.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.463.976.000", B: "Rp1.553.976.000", C: "Rp3.273.976.000", D: "Rp3.219.976.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi meliputi permukaan bumi (termasuk perairan) dan tubuh bumi di bawahnya; anjungan yang dipancang ke dasar laut dan pipa bawah laut adalah konstruksi teknik yang dilekatkan tetap pada perairan sehingga merupakan bangunan, sedangkan kapal pemasok adalah benda bergerak. Jumlahnya dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["Perairan produktif 1.500.000 m² × 2.000", "Rp3.000.000.000"],
          ["Perairan lainnya 480.000.000 m² × 50", "Rp24.000.000.000"],
          ["Tubuh bumi", "Rp860.000.000.000"],
          ["NJOP bumi", "Rp887.000.000.000"],
          ["Bangunan: anjungan 540.000.000.000 + pipa 210.000.000.000 (kapal dikeluarkan)", "Rp750.000.000.000"],
          ["NJOP objek", "Rp1.637.000.000.000"],
          ["− NJOPTKP", "Rp1.636.988.000.000"],
          ["× 40% × 0,5%", "Rp3.273.976.000"]
        ],
        mengapaSalah: {
          A: "Kapal pemasok ikut dihitung sebagai bangunan, padahal benda bergerak (1.731.988.000.000 × 0,2%)",
          B: "Tubuh bumi tidak dihitung (776.988.000.000 × 0,2%)",
          D: "Areal perairan dianggap bukan bumi, padahal permukaan bumi meliputi perairan pedalaman dan laut wilayah (1.609.988.000.000 × 0,2%)"
        },
        jebakan: "Pada objek offshore, laut adalah 'bumi' dan anjungan serta pipa bawah laut adalah 'bangunan'; yang dikeluarkan hanya benda bergerak seperti kapal. Menurut Pasal 17 ayat (6) dan ayat (7) huruf b PMK 186/2019, NJOP areal offshore migas ditetapkan dengan Keputusan Dirjen Pajak dan tubuh bumi eksploitasi dinilai dari pendapatan minyak dan/atau gas bumi × angka kapitalisasi; di soal keduanya diberikan sebagai data penilaian. PMK 186/2019 Pasal 17 ayat (2) tidak membagi Areal Offshore menjadi produktif dan lainnya; pembagian perairan di stem hanya pengelompokan data penilaian."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5 ayat (1), Pasal 9 ayat (1) huruf c, dan Pasal 17 ayat (2), (6), (7) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-031", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 10 ayat (2) huruf b dan ayat (4) UU PBB (parafrase): Direktur Jenderal Pajak dapat mengeluarkan surat ketetapan pajak apabila berdasarkan hasil pemeriksaan atau keterangan lain ternyata jumlah pajak yang terutang lebih besar dari jumlah pajak yang dihitung berdasarkan SPOP yang disampaikan wajib pajak. Jumlah pajak yang terutang dalam SKP tersebut adalah selisih pajak terutang berdasarkan hasil pemeriksaan atau keterangan lain dengan pajak terutang yang dihitung berdasarkan SPOP, ditambah denda administrasi sebesar 25% dari selisih pajak yang terutang.",
      stem: "PT Sawit Batanghari Jaya (satu-satunya objek PBB-P5L wajib pajak ini) menyampaikan SPOP 2026 tepat waktu dengan areal produktif 2.150 ha (nilai tanah Rp3.800/m² dan SIT Rp5.200/m²) serta areal lain dan bangunan dengan NJOP Rp13.000.000.000; SPPT 2026 diterbitkan sebesar Rp412.976.000 dan telah dilunasi. Pemeriksaan pada Juli 2026 menemukan areal produktif per 1 Januari 2026 sebenarnya 2.450 ha; data lain tidak berubah. Berdasarkan kutipan tersebut, jumlah yang harus dibayar menurut SKP PBB 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp54.000.000", B: "Rp170.744.000", C: "Rp94.500.000", D: "Rp67.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "SKP Pasal 10 ayat (2) huruf b menagih selisih pajak ditambah denda 25% dari selisih; NJOPTKP tidak dikurangkan lagi karena sudah dipakai pada SPPT.",
        jejakHitung: [ ["Cek SPPT: (21.500.000 m² × 9.000 + 13.000.000.000 − 12.000.000) × 0,2%", "Rp412.976.000"], ["Selisih luas 300 ha = 3.000.000 m² × (3.800 + 5.200)", "Rp27.000.000.000 NJOP"], ["Selisih PBB = 27.000.000.000 × 40% × 0,5%", "Rp54.000.000"], ["Denda 25% × 54.000.000", "Rp13.500.000"], ["Jumlah SKP", "Rp67.500.000"] ],
        mengapaSalah: { A: "Denda 25% atas selisih terlupa", B: "Denda 25% dihitung dari seluruh pajak hasil pemeriksaan (Rp466.976.000), bukan dari selisih", C: "Memakai kenaikan 75% Pasal 13 ayat (3) UU KUP" },
        jebakan: "Selisih NJOP langsung dikalikan 0,2%; NJOPTKP sudah habis dipakai pada SPPT."
      },
      dasarHukum: [ { pasal: "Pasal 10 ayat (2) huruf b dan ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-032",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L Tahun Pajak 2026 PT Teh Puncak Lestari diterbitkan pada 5 Februari 2026 dan diterima perusahaan pada 27 Februari 2026. Paling lambat kapan PBB menurut SPPT tersebut harus dilunasi?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "26 Agustus 2026", B: "4 Agustus 2026", C: "26 Maret 2026", D: "15 Maret 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 11 ayat (1) UU PBB: pajak terutang berdasarkan SPPT harus dilunasi paling lambat 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak. Tanggal diterima dihitung sebagai hari pertama, sehingga hari terakhirnya sehari sebelum tanggal yang sama pada bulan keenam (contoh Penjelasan Pasal 11 ayat (1): diterima 1 Maret 1986, jatuh tempo 31 Agustus 1986): 26 Agustus 2026.",
        jejakHitung: [
          ["SPPT diterima", "27 Februari 2026"],
          ["6 bulan sejak diterima", "26 Agustus 2026"]
        ],
        mengapaSalah: {
          B: "Jangka 6 bulan dihitung sejak SPPT diterima, bukan sejak diterbitkan",
          C: "Satu bulan adalah jatuh tempo SKP dan STP",
          D: "Tanggal 15 bulan berikutnya adalah batas setor pajak masa (PMK 81/2024), tidak berlaku untuk SPPT"
        },
        jebakan: "Titik awal hitung adalah tanggal diterima, bukan tanggal terbit."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "B8-033", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "SPPT PBB-P5L Tahun Pajak 2023 milik PT Kebun Lama Jaya sebesar Rp86.000.000 jatuh tempo pada 14 September 2023 dan sampai Oktober 2026 belum dibayar sama sekali. Pada 20 Oktober 2026 DJP menerbitkan STP untuk menagih pokok beserta denda keterlambatan. Besarnya denda administrasi dalam STP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp65.360.000", B: "Rp41.280.000", C: "Rp20.640.000", D: "Rp21.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Denda 2% sebulan dihitung dari jatuh tempo, tetapi paling lama 24 bulan, sehingga maksimum 48% dari pajak yang tidak dibayar.",
        jejakHitung: [ ["14 September 2023 s.d. 20 Oktober 2026", "lebih dari 37 bulan"], ["Dibatasi paling lama", "24 bulan"], ["Denda 24 × 2% = 48% × 86.000.000", "Rp41.280.000"] ],
        mengapaSalah: { A: "Batas 24 bulan diabaikan (38 bulan × 2% = 76%)", C: "Memakai batas 12 bulan (24%), padahal Pasal 11 ayat (3) menyebut 24 bulan", D: "Memakai denda 25% milik SKP Pasal 10 ayat (3)" },
        jebakan: "Denda keterlambatan PBB berhenti bertambah setelah 24 bulan."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (3) dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-034", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 11 ayat (3) dan (4) UU PBB (parafrase): Pajak terutang yang pada saat jatuh tempo pembayaran tidak dibayar atau kurang dibayar dikenakan denda administrasi sebesar 2% sebulan yang dihitung dari saat jatuh tempo sampai dengan hari pembayaran untuk jangka waktu paling lama 24 bulan. Denda tersebut ditambah utang pajak yang belum atau kurang dibayar ditagih dengan STP yang harus dilunasi paling lambat satu bulan sejak tanggal diterimanya STP.",
      stem: "SPPT PBB-P5L 2026 PT Mineral Teluk Biru sebesar Rp320.000.000 jatuh tempo pada 9 September 2026. Pada tanggal itu perusahaan hanya membayar Rp200.000.000; sisanya Rp120.000.000 dibayar pada 20 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Berdasarkan kutipan tersebut, denda administrasi yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp19.200.000", B: "Rp30.000.000", C: "Rp4.800.000", D: "Rp7.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Denda hanya atas bagian yang kurang dibayar pada jatuh tempo (Rp120.000.000), dihitung dari 9 September sampai 20 November 2026 = 2 bulan 11 hari, dibulatkan 3 bulan.",
        jejakHitung: [ ["Kurang bayar pada jatuh tempo", "Rp120.000.000"], ["9 September s.d. 20 November 2026", "2 bulan 11 hari → 3 bulan"], ["Denda 3 × 2% × 120.000.000", "Rp7.200.000"] ],
        mengapaSalah: { A: "Denda dihitung dari seluruh SPPT, padahal Rp200.000.000 dibayar tepat waktu", B: "Memakai denda 25% milik SKP", C: "Bagian bulan dibulatkan ke bawah (2 bulan)" },
        jebakan: "Frasa 'tidak dibayar atau kurang dibayar' berarti dasar denda adalah sisa yang belum dibayar."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (3) dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-035",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Nusa Kabel Laut memiliki kabel listrik bawah laut antarprovinsi yang melintasi Selat Bali dan diadministrasikan sebagai objek PBB-P5L sektor lainnya; perusahaan tidak memiliki objek PBB-P5L lain. SPPT Tahun Pajak 2026 memuat NJOP bumi (koridor perairan yang digunakan kabel) Rp1.150.000.000 dan NJOP bangunan (kabel bawah laut yang dipasang tetap di dasar laut) Rp86.400.000.000. SPPT diterima pada 20 Maret 2026, dan PBB baru dilunasi seluruhnya pada 25 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Jumlah yang harus dibayar perusahaan atas PBB-P5L 2026 (pokok ditambah denda yang ditagih dengan STP) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp92.790.280", B: "Rp185.580.560", C: "Rp182.079.040", D: "Rp218.845.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya memakai NJKP menurut batas NJOP Rp1 miliar; NJOP objek Rp87,55 miliar sehingga NJKP 40%. SPPT jatuh tempo 6 bulan sejak diterima; menurut contoh Penjelasan Pasal 11 ayat (1) UU PBB (diterima 1 Maret, jatuh tempo 31 Agustus) jatuh temponya 19 September 2026. Pelunasan 25 November 2026 terlambat 2 bulan 6 hari yang dihitung 3 bulan (Penjelasan Pasal 11 ayat (3): bagian dari bulan dihitung penuh 1 bulan), sehingga denda 3 × 2% dari pokok.",
        jejakHitung: [
          ["NJOP objek 1.150.000.000 + 86.400.000.000", "Rp87.550.000.000"],
          ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"],
          ["(87.550.000.000 − 12.000.000) × 40% × 0,5%", "Rp175.076.000"],
          ["Jatuh tempo SPPT (6 bulan sejak 20 Maret; contoh Penjelasan Pasal 11 ayat (1): diterima 1 Maret, jatuh tempo 31 Agustus)", "19 September 2026"],
          ["19 September s.d. 25 November 2026", "2 bulan 6 hari → 3 bulan"],
          ["Denda 3 × 2% × 175.076.000", "Rp10.504.560"],
          ["Pokok + denda", "Rp185.580.560"]
        ],
        mengapaSalah: {
          A: "Memakai NJKP 20% karena mengira objek sektor lainnya selalu 20%; 20% hanya untuk NJOP di bawah Rp1 miliar (pokok Rp87.538.000 + denda Rp5.252.280)",
          C: "Bagian bulan dibulatkan ke bawah menjadi 2 bulan (denda Rp7.003.040), padahal Penjelasan Pasal 11 ayat (3) menghitung bagian bulan sebagai 1 bulan penuh",
          D: "Memakai denda 25% milik SKP Pasal 10 ayat (3) untuk keterlambatan bayar (175.076.000 × 125%)"
        },
        jebakan: "Dua jebakan berlapis: NJKP sektor lainnya ditentukan besarnya NJOP, dan denda telat bayar SPPT dihitung per bulan sejak jatuh tempo 6 bulan. Menghitung jatuh tempo 20 September (tanggal yang sama) juga menghasilkan 3 bulan di soal ini."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 8 ayat (1) huruf d dan Pasal 9 ayat (2) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB beserta Penjelasannya", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-036",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Pada 2026 PT Bumi Kencana Agro terlambat tepat satu bulan atas dua kewajiban: (i) menyetor PPh Pasal 25 Masa Juli 2026 sebesar Rp50.000.000; (ii) melunasi SPPT PBB-P5L 2026 sebesar Rp50.000.000 setelah jatuh temponya. Pernyataan yang tepat mengenai sanksinya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keduanya dikenai bunga 2% sebulan karena UU HPP menyeragamkan sanksi seluruh jenis pajak pusat", B: "Keduanya dikenai tarif bunga per bulan KMK karena PBB-P5L adalah pajak pusat yang tunduk pada UU KUP", C: "(i) bunga tarif KMK per bulan; (ii) denda 25% dari pokok PBB karena terlambat membayar SPPT", D: "(i) bunga tarif KMK per bulan (Pasal 9 ayat (2a) UU KUP); (ii) denda 2% sebulan (Pasal 11 ayat (3) UU PBB) = Rp1.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "UU Cipta Kerja (UU 11/2020, berlaku 2 November 2020; dipertahankan UU HPP) mengubah sanksi bunga UU KUP menjadi tarif berbasis suku bunga acuan, tetapi tidak mengubah UU PBB; denda keterlambatan PBB tetap 2% sebulan paling lama 24 bulan. Bunga Pasal 9 ayat (2a) UU KUP memakai tarif per bulan dari KMK (suku bunga acuan + 5%, dibagi 12) dan ditagih dengan STP; denda PBB 2% × Rp50.000.000 × 1 bulan = Rp1.000.000 ditagih dengan STP PBB.",
        jejakHitung: [
          ["Denda PBB 2% × 1 bulan × 50.000.000", "Rp1.000.000"]
        ],
        mengapaSalah: {
          A: "Bunga 2% flat untuk UU KUP adalah ketentuan sebelum UU Cipta Kerja (2 November 2020); UU HPP tidak mengembalikannya dan tidak menyeragamkan sanksi PBB",
          B: "UU PBB mengatur sendiri denda keterlambatan (Pasal 11 ayat (3)) sebagai ketentuan khusus",
          C: "Denda 25% adalah sanksi dalam SKP (Pasal 10), bukan keterlambatan bayar"
        },
        jebakan: "Soal lintas kelompok: bunga KUP berbasis tarif KMK (sejak UU Cipta Kerja, dipertahankan UU HPP) vs UU PBB yang tidak berubah."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-037",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-02",
      kutipan: "Pasal 15 UU PBB (parafrase): Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan disertai alasan-alasan yang jelas. Keberatan harus diajukan dalam jangka waktu tiga bulan sejak tanggal diterimanya SPPT atau SKP oleh wajib pajak, kecuali apabila wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya.",
      stem: "Data untuk soal V-B8-02: PT Andalan Bara Utama (IUP operasi produksi batubara di Kabupaten Tanah Bumbu) menerima SPPT PBB-P5L 2026 sebesar Rp1.842.500.000 pada 23 Februari 2026. Perusahaan menilai luas areal produktif dalam SPPT terlalu besar karena 600 ha bekas tambang telah direklamasi dan tidak ditambang lagi sejak 2025. Berdasarkan kutipan tersebut, paling lambat kapan dan dalam bentuk apa keberatan harus diajukan?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Surat keberatan dapat diajukan sampai 22 Agustus 2026, bersamaan dengan jatuh tempo SPPT", B: "Surat keberatan berbahasa Indonesia dengan alasan yang jelas harus diajukan paling lambat 22 Mei 2026", C: "Keberatan cukup disampaikan secara lisan kepada petugas KPP paling lambat 22 Mei 2026", D: "Surat keberatan dapat diajukan sampai 22 Februari 2027, satu tahun sejak SPPT diterima" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Keberatan atas SPPT harus tertulis, berbahasa Indonesia, beralasan jelas, dan diajukan dalam 3 bulan sejak SPPT diterima (22 Mei 2026). Tanggal diterima dihitung sebagai hari pertama (contoh Penjelasan Pasal 11 ayat (1) UU PBB: diterima 1 Maret, jatuh tempo 31 Agustus).",
        jejakHitung: [
          ["SPPT diterima", "23 Februari 2026"],
          ["Hari terakhir 3 bulan sejak diterima", "22 Mei 2026"]
        ],
        mengapaSalah: {
          A: "Enam bulan adalah jatuh tempo pembayaran SPPT, bukan batas keberatan",
          C: "Pasal 15 ayat (2) mensyaratkan keberatan tertulis",
          D: "Dua belas bulan adalah batas DJP memutus keberatan, bukan batas mengajukan"
        },
        jebakan: "Tiga angka bulan yang mirip: 3 (keberatan), 6 (jatuh tempo SPPT), 12 (keputusan)."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-038",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-02",
      kutipan: "Pasal 16 UU PBB (parafrase): Direktur Jenderal Pajak dalam jangka waktu paling lama 12 bulan sejak tanggal diterimanya surat keberatan harus memberi keputusan. Keputusan dapat berupa menerima seluruhnya atau sebagian, menolak, atau menambah besarnya jumlah pajak yang terutang. Apabila jangka waktu itu telah lewat dan Direktur Jenderal Pajak tidak memberi suatu keputusan, keberatan yang diajukan dianggap diterima.",
      stem: "Lanjutan data V-B8-02: Surat keberatan PT Andalan Bara Utama atas SPPT 2026 (Rp1.842.500.000, diterima 23 Februari 2026) diterima KPP pada 4 Mei 2026, dan perusahaan melunasi SPPT pada jatuh temponya. Berdasarkan kutipan tersebut, paling lama kapan DJP harus memberi keputusan, dan apa akibatnya bila batas itu lewat?",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "DJP wajib memberi keputusan paling lambat 3 November 2026; bila lewat, keberatan dianggap ditolak", B: "DJP wajib memberi keputusan paling lambat 3 Mei 2027; bila lewat, keberatan dianggap ditolak sehingga perusahaan langsung dapat banding", C: "DJP wajib memberi keputusan paling lambat 3 Mei 2027; bila lewat tanpa keputusan, keberatan dianggap diterima", D: "DJP wajib memberi keputusan paling lambat 22 Februari 2027, yaitu 12 bulan sejak SPPT diterima" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Jangka 12 bulan dihitung sejak surat keberatan diterima (4 Mei 2026), dengan tanggal diterima sebagai hari pertama, sehingga hari terakhirnya 3 Mei 2027; bila lewat tanpa keputusan, keberatan dianggap diterima (Pasal 16 UU PBB).",
        jejakHitung: [
          ["Surat keberatan diterima", "4 Mei 2026"],
          ["Hari terakhir 12 bulan sejak diterima", "3 Mei 2027"]
        ],
        mengapaSalah: {
          A: "Batas keputusan 12 bulan, bukan 6 bulan, dan akibatnya dianggap diterima",
          B: "Fiksi hukum Pasal 16 UU PBB adalah 'dianggap diterima', bukan ditolak",
          D: "Titik awal 12 bulan adalah tanggal surat keberatan diterima, bukan tanggal SPPT diterima"
        },
        jebakan: "Diamnya DJP menguntungkan wajib pajak: dianggap diterima."
      },
      dasarHukum: [{ pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-039",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-02",
      stem: "Lanjutan data V-B8-02: Keputusan keberatan atas SPPT 2026 PT Andalan Bara Utama diterima perusahaan pada 8 Februari 2027. Alih-alih mengurangi, keputusan itu menambah PBB terutang karena penelitian lapangan menemukan bukaan tambang baru per 1 Januari 2026 yang belum dilaporkan dalam SPOP. Upaya hukum yang tersedia dan batas waktunya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan kedua kepada DJP paling lambat 7 Mei 2027 karena keputusan menambah pajak", B: "Gugatan ke Pengadilan Pajak paling lambat 30 hari sejak keputusan diterima", C: "Banding ke Pengadilan Pajak paling lambat 7 Agustus 2027 (6 bulan sejak keputusan diterima)", D: "Banding ke Pengadilan Pajak paling lambat 7 Mei 2027 (3 bulan sejak keputusan diterima)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Keputusan keberatan, termasuk yang menambah pajak (Pasal 16 UU PBB), dapat diajukan banding ke Pengadilan Pajak dalam 3 bulan sejak keputusan diterima (Pasal 35 ayat (2) UU 14/2002).",
        jejakHitung: [
          ["Keputusan keberatan diterima", "8 Februari 2027"],
          ["Hari terakhir 3 bulan sejak diterima", "7 Mei 2027"]
        ],
        mengapaSalah: {
          A: "Tidak ada keberatan kedua atas keputusan keberatan; upaya berikutnya adalah banding",
          B: "Atas isi keputusan keberatan upayanya banding, bukan gugatan; gugatan dipakai untuk pelaksanaan penagihan (14 hari sejak tanggal pelaksanaan penagihan) atau keputusan lain yang dapat digugat (30 hari sejak keputusan diterima), Pasal 40 UU 14/2002",
          C: "Jangka banding 3 bulan, bukan 6 bulan"
        },
        jebakan: "Keputusan keberatan boleh menambah pajak; jalurnya tetap banding dalam 3 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-040",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L 2026 PT Cahaya Kebun diterima pada 10 Maret 2026. Pada April–Juni 2026 banjir besar merendam kantor kebun dan memutus akses jalan sehingga dokumen pendukung tidak dapat dikumpulkan; badan penanggulangan bencana daerah menerbitkan surat keterangan status tanggap darurat. Perusahaan menyampaikan surat keberatan atas luas areal dalam SPPT pada 14 Juli 2026. Penilaian yang tepat atas keberatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan dapat dipertimbangkan walaupun lewat 9 Juni 2026, sepanjang perusahaan dapat menunjukkan bahwa keterlambatan terjadi karena keadaan di luar kekuasaannya", B: "Keberatan pasti tidak dapat diterima karena batas 3 bulan bersifat mutlak tanpa pengecualian", C: "Keberatan tepat waktu karena batasnya 6 bulan sejak SPPT diterima, yaitu 9 September 2026", D: "Keberatan otomatis dialihkan menjadi permohonan pengurangan karena diajukan setelah batas waktu" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Batas normal keberatan adalah 9 Juni 2026, tetapi Pasal 15 UU PBB memberi pengecualian bila wajib pajak dapat menunjukkan bahwa jangka waktu tidak dapat dipenuhi karena keadaan di luar kekuasaannya; surat keterangan tanggap darurat menjadi bukti pendukung.",
        jejakHitung: [
          ["SPPT diterima", "10 Maret 2026"],
          ["Batas normal (3 bulan sejak diterima)", "9 Juni 2026"],
          ["Keberatan diajukan", "14 Juli 2026 (perlu bukti keadaan di luar kekuasaan)"]
        ],
        mengapaSalah: {
          B: "Frasa 'kecuali apabila wajib pajak dapat menunjukkan ...' diabaikan",
          C: "Enam bulan adalah jatuh tempo pembayaran, bukan batas keberatan",
          D: "Tidak ada pengalihan otomatis; pengurangan adalah permohonan tersendiri dengan dasar Pasal 19"
        },
        jebakan: "Kata 'kecuali' dalam Pasal 15 UU PBB membuka ruang keberatan terlambat yang beralasan."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-041", topik: "B8.6", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kayu Lestari menerima empat dokumen PBB-P5L pada 2026: SPPT Tahun Pajak 2026; SKP Tahun Pajak 2025 hasil pemeriksaan; SKP Tahun Pajak 2026 karena SPOP tidak dikembalikan setelah ditegur; dan STP atas denda keterlambatan pembayaran PBB 2025. Semua dokumen tersebut dapat diajukan keberatan menurut UU PBB, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "SPPT Tahun Pajak 2026", B: "SKP Tahun Pajak 2025 hasil pemeriksaan", C: "STP atas denda keterlambatan pembayaran PBB 2025", D: "SKP Tahun Pajak 2026 karena SPOP tidak dikembalikan setelah ditegur" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 15 ayat (1) UU PBB membatasi keberatan pada SPPT dan SKP (baik SKP hasil pemeriksaan maupun SKP karena SPOP tidak dikembalikan); STP yang menagih denda dan pokok yang terlambat dibayar tidak termasuk.",
        jejakHitung: [],
        mengapaSalah: { A: "SPPT disebut tegas dalam Pasal 15 ayat (1) huruf a sebagai objek keberatan", B: "SKP hasil pemeriksaan (Pasal 10 ayat (2) huruf b) adalah objek keberatan", D: "SKP karena SPOP tidak dikembalikan (Pasal 10 ayat (2) huruf a) juga SKP, sehingga dapat diajukan keberatan" },
        jebakan: "Baca kata 'kecuali': yang dicari dokumen yang tidak dapat diajukan keberatan; jangan membawa daftar objek keberatan UU KUP ke PBB."
      },
      dasarHukum: [ { pasal: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-042", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 19 ayat (1) UU PBB (parafrase): Atas permohonan wajib pajak, Menteri Keuangan dapat memberikan pengurangan pajak yang terutang (a) karena kondisi tertentu objek pajak yang ada hubungannya dengan subjek pajak dan/atau karena sebab-sebab tertentu lainnya; atau (b) dalam hal objek pajak terkena bencana alam atau sebab lain yang luar biasa.",
      stem: "Pada Agustus 2026 kebakaran lahan merusak 40% areal produktif kebun PT Lestari Agro Mandiri. SPPT PBB-P5L 2026 yang diterima Maret 2026 sudah sesuai dengan keadaan objek pada 1 Januari 2026 (luas, NJOP, dan subjek tidak dipersoalkan). Perusahaan ingin meringankan beban PBB 2026. Berdasarkan kutipan tersebut, jalur yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan keberatan atas SPPT 2026 karena NJOP kebun turun akibat kebakaran", B: "Tidak ada upaya; PBB 2026 pasti terutang penuh karena keadaan objek dikunci per 1 Januari", C: "Mengajukan restitusi PBB 2026 atas bagian areal yang terbakar", D: "Mengajukan permohonan pengurangan PBB karena objek terkena bencana atau sebab lain yang luar biasa" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan dipakai bila penetapan tidak benar; di sini penetapan sudah benar menurut keadaan 1 Januari, sedangkan kerusakan terjadi kemudian. Pasal 19 ayat (1) huruf b menyediakan pengurangan atas permohonan untuk objek yang terkena bencana atau sebab luar biasa.",
        jejakHitung: [],
        mengapaSalah: { A: "Penetapan menurut keadaan 1 Januari sudah benar, sehingga tidak ada yang dapat dikoreksi melalui keberatan", B: "Keadaan 1 Januari mengunci penetapan, tetapi Pasal 19 tetap membuka keringanan atas permohonan", C: "Restitusi mensyaratkan kelebihan bayar; pajak yang ditetapkan benar tidak menimbulkan kelebihan" },
        jebakan: "Bedakan 'penetapan salah' (keberatan) dan 'penetapan benar tetapi berat' (pengurangan)."
      },
      dasarHukum: [ { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-043",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Pada 2026 PT Bumi Sawit Prima mengalami tiga kejadian PBB-P5L: (i) SPPT 2026 kebun A sebesar Rp74.000.000 terbayar dua kali karena kesalahan sistem pembayaran internal; (ii) keputusan keberatan menurunkan PBB 2025 kebun B dari Rp410.000.000 menjadi Rp365.000.000, padahal Rp410.000.000 telah dilunasi; (iii) perusahaan masih memiliki tunggakan STP PBB 2025 kebun C sebesar Rp20.000.000. Bila kelebihan pembayaran diperhitungkan lebih dahulu dengan utang pajak yang masih ada, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp119.000.000", B: "Rp54.000.000", C: "Rp25.000.000", D: "Rp99.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kelebihan berasal dari pembayaran ganda dan dari keputusan keberatan yang menurunkan pajak yang sudah dibayar; jumlahnya diperhitungkan dahulu dengan tunggakan STP sebelum dikembalikan.",
        jejakHitung: [
          ["Pembayaran ganda kebun A", "Rp74.000.000"],
          ["Kelebihan akibat keputusan keberatan kebun B (410 − 365 juta)", "Rp45.000.000"],
          ["Jumlah kelebihan", "Rp119.000.000"],
          ["Diperhitungkan dengan tunggakan STP kebun C", "(Rp20.000.000)"],
          ["Dikembalikan", "Rp99.000.000"]
        ],
        mengapaSalah: {
          A: "Tunggakan STP tidak diperhitungkan lebih dahulu",
          B: "Kelebihan dari keputusan keberatan kebun B terlupa",
          C: "Pembayaran ganda kebun A terlupa"
        },
        jebakan: "Restitusi selalu didahului kompensasi ke utang pajak yang masih ada."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (3) UU PBB (keputusan keberatan dapat menerima seluruhnya atau sebagian)", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 123 huruf a, Pasal 125 ayat (5), Pasal 152 huruf a dan huruf b, serta Pasal 154 ayat (1) huruf f dan ayat (2) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-044",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "STP PBB-P5L PT Sumber Rimba Jaya sebesar Rp127.280.000 (pokok dan denda) diterima pada 3 Agustus 2026 dan tidak dilunasi. KPP melanjutkan dengan tindakan penagihan aktif berdasarkan UU PPSP dan peraturan pelaksananya. Rangkaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP jatuh tempo 2 Februari 2027 (6 bulan) → Surat Paksa langsung → lelang 14 hari kemudian", B: "STP jatuh tempo 2 September 2026 → Surat Teguran setelah lewat 7 hari dari jatuh tempo → Surat Paksa setelah lewat 21 hari sejak Surat Teguran disampaikan → penyitaan bila utang tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan", C: "STP jatuh tempo 2 September 2026 → Surat Paksa diterbitkan keesokan harinya tanpa Surat Teguran → penyitaan setelah 21 hari", D: "STP jatuh tempo 2 September 2026 → penagihan diserahkan kepada pemerintah kabupaten letak objek sebagai pajak daerah" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB jatuh tempo 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB). Selanjutnya berlaku urutan UU PPSP: Surat Teguran (lewat 7 hari dari jatuh tempo), Surat Paksa (lewat 21 hari sejak Surat Teguran), lalu Surat Perintah Melaksanakan Penyitaan bila utang tidak dilunasi dalam 2 × 24 jam setelah Surat Paksa diberitahukan.",
        jejakHitung: [
          ["STP diterima", "3 Agustus 2026"],
          ["Jatuh tempo (1 bulan sejak diterima)", "2 September 2026"],
          ["Surat Teguran", "setelah lewat 7 hari dari jatuh tempo"],
          ["Surat Paksa", "setelah lewat 21 hari sejak Surat Teguran disampaikan"],
          ["Penyitaan", "bila tidak lunas 2 × 24 jam sejak Surat Paksa"]
        ],
        mengapaSalah: {
          A: "Enam bulan adalah jatuh tempo SPPT, bukan STP; lelang juga tidak langsung setelah Surat Paksa",
          C: "Surat Paksa didahului Surat Teguran dalam penagihan biasa",
          D: "PBB-P5L adalah pajak pusat; penagihannya dilakukan DJP, bukan pemerintah daerah"
        },
        jebakan: "Soal lintas kelompok: jatuh tempo menurut UU PBB, tahapan penagihan menurut UU PPSP."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8, 11, dan 12 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 6 ayat (1) sampai (3) PMK 61/2023 (tata cara penagihan pajak)", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-045",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Staf keuangan PT Teh Puncak Lestari akan melunasi SPPT PBB-P5L 2026 pada Agustus 2026, sebelum jatuh tempo. Cara pembayaran yang sesuai dengan ketentuan dan sistem administrasi yang berlaku saat ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mentransfer ke rekening kas daerah kabupaten letak kebun karena PBB menjadi pendapatan daerah", B: "Memotongkan PBB dari angsuran PPh Pasal 25 sehingga tidak perlu setoran terpisah", C: "Membuat kode billing di Coretax dengan NPWP 16 digit dan NOP objek, lalu membayar melalui bank/pos persepsi; bukti penerimaan negara ber-NTPN menjadi tanda pelunasan", D: "Membayar tunai kepada petugas KPP dengan tanda terima manual sebagai bukti pelunasan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB-P5L dibayar ke kas negara melalui bank, kantor pos dan giro, atau tempat lain yang ditunjuk Menteri Keuangan (Pasal 11 ayat (5) UU PBB); sejak Coretax (PMK 81/2024) pembayaran memakai kode billing dengan NPWP 16 digit, dan NTPN menjadi tanda pelunasan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PBB-P5L adalah penerimaan negara yang baru kemudian dibagihasilkan; wajib pajak tidak menyetor ke kas daerah",
          B: "PBB tidak dapat dikompensasikan ke angsuran PPh; masing-masing jenis pajak disetor terpisah",
          D: "Pembayaran pajak tidak dilakukan tunai kepada petugas KPP"
        },
        jebakan: "Bagi hasil ke daerah terjadi setelah setoran ke kas negara, bukan dengan menyetor ke kas daerah. Pasal 12 UU PBB mengatur dasar penagihan (SPPT, SKP, STP), bukan tempat pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (5) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 70,
      verifikasi: "✅"
    },
    {
      id: "B8-046",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Pada September 2026 PT Agro Dwi Sentosa, yang sudah melunasi PBB-P5L 2026 kebun sawitnya pada Agustus 2026, bermaksud melunasi PBB-P5L 2026 kebun karet (Rp76.500.000), tetapi kode billing dibuat dengan NOP kebun sawit. Akibatnya pembayaran tercatat sebagai pembayaran tambahan untuk kebun sawit, sedangkan kebun karet tercatat belum lunas. Langkah penyelesaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membayar ulang PBB kebun karet, lalu menunggu tahun berikutnya untuk mengkreditkan pembayaran yang salah", B: "Mengajukan keberatan atas SPPT kebun karet karena tercatat belum lunas", C: "Mengajukan pemindahbukuan agar pembayaran dicatat untuk NOP kebun karet, sehingga tidak perlu membayar ulang", D: "Mengajukan pengurangan PBB kebun sawit sebesar Rp76.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB kebun sawit sudah lunas, sehingga pembayaran yang tercatat pada NOP kebun sawit menjadi pembayaran yang lebih besar daripada pajak terutang atas NOP itu. PMK 81/2024 menyediakan pemindahbukuan atas permohonan wajib pajak untuk jumlah pembayaran yang lebih besar daripada pajak terutang (Pasal 109 ayat (1) huruf d), juga untuk PBB (ayat (2)). Bukti Pemindahbukuan memakai tanggal pembayaran semula (Pasal 111 ayat (2)), sehingga kebun karet tidak perlu dibayar ulang. Keberatan dan pengurangan menyangkut penetapan atau keringanan pajak, bukan kesalahan pencatatan pembayaran.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pajak tidak dikreditkan antartahun seperti PPh; membayar ulang menimbulkan kelebihan bayar yang harus diurus lagi",
          B: "SPPT kebun karet tidak salah; masalahnya ada pada pencatatan pembayaran",
          D: "Pengurangan adalah keringanan atas pajak terutang, bukan koreksi salah bayar"
        },
        jebakan: "Salah bayar → pemindahbukuan; salah tetap → keberatan; berat bayar → pengurangan. Pemindahbukuan atas kelebihan bayar tidak dapat diajukan bila pembayaran itu sudah diperhitungkan dengan pajak terutang dalam SPPT (Pasal 109 ayat (3) huruf f PMK 81/2024); karena itu penting bahwa SPPT kebun sawit sudah lunas lebih dahulu. Tanggal bayar dalam Bukti Pemindahbukuan mengikuti tanggal setoran semula."
      },
      dasarHukum: [{ pasal: "Pasal 108 huruf a, Pasal 109 ayat (1) huruf d, ayat (2), dan ayat (3) huruf f, serta Pasal 111 ayat (2) PMK 81/2024 (pemindahbukuan)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (5) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-047", topik: "B8.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Dalam tahun buku 2026, PT Kebun Nusa Raya (wajib pajak badan, tahun buku kalender) membayar: PBB-P5L 2026 Rp312.000.000; denda STP PBB 2025 Rp6.240.000; bea meterai atas kontrak penjualan CPO Rp1.500.000; dan angsuran PPh Pasal 25 Rp480.000.000. Seluruh pembayaran dibebankan sebagai biaya dalam laporan laba rugi komersial. Jumlah yang dapat dikurangkan sebagai biaya dalam menghitung penghasilan neto fiskal 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp319.740.000", B: "Rp313.500.000", C: "Rp312.000.000", D: "Rp799.740.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 6 ayat (1) huruf a UU PPh membolehkan biaya pajak kecuali PPh (PBB dan bea meterai); Pasal 9 ayat (1) huruf h dan k melarang pembebanan PPh dan sanksi administrasi.",
        jejakHitung: [ ["PBB-P5L (pajak selain PPh)", "Rp312.000.000"], ["Bea meterai (pajak selain PPh)", "Rp1.500.000"], ["Denda STP PBB (sanksi administrasi)", "tidak dapat dikurangkan"], ["Angsuran PPh Pasal 25 (Pasal 9 ayat (1) huruf h; menjadi kredit pajak)", "tidak dapat dikurangkan"], ["Jumlah biaya fiskal", "Rp313.500.000"] ],
        mengapaSalah: { A: "Denda STP PBB ikut dibiayakan, padahal sanksi administrasi dilarang Pasal 9 ayat (1) huruf k", C: "Bea meterai terlupa; bea meterai adalah pajak selain PPh yang dapat dibiayakan", D: "Angsuran PPh Pasal 25 dan denda ikut dibiayakan" },
        jebakan: "Soal lintas kelompok: semua 'pajak' tampak sama di buku besar, tetapi perlakuan fiskalnya berbeda."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) huruf a UU PPh" }, { pasal: "Pasal 9 ayat (1) huruf h dan k UU PPh" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-048", topik: "B8.7", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Sawit Andalas dan Koperasi Tani Makmur bersengketa atas 120 ha lahan di tepi HGU. Selama tiga tahun terakhir PT Sawit Andalas selalu melunasi PBB-P5L yang mencakup lahan tersebut dan berencana memakai bukti pelunasan PBB (NTPN dan SPPT lunas) sebagai bukti utama kepemilikan di pengadilan. Penilaian yang tepat atas rencana tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tepat; SPPT yang dilunasi adalah bukti hak atas tanah yang setara dengan sertifikat HGU", B: "Tidak tepat; tanda pelunasan PBB bukan merupakan bukti pemilikan hak, karena pengenaan PBB didasarkan pada hak atau manfaat nyata atas objek", C: "Tepat; setelah PBB dilunasi tiga tahun berturut-turut, hak atas tanah beralih kepada pembayar", D: "Tidak tepat; bukti pelunasan PBB baru sah sebagai bukti hak setelah dibubuhi meterai" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penjelasan Pasal 4 ayat (1) UU PBB menegaskan tanda pembayaran/pelunasan pajak bukan merupakan bukti pemilikan hak; subjek PBB ditentukan oleh hak atau manfaat nyata, bukan sebaliknya.",
        jejakHitung: [],
        mengapaSalah: { A: "SPPT dan bukti bayar PBB adalah dokumen pajak, bukan bukti hak atas tanah", C: "Tidak ada ketentuan peralihan hak karena membayar PBB", D: "Meterai tidak mengubah fungsi dokumen; bea meterai hanya pajak atas dokumen" },
        jebakan: "Arah logikanya: hak atau manfaat → subjek PBB, bukan bayar PBB → punya hak."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-049", topik: "B8.8", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Agro Kalbar Sejahtera terdaftar di KPP di Jakarta dan berkantor pusat di Jakarta, sedangkan satu-satunya kebunnya berada di Kabupaten Sanggau, Provinsi Kalimantan Barat. PBB-P5L 2026 sebesar Rp640.000.000 telah dilunasi ke kas negara. Daerah yang menerima porsi terbesar dari bagi hasil penerimaan PBB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Provinsi DKI Jakarta sebagai domisili wajib pajak", B: "Tidak ada daerah, karena pajak pusat seluruhnya menjadi pendapatan APBN", C: "Kabupaten Sanggau sebagai daerah penghasil (letak objek)", D: "Provinsi Kalimantan Barat" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB terutang di wilayah kabupaten/kota letak objek (Pasal 8 ayat (3) UU PBB), dan bagi hasil PBB memberikan porsi terbesar kepada kabupaten/kota penghasil, disusul provinsi yang bersangkutan.",
        jejakHitung: [],
        mengapaSalah: { A: "Domisili atau KPP terdaftar tidak menentukan daerah penerima bagi hasil PBB", B: "Pasal 18 UU PBB membagi sebagian besar penerimaan PBB kepada daerah", D: "Provinsi menerima bagian, tetapi porsinya lebih kecil daripada kabupaten penghasil" },
        jebakan: "Letak objek menentukan dua hal sekaligus: tempat terutang dan daerah penghasil."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "UU 1/2022 (DBH PBB)", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-050", topik: "B8.8", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 18 ayat (1) UU PBB (parafrase): Hasil penerimaan pajak merupakan penerimaan negara yang dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan pembagian sekurang-kurangnya 90% untuk Pemerintah Daerah sebagai pendapatan daerah yang bersangkutan.",
      stem: "Dalam rapat anggaran, seorang analis menyatakan: 'Karena PBB-P5L dipungut DJP, seluruh penerimaannya menjadi hak pemerintah pusat dan tidak dibagi ke daerah.' Berdasarkan kutipan tersebut dan ketentuan bagi hasil yang berlaku saat ini, tanggapan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak tepat; PBB-P5L dibagihasilkan ke daerah sekurang-kurangnya 90%, kini disalurkan sebagai DBH pajak", B: "Tepat; bagi hasil hanya berlaku untuk PBB-P2, sedangkan PBB-P5L sepenuhnya milik pusat", C: "Tidak tepat; seluruh PBB-P5L langsung disetor wajib pajak ke rekening kas daerah", D: "Tidak tepat; daerah hanya menerima paling banyak 10% sebagai biaya pemungutan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB-P5L adalah penerimaan negara (pajak pusat) yang dibagihasilkan kepada daerah. Pasal 18 ayat (1) UU PBB menetapkan bagian daerah sekurang-kurangnya 90%; sejak UU 1/2022 penyalurannya berbentuk DBH pajak dan Pasal 113 UU 1/2022 menetapkan 100% untuk daerah (16,2% provinsi, 73,8% kabupaten/kota penghasil, 10% kabupaten/kota lain). PBB-P2 justru bukan bagi hasil karena sudah menjadi pajak daerah.",
        jejakHitung: [],
        mengapaSalah: { B: "PBB-P2 adalah pajak daerah (PAD), bukan objek bagi hasil; PBB-P5L-lah yang dibagihasilkan", C: "Wajib pajak menyetor ke kas negara; pembagian dilakukan kemudian oleh pemerintah", D: "Pasal 18 ayat (1) justru menetapkan bagian daerah sekurang-kurangnya 90%; 10% bukan batas atas bagian daerah dan bukan sekadar biaya pemungutan" },
        jebakan: "'Dipungut pusat' tidak berarti 'dinikmati pusat'."
      },
      dasarHukum: [ { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "UU 1/2022 (DBH pajak)", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-051", topik: "B8.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Pemerintah Kabupaten Kutai Barat memperoleh beberapa jenis penerimaan dari wilayahnya pada 2026: PBB-P5L tambang batubara, PBB-P2 atas rumah dan ruko, serta BPHTB atas jual beli tanah. Pengelompokan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB-P5L: DBH pajak dari pusat; PBB-P2 dan BPHTB: pajak daerah (PAD)", B: "Ketiganya adalah DBH pajak yang ditransfer dari pemerintah pusat", C: "PBB-P5L dan PBB-P2: DBH pajak dari pusat; BPHTB: pajak daerah (PAD)", D: "PBB-P5L: PAD karena objeknya di kabupaten; PBB-P2 dan BPHTB: DBH" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB-P5L adalah pajak pusat yang dibagihasilkan sebagai DBH pajak; PBB-P2 dan BPHTB adalah pajak daerah menurut UU 1/2022 sehingga penerimaannya menjadi PAD.",
        jejakHitung: [],
        mengapaSalah: { B: "PBB-P2 dan BPHTB dipungut sendiri oleh daerah, bukan ditransfer dari pusat", C: "PBB-P2 sudah menjadi pajak daerah, bukan DBH", D: "Letak objek di kabupaten tidak mengubah PBB-P5L menjadi pajak daerah" },
        jebakan: "PBB-P2 pernah menjadi bagi hasil sebelum dialihkan ke daerah; kini PAD."
      },
      dasarHukum: [ { pasal: "UU 1/2022 (pajak daerah PBB-P2 dan BPHTB; DBH pajak)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-052", topik: "B8.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "IUP operasi produksi PT Nikel Teluk Indah berakhir pada 31 Juli 2026. Setelah reklamasi, pada Oktober 2026 lahan bekas tambang beserta mess dan dermaga diserahkan kepada pemerintah kabupaten dan ditetapkan sebagai kawasan wisata yang dikelola BUMD milik kabupaten mulai 1 November 2026. Perlakuan PBB atas lahan dan bangunan tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB-P5L 2026 dihitung proporsional Januari–Juli 2026, dan sejak Agustus 2026 menjadi PBB-P2", B: "Tetap PBB-P5L seterusnya karena objek pernah didaftarkan sebagai sektor pertambangan", C: "Mulai 2027 menjadi PBB-P5L sektor lainnya dan penerimaannya tetap dibagihasilkan sebagai DBH", D: "Tahun Pajak 2026 tetap PBB-P5L minerba (keadaan 1 Januari); mulai 2027 menjadi PBB-P2 kabupaten dan masuk PAD" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keadaan 1 Januari mengunci rezim Tahun Pajak 2026 (Pasal 8 ayat (2) UU PBB). Setelah tidak lagi digunakan untuk usaha pertambangan, objek masuk definisi PBB-P2 (Pasal 38 ayat (1) UU 1/2022), dipungut kabupaten, dan menjadi PAD, bukan DBH.",
        jejakHitung: [],
        mengapaSalah: { A: "PBB tidak mengenal pengenaan proporsional dalam tahun berjalan", B: "Rezim ditentukan penggunaan objek setiap 1 Januari, bukan riwayat pendaftaran", C: "Kawasan wisata bukan sektor P5L; objek di luar kawasan usaha P3 menjadi PBB-P2" },
        jebakan: "Gabungkan tiga hal: 1 Januari, batas P5L–P2 menurut UU HKPD, dan siapa penerima hasilnya."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-053", topik: "B8.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Dari kegiatan PT Batu Hitam Sejahtera (IUP batubara) di Kabupaten Kutai Barat, negara menerima: PBB-P5L sektor minerba, iuran produksi (royalti) batubara, dan PPh Pasal 21 atas gaji karyawan orang pribadi dalam negeri. Pengelompokan dana bagi hasil yang tepat menurut UU 1/2022 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB-P5L dan royalti batubara: DBH sumber daya alam karena berasal dari pertambangan; PPh Pasal 21: DBH pajak", B: "PBB-P5L dan PPh Pasal 21: DBH pajak; royalti batubara: DBH sumber daya alam", C: "Ketiganya DBH sumber daya alam", D: "PBB-P5L: DBH pajak; royalti dan PPh Pasal 21 tidak dibagihasilkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "UU 1/2022 membagi DBH menjadi DBH pajak (PBB, PPh Pasal 21 dan PPh Pasal 25/29 WP OP dalam negeri, cukai hasil tembakau) dan DBH SDA (antara lain minerba berupa iuran tetap dan royalti, kehutanan, migas, panas bumi, perikanan). PBB-P5L tetap DBH pajak meskipun objeknya tambang.",
        jejakHitung: [],
        mengapaSalah: { A: "Sumber DBH ditentukan jenis penerimaannya (pajak vs PNBP SDA), bukan sektor usahanya", C: "PBB dan PPh Pasal 21 adalah penerimaan pajak", D: "Royalti minerba dan PPh Pasal 21 termasuk penerimaan yang dibagihasilkan" },
        jebakan: "PBB atas tambang → DBH pajak; royalti tambang → DBH SDA."
      },
      dasarHukum: [ { pasal: "UU 1/2022 (DBH pajak dan DBH SDA)", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-054",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Agro Rejang Lestari memegang HGU kebun campuran kelapa sawit dan karet di Kabupaten Bengkulu Utara dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif kelapa sawit (tanaman menghasilkan) 1.200 ha dengan nilai tanah Rp3.900/m² dan SIT kelapa sawit Rp5.800/m²; areal produktif karet (sedang disadap) 800 ha dengan nilai tanah Rp3.900/m² dan SIT karet Rp4.100/m²; areal belum produktif (lahan sudah diolah tetapi belum ditanami) 300 ha dengan nilai tanah Rp3.900/m²; areal emplasemen 30 ha dengan nilai Rp12.000/m²; NJOP bangunan (pabrik kelapa sawit, gudang lateks, perumahan karyawan) Rp23.300.000.000. Menurut data penilaian, SIT hanya melekat pada areal produktif sesuai jenis tanamannya. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp465.176.000", B: "Rp437.976.000", C: "Rp472.776.000", D: "Rp391.376.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Tiap areal produktif (telah ditanami) dinilai nilai tanah ditambah SIT jenis tanamannya sendiri (sawit Rp5.800, karet Rp4.100); areal belum produktif (belum ditanami) dan emplasemen hanya nilai tanah. NJOP bumi ditambah bangunan, dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["Produktif sawit 12.000.000 m² × (3.900 + 5.800)", "Rp116.400.000.000"],
          ["Produktif karet 8.000.000 m² × (3.900 + 4.100)", "Rp64.000.000.000"],
          ["Belum produktif 3.000.000 m² × 3.900", "Rp11.700.000.000"],
          ["Emplasemen 300.000 m² × 12.000", "Rp3.600.000.000"],
          ["NJOP bumi", "Rp195.700.000.000"],
          ["+ NJOP bangunan", "Rp219.000.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp218.988.000.000"],
          ["× 40% × 0,5%", "Rp437.976.000"]
        ],
        mengapaSalah: {
          A: "SIT kelapa sawit dipakai juga untuk areal karet (+Rp13.600.000.000 NJOP), padahal SIT mengikuti jenis tanaman",
          C: "SIT kelapa sawit ikut ditambahkan pada areal belum produktif yang belum ditanami (+Rp17.400.000.000 NJOP)",
          D: "NJOP bangunan pabrik, gudang, dan perumahan di dalam HGU tidak dijumlahkan"
        },
        jebakan: "Pada kebun campuran, SIT dibaca per jenis tanaman dan hanya untuk areal yang telah ditanami (Pasal 14 ayat (1) huruf a PMK 186/2019: tanaman yang belum menghasilkan pun termasuk areal produktif); tiga pengecoh hanya berbeda satu langkah dari jawaban benar."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-055", topik: "B8.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Areal emplasemen kebun kelapa sawit PT Kapuas Agro Mandiri di Kabupaten Sanggau per 1 Januari 2026 seluas 42 ha dengan nilai tanah Rp14.000/m². Di dalamnya terdapat masjid yang terbuka untuk umum dan dikelola nirlaba (lahan 0,6 ha, bangunan Rp1.200.000.000) serta sekolah dasar umum yang dikelola yayasan pendidikan nirlaba dengan memakai lahan dan gedung milik perusahaan secara cuma-cuma (lahan 1,4 ha, bangunan Rp800.000.000). Bangunan lain di emplasemen: pabrik kelapa sawit Rp28.000.000.000 dan perumahan karyawan Rp6.500.000.000. Perusahaan juga memiliki kantor pemasaran di Kota Pontianak (NJOP Rp4.000.000.000) dan 25 truk pengangkut TBS (nilai buku Rp3.000.000.000). Jumlah NJOP bumi dan bangunan areal emplasemen yang masuk penghitungan PBB-P5L 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp42.380.000.000", B: "Rp44.100.000.000", C: "Rp40.100.000.000", D: "Rp43.100.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Lahan dan bangunan masjid umum nirlaba serta sekolah umum nirlaba dikecualikan (Pasal 3 ayat (1) huruf a UU PBB), sehingga emplasemen kena pajak 40 ha. Pabrik dan perumahan karyawan di dalam HGU adalah bangunan PBB-P5L; kantor di Kota Pontianak adalah PBB-P2 dan truk adalah benda bergerak.",
        jejakHitung: [ ["Emplasemen kena pajak (42 − 0,6 − 1,4)", "40 ha = 400.000 m²"], ["Bumi 400.000 m² × 14.000", "Rp5.600.000.000"], ["Bangunan: pabrik 28.000.000.000 + perumahan 6.500.000.000", "Rp34.500.000.000"], ["NJOP emplasemen (bumi + bangunan)", "Rp40.100.000.000"] ],
        mengapaSalah: { A: "Lahan dan bangunan masjid serta sekolah nirlaba ikut dihitung (42 ha × 14.000 + 36.500.000.000)", B: "Kantor pemasaran di Kota Pontianak ikut dihitung, padahal di luar kawasan usaha sehingga objek PBB-P2 (Pasal 38 ayat (1) UU 1/2022)", D: "Truk pengangkut TBS ikut dihitung, padahal benda bergerak bukan bangunan" },
        jebakan: "Empat filter sekaligus: pengecualian Pasal 3, batas kawasan P5L–P2, definisi bangunan, dan konversi hektare."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-056",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-04",
      stem: "Data untuk soal V-B8-04: PT Laut Natuna Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja lepas pantai (offshore) di laut wilayah Indonesia; fasilitas penerima gas di darat berada di dalam wilayah kerja yang sama. Perusahaan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal perairan wilayah kerja 62.000 ha dengan nilai Rp40/m²; areal darat fasilitas penerima 12 ha dengan nilai Rp125.000/m²; NJOP tubuh bumi hasil penilaian DJP Rp1.180.000.000.000; anjungan produksi yang dipancang ke dasar laut Rp620.000.000.000; pipa gas bawah laut dari anjungan ke darat Rp185.000.000.000; bangunan fasilitas penerima gas di darat Rp95.000.000.000; dua kapal crew boat milik sendiri Rp45.000.000.000; serta drillship sewaan milik kontraktor pengeboran asing (nilai kontrak sewa Rp210.000.000.000). PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.329.576.000", B: "Rp4.189.976.000", C: "Rp4.019.576.000", D: "Rp4.239.576.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Bumi meliputi areal perairan, areal darat di dalam wilayah kerja, dan tubuh bumi; anjungan terpancang, pipa bawah laut, dan fasilitas penerima di darat adalah bangunan. Crew boat dan drillship sewaan adalah benda bergerak (drillship juga bukan milik KKKS), sehingga dikeluarkan.",
        jejakHitung: [
          ["Perairan 620.000.000 m² × 40", "Rp24.800.000.000"],
          ["Darat 120.000 m² × 125.000", "Rp15.000.000.000"],
          ["Tubuh bumi", "Rp1.180.000.000.000"],
          ["Bangunan: 620.000.000.000 + 185.000.000.000 + 95.000.000.000", "Rp900.000.000.000"],
          ["NJOP objek", "Rp2.119.800.000.000"],
          ["− NJOPTKP", "Rp2.119.788.000.000"],
          ["× 40% × 0,5%", "Rp4.239.576.000"]
        ],
        mengapaSalah: {
          A: "Crew boat ikut dihitung sebagai bangunan (2.164.788.000.000 × 0,2%), padahal kapal adalah benda bergerak",
          B: "Areal perairan dianggap bukan bumi (2.094.988.000.000 × 0,2%), padahal bumi meliputi perairan pedalaman dan laut wilayah",
          C: "Fasilitas penerima di darat (lahan dan bangunan Rp110.000.000.000) dianggap PBB-P2, padahal berada di dalam wilayah kerja migas"
        },
        jebakan: "Data berlebih (drillship sewaan, crew boat) sengaja dicampur dengan objek sebenarnya; pilah dulu bumi, bangunan, dan benda bergerak. Menurut Pasal 17 ayat (6) dan ayat (7) huruf b PMK 186/2019, NJOP areal offshore migas ditetapkan dengan Keputusan Dirjen Pajak dan tubuh bumi eksploitasi dinilai dari pendapatan minyak dan/atau gas bumi × angka kapitalisasi; di soal keduanya diberikan sebagai data penilaian."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5 ayat (1), Pasal 9 ayat (1) huruf c, dan Pasal 17 ayat (2), (6), (7) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "B8-057",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-04",
      stem: "Lanjutan data V-B8-04: SPPT PBB-P5L 2026 PT Laut Natuna Energi sebesar Rp4.329.576.000 diterima pada 16 Maret 2026. Setelah dicocokkan dengan daftar aset, ternyata DJP memasukkan dua kapal crew boat (Rp45.000.000.000) sebagai bangunan; data lain sesuai dengan keadaan 1 Januari 2026. Manajer pajak ingin memperbaiki penetapan tersebut tanpa menimbulkan sanksi. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan keberatan tertulis atas SPPT paling lambat 15 Juni 2026 dengan alasan kapal adalah benda bergerak; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan SPPT tetap harus dilunasi paling lambat 15 September 2026", B: "Mengajukan permohonan pengurangan PBB paling lambat 15 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan SPPT tetap harus dilunasi paling lambat 15 September 2026", C: "Mengajukan keberatan tertulis atas SPPT paling lambat 15 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp225.000.000, dan SPPT tetap harus dilunasi paling lambat 15 September 2026", D: "Mengajukan keberatan tertulis atas SPPT paling lambat 15 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan pelunasan SPPT ditunda sampai keputusan keberatan terbit" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Memasukkan benda bergerak sebagai bangunan adalah penetapan yang tidak benar, sehingga jalurnya keberatan atas SPPT dalam 3 bulan sejak diterima (15 Juni 2026). Penurunan PBB = 0,2% × Rp45.000.000.000 (NJOPTKP tidak berubah). Keberatan tidak menunda kewajiban melunasi SPPT pada jatuh tempo 6 bulan (15 September 2026).",
        jejakHitung: [
          ["SPPT diterima", "16 Maret 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "15 Juni 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "15 September 2026"],
          ["Penurunan PBB 45.000.000.000 × 40% × 0,5%", "Rp90.000.000"],
          ["Pembanding: SPPT setelah keberatan dikabulkan", "Rp4.239.576.000"]
        ],
        mengapaSalah: {
          B: "Pengurangan (Pasal 19) adalah keringanan atas penetapan yang benar; penetapan yang memasukkan benda bergerak diperbaiki lewat keberatan",
          C: "Penurunan dihitung 0,5% × NJOP tanpa NJKP 40%",
          D: "Keberatan tidak menunda kewajiban membayar; menunggu keputusan memicu denda 2% sebulan"
        },
        jebakan: "Bedakan salah tetap (keberatan) dari keringanan (pengurangan), dan ingat dua tenggat berjalan bersamaan: 3 bulan keberatan, 6 bulan pelunasan."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-058",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kabel Samudra Nusantara memiliki dua objek PBB-P5L sektor lainnya yang masing-masing mempunyai NOP dan SPPT sendiri: (1) sistem kabel telekomunikasi bawah laut antarprovinsi dengan NJOP bumi (koridor perairan) Rp2.400.000.000 dan NJOP bangunan (kabel yang dipasang tetap di dasar laut) Rp356.800.000.000; (2) kabel telekomunikasi bawah laut lama antarpulau kecil sepanjang 6 km yang dipasang pada 2004, dengan NJOP bumi Rp210.000.000 dan NJOP bangunan setelah penyusutan Rp650.000.000. Perusahaan juga memiliki kapal perawatan kabel senilai Rp120.000.000.000. Besarnya PBB-P5L dalam SPPT objek (2) Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp848.000", B: "Rp860.000", C: "Rp1.720.000", D: "Rp1.696.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "NJOPTKP diberikan sekali pada objek ber-NJOP terbesar (objek (1)), sehingga objek (2) dikenai penuh. NJOP objek (2) Rp860.000.000 < Rp1.000.000.000, sehingga sebagai objek sektor lainnya NJKP-nya 20% (PP 25/2002).",
        jejakHitung: [
          ["NJOP objek (2) 210.000.000 + 650.000.000", "Rp860.000.000"],
          ["NJOPTKP", "sudah dipakai objek (1)"],
          ["NJOP < Rp1 miliar → NJKP 20%", "Rp172.000.000"],
          ["PBB 0,5%", "Rp860.000"],
          ["Pembanding: SPPT objek (1) (359.200.000.000 − 12.000.000) × 40% × 0,5%", "Rp718.376.000"]
        ],
        mengapaSalah: {
          A: "NJOPTKP dikurangkan lagi pada objek (2) ((860.000.000 − 12.000.000) × 20% × 0,5%)",
          C: "Memakai NJKP 40% seperti objek perkebunan/pertambangan, padahal objek lainnya ber-NJOP di bawah Rp1 miliar memakai 20%",
          D: "Dua kesalahan sekaligus: NJOPTKP dikurangkan lagi dan NJKP 40%"
        },
        jebakan: "Persentase NJKP sektor lainnya diuji per objek; objek kecil milik wajib pajak besar tetap bisa memakai 20%. Kapal perawatan kabel adalah data berlebih (benda bergerak)."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 8 ayat (1) huruf d dan Pasal 9 ayat (2) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-059",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Grup usaha PT Bahari Interkoneksi pada 1 Januari 2026 menguasai: (1) jaringan pipa transmisi gas bawah laut antarprovinsi milik anak usaha transmisi (bukan kontraktor kontrak kerja sama migas) yang dipasang tetap di dasar laut; (2) kabel listrik bawah laut antarpulau yang dilekatkan tetap di dasar laut; (3) kapal penggelar kabel untuk memasang dan merawat kabel; (4) areal perairan laut yang tercantum dalam Surat Izin Usaha Perikanan dan dipakai untuk pembudidayaan ikan kakap dengan keramba jaring apung berjangkar tetap; (5) gedung kantor pusat grup di Kota Surabaya. Pengelompokan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), (3), dan (4) objek PBB-P5L sektor lainnya karena semuanya berada di laut; (5) objek PBB-P2 Kota Surabaya", B: "(1), (2), dan (4) bukan objek PBB karena laut bukan bumi menurut UU PBB; (3) bukan objek; (5) objek PBB-P2 Kota Surabaya", C: "(1) dan (2) objek PBB-P5L sektor pertambangan migas karena berkaitan dengan energi; (4) objek PBB-P2 kabupaten terdekat; (3) bukan objek; (5) objek PBB-P2 Kota Surabaya", D: "(1), (2), dan (4) objek PBB-P5L sektor lainnya; (3) bukan objek PBB karena benda bergerak; (5) objek PBB-P2 Kota Surabaya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sektor lainnya meliputi perairan yang digunakan untuk perikanan tangkap, pembudidayaan ikan berizin usaha perikanan, jaringan pipa, jaringan kabel, dan fasilitas penyimpanan dan pengolahan terapung (Pasal 2 huruf f dan Pasal 8 PMK 186/2019 s.t.d.d. PMK 234/2022); pipa dan kabel yang dilekatkan tetap di dasar laut adalah bangunan sektor lainnya (Pasal 9 ayat (2)). Laut tidak dapat menjadi objek PBB-P2 karena bumi PBB-P2 hanya tanah dan perairan pedalaman (Pasal 1 angka 34 UU 1/2022). Kapal adalah benda bergerak, sedangkan kantor pusat di darat Kota Surabaya adalah objek PBB-P2.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Letak di laut tidak menjadikan kapal objek; kapal adalah benda bergerak, bukan konstruksi yang dilekatkan tetap (Pasal 1 angka 2 UU PBB)",
          B: "Penjelasan Pasal 1 angka 1 UU PBB memasukkan perairan pedalaman dan laut wilayah ke dalam permukaan bumi, dan Pasal 8 ayat (1) PMK 186/2019 s.t.d.d. PMK 234/2022 menjadikan perairan itu bumi sektor lainnya",
          C: "Pipa milik perusahaan transmisi (bukan KKKS) dan kabel listrik tidak berada di kawasan pertambangan migas; perairan laut untuk budidaya ikan tidak dapat menjadi objek PBB-P2 karena bumi PBB-P2 hanya tanah dan perairan pedalaman"
        },
        jebakan: "'Sektor lainnya' adalah kategori tersendiri; jangan memaksakan pipa atau kabel ke sektor migas hanya karena berkaitan dengan energi. Pada pembudidayaan ikan, objeknya adalah perairan yang tercantum dalam izin usaha perikanan; keramba tidak termasuk daftar bangunan sektor lainnya."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8, dan Pasal 9 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 angka 34 dan Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-060",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-05",
      stem: "Data untuk soal V-B8-05: PT Sawit Mukomuko Raya memiliki dua kebun kelapa sawit di Kabupaten Mukomuko dengan NOP dan SPPT terpisah. SPPT PBB-P5L 2026 kedua kebun diterima pada 2 April 2026: Kebun Air Dikit Rp684.000.000 dan Kebun Teramang Rp318.500.000. Hasil penelitian internal: (i) SPPT Kebun Air Dikit masih memuat 150 ha areal produktif yang haknya telah dilepaskan kepada negara untuk pembangunan jalan nasional pada Oktober 2025 dan sejak itu tidak lagi dikuasai atau dimanfaatkan perusahaan; (ii) pada 18 Juli 2026 banjir bandang merusak sebagian besar tanaman Kebun Teramang, sedangkan SPPT-nya sudah sesuai keadaan 1 Januari 2026. Langkah yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan permohonan pengurangan untuk Kebun Air Dikit dan keberatan atas SPPT Kebun Teramang karena banjir, keduanya paling lambat 1 Juli 2026", B: "Mengajukan keberatan atas SPPT Kebun Air Dikit paling lambat 1 Oktober 2026 dan permohonan pengurangan untuk Kebun Teramang; kedua SPPT jatuh tempo 1 Oktober 2026", C: "Mengajukan keberatan tertulis atas SPPT Kebun Air Dikit paling lambat 1 Juli 2026 dan permohonan pengurangan untuk Kebun Teramang karena bencana alam; SPPT Kebun Air Dikit tetap harus dilunasi paling lambat 1 Oktober 2026", D: "Mengajukan keberatan tertulis atas SPPT Kebun Air Dikit paling lambat 1 Juli 2026 dan permohonan pengurangan untuk Kebun Teramang; pelunasan SPPT Kebun Air Dikit ditunda tanpa denda sampai keputusan keberatan terbit" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Masalah (i) adalah penetapan yang tidak benar: per 1 Januari 2026 areal 150 ha sudah tanah negara yang tidak dibebani hak perusahaan, sehingga diselesaikan dengan keberatan dalam 3 bulan sejak SPPT diterima (1 Juli 2026). Masalah (ii) terjadi setelah 1 Januari dan penetapannya benar, sehingga jalurnya pengurangan karena bencana (Pasal 19 ayat (1) huruf b). Keberatan tidak menunda pelunasan SPPT yang jatuh tempo 1 Oktober 2026.",
        jejakHitung: [
          ["SPPT diterima", "2 April 2026"],
          ["Batas keberatan Kebun Air Dikit (3 bulan sejak diterima)", "1 Juli 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "1 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Jalurnya tertukar: salah luas per 1 Januari adalah objek keberatan, kerusakan karena bencana setelah 1 Januari adalah objek pengurangan",
          B: "Batas keberatan 3 bulan (1 Juli 2026); 1 Oktober 2026 adalah jatuh tempo pelunasan SPPT",
          D: "Keberatan tidak menunda kewajiban membayar; pelunasan setelah 1 Oktober 2026 dikenai denda 2% sebulan"
        },
        jebakan: "Satu wajib pajak, dua masalah, dua jalur: uji dulu apakah masalahnya ada pada keadaan 1 Januari (keberatan) atau terjadi sesudahnya (pengurangan)."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf c dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-061",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-05",
      stem: "Lanjutan data V-B8-05: Kedua SPPT PT Sawit Mukomuko Raya (Kebun Air Dikit Rp684.000.000 dan Kebun Teramang Rp318.500.000) dilunasi penuh pada 25 September 2026. Keputusan keberatan mengabulkan seluruhnya pengeluaran 150 ha areal produktif Kebun Air Dikit yang dalam SPPT dinilai dengan nilai tanah Rp4.000/m² dan SIT Rp5.400/m²; NJOPTKP tetap melekat pada Kebun Air Dikit. Untuk Kebun Teramang, perusahaan baru pada Oktober 2026, setelah SPPT-nya dilunasi, mengajukan permohonan pengurangan 40% karena banjir 18 Juli 2026. Perusahaan tidak mempunyai utang pajak lain. Jumlah kelebihan pembayaran PBB yang dapat dikembalikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp155.600.000", B: "Rp28.200.000", C: "Rp70.500.000", D: "Rp12.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya keputusan keberatan yang menimbulkan kelebihan pembayaran: PBB Kebun Air Dikit turun sebesar NJOP 150 ha (nilai tanah + SIT) × 40% × 0,5%. Pengurangan PBB diberikan paling tinggi 75% atau 100% dari PBB yang belum dilunasi (Pasal 4 ayat (3) PMK 129/2023); karena SPPT Kebun Teramang sudah lunas sebelum permohonan diajukan, tidak ada bagian yang dapat dikurangkan atau dikembalikan.",
        jejakHitung: [
          ["NJOP 150 ha = 1.500.000 m² × (4.000 + 5.400)", "Rp14.100.000.000"],
          ["Penurunan PBB Air Dikit 14.100.000.000 × 40% × 0,5%", "Rp28.200.000"],
          ["PBB Teramang yang belum dilunasi saat permohonan pengurangan", "Rp0 → pengurangan Rp0"],
          ["Jumlah kelebihan", "Rp28.200.000"]
        ],
        mengapaSalah: {
          A: "Pengurangan 40% × Rp318.500.000 = Rp127.400.000 ikut dihitung sebagai kelebihan, padahal pengurangan PBB hanya diberikan dari PBB yang belum dilunasi",
          C: "Penurunan PBB Air Dikit dihitung 0,5% × NJOP tanpa NJKP 40% (14.100.000.000 × 0,5%)",
          D: "Areal produktif yang dikeluarkan hanya dinilai nilai tanah tanpa SIT (1.500.000 m² × 4.000 × 40% × 0,5%)"
        },
        jebakan: "Keberatan mengoreksi penetapan sehingga pembayaran yang sudah dilakukan dapat dikembalikan; pengurangan PBB hanya memotong PBB yang belum dilunasi, sehingga permohonan pengurangan perlu diajukan sebelum SPPT dilunasi."
      },
      dasarHukum: [{ pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) huruf b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a dan ayat (3) serta Pasal 5 ayat (5) PMK 129/2023", berlakuSejak: "2023-12-30" }, { pasal: "PMK 81/2024 (pengembalian kelebihan pembayaran pajak)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-062",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Hutan Kapuas Lestari menerima SPOP sektor perhutanan pada 6 Januari 2026 tetapi tidak menyampaikannya, termasuk setelah ditegur secara tertulis. Pada 11 Mei 2026 KPP menerbitkan SKP PBB-P5L 2026 yang diterima perusahaan pada 18 Mei 2026. Pernyataan yang paling tepat mengenai SKP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterbitkan, yaitu 10 Juni 2026", B: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 17 Juni 2026", C: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 2% sebulan dari pokok pajak paling lama 24 bulan, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 17 Juni 2026", D: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 17 Juni 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP yang tidak disampaikan setelah teguran memicu SKP Pasal 10 ayat (2) huruf a, yang memuat pokok ditambah denda 25% dari pokok (ayat (3)); SKP dilunasi paling lambat satu bulan sejak diterima (Pasal 11 ayat (2)), yaitu 17 Juni 2026.",
        jejakHitung: [
          ["SKP diterima", "18 Mei 2026"],
          ["Jatuh tempo (1 bulan sejak diterima)", "17 Juni 2026"]
        ],
        mengapaSalah: {
          A: "Titik awal jatuh tempo SKP adalah tanggal diterima, bukan tanggal terbit",
          C: "Denda 2% sebulan adalah sanksi keterlambatan bayar (Pasal 11 ayat (3)), bukan isi SKP huruf a",
          D: "Huruf b dipakai bila SPOP disampaikan lalu pemeriksaan menunjukkan pajak lebih besar; di sini SPOP tidak disampaikan"
        },
        jebakan: "Keempat kalimat hampir identik; bandingkan frasa per frasa: dasar huruf, jenis denda, dan titik awal jatuh tempo."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-063", topik: "B8.1", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "PT Sinar Agro Sumatera memiliki kebun karet ber-HGU di Kabupaten Musi Rawas beserta pabrik dan perumahan karyawan di dalam HGU, kantor pusat di Kota Palembang, serta 40 ha bekas kebun di tepi HGU yang sejak 2025 dialihfungsikan menjadi perumahan komersial yang dijual kepada umum, meskipun sertifikat HGU induknya belum dipecah. Dalam memisahkan objek PBB-P5L dan PBB-P2 Tahun Pajak 2026, rumusan ketentuan yang paling tepat dijadikan pegangan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Objek PBB-P2 adalah bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau badan, kecuali bumi dan/atau bangunan milik badan usaha yang memegang izin usaha perkebunan, perhutanan, dan pertambangan", B: "Objek PBB-P2 adalah bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau badan, kecuali kawasan yang telah dibebani HGU atau izin usaha perkebunan, perhutanan, dan pertambangan, apa pun penggunaannya", C: "Objek PBB-P2 adalah bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau badan, kecuali kawasan yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan pertambangan", D: "Objek PBB-P2 adalah bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau badan, kecuali kawasan yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan pertambangan beserta kantor pusat badan usaha tersebut" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 38 ayat (1) UU 1/2022 memakai kriteria penggunaan kawasan: yang dikecualikan dari PBB-P2 (dan tetap PBB-P5L) adalah kawasan yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan pertambangan. Dengan rumusan itu, kebun beserta pabrik dan perumahan karyawan di dalam HGU adalah PBB-P5L, sedangkan kantor pusat di Kota Palembang dan perumahan komersial 40 ha yang tidak lagi digunakan untuk usaha perkebunan berada di luar pengecualian.",
        jejakHitung: [],
        mengapaSalah: { A: "Kriteria UU HKPD adalah penggunaan kawasan, bukan identitas pemilik; kantor pusat milik perusahaan kebun tetap PBB-P2", B: "Status hak (HGU) tidak cukup; areal ber-HGU yang dipakai untuk perumahan komersial tidak digunakan untuk kegiatan usaha perkebunan", D: "Kantor pusat di luar kawasan usaha tidak termasuk pengecualian; frasa tambahan itu tidak ada dalam undang-undang" },
        jebakan: "Empat rumusan hanya berbeda pada ujung kalimat 'kecuali ...'; kata kuncinya 'digunakan untuk kegiatan usaha'."
      },
      dasarHukum: [ { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-064",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 11 ayat (1) dan ayat (5) UU PBB (parafrase): Pajak yang terutang berdasarkan SPPT harus dilunasi selambat-lambatnya 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak. Pajak yang terutang dibayar di bank, kantor pos dan giro, dan tempat lain yang ditunjuk oleh Menteri Keuangan.",
      stem: "SPPT PBB-P5L 2026 PT Teh Malabar Lestari (kebun teh di Kabupaten Bandung) diterbitkan pada 2 Maret 2026 dan diterima perusahaan pada 9 Maret 2026. Staf keuangan baru menyusun SOP pelunasan PBB-P5L untuk era Coretax. Berdasarkan kutipan tersebut dan ketentuan pembayaran elektronik yang berlaku sejak 2025, urutan langkah dan batas waktu yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → bayar melalui bank/pos persepsi sebelum kode billing kedaluwarsa → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 6 bulan sejak 9 Maret 2026 (tanggal SPPT diterima)", B: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → bayar melalui bank/pos persepsi sebelum kode billing kedaluwarsa → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 6 bulan sejak 2 Maret 2026 (tanggal SPPT diterbitkan)", C: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → simpan cetakan kode billing sebagai tanda pelunasan → bayar melalui bank/pos persepsi; seluruhnya paling lambat 6 bulan sejak 9 Maret 2026 (tanggal SPPT diterima)", D: "Masuk e-Billing DJP Online → buat kode billing dengan NPWP 15 digit dan NOP → bayar melalui bank/pos persepsi → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 6 bulan sejak 9 Maret 2026 (tanggal SPPT diterima)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Pembayaran memakai NPWP 16 digit (wajib sejak 1 Juli 2024, PMK 136/2023) dan kode billing yang memuat NOP dan tahun pajak. Pembayaran sah bila Bukti Penerimaan Negara sudah divalidasi dengan NTPN (Pasal 102 ayat (5) PMK 81/2024). SPPT dilunasi paling lama 6 bulan sejak tanggal SPPT diterima, yaitu 9 Maret 2026, bukan sejak terbit (Pasal 11 ayat (1) UU PBB; Pasal 97 ayat (1) PMK 81/2024).",
        jejakHitung: [
          ["SPPT diterima", "9 Maret 2026"],
          ["Batas pelunasan", "6 bulan sejak 9 Maret 2026 (bukan sejak terbit 2 Maret 2026)"],
          ["Pola contoh Penjelasan Pasal 11 ayat (1) UU PBB (1 Maret → 31 Agustus)", "8 September 2026"]
        ],
        mengapaSalah: {
          B: "Jangka 6 bulan dihitung dari tanggal terbit (2 Maret), padahal Pasal 11 ayat (1) UU PBB menghitung sejak SPPT diterima",
          C: "Kode billing hanya identitas setoran; tanda pelunasan adalah Bukti Penerimaan Negara yang divalidasi dengan NTPN (Pasal 102 ayat (5) PMK 81/2024)",
          D: "NPWP 15 digit hanya dapat dipakai sampai 30 Juni 2024; sejak 1 Juli 2024 layanan administrasi memakai NPWP 16 digit, dan Coretax berlaku sejak 2025"
        },
        jebakan: "Opsi prosedur berbeda satu langkah saja: kanal dan identitas, dokumen bukti, atau titik awal jatuh tempo. Tanggal diterima dihitung sebagai hari pertama, seperti contoh di Penjelasan Pasal 11 ayat (1) UU PBB (diterima 1 Maret, jatuh tempo 31 Agustus), sehingga SPPT yang diterima 9 Maret 2026 jatuh tempo 8 September 2026."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan ayat (5) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 97 ayat (1) dan Pasal 102 ayat (5) PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (1) PMK 112/2022 s.t.d.d. PMK 136/2023 (NPWP 16 digit)", berlakuSejak: "2024-07-01" }],
      anggaranDetik: 130,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: jatuh tempo 6 bulan sejak SPPT diterima (Pasal 11 ayat (1) UU PBB; Pasal 97 ayat (1) PMK 81/2024), BPN sah bila divalidasi NTPN (Pasal 102 ayat (5) PMK 81/2024), dan NPWP 16 digit sejak 1 Juli 2024 (PMK 136/2023). Belum ada di naskah: alur pembuatan kode billing PBB-P5L di Portal Wajib Pajak Coretax, isi NOP dalam kode billing, dan masa kedaluwarsa kode billing; PMK 81/2024 tidak mengatur kode billing secara rinci."
    },
    {
      id: "B8-065",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "UU PPSP dan PMK 61/2023 (parafrase): Surat Teguran diterbitkan apabila penanggung pajak tidak melunasi utang pajak setelah lewat 7 hari sejak saat jatuh tempo pembayaran. Surat Paksa diterbitkan apabila utang pajak tidak dilunasi setelah lewat 21 hari sejak tanggal Surat Teguran disampaikan. Penyitaan dilaksanakan apabila utang pajak tidak dilunasi dalam jangka waktu 2 × 24 jam sejak Surat Paksa diberitahukan.",
      stem: "STP PBB-P5L PT Rimba Borneo Lestari (pokok Rp96.000.000 dan denda Rp5.760.000) diterima pada 14 Juli 2026 dan tidak dilunasi. Surat Teguran kemudian disampaikan kepada perusahaan pada 24 Agustus 2026. Dalam soal ini, frasa 'setelah lewat n hari' berarti tindakan paling cepat dilakukan pada hari ke-(n + 1) setelah tanggal acuan. Berdasarkan kutipan tersebut, rangkaian tanggal yang paling tepat adalah ...",
      kataKualifikasi: ["paling cepat"],
      opsi: { A: "STP jatuh tempo 13 Januari 2027; Surat Teguran paling cepat 21 Januari 2027; Surat Paksa paling cepat 21 hari setelah Surat Teguran disampaikan", B: "STP jatuh tempo 13 Agustus 2026; Surat Teguran paling cepat 21 Agustus 2026; Surat Paksa paling cepat 4 September 2026", C: "STP jatuh tempo 13 Agustus 2026; Surat Paksa dapat langsung diterbitkan 21 Agustus 2026 tanpa Surat Teguran karena PBB adalah pajak yang ditetapkan", D: "STP jatuh tempo 13 Agustus 2026; Surat Teguran paling cepat 21 Agustus 2026; Surat Paksa paling cepat 15 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB jatuh tempo satu bulan sejak diterima (Pasal 11 ayat (4) UU PBB): 13 Agustus 2026. Surat Teguran paling cepat hari ke-8 setelah jatuh tempo (21 Agustus 2026). Karena Surat Teguran disampaikan 24 Agustus 2026, Surat Paksa paling cepat hari ke-22 setelah tanggal itu, yaitu 15 September 2026.",
        jejakHitung: [
          ["STP diterima", "14 Juli 2026"],
          ["Jatuh tempo STP (1 bulan sejak diterima)", "13 Agustus 2026"],
          ["Surat Teguran: lewat 7 hari → hari ke-8", "21 Agustus 2026"],
          ["Surat Teguran disampaikan", "24 Agustus 2026"],
          ["Surat Paksa: lewat 21 hari → hari ke-22 (7 hari Agustus + 15 hari September)", "15 September 2026"]
        ],
        mengapaSalah: {
          A: "Enam bulan adalah jatuh tempo SPPT; STP jatuh tempo satu bulan sejak diterima",
          B: "Jangka 21 hari dihitung dari jatuh tempo (13 Agustus), padahal titik acuannya tanggal Surat Teguran disampaikan (24 Agustus)",
          C: "Penagihan dengan Surat Paksa didahului Surat Teguran; sifat PBB sebagai pajak yang ditetapkan tidak menghapus tahapan itu"
        },
        jebakan: "Dua titik acuan berbeda: 7 hari dari jatuh tempo, 21 hari dari tanggal Surat Teguran disampaikan, bukan dari tanggal paling cepatnya."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "PMK 61/2023 (tata cara penagihan pajak)" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-066",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nikel Konawe Perkasa (IUP operasi produksi nikel di Kabupaten Konawe Utara; tahun buku kalender) menyiapkan anggaran pajak 2026. Data umum: peredaran bruto 2025 Rp1,92 triliun; royalti nikel yang dibayar pada 2025 Rp96 miliar; angsuran PPh Pasal 25 2026 Rp7,4 miliar per bulan; jumlah karyawan 1.240 orang. Data objek PBB per 1 Januari 2026 (satu-satunya objek PBB-P5L): permukaan bumi areal produktif (pit, stockpile, jalan tambang) 640 ha dengan nilai Rp6.500/m²; permukaan bumi areal belum/tidak produktif 2.860 ha dengan nilai Rp1.800/m²; NJOP tubuh bumi hasil penilaian DJP Rp684.000.000.000; bangunan di dalam wilayah IUP berupa jetty Rp46.000.000.000, kantor tambang dan mess karyawan Rp12.500.000.000, serta bengkel Rp8.300.000.000; alat berat dan dump truck Rp312.000.000.000; kantor perwakilan di Kota Kendari (di luar wilayah IUP) NJOP Rp7.200.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.687.736.000", B: "Rp1.687.760.000", C: "Rp1.702.136.000", D: "Rp1.662.736.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Yang dipakai hanya data objek PBB-P5L: permukaan bumi, tubuh bumi, dan bangunan di dalam kawasan pertambangan (wilayah IUP dan areal yang menyatu secara fisik, Pasal 7 ayat (2) PMK 186/2019). Peredaran bruto, royalti, PPh Pasal 25, jumlah karyawan, alat berat (benda bergerak), dan kantor Kendari (di luar kawasan, objek PBB-P2) adalah data berlebih.",
        jejakHitung: [
          ["Areal produktif 6.400.000 m² × 6.500", "Rp41.600.000.000"],
          ["Areal belum/tidak produktif 28.600.000 m² × 1.800", "Rp51.480.000.000"],
          ["Tubuh bumi", "Rp684.000.000.000"],
          ["Bangunan 46.000.000.000 + 12.500.000.000 + 8.300.000.000", "Rp66.800.000.000"],
          ["NJOP objek", "Rp843.880.000.000"],
          ["− NJOPTKP", "Rp843.868.000.000"],
          ["× 40% × 0,5%", "Rp1.687.736.000"]
        ],
        mengapaSalah: {
          B: "NJOPTKP Rp12.000.000 tidak dikurangkan (selisih hanya Rp24.000)",
          C: "Kantor perwakilan di Kota Kendari ikut dihitung, padahal di luar wilayah IUP sehingga objek PBB-P2",
          D: "Kantor tambang dan mess karyawan dikeluarkan karena dianggap hunian/kantor PBB-P2, padahal berada di dalam wilayah IUP"
        },
        jebakan: "Opsi berdekatan (selisih Rp24.000 sampai puluhan juta) menuntut pemilahan data yang teliti, bukan hanya rumus. PMK 186/2019 menamai areal permukaan bumi minerba sebagai areal belum dimanfaatkan, cadangan produksi, tidak produktif, pengaman, dan emplasemen, sedangkan tubuh bumi operasi produksi dinilai dari pendapatan bersih × angka kapitalisasi; di soal nilainya diberikan sebagai data penilaian."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 7 ayat (1) dan (2), Pasal 9 ayat (1) huruf e, dan Pasal 21 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-067",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Kebun Lembah Seblat (PKP; tahun buku kalender) memiliki satu objek PBB-P5L dengan NJOP Rp374.162.000.000. SPPT PBB-P5L 2026 sebesar Rp748.300.000 diterbitkan pada 11 Februari 2026 dan diterima perusahaan pada 27 Februari 2026. Pembayaran PBB: 20 Agustus 2026 Rp400.000.000; 5 Oktober 2026 Rp200.000.000; dan 30 Oktober 2026 Rp148.300.000. Data lain pada periode yang sama: PPN kurang bayar Masa Agustus 2026 Rp38.500.000 disetor 14 September 2026; kode billing PBB yang dibuat 25 Agustus 2026 kedaluwarsa tanpa dibayar. Asumsikan denda dihitung terpisah untuk setiap bagian pokok sesuai tanggal pembayarannya dan bagian dari bulan dihitung satu bulan penuh. Denda administrasi PBB yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp24.898.000", B: "Rp9.932.000", C: "Rp16.898.000", D: "Rp20.898.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Jatuh tempo SPPT dihitung 6 bulan sejak diterima: 26 Agustus 2026. Pembayaran 20 Agustus tepat waktu; Rp200.000.000 terlambat 1 bulan 9 hari (2 bulan) dan Rp148.300.000 terlambat 2 bulan 4 hari (3 bulan), masing-masing dikenai denda 2% sebulan (Pasal 11 ayat (3) UU PBB).",
        jejakHitung: [
          ["Cek SPPT: (374.162.000.000 − 12.000.000) × 0,2%", "Rp748.300.000"],
          ["Jatuh tempo (6 bulan sejak 27 Februari)", "26 Agustus 2026"],
          ["Rp400.000.000 dibayar 20 Agustus", "tepat waktu"],
          ["Rp200.000.000: 26 Agustus–5 Oktober → 2 bulan × 2%", "Rp8.000.000"],
          ["Rp148.300.000: 26 Agustus–30 Oktober → 3 bulan × 2%", "Rp8.898.000"],
          ["Jumlah denda", "Rp16.898.000"]
        ],
        mengapaSalah: {
          A: "Jatuh tempo dihitung dari tanggal terbit (10 Agustus 2026), sehingga pembayaran Rp400.000.000 pada 20 Agustus ikut didenda 1 bulan (Rp8.000.000)",
          B: "Bagian bulan dibulatkan ke bawah (1 bulan dan 2 bulan)",
          D: "Seluruh sisa Rp348.300.000 dikenai denda 3 bulan sampai pelunasan terakhir, padahal Rp200.000.000 sudah dibayar 5 Oktober"
        },
        jebakan: "PPN, kode billing kedaluwarsa, dan tanggal terbit SPPT adalah data pengalih; yang menentukan hanya tanggal SPPT diterima dan tanggal tiap pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-068",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-06",
      stem: "Data untuk soal V-B8-06: PT Indragiri Sawit Makmur memegang HGU kebun kelapa sawit di Kabupaten Indragiri Hulu dan tidak memiliki objek PBB-P5L lain. Data penilaian objek per 1 Januari 2026: areal produktif (tanaman menghasilkan) 2.640 ha dengan nilai tanah Rp4.300/m² dan SIT kelapa sawit Rp5.900/m²; areal belum produktif (blok peremajaan yang tanaman lamanya sudah ditumbang dan lahannya sudah diolah, tetapi belum ditanami kembali) 380 ha dengan nilai tanah Rp4.300/m²; areal tidak produktif (rawa dan sempadan sungai) 115 ha dengan nilai Rp900/m²; areal emplasemen 46 ha dengan nilai Rp13.500/m², yang di dalamnya terdapat pemakaman umum desa 1,2 ha dan masjid yang terbuka untuk umum serta dikelola nirlaba 0,3 ha. Data lain: produksi TBS 2025 sebanyak 61.000 ton dengan harga rata-rata Rp2.450/kg, 1.180 karyawan, serta 64 truk dan alat berat bernilai buku Rp42.000.000.000. NJOP bumi yang masuk penghitungan PBB-P5L Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp292.865.000.000", B: "Rp292.662.500.000", C: "Rp315.082.500.000", D: "Rp291.627.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NJOP bumi kebun adalah jumlah NJOP per jenis areal (Pasal 14 ayat (3) PMK 186/2019). Hanya Areal Produktif, yaitu areal yang telah ditanami, yang dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT). Blok peremajaan yang sudah diolah tetapi belum ditanami kembali adalah Areal Belum Produktif, dan rawa serta sempadan sungai adalah Areal Tidak Produktif; keduanya tetap bumi yang dinilai dengan nilai tanahnya. Pemakaman umum dan masjid umum nirlaba (Pasal 3 ayat (1) huruf a dan b UU PBB; Pasal 3 ayat (5) PMK 186/2019) dikeluarkan dari luas emplasemen. Data produksi, karyawan, dan truk tidak dipakai.",
        jejakHitung: [
          ["Produktif 26.400.000 m² × (4.300 + 5.900)", "Rp269.280.000.000"],
          ["Belum produktif 3.800.000 m² × 4.300", "Rp16.340.000.000"],
          ["Tidak produktif 1.150.000 m² × 900", "Rp1.035.000.000"],
          ["Emplasemen (46 − 1,2 − 0,3) = 44,5 ha = 445.000 m² × 13.500", "Rp6.007.500.000"],
          ["NJOP bumi", "Rp292.662.500.000"]
        ],
        mengapaSalah: {
          A: "Pemakaman umum dan masjid umum nirlaba tidak dikeluarkan dari luas emplasemen (+15.000 m² × Rp13.500), padahal Pasal 3 ayat (5) PMK 186/2019 menyatakan areal yang merupakan objek Pasal 3 ayat (1) UU PBB tidak dikenakan PBB",
          C: "SIT ikut ditambahkan pada blok peremajaan yang belum ditanami kembali (+3.800.000 m² × Rp5.900); pengembangan tanah berupa tanaman hanya ada pada areal yang telah ditanami",
          D: "Rawa dan sempadan sungai dianggap bukan objek, padahal Areal Tidak Produktif tetap bagian bumi kawasan perkebunan (Pasal 14 ayat (1) huruf c dan ayat (3) PMK 186/2019)"
        },
        jebakan: "Ukuran PMK 186/2019 adalah sudah atau belum ditanami, bukan sudah atau belum menghasilkan: tanaman muda yang belum menghasilkan pun termasuk Areal Produktif. Di soal ini ada tiga koreksi luas sekaligus: SIT hanya pada areal yang telah ditanami, areal tidak produktif tetap dihitung, dan objek Pasal 3 UU PBB dikeluarkan."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 3 ayat (5) PMK 186/PMK.03/2019", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 angka 1 dan Pasal 3 ayat (1) huruf a–b UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-069",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-06",
      stem: "Lanjutan data V-B8-06: NJOP bumi kebun PT Indragiri Sawit Makmur Tahun Pajak 2026, setelah mengeluarkan pemakaman umum dan masjid umum nirlaba, adalah Rp292.662.500.000. Daftar aset per 1 Januari 2026 memuat: pabrik kelapa sawit di dalam areal HGU yang dijalankan dengan izin usaha perkebunan yang sama dengan kebunnya (arealnya tidak diberi Izin Usaha Perkebunan untuk Pengolahan tersendiri) Rp36.800.000.000; perumahan karyawan dan kantor kebun Rp9.400.000.000; jalan kebun dan jembatan permanen Rp5.200.000.000; bangunan masjid umum nirlaba Rp900.000.000; kantor pemasaran di Kota Pekanbaru (di luar HGU) dengan NJOP Rp6.000.000.000; serta truk dan alat berat bernilai buku Rp42.000.000.000. Perusahaan tidak memiliki objek PBB-P5L lain. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp700.101.000", B: "Rp688.125.000", C: "Rp1.720.252.500", D: "Rp688.101.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Bangunan yang masuk hanya pabrik, perumahan dan kantor kebun, serta jalan dan jembatan permanen di dalam HGU. Masjid umum nirlaba dikecualikan, kantor di Kota Pekanbaru adalah objek PBB-P2, dan truk serta alat berat adalah benda bergerak. NJOP objek dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["NJOP bumi", "Rp292.662.500.000"],
          ["Bangunan 36.800.000.000 + 9.400.000.000 + 5.200.000.000", "Rp51.400.000.000"],
          ["NJOP objek", "Rp344.062.500.000"],
          ["− NJOPTKP Rp12.000.000", "Rp344.050.500.000"],
          ["NJKP 40%", "Rp137.620.200.000"],
          ["PBB 0,5%", "Rp688.101.000"]
        ],
        mengapaSalah: {
          A: "Kantor pemasaran di luar HGU ikut dihitung, padahal objek PBB-P2 Kota Pekanbaru (Pasal 38 ayat (1) UU 1/2022)",
          B: "NJOPTKP Rp12.000.000 tidak dikurangkan",
          C: "Tarif 0,5% dikalikan tanpa NJKP 40%"
        },
        jebakan: "Opsi A dan B hanya berselisih Rp12.000.000 dan Rp24.000 dari kunci; tetapkan batas kawasan usaha dan NJOPTKP sebelum mengalikan."
      },
      dasarHukum: [{ pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-070",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-06",
      formulirRef: "SPOP.spop.4",
      stem: "Lanjutan data V-B8-06: Staf pajak PT Indragiri Sawit Makmur memutakhirkan data objek sektor perkebunan untuk Tahun Pajak 2027 melalui SPOP dan LSPOP elektronik. Data per 1 Januari 2027: (i) blok peremajaan 380 ha yang tanaman lamanya sudah ditumbang dan lahannya sudah diolah, tetapi belum ditanami kembali; (ii) rawa dan sempadan sungai 115 ha; (iii) jalan kebun dan jembatan permanen di dalam HGU; (iv) 64 truk dan alat berat. Pengisian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(i) baris areal belum produktif tanpa SIT; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", B: "(i) baris areal produktif dengan SIT karena sudah ditanami; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", C: "(i) baris areal belum produktif tanpa SIT; (ii) tidak dilaporkan karena tidak menghasilkan; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", D: "(i) baris areal belum produktif tanpa SIT; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) diuraikan sebagai bangunan dalam LSPOP karena dipakai di dalam HGU" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP memuat data bumi per jenis areal, sedangkan LSPOP memuat rincian bangunan. Pasal 14 ayat (1) PMK 186/2019: Areal Produktif adalah areal yang telah ditanami (tanah ditambah pengembangan tanah berupa tanaman/SIT), Areal Belum Produktif adalah areal yang belum ditanami, termasuk yang sudah diolah tetapi belum ditanami, dan Areal Tidak Produktif adalah areal yang tidak dapat diusahakan. Rawa dan sempadan tetap dilaporkan dan dinilai, jalan dan jembatan permanen adalah bangunan, sedangkan truk dan alat berat bukan objek karena benda bergerak.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Blok yang sudah diolah tetapi belum ditanami adalah Areal Belum Produktif (Pasal 14 ayat (1) huruf b PMK 186/2019); SIT (pengembangan tanah berupa tanaman) hanya ada pada areal yang telah ditanami",
          C: "Areal Tidak Produktif tetap bagian bumi objek PBB sektor perkebunan dan dinilai dengan perbandingan harga (Pasal 14 ayat (2) huruf c PMK 186/2019), sehingga tetap dilaporkan",
          D: "Truk dan alat berat tidak dilekatkan secara tetap sehingga bukan bangunan (Pasal 1 angka 2 UU PBB)"
        },
        jebakan: "Ukuran PMK adalah sudah atau belum ditanami, bukan sudah atau belum menghasilkan: blok tanaman muda yang belum menghasilkan sudah termasuk Areal Produktif. Opsi hanya berbeda pada satu butir; cocokkan setiap data dengan baris areal atau LSPOP."
      },
      dasarHukum: [{ pasal: "Pasal 9 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 1–2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 14 ayat (1) dan (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Klasifikasi areal sudah dicocokkan ke Pasal 14 ayat (1) PMK 186/2019 (tidak diubah PMK 234/2022): ukurannya sudah atau belum ditanami. Yang belum dicek: nama bagian dan baris SPOP/LSPOP sektor perkebunan di Coretax (formulirRef SPOP.spop.4), karena formulir resmi tidak ada di pustaka naskah."
    },
    {
      id: "B8-071",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-06",
      stem: "Lanjutan data V-B8-06: SPPT PBB-P5L 2026 PT Indragiri Sawit Makmur sebesar Rp688.101.000 diterbitkan pada 26 Februari 2026, diterima perusahaan pada 18 Maret 2026, dan dilunasi seluruhnya pada 2 Oktober 2026. Pada bulan yang sama perusahaan juga terlambat menyetor PPh Pasal 25 Masa September 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi PBB-P5L yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.524.040", B: "Rp172.025.250", C: "Rp13.762.020", D: "Rp701.863.020" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Jatuh tempo SPPT adalah 6 bulan sejak diterima, yaitu 17 September 2026. Pelunasan 2 Oktober 2026 terlambat 15 hari yang dihitung satu bulan, sehingga denda 2% × Rp688.101.000. Keterlambatan PPh Pasal 25 dikenai bunga UU KUP tersendiri dan tidak memengaruhi denda PBB.",
        jejakHitung: [
          ["6 bulan sejak SPPT diterima", "17 September 2026"],
          ["17 September s.d. 2 Oktober 2026", "15 hari → 1 bulan"],
          ["Denda 1 × 2% × 688.101.000", "Rp13.762.020"]
        ],
        mengapaSalah: {
          A: "Jatuh tempo dihitung dari tanggal terbit (25 Agustus 2026) sehingga keterlambatan menjadi 2 bulan",
          B: "Memakai denda 25% milik SKP Pasal 10 ayat (3), bukan denda keterlambatan bayar",
          D: "Menjawab pokok ditambah denda, padahal yang ditanya denda yang ditagih dengan STP"
        },
        jebakan: "Titik awal jatuh tempo SPPT adalah tanggal diterima; tanggal terbit hanya data pengecoh."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-072",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PMK 81/2024 Pasal 71 ayat (1), Pasal 79 ayat (3) huruf b, dan Pasal 81 ayat (1) (parafrase): Wajib Pajak wajib mendaftarkan objek PBB pada KPP tempat terdaftar paling lama 1 bulan setelah persyaratan subjektif terpenuhi (untuk pertambangan mineral: tanggal izin) untuk memperoleh Surat Keterangan Terdaftar Objek Pajak PBB. Untuk objek sektor pertambangan mineral atau batubara, tanggal diterimanya SPOP oleh Wajib Pajak adalah 31 Maret Tahun Pajak terutang. SPOP disampaikan paling lama 30 hari setelah tanggal diterimanya SPOP.",
      stem: "PT Nikel Sulawesi Persada, yang objek PBB-P5L IUP lamanya sudah terdaftar, memperoleh IUP operasi produksi nikel baru untuk blok seluas 1.200 ha di Kabupaten Morowali pada 10 Maret 2026 dan membangun jalan hauling permanen di blok itu pada April 2026. Manajer pajak berpendapat perusahaan cukup menunggu SPOP dari DJP tanpa mendaftarkan blok baru, dan bahwa blok baru sudah terutang PBB-P5L 2026 secara proporsional sejak 10 Maret 2026. Berdasarkan kutipan tersebut dan UU PBB, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Perusahaan cukup menunggu SPOP dari DJP tanpa mendaftarkan blok baru; blok baru dikenai PBB mulai Tahun Pajak 2027; SPOP Tahun Pajak 2027 dianggap diterima 31 Maret 2027 dan disampaikan paling lambat 30 April 2027", B: "Perusahaan wajib mendaftarkan blok baru ke KPP untuk memperoleh SKT Objek Pajak PBB; blok baru dikenai PBB 2026 secara proporsional sejak 10 Maret 2026; SPOP Tahun Pajak 2027 dianggap diterima 31 Maret 2027 dan disampaikan paling lambat 30 April 2027", C: "Perusahaan wajib mendaftarkan blok baru ke KPP untuk memperoleh SKT Objek Pajak PBB; blok baru dikenai PBB mulai Tahun Pajak 2027; SPOP Tahun Pajak 2027 dianggap diterima 1 Februari 2027 dan disampaikan paling lambat 3 Maret 2027", D: "Perusahaan wajib mendaftarkan blok baru ke KPP untuk memperoleh SKT Objek Pajak PBB; blok baru dikenai PBB mulai Tahun Pajak 2027; SPOP Tahun Pajak 2027 dianggap diterima 31 Maret 2027 dan disampaikan paling lambat 30 April 2027" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pendaftaran objek adalah kewajiban aktif: subjek pajak wajib mendaftarkan objeknya (Pasal 9 ayat (1) UU PBB), dan menurut PMK 81/2024 pendaftaran dilakukan ke KPP paling lama 1 bulan setelah tanggal izin untuk memperoleh SKT Objek Pajak PBB (Pasal 71 ayat (1) dan ayat (2) huruf e). Pajak terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB): pada 1 Januari 2026 IUP blok baru belum ada, sehingga blok baru (termasuk jalan hauling) dikenai PBB mulai Tahun Pajak 2027. Untuk sektor pertambangan mineral, SPOP dianggap diterima pada 31 Maret Tahun Pajak terutang (Pasal 79 ayat (3) huruf b) dan wajib disampaikan paling lama 30 hari setelahnya (Pasal 81 ayat (1)): 30 April 2027.",
        jejakHitung: [
          ["IUP blok baru terbit", "10 Maret 2026"],
          ["Keadaan objek 1 Januari 2026", "IUP belum ada; belum terutang 2026"],
          ["Mulai terutang", "Tahun Pajak 2027"],
          ["SPOP 2027 dianggap diterima (sektor pertambangan mineral)", "31 Maret 2027"],
          ["Batas penyampaian (30 hari setelah 31 Maret 2027)", "30 April 2027"]
        ],
        mengapaSalah: {
          A: "Pendaftaran objek adalah kewajiban aktif Wajib Pajak (Pasal 9 ayat (1) UU PBB; Pasal 71 ayat (1) PMK 81/2024), bukan menunggu SPOP dari DJP",
          B: "PBB tidak dikenakan secara proporsional; pajak terutang ditentukan menurut keadaan objek pada 1 Januari, dan pada 1 Januari 2026 IUP blok baru belum ada",
          C: "Tanggal 1 Februari hanya untuk sektor perkebunan, migas, dan panas bumi (Pasal 79 ayat (3) huruf a); sektor pertambangan mineral memakai 31 Maret"
        },
        jebakan: "Tiga hal diuji sekaligus: kewajiban aktif mendaftarkan objek, keadaan 1 Januari, dan tanggal anggapan diterimanya SPOP yang berbeda per sektor (1 Februari atau 31 Maret). Tanggal SPOP dibuka atau diminta Wajib Pajak bukan patokan jangka waktu 30 hari."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) dan Pasal 9 ayat (1) dan (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 71 ayat (1) dan ayat (2) huruf e, Pasal 79 ayat (3) huruf b, dan Pasal 81 ayat (1)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-073", topik: "B8.1", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "PT Geotermal Kaldera Nusantara memegang izin panas bumi di Kabupaten Garut. Sebagian wilayah kerjanya berada di kawasan hutan produksi milik negara yang telah diberikan persetujuan penggunaan kawasan hutan (pinjam pakai) kepada perusahaan, dan di atasnya perusahaan membangun tapak sumur, pipa uap, dan jalan akses. Subjek PBB-P5L atas bumi areal pinjam pakai tersebut untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kementerian yang membidangi kehutanan, karena kawasan hutan tetap milik negara", B: "PT Geotermal Kaldera Nusantara, karena secara nyata memperoleh manfaat atas bumi tersebut", C: "Tidak ada, karena tanah negara dikecualikan dari PBB", D: "PT Geotermal Kaldera Nusantara hanya atas bangunan; bumi tidak terutang karena perusahaan bukan pemegang hak atas tanah" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 4 ayat (1) menjadikan subjek pajak setiap orang atau badan yang secara nyata mempunyai hak atau memperoleh manfaat atas bumi. Pemegang izin panas bumi yang memakai kawasan hutan berdasarkan persetujuan penggunaan kawasan memperoleh manfaat atas bumi tersebut, sehingga menjadi subjek PBB-P5L atas bumi dan bangunannya.",
        jejakHitung: [],
        mengapaSalah: { A: "Status kepemilikan negara atas kawasan hutan tidak menghalangi pengenaan PBB kepada pihak yang memperoleh manfaat", C: "Pengecualian tanah negara hanya untuk tanah negara yang belum dibebani suatu hak atau izin pemanfaatan", D: "Subjek atas bumi tidak harus pemegang hak atas tanah; memperoleh manfaat sudah cukup" },
        jebakan: "Kata kunci Pasal 4 ayat (1) adalah 'secara nyata ... memperoleh manfaat', bukan sertifikat hak."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "B8-074",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Sawit Barito Jaya menjual seluruh kebun kelapa sawit ber-HGU di Kabupaten Barito Selatan kepada PT Agro Kalteng Mandiri. Akta jual beli ditandatangani pada 2 Juni 2026 dengan nilai pengalihan hak atas tanah dan bangunan, termasuk tanaman kelapa sawit di atasnya, Rp210.000.000.000. Dengan perjanjian terpisah, penjual juga menjual kendaraan angkut, alat berat, dan persediaan pupuk kepada pembeli yang sama seharga Rp95.000.000.000. Pendaftaran peralihan HGU selesai pada Agustus 2026. SPPT PBB-P5L 2026 atas kebun tersebut sebesar Rp512.400.000 diterima pada 16 Maret 2026 atas nama PT Sawit Barito Jaya. Penjual bukan pengembang real estat, tidak ada hubungan istimewa, dan penjual tidak memperoleh fasilitas khusus. Pernyataan yang paling tepat mengenai PBB-P5L, PPh, dan BPHTB atas transaksi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", B: "PBB-P5L 2026 dibagi proporsional, 5 bulan atas nama penjual dan 7 bulan atas nama pembeli; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", C: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp305.000.000.000 = Rp7.625.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", D: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB ke kas negara karena objeknya PBB-P5L" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PBB terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB), sehingga SPPT 2026 tetap atas nama penjual dan tidak dibagi karena peralihan di tengah tahun, sedangkan pembeli, yang secara nyata mempunyai hak atas bumi sejak peralihan HGU (Pasal 4 ayat (1) UU PBB), menjadi wajib pajak mulai Tahun Pajak 2027 menurut keadaan 1 Januari 2027. Pengalihan hak atas tanah dan bangunan dikenai PPh final 2,5% dari jumlah bruto nilai pengalihan hak atas tanah dan/atau bangunan, yaitu nilai yang sesungguhnya diterima (Pasal 2 ayat (1) huruf a dan ayat (2) huruf d PP 34/2016): 2,5% × Rp210.000.000.000 = Rp5.250.000.000. Penjualan kendaraan, alat berat, dan persediaan pupuk bukan pengalihan hak atas tanah dan/atau bangunan, sehingga tidak masuk dasar PPh final. BPHTB adalah pajak daerah (UU 1/2022) yang dibayar pembeli kepada kabupaten dengan tarif Perda paling tinggi 5%, meskipun objek PBB-nya PBB-P5L.",
        jejakHitung: [
          ["Kendaraan, alat berat, persediaan pupuk Rp95.000.000.000", "bukan tanah dan/atau bangunan; di luar PPh final"],
          ["Dasar PPh final (nilai pengalihan hak atas tanah dan bangunan)", "Rp210.000.000.000"],
          ["PPh final 2,5% × Rp210.000.000.000", "Rp5.250.000.000"]
        ],
        mengapaSalah: {
          B: "PBB tidak dibagi per bulan; Pasal 8 ayat (2) mengunci subjek dan objek pada 1 Januari",
          C: "Kendaraan, alat berat, dan persediaan pupuk bukan hak atas tanah dan/atau bangunan, sehingga nilainya tidak masuk jumlah bruto nilai pengalihan dalam PP 34/2016",
          D: "BPHTB adalah pajak daerah berdasarkan UU 1/2022; status PBB-P5L objek tidak memindahkan BPHTB ke kas negara"
        },
        jebakan: "Satu transaksi kebun menyentuh tiga rezim sekaligus: PBB-P5L (pusat), PPh final (pusat), dan BPHTB (daerah). Dasar PPh final hanya nilai pengalihan hak atas tanah dan/atau bangunan, bukan seluruh nilai transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 34/2016 Pasal 2 ayat (1) huruf a dan ayat (2) huruf d", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 44–47 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-075",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Teh Kahyangan Lestari memegang HGU kebun teh di Kabupaten Batang dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif 1.120 ha (nilai tanah Rp6.200/m², SIT teh Rp7.400/m²) yang di dalamnya terdapat situs candi yang telah ditetapkan sebagai cagar budaya seluas 0,6 ha; areal emplasemen 28 ha (Rp18.000/m²) yang memuat sekolah dasar umum yang dikelola yayasan nirlaba secara cuma-cuma di atas lahan perusahaan seluas 0,9 ha (bangunan Rp1.100.000.000) serta taman kanak-kanak dan penitipan anak yang dikelola sendiri oleh perusahaan secara komersial untuk memperoleh keuntungan seluas 0,4 ha (bangunan Rp600.000.000); areal tidak produktif 64 ha (Rp1.500/m²) yang memuat pemakaman umum desa 1,1 ha. Bangunan lain: pabrik teh Rp21.500.000.000 dan perumahan karyawan Rp7.800.000.000. Data lain: produksi teh kering 2025 sebanyak 2.900 ton dan 1.650 pemetik. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp376.059.000", B: "Rp374.551.800", C: "Rp375.895.800", D: "Rp378.419.800" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Areal di kawasan perkebunan yang merupakan objek Pasal 3 ayat (1) UU PBB tidak dikenakan PBB (Pasal 3 ayat (5) PMK 186/2019): situs cagar budaya (peninggalan purbakala, huruf b), sekolah dasar umum nirlaba (huruf a), dan pemakaman umum (huruf b) dikeluarkan dari luas areal masing-masing, dan bangunan SD juga dikeluarkan. Taman kanak-kanak yang dikelola perusahaan untuk memperoleh keuntungan tidak memenuhi syarat nirlaba sehingga tetap objek. SIT hanya ditambahkan pada areal produktif (Pasal 14 ayat (2) PMK 186/2019).",
        jejakHitung: [
          ["Produktif (1.120 − 0,6) ha = 11.194.000 m² × (6.200 + 7.400)", "Rp152.238.400.000"],
          ["Emplasemen (28 − 0,9) ha = 271.000 m² × 18.000", "Rp4.878.000.000"],
          ["Tidak produktif (64 − 1,1) ha = 629.000 m² × 1.500", "Rp943.500.000"],
          ["Bangunan 21.500.000.000 + 7.800.000.000 + 600.000.000 (TK)", "Rp29.900.000.000"],
          ["NJOP objek", "Rp187.959.900.000"],
          ["(187.959.900.000 − 12.000.000) × 40% × 0,5%", "Rp375.895.800"]
        ],
        mengapaSalah: {
          A: "Situs candi cagar budaya tidak dikeluarkan dari areal produktif (+6.000 m² × Rp13.600)",
          B: "TK dan penitipan anak ikut dikecualikan, padahal dikelola perusahaan untuk mencari keuntungan sehingga tidak memenuhi Pasal 3 ayat (1) huruf a",
          D: "Sekolah dasar umum nirlaba (lahan dan bangunan) tidak dikecualikan, padahal memenuhi Pasal 3 ayat (1) huruf a"
        },
        jebakan: "Pengecualian diuji per bidang menurut fungsi kepentingan umum dan sifat nirlaba, bukan menurut jenis bangunannya (sekolah vs sekolah). Bila suatu bidang dimanfaatkan sepenuhnya secara sah oleh pihak lain, bidang itu juga keluar dari PBB sektor perkebunan (Pasal 3 ayat (6) PMK 186/2019)."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a–b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (5) dan (6) serta Pasal 14 PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-076",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      kutipan: "Pasal 3 ayat (1) huruf c dan Pasal 4 ayat (1) UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB antara lain tanah negara yang belum dibebani suatu hak. Yang menjadi subjek pajak adalah orang atau badan yang secara nyata mempunyai suatu hak atas bumi dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan.",
      stem: "HGU kebun karet PT Karet Musi Jaya seluas 3.400 ha di Kabupaten Musi Rawas berakhir pada 30 September 2025. Permohonan perpanjangan diajukan pada Agustus 2025 dan sampai Oktober 2026 belum diputus, tetapi perusahaan tetap menguasai kebun, menyadap karet, dan menjual hasilnya sepanjang 2026. Direksi berpendapat bahwa pada 1 Januari 2026 kebun tersebut adalah tanah negara yang belum dibebani hak sehingga tidak terutang PBB. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Pendapat direksi tepat; kebun dikecualikan sampai HGU diperpanjang, dan PBB baru terutang sejak tanggal keputusan perpanjangan", B: "Pendapat direksi tepat untuk bumi; hanya bangunan pabrik dan perumahan di kebun yang tetap terutang PBB-P5L", C: "Pendapat direksi tidak tepat; kebun terutang PBB-P2 kabupaten karena tidak lagi dibebani HGU", D: "Pendapat direksi tidak tepat; perusahaan tetap subjek PBB-P5L 2026 karena secara nyata memperoleh manfaat atas bumi kebun yang diusahakan, sehingga pengecualian tanah negara tidak dapat dipakai" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pengecualian Pasal 3 ayat (1) huruf c ditujukan untuk tanah negara yang belum dibebani hak dan tidak diusahakan pihak mana pun. Perusahaan yang tetap menguasai, menyadap, dan menjual hasil kebun secara nyata memperoleh manfaat atas bumi (Pasal 4 ayat (1)), dan kebun tetap merupakan kawasan usaha perkebunan sehingga rezimnya PBB-P5L.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PBB tidak menunggu status hak; subjek ditentukan oleh hak atau manfaat nyata per 1 Januari",
          B: "Bumi dan bangunan diuji dengan dasar yang sama, yaitu hak atau manfaat nyata; tidak ada alasan memisahkan bumi",
          C: "UU 1/2022 mengecualikan kawasan usaha perkebunan dari PBB-P2 tanpa mensyaratkan jenis haknya"
        },
        jebakan: "Frasa 'belum dibebani suatu hak' dibaca bersama 'memperoleh manfaat': kebun yang tetap diusahakan bukan tanah negara yang menganggur."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf c dan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: Pasal 3 ayat (1) huruf c, Pasal 4 ayat (1) dan Penjelasan Pasal 4 UU PBB, Pasal 3 PMK 186/2019, Pasal 38 ayat (1) UU 1/2022. Belum pasti: tidak ada naskah yang menafsirkan \"tanah negara yang belum dibebani suatu hak\" untuk HGU yang sudah berakhir, sedang dimohonkan perpanjangan, dan tetap diusahakan. Kunci bertumpu pada subjek yang memperoleh manfaat (Pasal 4 ayat (1))."
    },
    {
      id: "B8-077",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 3 ayat (1) huruf d dan e UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB adalah objek pajak yang digunakan oleh perwakilan diplomatik dan konsulat berdasarkan asas perlakuan timbal balik, serta objek pajak yang digunakan oleh badan atau perwakilan organisasi internasional yang ditentukan oleh Menteri Keuangan. Pasal 4 ayat (5) PMK 186/PMK.03/2019: areal pada kawasan perhutanan yang dipunyai haknya dan/atau dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Subjek Pajak atau Wajib Pajak tidak dikenakan PBB Sektor Perhutanan.",
      stem: "PT Rimba Equator Lestari memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Sintang dan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 di dalam areal izinnya terdapat: (1) stasiun penelitian 30 ha beserta bangunan Rp2.400.000.000 yang digunakan pusat penelitian kehutanan internasional yang telah ditentukan Menteri Keuangan sebagai organisasi internasional yang tidak dikenakan pajak; (2) kebun benih 12 ha yang seluruhnya disewakan kepada PT Benih Unggul Asia, perusahaan PMA, dan sejak 2025 dikuasai serta dimanfaatkan sepenuhnya secara nyata dan sah oleh penyewa itu untuk produksi benih komersial, beserta bangunan milik PT Benih Unggul Asia Rp900.000.000; (3) wisma tamu 2 ha beserta bangunan Rp1.500.000.000 yang dipakai perusahaan untuk menjamu tamu kedutaan besar dan pembeli asing. Nilai tanah ketiga areal Rp2.000/m². Berdasarkan kutipan tersebut, jumlah NJOP bumi dan bangunan dari ketiga areal itu yang masuk penghitungan PBB-P5L 2026 PT Rimba Equator Lestari adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.680.000.000", B: "Rp2.680.000.000", C: "Rp4.540.000.000", D: "Rp1.540.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Areal (1) digunakan organisasi internasional yang ditentukan Menteri Keuangan sehingga tidak dikenakan PBB (Pasal 3 ayat (1) huruf e UU PBB). Areal (2) dimanfaatkan sepenuhnya secara nyata dan sah oleh penyewa, bukan oleh Wajib Pajak, sehingga tidak dikenakan PBB Sektor Perhutanan (Pasal 4 ayat (5) PMK 186/2019). Wisma tamu (3) tetap objek karena dipakai perusahaan sendiri, bukan digunakan perwakilan diplomatik.",
        jejakHitung: [
          ["(1) 300.000 m² × 2.000 + 2.400.000.000 (dikecualikan, huruf e)", "Rp3.000.000.000"],
          ["(2) 120.000 m² × 2.000 + 900.000.000 (tidak dikenakan, Pasal 4 ayat (5) PMK 186/2019)", "Rp1.140.000.000"],
          ["(3) 20.000 m² × 2.000 + 1.500.000.000", "Rp1.540.000.000"],
          ["Jumlah yang masuk penghitungan", "Rp1.540.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak ada areal yang dikeluarkan: areal organisasi internasional dan kebun benih yang dimanfaatkan sepenuhnya oleh penyewa ikut dihitung",
          B: "Kebun benih tetap dihitung karena dikira penyewaan tidak menghapus objek, padahal areal yang dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Wajib Pajak tidak dikenakan PBB Sektor Perhutanan",
          C: "Areal yang digunakan organisasi internasional yang ditentukan Menteri Keuangan tidak dikeluarkan"
        },
        jebakan: "Pengecualian huruf d dan e melekat pada pengguna objek (perwakilan diplomatik, organisasi internasional yang ditentukan Menteri Keuangan), bukan pada tamu asing; areal yang dimanfaatkan sepenuhnya oleh pihak lain secara sah keluar dari PBB Sektor Perhutanan pemegang izin."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf d–e UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (2) dan (5) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-078", topik: "B8.2", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Di areal emplasemen kebun kelapa sawit PT Sawit Rokan Jaya terdapat masjid yang terbuka untuk umum dan dikelola nirlaba oleh pengurus masjid dari warga desa, berdiri di atas lahan 0,5 ha milik perusahaan. Perlakuan PBB-P5L Tahun Pajak 2026 atas lahan dan bangunan masjid tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak dikenakan PBB karena digunakan semata-mata untuk kepentingan umum di bidang ibadah dan tidak mencari keuntungan", B: "Tetap objek pajak, tetapi NJOP masjid dikurangkan sebagai NJOPTKP perusahaan", C: "Tetap objek pajak; perusahaan dapat memohon pengurangan PBB setelah SPPT Tahun Pajak 2026 terbit", D: "Tetap objek pajak karena berada di dalam areal HGU perusahaan perkebunan kelapa sawit" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf a UU PBB mengecualikan objek yang digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah dan tidak dimaksudkan memperoleh keuntungan, meskipun tanahnya berada di dalam HGU perusahaan.",
        jejakHitung: [],
        mengapaSalah: { B: "NJOPTKP adalah pengurang tetap per wajib pajak (Rp12.000.000), bukan alat untuk mengeluarkan objek tertentu", C: "Pengurangan Pasal 19 adalah keringanan atas pajak yang terutang; objek yang dikecualikan tidak terutang sejak awal", D: "Letak di dalam HGU tidak menghapus pengecualian; yang diuji adalah penggunaannya" },
        jebakan: "Bedakan tiga alat: pengecualian objek (Pasal 3), NJOPTKP, dan pengurangan (Pasal 19)."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "B8-079",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Transpipa Nusantara, badan usaha pengangkutan minyak bumi melalui pipa (bukan kontraktor kontrak kerja sama), memiliki satu ruas pipa penyalur minyak bawah laut sepanjang 3 km di perairan Laut Jawa lepas pantai Kabupaten Karawang yang diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (koridor perairan yang digunakan pipa) Rp118.000.000 dan NJOP bangunan (pipa yang dipasang tetap di dasar laut) Rp890.000.000; perusahaan tidak memiliki objek PBB-P5L lain. Perusahaan juga memiliki gedung kantor di Kota Bekasi (NJOP Rp4.200.000.000) dan tiga truk tangki. Seorang staf berpendapat NJKP cukup 20% karena NJOP setelah dikurangi NJOPTKP kurang dari Rp1.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp996.000", B: "Rp2.016.000", C: "Rp4.980.000", D: "Rp1.992.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "PP 25/2002 menguji batas Rp1.000.000.000 terhadap NJOP objek, bukan terhadap NJOP setelah dikurangi NJOPTKP. NJOP Rp1.008.000.000 ≥ Rp1 miliar sehingga NJKP 40%; NJOPTKP tetap dikurangkan sebelum dikali NJKP. Kantor di Kota Bekasi (PBB-P2) dan truk (benda bergerak) tidak dihitung.",
        jejakHitung: [
          ["NJOP objek 118.000.000 + 890.000.000", "Rp1.008.000.000"],
          ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"],
          ["NJOP − NJOPTKP", "Rp996.000.000"],
          ["996.000.000 × 40% × 0,5%", "Rp1.992.000"]
        ],
        mengapaSalah: {
          A: "Batas Rp1 miliar diuji setelah NJOPTKP sehingga memakai NJKP 20% (pendapat staf)",
          B: "NJOPTKP tidak dikurangkan (1.008.000.000 × 40% × 0,5%)",
          C: "Tarif 0,5% dikalikan tanpa NJKP"
        },
        jebakan: "Urutan yang benar: tentukan NJKP dari NJOP objek lebih dahulu, baru kurangkan NJOPTKP."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 6–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8 ayat (1) huruf c, dan Pasal 9 ayat (2) huruf a PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-080", topik: "B8.3", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "CFO PT Hutan Tanaman Riau Lestari (objek PBB-P5L sektor perhutanan) ingin memakai satu persentase yang langsung dikalikan dengan selisih NJOP dan NJOPTKP untuk memperkirakan PBB-P5L dalam anggaran 2027. Persentase tarif efektif yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "0,5%", B: "0,1%", C: "0,2%", D: "0,25%" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Tarif 0,5% (Pasal 5 UU PBB) dikalikan NJKP 40% untuk objek perhutanan (PP 25/2002), sehingga tarif efektifnya 0,2% × (NJOP − NJOPTKP).",
        jejakHitung: [ ["Tarif × NJKP = 0,5% × 40%", "0,2%"] ],
        mengapaSalah: { A: "NJKP 40% terlupa", B: "Memakai NJKP 20% yang hanya berlaku untuk objek sektor lainnya ber-NJOP di bawah Rp1 miliar", D: "Memakai tarif lahan produksi pangan dan ternak PBB-P2 Perda DKI Jakarta" },
        jebakan: "Tarif nominal 0,5% bukan tarif efektif; untuk sektor perkebunan, perhutanan, dan pertambangan tarif efektifnya selalu 0,2%."
      },
      dasarHukum: [ { pasal: "Pasal 5 dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "B8-081", topik: "B8.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Kakao Sulawesi Makmur memiliki kebun kakao ber-HGU di Kabupaten Kolaka dengan NJOP Rp58.400.000.000 menurut SPPT PBB-P5L 2026, serta gedung kantor dan gudang di Kota Kendari dengan NJOP Rp3.250.000.000. Perda Kota Kendari (data rekaan untuk soal ini) menetapkan untuk PBB-P2 2026: NJOPTKP Rp15.000.000 per wajib pajak, dasar pengenaan 60% dari NJOP setelah dikurangi NJOPTKP untuk objek nonhunian, dan tarif 0,3%. Perusahaan tidak memiliki objek lain. Jumlah PBB 2026 yang harus dibayar perusahaan atas kedua objek, ke kas negara dan ke kas daerah, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp122.599.000", B: "Rp122.593.000", C: "Rp122.626.000", D: "Rp123.276.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kebun adalah objek PBB-P5L (NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%), sedangkan kantor dan gudang di Kota Kendari adalah objek PBB-P2 dengan parameter Perda. Kedua rezim terpisah sehingga masing-masing memakai NJOPTKP-nya sendiri.",
        jejakHitung: [ ["PBB-P5L (58.400.000.000 − 12.000.000) × 40% × 0,5%", "Rp116.776.000"], ["PBB-P2 (3.250.000.000 − 15.000.000) × 60% × 0,3%", "Rp5.823.000"], ["Jumlah", "Rp122.599.000"] ],
        mengapaSalah: { B: "NJOPTKP Perda Rp15.000.000 ikut dipakai untuk PBB-P5L (PBB-P5L menjadi Rp116.770.000)", C: "NJOPTKP PBB-P2 tidak dikurangkan karena dianggap sudah dipakai kebun (PBB-P2 menjadi Rp5.850.000)", D: "Kantor dan gudang digabung sebagai objek PBB-P5L ((61.650.000.000 − 12.000.000) × 0,2%)" },
        jebakan: "Satu wajib pajak dapat memperoleh dua NJOPTKP dari dua rezim berbeda; jangan saling meminjam parameter."
      },
      dasarHukum: [ { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "Pasal 38–41 UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-082",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-07",
      stem: "Data untuk soal V-B8-07: PT Energi Panas Kerinci memegang izin panas bumi tahap eksploitasi di Kabupaten Kerinci dan tidak memiliki objek PBB-P5L lain. Uapnya dijual kepada PT Listrik Panas Nusantara, pemilik PLTP di dalam wilayah kerja yang didata sebagai subjek pajak atas bangunan PLTP dengan NOP tersendiri. Data penilaian per 1 Januari 2026 untuk NOP PT Energi Panas Kerinci: permukaan bumi areal produktif (tapak sumur, separator, jalur pipa) 85 ha dengan nilai Rp9.000/m²; permukaan bumi areal lainnya dalam wilayah kerja 9.200 ha yang lahannya sudah dibebaskan dan dimanfaatkan perusahaan untuk pengusahaan panas bumi (jalan akses, areal penyangga, dan lahan cadangan pengeboran) dengan nilai Rp600/m²; NJOP tubuh bumi hasil penilaian DJP Rp410.000.000.000; bangunan berupa sumur produksi dan injeksi, pipa uap, dan separator Rp313.000.000.000. Data lain: PLTP milik PT Listrik Panas Nusantara Rp1.150.000.000.000 dan rig pengeboran sewaan Rp180.000.000.000. PBB-P5L dalam SPPT PT Energi Panas Kerinci Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.871.676.000", B: "Rp1.571.676.000", C: "Rp751.676.000", D: "Rp1.461.276.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPPT PT Energi Panas Kerinci memuat bumi (permukaan bumi onshore yang dipunyai haknya atau diperoleh manfaatnya untuk pengusahaan panas bumi, baik areal produktif maupun areal lainnya, serta tubuh bumi; Pasal 6 ayat (1) dan (4) PMK 186/2019) dan bangunan miliknya sendiri yang dinilai dengan Nilai Perolehan Baru (Pasal 19 ayat (8)). PLTP milik pihak lain masuk NOP subjek pemiliknya (Pasal 4 ayat (1) UU PBB), sedangkan rig sewaan adalah benda bergerak.",
        jejakHitung: [
          ["Areal produktif 850.000 m² × 9.000", "Rp7.650.000.000"],
          ["Areal lainnya 92.000.000 m² × 600", "Rp55.200.000.000"],
          ["Tubuh bumi", "Rp410.000.000.000"],
          ["Bangunan milik sendiri", "Rp313.000.000.000"],
          ["NJOP objek", "Rp785.850.000.000"],
          ["(785.850.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.571.676.000"]
        ],
        mengapaSalah: {
          A: "PLTP milik PT Listrik Panas Nusantara ikut dimasukkan, padahal subjek atas bangunan itu adalah pemiliknya dengan NOP sendiri",
          C: "Tubuh bumi terlewat, padahal bumi sektor panas bumi meliputi tubuh bumi (Pasal 6 ayat (1) huruf c PMK 186/2019)",
          D: "Areal lainnya dikeluarkan, padahal lahannya sudah dibebaskan dan dimanfaatkan perusahaan untuk pengusahaan panas bumi sehingga termasuk Permukaan Bumi Onshore (Pasal 6 ayat (4) PMK 186/2019); areal di wilayah kerja hanya tidak dikenakan bila tidak dipunyai haknya dan tidak diperoleh manfaatnya (Pasal 6 ayat (7))"
        },
        jebakan: "Dalam satu wilayah kerja bisa ada dua subjek: pemegang izin panas bumi atas bumi dan bangunannya, serta pemilik PLTP atas bangunannya. NJOP tubuh bumi eksploitasi panas bumi adalah Nilai Jual Pengganti (pendapatan uap dan/atau listrik × angka kapitalisasi) yang di soal sudah diberikan sebagai hasil penilaian DJP."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1–2 dan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1), (4), (7) dan Pasal 19 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-083",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-07",
      stem: "Lanjutan data V-B8-07: SPPT PBB-P5L 2026 PT Energi Panas Kerinci sebesar Rp1.571.676.000 diterima pada 12 Maret 2026 dan dilunasi penuh pada 20 Agustus 2026. Surat keberatan yang diterima KPP pada 5 Mei 2026 memuat dua alasan: (i) 40 ha yang dinilai sebagai areal produktif (Rp9.000/m²) sebenarnya tapak sumur yang ditinggalkan sejak 2024 dan semestinya dinilai sebagai areal lainnya (Rp600/m²); (ii) pipa uap senilai Rp96.000.000.000 semestinya tidak dihitung karena merupakan peralatan produksi. Keputusan keberatan yang diterima pada 18 Februari 2027 mengabulkan alasan (i) dan menolak alasan (ii). PBB-P5L 2026 menurut keputusan keberatan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.372.956.000", B: "Rp1.564.476.000", C: "Rp1.554.876.000", D: "Rp1.564.956.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Alasan (i) mengubah klasifikasi 40 ha dari areal produktif menjadi areal lainnya, sehingga NJOP turun sebesar selisih nilai per m²; alasan (ii) ditolak karena pipa uap yang ditanam atau dilekatkan tetap adalah bangunan. NJOPTKP sudah dipakai pada SPPT sehingga penurunan NJOP langsung dikali 0,2%. Keberatan diajukan dalam 3 bulan sejak SPPT diterima (paling lambat 11 Juni 2026) dan diputus dalam 12 bulan sejak surat keberatan diterima (paling lambat 4 Mei 2027), sehingga prosedurnya sah.",
        jejakHitung: [
          ["Penurunan NJOP 400.000 m² × (9.000 − 600)", "Rp3.360.000.000"],
          ["Penurunan PBB 3.360.000.000 × 40% × 0,5%", "Rp6.720.000"],
          ["PBB menurut keputusan 1.571.676.000 − 6.720.000", "Rp1.564.956.000"]
        ],
        mengapaSalah: {
          A: "Alasan (ii) juga dianggap dikabulkan (penurunan tambahan 96.000.000.000 × 0,2% = Rp192.000.000)",
          B: "Luas 40 ha dikeluarkan seluruhnya, padahal hanya direklasifikasi menjadi areal lainnya yang tetap dinilai Rp600/m²",
          C: "Penurunan NJOP dikali 0,5% tanpa NJKP 40%"
        },
        jebakan: "Keberatan yang dikabulkan atas klasifikasi areal hanya mengubah nilai per m², bukan menghapus luasnya."
      },
      dasarHukum: [{ pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-084",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-07",
      stem: "Lanjutan data V-B8-07: PT Energi Panas Kerinci telah melunasi SPPT PBB-P5L 2026 sebesar Rp1.571.676.000, sedangkan menurut keputusan keberatan PBB 2026 menjadi Rp1.564.956.000. Saat kelebihan pembayaran diproses, perusahaan masih mempunyai utang STP PBB-P5L 2025 sebesar Rp2.180.000 dan STP PPh Pasal 21 Masa Juni 2026 sebesar Rp1.250.000 yang belum dilunasi, serta angsuran PPh Pasal 25 Masa Maret 2027 sebesar Rp410.000.000 yang belum jatuh tempo. Bila kelebihan pembayaran diperhitungkan lebih dahulu dengan utang pajak yang masih ada, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.720.000", B: "Rp4.540.000", C: "Rp3.290.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kelebihan pembayaran Rp6.720.000 diperhitungkan dengan utang pajak yang sudah ada, yaitu STP PBB 2025 dan STP PPh Pasal 21, sehingga sisa Rp3.290.000 dikembalikan. Angsuran PPh Pasal 25 yang belum jatuh tempo belum merupakan utang pajak.",
        jejakHitung: [
          ["Kelebihan 1.571.676.000 − 1.564.956.000", "Rp6.720.000"],
          ["Utang pajak 2.180.000 + 1.250.000", "Rp3.430.000"],
          ["Dikembalikan 6.720.000 − 3.430.000", "Rp3.290.000"]
        ],
        mengapaSalah: {
          A: "Kelebihan dikembalikan tanpa diperhitungkan dengan utang pajak",
          B: "Hanya utang PBB yang diperhitungkan, padahal utang pajak jenis lain juga diperhitungkan",
          D: "Angsuran PPh Pasal 25 yang belum jatuh tempo diperlakukan sebagai utang pajak"
        },
        jebakan: "Yang diperhitungkan hanya utang pajak yang sudah ada, tanpa membedakan jenis pajaknya."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 1 angka 71, Pasal 152 huruf b, dan Pasal 154 ayat (1) huruf a dan huruf f serta ayat (2) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-085",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-07",
      formulirRef: "1771.l1.7",
      stem: "Lanjutan data V-B8-07: Dalam laporan laba rugi komersial 2026, PT Energi Panas Kerinci (tahun buku kalender) membebankan PBB-P5L 2026 sesuai keputusan keberatan Rp1.564.956.000 dan denda STP PBB-P5L 2024 sebesar Rp3.460.000 yang dibayar pada Maret 2026. Dalam lampiran rekonsiliasi laporan keuangan SPT Tahunan PPh Badan 2026 (susunan PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026), perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; denda STP Rp3.460.000 diisi pada kolom penyesuaian fiskal positif akun tempat denda itu dibebankan, beserta kode penyesuaian fiskalnya", B: "PBB-P5L dan denda STP sama-sama diisi pada kolom penyesuaian fiskal positif karena keduanya pembayaran pajak yang tidak dapat dibiayakan", C: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; denda STP Rp3.460.000 diisi pada kolom penyesuaian fiskal negatif", D: "PBB-P5L diisi sebagai kredit pajak dalam SPT Tahunan PPh; denda STP Rp3.460.000 diisi pada kolom penyesuaian fiskal positif akun tempat denda itu dibebankan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a angka 9 UU PPh). Denda STP adalah sanksi administrasi yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh), sehingga dikoreksi positif. Dalam lampiran rekonsiliasi laporan keuangan SPT Tahunan PPh Badan menurut PER-11/PJ/2025 sebagaimana diubah PER-12/PJ/2026, koreksi diisi di kolom Penyesuaian Fiskal Positif pada akun tempat denda dibebankan (contoh petunjuk pengisian: sanksi administrasi pada akun Beban Usaha Lainnya), disertai kode penyesuaian fiskal. Pada formulir 1771 lama (Tahun Pajak sampai 2024), padanannya adalah koreksi positif sanksi administrasi di Lampiran I.",
        jejakHitung: [
          ["PBB-P5L 2026", "biaya fiskal Rp1.564.956.000 (tanpa penyesuaian)"],
          ["Denda STP PBB 2024", "penyesuaian fiskal positif Rp3.460.000"]
        ],
        mengapaSalah: {
          B: "PBB adalah pajak selain PPh yang dapat dibiayakan; hanya dendanya yang dikoreksi positif",
          C: "Denda yang dibebankan secara komersial menambah penghasilan neto fiskal sehingga koreksinya positif",
          D: "Kredit pajak dalam SPT Tahunan PPh hanya untuk PPh yang dipotong, dipungut, atau dibayar sendiri, bukan PBB"
        },
        jebakan: "Pajak selain PPh boleh dibiayakan; sanksinya tidak. Di SPT Coretax tidak ada baris khusus sanksi: nilai koreksi ditulis di kolom Penyesuaian Fiskal Positif pada akun bebannya, lalu dipilih kode penyesuaian fiskalnya."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a angka 9 dan Pasal 9 ayat (1) huruf k UU PPh" }, { pasal: "Lampiran PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026, petunjuk pengisian Lampiran 1A - 1L Rekonsiliasi Laporan Keuangan SPT Tahunan PPh Badan (kolom Penyesuaian Fiskal Positif dan Kode Penyesuaian Fiskal)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "B8-086",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Untuk penilaian bangunan objek PBB-P5L sektor minerba PT Bara Kutai Persada per 1 Januari 2026 tersedia data conveyor batubara permanen: harga perolehan pada 2016 Rp48.000.000.000, nilai buku akuntansi Rp19.200.000.000, serta biaya membangun conveyor serupa pada 2026 sebesar Rp71.000.000.000 dengan penyusutan fisik 35%. Pernyataan yang paling tepat mengenai NJOP conveyor tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa nilai buku akuntansi, yaitu Rp19.200.000.000", B: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa harga perolehan historis, yaitu Rp48.000.000.000", C: "Conveyor adalah peralatan produksi sehingga bukan bangunan dan tidak memiliki NJOP", D: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa nilai perolehan baru dikurangi penyusutan, yaitu Rp46.150.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Conveyor permanen adalah konstruksi teknik yang dilekatkan tetap pada bumi di kawasan pertambangan sehingga merupakan bangunan (Pasal 9 ayat (1) PMK 186/2019; Pasal 1 angka 2 UU PBB). NJOP bangunan sektor minerba ditentukan berdasarkan Nilai Perolehan Baru (Pasal 21 ayat (8) PMK 186/2019), yaitu seluruh biaya untuk memperoleh objek pada saat penilaian dikurangi penyusutan berdasarkan kondisi fisik (Pasal 1 angka 7): Rp71.000.000.000 × 65% = Rp46.150.000.000.",
        jejakHitung: [
          ["Nilai perolehan baru 2026", "Rp71.000.000.000"],
          ["Dikurangi penyusutan fisik 35%", "× 65%"],
          ["NJOP conveyor", "Rp46.150.000.000"]
        ],
        mengapaSalah: {
          A: "Nilai buku akuntansi bergantung pada metode dan umur penyusutan komersial, bukan biaya memperoleh objek pada saat penilaian dikurangi penyusutan fisik",
          B: "Harga perolehan historis 2016 bukan biaya memperoleh objek pada saat penilaian 2026",
          C: "Conveyor permanen dilekatkan tetap pada bumi sehingga termasuk bangunan menurut Pasal 9 ayat (1) PMK 186/2019 dan Pasal 1 angka 2 UU PBB"
        },
        jebakan: "Data akuntansi (harga perolehan, nilai buku) adalah pengecoh; Nilai Perolehan Baru memakai biaya membangun pada saat penilaian dikurangi penyusutan berdasarkan kondisi fisik."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 2 dan 3 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 7, Pasal 9 ayat (1), dan Pasal 21 ayat (8) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-087",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      laporanUjian: ["B-2026-10"],
      formulirRef: "SPOP.lspop.1",
      stem: "Dalam SPOP dan LSPOP sektor perkebunan Tahun Pajak 2026, PT Kebun Kopi Gayo Lestari mengisi data areal produktif kebun kopi seluas 125 ha. Menurut data penilaian, nilai tanah Rp3.600/m² dan SIT kopi Rp5.800/m². NJOP bumi yang terbentuk dari baris areal produktif tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.175.000.000", B: "Rp11.750.000.000", C: "Rp4.500.000.000", D: "Rp7.250.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Luas 125 ha = 1.250.000 m², dikalikan nilai tanah ditambah SIT karena arealnya produktif.",
        jejakHitung: [
          ["125 ha × 10.000", "1.250.000 m²"],
          ["Nilai per m² 3.600 + 5.800", "Rp9.400"],
          ["1.250.000 × 9.400", "Rp11.750.000.000"]
        ],
        mengapaSalah: {
          A: "1 ha dianggap 1.000 m²",
          C: "SIT tidak ditambahkan pada areal produktif",
          D: "Hanya SIT yang dihitung; nilai tanah terlupa"
        },
        jebakan: "Luas pada baris areal ditulis dalam hektare, sedangkan nilai per m²; konversikan dahulu."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 9 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 60,
      verifikasi: "◐",
      peringatan: "Rumus areal produktif (nilai tanah ditambah SIT, yang dalam Pasal 14 ayat (2) huruf a PMK 186/2019 disebut Biaya Investasi Tanaman) sudah dicocokkan ke naskah. Yang belum dicek: susunan dan nama baris SPOP/LSPOP sektor perkebunan di Coretax (formulirRef SPOP.lspop.1), karena formulir resmi tidak ada di pustaka naskah."
    },
    {
      id: "B8-088",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Bara Kutai Persada memegang IUP operasi produksi batubara di Kabupaten Kutai Kartanegara yang terdiri atas dua blok dan didata sebagai satu objek PBB-P5L sektor minerba (satu-satunya objek wajib pajak ini). Blok Selatan sudah berproduksi: permukaan bumi areal produktif (pit, stockpile, jalan hauling) 920 ha dengan nilai Rp6.800/m², dan tubuh bumi dinilai dengan angka kapitalisasi × hasil bersih menurut data penilaian, yaitu hasil bersih Rp52.000.000.000 dan angka kapitalisasi 8. Blok Utara belum ditambang, tetapi lahannya sudah dibebaskan dan dikuasai perusahaan: permukaan bumi 2.400 ha dengan nilai Rp1.400/m² dan, menurut data penilaian, tubuh buminya belum dinilai. Bangunan: conveyor Rp46.150.000.000 serta bengkel dan mess Rp12.850.000.000. Data lain: produksi 2025 sebanyak 3,1 juta ton, royalti yang dibayar Rp142.000.000.000, dan 210 unit dump truck. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.075.096.000", B: "Rp414.296.000", C: "Rp1.142.296.000", D: "Rp2.855.740.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "NJOP bumi = permukaan bumi Blok Selatan + tubuh bumi operasi produksi (pendapatan bersih × angka kapitalisasi, Pasal 21 ayat (7) huruf b PMK 186/2019) + permukaan bumi Blok Utara. Lahan Blok Utara sudah dikuasai perusahaan sehingga tetap Permukaan Bumi Onshore (Pasal 7 ayat (4)) walaupun belum ditambang (Areal Belum Dimanfaatkan, Pasal 21 ayat (1) huruf a). Bangunan dinilai dengan Nilai Perolehan Baru (Pasal 21 ayat (8)). Royalti, produksi, dan dump truck tidak masuk NJOP.",
        jejakHitung: [
          ["Permukaan Selatan 9.200.000 m² × 6.800", "Rp62.560.000.000"],
          ["Tubuh bumi 52.000.000.000 × 8", "Rp416.000.000.000"],
          ["Permukaan Utara 24.000.000 m² × 1.400", "Rp33.600.000.000"],
          ["Bangunan 46.150.000.000 + 12.850.000.000", "Rp59.000.000.000"],
          ["NJOP objek", "Rp571.160.000.000"],
          ["(571.160.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.142.296.000"]
        ],
        mengapaSalah: {
          A: "Permukaan Blok Utara dianggap bukan objek karena belum ditambang, padahal lahan di dalam IUP yang sudah dikuasai perusahaan adalah Permukaan Bumi Onshore (Pasal 7 ayat (4) PMK 186/2019) yang tergolong Areal Belum Dimanfaatkan (Pasal 21 ayat (1) huruf a)",
          B: "Hasil bersih dipakai langsung sebagai NJOP tubuh bumi tanpa angka kapitalisasi",
          D: "Tarif 0,5% dikalikan tanpa NJKP 40% (Pasal 1 huruf a PP 25/2002)"
        },
        jebakan: "Data royalti dan produksi sengaja diberikan; yang masuk rumus hanya pendapatan bersih (di soal disebut hasil bersih) dan angka kapitalisasi dari data penilaian. Di naskah, permukaan bumi minerba dibagi menjadi areal belum dimanfaatkan, cadangan produksi, tidak produktif, pengaman, dan emplasemen; \"areal produktif\" di stem hanya label data. Lahan di dalam IUP yang tidak dipunyai haknya dan tidak diperoleh manfaatnya oleh perusahaan tidak dikenakan PBB (Pasal 7 ayat (7))."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) dan Pasal 21 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-089",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Per 1 Januari 2026 kebun PT Sawit Seruyan Prima (satu-satunya objek PBB-P5L wajib pajak ini) memiliki areal belum produktif 450 ha berupa lahan yang sudah diolah tetapi belum ditanami, dengan nilai tanah Rp4.100/m². Blok itu ditanami kelapa sawit pada Agustus 2026 sehingga per 1 Januari 2027 tercatat sebagai areal produktif dengan SIT kelapa sawit Rp5.700/m² menurut data penilaian; nilai tanah dan data objek lain tidak berubah. Perusahaan memproyeksikan panen perdana blok itu pada 2029 dengan produksi 9.000 ton TBS per tahun dan harga Rp2.500/kg. Kenaikan PBB-P5L Tahun Pajak 2027 dibanding 2026 akibat perubahan status blok tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp51.300.000", B: "Rp128.250.000", C: "Rp88.200.000", D: "Rp51.276.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Areal yang telah ditanami adalah Areal Produktif dan dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT), walaupun belum menghasilkan (Pasal 14 ayat (1) huruf a dan ayat (2) huruf a PMK 186/2019). Perubahan dari lahan yang belum ditanami menjadi areal produktif hanya menambah SIT per m² karena nilai tanah sudah dihitung pada 2026; kenaikan baru berlaku pada Tahun Pajak 2027 sesuai keadaan 1 Januari 2027 (Pasal 8 ayat (2) UU PBB).",
        jejakHitung: [
          ["450 ha = 4.500.000 m² × SIT 5.700", "Rp25.650.000.000"],
          ["Kenaikan PBB 25.650.000.000 × 40% × 0,5%", "Rp51.300.000"]
        ],
        mengapaSalah: {
          B: "Kenaikan NJOP dikali 0,5% tanpa NJKP 40% (Pasal 1 huruf a PP 25/2002)",
          C: "Nilai tanah ikut dihitung lagi sebagai tambahan (4.100 + 5.700)",
          D: "NJOPTKP dikurangkan lagi, padahal sudah terpakai pada NJOP objek secara keseluruhan"
        },
        jebakan: "Yang menentukan adalah sudah atau belum ditanami pada 1 Januari, bukan sudah atau belum panen. Kenaikan antartahun cukup dihitung dari selisih NJOP dikali 0,2%; proyeksi produksi tidak dipakai."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-090", topik: "B8.5", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Staf baru PT Kebun Sumber Jaya menyusun ringkasan dokumen penetapan dan penagihan PBB-P5L untuk SOP perusahaan. Rumusan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SPPT diterbitkan berdasarkan SPOP; SKP diterbitkan bila pajak tidak atau kurang dibayar setelah jatuh tempo; STP diterbitkan bila SPOP tidak disampaikan setelah ditegur atau pemeriksaan menunjukkan pajak lebih besar; SPPT dilunasi 6 bulan, sedangkan SKP dan STP 1 bulan sejak diterima", B: "SPPT diterbitkan berdasarkan SPOP; SKP diterbitkan bila SPOP tidak disampaikan setelah ditegur atau pemeriksaan menunjukkan pajak lebih besar; STP diterbitkan bila pajak tidak atau kurang dibayar setelah jatuh tempo; SPPT, SKP, dan STP sama-sama dilunasi 6 bulan sejak diterima", C: "SPPT dihitung dan diisi sendiri oleh wajib pajak; SKP diterbitkan bila SPOP tidak disampaikan setelah ditegur atau pemeriksaan menunjukkan pajak lebih besar; STP diterbitkan bila pajak tidak atau kurang dibayar setelah jatuh tempo; SPPT dilunasi 6 bulan, sedangkan SKP dan STP 1 bulan sejak diterima", D: "SPPT diterbitkan berdasarkan SPOP; SKP diterbitkan bila SPOP tidak disampaikan setelah ditegur atau pemeriksaan menunjukkan pajak lebih besar; STP diterbitkan bila pajak tidak atau kurang dibayar setelah jatuh tempo; SPPT dilunasi 6 bulan, sedangkan SKP dan STP 1 bulan sejak diterima" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 10 UU PBB: SPPT diterbitkan berdasarkan SPOP, dan SKP diterbitkan dalam dua keadaan (SPOP tidak disampaikan setelah ditegur; pajak menurut pemeriksaan lebih besar). Pasal 11: SPPT dilunasi 6 bulan dan SKP 1 bulan sejak diterima; pajak yang terlambat ditagih dengan STP yang dilunasi 1 bulan sejak diterima.",
        jejakHitung: [],
        mengapaSalah: { A: "Dasar penerbitan SKP dan STP tertukar", B: "Jangka 6 bulan hanya untuk SPPT; SKP dan STP 1 bulan", C: "PBB adalah pajak yang ditetapkan; SPPT diterbitkan DJP, bukan dihitung sendiri wajib pajak" },
        jebakan: "Opsi hanya berbeda satu klausa; uji setiap klausa terhadap Pasal 10 dan 11 UU PBB."
      },
      dasarHukum: [ { pasal: "Pasal 10 dan 11 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-091", topik: "B8.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "SPPT PBB-P5L Tahun Pajak 2023 PT Kebun Tua Sumber Rejeki sebesar Rp150.000.000 jatuh tempo pada 20 September 2023. Perusahaan membayar Rp60.000.000 pada 18 Januari 2024, sedangkan sisanya Rp90.000.000 baru dibayar pada 26 Oktober 2026. Pada periode yang sama perusahaan juga menerima STP PPh Pasal 25 Masa Mei 2024 yang sudah dilunasi. Asumsikan denda dihitung terpisah untuk setiap bagian pokok sesuai tanggal pembayarannya dan bagian dari bulan dihitung satu bulan penuh. Jumlah denda administrasi PBB yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp73.200.000", B: "Rp48.000.000", C: "Rp72.000.000", D: "Rp46.800.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bagian Rp60.000.000 terlambat 3 bulan 29 hari (dihitung 4 bulan); bagian Rp90.000.000 terlambat lebih dari 37 bulan, tetapi denda dibatasi paling lama 24 bulan (48%).",
        jejakHitung: [ ["Bagian I: 20 September 2023 s.d. 18 Januari 2024", "3 bulan 29 hari → 4 bulan"], ["Denda I: 4 × 2% × 60.000.000", "Rp4.800.000"], ["Bagian II: 20 September 2023 s.d. 26 Oktober 2026", "37 bulan 6 hari → dibatasi 24 bulan"], ["Denda II: 24 × 2% × 90.000.000", "Rp43.200.000"], ["Jumlah denda", "Rp48.000.000"] ],
        mengapaSalah: { A: "Batas 24 bulan diabaikan untuk bagian II (38 bulan × 2% × 90.000.000 = Rp68.400.000)", C: "Denda maksimum 48% dikenakan atas seluruh pokok, padahal bagian I dilunasi setelah 4 bulan", D: "Bagian bulan pada bagian I dibulatkan ke bawah menjadi 3 bulan (Rp3.600.000)" },
        jebakan: "Batas 24 bulan berlaku per bagian yang belum dibayar, dan bagian yang dibayar lebih awal berhenti dikenai denda pada tanggal bayarnya."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (3) dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-092",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-08",
      stem: "Data untuk soal V-B8-08: PT Samudra Mutiara Lestari menjalankan usaha pembudidayaan ikan kerapu di laut berdasarkan Surat Izin Usaha Perikanan dan memiliki dua objek PBB-P5L sektor lainnya dengan NOP dan SPPT terpisah. Objek I di perairan Kabupaten Lombok Timur: NJOP bumi (areal perairan budidaya) Rp780.000.000. Objek II di perairan Kabupaten Sumbawa: NJOP bumi (areal perairan budidaya) Rp3.500.000.000. Kedua SPPT tidak memuat NJOP bangunan. Perusahaan juga memiliki dua kapal pengangkut ikan hidup senilai Rp6.000.000.000 serta gudang pendingin dan kantor di Kota Mataram dengan NJOP Rp2.400.000.000. Jumlah PBB-P5L 2026 dalam kedua SPPT tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.744.000", B: "Rp8.536.000", C: "Rp7.756.000", D: "Rp7.768.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Untuk objek sektor lainnya, NJKP ditentukan per objek: Objek II (NJOP Rp3,5 miliar) NJKP 40%, Objek I (NJOP Rp780 juta) NJKP 20% (Pasal 1 huruf b PP 25/2002). NJOPTKP diberikan sekali, pada objek ber-NJOP terbesar (Objek II). Kapal dan gudang di Kota Mataram tidak masuk; keramba juga tidak dinilai sebagai bangunan karena tidak termasuk daftar Pasal 9 ayat (2) PMK 186/2019 s.t.d.d. PMK 234/2022.",
        jejakHitung: [
          ["Objek II NJOP bumi", "Rp3.500.000.000 (≥ Rp1 miliar → 40%)"],
          ["Objek II (3.500.000.000 − 12.000.000) × 40% × 0,5%", "Rp6.976.000"],
          ["Objek I NJOP bumi", "Rp780.000.000 (< Rp1 miliar → 20%)"],
          ["Objek I 780.000.000 × 20% × 0,5%", "Rp780.000"],
          ["Jumlah kedua SPPT", "Rp7.756.000"]
        ],
        mengapaSalah: {
          A: "NJOPTKP dikurangkan pada kedua objek (Objek I menjadi Rp768.000)",
          B: "Objek I memakai NJKP 40%, padahal NJOP-nya di bawah Rp1 miliar (Objek I menjadi Rp1.560.000)",
          D: "NJOPTKP diberikan pada objek ber-NJOP terkecil (Objek I Rp768.000; Objek II Rp7.000.000)"
        },
        jebakan: "Dua pengecoh hanya berselisih Rp12.000 dari kunci; NJKP per objek dan NJOPTKP sekali pada NJOP terbesar menentukan jawabannya."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 8 ayat (1) huruf b dan ayat (2), Pasal 9 ayat (2), dan Pasal 33 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-093",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-08",
      formulirRef: "SPOP.lspop.4",
      stem: "Lanjutan data V-B8-08: Untuk Tahun Pajak 2027, PT Samudra Mutiara Lestari memutakhirkan data objek melalui SPOP dan LSPOP elektronik. Data per 1 Januari 2027: (1) areal perairan budidaya di Lombok Timur dan Sumbawa yang tercantum dalam Surat Izin Usaha Perikanan; (2) keramba jaring apung berjangkar tetap dan rumah jaga berpancang; (3) dua kapal pengangkut ikan hidup; (4) gudang pendingin dan kantor di Kota Mataram. Pengisian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) SPOP sebagai bumi; (2) tidak diuraikan sebagai bangunan karena bukan bangunan sektor lainnya; (3) LSPOP sebagai bangunan karena dipakai untuk usaha budidaya; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram", B: "(1) tidak dilaporkan karena perairan laut milik negara; (2) tidak diuraikan sebagai bangunan karena bukan bangunan sektor lainnya; (3) tidak dilaporkan karena benda bergerak; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram", C: "(1) SPOP sebagai bumi; (2) tidak diuraikan sebagai bangunan karena bukan bangunan sektor lainnya; (3) tidak dilaporkan karena benda bergerak; (4) LSPOP sektor lainnya karena menunjang usaha budidaya", D: "(1) SPOP sebagai bumi; (2) tidak diuraikan sebagai bangunan karena bukan bangunan sektor lainnya; (3) tidak dilaporkan karena benda bergerak; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Areal perairan budidaya yang tercantum dalam izin usaha perikanan adalah bumi sektor lainnya (Pasal 8 ayat (1) huruf b dan ayat (2) PMK 186/2019 s.t.d.d. PMK 234/2022) yang NJOP-nya ditentukan dengan Nilai Jual Pengganti. Bangunan sektor lainnya hanya jaringan pipa, jaringan kabel, dan fasilitas penyimpanan dan pengolahan terapung (Pasal 9 ayat (2)), sehingga keramba dan rumah jaga tidak diuraikan sebagai bangunan. Kapal adalah benda bergerak, sedangkan gudang dan kantor di darat Kota Mataram berada di luar sektor lainnya sehingga merupakan objek PBB-P2 daerah.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kapal tidak dilekatkan secara tetap sehingga bukan bangunan",
          B: "Penjelasan Pasal 1 angka 1 UU PBB memasukkan laut wilayah ke dalam permukaan bumi, dan Pasal 8 ayat (1) huruf b PMK 186/2019 s.t.d.d. PMK 234/2022 menjadikan perairan budidaya berizin bumi sektor lainnya",
          C: "Objek di darat di luar perairan tidak menjadi PBB-P5L sektor lainnya hanya karena menunjang usaha budidaya; sektor lainnya terbatas pada bumi dan bangunan di wilayah perairan"
        },
        jebakan: "Uji setiap aset: bumi atau bangunan, masuk daftar Pasal 8 dan Pasal 9 ayat (2) atau tidak, melekat tetap atau bergerak, di perairan atau di darat."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1–2 dan Pasal 9 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 34 dan Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 2 huruf f, Pasal 8, Pasal 9 ayat (2), dan Pasal 33 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Klasifikasi objek sudah dicocokkan ke Pasal 8 dan Pasal 9 ayat (2) PMK 186/2019 s.t.d.d. PMK 234/2022: keramba dan rumah jaga tidak termasuk daftar bangunan sektor lainnya. Yang belum dicek: susunan SPOP/LSPOP sektor lainnya di Coretax dan arti kode formulirRef SPOP.lspop.4, karena formulir resmi tidak ada di pustaka naskah."
    },
    {
      id: "B8-094",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-08",
      stem: "Lanjutan data V-B8-08: SPPT PBB-P5L 2026 PT Samudra Mutiara Lestari untuk Objek I (Rp780.000) dan Objek II (Rp6.976.000) diterima pada 6 April 2026. Objek I dilunasi pada 5 Oktober 2026, sedangkan Objek II baru dilunasi pada 20 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp279.040", B: "Rp310.240", C: "Rp139.520", D: "Rp1.744.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kedua SPPT jatuh tempo 5 Oktober 2026. Objek I dilunasi pada hari jatuh tempo sehingga tepat waktu; Objek II terlambat 1 bulan 15 hari yang dihitung 2 bulan, sehingga denda 2 × 2% × Rp6.976.000.",
        jejakHitung: [
          ["Jatuh tempo (6 bulan sejak 6 April)", "5 Oktober 2026"],
          ["Objek I dibayar 5 Oktober 2026 (hari jatuh tempo)", "tepat waktu, tanpa denda"],
          ["Objek II: 5 Oktober s.d. 20 November 2026", "1 bulan 15 hari → 2 bulan"],
          ["Denda 2 × 2% × 6.976.000", "Rp279.040"]
        ],
        mengapaSalah: {
          B: "Denda dikenakan juga atas Objek I yang dilunasi tepat waktu",
          C: "Bagian bulan dibulatkan ke bawah menjadi 1 bulan",
          D: "Memakai denda 25% milik SKP"
        },
        jebakan: "Denda dihitung per SPPT; SPPT yang lunas tepat waktu tidak ikut didenda."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-095",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB (parafrase): Direktur Jenderal Pajak dapat mengeluarkan surat ketetapan pajak apabila SPOP tidak disampaikan dan setelah ditegur secara tertulis tidak disampaikan sebagaimana ditentukan dalam surat teguran. Jumlah pajak yang terutang dalam surat ketetapan pajak tersebut adalah pokok pajak ditambah denda administrasi sebesar 25% dihitung dari pokok pajak.",
      stem: "PT Hutan Borneo Raya tidak menyampaikan SPOP sektor perhutanan 2026 meskipun telah ditegur, sehingga DJP menerbitkan SKP PBB-P5L 2026 berdasarkan data administrasi dengan pokok Rp186.000.000. SKP diterima pada 8 Juni 2026 dan dilunasi seluruhnya pada 3 Juli 2026. Keberatan yang diajukan pada 20 Juli 2026 membuktikan bahwa luas areal produktif dalam data administrasi terlalu besar. Keputusan keberatan yang diterima pada 15 April 2027 menetapkan pokok PBB 2026 menjadi Rp150.000.000 dan menghitung ulang denda administrasinya. Perusahaan tidak mempunyai utang pajak lain. Berdasarkan kutipan tersebut, kelebihan pembayaran yang dikembalikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000", B: "Rp45.000.000", C: "Rp82.500.000", D: "Rp9.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Jumlah dalam SKP huruf a adalah pokok ditambah denda 25% dari pokok. Karena keputusan keberatan menurunkan pokok menjadi Rp150.000.000, denda 25% ikut dihitung ulang dari pokok baru, sehingga jumlah menurut keputusan Rp187.500.000 dan kelebihan atas pembayaran Rp232.500.000 adalah Rp45.000.000.",
        jejakHitung: [
          ["Dibayar menurut SKP 186.000.000 × 125%", "Rp232.500.000"],
          ["Menurut keputusan 150.000.000 × 125%", "Rp187.500.000"],
          ["Kelebihan pembayaran", "Rp45.000.000"]
        ],
        mengapaSalah: {
          A: "Hanya selisih pokok yang dikembalikan; denda 25% atas selisih pokok terlupa",
          C: "Denda 25% dianggap hapus seluruhnya karena keberatan dikabulkan sebagian",
          D: "Hanya selisih denda yang dikembalikan"
        },
        jebakan: "Denda SKP huruf a melekat pada pokok; bila pokok turun, dendanya ikut turun, tetapi tidak hilang."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 20 ayat (4) PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-096",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002 (parafrase): Banding diajukan dalam jangka waktu 3 bulan sejak tanggal diterima keputusan yang dibanding, kecuali diatur lain dalam peraturan perundang-undangan perpajakan. Jangka waktu untuk mengajukan gugatan terhadap pelaksanaan penagihan pajak adalah 14 hari sejak tanggal pelaksanaan penagihan.",
      stem: "PT Kebun Sungai Lilin menghadapi tiga dokumen PBB-P5L pada 2026: (1) SKP PBB 2025 hasil pemeriksaan yang diterima pada 2 Februari 2026 dan dinilai keliru menghitung luas; (2) keputusan keberatan atas SPPT 2024 yang menolak seluruh keberatan dan diterima pada 9 Maret 2026; (3) Surat Paksa atas tunggakan STP PBB 2024 yang diberitahukan oleh jurusita pajak pada 14 April 2026 ke alamat yang menurut perusahaan keliru, sehingga pelaksanaannya dinilai cacat prosedur. Berdasarkan kutipan tersebut dan UU PBB, upaya hukum dan batas waktu yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) keberatan paling lambat 1 Mei 2026; (2) keberatan ulang paling lambat 8 Juni 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penagihan (14 April 2026)", B: "(1) banding paling lambat 1 Mei 2026; (2) banding paling lambat 8 Juni 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penagihan (14 April 2026)", C: "(1) keberatan paling lambat 1 Mei 2026; (2) banding paling lambat 8 Juni 2026; (3) keberatan paling lambat 13 Juli 2026", D: "(1) keberatan paling lambat 1 Mei 2026; (2) banding paling lambat 8 Juni 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penagihan (14 April 2026)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "SKP PBB diajukan keberatan dalam 3 bulan sejak diterima (Pasal 15 UU PBB); keputusan keberatan dapat dibanding ke Pengadilan Pajak dalam 3 bulan sejak diterima; pelaksanaan Surat Paksa yang dinilai cacat prosedur digugat dalam 14 hari sejak tanggal pelaksanaan penagihan. Untuk jangka waktu bulan, tanggal diterima dihitung sebagai hari pertama (contoh Penjelasan Pasal 11 ayat (1) UU PBB: diterima 1 Maret, jatuh tempo 31 Agustus).",
        jejakHitung: [
          ["(1) 3 bulan sejak 2 Februari 2026", "1 Mei 2026"],
          ["(2) 3 bulan sejak 9 Maret 2026", "8 Juni 2026"],
          ["(3) 14 hari sejak 14 April 2026 (pelaksanaan Surat Paksa)", "batas gugatan (Pasal 40 ayat (2) UU 14/2002)"]
        ],
        mengapaSalah: {
          A: "Tidak ada keberatan kedua; upaya atas keputusan keberatan adalah banding",
          B: "SKP belum pernah diajukan keberatan; banding hanya atas keputusan keberatan",
          C: "Surat Paksa bukan objek keberatan; pelaksanaan penagihan digugat dalam 14 hari"
        },
        jebakan: "Petakan dokumen ke upayanya: ketetapan → keberatan, keputusan keberatan → banding, pelaksanaan penagihan → gugatan."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 23 ayat (2) huruf a UU KUP" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-097",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Konsultan pajak membandingkan dua keberatan PT Agro Mitra Sejati: keberatan atas SKPKB PPh Badan Tahun Pajak 2024 dan keberatan atas SKP PBB-P5L Tahun Pajak 2026. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan juga dikenai denda 30% bila ditolak", B: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, dan jatuh tempo SKP ditangguhkan sampai keputusan keberatan terbit", C: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan UU PBB tidak mengatur denda serupa", D: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 50% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan UU PBB tidak mengatur denda serupa" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Keberatan SKPKB tunduk pada Pasal 25 UU KUP (3 bulan sejak tanggal dikirim; denda 30% sejak UU HPP bila ditolak atau dikabulkan sebagian), sedangkan keberatan SKP PBB tunduk pada Pasal 15–16 UU PBB (3 bulan sejak diterima; tidak menunda pembayaran) yang tidak memuat denda atas keberatan yang ditolak.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Denda 30% Pasal 25 ayat (9) UU KUP melekat pada keberatan atas ketetapan menurut UU KUP, bukan pada SKP PBB",
          B: "Pengajuan keberatan PBB tidak menunda kewajiban membayar; SKP tetap jatuh tempo 1 bulan sejak diterima",
          D: "Denda 50% adalah ketentuan sebelum UU HPP"
        },
        jebakan: "Soal lintas KUP–PBB: titik awal (dikirim vs diterima) dan sanksi atas keberatan berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 25 ayat (9) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 Pasal 20 ayat (4)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-098", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 25 ayat (1) dan Pasal 26 ayat (1)–(2) UU 19/1997 s.t.d.d. UU 19/2000 (parafrase): Apabila utang pajak dan/atau biaya penagihan pajak tidak dilunasi setelah dilaksanakan penyitaan, pejabat berwenang melaksanakan penjualan secara lelang terhadap barang yang disita melalui kantor lelang. Penjualan secara lelang dilaksanakan paling singkat 14 hari setelah pengumuman lelang, dan pengumuman lelang dilaksanakan paling singkat 14 hari setelah penyitaan.",
      stem: "Atas tunggakan STP PBB-P5L PT Rimba Kalbar Jaya, jurusita pajak melaksanakan penyitaan atas dua unit ekskavator milik perusahaan (barang bergerak) pada 2 Juni 2026; utang pajak dan biaya penagihan tetap belum dilunasi. Dalam soal ini 'paling singkat 14 hari setelah' berarti tanggal paling cepat adalah tanggal acuan ditambah 14 hari. Berdasarkan kutipan tersebut, tanggal paling cepat pengumuman lelang dan pelaksanaan lelang adalah ...",
      kataKualifikasi: ["paling singkat", "paling cepat"],
      opsi: { A: "Pengumuman lelang 16 Juni 2026; lelang 30 Juni 2026", B: "Pengumuman lelang 16 Juni 2026; lelang 16 Juli 2026", C: "Pengumuman lelang 4 Juni 2026; lelang 18 Juni 2026", D: "Pengumuman lelang 23 Juni 2026; lelang 7 Juli 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengumuman lelang paling cepat 14 hari setelah penyitaan (2 Juni + 14 = 16 Juni 2026) dan lelang paling cepat 14 hari setelah pengumuman (16 Juni + 14 = 30 Juni 2026).",
        jejakHitung: [ ["Penyitaan", "2 Juni 2026"], ["+ 14 hari → pengumuman lelang", "16 Juni 2026"], ["+ 14 hari → lelang", "30 Juni 2026"] ],
        mengapaSalah: { B: "Jarak pengumuman ke lelang dihitung satu bulan, bukan 14 hari", C: "Memakai 2 × 24 jam, yang merupakan jangka dari pemberitahuan Surat Paksa ke penyitaan", D: "Memakai 21 hari, yang merupakan jangka dari Surat Teguran ke Surat Paksa" },
        jebakan: "Rantai penagihan memiliki angka berbeda pada tiap mata rantai: 7 hari, 21 hari, 2 × 24 jam, 14 hari, 14 hari."
      },
      dasarHukum: [ { pasal: "Pasal 25–26 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "PMK 61/2023" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-099",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Pada 20 Agustus 2026 PT Kebun Lestari Jaya melunasi SPPT PBB-P5L 2026 sebesar Rp48.600.000 dan denda STP PBB-P5L 2025 sebesar Rp1.944.000 melalui rekening bank. Sebelumnya perusahaan tidak mencatat utang PBB, dan pembayaran langsung dibebankan. Jurnal yang tepat pada tanggal pembayaran adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Debit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000; Kredit Utang PBB Rp50.544.000", B: "Debit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000; Kredit Kas/Bank Rp50.544.000", C: "Debit Kas/Bank Rp50.544.000; Kredit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000", D: "Debit Pajak Dibayar di Muka (kredit pajak PPh) Rp50.544.000; Kredit Kas/Bank Rp50.544.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembayaran langsung dibebankan sehingga beban PBB dan beban denda didebit, sedangkan kas/bank dikredit sebesar jumlah yang keluar. Secara fiskal, beban PBB dapat dikurangkan, tetapi beban denda dikoreksi positif.",
        jejakHitung: [
          ["Beban PBB", "Rp48.600.000"],
          ["Beban denda pajak", "Rp1.944.000"],
          ["Kas/bank keluar", "Rp50.544.000"]
        ],
        mengapaSalah: {
          A: "Pembayaran mengurangi kas/bank; utang PBB tidak pernah dicatat sebelumnya",
          C: "Sisi debit dan kredit terbalik",
          D: "PBB bukan kredit pajak PPh sehingga tidak dicatat sebagai pajak dibayar di muka yang dapat dikreditkan"
        },
        jebakan: "Soal lintas akuntansi: catat beban dan kas dengan benar, lalu ingat bahwa denda dikoreksi secara fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh" }, { pasal: "Pasal 11 ayat (1), ayat (3), dan ayat (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "B8-100",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      kutipan: "Pasal 8 ayat (3) dan Pasal 18 ayat (1) UU PBB (parafrase): Tempat pajak yang terutang adalah di wilayah kabupaten/kota yang meliputi letak objek pajak. Hasil penerimaan pajak merupakan penerimaan negara yang dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan pembagian sekurang-kurangnya 90% untuk Pemerintah Daerah. Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan 100% untuk daerah, dengan porsi terbesar (73,8%) untuk kabupaten/kota penghasil.",
      stem: "HGU kebun kelapa sawit PT Sawit Dua Kabupaten seluas 9.000 ha membentang di Kabupaten Kampar (6.000 ha) dan Kabupaten Rokan Hulu (3.000 ha); pabrik kelapa sawit dan perumahan karyawan seluruhnya berada di bagian Kabupaten Kampar. Kantor pusat dan KPP terdaftar perusahaan berada di Kota Pekanbaru. Berdasarkan kutipan tersebut, pernyataan yang paling tepat mengenai tempat terutang, pendataan objek, dan daerah penerima bagi hasil adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB terutang di Kota Pekanbaru tempat wajib pajak terdaftar, sehingga seluruh kebun didata dengan satu NOP; porsi kabupaten penghasil diterima masing-masing kabupaten sebanding dengan PBB atas bagian kebun di wilayahnya", B: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; seluruh porsi kabupaten penghasil diterima Kabupaten Kampar karena pabrik dan perumahan berada di sana", C: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; bagi hasil diterima Provinsi Riau seluruhnya untuk kemudian dibagi rata kepada kedua kabupaten", D: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; porsi kabupaten penghasil diterima masing-masing kabupaten sebanding dengan PBB atas bagian kebun di wilayahnya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 8 ayat (3) menetapkan tempat terutang menurut letak objek, sehingga bagian kebun di Kampar dan di Rokan Hulu terutang di kabupaten masing-masing dan didata terpisah. Menurut UU 1/2022, DBH PBB 100% untuk daerah dengan porsi terbesar (73,8%) bagi kabupaten/kota penghasil, sehingga tiap kabupaten menerima porsi penghasil sesuai PBB atas bagian kebun di wilayahnya; letak pabrik dan domisili wajib pajak tidak menentukan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Domisili dan KPP terdaftar wajib pajak tidak menentukan tempat terutang",
          B: "Letak pabrik tidak menarik seluruh kebun ke Kampar; bagian kebun di Rokan Hulu tetap terutang dan porsi penghasilnya diterima Rokan Hulu",
          C: "Porsi terbesar DBH PBB disalurkan langsung kepada kabupaten/kota penghasil sesuai letak objek; provinsi hanya menerima porsinya sendiri (16,2%), bukan seluruh DBH untuk dibagi rata"
        },
        jebakan: "Objek yang melintasi batas kabupaten dipecah menurut letaknya; jangan ditarik ke lokasi pabrik atau kantor pusat."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (3) dan Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 113 ayat (2) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 angka 7 dan Pasal 16 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Tempat terutang (Pasal 8 ayat (3) UU PBB) dan pembagian DBH PBB (Pasal 113 ayat (2) UU 1/2022; Pasal 16 PMK 35/2026) sudah dicocokkan dengan naskah. Yang belum ada di naskah: aturan bahwa bagian kebun di dua kabupaten didata dengan NOP terpisah. PMK 81/2024 hanya mengatur pendaftaran objek di KPP tempat wajib pajak terdaftar (Pasal 71)."
    },
    {
      id: "B8-101",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan sebesar 100% untuk daerah, dengan rincian 16,2% untuk provinsi yang bersangkutan, 73,8% untuk kabupaten/kota penghasil, dan 10% untuk kabupaten/kota lainnya dalam provinsi yang bersangkutan. Pasal 18 ayat (1) UU PBB sendiri hanya menetapkan imbangan sekurang-kurangnya 90% untuk pemerintah daerah.",
      stem: "Pada 2026 PT Tambang dan Kebun Andalas melunasi pembayaran berikut: PBB-P5L kebun karet di Kabupaten Dharmasraya Rp186.400.000; PBB-P5L tambang batubara di Kabupaten Sijunjung Rp742.800.000; PBB-P2 atas kantor di Kota Padang Rp9.600.000; PPh Pasal 21 karyawan Rp1.240.000.000; dan PPN Rp2.860.000.000. Kedua kabupaten berada di Provinsi Sumatera Barat; abaikan waktu penyaluran DBH. Berdasarkan kutipan tersebut, jumlah DBH PBB yang menjadi porsi kabupaten penghasil (Kabupaten Dharmasraya dan Kabupaten Sijunjung bersama-sama) dari pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp836.280.000", B: "Rp778.669.600", C: "Rp685.749.600", D: "Rp692.834.400" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "DBH PBB hanya bersumber dari PBB yang dikelola pusat (PBB-P5L). PBB-P2 adalah pajak kabupaten/kota dan menjadi PAD Kota Padang, sedangkan PPh Pasal 21 dan PPN bukan sumber DBH PBB. Menurut Pasal 113 ayat (2) UU 1/2022 (diulang Pasal 16 PMK 35/2026), porsi kabupaten/kota penghasil adalah 73,8% × Rp929.200.000 = Rp685.749.600.",
        jejakHitung: [
          ["PBB-P5L 186.400.000 + 742.800.000", "Rp929.200.000"],
          ["DBH PBB untuk daerah 100%", "Rp929.200.000"],
          ["Porsi kabupaten/kota penghasil 73,8% × 929.200.000", "Rp685.749.600"]
        ],
        mengapaSalah: {
          A: "Memakai imbangan minimal 90% Pasal 18 ayat (1) UU PBB sebagai porsi kabupaten; UU 1/2022 membagi 100% DBH PBB dan porsi penghasil hanya 73,8%",
          B: "Porsi 10% (huruf c, kabupaten/kota lainnya dalam provinsi) ikut dijumlahkan menjadi 83,8%, padahal yang ditanya hanya porsi kabupaten/kota penghasil (huruf b, 73,8%)",
          D: "PBB-P2 Kota Padang ikut dihitung (73,8% × Rp938.800.000), padahal pajak daerah langsung menjadi PAD"
        },
        jebakan: "Data PPh Pasal 21 dan PPN sengaja disertakan. Porsi kabupaten penghasil 73,8% dihitung hanya dari PBB-P5L, bukan 90% Pasal 18 UU PBB. Dalam alokasi nyata, 90% DBH PBB dibagi menurut persentase ini dan 10% menurut kinerja pemerintah daerah (Pasal 120 UU 1/2022; Pasal 17 PMK 35/2026); soal hanya meminta hitungan menurut persentase dalam kutipan."
      },
      dasarHukum: [{ pasal: "Pasal 113 ayat (2) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 angka 14, Pasal 16, dan Pasal 17 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-102", topik: "B8.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Hutan Lestari Mahakam, pemegang perizinan berusaha pemanfaatan hutan alam di Kabupaten Mahakam Ulu, pada 2026 membayar: PBB-P5L sektor perhutanan; Provisi Sumber Daya Hutan (PSDH) dan Dana Reboisasi (DR) atas kayu yang ditebang; PBB-P2 atas rumah dinas direksi di Kota Samarinda; serta PPN atas penjualan kayu bulat. Pengelompokan yang paling tepat menurut UU 1/2022 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L, PSDH, dan DR: DBH pajak; PBB-P2: PAD Kota Samarinda; PPN: tidak dibagihasilkan", B: "PBB-P5L: DBH pajak; PSDH dan DR: DBH sumber daya alam kehutanan; PBB-P2: PAD Kota Samarinda; PPN: tidak dibagihasilkan", C: "PBB-P5L: DBH sumber daya alam kehutanan; PSDH dan DR: DBH sumber daya alam kehutanan; PBB-P2: PAD Kota Samarinda; PPN: tidak dibagihasilkan", D: "PBB-P5L: DBH pajak; PSDH dan DR: DBH sumber daya alam kehutanan; PBB-P2: DBH pajak karena objeknya milik perusahaan perhutanan; PPN: tidak dibagihasilkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PBB-P5L tetap pajak sehingga dibagihasilkan sebagai DBH pajak; PSDH dan DR adalah PNBP kehutanan yang dibagihasilkan sebagai DBH sumber daya alam; PBB-P2 adalah pajak daerah (PAD); PPN tidak termasuk sumber DBH.",
        jejakHitung: [],
        mengapaSalah: { A: "PSDH dan DR bukan pajak, melainkan PNBP sumber daya alam kehutanan", C: "PBB-P5L sektor perhutanan tetap pajak, bukan penerimaan sumber daya alam", D: "PBB-P2 dipungut dan diterima langsung oleh daerah sebagai PAD, bukan DBH" },
        jebakan: "Sektor usaha (kehutanan) tidak menentukan jenis DBH; yang menentukan adalah sifat penerimaannya: pajak pusat, PNBP sumber daya alam, atau pajak daerah."
      },
      dasarHukum: [ { pasal: "UU 1/2022 (DBH pajak dan DBH sumber daya alam kehutanan)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "B8-103", topik: "B8.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Dari kegiatan usaha perkebunan kelapa sawit di Kabupaten Kotawaringin Timur pada 2026, negara menerima empat jenis penerimaan berikut. Penerimaan yang tidak dibagihasilkan kepada daerah sebagai dana bagi hasil pajak adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "PPN atas penjualan CPO", B: "PBB-P5L sektor perkebunan atas kebun di Kotawaringin Timur", C: "PPh Pasal 21 atas gaji karyawan orang pribadi dalam negeri", D: "PPh Pasal 25/29 para pemasok TBS orang pribadi dalam negeri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "DBH pajak bersumber dari PBB, PPh Pasal 21 dan PPh Pasal 25/29 wajib pajak orang pribadi dalam negeri, serta cukai hasil tembakau; PPN tidak dibagihasilkan.",
        jejakHitung: [],
        mengapaSalah: { B: "PBB-P5L dibagihasilkan kepada daerah (Pasal 18 UU PBB; DBH pajak)", C: "PPh Pasal 21 termasuk sumber DBH pajak menurut UU 1/2022", D: "PPh Pasal 25/29 orang pribadi dalam negeri termasuk sumber DBH pajak" },
        jebakan: "Kata 'tidak' membalik pertanyaan; cari satu-satunya yang bukan sumber DBH pajak."
      },
      dasarHukum: [ { pasal: "UU 1/2022 (DBH pajak)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "B8-104",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-09",
      stem: "Data untuk soal ini dan soal berikutnya (V-B8-09): PT Sawit Tanjung Harapan memiliki satu objek PBB-P5L perkebunan di Kabupaten Kotawaringin Barat. Pada 2026 bagian pajaknya mencatat empat masalah: (1) SPPT 2026 yang diterima 2 Januari 2026 mencantumkan alamat objek dan NOP kebun lain, sedangkan nama wajib pajak, luas, dan jumlah pajak benar; (2) SKP PBB 2025 hasil pemeriksaan yang diterima 5 Januari 2026 menetapkan areal produktif 3.200 ha, padahal hasil pengukuran izin usaha hanya 2.800 ha; kekeliruan itu baru diketahui pada Agustus 2026 dan belum pernah diajukan keberatan; (3) STP PBB 2026 memuat denda keterlambatan, padahal pembayaran SPPT pada hari jatuh tempo gagal karena gangguan sistem bank persepsi dan baru berhasil keesokan harinya; (4) banjir pada Juli 2026 merusak 30% tanaman, sedangkan SPPT 2026 sudah sesuai keadaan objek pada 1 Januari 2026. Jalur penyelesaian yang tepat untuk masalah (1), (2), (3), dan (4) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembetulan SPPT; pengurangan atau pembatalan SKP PBB yang tidak benar; pengurangan denda administratif PBB; pengurangan PBB", B: "Keberatan; keberatan; keberatan atas STP PBB; pengurangan PBB", C: "Pembetulan SPPT; banding ke Pengadilan Pajak; pembetulan STP PBB; keberatan", D: "Pengurangan PBB; pembetulan SKP PBB; pengurangan PBB; pembetulan SPPT" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "(1) Salah tulis identitas objek tanpa sengketa nilai → pembetulan (Pasal 2 ayat (2) PMK 118/2024: kesalahan tulis meliputi nomor objek pajak dan lokasi objek pajak). (2) Sengketa materi atas SKP yang tenggat keberatannya sudah lewat (3 bulan sejak 5 Januari 2026, yaitu 4 April 2026) dan belum pernah diajukan keberatan → pengurangan atau pembatalan SKP PBB yang tidak benar. (3) Denda yang timbul karena keadaan pihak ketiga atau kendala jaringan sistem, bukan kesalahan wajib pajak → pengurangan denda administratif PBB (Pasal 20 UU PBB), atas denda yang belum dibayar. (4) Penetapan benar tetapi objek terkena bencana → pengurangan PBB Pasal 19, yang diberikan paling tinggi 100% dari PBB tahun bencana yang belum dilunasi, baik dalam SPPT maupun STP PBB yang terbit pada tahun bencana.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Keberatan atas SKP 2025 sudah lewat 3 bulan, STP bukan objek keberatan PBB (keberatan hanya atas SPPT dan SKP PBB), dan kesalahan tulis tidak memerlukan keberatan.",
          C: "Banding hanya atas keputusan keberatan; STP tidak memuat kesalahan hitung; banjir setelah 1 Januari bukan alasan keberatan karena penetapan sudah benar.",
          D: "Pengurangan Pasal 19 untuk kondisi objek atau bencana, bukan kesalahan identitas; luas areal yang keliru adalah sengketa materi, bukan salah tulis."
        },
        jebakan: "Menjadikan keberatan jalur tunggal untuk semua masalah PBB; tiap masalah punya jalurnya sendiri. Pengurangan PBB karena bencana hanya memotong PBB yang belum dilunasi, jadi ajukan sebelum melunasi."
      },
      dasarHukum: [{ pasal: "Pasal 15, 19, dan 20 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (2), Pasal 9 ayat (1), Pasal 21, dan Pasal 27 ayat (3) PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 4 ayat (2) dan (3) PMK 129/2023", berlakuSejak: "2023-12-30" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Jalur tiap masalah sudah dicocokkan ke naskah (Pasal 2 ayat (2), 9 ayat (1), 21, 27 ayat (3) PMK 118/2024; Pasal 20 UU PBB; Pasal 4 PMK 129/2023). Belum pasti: SPPT 2026 sudah lunas awal Juli (B8-105) sehingga pengurangan PBB masalah (4) hanya dapat memotong STP PBB 2026 yang belum dilunasi, padahal Pasal 23 ayat (3) huruf e PMK 118/2024 dan Pasal 5 ayat (4) huruf g PMK 129/2023 membuat pengurangan denda (3) dan pengurangan PBB (4) atas SPPT/STP 2026 yang sama saling meniadakan. Stem perlu disusun ulang."
    },
    {
      id: "B8-105",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-09",
      stem: "Lanjutan V-B8-09: SPPT PBB-P5L 2026 PT Sawit Tanjung Harapan sebesar Rp640.000.000 diterima pada 2 Januari 2026. Pada hari jatuh tempo pembayaran gagal karena gangguan sistem bank persepsi (dibuktikan surat keterangan bank), dan PBB baru berhasil dilunasi penuh keesokan harinya. Pada 5 Oktober 2026 perusahaan menerima STP PBB berisi denda keterlambatan dan belum membayarnya. Asumsikan bagian dari bulan dihitung satu bulan penuh. Jumlah denda dalam STP dan langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.800.000; mengajukan keberatan atas STP PBB paling lambat 3 bulan sejak STP diterima", B: "Rp12.800.000; mengajukan permohonan pengurangan denda administratif PBB (sebagian atau seluruhnya) karena denda timbul bukan karena kesalahan wajib pajak, sebelum denda itu dibayar", C: "Rp153.600.000; mengajukan pengurangan PBB Pasal 19 karena keadaan kahar", D: "Rp160.000.000; mengajukan pembetulan STP PBB karena kesalahan hitung" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jatuh tempo SPPT 6 bulan sejak diterima; menurut contoh Penjelasan Pasal 11 ayat (1) UU PBB (diterima 1 Maret, jatuh tempo 31 Agustus) SPPT yang diterima 2 Januari 2026 jatuh tempo 1 Juli 2026. Terlambat satu hari dihitung satu bulan sehingga denda 2% × Rp640.000.000 = Rp12.800.000. Karena denda timbul karena gangguan pihak ketiga (bank persepsi), pokok sudah lunas, dan denda belum dibayar, jalurnya permohonan pengurangan denda administratif PBB (dapat sampai seluruh denda).",
        jejakHitung: [
          ["Jatuh tempo: 6 bulan sejak 2 Januari 2026 (contoh Penjelasan Pasal 11 ayat (1))", "1 Juli 2026"],
          ["Dilunasi keesokan harinya, 2 Juli 2026", "terlambat 1 hari → 1 bulan"],
          ["Denda 2% × 1 × Rp640.000.000", "Rp12.800.000"]
        ],
        mengapaSalah: {
          A: "STP bukan objek keberatan PBB; keberatan hanya atas SPPT dan SKP PBB.",
          C: "Denda dihitung per bulan keterlambatan (1 bulan), bukan 12 bulan; lagi pula pengurangan PBB Pasal 19 mensyaratkan kondisi tertentu objek yang berhubungan dengan subjek atau objek terkena bencana alam/sebab lain yang luar biasa, bukan gangguan sistem pembayaran, sehingga keterlambatan karena bank persepsi diselesaikan dengan pengurangan denda administratif.",
          D: "25% adalah denda dalam SKP (Pasal 10 UU PBB), bukan denda keterlambatan bayar; STP tidak memuat kesalahan hitung."
        },
        jebakan: "Mencampur denda 25% SKP dengan denda 2% sebulan, dan mengira STP dapat diajukan keberatan. Pengurangan denda hanya atas denda yang belum dibayar, jadi jangan melunasi denda lebih dulu."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (3) UU PBB beserta Penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 20 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1), Pasal 21 huruf a, Pasal 23 ayat (5) huruf a, dan Pasal 27 ayat (3) huruf d dan f serta ayat (4) PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-106",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Hutan Kapuas Lestari menerima SKP PBB-P5L 2025 sebesar Rp410.000.000 pada 10 Februari 2026. SKP itu memakai NJOP bumi hutan tanaman industri yang menurut perusahaan berasal dari data kawasan lain. Surat keberatan baru dikirim pada 25 Mei 2026 tanpa alasan keadaan di luar kekuasaan, sehingga DJP memberitahukan bahwa keberatan tidak dipertimbangkan karena tidak memenuhi syarat. Perusahaan tetap yakin SKP itu tidak benar dan memiliki bukti data kawasan yang lengkap. Upaya yang masih tersedia bagi perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Banding ke Pengadilan Pajak atas surat pemberitahuan bahwa keberatan tidak dipertimbangkan, paling lambat 3 bulan sejak surat itu diterima", B: "Mengajukan keberatan kedua atas SKP yang sama dengan melampirkan bukti data kawasan", C: "Mengajukan permohonan pengurangan atau pembatalan SKP PBB yang tidak benar, karena keberatannya tidak dipertimbangkan", D: "Mengajukan pengurangan PBB Pasal 19 dengan alasan kondisi tertentu objek pajak" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keberatan diajukan setelah lewat 3 bulan (batasnya 9 Mei 2026) sehingga tidak dipertimbangkan; tidak ada keputusan keberatan yang dapat dibanding. Atas SKP PBB yang tidak benar dan keberatannya tidak dipertimbangkan, tersedia permohonan pengurangan atau pembatalan SKP PBB yang tidak benar.",
        jejakHitung: [
          ["SKP diterima", "10 Februari 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "9 Mei 2026"],
          ["Keberatan dikirim", "25 Mei 2026 → tidak dipertimbangkan"]
        ],
        mengapaSalah: {
          A: "Banding hanya terhadap keputusan keberatan; pemberitahuan bahwa keberatan tidak dipertimbangkan bukan keputusan keberatan.",
          B: "Satu SKP hanya dapat diajukan satu keberatan, dan tenggatnya sudah lewat.",
          D: "Pengurangan Pasal 19 adalah keringanan atas penetapan yang benar (kondisi objek/subjek atau bencana), bukan koreksi NJOP yang keliru."
        },
        jebakan: "Mengira jalan satu-satunya setelah keberatan gagal adalah banding."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-107",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kebun Lestari Mandiri menyampaikan SPOP 2026 dengan lampiran areal produktif 2.150 ha. Dalam SPPT PBB-P5L 2026 yang diterima pada 16 Maret 2026, luas areal produktif terekam 2.510 ha (angka tertukar), sedangkan data lain sesuai SPOP. Dasar penghitungan: NJOP bumi areal produktif Rp45.000.000 per ha (sudah termasuk Biaya Investasi Tanaman), NJOP bumi areal lain dan bangunan Rp7.050.000.000, NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%. SPPT mencantumkan PBB Rp239.976.000. Bagian pajak menemukan kesalahan itu pada 20 April 2026, dan perusahaan belum mengajukan permohonan apa pun atas SPPT tersebut. Jalur yang sesuai ketentuan dan jumlah PBB 2026 menurut penghitungan perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembetulan SPPT karena kesalahan tulis; PBB menjadi Rp207.576.000", B: "Keberatan atas SPPT, dan selama keberatan diproses SPPT tidak perlu dibayar; PBB menurut perusahaan Rp207.576.000", C: "Keberatan atas SPPT dalam 3 bulan sejak SPPT diterima, dengan PBB menurut perusahaan Rp207.576.000; PBB dalam SPPT tetap dibayar pada jatuh tempo", D: "Pengurangan PBB Pasal 19 UU PBB sebesar selisih Rp32.400.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Luas areal yang salah adalah materi SPPT yang menentukan besarnya PBB terutang, jadi jalurnya keberatan atas SPPT (Pasal 15 ayat (1) UU PBB; Pasal 9 ayat (1) huruf f dan ayat (2) huruf c PMK 118/2024), diajukan dalam 3 bulan sejak SPPT diterima (16 Maret 2026; 20 April 2026 jelas masih di dalamnya) dengan menyebut PBB menurut penghitungan perusahaan. Dengan luas 2.150 ha, PBB = 0,5% × 40% × (NJOP − NJOPTKP) = Rp207.576.000. Keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB; Pasal 10 ayat (4) PMK 118/2024), jadi SPPT tetap dilunasi pada jatuh tempo. Bila perusahaan tidak mengajukan keberatan, PMK 118/2024 juga menyediakan permohonan pengurangan SPPT yang tidak benar (Pasal 21 huruf b dan Pasal 32 ayat (2) huruf a); jalur itu tidak ada di opsi.",
        jejakHitung: [
          ["PBB menurut SPPT: (2.510 ha × Rp45.000.000 + Rp7.050.000.000 − Rp12.000.000) × 40% × 0,5%", "Rp239.976.000"],
          ["NJOP areal produktif yang benar: 2.150 ha × Rp45.000.000", "Rp96.750.000.000"],
          ["+ NJOP areal lain dan bangunan", "Rp7.050.000.000"],
          ["NJOP − NJOPTKP Rp12.000.000", "Rp103.788.000.000"],
          ["NJKP 40%", "Rp41.515.200.000"],
          ["Selisih dengan SPPT: 360 ha × Rp45.000.000 × 40% × 0,5% (NJOPTKP saling hapus)", "Rp32.400.000"],
          ["PBB menurut penghitungan perusahaan dalam surat keberatan: 0,5% × NJKP", "Rp207.576.000"]
        ],
        mengapaSalah: {
          A: "Angkanya benar, tetapi jalurnya tidak: menurut Pasal 2 ayat (2) PMK 118/2024 kesalahan tulis hanya meliputi kesalahan penulisan identitas dan sejenisnya yang tidak memengaruhi jumlah pajak terutang. Luas areal yang salah mengubah PBB, dan bukan pula kesalahan hitung (ayat (3)) atau kekeliruan penerapan ketentuan yang didaftar di ayat (4).",
          B: "Jalurnya benar, tetapi pengajuan keberatan tidak menunda kewajiban membayar pajak (Pasal 15 ayat (6) UU PBB; Pasal 10 ayat (4) PMK 118/2024). SPPT yang tidak dibayar pada jatuh tempo dikenai denda.",
          D: "Angka Rp32.400.000 memang selisih PBB (360 ha × Rp45.000.000 × 40% × 0,5%; NJOPTKP saling hapus), tetapi pengurangan Pasal 19 UU PBB adalah keringanan dari Menteri Keuangan karena kondisi tertentu objek yang berhubungan dengan subjek, sebab tertentu lainnya, atau bencana alam dan sebab luar biasa, bukan jalur mengoreksi luas yang salah."
        },
        jebakan: "Menyebut salah luas sebagai kesalahan tulis yang cukup dibetulkan, padahal kesalahan tulis dibatasi pada yang tidak memengaruhi jumlah pajak; atau mengira keberatan menunda pembayaran SPPT."
      },
      dasarHukum: [{ pasal: "Pasal 6 dan 7 UU PBB s.t.d.d. UU 12/1994", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 ayat (1), (3), dan (6) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (2) sampai (4), Pasal 9, Pasal 10 ayat (2) dan (4), Pasal 21 huruf b PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-108",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Agro Seruyan Jaya mempunyai dua objek PBB-P5L. PBB 2026 Objek I sebesar Rp185.000.000 dibayar tepat pada jatuh tempo, tetapi kode billing dibuat dengan NOP Objek II yang SPPT-nya sudah lunas. Akibatnya sistem mencatat SPPT Objek I belum dibayar, dan pada Oktober 2026 KPP menerbitkan STP PBB Objek I berisi denda Rp14.800.000 (2% × 4 bulan). Perusahaan belum membayar STP tersebut. Langkah yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan keberatan atas STP PBB paling lambat 3 bulan sejak STP diterima", B: "Mengajukan pemindahbukuan pembayaran ke NOP Objek I (tanggal pembayaran tetap tanggal setor semula), lalu mengajukan permohonan pembatalan STP PBB yang tidak benar", C: "Membayar denda Rp14.800.000 lebih dulu, kemudian mengajukan permohonan pengurangan denda administratif", D: "Mengajukan pengurangan PBB Pasal 19 sebesar denda yang tercantum dalam STP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak Objek I sebenarnya dibayar tepat waktu, tetapi tercatat pada NOP lain. Setelah pemindahbukuan (tanggal bayar mengikuti setoran semula), tidak ada keterlambatan sehingga STP PBB yang memuat denda menjadi tidak benar dan dapat dimohonkan pembatalannya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "STP bukan objek keberatan PBB.",
          C: "Pengurangan denda hanya atas denda yang belum dibayar; lagi pula di sini dendanya tidak seharusnya ada, sehingga yang tepat pembatalan STP.",
          D: "Pengurangan PBB Pasal 19 mensyaratkan kondisi tertentu objek yang berhubungan dengan subjek atau objek terkena bencana alam/sebab lain yang luar biasa; salah NOP pada pembayaran bukan alasan pengurangan, dan dendanya sendiri tidak seharusnya ada, sehingga jalurnya pemindahbukuan lalu pembatalan STP."
        },
        jebakan: "Membayar denda lebih dulu sehingga kehilangan kesempatan meminta pengurangan, atau memilih keberatan atas STP."
      },
      dasarHukum: [{ pasal: "Pasal 21 huruf c dan Pasal 22 ayat (4) PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 109 ayat (1) huruf d dan ayat (2) serta Pasal 111 ayat (2) PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-109",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-10",
      stem: "Data untuk soal V-B8-10: PT Gula Ogan Manis memegang HGU kebun tebu di Kabupaten Ogan Komering Ilir (Provinsi Sumatera Selatan), terdaftar di KPP di Kota Palembang, dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif (tebu yang sudah ditanam, termasuk yang sedang dipanen untuk giling) 4.800 ha dengan nilai tanah Rp3.500/m² dan SIT tebu Rp2.900/m²; areal belum produktif (lahan yang sudah diolah tetapi belum ditanami bibit tebu) 900 ha dengan nilai tanah Rp3.500/m²; areal emplasemen (pabrik gula, gudang, perumahan) 60 ha dengan nilai Rp12.000/m²; areal tidak produktif (rawa) 240 ha dengan nilai Rp800/m²; NJOP bangunan (pabrik gula, gudang gula, perumahan karyawan, jalan kebun) Rp185.000.000.000. Pabrik gula berada di dalam areal HGU dan dijalankan berdasarkan izin usaha perkebunan yang sama dengan kebunnya (bukan areal yang diberi Izin Usaha Perkebunan untuk Pengolahan tersendiri). Perusahaan juga membina kebun tebu rakyat seluas 1.500 ha di luar HGU yang bersertifikat hak milik atas nama masing-masing petani mitra dan terdaftar sebagai objek PBB-P2 kabupaten (NJOP seluruhnya Rp52.500.000.000). PBB-P5L terutang PT Gula Ogan Manis Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.117.816.000", B: "Rp1.170.616.000", C: "Rp1.065.616.000", D: "Rp695.616.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Areal Produktif, yaitu areal yang telah ditanami, dinilai nilai tanah ditambah SIT (Biaya Investasi Tanaman); areal belum produktif (belum ditanami), emplasemen, dan rawa hanya nilai tanah (Pasal 14 PMK 186/2019). Pabrik gula dan perumahan di emplasemen kebun adalah bangunan objek PBB-P5L karena arealnya tidak diberi Izin Usaha Perkebunan-Pengolahan tersendiri (Pasal 3 ayat (3)), sedangkan kebun tebu rakyat milik petani di luar HGU tidak dikenakan PBB sektor perkebunan (Pasal 3 ayat (6)) dan menjadi objek PBB-P2 atas nama petani. PBB = 0,5% × 40% × (NJOP − Rp12.000.000).",
        jejakHitung: [
          ["Produktif 48.000.000 m² × (3.500 + 2.900)", "Rp307.200.000.000"],
          ["Belum produktif 9.000.000 m² × 3.500", "Rp31.500.000.000"],
          ["Emplasemen 600.000 m² × 12.000", "Rp7.200.000.000"],
          ["Rawa 2.400.000 m² × 800", "Rp1.920.000.000"],
          ["NJOP bumi", "Rp347.820.000.000"],
          ["+ NJOP bangunan", "Rp532.820.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp532.808.000.000"],
          ["NJKP 40%", "Rp213.123.200.000"],
          ["PBB 0,5%", "Rp1.065.616.000"]
        ],
        mengapaSalah: {
          A: "SIT tebu ikut dikenakan pada 900 ha lahan yang belum ditanami (+9.000.000 m² × Rp2.900 = Rp26.100.000.000 NJOP).",
          B: "NJOP kebun tebu rakyat Rp52.500.000.000 ikut dijumlahkan, padahal tanah itu hak milik petani di luar HGU sehingga tidak dikenakan PBB sektor perkebunan (Pasal 3 ayat (6) PMK 186/2019) dan sudah menjadi objek PBB-P2 atas nama petani.",
          D: "NJOP bangunan pabrik gula dan perumahan dikeluarkan karena dikira objek PBB-P2 industri, padahal pabrik itu berada di HGU tanpa Izin Usaha Perkebunan-Pengolahan tersendiri sehingga tetap bagian kawasan perkebunan (Pasal 3 ayat (3) PMK 186/2019)."
        },
        jebakan: "Data kebun rakyat mitra dan pabrik gula sengaja disertakan untuk menguji batas objek. Bila areal pabrik sudah diberi Izin Usaha Perkebunan-Pengolahan tersendiri, areal itu bukan kawasan perkebunan (Pasal 3 ayat (3) PMK 186/2019). SIT hanya untuk areal yang telah ditanami."
      },
      dasarHukum: [{ pasal: "Pasal 1, 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 3 ayat (2), (3), (6) dan Pasal 14 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 38 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-110",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-10",
      kutipan: "Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan sebesar 100% untuk daerah, dengan rincian 16,2% untuk provinsi yang bersangkutan, 73,8% untuk kabupaten/kota penghasil, dan 10% untuk kabupaten/kota lainnya dalam provinsi yang bersangkutan. Pasal 18 ayat (1) UU PBB (parafrase): hasil penerimaan PBB dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan sekurang-kurangnya 90% untuk Pemerintah Daerah.",
      stem: "Lanjutan data V-B8-10: PT Gula Ogan Manis melunasi PBB-P5L 2026 kebun tebu di Kabupaten Ogan Komering Ilir (Provinsi Sumatera Selatan) sebesar Rp1.065.616.000. Porsi kabupaten penghasil sudah dihitung oleh Kabupaten Ogan Komering Ilir. Seorang staf Badan Keuangan Daerah Provinsi Sumatera Selatan kini menyusun proyeksi untuk provinsi dan berpendapat bahwa porsi 10% juga masuk kas provinsi untuk kemudian dibagikan menurut kebijakan gubernur, sehingga pendapatan DBH PBB provinsi menjadi 26,2%. Abaikan waktu dan mekanisme penyaluran. Berdasarkan kutipan tersebut, porsi DBH PBB dari pembayaran itu yang menjadi hak Provinsi Sumatera Selatan sendiri dan perlakuan porsi 10% adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Provinsi Rp172.629.792; Rp106.561.600 menjadi hak kabupaten/kota lainnya dalam Provinsi Sumatera Selatan, bukan pendapatan provinsi", B: "Provinsi Rp279.191.392 (16,2% + 10%); porsi 10% dibagikan kemudian oleh provinsi menurut kebijakan gubernur", C: "Provinsi Rp106.561.600; Rp172.629.792 menjadi hak kabupaten/kota lainnya dalam Provinsi Sumatera Selatan", D: "Provinsi Rp172.629.792; Rp106.561.600 tetap menjadi penerimaan Pemerintah Pusat sesuai imbangan sekurang-kurangnya 90% untuk daerah" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Pasal 113 ayat (2) UU 1/2022 (diulang Pasal 16 PMK 35/2026) membagi seluruh DBH PBB (100%) untuk daerah, langsung kepada tiga kelompok penerima: provinsi 16,2%, kabupaten/kota penghasil 73,8%, dan kabupaten/kota lainnya dalam provinsi 10%. Porsi 10% adalah hak kabupaten/kota lainnya, bukan pendapatan provinsi yang dibagikan menurut kebijakan gubernur, dan tidak ada lagi bagian pusat. Dalam alokasi nyata, 90% dibagi menurut persentase ini dan 10% menurut kinerja pemerintah daerah (Pasal 17 PMK 35/2026); soal meminta pembagian menurut kutipan.",
        jejakHitung: [
          ["Sumber DBH PBB (PBB-P5L)", "Rp1.065.616.000"],
          ["Provinsi 16,2% × 1.065.616.000", "Rp172.629.792"],
          ["Kabupaten/kota lainnya 10% × 1.065.616.000", "Rp106.561.600"],
          ["Kabupaten penghasil 73,8% (sudah dihitung kabupaten)", "Rp786.424.608"],
          ["Jumlah (100% untuk daerah)", "Rp1.065.616.000"]
        ],
        mengapaSalah: {
          B: "Mengikuti pendapat staf: porsi 10% dimasukkan ke pendapatan provinsi (26,2%), padahal Pasal 113 ayat (2) huruf c menyebut 10% itu untuk kabupaten/kota lainnya, bukan untuk provinsi.",
          C: "Persentase provinsi dan kabupaten/kota lainnya tertukar; provinsi 16,2%, kabupaten/kota lainnya 10%.",
          D: "Memakai pola imbangan Pasal 18 ayat (1) UU PBB (daerah sekurang-kurangnya 90%) sehingga 10% dianggap tersisa di pusat; menurut Pasal 113 ayat (1) UU 1/2022 seluruh DBH PBB untuk daerah."
        },
        jebakan: "Angka 10% bukan bagian pusat dan bukan tambahan bagi provinsi; dalam rincian 16,2/73,8/10 ia milik kabupaten/kota lainnya dalam provinsi. Jangan tertukar dengan 10% bobot kinerja dalam Pasal 17 PMK 35/2026, yang merupakan cara menghitung alokasi, bukan kelompok penerima."
      },
      dasarHukum: [{ pasal: "Pasal 113 UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 angka 27, Pasal 16, dan Pasal 17 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-111",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kasusId: "V-B8-10",
      stem: "Lanjutan data V-B8-10: SPPT PBB-P5L 2026 PT Gula Ogan Manis sebesar Rp1.065.616.000 diterbitkan pada 27 Februari 2026 dan diterima perusahaan pada 16 Maret 2026. Karena menunggu pencairan kredit modal kerja musim giling, PBB baru dilunasi seluruhnya pada 22 Oktober 2026. KPP kemudian menerbitkan STP PBB yang diterima perusahaan pada 30 Oktober 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi dalam STP dan batas pelunasan STP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp21.312.320; paling lambat 29 November 2026", B: "Rp42.624.640; paling lambat 29 November 2026", C: "Rp42.624.640; paling lambat 29 April 2027", D: "Rp266.404.000; paling lambat 29 November 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPPT jatuh tempo 6 bulan sejak diterima (15 September 2026). Pelunasan 22 Oktober 2026 terlambat 1 bulan 7 hari, dihitung 2 bulan, sehingga denda 2 × 2% dari pokok. STP PBB harus dilunasi paling lambat 1 bulan sejak diterima.",
        jejakHitung: [
          ["Jatuh tempo SPPT: 6 bulan sejak 16 Maret 2026", "15 September 2026"],
          ["15 September s.d. 22 Oktober 2026", "1 bulan 7 hari → 2 bulan"],
          ["Denda 2 × 2% × 1.065.616.000", "Rp42.624.640"],
          ["Jatuh tempo STP: 1 bulan sejak 30 Oktober 2026", "29 November 2026"]
        ],
        mengapaSalah: {
          A: "Sisa 7 hari diabaikan sehingga keterlambatan dihitung 1 bulan, padahal soal menetapkan bagian bulan dihitung penuh.",
          C: "Jangka 6 bulan milik SPPT diterapkan pada STP; STP (dan SKP) PBB jatuh tempo 1 bulan sejak diterima.",
          D: "Memakai denda 25% milik SKP PBB (Pasal 10 ayat (3)), padahal keterlambatan bayar SPPT dikenai 2% sebulan."
        },
        jebakan: "Dua tenggat berbeda dalam satu soal: SPPT 6 bulan, STP 1 bulan, keduanya dihitung sejak tanggal diterima."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-112",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Hutan Tanaman Tebo Lestari memegang perizinan berusaha pemanfaatan hutan tanaman (eukaliptus) di Kabupaten Tebo dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal produktif (telah ditanami, termasuk tanaman siap tebang) 8.400 ha dengan nilai tanah Rp1.600/m² dan SIT hutan tanaman Rp2.200/m², termasuk 2.000 ha yang ditebang pada Maret 2026; areal belum produktif (bekas tebangan dan lahan yang belum ditanami) 5.600 ha dengan nilai tanah Rp1.600/m², termasuk 1.500 ha yang ditebang pada September 2025 dan baru ditanami ulang pada Februari 2026 (dalam SPPT 2025 masih tercatat produktif); areal emplasemen/base camp 25 ha dengan nilai Rp7.000/m²; NJOP bangunan (kantor lapangan, mess, jalan angkut, jembatan) Rp7.400.000.000. Pada 15 April 2026 perusahaan memperoleh persetujuan perluasan areal 800 ha dengan nilai tanah Rp1.600/m². Dengan pola penilaian hutan tanaman (SIT hanya pada areal produktif), PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp747.876.000", B: "Rp861.476.000", C: "Rp901.876.000", D: "Rp835.876.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "PBB ditetapkan menurut keadaan objek pada 1 Januari 2026 (Pasal 8 ayat (2) UU PBB). Pada hutan tanaman, areal yang telah ditanami adalah areal produktif (tanah ditambah SIT/Biaya Investasi Tanaman) dan areal yang belum ditanami adalah areal belum produktif (Pasal 15 ayat (1) huruf a angka 2 dan huruf b angka 2 PMK 186/2019). Blok yang baru ditebang Maret 2026 masih areal produktif; blok yang ditebang September 2025 dan pada 1 Januari 2026 belum ditanami ulang sudah areal belum produktif; perluasan April 2026 baru menjadi objek Tahun Pajak 2027.",
        jejakHitung: [
          ["Produktif 84.000.000 m² × (1.600 + 2.200)", "Rp319.200.000.000"],
          ["Belum produktif 56.000.000 m² × 1.600", "Rp89.600.000.000"],
          ["Emplasemen 250.000 m² × 7.000", "Rp1.750.000.000"],
          ["NJOP bumi", "Rp410.550.000.000"],
          ["+ NJOP bangunan", "Rp417.950.000.000"],
          ["− NJOPTKP", "Rp417.938.000.000"],
          ["× 40% × 0,5%", "Rp835.876.000"]
        ],
        mengapaSalah: {
          A: "Blok 2.000 ha yang ditebang Maret 2026 diperlakukan sebagai belum produktif (SIT Rp44.000.000.000 hilang), padahal penebangan terjadi setelah 1 Januari.",
          B: "Perluasan 800 ha yang disetujui 15 April 2026 ikut dihitung (+Rp12.800.000.000 NJOP), padahal belum ada pada 1 Januari 2026.",
          C: "Blok 1.500 ha yang pada 1 Januari 2026 belum ditanami ulang tetap diberi SIT mengikuti status SPPT 2025 (+Rp33.000.000.000 NJOP)."
        },
        jebakan: "Tiga peristiwa di sekitar 1 Januari (tebang September 2025 yang baru ditanami ulang Februari 2026, tebang Maret 2026, perluasan April 2026) diuji sekaligus; patokannya hanya keadaan 1 Januari 2026: sudah atau belum ditanami pada tanggal itu."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 15 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-113",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kutai Pesisir Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi yang wilayah kerjanya meliputi daratan di Kabupaten Kutai Kartanegara dan perairan lepas pantai (offshore) di Selat Makassar; DJP mengadministrasikannya sebagai satu objek PBB-P5L sektor migas dan perusahaan tidak memiliki objek lain. Data penilaian per 1 Januari 2026: permukaan bumi onshore areal produktif (tapak sumur, stasiun pengumpul) 140 ha dengan nilai Rp30.000/m²; permukaan bumi onshore areal lainnya 22.000 ha yang lahannya sudah dibebaskan dan dimanfaatkan perusahaan untuk kegiatan usaha migas (jalan akses, areal penyangga, dan lokasi cadangan pengeboran) dengan nilai Rp900/m²; areal perairan offshore 35.000 ha dengan nilai Rp60/m²; NJOP tubuh bumi hasil penilaian DJP Rp1.420.000.000.000; bangunan onshore (stasiun pengumpul, tangki timbun berpondasi, pipa darat) Rp380.000.000.000; bangunan offshore (anjungan yang dipancang ke dasar laut dan pipa bawah laut) Rp710.000.000.000. Peristiwa lain: (1) areal onshore 5.000 ha (nilai Rp900/m²) telah dikembalikan kepada negara dan dikeluarkan dari wilayah kerja efektif 1 November 2025, tetapi masih tercantum dalam SPPT 2025, dan tidak termasuk dalam angka 22.000 ha di atas; (2) 8.000 ha dari areal perairan offshore 35.000 ha dikembalikan kepada negara efektif 1 Maret 2026; (3) anjungan baru senilai Rp240.000.000.000 selesai dipancang dan mulai berproduksi pada 20 Februari 2026. Manajer pajak berpendapat areal yang dikembalikan pada Maret 2026 tidak perlu dihitung karena sudah tidak dikuasai ketika SPPT 2026 terbit. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.532.376.000", B: "Rp6.021.976.000", C: "Rp5.631.976.000", D: "Rp5.541.976.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Pajak terutang ditentukan menurut keadaan objek pada 1 Januari 2026 (Pasal 8 ayat (2) UU PBB). Areal yang sudah keluar dari wilayah kerja sejak 1 November 2025 tidak lagi menjadi objek perusahaan, areal offshore yang baru dikembalikan pada 1 Maret 2026 tetap dihitung penuh untuk 2026, dan anjungan yang baru ada pada 20 Februari 2026 baru menjadi objek Tahun Pajak 2027. Bagian onshore dan offshore tetap satu objek sektor migas dengan NJKP 40%.",
        jejakHitung: [
          ["Onshore produktif 1.400.000 m² × 30.000", "Rp42.000.000.000"],
          ["Onshore lainnya 220.000.000 m² × 900 (5.000 ha yang keluar November 2025 tidak dihitung)", "Rp198.000.000.000"],
          ["Perairan offshore 350.000.000 m² × 60 (termasuk 8.000 ha yang dikembalikan Maret 2026)", "Rp21.000.000.000"],
          ["Tubuh bumi", "Rp1.420.000.000.000"],
          ["Bangunan onshore 380.000.000.000 + offshore 710.000.000.000 (anjungan baru Februari 2026 belum dihitung)", "Rp1.090.000.000.000"],
          ["NJOP objek", "Rp2.771.000.000.000"],
          ["(2.771.000.000.000 − 12.000.000) × 40% × 0,5%", "Rp5.541.976.000"]
        ],
        mengapaSalah: {
          A: "Mengikuti pendapat manajer pajak: 8.000 ha offshore (Rp4.800.000.000) dikeluarkan, padahal pada 1 Januari 2026 areal itu masih bagian wilayah kerja; tanggal terbit SPPT tidak menentukan.",
          B: "Anjungan baru Rp240.000.000.000 ikut dihitung, padahal baru ada pada 20 Februari 2026, setelah tanggal keadaan objek 1 Januari 2026.",
          C: "Areal 5.000 ha (Rp45.000.000.000) tetap dihitung mengikuti SPPT 2025, padahal sejak 1 November 2025 areal itu sudah bukan bagian wilayah kerja."
        },
        jebakan: "Tiga peristiwa di sekitar 1 Januari (pengembalian areal November 2025, pengembalian areal Maret 2026, anjungan baru Februari 2026) diuji sekaligus; patokannya hanya keadaan objek pada 1 Januari 2026, bukan SPPT tahun lalu atau tanggal terbit SPPT."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 5 dan Pasal 17 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-114",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Interkoneksi Selat Nusantara memiliki kabel listrik bawah laut antarpulau yang dipasang pada 2008 dan diadministrasikan sebagai objek PBB-P5L sektor lainnya; perusahaan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 NJOP bumi (koridor perairan yang digunakan kabel) Rp210.000.000 dan NJOP bangunan (kabel lama setelah penyusutan) Rp640.000.000. Kabel pengganti senilai Rp2.350.000.000 selesai dipasang dalam koridor yang sama dan beroperasi sejak 18 Maret 2026, sedangkan kabel lama dicabut pada Juni 2026. SPPT 2026 diterbitkan pada April 2026. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.376.000", B: "Rp838.000", C: "Rp5.096.000", D: "Rp1.676.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keadaan 1 Januari 2026 hanya memuat koridor perairan dan kabel lama: NJOP Rp850.000.000 < Rp1.000.000.000, sehingga sebagai objek sektor lainnya NJKP-nya 20%. Kabel pengganti baru menjadi objek Tahun Pajak 2027, dan pencabutan kabel lama pada Juni 2026 tidak mengurangi PBB 2026.",
        jejakHitung: [
          ["NJOP objek per 1 Januari 2026: 210.000.000 + 640.000.000", "Rp850.000.000"],
          ["NJOP < Rp1.000.000.000 → NJKP", "20%"],
          ["NJOP − NJOPTKP", "Rp838.000.000"],
          ["838.000.000 × 20% × 0,5%", "Rp838.000"]
        ],
        mengapaSalah: {
          A: "Kabel pengganti ikut dihitung (NJOP Rp3.200.000.000, NJKP 40%), padahal baru ada setelah 1 Januari 2026.",
          C: "Kabel lama diganti nilai kabel baru mengikuti keadaan saat SPPT terbit (NJOP Rp2.560.000.000, NJKP 40%).",
          D: "Memakai NJKP 40% seperti sektor perkebunan, perhutanan, dan pertambangan, padahal NJOP objek sektor lainnya ini di bawah Rp1 miliar."
        },
        jebakan: "Penggantian aset di tengah tahun menggoda untuk memakai keadaan terbaru; patokan PBB adalah 1 Januari, dan batas Rp1 miliar menentukan NJKP sektor lainnya."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8 ayat (1) huruf d, dan Pasal 9 ayat (2) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-115",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf a UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB adalah objek yang digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan, dan kebudayaan nasional, yang tidak dimaksudkan untuk memperoleh keuntungan.",
      stem: "PT Nikel Teluk Weda Perkasa (IUP operasi produksi nikel; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian per 1 Januari 2026: areal produktif (pit, stockpile, jalan tambang) 120 ha dengan nilai Rp25.000/m²; areal emplasemen 40 ha dengan nilai Rp60.000/m²; areal lainnya dalam wilayah IUP 15.000 ha yang lahannya sudah dibebaskan dan dimanfaatkan perusahaan untuk kegiatan penambangan (jalan angkut, areal penyangga, dan lahan cadangan) dengan nilai Rp800/m²; NJOP tubuh bumi Rp640.000.000.000; dan NJOP seluruh bangunan Rp286.000.000.000. Di dalam emplasemen terdapat: (1) masjid yang terbuka untuk umum dan dikelola nirlaba (lahan 0,5 ha, bangunan Rp3.000.000.000); (2) sekolah dasar umum yang dikelola yayasan pendidikan nirlaba secara cuma-cuma di atas lahan milik perusahaan (lahan 0,3 ha, bangunan Rp1.200.000.000); (3) klinik perusahaan yang melayani karyawan dan keluarganya secara gratis tetapi tertutup bagi masyarakat (lahan 1,2 ha, bangunan Rp6.800.000.000). Berdasarkan kutipan tersebut, PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.175.576.000", B: "Rp2.193.376.000", C: "Rp2.190.616.000", D: "Rp2.199.976.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Masjid umum nirlaba dan SD umum nirlaba memenuhi Pasal 3 ayat (1) huruf a karena penggunaannya untuk kepentingan umum tanpa mencari keuntungan, walaupun lahannya milik perusahaan; lahan dan bangunannya dikeluarkan. Klinik yang gratis tetapi khusus karyawan adalah fasilitas perusahaan, bukan pelayanan kepentingan umum, sehingga tetap objek.",
        jejakHitung: [
          ["Areal produktif 1.200.000 m² × 25.000", "Rp30.000.000.000"],
          ["Emplasemen (400.000 − 5.000 − 3.000) m² × 60.000", "Rp23.520.000.000"],
          ["Areal lainnya 150.000.000 m² × 800", "Rp120.000.000.000"],
          ["Tubuh bumi", "Rp640.000.000.000"],
          ["Bangunan 286.000.000.000 − 3.000.000.000 − 1.200.000.000", "Rp281.800.000.000"],
          ["NJOP objek", "Rp1.095.320.000.000"],
          ["(1.095.320.000.000 − 12.000.000) × 40% × 0,5%", "Rp2.190.616.000"]
        ],
        mengapaSalah: {
          A: "Klinik khusus karyawan ikut dikecualikan karena gratis, padahal tidak melayani kepentingan umum (lahan Rp720.000.000 dan bangunan Rp6.800.000.000 tetap objek).",
          B: "Hanya masjid yang dikecualikan; SD dianggap tetap objek karena lahannya milik perusahaan, padahal ukuran pengecualian adalah penggunaannya.",
          D: "Tidak ada yang dikecualikan sama sekali; masjid dan SD umum nirlaba memenuhi Pasal 3 ayat (1) huruf a."
        },
        jebakan: "Kata 'gratis' pada klinik bukan syarat cukup; pengecualian menuntut pelayanan kepentingan umum dan tidak mencari keuntungan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-116",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 11 UU PBB (parafrase): Pajak yang terutang berdasarkan SPPT harus dilunasi selambat-lambatnya 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak. Pajak yang terutang yang pada saat jatuh tempo pembayaran tidak dibayar atau kurang dibayar dikenakan denda administrasi sebesar 2% sebulan, untuk jangka waktu paling lama 24 bulan.",
      stem: "PT Bara Sungai Kayan (IUP batubara di Kabupaten Bulungan) mempunyai dua objek PBB-P5L dengan NOP dan SPPT terpisah. Kedua SPPT Tahun Pajak 2026 diterbitkan pada 2 Maret 2026. SPPT Blok Utara sebesar Rp612.000.000 baru diterima pada 30 April 2026 karena lokasi kantor tambang terpencil, sedangkan SPPT Blok Selatan sebesar Rp248.000.000 diterima pada 9 Maret 2026. Kedua SPPT dilunasi pada 15 Oktober 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Berdasarkan kutipan tersebut, jumlah denda administrasi PBB-P5L 2026 yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp34.400.000", B: "Rp4.960.000", C: "Rp95.920.000", D: "Rp9.920.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo dihitung per SPPT sejak tanggal diterima. Blok Utara jatuh tempo 29 Oktober 2026 sehingga pelunasan 15 Oktober tepat waktu; Blok Selatan jatuh tempo 8 September 2026 sehingga terlambat 1 bulan 7 hari, dihitung 2 bulan.",
        jejakHitung: [
          ["Blok Utara: 6 bulan sejak 30 April 2026", "29 Oktober 2026 → tepat waktu"],
          ["Blok Selatan: 6 bulan sejak 9 Maret 2026", "8 September 2026"],
          ["8 September s.d. 15 Oktober 2026", "1 bulan 7 hari → 2 bulan"],
          ["Denda 2 × 2% × 248.000.000", "Rp9.920.000"]
        ],
        mengapaSalah: {
          A: "Jatuh tempo dihitung dari tanggal terbit (1 September 2026) untuk kedua SPPT, sehingga keduanya dianggap terlambat 2 bulan (4% × Rp860.000.000).",
          B: "Sisa 7 hari diabaikan sehingga Blok Selatan dianggap terlambat 1 bulan.",
          C: "Memakai jatuh tempo 1 bulan milik SKP/STP untuk SPPT (Blok Utara 5 bulan, Blok Selatan 7 bulan)."
        },
        jebakan: "SPPT yang terlambat sampai ke wajib pajak mempunyai jatuh tempo sendiri; tanggal terbit tidak relevan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "B8-117",
      topik: "B8.6",
      tingkat: [ "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "UU PBB Pasal 20 (dikutip try out): Atas permintaan wajib pajak Direktur Jenderal Pajak dapat mengurangkan denda administrasi karena hal-hal tertentu.",
      stem: "PT Ortax Agro Lestari menerima SPPT PBB-P5L sektor perkebunan Tahun Pajak 2026 dengan PBB terutang Rp120.000.000 dan tidak mempersoalkan jumlahnya. Karena gangguan sistem pada bank persepsi di luar kendali perusahaan, pelunasan baru terlaksana 2 bulan setelah jatuh tempo, sehingga KPP menerbitkan STP PBB berisi denda administrasi Rp4.800.000. Pokok PBB telah lunas dan perusahaan tidak mengalami kesulitan keuangan. Upaya yang tepat diajukan PT Ortax Agro Lestari adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pengurangan PBB karena kondisi tertentu objek pajak", B: "Keberatan atas SPPT PBB Tahun Pajak 2026", C: "Pengurangan denda administrasi PBB", D: "Pengurangan atau pembatalan SPPT yang tidak benar" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang dipersoalkan bukan pokok PBB, melainkan denda administrasi 2% sebulan karena keterlambatan pembayaran (2% × 2 bulan × Rp120.000.000 = Rp4.800.000). Atas permintaan wajib pajak, Direktur Jenderal Pajak dapat mengurangkan denda administrasi karena hal-hal tertentu, termasuk bila sanksi dikenakan bukan karena kesalahan wajib pajak (UU PBB Ps. 20). Syarat bahwa pokok PBB yang menjadi dasar denda telah dilunasi juga terpenuhi.",
        jejakHitung: [],
        mengapaSalah: { A: "Pengurangan PBB karena kondisi tertentu mensyaratkan kerugian komersial dan kesulitan likuiditas 2 tahun berturut-turut, yang tidak dialami perusahaan.", B: "Keberatan diajukan atas jumlah PBB dalam SPPT yang disengketakan, padahal jumlahnya tidak dipersoalkan.", D: "SPPT tersebut benar, sehingga tidak ada SPPT yang perlu dikurangkan atau dibatalkan." },
        jebakan: "Pola: pokok benar dan lunas, denda timbul bukan karena kesalahan WP → pengurangan denda administrasi (UU PBB Ps. 20)."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (3) dan Pasal 20", berlakuSejak: null },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 21 huruf a, Pasal 21A huruf e, Pasal 23 ayat (5) huruf a", berlakuSejak: null }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 8, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-118",
      topik: "B8.5",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Untuk Tahun Pajak 2026, PT Ortax Tambang tidak mengembalikan SPOP atas objek barunya meskipun telah ditegur secara tertulis, sehingga DJP menerbitkan SKP PBB dengan pokok Rp40.000.000. Untuk objek lain, PBB menurut SPPT Rp40.000.000 dilunasi tepat 3 bulan setelah jatuh tempo sehingga diterbitkan STP PBB atas dendanya. Jumlah dalam kedua ketetapan/tagihan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKP Rp40.000.000,00 tanpa denda; STP denda Rp10.000.000,00 (25% dari pokok)", B: "SKP Rp42.400.000,00 (pokok ditambah 2% × 3 bulan); STP denda Rp2.400.000,00 (2% × 3 bulan)", C: "SKP Rp50.000.000,00 (pokok + denda 25%); STP denda Rp2.400.000,00 (2% × 3 bulan)", D: "SKP Rp50.000.000,00 (pokok + 25%); STP denda Rp800.000,00 (2% satu kali)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Bila SPOP tidak disampaikan dan setelah ditegur secara tertulis tetap tidak disampaikan, DJP menerbitkan SKP PBB berisi pokok pajak ditambah denda administrasi 25% dari pokok (UU PBB Ps. 10 ayat (2) huruf a dan ayat (3)). PBB yang pada saat jatuh tempo tidak atau kurang dibayar dikenai denda administrasi 2% sebulan dari jatuh tempo sampai hari pembayaran, paling lama 24 bulan, dan ditagih dengan STP (Ps. 11 ayat (3)–(4)). Keduanya denda tetap menurut UU PBB, bukan bunga berbasis tarif KMK dalam UU KUP.",
        jejakHitung: [ [ "SKP PBB = Rp40.000.000 + 25% × Rp40.000.000", "Rp50.000.000" ], [ "STP PBB = 2% × 3 × Rp40.000.000", "Rp2.400.000" ] ],
        mengapaSalah: { A: "Denda 25% melekat pada SKP PBB karena SPOP tidak dikembalikan, sedangkan STP keterlambatan bayar memakai 2% sebulan.", B: "Denda dalam SKP PBB karena SPOP tidak dikembalikan adalah 25% dari pokok, bukan 2% sebulan.", D: "Denda keterlambatan PBB dihitung 2% per bulan selama 3 bulan, bukan 2% satu kali." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 12/1985 s.t.d.d. UU 12/1994 Pasal 10 ayat (2) huruf a dan ayat (3)."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 10 ayat (2) huruf a dan ayat (3)", berlakuSejak: null },
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (3) dan (4)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 40, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-119",
      topik: "B8.6",
      tingkat: [ "B", "C" ],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Ortax Agro menerima STP PBB Tahun 2026 yang berisi pokok belum dibayar Rp20.000.000 dan denda administrasi Rp2.400.000. Pada 10 November 2026 ia membayar Rp20.000.000 tanpa menyebut peruntukannya, lalu mengajukan permohonan pengurangan denda administrasi. Analisis pemenuhan syarat pelunasan untuk permohonannya berdasarkan PMK 118/2024 s.t.d.d. PMK 71/2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak memenuhi syarat karena pembayaran dialokasikan proporsional ke pokok dan denda sehingga pokok belum lunas", B: "Tidak memenuhi syarat karena seluruh STP, termasuk denda, harus lunas sebelum permohonan diajukan", C: "Memenuhi syarat tanpa perlu membayar apa pun karena permohonan menunda kewajiban membayar", D: "Memenuhi syarat karena pembayaran dialokasikan lebih dulu ke pokok sehingga pokok telah lunas" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak PMK 118/2024, permohonan pengurangan denda administrasi PBB mensyaratkan jumlah pokok PBB yang menjadi dasar denda dalam STP PBB telah dilunasi (Ps. 23 ayat (5) huruf a). PMK 71/2026 (berlaku sejak diundangkan 2 Oktober 2026) mengubah Ps. 23 ayat (6)–(7): pembayaran atas STP PBB diperhitungkan terlebih dahulu terhadap pokok, dan kelebihannya baru terhadap denda. Pembayaran Rp20.000.000 pada 10 November 2026 melunasi seluruh pokok, sehingga syarat terpenuhi.",
        jejakHitung: [],
        mengapaSalah: { A: "Setelah PMK 71/2026, pembayaran STP PBB dialokasikan lebih dulu ke pokok, bukan proporsional.", B: "Syaratnya hanya pokok yang menjadi dasar denda telah lunas; denda yang dimohonkan pengurangan tidak harus dilunasi.", C: "Permohonan tidak menunda kewajiban; pelunasan pokok adalah syarat permohonan." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 12/1985 s.t.d.d. UU 12/1994 Pasal 20."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 20", berlakuSejak: null },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 21 huruf a, Pasal 23 ayat (5) huruf a, ayat (6), dan ayat (7)", berlakuSejak: "2026-10-02" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 50, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-120",
      topik: "B8.6",
      tingkat: [ "B", "C" ],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Tuan Budi menerima SPPT PBB sektor perkebunan Tahun 2026 pada 9 Maret 2026 dan belum melunasinya. Pada Agustus 2026 objek pajaknya terdampak banjir bandang yang termasuk bencana alam. Batas akhir pengajuan permohonan pengurangan PBB karena bencana tersebut dan besaran pengurangan paling tinggi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "31 Desember 2026; paling tinggi 100%", B: "9 Juni 2026; paling tinggi 75%", C: "9 Juni 2026; paling tinggi 100%", D: "8 September 2026; paling tinggi 100%" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengurangan PBB karena objek pajak terkena bencana alam diberikan paling tinggi 100% dari PBB yang belum dilunasi (PMK 129/2023 Pasal 4 ayat (3) huruf b). Permohonannya diajukan pada tahun terjadinya bencana alam atau sebab lain yang luar biasa (Pasal 5 ayat (5)). Banjir terjadi pada 2026, sehingga permohonan dapat diajukan paling lambat 31 Desember 2026.",
        jejakHitung: [],
        mengapaSalah: { B: "Memakai jangka 3 bulan sejak SPPT diterima (pola keberatan) dan besaran 75% yang bukan batas pengurangan karena bencana alam.", C: "Besarannya benar, tetapi jangka 3 bulan sejak SPPT diterima tidak berlaku; permohonan karena bencana diajukan dalam tahun terjadinya bencana.", D: "Memakai jangka 1 bulan sejak bencana, padahal permohonan dapat diajukan sampai akhir tahun terjadinya bencana." },
        jebakan: "Langkah: Jenis pengurangan: Objek terkena bencana alam (Ps. 3 ayat (1), Ps. 4 ayat (2)); Jangka pengajuan: Dalam tahun terjadinya bencana (2026) → paling lambat 31 Desember 2026 (Kamis); Besaran paling tinggi: 100% dari PBB yang belum dilunasi."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (1) dan Pasal 19 ayat (1) huruf b", berlakuSejak: null },
        { pasal: "PMK 129/2023 Pasal 3 ayat (1), Pasal 4 ayat (2) dan (3), Pasal 5 ayat (3) dan (5)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 57, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-121",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Tambang menerima SPPT PBB Tahun Pajak 2026 sebesar Rp50.000.000 pada 11 Februari 2026. Pada 4 Mei 2026 ia mengajukan keberatan atas SPPT tersebut (belum diputus) dan tidak membayar sampai jatuh tempo. Pada 12 Oktober 2026 KPP menerbitkan dan mengirim STP PBB yang memuat pokok dan denda administrasi; STP diterima pada hari yang sama. PT Ortax Tambang melunasi seluruh jumlah dalam STP tersebut pada 20 November 2026. Jumlah dalam STP PBB pertama dan STP PBB berikutnya (bila ada) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP pertama Rp52.000.000,00; STP berikutnya Rp2.000.000,00", B: "STP pertama Rp53.000.000,00; tidak ada STP berikutnya", C: "STP pertama Rp53.000.000,00; STP berikutnya Rp1.000.000,00", D: "STP pertama Rp53.000.000,00; STP berikutnya Rp1.060.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB), sehingga SPPT tetap jatuh tempo 6 bulan sejak diterima. PMK 80/2023 membedakan dua STP PBB (Pasal 29). STP pertama memuat pokok ditambah denda 2% sebulan (Pasal 11 ayat (3) UU PBB, bagian bulan dihitung penuh) yang dihitung sejak berakhirnya jatuh tempo SPPT sampai tanggal terbit STP (Pasal 30 ayat (2) PMK 80/2023). STP harus dilunasi 1 bulan sejak diterima. Karena pokok baru dilunasi setelah jatuh tempo STP, diterbitkan STP PBB yang hanya memuat denda atas pokok, dihitung sejak berakhirnya jatuh tempo STP sampai tanggal pembayaran pokok (Pasal 31 ayat (1) huruf b dan ayat (2) huruf b PMK 80/2023). Denda ini denda UU PBB, bukan sanksi bunga UU KUP berbasis tarif KMK.",
        jejakHitung: [
          ["Jatuh tempo SPPT = 6 bulan sejak 11 Februari 2026", "10 Agustus 2026"],
          ["11 Agustus s.d. 12 Oktober 2026 (tanggal terbit STP)", "2 bulan 2 hari → 3 bulan"],
          ["STP pertama = Rp50.000.000 + 3 × 2% × Rp50.000.000", "Rp53.000.000"],
          ["Jatuh tempo STP = 1 bulan sejak diterima 12 Oktober 2026", "11 November 2026"],
          ["12 November s.d. 20 November 2026 (pelunasan pokok)", "9 hari → 1 bulan"],
          ["STP berikutnya = 1 × 2% × Rp50.000.000", "Rp1.000.000"]
        ],
        mengapaSalah: {
          A: "Menghitung 2 bulan untuk STP pertama (bagian bulan tidak dibulatkan penuh) dan 2 bulan untuk STP berikutnya.",
          B: "Mengabaikan STP yang hanya memuat denda atas pelunasan pokok setelah jatuh tempo STP (Pasal 31 ayat (1) huruf b PMK 80/2023).",
          D: "Menghitung denda STP berikutnya atas jumlah STP pertama (pokok + denda), padahal dasarnya hanya pokok PBB yang dilunasi terlambat."
        },
        jebakan: "Denda dalam STP pertama berhenti pada tanggal terbit STP; masa antara terbit STP dan jatuh tempo STP tidak didenda, dan denda STP berikutnya baru dihitung sejak berakhirnya jatuh tempo STP. Total denda 4 bulan, di bawah batas 24 bulan."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (1), (3), dan (4) beserta Penjelasan, Pasal 15 ayat (6)", berlakuSejak: null }, { pasal: "PMK 80/2023 Pasal 29, Pasal 30 ayat (1)–(2), Pasal 31 ayat (1) huruf b dan ayat (2) huruf b", berlakuSejak: "2023-08-24" }, { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 97 ayat (1) dan (3)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 65, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-122",
      topik: "B8.1",
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Sawit adalah Wajib Pajak PBB sektor perkebunan yang objeknya telah terdaftar. SPOP Elektronik Tahun Pajak 2026 disampaikan DJP melalui Akun Wajib Pajak sesuai jadwal sektornya. Karena laporan perkembangan usaha belum final, pada 20 Februari 2026 perusahaan menyampaikan surat pemberitahuan penundaan penyampaian SPOP. Batas akhir penyampaian SPOP Tahun Pajak 2026 oleh PT Ortax Sawit adalah ...",
      kataKualifikasi: [],
      opsi: { A: "3 Maret 2026", B: "10 Maret 2026", C: "2 April 2026", D: "7 Mei 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk sektor perkebunan, tanggal penyampaian SPOP oleh DJP, yang sekaligus tanggal diterimanya SPOP oleh Wajib Pajak, adalah 1 Februari Tahun Pajak terutang. SPOP wajib disampaikan paling lama 30 hari setelah diterima. Wajib Pajak dapat menyampaikan pemberitahuan penundaan yang harus diterima sebelum jangka 30 hari berakhir, dan penundaan berlaku paling lama 7 hari setelah jangka 30 hari itu berakhir.",
        jejakHitung: [ [ "SPOP dianggap diterima", "1 Februari 2026" ], [ "30 hari setelahnya", "3 Maret 2026" ], [ "Pemberitahuan penundaan 20 Februari 2026", "diterima sebelum 3 Maret → sah" ], [ "Batas akhir = 3 Maret 2026 + 7 hari", "10 Maret 2026 (Selasa)" ] ],
        mengapaSalah: { A: "Batas 30 hari tanpa memperhitungkan penundaan yang sah.", C: "Menganggap penundaan selama 30 hari, padahal penundaan paling lama 7 hari.", D: "Tidak sesuai jadwal sektor perkebunan maupun jangka penundaan 7 hari." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 79 ayat (3) huruf a, Pasal 81 ayat (1), Pasal 82 ayat (1)–(3)."
      },
      dasarHukum: [
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 79 ayat (3) huruf a, Pasal 81 ayat (1), Pasal 82 ayat (1)–(3)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 89, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-123",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      kutipan: "UU PBB Pasal 15 ayat (6) (dikutip try out): Pengajuan keberatan tidak menunda kewajiban membayar pajak.",
      stem: "PT Ortax Agro Lestari menerima SPPT PBB sektor perkebunan Tahun 2026 dan, karena tidak setuju dengan jumlah PBB yang tercantum, mengajukan keberatan. Ketentuan yang benar terkait kewajiban membayar PBB yang tercantum dalam SPPT tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "kewajiban membayar ditunda sampai Direktur Jenderal Pajak menerbitkan surat keputusan keberatan", B: "kewajiban membayar ditunda paling lama 12 bulan sejak tanggal surat keberatan diterima", C: "kewajiban membayar gugur sepanjang keberatan diajukan dalam jangka waktu 3 bulan sejak SPPT diterima", D: "pengajuan keberatan tidak menunda kewajiban membayar PBB yang terutang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengajuan keberatan PBB tidak menunda kewajiban membayar pajak (UU PBB Pasal 15 ayat (6)). PMK 118/2024 Pasal 10 ayat (4) menegaskan hal yang sama untuk keberatan atas SPPT maupun SKP PBB, sehingga PT Ortax Agro Lestari tetap harus melunasi PBB sesuai SPPT pada jatuh tempo.",
        jejakHitung: [],
        mengapaSalah: {
          A: "UU PBB menegaskan bahwa pengajuan keberatan tidak menunda kewajiban membayar pajak.",
          B: "Tidak ada penundaan pembayaran karena pengajuan keberatan PBB.",
          C: "Pengajuan keberatan tepat waktu tidak menggugurkan kewajiban membayar PBB yang terutang."
        },
        jebakan: "Keberatan PBB tidak menunda kewajiban membayar; bandingkan dengan keberatan pajak pusat lain yang memiliki ketentuan penangguhan tersendiri."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 (UU PBB) Pasal 15 ayat (6)", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 10 ayat (4)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 96, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "B8-124",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "UU PBB Pasal 20: Atas permintaan wajib pajak Direktur Jenderal Pajak dapat mengurangkan denda administrasi karena hal-hal tertentu.",
      stem: "PT Rimba Lestari Nusa menerima SPPT PBB-P5L sektor perhutanan (hutan tanaman) Tahun Pajak 2026 dengan PBB terutang Rp93.600.000 dan tidak menyanggah jumlahnya. Karena satu-satunya direktur pemegang otorisasi pembayaran dirawat inap akibat kecelakaan, PBB baru dilunasi 2 bulan 20 hari setelah jatuh tempo, lalu KPP menerbitkan STP PBB yang hanya berisi denda administrasi Rp5.616.000. Perusahaan membukukan laba dan likuiditasnya baik pada 2024 dan 2025, serta tidak mengajukan keberatan atau permohonan lain atas SPPT tersebut. Upaya yang tepat diajukan perusahaan untuk meminta keringanan atas tagihan dalam STP PBB itu adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Permohonan pengurangan denda administratif PBB atas STP PBB", B: "Keberatan atas STP PBB kepada Direktur Jenderal Pajak", C: "Permohonan pembatalan STP PBB yang tidak benar", D: "Permohonan pengurangan PBB karena kondisi tertentu objek pajak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang ditagih dalam STP PBB hanya denda administrasi 2% sebulan karena keterlambatan pembayaran (2 bulan 20 hari dihitung 3 bulan: 2% × 3 × Rp93.600.000 = Rp5.616.000). Atas permintaan wajib pajak, Direktur Jenderal Pajak dapat mengurangkan denda administrasi karena hal-hal tertentu (UU PBB Pasal 20), termasuk bila sanksi dikenakan bukan karena kesalahan wajib pajak (PMK 118/2024 Pasal 21 huruf a). Denda dalam STP PBB termasuk denda yang dapat dikurangkan (Pasal 21A huruf e PMK 118/2024 s.t.d.d. PMK 71/2026), dan syarat pokok PBB yang menjadi dasar denda telah lunas terpenuhi (Pasal 23 ayat (5) huruf a).",
        jejakHitung: [],
        mengapaSalah: {
          B: "Keberatan PBB hanya dapat diajukan atas SPPT atau SKP PBB (UU PBB Pasal 15 ayat (1)), bukan atas STP PBB.",
          C: "STP PBB itu benar karena PBB memang dilunasi setelah jatuh tempo; pembatalan hanya untuk STP PBB yang seharusnya tidak diterbitkan (PMK 118/2024 Pasal 22 ayat (4)).",
          D: "Pengurangan karena kondisi tertentu mensyaratkan kerugian komersial dan kesulitan likuiditas 2 tahun berturut-turut (PMK 129/2023 Pasal 3 ayat (4)) dan diberikan atas PBB dalam SPPT atau SKP PBB, bukan atas denda dalam STP PBB."
        },
        jebakan: "Pola: pokok PBB benar dan sudah lunas, yang tersisa hanya denda keterlambatan dalam STP PBB → permohonan pengurangan denda administratif (UU PBB Pasal 20), bukan keberatan (keberatan PBB hanya atas SPPT dan SKP PBB)."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (3), Pasal 15 ayat (1), dan Pasal 20", berlakuSejak: null }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 21 huruf a, Pasal 21A huruf e, Pasal 22 ayat (4), Pasal 23 ayat (5) huruf a", berlakuSejak: null }, { pasal: "PMK 129/2023 Pasal 3 ayat (4) dan Pasal 4 ayat (1)", berlakuSejak: null }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-117",
      sejak: "9.5.0"
    },
    {
      id: "B8-125",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Untuk Tahun Pajak 2026, CV Batu Alam Sejahtera tidak menyampaikan SPOP atas objek tambang batu yang baru dikuasainya walaupun telah menerima Surat Teguran, sehingga Direktur Jenderal Pajak menerbitkan SKP PBB dengan pokok pajak Rp36.800.000. Atas objek lain milik CV tersebut, PBB menurut SPPT sebesar Rp52.500.000 baru dilunasi 4 bulan 10 hari setelah jatuh tempo, sehingga diterbitkan STP PBB atas dendanya. Jumlah dalam SKP PBB dan STP PBB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKP Rp46.000.000,00 (pokok + 25%); STP denda Rp4.200.000,00 (2% × 4 bulan)", B: "SKP Rp46.000.000,00 (pokok + 25%); STP denda Rp5.250.000,00 (2% × 5 bulan)", C: "SKP Rp36.800.000,00 tanpa denda; STP denda Rp5.250.000,00 (2% × 5 bulan)", D: "SKP Rp46.000.000,00 (pokok + 25%); STP denda Rp13.125.000,00 (25% dari pokok)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP yang tidak disampaikan walaupun sudah ditegur secara tertulis menjadi dasar SKP PBB yang berisi pokok pajak ditambah denda administrasi 25% dari pokok (UU PBB Pasal 10 ayat (2) huruf a dan ayat (3)). PBB yang tidak dibayar pada saat jatuh tempo dikenai denda administrasi 2% sebulan sejak jatuh tempo sampai hari pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan (Pasal 11 ayat (3) beserta Penjelasannya), ditagih dengan STP PBB (Pasal 11 ayat (4)). Keterlambatan 4 bulan 10 hari dihitung 5 bulan.",
        jejakHitung: [
          ["SKP PBB = Rp36.800.000 + 25% × Rp36.800.000", "Rp46.000.000"],
          ["Keterlambatan 4 bulan 10 hari", "dihitung 5 bulan"],
          ["STP PBB = 2% × 5 × Rp52.500.000", "Rp5.250.000"]
        ],
        mengapaSalah: {
          A: "Sisa 10 hari tidak dibulatkan, padahal bagian dari bulan dihitung penuh 1 bulan, sehingga dendanya 5 bulan.",
          C: "SKP PBB karena SPOP tidak disampaikan setelah ditegur memuat denda 25% dari pokok (Pasal 10 ayat (3)), bukan pokok saja.",
          D: "Denda 25% hanya melekat pada SKP PBB; keterlambatan pembayaran PBB dikenai denda 2% sebulan (Pasal 11 ayat (3))."
        },
        jebakan: "Dua jenis denda PBB yang berbeda: 25% sekali dalam SKP PBB (SPOP tidak disampaikan setelah ditegur) dan 2% per bulan dalam STP PBB (terlambat bayar), dengan bagian bulan dihitung penuh. Keduanya denda tetap UU PBB, bukan bunga berbasis tarif KMK."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 10 ayat (2) huruf a dan ayat (3)", berlakuSejak: null }, { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (3) dan (4) beserta Penjelasan", berlakuSejak: null }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-118",
      sejak: "9.5.0"
    },
    {
      id: "B8-126",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Kebun Raya Sentosa menerima STP PBB Tahun Pajak 2026 pada 19 Oktober 2026 yang berisi pokok PBB belum dibayar Rp35.000.000 dan denda administrasi Rp2.100.000. Atas SPPT terkait tidak pernah diajukan keberatan atau permohonan lain. Pada 12 November 2026 perusahaan membayar Rp30.000.000 atas STP tersebut, lalu pada 23 November 2026 menyampaikan permohonan pengurangan denda administrasi atas STP PBB itu. Analisis pemenuhan syarat pelunasan untuk permohonan tersebut berdasarkan PMK 118/2024 s.t.d.d. PMK 71/2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Memenuhi syarat karena jumlah yang dibayar telah melebihi denda administrasi yang tercantum dalam STP PBB", B: "Memenuhi syarat karena pelunasan pokok baru diwajibkan setelah surat keputusan pengurangan denda terbit", C: "Tidak memenuhi syarat karena seluruh jumlah STP PBB, termasuk denda yang dimohonkan, harus lunas lebih dulu", D: "Tidak memenuhi syarat karena pembayaran diperhitungkan lebih dulu ke pokok, tetapi pokok masih kurang Rp5.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Permohonan pengurangan denda administratif PBB mensyaratkan jumlah pokok PBB yang menjadi dasar denda dalam STP PBB telah dilunasi (PMK 118/2024 Pasal 23 ayat (5) huruf a). Sejak PMK 71/2026 (berlaku sejak diundangkan, 2 Oktober 2026), pembayaran atas STP PBB diperhitungkan terlebih dahulu terhadap pokok, dan hanya kelebihannya yang diperhitungkan terhadap denda (Pasal 23 ayat (6) dan (7)). Pembayaran Rp30.000.000 seluruhnya menjadi pembayaran pokok, sehingga pokok masih kurang Rp5.000.000 dan syarat pelunasan belum terpenuhi.",
        jejakHitung: [
          ["Pembayaran 12 November 2026 diperhitungkan ke pokok", "Rp30.000.000"],
          ["Sisa pokok = Rp35.000.000 − Rp30.000.000", "Rp5.000.000 (pokok belum lunas)"]
        ],
        mengapaSalah: {
          A: "Yang menjadi ukuran adalah pelunasan pokok, bukan perbandingan dengan jumlah denda; pembayaran pun dialokasikan lebih dulu ke pokok.",
          B: "Pelunasan pokok adalah syarat yang harus dipenuhi saat permohonan diajukan (Pasal 23 ayat (5) huruf a), bukan setelah keputusan.",
          C: "Kesimpulannya kebetulan sama, tetapi alasannya keliru: denda yang dimohonkan pengurangan tidak harus dilunasi; yang wajib lunas hanya pokok."
        },
        jebakan: "Hitung dulu ke mana pembayaran dialokasikan (pokok lebih dulu menurut PMK 71/2026), lalu uji apakah pokok sudah lunas penuh. Membayar sebagian besar pokok belum cukup."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 20", berlakuSejak: null }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 21 huruf a, Pasal 21A huruf e, Pasal 23 ayat (5) huruf a, ayat (6), dan ayat (7)", berlakuSejak: "2026-10-02" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-119",
      sejak: "9.5.0"
    },
    {
      id: "B8-127",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Tuan Hendra Wiratama menerima SPPT PBB sektor perkebunan Tahun Pajak 2026 sebesar Rp64.000.000 pada 16 April 2026 dan telah membayar Rp16.000.000 pada Mei 2026. Pada September 2026 tanaman di objek pajaknya rusak berat akibat wabah penyakit tanaman yang termasuk sebab lain yang luar biasa. Ia tidak sedang mengajukan keberatan atau permohonan lain atas SPPT tersebut. Batas akhir pengajuan permohonan pengurangan PBB karena peristiwa tersebut dan jumlah pengurangan paling tinggi yang dapat diberikan adalah ...",
      kataKualifikasi: ["paling tinggi"],
      opsi: { A: "15 Juli 2026; paling tinggi Rp48.000.000", B: "31 Desember 2026; paling tinggi Rp36.000.000", C: "31 Desember 2026; paling tinggi Rp48.000.000", D: "31 Desember 2026; paling tinggi Rp64.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Objek pajak yang terkena sebab lain yang luar biasa dapat diberi pengurangan PBB (PMK 129/2023 Pasal 3 ayat (1) huruf b) atas PBB dalam SPPT untuk tahun pajak terjadinya peristiwa (Pasal 4 ayat (2) huruf a), paling tinggi 100% dari PBB yang belum dilunasi (Pasal 4 ayat (3) huruf b). Permohonannya diajukan pada tahun terjadinya peristiwa (Pasal 5 ayat (5)), yaitu paling lambat 31 Desember 2026. PBB yang belum dilunasi Rp64.000.000 − Rp16.000.000 = Rp48.000.000, sehingga pengurangan paling tinggi Rp48.000.000.",
        jejakHitung: [
          ["PBB yang belum dilunasi = Rp64.000.000 − Rp16.000.000", "Rp48.000.000"],
          ["Pengurangan paling tinggi = 100% × Rp48.000.000", "Rp48.000.000"],
          ["Jangka pengajuan: tahun terjadinya peristiwa (2026)", "paling lambat 31 Desember 2026"]
        ],
        mengapaSalah: {
          A: "Jangka 3 bulan sejak SPPT diterima (berakhir 15 Juli 2026) berlaku untuk pengurangan karena kondisi tertentu (Pasal 5 ayat (3) huruf a), bukan untuk bencana atau sebab lain yang luar biasa.",
          B: "Batas 75% berlaku untuk pengurangan karena kondisi tertentu (Pasal 4 ayat (3) huruf a); untuk sebab lain yang luar biasa batasnya 100%.",
          D: "Pengurangan paling tinggi 100% dihitung dari PBB yang belum dilunasi, bukan dari seluruh PBB dalam SPPT; Rp16.000.000 sudah dibayar."
        },
        jebakan: "Bedakan dua jenis pengurangan PBB: kondisi tertentu (paling tinggi 75%, diajukan 3 bulan sejak SPPT diterima) lawan bencana atau sebab lain yang luar biasa (paling tinggi 100% dari PBB yang belum dilunasi, diajukan pada tahun terjadinya)."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 19 ayat (1) huruf b", berlakuSejak: null }, { pasal: "PMK 129/2023 Pasal 3 ayat (1) huruf b dan ayat (10), Pasal 4 ayat (2) huruf a dan ayat (3), Pasal 5 ayat (3) dan ayat (5)", berlakuSejak: null }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "B8-120",
      sejak: "9.5.0"
    },
    {
      id: "B8-129",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Galian Mineral Pratama adalah Wajib Pajak PBB sektor pertambangan mineral yang objeknya telah terdaftar sejak 2021. SPOP Elektronik Tahun Pajak 2026 disampaikan DJP melalui Akun Wajib Pajak sesuai jadwal sektornya. Karena data luas areal operasi produksi belum selesai direkonsiliasi, perusahaan menyampaikan surat pemberitahuan penundaan penyampaian SPOP yang diterima DJP pada 4 Mei 2026. Batas akhir penyampaian SPOP Tahun Pajak 2026 oleh PT Galian Mineral Pratama adalah ...",
      kataKualifikasi: [],
      opsi: { A: "3 Maret 2026", B: "30 April 2026", C: "7 Mei 2026", D: "11 Mei 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Untuk sektor pertambangan mineral atau batubara, tanggal penyampaian SPOP oleh DJP, yang sekaligus tanggal diterimanya SPOP oleh Wajib Pajak, adalah 31 Maret Tahun Pajak terutang (PMK 81/2024 Pasal 79 ayat (3) huruf b). SPOP wajib disampaikan paling lama 30 hari setelah diterima (Pasal 81 ayat (1)), yaitu 30 April 2026. Surat pemberitahuan penundaan harus diterima sebelum jangka 30 hari itu berakhir (Pasal 82 ayat (2)); surat yang baru diterima 4 Mei 2026 terlambat, sehingga penundaan 7 hari (Pasal 82 ayat (3)) tidak berlaku dan batas akhir tetap 30 April 2026.",
        jejakHitung: [
          ["SPOP dianggap diterima (sektor pertambangan mineral)", "31 Maret 2026"],
          ["30 hari setelahnya", "30 April 2026 (Kamis)"],
          ["Surat penundaan diterima 4 Mei 2026", "setelah jangka 30 hari berakhir → penundaan tidak sah"],
          ["Batas akhir penyampaian SPOP", "30 April 2026"]
        ],
        mengapaSalah: {
          A: "Memakai jadwal 1 Februari (sektor perkebunan, migas, panas bumi) ditambah 30 hari, padahal sektor pertambangan mineral memakai 31 Maret.",
          C: "Menambahkan penundaan 7 hari, padahal surat penundaan baru diterima setelah jangka 30 hari berakhir sehingga tidak memenuhi Pasal 82 ayat (2).",
          D: "Menghitung 7 hari sejak surat penundaan diterima; selain penundaannya tidak sah, jangka 7 hari pun dihitung setelah berakhirnya jangka 30 hari, bukan sejak surat diterima."
        },
        jebakan: "Urutannya: tentukan tanggal SPOP diterima menurut sektor, hitung 30 hari, lalu uji apakah surat penundaan diterima SEBELUM jangka 30 hari berakhir. Penundaan yang terlambat tidak memperpanjang batas waktu."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 79 ayat (3) huruf b, Pasal 81 ayat (1), Pasal 82 ayat (1)–(3)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-122",
      sejak: "9.5.0"
    },
    {
      id: "B8-130",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      kutipan: "PMK 118/2024 Pasal 10 ayat (3): Dalam hal Wajib Pajak mengajukan keberatan sebagaimana dimaksud dalam Pasal 9 ayat (1), jangka waktu pelunasan pajak yang masih harus dibayar yang tidak disetujui dalam pembahasan akhir hasil pemeriksaan sebagaimana tercantum dalam: a. Surat Ketetapan Pajak Kurang Bayar; atau b. Surat Ketetapan Pajak Kurang Bayar Tambahan, dan belum dibayar pada saat pengajuan keberatan, tertangguh sampai dengan 1 (satu) bulan sejak tanggal penerbitan Surat Keputusan Keberatan.",
      stem: "CV Tirta Mandiri menerima SKP PBB Tahun Pajak 2026 hasil pemeriksaan atas objek pajak sektor lainnya, yang menetapkan selisih PBB ditambah denda administrasi 25%. CV tersebut tidak setuju dan mengajukan keberatan dalam jangka waktu 3 bulan sejak SKP PBB diterima. Bagian keuangan berpendapat bahwa ketentuan dalam kutipan juga berlaku, sehingga pembayaran dapat menunggu keputusan keberatan. Ketentuan yang benar terkait kewajiban membayar PBB dalam SKP PBB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "jangka waktu pelunasan tertangguh sampai 1 bulan sejak surat keputusan keberatan diterbitkan", B: "kewajiban membayar ditunda selama keberatan belum diputus, paling lama 12 bulan sejak diterima", C: "pengajuan keberatan tidak menunda kewajiban membayar PBB yang terutang dalam SKP PBB tersebut", D: "hanya bagian yang disetujui wajib dibayar, sedangkan sisanya tertangguh sampai keberatan diputus" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penangguhan dalam kutipan (PMK 118/2024 Pasal 10 ayat (3)) hanya berlaku untuk keberatan atas SKPKB dan SKPKBT menurut UU KUP. Untuk PBB, pengajuan keberatan tidak menunda kewajiban membayar pajak (UU PBB Pasal 15 ayat (6)), dan PMK 118/2024 Pasal 10 ayat (4) menegaskannya untuk keberatan atas SPPT maupun SKP PBB. PBB dalam SKP PBB tetap harus dilunasi paling lama 1 bulan sejak SKP PBB diterima (UU PBB Pasal 11 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penangguhan sampai 1 bulan sejak surat keputusan keberatan hanya untuk SKPKB dan SKPKBT (Pasal 10 ayat (3)), bukan SKP PBB.",
          B: "Jangka 12 bulan adalah batas waktu Direktur Jenderal Pajak memutus keberatan PBB (UU PBB Pasal 16 ayat (1)), bukan masa penundaan pembayaran.",
          D: "Pemisahan jumlah yang disetujui dan tidak disetujui dalam pembahasan akhir berlaku untuk SKPKB dan SKPKBT; untuk SKP PBB tidak ada penangguhan sebagian."
        },
        jebakan: "Kutipan sengaja memuat aturan keberatan SKPKB/SKPKBT. Keberatan PBB (SPPT maupun SKP PBB) tidak menunda kewajiban membayar."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 (UU PBB) Pasal 15 ayat (6)", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 10 ayat (3) dan ayat (4)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "B8-123",
      sejak: "9.5.0"
    },
    {
      id: "B8-132",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Kebun Raya Sentosa memegang HGU kebun kakao di Kabupaten Polewali Mandar. Setelah memperoleh tambahan areal HGU, perusahaan menerima SPOP sektor perkebunan dan LSPOP untuk mendata areal tambahan itu pada Senin, 16 Februari 2026. Staf pajak perlu menjadwalkan pengembalian formulir yang sudah diisi dan ditandatangani. Menurut UU PBB, SPOP tersebut paling lambat harus disampaikan kepada Direktorat Jenderal Pajak pada ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "15 Maret 2026", B: "30 April 2026", C: "15 Mei 2026", D: "18 Maret 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 9 ayat (2) UU PBB: SPOP disampaikan selambat-lambatnya 30 hari setelah tanggal diterimanya SPOP oleh subjek pajak. Hitungan dimulai 17 Februari 2026: 12 hari di Februari 2026 (17 sampai 28) ditambah 18 hari di Maret, sehingga batasnya 18 Maret 2026.",
        jejakHitung: [
          ["SPOP diterima", "16 Februari 2026"],
          ["Februari 2026 (tanggal 17 sampai 28)", "12 hari"],
          ["Maret 2026 agar genap 30 hari", "18 hari"],
          ["Batas penyampaian SPOP", "18 Maret 2026 (Rabu)"]
        ],
        mengapaSalah: {
          A: "Menyamakan 30 hari dengan satu bulan sejak SPOP diterima (berakhir 15 Maret 2026); karena Februari 2026 hanya 28 hari, 30 hari jatuh lebih lambat",
          B: "30 April adalah batas SPT Tahunan PPh badan dengan tahun buku kalender, bukan tenggat SPOP",
          C: "Tiga bulan adalah jangka waktu pengajuan keberatan (Pasal 15 ayat (3) UU PBB), bukan penyampaian SPOP"
        },
        jebakan: "Tenggat SPOP dihitung dalam hari (30 hari setelah diterima), bukan bulan; pada bulan Februari selisih keduanya beberapa hari."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-002",
      sejak: "9.5.0"
    },
    {
      id: "B8-133",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "PT Samudra Gas Nusantara, kontraktor kontrak kerja sama migas di Kabupaten Bojonegoro, memiliki tangki timbun minyak mentah permanen di dalam wilayah kerjanya dengan NJOP bangunan Rp28.500.000.000 yang tercatat dalam data objek tahun-tahun sebelumnya. Untuk penggantian fasilitas, tangki itu dibongkar seluruhnya dan pembongkaran selesai pada 23 Februari 2026; tangki pengganti baru dibangun pada 2027. SPPT PBB-P5L Tahun Pajak 2026 yang diterima perusahaan pada 16 Maret 2026 masih memuat tangki tersebut. Manajer pajak berpendapat SPPT 2026 terlalu tinggi. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SPPT 2026 terlalu tinggi; PBB atas tangki hanya terutang secara proporsional untuk Januari dan Februari 2026", B: "SPPT 2026 sudah benar karena yang menentukan adalah keadaan objek pada 1 Januari 2026; pembongkaran baru berpengaruh pada Tahun Pajak 2027", C: "SPPT 2026 terlalu tinggi; karena tangki sudah tidak ada ketika SPPT diterima, NJOP tangki wajib dikeluarkan dari SPPT 2026", D: "SPPT 2026 terlalu tinggi; tangki timbun adalah peralatan produksi dan sejak awal bukan bangunan objek PBB" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 8 ayat (2) UU PBB: saat yang menentukan pajak terutang adalah keadaan objek pada 1 Januari. Pada 1 Januari 2026 tangki masih berdiri, sehingga tetap masuk PBB 2026; Penjelasan Pasal 8 ayat (2) memberi contoh bangunan yang terbakar 10 Januari tetap dikenai pajak tahun itu. Pembongkaran baru tercermin pada penetapan Tahun Pajak 2027 menurut keadaan 1 Januari 2027. Administrasinya mengikuti PMK 81/2024: Wajib Pajak wajib melaporkan objek yang telah terdaftar dengan SPOP yang disampaikan oleh DJP, dan pelaporan itu dilakukan untuk setiap Tahun Pajak (Pasal 79 ayat (1) dan (2)); perubahan data objek dalam Surat Keterangan Terdaftar Objek Pajak dilakukan Kepala KPP atas permohonan Wajib Pajak atau secara jabatan (Pasal 76 ayat (1)). Tangki penampungan minyak termasuk bangunan menurut Penjelasan Pasal 1 angka 2.",
        jejakHitung: [],
        mengapaSalah: {
          A: "UU PBB tidak mengenal pengenaan proporsional dalam tahun berjalan; objek dikunci pada keadaan 1 Januari",
          C: "Tanggal SPPT diterima tidak menentukan; bangunan yang hilang setelah 1 Januari tetap dikenai pajak tahun itu (Penjelasan Pasal 8 ayat (2))",
          D: "Penjelasan Pasal 1 angka 2 menyebut tempat penampungan atau kilang minyak, air, dan gas sebagai bangunan"
        },
        jebakan: "Tanggal pembongkaran dibandingkan dengan 1 Januari, bukan dengan tanggal SPPT diterima; hilangnya bangunan di tengah tahun tidak mengurangi PBB tahun itu."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 76 ayat (1) dan Pasal 79 ayat (1) dan (2) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-003",
      sejak: "9.5.0"
    },
    {
      id: "B8-134",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Bara Kencana Utama memegang IUP operasi produksi batubara di Kabupaten Lahat. Pada 1 Januari 2026 perusahaan menguasai: (1) areal tambang terbuka dan stockpile di dalam wilayah IUP; (2) mess dan perumahan karyawan di dalam wilayah IUP; (3) rumah dinas direksi di Kota Palembang yang tidak berhubungan dengan wilayah IUP; (4) jalan angkut batubara khusus di luar wilayah IUP, dibangun perusahaan di atas tanah yang dibebaskannya, bersambung langsung dengan batas wilayah IUP, dan hanya dipakai untuk mengangkut batubara dari tambang ke pelabuhan khusus perusahaan. Objek yang PBB-nya merupakan PBB-P2 yang dipungut pemerintah daerah, bukan PBB-P5L, adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "(2) dan (3)", B: "(3) dan (4)", C: "(3) saja", D: "Tidak ada; seluruhnya PBB-P5L karena dikuasai pemegang IUP" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Objek PBB-P2 adalah bumi dan/atau bangunan kecuali kawasan yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan pertambangan (Pasal 38 ayat (1) UU 1/2022). Kawasan pertambangan minerba meliputi areal IUP dan areal di luar IUP yang merupakan satu kesatuan yang digunakan untuk usaha pertambangan dan secara fisik tidak terpisahkan, termasuk areal yang bertitik koordinat sama atau terhubung melalui jalan atau konveyor (Pasal 7 ayat (2) dan (3) PMK 186/2019). Mess di dalam IUP dan jalan angkut yang bersambung dengan IUP termasuk kawasan pertambangan; hanya rumah dinas di Palembang yang menjadi objek PBB-P2.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Mess dan perumahan karyawan berada di dalam wilayah IUP; fungsi hunian tidak memindahkannya keluar dari kawasan pertambangan",
          B: "Jalan angkut di luar IUP yang bersambung langsung dan dipakai untuk usaha pertambangan termasuk kawasan pertambangan menurut Pasal 7 ayat (2) huruf b dan ayat (3) PMK 186/2019",
          D: "Pemilik tidak menentukan sektor; rumah dinas di kota yang tidak berhubungan dengan IUP bukan bagian kawasan pertambangan"
        },
        jebakan: "Batas PBB-P5L dan PBB-P2 ditentukan kawasan usaha (termasuk areal di luar izin yang satu kesatuan dan tidak terpisahkan secara fisik), bukan identitas pemilik dan bukan semata garis batas izin."
      },
      dasarHukum: [{ pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 2 huruf e dan Pasal 7 ayat (2)–(3) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-004",
      sejak: "9.5.0"
    },
    {
      id: "B8-135",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "Pasal 4 ayat (5) dan ayat (7) UU PBB: (5) Bila keterangan yang diajukan oleh wajib pajak sebagaimana dimaksud dalam ayat (4) disetujui, maka Direktur Jenderal Pajak membatalkan penetapan sebagai wajib pajak sebagaimana dimaksud dalam ayat (3) dalam jangka waktu satu bulan sejak diterimanya surat keterangan dimaksud. (7) Apabila setelah jangka waktu satu bulan sejak tanggal diterimanya keterangan sebagaimana dimaksud dalam ayat (4), Direktur Jenderal Pajak tidak memberikan keputusan, maka keterangan yang diajukan itu dianggap disetujui.",
      stem: "Karena areal kebun karet di Kabupaten Batanghari masih disengketakan pemilikannya, DJP menetapkan Koperasi Tani Sumber Rejeki, yang selama ini memanfaatkan areal itu, sebagai wajib pajak PBB-P5L. Pada 14 September 2026 KPP menerima keterangan tertulis koperasi beserta salinan putusan pengadilan berkekuatan hukum tetap yang menyatakan areal itu milik PT Getah Andalas dan telah diserahkan kepadanya. Sampai Jumat, 9 Oktober 2026 DJP belum memberikan keputusan apa pun atas keterangan tersebut. Berdasarkan kutipan tersebut, status koperasi per 9 Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masih wajib pajak; jangka waktu satu bulan bagi DJP baru berakhir 13 Oktober 2026, dan bila lewat tanpa keputusan keterangan dianggap disetujui", B: "Sudah bukan wajib pajak sejak 14 September 2026, karena penyampaian keterangan tertulis dengan sendirinya membatalkan penetapan", C: "Masih wajib pajak; DJP berwenang memutus keterangan itu sampai 12 bulan sejak diterima, yaitu sampai 13 September 2027", D: "Masih wajib pajak; satu-satunya jalan bagi koperasi adalah mengajukan keberatan atas SPPT dalam jangka waktu tiga bulan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 4 ayat (5) memberi DJP jangka waktu satu bulan sejak keterangan diterima untuk memutus, dan ayat (7) baru memberlakukan fiksi 'dianggap disetujui' setelah jangka waktu itu lewat. Satu bulan sejak 14 September 2026 berakhir 13 Oktober 2026 (tanggal diterima dihitung hari pertama, seperti contoh Penjelasan Pasal 11 UU PBB). Per 9 Oktober 2026 jangka waktu belum lewat, sehingga penetapan masih berlaku dan DJP masih dapat memutus.",
        jejakHitung: [
          ["Keterangan diterima KPP", "14 September 2026"],
          ["Hari terakhir jangka waktu 1 bulan", "13 Oktober 2026"],
          ["Tanggal yang ditanyakan", "9 Oktober 2026 (belum lewat)"],
          ["Bila sampai 13 Oktober 2026 tidak ada keputusan", "dianggap disetujui"]
        ],
        mengapaSalah: {
          B: "Penyampaian keterangan tidak langsung membatalkan penetapan; pembatalan terjadi bila disetujui (ayat (5)) atau setelah satu bulan lewat tanpa keputusan (ayat (7))",
          C: "Jangka 12 bulan adalah batas keputusan keberatan (Pasal 16 ayat (1)), bukan keputusan atas keterangan bukan wajib pajak",
          D: "Untuk penetapan subjek tersedia mekanisme keterangan Pasal 4 ayat (4); keberatan adalah upaya atas SPPT atau SKP"
        },
        jebakan: "Fiksi 'dianggap disetujui' baru berlaku setelah satu bulan lewat; sebelum batas itu penetapan sebagai wajib pajak masih berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3)–(7) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-005",
      sejak: "9.5.0"
    },
    {
      id: "B8-136",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Bumi Kaltara Mineral terdaftar di KPP yang wilayah kerjanya meliputi Kota Samarinda, tempat kantor pusatnya berada. Satu-satunya wilayah IUP batubara perusahaan terletak di Kabupaten Kutai Kartanegara, yang berada dalam provinsi yang sama dengan Kota Samarinda. Pada 2026 staf pajak berpendapat bahwa karena kedua daerah berada dalam satu provinsi, SPOP cukup disampaikan ke KPP tempat perusahaan terdaftar dan PBB-nya terutang di Kota Samarinda. Ketentuan yang tepat mengenai tempat pajak terutang dan penyampaian SPOP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB terutang di Kota Samarinda sesuai tempat kedudukan perusahaan; SPOP disampaikan ke KPP tempat perusahaan terdaftar", B: "PBB terutang di wilayah Provinsi Kalimantan Timur karena kantor dan objek berada dalam satu provinsi; SPOP ke kantor wilayah DJP", C: "PBB terutang di Kabupaten Kutai Kartanegara; SPOP disampaikan kepada Direktorat Jenderal Pajak yang wilayah kerjanya meliputi letak objek", D: "PBB terutang di Kabupaten Kutai Kartanegara, tetapi objek didaftarkan dan pajaknya dibayar ke pemerintah kabupaten sebagai PBB-P2" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 8 ayat (3) UU PBB menetapkan tempat pajak terutang di wilayah kabupaten/kota yang meliputi letak objek, dan Pasal 9 ayat (2) mewajibkan SPOP disampaikan kepada Direktorat Jenderal Pajak yang wilayah kerjanya meliputi letak objek. Tempat terdaftar dan kesamaan provinsi tidak mengubah keduanya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tempat kedudukan atau tempat terdaftar wajib pajak tidak menentukan tempat terutang PBB; yang menentukan letak objek",
          B: "UU PBB menunjuk kabupaten/kota letak objek; tempat terutang di tingkat provinsi hanya disebut Penjelasan Pasal 8 ayat (3) untuk Batam",
          D: "Areal IUP adalah kawasan pertambangan yang dikecualikan dari objek PBB-P2 (Pasal 38 ayat (1) UU 1/2022) dan tetap PBB-P5L"
        },
        jebakan: "PBB mengikuti letak objek, berbeda dengan PPh badan yang mengikuti tempat terdaftar wajib pajak."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1)–(2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-006",
      sejak: "9.5.0"
    },
    {
      id: "B8-137",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-B8-11",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-11: PT Sinar Nikel Halmahera memegang IUP operasi produksi nikel di Kabupaten Halmahera Tengah. Perusahaan menerima SPOP sektor pertambangan mineral untuk Tahun Pajak 2026 pada Rabu, 11 Februari 2026, tetapi tidak pernah mengembalikannya. KPP lalu mengirim surat teguran tertulis pada 7 April 2026, dan SPOP tetap tidak disampaikan sampai batas yang ditentukan dalam surat teguran. Dari data yang ada padanya, DJP menghitung pokok PBB 2026 sebesar Rp243.760.000 dan menerbitkan SKP yang diterima perusahaan pada 21 Juli 2026. Kapan batas penyampaian SPOP menurut Pasal 9 ayat (2) UU PBB, dan apa dasar penerbitan SKP tersebut?",
      kataKualifikasi: [],
      opsi: { A: "10 Maret 2026; SKP berdasarkan Pasal 10 ayat (2) huruf a karena SPOP tetap tidak disampaikan setelah ditegur", B: "13 Maret 2026; SKP berdasarkan Pasal 10 ayat (2) huruf a karena SPOP tetap tidak disampaikan setelah ditegur", C: "13 Maret 2026; SKP berdasarkan Pasal 10 ayat (2) huruf b karena data DJP menunjukkan pajak lebih besar daripada SPOP", D: "30 April 2026; DJP menerbitkan STP karena SPOP terlambat disampaikan dan tetap tidak disampaikan setelah ditegur" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "30 hari setelah 11 Februari 2026 jatuh pada 13 Maret 2026 (Februari 2026 berisi 28 hari). Karena SPOP tidak disampaikan dan setelah ditegur secara tertulis tetap tidak disampaikan, DJP menerbitkan SKP berdasarkan Pasal 10 ayat (2) huruf a.",
        jejakHitung: [
          ["SPOP diterima", "11 Februari 2026"],
          ["Februari 2026 (tanggal 12 sampai 28)", "17 hari"],
          ["Maret 2026 agar genap 30 hari", "13 hari"],
          ["Batas penyampaian SPOP", "13 Maret 2026 (Jumat)"]
        ],
        mengapaSalah: {
          A: "Menghitung satu bulan sejak SPOP diterima (berakhir 10 Maret 2026), padahal Pasal 9 ayat (2) menyebut 30 hari",
          C: "Huruf b mensyaratkan SPOP yang disampaikan wajib pajak sebagai pembanding; di sini SPOP tidak pernah disampaikan",
          D: "STP menagih pajak yang tidak atau kurang dibayar setelah jatuh tempo (Pasal 11 ayat (4)), bukan keterlambatan SPOP; 30 April bukan tenggat SPOP"
        },
        jebakan: "SKP huruf a (SPOP tidak disampaikan setelah ditegur) berbeda dengan SKP huruf b (hasil pemeriksaan atau keterangan lain lebih besar daripada pajak menurut SPOP)."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (2) huruf a UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-007",
      sejak: "9.5.0"
    },
    {
      id: "B8-138",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B8-11",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-11: PT Sinar Nikel Halmahera, pemegang IUP nikel di Kabupaten Halmahera Tengah, tidak mengembalikan SPOP 2026 walaupun sudah ditegur secara tertulis. Dari data yang ada padanya, DJP menghitung PBB-P5L 2026 atas bumi Rp198.420.000 dan atas bangunan Rp45.340.000, lalu menerbitkan SKP. Jumlah pajak yang harus dibayar menurut SKP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp243.760.000", B: "Rp426.580.000", C: "Rp248.635.200", D: "Rp304.700.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 10 ayat (3) UU PBB: jumlah pajak dalam SKP Pasal 10 ayat (2) huruf a adalah pokok pajak ditambah denda administrasi 25% dari pokok pajak. Pokok adalah jumlah PBB atas bumi dan atas bangunan.",
        jejakHitung: [
          ["Pokok: 198.420.000 + 45.340.000", "Rp243.760.000"],
          ["Denda 25% × 243.760.000", "Rp60.940.000"],
          ["Jumlah menurut SKP", "Rp304.700.000"]
        ],
        mengapaSalah: {
          A: "Hanya pokok pajak; denda administrasi 25% dalam SKP terlupa",
          B: "Memakai kenaikan 75% Pasal 13 ayat (3) UU KUP (243.760.000 × 175%) yang tidak berlaku untuk SKP PBB",
          C: "Memakai denda 2% sebulan Pasal 11 ayat (3) (243.760.000 × 102%), yang hanya untuk keterlambatan pembayaran"
        },
        jebakan: "Denda 25% dalam SKP PBB dikenakan sekali dari pokok, bukan per bulan dan bukan kenaikan versi UU KUP."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-008",
      sejak: "9.5.0"
    },
    {
      id: "B8-139",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B8-11",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-11: SKP PBB-P5L 2026 atas IUP nikel PT Sinar Nikel Halmahera sebesar Rp304.700.000 (pokok Rp243.760.000 ditambah denda 25%) diterima perusahaan pada Selasa, 21 Juli 2026. Direksi menilai luas areal bukaan tambang dalam data DJP terlalu besar, berencana mengajukan keberatan, dan meminta bagian keuangan menahan pembayaran sampai keberatan diputus. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Keberatan paling lambat 20 Oktober 2026, dan jatuh tempo SKP tertunda sampai keputusan keberatan diterbitkan", B: "Keberatan paling lambat 20 Januari 2027, dan SKP jatuh tempo pada 20 Agustus 2026 tanpa tertunda", C: "Keberatan tidak dapat diajukan atas SKP; perusahaan hanya dapat memohon pengurangan denda administrasi", D: "Keberatan paling lambat 20 Oktober 2026, sedangkan SKP tetap jatuh tempo 20 Agustus 2026; keberatan tidak menunda pembayaran" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan atas SKP diajukan dalam 3 bulan sejak SKP diterima (Pasal 15 ayat (3)), berakhir 20 Oktober 2026; SKP harus dilunasi dalam 1 bulan sejak diterima (Pasal 11 ayat (2)), jatuh tempo 20 Agustus 2026. Pengajuan keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6)); pembayaran setelah jatuh tempo dikenai denda 2% sebulan. Tanggal diterima dihitung hari pertama (contoh Penjelasan Pasal 11 ayat (2): SKP diterima 1 Maret, jatuh tempo 31 Maret).",
        jejakHitung: [
          ["SKP diterima", "21 Juli 2026"],
          ["Jatuh tempo SKP (1 bulan sejak diterima)", "20 Agustus 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Keberatan tidak menangguhkan jatuh tempo (Pasal 15 ayat (6)); menahan pembayaran memicu denda 2% sebulan",
          B: "Enam bulan (berakhir 20 Januari 2027) adalah jangka pelunasan SPPT, bukan batas keberatan",
          C: "Pasal 15 ayat (1) UU PBB menyebut keberatan dapat diajukan atas SPPT dan atas SKP"
        },
        jebakan: "Dua tenggat berjalan bersamaan sejak SKP diterima: 1 bulan untuk melunasi dan 3 bulan untuk keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-009",
      sejak: "9.5.0"
    },
    {
      id: "B8-140",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      kutipan: "Pasal 3 ayat (1) huruf a dan b UU PBB: (1) Obyek Pajak yang tidak dikenakan Pajak Bumi dan Bangunan adalah objek pajak yang: a. digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan dan kebudayaan nasional, yang tidak dimaksudkan untuk memperoleh keuntungan; b. digunakan untuk kuburan, peninggalan purbakala, atau yang sejenis dengan itu;",
      stem: "Di dalam wilayah IUP nikel PT Tanjung Logam Prima di Kabupaten Konawe Utara terdapat: (1) gedung lembaga kursus komputer milik anak usaha yang terbuka untuk umum, memungut biaya, dan menargetkan laba; (2) situs makam kuno yang telah ditetapkan sebagai cagar budaya peninggalan purbakala; (3) gudang bahan peledak; (4) lapangan sepak bola permanen milik perusahaan yang dipakai karyawan. Berdasarkan kutipan tersebut, objek yang dikecualikan dari PBB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(2) dan (4)", C: "(2) saja", D: "(1), (2), dan (4)" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Situs makam kuno yang merupakan peninggalan purbakala memenuhi Pasal 3 ayat (1) huruf b. Lembaga kursus bergerak di bidang pendidikan tetapi memungut biaya dan menargetkan laba, sehingga gagal memenuhi syarat 'tidak dimaksudkan untuk memperoleh keuntungan' pada huruf a. Gudang bahan peledak dan lapangan olahraga perusahaan adalah bangunan yang menunjang usaha dan tidak termasuk pengecualian.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kursus komputer yang memungut biaya dan menargetkan laba gagal memenuhi syarat nirlaba huruf a, walaupun terbuka untuk umum",
          B: "Lapangan olahraga perusahaan untuk karyawan tidak termasuk kelompok huruf a sampai e; tempat olahraga justru disebut bangunan dalam Penjelasan Pasal 1 angka 2",
          D: "Menganggap setiap fasilitas pendidikan atau olahraga otomatis dikecualikan tanpa menguji syarat semata-mata kepentingan umum dan nirlaba"
        },
        jebakan: "Bidang pendidikan saja tidak cukup; pengecualian huruf a mensyaratkan semata-mata untuk kepentingan umum dan tidak dimaksudkan memperoleh keuntungan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan b UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-010",
      sejak: "9.5.0"
    },
    {
      id: "B8-141",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Sawit Batang Tembesi memegang HGU kebun kelapa sawit di Kabupaten Sarolangun dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif 1.200 ha dengan nilai tanah Rp3.500/m² dan Biaya Investasi Tanaman (SIT) Rp7.000/m²; areal belum produktif (sudah diolah, belum ditanami) 150 ha dengan nilai tanah Rp3.000/m²; areal emplasemen 30 ha dengan nilai Rp8.000/m², yang di dalamnya terdapat pemakaman umum 1,2 ha dan madrasah milik yayasan yang terbuka untuk umum dan tidak mencari keuntungan 0,8 ha; bangunan (pabrik kelapa sawit, gudang, perumahan karyawan; tidak termasuk madrasah) NJOP Rp9.200.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp284.176.000", B: "Rp709.640.000", C: "Rp283.856.000", D: "Rp115.856.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pemakaman umum dan madrasah nirlaba yang terbuka untuk umum (2 ha) dikeluarkan dari emplasemen (Pasal 3 ayat (1) huruf a dan b UU PBB); areal produktif dinilai dari tanah ditambah Biaya Investasi Tanaman, sedangkan areal belum produktif hanya nilai tanahnya (Pasal 14 ayat (2) PMK 186/PMK.03/2019); NJOP objek dikurangi NJOPTKP Rp12.000.000, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["Areal produktif 12.000.000 m² × (3.500 + 7.000)", "Rp126.000.000.000"],
          ["Areal belum produktif 1.500.000 m² × 3.000", "Rp4.500.000.000"],
          ["Emplasemen kena pajak (30 − 1,2 − 0,8 = 28 ha) 280.000 m² × 8.000", "Rp2.240.000.000"],
          ["NJOP bumi", "Rp132.740.000.000"],
          ["+ NJOP bangunan", "Rp141.940.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp141.928.000.000"],
          ["NJKP 40%", "Rp56.771.200.000"],
          ["PBB 0,5%", "Rp283.856.000"]
        ],
        mengapaSalah: {
          A: "Pemakaman dan madrasah tidak dikeluarkan dari emplasemen (300.000 m² × 8.000), padahal keduanya objek yang dikecualikan",
          B: "Tarif 0,5% dikalikan langsung ke NJOP neto tanpa NJKP 40% (Pasal 1 huruf a PP 25/2002)",
          D: "Biaya Investasi Tanaman areal produktif tidak ditambahkan ke nilai tanah"
        },
        jebakan: "Selisih kunci dengan pengecoh yang lupa mengeluarkan pemakaman dan madrasah hanya Rp320.000; keluarkan dulu luas yang dikecualikan, dan tambahkan SIT hanya pada areal produktif."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-011",
      sejak: "9.5.0"
    },
    {
      id: "B8-142",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Di Kabupaten Berau terdapat empat areal pada 1 Januari 2026: (1) kawasan hutan suaka alam yang dikelilingi areal kerja PT Hijau Segah Lestari; (2) tanah negara bekas HGU yang haknya berakhir pada 2023 dan pada September 2025 telah diberikan HGU baru kepada PT Sawit Kelay Makmur untuk kebun kelapa sawit; (3) tanah penggembalaan ternak yang dikuasai oleh desa dan berbatasan dengan kebun PT Sawit Kelay Makmur; (4) areal hutan produksi yang telah dibebani perizinan berusaha pemanfaatan hasil hutan kayu atas nama PT Hijau Segah Lestari. Areal yang merupakan objek PBB-P5L adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) dan (4)", B: "(4) saja", C: "(2), (3), dan (4)", D: "(1), (2), (3), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf c UU PBB mengecualikan hutan suaka alam, tanah penggembalaan yang dikuasai oleh desa, dan tanah negara yang BELUM dibebani suatu hak. Tanah negara (2) sudah dibebani HGU baru sebelum 1 Januari 2026 sehingga menjadi objek sektor perkebunan, dan hutan produksi berizin (4) menjadi objek sektor perhutanan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Tanah negara hanya dikecualikan selama belum dibebani hak; HGU baru yang diberikan September 2025 menjadikan areal (2) objek pada 1 Januari 2026",
          C: "Tanah penggembalaan yang dikuasai oleh desa disebut tegas dalam pengecualian Pasal 3 ayat (1) huruf c",
          D: "Hutan suaka alam dan tanah penggembalaan desa dikecualikan, walaupun berbatasan atau dikelilingi areal usaha"
        },
        jebakan: "Kata kuncinya \"belum dibebani suatu hak\": begitu HGU atau izin diberikan sebelum 1 Januari, tanah negara menjadi objek PBB tahun itu."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-012",
      sejak: "9.5.0"
    },
    {
      id: "B8-143",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Tiga keadaan PBB-P5L Tahun Pajak 2026: (i) PT Kakao Lestari Luwu memiliki kebun kakao di Kabupaten Luwu (NJOP Rp21 miliar) dan di Kabupaten Kolaka (NJOP Rp9 miliar); NJOP kebun di Luwu dikurangi Rp12.000.000 sebelum dikalikan NJKP, sedangkan kebun di Kolaka tidak; (ii) PT Teh Puncak Sari yang tanamannya rusak berat karena serangan hama memohon keringanan dan memperoleh potongan 40% dari PBB terutang; (iii) bangunan di emplasemen kebun PT Sawit Andalas Raya dipakai cuma-cuma oleh yayasan untuk madrasah yang terbuka untuk umum dan tidak mencari keuntungan, sehingga tidak dihitung dalam PBB. Istilah yang tepat untuk (i), (ii), dan (iii) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pengurangan PBB – NJOPTKP – objek dikecualikan", B: "NJOPTKP – keberatan – objek dikecualikan", C: "Objek dikecualikan – pengurangan PBB – NJOPTKP", D: "NJOPTKP – pengurangan PBB – objek dikecualikan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "(i) adalah NJOPTKP Rp12.000.000 yang diberikan satu kali pada objek dengan NJOP terbesar (Penjelasan Pasal 3 ayat (3) UU PBB, PMK 23/PMK.03/2014); (ii) adalah pengurangan atas permohonan karena sebab lain yang luar biasa, yang dalam Penjelasan Pasal 19 ayat (1) huruf b mencakup hama tanaman; (iii) memenuhi pengecualian Pasal 3 ayat (1) huruf a (pendidikan, kepentingan umum, nirlaba).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pengurang tetap Rp12.000.000 pada objek terbesar adalah NJOPTKP, bukan pengurangan; potongan karena hama adalah pengurangan, bukan NJOPTKP",
          B: "Keberatan menyangkut kebenaran isi SPPT, sedangkan potongan karena hama adalah pengurangan atas permohonan menurut Pasal 19",
          C: "Urutannya tertukar: pengurang Rp12.000.000 tidak mengeluarkan objek, dan madrasah nirlaba dikecualikan, bukan diberi NJOPTKP"
        },
        jebakan: "Hama tanaman termasuk \"sebab lain yang luar biasa\" (Penjelasan Pasal 19), jadi jalurnya pengurangan, bukan keberatan; NJOPTKP selalu melekat pada objek dengan NJOP terbesar."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-013",
      sejak: "9.5.0"
    },
    {
      id: "B8-144",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Bangunan wisma tamu di emplasemen kebun teh PT Puncak Embun Lestari sejak 2021 disewakan secara komersial kepada wisatawan. Pada 15 April 2026 bangunan itu dialihfungsikan dan dipakai cuma-cuma oleh yayasan sebagai sekolah dasar umum yang tidak dimaksudkan untuk memperoleh keuntungan, dan keadaan itu masih berlangsung pada 1 Januari 2027. Data lain objek tidak berubah. Perlakuan PBB-P5L atas bangunan tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tahun Pajak 2026 terutang secara proporsional hanya untuk Januari sampai pertengahan April 2026", B: "Tahun Pajak 2026 tetap terutang penuh; mulai Tahun Pajak 2027 dikecualikan karena keadaan 1 Januari 2027 memenuhi syarat", C: "Dikecualikan sejak 15 April 2026, sehingga SPPT Tahun Pajak 2026 atas bangunan itu dibatalkan seluruhnya", D: "Tetap terutang pada 2026 dan seterusnya karena bangunan berada di areal HGU dan dimiliki perusahaan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Saat yang menentukan pajak terutang adalah keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB). Pada 1 Januari 2026 wisma masih komersial, sehingga PBB 2026 terutang penuh; pada 1 Januari 2027 bangunan dipakai semata-mata untuk pendidikan umum nirlaba, sehingga memenuhi Pasal 3 ayat (1) huruf a mulai Tahun Pajak 2027.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PBB tidak dihitung proporsional dalam tahun berjalan; keadaan 1 Januari menentukan pajak setahun penuh",
          C: "Perubahan penggunaan setelah 1 Januari 2026 tidak mengubah pajak 2026, sehingga tidak ada dasar membatalkan SPPT 2026",
          D: "Pengecualian huruf a melekat pada penggunaan objek, bukan pada letak di areal HGU atau pemiliknya"
        },
        jebakan: "Arah perubahan dibalik (dari komersial menjadi nirlaba), tetapi aturannya sama: Pasal 3 diuji pada keadaan 1 Januari (Pasal 8 ayat (2))."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-014",
      sejak: "9.5.0"
    },
    {
      id: "B8-145",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "PT Sawit Tanjung Harapan memiliki aset berikut di dalam kawasan kebun dan pabrik kelapa sawitnya di Kabupaten Kotawaringin Timur: truk pengangkut tandan buah segar dari blok kebun ke pabrik, genset portabel beroda yang dipindahkan antarblok, jalan beton di dalam kompleks pabrik dan emplasemen yang menyatu dengan kompleks bangunan pabrik, serta ekskavator yang dipakai bergiliran untuk merawat parit kebun. Aset yang termasuk bangunan objek PBB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Truk pengangkut tandan buah segar ke pabrik", B: "Genset portabel beroda yang dipindahkan antarblok", C: "Jalan beton di dalam kompleks pabrik dan emplasemen", D: "Ekskavator untuk merawat parit kebun" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Bangunan adalah konstruksi teknik yang ditanam atau dilekatkan secara tetap pada tanah dan/atau perairan (Pasal 1 angka 2 UU PBB); Penjelasannya menyebut jalan lingkungan dalam kompleks pabrik dan emplasemennya yang merupakan satu kesatuan dengan kompleks bangunan. Truk, genset beroda, dan ekskavator adalah benda bergerak.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Truk adalah kendaraan yang bergerak, tidak ditanam atau dilekatkan secara tetap pada tanah",
          B: "Genset beroda yang dipindah-pindah tidak melekat tetap pada tanah, walaupun dipakai untuk produksi",
          D: "Ekskavator adalah alat berat bergerak; fungsinya merawat kebun tidak menjadikannya bangunan"
        },
        jebakan: "Ukurannya keterlekatan tetap pada tanah, bukan fungsi produksi; jalan dalam kompleks pabrik dan emplasemen disebut tegas sebagai bangunan dalam Penjelasan Pasal 1 angka 2."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-015",
      sejak: "9.5.0"
    },
    {
      id: "B8-146",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "PT Tambang Nikel Lasolo memiliki objek PBB sektor pertambangan mineral di Kabupaten Konawe Utara dengan NJOP bumi Rp63.250.000.000 dan NJOP bangunan Rp5.150.000.000 menurut SPPT Tahun Pajak 2026. Perusahaan tidak memiliki objek PBB-P5L lain. Besarnya PBB-P5L terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp341.940.000", B: "Rp136.800.000", C: "Rp68.388.000", D: "Rp136.776.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PBB = 0,5% × 40% × (NJOP − NJOPTKP); objek pertambangan memakai NJKP 40% (Pasal 1 huruf a PP 25/2002) dan NJOPTKP Rp12.000.000 karena hanya ada satu objek.",
        jejakHitung: [
          ["NJOP objek 63.250.000.000 + 5.150.000.000", "Rp68.400.000.000"],
          ["− NJOPTKP", "Rp68.388.000.000"],
          ["NJKP 40%", "Rp27.355.200.000"],
          ["PBB 0,5%", "Rp136.776.000"]
        ],
        mengapaSalah: {
          A: "Tarif 0,5% dikalikan ke NJOP neto tanpa NJKP 40%",
          B: "NJOPTKP Rp12.000.000 tidak dikurangkan",
          C: "Memakai NJKP 20%, padahal objek pertambangan selalu 40% berapa pun NJOP-nya"
        },
        jebakan: "Tarif efektif sektor perkebunan, perhutanan, dan pertambangan = 0,2% dari NJOP setelah NJOPTKP."
      },
      dasarHukum: [{ pasal: "Pasal 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-016",
      sejak: "9.5.0"
    },
    {
      id: "B8-147",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 6 ayat (3) UU PBB: Dasar penghitungan pajak adalah Nilai Jual Kena Pajak yang ditetapkan serendah-rendahnya 20% (dua puluh persen) dan setinggi-tingginya 100% (seratus persen) dari nilai jual obyek pajak. Pasal 1 huruf b PP 25/2002: objek pajak lainnya: 1) sebesar 40% (empat puluh persen) dari Nilai Jual Objek Pajak apabila Nilai Jual Objek Pajaknya Rp1.000.000.000,00 (satu miliar rupiah) atau lebih; 2) sebesar 20% (dua puluh persen) dari Nilai Jual Objek Pajak apabila Nilai Jual Objek Pajaknya kurang dari Rp1.000.000.000,00 (satu miliar rupiah). Pasal 5 UU PBB: Tarif pajak yang dikenakan atas obyek pajak adalah sebesar 0,5% (lima persepuluh persen). Pasal 2 ayat (3) PMK 23/PMK.03/2014: Besarnya NJOPTKP sebagaimana dimaksud pada ayat (2) ditetapkan sebesar Rp12.000.000,00 (dua belas juta rupiah).",
      stem: "PT Kabel Samudra Nusantara memiliki jaringan kabel telekomunikasi bawah laut yang ditanam di dasar perairan Selat Alas, dan objek itu diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (areal perairan yang digunakan untuk jaringan kabel) Rp415.000.000 dan NJOP bangunan (jaringan kabel) Rp690.000.000, dalam satu objek pajak. Perusahaan tidak memiliki objek PBB-P5L lain. Berdasarkan kutipan tersebut, PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.186.000", B: "Rp1.093.000", C: "Rp2.210.000", D: "Rp5.465.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya memakai Pasal 1 huruf b PP 25/2002: persentase NJKP ditentukan dari NJOP objek, yaitu NJOP bumi ditambah NJOP bangunan. NJOP objek Rp1.105.000.000 (Rp1 miliar atau lebih) sehingga NJKP 40%; jaringan kabel di perairan adalah bangunan sektor lainnya (Pasal 9 ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022). Setelah NJOPTKP pun dasarnya tetap di atas Rp1 miliar.",
        jejakHitung: [
          ["NJOP objek 415.000.000 + 690.000.000", "Rp1.105.000.000"],
          ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"],
          ["NJOP − NJOPTKP", "Rp1.093.000.000"],
          ["NJKP 40%", "Rp437.200.000"],
          ["PBB 0,5%", "Rp2.186.000"]
        ],
        mengapaSalah: {
          B: "NJKP 20% dipakai karena NJOP bumi dan NJOP bangunan masing-masing di bawah Rp1 miliar, padahal batas diuji pada NJOP objek",
          C: "NJOPTKP Rp12.000.000 lupa dikurangkan (1.105.000.000 × 0,2%)",
          D: "Tarif dikalikan ke NJOP neto tanpa NJKP"
        },
        jebakan: "Batas Rp1 miliar diuji pada NJOP objek (bumi + bangunan), bukan per komponen; sektor lainnya tidak otomatis 20% maupun 40%."
      },
      dasarHukum: [{ pasal: "Pasal 5, Pasal 6 ayat (3), dan Pasal 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (2) dan ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8 ayat (1) huruf d, dan Pasal 9 ayat (2) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-017",
      sejak: "9.5.0"
    },
    {
      id: "B8-148",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Agro Tiga Serangkai memiliki dua objek PBB-P5L Tahun Pajak 2026 atas nama wajib pajak yang sama: kebun kakao di Kabupaten Polewali Mandar dengan NJOP Rp52.400.000.000 dan kebun kelapa sawit di Kabupaten Mamuju Tengah dengan NJOP Rp87.900.000.000. Masing-masing kebun memiliki SPPT sendiri. Besarnya PBB-P5L yang tercantum dalam SPPT kebun kelapa sawit adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp175.800.000", B: "Rp175.776.000", C: "Rp280.576.000", D: "Rp439.440.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "NJOPTKP diberikan satu kali untuk setiap wajib pajak pada objek yang nilainya terbesar (Penjelasan Pasal 3 ayat (3) UU PBB). Kebun kelapa sawit (Rp87,9 miliar) adalah objek terbesar, sehingga SPPT-nya memperoleh pengurang Rp12.000.000; kebun kakao dikenai penuh.",
        jejakHitung: [
          ["NJOPTKP diberikan pada objek ber-NJOP terbesar", "kebun kelapa sawit (Rp87,9 miliar)"],
          ["NJOP kebun sawit − NJOPTKP", "Rp87.888.000.000"],
          ["NJKP 40%", "Rp35.155.200.000"],
          ["PBB 0,5%", "Rp175.776.000"],
          ["Pembanding: SPPT kebun kakao (52.400.000.000 × 0,2%)", "Rp104.800.000"]
        ],
        mengapaSalah: {
          A: "NJOPTKP diberikan pada kebun yang disebut pertama (kakao), sehingga kebun sawit dihitung penuh; yang benar NJOPTKP pada objek terbesar",
          C: "Menjumlahkan kedua kebun, padahal yang ditanya SPPT kebun kelapa sawit saja",
          D: "NJKP 40% terlupa (0,5% × NJOP neto)"
        },
        jebakan: "Kebun terbesar disebut terakhir; jangan memberi NJOPTKP pada objek yang disebut pertama."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (2) dan ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-018",
      sejak: "9.5.0"
    },
    {
      id: "B8-149",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Staf pajak PT Agro Rimba Sentosa, yang memiliki kebun kelapa sawit di Kabupaten Ketapang dan areal hutan tanaman industri di Kabupaten Sanggau, menyusun lembar kerja simulasi PBB-P5L 2026 dengan parameter berikut: (1) tarif 0,5%; (2) NJKP 40% untuk kedua objek; (3) NJOPTKP Rp12.000.000 dikurangkan dari NJOP masing-masing objek, sehingga setiap SPPT memperoleh pengurang; (4) NJOP sebagai dasar pengenaan pajak. Parameter yang tidak tepat dan harus diperbaiki adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "Parameter (2), karena objek perhutanan memakai NJKP 20% bila NJOP-nya kurang dari Rp1 miliar", B: "Parameter (3), karena NJOPTKP hanya diberikan sekali, yaitu pada objek dengan NJOP terbesar", C: "Parameter (4), karena dasar pengenaan PBB adalah NJKP setelah dikurangi NJOPTKP", D: "Parameter (1), karena tarif PBB-P5L untuk sektor perkebunan dan perhutanan adalah 0,2%" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "NJOPTKP Rp12.000.000 diberikan untuk setiap wajib pajak, dan bila wajib pajak memiliki beberapa objek hanya diberikan pada satu objek yang nilainya terbesar (Pasal 2 ayat (2) PMK 23/PMK.03/2014; Penjelasan Pasal 3 ayat (3) UU PBB). Tarif 0,5%, NJKP 40% untuk perkebunan dan kehutanan, dan NJOP sebagai dasar pengenaan sudah tepat.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 1 huruf a PP 25/2002 menetapkan NJKP 40% untuk objek kehutanan tanpa batas NJOP; batas Rp1 miliar hanya untuk objek lainnya",
          C: "Pasal 6 ayat (1): dasar pengenaan adalah NJOP; NJKP adalah dasar penghitungan (Pasal 6 ayat (3) dan Pasal 7)",
          D: "Tarif PBB tetap 0,5% (Pasal 5); 0,2% hanyalah tarif efektif hasil 0,5% × NJKP 40%"
        },
        jebakan: "Yang keliru bukan besarnya NJOPTKP, tetapi cara memberikannya: satu kali per wajib pajak, pada objek terbesar."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (2) dan ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 5 dan 6 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-019",
      sejak: "9.5.0"
    },
    {
      id: "B8-150",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Batubara Kedang Jaya, pemegang IUP operasi produksi, memiliki objek berikut pada 1 Januari 2026: (1) areal IUP di Kabupaten Kutai Barat dengan NJOP bumi Rp31.500.000.000 serta bangunan di dalam kawasan tambang (kantor tambang, bengkel, dan fasilitas stockpile) dengan NJOP Rp4.250.000.000, tercantum dalam satu SPPT; (2) gedung kantor perwakilan di Kota Samarinda, di luar kawasan pertambangan dan terpisah secara fisik, dengan NJOP Rp9.600.000.000. Perusahaan tidak memiliki objek lain. Konsultan diminta menghitung PBB yang ditetapkan dan diadministrasikan Direktorat Jenderal Pajak untuk Tahun Pajak 2026. Jumlahnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp71.476.000", B: "Rp90.676.000", C: "Rp62.976.000", D: "Rp178.690.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Bumi dan bangunan di dalam kawasan pertambangan batubara adalah objek PBB-P5L sektor pertambangan mineral atau batubara (Pasal 2 huruf e PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022); kantor perwakilan di luar kawasan usaha pertambangan adalah objek PBB-P2 yang dipungut Pemerintah Kota Samarinda (Pasal 38 ayat (1) UU 1/2022).",
        jejakHitung: [
          ["Objek yang diadministrasikan DJP", "areal IUP + bangunan dalam kawasan (kantor perwakilan = PBB-P2)"],
          ["NJOP 31.500.000.000 + 4.250.000.000", "Rp35.750.000.000"],
          ["− NJOPTKP", "Rp35.738.000.000"],
          ["NJKP 40%", "Rp14.295.200.000"],
          ["PBB 0,5%", "Rp71.476.000"]
        ],
        mengapaSalah: {
          B: "Kantor perwakilan ikut dihitung sebagai PBB-P5L ((45.350.000.000 − 12.000.000) × 0,2%), padahal objek PBB-P2",
          C: "Bangunan di dalam kawasan tambang dikeluarkan, padahal objek sektor pertambangan meliputi bumi dan/atau bangunan dalam kawasan",
          D: "Tarif 0,5% dikalikan tanpa NJKP 40%"
        },
        jebakan: "Pisahkan rezim berdasarkan letak terhadap kawasan usaha, bukan berdasarkan jenis bangunan: kantor di dalam kawasan tambang tetap P5L, kantor di kota adalah P2."
      },
      dasarHukum: [{ pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 2 huruf e PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-020",
      sejak: "9.5.0"
    },
    {
      id: "B8-151",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 15 ayat (3) UU PBB: \"Keberatan harus diajukan dalam jangka waktu 3 (tiga) bulan sejak tanggal diterimanya surat sebagaimana dimaksud dalam ayat (1) oleh wajib pajak, kecuali apabila wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan diluar kekuasaannya.\" Pasal 15 ayat (6) UU PBB: \"Pengajuan keberatan tidak menunda kewajiban membayar pajak.\"",
      stem: "PT Hutan Tanaman Kencana memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Kapuas Hulu. NJOP bumi arealnya sudah naik dalam SPPT 2025, lalu dalam SPPT 2026 yang diterima pada 21 April 2026 naik lagi dari Rp96.000.000.000 menjadi Rp131.000.000.000 karena pembangunan jalan nasional dan kawasan industri di sekitarnya. Direktur keuangan berpendapat NJOP baru boleh dinaikkan lagi tiga tahun setelah kenaikan terakhir. Ia berencana mengajukan keberatan dan menunda pembayaran PBB 2026 sampai keberatan diputus. Berdasarkan kutipan tersebut dan ketentuan UU PBB lainnya, tanggapan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Pendapat direktur tepat; NJOP hanya boleh ditetapkan tiga tahun sekali sehingga PBB 2026 cukup dibayar sebesar PBB 2025 sampai keberatan diputus", B: "Pendapat direktur tidak tepat; NJOP dapat ditetapkan setiap tahun untuk daerah tertentu. Keberatan paling lambat 20 Juli 2026 dan tidak menunda pelunasan SPPT paling lambat 20 Oktober 2026", C: "Pendapat direktur tidak tepat; NJOP dapat ditetapkan setiap tahun untuk daerah tertentu. Keberatan paling lambat 20 Juli 2026 dan pelunasan SPPT ditunda sampai keberatan diputus", D: "Pendapat direktur tidak tepat; NJOP dapat ditetapkan setiap tahun, tetapi SPPT bukan objek keberatan sehingga perusahaan hanya dapat mengajukan pengurangan sebelum 20 Oktober 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 6 ayat (2) UU PBB menetapkan NJOP tiga tahun sekali, kecuali untuk daerah tertentu ditetapkan setiap tahun sesuai perkembangan daerahnya, sehingga kenaikan dua tahun berturut-turut tidak batal. Keberatan atas SPPT (Pasal 15 ayat (1) huruf a) diajukan dalam 3 bulan sejak SPPT diterima, dan menurut Pasal 15 ayat (6) keberatan tidak menunda kewajiban membayar, sehingga SPPT tetap dilunasi dalam 6 bulan sejak diterima (Pasal 11 ayat (1)).",
        jejakHitung: [
          ["SPPT diterima", "21 April 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "20 Juli 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Frasa \"kecuali untuk daerah tertentu ditetapkan setiap tahun\" dalam Pasal 6 ayat (2) diabaikan",
          C: "Pasal 15 ayat (6) menegaskan pengajuan keberatan tidak menunda kewajiban membayar pajak",
          D: "Pasal 15 ayat (1) huruf a menyebut SPPT sebagai surat yang dapat diajukan keberatan"
        },
        jebakan: "Dua kesalahan sekaligus dalam rencana direksi: anggapan NJOP terkunci tiga tahun dan anggapan keberatan menunda pembayaran. Jangka waktu dihitung dengan tanggal diterima sebagai hari pertama (contoh Penjelasan Pasal 11 ayat (1) UU PBB)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1)–(2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "B8-021",
      sejak: "9.5.0"
    },
    {
      id: "B8-152",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Kebun Lada Sejahtera hanya memiliki satu objek PBB-P5L sektor perkebunan di Kabupaten Bangka Tengah. Karena sebagian areal kebun dilepaskan kepada pemerintah daerah untuk proyek jalan, NJOP objek itu turun dari Rp245.000.000.000 pada Tahun Pajak 2025 menjadi Rp212.500.000.000 pada Tahun Pajak 2026. Tarif, persentase NJKP, dan NJOPTKP tidak berubah. Penurunan PBB-P5L 2026 dibanding 2025 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp65.000.000", B: "Rp162.500.000", C: "Rp32.500.000", D: "Rp64.976.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PBB-P5L = 0,5% × 40% × (NJOP − NJOPTKP Rp12.000.000). NJOPTKP yang sama pada kedua tahun saling meniadakan, sehingga penurunan PBB = 0,2% × penurunan NJOP Rp32.500.000.000.",
        jejakHitung: [
          ["PBB 2025 = (245.000.000.000 − 12.000.000) × 40% × 0,5%", "Rp489.976.000"],
          ["PBB 2026 = (212.500.000.000 − 12.000.000) × 40% × 0,5%", "Rp424.976.000"],
          ["Penurunan", "Rp65.000.000"]
        ],
        mengapaSalah: {
          B: "Tarif 0,5% dikalikan langsung ke selisih NJOP tanpa NJKP 40%",
          C: "Memakai NJKP 20%, padahal objek perkebunan memakai 40% (Pasal 1 huruf a PP 25/2002)",
          D: "NJOPTKP dikurangkan lagi dari selisih NJOP, padahal sudah dikurangkan pada masing-masing tahun"
        },
        jebakan: "Pada soal selisih antartahun, NJOPTKP yang sama di dua tahun tidak memengaruhi selisih PBB."
      },
      dasarHukum: [{ pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-022",
      sejak: "9.5.0"
    },
    {
      id: "B8-153",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B8-12",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-12: PT Getah Batanghari Lestari memegang HGU kebun karet di Kabupaten Batanghari dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: (1) blok karet yang sedang disadap 1.850 ha, nilai tanah Rp3.800/m² dan SIT Rp4.600/m²; (2) blok karet yang ditanam pada 2024 dan belum disadap 420 ha, nilai tanah Rp3.800/m² dan SIT Rp2.900/m²; (3) areal pembibitan dan lahan yang sudah diolah tetapi belum ditanami, seluruhnya 280 ha, nilai tanah Rp3.800/m²; (4) areal emplasemen 25 ha, Rp14.000/m²; (5) tebing curam dan rawa yang tidak dapat diusahakan 95 ha, Rp900/m²; bangunan (pabrik crumb rubber, kantor kebun, perumahan karyawan, jalan kebun) NJOP Rp41.300.000.000. Berapa NJOP bumi seluruhnya?",
      kataKualifikasi: [],
      opsi: { A: "Rp186.355.000.000", B: "Rp197.680.000.000", C: "Rp198.535.000.000", D: "Rp101.255.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "NJOP bumi perkebunan = jumlah NJOP tiap areal (Pasal 14 ayat (3) PMK 186/2019). Areal produktif adalah areal yang telah ditanami, termasuk blok yang belum disadap, dan dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT). Pembibitan dan lahan yang belum ditanami adalah areal belum produktif; areal ini, emplasemen, dan areal tidak produktif dinilai dengan nilai tanah per m².",
        jejakHitung: [
          ["Blok disadap 18.500.000 m² × (3.800 + 4.600)", "Rp155.400.000.000"],
          ["Blok belum disadap 4.200.000 m² × (3.800 + 2.900)", "Rp28.140.000.000"],
          ["Belum produktif 2.800.000 m² × 3.800", "Rp10.640.000.000"],
          ["Emplasemen 250.000 m² × 14.000", "Rp3.500.000.000"],
          ["Tidak produktif 950.000 m² × 900", "Rp855.000.000"],
          ["NJOP bumi", "Rp198.535.000.000"]
        ],
        mengapaSalah: {
          A: "Blok karet yang belum disadap dianggap belum produktif sehingga SIT-nya dibuang (−Rp12.180.000.000)",
          B: "Tebing dan rawa dianggap bukan objek, padahal areal tidak produktif tetap dinilai (−Rp855.000.000)",
          D: "SIT seluruh areal produktif terlupa sehingga hanya nilai tanah yang dihitung"
        },
        jebakan: "1 ha = 10.000 m². Ukuran areal produktif adalah sudah ditanami, bukan sudah disadap atau menghasilkan; pembibitan justru termasuk areal belum produktif (Pasal 14 ayat (1) huruf a dan b PMK 186/2019)."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1), ayat (2), dan ayat (3) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 6 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "B8-023",
      sejak: "9.5.0"
    },
    {
      id: "B8-154",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B8-12",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-12 (PT Getah Batanghari Lestari, satu-satunya objek: blok karet disadap 1.850 ha dengan nilai tanah Rp3.800/m² dan SIT Rp4.600/m²; blok karet tanam 2024 yang belum disadap 420 ha dengan nilai tanah Rp3.800/m² dan SIT Rp2.900/m²; pembibitan dan lahan diolah yang belum ditanami 280 ha Rp3.800/m²; emplasemen 25 ha Rp14.000/m²; tebing dan rawa yang tidak dapat diusahakan 95 ha Rp900/m²; bangunan pabrik, kantor, perumahan, dan jalan kebun Rp41.300.000.000). PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp455.286.000", B: "Rp397.046.000", C: "Rp1.199.115.000", D: "Rp479.646.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "PBB = 0,5% × 40% × (NJOP bumi + NJOP bangunan − NJOPTKP Rp12.000.000). NJOP bumi memakai SIT pada semua blok yang telah ditanami, termasuk yang belum disadap; bangunan dalam kawasan kebun ikut dijumlahkan.",
        jejakHitung: [
          ["NJOP bumi (lihat soal sebelumnya)", "Rp198.535.000.000"],
          ["+ NJOP bangunan", "Rp239.835.000.000"],
          ["− NJOPTKP", "Rp239.823.000.000"],
          ["NJKP 40%", "Rp95.929.200.000"],
          ["PBB 0,5%", "Rp479.646.000"]
        ],
        mengapaSalah: {
          A: "Blok belum disadap dinilai tanpa SIT (NJOP bumi Rp186.355.000.000)",
          B: "NJOP bangunan pabrik, kantor, perumahan, dan jalan kebun tidak dijumlahkan",
          C: "Tarif 0,5% dikalikan tanpa NJKP 40%"
        },
        jebakan: "Lima langkah hitung; tiap kesalahan satu langkah muncul sebagai pengecoh. Areal produktif perkebunan ditentukan oleh sudah ditanami (Pasal 14 ayat (1) huruf a PMK 186/2019)."
      },
      dasarHukum: [{ pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-024",
      sejak: "9.5.0"
    },
    {
      id: "B8-155",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B8-12",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-12: SPPT PBB-P5L 2026 PT Getah Batanghari Lestari sebesar Rp479.646.000 diterima pada 24 Maret 2026. Karena kesulitan arus kas, PBB itu baru dilunasi seluruhnya pada 10 November 2026. Untuk PPh Badan Tahun Pajak 2026 (tahun buku kalender), staf pajak menelaah sanksi dan perlakuan fiskalnya. Bagian dari bulan dihitung satu bulan penuh. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Denda Rp19.185.840 untuk 2 bulan ditagih dengan STP; PBB Rp479.646.000 dapat dibiayakan, sedangkan dendanya tidak dapat dikurangkan", B: "Denda Rp9.592.920 untuk 1 bulan ditagih dengan STP; PBB Rp479.646.000 dapat dibiayakan, sedangkan dendanya tidak dapat dikurangkan", C: "Denda Rp19.185.840 untuk 2 bulan ditagih dengan STP; PBB dan dendanya sama-sama dapat dibiayakan sebesar Rp498.831.840", D: "Dikenai bunga Pasal 9 ayat (2a) UU KUP dengan tarif bunga KMK; PBB Rp479.646.000 dapat dibiayakan, sedangkan bunganya tidak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo SPPT 6 bulan sejak diterima, yaitu 23 September 2026. Keterlambatan sampai 10 November 2026 adalah 1 bulan lebih, dihitung 2 bulan penuh, sehingga denda Pasal 11 ayat (3) UU PBB = 2 × 2% dan ditagih dengan STP (Pasal 11 ayat (4)). Dalam PPh Badan, PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a UU PPh), sedangkan denda tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh).",
        jejakHitung: [
          ["SPPT diterima", "24 Maret 2026"],
          ["Jatuh tempo (6 bulan sejak diterima)", "23 September 2026"],
          ["Bulan ke-1 keterlambatan", "24 September s.d. 23 Oktober 2026"],
          ["Bulan ke-2 (dibayar 10 November 2026)", "24 Oktober s.d. 23 November 2026"],
          ["Denda 2 × 2% × 479.646.000", "Rp19.185.840"],
          ["Biaya fiskal PBB", "Rp479.646.000"],
          ["Denda", "tidak dapat dikurangkan"]
        ],
        mengapaSalah: {
          B: "Sisa 18 hari pada bulan kedua tidak dihitung, padahal bagian dari bulan dihitung satu bulan penuh",
          C: "Pasal 9 ayat (1) huruf k UU PPh melarang pembebanan sanksi administrasi berupa denda",
          D: "Sanksi keterlambatan PBB adalah denda 2% sebulan menurut Pasal 11 ayat (3) UU PBB, bukan bunga Pasal 9 ayat (2a) UU KUP"
        },
        jebakan: "Soal lintas kelompok: sanksinya menurut UU PBB, perlakuan biayanya menurut UU PPh. Hitung bulan keterlambatan mulai sehari setelah jatuh tempo."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-025",
      sejak: "9.5.0"
    },
    {
      id: "B8-156",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Rimba Ekaliptus Andalan memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Tanjung Jabung Barat dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal tanaman pokok umur 4 sampai 6 tahun 8.500 ha dengan nilai tanah Rp1.600/m² dan SIT Rp3.100/m²; areal yang baru ditanami pada 2025 seluas 2.300 ha dengan nilai tanah Rp1.600/m² dan SIT Rp1.400/m²; areal yang belum ditanami seluas 2.100 ha (1.200 ha sudah diolah, 900 ha belum diolah) dengan nilai tanah Rp1.600/m²; areal emplasemen/base camp 15 ha Rp9.500/m²; bangunan (kantor lapangan, mess, gudang, jalan angkut) NJOP Rp12.750.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp968.126.000", B: "Rp516.263.000", C: "Rp1.007.026.000", D: "Rp1.032.526.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Pada hutan tanaman, areal yang telah ditanami, termasuk tanaman yang baru ditanam pada 2025, adalah areal produktif dan dinilai tanah ditambah pengembangan tanah berupa tanaman (Biaya Investasi Tanaman, di soal disebut SIT). Areal yang belum ditanami, sudah atau belum diolah, adalah areal belum produktif dan, seperti emplasemen, hanya dinilai nilai tanah. NJOP bumi ditambah bangunan, dikurangi NJOPTKP, lalu dikali 40% dan 0,5%.",
        jejakHitung: [
          ["Tanaman pokok 85.000.000 m² × (1.600 + 3.100)", "Rp399.500.000.000"],
          ["Tanaman 2025: 23.000.000 m² × (1.600 + 1.400)", "Rp69.000.000.000"],
          ["Belum ditanami 21.000.000 m² × 1.600", "Rp33.600.000.000"],
          ["Emplasemen 150.000 m² × 9.500", "Rp1.425.000.000"],
          ["NJOP bumi + bangunan", "Rp516.275.000.000"],
          ["− NJOPTKP", "Rp516.263.000.000"],
          ["× 40% × 0,5%", "Rp1.032.526.000"]
        ],
        mengapaSalah: {
          A: "Tanaman yang baru ditanam pada 2025 dianggap areal belum produktif sehingga SIT-nya dibuang (−Rp32.200.000.000 NJOP)",
          B: "Memakai NJKP 20%, padahal sektor kehutanan 40% (Pasal 1 huruf a PP 25/2002)",
          C: "NJOP bangunan kantor, mess, gudang, dan jalan angkut tidak dijumlahkan"
        },
        jebakan: "Tanaman muda yang sudah ditanam tetap areal produktif (Pasal 15 ayat (1) huruf a angka 2 PMK 186/2019); areal belum produktif adalah yang belum ditanami, baik sudah maupun belum diolah (huruf b angka 2)."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-026",
      sejak: "9.5.0"
    },
    {
      id: "B8-157",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Nikel Lembah Konawe (IUP operasi produksi nikel; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian Tahun Pajak 2026: permukaan bumi areal belum dimanfaatkan 2.600 ha dengan nilai Rp2.200/m²; areal cadangan produksi 1.100 ha dengan nilai Rp2.640/m²; areal emplasemen 60 ha dengan nilai Rp12.000/m²; untuk tubuh bumi operasi produksi, pendapatan kotor nikel tahun 2025 Rp410.000.000.000, biaya produksi yang memenuhi kriteria Rp335.000.000.000, dan angka kapitalisasi 6,8 (data penilaian); bangunan (bengkel, kantor tambang, mess, jalan hauling, dermaga khusus) NJOP Rp72.500.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp331.856.000", B: "Rp1.351.856.000", C: "Rp481.856.000", D: "Rp5.907.856.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi objek pertambangan meliputi permukaan bumi dan tubuh bumi (Pasal 1 angka 1 UU PBB; Pasal 7 ayat (1) PMK 186/2019). NJOP tubuh bumi operasi produksi = pendapatan bersih mineral × angka kapitalisasi (Pasal 21 ayat (7) huruf b), dan pendapatan bersih = pendapatan kotor dikurangi biaya produksi (Pasal 22 ayat (1)) = Rp75.000.000.000 × 6,8. Hasilnya dijumlahkan dengan permukaan bumi dan bangunan.",
        jejakHitung: [
          ["Belum dimanfaatkan 26.000.000 m² × 2.200", "Rp57.200.000.000"],
          ["Cadangan produksi 11.000.000 m² × 2.640", "Rp29.040.000.000"],
          ["Emplasemen 600.000 m² × 12.000", "Rp7.200.000.000"],
          ["Tubuh bumi (410 M − 335 M) × 6,8", "Rp510.000.000.000"],
          ["+ Bangunan", "Rp675.940.000.000"],
          ["− NJOPTKP", "Rp675.928.000.000"],
          ["× 40% × 0,5%", "Rp1.351.856.000"]
        ],
        mengapaSalah: {
          A: "Tubuh bumi terlupa sehingga hanya permukaan dan bangunan yang dihitung",
          C: "Pendapatan bersih Rp75.000.000.000 dipakai langsung tanpa dikalikan angka kapitalisasi",
          D: "Pendapatan kotor dikalikan angka kapitalisasi tanpa dikurangi biaya produksi (Pasal 22 ayat (1))"
        },
        jebakan: "Pada sektor minerba, porsi terbesar NJOP sering justru tubuh bumi, dan dasarnya pendapatan bersih, bukan pendapatan kotor. Bandingkan migas, yang memakai penjualan kotor (Pasal 18 ayat (1) PMK 186/2019)."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 7 ayat (1), Pasal 21 ayat (7) huruf b, dan Pasal 22 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-027",
      sejak: "9.5.0"
    },
    {
      id: "B8-158",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Laporan kebun PT Sawit Tanjung Harapan per 1 Januari 2026 memuat: (1) blok kelapa sawit yang ditanam delapan bulan lalu dan belum berbuah; (2) areal pembibitan berisi bibit kelapa sawit dalam polybag; (3) lahan gambut dalam di dalam HGU yang menurut kajian tidak dapat diusahakan untuk perkebunan; (4) lahan yang sudah dibuka dan diolah tetapi masih menunggu penanaman. Dalam penilaian NJOP bumi sektor perkebunan, pengelompokan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) areal belum produktif karena belum menghasilkan; (2) areal belum produktif; (3) areal tidak produktif; (4) areal belum produktif", B: "(1) areal produktif dengan tambahan SIT; (2) areal produktif dengan tambahan SIT karena sudah ada tanaman; (3) areal tidak produktif; (4) areal belum produktif", C: "(1) areal produktif dengan tambahan SIT; (2) areal belum produktif; (3) areal tidak produktif; (4) areal belum produktif", D: "(1) areal produktif dengan tambahan SIT; (2) areal belum produktif; (3) dikecualikan dari PBB karena tidak dapat diusahakan; (4) areal belum produktif" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 14 ayat (1) PMK 186/2019: areal produktif perkebunan adalah areal yang telah ditanami tanaman perkebunan (tanah ditambah pengembangan tanah berupa tanaman), sehingga blok yang belum berbuah tetap produktif; areal belum produktif adalah areal yang belum ditanami, yaitu areal yang belum diolah, sudah diolah tetapi belum ditanami, dan areal pembibitan; areal yang tidak dapat diusahakan untuk usaha perkebunan adalah areal tidak produktif dan tetap dinilai.",
        jejakHitung: [
          ["(1) Telah ditanami, belum berbuah", "Areal produktif (Pasal 14 ayat (1) huruf a)"],
          ["(2) Pembibitan", "Areal belum produktif (huruf b)"],
          ["(3) Tidak dapat diusahakan", "Areal tidak produktif (huruf c)"],
          ["(4) Sudah diolah, belum ditanami", "Areal belum produktif (huruf b)"]
        ],
        mengapaSalah: {
          A: "Ukuran areal produktif adalah sudah ditanami, bukan sudah menghasilkan",
          B: "Pasal 14 ayat (1) huruf b menyebut areal pembibitan secara tegas sebagai areal belum produktif",
          D: "Gambut di dalam HGU bukan objek Pasal 3 ayat (1) UU PBB; Pasal 14 ayat (1) huruf c menggolongkannya sebagai areal tidak produktif yang tetap dinilai"
        },
        jebakan: "\"Belum produktif\" berarti belum ditanami (termasuk pembibitan), bukan belum berbuah. \"Tidak produktif\" tetap objek dan tetap dinilai dengan nilai tanah."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 3 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-028",
      sejak: "9.5.0"
    },
    {
      id: "B8-159",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Petro Lembah Jambi, kontraktor kontrak kerja sama dengan wilayah kerja onshore di Kabupaten Tanjung Jabung Timur (satu-satunya objek PBB-P5L wajib pajak ini), memiliki data penilaian Tahun Pajak 2026: areal produktif (tapak sumur dan fasilitas produksi) 360 ha dengan nilai Rp8.200/m²; areal emplasemen 35 ha dengan nilai Rp11.000/m²; areal tidak produktif 1.900 ha dengan nilai Rp1.300/m²; tubuh bumi tahap eksploitasi dengan penjualan kotor minyak dan gas bumi menurut Financial Quarterly Report triwulan IV 2025 Rp186.000.000.000 dan angka kapitalisasi 7,5 (data penilaian); bangunan (stasiun pengumpul, tangki timbun, pipa alir) NJOP Rp118.000.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp352.116.000", B: "Rp724.116.000", C: "Rp7.855.290.000", D: "Rp3.142.116.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi meliputi permukaan bumi dan tubuh bumi. NJOP tubuh bumi eksploitasi migas = pendapatan minyak dan/atau gas bumi (penjualan kotor) × angka kapitalisasi (Pasal 17 ayat (7) huruf b PMK 186/2019). Stasiun pengumpul, tangki timbun, dan pipa alir yang melekat tetap adalah bangunan. Seluruhnya dijumlahkan, dikurangi NJOPTKP, lalu dikali 40% dan 0,5%.",
        jejakHitung: [
          ["Areal produktif 3.600.000 m² × 8.200", "Rp29.520.000.000"],
          ["Emplasemen 350.000 m² × 11.000", "Rp3.850.000.000"],
          ["Tidak produktif 19.000.000 m² × 1.300", "Rp24.700.000.000"],
          ["Tubuh bumi 186.000.000.000 × 7,5", "Rp1.395.000.000.000"],
          ["+ Bangunan", "Rp1.571.070.000.000"],
          ["− NJOPTKP", "Rp1.571.058.000.000"],
          ["× 40% × 0,5%", "Rp3.142.116.000"]
        ],
        mengapaSalah: {
          A: "Tubuh bumi tidak dihitung, padahal Pasal 1 angka 1 UU PBB memasukkan tubuh bumi ke dalam bumi",
          B: "Penjualan kotor dipakai langsung sebagai NJOP tubuh bumi tanpa dikalikan angka kapitalisasi",
          C: "Tarif 0,5% dikalikan tanpa NJKP 40%"
        },
        jebakan: "Objek migas paling sering salah karena tubuh bumi terlewat atau angka kapitalisasi tidak diterapkan. Pada migas, dasarnya penjualan kotor, bukan pendapatan bersih seperti minerba."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 17 ayat (7) huruf b dan Pasal 18 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅",
      kembaranDari: "B8-029",
      sejak: "9.5.0"
    },
    {
      id: "B8-160",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Laut Selat Madura Energi adalah kontraktor kontrak kerja sama migas dengan wilayah kerja lepas pantai di laut wilayah Indonesia di Selat Madura dan tidak memiliki objek PBB-P5L lain. Data penilaian Tahun Pajak 2026: areal offshore wilayah kerja 36.000 ha dengan NJOP menurut Keputusan Direktur Jenderal Pajak Rp75/m²; tubuh bumi tahap eksploitasi dengan penjualan kotor gas bumi menurut Financial Quarterly Report triwulan IV 2025 Rp142.000.000.000 dan angka kapitalisasi 6,5 (data penilaian); anjungan produksi yang dipancang ke dasar laut Rp415.000.000.000; pipa penyalur bawah laut Rp168.000.000.000; serta helikopter angkut kru milik sendiri Rp64.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.193.976.000", B: "Rp3.065.976.000", C: "Rp1.219.976.000", D: "Rp3.011.976.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi meliputi permukaan bumi (termasuk laut wilayah) dan tubuh bumi. NJOP areal offshore ditetapkan dengan Keputusan Dirjen Pajak (Pasal 17 ayat (6) PMK 186/2019) dan tubuh bumi eksploitasi = penjualan kotor × angka kapitalisasi (Pasal 17 ayat (7) huruf b). Anjungan yang dipancang dan pipa bawah laut adalah konstruksi teknik yang dilekatkan tetap sehingga bangunan; helikopter adalah benda bergerak. Jumlahnya dikurangi NJOPTKP sekali, lalu dikali 40% dan 0,5%.",
        jejakHitung: [
          ["Areal offshore 360.000.000 m² × 75", "Rp27.000.000.000"],
          ["Tubuh bumi 142.000.000.000 × 6,5", "Rp923.000.000.000"],
          ["+ Anjungan dan pipa bawah laut", "Rp1.533.000.000.000"],
          ["− NJOPTKP", "Rp1.532.988.000.000"],
          ["× 40% × 0,5%", "Rp3.065.976.000"]
        ],
        mengapaSalah: {
          A: "Helikopter ikut dihitung sebagai bangunan, padahal benda bergerak (1.596.988.000.000 × 0,2%)",
          C: "Tubuh bumi tidak dihitung (609.988.000.000 × 0,2%)",
          D: "Areal perairan dianggap bukan bumi, padahal permukaan bumi meliputi laut wilayah Indonesia (1.505.988.000.000 × 0,2%)"
        },
        jebakan: "Pada objek offshore, laut adalah bumi, sedangkan anjungan dan pipa bawah laut adalah bangunan; yang dikeluarkan hanya benda bergerak seperti helikopter atau kapal."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 9 ayat (1) huruf c, Pasal 17 ayat (2), (6), dan (7) huruf b, serta Pasal 18 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-030",
      sejak: "9.5.0"
    },
    {
      id: "B8-161",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 10 ayat (4) UU PBB: Jumlah pajak yang terhutang dalam Surat Ketetapan Pajak sebagaimana dimaksud dalam ayat (2) huruf b adalah selisih pajak yang terhutang berdasarkan hasil pemeriksaan atau keterangan lain dengan pajak yang terhutang yang dihitung berdasarkan Surat Pemberitahuan Obyek Pajak ditambah denda administrasi sebesar 25% dari selisih pajak yang terhutang.",
      stem: "PT Kebun Teh Gunung Halimun (satu-satunya objek PBB-P5L sektor perkebunan milik wajib pajak ini) menyampaikan SPOP 2026 dengan areal produktif 1.800 ha (nilai tanah Rp2.900/m² dan SIT Rp4.600/m²), emplasemen 40 ha (Rp11.000/m²), dan bangunan Rp7.600.000.000. SPPT 2026 sebesar Rp293.976.000 telah dilunasi tepat waktu. Pemeriksaan pada Agustus 2026 menemukan bahwa per 1 Januari 2026 areal produktif sebenarnya 1.950 ha, dan pabrik pengolahan teh yang selesai dibangun Oktober 2025 dengan NJOP Rp4.200.000.000 belum dilaporkan dalam SPOP. Data lain tidak berubah. Berdasarkan kutipan tersebut, jumlah yang harus dibayar menurut SKP PBB 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp30.900.000", B: "Rp54.075.000", C: "Rp38.625.000", D: "Rp28.125.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "SKP Pasal 10 ayat (2) huruf b memuat selisih pajak ditambah denda 25% dari selisih (Pasal 10 ayat (4)). Selisih timbul dari dua temuan per 1 Januari 2026 (Pasal 8 ayat (2)): tambahan areal produktif 150 ha dan pabrik yang sudah berdiri sebelum 1 Januari 2026. NJOPTKP sudah dipakai pada SPPT, sehingga selisih NJOP langsung dikalikan 40% × 0,5%.",
        jejakHitung: [
          ["Cek SPPT: (18.000.000 m² × 7.500 + 400.000 m² × 11.000 + 7.600.000.000 − 12.000.000) × 40% × 0,5%", "Rp293.976.000"],
          ["Tambahan areal produktif 1.500.000 m² × (2.900 + 4.600)", "Rp11.250.000.000"],
          ["Tambahan NJOP pabrik", "Rp4.200.000.000"],
          ["Selisih PBB = 15.450.000.000 × 40% × 0,5%", "Rp30.900.000"],
          ["Denda 25% × 30.900.000", "Rp7.725.000"],
          ["Jumlah SKP", "Rp38.625.000"]
        ],
        mengapaSalah: {
          A: "Hanya selisih pajak; denda administrasi 25% dari selisih (Pasal 10 ayat (4)) terlupa",
          B: "Memakai kenaikan 75% Pasal 13 ayat (3) UU KUP (30.900.000 × 175%), padahal SKP PBB memakai denda 25%",
          D: "Pabrik terlewat karena dikira baru dikenai tahun berikutnya; pabrik sudah ada per 1 Januari 2026 sehingga ikut selisih (hanya 150 ha: 22.500.000 × 125%)"
        },
        jebakan: "Dua temuan sekaligus: tambahan areal produktif (nilai tanah + SIT) dan bangunan yang sudah berdiri per 1 Januari; keduanya masuk selisih, NJOPTKP tidak dikurangkan lagi, denda 25% dihitung dari selisih."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf b dan ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-031",
      sejak: "9.5.0"
    },
    {
      id: "B8-162",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L Tahun Pajak 2026 PT Hutan Tanaman Sumber Rimba diterbitkan pada 4 Maret 2026 dan baru diterima perusahaan pada 18 Maret 2026 karena lokasi kantor kebun yang terpencil. Paling lambat kapan PBB terutang menurut SPPT tersebut harus dilunasi?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "17 September 2026", B: "3 September 2026", C: "17 April 2026", D: "17 Juni 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 11 ayat (1) UU PBB: PBB menurut SPPT harus dilunasi paling lambat 6 bulan sejak tanggal diterimanya SPPT. Tanggal diterima dihitung sebagai hari pertama, sehingga hari terakhirnya sehari sebelum tanggal yang sama pada bulan keenam (contoh Penjelasan Pasal 11 ayat (1): diterima 1 Maret 1986, jatuh tempo 31 Agustus 1986): 17 September 2026.",
        jejakHitung: [
          ["SPPT diterima", "18 Maret 2026"],
          ["6 bulan sejak diterima", "17 September 2026"]
        ],
        mengapaSalah: {
          B: "Jangka 6 bulan dihitung dari tanggal terbit (4 Maret), padahal pasal menyebut tanggal diterimanya SPPT",
          C: "Satu bulan adalah jatuh tempo SKP dan STP PBB (Pasal 11 ayat (2) dan (4)), bukan SPPT",
          D: "Tiga bulan adalah batas pengajuan keberatan (Pasal 15 ayat (3)), bukan batas pelunasan SPPT"
        },
        jebakan: "Titik awal hitung adalah tanggal SPPT diterima, dan tiga angka bulan PBB mudah tertukar: 1 (SKP/STP), 3 (keberatan), 6 (SPPT)."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "B8-032",
      sejak: "9.5.0"
    },
    {
      id: "B8-163",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "SPPT PBB-P5L Tahun Pajak 2024 milik PT Tambang Pasir Kuarsa Bangka sebesar Rp150.000.000 jatuh tempo pada 22 Agustus 2024. Pada tanggal jatuh tempo perusahaan hanya membayar Rp90.000.000, dan sisanya belum dibayar sampai DJP menerbitkan STP pada 15 Oktober 2026 untuk menagih sisa pokok beserta denda keterlambatan. Besarnya denda administrasi dalam STP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp72.000.000", B: "Rp28.800.000", C: "Rp31.200.000", D: "Rp15.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Denda 2% sebulan dikenakan atas jumlah yang tidak atau kurang dibayar pada jatuh tempo (Rp60.000.000), dihitung dari jatuh tempo tetapi paling lama 24 bulan, sehingga paling tinggi 48% dari sisa tersebut (Pasal 11 ayat (3) UU PBB dan Penjelasannya).",
        jejakHitung: [
          ["Kurang dibayar pada jatuh tempo 150.000.000 − 90.000.000", "Rp60.000.000"],
          ["22 Agustus 2024 s.d. 15 Oktober 2026", "25 bulan lebih → 26 bulan"],
          ["Dibatasi paling lama", "24 bulan"],
          ["Denda 24 × 2% × 60.000.000", "Rp28.800.000"]
        ],
        mengapaSalah: {
          A: "Denda 48% dihitung dari seluruh SPPT Rp150.000.000, padahal Rp90.000.000 dibayar tepat waktu",
          C: "Batas 24 bulan diabaikan (26 bulan × 2% × 60.000.000)",
          D: "Memakai denda 25% milik SKP Pasal 10 ayat (3) dan (4), bukan denda keterlambatan bayar"
        },
        jebakan: "Dua batas sekaligus: dasar denda hanya sisa yang kurang dibayar, dan jumlah bulan berhenti pada 24 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (3) dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-033",
      sejak: "9.5.0"
    },
    {
      id: "B8-164",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 11 ayat (3) UU PBB: Pajak yang terhutang yang pada saat jatuh tempo pembayaran tidak dibayar atau kurang dibayar, dikenakan denda administrasi sebesar 2% sebulan, yang dihitung dari saat jatuh tempo sampai dengan hari pembayaran untuk jangka waktu paling lama 24 bulan. Penjelasannya: denda dihitung dari jumlah yang tidak atau kurang dibayar, dan bagian dari bulan dihitung penuh 1 bulan.",
      stem: "SPPT PBB-P5L 2026 PT Panas Bumi Lereng Dieng sebesar Rp250.000.000 jatuh tempo pada 28 Agustus 2026. Pada tanggal itu perusahaan membayar Rp100.000.000. Sisanya dibayar dua kali: Rp90.000.000 pada 20 September 2026 dan Rp60.000.000 pada 12 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Berdasarkan kutipan tersebut, jumlah denda administrasi yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.000.000", B: "Rp37.500.000", C: "Rp2.400.000", D: "Rp5.400.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Denda hanya atas bagian yang kurang dibayar pada jatuh tempo, dan tiap bagian dihitung sampai hari pembayarannya masing-masing: Rp90.000.000 terlambat kurang dari 1 bulan (dihitung 1 bulan) dan Rp60.000.000 terlambat 2 bulan 15 hari (dihitung 3 bulan).",
        jejakHitung: [
          ["Kurang bayar pada jatuh tempo", "Rp150.000.000"],
          ["Bagian Rp90.000.000: 28 Agustus s.d. 20 September 2026", "23 hari → 1 bulan"],
          ["Denda 1 × 2% × 90.000.000", "Rp1.800.000"],
          ["Bagian Rp60.000.000: 28 Agustus s.d. 12 November 2026", "2 bulan 15 hari → 3 bulan"],
          ["Denda 3 × 2% × 60.000.000", "Rp3.600.000"],
          ["Jumlah denda", "Rp5.400.000"]
        ],
        mengapaSalah: {
          A: "Seluruh sisa Rp150.000.000 dianggap belum dibayar sampai pelunasan terakhir (3 × 2% × 150.000.000), padahal Rp90.000.000 sudah dibayar 20 September",
          B: "Memakai denda 25% milik SKP (25% × 150.000.000)",
          C: "Bagian bulan dibulatkan ke bawah (0 bulan dan 2 bulan), padahal bagian dari bulan dihitung penuh"
        },
        jebakan: "Denda mengikuti jumlah yang belum dibayar dan hari pembayaran tiap bagian; pembayaran bertahap memotong dasar denda."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (3) dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-034",
      sejak: "9.5.0"
    },
    {
      id: "B8-165",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Bahari Kerapu Lestari mengusahakan pembudidayaan ikan kerapu di perairan Teluk Saleh yang telah diberikan Surat Izin Usaha Perikanan, dan objek ini diadministrasikan sebagai objek PBB-P5L sektor lainnya; perusahaan tidak memiliki objek PBB-P5L lain. SPPT Tahun Pajak 2026 hanya memuat NJOP bumi (perairan budidaya) sebesar Rp865.000.000 tanpa objek bangunan, dan NJOPTKP Rp12.000.000 dikurangkan atas objek ini. SPPT diterima pada 6 Februari 2026, dan PBB baru dilunasi seluruhnya pada 21 Oktober 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Jumlah yang harus dibayar perusahaan atas PBB-P5L 2026 (pokok ditambah denda yang ditagih dengan STP) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.808.360", B: "Rp887.120", C: "Rp1.066.250", D: "Rp904.180" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya memakai NJKP menurut batas NJOP Rp1 miliar (Pasal 1 huruf b PP 25/2002); NJOP Rp865.000.000 kurang dari Rp1 miliar sehingga NJKP 20%, dan NJOPTKP Rp12.000.000 dikurangkan karena objek ini satu-satunya objek wajib pajak. SPPT jatuh tempo 6 bulan sejak diterima, yaitu 5 Agustus 2026 (contoh Penjelasan Pasal 11 ayat (1) UU PBB). Pelunasan 21 Oktober 2026 terlambat 2 bulan 16 hari yang dihitung 3 bulan, sehingga denda 3 × 2% dari pokok.",
        jejakHitung: [
          ["NJOP objek (bumi saja)", "Rp865.000.000"],
          ["NJOP < Rp1.000.000.000 → NJKP", "20%"],
          ["(865.000.000 − 12.000.000) × 20% × 0,5%", "Rp853.000"],
          ["Jatuh tempo SPPT (6 bulan sejak 6 Februari 2026)", "5 Agustus 2026"],
          ["5 Agustus s.d. 21 Oktober 2026", "2 bulan 16 hari → 3 bulan"],
          ["Denda 3 × 2% × 853.000", "Rp51.180"],
          ["Pokok + denda", "Rp904.180"]
        ],
        mengapaSalah: {
          A: "Memakai NJKP 40% seperti objek perkebunan atau objek lainnya ber-NJOP Rp1 miliar ke atas (pokok Rp1.706.000 + denda Rp102.360)",
          B: "Bagian bulan dibulatkan ke bawah menjadi 2 bulan (denda Rp34.120)",
          C: "Memakai denda 25% milik SKP Pasal 10 untuk keterlambatan bayar (853.000 × 125%)"
        },
        jebakan: "Sektor lainnya tidak otomatis 40%: NJKP bergantung pada NJOP objek terhadap batas Rp1 miliar, lalu denda telat bayar dihitung per bulan sejak jatuh tempo 6 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 8 ayat (1) huruf b dan ayat (2) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB beserta Penjelasannya", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-035",
      sejak: "9.5.0"
    },
    {
      id: "B8-166",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Pada 2026 PT Garam Madura Sejahtera terlambat tepat tiga bulan atas dua kewajiban: (i) menyetor PPh Pasal 21 Masa Juni 2026 sebesar Rp80.000.000; (ii) melunasi SPPT PBB-P5L 2026 sebesar Rp80.000.000 setelah jatuh temponya. Pernyataan yang tepat mengenai sanksi atas kedua keterlambatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keduanya dikenai bunga sebesar tarif bunga per bulan dari KMK karena PBB-P5L adalah pajak pusat yang tunduk pada UU KUP", B: "(i) bunga tarif KMK per bulan (Pasal 9 ayat (2a) UU KUP); (ii) denda 2% sebulan (Pasal 11 ayat (3) UU PBB) = Rp4.800.000", C: "(i) bunga tarif KMK per bulan (Pasal 9 ayat (2a) UU KUP); (ii) denda 25% dari pokok PBB = Rp20.000.000 karena terlambat", D: "Keduanya dikenai bunga 2% sebulan selama 3 bulan karena sanksi keterlambatan seluruh pajak pusat diseragamkan" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Keterlambatan setor PPh Pasal 21 dikenai bunga Pasal 9 ayat (2a) UU KUP sebesar tarif bunga per bulan dari KMK (suku bunga acuan + 5% dibagi 12) yang ditagih dengan STP. UU PBB mengatur sendiri denda keterlambatan pelunasan SPPT: 2% sebulan paling lama 24 bulan (Pasal 11 ayat (3)), sehingga 3 × 2% × Rp80.000.000 = Rp4.800.000 ditagih dengan STP PBB.",
        jejakHitung: [
          ["Denda PBB 3 × 2% × 80.000.000", "Rp4.800.000"],
          ["Bunga PPh Pasal 21", "tarif bunga per bulan KMK × 3 bulan × 80.000.000"]
        ],
        mengapaSalah: {
          A: "UU PBB mengatur sendiri denda keterlambatan (Pasal 11 ayat (3)); tarif bunga KMK hanya untuk sanksi bunga UU KUP",
          C: "Denda 25% adalah sanksi dalam SKP PBB (Pasal 10 ayat (3) dan (4)), bukan sanksi keterlambatan bayar SPPT",
          D: "Bunga 2% sebulan untuk UU KUP adalah ketentuan sebelum UU Cipta Kerja; sekarang Pasal 9 ayat (2a) memakai tarif bunga per bulan dari KMK"
        },
        jebakan: "Dua rezim sanksi berjalan berdampingan: bunga KUP berbasis tarif KMK, denda PBB tetap 2% sebulan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-036",
      sejak: "9.5.0"
    },
    {
      id: "B8-167",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-B8-13",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 15 ayat (2), (3), dan (6) UU PBB: Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan menyatakan alasan secara jelas. Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal diterimanya surat (SPPT atau SKP) oleh wajib pajak, kecuali apabila wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya. Pengajuan keberatan tidak menunda kewajiban membayar pajak.",
      stem: "Data untuk soal vignette V-B8-13: PT Lembah Kakao Mandar (perkebunan kakao di Kabupaten Polewali Mandar, satu-satunya objek PBB-P5L) menerima SPPT PBB-P5L 2026 sebesar Rp684.300.000 pada 14 April 2026. Perusahaan menilai NJOP bangunan dalam SPPT terlalu tinggi karena masih memuat gudang fermentasi yang telah dibongkar pada 2024, dan direksi berencana menahan pembayaran SPPT sampai keberatannya diputus. Berdasarkan kutipan tersebut, pernyataan yang tepat mengenai pengajuan keberatan ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Surat keberatan diajukan paling lambat 13 Juli 2026, dan pelunasan SPPT ditunda sampai keberatan diputus", B: "Surat keberatan dapat diajukan paling lambat 13 Oktober 2026, bersamaan dengan jatuh tempo SPPT", C: "Surat keberatan diajukan paling lambat 13 Juli 2026, dan SPPT tetap harus dilunasi pada jatuh temponya", D: "Keberatan cukup disampaikan lisan kepada petugas KPP paling lambat 13 Juli 2026, dan SPPT tetap dilunasi" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Keberatan atas SPPT diajukan tertulis dalam bahasa Indonesia dengan alasan yang jelas, paling lambat 3 bulan sejak SPPT diterima (13 Juli 2026; tanggal diterima dihitung sebagai hari pertama menurut contoh Penjelasan Pasal 11 ayat (1) UU PBB). Pengajuan keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB; Pasal 10 ayat (4) PMK 118/2024), sehingga SPPT tetap dilunasi paling lambat 13 Oktober 2026.",
        jejakHitung: [
          ["SPPT diterima", "14 April 2026"],
          ["Hari terakhir 3 bulan sejak diterima (keberatan)", "13 Juli 2026"],
          ["Hari terakhir 6 bulan sejak diterima (pelunasan)", "13 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Batas waktunya benar, tetapi Pasal 15 ayat (6) menegaskan pengajuan keberatan tidak menunda kewajiban membayar",
          B: "Enam bulan adalah jatuh tempo pelunasan SPPT (Pasal 11 ayat (1)), bukan batas keberatan",
          D: "Pasal 15 ayat (2) mensyaratkan keberatan secara tertulis dalam bahasa Indonesia"
        },
        jebakan: "Keberatan dan pembayaran berjalan sendiri-sendiri: 3 bulan untuk keberatan, 6 bulan untuk melunasi, dan keberatan tidak menunda pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (2), (3), dan (6) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (4) PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅",
      kembaranDari: "B8-037",
      sejak: "9.5.0"
    },
    {
      id: "B8-168",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-B8-13",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 16 ayat (1) dan (5) UU PBB: Direktur Jenderal Pajak dalam jangka waktu paling lama 12 bulan sejak tanggal Surat Keberatan diterima, memberikan keputusan atas keberatan yang diajukan. Apabila jangka waktu tersebut telah lewat dan Direktur Jenderal Pajak tidak memberi suatu keputusan, maka keberatan yang diajukan tersebut dianggap diterima.",
      stem: "Lanjutan V-B8-13: PT Lembah Kakao Mandar (SPPT PBB-P5L 2026 Rp684.300.000, diterima 14 April 2026) menyerahkan langsung surat keberatannya dan memperoleh tanda penerimaan dari KPP pada 29 Juni 2026; SPPT dilunasi pada 9 Oktober 2026. Berdasarkan kutipan tersebut, paling lama kapan DJP harus memberi keputusan, dan apa akibatnya bila batas itu lewat tanpa keputusan?",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "Paling lambat 28 Juni 2027; bila lewat tanpa keputusan, keberatan dianggap diterima", B: "Paling lambat 28 Juni 2027; bila lewat tanpa keputusan, keberatan dianggap ditolak", C: "Paling lambat 28 Desember 2026; bila lewat tanpa keputusan, keberatan dianggap diterima", D: "Paling lambat 13 April 2027; bila lewat tanpa keputusan, keberatan dianggap diterima" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Jangka 12 bulan dihitung sejak surat keberatan diterima (29 Juni 2026), dengan tanggal diterima sebagai hari pertama, sehingga hari terakhirnya 28 Juni 2027; bila lewat tanpa keputusan, keberatan dianggap diterima (Pasal 16 ayat (1) dan (5) UU PBB).",
        jejakHitung: [
          ["Surat keberatan diterima KPP", "29 Juni 2026"],
          ["Hari terakhir 12 bulan sejak diterima", "28 Juni 2027"]
        ],
        mengapaSalah: {
          B: "Pasal 16 ayat (5) menyatakan keberatan dianggap diterima, bukan ditolak",
          C: "Enam bulan adalah jangka keputusan permohonan non keberatan menurut PMK 118/2024, bukan keputusan keberatan",
          D: "Titik awal 12 bulan adalah tanggal surat keberatan diterima, bukan tanggal SPPT diterima"
        },
        jebakan: "Titik awal hitung (surat keberatan diterima) dan arah fiksi hukum (dianggap diterima) sama-sama menentukan."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (1) dan (5) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-038",
      sejak: "9.5.0"
    },
    {
      id: "B8-169",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-B8-13",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-13: Atas keberatan PT Lembah Kakao Mandar terhadap SPPT PBB-P5L 2026 (diterima 14 April 2026, dilunasi 9 Oktober 2026; surat keberatan diterima KPP 29 Juni 2026), DJP menerbitkan keputusan yang hanya menerima sebagian keberatan, dan keputusan itu diterima perusahaan pada 19 Mei 2027. Perusahaan tetap tidak setuju atas bagian yang ditolak. Upaya hukum yang tersedia dan batas waktunya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Gugatan ke Pengadilan Pajak paling lambat 30 hari sejak keputusan keberatan diterima", B: "Banding ke Pengadilan Pajak paling lambat 18 November 2027 (6 bulan sejak keputusan diterima)", C: "Banding ke Pengadilan Pajak paling lambat 18 Agustus 2027 (3 bulan sejak keputusan diterima)", D: "Keberatan kedua kepada DJP paling lambat 18 Agustus 2027 atas bagian yang belum dikabulkan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Atas keputusan keberatan PBB yang menerima sebagian, upaya berikutnya adalah banding ke Pengadilan Pajak. Pasal 17 UU PBB dihapus sehingga banding PBB mengikuti Pasal 27 UU KUP: paling lama 3 bulan sejak Surat Keputusan Keberatan diterima (sejalan dengan Pasal 35 ayat (2) UU 14/2002). Tanggal diterima dihitung sebagai hari pertama, sehingga batasnya 18 Agustus 2027.",
        jejakHitung: [
          ["Keputusan keberatan diterima", "19 Mei 2027"],
          ["Hari terakhir 3 bulan sejak diterima", "18 Agustus 2027"]
        ],
        mengapaSalah: {
          A: "Atas isi keputusan keberatan upayanya banding; gugatan dipakai untuk pelaksanaan penagihan atau keputusan lain yang dapat digugat (Pasal 40 UU 14/2002)",
          B: "Jangka banding 3 bulan, bukan 6 bulan",
          D: "Tidak ada keberatan kedua atas keputusan keberatan; upaya berikutnya adalah banding"
        },
        jebakan: "Keputusan yang menerima sebagian tetap merupakan keputusan keberatan; jalurnya banding dalam 3 bulan."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 27 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 130,
      verifikasi: "✅",
      kembaranDari: "B8-039",
      sejak: "9.5.0"
    },
    {
      id: "B8-170",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L 2026 PT Tambang Nikel Pomalaa Jaya diterima pada 26 Februari 2026. Pada April 2026 manajer pajak perusahaan mengundurkan diri, dan konsultan pajak yang baru ditunjuk pada Juni 2026 membutuhkan waktu untuk mempelajari data areal tambang. Tidak ada bencana atau surat keputusan pembetulan selama periode itu. Perusahaan menyampaikan surat keberatan atas luas areal dalam SPPT pada 6 Juli 2026, dengan alasan keterlambatan karena pergantian personel. Penilaian yang tepat atas keberatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan dapat dipertimbangkan walaupun lewat 25 Mei 2026 karena pergantian personel pajak termasuk keadaan di luar kekuasaan wajib pajak", B: "Keberatan melewati batas 25 Mei 2026, dan pergantian personel pajak bukan keadaan di luar kekuasaan wajib pajak yang dapat membenarkan keterlambatan", C: "Keberatan tepat waktu karena batasnya 6 bulan sejak SPPT diterima, yaitu 25 Agustus 2026, bersamaan dengan jatuh tempo SPPT", D: "Keberatan tepat waktu karena jangka 3 bulan dihitung sejak konsultan pajak baru ditunjuk pada Juni 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Batas keberatan atas SPPT adalah 3 bulan sejak SPPT diterima: 25 Mei 2026 (Pasal 15 ayat (3) UU PBB). Pengecualian hanya bila wajib pajak dapat menunjukkan keadaan di luar kekuasaannya, yang menurut Pasal 11 ayat (1) PMK 118/2024 meliputi bencana alam, nonalam, atau sosial, diterbitkannya Surat Keputusan Pembetulan secara jabatan yang mengubah jumlah pajak, atau keadaan lain yang ditetapkan Dirjen Pajak. Pergantian personel pajak adalah urusan internal perusahaan, sehingga keterlambatan tidak dapat dibenarkan.",
        jejakHitung: [
          ["SPPT diterima", "26 Februari 2026"],
          ["Batas normal (3 bulan sejak diterima)", "25 Mei 2026"],
          ["Keberatan diajukan", "6 Juli 2026 (terlambat, alasan internal)"]
        ],
        mengapaSalah: {
          A: "Pergantian personel bukan bencana, bukan akibat Surat Keputusan Pembetulan, dan bukan keadaan lain yang ditetapkan Dirjen Pajak (Pasal 11 ayat (1) PMK 118/2024)",
          C: "Enam bulan adalah jatuh tempo pelunasan SPPT, bukan batas keberatan",
          D: "Jangka 3 bulan dihitung sejak tanggal SPPT diterima, bukan sejak wajib pajak siap menyusun keberatan"
        },
        jebakan: "Kata 'kecuali' dalam Pasal 15 ayat (3) hanya membuka ruang bagi keadaan di luar kekuasaan wajib pajak; hambatan internal tidak termasuk."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (2) huruf e dan Pasal 11 ayat (1) PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅",
      kembaranDari: "B8-040",
      sejak: "9.5.0"
    },
    {
      id: "B8-171",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Sepanjang 2026 PT Damar Hijau Persada, pemegang izin usaha hutan tanaman, menerima empat dokumen dari KPP terkait PBB-P5L: STP atas denda keterlambatan pembayaran PBB 2025; SKP Tahun Pajak 2026 yang diterbitkan karena SPOP tidak disampaikan walaupun sudah ditegur secara tertulis; Surat Tegoran agar SPOP segera disampaikan; dan Surat Paksa atas STP PBB 2025 yang belum dilunasi. Menurut UU PBB, dokumen yang dapat diajukan keberatan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP atas denda keterlambatan pembayaran PBB 2025", B: "SKP Tahun Pajak 2026 karena SPOP tidak disampaikan setelah ditegur", C: "Surat Tegoran agar SPOP segera disampaikan kepada KPP", D: "Surat Paksa atas STP PBB 2025 yang belum dilunasi" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 15 ayat (1) UU PBB membatasi objek keberatan pada SPPT dan SKP. SKP yang diterbitkan karena SPOP tidak disampaikan setelah ditegur (Pasal 10 ayat (2) huruf a) tetap SKP, sehingga dapat diajukan keberatan; wajib pajak harus membuktikan ketidakbenarannya (Pasal 16 ayat (4)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "STP yang menagih denda dan pokok yang terlambat dibayar tidak termasuk dokumen dalam Pasal 15 ayat (1); STP yang tidak benar diselesaikan lewat pembetulan atau pembatalan",
          C: "Surat Tegoran hanya peringatan agar SPOP disampaikan, bukan penetapan pajak terutang, dan tidak disebut dalam Pasal 15 ayat (1)",
          D: "Surat Paksa adalah dokumen penagihan menurut UU PPSP, bukan SPPT atau SKP, sehingga bukan objek keberatan PBB"
        },
        jebakan: "Hanya dua dokumen yang dapat diajukan keberatan PBB: SPPT dan SKP, termasuk SKP secara jabatan; dokumen penagihan dan teguran tidak termasuk."
      },
      dasarHukum: [{ pasal: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (2) huruf a dan Pasal 16 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-041",
      sejak: "9.5.0"
    },
    {
      id: "B8-172",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 19 ayat (1) UU PBB: Menteri Keuangan dapat memberikan pengurangan pajak yang terhutang : a. karena kondisi tertentu obyek pajak yang ada hubungannya dengan subyek pajak dan/atau karena sebab-sebab tertentu lainnya; b. dalam hal obyek pajak terkena bencana alam atau sebab lain yang diluar biasa.",
      stem: "Pada 9 Februari 2026 banjir bandang dan tanah longsor merusak sekitar sepertiga areal kebun teh PT Kabut Lembah Lestari. SPPT PBB-P5L Tahun Pajak 2026 baru diterima perusahaan pada 20 April 2026 dan dihitung menurut keadaan kebun pada 1 Januari 2026; luas, NJOP, dan subjek tidak dipersoalkan. Sampai Juni 2026 PBB 2026 belum dibayar dan perusahaan ingin meringankannya. Berdasarkan kutipan tersebut, langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan permohonan pengurangan PBB 2026 karena objek terkena bencana alam setelah 1 Januari", B: "Mengajukan keberatan atas SPPT 2026 karena SPPT diterima setelah banjir dan belum memuat kerusakan", C: "Mengajukan pembetulan SPPT 2026 karena luas areal yang rusak termasuk kesalahan tulis", D: "Membayar PBB 2026 penuh karena kerusakan baru dapat diperhitungkan pada SPPT Tahun Pajak 2027" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pajak terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB), sehingga SPPT yang dihitung menurut keadaan sebelum banjir sudah benar dan tidak ada yang dikoreksi lewat keberatan. Banjir dan tanah longsor adalah bencana alam (Penjelasan Pasal 19 ayat (1) huruf b), sehingga jalurnya permohonan pengurangan menurut Pasal 19 ayat (1) huruf b, diajukan pada tahun terjadinya bencana atas PBB yang belum dilunasi.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Tanggal diterimanya SPPT tidak mengubah saat yang menentukan pajak terutang (1 Januari); penetapan sudah benar sehingga keberatan tidak tepat",
          C: "Pembetulan untuk kesalahan tulis atau hitung dalam SPPT; SPPT ini tidak salah, kerusakannya terjadi sesudah 1 Januari",
          D: "Keadaan 1 Januari mengunci penetapan, tetapi Pasal 19 ayat (1) huruf b tetap membuka pengurangan atas PBB tahun terjadinya bencana"
        },
        jebakan: "SPPT yang datang sesudah bencana tetap benar bila dihitung menurut keadaan 1 Januari; keringanannya lewat pengurangan, bukan keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 4 ayat (2) dan (3) PMK 129/2023", berlakuSejak: "2023-12-30" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-042",
      sejak: "9.5.0"
    },
    {
      id: "B8-173",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Pada 2026 PT Cahaya Teh Priangan mengalami tiga kejadian PBB-P5L: (i) SPPT 2026 kebun Cibeber sebesar Rp58.400.000 terbayar dua kali, dan perusahaan telah mengajukan permohonan pengembalian atas pembayaran ganda itu; (ii) keputusan keberatan menurunkan PBB 2025 kebun Sindangsari dari Rp236.000.000 menjadi Rp198.500.000, padahal Rp236.000.000 telah dilunasi; (iii) perusahaan belum melunasi SKP PBB Tahun Pajak 2025 kebun Gunungjaya sebesar Rp31.250.000 (pokok Rp25.000.000 ditambah denda administrasi 25%) dan tidak mengajukan keberatan atasnya. Setelah seluruh kelebihan diproses menurut PMK 81/2024, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp95.900.000", B: "Rp27.150.000", C: "Rp64.650.000", D: "Rp6.250.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembayaran ganda adalah pembayaran yang lebih besar dari pajak terutang yang dikembalikan atas permohonan melalui SKPLB, dan keputusan keberatan yang menurunkan PBB yang sudah dibayar juga menimbulkan kelebihan (Pasal 152 huruf a dan b PMK 81/2024). Keduanya wajib diperhitungkan lebih dahulu dengan utang pajak dalam SKP PBB yang belum dilunasi (Pasal 154 ayat (1) huruf e), baru sisanya dikembalikan.",
        jejakHitung: [
          ["Pembayaran ganda SPPT 2026 kebun Cibeber", "Rp58.400.000"],
          ["Kelebihan akibat keputusan keberatan kebun Sindangsari (236.000.000 − 198.500.000)", "Rp37.500.000"],
          ["Jumlah kelebihan", "Rp95.900.000"],
          ["Diperhitungkan dengan SKP PBB 2025 kebun Gunungjaya (25.000.000 + 25%)", "(Rp31.250.000)"],
          ["Dikembalikan", "Rp64.650.000"]
        ],
        mengapaSalah: {
          A: "SKP PBB yang belum dilunasi tidak diperhitungkan lebih dahulu",
          B: "Kelebihan dari keputusan keberatan kebun Sindangsari terlupa (58.400.000 − 31.250.000)",
          D: "Pembayaran ganda kebun Cibeber terlupa (37.500.000 − 31.250.000)"
        },
        jebakan: "Utang yang dipotong lebih dahulu tidak hanya STP; SKP PBB yang belum dilunasi juga termasuk, dan jumlahnya sudah memuat denda 25%."
      },
      dasarHukum: [{ pasal: "Pasal 16 ayat (3) UU PBB (keputusan keberatan dapat menerima seluruhnya atau sebagian)", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 123 huruf a, Pasal 124 ayat (1), Pasal 125 ayat (5), Pasal 152 huruf a dan huruf b, serta Pasal 154 ayat (1) huruf e PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-043",
      sejak: "9.5.0"
    },
    {
      id: "B8-174",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "STP PBB-P5L PT Bara Selatan Tambang sebesar Rp86.940.000 (pokok dan denda) diterima pada 14 April 2026. Perusahaan tidak melunasinya dan pada 30 April 2026 mengirim surat keberatan atas STP itu ke KPP dengan anggapan penagihan akan tertunda. KPP kemudian melakukan tindakan penagihan aktif berdasarkan UU PPSP dan peraturan pelaksananya. Rangkaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP jatuh tempo 13 Oktober 2026 (6 bulan) → Surat Teguran setelah lewat 7 hari dari jatuh tempo → Surat Paksa setelah lewat 21 hari sejak Surat Teguran disampaikan → penyitaan", B: "STP jatuh tempo 13 Mei 2026 → Surat Paksa diterbitkan setelah lewat 7 hari dari jatuh tempo tanpa Surat Teguran → penyitaan bila tidak lunas 2 × 24 jam sejak Surat Paksa diberitahukan", C: "STP jatuh tempo 13 Mei 2026 → penagihan ditunda sampai keberatan diputus (paling lama 12 bulan) → Surat Teguran → Surat Paksa → penyitaan", D: "STP jatuh tempo 13 Mei 2026 → Surat Teguran setelah lewat 7 hari dari jatuh tempo → Surat Paksa setelah lewat 21 hari sejak Surat Teguran disampaikan → penyitaan bila tidak lunas 2 × 24 jam sejak Surat Paksa diberitahukan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB harus dilunasi 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB): diterima 14 April 2026, hari terakhir 13 Mei 2026. STP bukan objek keberatan (Pasal 15 ayat (1)) dan pengajuan keberatan pun tidak menunda kewajiban membayar (Pasal 15 ayat (6)), sehingga penagihan berjalan: Surat Teguran setelah lewat 7 hari sejak jatuh tempo, Surat Paksa setelah lewat 21 hari sejak Surat Teguran disampaikan, lalu penyitaan bila tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan (Pasal 6 PMK 61/2023).",
        jejakHitung: [
          ["STP diterima", "14 April 2026"],
          ["Jatuh tempo (1 bulan sejak diterima)", "13 Mei 2026"],
          ["Surat keberatan atas STP", "tidak menunda penagihan"],
          ["Surat Teguran", "setelah lewat 7 hari sejak jatuh tempo"],
          ["Surat Paksa", "setelah lewat 21 hari sejak Surat Teguran disampaikan"],
          ["Penyitaan", "bila tidak lunas 2 × 24 jam sejak Surat Paksa diberitahukan"]
        ],
        mengapaSalah: {
          A: "Enam bulan adalah jangka waktu pelunasan SPPT (Pasal 11 ayat (1)), bukan STP",
          B: "Dalam penagihan biasa Surat Paksa didahului Surat Teguran; 7 hari adalah tenggat penerbitan Surat Teguran",
          C: "STP bukan objek keberatan PBB dan pengajuan keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6))"
        },
        jebakan: "Surat keberatan atas STP tidak menghentikan penagihan; jatuh tempo STP 1 bulan dihitung dengan tanggal terima sebagai hari pertama, seperti contoh dalam Penjelasan Pasal 11 ayat (2) UU PBB (diterima 1 Maret, jatuh tempo 31 Maret)."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 ayat (1) dan ayat (6) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1) sampai (3) PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-044",
      sejak: "9.5.0"
    },
    {
      id: "B8-175",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Rotan Mas Kalimantan menerima SKP PBB-P5L Tahun Pajak 2025 (selisih pokok ditambah denda administrasi 25%) dan akan melunasinya pada Oktober 2026 sebelum jatuh tempo. Cara pembayaran yang sesuai dengan ketentuan dan sistem administrasi yang berlaku saat ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menyetor ke rekening kas daerah kabupaten letak objek karena bagian terbesar PBB-P5L dibagihasilkan ke kabupaten", B: "Memperhitungkan sendiri SKP PBB dengan kelebihan angsuran PPh Pasal 25 tanpa permohonan kepada DJP", C: "Membayar tunai kepada petugas KPP dan menyimpan tanda terima yang ditandatangani petugas sebagai bukti lunas", D: "Membuat kode billing dengan NPWP perusahaan dan nomor SKP PBB, membayar di bank/pos persepsi; bukti bayar sah bila tervalidasi NTPN" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "PBB dibayar di bank, kantor pos, dan tempat lain yang ditunjuk Menteri Keuangan (Pasal 11 ayat (5) UU PBB). Menurut PMK 81/2024 pembayaran memakai NPWP pihak yang membayar (Pasal 102 ayat (3)), Surat Setoran Pajak untuk SKP PBB harus memuat nomor ketetapan (Pasal 104 ayat (3)), dan Bukti Penerimaan Negara sah bila telah divalidasi dengan NTPN (Pasal 102 ayat (5)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "PBB-P5L adalah penerimaan negara yang baru kemudian dibagihasilkan; wajib pajak tidak menyetor ke kas daerah",
          B: "Kelebihan PPh hanya dapat dipakai melunasi utang melalui mekanisme pengembalian atau pemindahbukuan oleh DJP, bukan diperhitungkan sendiri",
          C: "Pembayaran dilakukan di tempat pembayaran yang ditunjuk dengan bukti tervalidasi NTPN, bukan tunai kepada petugas KPP"
        },
        jebakan: "Untuk SKP PBB, setoran harus menyebut nomor ketetapan; bagi hasil ke daerah terjadi setelah setoran ke kas negara."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (5) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 102 ayat (3) dan ayat (5) serta Pasal 104 ayat (3) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 70,
      verifikasi: "✅",
      kembaranDari: "B8-045",
      sejak: "9.5.0"
    },
    {
      id: "B8-176",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Nira Kelapa Nusantara telah melunasi PBB-P5L Tahun Pajak 2025 kebun kelapanya pada Agustus 2025. Pada Juli 2026 staf keuangan bermaksud melunasi SPPT PBB-P5L 2026 atas NOP yang sama sebesar Rp43.870.000, tetapi kode billing dibuat dengan Tahun Pajak 2025. Akibatnya pembayaran tercatat sebagai pembayaran tambahan untuk PBB 2025, sedangkan SPPT 2026 tercatat belum lunas. Langkah penyelesaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membayar ulang PBB 2026, karena pembayaran dengan tahun pajak yang salah otomatis diperhitungkan dengan PBB 2027", B: "Mengajukan keberatan atas SPPT 2026 karena SPPT tersebut tercatat belum lunas di Coretax", C: "Mengajukan pemindahbukuan agar pembayaran dicatat untuk PBB Tahun Pajak 2026, sehingga tidak perlu membayar ulang", D: "Mengajukan pembetulan SPPT 2025 karena tahun pajak pada kode billing merupakan kesalahan tulis" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB 2025 sudah lunas, sehingga pembayaran yang tercatat pada Tahun Pajak 2025 menjadi jumlah pembayaran yang lebih besar daripada pajak terutang. Pemindahbukuan atas permohonan dapat diajukan untuk hal itu (Pasal 109 ayat (1) huruf d PMK 81/2024), juga untuk PBB (ayat (2)), dan tanggal bayar dalam Bukti Pemindahbukuan mengikuti tanggal setoran semula (Pasal 111 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tidak ada pengkreditan otomatis ke tahun berikutnya; membayar ulang hanya menambah kelebihan yang harus diurus lagi",
          B: "SPPT 2026 tidak salah; masalahnya ada pada pencatatan pembayaran, bukan penetapan",
          D: "Pembetulan menyangkut kesalahan dalam SPPT, SKP PBB, atau STP PBB, bukan kesalahan pengisian kode billing oleh wajib pajak"
        },
        jebakan: "Salah bayar (NOP, tahun pajak, atau jenis pajak) diselesaikan dengan pemindahbukuan; syaratnya pembayaran itu belum diperhitungkan dengan pajak terutang (Pasal 109 ayat (3) huruf f), dan di sini PBB 2025 sudah lunas lebih dahulu."
      },
      dasarHukum: [{ pasal: "Pasal 108 huruf a, Pasal 109 ayat (1) huruf d, ayat (2), dan ayat (3) huruf f, serta Pasal 111 ayat (2) PMK 81/2024 (pemindahbukuan)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (5) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-046",
      sejak: "9.5.0"
    },
    {
      id: "B8-177",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Karena SPOP tidak disampaikan walaupun sudah ditegur, PT Lada Bangka Sejahtera (wajib pajak badan, tahun buku kalender) menerima SKP PBB-P5L Tahun Pajak 2026 berisi pokok Rp248.600.000 dan denda administrasi 25% Rp62.150.000, lalu melunasinya pada 2026. Dalam tahun buku 2026 perusahaan juga membayar bea meterai atas kontrak penjualan lada Rp2.400.000 dan PPh Pasal 29 Tahun Pajak 2025 Rp135.000.000. Seluruh pembayaran itu dibebankan sebagai biaya dalam laporan laba rugi komersial 2026. Jumlah yang dapat dikurangkan sebagai biaya dalam menghitung penghasilan neto fiskal 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp313.150.000", B: "Rp251.000.000", C: "Rp248.600.000", D: "Rp448.150.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 6 ayat (1) huruf a angka 9 UU PPh membolehkan biaya pajak kecuali PPh, sehingga pokok PBB dalam SKP dan bea meterai dapat dikurangkan. Denda 25% dalam SKP PBB adalah sanksi administrasi (Pasal 9 ayat (1) huruf k) dan PPh Pasal 29 adalah PPh (Pasal 9 ayat (1) huruf h), keduanya tidak dapat dikurangkan.",
        jejakHitung: [
          ["Pokok PBB-P5L dalam SKP (pajak selain PPh)", "Rp248.600.000"],
          ["Bea meterai (pajak selain PPh)", "Rp2.400.000"],
          ["Denda 25% dalam SKP PBB (sanksi administrasi)", "tidak dapat dikurangkan"],
          ["PPh Pasal 29 Tahun Pajak 2025 (Pasal 9 ayat (1) huruf h)", "tidak dapat dikurangkan"],
          ["Jumlah biaya fiskal", "Rp251.000.000"]
        ],
        mengapaSalah: {
          A: "Denda 25% dalam SKP PBB ikut dibiayakan (248.600.000 + 62.150.000 + 2.400.000), padahal sanksi administrasi dilarang Pasal 9 ayat (1) huruf k",
          C: "Bea meterai terlupa; bea meterai adalah pajak selain PPh yang dapat dibiayakan",
          D: "Denda SKP PBB dan PPh Pasal 29 ikut dibiayakan (seluruh pembayaran)"
        },
        jebakan: "SKP PBB memuat dua unsur dengan perlakuan berbeda: pokoknya pajak selain PPh (boleh dibiayakan), dendanya sanksi administrasi (tidak boleh)."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h dan k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 10 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-047",
      sejak: "9.5.0"
    },
    {
      id: "B8-178",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Gemilang Agro Investama sedang menilai rencana pembelian kebun kakao milik PT Bukit Kakao Sentosa. Untuk enclave seluas 85 ha di luar sertifikat HGU, penjual hanya menunjukkan SPPT PBB-P5L lima tahun terakhir atas nama penjual beserta bukti penerimaan negara ber-NTPN yang menunjukkan seluruhnya lunas, dan menyatakan dokumen itu cukup sebagai bukti kepemilikan enclave. Penilaian konsultan pajak yang tepat atas pernyataan penjual adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Belum cukup; tanda pembayaran atau pelunasan PBB bukan bukti pemilikan hak, sehingga hak atas enclave harus dibuktikan dengan dokumen lain", B: "Cukup; SPPT yang diterbitkan atas nama penjual berarti DJP telah menetapkan penjual sebagai pemilik sah enclave tersebut", C: "Cukup; setelah PBB dilunasi tepat waktu lima tahun berturut-turut, hak atas tanah beralih kepada pihak yang membayar", D: "Belum cukup; bukti pelunasan PBB baru dapat menjadi bukti hak setelah dilegalisasi oleh KPP tempat objek terdaftar" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penjelasan Pasal 4 ayat (1) UU PBB menegaskan bahwa tanda pembayaran/pelunasan pajak bukan merupakan bukti pemilikan hak. Subjek PBB ditentukan oleh hak atau manfaat nyata atas objek, termasuk pihak yang hanya memperoleh manfaat, sehingga nama di SPPT dan bukti lunas tidak membuktikan kepemilikan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pasal 4 ayat (1) menjadikan subjek pajak juga pihak yang menguasai atau memperoleh manfaat; penerbitan SPPT atas nama seseorang bukan penetapan pemilik",
          C: "Tidak ada ketentuan peralihan hak karena membayar PBB",
          D: "Tidak ada legalisasi KPP yang mengubah fungsi dokumen pajak menjadi bukti hak"
        },
        jebakan: "Arahnya: hak atau manfaat menentukan subjek PBB, bukan pelunasan PBB menentukan hak."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-048",
      sejak: "9.5.0"
    },
    {
      id: "B8-179",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "IUP operasi produksi batubara PT Lintang Bara Mandiri di sebuah kabupaten berakhir pada 31 Mei 2026. Setelah reklamasi, pada Agustus 2026 lahan bekas tambang itu diberikan dengan HGU kepada PT Sawit Tunas Harapan, pemegang izin usaha perkebunan, dan sejak Oktober 2026 seluruhnya telah ditanami kelapa sawit serta tetap dipakai sebagai kebun sawit pada 1 Januari 2027 dan seterusnya. Perlakuan PBB atas lahan tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mulai Tahun Pajak 2027 menjadi PBB-P2 kabupaten karena bukan lagi kawasan pertambangan, dan penerimaannya masuk PAD", B: "Sejak Juni 2026 menjadi PBB-P5L sektor perkebunan, dan PBB 2026 sektor minerba dihitung proporsional Januari sampai Mei", C: "Tahun Pajak 2026 tetap PBB-P5L sektor minerba; mulai 2027 menjadi PBB-P5L sektor perkebunan dan penerimaannya tetap DBH", D: "Tetap PBB-P5L sektor minerba seterusnya karena objek pernah didaftarkan sebagai kawasan pertambangan batubara" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Keadaan objek pada 1 Januari menentukan pajak terutang (Pasal 8 ayat (2) UU PBB), sehingga Tahun Pajak 2026 tetap sektor pertambangan minerba. Pada 1 Januari 2027 lahan berada di kawasan perkebunan, sehingga menjadi objek PBB Sektor Perkebunan (Pasal 2 huruf a PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022) dan tetap dikecualikan dari objek PBB-P2 (Pasal 38 ayat (1) UU 1/2022). Sebagai PBB pusat, penerimaannya dibagikan kepada daerah sebagai DBH, bukan PAD.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Objek PBB-P2 mengecualikan kawasan usaha perkebunan, bukan hanya pertambangan; lahan yang menjadi kebun sawit tetap PBB-P5L",
          B: "PBB tidak mengenal pengenaan proporsional dalam tahun berjalan; perubahan baru berlaku menurut keadaan 1 Januari berikutnya",
          D: "Sektor ditentukan penggunaan objek setiap 1 Januari, bukan riwayat pendaftarannya"
        },
        jebakan: "Keluar dari kawasan pertambangan tidak otomatis berarti PBB-P2: periksa apakah pada 1 Januari berikutnya objek masuk kawasan usaha P5L lain."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 2 huruf a dan huruf e PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-052",
      sejak: "9.5.0"
    },
    {
      id: "B8-180",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Sungai Lancang Agro memegang HGU kebun kelapa sawit di sebuah kabupaten di Riau dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal tanaman menghasilkan 1.450 ha dan areal tanaman belum menghasilkan (ditanam pada 2024) 380 ha, keduanya dengan nilai tanah Rp4.200/m² dan SIT kelapa sawit Rp6.100/m² (data penilaian menetapkan SIT ini untuk semua umur tanaman); areal pembibitan 25 ha dengan nilai tanah Rp4.200/m²; areal rawa yang tidak dapat diusahakan 140 ha dengan nilai Rp1.500/m²; areal emplasemen 40 ha dengan nilai Rp15.000/m²; NJOP bangunan (pabrik kelapa sawit, kantor kebun, perumahan karyawan) Rp31.750.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp458.756.000", B: "Rp412.396.000", C: "Rp461.806.000", D: "Rp395.256.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Areal produktif adalah areal yang telah ditanami, termasuk tanaman yang belum menghasilkan, dan dinilai nilai tanah ditambah SIT; areal pembibitan termasuk areal belum produktif sehingga hanya nilai tanah, seperti juga areal tidak produktif dan emplasemen (Pasal 14 PMK 186/PMK.03/2019). NJOP bumi ditambah bangunan, dikurangi NJOPTKP Rp12.000.000 sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [
          ["Tanaman menghasilkan 14.500.000 m² × (4.200 + 6.100)", "Rp149.350.000.000"],
          ["Tanaman belum menghasilkan 3.800.000 m² × (4.200 + 6.100)", "Rp39.140.000.000"],
          ["Pembibitan 250.000 m² × 4.200", "Rp1.050.000.000"],
          ["Tidak produktif 1.400.000 m² × 1.500", "Rp2.100.000.000"],
          ["Emplasemen 400.000 m² × 15.000", "Rp6.000.000.000"],
          ["NJOP bumi", "Rp197.640.000.000"],
          ["+ NJOP bangunan", "Rp229.390.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp229.378.000.000"],
          ["× 40% × 0,5%", "Rp458.756.000"]
        ],
        mengapaSalah: {
          B: "Areal tanaman belum menghasilkan dinilai tanpa SIT (−Rp23.180.000.000 NJOP), padahal areal yang telah ditanami adalah areal produktif",
          C: "SIT ikut ditambahkan pada areal pembibitan (+Rp1.525.000.000 NJOP), padahal pembibitan termasuk areal belum produktif",
          D: "NJOP bangunan pabrik, kantor, dan perumahan di dalam HGU tidak dijumlahkan"
        },
        jebakan: "Batas areal produktif adalah \"telah ditanami\", bukan \"sudah menghasilkan\"; pembibitan justru disebut tegas sebagai areal belum produktif."
      },
      dasarHukum: [{ pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-054",
      sejak: "9.5.0"
    },
    {
      id: "B8-181",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kabut Priangan Lestari memegang HGU kebun teh di Kabupaten Garut. Per 1 Januari 2026 areal emplasemen kebun seluas 36 ha dengan nilai tanah Rp18.000/m². Di dalam emplasemen terdapat: pemakaman umum yang dipakai warga desa dan karyawan (lahan 0,8 ha, tanpa bangunan); madrasah yang dikelola yayasan pendidikan nirlaba di atas lahan dan gedung milik perusahaan yang dipinjamkan cuma-cuma (lahan 0,7 ha, bangunan Rp600.000.000); serta klinik yang dikelola perusahaan dan memungut tarif dari pasien umum untuk memperoleh laba (lahan 0,5 ha, bangunan Rp900.000.000). Bangunan lain di emplasemen adalah pabrik pengolahan teh Rp21.000.000.000 serta gudang dan perumahan karyawan Rp4.200.000.000. Perusahaan juga memiliki kantor perwakilan di Kota Bandung (NJOP Rp5.500.000.000) serta traktor dan truk pengangkut daun teh (nilai buku Rp2.400.000.000). Jumlah NJOP bumi dan bangunan areal emplasemen yang masuk penghitungan PBB-P5L Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp31.320.000.000", B: "Rp33.180.000.000", C: "Rp34.710.000.000", D: "Rp32.310.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Pemakaman umum dikecualikan menurut Pasal 3 ayat (1) huruf b UU PBB (kuburan) dan madrasah nirlaba menurut huruf a, sehingga lahan kena pajak 36 − 0,8 − 0,7 = 34,5 ha. Klinik yang dikelola untuk memperoleh laba tidak memenuhi syarat \"tidak dimaksudkan untuk memperoleh keuntungan\", sehingga lahan dan bangunannya tetap dihitung. Kantor di Kota Bandung adalah objek PBB-P2 (di luar kawasan usaha perkebunan), sedangkan traktor dan truk adalah benda bergerak, bukan bangunan.",
        jejakHitung: [
          ["Lahan kena pajak (36 − 0,8 − 0,7)", "34,5 ha = 345.000 m²"],
          ["Bumi 345.000 m² × 18.000", "Rp6.210.000.000"],
          ["Bangunan: pabrik 21.000.000.000 + gudang dan perumahan 4.200.000.000 + klinik 900.000.000", "Rp26.100.000.000"],
          ["NJOP emplasemen (bumi + bangunan)", "Rp32.310.000.000"]
        ],
        mengapaSalah: {
          A: "Klinik ikut dikecualikan (lahan 0,5 ha dan bangunan Rp900.000.000 dikeluarkan), padahal klinik itu dikelola untuk memperoleh laba sehingga tidak memenuhi Pasal 3 ayat (1) huruf a",
          B: "Pemakaman umum dan madrasah nirlaba ikut dihitung (36 ha × 18.000 + bangunan Rp26.700.000.000), padahal keduanya dikecualikan Pasal 3 ayat (1) huruf a dan huruf b UU PBB",
          C: "Traktor dan truk Rp2.400.000.000 ikut dihitung sebagai bangunan, padahal benda bergerak bukan konstruksi teknik yang dilekatkan secara tetap"
        },
        jebakan: "Tiga filter sekaligus: pengecualian Pasal 3 (huruf b tanpa syarat nirlaba, huruf a dengan syarat nirlaba), batas kawasan P5L dengan PBB-P2, dan definisi bangunan; jangan lupa mengubah hektare ke meter persegi."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan huruf b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (5) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 170,
      verifikasi: "✅",
      kembaranDari: "B8-055",
      sejak: "9.5.0"
    },
    {
      id: "B8-182",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B8-14",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-14: PT Selat Bunyu Petro adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja lepas pantai di laut wilayah Indonesia; terminal penerima minyak di darat berada di dalam wilayah kerja yang sama. Perusahaan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal perairan wilayah kerja 48.000 ha dengan nilai Rp55/m²; areal darat terminal 9 ha dengan nilai Rp150.000/m²; NJOP tubuh bumi hasil penilaian DJP Rp960.000.000.000; anjungan produksi yang dipancang ke dasar laut Rp540.000.000.000; pipa minyak bawah laut dari anjungan ke terminal Rp210.000.000.000; tangki timbun di terminal darat Rp130.000.000.000; dua kapal pasok (supply vessel) milik sendiri Rp38.000.000.000; serta kapal pengeboran (drillship) yang disewa dari perusahaan pengeboran asing dengan nilai kontrak Rp175.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.835.776.000", B: "Rp3.759.776.000", C: "Rp3.706.976.000", D: "Rp3.472.776.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Bumi di kawasan migas meliputi permukaan bumi offshore (perairan), permukaan bumi onshore di dalam wilayah kerja, dan tubuh bumi; anjungan terpancang, pipa bawah laut, dan tangki timbun adalah bangunan. Kapal pasok dan drillship sewaan adalah benda bergerak (drillship juga bukan milik kontraktor), sehingga tidak masuk NJOP. NJKP sektor pertambangan 40%, NJOPTKP Rp12.000.000.",
        jejakHitung: [
          ["Perairan 480.000.000 m² × 55", "Rp26.400.000.000"],
          ["Darat 90.000 m² × 150.000", "Rp13.500.000.000"],
          ["Tubuh bumi", "Rp960.000.000.000"],
          ["Bangunan: 540.000.000.000 + 210.000.000.000 + 130.000.000.000", "Rp880.000.000.000"],
          ["NJOP objek", "Rp1.879.900.000.000"],
          ["− NJOPTKP 12.000.000", "Rp1.879.888.000.000"],
          ["× 40% × 0,5%", "Rp3.759.776.000"]
        ],
        mengapaSalah: {
          A: "Kapal pasok Rp38.000.000.000 ikut dihitung sebagai bangunan ((1.879.888.000.000 + 38.000.000.000) × 0,2%), padahal kapal adalah benda bergerak",
          C: "Areal perairan dianggap bukan bumi ((1.879.888.000.000 − 26.400.000.000) × 0,2%), padahal permukaan bumi meliputi laut wilayah dan Pasal 5 ayat (1) PMK 186/2019 memasukkan permukaan bumi offshore",
          D: "Terminal darat (lahan Rp13.500.000.000 dan tangki Rp130.000.000.000) dianggap objek PBB-P2, padahal terminal berada di dalam wilayah kerja migas"
        },
        jebakan: "Pilah dulu bumi, bangunan, dan benda bergerak; data berlebih (kapal pasok, drillship sewaan) sengaja dicampur. NJOP perairan dan tubuh bumi diberikan sebagai data penilaian."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5 ayat (1) dan (2) serta Pasal 9 ayat (1) huruf c PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 190,
      verifikasi: "✅",
      kembaranDari: "B8-056",
      sejak: "9.5.0"
    },
    {
      id: "B8-183",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B8-14",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-14: PT Selat Bunyu Petro adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja lepas pantai di laut wilayah Indonesia; terminal penerima minyak di darat berada di dalam wilayah kerja yang sama. Perusahaan tidak memiliki objek PBB-P5L lain. SPPT PBB-P5L 2026 perusahaan sebesar Rp4.109.776.000 diterima pada 9 April 2026. Setelah dicocokkan, ternyata DJP memasukkan kapal pengeboran (drillship) yang disewa dari perusahaan pengeboran asing dengan nilai Rp175.000.000.000 sebagai bangunan; data lain sudah sesuai keadaan 1 Januari 2026 (NJKP 40%, tarif 0,5%). Perusahaan ingin memperbaiki penetapan tersebut tanpa menimbulkan sanksi. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan permohonan pengurangan PBB paling lambat 8 Juli 2026; bila dikabulkan seluruhnya PBB turun Rp350.000.000, dan SPPT tetap harus dilunasi paling lambat 8 Oktober 2026", B: "Mengajukan keberatan tertulis atas SPPT paling lambat 8 Juli 2026; bila dikabulkan seluruhnya PBB turun Rp875.000.000, dan SPPT tetap harus dilunasi paling lambat 8 Oktober 2026", C: "Mengajukan keberatan tertulis atas SPPT paling lambat 8 Juli 2026; bila dikabulkan seluruhnya PBB turun Rp350.000.000, dan SPPT tetap harus dilunasi paling lambat 8 Oktober 2026", D: "Mengajukan keberatan tertulis atas SPPT paling lambat 8 Juli 2026; bila dikabulkan seluruhnya PBB turun Rp350.000.000, dan pelunasan SPPT ditunda sampai keputusan keberatan terbit" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Memasukkan benda bergerak yang bukan milik perusahaan sebagai bangunan adalah penetapan yang tidak benar, sehingga jalurnya keberatan atas SPPT secara tertulis dalam 3 bulan sejak diterima: hari terakhir 8 Juli 2026. Penurunan PBB = 175.000.000.000 × 40% × 0,5% = Rp350.000.000 (NJOPTKP tidak berubah). Keberatan tidak menunda kewajiban melunasi SPPT, yang jatuh tempo 6 bulan sejak diterima: 8 Oktober 2026.",
        jejakHitung: [
          ["SPPT diterima", "9 April 2026"],
          ["Hari terakhir keberatan (3 bulan sejak diterima)", "8 Juli 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "8 Oktober 2026"],
          ["Penurunan PBB 175.000.000.000 × 40% × 0,5%", "Rp350.000.000"],
          ["Pembanding: SPPT setelah keberatan dikabulkan", "Rp3.759.776.000"]
        ],
        mengapaSalah: {
          A: "Pengurangan (Pasal 19 UU PBB) adalah keringanan atas pajak yang ditetapkan dengan benar; penetapan yang memasukkan benda bergerak diperbaiki lewat keberatan (Pasal 15)",
          B: "Penurunan dihitung 0,5% × 175.000.000.000 tanpa NJKP 40%",
          D: "Pasal 15 ayat (6) UU PBB: pengajuan keberatan tidak menunda kewajiban membayar; pelunasan setelah 8 Oktober 2026 dikenai denda 2% sebulan"
        },
        jebakan: "Bedakan kesalahan penetapan (keberatan) dari keringanan (pengurangan), dan ingat dua tenggat berjalan bersamaan: 3 bulan untuk keberatan, 6 bulan untuk pelunasan, keduanya berakhir sehari sebelum tanggal yang sama pada bulan tujuan."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "B8-057",
      sejak: "9.5.0"
    },
    {
      id: "B8-184",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Pipa Selat Karimata memiliki dua objek PBB-P5L sektor lainnya di perairan, masing-masing dengan NOP dan SPPT sendiri, dan tidak memiliki objek PBB-P5L lain: (1) jaringan pipa gas bawah laut yang dipasang tetap di dasar laut dengan NJOP bumi (koridor perairan) Rp150.000.000 dan NJOP bangunan Rp1.100.000.000; (2) jaringan kabel serat optik bawah laut antarpulau yang dilekatkan tetap di dasar laut dengan NJOP bumi Rp85.000.000 dan NJOP bangunan setelah penyusutan Rp650.000.000. Perusahaan juga memiliki kapal survei dan perawatan pipa senilai Rp40.000.000.000. Jumlah PBB-P5L Tahun Pajak 2026 dalam kedua SPPT tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.211.000", B: "Rp3.199.000", C: "Rp3.946.000", D: "Rp3.223.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "NJOPTKP Rp12.000.000 diberikan sekali untuk setiap wajib pajak, pada objek yang nilainya terbesar (objek (1)); objek (2) dikenai penuh. NJKP sektor lainnya diuji per objek: objek (1) ber-NJOP Rp1.250.000.000 (Rp1 miliar atau lebih) memakai 40%, objek (2) ber-NJOP Rp735.000.000 (kurang dari Rp1 miliar) memakai 20%.",
        jejakHitung: [
          ["NJOP objek (1) 150.000.000 + 1.100.000.000", "Rp1.250.000.000"],
          ["PBB objek (1) (1.250.000.000 − 12.000.000) × 40% × 0,5%", "Rp2.476.000"],
          ["NJOP objek (2) 85.000.000 + 650.000.000", "Rp735.000.000"],
          ["PBB objek (2) 735.000.000 × 20% × 0,5% (tanpa NJOPTKP)", "Rp735.000"],
          ["Jumlah kedua SPPT", "Rp3.211.000"]
        ],
        mengapaSalah: {
          B: "NJOPTKP dikurangkan lagi pada objek (2) ((735.000.000 − 12.000.000) × 20% × 0,5% = 723.000), padahal NJOPTKP hanya diberikan untuk satu objek",
          C: "Objek (2) memakai NJKP 40% (735.000.000 × 0,2% = 1.470.000), padahal objek sektor lainnya ber-NJOP kurang dari Rp1 miliar memakai 20%",
          D: "NJOPTKP diberikan pada objek (2) yang nilainya lebih kecil (objek (1) 1.250.000.000 × 0,2% = 2.500.000 dan objek (2) 723.000), padahal NJOPTKP melekat pada objek yang nilainya terbesar"
        },
        jebakan: "Persentase NJKP sektor lainnya ditentukan per objek, bukan per wajib pajak; NJOPTKP diberikan sekali pada objek bernilai terbesar. Kapal survei adalah data berlebih (benda bergerak)."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c dan d serta Pasal 9 ayat (2) huruf a dan b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅",
      kembaranDari: "B8-058",
      sejak: "9.5.0"
    },
    {
      id: "B8-185",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Grup usaha PT Samudra Bitung Raya pada 1 Januari 2026 menguasai: (1) pipa minyak bawah laut milik anak usaha yang menjadi kontraktor kontrak kerja sama migas, dipasang tetap di dasar laut di dalam wilayah kerja migasnya; (2) Floating Storage Regasification Unit (FSRU) milik anak usaha regasifikasi (bukan kontraktor migas) yang ditambatkan tetap di perairan laut; (3) areal perairan laut yang tercantum dalam Surat Izin Usaha Perikanan dan digunakan untuk perikanan tangkap; (4) armada kapal penangkap ikan; (5) gudang pendingin ikan di darat Kota Bitung. Pengelompokan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1), (2), dan (3) objek PBB-P5L sektor lainnya karena semuanya berada di laut; (4) bukan objek PBB karena benda bergerak; (5) objek PBB-P2 Kota Bitung", B: "(1) objek PBB-P5L sektor migas; (2), (3), dan (4) objek PBB-P5L sektor lainnya karena dipakai di perairan berizin; (5) objek PBB-P2 Kota Bitung", C: "(1) objek PBB-P5L sektor migas; (2) dan (3) objek PBB-P5L sektor lainnya; (4) bukan objek PBB karena benda bergerak; (5) objek PBB-P2 Kota Bitung", D: "(1) objek PBB-P5L sektor migas; (2) objek PBB-P5L sektor lainnya; (3) bukan objek PBB karena laut bukan bumi; (4) bukan objek PBB; (5) objek PBB-P2 Kota Bitung" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pipa di dalam wilayah kerja migas berada di kawasan pertambangan migas, sehingga menjadi bangunan PBB-P5L sektor migas (Pasal 2 huruf c, Pasal 5 ayat (2), dan Pasal 9 ayat (1) huruf c PMK 186/2019); sektor lainnya hanya mencakup objek di perairan selain objek sektor perkebunan, perhutanan, dan pertambangan. FSRU yang ditambatkan tetap dan perairan perikanan tangkap yang berizin usaha perikanan adalah objek sektor lainnya (Pasal 8 ayat (1) dan Pasal 9 ayat (2) PMK 186/2019 s.t.d.d. PMK 234/2022). Kapal adalah benda bergerak, bukan bumi atau bangunan; gudang di darat Kota Bitung adalah objek PBB-P2.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 2 huruf f PMK 186/2019 s.t.d.d. PMK 234/2022: sektor lainnya adalah objek selain objek sektor pertambangan migas; pipa di dalam wilayah kerja migas masuk sektor migas",
          B: "Kapal penangkap ikan bukan konstruksi teknik yang dilekatkan secara tetap (Pasal 1 angka 2 UU PBB); yang menjadi bumi sektor lainnya adalah perairan yang tercantum dalam izin usaha perikanan, bukan kapalnya",
          D: "Penjelasan Pasal 1 angka 1 UU PBB memasukkan laut wilayah ke dalam permukaan bumi, dan Pasal 8 ayat (1) huruf a PMK 186/2019 s.t.d.d. PMK 234/2022 menjadikan perairan untuk perikanan tangkap berizin sebagai bumi sektor lainnya"
        },
        jebakan: "Letak di laut tidak otomatis berarti sektor lainnya: uji dulu apakah objek berada di kawasan migas. Lalu pisahkan bumi atau bangunan dari benda bergerak."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 huruf c dan f, Pasal 5 ayat (2), Pasal 8, dan Pasal 9 PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 angka 34 dan Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 130,
      verifikasi: "✅",
      kembaranDari: "B8-059",
      sejak: "9.5.0"
    },
    {
      id: "B8-186",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B8-15",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-15: PT Kopi Rejang Lestari memiliki dua kebun kopi di Kabupaten Rejang Lebong dengan NOP dan SPPT terpisah. SPPT PBB-P5L 2026 kedua kebun diterima pada 10 Maret 2026: Kebun Bukit Sari Rp512.000.000 dan Kebun Tanjung Aru Rp276.400.000. Hasil penelitian internal: (i) menurut perusahaan, SPPT Kebun Bukit Sari masih menilai 12 ha lahan sebagai areal produktif, padahal sejak September 2025 lahan itu telah diwakafkan dan digunakan sepenuhnya untuk pesantren yang dikelola yayasan nirlaba; (ii) pada 14 Agustus 2026 tanah longsor merusak sebagian tanaman Kebun Tanjung Aru, sedangkan SPPT-nya sudah sesuai keadaan 1 Januari 2026. Langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan permohonan pengurangan untuk Kebun Bukit Sari dan keberatan atas SPPT Kebun Tanjung Aru karena tanah longsor, keduanya paling lambat 9 Juni 2026; kedua SPPT jatuh tempo 9 September 2026", B: "Mengajukan keberatan tertulis atas SPPT Kebun Bukit Sari paling lambat 9 September 2026 dan permohonan pengurangan untuk Kebun Tanjung Aru; kedua SPPT jatuh tempo 9 September 2026", C: "Mengajukan keberatan tertulis atas SPPT Kebun Bukit Sari paling lambat 9 Juni 2026 dan permohonan pengurangan untuk Kebun Tanjung Aru; pelunasan SPPT Kebun Bukit Sari ditunda tanpa denda sampai keputusan keberatan terbit", D: "Mengajukan keberatan tertulis atas SPPT Kebun Bukit Sari paling lambat 9 Juni 2026 dan permohonan pengurangan untuk Kebun Tanjung Aru karena bencana alam; SPPT Kebun Bukit Sari tetap harus dilunasi paling lambat 9 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Masalah (i) adalah penetapan yang tidak benar: per 1 Januari 2026 lahan 12 ha sudah digunakan semata-mata untuk pendidikan dan ibadah yang tidak dimaksudkan memperoleh keuntungan (Pasal 3 ayat (1) huruf a UU PBB; tanah wakaf dan pesantren adalah contoh dalam penjelasannya), sehingga diselesaikan dengan keberatan dalam 3 bulan sejak SPPT diterima: hari terakhir 9 Juni 2026. Masalah (ii) terjadi setelah 1 Januari dan penetapannya benar, sehingga jalurnya pengurangan karena bencana alam (Pasal 19 ayat (1) huruf b). Keberatan tidak menunda pelunasan SPPT yang jatuh tempo 9 September 2026.",
        jejakHitung: [
          ["SPPT diterima", "10 Maret 2026"],
          ["Hari terakhir keberatan Kebun Bukit Sari (3 bulan sejak diterima)", "9 Juni 2026"],
          ["Jatuh tempo SPPT (6 bulan sejak diterima)", "9 September 2026"]
        ],
        mengapaSalah: {
          A: "Jalurnya tertukar: objek yang sudah dikecualikan per 1 Januari tetapi masih ditetapkan adalah objek keberatan, kerusakan karena bencana setelah 1 Januari adalah objek pengurangan",
          B: "Batas keberatan 3 bulan sejak SPPT diterima (9 Juni 2026); 9 September 2026 adalah jatuh tempo pelunasan 6 bulan",
          C: "Pasal 15 ayat (6) UU PBB: keberatan tidak menunda kewajiban membayar; pelunasan setelah 9 September 2026 dikenai denda 2% sebulan"
        },
        jebakan: "Satu wajib pajak, dua masalah, dua jalur: uji dulu apakah masalahnya sudah ada pada keadaan 1 Januari (keberatan) atau baru terjadi sesudahnya (pengurangan)."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf a dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅",
      kembaranDari: "B8-060",
      sejak: "9.5.0"
    },
    {
      id: "B8-187",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B8-15",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-15: Kedua SPPT PBB-P5L 2026 PT Kopi Rejang Lestari (Kebun Bukit Sari Rp512.000.000 dan Kebun Tanjung Aru Rp276.400.000) dilunasi penuh pada 2 September 2026. Keberatan atas SPPT Kebun Bukit Sari dikabulkan sebagian: dari 12 ha lahan pesantren yang diajukan, hanya 9 ha yang dikeluarkan karena 3 ha ternyata masih dipakai perusahaan sebagai pembibitan. Dalam SPPT, lahan itu dinilai sebagai areal produktif dengan nilai tanah Rp4.500/m² dan SIT Rp6.800/m²; NJOPTKP tetap melekat pada Kebun Bukit Sari. Untuk Kebun Tanjung Aru, perusahaan baru pada Oktober 2026, setelah SPPT-nya lunas, mengajukan permohonan pengurangan 50% karena tanah longsor 14 Agustus 2026. Perusahaan tidak mempunyai utang pajak lain. Jumlah kelebihan pembayaran PBB yang dapat dikembalikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.034.000", B: "Rp140.234.000", C: "Rp2.712.000", D: "Rp5.085.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Hanya keputusan keberatan yang menimbulkan kelebihan pembayaran: PBB Kebun Bukit Sari turun sebesar NJOP 9 ha yang dikabulkan (nilai tanah + SIT) × 40% × 0,5%. Pengurangan PBB diberikan paling tinggi 75% atau 100% dari PBB yang belum dilunasi (Pasal 4 ayat (3) PMK 129/2023); karena SPPT Kebun Tanjung Aru sudah lunas sebelum permohonan diajukan, tidak ada bagian yang dapat dikurangkan atau dikembalikan.",
        jejakHitung: [
          ["NJOP 9 ha = 90.000 m² × (4.500 + 6.800)", "Rp1.017.000.000"],
          ["Penurunan PBB Bukit Sari 1.017.000.000 × 40% × 0,5%", "Rp2.034.000"],
          ["PBB Tanjung Aru yang belum dilunasi saat permohonan pengurangan", "Rp0 → pengurangan Rp0"],
          ["Jumlah kelebihan pembayaran", "Rp2.034.000"]
        ],
        mengapaSalah: {
          B: "Pengurangan 50% × Rp276.400.000 = Rp138.200.000 ikut dihitung sebagai kelebihan, padahal pengurangan PBB hanya diberikan dari PBB yang belum dilunasi",
          C: "Memakai seluruh 12 ha yang diajukan (120.000 m² × 11.300 × 0,2%), padahal keberatan hanya dikabulkan untuk 9 ha",
          D: "Penurunan dihitung 0,5% × NJOP tanpa NJKP 40% (1.017.000.000 × 0,5%)"
        },
        jebakan: "Keberatan mengoreksi penetapan sehingga pembayaran yang sudah dilakukan dapat dikembalikan; pengurangan PBB hanya memotong PBB yang belum dilunasi. Pakai luas yang dikabulkan, bukan luas yang diajukan."
      },
      dasarHukum: [{ pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) huruf b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 4 ayat (2) huruf a dan ayat (3) serta Pasal 5 ayat (5) PMK 129/2023", berlakuSejak: "2023-12-30" }, { pasal: "PMK 81/2024 (pengembalian kelebihan pembayaran pajak)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅",
      kembaranDari: "B8-061",
      sejak: "9.5.0"
    },
    {
      id: "B8-188",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Nikel Lalindu Jaya, pemegang IUP Operasi Produksi nikel, menerima SPOP sektor pertambangan pada 8 Januari 2026 dan menyampaikannya tepat waktu dengan luas areal penambangan 1.800 ha. Hasil pemeriksaan KPP menunjukkan luas areal yang sebenarnya 2.300 ha, sehingga pajak terutang lebih besar daripada pajak yang dihitung berdasarkan SPOP. KPP menerbitkan SKP PBB-P5L 2026 pada 14 Juli 2026 yang diterima perusahaan pada 21 Juli 2026. Pernyataan yang paling tepat mengenai SKP tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b UU PBB, memuat selisih pajak terutang ditambah denda administrasi 25% dari selisih tersebut, dan harus dilunasi paling lambat satu bulan sejak SKP diterbitkan, yaitu 13 Agustus 2026", B: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b UU PBB, memuat selisih pajak terutang ditambah denda administrasi 25% dari selisih tersebut, dan harus dilunasi paling lambat satu bulan sejak SKP diterima, yaitu 20 Agustus 2026", C: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b UU PBB, memuat selisih pajak terutang ditambah denda administrasi 2% sebulan paling lama 24 bulan, dan harus dilunasi paling lambat satu bulan sejak SKP diterima, yaitu 20 Agustus 2026", D: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat seluruh pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak SKP diterima, yaitu 20 Agustus 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP sudah disampaikan, tetapi pemeriksaan menunjukkan pajak terutang lebih besar, sehingga SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b. Isinya selisih pajak terutang ditambah denda administrasi 25% dari selisih (ayat (4)). SKP dilunasi paling lambat 1 bulan sejak tanggal diterima (Pasal 11 ayat (2)); jangka itu berakhir sehari sebelum tanggal yang sama bulan berikutnya, yaitu 20 Agustus 2026.",
        jejakHitung: [
          ["SKP diterima", "21 Juli 2026"],
          ["Jatuh tempo (1 bulan sejak diterima)", "20 Agustus 2026"]
        ],
        mengapaSalah: {
          A: "Titik awal jatuh tempo SKP adalah tanggal diterima, bukan tanggal diterbitkan",
          C: "Denda 2% sebulan adalah sanksi keterlambatan pembayaran (Pasal 11 ayat (3)), bukan isi SKP huruf b",
          D: "Huruf a dipakai bila SPOP tidak disampaikan dan setelah ditegur tetap tidak disampaikan; di sini SPOP sudah disampaikan"
        },
        jebakan: "Keempat kalimat hampir sama; bandingkan per frasa: dasar huruf, dasar denda (pokok atau selisih), jenis denda, dan titik awal jatuh tempo."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf b dan ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-062",
      sejak: "9.5.0"
    },
    {
      id: "B8-189",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "PT Bara Kayan Utama memegang IUP Operasi Produksi batubara di Kabupaten Bulungan. Per 1 Januari 2026 perusahaan memiliki: (1) areal pit dan jalan tambang di dalam wilayah IUP; (2) stockpile dan dermaga khusus pengapalan batubara yang berada di luar wilayah IUP tetapi terhubung dengan wilayah IUP melalui jalan angkut (hauling) dan hanya digunakan untuk kegiatan usaha pertambangan perusahaan; (3) gedung kantor pusat di Kota Tarakan; (4) mes karyawan tambang di dalam wilayah IUP. Berdasarkan Pasal 38 ayat (1) UU 1/2022 dan PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022, pemisahan objek PBB-P5L dan PBB-P2 Tahun Pajak 2026 yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1), (2), dan (4) objek PBB-P5L sektor pertambangan mineral atau batubara karena berada di kawasan yang digunakan untuk kegiatan usaha pertambangan; (3) objek PBB-P2 Kota Tarakan", B: "(1) dan (4) objek PBB-P5L sektor pertambangan mineral atau batubara karena berada di dalam wilayah IUP; (2) dan (3) objek PBB-P2 karena berada di luar wilayah IUP", C: "(1), (2), (3), dan (4) objek PBB-P5L sektor pertambangan mineral atau batubara karena seluruhnya dimiliki badan usaha pemegang IUP", D: "(1) dan (2) objek PBB-P5L sektor pertambangan mineral atau batubara karena dipakai langsung untuk menambang dan mengapalkan; (3) dan (4) objek PBB-P2" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 38 ayat (1) UU 1/2022 memakai kriteria penggunaan kawasan: kawasan yang digunakan untuk kegiatan usaha pertambangan dikecualikan dari PBB-P2 dan tetap PBB-P5L. Menurut Pasal 7 ayat (2) PMK 186/2019, kawasan pertambangan mineral atau batubara meliputi areal dalam IUP dan areal di luarnya yang merupakan satu kesatuan yang digunakan untuk kegiatan usaha pertambangan dan secara fisik tidak terpisahkan, termasuk yang terhubung melalui jalan (ayat (3) huruf b). Bangunan di dalam kawasan itu, termasuk mes karyawan, adalah bangunan PBB-P5L (Pasal 9 ayat (1) huruf e). Kantor pusat di Kota Tarakan berada di luar kawasan sehingga objek PBB-P2.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Batas kawasan bukan hanya wilayah IUP; areal di luar IUP yang menyatu, digunakan untuk usaha pertambangan, dan terhubung melalui jalan termasuk kawasan pertambangan (Pasal 7 ayat (2) huruf b dan ayat (3) huruf b PMK 186/2019)",
          C: "Kriteria Pasal 38 ayat (1) UU 1/2022 adalah penggunaan kawasan, bukan identitas pemilik; kantor pusat di kota di luar kawasan tetap objek PBB-P2",
          D: "Bangunan PBB-P5L adalah konstruksi teknik yang dilekatkan tetap pada bumi di dalam kawasan pertambangan (Pasal 9 ayat (1) huruf e), tidak terbatas pada yang dipakai langsung untuk menambang"
        },
        jebakan: "Tiga kriteria yang mirip: wilayah izin, pemilik, dan penggunaan kawasan. Undang-undang memakai penggunaan kawasan, dan PMK 186/2019 memperluas kawasan ke areal yang menyatu secara fisik."
      },
      dasarHukum: [{ pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 2 huruf e, Pasal 7 ayat (2) dan (3), serta Pasal 9 ayat (1) huruf e PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-063",
      sejak: "9.5.0"
    },
    {
      id: "B8-190",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 6 PMK 61/2023: (1) Pejabat menerbitkan Surat Teguran setelah lewat waktu 7 (tujuh) Hari sejak saat jatuh tempo pembayaran Utang Pajak, dalam hal Wajib Pajak tidak melunasi Utang Pajak. (2) Apabila setelah lewat waktu 21 (dua puluh satu) Hari terhitung sejak tanggal Surat Teguran disampaikan, Penanggung Pajak belum melunasi Utang Pajak, Surat Paksa diterbitkan oleh Pejabat dan diberitahukan oleh Jurusita Pajak kepada Penanggung Pajak. (3) Apabila setelah lewat waktu 2 (dua) kali 24 (dua puluh empat) jam sejak tanggal Surat Paksa diberitahukan, Penanggung Pajak belum melunasi Utang Pajak, Pejabat menerbitkan surat perintah melaksanakan Penyitaan dan Jurusita Pajak melaksanakan Penyitaan terhadap Barang milik Penanggung Pajak.",
      stem: "STP PBB-P5L PT Hutan Sesayap Lestari (pokok Rp84.000.000 dan denda Rp6.720.000) diterima pada 22 Juni 2026 dan tidak dilunasi. Surat Teguran kemudian disampaikan kepada perusahaan pada 3 Agustus 2026, dan Surat Paksa diberitahukan kepada penanggung pajak pada 1 September 2026 pukul 10.00. Dalam soal ini, frasa \"setelah lewat waktu n Hari\" berarti tindakan paling cepat dilakukan pada hari ke-(n + 1) setelah tanggal acuan. Berdasarkan kutipan tersebut dan ketentuan jatuh tempo STP PBB, rangkaian waktu yang paling tepat adalah ...",
      kataKualifikasi: ["paling cepat"],
      opsi: { A: "STP jatuh tempo 21 Juli 2026; Surat Teguran paling cepat 29 Juli 2026; Surat Paksa paling cepat 20 Agustus 2026; penyitaan paling cepat setelah 3 September 2026 pukul 10.00", B: "STP jatuh tempo 21 Desember 2026; Surat Teguran paling cepat 29 Desember 2026; Surat Paksa paling cepat 21 hari setelah Surat Teguran disampaikan; penyitaan setelah 2 × 24 jam", C: "STP jatuh tempo 21 Juli 2026; Surat Teguran paling cepat 29 Juli 2026; Surat Paksa paling cepat 25 Agustus 2026; penyitaan paling cepat setelah 3 September 2026 pukul 10.00", D: "STP jatuh tempo 21 Juli 2026; Surat Teguran paling cepat 29 Juli 2026; Surat Paksa paling cepat 25 Agustus 2026; penyitaan dapat langsung dilaksanakan saat Surat Paksa diberitahukan, 1 September 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB dilunasi paling lambat 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB): hari terakhir 21 Juli 2026. Surat Teguran paling cepat hari ke-8 setelah jatuh tempo (29 Juli 2026). Karena Surat Teguran disampaikan 3 Agustus 2026, Surat Paksa paling cepat hari ke-22 setelah tanggal itu, yaitu 25 Agustus 2026. Penyitaan baru dapat dilaksanakan setelah lewat 2 × 24 jam sejak Surat Paksa diberitahukan, yaitu setelah 3 September 2026 pukul 10.00.",
        jejakHitung: [
          ["STP diterima", "22 Juni 2026"],
          ["Jatuh tempo STP (1 bulan sejak diterima)", "21 Juli 2026"],
          ["Surat Teguran: lewat 7 hari → hari ke-8", "29 Juli 2026"],
          ["Surat Teguran disampaikan", "3 Agustus 2026"],
          ["Surat Paksa: lewat 21 hari sejak 3 Agustus → hari ke-22", "25 Agustus 2026"],
          ["Penyitaan: lewat 2 × 24 jam sejak 1 September 2026 pukul 10.00", "setelah 3 September 2026 pukul 10.00"]
        ],
        mengapaSalah: {
          A: "Jangka 21 hari dihitung dari tanggal paling cepat Surat Teguran (29 Juli), padahal titik acuannya tanggal Surat Teguran disampaikan (3 Agustus)",
          B: "Enam bulan adalah jatuh tempo SPPT; STP PBB jatuh tempo satu bulan sejak diterima (Pasal 11 ayat (4) UU PBB)",
          D: "Pasal 6 ayat (3) PMK 61/2023: penyitaan dilaksanakan setelah lewat 2 × 24 jam sejak Surat Paksa diberitahukan, bukan bersamaan"
        },
        jebakan: "Tiga titik acuan berbeda: jatuh tempo (Surat Teguran), tanggal Surat Teguran disampaikan (Surat Paksa), dan saat Surat Paksa diberitahukan (penyitaan)."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "Pasal 6 ayat (1) sampai (3) PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "B8-065",
      sejak: "9.5.0"
    },
    {
      id: "B8-191",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Arang Mahakam Sejahtera (IUP operasi produksi batubara di Kabupaten Kutai Barat; tahun buku kalender) menyusun proyeksi PBB-P5L 2026. Data umum: penjualan batubara 2025 sebanyak 6,8 juta ton; royalti 2025 Rp312 miliar; jumlah karyawan 2.150 orang. Data objek per 1 Januari 2026 (perusahaan tidak memiliki objek PBB-P5L lain): di dalam wilayah IUP terdapat Areal Cadangan Produksi 1.850 ha (Rp2.400/m²), Areal Belum Dimanfaatkan 4.200 ha (Rp1.100/m²), dan Areal Emplasemen 35 ha (Rp9.000/m²); NJOP tubuh bumi operasi produksi hasil penilaian DJP Rp412.500.000.000; bangunan di dalam wilayah IUP berupa crushing plant Rp58.000.000.000, bengkel Rp6.400.000.000, dan mess karyawan Rp9.700.000.000. Di luar wilayah IUP, perusahaan memakai areal stockpile dan pelabuhan khusus 12 ha (Rp15.000/m²) yang terhubung ke wilayah IUP melalui konveyor dan hanya dipakai untuk mengangkut batubara perusahaan; bangunan dermaga dan konveyor di areal itu Rp74.000.000.000. Perusahaan juga memiliki rumah dinas direksi di Kota Samarinda (NJOP Rp5.600.000.000) serta alat berat dan dump truck Rp280.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.160.676.000", B: "Rp1.312.300.000", C: "Rp1.323.476.000", D: "Rp1.312.276.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kawasan pertambangan minerba meliputi areal dalam IUP dan areal di luar IUP yang merupakan satu kesatuan dan secara fisik tidak terpisahkan, termasuk areal yang terhubung melalui konveyor (Pasal 7 ayat (2) dan (3) huruf b PMK 186/2019). Karena itu stockpile dan pelabuhan khusus beserta dermaga dan konveyornya ikut dihitung. Rumah dinas di Kota Samarinda di luar kawasan sehingga objek PBB-P2 (Pasal 38 ayat (1) UU 1/2022), alat berat dan dump truck adalah benda bergerak, sedangkan penjualan, royalti, dan jumlah karyawan adalah data berlebih. NJKP 40% (PP 25/2002), NJOPTKP Rp12.000.000, tarif 0,5%.",
        jejakHitung: [
          ["Areal Cadangan Produksi 18.500.000 m² × 2.400", "Rp44.400.000.000"],
          ["Areal Belum Dimanfaatkan 42.000.000 m² × 1.100", "Rp46.200.000.000"],
          ["Areal Emplasemen 350.000 m² × 9.000", "Rp3.150.000.000"],
          ["Tubuh bumi operasi produksi", "Rp412.500.000.000"],
          ["Bangunan dalam IUP 58.000.000.000 + 6.400.000.000 + 9.700.000.000", "Rp74.100.000.000"],
          ["Stockpile dan pelabuhan: 120.000 m² × 15.000 + 74.000.000.000", "Rp75.800.000.000"],
          ["NJOP objek", "Rp656.150.000.000"],
          ["(656.150.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.312.276.000"]
        ],
        mengapaSalah: {
          A: "Areal stockpile dan pelabuhan khusus beserta dermaga dan konveyornya dikeluarkan karena di luar wilayah IUP, padahal terhubung melalui konveyor sehingga termasuk kawasan pertambangan",
          B: "NJOPTKP Rp12.000.000 tidak dikurangkan (656.150.000.000 × 0,2%)",
          C: "Rumah dinas direksi di Kota Samarinda ikut dihitung, padahal di luar kawasan pertambangan sehingga objek PBB-P2"
        },
        jebakan: "Batas kawasan pertambangan tidak berhenti di garis IUP: areal yang menyatu secara fisik dan terhubung melalui sungai, jaringan pipa, konveyor, jalan, atau jembatan ikut masuk. Sebaliknya, aset di kota lain yang tidak menyatu dengan kawasan menjadi PBB-P2, dan benda bergerak bukan bangunan."
      },
      dasarHukum: [{ pasal: "Pasal 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 7 ayat (2) dan (3) huruf b, Pasal 9 ayat (1) huruf e, dan Pasal 21 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "B8-066",
      sejak: "9.5.0"
    },
    {
      id: "B8-192",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Hutan Tanaman Sintang Raya (perizinan berusaha pemanfaatan hutan tanaman; tahun buku kalender) memiliki satu objek PBB-P5L sektor perhutanan dengan NJOP Rp512.640.000.000. SPPT PBB-P5L 2026 sebesar Rp1.025.256.000 diterbitkan pada 20 Februari 2026 dan diterima perusahaan pada 9 Maret 2026. Pembayaran PBB: 31 Agustus 2026 Rp600.000.000; 24 September 2026 Rp300.000.000; dan 12 November 2026 Rp125.256.000. Data lain: angsuran PPh Pasal 25 Masa Agustus 2026 disetor terlambat 3 hari, dan perusahaan sempat menanyakan pengurangan PBB ke KPP tetapi tidak mengajukan permohonan. Asumsikan denda dihitung terpisah untuk setiap bagian pokok sesuai tanggal pembayarannya dan bagian dari bulan dihitung satu bulan penuh. Denda administrasi PBB yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp13.515.360", B: "Rp31.515.360", C: "Rp5.010.240", D: "Rp25.515.360" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "SPPT harus dilunasi paling lambat 6 bulan sejak tanggal diterima (Pasal 11 ayat (1) UU PBB). Mengikuti contoh Penjelasan (diterima 1 Maret, jatuh tempo 31 Agustus), SPPT yang diterima 9 Maret 2026 jatuh tempo 8 September 2026. Pembayaran 31 Agustus tepat waktu; Rp300.000.000 terlambat 16 hari (1 bulan) dan Rp125.256.000 terlambat 2 bulan 4 hari (3 bulan), masing-masing dikenai denda 2% sebulan (Pasal 11 ayat (3)).",
        jejakHitung: [
          ["Cek SPPT: (512.640.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.025.256.000"],
          ["Jatuh tempo (6 bulan sejak 9 Maret 2026)", "8 September 2026"],
          ["Rp600.000.000 dibayar 31 Agustus", "tepat waktu"],
          ["Rp300.000.000: 9 September sampai 24 September → 1 bulan × 2%", "Rp6.000.000"],
          ["Rp125.256.000: 9 September sampai 12 November → 3 bulan × 2%", "Rp7.515.360"],
          ["Jumlah denda", "Rp13.515.360"]
        ],
        mengapaSalah: {
          B: "Jatuh tempo dihitung dari tanggal terbit (19 Agustus 2026), sehingga Rp600.000.000 ikut didenda 1 bulan dan Rp300.000.000 didenda 2 bulan",
          C: "Bagian bulan dibulatkan ke bawah: Rp300.000.000 tidak didenda dan Rp125.256.000 hanya 2 bulan",
          D: "Seluruh sisa Rp425.256.000 dikenai denda 3 bulan sampai pelunasan terakhir, padahal Rp300.000.000 sudah dibayar 24 September"
        },
        jebakan: "Jangka waktu 6 bulan dihitung sejak SPPT diterima, bukan sejak diterbitkan. PPh Pasal 25 yang terlambat dan pertanyaan tentang pengurangan PBB adalah data pengalih; denda PBB tetap 2% sebulan, bukan tarif bunga KMK."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "B8-067",
      sejak: "9.5.0"
    },
    {
      id: "B8-193",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PMK 81/2024 Pasal 79 ayat (3) dan Pasal 81 ayat (1): \"Tanggal penyampaian Surat Pemberitahuan Objek Pajak oleh Direktorat Jenderal Pajak sebagaimana dimaksud pada ayat (1) merupakan tanggal diterimanya Surat Pemberitahuan Objek Pajak oleh Wajib Pajak, meliputi: ... b. tanggal 31 Maret Tahun Pajak Pajak Bumi dan Bangunan terutang, untuk Objek Pajak Pajak Bumi dan Bangunan sektor perhutanan, Objek Pajak Pajak Bumi dan Bangunan sektor pertambangan mineral atau batubara, dan Objek Pajak Pajak Bumi dan Bangunan sektor lainnya; ...\" \"Surat Pemberitahuan Objek Pajak sebagaimana dimaksud dalam Pasal 79 ayat (1) wajib diisi dengan jelas, benar, dan lengkap serta ditandatangani oleh Wajib Pajak dan disampaikan kepada Direktorat Jenderal Pajak paling lama 30 (tiga puluh) hari setelah tanggal diterimanya Surat Pemberitahuan Objek Pajak.\"",
      stem: "PT Rimba Kapuas Lestari memperoleh perizinan berusaha pemanfaatan hutan tanaman yang baru di Kabupaten Sanggau pada 16 Juni 2026; areal izin itu belum pernah menjadi objek PBB-P5L perusahaan. Perusahaan mengajukan pendaftaran objek pada 7 Juli 2026 dan menerima Surat Keterangan Terdaftar Objek Pajak PBB pada 15 Juli 2026. Direktur keuangan berpendapat bahwa perusahaan sebenarnya cukup menunggu DJP mendata areal itu, bahwa areal baru sudah terutang PBB-P5L 2026 secara proporsional sejak izin terbit, dan bahwa SPOP Elektronik Tahun Pajak 2027 dianggap diterima pada 1 Februari 2027. Berdasarkan kutipan tersebut dan ketentuan UU PBB, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Perusahaan cukup menunggu pendataan oleh DJP; areal baru dikenai PBB mulai Tahun Pajak 2027; SPOP Elektronik Tahun Pajak 2027 disampaikan paling lambat 30 April 2027", B: "Perusahaan wajib mendaftarkan areal baru; areal baru dikenai PBB mulai Tahun Pajak 2027; SPOP Elektronik Tahun Pajak 2027 disampaikan paling lambat 30 April 2027", C: "Perusahaan wajib mendaftarkan areal baru; areal baru dikenai PBB 2026 secara proporsional sejak 16 Juni 2026; SPOP Elektronik Tahun Pajak 2027 disampaikan paling lambat 30 April 2027", D: "Perusahaan wajib mendaftarkan areal baru; areal baru dikenai PBB mulai Tahun Pajak 2027; SPOP Elektronik Tahun Pajak 2027 disampaikan paling lambat 3 Maret 2027" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Subjek pajak wajib mendaftarkan objeknya (Pasal 9 ayat (1) UU PBB); sejak Coretax pendaftaran dilakukan paling lama 1 bulan setelah persyaratan subjektif terpenuhi untuk memperoleh Surat Keterangan Terdaftar Objek Pajak PBB (Pasal 71 ayat (1) PMK 81/2024). Pajak terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB): pada 1 Januari 2026 izin belum ada, sehingga areal baru dikenai PBB mulai Tahun Pajak 2027. Untuk objek sektor perhutanan, SPOP Elektronik dianggap diterima pada 31 Maret Tahun Pajak terutang (Pasal 79 ayat (3) huruf b), dan wajib disampaikan paling lama 30 hari setelah itu (Pasal 81 ayat (1)): 30 April 2027.",
        jejakHitung: [
          ["SPOP Elektronik Tahun Pajak 2027 dianggap diterima (sektor perhutanan)", "31 Maret 2027"],
          ["Sisa hari April setelah 31 Maret", "30 hari"],
          ["Batas penyampaian", "30 April 2027"]
        ],
        mengapaSalah: {
          A: "Pendaftaran objek adalah kewajiban aktif subjek pajak (Pasal 9 ayat (1) UU PBB; Pasal 71 ayat (1) PMK 81/2024), bukan menunggu pendataan",
          C: "PBB tidak dikenakan secara proporsional; keadaan objek dikunci pada 1 Januari, dan pada 1 Januari 2026 izin belum ada",
          D: "Tanggal 1 Februari (sehingga batas 3 Maret 2027) hanya untuk sektor perkebunan, migas, dan panas bumi; sektor perhutanan memakai 31 Maret"
        },
        jebakan: "Tiga hal diuji sekaligus: kewajiban aktif mendaftar, keadaan 1 Januari, dan tanggal anggapan diterimanya SPOP Elektronik yang berbeda per sektor (1 Februari atau 31 Maret)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) dan Pasal 9 ayat (1) dan (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 71 ayat (1), Pasal 79 ayat (3) huruf b, dan Pasal 81 ayat (1)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-072",
      sejak: "9.5.0"
    },
    {
      id: "B8-194",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "PT Energi Kawah Sirna memegang Izin Panas Bumi di Kabupaten Bandung Barat. Di dalam Wilayah Kerja Panas Buminya terdapat blok hutan produksi seluas 420 ha yang belum memperoleh persetujuan penggunaan kawasan hutan, tidak pernah dimasuki kegiatan perusahaan, dan tidak dibebani izin pihak lain. Tapak sumur, pipa uap, dan pembangkit perusahaan berada di areal lain dalam Wilayah Kerja itu. Subjek PBB-P5L atas permukaan bumi blok hutan tersebut untuk Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Energi Kawah Sirna, karena blok itu berada di dalam Wilayah Kerja Panas Bumi yang tercantum dalam izinnya", B: "Kementerian yang membidangi kehutanan, karena kawasan hutan produksi itu tetap milik negara", C: "Tidak ada, karena blok itu tidak dipunyai haknya dan tidak diperoleh manfaatnya oleh perusahaan", D: "PT Energi Kawah Sirna, tetapi baru mulai Tahun Pajak 2027 setelah blok itu didaftarkan dengan SPOP" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Subjek pajak adalah yang secara nyata mempunyai hak atas bumi dan/atau memperoleh manfaat atas bumi (Pasal 4 ayat (1) UU PBB). Permukaan bumi onshore sektor panas bumi hanya areal di dalam kawasan yang dimiliki dengan suatu hak atau diperoleh manfaatnya oleh wajib pajak (Pasal 6 ayat (4) PMK 186/2019); areal di dalam kawasan yang tidak dipunyai haknya dan tidak diperoleh manfaatnya tidak dikenakan PBB sektor panas bumi (Pasal 6 ayat (7)). Blok hutan yang tidak disentuh perusahaan tidak memiliki subjek PBB-P5L.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Letak di dalam Wilayah Kerja saja tidak cukup untuk permukaan bumi; yang menentukan adalah hak atau manfaat secara nyata",
          B: "Kementerian tidak menjadi subjek PBB-P5L atas blok itu; Pasal 6 ayat (7) PMK 186/2019 menyatakan areal tersebut tidak dikenakan PBB sektor panas bumi",
          D: "Masalahnya bukan pendaftaran: selama perusahaan tidak mempunyai hak dan tidak memperoleh manfaat, blok itu tidak dikenakan PBB sektor panas bumi"
        },
        jebakan: "Bandingkan dengan areal pinjam pakai yang dipakai untuk tapak sumur: di sana perusahaan memperoleh manfaat sehingga menjadi subjek. Kata kuncinya hak atau manfaat secara nyata, bukan batas Wilayah Kerja di peta izin."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (4) dan (7) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "B8-073",
      sejak: "9.5.0"
    },
    {
      id: "B8-195",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Sawit Mentaya Raya menjual seluruh kebun kelapa sawit ber-HGU beserta pabrik kelapa sawitnya di Kabupaten Kotawaringin Timur kepada PT Agro Seruyan Lestari. Akta jual beli ditandatangani pada 14 Juli 2026 dengan nilai pengalihan hak atas tanah dan bangunan (termasuk gedung pabrik) Rp186.000.000.000; kendaraan angkut, alat berat, dan persediaan tandan buah segar Rp41.500.000.000 dijual dengan faktur terpisah. Pendaftaran peralihan HGU selesai pada September 2026. SPPT PBB-P5L 2026 atas kebun tersebut sebesar Rp438.600.000 diterima pada 23 Maret 2026 atas nama PT Sawit Mentaya Raya. Penjual bukan pengembang real estat dan tidak memperoleh fasilitas khusus. Pernyataan yang paling tepat mengenai PBB-P5L, PPh, dan BPHTB atas transaksi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L 2026 dibagi proporsional antara penjual dan pembeli sejak tanggal akta jual beli; penjual membayar PPh final 2,5% × Rp186.000.000.000 = Rp4.650.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", B: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp227.500.000.000 = Rp5.687.500.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", C: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp186.000.000.000 = Rp4.650.000.000; pembeli membayar BPHTB kepada pemerintah provinsi dengan tarif Perda paling tinggi 5%", D: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan pembeli menjadi wajib pajak mulai Tahun Pajak 2027; penjual membayar PPh final 2,5% × Rp186.000.000.000 = Rp4.650.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PBB terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB), sehingga SPPT 2026 tetap atas nama penjual dan pembeli, yang secara nyata mempunyai hak atas bumi sejak peralihan (Pasal 4 ayat (1)), menjadi wajib pajak mulai 2027. PPh final 2,5% dikenakan atas jumlah bruto nilai pengalihan hak atas tanah dan/atau bangunan (Pasal 2 ayat (1) huruf a PP 34/2016); kendaraan, alat berat, dan persediaan bukan tanah atau bangunan. BPHTB dibayar pembeli sebagai pajak kabupaten/kota dengan tarif Perda paling tinggi 5% (Pasal 4 ayat (2), Pasal 45 ayat (1), dan Pasal 47 UU 1/2022).",
        jejakHitung: [
          ["Dasar PPh final (tanah dan bangunan)", "Rp186.000.000.000"],
          ["PPh final 2,5%", "Rp4.650.000.000"],
          ["Kendaraan, alat berat, persediaan Rp41.500.000.000", "di luar PPh final; penghasilan usaha biasa"]
        ],
        mengapaSalah: {
          A: "PBB tidak dibagi per bulan atau sejak tanggal akta; Pasal 8 ayat (2) mengunci subjek dan objek pada 1 Januari",
          B: "Kendaraan, alat berat, dan persediaan bukan tanah atau bangunan sehingga tidak masuk dasar PPh final",
          C: "BPHTB adalah pajak yang dipungut pemerintah kabupaten/kota, bukan provinsi"
        },
        jebakan: "Satu penjualan kebun menyentuh tiga rezim: PBB-P5L (pusat, keadaan 1 Januari), PPh final pengalihan tanah dan bangunan (pusat, hanya atas nilai tanah dan bangunan), dan BPHTB (pajak kabupaten/kota)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 34/2016 Pasal 2", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 4 ayat (2) dan Pasal 44–47 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "B8-074",
      sejak: "9.5.0"
    },
    {
      id: "B8-196",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kopi Dataran Semendo memegang HGU kebun kopi di Kabupaten Muara Enim dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif 860 ha (nilai tanah Rp5.400/m², SIT kopi Rp8.100/m²) yang di dalamnya terdapat pemakaman umum desa seluas 0,7 ha; areal emplasemen 22 ha (Rp16.500/m²) yang memuat masjid yang terbuka untuk umum dan dikelola nirlaba oleh pengurus dari warga desa seluas 0,25 ha (bangunan Rp850.000.000) serta poliklinik yang dikelola sendiri oleh perusahaan dan memungut tarif komersial dari masyarakat umum untuk memperoleh keuntungan seluas 0,35 ha (bangunan Rp1.250.000.000); areal belum produktif 140 ha (Rp1.900/m²) yang memuat situs prasasti yang telah ditetapkan sebagai cagar budaya seluas 0,4 ha. Bangunan lain: pabrik pengolahan kopi Rp14.200.000.000, gudang Rp3.600.000.000, dan perumahan karyawan Rp5.900.000.000. Data lain: produksi kopi beras 2025 sebanyak 1.240 ton dan 980 pekerja. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp291.753.800", B: "Rp294.369.300", C: "Rp296.151.800", D: "Rp294.558.300" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Areal di kawasan perkebunan yang merupakan objek Pasal 3 ayat (1) UU PBB tidak dikenakan PBB (Pasal 3 ayat (5) PMK 186/2019): pemakaman umum dan situs cagar budaya (huruf b) serta masjid umum nirlaba (huruf a) dikeluarkan dari luas arealnya, dan bangunan masjid juga dikeluarkan. Poliklinik yang dikelola perusahaan untuk memperoleh keuntungan tidak memenuhi syarat nirlaba huruf a sehingga lahan dan bangunannya tetap objek. SIT hanya ditambahkan pada areal produktif (Pasal 14 PMK 186/2019).",
        jejakHitung: [
          ["Produktif (860 − 0,7) ha = 8.593.000 m² × (5.400 + 8.100)", "Rp116.005.500.000"],
          ["Emplasemen (22 − 0,25) ha = 217.500 m² × 16.500", "Rp3.588.750.000"],
          ["Belum produktif (140 − 0,4) ha = 1.396.000 m² × 1.900", "Rp2.652.400.000"],
          ["Bangunan 14.200.000.000 + 3.600.000.000 + 5.900.000.000 + 1.250.000.000 (poliklinik)", "Rp24.950.000.000"],
          ["NJOP objek", "Rp147.196.650.000"],
          ["(147.196.650.000 − 12.000.000) × 40% × 0,5%", "Rp294.369.300"]
        ],
        mengapaSalah: {
          A: "Poliklinik ikut dikecualikan (lahan 0,35 ha dan bangunan), padahal dikelola perusahaan untuk memperoleh keuntungan sehingga tidak memenuhi Pasal 3 ayat (1) huruf a",
          C: "Masjid umum nirlaba (lahan 0,25 ha dan bangunan) tidak dikecualikan, padahal memenuhi Pasal 3 ayat (1) huruf a",
          D: "Pemakaman umum desa tidak dikeluarkan dari areal produktif (+7.000 m² × Rp13.500)"
        },
        jebakan: "Pengecualian diuji per bidang menurut penggunaannya (kuburan, peninggalan purbakala, kepentingan umum yang nirlaba), bukan menurut jenis fasilitasnya. Fasilitas kesehatan yang dikelola untuk mencari keuntungan tetap objek walaupun melayani masyarakat umum."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a–b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (5) dan Pasal 14 PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "B8-075",
      sejak: "9.5.0"
    },
    {
      id: "B8-198",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Di areal emplasemen kebun karet PT Karet Musi Sentosa terdapat poliklinik di atas lahan 0,4 ha milik perusahaan. Poliklinik itu melayani karyawan beserta keluarganya dan juga masyarakat umum, dikelola langsung oleh perusahaan, dan memungut tarif komersial dengan target laba setiap tahun. Perlakuan PBB-P5L Tahun Pajak 2026 atas lahan dan bangunan poliklinik tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak dikenakan PBB karena digunakan untuk melayani kepentingan umum di bidang kesehatan", B: "Tetap objek pajak, tetapi NJOP poliklinik dikurangkan sebagai NJOPTKP perusahaan", C: "Tetap objek pajak karena dikelola untuk memperoleh keuntungan sehingga tidak dikecualikan", D: "Tidak dikenakan PBB karena berada di areal emplasemen, bukan di areal produktif" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf a UU PBB hanya mengecualikan objek yang digunakan semata-mata untuk melayani kepentingan umum di bidang kesehatan dan lainnya yang tidak dimaksudkan untuk memperoleh keuntungan; Penjelasannya menuntut objek itu nyata-nyata tidak ditujukan untuk mencari keuntungan. Poliklinik bertarif komersial dengan target laba tidak memenuhi syarat itu sehingga tetap objek PBB-P5L.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Melayani masyarakat umum di bidang kesehatan belum cukup; syarat nirlaba juga harus terpenuhi",
          B: "NJOPTKP adalah pengurang tetap per wajib pajak (Rp12.000.000), bukan alat untuk mengeluarkan objek tertentu",
          D: "Areal emplasemen tetap bagian objek PBB sektor perkebunan; yang diuji adalah penggunaan bidangnya, bukan jenis arealnya"
        },
        jebakan: "Kedua syarat Pasal 3 ayat (1) huruf a kumulatif: semata-mata untuk kepentingan umum dan tidak mencari keuntungan. Masjid umum nirlaba di emplasemen dikecualikan, poliklinik komersial tidak."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a UU PBB beserta Penjelasannya", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "B8-078",
      sejak: "9.5.0"
    },
    {
      id: "B8-199",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Transmisi Selat Lestari, badan usaha transmisi tenaga listrik, memiliki satu ruas kabel listrik bawah laut sepanjang 4,5 km yang menghubungkan dua pulau di Kabupaten Kepulauan Meranti dan diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (perairan yang digunakan untuk jaringan kabel) Rp96.000.000 dan NJOP bangunan (kabel yang dilekatkan tetap di dasar laut) Rp871.000.000; perusahaan tidak memiliki objek PBB-P5L lain. Perusahaan juga memiliki gardu di daratan Kota Dumai (NJOP Rp3.100.000.000) dan satu kapal perawatan kabel. Seorang staf berpendapat NJKP harus 40% karena semua objek PBB-P5L memakai NJKP 40%. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.910.000", B: "Rp967.000", C: "Rp4.775.000", D: "Rp955.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "NJKP 40% tanpa batas hanya untuk objek perkebunan, kehutanan, dan pertambangan. Objek lainnya, termasuk sektor lainnya berupa jaringan kabel di perairan, memakai NJKP 40% bila NJOP objek Rp1.000.000.000 atau lebih dan 20% bila kurang (PP 25/2002). NJOP objek Rp967.000.000 kurang dari Rp1 miliar sehingga NJKP 20%; NJOPTKP tetap dikurangkan. Gardu di Kota Dumai (darat, PBB-P2) dan kapal (benda bergerak) tidak dihitung.",
        jejakHitung: [
          ["NJOP objek 96.000.000 + 871.000.000", "Rp967.000.000"],
          ["NJOP < Rp1.000.000.000 → NJKP", "20%"],
          ["NJOP − NJOPTKP", "Rp955.000.000"],
          ["955.000.000 × 20% × 0,5%", "Rp955.000"]
        ],
        mengapaSalah: {
          A: "Memakai NJKP 40% seperti pendapat staf, padahal NJKP 40% tanpa batas hanya untuk perkebunan, kehutanan, dan pertambangan",
          B: "NJOPTKP tidak dikurangkan (967.000.000 × 20% × 0,5%)",
          C: "Tarif 0,5% dikalikan tanpa NJKP"
        },
        jebakan: "Sektor lainnya adalah bagian PBB-P5L tetapi masuk kelompok objek lainnya dalam PP 25/2002, sehingga NJKP bergantung pada batas NJOP Rp1 miliar yang diuji terhadap NJOP objek sebelum NJOPTKP."
      },
      dasarHukum: [{ pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8 ayat (1) huruf d, dan Pasal 9 ayat (2) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-079",
      sejak: "9.5.0"
    },
    {
      id: "B8-200",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      stem: "PT Keramba Teluk Lestari membudidayakan ikan kerapu di perairan laut Kabupaten Lampung Selatan dengan Surat Izin Usaha Perikanan; perairan itu diadministrasikan sebagai objek PBB-P5L sektor lainnya dengan NJOP menurut SPPT 2026 Rp640.000.000, dan perusahaan tidak memiliki objek PBB-P5L lain. Direktur keuangannya ingin memakai satu persentase yang langsung dikalikan dengan selisih NJOP dan NJOPTKP untuk memperkirakan PBB-P5L dalam anggaran 2027, dengan asumsi NJOP tidak berubah. Persentase tarif efektif yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "0,1%", B: "0,2%", C: "0,5%", D: "0,04%" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Tarif 0,5% (Pasal 5 UU PBB) dikalikan NJKP (Pasal 7). Objek sektor lainnya termasuk objek lainnya dalam PP 25/2002; NJOP Rp640.000.000 kurang dari Rp1 miliar sehingga NJKP 20%. Tarif efektifnya 0,5% × 20% = 0,1% × (NJOP − NJOPTKP).",
        jejakHitung: [
          ["NJOP Rp640.000.000 < Rp1.000.000.000 → NJKP", "20%"],
          ["Tarif × NJKP = 0,5% × 20%", "0,1%"]
        ],
        mengapaSalah: {
          B: "Memakai NJKP 40% yang berlaku untuk perkebunan, kehutanan, dan pertambangan atau untuk objek lainnya ber-NJOP Rp1 miliar atau lebih",
          C: "NJKP terlupa; 0,5% adalah tarif nominal",
          D: "NJKP 20% dikalikan dua kali (0,2% × 20%)"
        },
        jebakan: "Rumus ringkas 0,2% hanya untuk perkebunan, perhutanan, pertambangan, dan objek lainnya ber-NJOP minimal Rp1 miliar; objek sektor lainnya di bawah Rp1 miliar bertarif efektif 0,1%."
      },
      dasarHukum: [{ pasal: "Pasal 5 dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 8 ayat (1) huruf b PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "B8-080",
      sejak: "9.5.0"
    },
    {
      id: "B8-201",
      topik: "B8.3",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Sawit Ketapang Raya memiliki kebun kelapa sawit ber-HGU di Kabupaten Ketapang dengan NJOP Rp44.750.000.000 menurut SPPT PBB-P5L 2026. Di Kota Pontianak perusahaan memiliki gedung kantor dengan NJOP Rp2.180.000.000 dan gudang pupuk dengan NJOP Rp1.460.000.000 yang terdaftar dengan NOP terpisah. Perda Kota Pontianak (data rekaan untuk soal ini) menetapkan untuk PBB-P2 2026: NJOPTKP Rp20.000.000 per wajib pajak, dasar pengenaan 50% dari NJOP setelah dikurangi NJOPTKP untuk objek nonhunian, dan tarif 0,25%. Perusahaan tidak memiliki objek lain. Jumlah PBB 2026 yang harus dibayar perusahaan atas ketiga objek, ke kas negara dan ke kas daerah, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp93.985.000", B: "Rp93.976.000", C: "Rp94.001.000", D: "Rp96.756.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kebun sawit adalah objek PBB-P5L (NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%), sedangkan kantor dan gudang di Kota Pontianak adalah objek PBB-P2 dengan parameter Perda (Pasal 38 ayat (1) UU 1/2022 mengecualikan kawasan perkebunan dari PBB-P2). Masing-masing rezim memakai NJOPTKP-nya sendiri. Untuk PBB-P2, wajib pajak yang memiliki lebih dari satu objek di satu kota hanya mendapat NJOPTKP atas salah satu objek (Pasal 40 ayat (4) UU 1/2022).",
        jejakHitung: [
          ["PBB-P5L (44.750.000.000 − 12.000.000) × 40% × 0,5%", "Rp89.476.000"],
          ["PBB-P2 kantor (2.180.000.000 − 20.000.000) × 50% × 0,25%", "Rp2.700.000"],
          ["PBB-P2 gudang 1.460.000.000 × 50% × 0,25% (tanpa NJOPTKP)", "Rp1.825.000"],
          ["Jumlah", "Rp94.001.000"]
        ],
        mengapaSalah: {
          A: "NJOPTKP Perda Rp20.000.000 dipakai juga untuk PBB-P5L (PBB-P5L menjadi Rp89.460.000), padahal NJOPTKP PBB-P5L Rp12.000.000 menurut PMK 23/PMK.03/2014",
          B: "NJOPTKP PBB-P2 diberikan untuk kantor dan gudang sekaligus (PBB-P2 menjadi Rp4.500.000), padahal untuk beberapa objek di satu kota NJOPTKP hanya diberikan atas satu objek",
          D: "Kantor dan gudang digabung ke objek PBB-P5L ((48.390.000.000 − 12.000.000) × 0,2%), padahal bangunan di luar kawasan perkebunan adalah objek PBB-P2"
        },
        jebakan: "Satu wajib pajak dapat memperoleh NJOPTKP dari dua rezim berbeda, tetapi di dalam rezim PBB-P2 NJOPTKP hanya sekali untuk semua objeknya di satu kabupaten/kota. Karena dasar pengenaannya linear, hasilnya sama objek mana pun yang diberi NJOPTKP."
      },
      dasarHukum: [{ pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 38 ayat (1), Pasal 40 ayat (3)–(5), dan Pasal 41 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-081",
      sejak: "9.5.0"
    },
    {
      id: "B8-202",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B8-16",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-16: PT Tirta Uap Garut memegang Izin Panas Bumi tahap eksploitasi di Kabupaten Garut, menjual listrik dari uapnya sendiri, dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026 untuk NOP perusahaan: permukaan bumi areal produktif di dalam wilayah kerja (tapak sumur produksi, separator, jalur pipa) 72 ha dengan nilai Rp10.500/m²; areal pengaman dan jalan akses di dalam wilayah kerja yang sudah dibebaskan dan dimanfaatkan perusahaan 1.850 ha dengan nilai Rp800/m²; tapak sumur injeksi di luar batas wilayah kerja seluas 15 ha yang dikuasai perusahaan dengan hak pakai dan terhubung ke wilayah kerja melalui jaringan pipa dan jalan perusahaan, dengan nilai Rp2.400/m²; lahan pertanian milik warga di dalam wilayah kerja seluas 6.300 ha yang tidak dibebaskan dan tidak dimanfaatkan perusahaan, dengan nilai Rp450/m²; NJOP tubuh bumi hasil penilaian DJP Rp468.000.000.000; bangunan milik perusahaan berupa sumur produksi dan injeksi, pipa uap, dan separator Rp287.000.000.000. Data lain: rig pengeboran sewaan Rp175.000.000.000 dan gedung kantor perwakilan di Kota Bandung Rp9.600.000.000. PBB-P5L dalam SPPT PT Tirta Uap Garut Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.612.116.000", B: "Rp1.574.616.000", C: "Rp1.554.696.000", D: "Rp1.555.416.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi sektor panas bumi meliputi permukaan bumi onshore dan tubuh bumi (Pasal 6 ayat (1) PMK 186/2019). Kawasannya mencakup wilayah kerja dan areal di luar wilayah kerja yang merupakan satu kesatuan dan secara fisik tidak terpisahkan, termasuk areal yang terhubung melalui jaringan pipa atau jalan (Pasal 6 ayat (2) huruf b dan ayat (3) huruf b). Permukaan bumi yang dikenakan adalah areal yang dimiliki dengan suatu hak atau diperoleh manfaatnya dan digunakan untuk pengusahaan panas bumi (ayat (4)); areal di dalam wilayah kerja yang tidak dipunyai haknya dan tidak diperoleh manfaatnya tidak dikenakan (ayat (7)). Bangunan milik sendiri dinilai dengan Nilai Perolehan Baru (Pasal 19 ayat (8)). Rig sewaan adalah benda bergerak, dan kantor di Kota Bandung berada di luar kawasan sehingga menjadi objek PBB-P2.",
        jejakHitung: [
          ["Areal produktif 720.000 m² × 10.500", "Rp7.560.000.000"],
          ["Areal pengaman dan jalan 18.500.000 m² × 800", "Rp14.800.000.000"],
          ["Tapak injeksi di luar wilayah kerja 150.000 m² × 2.400", "Rp360.000.000"],
          ["Tubuh bumi", "Rp468.000.000.000"],
          ["Bangunan milik perusahaan", "Rp287.000.000.000"],
          ["NJOP objek", "Rp777.720.000.000"],
          ["(777.720.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.555.416.000"]
        ],
        mengapaSalah: {
          A: "Lahan warga 6.300 ha ikut dihitung, padahal areal di dalam wilayah kerja yang tidak dipunyai haknya dan tidak diperoleh manfaatnya oleh wajib pajak tidak dikenakan PBB (Pasal 6 ayat (7) PMK 186/2019)",
          B: "Kantor perwakilan di Kota Bandung ikut dimasukkan, padahal bangunan itu tidak berada di kawasan pengusahaan panas bumi sehingga bukan objek PBB-P5L",
          C: "Tapak sumur injeksi di luar batas wilayah kerja dikeluarkan, padahal areal yang terhubung melalui jaringan pipa dan jalan serta digunakan untuk pengusahaan panas bumi termasuk kawasan (Pasal 6 ayat (2) huruf b dan ayat (3) huruf b)"
        },
        jebakan: "Batas wilayah kerja bukan batas objek: areal di luar wilayah kerja yang terhubung secara fisik bisa masuk, sedangkan areal di dalam wilayah kerja yang tidak dikuasai atau dimanfaatkan justru keluar. NJOP tubuh bumi eksploitasi sudah diberikan sebagai hasil penilaian DJP."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 1–2 dan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1), (2), (3), (4), (7) dan Pasal 19 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-082",
      sejak: "9.5.0"
    },
    {
      id: "B8-203",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-B8-16",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-16: SPPT PBB-P5L 2026 PT Tirta Uap Garut (pemegang Izin Panas Bumi di Kabupaten Garut) sebesar Rp1.555.416.000 diterima pada 23 Februari 2026 dan dilunasi penuh pada 18 Agustus 2026. Surat keberatan yang diterima KPP pada 14 Mei 2026 memuat dua alasan: (i) 38 ha yang dinilai sebagai areal produktif (Rp10.500/m²) sebenarnya jalur penyangga di sekeliling tapak sumur yang hanya berfungsi sebagai pendukung dan pengaman, sehingga semestinya dinilai sebagai areal pengaman (Rp800/m²); (ii) tapak sumur injeksi 15 ha (Rp2.400/m²) semestinya tidak dikenakan karena berada di luar batas wilayah kerja, walaupun terhubung ke wilayah kerja melalui jaringan pipa dan jalan perusahaan. Keputusan keberatan yang diterima pada 9 Maret 2027 mengabulkan alasan (i) dan menolak alasan (ii). PBB-P5L 2026 menurut keputusan keberatan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.548.044.000", B: "Rp1.547.436.000", C: "Rp1.547.324.000", D: "Rp1.536.986.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Alasan (i) memindahkan 38 ha dari areal produktif ke areal pengaman (areal pendukung dan pengaman, Pasal 19 ayat (1) huruf d PMK 186/2019), sehingga NJOP turun sebesar selisih nilai per m² dan luasnya tetap dihitung. Alasan (ii) ditolak karena areal di luar wilayah kerja yang terhubung melalui jaringan pipa atau jalan termasuk kawasan pengusahaan panas bumi (Pasal 6 ayat (2) huruf b dan ayat (3) huruf b). NJOPTKP sudah dipakai pada SPPT, sehingga penurunan NJOP langsung dikali 0,2%. Keberatan diajukan dalam 3 bulan sejak SPPT diterima (paling lambat 22 Mei 2026) dan diputus dalam 12 bulan sejak surat keberatan diterima (paling lambat 13 Mei 2027), sehingga prosedurnya sah (Pasal 15 ayat (3) dan Pasal 16 ayat (1) UU PBB).",
        jejakHitung: [
          ["Penurunan NJOP 380.000 m² × (10.500 − 800)", "Rp3.686.000.000"],
          ["Penurunan PBB 3.686.000.000 × 40% × 0,5%", "Rp7.372.000"],
          ["PBB menurut keputusan 1.555.416.000 − 7.372.000", "Rp1.548.044.000"]
        ],
        mengapaSalah: {
          B: "Luas 38 ha dikeluarkan seluruhnya (penurunan 380.000 × 10.500 × 0,2% = Rp7.980.000), padahal areal itu hanya direklasifikasi menjadi areal pengaman yang tetap dinilai Rp800/m²",
          C: "Alasan (ii) juga dianggap dikabulkan (penurunan tambahan 360.000.000 × 0,2% = Rp720.000), padahal keputusan menolaknya",
          D: "Penurunan NJOP dikali 0,5% tanpa NJKP 40% (penurunan Rp18.430.000)"
        },
        jebakan: "Keberatan yang dikabulkan atas klasifikasi areal hanya mengubah nilai per m², bukan menghapus luasnya; alasan yang ditolak tidak mengubah apa pun."
      },
      dasarHukum: [{ pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (2) dan (3) serta Pasal 19 ayat (1) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-083",
      sejak: "9.5.0"
    },
    {
      id: "B8-204",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B8-16",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-16: PT Tirta Uap Garut telah melunasi SPPT PBB-P5L 2026 sebesar Rp1.555.416.000, sedangkan menurut keputusan keberatan PBB 2026 menjadi Rp1.548.044.000. Saat kelebihan pembayaran diproses, perusahaan masih mempunyai STP PPN Masa Mei 2026 sebesar Rp2.860.000 dan STP PBB-P5L 2025 sebesar Rp1.940.000 yang belum dilunasi, serta SKPKB PPh Badan 2024 sebesar Rp86.500.000 yang jumlahnya tidak disetujui dalam pembahasan akhir hasil pemeriksaan, belum dibayar, dan sedang diajukan keberatan yang belum diputus. Bila kelebihan pembayaran diperhitungkan lebih dahulu dengan utang pajak sesuai ketentuan, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.372.000", B: "Rp2.572.000", C: "Rp0", D: "Rp5.432.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kelebihan pembayaran karena keputusan keberatan dikembalikan setelah diperhitungkan dengan utang pajak (Pasal 11 ayat (1a) UU KUP; Pasal 152 huruf b dan Pasal 154 ayat (1) PMK 81/2024), tanpa membedakan jenis pajaknya: STP PPN dan STP PBB-P5L ikut diperhitungkan. SKPKB yang tidak disetujui dan sedang diajukan keberatan tidak termasuk daftar Pasal 154 ayat (1) huruf c PMK 81/2024, dan jumlah yang belum dibayar saat keberatan diajukan tidak termasuk utang pajak (Pasal 25 ayat (8) UU KUP).",
        jejakHitung: [
          ["Kelebihan 1.555.416.000 − 1.548.044.000", "Rp7.372.000"],
          ["Utang pajak yang diperhitungkan 2.860.000 + 1.940.000", "Rp4.800.000"],
          ["Dikembalikan 7.372.000 − 4.800.000", "Rp2.572.000"]
        ],
        mengapaSalah: {
          A: "Kelebihan dikembalikan tanpa diperhitungkan dengan utang pajak yang masih ada",
          C: "SKPKB yang sedang diajukan keberatan ikut diperhitungkan sehingga kelebihan habis, padahal jumlah yang belum dibayar saat keberatan diajukan tidak termasuk utang pajak",
          D: "Hanya STP PBB yang diperhitungkan (sisa Rp5.432.000), padahal utang pajak jenis lain seperti STP PPN juga diperhitungkan"
        },
        jebakan: "Yang diperhitungkan adalah utang pajak yang sudah pasti, dari jenis pajak apa pun; ketetapan yang masih disengketakan lewat keberatan belum menjadi utang pajak untuk perhitungan ini."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1a) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 25 ayat (7) dan ayat (8) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 1 angka 71, Pasal 152 huruf b, dan Pasal 154 ayat (1) huruf a, huruf c, dan huruf f serta ayat (2) PMK 81/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-084",
      sejak: "9.5.0"
    },
    {
      id: "B8-205",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      kasusId: "V-B8-16",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-16: Dalam laporan laba rugi komersial 2026, PT Tirta Uap Garut (tahun buku kalender) membebankan pada akun beban usaha lainnya PBB-P5L 2026 sesuai SPPT Rp1.555.416.000 yang dilunasi 18 Agustus 2026 serta sanksi bunga dalam STP PPh Pasal 21 Masa Agustus 2025 sebesar Rp2.640.000 yang dibayar pada Maret 2026. Dalam rekonsiliasi laporan keuangan pada SPT Tahunan PPh Badan Tahun Pajak 2026 di Coretax, perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L dan sanksi bunga STP sama-sama diisi pada kolom Penyesuaian Fiskal Positif karena keduanya merupakan pembayaran pajak ke kas negara", B: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; sanksi bunga STP Rp2.640.000 diisi pada kolom Penyesuaian Fiskal Negatif akun beban usaha lainnya", C: "PBB-P5L dikreditkan terhadap PPh terutang dalam SPT Tahunan; sanksi bunga STP Rp2.640.000 diisi pada kolom Penyesuaian Fiskal Positif akun beban usaha lainnya", D: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; sanksi bunga STP Rp2.640.000 diisi pada kolom Penyesuaian Fiskal Positif akun beban usaha lainnya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a angka 9 UU PPh), sehingga tidak dikoreksi. Sanksi bunga dalam STP adalah sanksi administrasi yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh). Karena sudah dibebankan secara komersial, sanksi itu dikoreksi dengan penyesuaian fiskal positif, yaitu penyesuaian yang mengurangi biaya komersial. Petunjuk pengisian SPT Tahunan PPh Badan dalam Lampiran PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 mencontohkan sanksi administratif pada akun beban usaha lainnya yang diisi di kolom Penyesuaian Fiskal Positif akun itu, disertai kode penyesuaian fiskal (FPO-08, sanksi administratif).",
        jejakHitung: [
          ["PBB-P5L 2026", "biaya fiskal Rp1.555.416.000 (tanpa penyesuaian)"],
          ["Sanksi bunga STP PPh Pasal 21", "penyesuaian fiskal positif Rp2.640.000"]
        ],
        mengapaSalah: {
          A: "PBB bukan PPh dan dapat dibiayakan; hanya sanksinya yang tidak dapat dikurangkan",
          B: "Biaya komersial yang tidak dapat dikurangkan secara fiskal dikoreksi dengan penyesuaian positif (mengurangi biaya), bukan negatif",
          C: "Kredit pajak dalam SPT Tahunan PPh hanya untuk PPh yang dipotong, dipungut, atau dibayar sendiri; PBB tidak dapat dikreditkan, melainkan dibiayakan"
        },
        jebakan: "Pajak selain PPh boleh dibiayakan, sanksinya tidak, termasuk sanksi atas PPh pegawai. Di SPT Coretax tidak ada baris khusus sanksi: nilainya masuk kolom Penyesuaian Fiskal Positif pada akun tempat sanksi dibebankan."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a angka 9 dan Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026, Lampiran huruf H petunjuk pengisian SPT Tahunan PPh Badan (kolom Penyesuaian Fiskal Positif dan Kode Penyesuaian Fiskal)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 100,
      verifikasi: "✅",
      formulirRef: "1771.l1.7",
      kembaranDari: "B8-085",
      sejak: "9.5.0"
    },
    {
      id: "B8-206",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Untuk penilaian bangunan objek PBB-P5L sektor minerba PT Nikel Konawe Utama per 1 Januari 2026 tersedia data tangki timbun solar permanen berfondasi beton di dalam wilayah IUP: harga perolehan pada 2019 Rp36.500.000.000, akumulasi penyusutan akuntansi 50% sehingga nilai buku Rp18.250.000.000, serta biaya membangun tangki serupa pada 2026 sebesar Rp52.000.000.000 dengan penyusutan berdasarkan kondisi fisik 22%. Pernyataan yang paling tepat mengenai NJOP tangki timbun tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tangki timbun adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa nilai buku akuntansi, yaitu Rp18.250.000.000", B: "Tangki timbun adalah bangunan; NJOP-nya ditentukan dengan nilai perolehan baru dikurangi penyusutan akuntansi 50%, yaitu Rp26.000.000.000", C: "Tangki timbun adalah bangunan; NJOP-nya ditentukan dengan nilai perolehan baru dikurangi penyusutan berdasarkan kondisi fisik, yaitu Rp40.560.000.000", D: "Tangki timbun adalah sarana penunjang produksi sehingga bukan bangunan dan tidak memiliki NJOP" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tangki timbun permanen berfondasi beton adalah konstruksi teknik yang dilekatkan tetap pada bumi di kawasan pertambangan, sehingga merupakan bangunan (Pasal 9 ayat (1) PMK 186/2019 s.t.d.d. PMK 234/2022; Pasal 1 angka 2 UU PBB beserta Penjelasannya yang menyebut tempat penampungan minyak). NJOP bangunan sektor minerba ditentukan berdasarkan Nilai Perolehan Baru (Pasal 21 ayat (8) PMK 186/2019), yaitu seluruh biaya untuk memperoleh objek pada saat penilaian dikurangi penyusutan berdasarkan kondisi fisik (Pasal 1 angka 7): Rp52.000.000.000 × 78% = Rp40.560.000.000.",
        jejakHitung: [
          ["Biaya membangun pada saat penilaian 2026", "Rp52.000.000.000"],
          ["Dikurangi penyusutan kondisi fisik 22%", "× 78%"],
          ["NJOP tangki timbun", "Rp40.560.000.000"]
        ],
        mengapaSalah: {
          A: "Nilai buku akuntansi berasal dari harga perolehan historis dan penyusutan komersial, bukan biaya memperoleh objek pada saat penilaian dikurangi penyusutan fisik",
          B: "Penyusutan yang dipakai Nilai Perolehan Baru adalah penyusutan berdasarkan kondisi fisik (22%), bukan akumulasi penyusutan akuntansi (50%)",
          D: "Tangki permanen yang dilekatkan tetap pada bumi di kawasan pertambangan termasuk bangunan menurut Pasal 9 ayat (1) PMK 186/2019 dan Pasal 1 angka 2 UU PBB"
        },
        jebakan: "Data akuntansi (harga perolehan, akumulasi penyusutan, nilai buku) adalah pengecoh; Nilai Perolehan Baru memakai biaya membangun pada saat penilaian dikurangi penyusutan berdasarkan kondisi fisik."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 2 dan 3 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 7, Pasal 9 ayat (1), dan Pasal 21 ayat (8) PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-086",
      sejak: "9.5.0"
    },
    {
      id: "B8-207",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Bara Mahakam Sejati memegang IUP operasi produksi batubara di Kabupaten Kutai Barat yang didata sebagai satu objek PBB-P5L sektor minerba (satu-satunya objek wajib pajak ini). Blok Barat sudah ditambang: permukaan bumi yang dikuasai perusahaan (pit, stockpile, jalan hauling) 780 ha dengan nilai Rp7.200/m². Blok Timur seluas 3.100 ha di dalam IUP masih berupa kebun karet milik warga yang belum dibebaskan dan tidak dimanfaatkan perusahaan dengan cara apa pun; nilai tanahnya menurut data penilaian Rp1.250/m². Tubuh bumi wilayah IUP dinilai dengan data penilaian berupa pendapatan bersih batubara Rp61.000.000.000 dan angka kapitalisasi 7. Bangunan: tangki timbun dan conveyor Rp38.400.000.000 serta bengkel dan mess Rp11.600.000.000. Data lain: produksi 2025 sebanyak 2,6 juta ton, royalti yang dibayar Rp118.000.000.000, dan 145 unit excavator dan dump truck. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.066.296.000", B: "Rp1.143.796.000", C: "Rp334.296.000", D: "Rp2.665.740.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "NJOP bumi = permukaan bumi Blok Barat yang dikuasai perusahaan + tubuh bumi operasi produksi (pendapatan bersih × angka kapitalisasi, Pasal 21 ayat (7) huruf b PMK 186/2019). Blok Timur tidak dikenakan karena merupakan areal di dalam IUP yang tidak dipunyai haknya dan tidak diperoleh manfaatnya oleh wajib pajak (Pasal 7 ayat (7)); permukaan bumi yang dikenakan hanya areal yang dimiliki dengan suatu hak atau diperoleh manfaatnya (Pasal 7 ayat (4)). Bangunan dinilai dengan Nilai Perolehan Baru (Pasal 21 ayat (8)). Produksi, royalti, dan alat berat tidak masuk NJOP.",
        jejakHitung: [
          ["Permukaan Blok Barat 7.800.000 m² × 7.200", "Rp56.160.000.000"],
          ["Tubuh bumi 61.000.000.000 × 7", "Rp427.000.000.000"],
          ["Bangunan 38.400.000.000 + 11.600.000.000", "Rp50.000.000.000"],
          ["NJOP objek", "Rp533.160.000.000"],
          ["(533.160.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.066.296.000"]
        ],
        mengapaSalah: {
          B: "Permukaan Blok Timur ikut dihitung (31.000.000 m² × 1.250), padahal lahan warga di dalam IUP yang tidak dipunyai haknya dan tidak diperoleh manfaatnya oleh wajib pajak tidak dikenakan PBB (Pasal 7 ayat (7) PMK 186/2019)",
          C: "Pendapatan bersih dipakai langsung sebagai NJOP tubuh bumi tanpa angka kapitalisasi",
          D: "Tarif 0,5% dikalikan tanpa NJKP 40% (Pasal 1 huruf a PP 25/2002)"
        },
        jebakan: "Berada di dalam IUP tidak otomatis menjadikan permukaan bumi objek pajak: yang menentukan adalah hak atau manfaat yang diperoleh wajib pajak. Data royalti dan produksi sengaja diberikan; yang masuk rumus tubuh bumi hanya pendapatan bersih dan angka kapitalisasi."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1), (4), (7) dan Pasal 21 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "B8-088",
      sejak: "9.5.0"
    },
    {
      id: "B8-208",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Per 1 Januari 2026 kebun PT Karet Musi Lestari (satu-satunya objek PBB-P5L wajib pajak ini) memiliki areal produktif 620 ha berisi tanaman karet tua dengan nilai tanah Rp4.800/m² dan Biaya Investasi Tanaman (di data penilaian disebut SIT) Rp3.900/m². Pada September 2026 seluruh tanaman di blok itu ditebang untuk peremajaan; per 1 Januari 2027 lahannya sudah diolah tetapi belum ditanami, dan bibit baru ditanam pada Maret 2027 dengan SIT tanaman muda menurut proyeksi perusahaan Rp1.100/m². Nilai tanah dan data objek lain tidak berubah. Penurunan PBB-P5L Tahun Pajak 2027 dibanding 2026 akibat perubahan keadaan blok tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp120.900.000", B: "Rp48.360.000", C: "Rp107.880.000", D: "Rp48.336.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Pajak terutang ditentukan menurut keadaan objek pada 1 Januari (Pasal 8 ayat (2) UU PBB). Per 1 Januari 2027 blok itu sudah diolah tetapi belum ditanami, sehingga tergolong Areal Belum Produktif dan hanya dinilai dengan perbandingan harga tanah (Pasal 14 ayat (1) huruf b dan ayat (2) huruf b PMK 186/2019); pengembangan tanah berupa tanaman (Biaya Investasi Tanaman) yang dihitung pada 2026 hilang. Penanaman Maret 2027 baru berpengaruh pada Tahun Pajak 2028.",
        jejakHitung: [
          ["620 ha = 6.200.000 m² × SIT 3.900", "Rp24.180.000.000"],
          ["Penurunan PBB 24.180.000.000 × 40% × 0,5%", "Rp48.360.000"]
        ],
        mengapaSalah: {
          A: "Penurunan NJOP dikali 0,5% tanpa NJKP 40% (Pasal 1 huruf a PP 25/2002)",
          C: "Nilai tanah ikut dianggap hilang (4.800 + 3.900), padahal areal belum produktif tetap dinilai dengan nilai tanahnya",
          D: "NJOPTKP dikurangkan lagi dari selisih NJOP, padahal NJOPTKP diberikan sekali atas NJOP objek secara keseluruhan pada kedua tahun"
        },
        jebakan: "Yang menentukan adalah keadaan pada 1 Januari: tanaman yang ditebang September 2026 masih dihitung untuk 2026, dan bibit yang ditanam Maret 2027 belum dihitung untuk 2027. Selisih antartahun cukup dihitung dari selisih NJOP dikali 0,2%."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 14 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-089",
      sejak: "9.5.0"
    },
    {
      id: "B8-209",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Rimba Tanaman Kapuas, pemegang izin hutan tanaman di Kabupaten Kapuas, menerima SPOP untuk areal barunya pada 9 Februari 2026 tetapi tidak mengembalikannya dalam 30 hari. Setelah ditegur secara tertulis, SPOP tetap tidak disampaikan sampai batas waktu dalam Surat Teguran. Bagian keuangan perusahaan menyusun catatan mengenai akibatnya untuk SOP internal. Rumusan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "DJP dapat menerbitkan SKP berisi pokok pajak ditambah denda administrasi 25% dari pokok; SKP dilunasi paling lambat 6 bulan sejak diterima; bagian yang tidak dibayar saat jatuh tempo dikenai denda 2% sebulan dan ditagih dengan STP", B: "DJP dapat menerbitkan STP berisi pokok pajak ditambah denda administrasi 25% dari pokok; STP dilunasi paling lambat 1 bulan sejak diterima; bagian yang tidak dibayar saat jatuh tempo dikenai denda 2% sebulan dan ditagih dengan SKP", C: "DJP dapat menerbitkan SKP berisi pokok pajak ditambah denda administrasi 25% dari pokok; SKP dilunasi paling lambat 1 bulan sejak diterima; bagian yang tidak dibayar saat jatuh tempo dikenai denda 2% sebulan dan ditagih dengan STP", D: "DJP dapat menerbitkan SKP berisi pokok pajak ditambah denda administrasi 25% dari selisih pajak menurut pemeriksaan dan menurut SPOP; SKP dilunasi paling lambat 1 bulan sejak diterima; bagian yang tidak dibayar dikenai denda 2% sebulan dan ditagih dengan STP" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPOP yang tidak disampaikan dalam 30 hari dan tetap tidak disampaikan setelah ditegur secara tertulis memungkinkan DJP menerbitkan SKP (Pasal 10 ayat (2) huruf a UU PBB) yang berisi pokok pajak ditambah denda administrasi 25% dari pokok pajak (Pasal 10 ayat (3)). SKP dilunasi paling lambat 1 bulan sejak diterima (Pasal 11 ayat (2)); pajak yang tidak atau kurang dibayar saat jatuh tempo dikenai denda 2% sebulan dan ditagih bersama utangnya dengan STP (Pasal 11 ayat (3) dan (4)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Jangka 6 bulan hanya untuk SPPT; SKP dilunasi paling lambat 1 bulan sejak diterima",
          B: "Dokumen penetapan dalam keadaan ini adalah SKP; STP dipakai untuk menagih pajak yang terlambat dibayar beserta dendanya",
          D: "Denda 25% dari selisih hanya untuk SKP karena hasil pemeriksaan lebih besar daripada pajak menurut SPOP (Pasal 10 ayat (4)); di sini SPOP tidak disampaikan sehingga denda 25% dihitung dari pokok pajak (Pasal 10 ayat (3))"
        },
        jebakan: "Bedakan dua jenis SKP: SPOP tidak disampaikan (denda 25% dari pokok) dan hasil pemeriksaan lebih besar (denda 25% dari selisih), lalu jangka pelunasan SKP (1 bulan) dari SPPT (6 bulan)."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2), Pasal 10, dan Pasal 11 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-090",
      sejak: "9.5.0"
    },
    {
      id: "B8-210",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "SPPT PBB-P5L Tahun Pajak 2023 PT Tambang Pasir Kuarsa Bangka sebesar Rp236.000.000 diterima pada 14 April 2023. Perusahaan mengajukan keberatan atas SPPT itu pada 20 Juni 2023 dan menunda pembayaran sambil menunggu keputusan; keberatan kemudian ditolak seluruhnya. Perusahaan membayar Rp96.000.000 pada 25 Februari 2024, sedangkan sisanya Rp140.000.000 baru dibayar pada 3 November 2026. Asumsikan denda dihitung terpisah untuk setiap bagian pokok sesuai tanggal pembayarannya dan bagian dari bulan dihitung satu bulan penuh. Jumlah denda administrasi PBB yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp113.200.000", B: "Rp88.320.000", C: "Rp74.880.000", D: "Rp76.800.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "SPPT jatuh tempo 6 bulan sejak diterima (Pasal 11 ayat (1) UU PBB): diterima 14 April 2023, hari terakhirnya 13 Oktober 2023. Pengajuan keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6)), sehingga denda 2% sebulan dihitung dari jatuh tempo sampai hari pembayaran, paling lama 24 bulan (Pasal 11 ayat (3)). Bagian Rp96.000.000 terlambat 4 bulan 12 hari (dihitung 5 bulan); bagian Rp140.000.000 terlambat lebih dari 36 bulan sehingga dibatasi 24 bulan (48%).",
        jejakHitung: [
          ["Jatuh tempo SPPT diterima 14 April 2023", "13 Oktober 2023"],
          ["Bagian I: 13 Oktober 2023 s.d. 25 Februari 2024", "4 bulan 12 hari → 5 bulan"],
          ["Denda I: 5 × 2% × 96.000.000", "Rp9.600.000"],
          ["Bagian II: 13 Oktober 2023 s.d. 3 November 2026", "37 bulan → dibatasi 24 bulan"],
          ["Denda II: 24 × 2% × 140.000.000", "Rp67.200.000"],
          ["Jumlah denda", "Rp76.800.000"]
        ],
        mengapaSalah: {
          A: "Batas 24 bulan diabaikan untuk bagian II (37 × 2% × 140.000.000 = Rp103.600.000)",
          B: "Denda bagian I dihitung sejak SPPT diterima, bukan sejak jatuh tempo (11 bulan, Rp21.120.000)",
          C: "Bagian bulan pada bagian I dibulatkan ke bawah menjadi 4 bulan (Rp7.680.000)"
        },
        jebakan: "Keberatan tidak menunda jatuh tempo pembayaran SPPT; denda dihitung sejak jatuh tempo, bukan sejak SPPT diterima, dan batas 24 bulan berlaku per bagian yang belum dibayar."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 ayat (6) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-091",
      sejak: "9.5.0"
    },
    {
      id: "B8-211",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB: \"Direktur Jenderal Pajak dapat mengeluarkan Surat Ketetapan Pajak dalam hal-hal sebagai berikut : a. apabila Surat Pemberitahuan Obyek Pajak tidak disampaikan sebagaimana dimaksud dalam Pasal 9 ayat (2) dan setelah ditegor secara tertulis tidak disampaikan sebagaimana ditentukan dalam Surat Tegoran; ...\" \"Jumlah pajak yang terhutang dalam Surat Ketetapan Pajak sebagaimana dimaksud dalam ayat (2) huruf a, adalah pokok pajak ditambah dengan denda administrasi sebesar 25% (dua puluh lima persen) dihitung dari pokok pajak.\"",
      stem: "PT Kebun Sawit Barito tidak menyampaikan SPOP PBB-P5L sektor perkebunan 2026 walaupun sudah ditegur secara tertulis, sehingga DJP menerbitkan SKP PBB-P5L 2026 berdasarkan data yang ada dengan pokok pajak Rp248.000.000. SKP diterima pada 12 Mei 2026 dan seluruh jumlah yang tercantum di dalamnya dilunasi pada 5 Juni 2026. Dalam keberatan yang diajukan pada 24 Juni 2026, perusahaan membuktikan bahwa NJOP bumi kelas tanaman menghasilkan dipakai untuk seluruh areal, padahal sebagian areal masih tanaman belum menghasilkan. Keputusan keberatan yang diterima pada 9 Maret 2027 menurunkan pokok PBB 2026 menjadi Rp196.000.000 dan menghitung ulang denda administrasinya. Perusahaan tidak mempunyai utang pajak lain. Berdasarkan kutipan tersebut, kelebihan pembayaran yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp114.000.000", B: "Rp65.000.000", C: "Rp13.000.000", D: "Rp52.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "SKP huruf a memuat pokok ditambah denda administrasi 25% dari pokok (Pasal 10 ayat (3) UU PBB), sehingga yang dilunasi Rp248.000.000 × 125% = Rp310.000.000. Keputusan keberatan menerima sebagian dan menurunkan pokok menjadi Rp196.000.000; denda 25% dihitung ulang dari pokok baru sehingga jumlah menurut keputusan Rp245.000.000. Kelebihan yang dikembalikan Rp310.000.000 − Rp245.000.000 = Rp65.000.000, karena tidak ada utang pajak lain yang harus diperhitungkan.",
        jejakHitung: [
          ["Dilunasi menurut SKP: Rp248.000.000 × 125%", "Rp310.000.000"],
          ["Menurut keputusan keberatan: Rp196.000.000 × 125%", "Rp245.000.000"],
          ["Kelebihan pembayaran yang dikembalikan", "Rp65.000.000"]
        ],
        mengapaSalah: {
          A: "Menganggap denda 25% hapus seluruhnya karena keberatan dikabulkan sebagian (Rp310.000.000 − Rp196.000.000); denda tetap melekat pada pokok yang baru",
          C: "Hanya selisih denda (25% × Rp52.000.000) yang dikembalikan; selisih pokok terlupa",
          D: "Hanya selisih pokok (Rp248.000.000 − Rp196.000.000) yang dikembalikan; denda 25% atas selisih pokok ikut turun dan terlupa"
        },
        jebakan: "Denda SKP karena SPOP tidak disampaikan dihitung dari pokok. Bila pokok turun, dendanya ikut turun, tetapi tidak hilang."
      },
      dasarHukum: [{ pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 20 ayat (4) PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-095",
      sejak: "9.5.0"
    },
    {
      id: "B8-212",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002: \"Banding diajukan dalam jangka waktu 3 (tiga) bulan sejak tanggal diterima Keputusan yang dibanding, kecuali diatur lain dalam peraturan perundang-undangan perpajakan.\" \"Jangka waktu untuk mengajukan Gugatan terhadap pelaksanaan penagihan Pajak adalah 14 (empat belas) hari sejak tanggal pelaksanaan penagihan.\"",
      stem: "PT Tambang Galian Meratus menghadapi tiga persoalan PBB-P5L pada 2026: (1) SPPT PBB-P5L 2026 yang diterima pada 16 Maret 2026 mencantumkan luas areal pertambangan onshore lebih besar daripada yang dilaporkan dalam SPOP; (2) keputusan keberatan atas SKP PBB 2025 yang menambah jumlah pajak terutang, diterima pada 21 April 2026; (3) atas tunggakan STP PBB 2024, jurusita pajak melaksanakan penyitaan pada 6 Mei 2026, padahal Surat Perintah Melaksanakan Penyitaan diterbitkan sebelum lewat 2 × 24 jam sejak Surat Paksa diberitahukan, sehingga perusahaan menilai pelaksanaannya cacat prosedur. Berdasarkan kutipan tersebut dan UU PBB, upaya hukum dan batas waktu yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) keberatan paling lambat 15 Juni 2026; (2) banding paling lambat 20 Juli 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penyitaan (6 Mei 2026)", B: "(1) keberatan paling lambat 15 Juni 2026; (2) banding paling lambat 20 Juli 2026; (3) keberatan atas penyitaan paling lambat 5 Agustus 2026", C: "(1) banding paling lambat 15 Juni 2026; (2) banding paling lambat 20 Juli 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penyitaan (6 Mei 2026)", D: "(1) keberatan paling lambat 15 Juni 2026; (2) keberatan kedua paling lambat 20 Juli 2026; (3) gugatan dalam 14 hari sejak tanggal pelaksanaan penyitaan (6 Mei 2026)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPPT adalah objek keberatan (Pasal 15 ayat (1) huruf a UU PBB), diajukan dalam 3 bulan sejak diterima; keputusan keberatan, termasuk yang menambah pajak, dibanding ke Pengadilan Pajak dalam 3 bulan sejak diterima (Pasal 35 ayat (2) UU 14/2002); pelaksanaan penyitaan yang dinilai cacat prosedur digugat dalam 14 hari sejak tanggal pelaksanaan penagihan (Pasal 40 ayat (2) UU 14/2002; Pasal 23 ayat (2) huruf a UU KUP). Jangka bulan dihitung dengan tanggal diterima sebagai hari pertama (contoh Penjelasan Pasal 11 ayat (1) UU PBB).",
        jejakHitung: [
          ["(1) 3 bulan sejak SPPT diterima 16 Maret 2026", "15 Juni 2026"],
          ["(2) 3 bulan sejak keputusan keberatan diterima 21 April 2026", "20 Juli 2026"],
          ["(3) Penyitaan dilaksanakan 6 Mei 2026", "gugatan dalam 14 hari sejak tanggal itu"]
        ],
        mengapaSalah: {
          B: "Penyitaan adalah pelaksanaan penagihan, bukan ketetapan; upayanya gugatan dalam 14 hari, bukan keberatan 3 bulan",
          C: "SPPT belum pernah diputus dalam keberatan; banding hanya terhadap keputusan keberatan, sehingga SPPT diajukan keberatan lebih dulu",
          D: "Tidak ada keberatan kedua atas keputusan keberatan; upayanya banding ke Pengadilan Pajak"
        },
        jebakan: "Petakan dokumen ke upayanya: SPPT atau SKP → keberatan; keputusan keberatan → banding; pelaksanaan Surat Paksa, penyitaan, atau pengumuman lelang → gugatan."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 23 ayat (2) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "B8-096",
      sejak: "9.5.0"
    },
    {
      id: "B8-213",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Sinar Kelapa Nusantara mengajukan dua keberatan pada 2026: atas SKPKB PPN Masa Juni 2024, yang koreksinya hanya disetujui sebagian dalam pembahasan akhir hasil pemeriksaan, dan atas SPPT PBB-P5L 2026 untuk kebun kelapanya. Keduanya diajukan tepat waktu dan sisa pajak yang tidak disetujui belum dibayar. Pernyataan yang paling tepat tentang kewajiban membayar selama keberatan diproses dan sanksi bila keberatan ditolak adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SKPKB: jumlah yang disetujui dalam pembahasan akhir dilunasi sebelum keberatan, sisanya tertangguh sampai 1 bulan sejak Surat Keputusan Keberatan terbit, dan denda 30% bila ditolak tanpa banding; SPPT: pembayaran PBB juga tertangguh sampai 1 bulan sejak keputusan keberatan terbit, dan tidak ada denda 30%", B: "SKPKB: jumlah yang disetujui dalam pembahasan akhir dilunasi sebelum keberatan, sisanya tertangguh sampai 1 bulan sejak Surat Keputusan Keberatan terbit, dan denda 30% bila ditolak tanpa banding; SPPT: keberatan tidak menunda kewajiban membayar PBB, dan denda 30% juga dikenakan bila keberatan ditolak", C: "SKPKB: jumlah yang disetujui dalam pembahasan akhir dilunasi sebelum keberatan, sisanya tertangguh sampai 1 bulan sejak Surat Keputusan Keberatan terbit, dan denda 30% bila ditolak tanpa banding; SPPT: keberatan tidak menunda kewajiban membayar PBB, dan tidak dikenai denda 30% walaupun keberatan ditolak", D: "SKPKB: seluruh jumlah dalam SKPKB wajib dilunasi lebih dulu sebelum surat keberatan disampaikan, dan denda 30% bila ditolak tanpa banding; SPPT: keberatan tidak menunda kewajiban membayar PBB, dan tidak dikenai denda 30% walaupun keberatan ditolak" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Untuk SKPKB, Pasal 25 ayat (3a) UU KUP hanya mewajibkan pelunasan jumlah yang disetujui dalam pembahasan akhir; sisanya tertangguh sampai 1 bulan sejak Surat Keputusan Keberatan diterbitkan (Pasal 25 ayat (7) UU KUP), dan bila keberatan ditolak atau dikabulkan sebagian tanpa banding dikenai denda 30% (Pasal 25 ayat (9) dan (10)). Untuk SPPT, Pasal 15 ayat (6) UU PBB dan Pasal 10 ayat (4) PMK 118/2024 menyatakan keberatan tidak menunda kewajiban membayar, dan Pasal 20 ayat (4) PMK 118/2024 menyatakan denda 30% tidak berlaku untuk keputusan keberatan atas SPPT atau SKP PBB.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penangguhan 1 bulan sejak Surat Keputusan Keberatan hanya untuk SKPKB dan SKPKBT; keberatan atas SPPT tidak menunda kewajiban membayar",
          B: "Denda 30% Pasal 25 ayat (9) UU KUP tidak berlaku untuk keputusan keberatan atas SPPT atau SKP PBB (Pasal 20 ayat (4) PMK 118/2024)",
          D: "Yang wajib dilunasi sebelum keberatan hanya jumlah yang disetujui dalam pembahasan akhir, bukan seluruh SKPKB"
        },
        jebakan: "Soal lintas KUP dan PBB: aturan penangguhan dan denda 30% melekat pada keberatan atas ketetapan menurut UU KUP, bukan pada keberatan SPPT."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (3a) dan ayat (7) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 25 ayat (9) dan ayat (10) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 Pasal 10 ayat (4) dan Pasal 20 ayat (4)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-097",
      sejak: "9.5.0"
    },
    {
      id: "B8-214",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (1) dan ayat (1a) UU 19/1997 s.t.d.d. UU 19/2000: \"Penjualan secara lelang terhadap barang yang disita sebagaimana dimaksud dalam Pasal 25 ayat (1) dilaksanakan paling singkat 14 (empat belas) hari setelah pengumuman lelang melalui media massa.\" \"Pengumuman lelang sebagaimana dimaksud dalam ayat (1) dilaksanakan paling singkat 14 (empat belas) hari setelah penyitaan.\"",
      stem: "Atas tunggakan STP PBB-P5L PT Perkebunan Sungai Kampar, jurusita pajak menyita tiga unit truk tangki minyak sawit milik perusahaan (barang bergerak, nilai taksiran Rp1,2 miliar) pada 10 Agustus 2026; utang pajak dan biaya penagihan tidak dilunasi. Pejabat baru mengumumkan lelang melalui media massa pada 1 September 2026. Dalam soal ini \"paling singkat 14 hari setelah\" berarti tanggal paling cepat adalah tanggal acuan ditambah 14 hari. Berdasarkan kutipan tersebut, tanggal paling cepat pengumuman lelang yang diperbolehkan setelah penyitaan, dan tanggal paling cepat pelaksanaan lelang setelah pengumuman yang benar-benar dilakukan, adalah ...",
      kataKualifikasi: ["paling singkat", "paling cepat"],
      opsi: { A: "Pengumuman lelang paling cepat 24 Agustus 2026; lelang paling cepat 7 September 2026", B: "Pengumuman lelang paling cepat 24 Agustus 2026; lelang paling cepat 1 Oktober 2026", C: "Pengumuman lelang paling cepat 31 Agustus 2026; lelang paling cepat 15 September 2026", D: "Pengumuman lelang paling cepat 24 Agustus 2026; lelang paling cepat 15 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengumuman lelang paling cepat 14 hari setelah penyitaan: 10 Agustus + 14 = 24 Agustus 2026. Lelang paling cepat 14 hari setelah pengumuman lelang melalui media massa, dan yang menjadi acuan adalah pengumuman yang benar-benar dilakukan pada 1 September 2026: 1 September + 14 = 15 September 2026.",
        jejakHitung: [
          ["Penyitaan", "10 Agustus 2026"],
          ["+ 14 hari → pengumuman lelang paling cepat", "24 Agustus 2026"],
          ["Pengumuman lelang yang dilakukan", "1 September 2026"],
          ["+ 14 hari → lelang paling cepat", "15 September 2026"]
        ],
        mengapaSalah: {
          A: "Lelang dihitung dari tanggal pengumuman yang paling cepat diperbolehkan, padahal pengumuman baru dilakukan 1 September 2026",
          B: "Jarak pengumuman ke lelang dihitung satu bulan, padahal undang-undang menetapkan paling singkat 14 hari",
          C: "Memakai 21 hari, yaitu jangka dari Surat Teguran ke Surat Paksa, untuk jarak penyitaan ke pengumuman lelang"
        },
        jebakan: "Tiap jangka dalam rantai penagihan diukur dari peristiwa yang benar-benar terjadi: lelang dihitung dari pengumuman lelang yang dilakukan, bukan dari tanggal paling cepat yang dibolehkan."
      },
      dasarHukum: [{ pasal: "Pasal 25–26 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "PMK 61/2023", berlakuSejak: "2023-06-12" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-098",
      sejak: "9.5.0"
    },
    {
      id: "B8-215",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Saat menerima SPPT PBB-P5L 2026 pada Maret 2026, PT Kebun Teh Priangan sudah mencatat Debit Beban PBB dan Kredit Utang PBB sebesar Rp73.500.000. Pada 27 Agustus 2026 perusahaan melunasi SPPT tersebut sekaligus membayar denda STP PBB-P5L 2025 sebesar Rp2.940.000 melalui rekening bank; denda itu belum pernah dicatat. Jurnal pada tanggal pembayaran dan perlakuan fiskal yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Debit Utang PBB Rp73.500.000 dan Beban Denda Pajak Rp2.940.000; Kredit Kas/Bank Rp76.440.000; denda dikoreksi fiskal positif", B: "Debit Utang PBB Rp73.500.000 dan Beban Denda Pajak Rp2.940.000; Kredit Kas/Bank Rp76.440.000; denda dapat dikurangkan", C: "Debit Beban PBB Rp73.500.000 dan Beban Denda Pajak Rp2.940.000; Kredit Kas/Bank Rp76.440.000; denda dikoreksi fiskal positif", D: "Debit Pajak Dibayar di Muka Rp76.440.000; Kredit Kas/Bank Rp76.440.000; seluruhnya dikreditkan terhadap PPh Badan 2026" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Beban PBB sudah diakui bersama utangnya saat SPPT diterima, sehingga pelunasan mendebit Utang PBB; denda yang belum dicatat langsung dibebankan; Kas/Bank dikredit sebesar uang yang keluar. Secara fiskal PBB adalah pajak selain PPh yang dapat dikurangkan (Pasal 6 ayat (1) huruf a UU PPh), sedangkan denda pajak tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh) sehingga dikoreksi positif.",
        jejakHitung: [
          ["Pelunasan utang PBB yang sudah dicatat", "Rp73.500.000"],
          ["Beban denda pajak", "Rp2.940.000"],
          ["Kas/bank keluar", "Rp76.440.000"]
        ],
        mengapaSalah: {
          B: "Denda pajak adalah sanksi administrasi yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh)",
          C: "Beban PBB sudah diakui saat SPPT diterima; mendebit beban lagi membuat beban tercatat dua kali dan utang PBB tetap tersisa",
          D: "PBB dan dendanya bukan kredit pajak PPh, jadi tidak dicatat sebagai pajak dibayar di muka yang dikreditkan"
        },
        jebakan: "Perhatikan apakah utang sudah dicatat lebih dulu: bila sudah, pelunasan mengurangi utang, bukan menambah beban. Lalu ingat denda dikoreksi secara fiskal."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 11 ayat (1), ayat (3), dan ayat (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "B8-099",
      sejak: "9.5.0"
    },
    {
      id: "B8-216",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Agro Lahan Jambi menerima SPPT PBB-P5L 2026 pada 23 Februari 2026 untuk satu NOP kebun karet. Seluruh hak atas kebun itu sudah dialihkan kepada perusahaan lain pada Juni 2025, sehingga pada 1 Januari 2026 PT Agro Lahan Jambi tidak lagi memiliki, menguasai, atau memanfaatkannya. Surat keberatan baru dikirim pada 8 Juni 2026 tanpa alasan keadaan di luar kekuasaan, dan DJP menyampaikan surat pemberitahuan bahwa keberatan tidak dipertimbangkan karena tidak memenuhi persyaratan. Perusahaan belum mengajukan permohonan lain atas SPPT itu dan memiliki akta pengalihan yang lengkap. Upaya yang tepat di antara pilihan berikut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Banding ke Pengadilan Pajak atas surat pemberitahuan bahwa keberatan tidak dipertimbangkan, paling lambat 3 bulan sejak surat itu diterima", B: "Mengajukan permohonan pembatalan SPPT yang tidak benar, karena keberatan atas SPPT itu tidak dipertimbangkan", C: "Mengajukan kembali keberatan atas SPPT yang sama dengan melampirkan akta pengalihan, karena keberatan yang tidak dipertimbangkan boleh diajukan ulang", D: "Mengajukan pengurangan PBB Pasal 19 dengan alasan kondisi tertentu objek pajak yang ada hubungannya dengan subjek pajak" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Batas keberatan 3 bulan sejak SPPT diterima 23 Februari 2026 berakhir 22 Mei 2026, sehingga keberatan 8 Juni 2026 tidak memenuhi syarat Pasal 10 ayat (2) huruf e PMK 118/2024 dan tidak dipertimbangkan. Surat pemberitahuan itu bukan keputusan keberatan dan tidak dapat dibanding (Pasal 13 ayat (4)). Pengajuan kembali keberatan hanya dibuka untuk syarat selain huruf e dan sebelum 3 bulan terlampaui (Pasal 13 ayat (5)). Karena SPPT diterbitkan atas objek yang bukan lagi milik atau dikuasai perusahaan, SPPT itu seharusnya tidak diterbitkan dan dapat dimohonkan pembatalannya (Pasal 21 huruf b dan Pasal 22 ayat (2)); syarat Pasal 32 ayat (2) huruf a angka 2 terpenuhi karena keberatannya tidak dipertimbangkan.",
        jejakHitung: [
          ["SPPT diterima", "23 Februari 2026"],
          ["Batas keberatan (3 bulan sejak diterima)", "22 Mei 2026"],
          ["Keberatan dikirim", "8 Juni 2026 → tidak dipertimbangkan"]
        ],
        mengapaSalah: {
          A: "Surat pemberitahuan bahwa keberatan tidak dipertimbangkan bukan Surat Keputusan Keberatan sehingga tidak dapat dibanding (Pasal 13 ayat (4) PMK 118/2024).",
          C: "Pengajuan kembali hanya untuk keberatan yang gagal karena syarat selain jangka waktu, dan harus sebelum 3 bulan terlampaui (Pasal 13 ayat (5)); di sini justru jangka waktunya yang lewat.",
          D: "Pengurangan Pasal 19 adalah keringanan atas pajak yang terutang karena kondisi tertentu atau bencana, bukan koreksi atas SPPT yang diterbitkan kepada pihak yang bukan subjek pajaknya."
        },
        jebakan: "Mengira keberatan yang tidak dipertimbangkan selalu bisa diajukan ulang, atau bahwa jalan satu-satunya adalah banding."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (2) huruf e, Pasal 13 ayat (4) dan (5), Pasal 21 huruf b, Pasal 22 ayat (2), Pasal 32 ayat (2) PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-106",
      sejak: "9.5.0"
    },
    {
      id: "B8-217",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Sawit Tanjung Harapan melaporkan dalam SPOP 2026 areal produktif seluas 1.840 ha. SPPT PBB-P5L 2026 yang diterima pada 7 April 2026 mencatat areal produktif 2.160 ha karena salah rekam, sedangkan data lain sesuai SPOP. Dasar penghitungan: NJOP bumi areal produktif Rp38.000.000 per ha (sudah termasuk Biaya Investasi Tanaman), NJOP bumi areal lain dan bangunan Rp5.420.000.000, NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%. SPPT mencantumkan PBB Rp174.976.000. Kesalahan itu ditemukan pada 2 Juni 2026 dan perusahaan belum mengajukan permohonan apa pun atas SPPT tersebut. Jalur yang sesuai ketentuan dan jumlah PBB 2026 menurut penghitungan perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembetulan SPPT karena kesalahan tulis luas areal; PBB menjadi Rp150.656.000", B: "Keberatan atas SPPT dalam 3 bulan sejak SPPT diterima, dengan PBB menurut perusahaan Rp376.640.000; PBB dalam SPPT tetap dibayar pada jatuh tempo", C: "Keberatan atas SPPT, dan selama keberatan diproses SPPT tidak perlu dibayar; PBB menurut perusahaan Rp150.656.000", D: "Keberatan atas SPPT dalam 3 bulan sejak SPPT diterima, dengan PBB menurut perusahaan Rp150.656.000; PBB dalam SPPT tetap dibayar pada jatuh tempo" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Luas areal yang salah adalah materi SPPT yang menentukan besarnya PBB, jadi jalurnya keberatan atas SPPT (Pasal 15 ayat (1) UU PBB; Pasal 9 ayat (1) huruf f dan ayat (2) huruf c PMK 118/2024), diajukan dalam 3 bulan sejak SPPT diterima (batas 6 Juli 2026; 2 Juni 2026 masih di dalamnya) dengan menyebut PBB menurut penghitungan perusahaan. Dengan luas 1.840 ha, PBB = 0,5% × 40% × (NJOP − NJOPTKP) = Rp150.656.000. Keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB; Pasal 10 ayat (4) PMK 118/2024), jadi SPPT tetap dilunasi pada jatuh tempo.",
        jejakHitung: [
          ["PBB menurut SPPT: (2.160 ha × Rp38.000.000 + Rp5.420.000.000 − Rp12.000.000) × 40% × 0,5%", "Rp174.976.000"],
          ["NJOP areal produktif yang benar: 1.840 ha × Rp38.000.000", "Rp69.920.000.000"],
          ["+ NJOP areal lain dan bangunan", "Rp75.340.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp75.328.000.000"],
          ["NJKP 40%", "Rp30.131.200.000"],
          ["PBB menurut perusahaan: 0,5% × NJKP", "Rp150.656.000"]
        ],
        mengapaSalah: {
          A: "Angkanya benar, tetapi kesalahan tulis menurut Pasal 2 ayat (2) PMK 118/2024 hanya kesalahan yang tidak memengaruhi jumlah pajak terutang; luas areal yang salah mengubah PBB.",
          B: "Jalurnya benar, tetapi tarif 0,5% dikalikan langsung pada NJOP − NJOPTKP tanpa NJKP 40%, sehingga PBB menurut perusahaan malah lebih besar daripada SPPT.",
          C: "Jalurnya benar, tetapi pengajuan keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB; Pasal 10 ayat (4) PMK 118/2024)."
        },
        jebakan: "Menganggap salah luas sebagai kesalahan tulis, mengira keberatan menunda pembayaran SPPT, atau lupa bahwa tarif dikenakan atas NJKP."
      },
      dasarHukum: [{ pasal: "Pasal 6 dan 7 UU PBB s.t.d.d. UU 12/1994", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 ayat (1), (3), dan (6) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 2 ayat (2) sampai (4), Pasal 9, Pasal 10 ayat (2) dan (4) PMK 118/2024", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-107",
      sejak: "9.5.0"
    },
    {
      id: "B8-218",
      topik: "B8.6",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L 2026 PT Hutan Tanaman Siak sebesar Rp236.000.000 diterima pada 2 Maret 2026 dan dibayar pada 1 September 2026, tepat pada jatuh tempo. Namun kode billing dibuat dengan tahun pajak 2025 untuk NOP yang sama, padahal PBB 2025 objek itu sudah lunas dan tidak ada tagihan PBB 2025 lain. Akibatnya sistem mencatat SPPT 2026 belum dibayar, dan pada 10 November 2026 KPP menerbitkan STP PBB 2026 berisi pokok dan denda Rp14.160.000 (2% × 3 bulan). Perusahaan belum membayar STP tersebut. Langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan keberatan atas STP PBB 2026 paling lambat 3 bulan sejak STP diterima, dengan melampirkan bukti pembayaran", B: "Melunasi denda Rp14.160.000 lebih dulu, kemudian mengajukan permohonan pengurangan denda administratif PBB", C: "Mengajukan pemindahbukuan pembayaran ke PBB 2026 (tanggal pembayaran tetap tanggal setor semula), lalu mengajukan permohonan pembatalan STP PBB yang tidak benar", D: "Mengajukan pemindahbukuan pembayaran ke PBB 2026 dengan tanggal pembayaran mengikuti tanggal Bukti Pemindahbukuan, lalu melunasi denda dalam STP" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Pembayaran yang tercatat untuk tahun pajak 2025 yang sudah lunas merupakan pembayaran yang lebih besar daripada pajak terutang, sehingga dapat dipindahbukukan atas permohonan (Pasal 109 ayat (1) huruf d dan ayat (2) PMK 81/2024). Tanggal pembayaran dalam Bukti Pemindahbukuan mengacu pada tanggal setor semula (Pasal 111 ayat (2)), yaitu 1 September 2026, tepat jatuh tempo. Karena tidak ada keterlambatan, STP PBB yang memuat denda seharusnya tidak diterbitkan dan dapat dimohonkan pembatalannya (Pasal 21 huruf c dan Pasal 22 ayat (4) PMK 118/2024).",
        jejakHitung: [
          ["Jatuh tempo SPPT (6 bulan sejak 2 Maret 2026)", "1 September 2026"],
          ["Tanggal setor semula (dipakai dalam Bukti Pemindahbukuan)", "1 September 2026 → tidak terlambat"],
          ["Denda dalam STP: 2% × 3 bulan × Rp236.000.000", "Rp14.160.000 → tidak seharusnya ada"]
        ],
        mengapaSalah: {
          A: "STP PBB bukan objek keberatan; Pasal 15 ayat (1) UU PBB hanya menyebut SPPT dan SKP.",
          B: "Dendanya tidak seharusnya ada karena pembayaran tepat waktu, sehingga yang tepat pembatalan STP; lagi pula membayar denda lebih dulu tidak sejalan dengan pengurangan denda yang diberikan atas denda yang belum dibayar.",
          D: "Tanggal pembayaran dalam Bukti Pemindahbukuan mengacu pada tanggal setor semula (Pasal 111 ayat (2) PMK 81/2024), bukan tanggal bukti diterbitkan, sehingga tidak ada keterlambatan yang menimbulkan denda."
        },
        jebakan: "Mengira pemindahbukuan memakai tanggal baru sehingga denda tetap terutang, atau memilih keberatan atas STP."
      },
      dasarHukum: [{ pasal: "Pasal 21 huruf c dan Pasal 22 ayat (4) PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 109 ayat (1) huruf d dan ayat (2) serta Pasal 111 ayat (2) PMK 81/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (1) dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅",
      kembaranDari: "B8-108",
      sejak: "9.5.0"
    },
    {
      id: "B8-219",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-B8-17",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Data untuk soal vignette V-B8-17: PT Tandan Lestari Sambas memegang HGU kebun kelapa sawit di Kabupaten Sambas (Provinsi Kalimantan Barat), terdaftar di KPP di Kota Pontianak, dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal yang telah ditanami kelapa sawit (tanaman menghasilkan dan tanaman belum menghasilkan) 6.200 ha dengan nilai tanah Rp4.000/m² dan SIT kelapa sawit Rp3.100/m²; areal pembibitan dan lahan yang sudah diolah tetapi belum ditanami 750 ha dengan nilai tanah Rp4.000/m²; areal emplasemen kebun (kantor kebun, perumahan karyawan) 45 ha dengan nilai Rp10.000/m²; areal bukit batu yang tidak dapat diusahakan 300 ha dengan nilai Rp700/m²; NJOP bangunan kebun (kantor kebun, perumahan, jalan dan jembatan kebun) Rp96.000.000.000. Di dalam areal HGU juga berdiri pabrik kelapa sawit di atas lahan 12 ha (nilai Rp15.000/m², NJOP bangunan pabrik Rp140.000.000.000); areal pabrik itu sudah diberi Izin Usaha Perkebunan-Pengolahan tersendiri dan tidak termasuk dalam angka emplasemen di atas. Perusahaan juga bermitra dengan petani plasma yang kebunnya seluas 2.000 ha berada di luar HGU, terpisah dari kebun inti, bersertifikat hak milik atas nama masing-masing petani, dan terdaftar sebagai objek PBB-P2 (NJOP seluruhnya Rp60.000.000.000). PBB-P5L terutang PT Tandan Lestari Sambas Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.265.576.000", B: "Rp1.429.176.000", C: "Rp1.192.076.000", D: "Rp1.145.576.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Areal yang telah ditanami (termasuk tanaman belum menghasilkan) adalah Areal Produktif Perkebunan dan dinilai tanah ditambah SIT; areal pembibitan dan lahan yang sudah diolah tetapi belum ditanami adalah Areal Belum Produktif sehingga hanya nilai tanah (Pasal 14 ayat (1) dan (2) PMK 186/2019). Areal pabrik yang sudah diberi Izin Usaha Perkebunan-Pengolahan tidak termasuk kawasan perkebunan (Pasal 3 ayat (3)), sehingga lahan dan bangunan pabrik keluar dari objek PBB-P5L. Kebun plasma hak milik petani di luar HGU juga bukan objek PBB sektor perkebunan perusahaan (Pasal 3 ayat (2) dan (6)). PBB = 0,5% × 40% × (NJOP − Rp12.000.000).",
        jejakHitung: [
          ["Produktif 62.000.000 m² × (4.000 + 3.100)", "Rp440.200.000.000"],
          ["Pembibitan dan lahan belum ditanami 7.500.000 m² × 4.000", "Rp30.000.000.000"],
          ["Emplasemen kebun 450.000 m² × 10.000", "Rp4.500.000.000"],
          ["Bukit batu 3.000.000 m² × 700", "Rp2.100.000.000"],
          ["NJOP bumi", "Rp476.800.000.000"],
          ["+ NJOP bangunan kebun (tanpa pabrik)", "Rp572.800.000.000"],
          ["− NJOPTKP Rp12.000.000", "Rp572.788.000.000"],
          ["NJKP 40%", "Rp229.115.200.000"],
          ["PBB 0,5%", "Rp1.145.576.000"]
        ],
        mengapaSalah: {
          A: "NJOP kebun plasma Rp60.000.000.000 ikut dijumlahkan, padahal tanah itu hak milik petani di luar HGU dan sudah menjadi objek PBB-P2 atas nama petani (Pasal 3 ayat (2) dan (6) PMK 186/2019).",
          B: "Lahan pabrik (Rp1.800.000.000) dan bangunan pabrik (Rp140.000.000.000) ikut dihitung, padahal areal yang sudah diberi Izin Usaha Perkebunan-Pengolahan tidak termasuk kawasan perkebunan (Pasal 3 ayat (3) PMK 186/2019).",
          C: "SIT Rp3.100/m² ikut dikenakan pada 750 ha pembibitan dan lahan yang belum ditanami (+Rp23.250.000.000 NJOP), padahal areal pembibitan termasuk Areal Belum Produktif (Pasal 14 ayat (1) huruf b)."
        },
        jebakan: "Pabrik di dalam HGU tidak otomatis objek PBB-P5L: bila arealnya sudah diberi Izin Usaha Perkebunan-Pengolahan tersendiri, areal itu keluar dari kawasan perkebunan. Areal pembibitan tergolong belum produktif walaupun sudah ada bibitnya; SIT hanya untuk areal yang telah ditanami."
      },
      dasarHukum: [{ pasal: "Pasal 1, 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 ayat (3) PMK 23/PMK.03/2014", berlakuSejak: "2014-01-01" }, { pasal: "Pasal 3 ayat (2), (3), (6) dan Pasal 14 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }, { pasal: "Pasal 38 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-109",
      sejak: "9.5.0"
    },
    {
      id: "B8-220",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-B8-17",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 113 UU 1/2022: (1) DBH Pajak Bumi dan Bangunan sebagaimana dimaksud dalam Pasal 111 ayat (2) huruf b ditetapkan sebesar 100% (seratus persen) untuk Daerah. (2) DBH Pajak Bumi dan Bangunan untuk Daerah sebagaimana dimaksud pada ayat (1) dibagikan kepada: a. provinsi yang bersangkutan sebesar 16,2% (enam belas koma dua persen); b. kabupaten/kota penghasil sebesar 73,8% (tujuh puluh tiga koma delapan persen); dan c. kabupaten/kota lainnya dalam provinsi yang bersangkutan sebesar 10% (sepuluh persen).",
      stem: "Lanjutan V-B8-17: PT Tandan Lestari Sambas melunasi PBB-P5L 2026 kebun kelapa sawitnya di Kabupaten Sambas (Provinsi Kalimantan Barat) sebesar Rp1.145.576.000. Seorang staf Badan Pendapatan Daerah Kabupaten Sambas menyusun proyeksi DBH PBB dan berpendapat bahwa Kabupaten Sambas, sebagai kabupaten penghasil, menerima porsi kabupaten/kota penghasil ditambah porsi 10%, sehingga memperoleh 83,8%. Abaikan pembagian berdasarkan kinerja Pemerintah Daerah serta waktu dan mekanisme penyaluran. Berdasarkan kutipan tersebut, porsi DBH PBB dari pembayaran itu yang menjadi hak Kabupaten Sambas dan perlakuan porsi 10% adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kabupaten Sambas Rp845.435.088; Rp114.557.600 masuk kas Provinsi Kalimantan Barat bersama porsi provinsi 16,2%", B: "Kabupaten Sambas Rp845.435.088; Rp114.557.600 menjadi hak kabupaten/kota lainnya dalam Provinsi Kalimantan Barat", C: "Kabupaten Sambas Rp959.992.688 (73,8% + 10%); Rp114.557.600 ikut diterima Kabupaten Sambas sebagai daerah penghasil", D: "Kabupaten Sambas Rp1.031.018.400 (90%); Rp114.557.600 tetap menjadi penerimaan Pemerintah Pusat sesuai imbangan lama" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Pasal 113 UU 1/2022 (diulang Pasal 16 PMK 35/2026) menetapkan seluruh DBH PBB (100%) untuk daerah dan langsung membaginya kepada tiga kelompok: provinsi 16,2%, kabupaten/kota penghasil 73,8%, dan kabupaten/kota lainnya dalam provinsi 10%. Kabupaten Sambas sebagai penghasil hanya berhak atas 73,8%; porsi 10% milik kabupaten/kota lain di Kalimantan Barat, bukan tambahan bagi penghasil dan bukan pendapatan provinsi. Dalam alokasi nyata 90% dibagi menurut persentase ini dan 10% menurut kinerja (Pasal 17 PMK 35/2026); soal meminta pembagian menurut kutipan.",
        jejakHitung: [
          ["Sumber DBH PBB (PBB-P5L)", "Rp1.145.576.000"],
          ["Kabupaten penghasil 73,8% × 1.145.576.000", "Rp845.435.088"],
          ["Kabupaten/kota lainnya 10% × 1.145.576.000", "Rp114.557.600"],
          ["Provinsi 16,2% × 1.145.576.000", "Rp185.583.312"],
          ["Jumlah (100% untuk daerah)", "Rp1.145.576.000"]
        ],
        mengapaSalah: {
          A: "Porsi 10% diperlakukan sebagai pendapatan provinsi, padahal Pasal 113 ayat (2) huruf c menyebutnya untuk kabupaten/kota lainnya dalam provinsi; provinsi hanya 16,2%.",
          C: "Mengikuti pendapat staf: frasa 'kabupaten/kota lainnya' dibaca seolah termasuk kabupaten penghasil, sehingga Sambas mendapat 83,8%; penghasil sudah memperoleh porsinya sendiri 73,8%.",
          D: "Memakai pola imbangan lama UU PBB (daerah sekurang-kurangnya 90%, sisanya pusat), padahal menurut Pasal 113 ayat (1) UU 1/2022 seluruh DBH PBB untuk daerah dan dibagi 16,2/73,8/10."
        },
        jebakan: "Angka 10% bukan bagian pusat, bukan bagian provinsi, dan bukan tambahan bagi daerah penghasil; ia milik kabupaten/kota lain dalam provinsi yang sama. Jangan pula tertukar dengan 10% bobot kinerja dalam Pasal 17 PMK 35/2026, yang merupakan cara menghitung alokasi, bukan kelompok penerima."
      },
      dasarHukum: [{ pasal: "Pasal 113 UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 angka 27, Pasal 16, dan Pasal 17 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-110",
      sejak: "9.5.0"
    },
    {
      id: "B8-221",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-B8-17",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Lanjutan V-B8-17: SPPT PBB-P5L 2026 PT Tandan Lestari Sambas sebesar Rp1.145.576.000 diterbitkan pada 9 Maret 2026 dan diterima perusahaan pada 23 Maret 2026. Perusahaan membayar Rp600.000.000 pada 15 September 2026, sedangkan sisanya Rp545.576.000 baru dilunasi pada 4 Desember 2026 setelah hasil penjualan tandan buah segar diterima. KPP kemudian menerbitkan STP PBB yang diterima perusahaan pada 14 Desember 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi dalam STP dan batas pelunasan STP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp68.734.560; paling lambat 13 Januari 2027", B: "Rp21.823.040; paling lambat 13 Januari 2027", C: "Rp32.734.560; paling lambat 13 Januari 2027", D: "Rp32.734.560; paling lambat 13 Juni 2027" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPPT jatuh tempo 6 bulan sejak diterima: hari terakhirnya 22 September 2026. Pembayaran Rp600.000.000 pada 15 September tepat waktu, sehingga denda 2% sebulan hanya dikenakan atas bagian yang kurang dibayar, Rp545.576.000. Keterlambatan 22 September s.d. 4 Desember 2026 adalah 2 bulan 12 hari, dihitung 3 bulan. STP PBB harus dilunasi paling lambat 1 bulan sejak diterima.",
        jejakHitung: [
          ["Jatuh tempo SPPT: 6 bulan sejak 23 Maret 2026", "22 September 2026"],
          ["Bagian yang kurang dibayar pada jatuh tempo", "Rp545.576.000"],
          ["Bulan ke-1, ke-2, ke-3 (mulai 23 September, 23 Oktober, 23 November)", "4 Desember 2026 → 3 bulan"],
          ["Denda 3 × 2% × 545.576.000", "Rp32.734.560"],
          ["Jatuh tempo STP: 1 bulan sejak 14 Desember 2026", "13 Januari 2027"]
        ],
        mengapaSalah: {
          A: "Denda dihitung atas seluruh pokok Rp1.145.576.000, padahal Rp600.000.000 sudah dibayar sebelum jatuh tempo; denda hanya atas jumlah yang tidak atau kurang dibayar.",
          B: "Sisa 12 hari diabaikan sehingga keterlambatan dihitung 2 bulan, padahal soal menetapkan bagian bulan dihitung penuh.",
          D: "Jangka 6 bulan milik SPPT diterapkan pada STP; STP PBB jatuh tempo 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB)."
        },
        jebakan: "Pembayaran sebagian sebelum jatuh tempo memperkecil dasar denda; denda 2% sebulan dihitung atas sisa yang kurang dibayar. Dua tenggat berbeda dalam satu soal: SPPT 6 bulan, STP 1 bulan, keduanya sejak tanggal diterima."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-111",
      sejak: "9.5.0"
    },
    {
      id: "B8-222",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Akasia Rimba Pelalawan memegang perizinan berusaha pemanfaatan hutan tanaman (akasia) di Kabupaten Pelalawan dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal yang telah ditanami 10.500 ha dengan nilai tanah Rp1.400/m² dan SIT hutan tanaman rata-rata Rp2.600/m², termasuk (i) 1.200 ha bekas tebangan yang ditanami ulang bibit akasia pada 10 Desember 2025 dan pada awal tahun tanamannya baru berumur tiga minggu, serta (ii) 1.500 ha yang ditebang habis pada Februari 2026; areal yang belum ditanami (lahan yang sudah diolah) 4.000 ha dengan nilai tanah Rp1.400/m², termasuk 700 ha yang dikeluarkan dari areal perizinan pada 1 Juli 2026; areal pengaman (jalan angkut, kanal, dan tempat pengumpulan kayu) 600 ha dengan NJOP bumi Rp1.100/m²; areal emplasemen 30 ha dengan nilai Rp8.000/m²; NJOP bangunan (kantor lapangan, mess, jembatan) Rp9.200.000.000. Dengan pola penilaian hutan tanaman (SIT hanya pada areal yang telah ditanami), PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp988.376.000", B: "Rp925.976.000", C: "Rp968.776.000", D: "Rp910.376.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PBB ditetapkan menurut keadaan objek pada 1 Januari 2026 (Pasal 8 ayat (2) UU PBB). Pada hutan tanaman, areal yang telah ditanami adalah Areal Produktif Perhutanan (tanah ditambah SIT/Biaya Investasi Tanaman), berapa pun umur tanamannya, dan areal yang belum ditanami adalah Areal Belum Produktif (Pasal 15 ayat (1) huruf a angka 2 dan huruf b angka 2 PMK 186/2019). Blok yang ditanami ulang 10 Desember 2025 sudah produktif pada 1 Januari 2026; blok yang ditebang Februari 2026 masih produktif untuk 2026; areal yang dikeluarkan Juli 2026 tetap dihitung untuk 2026.",
        jejakHitung: [
          ["Produktif 105.000.000 m² × (1.400 + 2.600)", "Rp420.000.000.000"],
          ["Belum ditanami 40.000.000 m² × 1.400", "Rp56.000.000.000"],
          ["Pengaman 6.000.000 m² × 1.100", "Rp6.600.000.000"],
          ["Emplasemen 300.000 m² × 8.000", "Rp2.400.000.000"],
          ["NJOP bumi", "Rp485.000.000.000"],
          ["+ NJOP bangunan", "Rp494.200.000.000"],
          ["− NJOPTKP", "Rp494.188.000.000"],
          ["× 40% × 0,5%", "Rp988.376.000"]
        ],
        mengapaSalah: {
          B: "Blok 1.200 ha yang baru ditanami ulang 10 Desember 2025 dianggap belum produktif karena tanamannya masih muda (SIT Rp31.200.000.000 hilang), padahal ukuran Pasal 15 adalah sudah atau belum ditanami.",
          C: "Areal 700 ha yang dikeluarkan dari perizinan pada 1 Juli 2026 dikurangkan (−Rp9.800.000.000 NJOP), padahal pada 1 Januari 2026 areal itu masih bagian objek.",
          D: "Blok 1.500 ha yang ditebang Februari 2026 diperlakukan sebagai belum produktif (SIT Rp39.000.000.000 hilang), padahal penebangan terjadi setelah 1 Januari 2026."
        },
        jebakan: "Tiga peristiwa di sekitar 1 Januari (tanam ulang Desember 2025, tebang Februari 2026, pengurangan areal Juli 2026) diuji sekaligus. Patokannya keadaan 1 Januari 2026, dan untuk hutan tanaman pembedanya hanya sudah atau belum ditanami, bukan umur atau kesiapan tebang tanaman."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 15 ayat (1) dan ayat (2) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-112",
      sejak: "9.5.0"
    },
    {
      id: "B8-223",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Rawa Tungkal Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja di daratan Kabupaten Tanjung Jabung Barat; DJP mengadministrasikannya sebagai satu objek PBB-P5L sektor migas dan perusahaan tidak memiliki objek lain. Data penilaian per 1 Januari 2026: permukaan bumi areal produktif (tapak sumur, stasiun pengumpul) 180 ha dengan nilai Rp28.000/m²; areal emplasemen 35 ha dengan nilai Rp45.000/m²; areal pengaman (jalan akses, jalur pipa) yang dikuasai perusahaan 2.600 ha dengan nilai Rp1.200/m²; NJOP tubuh bumi hasil penilaian DJP Rp1.180.000.000.000; NJOP bangunan Rp520.000.000.000, termasuk stasiun pengumpul lama senilai Rp60.000.000.000. Peristiwa lain: (1) lahan 400 ha (nilai Rp1.200/m²) dibebaskan perusahaan dan mulai dipakai sebagai jalur pipa baru sejak 15 Desember 2025; lahan ini belum tercantum dalam SPPT 2025 dan belum termasuk dalam angka 2.600 ha di atas; (2) di dalam wilayah kerja terdapat permukiman dan kebun desa seluas 9.000 ha (nilai Rp900/m²) yang tidak dipunyai haknya dan tidak dimanfaatkan perusahaan; (3) stasiun pengumpul lama dibongkar pada 3 Maret 2026. Manajer pajak berpendapat nilai stasiun yang sudah dibongkar tidak perlu dihitung. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.594.676.000", B: "Rp3.766.276.000", C: "Rp3.604.276.000", D: "Rp3.484.276.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pajak terutang ditentukan menurut keadaan objek pada 1 Januari 2026 (Pasal 8 ayat (2) UU PBB). Lahan 400 ha yang dibebaskan dan dipakai sejak 15 Desember 2025 sudah menjadi permukaan bumi objek pada 1 Januari 2026 walaupun belum ada di SPPT 2025; stasiun yang baru dibongkar Maret 2026 tetap dihitung untuk 2026. Permukiman dan kebun desa di dalam wilayah kerja yang tidak dipunyai haknya dan tidak dimanfaatkan perusahaan tidak dikenakan PBB sektor migas (Pasal 5 ayat (4) dan ayat (7) PMK 186/2019).",
        jejakHitung: [
          ["Areal produktif 1.800.000 m² × 28.000", "Rp50.400.000.000"],
          ["Emplasemen 350.000 m² × 45.000", "Rp15.750.000.000"],
          ["Pengaman (2.600 + 400 ha) 30.000.000 m² × 1.200", "Rp36.000.000.000"],
          ["Tubuh bumi", "Rp1.180.000.000.000"],
          ["Bangunan per 1 Januari 2026 (termasuk stasiun lama)", "Rp520.000.000.000"],
          ["NJOP objek (permukiman desa tidak dihitung)", "Rp1.802.150.000.000"],
          ["(1.802.150.000.000 − 12.000.000) × 40% × 0,5%", "Rp3.604.276.000"]
        ],
        mengapaSalah: {
          A: "Lahan 400 ha (Rp4.800.000.000) tidak dihitung karena mengikuti SPPT 2025, padahal sejak 15 Desember 2025 lahan itu sudah dikuasai dan dipakai perusahaan.",
          B: "Permukiman dan kebun desa 9.000 ha (Rp81.000.000.000) ikut dihitung karena berada di dalam wilayah kerja, padahal areal yang tidak dipunyai haknya dan tidak dimanfaatkan perusahaan tidak dikenakan PBB sektor migas (Pasal 5 ayat (7) PMK 186/2019).",
          D: "Mengikuti pendapat manajer pajak: stasiun lama Rp60.000.000.000 dikeluarkan, padahal pada 1 Januari 2026 bangunan itu masih ada."
        },
        jebakan: "Batas objek permukaan bumi migas bukan seluruh wilayah kerja, melainkan areal yang dimiliki atau dimanfaatkan kontraktor. Perubahan sesudah 1 Januari (pembongkaran Maret 2026) tidak mengubah PBB 2026, sedangkan perubahan sebelum 1 Januari (lahan Desember 2025) sudah masuk walaupun SPPT tahun lalu belum memuatnya."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf a PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 5 dan Pasal 17 PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-113",
      sejak: "9.5.0"
    },
    {
      id: "B8-224",
      topik: "B8.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Transmisi Gas Laut Jawa memiliki jaringan pipa transmisi gas bawah laut yang berada di luar wilayah kerja migas mana pun dan diadministrasikan sebagai objek PBB-P5L sektor lainnya; perusahaan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 NJOP bumi (koridor perairan yang digunakan pipa) Rp280.000.000 dan NJOP bangunan (pipa setelah penyusutan) Rp790.000.000. Pada Mei 2026 satu ruas pipa senilai Rp350.000.000 dihentikan dan dibongkar, sedangkan ruas pipa baru senilai Rp600.000.000 mulai dialiri gas pada April 2026. SPPT 2026 diterbitkan pada Juni 2026. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.058.000", B: "Rp2.116.000", C: "Rp708.000", D: "Rp3.316.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Keadaan 1 Januari 2026 memuat koridor perairan dan pipa yang ada pada tanggal itu: NJOP Rp1.070.000.000, sehingga untuk objek sektor lainnya NJKP-nya 40% (NJOP Rp1 miliar atau lebih). Pembongkaran ruas pada Mei 2026 dan ruas baru April 2026 tidak mengubah PBB 2026.",
        jejakHitung: [
          ["NJOP objek per 1 Januari 2026: 280.000.000 + 790.000.000", "Rp1.070.000.000"],
          ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"],
          ["NJOP − NJOPTKP", "Rp1.058.000.000"],
          ["1.058.000.000 × 40% × 0,5%", "Rp2.116.000"]
        ],
        mengapaSalah: {
          A: "Memakai NJKP 20%, padahal NJOP objek sektor lainnya ini per 1 Januari 2026 Rp1.070.000.000, tidak kurang dari Rp1 miliar.",
          C: "Ruas yang dibongkar Mei 2026 dikurangkan (NJOP Rp720.000.000, NJKP 20%), padahal pembongkaran terjadi setelah 1 Januari 2026.",
          D: "Ruas baru April 2026 ikut dihitung (NJOP Rp1.670.000.000), padahal belum ada pada 1 Januari 2026."
        },
        jebakan: "Batas Rp1 miliar untuk NJKP sektor lainnya diuji pada NJOP keadaan 1 Januari. Perubahan sesudahnya, menaikkan atau menurunkan NJOP, baru berpengaruh pada Tahun Pajak 2027."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 huruf b PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "Pasal 2 huruf f, Pasal 8 ayat (1) huruf c, dan Pasal 9 ayat (2) huruf a PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-114",
      sejak: "9.5.0"
    },
    {
      id: "B8-225",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf a UU PBB: Obyek Pajak yang tidak dikenakan Pajak Bumi dan Bangunan adalah objek pajak yang digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan dan kebudayaan nasional, yang tidak dimaksudkan untuk memperoleh keuntungan.",
      stem: "PT Batubara Enim Raya (IUP operasi produksi batubara; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian per 1 Januari 2026: areal produktif (pit, stockpile, jalan tambang) 210 ha dengan nilai Rp22.000/m²; areal emplasemen 60 ha dengan nilai Rp50.000/m²; areal lainnya dalam wilayah IUP 12.000 ha yang lahannya sudah dibebaskan dan dimanfaatkan perusahaan untuk kegiatan penambangan dengan nilai Rp700/m²; NJOP tubuh bumi Rp510.000.000.000; dan NJOP seluruh bangunan Rp248.000.000.000. Di dalam emplasemen terdapat: (1) masjid yang terbuka untuk umum dan dikelola nirlaba (lahan 0,4 ha, bangunan Rp2.400.000.000); (2) sekolah menengah yang terbuka untuk umum tetapi dikelola anak perusahaan secara komersial dengan memungut uang sekolah untuk memperoleh laba (lahan 1 ha, bangunan Rp5.500.000.000); (3) poliklinik yang dikelola yayasan kesehatan nirlaba di atas lahan milik perusahaan dan melayani masyarakat sekitar tanpa memungut bayaran (lahan 0,6 ha, bangunan Rp3.600.000.000). Berdasarkan kutipan tersebut, PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.811.376.000", B: "Rp1.831.176.000", C: "Rp1.836.376.000", D: "Rp1.823.376.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Masjid umum nirlaba dan poliklinik yayasan nirlaba yang melayani masyarakat tanpa bayaran digunakan semata-mata untuk kepentingan umum dan tidak dimaksudkan memperoleh keuntungan, sehingga lahan dan bangunannya dikeluarkan dari objek walaupun lahannya milik perusahaan. Sekolah yang terbuka untuk umum tetapi dikelola secara komersial untuk memperoleh laba tidak memenuhi Pasal 3 ayat (1) huruf a, sehingga tetap objek.",
        jejakHitung: [
          ["Areal produktif 2.100.000 m² × 22.000", "Rp46.200.000.000"],
          ["Emplasemen (600.000 − 4.000 − 6.000) m² × 50.000", "Rp29.500.000.000"],
          ["Areal lainnya 120.000.000 m² × 700", "Rp84.000.000.000"],
          ["Tubuh bumi", "Rp510.000.000.000"],
          ["Bangunan 248.000.000.000 − 2.400.000.000 − 3.600.000.000", "Rp242.000.000.000"],
          ["NJOP objek", "Rp911.700.000.000"],
          ["(911.700.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.823.376.000"]
        ],
        mengapaSalah: {
          A: "Sekolah komersial ikut dikecualikan karena bergerak di bidang pendidikan dan terbuka untuk umum, padahal dikelola untuk memperoleh laba (lahan Rp500.000.000 dan bangunan Rp5.500.000.000 tetap objek).",
          B: "Hanya masjid yang dikecualikan; poliklinik dianggap tetap objek karena lahannya milik perusahaan, padahal ukuran pengecualian adalah penggunaannya untuk kepentingan umum tanpa mencari keuntungan.",
          C: "Tidak ada yang dikecualikan sama sekali; masjid dan poliklinik umum nirlaba memenuhi Pasal 3 ayat (1) huruf a."
        },
        jebakan: "Bidang kegiatan (pendidikan) dan keterbukaan untuk umum belum cukup: pengecualian juga menuntut tidak dimaksudkan memperoleh keuntungan. Sebaliknya, kepemilikan lahan oleh perusahaan tidak menghalangi pengecualian bila penggunaannya memenuhi syarat."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "B8-115",
      sejak: "9.5.0"
    },
    {
      id: "B8-226",
      topik: "B8.7",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 11 UU PBB: (1) Pajak yang terhutang berdasarkan Surat Pemberitahuan Pajak Terhutang sebagaimana dimaksud dalam Pasal 10 ayat (1) harus dilunasi selambat-lambatnya 6 (enam) bulan sejak tanggal diterimanya Surat Pemberitahuan Pajak Terhutang oleh wajib pajak. (3) Pajak yang terhutang yang pada saat jatuh tempo pembayaran tidak dibayar atau kurang dibayar, dikenakan denda administrasi sebesar 2% (dua persen) sebulan, yang dihitung dari saat jatuh tempo sampai dengan hari pembayaran untuk jangka waktu paling lama 24 (dua puluh empat) bulan.",
      stem: "PT Geotermal Lereng Wilis (pengusahaan panas bumi di Jawa Timur) mempunyai dua objek PBB-P5L dengan NOP dan SPPT terpisah. Kedua SPPT Tahun Pajak 2026 diterbitkan pada 4 Maret 2026. SPPT Wilayah Barat sebesar Rp436.000.000 diterima pada 11 Maret 2026, sedangkan SPPT Wilayah Timur sebesar Rp918.000.000 baru diterima pada 27 April 2026 karena salah alamat pengiriman. Kedua SPPT dilunasi pada 19 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Berdasarkan kutipan tersebut, jumlah denda administrasi PBB-P5L 2026 yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp44.520.000", B: "Rp81.240.000", C: "Rp17.440.000", D: "Rp179.920.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo dihitung per SPPT sejak tanggal diterima. Wilayah Barat jatuh tempo 10 September 2026, sehingga pelunasan 19 November terlambat 2 bulan 9 hari, dihitung 3 bulan. Wilayah Timur jatuh tempo 26 Oktober 2026, sehingga terlambat 24 hari, dihitung 1 bulan.",
        jejakHitung: [
          ["Wilayah Barat: 6 bulan sejak 11 Maret 2026", "10 September 2026"],
          ["10 September s.d. 19 November 2026", "2 bulan 9 hari → 3 bulan"],
          ["Denda Barat 3 × 2% × 436.000.000", "Rp26.160.000"],
          ["Wilayah Timur: 6 bulan sejak 27 April 2026", "26 Oktober 2026"],
          ["26 Oktober s.d. 19 November 2026", "24 hari → 1 bulan"],
          ["Denda Timur 1 × 2% × 918.000.000", "Rp18.360.000"],
          ["Jumlah denda", "Rp44.520.000"]
        ],
        mengapaSalah: {
          B: "Jatuh tempo kedua SPPT dihitung dari tanggal terbit (3 September 2026), sehingga keduanya dianggap terlambat 3 bulan (6% × Rp1.354.000.000).",
          C: "Bagian bulan diabaikan: Wilayah Barat dihitung 2 bulan dan Wilayah Timur dianggap tidak terlambat (4% × Rp436.000.000).",
          D: "Memakai jatuh tempo 1 bulan milik SKP/STP untuk SPPT (Wilayah Barat 8 bulan, Wilayah Timur 6 bulan)."
        },
        jebakan: "SPPT yang terlambat sampai ke wajib pajak mempunyai jatuh tempo sendiri; tanggal terbit tidak relevan. Keterlambatan kurang dari sebulan tetap dihitung satu bulan bila soal menetapkan bagian bulan dihitung penuh."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅",
      kembaranDari: "B8-116",
      sejak: "9.5.0"
    },
    {
      id: "B8-227",
      topik: "B8.5",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Getah Musi Lestari, perusahaan perkebunan karet, menerima SPPT PBB-P5L Sektor Perkebunan Tahun Pajak 2026 sebesar Rp96.000.000 pada 16 Januari 2026. Pada 2 April 2026 perusahaan mengajukan keberatan atas SPPT tersebut (sampai saat pelunasan belum diputus). Pada 10 Juni 2026 perusahaan membayar Rp36.000.000 dan tidak membayar sisanya sampai jatuh tempo. KPP menerbitkan STP PBB yang memuat pokok dan denda administratif pada 3 November 2026, dan STP itu diterima perusahaan pada 5 November 2026. Perusahaan melunasi seluruh jumlah dalam STP tersebut pada 21 Januari 2027. Berdasarkan ketentuan penerbitan STP PBB dalam PMK 80/2023, jumlah dalam STP PBB pertama dan STP PBB berikutnya (bila ada) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP pertama Rp67.680.000,00; STP berikutnya Rp3.840.000,00", B: "STP pertama Rp64.800.000,00; STP berikutnya Rp3.600.000,00", C: "STP pertama Rp64.800.000,00; STP berikutnya Rp2.400.000,00", D: "STP pertama Rp64.800.000,00; tidak ada STP berikutnya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan tidak menunda kewajiban membayar (Pasal 15 ayat (6) UU PBB), sehingga SPPT tetap jatuh tempo 6 bulan sejak diterima. Denda 2% sebulan dikenakan atas jumlah yang tidak atau kurang dibayar (Pasal 11 ayat (3) UU PBB beserta Penjelasannya, bagian bulan dihitung penuh), yaitu sisa Rp60.000.000. STP pertama memuat sisa pokok ditambah denda yang dihitung sejak berakhirnya jatuh tempo SPPT sampai tanggal terbit STP (Pasal 29 huruf a dan Pasal 30 ayat (2) PMK 80/2023). STP harus dilunasi 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB). Karena pokok baru dilunasi setelah jatuh tempo STP, diterbitkan STP PBB yang hanya memuat denda atas pokok, dihitung sejak berakhirnya jatuh tempo STP sampai tanggal pembayaran pokok (Pasal 31 ayat (1) huruf b dan ayat (2) huruf b PMK 80/2023).",
        jejakHitung: [
          ["Jatuh tempo SPPT = 6 bulan sejak 16 Januari 2026", "15 Juli 2026"],
          ["Pokok yang kurang dibayar = Rp96.000.000 − Rp36.000.000", "Rp60.000.000"],
          ["16 Juli s.d. 3 November 2026 (tanggal terbit STP)", "3 bulan 19 hari → 4 bulan"],
          ["STP pertama = Rp60.000.000 + 4 × 2% × Rp60.000.000", "Rp64.800.000"],
          ["Jatuh tempo STP = 1 bulan sejak diterima 5 November 2026", "4 Desember 2026"],
          ["5 Desember 2026 s.d. 21 Januari 2027 (pelunasan pokok)", "1 bulan 17 hari → 2 bulan"],
          ["STP berikutnya = 2 × 2% × Rp60.000.000", "Rp2.400.000"]
        ],
        mengapaSalah: {
          A: "Menghitung denda atas seluruh PBB Rp96.000.000, padahal denda hanya atas jumlah yang tidak atau kurang dibayar (Rp60.000.000).",
          B: "Menghitung denda STP berikutnya 3 bulan, baik sejak sehari setelah STP terbit maupun dengan cara menghitung seluruh denda dari jatuh tempo SPPT sampai pelunasan (7 bulan) lalu mengurangkan 4 bulan yang sudah ditagih. Keduanya mengabaikan Pasal 31 ayat (2) huruf b PMK 80/2023: masa sampai jatuh tempo STP tidak didenda, dan denda STP berikutnya baru dihitung sejak berakhirnya jatuh tempo STP.",
          D: "Mengabaikan STP yang hanya memuat denda atas pelunasan pokok setelah jatuh tempo STP (Pasal 31 ayat (1) huruf b PMK 80/2023)."
        },
        jebakan: "Pembayaran sebagian sebelum jatuh tempo mengurangi dasar denda. Denda STP pertama berhenti pada tanggal terbit STP, jatuh tempo STP dihitung dari tanggal diterima, dan denda STP berikutnya baru berjalan setelah jatuh tempo STP, sehingga masa 4 November sampai 4 Desember 2026 tidak didenda. Jangan menghitung denda kumulatif dari jatuh tempo SPPT sampai pelunasan lalu mengurangkan denda yang sudah ditagih. Total denda 6 bulan, di bawah batas 24 bulan."
      },
      dasarHukum: [{ pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (1), (3), dan (4) beserta Penjelasan, Pasal 15 ayat (6)", berlakuSejak: "1995-01-01" }, { pasal: "PMK 80/2023 Pasal 29, Pasal 30 ayat (1)–(2), Pasal 31 ayat (1) huruf b dan ayat (2) huruf b", berlakuSejak: "2023-08-24" }, { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 97 ayat (1) dan (3)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-121",
      sejak: "9.5.1"
    },
    {
      id: "B8-228",
      topik: "B8.1",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 4 ayat (1) UU PBB: Yang menjadi subyek pajak adalah orang atau badan yang secara nyata mempunyai suatu hak atas bumi, dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan. Pasal 3 ayat (6) PMK 186/PMK.03/2019: Dalam hal terdapat areal pada kawasan perkebunan sebagaimana dimaksud pada ayat (2) yang dipunyai haknya dan/atau dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Subjek Pajak atau Wajib Pajak, areal tersebut tidak dikenakan PBB Sektor Perkebunan.",
      stem: "PT Tunas Karya Agrindo memegang HGU seluas 4.800 ha untuk perkebunan karet di Kabupaten Musi Banyuasin. Sejak 2025, dengan perjanjian sewa yang sah, perusahaan menyewakan dua bagian lahan di dalam HGU: (1) 7 ha kepada PT Gudang Sriwijaya Logistik, yang memagari, menguasai, dan memanfaatkan sepenuhnya areal itu untuk gudang miliknya; (2) 11 ha kepada CV Angkut Lateks Mandiri sebagai pool truk, dengan klausul bahwa PT Tunas Karya Agrindo tetap memakai areal itu setiap hari sebagai tempat pengumpulan dan penimbangan lateks, dan klausul itu memang dijalankan. Kedua areal tetap tercatat dalam HGU. Berdasarkan kutipan tersebut, perlakuan PBB-P5L Sektor Perkebunan Tahun Pajak 2026 atas bumi kawasan HGU itu yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PT Tunas Karya Agrindo menjadi subjek atas bumi 4.782 ha; areal 7 ha dan 11 ha tidak dikenakan PBB Sektor Perkebunan karena keduanya disewakan secara sah", B: "PT Tunas Karya Agrindo menjadi subjek atas bumi seluruh 4.800 ha, karena kedua areal sewaan tetap tercatat dalam HGU dan haknya tetap dipunyai perusahaan", C: "PT Tunas Karya Agrindo menjadi subjek atas bumi 4.793 ha, dan PT Gudang Sriwijaya Logistik menjadi Wajib Pajak PBB Sektor Perkebunan atas bumi 7 ha", D: "PT Tunas Karya Agrindo menjadi subjek atas bumi 4.793 ha; areal 7 ha tidak dikenakan PBB Sektor Perkebunan, sedangkan areal 11 ha tetap menjadi objek" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pemegang HGU mempunyai hak atas bumi sehingga menjadi subjek atas bumi kawasan perkebunannya (Pasal 4 ayat (1) UU PBB). Pasal 3 ayat (6) PMK 186/PMK.03/2019 hanya mengeluarkan areal yang dimanfaatkan SEPENUHNYA secara nyata dan sah oleh selain Wajib Pajak. Areal 7 ha dikuasai dan dimanfaatkan sepenuhnya oleh penyewa sehingga tidak dikenakan PBB Sektor Perkebunan. Areal 11 ha tetap dipakai PT Tunas Karya Agrindo setiap hari, jadi tidak dimanfaatkan sepenuhnya oleh pihak lain dan tetap objek. Bumi yang menjadi objek: 4.800 − 7 = 4.793 ha.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Sewa yang sah saja tidak cukup: areal 11 ha tidak dimanfaatkan sepenuhnya oleh penyewa karena perusahaan tetap memakainya, sehingga syarat Pasal 3 ayat (6) tidak terpenuhi.",
          B: "Tercatat dalam HGU tidak menentukan sendirian: areal 7 ha yang dimanfaatkan sepenuhnya secara nyata dan sah oleh pihak lain tidak dikenakan PBB Sektor Perkebunan (Pasal 3 ayat (6) PMK 186/2019).",
          C: "Pasal 3 ayat (6) mengeluarkan areal 7 ha dari PBB Sektor Perkebunan sama sekali; penyewa tidak menjadi Wajib Pajak PBB Sektor Perkebunan atas areal itu."
        },
        jebakan: "Uji tiap bagian areal sewaan: yang menentukan adalah apakah pihak lain memanfaatkannya sepenuhnya secara nyata dan sah, bukan sekadar adanya perjanjian sewa atau pencatatan dalam HGU."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (2) dan (6) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-001",
      sejak: "9.5.1"
    },
    {
      id: "B8-229",
      topik: "B8.2",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 3 ayat (1) huruf e UU PBB: Obyek Pajak yang tidak dikenakan Pajak Bumi dan Bangunan adalah objek pajak yang digunakan oleh badan atau perwakilan organisasi internasional yang ditentukan oleh Menteri Keuangan. Pasal 4 ayat (5) PMK 186/PMK.03/2019: Dalam hal terdapat areal pada kawasan perhutanan sebagaimana dimaksud pada ayat (2) yang dipunyai haknya dan/atau dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Subjek Pajak atau Wajib Pajak, areal tersebut tidak dikenakan PBB Sektor Perhutanan.",
      stem: "PT Wana Lestari Mahakam memegang perizinan berusaha pemanfaatan hutan tanaman industri di Kabupaten Kutai Barat dan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 di dalam areal izinnya terdapat: (1) stasiun riset 16 ha beserta bangunan milik perusahaan Rp1.350.000.000, yang menurut perjanjian kerja sama dipakai bersama setiap hari oleh peneliti perusahaan dan peneliti sebuah yayasan konservasi asing; yayasan itu bukan badan atau perwakilan organisasi internasional yang ditentukan Menteri Keuangan; (2) areal persemaian 22 ha yang disewakan kepada PT Bibit Tropika Nusantara dan sejak 2025 dikuasai serta dimanfaatkan sepenuhnya secara nyata dan sah oleh penyewa, beserta bangunan milik penyewa Rp640.000.000; (3) kantor dan mes karyawan 4 ha beserta bangunan Rp2.100.000.000 yang dipakai perusahaan sendiri. NJOP bumi ketiga areal Rp3.000/m². Berdasarkan kutipan tersebut, total NJOP bumi dan bangunan dari ketiga areal itu yang diperhitungkan dalam PBB-P5L Sektor Perhutanan Tahun Pajak 2026 PT Wana Lestari Mahakam adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.050.000.000", B: "Rp2.220.000.000", C: "Rp5.350.000.000", D: "Rp4.710.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Stasiun riset (1) tetap objek: yayasan asing itu bukan organisasi internasional yang ditentukan Menteri Keuangan (Pasal 3 ayat (1) huruf e UU PBB tidak berlaku), dan areal itu dipakai bersama sehingga tidak dimanfaatkan sepenuhnya oleh pihak lain. Persemaian (2) dimanfaatkan sepenuhnya secara nyata dan sah oleh penyewa sehingga seluruh areal itu, bumi dan bangunannya, tidak dikenakan PBB Sektor Perhutanan (Pasal 4 ayat (5) PMK 186/2019). Kantor dan mes (3) dipakai perusahaan sendiri dan tetap objek.",
        jejakHitung: [
          ["(1) 160.000 m² × Rp3.000 + Rp1.350.000.000 (tetap objek)", "Rp1.830.000.000"],
          ["(2) 220.000 m² × Rp3.000 + Rp640.000.000 (tidak dikenakan, Pasal 4 ayat (5) PMK 186/2019)", "Rp1.300.000.000"],
          ["(3) 40.000 m² × Rp3.000 + Rp2.100.000.000 (tetap objek)", "Rp2.220.000.000"],
          ["Jumlah yang diperhitungkan = (1) + (3)", "Rp4.050.000.000"]
        ],
        mengapaSalah: {
          B: "Ikut mengeluarkan stasiun riset seolah dipakai organisasi internasional atau dimanfaatkan sepenuhnya oleh pihak lain, padahal yayasan itu tidak ditentukan Menteri Keuangan dan areal dipakai bersama perusahaan.",
          C: "Persemaian ikut dihitung, padahal areal yang dimanfaatkan sepenuhnya secara nyata dan sah oleh selain Wajib Pajak tidak dikenakan PBB Sektor Perhutanan.",
          D: "Hanya bangunan milik penyewa yang dikeluarkan, sedangkan bumi persemaian Rp660.000.000 tetap dihitung; Pasal 4 ayat (5) mengeluarkan arealnya, bukan hanya bangunannya."
        },
        jebakan: "Status asing pengguna tidak cukup: pengecualian huruf e hanya untuk organisasi internasional yang ditentukan Menteri Keuangan. Pemakaian bersama tidak memenuhi syarat dimanfaatkan sepenuhnya oleh pihak lain."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf d–e UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (2) dan (5) PMK 186/PMK.03/2019 (tidak diubah PMK 234/PMK.03/2022)", berlakuSejak: "2020-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "B8-077",
      sejak: "9.5.1"
    },
    {
      id: "B8-230",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Serat Rimba Lestari, pemegang perizinan berusaha pemanfaatan hutan tanaman industri, terdaftar di KPP dan berkantor pusat di Kota Pekanbaru, Provinsi Riau. Seluruh areal hutan tanamannya berada di Kabupaten Pelalawan, Provinsi Riau. PBB-P5L sektor perhutanan 2026 sebesar Rp418.500.000 telah dilunasi ke kas negara. Menurut persentase pembagian DBH PBB dalam UU 1/2022, daerah yang menerima porsi terbesar dari penerimaan tersebut adalah ...",
      kataKualifikasi: ["porsi terbesar"],
      opsi: { A: "Kota Pekanbaru sebagai tempat kedudukan dan KPP terdaftar wajib pajak", B: "Provinsi Riau sebagai provinsi yang bersangkutan", C: "Kabupaten Pelalawan sebagai kabupaten penghasil (letak objek)", D: "Seluruh kabupaten/kota lain di Provinsi Riau secara bersama-sama" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "PBB terutang di wilayah kabupaten/kota yang meliputi letak objek (Pasal 8 ayat (3) UU PBB), sehingga kabupaten penghasil PBB-P5L adalah Kabupaten Pelalawan tempat areal hutan berada. Pasal 113 ayat (2) UU 1/2022 membagi DBH PBB: 16,2% provinsi, 73,8% kabupaten/kota penghasil, dan 10% kabupaten/kota lainnya dalam provinsi. Porsi terbesar (73,8%) jatuh ke Kabupaten Pelalawan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Tempat terdaftar wajib pajak menentukan daerah penghasil untuk DBH PPh (Penjelasan Pasal 112 ayat (2) UU 1/2022), bukan untuk DBH PBB; Kota Pekanbaru hanya ikut dalam porsi 10% kabupaten/kota lainnya",
          B: "Provinsi yang bersangkutan hanya menerima 16,2%, lebih kecil daripada porsi kabupaten penghasil 73,8%",
          D: "Kabupaten/kota lainnya dalam provinsi bersama-sama hanya menerima 10%, jauh di bawah 73,8%"
        },
        jebakan: "Kantor pusat dan KPP terdaftar di kota yang sama provinsinya dengan kebun. Untuk PBB yang menentukan adalah letak objek, berbeda dengan DBH PPh yang memakai tempat wajib pajak terdaftar."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "UU 1/2022 (DBH PBB, Pasal 113 ayat (2))", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-049",
      sejak: "9.5.4"
    },
    {
      id: "B8-231",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 18 ayat (1) UU PBB: Hasil penerimaan pajak merupakan penerimaan negara yang dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan pembagian sekurang-kurangnya 90% (sembilan puluh persen) untuk Pemerintah Daerah Tingkat II dan Pemerintah Daerah Tingkat I sebagai pendapatan daerah yang bersangkutan.",
      stem: "Dalam rapat dengar pendapat di DPRD sebuah kabupaten penghasil kelapa sawit, seorang anggota dewan berkata: \"Pasal 18 UU PBB hanya menjamin daerah sekurang-kurangnya 90%. Jadi dari setiap Rp1 miliar PBB-P5L kebun di wilayah kita, paling sedikit Rp100 juta menjadi bagian pemerintah pusat.\" Berdasarkan kutipan tersebut dan ketentuan dana bagi hasil yang berlaku saat ini, tanggapan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tepat; imbangan Pasal 18 ayat (1) UU PBB tetap satu-satunya dasar, sehingga 10% menjadi bagian pusat", B: "Tidak tepat; Pasal 113 ayat (1) UU 1/2022 menetapkan DBH PBB sebesar 100% untuk Daerah", C: "Tidak tepat; bagian 10% itu menjadi hak provinsi, sedangkan 90% menjadi hak kabupaten penghasil", D: "Tidak tepat; PBB-P5L kini sudah pajak daerah sehingga seluruhnya langsung menjadi PAD kabupaten" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 18 ayat (1) UU PBB hanya menetapkan batas bawah: sekurang-kurangnya 90% untuk pemerintah daerah. UU 1/2022 kemudian menetapkan DBH PBB sebesar 100% untuk Daerah (Pasal 113 ayat (1)), dibagi 16,2% provinsi, 73,8% kabupaten/kota penghasil, dan 10% kabupaten/kota lainnya dalam provinsi (Pasal 113 ayat (2); diulang Pasal 16 PMK 35/2026). Jadi tidak ada bagian 10% untuk pusat dari PBB-P5L.",
        jejakHitung: [],
        mengapaSalah: {
          A: "\"Sekurang-kurangnya 90%\" adalah batas bawah; UU 1/2022 yang berlaku sekarang menetapkan 100% untuk Daerah",
          C: "Provinsi menerima 16,2%, kabupaten/kota penghasil 73,8%, dan 10% untuk kabupaten/kota lainnya dalam provinsi, bukan 10% provinsi dan 90% kabupaten penghasil",
          D: "PBB-P5L tetap pajak pusat yang disetor ke kas negara lalu dibagihasilkan sebagai DBH pajak; yang menjadi pajak daerah (PAD) adalah PBB-P2"
        },
        jebakan: "\"Sekurang-kurangnya 90%\" bukan berarti pusat pasti mendapat 10%; ketentuan bagi hasil yang lebih baru menaikkan bagian daerah menjadi 100%."
      },
      dasarHukum: [{ pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "UU 1/2022 (DBH pajak, Pasal 113)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 16 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-050",
      sejak: "9.5.4"
    },
    {
      id: "B8-232",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Pemerintah Kabupaten Indragiri Hulu mencatat tiga jenis penerimaan yang berasal dari wilayahnya pada 2026: PBB-P5L atas kebun kelapa sawit, PPh Pasal 21 atas gaji karyawan orang pribadi dalam negeri yang dipotong perusahaan kebun yang terdaftar di KPP setempat, serta BPHTB atas pembelian tanah oleh pengembang perumahan. Pengelompokan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB-P5L: DBH pajak dari pusat; PPh Pasal 21 dan BPHTB: pajak daerah (PAD)", B: "Ketiganya adalah DBH pajak yang ditransfer dari pemerintah pusat", C: "PBB-P5L: PAD karena objeknya di kabupaten; PPh Pasal 21 dan BPHTB: DBH pajak", D: "PBB-P5L dan PPh Pasal 21: DBH pajak dari pusat; BPHTB: pajak daerah (PAD)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "DBH pajak terdiri atas PPh, PBB, dan cukai hasil tembakau (Pasal 111 ayat (2) UU 1/2022); DBH PPh meliputi PPh Pasal 21 serta PPh Pasal 25/29 orang pribadi dalam negeri (Pasal 112 ayat (1)). Jadi PBB-P5L dan PPh Pasal 21 adalah DBH pajak. BPHTB adalah pajak yang dipungut kabupaten/kota (Pasal 4 ayat (2)), sehingga menjadi PAD.",
        jejakHitung: [],
        mengapaSalah: {
          A: "PPh Pasal 21 adalah pajak pusat yang dibagihasilkan sebagai DBH pajak (Pasal 112 ayat (1) UU 1/2022), bukan pajak daerah",
          B: "BPHTB dipungut sendiri oleh kabupaten/kota sebagai pajak daerah, bukan ditransfer dari pusat",
          C: "Letak objek di kabupaten tidak mengubah PBB-P5L menjadi pajak daerah, dan BPHTB bukan DBH"
        },
        jebakan: "Tiga penerimaan berasal dari wilayah yang sama, tetapi jalurnya berbeda: pajak pusat yang dibagihasilkan (PBB-P5L, PPh Pasal 21) dan pajak daerah (BPHTB)."
      },
      dasarHukum: [{ pasal: "UU 1/2022 (pajak daerah BPHTB; DBH pajak)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-051",
      sejak: "9.5.4"
    },
    {
      id: "B8-233",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Dari kegiatan pengusahaan panas bumi PT Uap Lembah Sejahtera di Kabupaten Garut pada 2026, negara menerima: PBB-P5L sektor pertambangan untuk pengusahaan panas bumi, iuran produksi panas bumi, dan PPh Pasal 25/29 perusahaan itu sebagai wajib pajak badan dalam negeri. Pengelompokan dana bagi hasil yang tepat menurut UU 1/2022 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PBB-P5L: DBH pajak; iuran produksi: DBH sumber daya alam panas bumi; PPh Pasal 25/29 badan: tidak dibagihasilkan", B: "PBB-P5L dan iuran produksi: DBH sumber daya alam panas bumi; PPh Pasal 25/29 badan: DBH pajak", C: "PBB-P5L dan PPh Pasal 25/29 badan: DBH pajak; iuran produksi: DBH sumber daya alam panas bumi", D: "PBB-P5L: DBH pajak; iuran produksi dan PPh Pasal 25/29 badan: tidak dibagihasilkan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB termasuk DBH pajak (Pasal 111 ayat (2) UU 1/2022) walaupun objeknya pengusahaan panas bumi. Iuran produksi panas bumi adalah sumber DBH sumber daya alam panas bumi (Pasal 111 ayat (3) huruf d dan Pasal 118 ayat (1)). DBH PPh hanya PPh Pasal 21 serta PPh Pasal 25 dan Pasal 29 wajib pajak orang pribadi dalam negeri (Pasal 112 ayat (1)), sehingga PPh Pasal 25/29 badan tidak dibagihasilkan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Jenis DBH ditentukan sifat penerimaannya: PBB tetap pajak walaupun objeknya panas bumi, dan PPh badan bukan sumber DBH PPh",
          C: "Pasal 112 ayat (1) membatasi PPh Pasal 25/29 yang dibagihasilkan pada wajib pajak orang pribadi dalam negeri; PPh badan tidak termasuk",
          D: "Iuran produksi panas bumi termasuk sumber DBH sumber daya alam panas bumi (Pasal 118 ayat (1))"
        },
        jebakan: "Dua jebakan sekaligus: PBB atas panas bumi tetap DBH pajak, dan PPh Pasal 25/29 hanya dibagihasilkan bila wajib pajaknya orang pribadi dalam negeri."
      },
      dasarHukum: [{ pasal: "UU 1/2022 (DBH pajak dan DBH sumber daya alam)", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-053",
      sejak: "9.5.4"
    },
    {
      id: "B8-234",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 113 UU 1/2022: (1) DBH Pajak Bumi dan Bangunan sebagaimana dimaksud dalam Pasal 111 ayat (2) huruf b ditetapkan sebesar 100% (seratus persen) untuk Daerah. (2) DBH Pajak Bumi dan Bangunan untuk Daerah sebagaimana dimaksud pada ayat (1) dibagikan kepada: a. provinsi yang bersangkutan sebesar 16,2% (enam belas koma dua persen); b. kabupaten/kota penghasil sebesar 73,8% (tujuh puluh tiga koma delapan persen); dan c. kabupaten/kota lainnya dalam provinsi yang bersangkutan sebesar 10% (sepuluh persen).",
      stem: "Pada 2026 PT Borneo Agro Rimba melunasi: PBB-P5L kebun kelapa sawit di Kabupaten Kotawaringin Barat Rp312.600.000; PBB-P5L hutan tanaman di Kabupaten Katingan Rp205.400.000; PBB-P2 atas kantor perwakilan di Kota Palangka Raya Rp14.200.000; BPHTB atas pembelian tanah untuk gudang Rp48.000.000; dan PPh Pasal 21 karyawan Rp860.000.000. Ketiga daerah itu berada di Provinsi Kalimantan Tengah; abaikan waktu penyaluran dan alokasi berdasarkan kinerja. Berdasarkan kutipan tersebut, jumlah DBH PBB yang menjadi porsi Provinsi Kalimantan Tengah dari pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp51.800.000", B: "Rp86.216.400", C: "Rp83.916.000", D: "Rp135.716.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "DBH PBB hanya bersumber dari PBB yang dikelola pusat (PBB-P5L). PBB-P2 dan BPHTB adalah pajak kabupaten/kota (Pasal 4 ayat (2) UU 1/2022) yang menjadi PAD, sedangkan PPh Pasal 21 masuk DBH PPh, bukan DBH PBB. Porsi provinsi yang bersangkutan menurut Pasal 113 ayat (2) huruf a UU 1/2022 (diulang Pasal 16 PMK 35/2026) adalah 16,2% × Rp518.000.000 = Rp83.916.000.",
        jejakHitung: [
          ["PBB-P5L 312.600.000 + 205.400.000", "Rp518.000.000"],
          ["DBH PBB untuk daerah 100%", "Rp518.000.000"],
          ["Porsi provinsi 16,2% × 518.000.000", "Rp83.916.000"]
        ],
        mengapaSalah: {
          A: "Memakai 10% (huruf c, kabupaten/kota lainnya dalam provinsi) sebagai porsi provinsi: 10% × Rp518.000.000; porsi provinsi adalah 16,2%",
          B: "PBB-P2 Kota Palangka Raya ikut dihitung (16,2% × Rp532.200.000), padahal PBB-P2 adalah pajak daerah yang langsung menjadi PAD",
          D: "Menjumlahkan porsi provinsi dan porsi kabupaten/kota lainnya (16,2% + 10% = 26,2%), padahal yang ditanya hanya porsi provinsi"
        },
        jebakan: "Data PBB-P2, BPHTB, dan PPh Pasal 21 sengaja disertakan; hanya PBB-P5L yang menjadi dasar DBH PBB. Bedakan porsi provinsi (16,2%) dari porsi kabupaten/kota lainnya dalam provinsi (10%)."
      },
      dasarHukum: [{ pasal: "Pasal 113 ayat (2) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 1 angka 14, Pasal 16, dan Pasal 17 PMK 35/2026 (pengganti PMK 67/2024)", berlakuSejak: "2026-05-25" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "B8-101",
      sejak: "9.5.4"
    },
    {
      id: "B8-235",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Nikel Bumi Anoa, pemegang IUP operasi produksi nikel di Kabupaten Konawe Utara, pada 2026 membayar: PBB-P5L sektor pertambangan mineral; iuran tetap dan iuran produksi (royalti) nikel; PBB-P2 atas rumah dinas direksi di Kota Kendari; serta bea meterai atas dokumen kontrak penjualan bijih nikel. Pengelompokan yang paling tepat menurut UU 1/2022 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L, iuran tetap, dan iuran produksi: DBH pajak; PBB-P2: PAD Kota Kendari; bea meterai: tidak dibagihasilkan", B: "PBB-P5L: DBH pajak; iuran tetap dan iuran produksi: DBH sumber daya alam minerba; PBB-P2: PAD Kota Kendari; bea meterai: tidak dibagihasilkan", C: "PBB-P5L, iuran tetap, dan iuran produksi: DBH sumber daya alam minerba; PBB-P2: PAD Kota Kendari; bea meterai: tidak dibagihasilkan", D: "PBB-P5L: DBH pajak; iuran tetap dan iuran produksi: DBH sumber daya alam minerba; PBB-P2: PAD Kota Kendari; bea meterai: DBH pajak" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PBB-P5L tetap pajak sehingga dibagihasilkan sebagai DBH pajak (Pasal 111 ayat (2) UU 1/2022). Iuran tetap dan iuran produksi adalah sumber DBH sumber daya alam mineral dan batu bara (Pasal 116 ayat (1)). PBB-P2 adalah pajak kota (Pasal 4 ayat (2)) yang menjadi PAD. Bea meterai tidak termasuk sumber DBH pajak yang hanya terdiri atas PPh, PBB, dan cukai hasil tembakau.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Iuran tetap dan iuran produksi bukan pajak, melainkan sumber DBH sumber daya alam mineral dan batu bara",
          C: "PBB-P5L sektor pertambangan tetap pajak dan dibagihasilkan sebagai DBH pajak, bukan DBH sumber daya alam",
          D: "Pasal 111 ayat (2) hanya memuat PPh, PBB, dan cukai hasil tembakau; bea meterai tidak dibagihasilkan"
        },
        jebakan: "Sektor usaha (tambang) tidak menentukan jenis DBH; yang menentukan adalah sifat penerimaannya: pajak pusat, penerimaan sumber daya alam, atau pajak daerah."
      },
      dasarHukum: [{ pasal: "UU 1/2022 (DBH pajak dan DBH sumber daya alam mineral dan batu bara)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 100,
      verifikasi: "✅",
      kembaranDari: "B8-102",
      sejak: "9.5.4"
    },
    {
      id: "B8-236",
      topik: "B8.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Dari kegiatan usaha perkebunan teh PT Teh Lereng Kerinci di Kabupaten Kerinci pada 2026, negara menerima empat jenis penerimaan berikut. Penerimaan yang tidak dibagihasilkan kepada daerah sebagai dana bagi hasil pajak adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "PPh Pasal 25/29 PT Teh Lereng Kerinci sebagai wajib pajak badan", B: "PBB-P5L sektor perkebunan atas kebun teh di Kabupaten Kerinci", C: "PPh Pasal 21 atas upah pemetik teh orang pribadi dalam negeri", D: "PPh Pasal 25/29 petani teh orang pribadi dalam negeri pemasok pucuk" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "DBH pajak bersumber dari PPh, PBB, dan cukai hasil tembakau (Pasal 111 ayat (2) UU 1/2022). DBH PPh hanya meliputi PPh Pasal 21 serta PPh Pasal 25 dan Pasal 29 wajib pajak orang pribadi dalam negeri (Pasal 112 ayat (1)). PPh Pasal 25/29 wajib pajak badan tidak dibagihasilkan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "PBB-P5L dibagihasilkan kepada daerah sebagai DBH PBB (Pasal 111 ayat (2) huruf b dan Pasal 113 UU 1/2022)",
          C: "PPh Pasal 21 termasuk sumber DBH PPh (Pasal 112 ayat (1))",
          D: "PPh Pasal 25/29 wajib pajak orang pribadi dalam negeri termasuk sumber DBH PPh (Pasal 112 ayat (1))"
        },
        jebakan: "Kata \"tidak\" membalik pertanyaan. PPh Pasal 25/29 muncul dua kali; yang membedakan adalah subjeknya: orang pribadi dalam negeri dibagihasilkan, badan tidak."
      },
      dasarHukum: [{ pasal: "UU 1/2022 (DBH pajak)", berlakuSejak: "2022-01-05" }, { pasal: "Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "B8-103",
      sejak: "9.5.4"
    }
  ],
  kartu: [
    { id: "KT-B8-01", topik: "B8.1", tipe: "angka", depan: "Batas penyampaian SPOP PBB-P5L?", belakang: "30 hari setelah SPOP diterima subjek pajak", dasar: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-02", topik: "B8.1", tipe: "pasal", depan: "Saat yang menentukan PBB terutang?", belakang: "Keadaan objek pada 1 Januari tahun pajak", dasar: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-03", topik: "B8.1", tipe: "definisi", depan: "Subjek PBB menurut Pasal 4 ayat (1)?", belakang: "Yang nyata punya hak/manfaat atas bumi, atau memiliki/menguasai/memanfaatkan bangunan", dasar: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-04", topik: "B8.1", tipe: "angka", depan: "Keterangan 'bukan wajib pajak' yang tidak diputus DJP dianggap disetujui setelah?", belakang: "Satu bulan sejak keterangan diterima DJP", dasar: "Pasal 4 ayat (7) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-05", topik: "B8.1", tipe: "pasal", depan: "Tempat PBB terutang?", belakang: "Wilayah kabupaten/kota letak objek pajak", dasar: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-06", topik: "B8.1", tipe: "definisi", depan: "Enam sektor PBB-P5L?", belakang: "Perkebunan, perhutanan, migas, panas bumi, minerba, sektor lainnya", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: "PMK 186/PMK.03/2019 sebelum penyesuaian dengan UU HKPD", dekTambahan: [] },
    { id: "KT-B8-07", topik: "B8.1", tipe: "definisi", depan: "Batas objek PBB-P2 daerah terhadap PBB-P5L?", belakang: "P2: semua bumi/bangunan kecuali kawasan usaha perkebunan, perhutanan, pertambangan", dasar: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: "UU 28/2009 (PDRD)", dekTambahan: [] },
    { id: "KT-B8-08", topik: "B8.1", tipe: "definisi", depan: "Bangunan menurut UU PBB?", belakang: "Konstruksi teknik yang ditanam/dilekatkan tetap pada tanah dan/atau perairan", dasar: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-09", topik: "B8.2", tipe: "pasal", depan: "Lima kelompok objek yang dikecualikan dari PBB?", belakang: "Kepentingan umum nirlaba; kuburan/purbakala; hutan lindung dsb.; perwakilan diplomatik; organisasi internasional", dasar: "Pasal 3 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-10", topik: "B8.2", tipe: "definisi", depan: "Syarat pengecualian ibadah, sosial, kesehatan, pendidikan, kebudayaan?", belakang: "Semata-mata untuk kepentingan umum dan tidak mencari keuntungan", dasar: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-11", topik: "B8.2", tipe: "definisi", depan: "Kapan tanah negara dikecualikan dari PBB?", belakang: "Hanya selama belum dibebani suatu hak (HGU, izin, IUP)", dasar: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-12", topik: "B8.3", tipe: "angka", depan: "Tarif PBB-P5L?", belakang: "0,5% (tarif tunggal)", dasar: "Pasal 5 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-13", topik: "B8.3", tipe: "angka", depan: "NJKP objek perkebunan, perhutanan, pertambangan?", belakang: "40% dari NJOP", dasar: "PP 25/2002", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-14", topik: "B8.3", tipe: "angka", depan: "NJKP objek lainnya (sektor lainnya)?", belakang: "40% bila NJOP ≥ Rp1 miliar; 20% bila di bawahnya", dasar: "PP 25/2002", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-15", topik: "B8.3", tipe: "angka", depan: "NJOPTKP PBB-P5L?", belakang: "Rp12.000.000 per wajib pajak", dasar: "PMK 23/PMK.03/2014", menggantikan: "Rp8.000.000 (UU 12/1994), lalu disesuaikan KMK 201/KMK.04/2000", dekTambahan: [] },
    { id: "KT-B8-16", topik: "B8.3", tipe: "prosedur", depan: "NJOPTKP bila wajib pajak punya beberapa objek?", belakang: "Diberikan sekali, pada objek dengan NJOP terbesar", dasar: "Penjelasan Pasal 3 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-17", topik: "B8.3", tipe: "angka", depan: "Rumus ringkas PBB sektor perkebunan/perhutanan/pertambangan?", belakang: "0,2% × (NJOP − NJOPTKP)", dasar: "Pasal 5–7 UU PBB; PP 25/2002", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-18", topik: "B8.3", tipe: "pasal", depan: "Seberapa sering NJOP ditetapkan?", belakang: "Setiap 3 tahun; daerah tertentu setiap tahun", dasar: "Pasal 6 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-19", topik: "B8.3", tipe: "pasal", depan: "Rentang persentase NJKP menurut UU PBB?", belakang: "Serendah-rendahnya 20%, setinggi-tingginya 100% dari NJOP", dasar: "Pasal 6 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-20", topik: "B8.4", tipe: "prosedur", depan: "NJOP areal produktif perkebunan?", belakang: "Luas × (nilai tanah per m² + SIT per m²)", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-21", topik: "B8.4", tipe: "definisi", depan: "Bumi menurut UU PBB?", belakang: "Permukaan bumi dan tubuh bumi di bawahnya, termasuk perairan", dasar: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-22", topik: "B8.5", tipe: "angka", depan: "Jatuh tempo SPPT PBB?", belakang: "6 bulan sejak SPPT diterima wajib pajak", dasar: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-23", topik: "B8.5", tipe: "angka", depan: "Jatuh tempo SKP PBB dan STP PBB?", belakang: "1 bulan sejak diterima", dasar: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-24", topik: "B8.5", tipe: "angka", depan: "Denda administrasi dalam SKP PBB?", belakang: "25% dari pokok (huruf a) atau dari selisih (huruf b)", dasar: "Pasal 10 ayat (3)–(4) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-25", topik: "B8.5", tipe: "angka", depan: "Denda keterlambatan bayar PBB?", belakang: "2% sebulan, paling lama 24 bulan; ditagih dengan STP", dasar: "Pasal 11 ayat (3)–(4) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-26", topik: "B8.5", tipe: "prosedur", depan: "Dua dasar penerbitan SKP PBB?", belakang: "SPOP tak disampaikan setelah teguran; pemeriksaan menunjukkan pajak lebih besar", dasar: "Pasal 10 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-27", topik: "B8.5", tipe: "pasal", depan: "Apakah perubahan sanksi bunga UU KUP (UU Cipta Kerja, dipertahankan UU HPP) mengubah denda 2% PBB-P5L?", belakang: "Tidak; tarif bunga KMK hanya untuk sanksi bunga UU KUP", dasar: "Pasal 11 ayat (3) UU PBB; Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-28", topik: "B8.6", tipe: "angka", depan: "Batas pengajuan keberatan PBB?", belakang: "3 bulan sejak SPPT/SKP diterima, kecuali keadaan di luar kekuasaan", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-29", topik: "B8.6", tipe: "angka", depan: "Batas keputusan keberatan PBB dan akibat bila lewat?", belakang: "12 bulan sejak surat keberatan diterima; lewat berarti dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-30", topik: "B8.6", tipe: "angka", depan: "Batas banding atas keputusan keberatan PBB?", belakang: "3 bulan sejak keputusan diterima, ke Pengadilan Pajak", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-31", topik: "B8.6", tipe: "pasal", depan: "Dua alasan pengurangan PBB (Pasal 19)?", belakang: "Kondisi tertentu objek terkait subjek; bencana alam atau sebab luar biasa", dasar: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-32", topik: "B8.6", tipe: "definisi", depan: "Dokumen PBB yang dapat diajukan keberatan?", belakang: "SPPT dan SKP (STP tidak)", dasar: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-33", topik: "B8.7", tipe: "prosedur", depan: "Cara membayar PBB-P5L sejak 2025?", belakang: "Kode billing Coretax (NPWP 16 digit, NOP); bukti pelunasan NTPN", dasar: "Pasal 11 ayat (5) UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: "e-Billing DJP Online dengan NPWP 15 digit", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-B8-34", topik: "B8.7", tipe: "pasal", depan: "Perlakuan PBB dan dendanya dalam PPh Badan?", belakang: "PBB dapat dibiayakan; denda PBB tidak dapat dikurangkan", dasar: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-35", topik: "B8.7", tipe: "definisi", depan: "Apakah pelunasan PBB membuktikan hak atas tanah?", belakang: "Tidak; tanda pelunasan PBB bukan bukti pemilikan hak", dasar: "Penjelasan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-36", topik: "B8.7", tipe: "prosedur", depan: "Urutan penagihan setelah STP tidak dilunasi?", belakang: "Surat Teguran → Surat Paksa → penyitaan (2 × 24 jam) → lelang", dasar: "UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-37", topik: "B8.8", tipe: "pasal", depan: "Bagian daerah dari penerimaan PBB menurut Pasal 18?", belakang: "Sekurang-kurangnya 90% untuk pemerintah daerah", dasar: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-38", topik: "B8.8", tipe: "definisi", depan: "Sumber DBH pajak menurut UU HKPD?", belakang: "PBB, PPh 21 dan 25/29 OP dalam negeri, cukai hasil tembakau", dasar: "UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: "UU 33/2004 (perimbangan keuangan)", dekTambahan: [] },
    { id: "KT-B8-39", topik: "B8.8", tipe: "definisi", depan: "Apakah PBB-P2 dan BPHTB termasuk DBH?", belakang: "Tidak; keduanya pajak daerah dan menjadi PAD", dasar: "UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-40", topik: "B8.1", tipe: "pasal", depan: "Kewajiban subjek PBB atas objek baru atau perluasan areal?", belakang: "Aktif mendaftarkan objek dengan mengisi SPOP", dasar: "Pasal 9 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-41", topik: "B8.1", tipe: "definisi", depan: "Fungsi LSPOP dalam pendaftaran PBB-P5L?", belakang: "Lampiran SPOP untuk merinci data bangunan", dasar: "Pasal 9 UU PBB; PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-42", topik: "B8.1", tipe: "prosedur", depan: "Bila wajib pajak atas suatu objek belum jelas?", belakang: "DJP dapat menetapkan subjek pajak sebagai wajib pajak", dasar: "Pasal 4 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-43", topik: "B8.1", tipe: "definisi", depan: "Subjek atas bumi kawasan hutan yang dipinjam-pakai pemegang izin tambang atau panas bumi?", belakang: "Pemegang izin, karena secara nyata memperoleh manfaat atas bumi", dasar: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-44", topik: "B8.1", tipe: "prosedur", depan: "Kebun ber-HGU dijual Juni 2026: SPPT 2026 atas nama siapa?", belakang: "Penjual (subjek per 1 Januari); pembeli mulai SPPT 2027 setelah SPOP", dasar: "Pasal 4 ayat (1) dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-45", topik: "B8.1", tipe: "definisi", depan: "Kabel dan pipa bawah laut milik badan usaha selain KKKS migas: sektor dan jenis objek?", belakang: "PBB-P5L sektor lainnya; kabel/pipa = bangunan, koridor perairan = bumi", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022; Pasal 1 UU PBB", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-46", topik: "B8.2", tipe: "definisi", depan: "Situs cagar budaya di dalam areal produktif kebun?", belakang: "Peninggalan purbakala dikecualikan; luasnya dikeluarkan dari areal kena pajak", dasar: "Pasal 3 ayat (1) huruf b UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-47", topik: "B8.2", tipe: "pasal", depan: "Objek yang digunakan organisasi internasional?", belakang: "Dikecualikan bila organisasinya ditentukan Menteri Keuangan", dasar: "Pasal 3 ayat (1) huruf e UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-48", topik: "B8.2", tipe: "definisi", depan: "Kapal, truk, alat berat, dan rig sewaan dalam NJOP PBB?", belakang: "Benda bergerak, bukan bangunan; tidak masuk NJOP", dasar: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-49", topik: "B8.3", tipe: "angka", depan: "Batas Rp1 miliar NJKP sektor lainnya diuji terhadap?", belakang: "NJOP objek sebelum dikurangi NJOPTKP", dasar: "PP 25/2002", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-50", topik: "B8.3", tipe: "angka", depan: "NJOPTKP PBB-P2 menurut UU HKPD?", belakang: "Paling sedikit Rp10.000.000 per wajib pajak; ditetapkan Perda", dasar: "Pasal 40 UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-51", topik: "B8.3", tipe: "angka", depan: "Tarif PBB-P2 paling tinggi menurut UU HKPD?", belakang: "0,5%; lahan produksi pangan dan ternak lebih rendah", dasar: "Pasal 41 UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: "Paling tinggi 0,3% (UU 28/2009)", dekTambahan: [] },
    { id: "KT-B8-52", topik: "B8.4", tipe: "prosedur", depan: "NJOP bangunan kawasan usaha (pabrik, conveyor, pipa)?", belakang: "Nilai perolehan baru dikurangi penyusutan (pendekatan biaya)", dasar: "Pasal 1 angka 3 UU PBB; PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-53", topik: "B8.4", tipe: "prosedur", depan: "NJOP tubuh bumi pertambangan tahap produksi?", belakang: "Angka kapitalisasi × hasil bersih (data penilaian)", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-54", topik: "B8.4", tipe: "definisi", depan: "Objek migas lepas pantai: perairan, anjungan, pipa, kapal?", belakang: "Perairan = bumi; anjungan dan pipa = bangunan; kapal bukan objek", dasar: "Pasal 1 angka 1–2 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-55", topik: "B8.4", tipe: "prosedur", depan: "Areal emplasemen dan areal belum produktif kebun dinilai dengan?", belakang: "Luas × nilai tanah per m², tanpa SIT (Biaya Investasi Tanaman). Areal belum produktif adalah areal yang belum ditanami (belum diolah, sudah diolah tetapi belum ditanami, atau pembibitan); tanaman yang belum menghasilkan sudah areal produktif", dasar: "Pasal 14 ayat (1) huruf b dan e serta ayat (2) huruf b dan e PMK 186/PMK.03/2019", berlakuSejak: "2020-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-56", topik: "B8.4", tipe: "prosedur", depan: "Lahan kebun yang sudah diolah baru ditanami sawit pada Agustus 2026: SIT dihitung mulai?", belakang: "Tahun Pajak 2027 (keadaan 1 Januari 2027); areal yang telah ditanami adalah areal produktif walaupun belum panen", dasar: "Pasal 8 ayat (2) UU PBB; PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-57", topik: "B8.5", tipe: "angka", depan: "Denda keterlambatan bayar PBB paling banyak?", belakang: "48% (2% × 24 bulan) dari pajak yang terlambat", dasar: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-58", topik: "B8.6", tipe: "prosedur", depan: "Apakah keberatan PBB menunda kewajiban membayar?", belakang: "Tidak; SPPT/SKP tetap dilunasi pada jatuh temponya", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-59", topik: "B8.6", tipe: "definisi", depan: "Kapan memilih keberatan, kapan pengurangan PBB?", belakang: "Keberatan: penetapan keliru; pengurangan: penetapan benar, butuh keringanan", dasar: "Pasal 15 dan 19 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-60", topik: "B8.6", tipe: "pasal", depan: "Keberatan SKPKB (KUP) vs SKP PBB: titik awal 3 bulan?", belakang: "SKPKB sejak tanggal dikirim; SKP PBB sejak tanggal diterima", dasar: "Pasal 25 ayat (3) UU KUP; Pasal 15 UU PBB", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-61", topik: "B8.7", tipe: "angka", depan: "Batas gugatan atas pelaksanaan Surat Paksa?", belakang: "14 hari sejak tanggal pelaksanaan penagihan", dasar: "Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-62", topik: "B8.7", tipe: "angka", depan: "Jarak penyitaan → pengumuman lelang → lelang?", belakang: "Masing-masing paling singkat 14 hari", dasar: "Pasal 26 UU 19/1997 s.t.d.d. UU 19/2000", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-63", topik: "B8.8", tipe: "definisi", depan: "PSDH dan Dana Reboisasi dibagihasilkan sebagai?", belakang: "DBH sumber daya alam kehutanan, bukan DBH pajak", dasar: "UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-64", topik: "B8.8", tipe: "pasal", depan: "Kebun membentang di dua kabupaten: tempat terutang dan penerima bagi hasil?", belakang: "Masing-masing kabupaten sesuai letak bagian kebun (porsi kabupaten penghasil)", dasar: "Pasal 8 ayat (3) UU PBB; Pasal 113 UU 1/2022", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-65", topik: "B8.6", tipe: "definisi", depan: "Empat upaya hukum non keberatan PBB-P5L?", belakang: "Pembetulan; pengurangan PBB; pengurangan denda; pembatalan/pengurangan SPPT, SKP, STP tidak benar", dasar: "Pasal 19 dan 20 UU PBB; PMK 129/2023 (pengurangan PBB); PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-66", topik: "B8.6", tipe: "definisi", depan: "Kesalahan yang diperbaiki lewat pembetulan SPPT, SKP, atau STP PBB?", belakang: "Kesalahan tulis, kesalahan hitung, kekeliruan penerapan ketentuan", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-67", topik: "B8.6", tipe: "prosedur", depan: "Syarat pengurangan denda administratif PBB?", belakang: "Karena kekhilafan atau bukan kesalahan WP; hanya atas denda yang belum dibayar; pokok PBB dasar denda dalam STP PBB sudah lunas (sejak PMK 71/2026 pembayaran STP diperhitungkan ke pokok lebih dulu)", dasar: "Pasal 20 UU PBB; PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-68", topik: "B8.6", tipe: "prosedur", depan: "Kapan pengurangan/pembatalan SKP PBB yang tidak benar dapat diajukan?", belakang: "Bila tidak diajukan keberatan atau keberatannya tidak dipertimbangkan", dasar: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-69", topik: "B8.8", tipe: "angka", depan: "Rincian DBH PBB menurut Pasal 113 UU 1/2022?", belakang: "16,2% provinsi; 73,8% kabupaten/kota penghasil; 10% kabupaten/kota lainnya", dasar: "Pasal 113 UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: "imbangan sekurang-kurangnya 90% untuk daerah (Pasal 18 UU PBB)", dekTambahan: [] },
    { id: "KT-B8-70", topik: "B8.2", tipe: "definisi", depan: "Klinik gratis khusus karyawan di areal usaha: dikecualikan dari PBB?", belakang: "Tidak; tidak melayani kepentingan umum, tetap objek", dasar: "Pasal 3 ayat (1) huruf a UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-71", topik: "B8.4", tipe: "pasal", depan: "Blok hutan tanaman ditebang Maret 2026: status areal Tahun Pajak 2026?", belakang: "Tetap areal produktif (keadaan 1 Januari 2026)", dasar: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-72", topik: "B8.4", tipe: "definisi", depan: "Bagian offshore wilayah kerja migas: objek dan NJKP?", belakang: "Tetap objek sektor migas (perairan = bumi); NJKP 40%", dasar: "Pasal 1 angka 1 UU PBB; PP 25/2002", berlakuSejak: "2002-01-01", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-B8-01", judul: "Dari areal kebun ke SPPT dan PPh Badan", topik: "B8.4", estimasiMenit: 18,
      narasi: "PT Tandan Emas Agrindo memegang HGU kebun kelapa sawit di Kabupaten Ketapang dan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 kebun terdiri atas areal produktif 1.850 ha (nilai tanah Rp4.200/m², SIT Rp5.600/m²), areal belum produktif 420 ha (nilai tanah Rp4.200/m²), areal emplasemen 38 ha (Rp11.000/m²) yang di dalamnya terdapat pemakaman umum 0,8 ha dan masjid umum nirlaba 0,2 ha, serta areal tidak produktif 92 ha (Rp1.000/m²). NJOP bangunan (pabrik kelapa sawit, gudang, perumahan karyawan, jalan kebun; tidak termasuk masjid) Rp41.300.000.000. SPPT PBB-P5L 2026 diterima pada 4 Maret 2026 dan dibayar penuh pada 21 September 2026. Tahun buku perusahaan sama dengan tahun kalender; bagian dari bulan dihitung satu bulan penuh.",
      data: [ ["Areal produktif", "1.850 ha; Rp4.200 + SIT Rp5.600 per m²"], ["Areal belum produktif", "420 ha; Rp4.200/m²"], ["Emplasemen", "38 ha (pemakaman 0,8 ha, masjid umum 0,2 ha); Rp11.000/m²"], ["Areal tidak produktif", "92 ha; Rp1.000/m²"], ["NJOP bangunan", "Rp41.300.000.000"], ["SPPT diterima / dibayar", "4 Maret 2026 / 21 September 2026"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa NJOP areal produktif (Rp)?", tipe: "angka", jawaban: 181300000000, toleransi: 0,
          petunjuk: ["1 ha = 10.000 m²", "Areal produktif dinilai nilai tanah ditambah SIT per m²", "18.500.000 m² × Rp9.800 = Rp181.300.000.000"],
          penjelasan: "Areal produktif 1.850 ha = 18.500.000 m² dikali (Rp4.200 + Rp5.600) = Rp181.300.000.000." },
        { no: 2, pertanyaan: "Berapa luas emplasemen yang dikenai PBB (ha)?", tipe: "angka", jawaban: 37, toleransi: 0,
          petunjuk: ["Cek Pasal 3 ayat (1) UU PBB", "Pemakaman (huruf b) dan masjid umum nirlaba (huruf a) dikecualikan", "38 − 0,8 − 0,2 = 37 ha"],
          penjelasan: "Pemakaman dan masjid umum nirlaba dikecualikan, sehingga emplasemen kena pajak 37 ha." },
        { no: 3, pertanyaan: "Berapa NJOP bumi seluruhnya (Rp)?", tipe: "angka", jawaban: 203930000000, toleransi: 0,
          petunjuk: ["Jumlahkan empat jenis areal", "Belum produktif 4.200.000 m² × 4.200; emplasemen 370.000 m² × 11.000; tidak produktif 920.000 m² × 1.000", "181.300.000.000 + 17.640.000.000 + 4.070.000.000 + 920.000.000"],
          penjelasan: "NJOP bumi = Rp181.300.000.000 + Rp17.640.000.000 + Rp4.070.000.000 + Rp920.000.000 = Rp203.930.000.000." },
        { no: 4, pertanyaan: "Berapa PBB-P5L terutang 2026 (Rp)?", tipe: "angka", jawaban: 490436000, toleransi: 0,
          petunjuk: ["Tambahkan NJOP bangunan Rp41.300.000.000", "Kurangi NJOPTKP Rp12.000.000 sekali", "245.218.000.000 × 40% × 0,5%"],
          penjelasan: "NJOP objek Rp245.230.000.000 − Rp12.000.000 = Rp245.218.000.000; × 40% = Rp98.087.200.000; × 0,5% = Rp490.436.000." },
        { no: 5, pertanyaan: "Bagaimana jatuh tempo dan sanksi atas pembayaran 21 September 2026?", tipe: "pilihan",
          opsi: { A: "Jatuh tempo 3 September 2026; denda 25% = Rp122.609.000 ditagih dengan SKP", B: "Jatuh tempo 30 September 2026; tidak ada denda", C: "Jatuh tempo 3 September 2026; terlambat 18 hari dihitung 1 bulan; denda 2% = Rp9.808.720 ditagih dengan STP", D: "Jatuh tempo 3 September 2026; bunga Pasal 9 ayat (2a) UU KUP dengan tarif KMK" }, jawaban: "C",
          petunjuk: ["SPPT jatuh tempo 6 bulan sejak diterima", "6 bulan sejak 4 Maret 2026 berakhir 3 September 2026 (contoh Penjelasan Pasal 11 ayat (1): diterima 1 Maret, jatuh tempo 31 Agustus)", "Denda Pasal 11 ayat (3): 2% × 1 bulan × Rp490.436.000"],
          penjelasan: "Jatuh tempo 3 September 2026; keterlambatan 18 hari dihitung satu bulan sehingga denda 2% × Rp490.436.000 = Rp9.808.720 ditagih dengan STP. Denda 25% hanya untuk SKP, dan tarif bunga KMK hanya untuk UU KUP." },
        { no: 6, pertanyaan: "Bagaimana perlakuan PBB dan denda dalam PPh Badan 2026?", tipe: "pilihan",
          opsi: { A: "PBB dan denda sama-sama dapat dibiayakan", B: "PBB Rp490.436.000 dapat dibiayakan; denda Rp9.808.720 dikoreksi fiskal positif", C: "PBB dan denda sama-sama tidak dapat dibiayakan karena keduanya pajak", D: "Hanya denda yang dapat dibiayakan" }, jawaban: "B",
          petunjuk: ["Pasal 6 ayat (1) huruf a UU PPh: pajak kecuali PPh", "Pasal 9 ayat (1) huruf k UU PPh: sanksi administrasi", "PBB boleh, denda tidak"],
          penjelasan: "PBB adalah pajak selain PPh yang dapat dibiayakan; denda keterlambatan adalah sanksi administrasi yang tidak dapat dikurangkan sehingga dikoreksi fiskal positif." }
      ],
      kesimpulan: "NJOP dihitung per jenis areal (SIT hanya untuk areal produktif, objek Pasal 3 dikeluarkan dari luas), ditambah bangunan, dikurangi NJOPTKP sekali, lalu dikali 40% dan 0,5% sehingga PBB 2026 Rp490.436.000. Pembayaran 18 hari setelah jatuh tempo (3 September 2026) menimbulkan denda 2% (Rp9.808.720) yang tidak dapat dibiayakan, sedangkan PBB-nya dapat dibiayakan.",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-02", judul: "SKP hasil pemeriksaan, keberatan, dan banding PBB tambang", topik: "B8.6", estimasiMenit: 16,
      narasi: "PT Bumi Mineral Kencana memegang IUP operasi produksi batubara di Kabupaten Barito Utara. SPOP 2026 diterima pada 12 Januari 2026 dan disampaikan pada 2 Februari 2026 dengan areal produktif 900 ha; SPPT 2026 diterbitkan dan dilunasi. Pemeriksaan pada Juni 2026 menemukan areal produktif per 1 Januari 2026 sebenarnya 1.150 ha, dengan nilai areal produktif Rp14.000/m² menurut penilaian; data lain tidak berubah. SKP PBB 2026 diterima pada 14 Agustus 2026. Perusahaan mengajukan keberatan atas SKP yang diterima KPP pada 20 Oktober 2026, dan keputusan keberatan diterima pada 5 Juli 2027.",
      data: [ ["SPOP diterima / disampaikan", "12 Januari 2026 / 2 Februari 2026"], ["Areal produktif menurut SPOP / pemeriksaan", "900 ha / 1.150 ha"], ["Nilai areal produktif", "Rp14.000/m²"], ["SKP diterima", "14 Agustus 2026"], ["Surat keberatan diterima KPP", "20 Oktober 2026"], ["Keputusan keberatan diterima", "5 Juli 2027"] ],
      langkah: [
        { no: 1, pertanyaan: "Apakah SPOP tepat waktu, dan atas dasar apa SKP diterbitkan?", tipe: "pilihan",
          opsi: { A: "Terlambat (batas 31 Januari 2026); SKP berdasarkan Pasal 10 ayat (2) huruf a", B: "Tepat waktu; SKP berdasarkan Pasal 10 ayat (2) huruf a", C: "Terlambat; DJP menerbitkan STP", D: "Tepat waktu (batas 11 Februari 2026); SKP berdasarkan Pasal 10 ayat (2) huruf b" }, jawaban: "D",
          petunjuk: ["SPOP disampaikan paling lambat 30 hari setelah diterima", "12 Januari + 30 hari = 11 Februari 2026", "SPOP masuk, tetapi pemeriksaan menunjukkan pajak lebih besar → huruf b"],
          penjelasan: "SPOP disampaikan 2 Februari, sebelum batas 11 Februari 2026. SKP terbit karena hasil pemeriksaan menunjukkan pajak lebih besar daripada SPOP (Pasal 10 ayat (2) huruf b)." },
        { no: 2, pertanyaan: "Berapa selisih NJOP akibat koreksi luas (Rp)?", tipe: "angka", jawaban: 35000000000, toleransi: 0,
          petunjuk: ["Selisih luas 1.150 − 900 = 250 ha", "250 ha = 2.500.000 m²", "2.500.000 × Rp14.000"],
          penjelasan: "Selisih 250 ha = 2.500.000 m² × Rp14.000 = Rp35.000.000.000." },
        { no: 3, pertanyaan: "Berapa selisih PBB terutang (Rp)?", tipe: "angka", jawaban: 70000000, toleransi: 0,
          petunjuk: ["NJOPTKP sudah dipakai pada SPPT", "Selisih NJOP × 40% × 0,5%", "35.000.000.000 × 0,2%"],
          penjelasan: "Rp35.000.000.000 × 40% × 0,5% = Rp70.000.000; NJOPTKP tidak dikurangkan lagi." },
        { no: 4, pertanyaan: "Berapa jumlah yang harus dibayar menurut SKP (Rp)?", tipe: "angka", jawaban: 87500000, toleransi: 0,
          petunjuk: ["Pasal 10 ayat (4) UU PBB", "Denda 25% dari selisih", "70.000.000 + 17.500.000"],
          penjelasan: "SKP = selisih Rp70.000.000 + denda 25% × Rp70.000.000 (Rp17.500.000) = Rp87.500.000." },
        { no: 5, pertanyaan: "Kapan jatuh tempo SKP dan batas keberatan?", tipe: "pilihan",
          opsi: { A: "13 September 2026 dan 13 November 2026", B: "13 Februari 2027 dan 13 November 2026", C: "13 September 2026 dan 13 Februari 2027", D: "13 November 2026 dan 13 September 2026" }, jawaban: "A",
          petunjuk: ["SKP dilunasi 1 bulan sejak diterima (Pasal 11 ayat (2))", "Keberatan 3 bulan sejak SKP diterima (Pasal 15 UU PBB)", "1 bulan sejak 14 Agustus berakhir 13 September; 3 bulan sejak 14 Agustus berakhir 13 November"],
          penjelasan: "Jatuh tempo SKP 13 September 2026; batas keberatan 13 November 2026. Keberatan yang diterima 20 Oktober 2026 tepat waktu dan tidak menunda kewajiban membayar." },
        { no: 6, pertanyaan: "Paling lambat kapan DJP memutus keberatan, dan apa akibatnya bila lewat?", tipe: "pilihan",
          opsi: { A: "19 April 2027; dianggap ditolak", B: "13 Agustus 2027; dianggap diterima", C: "19 Oktober 2027; dianggap ditolak", D: "19 Oktober 2027; dianggap diterima" }, jawaban: "D",
          petunjuk: ["Pasal 16 ayat (1): 12 bulan", "Dihitung sejak surat keberatan diterima", "Pasal 16 UU PBB: lewat waktu → dianggap diterima"],
          penjelasan: "Batas keputusan 12 bulan sejak 20 Oktober 2026, yaitu 19 Oktober 2027; bila lewat tanpa keputusan, keberatan dianggap diterima." },
        { no: 7, pertanyaan: "Keputusan keberatan (menolak) diterima 5 Juli 2027. Upaya dan batas waktunya?", tipe: "pilihan",
          opsi: { A: "Keberatan kedua paling lambat 4 Oktober 2027", B: "Banding ke Pengadilan Pajak paling lambat 4 Oktober 2027", C: "Gugatan paling lambat 4 Agustus 2027", D: "Banding paling lambat 4 Januari 2028" }, jawaban: "B",
          petunjuk: ["Upaya atas keputusan keberatan adalah banding", "Pasal 35 ayat (2) UU 14/2002: 3 bulan", "3 bulan sejak 5 Juli 2027 berakhir 4 Oktober 2027"],
          penjelasan: "Banding diajukan ke Pengadilan Pajak dalam 3 bulan sejak keputusan diterima, yaitu paling lambat 4 Oktober 2027." }
      ],
      kesimpulan: "Koreksi luas 250 ha menambah NJOP Rp35 miliar sehingga selisih PBB Rp70.000.000 dan SKP (dengan denda 25% dari selisih) Rp87.500.000. SKP jatuh tempo 13 September 2026, keberatan paling lambat 13 November 2026, keputusan paling lambat 19 Oktober 2027 (lewat = dianggap diterima), dan banding paling lambat 4 Oktober 2027 (3 bulan sejak keputusan diterima).",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-03", judul: "Dua objek, dua rezim: PBB-P5L, PBB-P2, dan bagi hasil", topik: "B8.8", estimasiMenit: 10,
      narasi: "PT Teh Puncak Lestari memiliki kebun teh dalam HGU di Kabupaten Garut (Provinsi Jawa Barat) dengan NJOP bumi Rp31.900.000.000 dan NJOP bangunan (pabrik teh, gudang, perumahan karyawan) Rp4.500.000.000, serta gedung kantor pusat di Kota Bandung dengan NJOP Rp9.000.000.000. Perusahaan tidak memiliki objek lain. Direksi meminta penjelasan PBB 2026: objek mana yang ditetapkan DJP, berapa pajaknya, ke mana dibayar, dan siapa yang menikmati penerimaannya.",
      data: [ ["Kebun teh (HGU, Kabupaten Garut)", "NJOP bumi Rp31.900.000.000; bangunan Rp4.500.000.000"], ["Kantor pusat (Kota Bandung)", "NJOP Rp9.000.000.000"], ["Objek lain", "tidak ada"] ],
      langkah: [
        { no: 1, pertanyaan: "Objek yang PBB-nya ditetapkan DJP sebagai PBB-P5L adalah?", tipe: "pilihan",
          opsi: { A: "Kebun teh dan kantor pusat", B: "Kantor pusat saja karena berada di kota", C: "Kebun teh beserta bangunan di dalam kawasan HGU", D: "Hanya bumi kebun; bangunan pabrik dan perumahan masuk PBB-P2" }, jawaban: "C",
          petunjuk: ["PBB-P5L = kawasan usaha perkebunan, perhutanan, pertambangan", "Kantor di luar kawasan usaha → PBB-P2", "Bangunan di dalam kawasan HGU ikut P5L"],
          penjelasan: "Kebun teh dan seluruh bangunan di dalam kawasan HGU adalah objek PBB-P5L; kantor pusat di Kota Bandung adalah objek PBB-P2 (Pasal 38 ayat (1) UU 1/2022)." },
        { no: 2, pertanyaan: "Berapa PBB-P5L 2026 (Rp)?", tipe: "angka", jawaban: 72776000, toleransi: 0,
          petunjuk: ["NJOP objek = 31.900.000.000 + 4.500.000.000", "Kurangi NJOPTKP Rp12.000.000", "36.388.000.000 × 0,2%"],
          penjelasan: "(Rp36.400.000.000 − Rp12.000.000) × 40% × 0,5% = Rp72.776.000." },
        { no: 3, pertanyaan: "Bagaimana perlakuan PBB atas kantor pusat?", tipe: "pilihan",
          opsi: { A: "PBB-P2 yang ditetapkan Pemerintah Kota Bandung dengan parameter Perda; penerimaannya PAD kota", B: "PBB-P5L karena milik perusahaan perkebunan", C: "Tidak terutang karena NJOPTKP sudah dipakai kebun", D: "PBB-P2, tetapi dibayar ke kas negara lalu dibagihasilkan" }, jawaban: "A",
          petunjuk: ["UU 1/2022: PBB-P2 adalah pajak daerah", "NJOPTKP P5L dan P2 adalah rezim terpisah", "Penerimaan pajak daerah = PAD"],
          penjelasan: "Kantor pusat adalah objek PBB-P2 Kota Bandung; tarif, NJKP, dan NJOPTKP mengikuti Perda; penerimaannya PAD, bukan DBH." },
        { no: 4, pertanyaan: "Ke mana PBB-P5L dibayar dan siapa penerima bagi hasil terbesar?", tipe: "pilihan",
          opsi: { A: "Ke kas daerah Kabupaten Garut langsung", B: "Ke kas negara dengan kode billing; penerima terbesar Kabupaten Garut sebagai daerah penghasil", C: "Ke kas negara; penerima terbesar Kota Bandung sebagai domisili", D: "Ke kas negara; tidak dibagihasilkan" }, jawaban: "B",
          petunjuk: ["Pasal 11 ayat (5) UU PBB: dibayar di bank, kantor pos dan giro, atau tempat lain yang ditunjuk Menteri Keuangan", "Pasal 8 ayat (3): terutang di letak objek", "Bagi hasil: porsi terbesar kabupaten penghasil"],
          penjelasan: "PBB-P5L disetor ke kas negara lalu dibagihasilkan; porsi terbesar diterima Kabupaten Garut sebagai daerah penghasil, disusul Provinsi Jawa Barat." },
        { no: 5, pertanyaan: "Berapa persen minimal bagian daerah menurut Pasal 18 ayat (1) UU PBB?", tipe: "angka", jawaban: 90, toleransi: 0,
          petunjuk: ["Pasal 18 UU PBB mengatur imbangan pembagian", "Bagian daerah 'sekurang-kurangnya'", "Jawaban: 90"],
          penjelasan: "Pasal 18 ayat (1) UU PBB menetapkan bagian pemerintah daerah sekurang-kurangnya 90%." }
      ],
      kesimpulan: "Hanya kebun beserta bangunan di kawasan HGU yang menjadi PBB-P5L (Rp72.776.000), dibayar ke kas negara dan dibagihasilkan dengan porsi terbesar ke Kabupaten Garut; kantor pusat dikenai PBB-P2 Kota Bandung yang menjadi PAD.",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-04", judul: "Wilayah kerja migas lepas pantai: dari NJOP ke keberatan", topik: "B8.4", estimasiMenit: 18,
      narasi: "PT Selat Karimata Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja lepas pantai di laut wilayah Indonesia; fasilitas penerima gas di darat berada di dalam wilayah kerja yang sama. Perusahaan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal perairan produktif (lokasi anjungan dan sumur) 220 ha dengan nilai Rp2.500/m²; areal perairan wilayah kerja lainnya 58.000 ha dengan nilai Rp45/m²; areal darat fasilitas penerima 18 ha dengan nilai Rp95.000/m²; NJOP tubuh bumi hasil penilaian DJP Rp945.000.000.000; anjungan produksi yang dipancang ke dasar laut Rp680.000.000.000; pipa gas bawah laut Rp240.000.000.000; bangunan fasilitas penerima di darat Rp112.000.000.000; serta kapal crew boat milik sendiri Rp38.000.000.000. SPPT PBB-P5L 2026 yang diterima pada 10 Maret 2026 ternyata memasukkan kapal crew boat sebagai bangunan. Perusahaan mengajukan keberatan yang diterima KPP pada 2 Juni 2026, melunasi SPPT sesuai jumlah yang tercantum pada 1 September 2026, dan keberatannya kemudian dikabulkan seluruhnya. Perusahaan tidak mempunyai utang pajak lain.",
      data: [ ["Perairan produktif", "220 ha; Rp2.500/m²"], ["Perairan wilayah kerja lainnya", "58.000 ha; Rp45/m²"], ["Areal darat fasilitas penerima", "18 ha; Rp95.000/m²"], ["NJOP tubuh bumi", "Rp945.000.000.000"], ["Anjungan / pipa bawah laut / fasilitas darat", "Rp680.000.000.000 / Rp240.000.000.000 / Rp112.000.000.000"], ["Kapal crew boat (ikut dalam SPPT)", "Rp38.000.000.000"], ["SPPT diterima / keberatan diterima KPP / SPPT dilunasi", "10 Maret 2026 / 2 Juni 2026 / 1 September 2026"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa NJOP permukaan bumi berupa perairan, produktif dan lainnya (Rp)?", tipe: "angka", jawaban: 31600000000, toleransi: 0,
          petunjuk: ["1 ha = 10.000 m²; perairan termasuk bumi", "Produktif 2.200.000 m² × 2.500; lainnya 580.000.000 m² × 45", "5.500.000.000 + 26.100.000.000"],
          penjelasan: "Perairan produktif Rp5.500.000.000 ditambah perairan lainnya Rp26.100.000.000 = Rp31.600.000.000; Pasal 1 angka 1 UU PBB memasukkan laut wilayah ke dalam pengertian bumi." },
        { no: 2, pertanyaan: "Berapa NJOP bumi seluruhnya (Rp)?", tipe: "angka", jawaban: 993700000000, toleransi: 0,
          petunjuk: ["Tambahkan areal darat dan tubuh bumi", "Darat 180.000 m² × 95.000 = Rp17.100.000.000", "31.600.000.000 + 17.100.000.000 + 945.000.000.000"],
          penjelasan: "NJOP bumi = Rp31.600.000.000 + Rp17.100.000.000 + Rp945.000.000.000 = Rp993.700.000.000." },
        { no: 3, pertanyaan: "Aset mana yang termasuk bangunan objek PBB?", tipe: "pilihan",
          opsi: { A: "Anjungan, pipa bawah laut, fasilitas penerima darat, dan kapal crew boat", B: "Hanya fasilitas penerima darat karena berdiri di atas tanah", C: "Anjungan, pipa bawah laut, dan fasilitas penerima darat; kapal crew boat bukan bangunan", D: "Anjungan dan kapal crew boat karena keduanya berada di laut" }, jawaban: "C",
          petunjuk: ["Bangunan adalah konstruksi teknik yang ditanam atau dilekatkan tetap pada tanah dan/atau perairan", "Anjungan dipancang; pipa dipasang tetap di dasar laut", "Kapal bergerak dan tidak dilekatkan tetap"],
          penjelasan: "Anjungan, pipa bawah laut, dan fasilitas darat dilekatkan tetap sehingga merupakan bangunan; kapal adalah benda bergerak (Pasal 1 angka 2 UU PBB)." },
        { no: 4, pertanyaan: "Berapa PBB-P5L 2026 yang seharusnya (Rp)?", tipe: "angka", jawaban: 4051376000, toleransi: 0,
          petunjuk: ["Bangunan = 680 + 240 + 112 miliar = Rp1.032.000.000.000", "NJOP objek Rp2.025.700.000.000 dikurangi NJOPTKP Rp12.000.000", "2.025.688.000.000 × 40% × 0,5%"],
          penjelasan: "(Rp993.700.000.000 + Rp1.032.000.000.000 − Rp12.000.000) × 40% × 0,5% = Rp4.051.376.000." },
        { no: 5, pertanyaan: "SPPT memasukkan kapal senilai Rp38.000.000.000. Berapa selisih PBB akibat kekeliruan itu (Rp)?", tipe: "angka", jawaban: 76000000, toleransi: 0,
          petunjuk: ["NJOPTKP sudah dipakai pada NJOP objek", "Selisih NJOP × 40% × 0,5%", "38.000.000.000 × 0,2%"],
          penjelasan: "SPPT Rp4.127.376.000 dikurangi PBB yang seharusnya Rp4.051.376.000 = Rp76.000.000." },
        { no: 6, pertanyaan: "Bagaimana penilaian atas keberatan, pelunasan, dan akibat keputusan keberatan?", tipe: "pilihan",
          opsi: { A: "Keberatan terlambat karena batasnya 9 Mei 2026; pelunasan tepat waktu", B: "Keberatan tepat waktu (batas 9 Juni 2026) dan pelunasan 1 September 2026 tepat waktu (jatuh tempo 9 September 2026); kelebihan Rp76.000.000 dikembalikan setelah keputusan", C: "Keberatan tepat waktu, tetapi pelunasan seharusnya ditunda sampai keputusan keberatan terbit", D: "Keberatan tidak diperlukan karena DJP wajib membetulkan SPPT secara otomatis; tidak ada kelebihan pembayaran" }, jawaban: "B",
          petunjuk: ["Keberatan 3 bulan sejak SPPT diterima", "SPPT jatuh tempo 6 bulan sejak diterima; keberatan tidak menunda pembayaran", "Keputusan mengabulkan seluruhnya → kelebihan dikembalikan karena tidak ada utang pajak lain"],
          penjelasan: "Batas keberatan 9 Juni 2026 sehingga keberatan yang diterima 2 Juni 2026 tepat waktu; SPPT jatuh tempo 9 September 2026 sehingga pelunasan 1 September 2026 tepat waktu. Keputusan yang mengabulkan seluruhnya menimbulkan kelebihan Rp76.000.000 yang dikembalikan karena perusahaan tidak mempunyai utang pajak lain." }
      ],
      kesimpulan: "Pada objek migas lepas pantai, perairan dan tubuh bumi adalah bumi, sedangkan anjungan, pipa, dan fasilitas darat adalah bangunan; kapal bukan objek. PBB seharusnya Rp4.051.376.000, sehingga SPPT yang memasukkan kapal kelebihan Rp76.000.000. Keberatan diajukan dalam 3 bulan, SPPT tetap dilunasi sebelum jatuh tempo, dan kelebihan dikembalikan setelah keputusan.",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-05", judul: "Hutan tanaman yang lalai SPOP: SKP, denda, dan penagihan", topik: "B8.5", estimasiMenit: 18,
      narasi: "PT Wana Kapuas Hijau memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Ketapang dan tidak memiliki objek PBB-P5L lain. SPOP sektor perhutanan 2026 diterima perusahaan pada 12 Januari 2026, tetapi tidak dikembalikan meskipun telah ditegur secara tertulis. DJP lalu menghitung pokok PBB 2026 dari data administrasi: areal produktif 8.000 ha (nilai tanah Rp1.700/m² dan SIT hutan tanaman Rp2.300/m²), areal belum produktif 2.500 ha (Rp1.700/m²), areal emplasemen 15 ha (Rp7.500/m²), dan bangunan Rp7.800.000.000. SKP diterima pada 15 Mei 2026 dan baru dilunasi pada 3 Agustus 2026. Denda keterlambatan kemudian ditagih dengan STP yang diterima pada 1 September 2026 dan tidak dilunasi. Asumsikan bagian dari bulan dihitung satu bulan penuh, denda 2% dihitung dari jumlah dalam SKP yang terlambat dibayar, dan frasa 'setelah lewat n hari' berarti tindakan paling cepat dilakukan pada hari ke-(n + 1) setelah tanggal acuan.",
      data: [ ["SPOP diterima", "12 Januari 2026 (tidak dikembalikan setelah ditegur)"], ["Areal produktif", "8.000 ha; Rp1.700 + SIT Rp2.300 per m²"], ["Areal belum produktif", "2.500 ha; Rp1.700/m²"], ["Emplasemen", "15 ha; Rp7.500/m²"], ["Bangunan", "Rp7.800.000.000"], ["SKP diterima / dilunasi", "15 Mei 2026 / 3 Agustus 2026"], ["STP denda diterima", "1 September 2026 (tidak dilunasi)"] ],
      langkah: [
        { no: 1, pertanyaan: "Kapan batas penyampaian SPOP, dan atas dasar apa SKP diterbitkan?", tipe: "pilihan",
          opsi: { A: "12 Februari 2026; SKP berdasarkan Pasal 10 ayat (2) huruf b", B: "11 Februari 2026; SKP berdasarkan Pasal 10 ayat (2) huruf a", C: "31 Januari 2026; STP karena SPOP terlambat", D: "11 Februari 2026; SPPT biasa tanpa sanksi" }, jawaban: "B",
          petunjuk: ["SPOP disampaikan paling lambat 30 hari setelah tanggal diterima (Pasal 9 ayat (2))", "12 Januari + 30 hari = 11 Februari 2026", "SPOP tidak disampaikan setelah ditegur → huruf a"],
          penjelasan: "Batas SPOP 11 Februari 2026 (Pasal 9 ayat (2) UU PBB); karena SPOP tetap tidak disampaikan setelah ditegur, DJP menerbitkan SKP berdasarkan Pasal 10 ayat (2) huruf a." },
        { no: 2, pertanyaan: "Berapa pokok PBB 2026 menurut data administrasi (Rp)?", tipe: "angka", jawaban: 742826000, toleransi: 0,
          petunjuk: ["Produktif 80.000.000 m² × 4.000; belum produktif 25.000.000 m² × 1.700; emplasemen 150.000 m² × 7.500", "NJOP objek = 363.625.000.000 + 7.800.000.000 = 371.425.000.000", "(371.425.000.000 − 12.000.000) × 0,2%"],
          penjelasan: "NJOP bumi Rp363.625.000.000 ditambah bangunan Rp7.800.000.000 = Rp371.425.000.000; dikurangi NJOPTKP lalu dikali 40% dan 0,5% = Rp742.826.000." },
        { no: 3, pertanyaan: "Berapa jumlah yang harus dibayar menurut SKP (Rp)?", tipe: "angka", jawaban: 928532500, toleransi: 0,
          petunjuk: ["Pasal 10 ayat (3) UU PBB", "Denda 25% dari pokok = Rp185.706.500", "742.826.000 + 185.706.500"],
          penjelasan: "SKP huruf a = pokok + 25% × pokok = Rp742.826.000 + Rp185.706.500 = Rp928.532.500." },
        { no: 4, pertanyaan: "Kapan jatuh tempo SKP dan batas pengajuan keberatannya?", tipe: "pilihan",
          opsi: { A: "14 November 2026 dan 14 Agustus 2026", B: "14 Juni 2026 dan 14 November 2026", C: "14 Juni 2026 dan 14 Agustus 2026", D: "14 Juli 2026 dan 14 Agustus 2026" }, jawaban: "C",
          petunjuk: ["SKP dilunasi 1 bulan sejak diterima (Pasal 11 ayat (2))", "Keberatan 3 bulan sejak SKP diterima (Pasal 15)", "1 bulan sejak 15 Mei berakhir 14 Juni; 3 bulan sejak 15 Mei berakhir 14 Agustus"],
          penjelasan: "Jatuh tempo SKP 14 Juni 2026; keberatan paling lambat 14 Agustus 2026." },
        { no: 5, pertanyaan: "Berapa denda keterlambatan yang ditagih dengan STP (Rp)?", tipe: "angka", jawaban: 37141300, toleransi: 0,
          petunjuk: ["14 Juni s.d. 3 Agustus 2026 = 1 bulan 20 hari", "Bagian bulan dihitung penuh → 2 bulan", "2 × 2% × 928.532.500"],
          penjelasan: "Keterlambatan 1 bulan 20 hari dihitung 2 bulan; denda 4% × Rp928.532.500 = Rp37.141.300 (Pasal 11 ayat (3) UU PBB)." },
        { no: 6, pertanyaan: "STP diterima 1 September 2026 dan tidak dilunasi. Kapan Surat Teguran paling cepat, dan bila Surat Teguran disampaikan pada tanggal itu, kapan Surat Paksa paling cepat?", tipe: "pilihan",
          opsi: { A: "Surat Teguran 8 Oktober 2026; Surat Paksa 30 Oktober 2026", B: "Surat Teguran 1 Oktober 2026; Surat Paksa 22 Oktober 2026", C: "Surat Teguran 9 September 2026; Surat Paksa 30 September 2026", D: "Surat Teguran 8 Oktober 2026; Surat Paksa 10 Oktober 2026" }, jawaban: "A",
          petunjuk: ["STP jatuh tempo 1 bulan sejak diterima: 30 September 2026", "Surat Teguran setelah lewat 7 hari dari jatuh tempo → hari ke-8", "Surat Paksa setelah lewat 21 hari sejak Surat Teguran → hari ke-22"],
          penjelasan: "Jatuh tempo STP 30 September 2026; Surat Teguran paling cepat 8 Oktober 2026; Surat Paksa paling cepat 30 Oktober 2026 (8 Oktober + 22 hari)." },
        { no: 7, pertanyaan: "Bagaimana perlakuannya dalam PPh Badan 2026?", tipe: "pilihan",
          opsi: { A: "Pokok PBB Rp742.826.000 dapat dibiayakan; denda 25% Rp185.706.500 dan denda STP Rp37.141.300 dikoreksi fiskal positif", B: "Seluruh pembayaran SKP Rp928.532.500 dapat dibiayakan karena merupakan pajak terutang", C: "Pokok dan denda 25% dapat dibiayakan; hanya denda STP yang dikoreksi", D: "Tidak ada yang dapat dibiayakan karena SKP terbit akibat kelalaian" }, jawaban: "A",
          petunjuk: ["Pasal 6 ayat (1) huruf a UU PPh: pajak selain PPh dapat dibiayakan", "Pasal 9 ayat (1) huruf k UU PPh: sanksi administrasi tidak dapat dikurangkan", "Pisahkan pokok dari kedua denda"],
          penjelasan: "Pokok PBB adalah pajak selain PPh yang dapat dibiayakan; denda 25% dalam SKP dan denda 2% dalam STP adalah sanksi administrasi yang dikoreksi fiskal positif." }
      ],
      kesimpulan: "Karena SPOP tidak dikembalikan setelah ditegur, DJP menerbitkan SKP huruf a: pokok Rp742.826.000 ditambah denda 25% menjadi Rp928.532.500 yang jatuh tempo 14 Juni 2026. Pelunasan 3 Agustus 2026 menimbulkan denda 2 bulan Rp37.141.300 yang ditagih dengan STP; bila STP tidak dilunasi, penagihan berlanjut ke Surat Teguran (paling cepat 8 Oktober 2026) dan Surat Paksa (paling cepat 30 Oktober 2026). Hanya pokok PBB yang dapat dibiayakan.",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-06", judul: "Kebun dilanda banjir: pengurangan PBB sebelum pelunasan", topik: "B8.6", estimasiMenit: 15,
      narasi: "PT Sawit Tebo Makmur memegang HGU kebun kelapa sawit di Kabupaten Tebo dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif 1.400 ha (nilai tanah Rp3.900/m² dan SIT Rp5.600/m²), areal belum produktif 260 ha (Rp3.900/m²), areal emplasemen 22 ha (Rp12.500/m²), dan bangunan Rp24.600.000.000. SPPT PBB-P5L 2026 yang sesuai dengan data tersebut diterima pada 9 Maret 2026. Pada 2–9 Juni 2026 banjir bandang merusak sekitar 35% tanaman menghasilkan, dan pemerintah daerah menerbitkan keterangan bencana. Perusahaan mengajukan permohonan pengurangan yang memenuhi persyaratan formal pada 22 Juli 2026. Keputusan pengurangan yang diterima pada 1 September 2026 memberikan pengurangan 30% dari PBB terutang 2026, dan perusahaan melunasi sisa PBB 2026 pada 7 September 2026. Pada Januari 2027 perusahaan menelaah ulang posisi pajaknya. Saat itu perusahaan masih mempunyai utang STP PPh Pasal 21 Masa Agustus 2026 sebesar Rp1.150.000.",
      data: [ ["Areal produktif", "1.400 ha; Rp3.900 + SIT Rp5.600 per m²"], ["Areal belum produktif", "260 ha; Rp3.900/m²"], ["Emplasemen", "22 ha; Rp12.500/m²"], ["Bangunan", "Rp24.600.000.000"], ["SPPT diterima / sisa dilunasi", "9 Maret 2026 / 7 September 2026"], ["Banjir bandang", "2–9 Juni 2026; ±35% tanaman menghasilkan rusak"], ["Keputusan pengurangan (diterima 1 September 2026)", "30% dari PBB terutang 2026"], ["Utang STP PPh Pasal 21 Masa Agustus 2026", "Rp1.150.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Jalur yang tepat untuk meringankan PBB 2026 adalah?", tipe: "pilihan",
          opsi: { A: "Keberatan atas SPPT karena luas tanaman menghasilkan berkurang", B: "Permohonan pengurangan karena objek terkena bencana alam", C: "Penyampaian SPOP baru agar SPPT 2026 diterbitkan ulang", D: "Gugatan ke Pengadilan Pajak" }, jawaban: "B",
          petunjuk: ["SPPT sudah benar menurut keadaan 1 Januari 2026", "Kerusakan terjadi setelah 1 Januari", "Pasal 19 ayat (1) huruf b UU PBB"],
          penjelasan: "Penetapan sudah benar, sedangkan kerusakan terjadi pada Juni 2026; jalurnya pengurangan karena bencana alam (Pasal 19 ayat (1) huruf b UU PBB), bukan keberatan." },
        { no: 2, pertanyaan: "Berapa PBB-P5L terutang 2026 (Rp)?", tipe: "angka", jawaban: 340956000, toleransi: 0,
          petunjuk: ["Produktif 14.000.000 m² × 9.500; belum produktif 2.600.000 m² × 3.900; emplasemen 220.000 m² × 12.500", "NJOP objek = 145.890.000.000 + 24.600.000.000 = 170.490.000.000", "(170.490.000.000 − 12.000.000) × 0,2%"],
          penjelasan: "NJOP bumi Rp145.890.000.000 ditambah bangunan Rp24.600.000.000 = Rp170.490.000.000; (Rp170.490.000.000 − Rp12.000.000) × 40% × 0,5% = Rp340.956.000." },
        { no: 3, pertanyaan: "Apakah pelunasan pada 7 September 2026 dikenai denda?", tipe: "pilihan",
          opsi: { A: "Ya, karena jatuh tempo SPPT 8 Juni 2026 (3 bulan)", B: "Ya, denda 2% karena pembayaran dilakukan setelah banjir", C: "Tidak, karena jatuh tempo SPPT 8 September 2026 dan pembayaran dilakukan sebelumnya", D: "Tidak, karena permohonan pengurangan otomatis menghapus kewajiban membayar" }, jawaban: "C",
          petunjuk: ["Pasal 11 ayat (1): 6 bulan sejak SPPT diterima", "6 bulan sejak 9 Maret 2026 berakhir 8 September 2026", "7 September sebelum jatuh tempo"],
          penjelasan: "Jatuh tempo SPPT 8 September 2026, sehingga pelunasan 7 September 2026 tepat waktu dan tidak menimbulkan denda Pasal 11 ayat (3)." },
        { no: 4, pertanyaan: "Berapa besarnya pengurangan menurut keputusan (Rp)?", tipe: "angka", jawaban: 102286800, toleransi: 0,
          petunjuk: ["Pengurangan diberikan atas PBB terutang", "30% × Rp340.956.000", "Jawaban: Rp102.286.800"],
          penjelasan: "Pengurangan 30% × Rp340.956.000 = Rp102.286.800." },
        { no: 5, pertanyaan: "Berapa sisa PBB 2026 yang harus dilunasi pada 7 September 2026 (Rp)?", tipe: "angka", jawaban: 238669200, toleransi: 0,
          petunjuk: ["Pengurangan diberikan dari PBB yang belum dilunasi", "Keputusan terbit sebelum pelunasan", "340.956.000 − 102.286.800"],
          penjelasan: "Pengurangan PBB diberikan dari PBB yang belum dilunasi (Pasal 4 ayat (3) PMK 129/2023). Karena keputusan diterima sebelum pelunasan, perusahaan cukup melunasi Rp340.956.000 − Rp102.286.800 = Rp238.669.200. Tidak ada kelebihan pembayaran, sehingga utang STP PPh Pasal 21 Rp1.150.000 tetap dilunasi tersendiri. Bila SPPT sudah dilunasi penuh sebelum permohonan diajukan, tidak ada lagi PBB yang dapat dikurangkan." },
        { no: 6, pertanyaan: "Bagaimana pengaruh banjir terhadap PBB 2027?", tipe: "pilihan",
          opsi: { A: "Pengurangan 30% otomatis berlaku lagi untuk 2027", B: "PBB 2027 mengikuti keadaan objek per 1 Januari 2027; perubahan areal (misalnya blok rusak yang ditanam ulang) dilaporkan melalui SPOP agar penetapan 2027 sesuai", C: "PBB 2027 tidak terutang sampai kebun pulih", D: "PBB 2027 dihitung dari PBB 2026 setelah pengurangan" }, jawaban: "B",
          petunjuk: ["Pengurangan diberikan per tahun pajak atas permohonan", "Pasal 8 ayat (2): keadaan 1 Januari menentukan", "Perubahan data objek dilaporkan dengan SPOP"],
          penjelasan: "Pengurangan berlaku untuk PBB tahun pajak yang dimohonkan. PBB 2027 ditetapkan menurut keadaan 1 Januari 2027; bila blok rusak berubah klasifikasi (misalnya tanaman rusak sudah ditumbang dan pada 1 Januari 2027 lahannya belum ditanami ulang sehingga menjadi areal belum produktif, Pasal 14 ayat (1) huruf b PMK 186/2019), perubahan itu dilaporkan melalui SPOP." }
      ],
      kesimpulan: "Kerusakan setelah 1 Januari tidak membuat SPPT keliru, sehingga jalurnya pengurangan karena bencana, bukan keberatan. PBB 2026 Rp340.956.000 mendapat pengurangan 30% (Rp102.286.800) yang diputus dalam 4 bulan dan sebelum pelunasan, sehingga sisa Rp238.669.200 dilunasi tepat waktu; pengurangan hanya memotong PBB yang belum dilunasi. Penetapan 2027 mengikuti keadaan 1 Januari 2027.",
      kalkulatorRef: "pbb-bphtb"
    }
  ],
  tips: [
    { teks: "Hitung PBB-P5L dalam urutan tetap: luas × nilai per m² (+SIT hanya areal produktif) → tambah bangunan → kurangi NJOPTKP sekali → × 40% → × 0,5%.", tagSebab: "salah-hitung" },
    { teks: "Pisahkan rezim sebelum menghitung: kawasan usaha kebun/hutan/tambang = PBB-P5L (DJP); kantor atau objek di luar kawasan = PBB-P2 (Perda, PAD). Jangan pakai NJOPTKP Rp10 juta/Rp60 juta untuk P5L.", tagSebab: "salah-klasifikasi" },
    { teks: "Hafalkan pasangan tenggat beserta titik awalnya: SPOP 30 hari setelah diterima; SPPT 6 bulan, SKP/STP 1 bulan, dan keberatan 3 bulan sejak diterima; keputusan 12 bulan sejak surat keberatan diterima.", tagSebab: "salah-baca" },
    { teks: "Sanksi PBB berasal dari UU PBB sendiri: denda SKP 25% sekali dan denda telat bayar 2% sebulan maks 24 bulan. Opsi bertarif bunga KMK atau kenaikan 75% adalah pengecoh dari UU KUP.", tagSebab: "lupa-pasal" },
    { teks: "Keadaan 1 Januari mengunci objek setahun: bangunan selesai Februari, klinik yang berubah komersial, atau tambang yang tutup Juli baru berpengaruh tahun berikutnya, tanpa pro rata.", tagSebab: "salah-baca" },
    { teks: "Objek offshore dan kabel bawah laut: laut tetap 'bumi', anjungan/pipa/kabel 'bangunan', kapal bukan objek; untuk sektor lainnya cek dulu NJOP ≥ Rp1 miliar (NJKP 40%) atau di bawahnya (20%).", tagSebab: "salah-klasifikasi" },
    { teks: "Tenggat 'N bulan sejak tanggal X': contoh di Penjelasan Pasal 11 ayat (1) UU PBB (SPPT diterima 1 Maret, jatuh tempo 31 Agustus) dan di Penjelasan Pasal 19 ayat (1) UU 28/2007 (sebelum Pasal 19 diganti UU 11/2020; SKPKB terbit 7 Oktober, batas pelunasan 6 November) menghitung sampai sehari sebelum tanggal yang sama. Modul ini memakai cara itu (3 bulan sejak 10 Juli berakhir 9 Oktober). Bila opsi hanya memuat versi tanggal yang sama, periksa apakah kesimpulannya (tepat waktu atau terlambat, jumlah bulan denda) ikut berubah.", tagSebab: "salah-hitung" }
  ]
});
