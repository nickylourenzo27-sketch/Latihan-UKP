// Modul B8 — PBB-P5L (PBB sektor perkebunan, perhutanan, pertambangan migas/panas bumi/minerba, dan sektor lainnya).
// Rekonstruksi dari kisi-kisi resmi, bukan soal asli. Ketentuan yang dipakai: berlaku Oktober 2026
// (UU 12/1985 s.t.d.d. UU 12/1994, PP 25/2002, PMK 186/2019 s.t.d.d. PMK 234/2022, PMK 23/2014, UU 1/2022, PMK 81/2024).
UKP.register({
  meta: {
    kode: "B8", slug: "pbb-p5l", nama: "PBB-P5L",
    diujiDi: ["B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0, B: 0.05, C: 0.04 },
    statusPer: "2026-10-28",
    tujuan: "Peserta mampu menentukan subjek dan objek PBB sektor perkebunan, perhutanan, pertambangan (migas, panas bumi, minerba), dan sektor lainnya serta membedakannya dari PBB-P2 daerah; menghitung PBB terutang dari luas dan nilai per jenis areal sampai NJKP dan tarif; serta menerapkan prosedur SPOP, SPPT, SKP, STP, keberatan, banding, pengurangan, pembayaran, penagihan, restitusi, dan bagi hasil dalam kasus praktik.",
    dasarHukumUtama: [
      "UU 12/1985 s.t.d.d. UU 12/1994 tentang Pajak Bumi dan Bangunan (UU PBB)",
      "PP 25/2002 tentang Penetapan Besarnya NJKP untuk Penghitungan PBB",
      "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022 (klasifikasi objek dan penetapan NJOP PBB-P5L)",
      "PMK 23/PMK.03/2014 (NJOPTKP Rp12.000.000)",
      "UU 1/2022 (HKPD): batas objek PBB-P2 daerah dan dana bagi hasil PBB",
      "PMK 81/2024 (Coretax) dan PMK 118/2024 (pelaksanaan hak dan kewajiban wajib pajak)",
      "UU 19/1997 s.t.d.d. UU 19/2000 (PPSP) dan UU 14/2002 (Pengadilan Pajak)"
    ],
    perubahanTerbaru: [
      { sebelum: "PBB-P2 dan BPHTB diatur UU 28/2009 (PDRD); PBB-P2 dialihkan ke daerah paling lambat 2014", sesudah: "UU 1/2022 (HKPD) menjadi dasar PBB-P2 dan BPHTB: PBB-P2 meliputi semua bumi/bangunan kecuali kawasan usaha perkebunan, perhutanan, dan pertambangan, yang tetap PBB-P5L pusat; NJOPTKP PBB-P2 paling sedikit Rp10.000.000 dan NJKP 20%–100% menurut Perda", dasar: "UU 1/2022 Pasal 38–41; Perda wajib menyesuaikan paling lambat 5 Januari 2024", berlakuSejak: "2022-01-05" },
      { sebelum: "Klasifikasi objek dan penetapan NJOP PBB-P5L menurut PMK 186/PMK.03/2019 versi awal", sesudah: "PMK 234/PMK.03/2022 mengubah PMK 186/2019 untuk menyelaraskan cakupan sektor PBB-P5L dengan UU HKPD", dasar: "PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { sebelum: "Pembayaran PBB-P5L dengan e-Billing DJP Online dan identitas NPWP 15 digit", sesudah: "Kode billing dibuat di Coretax dengan NPWP 16 digit/NIK dan NOP; layanan administrasi PBB-P5L dilakukan elektronik", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Sanksi bunga UU KUP dan denda keterlambatan PBB sama-sama 2% per bulan (sebelum UU HPP)", sesudah: "Bunga UU KUP memakai tarif bunga per bulan dari KMK; denda PBB-P5L tetap 2% sebulan paling lama 24 bulan karena UU PBB tidak diubah UU HPP", dasar: "UU 7/2021 (HPP) yang mengubah Pasal 9, 13, 14 UU KUP; Pasal 11 ayat (3) UU PBB", berlakuSejak: "2021-10-29" },
      { sebelum: "Permohonan keberatan dan pengurangan PBB diajukan dengan surat ke KPP berdasarkan PMK tersendiri", sesudah: "Tata cara pelaksanaan hak wajib pajak dikonsolidasikan dalam PMK 118/2024 dan diajukan melalui Coretax (rincian khusus PBB perlu dicek ke teks primer)", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" }
    ],
    lembarRingkas: [
      { label: "Tarif PBB-P5L", nilai: "0,5% (tarif tunggal)", dasar: "Pasal 5 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "NJKP perkebunan, perhutanan, pertambangan", nilai: "40% dari NJOP", dasar: "PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJKP objek lainnya (sektor lainnya)", nilai: "40% bila NJOP ≥ Rp1 miliar; 20% bila < Rp1 miliar (diuji sebelum NJOPTKP)", dasar: "PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJOPTKP PBB-P5L", nilai: "Rp12.000.000 per wajib pajak, sekali pada objek ber-NJOP terbesar", dasar: "PMK 23/PMK.03/2014; penjelasan Pasal 3 ayat (3) UU PBB" },
      { label: "Rumus ringkas sektor perkebunan, perhutanan, pertambangan", nilai: "0,2% × (NJOP − Rp12.000.000)", dasar: "Pasal 5–7 UU PBB; PP 25/2002", berlakuSejak: "2002-01-01" },
      { label: "NJOP bumi perkebunan", nilai: "luas × nilai tanah per m² (+ SIT hanya areal produktif); 1 ha = 10.000 m² ◐", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { label: "NJOP tubuh bumi pertambangan (produksi)", nilai: "angka kapitalisasi × hasil bersih (data penilaian) ◐", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
      { label: "NJOP bangunan", nilai: "nilai perolehan baru dikurangi penyusutan; benda bergerak tidak dihitung ◐", dasar: "Pasal 1 angka 2–3 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Penetapan NJOP", nilai: "setiap 3 tahun; daerah tertentu setiap tahun", dasar: "Pasal 6 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Saat yang menentukan pajak terutang", nilai: "keadaan objek 1 Januari (tanpa pro rata)", dasar: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Tempat pajak terutang", nilai: "kabupaten/kota letak objek", dasar: "Pasal 8 ayat (3) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Penyampaian SPOP/LSPOP", nilai: "≤ 30 hari sejak SPOP diterima subjek pajak", dasar: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keterangan 'bukan wajib pajak'", nilai: "diputus ≤ 1 bulan; lewat = dianggap disetujui", dasar: "Pasal 4 ayat (4)–(7) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "SKP PBB", nilai: "pokok (huruf a) atau selisih (huruf b) + denda 25%", dasar: "Pasal 10 ayat (2)–(4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Jatuh tempo SPPT", nilai: "6 bulan sejak SPPT diterima", dasar: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Jatuh tempo SKP dan STP", nilai: "1 bulan sejak diterima", dasar: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Denda telat bayar", nilai: "2% sebulan, paling lama 24 bulan (maks. 48%); ditagih dengan STP", dasar: "Pasal 11 ayat (3)–(4) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keberatan", nilai: "atas SPPT/SKP (bukan STP), tertulis, ≤ 3 bulan sejak diterima; tidak menunda bayar", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Keputusan keberatan", nilai: "≤ 12 bulan sejak surat keberatan diterima; lewat = dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Banding", nilai: "≤ 3 bulan sejak keputusan keberatan diterima", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
      { label: "Gugatan atas pelaksanaan penagihan", nilai: "14 hari sejak tanggal pelaksanaan penagihan", dasar: "Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
      { label: "Pengurangan PBB", nilai: "atas permohonan: kondisi tertentu objek atau bencana/sebab luar biasa", dasar: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
      { label: "Rantai penagihan", nilai: "Surat Teguran lewat 7 hari → Surat Paksa lewat 21 hari → sita (2 × 24 jam) → pengumuman lelang ≥ 14 hari → lelang ≥ 14 hari", dasar: "UU 19/1997 s.t.d.d. UU 19/2000; PMK 61/2023", berlakuSejak: "2023-06-12" },
      { label: "Pembayaran", nilai: "kode billing Coretax (NPWP 16 digit + NOP); bukti pelunasan ber-NTPN", dasar: "Pasal 12 UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01" },
      { label: "Bagi hasil (DBH PBB)", nilai: "100% untuk daerah: provinsi 16,2%, kabupaten/kota penghasil (letak objek) 73,8%, kabupaten/kota lain dalam provinsi 10%; UU PBB hanya mensyaratkan ≥ 90% ◐", dasar: "Pasal 113 UU 1/2022; PMK 67/2024; Pasal 18 ayat (1) UU PBB" },
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
        { teks: "Menghitung batas SPOP sebagai 'satu bulan' atau sejak 1 Januari; yang benar 30 hari sejak tanggal SPOP diterima", tagSebab: "salah-baca" },
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
        "Perkebunan: bumi dibagi areal produktif, areal belum produktif, areal tidak produktif, areal emplasemen, dan areal lainnya; NJOP areal produktif = luas × (nilai tanah per m² + standar investasi tanaman/SIT per m²), sedangkan areal lain dinilai dengan nilai tanah per m².",
        "Perhutanan: areal produktif hutan tanaman memperhitungkan nilai tanah ditambah SIT; hutan alam memakai pendekatan nilai hasil hutan; areal lain dinilai dengan nilai tanah.",
        "Pertambangan (migas, panas bumi, minerba): bumi terdiri atas permukaan bumi (onshore/offshore, areal produktif dan nonproduktif) yang dinilai luas × nilai per m², dan tubuh bumi pada tahap produksi yang dinilai dengan pendekatan angka kapitalisasi × hasil bersih.",
        "Bangunan di kawasan usaha (pabrik kelapa sawit, kilang, pipa, tangki timbun, dermaga, conveyor, perumahan karyawan, jalan kebun/tambang) dinilai dengan pendekatan biaya (nilai perolehan baru dikurangi penyusutan) dan dijumlahkan ke NJOP objek.",
        "Sektor lainnya (antara lain perikanan tangkap, pembudidayaan ikan, jaringan pipa dan kabel bawah laut, objek lain yang ditetapkan) memakai NJKP menurut batas NJOP Rp1 miliar (40%/20%); pada objek offshore, areal perairan adalah bumi, anjungan/pipa/kabel yang dilekatkan tetap adalah bangunan, sedangkan kapal adalah benda bergerak.",
        "Urutan baku: (1) luas kena pajak per areal × nilai per m² (+SIT bila produktif) → NJOP bumi; (2) + NJOP bangunan; (3) − NJOPTKP sekali; (4) × NJKP; (5) × 0,5%."
      ],
      poinKunci: [
        { label: "Areal produktif perkebunan", nilai: "luas × (nilai tanah + SIT)", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
        { label: "Areal belum produktif, tidak produktif, emplasemen", nilai: "luas × nilai tanah per m²", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
        { label: "Tubuh bumi pertambangan", nilai: "angka kapitalisasi × hasil bersih", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" },
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
      verifikasi: "◐",
      peringatan: "Rumus rinci per sektor (SIT hanya pada areal produktif, pendekatan hutan alam, angka kapitalisasi × hasil bersih untuk tubuh bumi pertambangan, daftar sektor lainnya) berasal dari pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer. Soal modul ini memberi nilai per m², SIT, dan data penilaian di stem sehingga yang diuji adalah klasifikasi areal dan urutan hitung."
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
        "UU HPP mengubah sanksi bunga UU KUP menjadi tarif bunga per bulan dari KMK, tetapi tidak mengubah UU PBB; denda keterlambatan PBB-P5L tetap 2% sebulan."
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
        langkah: [ ["Jatuh tempo (+6 bulan dari diterima)", "12 September 2026"], ["12 September s.d. 30 Oktober 2026", "1 bulan 18 hari → 2 bulan"], ["Denda 2 × 2% × 240.000.000", "Rp9.600.000"] ]
      },
      verifikasi: "◐",
      peringatan: "Cara menghitung bagian dari bulan pada denda Pasal 11 ayat (3) UU PBB tidak dibaca dari teks primer; soal modul ini menyatakan asumsi 'bagian dari bulan dihitung satu bulan penuh' di stem. Bentuk elektronik SPPT/SKP/STP di Coretax juga belum dicek."
    },
    {
      id: "B8.6", slug: "keberatan-pengurangan-pbb", judul: "Keberatan, banding, pengurangan, pembetulan, dan pembatalan PBB",
      estimasiMenit: 12, jenisDominan: ["prosedur", "kasus"],
      ringkasan: [
        "Wajib pajak dapat mengajukan keberatan kepada DJP atas SPPT dan SKP (Pasal 15 ayat (1)); STP tidak termasuk objek keberatan. Keberatan diajukan tertulis dalam bahasa Indonesia dengan alasan yang jelas (ayat (2)).",
        "Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal diterimanya SPPT/SKP, kecuali wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya (Pasal 15); pengajuan keberatan tidak menunda kewajiban membayar.",
        "DJP memberi keputusan paling lama 12 bulan sejak surat keberatan diterima; keputusan dapat menerima seluruhnya/sebagian, menolak, atau menambah pajak terutang; bila 12 bulan lewat tanpa keputusan, keberatan dianggap diterima (Pasal 16).",
        "Atas keputusan keberatan dapat diajukan banding ke Pengadilan Pajak paling lambat 3 bulan sejak keputusan diterima (Pasal 35 ayat (2) UU 14/2002).",
        "Pengurangan (Pasal 19 ayat (1)): atas permohonan wajib pajak, Menteri Keuangan dapat memberi pengurangan (a) karena kondisi tertentu objek yang ada hubungannya dengan subjek pajak dan/atau sebab tertentu lainnya, atau (b) karena objek terkena bencana alam atau sebab lain yang luar biasa; ketentuan pelaksana lazimnya membatasi pengurangan paling tinggi 75%, dan sampai 100% untuk bencana alam.",
        "Keberatan dipakai bila penetapan tidak benar (luas, NJOP, subjek); pengurangan dipakai bila penetapan benar tetapi wajib pajak membutuhkan keringanan, misalnya objek rusak karena bencana setelah 1 Januari.",
        "Upaya hukum non keberatan PBB-P5L (PMK 118/2024 s.t.d.d. PMK 71/2026): (a) pembetulan SPPT, SKP PBB, atau STP PBB yang memuat kesalahan tulis (nama, alamat, NOP, tanggal jatuh tempo), kesalahan hitung (penjumlahan, pengurangan, perkalian, pembagian), dan/atau kekeliruan penerapan ketentuan, karena jabatan atau atas permohonan; (b) pengurangan PBB karena kondisi tertentu atau bencana (Pasal 19 UU PBB); (c) pengurangan atau penghapusan denda administratif PBB yang dikenakan karena kekhilafan wajib pajak atau bukan karena kesalahannya (Pasal 20 UU PBB); (d) pengurangan atau pembatalan SPPT, SKP PBB, atau STP PBB yang tidak benar.",
        "Memilih jalur: salah tulis atau salah hitung yang tampak dari dokumen → pembetulan; sengketa materi (luas, NJOP, subjek) yang masih dalam 3 bulan → keberatan; tenggat keberatan lewat atau keberatan tidak dipertimbangkan → pengurangan atau pembatalan ketetapan yang tidak benar; penetapan benar tetapi objek terkena bencana atau kondisi tertentu → pengurangan PBB; denda 2% sebulan atau 25% yang timbul karena kekhilafan atau bukan kesalahan wajib pajak → pengurangan denda administratif. STP PBB bukan objek keberatan, sehingga STP yang tidak benar diselesaikan melalui pembetulan atau pembatalan.",
        "Pengurangan atau pembatalan SKP PBB yang tidak benar hanya dapat diajukan bila wajib pajak tidak mengajukan keberatan atau keberatannya tidak dipertimbangkan; banding tidak tersedia karena tidak ada keputusan keberatan. Pengurangan denda administratif PBB hanya diberikan atas denda yang belum dibayar. Keputusan atas permohonan non keberatan diterbitkan paling lama 6 bulan sejak permohonan diterima."
      ],
      poinKunci: [
        { label: "Objek keberatan", nilai: "SPPT dan SKP", dasar: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Batas keberatan", nilai: "3 bulan sejak SPPT/SKP diterima", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Keputusan keberatan", nilai: "≤ 12 bulan; lewat = dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Banding", nilai: "≤ 3 bulan sejak keputusan diterima", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" },
        { label: "Pengurangan", nilai: "atas permohonan: kondisi tertentu atau bencana", dasar: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" },
        { label: "Upaya hukum non keberatan PBB", nilai: "Pembetulan · pengurangan PBB · pengurangan denda administratif · pengurangan/pembatalan SPPT, SKP, STP PBB yang tidak benar", dasar: "Pasal 19 dan 20 UU PBB; PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01" },
        { label: "Pembetulan SPPT/SKP/STP PBB", nilai: "Kesalahan tulis, hitung, atau kekeliruan penerapan ketentuan; jabatan atau permohonan", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" },
        { label: "Pembatalan SKP PBB tidak benar", nilai: "Hanya bila tidak diajukan keberatan atau keberatan tidak dipertimbangkan", dasar: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" },
        { label: "Keputusan permohonan non keberatan", nilai: "≤ 6 bulan sejak permohonan diterima", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 15–16 UU PBB", catatan: "keberatan dan keputusannya" },
        { pasal: "Pasal 19 UU PBB", catatan: "pengurangan PBB" },
        { pasal: "Pasal 35 ayat (2) UU 14/2002", catatan: "jangka waktu banding" },
        { pasal: "PMK 118/2024; PMK 82/PMK.03/2017", catatan: "tata cara keberatan dan pengurangan (status rincian perlu dicek)" },
        { pasal: "Pasal 20 UU PBB", catatan: "pengurangan atau penghapusan denda administratif karena kekhilafan atau bukan kesalahan wajib pajak" },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", catatan: "pembetulan, pengurangan denda, dan pengurangan/pembatalan SPPT, SKP PBB, STP PBB yang tidak benar" }
      ],
      jebakan: [
        { teks: "Mengajukan keberatan untuk kerusakan objek setelah 1 Januari; jalurnya pengurangan, bukan keberatan", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira keputusan keberatan yang lewat 12 bulan dianggap ditolak; yang benar dianggap diterima", tagSebab: "salah-baca" },
        { teks: "Menunda pembayaran SPPT/SKP karena sedang keberatan, lalu kaget dikenai denda 2% sebulan", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "SPPT PBB-P5L 2026 diterima 23 Februari 2026 dan surat keberatan diterima KPP pada 4 Mei 2026. Kapan batas keberatan, dan kapan DJP paling lambat harus memutus?",
        jawaban: "Keberatan paling lambat diajukan 23 Mei 2026; keputusan paling lambat 4 Mei 2027",
        langkah: [ ["SPPT diterima + 3 bulan", "23 Mei 2026"], ["Surat keberatan diterima", "4 Mei 2026 (tepat waktu)"], ["+ 12 bulan", "4 Mei 2027"], ["Lewat tanpa keputusan", "dianggap diterima"] ]
      },
      verifikasi: "◐",
      peringatan: "Batas persentase pengurangan (75%/100%), jangka waktu pengajuan/keputusan pengurangan, dan status PMK 82/PMK.03/2017 setelah konsolidasi PMK 118/2024 belum dicek ke teks primer; soal modul ini tidak menguji angka tersebut. Ketentuan keberatan Pasal 15–16 UU PBB dan banding UU 14/2002 dipakai apa adanya; nomor ayat Pasal 15–16 sengaja tidak dirinci (kecuali objek keberatan dan bentuk tertulis) karena penomoran ayat setelah UU 12/1994 belum dicek ke teks UU. Upaya non keberatan (pembetulan, pengurangan denda, pembatalan ketetapan yang tidak benar) ditulis dari ringkasan sekunder PMK 118/2024 s.t.d.d. PMK 71/2026; nomor pasal PMK dan jangka waktu 6 bulan untuk jenis PBB perlu dicek ke teks primer."
    },
    {
      id: "B8.7", slug: "pembayaran-penagihan-restitusi-pbb", judul: "Pembayaran, penagihan, dan restitusi PBB",
      estimasiMenit: 12, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "PBB-P5L dibayar ke kas negara melalui bank, kantor pos, dan tempat lain yang ditunjuk Menteri Keuangan (Pasal 12 UU PBB); sejak Coretax (PMK 81/2024) pembayaran memakai kode billing dengan NPWP 16 digit dan NOP, dan NTPN pada bukti penerimaan negara menjadi tanda pelunasan.",
        "Tanda pelunasan PBB bukan bukti pemilikan hak atas tanah (penjelasan Pasal 4 ayat (1)).",
        "Dasar penagihan adalah SPPT, SKP, dan STP; utang yang tidak dilunasi sampai jatuh tempo ditagih dengan urutan UU PPSP: Surat Teguran (setelah lewat 7 hari dari jatuh tempo), Surat Paksa (setelah lewat 21 hari sejak Surat Teguran), penyitaan bila tidak dilunasi dalam 2 × 24 jam setelah Surat Paksa diberitahukan, lalu lelang.",
        "Kelebihan pembayaran PBB (pembayaran ganda, keputusan keberatan/banding/pengurangan yang menurunkan pajak yang sudah dibayar) dikembalikan atas permohonan setelah diperhitungkan lebih dahulu dengan utang pajak yang masih ada.",
        "Salah NOP, tahun pajak, atau jenis pajak pada pembayaran diselesaikan dengan pemindahbukuan, bukan keberatan atau pengurangan.",
        "Dalam PPh Badan, PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a UU PPh), sedangkan denda STP/SKP PBB tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k)."
      ],
      poinKunci: [
        { label: "Tempat pembayaran", nilai: "kas negara via bank/pos persepsi (kode billing)", dasar: "Pasal 12 UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01" },
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
      peringatan: "Tata cara pengembalian kelebihan pembayaran PBB (jenis keputusan, jangka waktu) dan layanan pemindahbukuan di Coretax (PMK 81/2024) belum dicek ke teks primer; soal restitusi hanya menguji prinsip perhitungan dengan utang pajak dan pemindahbukuan."
    },
    {
      id: "B8.8", slug: "bagi-hasil-pbb", judul: "Bagi hasil penerimaan PBB",
      estimasiMenit: 8, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Penerimaan PBB-P5L adalah penerimaan negara (pajak pusat) yang dibagi kepada daerah; Pasal 18 ayat (1) UU PBB menetapkan imbangan sekurang-kurangnya 90% untuk pemerintah daerah, dan sejak UU 1/2022 (HKPD) Pasal 113 DBH PBB ditetapkan 100% untuk daerah: 16,2% provinsi, 73,8% kabupaten/kota penghasil, 10% kabupaten/kota lain dalam provinsi itu (PMK 67/2024).",
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
      peringatan: "Persentase DBH PBB 16,2% / 73,8% / 10% (Pasal 113 UU 1/2022; PMK 67/2024) dikonfirmasi dari sumber sekunder (DDTC, salinan teks UU), belum dari teks primer di JDIH; soal lama menguji imbangan Pasal 18 UU PBB, penggolongan DBH pajak/SDA/PAD, dan prinsip daerah penghasil."
    }
  ],
  soal: [
    {
      id: "B8-001", topik: "B8.1", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 4 ayat (1) UU PBB: Yang menjadi subjek pajak adalah orang atau badan yang secara nyata mempunyai suatu hak atas bumi, dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan.",
      stem: "PT Lembah Hijau Perkasa memegang HGU seluas 6.200 ha untuk kebun kelapa sawit di Kabupaten Sanggau. Pada 2024 perusahaan menyewakan 6 ha lahan emplasemen di dalam HGU kepada PT Olah Sawit Mandiri, yang kemudian membangun dan memiliki pabrik kelapa sawit (PKS) di atasnya; pabrik selesai pada November 2025 dan seluruh tanah tetap tercatat dalam HGU PT Lembah Hijau. Berdasarkan kutipan tersebut, penetapan subjek PBB-P5L Tahun Pajak 2026 yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Lembah Hijau Perkasa atas bumi seluruh areal HGU dan atas bangunan pabrik, karena pabrik berdiri di atas tanah HGU-nya", B: "PT Olah Sawit Mandiri atas bumi seluruh areal HGU dan atas bangunan pabrik, karena pabriklah yang mengolah hasil kebun", C: "PT Lembah Hijau Perkasa atas bumi areal HGU, dan PT Olah Sawit Mandiri atas bangunan pabrik yang dimilikinya", D: "Negara, karena tanah HGU tetap berstatus tanah negara sehingga dikecualikan dari PBB" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 4 ayat (1) memisahkan dasar subjek atas bumi (hak atau manfaat atas bumi) dan atas bangunan (memiliki, menguasai, atau memanfaatkan bangunan). Pemegang HGU menjadi subjek atas bumi, sedangkan pemilik pabrik menjadi subjek atas bangunan yang dimilikinya; pabrik sudah ada pada keadaan 1 Januari 2026.",
        jejakHitung: [],
        mengapaSalah: { A: "Hak atas tanah tidak menjadikan pemegang HGU subjek atas bangunan milik pihak lain", B: "PT Olah Sawit tidak mempunyai hak atau manfaat atas seluruh 6.200 ha; ia hanya memanfaatkan 6 ha dan memiliki pabrik", D: "Pengecualian tanah negara (Pasal 3 ayat (1) huruf c) hanya untuk tanah negara yang belum dibebani suatu hak; tanah ber-HGU adalah objek" },
        jebakan: "Subjek atas bumi dan subjek atas bangunan pada satu areal dapat berbeda; jangan otomatis menyatukannya pada pemegang hak tanah."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf c UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-002", topik: "B8.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Panas Bumi Lintas Selatan, pemegang izin panas bumi yang baru memasuki tahap eksploitasi, menerima formulir SPOP sektor panas bumi beserta LSPOP untuk wilayah kerjanya pada 18 Mei 2026. Formulir harus diisi dengan jelas, benar, dan lengkap serta ditandatangani. Paling lambat kapan SPOP tersebut harus disampaikan kepada Direktorat Jenderal Pajak?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "17 Juni 2026", B: "18 Juni 2026", C: "15 Juni 2026", D: "31 Desember 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 9 ayat (2) UU PBB: SPOP disampaikan paling lambat 30 hari setelah tanggal diterimanya SPOP oleh subjek pajak; 30 hari dari 18 Mei 2026 jatuh pada 17 Juni 2026.",
        jejakHitung: [ ["SPOP diterima", "18 Mei 2026"], ["Sisa hari Mei (19–31)", "13 hari"], ["Hari di Juni agar genap 30", "17 hari"], ["Batas penyampaian", "17 Juni 2026"] ],
        mengapaSalah: { B: "Menyamakan 30 hari dengan satu bulan kalender", C: "Memakai pola tanggal 15 bulan berikutnya untuk pajak masa (PMK 81/2024), bukan ketentuan SPOP", D: "Mengira SPOP dilaporkan tahunan sampai akhir tahun" },
        jebakan: "Tenggat SPOP dihitung dalam hari (30 hari), bukan bulan, dan dimulai dari tanggal SPOP diterima."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-005", topik: "B8.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2,
      kutipan: "Pasal 4 ayat (4), (5), dan (7) UU PBB (parafrase): Subjek pajak yang ditetapkan sebagai wajib pajak dapat memberikan keterangan secara tertulis kepada Direktur Jenderal Pajak bahwa ia bukan wajib pajak terhadap objek pajak dimaksud. Bila keterangan disetujui, Direktur Jenderal Pajak membatalkan penetapan dalam jangka waktu satu bulan sejak diterimanya surat keterangan. Apabila setelah jangka waktu satu bulan sejak tanggal diterimanya keterangan tidak diberikan keputusan, keterangan yang diajukan itu dianggap disetujui.",
      stem: "Karena pemegang izin atas suatu areal tambang pasir kuarsa di Kabupaten Belitung Timur belum jelas, DJP menetapkan CV Damar Jaya sebagai wajib pajak PBB-P5L atas areal tersebut. Pada 6 April 2026 KPP menerima keterangan tertulis CV Damar Jaya beserta bukti bahwa IUP areal itu telah beralih kepada PT Kuarsa Prima sejak 2024. Sampai 15 Mei 2026 DJP belum memberikan keputusan apa pun. Berdasarkan kutipan tersebut, status CV Damar Jaya per 15 Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tetap sebagai wajib pajak sampai DJP menerbitkan keputusan tertulis yang membatalkan penetapan", B: "Tetap sebagai wajib pajak; satu-satunya jalan adalah mengajukan keberatan atas SPPT dalam tiga bulan", C: "Keterangannya dianggap disetujui sejak lewat satu bulan (6 Mei 2026), sehingga penetapannya sebagai wajib pajak harus dibatalkan", D: "DJP masih berwenang memutus sampai 12 bulan sejak keterangan diterima, yaitu 6 April 2027" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 4 ayat (7) memberi fiksi persetujuan: lewat satu bulan sejak 6 April 2026 (yaitu 6 Mei 2026) tanpa keputusan, keterangan dianggap disetujui, sehingga penetapan CV Damar Jaya sebagai wajib pajak batal.",
        jejakHitung: [ ["Keterangan diterima", "6 April 2026"], ["Batas keputusan (+1 bulan)", "6 Mei 2026"], ["Keputusan per 15 Mei 2026", "belum ada → dianggap disetujui"] ],
        mengapaSalah: { A: "Mengabaikan fiksi hukum 'dianggap disetujui' dalam Pasal 4 ayat (7)", B: "Untuk penetapan subjek tersedia mekanisme keterangan Pasal 4 ayat (4); keberatan adalah upaya atas SPPT/SKP", D: "Jangka 12 bulan adalah batas keputusan keberatan (Pasal 16), bukan keputusan atas keterangan subjek" },
        jebakan: "UU PBB memuat dua fiksi 'dianggap': keterangan bukan wajib pajak (1 bulan, dianggap disetujui) dan keberatan (12 bulan, dianggap diterima)."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (3)–(7) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-009", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-03",
      stem: "Lanjutan data V-B8-03: SKP PBB-P5L 2026 sebesar Rp233.000.000 diterima PT Wana Lestari Abadi pada 2 Juli 2026. Direksi menilai luas areal dalam data administrasi DJP terlalu besar dan berencana mengajukan keberatan, sambil menunda pembayaran sampai keberatan diputus. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan harus diajukan paling lambat 2 Oktober 2026, dan jatuh tempo SKP tertunda sampai keputusan keberatan terbit", B: "Keberatan harus diajukan paling lambat 2 Oktober 2026, sedangkan SKP tetap jatuh tempo 2 Agustus 2026; keberatan tidak menunda kewajiban membayar", C: "Keberatan dapat diajukan paling lambat 2 Januari 2027 (6 bulan), dan SKP jatuh tempo pada tanggal yang sama", D: "Keberatan tidak dapat diajukan atas SKP; perusahaan hanya dapat memohon pengurangan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keberatan atas SKP diajukan dalam 3 bulan sejak SKP diterima (2 Oktober 2026), sedangkan SKP harus dilunasi 1 bulan sejak diterima (2 Agustus 2026). Pengajuan keberatan tidak menunda kewajiban membayar; pembayaran setelah jatuh tempo dikenai denda 2% sebulan.",
        jejakHitung: [ ["SKP diterima", "2 Juli 2026"], ["Jatuh tempo SKP (+1 bulan)", "2 Agustus 2026"], ["Batas keberatan (+3 bulan)", "2 Oktober 2026"] ],
        mengapaSalah: { A: "Keberatan tidak menangguhkan jatuh tempo; menunda bayar memicu denda 2% sebulan", C: "Enam bulan adalah jatuh tempo SPPT, bukan batas keberatan ataupun jatuh tempo SKP", D: "Pasal 15 ayat (1) UU PBB menyebut keberatan dapat diajukan atas SPPT dan SKP" },
        jebakan: "Dua tenggat berjalan bersamaan: 1 bulan untuk melunasi SKP dan 3 bulan untuk keberatan."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-011", topik: "B8.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kopi Dataran Tinggi memegang HGU kebun kopi di Kabupaten Toraja Utara dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif 850 ha dengan nilai tanah Rp4.000/m² dan standar investasi tanaman (SIT) Rp6.500/m²; areal emplasemen 25 ha dengan nilai Rp9.000/m², yang di dalamnya terdapat masjid umum nirlaba 0,4 ha dan pemakaman umum 1,6 ha; bangunan (pabrik pengolahan, gudang, rumah karyawan; tidak termasuk masjid) NJOP Rp7.500.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp197.976.000", B: "Rp87.116.000", C: "Rp494.040.000", D: "Rp197.616.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Luas masjid umum nirlaba dan pemakaman (2 ha) dikeluarkan dari emplasemen sebelum dinilai; areal produktif memakai nilai tanah ditambah SIT; lalu NJOP objek dikurangi NJOPTKP, dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [ ["Areal produktif 8.500.000 m² × (4.000 + 6.500)", "Rp89.250.000.000"], ["Emplasemen kena pajak (25 − 0,4 − 1,6 = 23 ha) 230.000 m² × 9.000", "Rp2.070.000.000"], ["NJOP bumi", "Rp91.320.000.000"], ["+ NJOP bangunan", "Rp98.820.000.000"], ["− NJOPTKP Rp12.000.000", "Rp98.808.000.000"], ["NJKP 40%", "Rp39.523.200.000"], ["PBB 0,5%", "Rp197.616.000"] ],
        mengapaSalah: { A: "Masjid dan pemakaman tidak dikeluarkan dari emplasemen (25 ha × 10.000 × 9.000)", B: "SIT areal produktif tidak ditambahkan", C: "Tarif 0,5% dikalikan langsung ke NJOP neto tanpa NJKP 40% (PP 25/2002)" },
        jebakan: "Selisih jawaban benar dan pengecoh yang lupa mengeluarkan masjid serta pemakaman hanya Rp360.000; keluarkan dulu luas objek yang dikecualikan sebelum mengalikan nilai per m²."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a dan b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
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
      id: "B8-017", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 6 ayat (3) UU PBB: Dasar penghitungan pajak adalah yang ditetapkan serendah-rendahnya 20% dan setinggi-tingginya 100% dari Nilai Jual Objek Pajak. PP 25/2002 (parafrase): NJKP ditetapkan 40% dari NJOP untuk objek perkebunan, kehutanan, dan pertambangan; untuk objek lainnya 40% bila NJOP sama dengan atau lebih dari Rp1.000.000.000, dan 20% bila NJOP kurang dari Rp1.000.000.000.",
      stem: "PT Bahari Kerapu Sejahtera menjalankan usaha pembudidayaan ikan kerapu dengan keramba di perairan laut Teluk Saleh, Kabupaten Sumbawa, yang diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (areal perairan budidaya) Rp540.000.000 dan NJOP bangunan (keramba berjangkar tetap dan rumah jaga berpancang) Rp220.000.000. Perusahaan tidak memiliki objek PBB-P5L lain. Berdasarkan kutipan tersebut, PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.496.000", B: "Rp760.000", C: "Rp3.740.000", D: "Rp748.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya tidak termasuk kelompok perkebunan, kehutanan, atau pertambangan, sehingga NJKP bergantung pada batas NJOP Rp1 miliar; NJOP Rp760.000.000 memakai NJKP 20%.",
        jejakHitung: [ ["NJOP objek 540.000.000 + 220.000.000", "Rp760.000.000"], ["NJOP < Rp1.000.000.000 → NJKP", "20%"], ["NJOP − NJOPTKP", "Rp748.000.000"], ["NJKP 20%", "Rp149.600.000"], ["PBB 0,5%", "Rp748.000"] ],
        mengapaSalah: { A: "NJKP 40% otomatis hanya untuk perkebunan, kehutanan, dan pertambangan; objek lainnya di bawah Rp1 miliar memakai 20%", B: "NJOPTKP Rp12.000.000 lupa dikurangkan (760.000.000 × 0,1%)", C: "Tarif dikalikan ke NJOP neto tanpa NJKP" },
        jebakan: "Huruf 'L' dalam P5L tidak otomatis NJKP 40%; cek dulu NJOP objek terhadap Rp1 miliar."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Penggolongan pembudidayaan ikan di perairan laut sebagai sektor lainnya PBB-P5L (stem menyatakannya sebagai data administrasi) dan penerapan NJKP 20% untuk objek lainnya ber-NJOP di bawah Rp1 miliar diambil dari PP 25/2002 dan PMK 186/2019 s.t.d.d. PMK 234/2022 tanpa pengecekan teks primer pada sesi riset."
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
      id: "B8-021", topik: "B8.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 6 ayat (1) dan (2) UU PBB: Dasar pengenaan pajak adalah Nilai Jual Objek Pajak. Besarnya Nilai Jual Objek Pajak ditetapkan setiap tiga tahun oleh Menteri Keuangan, kecuali untuk daerah tertentu ditetapkan setiap tahun sesuai dengan perkembangan daerahnya.",
      stem: "NJOP bumi kebun PT Sawit Andalas naik dari Rp180.000.000.000 dalam SPPT 2025 menjadi Rp228.000.000.000 dalam SPPT 2026 yang diterima pada 9 Maret 2026, karena pembukaan jalan provinsi dan kenaikan harga tanah di sekitarnya. Direksi berpendapat kenaikan itu batal karena NJOP 'hanya boleh berubah tiga tahun sekali', dan berniat hanya membayar sebesar PBB 2025. Berdasarkan kutipan tersebut, tanggapan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pendapat direksi tepat; kenaikan NJOP sebelum tiga tahun batal demi hukum sehingga cukup membayar sesuai NJOP 2025", B: "Pendapat direksi tidak tepat; NJOP ditentukan sendiri oleh wajib pajak melalui SPOP sehingga perusahaan dapat menurunkannya dalam SPOP 2026", C: "Pendapat direksi tidak tepat; atas NJOP hanya tersedia permohonan pengurangan, bukan keberatan", D: "Pendapat direksi tidak tepat; NJOP dapat ditetapkan setiap tahun untuk daerah tertentu. Bila tidak setuju dengan NJOP, perusahaan dapat mengajukan keberatan paling lambat 9 Juni 2026, sambil tetap melunasi SPPT paling lambat 9 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 6 ayat (2) membolehkan penetapan NJOP setiap tahun untuk daerah tertentu. Sengketa nilai dalam SPPT diselesaikan melalui keberatan Pasal 15 dalam 3 bulan sejak SPPT diterima (9 Juni 2026), dan keberatan tidak menunda kewajiban melunasi SPPT (jatuh tempo 9 September 2026).",
        jejakHitung: [ ["SPPT diterima", "9 Maret 2026"], ["Batas keberatan (+3 bulan)", "9 Juni 2026"], ["Jatuh tempo SPPT (+6 bulan)", "9 September 2026"] ],
        mengapaSalah: { A: "Frasa 'kecuali untuk daerah tertentu ditetapkan setiap tahun' diabaikan", B: "SPOP memuat data objek; NJOP ditetapkan atas nama Menteri Keuangan, bukan oleh wajib pajak", C: "Keberatan atas SPPT, termasuk nilai NJOP di dalamnya, diatur Pasal 15 ayat (1)" },
        jebakan: "Frasa pengecualian 'kecuali ... setiap tahun' sering terlewat ketika membaca kutipan Pasal 6 ayat (2)."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1)–(2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-023", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-01",
      stem: "Data untuk soal V-B8-01: PT Sawit Lestari Nusantara memegang HGU kebun kelapa sawit di Kabupaten Seruyan dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif (tanaman menghasilkan) 3.200 ha, nilai tanah Rp4.500/m², SIT kelapa sawit Rp5.800/m²; areal belum produktif (tanaman belum menghasilkan) 600 ha, nilai tanah Rp4.500/m²; areal emplasemen 45 ha, Rp15.000/m²; areal tidak produktif (rawa) 155 ha, Rp1.200/m²; bangunan (pabrik kelapa sawit, kantor kebun, perumahan karyawan, jalan kebun) NJOP Rp62.400.000.000. Berapa NJOP bumi seluruhnya?",
      kataKualifikasi: [],
      opsi: { A: "Rp365.210.000.000", B: "Rp400.010.000.000", C: "Rp179.610.000.000", D: "Rp363.350.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NJOP bumi = jumlah NJOP tiap jenis areal; SIT hanya menambah nilai areal produktif (tanaman menghasilkan), sedangkan areal lain dinilai dengan nilai tanah per m².",
        jejakHitung: [ ["Areal produktif 32.000.000 m² × (4.500 + 5.800)", "Rp329.600.000.000"], ["Belum produktif 6.000.000 m² × 4.500", "Rp27.000.000.000"], ["Emplasemen 450.000 m² × 15.000", "Rp6.750.000.000"], ["Tidak produktif 1.550.000 m² × 1.200", "Rp1.860.000.000"], ["NJOP bumi", "Rp365.210.000.000"] ],
        mengapaSalah: { B: "SIT ikut ditambahkan pada areal belum produktif (+Rp34.800.000.000)", C: "SIT areal produktif terlupa (−Rp185.600.000.000)", D: "Areal tidak produktif dianggap bukan objek; hanya objek Pasal 3 yang dikecualikan" },
        jebakan: "1 ha = 10.000 m²; konversi satuan dan penempatan SIT adalah sumber selisih terbesar."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 6 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Rumus areal produktif (nilai tanah + SIT) dan penilaian areal belum produktif tanpa SIT mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer."
    },
    {
      id: "B8-024", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-01",
      stem: "Lanjutan data V-B8-01 (PT Sawit Lestari Nusantara, satu-satunya objek: areal produktif 3.200 ha dengan nilai tanah Rp4.500/m² dan SIT Rp5.800/m²; belum produktif 600 ha Rp4.500/m²; emplasemen 45 ha Rp15.000/m²; rawa tidak produktif 155 ha Rp1.200/m²; bangunan Rp62.400.000.000). PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp855.196.000", B: "Rp924.796.000", C: "Rp730.396.000", D: "Rp2.137.990.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB = 0,5% × 40% × (NJOP bumi + NJOP bangunan − NJOPTKP); bangunan dalam kawasan kebun, termasuk perumahan dan jalan, ikut menjadi objek PBB-P5L.",
        jejakHitung: [ ["NJOP bumi (lihat soal sebelumnya)", "Rp365.210.000.000"], ["+ NJOP bangunan", "Rp427.610.000.000"], ["− NJOPTKP", "Rp427.598.000.000"], ["NJKP 40%", "Rp171.039.200.000"], ["PBB 0,5%", "Rp855.196.000"] ],
        mengapaSalah: { B: "SIT ikut dibebankan pada areal belum produktif (NJOP bumi Rp400.010.000.000)", C: "NJOP bangunan pabrik, kantor, perumahan, dan jalan kebun tidak dijumlahkan", D: "Tarif 0,5% dikalikan tanpa NJKP 40%" },
        jebakan: "Soal panjang ini menuntut lima langkah; kesalahan satu langkah selalu muncul sebagai salah satu opsi."
      },
      dasarHukum: [ { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Rumus areal produktif (nilai tanah + SIT) dan penilaian areal belum produktif tanpa SIT mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer."
    },
    {
      id: "B8-025", topik: "B8.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-01",
      stem: "Lanjutan data V-B8-01: SPPT PBB-P5L 2026 PT Sawit Lestari Nusantara sebesar Rp855.196.000 diterima pada 16 Maret 2026. Karena antrean persetujuan internal, PBB baru dibayar penuh pada 2 Oktober 2026. Untuk PPh Badan 2026 (tahun buku kalender), manajer pajak menelaah denda dan perlakuan fiskalnya. Asumsikan bagian dari bulan dihitung satu bulan penuh. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Denda Rp17.103.920 ditagih dengan STP; PBB dan denda sama-sama dapat dibiayakan sebesar Rp872.299.920", B: "Denda Rp34.207.840 untuk 2 bulan; PBB dapat dibiayakan, dendanya tidak", C: "Denda Rp17.103.920 ditagih dengan STP; PBB Rp855.196.000 dapat dibiayakan, sedangkan dendanya tidak dapat dikurangkan", D: "Dikenai sanksi bunga Pasal 9 ayat (2a) UU KUP dengan tarif bunga KMK; PBB tidak dapat dibiayakan karena merupakan pajak" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo SPPT 6 bulan sejak diterima (16 September 2026); keterlambatan 16 hari dikenai denda 2% untuk satu bulan dan ditagih dengan STP. Dalam PPh Badan, PBB adalah pajak selain PPh yang dapat dibiayakan, sedangkan sanksi administrasi tidak.",
        jejakHitung: [ ["SPPT diterima", "16 Maret 2026"], ["Jatuh tempo (+6 bulan)", "16 September 2026"], ["Terlambat 16 hari", "dihitung 1 bulan"], ["Denda 2% × 855.196.000", "Rp17.103.920"], ["Biaya fiskal PBB (Pasal 6 ayat (1) huruf a UU PPh)", "Rp855.196.000"], ["Denda (Pasal 9 ayat (1) huruf k UU PPh)", "tidak dapat dikurangkan"] ],
        mengapaSalah: { A: "Pasal 9 ayat (1) huruf k UU PPh melarang pembebanan sanksi administrasi berupa denda", B: "16 September–2 Oktober 2026 kurang dari satu bulan sehingga dihitung satu bulan, bukan dua", D: "Denda PBB diatur Pasal 11 ayat (3) UU PBB (2% sebulan), bukan Pasal 9 ayat (2a) UU KUP; Pasal 6 ayat (1) huruf a UU PPh membolehkan pajak selain PPh dibiayakan" },
        jebakan: "Soal lintas kelompok: sanksinya menurut UU PBB, perlakuan biayanya menurut UU PPh."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh" }, { pasal: "Pasal 9 ayat (1) huruf k UU PPh" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-026", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Wana Akasia Prima memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Pelalawan dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal produktif (tanaman pokok siap tebang) 12.000 ha dengan nilai tanah Rp1.800/m² dan SIT hutan tanaman Rp2.400/m²; areal belum produktif (tanaman muda) 3.500 ha dengan nilai tanah Rp1.800/m²; areal emplasemen/base camp 20 ha Rp8.000/m²; bangunan (kantor lapangan, mess, jalan angkut, jembatan) NJOP Rp9.600.000.000. Dengan pola penilaian hutan tanaman (SIT hanya pada areal produktif), PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.156.376.000", B: "Rp1.324.376.000", C: "Rp580.376.000", D: "Rp578.188.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Areal produktif dinilai nilai tanah ditambah SIT; areal belum produktif dan emplasemen hanya nilai tanah; NJOP bumi ditambah bangunan, dikurangi NJOPTKP, lalu dikali 40% dan 0,5%.",
        jejakHitung: [ ["Produktif 120.000.000 m² × (1.800 + 2.400)", "Rp504.000.000.000"], ["Belum produktif 35.000.000 m² × 1.800", "Rp63.000.000.000"], ["Emplasemen 200.000 m² × 8.000", "Rp1.600.000.000"], ["NJOP bumi", "Rp568.600.000.000"], ["+ Bangunan", "Rp578.200.000.000"], ["− NJOPTKP", "Rp578.188.000.000"], ["× 40% × 0,5%", "Rp1.156.376.000"] ],
        mengapaSalah: { B: "SIT ikut ditambahkan pada areal belum produktif (+Rp84.000.000.000 NJOP)", C: "SIT areal produktif terlupa (−Rp288.000.000.000 NJOP)", D: "Memakai NJKP 20%, padahal sektor kehutanan 40%" },
        jebakan: "Hektare yang besar membuat salah konversi m² atau salah tempat SIT berlipat menjadi selisih ratusan juta rupiah."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Pola penilaian sektor perhutanan (hutan tanaman: nilai tanah + SIT pada areal produktif; hutan alam: pendekatan lain) mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; soal menyatakan pola penilaian di stem."
    },
    {
      id: "B8-027", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Bara Mahakam Lestari (IUP operasi produksi batubara; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian Tahun Pajak 2026: permukaan bumi areal produktif (pit, stockpile, jalan tambang) 1.800 ha dengan nilai Rp5.000/m²; permukaan bumi areal belum/tidak produktif 6.200 ha dengan nilai Rp2.500/m²; tubuh bumi dinilai dengan angka kapitalisasi × hasil bersih, dengan hasil bersih Rp48.000.000.000 dan angka kapitalisasi 9,5 (data penilaian); bangunan (conveyor, bengkel, mess, dermaga khusus) NJOP Rp84.000.000.000. PBB-P5L terutang 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp657.976.000", B: "Rp753.976.000", C: "Rp784.988.000", D: "Rp1.569.976.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bumi objek pertambangan meliputi permukaan bumi dan tubuh bumi di bawahnya (Pasal 1 angka 1 UU PBB); NJOP tubuh bumi = 9,5 × Rp48.000.000.000, lalu dijumlahkan dengan permukaan bumi dan bangunan.",
        jejakHitung: [ ["Permukaan produktif 18.000.000 m² × 5.000", "Rp90.000.000.000"], ["Permukaan nonproduktif 62.000.000 m² × 2.500", "Rp155.000.000.000"], ["Tubuh bumi 9,5 × 48.000.000.000", "Rp456.000.000.000"], ["NJOP bumi", "Rp701.000.000.000"], ["+ Bangunan", "Rp785.000.000.000"], ["− NJOPTKP", "Rp784.988.000.000"], ["× 40% × 0,5%", "Rp1.569.976.000"] ],
        mengapaSalah: { A: "Tubuh bumi terlupa sehingga hanya permukaan dan bangunan yang dihitung", B: "Hasil bersih dipakai langsung tanpa dikalikan angka kapitalisasi", C: "Memakai NJKP 20%, padahal sektor pertambangan 40%" },
        jebakan: "Pada sektor pertambangan, porsi terbesar NJOP sering justru dari tubuh bumi, bukan permukaan."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Rumus tubuh bumi pertambangan (angka kapitalisasi × hasil bersih) dan angka 9,5 dipakai sebagai data soal; rumus dan parameter resmi menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer."
    },
    {
      id: "B8-028", topik: "B8.4", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Laporan kebun PT Karet Mulia per 1 Januari 2026 memuat: (1) blok karet umur 9 tahun yang sedang disadap; (2) blok karet hasil peremajaan umur 2 tahun yang belum disadap; (3) rawa dan tebing curam yang tidak dapat ditanami; (4) lokasi pabrik crumb rubber, kantor, dan perumahan karyawan di dalam HGU. Dalam penilaian NJOP bumi sektor perkebunan, pengelompokan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2) areal produktif dengan tambahan SIT karena sama-sama sudah ditanami; (3) areal tidak produktif; (4) areal emplasemen", B: "(1) areal produktif dengan tambahan SIT; (2) areal belum produktif; (3) areal tidak produktif; (4) areal emplasemen", C: "(1) areal produktif; (2) areal belum produktif dengan tambahan SIT; (3) dikecualikan dari PBB; (4) areal emplasemen", D: "(1) areal produktif; (2) areal belum produktif; (3) areal tidak produktif; (4) objek PBB-P2 karena berupa hunian dan pabrik" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Tanaman yang sudah menghasilkan adalah areal produktif (nilai tanah + SIT); tanaman yang belum menghasilkan adalah areal belum produktif; lahan yang tidak dapat ditanami adalah areal tidak produktif (tetap objek); pabrik, kantor, dan perumahan di dalam HGU adalah areal emplasemen.",
        jejakHitung: [],
        mengapaSalah: { A: "Sudah ditanami tidak sama dengan menghasilkan; SIT melekat pada areal produktif", C: "Rawa dan tebing di dalam HGU bukan objek Pasal 3; areal tidak produktif tetap dinilai dengan nilai tanah", D: "Pabrik dan perumahan di dalam kawasan HGU adalah emplasemen PBB-P5L, bukan PBB-P2" },
        jebakan: "'Belum produktif' dan 'tidak produktif' berbeda: yang pertama sudah ditanami tetapi belum menghasilkan, yang kedua tidak dapat ditanami."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Nama dan isi klasifikasi areal perkebunan serta penempatan SIT hanya pada areal produktif mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer."
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
      id: "B8-030", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Samudra Energi Timur adalah kontraktor kontrak kerja sama migas dengan wilayah kerja lepas pantai (offshore) di perairan Indonesia Selat Makassar dan tidak memiliki objek PBB-P5L lain. Data penilaian Tahun Pajak 2026 per 1 Januari 2026: permukaan bumi berupa areal perairan produktif (lokasi anjungan dan sumur) 150 ha dengan nilai Rp2.000/m²; areal perairan wilayah kerja lainnya 48.000 ha dengan nilai Rp50/m²; NJOP tubuh bumi tahap eksploitasi hasil penilaian DJP Rp860.000.000.000; anjungan produksi lepas pantai yang dipancang ke dasar laut Rp540.000.000.000; pipa penyalur bawah laut Rp210.000.000.000; serta dua kapal pemasok (supply vessel) milik sendiri senilai Rp95.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.463.976.000", B: "Rp1.553.976.000", C: "Rp3.273.976.000", D: "Rp3.219.976.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bumi meliputi permukaan bumi (termasuk perairan) dan tubuh bumi di bawahnya; anjungan yang dipancang ke dasar laut dan pipa bawah laut adalah konstruksi teknik yang dilekatkan tetap pada perairan sehingga merupakan bangunan, sedangkan kapal pemasok adalah benda bergerak. Jumlahnya dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [ ["Perairan produktif 1.500.000 m² × 2.000", "Rp3.000.000.000"], ["Perairan lainnya 480.000.000 m² × 50", "Rp24.000.000.000"], ["Tubuh bumi", "Rp860.000.000.000"], ["NJOP bumi", "Rp887.000.000.000"], ["Bangunan: anjungan 540.000.000.000 + pipa 210.000.000.000 (kapal dikeluarkan)", "Rp750.000.000.000"], ["NJOP objek", "Rp1.637.000.000.000"], ["− NJOPTKP", "Rp1.636.988.000.000"], ["× 40% × 0,5%", "Rp3.273.976.000"] ],
        mengapaSalah: { A: "Kapal pemasok ikut dihitung sebagai bangunan, padahal benda bergerak (1.731.988.000.000 × 0,2%)", B: "Tubuh bumi tidak dihitung (776.988.000.000 × 0,2%)", D: "Areal perairan dianggap bukan bumi, padahal permukaan bumi meliputi perairan pedalaman dan laut wilayah (1.609.988.000.000 × 0,2%)" },
        jebakan: "Pada objek offshore, laut adalah 'bumi' dan anjungan serta pipa bawah laut adalah 'bangunan'; yang dikeluarkan hanya benda bergerak seperti kapal."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Pembagian areal perairan offshore dan cara penilaian tubuh bumi migas menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer; nilai per m² dan NJOP tubuh bumi diberikan sebagai data penilaian di stem."
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
      id: "B8-032", topik: "B8.5", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L Tahun Pajak 2026 PT Teh Puncak Lestari diterbitkan pada 5 Februari 2026 dan diterima perusahaan pada 27 Februari 2026. Paling lambat kapan PBB menurut SPPT tersebut harus dilunasi?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "27 Agustus 2026", B: "5 Agustus 2026", C: "27 Maret 2026", D: "15 Maret 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 11 ayat (1) UU PBB: pajak terutang berdasarkan SPPT harus dilunasi paling lambat 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak.",
        jejakHitung: [ ["SPPT diterima", "27 Februari 2026"], ["+ 6 bulan", "27 Agustus 2026"] ],
        mengapaSalah: { B: "Jangka 6 bulan dihitung sejak SPPT diterima, bukan sejak diterbitkan", C: "Satu bulan adalah jatuh tempo SKP dan STP", D: "Tanggal 15 bulan berikutnya adalah batas setor pajak masa (PMK 81/2024), tidak berlaku untuk SPPT" },
        jebakan: "Titik awal hitung adalah tanggal diterima, bukan tanggal terbit."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-035", topik: "B8.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Nusa Kabel Laut memiliki kabel listrik bawah laut antarprovinsi yang melintasi Selat Bali dan diadministrasikan sebagai objek PBB-P5L sektor lainnya; perusahaan tidak memiliki objek PBB-P5L lain. SPPT Tahun Pajak 2026 memuat NJOP bumi (koridor perairan yang digunakan kabel) Rp1.150.000.000 dan NJOP bangunan (kabel bawah laut yang dipasang tetap di dasar laut) Rp86.400.000.000. SPPT diterima pada 20 Maret 2026, dan PBB baru dilunasi seluruhnya pada 25 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Jumlah yang harus dibayar perusahaan atas PBB-P5L 2026 (pokok ditambah denda yang ditagih dengan STP) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp92.790.280", B: "Rp185.580.560", C: "Rp182.079.040", D: "Rp218.845.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Objek sektor lainnya memakai NJKP menurut batas NJOP Rp1 miliar; NJOP objek Rp87,55 miliar sehingga NJKP 40%. SPPT jatuh tempo 6 bulan sejak diterima (20 September 2026); pelunasan 25 November 2026 terlambat 2 bulan 5 hari yang dihitung 3 bulan, sehingga denda 3 × 2% dari pokok.",
        jejakHitung: [ ["NJOP objek 1.150.000.000 + 86.400.000.000", "Rp87.550.000.000"], ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"], ["(87.550.000.000 − 12.000.000) × 40% × 0,5%", "Rp175.076.000"], ["Jatuh tempo SPPT (20 Maret + 6 bulan)", "20 September 2026"], ["20 September s.d. 25 November 2026", "2 bulan 5 hari → 3 bulan"], ["Denda 3 × 2% × 175.076.000", "Rp10.504.560"], ["Pokok + denda", "Rp185.580.560"] ],
        mengapaSalah: { A: "Memakai NJKP 20% karena mengira objek sektor lainnya selalu 20%; 20% hanya untuk NJOP di bawah Rp1 miliar (pokok Rp87.538.000 + denda Rp5.252.280)", C: "Bagian bulan dibulatkan ke bawah menjadi 2 bulan (denda Rp7.003.040)", D: "Memakai denda 25% milik SKP Pasal 10 ayat (3) untuk keterlambatan bayar (175.076.000 × 125%)" },
        jebakan: "Dua jebakan berlapis: NJKP sektor lainnya ditentukan besarnya NJOP, dan denda telat bayar SPPT dihitung per bulan sejak jatuh tempo 6 bulan."
      },
      dasarHukum: [ { pasal: "PP 25/2002" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Penggolongan kabel bawah laut sebagai objek PBB-P5L sektor lainnya dan cara penilaian koridor perairannya menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer (NJOP diberikan di stem); cara menghitung bagian bulan pada denda Pasal 11 ayat (3) dinyatakan sebagai asumsi di stem."
    },
    {
      id: "B8-036", topik: "B8.5", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Pada 2026 PT Bumi Kencana Agro terlambat tepat satu bulan atas dua kewajiban: (i) menyetor PPh Pasal 25 Masa Juli 2026 sebesar Rp50.000.000; (ii) melunasi SPPT PBB-P5L 2026 sebesar Rp50.000.000 setelah jatuh temponya. Pernyataan yang tepat mengenai sanksinya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keduanya dikenai bunga 2% sebulan karena UU HPP menyeragamkan sanksi seluruh jenis pajak pusat", B: "Keduanya dikenai tarif bunga per bulan KMK karena PBB-P5L adalah pajak pusat yang tunduk pada UU KUP", C: "(i) bunga tarif KMK per bulan; (ii) denda 25% dari pokok PBB karena terlambat membayar SPPT", D: "(i) bunga tarif KMK per bulan (Pasal 9 ayat (2a) UU KUP); (ii) denda 2% sebulan (Pasal 11 ayat (3) UU PBB) = Rp1.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "UU HPP mengubah sanksi bunga UU KUP menjadi tarif berbasis suku bunga acuan, tetapi tidak mengubah UU PBB; denda keterlambatan PBB tetap 2% sebulan paling lama 24 bulan. Bunga Pasal 9 ayat (2a) UU KUP memakai tarif per bulan dari KMK (suku bunga acuan + 5%, dibagi 12) dan ditagih dengan STP; denda PBB 2% × Rp50.000.000 × 1 bulan = Rp1.000.000 ditagih dengan STP PBB.",
        jejakHitung: [ ["Denda PBB 2% × 1 bulan × 50.000.000", "Rp1.000.000"] ],
        mengapaSalah: { A: "Bunga 2% flat untuk UU KUP adalah ketentuan sebelum UU HPP", B: "UU PBB mengatur sendiri denda keterlambatan (Pasal 11 ayat (3)) sebagai ketentuan khusus", C: "Denda 25% adalah sanksi dalam SKP (Pasal 10), bukan keterlambatan bayar" },
        jebakan: "Soal lintas kelompok: KUP pasca-UU HPP vs UU PBB yang tidak berubah."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-037", topik: "B8.6", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-02",
      kutipan: "Pasal 15 UU PBB (parafrase): Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan disertai alasan-alasan yang jelas. Keberatan harus diajukan dalam jangka waktu tiga bulan sejak tanggal diterimanya SPPT atau SKP oleh wajib pajak, kecuali apabila wajib pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya.",
      stem: "Data untuk soal V-B8-02: PT Andalan Bara Utama (IUP operasi produksi batubara di Kabupaten Tanah Bumbu) menerima SPPT PBB-P5L 2026 sebesar Rp1.842.500.000 pada 23 Februari 2026. Perusahaan menilai luas areal produktif dalam SPPT terlalu besar karena 600 ha bekas tambang telah direklamasi dan tidak ditambang lagi sejak 2025. Berdasarkan kutipan tersebut, paling lambat kapan dan dalam bentuk apa keberatan harus diajukan?",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Surat keberatan dapat diajukan sampai 23 Agustus 2026, bersamaan dengan jatuh tempo SPPT", B: "Surat keberatan berbahasa Indonesia dengan alasan yang jelas harus diajukan paling lambat 23 Mei 2026", C: "Keberatan cukup disampaikan secara lisan kepada petugas KPP paling lambat 23 Mei 2026", D: "Surat keberatan dapat diajukan sampai 23 Februari 2027, satu tahun sejak SPPT diterima" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Keberatan atas SPPT harus tertulis, berbahasa Indonesia, beralasan jelas, dan diajukan dalam 3 bulan sejak SPPT diterima (23 Mei 2026).",
        jejakHitung: [ ["SPPT diterima", "23 Februari 2026"], ["+ 3 bulan", "23 Mei 2026"] ],
        mengapaSalah: { A: "Enam bulan adalah jatuh tempo pembayaran SPPT, bukan batas keberatan", C: "Pasal 15 ayat (2) mensyaratkan keberatan tertulis", D: "Dua belas bulan adalah batas DJP memutus keberatan, bukan batas mengajukan" },
        jebakan: "Tiga angka bulan yang mirip: 3 (keberatan), 6 (jatuh tempo SPPT), 12 (keputusan)."
      },
      dasarHukum: [ { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-038", topik: "B8.6", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-02",
      kutipan: "Pasal 16 UU PBB (parafrase): Direktur Jenderal Pajak dalam jangka waktu paling lama 12 bulan sejak tanggal diterimanya surat keberatan harus memberi keputusan. Keputusan dapat berupa menerima seluruhnya atau sebagian, menolak, atau menambah besarnya jumlah pajak yang terutang. Apabila jangka waktu itu telah lewat dan Direktur Jenderal Pajak tidak memberi suatu keputusan, keberatan yang diajukan dianggap diterima.",
      stem: "Lanjutan data V-B8-02: Surat keberatan PT Andalan Bara Utama atas SPPT 2026 (Rp1.842.500.000, diterima 23 Februari 2026) diterima KPP pada 4 Mei 2026, dan perusahaan melunasi SPPT pada jatuh temponya. Berdasarkan kutipan tersebut, paling lama kapan DJP harus memberi keputusan, dan apa akibatnya bila batas itu lewat?",
      kataKualifikasi: ["paling lama"],
      opsi: { A: "DJP wajib memberi keputusan paling lambat 4 November 2026; bila lewat, keberatan dianggap ditolak", B: "DJP wajib memberi keputusan paling lambat 4 Mei 2027; bila lewat, keberatan dianggap ditolak sehingga perusahaan langsung dapat banding", C: "DJP wajib memberi keputusan paling lambat 4 Mei 2027; bila lewat tanpa keputusan, keberatan dianggap diterima", D: "DJP wajib memberi keputusan paling lambat 23 Februari 2027, yaitu 12 bulan sejak SPPT diterima" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Jangka 12 bulan dihitung sejak surat keberatan diterima (4 Mei 2026), sehingga batasnya 4 Mei 2027; bila lewat tanpa keputusan, keberatan dianggap diterima (Pasal 16 UU PBB).",
        jejakHitung: [ ["Surat keberatan diterima", "4 Mei 2026"], ["+ 12 bulan", "4 Mei 2027"] ],
        mengapaSalah: { A: "Batas keputusan 12 bulan, bukan 6 bulan, dan akibatnya dianggap diterima", B: "Fiksi hukum Pasal 16 UU PBB adalah 'dianggap diterima', bukan ditolak", D: "Titik awal 12 bulan adalah tanggal surat keberatan diterima, bukan tanggal SPPT diterima" },
        jebakan: "Diamnya DJP menguntungkan wajib pajak: dianggap diterima."
      },
      dasarHukum: [ { pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-039", topik: "B8.6", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-02",
      stem: "Lanjutan data V-B8-02: Keputusan keberatan atas SPPT 2026 PT Andalan Bara Utama diterima perusahaan pada 8 Februari 2027. Alih-alih mengurangi, keputusan itu menambah PBB terutang karena penelitian lapangan menemukan bukaan tambang baru per 1 Januari 2026 yang belum dilaporkan dalam SPOP. Upaya hukum yang tersedia dan batas waktunya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan kedua kepada DJP paling lambat 8 Mei 2027 karena keputusan menambah pajak", B: "Gugatan ke Pengadilan Pajak paling lambat 30 hari sejak keputusan diterima", C: "Banding ke Pengadilan Pajak paling lambat 8 Agustus 2027 (6 bulan sejak keputusan diterima)", D: "Banding ke Pengadilan Pajak paling lambat 8 Mei 2027 (3 bulan sejak keputusan diterima)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Keputusan keberatan, termasuk yang menambah pajak (Pasal 16 UU PBB), dapat diajukan banding ke Pengadilan Pajak dalam 3 bulan sejak keputusan diterima (Pasal 35 ayat (2) UU 14/2002).",
        jejakHitung: [ ["Keputusan keberatan diterima", "8 Februari 2027"], ["+ 3 bulan", "8 Mei 2027"] ],
        mengapaSalah: { A: "Tidak ada keberatan kedua atas keputusan keberatan; upaya berikutnya adalah banding", B: "Gugatan 30 hari dipakai untuk pelaksanaan penagihan atau keputusan selain keputusan keberatan", C: "Jangka banding 3 bulan, bukan 6 bulan" },
        jebakan: "Keputusan keberatan boleh menambah pajak; jalurnya tetap banding dalam 3 bulan."
      },
      dasarHukum: [ { pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" } ],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "B8-040", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "SPPT PBB-P5L 2026 PT Cahaya Kebun diterima pada 10 Maret 2026. Pada April–Juni 2026 banjir besar merendam kantor kebun dan memutus akses jalan sehingga dokumen pendukung tidak dapat dikumpulkan; badan penanggulangan bencana daerah menerbitkan surat keterangan status tanggap darurat. Perusahaan menyampaikan surat keberatan atas luas areal dalam SPPT pada 14 Juli 2026. Penilaian yang tepat atas keberatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keberatan dapat dipertimbangkan walaupun lewat 10 Juni 2026, sepanjang perusahaan dapat menunjukkan bahwa keterlambatan terjadi karena keadaan di luar kekuasaannya", B: "Keberatan pasti tidak dapat diterima karena batas 3 bulan bersifat mutlak tanpa pengecualian", C: "Keberatan tepat waktu karena batasnya 6 bulan sejak SPPT diterima, yaitu 10 September 2026", D: "Keberatan otomatis dialihkan menjadi permohonan pengurangan karena diajukan setelah batas waktu" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Batas normal keberatan adalah 10 Juni 2026, tetapi Pasal 15 UU PBB memberi pengecualian bila wajib pajak dapat menunjukkan bahwa jangka waktu tidak dapat dipenuhi karena keadaan di luar kekuasaannya; surat keterangan tanggap darurat menjadi bukti pendukung.",
        jejakHitung: [ ["SPPT diterima", "10 Maret 2026"], ["Batas normal (+3 bulan)", "10 Juni 2026"], ["Keberatan diajukan", "14 Juli 2026 (perlu bukti keadaan di luar kekuasaan)"] ],
        mengapaSalah: { B: "Frasa 'kecuali apabila wajib pajak dapat menunjukkan ...' diabaikan", C: "Enam bulan adalah jatuh tempo pembayaran, bukan batas keberatan", D: "Tidak ada pengalihan otomatis; pengurangan adalah permohonan tersendiri dengan dasar Pasal 19" },
        jebakan: "Kata 'kecuali' dalam Pasal 15 UU PBB membuka ruang keberatan terlambat yang beralasan."
      },
      dasarHukum: [ { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-043", topik: "B8.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Pada 2026 PT Bumi Sawit Prima mengalami tiga kejadian PBB-P5L: (i) SPPT 2026 kebun A sebesar Rp74.000.000 terbayar dua kali karena kesalahan sistem pembayaran internal; (ii) keputusan keberatan menurunkan PBB 2025 kebun B dari Rp410.000.000 menjadi Rp365.000.000, padahal Rp410.000.000 telah dilunasi; (iii) perusahaan masih memiliki tunggakan STP PBB 2025 kebun C sebesar Rp20.000.000. Bila kelebihan pembayaran diperhitungkan lebih dahulu dengan utang pajak yang masih ada, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp119.000.000", B: "Rp54.000.000", C: "Rp25.000.000", D: "Rp99.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kelebihan berasal dari pembayaran ganda dan dari keputusan keberatan yang menurunkan pajak yang sudah dibayar; jumlahnya diperhitungkan dahulu dengan tunggakan STP sebelum dikembalikan.",
        jejakHitung: [ ["Pembayaran ganda kebun A", "Rp74.000.000"], ["Kelebihan akibat keputusan keberatan kebun B (410 − 365 juta)", "Rp45.000.000"], ["Jumlah kelebihan", "Rp119.000.000"], ["Diperhitungkan dengan tunggakan STP kebun C", "(Rp20.000.000)"], ["Dikembalikan", "Rp99.000.000"] ],
        mengapaSalah: { A: "Tunggakan STP tidak diperhitungkan lebih dahulu", B: "Kelebihan dari keputusan keberatan kebun B terlupa", C: "Pembayaran ganda kebun A terlupa" },
        jebakan: "Restitusi selalu didahului kompensasi ke utang pajak yang masih ada."
      },
      dasarHukum: [ { pasal: "Pasal 16 UU PBB (keputusan keberatan yang menurunkan pajak)", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024 (pengembalian kelebihan pembayaran pajak)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Tata cara pengembalian kelebihan pembayaran PBB (jenis keputusan, jangka waktu, dan mekanisme Coretax menurut PMK 81/2024) belum dicek ke teks primer; soal hanya menguji prinsip bahwa kelebihan diperhitungkan dahulu dengan utang pajak."
    },
    {
      id: "B8-044", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "STP PBB-P5L PT Sumber Rimba Jaya sebesar Rp127.280.000 (pokok dan denda) diterima pada 3 Agustus 2026 dan tidak dilunasi. KPP melanjutkan dengan tindakan penagihan aktif berdasarkan UU PPSP dan peraturan pelaksananya. Rangkaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP jatuh tempo 3 Februari 2027 (6 bulan) → Surat Paksa langsung → lelang 14 hari kemudian", B: "STP jatuh tempo 3 September 2026 → Surat Teguran setelah lewat 7 hari dari jatuh tempo → Surat Paksa setelah lewat 21 hari sejak Surat Teguran → penyitaan bila utang tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan", C: "STP jatuh tempo 3 September 2026 → Surat Paksa diterbitkan keesokan harinya tanpa Surat Teguran → penyitaan setelah 21 hari", D: "STP jatuh tempo 3 September 2026 → penagihan diserahkan kepada pemerintah kabupaten letak objek sebagai pajak daerah" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB jatuh tempo 1 bulan sejak diterima (Pasal 11 ayat (4) UU PBB). Selanjutnya berlaku urutan UU PPSP: Surat Teguran (lewat 7 hari dari jatuh tempo), Surat Paksa (lewat 21 hari sejak Surat Teguran), lalu Surat Perintah Melaksanakan Penyitaan bila utang tidak dilunasi dalam 2 × 24 jam setelah Surat Paksa diberitahukan.",
        jejakHitung: [ ["STP diterima", "3 Agustus 2026"], ["Jatuh tempo (+1 bulan)", "3 September 2026"], ["Surat Teguran", "setelah lewat 7 hari dari jatuh tempo"], ["Surat Paksa", "setelah lewat 21 hari sejak Surat Teguran"], ["Penyitaan", "bila tidak lunas 2 × 24 jam sejak Surat Paksa"] ],
        mengapaSalah: { A: "Enam bulan adalah jatuh tempo SPPT, bukan STP; lelang juga tidak langsung setelah Surat Paksa", C: "Surat Paksa didahului Surat Teguran dalam penagihan biasa", D: "PBB-P5L adalah pajak pusat; penagihannya dilakukan DJP, bukan pemerintah daerah" },
        jebakan: "Soal lintas kelompok: jatuh tempo menurut UU PBB, tahapan penagihan menurut UU PPSP."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8, 11, dan 12 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "PMK 61/2023 (tata cara penagihan pajak)" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "B8-045", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Staf keuangan PT Teh Puncak Lestari akan melunasi SPPT PBB-P5L 2026 pada Agustus 2026, sebelum jatuh tempo. Cara pembayaran yang sesuai dengan ketentuan dan sistem administrasi yang berlaku saat ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mentransfer ke rekening kas daerah kabupaten letak kebun karena PBB menjadi pendapatan daerah", B: "Memotongkan PBB dari angsuran PPh Pasal 25 sehingga tidak perlu setoran terpisah", C: "Membuat kode billing di Coretax dengan NPWP 16 digit dan NOP objek, lalu membayar melalui bank/pos persepsi; bukti penerimaan negara ber-NTPN menjadi tanda pelunasan", D: "Membayar tunai kepada petugas KPP dengan tanda terima manual sebagai bukti pelunasan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB-P5L dibayar ke kas negara melalui bank, kantor pos, atau tempat lain yang ditunjuk Menteri Keuangan (Pasal 12 UU PBB); sejak Coretax (PMK 81/2024) pembayaran memakai kode billing dengan NPWP 16 digit, dan NTPN menjadi tanda pelunasan.",
        jejakHitung: [],
        mengapaSalah: { A: "PBB-P5L adalah penerimaan negara yang baru kemudian dibagihasilkan; wajib pajak tidak menyetor ke kas daerah", B: "PBB tidak dapat dikompensasikan ke angsuran PPh; masing-masing jenis pajak disetor terpisah", D: "Pembayaran pajak tidak dilakukan tunai kepada petugas KPP" },
        jebakan: "Bagi hasil ke daerah terjadi setelah setoran ke kas negara, bukan dengan menyetor ke kas daerah."
      },
      dasarHukum: [ { pasal: "Pasal 12 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 70,
      verifikasi: "✅"
    },
    {
      id: "B8-046", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Pada September 2026 PT Agro Dwi Sentosa bermaksud melunasi PBB-P5L 2026 kebun karet (Rp76.500.000), tetapi kode billing dibuat dengan NOP kebun sawit. Akibatnya pembayaran tercatat untuk kebun sawit, sedangkan kebun karet tercatat belum lunas. Langkah penyelesaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membayar ulang PBB kebun karet, lalu menunggu tahun berikutnya untuk mengkreditkan pembayaran yang salah", B: "Mengajukan keberatan atas SPPT kebun karet karena tercatat belum lunas", C: "Mengajukan pemindahbukuan agar pembayaran dicatat untuk NOP kebun karet, sehingga tidak perlu membayar ulang", D: "Mengajukan pengurangan PBB kebun sawit sebesar Rp76.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kesalahan data pembayaran (NOP, tahun pajak, atau jenis pajak) diselesaikan dengan pemindahbukuan; keberatan dan pengurangan menyangkut penetapan atau keringanan pajak, bukan kesalahan pencatatan pembayaran.",
        jejakHitung: [],
        mengapaSalah: { A: "Pajak tidak dikreditkan antartahun seperti PPh; membayar ulang menimbulkan kelebihan bayar yang harus diurus lagi", B: "SPPT kebun karet tidak salah; masalahnya ada pada pencatatan pembayaran", D: "Pengurangan adalah keringanan atas pajak terutang, bukan koreksi salah bayar" },
        jebakan: "Salah bayar → pemindahbukuan; salah tetap → keberatan; berat bayar → pengurangan."
      },
      dasarHukum: [ { pasal: "PMK 81/2024 (pemindahbukuan)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 12 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Nama dan alur layanan pemindahbukuan di Coretax (PMK 81/2024) belum dicek ke teks primer; prinsip bahwa salah NOP diselesaikan melalui pemindahbukuan, bukan keberatan, sudah lazim."
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
      id: "B8-054", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Agro Rejang Lestari memegang HGU kebun campuran kelapa sawit dan karet di Kabupaten Bengkulu Utara dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif kelapa sawit (tanaman menghasilkan) 1.200 ha dengan nilai tanah Rp3.900/m² dan SIT kelapa sawit Rp5.800/m²; areal produktif karet (sedang disadap) 800 ha dengan nilai tanah Rp3.900/m² dan SIT karet Rp4.100/m²; areal belum produktif (kelapa sawit tanaman belum menghasilkan umur 2 tahun) 300 ha dengan nilai tanah Rp3.900/m²; areal emplasemen 30 ha dengan nilai Rp12.000/m²; NJOP bangunan (pabrik kelapa sawit, gudang lateks, perumahan karyawan) Rp23.300.000.000. Menurut data penilaian, SIT hanya melekat pada areal produktif sesuai jenis tanamannya. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp465.176.000", B: "Rp437.976.000", C: "Rp472.776.000", D: "Rp391.376.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Tiap areal produktif dinilai nilai tanah ditambah SIT jenis tanamannya sendiri (sawit Rp5.800, karet Rp4.100); areal belum produktif dan emplasemen hanya nilai tanah. NJOP bumi ditambah bangunan, dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [ ["Produktif sawit 12.000.000 m² × (3.900 + 5.800)", "Rp116.400.000.000"], ["Produktif karet 8.000.000 m² × (3.900 + 4.100)", "Rp64.000.000.000"], ["Belum produktif 3.000.000 m² × 3.900", "Rp11.700.000.000"], ["Emplasemen 300.000 m² × 12.000", "Rp3.600.000.000"], ["NJOP bumi", "Rp195.700.000.000"], ["+ NJOP bangunan", "Rp219.000.000.000"], ["− NJOPTKP Rp12.000.000", "Rp218.988.000.000"], ["× 40% × 0,5%", "Rp437.976.000"] ],
        mengapaSalah: { A: "SIT kelapa sawit dipakai juga untuk areal karet (+Rp13.600.000.000 NJOP), padahal SIT mengikuti jenis tanaman", C: "SIT kelapa sawit ikut ditambahkan pada tanaman belum menghasilkan (+Rp17.400.000.000 NJOP)", D: "NJOP bangunan pabrik, gudang, dan perumahan di dalam HGU tidak dijumlahkan" },
        jebakan: "Pada kebun campuran, SIT dibaca per jenis tanaman dan hanya untuk tanaman menghasilkan; tiga pengecoh hanya berbeda satu langkah dari jawaban benar."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "SIT per jenis tanaman dan penempatannya hanya pada areal produktif mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; nilai tanah dan SIT diberikan sebagai data penilaian di stem."
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
      id: "B8-056", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-04",
      stem: "Data untuk soal V-B8-04: PT Laut Natuna Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi dengan wilayah kerja lepas pantai (offshore) di laut wilayah Indonesia; fasilitas penerima gas di darat berada di dalam wilayah kerja yang sama. Perusahaan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal perairan wilayah kerja 62.000 ha dengan nilai Rp40/m²; areal darat fasilitas penerima 12 ha dengan nilai Rp125.000/m²; NJOP tubuh bumi hasil penilaian DJP Rp1.180.000.000.000; anjungan produksi yang dipancang ke dasar laut Rp620.000.000.000; pipa gas bawah laut dari anjungan ke darat Rp185.000.000.000; bangunan fasilitas penerima gas di darat Rp95.000.000.000; dua kapal crew boat milik sendiri Rp45.000.000.000; serta drillship sewaan milik kontraktor pengeboran asing (nilai kontrak sewa Rp210.000.000.000). PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp4.329.576.000", B: "Rp4.189.976.000", C: "Rp4.019.576.000", D: "Rp4.239.576.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Bumi meliputi areal perairan, areal darat di dalam wilayah kerja, dan tubuh bumi; anjungan terpancang, pipa bawah laut, dan fasilitas penerima di darat adalah bangunan. Crew boat dan drillship sewaan adalah benda bergerak (drillship juga bukan milik KKKS), sehingga dikeluarkan.",
        jejakHitung: [ ["Perairan 620.000.000 m² × 40", "Rp24.800.000.000"], ["Darat 120.000 m² × 125.000", "Rp15.000.000.000"], ["Tubuh bumi", "Rp1.180.000.000.000"], ["Bangunan: 620.000.000.000 + 185.000.000.000 + 95.000.000.000", "Rp900.000.000.000"], ["NJOP objek", "Rp2.119.800.000.000"], ["− NJOPTKP", "Rp2.119.788.000.000"], ["× 40% × 0,5%", "Rp4.239.576.000"] ],
        mengapaSalah: { A: "Crew boat ikut dihitung sebagai bangunan (2.164.788.000.000 × 0,2%), padahal kapal adalah benda bergerak", B: "Areal perairan dianggap bukan bumi (2.094.988.000.000 × 0,2%), padahal bumi meliputi perairan pedalaman dan laut wilayah", C: "Fasilitas penerima di darat (lahan dan bangunan Rp110.000.000.000) dianggap PBB-P2, padahal berada di dalam wilayah kerja migas" },
        jebakan: "Data berlebih (drillship sewaan, crew boat) sengaja dicampur dengan objek sebenarnya; pilah dulu bumi, bangunan, dan benda bergerak."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 dan 2 UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 190,
      verifikasi: "◐",
      peringatan: "Pembagian areal perairan dan darat dalam wilayah kerja offshore serta penilaian tubuh bumi migas menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer; nilai per m² dan NJOP tubuh bumi diberikan sebagai data penilaian di stem."
    },
    {
      id: "B8-057", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-04",
      stem: "Lanjutan data V-B8-04: SPPT PBB-P5L 2026 PT Laut Natuna Energi sebesar Rp4.329.576.000 diterima pada 16 Maret 2026. Setelah dicocokkan dengan daftar aset, ternyata DJP memasukkan dua kapal crew boat (Rp45.000.000.000) sebagai bangunan; data lain sesuai dengan keadaan 1 Januari 2026. Manajer pajak ingin memperbaiki penetapan tersebut tanpa menimbulkan sanksi. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan keberatan tertulis atas SPPT paling lambat 16 Juni 2026 dengan alasan kapal adalah benda bergerak; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan SPPT tetap harus dilunasi paling lambat 16 September 2026", B: "Mengajukan permohonan pengurangan PBB paling lambat 16 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan SPPT tetap harus dilunasi paling lambat 16 September 2026", C: "Mengajukan keberatan tertulis atas SPPT paling lambat 16 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp225.000.000, dan SPPT tetap harus dilunasi paling lambat 16 September 2026", D: "Mengajukan keberatan tertulis atas SPPT paling lambat 16 Juni 2026; bila dikabulkan seluruhnya PBB turun Rp90.000.000, dan pelunasan SPPT ditunda sampai keputusan keberatan terbit" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Memasukkan benda bergerak sebagai bangunan adalah penetapan yang tidak benar, sehingga jalurnya keberatan atas SPPT dalam 3 bulan sejak diterima (16 Juni 2026). Penurunan PBB = 0,2% × Rp45.000.000.000 (NJOPTKP tidak berubah). Keberatan tidak menunda kewajiban melunasi SPPT pada jatuh tempo 6 bulan (16 September 2026).",
        jejakHitung: [ ["SPPT diterima", "16 Maret 2026"], ["Batas keberatan (+3 bulan)", "16 Juni 2026"], ["Jatuh tempo SPPT (+6 bulan)", "16 September 2026"], ["Penurunan PBB 45.000.000.000 × 40% × 0,5%", "Rp90.000.000"], ["Pembanding: SPPT setelah keberatan dikabulkan", "Rp4.239.576.000"] ],
        mengapaSalah: { B: "Pengurangan (Pasal 19) adalah keringanan atas penetapan yang benar; penetapan yang memasukkan benda bergerak diperbaiki lewat keberatan", C: "Penurunan dihitung 0,5% × NJOP tanpa NJKP 40%", D: "Keberatan tidak menunda kewajiban membayar; menunggu keputusan memicu denda 2% sebulan" },
        jebakan: "Bedakan salah tetap (keberatan) dari keringanan (pengurangan), dan ingat dua tenggat berjalan bersamaan: 3 bulan keberatan, 6 bulan pelunasan."
      },
      dasarHukum: [ { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-058", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kabel Samudra Nusantara memiliki dua objek PBB-P5L sektor lainnya yang masing-masing mempunyai NOP dan SPPT sendiri: (1) sistem kabel telekomunikasi bawah laut antarprovinsi dengan NJOP bumi (koridor perairan) Rp2.400.000.000 dan NJOP bangunan (kabel yang dipasang tetap di dasar laut) Rp356.800.000.000; (2) kabel telekomunikasi bawah laut lama antarpulau kecil sepanjang 6 km yang dipasang pada 2004, dengan NJOP bumi Rp210.000.000 dan NJOP bangunan setelah penyusutan Rp650.000.000. Perusahaan juga memiliki kapal perawatan kabel senilai Rp120.000.000.000. Besarnya PBB-P5L dalam SPPT objek (2) Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp848.000", B: "Rp860.000", C: "Rp1.720.000", D: "Rp1.696.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "NJOPTKP diberikan sekali pada objek ber-NJOP terbesar (objek (1)), sehingga objek (2) dikenai penuh. NJOP objek (2) Rp860.000.000 < Rp1.000.000.000, sehingga sebagai objek sektor lainnya NJKP-nya 20% (PP 25/2002).",
        jejakHitung: [ ["NJOP objek (2) 210.000.000 + 650.000.000", "Rp860.000.000"], ["NJOPTKP", "sudah dipakai objek (1)"], ["NJOP < Rp1 miliar → NJKP 20%", "Rp172.000.000"], ["PBB 0,5%", "Rp860.000"], ["Pembanding: SPPT objek (1) (359.200.000.000 − 12.000.000) × 40% × 0,5%", "Rp718.376.000"] ],
        mengapaSalah: { A: "NJOPTKP dikurangkan lagi pada objek (2) ((860.000.000 − 12.000.000) × 20% × 0,5%)", C: "Memakai NJKP 40% seperti objek perkebunan/pertambangan, padahal objek lainnya ber-NJOP di bawah Rp1 miliar memakai 20%", D: "Dua kesalahan sekaligus: NJOPTKP dikurangkan lagi dan NJKP 40%" },
        jebakan: "Persentase NJKP sektor lainnya diuji per objek; objek kecil milik wajib pajak besar tetap bisa memakai 20%. Kapal perawatan kabel adalah data berlebih (benda bergerak)."
      },
      dasarHukum: [ { pasal: "PP 25/2002" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "◐",
      peringatan: "Penggolongan kabel telekomunikasi bawah laut sebagai objek PBB-P5L sektor lainnya menurut PMK 186/2019 s.t.d.d. PMK 234/2022 dan penerapan NJKP 20%/40% per objek dari PP 25/2002 belum dicek ke teks primer; NJOP diberikan di stem."
    },
    {
      id: "B8-059", topik: "B8.1", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"],
      stem: "Grup usaha PT Bahari Interkoneksi pada 1 Januari 2026 menguasai: (1) jaringan pipa transmisi gas bawah laut antarprovinsi milik anak usaha transmisi (bukan kontraktor kontrak kerja sama migas) yang dipasang tetap di dasar laut; (2) kabel listrik bawah laut antarpulau yang dilekatkan tetap di dasar laut; (3) kapal penggelar kabel untuk memasang dan merawat kabel; (4) keramba jaring apung berjangkar tetap untuk pembudidayaan ikan kakap di perairan laut; (5) gedung kantor pusat grup di Kota Surabaya. Pengelompokan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), (3), dan (4) objek PBB-P5L sektor lainnya karena semuanya berada di laut; (5) objek PBB-P2 Kota Surabaya", B: "(1), (2), dan (4) bukan objek PBB karena laut bukan bumi menurut UU PBB; (3) bukan objek; (5) objek PBB-P2 Kota Surabaya", C: "(1) dan (2) objek PBB-P5L sektor pertambangan migas karena berkaitan dengan energi; (4) objek PBB-P2 kabupaten terdekat; (3) bukan objek; (5) objek PBB-P2 Kota Surabaya", D: "(1), (2), dan (4) objek PBB-P5L sektor lainnya; (3) bukan objek PBB karena benda bergerak; (5) objek PBB-P2 Kota Surabaya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jaringan pipa, kabel bawah laut, dan pembudidayaan ikan termasuk sektor lainnya PBB-P5L; perairan adalah bumi dan konstruksi yang dilekatkan tetap di dasar laut adalah bangunan. Kapal adalah benda bergerak, sedangkan kantor pusat di kota berada di luar kawasan sektor P5L sehingga PBB-P2.",
        jejakHitung: [],
        mengapaSalah: { A: "Letak di laut tidak menjadikan kapal objek; kapal adalah benda bergerak, bukan konstruksi yang dilekatkan tetap", B: "Pasal 1 angka 1 UU PBB memasukkan perairan pedalaman dan laut wilayah ke dalam bumi", C: "Pipa milik perusahaan transmisi (bukan KKKS) dan kabel listrik bukan kegiatan pertambangan; budidaya ikan di laut termasuk sektor lainnya, bukan PBB-P2" },
        jebakan: "'Sektor lainnya' adalah kategori tersendiri; jangan memaksakan pipa atau kabel ke sektor migas hanya karena berkaitan dengan energi."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 130,
      verifikasi: "◐",
      peringatan: "Daftar objek sektor lainnya (perikanan tangkap/budidaya, jaringan pipa, kabel) diambil dari ringkasan PMK 234/PMK.03/2022 pada lembar riset tanpa pengecekan teks primer; batas cakupan wilayah (mis. melintasi lebih dari satu kabupaten/kota) belum dicek."
    },
    {
      id: "B8-060", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-05",
      stem: "Data untuk soal V-B8-05: PT Sawit Mukomuko Raya memiliki dua kebun kelapa sawit di Kabupaten Mukomuko dengan NOP dan SPPT terpisah. SPPT PBB-P5L 2026 kedua kebun diterima pada 2 April 2026: Kebun Air Dikit Rp684.000.000 dan Kebun Teramang Rp318.500.000. Hasil penelitian internal: (i) SPPT Kebun Air Dikit masih memuat 150 ha areal produktif yang haknya telah dilepaskan kepada negara untuk pembangunan jalan nasional pada Oktober 2025 dan sejak itu tidak lagi dikuasai atau dimanfaatkan perusahaan; (ii) pada 18 Juli 2026 banjir bandang merusak sebagian besar tanaman Kebun Teramang, sedangkan SPPT-nya sudah sesuai keadaan 1 Januari 2026. Langkah yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan permohonan pengurangan untuk Kebun Air Dikit dan keberatan atas SPPT Kebun Teramang karena banjir, keduanya paling lambat 2 Juli 2026", B: "Mengajukan keberatan atas SPPT Kebun Air Dikit paling lambat 2 Oktober 2026 dan permohonan pengurangan untuk Kebun Teramang; kedua SPPT jatuh tempo 2 Oktober 2026", C: "Mengajukan keberatan tertulis atas SPPT Kebun Air Dikit paling lambat 2 Juli 2026 dan permohonan pengurangan untuk Kebun Teramang karena bencana alam; SPPT Kebun Air Dikit tetap harus dilunasi paling lambat 2 Oktober 2026", D: "Mengajukan keberatan tertulis atas SPPT Kebun Air Dikit paling lambat 2 Juli 2026 dan permohonan pengurangan untuk Kebun Teramang; pelunasan SPPT Kebun Air Dikit ditunda tanpa denda sampai keputusan keberatan terbit" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Masalah (i) adalah penetapan yang tidak benar: per 1 Januari 2026 areal 150 ha sudah tanah negara yang tidak dibebani hak perusahaan, sehingga diselesaikan dengan keberatan dalam 3 bulan sejak SPPT diterima (2 Juli 2026). Masalah (ii) terjadi setelah 1 Januari dan penetapannya benar, sehingga jalurnya pengurangan karena bencana (Pasal 19 ayat (1) huruf b). Keberatan tidak menunda pelunasan SPPT yang jatuh tempo 2 Oktober 2026.",
        jejakHitung: [ ["SPPT diterima", "2 April 2026"], ["Batas keberatan Kebun Air Dikit (+3 bulan)", "2 Juli 2026"], ["Jatuh tempo SPPT (+6 bulan)", "2 Oktober 2026"] ],
        mengapaSalah: { A: "Jalurnya tertukar: salah luas per 1 Januari adalah objek keberatan, kerusakan karena bencana setelah 1 Januari adalah objek pengurangan", B: "Batas keberatan 3 bulan (2 Juli 2026); 2 Oktober 2026 adalah jatuh tempo pelunasan SPPT", D: "Keberatan tidak menunda kewajiban membayar; pelunasan setelah 2 Oktober 2026 dikenai denda 2% sebulan" },
        jebakan: "Satu wajib pajak, dua masalah, dua jalur: uji dulu apakah masalahnya ada pada keadaan 1 Januari (keberatan) atau terjadi sesudahnya (pengurangan)."
      },
      dasarHukum: [ { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 3 ayat (1) huruf c dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "B8-061", topik: "B8.6", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-05",
      stem: "Lanjutan data V-B8-05: Kedua SPPT PT Sawit Mukomuko Raya (Kebun Air Dikit Rp684.000.000 dan Kebun Teramang Rp318.500.000) dilunasi penuh pada 25 September 2026. Keputusan keberatan mengabulkan seluruhnya pengeluaran 150 ha areal produktif Kebun Air Dikit yang dalam SPPT dinilai dengan nilai tanah Rp4.000/m² dan SIT Rp5.400/m²; NJOPTKP tetap melekat pada Kebun Air Dikit. Keputusan pengurangan memberikan pengurangan 40% dari PBB terutang Kebun Teramang. Perusahaan tidak mempunyai utang pajak lain. Jumlah kelebihan pembayaran PBB yang dapat dikembalikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp155.600.000", B: "Rp139.400.000", C: "Rp197.900.000", D: "Rp127.400.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Kelebihan berasal dari dua keputusan: keberatan menurunkan PBB Kebun Air Dikit sebesar 0,2% × NJOP 150 ha (nilai tanah + SIT), dan pengurangan 40% menurunkan PBB Kebun Teramang. Karena kedua SPPT sudah dilunasi dan tidak ada utang lain, seluruh penurunan menjadi kelebihan pembayaran.",
        jejakHitung: [ ["NJOP 150 ha = 1.500.000 m² × (4.000 + 5.400)", "Rp14.100.000.000"], ["Penurunan PBB Air Dikit 14.100.000.000 × 40% × 0,5%", "Rp28.200.000"], ["Pengurangan Teramang 40% × 318.500.000", "Rp127.400.000"], ["Jumlah kelebihan", "Rp155.600.000"] ],
        mengapaSalah: { B: "Areal produktif yang dikeluarkan hanya dinilai nilai tanah tanpa SIT (penurunan Rp12.000.000)", C: "Penurunan PBB Air Dikit dihitung 0,5% × NJOP tanpa NJKP 40% (Rp70.500.000)", D: "Hanya pengurangan Kebun Teramang yang dihitung; hasil keberatan Kebun Air Dikit terlupa" },
        jebakan: "Dua mekanisme berbeda menghasilkan satu angka restitusi: keberatan mengoreksi NJOP, pengurangan memotong pajak terutang."
      },
      dasarHukum: [ { pasal: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 81/2024 (pengembalian kelebihan pembayaran pajak)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 170,
      verifikasi: "◐",
      peringatan: "Persentase pengurangan diberikan sebagai isi keputusan di stem (batas persentase menurut aturan pelaksana belum dicek); tata cara pengembalian kelebihan pembayaran PBB setelah keputusan keberatan/pengurangan di Coretax belum dicek ke teks primer."
    },
    {
      id: "B8-062", topik: "B8.5", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Hutan Kapuas Lestari menerima SPOP sektor perhutanan pada 6 Januari 2026 tetapi tidak menyampaikannya, termasuk setelah ditegur secara tertulis. Pada 11 Mei 2026 KPP menerbitkan SKP PBB-P5L 2026 yang diterima perusahaan pada 18 Mei 2026. Pernyataan yang paling tepat mengenai SKP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterbitkan, yaitu 11 Juni 2026", B: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 18 Juni 2026", C: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf a UU PBB, memuat pokok pajak ditambah denda administrasi 2% sebulan dari pokok pajak paling lama 24 bulan, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 18 Juni 2026", D: "SKP diterbitkan berdasarkan Pasal 10 ayat (2) huruf b UU PBB, memuat pokok pajak ditambah denda administrasi 25% dari pokok pajak, dan harus dilunasi paling lambat satu bulan sejak tanggal SKP diterima, yaitu 18 Juni 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP yang tidak disampaikan setelah teguran memicu SKP Pasal 10 ayat (2) huruf a, yang memuat pokok ditambah denda 25% dari pokok (ayat (3)); SKP dilunasi paling lambat satu bulan sejak diterima (Pasal 11 ayat (2)), yaitu 18 Juni 2026.",
        jejakHitung: [ ["SKP diterima", "18 Mei 2026"], ["Jatuh tempo (+1 bulan sejak diterima)", "18 Juni 2026"] ],
        mengapaSalah: { A: "Titik awal jatuh tempo SKP adalah tanggal diterima, bukan tanggal terbit", C: "Denda 2% sebulan adalah sanksi keterlambatan bayar (Pasal 11 ayat (3)), bukan isi SKP huruf a", D: "Huruf b dipakai bila SPOP disampaikan lalu pemeriksaan menunjukkan pajak lebih besar; di sini SPOP tidak disampaikan" },
        jebakan: "Keempat kalimat hampir identik; bandingkan frasa per frasa: dasar huruf, jenis denda, dan titik awal jatuh tempo."
      },
      dasarHukum: [ { pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-064", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 11 ayat (1) dan Pasal 12 UU PBB (parafrase): Pajak yang terutang berdasarkan SPPT harus dilunasi selambat-lambatnya 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak. Pajak yang terutang dapat dibayar di bank, kantor pos dan giro, dan tempat lain yang ditunjuk oleh Menteri Keuangan.",
      stem: "SPPT PBB-P5L 2026 PT Teh Malabar Lestari (kebun teh di Kabupaten Bandung) diterbitkan pada 2 Maret 2026 dan diterima perusahaan pada 9 Maret 2026. Staf keuangan baru menyusun SOP pelunasan PBB-P5L untuk era Coretax. Berdasarkan kutipan tersebut dan ketentuan pembayaran elektronik yang berlaku sejak 2025, urutan langkah dan batas waktu yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → bayar melalui bank/pos persepsi sebelum kode billing kedaluwarsa → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 9 September 2026", B: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → bayar melalui bank/pos persepsi sebelum kode billing kedaluwarsa → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 2 September 2026", C: "Masuk Portal Wajib Pajak Coretax → buat kode billing PBB-P5L dengan NPWP 16 digit, NOP, dan tahun pajak 2026 → simpan cetakan kode billing sebagai tanda pelunasan → bayar melalui bank/pos persepsi; seluruhnya paling lambat 9 September 2026", D: "Masuk e-Billing DJP Online → buat kode billing dengan NPWP 15 digit dan NOP → bayar melalui bank/pos persepsi → simpan Bukti Penerimaan Negara yang memuat NTPN; seluruhnya paling lambat 9 September 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Sejak Coretax (PMK 81/2024), pembayaran memakai kode billing dengan identitas NPWP 16 digit dan NOP; pelunasan sah ditandai Bukti Penerimaan Negara ber-NTPN. Jatuh tempo SPPT dihitung 6 bulan sejak diterima (9 Maret → 9 September 2026).",
        jejakHitung: [ ["SPPT diterima", "9 Maret 2026"], ["Jatuh tempo (+6 bulan)", "9 September 2026"] ],
        mengapaSalah: { B: "Jangka 6 bulan dihitung dari tanggal terbit (2 Maret), padahal Pasal 11 ayat (1) menghitung sejak SPPT diterima", C: "Kode billing hanya identitas setoran; tanda pelunasan adalah Bukti Penerimaan Negara ber-NTPN", D: "e-Billing DJP Online dan NPWP 15 digit adalah prosedur sebelum Coretax (2025)" },
        jebakan: "Opsi prosedur Coretax berbeda satu langkah saja: kanal dan identitas, dokumen bukti, atau titik awal jatuh tempo."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1) dan Pasal 12 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024 (pembayaran pajak dengan kode billing)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 130,
      verifikasi: "◐",
      peringatan: "Nama menu dan alur pembuatan kode billing PBB-P5L di Portal Wajib Pajak Coretax (PMK 81/2024) belum dicek ke teks primer atau panduan resmi; yang diuji adalah identitas pembayaran (NPWP 16 digit, NOP), bukti sah ber-NTPN, dan jatuh tempo Pasal 11 ayat (1) UU PBB."
    },
    {
      id: "B8-065", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "UU PPSP dan PMK 61/2023 (parafrase): Surat Teguran diterbitkan apabila penanggung pajak tidak melunasi utang pajak setelah lewat 7 hari sejak saat jatuh tempo pembayaran. Surat Paksa diterbitkan apabila utang pajak tidak dilunasi setelah lewat 21 hari sejak tanggal Surat Teguran disampaikan. Penyitaan dilaksanakan apabila utang pajak tidak dilunasi dalam jangka waktu 2 × 24 jam sejak Surat Paksa diberitahukan.",
      stem: "STP PBB-P5L PT Rimba Borneo Lestari (pokok Rp96.000.000 dan denda Rp5.760.000) diterima pada 14 Juli 2026 dan tidak dilunasi. Surat Teguran kemudian disampaikan kepada perusahaan pada 24 Agustus 2026. Dalam soal ini, frasa 'setelah lewat n hari' berarti tindakan paling cepat dilakukan pada hari ke-(n + 1) setelah tanggal acuan. Berdasarkan kutipan tersebut, rangkaian tanggal yang paling tepat adalah ...",
      kataKualifikasi: ["paling cepat"],
      opsi: { A: "STP jatuh tempo 14 Januari 2027; Surat Teguran paling cepat 22 Januari 2027; Surat Paksa paling cepat 21 hari setelah Surat Teguran disampaikan", B: "STP jatuh tempo 14 Agustus 2026; Surat Teguran paling cepat 22 Agustus 2026; Surat Paksa paling cepat 5 September 2026", C: "STP jatuh tempo 14 Agustus 2026; Surat Paksa dapat langsung diterbitkan 22 Agustus 2026 tanpa Surat Teguran karena PBB adalah pajak yang ditetapkan", D: "STP jatuh tempo 14 Agustus 2026; Surat Teguran paling cepat 22 Agustus 2026; Surat Paksa paling cepat 15 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "STP PBB jatuh tempo satu bulan sejak diterima (Pasal 11 ayat (4) UU PBB): 14 Agustus 2026. Surat Teguran paling cepat hari ke-8 setelah jatuh tempo (22 Agustus 2026). Karena Surat Teguran disampaikan 24 Agustus 2026, Surat Paksa paling cepat hari ke-22 setelah tanggal itu, yaitu 15 September 2026.",
        jejakHitung: [ ["STP diterima", "14 Juli 2026"], ["Jatuh tempo STP (+1 bulan)", "14 Agustus 2026"], ["Surat Teguran: lewat 7 hari → hari ke-8", "22 Agustus 2026"], ["Surat Teguran disampaikan", "24 Agustus 2026"], ["Surat Paksa: lewat 21 hari → hari ke-22 (7 hari Agustus + 15 hari September)", "15 September 2026"] ],
        mengapaSalah: { A: "Enam bulan adalah jatuh tempo SPPT; STP jatuh tempo satu bulan sejak diterima", B: "Jangka 21 hari dihitung dari jatuh tempo (14 Agustus), padahal titik acuannya tanggal Surat Teguran disampaikan (24 Agustus)", C: "Penagihan dengan Surat Paksa didahului Surat Teguran; sifat PBB sebagai pajak yang ditetapkan tidak menghapus tahapan itu" },
        jebakan: "Dua titik acuan berbeda: 7 hari dari jatuh tempo, 21 hari dari tanggal Surat Teguran disampaikan, bukan dari tanggal paling cepatnya."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 UU 19/1997 s.t.d.d. UU 19/2000 (PPSP)", berlakuSejak: "2001-01-01" }, { pasal: "PMK 61/2023 (tata cara penagihan pajak)" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-066", topik: "B8.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Nikel Konawe Perkasa (IUP operasi produksi nikel di Kabupaten Konawe Utara; tahun buku kalender) menyiapkan anggaran pajak 2026. Data umum: peredaran bruto 2025 Rp1,92 triliun; royalti nikel yang dibayar pada 2025 Rp96 miliar; angsuran PPh Pasal 25 2026 Rp7,4 miliar per bulan; jumlah karyawan 1.240 orang. Data objek PBB per 1 Januari 2026 (satu-satunya objek PBB-P5L): permukaan bumi areal produktif (pit, stockpile, jalan tambang) 640 ha dengan nilai Rp6.500/m²; permukaan bumi areal belum/tidak produktif 2.860 ha dengan nilai Rp1.800/m²; NJOP tubuh bumi hasil penilaian DJP Rp684.000.000.000; bangunan di dalam wilayah IUP berupa jetty Rp46.000.000.000, kantor tambang dan mess karyawan Rp12.500.000.000, serta bengkel Rp8.300.000.000; alat berat dan dump truck Rp312.000.000.000; kantor perwakilan di Kota Kendari (di luar wilayah IUP) NJOP Rp7.200.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.687.736.000", B: "Rp1.687.760.000", C: "Rp1.702.136.000", D: "Rp1.662.736.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Yang dipakai hanya data objek PBB-P5L: permukaan bumi, tubuh bumi, dan bangunan di dalam wilayah IUP. Peredaran bruto, royalti, PPh Pasal 25, jumlah karyawan, alat berat (benda bergerak), dan kantor Kendari (PBB-P2) adalah data berlebih.",
        jejakHitung: [ ["Areal produktif 6.400.000 m² × 6.500", "Rp41.600.000.000"], ["Areal belum/tidak produktif 28.600.000 m² × 1.800", "Rp51.480.000.000"], ["Tubuh bumi", "Rp684.000.000.000"], ["Bangunan 46.000.000.000 + 12.500.000.000 + 8.300.000.000", "Rp66.800.000.000"], ["NJOP objek", "Rp843.880.000.000"], ["− NJOPTKP", "Rp843.868.000.000"], ["× 40% × 0,5%", "Rp1.687.736.000"] ],
        mengapaSalah: { B: "NJOPTKP Rp12.000.000 tidak dikurangkan (selisih hanya Rp24.000)", C: "Kantor perwakilan di Kota Kendari ikut dihitung, padahal di luar wilayah IUP sehingga objek PBB-P2", D: "Kantor tambang dan mess karyawan dikeluarkan karena dianggap hunian/kantor PBB-P2, padahal berada di dalam wilayah IUP" },
        jebakan: "Opsi berdekatan (selisih Rp24.000 sampai puluhan juta) menuntut pemilahan data yang teliti, bukan hanya rumus."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" } ],
      anggaranDetik: 200,
      verifikasi: "◐",
      peringatan: "Pembagian permukaan bumi pertambangan menjadi areal produktif dan belum/tidak produktif serta penilaian tubuh bumi menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer; nilai per m² dan NJOP tubuh bumi diberikan sebagai data penilaian di stem."
    },
    {
      id: "B8-067", topik: "B8.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Kebun Lembah Seblat (PKP; tahun buku kalender) memiliki satu objek PBB-P5L dengan NJOP Rp374.162.000.000. SPPT PBB-P5L 2026 sebesar Rp748.300.000 diterbitkan pada 11 Februari 2026 dan diterima perusahaan pada 27 Februari 2026. Pembayaran PBB: 20 Agustus 2026 Rp400.000.000; 5 Oktober 2026 Rp200.000.000; dan 30 Oktober 2026 Rp148.300.000. Data lain pada periode yang sama: PPN kurang bayar Masa Agustus 2026 Rp38.500.000 disetor 14 September 2026; kode billing PBB yang dibuat 25 Agustus 2026 kedaluwarsa tanpa dibayar. Asumsikan denda dihitung terpisah untuk setiap bagian pokok sesuai tanggal pembayarannya dan bagian dari bulan dihitung satu bulan penuh. Denda administrasi PBB yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp24.898.000", B: "Rp9.932.000", C: "Rp16.898.000", D: "Rp20.898.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Jatuh tempo SPPT dihitung 6 bulan sejak diterima: 27 Agustus 2026. Pembayaran 20 Agustus tepat waktu; Rp200.000.000 terlambat 1 bulan 8 hari (2 bulan) dan Rp148.300.000 terlambat 2 bulan 3 hari (3 bulan), masing-masing dikenai denda 2% sebulan (Pasal 11 ayat (3) UU PBB).",
        jejakHitung: [ ["Cek SPPT: (374.162.000.000 − 12.000.000) × 0,2%", "Rp748.300.000"], ["Jatuh tempo (27 Februari + 6 bulan)", "27 Agustus 2026"], ["Rp400.000.000 dibayar 20 Agustus", "tepat waktu"], ["Rp200.000.000: 27 Agustus–5 Oktober → 2 bulan × 2%", "Rp8.000.000"], ["Rp148.300.000: 27 Agustus–30 Oktober → 3 bulan × 2%", "Rp8.898.000"], ["Jumlah denda", "Rp16.898.000"] ],
        mengapaSalah: { A: "Jatuh tempo dihitung dari tanggal terbit (11 Agustus 2026), sehingga pembayaran 20 Agustus ikut didenda dan bulan keterlambatan bertambah", B: "Bagian bulan dibulatkan ke bawah (1 bulan dan 2 bulan)", D: "Seluruh sisa Rp348.300.000 dikenai denda 3 bulan sampai pelunasan terakhir, padahal Rp200.000.000 sudah dibayar 5 Oktober" },
        jebakan: "PPN, kode billing kedaluwarsa, dan tanggal terbit SPPT adalah data pengalih; yang menentukan hanya tanggal SPPT diterima dan tanggal tiap pembayaran."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-068", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-06",
      stem: "Data untuk soal V-B8-06: PT Indragiri Sawit Makmur memegang HGU kebun kelapa sawit di Kabupaten Indragiri Hulu dan tidak memiliki objek PBB-P5L lain. Data penilaian objek per 1 Januari 2026: areal produktif (tanaman menghasilkan) 2.640 ha dengan nilai tanah Rp4.300/m² dan SIT kelapa sawit Rp5.900/m²; areal belum produktif (blok peremajaan umur 2 tahun) 380 ha dengan nilai tanah Rp4.300/m²; areal tidak produktif (rawa dan sempadan sungai) 115 ha dengan nilai Rp900/m²; areal emplasemen 46 ha dengan nilai Rp13.500/m², yang di dalamnya terdapat pemakaman umum desa 1,2 ha dan masjid yang terbuka untuk umum serta dikelola nirlaba 0,3 ha. Data lain: produksi TBS 2025 sebanyak 61.000 ton dengan harga rata-rata Rp2.450/kg, 1.180 karyawan, serta 64 truk dan alat berat bernilai buku Rp42.000.000.000. NJOP bumi yang masuk penghitungan PBB-P5L Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp292.865.000.000", B: "Rp292.662.500.000", C: "Rp315.082.500.000", D: "Rp291.627.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "NJOP bumi dihitung per jenis areal: SIT hanya ditambahkan pada areal produktif, areal belum produktif dan tidak produktif tetap bumi yang dinilai dengan nilai tanahnya, sedangkan pemakaman umum dan masjid umum nirlaba (Pasal 3 ayat (1) huruf a dan b) dikeluarkan dari luas emplasemen. Data produksi, karyawan, dan truk tidak dipakai.",
        jejakHitung: [ ["Produktif 26.400.000 m² × (4.300 + 5.900)", "Rp269.280.000.000"], ["Belum produktif 3.800.000 m² × 4.300", "Rp16.340.000.000"], ["Tidak produktif 1.150.000 m² × 900", "Rp1.035.000.000"], ["Emplasemen (46 − 1,2 − 0,3) = 44,5 ha = 445.000 m² × 13.500", "Rp6.007.500.000"], ["NJOP bumi", "Rp292.662.500.000"] ],
        mengapaSalah: { A: "Pemakaman umum dan masjid umum nirlaba tidak dikeluarkan dari luas emplasemen (+15.000 m² × Rp13.500)", C: "SIT ikut ditambahkan pada blok peremajaan yang belum menghasilkan (+3.800.000 m² × Rp5.900)", D: "Rawa dan sempadan sungai dianggap bukan objek, padahal bumi meliputi seluruh permukaan bumi di dalam kawasan usaha" },
        jebakan: "Tiga koreksi luas sekaligus: SIT hanya pada areal produktif, areal tidak produktif tetap dihitung, dan objek Pasal 3 dikeluarkan."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 angka 1 dan Pasal 3 ayat (1) huruf a–b UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Penempatan SIT hanya pada areal produktif dan penilaian areal lain dengan nilai tanah mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; nilai per m² dan SIT diberikan sebagai data penilaian di stem."
    },
    {
      id: "B8-069", topik: "B8.3", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-06",
      stem: "Lanjutan data V-B8-06: NJOP bumi kebun PT Indragiri Sawit Makmur Tahun Pajak 2026, setelah mengeluarkan pemakaman umum dan masjid umum nirlaba, adalah Rp292.662.500.000. Daftar aset per 1 Januari 2026 memuat: pabrik kelapa sawit Rp36.800.000.000; perumahan karyawan dan kantor kebun Rp9.400.000.000; jalan kebun dan jembatan permanen Rp5.200.000.000; bangunan masjid umum nirlaba Rp900.000.000; kantor pemasaran di Kota Pekanbaru (di luar HGU) dengan NJOP Rp6.000.000.000; serta truk dan alat berat bernilai buku Rp42.000.000.000. Perusahaan tidak memiliki objek PBB-P5L lain. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp700.101.000", B: "Rp688.125.000", C: "Rp1.720.252.500", D: "Rp688.101.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Bangunan yang masuk hanya pabrik, perumahan dan kantor kebun, serta jalan dan jembatan permanen di dalam HGU. Masjid umum nirlaba dikecualikan, kantor di Kota Pekanbaru adalah objek PBB-P2, dan truk serta alat berat adalah benda bergerak. NJOP objek dikurangi NJOPTKP sekali, lalu dikali NJKP 40% dan tarif 0,5%.",
        jejakHitung: [ ["NJOP bumi", "Rp292.662.500.000"], ["Bangunan 36.800.000.000 + 9.400.000.000 + 5.200.000.000", "Rp51.400.000.000"], ["NJOP objek", "Rp344.062.500.000"], ["− NJOPTKP Rp12.000.000", "Rp344.050.500.000"], ["NJKP 40%", "Rp137.620.200.000"], ["PBB 0,5%", "Rp688.101.000"] ],
        mengapaSalah: { A: "Kantor pemasaran di luar HGU ikut dihitung, padahal objek PBB-P2 Kota Pekanbaru (Pasal 38 ayat (1) UU 1/2022)", B: "NJOPTKP Rp12.000.000 tidak dikurangkan", C: "Tarif 0,5% dikalikan tanpa NJKP 40%" },
        jebakan: "Opsi A dan B hanya berselisih Rp12.000.000 dan Rp24.000 dari kunci; tetapkan batas kawasan usaha dan NJOPTKP sebelum mengalikan."
      },
      dasarHukum: [ { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-070", topik: "B8.1", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-06", formulirRef: "SPOP.spop.4",
      stem: "Lanjutan data V-B8-06: Staf pajak PT Indragiri Sawit Makmur memutakhirkan data objek sektor perkebunan untuk Tahun Pajak 2027 melalui SPOP dan LSPOP elektronik. Data per 1 Januari 2027: (i) blok peremajaan 380 ha yang belum menghasilkan; (ii) rawa dan sempadan sungai 115 ha; (iii) jalan kebun dan jembatan permanen di dalam HGU; (iv) 64 truk dan alat berat. Pengisian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(i) baris areal belum produktif tanpa SIT; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", B: "(i) baris areal produktif dengan SIT karena sudah ditanami; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", C: "(i) baris areal belum produktif tanpa SIT; (ii) tidak dilaporkan karena tidak menghasilkan; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) tidak dilaporkan karena bukan objek PBB", D: "(i) baris areal belum produktif tanpa SIT; (ii) baris areal tidak produktif; (iii) diuraikan sebagai bangunan dalam LSPOP; (iv) diuraikan sebagai bangunan dalam LSPOP karena dipakai di dalam HGU" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPOP memuat data bumi per jenis areal, sedangkan LSPOP memuat rincian bangunan. Blok yang belum menghasilkan masuk areal belum produktif (tanpa SIT), rawa dan sempadan tetap dilaporkan sebagai areal tidak produktif, jalan dan jembatan permanen adalah bangunan, sedangkan truk dan alat berat bukan objek karena benda bergerak.",
        jejakHitung: [],
        mengapaSalah: { B: "Blok yang belum menghasilkan bukan areal produktif; SIT hanya melekat pada areal produktif", C: "Bumi meliputi seluruh permukaan di dalam kawasan usaha; areal tidak produktif tetap dilaporkan dan dinilai", D: "Truk dan alat berat tidak dilekatkan secara tetap sehingga bukan bangunan (Pasal 1 angka 2 UU PBB)" },
        jebakan: "Opsi hanya berbeda pada satu butir; cocokkan setiap data dengan baris areal atau LSPOP, bukan dengan fungsi ekonominya."
      },
      dasarHukum: [ { pasal: "Pasal 9 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 1–2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Nama bagian dan baris SPOP/LSPOP sektor perkebunan di Coretax belum dicek ke formulir resmi; kode formulirRef merujuk baris SPOP.spop.4 (luas areal bumi) pada peta formulir. Klasifikasi areal mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022."
    },
    {
      id: "B8-071", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-06",
      stem: "Lanjutan data V-B8-06: SPPT PBB-P5L 2026 PT Indragiri Sawit Makmur sebesar Rp688.101.000 diterbitkan pada 26 Februari 2026, diterima perusahaan pada 18 Maret 2026, dan dilunasi seluruhnya pada 2 Oktober 2026. Pada bulan yang sama perusahaan juga terlambat menyetor PPh Pasal 25 Masa September 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi PBB-P5L yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp27.524.040", B: "Rp172.025.250", C: "Rp13.762.020", D: "Rp701.863.020" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Jatuh tempo SPPT adalah 6 bulan sejak diterima, yaitu 18 September 2026. Pelunasan 2 Oktober 2026 terlambat 14 hari yang dihitung satu bulan, sehingga denda 2% × Rp688.101.000. Keterlambatan PPh Pasal 25 dikenai bunga UU KUP tersendiri dan tidak memengaruhi denda PBB.",
        jejakHitung: [ ["SPPT diterima + 6 bulan", "18 September 2026"], ["18 September s.d. 2 Oktober 2026", "14 hari → 1 bulan"], ["Denda 1 × 2% × 688.101.000", "Rp13.762.020"] ],
        mengapaSalah: { A: "Jatuh tempo dihitung dari tanggal terbit (26 Agustus 2026) sehingga keterlambatan menjadi 2 bulan", B: "Memakai denda 25% milik SKP Pasal 10 ayat (3), bukan denda keterlambatan bayar", D: "Menjawab pokok ditambah denda, padahal yang ditanya denda yang ditagih dengan STP" },
        jebakan: "Titik awal jatuh tempo SPPT adalah tanggal diterima; tanggal terbit hanya data pengecoh."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-072", topik: "B8.1", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 9 ayat (1) dan (2) UU PBB (parafrase): Dalam rangka pendataan, subjek pajak wajib mendaftarkan objek pajaknya dengan mengisi SPOP. SPOP harus diisi dengan jelas, benar, dan lengkap serta ditandatangani dan disampaikan kepada Direktorat Jenderal Pajak yang wilayah kerjanya meliputi letak objek pajak selambat-lambatnya 30 hari setelah tanggal diterimanya SPOP oleh subjek pajak.",
      stem: "PT Nikel Sulawesi Persada (IUP operasi produksi nikel di Kabupaten Morowali) memperoleh persetujuan perluasan wilayah IUP seluas 1.200 ha pada 10 Maret 2026 dan membangun jalan hauling permanen di area itu pada April 2026. Manajer pajak berpendapat perusahaan cukup menunggu formulir dari DJP dan bahwa area perluasan sudah terutang PBB-P5L 2026 secara proporsional sejak 10 Maret 2026. Atas permintaan perusahaan, SPOP dan LSPOP elektronik untuk area perluasan diterima perusahaan pada 3 Agustus 2026. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Perusahaan cukup menunggu formulir dari DJP; area perluasan dikenai PBB mulai Tahun Pajak 2027; SPOP disampaikan paling lambat 2 September 2026", B: "Perusahaan wajib aktif mendaftarkan area perluasan; area perluasan dikenai PBB 2026 secara proporsional sejak 10 Maret 2026; SPOP disampaikan paling lambat 2 September 2026", C: "Perusahaan wajib aktif mendaftarkan area perluasan; area perluasan dikenai PBB mulai Tahun Pajak 2027; SPOP disampaikan paling lambat 3 September 2026", D: "Perusahaan wajib aktif mendaftarkan area perluasan; area perluasan dikenai PBB mulai Tahun Pajak 2027; SPOP disampaikan paling lambat 2 September 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 9 ayat (1) mewajibkan subjek pajak aktif mendaftarkan objeknya dengan SPOP; Pasal 9 ayat (2) memberi waktu 30 hari sejak SPOP diterima (3 Agustus + 30 hari = 2 September 2026). Karena keadaan objek ditentukan per 1 Januari (Pasal 8 ayat (2)), area perluasan baru dikenai PBB mulai Tahun Pajak 2027.",
        jejakHitung: [ ["SPOP diterima", "3 Agustus 2026"], ["Sisa hari Agustus (4–31)", "28 hari"], ["Tambahan hari September", "2 hari"], ["Batas penyampaian", "2 September 2026"] ],
        mengapaSalah: { A: "Pendaftaran objek bukan kewajiban pasif; Pasal 9 ayat (1) mewajibkan subjek pajak mendaftarkan objeknya", B: "PBB tidak mengenal pengenaan proporsional; objek dikunci keadaan 1 Januari", C: "Tiga puluh hari disamakan dengan satu bulan kalender" },
        jebakan: "Tiga hal diuji bersamaan: sifat aktif pendaftaran, keadaan 1 Januari, dan hitungan 30 hari."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) dan (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" } ],
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
      id: "B8-074", topik: "B8.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Sawit Barito Jaya menjual seluruh kebun kelapa sawit ber-HGU di Kabupaten Barito Selatan kepada PT Agro Kalteng Mandiri. Akta jual beli ditandatangani pada 2 Juni 2026 dengan nilai pengalihan tanah dan bangunan Rp210.000.000.000; nilai tanaman Rp95.000.000.000 dicatat terpisah sebagai penjualan aset biasa. Pendaftaran peralihan HGU selesai pada Agustus 2026. SPPT PBB-P5L 2026 atas kebun tersebut sebesar Rp512.400.000 diterima pada 16 Maret 2026 atas nama PT Sawit Barito Jaya. Penjual bukan pengembang real estat dan tidak memperoleh fasilitas khusus. Pernyataan yang paling tepat mengenai PBB-P5L, PPh, dan BPHTB atas transaksi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan perubahan subjek dilaporkan dengan SPOP untuk SPPT 2027; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", B: "PBB-P5L 2026 dibagi proporsional, 5 bulan atas nama penjual dan 7 bulan atas nama pembeli; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", C: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan perubahan subjek dilaporkan dengan SPOP untuk SPPT 2027; penjual membayar PPh final 2,5% × Rp305.000.000.000 = Rp7.625.000.000; pembeli membayar BPHTB kepada pemerintah kabupaten dengan tarif Perda paling tinggi 5%", D: "PBB-P5L 2026 tetap atas nama penjual menurut keadaan 1 Januari 2026 dan perubahan subjek dilaporkan dengan SPOP untuk SPPT 2027; penjual membayar PPh final 2,5% × Rp210.000.000.000 = Rp5.250.000.000; pembeli membayar BPHTB ke kas negara karena objeknya PBB-P5L" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPPT 2026 mengikuti subjek dan keadaan objek per 1 Januari 2026 (Pasal 8 ayat (2) UU PBB); peralihan hak dilaporkan dengan SPOP sehingga pembeli menjadi subjek mulai 2027. Pengalihan hak atas tanah dan bangunan dikenai PPh final 2,5% dari nilai bruto pengalihan tanah dan bangunan (PP 34/2016), sedangkan nilai tanaman diperlakukan sebagai penjualan aset biasa. BPHTB adalah pajak daerah (UU 1/2022) yang dibayar pembeli kepada kabupaten, meskipun objek PBB-nya PBB-P5L.",
        jejakHitung: [ ["Dasar PPh final (tanah dan bangunan)", "Rp210.000.000.000"], ["PPh final 2,5%", "Rp5.250.000.000"], ["Nilai tanaman Rp95.000.000.000", "di luar PPh final; penghasilan usaha biasa"] ],
        mengapaSalah: { B: "PBB tidak dibagi per bulan; Pasal 8 ayat (2) mengunci subjek dan objek pada 1 Januari", C: "Nilai tanaman bukan nilai pengalihan hak atas tanah dan/atau bangunan sehingga tidak masuk dasar PPh final", D: "BPHTB adalah pajak daerah berdasarkan UU 1/2022; status PBB-P5L objek tidak memindahkan BPHTB ke kas negara" },
        jebakan: "Satu transaksi kebun menyentuh tiga rezim sekaligus: PBB-P5L (pusat), PPh final (pusat), dan BPHTB (daerah)."
      },
      dasarHukum: [ { pasal: "Pasal 4 ayat (1) dan Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 34/2016 Pasal 2", berlakuSejak: "2016-09-08" }, { pasal: "Pasal 44–47 UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "B8-075", topik: "B8.2", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Teh Kahyangan Lestari memegang HGU kebun teh di Kabupaten Batang dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif 1.120 ha (nilai tanah Rp6.200/m², SIT teh Rp7.400/m²) yang di dalamnya terdapat situs candi yang telah ditetapkan sebagai cagar budaya seluas 0,6 ha; areal emplasemen 28 ha (Rp18.000/m²) yang memuat sekolah dasar umum yang dikelola yayasan nirlaba secara cuma-cuma di atas lahan perusahaan seluas 0,9 ha (bangunan Rp1.100.000.000) serta taman kanak-kanak dan penitipan anak yang dikelola koperasi karyawan secara komersial untuk memperoleh keuntungan seluas 0,4 ha (bangunan Rp600.000.000); areal tidak produktif 64 ha (Rp1.500/m²) yang memuat pemakaman umum desa 1,1 ha. Bangunan lain: pabrik teh Rp21.500.000.000 dan perumahan karyawan Rp7.800.000.000. Data lain: produksi teh kering 2025 sebanyak 2.900 ton dan 1.650 pemetik. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp376.059.000", B: "Rp374.551.800", C: "Rp375.895.800", D: "Rp378.419.800" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Situs cagar budaya (peninggalan purbakala, Pasal 3 ayat (1) huruf b), sekolah dasar umum nirlaba (huruf a), dan pemakaman umum (huruf b) dikeluarkan dari luas areal masing-masing; bangunan SD juga dikeluarkan. Taman kanak-kanak yang dikelola untuk memperoleh keuntungan tidak memenuhi syarat nirlaba sehingga tetap objek.",
        jejakHitung: [ ["Produktif (1.120 − 0,6) ha = 11.194.000 m² × (6.200 + 7.400)", "Rp152.238.400.000"], ["Emplasemen (28 − 0,9) ha = 271.000 m² × 18.000", "Rp4.878.000.000"], ["Tidak produktif (64 − 1,1) ha = 629.000 m² × 1.500", "Rp943.500.000"], ["Bangunan 21.500.000.000 + 7.800.000.000 + 600.000.000 (TK)", "Rp29.900.000.000"], ["NJOP objek", "Rp187.959.900.000"], ["(187.959.900.000 − 12.000.000) × 40% × 0,5%", "Rp375.895.800"] ],
        mengapaSalah: { A: "Situs candi cagar budaya tidak dikeluarkan dari areal produktif (+6.000 m² × Rp13.600)", B: "TK dan penitipan anak yang dikelola komersial ikut dikecualikan, padahal dikelola untuk mencari keuntungan", D: "Sekolah dasar umum nirlaba (lahan dan bangunan) tidak dikecualikan, padahal memenuhi Pasal 3 ayat (1) huruf a" },
        jebakan: "Pengecualian diuji per bidang menurut fungsi kepentingan umum dan sifat nirlaba, bukan menurut jenis bangunannya (sekolah vs sekolah)."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf a–b UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 200,
      verifikasi: "◐",
      peringatan: "Penempatan SIT hanya pada areal produktif mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; nilai per m² dan SIT diberikan sebagai data penilaian di stem."
    },
    {
      id: "B8-076", topik: "B8.2", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3,
      kutipan: "Pasal 3 ayat (1) huruf c dan Pasal 4 ayat (1) UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB antara lain tanah negara yang belum dibebani suatu hak. Yang menjadi subjek pajak adalah orang atau badan yang secara nyata mempunyai suatu hak atas bumi dan/atau memperoleh manfaat atas bumi, dan/atau memiliki, menguasai, dan/atau memperoleh manfaat atas bangunan.",
      stem: "HGU kebun karet PT Karet Musi Jaya seluas 3.400 ha di Kabupaten Musi Rawas berakhir pada 30 September 2025. Permohonan perpanjangan diajukan pada Agustus 2025 dan sampai Oktober 2026 belum diputus, tetapi perusahaan tetap menguasai kebun, menyadap karet, dan menjual hasilnya sepanjang 2026. Direksi berpendapat bahwa pada 1 Januari 2026 kebun tersebut adalah tanah negara yang belum dibebani hak sehingga tidak terutang PBB. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Pendapat direksi tepat; kebun dikecualikan sampai HGU diperpanjang, dan PBB baru terutang sejak tanggal keputusan perpanjangan", B: "Pendapat direksi tepat untuk bumi; hanya bangunan pabrik dan perumahan di kebun yang tetap terutang PBB-P5L", C: "Pendapat direksi tidak tepat; kebun terutang PBB-P2 kabupaten karena tidak lagi dibebani HGU", D: "Pendapat direksi tidak tepat; perusahaan tetap subjek PBB-P5L 2026 karena secara nyata memperoleh manfaat atas bumi kebun yang diusahakan, sehingga pengecualian tanah negara tidak dapat dipakai" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pengecualian Pasal 3 ayat (1) huruf c ditujukan untuk tanah negara yang belum dibebani hak dan tidak diusahakan pihak mana pun. Perusahaan yang tetap menguasai, menyadap, dan menjual hasil kebun secara nyata memperoleh manfaat atas bumi (Pasal 4 ayat (1)), dan kebun tetap merupakan kawasan usaha perkebunan sehingga rezimnya PBB-P5L.",
        jejakHitung: [],
        mengapaSalah: { A: "PBB tidak menunggu status hak; subjek ditentukan oleh hak atau manfaat nyata per 1 Januari", B: "Bumi dan bangunan diuji dengan dasar yang sama, yaitu hak atau manfaat nyata; tidak ada alasan memisahkan bumi", C: "UU 1/2022 mengecualikan kawasan usaha perkebunan dari PBB-P2 tanpa mensyaratkan jenis haknya" },
        jebakan: "Frasa 'belum dibebani suatu hak' dibaca bersama 'memperoleh manfaat': kebun yang tetap diusahakan bukan tanah negara yang menganggur."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf c dan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" } ],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Penerapan pengecualian 'tanah negara yang belum dibebani suatu hak' pada HGU yang telah berakhir tetapi tetap diusahakan belum dicek ke penjelasan pasal maupun aturan pelaksana; kunci disusun dari Pasal 4 ayat (1) (subjek karena memperoleh manfaat) dan cakupan kawasan usaha perkebunan dalam Pasal 38 ayat (1) UU 1/2022."
    },
    {
      id: "B8-077", topik: "B8.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 3 ayat (1) huruf d dan e UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB adalah objek pajak yang digunakan oleh perwakilan diplomatik dan konsulat berdasarkan asas perlakuan timbal balik, serta objek pajak yang digunakan oleh badan atau perwakilan organisasi internasional yang ditentukan oleh Menteri Keuangan.",
      stem: "PT Rimba Equator Lestari memegang perizinan berusaha pemanfaatan hutan tanaman di Kabupaten Sintang dan tidak memiliki objek PBB-P5L lain. Per 1 Januari 2026 di dalam areal izinnya terdapat: (1) stasiun penelitian 30 ha beserta bangunan Rp2.400.000.000 yang digunakan pusat penelitian kehutanan internasional yang telah ditentukan Menteri Keuangan sebagai organisasi internasional yang tidak dikenakan pajak; (2) kebun benih 12 ha beserta bangunan milik perusahaan Rp900.000.000 yang disewakan kepada PT Benih Unggul Asia, perusahaan PMA, untuk produksi benih komersial; (3) wisma tamu 2 ha beserta bangunan Rp1.500.000.000 yang dipakai perusahaan untuk menjamu tamu kedutaan besar dan pembeli asing. Nilai tanah ketiga areal Rp2.000/m². Berdasarkan kutipan tersebut, jumlah NJOP bumi dan bangunan dari ketiga areal itu yang masuk penghitungan PBB-P5L 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.680.000.000", B: "Rp2.680.000.000", C: "Rp1.140.000.000", D: "Rp1.540.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Hanya areal (1) yang digunakan organisasi internasional yang ditentukan Menteri Keuangan (Pasal 3 ayat (1) huruf e) yang dikecualikan. Kebun benih yang disewakan untuk usaha komersial tetap objek, dan wisma tamu yang dipakai perusahaan tetap objek karena tidak digunakan oleh perwakilan diplomatik.",
        jejakHitung: [ ["(2) 120.000 m² × 2.000 + 900.000.000", "Rp1.140.000.000"], ["(3) 20.000 m² × 2.000 + 1.500.000.000", "Rp1.540.000.000"], ["Jumlah yang masuk penghitungan", "Rp2.680.000.000"], ["(1) 300.000 m² × 2.000 + 2.400.000.000 (dikecualikan)", "Rp3.000.000.000"] ],
        mengapaSalah: { A: "Areal yang digunakan organisasi internasional yang ditentukan Menteri Keuangan tidak dikeluarkan", C: "Wisma tamu dianggap dikecualikan karena menjamu tamu kedutaan, padahal huruf d hanya untuk objek yang digunakan perwakilan diplomatik atau konsulat", D: "Kebun benih dianggap bukan objek karena disewakan; penyewaan tidak menghapus objek, dan perusahaan tetap pemegang izin serta pemilik bangunan" },
        jebakan: "Pengecualian huruf d dan e melekat pada pengguna objek (perwakilan diplomatik, organisasi internasional yang ditentukan Menteri Keuangan), bukan pada tamu atau penyewa asing."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf d–e UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
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
      id: "B8-079", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Transpipa Nusantara, badan usaha pengangkutan minyak bumi melalui pipa (bukan kontraktor kontrak kerja sama), memiliki satu ruas pipa penyalur minyak bawah laut sepanjang 3 km di perairan Laut Jawa lepas pantai Kabupaten Karawang yang diadministrasikan sebagai objek PBB-P5L sektor lainnya. Menurut SPPT 2026, NJOP bumi (koridor perairan yang digunakan pipa) Rp118.000.000 dan NJOP bangunan (pipa yang dipasang tetap di dasar laut) Rp890.000.000; perusahaan tidak memiliki objek PBB-P5L lain. Perusahaan juga memiliki gedung kantor di Kota Bekasi (NJOP Rp4.200.000.000) dan tiga truk tangki. Seorang staf berpendapat NJKP cukup 20% karena NJOP setelah dikurangi NJOPTKP kurang dari Rp1.000.000.000. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp996.000", B: "Rp2.016.000", C: "Rp4.980.000", D: "Rp1.992.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "PP 25/2002 menguji batas Rp1.000.000.000 terhadap NJOP objek, bukan terhadap NJOP setelah dikurangi NJOPTKP. NJOP Rp1.008.000.000 ≥ Rp1 miliar sehingga NJKP 40%; NJOPTKP tetap dikurangkan sebelum dikali NJKP. Kantor di Kota Bekasi (PBB-P2) dan truk (benda bergerak) tidak dihitung.",
        jejakHitung: [ ["NJOP objek 118.000.000 + 890.000.000", "Rp1.008.000.000"], ["NJOP ≥ Rp1.000.000.000 → NJKP", "40%"], ["NJOP − NJOPTKP", "Rp996.000.000"], ["996.000.000 × 40% × 0,5%", "Rp1.992.000"] ],
        mengapaSalah: { A: "Batas Rp1 miliar diuji setelah NJOPTKP sehingga memakai NJKP 20% (pendapat staf)", B: "NJOPTKP tidak dikurangkan (1.008.000.000 × 40% × 0,5%)", C: "Tarif 0,5% dikalikan tanpa NJKP" },
        jebakan: "Urutan yang benar: tentukan NJKP dari NJOP objek lebih dahulu, baru kurangkan NJOPTKP."
      },
      dasarHukum: [ { pasal: "PP 25/2002" }, { pasal: "Pasal 6–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Menurut sumber sekunder, PMK 234/PMK.03/2022 membatasi objek sektor lainnya pada bumi berupa perairan (antara lain yang digunakan jaringan pipa) beserta konstruksi yang dilekatkan tetap di perairan; pipa darat di dalam wilayah kabupaten/kota merupakan objek PBB-P2. Teks primer belum dicek, dan stem menyatakan penggolongan objek sebagai data administrasi. Pengujian batas Rp1 miliar terhadap NJOP sebelum NJOPTKP mengikuti rumusan PP 25/2002 yang menyebut 'NJOP-nya'."
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
      id: "B8-082", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-07",
      stem: "Data untuk soal V-B8-07: PT Energi Panas Kerinci memegang izin panas bumi tahap eksploitasi di Kabupaten Kerinci dan tidak memiliki objek PBB-P5L lain. Uapnya dijual kepada PT Listrik Panas Nusantara, pemilik PLTP di dalam wilayah kerja yang didata sebagai subjek pajak atas bangunan PLTP dengan NOP tersendiri. Data penilaian per 1 Januari 2026 untuk NOP PT Energi Panas Kerinci: permukaan bumi areal produktif (tapak sumur, separator, jalur pipa) 85 ha dengan nilai Rp9.000/m²; permukaan bumi areal lainnya dalam wilayah kerja 9.200 ha dengan nilai Rp600/m²; NJOP tubuh bumi hasil penilaian DJP Rp410.000.000.000; bangunan berupa sumur produksi dan injeksi, pipa uap, dan separator Rp313.000.000.000. Data lain: PLTP milik PT Listrik Panas Nusantara Rp1.150.000.000.000 dan rig pengeboran sewaan Rp180.000.000.000. PBB-P5L dalam SPPT PT Energi Panas Kerinci Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.871.676.000", B: "Rp1.571.676.000", C: "Rp751.676.000", D: "Rp1.461.276.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "SPPT PT Energi Panas Kerinci memuat bumi (permukaan bumi areal produktif dan lainnya serta tubuh bumi) dan bangunan miliknya sendiri; PLTP milik pihak lain masuk NOP subjek pemiliknya, sedangkan rig sewaan adalah benda bergerak.",
        jejakHitung: [ ["Areal produktif 850.000 m² × 9.000", "Rp7.650.000.000"], ["Areal lainnya 92.000.000 m² × 600", "Rp55.200.000.000"], ["Tubuh bumi", "Rp410.000.000.000"], ["Bangunan milik sendiri", "Rp313.000.000.000"], ["NJOP objek", "Rp785.850.000.000"], ["(785.850.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.571.676.000"] ],
        mengapaSalah: { A: "PLTP milik PT Listrik Panas Nusantara ikut dimasukkan, padahal subjek atas bangunan itu adalah pemiliknya dengan NOP sendiri", C: "Tubuh bumi terlewat, padahal bumi meliputi tubuh bumi di bawah permukaan", D: "Areal lainnya dalam wilayah kerja dianggap bukan objek, padahal tetap permukaan bumi di dalam kawasan usaha" },
        jebakan: "Dalam satu wilayah kerja bisa ada dua subjek: pemegang izin panas bumi atas bumi dan bangunannya, serta pemilik PLTP atas bangunannya."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1–2 dan Pasal 4 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Pembagian areal dan penilaian tubuh bumi sektor panas bumi menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer; nilai per m² dan NJOP tubuh bumi diberikan sebagai data penilaian di stem, dan pemisahan NOP PLTP dinyatakan sebagai data administrasi."
    },
    {
      id: "B8-083", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-07",
      stem: "Lanjutan data V-B8-07: SPPT PBB-P5L 2026 PT Energi Panas Kerinci sebesar Rp1.571.676.000 diterima pada 12 Maret 2026 dan dilunasi penuh pada 20 Agustus 2026. Surat keberatan yang diterima KPP pada 5 Mei 2026 memuat dua alasan: (i) 40 ha yang dinilai sebagai areal produktif (Rp9.000/m²) sebenarnya tapak sumur yang ditinggalkan sejak 2024 dan semestinya dinilai sebagai areal lainnya (Rp600/m²); (ii) pipa uap senilai Rp96.000.000.000 semestinya tidak dihitung karena merupakan peralatan produksi. Keputusan keberatan yang diterima pada 18 Februari 2027 mengabulkan alasan (i) dan menolak alasan (ii). PBB-P5L 2026 menurut keputusan keberatan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.372.956.000", B: "Rp1.564.476.000", C: "Rp1.554.876.000", D: "Rp1.564.956.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Alasan (i) mengubah klasifikasi 40 ha dari areal produktif menjadi areal lainnya, sehingga NJOP turun sebesar selisih nilai per m²; alasan (ii) ditolak karena pipa uap yang ditanam atau dilekatkan tetap adalah bangunan. NJOPTKP sudah dipakai pada SPPT sehingga penurunan NJOP langsung dikali 0,2%. Keberatan diajukan sebelum 12 Juni 2026 dan diputus sebelum 5 Mei 2027, sehingga prosedurnya sah.",
        jejakHitung: [ ["Penurunan NJOP 400.000 m² × (9.000 − 600)", "Rp3.360.000.000"], ["Penurunan PBB 3.360.000.000 × 40% × 0,5%", "Rp6.720.000"], ["PBB menurut keputusan 1.571.676.000 − 6.720.000", "Rp1.564.956.000"] ],
        mengapaSalah: { A: "Alasan (ii) juga dianggap dikabulkan (penurunan tambahan 96.000.000.000 × 0,2% = Rp192.000.000)", B: "Luas 40 ha dikeluarkan seluruhnya, padahal hanya direklasifikasi menjadi areal lainnya yang tetap dinilai Rp600/m²", C: "Penurunan NJOP dikali 0,5% tanpa NJKP 40%" },
        jebakan: "Keberatan yang dikabulkan atas klasifikasi areal hanya mengubah nilai per m², bukan menghapus luasnya."
      },
      dasarHukum: [ { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "B8-084", topik: "B8.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-07",
      stem: "Lanjutan data V-B8-07: PT Energi Panas Kerinci telah melunasi SPPT PBB-P5L 2026 sebesar Rp1.571.676.000, sedangkan menurut keputusan keberatan PBB 2026 menjadi Rp1.564.956.000. Saat kelebihan pembayaran diproses, perusahaan masih mempunyai utang STP PBB-P5L 2025 sebesar Rp2.180.000 dan STP PPh Pasal 21 Masa Juni 2026 sebesar Rp1.250.000 yang belum dilunasi, serta angsuran PPh Pasal 25 Masa Maret 2027 sebesar Rp410.000.000 yang belum jatuh tempo. Bila kelebihan pembayaran diperhitungkan lebih dahulu dengan utang pajak yang masih ada, jumlah yang dikembalikan kepada perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.720.000", B: "Rp4.540.000", C: "Rp3.290.000", D: "Rp0" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kelebihan pembayaran Rp6.720.000 diperhitungkan dengan utang pajak yang sudah ada, yaitu STP PBB 2025 dan STP PPh Pasal 21, sehingga sisa Rp3.290.000 dikembalikan. Angsuran PPh Pasal 25 yang belum jatuh tempo belum merupakan utang pajak.",
        jejakHitung: [ ["Kelebihan 1.571.676.000 − 1.564.956.000", "Rp6.720.000"], ["Utang pajak 2.180.000 + 1.250.000", "Rp3.430.000"], ["Dikembalikan 6.720.000 − 3.430.000", "Rp3.290.000"] ],
        mengapaSalah: { A: "Kelebihan dikembalikan tanpa diperhitungkan dengan utang pajak", B: "Hanya utang PBB yang diperhitungkan, padahal utang pajak jenis lain juga diperhitungkan", D: "Angsuran PPh Pasal 25 yang belum jatuh tempo diperlakukan sebagai utang pajak" },
        jebakan: "Yang diperhitungkan hanya utang pajak yang sudah ada, tanpa membedakan jenis pajaknya."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 81/2024", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Cakupan utang pajak yang diperhitungkan dan tata cara pengembalian kelebihan pembayaran PBB-P5L di Coretax (PMK 81/2024) belum dicek ke teks primer; soal mengikuti prinsip Pasal 11 ayat (1) UU KUP dan ringkasan topik."
    },
    {
      id: "B8-085", topik: "B8.7", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-07", formulirRef: "1771.l1.7",
      stem: "Lanjutan data V-B8-07: Dalam laporan laba rugi komersial 2026, PT Energi Panas Kerinci (tahun buku kalender) membebankan PBB-P5L 2026 sesuai keputusan keberatan Rp1.564.956.000 dan denda STP PBB-P5L 2024 sebesar Rp3.460.000 yang dibayar pada Maret 2026. Dalam rekonsiliasi fiskal SPT Tahunan PPh Badan 2026 (Lampiran I formulir 1771 atau lampiran setara di Coretax), perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; denda STP Rp3.460.000 dicantumkan sebagai penyesuaian fiskal positif pada baris sanksi administrasi", B: "PBB-P5L dan denda STP sama-sama dicantumkan sebagai penyesuaian fiskal positif pada baris pajak penghasilan", C: "PBB-P5L tetap sebagai biaya tanpa penyesuaian; denda STP Rp3.460.000 dicantumkan sebagai penyesuaian fiskal negatif", D: "PBB-P5L dicantumkan sebagai kredit pajak dalam SPT Tahunan; denda STP Rp3.460.000 dicantumkan sebagai penyesuaian fiskal positif pada baris sanksi administrasi" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PBB adalah pajak selain PPh yang dapat dibiayakan (Pasal 6 ayat (1) huruf a UU PPh), sedangkan denda STP adalah sanksi administrasi yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh) sehingga dikoreksi positif pada baris sanksi administrasi.",
        jejakHitung: [ ["PBB-P5L 2026", "biaya fiskal Rp1.564.956.000 (tanpa koreksi)"], ["Denda STP PBB 2024", "koreksi fiskal positif Rp3.460.000"] ],
        mengapaSalah: { B: "Baris pajak penghasilan hanya untuk PPh yang dibebankan; PBB bukan PPh dan dapat dibiayakan", C: "Denda yang dibebankan secara komersial menambah penghasilan neto fiskal sehingga koreksinya positif", D: "Kredit pajak dalam SPT Tahunan PPh hanya untuk PPh yang dipotong, dipungut, atau dibayar sendiri, bukan PBB" },
        jebakan: "Pajak selain PPh boleh dibiayakan; sanksinya tidak."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh" }, { pasal: "PER-11/PJ/2025" } ],
      anggaranDetik: 100,
      verifikasi: "◐",
      peringatan: "Nama dan nomor baris rekonsiliasi fiskal dalam SPT Tahunan PPh Badan versi Coretax (PER-11/PJ/2025) belum dicek; kode formulirRef merujuk baris 1771.l1.7 (penyesuaian fiskal positif, termasuk sanksi administrasi) pada peta formulir yang mengikuti Lampiran I formulir 1771 pra-Coretax."
    },
    {
      id: "B8-086", topik: "B8.4", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Untuk penilaian bangunan objek PBB-P5L sektor minerba PT Bara Kutai Persada per 1 Januari 2026 tersedia data conveyor batubara permanen: harga perolehan pada 2016 Rp48.000.000.000, nilai buku akuntansi Rp19.200.000.000, serta biaya membangun conveyor serupa pada 2026 sebesar Rp71.000.000.000 dengan penyusutan fisik 35%. Pernyataan yang paling tepat mengenai NJOP conveyor tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa nilai buku akuntansi, yaitu Rp19.200.000.000", B: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa harga perolehan historis, yaitu Rp48.000.000.000", C: "Conveyor adalah peralatan produksi sehingga bukan bangunan dan tidak memiliki NJOP", D: "Conveyor adalah bangunan; NJOP-nya ditentukan dengan pendekatan biaya berupa nilai perolehan baru dikurangi penyusutan, yaitu Rp46.150.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Conveyor permanen adalah konstruksi teknik yang dilekatkan tetap sehingga merupakan bangunan. Bila tidak ada transaksi jual beli, Pasal 1 angka 3 UU PBB memungkinkan NJOP ditentukan melalui nilai perolehan baru; penyusutan fisik dikurangkan sehingga NJOP Rp71.000.000.000 × 65% = Rp46.150.000.000.",
        jejakHitung: [ ["Nilai perolehan baru 2026", "Rp71.000.000.000"], ["Dikurangi penyusutan 35%", "× 65%"], ["NJOP conveyor", "Rp46.150.000.000"] ],
        mengapaSalah: { A: "Nilai buku akuntansi bergantung pada metode dan umur penyusutan komersial, bukan nilai jual objek", B: "Harga perolehan historis 2016 tidak mencerminkan nilai pada 1 Januari 2026", C: "Conveyor permanen dilekatkan tetap pada tanah sehingga termasuk bangunan menurut Pasal 1 angka 2 UU PBB" },
        jebakan: "Data akuntansi (harga perolehan, nilai buku) adalah pengecoh; NJOP bangunan memakai nilai perolehan baru per 1 Januari dikurangi penyusutan."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 2 dan 3 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Rincian pendekatan biaya (nilai perolehan baru dikurangi penyusutan) untuk bangunan PBB-P5L mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; Pasal 1 angka 3 UU PBB menyebut nilai perolehan baru sebagai salah satu cara menentukan NJOP."
    },
    {
      id: "B8-087", topik: "B8.4", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 1, laporanUjian: ["B-2026-10"], formulirRef: "SPOP.lspop.1",
      stem: "Dalam SPOP dan LSPOP sektor perkebunan Tahun Pajak 2026, PT Kebun Kopi Gayo Lestari mengisi data areal produktif kebun kopi seluas 125 ha. Menurut data penilaian, nilai tanah Rp3.600/m² dan SIT kopi Rp5.800/m². NJOP bumi yang terbentuk dari baris areal produktif tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.175.000.000", B: "Rp11.750.000.000", C: "Rp4.500.000.000", D: "Rp7.250.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Luas 125 ha = 1.250.000 m², dikalikan nilai tanah ditambah SIT karena arealnya produktif.",
        jejakHitung: [ ["125 ha × 10.000", "1.250.000 m²"], ["Nilai per m² 3.600 + 5.800", "Rp9.400"], ["1.250.000 × 9.400", "Rp11.750.000.000"] ],
        mengapaSalah: { A: "1 ha dianggap 1.000 m²", C: "SIT tidak ditambahkan pada areal produktif", D: "Hanya SIT yang dihitung; nilai tanah terlupa" },
        jebakan: "Luas pada baris areal ditulis dalam hektare, sedangkan nilai per m²; konversikan dahulu."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 9 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "◐",
      peringatan: "Susunan baris SPOP/LSPOP sektor perkebunan di Coretax belum dicek; kode formulirRef merujuk baris SPOP.lspop.1 (data perkebunan) pada peta formulir. Rumus nilai tanah ditambah SIT pada areal produktif mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022."
    },
    {
      id: "B8-088", topik: "B8.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "PT Bara Kutai Persada memegang IUP operasi produksi batubara di Kabupaten Kutai Kartanegara yang terdiri atas dua blok dan didata sebagai satu objek PBB-P5L sektor minerba (satu-satunya objek wajib pajak ini). Blok Selatan sudah berproduksi: permukaan bumi areal produktif (pit, stockpile, jalan hauling) 920 ha dengan nilai Rp6.800/m², dan tubuh bumi dinilai dengan angka kapitalisasi × hasil bersih menurut data penilaian, yaitu hasil bersih Rp52.000.000.000 dan angka kapitalisasi 8. Blok Utara belum ditambang: permukaan bumi 2.400 ha dengan nilai Rp1.400/m² dan, menurut data penilaian, tubuh buminya belum dinilai. Bangunan: conveyor Rp46.150.000.000 serta bengkel dan mess Rp12.850.000.000. Data lain: produksi 2025 sebanyak 3,1 juta ton, royalti yang dibayar Rp142.000.000.000, dan 210 unit dump truck. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.075.096.000", B: "Rp414.296.000", C: "Rp1.142.296.000", D: "Rp2.855.740.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "NJOP bumi = permukaan Blok Selatan + tubuh bumi Blok Selatan (hasil bersih × angka kapitalisasi) + permukaan Blok Utara; Blok Utara tetap bumi walaupun belum ditambang. Royalti, produksi, dan dump truck tidak masuk NJOP.",
        jejakHitung: [ ["Permukaan Selatan 9.200.000 m² × 6.800", "Rp62.560.000.000"], ["Tubuh bumi 52.000.000.000 × 8", "Rp416.000.000.000"], ["Permukaan Utara 24.000.000 m² × 1.400", "Rp33.600.000.000"], ["Bangunan 46.150.000.000 + 12.850.000.000", "Rp59.000.000.000"], ["NJOP objek", "Rp571.160.000.000"], ["(571.160.000.000 − 12.000.000) × 40% × 0,5%", "Rp1.142.296.000"] ],
        mengapaSalah: { A: "Permukaan Blok Utara dianggap bukan objek karena belum ditambang", B: "Hasil bersih dipakai langsung sebagai NJOP tubuh bumi tanpa angka kapitalisasi", D: "Tarif 0,5% dikalikan tanpa NJKP 40%" },
        jebakan: "Data royalti dan produksi sengaja diberikan; yang masuk rumus hanya hasil bersih dan angka kapitalisasi dari data penilaian."
      },
      dasarHukum: [ { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 1 angka 1 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 200,
      verifikasi: "◐",
      peringatan: "Rumus tubuh bumi pertambangan (angka kapitalisasi × hasil bersih) dan perlakuan blok yang belum berproduksi mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; hasil bersih, angka kapitalisasi, dan status penilaian Blok Utara diberikan sebagai data penilaian di stem."
    },
    {
      id: "B8-089", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Per 1 Januari 2026 kebun PT Sawit Seruyan Prima (satu-satunya objek PBB-P5L wajib pajak ini) memiliki areal belum produktif 450 ha berupa kelapa sawit belum menghasilkan dengan nilai tanah Rp4.100/m². Blok itu panen perdana pada Agustus 2026 sehingga per 1 Januari 2027 tercatat sebagai areal produktif dengan SIT kelapa sawit Rp5.700/m²; nilai tanah dan data objek lain tidak berubah. Perusahaan memproyeksikan produksi blok itu 9.000 ton TBS pada 2027 dengan harga Rp2.500/kg. Kenaikan PBB-P5L Tahun Pajak 2027 dibanding 2026 akibat perubahan status blok tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp51.300.000", B: "Rp128.250.000", C: "Rp88.200.000", D: "Rp51.276.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Perubahan dari areal belum produktif menjadi areal produktif hanya menambah SIT per m² karena nilai tanah sudah dihitung pada 2026; kenaikan baru berlaku pada Tahun Pajak 2027 sesuai keadaan 1 Januari 2027.",
        jejakHitung: [ ["450 ha = 4.500.000 m² × SIT 5.700", "Rp25.650.000.000"], ["Kenaikan PBB 25.650.000.000 × 40% × 0,5%", "Rp51.300.000"] ],
        mengapaSalah: { B: "Kenaikan NJOP dikali 0,5% tanpa NJKP 40%", C: "Nilai tanah ikut dihitung lagi sebagai tambahan (4.100 + 5.700)", D: "NJOPTKP dikurangkan lagi, padahal sudah terpakai pada NJOP objek secara keseluruhan" },
        jebakan: "Kenaikan antartahun cukup dihitung dari selisih NJOP dikali 0,2%; proyeksi produksi tidak dipakai."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "PP 25/2002" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Penempatan SIT hanya pada areal produktif mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; nilai tanah dan SIT diberikan sebagai data penilaian di stem."
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
      id: "B8-092", topik: "B8.3", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-08",
      stem: "Data untuk soal V-B8-08: PT Samudra Mutiara Lestari menjalankan usaha pembudidayaan ikan kerapu di laut dan memiliki dua objek PBB-P5L sektor lainnya dengan NOP dan SPPT terpisah. Objek I di perairan Kabupaten Lombok Timur: NJOP bumi (areal perairan budidaya) Rp420.000.000 dan NJOP bangunan (keramba jaring apung berjangkar tetap dan rumah jaga berpancang) Rp360.000.000. Objek II di perairan Kabupaten Sumbawa: NJOP bumi Rp1.350.000.000 dan NJOP bangunan Rp2.150.000.000. Perusahaan juga memiliki dua kapal pengangkut ikan hidup senilai Rp6.000.000.000 serta gudang pendingin dan kantor di Kota Mataram dengan NJOP Rp2.400.000.000. Jumlah PBB-P5L 2026 dalam kedua SPPT tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.744.000", B: "Rp8.536.000", C: "Rp7.756.000", D: "Rp7.768.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Untuk objek sektor lainnya, NJKP ditentukan per objek: Objek II (NJOP Rp3,5 miliar) NJKP 40%, Objek I (NJOP Rp780 juta) NJKP 20%. NJOPTKP diberikan sekali, pada objek ber-NJOP terbesar (Objek II). Kapal dan gudang di Kota Mataram tidak masuk.",
        jejakHitung: [ ["Objek II NJOP 1.350.000.000 + 2.150.000.000", "Rp3.500.000.000 (≥ Rp1 miliar → 40%)"], ["Objek II (3.500.000.000 − 12.000.000) × 40% × 0,5%", "Rp6.976.000"], ["Objek I NJOP 420.000.000 + 360.000.000", "Rp780.000.000 (< Rp1 miliar → 20%)"], ["Objek I 780.000.000 × 20% × 0,5%", "Rp780.000"], ["Jumlah kedua SPPT", "Rp7.756.000"] ],
        mengapaSalah: { A: "NJOPTKP dikurangkan pada kedua objek (Objek I menjadi Rp768.000)", B: "Objek I memakai NJKP 40%, padahal NJOP-nya di bawah Rp1 miliar (Objek I menjadi Rp1.560.000)", D: "NJOPTKP diberikan pada objek ber-NJOP terkecil (Objek I Rp768.000; Objek II Rp7.000.000)" },
        jebakan: "Dua pengecoh hanya berselisih Rp12.000 dari kunci; NJKP per objek dan NJOPTKP sekali pada NJOP terbesar menentukan jawabannya."
      },
      dasarHukum: [ { pasal: "PP 25/2002" }, { pasal: "Pasal 3 ayat (3) UU PBB beserta penjelasannya", berlakuSejak: "1995-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Penggolongan pembudidayaan ikan di laut sebagai objek PBB-P5L sektor lainnya mengikuti ringkasan PMK 234/PMK.03/2022 pada lembar riset (stem menyatakannya sebagai data administrasi); NJOP diberikan di stem."
    },
    {
      id: "B8-093", topik: "B8.1", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-08", formulirRef: "SPOP.lspop.4",
      stem: "Lanjutan data V-B8-08: Untuk Tahun Pajak 2027, PT Samudra Mutiara Lestari memutakhirkan data objek melalui SPOP dan LSPOP elektronik. Data per 1 Januari 2027: (1) areal perairan budidaya di Lombok Timur dan Sumbawa; (2) keramba jaring apung berjangkar tetap dan rumah jaga berpancang; (3) dua kapal pengangkut ikan hidup; (4) gudang pendingin dan kantor di Kota Mataram. Pengisian yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) SPOP sebagai bumi; (2) LSPOP sebagai bangunan; (3) LSPOP sebagai bangunan karena dipakai untuk usaha budidaya; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram", B: "(1) tidak dilaporkan karena perairan laut milik negara; (2) LSPOP sebagai bangunan; (3) tidak dilaporkan karena benda bergerak; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram", C: "(1) SPOP sebagai bumi; (2) LSPOP sebagai bangunan; (3) tidak dilaporkan karena benda bergerak; (4) LSPOP sektor lainnya karena menunjang usaha budidaya", D: "(1) SPOP sebagai bumi; (2) LSPOP sebagai bangunan; (3) tidak dilaporkan karena benda bergerak; (4) tidak dilaporkan kepada DJP karena objek PBB-P2 Kota Mataram" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Areal perairan adalah bumi (Pasal 1 angka 1 UU PBB meliputi perairan), keramba berjangkar tetap dan rumah jaga berpancang adalah bangunan yang diuraikan dalam LSPOP, kapal adalah benda bergerak, sedangkan gudang dan kantor di Kota Mataram berada di luar kawasan usaha sehingga merupakan objek PBB-P2 daerah.",
        jejakHitung: [],
        mengapaSalah: { A: "Kapal tidak dilekatkan secara tetap sehingga bukan bangunan", B: "Bumi meliputi perairan pedalaman dan laut wilayah; perairan budidaya yang dimanfaatkan adalah objek", C: "Objek di darat di luar kawasan usaha tidak menjadi PBB-P5L hanya karena menunjang usaha" },
        jebakan: "Uji setiap aset: bumi atau bangunan, melekat tetap atau bergerak, di dalam atau di luar kawasan usaha."
      },
      dasarHukum: [ { pasal: "Pasal 1 angka 1–2 dan Pasal 9 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 38 ayat (1) UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Susunan SPOP/LSPOP sektor lainnya di Coretax belum dicek; kode formulirRef merujuk baris SPOP.lspop.4 (data bangunan dan sektor lainnya) pada peta formulir. Penggolongan pembudidayaan ikan di laut sebagai sektor lainnya mengikuti ringkasan PMK 234/PMK.03/2022."
    },
    {
      id: "B8-094", topik: "B8.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-08",
      stem: "Lanjutan data V-B8-08: SPPT PBB-P5L 2026 PT Samudra Mutiara Lestari untuk Objek I (Rp780.000) dan Objek II (Rp6.976.000) diterima pada 6 April 2026. Objek I dilunasi pada 5 Oktober 2026, sedangkan Objek II baru dilunasi pada 20 November 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp279.040", B: "Rp310.240", C: "Rp139.520", D: "Rp1.744.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kedua SPPT jatuh tempo 6 Oktober 2026. Objek I dilunasi sebelum jatuh tempo; Objek II terlambat 1 bulan 14 hari yang dihitung 2 bulan, sehingga denda 2 × 2% × Rp6.976.000.",
        jejakHitung: [ ["Jatuh tempo (6 April + 6 bulan)", "6 Oktober 2026"], ["Objek I dibayar 5 Oktober 2026", "tepat waktu, tanpa denda"], ["Objek II: 6 Oktober s.d. 20 November 2026", "1 bulan 14 hari → 2 bulan"], ["Denda 2 × 2% × 6.976.000", "Rp279.040"] ],
        mengapaSalah: { B: "Denda dikenakan juga atas Objek I yang dilunasi tepat waktu", C: "Bagian bulan dibulatkan ke bawah menjadi 1 bulan", D: "Memakai denda 25% milik SKP" },
        jebakan: "Denda dihitung per SPPT; SPPT yang lunas tepat waktu tidak ikut didenda."
      },
      dasarHukum: [ { pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "B8-095", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB (parafrase): Direktur Jenderal Pajak dapat mengeluarkan surat ketetapan pajak apabila SPOP tidak disampaikan dan setelah ditegur secara tertulis tidak disampaikan sebagaimana ditentukan dalam surat teguran. Jumlah pajak yang terutang dalam surat ketetapan pajak tersebut adalah pokok pajak ditambah denda administrasi sebesar 25% dihitung dari pokok pajak.",
      stem: "PT Hutan Borneo Raya tidak menyampaikan SPOP sektor perhutanan 2026 meskipun telah ditegur, sehingga DJP menerbitkan SKP PBB-P5L 2026 berdasarkan data administrasi dengan pokok Rp186.000.000. SKP diterima pada 8 Juni 2026 dan dilunasi seluruhnya pada 3 Juli 2026. Keberatan yang diajukan pada 20 Juli 2026 membuktikan bahwa luas areal produktif dalam data administrasi terlalu besar. Keputusan keberatan yang diterima pada 15 April 2027 menetapkan pokok PBB 2026 menjadi Rp150.000.000 dan menghitung ulang denda administrasinya. Perusahaan tidak mempunyai utang pajak lain. Berdasarkan kutipan tersebut, kelebihan pembayaran yang dikembalikan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp36.000.000", B: "Rp45.000.000", C: "Rp82.500.000", D: "Rp9.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Jumlah dalam SKP huruf a adalah pokok ditambah denda 25% dari pokok. Karena keputusan keberatan menurunkan pokok menjadi Rp150.000.000, denda 25% ikut dihitung ulang dari pokok baru, sehingga jumlah menurut keputusan Rp187.500.000 dan kelebihan atas pembayaran Rp232.500.000 adalah Rp45.000.000.",
        jejakHitung: [ ["Dibayar menurut SKP 186.000.000 × 125%", "Rp232.500.000"], ["Menurut keputusan 150.000.000 × 125%", "Rp187.500.000"], ["Kelebihan pembayaran", "Rp45.000.000"] ],
        mengapaSalah: { A: "Hanya selisih pokok yang dikembalikan; denda 25% atas selisih pokok terlupa", C: "Denda 25% dianggap hapus seluruhnya karena keberatan dikabulkan sebagian", D: "Hanya selisih denda yang dikembalikan" },
        jebakan: "Denda SKP huruf a melekat pada pokok; bila pokok turun, dendanya ikut turun, tetapi tidak hilang."
      },
      dasarHukum: [ { pasal: "Pasal 10 ayat (2) huruf a dan ayat (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Penghitungan ulang denda 25% mengikuti pokok baru dalam keputusan keberatan disimpulkan dari Pasal 10 ayat (3) dan Pasal 16 UU PBB; rincian aturan pelaksana (PMK 118/2024) belum dicek. Stem menyatakan bahwa keputusan menghitung ulang denda."
    },
    {
      id: "B8-096", topik: "B8.6", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002 (parafrase): Banding diajukan dalam jangka waktu 3 bulan sejak tanggal diterima keputusan yang dibanding, kecuali diatur lain dalam peraturan perundang-undangan perpajakan. Jangka waktu untuk mengajukan gugatan terhadap pelaksanaan penagihan pajak adalah 14 hari sejak tanggal pelaksanaan penagihan.",
      stem: "PT Kebun Sungai Lilin menghadapi tiga dokumen PBB-P5L pada 2026: (1) SKP PBB 2025 hasil pemeriksaan yang diterima pada 2 Februari 2026 dan dinilai keliru menghitung luas; (2) keputusan keberatan atas SPPT 2024 yang menolak seluruh keberatan dan diterima pada 9 Maret 2026; (3) Surat Paksa atas tunggakan STP PBB 2024 yang diberitahukan oleh jurusita pajak pada 14 April 2026 ke alamat yang menurut perusahaan keliru, sehingga pelaksanaannya dinilai cacat prosedur. Berdasarkan kutipan tersebut dan UU PBB, upaya hukum dan batas waktu yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) keberatan paling lambat 2 Mei 2026; (2) keberatan ulang paling lambat 9 Juni 2026; (3) gugatan paling lambat 28 April 2026", B: "(1) banding paling lambat 2 Mei 2026; (2) banding paling lambat 9 Juni 2026; (3) gugatan paling lambat 28 April 2026", C: "(1) keberatan paling lambat 2 Mei 2026; (2) banding paling lambat 9 Juni 2026; (3) keberatan paling lambat 14 Juli 2026", D: "(1) keberatan paling lambat 2 Mei 2026; (2) banding paling lambat 9 Juni 2026; (3) gugatan paling lambat 28 April 2026" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "SKP PBB diajukan keberatan dalam 3 bulan sejak diterima (Pasal 15 UU PBB); keputusan keberatan dapat dibanding ke Pengadilan Pajak dalam 3 bulan sejak diterima; pelaksanaan Surat Paksa yang dinilai cacat prosedur digugat dalam 14 hari sejak tanggal pelaksanaan penagihan.",
        jejakHitung: [ ["(1) 2 Februari 2026 + 3 bulan", "2 Mei 2026"], ["(2) 9 Maret 2026 + 3 bulan", "9 Juni 2026"], ["(3) 14 April 2026 + 14 hari", "28 April 2026"] ],
        mengapaSalah: { A: "Tidak ada keberatan kedua; upaya atas keputusan keberatan adalah banding", B: "SKP belum pernah diajukan keberatan; banding hanya atas keputusan keberatan", C: "Surat Paksa bukan objek keberatan; pelaksanaan penagihan digugat dalam 14 hari" },
        jebakan: "Petakan dokumen ke upayanya: ketetapan → keberatan, keputusan keberatan → banding, pelaksanaan penagihan → gugatan."
      },
      dasarHukum: [ { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 35 ayat (2) dan Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 23 ayat (2) huruf a UU KUP" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "B8-097", topik: "B8.6", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "Konsultan pajak membandingkan dua keberatan PT Agro Mitra Sejati: keberatan atas SKPKB PPh Badan Tahun Pajak 2024 dan keberatan atas SKP PBB-P5L Tahun Pajak 2026. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan juga dikenai denda 30% bila ditolak", B: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, dan jatuh tempo SKP ditangguhkan sampai keputusan keberatan terbit", C: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 30% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan UU PBB tidak mengatur denda serupa", D: "SKPKB: keberatan dalam 3 bulan sejak tanggal dikirim dan denda 50% bila ditolak atau dikabulkan sebagian; SKP PBB: keberatan dalam 3 bulan sejak tanggal diterima, tidak menunda kewajiban membayar, dan UU PBB tidak mengatur denda serupa" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Keberatan SKPKB tunduk pada Pasal 25 UU KUP (3 bulan sejak tanggal dikirim; denda 30% sejak UU HPP bila ditolak atau dikabulkan sebagian), sedangkan keberatan SKP PBB tunduk pada Pasal 15–16 UU PBB (3 bulan sejak diterima; tidak menunda pembayaran) yang tidak memuat denda atas keberatan yang ditolak.",
        jejakHitung: [],
        mengapaSalah: { A: "Denda 30% Pasal 25 ayat (9) UU KUP melekat pada keberatan atas ketetapan menurut UU KUP, bukan pada SKP PBB", B: "Pengajuan keberatan PBB tidak menunda kewajiban membayar; SKP tetap jatuh tempo 1 bulan sejak diterima", D: "Denda 50% adalah ketentuan sebelum UU HPP" },
        jebakan: "Soal lintas KUP–PBB: titik awal (dikirim vs diterima) dan sanksi atas keberatan berbeda."
      },
      dasarHukum: [ { pasal: "Pasal 25 ayat (3) dan (9) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 15–16 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Tidak berlakunya denda Pasal 25 ayat (9) UU KUP atas keberatan PBB disimpulkan dari pengaturan keberatan tersendiri dalam Pasal 15–16 UU PBB; aturan pelaksana terbaru (PMK 118/2024) belum dicek untuk PBB."
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
      id: "B8-099", topik: "B8.7", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Pada 20 Agustus 2026 PT Kebun Lestari Jaya melunasi SPPT PBB-P5L 2026 sebesar Rp48.600.000 dan denda STP PBB-P5L 2025 sebesar Rp1.944.000 melalui rekening bank. Sebelumnya perusahaan tidak mencatat utang PBB, dan pembayaran langsung dibebankan. Jurnal yang tepat pada tanggal pembayaran adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Debit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000; Kredit Utang PBB Rp50.544.000", B: "Debit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000; Kredit Kas/Bank Rp50.544.000", C: "Debit Kas/Bank Rp50.544.000; Kredit Beban PBB Rp48.600.000 dan Beban Denda Pajak Rp1.944.000", D: "Debit Pajak Dibayar di Muka (kredit pajak PPh) Rp50.544.000; Kredit Kas/Bank Rp50.544.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembayaran langsung dibebankan sehingga beban PBB dan beban denda didebit, sedangkan kas/bank dikredit sebesar jumlah yang keluar. Secara fiskal, beban PBB dapat dikurangkan, tetapi beban denda dikoreksi positif.",
        jejakHitung: [ ["Beban PBB", "Rp48.600.000"], ["Beban denda pajak", "Rp1.944.000"], ["Kas/bank keluar", "Rp50.544.000"] ],
        mengapaSalah: { A: "Pembayaran mengurangi kas/bank; utang PBB tidak pernah dicatat sebelumnya", C: "Sisi debit dan kredit terbalik", D: "PBB bukan kredit pajak PPh sehingga tidak dicatat sebagai pajak dibayar di muka yang dapat dikreditkan" },
        jebakan: "Soal lintas akuntansi: catat beban dan kas dengan benar, lalu ingat bahwa denda dikoreksi secara fiskal."
      },
      dasarHukum: [ { pasal: "Pasal 6 ayat (1) huruf a dan Pasal 9 ayat (1) huruf k UU PPh" }, { pasal: "Pasal 12 UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "B8-100", topik: "B8.8", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3,
      kutipan: "Pasal 8 ayat (3) dan Pasal 18 ayat (1) UU PBB (parafrase): Tempat pajak yang terutang adalah di wilayah kabupaten/kota yang meliputi letak objek pajak. Hasil penerimaan pajak merupakan penerimaan negara yang dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan pembagian sekurang-kurangnya 90% untuk Pemerintah Daerah. Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan 100% untuk daerah, dengan porsi terbesar (73,8%) untuk kabupaten/kota penghasil.",
      stem: "HGU kebun kelapa sawit PT Sawit Dua Kabupaten seluas 9.000 ha membentang di Kabupaten Kampar (6.000 ha) dan Kabupaten Rokan Hulu (3.000 ha); pabrik kelapa sawit dan perumahan karyawan seluruhnya berada di bagian Kabupaten Kampar. Kantor pusat dan KPP terdaftar perusahaan berada di Kota Pekanbaru. Berdasarkan kutipan tersebut, pernyataan yang paling tepat mengenai tempat terutang, pendataan objek, dan daerah penerima bagi hasil adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PBB terutang di Kota Pekanbaru tempat wajib pajak terdaftar, sehingga seluruh kebun didata dengan satu NOP; porsi kabupaten penghasil diterima masing-masing kabupaten sebanding dengan PBB atas bagian kebun di wilayahnya", B: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; seluruh porsi kabupaten penghasil diterima Kabupaten Kampar karena pabrik dan perumahan berada di sana", C: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; bagi hasil diterima Provinsi Riau seluruhnya untuk kemudian dibagi rata kepada kedua kabupaten", D: "PBB terutang di masing-masing kabupaten untuk bagian kebun di wilayahnya, sehingga bagian Kampar dan bagian Rokan Hulu didata dengan NOP sendiri; porsi kabupaten penghasil diterima masing-masing kabupaten sebanding dengan PBB atas bagian kebun di wilayahnya" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 8 ayat (3) menetapkan tempat terutang menurut letak objek, sehingga bagian kebun di Kampar dan di Rokan Hulu terutang di kabupaten masing-masing dan didata terpisah. Menurut UU 1/2022, DBH PBB 100% untuk daerah dengan porsi terbesar (73,8%) bagi kabupaten/kota penghasil, sehingga tiap kabupaten menerima porsi penghasil sesuai PBB atas bagian kebun di wilayahnya; letak pabrik dan domisili wajib pajak tidak menentukan.",
        jejakHitung: [],
        mengapaSalah: { A: "Domisili dan KPP terdaftar wajib pajak tidak menentukan tempat terutang", B: "Letak pabrik tidak menarik seluruh kebun ke Kampar; bagian kebun di Rokan Hulu tetap terutang dan porsi penghasilnya diterima Rokan Hulu", C: "Porsi terbesar DBH PBB disalurkan langsung kepada kabupaten/kota penghasil sesuai letak objek; provinsi hanya menerima porsinya sendiri (16,2%), bukan seluruh DBH untuk dibagi rata" },
        jebakan: "Objek yang melintasi batas kabupaten dipecah menurut letaknya; jangan ditarik ke lokasi pabrik atau kantor pusat."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (3) dan Pasal 18 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 113 UU 1/2022; PMK 67/2024 (DBH PBB)" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Praktik pendataan objek PBB-P5L yang membentang di dua kabupaten dengan NOP terpisah belum dicek ke aturan pelaksana. Rincian DBH PBB 100% (16,2% provinsi, 73,8% kabupaten/kota penghasil, 10% kabupaten/kota lain dalam provinsi) diambil dari sumber sekunder yang mengutip Pasal 113 UU 1/2022 dan PMK 67/2024; teks primer belum dibuka."
    },
    {
      id: "B8-101", topik: "B8.8", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2,
      kutipan: "Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan sebesar 100% untuk daerah, dengan rincian 16,2% untuk provinsi yang bersangkutan, 73,8% untuk kabupaten/kota penghasil, dan 10% untuk kabupaten/kota lainnya dalam provinsi yang bersangkutan. Pasal 18 ayat (1) UU PBB sendiri hanya menetapkan imbangan sekurang-kurangnya 90% untuk pemerintah daerah.",
      stem: "Pada 2026 PT Tambang dan Kebun Andalas melunasi pembayaran berikut: PBB-P5L kebun karet di Kabupaten Dharmasraya Rp186.400.000; PBB-P5L tambang batubara di Kabupaten Sijunjung Rp742.800.000; PBB-P2 atas kantor di Kota Padang Rp9.600.000; PPh Pasal 21 karyawan Rp1.240.000.000; dan PPN Rp2.860.000.000. Kedua kabupaten berada di Provinsi Sumatera Barat; abaikan waktu penyaluran DBH. Berdasarkan kutipan tersebut, jumlah DBH PBB yang menjadi porsi kabupaten penghasil (Kabupaten Dharmasraya dan Kabupaten Sijunjung bersama-sama) dari pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp836.280.000", B: "Rp778.669.600", C: "Rp685.749.600", D: "Rp692.834.400" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "DBH PBB hanya bersumber dari PBB yang dikelola pusat (PBB-P5L); PBB-P2 adalah PAD Kota Padang, sedangkan PPh Pasal 21 dan PPN bukan sumber DBH PBB. Porsi kabupaten/kota penghasil adalah 73,8% × Rp929.200.000 = Rp685.749.600.",
        jejakHitung: [ ["PBB-P5L 186.400.000 + 742.800.000", "Rp929.200.000"], ["DBH PBB untuk daerah 100%", "Rp929.200.000"], ["Porsi kabupaten/kota penghasil 73,8% × 929.200.000", "Rp685.749.600"] ],
        mengapaSalah: { A: "Memakai imbangan minimal 90% Pasal 18 ayat (1) UU PBB sebagai porsi kabupaten; UU 1/2022 membagi 100% DBH PBB dan porsi penghasil hanya 73,8%", B: "Porsi 10% untuk kabupaten/kota lainnya ikut dijumlahkan (83,8%), padahal porsi itu untuk kabupaten/kota selain daerah penghasil", D: "PBB-P2 Kota Padang ikut dihitung (73,8% × Rp938.800.000), padahal pajak daerah langsung menjadi PAD" },
        jebakan: "Data PPh Pasal 21 dan PPN sengaja disertakan; porsi kabupaten penghasil 73,8% dihitung hanya dari PBB-P5L, bukan 90% Pasal 18 UU PBB."
      },
      dasarHukum: [ { pasal: "Pasal 113 UU 1/2022" }, { pasal: "PMK 67/2024 (pengelolaan DBH)" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Rincian DBH PBB 16,2%/73,8%/10% diambil dari sumber sekunder yang mengutip Pasal 113 UU 1/2022 dan PMK 67/2024; teks primer belum dibuka. Persentase diberikan dalam kutipan sehingga yang diuji adalah penggolongan penerimaan dan porsi penghasil."
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
      id: "B8-104", topik: "B8.6", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-09",
      stem: "Data untuk soal ini dan soal berikutnya (V-B8-09): PT Sawit Tanjung Harapan memiliki satu objek PBB-P5L perkebunan di Kabupaten Kotawaringin Barat. Pada 2026 bagian pajaknya mencatat empat masalah: (1) SPPT 2026 yang diterima 2 Januari 2026 mencantumkan alamat objek dan NOP kebun lain, sedangkan nama wajib pajak, luas, dan jumlah pajak benar; (2) SKP PBB 2025 hasil pemeriksaan yang diterima 5 Januari 2026 menetapkan areal produktif 3.200 ha, padahal hasil pengukuran izin usaha hanya 2.800 ha; kekeliruan itu baru diketahui pada Agustus 2026 dan belum pernah diajukan keberatan; (3) STP PBB 2026 memuat denda keterlambatan, padahal pembayaran SPPT pada hari jatuh tempo gagal karena gangguan sistem bank persepsi dan baru berhasil keesokan harinya; (4) banjir pada Juli 2026 merusak 30% tanaman, sedangkan SPPT 2026 sudah sesuai keadaan objek pada 1 Januari 2026. Jalur penyelesaian yang tepat untuk masalah (1), (2), (3), dan (4) berturut-turut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pembetulan SPPT; pengurangan atau pembatalan SKP PBB yang tidak benar; pengurangan denda administratif PBB; pengurangan PBB",
        B: "Keberatan; keberatan; keberatan atas STP PBB; pengurangan PBB",
        C: "Pembetulan SPPT; banding ke Pengadilan Pajak; pembetulan STP PBB; keberatan",
        D: "Pengurangan PBB; pembetulan SKP PBB; pengurangan PBB; pembetulan SPPT"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "(1) Salah tulis identitas objek tanpa sengketa nilai → pembetulan. (2) Sengketa materi atas SKP yang tenggat keberatannya sudah lewat (3 bulan sejak 5 Januari 2026, yaitu 5 April 2026) dan belum pernah diajukan keberatan → pengurangan atau pembatalan SKP PBB yang tidak benar. (3) Denda yang timbul bukan karena kesalahan wajib pajak → pengurangan atau penghapusan denda administratif. (4) Penetapan benar tetapi objek terkena bencana → pengurangan PBB Pasal 19.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Keberatan atas SKP 2025 sudah lewat 3 bulan, STP bukan objek keberatan PBB, dan kesalahan tulis tidak memerlukan keberatan.",
          C: "Banding hanya atas keputusan keberatan; STP tidak memuat kesalahan hitung; banjir setelah 1 Januari bukan alasan keberatan karena penetapan sudah benar.",
          D: "Pengurangan Pasal 19 untuk kondisi objek atau bencana, bukan kesalahan identitas; luas areal yang keliru adalah sengketa materi, bukan salah tulis."
        },
        jebakan: "Menjadikan keberatan jalur tunggal untuk semua masalah PBB; tiap masalah punya jalurnya sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 15, 19, dan 20 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Nomor pasal UU PBB untuk pengurangan denda administratif (Pasal 20 menurut PMK 81/PMK.03/2017; beberapa peraturan lama merujuk pasal lain) dan rincian PMK 118/2024 s.t.d.d. PMK 71/2026 untuk PBB dikonfirmasi dari sumber sekunder; cek teks primer."
    },
    {
      id: "B8-105", topik: "B8.6", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-09",
      stem: "Lanjutan V-B8-09: SPPT PBB-P5L 2026 PT Sawit Tanjung Harapan sebesar Rp640.000.000 diterima pada 2 Januari 2026. Pada hari jatuh tempo pembayaran gagal karena gangguan sistem bank persepsi (dibuktikan surat keterangan bank), dan PBB baru berhasil dilunasi penuh keesokan harinya. Pada 5 Oktober 2026 perusahaan menerima STP PBB berisi denda keterlambatan dan belum membayarnya. Asumsikan bagian dari bulan dihitung satu bulan penuh. Jumlah denda dalam STP dan langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp12.800.000; mengajukan keberatan atas STP PBB paling lambat 3 bulan sejak STP diterima",
        B: "Rp12.800.000; mengajukan permohonan pengurangan atau penghapusan denda administratif PBB karena denda timbul bukan karena kesalahan wajib pajak, sebelum denda itu dibayar",
        C: "Rp153.600.000; mengajukan pengurangan PBB Pasal 19 karena keadaan kahar",
        D: "Rp160.000.000; mengajukan pembetulan STP PBB karena kesalahan hitung"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jatuh tempo SPPT 6 bulan sejak diterima (2 Juli 2026); terlambat satu hari dihitung satu bulan sehingga denda 2% × Rp640.000.000 = Rp12.800.000. Karena denda timbul bukan karena kesalahan wajib pajak dan belum dibayar, jalurnya permohonan pengurangan atau penghapusan denda administratif PBB.",
        jejakHitung: [["Jatuh tempo: 2 Januari 2026 + 6 bulan", "2 Juli 2026"], ["Dilunasi 3 Juli 2026", "terlambat 1 hari → 1 bulan"], ["Denda 2% × 1 × Rp640.000.000", "Rp12.800.000"]],
        mengapaSalah: {
          A: "STP bukan objek keberatan PBB; keberatan hanya atas SPPT dan SKP.",
          C: "Denda dihitung per bulan keterlambatan (1 bulan), bukan 12 bulan; pengurangan Pasal 19 ditujukan pada pokok PBB, bukan denda.",
          D: "25% adalah denda dalam SKP (Pasal 10 UU PBB), bukan denda keterlambatan bayar; STP tidak memuat kesalahan hitung."
        },
        jebakan: "Mencampur denda 25% SKP dengan denda 2% sebulan, dan mengira STP dapat diajukan keberatan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 20 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }],
      anggaranDetik: 160, verifikasi: "◐",
      peringatan: "Nomor pasal UU PBB untuk pengurangan denda administratif (Pasal 20 menurut PMK 81/PMK.03/2017; beberapa peraturan lama merujuk pasal lain) dan rincian PMK 118/2024 s.t.d.d. PMK 71/2026 untuk PBB dikonfirmasi dari sumber sekunder; cek teks primer."
    },
    {
      id: "B8-106", topik: "B8.6", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Hutan Kapuas Lestari menerima SKP PBB-P5L 2025 sebesar Rp410.000.000 pada 10 Februari 2026. SKP itu memakai NJOP bumi hutan tanaman industri yang menurut perusahaan berasal dari data kawasan lain. Surat keberatan baru dikirim pada 25 Mei 2026 tanpa alasan keadaan di luar kekuasaan, sehingga DJP memberitahukan bahwa keberatan tidak dipertimbangkan karena tidak memenuhi syarat. Perusahaan tetap yakin SKP itu tidak benar dan memiliki bukti data kawasan yang lengkap. Upaya yang masih tersedia bagi perusahaan adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Banding ke Pengadilan Pajak atas surat pemberitahuan bahwa keberatan tidak dipertimbangkan, paling lambat 3 bulan sejak surat itu diterima",
        B: "Mengajukan keberatan kedua atas SKP yang sama dengan melampirkan bukti data kawasan",
        C: "Mengajukan permohonan pengurangan atau pembatalan SKP PBB yang tidak benar, karena keberatannya tidak dipertimbangkan",
        D: "Mengajukan pengurangan PBB Pasal 19 dengan alasan kondisi tertentu objek pajak"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keberatan diajukan setelah lewat 3 bulan (batasnya 10 Mei 2026) sehingga tidak dipertimbangkan; tidak ada keputusan keberatan yang dapat dibanding. Atas SKP PBB yang tidak benar dan keberatannya tidak dipertimbangkan, tersedia permohonan pengurangan atau pembatalan SKP PBB yang tidak benar.",
        jejakHitung: [["SKP diterima", "10 Februari 2026"], ["Batas keberatan (+ 3 bulan)", "10 Mei 2026"], ["Keberatan dikirim", "25 Mei 2026 → tidak dipertimbangkan"]],
        mengapaSalah: {
          A: "Banding hanya terhadap keputusan keberatan; pemberitahuan bahwa keberatan tidak dipertimbangkan bukan keputusan keberatan.",
          B: "Satu SKP hanya dapat diajukan satu keberatan, dan tenggatnya sudah lewat.",
          D: "Pengurangan Pasal 19 adalah keringanan atas penetapan yang benar (kondisi objek/subjek atau bencana), bukan koreksi NJOP yang keliru."
        },
        jebakan: "Mengira jalan satu-satunya setelah keberatan gagal adalah banding."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "B8-107", topik: "B8.6", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kebun Lestari Mandiri menyampaikan SPOP 2026 dengan lampiran areal produktif 2.150 ha. Dalam SPPT PBB-P5L 2026 yang diterima pada 16 Maret 2026, luas areal produktif terekam 2.510 ha (angka tertukar), sedangkan data lain sesuai SPOP. Dasar penghitungan: NJOP bumi areal produktif Rp45.000.000 per ha (sudah termasuk standar investasi tanaman), NJOP bumi areal lain dan bangunan Rp7.050.000.000, NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%. SPPT mencantumkan PBB Rp239.976.000. Jalur yang paling tepat dan jumlah PBB 2026 setelah diperbaiki adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pembetulan SPPT karena kesalahan tulis; PBB menjadi Rp207.576.000",
        B: "Keberatan, dan selama keberatan diproses SPPT tidak perlu dibayar; PBB menjadi Rp207.576.000",
        C: "Pembetulan SPPT karena kesalahan tulis; PBB menjadi Rp207.600.000",
        D: "Pengurangan PBB Pasal 19 sebesar selisih Rp32.400.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Luas yang terekam berbeda dari SPOP karena angka tertukar adalah kesalahan tulis yang diperbaiki dengan pembetulan SPPT. Dengan luas 2.150 ha, PBB = 0,5% × 40% × (NJOP − NJOPTKP) = Rp207.576.000.",
        jejakHitung: [["NJOP areal produktif: 2.150 ha × Rp45.000.000", "Rp96.750.000.000"], ["+ NJOP areal lain dan bangunan", "Rp7.050.000.000"], ["NJOP − NJOPTKP Rp12.000.000", "Rp103.788.000.000"], ["NJKP 40%", "Rp41.515.200.000"], ["PBB 0,5% × NJKP", "Rp207.576.000"]],
        mengapaSalah: {
          B: "Pengajuan keberatan tidak menunda kewajiban membayar SPPT pada jatuh temponya; lagi pula kesalahan rekam data cukup dibetulkan.",
          C: "Lupa mengurangkan NJOPTKP Rp12.000.000 sehingga PBB menjadi Rp207.600.000.",
          D: "Pengurangan Pasal 19 adalah keringanan atas penetapan yang benar, bukan koreksi luas yang salah rekam; selisih Rp32.400.000 juga mengabaikan NJOPTKP."
        },
        jebakan: "Memakai keberatan untuk kesalahan rekam data dan lupa NJOPTKP saat menghitung ulang."
      },
      dasarHukum: [{ pasal: "Pasal 6 dan 7 UU PBB s.t.d.d. UU 12/1994", berlakuSejak: "1995-01-01" }, { pasal: "PMK 118/2024 (pembetulan)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B8-108", topik: "B8.6", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Agro Seruyan Jaya mempunyai dua objek PBB-P5L. PBB 2026 Objek I sebesar Rp185.000.000 dibayar tepat pada jatuh tempo, tetapi kode billing dibuat dengan NOP Objek II yang SPPT-nya sudah lunas. Akibatnya sistem mencatat SPPT Objek I belum dibayar, dan pada Oktober 2026 KPP menerbitkan STP PBB Objek I berisi denda Rp14.800.000 (2% × 4 bulan). Perusahaan belum membayar STP tersebut. Langkah yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengajukan keberatan atas STP PBB paling lambat 3 bulan sejak STP diterima",
        B: "Mengajukan pemindahbukuan pembayaran ke NOP Objek I (tanggal pembayaran tetap tanggal setor semula), lalu mengajukan permohonan pembatalan STP PBB yang tidak benar",
        C: "Membayar denda Rp14.800.000 lebih dulu, kemudian mengajukan permohonan pengurangan denda administratif",
        D: "Mengajukan pengurangan PBB Pasal 19 sebesar denda yang tercantum dalam STP"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pajak Objek I sebenarnya dibayar tepat waktu, tetapi tercatat pada NOP lain. Setelah pemindahbukuan (tanggal bayar mengikuti setoran semula), tidak ada keterlambatan sehingga STP PBB yang memuat denda menjadi tidak benar dan dapat dimohonkan pembatalannya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "STP bukan objek keberatan PBB.",
          C: "Pengurangan denda hanya atas denda yang belum dibayar; lagi pula di sini dendanya tidak seharusnya ada, sehingga yang tepat pembatalan STP.",
          D: "Pengurangan Pasal 19 ditujukan pada pokok PBB karena kondisi objek/subjek atau bencana, bukan denda."
        },
        jebakan: "Membayar denda lebih dulu sehingga kehilangan kesempatan meminta pengurangan, atau memilih keberatan atas STP."
      },
      dasarHukum: [{ pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2026-10-02" }, { pasal: "PMK 81/2024 (pemindahbukuan)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 130, verifikasi: "◐",
      peringatan: "Ketentuan bahwa tanggal pembayaran hasil pemindahbukuan mengikuti tanggal setor semula diambil dari praktik PMK pemindahbukuan sebelumnya; cek PMK 81/2024. Rincian pembatalan STP PBB menurut PMK 118/2024 s.t.d.d. PMK 71/2026 dikonfirmasi dari sumber sekunder."
    },
    {
      id: "B8-109", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-10",
      stem: "Data untuk soal V-B8-10: PT Gula Ogan Manis memegang HGU kebun tebu di Kabupaten Ogan Komering Ilir (Provinsi Sumatera Selatan), terdaftar di KPP di Kota Palembang, dan tidak memiliki objek PBB-P5L lain. Data penilaian per 1 Januari 2026: areal produktif (tebu yang sedang dipanen untuk giling) 4.800 ha dengan nilai tanah Rp3.500/m² dan SIT tebu Rp2.900/m²; areal belum produktif (tanaman baru yang belum pernah digiling) 900 ha dengan nilai tanah Rp3.500/m²; areal emplasemen (pabrik gula, gudang, perumahan) 60 ha dengan nilai Rp12.000/m²; areal tidak produktif (rawa) 240 ha dengan nilai Rp800/m²; NJOP bangunan (pabrik gula, gudang gula, perumahan karyawan, jalan kebun) Rp185.000.000.000. Perusahaan juga membina kebun tebu rakyat seluas 1.500 ha di luar HGU yang bersertifikat hak milik atas nama masing-masing petani mitra dan terdaftar sebagai objek PBB-P2 kabupaten (NJOP seluruhnya Rp52.500.000.000). PBB-P5L terutang PT Gula Ogan Manis Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.117.816.000", B: "Rp1.170.616.000", C: "Rp1.065.616.000", D: "Rp695.616.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Hanya areal produktif yang dinilai dengan nilai tanah ditambah SIT; areal belum produktif, emplasemen, dan rawa hanya nilai tanah. Pabrik gula dan perumahan di emplasemen kebun adalah bangunan objek PBB-P5L, sedangkan kebun tebu rakyat milik petani di luar HGU merupakan objek PBB-P2 atas nama petani. PBB = 0,5% × 40% × (NJOP − Rp12.000.000).",
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
          A: "SIT tebu ikut dikenakan pada 900 ha tanaman baru yang belum digiling (+9.000.000 m² × Rp2.900 = Rp26.100.000.000 NJOP).",
          B: "NJOP kebun tebu rakyat Rp52.500.000.000 ikut dijumlahkan, padahal tanah itu hak milik petani di luar HGU dan sudah menjadi objek PBB-P2 atas nama petani.",
          D: "NJOP bangunan pabrik gula dan perumahan dikeluarkan karena dikira objek PBB-P2 industri, padahal bangunan di dalam kawasan kebun ikut objek PBB-P5L perkebunan."
        },
        jebakan: "Data kebun rakyat mitra dan pabrik gula sengaja disertakan untuk menguji batas objek; SIT hanya untuk areal produktif."
      },
      dasarHukum: [{ pasal: "Pasal 1, 5, 6, dan 7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "PMK 23/PMK.03/2014" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }, { pasal: "Pasal 38 UU 1/2022", berlakuSejak: "2022-01-05" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Rumus areal produktif (nilai tanah + SIT) dan penilaian areal belum produktif tanpa SIT mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; nilai per m² diberikan sebagai data penilaian di stem, dan status kebun rakyat sebagai objek PBB-P2 dinyatakan sebagai data administrasi."
    },
    {
      id: "B8-110", topik: "B8.8", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-10",
      kutipan: "Pasal 113 UU 1/2022 (parafrase): DBH PBB ditetapkan sebesar 100% untuk daerah, dengan rincian 16,2% untuk provinsi yang bersangkutan, 73,8% untuk kabupaten/kota penghasil, dan 10% untuk kabupaten/kota lainnya dalam provinsi yang bersangkutan. Pasal 18 ayat (1) UU PBB (parafrase): hasil penerimaan PBB dibagi antara Pemerintah Pusat dan Pemerintah Daerah dengan imbangan sekurang-kurangnya 90% untuk Pemerintah Daerah.",
      stem: "Lanjutan data V-B8-10: PT Gula Ogan Manis melunasi PBB-P5L 2026 kebun tebu di Kabupaten Ogan Komering Ilir (Provinsi Sumatera Selatan) sebesar Rp1.065.616.000. Porsi kabupaten penghasil sudah dihitung oleh Kabupaten Ogan Komering Ilir. Seorang staf Badan Keuangan Daerah Provinsi Sumatera Selatan kini menyusun proyeksi untuk provinsi dan berpendapat bahwa porsi 10% juga masuk kas provinsi untuk kemudian dibagikan menurut kebijakan gubernur, sehingga pendapatan DBH PBB provinsi menjadi 26,2%. Abaikan waktu dan mekanisme penyaluran. Berdasarkan kutipan tersebut, porsi DBH PBB dari pembayaran itu yang menjadi hak Provinsi Sumatera Selatan sendiri dan perlakuan porsi 10% adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Provinsi Rp172.629.792; Rp106.561.600 menjadi hak kabupaten/kota lainnya dalam Provinsi Sumatera Selatan, bukan pendapatan provinsi",
        B: "Provinsi Rp279.191.392 (16,2% + 10%); porsi 10% dibagikan kemudian oleh provinsi menurut kebijakan gubernur",
        C: "Provinsi Rp106.561.600; Rp172.629.792 menjadi hak kabupaten/kota lainnya dalam Provinsi Sumatera Selatan",
        D: "Provinsi Rp172.629.792; Rp106.561.600 tetap menjadi penerimaan Pemerintah Pusat sesuai imbangan sekurang-kurangnya 90% untuk daerah"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Menurut kutipan Pasal 113 UU 1/2022, seluruh DBH PBB (100%) untuk daerah dan dirinci langsung kepada tiga kelompok penerima: provinsi 16,2%, kabupaten/kota penghasil 73,8%, dan kabupaten/kota lainnya dalam provinsi 10%. Porsi 10% adalah hak kabupaten/kota lainnya, bukan pendapatan provinsi yang dibagikan menurut kebijakan gubernur, dan tidak ada lagi bagian pusat.",
        jejakHitung: [
          ["Sumber DBH PBB (PBB-P5L)", "Rp1.065.616.000"],
          ["Provinsi 16,2% × 1.065.616.000", "Rp172.629.792"],
          ["Kabupaten/kota lainnya 10% × 1.065.616.000", "Rp106.561.600"],
          ["Kabupaten penghasil 73,8% (sudah dihitung kabupaten)", "Rp786.424.608"],
          ["Jumlah (100% untuk daerah)", "Rp1.065.616.000"]
        ],
        mengapaSalah: {
          B: "Mengikuti pendapat staf: porsi 10% dimasukkan ke pendapatan provinsi (26,2%), padahal kutipan menyebut 10% itu untuk kabupaten/kota lainnya, bukan untuk provinsi.",
          C: "Persentase provinsi dan kabupaten/kota lainnya tertukar; provinsi 16,2%, kabupaten/kota lainnya 10%.",
          D: "Memakai pola imbangan Pasal 18 ayat (1) UU PBB (daerah sekurang-kurangnya 90%) sehingga 10% dianggap tersisa di pusat; menurut kutipan Pasal 113 UU 1/2022 seluruh DBH PBB untuk daerah."
        },
        jebakan: "Angka 10% bukan bagian pusat dan bukan tambahan bagi provinsi; dalam rincian 16,2/73,8/10 ia milik kabupaten/kota lainnya dalam provinsi."
      },
      dasarHukum: [{ pasal: "Pasal 113 UU 1/2022", berlakuSejak: "2022-01-05" }, { pasal: "PMK 67/2024 (pengelolaan DBH)" }, { pasal: "Pasal 18 ayat (1) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Rincian DBH PBB 16,2%/73,8%/10% (Pasal 113 UU 1/2022; PMK 67/2024) diambil dari sumber sekunder; teks primer belum dibuka. Persentase diberikan dalam kutipan, sehingga yang diuji adalah pembacaan kelompok penerima. Belum dipastikan pula apakah porsi 10% dibagikan hanya kepada kabupaten/kota selain penghasil atau kepada seluruh kabupaten/kota dalam provinsi; kunci tidak bergantung pada hal itu."
    },
    {
      id: "B8-111", topik: "B8.7", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"], kasusId: "V-B8-10",
      stem: "Lanjutan data V-B8-10: SPPT PBB-P5L 2026 PT Gula Ogan Manis sebesar Rp1.065.616.000 diterbitkan pada 27 Februari 2026 dan diterima perusahaan pada 16 Maret 2026. Karena menunggu pencairan kredit modal kerja musim giling, PBB baru dilunasi seluruhnya pada 22 Oktober 2026. KPP kemudian menerbitkan STP PBB yang diterima perusahaan pada 30 Oktober 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Denda administrasi dalam STP dan batas pelunasan STP tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp21.312.320; paling lambat 30 November 2026",
        B: "Rp42.624.640; paling lambat 30 November 2026",
        C: "Rp42.624.640; paling lambat 30 April 2027",
        D: "Rp266.404.000; paling lambat 30 November 2026"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "SPPT jatuh tempo 6 bulan sejak diterima (16 September 2026). Pelunasan 22 Oktober 2026 terlambat 1 bulan 6 hari, dihitung 2 bulan, sehingga denda 2 × 2% dari pokok. STP PBB harus dilunasi paling lambat 1 bulan sejak diterima.",
        jejakHitung: [
          ["Jatuh tempo SPPT: 16 Maret 2026 + 6 bulan", "16 September 2026"],
          ["16 September s.d. 22 Oktober 2026", "1 bulan 6 hari → 2 bulan"],
          ["Denda 2 × 2% × 1.065.616.000", "Rp42.624.640"],
          ["Jatuh tempo STP: 30 Oktober 2026 + 1 bulan", "30 November 2026"]
        ],
        mengapaSalah: {
          A: "Sisa 6 hari diabaikan sehingga keterlambatan dihitung 1 bulan, padahal soal menetapkan bagian bulan dihitung penuh.",
          C: "Jangka 6 bulan milik SPPT diterapkan pada STP; STP (dan SKP) PBB jatuh tempo 1 bulan sejak diterima.",
          D: "Memakai denda 25% milik SKP PBB (Pasal 10 ayat (3)), padahal keterlambatan bayar SPPT dikenai 2% sebulan."
        },
        jebakan: "Dua tenggat berbeda dalam satu soal: SPPT 6 bulan, STP 1 bulan, keduanya dihitung sejak tanggal diterima."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1), (3), dan (4) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 10 ayat (3) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "B8-112", topik: "B8.4", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Hutan Tanaman Tebo Lestari memegang perizinan berusaha pemanfaatan hutan tanaman (eukaliptus) di Kabupaten Tebo dan tidak memiliki objek PBB-P5L lain. Data per 1 Januari 2026: areal produktif (tanaman siap tebang) 8.400 ha dengan nilai tanah Rp1.600/m² dan SIT hutan tanaman Rp2.200/m², termasuk 2.000 ha yang ditebang pada Maret 2026; areal belum produktif (tanaman muda) 5.600 ha dengan nilai tanah Rp1.600/m², termasuk 1.500 ha yang ditebang pada September 2025 dan ditanami ulang pada Oktober 2025 (dalam SPPT 2025 masih tercatat produktif); areal emplasemen/base camp 25 ha dengan nilai Rp7.000/m²; NJOP bangunan (kantor lapangan, mess, jalan angkut, jembatan) Rp7.400.000.000. Pada 15 April 2026 perusahaan memperoleh persetujuan perluasan areal 800 ha dengan nilai tanah Rp1.600/m². Dengan pola penilaian hutan tanaman (SIT hanya pada areal produktif), PBB-P5L terutang Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp747.876.000", B: "Rp861.476.000", C: "Rp901.876.000", D: "Rp835.876.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "PBB ditetapkan menurut keadaan objek pada 1 Januari 2026. Blok yang baru ditebang Maret 2026 masih areal produktif; blok yang ditanami ulang Oktober 2025 sudah areal belum produktif; perluasan April 2026 baru menjadi objek Tahun Pajak 2027.",
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
          C: "Blok 1.500 ha yang sudah ditanami ulang tetap diberi SIT mengikuti status SPPT 2025 (+Rp33.000.000.000 NJOP)."
        },
        jebakan: "Tiga peristiwa di sekitar 1 Januari (tanam ulang 2025, tebang Maret 2026, perluasan April 2026) diuji sekaligus; patokannya hanya keadaan 1 Januari 2026."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Pola penilaian sektor perhutanan (hutan tanaman: nilai tanah + SIT pada areal produktif) mengikuti pemahaman atas PMK 186/2019 s.t.d.d. PMK 234/2022 yang belum dicek ke teks primer; stem menyatakan pola penilaian dan nilai per m² sebagai data."
    },
    {
      id: "B8-113", topik: "B8.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Kutai Pesisir Energi adalah kontraktor kontrak kerja sama migas tahap eksploitasi yang wilayah kerjanya meliputi daratan di Kabupaten Kutai Kartanegara dan perairan lepas pantai (offshore) di Selat Makassar; DJP mengadministrasikannya sebagai satu objek PBB-P5L sektor migas dan perusahaan tidak memiliki objek lain. Data penilaian per 1 Januari 2026: permukaan bumi onshore areal produktif (tapak sumur, stasiun pengumpul) 140 ha dengan nilai Rp30.000/m²; permukaan bumi onshore areal lainnya 22.000 ha dengan nilai Rp900/m²; areal perairan offshore 35.000 ha dengan nilai Rp60/m²; NJOP tubuh bumi hasil penilaian DJP Rp1.420.000.000.000; bangunan onshore (stasiun pengumpul, tangki timbun berpondasi, pipa darat) Rp380.000.000.000; bangunan offshore (anjungan yang dipancang ke dasar laut dan pipa bawah laut) Rp710.000.000.000. Peristiwa lain: (1) areal onshore 5.000 ha (nilai Rp900/m²) telah dikembalikan kepada negara dan dikeluarkan dari wilayah kerja efektif 1 November 2025, tetapi masih tercantum dalam SPPT 2025, dan tidak termasuk dalam angka 22.000 ha di atas; (2) 8.000 ha dari areal perairan offshore 35.000 ha dikembalikan kepada negara efektif 1 Maret 2026; (3) anjungan baru senilai Rp240.000.000.000 selesai dipancang dan mulai berproduksi pada 20 Februari 2026. Manajer pajak berpendapat areal yang dikembalikan pada Maret 2026 tidak perlu dihitung karena sudah tidak dikuasai ketika SPPT 2026 terbit. PBB-P5L terutang Tahun Pajak 2026 adalah ...",
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
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 1 angka 1 dan 2 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 5–7 UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 180, verifikasi: "◐",
      peringatan: "Pembagian areal onshore/offshore dan penilaian tubuh bumi migas menurut PMK 186/2019 s.t.d.d. PMK 234/2022 belum dicek ke teks primer; nilai per m², NJOP tubuh bumi, penetapan satu NOP, dan status areal yang dikembalikan kepada negara diberikan sebagai data di stem. Perlakuan NJOP tubuh bumi bila sebagian wilayah kerja dikembalikan tidak diuji (dianggap tetap sesuai penilaian DJP per 1 Januari 2026)."
    },
    {
      id: "B8-114", topik: "B8.4", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
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
      dasarHukum: [{ pasal: "Pasal 8 ayat (2) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "PP 25/2002", berlakuSejak: "2002-01-01" }, { pasal: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01" }],
      anggaranDetik: 140, verifikasi: "◐",
      peringatan: "Penggolongan kabel bawah laut sebagai objek sektor lainnya (koridor perairan = bumi, kabel = bangunan) mengikuti sumber sekunder atas PMK 234/PMK.03/2022 dan dinyatakan sebagai data administrasi di stem; rumus NJKP 20%/40% dan Pasal 8 ayat (2) UU PBB sudah terverifikasi."
    },
    {
      id: "B8-115", topik: "B8.2", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf a UU PBB (parafrase): Objek pajak yang tidak dikenakan PBB adalah objek yang digunakan semata-mata untuk melayani kepentingan umum di bidang ibadah, sosial, kesehatan, pendidikan, dan kebudayaan nasional, yang tidak dimaksudkan untuk memperoleh keuntungan.",
      stem: "PT Nikel Teluk Weda Perkasa (IUP operasi produksi nikel; satu-satunya objek PBB-P5L wajib pajak ini) memiliki data penilaian per 1 Januari 2026: areal produktif (pit, stockpile, jalan tambang) 120 ha dengan nilai Rp25.000/m²; areal emplasemen 40 ha dengan nilai Rp60.000/m²; areal lainnya dalam wilayah IUP 15.000 ha dengan nilai Rp800/m²; NJOP tubuh bumi Rp640.000.000.000; dan NJOP seluruh bangunan Rp286.000.000.000. Di dalam emplasemen terdapat: (1) masjid yang terbuka untuk umum dan dikelola nirlaba (lahan 0,5 ha, bangunan Rp3.000.000.000); (2) sekolah dasar umum yang dikelola yayasan pendidikan nirlaba secara cuma-cuma di atas lahan milik perusahaan (lahan 0,3 ha, bangunan Rp1.200.000.000); (3) klinik perusahaan yang melayani karyawan dan keluarganya secara gratis tetapi tertutup bagi masyarakat (lahan 1,2 ha, bangunan Rp6.800.000.000). Berdasarkan kutipan tersebut, PBB-P5L terutang Tahun Pajak 2026 adalah ...",
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
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "B8-116", topik: "B8.7", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 11 UU PBB (parafrase): Pajak yang terutang berdasarkan SPPT harus dilunasi selambat-lambatnya 6 bulan sejak tanggal diterimanya SPPT oleh wajib pajak. Pajak yang terutang yang pada saat jatuh tempo pembayaran tidak dibayar atau kurang dibayar dikenakan denda administrasi sebesar 2% sebulan, untuk jangka waktu paling lama 24 bulan.",
      stem: "PT Bara Sungai Kayan (IUP batubara di Kabupaten Bulungan) mempunyai dua objek PBB-P5L dengan NOP dan SPPT terpisah. Kedua SPPT Tahun Pajak 2026 diterbitkan pada 2 Maret 2026. SPPT Blok Utara sebesar Rp612.000.000 baru diterima pada 30 April 2026 karena lokasi kantor tambang terpencil, sedangkan SPPT Blok Selatan sebesar Rp248.000.000 diterima pada 9 Maret 2026. Kedua SPPT dilunasi pada 15 Oktober 2026. Asumsikan bagian dari bulan dihitung satu bulan penuh. Berdasarkan kutipan tersebut, jumlah denda administrasi PBB-P5L 2026 yang akan ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp34.400.000", B: "Rp4.960.000", C: "Rp95.920.000", D: "Rp9.920.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Jatuh tempo dihitung per SPPT sejak tanggal diterima. Blok Utara jatuh tempo 30 Oktober 2026 sehingga pelunasan 15 Oktober tepat waktu; Blok Selatan jatuh tempo 9 September 2026 sehingga terlambat 1 bulan 6 hari, dihitung 2 bulan.",
        jejakHitung: [
          ["Blok Utara: 30 April 2026 + 6 bulan", "30 Oktober 2026 → tepat waktu"],
          ["Blok Selatan: 9 Maret 2026 + 6 bulan", "9 September 2026"],
          ["9 September s.d. 15 Oktober 2026", "1 bulan 6 hari → 2 bulan"],
          ["Denda 2 × 2% × 248.000.000", "Rp9.920.000"]
        ],
        mengapaSalah: {
          A: "Jatuh tempo dihitung dari tanggal terbit (2 September 2026) untuk kedua SPPT, sehingga keduanya dianggap terlambat 2 bulan (4% × Rp860.000.000).",
          B: "Sisa 6 hari diabaikan sehingga Blok Selatan dianggap terlambat 1 bulan.",
          C: "Memakai jatuh tempo 1 bulan milik SKP/STP untuk SPPT (Blok Utara 5 bulan, Blok Selatan 7 bulan)."
        },
        jebakan: "SPPT yang terlambat sampai ke wajib pajak mempunyai jatuh tempo sendiri; tanggal terbit tidak relevan."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (1) dan (3) UU PBB", berlakuSejak: "1995-01-01" }, { pasal: "Pasal 11 ayat (2) dan (4) UU PBB", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
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
      tingkat: [ "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Ortax Tambang menerima SPPT PBB Tahun Pajak 2026 sebesar Rp50.000.000 pada 11 Februari 2026. Pada 4 Mei 2026 ia mengajukan keberatan atas SPPT tersebut (belum diputus) dan tidak membayar sampai jatuh tempo. Pada 12 Oktober 2026 KPP menerbitkan dan mengirim STP PBB yang memuat pokok dan denda administrasi; STP diterima pada hari yang sama. PT Ortax Tambang melunasi seluruh jumlah dalam STP tersebut pada 20 November 2026. Jumlah dalam STP PBB pertama dan STP PBB berikutnya (bila ada) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP pertama Rp52.000.000,00; STP berikutnya Rp2.000.000,00", B: "STP pertama Rp53.000.000,00; tidak ada STP berikutnya", C: "STP pertama Rp53.000.000,00; STP berikutnya Rp1.000.000,00", D: "STP pertama Rp53.000.000,00; STP berikutnya Rp1.060.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Keberatan tidak menunda kewajiban membayar, sehingga SPPT tetap jatuh tempo 6 bulan sejak diterima. STP PBB pertama memuat pokok ditambah denda 2% sebulan sejak jatuh tempo SPPT sampai tanggal terbit STP, bagian bulan dihitung penuh (denda UU PBB, bukan sanksi bunga UU KUP berbasis tarif KMK). STP harus dilunasi 1 bulan sejak diterima; karena pokok baru dilunasi setelah jatuh tempo STP, diterbitkan STP PBB yang hanya memuat denda 2% sebulan atas pokok, dihitung sejak jatuh tempo STP sampai tanggal pembayaran.",
        jejakHitung: [ [ "Jatuh tempo SPPT = 6 bulan sejak 11 Februari 2026", "10 Agustus 2026 (Senin)" ], [ "10 Agustus–12 Oktober 2026", "2 bulan 2 hari → 3 bulan" ], [ "STP pertama = Rp50.000.000 + 3 × 2% × Rp50.000.000", "Rp53.000.000" ], [ "Jatuh tempo STP = 1 bulan sejak 12 Oktober 2026", "11 November 2026; dibayar 20 November → 1 bulan" ], [ "STP berikutnya = 1 × 2% × Rp50.000.000", "Rp1.000.000" ] ],
        mengapaSalah: { A: "Menghitung 2 bulan untuk STP pertama (bagian bulan tidak dibulatkan penuh) dan 2 bulan untuk STP berikutnya.", B: "Mengabaikan denda atas keterlambatan pelunasan STP setelah jatuh tempo STP.", D: "Menghitung denda STP berikutnya atas jumlah STP pertama (pokok + denda), padahal dasarnya hanya pokok PBB." },
        jebakan: "Hasil sama bila jatuh tempo dihitung pada tanggal yang sama di bulan berikutnya (11 Agustus dan 12 November 2026). Total denda 4 bulan, di bawah batas 24 bulan."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 Pasal 11 ayat (1), (3), dan (4) beserta Penjelasan, Pasal 15 ayat (6)", berlakuSejak: null },
        { pasal: "PMK 80/2023 Pasal 29, Pasal 30 ayat (1)–(2), Pasal 31 ayat (1) huruf b dan ayat (2) huruf b", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 97 ayat (1) dan (3)", berlakuSejak: "2025-01-01" }
      ],
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
      tingkat: [ "B", "C" ],
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
        mengapaSalah: { A: "UU PBB menegaskan bahwa pengajuan keberatan tidak menunda kewajiban membayar pajak.", B: "Tidak ada penundaan pembayaran karena pengajuan keberatan PBB.", C: "Pengajuan keberatan tepat waktu tidak menggugurkan kewajiban membayar PBB yang terutang." },
        jebakan: "Keberatan PBB tidak menunda kewajiban membayar; bandingkan dengan keberatan pajak pusat lain yang memiliki ketentuan penangguhan tersendiri."
      },
      dasarHukum: [
        { pasal: "UU 12/1985 s.t.d.d. UU 12/1994 (UU PBB) Pasal 15 ayat (6)", berlakuSejak: null },
        { pasal: "PMK 118/2024 s.t.d.d. PMK 71/2026 Pasal 10 ayat (4)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Kutipan sumber menulis \"PMK 18/2024\" dan \"PMK 1718/2024\"; dibetulkan menjadi PMK 118/2024. · Stem rusak di sumber (\"dan mengetahui mengajukan keberatan\"); bagian alasan keberatan disusun ulang tanpa mengubah substansi.",
      sumber: { set: "TO-B-2026-11", no: 96, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
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
    { id: "KT-B8-27", topik: "B8.5", tipe: "pasal", depan: "Apakah UU HPP mengubah denda 2% PBB-P5L?", belakang: "Tidak; tarif bunga KMK hanya untuk sanksi bunga UU KUP", dasar: "Pasal 11 ayat (3) UU PBB; Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-28", topik: "B8.6", tipe: "angka", depan: "Batas pengajuan keberatan PBB?", belakang: "3 bulan sejak SPPT/SKP diterima, kecuali keadaan di luar kekuasaan", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-29", topik: "B8.6", tipe: "angka", depan: "Batas keputusan keberatan PBB dan akibat bila lewat?", belakang: "12 bulan sejak surat keberatan diterima; lewat berarti dianggap diterima", dasar: "Pasal 16 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-30", topik: "B8.6", tipe: "angka", depan: "Batas banding atas keputusan keberatan PBB?", belakang: "3 bulan sejak keputusan diterima, ke Pengadilan Pajak", dasar: "Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-31", topik: "B8.6", tipe: "pasal", depan: "Dua alasan pengurangan PBB (Pasal 19)?", belakang: "Kondisi tertentu objek terkait subjek; bencana alam atau sebab luar biasa", dasar: "Pasal 19 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-32", topik: "B8.6", tipe: "definisi", depan: "Dokumen PBB yang dapat diajukan keberatan?", belakang: "SPPT dan SKP (STP tidak)", dasar: "Pasal 15 ayat (1) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-33", topik: "B8.7", tipe: "prosedur", depan: "Cara membayar PBB-P5L sejak 2025?", belakang: "Kode billing Coretax (NPWP 16 digit, NOP); bukti pelunasan NTPN", dasar: "Pasal 12 UU PBB; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: "e-Billing DJP Online dengan NPWP 15 digit", dekTambahan: ["perubahan-2025-2026"] },
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
    { id: "KT-B8-55", topik: "B8.4", tipe: "prosedur", depan: "Areal emplasemen dan areal belum produktif kebun dinilai dengan?", belakang: "Luas × nilai tanah per m², tanpa SIT", dasar: "PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-56", topik: "B8.4", tipe: "prosedur", depan: "Blok sawit panen perdana Agustus 2026: SIT dihitung mulai?", belakang: "Tahun Pajak 2027 (keadaan 1 Januari 2027)", dasar: "Pasal 8 ayat (2) UU PBB; PMK 186/PMK.03/2019 s.t.d.d. PMK 234/PMK.03/2022", berlakuSejak: "2023-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-57", topik: "B8.5", tipe: "angka", depan: "Denda keterlambatan bayar PBB paling banyak?", belakang: "48% (2% × 24 bulan) dari pajak yang terlambat", dasar: "Pasal 11 ayat (3) UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-58", topik: "B8.6", tipe: "prosedur", depan: "Apakah keberatan PBB menunda kewajiban membayar?", belakang: "Tidak; SPPT/SKP tetap dilunasi pada jatuh temponya", dasar: "Pasal 15 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-59", topik: "B8.6", tipe: "definisi", depan: "Kapan memilih keberatan, kapan pengurangan PBB?", belakang: "Keberatan: penetapan keliru; pengurangan: penetapan benar, butuh keringanan", dasar: "Pasal 15 dan 19 UU PBB", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-60", topik: "B8.6", tipe: "pasal", depan: "Keberatan SKPKB (KUP) vs SKP PBB: titik awal 3 bulan?", belakang: "SKPKB sejak tanggal dikirim; SKP PBB sejak tanggal diterima", dasar: "Pasal 25 ayat (3) UU KUP; Pasal 15 UU PBB", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-61", topik: "B8.7", tipe: "angka", depan: "Batas gugatan atas pelaksanaan Surat Paksa?", belakang: "14 hari sejak tanggal pelaksanaan penagihan", dasar: "Pasal 40 ayat (2) UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-62", topik: "B8.7", tipe: "angka", depan: "Jarak penyitaan → pengumuman lelang → lelang?", belakang: "Masing-masing paling singkat 14 hari", dasar: "Pasal 26 UU 19/1997 s.t.d.d. UU 19/2000", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-63", topik: "B8.8", tipe: "definisi", depan: "PSDH dan Dana Reboisasi dibagihasilkan sebagai?", belakang: "DBH sumber daya alam kehutanan, bukan DBH pajak", dasar: "UU 1/2022", berlakuSejak: "2022-01-05", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-64", topik: "B8.8", tipe: "pasal", depan: "Kebun membentang di dua kabupaten: tempat terutang dan penerima bagi hasil?", belakang: "Masing-masing kabupaten sesuai letak bagian kebun (porsi kabupaten penghasil)", dasar: "Pasal 8 ayat (3) UU PBB; Pasal 113 UU 1/2022", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-65", topik: "B8.6", tipe: "definisi", depan: "Empat upaya hukum non keberatan PBB-P5L?", belakang: "Pembetulan; pengurangan PBB; pengurangan denda; pembatalan/pengurangan SPPT, SKP, STP tidak benar", dasar: "Pasal 19 dan 20 UU PBB; PMK 118/2024 s.t.d.d. PMK 71/2026", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-66", topik: "B8.6", tipe: "definisi", depan: "Kesalahan yang diperbaiki lewat pembetulan SPPT, SKP, atau STP PBB?", belakang: "Kesalahan tulis, kesalahan hitung, kekeliruan penerapan ketentuan", dasar: "PMK 118/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-B8-67", topik: "B8.6", tipe: "prosedur", depan: "Syarat pengurangan denda administratif PBB?", belakang: "Karena kekhilafan atau bukan kesalahan WP; hanya atas denda yang belum dibayar", dasar: "Pasal 20 UU PBB; PMK 118/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
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
          opsi: { A: "Jatuh tempo 4 September 2026; denda 25% = Rp122.609.000 ditagih dengan SKP", B: "Jatuh tempo 30 September 2026; tidak ada denda", C: "Jatuh tempo 4 September 2026; terlambat 17 hari dihitung 1 bulan; denda 2% = Rp9.808.720 ditagih dengan STP", D: "Jatuh tempo 4 September 2026; bunga Pasal 9 ayat (2a) UU KUP dengan tarif KMK" }, jawaban: "C",
          petunjuk: ["SPPT jatuh tempo 6 bulan sejak diterima", "4 Maret + 6 bulan = 4 September 2026", "Denda Pasal 11 ayat (3): 2% × 1 bulan × Rp490.436.000"],
          penjelasan: "Jatuh tempo 4 September 2026; keterlambatan 17 hari dihitung satu bulan sehingga denda 2% × Rp490.436.000 = Rp9.808.720 ditagih dengan STP. Denda 25% hanya untuk SKP, dan tarif bunga KMK hanya untuk UU KUP." },
        { no: 6, pertanyaan: "Bagaimana perlakuan PBB dan denda dalam PPh Badan 2026?", tipe: "pilihan",
          opsi: { A: "PBB dan denda sama-sama dapat dibiayakan", B: "PBB Rp490.436.000 dapat dibiayakan; denda Rp9.808.720 dikoreksi fiskal positif", C: "PBB dan denda sama-sama tidak dapat dibiayakan karena keduanya pajak", D: "Hanya denda yang dapat dibiayakan" }, jawaban: "B",
          petunjuk: ["Pasal 6 ayat (1) huruf a UU PPh: pajak kecuali PPh", "Pasal 9 ayat (1) huruf k UU PPh: sanksi administrasi", "PBB boleh, denda tidak"],
          penjelasan: "PBB adalah pajak selain PPh yang dapat dibiayakan; denda keterlambatan adalah sanksi administrasi yang tidak dapat dikurangkan sehingga dikoreksi fiskal positif." }
      ],
      kesimpulan: "NJOP dihitung per jenis areal (SIT hanya untuk areal produktif, objek Pasal 3 dikeluarkan dari luas), ditambah bangunan, dikurangi NJOPTKP sekali, lalu dikali 40% dan 0,5% sehingga PBB 2026 Rp490.436.000. Pembayaran 17 hari setelah jatuh tempo menimbulkan denda 2% (Rp9.808.720) yang tidak dapat dibiayakan, sedangkan PBB-nya dapat dibiayakan.",
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
          opsi: { A: "14 September 2026 dan 14 November 2026", B: "14 Februari 2027 dan 14 November 2026", C: "14 September 2026 dan 14 Februari 2027", D: "14 November 2026 dan 14 September 2026" }, jawaban: "A",
          petunjuk: ["SKP dilunasi 1 bulan sejak diterima (Pasal 11 ayat (2))", "Keberatan 3 bulan sejak SKP diterima (Pasal 15 UU PBB)", "14 Agustus + 1 bulan; 14 Agustus + 3 bulan"],
          penjelasan: "Jatuh tempo SKP 14 September 2026; batas keberatan 14 November 2026. Keberatan yang diterima 20 Oktober 2026 tepat waktu dan tidak menunda kewajiban membayar." },
        { no: 6, pertanyaan: "Paling lambat kapan DJP memutus keberatan, dan apa akibatnya bila lewat?", tipe: "pilihan",
          opsi: { A: "20 April 2027; dianggap ditolak", B: "14 Agustus 2027; dianggap diterima", C: "20 Oktober 2027; dianggap ditolak", D: "20 Oktober 2027; dianggap diterima" }, jawaban: "D",
          petunjuk: ["Pasal 16 ayat (1): 12 bulan", "Dihitung sejak surat keberatan diterima", "Pasal 16 UU PBB: lewat waktu → dianggap diterima"],
          penjelasan: "Batas keputusan 12 bulan sejak 20 Oktober 2026, yaitu 20 Oktober 2027; bila lewat tanpa keputusan, keberatan dianggap diterima." },
        { no: 7, pertanyaan: "Keputusan keberatan (menolak) diterima 5 Juli 2027. Upaya dan batas waktunya?", tipe: "pilihan",
          opsi: { A: "Keberatan kedua paling lambat 5 Oktober 2027", B: "Banding ke Pengadilan Pajak paling lambat 5 Oktober 2027", C: "Gugatan paling lambat 4 Agustus 2027", D: "Banding paling lambat 5 Januari 2028" }, jawaban: "B",
          petunjuk: ["Upaya atas keputusan keberatan adalah banding", "Pasal 35 ayat (2) UU 14/2002: 3 bulan", "5 Juli + 3 bulan"],
          penjelasan: "Banding diajukan ke Pengadilan Pajak dalam 3 bulan sejak keputusan diterima, yaitu paling lambat 5 Oktober 2027." }
      ],
      kesimpulan: "Koreksi luas 250 ha menambah NJOP Rp35 miliar sehingga selisih PBB Rp70.000.000 dan SKP (dengan denda 25% dari selisih) Rp87.500.000. SKP jatuh tempo 14 September 2026, keberatan paling lambat 14 November 2026, keputusan paling lambat 20 Oktober 2027 (lewat = dianggap diterima), dan banding paling lambat 3 bulan setelah keputusan diterima.",
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
          petunjuk: ["Pasal 12 UU PBB: dibayar ke kas negara", "Pasal 8 ayat (3): terutang di letak objek", "Bagi hasil: porsi terbesar kabupaten penghasil"],
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
          opsi: { A: "Keberatan terlambat karena batasnya 10 Mei 2026; pelunasan tepat waktu", B: "Keberatan tepat waktu (batas 10 Juni 2026) dan pelunasan 1 September 2026 tepat waktu (jatuh tempo 10 September 2026); kelebihan Rp76.000.000 dikembalikan setelah keputusan", C: "Keberatan tepat waktu, tetapi pelunasan seharusnya ditunda sampai keputusan keberatan terbit", D: "Keberatan tidak diperlukan karena DJP wajib membetulkan SPPT secara otomatis; tidak ada kelebihan pembayaran" }, jawaban: "B",
          petunjuk: ["Keberatan 3 bulan sejak SPPT diterima", "SPPT jatuh tempo 6 bulan sejak diterima; keberatan tidak menunda pembayaran", "Keputusan mengabulkan seluruhnya → kelebihan dikembalikan karena tidak ada utang pajak lain"],
          penjelasan: "Batas keberatan 10 Juni 2026 sehingga keberatan yang diterima 2 Juni 2026 tepat waktu; SPPT jatuh tempo 10 September 2026 sehingga pelunasan 1 September 2026 tepat waktu. Keputusan yang mengabulkan seluruhnya menimbulkan kelebihan Rp76.000.000 yang dikembalikan karena perusahaan tidak mempunyai utang pajak lain." }
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
          petunjuk: ["SPOP disampaikan 30 hari sejak diterima", "12 Januari + 30 hari = 11 Februari 2026", "SPOP tidak disampaikan setelah ditegur → huruf a"],
          penjelasan: "Batas SPOP 11 Februari 2026 (Pasal 9 ayat (2) UU PBB); karena SPOP tetap tidak disampaikan setelah ditegur, DJP menerbitkan SKP berdasarkan Pasal 10 ayat (2) huruf a." },
        { no: 2, pertanyaan: "Berapa pokok PBB 2026 menurut data administrasi (Rp)?", tipe: "angka", jawaban: 742826000, toleransi: 0,
          petunjuk: ["Produktif 80.000.000 m² × 4.000; belum produktif 25.000.000 m² × 1.700; emplasemen 150.000 m² × 7.500", "NJOP objek = 363.625.000.000 + 7.800.000.000 = 371.425.000.000", "(371.425.000.000 − 12.000.000) × 0,2%"],
          penjelasan: "NJOP bumi Rp363.625.000.000 ditambah bangunan Rp7.800.000.000 = Rp371.425.000.000; dikurangi NJOPTKP lalu dikali 40% dan 0,5% = Rp742.826.000." },
        { no: 3, pertanyaan: "Berapa jumlah yang harus dibayar menurut SKP (Rp)?", tipe: "angka", jawaban: 928532500, toleransi: 0,
          petunjuk: ["Pasal 10 ayat (3) UU PBB", "Denda 25% dari pokok = Rp185.706.500", "742.826.000 + 185.706.500"],
          penjelasan: "SKP huruf a = pokok + 25% × pokok = Rp742.826.000 + Rp185.706.500 = Rp928.532.500." },
        { no: 4, pertanyaan: "Kapan jatuh tempo SKP dan batas pengajuan keberatannya?", tipe: "pilihan",
          opsi: { A: "15 November 2026 dan 15 Agustus 2026", B: "15 Juni 2026 dan 15 November 2026", C: "15 Juni 2026 dan 15 Agustus 2026", D: "15 Juli 2026 dan 15 Agustus 2026" }, jawaban: "C",
          petunjuk: ["SKP dilunasi 1 bulan sejak diterima (Pasal 11 ayat (2))", "Keberatan 3 bulan sejak SKP diterima (Pasal 15)", "15 Mei + 1 bulan; 15 Mei + 3 bulan"],
          penjelasan: "Jatuh tempo SKP 15 Juni 2026; keberatan paling lambat 15 Agustus 2026." },
        { no: 5, pertanyaan: "Berapa denda keterlambatan yang ditagih dengan STP (Rp)?", tipe: "angka", jawaban: 37141300, toleransi: 0,
          petunjuk: ["15 Juni s.d. 3 Agustus 2026 = 1 bulan 19 hari", "Bagian bulan dihitung penuh → 2 bulan", "2 × 2% × 928.532.500"],
          penjelasan: "Keterlambatan 1 bulan 19 hari dihitung 2 bulan; denda 4% × Rp928.532.500 = Rp37.141.300 (Pasal 11 ayat (3) UU PBB)." },
        { no: 6, pertanyaan: "STP diterima 1 September 2026 dan tidak dilunasi. Kapan Surat Teguran paling cepat, dan bila Surat Teguran disampaikan pada tanggal itu, kapan Surat Paksa paling cepat?", tipe: "pilihan",
          opsi: { A: "Surat Teguran 9 Oktober 2026; Surat Paksa 31 Oktober 2026", B: "Surat Teguran 2 Oktober 2026; Surat Paksa 23 Oktober 2026", C: "Surat Teguran 9 September 2026; Surat Paksa 30 September 2026", D: "Surat Teguran 9 Oktober 2026; Surat Paksa 11 Oktober 2026" }, jawaban: "A",
          petunjuk: ["STP jatuh tempo 1 bulan sejak diterima: 1 Oktober 2026", "Surat Teguran setelah lewat 7 hari dari jatuh tempo → hari ke-8", "Surat Paksa setelah lewat 21 hari sejak Surat Teguran → hari ke-22"],
          penjelasan: "Jatuh tempo STP 1 Oktober 2026; Surat Teguran paling cepat 9 Oktober 2026; Surat Paksa paling cepat 31 Oktober 2026 (9 Oktober + 22 hari)." },
        { no: 7, pertanyaan: "Bagaimana perlakuannya dalam PPh Badan 2026?", tipe: "pilihan",
          opsi: { A: "Pokok PBB Rp742.826.000 dapat dibiayakan; denda 25% Rp185.706.500 dan denda STP Rp37.141.300 dikoreksi fiskal positif", B: "Seluruh pembayaran SKP Rp928.532.500 dapat dibiayakan karena merupakan pajak terutang", C: "Pokok dan denda 25% dapat dibiayakan; hanya denda STP yang dikoreksi", D: "Tidak ada yang dapat dibiayakan karena SKP terbit akibat kelalaian" }, jawaban: "A",
          petunjuk: ["Pasal 6 ayat (1) huruf a UU PPh: pajak selain PPh dapat dibiayakan", "Pasal 9 ayat (1) huruf k UU PPh: sanksi administrasi tidak dapat dikurangkan", "Pisahkan pokok dari kedua denda"],
          penjelasan: "Pokok PBB adalah pajak selain PPh yang dapat dibiayakan; denda 25% dalam SKP dan denda 2% dalam STP adalah sanksi administrasi yang dikoreksi fiskal positif." }
      ],
      kesimpulan: "Karena SPOP tidak dikembalikan setelah ditegur, DJP menerbitkan SKP huruf a: pokok Rp742.826.000 ditambah denda 25% menjadi Rp928.532.500 yang jatuh tempo 15 Juni 2026. Pelunasan 3 Agustus 2026 menimbulkan denda 2 bulan Rp37.141.300 yang ditagih dengan STP; bila STP tidak dilunasi, penagihan berlanjut ke Surat Teguran (paling cepat 9 Oktober 2026) dan Surat Paksa (paling cepat 31 Oktober 2026). Hanya pokok PBB yang dapat dibiayakan.",
      kalkulatorRef: "pbb-bphtb"
    },
    {
      id: "K-B8-06", judul: "Kebun dilanda banjir: pengurangan PBB dan pengembalian", topik: "B8.6", estimasiMenit: 15,
      narasi: "PT Sawit Tebo Makmur memegang HGU kebun kelapa sawit di Kabupaten Tebo dan tidak memiliki objek PBB-P5L lain. Data objek per 1 Januari 2026: areal produktif 1.400 ha (nilai tanah Rp3.900/m² dan SIT Rp5.600/m²), areal belum produktif 260 ha (Rp3.900/m²), areal emplasemen 22 ha (Rp12.500/m²), dan bangunan Rp24.600.000.000. SPPT PBB-P5L 2026 yang sesuai dengan data tersebut diterima pada 9 Maret 2026. Pada 2–9 Juni 2026 banjir bandang merusak sekitar 35% tanaman menghasilkan, dan pemerintah daerah menerbitkan keterangan bencana. Perusahaan mengajukan permohonan pengurangan yang memenuhi persyaratan formal pada 22 Juli 2026 dan melunasi SPPT seluruhnya pada 7 September 2026. Keputusan pengurangan yang diterima pada 20 Januari 2027 memberikan pengurangan 30% dari PBB terutang 2026. Saat itu perusahaan masih mempunyai utang STP PPh Pasal 21 Masa Agustus 2026 sebesar Rp1.150.000.",
      data: [ ["Areal produktif", "1.400 ha; Rp3.900 + SIT Rp5.600 per m²"], ["Areal belum produktif", "260 ha; Rp3.900/m²"], ["Emplasemen", "22 ha; Rp12.500/m²"], ["Bangunan", "Rp24.600.000.000"], ["SPPT diterima / dilunasi", "9 Maret 2026 / 7 September 2026"], ["Banjir bandang", "2–9 Juni 2026; ±35% tanaman menghasilkan rusak"], ["Keputusan pengurangan", "30% dari PBB terutang 2026"], ["Utang STP PPh Pasal 21 Masa Agustus 2026", "Rp1.150.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Jalur yang tepat untuk meringankan PBB 2026 adalah?", tipe: "pilihan",
          opsi: { A: "Keberatan atas SPPT karena luas tanaman menghasilkan berkurang", B: "Permohonan pengurangan karena objek terkena bencana alam", C: "Penyampaian SPOP baru agar SPPT 2026 diterbitkan ulang", D: "Gugatan ke Pengadilan Pajak" }, jawaban: "B",
          petunjuk: ["SPPT sudah benar menurut keadaan 1 Januari 2026", "Kerusakan terjadi setelah 1 Januari", "Pasal 19 ayat (1) huruf b UU PBB"],
          penjelasan: "Penetapan sudah benar, sedangkan kerusakan terjadi pada Juni 2026; jalurnya pengurangan karena bencana alam (Pasal 19 ayat (1) huruf b UU PBB), bukan keberatan." },
        { no: 2, pertanyaan: "Berapa PBB-P5L terutang 2026 (Rp)?", tipe: "angka", jawaban: 340956000, toleransi: 0,
          petunjuk: ["Produktif 14.000.000 m² × 9.500; belum produktif 2.600.000 m² × 3.900; emplasemen 220.000 m² × 12.500", "NJOP objek = 145.890.000.000 + 24.600.000.000 = 170.490.000.000", "(170.490.000.000 − 12.000.000) × 0,2%"],
          penjelasan: "NJOP bumi Rp145.890.000.000 ditambah bangunan Rp24.600.000.000 = Rp170.490.000.000; (Rp170.490.000.000 − Rp12.000.000) × 40% × 0,5% = Rp340.956.000." },
        { no: 3, pertanyaan: "Apakah pelunasan pada 7 September 2026 dikenai denda?", tipe: "pilihan",
          opsi: { A: "Ya, karena jatuh tempo SPPT 9 Juni 2026 (3 bulan)", B: "Ya, denda 2% karena pembayaran dilakukan setelah banjir", C: "Tidak, karena jatuh tempo SPPT 9 September 2026 dan pembayaran dilakukan sebelumnya", D: "Tidak, karena permohonan pengurangan otomatis menghapus kewajiban membayar" }, jawaban: "C",
          petunjuk: ["Pasal 11 ayat (1): 6 bulan sejak SPPT diterima", "9 Maret + 6 bulan = 9 September 2026", "7 September sebelum jatuh tempo"],
          penjelasan: "Jatuh tempo SPPT 9 September 2026, sehingga pelunasan 7 September 2026 tepat waktu dan tidak menimbulkan denda Pasal 11 ayat (3)." },
        { no: 4, pertanyaan: "Berapa besarnya pengurangan menurut keputusan (Rp)?", tipe: "angka", jawaban: 102286800, toleransi: 0,
          petunjuk: ["Pengurangan diberikan atas PBB terutang", "30% × Rp340.956.000", "Jawaban: Rp102.286.800"],
          penjelasan: "Pengurangan 30% × Rp340.956.000 = Rp102.286.800, sehingga PBB 2026 setelah pengurangan Rp238.669.200." },
        { no: 5, pertanyaan: "Berapa jumlah yang dikembalikan kepada perusahaan (Rp)?", tipe: "angka", jawaban: 101136800, toleransi: 0,
          petunjuk: ["SPPT sudah dilunasi penuh sehingga pengurangan menimbulkan kelebihan pembayaran", "Kelebihan diperhitungkan dahulu dengan utang STP Rp1.150.000", "102.286.800 − 1.150.000"],
          penjelasan: "Kelebihan Rp102.286.800 diperhitungkan dengan utang STP PPh Pasal 21 Rp1.150.000 (utang pajak jenis lain juga diperhitungkan), sehingga dikembalikan Rp101.136.800." },
        { no: 6, pertanyaan: "Bagaimana pengaruh banjir terhadap PBB 2027?", tipe: "pilihan",
          opsi: { A: "Pengurangan 30% otomatis berlaku lagi untuk 2027", B: "PBB 2027 mengikuti keadaan objek per 1 Januari 2027; perubahan areal (misalnya blok rusak yang ditanam ulang) dilaporkan melalui SPOP agar penetapan 2027 sesuai", C: "PBB 2027 tidak terutang sampai kebun pulih", D: "PBB 2027 dihitung dari PBB 2026 setelah pengurangan" }, jawaban: "B",
          petunjuk: ["Pengurangan diberikan per tahun pajak atas permohonan", "Pasal 8 ayat (2): keadaan 1 Januari menentukan", "Perubahan data objek dilaporkan dengan SPOP"],
          penjelasan: "Pengurangan berlaku untuk PBB tahun pajak yang dimohonkan. PBB 2027 ditetapkan menurut keadaan 1 Januari 2027; bila blok rusak berubah klasifikasi (misalnya ditanam ulang menjadi areal belum produktif), perubahan itu dilaporkan melalui SPOP." }
      ],
      kesimpulan: "Kerusakan setelah 1 Januari tidak membuat SPPT keliru, sehingga jalurnya pengurangan karena bencana, bukan keberatan. PBB 2026 Rp340.956.000 dilunasi tepat waktu; pengurangan 30% (Rp102.286.800) menimbulkan kelebihan pembayaran yang dikembalikan Rp101.136.800 setelah diperhitungkan dengan utang STP. Penetapan 2027 mengikuti keadaan 1 Januari 2027.",
      kalkulatorRef: "pbb-bphtb"
    }
  ],
  tips: [
    { teks: "Hitung PBB-P5L dalam urutan tetap: luas × nilai per m² (+SIT hanya areal produktif) → tambah bangunan → kurangi NJOPTKP sekali → × 40% → × 0,5%.", tagSebab: "salah-hitung" },
    { teks: "Pisahkan rezim sebelum menghitung: kawasan usaha kebun/hutan/tambang = PBB-P5L (DJP); kantor atau objek di luar kawasan = PBB-P2 (Perda, PAD). Jangan pakai NJOPTKP Rp10 juta/Rp60 juta untuk P5L.", tagSebab: "salah-klasifikasi" },
    { teks: "Hafalkan pasangan tenggat beserta titik awalnya: SPOP 30 hari, SPPT 6 bulan, SKP/STP 1 bulan, keberatan 3 bulan (semua sejak diterima), keputusan 12 bulan sejak surat keberatan diterima.", tagSebab: "salah-baca" },
    { teks: "Sanksi PBB berasal dari UU PBB sendiri: denda SKP 25% sekali dan denda telat bayar 2% sebulan maks 24 bulan. Opsi bertarif bunga KMK atau kenaikan 75% adalah pengecoh dari UU KUP.", tagSebab: "lupa-pasal" },
    { teks: "Keadaan 1 Januari mengunci objek setahun: bangunan selesai Februari, klinik yang berubah komersial, atau tambang yang tutup Juli baru berpengaruh tahun berikutnya, tanpa pro rata.", tagSebab: "salah-baca" },
    { teks: "Objek offshore dan kabel bawah laut: laut tetap 'bumi', anjungan/pipa/kabel 'bangunan', kapal bukan objek; untuk sektor lainnya cek dulu NJOP ≥ Rp1 miliar (NJKP 40%) atau di bawahnya (20%).", tagSebab: "salah-klasifikasi" }
  ]
});
