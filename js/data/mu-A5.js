// Modul A5 — Bea Meterai. Rekonstruksi dari kisi-kisi resmi, bukan soal asli.
// Ketentuan yang dipakai: berlaku Oktober 2026 (UU 10/2020, PP 86/2021, PMK 78/2024, PMK 81/2024, UU KUP s.t.d.t.d. UU HPP).
UKP.register({
  meta: {
    kode: "A5", slug: "bea-meterai", nama: "Bea Meterai",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 90,
    perkiraanBobotSoal: { A: 0.05, B: 0.03, C: 0.02 },
    statusPer: "2026-10-28",
    tujuan: "Peserta mampu menentukan apakah suatu dokumen terutang bea meterai, kapan dan oleh siapa bea meterai terutang, menghitung bea meterai beserta sanksi pemeteraian kemudian, serta memahami kewajiban pemungut bea meterai dan sanksinya setelah berlakunya PMK 78/2024 dan Coretax.",
    dasarHukumUtama: [
      "UU 10/2020 tentang Bea Meterai",
      "PP 86/2021 tentang Pengadaan, Pengelolaan, dan Penjualan Meterai",
      "PMK 78/2024 tentang Ketentuan Pelaksanaan Bea Meterai (mencabut PMK 133/2021, 134/2021, 151/2021)",
      "PMK 81/2024 Pasal 94 (jatuh tempo penyetoran tanggal 15)",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) untuk sanksi pemungut"
    ],
    perubahanTerbaru: [
      { sebelum: "Pemungut bea meterai menyetor paling lambat tanggal 10 dan melaporkan SPT Masa paling lambat tanggal 20 bulan berikutnya (PMK 151/2021)", sesudah: "Setor dan lapor paling lambat tanggal 15 bulan berikutnya", dasar: "PMK 78/2024; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" },
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
      { label: "Setor dan lapor pemungut", nilai: "tanggal 15 bulan berikutnya; hari libur → hari kerja berikutnya", dasar: "PMK 78/2024; PMK 81/2024 Ps. 94", berlakuSejak: "2025-01-01" },
      { label: "Denda SPT Masa Bea Meterai terlambat", nilai: "Rp100.000", dasar: "UU KUP Ps. 7(1)", berlakuSejak: "2008-01-01" },
      { label: "Bunga setor terlambat pemungut (Oktober 2026)", nilai: "1,01% per bulan, maks. 24 bulan, bagian bulan = 1 bulan", dasar: "UU KUP Ps. 9(2a); KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
      { label: "Pemungut tidak memungut/tidak menyetor", nilai: "SKP: pokok + sanksi 100%", dasar: "UU 10/2020 Ps. 11", berlakuSejak: "2021-01-01" },
      { label: "Pemeteraian kemudian (tidak/kurang dibayar)", nilai: "Rp10.000 + sanksi 100% = Rp20.000 per dokumen", dasar: "UU 10/2020 Ps. 17–18", berlakuSejak: "2021-01-01" },
      { label: "Pemeteraian kemudian alat bukti (semula bukan objek)", nilai: "Rp10.000 tanpa sanksi", dasar: "UU 10/2020 Ps. 17–18", berlakuSejak: "2021-01-01" },
      { label: "Dokumen luar negeri dilunasi paling lambat saat digunakan", nilai: "Rp10.000 tanpa sanksi", dasar: "UU 10/2020 Ps. 8(1)e, 18", berlakuSejak: "2021-01-01" },
      { label: "Pengesahan pemeteraian kemudian", nilai: "pejabat yang ditetapkan Menteri; menurut PMK 78/2024 Pejabat Pos (◐ perlu cek naskah resmi)", dasar: "UU 10/2020 Ps. 1; PMK 78/2024", berlakuSejak: "2024-11-01" },
      { label: "Daluwarsa", nilai: "5 tahun sejak saat terutang (bea meterai dan sanksi)", dasar: "UU 10/2020 Ps. 23", berlakuSejak: "2021-01-01" },
      { label: "Larangan pejabat", nilai: "pejabat (antara lain hakim, panitera, notaris, PPAT) tidak dibenarkan menerima atau menyimpan dokumen belum lunas (◐ rincian pejabat perlu cek naskah resmi)", dasar: "UU 10/2020 Ps. 21", berlakuSejak: "2021-01-01" },
      { label: "Pidana memalsu/memakai meterai palsu", nilai: "penjara maks. 7 tahun, denda maks. Rp500 juta", dasar: "UU 10/2020 Ps. 24–25", berlakuSejak: "2021-01-01" },
      { label: "Sanksi bea meterai di SPT PPh", nilai: "tidak dapat dikurangkan (koreksi positif); pokok bea meterai boleh dibiayakan", dasar: "UU PPh Ps. 9(1)k dan 6(1)a", berlakuSejak: "2009-01-01" },
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
        { label: "Tenggat setor dan lapor pemungut", nilai: "tanggal 15 bulan berikutnya", dasar: "PMK 78/2024; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" },
        { label: "Penetapan pemungut", nilai: "Kepala KPP", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01" },
        { label: "Denda SPT Masa Bea Meterai terlambat", nilai: "Rp100.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Bea meterai tidak dipungut/tidak disetor pemungut", nilai: "SKP: kekurangan + sanksi 100%", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Bunga setor terlambat (Oktober 2026)", nilai: "1,01% per bulan, paling lama 24 bulan", dasar: "Pasal 9 ayat (2a) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" },
        { label: "Objek pemungutan", nilai: "cek/bilyet giro, dokumen transaksi surat berharga, kuitansi digital > Rp5 juta", dasar: "Pasal 11 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 10–11 UU 10/2020", catatan: "pemungut; SKP + 100% bila tidak dipungut/disetor; STP sesuai UU KUP bila terlambat setor/lapor" },
        { pasal: "PMK 78/2024", catatan: "penetapan oleh KPP, setor dan lapor tanggal 15" },
        { pasal: "PMK 81/2024 Pasal 94", catatan: "jatuh tempo penyetoran pajak masa tanggal 15" },
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
        "PMK 78/2024 menunjuk Pejabat Pos (pejabat PT Pos Indonesia) untuk melayani dan mengesahkan pemeteraian kemudian; bila kekurangan bea meterai ditemukan melalui pemeriksaan, DJP menerbitkan surat ketetapan pajak sebesar bea meterai yang kurang dibayar ditambah sanksi 100% (Pasal 19 UU 10/2020), lalu dokumennya disahkan Pejabat DJP.",
        "Daluwarsa: bea meterai yang terutang kedaluwarsa setelah 5 tahun sejak saat terutang (Pasal 23 UU 10/2020) dan berlaku untuk semua dokumen; setelah lewat, bea meterai dan sanksinya tidak dapat ditagih, tetapi menurut penjelasan UU dokumen itu tetap harus dimeteraikan kemudian bila akan dijadikan alat bukti di pengadilan.",
        "Hakim, panitera, jurusita, notaris, PPAT, aparatur sipil negara, dan pejabat negara tidak dibenarkan menerima, mempertimbangkan, menyimpan, melekatkan, membuat salinan, atau memberi keterangan pada dokumen yang bea meterainya tidak atau kurang dibayar (Pasal 21); pelanggarannya dikenai sanksi administratif menurut peraturan kepegawaian."
      ],
      poinKunci: [
        { label: "Sanksi pemeteraian kemudian", nilai: "100% dari bea meterai terutang", dasar: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Total per dokumen yang lewat saat terutang", nilai: "Rp10.000 + Rp10.000 = Rp20.000", dasar: "Pasal 5 dan 18 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Daluwarsa", nilai: "5 tahun sejak saat terutang", dasar: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" },
        { label: "Pengesahan pemeteraian kemudian", nilai: "Pejabat Pos; Pejabat DJP bila kekurangan ditetapkan dengan SKP", dasar: "Pasal 1 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01" },
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
      verifikasi: "◐",
      peringatan: "Pokok Rp10.000, sanksi 100%, pembedaan alat bukti (Pasal 18), daluwarsa 5 tahun (Pasal 23), dan larangan pejabat (Pasal 21) dicek melalui sumber sekunder yang mengutip UU 10/2020. Peran Pejabat Pos/Pejabat DJP, SKP setelah pemeriksaan menurut PMK 78/2024, dan penjelasan UU tentang dokumen kedaluwarsa yang dijadikan alat bukti diambil dari ringkasan sekunder dan belum dicek ke naskah resmi."
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
      id: "A5-009", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Dalam rapat koordinasi pascabencana banjir bandang 2026, pemerintah daerah, yayasan keagamaan, dan bank penyalur kredit mendata dokumen yang mungkin memperoleh fasilitas pembebasan bea meterai. Dokumen berikut termasuk kelompok yang dapat diberikan fasilitas pembebasan berdasarkan Pasal 22 UU 10/2020, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "Akta pengalihan hak atas tanah dan bangunan dalam rangka percepatan pemulihan sosial ekonomi akibat bencana alam", B: "Dokumen pengalihan hak atas tanah untuk kegiatan keagamaan dan sosial yang tidak bersifat komersial", C: "Perjanjian kredit konsumtif antara bank umum dan nasabah perorangan", D: "Dokumen yang terkait pelaksanaan perjanjian internasional yang mengikat Indonesia" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembebasan Pasal 22 terbatas pada dokumen penanganan bencana alam, keagamaan/sosial nonkomersial, program pemerintah dan kebijakan lembaga moneter/jasa keuangan, serta perjanjian internasional; perjanjian kredit konsumtif biasa tetap terutang.",
        jejakHitung: [],
        mengapaSalah: { A: "Termasuk kelompok dokumen penanganan bencana alam yang dapat dibebaskan", B: "Termasuk kelompok kegiatan keagamaan dan sosial nonkomersial", D: "Perjanjian internasional adalah salah satu kelompok yang dapat dibebaskan" },
        jebakan: "Pembebasan bersifat fasilitas yang 'dapat diberikan' dan rinciannya diatur dengan peraturan pemerintah tersendiri (bukan PP 86/2021, yang mengatur pengadaan meterai); berbeda dari pengecualian objek Pasal 7."
      },
      dasarHukum: [ { pasal: "Pasal 22 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 UU 10/2020 (pembanding: dokumen bukan objek)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Daftar kelompok dokumen yang dapat dibebaskan menurut Pasal 22 ditulis dari ingatan teks UU 10/2020 dan belum dicek ke naskah resmi; peraturan pemerintah pelaksananya belum dibaca langsung."
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
      id: "A5-033", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A5-02",
      stem: "Lanjutan data PT Bayar Cepat Indonesia (pemungut bea meterai yang ditetapkan Kepala KPP). Bea meterai yang dipungut atas dokumen tanda terima pembayaran digital Masa September 2026 berjumlah Rp125.000.000. Tanggal 15 Oktober 2026 adalah hari Kamis (hari kerja). Batas paling lambat penyetoran bea meterai tersebut dan penyampaian SPT Masa Bea Meterai melalui Coretax adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: { A: "Setor paling lambat 15 Oktober 2026, lapor paling lambat 31 Oktober 2026", B: "Setor paling lambat 10 Oktober 2026, lapor paling lambat 20 Oktober 2026", C: "Setor paling lambat 15 Oktober 2026, lapor paling lambat 20 Oktober 2026", D: "Setor dan lapor paling lambat 15 Oktober 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 78/2024 menyamakan tenggat penyetoran dan pelaporan SPT Masa Bea Meterai pemungut, yaitu paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir.",
        jejakHitung: [],
        mengapaSalah: { A: "Akhir bulan berikutnya adalah tenggat SPT Masa PPN", B: "Setor tanggal 10 dan lapor tanggal 20 adalah ketentuan PMK 151/2021 yang sudah dicabut", C: "Tanggal 20 adalah tenggat SPT Masa PPh, bukan SPT Masa Bea Meterai" },
        jebakan: "Tiga tenggat SPT Masa (bea meterai, PPh, PPN) berbeda; jangan menyamaratakan."
      },
      dasarHukum: [ { pasal: "PMK 78/2024 (setor dan lapor pemungut)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-034", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A5-02",
      stem: "Lanjutan data PT Bayar Cepat Indonesia (pemungut bea meterai). Karena gangguan sistem internal, bea meterai Masa September 2026 sebesar Rp125.000.000 baru disetor pada 2 Desember 2026, dan SPT Masa Bea Meterai disampaikan pada hari yang sama. Jatuh tempo setor dan lapor adalah 15 Oktober 2026. Anggap tarif bunga per bulan Pasal 9 ayat (2a) UU KUP yang berlaku 1,01%. Total sanksi administratif yang dikenakan kepada PT Bayar Cepat Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp125.000.000", B: "Rp3.887.500", C: "Rp2.625.000", D: "Rp3.025.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bea meterai disetor penuh walau terlambat, sehingga menurut Pasal 11 UU 10/2020 pemungut ditagih dengan STP sesuai UU KUP: bunga Pasal 9 ayat (2a) atas keterlambatan setor (bagian bulan dihitung penuh) dan denda Pasal 7 ayat (1) Rp100.000 atas keterlambatan SPT Masa.",
        jejakHitung: [ ["15 Oktober → 15 November 2026", "1 bulan"], ["15 November → 2 Desember 2026 (bagian bulan)", "1 bulan"], ["Jumlah bulan", "2"], ["Bunga = 125.000.000 × 1,01% × 2", "Rp2.525.000"], ["Denda SPT Masa lainnya", "Rp100.000"], ["Total sanksi", "Rp2.625.000"] ],
        mengapaSalah: { A: "Sanksi 100% (lewat SKP) bagi pemungut hanya untuk bea meterai yang tidak atau kurang dipungut/disetor; di sini seluruhnya disetor, hanya terlambat", B: "Menghitung 3 bulan (Oktober, November, Desember) sehingga bunga Rp3.787.500 + Rp100.000", D: "Memakai denda SPT Masa PPN Rp500.000" },
        jebakan: "Bedakan 'terlambat disetor' (STP: bunga dan denda UU KUP) dari 'tidak disetor' (SKP: kekurangan + sanksi 100%)."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020 (STP sesuai UU KUP atas setor/lapor terlambat)", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) dan Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026 (tarif bunga Oktober 2026)", berlakuSejak: "2026-10-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-035", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Bank Sejahtera, yang telah ditetapkan sebagai pemungut bea meterai, pada Masa Juni 2026 menyerahkan kepada nasabah giro 3 buku cek dan 2 buku bilyet giro, masing-masing berisi 25 lembar. Bea meterai yang dipungut bank atas cek dan bilyet giro tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp50.000", B: "Rp1.250.000", C: "Rp750.000", D: "Rp375.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Cek dan bilyet giro adalah surat berharga; setiap lembar merupakan satu dokumen yang bea meterainya Rp10.000 dan dipungut oleh bank selaku pemungut.",
        jejakHitung: [ ["Lembar cek 3 × 25", "75"], ["Lembar bilyet giro 2 × 25", "50"], ["Total lembar", "125"], ["125 × Rp10.000", "Rp1.250.000"] ],
        mengapaSalah: { A: "Menghitung per buku (5 × Rp10.000), padahal dokumen adalah tiap lembar", C: "Hanya memungut atas cek dan melupakan bilyet giro", D: "Memakai tarif lama Rp3.000 per lembar cek/bilyet giro dari UU 13/1985" },
        jebakan: "Satuan dokumen adalah lembar cek/bilyet giro, bukan buku."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf d dan Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024", berlakuSejak: "2024-11-01" } ],
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
      id: "A5-037", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Kliring Mandiri, pemungut bea meterai, memungut bea meterai Masa Oktober 2026 sebesar Rp48.300.000. Tanggal 15 November 2026 jatuh pada hari Minggu, sedangkan 16 November 2026 adalah hari kerja. Tim pajak menanyakan batas akhir penyetoran dan penyampaian SPT Masa Bea Meterai yang tidak menimbulkan sanksi. Jawaban yang tepat adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: { A: "Setor 16 November 2026, lapor paling lambat 20 November 2026", B: "Jumat, 13 November 2026, karena tenggat yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya", C: "Setor 10 November 2026 dan lapor 20 November 2026", D: "Senin, 16 November 2026, untuk penyetoran maupun pelaporan" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Tenggat setor dan lapor pemungut adalah tanggal 15 bulan berikutnya; bila jatuh pada hari libur (termasuk Sabtu, Minggu, libur nasional), penyetoran dan pelaporan dapat dilakukan pada hari kerja berikutnya.",
        jejakHitung: [ ["Tenggat normal Masa Oktober 2026", "15 November 2026 (Minggu)"], ["Hari kerja berikutnya", "Senin, 16 November 2026"] ],
        mengapaSalah: { A: "Pelaporan SPT Masa Bea Meterai bertenggat sama dengan penyetoran", B: "Tenggat yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan sebelumnya", C: "Tanggal 10/20 adalah ketentuan PMK 151/2021 yang sudah dicabut" },
        jebakan: "Dua lapis aturan: tenggat tanggal 15 dan pergeseran hari libur."
      },
      dasarHukum: [ { pasal: "PMK 78/2024 (tenggat pemungut tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 (tenggat pada hari libur)", berlakuSejak: "2025-01-01" } ],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A5-038", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 11 UU 10/2020 (parafrase): Pemungut Bea Meterai wajib memungut Bea Meterai dari pihak yang terutang, menyetorkannya ke kas negara, dan melaporkannya. Pemungut yang tidak atau kurang memungut dan/atau tidak atau kurang menyetorkan diterbitkan surat ketetapan pajak sebesar Bea Meterai yang tidak atau kurang dipungut dan/atau disetor ditambah sanksi administratif 100%; pemungut yang terlambat menyetorkan dan/atau tidak atau terlambat melaporkan diterbitkan surat tagihan pajak sesuai ketentuan UU KUP.",
      stem: "PT Sekuritas Prima telah ditetapkan sebagai pemungut bea meterai atas dokumen transaksi surat berharga (konfirmasi transaksi) nasabah. Pemeriksaan pada Oktober 2026 atas Masa Juli 2026 menemukan: (1) bea meterai atas 300 konfirmasi transaksi telah dipungut dari nasabah tetapi sama sekali belum disetor; (2) bea meterai atas 200 konfirmasi transaksi lainnya telah dipungut dan disetor penuh, tetapi terlambat 20 hari dari jatuh tempo. SPT Masa Bea Meterai disampaikan tepat waktu. Berdasarkan kutipan tersebut, ketetapan dan sanksi yang tepat bagi PT Sekuritas Prima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "STP atas seluruh 500 dokumen berupa bunga UU KUP; tidak ada sanksi 100% karena pemungut bukan pihak yang terutang", B: "SKP atas 500 dokumen sebesar Rp5.000.000 ditambah sanksi 100% Rp5.000.000", C: "SKP sebesar Rp3.000.000 ditambah sanksi 100% Rp3.000.000 atas 300 dokumen yang belum disetor, serta STP berupa bunga UU KUP atas setoran 200 dokumen yang terlambat", D: "Tidak ada sanksi bagi pemungut; para nasabah wajib memeteraikan kemudian 300 dokumen dengan Rp20.000 per dokumen" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 11 membedakan dua pelanggaran pemungut. Bea meterai yang sudah dipungut tetapi tidak disetor ditetapkan dengan SKP sebesar pokok ditambah sanksi 100%, sedangkan setoran yang lengkap tetapi terlambat ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP.",
        jejakHitung: [ ["(1) Pokok tidak disetor: 300 × Rp10.000", "Rp3.000.000"], ["(1) Sanksi 100% dalam SKP", "Rp3.000.000"], ["(2) 200 dokumen disetor terlambat 20 hari", "STP bunga 1 bulan (bagian bulan dihitung penuh)"] ],
        mengapaSalah: { A: "Sanksi 100% berlaku juga bagi pemungut atas bea meterai yang tidak atau kurang disetor (Pasal 11)", B: "Bea meterai 200 dokumen sudah disetor penuh; keterlambatannya hanya ditagih dengan STP bunga, bukan SKP + 100%", D: "Bea meterai sudah dipungut dari nasabah; kewajiban menyetor ada pada pemungut, bukan pemeteraian kemudian oleh nasabah" },
        jebakan: "Bedakan 'tidak disetor' (SKP + sanksi 100%) dari 'terlambat disetor' (STP bunga UU KUP)."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) dan Pasal 14 UU KUP", berlakuSejak: "2021-10-29" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-039", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Pos Bayar, pemungut bea meterai, menyetor bea meterai Masa Juni 2026 sebesar Rp32.000.000 tepat pada 15 Juli 2026, tetapi SPT Masa Bea Meterai Masa Juni 2026 baru disampaikan pada 3 Agustus 2026. Sanksi administratif yang dikenakan atas keterlambatan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp323.200", B: "Rp100.000", C: "Rp500.000", D: "Rp1.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Penyetoran tepat waktu sehingga tidak ada bunga; yang terlambat hanya penyampaian SPT Masa, dikenai denda Pasal 7 ayat (1) UU KUP untuk SPT Masa lainnya Rp100.000.",
        jejakHitung: [ ["Setoran 15 Juli 2026", "tepat waktu → tanpa bunga"], ["SPT Masa disampaikan 3 Agustus 2026", "terlambat"], ["Denda SPT Masa lainnya", "Rp100.000"] ],
        mengapaSalah: { A: "Memperlakukan keterlambatan lapor seperti keterlambatan setor: bunga 32.000.000 × 1,01% × 1 bulan (15 Juli–3 Agustus, bagian bulan dihitung penuh); bunga hanya untuk setoran yang terlambat", C: "Rp500.000 adalah denda SPT Masa PPN", D: "Rp1.000.000 adalah denda SPT Tahunan PPh Badan" },
        jebakan: "Pisahkan keterlambatan setor (bunga) dan keterlambatan lapor (denda)."
      },
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 11 UU 10/2020; PMK 78/2024", berlakuSejak: "2025-01-01" } ],
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
      id: "A5-042", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A5-03",
      stem: "Lanjutan data CV Sumber Rejeki. Atas kuitansi Rp7.500.000 yang diterima CV pada 25 November 2021 tanpa meterai, pemeriksa pada 14 Oktober 2026 menyatakan bea meterai dan sanksinya masih dapat ditagih. Batas akhir daluwarsa kewajiban pemenuhan bea meterai atas kuitansi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "31 Desember 2026, akhir tahun kelima sejak dokumen dibuat", B: "25 November 2026, 5 tahun sejak saat terutang", C: "14 Oktober 2031, 5 tahun sejak dokumen ditemukan pemeriksa", D: "5 tahun sejak STP atau surat ketetapan diterbitkan, mengikuti daluwarsa penagihan UU KUP" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kuitansi terutang saat diserahkan (25 November 2021); kewajiban pemenuhan bea meterai dan sanksinya daluwarsa 5 tahun sejak saat terutang, yaitu 25 November 2026 (Pasal 23).",
        jejakHitung: [ ["Saat terutang (diserahkan)", "25 November 2021"], ["Ditambah 5 tahun", "25 November 2026"] ],
        mengapaSalah: { A: "Daluwarsa tidak dibulatkan ke akhir tahun", C: "Titik mulai adalah saat terutang, bukan tanggal penemuan", D: "Daluwarsa penagihan UU KUP berbeda dengan daluwarsa khusus Pasal 23 UU Bea Meterai" },
        jebakan: "Pemeriksaan pada Oktober 2026 hanya berselang beberapa minggu sebelum daluwarsa; ketepatan tanggal menentukan."
      },
      dasarHukum: [ { pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf c UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A5-043", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Kuasa hukum PT Mega Teknik akan mengajukan lima kuitansi pembayaran, masing-masing Rp2.000.000 sampai Rp4.000.000 dan semuanya tanpa meterai, sebagai alat bukti dalam sidang perdata pada 12 November 2026. Kuitansi itu semula tidak terutang bea meterai karena nilainya tidak lebih dari Rp5.000.000. Langkah dan jumlah yang tepat sebelum kuitansi diajukan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pemeteraian kemudian Rp10.000 per kuitansi (total Rp50.000) tanpa sanksi, disahkan oleh pejabat pos", B: "Pemeteraian kemudian Rp20.000 per kuitansi (total Rp100.000) karena dokumen tidak bermeterai", C: "Meminta panitera pengadilan membubuhkan cap lunas bea meterai tanpa pembayaran karena nilainya kecil", D: "Tidak perlu dimeteraikan karena kuitansi di bawah Rp5.000.000 bukan objek dalam keadaan apa pun" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen yang digunakan sebagai alat bukti di pengadilan adalah objek tersendiri (Pasal 3 ayat (1) huruf b) yang terutang saat diajukan. Karena sebelumnya bukan objek, pemeteraian kemudian cukup sebesar bea meterai terutang tanpa sanksi.",
        jejakHitung: [ ["Kuitansi", "5 dokumen"], ["Bea meterai per dokumen", "Rp10.000"], ["Sanksi (semula bukan objek)", "Rp0"], ["Total", "Rp50.000"] ],
        mengapaSalah: { B: "Sanksi 100% hanya untuk dokumen yang bea meterainya sudah terutang tetapi tidak dibayar", C: "Panitera tidak berwenang mengesahkan pemeteraian kemudian tanpa pembayaran", D: "Penggunaan sebagai alat bukti menjadikan dokumen apa pun objek" },
        jebakan: "Status 'semula bukan objek' menghapus sanksi, tetapi tidak menghapus pokok Rp10.000."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 8 ayat (1) huruf d UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 17 dan Pasal 18 UU 10/2020; PMK 78/2024 (Pejabat Pos)", berlakuSejak: "2024-11-01" } ],
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
      id: "A5-045", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 23 UU 10/2020 (parafrase): Bea Meterai yang terutang menjadi kedaluwarsa setelah jangka waktu 5 tahun sejak saat terutang. Penjelasan pasal: kedaluwarsa 5 tahun yang dihitung sejak saat terutang berlaku untuk semua dokumen.",
      stem: "Pada 20 Oktober 2026 pemeriksa menemukan empat dokumen PT Lestari Jaya tanpa meterai, dan tidak satu pun pernah diajukan ke pengadilan: (1) kuitansi Rp8.000.000 yang diterima perusahaan pada 15 Oktober 2021; (2) surat perjanjian sewa yang ditandatangani 3 Desember 2021; (3) kuitansi Rp12.000.000 yang diterima perusahaan pada 30 September 2021; (4) surat pernyataan yang diserahkan kepada perusahaan pada 1 Maret 2021. Berdasarkan kutipan tersebut, dokumen yang bea meterai dan sanksinya masih dapat ditagih adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Seluruh dokumen, karena daluwarsa dihitung sejak dokumen ditemukan", B: "Dokumen (1) dan (2)", C: "Dokumen (2) saja", D: "Tidak ada, karena semua dokumen dibuat pada tahun 2021" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Daluwarsa 5 tahun sejak saat terutang: (1) 15 Oktober 2026, (3) 30 September 2026, dan (4) 1 Maret 2026 sudah lewat pada 20 Oktober 2026; hanya (2) yang daluwarsa 3 Desember 2026.",
        jejakHitung: [ ["(1) terutang 15 Oktober 2021", "daluwarsa 15 Oktober 2026 → lewat"], ["(2) terutang 3 Desember 2021", "daluwarsa 3 Desember 2026 → masih ditagih"], ["(3) terutang 30 September 2021", "daluwarsa 30 September 2026 → lewat"], ["(4) terutang 1 Maret 2021", "daluwarsa 1 Maret 2026 → lewat"] ],
        mengapaSalah: { A: "Daluwarsa dihitung sejak saat terutang, bukan sejak ditemukan", B: "Dokumen (1) daluwarsa 15 Oktober 2026, lima hari sebelum pemeriksaan", D: "Daluwarsa dihitung per tanggal, bukan per tahun pembuatan" },
        jebakan: "Selisih beberapa hari dari tanggal pemeriksaan sengaja dibuat untuk menguji ketelitian."
      },
      dasarHukum: [ { pasal: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 8 ayat (1) huruf a dan c UU 10/2020", berlakuSejak: "2021-01-01" } ],
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
      id: "A5-055", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "PMK 81/2024 Pasal 94 dan ketentuan hari libur dalam PMK yang sama (parafrase): pajak yang dipotong atau dipungut, termasuk bea meterai yang dipungut pemungut, disetor paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir; dalam hal tanggal jatuh tempo bertepatan dengan hari libur (Sabtu, Minggu, hari libur nasional, atau cuti bersama), penyetoran atau pelaporan dapat dilakukan pada hari kerja berikutnya. PMK 78/2024 (parafrase): pemungut menyampaikan SPT Masa Bea Meterai paling lambat tanggal 15 bulan berikutnya.",
      stem: "PT Loket Bayar Prima, penyelenggara pembayaran digital yang telah ditetapkan Kepala KPP sebagai pemungut bea meterai, memungut bea meterai Masa Juli 2026 atas 2.740 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000; pada masa yang sama platform juga memfasilitasi 8.115 tanda terima bernilai Rp5.000.000 ke bawah. Pada kalender kantor, 15 Agustus 2026 jatuh pada hari Sabtu, 16 Agustus hari Minggu, 17 Agustus 2026 libur nasional Hari Kemerdekaan, dan 18 Agustus 2026 hari kerja biasa. Berdasarkan kutipan tersebut, jumlah setoran melalui kode billing Coretax serta batas paling lambat penyetoran dan penyampaian SPT Masa Bea Meterai yang tidak menimbulkan sanksi adalah ...",
      kataKualifikasi: ["paling lambat"],
      opsi: {
        A: "Setor Rp27.400.000 dan lapor paling lambat Jumat, 14 Agustus 2026, karena tenggat yang jatuh pada hari libur dimajukan ke hari kerja sebelumnya",
        B: "Setor Rp27.400.000 dan lapor paling lambat Senin, 17 Agustus 2026, yaitu hari pertama setelah akhir pekan",
        C: "Setor Rp27.400.000 paling lambat 10 Agustus 2026 dan lapor paling lambat 20 Agustus 2026",
        D: "Setor Rp27.400.000 dan lapor paling lambat Selasa, 18 Agustus 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Bea meterai yang dipungut 2.740 × Rp10.000 = Rp27.400.000 (tanda terima ≤ Rp5 juta bukan objek). Tenggat setor dan lapor pemungut adalah tanggal 15 bulan berikutnya; karena 15–17 Agustus 2026 berturut-turut Sabtu, Minggu, dan libur nasional, keduanya bergeser ke hari kerja berikutnya, Selasa 18 Agustus 2026.",
        jejakHitung: [ ["Dokumen objek pemungutan", "2.740 (8.115 tanda terima ≤ Rp5 juta tidak terutang)"], ["2.740 × Rp10.000", "Rp27.400.000"], ["Tenggat normal Masa Juli 2026", "15 Agustus 2026 (Sabtu)"], ["16 Agustus (Minggu) dan 17 Agustus (libur nasional)", "bukan hari kerja"], ["Tenggat setor dan lapor", "Selasa, 18 Agustus 2026"] ],
        mengapaSalah: { A: "Tenggat yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan dimajukan ke hari kerja sebelumnya", B: "17 Agustus 2026 adalah libur nasional sehingga bukan hari kerja; hari kerja berikutnya 18 Agustus 2026", C: "Setor tanggal 10 dan lapor tanggal 20 adalah ketentuan PMK 151/2021 yang sudah dicabut PMK 78/2024" },
        jebakan: "Pergeseran tenggat harus melewati semua hari libur berturut-turut, termasuk libur nasional yang menempel pada akhir pekan; jumlah tanda terima ≤ Rp5 juta hanya pengalih."
      },
      dasarHukum: [ { pasal: "PMK 81/2024 Pasal 94 (jatuh tempo tanggal 15) dan ketentuan hari libur", berlakuSejak: "2025-01-01" }, { pasal: "PMK 78/2024 (setor dan lapor pemungut tanggal 15)", berlakuSejak: "2024-11-01" }, { pasal: "Pasal 3 ayat (2) huruf g dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-056", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 1, 17, dan 18 UU 10/2020 (parafrase): pemeteraian kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan Menteri; pemeteraian kemudian dilakukan atas dokumen yang bea meterainya tidak atau kurang dibayar dan atas dokumen yang digunakan sebagai alat bukti di pengadilan; atas dokumen yang bea meterainya tidak atau kurang dibayar, yang dibayar adalah bea meterai yang terutang ditambah sanksi administratif 100%.",
      stem: "Dalam reviu internal 19 Oktober 2026, PT Mahakarya Properti menemukan 46 surat perjanjian sewa unit apartemen yang ditandatangani sepanjang 2025 tanpa meterai. Setiap perjanjian dibuat 2 rangkap asli; perusahaan memegang satu rangkap, dan rangkap lainnya dipegang penyewa. Belum ada pemeriksaan DJP, dan para pihak tidak memperjanjikan lain tentang pembebanan meterai. Direksi ingin melunasi secara sukarela dengan satu kali pembayaran melalui kode billing, tanpa menempel meterai tempel satu per satu. Berdasarkan kutipan tersebut, urutan langkah yang paling sesuai bagi PT Mahakarya Properti adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat kode billing bea meterai Rp460.000 tanpa sanksi karena pelunasan dilakukan sukarela sebelum pemeriksaan, membayarnya, lalu menyimpan bukti setor bersama arsip perjanjian tanpa pengesahan",
        B: "Menghitung pokok 46 × Rp10.000 = Rp460.000 ditambah sanksi 100% Rp460.000; membuat kode billing bea meterai Rp920.000 dan membayarnya; lalu mengajukan perjanjian beserta bukti setor kepada pejabat yang ditetapkan Menteri (Pejabat Pos) untuk disahkan sebagai pemeteraian kemudian",
        C: "Menghitung 92 rangkap (milik perusahaan dan penyewa) × (Rp10.000 + Rp10.000) = Rp1.840.000; membuat kode billing dan membayarnya; lalu mengajukan perjanjian beserta bukti setor kepada Pejabat Pos untuk disahkan",
        D: "Menghitung Rp920.000 dan membayarnya dengan kode billing, lalu meminta notaris yang menyusun format perjanjian membubuhkan cap pengesahan pemeteraian kemudian pada tiap perjanjian"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Perjanjian yang tidak dilunasi saat ditandatangani tetap dikenai sanksi 100% walaupun dilunasi sukarela sebelum pemeriksaan. Pembayaran dapat memakai SSP dengan kode billing, tetapi pemeteraian kemudian baru sah setelah disahkan pejabat yang ditetapkan Menteri, yaitu Pejabat Pos menurut PMK 78/2024. Perusahaan hanya menanggung rangkap yang diterimanya.",
        jejakHitung: [ ["Rangkap yang terutang oleh perusahaan (Pasal 9)", "46 dokumen"], ["Pokok 46 × Rp10.000", "Rp460.000"], ["Sanksi 100%", "Rp460.000"], ["Kode billing", "Rp920.000"], ["Langkah akhir", "pengesahan oleh Pejabat Pos"] ],
        mengapaSalah: { A: "Pelunasan sukarela tidak menghapus sanksi 100% atas dokumen yang tidak dilunasi pada saat terutang, dan pemeteraian kemudian wajib disahkan pejabat yang ditetapkan Menteri", C: "Rangkap yang dipegang penyewa terutang oleh penyewa (Pasal 9), bukan oleh perusahaan", D: "Notaris bukan pejabat pengesah pemeteraian kemudian" },
        jebakan: "Frasa 'sukarela sebelum pemeriksaan' memancing peserta menghapus sanksi; sanksi 100% melekat begitu saat terutang terlewati tanpa pelunasan."
      },
      dasarHukum: [ { pasal: "Pasal 1, Pasal 9, Pasal 17, dan Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (pemeteraian kemudian, Pejabat Pos)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Tata cara pengesahan oleh Pejabat Pos dan pelunasan pemeteraian kemudian dengan SSP/kode billing menurut PMK 78/2024 diambil dari ringkasan sekunder dan belum dicek ke naskah resmi PMK; rincian lampiran (misalnya daftar dokumen) dan kanal pengesahan dapat berbeda. Pokok, sanksi 100%, dan pihak terutang sudah sesuai UU 10/2020."
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
      id: "A5-060", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "CV Bangun Karya, nasabah giro Bank Arta yang telah ditetapkan sebagai pemungut bea meterai atas cek dan bilyet giro, pada 5 Oktober 2026 menerima satu buku cek berisi 25 lembar. Sepanjang Oktober 2026 CV Bangun Karya memakai tiga lembar cek untuk membayar pemasok masing-masing sebesar Rp2.500.000, Rp4.900.000, dan Rp85.000.000. Untuk memo internal, kalimat yang paling tepat mengenai bea meterai atas cek tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya dipungut Bank Arta selaku pemungut saat buku cek diserahkan, sehingga CV Bangun Karya tidak perlu lagi membubuhkan meterai pada ketiga lembar cek yang dipakai.", B: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 hanya apabila nilai nominal yang ditulis lebih dari Rp5.000.000; bea meterainya dipungut Bank Arta selaku pemungut saat buku cek diserahkan, sehingga hanya cek Rp85.000.000 yang terutang.", C: "Setiap buku cek merupakan satu surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya dipungut Bank Arta selaku pemungut saat buku cek diserahkan, sehingga CV Bangun Karya tidak perlu lagi membubuhkan meterai pada ketiga lembar cek yang dipakai.", D: "Setiap lembar cek merupakan surat berharga yang terutang bea meterai Rp10.000 tanpa memperhatikan nilai nominal yang ditulis; bea meterainya dipungut Bank Arta selaku pemungut saat buku cek diserahkan, tetapi CV Bangun Karya tetap wajib menempelkan meterai tempel pada setiap lembar cek yang dipakai." },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Cek termasuk surat berharga (Pasal 3 ayat (2) huruf d) yang terutang tanpa ambang nilai dan dihitung per lembar. Bank yang ditetapkan sebagai pemungut memungut bea meterainya sehingga dokumen dianggap lunas dan nasabah tidak membubuhkan meterai lagi.",
        jejakHitung: [],
        mengapaSalah: { B: "Ambang Rp5.000.000 hanya berlaku bagi dokumen yang menyatakan penerimaan uang atau pelunasan utang (Pasal 3 ayat (2) huruf g), bukan bagi surat berharga", C: "Satuan dokumen adalah lembar cek, bukan buku; satu buku berisi 25 lembar berarti 25 dokumen", D: "Dokumen yang bea meterainya telah dipungut pemungut dianggap lunas; menempel meterai lagi berarti membayar dua kali atas dokumen yang sama" },
        jebakan: "Nilai Rp2.500.000 dan Rp4.900.000 memancing ambang Rp5 juta yang hanya berlaku untuk dokumen penerimaan uang."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf d dan Pasal 5 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 10–11 UU 10/2020; PMK 78/2024 (pemungut atas cek dan bilyet giro)", berlakuSejak: "2024-11-01" } ],
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
      id: "A5-062", topik: "A5.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Sekuritas Andalan menelaah kepatuhan bea meterai atas dokumen nasabah Oktober 2026: (1) konfirmasi pengeluaran efek dari rekening efek yang diadministrasikannya selaku kustodian kepada nasabah atas permintaan penarikan; (2) pemberitahuan pembagian kupon obligasi kepada nasabah sebesar Rp7.500.000; (3) bilyet deposito Rp200.000.000 milik nasabah yang diterbitkan Bank Kencana dan dititipkan sebagai jaminan; (4) surat perjanjian pembukaan rekening efek yang ditandatangani nasabah baru dan PT Sekuritas Andalan; (5) konfirmasi transaksi (trade confirmation) pembelian saham senilai Rp50.000.000 yang diterbitkan PT Sekuritas Andalan kepada nasabah. Dokumen yang merupakan objek bea meterai adalah ...",
      kataKualifikasi: [],
      opsi: { A: "(3), (4), dan (5)", B: "(2), (4), dan (5)", C: "(4) saja", D: "(4) dan (5)" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Perjanjian pembukaan rekening (Pasal 3 ayat (2) huruf a) dan konfirmasi transaksi surat berharga (huruf e) adalah objek. Pengeluaran efek oleh kustodian dan dokumen simpanan uang (Pasal 7 huruf g) serta tanda pembagian bunga atau imbal hasil surat berharga (huruf i) dikecualikan.",
        jejakHitung: [],
        mengapaSalah: { A: "Bilyet deposito adalah dokumen yang menyebutkan simpanan uang yang dikecualikan Pasal 7 huruf g", B: "Pemberitahuan kupon obligasi adalah tanda pembagian bunga atau imbal hasil surat berharga yang dikecualikan Pasal 7 huruf i, walaupun nilainya di atas Rp5.000.000", C: "Konfirmasi transaksi saham adalah dokumen transaksi surat berharga yang menjadi objek menurut Pasal 3 ayat (2) huruf e; nilainya Rp50.000.000 juga di atas batas fasilitas pembebasan Rp10.000.000 untuk konfirmasi transaksi di bursa" },
        jebakan: "Nilai Rp7.500.000 dan Rp200.000.000 menggoda untuk memakai ambang Rp5 juta; dokumen dalam daftar Pasal 7 tetap bukan objek berapa pun nilainya."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf a dan e UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 huruf g dan i UU 10/2020", berlakuSejak: "2021-01-01" } ],
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
      id: "A5-067", topik: "A5.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A5-05",
      stem: "Lanjutan data PT Puri Asri Properti. Atas penjualan rumah tapak (bukan rumah sederhana) seharga Rp1.250.000.000, PT Puri Asri wajib menyetor PPh final Pasal 4 ayat (2) atas pengalihan hak atas tanah dan/atau bangunan dengan tarif umum. Para pihak sepakat bea meterai akta jual beli dan salinannya ditanggung pembeli, sedangkan untuk PPJB (2 rangkap, satu untuk tiap pihak), kuitansi uang muka, dan kuitansi pelunasan tidak ada kesepakatan. PPh final yang disetor PT Puri Asri dan bea meterai yang menjadi tanggungan PT Puri Asri sendiri sebagai pihak yang terutang adalah ...",
      kataKualifikasi: ["sendiri sebagai pihak yang terutang"],
      opsi: { A: "PPh final Rp31.250.000; bea meterai Rp10.000", B: "PPh final Rp31.250.000; bea meterai Rp30.000", C: "PPh final Rp62.500.000; bea meterai Rp10.000", D: "PPh final Rp31.250.000; bea meterai Rp0" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "PPh final 2,5% × Rp1.250.000.000 = Rp31.250.000. PT Puri Asri hanya terutang atas rangkap PPJB yang diterimanya; kuitansi terutang oleh Ny. Larasati sebagai penerima, dan akta jual beli ditanggung pembeli berdasarkan kesepakatan (Pasal 9).",
        jejakHitung: [ ["PPh final = 2,5% × Rp1.250.000.000", "Rp31.250.000"], ["Rangkap PPJB milik PT Puri Asri", "Rp10.000"], ["Kuitansi uang muka dan pelunasan", "terutang oleh Ny. Larasati (penerima)"], ["Akta jual beli dan salinannya", "ditanggung pembeli sesuai kesepakatan"], ["Bea meterai tanggungan PT Puri Asri", "Rp10.000"] ],
        mengapaSalah: { B: "Menganggap PT Puri Asri terutang atas kuitansi uang muka dan pelunasan yang dibuatnya; kuitansi terutang oleh penerimanya, yaitu Ny. Larasati", C: "Memakai tarif lama 5% sebelum PP 34/2016; tarif umum kini 2,5% dari jumlah bruto", D: "Kesepakatan pembeli menanggung bea meterai hanya untuk akta jual beli dan salinannya; rangkap PPJB milik PT Puri Asri tetap tanggungannya" },
        jebakan: "Pembuat kuitansi bukan pihak terutang, dan kesepakatan pembebanan hanya berlaku untuk dokumen yang disepakati."
      },
      dasarHukum: [ { pasal: "PP 34/2016 Pasal 2 ayat (1) huruf a (PPh final 2,5% pengalihan tanah/bangunan)", berlakuSejak: "2016-09-08" }, { pasal: "Pasal 9 UU 10/2020", berlakuSejak: "2021-01-01" } ],
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
      id: "A5-075", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A5-06",
      kutipan: "Pasal 21 UU 10/2020 (parafrase): hakim, panitera, jurusita, notaris, pejabat pembuat akta tanah, aparatur sipil negara, dan pejabat negara tidak dibenarkan menerima, mempertimbangkan, atau menyimpan dokumen yang bea meterainya tidak atau kurang dibayar. Pasal 1 (parafrase): pemeteraian kemudian adalah pemeteraian yang memerlukan pengesahan dari pejabat yang ditetapkan oleh Menteri.",
      stem: "Lanjutan data PT Mitra Bangun. Kuasa hukum PT Mitra Bangun mengusulkan agar alat bukti diajukan dulu pada sidang 18 November 2026, sedangkan kekurangan bea meterai sebesar Rp150.000 dilunasi setelah putusan bila PT Mitra Bangun menang. Berdasarkan kutipan tersebut, langkah yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membayar Rp150.000 sebelum sidang dengan kode billing, lalu memperoleh pengesahan pemeteraian kemudian dari Pejabat Pos, karena hakim tidak dibenarkan mempertimbangkan dokumen yang bea meterainya belum dilunasi", B: "Mengajukan alat bukti terlebih dahulu pada sidang 18 November 2026 dan membayar Rp150.000 setelah putusan, karena larangan Pasal 21 hanya berlaku bagi notaris dan PPAT, bukan bagi hakim", C: "Membayar Rp150.000 sebelum sidang dengan kode billing, lalu meminta panitera pengadilan negeri mengesahkan pemeteraian kemudian pada saat alat bukti didaftarkan dalam persidangan", D: "Cukup menempelkan meterai tempel Rp10.000 pada setiap dokumen sebelum sidang tanpa pengesahan pejabat mana pun, karena meterai tempel sekaligus melunasi pokok dan sanksinya" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pemeteraian kemudian harus dituntaskan sebelum alat bukti diajukan: pembayaran pokok (dan sanksi bila ada), lalu pengesahan oleh pejabat yang ditetapkan Menteri. Tanpa itu, hakim dan panitera tidak dibenarkan menerima atau mempertimbangkan dokumen tersebut.",
        jejakHitung: [],
        mengapaSalah: { B: "Pasal 21 juga mencakup hakim, panitera, dan jurusita", C: "Pengesahan dilakukan pejabat yang ditetapkan Menteri (Pejabat Pos menurut PMK 78/2024), bukan panitera", D: "Dokumen yang lewat saat terutang dilunasi pokok + sanksi melalui pemeteraian kemudian yang wajib disahkan" },
        jebakan: "Pemeteraian kemudian bukan sekadar membayar; dokumen baru sah setelah disahkan pejabat yang ditetapkan Menteri."
      },
      dasarHukum: [ { pasal: "Pasal 1, Pasal 17, Pasal 18, dan Pasal 21 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (pengesahan pemeteraian kemudian)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Pejabat Pos sebagai pejabat pengesahan pemeteraian kemudian dan pembayaran dengan kode billing menurut PMK 78/2024 diambil dari ringkasan sekunder dan belum dicek ke naskah resmi PMK; ketentuan Pasal 1, 17, 18, dan 21 UU 10/2020 sudah sesuai."
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
      id: "A5-083", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-A5-07", formulirRef: "BM.induk.2",
      stem: "Lanjutan data PT Kasir Awan Indonesia (bea meterai Masa Oktober 2026 atas 18.500 dokumen objek). Dalam peta logis SPT Masa Bea Meterai, induk SPT memuat baris 2 (jumlah dokumen dan bea meterai yang dipungut), baris 3 (bea meterai yang disetor), dan baris 4 (kurang atau lebih setor). Pemungut telah menyetor Rp185.000.000 dengan kode billing pada Jumat, 13 November 2026, sebelum menyampaikan SPT. Isian baris 2 sampai 4 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Baris 2: 23.710 dokumen, Rp237.100.000; baris 3: Rp185.000.000; baris 4: kurang setor Rp52.100.000", B: "Baris 2: 18.500 dokumen, Rp185.000.000; baris 3: Rp185.000.000; baris 4: nihil", C: "Baris 2: 18.640 dokumen, Rp186.400.000; baris 3: Rp185.000.000; baris 4: kurang setor Rp1.400.000", D: "Baris 2: 18.500 dokumen, Rp185.000.000; baris 3: nihil; baris 4: kurang setor Rp185.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Baris dokumen dan bea meterai dipungut hanya memuat dokumen objek (18.500; Rp185.000.000). Setoran tepat waktu sebesar jumlah yang sama dicantumkan pada baris disetor, sehingga selisihnya nihil.",
        jejakHitung: [ ["Baris 2: dokumen objek", "18.500"], ["Baris 2: bea meterai dipungut 18.500 × Rp10.000", "Rp185.000.000"], ["Baris 3: disetor 13 November 2026", "Rp185.000.000"], ["Baris 4: selisih baris 2 − baris 3", "nihil"] ],
        mengapaSalah: { A: "Memasukkan 5.210 dokumen tepat Rp5.000.000 yang bukan objek ke baris 2", C: "Memasukkan 140 dokumen batal yang tidak pernah terutang", D: "Setoran dengan kode billing sebelum pelaporan dicantumkan sebagai bea meterai yang telah disetor" },
        jebakan: "Dokumen bukan objek dan dokumen batal tidak masuk SPT Masa; angka disetor diambil dari setoran yang sudah dilakukan."
      },
      dasarHukum: [ { pasal: "PMK 78/2024 (SPT Masa Bea Meterai pemungut)", berlakuSejak: "2024-11-01" }, { pasal: "PER-11/PJ/2025 (bentuk SPT Masa Bea Meterai di Coretax)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Nomor baris mengikuti peta logis SPT Masa Bea Meterai di js/data/formulir.js (BM.induk.2–4); tata letak formulir Coretax menurut PER-11/PJ/2025 belum dicek ke formulir resmi. Substansi angkanya (dokumen objek, bea meterai dipungut, disetor) mengikuti UU 10/2020 dan PMK 78/2024."
    },
    {
      id: "A5-084", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A5-07",
      kutipan: "PMK 81/2024 Pasal 94 dan ketentuan hari libur (parafrase): pajak yang dipotong atau dipungut, termasuk bea meterai yang dipungut pemungut, disetor paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir; bila jatuh tempo bertepatan dengan hari libur, penyetoran atau pelaporan dapat dilakukan pada hari kerja berikutnya. PMK 78/2024 (parafrase): pemungut menyampaikan SPT Masa Bea Meterai paling lambat tanggal 15 bulan berikutnya.",
      stem: "Lanjutan data PT Kasir Awan Indonesia. Tim pajak menyusun prosedur pelunasan dan pelaporan bea meterai Masa Oktober 2026 sebesar Rp185.000.000 melalui Coretax. Tanggal 15 November 2026 jatuh pada hari Minggu dan 16 November 2026 hari kerja. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN paling lambat Senin, 16 November 2026, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik paling lambat Jumat, 20 November 2026", B: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Jumat, 13 November 2026, karena tenggat pada hari libur dimajukan", C: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Senin, 30 November 2026, mengikuti tenggat akhir bulan", D: "Membuat kode billing bea meterai Rp185.000.000 di Coretax dan membayarnya hingga memperoleh NTPN, lalu menyampaikan SPT Masa Bea Meterai yang ditandatangani secara elektronik hingga memperoleh bukti penerimaan elektronik, keduanya paling lambat Senin, 16 November 2026" },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setor dan lapor pemungut sama-sama paling lambat tanggal 15 bulan berikutnya; karena 15 November 2026 hari Minggu, keduanya bergeser ke Senin, 16 November 2026. Bukti setor adalah NTPN dan bukti lapor adalah bukti penerimaan elektronik dari Coretax.",
        jejakHitung: [["Dokumen objek 18.500 × Rp10.000", "Rp185.000.000"], ["Tenggat setor dan lapor: 15 November 2026", "hari Minggu"], ["Bergeser ke hari kerja berikutnya", "Senin, 16 November 2026"]],
        mengapaSalah: { A: "Tenggat lapor tanggal 20 adalah ketentuan lama PMK 151/2021; kini setor dan lapor sama-sama tanggal 15", B: "Tenggat yang jatuh pada hari libur bergeser ke hari kerja berikutnya, bukan dimajukan", C: "Tenggat akhir bulan berikutnya berlaku untuk SPT Masa PPN, bukan untuk bea meterai pemungut" },
        jebakan: "Tenggat bea meterai pemungut tidak sama dengan SPT Masa PPh (tanggal 20) maupun SPT Masa PPN (akhir bulan)."
      },
      dasarHukum: [ { pasal: "PMK 81/2024 Pasal 94 (jatuh tempo tanggal 15; hari libur)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 78/2024 (setor dan lapor pemungut tanggal 15)", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (SPT Masa Bea Meterai di Coretax)", berlakuSejak: "2025-05-22" } ],
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
      dasarHukum: [{ pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "KMK 47/MK/EF.2/2026 (tarif bunga Oktober 2026)", berlakuSejak: "2026-10-01" }],
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
      id: "A5-087", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "BM.l1.1",
      stem: "Bank Anugerah Jaya, pemungut bea meterai atas cek, bilyet giro, dan tanda terima pembayaran digital, mengisi lampiran SPT Masa Bea Meterai Masa November 2026 yang merinci jumlah dokumen dan bea meterai per jenis dokumen. Data November 2026: 30 buku cek dan 18 buku bilyet giro diserahkan kepada nasabah (masing-masing 25 lembar); 4.120 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000; dan 6.900 tanda terima bernilai Rp5.000.000 ke bawah. Isian baris 'cek dan bilyet giro' serta baris 'dokumen yang menyatakan jumlah uang' pada lampiran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Cek dan bilyet giro: 48 buku, Rp480.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000", B: "Cek dan bilyet giro: 1.200 lembar, Rp12.000.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000", C: "Cek dan bilyet giro: 1.200 lembar, Rp12.000.000; dokumen jumlah uang: 11.020 dokumen, Rp110.200.000", D: "Cek dan bilyet giro: 750 lembar, Rp7.500.000; dokumen jumlah uang: 4.120 dokumen, Rp41.200.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Cek dan bilyet giro dihitung per lembar: (30 + 18) × 25 = 1.200 lembar × Rp10.000. Dokumen jumlah uang hanya yang lebih dari Rp5.000.000: 4.120 × Rp10.000.",
        jejakHitung: [ ["Cek 30 × 25", "750 lembar"], ["Bilyet giro 18 × 25", "450 lembar"], ["Cek dan bilyet giro 1.200 × Rp10.000", "Rp12.000.000"], ["Tanda terima > Rp5 juta 4.120 × Rp10.000", "Rp41.200.000"], ["Total dipungut", "Rp53.200.000"] ],
        mengapaSalah: { A: "Satuan cek dan bilyet giro adalah lembar, bukan buku", C: "Tanda terima Rp5.000.000 ke bawah bukan objek", D: "Bilyet giro juga surat berharga yang bea meterainya dipungut bank" },
        jebakan: "Dua satuan berbeda dalam satu lampiran: lembar untuk surat berharga, dokumen untuk tanda terima."
      },
      dasarHukum: [ { pasal: "Pasal 3 ayat (2) huruf d dan g, Pasal 10–11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024; PER-11/PJ/2025 (SPT Masa Bea Meterai)", berlakuSejak: "2025-05-22" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Rincian per jenis dokumen mengikuti peta logis lampiran SPT Masa Bea Meterai di js/data/formulir.js (BM.l1.1); tata letak lampiran Coretax menurut PER-11/PJ/2025 belum dicek ke formulir resmi. Perhitungan jumlah dokumen dan bea meterai mengikuti UU 10/2020."
    },
    {
      id: "A5-088", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Sekuritas Garuda Nusantara (pemungut bea meterai atas dokumen transaksi surat berharga) memungut bea meterai Masa Agustus 2026 atas 8.450 konfirmasi transaksi nasabah; nilai transaksi masa itu Rp1,2 triliun dari 6.300 nasabah aktif. Karena migrasi sistem, bea meterai baru disetor pada 21 Oktober 2026 dan SPT Masa Bea Meterai disampaikan pada 22 Oktober 2026. Jatuh tempo setor dan lapor adalah Selasa, 15 September 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Total sanksi administratif yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.806.900", B: "Rp953.450", C: "Rp2.206.900", D: "Rp84.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setoran penuh yang terlambat ditagih STP: bunga Pasal 9 ayat (2a) atas Rp84.500.000 selama 2 bulan (bagian bulan dihitung penuh) ditambah denda SPT Masa Rp100.000.",
        jejakHitung: [ ["Pokok 8.450 × Rp10.000", "Rp84.500.000"], ["15 September–21 Oktober 2026", "1 bulan 6 hari → 2 bulan"], ["Bunga = 84.500.000 × 1,01% × 2", "Rp1.706.900"], ["Denda SPT Masa terlambat (Pasal 7 ayat (1))", "Rp100.000"], ["Total sanksi", "Rp1.806.900"] ],
        mengapaSalah: { B: "Menghitung bunga 1 bulan; 15 September–21 Oktober adalah 1 bulan 6 hari sehingga dibulatkan 2 bulan", C: "Memakai denda SPT Masa PPN Rp500.000; SPT Masa Bea Meterai termasuk SPT Masa lainnya Rp100.000", D: "Mengenakan sanksi 100%; bea meterai disetor penuh sehingga yang ditagih hanya bunga dan denda" },
        jebakan: "Nilai transaksi Rp1,2 triliun dan jumlah nasabah tidak dipakai; bea meterai dihitung per konfirmasi transaksi."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 7 ayat (1) dan Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" } ],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A5-089", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 11 UU 10/2020 (parafrase): pemungut bea meterai yang tidak atau kurang memungut dan/atau tidak atau kurang menyetorkan bea meterai diterbitkan surat ketetapan pajak sebesar bea meterai yang tidak atau kurang dipungut dan/atau disetor, ditambah sanksi administratif sebesar 100%.",
      stem: "Bank Pesisir Raya, pemungut bea meterai atas cek dan bilyet giro, pada Masa Juni 2026 menyerahkan 40 lembar bilyet giro kepada CV Rafi Abadi. Karena kesalahan parameter sistem, bea meterai atas bilyet giro tersebut tidak dipungut. Pemeriksaan pada Oktober 2026 menemukan hal ini, sementara CV Rafi Abadi telah memakai seluruh bilyet giro untuk membayar pemasok. Berdasarkan kutipan tersebut, perlakuan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "CV Rafi Abadi wajib memeteraikan kemudian 40 lembar bilyet giro sebesar Rp20.000 per lembar (Rp800.000), sedangkan bank tidak dikenai sanksi karena tidak menerima uangnya", B: "Bank Pesisir Raya ditagih dengan STP berupa bunga Pasal 9 ayat (2a) UU KUP atas Rp400.000, tanpa sanksi 100%, karena kesalahan bersifat sistem dan bukan kesengajaan pemungut", C: "Bank Pesisir Raya diterbitkan surat ketetapan pajak sebesar Rp400.000 ditambah sanksi 100% Rp400.000, karena kewajiban memungut dan menyetor bea meterai atas bilyet giro ada pada pemungut", D: "Bank Pesisir Raya diterbitkan surat ketetapan pajak sebesar Rp10.000 ditambah sanksi 100% Rp10.000, karena 40 lembar bilyet giro diserahkan dalam satu buku kepada satu nasabah" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pemungut yang tidak memungut bea meterai atas dokumen yang wajib dipungutnya diterbitkan SKP sebesar bea meterai yang tidak dipungut (40 × Rp10.000) ditambah sanksi 100%.",
        jejakHitung: [ ["Pokok 40 lembar × Rp10.000", "Rp400.000"], ["Sanksi 100%", "Rp400.000"], ["Jumlah dalam SKP", "Rp800.000"] ],
        mengapaSalah: { A: "Pasal 11 menempatkan akibat tidak memungut pada pemungut", B: "STP berupa bunga hanya untuk setoran yang terlambat; tidak memungut ditetapkan dengan SKP + 100%", D: "Bea meterai dihitung per lembar bilyet giro" },
        jebakan: "Alasan kesalahan sistem tidak mengubah jenis sanksi; yang membedakan SKP dan STP adalah tidak dipungut/disetor versus hanya terlambat."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "PMK 78/2024 (pemungut atas cek dan bilyet giro)", berlakuSejak: "2024-11-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A5-090", topik: "A5.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Bayar Mudah, pemungut bea meterai, memungut bea meterai Masa Agustus 2026 sebesar Rp20.000.000 dan menyetornya pada 5 Oktober 2026, padahal jatuh temponya Selasa, 15 September 2026. SPT Masa Bea Meterai disampaikan tepat waktu. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP 1,01% per bulan. Sanksi bunga yang ditagih dengan STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp404.000", B: "Rp20.000.000", C: "Rp202.000", D: "Rp368.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Keterlambatan 20 hari dihitung 1 bulan; bunga = Rp20.000.000 × 1,01% × 1.",
        jejakHitung: [ ["15 September–5 Oktober 2026", "20 hari → 1 bulan"], ["Bunga = 20.000.000 × 1,01% × 1", "Rp202.000"] ],
        mengapaSalah: { A: "Menghitung 2 bulan karena melewati dua bulan kalender; 15 September–5 Oktober hanya 20 hari (1 bulan)", B: "Mengenakan sanksi 100%; setoran penuh yang terlambat hanya dikenai bunga", D: "Memakai tarif Pasal 13 ayat (2) 1,84%; keterlambatan setor memakai tarif Pasal 9 ayat (2a)" },
        jebakan: "Jumlah bulan dihitung dari tanggal jatuh tempo, bukan dari pergantian bulan kalender."
      },
      dasarHukum: [ { pasal: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 9 ayat (2a) UU KUP; KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" } ],
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
      id: "A5-093", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "Kuitansi pembayaran ganti rugi Rp35.000.000 yang diterima Tuan Haikal pada 4 Agustus 2021 tidak pernah dibubuhi meterai. Pada November 2026 Tuan Haikal akan mengajukannya sebagai alat bukti dalam gugatan perdata. Pernyataan yang paling tepat mengenai kuitansi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, sehingga kuitansi dapat langsung diajukan sebagai alat bukti tanpa pemeteraian kemudian.", B: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut belum daluwarsa karena jangka waktu 5 tahun dihitung sejak kuitansi akan diajukan ke pengadilan, sehingga harus dibayar Rp20.000.", C: "Kewajiban bea meterai atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, tetapi sanksi 100% tidak mengenal daluwarsa sehingga Rp10.000 tetap ditagih bersama pemeteraian kemudian.", D: "Kewajiban bea meterai dan sanksinya atas kuitansi tersebut telah daluwarsa sejak 4 Agustus 2026, tetapi kuitansi tetap harus dimeteraikan kemudian sebelum diajukan sebagai alat bukti di pengadilan." },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 23: kewajiban bea meterai dan sanksinya daluwarsa 5 tahun sejak saat terutang (4 Agustus 2021 → 4 Agustus 2026). Namun dokumen yang akan dijadikan alat bukti di pengadilan tetap harus dimeteraikan kemudian.",
        jejakHitung: [],
        mengapaSalah: { A: "Daluwarsa menghapus penagihan, tetapi dokumen yang akan menjadi alat bukti tetap harus dimeteraikan kemudian", B: "Daluwarsa dihitung sejak saat terutang kuitansi, yaitu saat diserahkan 4 Agustus 2021", C: "Pasal 23 mencakup kewajiban pemenuhan bea meterai maupun sanksi administratifnya" },
        jebakan: "Dua rezim berbeda: daluwarsa menghapus tagihan atas dokumen perdata, sedangkan pengajuan sebagai alat bukti menuntut pemeteraian kemudian."
      },
      dasarHukum: [ { pasal: "Pasal 23 UU 10/2020 beserta penjelasannya", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 3 ayat (1) huruf b dan Pasal 17 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Kewajiban tetap memeteraikan kemudian dokumen yang telah daluwarsa bila akan dijadikan alat bukti bersumber dari penjelasan UU 10/2020 menurut ringkasan sekunder dan belum dicek ke naskah resmi; jumlah yang dibayar dalam keadaan ini sengaja tidak ditanyakan."
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
      id: "A5-095", topik: "A5.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 19 UU 10/2020 (parafrase): pihak yang terutang yang tidak atau kurang membayar bea meterai diterbitkan surat ketetapan pajak sesuai ketentuan peraturan perundang-undangan di bidang ketentuan umum dan tata cara perpajakan, sebesar bea meterai yang tidak atau kurang dibayar ditambah sanksi administratif 100% (Pasal 18 ayat (2)). Pasal 25 ayat (1) dan (3) UU KUP (parafrase): wajib pajak dapat mengajukan keberatan atas surat ketetapan pajak dalam jangka waktu 3 bulan sejak tanggal dikirim, dengan mengemukakan jumlah pajak yang terutang menurut penghitungan wajib pajak disertai alasan yang jelas.",
      stem: "Hasil pemeriksaan bea meterai atas PT Panca Usaha dituangkan dalam surat ketetapan pajak yang dikirim 5 Oktober 2026 sebesar Rp1.240.000 (62 dokumen × Rp10.000 ditambah sanksi 100%). PT Panca Usaha berpendapat 20 dokumen di antaranya adalah surat jalan pengiriman barang yang bukan objek, sedangkan 42 dokumen lainnya memang kuitansi di atas Rp5.000.000 yang tidak bermeterai. Berdasarkan kutipan tersebut, prosedur yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Mengajukan keberatan melalui Coretax paling lambat 5 Januari 2027 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sehingga jumlah ketetapan menurut PT Panca Usaha beserta sanksi 100% menjadi Rp840.000", B: "Mengajukan keberatan melalui Coretax paling lambat 5 Januari 2027 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sedangkan sanksi 100% gugur seluruhnya karena keberatan diajukan sehingga jumlah ketetapan menurut PT Panca Usaha Rp420.000", C: "Mengajukan keberatan melalui Coretax paling lambat 5 November 2026 dengan mengemukakan bea meterai terutang menurut penghitungan PT Panca Usaha atas 42 dokumen sebesar Rp420.000, sehingga jumlah ketetapan menurut PT Panca Usaha beserta sanksi 100% menjadi Rp840.000", D: "Langsung mengajukan gugatan ke Pengadilan Pajak paling lambat 30 hari sejak surat ketetapan dikirim" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat ketetapan bea meterai diterbitkan menurut tata cara UU KUP (Pasal 19 UU 10/2020), sehingga diuji melalui keberatan dalam 3 bulan sejak dikirim (5 Januari 2027) dengan mengemukakan bea meterai terutang menurut WP: 42 dokumen × Rp10.000 = Rp420.000. Sanksi 100% melekat pada bea meterai yang tidak dibayar, sehingga jumlah ketetapan menurut WP Rp840.000.",
        jejakHitung: [ ["Dokumen objek menurut WP", "62 − 20 = 42"], ["Bea meterai terutang menurut WP 42 × Rp10.000", "Rp420.000"], ["Sanksi 100% (Pasal 18 ayat (2))", "Rp420.000"], ["Jumlah ketetapan menurut WP", "Rp840.000"], ["Batas keberatan 3 bulan sejak 5 Oktober 2026", "5 Januari 2027"] ],
        mengapaSalah: { B: "Pengajuan keberatan tidak menghapus sanksi 100% atas dokumen yang diakui tidak dibayar; sanksi itu mengikuti pokoknya (Pasal 18 ayat (2) dan Pasal 19 UU 10/2020)", C: "Jangka waktu keberatan 3 bulan sejak surat ketetapan dikirim, bukan 1 bulan", D: "Sengketa jumlah ketetapan ditempuh dengan keberatan; gugatan untuk pelaksanaan penagihan atau keputusan tertentu" },
        jebakan: "Yang dikemukakan dalam keberatan adalah pajak terutang menurut WP (pokok atas 42 dokumen); sanksi 100% atas dokumen yang diakui tetap mengikuti pokok tersebut."
      },
      dasarHukum: [ { pasal: "Pasal 19 UU 10/2020", berlakuSejak: "2021-01-01" }, { pasal: "Pasal 25 ayat (1) dan (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 7 huruf a UU 10/2020 (surat jalan bukan objek)", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Rujukan Pasal 19 UU 10/2020 kepada UU KUP untuk penerbitan surat ketetapan dicocokkan dengan teks pasal dari sumber sekunder, tetapi penerapan prosedur keberatan Pasal 25 UU KUP atas surat ketetapan bea meterai belum dicek ke naskah resmi atau PMK keberatan; jangka waktu keberatan 3 bulan dan kewajiban mengemukakan jumlah menurut WP mengikuti Pasal 25 UU KUP, sedangkan kanal pengajuan mengikuti PMK keberatan era Coretax."
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
      id: "A5-097", topik: "A5.6", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 3, kasusId: "V-A5-08", formulirRef: "1771.l1.7",
      stem: "Lanjutan data PT Prima Kencana. Pada 2026 PT Prima Kencana melunasi ketetapan bea meterai hasil pemeriksaan (pokok Rp600.000 dan sanksi Rp600.000) dan membukukan seluruhnya sebagai beban umum. Pada tahun yang sama perusahaan membeli dan memakai 3.400 meterai elektronik untuk dokumen operasional (Rp34.000.000) yang dibebankan sebagai biaya administrasi, serta membayar STP bunga keterlambatan setor PPh Pasal 21 sebesar Rp2.150.000 yang dibebankan sebagai beban lain-lain. Dalam lampiran perhitungan penghasilan neto fiskal SPT Tahunan PPh Badan 2026, jumlah penyesuaian fiskal positif yang timbul dari ketiga transaksi tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.350.000", B: "Rp2.750.000", C: "Rp600.000", D: "Rp37.350.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Sanksi administrasi berupa bunga, denda, dan kenaikan tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh): sanksi bea meterai Rp600.000 + bunga STP Rp2.150.000. Pokok bea meterai dan pembelian meterai elektronik adalah pajak selain PPh yang berkaitan dengan usaha sehingga dapat dibebankan.",
        jejakHitung: [ ["Sanksi 100% bea meterai", "Rp600.000"], ["Bunga STP PPh Pasal 21", "Rp2.150.000"], ["Penyesuaian fiskal positif (unsur sanksi administrasi)", "Rp2.750.000"], ["Pokok bea meterai dan meterai elektronik operasional", "dapat dibebankan → tidak dikoreksi"] ],
        mengapaSalah: { A: "Ikut mengoreksi pokok bea meterai Rp600.000; pokok bea meterai adalah pajak selain PPh yang dapat dibebankan", C: "Tidak mengoreksi bunga STP; bunga dalam STP juga sanksi administrasi yang tidak dapat dikurangkan", D: "Mengoreksi seluruh beban bea meterai termasuk meterai elektronik untuk dokumen operasional" },
        jebakan: "Pisahkan pokok bea meterai (biaya) dari sanksinya (bukan biaya) meskipun dibayar dengan satu setoran."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf k UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 6 ayat (1) huruf a UU PPh (pajak selain PPh sebagai biaya)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Kode baris mengikuti peta logis Lampiran I SPT 1771 di js/data/formulir.js (1771.l1.7, penyesuaian fiskal positif); letak isian pada lampiran SPT PPh Badan Coretax (PER-11/PJ/2025) belum dicek. Perlakuan fiskalnya mengikuti Pasal 6 dan Pasal 9 UU PPh."
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
      id: "A5-102", topik: "A5.6", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 1, formulirRef: "1770.l1.3",
      stem: "Tuan Hasan, pengusaha toko bahan bangunan yang menyelenggarakan pembukuan, pada 2026 membayar pemeteraian kemudian atas 14 kuitansi pemasok sebesar Rp280.000 (pokok Rp140.000 dan sanksi Rp140.000) dan mencatat seluruhnya sebagai biaya administrasi usaha. Dalam lampiran perhitungan penghasilan neto SPT Tahunan PPh Orang Pribadi 1770 tahun pajak 2026, perlakuan atas transaksi ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Penyesuaian fiskal positif Rp280.000", B: "Penyesuaian fiskal positif Rp140.000", C: "Tidak ada penyesuaian fiskal karena seluruhnya biaya administrasi usaha", D: "Penyesuaian fiskal negatif Rp140.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Sanksi 100% bea meterai tidak dapat dikurangkan sehingga dikoreksi positif Rp140.000; pokok bea meterai Rp140.000 tetap menjadi biaya.",
        jejakHitung: [ ["Pokok bea meterai (biaya)", "Rp140.000"], ["Sanksi 100% (bukan biaya)", "Rp140.000"], ["Penyesuaian fiskal positif", "Rp140.000"] ],
        mengapaSalah: { A: "Pokok bea meterai adalah pajak selain PPh yang dapat dibebankan; hanya sanksinya yang dikoreksi", C: "Sanksi administrasi perpajakan tidak dapat dikurangkan (Pasal 9 ayat (1) huruf k UU PPh)", D: "Sanksi yang telah dibebankan dikoreksi menambah penghasilan neto (positif), bukan mengurangi" },
        jebakan: "Satu pembayaran pemeteraian kemudian memuat dua unsur dengan perlakuan fiskal berbeda."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (1) huruf k dan Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01" } ],
      anggaranDetik: 75,
      verifikasi: "◐",
      peringatan: "Kode baris mengikuti peta logis Lampiran 1770-I di js/data/formulir.js (1770.l1.3, penyesuaian fiskal positif); letak isian pada lampiran SPT PPh OP Coretax (PER-11/PJ/2025) belum dicek. Perlakuan fiskalnya mengikuti Pasal 6 dan Pasal 9 UU PPh."
    },
    {
      id: "A5-103",
      topik: "A5.2",
      tingkat: [ "A", "B", "C" ],
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
        mengapaSalah: { A: "Penandatanganan di Singapura belum menimbulkan utang Bea Meterai; dokumen luar negeri terutang saat digunakan di Indonesia (Ps. 8 ayat (1) huruf e).", B: "Dokumen yang dibuat di luar negeri tetap menjadi objek Bea Meterai bila digunakan di Indonesia.", C: "Untuk dokumen luar negeri, yang terutang adalah pihak penerima manfaat (Ps. 9 ayat (5)), yaitu PT Ortax Distributor; naskah Ortax XYZ tidak pernah digunakan di Indonesia." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU 10/2020 Pasal 3 ayat (2) huruf a."
      },
      dasarHukum: [
        { pasal: "UU 10/2020 Pasal 3 ayat (2) huruf a", berlakuSejak: "2021-01-01" },
        { pasal: "UU 10/2020 Pasal 8 ayat (1) huruf e", berlakuSejak: "2021-01-01" },
        { pasal: "UU 10/2020 Pasal 9 ayat (5)", berlakuSejak: "2021-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Ujung opsi D rusak OCR (\"Tun tet ae Ab\"); dilengkapi \"atas dokumen\" sesuai pembahasan.",
      sumber: { set: "TO-B-2026-11", no: 4, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
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
    { id: "KT-A5-20", topik: "A5.4", tipe: "angka", depan: "Tenggat setor dan lapor pemungut bea meterai?", belakang: "Tanggal 15 bulan berikutnya (setor dan lapor)", dasar: "PMK 78/2024; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: "Setor tanggal 10, lapor tanggal 20 (PMK 151/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-21", topik: "A5.4", tipe: "prosedur", depan: "Siapa yang menetapkan pemungut bea meterai?", belakang: "Kepala KPP dengan surat keputusan", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-22", topik: "A5.4", tipe: "prosedur", depan: "Deposit e-meterai bagi pemungut setelah PMK 78/2024?", belakang: "Dihapus; Peruri mendistribusikan langsung kepada pemungut", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: "Mekanisme deposit (PMK 151/2021)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-23", topik: "A5.4", tipe: "angka", depan: "Denda SPT Masa Bea Meterai terlambat?", belakang: "Rp100.000 (SPT Masa lainnya)", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-24", topik: "A5.4", tipe: "pasal", depan: "Sanksi pemungut: tidak memungut/menyetor vs terlambat setor/lapor?", belakang: "Tidak pungut/setor: SKP + 100%; terlambat: STP sesuai UU KUP", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-25", topik: "A5.4", tipe: "pasal", depan: "PMK pelaksanaan bea meterai yang dicabut PMK 78/2024?", belakang: "PMK 133/2021, 134/2021, dan 151/2021", dasar: "PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: "PMK 133/2021, 134/2021, 151/2021", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-26", topik: "A5.5", tipe: "angka", depan: "Daluwarsa kewajiban bea meterai dan sanksinya?", belakang: "5 tahun sejak saat terutang", dasar: "Pasal 23 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-27", topik: "A5.5", tipe: "angka", depan: "Pemeteraian kemudian dokumen objek yang tidak dilunasi pada saat terutang?", belakang: "Rp20.000 per dokumen (Rp10.000 + sanksi 100%)", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "Pokok + sanksi 200% (UU 13/1985)", dekTambahan: [] },
    { id: "KT-A5-28", topik: "A5.5", tipe: "definisi", depan: "Pemeteraian kemudian tanpa sanksi berlaku untuk?", belakang: "Dokumen semula bukan objek yang diajukan sebagai alat bukti di pengadilan", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-29", topik: "A5.5", tipe: "prosedur", depan: "Pelaksana pengesahan pemeteraian kemudian?", belakang: "Pejabat yang ditetapkan Menteri: Pejabat Pos; Pejabat DJP bila lewat SKP", dasar: "Pasal 1 UU 10/2020; PMK 78/2024", berlakuSejak: "2024-11-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-30", topik: "A5.6", tipe: "angka", depan: "Sanksi administratif bea meterai bagi pihak terutang?", belakang: "100% dari bea meterai yang terutang", dasar: "Pasal 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: "200% (UU 13/1985)", dekTambahan: [] },
    { id: "KT-A5-31", topik: "A5.6", tipe: "definisi", depan: "Tidak membubuhkan meterai: pidana atau perjanjian batal?", belakang: "Bukan keduanya; akibatnya administratif, perjanjian tetap sah", dasar: "Pasal 17 dan 18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-32", topik: "A5.6", tipe: "pasal", depan: "Perbuatan yang diancam pidana dalam UU Bea Meterai?", belakang: "Memalsu meterai; memakai atau mengedarkan meterai palsu atau bekas", dasar: "Pasal 24–26 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-33", topik: "A5.1", tipe: "definisi", depan: "Slip setoran simpanan dan bilyet deposito: kena bea meterai?", belakang: "Tidak; dokumen simpanan uang dikecualikan berapa pun nilainya", dasar: "Pasal 7 huruf g UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
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
    { id: "KT-A5-47", topik: "A5.4", tipe: "angka", depan: "Tenggat setor dan lapor pemungut jatuh pada hari libur?", belakang: "Bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-48", topik: "A5.4", tipe: "prosedur", depan: "Bukti setor dan bukti lapor pemungut di Coretax?", belakang: "NTPN untuk setoran; bukti penerimaan elektronik untuk SPT Masa", dasar: "PMK 81/2024; PER-11/PJ/2025", berlakuSejak: "2025-01-01", menggantikan: "Kanal pra-Coretax: e-Billing dan pelaporan SPT Masa lewat DJP Online", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A5-49", topik: "A5.4", tipe: "pasal", depan: "Pemungut tidak memungut bea meterai karena kesalahan sistem?", belakang: "SKP atas pemungut: pokok + sanksi 100%", dasar: "Pasal 11 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-50", topik: "A5.5", tipe: "angka", depan: "Dokumen luar negeri sudah dipakai di Indonesia tanpa dilunasi?", belakang: "Rp10.000 + sanksi 100% = Rp20.000, lewat pemeteraian kemudian", dasar: "Pasal 8 ayat (1) huruf e, Pasal 17–18 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-51", topik: "A5.5", tipe: "pasal", depan: "Siapa yang dilarang menerima dokumen yang bea meterainya belum lunas?", belakang: "Hakim, panitera, jurusita, notaris, PPAT, ASN, dan pejabat negara", dasar: "Pasal 21 UU 10/2020", berlakuSejak: "2021-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A5-52", topik: "A5.6", tipe: "pasal", depan: "Sanksi bea meterai di SPT PPh: biaya atau bukan?", belakang: "Bukan biaya (koreksi positif); pokok bea meterai tetap biaya", dasar: "Pasal 9 ayat (1) huruf k dan Pasal 6 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
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
      narasi: "Bank Arunika telah ditetapkan Kepala KPP sebagai pemungut bea meterai atas cek, bilyet giro, dan dokumen tanda terima pembayaran digital yang difasilitasinya. Pada Masa September 2026 bank menyerahkan 40 buku cek dan 24 buku bilyet giro (masing-masing 25 lembar) kepada nasabah, serta memfasilitasi 6.300 tanda terima pembayaran digital bernilai lebih dari Rp5.000.000 dan 9.800 tanda terima bernilai Rp5.000.000 ke bawah. Karena migrasi sistem, bea meterai Masa September 2026 baru disetor pada 18 November 2026, dan SPT Masa Bea Meterai disampaikan pada 19 November 2026. Anggap tarif bunga Pasal 9 ayat (2a) UU KUP yang berlaku 1,01% per bulan.",
      data: [ ["Buku cek", "40 buku × 25 lembar"], ["Buku bilyet giro", "24 buku × 25 lembar"], ["Tanda terima digital > Rp5 juta", "6.300 dokumen"], ["Tanda terima digital ≤ Rp5 juta", "9.800 dokumen"], ["Tanggal setor", "18 November 2026"], ["Tanggal lapor SPT Masa", "19 November 2026"], ["Tarif bunga (asumsi)", "1,01% per bulan"] ],
      langkah: [
        { no: 1, pertanyaan: "Berapa lembar cek dan bilyet giro yang bea meterainya dipungut?", tipe: "angka", jawaban: 1600, toleransi: 0,
          petunjuk: ["Satuan dokumen adalah lembar, bukan buku", "Cek 40 × 25 = 1.000; bilyet giro 24 × 25 = 600", "Jawaban: 1.600 lembar"],
          penjelasan: "Setiap lembar cek dan bilyet giro adalah surat berharga tersendiri." },
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
          petunjuk: ["Sanksi administrasi berupa bunga, denda, dan kenaikan tidak dapat dikurangkan", "Jumlahkan hanya unsur sanksi, bukan pokok", "100.000 + 747.400 + 8.000.000 = Rp8.847.400"],
          penjelasan: "Pasal 9 ayat (1) huruf k UU PPh. Yang dikoreksi pada baris sanksi administrasi hanya unsur sanksi; perlakuan pokok dalam SKP tidak ditanyakan di sini." }
      ],
      kesimpulan: "Pisahkan pelanggaran pemungut per masa: lapor terlambat → denda Rp100.000; setor terlambat → bunga Rp747.400; tidak disetor atau tidak dipungut → SKP berisi pokok Rp8.000.000 dan sanksi 100% Rp8.000.000. Seluruh unsur sanksi, Rp8.847.400, menjadi koreksi fiskal positif dalam SPT PPh Badan.",
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
