// Modul E — Etika & Ujian Profesi Asosiasi (di luar skor UKP). Rekonstruksi dari kisi-kisi dan peraturan, bukan soal asli.
// Ketentuan yang dipakai: berlaku Oktober 2026 (Kode Etik & Standar Profesi IKPI SK 07/KONGRES XII/IKPI/2024, PMK 55/2026, PMK 44/2026, UU KUP s.t.d.t.d. UU 7/2021).
UKP.register({
  meta: {
    kode: "E", slug: "etika-profesi", nama: "Etika & Ujian Profesi Asosiasi",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 60,
    perkiraanBobotSoal: { A: 0, B: 0, C: 0 },
    statusPer: "2026-10-28",
    tujuan: "Peserta mampu menerapkan Kode Etik dan Standar Profesi asosiasi pada kasus praktik (klien, rekan seprofesi, publikasi, benturan kepentingan), memahami alur izin praktik, PPL, laporan tahunan, larangan, dan sanksi menurut PMK 55/2026, serta tata cara kuasa Wajib Pajak menurut PMK 44/2026. Materi ini tidak diujikan di UKP BPPK, tetapi menjadi bahan ujian profesi yang wajib diselenggarakan asosiasi paling lambat 31 Desember 2026.",
    dasarHukumUtama: [
      "Kode Etik dan Standar Profesi IKPI (SK 07/KONGRES XII/IKPI/2024, Kongres XII Bali, Agustus 2024)",
      "PMK 55 Tahun 2026 tentang Konsultan Pajak dan Pihak Lain yang Bertindak sebagai Kuasa Wajib Pajak (berlaku 24 Agustus 2026)",
      "PMK 44 Tahun 2026 tentang Persyaratan untuk Menjadi Kuasa di Bidang Perpajakan (berlaku 6 Juli 2026)",
      "UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP) Pasal 4 ayat (3), 32, 35, 39, 43"
    ],
    perubahanTerbaru: [
      { sebelum: "Profesi konsultan pajak diatur PMK 111/PMK.03/2014 jo. PMK 175/PMK.01/2022 (izin oleh Sekretaris Jenderal Kemenkeu, sertifikat USKP berjenjang oleh KP3SKP)", sesudah: "PMK 55/2026 mencabut keduanya; izin A/B/C tidak harus berjenjang dengan syarat SKK hasil uji kompetensi dan lulus ujian profesi asosiasi", dasar: "PMK 55/2026 Pasal 4 (tingkat izin) dan ketentuan penutup (pencabutan PMK lama)", berlakuSejak: "2026-08-24" },
      { sebelum: "Kode Etik diuji sebagai mata ujian USKP tingkat A", sesudah: "Kode Etik dikeluarkan dari UKP; diuji dalam ujian profesi asosiasi (standar etik, standar praktik, sistem pengendalian mutu) yang wajib digelar paling lambat 31 Desember 2026", dasar: "PMK 55/2026 Pasal 61", berlakuSejak: "2026-08-24" },
      { sebelum: "Keanggotaan asosiasi menjadi syarat saat mengajukan permohonan izin praktik", sesudah: "Keanggotaan bukan syarat permohonan; wajib bergabung paling lambat 30 hari kerja sejak izin terbit, bila tidak izin dibekukan 3 bulan lalu dicabut", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { sebelum: "Pencabutan izin praktik tanpa penegasan sifat permanen", sesudah: "Pencabutan izin bersifat permanen: tidak dapat mengajukan izin baru dan SKK ikut tidak berlaku", dasar: "PMK 55/2026 Pasal 42 ayat (1)–(2)", berlakuSejak: "2026-08-24" },
      { sebelum: "Laporan tahunan konsultan memuat ringkasan jasa", sesudah: "Laporan tahunan paling lambat 30 April tahun berikutnya wajib memuat perincian jasa per klien, PPL, dan keanggotaan asosiasi", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { sebelum: "Kuasa WP hanya konsultan pajak atau karyawan WP; surat kuasa khusus tanpa kewajiban mencantumkan masa berlaku (PMK 229/PMK.03/2014)", sesudah: "Tiga kategori kuasa: konsultan pajak, pihak lain ber-SKT (termasuk karyawan), keluarga sampai derajat kedua; surat kuasa khusus wajib memuat masa berlaku dan tidak dapat disubstitusikan", dasar: "PMK 44/2026 Pasal 2–3, 8", berlakuSejak: "2026-07-06" },
      { sebelum: "Kode Etik IKPI hasil Kongres XI Malang 2019", sesudah: "Kode Etik dan Standar Profesi hasil Kongres XII Bali 2024 (SK 07/KONGRES XII/IKPI/2024) dan pembentukan Dewan Kehormatan sebagai penegak kode etik", dasar: "SK 07/KONGRES XII/IKPI/2024; ART IKPI Pasal 35 ayat (1)", berlakuSejak: "2024-08-20" }
    ],
    lembarRingkas: [
      { label: "Berlaku PMK 55/2026 (konsultan pajak)", nilai: "24 Agustus 2026; mencabut PMK 111/2014 jo. PMK 175/2022", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "Berlaku PMK 44/2026 (kuasa WP)", nilai: "6 Juli 2026; mencabut PMK 229/PMK.03/2014", dasar: "PMK 44/2026", berlakuSejak: "2026-07-06" },
      { label: "Cakupan izin A / B / C", nilai: "A: OP (kecuali domisili mitra P3B) · B: OP dan badan kecuali PMA, BUT, dan OP/badan domisili mitra P3B · C: seluruh WP", dasar: "PMK 55/2026 Pasal 4", berlakuSejak: "2026-08-24" },
      { label: "Syarat kompetensi izin", nilai: "SKK hasil UKP + lulus ujian profesi asosiasi; tidak wajib berjenjang", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "Pengalaman kerja perpajakan", nilai: "B ≥ 1 tahun · C ≥ 2 tahun (akumulasi 3 tahun terakhir)", dasar: "PMK 55/2026 (syarat izin)", berlakuSejak: "2026-08-24" },
      { label: "Naik tingkat izin", nilai: "Praktik ≥ 1 tahun (satu tingkat) · ≥ 2 tahun (dua tingkat) + SKK tingkat tujuan", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "Masa berlaku SKK hasil UKP", nilai: "3 tahun sejak terbit", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "Sertifikat USKP lama sebagai SKK", nilai: "Paling lama 2 tahun sejak sertifikat terbit", dasar: "PMK 55/2026 Pasal 60 huruf f", berlakuSejak: "2026-08-24" },
      { label: "Gabung asosiasi terdaftar", nilai: "≤ 30 hari kerja sejak izin terbit; lalai → pembekuan 3 bulan → pencabutan", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "Asosiasi terdaftar", nilai: "IKPI, AKP2I, Perkoppi, P3KPI", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
      { label: "PPL per tahun (total / terstruktur)", nilai: "A 20/16 · B 30/24 · C 45/36 SKP; wajib mulai Januari tahun berikutnya setelah izin terbit", dasar: "PMK 55/2026 Pasal 26 ayat (2) dan (3)", berlakuSejak: "2026-08-24" },
      { label: "Laporan tahunan konsultan", nilai: "30 April tahun berikutnya; profil, tempat bekerja, bukti SPT, rincian jasa per klien; di KKP disampaikan oleh KKP", dasar: "PMK 55/2026 Pasal 28 dan 29", berlakuSejak: "2026-08-24" },
      { label: "Ujian profesi asosiasi", nilai: "Paling lambat 31 Desember 2026; etika, standar praktik, SPM", dasar: "PMK 55/2026 Pasal 61", berlakuSejak: "2026-08-24" },
      { label: "Jasa di luar klasifikasi izin", nilai: "Pembekuan izin selama 3 bulan", dasar: "PMK 55/2026 Pasal 24 ayat (1) huruf a dan ayat (4)", berlakuSejak: "2026-08-24" },
      { label: "Melanggar Standar Praktik", nilai: "Peringatan", dasar: "PMK 55/2026 Pasal 24 ayat (6)", berlakuSejak: "2026-08-24" },
      { label: "Kode etik · independensi · keterangan menyesatkan klien · rekayasa", nilai: "Pembekuan izin paling lama 2 tahun", dasar: "PMK 55/2026 Pasal 24 ayat (5) dan (7), Pasal 30 ayat (3)", berlakuSejak: "2026-08-24" },
      { label: "Imbalan kepada petugas · gratifikasi · pemerasan · rangkap jabatan", nilai: "Pencabutan permanen; SKK ikut tidak berlaku", dasar: "PMK 55/2026 Pasal 30 ayat (4), Pasal 42", berlakuSejak: "2026-08-24" },
      { label: "Sudah 3 kali dibekukan dalam 5 tahun, melanggar lagi", nilai: "Pencabutan izin", dasar: "PMK 55/2026 Pasal 41 ayat (3)–(4)", berlakuSejak: "2026-08-24" },
      { label: "Kategori kuasa WP", nilai: "Konsultan pajak · pihak lain ber-SKT · keluarga s.d. derajat kedua; pemegang brevet tanpa SKT hanya s.d. 31 Des 2026", dasar: "PMK 44/2026 Pasal 2–3 dan 16", berlakuSejak: "2026-07-06" },
      { label: "Surat kuasa khusus", nilai: "Satu kuasa, hak tertentu, masa berlaku; tanpa substitusi; dilampirkan pada SPT", dasar: "PMK 44/2026 Pasal 8; Pasal 4 ayat (3) UU KUP", berlakuSejak: "2026-07-06" },
      { label: "Membuka rahasia klien", nilai: "Atas permintaan tertulis DJP untuk pemeriksaan, penagihan, atau penyidikan", dasar: "Pasal 35 UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Sengaja menolak permintaan Pasal 35", nilai: "Penjara ≤ 1 tahun dan denda ≤ Rp25.000.000", dasar: "Pasal 41A UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Kuasa yang turut serta/membantu pidana", nilai: "Dipidana seperti pelaku Pasal 39/39A", dasar: "Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Pidana SPT tidak benar (sengaja)", nilai: "Penjara 6 bulan–6 tahun; denda 2–4 × pajak kurang dibayar", dasar: "Pasal 39 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Pidana faktur/bukti fiktif", nilai: "Penjara 2–6 tahun; denda 2–6 × pajak dalam faktur/bukti", dasar: "Pasal 39A UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Imbalan konsultan OP (bukan pegawai)", nilai: "PPh 21 = tarif Ps. 17 × 50% bruto per pembayaran (BP21)", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01" },
      { label: "Imbalan kepada KKP berbentuk badan", nilai: "PPh 23 2% dari bruto tanpa PPN (BPPU)", dasar: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2009-01-01" },
      { label: "Keberatan · banding (dibantu kuasa)", nilai: "3 bulan sejak SKP dikirim · 3 bulan sejak keputusan diterima; denda 30% · 60%", dasar: "Pasal 25, 27 UU KUP; Pasal 35 UU 14/2002", berlakuSejak: "2021-10-29" }
    ]
  },
  topik: [
    {
      id: "E.1", slug: "kepribadian-prinsip", judul: "Kepribadian dan prinsip dasar etika konsultan pajak",
      estimasiMenit: 12, jenisDominan: ["etika", "kasus"],
      ringkasan: [
        "Kode Etik yang berlaku bagi anggota IKPI adalah hasil Kongres XII Bali (18–20 Agustus 2024) melalui SK 07/KONGRES XII/IKPI/2024, yang memperbarui versi Kongres XI Malang 2019; anggota asosiasi lain tunduk pada kode etik asosiasinya masing-masing.",
        "Bab Kepribadian: konsultan pajak adalah WNI yang setia pada Pancasila dan UUD 1945, berakhlak, jujur, dan menjunjung tinggi hukum; profesinya mulia dan terhormat di bawah perlindungan hukum, undang-undang, dan Kode Etik.",
        "Prinsip inti: integritas, objektivitas/independensi, kompetensi dan kehati-hatian profesional, kerahasiaan, perilaku profesional, serta kepatuhan pada peraturan perpajakan dan Standar Profesi.",
        "Kerahasiaan berlanjut walau perikatan telah berakhir; pengecualiannya hanya kewajiban undang-undang, misalnya permintaan tertulis Direktur Jenderal Pajak untuk pemeriksaan, penagihan, atau penyidikan (Pasal 35 UU KUP).",
        "Kompetensi: izin praktik menentukan batas kewenangan, bukan jaminan keahlian; konsultan hanya menerima penugasan yang dapat ditangani secara kompeten dan wajib memutakhirkan pengetahuan melalui PPL.",
        "Integritas berdimensi hukum: kuasa yang turut serta atau membantu tindak pidana perpajakan dapat dipidana (Pasal 43 ayat (1) jo. Pasal 39 UU KUP), di samping sanksi profesi menurut PMK 55/2026."
      ],
      poinKunci: [
        { label: "Kode Etik berlaku", nilai: "SK 07/KONGRES XII/IKPI/2024 (Kongres XII Bali)", dasar: "SK 07/KONGRES XII/IKPI/2024", berlakuSejak: "2024-08-20" },
        { label: "Prinsip inti", nilai: "integritas, objektivitas, kompetensi & kehati-hatian, kerahasiaan, perilaku profesional", dasar: "Kode Etik IKPI Bab II", berlakuSejak: "2024-08-20" },
        { label: "Pembuka rahasia klien", nilai: "kewajiban UU, mis. permintaan tertulis DJP (Pasal 35 UU KUP)", dasar: "Pasal 35 ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Kuasa yang membantu tindak pidana", nilai: "dapat dipidana seperti pelaku (Pasal 39/39A)", dasar: "Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Menjanjikan hasil/kepastian menang", nilai: "dilarang", dasar: "Kode Etik IKPI (larangan dalam hubungan dengan klien)", berlakuSejak: "2024-08-20" }
      ],
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab II (Kepribadian)", catatan: "prinsip integritas, objektivitas, kompetensi, kerahasiaan, perilaku profesional" },
        { pasal: "Pasal 35 ayat (1) dan (2) UU KUP", catatan: "kewajiban konsultan memberi keterangan atas permintaan tertulis DJP" },
        { pasal: "Pasal 43 ayat (1) UU KUP", catatan: "perluasan subjek pidana kepada wakil, kuasa, pegawai, dan pihak lain" }
      ],
      jebakan: [
        { teks: "Mengira kewajiban rahasia berakhir bersama perikatan; kewajiban itu tetap melekat setelah klien pindah", tagSebab: "salah-baca" },
        { teks: "Menganggap telepon atau pesan singkat petugas cukup untuk membuka rahasia klien; Pasal 35 UU KUP mensyaratkan permintaan tertulis", tagSebab: "salah-baca" },
        { teks: "Mengira konsultan aman dari pidana karena SPT adalah milik WP; Pasal 43 ayat (1) menyebut kuasa secara tegas", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Pemeriksa yang sedang memeriksa bekas klien menelepon konsultan dan meminta kertas kerja dikirim lewat aplikasi pesan hari itu. Apa sikap yang benar?",
        jawaban: "Minta permintaan tertulis DJP; setelah ada, berikan keterangan sebatas yang diminta",
        langkah: [["Prinsip yang berlaku", "Kerahasiaan klien, tetap melekat setelah perikatan berakhir"], ["Pengecualian", "Kewajiban undang-undang"], ["Syarat Pasal 35 UU KUP", "Permintaan tertulis DJP untuk pemeriksaan/penagihan/penyidikan"], ["Tindakan", "Tunda sampai surat tertulis ada, lalu serahkan sebatas permintaan"]]
      },
      verifikasi: "◐",
      peringatan: "Teks pasal Kode Etik IKPI versi 2024 belum dibaca langsung; rumusan prinsip mengikuti versi Kongres XI Malang 2019 dan ringkasan sekunder. Ketentuan UU KUP (Pasal 35, 39, 43) terverifikasi."
    },
    {
      id: "E.2", slug: "hubungan-klien-rekan-publikasi", judul: "Hubungan dengan klien, rekan seprofesi, dan publikasi",
      estimasiMenit: 12, jenisDominan: ["etika", "kasus"],
      ringkasan: [
        "Hubungan dengan klien (Bab III): memberikan jasa sebaik-baiknya sesuai kompetensi dan klasifikasi izin, menolak permintaan yang bertentangan dengan peraturan, tidak menjanjikan hasil, dan menjaga rahasia klien.",
        "Konsultan berhak menolak atau mengundurkan diri bila klien meminta rekayasa, menolak memberikan data yang dibutuhkan, atau bila kepentingan para klien saling berbenturan; tanggung jawab dan tenggat kewajiban tetap pada Wajib Pajak.",
        "Benturan kepentingan (mewakili pihak yang kepentingannya berlawanan, hubungan keluarga dengan petugas pemeriksa, komisi tersembunyi dari vendor) wajib diungkapkan; bila objektivitas tidak dapat dijaga, penugasan ditolak atau dilepas.",
        "Hubungan antarrekan (Bab IV): saling menghormati, tidak mencela rekan, tidak merebut klien; menerima klien yang pindah dari rekan dilakukan dengan pemberitahuan kepada rekan sebelumnya.",
        "Publikasi (Bab V): dilarang beriklan atau berpromosi yang menonjolkan diri, termasuk melalui media sosial (ditegaskan pengurus IKPI 2023); tulisan edukatif yang faktual tidak termasuk promosi yang dilarang.",
        "Kesalahan rekan terdahulu disampaikan secara objektif kepada klien beserta jalan perbaikannya (mis. pembetulan SPT), bukan dipublikasikan atau dijadikan bahan celaan."
      ],
      poinKunci: [
        { label: "Iklan menonjolkan diri / klaim pasti menang", nilai: "dilarang, termasuk di media sosial", dasar: "Kode Etik IKPI Bab V (Publikasi)", berlakuSejak: "2024-08-20" },
        { label: "Menerima klien yang pindah dari rekan", nilai: "boleh, dengan pemberitahuan kepada rekan sebelumnya", dasar: "Kode Etik IKPI Bab IV", berlakuSejak: "2024-08-20" },
        { label: "Mencela rekan seprofesi", nilai: "dilarang", dasar: "Kode Etik IKPI Bab IV", berlakuSejak: "2024-08-20" },
        { label: "Benturan kepentingan", nilai: "ungkapkan; bila tak terkendali, tolak/lepas penugasan", dasar: "Kode Etik IKPI — objektivitas", berlakuSejak: "2024-08-20" },
        { label: "Klien minta rekayasa", nilai: "tolak; boleh mengundurkan diri", dasar: "Pasal 30 ayat (1) PMK 55/2026; Kode Etik IKPI Bab III", berlakuSejak: "2026-08-24" }
      ],
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab III (Hubungan dengan Klien)", catatan: "kewajiban dan larangan terhadap klien" },
        { pasal: "Kode Etik IKPI Bab IV (Hubungan dengan Rekan Seprofesi)", catatan: "tidak mencela, tidak merebut klien" },
        { pasal: "Kode Etik IKPI Bab V (Publikasi)", catatan: "larangan iklan yang menonjolkan diri" }
      ],
      jebakan: [
        { teks: "Mengira persetujuan atau permintaan klien membenarkan pelanggaran etika (jaminan hasil, tidak memberi tahu rekan lama)", tagSebab: "salah-baca" },
        { teks: "Menganggap konsultan dilarang mutlak menerima klien yang pernah ditangani rekan; yang dilarang adalah merebut atau menerima tanpa pemberitahuan", tagSebab: "salah-klasifikasi" },
        { teks: "Menyamakan pelanggaran etika (publikasi, mencela) dengan suap atau pemerasan dalam Pasal 30 PMK 55/2026 yang berujung pencabutan; pelanggaran kode etik dasarnya Pasal 24 ayat (5), yaitu pembekuan paling lama 2 tahun", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Klien ingin pindah dari KKP lama ke Anda dan meminta agar KKP lama tidak diberi tahu. Apa yang benar?",
        jawaban: "Boleh menerima setelah klien mengakhiri perikatan lama, dengan pemberitahuan tertulis kepada rekan sebelumnya",
        langkah: [["Hak klien", "Bebas memilih konsultan"], ["Kewajiban antarrekan", "Tidak merebut klien; beri tahu rekan sebelumnya"], ["Urutan", "Perikatan lama diakhiri → pemberitahuan → mulai bekerja"], ["Permintaan klien merahasiakan", "Tidak membenarkan pelanggaran kode etik"]]
      },
      verifikasi: "◐",
      peringatan: "Rincian larangan Bab III–V mengikuti versi Kongres XI Malang 2019 dan ringkasan sekunder (pernyataan pengurus IKPI 2023 tentang promosi di media sosial); teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E.3", slug: "pmk55-izin-ppl-laporan", judul: "PMK 55/2026: tingkat izin, syarat, PPL, laporan tahunan, keanggotaan asosiasi",
      estimasiMenit: 15, jenisDominan: ["prosedur", "hitung", "kasus"],
      ringkasan: [
        "PMK 55/2026 ditetapkan 22 Juli 2026 dan berlaku 24 Agustus 2026, mencabut PMK 111/2014 dan PMK 175/2022; mengatur konsultan pajak, Kantor Konsultan Pajak (KKP), dan pihak lain yang bertindak sebagai kuasa WP (wajib SKT).",
        "Cakupan izin (Pasal 4): A untuk WP orang pribadi kecuali yang berdomisili di negara mitra P3B; B untuk WP orang pribadi dan badan kecuali PMA, BUT, dan orang pribadi atau badan yang berdomisili di negara mitra P3B; C untuk seluruh WP. Permohonan tidak harus berjenjang.",
        "Syarat izin (Pasal 5 ayat (2) dan (3)): WNI; SKK sesuai tingkat (berlaku 3 tahun, Pasal 10 ayat (7)); lulus ujian profesi asosiasi; paling rendah sarjana/S-1 atau setara; NPWP; tidak menjadi pegawai atau pejabat lembaga pemerintahan, lembaga negara, atau BUMN/BUMD; tidak pernah dipidana dengan ancaman penjara 5 tahun atau lebih; tidak pernah dicabut izinnya; tidak di bawah pengampuan; pernyataan hubungan kekerabatan dengan pegawai DJP; jeda 5 tahun bagi pensiunan atau mantan pegawai Kemenkeu; serta pengalaman kerja perpajakan B ≥ 1 tahun dan C ≥ 2 tahun yang diakumulasi dalam 3 tahun terakhir.",
        "Kenaikan tingkat izin: praktik minimal 1 tahun untuk naik satu tingkat dan 2 tahun untuk naik dua tingkat, ditambah SKK tingkat yang dituju.",
        "Keanggotaan asosiasi terdaftar (IKPI, AKP2I, Perkoppi, P3KPI) bukan lagi syarat permohonan, tetapi wajib dipenuhi paling lambat 30 hari kerja sejak izin terbit; bila tidak, izin dibekukan 3 bulan lalu dicabut.",
        "PPL per tahun: A 20 SKP (16 terstruktur), B 30 SKP (24 terstruktur), C 45 SKP (36 terstruktur).",
        "Laporan tahunan paling lambat 30 April tahun berikutnya (Pasal 28 ayat (3)), paling sedikit memuat nama dan profil konsultan, tempat bekerja, bukti penyampaian SPT konsultan, dan daftar rincian jasa per klien (jenis jasa, periode penugasan, biaya jasa); bila konsultan bekerja di KKP, laporan disampaikan oleh KKP (Pasal 29 ayat (1)). Realisasi PPL dilaporkan terpisah paling lambat 31 Januari tahun berikutnya (Pasal 26 ayat (4))."
      ],
      poinKunci: [
        { label: "Berlaku PMK 55/2026", nilai: "24 Agustus 2026", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Pengalaman kerja", nilai: "B ≥ 1 tahun; C ≥ 2 tahun (akumulasi 3 tahun terakhir)", dasar: "PMK 55/2026 (syarat izin)", berlakuSejak: "2026-08-24" },
        { label: "Masa berlaku SKK", nilai: "3 tahun sejak terbit", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Gabung asosiasi", nilai: "≤ 30 hari kerja sejak izin terbit", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "PPL A/B/C", nilai: "20 (16) / 30 (24) / 45 (36) SKP", dasar: "PMK 55/2026 (kewajiban PPL)", berlakuSejak: "2026-08-24" },
        { label: "Laporan tahunan", nilai: "30 April tahun berikutnya, perincian jasa per klien", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Naik tingkat", nilai: "praktik 1 tahun (satu tingkat) / 2 tahun (dua tingkat)", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 PMK 55/2026", catatan: "tingkat dan cakupan izin praktik" },
        { pasal: "Pasal 5, 10, 13, 25, 26, dan 28 PMK 55/2026", catatan: "syarat izin, masa berlaku SKK, naik tingkat, keanggotaan asosiasi, PPL, laporan tahunan" },
        { pasal: "Pasal 31 dan 32 PMK 55/2026", catatan: "syarat asosiasi terdaftar (Pasal 31) dan penyelenggaraan ujian profesi (Pasal 32)" }
      ],
      jebakan: [
        { teks: "Menghitung pengalaman kerja seluruh karier, padahal yang dihitung akumulasi dalam 3 tahun terakhir", tagSebab: "salah-baca" },
        { teks: "Menghitung 30 hari kerja sebagai 30 hari kalender atau mulai dari hari izin terbit", tagSebab: "salah-hitung" },
        { teks: "Masih memakai pola USKP berjenjang dan keanggotaan asosiasi sebagai syarat permohonan (PMK 111/2014 jo. 175/2022)", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Izin praktik terbit Senin, 2 November 2026 (tanpa libur nasional sampai pertengahan Desember). Kapan batas akhir bergabung dengan asosiasi?",
        jawaban: "Senin, 14 Desember 2026",
        langkah: [["Ketentuan", "Paling lambat 30 hari kerja sejak izin terbit"], ["Hari ke-1", "Selasa, 3 November 2026"], ["Hari kerja 3 Nov–11 Des", "29 hari (6 minggu kurang 1 hari)"], ["Hari ke-30", "Senin, 14 Desember 2026"]]
      },
      verifikasi: "◐",
      peringatan: "Cakupan izin, syarat izin, SKK, naik tingkat, keanggotaan asosiasi, PPL, dan laporan tahunan sudah dicocokkan ke teks PMK 55/2026 (Pasal 4, 5, 10, 13, 25, 26, 28, 29). Yang belum pasti: nama empat asosiasi terdaftar (IKPI, AKP2I, Perkoppi, P3KPI) tidak tercantum dalam PMK dan belum dicek ke penetapan asosiasi terdaftar."
    },
    {
      id: "E.4", slug: "pmk55-larangan-sanksi", judul: "PMK 55/2026: enam larangan dan jenjang sanksi",
      estimasiMenit: 12, jenisDominan: ["klasifikasi", "kasus"],
      ringkasan: [
        "Enam larangan Pasal 30 ayat (1): (a) memberikan petunjuk atau keterangan yang menyesatkan klien mengenai pekerjaan yang sedang dilakukan; (b) menerima permintaan rekayasa yang bertentangan dengan ketentuan; (c) menawarkan imbalan kepada petugas pajak; (d) menerima gratifikasi yang tidak wajar; (e) melakukan pemerasan; (f) rangkap jabatan pada instansi pemerintah, lembaga negara, lembaga lain berdasarkan UU, BUMN, atau BUMD.",
        "Pembekuan izin selama 3 bulan: memberikan jasa di luar klasifikasi izin (Pasal 24 ayat (1) huruf a jo. ayat (4)). Peringatan: melanggar Standar Praktik (Pasal 24 ayat (6)), tidak memenuhi PPL atau tidak melaporkan realisasinya (Pasal 26 ayat (5)), tidak melaporkan perubahan alamat atau tempat bekerja (Pasal 27 ayat (4)), dan tidak menyampaikan laporan tahunan sesuai ketentuan (Pasal 28 ayat (5)).",
        "Pembekuan izin paling lama 2 tahun: pelanggaran Kode Etik (Pasal 24 ayat (5)), tidak menjaga independensi atau benturan kepentingan (Pasal 24 ayat (7)), serta keterangan yang menyesatkan klien atau menerima permintaan rekayasa (Pasal 30 ayat (1) huruf a–b jo. ayat (3)).",
        "Pencabutan izin bersifat permanen: imbalan kepada petugas pajak, gratifikasi tidak wajar, pemerasan, atau rangkap jabatan (Pasal 30 ayat (1) huruf c–f jo. ayat (4)); melanggar lagi ketentuan yang bersanksi pembekuan setelah 3 kali dibekukan dalam 5 tahun terakhir (Pasal 41 ayat (3)–(4)); atau dipidana (Pasal 43 ayat (3)). Pemegangnya tidak dapat mengajukan izin kembali dan SKK tidak berlaku (Pasal 42).",
        "Tidak bergabung dengan asosiasi dalam 30 hari kerja sejak izin terbit: izin dibekukan 3 bulan; tetap tidak bergabung setelah pembekuan berakhir berujung pencabutan (Pasal 25 ayat (1), (3), dan (4)).",
        "Sanksi serupa dapat dikenakan kepada Kantor Konsultan Pajak; sanksi organisasi dari asosiasi (keanggotaan) berjalan terpisah dari sanksi izin oleh Menteri."
      ],
      poinKunci: [
        { label: "Jasa di luar klasifikasi izin", nilai: "pembekuan izin 3 bulan", dasar: "Pasal 24 ayat (1) huruf a dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Melanggar Standar Praktik", nilai: "peringatan", dasar: "Pasal 24 ayat (6) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Pelanggaran kode etik asosiasi", nilai: "pembekuan izin ≤ 2 tahun", dasar: "Pasal 24 ayat (5) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Keterangan menyesatkan / rekayasa", nilai: "pembekuan izin ≤ 2 tahun", dasar: "Pasal 30 ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Imbalan ke petugas / gratifikasi / pemerasan / rangkap jabatan", nilai: "pencabutan permanen", dasar: "Pasal 30 ayat (1) huruf c–f dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Sudah 3 kali dibekukan dalam 5 tahun, melanggar lagi (sanksi pembekuan)", nilai: "pencabutan izin", dasar: "Pasal 41 ayat (3)–(4) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Akibat pencabutan", nilai: "tak bisa ajukan izin baru; SKK tidak berlaku", dasar: "Pasal 42 ayat (1)–(2) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Tidak gabung asosiasi 30 hari kerja", nilai: "pembekuan 3 bulan → pencabutan", dasar: "Pasal 25 ayat (1), (3), dan (4) PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1), (3), dan (4) PMK 55/2026", catatan: "enam larangan dan sanksinya" },
        { pasal: "Pasal 24 ayat (4)–(7) dan Pasal 25 ayat (3)–(4) PMK 55/2026", catatan: "sanksi kewajiban konsultan dan keanggotaan asosiasi" },
        { pasal: "Pasal 41 ayat (3)–(4), Pasal 42, dan Pasal 43 PMK 55/2026", catatan: "pencabutan setelah 3 kali pembekuan, akibat pencabutan, perkara pidana" }
      ],
      jebakan: [
        { teks: "Menganggap semua larangan Pasal 30 berujung pencabutan; keterangan menyesatkan dan rekayasa 'hanya' pembekuan ≤ 2 tahun", tagSebab: "salah-klasifikasi" },
        { teks: "Mengira pencabutan dapat diajukan ulang setelah jangka waktu tertentu; sejak PMK 55/2026 pencabutan permanen", tagSebab: "angka-usang" },
        { teks: "Tertukar pembekuan selama 3 bulan (jasa di luar klasifikasi izin, tidak gabung asosiasi) dengan pembekuan paling lama 2 tahun (kode etik, independensi, rekayasa), atau mengira jasa di luar klasifikasi hanya diberi peringatan", tagSebab: "lupa-pasal" }
      ],
      contohSoal: {
        stem: "Petakan sanksi: (1) jasa di luar klasifikasi izin; (2) rekayasa dokumen; (3) menawarkan uang kepada pemeriksa.",
        jawaban: "(1) pembekuan izin 3 bulan; (2) pembekuan ≤ 2 tahun; (3) pencabutan permanen",
        langkah: [["(1) Pasal 24 ayat (1) huruf a jo. ayat (4)", "Pembekuan izin selama 3 bulan"], ["(2) Pasal 30 ayat (1) huruf b jo. ayat (3)", "Pembekuan paling lama 2 tahun"], ["(3) Pasal 30 ayat (1) huruf c jo. ayat (4)", "Pencabutan permanen, SKK tidak berlaku"]]
      },
      verifikasi: "✅"
    },
    {
      id: "E.5", slug: "kuasa-wp-pmk44", judul: "Kuasa Wajib Pajak menurut PMK 44/2026",
      estimasiMenit: 12, jenisDominan: ["prosedur", "klasifikasi", "kasus"],
      ringkasan: [
        "Pasal 32 ayat (3) UU KUP: WP orang pribadi atau badan dapat menunjuk seorang kuasa dengan surat kuasa khusus; persyaratan dan pelaksanaan hak/kewajiban kuasa diatur PMK (kini PMK 44/2026, berlaku 6 Juli 2026, mencabut PMK 229/PMK.03/2014).",
        "Tiga kategori kuasa: (1) konsultan pajak sesuai klasifikasi izin; (2) pihak lain yang memiliki Surat Keterangan Terdaftar (SKT), termasuk karyawan WP; (3) keluarga, yaitu suami/istri dan keluarga sedarah/semenda sampai derajat kedua, tanpa syarat kompetensi.",
        "Surat kuasa khusus: satu surat kuasa untuk satu kuasa, memuat hak/kewajiban tertentu yang dikuasakan dan masa berlaku (tidak boleh tanpa batas waktu); kuasa tidak dapat melimpahkan kepada orang lain (substitusi).",
        "Kuasa berakhir bila masa berlaku habis, dicabut WP, izin konsultan dibekukan/dicabut, SKT dibekukan/dicabut, atau kuasa dipidana; akses Portal Coretax sebagai kuasa ikut berakhir.",
        "WP tetap bertanggung jawab atas kewajiban perpajakannya; berbeda dengan wakil (pengurus) yang dapat bertanggung jawab pribadi/renteng menurut Pasal 32 ayat (2) UU KUP.",
        "Peralihan: surat kuasa khusus yang sudah disampaikan sebelum 6 Juli 2026 masih dapat dipakai sesuai isinya (Pasal 15 PMK 44/2026); orang selain konsultan yang memiliki sertifikat brevet atau ijazah perpajakan (paling rendah D-III, akreditasi A) masih dapat ditunjuk sebagai kuasa sampai 31 Desember 2026 dengan surat kuasa khusus kertas (Pasal 16); sesudahnya harus konsultan pajak, Pihak Lain ber-SKT, atau keluarga."
      ],
      poinKunci: [
        { label: "Berlaku PMK 44/2026", nilai: "6 Juli 2026 (mencabut PMK 229/2014)", dasar: "PMK 44/2026", berlakuSejak: "2026-07-06" },
        { label: "Keluarga sebagai kuasa", nilai: "suami/istri, sedarah/semenda s.d. derajat kedua", dasar: "PMK 44/2026 Pasal 2–3", berlakuSejak: "2026-07-06" },
        { label: "Karyawan WP sebagai kuasa", nilai: "kategori pihak lain, wajib SKT", dasar: "PMK 44/2026; PMK 55/2026", berlakuSejak: "2026-07-06" },
        { label: "Isi wajib surat kuasa khusus", nilai: "hak/kewajiban yang dikuasakan + masa berlaku", dasar: "PMK 44/2026 Pasal 7 ayat (3)", berlakuSejak: "2026-07-06" },
        { label: "Substitusi", nilai: "dilarang", dasar: "PMK 44/2026 Pasal 8 ayat (3)", berlakuSejak: "2026-07-06" },
        { label: "SPT ditandatangani kuasa", nilai: "lampirkan surat kuasa khusus", dasar: "Pasal 4 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 32 ayat (2), (3), dan (3a) UU KUP", catatan: "wakil, kuasa dengan surat kuasa khusus, delegasi ke PMK" },
        { pasal: "PMK 44/2026 Pasal 2–3, 7–8, 10, dan 15–16", catatan: "kategori kuasa, surat kuasa khusus, berakhirnya kuasa, peralihan" },
        { pasal: "Pasal 4 ayat (3) UU KUP", catatan: "surat kuasa khusus dilampirkan pada SPT" }
      ],
      jebakan: [
        { teks: "Mengira keponakan, paman, atau sepupu termasuk keluarga yang boleh jadi kuasa; batasnya derajat kedua (orang tua, anak, kakek/nenek, cucu, saudara kandung, mertua, menantu, ipar)", tagSebab: "salah-klasifikasi" },
        { teks: "Menganggap kuasa masih sah sampai masa berlaku habis walau izin konsultan sudah dibekukan", tagSebab: "salah-baca" },
        { teks: "Memakai PMK 229/2014: kuasa hanya konsultan/karyawan dan surat kuasa tanpa masa berlaku", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Siapa yang dapat menjadi kuasa Ny. Wulan tanpa SKT: adik ipar, keponakan, sepupu, atau paman?",
        jawaban: "Adik ipar (keluarga semenda derajat kedua)",
        langkah: [["Batas kategori keluarga", "Sedarah/semenda sampai derajat kedua"], ["Adik ipar", "Semenda derajat 2 → boleh"], ["Paman dan keponakan", "Sedarah derajat 3 → tidak"], ["Sepupu", "Sedarah derajat 4 → tidak (butuh SKT/konsultan)"]]
      },
      verifikasi: "✅"
    },
    {
      id: "E.6", slug: "standar-praktik-spm-dewan-kehormatan", judul: "Standar profesi, sistem pengendalian mutu, Dewan Kehormatan, dan transisi 2026",
      estimasiMenit: 10, jenisDominan: ["prosedur", "konsep"],
      ringkasan: [
        "Standar Profesi IKPI mendefinisikan konsultan pajak sebagai setiap orang yang dengan keahliannya dan dalam lingkungan penugasannya, secara bebas dan profesional memberikan jasa perpajakan kepada Wajib Pajak.",
        "Struktur standar: standar umum (kompetensi, independensi, kecermatan), standar pelaksanaan penugasan (surat perikatan, dokumentasi, kertas kerja), standar pelaporan, dan kewajiban PPL.",
        "Sistem pengendalian mutu (SPM) KKP mencakup kebijakan penerimaan dan keberlanjutan klien (termasuk cek benturan kepentingan), kompetensi personel, supervisi dan reviu hasil kerja, serta pemantauan; ujian profesi asosiasi menguji standar etik, standar praktik, dan SPM.",
        "Dewan Kehormatan IKPI (ART Pasal 35 ayat (1), dibentuk setelah Kongres XII 2024) menegakkan Kode Etik dan Standar Profesi melalui pengaduan, pemeriksaan, pembelaan, dan putusan sanksi organisasi (teguran tertulis, peringatan tertulis, pemberhentian sementara, pemberhentian tetap).",
        "Transisi PMK 55/2026: izin praktik yang terbit sebelumnya tetap berlaku tanpa UKP (Pasal 60 huruf a); asosiasi wajib menggelar ujian profesi paling lambat 31 Desember 2026 (Pasal 61); sertifikat USKP lama diakui sebagai SKK paling lama 2 tahun sejak terbit (Pasal 60 huruf f) dan dapat dipakai mengajukan izin tanpa ujian profesi selama ujian profesi belum diselenggarakan."
      ],
      poinKunci: [
        { label: "Ujian profesi asosiasi", nilai: "paling lambat 31 Desember 2026", dasar: "Pasal 61 PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Materi ujian profesi", nilai: "standar etik, standar praktik, SPM", dasar: "PMK 55/2026; Standar Profesi IKPI", berlakuSejak: "2026-08-24" },
        { label: "Izin praktik lama", nilai: "tetap berlaku, tidak perlu UKP", dasar: "Pasal 60 huruf a PMK 55/2026", berlakuSejak: "2026-08-24" },
        { label: "Penegak Kode Etik IKPI", nilai: "Dewan Kehormatan", dasar: "ART IKPI Pasal 35 ayat (1)", berlakuSejak: "2024-08-20" },
        { label: "Dokumen awal penugasan", nilai: "surat perikatan", dasar: "Standar Profesi IKPI — standar pelaksanaan penugasan", berlakuSejak: "2024-08-20" }
      ],
      dasarHukum: [
        { pasal: "Standar Profesi IKPI (SK 07/KONGRES XII/IKPI/2024)", catatan: "standar umum, pelaksanaan, pelaporan" },
        { pasal: "Pasal 60 dan 61 PMK 55/2026", catatan: "peralihan dan batas ujian profesi" },
        { pasal: "ART IKPI Pasal 35 ayat (1)", catatan: "Dewan Kehormatan" }
      ],
      jebakan: [
        { teks: "Mengira pemegang izin lama wajib ikut UKP sebelum 31 Desember 2026; izin lama tetap berlaku", tagSebab: "salah-baca" },
        { teks: "Menyamakan sanksi organisasi Dewan Kehormatan (keanggotaan) dengan sanksi izin oleh Menteri", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "KKP menerima klien baru tanpa memeriksa apakah salah satu partnernya sedang mewakili pihak lawan klien itu. Unsur SPM mana yang gagal?",
        jawaban: "Kebijakan penerimaan dan keberlanjutan klien (cek benturan kepentingan)",
        langkah: [["Peristiwa", "Klien diterima tanpa cek konflik"], ["Unsur SPM terkait", "Penerimaan dan keberlanjutan klien"], ["Akibat", "Risiko pelanggaran objektivitas dan kerahasiaan"], ["Perbaikan", "Prosedur cek konflik sebelum surat perikatan"]]
      },
      verifikasi: "◐",
      peringatan: "Teks Standar Profesi IKPI 2024, rincian SPM, dan prosedur Dewan Kehormatan belum dibaca langsung (mengikuti versi 2019 dan ringkasan sekunder). Ketentuan peralihan Pasal 60–61 PMK 55/2026 terverifikasi, termasuk pengakuan sertifikat USKP lama sebagai SKK paling lama 2 tahun (Pasal 60 huruf f, dicocokkan dengan teks JDIH Kemenkeu), dan pelanggaran Kode Etik dapat berujung pembekuan izin paling lama 2 tahun (Pasal 24 ayat (5) PMK 55/2026)."
    }
  ],
  soal: [
    // ===================== E.1 Kepribadian dan prinsip =====================
    {
      id: "E-001",
      topik: "E.1",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Konsultan Pajak Bagus Wiratama (izin tingkat B, anggota IKPI) menerima penugasan keberatan atas SKPKB PPh Badan Tahun Pajak 2024 milik PT Sungai Jernih sebesar Rp1.240.000.000. Sebelum menandatangani surat perikatan, direktur meminta jaminan tertulis. Bagus lalu mencantumkan klausul 'Kami menjamin keberatan dikabulkan seluruhnya; bila ditolak, imbalan jasa dikembalikan 100%' dalam proposal dan surat perikatan, yang kemudian disetujui kedua pihak. Menurut Kode Etik IKPI, penilaian yang paling tepat atas tindakan Bagus adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak melanggar, karena klausul tersebut dituangkan dalam surat perikatan yang disetujui klien secara sukarela", B: "Melanggar, karena konsultan dilarang menjanjikan hasil atau kepastian keberhasilan penanganan perkara kepada klien", C: "Melanggar larangan pemerasan dalam Pasal 30 PMK 55/2026 sehingga izin Bagus dicabut permanen", D: "Tidak melanggar selama imbalan jasa benar-benar dikembalikan apabila keberatan ditolak" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kode Etik IKPI melarang konsultan menjanjikan hasil atau kepastian keberhasilan. Keputusan keberatan adalah wewenang Direktur Jenderal Pajak (Pasal 26 UU KUP), sehingga jaminan 'dikabulkan seluruhnya' menyesatkan klien, apa pun isi kesepakatan imbalannya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Persetujuan klien tidak menghapus larangan etika; larangan itu mengikat konsultan dan tidak dapat dikesampingkan dengan perjanjian.",
          C: "Pemerasan mensyaratkan paksaan atau ancaman untuk memperoleh keuntungan; di sini tidak ada paksaan. Tindakan ini pelanggaran kode etik, bukan pemerasan.",
          D: "Janji pengembalian imbalan tidak mengubah sifat janji hasil; yang dilarang adalah menjanjikan kepastian keputusan."
        },
        jebakan: "Persetujuan tertulis klien sering dijadikan pembenar, padahal larangan etika tidak dapat diperjanjikan lain."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI (SK 07/KONGRES XII/IKPI/2024) Bab III — larangan menjanjikan hasil", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 26 ayat (1) UU KUP — keputusan keberatan oleh Direktur Jenderal Pajak", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: pemerasan (opsi C) adalah Pasal 30 ayat (1) huruf e PMK 55/2026 dengan sanksi pencabutan (ayat (4)); kepatuhan pada Kode Etik diwajibkan Pasal 24 ayat (1) huruf b; Pasal 26 UU KUP sesuai. Belum pasti: rumusan larangan menjanjikan hasil dan nomor babnya dalam Kode Etik IKPI 2024 (SK 07/KONGRES XII/IKPI/2024), karena naskahnya belum ada di pustaka; rumusan masih mengikuti versi 2019 dan ringkasan sekunder."
    },
    {
      id: "E-002", topik: "E.1", tingkat: ["A", "B", "C"], jenis: "etika", kesulitan: 2,
      stem: "Konsultan Pajak Hendra Saputra memegang izin tingkat C sejak 2021, tetapi selama ini hanya menangani SPT Tahunan orang pribadi dan PPN pengusaha ritel. Pada November 2026 PT Global Komponen Indonesia (PMA, induk di Jepang) memintanya menyusun Dokumen Induk dan Dokumen Lokal transfer pricing Tahun Pajak 2025 sekaligus mewakili perusahaan dalam pemeriksaan yang baru dimulai. Hendra belum pernah menangani transfer pricing dan tidak memiliki rekan yang menguasainya, tetapi tertarik karena imbalan jasanya besar. Sikap yang paling sesuai dengan prinsip Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Menerima penugasan karena izin tingkat C mencakup seluruh Wajib Pajak termasuk PMA, sehingga kompetensinya sudah dijamin oleh izin",
        B: "Menerima penugasan lalu mempelajari transfer pricing sambil berjalan, asalkan klien tidak mengetahui keterbatasan tersebut",
        C: "Menolak penugasan karena konsultan izin C tetap memerlukan izin khusus untuk menangani pemeriksaan transfer pricing",
        D: "Menerima hanya bila kompetensi memadai dapat dipastikan, misalnya dengan melibatkan rekan yang kompeten dan menyampaikannya kepada klien; bila tidak, menolak"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Prinsip kompetensi dan kehati-hatian profesional menuntut konsultan hanya menerima pekerjaan yang dapat ditangani secara kompeten. Izin C menentukan batas kewenangan (seluruh WP), bukan bukti keahlian pada setiap bidang.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pasal 4 PMK 55/2026 mengatur kewenangan per tingkat izin, bukan jaminan kompetensi untuk tiap bidang.",
          B: "Menyembunyikan keterbatasan dari klien melanggar integritas sekaligus kehati-hatian profesional.",
          C: "Tidak ada izin khusus transfer pricing; izin C sudah mencakup seluruh WP, termasuk PMA."
        },
        jebakan: "Mencampuradukkan kewenangan menurut izin dengan kompetensi nyata."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab II — kompetensi dan kehati-hatian profesional", berlakuSejak: "2024-08-20" },
        { pasal: "Pasal 4 PMK 55/2026 — cakupan izin tingkat C", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-003", topik: "E.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 35 ayat (1) dan (2) UU KUP (parafrase setia): Apabila dalam menjalankan ketentuan peraturan perundang-undangan perpajakan diperlukan keterangan atau bukti dari bank, akuntan publik, notaris, konsultan pajak, kantor administrasi, dan/atau pihak ketiga lainnya yang mempunyai hubungan dengan Wajib Pajak yang dilakukan pemeriksaan pajak, penagihan pajak, atau penyidikan tindak pidana di bidang perpajakan, atas permintaan tertulis dari Direktur Jenderal Pajak, pihak-pihak tersebut wajib memberikan keterangan atau bukti yang diminta. Dalam hal pihak-pihak tersebut terikat oleh kewajiban merahasiakan, untuk keperluan itu kewajiban merahasiakan ditiadakan (bagi bank, atas permintaan tertulis Menteri Keuangan).",
      stem: "Konsultan Pajak Maya Lestari (izin B) menjadi kuasa CV Bara Sakti sampai Juni 2026; perikatan sudah berakhir. Pada Oktober 2026 terjadi dua hal: (1) pemeriksa pajak yang sedang memeriksa CV Bara Sakti menelepon Maya dan meminta kertas kerja rekonsiliasi PPN 2025 dikirim lewat aplikasi pesan hari itu juga; (2) klien baru Maya, CV Bara Prima (pesaing CV Bara Sakti), meminta data margin CV Bara Sakti 'sekadar sebagai pembanding'. Berdasarkan kutipan dan prinsip kerahasiaan, tindakan Maya yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengirim kertas kerja kepada pemeriksa melalui aplikasi pesan karena kerahasiaan ditiadakan untuk pemeriksaan, dan menolak permintaan CV Bara Prima",
        B: "Menolak kedua permintaan secara mutlak karena kewajiban merahasiakan konsultan pajak tidak dapat ditiadakan oleh siapa pun",
        C: "Meminta agar permintaan disampaikan secara tertulis oleh Direktur Jenderal Pajak lalu memberikan keterangan sebatas yang diminta, serta menolak permintaan CV Bara Prima",
        D: "Memberikan data kepada CV Bara Prima karena perikatan dengan CV Bara Sakti sudah berakhir, dan menunggu surat tertulis untuk permintaan pemeriksa"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kerahasiaan klien tetap melekat walau perikatan selesai, sehingga permintaan pesaing ditolak. Pengecualiannya adalah kewajiban undang-undang: Pasal 35 UU KUP mewajibkan konsultan memberi keterangan untuk pemeriksaan, tetapi hanya atas permintaan tertulis Direktur Jenderal Pajak.",
        jejakHitung: [
          ["Permintaan (1): pemeriksa", "Keperluan pemeriksaan → masuk Pasal 35, tetapi wajib tertulis"],
          ["Permintaan (2): pesaing", "Bukan kewajiban UU → tetap rahasia"],
          ["Status perikatan", "Berakhir Juni 2026 → kewajiban rahasia tetap berlaku"],
          ["Tindakan", "Minta permintaan tertulis DJP; tolak CV Bara Prima"]
        ],
        mengapaSalah: {
          A: "Telepon atau pesan singkat belum memenuhi syarat 'permintaan tertulis' Pasal 35 ayat (1).",
          B: "Pasal 35 ayat (2) justru meniadakan kewajiban merahasiakan untuk keperluan pemeriksaan, penagihan, dan penyidikan.",
          D: "Kewajiban kerahasiaan tidak berakhir bersama perikatan; memberi data kepada pesaing melanggar kode etik."
        },
        jebakan: "Kata kunci kutipan adalah 'permintaan tertulis'; telepon petugas tidak cukup."
      },
      dasarHukum: [
        { pasal: "Pasal 35 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Kode Etik IKPI Bab II — kerahasiaan informasi klien", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-004",
      topik: "E.1",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Konsultan Pajak Andi Kurniawan (izin B) menjadi kuasa PT Sentosa Pangan dalam pemeriksaan lengkap PPh Badan Tahun Pajak 2025 yang dimulai September 2026 (jangka waktu pengujian 5 bulan menurut PMK 15/2025). Pada pertemuan pertama Andi mengetahui bahwa ketua tim pemeriksa adalah adik iparnya sendiri. Direktur PT Sentosa Pangan justru senang dan meminta Andi 'memanfaatkan kedekatan keluarga' agar koreksi dapat ditekan sebelum SPHP terbit. Tindakan Andi yang paling sesuai dengan prinsip objektivitas dan integritas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengungkapkan hubungan keluarga itu kepada klien dan pimpinan KKP, menolak memanfaatkannya, dan melepaskan penugasan bila objektivitas tidak dapat dijaga", B: "Tetap menangani tanpa memberi tahu siapa pun karena PMK 55/2026 tidak menyebut hubungan keluarga dengan pemeriksa sebagai larangan", C: "Tetap menangani dan meminta adik iparnya memberi keringanan koreksi, karena tanpa pemberian uang permintaan itu bukan pelanggaran", D: "Mengalihkan penugasan secara diam-diam kepada staf KKP, tetapi tetap mengarahkan pembahasan dengan pemeriksa dari belakang layar" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 24 ayat (1) huruf d PMK 55/2026 mewajibkan konsultan menjaga independensi serta bebas dari benturan kepentingan. Ayat (3) menggolongkan sebagai benturan kepentingan hubungan kekerabatan sedarah dan semenda sampai derajat pertama dengan pegawai DJP (huruf a jo. Pasal 5 ayat (2) huruf k), serta hubungan lain dan kepentingan pribadi dengan pegawai DJP yang memengaruhi integritas dan profesionalisme (huruf b). Adik ipar adalah semenda derajat kedua, jadi masuk huruf b, apalagi klien meminta kedekatan itu dimanfaatkan. Andi wajib mengungkapkannya, menolak memanfaatkannya, dan melepas penugasan bila objektivitas tidak dapat dijaga.",
        jejakHitung: [
          ["Hubungan", "Adik ipar Andi = ketua tim pemeriksa (pegawai DJP)"],
          ["Kualifikasi", "Adik ipar = semenda derajat kedua → hubungan lain dan kepentingan pribadi yang memengaruhi integritas, Pasal 24 ayat (3) huruf b PMK 55/2026"],
          ["Kewajiban", "Menjaga independensi dan bebas dari benturan kepentingan, Pasal 24 ayat (1) huruf d"],
          ["Tindakan", "Ungkapkan kepada klien dan pimpinan KKP, tolak memanfaatkan, lepas penugasan bila perlu"],
          ["Sanksi bila dilanggar", "Pembekuan izin paling lama 2 tahun, Pasal 24 ayat (7)"]
        ],
        mengapaSalah: {
          B: "Premisnya keliru: hubungan keluarga memang tidak ada di daftar larangan Pasal 30, tetapi Pasal 24 ayat (1) huruf d dan ayat (3) mewajibkan konsultan bebas dari benturan kepentingan, termasuk hubungan dengan pegawai DJP yang memengaruhi integritas dan profesionalisme. Diam berarti membiarkan benturan itu.",
          C: "Meminta keringanan atas dasar hubungan keluarga berarti memanfaatkan benturan kepentingan yang wajib dihindari menurut Pasal 24 ayat (1) huruf d, walaupun tanpa uang; bila disertai imbalan, perbuatan itu juga masuk larangan Pasal 30 ayat (1) huruf c.",
          D: "Pengalihan semu tidak menghilangkan benturan kepentingan dan menambah ketidakjujuran kepada klien dan KKP."
        },
        jebakan: "Mencari hubungan keluarga hanya di daftar larangan Pasal 30, atau mengira hanya kerabat derajat pertama yang bermasalah; Pasal 24 ayat (3) huruf b juga mencakup hubungan lain dengan pegawai DJP yang memengaruhi integritas, dengan sanksi pembekuan paling lama 2 tahun (ayat (7))."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) huruf d dan ayat (3) huruf b PMK 55/2026 — bebas dari benturan kepentingan", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 24 ayat (7) PMK 55/2026 — pembekuan izin paling lama 2 tahun", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-005",
      topik: "E.1",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Konsultan Pajak Sinta Maharani (izin A) menyusun SPT Tahunan PPh orang pribadi Tahun Pajak 2025 milik Ny. Dewi, pengusaha butik yang menyelenggarakan pembukuan (tidak memakai PPh final 0,5%) dan juga menyewakan satu ruko kepada penyewa orang pribadi senilai Rp60.000.000 setahun. Selama Maret 2026 Sinta melakukan empat hal: (1) menolak memasukkan 'zakat' Rp15.000.000 yang diberikan Ny. Dewi langsung kepada tetangganya sebagai pengurang penghasilan bruto; (2) menolak mengirimkan salinan SPT Ny. Dewi kepada bank calon kreditur yang memintanya lewat surel tanpa persetujuan Ny. Dewi; (3) mengikuti pelatihan pengisian SPT di Coretax (PER-11/PJ/2025) sebelum menyusun SPT pertama di sistem itu; (4) menyarankan agar uang sewa ruko tidak dilaporkan karena penyewanya orang pribadi yang tidak memotong pajak, demi menjaga hubungan baik dengan klien. Tindakan yang BUKAN penerapan prinsip Kode Etik adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Tindakan (1): menolak zakat yang tidak dibayarkan melalui lembaga resmi sebagai pengurang penghasilan bruto", B: "Tindakan (2): menolak mengirim salinan SPT kepada bank tanpa persetujuan klien", C: "Tindakan (3): mengikuti pelatihan pengisian SPT di Coretax sebelum menyusun SPT", D: "Tindakan (4): menyarankan penghasilan sewa ruko tidak dilaporkan demi menjaga hubungan dengan klien" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sewa ruko dari penyewa orang pribadi yang bukan pemotong tetap terutang PPh final 10% dari jumlah bruto nilai sewa, yang wajib disetor sendiri oleh Ny. Dewi dan dilaporkan dalam SPT Tahunan. Menyarankan agar penghasilan itu tidak dilaporkan demi menyenangkan klien melanggar integritas dan kepatuhan pada peraturan; tiga tindakan lain justru menerapkan integritas, kerahasiaan, dan kompetensi.",
        jejakHitung: [
          ["(1) Zakat langsung ke tetangga", "Bukan melalui badan/lembaga amil zakat yang dibentuk atau disahkan pemerintah → tidak dapat dikurangkan; menolak = integritas"],
          ["(2) Permintaan bank lewat surel", "Bukan kewajiban undang-undang dan tanpa persetujuan klien → menolak = kerahasiaan"],
          ["(3) Pelatihan Coretax", "Memutakhirkan keahlian = kompetensi dan kehati-hatian profesional"],
          ["(4) PPh final sewa ruko", "Rp60.000.000 × 10% = Rp6.000.000 wajib disetor sendiri; menyembunyikannya melanggar integritas"]
        ],
        mengapaSalah: {
          A: "Pasal 9 ayat (1) huruf g UU PPh hanya mengakui zakat yang diterima badan/lembaga amil zakat yang dibentuk atau disahkan pemerintah; menolak memasukkannya adalah wujud integritas.",
          B: "Bank bukan pihak yang berhak memperoleh data klien tanpa persetujuan; menolaknya menerapkan prinsip kerahasiaan.",
          C: "Memutakhirkan pengetahuan sebelum memakai sistem baru adalah wujud kompetensi dan kehati-hatian profesional."
        },
        jebakan: "Kata 'BUKAN' membalik pertanyaan; 'loyalitas kepada klien' yang mengorbankan kepatuhan bukan prinsip Kode Etik."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab II — integritas, kerahasiaan, kompetensi dan kehati-hatian", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 4 ayat (2) UU PPh — PPh final atas penghasilan tertentu", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2017 — PPh final 10% atas persewaan tanah dan/atau bangunan", berlakuSejak: "2018-01-02" }, { pasal: "Pasal 9 ayat (1) huruf g UU PPh — zakat yang diterima badan/lembaga amil zakat yang dibentuk atau disahkan pemerintah sebagai pengurang penghasilan bruto", berlakuSejak: "2009-01-01" }, { pasal: "PMK 114/2025 — zakat atau sumbangan keagamaan wajib yang dapat dikurangkan dari penghasilan bruto", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-006",
      topik: "E.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 43 ayat (1) UU KUP: Ketentuan sebagaimana dimaksud dalam Pasal 39 dan Pasal 39A berlaku juga bagi wakil, kuasa, pegawai dari Wajib Pajak, atau pihak lain yang menyuruh melakukan, yang turut serta melakukan, yang menganjurkan, atau yang membantu melakukan tindak pidana di bidang perpajakan.",
      stem: "Konsultan Pajak Rudi Hartono (izin B) adalah kuasa CV Delta Niaga untuk mengisi dan menandatangani SPT Tahunan PPh Badan Tahun Pajak 2026, yang disampaikan pada April 2027. Saat menyusun SPT, Rudi melihat di rekening koran adanya penjualan tunai Rp1.200.000.000 yang tidak dicatat. Pemilik CV meminta Rudi 'membuang' penjualan itu dari SPT karena 'tidak ada faktur dan tidak akan ketahuan'. Rudi menuruti, menandatangani, dan menyampaikan SPT tersebut. Berdasarkan kutipan dan PMK 55/2026, pernyataan yang paling tepat mengenai risiko Rudi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rudi dapat dipidana sebagai kuasa yang turut serta (Pasal 43 ayat (1) jo. Pasal 39 UU KUP) dan izinnya dapat dibekukan paling lama 2 tahun", B: "Hanya CV Delta Niaga yang dapat dipidana karena SPT adalah SPT milik Wajib Pajak; Rudi cukup dikenai sanksi organisasi oleh asosiasi tanpa sanksi atas izin", C: "Rudi otomatis dikenai pencabutan izin permanen tanpa ancaman pidana, karena setiap pelanggaran Pasal 30 PMK 55/2026 berujung pencabutan", D: "Rudi tidak bertanggung jawab secara pidana maupun profesi karena hanya menjalankan instruksi pemilik selaku pemberi kuasa" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 43 ayat (1) UU KUP memperluas subjek pidana Pasal 39/39A kepada kuasa yang turut serta atau membantu. Dari sisi profesi, menerima permintaan klien untuk melakukan rekayasa termasuk larangan Pasal 30 ayat (1) huruf b PMK 55/2026 dengan sanksi pembekuan izin paling lama 2 tahun (Pasal 30 ayat (3)). Bila proses pidana berjalan, izin dibekukan selama penyidikan dan/atau penuntutan (Pasal 43 ayat (1) PMK 55/2026), dan baru dicabut bila Rudi dipidana (Pasal 43 ayat (3)).",
        jejakHitung: [
          ["Perbuatan", "Sengaja menghilangkan penjualan Rp1,2 miliar dari SPT"],
          ["Delik pokok", "Pasal 39 ayat (1) huruf d UU KUP (SPT isinya tidak benar)"],
          ["Perluasan subjek", "Pasal 43 ayat (1): kuasa yang turut serta/membantu"],
          ["Sanksi profesi", "Rekayasa → Pasal 30 ayat (1) huruf b jo. ayat (3) PMK 55/2026: pembekuan ≤ 2 tahun"],
          ["Bila diproses pidana", "Tersangka/terdakwa → pembekuan selama proses (Pasal 43 ayat (1) PMK 55/2026); dipidana → pencabutan (Pasal 43 ayat (3))"]
        ],
        mengapaSalah: {
          B: "Pasal 43 ayat (1) menyebut 'kuasa' secara tegas sebagai pihak yang dapat dipidana.",
          C: "Pencabutan tidak otomatis dan tidak menghapus ancaman pidana. Rekayasa (Pasal 30 ayat (1) huruf b) diancam pembekuan paling lama 2 tahun (Pasal 30 ayat (3)). Pencabutan antara lain berlaku untuk pelanggaran Pasal 30 ayat (1) huruf c sampai f (ayat (4)), untuk konsultan yang sudah 3 kali dibekukan dalam 5 tahun terakhir dan tetap melanggar (Pasal 41 ayat (4)), dan untuk konsultan yang dipidana karena tindak pidana perpajakan (Pasal 43 ayat (3)); yang terakhir justru mensyaratkan proses pidana.",
          D: "Instruksi pemberi kuasa bukan alasan pembenar; kuasa yang sadar turut serta tetap bertanggung jawab pidana."
        },
        jebakan: "Mengira tanggung jawab pidana atas SPT hanya ada pada WP yang namanya tercantum."
      },
      dasarHukum: [{ pasal: "Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 39 ayat (1) huruf d UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 30 ayat (1) huruf b dan ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 30 ayat (4), Pasal 41 ayat (4), dan Pasal 43 ayat (1) dan (3) PMK 55/2026 — pembekuan selama proses pidana dan sebab pencabutan izin", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "E-007", topik: "E.1", tingkat: ["A", "B", "C"], jenis: "etika", kesulitan: 2,
      stem: "Empat peristiwa dialami konsultan pajak anggota IKPI pada Oktober 2026: (I) Sari mengunggah tangkapan layar SKPKB kliennya ke media sosial dengan nama perusahaan terlihat, disertai komentar 'lihat betapa ngawurnya pemeriksa KPP ini'; (II) Bimo menulis artikel edukasi tentang penyetoran pajak masa tanggal 15 menurut PMK 81/2024 di portal berita dengan mencantumkan nama dan gelarnya; (III) Citra memasang iklan berbayar 'Konsultan Pajak Nomor 1, pasti menang banding'; (IV) Dodi menolak permintaan wartawan untuk mengomentari sengketa pajak kliennya. Peristiwa yang melanggar Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "I dan II",
        B: "II dan IV",
        C: "I dan III",
        D: "I, III, dan IV"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "(I) melanggar kerahasiaan klien sekaligus perilaku profesional karena merendahkan petugas di ruang publik; (III) melanggar larangan publikasi yang menonjolkan diri dan menjanjikan hasil. Artikel edukatif yang faktual (II) dan menolak berkomentar tentang perkara klien (IV) justru sejalan dengan Kode Etik.",
        jejakHitung: [
          ["(I)", "Data klien terbuka + merendahkan petugas → melanggar"],
          ["(II)", "Edukasi faktual, tanpa klaim hasil → tidak melanggar"],
          ["(III)", "Iklan menonjolkan diri + janji hasil → melanggar"],
          ["(IV)", "Menjaga rahasia klien → tidak melanggar"]
        ],
        mengapaSalah: {
          A: "Artikel edukasi (II) bukan promosi yang menonjolkan diri.",
          B: "II dan IV justru dua perilaku yang sesuai Kode Etik.",
          D: "Menolak berkomentar tentang perkara klien (IV) adalah wujud kerahasiaan, bukan pelanggaran."
        },
        jebakan: "Menyamakan semua aktivitas di media dengan iklan; yang dilarang adalah promosi yang menonjolkan diri atau membuka rahasia."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab V — Publikasi", berlakuSejak: "2024-08-20" },
        { pasal: "Kode Etik IKPI Bab II — kerahasiaan dan perilaku profesional", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Batas publikasi yang diperbolehkan mengikuti Kode Etik versi 2019 dan pernyataan pengurus IKPI 2023 tentang promosi di media sosial; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-008", topik: "E.1", tingkat: ["A", "B", "C"], jenis: "etika", kesulitan: 1,
      stem: "Konsultan Pajak Wulan (izin A) membantu Ny. Ratna, pemilik usaha katering dengan 6 karyawan tetap, menghitung PPh Pasal 21 Masa Januari–September 2026. Wulan masih memakai cara lama: penghasilan sebulan disetahunkan, dikurangi biaya jabatan dan PTKP, dikenai tarif Pasal 17, lalu dibagi 12, bukan tarif efektif rata-rata (TER) PP 58/2023 yang berlaku sejak 1 Januari 2024. Akibatnya PPh 21 yang dipotong setiap bulan lebih rendah daripada seharusnya. Penilaian dan tindak lanjut yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak ada pelanggaran etika karena selisihnya akan tertutup oleh penghitungan ulang pada Masa Desember 2026, sehingga klien tidak perlu diberi tahu",
        B: "Melanggar prinsip kompetensi dan kehati-hatian; Wulan wajib memberi tahu klien, menghitung ulang dengan TER, dan membantu pembetulan SPT Masa PPh 21",
        C: "Melanggar prinsip kerahasiaan karena kesalahan hitung membuka data gaji karyawan kepada pihak lain; Wulan cukup meminta maaf kepada karyawan",
        D: "Melanggar larangan keterangan menyesatkan Pasal 30 PMK 55/2026 sehingga izin Wulan otomatis dicabut dan klien wajib menunjuk konsultan baru"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Memakai metode yang sudah tidak berlaku menunjukkan kegagalan memutakhirkan pengetahuan, yaitu pelanggaran kompetensi dan kehati-hatian (alasan utama kewajiban PPL). Tindak lanjut profesional: ungkapkan kepada klien dan bantu perbaikan melalui pembetulan SPT Masa.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kewajiban pemotongan berlaku per Masa Pajak dengan TER; kekurangan Januari–November tetap kurang potong walau ada penghitungan ulang Desember.",
          C: "Tidak ada pengungkapan data kepada pihak lain; masalahnya kompetensi, bukan kerahasiaan.",
          D: "Kekeliruan karena ketidaktahuan bukan keterangan yang sengaja menyesatkan, dan sanksi Pasal 30 ayat (3) pun berupa pembekuan, bukan pencabutan otomatis."
        },
        jebakan: "Mengira penghitungan Desember menghapus kewajiban memotong dengan benar setiap bulan."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab II — kompetensi dan kehati-hatian profesional", berlakuSejak: "2024-08-20" },
        { pasal: "PP 58/2023 dan PMK 168/2023 — tarif efektif PPh Pasal 21", berlakuSejak: "2024-01-01" },
        { pasal: "Pasal 8 ayat (1) UU KUP — pembetulan SPT", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    },
    // ===================== E.2 Klien, rekan, publikasi =====================
    {
      id: "E-009",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "PT Cahaya Rimba (PKP) telah 4 tahun memakai jasa KKP Purnama & Rekan untuk kepatuhan PPh dan PPN. Pada awal November 2026 direktur PT Cahaya Rimba menghubungi Konsultan Pajak Fajar Nugraha (izin B, anggota IKPI) karena kecewa dengan layanan lama, dan meminta Fajar segera menangani SPT Masa PPN Oktober 2026 yang jatuh tempo pada akhir November 2026. Direktur juga meminta Fajar tidak memberi tahu KKP Purnama & Rekan 'agar tidak canggung'. Langkah Fajar yang paling sesuai dengan Kode Etik dalam hubungan antarrekan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menerima penugasan setelah klien mengakhiri perikatan lama, dan memberitahukan secara tertulis kepada KKP Purnama & Rekan sebelum mulai bekerja", B: "Menerima penugasan sesuai permintaan klien tanpa memberi tahu KKP lama, karena klien bebas memilih konsultan", C: "Menolak penugasan secara mutlak karena konsultan dilarang menerima klien yang pernah ditangani rekan seprofesi", D: "Mulai bekerja lebih dahulu dan baru memberi tahu KKP lama setelah SPT Masa PPN Oktober 2026 dilaporkan, agar tenggat klien tidak terlewat" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Kode Etik tidak melarang menerima klien yang berpindah, tetapi melarang merebut atau menerima klien rekan tanpa pemberitahuan. Pemberitahuan tertulis sebelum bekerja menjaga hubungan antarrekan; tenggat SPT Masa PPN (akhir bulan berikutnya) masih memberi waktu yang cukup.",
        jejakHitung: [
          ["Hak klien", "Bebas berpindah konsultan"],
          ["Kewajiban Fajar", "Pemberitahuan kepada rekan sebelumnya, sebelum mulai bekerja"],
          ["Tenggat SPT Masa PPN Oktober 2026", "30 November 2026 (akhir bulan berikutnya)"]
        ],
        mengapaSalah: {
          B: "Kebebasan klien memilih konsultan tidak menghapus kewajiban pemberitahuan antarrekan.",
          C: "Tidak ada larangan menerima klien yang pernah ditangani rekan; yang dilarang adalah merebut atau menerima tanpa pemberitahuan.",
          D: "Pemberitahuan dilakukan sebelum menerima penugasan; alasan tenggat tidak relevan karena SPT Masa PPN baru jatuh tempo akhir November."
        },
        jebakan: "Permintaan klien untuk merahasiakan perpindahan tidak membenarkan pelanggaran kewajiban antarrekan."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab IV — Hubungan dengan Rekan Seprofesi", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 15A ayat (2) UU PPN jo. PMK 81/2024 — SPT Masa PPN akhir bulan berikutnya", berlakuSejak: "2010-04-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: tenggat SPT Masa PPN akhir bulan berikutnya sesuai Pasal 15A ayat (2) UU PPN. Belum pasti: kewajiban memberi tahu rekan sebelumnya dan nomor babnya dalam Kode Etik IKPI 2024, karena naskahnya belum ada di pustaka; rumusan masih mengikuti versi 2019 dan ringkasan sekunder."
    },
    {
      id: "E-010",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Situs web KKP Arta Mandiri yang diluncurkan Oktober 2026 memuat: halaman 'Klien Kami' berisi nama dan logo 25 perusahaan klien yang dipasang tanpa meminta persetujuan mereka; testimoni 'Bersama kami, beban pajak Anda pasti turun 40%'; serta daftar artikel edukasi tentang Coretax. Partner KKP berpendapat situs web bukan iklan karena hanya dikunjungi orang yang mencarinya. Penilaian yang paling tepat menurut Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak melanggar karena situs web milik KKP sendiri bukan media iklan berbayar dan hanya dikunjungi orang yang memang mencari jasa pajak", B: "Hanya melanggar ketentuan pelindungan data, bukan Kode Etik, karena yang ditampilkan adalah data badan; testimoni dan artikel tidak bermasalah", C: "Melanggar larangan rangkap jabatan Pasal 30 ayat (1) huruf f PMK 55/2026 karena KKP memasarkan jasa secara terbuka kepada calon klien", D: "Melanggar: klaim 'pasti turun 40%' menonjolkan diri dan menjanjikan hasil, dan logo klien dipasang tanpa persetujuan; artikel edukasi boleh" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Larangan publikasi tidak bergantung pada media berbayar; situs web dan media sosial termasuk sarana promosi. Klaim hasil pasti melanggar larangan menonjolkan diri dan menjanjikan hasil, sedangkan daftar klien tanpa persetujuan menyentuh kerahasiaan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Bentuk media (berbayar atau milik sendiri) tidak menentukan; isi yang menonjolkan diri tetap dilarang.",
          B: "Kerahasiaan informasi klien adalah kewajiban Kode Etik, terlepas dari aturan pelindungan data lain.",
          C: "Rangkap jabatan menyangkut jabatan di instansi pemerintah/BUMN/BUMD, tidak berkaitan dengan pemasaran."
        },
        jebakan: "Argumen 'bukan iklan berbayar' sering dipakai untuk membenarkan promosi yang menonjolkan diri."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab V — Publikasi", berlakuSejak: "2024-08-20" }, { pasal: "Kode Etik IKPI Bab II — kerahasiaan", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: cakupan larangan rangkap jabatan (opsi C) sesuai Pasal 30 ayat (1) huruf f PMK 55/2026; PMK itu tidak mengatur publikasi. Belum pasti: rincian larangan publikasi dan nomor babnya dalam Kode Etik IKPI 2024, karena naskahnya belum ada di pustaka; rumusan masih mengikuti versi 2019 dan pernyataan pengurus IKPI 2023."
    },
    {
      id: "E-011",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 3,
      stem: "Dalam presentasi untuk memenangkan klien, Konsultan Pajak Gilang (izin B) berkata kepada direksi PT Mega Plastindo: 'SKPKB PPN Rp640 juta yang Bapak terima murni karena konsultan Bapak sekarang tidak kompeten. Putus saja kontraknya hari ini; kami ambil alih dan kami jamin SKPKB itu batal di tingkat keberatan.' Saat itu PT Mega Plastindo masih terikat perikatan dengan konsultan lain sampai Desember 2026, dan SKPKB dikirim 5 Oktober 2026. Penilaian yang paling tepat atas pernyataan Gilang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak melanggar karena menilai kualitas rekan adalah bagian dari persaingan usaha yang sehat", B: "Melanggar beberapa ketentuan sekaligus: mencela rekan seprofesi, berupaya merebut klien yang masih ditangani rekan, dan menjanjikan hasil keberatan", C: "Hanya melanggar larangan menjanjikan hasil; mengkritik rekan dan menawarkan pengambilalihan boleh selama faktanya benar", D: "Melanggar larangan pemerasan Pasal 30 PMK 55/2026 terhadap calon klien sehingga izin Gilang dicabut permanen" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Satu pernyataan memuat tiga pelanggaran: mencela rekan (Bab IV), berupaya merebut klien yang masih terikat perikatan dengan rekan (Bab IV), dan menjanjikan hasil (Bab III). Tidak ada paksaan atau ancaman, sehingga bukan pemerasan.",
        jejakHitung: [
          ["'Konsultan Bapak tidak kompeten'", "Mencela rekan"],
          ["'Putus saja kontraknya hari ini'", "Merebut klien yang masih terikat perikatan"],
          ["'Kami jamin SKPKB batal'", "Menjanjikan hasil"]
        ],
        mengapaSalah: {
          A: "Persaingan tidak membenarkan celaan terhadap rekan dan perebutan klien.",
          C: "Kritik terbuka yang merendahkan rekan dan ajakan memutus perikatan tetap dilarang walau ada kesalahan nyata.",
          D: "Pemerasan memerlukan paksaan atau ancaman; ini pelanggaran kode etik, bukan larangan Pasal 30 huruf e."
        },
        jebakan: "Soal 'paling tepat' menuntut opsi yang menangkap seluruh pelanggaran, bukan hanya salah satunya."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab IV — Hubungan dengan Rekan Seprofesi", berlakuSejak: "2024-08-20" }, { pasal: "Kode Etik IKPI Bab III — larangan menjanjikan hasil", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: pemerasan (opsi D) adalah Pasal 30 ayat (1) huruf e PMK 55/2026 dengan sanksi pencabutan (ayat (4)). Belum pasti: larangan mencela rekan, merebut klien, dan menjanjikan hasil serta nomor babnya dalam Kode Etik IKPI 2024, karena naskahnya belum ada di pustaka; rumusan masih mengikuti versi 2019 dan ringkasan sekunder."
    },
    {
      id: "E-012", topik: "E.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Konsultan Pajak Nadia (izin B) menyusun SPT Tahunan PPh Badan Tahun Pajak 2026 PT Kirana Logistik pada April 2027. Direktur memintanya mencantumkan biaya jasa manajemen Rp900.000.000 kepada perusahaan milik keluarganya, padahal tidak ada perjanjian, tidak ada jasa yang diserahkan, dan tidak ada pembayaran. Setelah Nadia menolak, direktur menahan dokumen lain yang dibutuhkan dan mendesak SPT segera dikirim. Sikap Nadia yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mencantumkan biaya itu dengan catatan di kertas kerja bahwa angka berasal dari direktur, sehingga tanggung jawab beralih kepada klien",
        B: "Mengirim SPT tanpa biaya fiktif tetapi juga tanpa memeriksa dokumen lain, karena tenggat lebih penting daripada kelengkapan",
        C: "Menolak memasukkan biaya fiktif dan, bila klien tetap tidak kooperatif, mengundurkan diri secara tertulis sambil mengingatkan tenggat SPT 30 April 2027",
        D: "Melaporkan direktur ke penyidik pajak sebelum mengundurkan diri karena kewajiban kerahasiaan otomatis gugur ketika klien meminta rekayasa"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Permintaan memasukkan biaya fiktif adalah permintaan rekayasa yang dilarang diterima (Pasal 30 ayat (1) PMK 55/2026). Konsultan berhak menolak dan mengundurkan diri; kewajiban menyampaikan SPT paling lama 4 bulan setelah akhir tahun pajak (30 April 2027) tetap melekat pada Wajib Pajak.",
        jejakHitung: [
          ["Permintaan direktur", "Biaya fiktif → rekayasa yang bertentangan dengan ketentuan"],
          ["Sikap", "Tolak; mundur bila klien tidak kooperatif"],
          ["Tenggat SPT Tahunan Badan 2026", "Akhir bulan ke-4 = 30 April 2027"]
        ],
        mengapaSalah: {
          A: "Catatan di kertas kerja tidak mengalihkan tanggung jawab; konsultan tetap menerima permintaan rekayasa.",
          B: "Mengirim SPT tanpa reviu dokumen melanggar kehati-hatian profesional.",
          D: "Kerahasiaan hanya ditiadakan oleh kewajiban undang-undang, misalnya permintaan tertulis DJP (Pasal 35 UU KUP); tidak gugur otomatis."
        },
        jebakan: "Mengira catatan internal atau tekanan tenggat dapat membenarkan rekayasa."
      },
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1) PMK 55/2026 — larangan menerima permintaan rekayasa", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 3 ayat (3) huruf c UU KUP — SPT Tahunan PPh Badan 4 bulan", berlakuSejak: "2008-01-01" },
        { pasal: "Kode Etik IKPI Bab III — Hubungan dengan Klien", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-013",
      topik: "E.2",
      tingkat: ["B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Konsultan Pajak Teguh (izin C) adalah kuasa PT Arunika Tekstil dalam penagihan utang pajak Rp2.300.000.000. Juru sita mulai menelusuri tanggung jawab mantan direktur utama, Ibu Melati, berdasarkan Pasal 32 ayat (2) UU KUP (wakil bertanggung jawab secara pribadi dan/atau renteng). Ibu Melati lalu meminta Teguh menjadi kuasanya untuk membuktikan bahwa ia tidak dapat dibebani tanggung jawab, dengan strategi menimpakan kesalahan kepada direksi PT Arunika yang menjabat sekarang. Sikap Teguh yang paling sesuai dengan Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menerima kedua penugasan karena keduanya sama-sama klien yang membayar imbalan jasa secara sah", B: "Menerima penugasan Ibu Melati dan memakai informasi internal PT Arunika yang ia peroleh sebagai kuasa untuk memperkuat pembelaan", C: "Menerima penugasan Ibu Melati asalkan PT Arunika tidak diberi tahu, agar kedua klien tidak khawatir", D: "Menolak penugasan Ibu Melati karena kepentingannya berlawanan langsung dengan PT Arunika yang sedang ia wakili, dan tetap merahasiakan informasi PT Arunika" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Strategi Ibu Melati menimpakan tanggung jawab kepada direksi PT Arunika berlawanan langsung dengan kepentingan klien yang sedang diwakili Teguh. Benturan kepentingan seperti ini tidak dapat dikelola dengan diam-diam; penugasan kedua harus ditolak dan informasi klien pertama tetap dirahasiakan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Imbalan sah tidak menghapus benturan kepentingan.",
          B: "Memakai informasi klien untuk kepentingan pihak lain melanggar kerahasiaan sekaligus objektivitas.",
          C: "Menyembunyikan benturan kepentingan dari klien melanggar integritas."
        },
        jebakan: "Mengira benturan kepentingan cukup diatasi dengan merahasiakannya."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab II–III — objektivitas dan kerahasiaan", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 32 ayat (2) UU KUP — tanggung jawab wakil", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: Pasal 32 ayat (2) UU KUP dan Pasal 24 ayat (1) PMK 55/2026 (wajib mematuhi Kode Etik). Benturan kepentingan dalam Pasal 24 ayat (3) PMK 55/2026 hanya mencakup hubungan dengan pegawai DJP, jadi kewajiban menolak klien yang kepentingannya berlawanan bersandar pada Kode Etik IKPI 2024, yang teksnya belum dibaca langsung."
    },
    {
      id: "E-014",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Sebuah penyedia aplikasi pembukuan menawarkan kepada Konsultan Pajak Yuni (izin A) komisi 15% dari biaya langganan setiap klien yang ia arahkan untuk berlangganan, tanpa perlu diberitahukan kepada klien. Yuni menangani 40 klien orang pribadi pengusaha UMKM yang memakai PPh final 0,5% (PP 55/2022 s.t.d.d. PP 20/2026) dan sebagian besar cukup menyelenggarakan pencatatan. Sikap yang paling sesuai dengan prinsip objektivitas adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menolak komisi tersembunyi; rekomendasi aplikasi didasarkan pada kebutuhan klien dan setiap kepentingan pribadi diungkapkan", B: "Menerima komisi karena tidak berasal dari petugas pajak sehingga tidak termasuk larangan mana pun dalam PMK 55/2026", C: "Menerima komisi asalkan seluruh 40 klien diwajibkan memakai aplikasi tersebut agar perlakuan terhadap semua klien sama", D: "Menolak karena konsultan izin A dilarang memberi saran mengenai aplikasi pembukuan atau pencatatan kepada klien" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Komisi tersembunyi dari pihak ketiga membuat rekomendasi konsultan tidak lagi objektif. Kode Etik melarang menerima imbalan dari pihak lain yang tidak wajar; kepentingan pribadi harus diungkapkan dan saran harus berpijak pada kebutuhan klien.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Larangan Pasal 30 PMK 55/2026 bukan satu-satunya batas; Kode Etik juga mengatur imbalan dari pihak lain yang merusak objektivitas.",
          C: "Mewajibkan semua klien memakai aplikasi justru memperbesar benturan kepentingan.",
          D: "Tidak ada larangan bagi konsultan izin A memberi saran pencatatan; masalahnya adalah komisi tersembunyi."
        },
        jebakan: "Menganggap yang dilarang hanya imbalan yang melibatkan petugas pajak."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab II–III — objektivitas, larangan imbalan tidak wajar dari pihak lain", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 55/2026: Pasal 24 ayat (1) huruf b (wajib mematuhi Kode Etik) dan Pasal 30 ayat (1) huruf c dan d (huruf d melarang menerima hadiah tidak wajar atau gratifikasi tanpa membatasi asalnya). Larangan komisi tersembunyi dari pihak lain dan kewajiban mengungkapkan kepentingan pribadi mengikuti ringkasan Kode Etik IKPI; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-015",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Konsultan Pajak Yusuf (izin B) mulai menangani PT Bintang Kemasan (PKP) pada November 2026. Saat menelaah arsip, ia menemukan konsultan sebelumnya keliru mengkreditkan Pajak Masukan Rp48.000.000 dari faktur yang tidak memenuhi syarat, sehingga SPT Masa PPN Juli 2026 seharusnya kurang bayar Rp48.000.000; Masa Juli 2026 belum diperiksa. Direktur meminta Yusuf 'membongkar kesalahan konsultan lama di grup percakapan asosiasi supaya kapok'. Tindakan Yusuf yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Mengumumkan kesalahan itu di grup asosiasi sesuai permintaan direktur, karena kesalahan rekan adalah fakta yang benar dan berguna bagi anggota lain", B: "Mendiamkan kesalahan itu agar tidak dianggap mencela rekan seprofesi, karena Masa Juli 2026 belum tentu akan diperiksa", C: "Menjelaskan secara objektif kepada direktur, menyarankan pembetulan SPT Masa PPN Juli 2026 beserta pelunasan dan bunganya, tanpa mempublikasikan kesalahan rekan", D: "Menunggu terbitnya SKPKB agar seluruh sanksi dapat dibebankan kepada konsultan lama melalui gugatan perdata, tanpa pembetulan SPT lebih dahulu" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kewajiban kepada klien menuntut kesalahan diungkapkan secara objektif dan diperbaiki melalui pembetulan SPT (Pasal 8 ayat (1) UU KUP) selama belum diperiksa, dengan bunga Pasal 8 ayat (2a). Mempublikasikan kesalahan di grup asosiasi membuka informasi klien dan mencela rekan.",
        jejakHitung: [
          ["Kesalahan", "Pajak Masukan Rp48.000.000 tidak dapat dikreditkan"],
          ["Status", "Belum diperiksa → pembetulan masih boleh (Pasal 8 ayat (1))"],
          ["Konsekuensi", "Bayar kekurangan + bunga Pasal 8 ayat (2a)"],
          ["Hubungan antarrekan", "Disampaikan objektif kepada klien, tidak dipublikasikan"]
        ],
        mengapaSalah: {
          A: "Mengumumkan kesalahan di grup membuka informasi klien dan mencela rekan; benarnya fakta tidak membenarkannya.",
          B: "Mendiamkan kesalahan merugikan klien dan melanggar kehati-hatian; menyampaikan fakta secara objektif bukan celaan.",
          D: "Menunggu SKPKB membuat sanksi lebih berat (bunga Pasal 13 ayat (2) dengan uplift lebih tinggi) dan tidak sejalan dengan kepentingan klien."
        },
        jebakan: "Menyamakan menyampaikan fakta secara objektif kepada klien dengan mencela rekan."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) UU KUP — pembetulan SPT Masa", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (2a) UU KUP (diubah UU 11/2020) — bunga pembetulan SPT Masa", berlakuSejak: "2020-11-02" }, { pasal: "Kode Etik IKPI Bab III–IV — kewajiban kepada klien dan rekan", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    // ---- Vignette V-E-01: KKP Sinergi Fiskal (soal E-016 s.d. E-018) ----
    {
      id: "E-016", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-E-01",
      stem: "Data untuk soal E-016 s.d. E-018: KKP Sinergi Fiskal di Bandung dipimpin Rina Kusuma (izin B); rekannya, Teddy, memegang izin C. PT Andalas Prima Industri adalah perusahaan PMA (70% saham dimiliki Andalas Holdings Pte. Ltd., Singapura) yang menerima SKPKB PPh Badan Tahun Pajak 2024 sebesar Rp3.150.000.000, dikirim 12 Oktober 2026. Direktur keuangannya meminta Rina menjadi kuasa untuk mengajukan keberatan. Menurut PMK 55/2026 dan PMK 44/2026, pengaturan kuasa yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rina dapat menjadi kuasa karena izin B mencakup WP badan, dan PT Andalas didirikan menurut hukum Indonesia sehingga tidak dihitung sebagai PMA",
        B: "Rina dapat menjadi kuasa asalkan Teddy (izin C) ikut menandatangani surat keberatan sebagai penyelia yang bertanggung jawab atas isinya",
        C: "PT Andalas menunjuk Teddy (izin C) dengan surat kuasa khusus yang memuat masa berlaku; Rina tidak dapat menjadi kuasa karena izin B tidak mencakup PMA",
        D: "Rina dan Teddy ditunjuk bersama dalam satu surat kuasa khusus agar Rina tetap dapat menandatangani bila Teddy berhalangan"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Izin B mencakup WP orang pribadi dan badan kecuali PMA dan BUT (Pasal 4 PMK 55/2026). Karena PT Andalas adalah PMA, kuasanya harus konsultan izin C. Surat kuasa khusus menurut PMK 44/2026 hanya untuk satu kuasa dan wajib memuat masa berlaku; keberatan diajukan paling lama 3 bulan sejak SKPKB dikirim (12 Januari 2027).",
        jejakHitung: [
          ["Profil klien", "Badan PMA"],
          ["Izin B", "Badan kecuali PMA dan BUT → tidak mencakup"],
          ["Izin C", "Seluruh WP → Teddy"],
          ["Surat kuasa", "Satu kuasa, memuat masa berlaku"],
          ["Batas keberatan", "12 Oktober 2026 + 3 bulan = 12 Januari 2027"]
        ],
        mengapaSalah: {
          A: "Status badan hukum Indonesia tidak mengubah statusnya sebagai PMA yang dikecualikan dari izin B.",
          B: "Tidak ada mekanisme 'penyelia' yang memperluas kewenangan izin B; yang bertindak tetap di luar klasifikasi.",
          D: "Satu surat kuasa khusus hanya untuk satu kuasa (PMK 44/2026 Pasal 8), dan Rina tetap di luar klasifikasi izinnya."
        },
        jebakan: "Mengira 'badan yang didirikan di Indonesia' otomatis masuk izin B, padahal PMA dikecualikan."
      },
      dasarHukum: [
        { pasal: "Pasal 4 PMK 55/2026 — cakupan izin B dan C", berlakuSejak: "2026-08-24" },
        { pasal: "PMK 44/2026 Pasal 8 — surat kuasa khusus", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 25 ayat (3) UU KUP — keberatan 3 bulan sejak SKP dikirim", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-017", topik: "E.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-E-01",
      stem: "Lanjutan data KKP Sinergi Fiskal (Rina izin B, Teddy izin C; klien PT Andalas Prima Industri, PMA, SKPKB Rp3,15 miliar). Sehari setelah surat kuasa ditandatangani, Doni, staf pemasaran KKP yang bukan konsultan pajak, mengunggah di akun Instagram KKP: 'Baru teken kontrak dengan PT Andalas Prima Industri! SKPKB Rp3,15 M siap kami batalkan. Konsultan lama mereka kalah kelas.' Rina baru mengetahuinya keesokan harinya. Penilaian dan tindakan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Tidak melanggar Kode Etik karena diunggah oleh staf yang tidak memegang izin konsultan pajak, sehingga tanggung jawab ada pada staf itu sendiri",
        B: "Melanggar kerahasiaan klien, larangan promosi yang menjanjikan hasil, dan larangan mencela rekan; KKP wajib menurunkan unggahan dan membenahi pengendalian staf",
        C: "Hanya melanggar ketentuan pelindungan data pribadi, bukan Kode Etik, karena yang diungkap adalah data badan dan unggahan bersifat promosi biasa",
        D: "Melanggar, tetapi unggahan cukup dibiarkan sampai ada pengaduan ke Dewan Kehormatan karena kewajiban bertindak baru timbul setelah ada putusan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Unggahan memuat tiga pelanggaran: membuka identitas dan nilai sengketa klien, klaim hasil yang menonjolkan diri, dan celaan terhadap rekan. Konsultan dan KKP bertanggung jawab atas publikasi atas nama KKP, termasuk yang dibuat staf; sistem pengendalian mutu menuntut perbaikan prosedur.",
        jejakHitung: [
          ["Nama klien + nilai SKPKB", "Kerahasiaan"],
          ["'Siap kami batalkan'", "Menjanjikan hasil / menonjolkan diri"],
          ["'Konsultan lama kalah kelas'", "Mencela rekan"],
          ["Tanggung jawab", "Pimpinan KKP atas publikasi KKP"]
        ],
        mengapaSalah: {
          A: "Publikasi atas nama KKP menjadi tanggung jawab konsultan dan KKP walau dibuat staf.",
          C: "Kerahasiaan informasi klien adalah kewajiban Kode Etik, tidak bergantung pada status data pribadi atau badan.",
          D: "Kewajiban etika berlaku saat itu juga; pelanggaran harus dihentikan tanpa menunggu pengaduan."
        },
        jebakan: "Mengira kode etik hanya mengikat perbuatan pribadi pemegang izin, bukan publikasi kantornya."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab II, IV, dan V — kerahasiaan, rekan seprofesi, publikasi", berlakuSejak: "2024-08-20" },
        { pasal: "Standar Profesi IKPI — sistem pengendalian mutu KKP", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Tanggung jawab KKP atas publikasi staf diturunkan dari Kode Etik dan Standar Profesi IKPI versi 2019; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-018",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-E-01",
      stem: "Lanjutan data KKP Sinergi Fiskal: Teddy (izin C) kini menjadi kuasa PT Andalas Prima Industri dalam keberatan SKPKB Rp3,15 miliar. Menjelang pembahasan akhir, direktur keuangan PT Andalas menitipkan amplop berisi Rp50.000.000 kepada Teddy untuk diserahkan kepada penelaah keberatan 'sebagai ucapan terima kasih' agar keberatan dikabulkan. Uang itu sepenuhnya berasal dari klien. Jika Teddy menyerahkannya, sanksi izin praktik menurut PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Peringatan, karena uang berasal dari klien dan Teddy hanya berperan sebagai perantara", B: "Pembekuan izin paling lama 2 tahun, sama dengan pelanggaran kode etik asosiasi", C: "Pembekuan izin 3 bulan, lalu pencabutan bila perbuatan itu diulangi", D: "Pencabutan izin secara permanen; Teddy tidak dapat mengajukan izin baru" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Menawarkan atau memberikan imbalan kepada petugas pajak termasuk larangan Pasal 30 ayat (1) huruf c PMK 55/2026 dengan sanksi pencabutan izin yang bersifat permanen (Pasal 30 ayat (4)), di samping kemungkinan proses pidana. Asal uang dari klien tidak mengubah peran Teddy sebagai pihak yang menyerahkan. Akibat pencabutan permanen, SKK Teddy juga ikut tidak berlaku.",
        jejakHitung: [
          ["Perbuatan", "Menyerahkan imbalan kepada penelaah keberatan"],
          ["Larangan", "Pasal 30 ayat (1) huruf c: menawarkan imbalan kepada petugas pajak"],
          ["Sanksi", "Pasal 30 ayat (4): pencabutan permanen, SKK tidak berlaku"]
        ],
        mengapaSalah: {
          A: "Posisi sebagai perantara tetap memenuhi larangan Pasal 30 ayat (1) huruf c; imbalan kepada petugas pajak tidak diganjar peringatan, melainkan pencabutan permanen menurut Pasal 30 ayat (4).",
          B: "Pembekuan paling lama 2 tahun untuk pelanggaran kode etik dan keterangan menyesatkan/rekayasa, bukan suap.",
          C: "Pembekuan 3 bulan adalah sanksi tidak bergabung dengan asosiasi dalam 30 hari kerja."
        },
        jebakan: "Mengira perantara yang tidak memakai uang sendiri hanya dikenai sanksi ringan."
      },
      dasarHukum: [{ pasal: "Pasal 30 ayat (1) huruf c dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    // ===================== E.3 PMK 55/2026: izin, PPL, laporan =====================
    {
      id: "E-019", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 4 PMK 55/2026 (parafrase): Izin praktik konsultan pajak terdiri atas tingkat A, B, dan C. Pemegang izin tingkat A dapat memberikan jasa kepada Wajib Pajak orang pribadi, kecuali Wajib Pajak orang pribadi yang berdomisili di negara mitra P3B. Pemegang izin tingkat B dapat memberikan jasa kepada Wajib Pajak orang pribadi dan badan, kecuali penanaman modal asing dan bentuk usaha tetap. Pemegang izin tingkat C dapat memberikan jasa kepada seluruh Wajib Pajak orang pribadi dan badan.",
      stem: "Konsultan Pajak Lina Marlina (izin A) didatangi empat calon klien pada November 2026: (1) Ny. Sari, pemilik toko daring di Bandung yang memakai PPh final 0,5%; (2) CV Sumber Tani, persekutuan komanditer milik keluarga di Garut; (3) Mr. Tan Wei Ming, warga negara Singapura yang berdomisili di Singapura dan memiliki rumah sewaan di Bali; (4) dr. Bayu, dokter praktik mandiri di Jakarta yang memakai NPPN. Berdasarkan kutipan, Lina dapat bertindak sebagai kuasa untuk ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "(1) dan (4)",
        B: "(1), (2), dan (4)",
        C: "(1), (3), dan (4)",
        D: "(1) saja, karena izin A hanya untuk orang pribadi yang dikenai PPh final"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Izin A hanya untuk WP orang pribadi dan mengecualikan orang pribadi yang berdomisili di negara mitra P3B. Ny. Sari dan dr. Bayu adalah orang pribadi dalam negeri; CV adalah badan; Mr. Tan berdomisili di Singapura (mitra P3B).",
        jejakHitung: [
          ["(1) Ny. Sari", "OP dalam negeri → boleh"],
          ["(2) CV Sumber Tani", "Badan → di luar izin A"],
          ["(3) Mr. Tan", "OP berdomisili di negara mitra P3B → dikecualikan"],
          ["(4) dr. Bayu", "OP dalam negeri (NPPN) → boleh"]
        ],
        mengapaSalah: {
          B: "CV adalah WP badan meskipun dimiliki keluarga; badan masuk izin B atau C.",
          C: "Kata 'kecuali' dalam kutipan mengeluarkan orang pribadi yang berdomisili di negara mitra P3B.",
          D: "Izin A mencakup seluruh WP orang pribadi dalam negeri, apa pun skema pajaknya (final, NPPN, pembukuan)."
        },
        jebakan: "Membaca 'orang pribadi' tanpa memperhatikan pengecualian domisili mitra P3B."
      },
      dasarHukum: [
        { pasal: "Pasal 4 PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-020", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Laras mengajukan izin praktik tingkat C pada 1 Maret 2027. Ia memegang SKK tingkat C (terbit 19 November 2026) dan lulus ujian profesi asosiasi pada Januari 2027. Riwayat kerjanya: asisten konsultan di KKP Wijaya 1 Januari 2023 – 30 Juni 2024; cuti studi 1 Juli 2024 – 31 Juli 2025; staf pajak di KKP Prisma sejak 1 Agustus 2025 sampai sekarang (Februari 2027 adalah bulan penuh terakhir sebelum permohonan). Pengalaman kerja perpajakan dihitung secara akumulasi dalam 3 tahun terakhir sebelum permohonan. Kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Memenuhi syarat izin C karena total pengalaman 37 bulan (18 bulan + 19 bulan)",
        B: "Belum memenuhi syarat izin C karena pengalaman dalam 3 tahun terakhir baru 23 bulan, kurang dari 24 bulan",
        C: "Memenuhi syarat izin C karena syarat pengalaman untuk izin C cukup 1 tahun",
        D: "Belum memenuhi karena Laras wajib lebih dahulu memegang izin B selama minimal 2 tahun"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Jendela 3 tahun sebelum permohonan adalah 1 Maret 2024 – 28 Februari 2027. Pengalaman di KKP Wijaya yang masuk jendela hanya Maret–Juni 2024 (4 bulan), ditambah KKP Prisma Agustus 2025 – Februari 2027 (19 bulan), sehingga 23 bulan, kurang dari syarat izin C 2 tahun.",
        jejakHitung: [
          ["Jendela 3 tahun", "1 Maret 2024 – 28 Februari 2027"],
          ["KKP Wijaya dalam jendela", "Maret–Juni 2024 = 4 bulan"],
          ["Cuti studi", "0 bulan"],
          ["KKP Prisma", "Agt–Des 2025 (5) + 2026 (12) + Jan–Feb 2027 (2) = 19 bulan"],
          ["Total", "4 + 19 = 23 bulan < 24 bulan → belum memenuhi"]
        ],
        mengapaSalah: {
          A: "Menghitung seluruh karier; 14 bulan di KKP Wijaya berada di luar jendela 3 tahun.",
          C: "Pengalaman 1 tahun adalah syarat izin B; izin C memerlukan 2 tahun.",
          D: "Sejak PMK 55/2026 izin tidak harus berjenjang; pemegang SKK C dapat langsung mengajukan izin C."
        },
        jebakan: "Lupa membatasi penghitungan pada jendela 3 tahun terakhir."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — syarat pengalaman kerja izin B dan C", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 4 PMK 55/2026 — izin tidak harus berjenjang", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-021", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Konsultan Pajak Yudha (izin A sejak 2023, anggota AKP2I) sepanjang 2026 menangani 14 klien orang pribadi: 9 klien SPT Tahunan, 3 klien pendampingan pemeriksaan, dan 2 klien keberatan, serta mengumpulkan 22 SKP PPL. Yudha berencana menyampaikan laporan tahunan konsultan bersamaan dengan SPT Tahunan PPh orang pribadinya sendiri pada 31 Maret 2027, berisi jumlah klien dan total imbalan jasa saja. Menurut PMK 55/2026, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rencana Yudha sudah tepat karena laporan tahunan konsultan mengikuti tenggat dan format ringkas SPT Tahunan orang pribadi",
        B: "Laporan tahunan tidak wajib bagi pemegang izin A yang hanya menangani WP orang pribadi karena datanya sudah tercakup dalam SPT klien",
        C: "Laporan tahunan disampaikan paling lambat 30 April 2027 dan wajib memuat perincian jasa per klien, pemenuhan PPL, serta keanggotaan asosiasi",
        D: "Laporan tahunan disampaikan paling lambat 31 Januari 2027, mengikuti tenggat pemberian bukti potong tahunan kepada pegawai"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 55/2026 mewajibkan setiap konsultan menyampaikan laporan tahunan paling lambat 30 April tahun berikutnya, dengan perincian jasa per klien (lebih rinci dari ketentuan lama), pemenuhan PPL, dan keanggotaan asosiasi. Rencana Yudha yang hanya memuat jumlah klien dan total imbalan tidak memenuhi ketentuan itu.",
        jejakHitung: [
          ["Tahun laporan", "2026"],
          ["Batas", "30 April 2027"],
          ["Isi wajib", "Perincian jasa per klien (14 klien), PPL, keanggotaan asosiasi"]
        ],
        mengapaSalah: {
          A: "Tenggat dan isi laporan tahunan konsultan berbeda dari SPT Tahunan pribadinya; ringkasan jumlah klien tidak memenuhi kewajiban perincian.",
          B: "Kewajiban laporan tahunan berlaku untuk semua tingkat izin.",
          D: "31 Januari adalah tenggat terkait bukti potong tahunan, bukan laporan tahunan konsultan."
        },
        jebakan: "Mencampur tenggat laporan profesi dengan tenggat SPT pribadi."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — kewajiban laporan tahunan konsultan pajak", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-022", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Konsultan Pajak Wawan memperoleh izin praktik tingkat A yang terbit 1 Februari 2026; sebelum itu ia bekerja di bidang pemasaran, bukan perpajakan. Ia lulus UKP tingkat C (SKK C terbit 19 November 2026) dan lulus ujian profesi asosiasi pada Desember 2026. Wawan ingin secepatnya memegang izin tingkat C. Dengan asumsi praktiknya berjalan terus tanpa sanksi dan syarat lain terpenuhi, tanggal paling cepat Wawan memenuhi syarat izin C adalah ...",
      kataKualifikasi: ["paling cepat"],
      opsi: {
        A: "1 Februari 2027, karena kenaikan tingkat cukup dengan praktik 1 tahun sejak izin A",
        B: "19 November 2026, karena izin tidak harus berjenjang dan SKK C sudah terbit pada tanggal itu",
        C: "19 November 2028, karena pengalaman 2 tahun dihitung sejak SKK C terbit, bukan sejak izin A",
        D: "1 Februari 2028, karena naik dua tingkat (A ke C) memerlukan praktik minimal 2 tahun"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Naik dua tingkat memerlukan praktik minimal 2 tahun sejak izin A (1 Februari 2028). Jalur langsung juga tidak lebih cepat karena pengalaman perpajakan Wawan baru dimulai 1 Februari 2026, sehingga syarat 2 tahun untuk izin C juga baru terpenuhi 1 Februari 2028. SKK C berlaku sampai 19 November 2029, jadi masih sah.",
        jejakHitung: [
          ["Izin A terbit", "1 Februari 2026"],
          ["Syarat naik dua tingkat", "Praktik ≥ 2 tahun → 1 Februari 2028"],
          ["Pengalaman perpajakan untuk izin C", "Mulai 1 Februari 2026 → 24 bulan pada 1 Februari 2028"],
          ["Masa berlaku SKK C", "19 November 2026 + 3 tahun = 19 November 2029 → masih berlaku"]
        ],
        mengapaSalah: {
          A: "Praktik 1 tahun hanya untuk naik satu tingkat (A ke B).",
          B: "Tidak berjenjang bukan berarti tanpa syarat pengalaman; izin C tetap memerlukan pengalaman 2 tahun.",
          C: "Pengalaman dihitung dari masa kerja perpajakan, bukan sejak SKK terbit."
        },
        jebakan: "Mengira 'tidak harus berjenjang' menghapus syarat lamanya praktik atau pengalaman."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — kenaikan tingkat izin dan syarat pengalaman", berlakuSejak: "2026-08-24" },
        { pasal: "PMK 55/2026 — masa berlaku SKK 3 tahun", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-023", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Pada Desember 2026 Aditya, WNI lulusan S-1 akuntansi yang berdomisili di Surabaya, memiliki NPWP, SKK tingkat B yang masih berlaku, sudah lulus ujian profesi asosiasi, dan bekerja 20 bulan sebagai staf KKP dalam 3 tahun terakhir, menyiapkan berkas permohonan izin praktik tingkat B. Rekannya, yang memperoleh izin pada 2020, berpendapat berkas Aditya belum lengkap. Menurut PMK 55/2026, hal yang BUKAN syarat untuk dilampirkan pada saat permohonan izin diajukan adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "Bukti telah menjadi anggota asosiasi konsultan pajak terdaftar",
        B: "Pernyataan tidak terikat pekerjaan atau jabatan pada instansi pemerintah, lembaga negara, BUMN, atau BUMD",
        C: "SKK yang sesuai dengan tingkat izin yang dimohonkan",
        D: "Bukti pengalaman kerja di bidang perpajakan minimal 1 tahun dalam 3 tahun terakhir"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak PMK 55/2026 keanggotaan asosiasi bukan lagi syarat permohonan; kewajiban menjadi anggota baru timbul paling lambat 30 hari kerja setelah izin terbit. Pengalaman rekan Aditya (izin 2020) mengikuti aturan lama.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Tidak terikat jabatan pada pemerintah, lembaga negara, BUMN, atau BUMD tetap syarat izin.",
          C: "SKK sesuai tingkat izin adalah syarat utama kompetensi.",
          D: "Izin B mensyaratkan pengalaman minimal 1 tahun dalam 3 tahun terakhir; Aditya memiliki 20 bulan."
        },
        jebakan: "Memakai pengalaman rezim lama yang mensyaratkan keanggotaan asosiasi sejak permohonan."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — syarat izin praktik dan kewajiban keanggotaan asosiasi", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "E-024",
      topik: "E.3",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Pak Haryono pensiun dengan hormat dari DJP sebagai pemeriksa pajak pada 1 Juli 2025. Ia lulus UKP tingkat C (SKK terbit 19 November 2026), lulus ujian profesi pada Desember 2026, dan berpengalaman di bidang perpajakan lebih dari 25 tahun. Ia berencana mengajukan izin tingkat C pada Januari 2027. Rekannya mengingatkan bahwa PMK 55/2026 memuat ketentuan khusus bagi mantan pegawai Kementerian Keuangan. Kesimpulan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Dapat mengajukan izin C pada Januari 2027 karena SKK, ujian profesi, dan pengalaman lebih dari 25 tahun telah terpenuhi", B: "Dapat mengajukan izin pada Januari 2027, tetapi hanya tingkat A selama 5 tahun pertama sejak pensiun, lalu naik ke tingkat C", C: "Belum dapat sebelum jeda 5 tahun sejak berhenti berakhir (1 Juli 2030), dan saat itu ia perlu SKK baru karena SKK C-nya sudah habis", D: "Dapat mengajukan izin C mulai 1 Juli 2027 setelah jeda 2 tahun sejak pensiun, memakai SKK C yang masih berlaku" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Bagi pensiunan PNS Kementerian Keuangan, Pasal 5 ayat (2) huruf l angka 1 PMK 55/2026 mensyaratkan telah lewat 5 tahun sejak tanggal pensiun yang tercantum dalam surat keputusan pensiun; PMK 55/2026 tidak memuat jalur khusus bagi pensiunan DJP. Jeda itu baru berakhir 1 Juli 2030, sedangkan SKK C yang terbit 19 November 2026 berlaku 3 tahun (Pasal 10 ayat (7)), yaitu sampai 19 November 2029.",
        jejakHitung: [
          ["Tanggal pensiun (SK pensiun)", "1 Juli 2025"],
          ["Jeda 5 tahun (Pasal 5 ayat (2) huruf l angka 1)", "Paling cepat 1 Juli 2030"],
          ["SKK C (Pasal 10 ayat (7))", "19 November 2026 + 3 tahun = 19 November 2029"],
          ["Perbandingan", "1 Juli 2030 > 19 November 2029 → SKK sudah tidak berlaku"]
        ],
        mengapaSalah: {
          A: "Mengabaikan syarat jeda 5 tahun bagi pensiunan PNS Kementerian Keuangan (Pasal 5 ayat (2) huruf l); pengalaman kerja pun dihitung secara akumulasi dalam 3 tahun terakhir, bukan sepanjang karier.",
          B: "Jeda adalah syarat permohonan izin untuk semua tingkat; tidak ada izin tingkat A sementara selama masa jeda.",
          D: "Jedanya 5 tahun, bukan 2 tahun, dan pada 2030 SKK C-nya sudah lewat masa berlaku."
        },
        jebakan: "Tidak membandingkan akhir jeda dengan masa berlaku SKK. SKK hanya dapat diperpanjang melalui ujian penyegaran yang diajukan paling cepat 1 bulan sebelum masa berlakunya berakhir (Pasal 10 ayat (8) dan (9)); tanpa perpanjangan itu, Pak Haryono memerlukan SKK baru."
      },
      dasarHukum: [{ pasal: "Pasal 5 ayat (2) huruf l angka 1 PMK 55/2026 — jeda 5 tahun sejak tanggal pensiun bagi pensiunan PNS Kemenkeu", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 10 ayat (7) dan ayat (8) PMK 55/2026 — masa berlaku SKK 3 tahun dan perpanjangannya", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "E-025", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Fikri lulus UKP tingkat B pada periode Oktober 2026 dan SKK-nya terbit 19 November 2026. Ia lulus ujian profesi asosiasi pada 2027, tetapi karena sibuk belum mengajukan izin praktik. Pada Januari 2030, dengan pengalaman 3 tahun di KKP, Fikri berencana mengajukan izin tingkat B menggunakan SKK tersebut. Penilaian yang tepat atas SKK Fikri pada Januari 2030 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Masih berlaku karena SKK tidak memiliki masa berlaku selama belum dipakai untuk mengajukan izin praktik",
        B: "Sudah tidak berlaku karena SKK berlaku 3 tahun sejak terbit (sampai 19 November 2029); Fikri perlu SKK baru",
        C: "Masih berlaku karena SKK berlaku 5 tahun sejak terbit, yaitu sampai 19 November 2031, sehingga masih dapat dipakai",
        D: "Sudah tidak berlaku karena SKK hanya berlaku 2 tahun sejak terbit, yaitu sampai 19 November 2028"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "SKK hasil UKP berlaku 3 tahun sejak terbit: 19 November 2026 sampai 19 November 2029. Pada Januari 2030 SKK sudah habis sehingga tidak dapat dipakai untuk permohonan izin. Fikri perlu memperoleh SKK tingkat B baru melalui uji kompetensi.",
        jejakHitung: [
          ["SKK terbit", "19 November 2026"],
          ["Masa berlaku", "3 tahun → 19 November 2029"],
          ["Rencana permohonan", "Januari 2030 → sudah lewat"]
        ],
        mengapaSalah: {
          A: "Masa berlaku SKK berjalan sejak terbit, tidak ditangguhkan sampai dipakai.",
          C: "Masa berlaku SKK 3 tahun, bukan 5 tahun.",
          D: "Batas 2 tahun berkaitan dengan pengakuan sertifikat USKP lama sebagai SKK pada masa peralihan, bukan SKK hasil UKP."
        },
        jebakan: "Tertukar masa berlaku SKK (3 tahun) dengan ketentuan peralihan sertifikat lama (2 tahun)."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — SKK berlaku 3 tahun", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 60 huruf f PMK 55/2026 — pengakuan sertifikat lama", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    },
    // ---- Vignette V-E-03: Dimas, izin B terbit 2 November 2026 (soal E-026 s.d. E-028) ----
    {
      id: "E-026", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-E-03",
      stem: "Data untuk soal E-026 s.d. E-028: Dimas Arya memperoleh izin praktik tingkat B yang terbit Senin, 2 November 2026, dan belum menjadi anggota asosiasi mana pun. Tidak ada hari libur nasional atau cuti bersama antara 2 November dan 18 Desember 2026; hari kerja adalah Senin–Jumat, dan hari kerja dihitung mulai hari kerja berikutnya setelah tanggal izin terbit. Batas akhir Dimas wajib menjadi anggota asosiasi konsultan pajak terdaftar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rabu, 2 Desember 2026",
        B: "Jumat, 11 Desember 2026",
        C: "Selasa, 2 Februari 2027",
        D: "Senin, 14 Desember 2026"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Batasnya 30 hari kerja sejak izin terbit. Mulai Selasa 3 November 2026 sebagai hari ke-1, hari kerja ke-30 jatuh pada Senin, 14 Desember 2026.",
        jejakHitung: [
          ["Ketentuan", "Paling lambat 30 hari kerja sejak izin terbit"],
          ["Hari ke-1", "Selasa, 3 November 2026"],
          ["3–6 November", "4 hari kerja (kumulatif 4)"],
          ["9 November – 11 Desember (5 minggu)", "25 hari kerja (kumulatif 29)"],
          ["Hari ke-30", "Senin, 14 Desember 2026"]
        ],
        mengapaSalah: {
          A: "2 Desember 2026 adalah 30 hari kalender, bukan 30 hari kerja.",
          B: "Menghitung tanggal izin terbit (2 November) sebagai hari ke-1 sehingga mundur satu hari kerja.",
          C: "Tiga bulan adalah lamanya pembekuan izin bila tidak bergabung, bukan batas waktu bergabung."
        },
        jebakan: "Hari kerja vs hari kalender, dan titik mulai penghitungan."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — kewajiban menjadi anggota asosiasi paling lambat 30 hari kerja sejak izin terbit", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-027",
      topik: "E.3",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-E-03",
      stem: "Lanjutan data Dimas Arya (izin tingkat B sejak 2 November 2026). Selama 2027 Dimas mengumpulkan PPL: seminar asosiasi 12 SKP (terstruktur), pelatihan in-house yang diakui asosiasi 10 SKP (terstruktur), menulis artikel perpajakan 6 SKP (tidak terstruktur), dan mengikuti webinar umum 5 SKP (tidak terstruktur). Berdasarkan kewajiban PPL tahunan untuk tingkat B menurut PMK 55/2026, kondisi Dimas pada akhir 2027 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Belum memenuhi: total 33 SKP sudah melebihi 30, tetapi SKP terstruktur 22 masih kurang 2 dari minimal 24", B: "Sudah memenuhi karena total 33 SKP melebihi kewajiban 30 SKP", C: "Belum memenuhi: kurang 12 SKP karena kewajiban tingkat B adalah 45 SKP", D: "Belum memenuhi: kurang 8 SKP karena seluruh 30 SKP wajib berasal dari kegiatan terstruktur" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Tingkat B wajib 30 SKP per tahun, sekurang-kurangnya 24 SKP terstruktur. Total Dimas 33 SKP (memenuhi), tetapi SKP terstruktur hanya 22 sehingga kurang 2 SKP terstruktur.",
        jejakHitung: [
          ["SKP terstruktur", "12 + 10 = 22"],
          ["SKP tidak terstruktur", "6 + 5 = 11"],
          ["Total", "22 + 11 = 33 ≥ 30 → total terpenuhi"],
          ["Uji terstruktur", "22 < 24 → kurang 2 SKP terstruktur"]
        ],
        mengapaSalah: {
          B: "Memenuhi total belum cukup; komponen terstruktur minimal 24 SKP harus terpenuhi tersendiri.",
          C: "45 SKP adalah kewajiban tingkat C.",
          D: "Tidak seluruh SKP harus terstruktur; batas terstruktur tingkat B adalah 24 SKP."
        },
        jebakan: "Dua syarat kumulatif: total SKP dan minimal SKP terstruktur."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) dan ayat (3) PMK 55/2026 — kewajiban PPL tahunan (A 20/16, B 30/24, C 45/36 SKP), mulai Januari tahun berikutnya setelah izin terbit", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-028", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 1, kasusId: "V-E-03",
      stem: "Lanjutan data Dimas Arya: izin tingkat B terbit Senin, 2 November 2026, dan batas 30 hari kerja untuk bergabung dengan asosiasi jatuh pada 14 Desember 2026. Sampai 15 Desember 2026 Dimas belum mendaftar ke IKPI, AKP2I, Perkoppi, maupun P3KPI karena merasa keanggotaan tidak berpengaruh pada izin yang sudah terbit. Menurut PMK 55/2026, akibat yang tepat bagi Dimas adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Peringatan tertulis, karena kewajiban keanggotaan hanya bersifat administratif",
        B: "Pencabutan izin seketika pada 15 Desember 2026",
        C: "Izin dibekukan selama 3 bulan; bila tetap tidak bergabung, izin dicabut",
        D: "Pembekuan izin paling lama 2 tahun seperti pelanggaran kode etik"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Konsultan yang tidak menjadi anggota asosiasi terdaftar paling lambat 30 hari kerja sejak izin terbit dikenai pembekuan izin 3 bulan; bila tetap tidak bergabung, izinnya dicabut.",
        jejakHitung: [
          ["Batas bergabung", "14 Desember 2026"],
          ["Status 15 Desember 2026", "Belum anggota → melewati batas"],
          ["Sanksi tahap 1", "Pembekuan izin 3 bulan"],
          ["Sanksi tahap 2", "Tetap tidak bergabung → pencabutan"]
        ],
        mengapaSalah: {
          A: "Pelanggaran ini dikenai pembekuan, bukan sekadar peringatan.",
          B: "Pencabutan baru terjadi setelah pembekuan bila tetap tidak bergabung.",
          D: "Pembekuan paling lama 2 tahun untuk pelanggaran kode etik atau keterangan menyesatkan/rekayasa."
        },
        jebakan: "Tertukar dua jenis pembekuan: 3 bulan (keanggotaan) dan paling lama 2 tahun (kode etik/rekayasa)."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — kewajiban keanggotaan asosiasi dan sanksinya", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 32 PMK 55/2026 — asosiasi terdaftar", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    // ===================== E.4 Larangan dan sanksi =====================
    {
      id: "E-029", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      kutipan: "Pasal 30 ayat (1) PMK 55/2026 (parafrase): Konsultan Pajak dilarang: a. memberikan keterangan yang menyesatkan kepada klien atau Direktorat Jenderal Pajak; b. menerima permintaan rekayasa yang bertentangan dengan ketentuan peraturan perundang-undangan; c. menawarkan imbalan kepada petugas pajak; d. menerima gratifikasi yang tidak wajar; e. melakukan pemerasan; dan f. merangkap jabatan pada instansi pemerintah, lembaga negara, lembaga lain yang dibentuk berdasarkan undang-undang, BUMN, atau BUMD.",
      stem: "Komite etik internal KKP Sejahtera menelaah empat laporan selama Oktober–November 2026: (1) Rio meyakinkan klien bahwa SKPKB-nya 'pasti batal demi hukum' padahal ia tahu prosedur pemeriksaan sudah benar, agar klien mau membayar jasa keberatan; (2) Sinta menolak permintaan klien untuk menunda pelaporan SPT Masa PPh Pasal 21 yang jatuh tempo 20 hari setelah masa pajak berakhir; (3) Hadi diangkat sebagai anggota dewan pengawas sebuah BUMD; (4) Bayu meminta 'uang pelicin' kepada klien dengan ancaman membocorkan data klien. Perbuatan yang BUKAN termasuk larangan dalam kutipan adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "(1) Rio — meyakinkan klien bahwa SKPKB pasti dibatalkan",
        B: "(2) Sinta — menolak permintaan menunda pelaporan SPT Masa PPh 21",
        C: "(3) Hadi — menjabat anggota dewan pengawas sebuah BUMD",
        D: "(4) Bayu — meminta uang pelicin dengan ancaman membocorkan data"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Menolak permintaan yang melanggar tenggat justru sesuai kewajiban profesi. Tiga perbuatan lain masuk larangan: keterangan menyesatkan kepada klien (huruf a), rangkap jabatan pada BUMD (huruf f), dan pemerasan (huruf e).",
        jejakHitung: [
          ["(1) Rio", "Keterangan menyesatkan kepada klien → huruf a"],
          ["(2) Sinta", "Menolak penundaan → bukan larangan"],
          ["(3) Hadi", "Jabatan pada BUMD → huruf f"],
          ["(4) Bayu", "Meminta uang dengan ancaman → huruf e"]
        ],
        mengapaSalah: {
          A: "Larangan keterangan menyesatkan mencakup keterangan kepada klien, bukan hanya kepada DJP.",
          C: "Rangkap jabatan pada BUMD termasuk larangan huruf f.",
          D: "Meminta uang dengan ancaman adalah pemerasan (huruf e)."
        },
        jebakan: "Mengira keterangan menyesatkan hanya dilarang bila disampaikan kepada DJP."
      },
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 3 ayat (3) huruf a UU KUP — SPT Masa 20 hari", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-030", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Konsultan Pajak Bayu (izin B) mengetahui bahwa klien lamanya, CV Mutiara Laut, pernah tidak melaporkan penjualan Rp700.000.000. Setelah perikatan berakhir, Bayu meminta Rp150.000.000 kepada pemilik CV dengan ancaman akan menyerahkan dokumen klien kepada pihak lain bila uang tidak dibayar. Pemilik CV melaporkan Bayu kepada Kementerian Keuangan, dan perbuatan itu terbukti. Akibat bagi izin dan kompetensi Bayu menurut PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pembekuan izin paling lama 2 tahun; setelah itu Bayu dapat berpraktik kembali",
        B: "Pencabutan izin; Bayu dapat mengajukan izin baru setelah 5 tahun dengan SKK yang sama",
        C: "Pencabutan izin yang bersifat permanen; Bayu tidak dapat mengajukan izin baru dan SKK-nya ikut tidak berlaku",
        D: "Peringatan, karena perbuatan terjadi setelah perikatan berakhir sehingga Bayu bukan lagi kuasa CV Mutiara Laut"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Meminta uang dengan ancaman adalah pemerasan (Pasal 30 ayat (1) huruf e) yang dikenai pencabutan izin bersifat permanen (Pasal 30 ayat (4)): tidak dapat mengajukan izin baru dan SKK ikut tidak berlaku. Perbuatan itu sekaligus melanggar kerahasiaan klien yang tetap melekat setelah perikatan berakhir.",
        jejakHitung: [
          ["Perbuatan", "Meminta Rp150 juta dengan ancaman"],
          ["Larangan", "Pemerasan — Pasal 30 ayat (1) huruf e"],
          ["Sanksi", "Pasal 30 ayat (4): pencabutan permanen"],
          ["Akibat lanjutan", "Tidak dapat izin baru; SKK tidak berlaku"]
        ],
        mengapaSalah: {
          A: "Pembekuan paling lama 2 tahun untuk keterangan menyesatkan/rekayasa dan pelanggaran kode etik, bukan pemerasan.",
          B: "Sejak PMK 55/2026 pencabutan bersifat permanen dan SKK ikut gugur; tidak ada pengajuan ulang.",
          D: "Larangan pemerasan berlaku terhadap klien maupun bekas klien; berakhirnya perikatan tidak menghapus pelanggaran."
        },
        jebakan: "Mengira pencabutan masih membuka jalan izin baru setelah jangka waktu tertentu."
      },
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1) huruf e dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { pasal: "Kode Etik IKPI Bab II — kerahasiaan", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-031",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Dalam pemeriksaan PPh Badan Tahun Pajak 2025 PT Garuda Mebel, Konsultan Pajak Lukman (izin B) selaku kuasa menyerahkan kepada pemeriksa 'perjanjian sewa gudang' yang ia susun bersama klien pada Oktober 2026 dengan tanggal mundur Januari 2025, untuk mendukung biaya sewa Rp420.000.000 yang sebenarnya tidak pernah terjadi. Pemeriksa membuktikan dokumen itu dibuat belakangan. Tidak ada uang yang ditawarkan kepada petugas. Menurut PMK 55/2026, sanksi izin praktik yang dapat dikenakan kepada Lukman adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembekuan izin paling lama 2 tahun karena menerima permintaan klien untuk melakukan rekayasa", B: "Peringatan, karena dokumen dibuat atas permintaan klien dan tidak ada suap", C: "Pencabutan izin permanen karena setiap pelanggaran Pasal 30 dikenai pencabutan", D: "Pembekuan izin 3 bulan, sama dengan sanksi tidak bergabung dengan asosiasi" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Menyusun perjanjian bertanggal mundur atas permintaan klien untuk mendukung biaya fiktif adalah menerima permintaan klien untuk melakukan rekayasa (Pasal 30 ayat (1) huruf b PMK 55/2026), dengan sanksi pembekuan izin paling lama 2 tahun (Pasal 30 ayat (3)). Huruf a melarang keterangan yang menyesatkan klien, sehingga bukan dasar perbuatan ini. Di luar sanksi profesi, memperlihatkan dokumen palsu kepada pemeriksa dapat dipidana menurut Pasal 39 ayat (1) huruf f jo. Pasal 43 ayat (1) UU KUP; bila Lukman kemudian dipidana, izinnya dicabut (Pasal 43 ayat (3) PMK 55/2026).",
        jejakHitung: [
          ["Perbuatan", "Menyusun dan menyerahkan perjanjian bertanggal mundur untuk biaya fiktif Rp420.000.000 atas permintaan klien"],
          ["Larangan", "Pasal 30 ayat (1) huruf b: menerima permintaan rekayasa"],
          ["Sanksi profesi", "Pasal 30 ayat (3): pembekuan paling lama 2 tahun"],
          ["Risiko pidana", "Pasal 39 ayat (1) huruf f jo. Pasal 43 ayat (1) UU KUP; bila dipidana, izin dicabut (Pasal 43 ayat (3) PMK 55/2026)"]
        ],
        mengapaSalah: {
          B: "Permintaan klien tidak membenarkan rekayasa; justru menerima permintaan rekayasa itulah yang dilarang Pasal 30 ayat (1) huruf b.",
          C: "Pencabutan hanya untuk huruf c sampai f (imbalan kepada petugas, gratifikasi, pemerasan, rangkap jabatan) menurut Pasal 30 ayat (4); huruf a dan b dibekukan paling lama 2 tahun.",
          D: "Pembekuan selama 3 bulan adalah sanksi jasa di luar klasifikasi izin (Pasal 24 ayat (4)) dan tidak bergabung dengan asosiasi (Pasal 25 ayat (3)), bukan sanksi rekayasa."
        },
        jebakan: "Menyamaratakan sanksi enam larangan Pasal 30, atau menyebut rekayasa sebagai keterangan menyesatkan: huruf a hanya mengenai keterangan yang menyesatkan klien."
      },
      dasarHukum: [{ pasal: "Pasal 30 ayat (1) huruf b dan ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 39 ayat (1) huruf f jo. Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "E-032",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 1,
      stem: "Konsultan Pajak Melinda (izin A) diminta sahabatnya menjadi kuasa CV Berkah Abadi untuk menyampaikan SPT Masa PPN dan menghadiri pemeriksaan pada Oktober 2026. Ia menerima penugasan itu karena menganggap CV 'masih usaha kecil milik orang pribadi'. Selama penugasan tidak ada keterangan menyesatkan, rekayasa, atau imbalan kepada petugas, dan CV Berkah Abadi tidak dirugikan. Menurut PMK 55/2026, sanksi yang tepat atas perbuatan Melinda adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembekuan izin paling lama 2 tahun", B: "Pencabutan izin yang bersifat permanen", C: "Tidak ada sanksi karena CV dimiliki orang pribadi sehingga termasuk cakupan izin A", D: "Pembekuan izin selama 3 bulan, karena memberikan jasa di luar klasifikasi izin" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "CV (perseroan komanditer) adalah WP badan (Pasal 1 angka 3 UU KUP), sedangkan izin A hanya untuk orang pribadi (Pasal 4 ayat (2) PMK 55/2026). Melinda melanggar kewajiban memberikan jasa sesuai klasifikasi izin (Pasal 24 ayat (1) huruf a) dan dikenai pembekuan izin selama 3 bulan (Pasal 24 ayat (4)). Tidak adanya kerugian klien atau rekayasa tidak menurunkan sanksinya menjadi peringatan.",
        jejakHitung: [
          ["Klien", "CV = perseroan komanditer = WP badan"],
          ["Izin A", "Hanya orang pribadi (Pasal 4 ayat (2)) → di luar klasifikasi"],
          ["Kewajiban dilanggar", "Pasal 24 ayat (1) huruf a"],
          ["Sanksi", "Pasal 24 ayat (4): pembekuan izin selama 3 bulan"]
        ],
        mengapaSalah: {
          A: "Pembekuan paling lama 2 tahun untuk pelanggaran Kode Etik, independensi, keterangan menyesatkan klien, atau rekayasa (Pasal 24 ayat (5) dan (7), Pasal 30 ayat (3)); jasa di luar klasifikasi dibekukan tepat 3 bulan.",
          B: "Pencabutan untuk imbalan kepada petugas, gratifikasi, pemerasan, rangkap jabatan (Pasal 30 ayat (4)), pelanggaran setelah 3 kali pembekuan dalam 5 tahun (Pasal 41 ayat (4)), atau dipidana (Pasal 43 ayat (3)).",
          C: "Status pemilik tidak mengubah CV menjadi WP orang pribadi; CV adalah badan."
        },
        jebakan: "Menganggap CV milik keluarga sama dengan usaha orang pribadi, atau mengira jasa di luar klasifikasi hanya diberi peringatan (peringatan adalah sanksi pelanggaran Standar Praktik, Pasal 24 ayat (6))."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) huruf a dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 4 ayat (2) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 1 angka 3 UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "E-033", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 24 ayat (5) PMK 55/2026 (parafrase): Konsultan Pajak yang melanggar kode etik asosiasi dikenai sanksi pembekuan izin praktik paling lama 2 (dua) tahun.",
      stem: "Dewan Kehormatan IKPI memutuskan bahwa Konsultan Pajak Arief (izin C) melanggar Kode Etik karena berulang kali mencela rekan dan mengiklankan diri sebagai 'satu-satunya konsultan yang dijamin menang banding', lalu menjatuhkan sanksi organisasi berupa peringatan tertulis. Putusan itu diteruskan kepada Kementerian Keuangan. Arief berpendapat ia tidak boleh dihukum dua kali atas perbuatan yang sama. Berdasarkan kutipan, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Arief benar; karena sudah dijatuhi sanksi organisasi, izinnya tidak dapat lagi dikenai sanksi",
        B: "Selain sanksi organisasi dari asosiasi, izin praktik Arief dapat dibekukan paling lama 2 tahun",
        C: "Izin Arief otomatis dicabut permanen karena pelanggaran kode etik termasuk larangan suap",
        D: "Izin Arief dibekukan paling lama 3 bulan, sama dengan sanksi kewajiban keanggotaan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sanksi organisasi (keanggotaan) dan sanksi izin (Menteri) adalah dua jalur berbeda. Pasal 24 ayat (5) menjadikan pelanggaran kode etik asosiasi dasar pembekuan izin paling lama 2 tahun.",
        jejakHitung: [
          ["Jalur asosiasi", "Dewan Kehormatan → peringatan tertulis (sanksi organisasi)"],
          ["Jalur Menteri", "Pasal 24 ayat (5) → pembekuan izin ≤ 2 tahun"]
        ],
        mengapaSalah: {
          A: "Sanksi organisasi dan sanksi izin memiliki dasar dan lembaga berbeda; keduanya dapat dikenakan.",
          C: "Pelanggaran kode etik bukan suap atau pemerasan; sanksinya pembekuan, bukan pencabutan.",
          D: "Pembekuan 3 bulan khusus untuk tidak bergabung dengan asosiasi dalam 30 hari kerja."
        },
        jebakan: "Mengira sanksi asosiasi menutup kemungkinan sanksi atas izin."
      },
      dasarHukum: [
        { pasal: "Pasal 24 ayat (5) PMK 55/2026", berlakuSejak: "2026-08-24" },
        { pasal: "ART IKPI Pasal 35 ayat (1) — Dewan Kehormatan", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-034",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Riwayat sanksi izin Konsultan Pajak Samsul (izin B): pembekuan 6 bulan mulai Oktober 2027 karena pelanggaran kode etik asosiasi (mencela rekan di media sosial); pembekuan 1 tahun mulai Juni 2028 karena memberikan keterangan menyesatkan kepada klien; pembekuan 18 bulan mulai Maret 2030 karena menerima permintaan klien membuat kontrak bertanggal mundur. Pada November 2031, setelah pembekuan ketiga berakhir (September 2031), Dewan Kehormatan asosiasinya kembali memutuskan Samsul melanggar kode etik karena mempublikasikan data klien. Menurut PMK 55/2026, sanksi izin yang paling tepat atas pelanggaran November 2031 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pembekuan izin paling lama 2 tahun, sesuai Pasal 24 ayat (5) untuk pelanggaran kode etik", B: "Peringatan, karena pelanggaran publikasi tergolong ringan", C: "Pencabutan izin yang bersifat permanen, karena Samsul melanggar lagi setelah tiga kali dikenai pembekuan", D: "Pembekuan izin 3 bulan, lalu pencabutan bila Samsul tetap mengulangi pelanggaran setelahnya" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembekuan izin dikenakan paling banyak 3 kali dalam jangka waktu 5 tahun terakhir (Pasal 41 ayat (3) PMK 55/2026). Konsultan yang sudah 3 kali dibekukan dalam 5 tahun terakhir dan tetap melanggar ketentuan yang sanksinya pembekuan dikenai pencabutan izin (Pasal 41 ayat (4)). Samsul sudah dibekukan 3 kali dalam 49 bulan, dan pelanggaran Kode Etik November 2031 adalah pelanggaran yang bersanksi pembekuan (Pasal 24 ayat (5)), sehingga sanksinya pencabutan. Pencabutan itu permanen: Samsul tidak dapat mengajukan izin kembali dan SKK-nya tidak berlaku (Pasal 42).",
        jejakHitung: [
          ["Pembekuan ke-1 (Oktober 2027)", "6 bulan, Kode Etik (Pasal 24 ayat (5))"],
          ["Pembekuan ke-2 (Juni 2028)", "1 tahun, keterangan menyesatkan klien (Pasal 30 ayat (1) huruf a jo. ayat (3))"],
          ["Pembekuan ke-3 (Maret 2030 s.d. September 2031)", "18 bulan, menerima permintaan rekayasa (Pasal 30 ayat (1) huruf b jo. ayat (3))"],
          ["Rentang Oktober 2027 s.d. November 2031", "49 bulan, masih dalam 5 tahun terakhir"],
          ["Pelanggaran November 2031", "Kode Etik, bersanksi pembekuan → setelah 3 kali pembekuan menjadi pencabutan (Pasal 41 ayat (4))"]
        ],
        mengapaSalah: {
          A: "Pasal 24 ayat (5) memang mengatur pembekuan untuk pelanggaran Kode Etik, tetapi pembekuan paling banyak 3 kali dalam 5 tahun; pelanggaran berikutnya yang bersanksi pembekuan berubah menjadi pencabutan (Pasal 41 ayat (3)-(4)).",
          B: "Pelanggaran Kode Etik bersanksi pembekuan paling lama 2 tahun (Pasal 24 ayat (5)), bukan peringatan; ditambah riwayat 3 kali pembekuan, sanksinya pencabutan.",
          D: "Pembekuan 3 bulan yang diikuti pencabutan adalah pola sanksi tidak bergabung dengan asosiasi (Pasal 25 ayat (3)-(4)), bukan sanksi pelanggaran berulang setelah tiga kali pembekuan."
        },
        jebakan: "Menilai pelanggaran terakhir secara terpisah tanpa melihat riwayat pembekuan. Perhatikan juga syaratnya: yang berubah menjadi pencabutan hanya pelanggaran yang sanksinya pembekuan, dan ketiga pembekuan harus berada dalam 5 tahun terakhir."
      },
      dasarHukum: [{ pasal: "Pasal 41 ayat (3) dan (4) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 24 ayat (5) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 42 ayat (1) dan (2) PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-035", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Empat konsultan pajak berizin menerima tawaran jabatan pada 2027: (I) Rahmat diangkat sebagai komisaris independen sebuah BUMN; (II) Sinta menjadi dosen tetap di universitas swasta yang dikelola yayasan; (III) Yogi diangkat sebagai pegawai pemerintah dengan perjanjian kerja (PPPK) di badan pendapatan daerah; (IV) Lia menjadi komisaris perusahaan swasta terbuka yang bukan kliennya. Yang termasuk larangan rangkap jabatan menurut Pasal 30 ayat (1) huruf f PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "I dan III",
        B: "I saja",
        C: "I, III, dan IV",
        D: "II dan III"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Larangan rangkap jabatan mencakup jabatan pada instansi pemerintah, lembaga negara, lembaga lain berdasarkan UU, BUMN, dan BUMD. Komisaris BUMN (I) dan PPPK di pemerintah daerah (III) termasuk; dosen di perguruan tinggi swasta (II) dan komisaris perusahaan swasta (IV) tidak.",
        jejakHitung: [
          ["(I) Komisaris BUMN", "Jabatan pada BUMN → dilarang"],
          ["(II) Dosen PTS", "Bukan instansi pemerintah → tidak dilarang"],
          ["(III) PPPK pemda", "Pegawai instansi pemerintah → dilarang"],
          ["(IV) Komisaris swasta", "Bukan BUMN/BUMD → tidak dilarang"]
        ],
        mengapaSalah: {
          B: "PPPK adalah pegawai instansi pemerintah walau berstatus perjanjian kerja.",
          C: "Perusahaan swasta terbuka bukan BUMN atau BUMD.",
          D: "Universitas swasta yang dikelola yayasan bukan instansi pemerintah."
        },
        jebakan: "Menganggap PPPK bukan jabatan pemerintah karena bukan PNS."
      },
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1) huruf f PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-036",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "Unit pengawas Kementerian Keuangan mencatat empat temuan atas konsultan pajak pada 2027: (P) konsultan izin A menyusun dan menyampaikan SPT Tahunan sebuah PT perorangan; (Q) konsultan menyusun faktur pajak fiktif atas permintaan klien; (R) konsultan menawarkan 'uang rokok' Rp10.000.000 kepada juru sita agar penyitaan ditunda; (S) konsultan belum bergabung dengan asosiasi 30 hari kerja setelah izinnya terbit. Pemetaan sanksi izin yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "P peringatan; Q pencabutan permanen; R pembekuan ≤ 2 tahun; S pembekuan 3 bulan", B: "P pembekuan ≤ 2 tahun; Q pembekuan ≤ 2 tahun; R pencabutan permanen; S peringatan", C: "P tidak ada sanksi; Q pembekuan ≤ 2 tahun; R pencabutan permanen; S pembekuan 3 bulan", D: "P pembekuan 3 bulan; Q pembekuan ≤ 2 tahun; R pencabutan permanen; S pembekuan 3 bulan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "PT perorangan adalah perseroan terbatas, jadi WP badan (Pasal 1 angka 3 UU KUP), di luar izin A yang hanya untuk orang pribadi; jasa di luar klasifikasi dibekukan 3 bulan (Pasal 24 ayat (4) PMK 55/2026). Faktur fiktif atas permintaan klien adalah rekayasa (Pasal 30 ayat (1) huruf b), dibekukan paling lama 2 tahun (Pasal 30 ayat (3)). Menawarkan imbalan kepada juru sita, yang merupakan petugas pajak, dikenai pencabutan (Pasal 30 ayat (1) huruf c jo. ayat (4)). Tidak bergabung dengan asosiasi dalam 30 hari kerja dibekukan 3 bulan (Pasal 25 ayat (1) dan (3)).",
        jejakHitung: [
          ["P", "Jasa di luar klasifikasi (PT perorangan = badan) → pembekuan 3 bulan (Pasal 24 ayat (4))"],
          ["Q", "Rekayasa → pembekuan ≤ 2 tahun (Pasal 30 ayat (3))"],
          ["R", "Imbalan kepada petugas pajak → pencabutan permanen (Pasal 30 ayat (4))"],
          ["S", "Tidak gabung asosiasi → pembekuan 3 bulan (Pasal 25 ayat (3))"]
        ],
        mengapaSalah: {
          A: "P salah (bukan peringatan, melainkan pembekuan 3 bulan), dan sanksi Q dan R tertukar: rekayasa dibekukan, imbalan kepada petugas dicabut.",
          B: "P dan S salah: jasa di luar klasifikasi dibekukan tepat 3 bulan, bukan paling lama 2 tahun; tidak bergabung asosiasi dibekukan 3 bulan, bukan peringatan.",
          C: "PT perorangan tetap WP badan walau boleh memakai PPh final 0,5%; menanganinya dengan izin A adalah jasa di luar klasifikasi yang dibekukan 3 bulan."
        },
        jebakan: "PT perorangan sering dikira sama dengan WP orang pribadi, dan jasa di luar klasifikasi sering dikira hanya diberi peringatan; peringatan adalah sanksi pelanggaran Standar Praktik (Pasal 24 ayat (6))."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) huruf a dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 25 ayat (1) dan (3) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 30 ayat (1), (3), dan (4) PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    // ===================== E.5 Kuasa WP (PMK 44/2026) =====================
    {
      id: "E-037", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Bu Ratih, manajer pajak PT Anugerah Pangan, adalah pihak lain yang memiliki SKT dan ditunjuk sebagai kuasa perusahaan untuk pemeriksaan PPh Pasal 21 Tahun Pajak 2025 berdasarkan surat kuasa khusus yang berlaku 1 Februari 2027 – 31 Januari 2028. Pada Juni 2027 SKT Bu Ratih dibekukan karena ia terbukti memberikan keterangan menyesatkan dalam pemeriksaan wajib pajak lain. Pemeriksaan PT Anugerah Pangan masih berjalan. Akibat yang tepat menurut PMK 44/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Bu Ratih tetap dapat mewakili PT Anugerah Pangan sampai 31 Januari 2028 karena surat kuasa masih dalam masa berlaku",
        B: "Kuasa Bu Ratih berakhir sejak SKT-nya dibekukan; perusahaan perlu menunjuk kuasa lain dengan surat kuasa khusus baru bila ingin diwakili",
        C: "Kuasa tetap berlaku sampai 31 Januari 2028, tetapi Bu Ratih wajib didampingi konsultan pajak izin B selama SKT-nya dibekukan",
        D: "Kuasa berakhir dan pemeriksaan PT Anugerah Pangan otomatis dihentikan sampai SKT Bu Ratih diaktifkan kembali oleh DJP"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Pembekuan atau pencabutan SKT termasuk peristiwa yang mengakhiri kuasa, walaupun masa berlaku surat kuasa belum habis; akses Coretax sebagai kuasa ikut berakhir. Pemeriksaan tetap berjalan dan WP tetap bertanggung jawab atas kewajibannya.",
        jejakHitung: [
          ["Masa berlaku surat kuasa", "s.d. 31 Januari 2028"],
          ["Peristiwa Juni 2027", "SKT dibekukan"],
          ["Akibat", "Kuasa berakhir lebih awal; akses Coretax kuasa berakhir"],
          ["Tindak lanjut WP", "Surat kuasa khusus baru kepada pihak yang memenuhi syarat"]
        ],
        mengapaSalah: {
          A: "Masa berlaku bukan satu-satunya syarat; kuasa berakhir bila SKT dibekukan atau dicabut.",
          C: "Tidak ada mekanisme pendampingan yang menghidupkan kuasa yang telah berakhir.",
          D: "Berakhirnya kuasa tidak menghentikan pemeriksaan; kewajiban WP tetap berjalan."
        },
        jebakan: "Menganggap kuasa pasti hidup sampai tanggal akhir dalam surat kuasa."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 — berakhirnya kuasa", berlakuSejak: "2026-07-06" },
        { pasal: "PMK 55/2026 — larangan dan sanksi bagi pihak lain pemegang SKT", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-038", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "Ny. Wulan, WP orang pribadi pengusaha katering di Semarang, sedang dirawat inap pada November 2026 ketika menerima SP2DK dari KPP. Ia ingin menunjuk anggota keluarga sebagai kuasa tanpa harus melalui konsultan pajak atau pihak lain ber-SKT. Calon yang tersedia: keponakannya (anak kakak kandungnya), adik iparnya (adik kandung suaminya), sepupunya, dan pamannya (adik ayahnya). Menurut PMK 44/2026, yang dapat ditunjuk sebagai kuasa kategori keluarga adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Keponakan, karena keponakan adalah keluarga sedarah garis menyamping derajat kedua",
        B: "Paman, karena paman adalah keluarga sedarah satu tingkat di atas orang tua",
        C: "Adik ipar, karena adik ipar adalah keluarga semenda derajat kedua",
        D: "Sepupu, karena sepupu adalah keluarga sedarah sebaya yang dihitung derajat kedua"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Kategori keluarga mencakup suami/istri serta keluarga sedarah atau semenda sampai derajat kedua. Adik ipar (saudara kandung suami) adalah semenda derajat kedua; keponakan dan paman derajat ketiga; sepupu derajat keempat.",
        jejakHitung: [
          ["Keponakan", "Wulan → orang tua (1) → kakak (2) → keponakan (3)"],
          ["Paman", "Wulan → ayah (1) → kakek (2) → paman (3)"],
          ["Sepupu", "… → paman (3) → sepupu (4)"],
          ["Adik ipar", "Saudara kandung suami = semenda derajat 2 → boleh"]
        ],
        mengapaSalah: {
          A: "Keponakan adalah derajat ketiga (melalui orang tua dan kakak).",
          B: "Paman adalah derajat ketiga (melalui ayah dan kakek).",
          D: "Sepupu adalah derajat keempat; usia sebaya tidak menentukan derajat."
        },
        jebakan: "Menghitung derajat garis menyamping tanpa naik ke leluhur bersama."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 Pasal 2–3 — kuasa kategori keluarga", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-039", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "PMK 44/2026 Pasal 8 (parafrase): Surat kuasa khusus hanya dapat diberikan kepada satu orang kuasa, menyebutkan hak dan/atau kewajiban perpajakan tertentu yang dikuasakan, serta mencantumkan masa berlaku kuasa. Kuasa tidak dapat melimpahkan kuasa yang diterimanya kepada orang lain.",
      stem: "Pada 9 November 2026 PT Surya Baja menandatangani surat kuasa khusus kepada Konsultan Pajak Dewi (izin B) yang berbunyi: 'memberi kuasa untuk mengurus seluruh hak dan kewajiban perpajakan perusahaan, berlaku sampai dicabut secara tertulis'. Dewi akan memakainya untuk mengajukan keberatan atas SKPKB PPN Masa Maret 2026 dan menghadiri pemeriksaan PPh Badan Tahun Pajak 2025. Berdasarkan kutipan, penilaian yang paling tepat atas surat kuasa tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Belum memenuhi syarat: harus menyebut hak/kewajiban tertentu yang dikuasakan dan mencantumkan masa berlaku yang jelas, bukan 'sampai dicabut'",
        B: "Sudah memenuhi karena kuasa umum untuk seluruh urusan perpajakan lebih menjamin kepastian bagi Wajib Pajak dan petugas pajak",
        C: "Sudah memenuhi asalkan Dewi memegang izin C, karena kuasa untuk seluruh urusan hanya dapat diberikan kepada konsultan izin C",
        D: "Belum memenuhi hanya karena tidak mencantumkan masa berlaku yang jelas; frasa 'seluruh hak dan kewajiban perusahaan' tetap sah"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Surat kuasa khusus harus spesifik pada hak/kewajiban tertentu dan memuat masa berlaku. Rumusan 'seluruh hak dan kewajiban' dan 'sampai dicabut' melanggar dua unsur sekaligus. Contoh rumusan yang benar: 'mengajukan keberatan atas SKPKB PPN Masa Maret 2026', dengan tanggal awal dan akhir masa berlaku.",
        jejakHitung: [
          ["Unsur 1: satu kuasa", "Dewi seorang → terpenuhi"],
          ["Unsur 2: hak/kewajiban tertentu", "'Seluruh' → tidak terpenuhi"],
          ["Unsur 3: masa berlaku", "'Sampai dicabut' → tidak terpenuhi"]
        ],
        mengapaSalah: {
          B: "Kuasa umum bertentangan dengan sifat 'khusus' surat kuasa menurut Pasal 32 ayat (3) UU KUP dan PMK 44/2026.",
          C: "Tingkat izin tidak membuka kemungkinan kuasa umum; syarat isi surat kuasa berlaku untuk semua kuasa.",
          D: "Selain masa berlaku, surat kuasa harus menyebut hak/kewajiban tertentu yang dikuasakan."
        },
        jebakan: "Hanya memeriksa masa berlaku dan lupa unsur kekhususan."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 Pasal 8", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-040", topik: "E.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 32 ayat (3) UU KUP: Orang pribadi atau badan dapat menunjuk seorang kuasa dengan surat kuasa khusus untuk menjalankan hak dan memenuhi kewajiban sesuai dengan ketentuan peraturan perundang-undangan perpajakan. Pasal 4 ayat (3) UU KUP (parafrase): Dalam hal Wajib Pajak menunjuk seorang kuasa dengan surat kuasa khusus untuk mengisi dan menandatangani Surat Pemberitahuan, surat kuasa khusus tersebut harus dilampirkan pada Surat Pemberitahuan.",
      stem: "PT Lintas Nusantara memberi surat kuasa khusus tertanggal 2 November 2026 kepada Konsultan Pajak Andika (izin B) untuk 'mengisi dan menandatangani SPT Tahunan PPh Badan Tahun Pajak 2026', berlaku sampai 31 Maret 2027. Karena laporan keuangan audit terlambat, Andika baru menandatangani dan menyampaikan SPT itu melalui Coretax pada 26 April 2027 dengan melampirkan surat kuasa tersebut; tidak ada surat kuasa baru. Berdasarkan kutipan dan PMK 44/2026, penilaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "SPT sah karena surat kuasa yang ditandatangani direktur telah dilampirkan dan SPT disampaikan sebelum batas 30 April 2027",
        B: "SPT sah karena surat kuasa tetap berlaku sampai kewajiban yang dikuasakan selesai, seperti ketentuan peralihan PMK 44/2026",
        C: "SPT sah karena masa berlaku surat kuasa otomatis diperpanjang sampai batas penyampaian SPT Tahunan PPh Badan, yaitu 30 April 2027",
        D: "Andika tidak lagi berwenang sejak kuasanya berakhir 31 Maret 2027; SPT seharusnya ditandatangani pengurus atau kuasa dengan surat kuasa baru"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "lupa-pasal" },
      pembahasan: {
        inti: "Kuasa berakhir saat masa berlakunya habis (31 Maret 2027). Penandatanganan pada 26 April 2027 dilakukan oleh pihak yang tidak lagi berwenang, sehingga lampiran surat kuasa yang sudah kedaluwarsa tidak memenuhi Pasal 4 ayat (3). Batas SPT badan 30 April 2027 masih memberi waktu untuk surat kuasa baru atau tanda tangan pengurus.",
        jejakHitung: [
          ["Masa berlaku surat kuasa", "2 November 2026 – 31 Maret 2027"],
          ["Tanggal tanda tangan SPT", "26 April 2027 → di luar masa berlaku"],
          ["Batas SPT Tahunan Badan 2026", "30 April 2027 (4 bulan)"],
          ["Solusi", "Surat kuasa khusus baru atau ditandatangani pengurus sebelum 30 April 2027"]
        ],
        mengapaSalah: {
          A: "Melampirkan surat kuasa tidak cukup bila kuasanya sudah berakhir saat SPT ditandatangani.",
          B: "Ketentuan 'berlaku sampai selesai' hanya untuk surat kuasa yang dibuat sebelum 6 Juli 2026 (peralihan).",
          C: "Tidak ada perpanjangan otomatis; masa berlaku mengikat sesuai yang dicantumkan."
        },
        jebakan: "Memeriksa tenggat SPT tetapi lupa memeriksa masa berlaku kuasa pada tanggal tanda tangan."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (3) dan Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 44/2026 Pasal 8 — masa berlaku dan berakhirnya kuasa", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 3 ayat (3) huruf c UU KUP — SPT Tahunan badan 4 bulan", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-041", topik: "E.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Konsultan Pajak Bima (izin C) adalah kuasa PT Mitra Agro (PMA) dalam pemeriksaan PPh Badan Tahun Pajak 2025 berdasarkan surat kuasa khusus yang berlaku sampai 30 Juni 2027. Karena harus menghadiri sidang banding klien lain, Bima membuat 'surat kuasa substitusi' kepada stafnya, Nanda, yang belum berizin dan tidak memiliki SKT, untuk menghadiri pembahasan akhir hasil pemeriksaan pada Desember 2026. Penilaian yang tepat menurut PMK 44/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Sah, karena surat kuasa substitusi dibuat oleh kuasa yang masih berlaku dan hanya untuk satu agenda pembahasan akhir",
        B: "Tidak sah, karena kuasa tidak dapat melimpahkan kuasanya; bila ingin diwakili orang lain, PT Mitra Agro harus membuat surat kuasa khusus baru",
        C: "Sah, asalkan Nanda hadir bersama direktur PT Mitra Agro dan membawa salinan surat kuasa khusus atas nama Bima",
        D: "Tidak sah hanya karena Nanda belum memiliki SKT; jika Nanda memiliki SKT, substitusi dari Bima diperbolehkan untuk agenda tersebut"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "PMK 44/2026 melarang kuasa melimpahkan kuasanya (substitusi). Bila Bima berhalangan, WP sendiri yang harus menunjuk kuasa lain dengan surat kuasa khusus baru; untuk PMA, kuasa konsultan harus berizin C.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Keabsahan kuasa Bima tidak memberinya hak melimpahkan kepada orang lain.",
          C: "Kehadiran direktur tidak mengubah larangan substitusi; direktur dapat hadir sendiri sebagai pengurus.",
          D: "Larangan substitusi berlaku mutlak, terlepas dari kualifikasi penerima."
        },
        jebakan: "Mengira masalahnya hanya kualifikasi penerima, padahal pelimpahannya sendiri dilarang."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 Pasal 8 — larangan substitusi", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 4 PMK 55/2026 — izin C untuk PMA", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-042",
      topik: "E.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Pak Johan, staf akuntansi PT Sinar Dagang yang sudah 8 tahun bekerja dan memegang sertifikat brevet A dan B, ditugasi direktur menjadi kuasa perusahaan untuk mengajukan keberatan atas SKPKB PPh Pasal 23 pada Februari 2027. Pada masa PMK 229/2014, karyawan dengan brevet cukup ditunjuk dengan surat kuasa khusus disertai bukti kompetensi. Menurut PMK 44/2026 dan PMK 55/2026, syarat yang tepat bagi Pak Johan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Cukup surat kuasa khusus dan sertifikat brevet, karena karyawan dikecualikan dari kewajiban SKT seperti pada masa PMK 229/2014", B: "Pak Johan termasuk kategori keluarga perusahaan sehingga tidak memerlukan syarat kompetensi maupun SKT, cukup surat kuasa khusus", C: "Pak Johan termasuk pihak lain yang wajib memiliki SKT, dan ditunjuk dengan surat kuasa khusus yang memuat hak/kewajiban tertentu serta masa berlaku", D: "Pak Johan harus memegang izin konsultan pajak tingkat B karena perusahaan adalah WP badan, sehingga SKT saja tidak cukup untuk keberatan" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Karyawan bukan konsultan pajak dan bukan keluarga, sehingga hanya dapat menjadi kuasa sebagai Pihak Lain yang memiliki Surat Keterangan Terdaftar (Pasal 1 angka 4 dan Pasal 3 ayat (4) PMK 44/2026). Pemegang sertifikat brevet tanpa SKT hanya dapat ditunjuk sebagai kuasa sampai 31 Desember 2026 (Pasal 16 ayat (1)); keberatan Februari 2027 sudah di luar masa itu. Surat kuasa khusus tetap diperlukan dan paling sedikit memuat hak/kewajiban tertentu yang dikuasakan serta masa berlakunya (Pasal 7 ayat (3)).",
        jejakHitung: [
          ["Status Pak Johan", "Karyawan, bukan konsultan dan bukan keluarga → Pihak Lain"],
          ["Syarat kompetensi Pihak Lain", "Memiliki SKT (Pasal 3 ayat (4) PMK 44/2026)"],
          ["Peralihan pemegang brevet", "Hanya sampai 31 Desember 2026 (Pasal 16 ayat (1)); Februari 2027 sudah lewat"],
          ["Surat kuasa khusus", "Memuat hak/kewajiban yang dikuasakan dan masa berlaku (Pasal 7 ayat (3))"]
        ],
        mengapaSalah: {
          A: "Itu pola PMK 229/2014 yang dicabut Pasal 17 PMK 44/2026; sertifikat brevet tanpa SKT hanya cukup sampai 31 Desember 2026 (Pasal 16 ayat (1)).",
          B: "Kategori keluarga hanya suami, istri, dan keluarga sedarah/semenda sampai derajat kedua (Pasal 1 angka 5), bukan hubungan kerja.",
          D: "Karyawan tidak harus menjadi konsultan pajak; jalurnya adalah Pihak Lain ber-SKT."
        },
        jebakan: "Memakai syarat kuasa karyawan versi PMK 229/2014, atau mengira masa peralihan pemegang brevet berlaku tanpa batas (berakhir 31 Desember 2026)."
      },
      dasarHukum: [{ pasal: "Pasal 1 angka 4, Pasal 2 ayat (2), dan Pasal 3 ayat (4) PMK 44/2026: kategori kuasa dan SKT", berlakuSejak: "2026-07-06" }, { pasal: "Pasal 7 ayat (3) PMK 44/2026: isi surat kuasa khusus", berlakuSejak: "2026-07-06" }, { pasal: "Pasal 16 ayat (1) PMK 44/2026: pemegang brevet hanya sampai 31 Desember 2026", berlakuSejak: "2026-07-06" }, { pasal: "Pasal 1 angka 3 PMK 55/2026: Pihak Lain yang Bertindak sebagai Kuasa Wajib Pajak", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "E-043", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Konsultan Pajak Gita (izin B) adalah kuasa CV Rimba Jaya untuk proses keberatan berdasarkan surat kuasa khusus yang berlaku 1 Oktober 2026 – 30 September 2027. Selama masa itu, KKP tempat Gita bekerja menyusun daftar peristiwa yang dapat memengaruhi kuasa tersebut. Peristiwa yang TIDAK mengakhiri pemberian kuasa menurut PMK 44/2026 adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: {
        A: "Gita pindah domisili dari Bandung ke Surabaya dan tetap berpraktik dengan izin yang sama",
        B: "Izin praktik Gita dibekukan selama 6 bulan karena pelanggaran kode etik",
        C: "CV Rimba Jaya mencabut kuasa secara tertulis karena ingin menangani sendiri",
        D: "Gita dijatuhi pidana di bidang perpajakan dalam perkara klien lain"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kuasa berakhir karena masa berlaku habis, dicabut WP, izin/SKT dibekukan atau dicabut, atau kuasa dipidana. Pindah domisili tidak termasuk peristiwa tersebut.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pembekuan izin mengakhiri kuasa walau masa berlaku belum habis.",
          C: "Pencabutan oleh WP mengakhiri kuasa.",
          D: "Kuasa yang dipidana berakhir kuasanya, termasuk karena perkara klien lain."
        },
        jebakan: "Kata 'TIDAK' membalik pertanyaan."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 — berakhirnya kuasa", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "E-044", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Ny. Lestiani (WP orang pribadi, pemilik toko bangunan di Malang yang menyelenggarakan pembukuan) menerima SP2DK atas SPT Tahunan 2025. Pada Februari 2027 ia ingin diwakili dalam pertemuan klarifikasi di KPP karena harus menjalani operasi. Empat calon kuasa: (1) Raka, konsultan pajak izin A; (2) Bagus, menantunya (suami anak kandungnya), yang tidak memiliki SKT; (3) Mira, karyawan bagian keuangan tokonya yang memiliki SKT; (4) Hendrawan, sahabatnya yang berprofesi advokat dan berpengalaman beracara, tetapi tidak memiliki izin konsultan pajak maupun SKT dan tidak memiliki hubungan keluarga dengannya. Menurut Pasal 32 ayat (3) UU KUP, PMK 44/2026, dan cakupan izin dalam PMK 55/2026, calon yang TIDAK dapat ditunjuk sebagai kuasa adalah ...",
      kataKualifikasi: ["tidak"],
      opsi: {
        A: "(1) Raka, karena konsultan izin A tidak berwenang mendampingi klarifikasi SP2DK atas klien orang pribadi",
        B: "(2) Bagus, karena menantu bukan keluarga sedarah sehingga tidak termasuk keluarga yang dapat menjadi kuasa",
        C: "(3) Mira, karena karyawan hanya dapat menjadi kuasa bagi Wajib Pajak badan tempatnya bekerja",
        D: "(4) Hendrawan, karena advokat tanpa izin konsultan, tanpa SKT, dan bukan keluarga tidak masuk kategori kuasa"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Pasal 32 ayat (3) UU KUP membolehkan WP menunjuk kuasa dengan surat kuasa khusus; PMK 44/2026 membatasinya pada tiga kategori: konsultan pajak sesuai izin, pihak lain ber-SKT, dan keluarga sampai derajat kedua. Raka (izin A untuk WP orang pribadi), Bagus (semenda derajat pertama), dan Mira (ber-SKT) memenuhi; Hendrawan tidak masuk kategori mana pun.",
        jejakHitung: [
          ["(1) Raka", "Izin A mencakup WP orang pribadi dalam negeri → boleh"],
          ["(2) Bagus", "Menantu = semenda garis lurus derajat 1 → boleh tanpa SKT"],
          ["(3) Mira", "Pihak lain ber-SKT → boleh"],
          ["(4) Hendrawan", "Bukan konsultan, tanpa SKT, bukan keluarga → tidak boleh"]
        ],
        mengapaSalah: {
          A: "Izin A justru mencakup WP orang pribadi dalam negeri, termasuk pendampingan SP2DK dan pemeriksaan.",
          B: "Kategori keluarga mencakup keluarga semenda (karena perkawinan); menantu adalah semenda derajat pertama.",
          C: "Kategori pihak lain ber-SKT tidak terbatas pada karyawan WP badan; pemegang SKT dapat ditunjuk oleh WP orang pribadi."
        },
        jebakan: "Mengira profesi hukum otomatis berwenang menjadi kuasa pajak, atau menganggap keluarga semenda tidak termasuk."
      },
      dasarHukum: [
        { pasal: "Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 44/2026 Pasal 2–3 — kategori kuasa", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 4 PMK 55/2026 — cakupan izin A", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-045", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Pada 10 Mei 2026 CV Kencana memberi surat kuasa khusus kepada Konsultan Pajak Ani Rahayu (izin B) untuk mengajukan dan mengikuti proses keberatan atas SKPKB PPh Badan Tahun Pajak 2024. Surat kuasa dibuat menurut PMK 229/2014 tanpa mencantumkan masa berlaku. Surat keberatan diterima KPP pada 2 Juni 2026 dan penelitiannya masih berjalan pada November 2026; Direktur Jenderal Pajak wajib memberi keputusan paling lama 12 bulan sejak surat keberatan diterima. Menurut ketentuan peralihan PMK 44/2026 dan Pasal 26 ayat (1) UU KUP, status kuasa Ani adalah ...",
      kataKualifikasi: ["paling lama"],
      opsi: {
        A: "Berakhir pada 6 Juli 2026 karena PMK 229/2014 dicabut",
        B: "Tetap berlaku sampai proses keberatan yang dikuasakan selesai, yaitu saat keputusan keberatan terbit (paling lambat 2 Juni 2027)",
        C: "Berakhir pada 31 Desember 2026 bersamaan dengan akhir masa transisi PMK 55/2026",
        D: "Tetap berlaku hanya bila CV Kencana mengganti surat kuasa dengan yang mencantumkan masa berlaku paling lambat 30 hari kerja sejak 6 Juli 2026"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Surat kuasa khusus yang dibuat sebelum 6 Juli 2026 tetap berlaku sampai hak/kewajiban yang dikuasakan selesai. Yang dikuasakan adalah proses keberatan, yang selesai dengan keputusan keberatan paling lama 12 bulan sejak surat keberatan diterima (2 Juni 2027). Kewajiban mencantumkan masa berlaku hanya untuk surat kuasa yang dibuat sejak PMK 44/2026 berlaku.",
        jejakHitung: [
          ["Tanggal surat kuasa", "10 Mei 2026 (sebelum 6 Juli 2026)"],
          ["Ketentuan peralihan", "Berlaku sampai urusan yang dikuasakan selesai"],
          ["Batas keputusan keberatan", "2 Juni 2026 + 12 bulan = 2 Juni 2027 (Pasal 26 ayat (1))"],
          ["Status November 2026", "Keberatan masih diproses → kuasa tetap berlaku"]
        ],
        mengapaSalah: {
          A: "Pencabutan PMK 229/2014 tidak membatalkan surat kuasa yang sudah dibuat; ada ketentuan peralihan.",
          C: "Tanggal 31 Desember 2026 adalah batas ujian profesi dan transisi PMK 55/2026, bukan akhir surat kuasa lama.",
          D: "Tidak ada kewajiban mengganti surat kuasa lama dalam 30 hari kerja; 30 hari kerja adalah batas keanggotaan asosiasi bagi konsultan yang izinnya baru terbit."
        },
        jebakan: "Mencampur tanggal-tanggal transisi PMK 44/2026 dan PMK 55/2026."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 — ketentuan peralihan surat kuasa khusus", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 26 ayat (1) UU KUP — keputusan keberatan paling lama 12 bulan", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-046", topik: "E.5", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 3,
      kutipan: "Pasal 32 ayat (2) UU KUP: Wakil sebagaimana dimaksud pada ayat (1) bertanggung jawab secara pribadi dan/atau secara renteng atas pembayaran pajak yang terutang, kecuali apabila dapat membuktikan dan meyakinkan Direktur Jenderal Pajak bahwa mereka dalam kedudukannya benar-benar tidak mungkin untuk dibebani tanggung jawab atas pajak yang terutang tersebut.",
      stem: "PT Cemara Indah memiliki utang pajak berdasarkan SKPKB PPh Badan Rp1.800.000.000 yang tidak dilunasi sampai jatuh tempo. Selama pemeriksaan, perusahaan diwakili Konsultan Pajak Farhan (izin B) sebagai kuasa dengan surat kuasa khusus; direktur utamanya adalah Pak Gunawan. Juru sita berencana menagih secara renteng kepada pihak-pihak terkait. Berdasarkan kutipan dan PMK 44/2026, pihak yang dapat dimintai tanggung jawab pribadi/renteng atas pembayaran utang pajak tersebut adalah ...",
      kataKualifikasi: ["kecuali"],
      opsi: {
        A: "Farhan dan Pak Gunawan bersama-sama, karena keduanya mewakili perusahaan di hadapan DJP dan menandatangani dokumen perpajakan",
        B: "Farhan saja, karena ia yang menandatangani dokumen pemeriksaan sebagai kuasa sehingga menggantikan kedudukan pengurus",
        C: "Pak Gunawan selaku wakil (pengurus), kecuali ia dapat membuktikan tidak mungkin dibebani; Farhan sebagai kuasa tidak menanggung utang pajak",
        D: "Tidak ada pihak selain PT Cemara Indah, karena tanggung jawab renteng hanya berlaku bagi pemegang saham pengendali"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 32 ayat (2) membebankan tanggung jawab pribadi/renteng kepada wakil (pengurus badan), bukan kepada kuasa. PMK 44/2026 menegaskan WP tetap bertanggung jawab atas kewajibannya walau diwakili kuasa.",
        jejakHitung: [
          ["Pak Gunawan", "Wakil/pengurus (Pasal 32 ayat (1)) → dapat renteng"],
          ["Farhan", "Kuasa (Pasal 32 ayat (3)) → tidak menanggung utang pajak"],
          ["PT Cemara Indah", "WP → tetap penanggung utama"]
        ],
        mengapaSalah: {
          A: "Kuasa tidak sama dengan wakil; Pasal 32 ayat (2) hanya untuk wakil.",
          B: "Menandatangani dokumen sebagai kuasa tidak menimbulkan tanggung jawab atas pembayaran pajak.",
          D: "Pasal 32 ayat (2) secara tegas menyebut wakil (pengurus), bukan hanya pemegang saham."
        },
        jebakan: "Menyamakan 'wakil' (pengurus) dengan 'kuasa' (penerima surat kuasa)."
      },
      dasarHukum: [
        { pasal: "Pasal 32 ayat (1)–(3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 44/2026 — WP tetap bertanggung jawab", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    // ---- Vignette V-E-02: PT Mitra Sejahtera dan Konsultan Galih (soal E-047 s.d. E-049) ----
    {
      id: "E-047", topik: "E.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-E-02",
      stem: "Data untuk soal E-047 s.d. E-049: PT Mitra Sejahtera (WP badan dalam negeri, bukan PMA) menerima SKPKB PPN Masa Juni 2025 sebesar Rp860.000.000 yang dikirim 18 Desember 2026. Perusahaan menunjuk Konsultan Pajak Galih (izin B) dengan surat kuasa khusus untuk 'mengajukan dan mengikuti proses keberatan atas SKPKB PPN Masa Juni 2025', berlaku 21 Desember 2026 – 30 Juni 2027. Pada 15 Januari 2027, sebelum surat keberatan diajukan, izin praktik Galih dibekukan 6 bulan karena pelanggaran kode etik dalam perkara lain. Status kuasa Galih adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Berakhir sejak izinnya dibekukan, walaupun masa berlaku surat kuasa sampai 30 Juni 2027",
        B: "Tetap berlaku sampai 30 Juni 2027 karena masa berlaku surat kuasa belum habis dan WP tidak mencabutnya",
        C: "Ditangguhkan selama 6 bulan dan hidup kembali otomatis setelah pembekuan berakhir pada Juli 2027",
        D: "Tetap berlaku untuk keberatan karena pembekuan izin hanya melarang Galih menerima klien baru"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembekuan izin konsultan termasuk peristiwa yang mengakhiri kuasa menurut PMK 44/2026, terlepas dari sisa masa berlaku surat kuasa. Kuasa tidak hidup kembali setelah pembekuan berakhir; WP harus membuat surat kuasa baru. Akses Coretax Galih sebagai kuasa ikut berakhir.",
        jejakHitung: [
          ["Masa berlaku surat kuasa", "21 Desember 2026 – 30 Juni 2027"],
          ["Peristiwa 15 Januari 2027", "Izin dibekukan 6 bulan"],
          ["Akibat", "Kuasa berakhir 15 Januari 2027; tidak hidup kembali"]
        ],
        mengapaSalah: {
          B: "Masa berlaku bukan satu-satunya penentu; pembekuan izin mengakhiri kuasa.",
          C: "Tidak ada penangguhan; kuasa berakhir dan perlu surat kuasa baru.",
          D: "Pembekuan menghentikan seluruh kewenangan praktik, termasuk penugasan yang sedang berjalan."
        },
        jebakan: "Menganggap pembekuan hanya menghentikan sementara kuasa yang ada."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 — berakhirnya kuasa karena izin dibekukan/dicabut", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 24 ayat (5) PMK 55/2026 — pembekuan karena pelanggaran kode etik", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-048", topik: "E.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-E-02",
      stem: "Lanjutan data PT Mitra Sejahtera (badan dalam negeri, bukan PMA; SKPKB PPN Masa Juni 2025 Rp860 juta dikirim 18 Desember 2026; kuasa Galih berakhir 15 Januari 2027 karena izinnya dibekukan). Galih menawarkan agar rekannya di KKP yang sama, Sinta (izin A), melanjutkan penanganan keberatan dengan memakai surat kuasa yang sama melalui 'surat substitusi' yang ia tanda tangani. Penilaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dapat dilakukan karena Sinta berasal dari KKP yang sama dengan Galih dan surat kuasanya masih berlaku",
        B: "Dapat dilakukan asalkan surat substitusi ditandatangani sebelum tanggal pembekuan izin Galih pada 15 Januari 2027",
        C: "Tidak dapat semata-mata karena izin Sinta tingkat A; seandainya Sinta berizin B, substitusi dari Galih diperbolehkan",
        D: "Tidak dapat: substitusi dilarang dan izin A tidak mencakup WP badan; perusahaan harus membuat surat kuasa khusus baru"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Ada dua hambatan: (1) kuasa tidak dapat melimpahkan kuasanya (PMK 44/2026 Pasal 8), dan (2) izin A hanya untuk WP orang pribadi (Pasal 4 PMK 55/2026). Jalan keluarnya surat kuasa khusus baru dari WP kepada kuasa yang memenuhi syarat.",
        jejakHitung: [
          ["Hambatan 1", "Substitusi dilarang"],
          ["Hambatan 2", "Izin A tidak mencakup WP badan"],
          ["Solusi", "Surat kuasa khusus baru dari WP kepada konsultan izin B/C atau pihak lain ber-SKT"]
        ],
        mengapaSalah: {
          A: "Kesamaan KKP tidak memberi kewenangan; kuasa melekat pada orang yang ditunjuk.",
          B: "Substitusi dilarang kapan pun dibuat.",
          C: "Walau Sinta berizin B, substitusi tetap dilarang; WP harus menunjuknya langsung."
        },
        jebakan: "Melihat satu hambatan saja dan melewatkan hambatan kedua."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 Pasal 8 — larangan substitusi", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 4 PMK 55/2026 — cakupan izin A", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-049", topik: "E.5", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-E-02",
      stem: "Lanjutan data PT Mitra Sejahtera: SKPKB PPN Masa Juni 2025 sebesar Rp860.000.000 dikirim 18 Desember 2026; kuasa Galih berakhir 15 Januari 2027 karena izinnya dibekukan; perusahaan baru menandatangani surat kuasa khusus kepada konsultan izin C, Hendro, pada 1 Maret 2027. Direksi mengira batas pengajuan keberatan ikut bergeser karena pergantian kuasa. Menurut UU KUP, batas akhir pengajuan keberatan atas SKPKB tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "18 Januari 2027, mengikuti jatuh tempo pelunasan SKPKB satu bulan sejak dikirim",
        B: "18 Maret 2027, yaitu 3 bulan sejak SKPKB dikirim; pergantian kuasa tidak memperpanjangnya",
        C: "1 Juni 2027, karena jangka waktu 3 bulan dihitung ulang sejak kuasa baru ditunjuk",
        D: "18 Desember 2027, karena keberatan dapat diajukan dalam 12 bulan sejak SKPKB dikirim"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Keberatan diajukan paling lama 3 bulan sejak tanggal SKP dikirim (Pasal 25 ayat (3) UU KUP), kecuali keadaan di luar kekuasaan WP. Pergantian atau berakhirnya kuasa bukan keadaan semacam itu, sehingga batasnya tetap 18 Maret 2027; Hendro masih punya waktu sejak 1 Maret 2027.",
        jejakHitung: [
          ["Tanggal SKPKB dikirim", "18 Desember 2026"],
          ["Jangka waktu keberatan", "3 bulan → 18 Maret 2027"],
          ["Kuasa baru ditunjuk", "1 Maret 2027 → masih dalam jangka waktu"],
          ["Pengaruh pergantian kuasa", "Tidak menggeser batas"]
        ],
        mengapaSalah: {
          A: "Satu bulan adalah jatuh tempo pelunasan SKPKB (Pasal 9 ayat (3)), bukan batas keberatan.",
          C: "Jangka waktu dihitung sejak SKP dikirim, bukan sejak kuasa ditunjuk.",
          D: "12 bulan adalah jangka waktu DJP memutus keberatan (Pasal 26 ayat (1))."
        },
        jebakan: "Mengira urusan internal kuasa memengaruhi tenggat hukum WP."
      },
      dasarHukum: [
        { pasal: "Pasal 25 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 26 ayat (1) dan Pasal 9 ayat (3) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    // ===================== E.6 Standar praktik, SPM, Dewan Kehormatan, transisi =====================
    {
      id: "E-050", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Konsultan Pajak Rahma (izin B) langsung mengerjakan permintaan PT Delapan Warna setelah pertemuan lisan pada September 2026: menyusun SPT Masa PPN dan 'membereskan' SP2DK yang baru diterima. Tidak ada dokumen tertulis tentang lingkup, jangka waktu, tanggung jawab para pihak, dan imbalan. Tiga bulan kemudian klien menolak membayar penanganan SP2DK karena menganggapnya bukan bagian kesepakatan, sedangkan Rahma menganggapnya termasuk. Menurut Standar Profesi, langkah yang seharusnya dilakukan Rahma sebelum mulai bekerja adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Cukup mencatat kesepakatan lisan dalam kertas kerja internal karena hubungan dengan klien didasarkan pada kepercayaan",
        B: "Meminta klien menandatangani surat kuasa khusus untuk seluruh urusan perpajakan, karena surat kuasa menggantikan surat perikatan",
        C: "Membuat surat perikatan tertulis yang memuat ruang lingkup jasa, tanggung jawab para pihak, jangka waktu, dan imbalan, ditandatangani kedua pihak",
        D: "Menyelesaikan pekerjaan terlebih dahulu lalu menagih berdasarkan jam kerja aktual tanpa perjanjian"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Standar pelaksanaan penugasan mensyaratkan surat perikatan sebelum pekerjaan dimulai. Surat kuasa khusus mengatur hubungan kuasa dengan DJP, sedangkan surat perikatan mengatur hubungan kontraktual konsultan dengan klien; keduanya berbeda.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Catatan internal sepihak tidak mengikat klien dan tidak memenuhi standar.",
          B: "Surat kuasa khusus menurut PMK 44/2026 harus spesifik dan tidak menggantikan surat perikatan.",
          D: "Bekerja tanpa kesepakatan tertulis justru sumber sengketa yang ingin dicegah standar."
        },
        jebakan: "Menyamakan surat perikatan dengan surat kuasa khusus."
      },
      dasarHukum: [
        { pasal: "Standar Profesi IKPI — standar pelaksanaan penugasan (surat perikatan)", berlakuSejak: "2024-08-20" },
        { pasal: "PMK 44/2026 Pasal 8 — surat kuasa khusus", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 120, verifikasi: "◐",
      peringatan: "Isi minimum surat perikatan mengikuti Standar Profesi IKPI versi 2019 dan ringkasan sekunder; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-051",
      topik: "E.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Audit mutu internal KKP Harmoni (5 konsultan, 12 staf) pada November 2026 menemukan bahwa SPT Tahunan PPh Badan Tahun Pajak 2025 milik seorang klien disusun staf baru dan langsung disampaikan partner tanpa ditelaah. Akibatnya sisa kerugian fiskal Tahun Pajak 2019 ikut dikompensasikan, padahal batas kompensasi 5 tahun sudah lewat, dan klien kemudian menerima SKPKB. Unsur sistem pengendalian mutu yang paling jelas gagal dalam kasus ini adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Supervisi dan reviu hasil kerja sebelum disampaikan atas nama klien", B: "Penerimaan dan keberlanjutan hubungan dengan klien yang berisiko", C: "Independensi dan pengungkapan benturan kepentingan kepada klien", D: "Kebijakan publikasi dan pemasaran jasa kantor kepada publik" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kesalahan teknis yang lolos karena hasil kerja staf baru tidak ditelaah menunjukkan kegagalan supervisi dan reviu. Kerugian 2019 hanya dapat dikompensasikan sampai Tahun Pajak 2024 (Pasal 6 ayat (2) UU PPh).",
        jejakHitung: [
          ["Kerugian fiskal", "Tahun Pajak 2019"],
          ["Batas kompensasi", "5 tahun berturut-turut → 2020–2024"],
          ["SPT 2025", "Sisa rugi 2019 sudah tidak dapat dikompensasikan"],
          ["Akar masalah", "Tanpa reviu partner → unsur supervisi/reviu gagal"]
        ],
        mengapaSalah: {
          B: "Tidak ada masalah pada keputusan menerima klien; kesalahannya pada pelaksanaan pekerjaan.",
          C: "Tidak ada hubungan atau kepentingan yang mengganggu objektivitas.",
          D: "Kasus ini tidak berkaitan dengan publikasi."
        },
        jebakan: "Memilih unsur SPM yang umum tanpa mencocokkan dengan titik kegagalan nyata."
      },
      dasarHukum: [{ pasal: "Standar Profesi IKPI — sistem pengendalian mutu (supervisi dan reviu)", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 6 ayat (2) UU PPh — kompensasi kerugian 5 tahun", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: Pasal 6 ayat (2) UU PPh (kompensasi kerugian sampai 5 tahun) dan PMK 55/2026, yang hanya mewajibkan KKP memiliki sistem pengendalian mutu dan melaporkan perubahannya (Pasal 18 ayat (2) huruf d, Pasal 20 ayat (1) huruf c) tanpa merinci unsurnya. Belum pasti: rincian unsur SPM (supervisi dan reviu) menurut Standar Profesi IKPI 2024, yang belum tersedia di pustaka naskah."
    },
    {
      id: "E-052",
      topik: "E.6",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Seorang Wajib Pajak ingin mengadukan anggota IKPI, Konsultan Pajak Firman, karena Firman memasang iklan 'pasti menang banding' dan mencela konsultan sebelumnya di depan klien. Wajib Pajak bertanya ke mana pengaduan pelanggaran Kode Etik itu diajukan dan apa kemungkinan akibatnya bagi izin Firman. Jawaban yang paling tepat menurut tata organisasi IKPI setelah Kongres XII 2024 dan PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ke Pengadilan Pajak, karena perkaranya berkaitan dengan perpajakan dan klaim 'pasti menang banding'", B: "Ke KPP tempat Wajib Pajak terdaftar, yang akan langsung mencabut izin Firman tanpa melalui pemeriksaan asosiasi", C: "Ke unit pengawas Kementerian Keuangan, yang memeriksa dan memutus pelanggaran Kode Etik asosiasi menggantikan organ asosiasi sejak PMK 55/2026", D: "Ke Dewan Kehormatan IKPI, yang memeriksa dan memutus sanksi organisasi; pelanggaran kode etik juga dapat berujung pembekuan izin paling lama 2 tahun" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Penegakan Kode Etik IKPI dilakukan Dewan Kehormatan (ART Pasal 35 ayat (1)) melalui pengaduan, pemeriksaan, pembelaan, dan putusan sanksi organisasi. Secara terpisah, pelanggaran kode etik asosiasi menjadi dasar pembekuan izin paling lama 2 tahun (Pasal 24 ayat (5) PMK 55/2026). Teradu diberi kesempatan membela diri sebelum putusan dijatuhkan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Pengadilan Pajak memeriksa sengketa pajak antara WP dan DJP, bukan pelanggaran etika profesi.",
          B: "KPP tidak berwenang memutus pelanggaran Kode Etik maupun mencabut izin konsultan.",
          C: "Pengawasan Kemenkeu tidak menggantikan organ etik asosiasi dalam memutus pelanggaran Kode Etik."
        },
        jebakan: "Mencampur forum sengketa pajak dengan forum etika profesi."
      },
      dasarHukum: [{ pasal: "ART IKPI Pasal 35 ayat (1) — Dewan Kehormatan", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 24 ayat (5) PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 55/2026: pelanggaran Kode Etik dikenai pembekuan izin paling lama 2 tahun (Pasal 24 ayat (1) huruf b dan ayat (5)); asosiasi melaporkan daftar aduan pelanggaran Kode Etik beserta tindak lanjutnya (Pasal 33 ayat (2) huruf d). Direktur Jenderal juga memeriksa kepatuhan Kode Etik, termasuk pemeriksaan khusus atas informasi dugaan pelanggaran (Pasal 36 ayat (2), Pasal 37 ayat (3)). Belum pasti: Dewan Kehormatan dan prosedur pengaduannya menurut ART IKPI, yang belum ada di pustaka."
    },
    {
      id: "E-053", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Pada November 2026 tiga pihak bertanya tentang peralihan ke PMK 55/2026: (1) Hana, konsultan pajak dengan izin tingkat B yang terbit 2021, khawatir harus ikut UKP; (2) Joko, lulusan USKP tingkat A Periode II/2026 yang belum berizin, bertanya apakah sertifikatnya masih berguna; (3) pengurus sebuah asosiasi terdaftar yang belum menjadwalkan ujian profesi. Pernyataan yang tepat untuk ketiganya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Hana wajib lulus UKP paling lambat 31 Desember 2026; sertifikat Joko tidak berlaku lagi; asosiasi boleh menunda ujian profesi sampai 2027",
        B: "Izin Hana tetap berlaku tanpa UKP; sertifikat USKP Joko diakui sebagai SKK untuk jangka terbatas pada masa peralihan; asosiasi wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2026",
        C: "Izin Hana hanya berlaku 2 tahun lagi; sertifikat Joko berlaku seumur hidup; asosiasi wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2027",
        D: "Izin Hana tetap berlaku; Joko wajib mengulang UKP tingkat A sebelum dapat mengajukan izin; asosiasi wajib menyelenggarakan ujian profesi paling lambat 24 Agustus 2027"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Pasal 60 huruf a: izin praktik yang terbit sebelum PMK 55/2026 tetap berlaku. Pasal 60 huruf f: sertifikat USKP lama diakui sebagai SKK untuk jangka terbatas. Pasal 61: asosiasi wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2026.",
        jejakHitung: [
          ["(1) Hana", "Pasal 60 huruf a → izin tetap berlaku, tanpa UKP"],
          ["(2) Joko", "Pasal 60 huruf f → sertifikat = SKK, berjangka"],
          ["(3) Asosiasi", "Pasal 61 → ujian profesi ≤ 31 Desember 2026"]
        ],
        mengapaSalah: {
          A: "Pemegang izin aktif tidak perlu UKP, dan batas ujian profesi tidak dapat ditunda ke 2027.",
          C: "Batas 2 tahun berkaitan dengan pengakuan sertifikat lama sebagai SKK, bukan izin Hana; sertifikat Joko tidak berlaku seumur hidup.",
          D: "Joko tidak harus mengulang UKP selama sertifikatnya diakui sebagai SKK; batas ujian profesi bukan satu tahun sejak PMK berlaku."
        },
        jebakan: "Tertukar tiga tanggal: 24 Agustus 2026 (berlaku), 31 Desember 2026 (ujian profesi), 1 Januari 2027 (rezim penuh ◐, ketentuan peralihan belum dicek)."
      },
      dasarHukum: [
        { pasal: "Pasal 60 huruf a dan f PMK 55/2026", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 61 PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-054", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Rizky lulus UKP tingkat A pada Oktober 2026 dan heran karena tidak ada satu pun soal Kode Etik, padahal pada USKP lama Kode Etik adalah mata ujian tersendiri di tingkat A. Ia ingin tahu di mana etika profesi kini diuji sebelum ia dapat mengajukan izin praktik. Jawaban yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Kode Etik kini hanya diuji dalam UKP tingkat B dan C sebagai bagian materi KUP",
        B: "Kode Etik tidak lagi diuji; cukup menandatangani pakta integritas saat mengajukan permohonan izin praktik",
        C: "Kode Etik diuji dalam ujian profesi oleh asosiasi terdaftar, dan kelulusannya menjadi syarat izin praktik",
        D: "Kode Etik diuji BPPK dalam ujian tersendiri setelah SKK terbit, sebagai syarat izin praktik"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sejak PMK 55/2026, UKP (BPPK) menguji kompetensi teknis, sedangkan etika diuji dalam ujian profesi oleh asosiasi terdaftar. Kelulusan ujian profesi adalah syarat izin praktik di samping SKK. Ujian profesi mencakup standar etik, standar praktik, dan sistem pengendalian mutu.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kode Etik dikeluarkan dari semua tingkat UKP.",
          B: "Etika tetap diuji, melalui ujian profesi asosiasi.",
          D: "Penyelenggara ujian profesi adalah asosiasi, bukan BPPK."
        },
        jebakan: "Mengira materi yang keluar dari UKP berarti tidak diuji sama sekali."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — syarat lulus ujian profesi; Pasal 32 kewajiban asosiasi", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 61 PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 60, verifikasi: "✅"
    },
    {
      id: "E-055",
      topik: "E.6",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Konsultan Pajak Nino (izin A) memberi saran lisan kepada klien orang pribadi bahwa penghasilan sewa ruko Rp240.000.000 setahun dari PT Mitra Retail 'sudah final 10% karena dipotong penyewa, jadi cukup dilaporkan sebagai penghasilan final'. Saran itu tidak didokumentasikan: tanpa memo, tanpa salinan bukti potong, tanpa catatan dasar hukum. Ketika klien menerima SP2DK, Nino tidak dapat menunjukkan dasar sarannya. Unsur Standar Profesi yang paling jelas diabaikan Nino adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Standar pelaksanaan penugasan, khususnya dokumentasi saran dalam kertas kerja", B: "Standar publikasi, karena saran diberikan secara lisan kepada klien", C: "Larangan rangkap jabatan, karena saran diberikan di luar kantor KKP", D: "Standar umum independensi, karena klien adalah orang pribadi pemilik ruko" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Substansi sarannya dapat benar (sewa tanah/bangunan dikenai PPh final 10% Pasal 4 ayat (2) yang dipotong penyewa badan), tetapi standar pelaksanaan menuntut dokumentasi: bukti potong, analisis, dan dasar hukum dalam kertas kerja agar saran dapat dipertanggungjawabkan. Kertas kerja semestinya memuat data, analisis, dan dasar hukum atas saran.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Publikasi menyangkut promosi diri, bukan cara memberi saran.",
          C: "Rangkap jabatan menyangkut jabatan pada pemerintah/BUMN/BUMD.",
          D: "Tidak ada hubungan atau kepentingan yang mengancam independensi."
        },
        jebakan: "Menilai benar-salahnya substansi pajak, padahal yang ditanya standar praktiknya."
      },
      dasarHukum: [{ pasal: "Standar Profesi IKPI — standar pelaksanaan penugasan (dokumentasi/kertas kerja)", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 4 ayat (2) UU PPh — PPh final sewa tanah/bangunan", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 55/2026: Konsultan Pajak wajib mematuhi Standar Praktik yang ditetapkan asosiasi (Pasal 1 angka 13, Pasal 24 ayat (1) huruf c), dan larangan rangkap jabatan menyangkut lembaga pemerintahan, lembaga negara, BUMN/BUMD (Pasal 30 ayat (1) huruf f). Belum pasti: rincian standar pelaksanaan penugasan (dokumentasi saran dan kertas kerja) dalam Standar Profesi IKPI 2024, yang belum tersedia di pustaka naskah."
    },
    {
      id: "E-056",
      topik: "E.6",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 3,
      stem: "Dewan Kehormatan sebuah asosiasi memutuskan Konsultan Pajak Lestari (izin B) melanggar Kode Etik karena membocorkan data klien kepada pesaing klien itu, lalu menjatuhkan sanksi organisasi berupa pemberhentian sementara keanggotaan. Lestari berpendapat sanksi itu hanya urusan internal organisasi dan tidak berpengaruh pada izin praktiknya. Penilaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lestari benar, karena sanksi asosiasi dan izin praktik dari Menteri sama sekali tidak berhubungan satu sama lain", B: "Lestari keliru; pemberhentian sementara keanggotaan otomatis berarti pencabutan izin praktik secara permanen", C: "Lestari keliru; sanksi asosiasi menggantikan sanksi Menteri sehingga izinnya dibekukan selama masa pemberhentian sementara saja", D: "Lestari keliru; selain sanksi organisasi, pelanggaran kode etik dapat berujung pembekuan izin oleh Menteri paling lama 2 tahun" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Ada dua jalur. Sanksi organisasi (keanggotaan) dijatuhkan organ asosiasi berdasarkan Kode Etik yang ditetapkan asosiasi (Pasal 1 angka 12 PMK 55/2026). Sanksi atas izin diatur PMK 55/2026: Konsultan Pajak wajib mematuhi Kode Etik (Pasal 24 ayat (1) huruf b), dan pelanggarannya dikenai pembekuan Izin Konsultan Pajak paling lama 2 tahun (Pasal 24 ayat (5)). Pembekuan ditetapkan Direktur Jenderal atas kewenangan Menteri yang didelegasikan (Pasal 2 ayat (5) dan Pasal 39 ayat (2)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "PMK 55/2026 secara tegas mewajibkan kepatuhan pada Kode Etik asosiasi dan mengaitkan pelanggarannya dengan sanksi atas izin (Pasal 24 ayat (1) huruf b dan ayat (5)).",
          B: "Sanksi keanggotaan tidak otomatis mencabut izin. Pencabutan izin dikenakan antara lain atas pemberian imbalan kepada petugas pajak, gratifikasi, pemerasan, atau rangkap jabatan (Pasal 30 ayat (4)), atau bila tetap melanggar setelah dibekukan 3 kali dalam 5 tahun terakhir (Pasal 41 ayat (4)).",
          C: "Sanksi asosiasi tidak menggantikan sanksi atas izin; lamanya pembekuan izin ditentukan tersendiri, paling lama 2 tahun (Pasal 24 ayat (5))."
        },
        jebakan: "Menganggap sanksi organisasi sebagai pengganti sanksi izin. Bedakan juga pembekuan karena pelanggaran Kode Etik (paling lama 2 tahun) dari pembekuan tetap 3 bulan karena memberi jasa di luar klasifikasi izin (Pasal 24 ayat (4))."
      },
      dasarHukum: [{ pasal: "Pasal 24 ayat (1) huruf b dan ayat (5) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 39 ayat (2) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 30 ayat (4) dan Pasal 41 ayat (3) dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-057",
      topik: "E.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Putri lulus USKP tingkat A Periode II/2026 (ujian 11–13 Agustus 2026) dan menerima sertifikat elektronik pada September 2026. Ia bekerja di KKP sejak 2024 dan ingin mengajukan izin praktik tingkat A pada November 2026, ketika belum ada asosiasi yang menyelenggarakan ujian profesi. Menurut ketentuan peralihan PMK 55/2026, pernyataan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Putri wajib mengikuti UKP tingkat A karena sertifikat USKP tidak diakui lagi setelah PMK 55/2026 berlaku 24 Agustus 2026", B: "Sertifikat USKP-nya diperlakukan sebagai SKK untuk jangka terbatas dan dapat dipakai mengajukan izin selama ujian profesi belum ada", C: "Putri harus menunggu sampai 1 Januari 2027 karena seluruh permohonan izin ditangguhkan selama masa transisi PMK 55/2026", D: "Putri dapat langsung mengajukan izin tingkat C karena izin tidak harus berjenjang dan sertifikat USKP diakui" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pasal 60 huruf f PMK 55/2026: sertifikat konsultan pajak yang diterbitkan berdasarkan PMK 111/PMK.03/2014 tetap berlaku sebagai SKK paling lama 2 tahun sejak sertifikat diterbitkan dan dapat dipakai sebagai syarat permohonan izin sampai asosiasi menyelenggarakan ujian profesi. USKP oleh panitia lama tetap berjalan sampai 31 Desember 2026 (Pasal 60 huruf e), dan sertifikat Putri dari Periode II/2026 juga diterbitkan berdasarkan PMK 111/PMK.03/2014, sehingga dibaca termasuk dalam huruf f. Setelah asosiasi menyelenggarakan ujian profesi (paling lama 31 Desember 2026, Pasal 61 angka 1), pemegang sertifikat lama harus mengikuti ujian profesi sebagai syarat izin (Pasal 60 huruf g).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Sertifikat lama justru diakui sebagai SKK pada masa peralihan (Pasal 60 huruf f).",
          C: "Tidak ada penangguhan permohonan izin. Tanggal 31 Desember 2026 adalah batas akhir USKP oleh panitia lama (Pasal 60 huruf e) dan batas paling lama asosiasi menyelenggarakan ujian profesi (Pasal 61 angka 1), bukan masa penangguhan.",
          D: "SKK yang diunggah harus sesuai klasifikasi izin yang dimohonkan (Pasal 5 ayat (3) huruf b), dan izin C juga memerlukan pengalaman minimal 2 tahun dalam 3 tahun terakhir (Pasal 5 ayat (3) huruf e angka 2). Sertifikat tingkat A hanya mendukung izin A."
        },
        jebakan: "Mengira izin dapat dimohonkan pada tingkat mana pun, atau mengira pengakuan sertifikat lama berlaku tanpa batas; pengakuannya paling lama 2 tahun sejak sertifikat terbit dan berhenti dipakai tanpa ujian profesi begitu asosiasi menyelenggarakan ujian profesi."
      },
      dasarHukum: [{ pasal: "Pasal 60 huruf e, huruf f, dan huruf g PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 61 angka 1 PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 5 ayat (3) huruf b dan huruf e PMK 55/2026", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 55/2026: sertifikat lama berlaku sebagai SKK paling lama 2 tahun sejak terbit dan dapat dipakai sampai asosiasi menyelenggarakan ujian profesi (Pasal 60 huruf f); USKP panitia lama berjalan sampai 31 Desember 2026 (huruf e). Belum pasti: huruf f menyebut sertifikat yang 'telah diterbitkan' saat PMK berlaku (24 Agustus 2026), sedangkan sertifikat Putri terbit September 2026; penerapannya pada sertifikat yang terbit sesudah itu adalah tafsir atas huruf e dan f."
    },
    // ===================== Gaya ujian nyata (laporan peserta UKP Oktober 2026) =====================
    {
      id: "E-058",
      topik: "E.4",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Pada Oktober 2026 PT Kencana Logam (badan dalam negeri, bukan PMA) sedang menjalani pemeriksaan lengkap PPh Badan Tahun Pajak 2025. Pemeriksa mengoreksi biaya bunga Rp780.000.000 karena tidak ada perjanjian pinjaman. Direktur keuangan meminta Konsultan Pajak Raka Pratama (izin B), kuasa perusahaan dalam pemeriksaan itu, menyusun 'perjanjian pinjaman' dengan pemegang saham yang diberi tanggal mundur 2 Januari 2025. Raka menyanggupi, menerima uang muka imbalan jasa Rp25.000.000 sesuai surat perikatan, dan mulai menyiapkan draf perjanjian. Sebelum draf diserahkan kepada pemeriksa, staf KKP melaporkan hal itu kepada unit pengawas Kementerian Keuangan. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Perbuatan Raka sudah memenuhi larangan menerima permintaan rekayasa yang bertentangan dengan ketentuan (Pasal 30 ayat (1) huruf b PMK 55/2026), tetapi karena draf belum diserahkan kepada pemeriksa, izinnya hanya dapat dikenai peringatan berdasarkan Pasal 24 ayat (4)", B: "Perbuatan Raka sudah memenuhi larangan menerima permintaan rekayasa yang bertentangan dengan ketentuan (Pasal 30 ayat (1) huruf b PMK 55/2026), sehingga izinnya dapat dibekukan paling lama 2 tahun berdasarkan Pasal 30 ayat (3)", C: "Perbuatan Raka sudah memenuhi larangan menerima permintaan rekayasa yang bertentangan dengan ketentuan (Pasal 30 ayat (1) huruf b PMK 55/2026), sehingga izinnya dicabut secara permanen berdasarkan Pasal 30 ayat (4)", D: "Perbuatan Raka sudah memenuhi larangan menerima gratifikasi yang tidak wajar (Pasal 30 ayat (1) huruf d PMK 55/2026), sehingga izinnya dapat dibekukan paling lama 2 tahun berdasarkan Pasal 30 ayat (3)" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Larangan Pasal 30 ayat (1) huruf b dirumuskan sebagai menerima permintaan rekayasa; larangan itu sudah terpenuhi ketika Raka menyanggupi dan mulai menyiapkan dokumen bertanggal mundur, tanpa menunggu dokumen dipakai di depan pemeriksa. Sanksinya menurut Pasal 30 ayat (3) adalah pembekuan izin paling lama 2 tahun; pencabutan permanen dalam ayat (4) disediakan untuk imbalan kepada petugas pajak dan pemerasan.",
        jejakHitung: [
          ["Permintaan klien", "Perjanjian pinjaman bertanggal mundur untuk menopang biaya bunga Rp780.000.000 → rekayasa"],
          ["Tindakan Raka", "Menyanggupi dan menyiapkan draf → 'menerima permintaan rekayasa' (huruf b) sudah terjadi"],
          ["Uang muka Rp25.000.000", "Imbalan jasa menurut surat perikatan → bukan gratifikasi; tidak mengubah klasifikasi"],
          ["Sanksi", "Pasal 30 ayat (3): pembekuan paling lama 2 tahun, bukan pencabutan ayat (4)"]
        ],
        mengapaSalah: {
          A: "Larangan huruf b tidak mensyaratkan dokumen sudah diserahkan kepada pemeriksa; sanksi atas menerima permintaan rekayasa adalah pembekuan paling lama 2 tahun menurut Pasal 30 ayat (3), bukan peringatan.",
          C: "Pencabutan permanen Pasal 30 ayat (4) untuk menawarkan imbalan kepada petugas pajak dan pemerasan, bukan untuk rekayasa.",
          D: "Uang muka adalah imbalan jasa yang diperjanjikan dalam surat perikatan, bukan gratifikasi; inti pelanggarannya adalah menyanggupi rekayasa."
        },
        jebakan: "Keempat opsi hampir identik; yang membedakan hanya frasa sanksi atau huruf larangan, dan frasa 'draf belum diserahkan' menggoda untuk menurunkan sanksi."
      },
      dasarHukum: [{ pasal: "Pasal 30 ayat (1) huruf b dan ayat (3) PMK 55/2026 — rekayasa, pembekuan paling lama 2 tahun", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 30 ayat (4) PMK 55/2026 — pencabutan permanen (pembanding)", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "E-059", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Pada awal November 2026 pengurus sebuah asosiasi konsultan pajak terdaftar menyiapkan pengumuman di situs webnya untuk calon anggota yang baru lulus UKP Periode 1–8 (SKK terbit 19 November 2026) dan ingin segera mengajukan izin praktik. Empat staf menyusun draf kalimat inti pengumuman yang masing-masing hanya berbeda pada satu frasa. Menurut PMK 55/2026, draf yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Asosiasi terdaftar wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2026 dengan materi seluruh kelompok materi uji kompetensi sesuai tingkat yang dipilih; kelulusan ujian ini menjadi syarat izin praktik di samping SKK hasil uji kompetensi",
        B: "Asosiasi terdaftar wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2027 dengan materi etika dan standar praktik profesi; kelulusan ujian ini menjadi syarat izin praktik di samping SKK hasil uji kompetensi",
        C: "Asosiasi terdaftar wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2026 dengan materi etika dan standar praktik profesi; kelulusan ujian ini menggantikan SKK hasil uji kompetensi sebagai syarat izin praktik",
        D: "Asosiasi terdaftar wajib menyelenggarakan ujian profesi paling lambat 31 Desember 2026 dengan materi etika dan standar praktik profesi; kelulusan ujian ini menjadi syarat izin praktik di samping SKK hasil uji kompetensi"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 61 PMK 55/2026 mewajibkan asosiasi terdaftar menggelar ujian profesi paling lambat 31 Desember 2026. Ujian ini menguji etika dan standar praktik profesi (materi teknis perpajakan sudah diuji dalam UKP), dan kelulusannya merupakan syarat izin tersendiri di samping SKK.",
        jejakHitung: [
          ["Batas penyelenggaraan", "Pasal 61: paling lambat 31 Desember 2026"],
          ["Materi", "Etika dan standar praktik profesi, bukan materi teknis UKP"],
          ["Kedudukan", "Syarat izin kumulatif: SKK + lulus ujian profesi + syarat lain"]
        ],
        mengapaSalah: {
          A: "Materi teknis perpajakan per kelompok sudah diuji dalam UKP; ujian profesi menguji etika dan standar praktik.",
          B: "Batas penyelenggaraan menurut Pasal 61 adalah 31 Desember 2026, bukan 2027.",
          C: "SKK dan kelulusan ujian profesi adalah dua syarat kumulatif; yang satu tidak menggantikan yang lain."
        },
        jebakan: "Opsi hanya berbeda pada satu frasa (tahun, materi, atau 'di samping' vs 'menggantikan'); bandingkan frasa demi frasa, bukan kesan umum kalimat."
      },
      dasarHukum: [
        { pasal: "Pasal 61 PMK 55/2026 — batas penyelenggaraan ujian profesi", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 32 PMK 55/2026 — kewajiban asosiasi menyelenggarakan ujian profesi", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-060", topik: "E.5", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3,
      kutipan: "Pasal 25 ayat (2), (3), dan (3a) UU KUP (parafrase setia): Keberatan diajukan secara tertulis dalam bahasa Indonesia dengan mengemukakan jumlah pajak yang terutang, jumlah pajak yang dipotong atau dipungut, atau jumlah rugi menurut penghitungan Wajib Pajak dengan disertai alasan yang menjadi dasar penghitungan. Keberatan harus diajukan dalam jangka waktu 3 bulan sejak tanggal dikirim surat ketetapan pajak, kecuali Wajib Pajak dapat menunjukkan bahwa jangka waktu itu tidak dapat dipenuhi karena keadaan di luar kekuasaannya. Dalam hal Wajib Pajak mengajukan keberatan atas surat ketetapan pajak, Wajib Pajak wajib melunasi pajak yang masih harus dibayar paling sedikit sejumlah yang telah disetujui Wajib Pajak dalam pembahasan akhir hasil pemeriksaan, sebelum Surat Keberatan disampaikan.",
      stem: "CV Tunas Mandiri (WP badan dalam negeri, bukan PMA) menerima SKPKB PPh Badan Tahun Pajak 2024 yang dikirim pada 14 Oktober 2026 dengan jumlah pajak yang masih harus dibayar Rp1.120.000.000. Dalam pembahasan akhir hasil pemeriksaan, CV menyetujui sebagian koreksi sehingga jumlah pajak yang masih harus dibayar yang disetujuinya Rp180.000.000. Pada 1 November 2026 direktur menandatangani surat kuasa khusus kepada Konsultan Pajak Laras Wening (izin B) untuk mengajukan keberatan. Berdasarkan kutipan, PMK 44/2026, dan tata cara keberatan era Coretax, rangkaian langkah yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "(1) Memastikan surat kuasa khusus menyebut hak 'mengajukan keberatan atas SKPKB PPh Badan Tahun Pajak 2024' dan memuat masa berlaku; (2) CV melunasi paling sedikit Rp180.000.000 sebelum surat keberatan disampaikan; (3) menyusun satu surat keberatan berbahasa Indonesia yang memuat jumlah pajak menurut penghitungan CV beserta alasannya; (4) menyampaikannya melalui Portal Wajib Pajak (Coretax) dengan melampirkan surat kuasa khusus paling lambat 14 Januari 2027",
        B: "(1) Memastikan surat kuasa khusus menyebut hak 'mengajukan keberatan atas SKPKB PPh Badan Tahun Pajak 2024' dan memuat masa berlaku; (2) CV melunasi seluruh Rp1.120.000.000 sebelum surat keberatan disampaikan; (3) menyusun satu surat keberatan berbahasa Indonesia yang memuat jumlah pajak menurut penghitungan CV beserta alasannya; (4) menyampaikannya melalui Portal Wajib Pajak (Coretax) dengan melampirkan surat kuasa khusus paling lambat 14 Januari 2027",
        C: "(1) Memastikan surat kuasa khusus menyebut hak 'mengajukan keberatan atas SKPKB PPh Badan Tahun Pajak 2024' dan memuat masa berlaku; (2) CV melunasi paling sedikit Rp180.000.000 sebelum surat keberatan disampaikan; (3) menyusun satu surat keberatan berbahasa Indonesia yang memuat jumlah pajak menurut penghitungan CV beserta alasannya; (4) menyampaikannya melalui Portal Wajib Pajak (Coretax) dengan melampirkan surat kuasa khusus paling lambat 1 Februari 2027, yaitu 3 bulan sejak surat kuasa khusus ditandatangani",
        D: "(1) Memastikan surat kuasa khusus menyebut hak 'mengajukan keberatan atas SKPKB PPh Badan Tahun Pajak 2024' dan memuat masa berlaku; (2) CV melunasi paling sedikit 50% dari jumlah dalam SKPKB (Rp560.000.000) sebelum surat keberatan disampaikan; (3) menyusun satu surat keberatan berbahasa Indonesia yang memuat jumlah pajak menurut penghitungan CV beserta alasannya; (4) menyampaikannya melalui Portal Wajib Pajak (Coretax) dengan melampirkan surat kuasa khusus paling lambat 14 Januari 2027"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pasal 25 ayat (3a) UU KUP mewajibkan pelunasan paling sedikit jumlah yang disetujui dalam pembahasan akhir (Rp180.000.000) sebelum keberatan disampaikan, dan ayat (3) menghitung 3 bulan sejak SKP dikirim (14 Oktober 2026 → 14 Januari 2027). Karena ditandatangani kuasa, surat keberatan dilampiri surat kuasa khusus yang menurut PMK 44/2026 menyebut hak tertentu dan masa berlaku; penyampaian dilakukan secara elektronik melalui Portal Wajib Pajak (PMK 118/2024).",
        jejakHitung: [
          ["Pelunasan minimal", "Jumlah yang disetujui dalam pembahasan akhir = Rp180.000.000"],
          ["Bagian yang tidak disetujui", "Rp1.120.000.000 − Rp180.000.000 = Rp940.000.000 → tertangguh selama proses keberatan"],
          ["Batas pengajuan", "14 Oktober 2026 + 3 bulan = 14 Januari 2027"],
          ["Surat kuasa khusus", "Hak tertentu + masa berlaku; dilampirkan pada surat keberatan"]
        ],
        mengapaSalah: {
          B: "Pelunasan seluruh SKPKB tidak disyaratkan; yang wajib dilunasi sebelum keberatan hanya jumlah yang disetujui dalam pembahasan akhir.",
          C: "Jangka waktu 3 bulan dihitung sejak tanggal SKP dikirim, bukan sejak surat kuasa khusus ditandatangani; penunjukan kuasa tidak menggeser tenggat.",
          D: "Kewajiban membayar 50% berasal dari Pasal 36 ayat (4) UU Pengadilan Pajak untuk banding, bukan syarat keberatan."
        },
        jebakan: "Empat rangkaian langkah identik kecuali satu langkah (jumlah pelunasan atau titik awal tenggat); kuasa tidak mengubah syarat pelunasan maupun tenggat WP."
      },
      dasarHukum: [
        { pasal: "Pasal 25 ayat (2), (3), dan (3a) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 118/2024 — pengajuan keberatan secara elektronik melalui Portal Wajib Pajak", berlakuSejak: "2025-01-01" },
        { pasal: "PMK 44/2026 Pasal 8 — isi surat kuasa khusus", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-061", topik: "E.5", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 4 ayat (2) dan (3) UU KUP (parafrase setia): Surat Pemberitahuan Wajib Pajak badan harus ditandatangani oleh pengurus atau direksi. Dalam hal Wajib Pajak menunjuk seorang kuasa dengan surat kuasa khusus untuk mengisi dan menandatangani Surat Pemberitahuan, surat kuasa khusus tersebut harus dilampirkan pada Surat Pemberitahuan.",
      stem: "PT Bening Tirta (WP badan dalam negeri, bukan PMA, tahun buku Januari–Desember, wajib menyelenggarakan pembukuan, laporan keuangan 2026 tidak diaudit) menunjuk Konsultan Pajak Arman Siregar (izin B) untuk mengisi dan menandatangani SPT Tahunan PPh Badan Tahun Pajak 2026. Surat kuasa khusus ditandatangani direktur pada 5 Februari 2027 dengan masa berlaku 5 Februari–31 Mei 2027. Laporan keuangan final selesai 20 April 2027, PPh Pasal 29 sebesar Rp86.400.000 telah disetor 22 April 2027, dan perusahaan tidak menyampaikan pemberitahuan perpanjangan SPT. Berdasarkan kutipan, cara penyampaian SPT yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "SPT ditandatangani Arman secara elektronik dan disampaikan melalui Portal Wajib Pajak (Coretax) atas nama PT Bening Tirta, dilampiri surat kuasa khusus dan laporan keuangan, paling lambat 31 Maret 2027",
        B: "SPT ditandatangani Arman secara elektronik dan disampaikan melalui Portal Wajib Pajak (Coretax) atas nama PT Bening Tirta, dilampiri laporan keuangan tanpa surat kuasa khusus karena kartu izin praktik Arman sudah cukup, paling lambat 30 April 2027",
        C: "SPT ditandatangani Arman secara elektronik dan disampaikan melalui Portal Wajib Pajak (Coretax) atas nama PT Bening Tirta, dilampiri surat kuasa khusus dan laporan keuangan, paling lambat 30 April 2027",
        D: "SPT ditandatangani Arman secara elektronik dan disampaikan melalui Portal Wajib Pajak (Coretax) atas nama PT Bening Tirta, dilampiri surat kuasa khusus dan laporan keuangan, paling lambat 30 Juni 2027 karena penyampaian oleh kuasa otomatis memperpanjang batas waktu 2 bulan"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Pasal 4 ayat (3) UU KUP mengharuskan surat kuasa khusus dilampirkan bila SPT diisi dan ditandatangani kuasa, dan Pasal 4 ayat (4) mengharuskan laporan keuangan dilampirkan bagi WP yang wajib pembukuan. Batas SPT Tahunan PPh Badan adalah 4 bulan setelah akhir Tahun Pajak (Pasal 3 ayat (3) huruf c), yaitu 30 April 2027; penunjukan kuasa tidak memperpanjangnya.",
        jejakHitung: [
          ["Penanda tangan", "Kuasa dengan surat kuasa khusus; masa berlaku 5 Februari–31 Mei 2027 mencakup tanggal penyampaian"],
          ["Lampiran", "Surat kuasa khusus (Pasal 4 ayat (3)) + laporan keuangan (Pasal 4 ayat (4))"],
          ["Batas waktu", "Akhir Tahun Pajak 2026 + 4 bulan = 30 April 2027"],
          ["Perpanjangan", "Tidak ada pemberitahuan Pasal 3 ayat (4) → tetap 30 April 2027"]
        ],
        mengapaSalah: {
          A: "31 Maret adalah batas SPT Tahunan PPh orang pribadi (3 bulan); WP badan 4 bulan.",
          B: "Kartu izin praktik bukan pengganti surat kuasa khusus; Pasal 4 ayat (3) mewajibkan surat kuasa khusus dilampirkan.",
          D: "Perpanjangan paling lama 2 bulan hanya diperoleh melalui pemberitahuan Pasal 3 ayat (4), bukan otomatis karena memakai kuasa."
        },
        jebakan: "Opsi hanya berbeda pada satu frasa (tenggat orang pribadi vs badan, lampiran surat kuasa, atau 'perpanjangan otomatis'); data PPh Pasal 29 dan tanggal laporan keuangan tidak mengubah jawaban."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (2), (3), dan (4) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 3 ayat (3) huruf c dan ayat (4) UU KUP — batas SPT Tahunan badan dan perpanjangan", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 44/2026 Pasal 8 — surat kuasa khusus memuat hak tertentu dan masa berlaku", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-062", topik: "E.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ny. Kartika Sari, pemilik dua toko kue di Yogyakarta dengan peredaran bruto 2025 sebesar Rp3.900.000.000 yang memakai PPh final 0,5%, menerima SP2DK atas SPT Tahunan 2025 pada Februari 2027 dan harus menjalani perawatan di luar negeri selama tiga bulan. Ia ingin menunjuk anggota keluarga sebagai kuasa menurut PMK 44/2026. Calon yang bersedia (semuanya WNI dewasa, ber-NIK aktif, dan tidak pernah dipidana): (1) Bambang, suaminya, pegawai swasta, menikah dengan perjanjian pisah harta; (2) Ibu Sumarni, ibu kandungnya, 71 tahun; (3) Rina, adik kandungnya, pemegang sertifikat brevet A dan B; (4) Yoga, anak Rina, staf administrasi sebuah KKP yang tidak memiliki SKT; (5) Dewi, istri anak sulung Ny. Kartika; (6) Hendra, kakak kandung Bambang; (7) Pak Darto, adik ayah Ny. Kartika, pensiunan pegawai KPP. Berapa orang yang dapat ditunjuk melalui kategori keluarga, tanpa memerlukan izin konsultan pajak atau SKT?",
      kataKualifikasi: [],
      opsi: { A: "3 orang", B: "4 orang", C: "5 orang", D: "6 orang" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Kategori keluarga dalam PMK 44/2026 meliputi suami/istri serta keluarga sedarah atau semenda sampai derajat kedua. Yang memenuhi: Bambang (suami), Ibu Sumarni (sedarah derajat 1), Rina (sedarah derajat 2), Dewi (semenda derajat 1), dan Hendra (semenda derajat 2), yaitu 5 orang; Yoga dan Pak Darto berada pada derajat ketiga.",
        jejakHitung: [
          ["(1) Bambang — suami", "Termasuk; perjanjian pisah harta tidak menghapus status suami"],
          ["(2) Ibu kandung", "Sedarah garis lurus derajat 1 → termasuk"],
          ["(3) Adik kandung", "Sedarah ke samping derajat 2 → termasuk (brevet tidak relevan)"],
          ["(4) Keponakan (anak Rina)", "Kartika → orang tua → Rina → Yoga = derajat 3 → tidak; tanpa SKT juga bukan pihak lain"],
          ["(5) Menantu", "Semenda garis lurus derajat 1 → termasuk"],
          ["(6) Kakak kandung suami", "Semenda derajat 2 → termasuk"],
          ["(7) Paman (adik ayah)", "Kartika → ayah → kakek → paman = derajat 3 → tidak (riwayat pegawai KPP tidak relevan)"],
          ["Jumlah", "1 + 1 + 1 + 1 + 1 = 5 orang"]
        ],
        mengapaSalah: {
          A: "Keluarga semenda (menantu dan ipar) juga termasuk sampai derajat kedua; menghapusnya menyisakan 3 orang.",
          B: "Perjanjian pisah harta hanya mengatur harta dan cara pemenuhan kewajiban pajak suami-istri, tidak menghapus status suami sebagai keluarga.",
          D: "Keponakan adalah derajat ketiga (Kartika → orang tua → adik → keponakan), di luar batas derajat kedua; bekerja di KKP tanpa SKT juga tidak menjadikannya pihak lain."
        },
        jebakan: "Data omzet, PPh final, brevet, pekerjaan di KKP, dan riwayat pegawai KPP sengaja ditambahkan; yang menentukan hanya hubungan perkawinan dan derajat kekeluargaan."
      },
      dasarHukum: [
        { pasal: "PMK 44/2026 Pasal 2–3 — kategori kuasa keluarga sampai derajat kedua", berlakuSejak: "2026-07-06" },
        { pasal: "Pasal 32 ayat (3) UU KUP — penunjukan kuasa dengan surat kuasa khusus", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-063", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Laila Pohan lulus USKP tingkat B Periode II/2026 (sertifikat terbit September 2026), memiliki pengalaman kerja perpajakan 26 bulan dalam 3 tahun terakhir, dan karena belum ada asosiasi yang menyelenggarakan ujian profesi, mengajukan izin praktik tingkat B memakai sertifikat itu. Izin praktiknya terbit Kamis, 12 November 2026, untuk berpraktik di KKP Pohan & Rekan, Medan, yang menangani 18 klien badan dan 25 klien orang pribadi. Laila juga berencana mengikuti UKP tingkat C pada periode Desember 2026 dan menargetkan 30 SKP PPL pada 2027. Untuk soal ini, hari kerja adalah Senin–Jumat; hari tidak bekerja lain antara 12 November dan 31 Desember 2026 hanya Kamis, 24 Desember 2026 (cuti bersama) dan Jumat, 25 Desember 2026 (Natal), sedangkan Jumat, 1 Januari 2027 adalah libur Tahun Baru. Menurut PMK 55/2026, batas akhir Laila sudah harus menjadi anggota asosiasi konsultan pajak terdaftar adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Senin, 14 Desember 2026", B: "Rabu, 23 Desember 2026", C: "Kamis, 24 Desember 2026", D: "Senin, 28 Desember 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Konsultan wajib menjadi anggota asosiasi terdaftar paling lambat 30 hari kerja sejak izin terbit. Dihitung mulai hari kerja setelah izin terbit (Jumat, 13 November 2026) dan melompati 24–25 Desember, hari kerja ke-30 jatuh pada Senin, 28 Desember 2026. Jumlah klien, rencana UKP C, target PPL, dan libur 1 Januari 2027 tidak dipakai.",
        jejakHitung: [
          ["Titik awal", "Izin terbit Kamis, 12 November 2026; hari kerja ke-1 = Jumat, 13 November"],
          ["13 November", "1 hari (kumulatif 1)"],
          ["16 November – 18 Desember", "5 minggu × 5 hari = 25 hari (kumulatif 26)"],
          ["21–23 Desember", "3 hari (kumulatif 29)"],
          ["24–25 Desember", "Cuti bersama dan Natal → tidak dihitung"],
          ["Hari kerja ke-30", "Senin, 28 Desember 2026"]
        ],
        mengapaSalah: {
          A: "Menghitung 30 hari kalender (jatuh Sabtu, 12 Desember) lalu menggesernya ke hari kerja berikutnya; ketentuannya 30 hari kerja.",
          B: "Menghitung tanggal terbit izin (Kamis, 12 November) sebagai hari kerja pertama.",
          C: "Mengabaikan cuti bersama 24 Desember dan libur Natal 25 Desember yang dinyatakan dalam soal."
        },
        jebakan: "Data berlebih (jumlah klien, rencana UKP C, target PPL, libur Tahun Baru di luar rentang) mengalihkan perhatian; yang menentukan hanya tanggal izin, cara menghitung hari kerja, dan libur di dalam rentang hitung."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — kewajiban menjadi anggota asosiasi terdaftar paling lambat 30 hari kerja sejak izin terbit", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 60 huruf f PMK 55/2026 — sertifikat USKP lama dipakai untuk permohonan izin pada masa peralihan", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    // ===================== Perluasan 2026-10-28: E-064 s.d. E-089 =====================
    {
      id: "E-064",
      topik: "E.1",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 3,
      stem: "KKP Purnama Fiskal di Semarang (3 konsultan, 9 staf) mulai memakai layanan kecerdasan artifisial (AI) generatif publik yang gratis untuk mempercepat pekerjaan sejak Oktober 2026. Audit internal pada November 2026 menemukan bahwa staf bernama Dini mengunggah berkas buku besar 2025 milik PT Sumber Baja ke layanan itu untuk merangkum usulan koreksi fiskal. Berkas tersebut memuat NPWP 16 digit, nama direksi, dan rincian transaksi afiliasi Rp27.400.000.000; ketentuan layanan menyatakan data pengguna dapat dipakai untuk melatih model. Klien tidak pernah dimintai persetujuan. Partner berpendapat tidak ada masalah karena data 'tidak diserahkan kepada manusia' dan rangkuman AI selalu diperiksa ulang oleh konsultan sebelum dipakai. Penilaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Terdapat pelanggaran prinsip kerahasiaan karena informasi klien yang teridentifikasi diserahkan kepada pihak ketiga tanpa persetujuan; KKP perlu menghentikan praktik itu, menilai dampaknya, dan memberi tahu klien", B: "Tidak terdapat pelanggaran prinsip kerahasiaan karena data hanya diproses oleh mesin; KKP cukup menetapkan kebijakan penggunaan alat digital dalam sistem pengendalian mutunya tanpa perlu memberi tahu klien", C: "Terdapat pelanggaran prinsip kerahasiaan, tetapi karena rangkuman AI selalu diperiksa ulang oleh konsultan, KKP cukup menegur Dini secara tertulis tanpa menilai dampaknya dan tanpa memberi tahu klien", D: "Terdapat pelanggaran larangan memberikan keterangan menyesatkan dalam Pasal 30 ayat (1) huruf a PMK 55/2026, sehingga izin partner dibekukan paling lama 2 tahun dan Dini dilarang menangani klien itu" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Prinsip kerahasiaan melarang konsultan dan stafnya mengungkapkan informasi klien kepada pihak lain tanpa persetujuan klien, kecuali diwajibkan undang-undang. Mengunggah data teridentifikasi ke layanan publik yang berhak memakai data pengguna sama dengan menyerahkannya kepada pihak ketiga; KKP bertanggung jawab atas stafnya, sehingga perbaikannya mencakup penghentian, penilaian dampak, pemberitahuan kepada klien, dan kebijakan pengendalian mutu.",
        jejakHitung: [
          ["Informasi yang diunggah", "NPWP, nama direksi, transaksi afiliasi → teridentifikasi dan rahasia"],
          ["Penerima", "Penyedia layanan publik yang dapat memakai data → pihak ketiga"],
          ["Dasar pembukaan yang sah", "Persetujuan klien atau kewajiban undang-undang → tidak ada"],
          ["Langkah perbaikan", "Hentikan, nilai dampak, beri tahu klien, kebijakan SPM (mis. anonimisasi, alat yang disetujui)"]
        ],
        mengapaSalah: {
          B: "Pemrosesan oleh sistem milik pihak luar tetap merupakan pengungkapan kepada pihak ketiga; tanpa pemberitahuan, klien juga tidak dapat menilai risikonya.",
          C: "Pemeriksaan ulang menjaga ketepatan hasil, bukan kerahasiaan; pelanggaran sudah terjadi saat data diunggah.",
          D: "Tidak ada keterangan yang disampaikan kepada klien atau DJP; masalahnya adalah kerahasiaan dalam ranah Kode Etik dan pengendalian mutu, bukan larangan huruf a."
        },
        jebakan: "Argumen 'hasilnya diperiksa ulang' terdengar hati-hati, padahal yang dilanggar adalah kerahasiaan, bukan mutu hasil."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab II — kerahasiaan informasi klien", berlakuSejak: "2024-08-20" }, { pasal: "Standar Profesi IKPI — sistem pengendalian mutu KKP", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: opsi D sesuai Pasal 30 ayat (1) huruf a dan ayat (3) PMK 55/2026; PMK itu tidak memuat ketentuan kerahasiaan klien. Belum pasti: rumusan prinsip kerahasiaan dalam Kode Etik IKPI 2024 (naskahnya belum ada di pustaka), dan pedoman asosiasi tentang layanan AI publik belum ditemukan, sehingga penerapannya masih penafsiran prinsip umum."
    },
    {
      id: "E-065",
      topik: "E.1",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "Pasal 8 ayat (4) dan (5) UU KUP (parafrase setia): Walaupun telah dilakukan pemeriksaan, Wajib Pajak dengan kesadaran sendiri dapat mengungkapkan dalam laporan tersendiri tentang ketidakbenaran pengisian Surat Pemberitahuan yang telah disampaikan, sepanjang pemeriksa belum menyampaikan surat pemberitahuan hasil pemeriksaan, dan proses pemeriksaan tetap dilanjutkan. Kekurangan pajak yang timbul beserta sanksi bunga dengan tarif bunga per bulan yang ditetapkan Menteri Keuangan, paling lama 24 bulan, harus dilunasi sebelum laporan tersendiri itu disampaikan.",
      stem: "PT Wahana Kemasindo (WP badan dalam negeri, bukan PMA, peredaran bruto 2025 Rp86.000.000.000 sehingga tidak berhak atas fasilitas Pasal 31E) diperiksa lengkap atas PPh Badan Tahun Pajak 2025 sejak SP2 disampaikan 1 September 2026; Konsultan Pajak Gita Ramadhani (izin B) adalah kuasanya. Pada 26 Oktober 2026, saat menyiapkan dokumen untuk Pembahasan Temuan Sementara, Gita menemukan penjualan sisa produksi (scrap) Rp540.000.000 yang tidak dicatat dan belum diketahui pemeriksa; SPHP belum disampaikan. Direktur meminta Gita 'diam saja, siapa tahu tidak ketemu'. Berdasarkan kutipan, nasihat dan sikap Gita yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Menyarankan PT membetulkan SPT Tahunan PPh Badan 2025 berdasarkan Pasal 8 ayat (1) UU KUP karena SPHP belum disampaikan; bila direksi menolak, Gita tidak memberikan keterangan yang menyesatkan kepada pemeriksa dan dapat mengundurkan diri tanpa membuka informasi klien kepada pihak lain", B: "Menyarankan PT mengungkapkan ketidakbenaran dalam laporan tersendiri sepanjang SKP belum diterbitkan, dengan melunasi kekurangan pajak dan bunganya lebih dahulu sehingga pemeriksaan dihentikan; bila direksi menolak, Gita tidak memberikan keterangan yang menyesatkan kepada pemeriksa dan dapat mengundurkan diri tanpa membuka informasi klien kepada pihak lain", C: "Menyarankan PT mengungkapkan ketidakbenaran dalam laporan tersendiri sebelum SPHP disampaikan, dengan melunasi kekurangan pajak dan bunganya lebih dahulu, sedangkan pemeriksaan tetap dilanjutkan; bila direksi menolak, Gita tidak memberikan keterangan yang menyesatkan kepada pemeriksa dan dapat mengundurkan diri tanpa membuka informasi klien kepada pihak lain", D: "Mengikuti permintaan direktur, karena kuasa hanya wajib menjawab pertanyaan pemeriksa dan temuan yang belum ditanyakan sepenuhnya menjadi risiko Wajib Pajak" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setelah tindakan pemeriksaan dimulai, pembetulan Pasal 8 ayat (1) tertutup; yang masih terbuka adalah pengungkapan ketidakbenaran pengisian SPT Pasal 8 ayat (4) sepanjang SPHP belum disampaikan, dengan pelunasan kekurangan pajak dan bunga lebih dahulu dan pemeriksaan tetap berjalan. Integritas menuntut Gita menyarankan jalan sah itu; bila klien menolak, ia tidak boleh memberi keterangan menyesatkan dan dapat mundur tanpa membuka rahasia klien.",
        jejakHitung: [
          ["Status 26 Oktober 2026", "Pemeriksaan berjalan sejak 1 September 2026; SPHP belum disampaikan"],
          ["Pembetulan Pasal 8 ayat (1)", "Hanya sepanjang belum dilakukan tindakan pemeriksaan → tertutup"],
          ["Pengungkapan Pasal 8 ayat (4)", "Terbuka sampai SPHP disampaikan; pemeriksaan tetap dilanjutkan"],
          ["Kekurangan PPh = 22% × Rp540.000.000", "Rp118.800.000, ditambah bunga Pasal 8 ayat (5), dilunasi sebelum laporan"],
          ["Sikap profesi", "Tidak memberi keterangan menyesatkan (Pasal 30 ayat (1) huruf a PMK 55/2026); boleh mundur; rahasia tetap dijaga"]
        ],
        mengapaSalah: {
          A: "Pasal 8 ayat (1) hanya membolehkan pembetulan sepanjang DJP belum melakukan tindakan pemeriksaan; setelah SP2 1 September 2026 jalurnya adalah pengungkapan Pasal 8 ayat (4).",
          B: "Batas 'sepanjang SKP belum diterbitkan' adalah rumusan sebelum UU HPP, dan pengungkapan tidak menghentikan pemeriksaan.",
          D: "Integritas menuntut konsultan menyarankan jalan yang sah; bila pemeriksa meminta data penjualan, menyembunyikan penjualan scrap berarti memberi keterangan menyesatkan yang dilarang Pasal 30 ayat (1) huruf a PMK 55/2026."
        },
        jebakan: "Pembetulan dan pengungkapan ketidakbenaran sering tertukar; titik pembedanya adalah dimulainya tindakan pemeriksaan (pembetulan) dan disampaikannya SPHP (pengungkapan)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) UU KUP — pembetulan SPT sebelum tindakan pemeriksaan", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (4) UU KUP s.t.d.t.d. UU 7/2021 — pengungkapan ketidakbenaran sebelum SPHP disampaikan", berlakuSejak: "2021-10-29" }, { pasal: "Pasal 8 ayat (5) UU KUP (diubah UU 11/2020) — bunga pengungkapan, uplift 10%", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 30 ayat (1) huruf a PMK 55/2026 — larangan keterangan menyesatkan", berlakuSejak: "2026-08-24" }, { pasal: "Kode Etik IKPI Bab II — integritas dan kerahasiaan", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "E-066",
      topik: "E.1",
      tingkat: ["C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Konsultan Pajak Johan Saragih (izin C) sudah 5 tahun menjadi kuasa PT Deli Lestari, perusahaan PMA swasta (bukan BUMN/BUMD), untuk urusan PPh Badan dan dokumentasi transfer pricing. Pada Januari 2027 pemegang saham menawarinya jabatan komisaris independen PT Deli Lestari dengan honorarium Rp25.000.000 per bulan, sementara direksi tetap meminta KKP Johan mewakili perusahaan dalam pemeriksaan PPh Badan Tahun Pajak 2025 yang baru dimulai, termasuk menanggapi koreksi atas transaksi afiliasi yang dahulu disetujui dewan komisaris. Johan berpendapat tawaran itu aman karena jabatan komisaris di perusahaan swasta tidak termasuk larangan rangkap jabatan Pasal 30 ayat (1) huruf f PMK 55/2026. Penilaian yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Johan wajib menolak jabatan itu karena setiap jabatan komisaris, termasuk di perusahaan swasta, dilarang bagi konsultan pajak berdasarkan Pasal 30 ayat (1) huruf f PMK 55/2026", B: "Jabatan itu memang bukan larangan rangkap jabatan Pasal 30, tetapi menjadi komisaris klien yang sedang ia wakili mengancam objektivitas; Johan wajib menilai dan mengungkapkan ancaman itu", C: "Jabatan itu memang bukan larangan rangkap jabatan Pasal 30, sehingga Johan boleh menjalankan kedua peran tanpa pengungkapan apa pun karena kepentingannya searah dengan kepentingan klien", D: "Johan boleh menjalankan kedua peran asalkan honorarium komisaris dicantumkan dalam laporan tahunan konsultan sebagai bagian perincian jasa per klien kepada Menteri" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Larangan rangkap jabatan Pasal 30 ayat (1) huruf f PMK 55/2026 terbatas pada lembaga pemerintahan, lembaga negara, lembaga lain yang dibentuk dengan peraturan perundang-undangan, dan BUMN/BUMD, sehingga komisaris perusahaan swasta tidak dilarang. Namun, Pasal 24 ayat (1) huruf b dan d mewajibkan konsultan mematuhi Kode Etik dan menjaga independensi. Sebagai komisaris, Johan ikut mengawasi transaksi yang kini ia bela di hadapan pemeriksa; ancaman terhadap objektivitas itu wajib dinilai dan diungkapkan, dan bila tidak dapat dikendalikan salah satu peran dilepas.",
        jejakHitung: [
          ["Uji larangan Pasal 30 ayat (1) huruf f", "PT swasta, bukan BUMN/BUMD/lembaga pemerintahan → tidak termasuk larangan"],
          ["Uji kewajiban Pasal 24 ayat (1) huruf b dan d", "Komisaris klien sekaligus kuasa atas transaksi yang ia awasi → ancaman independensi dan objektivitas"],
          ["Tindakan", "Nilai ancaman, ungkapkan kepada klien dan KKP, pilih satu peran bila tak terkendali"]
        ],
        mengapaSalah: {
          A: "Huruf f hanya mencakup lembaga pemerintahan, lembaga negara, lembaga lain yang dibentuk dengan peraturan perundang-undangan, dan BUMN/BUMD; perusahaan swasta tidak termasuk.",
          C: "Tidak dilarang Pasal 30 tidak berarti bebas dari kewajiban menjaga independensi (Pasal 24 ayat (1) huruf d); 'kepentingan searah' justru mempertajam ancaman karena Johan menilai pekerjaannya sendiri.",
          D: "Laporan tahunan memuat daftar rincian jasa perpajakan (Pasal 28 ayat (2) huruf d); mencantumkan honorarium tidak menyelesaikan ancaman objektivitas."
        },
        jebakan: "Uji 'tidak dilarang Pasal 30' hanya langkah pertama; kewajiban Pasal 24 ayat (1) huruf b dan d (Kode Etik dan independensi) tetap harus diuji. Definisi benturan kepentingan Pasal 24 ayat (3) hanya menyangkut hubungan dengan pegawai DJP, sehingga masalah jabatan komisaris diuji dari sisi independensi."
      },
      dasarHukum: [{ pasal: "Pasal 30 ayat (1) huruf f PMK 55/2026 — larangan rangkap jabatan", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 24 ayat (1) huruf b dan d PMK 55/2026 — mematuhi Kode Etik dan menjaga independensi", berlakuSejak: "2026-08-24" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan: cakupan larangan rangkap jabatan Pasal 30 ayat (1) huruf f PMK 55/2026 (komisaris perusahaan swasta tidak termasuk) dan kewajiban mematuhi Kode Etik serta menjaga independensi (Pasal 24 ayat (1) huruf b dan d). Belum pasti: PMK tidak mendefinisikan independensi dan definisi benturan kepentingan ayat (3) hanya menyangkut pegawai DJP; kewajiban menilai dan mengungkapkan ancaman objektivitas (rumusan opsi B) masih bersumber dari Kode Etik IKPI 2019 dan ringkasan sekunder, teks 2024 belum dibaca."
    },
    {
      id: "E-067", topik: "E.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-E-04",
      stem: "Data untuk soal E-067 s.d. E-069: KKP Arunika & Rekan di Bandung dipimpin Sekar Arunika (izin C) bersama dua konsultan lain dan 7 staf. Kliennya antara lain PT Citra Tambang Tbk, yang sedang banding di Pengadilan Pajak atas SKPKB PPh Badan Tahun Pajak 2023 sebesar Rp12.500.000.000 terkait koreksi biaya reklamasi tambang, dan PT Nusa Kopi, bekas klien yang perikatannya berakhir Juni 2026 dan kini memiliki utang pajak Rp850.000.000 yang sedang ditagih. Pada November 2026 seorang wartawan portal berita bisnis meminta Sekar (1) mengomentari peluang PT Citra Tambang menang banding dan (2) membagikan 'kiat pasti menang sengketa pajak' untuk artikel yang akan memuat foto dan nama KKP. Tanggapan Sekar yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Mengomentari peluang PT Citra Tambang menang banding, karena sebagai perusahaan terbuka PT Citra Tambang wajib mengungkapkan sengketa pajak yang material dalam laporan keuangannya sehingga informasi itu bukan lagi rahasia",
        B: "Mengomentari peluang PT Citra Tambang tanpa menyebut nilai SKPKB, dan menyampaikan bahwa KKP Arunika 'selalu menang' agar publik percaya pada profesi konsultan pajak",
        C: "Menolak seluruh permintaan wawancara, karena konsultan pajak dilarang menulis atau berbicara di media tentang perpajakan dalam bentuk apa pun",
        D: "Menolak mengomentari perkara PT Citra Tambang tanpa persetujuan tertulis klien, dan bila bersedia diwawancarai hanya memberi penjelasan umum yang faktual tentang prosedur banding tanpa menonjolkan diri atau menjanjikan hasil"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penilaian peluang dan strategi perkara klien adalah informasi yang diperoleh dari penugasan sehingga tunduk pada kerahasiaan; tanpa persetujuan klien Sekar harus menolak. Penjelasan edukatif yang faktual tentang prosedur banding boleh diberikan, tetapi 'kiat pasti menang' adalah promosi yang menonjolkan diri sekaligus janji hasil yang dilarang.",
        jejakHitung: [
          ["Permintaan (1): peluang perkara klien", "Informasi penugasan → rahasia; perlu persetujuan klien"],
          ["Permintaan (2): 'kiat pasti menang'", "Menjanjikan hasil dan menonjolkan diri → dilarang (Bab III dan V)"],
          ["Yang boleh", "Penjelasan umum faktual tentang prosedur banding"]
        ],
        mengapaSalah: {
          A: "Kewajiban pengungkapan perusahaan terbuka berlaku bagi klien sebatas yang diwajibkan; itu tidak memberi izin kepada konsultan membuka analisis atau penilaian peluang perkara yang ia peroleh dari penugasan.",
          B: "Menghapus angka tidak menghilangkan pelanggaran kerahasiaan, dan klaim 'selalu menang' adalah promosi yang menonjolkan diri serta menjanjikan hasil.",
          C: "Tulisan atau penjelasan edukatif yang faktual tidak termasuk promosi yang dilarang; larangannya bersifat terbatas, bukan mutlak."
        },
        jebakan: "Status perusahaan terbuka memancing anggapan bahwa seluruh informasi sengketanya sudah publik."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab II — kerahasiaan informasi klien", berlakuSejak: "2024-08-20" },
        { pasal: "Kode Etik IKPI Bab III dan Bab V — larangan menjanjikan hasil dan publikasi yang menonjolkan diri", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Rincian Bab III dan Bab V mengikuti Kode Etik IKPI versi Kongres XI Malang 2019 dan pernyataan pengurus IKPI tentang publikasi; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-068", topik: "E.1", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3, kasusId: "V-E-04",
      kutipan: "Pasal 35 ayat (1)–(2) dan Pasal 41A UU KUP (parafrase setia): Atas permintaan tertulis Direktur Jenderal Pajak, konsultan pajak dan pihak ketiga lain yang mempunyai hubungan dengan Wajib Pajak yang dilakukan pemeriksaan, penagihan pajak, atau penyidikan wajib memberikan keterangan atau bukti yang diminta, dan kewajiban merahasiakan ditiadakan untuk keperluan itu. Setiap orang yang wajib memberikan keterangan atau bukti tersebut tetapi dengan sengaja tidak memberikannya, atau memberikan keterangan atau bukti yang tidak benar, dipidana dengan pidana penjara paling lama 1 tahun dan denda paling banyak Rp25.000.000.",
      stem: "Lanjutan data KKP Arunika & Rekan (Sekar, izin C; bekas klien PT Nusa Kopi, perikatan berakhir Juni 2026, utang pajak Rp850.000.000 sedang ditagih). Pada 9 November 2026 KKP menerima surat permintaan keterangan yang ditandatangani pejabat atas nama Direktur Jenderal Pajak untuk keperluan penagihan pajak PT Nusa Kopi, berisi permintaan daftar rekening bank dan aset tetap PT Nusa Kopi yang tercatat dalam kertas kerja KKP. Seorang partner mengusulkan agar KKP menolak karena Kode Etik mewajibkan kerahasiaan tanpa batas waktu, atau paling tidak hanya menyerahkan sebagian aset agar 'tidak merugikan bekas klien'. Berdasarkan kutipan, sikap KKP yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Memberikan keterangan sebatas yang diminta, karena untuk keperluan penagihan kewajiban merahasiakan ditiadakan; menolak dengan sengaja diancam pidana penjara paling lama 1 tahun dan denda paling banyak Rp25.000.000",
        B: "Menolak permintaan itu, karena kewajiban kerahasiaan dalam Kode Etik berlaku tanpa batas waktu dan mengesampingkan permintaan DJP; risiko terberatnya hanya sanksi organisasi dari asosiasi",
        C: "Memberikan sebagian data saja agar tidak merugikan bekas klien, karena undang-undang hanya mewajibkan keterangan yang tidak memberatkan Wajib Pajak dalam proses penagihan",
        D: "Memberikan keterangan sebatas yang diminta, karena untuk keperluan penagihan kerahasiaan ditiadakan; menolak dengan sengaja diancam pidana penjara paling lama 6 tahun dan denda paling banyak 4 kali utang pajak PT Nusa Kopi"
      },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Permintaan tertulis atas nama Direktur Jenderal Pajak untuk keperluan penagihan memenuhi Pasal 35 ayat (1), sehingga kewajiban merahasiakan ditiadakan dan KKP wajib menyerahkan keterangan sebatas yang diminta. Menolak dengan sengaja, atau menyerahkan sebagian sehingga keterangannya tidak benar, diancam Pasal 41A: penjara paling lama 1 tahun dan denda paling banyak Rp25.000.000.",
        jejakHitung: [
          ["Bentuk permintaan", "Tertulis, atas nama Direktur Jenderal Pajak → syarat Pasal 35 terpenuhi"],
          ["Keperluan", "Penagihan pajak → disebut dalam Pasal 35 ayat (1)"],
          ["Kewajiban merahasiakan", "Ditiadakan untuk keperluan itu"],
          ["Menolak atau memberi sebagian dengan sengaja", "Pasal 41A: penjara ≤ 1 tahun dan denda ≤ Rp25.000.000"],
          ["Batas penyerahan", "Sebatas yang diminta; informasi lain tetap rahasia"]
        ],
        mengapaSalah: {
          B: "Kode Etik justru mengecualikan kewajiban undang-undang; Pasal 35 ayat (2) meniadakan kewajiban merahasiakan, dan penolakan berisiko pidana Pasal 41A, bukan sekadar sanksi organisasi.",
          C: "Undang-undang mewajibkan keterangan yang diminta tanpa memilah yang menguntungkan Wajib Pajak; menyerahkan sebagian dengan sengaja dapat menjadi keterangan yang tidak benar.",
          D: "Penjara 6 tahun dan denda kelipatan pajak adalah ancaman Pasal 39 bagi Wajib Pajak; untuk pihak ketiga yang menolak permintaan Pasal 35 berlaku Pasal 41A."
        },
        jebakan: "Ancaman pidana Pasal 41A jauh lebih ringan daripada Pasal 39, tetapi tetap pidana; jangan tertukar dengan sanksi organisasi maupun rentang Pasal 39."
      },
      dasarHukum: [
        { pasal: "Pasal 35 ayat (1) dan (2) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 41A UU KUP — pidana bagi yang tidak memberi keterangan yang diminta berdasarkan Pasal 35", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-069",
      topik: "E.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-E-04",
      stem: "Lanjutan data KKP Arunika & Rekan (Sekar, izin C; klien PT Citra Tambang Tbk sedang banding atas SKPKB PPh Badan 2023 Rp12.500.000.000 terkait koreksi biaya reklamasi). Pada Desember 2026 PT Batu Hitam Persada, pesaing PT Citra Tambang di wilayah yang sama, meminta KKP menangani keberatannya atas SKPKB PPh Badan Tahun Pajak 2024 sebesar Rp4.300.000.000 dengan isu koreksi yang sama, yaitu biaya reklamasi. Kebijakan pengendalian mutu KKP mewajibkan cek benturan kepentingan sebelum surat perikatan ditandatangani. Hasil cek: kedua perusahaan tidak saling bersengketa, tidak ada transaksi di antara keduanya, dan kepentingan pajak keduanya searah (sama-sama ingin koreksi dibatalkan). Keputusan penerimaan klien yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Wajib menolak, karena KKP dilarang menangani dua perusahaan yang bersaing dalam industri dan wilayah yang sama, walaupun hasil cek tidak menemukan kepentingan yang berlawanan", B: "Dapat menerima setelah cek benturan kepentingan didokumentasikan, dengan pengungkapan yang wajar kepada kedua klien dan pengamanan agar data PT Citra Tambang tidak dipakai untuk klien baru", C: "Dapat menerima dan langsung memakai kertas kerja, bukti, dan data biaya reklamasi PT Citra Tambang sebagai pembanding dalam keberatan PT Batu Hitam Persada karena isu koreksinya sama", D: "Dapat menerima tanpa pengungkapan atau pengamanan apa pun, karena kepentingan pajak keduanya searah sehingga tidak mungkin timbul benturan kepentingan maupun masalah kerahasiaan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Menangani pesaing tidak otomatis dilarang; yang dilarang adalah mewakili kepentingan yang berlawanan atau membocorkan informasi klien. Karena hasil cek menunjukkan kepentingan searah, KKP dapat menerima dengan dokumentasi cek, pengungkapan yang wajar, dan pengamanan kerahasiaan agar data PT Citra Tambang tidak dipakai untuk klien baru. Pengungkapan kepada masing-masing klien dilakukan tanpa menyebut identitas klien lainnya.",
        jejakHitung: [
          ["Kebijakan SPM", "Penerimaan klien: cek benturan kepentingan sebelum surat perikatan"],
          ["Hasil cek", "Tidak bersengketa, tidak bertransaksi, kepentingan pajak searah → bukan kepentingan berlawanan"],
          ["Risiko yang tersisa", "Kerahasiaan data pesaing → perlu pengamanan (akses terpisah)"],
          ["Keputusan", "Terima dengan dokumentasi, pengungkapan, dan pengamanan kerahasiaan"]
        ],
        mengapaSalah: {
          A: "Kode Etik tidak melarang menangani perusahaan yang bersaing; larangannya menyangkut kepentingan yang berlawanan dan kebocoran informasi.",
          C: "Data dan kertas kerja PT Citra Tambang adalah informasi rahasia; memakainya untuk klien lain tanpa persetujuan melanggar kerahasiaan walaupun isunya sama.",
          D: "Kepentingan pajak yang searah tidak menghapus risiko kerahasiaan; SPM tetap menuntut dokumentasi dan pengamanan."
        },
        jebakan: "Kata 'pesaing' memancing jawaban 'wajib menolak', sedangkan kata 'searah' memancing jawaban 'tanpa pengamanan'; keduanya ekstrem."
      },
      dasarHukum: [{ pasal: "Standar Profesi IKPI — sistem pengendalian mutu: penerimaan dan keberlanjutan klien", berlakuSejak: "2024-08-20" }, { pasal: "Kode Etik IKPI Bab II — objektivitas dan kerahasiaan", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke PMK 55/2026: Konsultan Pajak wajib menjaga independensi dan bebas dari benturan kepentingan (Pasal 24 ayat (1) huruf d), tetapi ayat (3) hanya merumuskan benturan kepentingan sebagai hubungan dengan pegawai unit perpajakan; klien yang bersaing dan kerahasiaan data klien tidak diatur di sana. Belum pasti: aturan benturan kepentingan, kerahasiaan, dan SPM penerimaan klien dalam Kode Etik dan Standar Profesi IKPI 2024, yang belum tersedia di pustaka."
    },
    {
      id: "E-070", topik: "E.2", tingkat: ["A", "B", "C"], jenis: "etika", kesulitan: 2,
      stem: "CV Sinar Rejeki memutus perikatan dengan Konsultan Pajak Arif Budiman (izin B) pada 2 November 2026 karena tidak puas, dengan sisa imbalan jasa Rp45.000.000 yang belum dibayar. CV sedang menjalani pemeriksaan PPN Masa Januari–Desember 2025 dan harus menyerahkan dokumen kepada pemeriksa paling lambat 13 November 2026. Arif masih menyimpan dokumen asli milik CV, yaitu 214 lembar faktur pajak masukan cetak, rekening koran, dan kontrak penjualan, selain kertas kerja rekonsiliasi PPN yang ia susun sendiri. Arif berencana menahan seluruh dokumen sampai sisa imbalan dibayar lunas. Sikap yang paling sesuai dengan Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Arif boleh menahan seluruh dokumen, termasuk dokumen asli milik CV, sampai sisa imbalan Rp45.000.000 dibayar lunas, karena haknya atas imbalan dijamin surat perikatan",
        B: "Arif wajib menyerahkan seluruh dokumen, termasuk kertas kerja yang ia susun sendiri, kepada CV dan konsultan penggantinya tanpa syarat apa pun dan tanpa menagih sisa imbalan",
        C: "Arif wajib mengembalikan dokumen asli milik CV tanpa menunggu pelunasan; kertas kerja yang ia susun tetap menjadi dokumentasi KKP, dan tagihan Rp45.000.000 ditempuh melalui jalur perdata",
        D: "Arif wajib mengembalikan dokumen asli milik CV hanya setelah CV membayar paling sedikit 50% dari sisa imbalan Rp45.000.000, sebagai jalan tengah yang adil bagi kedua pihak"
      },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Dokumen asli adalah milik klien dan dibutuhkan untuk memenuhi kewajiban perpajakannya; menahannya sebagai jaminan pembayaran merugikan klien dan bertentangan dengan kewajiban konsultan terhadap klien. Kertas kerja yang disusun konsultan adalah dokumentasi penugasan miliknya, sedangkan sengketa imbalan diselesaikan melalui jalur perdata.",
        jejakHitung: [
          ["Dokumen asli (faktur, rekening koran, kontrak)", "Milik klien → kembalikan"],
          ["Kertas kerja rekonsiliasi", "Dokumentasi penugasan konsultan → disimpan KKP"],
          ["Sisa imbalan Rp45.000.000", "Hak tagih tetap ada, ditempuh terpisah (perdata)"],
          ["Tenggat pemeriksaan 13 November 2026", "Penahanan dokumen akan merugikan klien"]
        ],
        mengapaSalah: {
          A: "Hak atas imbalan tidak memberi hak menahan dokumen milik klien yang diperlukan untuk kewajiban perpajakannya.",
          B: "Kertas kerja adalah dokumentasi penugasan milik konsultan (standar pelaksanaan penugasan), bukan dokumen milik klien.",
          D: "Mensyaratkan pembayaran sebagian tetap menjadikan dokumen klien sebagai jaminan; tidak ada dasar 'jalan tengah' 50%."
        },
        jebakan: "Bedakan dokumen milik klien dan kertas kerja milik konsultan; perlakuannya berlawanan."
      },
      dasarHukum: [
        { pasal: "Kode Etik IKPI Bab III — hubungan dengan klien", berlakuSejak: "2024-08-20" },
        { pasal: "Standar Profesi IKPI — standar pelaksanaan penugasan (dokumentasi dan kertas kerja)", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Kode Etik IKPI 2024 belum dibaca langsung dan tidak ditemukan pasal yang secara eksplisit mengatur penahanan dokumen klien; kunci diturunkan dari kewajiban terhadap klien dan standar dokumentasi versi 2019."
    },
    {
      id: "E-071",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 2,
      stem: "Direktur PT Kencana Furnitur, klien KKP Prima Pajak, diam-diam meminta Konsultan Pajak Laila (izin B, dari KKP lain) memberi 'pendapat kedua' atas rencana KKP Prima Pajak untuk tidak mengajukan keberatan atas SKPKB PPN Masa Agustus 2025 sebesar Rp310.000.000 yang dikirim 6 Oktober 2026. Direktur tidak ingin KKP Prima Pajak mengetahuinya, menyerahkan seluruh dokumen pemeriksaan kepada Laila, dan menawarkan perikatan penuh bila pendapat Laila berbeda. Setelah menelaah, Laila menilai ada dasar keberatan yang kuat atas koreksi Rp180.000.000. Sikap Laila yang paling sesuai dengan Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Memberi pendapat tertulis yang objektif berdasarkan dokumen yang diterima beserta batasannya, tidak mencela KKP Prima Pajak, dan menerima perikatan penuh hanya setelah klien mengakhiri perikatan lama serta Laila memberitahukannya kepada KKP Prima Pajak", B: "Menolak memberi pendapat apa pun, karena konsultan dilarang menelaah atau menilai pekerjaan rekan seprofesi dalam keadaan apa pun", C: "Memberi pendapat yang menegaskan bahwa KKP Prima Pajak lalai dan tidak kompeten agar direktur yakin berpindah, lalu langsung menangani keberatan", D: "Memberi pendapat secara objektif, lalu langsung menyusun dan menyampaikan surat keberatan atas nama PT Kencana Furnitur sebelum perikatan dengan KKP Prima Pajak diakhiri, karena tenggat keberatan lebih mendesak daripada etika antarrekan" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Memberi pendapat kedua tidak dilarang selama objektif, menyebut batasannya, dan tidak mencela rekan. Perpindahan penugasan tetap mengikuti etika antarrekan: perikatan lama diakhiri klien dan rekan sebelumnya diberi tahu; tenggat keberatan (3 bulan sejak 6 Oktober 2026, yaitu 6 Januari 2027) masih cukup untuk itu.",
        jejakHitung: [
          ["Pendapat kedua", "Boleh: objektif, tertulis, sebut batasan data"],
          ["Larangan antarrekan", "Tidak mencela, tidak merebut klien yang masih terikat"],
          ["Tenggat keberatan", "6 Oktober 2026 + 3 bulan = 6 Januari 2027 → masih ada waktu"],
          ["Urutan perpindahan", "Klien mengakhiri perikatan lama → pemberitahuan kepada rekan → surat kuasa baru"]
        ],
        mengapaSalah: {
          B: "Kode Etik tidak melarang pendapat kedua; yang dilarang adalah mencela rekan dan merebut kliennya.",
          C: "Mencela rekan seprofesi dan memanfaatkannya untuk mengambil klien melanggar Bab IV Kode Etik.",
          D: "Selama perikatan lama belum diakhiri, menangani langsung berarti merebut klien; tenggat yang masih longgar tidak membenarkannya, dan Laila juga belum memegang surat kuasa khusus."
        },
        jebakan: "Data tenggat sengaja dimunculkan untuk membenarkan jalan pintas; hitung dulu, ternyata waktunya masih cukup."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab IV — hubungan dengan rekan seprofesi", berlakuSejak: "2024-08-20" }, { pasal: "Pasal 25 ayat (3) UU KUP — keberatan 3 bulan sejak SKP dikirim", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Pasal 25 ayat (3) UU KUP (keberatan 3 bulan sejak tanggal dikirim surat ketetapan) sudah dicocokkan ke naskah. PMK 55/2026 tidak mengatur hubungan antarrekan; aturan pendapat kedua, larangan mencela, dan pemberitahuan kepada rekan sebelumnya mengikuti Kode Etik IKPI versi 2019 dan ringkasan sekunder, karena teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-072", topik: "E.2", tingkat: ["B", "C"], jenis: "etika", kesulitan: 2,
      stem: "Ibu Ratna, manajer keuangan CV Bumi Pertiwi, menyusun sendiri SPT Tahunan PPh Badan Tahun Pajak 2026. Pada 27 April 2027 ia meminta Konsultan Pajak Danu (izin B) menandatanganinya sebagai kuasa 'sekadar formalitas' agar terlihat disusun konsultan, dengan imbalan Rp7.500.000 dan surat kuasa khusus yang sudah disiapkan dan ditandatangani direktur. Danu belum pernah melihat laporan keuangan maupun rekonsiliasi fiskal CV, sedangkan tenggat penyampaian SPT adalah 30 April 2027. Sikap Danu yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Menandatangani, karena kebenaran isi SPT sepenuhnya tanggung jawab Wajib Pajak, sedangkan kuasa yang menandatangani hanya mewakili secara administratif",
        B: "Menandatangani dengan catatan melalui surel kepada klien bahwa ia tidak memeriksa isi SPT, karena catatan itu membebaskannya dari tanggung jawab profesi maupun pidana",
        C: "Menolak, karena kuasa dilarang menandatangani SPT yang tidak ia susun sendiri sejak awal, sehingga SPT yang disusun staf klien hanya boleh ditandatangani pengurus",
        D: "Menandatangani hanya setelah menelaah laporan keuangan dan rekonsiliasi fiskal serta meyakini SPT benar, lengkap, dan jelas; bila waktu atau data tidak cukup, menolak dan pengurus menandatangani sendiri"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penanda tangan SPT menyatakan SPT diisi dengan benar, lengkap, dan jelas (Pasal 3 ayat (1) UU KUP). Prinsip kehati-hatian menuntut Danu menelaah dahulu; menandatangani tanpa telaah membuka risiko keterangan menyesatkan dan perluasan pidana kepada kuasa (Pasal 43 ayat (1)). SPT tidak harus disusun sendiri oleh kuasa, tetapi harus ia yakini kebenarannya.",
        jejakHitung: [
          ["Peran penanda tangan", "Menyatakan SPT benar, lengkap, jelas (Pasal 3 ayat (1))"],
          ["Kondisi", "Belum melihat laporan keuangan dan rekonsiliasi fiskal"],
          ["Pilihan sah", "Telaah memadai lalu tanda tangan, atau tolak; pengurus tetap dapat menandatangani sendiri"],
          ["Tenggat", "30 April 2027 (4 bulan setelah akhir Tahun Pajak 2026)"]
        ],
        mengapaSalah: {
          A: "Kuasa yang menandatangani ikut bertanggung jawab secara profesi dan dapat dipidana bila turut serta (Pasal 43 ayat (1)); tanda tangan bukan sekadar administratif.",
          B: "Catatan sepihak tidak menghapus pernyataan yang melekat pada tanda tangan SPT maupun kewajiban kehati-hatian.",
          C: "Tidak ada larangan menandatangani SPT yang disusun staf klien; syaratnya kuasa menelaah dan meyakini isinya."
        },
        jebakan: "Frasa 'sekadar formalitas' dan imbalan yang kecil menggoda untuk meremehkan arti tanda tangan kuasa."
      },
      dasarHukum: [
        { pasal: "Pasal 3 ayat (1) dan Pasal 4 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "Pasal 43 ayat (1) UU KUP — perluasan subjek pidana kepada kuasa", berlakuSejak: "2008-01-01" },
        { pasal: "Kode Etik IKPI Bab II — kompetensi dan kehati-hatian profesional", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-073",
      topik: "E.2",
      tingkat: ["A", "B", "C"],
      jenis: "etika",
      kesulitan: 1,
      stem: "Setelah keluar dari KKP Harsono pada Oktober 2026 dan memperoleh izin tingkat A, Konsultan Pajak Rio mengirim pesan berantai kepada 60 klien orang pribadi KKP Harsono yang nomornya ia simpan selama bekerja: 'Pindah ke saya sekarang, biaya SPT Tahunan cukup separuh tarif KKP Harsono, yang sering telat lapor.' Sebagian besar klien itu masih terikat perikatan dengan KKP Harsono sampai Maret 2027. Perbuatan Rio paling tepat dinilai sebagai ...",
      kataKualifikasi: [],
      opsi: { A: "Persaingan harga yang sah, karena klien bebas memilih konsultan dan tidak ada larangan menurunkan tarif jasa di bawah tarif KKP lama", B: "Pelanggaran etika antarrekan: merebut klien yang masih terikat dengan rekan, mencela rekan, dan berpromosi dengan menonjolkan diri", C: "Pemerasan terhadap klien menurut Pasal 30 ayat (1) huruf e PMK 55/2026 yang berujung pencabutan izin permanen", D: "Tidak melanggar, karena Rio pernah ikut menangani klien-klien itu sehingga mereka juga terhitung sebagai kliennya sendiri" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pesan Rio sekaligus merebut klien yang masih terikat dengan rekan, mencela rekan ('sering telat lapor'), dan berpromosi menonjolkan diri; nomor klien yang ia peroleh selama bekerja juga informasi KKP lama. Ini pelanggaran Kode Etik, bukan pemerasan.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Yang dipersoalkan bukan besaran tarif, melainkan cara merebut klien yang masih terikat dan mencela rekan.",
          C: "Pemerasan mensyaratkan paksaan atau ancaman; pesan promosi tidak memenuhi unsur itu.",
          D: "Klien adalah klien KKP tempat Rio dahulu bekerja; perikatannya tetap dengan KKP Harsono."
        },
        jebakan: "Opsi 'persaingan harga yang sah' terdengar wajar karena menurunkan tarif memang tidak dilarang; yang dilarang adalah caranya."
      },
      dasarHukum: [{ pasal: "Kode Etik IKPI Bab IV — hubungan dengan rekan seprofesi", berlakuSejak: "2024-08-20" }, { pasal: "Kode Etik IKPI Bab V — publikasi", berlakuSejak: "2024-08-20" }],
      anggaranDetik: 90,
      verifikasi: "◐",
      peringatan: "Pasal 30 ayat (1) huruf e dan ayat (4) PMK 55/2026 (pemerasan kepada petugas pajak atau klien, sanksi pencabutan izin) sudah dicocokkan ke naskah. Larangan merebut klien rekan, mencela rekan, dan promosi yang menonjolkan diri mengikuti Kode Etik IKPI versi 2019 dan ringkasan sekunder; teks versi 2024 belum dibaca langsung."
    },
    {
      id: "E-074", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, kasusId: "V-E-06", formulirRef: "BP21.b.2",
      stem: "Data untuk soal E-074 s.d. E-076: Konsultan Pajak Fikri Ananda (izin B sejak 2024, anggota AKP2I, ber-NPWP, bukan PKP) berpraktik melalui KKP perseorangan miliknya di Malang, yang bukan badan dan bukan persekutuan. Imbalan jasanya pada 2026: (1) PT Kali Brantas Sejahtera — pendampingan pemeriksaan Rp90.000.000, dibayar sekaligus 14 September 2026; (2) CV Arjuna Motor — penyusunan SPT Tahunan Rp18.000.000, dibayar 10 Maret 2026; (3) Ny. Hesti, pedagang orang pribadi yang bukan pemotong pajak — Rp7.500.000; (4) PT Tumpang Agro — retainer Rp6.000.000 per bulan, dibayar setiap akhir bulan Januari–Desember 2026. Semua jumlah adalah imbalan bruto. Fikri mengumpulkan 31 SKP PPL (25 terstruktur) pada 2026. Atas pembayaran 14 September 2026, PT Kali Brantas Sejahtera membuat bukti potong di Coretax. Jenis bukti potong serta isian DPP dan PPh yang dipotong yang benar adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "BPPU PPh Pasal 23: DPP Rp90.000.000; PPh dipotong Rp1.800.000",
        B: "BP21: DPP Rp90.000.000; PPh dipotong Rp4.500.000",
        C: "BP21: DPP Rp45.000.000; PPh dipotong Rp2.250.000",
        D: "BP21: DPP Rp45.000.000; PPh dipotong Rp2.700.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Fikri menerima imbalan sebagai orang pribadi bukan pegawai (tenaga ahli), karena KKP perseorangan bukan badan; pemotongannya PPh Pasal 21 dengan BP21, bukan PPh 23. DPP = 50% × bruto = Rp45.000.000, dikenai tarif Pasal 17 lapisan pertama 5% = Rp2.250.000, per pembayaran dan tidak kumulatif.",
        jejakHitung: [
          ["Status penerima", "OP bukan pegawai (tenaga ahli) melalui KKP perseorangan → PPh 21"],
          ["DPP = 50% × Rp90.000.000", "Rp45.000.000"],
          ["Tarif Pasal 17 (lapisan s.d. Rp60.000.000)", "5%"],
          ["PPh 21 = 5% × Rp45.000.000", "Rp2.250.000"],
          ["Administrasi", "BP21; SPT Masa PPh 21/26 Masa September 2026; setor 15 Oktober, lapor 20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "PPh 23 2% berlaku bila imbalan dibayar kepada KKP berbentuk badan/persekutuan; KKP perseorangan tidak mengubah status Fikri sebagai orang pribadi.",
          B: "Lupa DPP 50% dari bruto untuk bukan pegawai; 5% dikenakan atas seluruh Rp90.000.000.",
          D: "Menambah 20% seperti penerima tanpa NPWP; Fikri ber-NPWP."
        },
        jebakan: "Nama 'KKP' memancing klasifikasi badan (PPh 23); periksa bentuk hukumnya."
      },
      dasarHukum: [
        { pasal: "Pasal 21 UU PPh jo. PMK 168/2023 — PPh 21 bukan pegawai: tarif Pasal 17 × 50% bruto", berlakuSejak: "2024-01-01" },
        { pasal: "PER-11/PJ/2025 — bentuk BP21 dan SPT Masa PPh 21/26", berlakuSejak: "2025-05-22" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-075", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 3, kasusId: "V-E-06", formulirRef: "1770.induk.15",
      stem: "Lanjutan data Fikri Ananda (KKP perseorangan, ber-NPWP; imbalan 2026: PT Kali Brantas Sejahtera Rp90.000.000 sekaligus, CV Arjuna Motor Rp18.000.000 sekaligus, Ny. Hesti Rp7.500.000 dari pedagang orang pribadi yang bukan pemotong pajak, PT Tumpang Agro Rp6.000.000 per bulan selama 12 bulan). Semua pembayar berbentuk badan memotong PPh dengan benar dan bukti potongnya terekam di Coretax. Dalam SPT Tahunan PPh orang pribadi Tahun Pajak 2026, jumlah PPh Pasal 21 yang dipotong pihak lain dan dikreditkan pada baris kredit pajak adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp4.050.000",
        B: "Rp4.500.000",
        C: "Rp4.687.500",
        D: "Rp6.300.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Setiap pembayaran badan kepada Fikri dipotong PPh 21 sebesar 5% × 50% bruto (seluruhnya masih di lapisan pertama). Ny. Hesti bukan pemotong sehingga tidak ada kredit dari pembayarannya. Total kredit PPh 21 = Rp2.250.000 + Rp450.000 + Rp1.800.000 = Rp4.500.000.",
        jejakHitung: [
          ["PT Kali Brantas: 5% × 50% × Rp90.000.000", "Rp2.250.000"],
          ["CV Arjuna Motor (badan, pemotong): 5% × 50% × Rp18.000.000", "Rp450.000"],
          ["Ny. Hesti (bukan pemotong)", "Rp0"],
          ["PT Tumpang Agro: 5% × 50% × Rp6.000.000 × 12", "Rp150.000 × 12 = Rp1.800.000"],
          ["Jumlah kredit PPh 21", "Rp4.500.000"]
        ],
        mengapaSalah: {
          A: "Menganggap CV bukan pemotong PPh 21; CV adalah badan yang wajib memotong atas imbalan kepada bukan pegawai.",
          C: "Menambahkan 5% × 50% × Rp7.500.000 = Rp187.500 dari Ny. Hesti, padahal tidak ada pemotongan oleh pembayar yang bukan pemotong.",
          D: "Memotong retainer 5% dari bruto penuh (Rp300.000 × 12 = Rp3.600.000) tanpa DPP 50%."
        },
        jebakan: "Data berlebih (PPL, keanggotaan, jadwal bayar) tidak dipakai; yang menentukan adalah siapa pemotongnya dan DPP 50%."
      },
      dasarHukum: [
        { pasal: "PMK 168/2023 — PPh 21 bukan pegawai dan pemotong PPh 21", berlakuSejak: "2024-01-01" },
        { pasal: "Pasal 28 ayat (1) UU PPh — kredit pajak PPh 21 yang dipotong pihak lain", berlakuSejak: "2009-01-01" },
        { pasal: "PER-11/PJ/2025 — SPT Tahunan PPh orang pribadi di Coretax", berlakuSejak: "2025-05-22" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-076", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-E-06",
      stem: "Lanjutan data Fikri Ananda (izin B, anggota AKP2I; imbalan 2026 dari empat klien: PT Kali Brantas Sejahtera Rp90.000.000, CV Arjuna Motor Rp18.000.000, Ny. Hesti Rp7.500.000, dan PT Tumpang Agro Rp72.000.000 setahun; PPL 2026: 31 SKP, 25 terstruktur). Pernyataan yang paling tepat tentang dua kewajiban pelaporan Fikri atas tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "SPT Tahunan PPh orang pribadi disampaikan paling lambat 31 Maret 2027; laporan tahunan konsultan disampaikan paling lambat 30 April 2027 dengan perincian jasa untuk keempat klien (termasuk Ny. Hesti yang tidak memotong pajak), pemenuhan PPL 31 SKP (25 terstruktur), dan keanggotaan AKP2I",
        B: "SPT Tahunan PPh orang pribadi disampaikan paling lambat 31 Maret 2027; laporan tahunan konsultan disampaikan paling lambat 30 April 2027 dengan perincian jasa hanya untuk tiga klien yang menerbitkan bukti potong, pemenuhan PPL 31 SKP (25 terstruktur), dan keanggotaan AKP2I",
        C: "SPT Tahunan PPh orang pribadi dan laporan tahunan konsultan sama-sama disampaikan paling lambat 31 Maret 2027, dengan perincian jasa untuk keempat klien, pemenuhan PPL 31 SKP (25 terstruktur), dan keanggotaan AKP2I",
        D: "SPT Tahunan PPh orang pribadi disampaikan paling lambat 31 Maret 2027; laporan tahunan konsultan disampaikan paling lambat 30 April 2027 cukup dengan total imbalan Rp187.500.000 tanpa perincian per klien, karena rinciannya sudah tercantum dalam SPT"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Sebagai Wajib Pajak orang pribadi, Fikri menyampaikan SPT Tahunan paling lambat 3 bulan setelah akhir Tahun Pajak (31 Maret 2027). Sebagai konsultan, laporan tahunannya paling lambat 30 April 2027 dan wajib memuat perincian jasa per klien (semua klien, bukan hanya yang memotong pajak), PPL, dan keanggotaan asosiasi. PPL Fikri memenuhi tingkat B (31 ≥ 30; 25 ≥ 24).",
        jejakHitung: [
          ["SPT Tahunan OP 2026", "Paling lambat 31 Maret 2027 (Pasal 3 ayat (3) huruf b UU KUP)"],
          ["Laporan tahunan konsultan 2026", "Paling lambat 30 April 2027 (PMK 55/2026)"],
          ["Perincian jasa", "4 klien; total Rp90 jt + Rp18 jt + Rp7,5 jt + Rp72 jt = Rp187.500.000"],
          ["PPL tingkat B", "31 SKP ≥ 30; terstruktur 25 ≥ 24 → memenuhi"]
        ],
        mengapaSalah: {
          B: "Perincian jasa mencakup seluruh klien yang dilayani, tidak bergantung pada ada atau tidaknya bukti potong.",
          C: "Tenggat laporan tahunan konsultan adalah 30 April tahun berikutnya, berbeda dari SPT Tahunan orang pribadi.",
          D: "PMK 55/2026 mewajibkan perincian jasa per klien; laporan berupa total saja mengikuti pola lama dan tidak memadai."
        },
        jebakan: "Dua kewajiban milik satu orang dengan tenggat berbeda; jangan menyamakan tenggat SPT Tahunan dengan laporan tahunan konsultan."
      },
      dasarHukum: [
        { pasal: "Pasal 3 ayat (3) huruf b UU KUP — SPT Tahunan PPh orang pribadi 3 bulan", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 55/2026 — laporan tahunan konsultan dan kewajiban PPL", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-077", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Nadia Putri mengajukan permohonan izin praktik tingkat B pada 1 Juni 2027 dengan SKK tingkat B (terbit 19 November 2026) dan bukti lulus ujian profesi asosiasi (Februari 2027). Riwayat kerjanya: staf pajak PT Sinar Kencana 1 Maret 2023 – 31 Agustus 2024; staf pemasaran di perusahaan yang sama 1 September 2024 – 31 Januari 2026; asisten konsultan di KKP Lestari & Rekan sejak 1 Februari 2026 sampai sekarang (Mei 2027 adalah bulan penuh terakhir sebelum permohonan). Ia juga pernah magang di sebuah KPP selama 2 bulan pada 2021. Jumlah pengalaman kerja di bidang perpajakan yang dapat dihitung untuk syarat izin dan kesimpulannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "16 bulan; memenuhi syarat pengalaman izin B, tetapi belum memenuhi syarat pengalaman izin C",
        B: "34 bulan; memenuhi syarat pengalaman izin B dan juga syarat pengalaman izin C",
        C: "36 bulan; memenuhi syarat pengalaman izin B dan juga syarat pengalaman izin C",
        D: "19 bulan; memenuhi syarat pengalaman izin B, tetapi belum memenuhi syarat pengalaman izin C"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengalaman dihitung secara akumulasi dalam 3 tahun terakhir sebelum permohonan (Juni 2024 – Mei 2027) dan hanya pekerjaan di bidang perpajakan. Yang masuk: sisa masa staf pajak Juni–Agustus 2024 (3 bulan) dan KKP Februari 2026 – Mei 2027 (16 bulan), total 19 bulan: cukup untuk izin B (≥ 12 bulan), belum untuk syarat izin C (≥ 24 bulan).",
        jejakHitung: [
          ["Jendela 3 tahun", "1 Juni 2024 – 31 Mei 2027"],
          ["Staf pajak (Mar 2023 – Agu 2024)", "Yang masuk jendela: Juni–Agustus 2024 = 3 bulan"],
          ["Staf pemasaran", "Bukan bidang perpajakan → 0 bulan"],
          ["KKP (Feb 2026 – Mei 2027)", "11 bulan (2026) + 5 bulan (2027) = 16 bulan"],
          ["Magang 2021", "Di luar jendela → 0 bulan"],
          ["Jumlah", "3 + 16 = 19 bulan → B (≥ 12) terpenuhi; C (≥ 24) belum"]
        ],
        mengapaSalah: {
          A: "Hanya menghitung pekerjaan di KKP; sisa masa staf pajak Juni–Agustus 2024 masih berada di dalam jendela 3 tahun.",
          B: "Menjumlahkan seluruh masa staf pajak (18 bulan) dan KKP (16 bulan) tanpa memotong jendela 3 tahun terakhir.",
          C: "Menghitung seluruh jendela 36 bulan, termasuk masa sebagai staf pemasaran yang bukan bidang perpajakan, sehingga syarat izin C seolah-olah terpenuhi."
        },
        jebakan: "Dua filter dipakai bersamaan: jendela 3 tahun terakhir dan jenis pekerjaan; magang lama hanya pengecoh."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — syarat pengalaman kerja perpajakan izin B ≥ 1 tahun dan C ≥ 2 tahun, akumulasi 3 tahun terakhir", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-078", topik: "E.3", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "Konsultan Pajak Teguh memperoleh izin praktik tingkat A pada Januari 2027 dan harus menjadi anggota asosiasi konsultan pajak terdaftar paling lambat 30 hari kerja sejak izin terbit. Ia menerima empat undangan keanggotaan. Organisasi yang BUKAN asosiasi konsultan pajak terdaftar, sehingga keanggotaannya tidak memenuhi kewajiban menurut PMK 55/2026, adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: {
        A: "AKP2I",
        B: "Perkoppi",
        C: "IAI",
        D: "P3KPI"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Asosiasi konsultan pajak yang terdaftar dan tetap diakui setelah PMK 55/2026 adalah IKPI, AKP2I, Perkoppi, dan P3KPI. IAI adalah organisasi profesi akuntan, sehingga keanggotaan IAI tidak memenuhi kewajiban bergabung dengan asosiasi konsultan pajak terdaftar. IAI adalah singkatan Ikatan Akuntan Indonesia.",
        jejakHitung: [],
        mengapaSalah: {
          A: "AKP2I termasuk asosiasi konsultan pajak terdaftar.",
          B: "Perkoppi termasuk asosiasi konsultan pajak terdaftar.",
          D: "P3KPI termasuk asosiasi konsultan pajak terdaftar."
        },
        jebakan: "Kata 'BUKAN' membalik pertanyaan; organisasi profesi lain yang dekat dengan perpajakan tidak otomatis memenuhi kewajiban."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — asosiasi konsultan pajak terdaftar dan kewajiban keanggotaan 30 hari kerja", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 32 PMK 55/2026 — syarat dan kewajiban asosiasi", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "E-079", topik: "E.3", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Rudi Hartawan (S-1 akuntansi, WNI, berdomisili di Palembang, ber-NPWP) bekerja sebagai kepala seksi pajak di Perumda Air Minum milik pemerintah kota (BUMD) sejak 2019. Ia lulus UKP tingkat B (SKK terbit 19 November 2026) dan lulus ujian profesi asosiasi pada Desember 2026. Pada Januari 2027 ia ingin mengajukan izin praktik tingkat B sambil tetap bekerja di Perumda dan menerima klien pada akhir pekan. Pernyataan yang paling tepat menurut PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rudi belum memenuhi syarat izin selama masih terikat pekerjaan pada BUMD; ia perlu berhenti dari Perumda sebelum izin dapat diberikan, sedangkan pengalamannya sebagai kepala seksi pajak dapat dihitung sebagai pengalaman kerja perpajakan",
        B: "Rudi memenuhi syarat izin karena larangan terikat pekerjaan hanya berlaku bagi pegawai negeri sipil, bukan pegawai BUMD; pengalamannya sebagai kepala seksi pajak dapat dihitung sebagai pengalaman kerja perpajakan",
        C: "Rudi memenuhi syarat izin sepanjang praktiknya hanya pada akhir pekan dan Perumda tidak menjadi kliennya; pengalamannya sebagai kepala seksi pajak dapat dihitung sebagai pengalaman kerja perpajakan",
        D: "Rudi belum memenuhi syarat izin selama masih terikat pekerjaan pada BUMD, dan pengalamannya di Perumda tidak dapat dihitung sebagai pengalaman kerja perpajakan karena diperoleh di BUMD"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Salah satu syarat izin adalah tidak terikat pekerjaan atau jabatan pada instansi pemerintah, lembaga negara, BUMN, atau BUMD; setelah berizin, rangkap jabatan semacam itu juga menjadi larangan Pasal 30 ayat (1) huruf f. Pengalaman perpajakannya tetap dapat dihitung karena syaratnya adalah pengalaman di bidang perpajakan, bukan jenis pemberi kerja.",
        jejakHitung: [
          ["Status kerja", "Kepala seksi pajak di BUMD → terikat pekerjaan pada BUMD"],
          ["Syarat izin", "Tidak terikat pekerjaan/jabatan pada pemerintah, lembaga negara, BUMN, BUMD → belum terpenuhi"],
          ["Pengalaman", "Sejak 2019 di bidang perpajakan → dapat dihitung (B ≥ 1 tahun)"],
          ["Jalan keluar", "Berhenti dari Perumda, lalu ajukan izin"]
        ],
        mengapaSalah: {
          B: "Syaratnya mencakup BUMN dan BUMD, bukan hanya pegawai negeri sipil.",
          C: "Syarat tidak terikat pekerjaan pada BUMD tidak dapat diakali dengan praktik di akhir pekan atau dengan menghindari Perumda sebagai klien.",
          D: "Tidak ada ketentuan yang mengecualikan pengalaman perpajakan yang diperoleh di BUMD."
        },
        jebakan: "Opsi A dan D sama pada kesimpulan izin, berbeda pada satu frasa tentang pengalaman; periksa setiap klausa."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — syarat izin: tidak terikat pekerjaan/jabatan pada pemerintah, lembaga negara, BUMN, atau BUMD", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 30 ayat (1) huruf f PMK 55/2026 — larangan rangkap jabatan", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "E-080",
      topik: "E.4",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 39A huruf a dan Pasal 43 ayat (1) UU KUP (parafrase setia): Setiap orang yang dengan sengaja menerbitkan dan/atau menggunakan faktur pajak, bukti pemungutan pajak, bukti pemotongan pajak, dan/atau bukti setoran pajak yang tidak berdasarkan transaksi yang sebenarnya dipidana dengan pidana penjara paling singkat 2 tahun dan paling lama 6 tahun serta denda paling sedikit 2 kali dan paling banyak 6 kali jumlah pajak dalam faktur pajak atau bukti tersebut. Ketentuan ini berlaku juga bagi wakil, kuasa, pegawai Wajib Pajak, atau pihak lain yang turut serta melakukan, menganjurkan, atau membantu melakukan.",
      stem: "Konsultan Pajak Hari Wibowo (izin B) adalah kuasa PT Sentra Niaga (PKP, badan dalam negeri). Atas permintaan direkturnya, pada Masa Pajak September 2026 Hari membantu PT Sentra Niaga mengkreditkan 12 faktur pajak dari PT Fiktif Jaya yang tidak disertai penyerahan barang apa pun, dengan harga jual seluruhnya Rp1.250.000.000 dan PPN tercantum Rp137.500.000 (12% × 11/12 × harga jual). Hari menerima imbalan Rp40.000.000 untuk 'jasa optimalisasi PPN'. Perbuatan itu terbukti pada 2027. Berdasarkan kutipan dan PMK 55/2026, pernyataan yang paling tepat mengenai akibat bagi Hari adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Hari hanya dapat dikenai pembekuan izin paling lama 2 tahun menurut PMK 55/2026, karena yang mengkreditkan faktur adalah PT Sentra Niaga, bukan kuasanya", B: "Hari dapat dipidana penjara 6 bulan sampai 6 tahun dan denda Rp275.000.000 sampai Rp550.000.000 (2–4 kali pajak), dan izinnya dicabut permanen karena menerima permintaan rekayasa", C: "Hari dapat dipidana penjara 2 sampai 6 tahun dan denda Rp2.500.000.000 sampai Rp7.500.000.000 (2–6 kali harga jual dalam faktur), dan izinnya dapat dibekukan paling lama 2 tahun karena menerima permintaan rekayasa", D: "Hari dapat dipidana sebagai pihak yang turut serta atau membantu dengan penjara 2 sampai 6 tahun dan denda Rp275.000.000 sampai Rp825.000.000 (2–6 kali PPN dalam faktur), dan izinnya dapat dibekukan paling lama 2 tahun karena menerima permintaan rekayasa" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Mengkreditkan faktur yang tidak berdasarkan transaksi sebenarnya adalah delik Pasal 39A huruf a UU KUP, dan Pasal 43 ayat (1) memberlakukannya juga bagi kuasa yang turut serta atau membantu. Dendanya dihitung dari jumlah pajak dalam faktur (Rp137.500.000): 2 kali = Rp275.000.000 sampai 6 kali = Rp825.000.000. Dari sisi profesi, menerima permintaan rekayasa termasuk Pasal 30 ayat (1) huruf b PMK 55/2026 dengan sanksi pembekuan paling lama 2 tahun (Pasal 30 ayat (3)). Bila perkara pidananya berjalan, izin Hari dibekukan selama penyidikan atau penuntutan (Pasal 43 ayat (1)) dan dicabut bila ia dipidana (Pasal 43 ayat (3)).",
        jejakHitung: [
          ["PPN dalam faktur = 12% × 11/12 × Rp1.250.000.000", "Rp137.500.000"],
          ["Denda minimum = 2 × Rp137.500.000", "Rp275.000.000"],
          ["Denda maksimum = 6 × Rp137.500.000", "Rp825.000.000"],
          ["Penjara", "2–6 tahun (Pasal 39A) jo. Pasal 43 ayat (1) untuk kuasa"],
          ["Sanksi profesi", "Rekayasa → Pasal 30 ayat (1) huruf b jo. ayat (3): pembekuan ≤ 2 tahun"],
          ["Bila diproses pidana", "Tersangka/terdakwa → pembekuan selama proses (Pasal 43 ayat (1)); dipidana → pencabutan (Pasal 43 ayat (3))"]
        ],
        mengapaSalah: {
          A: "Pasal 43 ayat (1) secara tegas menjangkau kuasa yang turut serta atau membantu; sanksi profesi tidak menghapus pertanggungjawaban pidana.",
          B: "Rentang 6 bulan–6 tahun dan denda 2–4 kali adalah Pasal 39; faktur fiktif diatur Pasal 39A. Menerima permintaan rekayasa diancam pembekuan (Pasal 30 ayat (3)); pencabutan baru menyusul bila Hari dipidana (Pasal 43 ayat (3)), bukan karena rekayasanya.",
          C: "Denda Pasal 39A dihitung dari jumlah pajak dalam faktur, bukan dari harga jual atau DPP."
        },
        jebakan: "Tiga angka berdekatan menguji dua hal sekaligus: pasal pidana yang tepat (39 vs 39A) dan dasar kelipatan denda (pajak vs harga jual). Pencabutan izin bukan sanksi rekayasa, melainkan akibat putusan pidana (Pasal 43 ayat (3) PMK 55/2026)."
      },
      dasarHukum: [{ pasal: "Pasal 39A huruf a dan Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 30 ayat (1) huruf b dan ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 43 ayat (1) dan (3) PMK 55/2026", berlakuSejak: "2026-08-24" }, { pasal: "Pasal 3 ayat (2) dan (3) PMK 131/2024: DPP nilai lain 11/12 untuk tarif PPN 12%", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "E-081", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Seorang Wajib Pajak ingin melaporkan dugaan pelanggaran larangan Pasal 30 PMK 55/2026 oleh konsultan pajaknya. Ia bertanya unit Kementerian Keuangan mana yang melaksanakan pengawasan terhadap konsultan pajak, Kantor Konsultan Pajak, dan pihak lain yang bertindak sebagai kuasa Wajib Pajak, termasuk melalui pemeriksaan reguler dan pemeriksaan khusus. Jawaban yang tepat menurut PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Direktorat Jenderal Pajak, karena konsultan berpraktik di hadapan KPP",
        B: "Direktorat Jenderal Stabilitas dan Pengembangan Sektor Keuangan (DJSPSK)",
        C: "Badan Pendidikan dan Pelatihan Keuangan (BPPK), karena BPPK menyelenggarakan UKP dan menerbitkan SKK",
        D: "Komite Pengawas Konsultan Pajak bentukan PMK 175/2022, yang tetap menjadi pelaksana tunggal pengawasan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "PMK 55/2026 menempatkan pembinaan, pengembangan, dan pengawasan konsultan pajak, KKP, dan pihak lain pada Menteri Keuangan, dengan pelaksana pengawasan DJSPSK melalui pemeriksaan reguler dan khusus. Pelanggaran kode etik diadukan ke dewan kehormatan asosiasi; pelanggaran larangan PMK ke unit pengawas Kemenkeu.",
        jejakHitung: [],
        mengapaSalah: {
          A: "DJP adalah pihak yang dihadapi konsultan dalam pelaksanaan hak dan kewajiban WP, bukan pelaksana pengawasan profesi menurut PMK 55/2026.",
          C: "BPPK menyelenggarakan uji kompetensi; perannya tidak mencakup pengawasan praktik.",
          D: "PMK 175/2022 sudah dicabut; pelaksana pengawasan menurut PMK 55/2026 adalah DJSPSK."
        },
        jebakan: "Penyelenggara ujian (BPPK), pihak yang dihadapi (DJP), dan pengawas profesi (DJSPSK) adalah tiga unit berbeda."
      },
      dasarHukum: [
        { pasal: "PMK 55/2026 — pembinaan dan pengawasan konsultan pajak, KKP, dan pihak lain", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "E-082", topik: "E.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2,
      stem: "Dalam pemeriksaan PPh Badan Tahun Pajak 2025 PT Garda Sarana, pemeriksa mengoreksi biaya promosi Rp640.000.000 karena tidak didukung daftar nominatif. Konsultan Pajak Yoga (izin C), kuasa perusahaan, mengetahui bahwa salah satu pemeriksa pernah dijatuhi hukuman disiplin. Ia menemui pemeriksa itu dan menyatakan akan menyebarkan informasi tersebut ke media sosial dan wartawan kecuali koreksi biaya promosi dibatalkan. Pemeriksa melaporkan ancaman itu, dan perbuatan Yoga terbukti. Menurut PMK 55/2026, kualifikasi perbuatan dan akibat yang tepat bagi Yoga adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Pemerasan (Pasal 30 ayat (1) huruf e); sanksinya pencabutan izin yang bersifat permanen dan SKK-nya ikut tidak berlaku",
        B: "Memberikan keterangan menyesatkan kepada DJP (Pasal 30 ayat (1) huruf a); sanksinya pembekuan izin paling lama 2 tahun",
        C: "Pelanggaran kode etik asosiasi saja; sanksinya pembekuan izin paling lama 2 tahun berdasarkan Pasal 24 ayat (5)",
        D: "Bukan pelanggaran, karena menyampaikan dugaan pelanggaran petugas adalah hak setiap Wajib Pajak dan kuasanya"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Ancaman membuka aib petugas dengan syarat koreksi dibatalkan adalah pemerasan: memaksa dengan ancaman untuk memperoleh keuntungan bagi klien. Pemerasan termasuk larangan Pasal 30 ayat (1) huruf e dengan sanksi pencabutan permanen (Pasal 30 ayat (4)). Melaporkan dugaan pelanggaran melalui saluran pengaduan resmi tanpa syarat apa pun adalah hak yang sah, tetapi bukan itu yang dilakukan Yoga.",
        jejakHitung: [
          ["Perbuatan", "Ancaman menyebarkan informasi + syarat koreksi dibatalkan"],
          ["Kualifikasi", "Pemerasan → Pasal 30 ayat (1) huruf e"],
          ["Sanksi", "Pasal 30 ayat (4): pencabutan permanen; SKK tidak berlaku"]
        ],
        mengapaSalah: {
          B: "Yoga tidak memberikan keterangan yang menyesatkan; ia mengancam untuk memperoleh keuntungan.",
          C: "Perbuatan itu melanggar larangan PMK yang lebih berat, bukan hanya kode etik.",
          D: "Hak mengadu dijalankan melalui saluran resmi tanpa syarat; mengaitkannya dengan pembatalan koreksi mengubahnya menjadi pemerasan."
        },
        jebakan: "Pemerasan tidak harus berupa permintaan uang; keuntungan berupa pembatalan koreksi sudah cukup."
      },
      dasarHukum: [
        { pasal: "Pasal 30 ayat (1) huruf e dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-083", topik: "E.5", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-E-05",
      stem: "Data untuk soal E-083 s.d. E-085: PT Lembah Hijau Lestari (WP badan dalam negeri, bukan PMA) menerima SKPKB PPh Badan Tahun Pajak 2023 yang dikirim 20 Januari 2026 dengan pokok kurang bayar Rp1.800.000.000 (ditambah sanksi bunga Pasal 13 ayat (2) yang tidak dipersoalkan). Dalam pembahasan akhir hasil pemeriksaan, perusahaan menyetujui pokok Rp240.000.000 dan melunasinya pada 2 April 2026. Konsultan Pajak Wahyu Pratama (izin B) menyampaikan surat keberatan melalui Portal Wajib Pajak pada 7 April 2026 berdasarkan surat kuasa khusus 'mengajukan dan mengikuti proses keberatan atas SKPKB PPh Badan Tahun Pajak 2023' yang berlaku 1 April 2026 – 31 Maret 2027. Pada 12 Juni 2026 perusahaan menyetor lagi Rp160.000.000. Keputusan keberatan diterima 23 Maret 2027: dikabulkan sebagian, dengan pokok pajak menurut keputusan Rp1.040.000.000. Jika PT Lembah Hijau Lestari tidak mengajukan banding, sanksi denda Pasal 25 ayat (9) UU KUP adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp192.000.000",
        B: "Rp312.000.000",
        C: "Rp240.000.000",
        D: "Rp400.000.000"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "angka-usang" },
      pembahasan: {
        inti: "Denda keberatan 30% dihitung dari pokok menurut keputusan keberatan dikurangi pajak yang telah dibayar sebelum mengajukan keberatan. Setoran 12 Juni 2026 dilakukan setelah keberatan diajukan sehingga tidak mengurangi dasar denda: 30% × (Rp1.040.000.000 − Rp240.000.000) = Rp240.000.000.",
        jejakHitung: [
          ["Pokok menurut keputusan keberatan", "Rp1.040.000.000"],
          ["Dibayar sebelum keberatan (2 April 2026)", "Rp240.000.000"],
          ["Setoran 12 Juni 2026 (setelah keberatan)", "Tidak mengurangi dasar denda"],
          ["Dasar denda = 1.040.000.000 − 240.000.000", "Rp800.000.000"],
          ["Denda 30%", "Rp240.000.000"]
        ],
        mengapaSalah: {
          A: "Ikut mengurangkan setoran Rp160.000.000 yang dibayar setelah keberatan diajukan: 30% × Rp640.000.000.",
          B: "Tidak mengurangkan pembayaran sebelum keberatan: 30% × Rp1.040.000.000.",
          D: "Memakai tarif denda 50% sebelum UU HPP."
        },
        jebakan: "Tanggal setoran menentukan: hanya yang dibayar sebelum surat keberatan disampaikan yang mengurangi dasar denda."
      },
      dasarHukum: [
        { pasal: "Pasal 25 ayat (9) UU KUP s.t.d.t.d. UU 7/2021 — denda 30%", berlakuSejak: "2021-10-29" },
        { pasal: "Pasal 26 ayat (1) UU KUP — keputusan keberatan 12 bulan", berlakuSejak: "2008-01-01" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-084",
      topik: "E.5",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-E-05",
      kutipan: "Pasal 34 ayat (1)–(3) UU 14/2002 tentang Pengadilan Pajak (parafrase setia): Para pihak yang bersengketa masing-masing dapat didampingi atau diwakili oleh satu atau lebih kuasa hukum dengan Surat Kuasa Khusus. Untuk menjadi kuasa hukum harus dipenuhi syarat warga negara Indonesia, mempunyai pengetahuan yang luas dan keahlian tentang peraturan perundang-undangan perpajakan, serta persyaratan lain yang ditetapkan Menteri. Dalam hal kuasa hukum merupakan keluarga sedarah atau semenda sampai derajat kedua, pegawai, atau pengampu, persyaratan tersebut tidak diperlukan.",
      stem: "Lanjutan data PT Lembah Hijau Lestari: keputusan keberatan (dikabulkan sebagian, pokok Rp1.040.000.000) diterima 23 Maret 2027; surat kuasa khusus Konsultan Pajak Wahyu Pratama (izin B) hanya untuk proses keberatan dan berlaku sampai 31 Maret 2027. Direksi memutuskan mengajukan banding dan ingin tetap diwakili Wahyu atau, bila tidak memungkinkan, oleh Pak Darmawan, manajer pajak perusahaan yang tidak memiliki izin konsultan maupun SKT. Berdasarkan kutipan, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Wahyu dapat langsung mewakili dalam banding memakai surat kuasa keberatan yang ada, karena banding merupakan kelanjutan keberatan dan surat kuasa masih berlaku sampai 31 Maret 2027", B: "Banding wajib diwakili konsultan pajak izin C karena sengketa di Pengadilan Pajak termasuk kewenangan izin tertinggi; Pak Darmawan tidak dapat mewakili karena tidak memiliki SKT", C: "Banding diajukan paling lambat 23 Juni 2027 oleh Wahyu, lalu Wahyu membuat surat substitusi kepada Pak Darmawan, karena pegawai tidak memerlukan persyaratan kuasa hukum", D: "Perusahaan menandatangani Surat Kuasa Khusus baru untuk banding; Wahyu dapat mewakili bila memenuhi syarat kuasa hukum, sedangkan Pak Darmawan sebagai pegawai dikecualikan dari syarat itu; banding paling lambat 23 Juni 2027" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Banding adalah proses baru di Pengadilan Pajak dengan aturan kuasa sendiri (Pasal 34 UU 14/2002): diperlukan Surat Kuasa Khusus untuk banding, dan kuasa hukum harus memenuhi syarat WNI, keahlian perpajakan, dan syarat Menteri, kecuali keluarga sampai derajat kedua, pegawai, atau pengampu. Surat banding diajukan dalam 3 bulan sejak keputusan keberatan diterima (Pasal 35 ayat (2)): 23 Juni 2027.",
        jejakHitung: [
          ["Lingkup surat kuasa Wahyu", "Hanya proses keberatan → tidak mencakup banding"],
          ["Dasar kuasa di Pengadilan Pajak", "Pasal 34 UU 14/2002 → Surat Kuasa Khusus baru"],
          ["Pak Darmawan (pegawai)", "Dikecualikan dari persyaratan kuasa hukum (Pasal 34 ayat (3))"],
          ["Tenggat banding", "23 Maret 2027 + 3 bulan = 23 Juni 2027"]
        ],
        mengapaSalah: {
          A: "Surat kuasa khusus hanya mencakup hak yang disebutkan (keberatan); banding memerlukan Surat Kuasa Khusus tersendiri.",
          B: "Pasal 34 tidak mensyaratkan izin konsultan tingkat C, dan pegawai Wajib Pajak justru dikecualikan dari persyaratan kuasa hukum.",
          C: "Substitusi oleh kuasa tidak dikenal; pegawai mewakili berdasarkan Surat Kuasa Khusus dari perusahaan sendiri."
        },
        jebakan: "Aturan kuasa di DJP (PMK 44/2026) dan di Pengadilan Pajak (Pasal 34 UU 14/2002) berbeda; pegawai tanpa SKT tidak dapat menjadi kuasa di hadapan DJP, tetapi dapat menjadi kuasa hukum dalam banding."
      },
      dasarHukum: [{ pasal: "Pasal 34 ayat (1)–(3) UU 14/2002 — kuasa hukum di Pengadilan Pajak", berlakuSejak: "2002-04-12" }, { pasal: "Pasal 35 ayat (2) UU 14/2002 — banding 3 bulan sejak keputusan keberatan diterima", berlakuSejak: "2002-04-12" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "E-085", topik: "E.1", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-E-05",
      stem: "Lanjutan data PT Lembah Hijau Lestari: pokok menurut keputusan keberatan Rp1.040.000.000; pembayaran sebelum keberatan Rp240.000.000; setoran setelah keberatan diajukan Rp160.000.000. Sebelum memutuskan banding, direksi meminta Konsultan Pajak Wahyu Pratama menjelaskan risiko keuangannya dan bertanya apakah Wahyu 'bisa menjamin menang'. Penjelasan yang paling tepat dan sesuai Kode Etik adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Bila tidak banding, denda 30% sebesar Rp240.000.000 dikenakan; bila banding dan ternyata ditolak seluruhnya, denda 30% dan denda 60% dikenakan sekaligus sebesar Rp720.000.000; Wahyu menjelaskan risiko tanpa menjamin hasil dan keputusan banding diambil direksi",
        B: "Bila tidak banding, denda 30% sebesar Rp240.000.000 dikenakan; bila banding, denda 30% tidak dikenakan, tetapi bila banding ditolak seluruhnya timbul denda 60% sebesar Rp480.000.000; Wahyu menjelaskan risiko tanpa menjamin hasil dan keputusan banding diambil direksi",
        C: "Bila tidak banding, denda 30% sebesar Rp240.000.000 dikenakan; bila banding, denda 30% tidak dikenakan, tetapi bila banding ditolak seluruhnya timbul denda 60% sebesar Rp624.000.000; Wahyu menjelaskan risiko tanpa menjamin hasil dan keputusan banding diambil direksi",
        D: "Bila tidak banding, denda 30% sebesar Rp240.000.000 dikenakan; bila banding, denda 30% tidak dikenakan, tetapi bila banding ditolak seluruhnya timbul denda 60% sebesar Rp384.000.000; Wahyu menjelaskan risiko tanpa menjamin hasil dan keputusan banding diambil direksi"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Kode Etik melarang menjanjikan hasil; tugas Wahyu adalah menjelaskan risiko secara objektif dan menyerahkan keputusan kepada klien. Bila banding, denda 30% tidak dikenakan; bila banding ditolak seluruhnya, denda 60% dihitung dari pokok menurut putusan banding dikurangi pembayaran sebelum keberatan: 60% × (Rp1.040.000.000 − Rp240.000.000) = Rp480.000.000.",
        jejakHitung: [
          ["Tanpa banding: 30% × (1.040.000.000 − 240.000.000)", "Rp240.000.000"],
          ["Dengan banding", "Denda 30% Pasal 25 ayat (9) tidak dikenakan"],
          ["Banding ditolak seluruhnya: 60% × (1.040.000.000 − 240.000.000)", "Rp480.000.000"],
          ["Setoran setelah keberatan Rp160.000.000", "Tidak mengurangi dasar denda"],
          ["Sikap etis", "Jelaskan risiko, tanpa jaminan hasil; keputusan di tangan direksi"]
        ],
        mengapaSalah: {
          A: "Satu sengketa hanya berujung satu denda: bila WP banding, denda 30% tidak dikenakan, sehingga 30% dan 60% tidak dijumlahkan.",
          C: "60% × Rp1.040.000.000 tanpa mengurangkan pembayaran sebelum keberatan.",
          D: "60% × (Rp1.040.000.000 − Rp400.000.000), ikut mengurangkan setoran yang dilakukan setelah keberatan diajukan."
        },
        jebakan: "Keempat opsi sama dalam sikap etis dan angka denda 30%; yang membedakan hanya angka denda 60% dan apakah 30% gugur."
      },
      dasarHukum: [
        { pasal: "Pasal 25 ayat (9)–(10) dan Pasal 27 ayat (5d) UU KUP s.t.d.t.d. UU 7/2021", berlakuSejak: "2021-10-29" },
        { pasal: "Kode Etik IKPI Bab III — larangan menjanjikan hasil", berlakuSejak: "2024-08-20" }
      ],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "E-086", topik: "E.5", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 32 ayat (3) UU KUP dan PMK 44/2026 Pasal 8 (parafrase setia): Orang pribadi atau badan dapat menunjuk seorang kuasa dengan surat kuasa khusus untuk menjalankan hak dan memenuhi kewajiban sesuai dengan ketentuan peraturan perundang-undangan perpajakan. Satu surat kuasa khusus diberikan kepada satu kuasa, menyebutkan hak dan/atau kewajiban tertentu yang dikuasakan, dan mencantumkan masa berlaku; kuasa tidak dapat melimpahkan kuasanya kepada pihak lain.",
      stem: "Pada 3 November 2026 direktur PT Arta Boga (badan dalam negeri, bukan PMA) menandatangani satu surat kuasa khusus yang mencantumkan dua nama sekaligus, Konsultan Pajak Vina (izin B) dan Konsultan Pajak Bram (izin C), dengan bunyi 'secara bersama-sama atau sendiri-sendiri mewakili perusahaan dalam pemeriksaan PPh Badan Tahun Pajak 2025', berlaku 3 November 2026 – 31 Oktober 2027. Perusahaan memang ingin diwakili keduanya. Berdasarkan kutipan, perbaikan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Membuat dua surat kuasa khusus terpisah, masing-masing untuk satu kuasa, yang tetap menyebutkan hak yang dikuasakan dan masa berlakunya",
        B: "Cukup mencoret frasa 'sendiri-sendiri' sehingga Vina dan Bram selalu bertindak bersama-sama berdasarkan satu surat kuasa yang sama",
        C: "Mempertahankan surat kuasa itu, dengan ketentuan Bram sebagai pemegang izin lebih tinggi memberi substitusi kepada Vina bila berhalangan",
        D: "Menghapus masa berlaku dari surat kuasa agar kuasa tidak perlu diperbarui bila jangka waktu pemeriksaan PPh Badan diperpanjang"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Satu surat kuasa khusus hanya untuk satu kuasa, sehingga bila perusahaan ingin diwakili Vina dan Bram, dibuat dua surat kuasa terpisah yang masing-masing menyebut hak yang dikuasakan dan masa berlaku. Substitusi dilarang, dan masa berlaku wajib dicantumkan.",
        jejakHitung: [
          ["Jumlah kuasa dalam satu surat", "Dua → tidak memenuhi 'satu surat kuasa untuk satu kuasa'"],
          ["Perbaikan", "Dua surat kuasa terpisah"],
          ["Isi wajib tiap surat", "Hak tertentu (pemeriksaan PPh Badan 2025) + masa berlaku"],
          ["Larangan", "Tanpa substitusi; tanpa masa berlaku terbuka"]
        ],
        mengapaSalah: {
          B: "Masalahnya adalah dua kuasa dalam satu surat, bukan cara bertindaknya; mencoret 'sendiri-sendiri' tidak mengubah jumlah kuasa.",
          C: "Kuasa tidak dapat melimpahkan kuasanya kepada pihak lain, berapa pun tingkat izinnya.",
          D: "Masa berlaku wajib dicantumkan sejak PMK 44/2026; surat kuasa tanpa batas waktu mengikuti pola lama."
        },
        jebakan: "Seluruh opsi tampak sebagai 'perbaikan'; hanya satu yang menjawab pokok cacatnya, yaitu dua kuasa dalam satu surat."
      },
      dasarHukum: [
        { pasal: "Pasal 32 ayat (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PMK 44/2026 Pasal 8 — surat kuasa khusus: satu kuasa, hak tertentu, masa berlaku, tanpa substitusi", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "E-087", topik: "E.5", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "1771.induk.G",
      stem: "PT Harapan Baru Sentosa (WP badan dalam negeri, bukan PMA) menunjuk Konsultan Pajak Indra (izin B) dengan surat kuasa khusus untuk mengisi dan menandatangani SPT Tahunan PPh Badan Tahun Pajak 2026, berlaku 1 Februari – 31 Mei 2027. Di Coretax, Indra telah diberi akses sebagai kuasa oleh perusahaan. SPT akan disampaikan pada 28 April 2027 dengan PPh Pasal 29 Rp52.300.000 yang sudah disetor. Saat mengisi bagian pernyataan dan penandatanganan pada induk SPT Tahunan PPh Badan, isian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Memilih penanda tangan 'Pengurus', mengisi identitas direktur utama, lalu Indra menyelesaikan penandatanganan elektronik memakai kode otorisasi milik direktur utama yang dipinjamkan kepadanya",
        B: "Memilih penanda tangan 'Kuasa', mengisi identitas Indra, menandatangani secara elektronik, dan mengunggah kartu izin praktik Indra sebagai pengganti surat kuasa khusus",
        C: "Memilih penanda tangan 'Kuasa', mengisi identitas Indra, menandatangani secara elektronik dengan sarana autentikasi milik Indra sendiri, dan mengunggah surat kuasa khusus sebagai lampiran SPT",
        D: "Memilih penanda tangan 'Pengurus', mengisi identitas direktur utama, lalu Indra menandatangani secara elektronik dengan sarana autentikasi miliknya sendiri dan mengunggah surat kuasa khusus"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "SPT badan ditandatangani pengurus atau kuasa (Pasal 4 ayat (2)–(3) UU KUP). Bila kuasa yang menandatangani, identitas penanda tangan adalah kuasa itu sendiri dengan sarana autentikasi miliknya, dan surat kuasa khusus wajib dilampirkan; kartu izin bukan penggantinya.",
        jejakHitung: [
          ["Penanda tangan sebenarnya", "Indra selaku kuasa → pilih 'Kuasa' dan isi identitas Indra"],
          ["Sarana tanda tangan", "Milik Indra sendiri; kredensial pengurus tidak boleh dipinjamkan"],
          ["Lampiran", "Surat kuasa khusus (Pasal 4 ayat (3) UU KUP), masa berlaku mencakup 28 April 2027"],
          ["Tenggat", "30 April 2027; data PPh 29 tidak memengaruhi isian ini"]
        ],
        mengapaSalah: {
          A: "Memakai kode otorisasi pengurus berarti penanda tangan yang tercatat bukan orang yang sebenarnya menandatangani; kuasa harus bertindak atas namanya sendiri.",
          B: "Pasal 4 ayat (3) UU KUP mewajibkan surat kuasa khusus dilampirkan; kartu izin praktik tidak menggantikannya.",
          D: "Identitas penanda tangan tidak sesuai dengan orang yang menandatangani; bila kuasa menandatangani, yang dipilih adalah 'Kuasa'."
        },
        jebakan: "Dua opsi melampirkan surat kuasa dan dua opsi memilih 'Kuasa'; hanya satu yang konsisten antara identitas penanda tangan, sarana tanda tangan, dan lampiran."
      },
      dasarHukum: [
        { pasal: "Pasal 4 ayat (2) dan (3) UU KUP", berlakuSejak: "2008-01-01" },
        { pasal: "PER-11/PJ/2025 — bentuk dan tata cara penyampaian SPT Tahunan PPh Badan di Coretax", berlakuSejak: "2025-05-22" },
        { pasal: "PMK 44/2026 Pasal 8 — surat kuasa khusus", berlakuSejak: "2026-07-06" }
      ],
      anggaranDetik: 150, verifikasi: "◐",
      peringatan: "Nama dan susunan isian bagian pernyataan pada SPT Tahunan PPh Badan di Coretax (PER-11/PJ/2025) belum dicocokkan dengan tampilan aplikasi; kewajiban melampirkan surat kuasa khusus (Pasal 4 ayat (3) UU KUP) terverifikasi."
    },
    {
      id: "E-088", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Bayu Saputra lulus USKP tingkat B dan sertifikatnya terbit 10 Maret 2025. Ia bekerja sebagai staf pajak di sebuah KKP sejak 2023 (pengalaman perpajakan lebih dari 2 tahun dalam 3 tahun terakhir) dan pada 2026 lulus ujian brevet C. Karena sibuk, ia baru menyiapkan permohonan izin praktik tingkat B pada April 2027 dengan memakai sertifikat USKP tersebut. Asosiasi tempatnya mendaftar telah menyelenggarakan ujian profesi sejak Desember 2026, tetapi Bayu belum mengikutinya. Menurut ketentuan peralihan PMK 55/2026, penilaian yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Dapat mengajukan izin B, karena sertifikat USKP diakui sebagai SKK yang berlaku 3 tahun sejak terbit (sampai 10 Maret 2028), dan pemegang sertifikat lama tidak wajib ujian profesi",
        B: "Dapat mengajukan izin B, karena pengakuan sertifikat USKP sebagai SKK yang berakhir 10 Maret 2027 cukup diperpanjang dengan bukti lulus brevet C",
        C: "Dapat mengajukan izin B, karena sertifikat USKP yang terbit sebelum PMK 55/2026 berlaku tanpa batas waktu, tetapi ia wajib lulus ujian profesi lebih dahulu",
        D: "Tidak dapat memakai sertifikat itu, karena pengakuannya sebagai SKK berakhir 10 Maret 2027 (paling lama 2 tahun); ia perlu SKK baru melalui UKP dan juga lulus ujian profesi yang sudah diselenggarakan"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "Pasal 60 huruf f PMK 55/2026 mengakui sertifikat USKP sebagai SKK paling lama 2 tahun sejak diterbitkan: 10 Maret 2025 + 2 tahun = 10 Maret 2027, sehingga pada April 2027 sudah tidak dapat dipakai. Kelonggaran tanpa ujian profesi hanya berlaku selama ujian profesi belum diselenggarakan; karena sudah ada sejak Desember 2026, Bayu juga wajib lulus ujian profesi.",
        jejakHitung: [
          ["Sertifikat USKP terbit", "10 Maret 2025"],
          ["Pengakuan sebagai SKK (paling lama 2 tahun)", "Sampai 10 Maret 2027"],
          ["Rencana permohonan", "April 2027 → pengakuan sudah berakhir"],
          ["Ujian profesi", "Sudah diselenggarakan sejak Desember 2026 → wajib lulus"],
          ["Kebutuhan", "SKK baru (UKP tingkat B) + lulus ujian profesi"]
        ],
        mengapaSalah: {
          A: "Masa 3 tahun adalah masa berlaku SKK hasil UKP; sertifikat USKP lama hanya diakui paling lama 2 tahun, dan pembebasan ujian profesi hanya selama ujian belum diselenggarakan.",
          B: "Tidak ada mekanisme perpanjangan pengakuan dengan brevet; brevet bukan SKK.",
          C: "Pengakuan sertifikat USKP sebagai SKK dibatasi paling lama 2 tahun sejak terbit."
        },
        jebakan: "Dua angka masa berlaku mudah tertukar: SKK hasil UKP 3 tahun, sertifikat USKP lama paling lama 2 tahun."
      },
      dasarHukum: [
        { pasal: "Pasal 60 huruf f PMK 55/2026 — sertifikat USKP diakui sebagai SKK paling lama 2 tahun", berlakuSejak: "2026-08-24" },
        { pasal: "Pasal 61 PMK 55/2026 — penyelenggaraan ujian profesi", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "E-089", topik: "E.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      stem: "Tari, lulusan S-1 perpajakan yang sudah 2 tahun bekerja sebagai staf pajak di perusahaan swasta, ingin berpraktik sebagai konsultan pajak tingkat B pada 2027. Urutan langkah yang tepat menurut PMK 55/2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Menjadi anggota asosiasi → mengikuti UKP tingkat B dan memperoleh SKK → mengajukan izin praktik → mengikuti ujian profesi asosiasi",
        B: "Mengikuti UKP tingkat B dan memperoleh SKK → lulus ujian profesi asosiasi → mengajukan izin praktik → menjadi anggota asosiasi terdaftar paling lambat 30 hari kerja sejak izin terbit",
        C: "Mengikuti UKP tingkat A lebih dahulu karena wajib berjenjang → mengikuti UKP tingkat B → mengajukan izin praktik → menjadi anggota asosiasi",
        D: "Mengikuti UKP tingkat B dan memperoleh SKK → mengajukan izin praktik → menjadi anggota asosiasi paling lambat 30 hari kerja → mengikuti ujian profesi paling lambat 1 tahun setelah izin terbit"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Sejak PMK 55/2026, izin mensyaratkan SKK hasil uji kompetensi dan kelulusan ujian profesi asosiasi; pengajuan tidak harus berjenjang. Keanggotaan asosiasi bukan syarat permohonan, tetapi wajib dipenuhi paling lambat 30 hari kerja setelah izin terbit.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Keanggotaan asosiasi bukan lagi syarat permohonan, dan ujian profesi harus dilalui sebelum izin, bukan sesudahnya.",
          C: "UKP dan izin tidak wajib berjenjang; pola A → B → C adalah rezim USKP lama.",
          D: "Lulus ujian profesi adalah syarat sebelum izin terbit, bukan kewajiban setelah berpraktik."
        },
        jebakan: "Posisi ujian profesi dan keanggotaan asosiasi dalam urutan adalah titik yang paling sering tertukar."
      },
      dasarHukum: [
        { pasal: "Pasal 4 PMK 55/2026 — tingkat izin tidak harus berjenjang", berlakuSejak: "2026-08-24" },
        { pasal: "PMK 55/2026 — syarat izin (SKK dan ujian profesi) dan kewajiban keanggotaan 30 hari kerja", berlakuSejak: "2026-08-24" }
      ],
      anggaranDetik: 90, verifikasi: "✅"
    }
  ],
  kartu: [
    { id: "KT-E-01", topik: "E.3", tipe: "angka", depan: "Kapan PMK 55/2026 berlaku dan apa yang dicabutnya?", belakang: "24 Agustus 2026; mencabut PMK 111/2014 dan PMK 175/2022", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "PMK 111/PMK.03/2014 jo. PMK 175/PMK.01/2022", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-02", topik: "E.3", tipe: "definisi", depan: "Cakupan izin praktik tingkat A?", belakang: "WP orang pribadi, kecuali yang berdomisili di negara mitra P3B", dasar: "Pasal 4 PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-03", topik: "E.3", tipe: "definisi", depan: "Cakupan izin praktik tingkat B?", belakang: "WP orang pribadi dan badan, kecuali PMA, BUT, dan OP/badan yang berdomisili di negara mitra P3B", dasar: "Pasal 4 ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-04", topik: "E.3", tipe: "definisi", depan: "Cakupan izin praktik tingkat C?", belakang: "Seluruh WP orang pribadi dan badan", dasar: "Pasal 4 PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-05", topik: "E.3", tipe: "angka", depan: "Syarat pengalaman kerja perpajakan untuk izin B dan C?", belakang: "B ≥ 1 tahun, C ≥ 2 tahun; akumulasi dalam 3 tahun terakhir", dasar: "PMK 55/2026 (syarat izin)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-06", topik: "E.3", tipe: "prosedur", depan: "Dua syarat kompetensi izin praktik sejak PMK 55/2026?", belakang: "SKK hasil uji kompetensi (UKP BPPK) dan lulus ujian profesi asosiasi", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "Sertifikat USKP berjenjang A→B→C dari KP3SKP", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-07", topik: "E.3", tipe: "angka", depan: "Masa berlaku SKK hasil UKP?", belakang: "3 tahun sejak terbit", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-08", topik: "E.3", tipe: "angka", depan: "Batas waktu konsultan bergabung dengan asosiasi?", belakang: "Paling lambat 30 hari kerja sejak izin terbit", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "Keanggotaan asosiasi sebagai syarat permohonan izin", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-09", topik: "E.3", tipe: "angka", depan: "Kewajiban PPL per tahun tingkat A/B/C?", belakang: "A 20 (16 terstruktur), B 30 (24), C 45 (36) SKP", dasar: "PMK 55/2026 (angka dari sumber sekunder; cek teks resmi)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-10", topik: "E.3", tipe: "angka", depan: "Batas dan isi laporan tahunan konsultan pajak?", belakang: "30 April tahun berikutnya; perincian jasa per klien, PPL, keanggotaan", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-11", topik: "E.3", tipe: "angka", depan: "Syarat lama praktik untuk naik tingkat izin?", belakang: "1 tahun untuk naik satu tingkat; 2 tahun untuk dua tingkat", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "Kenaikan izin mengikuti sertifikat USKP berjenjang A→B→C (PMK 111/2014 jo. PMK 175/2022)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-12", topik: "E.3", tipe: "prosedur", depan: "Apakah permohonan izin harus berjenjang A→B→C?", belakang: "Tidak; pemegang SKK C dapat langsung mengajukan izin C", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "USKP dan izin berjenjang (PMK 111/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-13", topik: "E.4", tipe: "definisi", depan: "Enam larangan Pasal 30 ayat (1) PMK 55/2026?", belakang: "Menyesatkan, rekayasa, imbalan ke petugas, gratifikasi tak wajar, pemerasan, rangkap jabatan", dasar: "Pasal 30 ayat (1) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-14", topik: "E.4", tipe: "angka", depan: "Pembekuan izin paling lama berapa, untuk pelanggaran apa?", belakang: "2 tahun: pelanggaran kode etik, keterangan menyesatkan, rekayasa", dasar: "Pasal 24 ayat (5); Pasal 30 ayat (3) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-15", topik: "E.4", tipe: "definisi", depan: "Akibat pencabutan izin menurut PMK 55/2026?", belakang: "Permanen: tidak dapat mengajukan izin baru; SKK ikut tidak berlaku", dasar: "Pasal 42 ayat (1)–(2) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-16", topik: "E.4", tipe: "prosedur", depan: "Sanksi memberi jasa di luar klasifikasi izin?", belakang: "Pembekuan izin selama 3 bulan", dasar: "Pasal 24 ayat (1) huruf a dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-17", topik: "E.4", tipe: "prosedur", depan: "Sanksi tidak bergabung asosiasi dalam 30 hari kerja?", belakang: "Pembekuan izin 3 bulan; tetap tidak bergabung → pencabutan", dasar: "Pasal 25 ayat (1), (3), dan (4) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-18", topik: "E.4", tipe: "pasal", depan: "Dasar pencabutan karena imbalan kepada petugas pajak atau pemerasan?", belakang: "Pasal 30 ayat (4) PMK 55/2026", dasar: "Pasal 30 ayat (1) huruf c, e dan ayat (4) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-19", topik: "E.4", tipe: "prosedur", depan: "Kapan pembekuan berulang berubah menjadi pencabutan?", belakang: "Sudah 3 kali dibekukan dalam 5 tahun terakhir dan tetap melanggar ketentuan yang bersanksi pembekuan", dasar: "Pasal 41 ayat (3)–(4) PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-20", topik: "E.5", tipe: "angka", depan: "PMK kuasa WP yang berlaku dan tanggal berlakunya?", belakang: "PMK 44/2026, berlaku 6 Juli 2026", dasar: "PMK 44/2026", berlakuSejak: "2026-07-06", menggantikan: "PMK 229/PMK.03/2014", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-21", topik: "E.5", tipe: "definisi", depan: "Tiga kategori kuasa WP menurut PMK 44/2026?", belakang: "Konsultan pajak; pihak lain ber-SKT (termasuk karyawan); keluarga", dasar: "PMK 44/2026 Pasal 2–3", berlakuSejak: "2026-07-06", menggantikan: "Konsultan pajak atau karyawan WP (PMK 229/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-22", topik: "E.5", tipe: "definisi", depan: "Siapa 'keluarga' yang boleh menjadi kuasa WP?", belakang: "Suami/istri; keluarga sedarah atau semenda sampai derajat kedua", dasar: "PMK 44/2026 Pasal 2–3", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-23", topik: "E.5", tipe: "prosedur", depan: "Isi wajib surat kuasa khusus menurut PMK 44/2026?", belakang: "Satu kuasa, hak/kewajiban tertentu yang dikuasakan, dan masa berlaku", dasar: "PMK 44/2026 Pasal 7 ayat (3) dan Pasal 8 ayat (1)", berlakuSejak: "2026-07-06", menggantikan: "Surat kuasa khusus tanpa kewajiban mencantumkan masa berlaku", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-24", topik: "E.5", tipe: "prosedur", depan: "Bolehkah kuasa melimpahkan kuasanya (substitusi)?", belakang: "Tidak; WP harus membuat surat kuasa khusus baru", dasar: "PMK 44/2026 Pasal 8", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-25", topik: "E.5", tipe: "definisi", depan: "Peristiwa yang mengakhiri kuasa WP?", belakang: "Masa berlaku habis, dicabut WP, izin/SKT dibekukan atau dicabut, kuasa dipidana", dasar: "PMK 44/2026", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-26", topik: "E.5", tipe: "pasal", depan: "Lampiran wajib SPT yang ditandatangani kuasa?", belakang: "Surat kuasa khusus", dasar: "Pasal 4 ayat (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-27", topik: "E.5", tipe: "pasal", depan: "Siapa yang dapat bertanggung jawab renteng atas utang pajak badan?", belakang: "Wakil/pengurus (Pasal 32 ayat (2) UU KUP), bukan kuasa", dasar: "Pasal 32 ayat (2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-28", topik: "E.5", tipe: "prosedur", depan: "Status surat kuasa khusus yang dibuat sebelum 6 Juli 2026?", belakang: "Tetap berlaku sampai hak/kewajiban yang dikuasakan selesai", dasar: "PMK 44/2026 (ketentuan peralihan)", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-29", topik: "E.6", tipe: "angka", depan: "Batas asosiasi menyelenggarakan ujian profesi?", belakang: "Paling lambat 31 Desember 2026", dasar: "Pasal 61 PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-30", topik: "E.6", tipe: "definisi", depan: "Materi ujian profesi asosiasi?", belakang: "Standar etik, standar praktik, dan sistem pengendalian mutu", dasar: "PMK 55/2026; Standar Profesi IKPI", berlakuSejak: "2026-08-24", menggantikan: "Mata ujian Kode Etik di USKP tingkat A", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-31", topik: "E.6", tipe: "prosedur", depan: "Status izin praktik yang terbit sebelum PMK 55/2026?", belakang: "Tetap berlaku; tidak perlu mengikuti UKP", dasar: "Pasal 60 huruf a PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-32", topik: "E.6", tipe: "definisi", depan: "Organ IKPI penegak Kode Etik sejak Kongres XII 2024?", belakang: "Dewan Kehormatan", dasar: "ART IKPI Pasal 35 ayat (1)", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-33", topik: "E.1", tipe: "pasal", depan: "Kapan konsultan wajib memberi keterangan tentang klien kepada DJP?", belakang: "Atas permintaan tertulis DJP untuk pemeriksaan, penagihan, atau penyidikan", dasar: "Pasal 35 ayat (1)–(2) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-34", topik: "E.1", tipe: "pasal", depan: "Dasar pidana bagi kuasa yang membantu tindak pidana perpajakan?", belakang: "Pasal 43 ayat (1) jo. Pasal 39/39A UU KUP", dasar: "Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-35", topik: "E.2", tipe: "definisi", depan: "Iklan menonjolkan diri atau klaim 'pasti menang' di media sosial?", belakang: "Melanggar Bab Publikasi Kode Etik IKPI", dasar: "Kode Etik IKPI Bab V", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-36", topik: "E.2", tipe: "prosedur", depan: "Menerima klien yang pindah dari rekan seprofesi?", belakang: "Boleh, dengan pemberitahuan kepada rekan sebelumnya; dilarang merebut klien", dasar: "Kode Etik IKPI Bab IV", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-37", topik: "E.6", tipe: "angka", depan: "Sampai kapan pemegang sertifikat brevet (bukan konsultan, tanpa SKT) masih dapat ditunjuk sebagai kuasa?", belakang: "Sampai 31 Desember 2026; sesudahnya harus konsultan pajak, Pihak Lain ber-SKT, atau keluarga", dasar: "Pasal 16 ayat (1) PMK 44/2026", berlakuSejak: "2026-07-06", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-38", topik: "E.6", tipe: "angka", depan: "Berapa lama sertifikat USKP lama diakui sebagai SKK?", belakang: "Paling lama 2 tahun sejak sertifikat diterbitkan", dasar: "Pasal 60 huruf f PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-39", topik: "E.1", tipe: "pasal", depan: "Pidana bagi yang sengaja tidak memberi keterangan yang diminta tertulis berdasarkan Pasal 35 UU KUP?", belakang: "Penjara paling lama 1 tahun dan denda paling banyak Rp25.000.000", dasar: "Pasal 41A UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-40", topik: "E.1", tipe: "pasal", depan: "Ancaman pidana Pasal 39 ayat (1) UU KUP, mis. sengaja menyampaikan SPT yang isinya tidak benar?", belakang: "Penjara 6 bulan–6 tahun; denda 2–4 kali pajak tidak/kurang dibayar", dasar: "Pasal 39 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-41", topik: "E.4", tipe: "pasal", depan: "Ancaman pidana faktur pajak atau bukti potong fiktif, juga bagi kuasa yang membantu?", belakang: "Penjara 2–6 tahun; denda 2–6 kali pajak dalam faktur/bukti", dasar: "Pasal 39A jo. Pasal 43 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-42", topik: "E.3", tipe: "definisi", depan: "Empat asosiasi konsultan pajak terdaftar?", belakang: "IKPI, AKP2I, Perkoppi, dan P3KPI", dasar: "PMK 55/2026 (asosiasi terdaftar)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-43", topik: "E.4", tipe: "definisi", depan: "Pelaksana pengawasan konsultan pajak, KKP, dan pihak lain kuasa WP menurut PMK 55/2026?", belakang: "DJSPSK Kementerian Keuangan, melalui pemeriksaan reguler dan khusus", dasar: "PMK 55/2026 (pembinaan dan pengawasan)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-44", topik: "E.3", tipe: "prosedur", depan: "Syarat status pekerjaan pemohon izin konsultan pajak?", belakang: "Tidak terikat pekerjaan/jabatan pada pemerintah, lembaga negara, BUMN, atau BUMD", dasar: "PMK 55/2026 (syarat izin)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-45", topik: "E.3", tipe: "definisi", depan: "Syarat kewarganegaraan dan domisili pemohon izin konsultan pajak?", belakang: "WNI yang berdomisili di Indonesia", dasar: "PMK 55/2026 (syarat izin)", berlakuSejak: "2026-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-46", topik: "E.1", tipe: "pasal", depan: "Kode Etik IKPI yang berlaku sejak Kongres XII 2024?", belakang: "SK 07/KONGRES XII/IKPI/2024 (Kongres XII Bali, Agustus 2024)", dasar: "SK 07/KONGRES XII/IKPI/2024", berlakuSejak: "2024-08-20", menggantikan: "Kode Etik IKPI hasil Kongres XI Malang 2019", dekTambahan: [] },
    { id: "KT-E-47", topik: "E.6", tipe: "prosedur", depan: "Jenjang sanksi organisasi oleh Dewan Kehormatan IKPI?", belakang: "Teguran tertulis, peringatan tertulis, pemberhentian sementara, pemberhentian tetap", dasar: "Kode Etik IKPI Bab VII; ART IKPI Pasal 35 ayat (1)", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-48", topik: "E.6", tipe: "definisi", depan: "Bagian Standar Profesi Konsultan Pajak IKPI?", belakang: "Standar umum, pelaksanaan penugasan, pelaporan, dan kewajiban PPL", dasar: "Standar Profesi IKPI (SK 07/KONGRES XII/IKPI/2024)", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-49", topik: "E.2", tipe: "pasal", depan: "Bab Kode Etik IKPI tentang klien, rekan seprofesi, dan publikasi?", belakang: "Bab III klien, Bab IV rekan seprofesi, Bab V publikasi", dasar: "Kode Etik IKPI (struktur bab)", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-50", topik: "E.1", tipe: "prosedur", depan: "Apakah kewajiban rahasia klien berakhir saat perikatan selesai?", belakang: "Tidak; dibuka hanya karena kewajiban undang-undang atau persetujuan klien", dasar: "Kode Etik IKPI Bab II; Pasal 35 UU KUP", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-51", topik: "E.5", tipe: "pasal", depan: "Syarat kuasa hukum di Pengadilan Pajak?", belakang: "WNI, ahli perpajakan, syarat Menteri; keluarga s.d. derajat kedua, pegawai, pengampu dikecualikan", dasar: "Pasal 34 UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-52", topik: "E.5", tipe: "prosedur", depan: "Apakah penunjukan atau pergantian kuasa menggeser tenggat keberatan atau banding?", belakang: "Tidak; tenggat tetap dihitung sejak SKP dikirim atau keputusan diterima", dasar: "Pasal 25 ayat (3) UU KUP; Pasal 35 ayat (2) UU 14/2002", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-53", topik: "E.3", tipe: "angka", depan: "PPh atas imbalan konsultan pajak orang pribadi (bukan pegawai)?", belakang: "PPh 21: tarif Pasal 17 × 50% bruto per pembayaran; BP21", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: "Pembedaan berkesinambungan/tidak berkesinambungan dengan penghitungan kumulatif (PER-16/PJ/2016)", dekTambahan: [] },
    { id: "KT-E-54", topik: "E.3", tipe: "angka", depan: "PPh atas imbalan jasa konsultan yang dibayar kepada KKP berbentuk badan atau persekutuan?", belakang: "PPh 23 sebesar 2% dari bruto tanpa PPN; BPPU", dasar: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-55", topik: "E.1", tipe: "prosedur", depan: "Batas pengungkapan ketidakbenaran pengisian SPT saat pemeriksaan?", belakang: "Sebelum SPHP disampaikan; bunga (acuan + 10%)/12; pemeriksaan tetap berlanjut", dasar: "Pasal 8 ayat (4) UU KUP s.t.d.t.d. UU 7/2021 (batas SPHP); bunga Pasal 8 ayat (5) dengan uplift 10% sejak UU 11/2020 (2 November 2020)", berlakuSejak: "2021-10-29", menggantikan: "Sepanjang SKP belum diterbitkan (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-E-56", topik: "E.6", tipe: "prosedur", depan: "Urutan menjadi konsultan pajak berizin sejak PMK 55/2026?", belakang: "SKK (UKP) → ujian profesi → izin → asosiasi ≤ 30 hari kerja", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", menggantikan: "USKP berjenjang A→B→C dan keanggotaan asosiasi sebagai syarat permohonan", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-E-57", topik: "E.5", tipe: "angka", depan: "Batas mengajukan banding dan jangka waktu putusan Pengadilan Pajak?", belakang: "Banding 3 bulan sejak keputusan keberatan diterima; putusan 12 bulan sejak surat banding diterima", dasar: "Pasal 35 ayat (2) dan Pasal 81 UU 14/2002", berlakuSejak: "2002-04-12", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-58", topik: "E.5", tipe: "angka", depan: "Denda bila keberatan atau banding ditolak/dikabulkan sebagian?", belakang: "Keberatan 30% (gugur bila banding); banding 60%; atas pokok dikurangi pembayaran pra-keberatan", dasar: "Pasal 25 ayat (9) dan Pasal 27 ayat (5d) UU KUP", berlakuSejak: "2021-10-29", menggantikan: "Denda keberatan 50% dan banding 100% (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-E-59", topik: "E.2", tipe: "prosedur", depan: "Klien meminta konsultan menjamin keberatannya dikabulkan?", belakang: "Tolak; dilarang menjanjikan hasil atau kepastian keberhasilan", dasar: "Kode Etik IKPI Bab III", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] },
    { id: "KT-E-60", topik: "E.2", tipe: "definisi", depan: "Bolehkah konsultan menulis artikel edukasi perpajakan di media?", belakang: "Boleh, bila faktual, tidak menonjolkan diri, dan tidak membuka rahasia klien", dasar: "Kode Etik IKPI Bab V (Publikasi)", berlakuSejak: "2024-08-20", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-E-01", judul: "Peta kepatuhan profesi KKP Wibawa & Rekan", topik: "E.3", estimasiMenit: 15,
      narasi: "KKP Wibawa & Rekan di Yogyakarta memiliki tiga konsultan pajak. Sekar memperoleh izin tingkat A yang terbit Senin, 7 September 2026; tidak ada hari libur nasional atau cuti bersama antara 7 September dan 30 Oktober 2026, dan hari kerja adalah Senin–Jumat. Yoga memegang izin tingkat B sejak 2022 dan lulus UKP tingkat C dengan SKK C terbit 19 November 2026. Hendra memegang izin tingkat C sejak 2019. Rekap PPL tahun 2027: Sekar 21 SKP (15 terstruktur), Yoga 29 SKP (26 terstruktur), Hendra 47 SKP (38 terstruktur). Pada Januari 2028 KKP menerima permintaan jasa dari PT Sumber Rejeki, perusahaan PMA, dan partner ingin menugaskan Yoga. Partner juga menyusun jadwal laporan tahunan ketiga konsultan.",
      data: [["Izin Sekar (A) terbit", "Senin, 7 September 2026"], ["Batas gabung asosiasi", "30 hari kerja sejak izin terbit"], ["PPL A / B / C", "20 (16) / 30 (24) / 45 (36) SKP"], ["PPL 2027 Sekar", "21 SKP (15 terstruktur)"], ["PPL 2027 Yoga", "29 SKP (26 terstruktur)"], ["PPL 2027 Hendra", "47 SKP (38 terstruktur)"], ["Yoga", "Izin B sejak 2022; SKK C terbit 19 November 2026"], ["Klien baru", "PT Sumber Rejeki (PMA), Januari 2028"]],
      langkah: [
        { no: 1, pertanyaan: "Tanggal berapa (angka hari) pada bulan Oktober 2026 batas akhir Sekar wajib menjadi anggota asosiasi?", tipe: "angka", jawaban: 19, toleransi: 0,
          petunjuk: ["Hitung 30 hari kerja mulai hari kerja berikutnya setelah izin terbit (Selasa, 8 September 2026).", "8–11 September = 4 hari; 14 September – 16 Oktober = 5 minggu = 25 hari; kumulatif 29.", "Hari kerja ke-30 = Senin, 19 Oktober 2026 → jawaban 19."],
          penjelasan: "PMK 55/2026 mewajibkan konsultan menjadi anggota asosiasi terdaftar paling lambat 30 hari kerja sejak izin terbit; bila tidak, izin dibekukan 3 bulan lalu dicabut." },
        { no: 2, pertanyaan: "Berapa SKP terstruktur yang masih kurang bagi Sekar (izin A) untuk tahun 2027?", tipe: "angka", jawaban: 1, toleransi: 0,
          petunjuk: ["Tingkat A: total 20 SKP, sekurang-kurangnya 16 terstruktur.", "Total Sekar 21 ≥ 20 (terpenuhi); terstruktur 15.", "16 − 15 = 1 SKP terstruktur."],
          penjelasan: "Dua syarat bersifat kumulatif: total SKP dan minimal SKP terstruktur. Total yang melebihi tidak menutup kekurangan komponen terstruktur." },
        { no: 3, pertanyaan: "Berapa SKP total yang masih kurang bagi Yoga (izin B) untuk tahun 2027?", tipe: "angka", jawaban: 1, toleransi: 0,
          petunjuk: ["Tingkat B: total 30 SKP, sekurang-kurangnya 24 terstruktur.", "Terstruktur Yoga 26 ≥ 24 (terpenuhi).", "Total 29 < 30 → kurang 1 SKP."],
          penjelasan: "Kebalikan kasus Sekar: komponen terstruktur cukup, tetapi total belum mencapai 30 SKP." },
        { no: 4, pertanyaan: "Bagaimana status PPL Hendra (izin C) untuk tahun 2027?", tipe: "pilihan",
          opsi: { A: "Memenuhi: total 47 ≥ 45 dan terstruktur 38 ≥ 36", B: "Belum memenuhi: terstruktur harus 45 SKP", C: "Belum memenuhi: total wajib 50 SKP", D: "Tidak wajib PPL karena izin terbit sebelum PMK 55/2026" }, jawaban: "A",
          petunjuk: ["Tingkat C: total 45 SKP, sekurang-kurangnya 36 terstruktur.", "Bandingkan 47 dengan 45 dan 38 dengan 36.", "Keduanya terpenuhi → A."],
          penjelasan: "Izin lama tetap berlaku (Pasal 60 huruf a), tetapi pemegangnya tetap tunduk pada kewajiban PPL yang berlaku." },
        { no: 5, pertanyaan: "Pengaturan yang tepat untuk penugasan PT Sumber Rejeki (PMA) pada Januari 2028?", tipe: "pilihan",
          opsi: { A: "Yoga langsung menangani karena sudah memegang SKK C", B: "Yoga dapat mengajukan kenaikan ke izin C (praktik izin B ≥ 1 tahun dan SKK C masih berlaku); sebelum izin C terbit, PT Sumber Rejeki ditangani Hendra", C: "Yoga harus menunggu 2 tahun sejak SKK C terbit sebelum mengajukan izin C", D: "PT Sumber Rejeki boleh ditangani Sekar karena PMA dimiliki orang pribadi asing" }, jawaban: "B",
          petunjuk: ["PMA hanya dapat ditangani pemegang izin C.", "Naik satu tingkat (B ke C) memerlukan praktik minimal 1 tahun plus SKK tingkat tujuan; SKK C berlaku sampai 19 November 2029.", "SKK bukan izin; selama izin C belum terbit, Hendra yang menangani → B."],
          penjelasan: "SKK membuktikan kompetensi, tetapi kewenangan praktik lahir dari izin. Selama izin Yoga masih B, klien PMA ditangani konsultan izin C." },
        { no: 6, pertanyaan: "Batas dan isi laporan tahunan ketiga konsultan untuk kegiatan tahun 2027?", tipe: "pilihan",
          opsi: { A: "31 Maret 2028, cukup jumlah klien", B: "30 April 2028, memuat perincian jasa per klien, PPL, dan keanggotaan asosiasi", C: "31 Januari 2028, memuat daftar bukti potong yang diterbitkan", D: "30 April 2028, cukup diserahkan oleh partner KKP untuk semua konsultan dalam satu ringkasan total imbalan" }, jawaban: "B",
          petunjuk: ["Laporan tahunan konsultan berbeda tenggatnya dari SPT Tahunan OP.", "Batasnya 30 April tahun berikutnya.", "Isinya perincian jasa per klien, PPL, keanggotaan → B."],
          penjelasan: "PMK 55/2026 memperketat isi laporan tahunan dengan perincian jasa per klien; laporan disampaikan setiap konsultan, paling lambat 30 April tahun berikutnya." }
      ],
      kesimpulan: "Sekar wajib bergabung dengan asosiasi paling lambat 19 Oktober 2026. Untuk PPL 2027, Sekar kurang 1 SKP terstruktur, Yoga kurang 1 SKP total, dan Hendra memenuhi. Klien PMA ditangani Hendra sampai Yoga memperoleh izin C, dan seluruh laporan tahunan 2027 disampaikan paling lambat 30 April 2028 dengan perincian jasa per klien.",
      kalkulatorRef: null
    },
    {
      id: "K-E-02", judul: "Dilema etika dan kuasa: permintaan direksi PT Mitra Logam", topik: "E.4", estimasiMenit: 15,
      narasi: "Konsultan Pajak Arman (izin B, anggota IKPI) adalah kuasa PT Mitra Logam (badan dalam negeri, bukan PMA) dalam pemeriksaan PPh Badan Tahun Pajak 2025 berdasarkan surat kuasa khusus yang berlaku 1 September 2026 – 31 Mei 2027. Dalam pemeriksaan, direktur meminta Arman: (a) membuat nota pembelian bahan baku Rp1.500.000.000 dari pemasok fiktif dengan tanggal mundur; dan (b) bila cara pertama gagal, menitipkan Rp75.000.000 kepada ketua tim pemeriksa. Arman menolak keduanya. Direktur lalu mencabut kuasa Arman secara tertulis pada 10 Januari 2027 dan meminta Konsultan Pajak Wina (izin A) melanjutkan. Wina menghubungi Arman, meminta kertas kerja dan cerita tentang 'kelemahan' klien.",
      data: [["Kuasa awal", "Arman, izin B"], ["Masa berlaku surat kuasa", "1 September 2026 – 31 Mei 2027"], ["Permintaan (a)", "Nota pembelian fiktif Rp1,5 miliar, tanggal mundur"], ["Permintaan (b)", "Titip Rp75 juta untuk ketua tim pemeriksa"], ["Pencabutan kuasa", "10 Januari 2027, tertulis oleh WP"], ["Calon pengganti", "Wina, izin A"]],
      langkah: [
        { no: 1, pertanyaan: "Permintaan (a) termasuk larangan Pasal 30 ayat (1) PMK 55/2026 huruf apa?", tipe: "pilihan",
          opsi: { A: "Huruf b — menerima permintaan rekayasa yang bertentangan dengan ketentuan", B: "Huruf c — menawarkan imbalan kepada petugas pajak", C: "Huruf f — rangkap jabatan", D: "Huruf d — menerima gratifikasi tidak wajar" }, jawaban: "A",
          petunjuk: ["Nota dari pemasok fiktif bertanggal mundur adalah dokumen rekayasa.", "Tidak ada uang yang mengalir ke petugas dalam permintaan (a).", "Larangan yang tepat: menerima permintaan rekayasa → A."],
          penjelasan: "Bila diserahkan kepada pemeriksa, nota itu juga keterangan menyesatkan (huruf a) dan dapat dipidana menurut Pasal 39 ayat (1) huruf f jo. Pasal 43 ayat (1) UU KUP." },
        { no: 2, pertanyaan: "Jika Arman menuruti permintaan (a), izinnya dapat dibekukan paling lama berapa tahun?", tipe: "angka", jawaban: 2, toleransi: 0,
          petunjuk: ["Lihat Pasal 30 ayat (3) PMK 55/2026.", "Keterangan menyesatkan dan rekayasa dikenai pembekuan, bukan pencabutan.", "Paling lama 2 tahun."],
          penjelasan: "Pembekuan paling lama 2 tahun berlaku untuk keterangan menyesatkan dan rekayasa, serta pelanggaran kode etik asosiasi (Pasal 24 ayat (5))." },
        { no: 3, pertanyaan: "Jika Arman menuruti permintaan (b), sanksi izinnya adalah ...", tipe: "pilihan",
          opsi: { A: "Peringatan", B: "Pembekuan paling lama 2 tahun", C: "Pembekuan 3 bulan", D: "Pencabutan permanen; tidak dapat mengajukan izin baru dan SKK tidak berlaku" }, jawaban: "D",
          petunjuk: ["Menitipkan uang kepada ketua tim pemeriksa = menawarkan imbalan kepada petugas pajak.", "Larangan huruf c dikenai sanksi Pasal 30 ayat (4).", "Pencabutan bersifat permanen → D."],
          penjelasan: "Asal uang dari klien tidak mengubah peran konsultan sebagai pihak yang menyerahkan imbalan kepada petugas." },
        { no: 4, pertanyaan: "Bagaimana status kuasa Arman setelah 10 Januari 2027?", tipe: "pilihan",
          opsi: { A: "Tetap berlaku sampai 31 Mei 2027", B: "Berakhir karena dicabut WP, walaupun masa berlaku belum habis", C: "Berakhir hanya bila DJP menyetujui pencabutan", D: "Beralih otomatis kepada konsultan yang ditunjuk direktur" }, jawaban: "B",
          petunjuk: ["PMK 44/2026 mengatur peristiwa yang mengakhiri kuasa.", "Pencabutan oleh WP termasuk salah satunya.", "Masa berlaku tidak lagi relevan → B."],
          penjelasan: "Kuasa berakhir karena masa berlaku habis, dicabut WP, izin/SKT dibekukan atau dicabut, atau kuasa dipidana; akses Coretax sebagai kuasa ikut berakhir." },
        { no: 5, pertanyaan: "Dapatkah Wina (izin A) menjadi kuasa PT Mitra Logam?", tipe: "pilihan",
          opsi: { A: "Dapat, karena perusahaan bukan PMA", B: "Dapat, bila Arman membuat surat substitusi kepadanya", C: "Tidak dapat, karena izin A hanya untuk WP orang pribadi; WP perlu menunjuk konsultan izin B/C atau pihak lain ber-SKT dengan surat kuasa khusus baru", D: "Tidak dapat, karena konsultan baru wajib menunggu 3 bulan setelah kuasa lama dicabut" }, jawaban: "C",
          petunjuk: ["Periksa cakupan izin A dalam Pasal 4 PMK 55/2026.", "PT adalah WP badan.", "Substitusi juga dilarang → C."],
          penjelasan: "Izin A tidak mencakup WP badan, dan kuasa tidak dapat dilimpahkan; WP sendiri menunjuk kuasa baru yang memenuhi syarat." },
        { no: 6, pertanyaan: "Sikap Arman atas permintaan Wina tentang kertas kerja dan 'kelemahan' klien?", tipe: "pilihan",
          opsi: { A: "Menceritakan semuanya karena Wina akan menjadi konsultan klien yang sama", B: "Tetap merahasiakan informasi klien; dokumen milik klien diserahkan kepada klien atau atas persetujuan tertulis klien, dan komunikasi antarrekan dilakukan secara profesional tanpa membuka rahasia", C: "Menolak menyerahkan apa pun kepada klien sampai sisa imbalan dibayar lunas", D: "Melaporkan permintaan rekayasa direktur kepada pemeriksa agar Wina tidak terjebak" }, jawaban: "B",
          petunjuk: ["Kewajiban kerahasiaan tetap melekat setelah kuasa dicabut.", "Pembukaan rahasia hanya karena kewajiban undang-undang (mis. permintaan tertulis DJP) atau persetujuan klien.", "Pilih yang menjaga rahasia dan menghormati hak klien → B."],
          penjelasan: "Kode Etik menuntut kerahasiaan berlanjut dan hubungan antarrekan yang profesional; Pasal 35 UU KUP hanya membuka rahasia atas permintaan tertulis DJP untuk pemeriksaan, penagihan, atau penyidikan." }
      ],
      kesimpulan: "Permintaan (a) adalah rekayasa yang diancam pembekuan paling lama 2 tahun, sedangkan permintaan (b) adalah imbalan kepada petugas yang diancam pencabutan permanen; Arman benar menolak keduanya. Pencabutan kuasa oleh WP mengakhiri kuasa Arman, Wina (izin A) tidak dapat mewakili PT, dan Arman tetap wajib merahasiakan informasi klien.",
      kalkulatorRef: null
    },
    {
      id: "K-E-03", judul: "Imbalan, bukti potong, PPL, dan laporan tahunan KKP Sinaga, Lubis & Rekan", topik: "E.3", estimasiMenit: 18,
      narasi: "KKP Sinaga, Lubis & Rekan di Medan berbentuk persekutuan perdata yang terdaftar sebagai Wajib Pajak badan (ber-NPWP). Partnernya Togar Sinaga (izin C) dan Maria Lubis (izin B); stafnya antara lain Andre, sarjana akuntansi yang belum memiliki SKK maupun SKT. Pada 20 Oktober 2026 PT Deli Serdang Agro (badan dalam negeri, bukan PMA) membayar imbalan pendampingan pemeriksaan Rp120.000.000 (belum termasuk PPN) kepada KKP. Rekap PPL 2026: Togar 41 SKP (33 terstruktur), Maria 32 SKP (22 terstruktur). PT Deli Serdang Agro meminta Andre mewakili perusahaan dalam pertemuan klarifikasi SP2DK pada 11 Januari 2027. Partner juga menyusun jadwal laporan tahunan konsultan untuk kegiatan 2026. Dalam kalender soal ini, 15 November 2026 jatuh pada hari Minggu.",
      data: [["Bentuk KKP", "Persekutuan, WP badan ber-NPWP"], ["Imbalan PT Deli Serdang Agro", "Rp120.000.000 (belum PPN), dibayar 20 Oktober 2026"], ["Togar (izin C)", "PPL 2026: 41 SKP (33 terstruktur)"], ["Maria (izin B)", "PPL 2026: 32 SKP (22 terstruktur)"], ["PPL A / B / C", "20 (16) / 30 (24) / 45 (36) SKP"], ["Andre", "Staf KKP, tanpa SKK dan tanpa SKT"], ["Pertemuan SP2DK", "11 Januari 2027"], ["15 November 2026", "Hari Minggu"]],
      langkah: [
        { no: 1, pertanyaan: "Berapa PPh yang wajib dipotong PT Deli Serdang Agro atas imbalan yang dibayar kepada KKP (Rp)?", tipe: "angka", jawaban: 2400000, toleransi: 0,
          petunjuk: ["KKP berbentuk persekutuan adalah Wajib Pajak badan, sehingga imbalan jasa konsultan kepadanya objek PPh Pasal 23.", "Tarif 2% dari jumlah bruto, tidak termasuk PPN.", "2% × Rp120.000.000 = Rp2.400.000."],
          penjelasan: "Jasa konsultan termasuk objek PPh Pasal 23 tarif 2% (Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015), dihitung dari bruto tanpa PPN." },
        { no: 2, pertanyaan: "Seandainya imbalan yang sama dibayar kepada Togar sebagai konsultan orang pribadi bukan pegawai yang ber-NPWP (KKP perseorangan), berapa PPh Pasal 21 yang dipotong (Rp)?", tipe: "angka", jawaban: 3000000, toleransi: 0,
          petunjuk: ["Bukan pegawai: DPP = 50% × bruto, dikenai tarif Pasal 17 per pembayaran.", "DPP = 50% × Rp120.000.000 = Rp60.000.000, tepat di batas lapisan pertama.", "5% × Rp60.000.000 = Rp3.000.000."],
          penjelasan: "Bentuk hukum penerima menentukan pasal: persekutuan/badan → PPh 23 2%; orang pribadi bukan pegawai → PPh 21 dengan DPP 50% (PMK 168/2023)." },
        { no: 3, pertanyaan: "Dokumen dan kalender administrasi atas pemotongan pada langkah 1?", tipe: "pilihan",
          opsi: { A: "BPPU; dilaporkan dalam SPT Masa PPh Unifikasi Masa Oktober 2026; setor paling lambat 16 November 2026 dan lapor paling lambat 20 November 2026", B: "BP21; dilaporkan dalam SPT Masa PPh 21/26 Masa Oktober 2026; setor 16 November dan lapor 20 November 2026", C: "BPPU; setor paling lambat 10 November 2026 dan lapor paling lambat 20 November 2026", D: "Faktur pajak; dilaporkan dalam SPT Masa PPN Masa Oktober 2026 paling lambat 30 November 2026" }, jawaban: "A",
          petunjuk: ["PPh 23 dibuktikan dengan bukti potong unifikasi (BPPU) dan dilaporkan dalam SPT Masa PPh Unifikasi.", "Setor tanggal 15 bulan berikutnya; bila jatuh pada hari libur, bergeser ke hari kerja berikutnya (15 November 2026 hari Minggu).", "Lapor 20 hari setelah masa pajak berakhir → A."],
          penjelasan: "PMK 81/2024 menyeragamkan penyetoran pajak masa pada tanggal 15 dan pelaporan SPT Masa PPh paling lambat 20 hari setelah masa pajak berakhir; tanggal 10 adalah ketentuan lama." },
        { no: 4, pertanyaan: "Syarat agar Andre dapat mewakili PT Deli Serdang Agro dalam klarifikasi SP2DK pada 11 Januari 2027?", tipe: "pilihan",
          opsi: { A: "Cukup surat tugas dari Togar sebagai kuasa substitusi", B: "Andre harus memiliki SKT dan, mulai 1 Januari 2027, juga SKK, serta menerima surat kuasa khusus dari PT Deli Serdang Agro yang menyebut hak tertentu dan masa berlaku", C: "Andre dapat mewakili tanpa dokumen apa pun karena ia staf KKP yang ditunjuk klien", D: "Andre dapat mewakili sebagai kategori keluarga bila direktur PT Deli Serdang Agro adalah pamannya" }, jawaban: "B",
          petunjuk: ["Andre bukan konsultan pajak dan bukan keluarga WP, sehingga masuk kategori pihak lain.", "Pihak lain wajib ber-SKT; mulai 1 Januari 2027 penunjukan pihak lain juga disertai SKK (◐ ketentuan peralihan belum dicek).", "Kuasa ditunjuk WP sendiri dengan surat kuasa khusus; substitusi dilarang → B."],
          penjelasan: "PMK 44/2026 mengenal tiga kategori kuasa; pihak lain wajib ber-SKT dan, sejak berakhirnya masa transisi PMK 55/2026, juga SKK. Paman adalah keluarga derajat ketiga sehingga berada di luar kategori keluarga." },
        { no: 5, pertanyaan: "Berapa SKP total yang masih kurang bagi Togar (izin C) untuk tahun 2026?", tipe: "angka", jawaban: 4, toleransi: 0,
          petunjuk: ["Tingkat C: total 45 SKP, sekurang-kurangnya 36 terstruktur.", "Total Togar 41 → kurang 45 − 41.", "Kurang 4 SKP total (terstrukturnya juga kurang 3)."],
          penjelasan: "Kedua syarat PPL bersifat kumulatif; Togar belum memenuhi baik total maupun komponen terstruktur." },
        { no: 6, pertanyaan: "Berapa SKP terstruktur yang masih kurang bagi Maria (izin B) untuk tahun 2026?", tipe: "angka", jawaban: 2, toleransi: 0,
          petunjuk: ["Tingkat B: total 30 SKP, sekurang-kurangnya 24 terstruktur.", "Total Maria 32 sudah memenuhi; terstruktur 22.", "24 − 22 = 2 SKP terstruktur."],
          penjelasan: "Kelebihan total SKP tidak menutup kekurangan komponen terstruktur." },
        { no: 7, pertanyaan: "Siapa yang menyampaikan laporan tahunan konsultan untuk kegiatan 2026 dan kapan batasnya?", tipe: "pilihan",
          opsi: { A: "Cukup satu laporan atas nama KKP paling lambat 31 Maret 2027", B: "Togar dan Maria masing-masing paling lambat 30 April 2027, memuat perincian jasa per klien, PPL, dan keanggotaan asosiasi", C: "Togar dan Maria masing-masing paling lambat 30 April 2027, cukup berisi total imbalan KKP", D: "Hanya Togar sebagai partner pemegang izin tertinggi, paling lambat 30 Juni 2027" }, jawaban: "B",
          petunjuk: ["Kewajiban laporan tahunan melekat pada setiap konsultan pajak berizin.", "Batasnya 30 April tahun berikutnya.", "Isinya perincian jasa per klien, PPL, dan keanggotaan → B."],
          penjelasan: "PMK 55/2026 mewajibkan laporan tahunan setiap konsultan paling lambat 30 April tahun berikutnya dengan perincian jasa per klien." }
      ],
      kesimpulan: "Imbalan kepada KKP berbentuk persekutuan dipotong PPh 23 2% (Rp2.400.000) dengan BPPU, disetor 16 November 2026 dan dilaporkan 20 November 2026; bila dibayar kepada konsultan orang pribadi, yang dipotong PPh 21 dengan DPP 50% (Rp3.000.000). Andre baru dapat mewakili klien dengan SKT, SKK, dan surat kuasa khusus dari klien. Untuk PPL 2026 Togar kurang 4 SKP total dan Maria kurang 2 SKP terstruktur, dan keduanya menyampaikan laporan tahunan masing-masing paling lambat 30 April 2027.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-E-04", judul: "Dari temuan di tengah pemeriksaan sampai keberatan: integritas dan tenggat kuasa CV Mentari Abadi", topik: "E.5", estimasiMenit: 20,
      narasi: "CV Mentari Abadi (WP badan dalam negeri, bukan PMA) diperiksa lengkap atas PPh Badan Tahun Pajak 2025; SP2 disampaikan 1 September 2026. Konsultan Pajak Rahmat Hidayat (izin B) menjadi kuasanya berdasarkan surat kuasa khusus 'mewakili dalam pemeriksaan PPh Badan Tahun Pajak 2025' yang berlaku 1 September 2026 – 28 Februari 2027. Pada 2 Desember 2026, sebelum SPHP disampaikan, Rahmat menemukan penghasilan sewa alat berat Rp300.000.000 yang tidak dilaporkan, dan direktur menolak mengungkapkannya. SPHP diterima Senin, 18 Januari 2027; untuk kasus ini, tidak ada hari libur nasional antara 18 Januari dan 31 Januari 2027, hari kerja Senin–Jumat, dan hari kerja pertama adalah hari kerja berikutnya setelah SPHP diterima. SKPKB dikirim 8 Maret 2027 dengan pokok kurang bayar Rp640.000.000; dalam pembahasan akhir hasil pemeriksaan, CV menyetujui pokok Rp100.000.000. CV ingin mengajukan keberatan atas sisa koreksi melalui Rahmat.",
      data: [["SP2 pemeriksaan lengkap", "1 September 2026"], ["Surat kuasa Rahmat", "Pemeriksaan PPh Badan 2025; 1 Sep 2026 – 28 Feb 2027"], ["Temuan 2 Desember 2026", "Sewa alat berat Rp300.000.000 tidak dilaporkan"], ["SPHP diterima", "Senin, 18 Januari 2027"], ["SKPKB dikirim", "8 Maret 2027"], ["Pokok SKPKB", "Rp640.000.000"], ["Pokok disetujui saat pembahasan akhir", "Rp100.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Jalan sah yang seharusnya disarankan Rahmat atas temuan 2 Desember 2026?", tipe: "pilihan",
          opsi: { A: "Pembetulan SPT Tahunan berdasarkan Pasal 8 ayat (1) UU KUP", B: "Pengungkapan ketidakbenaran pengisian SPT dalam laporan tersendiri sebelum SPHP disampaikan, dengan melunasi kekurangan pajak dan bunganya lebih dahulu; pemeriksaan tetap berjalan", C: "Menunggu SKPKB lalu mengajukan keberatan atas seluruh koreksi", D: "Melaporkan temuan langsung kepada pemeriksa tanpa sepengetahuan klien" }, jawaban: "B",
          petunjuk: ["Pembetulan hanya dapat dilakukan sepanjang belum ada tindakan pemeriksaan.", "Selama pemeriksaan, Pasal 8 ayat (4) membuka pengungkapan ketidakbenaran sampai SPHP disampaikan.", "Pengungkapan tidak menghentikan pemeriksaan → B."],
          penjelasan: "Batas pengungkapan sejak UU HPP adalah sebelum SPHP disampaikan (dahulu sebelum SKP terbit); bunganya memakai uplift 10% sejak UU Cipta Kerja (dahulu kenaikan 50%)." },
        { no: 2, pertanyaan: "Direktur tetap menolak mengungkapkan. Sikap Rahmat yang tepat?", tipe: "pilihan",
          opsi: { A: "Tetap mewakili dan menyangkal adanya penghasilan sewa bila pemeriksa bertanya", B: "Tidak memberikan keterangan yang menyesatkan, tetap menjaga rahasia klien terhadap pihak lain, dan dapat mengundurkan diri sebagai kuasa", C: "Segera melaporkan temuan kepada KPP karena kewajiban kerahasiaan gugur bila klien menolak membetulkan", D: "Menahan dokumen klien sampai direktur bersedia mengungkapkan" }, jawaban: "B",
          petunjuk: ["Pasal 30 ayat (1) huruf a PMK 55/2026 melarang keterangan menyesatkan.", "Kerahasiaan hanya dibuka karena kewajiban undang-undang (mis. permintaan tertulis DJP).", "Konsultan boleh mundur bila klien menolak jalan yang sah → B."],
          penjelasan: "Integritas dan kerahasiaan berjalan bersama: Rahmat tidak boleh berbohong untuk klien, tetapi juga tidak membuka rahasia klien tanpa dasar hukum." },
        { no: 3, pertanyaan: "Tanggal berapa (angka hari pada Januari 2027) batas akhir tanggapan tertulis atas SPHP?", tipe: "angka", jawaban: 25, toleransi: 0,
          petunjuk: ["PMK 15/2025: tanggapan SPHP paling lama 5 hari kerja sejak SPHP diterima.", "Hari kerja ke-1 s.d. ke-4: Selasa 19 – Jumat 22 Januari 2027.", "Hari kerja ke-5 = Senin, 25 Januari 2027."],
          penjelasan: "Tanggapan SPHP kini 5 hari kerja (dahulu 7 hari kerja); bila tidak ditanggapi, dituangkan dalam berita acara." },
        { no: 4, pertanyaan: "Berapa pokok pajak yang wajib dilunasi CV sebelum surat keberatan disampaikan (Rp)?", tipe: "angka", jawaban: 100000000, toleransi: 0,
          petunjuk: ["Pasal 25 ayat (3a) UU KUP mengatur pelunasan sebelum keberatan atas SKP.", "Jumlahnya paling sedikit sebesar yang disetujui dalam pembahasan akhir hasil pemeriksaan.", "Rp100.000.000."],
          penjelasan: "Bagian yang tidak disetujui (Rp540.000.000) tertangguh selama proses keberatan sampai 1 bulan sejak keputusan keberatan terbit." },
        { no: 5, pertanyaan: "Batas pengajuan keberatan dan dasar kewenangan Rahmat?", tipe: "pilihan",
          opsi: { A: "8 Juni 2027; surat kuasa pemeriksaan sudah berakhir 28 Februari 2027 dan tidak mencakup keberatan, sehingga CV harus memberi surat kuasa khusus baru untuk keberatan", B: "18 April 2027 (3 bulan sejak SPHP diterima); surat kuasa pemeriksaan masih dapat dipakai", C: "8 Juni 2027; surat kuasa pemeriksaan otomatis diperpanjang untuk keberatan karena perkaranya sama", D: "8 April 2027 (1 bulan sejak SKPKB dikirim); surat kuasa khusus baru diperlukan" }, jawaban: "A",
          petunjuk: ["Keberatan diajukan dalam 3 bulan sejak tanggal SKP dikirim.", "8 Maret 2027 + 3 bulan = 8 Juni 2027.", "Surat kuasa khusus hanya untuk hak yang disebut dan masa berlakunya sudah lewat → A."],
          penjelasan: "PMK 44/2026 mewajibkan surat kuasa khusus menyebut hak tertentu dan masa berlaku; surat keberatan yang ditandatangani kuasa dilampiri surat kuasa khusus yang sah." },
        { no: 6, pertanyaan: "Bila keputusan keberatan menetapkan pokok Rp400.000.000 dan CV tidak mengajukan banding, berapa denda Pasal 25 ayat (9) (Rp)?", tipe: "angka", jawaban: 90000000, toleransi: 0,
          petunjuk: ["Denda 30% × (pokok menurut keputusan keberatan − pajak yang dibayar sebelum keberatan).", "Rp400.000.000 − Rp100.000.000 = Rp300.000.000.", "30% × Rp300.000.000 = Rp90.000.000."],
          penjelasan: "Denda 30% tidak dikenakan bila CV mengajukan banding; bila banding ditolak, yang berlaku denda 60% Pasal 27 ayat (5d)." }
      ],
      kesimpulan: "Atas temuan di tengah pemeriksaan, jalan sahnya adalah pengungkapan ketidakbenaran sebelum SPHP; bila klien menolak, Rahmat tidak boleh memberi keterangan menyesatkan dan dapat mundur tanpa membuka rahasia. Tanggapan SPHP paling lambat 25 Januari 2027. Untuk keberatan, CV melunasi Rp100.000.000 lebih dahulu, mengajukan paling lambat 8 Juni 2027 dengan surat kuasa khusus baru, dan menghadapi denda Rp90.000.000 bila keputusan menetapkan Rp400.000.000 dan CV tidak banding.",
      kalkulatorRef: "denda-keberatan"
    },
    {
      id: "K-E-05", judul: "Penerimaan klien dan pengendalian mutu di KKP Sentosa Wibawa", topik: "E.6", estimasiMenit: 15,
      narasi: "KKP Sentosa Wibawa di Surabaya mulai beroperasi Januari 2027 dengan dua konsultan: Lukas (izin C sejak 2020) dan Dina (izin A yang terbit Desember 2026), serta 4 staf. KKP belum memiliki kebijakan pengendalian mutu tertulis. Pada minggu pertama datang tiga calon klien: (1) PT Prima Logistik (badan dalam negeri, bukan PMA), yang masih terikat perikatan dengan KKP lain sampai 31 Januari 2027 tetapi ingin KKP Sentosa Wibawa segera menyusun SPT Tahunan PPh Badan 2026; (2) Ny. Kartini, pengusaha toko emas, yang sedang bersengketa pembagian harta dengan mantan suaminya, Tuan Herman, klien lama Lukas sejak 2021, dan meminta KKP menghitung ulang harta dalam SPT Tuan Herman sebagai bahan gugatan; (3) PT Asia Komponen, perusahaan PMA. Dina mengusulkan agar ia menangani PT Prima Logistik dan partner meminta staf langsung bekerja begitu klien setuju secara lisan.",
      data: [["Lukas", "Izin C sejak 2020; klien lama: Tuan Herman"], ["Dina", "Izin A, terbit Desember 2026"], ["Calon 1", "PT Prima Logistik, badan DN; perikatan lama s.d. 31 Januari 2027"], ["Calon 2", "Ny. Kartini, bersengketa harta dengan Tuan Herman"], ["Calon 3", "PT Asia Komponen, PMA"], ["Kebijakan SPM tertulis", "Belum ada"]],
      langkah: [
        { no: 1, pertanyaan: "Unsur sistem pengendalian mutu yang harus diterapkan lebih dahulu atas ketiga calon klien?", tipe: "pilihan",
          opsi: { A: "Pemantauan tahunan atas berkas yang sudah selesai", B: "Kebijakan penerimaan dan keberlanjutan klien: cek benturan kepentingan, kesesuaian izin, dan kompetensi sebelum perikatan", C: "Penetapan tarif imbalan standar", D: "Pelatihan PPL terstruktur bagi staf" }, jawaban: "B",
          petunjuk: ["Pertanyaannya tentang menerima atau menolak klien baru.", "SPM memuat unsur penerimaan dan keberlanjutan klien.", "Cek konflik, izin, dan kompetensi dilakukan sebelum surat perikatan → B."],
          penjelasan: "Unsur penerimaan klien mencegah benturan kepentingan, jasa di luar klasifikasi izin, dan penugasan di luar kompetensi sejak awal." },
        { no: 2, pertanyaan: "Penanganan PT Prima Logistik yang tepat?", tipe: "pilihan",
          opsi: { A: "Dina langsung menangani karena perusahaan bukan PMA", B: "Ditangani Lukas setelah klien mengakhiri perikatan lama dan KKP lama diberi tahu; Dina tidak dapat menangani karena izin A hanya untuk WP orang pribadi", C: "Ditangani Lukas segera tanpa menunggu perikatan lama berakhir agar SPT tepat waktu", D: "Ditolak karena klien yang pernah ditangani rekan tidak boleh diterima" }, jawaban: "B",
          petunjuk: ["Izin A hanya untuk WP orang pribadi; PT adalah WP badan.", "Menerima klien rekan boleh, asalkan tidak merebut dan rekan sebelumnya diberi tahu.", "Tenggat SPT 30 April 2027 masih cukup → B."],
          penjelasan: "Cakupan izin (Pasal 4 PMK 55/2026) dan etika antarrekan (Bab IV Kode Etik) diuji bersamaan." },
        { no: 3, pertanyaan: "Permintaan Ny. Kartini sebaiknya ...", tipe: "pilihan",
          opsi: { A: "Diterima karena Ny. Kartini membayar imbalan lebih tinggi", B: "Diterima asalkan dikerjakan staf yang tidak pernah menangani Tuan Herman", C: "Ditolak, karena kepentingannya berlawanan langsung dengan klien Lukas dan pekerjaannya memakai informasi rahasia Tuan Herman", D: "Diterima dengan syarat Tuan Herman diberi tahu secara lisan" }, jawaban: "C",
          petunjuk: ["Ny. Kartini dan Tuan Herman sedang bersengketa: kepentingan berlawanan langsung.", "Pekerjaan yang diminta memakai data SPT klien KKP sendiri.", "Pengamanan tim terpisah tidak memulihkan objektivitas maupun kerahasiaan → C."],
          penjelasan: "Benturan kepentingan yang berlawanan langsung dan menyangkut informasi rahasia klien tidak dapat dikelola dengan pengungkapan atau tim terpisah; penugasan harus ditolak." },
        { no: 4, pertanyaan: "Siapa yang dapat menangani PT Asia Komponen (PMA)?", tipe: "pilihan",
          opsi: { A: "Lukas, karena hanya izin C yang mencakup PMA", B: "Dina, karena PMA dimiliki pihak asing yang setara orang pribadi", C: "Lukas atau Dina, karena keduanya bekerja di KKP yang sama", D: "Tidak ada, karena KKP baru belum boleh menangani PMA" }, jawaban: "A",
          petunjuk: ["Izin B mengecualikan PMA dan BUT; izin A hanya orang pribadi.", "Izin C mencakup seluruh WP.", "Lukas memegang izin C → A."],
          penjelasan: "Kewenangan melekat pada izin perseorangan konsultan, bukan pada KKP." },
        { no: 5, pertanyaan: "Dokumen yang harus ada sebelum staf mulai bekerja untuk klien yang diterima?", tipe: "pilihan",
          opsi: { A: "Persetujuan lisan klien sudah cukup", B: "Surat perikatan tertulis (ruang lingkup, tanggung jawab, jangka waktu, imbalan) dan, bila KKP akan mewakili klien, surat kuasa khusus yang menyebut hak tertentu dan masa berlaku", C: "Cukup surat kuasa khusus tanpa surat perikatan", D: "Cukup faktur tagihan uang muka" }, jawaban: "B",
          petunjuk: ["Standar pelaksanaan penugasan dimulai dengan surat perikatan.", "Kewenangan mewakili di hadapan DJP lahir dari surat kuasa khusus (PMK 44/2026).", "Keduanya berbeda fungsi → B."],
          penjelasan: "Surat perikatan mengatur hubungan konsultan–klien; surat kuasa khusus mengatur kewenangan di hadapan DJP." },
        { no: 6, pertanyaan: "Berapa SKP PPL terstruktur minimal per tahun yang wajib dikumpulkan Dina (izin A)?", tipe: "angka", jawaban: 16, toleransi: 0,
          petunjuk: ["PPL tingkat A: total 20 SKP.", "Sebagian wajib terstruktur.", "Minimal 16 SKP terstruktur."],
          penjelasan: "Kewajiban PPL A/B/C: 20 (16) / 30 (24) / 45 (36) SKP per tahun; angka berasal dari ringkasan sekunder PMK 55/2026." }
      ],
      kesimpulan: "KKP harus memulai dengan kebijakan penerimaan klien: PT Prima Logistik ditangani Lukas setelah perikatan lama diakhiri dan KKP lama diberi tahu, permintaan Ny. Kartini ditolak karena berlawanan langsung dengan klien Lukas, dan PT Asia Komponen hanya dapat ditangani Lukas (izin C). Setiap penugasan dimulai dengan surat perikatan tertulis dan, bila mewakili, surat kuasa khusus; Dina wajib mengumpulkan sedikitnya 16 SKP terstruktur per tahun.",
      kalkulatorRef: null
    }
  ],
  tips: [
    { teks: "Untuk soal sanksi PMK 55/2026, klasifikasikan perbuatannya dulu: di luar klasifikasi izin atau tidak gabung asosiasi → pembekuan 3 bulan; standar praktik, PPL, tidak melapor perubahan alamat, laporan tahunan tidak atau terlambat disampaikan → peringatan (laporan tahunan yang datanya terbukti tidak benar → pembekuan); kode etik, independensi, keterangan menyesatkan klien, rekayasa → pembekuan paling lama 2 tahun; imbalan kepada petugas, gratifikasi, pemerasan, rangkap jabatan → pencabutan permanen; lalu cek riwayat: sudah 3 kali dibekukan dalam 5 tahun → pencabutan.", tagSebab: "salah-klasifikasi" },
    { teks: "Bedakan hari kerja dan hari kalender; hitung 30 hari kerja mulai hari kerja berikutnya setelah izin terbit, dan cek libur nasional yang disebut dalam soal.", tagSebab: "salah-hitung" },
    { teks: "Soal profesi yang masih memakai PMK 111/2014, PMK 175/2022, atau PMK 229/2014 sudah usang: patokannya PMK 44/2026 (6 Juli 2026) dan PMK 55/2026 (24 Agustus 2026).", tagSebab: "angka-usang" },
    { teks: "Pada soal kombinasi (I, II, III, IV), nilai setiap pernyataan satu per satu dan tandai benar/salah sebelum melihat opsi.", tagSebab: "salah-baca" },
    { teks: "Sebelum menilai etika, cocokkan profil klien dengan izin: CV dan PT perorangan adalah badan (izin B/C), PMA dan BUT hanya izin C.", tagSebab: "salah-klasifikasi" },
    { teks: "Garis bawahi kata 'BUKAN', 'TIDAK', 'kecuali', dan 'paling lama' sebelum membaca opsi; soal etika sering membalik pertanyaan.", tagSebab: "salah-baca" }
  ]
});
