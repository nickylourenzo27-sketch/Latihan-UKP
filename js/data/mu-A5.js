// Modul A5 — Bea Meterai. Rekonstruksi dari kisi-kisi resmi, bukan soal asli.
// Ketentuan yang dipakai: berlaku Oktober 2026 (UU 10/2020, PP 86/2021, PMK 78/2024, PMK 81/2024, UU KUP s.t.d.t.d. UU HPP).
UKP.register({
  meta: {
    kode: "A5", slug: "bea-meterai", nama: "Bea Meterai",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0.05, B: 0.03, C: 0.02 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu menentukan apakah suatu dokumen terutang bea meterai, kapan dan oleh siapa bea meterai terutang, menghitung bea meterai beserta sanksi pemeteraian kemudian, serta memahami kewajiban pemungut bea meterai dan sanksinya setelah berlakunya PMK 78/2024 dan Coretax.",
    dasarHukumUtama: [
      "UU 10/2020 tentang Bea Meterai",
      "PP 86/2021 tentang Pengadaan, Pengelolaan, dan Penjualan Meterai",
      "PMK 78/2024 tentang Ketentuan Pelaksanaan Bea Meterai (mencabut PMK 133/2021, 134/2021, 151/2021)",
      "PMK 81/2024 Pasal 94 ayat (2) huruf k dan Pasal 100 (setor tanggal 15; hari libur), Pasal 171 ayat (18) dan Pasal 173 (lapor SPT Masa Bea Meterai; hari libur)",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) untuk sanksi pemungut"
    ],
    perubahanTerbaru: [
      { sebelum: "Pemungut bea meterai menyetor paling lambat tanggal 10 dan melaporkan SPT Masa paling lambat tanggal 20 bulan berikutnya (PMK 151/2021)", sesudah: "Setor dan lapor paling lambat tanggal 15 bulan berikutnya", dasar: "PMK 78/2024 Pasal 63 ayat (1) dan Pasal 64 ayat (1); PMK 81/2024 Pasal 94 ayat (2) huruf k (setor) dan Pasal 171 ayat (18) (lapor)", berlakuSejak: "2025-01-01" },
      { sebelum: "Pelaksanaan bea meterai tersebar di tiga PMK: 133/2021 (meterai tempel dan elektronik), 134/2021 (pemeteraian kemudian, meterai bentuk lain), 151/2021 (pemungut)", sesudah: "Ketiganya dicabut dan disatukan dalam PMK 78/2024 tentang Ketentuan Pelaksanaan Bea Meterai", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" },
      { sebelum: "Pemungut memperoleh meterai elektronik dengan mekanisme deposit (PMK 151/2021)", sesudah: "Pemungut ditetapkan dengan keputusan Kepala KPP; meterai elektronik didistribusikan Peruri langsung kepada pemungut tanpa deposit", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" },
      { sebelum: "Meterai bentuk lain berupa meterai teraan, komputerisasi, dan percetakan dengan izin dan mesin terpisah", sesudah: "Diperkenalkan meterai teraan digital sebagai meterai bentuk lain yang lebih sederhana", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" },
      { sebelum: "Kode billing dan pelaporan SPT Masa Bea Meterai pemungut melalui DJP Online/e-Billing lama", sesudah: "Kode billing, penyetoran, dan pelaporan SPT Masa Bea Meterai pemungut melalui Coretax", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01" },
      { sebelum: "Kata kunci lama: tarif Rp3.000/Rp6.000, ambang Rp250.000/Rp1.000.000, sanksi 200% (UU 13/1985)", sesudah: "Tetap berlaku Oktober 2026: tarif tunggal Rp10.000, ambang lebih dari Rp5.000.000, sanksi 100%, daluwarsa 5 tahun", dasar: "UU 10/2020 Pasal 3, 5, 18, 23", berlakuSejak: "2021-01-01" }
    ],
    lembarRingkas: [
      { label: "Tarif bea meterai", nilai: "Rp10.000 tetap per dokumen (tanpa melihat nilai atau halaman)", dasar: "UU 10/2020 Ps. 5", berlakuSejak: "2021-01-01" },
      { label: "Frekuensi pengenaan", nilai: "1 kali untuk setiap dokumen", dasar: "UU 10/2020 Ps. 4", berlakuSejak: "2021-01-01" },
      { label: "Ambang dokumen penerimaan uang/pelunasan utang", nilai: "lebih dari Rp5.000.000 (tepat Rp5 juta tidak terutang)", dasar: "UU 10/2020 Ps. 3(2)g", berlakuSejak: "2021-01-01" },
      { label: "Perjanjian, akta notaris/PPAT, surat berharga, dokumen lelang", nilai: "terutang tanpa ambang nilai; tiap rangkap/salinan asli", dasar: "UU 10/2020 Ps. 3(2)a–d dan f", berlakuSejak: "2021-01-01" },
      { label: "Alat bukti di pengadilan", nilai: "objek, apa pun jenis dan nilainya", dasar: "UU 10/2020 Ps. 3(1)b", berlakuSejak: "2021-01-01" },
      { label: "Bukan objek", nilai: "dokumen lalu lintas barang, ijazah, gaji/pensiun, uang negara, kuitansi pajak, intern, simpanan, gadai, pembagian hasil surat berharga, dokumen BI", dasar: "UU 10/2020 Ps. 7", berlakuSejak: "2021-01-01" },
      { label: "Saat terutang: ditandatangani", nilai: "surat perjanjian beserta rangkap, akta notaris, akta PPAT", dasar: "UU 10/2020 Ps. 8(1)a", berlakuSejak: "2021-01-01" },
      { label: "Saat terutang: selesai dibuat", nilai: "surat berharga (cek, bilyet giro, promes, obligasi), dokumen transaksi surat berharga", dasar: "UU 10/2020 Ps. 8(1)b", berlakuSejak: "2021-01-01" },
      { label: "Saat terutang: diserahkan", nilai: "kuitansi, surat keterangan/pernyataan, dokumen lelang", dasar: "UU 10/2020 Ps. 8(1)c", berlakuSejak: "2021-01-01" },
      { label: "Saat terutang: diajukan / digunakan", nilai: "alat bukti saat diajukan ke pengadilan; dokumen luar negeri saat digunakan di Indonesia", dasar: "UU 10/2020 Ps. 8(1)d–e", berlakuSejak: "2021-01-01" },
      { label: "Pihak terutang", nilai: "sepihak: penerima; dua pihak: masing-masing atas yang diterima; surat berharga: penerbit; alat bukti: pengaju; luar negeri: penerima manfaat", dasar: "UU 10/2020 Ps. 9", berlakuSejak: "2021-01-01" },
      { label: "Sarana pelunasan", nilai: "meterai tempel, meterai elektronik, meterai bentuk lain (teraan digital), atau SSP", dasar: "UU 10/2020 Ps. 12; PMK 78/2024", berlakuSejak: "2024-11-01" },
      { label: "Meterai tempel Rp3.000/Rp6.000", nilai: "tidak sah sejak 1 Januari 2022 (peralihan: gabungan ≥ Rp9.000 s.d. 31 Des 2021)", dasar: "UU 10/2020 Ketentuan Peralihan", berlakuSejak: "2022-01-01" },
      { label: "Penetapan pemungut", nilai: "keputusan Kepala KPP; tanpa deposit meterai elektronik", dasar: "UU 10/2020 Ps. 10–11; PMK 78/2024", berlakuSejak: "2024-11-01" },
      { label: "Setor dan lapor pemungut", nilai: "tanggal 15 bulan berikutnya; hari libur → hari kerja berikutnya", dasar: "PMK 78/2024 Ps. 63–65; PMK 81/2024 Ps. 94(2)k dan 100 (setor), Ps. 171(18) dan 173 (lapor)", berlakuSejak: "2025-01-01" },
      { label: "Denda SPT Masa Bea Meterai terlambat", nilai: "Rp100.000", dasar: "UU KUP Ps. 7(1)", berlakuSejak: "2008-01-01" },
      { label: "Bunga setor terlambat pemungut (Oktober 2026)", nilai: "1,01% per bulan, maks. 24 bulan, bagian bulan = 1 bulan", dasar: "UU KUP Ps. 9(2a); KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Pemungut tidak memungut/tidak menyetor", nilai: "SKP: pokok + sanksi 100%", dasar: "UU 10/2020 Ps. 11", berlakuSejak: "2021-01-01" },
      { label: "Pemeteraian kemudian (tidak/kurang dibayar)", nilai: "Rp10.000 + sanksi 100% = Rp20.000 per dokumen", dasar: "UU 10/2020 Ps. 17–18", berlakuSejak: "2021-01-01" },
      { label: "Pemeteraian kemudian alat bukti (semula bukan objek)", nilai: "Rp10.000 tanpa sanksi", dasar: "UU 10/2020 Ps. 17–18", berlakuSejak: "2021-01-01" },
      { label: "Dokumen luar negeri dilunasi paling lambat saat digunakan", nilai: "Rp10.000 tanpa sanksi", dasar: "UU 10/2020 Ps. 8(1)e, 18", berlakuSejak: "2021-01-01" },
      { label: "Pengesahan pemeteraian kemudian", nilai: "pejabat yang ditetapkan Menteri: Pejabat Pos (bila dibayar dengan meterai tempel) atau Pejabat DJP (meterai tempel, meterai elektronik, dan/atau SSP)", dasar: "UU 10/2020 Ps. 1; PMK 78/2024 Ps. 51", berlakuSejak: "2024-11-01" },
      { label: "Daluwarsa", nilai: "5 tahun sejak saat terutang, untuk semua dokumen (pasal menyebut bea meterai yang terutang; sanksi 100% mengikuti pokoknya)", dasar: "UU 10/2020 Ps. 23 dan Penjelasannya", berlakuSejak: "2021-01-01" },
      { label: "Larangan pejabat", nilai: "pejabat yang berwenang (antara lain hakim, panitera, jurusita, notaris, PPAT, pegawai ASN, anggota TNI/Polri, dan pejabat negara) dilarang menerima, mempertimbangkan, atau menyimpan dokumen yang bea meterainya tidak atau kurang dibayar", dasar: "UU 10/2020 Ps. 21", berlakuSejak: "2021-01-01" },
      { label: "Pidana memalsu/memakai meterai palsu", nilai: "penjara maks. 7 tahun, denda maks. Rp500 juta", dasar: "UU 10/2020 Ps. 24–25", berlakuSejak: "2021-01-01" },
      { label: "Sanksi bea meterai di SPT PPh", nilai: "lazimnya dikoreksi positif sebagai sanksi administrasi di bidang perpajakan (UU PPh Ps. 9(1)k), tetapi naskah tidak menggolongkan sanksi 100% bea meterai secara tegas ke bunga, denda, atau kenaikan; pokok bea meterai boleh dibiayakan", dasar: "UU PPh Ps. 9(1)k dan 6(1)a; UU 10/2020 Ps. 11(3), 18(2), dan 19(2)", berlakuSejak: "2009-01-01" },
      { label: "Angka usang (pengecoh)", nilai: "tarif Rp3.000/Rp6.000; ambang Rp250 rb/Rp1 jt; sanksi 200%; setor tgl 10, lapor tgl 20", dasar: "UU 13/1985; PMK 151/2021 (dicabut)", berlakuSejak: "2021-01-01" }
    ]
  },
  topik: [
    {
      id: "A5.1", slug: "objek-pengecualian", judul: "Objek dan bukan objek bea meterai",
      estimasiMenit: 15, jenisDominan: ["klasifikasi", "konsep"],
      ringkasan: [
        "Bea meterai adalah pajak atas dokumen; 'dokumen' mencakup tulisan tangan, cetakan, maupun dokumen elektronik (Pasal 1 UU 10/2020).",
        "Objek (Pasal 3 ayat (1)): dokumen yang dibuat sebagai alat untuk menerangkan kejadian yang bersifat perdata, dan dokumen yang digunakan sebagai alat bukti di pengadilan.",
        "Dokumen perdata yang terutang (Pasal 3 ayat (2)): surat perjanjian, surat keterangan, surat pernyataan, atau surat sejenis beserta rangkapnya; akta notaris beserta grosse, salinan, dan kutipannya; akta PPAT beserta salinan dan kutipannya; surat berharga; dokumen transaksi surat berharga termasuk kontrak berjangka; dokumen lelang; dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000 yang menyebutkan penerimaan uang atau pengakuan pelunasan utang; dokumen lain yang ditetapkan PP.",
        "Ambang Rp5.000.000 hanya berlaku untuk dokumen penerimaan uang/pelunasan utang (kuitansi); surat perjanjian terutang berapa pun nilainya; nilai tepat Rp5.000.000 tidak terutang karena syaratnya 'lebih dari'.",
        "Bukan objek (Pasal 7): dokumen lalu lintas orang dan barang (konosemen, surat angkutan, bukti pengiriman barang), segala bentuk ijazah, tanda terima gaji/pensiun/tunjangan, tanda bukti penerimaan uang negara, kuitansi semua jenis pajak, tanda terima uang intern organisasi, dokumen simpanan uang dan pembayaran simpanan oleh bank/koperasi, surat gadai, tanda pembagian keuntungan/bunga/imbal hasil surat berharga, serta dokumen Bank Indonesia dalam rangka kebijakan moneter.",
        "Pemerintah dapat memberikan pembebasan bea meterai (Pasal 22), antara lain untuk dokumen pengalihan hak atas tanah/bangunan dalam rangka penanganan bencana alam atau kegiatan keagamaan dan sosial nonkomersial, dokumen program pemerintah/kebijakan moneter, dan dokumen pelaksanaan perjanjian internasional.",
        "Bea meterai bukan syarat sah perjanjian: dokumen tanpa meterai tetap sah secara perdata, tetapi baru dapat dipakai sebagai alat bukti di pengadilan setelah dilakukan pemeteraian kemudian."
      ],
      poinKunci: [
        { label: "Ambang dokumen penerimaan uang", nilai: "lebih dari Rp5.000.000", dasar: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Rangkap surat perjanjian", nilai: "tiap rangkap asli terutang; fotokopi tidak", dasar: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Alat bukti di pengadilan", nilai: "objek, apa pun jenis dokumennya", dasar: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Ijazah, tanda terima gaji, surat gadai, kuitansi pajak", nilai: "bukan objek", dasar: "Pasal 7 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Dokumen elektronik", nilai: "termasuk dokumen, objek bea meterai", dasar: "Pasal 1 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Ambang lama UU 13/1985", nilai: "Rp250.000 dan Rp1.000.000 — sudah tidak berlaku", dasar: "UU 13/1985 jo. PP 24/2000 (dicabut UU 10/2020)", berlakuSejak: "2021-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 3 UU 10/2020", catatan: "objek bea meterai" },
        { pasal: "Pasal 7 UU 10/2020", catatan: "dokumen yang tidak dikenai bea meterai" },
        { pasal: "Pasal 1 UU 10/2020", catatan: "definisi dokumen termasuk dokumen elektronik" },
        { pasal: "Pasal 22 UU 10/2020", catatan: "fasilitas pembebasan bea meterai" }
      ],
      jebakan: [
        { teks: "Mengira ambang Rp5 juta berlaku untuk semua dokumen; padahal hanya untuk dokumen penerimaan uang/pelunasan utang — perjanjian Rp1 juta tetap terutang", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai ambang lama Rp250.000/Rp1.000.000 dan tarif Rp3.000/Rp6.000 dari UU 13/1985", tagSebab: "angka-usang" },
        { teks: "Menganggap faktur/tagihan yang belum dibayar sebagai dokumen penerimaan uang; yang terutang adalah dokumen yang menyebutkan penerimaan uang atau pelunasan", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Dalam satu hari PT Lentera menerbitkan: kuitansi penerimaan uang Rp5.000.000; kuitansi Rp7.500.000; surat perjanjian sewa kendaraan senilai Rp2.000.000 (satu lembar asli); dan tanda terima gaji karyawan Rp9.000.000. Berapa bea meterai terutang?",
        jawaban: "Rp20.000",
        langkah: [
          ["Kuitansi Rp5.000.000 (tidak 'lebih dari' Rp5 juta)", "tidak terutang"],
          ["Kuitansi Rp7.500.000", "Rp10.000"],
          ["Surat perjanjian (tanpa ambang nilai)", "Rp10.000"],
          ["Tanda terima gaji (Pasal 7 huruf c)", "bukan objek"],
          ["Total", "Rp20.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "A5.2", slug: "saat-pihak-terutang", judul: "Saat terutang dan pihak yang terutang",
      estimasiMenit: 12, jenisDominan: ["konsep", "kasus"],
      ringkasan: [
        "Saat terutang (Pasal 8 ayat (1)): saat dibubuhi tanda tangan untuk surat perjanjian beserta rangkapnya, akta notaris beserta grosse/salinan/kutipan, dan akta PPAT beserta salinan/kutipan.",
        "Saat selesai dibuat: surat berharga dan dokumen transaksi surat berharga termasuk kontrak berjangka.",
        "Saat diserahkan kepada pihak untuk siapa dokumen dibuat: surat keterangan, surat pernyataan dan surat sejenis, dokumen lelang, serta dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000 (kuitansi).",
        "Saat diajukan ke pengadilan untuk dokumen alat bukti; saat digunakan di Indonesia untuk dokumen yang dibuat di luar negeri.",
        "Pihak terutang (Pasal 9): dokumen sepihak — pihak yang menerima dokumen; dokumen dua pihak atau lebih — masing-masing pihak atas dokumen yang diterimanya; surat berharga — penerbit; alat bukti — pihak yang mengajukan; dokumen luar negeri — pihak yang menerima manfaat.",
        "Pasal 9 ayat (6): ketentuan pihak terutang tidak menghalangi pihak atau para pihak bersepakat menentukan pihak yang membayar bea meterai; dalam praktik klausul perjanjian sering menunjuk salah satu pihak menanggung seluruh meterai. Kesepakatan itu tidak mengubah jumlah, saat terutang, maupun sanksi pemeteraian kemudian.",
        "Tanda tangan mencakup tanda tangan elektronik, paraf, cap/teraan tanda tangan, dan tanda lain pengganti tanda tangan (Pasal 1 UU 10/2020)."
      ],
      poinKunci: [
        { label: "Perjanjian, akta notaris, akta PPAT", nilai: "saat dibubuhi tanda tangan", dasar: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Surat berharga", nilai: "saat selesai dibuat; terutang oleh penerbit", dasar: "Pasal 8 ayat (1) huruf b dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Kuitansi, surat pernyataan, dokumen lelang", nilai: "saat diserahkan kepada pihak untuk siapa dokumen dibuat", dasar: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Dokumen dibuat di luar negeri", nilai: "saat digunakan di Indonesia; terutang oleh penerima manfaat", dasar: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Alat bukti pengadilan", nilai: "saat diajukan; terutang oleh pihak yang mengajukan", dasar: "Pasal 8 ayat (1) huruf d dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 8 UU 10/2020", catatan: "saat terutang" },
        { pasal: "Pasal 9 UU 10/2020", catatan: "pihak yang terutang; ayat (6): para pihak boleh bersepakat tentang pihak yang membayar" },
        { pasal: "Pasal 1 UU 10/2020", catatan: "pengertian tanda tangan termasuk elektronik" }
      ],
      jebakan: [
        { teks: "Mengira kuitansi terutang saat ditandatangani kasir; yang benar saat diserahkan kepada pihak untuk siapa dokumen dibuat", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira dokumen yang dibuat di luar negeri terutang saat ditandatangani di luar negeri atau tidak terutang sama sekali", tagSebab: "salah-baca" },
        { teks: "Menganggap penerbit kuitansi otomatis pihak yang terutang; menurut Pasal 9, dokumen sepihak terutang oleh pihak yang menerima dokumen", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Perjanjian jual beli antara PT A (Jakarta) dan XYZ Ltd ditandatangani di Singapura pada 2 Februari 2026 dan pertama kali digunakan di Indonesia untuk pencairan kredit bank pada 20 Mei 2026. Kapan bea meterai terutang dan siapa pihak yang terutang?",
        jawaban: "20 Mei 2026; pihak yang menerima manfaat (PT A)",
        langkah: [
          ["Dokumen dibuat di luar negeri", "Pasal 8 ayat (1) huruf e"],
          ["Saat terutang", "saat digunakan di Indonesia: 20 Mei 2026"],
          ["Pihak terutang", "pihak yang menerima manfaat di Indonesia: PT A"],
          ["Pelunasan", "dengan meterai atau SSP paling lambat saat digunakan, tanpa sanksi"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "A5.3", slug: "tarif-cara-pelunasan", judul: "Tarif dan cara pelunasan",
      estimasiMenit: 15, jenisDominan: ["konsep", "prosedur"],
      ringkasan: [
        "Tarif bea meterai bersifat tetap Rp10.000 per dokumen (Pasal 5 UU 10/2020), berlaku sejak 1 Januari 2021, tidak bergantung pada nilai dokumen maupun jumlah halaman.",
                "Pembayaran dilakukan dengan meterai — meterai tempel, meterai elektronik, atau meterai bentuk lain yang ditetapkan Menteri — atau dengan Surat Setoran Pajak (Pasal 12).",
        "Meterai tempel direkatkan utuh di tempat tanda tangan dibubuhkan; tanda tangan dibubuhkan sebagian di atas kertas dan sebagian di atas meterai; ciri umum: lambang Garuda, frasa METERAI TEMPEL, angka 10000, dan SEPULUH RIBU RUPIAH.",
        "Meterai elektronik (e-meterai) diterbitkan Peruri dengan kode unik berupa nomor seri dan keterangan tertentu, dibubuhkan pada dokumen elektronik melalui sistem resmi; gambar meterai tempel yang dipindai bukan meterai elektronik.",
        "Meterai dalam bentuk lain ditetapkan Menteri (PMK 78/2024 memperkenalkan meterai teraan digital) untuk pihak yang menerbitkan dokumen dalam jumlah besar; SSP dengan kode billing Coretax dipakai antara lain untuk pemeteraian kemudian dan penyetoran oleh pemungut.",
        "Masa peralihan: meterai tempel Rp3.000 dan Rp6.000 hanya dapat dipakai sampai 31 Desember 2021 dengan nilai gabungan paling sedikit Rp9.000; sejak 1 Januari 2022 tidak sah dipakai."
      ],
      poinKunci: [
        { label: "Tarif tetap", nilai: "Rp10.000 per dokumen", dasar: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Meterai Rp3.000/Rp6.000", nilai: "berhenti berlaku 1 Januari 2022", dasar: "Ketentuan Peralihan UU 10/2020", berlakuSejak: "2022-01-01" },
        { label: "Cara pembayaran", nilai: "meterai (tempel, elektronik, bentuk lain) atau SSP", dasar: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Penerbit meterai elektronik", nilai: "Peruri; kode unik + keterangan tertentu", dasar: "UU 10/2020 Pasal 12; PP 86/2021", berlakuSejak: "2021-08-19" },
        { label: "Meterai teraan digital", nilai: "meterai bentuk lain PMK 78/2024", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 5 UU 10/2020", catatan: "tarif tetap Rp10.000" },
        { pasal: "Pasal 12 UU 10/2020", catatan: "cara pembayaran: meterai atau SSP" },
        { pasal: "PP 86/2021", catatan: "pengadaan, pengelolaan, dan penjualan meterai; Peruri mencetak meterai tempel dan membuat meterai elektronik" },
        { pasal: "PMK 78/2024", catatan: "ketentuan pelaksanaan, meterai teraan" },
        { pasal: "Ketentuan Peralihan UU 10/2020", catatan: "meterai lama sampai akhir 2021, nilai gabungan paling sedikit Rp9.000" }
      ],
      jebakan: [
        { teks: "Menghitung bea meterai proporsional terhadap nilai kontrak atau per halaman; tarifnya tetap per dokumen", tagSebab: "salah-hitung" },
        { teks: "Menganggap dua meterai Rp6.000 (Rp12.000) melunasi bea meterai; meterai lama tidak berlaku sejak 2022 sehingga dianggap tidak dibayar", tagSebab: "angka-usang" },
        { teks: "Membubuhkan e-meterai dengan menempel gambar hasil pindai; e-meterai hanya sah bila dibubuhkan lewat sistem Peruri/distributor resmi", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Perjanjian kredit senilai Rp25.000.000.000 setebal 40 halaman ditandatangani dalam 3 rangkap asli. Berapa total bea meterai terutang?",
        jawaban: "Rp30.000",
        langkah: [
          ["Tarif tetap per dokumen", "Rp10.000"],
          ["Nilai Rp25 miliar dan 40 halaman", "tidak memengaruhi"],
          ["Rangkap asli", "3 dokumen"],
          ["Total 3 × Rp10.000", "Rp30.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "A5.4", slug: "pemungut-bea-meterai", judul: "Pemungut bea meterai",
      estimasiMenit: 12, jenisDominan: ["prosedur", "hitung"],
      ringkasan: [
        "Pemungut bea meterai adalah pihak yang ditetapkan untuk memungut, menyetor, dan melaporkan bea meterai atas dokumen tertentu (Pasal 10–11 UU 10/2020); aturan pelaksananya kini PMK 78/2024 yang menggantikan PMK 151/2021.",
        "Dokumen yang bea meterainya dipungut: surat berharga berupa cek dan bilyet giro, dokumen transaksi surat berharga, serta dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000 yang diterbitkan atau difasilitasi pemungut (misalnya kuitansi digital di platform pembayaran).",
        "Penetapan sebagai pemungut dilakukan oleh Kepala KPP dengan surat keputusan; tanpa penetapan, penerbit dokumen tidak berkedudukan sebagai pemungut. PMK 78/2024 juga menghapus mekanisme deposit e-meterai bagi pemungut.",
        "Pemungut memungut pada saat terutang, menyetor ke kas negara, dan menyampaikan SPT Masa Bea Meterai paling lambat tanggal 15 bulan berikutnya (sebelumnya setor tanggal 10 dan lapor tanggal 20).",
        "Pembayaran dengan kode billing dan pelaporan SPT Masa Bea Meterai dilakukan melalui Coretax; bila tanggal 15 jatuh pada hari libur, setor dan lapor dapat dilakukan pada hari kerja berikutnya.",
        "Sanksi pemungut (Pasal 11 UU 10/2020) dibedakan dua: bea meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor ditetapkan dengan SKP sebesar kekurangannya ditambah sanksi 100%; terlambat menyetor dan/atau tidak atau terlambat melapor ditagih dengan STP sesuai UU KUP (bunga Pasal 9 ayat (2a), denda SPT Masa Rp100.000 Pasal 7 ayat (1)).",
        "Dokumen yang bea meterainya telah dipungut pemungut dianggap lunas; pihak yang terutang tidak perlu membubuhkan meterai lagi."
      ],
      poinKunci: [
        { label: "Tenggat setor dan lapor pemungut", nilai: "tanggal 15 bulan berikutnya; hari libur → hari kerja berikutnya", dasar: "PMK 78/2024 Pasal 63–65; PMK 81/2024 Pasal 94 ayat (2) huruf k dan Pasal 100 (setor), Pasal 171 ayat (18) dan Pasal 173 (lapor)", berlakuSejak: "2025-01-01" },
        { label: "Penetapan pemungut", nilai: "Kepala KPP", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" },
        { label: "Mulai berlakunya penetapan pemungut", nilai: "sejak awal bulan berikutnya setelah tanggal surat penetapan (atas permohonan maupun secara jabatan)", dasar: "PMK 78/2024 Pasal 59 ayat (4)", berlakuSejak: "2024-11-01" },
        { label: "Denda SPT Masa Bea Meterai terlambat", nilai: "Rp100.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Bea meterai tidak dipungut/tidak disetor pemungut", nilai: "SKP: kekurangan + sanksi 100%", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Bunga setor terlambat (Oktober 2026)", nilai: "1,01% per bulan, paling lama 24 bulan", dasar: "Pasal 9 ayat (2a) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
        { label: "Objek pemungutan", nilai: "cek/bilyet giro, dokumen transaksi surat berharga, kuitansi digital > Rp5 juta", dasar: "Pasal 11 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 10–11 UU 10/2020", catatan: "pemungut; SKP + 100% bila tidak dipungut/disetor; STP sesuai UU KUP bila terlambat setor/lapor" },
        { pasal: "PMK 78/2024", catatan: "penetapan oleh KPP, setor dan lapor tanggal 15" },
        { pasal: "PMK 81/2024 Pasal 94 ayat (2) huruf k dan Pasal 100", catatan: "jatuh tempo penyetoran bea meterai pemungut tanggal 15; hari libur bergeser ke hari kerja berikutnya" },
        { pasal: "PMK 81/2024 Pasal 171 ayat (18) dan Pasal 173", catatan: "SPT Masa Bea Meterai paling lama 15 hari setelah Masa Pajak berakhir; hari libur bergeser ke hari kerja berikutnya" },
        { pasal: "Pasal 7 ayat (1) dan Pasal 9 ayat (2a) UU KUP", catatan: "denda SPT Masa Rp100.000; bunga setor terlambat" }
      ],
      jebakan: [
        { teks: "Memakai tenggat lama: setor tanggal 10 dan lapor tanggal 20 (PMK 151/2021)", tagSebab: "angka-usang" },
        { teks: "Mengira setiap perusahaan yang menerbitkan kuitansi > Rp5 juta otomatis menjadi pemungut; harus ada penetapan oleh KPP", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai denda SPT Masa PPN Rp500.000 untuk SPT Masa Bea Meterai yang terlambat", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "PT Dompet Digital (pemungut) pada Masa Agustus 2026 memfasilitasi 18.400 kuitansi digital bernilai lebih dari Rp5.000.000 dan 52.000 kuitansi bernilai Rp5.000.000 ke bawah. Berapa bea meterai yang wajib dipungut dan kapan paling lambat disetor?",
        jawaban: "Rp184.000.000; 15 September 2026",
        langkah: [
          ["Dokumen objek pemungutan", "18.400 (hanya yang > Rp5 juta)"],
          ["Bea meterai 18.400 × Rp10.000", "Rp184.000.000"],
          ["Kuitansi ≤ Rp5 juta", "tidak terutang"],
          ["Jatuh tempo setor dan lapor Masa Agustus (Selasa)", "15 September 2026"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "A5.5", slug: "pemeteraian-kemudian-daluwarsa", judul: "Pemeteraian kemudian dan daluwarsa",
      estimasiMenit: 12, jenisDominan: ["hitung", "prosedur"],
      ringkasan: [
        "Pemeteraian kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan Menteri (Pasal 1 UU 10/2020); dilakukan atas dokumen yang bea meterainya tidak atau kurang dibayar dan atas dokumen yang digunakan sebagai alat bukti di pengadilan (Pasal 17).",
        "Jumlah yang dibayar (Pasal 18): dokumen yang bea meterainya tidak atau kurang dibayar — bea meterai terutang Rp10.000 ditambah sanksi administratif 100%; dokumen yang semula bukan objek lalu diajukan sebagai alat bukti (misalnya kuitansi Rp3.000.000) — cukup Rp10.000 tanpa sanksi. Dokumen yang bea meterainya sudah lunas tidak perlu dimeteraikan ulang saat diajukan sebagai alat bukti.",
        "Dokumen yang dibuat di luar negeri dilunasi dengan meterai atau SSP paling lambat saat digunakan di Indonesia (saat terutangnya), tanpa sanksi; bila sudah digunakan tanpa dilunasi, dokumen itu menjadi dokumen yang bea meterainya tidak dibayar sehingga pelunasannya disertai sanksi 100%.",
        "PMK 78/2024 Pasal 51 menetapkan dua pengesah pemeteraian kemudian: Pejabat Pos (pejabat PT Pos Indonesia) untuk pembayaran dengan meterai tempel, dan Pejabat DJP untuk pembayaran dengan meterai tempel, meterai elektronik, dan/atau SSP; SSP dipakai antara lain untuk pemeteraian kemudian lebih dari 50 dokumen (Pasal 42). Bila kekurangan bea meterai ditemukan melalui pemeriksaan, DJP menerbitkan surat ketetapan pajak sebesar bea meterai yang kurang dibayar ditambah sanksi 100% (Pasal 19 UU 10/2020), lalu atas permintaan pihak terutang dokumennya disahkan Pejabat DJP (Pasal 53 PMK 78/2024).",
        "Daluwarsa: bea meterai yang terutang kedaluwarsa setelah 5 tahun sejak saat terutang (Pasal 23 UU 10/2020) dan berlaku untuk semua dokumen; Pasal 23 hanya menyebut bea meterai yang terutang; sanksi 100% pemeteraian kemudian dihitung dari bea meterai itu sehingga mengikuti pokoknya dan tidak ditagih lagi setelah lewat 5 tahun. Namun menurut Penjelasan Pasal 3 ayat (1) huruf b, dokumen yang bea meterainya belum dibayar lunas tetapi telah kedaluwarsa tetap harus dimeteraikan kemudian bila akan dijadikan alat bukti di pengadilan.",
        "Hakim, panitera, jurusita, notaris, PPAT, aparatur sipil negara, dan pejabat negara tidak dibenarkan menerima, mempertimbangkan, menyimpan, melekatkan, membuat salinan, atau memberi keterangan pada dokumen yang bea meterainya tidak atau kurang dibayar (Pasal 21); pelanggarannya dikenai sanksi administratif menurut peraturan kepegawaian."
      ],
      poinKunci: [
        { label: "Sanksi pemeteraian kemudian", nilai: "100% dari bea meterai terutang", dasar: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Total per dokumen yang lewat saat terutang", nilai: "Rp10.000 + Rp10.000 = Rp20.000", dasar: "Pasal 5 dan 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Daluwarsa", nilai: "5 tahun sejak saat terutang", dasar: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Pengesahan pemeteraian kemudian", nilai: "Pejabat Pos (dibayar dengan meterai tempel); Pejabat DJP (meterai tempel, meterai elektronik, SSP, atau setelah SKP/STP)", dasar: "Pasal 1 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" },
        { label: "Dokumen luar negeri dilunasi paling lambat saat digunakan", nilai: "hanya Rp10.000, tanpa sanksi", dasar: "Pasal 8 ayat (1) huruf e dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Dokumen bukan objek yang diajukan sebagai alat bukti", nilai: "Rp10.000, tanpa sanksi", dasar: "Pasal 3 ayat (1) huruf b, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 17 UU 10/2020", catatan: "pemeteraian kemudian" },
        { pasal: "Pasal 18 UU 10/2020", catatan: "sanksi administratif 100%" },
        { pasal: "Pasal 19 UU 10/2020", catatan: "SKP atas bea meterai tidak atau kurang dibayar" },
        { pasal: "Pasal 21 UU 10/2020", catatan: "larangan bagi pejabat menerima dokumen yang belum lunas" },
        { pasal: "Pasal 23 UU 10/2020", catatan: "daluwarsa 5 tahun" },
        { pasal: "PMK 78/2024", catatan: "tata cara pemeteraian kemudian, Pejabat Pos dan Pejabat DJP" }
      ],
      jebakan: [
        { teks: "Mengenakan sanksi 200% warisan UU 13/1985; sejak 2021 sanksinya 100%", tagSebab: "angka-usang" },
        { teks: "Mengenakan sanksi 100% pada dokumen luar negeri yang dilunasi paling lambat saat digunakan di Indonesia", tagSebab: "salah-klasifikasi" },
        { teks: "Menghitung daluwarsa dari tanggal dokumen ditemukan pemeriksa, bukan dari saat terutang", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Pada pemeriksaan 10 Oktober 2026 ditemukan 12 kuitansi bernilai lebih dari Rp5 juta tanpa meterai yang diserahkan sepanjang 2024, dan 3 kuitansi serupa yang diserahkan Juni 2021. Berapa yang harus dibayar melalui pemeteraian kemudian?",
        jawaban: "Rp240.000",
        langkah: [
          ["Kuitansi 2024: saat terutang lewat", "12 × (Rp10.000 + Rp10.000)"],
          ["Subtotal", "Rp240.000"],
          ["Kuitansi Juni 2021", "daluwarsa Juni 2026 (5 tahun, Pasal 23) — tidak ditagih"],
          ["Total dibayar", "Rp240.000"]
        ]
      },
      verifikasi: "✅"
    },
    {
      id: "A5.6", slug: "sanksi-bea-meterai", judul: "Sanksi administratif dan pidana",
      estimasiMenit: 10, jenisDominan: ["konsep", "hitung"],
      ringkasan: [
        "Sanksi administratif bea meterai sebesar 100% dari bea meterai yang terutang, dibayar bersama pokok pada saat pemeteraian kemudian oleh pihak yang terutang (Pasal 18 UU 10/2020); turun dari 200% pada UU 13/1985.",
        "Sanksi dihitung per dokumen: Rp10.000 × 100% = Rp10.000, sehingga total per dokumen yang lewat saat terutang Rp20.000.",
        "Pemungut tunduk pada Pasal 11, bukan Pasal 18: bea meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor ditetapkan dengan SKP ditambah sanksi 100%; terlambat menyetor dan/atau tidak atau terlambat melapor ditagih dengan STP sesuai UU KUP (bunga Pasal 9 ayat (2a), denda Pasal 7 ayat (1)).",
        "Pidana pemalsuan (Pasal 24–25): meniru atau memalsu meterai, serta memakai, menjual, menawarkan, menyediakan untuk dijual, atau memasukkan ke Indonesia meterai palsu, diancam pidana penjara paling lama 7 tahun dan denda paling banyak Rp500.000.000.",
        "Meterai bekas (Pasal 26): menghilangkan tanda pemakaian pada meterai yang sudah dipakai agar tampak belum dipakai, atau memakai/menjual meterai bekas tersebut, diancam pidana penjara paling lama 3 tahun dan denda paling banyak Rp200.000.000; pejabat yang melanggar larangan Pasal 21 dikenai sanksi administratif kepegawaian, bukan pidana.",
        "Tidak membubuhkan meterai bukan tindak pidana dan tidak membatalkan perjanjian; akibatnya administratif (pemeteraian kemudian + 100%) dan dokumen tidak dapat dipakai sebagai alat bukti sebelum dimeteraikan."
      ],
      poinKunci: [
        { label: "Sanksi administratif", nilai: "100% dari bea meterai terutang", dasar: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Sanksi lama UU 13/1985", nilai: "200% — tidak berlaku lagi", dasar: "UU 13/1985 Pasal 8 (dicabut)", berlakuSejak: "2021-01-01" },
        { label: "Pidana meniru/memalsu meterai", nilai: "penjara paling lama 7 tahun, denda paling banyak Rp500 juta", dasar: "Pasal 24 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Pidana meterai bekas", nilai: "penjara paling lama 3 tahun, denda paling banyak Rp200 juta", dasar: "Pasal 26 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Sanksi pemungut", nilai: "tidak pungut/setor: SKP + 100%; terlambat setor/lapor: STP sesuai UU KUP", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 18 UU 10/2020", catatan: "sanksi administratif 100%" },
        { pasal: "Pasal 24–26 UU 10/2020", catatan: "ketentuan pidana" },
        { pasal: "Pasal 11 UU 10/2020", catatan: "sanksi pemungut: SKP + 100% atau STP sesuai UU KUP" }
      ],
      jebakan: [
        { teks: "Memakai sanksi 200% (UU lama) atau menghitung sanksi dari nilai dokumen, bukan dari bea meterai terutang", tagSebab: "angka-usang" },
        { teks: "Menyamaratakan sanksi pemungut: setoran yang hanya terlambat ditagih STP (bunga UU KUP), sedangkan bea meterai yang tidak dipungut atau tidak disetor ditetapkan SKP + 100%", tagSebab: "lupa-pasal" },
        { teks: "Mengira dokumen tanpa meterai batal demi hukum atau pelakunya dipidana", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Ditemukan 8 surat perjanjian tanpa meterai yang ditandatangani pada 2025. Berapa sanksi administratif yang harus dibayar (di luar pokok bea meterai)?",
        jawaban: "Rp80.000",
        langkah: [
          ["Pokok per dokumen", "Rp10.000"],
          ["Sanksi 100% per dokumen", "Rp10.000"],
          ["Sanksi 8 dokumen", "Rp80.000"],
          ["Total pemeteraian kemudian (pokok + sanksi)", "Rp160.000"]
        ]
      },
      verifikasi: "✅"
    }
  ],
  soal: [
    {
      id: "A5-001", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Pada 6 Oktober 2026 bagian administrasi PT Rimba Lestari menyiapkan empat dokumen yang ditandatangani dan diserahkan hari itu juga: (1) kuitansi tanda terima uang muka dari pelanggan sebesar Rp4.000.000; (2) surat perjanjian sewa ruko dengan pemilik ruko, nilai sewa Rp3.000.000 per tahun, satu rangkap asli; (3) tanda terima pembayaran gaji Oktober kepada manajer sebesar Rp9.000.000; (4) surat pengiriman barang (delivery order) atas barang senilai Rp45.000.000. Dokumen yang terutang bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(2) saja", C: "(2), (3), dan (4)", D: "(1), (2), (3), dan (4)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Surat perjanjian terutang tanpa batasan nilai (Pasal 3 ayat (2) huruf a); kuitansi baru terutang bila nilainya lebih dari Rp5.000.000 (huruf g), sedangkan tanda terima gaji dan dokumen pengiriman barang dikecualikan Pasal 7 berapa pun nilainya.",
        jejakHitung: [],
        mengapaSalah: { A: "Kuitansi Rp4.000.000 tidak melebihi Rp5.000.000; ambang lama Rp1.000.000 (UU 13/1985) sudah tidak berlaku", C: "Tanda terima gaji (Pasal 7 huruf c) dan surat pengiriman barang (Pasal 7 huruf a) dikecualikan berapa pun nilainya", D: "Mengabaikan ambang Rp5.000.000 sekaligus seluruh pengecualian Pasal 7" },
        jebakan: "Nilai Rp9.000.000 dan Rp45.000.000 adalah umpan; pengecualian Pasal 7 tidak mengenal ambang nilai, sedangkan perjanjian bernilai kecil tetap terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-002", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      kutipan: "Pasal 3 ayat (2) huruf g UU 10/2020 (parafrase): dokumen yang bersifat perdata meliputi dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000 yang (1) menyebutkan penerimaan uang; atau (2) berisi pengakuan bahwa utang seluruhnya atau sebagiannya telah dilunasi atau diperhitungkan.",
      stem: "PT Mitra Jaya pada 3 Oktober 2026 menerbitkan dan menyerahkan empat kuitansi penerimaan uang kepada empat pelanggan berbeda masing-masing sebesar Rp2.000.000, Rp5.000.000, Rp5.500.000, dan Rp30.000.000. Berdasarkan kutipan tersebut, total bea meterai yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.000", B: "Rp30.000", C: "Rp40.000", D: "Rp20.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya kuitansi yang nilainya lebih dari Rp5.000.000 yang terutang, yaitu Rp5.500.000 dan Rp30.000.000; tarif tetap Rp10.000 per dokumen.",
        jejakHitung: [ ["Kuitansi Rp2.000.000 dan Rp5.000.000", "tidak terutang (tidak lebih dari Rp5 juta)"], ["Kuitansi Rp5.500.000", "Rp10.000"], ["Kuitansi Rp30.000.000", "Rp10.000"], ["Total 2 × Rp10.000", "Rp20.000"] ],
        mengapaSalah: { A: "Memakai tarif lama Rp6.000 dari UU 13/1985 untuk dua kuitansi", B: "Menghitung kuitansi tepat Rp5.000.000 sebagai terutang; syaratnya 'lebih dari'", C: "Menganggap semua kuitansi terutang tanpa ambang" },
        jebakan: "Frasa 'lebih dari Rp5.000.000' membuat nilai tepat Rp5.000.000 tidak terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-019", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      kutipan: "Pasal 3 ayat (2) huruf g UU 10/2020 (parafrase): dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000 yang menyebutkan penerimaan uang, atau berisi pengakuan bahwa utang seluruhnya atau sebagiannya telah dilunasi atau diperhitungkan, merupakan objek bea meterai.",
      stem: "CV Kreasi Digital (PKP) pada September 2026 menerima pembayaran dari tiga klien dan menyerahkan kuitansi kepada masing-masing klien. Klien 1: jasa desain seharga Rp4.480.000 ditambah PPN (DPP nilai lain 11/12 × harga, tarif 12%); kuitansi menyebut uang diterima sebesar harga ditambah PPN. Klien 2: jasa seharga Rp4.800.000 ditambah PPN dengan cara yang sama; klien memotong PPh Pasal 23 sebesar 2% dari harga, dan kuitansi menyebut uang yang benar-benar diterima. Klien 3: surat tanda pelunasan yang menyatakan utang klien sebesar Rp6.500.000 telah dilunasi. Berdasarkan kutipan tersebut, total bea meterai yang terutang atas ketiga dokumen adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000", B: "Rp30.000", C: "Rp10.000", D: "Rp18.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Yang diuji adalah jumlah uang yang dinyatakan dalam dokumen. Klien 1 hanya Rp4.972.800 (tidak terutang); klien 2 Rp5.232.000 dan klien 3 Rp6.500.000 (keduanya terutang).",
        jejakHitung: [ ["Klien 1: PPN = 4.480.000 × 11/12 × 12%", "Rp492.800"], ["Klien 1: uang diterima", "Rp4.972.800 → tidak terutang"], ["Klien 2: PPN = 4.800.000 × 11/12 × 12%", "Rp528.000"], ["Klien 2: PPh 23 = 2% × 4.800.000", "Rp96.000"], ["Klien 2: 4.800.000 + 528.000 − 96.000", "Rp5.232.000 → terutang"], ["Klien 3: pengakuan pelunasan Rp6.500.000", "terutang"], ["Total 2 × Rp10.000", "Rp20.000"] ],
        mengapaSalah: { B: "Mengabaikan DPP 11/12 sehingga PPN klien 1 menjadi Rp537.600 dan totalnya Rp5.017.600 seolah terutang", C: "Menguji harga sebelum PPN pada klien 2 (Rp4.800.000) sehingga hanya klien 3 yang terutang", D: "Memakai tarif lama Rp6.000 per dokumen untuk tiga dokumen" },
        jebakan: "Ambang diuji pada jumlah uang yang tertera di dokumen (termasuk PPN, setelah potongan PPh), bukan pada harga jasa."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-003", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Perjanjian kerja sama antara PT Alfa dan CV Beta dibuat dalam 3 rangkap asli yang masing-masing ditandatangani kedua pihak pada 5 Agustus 2026. Setelah itu bagian legal memfotokopi perjanjian sebanyak 5 eksemplar untuk arsip internal. Berapa bea meterai yang terutang?",
      kataKualifikasi: [],
      opsi: { A: "Rp18.000", B: "Rp10.000", C: "Rp80.000", D: "Rp30.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat perjanjian beserta rangkapnya merupakan objek; tiap rangkap asli yang ditandatangani terutang Rp10.000, sedangkan fotokopi arsip bukan dokumen yang ditandatangani dan tidak terutang kecuali diajukan sebagai alat bukti.",
        jejakHitung: [ ["Rangkap asli yang ditandatangani", "3"], ["Tarif per dokumen", "Rp10.000"], ["Fotokopi arsip", "tidak terutang"], ["Total 3 × Rp10.000", "Rp30.000"] ],
        mengapaSalah: { A: "Memakai tarif lama Rp6.000 × 3", B: "Mengabaikan frasa 'beserta rangkapnya' sehingga hanya menghitung satu dokumen", C: "Menghitung fotokopi sebagai dokumen terutang (3 + 5 = 8 dokumen)" },
        jebakan: "Rangkap asli dan fotokopi berbeda perlakuan; hanya rangkap yang ditandatangani yang terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-004", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Samudra Line, perusahaan pelayaran dan ekspedisi, menyusun SOP pemeteraian dokumen untuk tahun 2027. Bagian legal mendaftar dokumen yang menurut Pasal 7 UU 10/2020 tidak dikenai bea meterai berapa pun nilainya. Seluruh dokumen berikut tepat dimasukkan ke daftar tersebut, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Konosemen (bill of lading) atas pengangkutan muatan pelanggan", B: "Tanda terima uang yang dibuat kasir cabang atas setoran kas ke kantor pusat untuk keperluan intern", C: "Surat pernyataan kesanggupan membayar ganti rugi muatan yang dibuat perusahaan dan diserahkan kepada pemilik barang", D: "Tanda terima pembayaran uang pensiun bulanan kepada mantan awak kapal" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat pernyataan termasuk dokumen perdata Pasal 3 ayat (2) huruf a dan terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat; tiga dokumen lain dikecualikan tegas oleh Pasal 7.",
        jejakHitung: [],
        mengapaSalah: { A: "Konosemen adalah dokumen lalu lintas barang (Pasal 7 huruf a)", B: "Tanda penerimaan uang untuk keperluan intern organisasi dikecualikan Pasal 7 huruf f", D: "Tanda terima pensiun dikecualikan Pasal 7 huruf c" },
        jebakan: "Kata 'kecuali' membalik pertanyaan: yang dicari adalah dokumen yang justru terutang."
      },
      dasarHukum: [ { pasal: "Pasal 7 huruf a, c, dan f UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-020", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      kutipan: "Pasal 7 huruf c UU 10/2020 (parafrase): Bea Meterai tidak dikenakan atas tanda terima pembayaran gaji, uang tunggu, pensiun, uang tunjangan, dan pembayaran lainnya yang berkaitan dengan hubungan kerja, serta surat yang diserahkan untuk mendapatkan pembayaran dimaksud.",
      stem: "Yayasan Pendidikan Cendekia pada Desember 2026 memperoleh empat dokumen: (1) tanda terima THR dan bonus akhir tahun guru tetap sebesar Rp12.000.000; (2) kuitansi honorarium narasumber pelatihan yang bukan pegawai yayasan sebesar Rp7.500.000, ditandatangani narasumber dan diserahkan kepada yayasan; (3) tanda terima uang pesangon mantan pegawai sebesar Rp60.000.000; (4) kuitansi pelunasan sewa aula sebesar Rp15.000.000 yang dibuat hotel dan diserahkan kepada yayasan. Berdasarkan kutipan tersebut, dokumen yang terutang bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) dan (4)", B: "(4) saja", C: "(1), (2), (3), dan (4)", D: "(2), (3), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pengecualian Pasal 7 huruf c hanya untuk pembayaran yang berkaitan dengan hubungan kerja (THR, bonus, pesangon). Narasumber bukan pegawai tidak memiliki hubungan kerja dengan yayasan, sehingga kuitansi honorariumnya terutang karena melebihi Rp5.000.000; kuitansi pelunasan sewa juga terutang.",
        jejakHitung: [],
        mengapaSalah: { B: "Menganggap honorarium narasumber sebagai pembayaran hubungan kerja; narasumber bukan pegawai", C: "Mengabaikan pengecualian Pasal 7 huruf c untuk THR, bonus, dan pesangon", D: "Pesangon adalah pembayaran yang berkaitan dengan hubungan kerja sehingga dikecualikan" },
        jebakan: "Status penerima (pegawai atau bukan) menentukan; pembayaran yang sama-sama dipotong PPh 21 belum tentu masuk pengecualian Pasal 7 huruf c."
      },
      dasarHukum: [ { pasal: "Pasal 7 huruf c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-005", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "CV Arunika meminjamkan uang Rp150.000.000 kepada Tuan Bayu berdasarkan surat perjanjian pinjam-meminjam yang ditandatangani kedua pihak pada 4 Mei 2026 tanpa dibubuhi meterai. Pada Oktober 2026 Tuan Bayu wanprestasi dan berdalih bahwa perjanjian itu tidak sah karena tidak bermeterai. CV Arunika berencana menggugat ke pengadilan negeri dengan rangkap perjanjian miliknya sebagai alat bukti. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Perjanjian batal demi hukum karena tidak bermeterai sehingga tidak dapat dijadikan dasar gugatan", B: "Perjanjian tetap sah; sebelum diajukan sebagai alat bukti, rangkap itu harus dimeteraikan kemudian dengan membayar Rp10.000 ditambah sanksi 100%", C: "Perjanjian tetap sah dan dapat langsung diajukan sebagai alat bukti tanpa pemeteraian kemudian", D: "Perjanjian tetap sah; cukup dimeteraikan kemudian Rp10.000 tanpa sanksi karena baru akan diajukan ke pengadilan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bea meterai adalah pajak atas dokumen, bukan syarat sah perjanjian. Perjanjian ini sudah terutang saat ditandatangani 4 Mei 2026 dan tidak dilunasi, sehingga pemeteraian kemudian meliputi pokok Rp10.000 dan sanksi 100%.",
        jejakHitung: [ ["Saat terutang", "4 Mei 2026 (dibubuhi tanda tangan)"], ["Pokok", "Rp10.000"], ["Sanksi 100% (Pasal 18)", "Rp10.000"], ["Total pemeteraian kemudian", "Rp20.000"] ],
        mengapaSalah: { A: "Keabsahan perjanjian diatur hukum perdata; meterai hanya kewajiban pajak atas dokumen", C: "Dokumen yang diajukan sebagai alat bukti wajib dilunasi bea meterainya lebih dulu melalui pemeteraian kemudian", D: "Tanpa sanksi hanya berlaku bagi dokumen yang semula bukan objek; perjanjian ini sudah terutang sejak ditandatangani" },
        jebakan: "Pengecoh 'tanpa sanksi karena baru akan diajukan ke pengadilan' menggoda, tetapi kewajiban bea meterainya sudah lahir lebih dulu saat tanda tangan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) dan ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-006", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Sinar Abadi menjual suku cadang kepada CV Mekar. Pada 1 September 2026 PT Sinar Abadi menerbitkan invoice sebesar Rp8.000.000 dengan jangka waktu pembayaran 30 hari. Pada 25 September 2026 CV Mekar membayar Rp3.000.000 dan menerima kuitansi Rp3.000.000. Pada 20 Oktober 2026 CV Mekar membayar sisanya Rp5.000.000, lalu PT Sinar Abadi menyerahkan kepada CV Mekar invoice semula yang telah dibubuhi cap 'LUNAS' dengan keterangan 'telah dibayar lunas Rp8.000.000' dan ditandatangani kasir. Dokumen yang terutang bea meterai beserta saat terutangnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Invoice Rp8.000.000, terutang saat diterbitkan pada 1 September 2026 karena nilainya lebih dari Rp5.000.000", B: "Hanya invoice bercap lunas Rp8.000.000, terutang saat diserahkan kepada CV Mekar pada 20 Oktober 2026", C: "Kuitansi Rp3.000.000 dan invoice bercap lunas, karena total pembayaran CV Mekar Rp8.000.000", D: "Tidak ada, karena setiap pembayaran nilainya tidak lebih dari Rp5.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Invoice yang belum dibayar tidak menyebutkan penerimaan uang atau pengakuan pelunasan sehingga bukan objek. Setelah dibubuhi keterangan 'telah dibayar lunas Rp8.000.000', invoice itu menjadi dokumen pengakuan pelunasan utang bernilai lebih dari Rp5.000.000 (Pasal 3 ayat (2) huruf g) yang terutang saat diserahkan kepada CV Mekar (Pasal 8 ayat (1) huruf c); kuitansi Rp3.000.000 tidak terutang.",
        jejakHitung: [ ["Invoice 1 September 2026 (belum dibayar)", "bukan objek"], ["Kuitansi Rp3.000.000", "tidak lebih dari Rp5 juta → tidak terutang"], ["Invoice bercap lunas Rp8.000.000", "pengakuan pelunasan > Rp5 juta → Rp10.000"], ["Saat terutang", "20 Oktober 2026 (diserahkan)"] ],
        mengapaSalah: { A: "Pada 1 September invoice hanya tagihan; ia tidak menyebutkan penerimaan uang atau pengakuan pelunasan", C: "Setiap dokumen diuji sendiri; kuitansi Rp3.000.000 tidak melebihi ambang meskipun total pembayaran Rp8.000.000", D: "Yang diuji adalah jumlah uang yang dinyatakan dalam dokumen pelunasan (Rp8.000.000), bukan nilai pembayaran terakhir" },
        jebakan: "Status dokumen dapat berubah: tagihan yang kemudian dibubuhi pengakuan lunas menjadi objek pada saat diserahkan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-007", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "PT Awan Biru dan PT Data Andal menyepakati jasa konsultasi senilai Rp240.000.000. Perjanjiannya dibuat sebagai berkas PDF, ditandatangani kedua pihak dengan tanda tangan elektronik tersertifikasi melalui penyelenggara sertifikasi elektronik pada 12 Oktober 2026, dan tidak pernah dicetak. Bagian legal PT Awan Biru ingin bea meterainya lunas secara sah sejak perjanjian ditandatangani. Perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terutang karena bukan dokumen kertas", B: "Terutang hanya apabila dokumen dicetak", C: "Terutang Rp10.000 dan dilunasi dengan meterai elektronik", D: "Terutang Rp10.000 dan dilunasi dengan menempelkan gambar meterai tempel hasil pindai" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 1 UU 10/2020 menegaskan dokumen mencakup bentuk elektronik dan tanda tangan mencakup tanda tangan elektronik, sehingga perjanjian elektronik terutang saat ditandatangani dan dilunasi dengan e-meterai.",
        jejakHitung: [],
        mengapaSalah: { A: "Definisi dokumen sejak UU 10/2020 mencakup dokumen elektronik", B: "Pencetakan tidak menentukan terutangnya bea meterai", D: "Gambar pindai bukan meterai elektronik yang diterbitkan Peruri dengan kode unik" },
        jebakan: "Perluasan definisi dokumen ke bentuk elektronik adalah perubahan pokok UU 10/2020 dibanding UU 13/1985."
      },
      dasarHukum: [ { pasal: "Pasal 1 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-008", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Dalam sengketa perdata, PT Arjuna mengajukan empat dokumen sebagai alat bukti ke pengadilan negeri: (1) cetakan percakapan WhatsApp; (2) kuitansi pembayaran Rp3.000.000; (3) fotokopi perjanjian yang aslinya sudah bermeterai; (4) surat elektronik penawaran harga. Dokumen yang terutang bea meterai pada saat diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Hanya (2)", B: "(1), (2), (3), dan (4)", C: "(1) dan (2) saja", D: "Tidak ada, karena keempatnya bukan dokumen perdata menurut Pasal 3 ayat (2)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf b menjadikan setiap dokumen yang digunakan sebagai alat bukti di pengadilan sebagai objek, terlepas dari jenis dan nilainya; saat terutangnya adalah saat diajukan ke pengadilan dan pihak terutang adalah yang mengajukan.",
        jejakHitung: [],
        mengapaSalah: { A: "Kuitansi Rp3 juta justru tidak terutang sebagai dokumen perdata; ia terutang karena diajukan sebagai alat bukti, sama seperti tiga dokumen lain", C: "Fotokopi dan surat elektronik yang diajukan sebagai alat bukti juga terutang", D: "Objek Pasal 3 ayat (1) huruf b berdiri sendiri, tidak bergantung pada daftar dokumen perdata" },
        jebakan: "Peserta cenderung menguji tiap dokumen dengan daftar Pasal 3 ayat (2), padahal kuncinya adalah huruf b ayat (1): alat bukti."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf d dan Pasal 9 UU 10/2020 (pihak yang mengajukan alat bukti)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-009",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Dalam rapat koordinasi pascabencana banjir bandang 2026, pemerintah daerah, yayasan keagamaan, dan bank penyalur kredit mendata dokumen yang mungkin memperoleh fasilitas pembebasan bea meterai. Dokumen berikut termasuk kelompok yang dapat diberikan fasilitas pembebasan berdasarkan Pasal 22 UU 10/2020, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Akta pengalihan hak atas tanah dan bangunan dalam rangka percepatan pemulihan sosial ekonomi akibat bencana alam", B: "Dokumen pengalihan hak atas tanah untuk kegiatan keagamaan dan sosial yang tidak bersifat komersial", C: "Perjanjian kredit konsumtif antara bank umum dan nasabah perorangan", D: "Dokumen yang terkait pelaksanaan perjanjian internasional yang mengikat Indonesia" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembebasan Pasal 22 terbatas pada dokumen penanganan bencana alam, keagamaan/sosial nonkomersial, program pemerintah dan kebijakan lembaga moneter/jasa keuangan, serta perjanjian internasional; perjanjian kredit konsumtif biasa tetap terutang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Termasuk kelompok dokumen penanganan bencana alam yang dapat dibebaskan",
          B: "Termasuk kelompok kegiatan keagamaan dan sosial nonkomersial",
          D: "Perjanjian internasional adalah salah satu kelompok yang dapat dibebaskan"
        },
        jebakan: "Pembebasan bersifat fasilitas yang 'dapat diberikan' dan rinciannya diatur dengan peraturan pemerintah tersendiri (bukan PP 86/2021, yang mengatur pengadaan meterai); berbeda dari pengecualian objek Pasal 7."
      },
      dasarHukum: [{ pasal: "Pasal 22 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 UU 10/2020 (pembanding: dokumen bukan objek)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-031", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Wira Mandiri membeli mesin dari CV Logam Jaya seharga Rp12.000.000 yang dibayar tiga kali pada 5 Agustus, 5 September, dan 5 Oktober 2026, masing-masing Rp4.000.000. Pada setiap pembayaran CV Logam Jaya menyerahkan kuitansi Rp4.000.000. Setelah pembayaran terakhir, CV Logam Jaya juga menyerahkan surat keterangan lunas yang menyatakan bahwa utang PT Wira Mandiri sebesar Rp12.000.000 telah dilunasi seluruhnya. Total bea meterai yang terutang atas seluruh dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp0", C: "Rp30.000", D: "Rp10.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Setiap dokumen diuji sendiri-sendiri. Tiga kuitansi cicilan masing-masing Rp4.000.000 tidak terutang, sedangkan surat keterangan lunas menyatakan pengakuan pelunasan utang Rp12.000.000 sehingga terutang Rp10.000.",
        jejakHitung: [ ["Kuitansi cicilan 3 × Rp4.000.000", "masing-masing tidak lebih dari Rp5 juta → tidak terutang"], ["Surat keterangan lunas Rp12.000.000", "pengakuan pelunasan → terutang"], ["Total", "Rp10.000"] ],
        mengapaSalah: { A: "Menjumlahkan nilai transaksi Rp12.000.000 lalu menganggap ketiga kuitansi cicilan ikut terutang (3 kuitansi + surat lunas); tiap kuitansi Rp4.000.000 diuji atas nilainya sendiri", B: "Surat keterangan lunas adalah dokumen pengakuan pelunasan utang di atas Rp5 juta (huruf g angka 2), sekaligus surat keterangan (huruf a)", C: "Menguji cicilan secara kumulatif (kuitansi ke-2 = Rp8 juta dan ke-3 = Rp12 juta dianggap melewati Rp5 juta) lalu menambah surat lunas (3 × Rp10.000); nilai cicilan tidak dikumulasikan" },
        jebakan: "Pemecahan pembayaran tidak menggabungkan nilai kuitansi, tetapi dokumen pelunasan akhir menyebut jumlah utang yang dilunasi."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-010", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-01",
      stem: "Data untuk dua soal berurutan (PT Cahaya Niaga). Pada 15 Maret 2026 PT Cahaya Niaga: (a) menandatangani perjanjian sewa gudang dengan PT Gudang Raya dalam 2 rangkap asli, satu untuk tiap pihak; (b) menerbitkan dan menyerahkan kuitansi penerimaan uang Rp4.800.000 dan Rp15.000.000 kepada dua pelanggan; (c) menerima surat jalan pengiriman barang senilai Rp20.000.000 dari ekspedisi; (d) membuat surat pernyataan direksi yang diserahkan ke bank. Total bea meterai yang terutang atas seluruh dokumen tersebut, siapa pun pihak terutangnya, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp30.000", C: "Rp50.000", D: "Rp60.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Yang terutang: 2 rangkap perjanjian (Rp20.000), kuitansi Rp15.000.000 (Rp10.000), dan surat pernyataan (Rp10.000); kuitansi Rp4.800.000 di bawah ambang dan surat jalan dikecualikan Pasal 7 huruf a.",
        jejakHitung: [ ["Perjanjian sewa 2 rangkap × Rp10.000", "Rp20.000"], ["Kuitansi Rp4.800.000", "tidak terutang"], ["Kuitansi Rp15.000.000", "Rp10.000"], ["Surat jalan (Pasal 7 huruf a)", "bukan objek"], ["Surat pernyataan direksi", "Rp10.000"], ["Total", "Rp40.000"] ],
        mengapaSalah: { B: "Menghitung perjanjian sebagai satu dokumen padahal ada 2 rangkap asli", C: "Menghitung surat jalan sebagai dokumen bernilai lebih dari Rp5 juta", D: "Mengabaikan ambang kuitansi dan pengecualian surat jalan (6 dokumen × Rp10.000)" },
        jebakan: "Nilai surat jalan Rp20.000.000 adalah umpan; dokumen lalu lintas barang bukan objek berapa pun nilainya."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-013", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-01",
      stem: "Lanjutan data PT Cahaya Niaga. Perjanjian sewa gudang antara PT Cahaya Niaga (penyewa) dan PT Gudang Raya (pemilik) ditandatangani 15 Maret 2026 dalam 2 rangkap asli, masing-masing pihak memegang satu rangkap, dan tidak memuat klausul tentang siapa yang menanggung meterai. Kuitansi Rp15.000.000 yang dibuat PT Cahaya Niaga diserahkan kepada pelanggannya, PT Bumi. Pihak yang terutang bea meterai menurut Pasal 9 UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rangkap perjanjian: PT Cahaya Niaga atas kedua rangkap; kuitansi: PT Cahaya Niaga sebagai pembuat", B: "Rangkap perjanjian: masing-masing pihak atas rangkap yang diterimanya; kuitansi: PT Bumi sebagai penerima dokumen", C: "Rangkap perjanjian: masing-masing pihak atas rangkap yang diterimanya; kuitansi: PT Cahaya Niaga sebagai pembuat", D: "Rangkap perjanjian: PT Gudang Raya atas kedua rangkap sebagai pemilik gudang; kuitansi: PT Bumi" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat dua pihak atau lebih terutang oleh masing-masing pihak atas dokumen yang diterimanya, sedangkan dokumen sepihak seperti kuitansi terutang oleh pihak yang menerima dokumen (Pasal 9). Para pihak boleh bersepakat menentukan siapa yang membayar (Pasal 9 ayat (6)), tetapi kasus ini tidak memuat klausul semacam itu.",
        jejakHitung: [],
        mengapaSalah: { A: "Posisi sebagai penyewa atau pembuat kuitansi tidak menentukan pihak terutang", C: "Untuk dokumen sepihak, yang terutang adalah penerima dokumen, bukan pembuatnya", D: "Pemilik gudang hanya terutang atas rangkap yang diterimanya" },
        jebakan: "Dalam praktik pembuat kuitansi sering membubuhkan meterai, tetapi menurut Pasal 9 yang terutang adalah penerima kuitansi."
      },
      dasarHukum: [ { pasal: "Pasal 9 UU 10/2020 (dokumen sepihak dan dokumen dua pihak atau lebih)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-011", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) UU 10/2020 (parafrase): Bea Meterai terutang pada saat (a) dokumen dibubuhi tanda tangan, untuk surat perjanjian beserta rangkapnya, akta notaris, dan akta PPAT; (b) dokumen selesai dibuat, untuk surat berharga dan dokumen transaksi surat berharga; (c) dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, untuk surat keterangan, surat pernyataan, dokumen lelang, dan dokumen yang menyatakan jumlah uang; (d) dokumen diajukan ke pengadilan; (e) dokumen yang dibuat di luar negeri digunakan di Indonesia.",
      stem: "Pada 30 Juni 2026 direksi PT Bahari dan CV Lintas bersama-sama menandatangani perjanjian distribusi (dokumen A). Pada hari yang sama direksi PT Bahari juga menandatangani surat pernyataan jaminan pasokan (dokumen B) yang ditujukan kepada CV Lintas, tetapi dokumen B baru dikirim dan diterima CV Lintas pada 6 Juli 2026. Berdasarkan kutipan tersebut, saat terutang bea meterai dokumen A dan dokumen B adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen A 6 Juli 2026; dokumen B 30 Juni 2026", B: "Keduanya 30 Juni 2026 karena ditandatangani pada hari yang sama", C: "Keduanya 6 Juli 2026, saat dokumen diterima CV Lintas", D: "Dokumen A 30 Juni 2026; dokumen B 6 Juli 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Surat perjanjian terutang saat dibubuhi tanda tangan, sedangkan surat pernyataan terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf a dan c).",
        jejakHitung: [],
        mengapaSalah: { A: "Kedua aturan tertukar", B: "Tanda tangan bukan saat terutang surat pernyataan", C: "Penyerahan bukan saat terutang surat perjanjian" },
        jebakan: "Surat perjanjian dan surat pernyataan sama-sama tercantum di Pasal 3 ayat (2) huruf a, tetapi saat terutangnya berbeda."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-012", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Kuitansi penerimaan uang sebesar Rp12.000.000 dibuat dan ditandatangani kasir PT Nusa pada 28 Juni 2026, tetapi baru diserahkan kepada pembayar pada 2 Juli 2026 ketika pembayar datang mengambilnya. Bea meterai atas kuitansi tersebut terutang pada ...",
      kataKualifikasi: [],
      opsi: { A: "28 Juni 2026, saat kuitansi ditandatangani", B: "2 Juli 2026, saat kuitansi diserahkan kepada pihak untuk siapa dokumen dibuat", C: "Saat uang diterima di rekening PT Nusa", D: "30 Juni 2026, akhir Masa Pajak pembuatan kuitansi" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000 terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c), bukan saat ditandatangani.",
        jejakHitung: [],
        mengapaSalah: { A: "Saat tanda tangan berlaku untuk perjanjian dan akta, bukan kuitansi", C: "Penerimaan uang adalah peristiwa ekonomi, bukan saat terutang dokumen", D: "Bea meterai tidak mengenal Masa Pajak untuk pihak yang terutang; konsep masa hanya relevan bagi pemungut" },
        jebakan: "Perbedaan tanggal tanda tangan dan penyerahan dibuat sengaja untuk menguji huruf c Pasal 8."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-014", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Kontrak pasokan antara PT Delta (Indonesia) dan Nippon Co. ditandatangani di Tokyo pada 5 Januari 2026, dikirim ke kantor PT Delta pada 1 Februari 2026, dan baru dipakai PT Delta untuk mengajukan klaim asuransi di Jakarta pada 10 Maret 2026. Bea meterai atas kontrak tersebut terutang pada ...",
      kataKualifikasi: [],
      opsi: { A: "10 Maret 2026, saat dokumen digunakan di Indonesia", B: "5 Januari 2026, saat ditandatangani", C: "1 Februari 2026, saat dokumen tiba di Indonesia", D: "Tidak terutang karena dokumen dibuat di luar negeri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat di luar negeri terutang bea meterai pada saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e), oleh pihak yang menerima manfaat.",
        jejakHitung: [],
        mengapaSalah: { B: "Saat tanda tangan berlaku untuk dokumen yang dibuat di Indonesia", C: "Kedatangan fisik dokumen bukan 'penggunaan'", D: "Dokumen luar negeri menjadi objek begitu digunakan di Indonesia" },
        jebakan: "Tiga tanggal disajikan agar peserta terpancing memilih tanggal paling awal."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020 (penerima manfaat dokumen luar negeri)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-015", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Energi Tbk menerbitkan obligasi berkelanjutan. Sertifikat jumbo obligasi selesai dibuat dan ditandatangani direksi pada 7 September 2026, diserahkan kepada lembaga penyimpanan pada 9 September 2026, lalu obligasi dicatatkan di bursa dan dibeli investor mulai 15 September 2026. Saat terutang dan pihak yang terutang bea meterai atas surat berharga tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "7 September 2026; investor sebagai penerima manfaat", B: "9 September 2026 (diserahkan); lembaga penyimpanan sebagai penerima dokumen", C: "15 September 2026 (dicatatkan); investor sebagai pembeli", D: "7 September 2026 (selesai dibuat); PT Energi Tbk sebagai penerbit" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Surat berharga terutang pada saat selesai dibuat (Pasal 8 ayat (1) huruf b) dan pihak yang terutang adalah penerbitnya (Pasal 9).",
        jejakHitung: [],
        mengapaSalah: { A: "Penerima manfaat adalah pihak terutang untuk dokumen yang dibuat di luar negeri", B: "Saat diserahkan dan penerima dokumen berlaku untuk dokumen sepihak seperti kuitansi, bukan surat berharga", C: "Pencatatan dan perdagangan menghasilkan dokumen transaksi surat berharga yang terpisah" },
        jebakan: "Bedakan surat berharga (terutang oleh penerbit saat selesai dibuat) dari dokumen transaksi surat berharga (umumnya dipungut pemungut)."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020 (surat berharga: penerbit)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-016", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "Staf pajak PT Andalas menyusun memo internal tentang pihak yang terutang bea meterai untuk tim keuangan, yang sering menerima dokumen dari mitra luar negeri dan menjadi pihak dalam sengketa perdata. Pernyataan dalam memo berikut sesuai Pasal 9 UU 10/2020, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Atas dokumen yang dibuat sepihak, bea meterai terutang oleh pihak yang menerima dokumen", B: "Atas dokumen yang diajukan sebagai alat bukti, bea meterai terutang oleh pihak yang mengajukan", C: "Atas dokumen yang dibuat di luar negeri dan digunakan di Indonesia, bea meterai terutang oleh pihak yang membuat dokumen di luar negeri", D: "Ketentuan pihak terutang tidak menghalangi para pihak untuk bersepakat menentukan pihak yang membayar bea meterai, misalnya melalui klausul perjanjian" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Untuk dokumen luar negeri yang digunakan di Indonesia, pihak terutang adalah pihak yang menerima manfaat atas dokumen tersebut (Pasal 9), bukan pembuatnya di luar negeri.",
        jejakHitung: [],
        mengapaSalah: { A: "Sesuai Pasal 9 untuk dokumen sepihak", B: "Sesuai Pasal 9 untuk dokumen alat bukti di pengadilan", D: "Sesuai Pasal 9 ayat (6): para pihak boleh bersepakat menentukan pihak yang membayar bea meterai" },
        jebakan: "Pernyataan bahwa pembuat dokumen di luar negeri yang terutang terdengar logis, tetapi UU menunjuk penerima manfaat di Indonesia."
      },
      dasarHukum: [ { pasal: "Pasal 9 UU 10/2020 (termasuk ayat (6) tentang kesepakatan pihak yang membayar)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-017", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Kantor hukum Wiratama menyusun tabel kepatuhan bea meterai untuk empat klien pada 2026: seorang PPAT, emiten obligasi, balai lelang, dan perusahaan yang rutin membuat surat pernyataan kepada mitra. Dari tabel yang disusun staf magang, pasangan jenis dokumen dan saat terutang bea meterai yang tepat menurut Pasal 8 UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Akta PPAT — saat diserahkan kepada pembeli", B: "Surat berharga — saat ditandatangani direksi penerbit", C: "Kutipan risalah lelang — saat diserahkan kepada pihak untuk siapa dokumen dibuat", D: "Surat pernyataan — saat konsepnya selesai diketik" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen lelang (kutipan, minuta, salinan, grosse risalah lelang) terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c).",
        jejakHitung: [],
        mengapaSalah: { A: "Akta PPAT terutang saat dibubuhi tanda tangan (huruf a)", B: "Surat berharga terutang saat selesai dibuat (huruf b)", D: "Surat pernyataan terutang saat diserahkan, bukan saat konsep selesai" },
        jebakan: "Hafalkan lima kata kerja: ditandatangani, selesai dibuat, diserahkan, diajukan, digunakan."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-018", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Bank Prima dan Tuan Haris menandatangani perjanjian kredit pada 14 Januari 2026 dalam 2 rangkap asli. Klausul perjanjian menyatakan seluruh biaya meterai ditanggung debitur. Rangkap yang dipegang Tuan Haris dibubuhi meterai elektronik yang sah, sedangkan rangkap yang disimpan Bank Prima tidak bermeterai. Pada Oktober 2026 Bank Prima hendak memakai rangkapnya sebagai alat bukti gugatan wanprestasi. Jumlah yang harus dilunasi melalui pemeteraian kemudian atas rangkap Bank Prima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000 (pokok Rp10.000 dan sanksi 100%); klausul hanya mengatur siapa yang menanggung biaya", B: "Rp10.000 tanpa sanksi karena dokumen baru akan diajukan sebagai alat bukti", C: "Nihil, karena meterai pada rangkap Tuan Haris sudah melunasi bea meterai perjanjian", D: "Rp40.000 karena kedua rangkap harus dimeteraikan kemudian beserta sanksinya" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Surat perjanjian terutang beserta rangkapnya, sehingga tiap rangkap asli terutang Rp10.000 sejak ditandatangani 14 Januari 2026. Rangkap bank tidak dilunasi sehingga pemeteraian kemudian meliputi pokok dan sanksi 100%; rangkap debitur sudah lunas.",
        jejakHitung: [ ["Rangkap bank terutang sejak", "14 Januari 2026"], ["Pokok", "Rp10.000"], ["Sanksi 100%", "Rp10.000"], ["Rangkap debitur (sudah bermeterai sah)", "Rp0"], ["Total", "Rp20.000"] ],
        mengapaSalah: { B: "Tanpa sanksi hanya untuk dokumen yang semula tidak terutang; rangkap ini sudah terutang sejak ditandatangani", C: "Setiap rangkap asli adalah dokumen tersendiri yang terutang", D: "Rangkap debitur sudah dilunasi dengan meterai elektronik yang sah" },
        jebakan: "Klausul 'biaya meterai ditanggung debitur' hanya menentukan pihak yang membayar (Pasal 9 ayat (6)); ia tidak mengurangi jumlah maupun sanksi."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-021", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "KPKNL melaksanakan lelang eksekusi hak tanggungan atas sebuah ruko pada 10 Agustus 2026 atas permohonan Bank Arta; pemenang lelang adalah Tuan Rudi. Kutipan risalah lelang diserahkan kepada Tuan Rudi pada 24 Agustus 2026, dan salinan risalah lelang diserahkan kepada Bank Arta pada 26 Agustus 2026. Saat terutang dan jumlah bea meterai atas kutipan dan salinan risalah lelang tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "24 Agustus 2026 untuk keduanya; total Rp20.000", B: "10 Agustus 2026, saat lelang dilaksanakan; total Rp10.000 karena satu lelang", C: "Masing-masing saat diserahkan (24 Agustus dan 26 Agustus 2026); total Rp20.000", D: "Tidak terutang karena lelang eksekusi menghasilkan penerimaan uang negara" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen lelang (kutipan, minuta, salinan, dan grosse risalah lelang) adalah objek dan terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c); tiap dokumen terutang Rp10.000.",
        jejakHitung: [ ["Kutipan risalah lelang (diserahkan 24 Agustus 2026)", "Rp10.000"], ["Salinan risalah lelang (diserahkan 26 Agustus 2026)", "Rp10.000"], ["Total", "Rp20.000"] ],
        mengapaSalah: { A: "Saat terutang mengikuti penyerahan masing-masing dokumen", B: "Pelaksanaan lelang bukan saat terutang, dan setiap dokumen lelang terutang sendiri", D: "Pengecualian Pasal 7 untuk tanda bukti penerimaan uang negara tidak mencakup dokumen lelang" },
        jebakan: "Dokumen lelang disebut tegas sebagai objek di Pasal 3 ayat (2) huruf f; jangan tertukar dengan bukti penerimaan uang negara."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf f UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-022", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Nusa Agri (Medan) dan Green Palm Pte Ltd menandatangani perjanjian pembelian di Singapura pada 12 Januari 2026 dalam 2 rangkap; rangkap PT Nusa Agri dibawa ke Medan. Pada 3 Maret 2026 rangkap itu dilampirkan PT Nusa Agri dalam pengajuan kredit modal kerja ke bank di Medan tanpa dibubuhi meterai. Pemeriksaan Oktober 2026 menemukan hal tersebut. Saat terutang, pihak terutang, dan jumlah yang harus dibayar melalui pemeteraian kemudian atas rangkap PT Nusa Agri adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terutang karena dokumen ditandatangani di luar negeri", B: "3 Maret 2026; PT Nusa Agri; Rp10.000 tanpa sanksi karena dokumen dibuat di luar negeri", C: "12 Januari 2026; Green Palm Pte Ltd sebagai pembuat; Rp20.000", D: "3 Maret 2026; PT Nusa Agri sebagai penerima manfaat; Rp20.000 (pokok dan sanksi 100%)" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Dokumen luar negeri terutang saat digunakan di Indonesia (3 Maret 2026) oleh penerima manfaat. Karena saat itu bea meterai tidak dilunasi, pemeteraian kemudian sesudahnya meliputi pokok dan sanksi 100%; bebas sanksi hanya bila bea meterai dilunasi paling lambat saat dokumen digunakan.",
        jejakHitung: [ ["Saat terutang", "3 Maret 2026 (digunakan di Indonesia)"], ["Pokok", "Rp10.000"], ["Sanksi 100% (tidak dilunasi saat digunakan)", "Rp10.000"], ["Total", "Rp20.000"] ],
        mengapaSalah: { A: "Dokumen luar negeri menjadi objek begitu digunakan di Indonesia", B: "Bebas sanksi hanya jika bea meterai dilunasi paling lambat saat dokumen digunakan; di sini dokumen sudah digunakan tanpa dilunasi", C: "Saat terutang bukan saat tanda tangan di luar negeri, dan yang terutang penerima manfaat" },
        jebakan: "Dua fakta harus digabung: saat terutang dokumen luar negeri dan akibat terlambat melunasi setelah dokumen digunakan."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-023", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Bank Nusantara dan PT Karya Beton menandatangani perjanjian kredit investasi senilai Rp180.000.000.000 setebal 120 halaman pada 2 Oktober 2026 dalam 4 rangkap asli yang masing-masing ditandatangani para pihak. Bagian legal kemudian membuat 2 fotokopi tidak bertanda tangan untuk arsip. Total bea meterai yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp60.000", C: "Rp10.000", D: "Rp24.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Tarif bea meterai tetap Rp10.000 per dokumen tanpa memandang nilai transaksi dan jumlah halaman; tiap rangkap asli yang ditandatangani adalah dokumen terutang, sedangkan fotokopi arsip tidak.",
        jejakHitung: [ ["Tarif tetap (Pasal 5)", "Rp10.000 per dokumen"], ["Nilai Rp180 miliar dan 120 halaman", "tidak memengaruhi"], ["Rangkap asli bertanda tangan", "4"], ["Fotokopi arsip", "tidak terutang"], ["Total 4 × Rp10.000", "Rp40.000"] ],
        mengapaSalah: { B: "Menghitung 2 fotokopi tidak bertanda tangan sebagai dokumen terutang", C: "Mengabaikan frasa 'beserta rangkapnya' sehingga hanya menghitung satu perjanjian", D: "Memakai tarif lama Rp6.000 × 4" },
        jebakan: "Nilai kontrak yang sangat besar memancing peserta mencari tarif proporsional; bea meterai tidak mengenal tarif persentase."
      },
      dasarHukum: [ { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-024", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Dalam pemeriksaan pada Oktober 2026 ditemukan bahwa surat perjanjian kerja sama distribusi PT Sentosa Abadi yang ditandatangani 10 Februari 2025 hanya dibubuhi dua meterai tempel lama Rp6.000 (total Rp12.000) sisa persediaan tahun 2021. PT Sentosa Abadi berpendapat nilai meterai yang dibubuhkan sudah melebihi tarif Rp10.000 sehingga tidak ada kekurangan. Jumlah yang harus dilunasi melalui pemeteraian kemudian atas dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000", B: "Rp0", C: "Rp20.000", D: "Rp30.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", D: "angka-usang" },
      pembahasan: {
        inti: "Meterai tempel Rp3.000 dan Rp6.000 hanya dapat dipakai selama masa peralihan sampai 31 Desember 2021 dengan nilai gabungan paling sedikit Rp9.000. Pada 10 Februari 2025 meterai itu tidak sah sehingga bea meterai dianggap tidak dibayar dan dikenai sanksi 100% saat dimeteraikan kemudian.",
        jejakHitung: [ ["Batas pemakaian meterai lama", "31 Desember 2021"], ["Status pelunasan 10 Februari 2025", "tidak dibayar"], ["Pokok", "Rp10.000"], ["Sanksi 100%", "Rp10.000"], ["Total", "Rp20.000"] ],
        mengapaSalah: { A: "Dokumen sudah lewat saat terutang tanpa pelunasan sah, sehingga sanksi 100% tetap dikenakan", B: "Meterai lama tidak berlaku lagi sejak 1 Januari 2022 berapa pun jumlah nilainya", D: "Sanksi 200% adalah ketentuan UU 13/1985 yang sudah dicabut" },
        jebakan: "Menjumlahkan nominal meterai lama (Rp12.000 ≥ Rp10.000) adalah logika masa peralihan 2021 yang tidak berlaku lagi."
      },
      dasarHukum: [ { pasal: "Ketentuan Peralihan UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-025", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Awan Data dan CV Kode Kreatif menandatangani kontrak pengembangan aplikasi berbentuk PDF dengan tanda tangan elektronik tersertifikasi pada 1 September 2026. Untuk menghemat biaya, staf PT Awan Data menempelkan gambar meterai tempel Rp10.000 hasil pindai, lengkap dengan nomor seri asli dari meterai yang pernah dibeli, ke dalam PDF sebelum ditandatangani. Perlakuan bea meterai yang tepat atas kontrak tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Gambar pindai tidak melunasi bea meterai; kontrak terutang sejak ditandatangani dan harus dimeteraikan kemudian Rp10.000 ditambah sanksi 100%", B: "Sah, karena nomor seri meterai tempel yang dipindai asli dan nilainya Rp10.000", C: "Tidak terutang karena kontrak berbentuk dokumen elektronik", D: "Cukup dibubuhi meterai elektronik sekarang tanpa sanksi selama belum ada pemeriksaan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen elektronik dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu dari Peruri. Gambar meterai tempel hasil pindai bukan meterai yang sah, sehingga bea meterai yang terutang saat tanda tangan 1 September 2026 dianggap tidak dibayar.",
        jejakHitung: [ ["Saat terutang", "1 September 2026 (tanda tangan elektronik)"], ["Pelunasan dengan gambar pindai", "tidak sah"], ["Pokok + sanksi 100%", "Rp20.000"] ],
        mengapaSalah: { B: "Meterai tempel hanya sah bila fisiknya direkatkan pada dokumen kertas; salinan gambar bukan meterai", C: "Dokumen elektronik termasuk pengertian dokumen dalam Pasal 1 UU 10/2020", D: "Sanksi melekat karena bea meterai tidak dilunasi pada saat terutang, bukan karena ditemukan pemeriksa" },
        jebakan: "Nomor seri asli memberi kesan sah; yang menentukan adalah sarana pelunasan yang benar untuk jenis dokumennya."
      },
      dasarHukum: [ { pasal: "Pasal 1 dan Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PP 86/2021; PMK 78/2024 (meterai elektronik)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-026", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Tuan Arif akan menandatangani surat perjanjian jual beli kendaraan bekas berbentuk kertas pada 20 Oktober 2026 dan telah membeli satu meterai tempel Rp10.000 desain 2021 di kantor pos. Cara membubuhkan meterai tempel yang membuat bea meterai atas perjanjian itu lunas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Meterai direkatkan setelah dokumen selesai ditandatangani, di bawah tanda tangan tanpa tersentuh tanda tangan", B: "Meterai direkatkan pada halaman lampiran yang tidak ditandatangani, cukup diparaf di sampingnya", C: "Meterai difotokopi berwarna dan salinannya ditempel pada rangkap kedua agar kedua rangkap bermeterai", D: "Meterai direkatkan utuh dan tidak rusak di tempat tanda tangan, lalu tanda tangan dibubuhkan sebagian di atas meterai dan sebagian di atas kertas" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meterai tempel direkatkan seluruhnya dengan utuh pada dokumen di tempat tanda tangan, dan tanda tangan dibubuhkan sebagian di atas kertas dan sebagian di atas meterai tempel.",
        jejakHitung: [],
        mengapaSalah: { A: "Tanda tangan yang tidak mengenai meterai membuat pembubuhan tidak memenuhi tata cara", B: "Meterai harus dibubuhkan di tempat tanda tangan dokumen yang terutang", C: "Fotokopi meterai bukan meterai; tiap rangkap memerlukan meterai asli tersendiri" },
        jebakan: "Tata cara pembubuhan menentukan sah tidaknya pelunasan, bukan sekadar menempel meterai di mana saja."
      },
      dasarHukum: [ { pasal: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (tata cara pembubuhan meterai tempel)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-027", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Konsorsium PT Andesit, PT Basalt, dan PT Kuarsa menandatangani perjanjian kerja sama operasi pada 8 Juni 2026 dalam 3 rangkap asli, satu untuk tiap anggota. Lampiran teknis 60 halaman dijilid sebagai bagian tak terpisahkan dari perjanjian dan tidak ditandatangani terpisah. Pada 21 September 2026 ketiganya menandatangani adendum perubahan porsi modal dalam 3 rangkap asli. Seluruh rangkap ditandatangani direksi ketiga perusahaan. Total bea meterai yang terutang atas perjanjian dan adendum adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp30.000", B: "Rp180.000", C: "Rp60.000", D: "Rp90.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bea meterai dikenakan per dokumen, bukan per penanda tangan atau per halaman. Perjanjian (3 rangkap) dan adendum (3 rangkap) adalah dokumen yang ditandatangani pada saat berbeda sehingga masing-masing terutang; lampiran yang menyatu tidak dihitung terpisah.",
        jejakHitung: [ ["Perjanjian KSO: 3 rangkap asli", "3 dokumen"], ["Lampiran teknis (satu kesatuan)", "0 dokumen"], ["Adendum: 3 rangkap asli", "3 dokumen"], ["Total 6 × Rp10.000", "Rp60.000"] ],
        mengapaSalah: { A: "Menganggap adendum bagian dari perjanjian awal, padahal ditandatangani terpisah sebagai perjanjian baru", B: "Mengalikan dengan 3 penanda tangan (18 × Rp10.000); jumlah pihak tidak menambah dokumen", D: "Menghitung lampiran sebagai dokumen tersendiri pada tiap rangkap (9 dokumen)" },
        jebakan: "Tiga pengali (pihak, rangkap, halaman) disajikan sekaligus; hanya rangkap asli per dokumen yang menjadi pengali."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-028", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 12 UU 10/2020 (parafrase): Bea Meterai atas dokumen dibayar dengan menggunakan meterai atau surat setoran pajak. Meterai berupa meterai tempel, meterai elektronik, atau meterai dalam bentuk lain yang ditetapkan oleh Menteri.",
      stem: "CV Mutiara menerbitkan sekitar 400 kuitansi bernilai lebih dari Rp5.000.000 setiap bulan, sebagian kertas dan sebagian elektronik, dan belum ditetapkan sebagai pemungut. Gudang CV Mutiara masih menyimpan meterai tempel Rp6.000 dan Rp3.000 sisa tahun 2021. Berdasarkan kutipan tersebut, sarana berikut dapat dipakai untuk melunasi bea meterai pada Oktober 2026, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Meterai elektronik yang dibeli melalui Peruri atau distributor resmi untuk kuitansi elektronik", B: "Meterai tempel desain 2021 senilai Rp10.000 untuk kuitansi kertas", C: "Gabungan meterai tempel Rp6.000 dan Rp3.000 senilai Rp9.000 untuk kuitansi kertas", D: "Surat setoran pajak dengan kode billing untuk pelunasan dalam rangka pemeteraian kemudian" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Gabungan meterai lama dengan nilai paling sedikit Rp9.000 hanya diperbolehkan selama masa peralihan sampai 31 Desember 2021; pada 2026 meterai Rp3.000 dan Rp6.000 tidak sah lagi.",
        jejakHitung: [],
        mengapaSalah: { A: "Meterai elektronik adalah sarana sah untuk dokumen elektronik", B: "Meterai tempel Rp10.000 desain 2021 adalah meterai yang berlaku", D: "SSP adalah sarana pembayaran yang disebut Pasal 12, antara lain untuk pemeteraian kemudian" },
        jebakan: "Angka Rp9.000 sengaja dipakai karena pernah sah pada 2021; kata 'kecuali' mencari sarana yang tidak berlaku."
      },
      dasarHukum: [ { pasal: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Ketentuan Peralihan UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-029", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Pada 3 Agustus 2026 dua pendiri menandatangani akta pendirian PT Lintas Raya di hadapan notaris. Notaris menyimpan minuta akta dan menerbitkan 3 salinan akta yang ditandatanganinya: satu untuk perseroan dan masing-masing satu untuk kedua pendiri. Bagian administrasi perseroan juga membuat 2 fotokopi salinan tanpa tanda tangan untuk arsip. Total bea meterai atas akta notaris tersebut beserta salinannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp30.000", C: "Rp10.000", D: "Rp24.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Objek bea meterai mencakup akta notaris beserta grosse, salinan, dan kutipannya; minuta dan tiap salinan yang ditandatangani notaris terutang Rp10.000, sedangkan fotokopi arsip tidak.",
        jejakHitung: [ ["Minuta akta", "1 dokumen"], ["Salinan akta bertanda tangan notaris", "3 dokumen"], ["Fotokopi arsip", "tidak terutang"], ["Total 4 × Rp10.000", "Rp40.000"] ],
        mengapaSalah: { B: "Hanya menghitung salinan dan melupakan minuta akta", C: "Menganggap satu akta beserta salinannya cukup satu meterai", D: "Memakai tarif lama Rp6.000 × 4" },
        jebakan: "Frasa 'beserta grosse, salinan, dan kutipannya' berarti setiap salinan juga dokumen terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-030", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Kerja Kilat, perusahaan rintisan penyalur tenaga lepas, setiap bulan membuat sekitar 2.000 kontrak kerja sama elektronik dengan klien korporat yang ditandatangani secara elektronik. Perusahaan belum pernah ditetapkan sebagai pemungut bea meterai. Direktur keuangan ingin memastikan setiap kontrak dilunasi bea meterainya secara sah sejak awal. Langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menunggu penetapan sebagai pemungut oleh KPP, karena tanpa penetapan perusahaan tidak boleh memakai meterai elektronik", B: "Mencetak sendiri gambar meterai dengan desain resmi dan menempelkannya pada PDF kontrak", C: "Menyetor Rp10.000 sekali sebulan dengan kode billing untuk seluruh kontrak bulan itu", D: "Memperoleh meterai elektronik melalui Peruri atau distributor resmi, lalu membubuhkannya pada setiap kontrak melalui sistem pembubuhan yang menghasilkan kode unik" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Dokumen elektronik dilunasi dengan meterai elektronik berkode unik yang diperoleh dari Peruri atau distributor resmi, Rp10.000 untuk setiap kontrak; status pemungut tidak menjadi syarat untuk memakai meterai elektronik.",
        jejakHitung: [ ["Kontrak per bulan", "±2.000 dokumen"], ["Bea meterai per kontrak", "Rp10.000"], ["Kebutuhan meterai elektronik", "±Rp20.000.000 per bulan"] ],
        mengapaSalah: { A: "Pemungut adalah kewajiban tambahan bagi pihak yang ditetapkan, bukan izin memakai meterai elektronik", B: "Gambar meterai buatan sendiri bukan meterai dan dapat masuk ranah pidana pemalsuan", C: "Tarif berlaku per dokumen, bukan per bulan" },
        jebakan: "Peserta sering mencampur 'pemungut' dengan 'pengguna' meterai elektronik."
      },
      dasarHukum: [ { pasal: "Pasal 5 dan Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PP 86/2021; PMK 78/2024", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-032", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A5-02",
      stem: "Data untuk tiga soal berurutan (PT Bayar Cepat Indonesia). PT Bayar Cepat Indonesia, penyelenggara platform pembayaran, telah ditetapkan sebagai pemungut bea meterai dengan keputusan Kepala KPP. Pada Masa September 2026 platform memfasilitasi penerbitan dokumen tanda terima pembayaran digital: 12.500 dokumen bernilai lebih dari Rp5.000.000; 3.200 dokumen bernilai tepat Rp5.000.000; dan 41.000 dokumen bernilai di bawah Rp5.000.000. Bea meterai yang wajib dipungut untuk Masa September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp157.000.000", B: "Rp125.000.000", C: "Rp567.000.000", D: "Rp75.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Pemungut hanya memungut atas dokumen yang merupakan objek, yaitu tanda terima bernilai lebih dari Rp5.000.000; tarif Rp10.000 per dokumen.",
        jejakHitung: [ ["Dokumen lebih dari Rp5 juta", "12.500"], ["Dokumen tepat Rp5 juta dan di bawahnya", "tidak terutang"], ["12.500 × Rp10.000", "Rp125.000.000"] ],
        mengapaSalah: { A: "Ikut menghitung 3.200 dokumen tepat Rp5.000.000 (15.700 × Rp10.000)", C: "Memungut atas seluruh 56.700 dokumen tanpa ambang", D: "Memakai tarif lama Rp6.000 × 12.500" },
        jebakan: "Ambang 'lebih dari Rp5.000.000' tetap berlaku pada dokumen yang dipungut pemungut."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-033",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-02",
      stem: "Lanjutan data PT Bayar Cepat Indonesia (pemungut bea meterai yang ditetapkan Kepala KPP). Bea meterai yang dipungut atas dokumen tanda terima pembayaran digital Masa September 2026 berjumlah Rp125.000.000. Tanggal 15 Oktober 2026 adalah hari Kamis (hari kerja). Batas paling lambat penyetoran bea meterai tersebut dan penyampaian SPT Masa Bea Meterai melalui Coretax adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Setor paling lambat 15 Oktober 2026, lapor paling lambat 31 Oktober 2026", B: "Setor paling lambat 10 Oktober 2026, lapor paling lambat 20 Oktober 2026", C: "Setor paling lambat 15 Oktober 2026, lapor paling lambat 20 Oktober 2026", D: "Setor dan lapor paling lambat 15 Oktober 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 78/2024 menyamakan tenggat penyetoran dan pelaporan SPT Masa Bea Meterai pemungut, yaitu paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Akhir bulan berikutnya adalah tenggat SPT Masa PPN",
          B: "Setor tanggal 10 dan lapor tanggal 20 adalah ketentuan PMK 151/2021 yang sudah dicabut",
          C: "Paling lama 20 hari setelah Masa Pajak berakhir (untuk Masa September 2026: 20 Oktober 2026) adalah batas SPT Masa PPh (Pasal 171 ayat (1) PMK 81/2024); SPT Masa Bea Meterai pemungut paling lama 15 hari setelah Masa Pajak berakhir (Pasal 171 ayat (18))"
        },
        jebakan: "Tiga tenggat SPT Masa (bea meterai, PPh, PPN) berbeda; jangan menyamaratakan."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1) dan Pasal 64 ayat (1) PMK 78/2024 (setor dan lapor pemungut)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 94 ayat (2) huruf k dan Pasal 100 PMK 81/2024 (setor); Pasal 171 ayat (18) dan Pasal 173 PMK 81/2024 (lapor)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-034",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A5-02",
      stem: "Lanjutan data PT Bayar Cepat Indonesia (pemungut bea meterai). Karena gangguan sistem internal, bea meterai Masa September 2026 sebesar Rp125.000.000 baru disetor pada 2 Desember 2026, dan SPT Masa Bea Meterai disampaikan pada hari yang sama. Jatuh tempo setor dan lapor adalah 15 Oktober 2026. Anggap tarif bunga per bulan Pasal 9 ayat (2a) UU KUP yang berlaku 1,01%. Total sanksi administratif yang dikenakan kepada PT Bayar Cepat Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp125.000.000", B: "Rp3.887.500", C: "Rp2.625.000", D: "Rp3.025.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bea meterai disetor penuh walau terlambat, sehingga menurut Pasal 11 UU 10/2020 pemungut ditagih dengan STP sesuai UU KUP: bunga Pasal 9 ayat (2a) atas keterlambatan setor (bagian bulan dihitung penuh) dan denda Pasal 7 ayat (1) Rp100.000 atas keterlambatan SPT Masa.",
        jejakHitung: [
          ["15 Oktober → 15 November 2026", "1 bulan"],
          ["15 November → 2 Desember 2026 (bagian bulan)", "1 bulan"],
          ["Jumlah bulan", "2"],
          ["Bunga = 125.000.000 × 1,01% × 2", "Rp2.525.000"],
          ["Denda SPT Masa lainnya", "Rp100.000"],
          ["Total sanksi", "Rp2.625.000"]
        ],
        mengapaSalah: {
          A: "Sanksi 100% (lewat SKP) bagi pemungut hanya untuk bea meterai yang tidak atau kurang dipungut/disetor; di sini seluruhnya disetor, hanya terlambat",
          B: "Menghitung 3 bulan (Oktober, November, Desember) sehingga bunga Rp3.787.500 + Rp100.000",
          D: "Memakai denda SPT Masa PPN Rp500.000"
        },
        jebakan: "Bedakan 'terlambat disetor' (STP: bunga dan denda UU KUP) dari 'tidak disetor' (SKP: kekurangan + sanksi 100%)."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020 (STP sesuai UU KUP atas setor/lapor terlambat)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK 47/MK/EF.2/2026 (tarif bunga Oktober 2026)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-035",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Bank Sejahtera, yang telah ditetapkan sebagai pemungut bea meterai, pada Masa Juni 2026 menyerahkan kepada nasabah giro 3 buku cek dan 2 buku bilyet giro, masing-masing berisi 25 lembar. Bea meterai yang dipungut bank atas cek dan bilyet giro tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp1.250.000", C: "Rp750.000", D: "Rp375.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Cek dan bilyet giro adalah surat berharga; setiap lembar merupakan satu dokumen yang bea meterainya Rp10.000 dan dipungut oleh bank selaku pemungut melalui Meterai Percetakan. Pemungutan itu dilakukan pada saat bank menerima lembar cek dan bilyet giro dari Wajib Pajak pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a PMK 78/2024), bukan saat buku diserahkan kepada nasabah; jumlahnya tetap 125 × Rp10.000, sedangkan Masa Pajak pelaporannya mengikuti bulan penerimaan dari percetakan.",
        jejakHitung: [
          ["Lembar cek 3 × 25", "75"],
          ["Lembar bilyet giro 2 × 25", "50"],
          ["Total lembar", "125"],
          ["125 × Rp10.000", "Rp1.250.000"]
        ],
        mengapaSalah: {
          A: "Menghitung per buku (5 × Rp10.000), padahal dokumen adalah tiap lembar",
          C: "Hanya memungut atas cek dan melupakan bilyet giro",
          D: "Memakai tarif lama Rp3.000 per lembar cek/bilyet giro dari UU 13/1985"
        },
        jebakan: "Satuan dokumen adalah lembar cek/bilyet giro, bukan buku. Saat pemungutan cek dan bilyet giro adalah saat bank menerimanya dari percetakan pemegang izin Meterai Percetakan, bukan saat diserahkan kepada nasabah."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf a, Pasal 61 huruf a, dan Pasal 62 ayat (1) huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-036", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Toko Daring Sentosa, pengelola marketplace, setiap bulan menerbitkan lebih dari 5.000 dokumen tanda terima pembayaran elektronik bernilai di atas Rp5.000.000 kepada pembeli. Hingga Oktober 2026 perusahaan belum menerima keputusan penetapan sebagai pemungut bea meterai. Pernyataan yang tepat mengenai kedudukan PT Toko Daring Sentosa adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Belum berkedudukan sebagai pemungut sebelum ditetapkan dengan keputusan Kepala KPP; bea meterai atas dokumen tersebut tetap harus dilunasi dengan meterai oleh pihak yang terutang", B: "Otomatis menjadi pemungut sejak jumlah dokumennya melampaui batas tertentu, tanpa memerlukan keputusan penetapan", C: "Harus lebih dulu menyetor deposit agar dapat memperoleh meterai elektronik sebagai pemungut", D: "Cukup mencantumkan bea meterai dalam SPT Masa PPN karena dokumennya terkait penyerahan barang kena pajak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kedudukan pemungut lahir dari keputusan penetapan Kepala KPP (PMK 78/2024). Sebelum ada penetapan, kewajiban tetap pada pihak yang terutang untuk melunasi bea meterai atas tiap dokumen objek.",
        jejakHitung: [],
        mengapaSalah: { B: "Volume dokumen hanya menjadi dasar penetapan, bukan penetapan itu sendiri", C: "Mekanisme deposit e-meterai bagi pemungut dihapus oleh PMK 78/2024", D: "Bea meterai dilaporkan dalam SPT Masa Bea Meterai oleh pemungut, bukan SPT Masa PPN" },
        jebakan: "Jangan menyamakan 'memenuhi kriteria' dengan 'sudah ditetapkan'."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (penetapan pemungut oleh Kepala KPP)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-037",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      stem: "PT Kliring Mandiri, pemungut bea meterai, memungut bea meterai Masa Oktober 2026 sebesar Rp48.300.000. Tanggal 15 November 2026 jatuh pada hari Minggu, sedangkan 16 November 2026 adalah hari kerja. Tim pajak menanyakan batas akhir penyetoran dan penyampaian SPT Masa Bea Meterai yang tidak menimbulkan sanksi. Jawaban yang tepat adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "Setor 16 November 2026, lapor paling lambat 20 November 2026", B: "Jumat, 13 November 2026, karena tenggat yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", C: "Setor 10 November 2026 dan lapor 20 November 2026", D: "Senin, 16 November 2026, untuk penyetoran maupun pelaporan" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Tenggat setor dan lapor pemungut adalah tanggal 15 bulan berikutnya; bila jatuh pada hari libur (termasuk Sabtu, Minggu, libur nasional), penyetoran dan pelaporan dapat dilakukan pada hari kerja berikutnya.",
        jejakHitung: [
          ["Tenggat normal Masa Oktober 2026", "15 November 2026 (Minggu)"],
          ["Hari kerja berikutnya", "Senin, 16 November 2026"]
        ],
        mengapaSalah: {
          A: "Pelaporan SPT Masa Bea Meterai bertenggat sama dengan penyetoran",
          B: "Tenggat yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan sebelumnya",
          C: "Tanggal 10/20 adalah ketentuan PMK 151/2021 yang sudah dicabut"
        },
        jebakan: "Dua lapis aturan: tenggat tanggal 15 dan pergeseran hari libur."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 PMK 78/2024 (tenggat pemungut tanggal 15; hari libur)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 94 ayat (2) huruf k dan Pasal 100 PMK 81/2024 (setor); Pasal 171 ayat (18) dan Pasal 173 PMK 81/2024 (lapor)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-038",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 11 UU 10/2020 (parafrase): Pemungut Bea Meterai wajib memungut Bea Meterai dari pihak yang terutang, menyetorkannya ke kas negara, dan melaporkannya. Pemungut yang tidak atau kurang memungut dan/atau tidak atau kurang menyetorkan diterbitkan surat ketetapan pajak sebesar Bea Meterai yang tidak atau kurang dipungut dan/atau disetor ditambah sanksi administratif 100%; pemungut yang terlambat menyetorkan dan/atau tidak atau terlambat melaporkan diterbitkan surat tagihan pajak sesuai ketentuan UU KUP.",
      stem: "PT Sekuritas Prima telah ditetapkan sebagai pemungut bea meterai atas dokumen transaksi surat berharga (konfirmasi transaksi) nasabah. Pemeriksaan pada Oktober 2026 atas Masa Juli 2026 menemukan: (1) bea meterai atas 300 konfirmasi transaksi telah dipungut dari nasabah tetapi sama sekali belum disetor; (2) bea meterai atas 200 konfirmasi transaksi lainnya telah dipungut dan disetor penuh, tetapi terlambat 20 hari dari jatuh tempo. SPT Masa Bea Meterai disampaikan tepat waktu. Berdasarkan kutipan tersebut, ketetapan dan sanksi yang tepat bagi PT Sekuritas Prima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP atas seluruh 500 dokumen berupa bunga UU KUP; tidak ada sanksi 100% karena pemungut bukan pihak yang terutang", B: "SKP atas 500 dokumen sebesar Rp5.000.000 ditambah sanksi 100% Rp5.000.000", C: "SKP sebesar Rp3.000.000 ditambah sanksi 100% Rp3.000.000 atas 300 dokumen yang belum disetor, serta STP berupa bunga UU KUP atas setoran 200 dokumen yang terlambat", D: "Tidak ada sanksi bagi pemungut; para nasabah wajib memeteraikan kemudian 300 dokumen dengan Rp20.000 per dokumen" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 11 membedakan dua pelanggaran pemungut. Bea meterai yang sudah dipungut tetapi tidak disetor ditetapkan dengan SKP sebesar pokok ditambah sanksi 100%, sedangkan setoran yang lengkap tetapi terlambat ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP.",
        jejakHitung: [
          ["(1) Pokok tidak disetor: 300 × Rp10.000", "Rp3.000.000"],
          ["(1) Sanksi 100% dalam SKP", "Rp3.000.000"],
          ["(2) 200 dokumen disetor terlambat 20 hari", "STP bunga 1 bulan (bagian bulan dihitung penuh)"]
        ],
        mengapaSalah: {
          A: "Sanksi 100% berlaku juga bagi pemungut atas bea meterai yang tidak atau kurang disetor (Pasal 11)",
          B: "Bea meterai 200 dokumen sudah disetor penuh; keterlambatannya hanya ditagih dengan STP bunga, bukan SKP + 100%",
          D: "Bea meterai sudah dipungut dari nasabah; kewajiban menyetor ada pada pemungut, bukan pemeteraian kemudian oleh nasabah"
        },
        jebakan: "Bedakan 'tidak disetor' (SKP + sanksi 100%) dari 'terlambat disetor' (STP bunga UU KUP)."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 14 ayat (1) UU KUP (dasar penerbitan STP)", berlakuSejak: null }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-039",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Pos Bayar, pemungut bea meterai, menyetor bea meterai Masa Juni 2026 sebesar Rp32.000.000 tepat pada 15 Juli 2026, tetapi SPT Masa Bea Meterai Masa Juni 2026 baru disampaikan pada 3 Agustus 2026. Sanksi administratif yang dikenakan atas keterlambatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp323.200", B: "Rp100.000", C: "Rp500.000", D: "Rp1.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Penyetoran tepat waktu sehingga tidak ada bunga; yang terlambat hanya penyampaian SPT Masa, dikenai denda Pasal 7 ayat (1) UU KUP untuk SPT Masa lainnya Rp100.000.",
        jejakHitung: [
          ["Setoran 15 Juli 2026", "tepat waktu → tanpa bunga"],
          ["SPT Masa disampaikan 3 Agustus 2026", "terlambat"],
          ["Denda SPT Masa lainnya", "Rp100.000"]
        ],
        mengapaSalah: {
          A: "Memperlakukan keterlambatan lapor seperti keterlambatan setor: bunga 32.000.000 × 1,01% × 1 bulan (15 Juli–3 Agustus, bagian bulan dihitung penuh); bunga hanya untuk setoran yang terlambat",
          C: "Rp500.000 adalah denda SPT Masa PPN",
          D: "Rp1.000.000 adalah denda SPT Tahunan PPh Badan"
        },
        jebakan: "Pisahkan keterlambatan setor (bunga) dan keterlambatan lapor (denda)."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 11 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-040", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A5-03",
      kutipan: "Pasal 17, 18, dan 23 UU 10/2020 (parafrase): pemeteraian kemudian dilakukan atas dokumen yang bea meterainya tidak atau kurang dibayar dan atas dokumen yang digunakan sebagai alat bukti di pengadilan; atas dokumen yang bea meterainya tidak atau kurang dibayar, yang dibayar adalah bea meterai yang terutang ditambah sanksi administratif 100%; Bea Meterai yang terutang kedaluwarsa setelah 5 tahun sejak saat terutang.",
      stem: "Data untuk tiga soal berurutan (CV Sumber Rejeki). Pemeriksaan pada 14 Oktober 2026 atas arsip CV Sumber Rejeki menemukan dokumen tanpa meterai: (1) enam kuitansi pembelian bernilai Rp6.000.000–Rp25.000.000 yang dibuat pemasok dan diserahkan kepada CV pada 2023–2025; (2) dua surat perjanjian sewa truk yang ditandatangani pada 2025, rangkap yang dipegang CV; (3) empat kuitansi pembelian masing-masing Rp4.500.000 yang diterima CV pada 2025; (4) satu kuitansi Rp9.000.000 yang diterima CV pada 10 Mei 2021; (5) satu kuitansi Rp7.500.000 yang diterima CV pada 25 November 2021. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Berdasarkan kutipan tersebut, jumlah bea meterai dan sanksi yang masih harus dilunasi CV Sumber Rejeki melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp180.000", B: "Rp200.000", C: "Rp160.000", D: "Rp270.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Yang masih dapat ditagih adalah dokumen objek yang belum lewat 5 tahun sejak saat terutang: 6 kuitansi, 2 rangkap perjanjian, dan kuitansi 25 November 2021 (daluwarsa baru 25 November 2026). Masing-masing Rp10.000 + sanksi 100%; bila kekurangan ini ditetapkan pemeriksa, jumlah yang sama dituangkan dalam SKP (Pasal 19).",
        jejakHitung: [ ["Kuitansi (1) Rp6–25 juta", "6 dokumen"], ["Rangkap perjanjian (2)", "2 dokumen"], ["Kuitansi (3) Rp4.500.000", "bukan objek"], ["Kuitansi (4) 10 Mei 2021", "daluwarsa 10 Mei 2026"], ["Kuitansi (5) 25 November 2021", "belum daluwarsa → 1 dokumen"], ["Dokumen ditagih", "9"], ["9 × (Rp10.000 + Rp10.000)", "Rp180.000"] ],
        mengapaSalah: { B: "Lupa daluwarsa kuitansi 10 Mei 2021 (10 × Rp20.000)", C: "Menganggap kedua kuitansi tahun 2021 sudah daluwarsa hanya karena 2026 − 2021 = 5 tahun, tanpa melihat tanggal saat terutangnya (8 × Rp20.000)", D: "Memakai sanksi 200% dari UU 13/1985 (9 × Rp30.000)" },
        jebakan: "Daluwarsa dihitung per dokumen dari tanggal saat terutang, bukan per tahun pajak."
      },
      dasarHukum: [ { pasal: "Pasal 17, Pasal 18, Pasal 19, dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-041", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A5-03",
      stem: "Lanjutan data CV Sumber Rejeki. Pemasok yang membuat dan menandatangani enam kuitansi (Rp6.000.000–Rp25.000.000) yang diserahkan kepada CV berpendapat bahwa CV-lah yang harus melunasi bea meterai, sedangkan CV berpendapat sebaliknya karena pemasok yang membuat kuitansi. Para pihak tidak memperjanjikan lain. Pernyataan yang tepat mengenai pihak yang wajib melakukan pemeteraian kemudian dan menanggung sanksinya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pemasok untuk pokok bea meterai dan CV Sumber Rejeki untuk sanksinya", B: "Pemasok, karena pembuat dan penanda tangan kuitansi adalah pihak yang terutang", C: "CV Sumber Rejeki, karena kuitansi adalah dokumen sepihak yang terutang oleh pihak yang menerima dokumen; sanksi 100% juga ditanggungnya", D: "Tidak ada pihak yang dapat ditagih karena kuitansi telah dibukukan sebagai biaya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi dibuat sepihak oleh pemasok dan diserahkan kepada CV, sehingga yang terutang adalah penerima dokumen (Pasal 9). Sanksi 100% dibayar bersama pokok oleh pihak yang terutang saat pemeteraian kemudian (Pasal 18).",
        jejakHitung: [],
        mengapaSalah: { A: "Pokok dan sanksi tidak dipisah antarpihak; keduanya dibayar pihak yang terutang", B: "Pembuat dokumen sepihak bukan pihak terutang menurut Pasal 9", D: "Pencatatan dalam pembukuan tidak menghapus kewajiban bea meterai" },
        jebakan: "Intuisi 'pembuat kuitansi yang menempel meterai' bertentangan dengan Pasal 9."
      },
      dasarHukum: [ { pasal: "Pasal 9 UU 10/2020 (dokumen sepihak: penerima dokumen)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-042",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-03",
      stem: "Lanjutan data CV Sumber Rejeki. Atas kuitansi Rp7.500.000 yang diterima CV pada 25 November 2021 tanpa meterai, pemeriksa pada 14 Oktober 2026 menyatakan bea meterai dan sanksinya masih dapat ditagih. Bea meterai atas kuitansi tersebut menjadi kedaluwarsa (tidak dapat ditagih lagi) mulai ...",
      kataKualifikasi: [],
      opsi: { A: "1 Januari 2027, setelah akhir tahun kelima sejak dokumen dibuat", B: "25 November 2026, karena jangka waktu 5 tahun sejak saat terutang (25 November 2021) berakhir pada 24 November 2026", C: "14 Oktober 2031, setelah 5 tahun sejak dokumen ditemukan pemeriksa", D: "Setelah 5 tahun sejak STP atau surat ketetapan diterbitkan, mengikuti daluwarsa penagihan UU KUP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi terutang saat diserahkan (25 November 2021). Menurut Pasal 23 UU 10/2020, Bea Meterai yang terutang menjadi kedaluwarsa setelah jangka waktu 5 tahun sejak saat terutang. Dengan 25 November 2021 sebagai hari pertama, hari terakhir jangka waktu itu 24 November 2026, sehingga bea meterai kedaluwarsa mulai 25 November 2026. Pemeriksaan 14 Oktober 2026 masih di dalam jangka waktu; sanksi 100% dihitung dari bea meterai itu sehingga mengikuti pokoknya.",
        jejakHitung: [
          ["Saat terutang (diserahkan)", "25 November 2021"],
          ["Hari terakhir jangka waktu 5 tahun (hari pertama 25 November 2021)", "24 November 2026"],
          ["Kedaluwarsa mulai", "25 November 2026"],
          ["Pemeriksaan 14 Oktober 2026", "masih dalam jangka waktu, dapat ditagih"]
        ],
        mengapaSalah: {
          A: "Daluwarsa dihitung per tanggal dari saat terutang, tidak dibulatkan ke akhir tahun",
          C: "Titik mulai adalah saat terutang, bukan tanggal penemuan",
          D: "Daluwarsa penagihan UU KUP berbeda dengan daluwarsa khusus Pasal 23 UU Bea Meterai"
        },
        jebakan: "Bedakan hari terakhir jangka waktu (24 November 2026, bea meterai masih dapat ditagih) dari saat kedaluwarsa (mulai 25 November 2026)."
      },
      dasarHukum: [{ pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-043",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Kuasa hukum PT Mega Teknik akan mengajukan lima kuitansi pembayaran, masing-masing Rp2.000.000 sampai Rp4.000.000 dan semuanya tanpa meterai, sebagai alat bukti dalam sidang perdata pada 12 November 2026. Kuitansi itu semula tidak terutang bea meterai karena nilainya tidak lebih dari Rp5.000.000. Langkah dan jumlah yang tepat sebelum kuitansi diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pemeteraian kemudian Rp10.000 per kuitansi (total Rp50.000) tanpa sanksi, disahkan oleh pejabat pos", B: "Pemeteraian kemudian Rp20.000 per kuitansi (total Rp100.000) karena dokumen tidak bermeterai", C: "Meminta panitera pengadilan membubuhkan cap lunas bea meterai tanpa pembayaran karena nilainya kecil", D: "Tidak perlu dimeteraikan karena kuitansi di bawah Rp5.000.000 bukan objek dalam keadaan apa pun" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen yang digunakan sebagai alat bukti di pengadilan adalah objek tersendiri (Pasal 3 ayat (1) huruf b) yang terutang saat diajukan. Karena sebelumnya bukan objek, pemeteraian kemudian cukup sebesar bea meterai terutang tanpa sanksi (Pasal 18 ayat (1) huruf b UU 10/2020; Pasal 49 huruf c PMK 78/2024). Untuk lima kuitansi, pembayaran lazimnya dengan meterai tempel atau meterai elektronik; SSP dipakai bila pemeteraian kemudian lebih dari 50 dokumen atau bila meterai tempel/meterai elektronik tidak dapat digunakan (Pasal 42 PMK 78/2024). Bila dibayar dengan meterai tempel, pengesahannya dapat dilakukan Pejabat Pos (Pasal 51 ayat (2) PMK 78/2024).",
        jejakHitung: [
          ["Kuitansi", "5 dokumen"],
          ["Bea meterai per dokumen", "Rp10.000"],
          ["Sanksi (semula bukan objek)", "Rp0"],
          ["Total", "Rp50.000"]
        ],
        mengapaSalah: {
          B: "Sanksi 100% hanya untuk dokumen yang bea meterainya sudah terutang tetapi tidak dibayar",
          C: "Panitera tidak berwenang mengesahkan pemeteraian kemudian tanpa pembayaran",
          D: "Penggunaan sebagai alat bukti menjadikan dokumen apa pun objek"
        },
        jebakan: "Status 'semula bukan objek' menghapus sanksi, tetapi tidak menghapus pokok Rp10.000. Pejabat Pos hanya mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel; yang dibayar dengan meterai elektronik atau SSP disahkan Pejabat DJP (Pasal 51 ayat (4))."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b dan Pasal 8 ayat (1) huruf d UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 42, Pasal 49 huruf c, dan Pasal 51 ayat (2) dan ayat (4) PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-044", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Dalam gugatan wanprestasi yang didaftarkan Oktober 2026, PT Arga Konstruksi akan mengajukan alat bukti berupa: (1) dua surat perjanjian subkontrak (rangkap milik PT Arga) yang ditandatangani pada 2024 tanpa meterai; (2) tiga cetakan surel dan percakapan aplikasi pesan; (3) satu kuitansi Rp4.000.000 tanpa meterai; (4) satu kuitansi Rp8.000.000 yang sejak awal telah dibubuhi meterai elektronik sah. Jumlah yang harus dilunasi melalui pemeteraian kemudian sebelum alat bukti diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp120.000", C: "Rp60.000", D: "Rp80.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Perjanjian sudah terutang sejak ditandatangani dan tidak dilunasi sehingga dikenai pokok + sanksi 100%; surel, percakapan, dan kuitansi Rp4.000.000 baru terutang karena diajukan sebagai alat bukti sehingga cukup pokok; kuitansi yang sudah bermeterai sah tidak perlu dimeteraikan lagi.",
        jejakHitung: [ ["(1) 2 perjanjian × (Rp10.000 + Rp10.000)", "Rp40.000"], ["(2) 3 cetakan × Rp10.000", "Rp30.000"], ["(3) 1 kuitansi Rp4 juta × Rp10.000", "Rp10.000"], ["(4) sudah bermeterai sah", "Rp0"], ["Total", "Rp80.000"] ],
        mengapaSalah: { A: "Hanya menghitung perjanjian; dokumen yang diajukan sebagai alat bukti juga terutang", B: "Mengenakan sanksi pada semua dokumen tak bermeterai (6 × Rp20.000), padahal dokumen (2) dan (3) semula bukan objek", C: "Tidak mengenakan sanksi pada perjanjian yang sudah terutang sejak 2024 (6 × Rp10.000)" },
        jebakan: "Satu daftar alat bukti memuat tiga perlakuan berbeda: pokok + sanksi, pokok saja, dan nihil."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-045",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Pasal 23 UU 10/2020 (parafrase): Bea Meterai yang terutang menjadi kedaluwarsa setelah jangka waktu 5 tahun sejak saat terutang. Penjelasan pasal: kedaluwarsa 5 tahun yang dihitung sejak saat terutang berlaku untuk semua dokumen.",
      stem: "Pada 20 Oktober 2026 pemeriksa menemukan empat dokumen PT Lestari Jaya tanpa meterai, dan tidak satu pun pernah diajukan ke pengadilan: (1) kuitansi Rp8.000.000 yang diterima perusahaan pada 15 Oktober 2021; (2) surat perjanjian sewa yang ditandatangani 3 Desember 2021; (3) kuitansi Rp12.000.000 yang diterima perusahaan pada 30 September 2021; (4) surat pernyataan yang diserahkan kepada perusahaan pada 1 Maret 2021. Berdasarkan kutipan tersebut, dokumen yang bea meterai dan sanksinya masih dapat ditagih adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Seluruh dokumen, karena daluwarsa dihitung sejak dokumen ditemukan", B: "Dokumen (1) dan (2)", C: "Dokumen (2) saja", D: "Tidak ada, karena semua dokumen dibuat pada tahun 2021" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Bea meterai kedaluwarsa setelah 5 tahun sejak saat terutang, sehingga tidak dapat ditagih lagi mulai tanggal yang sama pada tahun kelima: (1) mulai 15 Oktober 2026, (3) mulai 30 September 2026, dan (4) mulai 1 Maret 2026, semuanya sudah lewat pada 20 Oktober 2026; hanya (2) yang baru kedaluwarsa mulai 3 Desember 2026.",
        jejakHitung: [
          ["(1) terutang 15 Oktober 2021", "kedaluwarsa mulai 15 Oktober 2026 → lewat"],
          ["(2) terutang 3 Desember 2021", "kedaluwarsa mulai 3 Desember 2026 → masih ditagih"],
          ["(3) terutang 30 September 2021", "kedaluwarsa mulai 30 September 2026 → lewat"],
          ["(4) terutang 1 Maret 2021", "kedaluwarsa mulai 1 Maret 2026 → lewat"]
        ],
        mengapaSalah: {
          A: "Daluwarsa dihitung sejak saat terutang, bukan sejak ditemukan",
          B: "Dokumen (1) kedaluwarsa mulai 15 Oktober 2026, lima hari sebelum pemeriksaan",
          D: "Daluwarsa dihitung per tanggal, bukan per tahun pembuatan"
        },
        jebakan: "Selisih beberapa hari dari tanggal pemeriksaan sengaja dibuat untuk menguji ketelitian."
      },
      dasarHukum: [{ pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-046", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Tuan Andi menerima kuitansi pembayaran sewa kamera sebesar Rp7.000.000 dari penyedia jasa pada 9 Maret 2026 tanpa meterai. Pada Oktober 2026 ia akan memakai kuitansi itu untuk klaim penggantian biaya ke perusahaan tempatnya bekerja yang mensyaratkan dokumen bermeterai, sehingga ia melakukan pemeteraian kemudian. Jumlah yang harus dibayar Tuan Andi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000", B: "Rp20.000", C: "Rp30.000", D: "Rp12.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "angka-usang", D: "angka-usang" },
      pembahasan: {
        inti: "Kuitansi lebih dari Rp5.000.000 terutang sejak diserahkan 9 Maret 2026 dan tidak dilunasi, sehingga pemeteraian kemudian meliputi pokok Rp10.000 dan sanksi 100%.",
        jejakHitung: [ ["Pokok", "Rp10.000"], ["Sanksi 100%", "Rp10.000"], ["Total", "Rp20.000"] ],
        mengapaSalah: { A: "Melupakan sanksi 100% karena saat terutang sudah lewat", C: "Memakai sanksi 200% UU 13/1985", D: "Memakai tarif lama Rp6.000 ditambah sanksi 100%" },
        jebakan: "Tujuan pemakaian dokumen tidak menghapus sanksi atas pelunasan yang terlambat."
      },
      dasarHukum: [ { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A5-047", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Pemeriksaan pada Oktober 2026 atas CV Laras menemukan: tujuh kuitansi bernilai Rp6.000.000–Rp18.000.000 yang diterima CV Laras pada 2025 tanpa meterai, dan tiga surat perjanjian (rangkap milik CV Laras) yang ditandatangani pada 2024 dengan dibubuhi satu meterai tempel lama Rp6.000 per dokumen. Seluruh dokumen belum daluwarsa dan para pihak tidak memperjanjikan lain. Besarnya sanksi administratif, di luar pokok bea meterai, yang harus dibayar CV Laras dalam pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000", B: "Rp70.000", C: "Rp82.000", D: "Rp200.000" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Meterai Rp6.000 tidak sah sejak 2022 sehingga ketiga perjanjian dianggap tidak dibayar, sama seperti tujuh kuitansi. Sanksi 100% × Rp10.000 untuk 10 dokumen.",
        jejakHitung: [ ["Kuitansi tanpa meterai", "7 dokumen"], ["Perjanjian bermeterai lama (tidak sah)", "3 dokumen"], ["Sanksi 100% × Rp10.000 × 10", "Rp100.000"], ["Pokok (tidak ditanya)", "Rp100.000"] ],
        mengapaSalah: { B: "Menganggap meterai Rp6.000 masih sah sehingga hanya 7 kuitansi dikenai sanksi", C: "Memperlakukan perjanjian sebagai kurang bayar Rp4.000 per dokumen (70.000 + 3 × 4.000)", D: "Menjumlahkan pokok dan sanksi, padahal yang ditanya sanksi saja" },
        jebakan: "Baca pertanyaannya: 'sanksi administratif di luar pokok'."
      },
      dasarHukum: [ { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Ketentuan Peralihan UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-048", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Dalam satu pekan tim pemeriksa mencatat empat perbuatan: (1) CV Damar tidak membubuhkan meterai pada 20 kuitansi yang diterimanya; (2) Tuan Joko menjual kembali meterai tempel bekas pakai setelah menghapus bekas tanda tangan dan tanggal di atasnya; (3) PT Giro Prima selaku pemungut terlambat menyetor bea meterai satu bulan; (4) Nn. Rina menempel meterai tempel Rp10.000 yang sah tetapi menandatangani dokumen tanpa mengenai meterai. Perbuatan yang diancam sanksi pidana menurut UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (2), (3), dan (4)", B: "(1) dan (2)", C: "(2) dan (3)", D: "(2) saja" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Ketentuan pidana UU 10/2020 menyasar pemalsuan meterai serta penghilangan tanda pemakaian dan peredaran meterai bekas. Tidak membubuhkan meterai, keterlambatan pemungut, dan pembubuhan yang tidak sesuai tata cara diselesaikan secara administratif.",
        jejakHitung: [],
        mengapaSalah: { A: "Hanya (2) yang masuk ketentuan pidana Pasal 24–26", B: "Tidak membubuhkan meterai berakibat pemeteraian kemudian dan sanksi 100%, bukan pidana", C: "Keterlambatan setor pemungut ditagih dengan STP sesuai UU KUP (Pasal 11), bukan pidana" },
        jebakan: "Pidana bea meterai menyangkut keaslian meterai, bukan kelalaian membayar."
      },
      dasarHukum: [ { pasal: "Pasal 24–26 UU 10/2020 (ketentuan pidana)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 11 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-049",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 9 ayat (2a) UU KUP (parafrase): pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan, dihitung dari tanggal jatuh tempo sampai dengan tanggal pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan.",
      stem: "Dua temuan pemeriksaan Oktober 2026: (1) PT Wahana, yang bukan pemungut, menerima 30 kuitansi bernilai di atas Rp5.000.000 sepanjang 2025 tanpa meterai; (2) Bank Wahana, pemungut bea meterai atas cek dan bilyet giro, menyetor bea meterai Masa Agustus 2026 sebesar Rp2.500.000 pada 21 Oktober 2026, padahal jatuh temponya 15 September 2026; SPT Masa disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) yang berlaku 1,01% per bulan. Berdasarkan kutipan tersebut, sanksi administratif yang dikenakan kepada PT Wahana dan Bank Wahana masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Wahana Rp300.000; Bank Wahana Rp2.500.000", B: "PT Wahana Rp600.000; Bank Wahana Rp50.500", C: "PT Wahana Rp300.000; Bank Wahana Rp50.500", D: "PT Wahana Rp300.000; Bank Wahana Rp25.250" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Pihak terutang yang tidak melunasi dikenai sanksi 100% per dokumen (Pasal 18; bila ditemukan pemeriksaan, ditetapkan dengan SKP menurut Pasal 19 UU 10/2020); pemungut yang menyetor penuh tetapi terlambat ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP (Pasal 11 UU 10/2020), bagian bulan dihitung penuh.",
        jejakHitung: [
          ["PT Wahana: 30 × 100% × Rp10.000", "Rp300.000"],
          ["Bank Wahana: 15 September → 15 Oktober 2026", "1 bulan"],
          ["15 Oktober → 21 Oktober 2026 (bagian bulan)", "1 bulan"],
          ["Bunga = 2.500.000 × 1,01% × 2", "Rp50.500"]
        ],
        mengapaSalah: {
          A: "Sanksi 100% bagi pemungut hanya untuk bea meterai yang tidak dipungut atau tidak disetor; setoran yang terlambat ditagih bunga UU KUP",
          B: "Menjumlahkan pokok Rp300.000 ke dalam sanksi PT Wahana",
          D: "Menghitung bunga 1 bulan saja; 6 hari pada bulan kedua dihitung penuh"
        },
        jebakan: "Dua rezim sanksi dalam satu soal: UU 10/2020 untuk pihak terutang, UU KUP untuk pemungut."
      },
      dasarHukum: [{ pasal: "Pasal 11, Pasal 18, dan Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-050", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "Konsultan pajak PT Cipta Mandiri meninjau empat pelunasan bea meterai pada 2026: (1) perjanjian yang ditandatangani di Tokyo dilunasi bea meterainya sebelum pertama kali digunakan di Indonesia; (2) kuitansi Rp3.000.000 dimeteraikan kemudian karena akan diajukan sebagai alat bukti di pengadilan; (3) perjanjian dalam negeri yang ditandatangani Maret 2026 tanpa meterai dimeteraikan kemudian secara sukarela pada Agustus 2026 sebelum ada pemeriksaan; (4) surat perjanjian tahun 2025 yang hanya dibubuhi meterai tempel Rp6.000 dimeteraikan kemudian pada September 2026. Pelunasan yang tidak disertai sanksi administratif 100% adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "(1) dan (2)", B: "(1) saja", C: "(1), (2), dan (3)", D: "(1), (2), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Sanksi 100% hanya untuk dokumen yang bea meterainya sudah terutang tetapi tidak atau kurang dibayar. Dokumen luar negeri yang dilunasi sebelum digunakan di Indonesia (sebelum saat terutangnya) dan dokumen yang semula bukan objek lalu diajukan sebagai alat bukti cukup membayar Rp10.000.",
        jejakHitung: [],
        mengapaSalah: { B: "Dokumen yang semula bukan objek dan baru terutang karena diajukan sebagai alat bukti juga tidak dikenai sanksi", C: "Inisiatif sukarela tidak menghapus sanksi; bea meterai sudah terutang sejak Maret 2026", D: "Meterai Rp6.000 tidak sah sejak 2022 sehingga dokumen (4) dianggap tidak dibayar" },
        jebakan: "Kesukarelaan sebelum pemeriksaan tidak relevan; yang menentukan adalah apakah bea meterai sudah terutang dan tidak dilunasi."
      },
      dasarHukum: [ { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf d dan e UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-051", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Graha Hunian (pengembang) pada 2025 menandatangani 4 PPJB dengan 4 pembeli, masing-masing dalam 2 rangkap asli (satu untuk PT Graha Hunian, satu untuk pembeli), dan menyerahkan 4 kuitansi uang muka masing-masing Rp50.000.000 kepada para pembeli. Tidak ada klausul tentang pembebanan meterai. Pemeriksaan Oktober 2026 menemukan seluruh PPJB dan kuitansi tersebut tidak bermeterai. Jumlah bea meterai beserta sanksi yang harus dilunasi oleh PT Graha Hunian sendiri sebagai pihak terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp240.000", B: "Rp160.000", C: "Rp40.000", D: "Rp80.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "PT Graha Hunian hanya terutang atas 4 rangkap PPJB yang diterimanya. Kuitansi uang muka adalah dokumen sepihak yang terutang oleh penerimanya (pembeli), dan rangkap PPJB pembeli terutang oleh pembeli.",
        jejakHitung: [ ["Rangkap PPJB milik PT Graha Hunian", "4 dokumen"], ["Per dokumen: Rp10.000 + sanksi 100%", "Rp20.000"], ["4 × Rp20.000", "Rp80.000"], ["Kuitansi uang muka dan rangkap pembeli", "terutang oleh pembeli"] ],
        mengapaSalah: { A: "Menghitung seluruh 12 dokumen seolah semuanya terutang oleh PT Graha Hunian", B: "Ikut menghitung 4 kuitansi yang dibuat PT Graha Hunian (atau kedua rangkap PPJB), padahal terutang oleh pembeli", C: "Tidak mengenakan sanksi 100% atas dokumen yang sudah lewat saat terutang" },
        jebakan: "Soal menanyakan beban pihak tertentu; pilah dulu dokumen per pihak terutang sebelum menghitung."
      },
      dasarHukum: [ { pasal: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-052", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Staf baru PT Mentari menemukan catatan pelatihan lama yang menyebut bahwa dokumen yang terlambat dimeteraikan dikenai denda 200% dan dilunasi dengan meterai Rp6.000. Untuk memperbarui SOP perusahaan per Oktober 2026, ketentuan pemeteraian kemudian yang benar atas dokumen yang bea meterainya tidak dibayar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bea meterai Rp10.000 ditambah sanksi 200% sesuai ketentuan lama", B: "Bea meterai Rp10.000 ditambah sanksi administratif 100% dari bea meterai terutang, dibayar oleh pihak yang terutang", C: "Bea meterai Rp10.000 ditambah sanksi 100% dari nilai nominal dokumen", D: "Bea meterai Rp10.000 ditambah bunga 1,01% per bulan sejak saat terutang" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "UU 10/2020 menurunkan sanksi pemeteraian kemudian dari 200% (UU 13/1985) menjadi 100% dari bea meterai yang terutang, dibayar bersama pokok oleh pihak yang terutang.",
        jejakHitung: [ ["Pokok", "Rp10.000"], ["Sanksi 100% × Rp10.000", "Rp10.000"], ["Total per dokumen", "Rp20.000"] ],
        mengapaSalah: { A: "Sanksi 200% adalah ketentuan UU 13/1985 yang dicabut", C: "Dasar sanksi adalah bea meterai terutang, bukan nilai dokumen", D: "Bunga bulanan adalah rezim UU KUP untuk pemungut, bukan untuk pihak terutang" },
        jebakan: "Pengecoh mencampur angka lama, dasar pengenaan yang keliru, dan rezim sanksi KUP."
      },
      dasarHukum: [ { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A5-053", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Tim keuangan PT Bentang Nusantara menyusun satu kalimat baku untuk SOP penagihan. Sebagai bahan uji, pada 8 Oktober 2026 kasir menandatangani dua kuitansi pelunasan, masing-masing Rp5.000.000 dan Rp5.250.000, yang baru diserahkan kepada dua pelanggan pada 12 Oktober 2026; para pihak tidak memperjanjikan lain tentang pembebanan meterai. Rumusan kalimat baku yang paling tepat menurut UU 10/2020, yang sekaligus menghasilkan perlakuan benar atas kedua kuitansi tersebut, adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Dokumen yang menyebutkan penerimaan uang dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen ditandatangani oleh pihak yang membuatnya, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen.",
        B: "Dokumen yang menyebutkan penerimaan uang dengan nilai nominal paling sedikit Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen.",
        C: "Dokumen yang menyebutkan penerimaan uang dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen.",
        D: "Dokumen yang menyebutkan penerimaan uang dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang membuat dan menandatangani dokumen."
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Tiga unsur harus benar sekaligus: ambang 'lebih dari' Rp5.000.000 (Pasal 3 ayat (2) huruf g), saat terutang ketika dokumen diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c), dan pihak terutang dokumen sepihak adalah penerima dokumen (Pasal 9). Hanya opsi C yang memuat ketiganya.",
        jejakHitung: [ ["Kuitansi Rp5.000.000", "tidak 'lebih dari' Rp5 juta → tidak terutang"], ["Kuitansi Rp5.250.000", "terutang Rp10.000"], ["Saat terutang", "12 Oktober 2026 (diserahkan), bukan 8 Oktober 2026 (ditandatangani)"], ["Pihak terutang", "pelanggan sebagai penerima kuitansi"] ],
        mengapaSalah: { A: "Saat 'dibubuhi tanda tangan' berlaku untuk surat perjanjian, akta notaris, dan akta PPAT; kuitansi terutang saat diserahkan, sehingga tanggal 8 Oktober 2026 keliru", B: "Frasa 'paling sedikit' membuat kuitansi tepat Rp5.000.000 ikut terutang, padahal undang-undang memakai 'lebih dari'", D: "Pasal 9 menetapkan dokumen sepihak terutang oleh penerima dokumen, bukan oleh pembuatnya" },
        jebakan: "Empat kalimat hampir identik; bandingkan kata demi kata pada tiga titik rawan: kualifikasi ambang, kata kerja saat terutang, dan pihak terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-054", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Awan Logistik dan PT Data Prima pada 5 Oktober 2026 menandatangani kontrak layanan gudang senilai Rp1.200.000.000 berbentuk PDF setebal 48 halaman. Kontrak ditandatangani dengan tanda tangan elektronik tersertifikasi oleh direksi kedua pihak dan dua orang saksi, lalu disimpan dalam sistem dokumen kedua perusahaan tanpa pernah dicetak. Konsultan internal diminta memilih satu kalimat untuk memo kepatuhan. Kalimat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 per dokumen tanpa memperhatikan nilai kontrak dan jumlah halaman, terutang pada saat dokumen dibubuhi tanda tangan elektronik, dan dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu.",
        B: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 per dokumen tanpa memperhatikan nilai kontrak dan jumlah halaman, terutang pada saat dokumen dicetak dan diserahkan kepada pihak lain, dan dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu.",
        C: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 untuk setiap penanda tangan, terutang pada saat dokumen dibubuhi tanda tangan elektronik, dan dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu.",
        D: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 per dokumen tanpa memperhatikan nilai kontrak dan jumlah halaman, terutang pada saat dokumen dibubuhi tanda tangan elektronik, dan dilunasi dengan gambar meterai tempel hasil pindai yang memuat nomor seri asli."
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen elektronik termasuk 'dokumen' dan tanda tangan elektronik termasuk 'tanda tangan' (Pasal 1), sehingga surat perjanjian elektronik terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), dengan tarif tetap Rp10.000 per dokumen (Pasal 5), dan dilunasi dengan meterai elektronik (Pasal 12; PP 86/2021).",
        jejakHitung: [ ["Jenis dokumen", "surat perjanjian elektronik (Pasal 3 ayat (2) huruf a)"], ["Saat terutang", "5 Oktober 2026, saat dibubuhi tanda tangan elektronik"], ["Tarif", "Rp10.000 per dokumen"], ["Sarana pelunasan", "meterai elektronik berkode unik"] ],
        mengapaSalah: { B: "Pencetakan dan penyerahan tidak menentukan saat terutang surat perjanjian; dokumen elektronik terutang saat dibubuhi tanda tangan elektronik", C: "Tarif tetap per dokumen, bukan per penanda tangan, per halaman, atau per nilai kontrak", D: "Gambar pindai bukan meterai; meterai elektronik diterbitkan Peruri dengan kode unik dan keterangan tertentu" },
        jebakan: "Nilai Rp1,2 miliar, 48 halaman, dan empat penanda tangan adalah pengalih; yang diuji hanya satu frasa yang berubah pada tiap opsi."
      },
      dasarHukum: [ { pasal: "Pasal 1, Pasal 5, dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-055",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "PMK 78/2024 Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 (parafrase): bea meterai yang dipungut untuk setiap Masa Pajak wajib disetor, dan SPT Masa Bea Meterai wajib disampaikan, paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir; dalam hal batas akhir penyetoran dan pelaporan itu merupakan hari libur (hari Sabtu, hari Minggu, hari libur nasional, hari yang diliburkan untuk Pemilihan Umum, atau cuti bersama secara nasional), penyetoran dan pelaporan dapat dilakukan paling lama pada hari kerja berikutnya. PMK 81/2024 memuat tenggat yang sama (Pasal 94 ayat (2) huruf k dan Pasal 100 untuk setor; Pasal 171 ayat (18) dan Pasal 173 untuk lapor).",
      stem: "PT Loket Bayar Prima, penyelenggara pembayaran digital yang telah ditetapkan Kepala KPP sebagai pemungut bea meterai, memungut bea meterai Masa Juli 2026 atas 2.740 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000; pada masa yang sama platform juga memfasilitasi 8.115 tanda terima bernilai Rp5.000.000 ke bawah. Pada kalender kantor, 15 Agustus 2026 jatuh pada hari Sabtu, 16 Agustus hari Minggu, 17 Agustus 2026 libur nasional Hari Kemerdekaan, dan 18 Agustus 2026 hari kerja biasa. Berdasarkan kutipan tersebut, jumlah setoran melalui kode billing Coretax serta batas paling lambat penyetoran dan penyampaian SPT Masa Bea Meterai yang tidak menimbulkan sanksi adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Setor Rp27.400.000 dan lapor paling lambat Jumat, 14 Agustus 2026, karena tenggat yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", B: "Setor Rp27.400.000 dan lapor paling lambat Senin, 17 Agustus 2026, yaitu hari pertama setelah akhir pekan", C: "Setor Rp27.400.000 paling lambat 10 Agustus 2026 dan lapor paling lambat 20 Agustus 2026", D: "Setor Rp27.400.000 dan lapor paling lambat Selasa, 18 Agustus 2026" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Bea meterai yang dipungut 2.740 × Rp10.000 = Rp27.400.000 (tanda terima ≤ Rp5 juta bukan objek). Tenggat setor (Pasal 63 ayat (1) PMK 78/2024) dan lapor (Pasal 64 ayat (1)) pemungut sama-sama tanggal 15 bulan berikutnya. Menurut Pasal 65, bila batas akhir itu hari libur (Sabtu, Minggu, libur nasional, hari libur Pemilu, atau cuti bersama nasional), setor dan lapor dapat dilakukan paling lama pada hari kerja berikutnya. Karena 15 sampai 17 Agustus 2026 berturut-turut Sabtu, Minggu, dan libur nasional, keduanya bergeser ke Selasa, 18 Agustus 2026. PMK 81/2024 memuat tenggat yang sama (Pasal 94 ayat (2) huruf k dan Pasal 100; Pasal 171 ayat (18) dan Pasal 173).",
        jejakHitung: [
          ["Dokumen objek pemungutan", "2.740 (8.115 tanda terima ≤ Rp5 juta tidak terutang)"],
          ["2.740 × Rp10.000", "Rp27.400.000"],
          ["Tenggat normal Masa Juli 2026 (Pasal 63 ayat (1) dan Pasal 64 ayat (1) PMK 78/2024)", "15 Agustus 2026 (Sabtu)"],
          ["16 Agustus (Minggu) dan 17 Agustus (libur nasional)", "hari libur menurut Pasal 65 ayat (2)"],
          ["Tenggat setor dan lapor (Pasal 65 ayat (1))", "Selasa, 18 Agustus 2026"]
        ],
        mengapaSalah: {
          A: "Pasal 65 ayat (1) PMK 78/2024 menggeser tenggat yang jatuh pada hari libur ke hari kerja berikutnya, bukan memajukannya ke hari kerja sebelumnya",
          B: "17 Agustus 2026 adalah libur nasional sehingga termasuk hari libur (Pasal 65 ayat (2)); hari kerja berikutnya 18 Agustus 2026",
          C: "Setor tanggal 10 dan lapor tanggal 20 adalah ketentuan PMK 151/2021 yang sudah dicabut PMK 78/2024"
        },
        jebakan: "Pergeseran tenggat harus melewati semua hari libur berturut-turut, termasuk libur nasional yang menempel pada akhir pekan; jumlah tanda terima ≤ Rp5 juta hanya pengalih."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 PMK 78/2024 (tenggat setor dan lapor pemungut; hari libur)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 94 ayat (2) huruf k dan Pasal 100 PMK 81/2024 (setor); Pasal 171 ayat (18) dan Pasal 173 PMK 81/2024 (lapor)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-056",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 17 dan 18 UU 10/2020 serta Pasal 42, 43, 49, dan 51 PMK 78/2024 (parafrase): pemeteraian kemudian dilakukan atas dokumen yang bea meterainya tidak atau kurang dibayar, sebesar bea meterai yang terutang ditambah sanksi administratif 100%; pembayaran dengan Surat Setoran Pajak dipakai antara lain untuk pemeteraian kemudian lebih dari 50 dokumen, dengan membuat daftar dokumen dan melekatkan bukti setor yang telah divalidasi NTPN; Pejabat Pos mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel, sedangkan Pejabat DJP mengesahkan yang dibayar dengan meterai tempel, meterai elektronik, dan/atau Surat Setoran Pajak.",
      stem: "Dalam reviu internal 19 Oktober 2026, PT Mahakarya Properti menemukan 56 surat perjanjian sewa unit apartemen yang ditandatangani sepanjang 2025 tanpa meterai. Setiap perjanjian dibuat 2 rangkap asli; perusahaan memegang satu rangkap, dan rangkap lainnya dipegang penyewa. Belum ada pemeriksaan DJP, dan para pihak tidak memperjanjikan lain tentang pembebanan meterai. Direksi ingin melunasi secara sukarela dengan satu kali pembayaran melalui kode billing, tanpa menempel meterai tempel satu per satu. Berdasarkan kutipan tersebut, urutan langkah yang paling sesuai bagi PT Mahakarya Properti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membuat kode billing bea meterai Rp560.000 tanpa sanksi karena pelunasan dilakukan sukarela sebelum pemeriksaan, membayarnya, lalu menyimpan bukti setor bersama arsip perjanjian tanpa pengesahan", B: "Menghitung pokok 56 × Rp10.000 = Rp560.000 ditambah sanksi 100% Rp560.000; membayar Rp1.120.000 dengan kode billing; membuat daftar dokumen dan melekatkan bukti setor bervalidasi NTPN; lalu meminta Pejabat DJP membubuhkan cap pemeteraian kemudian", C: "Menghitung 112 rangkap (milik perusahaan dan penyewa) × (Rp10.000 + Rp10.000) = Rp2.240.000; membayarnya dengan kode billing; membuat daftar dokumen; lalu meminta Pejabat DJP membubuhkan cap pemeteraian kemudian", D: "Menghitung Rp1.120.000 dan membayarnya dengan kode billing; membuat daftar dokumen; lalu mengajukan perjanjian beserta bukti setor kepada Pejabat Pos untuk dibubuhi cap pemeteraian kemudian" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Perjanjian yang tidak dilunasi saat ditandatangani tetap dikenai sanksi 100% walaupun dilunasi sukarela sebelum pemeriksaan (Pasal 18 UU 10/2020; Pasal 49 huruf a PMK 78/2024). Karena dokumennya lebih dari 50, pembayaran boleh memakai SSP dengan kode billing (Pasal 42 huruf a PMK 78/2024), disertai daftar dokumen dan bukti setor bervalidasi NTPN (Pasal 43 ayat (1)). Pemeteraian kemudian yang dibayar dengan SSP disahkan Pejabat DJP (Pasal 51 ayat (4)). Perusahaan hanya menanggung rangkap yang diterimanya (Pasal 9 ayat (2) UU 10/2020).",
        jejakHitung: [
          ["Rangkap yang terutang oleh perusahaan (Pasal 9 ayat (2))", "56 dokumen"],
          ["Syarat SSP: lebih dari 50 dokumen (Pasal 42 huruf a PMK 78/2024)", "terpenuhi"],
          ["Pokok 56 × Rp10.000", "Rp560.000"],
          ["Sanksi 100%", "Rp560.000"],
          ["Kode billing", "Rp1.120.000"],
          ["Langkah akhir", "cap pemeteraian kemudian oleh Pejabat DJP"]
        ],
        mengapaSalah: {
          A: "Pelunasan sukarela tidak menghapus sanksi 100% atas dokumen yang tidak dilunasi pada saat terutang, dan pemeteraian kemudian wajib disahkan pejabat yang ditetapkan Menteri",
          C: "Rangkap yang dipegang penyewa terutang oleh penyewa (Pasal 9 ayat (2)), bukan oleh perusahaan",
          D: "Pejabat Pos hanya mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel (Pasal 51 ayat (2) PMK 78/2024); pembayaran dengan SSP disahkan Pejabat DJP"
        },
        jebakan: "Dua pancingan: frasa 'sukarela sebelum pemeriksaan' memancing peserta menghapus sanksi, dan 'Pejabat Pos' terdengar benar karena memang pengesah pemeteraian kemudian, tetapi hanya untuk pembayaran dengan meterai tempel. SSP untuk pemeteraian kemudian hanya tersedia bila dokumennya lebih dari 50 (atau meterai tempel dan elektronik tidak dapat digunakan)."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 6, Pasal 9, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 42, Pasal 43, Pasal 49, dan Pasal 51 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-057", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-04",
      stem: "Data untuk dua soal berurutan (PT Sinar Farmasi Nusantara). PT Sinar Farmasi Nusantara (PKP, peredaran bruto 2025 Rp86 miliar, 240 karyawan) mencatat dokumen September 2026 berikut, seluruhnya tanpa meterai: (1) perjanjian distribusi dengan PT Apotek Sehat senilai Rp2.400.000.000 belum termasuk PPN, 36 halaman, 2 rangkap asli (satu untuk tiap pihak); (2) empat kuitansi yang dibuat PT Sinar dan diserahkan kepada apotek pelanggan, masing-masing Rp4.950.000, Rp5.000.000, Rp12.300.000, dan Rp48.000.000; (3) tiga kuitansi dari pemasok bahan baku yang diterima PT Sinar, masing-masing Rp6.200.000, Rp3.800.000, dan Rp27.750.000; (4) tanda terima gaji September 240 karyawan, total Rp1.900.000.000; (5) 12 surat jalan pengiriman obat; (6) surat pernyataan kesanggupan bayar dari PT Apotek Sehat yang diserahkan kepada PT Sinar pada 25 September 2026; (7) kontrak lisensi dengan perusahaan Swiss yang ditandatangani di Basel pada 10 September 2026, rangkap PT Sinar, yang baru akan dipakai untuk pendaftaran produk di Indonesia pada November 2026. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Bea meterai yang sampai dengan 20 Oktober 2026 telah terutang oleh PT Sinar Farmasi Nusantara sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp30.000", B: "Rp40.000", C: "Rp50.000", D: "Rp60.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pilah objek dulu, lalu pihak terutang. PT Sinar terutang atas rangkap perjanjian yang diterimanya, dua kuitansi pemasok di atas Rp5 juta yang diterimanya, dan surat pernyataan yang diterimanya. Kuitansi buatannya terutang oleh apotek penerima, sedangkan kontrak Swiss belum terutang karena belum digunakan di Indonesia.",
        jejakHitung: [ ["(1) Rangkap perjanjian milik PT Sinar", "1 dokumen (rangkap apotek terutang oleh apotek)"], ["(2) Kuitansi buatan PT Sinar Rp12,3 juta dan Rp48 juta", "terutang oleh apotek penerima → 0"], ["(3) Kuitansi pemasok Rp6,2 juta dan Rp27,75 juta", "2 dokumen (Rp3,8 juta bukan objek)"], ["(4) Tanda terima gaji dan (5) surat jalan", "bukan objek (Pasal 7 huruf c dan a)"], ["(6) Surat pernyataan diterima PT Sinar", "1 dokumen"], ["(7) Kontrak Swiss", "belum terutang (terutang saat digunakan di Indonesia)"], ["Total 4 × Rp10.000", "Rp40.000"] ],
        mengapaSalah: { A: "Menganggap pembuat dokumen sebagai pihak terutang: rangkap perjanjian ditambah dua kuitansi buatan PT Sinar, tanpa kuitansi pemasok dan surat pernyataan yang diterimanya (3 × Rp10.000)", C: "Menganggap kontrak Swiss sudah terutang saat ditandatangani di Basel (5 × Rp10.000)", D: "Menghitung semua dokumen objek yang dibuat atau diterima PT Sinar tanpa memilah pihak terutang: 1 + 2 + 2 + 1 (6 × Rp10.000)" },
        jebakan: "Peredaran bruto, jumlah karyawan, nilai kontrak, PPN, jumlah halaman, dan total gaji tidak dipakai; yang menentukan hanya status objek, saat terutang, dan siapa penerima dokumen."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g serta Pasal 7 huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-058", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-04",
      stem: "Lanjutan data PT Sinar Farmasi Nusantara. Pemeriksaan pada 21 Oktober 2026 menemukan bahwa empat dokumen September 2026 yang terutang oleh PT Sinar (rangkap perjanjian distribusi, dua kuitansi pemasok di atas Rp5 juta, dan surat pernyataan dari PT Apotek Sehat) belum dimeteraikan. Arsip lama juga memuat: (a) kuitansi pemasok Rp7.000.000 yang diterima PT Sinar pada 2 Oktober 2021 tanpa meterai; (b) kuitansi pemasok Rp9.000.000 yang diterima pada 28 Oktober 2021 tanpa meterai; (c) perjanjian sewa gudang tahun 2023, rangkap PT Sinar, yang dibubuhi meterai elektronik sah; (d) perjanjian angkutan yang ditandatangani 14 Mei 2024, rangkap PT Sinar, yang hanya dibubuhi satu meterai tempel lama Rp6.000. Kontrak lisensi Swiss masih belum digunakan di Indonesia, dan tidak satu pun dokumen pernah diajukan ke pengadilan. Jumlah pokok dan sanksi yang harus dilunasi PT Sinar melalui pemeteraian kemudian atas dokumen yang ditemukan pemeriksa adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000", B: "Rp108.000", C: "Rp120.000", D: "Rp140.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang tidak dilunasi pada saat terutang dimeteraikan kemudian sebesar Rp10.000 + sanksi 100% per dokumen, kecuali sudah daluwarsa 5 tahun sejak saat terutang. Meterai tempel Rp6.000 tidak sah sejak 1 Januari 2022 sehingga dokumen (d) dianggap tidak dibayar sama sekali.",
        jejakHitung: [ ["Empat dokumen September 2026", "4 × Rp20.000 = Rp80.000"], ["(a) diterima 2 Oktober 2021", "daluwarsa 2 Oktober 2026 → Rp0"], ["(b) diterima 28 Oktober 2021", "daluwarsa 28 Oktober 2026, belum lewat → Rp20.000"], ["(c) bermeterai elektronik sah", "Rp0"], ["(d) meterai Rp6.000 tidak sah", "Rp10.000 + Rp10.000 = Rp20.000"], ["Kontrak Swiss (belum digunakan)", "belum terutang → Rp0"], ["Total", "Rp120.000"] ],
        mengapaSalah: { A: "Menganggap kedua kuitansi 2021 daluwarsa hanya karena 2026 − 2021 = 5 tahun; kuitansi 28 Oktober 2021 baru daluwarsa 28 Oktober 2026 (Rp80.000 + Rp20.000)", B: "Memperlakukan meterai Rp6.000 sebagai pembayaran sebagian (kurang Rp4.000 + sanksi Rp4.000); meterai lama tidak sah sejak 1 Januari 2022", D: "Mengabaikan daluwarsa kuitansi 2 Oktober 2021 (atau ikut mengenakan Rp20.000 pada kontrak Swiss yang belum terutang)" },
        jebakan: "Daluwarsa diuji per tanggal saat terutang terhadap tanggal pemeriksaan; selisih beberapa hari menentukan apakah Rp20.000 masih ditagih."
      },
      dasarHukum: [ { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 23 UU 10/2020 (daluwarsa 5 tahun sejak saat terutang)", berlakuSejak: "2021-01-01" }, { pasal: "Ketentuan Peralihan UU 10/2020 (meterai lama sampai 31 Desember 2021)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-059", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Koperasi Simpan Pinjam Mitra Usaha (bukan pemungut bea meterai; 1.850 anggota; aset Rp42 miliar) mencatat dokumen Oktober 2026 berikut, seluruhnya belum dibubuhi meterai: (1) 140 slip setoran simpanan anggota bernilai Rp6.000.000–Rp75.000.000; (2) 35 surat bukti gadai emas yang diserahkan kepada nasabah dengan nilai pinjaman Rp8.000.000–Rp40.000.000; (3) surat perjanjian pinjaman modal kerja dengan Tuan Bagas senilai Rp180.000.000 dalam 2 rangkap asli, satu untuk koperasi dan satu untuk Tuan Bagas; (4) kuitansi pelunasan sewa kantor cabang Rp27.000.000 yang dibuat pemilik gedung dan diserahkan kepada koperasi; (5) tanda terima setoran kas dari kasir cabang kepada bendahara pusat koperasi Rp96.000.000; (6) bukti penerimaan negara atas setoran PPh Pasal 4 ayat (2) sebesar Rp3.400.000. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Bea meterai yang terutang oleh koperasi sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: ["sendiri sebagai pihak yang terutang"],
      opsi: { A: "Rp30.000", B: "Rp40.000", C: "Rp20.000", D: "Rp370.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Slip simpanan, surat gadai, tanda terima uang intern, dan bukti penerimaan negara atas pajak dikecualikan Pasal 7 berapa pun nilainya. Objek yang terutang oleh koperasi hanya rangkap perjanjian yang diterimanya dan kuitansi sewa yang diterimanya.",
        jejakHitung: [ ["(1) Slip setoran simpanan", "bukan objek (Pasal 7 huruf g)"], ["(2) Surat bukti gadai", "bukan objek (Pasal 7 huruf h)"], ["(3) Rangkap perjanjian milik koperasi", "Rp10.000 (rangkap Tuan Bagas terutang oleh Tuan Bagas)"], ["(4) Kuitansi sewa Rp27.000.000 yang diterima koperasi", "Rp10.000"], ["(5) Tanda terima uang intern", "bukan objek (Pasal 7 huruf f)"], ["(6) Bukti penerimaan negara atas pajak", "bukan objek (Pasal 7 huruf e)"], ["Total 2 × Rp10.000", "Rp20.000"] ],
        mengapaSalah: { A: "Ikut menghitung rangkap perjanjian yang diterima Tuan Bagas; rangkap itu terutang oleh Tuan Bagas sendiri (Pasal 9)", B: "Menghitung tanda terima setoran kas intern (Pasal 7 huruf f) dan bukti penerimaan negara atas setoran pajak (Pasal 7 huruf e) sebagai objek", D: "Menganggap 35 surat bukti gadai sebagai perjanjian pinjam-meminjam yang terutang; surat gadai dikecualikan Pasal 7 huruf h" },
        jebakan: "Jumlah anggota, aset, dan nilai tiap slip atau gadai adalah umpan; pengecualian Pasal 7 tidak mengenal ambang nilai, dan pihak terutang ditentukan per dokumen."
      },
      dasarHukum: [ { pasal: "Pasal 7 huruf e, f, g, dan h UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan g serta Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-060",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "CV Bangun Karya, nasabah giro Bank Arta yang telah ditetapkan sebagai pemungut bea meterai atas cek dan bilyet giro, pada 5 Oktober 2026 menerima satu buku cek berisi 25 lembar. Sepanjang Oktober 2026 CV Bangun Karya memakai tiga lembar cek untuk membayar pemasok masing-masing sebesar Rp2.500.000, Rp4.900.000, dan Rp85.000.000. Untuk memo internal, kalimat yang paling tepat mengenai bea meterai atas cek tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya telah dipungut Bank Arta selaku pemungut melalui Meterai Percetakan sebelum buku cek diserahkan, sehingga CV Bangun Karya tidak perlu lagi membubuhkan meterai pada ketiga lembar cek yang dipakai.", B: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 hanya apabila nilai nominal yang ditulis lebih dari Rp5.000.000; bea meterainya telah dipungut Bank Arta selaku pemungut melalui Meterai Percetakan sebelum buku cek diserahkan, sehingga hanya cek Rp85.000.000 yang terutang.", C: "Setiap buku cek merupakan satu surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya telah dipungut Bank Arta selaku pemungut melalui Meterai Percetakan sebelum buku cek diserahkan, sehingga CV Bangun Karya tidak perlu lagi membubuhkan meterai pada ketiga lembar cek yang dipakai.", D: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya telah dipungut Bank Arta selaku pemungut melalui Meterai Percetakan sebelum buku cek diserahkan, tetapi CV Bangun Karya tetap wajib menempelkan meterai tempel pada setiap lembar cek yang dipakai." },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Cek termasuk surat berharga (Pasal 3 ayat (2) huruf d UU 10/2020) yang terutang tanpa ambang nilai dan dihitung per lembar. Bank yang ditetapkan sebagai pemungut memungut bea meterainya dengan Meterai Percetakan (Pasal 62 ayat (1) huruf a PMK 78/2024) pada saat menerima cek dari pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a), jadi sebelum buku cek diserahkan kepada nasabah. Dokumen itu sudah lunas sehingga nasabah tidak membubuhkan meterai lagi.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Ambang Rp5.000.000 hanya berlaku bagi dokumen yang menyatakan penerimaan uang atau pelunasan utang (Pasal 3 ayat (2) huruf g), bukan bagi surat berharga",
          C: "Satuan dokumen adalah lembar cek, bukan buku; satu buku berisi 25 lembar berarti 25 dokumen",
          D: "Cek yang bea meterainya telah dipungut pemungut melalui Meterai Percetakan sudah lunas; menempel meterai lagi berarti membayar dua kali atas dokumen yang sama"
        },
        jebakan: "Nilai Rp2.500.000 dan Rp4.900.000 memancing ambang Rp5 juta yang hanya berlaku untuk dokumen penerimaan uang. Saat pemungutan cek adalah saat bank menerimanya dari percetakan, bukan saat buku cek diserahkan kepada nasabah."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 10 dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf a, Pasal 61 huruf a, dan Pasal 62 ayat (1) huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-061", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Cipta Edukasi mengundang Dr. Sari Wulandari, dosen perguruan tinggi negeri yang bukan pegawai PT Cipta Edukasi dan memiliki NPWP (NIK terpadan), sebagai narasumber pelatihan pada 14 Oktober 2026. Honorarium bruto Rp12.000.000 dibayar sekaligus dan tidak berkesinambungan; PT Cipta Edukasi memotong PPh Pasal 21 bagi bukan pegawai sesuai PMK 168/2023 (tarif Pasal 17 × 50% × penghasilan bruto). Dr. Sari menandatangani kuitansi yang menyebutkan jumlah uang yang benar-benar diterimanya, lalu menyerahkannya kepada PT Cipta Edukasi. Pada hari yang sama PT Cipta Edukasi membayar uang lembur panitia (pegawai tetap) Rp6.000.000 dengan tanda terima. Tidak ada kesepakatan tentang pembebanan meterai. PPh Pasal 21 atas honorarium dan perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 21 Rp600.000; kuitansi Dr. Sari (Rp11.400.000) terutang bea meterai Rp10.000 oleh PT Cipta Edukasi sebagai penerima dokumen; tanda terima uang lembur tidak terutang", B: "PPh Pasal 21 Rp300.000; kuitansi Dr. Sari (Rp11.700.000) terutang bea meterai Rp10.000 oleh Dr. Sari sebagai pembuat dan penanda tangan kuitansi; tanda terima uang lembur tidak terutang", C: "PPh Pasal 21 Rp300.000; kuitansi Dr. Sari (Rp11.700.000) terutang bea meterai Rp10.000 oleh PT Cipta Edukasi sebagai penerima dokumen; tanda terima uang lembur tidak terutang", D: "PPh Pasal 21 Rp300.000; kuitansi Dr. Sari (Rp11.700.000) dan tanda terima uang lembur panitia masing-masing terutang bea meterai Rp10.000 oleh PT Cipta Edukasi" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bagi bukan pegawai, PPh 21 = 5% × 50% × Rp12.000.000 = Rp300.000, sehingga uang yang diterima Rp11.700.000. Kuitansi itu menyebutkan penerimaan uang lebih dari Rp5.000.000 dan terutang oleh PT Cipta Edukasi sebagai penerima dokumen; tanda terima lembur pegawai dikecualikan Pasal 7 huruf c.",
        jejakHitung: [ ["Dasar pemotongan = 50% × Rp12.000.000", "Rp6.000.000"], ["PPh 21 = 5% × Rp6.000.000 (lapisan pertama Pasal 17)", "Rp300.000"], ["Uang diterima = 12.000.000 − 300.000", "Rp11.700.000 (> Rp5.000.000)"], ["Bea meterai kuitansi", "Rp10.000, terutang oleh PT Cipta Edukasi (penerima)"], ["Tanda terima lembur pegawai", "bukan objek (Pasal 7 huruf c)"] ],
        mengapaSalah: { A: "Tidak menerapkan dasar 50% × penghasilan bruto bagi bukan pegawai: 5% × Rp12.000.000", B: "Kuitansi adalah dokumen sepihak yang terutang oleh pihak yang menerima dokumen (Pasal 9), yaitu PT Cipta Edukasi", D: "Uang lembur pegawai berkaitan dengan hubungan kerja sehingga tanda terimanya dikecualikan Pasal 7 huruf c" },
        jebakan: "Pengecualian Pasal 7 huruf c hanya untuk pembayaran yang berkaitan dengan hubungan kerja; honorarium narasumber bukan pegawai tidak termasuk."
      },
      dasarHukum: [ { pasal: "PMK 168/2023 (PPh Pasal 21 bukan pegawai: tarif Pasal 17 × 50% × bruto)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g, Pasal 7 huruf c, dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-062",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Sekuritas Andalan menelaah kepatuhan bea meterai atas dokumen nasabah Oktober 2026: (1) konfirmasi pengeluaran efek dari rekening efek yang diadministrasikannya selaku kustodian kepada nasabah atas permintaan penarikan; (2) pemberitahuan pembagian kupon obligasi kepada nasabah sebesar Rp7.500.000; (3) buku tabungan Bank Kencana milik nasabah yang mencatat saldo simpanan Rp200.000.000, dilampirkan nasabah sebagai bukti kemampuan keuangan; (4) surat perjanjian pembukaan rekening efek yang ditandatangani nasabah baru dan PT Sekuritas Andalan; (5) konfirmasi transaksi (trade confirmation) pembelian saham senilai Rp50.000.000 yang diterbitkan PT Sekuritas Andalan kepada nasabah. Dokumen yang merupakan objek bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(3), (4), dan (5)", B: "(2), (4), dan (5)", C: "(4) saja", D: "(4) dan (5)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Perjanjian pembukaan rekening (Pasal 3 ayat (2) huruf a) dan konfirmasi transaksi surat berharga (huruf e) adalah objek. Pengeluaran efek oleh kustodian kepada nasabah dan dokumen yang menyebutkan simpanan uang seperti buku tabungan (Pasal 7 huruf g beserta Penjelasannya) serta tanda pembagian bunga atau imbal hasil surat berharga (huruf i) dikecualikan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Buku tabungan adalah dokumen yang menyebutkan simpanan uang; Penjelasan Pasal 7 huruf g menyebut tabungan dan giro sebagai contohnya, sehingga dikecualikan berapa pun saldonya",
          B: "Pemberitahuan kupon obligasi adalah tanda pembagian bunga atau imbal hasil surat berharga yang dikecualikan Pasal 7 huruf i, walaupun nilainya di atas Rp5.000.000",
          C: "Konfirmasi transaksi saham adalah dokumen transaksi surat berharga yang menjadi objek menurut Pasal 3 ayat (2) huruf e; nilainya Rp50.000.000 juga di atas batas fasilitas pembebasan Rp10.000.000 untuk konfirmasi transaksi di bursa"
        },
        jebakan: "Nilai Rp7.500.000 dan saldo Rp200.000.000 menggoda untuk memakai ambang Rp5 juta; dokumen dalam daftar Pasal 7 tetap bukan objek berapa pun nilainya. Bedakan dokumen simpanan uang (tabungan, giro) dari deposito, yang oleh Penjelasan Pasal 3 ayat (2) huruf d disebut sebagai contoh surat berharga."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf g dan i UU 10/2020 beserta Penjelasan Pasal 7 huruf g", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-063", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 7 huruf f UU 10/2020 (parafrase): Bea Meterai tidak dikenakan atas tanda penerimaan uang yang dibuat untuk keperluan intern organisasi. Pasal 3 ayat (2) huruf g (parafrase): dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000 yang menyebutkan penerimaan uang merupakan dokumen perdata yang dikenai Bea Meterai.",
      stem: "PT Gemilang Retail Tbk memiliki cabang di Surabaya (satu badan hukum dengan NPWP pusat dan NITKU cabang) serta anak perusahaan PT Gemilang Logistik (badan hukum tersendiri). Pada Oktober 2026 dibuat dokumen berikut: (1) tanda terima setoran hasil penjualan dari kepala cabang Surabaya kepada bagian treasuri kantor pusat sebesar Rp350.000.000; (2) kuitansi yang dibuat PT Gemilang Logistik atas penerimaan pembayaran jasa angkutan Rp42.000.000 dari PT Gemilang Retail Tbk, diserahkan kepada PT Gemilang Retail Tbk; (3) tanda terima uang kas kecil Rp7.500.000 dari kasir pusat kepada staf bagian umum PT Gemilang Retail Tbk. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Berdasarkan kutipan tersebut, dokumen yang terutang bea meterai dan pihak yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen (2) saja, terutang oleh PT Gemilang Logistik sebagai pembuat kuitansi", B: "Dokumen (1) dan (2), karena cabang dan kantor pusat memiliki NITKU yang berbeda", C: "Dokumen (2) saja, terutang oleh PT Gemilang Retail Tbk sebagai penerima kuitansi", D: "Dokumen (1), (2), dan (3), masing-masing terutang oleh pihak yang menerima dokumen" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Tanda terima antara cabang dan pusat, maupun kas kecil kepada staf, dibuat untuk keperluan intern satu badan sehingga bukan objek. Anak perusahaan adalah badan hukum lain, sehingga kuitansinya kepada induk merupakan dokumen penerimaan uang lebih dari Rp5.000.000 yang terutang oleh penerima dokumen.",
        jejakHitung: [],
        mengapaSalah: { A: "Kuitansi adalah dokumen sepihak yang terutang oleh pihak yang menerima dokumen (Pasal 9)", B: "NITKU hanya identitas tempat kegiatan usaha; cabang dan pusat tetap satu organisasi sehingga tanda terimanya bersifat intern", D: "Tanda terima (1) dan (3) dibuat untuk keperluan intern satu badan sehingga dikecualikan Pasal 7 huruf f" },
        jebakan: "Hubungan induk–anak bukan 'intern organisasi'; yang intern hanya dokumen di dalam satu badan."
      },
      dasarHukum: [ { pasal: "Pasal 7 huruf f UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-064", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Ny. Ratna menyewakan kamar kos kepada Sdr. Fikri. Pada 1 Oktober 2026 keduanya menandatangani surat perjanjian sewa satu tahun senilai Rp18.000.000 dalam satu rangkap asli yang disimpan Ny. Ratna, dan pada hari yang sama Ny. Ratna menyerahkan kuitansi penerimaan uang sewa Rp18.000.000 kepada Sdr. Fikri. Total bea meterai yang terutang atas kedua dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000", B: "Rp20.000", C: "Rp30.000", D: "Rp12.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Surat perjanjian terutang tanpa ambang nilai dan kuitansi Rp18.000.000 melebihi Rp5.000.000; masing-masing dokumen terutang Rp10.000.",
        jejakHitung: [ ["Surat perjanjian (1 rangkap)", "Rp10.000"], ["Kuitansi Rp18.000.000", "Rp10.000"], ["Total", "Rp20.000"] ],
        mengapaSalah: { A: "Menganggap perjanjian dan kuitansi satu transaksi sehingga cukup satu meterai; keduanya dokumen terpisah", C: "Menghitung perjanjian per penanda tangan; bea meterai dikenakan per dokumen", D: "Memakai tarif lama Rp6.000 per dokumen (UU 13/1985)" },
        jebakan: "Satu transaksi dapat menghasilkan beberapa dokumen objek; hitung per dokumen, bukan per transaksi atau per penanda tangan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A5-065", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-A5-05",
      stem: "Data untuk tiga soal berurutan (PT Puri Asri Properti). PT Puri Asri Properti (pengembang, PKP) menjual satu rumah tapak kepada Ny. Larasati seharga Rp1.250.000.000. Kronologinya: (a) 3 Maret 2026 kedua pihak menandatangani PPJB di bawah tangan dalam 2 rangkap asli, satu untuk tiap pihak; (b) 4 Maret 2026 PT Puri Asri menyerahkan kuitansi tanda jadi Rp4.500.000; (c) kuitansi uang muka Rp180.000.000 ditandatangani kasir PT Puri Asri pada 18 Maret 2026 dan diserahkan kepada Ny. Larasati pada 20 Maret 2026; (d) 10 Juli 2026 para pihak menandatangani akta jual beli di hadapan PPAT; akta asli disimpan PPAT, dan pada hari yang sama PPAT menandatangani 2 salinan untuk para pihak; (e) 10 Juli 2026 PT Puri Asri menyerahkan kuitansi pelunasan Rp1.065.500.000. Para pihak sepakat seluruh bea meterai akta jual beli dan salinannya ditanggung pembeli; untuk dokumen lain tidak ada kesepakatan. Pasangan dokumen dan saat terutang bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPJB: 3 Maret 2026; kuitansi uang muka: 18 Maret 2026; akta jual beli dan salinannya: 10 Juli 2026", B: "PPJB: 10 Juli 2026, bersamaan dengan akta jual beli; kuitansi uang muka: 20 Maret 2026; akta jual beli dan salinannya: 10 Juli 2026", C: "PPJB: 3 Maret 2026; kuitansi uang muka: 20 Maret 2026; akta jual beli dan salinannya: saat didaftarkan ke Kantor Pertanahan", D: "PPJB: 3 Maret 2026; kuitansi uang muka: 20 Maret 2026; akta jual beli dan salinannya: 10 Juli 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Surat perjanjian dan akta PPAT beserta salinannya terutang saat dibubuhi tanda tangan, sedangkan kuitansi terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat.",
        jejakHitung: [],
        mengapaSalah: { A: "Kuitansi terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c), bukan saat ditandatangani kasir", B: "PPJB adalah surat perjanjian tersendiri yang terutang saat ditandatangani, tidak menunggu akta jual beli", C: "Akta PPAT beserta salinannya terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), bukan saat pendaftaran" },
        jebakan: "Tanggal tanda tangan kasir (18 Maret) berbeda dengan tanggal penyerahan (20 Maret); untuk kuitansi yang menentukan adalah penyerahan."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a, c, dan g UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A5-066", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A5-05",
      stem: "Lanjutan data PT Puri Asri Properti. Dokumen penjualan rumah kepada Ny. Larasati: (a) PPJB 2 rangkap asli; (b) kuitansi tanda jadi Rp4.500.000; (c) kuitansi uang muka Rp180.000.000; (d) akta jual beli yang aslinya disimpan PPAT beserta 2 salinan bertanda tangan PPAT; (e) kuitansi pelunasan Rp1.065.500.000. Seluruh dokumen dilunasi bea meterainya tepat waktu oleh pihak yang wajib. Total bea meterai atas seluruh dokumen transaksi tersebut, siapa pun pihak yang membayarnya, adalah ...",
      kataKualifikasi: ["siapa pun pihak yang membayarnya"],
      opsi: { A: "Rp80.000", B: "Rp50.000", C: "Rp60.000", D: "Rp70.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Hitung per dokumen: 2 rangkap PPJB, kuitansi uang muka, kuitansi pelunasan, serta akta jual beli beserta 2 salinannya; tanda jadi Rp4.500.000 bukan objek. Harga rumah tidak memengaruhi tarif.",
        jejakHitung: [ ["(a) PPJB 2 rangkap", "Rp20.000"], ["(b) Tanda jadi Rp4.500.000", "tidak terutang"], ["(c) Uang muka Rp180.000.000", "Rp10.000"], ["(d) Akta jual beli + 2 salinan", "Rp30.000"], ["(e) Pelunasan Rp1.065.500.000", "Rp10.000"], ["Total", "Rp70.000"] ],
        mengapaSalah: { A: "Ikut menghitung kuitansi tanda jadi Rp4.500.000 yang tidak lebih dari Rp5.000.000", B: "Menganggap salinan akta PPAT bukan objek; Pasal 3 ayat (2) huruf c mencakup akta PPAT beserta salinan dan kutipannya", C: "Menghitung PPJB sebagai satu dokumen; setiap rangkap asli yang ditandatangani terutang Rp10.000" },
        jebakan: "Harga Rp1,25 miliar tidak relevan; tarif bea meterai tetap Rp10.000 per dokumen."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a, c, dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-067",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-05",
      stem: "Lanjutan data PT Puri Asri Properti. Atas penjualan rumah tapak (bukan rumah sederhana) seharga Rp1.250.000.000, PT Puri Asri wajib menyetor PPh final Pasal 4 ayat (2) atas pengalihan hak atas tanah dan/atau bangunan dengan tarif umum. Para pihak sepakat bea meterai akta jual beli dan salinannya ditanggung pembeli, sedangkan untuk PPJB (2 rangkap, satu untuk tiap pihak), kuitansi uang muka, dan kuitansi pelunasan tidak ada kesepakatan. PPh final yang disetor PT Puri Asri dan bea meterai yang harus dibayar sendiri oleh PT Puri Asri dengan memperhatikan kesepakatan tersebut adalah ...",
      kataKualifikasi: ["harus dibayar sendiri", "dengan memperhatikan kesepakatan tersebut"],
      opsi: { A: "PPh final Rp31.250.000; bea meterai Rp10.000", B: "PPh final Rp31.250.000; bea meterai Rp30.000", C: "PPh final Rp62.500.000; bea meterai Rp10.000", D: "PPh final Rp31.250.000; bea meterai Rp0" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "PPh final 2,5% × Rp1.250.000.000 = Rp31.250.000. Pihak yang terutang ditentukan Pasal 9 ayat (1) dan (2) UU 10/2020: kuitansi terutang oleh Ny. Larasati sebagai penerima, dan tiap pihak terutang atas rangkap PPJB yang diterimanya. Pasal 9 ayat (6) membolehkan para pihak menentukan pihak yang membayar, sehingga bea meterai akta jual beli dan seluruh salinannya, termasuk salinan yang diterima PT Puri Asri, dibayar pembeli. Yang dibayar sendiri oleh PT Puri Asri hanya rangkap PPJB miliknya: Rp10.000.",
        jejakHitung: [
          ["PPh final = 2,5% × Rp1.250.000.000", "Rp31.250.000"],
          ["Rangkap PPJB milik PT Puri Asri (Pasal 9 ayat (2), tanpa kesepakatan)", "Rp10.000"],
          ["Kuitansi uang muka dan pelunasan", "terutang dan dibayar Ny. Larasati (penerima, Pasal 9 ayat (1))"],
          ["Akta jual beli dan salinannya", "dibayar pembeli sesuai kesepakatan (Pasal 9 ayat (6))"],
          ["Bea meterai yang dibayar sendiri oleh PT Puri Asri", "Rp10.000"]
        ],
        mengapaSalah: {
          B: "Menganggap PT Puri Asri harus membayar kuitansi uang muka dan pelunasan yang dibuatnya; kuitansi terutang oleh penerimanya, yaitu Ny. Larasati (Pasal 9 ayat (1)), dan tidak ada kesepakatan lain",
          C: "Memakai tarif lama 5% sebelum PP 34/2016; tarif umum kini 2,5% dari jumlah bruto",
          D: "Kesepakatan pembeli membayar bea meterai hanya untuk akta jual beli dan salinannya; rangkap PPJB milik PT Puri Asri tetap dibayar sendiri olehnya (Pasal 9 ayat (2))"
        },
        jebakan: "Pasal 9 ayat (6) mengatur siapa yang membayar, bukan siapa yang terutang; kesepakatan itu hanya berlaku untuk dokumen yang disepakati, dan pembuat kuitansi bukan pihak yang terutang."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 2 ayat (1) huruf a (PPh final 2,5% pengalihan tanah/bangunan)", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 9 ayat (1), ayat (2), dan ayat (6) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-068", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Karya Bumi (pemilik alat), CV Tambang Jaya (penyewa), dan PT Penjamin Sentosa (penjamin) menandatangani perjanjian sewa alat berat pada 9 September 2026 dalam 3 rangkap asli, satu untuk tiap pihak. Pasal 14 perjanjian berbunyi: 'Seluruh bea meterai atas perjanjian ini ditanggung penyewa.' Kalimat yang paling tepat untuk memo kepatuhan CV Tambang Jaya adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Ketiga rangkap terutang bea meterai pada 9 September 2026 sebesar Rp10.000 karena merupakan satu perjanjian; Pasal 14 hanya menentukan pihak yang membayar, sehingga CV Tambang Jaya melunasi seluruhnya tanpa mengubah saat terutang.", B: "Ketiga rangkap terutang bea meterai pada saat masing-masing diserahkan kepada pemegangnya sebesar Rp30.000; Pasal 14 hanya menentukan pihak yang membayar, sehingga CV Tambang Jaya melunasi seluruhnya.", C: "Ketiga rangkap terutang bea meterai pada 9 September 2026 sebesar Rp30.000, tetapi Pasal 14 tidak berlaku karena undang-undang mewajibkan setiap pihak melunasi sendiri rangkap yang diterimanya.", D: "Ketiga rangkap terutang bea meterai pada 9 September 2026 sebesar Rp30.000; Pasal 14 hanya menentukan pihak yang membayar, sehingga CV Tambang Jaya melunasi seluruhnya tanpa mengubah saat terutang." },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Tiap rangkap asli terutang Rp10.000 saat ditandatangani. Kesepakatan dalam Pasal 14 sah menurut Pasal 9 dan hanya menentukan siapa yang membayar, tanpa mengubah jumlah dokumen maupun saat terutang.",
        jejakHitung: [],
        mengapaSalah: { A: "Setiap rangkap asli adalah dokumen tersendiri (Pasal 3 ayat (2) huruf a: surat perjanjian beserta rangkapnya)", B: "Surat perjanjian terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), bukan saat diserahkan", C: "Pasal 9 UU 10/2020 membolehkan para pihak bersepakat menentukan pihak yang membayar bea meterai" },
        jebakan: "Kesepakatan pembebanan mengubah siapa yang membayar, bukan jumlah dokumen atau saat terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020 (kesepakatan pihak yang membayar)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-069", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Staf pajak PT Arta Boga menyusun rekap bea meterai per bulan. Datanya: (1) surat perjanjian kerja sama ditandatangani PT Arta Boga dan mitranya pada 29 September 2026, rangkap mitra dikirim 2 Oktober 2026; (2) kuitansi penerimaan uang Rp9.000.000 ditandatangani kasir 30 September 2026 dan diserahkan kepada pembayar 1 Oktober 2026; (3) surat sanggup (promes) Rp200.000.000 yang diterbitkan PT Arta Boga selesai dibuat dan ditandatangani 28 September 2026, lalu diserahkan kepada bank 3 Oktober 2026; (4) surat pernyataan direksi ditandatangani 25 September 2026 dan diserahkan kepada bank 5 Oktober 2026; (5) kontrak dengan pemasok Jepang yang ditandatangani di Osaka 15 September 2026 dan pertama kali digunakan di Indonesia untuk pengajuan izin pada 7 Oktober 2026; (6) akta notaris perubahan anggaran dasar yang ditandatangani 30 September 2026. Dokumen yang bea meterainya terutang pada bulan September 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (3), dan (6)", B: "(1), (2), (3), (4), dan (6)", C: "(1) dan (6)", D: "(1), (3), (5), dan (6)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Perjanjian dan akta notaris terutang saat ditandatangani, surat berharga saat selesai dibuat, kuitansi dan surat pernyataan saat diserahkan, dan dokumen luar negeri saat digunakan di Indonesia.",
        jejakHitung: [ ["(1) Perjanjian", "29 September (tanda tangan)"], ["(2) Kuitansi", "1 Oktober (diserahkan)"], ["(3) Promes", "28 September (selesai dibuat)"], ["(4) Surat pernyataan", "5 Oktober (diserahkan)"], ["(5) Kontrak Osaka", "7 Oktober (digunakan di Indonesia)"], ["(6) Akta notaris", "30 September (tanda tangan)"] ],
        mengapaSalah: { B: "Memakai saat tanda tangan untuk semua dokumen; kuitansi dan surat pernyataan terutang saat diserahkan (Oktober)", C: "Surat berharga seperti promes terutang saat selesai dibuat (Pasal 8 ayat (1) huruf b), yaitu 28 September 2026", D: "Dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia (7 Oktober 2026), bukan saat ditandatangani di Osaka" },
        jebakan: "Tanggal pengiriman rangkap mitra (2 Oktober) dan penyerahan promes ke bank (3 Oktober) tidak menggeser saat terutang."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf a, b, c, dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf d UU 10/2020 (surat berharga)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-070", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      kutipan: "Pasal 1 UU 10/2020 (parafrase): tanda tangan adalah tanda tangan sebagaimana lazimnya dipergunakan, termasuk pula paraf, teraan atau cap tanda tangan atau cap paraf, teraan cap nama, atau tanda lainnya sebagai pengganti tanda tangan, dan tanda tangan elektronik. Pasal 8 ayat (1) huruf a (parafrase): Bea Meterai atas surat perjanjian beserta rangkapnya terutang pada saat dokumen dibubuhi tanda tangan.",
      stem: "PT Lumbung Pangan Nusantara dan 120 petani mitra menandatangani perjanjian kemitraan budi daya jagung pada 7 Oktober 2026. Setiap perjanjian dibuat 2 rangkap asli, satu untuk PT dan satu untuk petani. Direksi PT tidak membubuhkan tanda tangan basah, tetapi memakai cap tanda tangan direktur utama, sedangkan sebagian petani yang tidak dapat menulis membubuhkan cap jempol. Rangkap petani dibagikan pada 12 Oktober 2026. Tidak ada kesepakatan tentang pembebanan meterai. Berdasarkan kutipan tersebut, perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Seluruh 240 rangkap terutang pada 7 Oktober 2026 (Rp2.400.000); PT terutang atas 120 rangkap miliknya dan setiap petani atas rangkap yang diterimanya", B: "Tidak terutang, karena perjanjian tidak dibubuhi tanda tangan basah oleh direksi maupun sebagian petani", C: "Seluruh 240 rangkap terutang pada 12 Oktober 2026 saat rangkap petani dibagikan (Rp2.400.000); masing-masing pihak atas rangkap yang diterimanya", D: "Hanya 120 rangkap milik PT yang terutang pada 7 Oktober 2026 (Rp1.200.000), karena petani tidak membubuhkan tanda tangan" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Cap tanda tangan dan cap jempol termasuk tanda tangan, sehingga 240 rangkap terutang saat dibubuhi tanda tangan pada 7 Oktober 2026; dokumen yang dibuat dua pihak terutang oleh masing-masing pihak atas rangkap yang diterimanya.",
        jejakHitung: [ ["Jumlah rangkap 120 × 2", "240"], ["Bea meterai 240 × Rp10.000", "Rp2.400.000"], ["Saat terutang", "7 Oktober 2026"], ["Tanggungan PT / tiap petani", "Rp1.200.000 / Rp10.000"] ],
        mengapaSalah: { B: "Cap tanda tangan dan cap jempol termasuk 'tanda tangan' menurut Pasal 1", C: "Surat perjanjian terutang saat dibubuhi tanda tangan, bukan saat rangkap dibagikan", D: "Rangkap petani juga dibubuhi tanda tangan (cap jempol) dan terutang oleh petani penerima rangkap" },
        jebakan: "Bentuk tanda tangan (cap, paraf, elektronik) tidak menunda saat terutang."
      },
      dasarHukum: [ { pasal: "Pasal 1 UU 10/2020 (pengertian tanda tangan)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A5-071", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Sentra Elektronik (distributor, PKP, peredaran bruto 2025 Rp64 miliar) mencatat dokumen September 2026 berikut; para pihak tidak memperjanjikan lain tentang pembebanan meterai. (1) Enam kuitansi dari pemasok yang diterima PT Sentra masing-masing Rp4.900.000, Rp5.000.000, Rp5.100.000, Rp22.000.000, Rp68.000.000, dan Rp3.000.000; (2) sembilan kuitansi buatan PT Sentra yang diserahkan kepada pelanggan, semuanya di atas Rp5.000.000; (3) perjanjian distribusi tiga pihak dengan prinsipal dan perusahaan logistik dalam 3 rangkap asli, satu untuk tiap pihak; (4) promes Rp500.000.000 yang diterbitkan PT Sentra kepada bank; (5) surat pernyataan pelanggan yang menyetujui jadwal pengiriman barang, diserahkan kepada PT Sentra; (6) surat pernyataan PT Sentra yang diserahkan kepada bank; (7) tanda terima uang dari kasir gudang kepada kantor pusat PT Sentra Rp12.000.000; (8) kontrak dengan prinsipal Korea yang ditandatangani di Seoul 2 September 2026, rangkap PT Sentra, yang digunakan di Indonesia untuk pengajuan izin pada 18 September 2026. Bea meterai yang terutang oleh PT Sentra sendiri sebagai pihak yang terutang untuk September 2026 adalah ...",
      kataKualifikasi: ["sendiri sebagai pihak yang terutang"],
      opsi: { A: "Rp60.000", B: "Rp80.000", C: "Rp90.000", D: "Rp70.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PT Sentra terutang atas tiga kuitansi pemasok di atas Rp5.000.000 yang diterimanya, rangkap perjanjiannya, promes yang diterbitkannya, surat pernyataan yang diterimanya, dan kontrak Korea yang digunakannya di Indonesia sebagai penerima manfaat.",
        jejakHitung: [ ["(1) Kuitansi pemasok Rp5,1 juta, Rp22 juta, Rp68 juta", "3 dokumen"], ["(2) Kuitansi buatan PT Sentra", "terutang oleh pelanggan → 0"], ["(3) Rangkap perjanjian milik PT Sentra", "1 dokumen"], ["(4) Promes (penerbit)", "1 dokumen"], ["(5) Surat pernyataan yang diterima", "1 dokumen"], ["(6) Surat pernyataan yang diserahkan ke bank", "terutang oleh bank → 0"], ["(7) Tanda terima intern", "bukan objek (Pasal 7 huruf f)"], ["(8) Kontrak Korea, digunakan 18 September", "1 dokumen"], ["Total 7 × Rp10.000", "Rp70.000"] ],
        mengapaSalah: { A: "Menganggap promes terutang oleh bank penerima; surat berharga terutang oleh penerbitnya (Pasal 9)", B: "Menghitung kuitansi tepat Rp5.000.000 sebagai objek; syaratnya lebih dari Rp5.000.000", C: "Membebankan ketiga rangkap perjanjian distribusi kepada PT Sentra; tiap pihak terutang atas rangkap yang diterimanya" },
        jebakan: "Kuitansi buatan PT Sentra dan surat pernyataan yang diserahkannya kepada bank terutang oleh penerima masing-masing; peredaran bruto tidak relevan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2), Pasal 7 huruf f, dan Pasal 8 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-072", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Lestari Abadi didirikan dengan akta notaris tahun 2019; minuta akta saat itu dibubuhi meterai Rp6.000 sesuai UU 13/1985. Pada 12 Oktober 2026 perseroan meminta notaris menerbitkan satu salinan baru akta pendirian untuk pembukaan rekening bank, dan notaris menandatangani salinan tersebut pada hari itu. Pernyataan yang paling tepat mengenai bea meterai atas salinan baru tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Salinan akta notaris merupakan objek tersendiri yang terutang bea meterai Rp10.000 pada saat dibubuhi tanda tangan notaris, yaitu 12 Oktober 2026, sehingga dilunasi dengan tarif yang berlaku pada saat itu.", B: "Salinan akta notaris merupakan objek tersendiri yang terutang bea meterai Rp6.000 mengikuti tarif pada saat minuta akta ditandatangani tahun 2019, sehingga dilunasi dengan meterai lama.", C: "Salinan akta notaris tidak terutang bea meterai karena minuta akta yang menjadi dasarnya telah dibubuhi meterai pada tahun 2019.", D: "Salinan akta notaris merupakan objek tersendiri yang terutang bea meterai Rp10.000 ditambah sanksi 100% karena minuta akta dibuat lebih dari 5 tahun sebelumnya." },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Akta notaris beserta grosse, salinan, dan kutipannya terutang saat dibubuhi tanda tangan. Salinan yang ditandatangani notaris pada 2026 adalah dokumen baru yang terutang Rp10.000 menurut UU 10/2020.",
        jejakHitung: [],
        mengapaSalah: { B: "Saat terutang salinan adalah 12 Oktober 2026, sehingga berlaku tarif UU 10/2020; meterai Rp6.000 tidak sah sejak 2022", C: "Pasal 3 ayat (2) huruf b menyebut akta notaris beserta grosse, salinan, dan kutipannya; tiap salinan adalah dokumen tersendiri", D: "Salinan baru terutang pada 12 Oktober 2026 dan dapat dilunasi tepat waktu; usia minuta tidak menimbulkan sanksi" },
        jebakan: "Tahun pembuatan minuta tidak menentukan tarif salinan; yang menentukan adalah saat salinan ditandatangani."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf b dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-073", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-06",
      stem: "Data untuk tiga soal berurutan (PT Mitra Bangun). PT Mitra Bangun menggugat CV Karya Abadi atas wanprestasi pembangunan gudang. Pada sidang pembuktian 18 November 2026, PT Mitra Bangun akan mengajukan alat bukti: (1) rangkap surat perjanjian pemborongan miliknya yang ditandatangani 6 Januari 2025 dan sejak awal dibubuhi meterai elektronik sah; (2) rangkap adendum miliknya yang ditandatangani 3 Maret 2025 tanpa meterai; (3) empat kuitansi termin yang dibuat CV Karya Abadi dan diterima PT Mitra Bangun pada 2025, yaitu Rp250.000.000 dan Rp180.000.000 (keduanya tanpa meterai), Rp4.800.000 (tanpa meterai), serta Rp75.000.000 (dibubuhi meterai tempel Rp10.000 yang sah); (4) enam cetakan surel dan percakapan aplikasi pesan; (5) surat pernyataan CV Karya Abadi yang diserahkan kepada PT Mitra Bangun pada 10 Mei 2025 tanpa meterai. Tidak ada kesepakatan tentang pembebanan meterai, dan seluruh dokumen belum daluwarsa. Jumlah yang harus dilunasi PT Mitra Bangun melalui pemeteraian kemudian sebelum alat bukti diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp160.000", B: "Rp150.000", C: "Rp170.000", D: "Rp90.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen objek yang tidak dilunasi pada saat terutang dimeteraikan kemudian dengan pokok + sanksi 100%; dokumen yang semula bukan objek dan baru terutang karena diajukan ke pengadilan cukup pokok; dokumen yang sudah lunas tidak dimeteraikan lagi.",
        jejakHitung: [ ["(1) Perjanjian bermeterai elektronik sah", "Rp0"], ["(2) Adendum tanpa meterai (terutang sejak 3 Maret 2025)", "Rp10.000 + Rp10.000 = Rp20.000"], ["(3) Kuitansi Rp250 juta dan Rp180 juta", "2 × Rp20.000 = Rp40.000"], ["(3) Kuitansi Rp4.800.000 (semula bukan objek)", "Rp10.000 tanpa sanksi"], ["(3) Kuitansi Rp75 juta bermeterai sah", "Rp0"], ["(4) Enam cetakan surel/percakapan", "6 × Rp10.000 = Rp60.000"], ["(5) Surat pernyataan tanpa meterai", "Rp20.000"], ["Total", "Rp150.000"] ],
        mengapaSalah: { A: "Mengenakan sanksi 100% pada kuitansi Rp4.800.000; dokumen yang semula bukan objek dan baru terutang karena diajukan sebagai alat bukti cukup Rp10.000", C: "Memeteraikan ulang perjanjian dan kuitansi Rp75.000.000 yang sudah lunas; bea meterai dikenakan satu kali untuk setiap dokumen", D: "Mengabaikan cetakan surel dan percakapan; setiap dokumen yang diajukan sebagai alat bukti adalah objek (Pasal 3 ayat (1) huruf b)" },
        jebakan: "Nilai kontrak dan termin tidak relevan; yang membedakan Rp0, Rp10.000, dan Rp20.000 adalah status pelunasan sebelum dokumen diajukan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 4 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-074", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1, kasusId: "V-A5-06",
      stem: "Lanjutan data PT Mitra Bangun. Enam cetakan surel dan percakapan aplikasi pesan yang sebagian besar dibuat dan dikirim oleh CV Karya Abadi dicetak oleh PT Mitra Bangun dan diajukannya sebagai alat bukti pada sidang 18 November 2026. Saat terutang dan pihak yang terutang bea meterai atas cetakan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Saat diajukan ke pengadilan (18 November 2026); terutang oleh PT Mitra Bangun sebagai pihak yang mengajukan", B: "Saat surel dan pesan dikirim; terutang oleh CV Karya Abadi sebagai pembuatnya", C: "Saat diajukan ke pengadilan (18 November 2026); terutang oleh CV Karya Abadi sebagai pembuat dokumen", D: "Saat putusan berkekuatan hukum tetap; terutang oleh pihak yang kalah" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen yang digunakan sebagai alat bukti terutang saat diajukan ke pengadilan dan terutang oleh pihak yang mengajukannya.",
        jejakHitung: [],
        mengapaSalah: { B: "Dokumen alat bukti terutang saat diajukan ke pengadilan (Pasal 8 ayat (1) huruf d), bukan saat dibuat atau dikirim", C: "Pasal 9: dokumen alat bukti terutang oleh pihak yang mengajukan, bukan pembuatnya", D: "Bea meterai bukan biaya perkara yang dibebankan kepada pihak yang kalah" },
        jebakan: "Pembuat surel tidak relevan; yang menentukan adalah siapa yang mengajukan dokumen ke pengadilan."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 8 ayat (1) huruf d UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020 (pihak yang mengajukan alat bukti)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-075",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-06",
      kutipan: "Pasal 21 ayat (1) UU 10/2020 beserta penjelasannya (parafrase): pejabat yang berwenang, antara lain hakim, panitera, jurusita, notaris, pejabat pembuat akta tanah, pegawai aparatur sipil negara, anggota TNI/Polri, dan pejabat negara, dilarang menerima, mempertimbangkan, atau menyimpan dokumen yang bea meterainya tidak atau kurang dibayar. Pasal 1 angka 6 (parafrase): pemeteraian kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan oleh Menteri.",
      stem: "Lanjutan data PT Mitra Bangun. Kuasa hukum PT Mitra Bangun mengusulkan agar alat bukti diajukan dulu pada sidang 18 November 2026, sedangkan kekurangan bea meterai sebesar Rp150.000 dilunasi setelah putusan bila PT Mitra Bangun menang. Berdasarkan kutipan tersebut, langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Melunasi Rp150.000 sebelum sidang, yaitu bea meterai dengan meterai tempel dan sanksi administratif dengan kode billing (SSP), lalu memperoleh pengesahan pemeteraian kemudian dari Pejabat DJP, karena hakim tidak dibenarkan mempertimbangkan dokumen yang bea meterainya belum dilunasi", B: "Mengajukan alat bukti terlebih dahulu pada sidang 18 November 2026 dan membayar Rp150.000 setelah putusan, karena larangan Pasal 21 hanya berlaku bagi notaris dan PPAT, bukan bagi hakim", C: "Melunasi Rp150.000 sebelum sidang, yaitu bea meterai dengan meterai tempel dan sanksi administratif dengan kode billing (SSP), lalu meminta panitera pengadilan negeri mengesahkan pemeteraian kemudian pada saat alat bukti didaftarkan dalam persidangan", D: "Cukup menempelkan meterai tempel Rp10.000 pada setiap dokumen sebelum sidang tanpa pengesahan pejabat mana pun, karena meterai tempel sekaligus melunasi pokok dan sanksinya" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pemeteraian kemudian harus dituntaskan sebelum alat bukti diajukan: bea meterai dibayar dengan meterai (tempel atau elektronik), sanksi administratif dibayar dengan SSP (Pasal 50 PMK 78/2024), lalu pembayaran disahkan pejabat yang ditetapkan Menteri. Karena ada sanksi yang dibayar dengan SSP, pengesahnya Pejabat DJP (Pasal 51 ayat (4) dan (5)); Pejabat Pos hanya mengesahkan pembayaran dengan meterai tempel. Tanpa itu, hakim dan panitera dilarang menerima atau mempertimbangkan dokumen tersebut (Pasal 21 UU 10/2020).",
        jejakHitung: [
          ["Bea meterai 11 dokumen × Rp10.000 (meterai tempel)", "Rp110.000"],
          ["Sanksi 100% atas 4 dokumen yang lewat saat terutang (SSP/kode billing)", "Rp40.000"],
          ["Jumlah dilunasi", "Rp150.000"],
          ["Pengesah", "Pejabat DJP (Pasal 51 ayat (4) PMK 78/2024)"]
        ],
        mengapaSalah: {
          B: "Penjelasan Pasal 21 ayat (1) UU 10/2020 menyebut hakim, panitera, dan jurusita sebagai pejabat yang berwenang; larangan berlaku sebelum dokumen diterima atau dipertimbangkan",
          C: "Pengesahan dilakukan pejabat yang ditetapkan Menteri, yaitu Pejabat Pos atau Pejabat DJP (Pasal 51 ayat (1) PMK 78/2024), bukan panitera",
          D: "Sanksi administratif dibayar dengan SSP, bukan dengan meterai tempel (Pasal 50 ayat (2) PMK 78/2024), dan pemeteraian kemudian baru sah setelah disahkan pejabat"
        },
        jebakan: "Pemeteraian kemudian bukan sekadar membayar: pokok dibayar dengan meterai, sanksi dengan SSP, lalu disahkan pejabat. Kode billing (SSP) untuk pokok hanya dipakai bila lebih dari 50 dokumen atau meterai tidak dapat digunakan (Pasal 42 PMK 78/2024)."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 6, Pasal 17, Pasal 18, dan Pasal 21 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 42, Pasal 50, dan Pasal 51 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-076", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "PT Inti Pangan menyiapkan kalimat baku untuk SOP pemeteraian. Sebagai contoh kasus, perusahaan menandatangani kontrak pemasokan setebal 64 halaman bernilai Rp7.800.000.000 dalam satu rangkap asli yang dibubuhi meterai elektronik sah pada saat ditandatangani; dua tahun kemudian kontrak itu diajukan sebagai alat bukti di pengadilan niaga. Kalimat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Bea meterai dikenakan satu kali untuk setiap dokumen dengan tarif tetap Rp10.000 tanpa memperhatikan nilai dan jumlah halaman, tetapi kontrak yang telah lunas wajib dimeteraikan kemudian sekali lagi ketika diajukan sebagai alat bukti di pengadilan.", B: "Bea meterai dikenakan satu kali untuk setiap dokumen dengan tarif Rp10.000 untuk setiap kelipatan Rp5.000.000 nilai dokumen, sehingga kontrak yang telah lunas tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti di pengadilan.", C: "Bea meterai dikenakan satu kali untuk setiap dokumen dengan tarif tetap Rp10.000 tanpa memperhatikan nilai dan jumlah halaman, sehingga kontrak yang telah lunas tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti di pengadilan.", D: "Bea meterai dikenakan satu kali untuk setiap penanda tangan dokumen dengan tarif tetap Rp10.000 tanpa memperhatikan nilai dan jumlah halaman, sehingga kontrak yang telah lunas tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti di pengadilan." },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 4 menetapkan bea meterai dikenakan satu kali untuk setiap dokumen dan Pasal 5 menetapkan tarif tetap Rp10.000. Kontrak yang sudah lunas tetap lunas ketika kemudian diajukan sebagai alat bukti.",
        jejakHitung: [],
        mengapaSalah: { A: "Pasal 4: bea meterai dikenakan satu kali untuk setiap dokumen; dokumen yang sudah lunas tidak dimeteraikan ulang", B: "Tarif bea meterai tetap per dokumen (Pasal 5), tidak proporsional terhadap nilai", D: "Satuan pengenaan adalah dokumen, bukan penanda tangan" },
        jebakan: "Nilai Rp7,8 miliar, 64 halaman, dan pengajuan ke pengadilan adalah pengalih; satu dokumen lunas cukup satu kali bea meterai."
      },
      dasarHukum: [ { pasal: "Pasal 4 dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-077", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "PT Edukasi Cerdas Nusantara, penyelenggara kursus persiapan ujian, belum ditetapkan sebagai pemungut bea meterai. Dalam syarat dan ketentuan pendaftaran, perusahaan menyatakan menanggung bea meterai atas kuitansi elektronik peserta. Pada September 2026 perusahaan menerbitkan dan mengirimkan 1.240 kuitansi elektronik pembayaran paket kursus: 860 kuitansi masing-masing Rp5.250.000, 300 kuitansi masing-masing Rp5.000.000, dan 80 kuitansi masing-masing Rp4.750.000. Meterai elektronik dibeli melalui distributor resmi seharga Rp10.000 per meterai ditambah biaya layanan pembubuhan Rp1.500 per dokumen. Jumlah bea meterai yang harus dilunasi untuk September 2026, tidak termasuk biaya layanan, adalah ...",
      kataKualifikasi: ["tidak termasuk"],
      opsi: { A: "Rp11.600.000", B: "Rp9.890.000", C: "Rp12.400.000", D: "Rp8.600.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya kuitansi lebih dari Rp5.000.000 yang terutang dan dilunasi dengan meterai elektronik Rp10.000 per dokumen; kesepakatan bahwa perusahaan menanggung bea meterai sah menurut Pasal 9, dan biaya layanan distributor bukan bagian dari bea meterai.",
        jejakHitung: [ ["Kuitansi Rp5.250.000 (> Rp5 juta)", "860 dokumen"], ["Kuitansi Rp5.000.000 dan Rp4.750.000", "tidak terutang"], ["Bea meterai 860 × Rp10.000", "Rp8.600.000"], ["Biaya layanan 860 × Rp1.500 (bukan bea meterai)", "Rp1.290.000"] ],
        mengapaSalah: { A: "Ikut menghitung 300 kuitansi tepat Rp5.000.000; syaratnya lebih dari Rp5.000.000", B: "Memasukkan biaya layanan Rp1.500 per dokumen; biaya layanan bukan bea meterai", C: "Menganggap seluruh kuitansi terutang tanpa ambang nilai" },
        jebakan: "Menerbitkan lebih dari seribu dokumen sebulan tidak otomatis menjadikan perusahaan pemungut; tanpa penetapan, setiap kuitansi dilunasi dengan meterai."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g, Pasal 5, dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PP 86/2021 (meterai elektronik)", berlakuSejak: "2021-08-19" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-078", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) huruf e UU 10/2020 (parafrase): Bea Meterai atas dokumen yang dibuat di luar negeri terutang pada saat dokumen digunakan di Indonesia. Pasal 12 (parafrase): Bea Meterai dibayar dengan menggunakan meterai atau surat setoran pajak; meterai berupa meterai tempel, meterai elektronik, atau meterai dalam bentuk lain yang ditetapkan Menteri.",
      stem: "PT Samudra Nusa menerima dua dokumen dari Singapura yang ditandatangani di sana pada 1 Oktober 2026: (1) perjanjian pinjaman berbentuk PDF dengan tanda tangan elektronik; (2) surat pernyataan penjaminan dari induk perusahaan berbentuk kertas. Kedua dokumen akan digunakan PT Samudra Nusa di Indonesia pada 4 November 2026 untuk pendaftaran jaminan, dan PT Samudra Nusa adalah pihak yang menerima manfaat. Berdasarkan kutipan tersebut, cara pelunasan yang tepat agar tidak timbul sanksi adalah ...",
      kataKualifikasi: ["agar tidak timbul sanksi"],
      opsi: { A: "Melunasi Rp10.000 untuk setiap dokumen paling lambat 4 November 2026, keduanya hanya dengan meterai tempel karena dokumen dibuat di luar negeri", B: "Melunasi Rp20.000 untuk setiap dokumen karena dokumen tidak dibubuhi meterai pada saat ditandatangani di Singapura", C: "Tidak perlu melunasi bea meterai karena dokumen ditandatangani di luar wilayah Indonesia", D: "Melunasi Rp10.000 untuk setiap dokumen paling lambat 4 November 2026: perjanjian PDF dengan meterai elektronik, surat pernyataan kertas dengan meterai tempel atau surat setoran pajak" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen luar negeri terutang saat digunakan di Indonesia oleh penerima manfaat. Bila dilunasi paling lambat saat itu, cukup Rp10.000 per dokumen, dengan sarana yang sesuai bentuk dokumen: meterai elektronik untuk PDF, meterai tempel atau SSP untuk kertas.",
        jejakHitung: [],
        mengapaSalah: { A: "Dokumen elektronik dilunasi dengan meterai elektronik; meterai tempel untuk dokumen kertas", B: "Dokumen luar negeri baru terutang saat digunakan di Indonesia; pelunasan sebelum saat itu tanpa sanksi", C: "Pasal 8 ayat (1) huruf e menjadikan dokumen luar negeri terutang saat digunakan di Indonesia" },
        jebakan: "Tanggal tanda tangan di Singapura (1 Oktober) bukan saat terutang; sanksi baru timbul bila dokumen sudah digunakan tanpa dilunasi."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-079", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Reviu internal PT Data Sentosa pada 20 Oktober 2026 atas dokumen Januari–September 2026 (seluruhnya dokumen atau rangkap yang terutang oleh PT Data Sentosa, belum daluwarsa, dan tidak pernah diajukan ke pengadilan) menemukan: (1) 40 kontrak PDF bertanda tangan elektronik, 25 di antaranya dibubuhi meterai elektronik sah, sedangkan 15 hanya ditempeli gambar meterai elektronik hasil tangkapan layar dari kontrak lain; (2) 12 perjanjian kertas, 9 ditempeli meterai tempel Rp10.000 desain 2021 yang sah sesuai tata cara, sedangkan 3 ditempeli meterai tempel bekas yang dilepas staf dari dokumen lama; (3) 6 kuitansi Rp4.000.000 tanpa meterai yang diterima perusahaan. Jumlah yang harus dibayar PT Data Sentosa melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp300.000", B: "Rp180.000", C: "Rp360.000", D: "Rp480.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Gambar meterai elektronik hasil salinan dan meterai tempel bekas tidak melunasi bea meterai, sehingga 18 dokumen dianggap tidak dibayar dan dimeteraikan kemudian dengan pokok + sanksi 100%.",
        jejakHitung: [ ["Kontrak dengan gambar tangkapan layar", "15 dokumen"], ["Perjanjian dengan meterai bekas", "3 dokumen"], ["Dokumen tidak dilunasi", "18"], ["18 × (Rp10.000 + Rp10.000)", "Rp360.000"], ["Kuitansi Rp4.000.000", "bukan objek"] ],
        mengapaSalah: { A: "Menganggap meterai tempel bekas tetap melunasi bea meterai; meterai yang sudah dipakai tidak dapat melunasi dokumen lain", B: "Hanya menghitung pokok; dokumen yang tidak dilunasi pada saat terutang dikenai sanksi 100%", D: "Ikut menghitung 6 kuitansi Rp4.000.000 yang bukan objek" },
        jebakan: "Selain sanksi administratif, pemakaian meterai bekas dengan sengaja diancam pidana (Pasal 26); yang ditanya di sini hanya jumlah pemeteraian kemudian."
      },
      dasarHukum: [ { pasal: "Pasal 12, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 26 UU 10/2020 (meterai bekas); PP 86/2021", berlakuSejak: "2021-08-19" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-080", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Pada 7 Oktober 2026 Bank Danamas dan PT Sinar Logam menandatangani akta perjanjian kredit di hadapan notaris. Notaris menyimpan minuta akta dan pada hari yang sama menandatangani serta menerbitkan satu grosse akta untuk bank, dua salinan akta untuk bank dan debitur, dan satu kutipan akta untuk penjamin. Bagian administrasi bank kemudian membuat 3 fotokopi tanpa tanda tangan untuk arsip. Total bea meterai atas akta tersebut beserta turunannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp40.000", C: "Rp80.000", D: "Rp10.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Akta notaris beserta grosse, salinan, dan kutipannya masing-masing terutang Rp10.000 saat dibubuhi tanda tangan; fotokopi tanpa tanda tangan tidak terutang.",
        jejakHitung: [ ["Minuta akta", "Rp10.000"], ["Grosse akta", "Rp10.000"], ["Dua salinan", "Rp20.000"], ["Satu kutipan", "Rp10.000"], ["Tiga fotokopi tanpa tanda tangan", "tidak terutang"], ["Total", "Rp50.000"] ],
        mengapaSalah: { B: "Menganggap grosse akta bukan objek; Pasal 3 ayat (2) huruf b mencakup grosse, salinan, dan kutipan", C: "Ikut menghitung 3 fotokopi tanpa tanda tangan", D: "Menganggap akta beserta seluruh turunannya satu dokumen" },
        jebakan: "Grosse dan kutipan sering terlupa; keduanya disebut tegas dalam Pasal 3 ayat (2) huruf b."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf b dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-081", topik: "A5.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Tuan Yusuf memperoleh pembiayaan kendaraan dari PT Pembiayaan Maju. Pada 9 Oktober 2026 ia menandatangani perjanjian pembiayaan Rp240.000.000 setebal 18 halaman dalam 2 rangkap asli, dan pada hari yang sama menerima dari dealer kuitansi tanda terima uang muka Rp48.000.000. Total bea meterai atas dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000", B: "Rp18.000", C: "Rp30.000", D: "Rp10.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dua rangkap perjanjian dan satu kuitansi di atas Rp5.000.000 masing-masing terutang Rp10.000.",
        jejakHitung: [ ["Perjanjian 2 rangkap", "Rp20.000"], ["Kuitansi uang muka Rp48.000.000", "Rp10.000"], ["Total", "Rp30.000"] ],
        mengapaSalah: { A: "Menghitung perjanjian 2 rangkap sebagai satu dokumen", B: "Memakai tarif lama Rp6.000 per dokumen", D: "Menganggap hanya kuitansi di atas Rp5.000.000 yang terutang; surat perjanjian terutang tanpa ambang nilai" },
        jebakan: "Jumlah halaman dan nilai pembiayaan tidak memengaruhi tarif."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A5-082", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A5-07",
      stem: "Data untuk empat soal berurutan (PT Kasir Awan Indonesia). PT Kasir Awan Indonesia, penyelenggara platform pembayaran, ditetapkan sebagai pemungut bea meterai dengan keputusan Kepala KPP sejak Maret 2026. Rekap Masa Oktober 2026 atas dokumen tanda terima pembayaran digital yang difasilitasinya: 18.640 dokumen bernilai lebih dari Rp5.000.000, di antaranya 140 dokumen dibatalkan sebelum diterbitkan sehingga tidak pernah diserahkan kepada pengguna; 5.210 dokumen bernilai tepat Rp5.000.000; dan 62.400 dokumen bernilai di bawah Rp5.000.000. Bea meterai atas dokumen yang diterbitkan dipungut dari pengguna sebagai pihak yang terutang. Total nilai transaksi Masa Oktober 2026 Rp312 miliar dan pendapatan biaya platform Rp1,9 miliar. Bea meterai yang wajib dipungut dan disetor untuk Masa Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp186.400.000", B: "Rp185.000.000", C: "Rp237.100.000", D: "Rp861.100.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Objek pemungutan hanya tanda terima bernilai lebih dari Rp5.000.000 yang benar-benar diterbitkan kepada pengguna: 18.640 − 140 = 18.500 dokumen × Rp10.000.",
        jejakHitung: [ ["Dokumen > Rp5 juta", "18.640"], ["Dikurangi dokumen batal (tidak pernah diserahkan)", "(140)"], ["Dokumen objek", "18.500"], ["Bea meterai 18.500 × Rp10.000", "Rp185.000.000"], ["Dokumen tepat Rp5 juta dan di bawahnya", "bukan objek"] ],
        mengapaSalah: { A: "Ikut menghitung 140 dokumen yang dibatalkan dan tidak pernah diserahkan; tanpa penyerahan tidak ada saat terutang", C: "Ikut menghitung 5.210 dokumen tepat Rp5.000.000; syaratnya lebih dari Rp5.000.000", D: "Mengabaikan ambang Pasal 3 ayat (2) huruf g sehingga seluruh dokumen dianggap objek" },
        jebakan: "Nilai transaksi Rp312 miliar dan biaya platform tidak menentukan; bea meterai dihitung per dokumen yang terutang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 10–11 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-083",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      kasusId: "V-A5-07",
      formulirRef: "BM.induk.2",
      stem: "Lanjutan data PT Kasir Awan Indonesia (bea meterai Masa Oktober 2026 atas 18.500 dokumen objek). Pada induk SPT Masa Bea Meterai (Lampiran huruf F PER-11/PJ/2025), Bagian B memuat jumlah dokumen yang dipungut (kolom b) dan bea meterai yang dipungut (kolom c) per jenis objek, sedangkan Bagian D angka 1 memuat bea meterai kurang atau (lebih) disetor. Pemungut telah menyetor Rp185.000.000 dengan kode billing pada Jumat, 13 November 2026, sebelum menyampaikan SPT. Isian Bagian B angka 4a (dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000 yang menyebutkan penerimaan uang) dan Bagian D angka 1 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bagian B angka 4a: 23.710 dokumen, Rp237.100.000; Bagian D angka 1: Rp237.100.000", B: "Bagian B angka 4a: 18.500 dokumen, Rp185.000.000; Bagian D angka 1: Rp185.000.000", C: "Bagian B angka 4a: 18.640 dokumen, Rp186.400.000; Bagian D angka 1: Rp186.400.000", D: "Bagian B angka 4a: 18.500 dokumen, Rp185.000.000; Bagian D angka 1: nihil, karena Rp185.000.000 telah disetor sebelum SPT disampaikan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Bagian B angka 4a hanya memuat tanda terima bernilai lebih dari Rp5.000.000 yang benar-benar diserahkan dan dipungut (18.500; Rp185.000.000). Menurut petunjuk pengisian Lampiran huruf F PER-11/PJ/2025, Bagian D angka 1 diisi sesuai baris JUMLAH kolom c Bagian C (cara pemungutan), yaitu Rp185.000.000; induk resmi tidak memuat baris tersendiri untuk bea meterai yang sudah disetor, sehingga setoran 13 November 2026 tidak mengurangi isian D.1.",
        jejakHitung: [
          ["Bagian B angka 4a kolom b: dokumen objek 18.640 − 140 batal", "18.500"],
          ["Bagian B angka 4a kolom c: 18.500 × Rp10.000", "Rp185.000.000"],
          ["Bagian C baris JUMLAH kolom c", "Rp185.000.000"],
          ["Bagian D angka 1 (sesuai JUMLAH kolom c Bagian C)", "Rp185.000.000"]
        ],
        mengapaSalah: {
          A: "Memasukkan 5.210 dokumen tepat Rp5.000.000 yang bukan objek (syaratnya lebih dari Rp5.000.000)",
          C: "Memasukkan 140 dokumen batal yang tidak pernah diserahkan sehingga tidak pernah terutang",
          D: "Bagian D angka 1 diisi sesuai JUMLAH kolom c Bagian C, bukan sisa setelah dikurangi setoran yang sudah dilakukan; induk resmi tidak memuat baris bea meterai yang telah disetor"
        },
        jebakan: "Dokumen bukan objek dan dokumen batal tidak masuk SPT Masa. Label \"kurang atau (lebih) disetor\" memancing peserta mengurangkan setoran, padahal petunjuk pengisian mengaitkan D.1 dengan JUMLAH kolom c Bagian C."
      },
      dasarHukum: [{ pasal: "Pasal 78 ayat (2) dan Lampiran huruf F PER-11/PJ/2025 (induk SPT Masa Bea Meterai Bagian B, C, dan D)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 60, Pasal 61 huruf c, dan Pasal 63 ayat (1) PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 3 ayat (2) huruf g, Pasal 8 ayat (1) huruf c, Pasal 10-11 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-084",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-07",
      kutipan: "PMK 78/2024 Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 (parafrase): bea meterai yang dipungut untuk setiap Masa Pajak wajib disetor, dan SPT Masa Bea Meterai wajib disampaikan, paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir; dalam hal batas akhir penyetoran dan pelaporan itu merupakan hari libur (hari Sabtu, hari Minggu, hari libur nasional, hari yang diliburkan untuk Pemilihan Umum, atau cuti bersama secara nasional), penyetoran dan pelaporan dapat dilakukan paling lama pada hari kerja berikutnya. PMK 81/2024 memuat tenggat yang sama (Pasal 94 ayat (2) huruf k dan Pasal 100 untuk setor; Pasal 171 ayat (18) dan Pasal 173 untuk lapor).",
      stem: "Lanjutan data PT Kasir Awan Indonesia. Tim pajak menyusun prosedur pelunasan dan pelaporan bea meterai Masa Oktober 2026 sebesar Rp185.000.000 melalui Coretax. Tanggal 15 November 2026 jatuh pada hari Minggu dan 16 November 2026 hari kerja. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN paling lambat Senin, 16 November 2026, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik paling lambat Jumat, 20 November 2026", B: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Jumat, 13 November 2026, karena tenggat pada hari libur dimajukan", C: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Senin, 30 November 2026, mengikuti tenggat akhir bulan", D: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Senin, 16 November 2026" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setor (Pasal 63 ayat (1) PMK 78/2024) dan lapor (Pasal 64 ayat (1)) pemungut sama-sama paling lambat tanggal 15 bulan berikutnya; karena 15 November 2026 hari Minggu, keduanya bergeser ke Senin, 16 November 2026 (Pasal 65 PMK 78/2024; padanannya Pasal 100 dan Pasal 173 PMK 81/2024). Bukti setor adalah NTPN dan bukti lapor adalah bukti penerimaan elektronik dari Coretax.",
        jejakHitung: [
          ["Dokumen objek 18.500 × Rp10.000", "Rp185.000.000"],
          ["Tenggat setor dan lapor: 15 November 2026", "hari Minggu"],
          ["Bergeser ke hari kerja berikutnya (Pasal 65 PMK 78/2024)", "Senin, 16 November 2026"]
        ],
        mengapaSalah: {
          A: "Tenggat lapor tanggal 20 adalah ketentuan lama PMK 151/2021; kini setor dan lapor sama-sama tanggal 15",
          B: "Tenggat yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan dimajukan",
          C: "Tenggat akhir bulan berikutnya berlaku untuk SPT Masa PPN, bukan untuk bea meterai pemungut"
        },
        jebakan: "Tenggat bea meterai pemungut tidak sama dengan SPT Masa PPh (tanggal 20) maupun SPT Masa PPN (akhir bulan)."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 PMK 78/2024 (tenggat setor dan lapor pemungut; hari libur)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 94 ayat (2) huruf k dan Pasal 100 PMK 81/2024 (setor); Pasal 171 ayat (18) dan Pasal 173 PMK 81/2024 (lapor)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Masa Bea Meterai di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-085",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-07",
      stem: "Lanjutan data PT Kasir Awan Indonesia. Pemeriksaan pada Oktober 2026 atas Masa Juli 2026 (SPT Masa disampaikan tepat waktu) menemukan: (1) bea meterai atas 1.200 tanda terima bernilai lebih dari Rp5.000.000 telah dipungut dari pengguna tetapi tidak disetor; (2) bea meterai atas 300 tanda terima lain bernilai lebih dari Rp5.000.000 sama sekali tidak dipungut karena kesalahan sistem; (3) bea meterai atas 15.000 dokumen telah dipungut dan disetor penuh pada 28 Agustus 2026, padahal jatuh tempo efektifnya 18 Agustus 2026 (15–17 Agustus hari libur). Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Total sanksi administratif, di luar pokok, yang dikenakan kepada PT Kasir Awan adalah ...",
      kataKualifikasi: ["di luar pokok"],
      opsi: { A: "Rp16.515.000", B: "Rp13.515.000", C: "Rp17.760.000", D: "Rp165.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 11 membedakan: bea meterai yang tidak dipungut atau tidak disetor ditetapkan dengan SKP sebesar pokok + sanksi 100%, sedangkan setoran penuh yang terlambat ditagih STP berupa bunga Pasal 9 ayat (2a) UU KUP.",
        jejakHitung: [
          ["Dokumen tidak disetor + tidak dipungut", "1.200 + 300 = 1.500"],
          ["Pokok dalam SKP 1.500 × Rp10.000", "Rp15.000.000"],
          ["Sanksi 100% dalam SKP", "Rp15.000.000"],
          ["Setoran terlambat 15.000 × Rp10.000", "Rp150.000.000"],
          ["Lama terlambat 18–28 Agustus (bagian bulan = 1 bulan)", "1 bulan"],
          ["Bunga STP = 150.000.000 × 1,01% × 1", "Rp1.515.000"],
          ["Total sanksi", "Rp16.515.000"]
        ],
        mengapaSalah: {
          B: "Tidak mengenakan sanksi atas 300 dokumen yang tidak dipungut; Pasal 11 mencakup bea meterai yang tidak dipungut maupun tidak disetor",
          C: "Memakai tarif bunga Pasal 13 ayat (2) 1,84%; keterlambatan setor memakai tarif Pasal 9 ayat (2a)",
          D: "Mengenakan sanksi 100% juga atas setoran yang lengkap tetapi terlambat; itu ditagih STP berupa bunga"
        },
        jebakan: "Keterlambatan 10 hari tetap dihitung 1 bulan bunga; jatuh tempo efektif sudah bergeser karena hari libur."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan Agustus 2026 (tarif pada tanggal dimulainya penghitungan sanksi, 18 Agustus 2026; 1,01% di soal ini anggapan)", berlakuSejak: "2026-08-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-086", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "PMK 78/2024 (parafrase): pihak tertentu ditetapkan sebagai pemungut bea meterai dengan keputusan Kepala KPP; pemungut wajib memungut bea meterai atas dokumen tertentu, menyetorkannya ke kas negara, dan melaporkannya dalam SPT Masa Bea Meterai. Meterai elektronik didistribusikan langsung kepada pemungut tanpa mekanisme deposit.",
      stem: "PT Belanja Kilat, pengelola marketplace, menerima keputusan Kepala KPP tertanggal 20 Oktober 2026 yang menetapkannya sebagai pemungut bea meterai mulai Masa November 2026. Pada Oktober 2026 platform itu memfasilitasi 9.000 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000. Berdasarkan kutipan tersebut, kalimat yang paling tepat untuk SOP perusahaan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kewajiban memungut, menyetor, dan melaporkan bea meterai berlaku surut sejak Masa Oktober 2026 karena perusahaan telah memenuhi kriteria sebelum keputusan terbit; atas tanda terima Oktober 2026, perusahaan wajib memungutnya.", B: "Kewajiban memungut, menyetor, dan melaporkan bea meterai berlaku sejak Masa November 2026 sesuai keputusan penetapan, setelah perusahaan menyetor deposit untuk memperoleh meterai elektronik dari Peruri.", C: "Kewajiban memungut, menyetor, dan melaporkan bea meterai berlaku sejak Masa November 2026 sesuai keputusan penetapan; atas tanda terima Oktober 2026, bea meterai tidak terutang karena perusahaan belum berstatus pemungut.", D: "Kewajiban memungut, menyetor, dan melaporkan bea meterai berlaku sejak Masa November 2026 sesuai keputusan penetapan; atas tanda terima Oktober 2026, bea meterai tetap terutang dan dilunasi dengan meterai oleh pihak yang terutang." },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Status pemungut lahir dari keputusan Kepala KPP dan berlaku sejak masa yang ditetapkan. Sebelum itu, bea meterai atas dokumen objek tetap terutang dan dilunasi oleh pihak yang terutang dengan meterai.",
        jejakHitung: [],
        mengapaSalah: { A: "Kedudukan pemungut berlaku sejak masa yang ditetapkan dalam keputusan, bukan surut", B: "Mekanisme deposit PMK 151/2021 dihapus PMK 78/2024", C: "Status pemungut tidak menentukan terutangnya bea meterai; dokumen objek tetap terutang oleh pihak yang terutang" },
        jebakan: "Status pemungut hanya mengubah cara pelunasan (dipungut), bukan apakah dokumen terutang."
      },
      dasarHukum: [ { pasal: "Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (penetapan pemungut, tanpa deposit)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-087",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      formulirRef: "BM.l1.1",
      stem: "Bank Anugerah Jaya, pemungut bea meterai atas cek, bilyet giro, dan tanda terima pembayaran digital, menyusun rincian jumlah dokumen dan bea meterai yang dipungut berdasarkan objek bea meterai untuk SPT Masa Bea Meterai Masa November 2026. Data November 2026: bank menerima dari perusahaan percetakan pemegang izin pembuatan Meterai Percetakan 30 buku cek dan 18 buku bilyet giro (masing-masing 25 lembar) yang telah dibubuhi Meterai Percetakan; sampai 30 November 2026 baru 20 buku cek dan 10 buku bilyet giro di antaranya yang diserahkan kepada nasabah. Bank juga menyerahkan 4.120 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 dan 6.900 tanda terima bernilai Rp5.000.000 ke bawah. Isian baris 'cek dan bilyet giro' serta baris 'dokumen yang menyatakan jumlah uang' pada rincian tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Cek dan bilyet giro: 48 buku, Rp480.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000", B: "Cek dan bilyet giro: 1.200 lembar, Rp12.000.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000", C: "Cek dan bilyet giro: 1.200 lembar, Rp12.000.000; dokumen jumlah uang: 11.020 dokumen, Rp110.200.000", D: "Cek dan bilyet giro: 750 lembar, Rp7.500.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Cek dan bilyet giro dihitung per lembar dan dipungut pada saat bank menerima cek dan bilyet giro yang telah dibubuhi Meterai Percetakan dari pemegang izin (Pasal 61 huruf a PMK 78/2024), bukan saat diserahkan kepada nasabah: (30 + 18) × 25 = 1.200 lembar × Rp10.000. Dokumen jumlah uang dipungut saat diserahkan dan hanya yang bernilai lebih dari Rp5.000.000: 4.120 × Rp10.000. Rincian per objek ini diisi pada Bagian B induk SPT Masa Bea Meterai: angka 1 (cek dan bilyet giro, sesuai data Formulir L1) dan angka 4a (dokumen yang menyebutkan penerimaan uang, sesuai data Formulir L2 dan L3).",
        jejakHitung: [
          ["Cek diterima dari percetakan 30 × 25", "750 lembar"],
          ["Bilyet giro diterima dari percetakan 18 × 25", "450 lembar"],
          ["Bagian B angka 1: 1.200 × Rp10.000", "Rp12.000.000"],
          ["Bagian B angka 4a: 4.120 × Rp10.000", "Rp41.200.000"],
          ["Total dipungut", "Rp53.200.000"]
        ],
        mengapaSalah: {
          A: "Satuan cek dan bilyet giro adalah lembar (tiap lembar satu surat berharga), bukan buku",
          C: "Tanda terima bernilai Rp5.000.000 ke bawah bukan objek bea meterai (Pasal 3 ayat (2) huruf g UU 10/2020)",
          D: "Hanya menghitung (20 + 10) × 25 = 750 lembar yang sudah diserahkan kepada nasabah; pemungutan atas cek dan bilyet giro dilakukan saat bank menerimanya dari pemegang izin Meterai Percetakan"
        },
        jebakan: "Saat pemungutan berbeda per jenis dokumen: cek dan bilyet giro saat diterima dari percetakan (Meterai Percetakan), tanda terima saat diserahkan kepada pihak yang terutang. Cek dan bilyet giro yang bea meterainya telah dipungut tetapi tidak digunakan diselesaikan dengan pembetulan SPT Masa (Pasal 66 ayat (1) huruf b PMK 78/2024)."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d dan g, Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 34 ayat (2), Pasal 55 ayat (2), dan Pasal 61 PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 78 ayat (2) dan Lampiran huruf F PER-11/PJ/2025 (induk SPT Masa Bea Meterai Bagian B angka 1 dan angka 4a)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-088",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Sekuritas Garuda Nusantara (pemungut bea meterai atas dokumen transaksi surat berharga) memungut bea meterai Masa Agustus 2026 atas 8.450 konfirmasi transaksi nasabah; nilai transaksi masa itu Rp1,2 triliun dari 6.300 nasabah aktif. Karena migrasi sistem, bea meterai baru disetor pada 21 Oktober 2026 dan SPT Masa Bea Meterai disampaikan pada 22 Oktober 2026. Jatuh tempo setor dan lapor adalah Selasa, 15 September 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Total sanksi administratif yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.806.900", B: "Rp953.450", C: "Rp2.206.900", D: "Rp84.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setoran penuh yang terlambat ditagih STP: bunga Pasal 9 ayat (2a) atas Rp84.500.000 selama 2 bulan (bagian bulan dihitung penuh) ditambah denda SPT Masa Rp100.000.",
        jejakHitung: [
          ["Pokok 8.450 × Rp10.000", "Rp84.500.000"],
          ["15 September–21 Oktober 2026", "1 bulan 6 hari → 2 bulan"],
          ["Bunga = 84.500.000 × 1,01% × 2", "Rp1.706.900"],
          ["Denda SPT Masa terlambat (Pasal 7 ayat (1))", "Rp100.000"],
          ["Total sanksi", "Rp1.806.900"]
        ],
        mengapaSalah: {
          B: "Menghitung bunga 1 bulan; 15 September–21 Oktober adalah 1 bulan 6 hari sehingga dibulatkan 2 bulan",
          C: "Memakai denda SPT Masa PPN Rp500.000; SPT Masa Bea Meterai termasuk SPT Masa lainnya Rp100.000",
          D: "Mengenakan sanksi 100%; bea meterai disetor penuh sehingga yang ditagih hanya bunga dan denda"
        },
        jebakan: "Nilai transaksi Rp1,2 triliun dan jumlah nasabah tidak dipakai; bea meterai dihitung per konfirmasi transaksi."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan September 2026 (tarif pada tanggal dimulainya penghitungan sanksi, 15 September 2026; 1,01% di soal ini anggapan)", berlakuSejak: "2026-09-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-089",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 11 UU 10/2020 (parafrase): pemungut bea meterai yang tidak atau kurang memungut dan/atau tidak atau kurang menyetorkan bea meterai diterbitkan surat ketetapan pajak sebesar bea meterai yang tidak atau kurang dipungut dan/atau disetor, ditambah sanksi administratif sebesar 100%.",
      stem: "Bank Pesisir Raya, pemungut bea meterai atas cek dan bilyet giro, pada Masa Juni 2026 menyerahkan 40 lembar bilyet giro kepada CV Rafi Abadi. Karena kesalahan parameter sistem, bea meterai atas bilyet giro tersebut tidak dipungut. Pemeriksaan pada Oktober 2026 menemukan hal ini, sementara CV Rafi Abadi telah memakai seluruh bilyet giro untuk membayar pemasok. Berdasarkan kutipan tersebut, perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "CV Rafi Abadi wajib memeteraikan kemudian 40 lembar bilyet giro sebesar Rp20.000 per lembar (Rp800.000), sedangkan bank tidak dikenai sanksi karena tidak menerima uangnya", B: "Bank Pesisir Raya ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP atas Rp400.000, tanpa sanksi 100%, karena kesalahan bersifat sistem dan bukan kesengajaan pemungut", C: "Bank Pesisir Raya diterbitkan surat ketetapan pajak sebesar Rp400.000 ditambah sanksi 100% Rp400.000, karena kewajiban memungut dan menyetor bea meterai atas bilyet giro ada pada pemungut", D: "Bank Pesisir Raya diterbitkan surat ketetapan pajak sebesar Rp10.000 ditambah sanksi 100% Rp10.000, karena 40 lembar bilyet giro diserahkan dalam satu buku kepada satu nasabah" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pemungut yang tidak memungut bea meterai atas dokumen yang wajib dipungutnya diterbitkan SKP sebesar bea meterai yang tidak dipungut (40 × Rp10.000) ditambah sanksi 100% (Pasal 11 ayat (2) dan (3) UU 10/2020; Pasal 67 PMK 78/2024). Pemungutan atas bilyet giro seharusnya dilakukan dengan Meterai Percetakan pada saat bank menerima bilyet giro dari pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a dan Pasal 62 ayat (1) huruf a PMK 78/2024), sehingga masa yang ditetapkan mengikuti bulan penerimaan itu; jumlahnya tetap Rp800.000.",
        jejakHitung: [
          ["Pokok 40 lembar × Rp10.000", "Rp400.000"],
          ["Sanksi 100%", "Rp400.000"],
          ["Jumlah dalam SKP", "Rp800.000"]
        ],
        mengapaSalah: {
          A: "Pasal 11 menempatkan akibat tidak memungut pada pemungut",
          B: "STP berupa bunga hanya untuk setoran yang terlambat; tidak memungut ditetapkan dengan SKP + 100%",
          D: "Bea meterai dihitung per lembar bilyet giro"
        },
        jebakan: "Alasan kesalahan sistem tidak mengubah jenis sanksi; yang membedakan SKP dan STP adalah tidak dipungut/disetor versus hanya terlambat. Saat pemungutan bilyet giro adalah saat diterima dari percetakan, bukan saat diserahkan kepada nasabah."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf a, Pasal 61 huruf a, Pasal 62 ayat (1) huruf a, dan Pasal 67 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-090",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Bayar Mudah, pemungut bea meterai, memungut bea meterai Masa Agustus 2026 sebesar Rp20.000.000 dan menyetornya pada 5 Oktober 2026, padahal jatuh temponya Selasa, 15 September 2026. SPT Masa Bea Meterai disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Sanksi bunga yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp404.000", B: "Rp20.000.000", C: "Rp202.000", D: "Rp368.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keterlambatan 20 hari dihitung 1 bulan; bunga = Rp20.000.000 × 1,01% × 1.",
        jejakHitung: [
          ["15 September–5 Oktober 2026", "20 hari → 1 bulan"],
          ["Bunga = 20.000.000 × 1,01% × 1", "Rp202.000"]
        ],
        mengapaSalah: {
          A: "Menghitung 2 bulan karena melewati dua bulan kalender; 15 September–5 Oktober hanya 20 hari (1 bulan)",
          B: "Mengenakan sanksi 100%; setoran penuh yang terlambat hanya dikenai bunga",
          D: "Memakai tarif Pasal 13 ayat (2) 1,84%; keterlambatan setor memakai tarif Pasal 9 ayat (2a)"
        },
        jebakan: "Jumlah bulan dihitung dari tanggal jatuh tempo, bukan dari pergantian bulan kalender."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan September 2026 (tarif pada tanggal dimulainya penghitungan sanksi, 15 September 2026; 1,01% di soal ini anggapan)", berlakuSejak: "2026-09-01" }],
      anggaranDetik: 75,
      verifikasi: "✅"
    },
    {
      id: "A5-091", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Pemeriksaan bea meterai atas PT Graha Niaga dilakukan pada 27 Oktober 2026. Dokumen tanpa meterai yang terutang oleh PT Graha Niaga dan tidak pernah diajukan ke pengadilan: (1) kuitansi Rp15.000.000 yang diterima 26 Oktober 2021; (2) kuitansi Rp8.000.000 yang ditandatangani pemasok 25 Oktober 2021 tetapi baru diserahkan kepada PT Graha Niaga pada 29 Oktober 2021; (3) perjanjian sewa yang ditandatangani 28 Oktober 2021, rangkap PT Graha Niaga; (4) surat pernyataan pelanggan yang ditandatangani 20 Oktober 2021 dan diserahkan kepada PT Graha Niaga pada 3 November 2021; (5) perjanjian kerja sama yang ditandatangani 15 Juli 2021; (6) kontrak dengan mitra Jepang yang ditandatangani di Tokyo 10 Agustus 2021 dan digunakan di Indonesia untuk pengajuan kredit pada 2 November 2021 tanpa dilunasi; (7) kuitansi Rp4.500.000 yang diterima pada 2024. Jumlah yang masih dapat ditagih melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: ["masih dapat ditagih"],
      opsi: { A: "Rp40.000", B: "Rp60.000", C: "Rp120.000", D: "Rp80.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Daluwarsa 5 tahun dihitung dari saat terutang masing-masing dokumen. Per 27 Oktober 2026, dokumen (2), (3), (4), dan (6) belum daluwarsa sehingga masing-masing dibayar Rp20.000; (1) dan (5) sudah daluwarsa, dan (7) bukan objek.",
        jejakHitung: [ ["(1) Diserahkan 26 Oktober 2021", "daluwarsa 26 Oktober 2026 → Rp0"], ["(2) Diserahkan 29 Oktober 2021", "daluwarsa 29 Oktober 2026 → Rp20.000"], ["(3) Ditandatangani 28 Oktober 2021", "daluwarsa 28 Oktober 2026 → Rp20.000"], ["(4) Diserahkan 3 November 2021", "daluwarsa 3 November 2026 → Rp20.000"], ["(5) Ditandatangani 15 Juli 2021", "sudah daluwarsa → Rp0"], ["(6) Digunakan di Indonesia 2 November 2021", "daluwarsa 2 November 2026 → Rp20.000"], ["(7) Kuitansi Rp4.500.000", "bukan objek"], ["Total 4 × Rp20.000", "Rp80.000"] ],
        mengapaSalah: { A: "Menghitung daluwarsa kuitansi (2) dan surat pernyataan (4) dari tanggal tanda tangan; keduanya terutang saat diserahkan", B: "Menghitung daluwarsa kontrak Tokyo dari tanggal tanda tangan; dokumen luar negeri terutang saat digunakan di Indonesia (2 November 2021)", C: "Mengabaikan daluwarsa 5 tahun sehingga dokumen (1) dan (5) ikut ditagih" },
        jebakan: "Selisih beberapa hari menentukan; uji setiap dokumen dengan saat terutangnya sendiri, bukan tanggal pembuatan atau tanda tangan."
      },
      dasarHukum: [ { pasal: "Pasal 8 ayat (1) huruf a, c, dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17, Pasal 18, dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A5-092", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) huruf e UU 10/2020 (parafrase): Bea Meterai atas dokumen yang dibuat di luar negeri terutang pada saat dokumen digunakan di Indonesia. Pasal 17 dan 18 (parafrase): pemeteraian kemudian dilakukan atas dokumen yang bea meterainya tidak atau kurang dibayar, dengan membayar bea meterai yang terutang ditambah sanksi administratif 100%; Pasal 1: pemeteraian kemudian memerlukan pengesahan pejabat yang ditetapkan Menteri.",
      stem: "PT Bumi Agro menandatangani perjanjian lisensi di Kuala Lumpur pada 3 Juni 2026; rangkap PT Bumi Agro berbentuk kertas. Rangkap itu digunakan untuk pengajuan izin edar di Jakarta pada 14 Juli 2026 tanpa dilunasi bea meterainya. Pada 20 Oktober 2026, sebelum ada pemeriksaan, perusahaan ingin menuntaskan kewajibannya. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membubuhkan meterai tempel Rp10.000 tanpa sanksi lalu meminta pengesahan, karena dokumen luar negeri baru terutang saat digunakan dan pelunasan dilakukan sukarela sebelum pemeriksaan", B: "Membayar Rp20.000 (pokok dan sanksi 100%) dengan kode billing tanpa pengesahan, karena pengesahan hanya diperlukan bila dokumen diajukan ke pengadilan", C: "Membayar Rp20.000 (pokok Rp10.000 dan sanksi 100%) dengan surat setoran pajak atau meterai, lalu memperoleh pengesahan pemeteraian kemudian dari pejabat yang ditetapkan Menteri", D: "Tidak perlu membayar apa pun, karena perjanjian ditandatangani di Kuala Lumpur sehingga saat terutangnya berada di luar jangkauan UU 10/2020" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Saat terutang dokumen luar negeri adalah saat digunakan di Indonesia (14 Juli 2026). Karena tidak dilunasi saat itu, pelunasan sesudahnya merupakan pemeteraian kemudian atas dokumen yang tidak dibayar: pokok + sanksi 100%, lalu disahkan pejabat yang ditetapkan Menteri, meskipun dilakukan sukarela.",
        jejakHitung: [ ["Saat terutang", "14 Juli 2026 (digunakan di Indonesia)"], ["Pokok", "Rp10.000"], ["Sanksi 100%", "Rp10.000"], ["Jumlah", "Rp20.000 + pengesahan"] ],
        mengapaSalah: { A: "Saat digunakan (14 Juli 2026) sudah lewat tanpa pelunasan, sehingga dokumen termasuk yang bea meterainya tidak dibayar", B: "Setiap pemeteraian kemudian memerlukan pengesahan pejabat yang ditetapkan Menteri (Pasal 1)", D: "Dokumen luar negeri terutang saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e)" },
        jebakan: "Kelonggaran tanpa sanksi bagi dokumen luar negeri hanya berlaku bila dilunasi paling lambat saat digunakan."
      },
      dasarHukum: [ { pasal: "Pasal 1, Pasal 8 ayat (1) huruf e, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (tata cara pemeteraian kemudian)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-093",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Kuitansi pembayaran ganti rugi Rp35.000.000 yang diterima Tuan Haikal pada 4 Agustus 2021 tidak pernah dibubuhi meterai. Pada November 2026 Tuan Haikal akan mengajukannya sebagai alat bukti dalam gugatan perdata. Pernyataan yang paling tepat mengenai kuitansi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, sehingga kuitansi dapat langsung diajukan sebagai alat bukti tanpa pemeteraian kemudian.", B: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut belum daluwarsa karena jangka waktu 5 tahun dihitung sejak kuitansi akan diajukan ke pengadilan, sehingga harus dibayar Rp20.000.", C: "Kewajiban bea meterai atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, tetapi sanksi 100% tidak mengenal daluwarsa sehingga Rp10.000 tetap ditagih bersama pemeteraian kemudian.", D: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, tetapi kuitansi tetap harus dimeteraikan kemudian sebelum diajukan sebagai alat bukti di pengadilan." },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 23 UU 10/2020: bea meterai yang terutang kedaluwarsa 5 tahun sejak saat terutang (kuitansi terutang saat diserahkan 4 Agustus 2021, sehingga kedaluwarsa pada Agustus 2026). Namun Penjelasan Pasal 3 ayat (1) huruf b menegaskan dokumen yang bea meterainya belum dibayar lunas tetapi telah kedaluwarsa tetap harus dimeteraikan kemudian saat akan dijadikan alat bukti di pengadilan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kedaluwarsa menghapus tagihan atas kuitansi sebagai dokumen perdata, tetapi dokumen yang akan menjadi alat bukti tetap harus dimeteraikan kemudian (Penjelasan Pasal 3 ayat (1) huruf b)",
          B: "Kedaluwarsa dihitung sejak saat terutang kuitansi, yaitu saat diserahkan 4 Agustus 2021 (Pasal 8 ayat (1) huruf c dan Pasal 23), bukan sejak akan diajukan ke pengadilan",
          C: "Pemeteraian kemudian atas dokumen yang digunakan sebagai alat bukti hanya sebesar bea meterai yang terutang, tanpa sanksi (Pasal 18 ayat (1) huruf b UU 10/2020 dan Pasal 49 huruf c PMK 78/2024); sanksi 100% hanya melekat pada pemeteraian kemudian atas dokumen yang tidak atau kurang dibayar"
        },
        jebakan: "Dua rezim berbeda: kedaluwarsa menghapus tagihan atas dokumen perdata, sedangkan pengajuan sebagai alat bukti menimbulkan kewajiban pemeteraian kemudian tersendiri (bea meterai yang berlaku saat pemeteraian kemudian, tanpa sanksi)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf c dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b beserta penjelasannya, Pasal 17 ayat (1) huruf b, dan Pasal 18 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 49 huruf c PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-094", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "CV Damai Sentosa pada Oktober 2026 menemukan 9 kuitansi pembelian bernilai Rp6.000.000–Rp14.000.000 yang diterimanya sepanjang Juni 2026 tanpa meterai. CV memutuskan melakukan pemeteraian kemudian sebelum ada pemeriksaan. Jumlah yang harus dibayar CV Damai Sentosa adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp90.000", B: "Rp180.000", C: "Rp270.000", D: "Rp360.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "angka-usang", D: "salah-hitung" },
      pembahasan: {
        inti: "Kuitansi di atas Rp5.000.000 yang tidak dilunasi saat diserahkan dimeteraikan kemudian dengan pokok Rp10.000 + sanksi 100% per dokumen, termasuk bila dilakukan sukarela.",
        jejakHitung: [ ["Pokok 9 × Rp10.000", "Rp90.000"], ["Sanksi 100%", "Rp90.000"], ["Total", "Rp180.000"] ],
        mengapaSalah: { A: "Menganggap pelunasan sukarela sebelum pemeriksaan bebas sanksi", C: "Memakai sanksi 200% warisan UU 13/1985", D: "Menghitung pokok dan sanksi masing-masing Rp20.000 per dokumen" },
        jebakan: "Tidak ada pengurangan sanksi karena pelunasan sukarela."
      },
      dasarHukum: [ { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 60,
      verifikasi: "✅"
    },
    {
      id: "A5-095",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 19 UU 10/2020 (parafrase): pihak yang terutang yang tidak atau kurang membayar bea meterai diterbitkan surat ketetapan pajak sesuai ketentuan peraturan perundang-undangan di bidang ketentuan umum dan tata cara perpajakan, sebesar bea meterai yang tidak atau kurang dibayar ditambah sanksi administratif 100% (Pasal 18 ayat (2)). Pasal 25 ayat (1) sampai (3) UU KUP (parafrase): wajib pajak dapat mengajukan keberatan atas surat ketetapan pajak secara tertulis dengan mengemukakan jumlah pajak yang terutang menurut penghitungan wajib pajak disertai alasan, dalam jangka waktu 3 bulan sejak tanggal dikirim surat ketetapan pajak.",
      stem: "Hasil pemeriksaan bea meterai atas PT Panca Usaha dituangkan dalam surat ketetapan pajak yang dikirim 5 Oktober 2026 sebesar Rp1.240.000 (62 dokumen × Rp10.000 ditambah sanksi 100%). PT Panca Usaha berpendapat 20 dokumen di antaranya adalah surat jalan pengiriman barang yang bukan objek, sedangkan 42 dokumen lainnya memang kuitansi di atas Rp5.000.000 yang tidak bermeterai. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan keberatan melalui Coretax paling lambat 4 Januari 2027 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sehingga jumlah ketetapan menurut PT Panca Usaha beserta sanksi 100% menjadi Rp840.000", B: "Mengajukan keberatan melalui Coretax paling lambat 4 Januari 2027 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sedangkan sanksi 100% gugur seluruhnya karena keberatan diajukan sehingga jumlah ketetapan menurut PT Panca Usaha Rp420.000", C: "Mengajukan keberatan melalui Coretax paling lambat 4 November 2026 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sehingga jumlah ketetapan menurut PT Panca Usaha beserta sanksi 100% menjadi Rp840.000", D: "Langsung mengajukan gugatan ke Pengadilan Pajak paling lambat 30 hari sejak surat ketetapan dikirim" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat ketetapan bea meterai diterbitkan menurut tata cara UU KUP (Pasal 19 UU 10/2020), sehingga diuji melalui keberatan dalam jangka waktu 3 bulan sejak tanggal dikirim. Tanggal dikirim (5 Oktober 2026) dihitung sebagai hari pertama, sehingga hari terakhirnya 4 Januari 2027 (Senin). Yang dikemukakan adalah bea meterai terutang menurut WP: 42 dokumen × Rp10.000 = Rp420.000. Sanksi 100% melekat pada bea meterai yang tidak dibayar, sehingga jumlah ketetapan menurut WP Rp840.000.",
        jejakHitung: [
          ["Dokumen objek menurut WP", "62 − 20 = 42"],
          ["Bea meterai terutang menurut WP 42 × Rp10.000", "Rp420.000"],
          ["Sanksi 100% (Pasal 18 ayat (2))", "Rp420.000"],
          ["Jumlah ketetapan menurut WP", "Rp840.000"],
          ["Jangka waktu keberatan: 3 bulan sejak 5 Oktober 2026 (hari pertama 5 Oktober 2026)", "hari terakhir 4 Januari 2027"]
        ],
        mengapaSalah: {
          B: "Pengajuan keberatan tidak menghapus sanksi 100% atas dokumen yang diakui tidak dibayar; sanksi itu mengikuti pokoknya (Pasal 18 ayat (2) dan Pasal 19 UU 10/2020)",
          C: "4 November 2026 adalah hari terakhir jangka waktu 1 bulan; jangka waktu keberatan 3 bulan sejak surat ketetapan dikirim, berakhir 4 Januari 2027",
          D: "Sengketa jumlah ketetapan ditempuh dengan keberatan; gugatan untuk pelaksanaan penagihan atau keputusan tertentu"
        },
        jebakan: "Yang dikemukakan dalam keberatan adalah pajak terutang menurut WP (pokok atas 42 dokumen); sanksi 100% atas dokumen yang diakui tetap mengikuti pokok tersebut."
      },
      dasarHukum: [{ pasal: "Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 25 ayat (1), ayat (2), dan ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (1) dan Pasal 10 ayat (2) PMK 118/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 7 huruf a UU 10/2020 (surat jalan bukan objek)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-096", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-08",
      stem: "Data untuk dua soal berurutan (PT Prima Kencana). PT Prima Kencana Tbk (peredaran bruto 2025 Rp410 miliar) diperiksa pada Oktober 2026 atas dokumen 2025. Temuan dokumen yang terutang oleh PT Prima Kencana dan belum dilunasi: 38 kuitansi pemasok bernilai Rp6.000.000–Rp95.000.000; 12 rangkap perjanjian milik PT Prima Kencana; 6 surat pernyataan dari pelanggan; serta 4 kuitansi pemasok di atas Rp5.000.000 yang hanya dibubuhi gambar meterai hasil pindai. Selain itu, 25 kuitansi bernilai Rp3.000.000–Rp5.000.000 dan 40 surat jalan juga tidak bermeterai. Seluruh temuan yang terutang ditetapkan dengan surat ketetapan pajak. Jumlah sanksi administratif, di luar pokok, dalam ketetapan tersebut adalah ...",
      kataKualifikasi: ["di luar pokok"],
      opsi: { A: "Rp560.000", B: "Rp600.000", C: "Rp1.200.000", D: "Rp1.250.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen terutang yang tidak dilunasi: 38 + 12 + 6 + 4 = 60 dokumen. Sanksi 100% dari bea meterai terutang = 60 × Rp10.000.",
        jejakHitung: [ ["Kuitansi pemasok tanpa meterai", "38"], ["Rangkap perjanjian", "12"], ["Surat pernyataan", "6"], ["Kuitansi dengan gambar pindai", "4"], ["Jumlah dokumen", "60"], ["Sanksi 100% = 60 × Rp10.000", "Rp600.000"] ],
        mengapaSalah: { A: "Menganggap 4 kuitansi bergambar meterai hasil pindai sudah lunas; gambar pindai bukan meterai yang sah", C: "Menjumlahkan pokok dan sanksi; yang ditanya hanya sanksi", D: "Ikut menghitung 25 kuitansi tidak lebih dari Rp5.000.000 dan 40 surat jalan (Pasal 7 huruf a) yang bukan objek" },
        jebakan: "Status Tbk dan peredaran bruto tidak memengaruhi tarif maupun sanksi bea meterai."
      },
      dasarHukum: [ { pasal: "Pasal 18 dan Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 7 huruf a UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-097",
      topik: "A5.6",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 3,
      kasusId: "V-A5-08",
      peringatan: "Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020 serta Pasal 49 PMK 78/2024 hanya menyebut \"sanksi administratif\" 100% tanpa menamainya bunga, denda, atau kenaikan; Pasal 9 ayat (1) huruf k UU PPh menyebut \"sanksi administrasi berupa bunga, denda, dan kenaikan\" dan Penjelasannya \"Cukup jelas\". Kunci mengikuti praktik umum (sanksi bukan biaya), tetapi masuknya sanksi bea meterai ke huruf k belum bisa dipastikan dari bunyi naskah.",
      formulirRef: "1771.l1.7",
      stem: "Lanjutan data PT Prima Kencana. Pada 2026 PT Prima Kencana melunasi ketetapan bea meterai hasil pemeriksaan (pokok Rp600.000 dan sanksi Rp600.000) dan membukukan seluruhnya sebagai beban umum. Pada tahun yang sama perusahaan membeli dan memakai 3.400 meterai elektronik untuk dokumen operasional (Rp34.000.000) yang dibebankan sebagai biaya administrasi, serta membayar STP bunga keterlambatan setor PPh Pasal 21 sebesar Rp2.150.000 yang dibebankan sebagai beban lain-lain. Dalam lampiran perhitungan penghasilan neto fiskal SPT Tahunan PPh Badan 2026, jumlah penyesuaian fiskal positif yang timbul dari ketiga transaksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.350.000", B: "Rp2.750.000", C: "Rp600.000", D: "Rp37.350.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Bunga dalam STP adalah sanksi administrasi berupa bunga yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh). Sanksi 100% bea meterai Rp600.000 lazimnya dikoreksi positif sebagai sanksi administrasi di bidang perpajakan menurut Pasal 9 ayat (1) huruf k UU PPh, tetapi naskah (Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020; Pasal 49 PMK 78/2024) hanya menyebutnya \"sanksi administratif\" dan tidak menggolongkannya secara tegas ke bunga, denda, atau kenaikan; kunci mengikuti praktik yang lazim itu. Penyesuaian fiskal positif = Rp600.000 + Rp2.150.000 = Rp2.750.000. Pokok bea meterai dan pembelian meterai elektronik adalah pajak selain PPh yang berkaitan dengan usaha sehingga dapat dibebankan.",
        jejakHitung: [
          ["Pokok bea meterai dan meterai elektronik operasional", "dapat dibebankan → tidak dikoreksi"],
          ["Sanksi 100% bea meterai (lazimnya dikoreksi; lihat peringatan)", "Rp600.000"],
          ["Bunga STP PPh Pasal 21", "Rp2.150.000"],
          ["Penyesuaian fiskal positif (unsur sanksi)", "Rp2.750.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengoreksi pokok bea meterai Rp600.000; pokok bea meterai adalah pajak selain PPh yang dapat dibebankan",
          C: "Tidak mengoreksi bunga STP; bunga dalam STP adalah sanksi administrasi berupa bunga yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh)",
          D: "Mengoreksi seluruh beban bea meterai termasuk meterai elektronik untuk dokumen operasional"
        },
        jebakan: "Pisahkan pokok bea meterai (biaya) dari sanksinya (lazimnya dikoreksi, lihat peringatan) meskipun dibayar dengan satu setoran. Di SPT Tahunan PPh Badan Coretax, koreksi ini diisi pada kolom PENYESUAIAN FISKAL POSITIF akun beban yang memuatnya di Lampiran 1A-1L (Rekonsiliasi Laporan Keuangan), bukan pada satu baris tersendiri."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh (pajak selain PPh sebagai biaya)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 (Lampiran 1A-1L, kolom PENYESUAIAN FISKAL POSITIF)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 180,
      verifikasi: "◐"
    },
    {
      id: "A5-098", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Dalam pelatihan internal, peserta diminta merumuskan akibat hukum dua perbuatan: Tuan Rizal dengan sengaja menjual kembali meterai tempel yang tanda pemakaiannya telah dihilangkan, sedangkan CV Kembang tidak membubuhkan meterai pada 15 kuitansi bernilai di atas Rp5.000.000 yang diterimanya. Rumusan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Perbuatan Tuan Rizal diancam pidana menurut UU 10/2020, dan CV Kembang juga diancam pidana karena dengan sengaja tidak membubuhkan meterai pada kuitansi yang diterimanya.", B: "Perbuatan Tuan Rizal hanya dikenai sanksi administratif 100% atas nilai meterai yang dijual, sedangkan CV Kembang hanya dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 100% per dokumen.", C: "Perbuatan Tuan Rizal diancam pidana menurut UU 10/2020, sedangkan CV Kembang hanya dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 200% per dokumen.", D: "Perbuatan Tuan Rizal diancam pidana menurut UU 10/2020, sedangkan CV Kembang hanya dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 100% per dokumen." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "angka-usang" },
      pembahasan: {
        inti: "Ketentuan pidana UU 10/2020 menyasar pemalsuan meterai serta pemakaian dan peredaran meterai palsu atau bekas. Tidak membubuhkan meterai hanya menimbulkan pemeteraian kemudian dengan sanksi administratif 100%.",
        jejakHitung: [],
        mengapaSalah: { A: "Tidak membubuhkan meterai bukan tindak pidana; akibatnya administratif", B: "Penjualan meterai bekas yang tanda pemakaiannya dihilangkan diancam pidana (Pasal 26)", C: "Sanksi 200% adalah ketentuan UU 13/1985; kini 100%" },
        jebakan: "Kata 'sengaja' tidak mengubah sifat kelalaian membubuhkan meterai menjadi pidana."
      },
      dasarHukum: [ { pasal: "Pasal 24–26 UU 10/2020 (ketentuan pidana)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-099",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Konsultan menyusun ringkasan rezim sanksi untuk PT Dana Lancar, yang berstatus pemungut bea meterai atas tanda terima pembayaran digital sekaligus sering menerima kuitansi kertas di atas Rp5.000.000 dari pemasoknya. Ringkasan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Atas kuitansi pemasok yang diterima tanpa meterai, PT Dana Lancar membayar bea meterai ditambah sanksi 100% melalui pemeteraian kemudian; atas bea meterai yang dipungut tetapi tidak disetor, diterbitkan SKP ditambah sanksi 100%; atas setoran yang hanya terlambat, juga diterbitkan SKP ditambah sanksi 100%.", B: "Atas kuitansi pemasok yang diterima tanpa meterai, PT Dana Lancar membayar bea meterai ditambah sanksi 100% melalui pemeteraian kemudian; atas bea meterai yang dipungut tetapi tidak disetor, diterbitkan SKP ditambah sanksi 100%; atas setoran yang hanya terlambat, ditagih STP berupa bunga UU KUP.", C: "Atas kuitansi pemasok yang diterima tanpa meterai, PT Dana Lancar membayar bea meterai ditambah bunga 1,01% per bulan sejak saat terutang; atas bea meterai yang dipungut tetapi tidak disetor, diterbitkan SKP ditambah sanksi 100%; atas setoran yang hanya terlambat, ditagih STP berupa bunga UU KUP.", D: "Atas kuitansi pemasok yang diterima tanpa meterai, PT Dana Lancar membayar bea meterai ditambah sanksi 100% melalui pemeteraian kemudian; atas bea meterai yang dipungut tetapi tidak disetor, ditagih STP berupa bunga UU KUP tanpa sanksi 100%; atas setoran yang hanya terlambat, ditagih STP berupa bunga UU KUP." },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Tiga rezim berbeda: pihak terutang yang tidak melunasi membayar pokok + 100% (Pasal 18); pemungut yang tidak memungut/menyetor diterbitkan SKP + 100%; pemungut yang terlambat menyetor atau melapor ditagih STP sesuai UU KUP (Pasal 11).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Setoran penuh yang terlambat ditagih STP berupa bunga, bukan SKP + 100%",
          C: "Sanksi pemeteraian kemudian adalah 100% tetap (Pasal 18), bukan bunga per bulan",
          D: "Bea meterai yang tidak disetor ditetapkan SKP + 100% (Pasal 11), bukan sekadar bunga"
        },
        jebakan: "Satu wajib pajak dapat terkena dua kedudukan sekaligus: pihak terutang dan pemungut, dengan rezim sanksi berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 11 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-100",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 9 ayat (2a) UU KUP (parafrase): pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan Menteri Keuangan, dihitung dari tanggal jatuh tempo sampai dengan tanggal pembayaran, paling lama 24 bulan, dan bagian dari bulan dihitung penuh 1 bulan.",
      stem: "PT Giro Andalan, pemungut bea meterai, ternyata belum menyetor bea meterai Masa Mei 2024 sebesar Rp50.000.000 yang telah dipungut dan dilaporkan dalam SPT Masa tepat waktu; jatuh tempo setor saat itu Senin, 10 Juni 2024. Setelah ditegur KPP, bea meterai tersebut disetor pada 20 Oktober 2026, dan DJP menerbitkan STP atas keterlambatan setor. Anggap tarif bunga Pasal 9 ayat (2a) yang berlaku pada saat dimulainya penghitungan sanksi 0,94% per bulan (tarif Oktober 2026: 1,01%). Berdasarkan kutipan tersebut, sanksi bunga dalam STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp13.630.000", B: "Rp11.280.000", C: "Rp12.120.000", D: "Rp50.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keterlambatan 10 Juni 2024–20 Oktober 2026 adalah 28 bulan 10 hari (29 bulan), tetapi bunga dibatasi 24 bulan: Rp50.000.000 × 0,94% × 24.",
        jejakHitung: [
          ["10 Juni 2024–20 Oktober 2026", "28 bulan 10 hari → 29 bulan"],
          ["Batas paling lama", "24 bulan"],
          ["Bunga = 50.000.000 × 0,94% × 24", "Rp11.280.000"]
        ],
        mengapaSalah: {
          A: "Menghitung 29 bulan; bunga dibatasi paling lama 24 bulan",
          C: "Memakai tarif Oktober 2026 1,01%; soal menetapkan tarif saat dimulainya penghitungan sanksi 0,94%",
          D: "Mengenakan sanksi 100%; soal menyatakan DJP menerbitkan STP atas keterlambatan setor"
        },
        jebakan: "Batas 24 bulan dan tarif yang dipakai adalah dua jebakan terpisah; periksa keduanya."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-101", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Pada Agustus 2026 bagian umum PT Sinar Laut membeli 200 meterai tempel dari penjual daring tidak resmi seharga Rp7.000 per lembar, lalu memakainya pada 120 kuitansi di atas Rp5.000.000 yang diterima perusahaan dan 60 rangkap perjanjian milik perusahaan. Uji keaslian oleh pemeriksa pada Oktober 2026 menunjukkan seluruh meterai tersebut palsu; 20 lembar sisanya masih disimpan di gudang. Seluruh dokumen belum daluwarsa dan tidak pernah diajukan ke pengadilan. Jumlah yang harus dilunasi PT Sinar Laut melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.800.000", B: "Rp4.000.000", C: "Rp3.600.000", D: "Rp1.080.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Meterai palsu tidak melunasi bea meterai, sehingga 180 dokumen dianggap tidak dibayar dan dimeteraikan kemudian dengan pokok + sanksi 100%. Meterai yang belum dipakai tidak menimbulkan bea meterai.",
        jejakHitung: [ ["Dokumen bermeterai palsu", "120 + 60 = 180"], ["Pokok 180 × Rp10.000", "Rp1.800.000"], ["Sanksi 100%", "Rp1.800.000"], ["Total", "Rp3.600.000"] ],
        mengapaSalah: { A: "Hanya menghitung pokok dengan alasan perusahaan beritikad baik; dokumen yang tidak dilunasi tetap dikenai sanksi 100%", B: "Ikut menghitung 20 meterai sisa yang belum dipakai pada dokumen apa pun", D: "Menganggap meterai palsu melunasi Rp7.000 sehingga hanya kekurangan Rp3.000 ditambah sanksinya yang dibayar" },
        jebakan: "Harga beli Rp7.000 bukan pembayaran bea meterai; pertanggungjawaban pidana atas meterai palsu (Pasal 24–25) terpisah dari kewajiban pemeteraian kemudian."
      },
      dasarHukum: [ { pasal: "Pasal 12, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 24–25 UU 10/2020 (meterai palsu)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-102",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 1,
      peringatan: "Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020 serta Pasal 49 PMK 78/2024 hanya menyebut \"sanksi administratif\" 100% tanpa menamainya bunga, denda, atau kenaikan; Pasal 9 ayat (1) huruf k UU PPh menyebut \"sanksi administrasi berupa bunga, denda, dan kenaikan\" dan Penjelasannya \"Cukup jelas\". Kunci mengikuti praktik umum (sanksi bukan biaya), tetapi masuknya sanksi bea meterai ke huruf k belum bisa dipastikan dari bunyi naskah.",
      formulirRef: "1770.l1.3",
      stem: "Tuan Hasan, pengusaha toko bahan bangunan yang menyelenggarakan pembukuan, pada 2026 membayar pemeteraian kemudian atas 14 kuitansi pemasok sebesar Rp280.000 (pokok Rp140.000 dan sanksi Rp140.000) dan mencatat seluruhnya sebagai biaya administrasi usaha. Dalam Lampiran 3A-1 Rekonsiliasi Laporan Keuangan (Dagang) SPT Tahunan PPh Orang Pribadi tahun pajak 2026, perlakuan atas transaksi ini pada akun beban yang memuatnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Penyesuaian fiskal positif Rp280.000", B: "Penyesuaian fiskal positif Rp140.000", C: "Tidak ada penyesuaian fiskal karena seluruhnya biaya administrasi usaha", D: "Penyesuaian fiskal negatif Rp140.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Sanksi 100% bea meterai Rp140.000 lazimnya dikoreksi positif sebagai sanksi administrasi di bidang perpajakan menurut Pasal 9 ayat (1) huruf k UU PPh, tetapi naskah (Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020; Pasal 49 PMK 78/2024) hanya menyebutnya \"sanksi administratif\" dan tidak menggolongkannya secara tegas ke bunga, denda, atau kenaikan; kunci mengikuti praktik yang lazim itu, sehingga dikoreksi positif Rp140.000. Pokok bea meterai Rp140.000 adalah pajak selain PPh yang tetap menjadi biaya (Pasal 6 ayat (1) huruf a angka 9 UU PPh). Di Lampiran 3A-1, koreksi itu diisi pada Kolom (7) PENYESUAIAN FISKAL POSITIF akun beban yang memuatnya, dengan kode penyesuaian FPO-08 (sanksi administratif).",
        jejakHitung: [
          ["Pokok bea meterai (biaya)", "Rp140.000"],
          ["Sanksi 100% (lazimnya dikoreksi; lihat peringatan)", "Rp140.000"],
          ["Penyesuaian fiskal positif, Kolom (7) Lampiran 3A-1, kode FPO-08", "Rp140.000"]
        ],
        mengapaSalah: {
          A: "Pokok bea meterai adalah pajak selain PPh yang dapat dibebankan; hanya sanksinya yang dikoreksi",
          C: "Sanksi 100% bea meterai bukan biaya administrasi usaha; menurut praktik yang lazim ia dikoreksi sebagai sanksi administrasi di bidang perpajakan (Pasal 9 ayat (1) huruf k UU PPh), meskipun naskah tidak menggolongkannya secara tegas",
          D: "Sanksi yang telah dibebankan dikoreksi menambah penghasilan neto (positif), bukan mengurangi"
        },
        jebakan: "Satu pembayaran pemeteraian kemudian memuat dua unsur dengan perlakuan fiskal berbeda. Di SPT Coretax tidak ada baris penyesuaian fiskal tersendiri: koreksi diisi per akun di Kolom (7) Lampiran 3A-1."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf k dan Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Lampiran huruf G PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 (Lampiran 3A-1, Kolom (7) PENYESUAIAN FISKAL POSITIF, kode FPO-08)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 75,
      verifikasi: "◐"
    },
    {
      id: "A5-103",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Ortax XYZ Pte. Ltd. (Singapura) dan PT Ortax Distributor menandatangani perjanjian distribusi di Singapura pada 10 Februari 2026; masing-masing memegang satu naskah. Pada 5 Maret 2026, PT Ortax Distributor melampirkan naskahnya dalam permohonan kredit modal kerja kepada Bank Ortax Nusantara di Jakarta. Ortax XYZ Pte. Ltd. tidak pernah menggunakan naskahnya di Indonesia. Analisis yang tepat atas Bea Meterai perjanjian tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Terutang pada 10 Februari 2026 saat ditandatangani, oleh kedua pihak atas naskah masing-masing", B: "Tidak terutang karena perjanjian dibuat dan ditandatangani di luar negeri", C: "Terutang pada 5 Maret 2026 saat digunakan di Indonesia, oleh Ortax XYZ Pte. Ltd. sebagai pihak yang menyerahkan dokumen", D: "Terutang pada 5 Maret 2026 saat digunakan di Indonesia, oleh PT Ortax Distributor sebagai penerima manfaat atas dokumen" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Untuk dokumen objek Bea Meterai yang dibuat di luar negeri, Bea Meterai terutang saat dokumen digunakan di Indonesia dan terutang oleh pihak yang menerima manfaat atas dokumen. Utang timbul saat PT Ortax Distributor memakai naskahnya untuk permohonan kredit di Jakarta; naskah Ortax XYZ Pte. Ltd. tidak digunakan di Indonesia sehingga tidak terutang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penandatanganan di Singapura belum menimbulkan utang Bea Meterai; dokumen luar negeri terutang saat digunakan di Indonesia (Ps. 8 ayat (1) huruf e).",
          B: "Dokumen yang dibuat di luar negeri tetap menjadi objek Bea Meterai bila digunakan di Indonesia.",
          C: "Untuk dokumen luar negeri, yang terutang adalah pihak penerima manfaat (Ps. 9 ayat (5)), yaitu PT Ortax Distributor; naskah Ortax XYZ tidak pernah digunakan di Indonesia."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 10/2020 Pasal 3 ayat (2) huruf a."
      },
      dasarHukum: [{ pasal: "UU 10/2020 Pasal 3 ayat (2) huruf a", berlakuSejak: "2021-01-01" }, { pasal: "UU 10/2020 Pasal 8 ayat (1) huruf e", berlakuSejak: "2021-01-01" }, { pasal: "UU 10/2020 Pasal 9 ayat (5)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 4, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A5-104",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Kinabalu Leasing Sdn. Bhd. (Malaysia) dan PT Sarana Gudang Lestari menandatangani perjanjian sewa alat angkat gudang di Kuala Lumpur pada 14 Januari 2026; masing-masing memegang satu naskah. Naskah milik PT Sarana Gudang Lestari dikirim lewat kurir dan diterima di kantornya di Surabaya pada 3 Februari 2026, lalu disimpan di arsip. Pada 22 April 2026, PT Sarana Gudang Lestari melampirkan naskah itu dalam dokumen penawaran tender jasa pergudangan kepada PT Mitra Samudra Logistik di Surabaya. Naskah milik Kinabalu Leasing Sdn. Bhd. tetap disimpan di Kuala Lumpur. Analisis yang tepat atas Bea Meterai perjanjian tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terutang karena perjanjian ditandatangani di luar negeri dan naskah hanya dipakai sebagai lampiran tender", B: "Terutang pada 3 Februari 2026 saat naskah diterima di Surabaya, oleh PT Sarana Gudang Lestari sebagai pihak yang menerima Dokumen", C: "Terutang pada 22 April 2026 saat naskah digunakan di Indonesia, oleh PT Sarana Gudang Lestari sebagai pihak yang menerima manfaat atas Dokumen", D: "Terutang pada 14 Januari 2026 saat ditandatangani, oleh masing-masing pihak atas naskah perjanjian yang diterimanya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Surat perjanjian (Pasal 3 ayat (2) huruf a) yang dibuat di luar negeri terutang Bea Meterai pada saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e) dan terutang oleh pihak yang menerima manfaat atas Dokumen (Pasal 9 ayat (5)). Naskah PT Sarana Gudang Lestari baru digunakan di Indonesia pada 22 April 2026 ketika dilampirkan dalam penawaran tender; naskah Kinabalu Leasing Sdn. Bhd. tidak digunakan di Indonesia sehingga tidak terutang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Dokumen perdata yang dibuat di luar negeri tetap menjadi objek Bea Meterai begitu digunakan di Indonesia; melampirkannya dalam penawaran tender adalah penggunaan di Indonesia.",
          B: "Tibanya naskah di Indonesia dan penyimpanannya di arsip belum merupakan penggunaan; lagi pula aturan pihak yang menerima Dokumen (Pasal 9 ayat (1) dan (2)) bukan aturan untuk dokumen luar negeri.",
          D: "Saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a) dan pihak terutang masing-masing pihak (Pasal 9 ayat (2)) berlaku untuk perjanjian yang dibuat di Indonesia; untuk dokumen luar negeri berlaku Pasal 8 ayat (1) huruf e dan Pasal 9 ayat (5)."
        },
        jebakan: "Bedakan tiga tanggal: tanda tangan di luar negeri, tibanya naskah di Indonesia, dan penggunaan naskah di Indonesia. Hanya tanggal penggunaan yang menimbulkan utang Bea Meterai untuk dokumen yang dibuat di luar negeri."
      },
      dasarHukum: [{ pasal: "UU 10/2020 Pasal 3 ayat (2) huruf a", berlakuSejak: "2021-01-01" }, { pasal: "UU 10/2020 Pasal 8 ayat (1) huruf e", berlakuSejak: "2021-01-01" }, { pasal: "UU 10/2020 Pasal 9 ayat (5)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-103",
      sejak: "9.5.0"
    },
    {
      id: "A5-105",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Pada 14 September 2026 CV Teratai Biru, bengkel perawatan mesin industri di Surabaya, menandatangani dan menyerahkan empat dokumen pada hari itu juga: (1) kuitansi pelunasan tagihan servis dari seorang pelanggan sebesar Rp7.250.000 yang ditandatangani kasir dan diserahkan kepada pelanggan; (2) surat perjanjian pemeliharaan genset dengan sebuah pabrik roti senilai Rp2.400.000 per tahun, ditandatangani kedua pihak; (3) tanda terima pembayaran uang lembur Agustus kepada 12 teknisi tetap, seluruhnya Rp6.800.000; (4) konosemen dari perusahaan pelayaran atas pengiriman mesin senilai Rp60.000.000 ke Makassar. Dokumen yang terutang bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(1) saja", C: "(1), (2), dan (3)", D: "(1), (2), (3), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kuitansi pelunasan Rp7.250.000 melebihi ambang Rp5.000.000 sehingga terutang (Pasal 3 ayat (2) huruf g), dan surat perjanjian terutang berapa pun nilainya (Pasal 3 ayat (2) huruf a). Uang lembur adalah pembayaran yang berkaitan dengan hubungan kerja (Pasal 7 huruf c) dan konosemen adalah dokumen lalu lintas barang (Pasal 7 huruf a); keduanya tidak dikenai bea meterai berapa pun nilainya.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Menerapkan ambang Rp5.000.000 pada surat perjanjian; ambang itu hanya untuk dokumen yang menyatakan jumlah uang (huruf g), sedangkan perjanjian terutang tanpa batas nilai",
          C: "Mengira pengecualian Pasal 7 huruf c hanya untuk gaji; uang lembur termasuk \"pembayaran lainnya yang berkaitan dengan hubungan kerja\"",
          D: "Mengabaikan seluruh pengecualian Pasal 7, termasuk konosemen (huruf a angka 2) dan pembayaran hubungan kerja (huruf c)"
        },
        jebakan: "Nilai Rp6.800.000 dan Rp60.000.000 yang melebihi ambang hanyalah umpan; pengecualian Pasal 7 tidak mengenal batas nilai, sedangkan perjanjian bernilai kecil tetap terutang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-001",
      sejak: "9.5.0"
    },
    {
      id: "A5-106",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      kutipan: "Pasal 3 ayat (2) huruf g UU 10/2020: Dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000,00 (lima juta rupiah) yang: 1. menyebutkan penerimaan uang; atau 2. berisi pengakuan bahwa utang seluruhnya atau sebagiannya telah dilunasi atau diperhitungkan.",
      stem: "Pada 19 Agustus 2026 CV Sumber Rejeki Furnitur membuat dan menyerahkan kepada pelanggannya empat kuitansi penerimaan uang masing-masing sebesar Rp3.500.000, Rp5.000.000, Rp5.250.000, dan Rp12.000.000, serta satu surat keterangan lunas yang menyatakan cicilan seorang pelanggan sebesar Rp8.000.000 telah dilunasi seluruhnya. Berdasarkan kutipan tersebut, total bea meterai yang terutang atas kelima dokumen adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp30.000", C: "Rp18.000", D: "Rp50.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang terutang hanya dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000: kuitansi Rp5.250.000, kuitansi Rp12.000.000, dan surat keterangan lunas Rp8.000.000 (pengakuan pelunasan utang). Tarif tetap Rp10.000 per dokumen.",
        jejakHitung: [
          ["Kuitansi Rp3.500.000 dan Rp5.000.000", "tidak terutang (tidak lebih dari Rp5 juta)"],
          ["Kuitansi Rp5.250.000", "Rp10.000"],
          ["Kuitansi Rp12.000.000", "Rp10.000"],
          ["Surat keterangan lunas Rp8.000.000", "Rp10.000"],
          ["Total 3 × Rp10.000", "Rp30.000"]
        ],
        mengapaSalah: {
          A: "Menghitung kuitansi tepat Rp5.000.000 sebagai terutang (4 dokumen); syaratnya \"lebih dari\" Rp5.000.000",
          C: "Memakai tarif lama Rp6.000 per dokumen dari UU 13/1985 untuk tiga dokumen",
          D: "Menganggap kelima dokumen terutang tanpa memperhatikan ambang nilai nominal"
        },
        jebakan: "Nilai tepat Rp5.000.000 tidak terutang, sedangkan surat keterangan lunas ikut terutang karena berisi pengakuan pelunasan utang di atas ambang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-002",
      sejak: "9.5.0"
    },
    {
      id: "A5-107",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kutipan: "Pasal 3 ayat (2) huruf g UU 10/2020: Dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000,00 (lima juta rupiah) yang: 1. menyebutkan penerimaan uang; atau 2. berisi pengakuan bahwa utang seluruhnya atau sebagiannya telah dilunasi atau diperhitungkan.",
      stem: "PT Arunika Kreatif (PKP), penyedia jasa produksi video, pada Oktober 2026 menyerahkan tiga dokumen kepada tiga klien. Klien 1: jasa seharga Rp4.500.000 ditambah PPN (DPP nilai lain 11/12 × harga, tarif 12%); kuitansi menyebut uang diterima sebesar harga ditambah PPN. Klien 2: jasa seharga Rp4.560.000 ditambah PPN dengan cara yang sama; klien memotong PPh Pasal 23 sebesar 2% dari harga, dan kuitansi hanya mencantumkan uang yang benar-benar diterima. Klien 3: nota yang menyatakan utang klien kepada PT Arunika Kreatif sebesar Rp5.800.000 telah diperhitungkan seluruhnya dengan utang PT Arunika Kreatif kepada klien itu atas sewa peralatan. Berdasarkan kutipan tersebut, total bea meterai yang terutang atas ketiga dokumen adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000", B: "Rp30.000", C: "Nihil", D: "Rp10.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Ambang diuji pada jumlah uang yang dinyatakan dalam dokumen. Kuitansi klien 1 menyatakan Rp4.995.000 dan kuitansi klien 2 menyatakan Rp4.970.400; keduanya tidak lebih dari Rp5.000.000. Nota klien 3 berisi pengakuan bahwa utang Rp5.800.000 telah diperhitungkan (huruf g angka 2) sehingga terutang Rp10.000.",
        jejakHitung: [
          ["Klien 1: PPN = 4.500.000 × 11/12 × 12%", "Rp495.000"],
          ["Klien 1: jumlah dalam kuitansi", "Rp4.995.000 → tidak terutang"],
          ["Klien 2: PPN = 4.560.000 × 11/12 × 12%", "Rp501.600"],
          ["Klien 2: PPh 23 = 2% × 4.560.000", "Rp91.200"],
          ["Klien 2: 4.560.000 + 501.600 − 91.200", "Rp4.970.400 → tidak terutang"],
          ["Klien 3: utang Rp5.800.000 diperhitungkan", "terutang Rp10.000"],
          ["Total 1 × Rp10.000", "Rp10.000"]
        ],
        mengapaSalah: {
          A: "Menguji kuitansi klien 2 pada jumlah sebelum potongan PPh 23 (Rp5.061.600), padahal kuitansi hanya menyatakan Rp4.970.400",
          B: "Mengabaikan DPP 11/12 sehingga PPN menjadi 12% dari harga: klien 1 Rp5.040.000 dan klien 2 Rp5.016.000 seolah terutang",
          C: "Menganggap utang yang diperhitungkan bukan pelunasan; huruf g angka 2 tegas menyebut utang yang \"dilunasi atau diperhitungkan\""
        },
        jebakan: "Dua kuitansi nyaris menyentuh ambang; hasilnya bergantung pada DPP 11/12 dan pada jumlah yang tertera setelah potongan PPh, sedangkan kompensasi utang termasuk pengakuan pelunasan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-019",
      sejak: "9.5.0"
    },
    {
      id: "A5-108",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Kencana Mulia, CV Batu Alam, dan Koperasi Tani Makmur menandatangani perjanjian kerja sama konsorsium pada 18 Mei 2026. Perjanjian dibuat dalam 4 rangkap asli yang masing-masing ditandatangani ketiga pihak: satu untuk tiap pihak dan satu lagi disimpan PT Kencana Mulia sebagai ketua konsorsium. Sesudahnya, sekretariat membuat 6 fotokopi tanpa tanda tangan basah untuk arsip dan bahan rapat internal. Berapa bea meterai yang terutang?",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000", B: "Rp10.000", C: "Rp40.000", D: "Rp24.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Surat perjanjian beserta rangkapnya adalah objek bea meterai dan terutang saat dibubuhi tanda tangan. Keempat rangkap asli ditandatangani sehingga masing-masing terutang Rp10.000; fotokopi tanpa tanda tangan untuk arsip bukan rangkap yang ditandatangani dan tidak terutang.",
        jejakHitung: [
          ["Rangkap asli yang ditandatangani", "4"],
          ["Tarif per dokumen", "Rp10.000"],
          ["Fotokopi tanpa tanda tangan", "tidak terutang"],
          ["Total 4 × Rp10.000", "Rp40.000"]
        ],
        mengapaSalah: {
          A: "Menghitung fotokopi sebagai dokumen terutang (4 + 6 = 10 dokumen)",
          B: "Mengabaikan frasa \"beserta rangkapnya\" sehingga hanya satu dokumen yang dihitung",
          D: "Memakai tarif lama Rp6.000 per dokumen dari UU 13/1985 untuk 4 rangkap"
        },
        jebakan: "Rangkap keempat yang disimpan ketua konsorsium tetap terutang karena ikut ditandatangani; yang membedakan adalah tanda tangan, bukan siapa yang menyimpan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-003",
      sejak: "9.5.0"
    },
    {
      id: "A5-109",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "PT Gemilang Agro, perusahaan perkebunan karet yang juga menyewakan gudang, sedang menyusun pedoman pemeteraian untuk tahun 2027. Bagian keuangan mengumpulkan dokumen yang menurut Pasal 7 UU 10/2020 tidak dikenai bea meterai tanpa melihat nilainya. Semua dokumen berikut tepat masuk ke kelompok tersebut, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Surat penyimpanan barang atas karet titipan milik koperasi petani di gudang perusahaan", B: "Tanda terima uang tunjangan perumahan bulanan yang ditandatangani mandor kebun berstatus pegawai tetap", C: "Kuitansi uang muka penjualan karet Rp15.000.000 yang dibuat bagian keuangan dan diserahkan kepada pembeli", D: "Tanda pembayaran bunga kupon obligasi perusahaan kepada para pemegang obligasi" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kuitansi uang muka Rp15.000.000 menyebutkan penerimaan uang lebih dari Rp5.000.000 (Pasal 3 ayat (2) huruf g) dan terutang saat diserahkan kepada pembeli; ia tidak termasuk pengecualian Pasal 7. Tiga dokumen lain dikecualikan tegas oleh Pasal 7.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Surat penyimpanan barang adalah dokumen lalu lintas barang (Pasal 7 huruf a angka 1)",
          B: "Tanda terima uang tunjangan pegawai dikecualikan Pasal 7 huruf c",
          D: "Tanda pembagian bunga atau imbal hasil dari surat berharga dikecualikan Pasal 7 huruf i"
        },
        jebakan: "Kata \"kecuali\" membalik pertanyaan: yang dicari dokumen yang justru terutang. Kuitansi kepada pihak luar tidak sama dengan tanda penerimaan uang untuk keperluan intern."
      },
      dasarHukum: [{ pasal: "Pasal 7 huruf a, c, dan i UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-004",
      sejak: "9.5.0"
    },
    {
      id: "A5-110",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      kutipan: "Pasal 7 huruf c UU 10/2020: Bea Meterai tidak dikenakan atas Dokumen yang berupa tanda terima pembayaran gaji, uang tunggu, pensiun, uang tunjangan, dan pembayaran lainnya yang berkaitan dengan hubungan kerja, serta surat yang diserahkan untuk mendapatkan pembayaran dimaksud.",
      stem: "PT Bina Karya Konstruksi pada November 2026 memperoleh empat dokumen: (1) tanda terima bonus kinerja tahunan seorang manajer proyek berstatus pegawai tetap sebesar Rp18.000.000; (2) kuitansi honorarium konsultan pajak independen yang bukan pegawai perusahaan sebesar Rp8.500.000, ditandatangani konsultan dan diserahkan kepada perusahaan; (3) surat permohonan pencairan tunjangan cuti tahunan sebesar Rp6.000.000 yang diajukan seorang pegawai kepada bagian keuangan; (4) kuitansi honorarium juri lomba desain yang bukan pegawai perusahaan sebesar Rp4.750.000, diserahkan kepada perusahaan. Berdasarkan kutipan tersebut, dokumen yang terutang bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(2) dan (4)", B: "(2) saja", C: "(2) dan (3)", D: "(1), (2), dan (3)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bonus pegawai tetap dan surat permohonan pencairan tunjangan cuti termasuk pengecualian Pasal 7 huruf c (pembayaran yang berkaitan dengan hubungan kerja, serta surat yang diserahkan untuk mendapatkan pembayaran itu). Konsultan dan juri bukan pegawai sehingga kuitansinya diuji dengan ambang Pasal 3 ayat (2) huruf g: Rp8.500.000 terutang, Rp4.750.000 tidak.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kuitansi juri Rp4.750.000 tidak lebih dari Rp5.000.000 sehingga tidak terutang walaupun penerimanya bukan pegawai",
          C: "Surat yang diserahkan untuk mendapatkan pembayaran tunjangan termasuk pengecualian Pasal 7 huruf c",
          D: "Bonus kinerja pegawai tetap adalah pembayaran yang berkaitan dengan hubungan kerja, dan surat permohonan pencairan tunjangan juga dikecualikan"
        },
        jebakan: "Pengecualian huruf c mencakup juga surat untuk meminta pembayaran, dan status penerima menentukan; dokumen penerima bukan pegawai kembali diuji dengan ambang Rp5.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 7 huruf c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-020",
      sejak: "9.5.0"
    },
    {
      id: "A5-111",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "CV Lentera Niaga menjual perlengkapan kantor kepada Nyonya Sari. Pada 8 Juni 2026 Nyonya Sari membayar Rp4.500.000 dan menerima kuitansi yang dibuat serta ditandatangani CV Lentera Niaga tanpa dibubuhi meterai. Pada Oktober 2026 CV Lentera Niaga menggugat Nyonya Sari ke pengadilan negeri karena menganggap pembayaran itu belum diterima. Nyonya Sari akan mengajukan kuitansi tersebut sebagai alat bukti. Pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kuitansi dimeteraikan kemudian Rp10.000 tanpa sanksi, dan yang wajib membayar adalah CV Lentera Niaga sebagai pembuat kuitansi", B: "Kuitansi dimeteraikan kemudian Rp10.000 ditambah sanksi 100%, karena tidak dibubuhi meterai pada 8 Juni 2026", C: "Kuitansi dapat langsung diajukan tanpa pemeteraian kemudian, karena nilainya tidak lebih dari Rp5.000.000", D: "Kuitansi dimeteraikan kemudian Rp10.000 tanpa sanksi, dan yang wajib membayar adalah Nyonya Sari sebagai pihak yang mengajukan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi Rp4.500.000 tidak terutang saat diserahkan karena tidak lebih dari Rp5.000.000, sehingga tidak ada bea meterai yang kurang dibayar. Saat diajukan sebagai alat bukti di pengadilan, kuitansi menjadi objek Pasal 3 ayat (1) huruf b dan dilunasi melalui pemeteraian kemudian sebesar bea meterai terutang saja (Pasal 18 ayat (1) huruf b), tanpa sanksi. Pihak Yang Terutang adalah pihak yang mengajukan dokumen (Pasal 9 ayat (4)).",
        jejakHitung: [
          ["Saat diserahkan 8 Juni 2026", "Rp4.500.000, tidak lebih dari Rp5 juta → tidak terutang"],
          ["Saat diajukan ke pengadilan", "objek Pasal 3 ayat (1) huruf b"],
          ["Pemeteraian kemudian", "Rp10.000, tanpa sanksi"],
          ["Pihak Yang Terutang", "Nyonya Sari (pihak yang mengajukan)"]
        ],
        mengapaSalah: {
          A: "Untuk alat bukti di pengadilan, Pihak Yang Terutang adalah pihak yang mengajukan dokumen (Pasal 9 ayat (4)), bukan pembuat kuitansi",
          B: "Sanksi 100% hanya untuk dokumen yang bea meterainya tidak atau kurang dibayar; kuitansi ini semula tidak terutang",
          C: "Ambang Rp5.000.000 hanya untuk dokumen perdata huruf g; dokumen yang diajukan sebagai alat bukti terutang apa pun nilainya"
        },
        jebakan: "Pengecoh sanksi 100% menggoda karena kuitansi tidak bermeterai, padahal sejak awal kuitansi itu memang tidak terutang; kewajiban baru lahir saat diajukan ke pengadilan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b dan Pasal 9 ayat (4) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-005",
      sejak: "9.5.0"
    },
    {
      id: "A5-112",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "CV Mekar Sentosa menjual bahan bangunan kepada PT Wira Griya. Pada 3 Agustus 2026 CV Mekar Sentosa menerbitkan invoice Rp9.600.000 dengan jangka waktu pembayaran 45 hari. Pada 21 Agustus 2026 PT Wira Griya membayar Rp6.000.000 dan menerima kuitansi Rp6.000.000. Pada 14 September 2026 PT Wira Griya membayar sisanya Rp3.600.000, lalu CV Mekar Sentosa menyerahkan kepada PT Wira Griya invoice semula yang telah dibubuhi cap \"LUNAS\" dengan keterangan \"telah dibayar lunas Rp9.600.000\" dan ditandatangani kasir. Dokumen yang terutang bea meterai beserta saat terutangnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kuitansi Rp6.000.000 (terutang 21 Agustus 2026) dan invoice bercap lunas Rp9.600.000 (terutang 14 September 2026)", B: "Hanya invoice bercap lunas Rp9.600.000 (terutang 14 September 2026), karena kedua pembayaran untuk satu tagihan", C: "Invoice Rp9.600.000 (terutang 3 Agustus 2026) dan kuitansi Rp6.000.000 (terutang 21 Agustus 2026)", D: "Hanya kuitansi Rp6.000.000 (terutang 21 Agustus 2026), karena invoice bercap lunas tetap dokumen tagihan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi Rp6.000.000 menyebutkan penerimaan uang lebih dari Rp5.000.000 dan terutang saat diserahkan pada 21 Agustus 2026. Invoice yang belum dibayar hanya tagihan dan bukan objek; setelah dibubuhi keterangan \"telah dibayar lunas Rp9.600.000\", invoice itu berisi pengakuan pelunasan utang di atas ambang dan terutang saat diserahkan pada 14 September 2026. Bea meterai dikenakan sekali untuk setiap dokumen, sehingga kedua dokumen masing-masing terutang.",
        jejakHitung: [
          ["Invoice 3 Agustus 2026 (belum dibayar)", "bukan objek"],
          ["Kuitansi Rp6.000.000", "lebih dari Rp5 juta → terutang saat diserahkan 21 Agustus 2026"],
          ["Invoice bercap lunas Rp9.600.000", "pengakuan pelunasan → terutang saat diserahkan 14 September 2026"],
          ["Jumlah dokumen terutang", "2 × Rp10.000 = Rp20.000"]
        ],
        mengapaSalah: {
          B: "Setiap dokumen diuji sendiri (Pasal 4); kuitansi Rp6.000.000 sudah melebihi ambang walaupun pembayarannya untuk tagihan yang sama",
          C: "Pada 3 Agustus invoice hanya tagihan; ia tidak menyebutkan penerimaan uang atau pengakuan pelunasan",
          D: "Keterangan \"telah dibayar lunas Rp9.600.000\" menjadikan invoice dokumen pengakuan pelunasan utang (Pasal 3 ayat (2) huruf g angka 2)"
        },
        jebakan: "Status dokumen dapat berubah: tagihan yang kemudian dibubuhi pengakuan lunas menjadi objek saat diserahkan, dan pembayaran bertahap tidak menggabungkan dokumen menjadi satu."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-006",
      sejak: "9.5.0"
    },
    {
      id: "A5-113",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "PT Lintas Data Nusantara, penyedia layanan komputasi awan, menerima pembayaran Rp7.800.000 dari seorang klien pada 16 Oktober 2026. Hari itu juga perusahaan mengirimkan kepada klien kuitansi elektronik berbentuk PDF yang ditandatangani dengan tanda tangan elektronik melalui surel. Kuitansi tidak pernah dicetak, Sistem Meterai Elektronik berfungsi normal, dan kedua pihak sepakat perusahaan yang melunasi bea meterainya. Perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terutang, karena kuitansi berbentuk elektronik dan tidak pernah dicetak", B: "Terutang Rp10.000, tetapi baru pada saat kuitansi itu dicetak oleh klien", C: "Terutang Rp10.000 dan dilunasi dengan Surat Setoran Pajak karena dokumennya elektronik", D: "Terutang Rp10.000 dan dilunasi dengan membubuhkan Meterai Elektronik melalui sistemnya" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 1 UU 10/2020 menegaskan dokumen mencakup bentuk elektronik dan tanda tangan mencakup tanda tangan elektronik. Kuitansi Rp7.800.000 menyebutkan penerimaan uang lebih dari Rp5.000.000, terutang saat diserahkan kepada klien, dan dilunasi dengan membubuhkan Meterai Elektronik melalui Sistem Meterai Elektronik (PMK 78/2024 Pasal 16).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Definisi dokumen dalam UU 10/2020 mencakup dokumen elektronik",
          B: "Kuitansi terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat; pencetakan tidak menentukan",
          C: "Surat Setoran Pajak hanya dipakai dalam keadaan Pasal 42 PMK 78/2024, mis. Sistem Meterai Elektronik tidak dapat diakses; di sini sistem berfungsi normal"
        },
        jebakan: "Bentuk elektronik tidak membebaskan dokumen dari bea meterai, dan sarana pelunasannya bukan pilihan bebas: Surat Setoran Pajak terbatas pada keadaan tertentu."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19" }, { pasal: "PMK 78/2024 Pasal 16 dan Pasal 42", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-007",
      sejak: "9.5.0"
    },
    {
      id: "A5-114",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "Dalam gugatan wanprestasi di pengadilan negeri, Tuan Hendra selaku tergugat mengajukan empat dokumen sebagai alat bukti: (1) cetakan tangkapan layar transfer mobile banking sebesar Rp2.750.000; (2) cetakan surel dari penggugat yang menanyakan jadwal penyerahan barang; (3) nota pembelian bahan sebesar Rp1.200.000; (4) cetakan daftar harga barang yang diunduh dari situs web penggugat. Tidak satu pun dokumen itu pernah dibubuhi meterai. Pernyataan yang tepat mengenai bea meterai atas dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Keempat dokumen terutang saat diajukan ke pengadilan, dan Tuan Hendra yang menjadi Pihak Yang Terutang", B: "Hanya dokumen (1) dan (3) yang terutang, karena hanya kedua dokumen itu yang menyatakan jumlah uang", C: "Keempat dokumen terutang, tetapi Pihak Yang Terutang adalah pihak yang membuat setiap dokumen", D: "Tidak ada yang terutang, karena nilai setiap dokumen tidak lebih dari Rp5.000.000 dan tidak ada perjanjian" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 3 ayat (1) huruf b menjadikan dokumen yang digunakan sebagai alat bukti di pengadilan sebagai objek bea meterai, termasuk dokumen yang sebelumnya tidak dikenai bea meterai karena bukan objek Pasal 3 ayat (2), berapa pun nilainya. Bea meterai terutang saat dokumen diajukan ke pengadilan (Pasal 8 ayat (1) huruf d) oleh pihak yang mengajukan dokumen (Pasal 9 ayat (4)), yaitu Tuan Hendra, dan dilunasi melalui Pemeteraian Kemudian.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Ambang dan daftar dokumen perdata Pasal 3 ayat (2) tidak menentukan objek alat bukti; surel dan daftar harga juga menjadi objek saat diajukan ke pengadilan",
          C: "Untuk alat bukti di pengadilan, bea meterai terutang oleh pihak yang mengajukan dokumen (Pasal 9 ayat (4)), bukan pembuatnya",
          D: "Ambang Rp5.000.000 hanya berlaku bagi dokumen perdata huruf g; objek Pasal 3 ayat (1) huruf b tidak mengenal batas nilai atau jenis dokumen"
        },
        jebakan: "Peserta cenderung menguji tiap dokumen dengan ambang dan daftar dokumen perdata, padahal yang menentukan adalah penggunaannya sebagai alat bukti, dan pihak terutangnya pengaju, termasuk bila pengaju adalah tergugat."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf d dan Pasal 9 ayat (4) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-008",
      sejak: "9.5.0"
    },
    {
      id: "A5-115",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Kantor Wilayah DJP menyiapkan bahan sosialisasi bagi pengurus Yayasan Kasih Lestari, Otoritas Jasa Keuangan daerah, dan sebuah lembaga mitra organisasi internasional. Yayasan itu mengelola panti jompo dan juga berencana membeli satu unit ruko yang akan disewakan kepada pedagang, dengan hasil sewa dipakai untuk membiayai panti. Dokumen berikut termasuk kelompok dokumen yang dapat diberikan fasilitas pembebasan dari pengenaan bea meterai menurut Pasal 22 UU 10/2020, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Dokumen dalam rangka melaksanakan kebijakan otoritas jasa keuangan untuk penyehatan lembaga jasa keuangan", B: "Akta pengalihan hak atas ruko yang dibeli yayasan untuk disewakan kepada pedagang demi membiayai panti", C: "Dokumen pengalihan hak atas tanah dan bangunan yang hanya dipakai sebagai panti jompo yang tidak mencari untung", D: "Dokumen terkait pelaksanaan perjanjian internasional antara Indonesia dan organisasi internasional yang telah mengikat" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 22 ayat (1) huruf b hanya mencakup pengalihan hak atas tanah dan/atau bangunan yang digunakan untuk kegiatan yang semata-mata keagamaan dan/atau sosial yang tidak bersifat komersial. Ruko yang disewakan kepada pedagang dipakai untuk kegiatan komersial; tujuan akhir hasil sewa (membiayai panti) tidak mengubah penggunaan bangunannya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Termasuk huruf c: dokumen dalam rangka kebijakan lembaga yang berwenang di bidang jasa keuangan, antara lain penyehatan lembaga jasa keuangan (Penjelasan)",
          C: "Termasuk huruf b: bangunan yang hanya dipakai untuk kegiatan sosial seperti panti jompo yang tidak mencari keuntungan (Penjelasan)",
          D: "Termasuk huruf d: dokumen terkait pelaksanaan perjanjian internasional yang telah mengikat, termasuk dengan organisasi internasional"
        },
        jebakan: "Yang diuji adalah penggunaan tanah atau bangunannya, bukan siapa pembelinya atau ke mana hasilnya disalurkan. Yayasan sosial yang membeli bangunan untuk disewakan tidak memenuhi syarat \"semata-mata\" dan \"tidak bersifat komersial\"."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) UU 10/2020 beserta Penjelasannya", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-009",
      sejak: "9.5.0"
    },
    {
      id: "A5-116",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Arunika Persada membeli perlengkapan kantor dari CV Sinar Kriya seharga Rp22.000.000 dan membayarnya dalam empat kali angsuran pada Februari sampai Mei 2026, masing-masing Rp5.000.000, Rp5.000.000, Rp6.000.000, dan Rp6.000.000. Setiap kali menerima angsuran, CV Sinar Kriya menyerahkan kuitansi sebesar angsuran yang diterima. Setelah angsuran terakhir, CV Sinar Kriya menyerahkan surat keterangan lunas yang menyatakan bahwa utang PT Arunika Persada sebesar Rp22.000.000 telah dilunasi seluruhnya. Total bea meterai yang terutang atas seluruh dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp20.000", C: "Rp40.000", D: "Rp30.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Tiap dokumen diuji atas nilai yang tercantum di dokumen itu sendiri. Kuitansi Rp5.000.000 tidak melebihi Rp5.000.000 sehingga tidak terutang; dua kuitansi Rp6.000.000 terutang; surat keterangan lunas berisi pengakuan pelunasan utang Rp22.000.000 sehingga terutang. Total 3 dokumen × Rp10.000 = Rp30.000.",
        jejakHitung: [
          ["Kuitansi 2 × Rp5.000.000", "tidak lebih dari Rp5.000.000 → tidak terutang"],
          ["Kuitansi 2 × Rp6.000.000", "2 × Rp10.000 = Rp20.000"],
          ["Surat keterangan lunas Rp22.000.000", "pengakuan pelunasan utang → Rp10.000"],
          ["Total", "Rp30.000"]
        ],
        mengapaSalah: {
          A: "Menganggap kuitansi bernilai tepat Rp5.000.000 ikut terutang (5 dokumen × Rp10.000); syarat Pasal 3 ayat (2) huruf g adalah lebih dari Rp5.000.000",
          B: "Hanya menghitung dua kuitansi Rp6.000.000 dan melupakan surat keterangan lunas, padahal surat itu berisi pengakuan pelunasan utang Rp22.000.000",
          C: "Menjumlahkan angsuran secara kumulatif (Rp10 juta, Rp16 juta, Rp22 juta dianggap melewati ambang) lalu menambah surat lunas; nilai tiap kuitansi tidak dikumulasikan"
        },
        jebakan: "Ambang Rp5.000.000 berbunyi \"lebih dari\", sehingga kuitansi tepat Rp5.000.000 tidak terutang. Pemecahan pembayaran tidak menggabungkan nilai kuitansi, tetapi dokumen pelunasan akhir menyebut seluruh utang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-031",
      sejak: "9.5.0"
    },
    {
      id: "A5-117",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-09",
      stem: "Data untuk soal vignette V-A5-09: Pada 20 Mei 2026 PT Laras Pangan: (a) menandatangani perjanjian kerja sama distribusi dengan CV Tirta Makmur dan PT Banyu Logistik dalam 3 rangkap asli, satu rangkap untuk tiap pihak; (b) menerbitkan dan menyerahkan kuitansi penerimaan uang Rp7.500.000 kepada PT Sentra Boga dan kuitansi Rp5.000.000 kepada pelanggan lain; (c) menerima konosemen dari perusahaan pelayaran untuk pengiriman barang senilai Rp45.000.000; (d) menyerahkan surat kuasa direksi kepada seorang staf untuk mengurus perizinan. Total bea meterai yang terutang atas seluruh dokumen tersebut, siapa pun pihak terutangnya, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp30.000", C: "Rp60.000", D: "Rp40.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Yang terutang: 3 rangkap perjanjian (Rp30.000), kuitansi Rp7.500.000 (Rp10.000), dan surat kuasa sebagai surat yang sejenis dengan surat pernyataan (Rp10.000). Kuitansi Rp5.000.000 tidak melebihi ambang dan konosemen dikecualikan Pasal 7 huruf a.",
        jejakHitung: [
          ["Perjanjian 3 rangkap × Rp10.000", "Rp30.000"],
          ["Kuitansi Rp7.500.000", "Rp10.000"],
          ["Kuitansi Rp5.000.000", "tidak lebih dari Rp5.000.000 → tidak terutang"],
          ["Konosemen (Pasal 7 huruf a angka 2)", "bukan objek"],
          ["Surat kuasa direksi", "Rp10.000"],
          ["Total", "Rp50.000"]
        ],
        mengapaSalah: {
          B: "Menghitung perjanjian sebagai satu dokumen, padahal tiap rangkap asli terutang (Penjelasan Pasal 3 ayat (2) huruf a)",
          C: "Menghitung konosemen sebagai objek karena nilainya besar (atau menganggap kuitansi tepat Rp5.000.000 terutang)",
          D: "Menganggap surat kuasa bukan objek, padahal Penjelasan menyebut surat kuasa sebagai surat yang sejenis dengan surat pernyataan"
        },
        jebakan: "Nilai konosemen Rp45.000.000 adalah umpan: dokumen lalu lintas barang bukan objek berapa pun nilainya. Surat kuasa tidak menyebut jumlah uang, tetapi tetap terutang sebagai surat sejenis."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf a UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-010",
      sejak: "9.5.0"
    },
    {
      id: "A5-118",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-09",
      stem: "Lanjutan V-A5-09: Perjanjian kerja sama distribusi antara PT Laras Pangan, CV Tirta Makmur, dan PT Banyu Logistik ditandatangani 20 Mei 2026 dalam 3 rangkap asli, masing-masing pihak memegang satu rangkap. Salah satu pasalnya menyatakan bahwa seluruh bea meterai atas perjanjian ditanggung dan dibayar oleh PT Laras Pangan. Kuitansi Rp7.500.000 dibuat PT Laras Pangan dan diserahkan kepada pelanggannya, PT Sentra Boga. Pihak yang terutang bea meterai menurut Pasal 9 UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rangkap perjanjian: PT Laras Pangan atas ketiga rangkap sesuai klausul; kuitansi: PT Laras Pangan sebagai pembuat", B: "Rangkap perjanjian: masing-masing pihak atas rangkap yang diterimanya; kuitansi: PT Laras Pangan sebagai pembuat", C: "Rangkap perjanjian: masing-masing pihak atas rangkap yang diterimanya; kuitansi: PT Sentra Boga sebagai penerima", D: "Rangkap perjanjian: PT Laras Pangan atas ketiga rangkap sesuai klausul; kuitansi: PT Sentra Boga sebagai penerima" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat dua pihak atau lebih terutang oleh masing-masing pihak atas dokumen yang diterimanya (Pasal 9 ayat (2)); dokumen sepihak seperti kuitansi terutang oleh pihak yang menerima dokumen (ayat (1)). Klausul bahwa PT Laras Pangan menanggung meterai hanya menentukan pihak yang membayar (ayat (6)), tidak mengubah pihak yang terutang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Klausul hanya mengatur siapa yang membayar, dan pembuat kuitansi bukan pihak terutang dokumen sepihak",
          B: "Untuk dokumen sepihak, yang terutang adalah penerima dokumen, bukan pembuatnya",
          D: "Pasal 9 ayat (6) membedakan pihak yang terutang dari pihak yang membayar; klausul tidak memindahkan kedudukan pihak terutang"
        },
        jebakan: "Pasal 9 ayat (6) membolehkan para pihak bersepakat tentang pihak yang membayar bea meterai, tetapi menyebutnya sebagai hal yang tidak dihalangi oleh ketentuan pihak terutang, bukan sebagai pengganti ketentuan itu."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1), (2), dan (6) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-013",
      sejak: "9.5.0"
    },
    {
      id: "A5-119",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) UU 10/2020: \"Bea Meterai terutang pada saat: a. Dokumen dibubuhi Tanda Tangan, untuk: 1. surat perjanjian beserta rangkapnya ...; 2. akta notaris beserta grosse, salinan, dan kutipannya ...; dan 3. akta Pejabat Pembuat Akta Tanah beserta salinan dan kutipannya .... b. Dokumen selesai dibuat, untuk: 1. surat berharga dengan nama dan dalam bentuk apa pun ...; dan 2. Dokumen transaksi surat berharga .... c. Dokumen diserahkan kepada pihak untuk siapa Dokumen tersebut dibuat, untuk: 1. surat keterangan, surat pernyataan, atau surat lainnya yang sejenis, beserta rangkapnya ...; 2. Dokumen lelang ...; dan 3. Dokumen yang menyatakan jumlah uang ....\"",
      stem: "Pada 3 September 2026 pejabat lelang selesai membuat dan menandatangani kutipan risalah lelang atas sebidang tanah (dokumen P); kutipan itu baru diambil dan diterima pembeli lelang, Tuan Bagas, pada 10 September 2026. Pada 4 September 2026 PT Gema Karya dan PT Lintang Teknik menandatangani surat perjanjian pinjam pakai alat berat (dokumen Q); rangkap milik PT Lintang Teknik baru dikirim dan diterima pada 9 September 2026. Berdasarkan kutipan tersebut, saat terutang bea meterai dokumen P dan dokumen Q adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen P 3 September 2026; dokumen Q 9 September 2026", B: "Dokumen P 3 September 2026; dokumen Q 4 September 2026", C: "Dokumen P 10 September 2026; dokumen Q 4 September 2026", D: "Dokumen P 10 September 2026; dokumen Q 9 September 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kutipan risalah lelang adalah dokumen lelang yang terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (huruf c), yaitu 10 September 2026. Surat perjanjian beserta rangkapnya terutang saat dibubuhi tanda tangan (huruf a), yaitu 4 September 2026, walaupun rangkapnya baru dikirim kemudian.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kedua aturan tertukar: dokumen lelang memakai saat penyerahan, perjanjian memakai saat tanda tangan",
          B: "Tanda tangan pejabat lelang bukan saat terutang dokumen lelang; yang menentukan adalah penyerahan kepada pembeli",
          D: "Pengiriman rangkap bukan saat terutang surat perjanjian; rangkap terutang saat dibubuhi tanda tangan"
        },
        jebakan: "Dokumen lelang dan surat perjanjian sama-sama ditandatangani, tetapi hanya perjanjian, akta notaris, dan akta PPAT yang terutang pada saat tanda tangan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-011",
      sejak: "9.5.0"
    },
    {
      id: "A5-120",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "CV Rimba Jati melunasi seluruh utangnya sebesar Rp18.000.000 kepada PT Kencana Baja pada 26 Oktober 2026. PT Kencana Baja membuat dan menandatangani surat keterangan lunas yang berisi pengakuan bahwa utang tersebut telah dilunasi pada 27 Oktober 2026, menyerahkannya kepada jasa kurir pada 30 Oktober 2026, dan surat itu diterima CV Rimba Jati pada 3 November 2026. Bea meterai atas surat keterangan lunas tersebut terutang pada ...",
      kataKualifikasi: [],
      opsi: { A: "27 Oktober 2026, saat surat ditandatangani PT Kencana Baja", B: "3 November 2026, saat surat diterima CV Rimba Jati", C: "30 Oktober 2026, saat surat diserahkan kepada jasa kurir", D: "26 Oktober 2026, saat pelunasan diterima PT Kencana Baja" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang berisi pengakuan pelunasan utang lebih dari Rp5.000.000 (sekaligus surat keterangan) terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c), yaitu saat diterima CV Rimba Jati pada 3 November 2026.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Saat tanda tangan berlaku untuk surat perjanjian, akta notaris, dan akta PPAT, bukan dokumen pelunasan",
          C: "Jasa kurir hanya perantara pengiriman, bukan pihak untuk siapa dokumen dibuat",
          D: "Pelunasan adalah peristiwa ekonomi; saat terutang ditentukan oleh peristiwa atas dokumennya"
        },
        jebakan: "Kata \"diserahkan\" dalam huruf c merujuk pada penyerahan kepada pihak untuk siapa dokumen dibuat; manfaat dokumen baru timbul saat diterima pihak itu (Penjelasan huruf c)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-012",
      sejak: "9.5.0"
    },
    {
      id: "A5-121",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Perjanjian pinjaman antara PT Samudra Hijau (Indonesia) dan Orchid Capital Pte. Ltd. ditandatangani di Singapura pada 12 Januari 2026. Naskah aslinya tiba di kantor PT Samudra Hijau di Surabaya pada 2 Februari 2026, dijadikan dasar pencatatan utang dalam pembukuan PT Samudra Hijau pada 16 Maret 2026, dan dilampirkan pada laporan keuangan yang diserahkan kepada bank pada 20 April 2026. Bea meterai atas perjanjian tersebut terutang pada ...",
      kataKualifikasi: [],
      opsi: { A: "12 Januari 2026, saat perjanjian ditandatangani", B: "2 Februari 2026, saat naskah tiba di Indonesia", C: "20 April 2026, saat dilampirkan pada laporan ke bank", D: "16 Maret 2026, saat dijadikan dasar pencatatan pembukuan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat di luar negeri terutang pada saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e). Penjelasannya memberi contoh perjanjian utang piutang luar negeri yang digunakan saat dijadikan dasar penagihan, dasar pencatatan atau pembukuan, atau lampiran laporan. Penggunaan pertama terjadi 16 Maret 2026; bea meterai dikenakan satu kali (Pasal 4).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Saat tanda tangan berlaku untuk perjanjian yang dibuat di Indonesia",
          B: "Kedatangan fisik dokumen bukan penggunaan",
          C: "Pelampiran pada laporan memang penggunaan, tetapi dokumen sudah lebih dulu digunakan pada 16 Maret 2026 dan bea meterai hanya terutang satu kali"
        },
        jebakan: "Ada dua peristiwa yang sama-sama termasuk contoh penggunaan dalam Penjelasan; saat terutang adalah penggunaan yang pertama."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 4 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-014",
      sejak: "9.5.0"
    },
    {
      id: "A5-122",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Arta Selaras, perseroan tertutup, menerbitkan 500 lembar saham baru yang dituangkan dalam satu surat kolektif saham. Surat kolektif saham itu selesai dibuat, bertanggal, dan ditandatangani direksi pada 2 Oktober 2026, diserahkan kepada pemegang saham baru pada 8 Oktober 2026, lalu dicatat dalam daftar pemegang saham pada 12 Oktober 2026. Saat terutang dan pihak yang terutang bea meterai atas surat berharga tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "2 Oktober 2026 (selesai dibuat); PT Arta Selaras sebagai penerbit", B: "8 Oktober 2026 (diserahkan); pemegang saham baru sebagai penerima", C: "2 Oktober 2026 (selesai dibuat); pemegang saham baru sebagai penerima", D: "12 Oktober 2026 (dicatat); PT Arta Selaras sebagai penerbit" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Surat berharga, termasuk surat kolektif saham, terutang pada saat selesai dibuat (Pasal 8 ayat (1) huruf b) dan terutang oleh pihak yang menerbitkannya (Pasal 9 ayat (3)). Penjelasan Pasal 3 ayat (2) huruf d: bea meterai hanya terutang atas surat kolektif sahamnya.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Saat diserahkan dan penerima dokumen berlaku untuk dokumen sepihak seperti kuitansi, bukan surat berharga",
          C: "Saatnya benar, tetapi Pasal 9 ayat (3) mengecualikan surat berharga dari aturan penerima dokumen: yang terutang penerbit",
          D: "Pencatatan dalam daftar pemegang saham bukan saat terutang; surat berharga terutang saat selesai dibuat"
        },
        jebakan: "Surat berharga tampak seperti dokumen sepihak yang diterima pemegang saham, tetapi Pasal 9 ayat (3) menunjuk penerbit sebagai pihak terutang."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (3) UU 10/2020 (surat berharga: penerbit)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-015",
      sejak: "9.5.0"
    },
    {
      id: "A5-123",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Divisi hukum PT Cakra Investama, yang rutin menerbitkan surat utang jangka menengah, menerima kontrak dari mitra di luar negeri, dan beberapa kali mengajukan dokumen sebagai alat bukti dalam gugatan perdata, menyusun daftar tanya jawab tentang pihak yang terutang bea meterai. Pernyataan berikut sesuai Pasal 9 UU 10/2020, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Atas dokumen yang dibuat di luar negeri dan digunakan di Indonesia, bea meterai terutang oleh pihak yang menerima manfaat atas dokumen", B: "Atas surat berharga, bea meterai terutang oleh pihak yang menerima surat berharga karena surat berharga dibuat oleh satu pihak saja", C: "Atas dokumen yang digunakan sebagai alat bukti di pengadilan, bea meterai terutang oleh pihak yang mengajukan dokumen tersebut", D: "Atas dokumen yang dibuat oleh dua pihak atau lebih, bea meterai terutang oleh masing-masing pihak atas dokumen yang diterimanya" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 9 ayat (3) mengecualikan surat berharga dari aturan dokumen sepihak dan dokumen dua pihak: bea meterai atas surat berharga terutang oleh pihak yang menerbitkannya, bukan penerimanya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Sesuai Pasal 9 ayat (5) untuk dokumen yang dibuat di luar negeri",
          C: "Sesuai Pasal 9 ayat (4) untuk dokumen alat bukti di pengadilan",
          D: "Sesuai Pasal 9 ayat (2) untuk dokumen yang dibuat dua pihak atau lebih"
        },
        jebakan: "Alasan \"dibuat oleh satu pihak\" terdengar sejalan dengan ayat (1), tetapi ayat (3) memuat pengecualian khusus untuk surat berharga."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) sampai (5) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-016",
      sejak: "9.5.0"
    },
    {
      id: "A5-124",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Konsultan pajak Sekar Arum menyiapkan lembar kerja kepatuhan bea meterai 2026 untuk empat klien: perusahaan efek, perusahaan penyewaan alat, toko grosir, dan perusahaan yang sering menerima kontrak dari mitra di luar negeri. Dari lembar kerja yang disusun asistennya, pasangan jenis dokumen dan saat terutang bea meterai yang tepat menurut Pasal 8 UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Konfirmasi transaksi saham di bursa: saat dokumen selesai dibuat oleh sistem", B: "Surat perjanjian sewa beserta rangkapnya: saat rangkap diserahkan kepada penyewa", C: "Kuitansi penerimaan uang Rp9.000.000: saat kuitansi ditandatangani kasir toko", D: "Kontrak yang ditandatangani di luar negeri: saat naskahnya tiba di Indonesia" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen transaksi surat berharga terutang saat selesai dibuat (Pasal 8 ayat (1) huruf b angka 2). Penjelasan huruf b memberi contoh trade confirmation pembelian saham di bursa: terutang saat dibuat secara sistem oleh perusahaan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Surat perjanjian beserta rangkapnya terutang saat dibubuhi tanda tangan (huruf a)",
          C: "Kuitansi terutang saat diserahkan kepada pihak untuk siapa dibuat, bukan saat ditandatangani (huruf c)",
          D: "Dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia, bukan saat tiba (huruf e)"
        },
        jebakan: "Ingat lima peristiwa Pasal 8 ayat (1): dibubuhi tanda tangan, selesai dibuat, diserahkan, diajukan ke pengadilan, dan digunakan di Indonesia."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-017",
      sejak: "9.5.0"
    },
    {
      id: "A5-125",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Lestari Gudang (pemilik) dan CV Arunika Niaga (penyewa) menandatangani perjanjian sewa gudang pada 3 Februari 2026 dalam 3 rangkap asli; Tuan Bramasta sebagai penjamin ikut menandatangani, dan setiap pihak menerima satu rangkap. Klausul perjanjian menyatakan seluruh biaya meterai ditanggung PT Lestari Gudang. Hanya rangkap CV Arunika Niaga yang dibubuhi meterai elektronik yang sah; rangkap PT Lestari Gudang dan rangkap Tuan Bramasta tidak bermeterai. Pada September 2026 PT Lestari Gudang hendak mengajukan rangkapnya sebagai alat bukti gugatan atas tunggakan sewa. Jumlah yang harus dilunasi melalui pemeteraian kemudian atas rangkap PT Lestari Gudang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000 tanpa sanksi, karena rangkap itu baru akan diajukan sebagai alat bukti di pengadilan", B: "Nihil, karena meterai elektronik pada rangkap CV Arunika Niaga sudah melunasi bea meterai perjanjian", C: "Rp20.000, terdiri atas bea meterai Rp10.000 dan sanksi administratif 100% sebesar Rp10.000", D: "Rp40.000, karena rangkap Tuan Bramasta yang belum bermeterai ikut dimeteraikan kemudian beserta sanksinya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Surat perjanjian terutang beserta rangkapnya; tiap rangkap asli adalah satu Dokumen yang terutang Rp10.000 sejak dibubuhi tanda tangan pada 3 Februari 2026. Rangkap PT Lestari Gudang tidak dilunasi, sehingga pemeteraian kemudian meliputi bea meterai terutang ditambah sanksi 100%. Pengajuan ke pengadilan tidak mengubahnya menjadi dokumen tanpa sanksi, karena dokumen itu sudah terutang sejak ditandatangani.",
        jejakHitung: [
          ["Rangkap PT Lestari Gudang terutang sejak", "3 Februari 2026 (ditandatangani)"],
          ["Bea meterai terutang", "Rp10.000"],
          ["Sanksi administratif 100%", "Rp10.000"],
          ["Rangkap CV Arunika Niaga", "sudah lunas, tidak memengaruhi rangkap lain"],
          ["Jumlah atas rangkap PT Lestari Gudang", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Tanpa sanksi hanya untuk dokumen yang semula tidak terutang dan baru menjadi objek karena dipakai sebagai alat bukti; rangkap ini sudah terutang sejak ditandatangani tetapi tidak dilunasi",
          B: "Setiap rangkap asli adalah Dokumen tersendiri; pelunasan pada satu rangkap tidak melunasi rangkap lain",
          D: "Yang ditanyakan hanya rangkap PT Lestari Gudang; klausul biaya juga hanya menentukan siapa yang membayar, tidak menambah rangkap yang harus dimeteraikan bersama"
        },
        jebakan: "Klausul \"biaya meterai ditanggung pemilik\" hanya mengatur pihak yang membayar (Pasal 9 ayat (6)), tidak mengurangi jumlah maupun sanksi, dan pengajuan ke pengadilan tidak menghapus sanksi atas dokumen yang sejak awal terutang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (tata cara pemeteraian kemudian)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-018",
      sejak: "9.5.0"
    },
    {
      id: "A5-126",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "KPKNL melaksanakan lelang noneksekusi wajib atas dua unit kendaraan dinas barang milik negara sebuah kementerian pada 7 Mei 2026. Lot 1 dimenangkan Nyonya Kirana Wulandari dan lot 2 dimenangkan CV Tirta Mandala. Kutipan risalah lelang lot 1 diserahkan kepada Nyonya Kirana pada 19 Mei 2026, sedangkan kutipan risalah lelang lot 2 diserahkan kepada CV Tirta Mandala pada 22 Mei 2026. Hasil bersih lelang disetor ke kas negara sebagai penerimaan negara. Saat terutang dan jumlah bea meterai atas kedua kutipan risalah lelang tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masing-masing saat diserahkan kepada pemenang (19 Mei dan 22 Mei 2026); total Rp20.000", B: "7 Mei 2026, saat lelang dilaksanakan; total Rp10.000 karena hanya ada satu pelaksanaan lelang", C: "19 Mei 2026 untuk kedua kutipan, saat kutipan pertama diserahkan; total Rp20.000", D: "Tidak terutang, karena hasil lelang barang milik negara merupakan penerimaan uang negara" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kutipan risalah lelang adalah Dokumen lelang yang menjadi objek bea meterai (Pasal 3 ayat (2) huruf f) dan terutang pada saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c angka 2). Tiap kutipan adalah dokumen tersendiri dengan saat terutang masing-masing; tarif Rp10.000 per dokumen.",
        jejakHitung: [
          ["Kutipan lot 1 (diserahkan 19 Mei 2026)", "Rp10.000"],
          ["Kutipan lot 2 (diserahkan 22 Mei 2026)", "Rp10.000"],
          ["Total", "Rp20.000"]
        ],
        mengapaSalah: {
          B: "Pelaksanaan lelang bukan saat terutang, dan bea meterai dikenakan per dokumen, bukan per pelaksanaan lelang",
          C: "Saat terutang mengikuti penyerahan masing-masing kutipan, sehingga kutipan lot 2 terutang pada 22 Mei 2026",
          D: "Pengecualian Pasal 7 huruf d hanya untuk tanda bukti penerimaan uang negara dari kas negara dan lembaga yang ditunjuk, bukan kutipan risalah lelang yang diserahkan kepada pembeli"
        },
        jebakan: "Status barang sebagai barang milik negara dan setoran hasil lelang ke kas negara tidak mengubah kutipan risalah lelang menjadi tanda bukti penerimaan uang negara."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf f UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf d UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-021",
      sejak: "9.5.0"
    },
    {
      id: "A5-127",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Sagara Kimia (Surabaya) dan Hoshino Seiki KK menandatangani perjanjian lisensi teknologi di Osaka pada 20 Februari 2026 dalam 2 rangkap; rangkap PT Sagara Kimia dibawa ke Surabaya. Pada 6 April 2026 rangkap itu dijadikan dasar pencatatan utang royalti dalam pembukuan PT Sagara Kimia tanpa dibubuhi meterai. Pada Juni 2026, sebelum ada teguran atau pemeriksaan, bagian pajak menyadari hal itu dan melakukan pemeteraian kemudian atas kemauan sendiri. Saat terutang, pihak terutang, dan jumlah yang harus dibayar melalui pemeteraian kemudian atas rangkap PT Sagara Kimia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "20 Februari 2026, saat ditandatangani; PT Sagara Kimia; Rp20.000 (pokok dan sanksi 100%)", B: "6 April 2026; PT Sagara Kimia sebagai penerima manfaat; Rp20.000 (pokok dan sanksi 100%)", C: "6 April 2026; PT Sagara Kimia; Rp10.000 tanpa sanksi karena dilunasi atas kemauan sendiri", D: "Tidak terutang, karena ditandatangani di luar negeri dan pencatatan pembukuan bukan penggunaan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat di luar negeri terutang pada saat digunakan di Indonesia, termasuk saat dijadikan dasar pencatatan atau pembukuan (Pasal 8 ayat (1) huruf e dan Penjelasannya), yaitu 6 April 2026, dan terutang oleh pihak yang menerima manfaat (Pasal 9 ayat (5)). Pembayaran wajib dilakukan pada saat terutang; karena tidak dilunasi, pemeteraian kemudian meliputi pokok dan sanksi 100%, walaupun dilakukan atas kemauan sendiri.",
        jejakHitung: [
          ["Saat terutang", "6 April 2026 (dasar pencatatan pembukuan di Indonesia)"],
          ["Pihak terutang", "PT Sagara Kimia (penerima manfaat)"],
          ["Pokok", "Rp10.000"],
          ["Sanksi 100%", "Rp10.000"],
          ["Total", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Saat terutang dokumen luar negeri bukan saat tanda tangan di luar negeri, melainkan saat digunakan di Indonesia",
          C: "Undang-undang tidak membebaskan sanksi karena pemeteraian kemudian dilakukan sukarela; sanksi 100% melekat pada bea meterai yang tidak dibayar saat terutang",
          D: "Penjelasan Pasal 8 ayat (1) huruf e menyebut dasar pencatatan atau pembukuan sebagai contoh penggunaan di Indonesia"
        },
        jebakan: "Dua fakta harus digabung: kapan dokumen luar negeri dianggap digunakan di Indonesia, dan bahwa pelunasan sesudah saat terutang tetap dikenai sanksi 100% meskipun atas kemauan sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (tata cara pemeteraian kemudian)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-022",
      sejak: "9.5.0"
    },
    {
      id: "A5-128",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Graha Tirtamas dan PT Samudra Logistik menandatangani perjanjian sewa armada senilai Rp42.500.000.000 setebal 85 halaman pada 9 Maret 2026 dalam 3 rangkap asli, dengan PT Bina Kredit Utama sebagai penjamin. Setiap rangkap ditandatangani ketiga pihak, dan masing-masing pihak menerima satu rangkap. Sekretaris perusahaan kemudian membuat 4 fotokopi tanpa tanda tangan untuk arsip divisi. Total bea meterai yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp70.000", B: "Rp10.000", C: "Rp90.000", D: "Rp30.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Tarif bea meterai tetap Rp10.000 per Dokumen tanpa memandang nilai kontrak dan jumlah halaman. Tiap rangkap asli yang ditandatangani adalah satu Dokumen yang terutang, berapa pun jumlah penanda tangannya; fotokopi tanpa tanda tangan tidak pernah dibubuhi tanda tangan sehingga tidak terutang.",
        jejakHitung: [
          ["Tarif tetap (Pasal 5)", "Rp10.000 per dokumen"],
          ["Nilai Rp42,5 miliar dan 85 halaman", "tidak memengaruhi"],
          ["Rangkap asli bertanda tangan", "3"],
          ["Fotokopi tanpa tanda tangan", "tidak terutang"],
          ["Total 3 x Rp10.000", "Rp30.000"]
        ],
        mengapaSalah: {
          A: "Menghitung 4 fotokopi tanpa tanda tangan sebagai dokumen terutang (7 x Rp10.000)",
          B: "Mengabaikan frasa \"beserta rangkapnya\" sehingga hanya menghitung satu perjanjian",
          C: "Mengalikan rangkap dengan 3 penanda tangan (9 x Rp10.000); jumlah pihak tidak menambah dokumen"
        },
        jebakan: "Nilai kontrak yang besar dan adanya pihak ketiga memancing peserta mencari tarif proporsional atau menghitung per penanda tangan; bea meterai dikenakan per dokumen."
      },
      dasarHukum: [{ pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-023",
      sejak: "9.5.0"
    },
    {
      id: "A5-129",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Empat perusahaan, yaitu PT Cendana Raya, PT Meranti Jaya, PT Ulin Perkasa, dan PT Eboni Sentosa, menandatangani perjanjian konsorsium pembangunan dermaga pada 4 Mei 2026 dalam 4 rangkap asli, satu untuk tiap anggota. Spesifikasi teknis 140 halaman dijilid sebagai bagian tak terpisahkan dari setiap rangkap dan tidak ditandatangani tersendiri. Pada 14 September 2026 keempatnya menandatangani adendum perpanjangan jangka waktu konsorsium dalam 4 rangkap asli. Setiap rangkap perjanjian dan adendum ditandatangani direksi keempat perusahaan. Total bea meterai yang terutang atas perjanjian dan adendum adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp80.000", B: "Rp40.000", C: "Rp320.000", D: "Rp120.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bea meterai dikenakan satu kali untuk setiap Dokumen, bukan per penanda tangan atau per halaman. Perjanjian (4 rangkap) dan adendum (4 rangkap) ditandatangani pada saat berbeda sehingga masing-masing rangkap terutang; spesifikasi teknis yang dijilid menyatu dan tidak ditandatangani tersendiri bukan dokumen terpisah.",
        jejakHitung: [
          ["Perjanjian konsorsium: 4 rangkap asli", "4 dokumen"],
          ["Spesifikasi teknis (satu kesatuan)", "0 dokumen"],
          ["Adendum: 4 rangkap asli", "4 dokumen"],
          ["Total 8 x Rp10.000", "Rp80.000"]
        ],
        mengapaSalah: {
          B: "Menganggap adendum bagian dari perjanjian awal, padahal adendum ditandatangani tersendiri pada 14 September 2026 sehingga terutang sendiri",
          C: "Mengalikan 8 dokumen dengan 4 penanda tangan (32 x Rp10.000); jumlah pihak tidak menambah dokumen",
          D: "Menghitung spesifikasi teknis sebagai dokumen tersendiri pada tiap rangkap perjanjian (12 dokumen)"
        },
        jebakan: "Tiga pengali (pihak, rangkap, halaman lampiran) disajikan bersamaan; hanya rangkap asli dari tiap dokumen yang ditandatangani yang menjadi pengali."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 4, Pasal 5, dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-027",
      sejak: "9.5.0"
    },
    {
      id: "A5-130",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Pada 11 Juni 2026 tiga sekutu menandatangani akta pendirian CV Pelita Bahari di hadapan notaris. Minuta akta yang ditandatangani ketiga sekutu, para saksi, dan notaris disimpan oleh notaris. Notaris menerbitkan 4 salinan akta yang ditandatanganinya: satu untuk CV dan masing-masing satu untuk ketiga sekutu. Notaris juga menerbitkan 1 kutipan akta bertanda tangan notaris yang memuat pasal permodalan untuk keperluan pembukaan rekening bank. Persekutuan kemudian membuat 3 fotokopi salinan tanpa tanda tangan untuk arsip. Total bea meterai atas akta notaris tersebut (minuta) beserta salinan dan kutipannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp10.000", C: "Rp90.000", D: "Rp60.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Objek bea meterai mencakup akta notaris beserta grosse, salinan, dan kutipannya; akta notaris itu sendiri (minuta yang ditandatangani para pihak) adalah dokumen asli yang terutang saat dibubuhi tanda tangan, dan salinan serta kutipan dikenai bea meterai yang sama dengan aslinya. Minuta, tiap salinan, dan kutipan yang ditandatangani notaris masing-masing terutang Rp10.000, sedangkan fotokopi tanpa tanda tangan tidak.",
        jejakHitung: [
          ["Minuta akta", "1 dokumen"],
          ["Salinan akta bertanda tangan notaris", "4 dokumen"],
          ["Kutipan akta bertanda tangan notaris", "1 dokumen"],
          ["Fotokopi tanpa tanda tangan", "tidak terutang"],
          ["Total 6 x Rp10.000", "Rp60.000"]
        ],
        mengapaSalah: {
          A: "Hanya menghitung salinan dan kutipan, melupakan minuta akta sebagai aslinya",
          B: "Menganggap satu akta beserta salinan dan kutipannya cukup satu meterai, padahal Pasal 3 ayat (2) huruf b menyebut grosse, salinan, dan kutipan sebagai objek",
          C: "Ikut menghitung 3 fotokopi tanpa tanda tangan (9 x Rp10.000)"
        },
        jebakan: "Frasa \"beserta grosse, salinan, dan kutipannya\" berarti setiap salinan dan kutipan juga dokumen terutang; kutipan untuk keperluan bank tetap dihitung."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-029",
      sejak: "9.5.0"
    },
    {
      id: "A5-131",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-A5-10",
      stem: "Data untuk soal vignette V-A5-10: PT Dompet Kilat Nusantara, penyelenggara layanan pembayaran digital, telah ditetapkan sebagai pemungut bea meterai dengan surat penetapan Kepala KPP. Pada Masa Juli 2026 platform memfasilitasi penerbitan dokumen tanda terima pembayaran elektronik: 18.400 dokumen bernilai lebih dari Rp5.000.000, termasuk 1.400 tanda terima pembayaran gaji pegawai perusahaan klien; 2.750 dokumen bernilai tepat Rp5.000.000; dan 36.900 dokumen bernilai di bawah Rp5.000.000. Bea meterai yang wajib dipungut untuk Masa Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp184.000.000", B: "Rp197.500.000", C: "Rp170.000.000", D: "Rp580.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pemungut hanya memungut atas Dokumen tertentu yang merupakan objek: dokumen yang menyebutkan penerimaan uang dengan nilai nominal lebih dari Rp5.000.000. Tanda terima pembayaran gaji tidak dikenai bea meterai (Pasal 7 huruf c) walaupun nilainya di atas ambang. Tarif Rp10.000 per dokumen.",
        jejakHitung: [
          ["Dokumen lebih dari Rp5 juta", "18.400"],
          ["Dikurangi tanda terima gaji (Pasal 7 huruf c)", "1.400"],
          ["Dokumen objek", "17.000"],
          ["Tepat Rp5 juta dan di bawahnya", "bukan objek"],
          ["17.000 x Rp10.000", "Rp170.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut memungut atas 1.400 tanda terima gaji (18.400 x Rp10.000), padahal Pasal 7 huruf c mengecualikannya",
          B: "Ikut menghitung 2.750 dokumen bernilai tepat Rp5.000.000 (19.750 x Rp10.000); ambangnya \"lebih dari\"",
          D: "Memungut atas seluruh 58.050 dokumen tanpa ambang dan tanpa pengecualian"
        },
        jebakan: "Dua saringan berlaku sebelum mengalikan tarif: ambang \"lebih dari Rp5.000.000\" dan dokumen yang tidak dikenai bea meterai menurut Pasal 7."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 7 huruf c, dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-032",
      sejak: "9.5.0"
    },
    {
      id: "A5-132",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-10",
      stem: "Lanjutan V-A5-10: PT Dompet Kilat Nusantara (pemungut bea meterai yang ditetapkan Kepala KPP) memungut bea meterai atas dokumen tanda terima pembayaran elektronik Masa Juli 2026 sebesar Rp170.000.000. Tanggal 15 Agustus 2026 jatuh pada hari Sabtu, 17 Agustus 2026 (Senin) adalah hari libur nasional, dan 18 Agustus 2026 (Selasa) adalah hari kerja. Batas paling lambat penyetoran bea meterai tersebut dan penyampaian SPT Masa Bea Meterai melalui Coretax adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Setor dan lapor paling lambat 15 Agustus 2026", B: "Setor dan lapor paling lambat 18 Agustus 2026", C: "Setor paling lambat 18 Agustus 2026, lapor paling lambat 20 Agustus 2026", D: "Setor dan lapor paling lambat 17 Agustus 2026" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Penyetoran dan pelaporan SPT Masa Bea Meterai oleh pemungut sama-sama paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir (PMK 78/2024 Pasal 63 ayat (1) dan Pasal 64 ayat (1)). Bila batas itu hari libur (Sabtu, Minggu, hari libur nasional, cuti bersama), setor dan lapor dapat dilakukan paling lama pada hari kerja berikutnya (Pasal 65). 15 Agustus Sabtu, 16 Agustus Minggu, 17 Agustus libur nasional, sehingga batasnya 18 Agustus 2026.",
        jejakHitung: [
          ["Batas normal setor dan lapor Masa Juli 2026", "15 Agustus 2026 (Sabtu)"],
          ["16 Agustus 2026", "Minggu"],
          ["17 Agustus 2026", "hari libur nasional"],
          ["Hari kerja berikutnya", "18 Agustus 2026 (Selasa)"]
        ],
        mengapaSalah: {
          A: "Mengabaikan Pasal 65 PMK 78/2024 tentang pergeseran ke hari kerja berikutnya bila batas akhir jatuh pada hari libur",
          C: "Tanggal 20 adalah tenggat SPT Masa PPh; SPT Masa Bea Meterai pemungut dilaporkan dengan tenggat yang sama dengan penyetoran",
          D: "17 Agustus 2026 adalah hari libur nasional, sehingga bukan hari kerja berikutnya"
        },
        jebakan: "Dua lapis aturan: tenggat tanggal 15 untuk setor dan lapor, lalu pergeseran melewati semua hari libur berturut-turut sampai hari kerja pertama."
      },
      dasarHukum: [{ pasal: "PMK 78/2024 Pasal 63, Pasal 64, dan Pasal 65 (setor dan lapor pemungut)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-033",
      sejak: "9.5.0"
    },
    {
      id: "A5-133",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A5-10",
      stem: "Lanjutan V-A5-10: Karena migrasi sistem, bea meterai Masa Juli 2026 yang dipungut PT Dompet Kilat Nusantara (pemungut bea meterai) sebesar Rp170.000.000 baru disetor seluruhnya pada 2 November 2026, dan SPT Masa Bea Meterai disampaikan pada hari yang sama. Batas akhir setor dan lapor Masa Juli 2026 adalah 18 Agustus 2026 (setelah pergeseran karena hari libur). Anggap tarif bunga per bulan Pasal 9 ayat (2a) UU KUP yang berlaku 0,93%. Total sanksi administratif yang dikenakan kepada PT Dompet Kilat Nusantara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp170.000.000", B: "Rp4.843.000", C: "Rp6.424.000", D: "Rp5.243.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bea meterai disetor penuh walau terlambat, sehingga pemungut diterbitkan STP sesuai UU KUP (Pasal 11 ayat (4) UU 10/2020): bunga Pasal 9 ayat (2a) atas keterlambatan setor, dihitung sejak berakhirnya tanggal jatuh tempo dengan bagian bulan dihitung penuh, ditambah denda Pasal 7 ayat (1) Rp100.000 untuk SPT Masa lainnya yang terlambat.",
        jejakHitung: [
          ["19 Agustus s.d. 18 September 2026", "1 bulan"],
          ["19 September s.d. 18 Oktober 2026", "1 bulan"],
          ["19 Oktober s.d. 2 November 2026 (bagian bulan)", "1 bulan"],
          ["Jumlah bulan", "3"],
          ["Bunga = 170.000.000 x 0,93% x 3", "Rp4.743.000"],
          ["Denda SPT Masa lainnya", "Rp100.000"],
          ["Total sanksi", "Rp4.843.000"]
        ],
        mengapaSalah: {
          A: "Sanksi 100% melalui surat ketetapan pajak bagi pemungut hanya untuk bea meterai yang tidak atau kurang dipungut atau disetor; di sini seluruhnya disetor, hanya terlambat",
          C: "Menghitung 4 bulan kalender (Agustus, September, Oktober, November) sehingga bunga Rp6.324.000 + Rp100.000",
          D: "Memakai denda SPT Masa PPN Rp500.000, padahal SPT Masa Bea Meterai termasuk SPT Masa lainnya (Rp100.000)"
        },
        jebakan: "Bedakan terlambat disetor (STP: bunga dan denda UU KUP) dari tidak disetor (SKP: kekurangan ditambah sanksi 100%), dan hitung bulan bunga mulai sehari setelah jatuh tempo, bukan per bulan kalender."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020 (STP sesuai UU KUP atas setor/lapor terlambat)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-034",
      sejak: "9.5.0"
    },
    {
      id: "A5-134",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Bank Mitra Usaha, yang telah ditetapkan sebagai pemungut bea meterai, pada Masa Mei 2026 menerima dari percetakan pemegang izin pembuatan Meterai Percetakan 6 buku cek yang masing-masing berisi 25 lembar dan 4 buku bilyet giro yang masing-masing berisi 50 lembar. Seluruh lembar telah dibubuhi Meterai Percetakan. Bea meterai yang dipungut bank atas cek dan bilyet giro tersebut untuk Masa Mei 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000", B: "Rp1.500.000", C: "Rp3.500.000", D: "Rp2.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Cek dan bilyet giro adalah surat berharga; setiap lembar merupakan satu dokumen yang bea meterainya Rp10.000 dan dipungut bank selaku pemungut melalui Meterai Percetakan. Pemungutan dilakukan pada saat bank menerima lembar cek dan bilyet giro dari Wajib Pajak pemegang izin pembuatan Meterai Percetakan (PMK 78/2024 Pasal 61 huruf a), sehingga masuk Masa Mei 2026.",
        jejakHitung: [
          ["Lembar cek 6 x 25", "150"],
          ["Lembar bilyet giro 4 x 50", "200"],
          ["Total lembar", "350"],
          ["350 x Rp10.000", "Rp3.500.000"]
        ],
        mengapaSalah: {
          A: "Menghitung per buku (10 x Rp10.000), padahal dokumennya adalah tiap lembar",
          B: "Hanya memungut atas cek dan melupakan bilyet giro (150 x Rp10.000)",
          D: "Hanya memungut atas bilyet giro (200 x Rp10.000), seolah cek bukan Dokumen tertentu yang dipungut pemungut"
        },
        jebakan: "Satuan dokumen adalah lembar cek atau bilyet giro, bukan buku, dan isi buku cek dan bilyet giro berbeda sehingga harus dihitung terpisah."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf a, Pasal 61 huruf a, dan Pasal 62 ayat (1) huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-035",
      sejak: "9.5.0"
    },
    {
      id: "A5-135",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      stem: "PT Dana Niaga Sejahtera, penyelenggara layanan pembayaran digital yang telah ditetapkan sebagai pemungut bea meterai, memungut bea meterai Masa Juli 2026 sebesar Rp27.650.000. Tanggal 15 Agustus 2026 jatuh pada hari Sabtu, 16 Agustus 2026 hari Minggu, dan 17 Agustus 2026 (Senin) adalah hari libur nasional. Tidak ada cuti bersama pada pekan itu. Pada awal Agustus 2026 tim pajak menanyakan batas akhir penyetoran bea meterai dan penyampaian SPT Masa Bea Meterai Masa Juli 2026 yang tidak menimbulkan sanksi. Jawaban yang tepat adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "Senin, 17 Agustus 2026, karena hanya hari Sabtu dan hari Minggu yang menggeser batas akhir", B: "Jumat, 14 Agustus 2026, karena batas akhir yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", C: "Setor paling lambat Senin, 10 Agustus 2026 dan lapor paling lambat Kamis, 20 Agustus 2026", D: "Selasa, 18 Agustus 2026, baik untuk penyetoran maupun untuk penyampaian SPT Masa Bea Meterai" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Pemungut wajib menyetor dan melaporkan bea meterai paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir (Pasal 63 ayat (1) dan Pasal 64 ayat (1) PMK 78/2024). Bila batas akhir itu hari libur, penyetoran dan pelaporan dapat dilakukan paling lama pada hari kerja berikutnya (Pasal 65 ayat (1)); hari libur meliputi hari Sabtu, hari Minggu, dan hari libur nasional (Pasal 65 ayat (2)). Sabtu 15, Minggu 16, dan Senin 17 Agustus 2026 semuanya hari libur, sehingga hari kerja berikutnya adalah Selasa, 18 Agustus 2026.",
        jejakHitung: [
          ["Batas akhir normal Masa Juli 2026", "15 Agustus 2026 (Sabtu)"],
          ["16 Agustus 2026 (Minggu) dan 17 Agustus 2026 (libur nasional)", "hari libur"],
          ["Hari kerja berikutnya untuk setor dan lapor", "Selasa, 18 Agustus 2026"]
        ],
        mengapaSalah: {
          A: "Pasal 65 ayat (2) PMK 78/2024 memasukkan hari libur nasional sebagai hari libur, sehingga 17 Agustus 2026 juga dilewati",
          B: "Batas akhir yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan ke hari kerja sebelumnya",
          C: "Tanggal 10 untuk setor dan tanggal 20 untuk lapor adalah ketentuan PMK 151/2021 yang sudah dicabut PMK 78/2024"
        },
        jebakan: "Tiga hari libur berturut-turut: Sabtu, Minggu, dan libur nasional. Yang menggeser batas akhir bukan hanya akhir pekan."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1) dan Pasal 64 ayat (1) PMK 78/2024 (batas akhir setor dan lapor tanggal 15)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 65 PMK 78/2024 (batas akhir pada hari libur)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-037",
      sejak: "9.5.0"
    },
    {
      id: "A5-136",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 11 ayat (3) UU 10/2020: \"Jumlah kekurangan Bea Meterai dalam surat ketetapan pajak sebagaimana dimaksud pada ayat (2) sebesar Bea Meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor, ditambah sanksi administratif sebesar 100% (seratus persen) dari Bea Meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor.\" Penjelasan Pasal 11 ayat (3), pada contoh pengenaan sanksi: \"Sedangkan atas 1 (satu) Dokumen yang telah dipungut dan disetorkan ke kas negara dan 5 (lima) Dokumen yang tidak dipungut, tetapi disetorkan ke kas negara, tidak dikenai sanksi administratif.\"",
      stem: "PT Sekuritas Arunika telah ditetapkan sebagai pemungut bea meterai atas dokumen transaksi surat berharga (konfirmasi transaksi) nasabah. Pemeriksaan pada Oktober 2026 atas Masa Juni 2026 menemukan: (1) bea meterai atas 250 konfirmasi transaksi tidak dipungut dari nasabah dan tidak disetor; (2) bea meterai atas 400 konfirmasi transaksi lainnya tidak dipungut dari nasabah, tetapi telah disetor penuh dan tepat waktu dari dana perusahaan; (3) SPT Masa Bea Meterai Masa Juni 2026 baru disampaikan pada 20 Juli 2026, padahal batas akhirnya Rabu, 15 Juli 2026. Tarif bea meterai Rp10.000 per dokumen. Berdasarkan kutipan tersebut, ketetapan dan sanksi yang tepat bagi PT Sekuritas Arunika adalah ...",
      kataKualifikasi: [],
      opsi: { A: "SKP atas 250 dokumen sebesar Rp2.500.000 ditambah sanksi 100% Rp2.500.000, tanpa sanksi atas 400 dokumen, serta STP berupa denda Rp100.000 atas SPT Masa yang terlambat", B: "SKP atas 250 dokumen sebesar Rp2.500.000 ditambah sanksi 100% Rp2.500.000, sanksi 100% Rp4.000.000 atas 400 dokumen yang tidak dipungut, serta STP berupa denda Rp100.000", C: "SKP atas 250 dokumen sebesar Rp2.500.000 tanpa sanksi 100% karena pemungut bukan Pihak Yang Terutang, serta STP berupa denda Rp100.000 atas SPT Masa yang terlambat", D: "Tidak ada ketetapan bagi pemungut; nasabah wajib memeteraikan kemudian 250 dokumen dengan Rp20.000 per dokumen, serta STP berupa denda Rp100.000 atas SPT Masa yang terlambat" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pemungut yang tidak memungut dan/atau tidak menyetor diterbitkan surat ketetapan pajak sebesar bea meterai yang tidak disetor ditambah sanksi 100% (Pasal 11 ayat (2) dan (3) UU 10/2020). Contoh dalam Penjelasan Pasal 11 ayat (3) menegaskan bahwa dokumen yang tidak dipungut tetapi bea meterainya disetor ke kas negara tidak dikenai sanksi, sehingga sanksi hanya untuk 250 dokumen. Keterlambatan penyampaian SPT Masa Bea Meterai ditagih dengan STP (Pasal 11 ayat (4) huruf b) berupa denda Pasal 7 ayat (1) UU KUP untuk SPT Masa lainnya, Rp100.000.",
        jejakHitung: [
          ["(1) Pokok tidak dipungut dan tidak disetor: 250 × Rp10.000", "Rp2.500.000"],
          ["(1) Sanksi 100% dalam SKP", "Rp2.500.000"],
          ["(2) 400 dokumen tidak dipungut tetapi disetor penuh", "tanpa sanksi"],
          ["(3) SPT Masa disampaikan 20 Juli 2026 (batas 15 Juli 2026)", "STP denda Rp100.000"]
        ],
        mengapaSalah: {
          B: "Penjelasan Pasal 11 ayat (3) menyatakan dokumen yang tidak dipungut tetapi disetorkan ke kas negara tidak dikenai sanksi administratif",
          C: "Pasal 11 ayat (3) mengenakan sanksi 100% kepada pemungut atas bea meterai yang tidak dipungut dan tidak disetor, walaupun pemungut bukan Pihak Yang Terutang",
          D: "Pemungut yang tidak memungut dan tidak menyetor diterbitkan surat ketetapan pajak (Pasal 11 ayat (2)); kewajibannya tidak beralih menjadi pemeteraian kemudian oleh nasabah"
        },
        jebakan: "Yang dikenai sanksi 100% adalah bea meterai yang tidak masuk ke kas negara. \"Tidak dipungut tetapi disetor\" tidak dikenai sanksi, sedangkan keterlambatan lapor ditagih lewat STP denda."
      },
      dasarHukum: [{ pasal: "Pasal 11 ayat (2), (3), dan (4) UU 10/2020 beserta Penjelasannya", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 64 ayat (1) PMK 78/2024 (batas akhir lapor tanggal 15)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-038",
      sejak: "9.5.0"
    },
    {
      id: "A5-137",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Kopkredit Andalan telah ditetapkan sebagai pemungut bea meterai. Selama Masa Agustus 2026 dan Masa September 2026 tidak ada dokumen yang wajib dipungut bea meterai dan tidak ada penerbitan dokumen yang mendapat fasilitas pembebasan, sehingga tidak ada setoran. Karena menganggap tidak ada kewajiban, perusahaan baru menyampaikan SPT Masa Bea Meterai (nihil) untuk kedua Masa Pajak itu pada 26 Oktober 2026. Batas akhir Masa Agustus 2026 adalah Selasa, 15 September 2026 dan Masa September 2026 adalah Kamis, 15 Oktober 2026. Jumlah sanksi administratif yang dikenakan atas keadaan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp1.000.000", C: "Rp200.000", D: "Rp100.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Pemungut tetap wajib menyampaikan SPT Masa Bea Meterai walaupun tidak ada dokumen yang wajib dipungut (Pasal 64 ayat (4) PMK 78/2024). Tiap SPT Masa nihil yang terlambat dikenai denda Pasal 7 ayat (1) UU KUP untuk SPT Masa lainnya, Rp100.000, ditagih dengan STP (Pasal 11 ayat (4) huruf b UU 10/2020). Dua SPT Masa terlambat sehingga dendanya 2 × Rp100.000. Tidak ada bunga karena tidak ada setoran yang terlambat.",
        jejakHitung: [
          ["Dokumen dipungut Masa Agustus dan September 2026", "tidak ada (SPT nihil tetap wajib)"],
          ["SPT Masa Agustus 2026 disampaikan 26 Oktober 2026 (batas 15 September 2026)", "terlambat, denda Rp100.000"],
          ["SPT Masa September 2026 disampaikan 26 Oktober 2026 (batas 15 Oktober 2026)", "terlambat, denda Rp100.000"],
          ["Jumlah denda", "Rp200.000"]
        ],
        mengapaSalah: {
          A: "Pasal 64 ayat (4) PMK 78/2024 mewajibkan pelaporan tetap dilakukan walaupun tidak ada dokumen yang wajib dipungut, sehingga keterlambatannya didenda",
          B: "Memakai denda SPT Masa PPN Rp500.000 untuk dua SPT; SPT Masa Bea Meterai termasuk SPT Masa lainnya (Rp100.000)",
          D: "Denda dikenakan untuk setiap SPT Masa yang terlambat, bukan sekali untuk beberapa Masa Pajak yang dilaporkan bersamaan"
        },
        jebakan: "SPT Masa nihil tetap wajib disampaikan, dan denda dihitung per SPT Masa."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 11 UU 10/2020; Pasal 64 ayat (1) dan ayat (4) PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-039",
      sejak: "9.5.0"
    },
    {
      id: "A5-138",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A5-11",
      kutipan: "Pasal 18 ayat (2) UU 10/2020: \"Sanksi administratif sebagaimana dimaksud pada ayat (1) huruf a sebesar 100% (seratus persen) dari Bea Meterai yang terutang.\" Pasal 23 UU 10/2020: \"Bea Meterai yang terutang menjadi kedaluwarsa setelah jangka waktu 5 (lima) tahun sejak saat terutang.\"",
      stem: "Data untuk soal vignette V-A5-11: PT Griya Logistik Sentosa diperiksa pada 9 September 2026. Pemeriksa menemukan dokumen tanpa meterai berikut: (1) tujuh kuitansi pembelian bernilai Rp5.500.000 sampai Rp30.000.000 yang dibuat pemasok dan diserahkan kepada perusahaan pada 2024 dan 2025; (2) tiga surat perjanjian sewa gudang yang ditandatangani pada 2025, masing-masing dibuat dua rangkap, satu rangkap dipegang perusahaan dan satu rangkap dipegang pemilik gudang; (3) tiga kuitansi pembelian masing-masing tepat Rp5.000.000 yang diterima perusahaan pada 2025; (4) satu kuitansi Rp12.000.000 yang dibuat dan diserahkan kepada perusahaan pada 3 Agustus 2021; (5) satu kuitansi Rp6.800.000 yang dibuat dan ditandatangani pemasok pada 14 Oktober 2021 dan diserahkan kepada perusahaan pada 21 Oktober 2021. Para pihak tidak memperjanjikan lain tentang pembebanan bea meterai. Berdasarkan kutipan tersebut, jumlah bea meterai dan sanksi yang masih harus dilunasi PT Griya Logistik Sentosa melalui pemeteraian kemudian atas dokumen yang dipegangnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp240.000", B: "Rp220.000", C: "Rp200.000", D: "Rp280.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Yang masih harus dilunasi adalah dokumen objek bea meterai yang belum kedaluwarsa (5 tahun sejak saat terutang). Kuitansi (1) bernilai lebih dari Rp5.000.000 sehingga objek (7 dokumen). Perjanjian (2) terutang oleh masing-masing pihak atas rangkap yang diterimanya, sehingga perusahaan menanggung 3 rangkap. Kuitansi (3) tepat Rp5.000.000 tidak lebih dari Rp5.000.000 sehingga bukan objek. Kuitansi (4) terutang 3 Agustus 2021 dan kedaluwarsa mulai 3 Agustus 2026, sebelum pemeriksaan. Kuitansi (5) terutang saat diserahkan, 21 Oktober 2021, dan baru kedaluwarsa mulai 21 Oktober 2026. Jadi 11 dokumen masing-masing Rp10.000 ditambah sanksi 100%.",
        jejakHitung: [
          ["Kuitansi (1) Rp5,5 juta sampai Rp30 juta", "7 dokumen"],
          ["Rangkap perjanjian (2) yang dipegang perusahaan", "3 dokumen"],
          ["Kuitansi (3) tepat Rp5.000.000", "bukan objek"],
          ["Kuitansi (4) terutang 3 Agustus 2021", "kedaluwarsa mulai 3 Agustus 2026"],
          ["Kuitansi (5) terutang 21 Oktober 2021", "kedaluwarsa mulai 21 Oktober 2026 → 1 dokumen"],
          ["Dokumen yang masih dilunasi", "11"],
          ["11 × (Rp10.000 + Rp10.000)", "Rp220.000"]
        ],
        mengapaSalah: {
          A: "Lupa bahwa kuitansi (4) sudah kedaluwarsa sejak 3 Agustus 2026 (12 × Rp20.000)",
          C: "Menganggap kedua kuitansi tahun 2021 sudah kedaluwarsa karena 2026 dikurangi 2021 sama dengan 5, tanpa melihat tanggal saat terutangnya (10 × Rp20.000)",
          D: "Memasukkan tiga kuitansi tepat Rp5.000.000 sebagai objek, padahal objek hanya dokumen bernilai lebih dari Rp5.000.000 (14 × Rp20.000)"
        },
        jebakan: "Tiga saringan sekaligus: batas nilai lebih dari Rp5.000.000, rangkap perjanjian per pihak, dan kedaluwarsa per tanggal saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 17, Pasal 18, Pasal 19, dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan g, Pasal 8 ayat (1), dan Pasal 9 ayat (1) dan (2) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-040",
      sejak: "9.5.0"
    },
    {
      id: "A5-139",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-11",
      stem: "Lanjutan V-A5-11: Pemeriksaan pada 9 September 2026 menemukan tiga surat perjanjian sewa gudang antara PT Griya Logistik Sentosa (penyewa) dan pemilik gudang, ditandatangani pada 2025, masing-masing dibuat dua rangkap: satu rangkap dipegang perusahaan dan satu rangkap dipegang pemilik gudang. Tidak satu rangkap pun bermeterai, dan para pihak tidak memperjanjikan lain tentang pembebanan bea meterai. Pemilik gudang berpendapat seluruh bea meterai atas keenam rangkap harus dilunasi penyewa. Pernyataan yang tepat mengenai pihak yang wajib melakukan pemeteraian kemudian dan menanggung sanksinya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Perusahaan untuk keenam rangkap beserta sanksi 100%, karena penyewa adalah pihak yang menerima manfaat dari perjanjian sewa", B: "Pemilik gudang untuk keenam rangkap beserta sanksi 100%, karena pemilik gudang yang menyiapkan dan menandatangani perjanjian lebih dulu", C: "Masing-masing pihak atas rangkap yang diterimanya; perusahaan melunasi 3 rangkap yang dipegangnya beserta sanksi 100%", D: "Perusahaan untuk 3 rangkap yang dipegangnya tanpa sanksi, karena perjanjian dua pihak baru terutang saat diajukan ke pengadilan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat oleh dua pihak atau lebih terutang bea meterai oleh masing-masing pihak atas dokumen yang diterimanya (Pasal 9 ayat (2) UU 10/2020). Pihak yang wajib melakukan pemeteraian kemudian adalah Pihak Yang Terutang menurut Pasal 9 (Pasal 17 ayat (2)), dan karena bea meterai perjanjian sudah terutang sejak ditandatangani tetapi tidak dibayar, pemeteraian kemudian dilakukan sebesar bea meterai ditambah sanksi 100% (Pasal 18). Perusahaan melunasi 3 rangkap miliknya; pemilik gudang atas 3 rangkap miliknya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pihak yang menerima manfaat hanya menentukan Pihak Yang Terutang untuk dokumen yang dibuat di luar negeri (Pasal 9 ayat (5)); perjanjian ini tunduk pada Pasal 9 ayat (2)",
          B: "Pasal 9 ayat (2) tidak melihat siapa yang menyiapkan atau lebih dulu menandatangani perjanjian, melainkan siapa yang menerima rangkapnya",
          D: "Surat perjanjian sudah terutang saat ditandatangani (Pasal 8 ayat (1) huruf a); karena tidak dibayar, pemeteraian kemudian disertai sanksi 100%"
        },
        jebakan: "Untuk dokumen dua pihak, yang menentukan adalah rangkap yang diterima masing-masing pihak, bukan manfaat atau siapa yang menyusun dokumen."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2) UU 10/2020 (dokumen dua pihak: masing-masing atas dokumen yang diterimanya)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 ayat (2) dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-041",
      sejak: "9.5.0"
    },
    {
      id: "A5-140",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-11",
      stem: "Lanjutan V-A5-11: Kuitansi Rp6.800.000 tanpa meterai dibuat dan ditandatangani pemasok pada 14 Oktober 2021, lalu diserahkan kepada PT Griya Logistik Sentosa pada 21 Oktober 2021. Pada pemeriksaan 9 September 2026, pemeriksa menyatakan bea meterai dan sanksinya masih dapat ditagih. Bea meterai atas kuitansi tersebut menjadi kedaluwarsa (tidak dapat ditagih lagi) mulai ...",
      kataKualifikasi: [],
      opsi: { A: "1 Januari 2027, setelah akhir tahun kelima sejak kuitansi dibuat dan diserahkan", B: "21 Oktober 2026, karena jangka waktu 5 tahun sejak kuitansi diserahkan (21 Oktober 2021) berakhir pada 20 Oktober 2026", C: "14 Oktober 2026, karena jangka waktu 5 tahun dihitung sejak kuitansi ditandatangani pemasok pada 14 Oktober 2021", D: "Setelah 5 tahun sejak surat ketetapan pajak atas kuitansi itu diterbitkan, mengikuti daluwarsa penagihan UU KUP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi adalah dokumen yang menyatakan jumlah uang; bea meterainya terutang saat dokumen diserahkan kepada pihak untuk siapa dokumen itu dibuat, bukan saat ditandatangani (Pasal 8 ayat (1) huruf c UU 10/2020 dan Penjelasannya). Saat terutangnya 21 Oktober 2021. Menurut Pasal 23, bea meterai kedaluwarsa setelah jangka waktu 5 tahun sejak saat terutang. Dengan 21 Oktober 2021 sebagai hari pertama, hari terakhir jangka waktu adalah 20 Oktober 2026, sehingga kedaluwarsa mulai 21 Oktober 2026. Pemeriksaan 9 September 2026 masih di dalam jangka waktu.",
        jejakHitung: [
          ["Saat terutang (kuitansi diserahkan)", "21 Oktober 2021"],
          ["Hari terakhir jangka waktu 5 tahun (hari pertama 21 Oktober 2021)", "20 Oktober 2026"],
          ["Kedaluwarsa mulai", "21 Oktober 2026"],
          ["Pemeriksaan 9 September 2026", "masih dalam jangka waktu, dapat ditagih"]
        ],
        mengapaSalah: {
          A: "Kedaluwarsa dihitung per tanggal dari saat terutang, tidak dibulatkan ke akhir tahun",
          C: "Saat terutang kuitansi adalah saat diserahkan kepada penerima, bukan saat ditandatangani pembuatnya",
          D: "Daluwarsa penagihan UU KUP berbeda dengan kedaluwarsa khusus Pasal 23 UU Bea Meterai yang dihitung sejak saat terutang"
        },
        jebakan: "Dua lapis: saat terutang kuitansi (diserahkan, bukan ditandatangani) dan cara menghitung 5 tahun (hari terakhir 20 Oktober 2026, kedaluwarsa mulai 21 Oktober 2026)."
      },
      dasarHukum: [{ pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      kembaranDari: "A5-042",
      sejak: "9.5.0"
    },
    {
      id: "A5-141",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Kuasa hukum CV Arta Boga Lestari akan mengajukan 62 kuitansi penjualan, masing-masing bernilai Rp1.500.000 sampai Rp4.800.000 dan semuanya tanpa meterai, sebagai alat bukti dalam sidang perdata pada 24 November 2026. Kuitansi itu semula tidak terutang bea meterai karena nilainya tidak lebih dari Rp5.000.000. Karena jumlah dokumennya banyak, CV memilih membayar dengan Surat Setoran Pajak. Langkah dan jumlah yang tepat sebelum kuitansi diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pemeteraian kemudian Rp10.000 per kuitansi (total Rp620.000) tanpa sanksi, dibayar dengan Surat Setoran Pajak dan disahkan Pejabat DJP", B: "Pemeteraian kemudian Rp20.000 per kuitansi (total Rp1.240.000) karena dokumen tidak bermeterai, dibayar dengan Surat Setoran Pajak dan disahkan Pejabat DJP", C: "Pemeteraian kemudian Rp10.000 per kuitansi (total Rp620.000) tanpa sanksi, dibayar dengan Surat Setoran Pajak dan disahkan Pejabat Pos", D: "Tidak perlu pemeteraian kemudian karena kuitansi bernilai tidak lebih dari Rp5.000.000 bukan objek bea meterai dalam keadaan apa pun" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen yang digunakan sebagai alat bukti di pengadilan adalah objek tersendiri (Pasal 3 ayat (1) huruf b UU 10/2020) yang terutang saat diajukan. Karena semula bukan objek, pemeteraian kemudian cukup sebesar bea meterai yang terutang tanpa sanksi (Pasal 18 ayat (1) huruf b UU 10/2020; Pasal 49 huruf c PMK 78/2024). Pemeteraian kemudian lebih dari 50 dokumen dapat dibayar dengan Surat Setoran Pajak (Pasal 42 huruf a PMK 78/2024). Pejabat Pos hanya mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel (Pasal 51 ayat (2)); yang dibayar dengan Surat Setoran Pajak disahkan Pejabat DJP (Pasal 51 ayat (4)).",
        jejakHitung: [
          ["Kuitansi diajukan sebagai alat bukti", "62 dokumen"],
          ["Bea meterai per dokumen", "Rp10.000"],
          ["Sanksi (semula bukan objek)", "Rp0"],
          ["Total", "Rp620.000"],
          ["Pembayaran dengan Surat Setoran Pajak", "disahkan Pejabat DJP"]
        ],
        mengapaSalah: {
          B: "Sanksi 100% hanya untuk dokumen yang bea meterainya sudah terutang tetapi tidak dibayar; kuitansi ini baru terutang saat diajukan ke pengadilan",
          C: "Pejabat Pos hanya mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel (Pasal 51 ayat (2) PMK 78/2024)",
          D: "Penggunaan sebagai alat bukti di pengadilan menjadikan dokumen objek bea meterai menurut Pasal 3 ayat (1) huruf b"
        },
        jebakan: "Status \"semula bukan objek\" menghapus sanksi tetapi tidak menghapus pokok Rp10.000, dan cara bayar menentukan pejabat yang mengesahkan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b dan Pasal 8 ayat (1) huruf d UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 42 huruf a, Pasal 49 huruf c, dan Pasal 51 ayat (2) dan ayat (4) PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-043",
      sejak: "9.5.0"
    },
    {
      id: "A5-142",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Dalam gugatan utang piutang yang didaftarkan September 2026, CV Bima Sarana Teknik akan mengajukan alat bukti berupa: (1) satu surat pernyataan utang yang dibuat debitur dan diserahkan kepada CV pada Maret 2025 tanpa meterai; (2) empat kuitansi pembayaran masing-masing Rp7.500.000 yang diterima CV pada 2024 tanpa meterai; (3) dua kuitansi masing-masing Rp3.000.000 tanpa meterai; (4) lima lembar cetakan tangkapan layar percakapan tertulis antara pengurus CV dan debitur di aplikasi pesan, tanpa meterai; (5) satu surat perjanjian kerja sama (rangkap milik CV) yang sejak ditandatangani telah dibubuhi meterai tempel yang sah. Jumlah yang harus dilunasi CV melalui pemeteraian kemudian sebelum alat bukti diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp100.000", B: "Rp240.000", C: "Rp120.000", D: "Rp170.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Surat pernyataan dan kuitansi Rp7.500.000 sudah terutang sejak diserahkan dan tidak dilunasi, sehingga pemeteraian kemudian sebesar pokok ditambah sanksi 100% (Pasal 17 ayat (1) huruf a dan Pasal 18 ayat (1) huruf a). Kuitansi Rp3.000.000 serta cetakan percakapan tertulis (tulisan dalam bentuk cetakan, termasuk Dokumen menurut Pasal 1 angka 2) baru terutang karena diajukan sebagai alat bukti, sehingga cukup pokok (Pasal 17 ayat (1) huruf b dan Pasal 18 ayat (1) huruf b). Perjanjian yang sudah bermeterai sah tidak perlu dimeteraikan lagi karena bea meterai dikenakan satu kali untuk setiap dokumen (Pasal 4).",
        jejakHitung: [
          ["(1) 1 surat pernyataan × (Rp10.000 + Rp10.000)", "Rp20.000"],
          ["(2) 4 kuitansi Rp7,5 juta × (Rp10.000 + Rp10.000)", "Rp80.000"],
          ["(3) 2 kuitansi Rp3 juta × Rp10.000", "Rp20.000"],
          ["(4) 5 cetakan percakapan tertulis × Rp10.000", "Rp50.000"],
          ["(5) sudah bermeterai sah", "Rp0"],
          ["Total", "Rp170.000"]
        ],
        mengapaSalah: {
          A: "Hanya menghitung dokumen yang sudah terutang sebelumnya (5 × Rp20.000); dokumen yang diajukan sebagai alat bukti juga terutang",
          B: "Mengenakan sanksi pada semua dokumen tanpa meterai (12 × Rp20.000), padahal dokumen (3) dan (4) semula bukan objek",
          C: "Tidak mengenakan sanksi pada surat pernyataan dan kuitansi Rp7,5 juta yang sudah terutang sejak diserahkan (12 × Rp10.000)"
        },
        jebakan: "Satu daftar alat bukti memuat tiga perlakuan: pokok ditambah sanksi, pokok saja, dan nihil."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-044",
      sejak: "9.5.0"
    },
    {
      id: "A5-143",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Pasal 23 UU 10/2020: \"Bea Meterai yang terutang menjadi kedaluwarsa setelah jangka waktu 5 (lima) tahun sejak saat terutang.\" Penjelasan Pasal 23: \"Ditinjau dari segi kepastian hukum, kedaluwarsa 5 (lima) tahun yang dihitung sejak saat terutang Bea Meterai, berlaku untuk semua Dokumen.\"",
      stem: "Pada 11 Agustus 2026 pemeriksa menemukan empat dokumen PT Sinar Pualam Abadi tanpa meterai, dan tidak satu pun pernah diajukan ke pengadilan: (1) kuitansi Rp9.000.000 yang dibuat dan ditandatangani pemasok pada 29 Juli 2021, tetapi baru diserahkan kepada perusahaan pada 26 Agustus 2021; (2) surat perjanjian pinjam pakai alat yang ditandatangani 2 Juli 2021; (3) surat pernyataan yang diserahkan kepada perusahaan pada 15 November 2021; (4) kuitansi Rp15.000.000 yang dibuat dan diserahkan kepada perusahaan pada 30 Juni 2021. Berdasarkan kutipan tersebut dan ketentuan saat terutang, dokumen yang bea meterai dan sanksinya masih dapat ditagih adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen (1) dan (3)", B: "Dokumen (3) saja", C: "Seluruh dokumen, karena jangka waktu dihitung sejak dokumen ditemukan", D: "Tidak ada, karena seluruh dokumen berasal dari tahun 2021" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Bea meterai kedaluwarsa setelah 5 tahun sejak saat terutang (Pasal 23). Saat terutang kuitansi dan surat pernyataan adalah saat diserahkan, sedangkan surat perjanjian saat ditandatangani (Pasal 8 ayat (1)). (1) terutang 26 Agustus 2021, kedaluwarsa mulai 26 Agustus 2026, masih dapat ditagih; (2) kedaluwarsa mulai 2 Juli 2026, lewat; (3) kedaluwarsa mulai 15 November 2026, masih dapat ditagih; (4) kedaluwarsa mulai 30 Juni 2026, lewat.",
        jejakHitung: [
          ["(1) terutang 26 Agustus 2021 (diserahkan)", "kedaluwarsa mulai 26 Agustus 2026 → masih ditagih"],
          ["(2) terutang 2 Juli 2021 (ditandatangani)", "kedaluwarsa mulai 2 Juli 2026 → lewat"],
          ["(3) terutang 15 November 2021 (diserahkan)", "kedaluwarsa mulai 15 November 2026 → masih ditagih"],
          ["(4) terutang 30 Juni 2021 (diserahkan)", "kedaluwarsa mulai 30 Juni 2026 → lewat"]
        ],
        mengapaSalah: {
          B: "Memakai tanggal tanda tangan kuitansi (1) sehingga menganggapnya kedaluwarsa mulai 29 Juli 2026; saat terutang kuitansi adalah saat diserahkan",
          C: "Kedaluwarsa dihitung sejak saat terutang, bukan sejak dokumen ditemukan",
          D: "Kedaluwarsa dihitung per tanggal saat terutang, bukan per tahun dokumen dibuat"
        },
        jebakan: "Untuk kuitansi, tanggal penyerahan yang menentukan saat terutang, sehingga kuitansi bertanda tangan Juli 2021 masih dapat ditagih pada Agustus 2026."
      },
      dasarHukum: [{ pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-045",
      sejak: "9.5.0"
    },
    {
      id: "A5-144",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 9 ayat (2a) UU KUP: \"Pembayaran atau penyetoran pajak sebagaimana dimaksud pada ayat (1), yang dilakukan setelah tanggal jatuh tempo pembayaran atau penyetoran pajak, dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan oleh Menteri Keuangan yang dihitung sejak berakhirnya tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran, dan dikenakan paling lama 24 (dua puluh empat) bulan serta bagian dari bulan dihitung penuh 1 (satu) bulan.\"",
      stem: "Dua temuan pemeriksaan Oktober 2026: (1) PT Kirana Mebel Nusantara, yang bukan pemungut, menerima 45 kuitansi bernilai di atas Rp5.000.000 dan 20 kuitansi masing-masing Rp4.000.000 sepanjang 2025, semuanya tanpa meterai; (2) PT Bursa Niaga Sekuritas, pemungut bea meterai atas dokumen transaksi surat berharga, menyetor bea meterai Masa Juni 2026 sebesar Rp3.800.000 pada 28 September 2026, padahal jatuh temponya Rabu, 15 Juli 2026; SPT Masa disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) yang berlaku 0,97% per bulan. Berdasarkan kutipan tersebut, sanksi administratif yang dikenakan kepada PT Kirana Mebel Nusantara dan PT Bursa Niaga Sekuritas masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Kirana Rp450.000; PT Bursa Niaga Rp3.800.000", B: "PT Kirana Rp650.000; PT Bursa Niaga Rp110.580", C: "PT Kirana Rp450.000; PT Bursa Niaga Rp73.720", D: "PT Kirana Rp450.000; PT Bursa Niaga Rp110.580" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Pihak Yang Terutang yang tidak melunasi bea meterai dikenai sanksi 100% per dokumen (Pasal 18 ayat (2); bila ditemukan pemeriksaan ditetapkan dengan surat ketetapan pajak menurut Pasal 19 UU 10/2020). Hanya 45 kuitansi di atas Rp5.000.000 yang objek; kuitansi Rp4.000.000 bukan objek. Pemungut yang menyetor penuh tetapi terlambat ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP (Pasal 11 ayat (4) UU 10/2020), bagian bulan dihitung penuh. Dari 16 Juli sampai 28 September 2026 terdapat 2 bulan penuh dan 1 bagian bulan, jadi 3 bulan.",
        jejakHitung: [
          ["PT Kirana: 45 × 100% × Rp10.000", "Rp450.000"],
          ["20 kuitansi Rp4.000.000", "bukan objek"],
          ["PT Bursa Niaga: 16 Juli sampai 15 Agustus 2026", "bulan ke-1"],
          ["16 Agustus sampai 15 September 2026", "bulan ke-2"],
          ["16 sampai 28 September 2026 (bagian bulan)", "bulan ke-3"],
          ["Bunga = Rp3.800.000 × 0,97% × 3", "Rp110.580"]
        ],
        mengapaSalah: {
          A: "Sanksi 100% bagi pemungut hanya untuk bea meterai yang tidak dipungut atau tidak disetor; setoran penuh yang terlambat ditagih bunga UU KUP",
          B: "Memasukkan 20 kuitansi Rp4.000.000 yang bukan objek (65 × Rp10.000)",
          C: "Menghitung bunga 2 bulan saja; 13 hari pada bulan ketiga dihitung penuh 1 bulan"
        },
        jebakan: "Dua rezim sanksi dalam satu soal: UU 10/2020 untuk Pihak Yang Terutang dan bunga UU KUP untuk pemungut yang terlambat menyetor."
      },
      dasarHukum: [{ pasal: "Pasal 11, Pasal 18, dan Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-049",
      sejak: "9.5.0"
    },
    {
      id: "A5-145",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Tim pajak PT Sentra Agro Lestari menelaah empat pelunasan bea meterai pada 2026, seluruhnya atas dokumen yang rangkapnya diterima PT Sentra Agro Lestari dan tanpa kesepakatan lain tentang pembebanan meterai: (1) surat kuasa dari pemasok yang diserahkan kepada perusahaan pada 9 Februari 2026 tanpa meterai, lalu dimeteraikan kemudian pada 14 Juli 2026 karena notaris menolak menerimanya sebelum bea meterainya lunas; (2) perjanjian lisensi yang ditandatangani di Singapura pada 3 Maret 2026 dan dibubuhi meterai elektronik pada 11 Mei 2026, seminggu sebelum pertama kali dilampirkan pada permohonan izin edar di Indonesia; (3) tanda terima pembayaran Rp4.500.000 yang dimeteraikan kemudian karena akan diajukan sebagai alat bukti di pengadilan negeri; (4) perjanjian jual beli mesin yang ditandatangani di Kuala Lumpur pada 12 Januari 2026, dijadikan dasar pencatatan utang dalam pembukuan perusahaan sejak Februari 2026, dan baru dimeteraikan kemudian pada 21 September 2026. Pelunasan yang wajib disertai sanksi administratif 100% adalah ...",
      kataKualifikasi: ["wajib disertai"],
      opsi: { A: "(1) dan (4)", B: "(4) saja", C: "(1), (3), dan (4)", D: "(1), (2), dan (4)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Sanksi 100% hanya melekat pada dokumen yang bea meterainya sudah terutang tetapi tidak dibayar sampai lewat saat terutangnya. Surat kuasa termasuk surat sejenis surat pernyataan yang terutang saat diserahkan (Februari 2026), dan perjanjian Kuala Lumpur sudah terutang sejak dijadikan dasar pencatatan di Indonesia (Februari 2026). Perjanjian Singapura dilunasi sebelum digunakan di Indonesia, dan tanda terima Rp4.500.000 semula bukan objek sehingga cukup Rp10.000 tanpa sanksi.",
        jejakHitung: [
          ["(1) Surat kuasa (surat sejenis surat pernyataan)", "terutang 9 Februari 2026, belum dibayar → Rp10.000 + sanksi 100%"],
          ["(2) Perjanjian Singapura", "terutang saat digunakan di Indonesia (18 Mei 2026); dilunasi 11 Mei → tanpa sanksi"],
          ["(3) Tanda terima Rp4.500.000", "bukan objek; menjadi objek karena alat bukti → Rp10.000 tanpa sanksi"],
          ["(4) Perjanjian Kuala Lumpur", "terutang Februari 2026 saat dipakai untuk pembukuan; dilunasi September → sanksi 100%"]
        ],
        mengapaSalah: {
          B: "Surat kuasa adalah surat sejenis surat pernyataan (Penjelasan Pasal 3 ayat (2) huruf a) yang terutang sejak diserahkan; pelunasan yang terlambat tetap disertai sanksi walaupun dipicu permintaan notaris",
          C: "Dokumen yang semula bukan objek lalu diajukan sebagai alat bukti hanya membayar bea meterai yang terutang saat pemeteraian kemudian, tanpa sanksi (Pasal 18 ayat (1) huruf b UU 10/2020; Pasal 49 huruf c PMK 78/2024)",
          D: "Dokumen yang dibuat di luar negeri baru terutang saat digunakan di Indonesia; perjanjian Singapura dilunasi sebelum saat itu sehingga tidak ada sanksi"
        },
        jebakan: "Yang menentukan sanksi adalah apakah saat terutang sudah lewat tanpa pelunasan, bukan alasan dokumen dimeteraikan. Untuk dokumen luar negeri, saat terutang adalah saat dipakai di Indonesia, termasuk sebagai dasar pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan Pasal 8 ayat (1) huruf c dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 49 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-050",
      sejak: "9.5.0"
    },
    {
      id: "A5-146",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "CV Karya Baja Mandiri (kontraktor bengkel las) pada 2025 menandatangani 3 kontrak pekerjaan dengan 3 pemberi kerja, masing-masing dibuat dalam 2 rangkap asli (satu untuk CV Karya Baja Mandiri, satu untuk pemberi kerja). Sepanjang 2025 CV Karya Baja Mandiri juga menyerahkan 3 kuitansi termin kepada para pemberi kerja, masing-masing Rp45.000.000, dan menerima 5 kuitansi dari pemasok besi masing-masing Rp12.000.000, Rp5.000.000, Rp7.500.000, Rp4.800.000, dan Rp30.000.000. Tidak ada klausul tentang pembebanan meterai. Pemeriksaan pada Oktober 2026 menemukan seluruh kontrak dan kuitansi tersebut tidak bermeterai. Jumlah bea meterai beserta sanksi yang harus dilunasi oleh CV Karya Baja Mandiri sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp180.000", B: "Rp120.000", C: "Rp60.000", D: "Rp140.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "CV Karya Baja Mandiri terutang atas 3 rangkap kontrak yang diterimanya dan atas kuitansi pemasok yang diterimanya dengan nilai lebih dari Rp5.000.000 (Rp12.000.000, Rp7.500.000, dan Rp30.000.000). Kuitansi termin buatannya terutang oleh pemberi kerja sebagai penerima. Keenam dokumen sudah lewat saat terutang sehingga masing-masing dilunasi Rp10.000 ditambah sanksi 100%.",
        jejakHitung: [
          ["Rangkap kontrak milik CV", "3 dokumen"],
          ["Kuitansi pemasok > Rp5.000.000 yang diterima CV", "3 dokumen (Rp5.000.000 dan Rp4.800.000 bukan objek)"],
          ["Kuitansi termin buatan CV", "terutang oleh pemberi kerja → 0"],
          ["Per dokumen: Rp10.000 + sanksi 100%", "Rp20.000"],
          ["6 × Rp20.000", "Rp120.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung rangkap kontrak yang diterima pemberi kerja (6 rangkap + 3 kuitansi = 9 × Rp20.000); rangkap itu terutang oleh pemberi kerja (Pasal 9 ayat (2))",
          C: "Tidak mengenakan sanksi 100% atas dokumen yang ditemukan setelah lewat saat terutang (6 × Rp10.000)",
          D: "Ikut menghitung kuitansi tepat Rp5.000.000, padahal objeknya hanya yang nilainya lebih dari Rp5.000.000 (7 × Rp20.000)"
        },
        jebakan: "Pilah dulu siapa penerima tiap dokumen. Kuitansi yang dibuat CV justru tidak menjadi bebannya, sedangkan kuitansi yang diterimanya menjadi beban bila nilainya lebih dari Rp5.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-051",
      sejak: "9.5.0"
    },
    {
      id: "A5-147",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Bagian piutang PT Rimba Kertas Utama menyusun satu kalimat baku untuk prosedur kompensasi utang-piutang dengan distributor. Sebagai bahan uji, pada 16 September 2026 manajer keuangan menandatangani dua surat konfirmasi yang menyatakan bahwa utang dua distributor telah diperhitungkan dengan klaim retur masing-masing sebesar Rp5.000.000 dan Rp6.400.000; kedua surat baru dikirim dan diterima para distributor pada 21 September 2026. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Rumusan kalimat baku yang paling tepat menurut UU 10/2020, yang sekaligus menghasilkan perlakuan benar atas kedua surat tersebut, adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Dokumen yang berisi pengakuan bahwa utang telah dilunasi atau diperhitungkan dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen ditandatangani oleh pihak yang membuatnya, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen.", B: "Dokumen yang berisi pengakuan bahwa utang telah dilunasi atau diperhitungkan dengan nilai nominal paling sedikit Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen.", C: "Dokumen yang berisi pengakuan bahwa utang telah dilunasi atau diperhitungkan dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang membuat dan menandatangani dokumen.", D: "Dokumen yang berisi pengakuan bahwa utang telah dilunasi atau diperhitungkan dengan nilai nominal lebih dari Rp5.000.000 terutang bea meterai Rp10.000 pada saat dokumen diserahkan kepada pihak untuk siapa dokumen dibuat, dan bea meterai tersebut terutang oleh pihak yang menerima dokumen." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang berisi pengakuan bahwa utang telah dilunasi atau diperhitungkan termasuk objek Pasal 3 ayat (2) huruf g bila nilainya lebih dari Rp5.000.000, terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat (Pasal 8 ayat (1) huruf c), dan sebagai dokumen sepihak terutang oleh penerimanya (Pasal 9 ayat (1)). Hanya opsi D yang memuat ketiga unsur itu.",
        jejakHitung: [
          ["Surat konfirmasi Rp5.000.000", "tidak lebih dari Rp5 juta → tidak terutang"],
          ["Surat konfirmasi Rp6.400.000", "terutang Rp10.000"],
          ["Saat terutang", "21 September 2026 (diserahkan), bukan 16 September 2026 (ditandatangani)"],
          ["Pihak terutang", "distributor sebagai penerima surat"]
        ],
        mengapaSalah: {
          A: "Saat dibubuhi tanda tangan berlaku untuk surat perjanjian, akta notaris, dan akta PPAT; dokumen pengakuan pelunasan terutang saat diserahkan, sehingga tanggal 16 September 2026 keliru",
          B: "Frasa paling sedikit membuat surat tepat Rp5.000.000 ikut terutang, padahal undang-undang memakai ambang lebih dari Rp5.000.000",
          C: "Pasal 9 ayat (1) menetapkan dokumen sepihak terutang oleh pihak yang menerima dokumen, bukan oleh pembuatnya"
        },
        jebakan: "Kompensasi tanpa uang tunai tetap masuk Pasal 3 ayat (2) huruf g karena undang-undang menyebut utang yang dilunasi atau diperhitungkan. Bandingkan empat kalimat pada tiga titik: ambang, saat terutang, dan pihak terutang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-053",
      sejak: "9.5.0"
    },
    {
      id: "A5-148",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "CV Lensa Kreatif dan PT Puspa Boga pada 7 Oktober 2026 menyepakati kontrak jasa pemotretan katalog senilai Rp3.500.000 berbentuk berkas PDF. Kedua direktur menandatanganinya dengan menyisipkan gambar tanda tangan masing-masing hasil pindai ke dalam PDF, tanpa sertifikat elektronik, lalu kontrak dipertukarkan melalui surel dan disimpan tanpa pernah dicetak. Staf administrasi diminta memilih satu kalimat untuk catatan kepatuhan. Kalimat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kontrak elektronik tersebut tidak terutang bea meterai karena nilai kontraknya tidak lebih dari Rp5.000.000; ambang itu berlaku bagi setiap dokumen yang menyatakan jumlah uang, termasuk surat perjanjian yang dibuat dan disimpan secara elektronik.", B: "Kontrak elektronik tersebut belum terutang bea meterai karena gambar tanda tangan hasil pindai bukan tanda tangan elektronik tersertifikasi; bea meterai baru terutang setelah kedua direktur menandatangani ulang dengan sertifikat elektronik.", C: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 per dokumen tanpa memperhatikan nilai kontrak dan bentuk tanda tangannya, terutang pada saat dokumen dibubuhi tanda tangan, dan dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu.", D: "Kontrak elektronik tersebut terutang bea meterai Rp10.000 per dokumen tanpa memperhatikan nilai kontrak dan bentuk tanda tangannya, terutang pada saat dokumen dibubuhi tanda tangan, dan dilunasi dengan gambar meterai tempel asli yang dipindai lalu disisipkan ke dalam berkas PDF." },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen elektronik termasuk Dokumen, dan Tanda Tangan mencakup teraan tanda tangan, tanda lain pengganti tanda tangan, serta tanda tangan elektronik (Pasal 1 UU 10/2020). Surat perjanjian terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a) dengan tarif tetap Rp10.000 tanpa ambang nilai (Pasal 5), dan dokumen elektronik dilunasi dengan meterai elektronik berkode unik (Pasal 12 dan Pasal 14).",
        jejakHitung: [
          ["Jenis dokumen", "surat perjanjian elektronik (Pasal 3 ayat (2) huruf a)"],
          ["Nilai Rp3.500.000", "tidak relevan; ambang Rp5 juta hanya untuk Pasal 3 ayat (2) huruf g"],
          ["Gambar tanda tangan hasil pindai", "termasuk Tanda Tangan (Pasal 1 angka 3)"],
          ["Saat terutang", "7 Oktober 2026, saat dibubuhi tanda tangan"],
          ["Sarana pelunasan", "meterai elektronik berkode unik"]
        ],
        mengapaSalah: {
          A: "Ambang lebih dari Rp5.000.000 hanya berlaku bagi dokumen yang menyebutkan penerimaan uang atau pengakuan pelunasan utang; surat perjanjian terutang berapa pun nilainya",
          B: "Pengertian Tanda Tangan dalam Pasal 1 angka 3 mencakup teraan tanda tangan dan tanda lain pengganti tanda tangan, tidak terbatas pada tanda tangan elektronik tersertifikasi",
          D: "Gambar pindai bukan meterai; dokumen elektronik dilunasi dengan meterai elektronik yang memiliki kode unik dan keterangan tertentu (Pasal 14)"
        },
        jebakan: "Nilai kontrak di bawah Rp5 juta dan tanda tangan tanpa sertifikat adalah pengalih; yang diuji adalah jenis dokumen, pengertian tanda tangan, dan sarana pelunasan."
      },
      dasarHukum: [{ pasal: "Pasal 1, Pasal 5, dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 dan Pasal 14 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-054",
      sejak: "9.5.0"
    },
    {
      id: "A5-149",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "PMK 78/2024 Pasal 63 ayat (1): \"Penyetoran Bea Meterai sebagaimana dimaksud dalam Pasal 60 huruf b atas Bea Meterai yang dipungut untuk setiap Masa Pajak wajib dilakukan paling lambat tanggal 15 (lima belas) bulan berikutnya setelah Masa Pajak berakhir.\" Pasal 64 ayat (1): \"Pelaporan sebagaimana dimaksud dalam Pasal 60 huruf c wajib dilakukan dengan menyampaikan SPT Masa Bea Meterai ke kantor Direktorat Jenderal Pajak paling lambat tanggal 15 (lima belas) bulan berikutnya setelah Masa Pajak berakhir.\" Pasal 65: \"(1) Dalam hal batas akhir penyetoran sebagaimana dimaksud dalam Pasal 63 ayat (1) dan pelaporan sebagaimana dimaksud dalam Pasal 64 ayat (1) merupakan hari libur, penyetoran dan pelaporan dapat dilakukan paling lama pada hari kerja berikutnya. (2) Hari libur sebagaimana dimaksud pada ayat (1) merupakan hari Sabtu, hari Minggu, hari libur nasional, hari yang diliburkan untuk penyelenggaraan Pemilihan Umum, atau cuti bersama secara nasional.\"",
      stem: "PT Pasar Daring Nusantara, penyelenggara lokapasar yang telah ditetapkan Kepala KPP sebagai pemungut bea meterai, pada Masa April 2026 memfasilitasi penerbitan kuitansi digital berikut: 4.615 kuitansi bernilai lebih dari Rp5.000.000, 1.204 kuitansi bernilai tepat Rp5.000.000, dan 9.870 kuitansi bernilai di bawah Rp5.000.000. Seluruh bea meterai yang wajib dipungut telah dipungut dari pihak yang terutang. Anggap 14 Mei 2026 (Kamis) adalah hari libur nasional, 15 Mei 2026 (Jumat) cuti bersama secara nasional, dan 18 Mei 2026 (Senin) hari kerja biasa. Berdasarkan kutipan tersebut, jumlah setoran melalui kode billing Coretax serta batas paling lambat penyetoran dan penyampaian SPT Masa Bea Meterai yang tidak menimbulkan sanksi adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Setor Rp46.150.000 dan lapor paling lambat Senin, 18 Mei 2026", B: "Setor Rp46.150.000 dan lapor paling lambat Jumat, 15 Mei 2026, karena cuti bersama tidak menggeser tenggat", C: "Setor Rp58.190.000 dan lapor paling lambat Senin, 18 Mei 2026", D: "Setor Rp46.150.000 paling lambat 10 Mei 2026 dan lapor paling lambat 20 Mei 2026" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Bea meterai yang dipungut hanya atas kuitansi bernilai lebih dari Rp5.000.000: 4.615 × Rp10.000 = Rp46.150.000. Tenggat setor dan lapor Masa April 2026 adalah 15 Mei 2026; karena 15 Mei cuti bersama secara nasional, disusul Sabtu dan Minggu, keduanya bergeser ke hari kerja berikutnya, Senin 18 Mei 2026.",
        jejakHitung: [
          ["Dokumen objek pemungutan", "4.615 (kuitansi tepat Rp5.000.000 dan di bawahnya tidak terutang)"],
          ["4.615 × Rp10.000", "Rp46.150.000"],
          ["Tenggat normal Masa April 2026", "15 Mei 2026 (Jumat, cuti bersama)"],
          ["16 Mei (Sabtu) dan 17 Mei (Minggu)", "hari libur"],
          ["Tenggat setor dan lapor", "Senin, 18 Mei 2026"]
        ],
        mengapaSalah: {
          B: "Pasal 65 ayat (2) PMK 78/2024 memasukkan cuti bersama secara nasional ke dalam pengertian hari libur, sehingga tenggat bergeser",
          C: "Ikut memungut atas 1.204 kuitansi tepat Rp5.000.000 (5.819 × Rp10.000), padahal objeknya hanya yang bernilai lebih dari Rp5.000.000",
          D: "Setor tanggal 10 dan lapor tanggal 20 adalah ketentuan PMK 151/2021 yang sudah dicabut PMK 78/2024"
        },
        jebakan: "Hari libur dalam Pasal 65 PMK 78/2024 bukan hanya Sabtu, Minggu, dan libur nasional, tetapi juga cuti bersama secara nasional; libur nasional sehari sebelum tenggat (14 Mei) tidak berpengaruh."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-055",
      sejak: "9.5.0"
    },
    {
      id: "A5-150",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-12",
      stem: "Data untuk soal vignette V-A5-12: PT Arunika Tekstil (PKP, produsen kain, 410 karyawan) mencatat dokumen Agustus 2026 berikut, seluruhnya tanpa meterai: (1) perjanjian sewa mesin tenun dengan CV Benang Jaya senilai Rp840.000.000, dibuat dalam 3 rangkap asli, dua disimpan PT Arunika (kantor pusat dan pabrik) dan satu untuk CV Benang Jaya; (2) tiga kuitansi yang dibuat PT Arunika dan diserahkan kepada pembeli kain, masing-masing Rp9.600.000, Rp22.500.000, dan Rp61.000.000; (3) empat kuitansi dari pemasok benang yang diterima PT Arunika, masing-masing Rp5.000.000, Rp8.750.000, Rp15.200.000, dan Rp4.990.000; (4) tanda terima uang lembur Agustus seluruh karyawan, total Rp612.000.000; (5) 26 surat jalan pengiriman kain; (6) surat pernyataan kesanggupan menjaga kerahasiaan data yang dibuat PT Arunika dan diserahkan kepada Bank Mitra Niaga; (7) perjanjian pembelian benang impor yang ditandatangani di Osaka pada 4 Agustus 2026, rangkap PT Arunika, yang dijadikan dasar pencatatan utang dalam pembukuan PT Arunika pada 24 Agustus 2026. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Bea meterai yang sampai dengan 30 September 2026 telah terutang oleh PT Arunika Tekstil sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp70.000", C: "Rp50.000", D: "Rp60.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pilah objek dulu, lalu pihak terutang. PT Arunika terutang atas dua rangkap perjanjian yang diterimanya, dua kuitansi pemasok bernilai lebih dari Rp5.000.000 yang diterimanya, dan perjanjian Osaka yang sudah digunakan di Indonesia sebagai dasar pembukuan. Kuitansi buatannya terutang oleh pembeli dan surat pernyataannya terutang oleh bank sebagai penerima.",
        jejakHitung: [
          ["(1) Rangkap perjanjian yang diterima PT Arunika", "2 dokumen (rangkap CV terutang oleh CV)"],
          ["(2) Kuitansi buatan PT Arunika", "terutang oleh pembeli → 0"],
          ["(3) Kuitansi pemasok Rp8.750.000 dan Rp15.200.000", "2 dokumen (Rp5.000.000 dan Rp4.990.000 bukan objek)"],
          ["(4) Tanda terima lembur dan (5) surat jalan", "bukan objek (Pasal 7 huruf c dan a)"],
          ["(6) Surat pernyataan untuk bank", "terutang oleh bank → 0"],
          ["(7) Perjanjian Osaka", "1 dokumen (digunakan di Indonesia 24 Agustus 2026)"],
          ["Total 5 × Rp10.000", "Rp50.000"]
        ],
        mengapaSalah: {
          A: "Hanya menghitung satu rangkap perjanjian untuk PT Arunika, padahal ia menerima dua rangkap asli (atau menganggap perjanjian Osaka belum terutang): 4 × Rp10.000",
          B: "Menganggap pembuat dokumen sebagai pihak terutang: 2 rangkap + 3 kuitansi buatan PT Arunika + surat pernyataan + perjanjian Osaka (7 × Rp10.000)",
          D: "Ikut menghitung kuitansi pemasok tepat Rp5.000.000 sebagai objek (6 × Rp10.000)"
        },
        jebakan: "Jumlah karyawan, nilai sewa, dan total lembur tidak dipakai. Rangkap dihitung per dokumen asli yang diterima, dan dokumen luar negeri sudah terutang begitu dipakai untuk pembukuan di Indonesia."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g serta Pasal 7 huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-057",
      sejak: "9.5.0"
    },
    {
      id: "A5-151",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-12",
      stem: "Lanjutan V-A5-12: Pemeriksaan pada 4 November 2026 menemukan bahwa lima dokumen Agustus 2026 yang terutang oleh PT Arunika Tekstil (dua rangkap perjanjian sewa mesin yang diterimanya, kuitansi pemasok Rp8.750.000 dan Rp15.200.000, serta perjanjian pembelian benang yang ditandatangani di Osaka dan dipakai untuk pembukuan pada 24 Agustus 2026) belum dilunasi bea meterainya. Arsip lama PT Arunika juga memuat: (a) kuitansi pemasok Rp11.000.000 yang diterima PT Arunika pada 9 November 2021 tanpa meterai; (b) kuitansi pemasok Rp6.300.000 yang diterima pada 27 Oktober 2021 tanpa meterai; (c) dua perjanjian angkutan yang ditandatangani pada 2023 dan 2024, rangkap PT Arunika, masing-masing dibubuhi dua meterai tempel lama Rp6.000 (nilai total Rp12.000 per dokumen). Tidak satu pun dokumen pernah diajukan ke pengadilan. Jumlah pokok dan sanksi yang harus dilunasi PT Arunika melalui pemeteraian kemudian atas seluruh dokumen yang ditemukan pemeriksa, baik lima dokumen Agustus 2026 maupun dokumen arsip lama tersebut, adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp120.000", B: "Rp180.000", C: "Rp140.000", D: "Rp160.000" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Dokumen yang tidak dilunasi pada saat terutang dimeteraikan kemudian sebesar Rp10.000 ditambah sanksi 100% per dokumen, kecuali bea meterainya sudah kedaluwarsa setelah 5 tahun sejak saat terutang. Meterai tempel lama hanya dapat dipakai sampai 31 Desember 2021, sehingga dua perjanjian 2023 dan 2024 dianggap tidak dibayar walaupun nilai tempelnya Rp12.000.",
        jejakHitung: [
          ["Lima dokumen Agustus 2026", "5 × Rp20.000 = Rp100.000"],
          ["(a) diterima 9 November 2021", "kedaluwarsa mulai 9 November 2026, belum lewat → Rp20.000"],
          ["(b) diterima 27 Oktober 2021", "kedaluwarsa mulai 27 Oktober 2026 → Rp0"],
          ["(c) dua perjanjian bermeterai lama", "2 × (Rp10.000 + Rp10.000) = Rp40.000"],
          ["Total", "Rp160.000"]
        ],
        mengapaSalah: {
          A: "Menganggap dua meterai tempel lama senilai Rp12.000 melunasi bea meterai; meterai cetakan UU 13/1985 hanya dapat dipakai sampai akhir 2021 (Rp100.000 + Rp20.000)",
          B: "Mengabaikan daluwarsa kuitansi 27 Oktober 2021 yang sudah lewat 5 tahun pada saat pemeriksaan (Rp160.000 + Rp20.000)",
          C: "Menganggap kedua kuitansi 2021 daluwarsa hanya karena 2026 − 2021 = 5 tahun; kuitansi 9 November 2021 baru kedaluwarsa mulai 9 November 2026 (Rp100.000 + Rp40.000)"
        },
        jebakan: "Daluwarsa diuji per tanggal saat terutang terhadap tanggal pemeriksaan, bukan per tahun. Nilai tempel meterai lama yang melebihi Rp10.000 tidak membuatnya sah."
      },
      dasarHukum: [{ pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 23 UU 10/2020 (daluwarsa 5 tahun sejak saat terutang)", berlakuSejak: "2021-01-01" }, { pasal: "Ketentuan Peralihan UU 10/2020 (meterai lama sampai 31 Desember 2021)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-058",
      sejak: "9.5.0"
    },
    {
      id: "A5-152",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Cendekia Prima Kursus (lembaga kursus bahasa, bukan pemungut bea meterai; 18 cabang) mencatat dokumen Oktober 2026 berikut, seluruhnya belum dibubuhi meterai: (1) 220 sertifikat kelulusan kursus yang diserahkan kepada peserta; (2) 60 kuitansi pembayaran biaya kursus masing-masing Rp6.500.000 yang dibuat PT Cendekia dan diserahkan kepada peserta; (3) surat perjanjian sewa gedung cabang dengan Tuan Hendra senilai Rp240.000.000 dalam 2 rangkap asli, satu untuk PT Cendekia dan satu untuk Tuan Hendra; (4) kuitansi pembelian proyektor Rp18.400.000 yang dibuat penjual dan diserahkan kepada PT Cendekia; (5) tanda terima gaji instruktur tetap Rp356.000.000; (6) tanda pembagian dividen tunai Rp25.000.000 atas saham yang dimiliki PT Cendekia pada perusahaan lain; (7) tanda terima setoran kas dari kasir cabang kepada bagian keuangan pusat Rp87.000.000; (8) surat pernyataan kesanggupan melunasi cicilan biaya kursus yang dibuat seorang peserta dan diserahkan kepada PT Cendekia. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Bea meterai yang terutang oleh PT Cendekia sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: ["sendiri sebagai pihak yang terutang"],
      opsi: { A: "Rp40.000", B: "Rp30.000", C: "Rp630.000", D: "Rp2.230.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sertifikat kursus, tanda terima gaji, tanda pembagian dividen, dan tanda terima uang intern dikecualikan Pasal 7 berapa pun nilainya. Kuitansi biaya kursus terutang oleh peserta sebagai penerima. Yang terutang oleh PT Cendekia hanya rangkap perjanjian yang diterimanya, kuitansi proyektor yang diterimanya, dan surat pernyataan yang diterimanya.",
        jejakHitung: [
          ["(1) Sertifikat kelulusan kursus", "bukan objek (Pasal 7 huruf b dan Penjelasannya)"],
          ["(2) Kuitansi biaya kursus", "terutang oleh peserta → 0"],
          ["(3) Rangkap perjanjian milik PT Cendekia", "Rp10.000 (rangkap Tuan Hendra terutang oleh Tuan Hendra)"],
          ["(4) Kuitansi proyektor yang diterima PT Cendekia", "Rp10.000"],
          ["(5) Tanda terima gaji, (6) tanda pembagian dividen, (7) tanda terima intern", "bukan objek (Pasal 7 huruf c, i, dan f)"],
          ["(8) Surat pernyataan yang diterima PT Cendekia", "Rp10.000"],
          ["Total 3 × Rp10.000", "Rp30.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung rangkap perjanjian yang diterima Tuan Hendra; rangkap itu terutang oleh Tuan Hendra sendiri (Pasal 9 ayat (2))",
          C: "Menganggap pembuat kuitansi sebagai pihak terutang sehingga 60 kuitansi biaya kursus ikut dibebankan (63 × Rp10.000); dokumen sepihak terutang oleh penerimanya (Pasal 9 ayat (1))",
          D: "Menganggap 220 sertifikat kursus sebagai surat keterangan yang terutang (223 × Rp10.000); sertifikat pelatihan atau kursus termasuk ijazah yang dikecualikan Pasal 7 huruf b"
        },
        jebakan: "Jumlah cabang, nilai gaji, dividen, dan setoran intern adalah umpan; pengecualian Pasal 7 tidak mengenal ambang nilai, dan pihak terutang ditentukan per dokumen menurut siapa penerimanya."
      },
      dasarHukum: [{ pasal: "Pasal 7 huruf b, c, f, dan i UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan g serta Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-059",
      sejak: "9.5.0"
    },
    {
      id: "A5-153",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Tirta Sejuk Abadi, nasabah giro Bank Sentosa Raya yang telah ditetapkan sebagai pemungut bea meterai atas cek dan bilyet giro, pada 2 November 2026 menerima satu buku bilyet giro berisi 50 lembar yang setiap lembarnya sudah memuat Meterai Percetakan. Sepanjang November 2026 PT Tirta Sejuk Abadi memakai empat lembar bilyet giro untuk membayar pemasok, masing-masing sebesar Rp3.200.000, Rp5.000.000, Rp47.500.000, dan Rp210.000.000. Untuk memo internal, kalimat yang paling tepat mengenai bea meterai atas bilyet giro tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Setiap lembar bilyet giro merupakan surat berharga yang terutang bea meterai Rp10.000 hanya apabila nominal yang ditulis lebih dari Rp5.000.000; bea meterainya telah dipungut Bank Sentosa Raya melalui Meterai Percetakan, sehingga hanya lembar Rp47.500.000 dan Rp210.000.000 yang terutang.", B: "Setiap buku bilyet giro merupakan satu surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nominal yang ditulis; bea meterainya telah dipungut Bank Sentosa Raya melalui Meterai Percetakan sebelum buku diserahkan, sehingga perusahaan tidak perlu membubuhkan meterai lagi.", C: "Setiap lembar bilyet giro merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nominal yang ditulis; bea meterainya telah dipungut Bank Sentosa Raya melalui Meterai Percetakan sebelum buku diserahkan, sehingga perusahaan tidak perlu membubuhkan meterai lagi.", D: "Setiap lembar bilyet giro merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nominal yang ditulis; Bank Sentosa Raya memungutnya pada saat tiap lembar dicairkan melalui kliring, sehingga hanya empat lembar yang dipakai yang dikenai bea meterai." },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Bilyet giro termasuk surat berharga (Pasal 3 ayat (2) huruf d UU 10/2020 dan Penjelasannya) yang terutang tanpa ambang nilai, satu kali untuk setiap dokumen, yaitu per lembar. Bank yang ditetapkan sebagai pemungut memungut bea meterai cek dan bilyet giro dengan Meterai Percetakan (Pasal 62 ayat (1) huruf a PMK 78/2024) pada saat menerima dokumen dari pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a), jadi sebelum buku diserahkan kepada nasabah. Lembar itu sudah lunas, sehingga nasabah tidak membubuhkan meterai lagi.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ambang lebih dari Rp5.000.000 hanya berlaku bagi dokumen yang menyebutkan penerimaan uang atau pengakuan pelunasan utang (Pasal 3 ayat (2) huruf g), bukan bagi surat berharga",
          B: "Satuan dokumen adalah lembar bilyet giro, bukan buku; satu buku berisi 50 lembar berarti 50 dokumen",
          D: "Pemungutan atas cek dan bilyet giro dilakukan saat bank menerimanya dari pemegang izin Meterai Percetakan (Pasal 61 huruf a PMK 78/2024), bukan saat dicairkan, sehingga seluruh lembar sudah dipungut sebelum diserahkan"
        },
        jebakan: "Nominal Rp3.200.000 dan Rp5.000.000 memancing ambang Rp5 juta yang hanya berlaku untuk dokumen penerimaan uang. Pemungutan bilyet giro mendahului pemakaiannya, sehingga jumlah lembar yang dipakai tidak menentukan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d, Pasal 4, dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 10 dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf a, Pasal 61 huruf a, dan Pasal 62 ayat (1) huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-060",
      sejak: "9.5.0"
    },
    {
      id: "A5-154",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Galeri Rupa Kencana mengundang Nyonya Laras Pratiwi, perancang grafis lepas yang bukan pegawai PT Galeri Rupa Kencana dan memiliki NPWP (NIK terpadan), sebagai juri lomba desain kemasan pada 9 Oktober 2026. Honorarium bruto Rp5.250.000 dibayar sekaligus dan tidak berkesinambungan; PT Galeri Rupa Kencana memotong PPh Pasal 21 bagi bukan pegawai sesuai PMK 168/2023 (tarif Pasal 17 × 50% × penghasilan bruto). Nyonya Laras menandatangani kuitansi yang menyebutkan jumlah uang yang benar-benar diterimanya, lalu menyerahkannya kepada PT Galeri Rupa Kencana. Pada hari yang sama perusahaan membayar insentif penjualan kepada pegawai tetapnya Rp7.000.000 dengan tanda terima. Tidak ada kesepakatan tentang pembebanan meterai. PPh Pasal 21 atas honorarium dan perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 21 Rp131.250; kuitansi Nyonya Laras (Rp5.118.750) terutang bea meterai Rp10.000 oleh PT Galeri Rupa Kencana sebagai penerima dokumen; tanda terima insentif pegawai tidak terutang", B: "PPh Pasal 21 Rp262.500; kuitansi Nyonya Laras (Rp4.987.500) tidak terutang bea meterai karena nilainya tidak lebih dari Rp5.000.000; tanda terima insentif pegawai tidak terutang", C: "PPh Pasal 21 Rp131.250; kuitansi Nyonya Laras (Rp5.118.750) terutang bea meterai Rp10.000 oleh Nyonya Laras sebagai pembuat dan penanda tangan kuitansi; tanda terima insentif pegawai tidak terutang", D: "PPh Pasal 21 Rp131.250; kuitansi Nyonya Laras (Rp5.118.750) dan tanda terima insentif pegawai masing-masing terutang bea meterai Rp10.000 oleh PT Galeri Rupa Kencana" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bagi bukan pegawai, PPh 21 = 5% × 50% × Rp5.250.000 = Rp131.250, sehingga uang yang diterima Rp5.118.750. Kuitansi itu menyebutkan penerimaan uang lebih dari Rp5.000.000 dan terutang oleh PT Galeri Rupa Kencana sebagai penerima dokumen; tanda terima insentif pegawai tetap dikecualikan Pasal 7 huruf c.",
        jejakHitung: [
          ["Dasar pemotongan = 50% × Rp5.250.000", "Rp2.625.000"],
          ["PPh 21 = 5% × Rp2.625.000 (lapisan pertama Pasal 17)", "Rp131.250"],
          ["Uang diterima = 5.250.000 − 131.250", "Rp5.118.750 (> Rp5.000.000)"],
          ["Bea meterai kuitansi", "Rp10.000, terutang oleh PT Galeri Rupa Kencana (penerima)"],
          ["Tanda terima insentif pegawai", "bukan objek (Pasal 7 huruf c)"]
        ],
        mengapaSalah: {
          B: "Tidak menerapkan dasar 50% × penghasilan bruto bagi bukan pegawai (5% × Rp5.250.000 = Rp262.500), sehingga uang yang diterima tampak Rp4.987.500 dan kuitansi keliru dianggap di bawah ambang",
          C: "Kuitansi adalah dokumen sepihak yang terutang oleh pihak yang menerima dokumen (Pasal 9 ayat (1)), yaitu PT Galeri Rupa Kencana",
          D: "Insentif penjualan pegawai tetap adalah pembayaran yang berkaitan dengan hubungan kerja sehingga tanda terimanya dikecualikan Pasal 7 huruf c"
        },
        jebakan: "Salah hitung PPh 21 dapat membalik status kuitansi: nilai yang tercantum di kuitansi adalah uang yang benar-benar diterima setelah pemotongan, dan selisih tipis di sekitar Rp5.000.000 menentukan terutang atau tidaknya."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (PPh Pasal 21 bukan pegawai: tarif Pasal 17 × 50% × bruto)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g, Pasal 7 huruf c, dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-061",
      sejak: "9.5.0"
    },
    {
      id: "A5-155",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Unit kustodian PT Bank Arunika menelaah kewajiban bea meterai atas dokumen nasabah Agustus 2026: (1) laporan bulanan (statement of account) yang memuat saldo efek nasabah yang disimpan pada kustodian; (2) pemberitahuan pembayaran dividen tunai saham sebesar Rp9.600.000 kepada nasabah pemegang saham; (3) surat kuasa yang ditandatangani nasabah kepada PT Bank Arunika untuk menjual obligasi korporasi milik nasabah; (4) konfirmasi transaksi penjualan obligasi korporasi tersebut di luar bursa efek senilai Rp250.000.000 yang dibuat PT Bank Arunika; (5) rekening koran giro nasabah yang menunjukkan saldo Rp480.000.000. Dokumen yang merupakan objek bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(4) saja", B: "(3), (4), dan (5)", C: "(3) dan (4)", D: "(2), (3), dan (4)" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Surat kuasa termasuk \"surat lainnya yang sejenis\" dengan surat pernyataan (Pasal 3 ayat (2) huruf a dan Penjelasannya), dan konfirmasi transaksi penjualan obligasi di luar bursa adalah Dokumen transaksi surat berharga (huruf e). Statement of account dan rekening koran giro adalah dokumen yang menyebutkan simpanan surat berharga atau simpanan uang (Pasal 7 huruf g), sedangkan pemberitahuan dividen adalah tanda pembagian keuntungan dari surat berharga (Pasal 7 huruf i); ketiganya tidak dikenai bea meterai.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Surat kuasa adalah surat lainnya yang sejenis dengan surat pernyataan sehingga menjadi objek menurut Pasal 3 ayat (2) huruf a",
          B: "Rekening koran giro berisi pemberitahuan saldo simpanan uang di bank yang dikecualikan Pasal 7 huruf g, berapa pun saldonya",
          D: "Pemberitahuan dividen tunai adalah tanda pembagian keuntungan dari surat berharga yang dikecualikan Pasal 7 huruf i, walaupun nilainya di atas Rp5.000.000"
        },
        jebakan: "Nilai Rp9.600.000 dan saldo Rp480.000.000 menggoda untuk memakai ambang Rp5.000.000; dokumen dalam daftar Pasal 7 tidak dikenai bea meterai berapa pun nilainya."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf g dan i UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-062",
      sejak: "9.5.0"
    },
    {
      id: "A5-156",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "Pasal 7 huruf f UU 10/2020: Bea Meterai tidak dikenakan atas Dokumen yang berupa \"tanda penerimaan uang yang dibuat untuk keperluan intern organisasi\". Pasal 3 ayat (2) huruf g: \"Dokumen yang menyatakan jumlah uang dengan nilai nominal lebih dari Rp5.000.000,00 (lima juta rupiah) yang: 1. menyebutkan penerimaan uang; ...\". Pasal 9 ayat (1): \"Dokumen yang dibuat sepihak, Bea Meterai terutang oleh pihak yang menerima Dokumen.\"",
      stem: "Yayasan Pendidikan Cahaya Ilmu mengelola langsung SMP Cahaya Ilmu sebagai unit kerjanya (bukan badan hukum tersendiri). Guru dan karyawan yayasan mendirikan Koperasi Karyawan Cahaya Ilmu yang berbadan hukum koperasi tersendiri dan menyewa ruang kantin milik yayasan. Pada Agustus 2026 dibuat dokumen berikut: (1) tanda terima setoran uang sekolah Rp86.000.000 dari bendahara unit SMP kepada bendahara yayasan; (2) kuitansi yang dibuat yayasan atas penerimaan uang sewa kantin satu tahun Rp27.000.000 dari koperasi, diserahkan kepada koperasi; (3) tanda terima uang panjar kegiatan Rp6.200.000 dari bendahara yayasan kepada panitia kegiatan sekolah yang beranggotakan guru yayasan. Para pihak tidak memperjanjikan lain tentang pembebanan meterai. Berdasarkan kutipan tersebut, dokumen yang terutang bea meterai dan pihak yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dokumen (2) saja, terutang oleh Koperasi Karyawan Cahaya Ilmu sebagai penerima kuitansi", B: "Dokumen (1) dan (2), karena unit SMP mempunyai rekening dan pembukuan sendiri", C: "Dokumen (2) saja, terutang oleh Yayasan Pendidikan Cahaya Ilmu sebagai pembuat kuitansi", D: "Dokumen (1), (2), dan (3), masing-masing terutang oleh pihak yang menerima dokumen" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Tanda terima dari unit SMP kepada bendahara yayasan dan tanda terima panjar kepada panitia guru dibuat untuk keperluan intern satu badan (yayasan), sehingga tidak dikenai bea meterai. Koperasi adalah badan hukum lain, sehingga kuitansi sewa Rp27.000.000 yang dibuat yayasan merupakan dokumen penerimaan uang lebih dari Rp5.000.000; dokumen sepihak ini terutang oleh pihak yang menerimanya, yaitu koperasi.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Rekening dan pembukuan unit tidak menjadikannya badan tersendiri; unit SMP tetap bagian dari yayasan sehingga tanda terimanya bersifat intern (Pasal 7 huruf f)",
          C: "Kuitansi adalah dokumen yang dibuat sepihak sehingga terutang oleh pihak yang menerima dokumen (Pasal 9 ayat (1)), bukan oleh pembuatnya",
          D: "Tanda terima (1) dan (3) dibuat untuk keperluan intern yayasan sehingga dikecualikan Pasal 7 huruf f walaupun nilainya di atas Rp5.000.000"
        },
        jebakan: "Koperasi karyawan yang berbadan hukum sendiri bukan bagian intern yayasan; yang intern hanya dokumen di dalam satu badan. Kuitansi terutang oleh penerimanya, bukan pembuatnya."
      },
      dasarHukum: [{ pasal: "Pasal 7 huruf f UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-063",
      sejak: "9.5.0"
    },
    {
      id: "A5-157",
      topik: "A5.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Tn. Bagas Wicaksono menyewakan satu ruko kepada Ny. Melati Kusumawardani untuk usaha katering. Pada 6 Juli 2026 keduanya menandatangani surat perjanjian sewa dua tahun senilai Rp48.000.000 dalam 2 rangkap asli, satu untuk tiap pihak. Pada hari yang sama Tn. Bagas menyerahkan kuitansi uang muka sewa Rp4.800.000 kepada Ny. Melati, lalu pada 20 Juli 2026 menyerahkan kuitansi pelunasan sewa Rp43.200.000. Total bea meterai yang terutang atas seluruh dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000", B: "Rp30.000", C: "Rp40.000", D: "Rp18.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "angka-usang" },
      pembahasan: {
        inti: "Setiap rangkap asli surat perjanjian adalah dokumen tersendiri yang terutang tanpa ambang nilai, sehingga 2 rangkap terutang 2 × Rp10.000. Kuitansi uang muka Rp4.800.000 tidak lebih dari Rp5.000.000 sehingga bukan objek, sedangkan kuitansi pelunasan Rp43.200.000 terutang Rp10.000.",
        jejakHitung: [
          ["Surat perjanjian 2 rangkap × Rp10.000", "Rp20.000"],
          ["Kuitansi uang muka Rp4.800.000", "bukan objek"],
          ["Kuitansi pelunasan Rp43.200.000", "Rp10.000"],
          ["Total", "Rp30.000"]
        ],
        mengapaSalah: {
          A: "Menganggap 2 rangkap perjanjian satu dokumen; menurut Penjelasan Pasal 3 ayat (2) huruf a, setiap rangkap terutang bea meterai",
          C: "Ikut menghitung kuitansi uang muka Rp4.800.000; objeknya hanya dokumen penerimaan uang lebih dari Rp5.000.000",
          D: "Memakai tarif lama Rp6.000 per dokumen (UU 13/1985) untuk tiga dokumen objek"
        },
        jebakan: "Hitung per dokumen: rangkap perjanjian dihitung masing-masing, sedangkan kuitansi hanya objek bila nilainya lebih dari Rp5.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "A5-064",
      sejak: "9.5.0"
    },
    {
      id: "A5-158",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kasusId: "V-A5-13",
      stem: "Data untuk soal vignette V-A5-13: PT Griya Pesona Lestari (pengembang, PKP, usaha pokoknya penjualan tanah dan bangunan) menjual satu unit ruko (bukan rumah sederhana) kepada Tn. Yudhistira Pranata seharga Rp2.160.000.000; para pihak tidak mempunyai hubungan istimewa. Kronologinya: (a) 12 Februari 2026 kedua pihak menandatangani PPJB di bawah tangan dalam 2 rangkap asli, satu untuk tiap pihak; (b) 13 Februari 2026 PT Griya Pesona menyerahkan kuitansi tanda jadi Rp5.000.000; (c) surat pernyataan Tn. Yudhistira tentang kesanggupan melunasi harga ditandatanganinya pada 20 Februari 2026 dan diserahkan kepada PT Griya Pesona pada 23 Februari 2026; (d) kuitansi uang muka Rp432.000.000 ditandatangani kasir PT Griya Pesona pada 2 Maret 2026 dan diserahkan kepada Tn. Yudhistira pada 5 Maret 2026; (e) 15 Juni 2026 para pihak menandatangani akta jual beli di hadapan PPAT; akta asli disimpan PPAT, dan pada hari yang sama PPAT menandatangani 2 salinan untuk para pihak; (f) 15 Juni 2026 PT Griya Pesona menyerahkan kuitansi pelunasan Rp1.723.000.000. Para pihak sepakat bea meterai akta jual beli dan salinannya ditanggung pembeli; untuk dokumen lain tidak ada kesepakatan. Pasangan dokumen dan saat terutang bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPJB: 12 Februari 2026; surat pernyataan: 20 Februari 2026; kuitansi uang muka: 2 Maret 2026; akta jual beli dan salinannya: 15 Juni 2026", B: "PPJB: 15 Juni 2026, bersamaan dengan akta jual beli; surat pernyataan: 23 Februari 2026; kuitansi uang muka: 5 Maret 2026; akta jual beli dan salinannya: 15 Juni 2026", C: "PPJB: 12 Februari 2026; surat pernyataan: 23 Februari 2026; kuitansi uang muka: 5 Maret 2026; akta jual beli dan salinannya: saat didaftarkan ke Kantor Pertanahan", D: "PPJB: 12 Februari 2026; surat pernyataan: 23 Februari 2026; kuitansi uang muka: 5 Maret 2026; akta jual beli dan salinannya: 15 Juni 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Surat perjanjian (PPJB) serta akta PPAT beserta salinannya terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), sedangkan surat pernyataan dan kuitansi terutang saat diserahkan kepada pihak untuk siapa dokumen itu dibuat (Pasal 8 ayat (1) huruf c).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Surat pernyataan dan kuitansi terutang saat diserahkan (Pasal 8 ayat (1) huruf c), yaitu 23 Februari dan 5 Maret 2026, bukan saat ditandatangani",
          B: "PPJB adalah surat perjanjian tersendiri yang terutang saat ditandatangani pada 12 Februari 2026, tidak menunggu akta jual beli",
          C: "Akta PPAT beserta salinannya terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a angka 3), bukan saat pendaftaran"
        },
        jebakan: "Surat pernyataan dan kuitansi masing-masing punya tanggal tanda tangan dan tanggal penyerahan yang berbeda; untuk keduanya yang menentukan adalah penyerahan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a, c, dan g UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "A5-065",
      sejak: "9.5.0"
    },
    {
      id: "A5-159",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A5-13",
      stem: "Lanjutan V-A5-13: Dokumen penjualan ruko PT Griya Pesona Lestari kepada Tn. Yudhistira Pranata (harga Rp2.160.000.000): (a) PPJB 2 rangkap asli; (b) kuitansi tanda jadi Rp5.000.000; (c) surat pernyataan Tn. Yudhistira tentang kesanggupan melunasi harga, diserahkan kepada PT Griya Pesona; (d) kuitansi uang muka Rp432.000.000; (e) akta jual beli yang aslinya disimpan PPAT beserta 2 salinan bertanda tangan PPAT; (f) kuitansi pelunasan Rp1.723.000.000. Seluruh dokumen dilunasi bea meterainya tepat waktu oleh pihak yang wajib. Total bea meterai atas seluruh dokumen transaksi tersebut, siapa pun pihak yang membayarnya, adalah ...",
      kataKualifikasi: ["siapa pun pihak yang membayarnya"],
      opsi: { A: "Rp90.000", B: "Rp60.000", C: "Rp80.000", D: "Rp70.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Hitung per dokumen dengan tarif tetap Rp10.000: 2 rangkap PPJB, surat pernyataan, kuitansi uang muka, kuitansi pelunasan, serta akta jual beli beserta 2 salinannya. Kuitansi tanda jadi tepat Rp5.000.000 tidak lebih dari Rp5.000.000 sehingga bukan objek. Harga ruko tidak memengaruhi tarif.",
        jejakHitung: [
          ["(a) PPJB 2 rangkap", "Rp20.000"],
          ["(b) Tanda jadi Rp5.000.000", "tidak terutang"],
          ["(c) Surat pernyataan", "Rp10.000"],
          ["(d) Uang muka Rp432.000.000", "Rp10.000"],
          ["(e) Akta jual beli + 2 salinan", "Rp30.000"],
          ["(f) Pelunasan Rp1.723.000.000", "Rp10.000"],
          ["Total", "Rp80.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung kuitansi tanda jadi Rp5.000.000; objeknya hanya dokumen dengan nilai lebih dari Rp5.000.000",
          B: "Menganggap salinan akta PPAT bukan objek; Pasal 3 ayat (2) huruf c mencakup akta PPAT beserta salinan dan kutipannya",
          D: "Menghitung PPJB sebagai satu dokumen; setiap rangkap asli yang ditandatangani terutang Rp10.000"
        },
        jebakan: "Nilai tepat Rp5.000.000 belum melewati ambang \"lebih dari Rp5.000.000\", dan harga Rp2,16 miliar tidak relevan karena tarifnya tetap per dokumen."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a, c, dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-066",
      sejak: "9.5.0"
    },
    {
      id: "A5-160",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-13",
      stem: "Lanjutan V-A5-13: Atas penjualan ruko (bukan rumah sederhana) seharga Rp2.160.000.000 kepada Tn. Yudhistira Pranata tanpa hubungan istimewa, PT Griya Pesona Lestari (usaha pokoknya penjualan tanah dan bangunan) wajib menyetor PPh final Pasal 4 ayat (2) atas pengalihan hak atas tanah dan/atau bangunan. Para pihak sepakat bea meterai akta jual beli dan salinannya ditanggung pembeli, sedangkan untuk PPJB (2 rangkap, satu untuk tiap pihak), surat pernyataan Tn. Yudhistira yang diserahkan kepada PT Griya Pesona, kuitansi uang muka Rp432.000.000, dan kuitansi pelunasan Rp1.723.000.000 yang dibuat PT Griya Pesona tidak ada kesepakatan. PPh final yang disetor PT Griya Pesona dan bea meterai yang harus dibayar sendiri oleh PT Griya Pesona dengan memperhatikan kesepakatan tersebut adalah ...",
      kataKualifikasi: ["dibayar sendiri"],
      opsi: { A: "PPh final Rp54.000.000; bea meterai Rp10.000", B: "PPh final Rp54.000.000; bea meterai Rp20.000", C: "PPh final Rp108.000.000; bea meterai Rp20.000", D: "PPh final Rp54.000.000; bea meterai Rp40.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh final 2,5% × Rp2.160.000.000 = Rp54.000.000. Tanpa kesepakatan, PT Griya Pesona membayar bea meterai atas rangkap PPJB yang diterimanya (dokumen dua pihak, Pasal 9 ayat (2)) dan atas surat pernyataan pembeli yang diterimanya (dokumen sepihak, Pasal 9 ayat (1)). Kuitansi yang dibuatnya terutang oleh Tn. Yudhistira sebagai penerima, sedangkan bea meterai akta jual beli beserta salinannya, termasuk salinan untuk PT Griya Pesona, dibayar pembeli sesuai kesepakatan yang dibolehkan Pasal 9 ayat (6).",
        jejakHitung: [
          ["PPh final = 2,5% × Rp2.160.000.000", "Rp54.000.000"],
          ["Rangkap PPJB milik PT Griya Pesona", "Rp10.000"],
          ["Surat pernyataan yang diterima PT Griya Pesona", "Rp10.000"],
          ["Kuitansi uang muka dan pelunasan", "terutang oleh Tn. Yudhistira (penerima)"],
          ["Akta jual beli dan salinannya", "dibayar pembeli sesuai kesepakatan"],
          ["Bea meterai yang dibayar sendiri oleh PT Griya Pesona", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Menganggap surat pernyataan terutang oleh pembuatnya; dokumen sepihak terutang oleh pihak yang menerima dokumen, yaitu PT Griya Pesona",
          C: "Memakai tarif lama 5% sebelum PP 34/2016; tarif untuk pengalihan selain rumah sederhana kini 2,5% dari jumlah bruto",
          D: "Membebankan kuitansi uang muka dan pelunasan kepada PT Griya Pesona sebagai pembuatnya; kuitansi terutang oleh penerimanya, yaitu Tn. Yudhistira"
        },
        jebakan: "Pembuat dokumen sepihak bukan pihak terutang: PT Griya Pesona membayar surat pernyataan yang diterimanya, bukan kuitansi yang dibuatnya; kesepakatan memindahkan pembayaran akta jual beli dan salinannya kepada pembeli."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 2 ayat (1) huruf a (PPh final 2,5% pengalihan tanah/bangunan)", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-067",
      sejak: "9.5.0"
    },
    {
      id: "A5-161",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Arunika Properti (pemilik gedung perkantoran) dan CV Parkir Tertib (pengelola parkir) menandatangani perjanjian kerja sama pengelolaan parkir pada 14 Agustus 2026 dalam 4 rangkap asli; masing-masing pihak menerima 2 rangkap. Pasal 11 perjanjian berbunyi: 'Bea meterai atas seluruh rangkap perjanjian ini ditanggung oleh pemilik gedung.' Kalimat yang paling tepat untuk memo kepatuhan PT Arunika Properti adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Hanya 2 rangkap yang terutang bea meterai pada 14 Agustus 2026 sebesar Rp20.000 karena perjanjian dibuat 2 pihak; Pasal 11 hanya menentukan pihak yang membayar, sehingga PT Arunika melunasinya.", B: "Keempat rangkap terutang bea meterai pada saat masing-masing diserahkan kepada pemegangnya sebesar Rp40.000; Pasal 11 hanya menentukan pihak yang membayar, sehingga PT Arunika melunasi seluruhnya.", C: "Keempat rangkap terutang bea meterai pada 14 Agustus 2026 sebesar Rp40.000, tetapi Pasal 11 tidak berlaku sehingga PT Arunika hanya melunasi 2 rangkap yang diterimanya.", D: "Keempat rangkap terutang bea meterai pada 14 Agustus 2026 sebesar Rp40.000; Pasal 11 hanya menentukan pihak yang membayar, sehingga PT Arunika melunasi seluruhnya tanpa mengubah saat terutang." },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Rangkap adalah satuan jumlah dokumen, sehingga keempat rangkap asli masing-masing terutang Rp10.000 saat ditandatangani pada 14 Agustus 2026. Tanpa kesepakatan, tiap pihak terutang atas rangkap yang diterimanya; Pasal 9 ayat (6) membolehkan para pihak menentukan pihak yang membayar, sehingga PT Arunika melunasi keempat rangkap tanpa mengubah jumlah dokumen maupun saat terutang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Jumlah dokumen ditentukan oleh jumlah rangkap, bukan jumlah pihak; keempat rangkap asli terutang (Penjelasan Pasal 3 ayat (2) huruf a)",
          B: "Surat perjanjian terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), bukan saat diserahkan kepada pemegangnya",
          C: "Pasal 9 ayat (6) UU 10/2020 membolehkan para pihak bersepakat menentukan pihak yang membayar bea meterai"
        },
        jebakan: "Dua pihak tidak berarti dua dokumen: yang dihitung rangkap aslinya. Kesepakatan pembebanan mengubah siapa yang membayar, bukan jumlah dokumen atau saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020 (kesepakatan pihak yang membayar)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-068",
      sejak: "9.5.0"
    },
    {
      id: "A5-162",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Staf pajak PT Kirana Medika menyusun rekap bea meterai per bulan. Datanya: (1) surat perjanjian sewa gudang ditandatangani PT Kirana Medika dan pemilik gudang pada 28 Juli 2026, rangkap pemilik gudang dikirim 3 Agustus 2026; (2) kuitansi penerimaan uang Rp14.500.000 ditandatangani kasir 31 Juli 2026 dan diserahkan kepada pembayar 4 Agustus 2026; (3) aksep (surat sanggup bayar) Rp350.000.000 yang diterbitkan PT Kirana Medika, selesai dibuat dan ditandatangani 30 Juli 2026, lalu diserahkan kepada pemasok 5 Agustus 2026; (4) surat pernyataan direksi ditandatangani 27 Juli 2026 dan diserahkan kepada bank 6 Agustus 2026; (5) perjanjian lisensi dengan pemberi lisensi dari Singapura yang ditandatangani di Singapura 24 Juni 2026 dan pertama kali digunakan di Indonesia sebagai dasar pencatatan pembukuan pada 29 Juli 2026; (6) akta notaris pendirian anak perusahaan yang ditandatangani 31 Juli 2026. Dokumen yang bea meterainya terutang pada bulan Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1), (3), (5), dan (6)", B: "(1), (2), (3), (4), dan (6)", C: "(1), (5), dan (6)", D: "(1), (3), dan (6)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Surat perjanjian dan akta notaris terutang saat ditandatangani, surat berharga saat selesai dibuat, kuitansi dan surat pernyataan saat diserahkan, dan dokumen yang dibuat di luar negeri saat digunakan di Indonesia. Yang jatuh pada Juli 2026: (1) 28 Juli, (3) 30 Juli, (5) 29 Juli, dan (6) 31 Juli.",
        jejakHitung: [
          ["(1) Perjanjian sewa", "28 Juli (tanda tangan)"],
          ["(2) Kuitansi", "4 Agustus (diserahkan)"],
          ["(3) Aksep", "30 Juli (selesai dibuat)"],
          ["(4) Surat pernyataan", "6 Agustus (diserahkan)"],
          ["(5) Perjanjian lisensi Singapura", "29 Juli (digunakan di Indonesia)"],
          ["(6) Akta notaris", "31 Juli (tanda tangan)"]
        ],
        mengapaSalah: {
          B: "Memakai saat tanda tangan untuk semua dokumen; kuitansi dan surat pernyataan terutang saat diserahkan (Agustus), dan perjanjian lisensi saat digunakan di Indonesia (29 Juli)",
          C: "Surat berharga seperti aksep terutang saat selesai dibuat (Pasal 8 ayat (1) huruf b), yaitu 30 Juli 2026, bukan saat diserahkan kepada pemasok",
          D: "Dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia (29 Juli 2026), bukan saat ditandatangani di Singapura pada Juni"
        },
        jebakan: "Pengiriman rangkap pemilik gudang (3 Agustus) dan penyerahan aksep kepada pemasok (5 Agustus) tidak menggeser saat terutang ke Agustus."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf a, b, c, dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf d UU 10/2020 (surat berharga)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-069",
      sejak: "9.5.0"
    },
    {
      id: "A5-163",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 1 angka 3 UU 10/2020: \"Tanda Tangan adalah tanda sebagai lambang nama sebagaimana lazimnya dipergunakan, termasuk paraf, teraan atau cap tanda tangan atau cap paraf, teraan atau cap nama, atau tanda lainnya sebagai pengganti tanda tangan, atau tanda tangan elektronik ...\". Pasal 8 ayat (1) huruf a: Bea Meterai terutang pada saat Dokumen dibubuhi Tanda Tangan, untuk surat perjanjian beserta rangkapnya. Pasal 9 ayat (6): ketentuan Pihak Yang Terutang \"tidak menghalangi pihak atau para pihak untuk bersepakat atau menentukan mengenai pihak yang membayar Bea Meterai.\"",
      stem: "PT Susu Segar Nusantara dan 60 peternak sapi perah mitra menandatangani perjanjian kemitraan pemasokan susu pada 24 September 2026. Setiap perjanjian dibuat 2 rangkap asli, satu untuk PT dan satu untuk peternak. Direktur PT tidak menandatangani dengan tangan, tetapi memakai teraan cap nama direktur, sedangkan para peternak hanya membubuhkan paraf. Rangkap peternak dibagikan pada 2 Oktober 2026. Pasal penutup setiap perjanjian berbunyi: 'Bea meterai atas seluruh rangkap perjanjian ini ditanggung PT Susu Segar Nusantara.' Berdasarkan kutipan tersebut, perlakuan bea meterai yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak terutang, karena direktur hanya memakai teraan cap nama dan para peternak hanya membubuhkan paraf, bukan tanda tangan", B: "Seluruh 120 rangkap terutang pada 2 Oktober 2026 saat rangkap peternak dibagikan (Rp1.200.000), seluruhnya dibayar PT sesuai kesepakatan", C: "Hanya 60 rangkap milik PT yang terutang pada 24 September 2026 (Rp600.000), karena paraf para peternak bukan tanda tangan", D: "Seluruh 120 rangkap terutang pada 24 September 2026 (Rp1.200.000), dan sesuai kesepakatan PT membayar seluruhnya, termasuk rangkap peternak" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Teraan cap nama dan paraf termasuk Tanda Tangan menurut Pasal 1 angka 3, sehingga 120 rangkap terutang saat dibubuhi tanda tangan pada 24 September 2026. Tanpa kesepakatan, tiap pihak terutang atas rangkap yang diterimanya; karena perjanjian menentukan PT yang menanggung, PT membayar seluruh 120 rangkap (Pasal 9 ayat (6)).",
        jejakHitung: [
          ["Jumlah rangkap 60 × 2", "120"],
          ["Bea meterai 120 × Rp10.000", "Rp1.200.000"],
          ["Saat terutang", "24 September 2026"],
          ["Pihak yang membayar", "PT Susu Segar Nusantara (kesepakatan)"]
        ],
        mengapaSalah: {
          A: "Paraf dan teraan cap nama termasuk \"Tanda Tangan\" menurut Pasal 1 angka 3",
          B: "Surat perjanjian terutang saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a), bukan saat rangkap dibagikan",
          C: "Paraf termasuk Tanda Tangan, sehingga rangkap peternak juga terutang; kesepakatan membebankannya kepada PT"
        },
        jebakan: "Bentuk tanda tangan (cap, paraf, elektronik) tidak menunda saat terutang, dan kesepakatan pembebanan menentukan siapa yang membayar seluruh rangkap."
      },
      dasarHukum: [{ pasal: "Pasal 1 UU 10/2020 (pengertian tanda tangan)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅",
      kembaranDari: "A5-070",
      sejak: "9.5.0"
    },
    {
      id: "A5-164",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Mitra Farmasi Sejahtera (distributor obat, PKP, peredaran bruto 2025 Rp47 miliar) mencatat dokumen Oktober 2026 berikut; para pihak tidak memperjanjikan lain tentang pembebanan meterai. (1) Lima kuitansi dari pemasok yang diterima PT Mitra Farmasi, masing-masing Rp4.750.000, Rp5.000.000, Rp5.250.000, Rp18.500.000, dan Rp91.000.000; (2) dua belas kuitansi buatan PT Mitra Farmasi yang diserahkan kepada apotek pelanggan, semuanya di atas Rp5.000.000; (3) perjanjian kerja sama pengadaan obat dengan sebuah rumah sakit dalam 4 rangkap asli, 2 rangkap untuk tiap pihak; (4) bilyet giro Rp150.000.000 yang diterbitkan PT Mitra Farmasi kepada pemasok; (5) surat pernyataan apotek pelanggan tentang kesanggupan membayar tagihan, diserahkan kepada PT Mitra Farmasi; (6) surat kuasa PT Mitra Farmasi kepada konsultan pajaknya, diserahkan kepada konsultan tersebut; (7) tanda terima setoran uang Rp20.000.000 dari kantor cabang kepada kantor pusat PT Mitra Farmasi; (8) perjanjian distribusi dengan prinsipal Jerman yang ditandatangani di Frankfurt 22 September 2026, rangkap PT Mitra Farmasi, yang digunakan di Indonesia sebagai dasar pencatatan pembukuan pada 9 Oktober 2026. Bea meterai yang terutang oleh PT Mitra Farmasi sendiri sebagai pihak yang terutang untuk Oktober 2026 adalah ...",
      kataKualifikasi: ["sendiri sebagai pihak yang terutang"],
      opsi: { A: "Rp70.000", B: "Rp80.000", C: "Rp90.000", D: "Rp100.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PT Mitra Farmasi terutang atas tiga kuitansi pemasok di atas Rp5.000.000 yang diterimanya, 2 rangkap perjanjian yang diterimanya, bilyet giro yang diterbitkannya, surat pernyataan yang diterimanya, dan perjanjian distribusi Jerman yang digunakannya di Indonesia sebagai penerima manfaat: 8 dokumen × Rp10.000.",
        jejakHitung: [
          ["(1) Kuitansi pemasok Rp5,25 juta, Rp18,5 juta, Rp91 juta", "3 dokumen"],
          ["(2) Kuitansi buatan PT Mitra Farmasi", "terutang oleh apotek → 0"],
          ["(3) Rangkap perjanjian milik PT Mitra Farmasi", "2 dokumen"],
          ["(4) Bilyet giro (penerbit)", "1 dokumen"],
          ["(5) Surat pernyataan yang diterima", "1 dokumen"],
          ["(6) Surat kuasa yang diserahkan ke konsultan", "terutang oleh konsultan → 0"],
          ["(7) Tanda terima intern", "bukan objek (Pasal 7 huruf f)"],
          ["(8) Perjanjian Jerman, digunakan 9 Oktober", "1 dokumen"],
          ["Total 8 × Rp10.000", "Rp80.000"]
        ],
        mengapaSalah: {
          A: "Menganggap bilyet giro terutang oleh pemasok penerima; surat berharga terutang oleh pihak yang menerbitkannya (Pasal 9 ayat (3))",
          C: "Menghitung kuitansi tepat Rp5.000.000 sebagai objek; syaratnya nilai lebih dari Rp5.000.000",
          D: "Membebankan keempat rangkap perjanjian kepada PT Mitra Farmasi; tiap pihak terutang atas rangkap yang diterimanya (Pasal 9 ayat (2))"
        },
        jebakan: "Kuitansi buatan PT Mitra Farmasi dan surat kuasa yang diserahkannya terutang oleh penerima masing-masing, tetapi bilyet giro tetap terutang oleh penerbitnya; peredaran bruto tidak relevan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2), Pasal 7 huruf f, dan Pasal 8 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-071",
      sejak: "9.5.0"
    },
    {
      id: "A5-165",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Sendang Agro Makmur mengubah anggaran dasarnya dengan akta notaris pada Maret 2020; minuta akta saat itu dibubuhi meterai tempel Rp6.000 menurut UU 13/1985. Pada 3 November 2026 direksi meminta notaris menerbitkan dua kutipan akta tersebut untuk dokumen tender, dan notaris menandatangani kedua kutipan itu pada 4 November 2026. Pernyataan yang paling tepat mengenai bea meterai atas kedua kutipan akta tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kedua kutipan tidak terutang bea meterai, karena bea meterai dikenakan satu kali untuk setiap dokumen dan minuta akta yang menjadi dasarnya sudah dibubuhi meterai pada tahun 2020.", B: "Setiap kutipan terutang bea meterai sebesar tarif minuta akta, sehingga masing-masing cukup dilunasi dengan meterai tempel Rp6.000 yang sama dengan meterai pada minuta tahun 2020.", C: "Setiap kutipan terutang Rp10.000 ditambah sanksi 100%, karena kutipan mengikuti saat terutang minuta akta tahun 2020 sehingga harus dilunasi melalui pemeteraian kemudian.", D: "Setiap kutipan merupakan dokumen tersendiri yang terutang Rp10.000 pada saat ditandatangani notaris, yaitu 4 November 2026, sehingga seluruhnya Rp20.000 tanpa sanksi bila dilunasi saat itu." },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "Akta notaris beserta grosse, salinan, dan kutipannya adalah objek bea meterai (Pasal 3 ayat (2) huruf b) yang terutang pada saat dibubuhi tanda tangan (Pasal 8 ayat (1) huruf a angka 2). Kedua kutipan ditandatangani notaris pada 4 November 2026, sehingga masing-masing terutang Rp10.000 menurut tarif UU 10/2020 (Pasal 5), seluruhnya Rp20.000.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 3 ayat (2) huruf b menyebut kutipan akta notaris sebagai objek; Pasal 4 berarti satu kali untuk setiap dokumen, dan tiap kutipan adalah dokumen tersendiri",
          B: "Saat terutang kutipan adalah 4 November 2026 sehingga berlaku tarif Rp10.000; meterai tempel lama hanya dapat dipakai sampai satu tahun setelah UU 10/2020 berlaku (Pasal 28 huruf b)",
          C: "Kutipan terutang pada saat kutipan itu sendiri ditandatangani, bukan pada saat minuta ditandatangani; bila dilunasi saat itu tidak ada sanksi"
        },
        jebakan: "Tahun minuta dan meterai lamanya tidak menentukan apa pun; yang menentukan adalah tanggal kutipan ditandatangani notaris dan jumlah kutipannya."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf b dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 dan Pasal 28 huruf b UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-072",
      sejak: "9.5.0"
    },
    {
      id: "A5-166",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-14",
      stem: "Data untuk soal vignette V-A5-14: PT Presisi Mekatama, produsen komponen otomotif, menggugat CV Baja Tekno Utama atas mesin bubut CNC yang diserahkan dalam keadaan cacat. Pada sidang pembuktian di pengadilan negeri tanggal 25 November 2026, PT Presisi Mekatama akan mengajukan alat bukti: (1) rangkap surat perjanjian pengadaan mesin miliknya yang ditandatangani 20 Januari 2025 dan sejak awal dibubuhi meterai tempel sah; (2) rangkap adendum jadwal pengiriman miliknya yang ditandatangani 8 April 2025 tanpa meterai; (3) tiga kuitansi yang dibuat CV Baja Tekno Utama dan diterima PT Presisi Mekatama pada 2025, yaitu Rp320.000.000 (tanpa meterai), Rp146.000.000 (dibubuhi meterai elektronik sah), dan Rp5.000.000 untuk biaya instalasi (tanpa meterai); (4) empat cetakan percakapan aplikasi pesan; (5) surat pernyataan CV Baja Tekno Utama yang mengakui cacat mesin, diserahkan kepada PT Presisi Mekatama pada 12 Mei 2025 tanpa meterai. Tidak ada kesepakatan tentang pembebanan bea meterai, dan seluruh dokumen belum daluwarsa. Jumlah yang harus dilunasi PT Presisi Mekatama melalui pemeteraian kemudian sebelum alat bukti diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp70.000", B: "Rp110.000", C: "Rp120.000", D: "Rp130.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen objek yang tidak dilunasi pada saat terutang dimeteraikan kemudian sebesar bea meterai ditambah sanksi 100%; dokumen yang semula bukan objek dan baru terutang karena diajukan sebagai alat bukti cukup dilunasi bea meterainya; dokumen yang sudah lunas tidak dimeteraikan lagi.",
        jejakHitung: [
          ["(1) Perjanjian bermeterai tempel sah", "Rp0"],
          ["(2) Adendum tanpa meterai (terutang sejak 8 April 2025)", "Rp10.000 + Rp10.000 = Rp20.000"],
          ["(3) Kuitansi Rp320.000.000 tanpa meterai", "Rp10.000 + Rp10.000 = Rp20.000"],
          ["(3) Kuitansi Rp146.000.000 bermeterai elektronik sah", "Rp0"],
          ["(3) Kuitansi Rp5.000.000 (tidak lebih dari Rp5.000.000, semula bukan objek)", "Rp10.000 tanpa sanksi"],
          ["(4) Empat cetakan percakapan", "4 × Rp10.000 = Rp40.000"],
          ["(5) Surat pernyataan tanpa meterai", "Rp10.000 + Rp10.000 = Rp20.000"],
          ["Total (bea meterai Rp80.000 + sanksi Rp30.000)", "Rp110.000"]
        ],
        mengapaSalah: {
          A: "Mengabaikan empat cetakan percakapan; dokumen yang digunakan sebagai alat bukti di pengadilan adalah objek (Pasal 3 ayat (1) huruf b), masing-masing Rp10.000",
          C: "Mengenakan sanksi 100% pada kuitansi Rp5.000.000; kuitansi itu tidak lebih dari Rp5.000.000 sehingga semula bukan objek dan cukup Rp10.000",
          D: "Memeteraikan ulang perjanjian dan kuitansi Rp146.000.000 yang sudah lunas; dokumen yang sudah dibayar bea meterainya tidak wajib dimeteraikan kemudian"
        },
        jebakan: "Kuitansi tepat Rp5.000.000 tidak terutang saat diserahkan karena syaratnya lebih dari Rp5.000.000; ia baru terutang ketika diajukan sebagai alat bukti, tanpa sanksi."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b, Pasal 3 ayat (2) huruf g, dan Pasal 4 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 49 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-073",
      sejak: "9.5.0"
    },
    {
      id: "A5-167",
      topik: "A5.2",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 1,
      kasusId: "V-A5-14",
      stem: "Lanjutan V-A5-14: Kuitansi biaya instalasi Rp5.000.000 dibuat CV Baja Tekno Utama dan diserahkan kepada PT Presisi Mekatama pada 17 Juni 2025 tanpa meterai. PT Presisi Mekatama mengajukan kuitansi itu sebagai alat bukti pada sidang 25 November 2026 dalam gugatannya terhadap CV Baja Tekno Utama. Saat terutang dan pihak yang terutang bea meterai atas kuitansi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Saat diajukan ke pengadilan (25 November 2026); terutang oleh PT Presisi Mekatama sebagai pihak yang mengajukan", B: "Saat kuitansi diserahkan (17 Juni 2025); terutang oleh PT Presisi Mekatama sebagai pihak yang menerima kuitansi", C: "Saat diajukan ke pengadilan (25 November 2026); terutang oleh CV Baja Tekno Utama sebagai pembuat kuitansi", D: "Saat putusan berkekuatan hukum tetap; terutang oleh pihak yang dikalahkan dalam perkara tersebut" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Kuitansi Rp5.000.000 tidak lebih dari Rp5.000.000, sehingga saat diserahkan bukan objek Pasal 3 ayat (2) huruf g. Ia menjadi objek karena digunakan sebagai alat bukti (Pasal 3 ayat (1) huruf b), terutang saat diajukan ke pengadilan (Pasal 8 ayat (1) huruf d), oleh pihak yang mengajukan (Pasal 9 ayat (4)).",
        jejakHitung: [],
        mengapaSalah: {
          B: "Saat terutang pada penyerahan hanya berlaku untuk dokumen yang menyatakan jumlah uang lebih dari Rp5.000.000; kuitansi tepat Rp5.000.000 belum terutang saat diserahkan",
          C: "Pasal 9 ayat (4): dokumen alat bukti terutang oleh pihak yang mengajukan, bukan pembuatnya",
          D: "Bea meterai bukan biaya perkara yang dibebankan kepada pihak yang kalah; saat terutangnya ditentukan Pasal 8 ayat (1) huruf d"
        },
        jebakan: "Batas lebih dari Rp5.000.000 membuat kuitansi ini bukan objek ketika diserahkan; pembuat kuitansi juga tidak relevan, yang menentukan adalah siapa yang mengajukannya ke pengadilan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf b dan Pasal 8 ayat (1) huruf d UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 9 ayat (4) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-074",
      sejak: "9.5.0"
    },
    {
      id: "A5-168",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-14",
      kutipan: "Pasal 21 ayat (1) huruf a UU 10/2020: Pejabat yang berwenang dalam menjalankan tugas atau jabatannya, dilarang menerima, mempertimbangkan, atau menyimpan Dokumen sebagaimana dimaksud dalam Pasal 3 yang Bea Meterainya tidak atau kurang dibayar. Penjelasan Pasal 21 ayat (1): Pejabat yang berwenang dalam ketentuan ini antara lain hakim, panitera, jurusita, notaris, Pejabat Pembuat Akta Tanah, pegawai aparatur sipil negara, anggota Tentara Nasional Indonesia/Kepolisian Negara Republik Indonesia, dan pejabat negara. Pasal 1 angka 6: Pemeteraian Kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan oleh Menteri.",
      stem: "Lanjutan V-A5-14: Kuasa hukum PT Presisi Mekatama menghitung kekurangan Rp110.000 untuk delapan dokumen alat bukti, terdiri atas bea meterai Rp80.000 dan sanksi administratif Rp30.000 atas tiga dokumen yang tidak dilunasi pada saat terutang. Ia mengusulkan agar pada pagi hari sidang 25 November 2026 ditempelkan langsung dua meterai tempel pada setiap dokumen yang terkena sanksi dan satu meterai tempel pada dokumen lainnya, lalu dokumen diajukan tanpa pengesahan pejabat mana pun. Berdasarkan kutipan tersebut, langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Menjalankan usulan itu, karena meterai tempel dapat melunasi bea meterai sekaligus sanksinya dan pemeteraian yang dilakukan sebelum sidang dimulai tidak memerlukan pengesahan pejabat", B: "Mengajukan dokumen terlebih dahulu pada sidang 25 November 2026 dan melunasi Rp110.000 setelah putusan, karena larangan Pasal 21 hanya berlaku bagi notaris dan PPAT", C: "Sebelum sidang melunasi Rp80.000 dengan meterai tempel dan Rp30.000 sanksi dengan SSP (kode billing), lalu meminta pengesahan pemeteraian kemudian dari Pejabat DJP", D: "Sebelum sidang melunasi Rp80.000 dengan meterai tempel dan Rp30.000 sanksi dengan SSP (kode billing), lalu meminta majelis hakim mengesahkannya pada saat dokumen diajukan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pemeteraian kemudian dituntaskan sebelum alat bukti diajukan: bea meterai dibayar dengan meterai, sanksi administratif dibayar dengan SSP (Pasal 50 PMK 78/2024), lalu pembayaran disahkan pejabat yang ditetapkan Menteri. Pejabat DJP mengesahkan pembayaran dengan meterai tempel, meterai elektronik, dan/atau SSP setelah memastikan sanksinya dibayar (Pasal 51 ayat (4) dan (5)). Tanpa itu, hakim dan panitera dilarang menerima atau mempertimbangkan dokumen tersebut (Pasal 21 UU 10/2020).",
        jejakHitung: [
          ["Bea meterai 8 dokumen × Rp10.000 (meterai tempel)", "Rp80.000"],
          ["Sanksi 100% atas 3 dokumen yang lewat saat terutang (SSP)", "Rp30.000"],
          ["Jumlah dilunasi", "Rp110.000"],
          ["Pengesah", "Pejabat DJP (Pasal 51 ayat (4) PMK 78/2024)"]
        ],
        mengapaSalah: {
          A: "Sanksi administratif dibayar dengan SSP, bukan dengan meterai tempel (Pasal 50 ayat (2) PMK 78/2024), dan pemeteraian kemudian menurut Pasal 1 angka 6 selalu memerlukan pengesahan pejabat yang ditetapkan Menteri",
          B: "Penjelasan Pasal 21 ayat (1) menyebut hakim, panitera, dan jurusita sebagai pejabat yang berwenang; dokumen harus lunas sebelum diterima atau dipertimbangkan",
          D: "Pengesahan dilakukan Pejabat Pos atau Pejabat DJP (Pasal 51 ayat (1) PMK 78/2024); hakim adalah pejabat yang dilarang menerima dokumen yang belum lunas, bukan pengesah"
        },
        jebakan: "Menempel meterai saja belum menuntaskan pemeteraian kemudian: pokok dibayar dengan meterai, sanksi dengan SSP, lalu disahkan pejabat yang ditetapkan Menteri."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 6, Pasal 17, Pasal 18, dan Pasal 21 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 50 dan Pasal 51 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-075",
      sejak: "9.5.0"
    },
    {
      id: "A5-169",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Arunika Energi Hijau menyusun pedoman internal pemeteraian. Sebagai contoh, perusahaan menandatangani kontrak rekayasa, pengadaan, dan konstruksi senilai Rp12.600.000.000 setebal 140 halaman dalam satu dokumen asli, yang ditandatangani empat orang (dua direktur dari setiap pihak), diparaf di setiap halaman, dan dibubuhi satu meterai elektronik sah pada saat ditandatangani. Tiga tahun kemudian kontrak itu akan diajukan sebagai alat bukti di pengadilan negeri. Kalimat pedoman yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Bea meterai dikenakan satu kali untuk setiap dokumen dengan tarif tetap Rp10.000 tanpa memperhatikan nilai, jumlah halaman, dan jumlah penanda tangan, tetapi kontrak yang telah lunas wajib dimeteraikan kemudian lagi ketika diajukan sebagai alat bukti.", B: "Bea meterai dikenakan satu kali untuk setiap penanda tangan dengan tarif tetap Rp10.000, sehingga kontrak dengan empat penanda tangan terutang Rp40.000 dan tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti.", C: "Bea meterai dikenakan satu kali untuk setiap dokumen dengan tarif tetap Rp10.000 tanpa memperhatikan nilai, jumlah halaman, dan jumlah penanda tangan, sehingga kontrak yang telah lunas tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti.", D: "Bea meterai Rp10.000 dikenakan atas kontrak hanya bila nilainya lebih dari Rp5.000.000, sehingga kontrak senilai Rp12.600.000.000 terutang satu kali dan tidak perlu dimeteraikan lagi ketika diajukan sebagai alat bukti." },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 4 menetapkan bea meterai dikenakan satu kali untuk setiap dokumen dan Pasal 5 menetapkan tarif tetap Rp10.000. Penjelasan Pasal 3 ayat (1) huruf b: dokumen objek yang telah dibayar bea meterainya tidak wajib lagi dimeteraikan kemudian saat digunakan sebagai alat bukti di pengadilan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Penjelasan Pasal 3 ayat (1) huruf b: dokumen yang sudah lunas tidak wajib lagi dimeteraikan kemudian saat dijadikan alat bukti",
          B: "Satuan pengenaan adalah dokumen (Pasal 4), bukan penanda tangan; empat tanda tangan dan paraf tidak menambah bea meterai",
          D: "Batas lebih dari Rp5.000.000 hanya untuk dokumen yang menyatakan jumlah uang (Pasal 3 ayat (2) huruf g); surat perjanjian terutang berapa pun nilainya"
        },
        jebakan: "Nilai miliaran, 140 halaman, empat penanda tangan, paraf di setiap halaman, dan pengajuan ke pengadilan adalah pengalih; satu dokumen yang sudah lunas cukup satu kali Rp10.000."
      },
      dasarHukum: [{ pasal: "Pasal 4 dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b UU 10/2020 beserta Penjelasannya", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-076",
      sejak: "9.5.0"
    },
    {
      id: "A5-170",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Langkah Wisata Bahari, biro perjalanan wisata, belum ditetapkan sebagai pemungut bea meterai. Dalam syarat pemesanan, perusahaan menyatakan menanggung bea meterai atas kuitansi elektronik pelanggan. Pada Oktober 2026 perusahaan menerbitkan dan mengirimkan 742 kuitansi elektronik pembayaran paket wisata: 512 kuitansi masing-masing Rp7.800.000 dan 230 kuitansi masing-masing Rp5.000.000. Pada bulan yang sama perusahaan juga membuat 38 tanda terima pembayaran gaji elektronik yang ditandatangani pemandu wisata berstatus pegawai, masing-masing Rp6.200.000. Meterai elektronik dibeli melalui distributor resmi seharga Rp10.000 per meterai ditambah biaya layanan pembubuhan Rp2.000 per dokumen. Jumlah bea meterai yang harus dilunasi untuk Oktober 2026, tidak termasuk biaya layanan, adalah ...",
      kataKualifikasi: ["tidak termasuk"],
      opsi: { A: "Rp7.420.000", B: "Rp5.500.000", C: "Rp6.144.000", D: "Rp5.120.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Hanya kuitansi yang menyatakan penerimaan uang lebih dari Rp5.000.000 yang terutang (Pasal 3 ayat (2) huruf g), masing-masing Rp10.000 (Pasal 5). Tanda terima gaji dikecualikan (Pasal 7 huruf c). Kesepakatan bahwa perusahaan menanggung bea meterai sah menurut Pasal 9 ayat (6), dan biaya layanan distributor bukan bagian dari bea meterai.",
        jejakHitung: [
          ["Kuitansi Rp7.800.000 (> Rp5.000.000)", "512 dokumen"],
          ["Kuitansi tepat Rp5.000.000", "tidak terutang"],
          ["Tanda terima gaji pegawai Rp6.200.000", "bukan objek (Pasal 7 huruf c)"],
          ["Bea meterai 512 × Rp10.000", "Rp5.120.000"],
          ["Biaya layanan 512 × Rp2.000 (bukan bea meterai)", "Rp1.024.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung 230 kuitansi tepat Rp5.000.000: (512 + 230) × Rp10.000; syaratnya lebih dari Rp5.000.000",
          B: "Ikut menghitung 38 tanda terima gaji: (512 + 38) × Rp10.000; tanda terima pembayaran gaji tidak dikenai bea meterai",
          C: "Memasukkan biaya layanan: 512 × Rp12.000; biaya layanan Rp2.000 bukan bea meterai"
        },
        jebakan: "Nilai di atas Rp5.000.000 pada tanda terima gaji tidak membuatnya terutang, karena Pasal 7 huruf c mengecualikannya; tanpa penetapan sebagai pemungut, setiap kuitansi dilunasi dengan meterai."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 5, Pasal 7 huruf c, dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PP 86/2021 (meterai elektronik)", berlakuSejak: "2021-08-19" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-077",
      sejak: "9.5.0"
    },
    {
      id: "A5-171",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) huruf e UU 10/2020: Bea Meterai terutang pada saat Dokumen digunakan di Indonesia, untuk Dokumen sebagaimana dimaksud dalam Pasal 3 ayat (2) yang dibuat di luar negeri. Penjelasan Pasal 3 ayat (2) huruf g: Jumlah uang ataupun nilai nominal ini juga dimaksudkan jumlah uang ataupun nilai nominal yang dinyatakan dalam mata uang asing. Untuk menentukan nilai rupiahnya, jumlah uang atau nilai nominal tersebut dikalikan dengan nilai tukar yang ditetapkan oleh Menteri yang berlaku pada saat Dokumen itu dibuat sehingga dapat diketahui apakah Dokumen tersebut dikenai atau tidak dikenai Bea Meterai.",
      stem: "PT Kirana Rasa Nusantara menerima dua dokumen dari mitranya di Jepang yang dibuat dan ditandatangani di Tokyo pada 14 Oktober 2026: (1) perjanjian lisensi resep berbentuk PDF dengan tanda tangan elektronik; (2) tanda terima uang muka royalti sebesar JPY45.000 berbentuk kertas. Nilai tukar yang ditetapkan Menteri Keuangan dan berlaku pada 14 Oktober 2026 adalah Rp106,40 per JPY1. Kedua dokumen akan digunakan PT Kirana Rasa Nusantara di Indonesia pada 19 November 2026 untuk pencatatan lisensi, dan perusahaan itu adalah pihak yang menerima manfaat. Berdasarkan kutipan tersebut, cara pelunasan yang tepat agar tidak timbul sanksi adalah ...",
      kataKualifikasi: ["agar tidak timbul sanksi"],
      opsi: { A: "Melunasi Rp10.000 atas perjanjian lisensi dengan meterai elektronik paling lambat 19 November 2026; tanda terima tidak terutang karena nilai rupiahnya tidak lebih dari Rp5.000.000", B: "Melunasi Rp10.000 atas setiap dokumen paling lambat 19 November 2026: perjanjian lisensi dengan meterai elektronik dan tanda terima dengan meterai tempel", C: "Melunasi Rp20.000 atas perjanjian lisensi karena tidak bermeterai saat ditandatangani di Tokyo; tanda terima tidak terutang karena nilainya tidak lebih dari Rp5.000.000", D: "Tidak perlu melunasi bea meterai atas kedua dokumen, karena keduanya dibuat dan ditandatangani di luar wilayah Indonesia oleh pihak luar negeri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen Pasal 3 ayat (2) yang dibuat di luar negeri terutang saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e) oleh penerima manfaat (Pasal 9 ayat (5)); bila dilunasi paling lambat saat itu, cukup Rp10.000 tanpa sanksi, dan dokumen elektronik dilunasi dengan meterai elektronik. Tanda terima JPY45.000 × Rp106,40 = Rp4.788.000, tidak lebih dari Rp5.000.000, sehingga bukan objek Pasal 3 ayat (2) huruf g.",
        jejakHitung: [
          ["Tanda terima JPY45.000 × Rp106,40", "Rp4.788.000 (tidak lebih dari Rp5.000.000, bukan objek)"],
          ["Perjanjian lisensi PDF (Pasal 3 ayat (2) huruf a)", "Rp10.000, meterai elektronik, paling lambat 19 November 2026"]
        ],
        mengapaSalah: {
          B: "Tanda terima bernilai Rp4.788.000 menurut kurs Menteri saat dibuat, tidak lebih dari Rp5.000.000, sehingga tidak terutang",
          C: "Dokumen luar negeri baru terutang saat digunakan di Indonesia; pelunasan paling lambat saat itu tidak dikenai sanksi",
          D: "Pasal 8 ayat (1) huruf e menjadikan dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia"
        },
        jebakan: "Nilai dalam mata uang asing dirupiahkan dengan kurs Menteri pada saat dokumen dibuat; tanggal tanda tangan di Tokyo bukan saat terutang perjanjian lisensi."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020 beserta Penjelasannya", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 12 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-078",
      sejak: "9.5.0"
    },
    {
      id: "A5-172",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Pada 16 Oktober 2026 PT Pembiayaan Arta Mandiri dan CV Tirta Usaha menandatangani akta pengakuan utang di hadapan notaris. Notaris menyimpan minuta akta dan pada hari yang sama menandatangani serta menerbitkan satu grosse akta untuk kreditur, dua salinan akta untuk kreditur dan debitur, dan dua kutipan akta untuk dua penjamin. Pada 2 November 2026 notaris menandatangani satu salinan akta lagi atas permintaan debitur. Staf debitur kemudian membuat 4 fotokopi tanpa tanda tangan untuk arsip. Total bea meterai atas akta tersebut beserta turunannya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp60.000", B: "Rp70.000", C: "Rp110.000", D: "Rp10.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Akta notaris beserta grosse, salinan, dan kutipannya masing-masing terutang Rp10.000 pada saat dibubuhi tanda tangan, termasuk salinan yang ditandatangani belakangan; fotokopi tanpa tanda tangan tidak terutang.",
        jejakHitung: [
          ["Minuta akta", "Rp10.000"],
          ["Grosse akta", "Rp10.000"],
          ["Tiga salinan (dua pada 16 Oktober, satu pada 2 November 2026)", "Rp30.000"],
          ["Dua kutipan", "Rp20.000"],
          ["Empat fotokopi tanpa tanda tangan", "tidak terutang"],
          ["Total", "Rp70.000"]
        ],
        mengapaSalah: {
          A: "Tidak menghitung salah satu dokumen yang ditandatangani, misalnya minuta akta atau grosse akta; Pasal 3 ayat (2) huruf b menjadikan akta notaris itu sendiri (minuta) beserta grosse, salinan, dan kutipannya objek, sehingga dokumennya 7, bukan 6",
          C: "Ikut menghitung 4 fotokopi tanpa tanda tangan: 7 + 4 = 11 dokumen × Rp10.000",
          D: "Menganggap akta beserta seluruh turunannya satu dokumen; setiap grosse, salinan, dan kutipan terutang sendiri"
        },
        jebakan: "Minuta akta yang disimpan notaris tetap objek sebagai akta notaris aslinya; salinan yang ditandatangani pada tanggal lain terutang pada saat ditandatangani; grosse dan kutipan sering terlupa."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf b dan Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-080",
      sejak: "9.5.0"
    },
    {
      id: "A5-173",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Nyonya Laras menyewa sebuah ruko dari Tuan Bima untuk usaha katering. Pada 11 November 2026 keduanya menandatangani perjanjian sewa senilai Rp96.000.000 setebal 12 halaman dalam 3 rangkap asli, masing-masing untuk Nyonya Laras, Tuan Bima, dan pengelola kawasan. Pada hari yang sama Nyonya Laras menerima dari Tuan Bima kuitansi pembayaran sewa tahap pertama Rp48.000.000 dan kuitansi uang jaminan kebersihan Rp4.500.000. Total bea meterai atas dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000", B: "Rp24.000", C: "Rp50.000", D: "Rp40.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "angka-usang", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setiap rangkap surat perjanjian adalah dokumen yang terutang Rp10.000; kuitansi terutang hanya bila menyatakan penerimaan uang lebih dari Rp5.000.000.",
        jejakHitung: [
          ["Perjanjian sewa 3 rangkap", "3 × Rp10.000 = Rp30.000"],
          ["Kuitansi sewa Rp48.000.000", "Rp10.000"],
          ["Kuitansi uang jaminan Rp4.500.000", "tidak terutang"],
          ["Total", "Rp40.000"]
        ],
        mengapaSalah: {
          A: "Menghitung perjanjian 3 rangkap sebagai satu dokumen: Rp10.000 + Rp10.000",
          B: "Memakai tarif lama Rp6.000 untuk 4 dokumen terutang",
          C: "Ikut menghitung kuitansi Rp4.500.000; kuitansi terutang hanya bila lebih dari Rp5.000.000"
        },
        jebakan: "Jumlah halaman dan nilai sewa tidak memengaruhi tarif; yang dihitung adalah jumlah rangkap dan kuitansi di atas Rp5.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "A5-081",
      sejak: "9.5.0"
    },
    {
      id: "A5-174",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A5-15",
      stem: "Data untuk soal vignette V-A5-15: PT Gerbang Bayar Nusantara, penyelenggara layanan payment gateway, ditetapkan sebagai pemungut bea meterai dengan surat penetapan Kepala KPP dan berkedudukan sebagai pemungut sejak Februari 2026. Rekap tanda terima pembayaran digital yang difasilitasinya untuk Masa Juli 2026: 18.920 tanda terima bernilai lebih dari Rp5.000.000 dibuat dan diserahkan kepada pengguna selama Juli 2026; 1.260 tanda terima lain bernilai lebih dari Rp5.000.000 dibuat pada 31 Juli 2026 tetapi karena antrean sistem baru diserahkan kepada pengguna pada 1 Agustus 2026; 7.940 tanda terima bernilai tepat Rp5.000.000; dan 88.300 tanda terima bernilai di bawah Rp5.000.000. Pengguna adalah pihak yang terutang. Total nilai transaksi Juli 2026 Rp407 miliar dan pendapatan jasa platform Rp2,3 miliar. Bea meterai yang wajib dipungut dan disetor untuk Masa Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp201.800.000", B: "Rp189.200.000", C: "Rp268.600.000", D: "Rp1.164.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Tanda terima yang menyebutkan penerimaan uang menjadi objek bila nilainya lebih dari Rp5.000.000 (Pasal 3 ayat (2) huruf g UU 10/2020), terutang dan dipungut pada saat diserahkan kepada pihak yang terutang (Pasal 8 ayat (1) huruf c UU 10/2020; Pasal 61 huruf c PMK 78/2024). Untuk Masa Juli 2026 hanya 18.920 tanda terima yang diserahkan pada Juli: 18.920 × Rp10.000 = Rp189.200.000. Tanda terima yang diserahkan 1 Agustus 2026 masuk Masa Agustus 2026.",
        jejakHitung: [
          ["Tanda terima > Rp5 juta yang diserahkan pada Juli 2026", "18.920"],
          ["Dibuat 31 Juli, diserahkan 1 Agustus 2026", "Masa Agustus 2026 (bukan Juli)"],
          ["Tanda terima tepat Rp5 juta dan di bawahnya", "bukan objek"],
          ["Bea meterai 18.920 × Rp10.000", "Rp189.200.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung 1.260 tanda terima yang baru diserahkan 1 Agustus 2026 (20.180 × Rp10.000); saat terutang dan saat pemungutan tanda terima adalah saat diserahkan, bukan saat dibuat",
          C: "Ikut menghitung 7.940 tanda terima bernilai tepat Rp5.000.000 (26.860 × Rp10.000); syaratnya lebih dari Rp5.000.000",
          D: "Mengabaikan ambang nilai Pasal 3 ayat (2) huruf g dan saat terutang sehingga seluruh 116.420 tanda terima dianggap objek"
        },
        jebakan: "Tanggal pembuatan tanda terima tidak menentukan masa pemungutan; yang menentukan tanggal penyerahan. Nilai transaksi dan pendapatan platform tidak dipakai karena bea meterai bertarif tetap per dokumen."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 5, dan Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 10–11 UU 10/2020; Pasal 55 ayat (2) huruf d dan Pasal 61 huruf c PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-082",
      sejak: "9.5.0"
    },
    {
      id: "A5-175",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      kasusId: "V-A5-15",
      stem: "Lanjutan V-A5-15: PT Gerbang Bayar Nusantara (pemungut bea meterai) memungut bea meterai Masa Juli 2026 atas 18.920 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 yang menyebutkan penerimaan uang. Sebanyak 18.350 tanda terima dibubuhi Meterai Elektronik (Formulir L2), sedangkan 570 tanda terima dibubuhi tanda pemungutan karena sistem Meterai Elektronik tidak dapat diakses pada 21 Juli 2026 (Formulir L3). Pemungut telah menyetor Rp189.200.000 dengan kode billing pada 12 Agustus 2026, sebelum menyampaikan SPT. Menurut petunjuk pengisian induk SPT Masa Bea Meterai dalam Lampiran huruf F PER-11/PJ/2025, isian Bagian B angka 4a kolom b dan c serta Bagian D angka 1 (Bea Meterai kurang atau (lebih) disetor) yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bagian B angka 4a: 18.350 dokumen, Rp183.500.000; Bagian D angka 1: Rp183.500.000", B: "Bagian B angka 4a: 18.920 dokumen, Rp189.200.000; Bagian D angka 1: nihil, karena sudah disetor", C: "Bagian B angka 4a: 20.180 dokumen, Rp201.800.000; Bagian D angka 1: Rp201.800.000", D: "Bagian B angka 4a: 18.920 dokumen, Rp189.200.000; Bagian D angka 1: Rp189.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Menurut petunjuk pengisian induk SPT Masa Bea Meterai, Bagian B angka 4a kolom b dan c diisi sesuai data Formulir L2 DAN Formulir L3, sehingga tanda terima yang dibubuhi Meterai Elektronik dan yang dibubuhi tanda pemungutan dijumlahkan: 18.920 dokumen, Rp189.200.000. Bagian D angka 1 diisi sesuai baris JUMLAH kolom c Bagian C (Cara Pemungutan), yaitu Rp189.200.000 (L2 Rp183.500.000 + L3 Rp5.700.000); induk tidak memuat baris pengurang untuk setoran yang sudah dilakukan.",
        jejakHitung: [
          ["Formulir L2 (Meterai Elektronik) 18.350 × Rp10.000", "Rp183.500.000"],
          ["Formulir L3 (tanda pemungutan) 570 × Rp10.000", "Rp5.700.000"],
          ["Bagian B angka 4a kolom b dan c (L2 + L3)", "18.920 dokumen; Rp189.200.000"],
          ["Bagian C baris JUMLAH kolom c", "Rp189.200.000"],
          ["Bagian D angka 1 (sesuai JUMLAH kolom c Bagian C)", "Rp189.200.000"]
        ],
        mengapaSalah: {
          A: "Hanya memasukkan data Formulir L2; petunjuk Bagian B angka 4a menyebut data Formulir L2 dan Formulir L3, dan Bagian C juga menjumlahkan cara pemungutan L2 dan L3",
          B: "Bagian D angka 1 diisi sesuai baris JUMLAH kolom c Bagian C, bukan sisa setelah dikurangi setoran; induk SPT tidak memuat baris bea meterai yang telah disetor",
          C: "Memasukkan 1.260 tanda terima yang baru diserahkan 1 Agustus 2026; pemungutannya masuk Masa Agustus 2026"
        },
        jebakan: "Tanda pemungutan karena kegagalan sistem tetap merupakan pemungutan dan tetap masuk Bagian B. Label \"kurang atau (lebih) disetor\" memancing pengurangan setoran, padahal petunjuk mengaitkan D.1 dengan JUMLAH kolom c Bagian C."
      },
      dasarHukum: [{ pasal: "Pasal 78 ayat (2) dan Lampiran huruf F PER-11/PJ/2025 (induk SPT Masa Bea Meterai Bagian B, C, dan D)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 60, Pasal 61 huruf c, dan Pasal 62 ayat (2) PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 3 ayat (2) huruf g, Pasal 8 ayat (1) huruf c, Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      formulirRef: "BM.induk.2",
      kembaranDari: "A5-083",
      sejak: "9.5.0"
    },
    {
      id: "A5-176",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A5-15",
      kutipan: "PMK 78/2024 Pasal 63 ayat (1): \"Penyetoran Bea Meterai ... atas Bea Meterai yang dipungut untuk setiap Masa Pajak wajib dilakukan paling lambat tanggal 15 (lima belas) bulan berikutnya setelah Masa Pajak berakhir.\" Pasal 64 ayat (1): \"Pelaporan ... wajib dilakukan dengan menyampaikan SPT Masa Bea Meterai ke kantor Direktorat Jenderal Pajak paling lambat tanggal 15 (lima belas) bulan berikutnya setelah Masa Pajak berakhir.\" Pasal 65 ayat (1): \"Dalam hal batas akhir penyetoran ... dan pelaporan ... merupakan hari libur, penyetoran dan pelaporan dapat dilakukan paling lama pada hari kerja berikutnya.\" Ayat (2): hari libur adalah hari Sabtu, hari Minggu, hari libur nasional, hari yang diliburkan untuk penyelenggaraan Pemilihan Umum, atau cuti bersama secara nasional.",
      stem: "Lanjutan V-A5-15: Tim pajak PT Gerbang Bayar Nusantara (pemungut bea meterai) menyusun jadwal pelunasan dan pelaporan bea meterai Masa Juli 2026 sebesar Rp189.200.000 melalui Coretax. Tanggal 15 Agustus 2026 jatuh pada hari Sabtu, 16 Agustus 2026 hari Minggu, 17 Agustus 2026 hari libur nasional, dan 18 Agustus 2026 hari kerja. Berdasarkan kutipan tersebut, jadwal yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membayar kode billing Rp189.200.000 hingga memperoleh NTPN dan menyampaikan SPT Masa Bea Meterai hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Selasa, 18 Agustus 2026", B: "Membayar kode billing Rp189.200.000 hingga memperoleh NTPN dan menyampaikan SPT Masa Bea Meterai hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Jumat, 14 Agustus 2026", C: "Membayar kode billing Rp189.200.000 hingga memperoleh NTPN dan menyampaikan SPT Masa Bea Meterai hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Senin, 17 Agustus 2026", D: "Membayar kode billing Rp189.200.000 hingga memperoleh NTPN paling lambat Selasa, 18 Agustus 2026, dan menyampaikan SPT Masa Bea Meterai paling lambat Senin, 31 Agustus 2026" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setor dan lapor bea meterai oleh pemungut sama-sama paling lambat tanggal 15 bulan berikutnya (Pasal 63 ayat (1) dan Pasal 64 ayat (1) PMK 78/2024). Tanggal 15 Agustus 2026 hari Sabtu; menurut Pasal 65, batas itu bergeser ke hari kerja berikutnya. Minggu 16 Agustus dan Senin 17 Agustus (libur nasional) juga hari libur menurut Pasal 65 ayat (2), sehingga hari kerja berikutnya adalah Selasa, 18 Agustus 2026.",
        jejakHitung: [
          ["Batas setor dan lapor Masa Juli 2026", "15 Agustus 2026 (Sabtu)"],
          ["16 Agustus (Minggu) dan 17 Agustus (libur nasional)", "hari libur menurut Pasal 65 ayat (2)"],
          ["Hari kerja berikutnya", "Selasa, 18 Agustus 2026"]
        ],
        mengapaSalah: {
          B: "Batas yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan dimajukan ke hari kerja sebelumnya",
          C: "Hanya melewati Sabtu dan Minggu; 17 Agustus 2026 libur nasional, yang menurut Pasal 65 ayat (2) juga termasuk hari libur",
          D: "Batas akhir bulan berikutnya berlaku untuk SPT Masa PPN; SPT Masa Bea Meterai pemungut juga paling lambat tanggal 15 (bergeser ke 18 Agustus 2026)"
        },
        jebakan: "Hari libur dalam Pasal 65 ayat (2) bukan hanya Sabtu dan Minggu; hari libur nasional dan cuti bersama nasional ikut menggeser batas. Tenggat bea meterai pemungut tidak sama dengan SPT Masa PPN (akhir bulan berikutnya)."
      },
      dasarHukum: [{ pasal: "Pasal 63 ayat (1), Pasal 64 ayat (1), dan Pasal 65 PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 94 ayat (2) huruf k dan Pasal 100 PMK 81/2024 (setor); Pasal 171 ayat (18) dan Pasal 173 PMK 81/2024 (lapor)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Masa Bea Meterai di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-084",
      sejak: "9.5.0"
    },
    {
      id: "A5-177",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-15",
      stem: "Lanjutan V-A5-15: Pemeriksaan pada November 2026 atas Masa Mei 2026 PT Gerbang Bayar Nusantara (pemungut bea meterai tanda terima pembayaran digital) menemukan: (1) bea meterai atas 930 tanda terima bernilai lebih dari Rp5.000.000 telah dipungut dari pengguna tetapi tidak disetor; (2) bea meterai atas 410 tanda terima lain bernilai lebih dari Rp5.000.000 sama sekali tidak dipungut karena kesalahan parameter sistem; (3) bea meterai atas 16.200 tanda terima lainnya telah dipungut dan disetor penuh pada 3 Agustus 2026, padahal jatuh temponya Senin, 15 Juni 2026; (4) SPT Masa Bea Meterai Masa Mei 2026 baru disampaikan pada 3 Agustus 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 0,93% per bulan. Total sanksi administratif, di luar pokok bea meterai, yang dikenakan kepada PT Gerbang Bayar Nusantara adalah ...",
      kataKualifikasi: ["di luar pokok"],
      opsi: { A: "Rp12.413.200", B: "Rp15.006.600", C: "Rp16.513.200", D: "Rp175.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 11 UU 10/2020 membedakan: bea meterai yang tidak dipungut atau tidak disetor ditetapkan dengan SKP sebesar pokok ditambah sanksi 100% (ayat (2) dan (3)); setoran penuh yang terlambat dan SPT yang terlambat disampaikan ditagih dengan STP sesuai UU KUP (ayat (4)), yaitu bunga Pasal 9 ayat (2a) dan denda Pasal 7 ayat (1) Rp100.000 untuk SPT Masa lainnya.",
        jejakHitung: [
          ["Dokumen tidak disetor + tidak dipungut", "930 + 410 = 1.340"],
          ["Sanksi 100% dalam SKP: 1.340 × Rp10.000 × 100%", "Rp13.400.000"],
          ["Setoran terlambat 16.200 × Rp10.000", "Rp162.000.000"],
          ["16 Juni–15 Juli = 1 bulan; 16 Juli–3 Agustus = bagian bulan", "2 bulan"],
          ["Bunga STP = Rp162.000.000 × 0,93% × 2", "Rp3.013.200"],
          ["Denda SPT Masa Bea Meterai terlambat (Pasal 7 ayat (1))", "Rp100.000"],
          ["Total sanksi", "Rp16.513.200"]
        ],
        mengapaSalah: {
          A: "Tidak mengenakan sanksi 100% atas 410 tanda terima yang tidak dipungut (Rp9.300.000 + Rp3.013.200 + Rp100.000); Pasal 11 mencakup bea meterai yang tidak dipungut maupun yang tidak disetor",
          B: "Menghitung bunga hanya 1 bulan (Rp1.506.600); keterlambatan 15 Juni sampai 3 Agustus adalah 1 bulan lebih sehingga bagian bulan dihitung penuh menjadi 2 bulan",
          D: "Mengenakan sanksi 100% juga atas Rp162.000.000 yang disetor penuh tetapi terlambat; keterlambatan setor ditagih STP berupa bunga, bukan SKP 100%"
        },
        jebakan: "Satu pemeriksaan dapat menghasilkan dua produk: SKP (pokok + 100%) untuk yang tidak dipungut atau tidak disetor, dan STP (bunga + denda) untuk yang terlambat disetor dan dilaporkan. Kesalahan sistem tidak mengubah jenis sanksi."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 67 PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan Juni 2026 (tarif pada tanggal dimulainya penghitungan sanksi; 0,93% di soal ini anggapan)", berlakuSejak: "2026-06-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-085",
      sejak: "9.5.0"
    },
    {
      id: "A5-178",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 2,
      stem: "Bank Lembah Hijau, pemungut bea meterai atas cek, bilyet giro, dan tanda terima pembayaran digital, menyusun rincian jumlah dokumen dan bea meterai yang dipungut per objek untuk SPT Masa Bea Meterai Masa September 2026. Data September 2026: bank menerima dari perusahaan percetakan pemegang izin pembuatan Meterai Percetakan 16 buku cek (25 lembar per buku) dan 14 buku bilyet giro (20 lembar per buku) yang telah dibubuhi Meterai Percetakan. Selama September 2026 bank menyerahkan kepada nasabah 22 buku cek, 10 di antaranya diterima dari percetakan pada Agustus 2026, dan 9 buku bilyet giro. Bank juga menyerahkan 3.640 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 dan 5.120 tanda terima bernilai Rp5.000.000 ke bawah. Isian baris cek dan bilyet giro serta baris dokumen yang menyatakan jumlah uang (menyebutkan penerimaan uang) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Cek dan bilyet giro: 680 lembar, Rp6.800.000; dokumen jumlah uang: 3.640 dokumen, Rp36.400.000", B: "Cek dan bilyet giro: 730 lembar, Rp7.300.000; dokumen jumlah uang: 3.640 dokumen, Rp36.400.000", C: "Cek dan bilyet giro: 30 buku, Rp300.000; dokumen jumlah uang: 3.640 dokumen, Rp36.400.000", D: "Cek dan bilyet giro: 680 lembar, Rp6.800.000; dokumen jumlah uang: 8.760 dokumen, Rp87.600.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bea meterai atas cek dan bilyet giro dipungut pada saat bank menerima dokumen itu dari pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a PMK 78/2024) dan dihitung per lembar (Formulir L1 kolom (7)): 16 × 25 + 14 × 20 = 680 lembar × Rp10.000 = Rp6.800.000; penyerahan kepada nasabah tidak menentukan. Tanda terima dipungut saat diserahkan dan hanya yang bernilai lebih dari Rp5.000.000: 3.640 × Rp10.000 = Rp36.400.000. Rincian ini diisi pada Bagian B angka 1 dan angka 4a induk SPT Masa Bea Meterai.",
        jejakHitung: [
          ["Cek diterima dari percetakan 16 × 25", "400 lembar"],
          ["Bilyet giro diterima dari percetakan 14 × 20", "280 lembar"],
          ["Bagian B angka 1: 680 × Rp10.000", "Rp6.800.000"],
          ["Bagian B angka 4a: 3.640 × Rp10.000", "Rp36.400.000"],
          ["Total dipungut", "Rp43.200.000"]
        ],
        mengapaSalah: {
          B: "Menghitung lembar yang diserahkan kepada nasabah (22 × 25 + 9 × 20 = 730); cek dan bilyet giro dipungut saat diterima dari pemegang izin Meterai Percetakan, dan 10 buku cek yang diterima Agustus sudah dipungut pada Masa Agustus",
          C: "Satuan cek dan bilyet giro adalah lembar (Formulir L1 kolom (7) jumlah lembar), bukan buku",
          D: "Tanda terima bernilai Rp5.000.000 ke bawah bukan objek bea meterai (Pasal 3 ayat (2) huruf g UU 10/2020)"
        },
        jebakan: "Saat pemungutan berbeda per jenis dokumen: cek dan bilyet giro saat diterima dari percetakan, tanda terima saat diserahkan kepada pihak yang terutang. Buku yang diterima pada masa sebelumnya tidak dihitung lagi saat diserahkan."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf d dan g, Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2), Pasal 61, dan Pasal 62 ayat (1) huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 78 ayat (2) dan Lampiran huruf F PER-11/PJ/2025 (induk SPT Masa Bea Meterai Bagian B angka 1 dan angka 4a; Formulir L1)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      formulirRef: "BM.l1.1",
      kembaranDari: "A5-087",
      sejak: "9.5.0"
    },
    {
      id: "A5-179",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Pialang Berjangka Samudra, pemungut bea meterai atas dokumen transaksi kontrak berjangka, memungut bea meterai Masa Mei 2026 atas 6.180 konfirmasi transaksi nasabah; nilai transaksi masa itu Rp640 miliar dari 2.900 nasabah aktif. Karena pergantian sistem akuntansi, bea meterai tersebut baru disetor penuh pada 2 September 2026 dan SPT Masa Bea Meterai disampaikan pada 4 September 2026. Jatuh tempo setor dan lapor adalah Senin, 15 Juni 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 0,96% per bulan. Total sanksi administratif yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.286.560", B: "Rp2.279.840", C: "Rp1.879.840", D: "Rp61.800.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setoran penuh yang terlambat dan SPT yang terlambat ditagih dengan STP (Pasal 11 ayat (4) UU 10/2020): bunga Pasal 9 ayat (2a) UU KUP atas Rp61.800.000 selama 3 bulan (bagian bulan dihitung penuh) ditambah denda SPT Masa lainnya Rp100.000 (Pasal 7 ayat (1) UU KUP).",
        jejakHitung: [
          ["Pokok 6.180 × Rp10.000", "Rp61.800.000"],
          ["16 Juni–15 Juli, 16 Juli–15 Agustus, 16 Agustus–2 September 2026", "2 bulan + bagian bulan = 3 bulan"],
          ["Bunga = Rp61.800.000 × 0,96% × 3", "Rp1.779.840"],
          ["Denda SPT Masa terlambat (Pasal 7 ayat (1))", "Rp100.000"],
          ["Total sanksi dalam STP", "Rp1.879.840"]
        ],
        mengapaSalah: {
          A: "Menghitung bunga 2 bulan (Rp1.186.560 + Rp100.000); 15 Juni sampai 2 September adalah 2 bulan lebih sehingga bagian bulan dihitung penuh menjadi 3 bulan",
          B: "Memakai denda SPT Masa PPN Rp500.000; SPT Masa Bea Meterai termasuk SPT Masa lainnya dengan denda Rp100.000",
          D: "Mengenakan sanksi 100% dari pokok; bea meterai disetor penuh sehingga yang ditagih hanya bunga dan denda melalui STP"
        },
        jebakan: "Nilai transaksi Rp640 miliar dan jumlah nasabah tidak dipakai; bea meterai dihitung per konfirmasi transaksi. Hitung bulan bunga dari hari setelah jatuh tempo sampai tanggal setor, bukan dari selisih nomor bulan."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan Juni 2026 (tarif pada tanggal dimulainya penghitungan sanksi; 0,96% di soal ini anggapan)", berlakuSejak: "2026-06-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-088",
      sejak: "9.5.0"
    },
    {
      id: "A5-180",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PMK 78/2024 Pasal 62 ayat (2): \"Pemungut Bea Meterai tetap wajib memungut Bea Meterai dengan membubuhkan tanda pemungutan pada Dokumen dalam hal pembubuhan Meterai Elektronik dan/atau Meterai Teraan Digital tidak memungkinkan untuk dilakukan yang disebabkan: a. kegagalan sistem; atau b. ...\" Pasal 67 ayat (2): \"Jumlah kekurangan Bea Meterai dalam Surat Ketetapan Pajak sebagaimana dimaksud pada ayat (1) sebesar Bea Meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor, ditambah sanksi administratif sebesar 100% (seratus persen) dari Bea Meterai yang tidak atau kurang dipungut dan/atau tidak atau kurang disetor.\"",
      stem: "PT Lapak Niaga Sentosa, penyelenggara marketplace yang ditetapkan sebagai pemungut bea meterai atas tanda terima pembayaran digital, pada 12 Agustus 2026 menerbitkan dan menyerahkan 65 tanda terima bernilai lebih dari Rp5.000.000 kepada pembeli. Hari itu sistem Meterai Elektronik tidak dapat diakses menurut pemberitahuan Perum Peruri, dan PT Lapak Niaga Sentosa menyerahkan tanda terima tersebut tanpa memungut bea meterai dan tanpa membubuhkan tanda apa pun. Pemeriksaan pada Desember 2026 menemukan hal ini, sementara para pembeli telah memakai tanda terima itu untuk keperluan pembukuan. Berdasarkan kutipan tersebut, perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PT Lapak Niaga Sentosa tidak dikenai sanksi karena kegagalan sistem Meterai Elektronik di luar kendalinya; para pembeli cukup memeteraikan kemudian Rp10.000 per tanda terima tanpa sanksi", B: "Para pembeli sebagai pihak yang terutang wajib memeteraikan kemudian Rp20.000 per tanda terima (Rp1.300.000), sedangkan PT Lapak Niaga Sentosa tidak dikenai sanksi apa pun", C: "PT Lapak Niaga Sentosa ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP atas Rp650.000, tanpa sanksi 100%, karena penyebabnya kegagalan sistem dan bukan kesengajaan", D: "PT Lapak Niaga Sentosa diterbitkan surat ketetapan pajak sebesar Rp650.000 ditambah sanksi 100% Rp650.000, karena kegagalan sistem tidak menghapus kewajiban memungut dengan tanda pemungutan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Kegagalan sistem Meterai Elektronik tidak membebaskan pemungut: Pasal 62 ayat (2) PMK 78/2024 mewajibkannya tetap memungut dengan membubuhkan tanda pemungutan (\"BEA METERAI LUNAS\", tarif, nama pemungut). Karena tidak memungut, pemungut diterbitkan SKP sebesar bea meterai yang tidak dipungut (65 × Rp10.000) ditambah sanksi 100% (Pasal 11 ayat (2) dan (3) UU 10/2020; Pasal 67 PMK 78/2024).",
        jejakHitung: [
          ["Pokok 65 tanda terima × Rp10.000", "Rp650.000"],
          ["Sanksi 100%", "Rp650.000"],
          ["Jumlah dalam SKP", "Rp1.300.000"]
        ],
        mengapaSalah: {
          A: "Kegagalan sistem justru diatur Pasal 62 ayat (2): pemungut tetap wajib memungut dengan tanda pemungutan, sehingga tidak memungut tetap berakibat SKP + 100%",
          B: "Pasal 11 UU 10/2020 dan Pasal 67 PMK 78/2024 menempatkan akibat tidak dipungutnya bea meterai atas dokumen tertentu pada pemungut, bukan pada pembeli",
          C: "STP berupa bunga dipakai untuk setoran yang terlambat; bea meterai yang tidak dipungut ditetapkan dengan SKP sebesar pokok ditambah sanksi 100%"
        },
        jebakan: "Alasan kegagalan sistem tidak mengubah jenis sanksi bila pemungut tidak memakai tanda pemungutan yang disediakan Pasal 62 ayat (2). Yang membedakan SKP dan STP adalah tidak dipungut atau tidak disetor lawan hanya terlambat."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 55 ayat (2) huruf d, Pasal 61 huruf c, Pasal 62 ayat (2) sampai (4), dan Pasal 67 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-089",
      sejak: "9.5.0"
    },
    {
      id: "A5-181",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Kirim Dana Cepat, pemungut bea meterai, memungut bea meterai Masa Maret 2026 sebesar Rp36.500.000 dan menyetornya penuh pada 11 Juni 2026, padahal jatuh temponya Rabu, 15 April 2026. SPT Masa Bea Meterai disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 0,97% per bulan. Sanksi bunga yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.062.150", B: "Rp708.100", C: "Rp36.500.000", D: "Rp808.100" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Keterlambatan 15 April sampai 11 Juni 2026 adalah 1 bulan lebih; bagian bulan dihitung penuh sehingga 2 bulan. Bunga = Rp36.500.000 × 0,97% × 2.",
        jejakHitung: [
          ["16 April–15 Mei 2026", "1 bulan"],
          ["16 Mei–11 Juni 2026 (bagian bulan)", "1 bulan"],
          ["Bunga = 36.500.000 × 0,97% × 2", "Rp708.100"]
        ],
        mengapaSalah: {
          A: "Menghitung 3 bulan karena menyentuh tiga bulan kalender (April, Mei, Juni); bulan bunga dihitung dari hari setelah jatuh tempo, sehingga hanya 2 bulan",
          C: "Mengenakan sanksi 100%; setoran penuh yang terlambat hanya dikenai bunga melalui STP",
          D: "Menambahkan denda SPT Masa Rp100.000, padahal SPT disampaikan tepat waktu dan yang ditanyakan hanya bunga"
        },
        jebakan: "Jumlah bulan dihitung dari tanggal jatuh tempo, bukan dari pergantian bulan kalender; bagian bulan dihitung penuh."
      },
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK tarif bunga bulanan April 2026 (tarif pada tanggal dimulainya penghitungan sanksi; 0,97% di soal ini anggapan)", berlakuSejak: "2026-04-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-090",
      sejak: "9.5.0"
    },
    {
      id: "A5-182",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Pada 16 November 2026 PT Sinar Bahari Logistik menginventarisasi dokumen tanpa meterai yang bea meterainya terutang olehnya dan belum pernah diajukan ke pengadilan, untuk dilunasi melalui pemeteraian kemudian: (1) kuitansi Rp12.500.000 yang diterimanya pada 4 November 2021; (2) kuitansi Rp7.200.000 yang ditandatangani pemasok pada 2 November 2021 tetapi baru diserahkan kepada perusahaan pada 24 November 2021; (3) surat perjanjian sewa gudang yang ditandatangani kedua pihak pada 8 November 2021, rangkap milik perusahaan baru dikirim kepadanya pada 25 November 2021; (4) surat pernyataan mitra yang ditandatangani 1 November 2021 dan diserahkan kepada perusahaan pada 22 November 2021; (5) perjanjian kerja sama yang ditandatangani di Singapura pada 15 Agustus 2021 dan dijadikan dasar penagihan di Indonesia pada 26 November 2021 tanpa dilunasi bea meterainya; (6) kuitansi senilai tepat Rp5.000.000 yang diterima pada Maret 2025. Jumlah bea meterai beserta sanksi yang masih terutang dan wajib dibayar melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: ["masih terutang"],
      opsi: { A: "Rp40.000", B: "Rp80.000", C: "Rp60.000", D: "Rp30.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Kedaluwarsa 5 tahun dihitung dari saat terutang masing-masing dokumen (Pasal 23 UU 10/2020). Per 16 November 2026, dokumen (2), (4), dan (5) belum kedaluwarsa sehingga masing-masing dibayar Rp10.000 + sanksi 100% = Rp20.000 (Pasal 18 ayat (1) huruf a dan ayat (2)); (1) dan (3) sudah kedaluwarsa; (6) bukan objek.",
        jejakHitung: [
          ["(1) Kuitansi diserahkan 4 November 2021", "jangka waktu berakhir 3 November 2026 → Rp0"],
          ["(2) Kuitansi diserahkan 24 November 2021", "berakhir 23 November 2026 → Rp20.000"],
          ["(3) Perjanjian ditandatangani 8 November 2021", "berakhir 7 November 2026 → Rp0"],
          ["(4) Surat pernyataan diserahkan 22 November 2021", "berakhir 21 November 2026 → Rp20.000"],
          ["(5) Dokumen luar negeri digunakan di Indonesia 26 November 2021", "berakhir 25 November 2026 → Rp20.000"],
          ["(6) Kuitansi tepat Rp5.000.000", "bukan objek"],
          ["Total 3 × Rp20.000", "Rp60.000"]
        ],
        mengapaSalah: {
          A: "Menghitung kedaluwarsa perjanjian Singapura dari tanggal tanda tangan (15 Agustus 2021); dokumen yang dibuat di luar negeri terutang saat digunakan di Indonesia (26 November 2021)",
          B: "Menghitung kedaluwarsa surat perjanjian (3) dari tanggal rangkap dikirim; surat perjanjian beserta rangkapnya terutang saat dibubuhi tanda tangan (8 November 2021) sehingga sudah kedaluwarsa",
          D: "Hanya menghitung bea meterai Rp10.000 per dokumen; pemeteraian kemudian atas dokumen yang bea meterainya tidak dibayar ditambah sanksi 100%"
        },
        jebakan: "Saat terutang berbeda per jenis dokumen: kuitansi dan surat pernyataan saat diserahkan, surat perjanjian saat ditandatangani, dokumen luar negeri saat digunakan di Indonesia. Uji kedaluwarsa tiap dokumen dari saat terutangnya sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf a dan g, Pasal 8 ayat (1) huruf a, c, dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17, Pasal 18, dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 49 huruf a PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 200,
      verifikasi: "✅",
      kembaranDari: "A5-091",
      sejak: "9.5.0"
    },
    {
      id: "A5-183",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Nyonya Lestiani dan Tuan Gilang menandatangani surat perjanjian utang piutang pada 9 Maret 2021 tanpa membubuhkan meterai; utang jatuh tempo pada 9 Maret 2022 tetapi tidak dilunasi. Pada Desember 2026 Nyonya Lestiani akan mengajukan naskah perjanjian miliknya sebagai alat bukti dalam gugatan wanprestasi terhadap Tuan Gilang. Pernyataan yang paling tepat mengenai bea meterai atas naskah perjanjian tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Bea meterai yang terutang saat penandatanganan sudah kedaluwarsa pada Maret 2026, tetapi naskah tetap harus dimeteraikan kemudian sebelum diajukan sebagai alat bukti, sebesar Rp10.000 tanpa sanksi.", B: "Bea meterai yang terutang saat penandatanganan sudah kedaluwarsa pada Maret 2026, sehingga naskah dapat langsung diajukan sebagai alat bukti tanpa pemeteraian kemudian.", C: "Bea meterai yang terutang saat penandatanganan sudah kedaluwarsa pada Maret 2026, tetapi pemeteraian kemudian sebelum diajukan sebagai alat bukti sebesar Rp20.000 karena disertai sanksi 100%.", D: "Bea meterai belum kedaluwarsa karena jangka waktu 5 tahun dihitung sejak utang jatuh tempo pada 9 Maret 2022, sehingga pemeteraian kemudian sebesar Rp20.000 termasuk sanksi 100%." },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat perjanjian terutang bea meterai saat dibubuhi tanda tangan, 9 Maret 2021 (Pasal 8 ayat (1) huruf a), dan bea meterai itu kedaluwarsa setelah 5 tahun sejak saat terutang (Pasal 23), yaitu sejak 9 Maret 2026. Namun Penjelasan Pasal 3 ayat (1) huruf b menegaskan dokumen yang bea meterainya belum dibayar lunas tetapi telah kedaluwarsa tetap harus dimeteraikan kemudian saat akan dijadikan alat bukti di pengadilan. Untuk dokumen alat bukti, yang dibayar hanya bea meterai yang berlaku saat pemeteraian kemudian (Rp10.000), tanpa sanksi (Pasal 18 ayat (1) huruf b UU 10/2020; Pasal 49 huruf c PMK 78/2024).",
        jejakHitung: [],
        mengapaSalah: {
          B: "Kedaluwarsa menghapus utang bea meterai atas perjanjian sebagai dokumen perdata, tetapi dokumen yang akan menjadi alat bukti tetap harus dimeteraikan kemudian (Penjelasan Pasal 3 ayat (1) huruf b)",
          C: "Pemeteraian kemudian atas dokumen yang digunakan sebagai alat bukti hanya sebesar bea meterai yang terutang, tanpa sanksi (Pasal 18 ayat (1) huruf b); sanksi 100% melekat pada pemeteraian kemudian atas dokumen yang bea meterainya tidak dibayar (huruf a)",
          D: "Kedaluwarsa dihitung sejak saat terutang, yaitu saat perjanjian ditandatangani 9 Maret 2021 (Pasal 8 ayat (1) huruf a dan Pasal 23), bukan sejak utang jatuh tempo"
        },
        jebakan: "Dua rezim berbeda: kedaluwarsa menghapus tagihan atas dokumen perdata, sedangkan pengajuan sebagai alat bukti menimbulkan kewajiban pemeteraian kemudian tersendiri sebesar bea meterai yang berlaku saat itu, tanpa sanksi."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) huruf a dan Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b beserta penjelasannya, Pasal 17 ayat (1) huruf b, dan Pasal 18 ayat (1) huruf b UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 49 huruf c PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-093",
      sejak: "9.5.0"
    },
    {
      id: "A5-184",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 19 UU 10/2020: \"(1) Pihak Yang Terutang yang tidak atau kurang membayar Bea Meterai yang terutang, diterbitkan surat ketetapan pajak sesuai dengan ketentuan peraturan perundang-undangan di bidang ketentuan umum dan tata cara perpajakan. (2) Jumlah kekurangan Bea Meterai dalam surat ketetapan pajak sebagaimana dimaksud pada ayat (1) sebesar Bea Meterai yang tidak atau kurang dibayar ditambah sanksi administratif sebagaimana dimaksud dalam Pasal 18 ayat (2).\" Pasal 25 ayat (2) dan ayat (3) UU KUP: \"Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan mengemukakan jumlah pajak yang terutang, jumlah pajak yang dipotong atau dipungut, atau jumlah rugi menurut penghitungan Wajib Pajak dengan disertai alasan yang menjadi dasar penghitungan.\" \"Keberatan harus diajukan dalam jangka waktu 3 (tiga) bulan sejak tanggal dikirim surat ketetapan pajak ...\"",
      stem: "Hasil pemeriksaan bea meterai atas PT Arunika Boga Lestari, perusahaan jasa katering, dituangkan dalam Surat Ketetapan Pajak Kurang Bayar yang dikirim Rabu, 9 September 2026, sebesar Rp960.000 (48 dokumen × Rp10.000 ditambah sanksi 100%). Menurut PT Arunika Boga Lestari, 15 dokumen di antaranya adalah kuitansi yang diterimanya dari pemasok bahan baku dengan nilai masing-masing tepat Rp5.000.000, sedangkan 33 dokumen lainnya memang kuitansi pemasok bernilai di atas Rp5.000.000 dan rangkap surat perjanjian yang belum bermeterai. Berdasarkan kutipan tersebut, langkah yang paling tepat bagi PT Arunika Boga Lestari adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan keberatan paling lambat 8 Desember 2026 dengan mengemukakan bea meterai terutang menurut penghitungan PT Arunika Boga Lestari atas 33 dokumen sebesar Rp330.000, sedangkan sanksi 100% gugur karena keberatan diajukan sehingga jumlah ketetapan menurutnya Rp330.000", B: "Mengajukan keberatan paling lambat 8 Oktober 2026 dengan mengemukakan bea meterai terutang menurut penghitungan PT Arunika Boga Lestari atas 33 dokumen sebesar Rp330.000, sehingga jumlah ketetapan menurutnya beserta sanksi 100% menjadi Rp660.000", C: "Mengajukan gugatan ke Pengadilan Pajak paling lambat 8 Desember 2026 atas ketetapan untuk 15 kuitansi bernilai tepat Rp5.000.000, sedangkan bagian ketetapan atas 33 dokumen lainnya sebesar Rp660.000 dilunasi lebih dulu", D: "Mengajukan keberatan paling lambat 8 Desember 2026 dengan mengemukakan bea meterai terutang menurut penghitungan PT Arunika Boga Lestari atas 33 dokumen sebesar Rp330.000, sehingga jumlah ketetapan menurutnya beserta sanksi 100% menjadi Rp660.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat ketetapan bea meterai diterbitkan menurut tata cara UU KUP (Pasal 19 UU 10/2020), sehingga sengketa jumlahnya ditempuh dengan keberatan dalam jangka waktu 3 bulan sejak tanggal dikirim. Tanggal dikirim (9 September 2026) dihitung sebagai hari pertama, sehingga hari terakhirnya 8 Desember 2026. Kuitansi bernilai tepat Rp5.000.000 bukan objek karena Pasal 3 ayat (2) huruf g mensyaratkan nilai nominal LEBIH DARI Rp5.000.000. Yang dikemukakan adalah bea meterai terutang menurut wajib pajak: 33 × Rp10.000 = Rp330.000; sanksi 100% melekat pada bea meterai yang memang tidak dibayar, sehingga jumlah ketetapan menurut wajib pajak Rp660.000.",
        jejakHitung: [
          ["Dokumen objek menurut wajib pajak", "48 − 15 = 33"],
          ["Bea meterai terutang menurut wajib pajak 33 × Rp10.000", "Rp330.000"],
          ["Sanksi 100% (Pasal 18 ayat (2) jo. Pasal 19 ayat (2))", "Rp330.000"],
          ["Jumlah ketetapan menurut wajib pajak", "Rp660.000"],
          ["Jangka waktu keberatan: 3 bulan sejak 9 September 2026 (hari pertama 9 September 2026)", "hari terakhir 8 Desember 2026"]
        ],
        mengapaSalah: {
          A: "Pengajuan keberatan tidak menghapus sanksi 100% atas 33 dokumen yang diakui belum dibayar; sanksi itu mengikuti pokoknya (Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020)",
          B: "8 Oktober 2026 adalah hari terakhir jangka waktu 1 bulan; jangka waktu keberatan 3 bulan sejak surat ketetapan dikirim, berakhir 8 Desember 2026",
          C: "Sengketa materi atau jumlah ketetapan ditempuh dengan keberatan (Pasal 25 UU KUP), bukan gugatan; gugatan untuk pelaksanaan penagihan atau keputusan tertentu"
        },
        jebakan: "Batas objek kuitansi adalah \"lebih dari\" Rp5.000.000, sehingga kuitansi bernilai tepat Rp5.000.000 bukan objek. Yang dikemukakan dalam keberatan adalah pajak terutang menurut wajib pajak, dan sanksi 100% atas dokumen yang diakui tetap mengikuti pokoknya."
      },
      dasarHukum: [{ pasal: "Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 25 ayat (1), ayat (2), dan ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 9 ayat (1) dan Pasal 10 ayat (2) PMK 118/2024", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (2) huruf g UU 10/2020 (kuitansi lebih dari Rp5.000.000)", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-095",
      sejak: "9.5.0"
    },
    {
      id: "A5-185",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A5-16",
      stem: "Data untuk soal vignette V-A5-16: PT Larasati Agro Mandiri (pengolah kopi, perseroan tertutup, peredaran bruto 2025 Rp86 miliar) diperiksa pada September 2026 atas dokumen Tahun 2025. Dokumen yang ditemukan tanpa meterai: 46 kuitansi yang dibuat pemasok dan diterima PT Larasati Agro Mandiri, bernilai Rp7.500.000 sampai Rp120.000.000; 9 rangkap surat perjanjian sewa gudang yang diterima dan dipegang PT Larasati Agro Mandiri; 8 surat pernyataan yang dibuat mitra petani dan diserahkan kepada PT Larasati Agro Mandiri; 18 kuitansi pemasok yang masing-masing bernilai tepat Rp5.000.000; 30 tanda terima pembayaran upah pekerja harian; serta 22 kuitansi bernilai di atas Rp5.000.000 yang dibuat PT Larasati Agro Mandiri dan diserahkan kepada pembeli. Atas dokumen yang bea meterainya terutang oleh PT Larasati Agro Mandiri dan belum dibayar, diterbitkan surat ketetapan pajak kepada perusahaan itu. Jumlah sanksi administratif, di luar pokok, dalam ketetapan tersebut adalah ...",
      kataKualifikasi: ["di luar pokok"],
      opsi: { A: "Rp850.000", B: "Rp1.260.000", C: "Rp630.000", D: "Rp810.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen sepihak terutang oleh penerimanya dan dokumen dua pihak terutang oleh masing-masing pihak atas dokumen yang diterimanya (Pasal 9 ayat (1) dan ayat (2) UU 10/2020). Yang terutang oleh perusahaan: 46 kuitansi pemasok, 9 rangkap perjanjian yang dipegangnya, dan 8 surat pernyataan yang diterimanya = 63 dokumen. Sanksi 100% dari bea meterai terutang = 63 × Rp10.000.",
        jejakHitung: [
          ["Kuitansi pemasok di atas Rp5.000.000 (diterima perusahaan)", "46"],
          ["Rangkap perjanjian yang diterima perusahaan", "9"],
          ["Surat pernyataan yang diserahkan kepada perusahaan", "8"],
          ["Jumlah dokumen terutang oleh perusahaan", "63"],
          ["Sanksi 100% = 63 × Rp10.000", "Rp630.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung 22 kuitansi yang dibuat perusahaan dan diserahkan kepada pembeli; dokumen sepihak terutang oleh pihak yang menerima dokumen, yaitu pembeli (Pasal 9 ayat (1))",
          B: "Menjumlahkan pokok Rp630.000 dan sanksi Rp630.000; yang ditanya hanya sanksi",
          D: "Ikut menghitung 18 kuitansi bernilai tepat Rp5.000.000; objek kuitansi hanya yang nilai nominalnya lebih dari Rp5.000.000 (Pasal 3 ayat (2) huruf g)"
        },
        jebakan: "Tentukan dulu siapa pihak yang terutang tiap dokumen. Tanda terima upah pekerja (Pasal 7 huruf c) bukan objek, sedangkan status perseroan tertutup dan peredaran bruto tidak memengaruhi tarif maupun sanksi bea meterai."
      },
      dasarHukum: [{ pasal: "Pasal 18 dan Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (2) huruf a dan huruf g, Pasal 7 huruf c, dan Pasal 9 ayat (1) dan ayat (2) UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-096",
      sejak: "9.5.0"
    },
    {
      id: "A5-186",
      topik: "A5.6",
      tingkat: ["B", "C"],
      jenis: "baris-spt",
      kesulitan: 3,
      kasusId: "V-A5-16",
      stem: "Lanjutan V-A5-16: Pada 2026 PT Larasati Agro Mandiri melunasi surat ketetapan bea meterai hasil pemeriksaan atas dokumen 2025 (pokok Rp630.000 dan sanksi Rp630.000) dan membukukan seluruhnya sebagai beban umum. Pada tahun yang sama perusahaan membeli dan memakai 2.150 meterai elektronik untuk dokumen operasional (Rp21.500.000) yang dibebankan sebagai biaya administrasi, serta membayar STP denda keterlambatan penyampaian SPT Masa PPN sebesar Rp500.000 yang dibebankan sebagai beban lain-lain. Dalam rekonsiliasi laporan keuangan pada SPT Tahunan PPh Badan Tahun Pajak 2026, jumlah penyesuaian fiskal positif yang timbul dari ketiga transaksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.130.000", B: "Rp1.760.000", C: "Rp630.000", D: "Rp23.260.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Denda dalam STP adalah sanksi administrasi berupa denda yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh). Sanksi 100% bea meterai Rp630.000 lazimnya dikoreksi positif sebagai sanksi administrasi di bidang perpajakan menurut Pasal 9 ayat (1) huruf k UU PPh, tetapi naskah (Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020; Pasal 49 PMK 78/2024) hanya menyebutnya \"sanksi administratif\" dan tidak menggolongkannya secara tegas ke bunga, denda, atau kenaikan; kunci mengikuti praktik yang lazim itu. Penyesuaian fiskal positif = Rp630.000 + Rp500.000 = Rp1.130.000. Pokok bea meterai dan pembelian meterai elektronik untuk dokumen operasional adalah pajak selain PPh yang berkaitan dengan usaha sehingga dapat dibebankan (Pasal 6 ayat (1) huruf a angka 9 UU PPh).",
        jejakHitung: [
          ["Pokok bea meterai Rp630.000 dan meterai elektronik Rp21.500.000", "dapat dibebankan, tidak dikoreksi"],
          ["Sanksi 100% bea meterai (lazimnya dikoreksi; lihat peringatan)", "Rp630.000"],
          ["Denda STP keterlambatan SPT Masa PPN", "Rp500.000"],
          ["Penyesuaian fiskal positif (unsur sanksi)", "Rp1.130.000"]
        ],
        mengapaSalah: {
          B: "Ikut mengoreksi pokok bea meterai Rp630.000; pokok bea meterai adalah pajak selain PPh yang dapat dibebankan",
          C: "Tidak mengoreksi denda STP; denda dalam STP adalah sanksi administrasi berupa denda yang tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh)",
          D: "Mengoreksi seluruh beban, termasuk pokok bea meterai dan meterai elektronik untuk dokumen operasional yang merupakan biaya usaha"
        },
        jebakan: "Pisahkan pokok bea meterai (biaya) dari sanksinya (lazimnya dikoreksi, lihat peringatan) meskipun dibayar dalam satu ketetapan. Di SPT Tahunan PPh Badan Coretax, koreksi ini diisi pada kolom PENYESUAIAN FISKAL POSITIF akun beban yang memuatnya di Lampiran 1A-1L (Rekonsiliasi Laporan Keuangan), bukan pada satu baris tersendiri."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh (pajak selain PPh sebagai biaya)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Lampiran huruf H PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 (Lampiran 1A-1L, kolom PENYESUAIAN FISKAL POSITIF)", berlakuSejak: "2026-10-01" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Pasal 18 ayat (2) dan Pasal 19 ayat (2) UU 10/2020 serta Pasal 49 PMK 78/2024 hanya menyebut \"sanksi administratif\" 100% tanpa menamainya bunga, denda, atau kenaikan; Pasal 9 ayat (1) huruf k UU PPh menyebut \"sanksi administrasi berupa bunga, denda, dan kenaikan\" dan Penjelasannya \"Cukup jelas\". Kunci mengikuti praktik umum (sanksi bukan biaya), tetapi masuknya sanksi bea meterai ke huruf k belum bisa dipastikan dari bunyi naskah.",
      formulirRef: "1771.l1.7",
      kembaranDari: "A5-097",
      sejak: "9.5.0"
    },
    {
      id: "A5-187",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      stem: "Konsultan menyusun ringkasan akibat hukum untuk PT Kirana Bayar Nusantara, pemungut bea meterai atas dokumen tertentu, atas tiga temuan tahun 2026: (1) pada Masa Maret 2026 perusahaan sama sekali tidak memungut bea meterai atas sebagian dokumen yang wajib dipungutnya; (2) bea meterai Masa April 2026 dipungut dan disetor penuh tepat waktu, tetapi SPT Masa Bea Meterai disampaikan terlambat; (3) perusahaan menerima rangkap surat perjanjian kerja sama dari mitranya tanpa meterai dan baru melunasi bea meterainya beberapa bulan kemudian. Ringkasan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "(1) ditagih dengan STP berupa bunga UU KUP tanpa sanksi 100%; (2) ditagih dengan STP sesuai UU KUP; (3) dibayar melalui pemeteraian kemudian sebesar bea meterai ditambah sanksi 100%.", B: "(1) diterbitkan SKP sebesar bea meterai yang tidak dipungut ditambah sanksi 100%; (2) ditagih dengan STP sesuai UU KUP; (3) dibayar melalui pemeteraian kemudian sebesar bea meterai ditambah sanksi 100%.", C: "(1) diterbitkan SKP sebesar bea meterai yang tidak dipungut ditambah sanksi 100%; (2) diterbitkan SKP ditambah sanksi 100%; (3) dibayar melalui pemeteraian kemudian sebesar bea meterai ditambah sanksi 100%.", D: "(1) diterbitkan SKP sebesar bea meterai yang tidak dipungut ditambah sanksi 100%; (2) ditagih dengan STP sesuai UU KUP; (3) dibayar melalui pemeteraian kemudian sebesar bea meterai ditambah sanksi 200%." },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Tiga rezim berbeda: pemungut yang tidak memungut (atau tidak menyetor) diterbitkan SKP sebesar bea meterai yang tidak dipungut ditambah sanksi 100% (Pasal 11 ayat (2) dan ayat (3)); pemungut yang terlambat menyetor atau tidak atau terlambat melapor ditagih STP sesuai UU KUP (Pasal 11 ayat (4)); pihak terutang yang tidak melunasi bea meterai atas dokumen yang diterimanya membayar melalui pemeteraian kemudian sebesar pokok ditambah sanksi 100% (Pasal 17 dan Pasal 18).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Bea meterai yang tidak dipungut sama sekali ditetapkan dengan SKP ditambah sanksi 100% (Pasal 11 ayat (2) dan ayat (3)), bukan sekadar bunga dalam STP",
          C: "Pemungutan dan penyetoran yang lengkap dengan pelaporan terlambat ditagih dengan STP sesuai UU KUP (Pasal 11 ayat (4) huruf b), bukan SKP ditambah 100%",
          D: "Sanksi pemeteraian kemudian sejak UU 10/2020 adalah 100% dari bea meterai terutang (Pasal 18 ayat (2)); 200% adalah ketentuan UU 13/1985 yang sudah dicabut"
        },
        jebakan: "Satu wajib pajak dapat berkedudukan sebagai pemungut dan sebagai pihak yang terutang sekaligus. Bedakan \"tidak memungut atau tidak menyetor\" (SKP + 100%) dari \"terlambat menyetor atau melapor\" (STP)."
      },
      dasarHukum: [{ pasal: "Pasal 11 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2) dan Pasal 17 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-099",
      sejak: "9.5.0"
    },
    {
      id: "A5-188",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "Pasal 11 ayat (4) huruf a UU 10/2020: Pemungut Bea Meterai yang terlambat menyetorkan Bea Meterai diterbitkan surat tagihan pajak sesuai dengan ketentuan peraturan perundang-undangan di bidang ketentuan umum dan tata cara perpajakan. Pasal 9 ayat (2a) UU KUP: \"Pembayaran atau penyetoran pajak ... yang dilakukan setelah tanggal jatuh tempo pembayaran atau penyetoran pajak, dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan oleh Menteri Keuangan yang dihitung sejak berakhirnya tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran, dan dikenakan paling lama 24 (dua puluh empat) bulan serta bagian dari bulan dihitung penuh 1 (satu) bulan.\" Pasal 9 ayat (2c): tarif bunga per bulan tersebut \"yang berlaku pada tanggal dimulainya penghitungan sanksi.\"",
      stem: "PT Mitra Arta Digital, pemungut bea meterai, belum menyetor bea meterai Masa Juli 2025 sebesar Rp36.400.000 yang telah dipungut dan dilaporkan dalam SPT Masa tepat waktu; jatuh tempo penyetorannya Jumat, 15 Agustus 2025. Bea meterai tersebut baru disetor pada Senin, 4 Mei 2026, dan DJP menerbitkan STP atas keterlambatan setor. Anggap tarif bunga per bulan yang ditetapkan Menteri Keuangan 0,79% untuk Agustus 2025 dan 0,83% untuk Mei 2026. Berdasarkan kutipan tersebut, sanksi bunga dalam STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.300.480", B: "Rp2.719.080", C: "Rp2.588.040", D: "Rp36.400.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bunga dihitung sejak berakhirnya jatuh tempo 15 Agustus 2025 (bulan pertama mulai 16 Agustus 2025) sampai 4 Mei 2026: 8 bulan 19 hari, dibulatkan menjadi 9 bulan karena bagian bulan dihitung penuh, masih di bawah batas 24 bulan. Tarif yang dipakai adalah tarif yang berlaku saat penghitungan sanksi dimulai (Agustus 2025): Rp36.400.000 × 0,79% × 9.",
        jejakHitung: [
          ["Bulan ke-1: 16 Agustus–15 September 2025; bulan ke-9: 16 April–15 Mei 2026", "pembayaran 4 Mei 2026 jatuh di bulan ke-9"],
          ["Jumlah bulan (bagian bulan dihitung penuh, batas 24 bulan tidak terlampaui)", "9 bulan"],
          ["Tarif saat dimulainya penghitungan sanksi (Agustus 2025)", "0,79%"],
          ["Bunga = 36.400.000 × 0,79% × 9", "Rp2.588.040"]
        ],
        mengapaSalah: {
          A: "Menghitung 8 bulan dengan mengabaikan sisa hari; bagian dari bulan dihitung penuh 1 bulan sehingga 9 bulan",
          B: "Memakai tarif Mei 2026 0,83%; tarif yang dipakai adalah tarif yang berlaku pada tanggal dimulainya penghitungan sanksi (Pasal 9 ayat (2c) UU KUP)",
          D: "Mengenakan sanksi 100%; sanksi itu untuk bea meterai yang tidak dipungut atau tidak disetor (SKP), sedangkan keterlambatan setor ditagih dengan STP berupa bunga"
        },
        jebakan: "Bagian bulan dihitung penuh dan tarifnya dikunci pada saat penghitungan sanksi dimulai, bukan pada saat pembayaran atau penerbitan STP."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) dan ayat (2c) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 11 ayat (4) UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 94 ayat (2) huruf k PMK 81/2024 (jatuh tempo setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-100",
      sejak: "9.5.0"
    },
    {
      id: "A5-189",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Dalam pemeriksaan pada September 2026 ditemukan kuitansi pelunasan pembelian mesin jahit industri sebesar Rp48.500.000 yang dibuat PT Benang Sari dan diserahkan kepada CV Rajut Mandiri pada 14 Mei 2025. Kuitansi itu dibubuhi tiga meterai tempel lama Rp3.000 (total Rp9.000) sisa persediaan tahun 2021, dan tanda tangan dibubuhkan sebagian di atas meterai dan sebagian di atas kertas. CV Rajut Mandiri berpendapat pelunasan sudah sah karena nilai gabungan meterai mencapai Rp9.000 sebagaimana disebut dalam ketentuan peralihan UU 10/2020. Para pihak tidak memperjanjikan lain mengenai pembayaran bea meterai. Jumlah yang harus dilunasi melalui pemeteraian kemudian atas kuitansi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp20.000", C: "Rp10.000", D: "Rp2.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Meterai tempel cetakan UU 13/1985 hanya dapat dipakai sampai 1 tahun setelah UU 10/2020 berlaku (1 Januari 2021), yaitu sampai 31 Desember 2021; nilai gabungan paling sedikit Rp9.000 hanya berlaku dalam masa itu. Pada 14 Mei 2025 meterai Rp3.000 bukan lagi meterai yang sah dan berlaku, sehingga pembayaran tidak sah dan kuitansi dianggap tidak dibubuhi meterai (Pasal 44 ayat (1) huruf a dan Pasal 45 PMK 78/2024). Kuitansi lebih dari Rp5.000.000 terutang saat diserahkan, sehingga pemeteraian kemudian meliputi pokok Rp10.000 ditambah sanksi 100%.",
        jejakHitung: [
          ["Batas pemakaian meterai lama", "31 Desember 2021"],
          ["Status pelunasan 14 Mei 2025", "tidak sah, dianggap tidak dibubuhi meterai"],
          ["Pokok bea meterai", "Rp10.000"],
          ["Sanksi 100% × Rp10.000", "Rp10.000"],
          ["Jumlah pemeteraian kemudian", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Nilai gabungan Rp9.000 hanya diakui dalam masa peralihan sampai akhir 2021; setelah itu meterai lama tidak sah berapa pun nilainya.",
          C: "Kuitansi sudah lewat saat terutang tanpa pelunasan yang sah, sehingga sanksi 100% dari bea meterai terutang ikut dibayar.",
          D: "Meterai lama tidak dihitung sebagai pembayaran sebagian; kuitansi dianggap tidak bermeterai, sehingga dasarnya Rp10.000, bukan selisih Rp1.000."
        },
        jebakan: "Angka Rp9.000 memancing logika masa peralihan 2021. Yang menentukan adalah apakah meterai yang dibubuhkan masih sah dan berlaku pada saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 28 huruf b dan huruf c UU 10/2020 (Ketentuan Peralihan)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 44, Pasal 45, dan Pasal 49 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-024",
      sejak: "9.5.4"
    },
    {
      id: "A5-190",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Pada 7 Juli 2026 CV Mitra Armada menerima kuitansi elektronik berbentuk PDF dari PT Garda Logistik atas pelunasan sewa armada sebesar Rp36.000.000, tanpa meterai. Untuk menghemat biaya, staf CV Mitra Armada menyalin gambar meterai elektronik beserta kode QR-nya dari kontrak lain yang dahulu sah dibubuhi meterai elektronik, lalu menempelkannya ke PDF kuitansi dengan aplikasi penyunting PDF. Para pihak tidak memperjanjikan lain mengenai pembayaran bea meterai. Perlakuan bea meterai yang tepat atas kuitansi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Sah, karena gambar yang ditempel memuat kode unik meterai elektronik asli yang bernilai Rp10.000", B: "Tidak terutang, karena kuitansi berbentuk elektronik tidak termasuk dokumen yang dikenai bea meterai", C: "Cukup dibubuhi meterai elektronik melalui sistem resmi sekarang tanpa sanksi, selama belum diperiksa", D: "Pembayaran tidak sah sehingga kuitansi dianggap tidak bermeterai; dimeteraikan kemudian Rp10.000 ditambah sanksi 100%" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "Kuitansi lebih dari Rp5.000.000 terutang bea meterai saat diserahkan, 7 Juli 2026, dan terutang oleh penerimanya, CV Mitra Armada (Pasal 9 ayat (1) UU 10/2020). Dokumen elektronik dilunasi dengan membubuhkan meterai elektronik melalui Sistem Meterai Elektronik (Pasal 16 ayat (1) PMK 78/2024), dan pembayaran hanya sah bila pembubuhannya melalui sistem itu (Pasal 44 ayat (2)). Gambar hasil salinan tidak dibubuhkan melalui sistem, sehingga pembayaran tidak sah dan dokumen dianggap tidak dibubuhi meterai (Pasal 45); pelunasannya melalui pemeteraian kemudian dengan sanksi 100%.",
        jejakHitung: [
          ["Saat terutang", "7 Juli 2026 (kuitansi diserahkan)"],
          ["Pelunasan dengan gambar salinan", "tidak sah (bukan melalui Sistem Meterai Elektronik)"],
          ["Pokok + sanksi 100%", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Kode unik hanya bermakna bila meterai dibubuhkan melalui Sistem Meterai Elektronik; kode yang sudah terpakai pada dokumen lain dan disalin bukan pembayaran untuk kuitansi ini.",
          B: "Pengertian dokumen dalam Pasal 1 angka 2 UU 10/2020 mencakup bentuk elektronik, dan kuitansi lebih dari Rp5.000.000 adalah objek bea meterai.",
          C: "Saat terutang sudah lewat tanpa pelunasan yang sah, sehingga sanksi 100% melekat karena keterlambatan itu, bukan karena ada pemeriksaan."
        },
        jebakan: "Kode QR yang tampak asli memberi kesan sah. Yang menentukan adalah cara pembubuhan: meterai elektronik harus dibubuhkan melalui sistemnya untuk dokumen itu."
      },
      dasarHukum: [{ pasal: "Pasal 1, Pasal 9, Pasal 12, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 16, Pasal 44 ayat (2), dan Pasal 45 (meterai elektronik)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-025",
      sejak: "9.5.4"
    },
    {
      id: "A5-191",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Nyonya Ratih akan menyerahkan kuitansi kertas tanda terima uang muka pembelian tanah kavling sebesar Rp75.000.000 kepada Tuan Basuki pada 3 November 2026. Para pihak sepakat Nyonya Ratih yang menyediakan meterai, dan ia telah membeli satu meterai tempel Rp10.000 yang sah dan belum pernah dipakai di kantor pos. Cara pembubuhan yang membuat pembayaran bea meterai atas kuitansi itu sah adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Meterai direkatkan utuh di tempat tanda tangan, lalu tanda tangan dibubuhkan sebagian di atas kertas dan sebagian di atas meterai disertai tanggal, bulan, dan tahun", B: "Meterai direkatkan utuh di tempat tanda tangan, lalu tanda tangan dan tanggal dibubuhkan seluruhnya di dalam bidang meterai tanpa mengenai kertas sama sekali", C: "Meterai yang sudutnya sobek saat dilepas dari lembarannya direkatkan di tempat tanda tangan, lalu tanda tangan dibubuhkan sebagian di atas meterai dan kertas", D: "Meterai direkatkan utuh di bagian kop kuitansi yang terpisah dari tempat tanda tangan, lalu di atas meterai dibubuhkan paraf serta tanggal penandatanganan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembubuhan meterai tempel dilakukan dengan merekatkan meterai seluruhnya dengan utuh dan tidak rusak di tempat tanda tangan akan dibubuhkan, lalu tanda tangan dibubuhkan sebagian di atas kertas dan sebagian di atas meterai disertai tanggal, bulan, dan tahun penandatanganan (Pasal 7 ayat (2) PMK 78/2024). Bila tata cara ini tidak dipenuhi, pembayaran tidak sah dan dokumen dianggap tidak bermeterai (Pasal 44 ayat (1) huruf b dan Pasal 45).",
        jejakHitung: [],
        mengapaSalah: {
          B: "Tanda tangan harus mengenai kertas dan meterai sekaligus; tanda tangan yang seluruhnya di dalam bidang meterai tidak memenuhi Pasal 7 ayat (2) huruf b.",
          C: "Meterai harus direkatkan dengan utuh dan tidak rusak; meterai yang sobek tidak memenuhi Pasal 7 ayat (2) huruf a.",
          D: "Meterai harus direkatkan di tempat tanda tangan akan dibubuhkan, dan tanda tangan dibubuhkan sebagian di atas kertas dan sebagian di atas meterai."
        },
        jebakan: "Keabsahan pelunasan dengan meterai tempel bergantung pada tata cara pembubuhan: utuh, di tempat tanda tangan, tanda tangan menyilang kertas dan meterai, dan diberi tanggal."
      },
      dasarHukum: [{ pasal: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 7 ayat (2), Pasal 44 ayat (1), dan Pasal 45 (tata cara pembubuhan meterai tempel)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-026",
      sejak: "9.5.4"
    },
    {
      id: "A5-192",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kutipan: "Pasal 12 UU 10/2020 ayat (1): Pembayaran Bea Meterai yang terutang pada Dokumen dilakukan dengan menggunakan: a. Meterai; atau b. surat setoran pajak. Ayat (2): Meterai sebagaimana dimaksud pada ayat (1) huruf a berupa: a. Meterai tempel; b. Meterai elektronik; atau c. Meterai dalam bentuk lain yang ditetapkan oleh Menteri.",
      stem: "PT Arka Medika Farma, distributor alat kesehatan yang belum ditetapkan sebagai pemungut bea meterai, pada November 2026 menerbitkan surat pernyataan dan kuitansi bernilai lebih dari Rp5.000.000, sebagian berbentuk kertas dan sebagian elektronik. Saat merapikan lemari arsip, bagian keuangan menemukan satu bendel meterai tempel Rp6.000 sisa tahun 2020 dan mengusulkan dua lembar dipakai sekaligus agar nilainya melebihi tarif. Berdasarkan kutipan tersebut dan ketentuan pelaksanaannya, sarana berikut dapat dipakai untuk melunasi bea meterai, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Meterai elektronik yang dibeli dari distributor atau pengecernya dan dibubuhkan melalui sistem pada kuitansi elektronik", B: "Meterai tempel Rp10.000 yang sah dan belum pernah dipakai, dibeli di kantor pos, untuk surat pernyataan berbentuk kertas", C: "Dua meterai tempel Rp6.000 dengan nilai gabungan Rp12.000 yang direkatkan berdampingan pada kuitansi berbentuk kertas", D: "Surat Setoran Pajak untuk kuitansi kertas ketika meterai tempel tidak tersedia sehingga tidak dapat dipakai untuk pelunasan" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meterai tempel cetakan UU 13/1985 (Rp3.000 dan Rp6.000) hanya dapat dipakai sampai 1 tahun setelah UU 10/2020 berlaku, yaitu sampai 31 Desember 2021 (Pasal 28 huruf b). Pada November 2026 meterai Rp6.000 bukan lagi meterai yang sah dan berlaku, berapa pun jumlah lembarnya, sehingga pembayaran dengannya tidak sah (Pasal 44 ayat (1) huruf a dan Pasal 45 PMK 78/2024). Sarana lain sah: meterai elektronik untuk dokumen elektronik, meterai tempel Rp10.000 untuk dokumen kertas, dan Surat Setoran Pajak dalam keadaan Pasal 42 PMK 78/2024.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Meterai elektronik adalah sarana sah untuk dokumen elektronik dan dijual distributor kepada pengecer dan masyarakat umum (Pasal 20 ayat (2) PMK 78/2024).",
          B: "Meterai tempel Rp10.000 yang sah, berlaku, dan belum pernah dipakai adalah sarana pelunasan dokumen kertas (Pasal 7 ayat (1) PMK 78/2024).",
          D: "Surat Setoran Pajak disebut Pasal 12 ayat (1), dan Pasal 42 huruf b PMK 78/2024 membolehkannya bila meterai tempel tidak tersedia atau tidak dapat digunakan."
        },
        jebakan: "Nilai gabungan Rp12.000 melebihi tarif Rp10.000, tetapi keabsahan bergantung pada berlakunya meterai, bukan pada jumlah nominalnya. Kata \"kecuali\" mencari sarana yang tidak sah."
      },
      dasarHukum: [{ pasal: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 28 huruf b UU 10/2020 (Ketentuan Peralihan)", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 7, Pasal 20, Pasal 42, Pasal 44, dan Pasal 45", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-028",
      sejak: "9.5.4"
    },
    {
      id: "A5-193",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Sewa Prima Alatindo, perusahaan penyewaan alat berat, setiap bulan menandatangani sekitar 300 perjanjian sewa elektronik dengan pelanggannya memakai tanda tangan elektronik. Perusahaan belum pernah ditetapkan sebagai pemungut bea meterai, dan setiap perjanjian memuat klausul bahwa seluruh bea meterai ditanggung perusahaan. Manajer pajak ingin bea meterai setiap perjanjian lunas secara sah pada saat ditandatangani. Langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengajukan penetapan sebagai pemungut lebih dulu, karena hanya pemungut yang boleh membubuhkan meterai elektronik", B: "Menyetor Deposit ke kas negara seperti Distributor sebelum dapat memperoleh dan membubuhkan meterai elektronik", C: "Menyetor Rp10.000 setiap akhir bulan dengan kode billing untuk seluruh perjanjian yang ditandatangani bulan itu", D: "Membeli meterai elektronik dari distributor atau pengecernya, lalu membubuhkannya pada setiap perjanjian melalui sistemnya" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Perjanjian terutang bea meterai saat dibubuhi tanda tangan, dengan tarif tetap Rp10.000 per dokumen. Dokumen elektronik dilunasi dengan membubuhkan meterai elektronik melalui Sistem Meterai Elektronik (Pasal 16 ayat (1) PMK 78/2024). Distributor menjual meterai elektronik kepada pengecer dan masyarakat umum (Pasal 20 ayat (2)), sehingga perusahaan yang bukan pemungut dapat membelinya dan membubuhkannya sendiri. Para pihak boleh sepakat siapa yang membayar (Pasal 9 ayat (6) UU 10/2020).",
        jejakHitung: [
          ["Perjanjian per bulan", "±300 dokumen"],
          ["Bea meterai per perjanjian", "Rp10.000"],
          ["Kebutuhan meterai elektronik", "±Rp3.000.000 per bulan"]
        ],
        mengapaSalah: {
          A: "Penetapan pemungut adalah kewajiban memungut atas dokumen tertentu, bukan izin memakai meterai elektronik; meterai elektronik dijual kepada masyarakat umum.",
          B: "Deposit adalah syarat penyediaan meterai elektronik bagi Distributor (Pasal 19 ayat (4) PMK 78/2024), bukan bagi pembeli yang memakainya.",
          C: "Tarif Rp10.000 berlaku untuk setiap dokumen, bukan per bulan, dan pembayaran dengan Surat Setoran Pajak hanya dalam keadaan Pasal 42 PMK 78/2024."
        },
        jebakan: "Peserta sering mencampur kedudukan pemungut atau Distributor dengan pengguna biasa meterai elektronik."
      },
      dasarHukum: [{ pasal: "Pasal 5, Pasal 9, dan Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 16, Pasal 19, dan Pasal 20", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-030",
      sejak: "9.5.4"
    },
    {
      id: "A5-194",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "PT Bayar Cepat Indonesia, penyelenggara payment gateway, setiap bulan memfasilitasi penerbitan lebih dari 30.000 tanda terima pembayaran elektronik bernilai di atas Rp5.000.000. Perusahaan mengajukan permohonan untuk ditetapkan sebagai pemungut bea meterai ke KPP tempatnya terdaftar; Bukti Penerimaan permohonan yang lengkap terbit 11 Agustus 2026, dan Kepala KPP menerbitkan surat penetapan Pemungut Bea Meterai tertanggal 18 Agustus 2026. Pernyataan yang tepat mengenai kedudukan PT Bayar Cepat Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Berkedudukan sebagai pemungut sejak 18 Agustus 2026, tanggal surat penetapan, sehingga dokumen yang diserahkan mulai hari itu wajib dipungut", B: "Berkedudukan sebagai pemungut mulai 1 September 2026; atas dokumen yang diserahkan sebelum tanggal itu, bea meterai dilunasi pihak yang terutang", C: "Berkedudukan sebagai pemungut mulai 1 September 2026 setelah lebih dulu menyetor Deposit untuk memperoleh meterai elektronik yang dibubuhkan", D: "Berkedudukan sebagai pemungut sejak 11 Agustus 2026, saat permohonan diterima lengkap, karena kriteria pemungut sudah terpenuhi sebelumnya" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kedudukan pemungut lahir dari surat penetapan Kepala KPP (Pasal 56 ayat (2) PMK 78/2024), dan penetapan itu mulai berlaku sejak awal bulan berikutnya setelah tanggal surat penetapan (Pasal 59 ayat (4)). Surat bertanggal 18 Agustus 2026 berlaku mulai 1 September 2026. Sebelum itu, bea meterai atas tiap dokumen tetap dibayar oleh pihak yang terutang pada saat terutang (Pasal 6 ayat (1)). Meterai elektronik untuk pemungut disediakan tanpa Deposit (Pasal 19 ayat (6)).",
        jejakHitung: [
          ["Bukti Penerimaan permohonan lengkap", "11 Agustus 2026"],
          ["Tanggal surat penetapan", "18 Agustus 2026"],
          ["Mulai berlaku (awal bulan berikutnya)", "1 September 2026"]
        ],
        mengapaSalah: {
          A: "Penetapan tidak berlaku pada tanggal suratnya, tetapi sejak awal bulan berikutnya setelah tanggal surat penetapan (Pasal 59 ayat (4) PMK 78/2024).",
          C: "Meterai elektronik untuk pemungut disediakan tanpa didahului Deposit (Pasal 19 ayat (6) PMK 78/2024); Deposit adalah syarat bagi Distributor.",
          D: "Memenuhi kriteria atau mengajukan permohonan belum menjadikan Wajib Pajak pemungut; kedudukan itu lahir dari surat penetapan."
        },
        jebakan: "Bedakan tanggal permohonan, tanggal surat penetapan, dan saat penetapan mulai berlaku."
      },
      dasarHukum: [{ pasal: "Pasal 10 dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 19 ayat (6), Pasal 56, dan Pasal 59 ayat (4) (penetapan pemungut oleh Kepala KPP)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-036",
      sejak: "9.5.4"
    },
    {
      id: "A5-195",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Nn. Laras menerima tiga kuitansi tanpa meterai dari rumah sakit atas biaya pengobatan yang dibayarnya, yaitu kuitansi 12 Januari 2026 sebesar Rp12.500.000, kuitansi 9 Februari 2026 sebesar Rp5.000.000, dan kuitansi 16 Maret 2026 sebesar Rp6.200.000. Pada Oktober 2026 perusahaan asuransinya mensyaratkan kuitansi bermeterai untuk klaim, sehingga Nn. Laras melakukan pemeteraian kemudian atas setiap kuitansi yang terutang bea meterai. Jumlah yang harus dibayar Nn. Laras adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000", B: "Rp60.000", C: "Rp20.000", D: "Rp24.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Hanya kuitansi bernilai lebih dari Rp5.000.000 yang terutang bea meterai (Pasal 3 ayat (2) huruf g UU 10/2020), yaitu kuitansi Rp12.500.000 dan Rp6.200.000; kuitansi Rp5.000.000 tidak melebihi batas. Kedua kuitansi terutang saat diserahkan kepada Nn. Laras sebagai penerima dan tidak dilunasi, sehingga pemeteraian kemudian meliputi pokok Rp10.000 ditambah sanksi 100% untuk tiap kuitansi.",
        jejakHitung: [
          ["Kuitansi terutang (> Rp5.000.000)", "2 dokumen"],
          ["Kuitansi Rp5.000.000", "bukan objek (tidak lebih dari Rp5.000.000)"],
          ["Per dokumen: pokok + sanksi 100%", "Rp20.000"],
          ["Total 2 × Rp20.000", "Rp40.000"]
        ],
        mengapaSalah: {
          B: "Kuitansi Rp5.000.000 ikut dihitung, padahal batasnya lebih dari Rp5.000.000.",
          C: "Melupakan sanksi 100% padahal saat terutang kedua kuitansi sudah lewat.",
          D: "Memakai tarif lama Rp6.000 ditambah sanksi 100%; sejak 2021 tarifnya Rp10.000."
        },
        jebakan: "Uji batas \"lebih dari Rp5.000.000\" per dokumen dulu, baru tambahkan sanksi 100% untuk dokumen yang terlambat dilunasi."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 75,
      verifikasi: "✅",
      kembaranDari: "A5-046",
      sejak: "9.5.4"
    },
    {
      id: "A5-196",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Pemeriksaan pada Oktober 2026 atas PT Sinar Kemasindo menemukan dokumen berikut, semuanya belum daluwarsa dan tanpa kesepakatan lain mengenai pembayaran bea meterai: sembilan kuitansi bernilai Rp7.250.000 sampai Rp42.000.000 yang diterima PT Sinar Kemasindo dari pemasok sepanjang 2025 tanpa meterai; dua kuitansi bernilai Rp3.400.000 dan Rp4.750.000 yang diterimanya pada 2025 tanpa meterai; serta empat surat perjanjian (rangkap milik PT Sinar Kemasindo) yang ditandatangani pada 2024 dan masing-masing dibubuhi meterai tempel lama Rp6.000 dan Rp3.000 (total Rp9.000). Besarnya sanksi administratif, di luar pokok bea meterai, atas dokumen tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp90.000", B: "Rp150.000", C: "Rp130.000", D: "Rp260.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Meterai lama Rp6.000 dan Rp3.000 hanya dapat dipakai sampai akhir 2021, sehingga keempat perjanjian yang ditandatangani pada 2024 dianggap tidak dibubuhi meterai, sama seperti sembilan kuitansi tanpa meterai. Dua kuitansi bernilai tidak lebih dari Rp5.000.000 bukan objek bea meterai. Sanksi 100% × Rp10.000 dikenakan atas 13 dokumen.",
        jejakHitung: [
          ["Kuitansi > Rp5.000.000 tanpa meterai", "9 dokumen"],
          ["Perjanjian bermeterai lama (tidak sah)", "4 dokumen"],
          ["Kuitansi ≤ Rp5.000.000", "bukan objek"],
          ["Sanksi 100% × Rp10.000 × 13", "Rp130.000"],
          ["Pokok (tidak ditanya)", "Rp130.000"]
        ],
        mengapaSalah: {
          A: "Menganggap meterai gabungan Rp9.000 masih sah sehingga hanya sembilan kuitansi dikenai sanksi.",
          B: "Ikut mengenakan sanksi pada dua kuitansi yang nilainya tidak lebih dari Rp5.000.000 dan bukan objek bea meterai.",
          D: "Menjumlahkan pokok dan sanksi, padahal yang ditanya sanksi di luar pokok."
        },
        jebakan: "Pilah dulu: dokumen bukan objek, dokumen tanpa meterai, dan dokumen bermeterai tidak sah. Lalu baca pertanyaannya: sanksi saja."
      },
      dasarHukum: [{ pasal: "Pasal 18 dan Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 28 huruf b UU 10/2020 (Ketentuan Peralihan)", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 44, Pasal 45, dan Pasal 49 huruf a", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-047",
      sejak: "9.5.4"
    },
    {
      id: "A5-197",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Selama Oktober 2026 kantor pajak mencatat empat peristiwa: (1) Tuan Darma mencetak tiruan meterai tempel Rp10.000 dengan printer berwarna, lalu menempelkannya pada kuitansi yang diterimanya seolah-olah meterai asli; (2) Nyonya Wulan menyimpan 300 lembar meterai tempel palsu di tokonya dan menawarkannya kepada pembeli seolah-olah asli; (3) PT Kas Nusantara selaku pemungut bea meterai terlambat menyampaikan SPT Masa Bea Meterai dua masa berturut-turut; (4) seorang notaris menerima dan melekatkan pada aktanya surat kuasa yang bea meterainya belum dibayar. Perbuatan yang diancam sanksi pidana menurut UU 10/2020 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(1) dan (2)", B: "(2) saja", C: "(1), (2), dan (4)", D: "(1), (2), dan (3)" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meniru atau memalsu meterai dengan maksud memakainya sebagai meterai asli diancam pidana Pasal 24, dan memakai, menawarkan, atau mempunyai persediaan untuk dijual meterai palsu diancam pidana Pasal 25. Pemungut yang terlambat melapor ditagih dengan STP menurut UU KUP (Pasal 11 ayat (4)), dan pejabat seperti notaris yang menerima atau melekatkan dokumen yang bea meterainya belum dibayar dikenai sanksi administratif (Pasal 21 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: {
          B: "Perbuatan (1) juga pidana: meniru meterai untuk dipakai sebagai meterai asli masuk Pasal 24, dan memakainya masuk Pasal 25.",
          C: "Pelanggaran larangan Pasal 21 oleh notaris dikenai sanksi administratif sesuai peraturan perundang-undangan (Pasal 21 ayat (2)), bukan pidana.",
          D: "Keterlambatan pemungut melaporkan pemungutan dan penyetoran ditagih dengan surat tagihan pajak (Pasal 11 ayat (4)), bukan pidana."
        },
        jebakan: "Pidana bea meterai menyangkut keaslian dan pemakaian ulang meterai, bukan kelalaian administrasi pemungut atau pejabat."
      },
      dasarHukum: [{ pasal: "Pasal 24–26 UU 10/2020 (ketentuan pidana)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 11 dan Pasal 21 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-048",
      sejak: "9.5.4"
    },
    {
      id: "A5-198",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Catatan SOP lama CV Damar Sejati menyebut bahwa atas kuitansi yang terlambat dimeteraikan, bea meterainya dilunasi dengan satu meterai tempel Rp10.000 dan sanksinya dilunasi dengan menempelkan satu meterai tempel Rp10.000 lagi pada kuitansi yang sama. Untuk memperbarui SOP per November 2026, ketentuan pemeteraian kemudian yang benar atas dokumen yang bea meterainya tidak dibayar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bea meterai Rp10.000 ditambah sanksi 100%, keduanya dilunasi dengan menempelkan dua meterai tempel pada dokumen", B: "Bea meterai Rp10.000 ditambah sanksi 100% dari bea meterai terutang, dan sanksinya dibayar dengan Surat Setoran Pajak", C: "Bea meterai Rp10.000 ditambah sanksi 200% dari bea meterai terutang, dan sanksinya dibayar dengan Surat Setoran Pajak", D: "Bea meterai Rp10.000 ditambah bunga 2% per bulan sejak saat terutang, dan bunganya dibayar dengan Surat Setoran Pajak" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "angka-usang", D: "lupa-pasal" },
      pembahasan: {
        inti: "Atas dokumen yang bea meterainya tidak dibayar, pemeteraian kemudian meliputi bea meterai terutang ditambah sanksi administratif 100% dari bea meterai terutang (Pasal 18 UU 10/2020; Pasal 49 huruf a PMK 78/2024 untuk dokumen yang terutang sejak 1 Januari 2021). Bea meterainya dapat dibayar dengan meterai tempel, meterai elektronik, atau Surat Setoran Pajak, sedangkan sanksinya dibayar dengan Surat Setoran Pajak atau sarana yang disamakan (Pasal 50 PMK 78/2024).",
        jejakHitung: [
          ["Pokok", "Rp10.000"],
          ["Sanksi 100% × Rp10.000 (dibayar dengan SSP)", "Rp10.000"],
          ["Total per dokumen", "Rp20.000"]
        ],
        mengapaSalah: {
          A: "Sanksi administratif tidak dilunasi dengan meterai tempel; Pasal 50 ayat (2) PMK 78/2024 menentukan pembayarannya dengan Surat Setoran Pajak atau sarana yang disamakan.",
          C: "Sanksi 200% hanya untuk dokumen yang terutang sebelum 1 Januari 2021 (Pasal 49 huruf b PMK 78/2024); dokumen kini dikenai 100%.",
          D: "Sanksi pemeteraian kemudian berupa 100% dari bea meterai terutang, bukan bunga per bulan."
        },
        jebakan: "Bedakan sarana pembayaran pokok (meterai atau SSP) dari sarana pembayaran sanksi (SSP)."
      },
      dasarHukum: [{ pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 Pasal 49 dan Pasal 50", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "A5-052",
      sejak: "9.5.4"
    },
    {
      id: "A5-199",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 9 ayat (1) UU 10/2020: \"Dokumen yang dibuat sepihak, Bea Meterai terutang oleh pihak yang menerima Dokumen.\" Pasal 42 PMK 78/2024: pembayaran dengan Surat Setoran Pajak dilakukan oleh Pihak Yang Terutang \"dalam hal: a. Pemeteraian Kemudian dengan jumlah lebih dari 50 (lima puluh) Dokumen; ...\", disertai daftar Dokumen dan Surat Setoran Pajak \"yang telah divalidasi dengan Nomor Transaksi Penerimaan Negara\" (Pasal 43 ayat (1)). Pasal 49 huruf a: bea meterai yang terutang \"ditambah dengan sanksi administratif sebesar 100% (seratus persen) dari Bea Meterai yang terutang\". Pasal 51: Pejabat Pos mengesahkan pemeteraian kemudian \"yang dilakukan dengan menggunakan Meterai Tempel\" (ayat (2)); Pejabat DJP mengesahkan yang dilakukan \"dengan menggunakan Meterai Tempel, Meterai Elektronik, dan/atau Surat Setoran Pajak\" (ayat (4)).",
      stem: "Pada 20 Oktober 2026, sebelum ada pemeriksaan DJP, CV Sumber Rejeki Niaga (distributor bahan kue) menelusuri arsip 2025 dan menemukan 94 kuitansi tanpa meterai yang masing-masing bernilai Rp6.000.000 sampai Rp38.000.000. Sebanyak 64 kuitansi dibuat pemasok sebagai tanda terima pembayaran dari CV dan diserahkan kepada CV, sedangkan 30 kuitansi dibuat CV sebagai tanda terima uang dari pelanggan dan sudah diserahkan kepada pelanggan. Tidak ada kesepakatan lain mengenai pihak yang membayar bea meterai. CV ingin menuntaskan kewajibannya sendiri dengan satu kode billing, tanpa membeli meterai tempel. Berdasarkan kutipan tersebut, langkah yang paling sesuai bagi CV Sumber Rejeki Niaga adalah ...",
      kataKualifikasi: ["paling sesuai"],
      opsi: { A: "Membayar Rp640.000 untuk 64 kuitansi tanpa sanksi karena dilunasi sukarela sebelum pemeriksaan, lalu menyimpan bukti setor bersama arsip kuitansi tanpa meminta pengesahan pejabat", B: "Membayar Rp1.880.000 untuk 94 kuitansi (pokok dan sanksi 100%) dengan kode billing, membuat daftar dokumen dan melekatkan bukti setor bervalidasi NTPN, lalu meminta cap pemeteraian kemudian dari Pejabat DJP", C: "Membayar Rp1.280.000 untuk 64 kuitansi (pokok dan sanksi 100%) dengan kode billing, membuat daftar dokumen dan melekatkan bukti setor bervalidasi NTPN, lalu meminta cap pemeteraian kemudian dari Pejabat DJP", D: "Membayar Rp1.280.000 untuk 64 kuitansi (pokok dan sanksi 100%) dengan kode billing, membuat daftar dokumen, lalu menyerahkan daftar dan bukti setor kepada Pejabat Pos untuk dibubuhi cap pemeteraian kemudian" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi adalah dokumen sepihak, sehingga bea meterainya terutang oleh penerima dokumen (Pasal 9 ayat (1) UU 10/2020): CV hanya menanggung 64 kuitansi dari pemasok, sedangkan 30 kuitansi yang diserahkan kepada pelanggan terutang oleh pelanggan. Karena tidak dilunasi saat diserahkan, pelunasannya adalah pemeteraian kemudian dengan pokok ditambah sanksi 100% walaupun sukarela (Pasal 18 UU 10/2020; Pasal 49 huruf a PMK 78/2024). Jumlahnya lebih dari 50 dokumen, sehingga boleh dibayar dengan Surat Setoran Pajak (Pasal 42 huruf a), disertai daftar dokumen dan bukti setor bervalidasi NTPN (Pasal 43 ayat (1)), lalu disahkan Pejabat DJP (Pasal 51 ayat (4)).",
        jejakHitung: [
          ["Kuitansi yang terutang oleh CV (diterima CV, Pasal 9 ayat (1))", "64 dokumen"],
          ["Syarat SSP: lebih dari 50 dokumen (Pasal 42 huruf a PMK 78/2024)", "terpenuhi"],
          ["Pokok 64 × Rp10.000", "Rp640.000"],
          ["Sanksi 100%", "Rp640.000"],
          ["Kode billing", "Rp1.280.000"],
          ["Pengesahan", "cap pemeteraian kemudian oleh Pejabat DJP"]
        ],
        mengapaSalah: {
          A: "Pelunasan sukarela tidak menghapus sanksi 100% atas dokumen yang tidak dilunasi pada saat terutang, dan pemeteraian kemudian selalu memerlukan pengesahan pejabat (Pasal 1 angka 6 UU 10/2020)",
          B: "Ikut menghitung 30 kuitansi yang diserahkan kepada pelanggan; dokumen sepihak terutang oleh penerimanya, yaitu pelanggan (Pasal 9 ayat (1))",
          D: "Pejabat Pos hanya mengesahkan pemeteraian kemudian yang dibayar dengan meterai tempel (Pasal 51 ayat (2) PMK 78/2024); pembayaran dengan Surat Setoran Pajak disahkan Pejabat DJP"
        },
        jebakan: "Pembuat kuitansi bukan pihak yang terutang: untuk dokumen sepihak, yang terutang adalah penerimanya. Setelah jumlah dokumen benar, baru diuji syarat SSP (lebih dari 50 dokumen) dan pejabat pengesahnya."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 6, Pasal 9, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 42, Pasal 43, Pasal 49, dan Pasal 51 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-056",
      sejak: "9.5.4"
    },
    {
      id: "A5-200",
      topik: "A5.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "PT Arunika Logistik menelaah arsip Februari sampai Agustus 2026 pada 21 Oktober 2026. Semua dokumen di bawah ini adalah dokumen atau rangkap yang bea meterainya terutang oleh PT Arunika Logistik, belum daluwarsa, dan belum pernah dipakai di pengadilan: (1) 30 kontrak elektronik bertanda tangan elektronik; 22 dibubuhi meterai elektronik melalui Sistem Meterai Elektronik dengan kode unik yang terbaca, sedangkan 8 hanya disisipi gambar hasil pindaian meterai tempel; (2) 16 surat perjanjian kertas; 10 dibubuhi meterai tempel Rp10.000 sesuai tata cara, sedangkan 6 ditempeli meterai tempel asli yang belum pernah dipakai tetapi direkatkan di sudut kiri atas halaman pertama, jauh dari tanda tangan di halaman terakhir; (3) 5 kuitansi tanpa meterai yang diterima perusahaan, masing-masing bernilai tepat Rp5.000.000. Jumlah yang harus dibayar PT Arunika Logistik melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp380.000", B: "Rp280.000", C: "Rp140.000", D: "Rp160.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meterai elektronik hanya sah bila dibubuhkan melalui Sistem Meterai Elektronik dengan kode unik (Pasal 44 ayat (2) PMK 78/2024), sehingga 8 kontrak bergambar pindaian dianggap tidak bermeterai. Meterai tempel asli pun tidak sah bila tidak direkatkan di tempat tanda tangan dan tidak ditandatangani sebagian di atasnya (Pasal 7 ayat (2) dan Pasal 44 ayat (1) huruf b), sehingga 6 perjanjian juga dianggap tidak dibubuhi meterai (Pasal 45). Keempat belas dokumen itu dimeteraikan kemudian dengan pokok ditambah sanksi 100%. Kuitansi tepat Rp5.000.000 bukan objek karena batasnya lebih dari Rp5.000.000.",
        jejakHitung: [
          ["Kontrak dengan gambar pindaian (tidak melalui Sistem Meterai Elektronik)", "8 dokumen"],
          ["Perjanjian dengan meterai tempel yang tidak dibubuhkan sesuai Pasal 7 ayat (2)", "6 dokumen"],
          ["Dokumen yang bea meterainya dianggap tidak dibayar", "14"],
          ["14 × (Rp10.000 + Rp10.000)", "Rp280.000"],
          ["Kuitansi tepat Rp5.000.000", "bukan objek (harus lebih dari Rp5.000.000)"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung 5 kuitansi bernilai tepat Rp5.000.000; objek bea meterai hanya kuitansi yang nilainya lebih dari Rp5.000.000",
          C: "Hanya menghitung pokok; dokumen yang tidak dilunasi pada saat terutang dikenai sanksi 100%",
          D: "Menganggap 6 meterai tempel asli tetap sah; pembubuhan yang tidak memenuhi Pasal 7 ayat (2) membuat pembayaran tidak sah dan dokumen dianggap tidak dibubuhi meterai"
        },
        jebakan: "Keaslian meterai saja belum cukup: cara pembubuhannya juga syarat sah. Perhatikan pula kata \"lebih dari\" pada batas Rp5.000.000."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 12, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (2), Pasal 44, Pasal 45, dan Pasal 49 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-079",
      sejak: "9.5.4"
    },
    {
      id: "A5-201",
      topik: "A5.4",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 59 ayat (4) PMK 78/2024: \"Penetapan Pemungut Bea Meterai sebagaimana dimaksud pada ayat (1) huruf a dan dalam Pasal 57 ayat (2) mulai berlaku terhitung sejak awal bulan berikutnya setelah tanggal surat penetapan.\" Pasal 6 ayat (1): \"Pembayaran Bea Meterai dilakukan oleh Pihak Yang Terutang pada saat terutang Bea Meterai.\" Pasal 19 ayat (6): \"Penyediaan Meterai Elektronik untuk Pemungut Bea Meterai dilakukan tanpa didahului Deposit oleh Pemungut Bea Meterai.\"",
      stem: "PT Bayar Cepat Nusantara, penyelenggara aplikasi pembayaran tagihan, menerima surat penetapan Pemungut Bea Meterai secara jabatan dari Kepala KPP tempatnya terdaftar, bertanggal 14 Agustus 2026. Selama 15 sampai 31 Agustus 2026 aplikasi itu memfasilitasi penerbitan 6.200 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 yang diserahkan kepada pengguna. Berdasarkan kutipan tersebut, kalimat yang paling tepat untuk SOP perusahaan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kedudukan sebagai pemungut berlaku sejak 1 September 2026; atas tanda terima 15 sampai 31 Agustus 2026, bea meterai tetap terutang dan dibayar oleh Pihak Yang Terutang, tidak dipungut perusahaan.", B: "Kedudukan sebagai pemungut berlaku sejak 14 Agustus 2026, tanggal surat penetapan; atas tanda terima 15 sampai 31 Agustus 2026, perusahaan wajib memungutnya untuk Masa Agustus 2026.", C: "Kedudukan sebagai pemungut berlaku sejak 1 September 2026; atas tanda terima 15 sampai 31 Agustus 2026, bea meterai tidak terutang karena perusahaan belum berstatus pemungut.", D: "Kedudukan sebagai pemungut berlaku sejak 1 September 2026, setelah perusahaan menyetor Deposit untuk memperoleh meterai elektronik dari Perum Peruri bagi pemungutan." },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Penetapan pemungut, termasuk penetapan secara jabatan, mulai berlaku sejak awal bulan berikutnya setelah tanggal surat penetapan (Pasal 59 ayat (4) PMK 78/2024): surat 14 Agustus 2026 berlaku 1 September 2026. Sebelum itu perusahaan belum pemungut, tetapi dokumen objek tetap terutang dan dibayar oleh Pihak Yang Terutang pada saat terutang (Pasal 6 ayat (1)).",
        jejakHitung: [
          ["Tanggal surat penetapan", "14 Agustus 2026"],
          ["Mulai berlaku (awal bulan berikutnya, Pasal 59 ayat (4))", "1 September 2026"],
          ["Tanda terima 15 sampai 31 Agustus 2026", "tetap terutang, dibayar Pihak Yang Terutang"]
        ],
        mengapaSalah: {
          B: "Penetapan tidak berlaku sejak tanggal surat, melainkan sejak awal bulan berikutnya (Pasal 59 ayat (4))",
          C: "Status pemungut tidak menentukan terutangnya bea meterai; dokumen objek tetap terutang dan dibayar Pihak Yang Terutang (Pasal 6 ayat (1))",
          D: "Meterai elektronik untuk pemungut disediakan tanpa Deposit (Pasal 19 ayat (6) PMK 78/2024); mekanisme deposit pemungut adalah aturan lama"
        },
        jebakan: "Tanggal surat penetapan bukan tanggal mulai berlaku. Dokumen yang terbit di sela waktu itu tidak bebas bea meterai; hanya cara pembayarannya yang belum melalui pemungutan."
      },
      dasarHukum: [{ pasal: "Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 6 ayat (1), Pasal 19 ayat (6), dan Pasal 59 ayat (4) PMK 78/2024 (penetapan pemungut, tanpa deposit)", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-086",
      sejak: "9.5.4"
    },
    {
      id: "A5-202",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 8 ayat (1) huruf e UU 10/2020: Bea Meterai terutang pada saat \"Dokumen digunakan di Indonesia, untuk Dokumen sebagaimana dimaksud dalam Pasal 3 ayat (2) yang dibuat di luar negeri.\" Pasal 17 dan 18: pemeteraian kemudian dilakukan untuk dokumen \"yang Bea Meterainya tidak atau kurang dibayar\", sebesar bea meterai yang terutang ditambah sanksi administratif 100% dari bea meterai yang terutang. Pasal 1 angka 6: \"Pemeteraian Kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan oleh Menteri.\" Pasal 50 ayat (2) PMK 78/2024: sanksi administratif dibayar \"dengan menggunakan Surat Setoran Pajak\".",
      stem: "PT Tirta Hijau Lestari menandatangani dua perjanjian dengan mitra asing di Singapura pada Mei 2026; rangkap milik PT Tirta Hijau Lestari, sebagai pihak yang menerima manfaat, keduanya berbentuk kertas. Rangkap perjanjian distribusi digunakan sebagai lampiran permohonan kredit ke bank di Surabaya pada 8 Juli 2026 tanpa dilunasi bea meterainya, sedangkan rangkap perjanjian kerahasiaan hanya disimpan di arsip dan belum pernah digunakan di Indonesia. Pada 21 Oktober 2026, sebelum ada pemeriksaan, perusahaan ingin menuntaskan kewajiban bea meterainya. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Melunasi kedua perjanjian masing-masing Rp20.000 (pokok dan sanksi 100%), lalu memperoleh pengesahan pemeteraian kemudian dari pejabat yang ditetapkan Menteri atas kedua dokumen", B: "Membubuhkan meterai tempel Rp10.000 tanpa sanksi pada perjanjian distribusi karena dilunasi sukarela sebelum pemeriksaan; perjanjian kerahasiaan belum terutang selama belum digunakan", C: "Membayar Rp20.000 untuk perjanjian distribusi dengan kode billing tanpa pengesahan karena pengesahan hanya untuk dokumen yang diajukan ke pengadilan; perjanjian kerahasiaan belum terutang", D: "Melunasi perjanjian distribusi Rp20.000 (pokok dengan meterai atau surat setoran pajak, sanksi 100% dengan surat setoran pajak) lalu memperoleh pengesahan pemeteraian kemudian; perjanjian kerahasiaan belum terutang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Dokumen yang dibuat di luar negeri terutang pada saat digunakan di Indonesia (Pasal 8 ayat (1) huruf e UU 10/2020). Perjanjian distribusi sudah digunakan pada 8 Juli 2026 tanpa dilunasi, sehingga menjadi dokumen yang bea meterainya tidak dibayar: dimeteraikan kemudian dengan pokok Rp10.000 (dibayar dengan meterai tempel, meterai elektronik, atau Surat Setoran Pajak, Pasal 50 ayat (1) PMK 78/2024) ditambah sanksi 100%, sanksinya dibayar dengan Surat Setoran Pajak (Pasal 50 ayat (2) PMK 78/2024), lalu disahkan pejabat (Pasal 1 angka 6). Perjanjian kerahasiaan belum digunakan di Indonesia sehingga belum terutang; bila kelak digunakan, cukup dilunasi Rp10.000 paling lambat saat digunakan.",
        jejakHitung: [
          ["Perjanjian distribusi: saat terutang", "8 Juli 2026 (digunakan di Indonesia)"],
          ["Pokok + sanksi 100%", "Rp10.000 + Rp10.000 = Rp20.000"],
          ["Perjanjian kerahasiaan", "belum terutang (belum digunakan di Indonesia)"],
          ["Langkah akhir", "pengesahan pemeteraian kemudian"]
        ],
        mengapaSalah: {
          A: "Perjanjian kerahasiaan belum digunakan di Indonesia sehingga belum terutang dan belum dapat dikenai sanksi (Pasal 8 ayat (1) huruf e)",
          B: "Saat terutang perjanjian distribusi (8 Juli 2026) sudah lewat tanpa pelunasan, sehingga pelunasannya merupakan pemeteraian kemudian dengan sanksi 100% dan pengesahan, walaupun sukarela",
          C: "Setiap pemeteraian kemudian memerlukan pengesahan pejabat yang ditetapkan Menteri (Pasal 1 angka 6), bukan hanya dokumen yang diajukan ke pengadilan"
        },
        jebakan: "Kedua perjanjian sama-sama dibuat di luar negeri, tetapi hanya yang sudah digunakan di Indonesia yang terutang. Kelonggaran tanpa sanksi hanya berlaku bila dilunasi paling lambat saat digunakan."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 6, Pasal 8 ayat (1) huruf e, Pasal 9 ayat (5), Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (tata cara pemeteraian kemudian; Pasal 50 ayat (1) dan ayat (2))", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      kembaranDari: "A5-092",
      sejak: "9.5.4"
    },
    {
      id: "A5-203",
      topik: "A5.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "UD Makmur Abadi pada Oktober 2026 menemukan 15 kuitansi pembelian tanpa meterai yang diterimanya sepanjang Mei 2026: 11 kuitansi bernilai Rp7.500.000 sampai Rp22.000.000 dan 4 kuitansi bernilai Rp2.500.000 sampai Rp4.000.000. UD Makmur Abadi memutuskan melakukan pemeteraian kemudian sebelum ada pemeriksaan. Jumlah yang harus dibayar UD Makmur Abadi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp110.000", B: "Rp330.000", C: "Rp300.000", D: "Rp220.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "Hanya kuitansi bernilai lebih dari Rp5.000.000 yang menjadi objek (Pasal 3 ayat (2) huruf g UU 10/2020). Kuitansi objek yang tidak dilunasi saat diserahkan dimeteraikan kemudian dengan pokok Rp10.000 ditambah sanksi 100% per dokumen, termasuk bila dilakukan sukarela (Pasal 17 dan 18).",
        jejakHitung: [
          ["Kuitansi objek (lebih dari Rp5.000.000)", "11 dokumen"],
          ["Pokok 11 × Rp10.000", "Rp110.000"],
          ["Sanksi 100%", "Rp110.000"],
          ["Total", "Rp220.000"]
        ],
        mengapaSalah: {
          A: "Menganggap pelunasan sukarela sebelum pemeriksaan bebas sanksi",
          B: "Memakai sanksi 200% warisan UU 13/1985 (11 × Rp30.000)",
          C: "Ikut menghitung 4 kuitansi bernilai Rp5.000.000 ke bawah yang bukan objek (15 × Rp20.000)"
        },
        jebakan: "Saring dulu objeknya, baru hitung pokok dan sanksi. Tidak ada pengurangan sanksi karena pelunasan sukarela."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 60,
      verifikasi: "✅",
      kembaranDari: "A5-094",
      sejak: "9.5.4"
    },
    {
      id: "A5-204",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "Dalam diskusi kelompok belajar, dua perbuatan dibahas: Saudara Bima membuat sendiri meterai tempel tiruan yang tampak asli, lalu dengan sengaja menawarkan dan menjualnya secara daring sebagai meterai asli; sedangkan CV Tunas Makmur tidak membubuhkan meterai pada 12 rangkap surat perjanjian sewa kendaraan yang diterimanya. Rumusan akibat hukum yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Saudara Bima diancam pidana penjara paling lama 3 tahun atau denda paling banyak Rp200.000.000, sedangkan CV Tunas Makmur dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 100% per dokumen.", B: "Saudara Bima diancam pidana penjara paling lama 7 tahun dan denda paling banyak Rp500.000.000, dan CV Tunas Makmur juga diancam pidana karena dengan sengaja tidak membubuhkan meterai pada rangkap yang diterimanya.", C: "Saudara Bima diancam pidana penjara paling lama 7 tahun dan denda paling banyak Rp500.000.000, sedangkan CV Tunas Makmur dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 100% per dokumen.", D: "Saudara Bima diancam pidana penjara paling lama 7 tahun dan denda paling banyak Rp500.000.000, sedangkan CV Tunas Makmur dikenai pemeteraian kemudian berupa bea meterai terutang ditambah sanksi administratif 200% per dokumen." },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Meniru atau memalsu meterai dengan maksud memakai atau meminta orang lain memakainya sebagai meterai asli (Pasal 24), serta menjual atau menawarkan meterai yang dipalsu (Pasal 25), diancam pidana penjara paling lama 7 tahun dan denda paling banyak Rp500.000.000. Tidak membubuhkan meterai bukan tindak pidana; akibatnya pemeteraian kemudian dengan sanksi administratif 100% (Pasal 17 dan 18).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ancaman 3 tahun atau Rp200.000.000 adalah Pasal 26 untuk meterai bekas yang tanda pemakaiannya dihilangkan, bukan meterai tiruan",
          B: "Tidak membubuhkan meterai bukan tindak pidana; akibatnya administratif",
          D: "Sanksi 200% adalah ketentuan UU 13/1985; kini 100%"
        },
        jebakan: "Bedakan meterai palsu atau tiruan (Pasal 24 dan 25: 7 tahun dan Rp500 juta) dari meterai bekas (Pasal 26: 3 tahun atau Rp200 juta). Kata \"sengaja\" tidak mengubah kelalaian membubuhkan meterai menjadi pidana."
      },
      dasarHukum: [{ pasal: "Pasal 24–26 UU 10/2020 (ketentuan pidana)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅",
      kembaranDari: "A5-098",
      sejak: "9.5.4"
    },
    {
      id: "A5-205",
      topik: "A5.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Pada Juli 2026 staf pengadaan PT Cahaya Mandiri Sejahtera membeli 150 lembar meterai tempel dari toko daring tidak resmi seharga Rp8.500 per lembar. Meterai itu dipakai pada 72 kuitansi bernilai lebih dari Rp5.000.000 yang diterima perusahaan, 24 kuitansi bernilai Rp3.000.000 sampai Rp4.800.000 yang juga diterima perusahaan, dan 20 surat perjanjian yang masing-masing dibuat dua rangkap (satu dipegang perusahaan, satu dipegang mitra); 14 lembar sisanya masih tersimpan. Tidak ada kesepakatan lain mengenai pihak yang membayar bea meterai. Pemeriksa pada Oktober 2026 memastikan seluruh meterai itu palsu; semua dokumen belum daluwarsa dan tidak pernah diajukan ke pengadilan. Jumlah yang harus dilunasi PT Cahaya Mandiri Sejahtera melalui pemeteraian kemudian adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.240.000", B: "Rp1.840.000", C: "Rp920.000", D: "Rp2.320.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meterai palsu tidak memenuhi syarat sah pembayaran (Pasal 44 ayat (1) PMK 78/2024), sehingga dokumen dianggap tidak dibubuhi meterai (Pasal 45). Yang dimeteraikan kemudian oleh perusahaan hanyalah dokumen objek yang terutang olehnya: 72 kuitansi lebih dari Rp5.000.000 yang diterimanya (Pasal 9 ayat (1)) dan 20 rangkap perjanjian yang dipegangnya (Pasal 9 ayat (2)). Kuitansi Rp5.000.000 ke bawah bukan objek, rangkap mitra terutang oleh mitra, dan meterai sisa tidak menimbulkan bea meterai.",
        jejakHitung: [
          ["Kuitansi objek yang diterima perusahaan", "72"],
          ["Rangkap perjanjian yang dipegang perusahaan", "20"],
          ["Dokumen terutang oleh perusahaan", "92"],
          ["Pokok 92 × Rp10.000", "Rp920.000"],
          ["Sanksi 100%", "Rp920.000"],
          ["Total", "Rp1.840.000"]
        ],
        mengapaSalah: {
          A: "Ikut menghitung 20 rangkap yang dipegang mitra; rangkap itu terutang oleh mitra (Pasal 9 ayat (2)): 112 × Rp20.000",
          C: "Hanya menghitung pokok; dokumen yang bea meterainya tidak dibayar dikenai sanksi 100%",
          D: "Ikut menghitung 24 kuitansi Rp5.000.000 ke bawah yang bukan objek: 116 × Rp20.000"
        },
        jebakan: "Harga beli Rp8.500 bukan pembayaran bea meterai, dan meterai yang tidak terpakai tidak dihitung. Pertanggungjawaban pidana atas meterai palsu (Pasal 24 dan 25) terpisah dari kewajiban pemeteraian kemudian."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (2) huruf g, Pasal 9, Pasal 12, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 24–25 UU 10/2020 (meterai palsu)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 44 dan Pasal 45 PMK 78/2024", berlakuSejak: "2024-11-01" }],
      anggaranDetik: 180,
      verifikasi: "✅",
      kembaranDari: "A5-101",
      sejak: "9.5.4"
    }
  ],
  kartu: [
    { id: "KT-A5-01", topik: "A5.1", tipe: "angka", depan: "Ambang dokumen penerimaan uang atau pelunasan utang?", belakang: "Lebih dari Rp5.000.000; tepat Rp5.000.000 tidak terutang", dasar: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "Rp250.000 dan Rp1.000.000 (UU 13/1985 jo. PP 24/2000)", dekTambahan: [] },
    { id: "KT-A5-02", topik: "A5.1", tipe: "definisi", depan: "Dua kelompok objek bea meterai (Pasal 3 ayat (1))?", belakang: "Dokumen kejadian perdata dan dokumen alat bukti di pengadilan", dasar: "Pasal 3 ayat (1) UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-03", topik: "A5.1", tipe: "pasal", depan: "Surat perjanjian bernilai Rp1.000.000: terutang bea meterai?", belakang: "Ya; perjanjian terutang tanpa ambang nilai", dasar: "Pasal 3 ayat (2) huruf a UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-04", topik: "A5.1", tipe: "pasal", depan: "Pasal 7 huruf a: dokumen apa yang bukan objek?", belakang: "Dokumen lalu lintas orang dan barang: konosemen, surat angkutan, bukti pengiriman", dasar: "Pasal 7 huruf a UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-05", topik: "A5.1", tipe: "definisi", depan: "Tanda terima gaji, THR, pensiun, pesangon: kena bea meterai?", belakang: "Tidak; pembayaran terkait hubungan kerja dikecualikan", dasar: "Pasal 7 huruf c UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-06", topik: "A5.1", tipe: "definisi", depan: "Dokumen elektronik termasuk objek bea meterai?", belakang: "Ya; termasuk 'dokumen', dilunasi dengan meterai elektronik", dasar: "Pasal 1 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "UU 13/1985 hanya mengatur dokumen kertas", dekTambahan: [] },
    { id: "KT-A5-07", topik: "A5.1", tipe: "definisi", depan: "Invoice Rp8.000.000 yang belum dibayar: terutang?", belakang: "Tidak; tidak menyebut penerimaan uang atau pelunasan", dasar: "Pasal 3 ayat (2) huruf g UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-08", topik: "A5.2", tipe: "pasal", depan: "Saat terutang surat perjanjian, akta notaris, akta PPAT?", belakang: "Saat dibubuhi tanda tangan", dasar: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-09", topik: "A5.2", tipe: "pasal", depan: "Saat terutang kuitansi, surat pernyataan, dokumen lelang?", belakang: "Saat diserahkan kepada pihak untuk siapa dokumen dibuat", dasar: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-10", topik: "A5.2", tipe: "pasal", depan: "Saat dan pihak terutang surat berharga (obligasi, cek)?", belakang: "Saat selesai dibuat; terutang oleh penerbit", dasar: "Pasal 8 ayat (1) huruf b dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-11", topik: "A5.2", tipe: "pasal", depan: "Dokumen dibuat di luar negeri: saat dan pihak terutang?", belakang: "Saat digunakan di Indonesia; oleh penerima manfaat", dasar: "Pasal 8 ayat (1) huruf e dan Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-12", topik: "A5.2", tipe: "definisi", depan: "Pihak terutang dokumen sepihak, misalnya kuitansi?", belakang: "Penerima dokumen; para pihak boleh sepakat siapa yang membayar", dasar: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-13", topik: "A5.2", tipe: "definisi", depan: "Pihak terutang dokumen yang dibuat dua pihak atau lebih?", belakang: "Masing-masing pihak atas dokumen (rangkap) yang diterimanya", dasar: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-14", topik: "A5.3", tipe: "angka", depan: "Tarif bea meterai sejak 1 Januari 2021?", belakang: "Rp10.000 tetap per dokumen, tanpa melihat nilai atau halaman", dasar: "Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "Rp3.000 dan Rp6.000 (UU 13/1985)", dekTambahan: [] },
    { id: "KT-A5-15", topik: "A5.3", tipe: "angka", depan: "Batas pemakaian meterai tempel Rp3.000/Rp6.000?", belakang: "31 Desember 2021, nilai gabungan paling sedikit Rp9.000", dasar: "Ketentuan Peralihan UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-16", topik: "A5.3", tipe: "prosedur", depan: "Sarana pelunasan bea meterai menurut Pasal 12?", belakang: "Meterai tempel, meterai elektronik, meterai bentuk lain, atau SSP", dasar: "Pasal 12 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-17", topik: "A5.3", tipe: "prosedur", depan: "Cara membubuhkan meterai tempel yang sah?", belakang: "Direkatkan utuh; tanda tangan sebagian di meterai, sebagian di kertas", dasar: "Pasal 12 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-18", topik: "A5.3", tipe: "definisi", depan: "Penerbit dan ciri meterai elektronik?", belakang: "Peruri; memuat kode unik dan keterangan tertentu", dasar: "Pasal 12 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-19", topik: "A5.3", tipe: "definisi", depan: "Meterai bentuk lain yang diperkenalkan PMK 78/2024?", belakang: "Meterai teraan digital", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: "Pengaturan meterai bentuk lain dalam PMK 133/2021 dan 134/2021", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-20", topik: "A5.4", tipe: "angka", depan: "Tenggat setor dan lapor pemungut bea meterai?", belakang: "Tanggal 15 bulan berikutnya (setor dan lapor)", dasar: "PMK 78/2024 Pasal 63 ayat (1) dan Pasal 64 ayat (1); PMK 81/2024 Pasal 94 ayat (2) huruf k (setor) dan Pasal 171 ayat (18) (lapor)", berlakuSejak: "2025-01-01", menggantikan: "Setor tanggal 10, lapor tanggal 20 (PMK 151/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-21", topik: "A5.4", tipe: "prosedur", depan: "Siapa yang menetapkan pemungut bea meterai?", belakang: "Kepala KPP dengan surat keputusan", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-22", topik: "A5.4", tipe: "prosedur", depan: "Deposit e-meterai bagi pemungut setelah PMK 78/2024?", belakang: "Dihapus; Peruri mendistribusikan langsung kepada pemungut", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: "Mekanisme deposit (PMK 151/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-23", topik: "A5.4", tipe: "angka", depan: "Denda SPT Masa Bea Meterai terlambat?", belakang: "Rp100.000 (SPT Masa lainnya)", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-24", topik: "A5.4", tipe: "pasal", depan: "Sanksi pemungut: tidak memungut/menyetor vs terlambat setor/lapor?", belakang: "Tidak pungut/setor: SKP + 100%; terlambat: STP sesuai UU KUP", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-25", topik: "A5.4", tipe: "pasal", depan: "PMK pelaksanaan bea meterai yang dicabut PMK 78/2024?", belakang: "PMK 133/2021, 134/2021, dan 151/2021", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: "PMK 133/2021, 134/2021, 151/2021", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-26", topik: "A5.5", tipe: "angka", depan: "Daluwarsa bea meterai yang terutang?", belakang: "5 tahun sejak saat terutang, untuk semua dokumen (sanksi 100% mengikuti pokoknya)", dasar: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-27", topik: "A5.5", tipe: "angka", depan: "Pemeteraian kemudian dokumen objek yang tidak dilunasi pada saat terutang?", belakang: "Rp20.000 per dokumen (Rp10.000 + sanksi 100%)", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "Pokok + sanksi 200% (UU 13/1985)", dekTambahan: [] },
    { id: "KT-A5-28", topik: "A5.5", tipe: "definisi", depan: "Pemeteraian kemudian tanpa sanksi berlaku untuk?", belakang: "Dokumen semula bukan objek yang diajukan sebagai alat bukti di pengadilan", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-29", topik: "A5.5", tipe: "prosedur", depan: "Pelaksana pengesahan pemeteraian kemudian?", belakang: "Pejabat yang ditetapkan Menteri: Pejabat Pos bila dibayar dengan meterai tempel; Pejabat DJP bila dibayar dengan meterai tempel, meterai elektronik, atau SSP, termasuk setelah SKP/STP", dasar: "Pasal 1 UU 10/2020; Pasal 51 dan 53 PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-30", topik: "A5.6", tipe: "angka", depan: "Sanksi administratif bea meterai bagi pihak terutang?", belakang: "100% dari bea meterai yang terutang", dasar: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "200% (UU 13/1985)", dekTambahan: [] },
    { id: "KT-A5-31", topik: "A5.6", tipe: "definisi", depan: "Tidak membubuhkan meterai: pidana atau perjanjian batal?", belakang: "Bukan keduanya; akibatnya administratif, perjanjian tetap sah", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-32", topik: "A5.6", tipe: "pasal", depan: "Perbuatan yang diancam pidana dalam UU Bea Meterai?", belakang: "Memalsu meterai; memakai atau mengedarkan meterai palsu atau bekas", dasar: "Pasal 24–26 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-33", topik: "A5.1", tipe: "definisi", depan: "Slip setoran simpanan dan buku tabungan: kena bea meterai?", belakang: "Tidak; dokumen yang menyebutkan simpanan uang (contoh Penjelasan: tabungan dan giro) dikecualikan berapa pun nilainya. Deposito disebut sebagai contoh surat berharga (Penjelasan Pasal 3 ayat (2) huruf d)", dasar: "Pasal 7 huruf g UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-34", topik: "A5.1", tipe: "pasal", depan: "Surat bukti gadai: kena bea meterai?", belakang: "Tidak; surat gadai dikecualikan", dasar: "Pasal 7 huruf h UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-35", topik: "A5.1", tipe: "definisi", depan: "Tanda terima uang antara cabang dan kantor pusat satu badan?", belakang: "Bukan objek (intern); antara induk dan anak perusahaan tetap objek", dasar: "Pasal 7 huruf f UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-36", topik: "A5.1", tipe: "pasal", depan: "Tanda pembagian dividen, bunga, atau kupon surat berharga?", belakang: "Bukan objek berapa pun nilainya", dasar: "Pasal 7 huruf i UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-37", topik: "A5.1", tipe: "angka", depan: "Cek dan bilyet giro: satuan dan ambang nilai?", belakang: "Rp10.000 per lembar; tanpa ambang nilai nominal", dasar: "Pasal 3 ayat (2) huruf d dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-38", topik: "A5.1", tipe: "definisi", depan: "Konfirmasi transaksi saham (trade confirmation): objek?", belakang: "Ya, dokumen transaksi surat berharga; di bursa ≤ Rp10 juta dibebaskan", dasar: "Pasal 3 ayat (2) huruf e UU 10/2020; PP 3/2022 (fasilitas pembebasan)", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-39", topik: "A5.1", tipe: "definisi", depan: "Dokumen lelang yang menjadi objek bea meterai?", belakang: "Kutipan, minuta, salinan, dan grosse risalah lelang", dasar: "Pasal 3 ayat (2) huruf f UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-40", topik: "A5.1", tipe: "prosedur", depan: "Di UKP, Bea Meterai diuji pada tingkat apa?", belakang: "Kelompok 5 Tingkat A; ikut diuji di Tingkat B dan C", dasar: "Rilis cakupan materi UKP BPPK Oktober 2026", berlakuSejak: "2026-10-16", menggantikan: "USKP: digabung dengan PBB di tingkat A", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-41", topik: "A5.2", tipe: "definisi", depan: "Cap tanda tangan, paraf, cap jempol: termasuk tanda tangan?", belakang: "Ya; termasuk juga tanda tangan elektronik", dasar: "Pasal 1 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-42", topik: "A5.2", tipe: "prosedur", depan: "Klausul 'seluruh meterai ditanggung pembeli' mengubah apa?", belakang: "Hanya pihak yang membayar; jumlah dan saat terutang tetap", dasar: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-43", topik: "A5.2", tipe: "pasal", depan: "Salinan akta notaris yang diterbitkan belakangan: saat terutang?", belakang: "Saat salinan ditandatangani notaris; tarif yang berlaku saat itu", dasar: "Pasal 8 ayat (1) huruf a UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-44", topik: "A5.3", tipe: "pasal", depan: "Berapa kali bea meterai dikenakan atas satu dokumen?", belakang: "Satu kali; tidak diulang saat diajukan ke pengadilan", dasar: "Pasal 4 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-45", topik: "A5.3", tipe: "definisi", depan: "Gambar meterai hasil pindai, meterai bekas, atau meterai palsu?", belakang: "Tidak melunasi; dokumen dianggap belum dibayar bea meterainya", dasar: "Pasal 12 UU 10/2020; PP 86/2021", berlakuSejak: "2021-08-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-46", topik: "A5.4", tipe: "prosedur", depan: "Dokumen yang bea meterainya sudah dipungut pemungut?", belakang: "Dianggap lunas; tidak dibubuhi meterai lagi", dasar: "Pasal 10–11 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-47", topik: "A5.4", tipe: "angka", depan: "Tenggat setor dan lapor pemungut jatuh pada hari libur?", belakang: "Bergeser ke hari kerja berikutnya", dasar: "PMK 78/2024 Pasal 65; PMK 81/2024 Pasal 100 (setor) dan Pasal 173 (lapor)", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-48", topik: "A5.4", tipe: "prosedur", depan: "Bukti setor dan bukti lapor pemungut di Coretax?", belakang: "NTPN untuk setoran; bukti penerimaan elektronik untuk SPT Masa", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-01-01", menggantikan: "Kanal pra-Coretax: e-Billing dan pelaporan SPT Masa lewat DJP Online", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-49", topik: "A5.4", tipe: "pasal", depan: "Pemungut tidak memungut bea meterai karena kesalahan sistem?", belakang: "SKP atas pemungut: pokok + sanksi 100%", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-50", topik: "A5.5", tipe: "angka", depan: "Dokumen luar negeri sudah dipakai di Indonesia tanpa dilunasi?", belakang: "Rp10.000 + sanksi 100% = Rp20.000, lewat pemeteraian kemudian", dasar: "Pasal 8 ayat (1) huruf e, Pasal 17–18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-51", topik: "A5.5", tipe: "pasal", depan: "Siapa yang dilarang menerima dokumen yang bea meterainya belum lunas?", belakang: "Hakim, panitera, jurusita, notaris, PPAT, ASN, dan pejabat negara", dasar: "Pasal 21 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-52", topik: "A5.6", tipe: "pasal", depan: "Sanksi bea meterai di SPT PPh: biaya atau bukan?", belakang: "Lazimnya bukan biaya (koreksi positif sebagai sanksi administrasi di bidang perpajakan, Pasal 9 ayat (1) huruf k UU PPh), tetapi naskah tidak menggolongkan sanksi 100% bea meterai secara tegas ke bunga, denda, atau kenaikan; pokok bea meterai tetap biaya", dasar: "Pasal 9 ayat (1) huruf k dan Pasal 6 ayat (1) huruf a UU PPh; Pasal 11 ayat (3), Pasal 18 ayat (2), dan Pasal 19 ayat (2) UU 10/2020", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-53", topik: "A5.6", tipe: "angka", depan: "Bunga STP pemungut terlambat setor: batas lama?", belakang: "Paling lama 24 bulan; bagian bulan dihitung penuh", dasar: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-A5-01", judul: "Audit arsip dokumen CV Sinar Logistik", topik: "A5.5", estimasiMenit: 15,
      narasi: "Pada 16 Oktober 2026 pemeriksa menelaah arsip CV Sinar Logistik, perusahaan ekspedisi. Ditemukan dokumen tanpa meterai: (a) 11 kuitansi sewa gudang dan perbaikan armada bernilai Rp6.500.000–Rp40.000.000 yang dibuat pemasok dan diterima CV pada 2024–2025; (b) 3 surat perjanjian kerja sama angkutan yang ditandatangani pada 2025, rangkap milik CV; (c) 25 surat jalan pengiriman barang bernilai Rp10.000.000–Rp90.000.000; (d) 6 kuitansi yang masing-masing tepat Rp5.000.000 yang diterima pada 2025; (e) 2 kuitansi Rp8.000.000 yang diterima CV pada 20 Agustus 2021; (f) 1 perjanjian sewa forklift yang ditandatangani 12 Desember 2021, rangkap milik CV. Selain itu, 2 kontrak dengan mitra Malaysia yang ditandatangani di Kuala Lumpur pada September 2026 akan digunakan untuk pengajuan kredit di Indonesia pada November 2026 dan belum dimeteraikan. Para pihak tidak memperjanjikan lain tentang pembebanan meterai.",
      data: [ ["Tanggal pemeriksaan", "16 Oktober 2026"], ["(a) Kuitansi Rp6,5–40 juta (2024–2025)", "11 dokumen"], ["(b) Perjanjian angkutan 2025 (rangkap CV)", "3 dokumen"], ["(c) Surat jalan", "25 dokumen"], ["(d) Kuitansi tepat Rp5.000.000", "6 dokumen"], ["(e) Kuitansi Rp8 juta, 20 Agustus 2021", "2 dokumen"], ["(f) Perjanjian forklift, 12 Desember 2021", "1 dokumen"], ["Kontrak dari Kuala Lumpur (belum digunakan)", "2 dokumen"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa dokumen (a)–(f) yang merupakan objek bea meterai dan belum daluwarsa per 16 Oktober 2026?", tipe: "angka", jawaban: 15, toleransi: 0,
          petunjuk: ["Keluarkan dulu bukan objek: surat jalan (Pasal 7 huruf a) dan kuitansi yang tidak lebih dari Rp5 juta", "Daluwarsa 5 tahun sejak saat terutang: 20 Agustus 2021 sudah lewat, 12 Desember 2021 belum", "11 + 3 + 0 + 0 + 0 + 1 = 15"],
          penjelasan: "Objek yang masih dapat ditagih: 11 kuitansi (a), 3 perjanjian (b), dan perjanjian forklift (f). Surat jalan dikecualikan Pasal 7 huruf a, kuitansi tepat Rp5.000.000 tidak memenuhi syarat 'lebih dari', dan kuitansi Agustus 2021 daluwarsa pada Agustus 2026 (Pasal 23)." },
        { no: 2, pertanyaan: "Berapa pokok bea meterai atas dokumen tersebut (Rp)?", tipe: "angka", jawaban: 150000, toleransi: 0,
          petunjuk: ["Tarif tetap per dokumen (Pasal 5)", "Rp10.000 per dokumen", "15 × Rp10.000 = Rp150.000"],
          penjelasan: "Tarif bea meterai Rp10.000 per dokumen tanpa memandang nilai dokumen." },
        { no: 3, pertanyaan: "Berapa sanksi administratif yang menyertai pemeteraian kemudian (Rp)?", tipe: "angka", jawaban: 150000, toleransi: 0,
          petunjuk: ["Semua dokumen sudah lewat saat terutang tanpa dilunasi", "Sanksi 100% dari bea meterai terutang (Pasal 18)", "15 × Rp10.000 = Rp150.000"],
          penjelasan: "Sanksi 100% dihitung dari bea meterai terutang, bukan dari nilai dokumen, dan dibayar bersama pokok." },
        { no: 4, pertanyaan: "Berapa total yang harus dilunasi melalui pemeteraian kemudian atas dokumen (a)–(f) (Rp)?", tipe: "angka", jawaban: 300000, toleransi: 0,
          petunjuk: ["Pokok + sanksi", "Rp150.000 + Rp150.000", "Jawaban: Rp300.000"],
          penjelasan: "Setiap dokumen yang lewat saat terutang menjadi Rp20.000; 15 × Rp20.000 = Rp300.000. Bila kekurangan ini ditetapkan pemeriksa, jumlah yang sama dituangkan dalam SKP (Pasal 19 UU 10/2020)." },
        { no: 5, pertanyaan: "Bagaimana perlakuan 2 kontrak dari Kuala Lumpur bila bea meterainya dilunasi sebelum digunakan pada November 2026?", tipe: "pilihan",
          opsi: { A: "Rp10.000 per kontrak tanpa sanksi (total Rp20.000)", B: "Rp20.000 per kontrak karena belum bermeterai", C: "Tidak terutang karena ditandatangani di luar negeri", D: "Terutang sejak ditandatangani di Kuala Lumpur dengan sanksi 100%" }, jawaban: "A",
          petunjuk: ["Dokumen luar negeri terutang saat digunakan di Indonesia (Pasal 8)", "Dilunasi sebelum saat terutang berarti tidak ada keterlambatan", "Jawaban: A"],
          penjelasan: "Karena saat terutang (penggunaan di Indonesia) belum tiba, pelunasan dengan meterai atau SSP cukup sebesar bea meterai terutang tanpa sanksi; sanksi 100% baru timbul bila kontrak sudah digunakan tanpa dilunasi." },
        { no: 6, pertanyaan: "Siapa pihak yang terutang atas 11 kuitansi pada huruf (a)?", tipe: "pilihan",
          opsi: { A: "Pemasok yang membuat kuitansi", B: "CV Sinar Logistik sebagai penerima dokumen", C: "Pemasok dan CV secara tanggung renteng", D: "Pihak yang ditunjuk pemeriksa" }, jawaban: "B",
          petunjuk: ["Kuitansi adalah dokumen sepihak", "Pasal 9: dokumen sepihak terutang oleh penerima dokumen", "Jawaban: B"],
          penjelasan: "Para pihak tidak memperjanjikan lain, sehingga berlaku Pasal 9: kuitansi terutang oleh pihak yang menerimanya, yaitu CV Sinar Logistik." }
      ],
      kesimpulan: "Pilah dokumen dengan urutan bukan objek (Pasal 7) → objek dan ambang (Pasal 3) → daluwarsa (Pasal 23). Lima belas dokumen dimeteraikan kemudian dengan Rp20.000 per dokumen (Rp300.000), sedangkan dua kontrak luar negeri yang dilunasi sebelum digunakan cukup Rp10.000 per kontrak.",
      kalkulatorRef: "bea-meterai"
    },
    {
      id: "K-A5-02", judul: "Bank pemungut bea meterai yang terlambat menyetor", topik: "A5.4", estimasiMenit: 15,
      narasi: "Bank Arunika telah ditetapkan Kepala KPP sebagai pemungut bea meterai atas cek, bilyet giro, dan dokumen tanda terima pembayaran digital yang difasilitasinya. Pada Masa September 2026 bank menerima dari perusahaan percetakan pemegang izin pembuatan Meterai Percetakan 40 buku cek dan 24 buku bilyet giro (masing-masing 25 lembar) yang telah dibubuhi Meterai Percetakan atas permintaannya, serta memfasilitasi 6.300 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 dan 9.800 tanda terima bernilai Rp5.000.000 ke bawah. Karena migrasi sistem, bea meterai Masa September 2026 baru disetor pada 18 November 2026, dan SPT Masa Bea Meterai disampaikan pada 19 November 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP yang berlaku 1,01% per bulan.",
      data: [ ["Buku cek", "40 buku × 25 lembar"], ["Buku bilyet giro", "24 buku × 25 lembar"], ["Tanda terima digital > Rp5 juta", "6.300 dokumen"], ["Tanda terima digital ≤ Rp5 juta", "9.800 dokumen"], ["Tanggal setor", "18 November 2026"], ["Tanggal lapor SPT Masa", "19 November 2026"], ["Tarif bunga (asumsi)", "1,01% per bulan"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa lembar cek dan bilyet giro yang bea meterainya dipungut?", tipe: "angka", jawaban: 1600, toleransi: 0,
          petunjuk: ["Satuan dokumen adalah lembar, bukan buku", "Cek 40 × 25 = 1.000; bilyet giro 24 × 25 = 600", "Jawaban: 1.600 lembar"],
          penjelasan: "Setiap lembar cek dan bilyet giro adalah surat berharga tersendiri. Bea meterainya dipungut pada saat bank menerima cek dan bilyet giro bermeterai percetakan dari pemegang izin pembuatan Meterai Percetakan (Pasal 61 huruf a PMK 78/2024), bukan saat buku diserahkan kepada nasabah." },
        { no: 2, pertanyaan: "Berapa total bea meterai yang wajib dipungut untuk Masa September 2026 (Rp)?", tipe: "angka", jawaban: 79000000, toleransi: 0,
          petunjuk: ["Tanda terima ≤ Rp5 juta tidak terutang", "1.600 lembar + 6.300 tanda terima = 7.900 dokumen", "7.900 × Rp10.000 = Rp79.000.000"],
          penjelasan: "Rp16.000.000 atas cek dan bilyet giro ditambah Rp63.000.000 atas tanda terima digital di atas Rp5 juta." },
        { no: 3, pertanyaan: "Kapan jatuh tempo penyetoran dan pelaporan bea meterai Masa September 2026?", tipe: "pilihan",
          opsi: { A: "Setor dan lapor 15 Oktober 2026", B: "Setor 10 Oktober, lapor 20 Oktober 2026", C: "Setor 15 Oktober, lapor 20 Oktober 2026", D: "Setor 15 Oktober, lapor 31 Oktober 2026" }, jawaban: "A",
          petunjuk: ["PMK 78/2024 menggantikan PMK 151/2021", "Setor dan lapor disatukan pada tanggal 15", "15 Oktober 2026 hari Kamis; jawaban A"],
          penjelasan: "Tenggat setor dan lapor pemungut adalah tanggal 15 bulan berikutnya; ketentuan 10/20 sudah dicabut." },
        { no: 4, pertanyaan: "Berapa bulan bunga keterlambatan penyetoran?", tipe: "angka", jawaban: 2, toleransi: 0,
          petunjuk: ["Dihitung dari 15 Oktober sampai 18 November 2026", "15 Oktober–15 November = 1 bulan; sisa 3 hari = bagian bulan", "Bagian bulan dihitung penuh: 2 bulan"],
          penjelasan: "Pasal 9 ayat (2a) UU KUP: bagian dari bulan dihitung penuh satu bulan." },
        { no: 5, pertanyaan: "Berapa bunga Pasal 9 ayat (2a) yang dikenakan (Rp)?", tipe: "angka", jawaban: 1595800, toleransi: 100,
          petunjuk: ["Pokok × tarif × jumlah bulan", "79.000.000 × 1,01% = 797.900 per bulan", "797.900 × 2 = Rp1.595.800"],
          penjelasan: "Bea meterai disetor penuh walau terlambat, sehingga pemungut ditagih dengan STP berupa bunga menurut UU KUP (Pasal 11 UU 10/2020); sanksi 100% hanya untuk bea meterai yang tidak dipungut atau tidak disetor." },
        { no: 6, pertanyaan: "Berapa total sanksi administratif termasuk denda keterlambatan SPT Masa (Rp)?", tipe: "angka", jawaban: 1695800, toleransi: 100,
          petunjuk: ["SPT Masa disampaikan setelah 15 Oktober 2026", "Denda SPT Masa lainnya Rp100.000 (Pasal 7 ayat (1) UU KUP)", "1.595.800 + 100.000 = Rp1.695.800"],
          penjelasan: "Total sanksi adalah bunga atas setoran terlambat ditambah denda SPT Masa Rp100.000." }
      ],
      kesimpulan: "Hitung dokumen per lembar dan saring ambang Rp5 juta (Rp79.000.000), tetapkan tenggat tanggal 15 (PMK 78/2024), lalu terapkan sanksi pemungut yang terlambat setor dan lapor (STP sesuai UU KUP, Pasal 11 UU 10/2020): bunga 2 bulan × 1,01% (Rp1.595.800) dan denda SPT Masa Rp100.000, sehingga total sanksi Rp1.695.800.",
      kalkulatorRef: "sanksi-bunga"
    },
    {
      id: "K-A5-03", judul: "Dokumen dalam penjualan ruko: saat terutang dan pihak terutang", topik: "A5.2", estimasiMenit: 12,
      narasi: "PT Griya Pratama (pengembang) menjual satu unit ruko kepada Tuan Hendra pada 2026. Pada 5 Februari 2026 kedua pihak menandatangani PPJB dalam 2 rangkap asli, satu untuk tiap pihak. Pada 6 Februari 2026 PT Griya Pratama membuat dan menyerahkan kuitansi uang muka Rp150.000.000 kepada Tuan Hendra. Pada 12 Februari 2026 Tuan Hendra menandatangani surat pernyataan kesanggupan melunasi, yang baru diserahkan kepada PT Griya Pratama pada 16 Februari 2026. Tidak ada klausul tentang pembebanan meterai. Pada Oktober 2026 diketahui kuitansi uang muka tidak pernah dibubuhi meterai, sedangkan dokumen lain bermeterai sah.",
      data: [ ["PPJB (2 rangkap)", "ditandatangani 5 Februari 2026"], ["Kuitansi uang muka Rp150 juta", "diserahkan 6 Februari 2026"], ["Surat pernyataan", "ditandatangani 12 Februari, diserahkan 16 Februari 2026"], ["Kuitansi tanpa meterai", "diketahui Oktober 2026"] ],
      langkah: [
        { no: 1, pertanyaan: "Kapan bea meterai atas PPJB terutang?", tipe: "pilihan",
          opsi: { A: "5 Februari 2026", B: "6 Februari 2026", C: "16 Februari 2026", D: "Saat akta jual beli ditandatangani" }, jawaban: "A",
          petunjuk: ["PPJB adalah surat perjanjian", "Pasal 8 ayat (1) huruf a: saat dibubuhi tanda tangan", "Jawaban: A"],
          penjelasan: "Surat perjanjian beserta rangkapnya terutang saat dibubuhi tanda tangan." },
        { no: 2, pertanyaan: "Kapan bea meterai atas surat pernyataan terutang?", tipe: "pilihan",
          opsi: { A: "12 Februari 2026", B: "16 Februari 2026", C: "5 Februari 2026", D: "Tidak terutang karena dibuat sepihak" }, jawaban: "B",
          petunjuk: ["Surat pernyataan berbeda dengan surat perjanjian", "Pasal 8 ayat (1) huruf c: saat diserahkan", "Jawaban: B"],
          penjelasan: "Surat pernyataan terutang saat diserahkan kepada pihak untuk siapa dokumen dibuat, yaitu 16 Februari 2026." },
        { no: 3, pertanyaan: "Siapa pihak yang terutang atas kuitansi uang muka?", tipe: "pilihan",
          opsi: { A: "PT Griya Pratama sebagai pembuat", B: "Tuan Hendra sebagai penerima dokumen", C: "Keduanya masing-masing 50%", D: "Notaris yang membuat PPJB" }, jawaban: "B",
          petunjuk: ["Kuitansi adalah dokumen sepihak", "Pasal 9: dokumen sepihak terutang oleh penerima dokumen", "Jawaban: B"],
          penjelasan: "Tanpa kesepakatan lain, kuitansi terutang oleh pihak yang menerimanya." },
        { no: 4, pertanyaan: "Berapa total bea meterai yang terutang atas seluruh dokumen transaksi ini (Rp)?", tipe: "angka", jawaban: 40000, toleransi: 0,
          petunjuk: ["PPJB 2 rangkap, kuitansi 1, surat pernyataan 1", "4 dokumen × Rp10.000", "Jawaban: Rp40.000"],
          penjelasan: "Tarif tetap Rp10.000 per dokumen; nilai uang muka Rp150 juta tidak memengaruhi tarif." },
        { no: 5, pertanyaan: "Berapa yang harus dibayar pihak terutang untuk pemeteraian kemudian kuitansi uang muka pada Oktober 2026 (Rp)?", tipe: "angka", jawaban: 20000, toleransi: 0,
          petunjuk: ["Saat terutang 6 Februari 2026 sudah lewat tanpa pelunasan", "Pokok Rp10.000 + sanksi 100%", "Jawaban: Rp20.000"],
          penjelasan: "Pemeteraian kemudian atas dokumen yang bea meterainya tidak dibayar meliputi pokok dan sanksi 100% (Pasal 17–18)." }
      ],
      kesimpulan: "Satu transaksi properti memuat tiga saat terutang berbeda (tanda tangan, penyerahan kuitansi, penyerahan surat pernyataan) dan dua pola pihak terutang. Total bea meterai Rp40.000; kuitansi yang tidak dibubuhi meterai dilunasi Tuan Hendra sebesar Rp20.000 melalui pemeteraian kemudian.",
      kalkulatorRef: "bea-meterai"
    },
    {
      id: "K-A5-04", judul: "Telaah dokumen Oktober 2026 sebuah rumah sakit swasta", topik: "A5.2", estimasiMenit: 18,
      narasi: "PT RS Harapan Sehat (rumah sakit swasta, belum ditetapkan sebagai pemungut bea meterai) menelaah dokumen Oktober 2026 menjelang audit internal. (a) Perjanjian kerja sama layanan dengan 3 perusahaan asuransi, masing-masing 2 rangkap asli (satu untuk rumah sakit), ditandatangani 1 Oktober 2026. (b) 14 kuitansi pemasok obat yang diterima rumah sakit pada Oktober 2026: 9 bernilai Rp5.200.000–Rp88.000.000, 3 tepat Rp5.000.000, dan 2 di bawah Rp5.000.000. (c) 420 kuitansi pembayaran pasien yang dibuat rumah sakit dan diserahkan kepada pasien, 150 di antaranya bernilai lebih dari Rp5.000.000; syarat layanan menyatakan rumah sakit menanggung bea meterai kuitansi pasien. (d) Tanda terima gaji dan insentif 310 pegawai. (e) Promes Rp2.000.000.000 yang diterbitkan rumah sakit kepada bank dan selesai dibuat 15 Oktober 2026. (f) Kontrak pembelian alat MRI dengan pabrikan Jerman yang ditandatangani di Munich pada 20 September 2026, rangkap rumah sakit, yang digunakan untuk pengajuan pembiayaan di Jakarta pada 12 Oktober 2026. (g) Kuitansi honorarium 4 dokter tamu yang bukan pegawai, masing-masing Rp7.500.000, dibuat dokter dan diserahkan kepada rumah sakit. Selain syarat layanan pada (c), tidak ada kesepakatan tentang pembebanan meterai.",
      data: [ ["(a) Perjanjian asuransi", "3 perjanjian × 2 rangkap, ditandatangani 1 Oktober 2026"], ["(b) Kuitansi pemasok yang diterima", "9 di atas Rp5 juta; 3 tepat Rp5 juta; 2 di bawah Rp5 juta"], ["(c) Kuitansi pasien (bea meterai ditanggung RS)", "420 dokumen, 150 di atas Rp5 juta"], ["(d) Tanda terima gaji dan insentif", "310 pegawai"], ["(e) Promes diterbitkan RS", "selesai dibuat 15 Oktober 2026"], ["(f) Kontrak MRI dari Munich", "ditandatangani 20 September, digunakan 12 Oktober 2026"], ["(g) Kuitansi honor dokter tamu", "4 × Rp7.500.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa rangkap perjanjian (a) yang bea meterainya terutang oleh rumah sakit?", tipe: "angka", jawaban: 3, toleransi: 0,
          petunjuk: ["Dokumen dua pihak terutang oleh masing-masing pihak atas rangkap yang diterimanya", "Rumah sakit menerima satu rangkap dari tiap perjanjian", "3 perjanjian × 1 rangkap = 3"],
          penjelasan: "Pasal 9 UU 10/2020: rangkap milik perusahaan asuransi terutang oleh perusahaan asuransi masing-masing, sedangkan rumah sakit terutang atas 3 rangkap yang diterimanya." },
        { no: 2, pertanyaan: "Berapa kuitansi pemasok (b) yang terutang bea meterai?", tipe: "angka", jawaban: 9, toleransi: 0,
          petunjuk: ["Ambangnya 'lebih dari Rp5.000.000'", "Kuitansi tepat Rp5.000.000 dan di bawahnya tidak terutang", "Jawaban: 9 kuitansi"],
          penjelasan: "Pasal 3 ayat (2) huruf g; kuitansi adalah dokumen sepihak yang terutang oleh rumah sakit sebagai penerima (Pasal 9)." },
        { no: 3, pertanyaan: "Berapa bea meterai atas kuitansi pasien (c) yang ditanggung rumah sakit (Rp)?", tipe: "angka", jawaban: 1500000, toleransi: 0,
          petunjuk: ["Hanya kuitansi di atas Rp5.000.000 yang terutang", "150 × Rp10.000", "Jawaban: Rp1.500.000"],
          penjelasan: "Tanpa kesepakatan, kuitansi terutang oleh pasien sebagai penerima. Syarat layanan memindahkan pembayaran kepada rumah sakit (Pasal 9), tetapi tidak mengubah jumlah dokumen objek." },
        { no: 4, pertanyaan: "Kapan dan oleh siapa bea meterai atas promes (e) terutang?", tipe: "pilihan",
          opsi: { A: "15 Oktober 2026, oleh rumah sakit sebagai penerbit", B: "Saat diserahkan kepada bank, oleh bank sebagai penerima", C: "Saat promes jatuh tempo, oleh rumah sakit", D: "Tidak terutang karena promes merupakan dokumen pinjaman bank" }, jawaban: "A",
          petunjuk: ["Promes adalah surat berharga", "Pasal 8 ayat (1) huruf b dan Pasal 9: saat selesai dibuat, oleh penerbit", "Jawaban: A"],
          penjelasan: "Surat berharga terutang saat selesai dibuat dan terutang oleh pihak yang menerbitkannya." },
        { no: 5, pertanyaan: "Bagaimana perlakuan kontrak MRI (f)?", tipe: "pilihan",
          opsi: { A: "Terutang 20 September 2026 oleh pabrikan Jerman sebagai pembuat", B: "Terutang 12 Oktober 2026 oleh rumah sakit sebagai penerima manfaat; cukup Rp10.000 bila dilunasi paling lambat saat itu", C: "Tidak terutang karena dibuat di luar negeri", D: "Terutang 12 Oktober 2026 dengan sanksi 100% karena tidak dibubuhi meterai di Munich" }, jawaban: "B",
          petunjuk: ["Dokumen dibuat di luar negeri", "Pasal 8 ayat (1) huruf e dan Pasal 9: terutang saat digunakan di Indonesia oleh penerima manfaat", "Jawaban: B"],
          penjelasan: "Saat terutang kontrak MRI adalah 12 Oktober 2026, sehingga kontrak masuk rekap Oktober; sanksi baru timbul bila kontrak digunakan tanpa dilunasi." },
        { no: 6, pertanyaan: "Bagaimana status tanda terima gaji (d) dan kuitansi honor dokter tamu (g)?", tipe: "pilihan",
          opsi: { A: "Keduanya bukan objek karena berkaitan dengan jasa tenaga kesehatan", B: "Keduanya objek dan terutang oleh rumah sakit", C: "Tanda terima gaji bukan objek (Pasal 7 huruf c); kuitansi honor dokter tamu objek dan terutang oleh rumah sakit sebagai penerima", D: "Tanda terima gaji objek; kuitansi honor dokter tamu bukan objek" }, jawaban: "C",
          petunjuk: ["Pasal 7 huruf c hanya untuk pembayaran yang berkaitan dengan hubungan kerja", "Dokter tamu bukan pegawai", "Jawaban: C"],
          penjelasan: "Gaji dan insentif pegawai dikecualikan; honor dokter tamu bukan pembayaran hubungan kerja, sehingga 4 kuitansi di atas Rp5.000.000 itu terutang oleh rumah sakit sebagai penerima." },
        { no: 7, pertanyaan: "Berapa total bea meterai yang terutang atau ditanggung rumah sakit untuk Oktober 2026 (Rp)?", tipe: "angka", jawaban: 1680000, toleransi: 0,
          petunjuk: ["Jumlahkan dokumen dari langkah 1–6", "3 + 9 + 150 + 1 + 1 + 4 = 168 dokumen", "168 × Rp10.000 = Rp1.680.000"],
          penjelasan: "Rangkap perjanjian 3, kuitansi pemasok 9, kuitansi pasien 150, promes 1, kontrak MRI 1, dan kuitansi dokter tamu 4; masing-masing Rp10.000." }
      ],
      kesimpulan: "Pilah per dokumen: bukan objek (Pasal 7), ambang lebih dari Rp5 juta, saat terutang (kontrak MRI masuk Oktober karena digunakan di Indonesia), lalu pihak terutang dan kesepakatan pembebanan. Rumah sakit menanggung 168 dokumen atau Rp1.680.000 untuk Oktober 2026; bila kuitansi pemasok dibiarkan tanpa meterai, pemeteraian kemudiannya Rp20.000 per dokumen.",
      kalkulatorRef: "bea-meterai"
    },
    {
      id: "K-A5-05", judul: "Pemeriksaan pemungut sekuritas: STP, SKP, dan koreksi fiskal", topik: "A5.6", estimasiMenit: 18,
      narasi: "PT Sekuritas Nusa Prima ditetapkan Kepala KPP sebagai pemungut bea meterai atas dokumen transaksi surat berharga. Seluruh konfirmasi transaksi dalam kasus ini bernilai transaksi lebih dari Rp10.000.000, sehingga tidak ada yang memperoleh fasilitas pembebasan. Pemeriksaan pada Oktober 2026 atas Masa Juni–Agustus 2026 menemukan: Masa Juni — bea meterai atas 6.200 konfirmasi transaksi dipungut dan disetor penuh tepat waktu, tetapi SPT Masa baru disampaikan 28 Juli 2026 (jatuh tempo Rabu, 15 Juli 2026). Masa Juli — bea meterai atas 7.400 konfirmasi transaksi dipungut dan disetor penuh pada 2 September 2026, padahal jatuh tempo efektifnya Selasa, 18 Agustus 2026 karena 15–17 Agustus hari libur; SPT Masa disampaikan tepat waktu. Masa Agustus — dari 8.100 konfirmasi transaksi, bea meterai atas 7.300 dipungut dan disetor tepat waktu, 500 dipungut tetapi tidak disetor, dan 300 tidak dipungut karena gangguan sistem; SPT Masa disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Seluruh sanksi dibayar pada 2026 dan dibebankan dalam laporan laba rugi komersial.",
      data: [ ["Masa Juni", "6.200 dokumen; setor tepat waktu; SPT 28 Juli (jatuh tempo 15 Juli 2026)"], ["Masa Juli", "7.400 dokumen; disetor 2 September (jatuh tempo efektif 18 Agustus 2026)"], ["Masa Agustus", "7.300 disetor; 500 dipungut tidak disetor; 300 tidak dipungut"], ["Tarif bunga Pasal 9 ayat (2a) (asumsi)", "1,01% per bulan"], ["Denda SPT Masa lainnya", "Rp100.000"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa sanksi untuk Masa Juni (Rp)?", tipe: "angka", jawaban: 100000, toleransi: 0,
          petunjuk: ["Setoran tepat waktu sehingga tidak ada bunga", "SPT Masa terlambat: denda Pasal 7 ayat (1) UU KUP untuk SPT Masa lainnya", "Jawaban: Rp100.000"],
          penjelasan: "Pemungut yang terlambat melapor ditagih STP sesuai UU KUP (Pasal 11 UU 10/2020); SPT Masa Bea Meterai termasuk SPT Masa lainnya." },
        { no: 2, pertanyaan: "Berapa bulan bunga keterlambatan setor Masa Juli?", tipe: "angka", jawaban: 1, toleransi: 0,
          petunjuk: ["Jatuh tempo 15 Agustus 2026 bergeser ke Selasa, 18 Agustus 2026 karena hari libur", "Sampai 2 September 2026 kurang dari satu bulan (dihitung dari 15 Agustus pun hanya 18 hari)", "Bagian bulan dihitung 1 bulan penuh"],
          penjelasan: "Pasal 9 ayat (2a) UU KUP: bagian dari bulan dihitung penuh satu bulan; jatuh tempo yang jatuh pada hari libur bergeser ke hari kerja berikutnya." },
        { no: 3, pertanyaan: "Berapa bunga keterlambatan setor Masa Juli (Rp)?", tipe: "angka", jawaban: 747400, toleransi: 100,
          petunjuk: ["Pokok 7.400 × Rp10.000 = Rp74.000.000", "Bunga = pokok × 1,01% × 1 bulan", "Jawaban: Rp747.400"],
          penjelasan: "Setoran penuh yang terlambat ditagih STP berupa bunga, bukan sanksi 100%." },
        { no: 4, pertanyaan: "Berapa pokok bea meterai yang ditetapkan dalam SKP Masa Agustus (Rp)?", tipe: "angka", jawaban: 8000000, toleransi: 0,
          petunjuk: ["Masuk SKP: bea meterai yang tidak disetor dan yang tidak dipungut", "500 + 300 = 800 dokumen", "800 × Rp10.000 = Rp8.000.000"],
          penjelasan: "Pasal 11 UU 10/2020 menyamakan akibat tidak memungut dan tidak menyetor: ditetapkan dengan SKP." },
        { no: 5, pertanyaan: "Berapa sanksi administratif dalam SKP Masa Agustus (Rp)?", tipe: "angka", jawaban: 8000000, toleransi: 0,
          petunjuk: ["Sanksi untuk pemungut yang tidak memungut/tidak menyetor", "100% dari bea meterai dalam SKP", "Jawaban: Rp8.000.000"],
          penjelasan: "Sanksi 100% dari bea meterai yang tidak dipungut atau tidak disetor; alasan gangguan sistem tidak mengubah jenis sanksi." },
        { no: 6, pertanyaan: "Jenis ketetapan yang tepat untuk ketiga masa adalah ...", tipe: "pilihan",
          opsi: { A: "Juni dan Juli: STP; Agustus: SKP ditambah sanksi 100%", B: "Ketiganya SKP ditambah sanksi 100%", C: "Ketiganya STP berupa bunga dan denda", D: "Juni tanpa sanksi; Juli dan Agustus SKP" }, jawaban: "A",
          petunjuk: ["Terlambat lapor atau terlambat setor: STP sesuai UU KUP", "Tidak dipungut atau tidak disetor: SKP + 100%", "Jawaban: A"],
          penjelasan: "Pasal 11 UU 10/2020 membedakan keterlambatan (STP) dari bea meterai yang tidak dipungut atau tidak disetor (SKP + 100%)." },
        { no: 7, pertanyaan: "Berapa total sanksi yang dikoreksi fiskal positif pada SPT Tahunan PPh Badan 2026 (Rp)?", tipe: "angka", jawaban: 8847400, toleransi: 100,
          petunjuk: ["Denda SPT Masa dan bunga STP adalah sanksi administrasi berupa denda dan bunga (Pasal 9 ayat (1) huruf k UU PPh)", "Sanksi 100% dalam SKP lazimnya ikut dikoreksi sebagai sanksi administrasi di bidang perpajakan; jumlahkan hanya unsur sanksi, bukan pokok", "100.000 + 747.400 + 8.000.000 = Rp8.847.400"],
          penjelasan: "Pasal 9 ayat (1) huruf k UU PPh menyebut sanksi administrasi berupa bunga, denda, dan kenaikan, sehingga denda Rp100.000 dan bunga Rp747.400 jelas termasuk. Sanksi administratif 100% dalam SKP lazimnya ikut dikoreksi positif sebagai sanksi administrasi di bidang perpajakan, tetapi naskah (UU 10/2020 dan PMK 78/2024) tidak menggolongkannya secara tegas ke bunga, denda, atau kenaikan; jawaban ini mengikuti praktik yang lazim itu. Yang dikoreksi pada baris sanksi administrasi hanya unsur sanksi; perlakuan pokok dalam SKP tidak ditanyakan di sini." }
      ],
      kesimpulan: "Pisahkan pelanggaran pemungut per masa: lapor terlambat → denda Rp100.000; setor terlambat → bunga Rp747.400; tidak disetor atau tidak dipungut → SKP berisi pokok Rp8.000.000 dan sanksi 100% Rp8.000.000. Dalam SPT PPh Badan, seluruh unsur sanksi, Rp8.847.400, dikoreksi fiskal positif menurut praktik yang lazim: denda dan bunga STP jelas termasuk sanksi administrasi berupa bunga, denda, dan kenaikan (Pasal 9 ayat (1) huruf k UU PPh), sedangkan sanksi 100% bea meterai tidak digolongkan naskah secara tegas.",
      kalkulatorRef: "sanksi-bunga"
    }
  ],
  tips: [
    { teks: "Uji setiap dokumen berurutan: Pasal 7 (bukan objek) → Pasal 3 (objek) → ambang 'lebih dari Rp5.000.000' khusus dokumen uang. Perjanjian tidak punya ambang.", tagSebab: "salah-klasifikasi" },
    { teks: "Hafalkan lima kata kerja saat terutang: ditandatangani, selesai dibuat, diserahkan, diajukan, digunakan; lalu pasangkan dengan jenis dokumennya.", tagSebab: "lupa-pasal" },
    { teks: "Curigai angka lama UU 13/1985 (Rp3.000/Rp6.000, Rp250 ribu/Rp1 juta, sanksi 200%) dan tenggat pemungut 10/20 (PMK 151/2021): itu pengecoh favorit.", tagSebab: "angka-usang" },
    { teks: "Pisahkan rezim sanksi: pihak terutang membayar 100% saat pemeteraian kemudian; pemungut yang tidak memungut/menyetor kena SKP + 100%, sedangkan yang terlambat setor/lapor kena STP bunga dan denda UU KUP.", tagSebab: "lupa-pasal" },
    { teks: "Pada soal hitung, buat tabel per dokumen: objek? siapa pihak terutang? sudah daluwarsa? kena sanksi? Baru kalikan Rp10.000.", tagSebab: "salah-hitung" },
    { teks: "Baca apa yang ditanya: 'sanksi saja' atau 'pokok + sanksi'; 'beban PT X sendiri' atau seluruh dokumen; kata 'kecuali' dan 'tidak'.", tagSebab: "salah-baca" }
  ]
});
