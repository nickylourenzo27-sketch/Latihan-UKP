/* Modul A3 — PPh Pemotongan/Pemungutan (status ketentuan per 27 Oktober 2026).
   Soal adalah rekonstruksi dari kisi-kisi, bukan soal asli ujian. Angka rujukan: docs/research/02a bagian C.
   Gaya soal mengikuti docs/GAYA-SOAL.md: kasus praktik panjang, vignette (kasusId), kutipan peraturan, pengecoh dari jalur hitung yang keliru. */
UKP.register({
  meta: {
    kode: "A3", slug: "pph-potput", nama: "PPh Pemotongan/Pemungutan",
    diujiDi: ["A", "B", "C"],
    durasiUSKP: 120,
    perkiraanBobotSoal: { A: 0.25, B: 0.15, C: 0.12 },
    statusPer: "2026-11-12",
    tujuan: "Peserta mampu mengklasifikasikan setiap transaksi pembayaran ke pasal pemotongan/pemungutan yang tepat (PPh 21/26, 22, 23, 4 ayat (2), 15), menentukan tarif, dasar pengenaan, sifat final atau tidak final, serta pihak pemotong; menghitung PPh 21 pegawai tetap dengan TER bulanan dan hitung ulang Pasal 17 pada Masa Pajak Terakhir, bukan pegawai, pegawai tidak tetap, dan pesangon; serta memahami kewajiban bukti potong unifikasi, penyetoran tanggal 15, dan pelaporan 20 hari di Coretax.",
    dasarHukumUtama: ["UU 7/1983 s.t.d.t.d. UU 7/2021 (UU PPh) Pasal 4 ayat (2), 15, 21, 22, 23, 26", "PP 58/2023 dan PMK 168/2023 (PPh 21 TER)", "PP 68/2009 (pesangon dan pensiun sekaligus)", "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; rezim PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/PMK.010/2022 dicabut PMK 81/2024 sejak 1 Januari 2025); PMK 37/2025 (PPh 22 PMSE)", "PMK 141/PMK.03/2015 (jasa lain PPh 23)", "PP 34/2017, PP 9/2022, PP 131/2000, PP 91/2021, PP 34/2016 (PPh final)", "PMK 112/2025 (P3B)", "PMK 81/2024 dan PER-11/PJ/2025 (Coretax, bukti potong)"],
    perubahanTerbaru: [
      { sebelum: "PPh 21 pegawai tetap dihitung progresif Pasal 17 setiap bulan (disetahunkan)", sesudah: "Januari–November memakai TER bulanan kategori A/B/C × bruto; Desember hitung ulang Pasal 17", dasar: "PP 58/2023; PMK 168/2023", berlakuSejak: "2024-01-01" },
      { sebelum: "Penyetoran PPh Pasal 21/22/23/26/4(2)/15 paling lambat tanggal 10 bulan berikutnya", sesudah: "Paling lambat tanggal 15 bulan berikutnya; bila hari libur bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 Pasal 94 dan Pasal 100", berlakuSejak: "2025-01-01" },
      { sebelum: "Bukti potong 1721-A1/A2 (PER-16/PJ/2016) dan bupot unifikasi PER-24/PJ/2021", sesudah: "Bukti potong PPh 21/26: BPA1, BPA2, BP21, BP26 (PER-11/PJ/2025 Pasal 6 ayat (1)) serta BPPU dan BPNR (Unifikasi)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
      { sebelum: "Marketplace bukan pemungut PPh", sesudah: "Marketplace yang ditunjuk Direktur Jenderal Pajak (Pasal 4) memungut PPh 22 0,5% dari pedagang dalam negeri; PMK 37/2025 berlaku sejak diundangkan 14 Juli 2025 (Pasal 18); ◐ jadwal pemungutan 1 November 2026 bersumber sekunder (sempat ditunda)", dasar: "PMK 37/2025", berlakuSejak: "2025-07-14" },
      { sebelum: "Penerapan P3B dan Form DGT 7 bagian menurut PER-25/PJ/2018", sesudah: "PMK 112/2025: Form DGT 6 bagian yang direkam di Coretax; tanpa SKD yang sah dipotong 20%; SKD lama tetap berlaku sampai masa berlakunya habis", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" },
      { sebelum: "PPh 21 DTP padat karya 2025 untuk 4 sektor (PMK 10/2025)", sesudah: "Diperpanjang untuk Masa Pajak Januari–Desember 2026 dengan 5 sektor (ditambah pariwisata), gaji ≤ Rp10 juta/bulan", dasar: "PMK 105/2025", berlakuSejak: "2026-01-01" },
      { sebelum: "PPh final 0,5% PP 55/2022 berlaku juga untuk CV, firma, dan PT biasa (dengan batas waktu)", sesudah: "Hanya orang pribadi, PT perorangan, dan koperasi; pekerjaan bebas tetap dikecualikan (Pasal 56 ayat (3) huruf a PP 55/2022); pungutan PPh 22 marketplace menjadi pelunasan PPh final UMKM", dasar: "PP 20/2026; PMK 37/2025", berlakuSejak: "2026-04-22" }
    ],
    lembarRingkas: [
      { label: "Setor PPh 21/22/23/26/4(2)/15 yang dipotong/dipungut", nilai: "Tanggal 15 bulan berikutnya; hari libur → hari kerja berikutnya", dasar: "PMK 81/2024 Ps. 94 ayat (2) dan Ps. 100", berlakuSejak: "2025-01-01" },
      { label: "Lapor SPT Masa PPh 21/26 dan Unifikasi", nilai: "20 hari setelah Masa Pajak berakhir", dasar: "Ps. 3 ayat (3) huruf a UU KUP; PMK 81/2024 Ps. 171", berlakuSejak: "2025-01-01" },
      { label: "Denda terlambat SPT Masa PPh", nilai: "Rp100.000 per SPT (PPN Rp500.000)", dasar: "Ps. 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
      { label: "Biaya jabatan · biaya pensiun", nilai: "5% maks Rp500.000/bln (Rp6 jt/thn) · 5% maks Rp200.000/bln (Rp2,4 jt/thn)", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" },
      { label: "PTKP setahun", nilai: "Rp54 jt diri; +Rp4,5 jt kawin; +Rp4,5 jt per tanggungan (maks 3); status 1 Januari", dasar: "Ps. 7 UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
      { label: "Kategori TER bulanan", nilai: "A: TK/0, TK/1, K/0 · B: TK/2, TK/3, K/1, K/2 · C: K/3", dasar: "PP 58/2023 Ps. 2 ayat (3)", berlakuSejak: "2024-01-01" },
      { label: "Masa Pajak Terakhir pegawai tetap", nilai: "Ps. 17 × PKP setahun − PPh Jan–Nov (atau bulan berhenti)", dasar: "PP 58/2023 Ps. 2; PMK 168/2023", berlakuSejak: "2024-01-01" },
      { label: "TER harian pegawai tidak tetap", nilai: "0% ≤ Rp450 rb; 0,5% s.d. Rp2,5 jt; di atasnya Ps. 17 × 50%", dasar: "PP 58/2023 Lampiran D", berlakuSejak: "2024-01-01" },
      { label: "Bukan pegawai", nilai: "Ps. 17 × 50% × bruto, tidak kumulatif", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01" },
      { label: "Tanpa NPWP", nilai: "PPh 21: 120% · PPh 22 dan 23: 200% · PPh final dan PPh 26: tetap", dasar: "Ps. 21 ayat (5a), 22 ayat (3), 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Pesangon (final, kumulatif ≤ 2 tahun kalender)", nilai: "0% ≤ Rp50 jt · 5% ≤ Rp100 jt · 15% ≤ Rp500 jt · 25% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16" },
      { label: "Pensiun/THT/JHT sekaligus (final)", nilai: "0% ≤ Rp50 jt · 5% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16" },
      { label: "PPh 21 DTP 2026", nilai: "5 sektor; pegawai tetap ≤ Rp10 jt/bln; harian rata-rata ≤ Rp500 rb; dibayar tunai", dasar: "PMK 105/2025", berlakuSejak: "2026-01-01" },
      { label: "PPh 22 impor", nilai: "2,5% API · 7,5% non-API · 0,5% kedelai/gandum/terigu × (CIF + bea masuk)", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
      { label: "PPh 22 bendahara", nilai: "1,5% harga tanpa PPN; bebas ≤ Rp2 jt utuh, BBM, listrik, gas, air, benda pos", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
      { label: "PPh 22 BBM", nilai: "0,25% ke SPBU yang menjual BBM dari Pertamina/anak usahanya · 0,3% SPBU lain/selain SPBU · final bagi penyalur/agen", dasar: "PMK 51/2025 (PPh Pasal 22, berlaku 1 Agustus 2025; sifat final hanya BBM/BBG bagi penyalur/agen). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
      { label: "PPh 22 emas · hasil bumi oleh industri/eksportir", nilai: "0,25% (konsumen akhir dikecualikan) · 0,25%", dasar: "PMK 48/2023 s.t.d.t.d. PMK 52/2025; PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
      { label: "PPh 22 barang sangat mewah", nilai: "5% kendaraan/pesawat/kapal · 1% rumah > Rp30 M atau > 400 m², apartemen > Rp30 M atau > 150 m²", dasar: "PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19" },
      { label: "PPh 22 marketplace", nilai: "◐ 0,5% × bruto pedagang; pemungutan dijadwalkan 1 Nov 2026 (cek status, sempat ditunda)", dasar: "PMK 37/2025 (berlaku sejak diundangkan 14 Juli 2025; marketplace pemungut ditunjuk DJP, Pasal 4)", berlakuSejak: "2025-07-14" },
      { label: "PPh 23", nilai: "15% dividen/bunga/royalti/hadiah · 2% sewa harta dan jasa (tanpa PPN)", dasar: "Ps. 23 ayat (1) UU PPh; PMK 141/PMK.03/2015", berlakuSejak: "2009-01-01" },
      { label: "Sewa tanah/bangunan (final)", nilai: "10% × bruto termasuk service charge", dasar: "PP 34/2017", berlakuSejak: "2018-01-02" },
      { label: "Jasa konstruksi (final)", nilai: "1,75% kecil · 2,65% menengah/besar/terintegrasi · 4% tanpa sertifikat · konsultansi 3,5%/6%", dasar: "PP 9/2022 Ps. 3 ayat (1)", berlakuSejak: "2022-02-21" },
      { label: "Bunga dan hadiah (final)", nilai: "Deposito/tabungan 20% (tidak dipotong bila saldo ≤ Rp7,5 jt) · obligasi 10% · undian 25% · saham bursa 0,1%", dasar: "PP 131/2000; PP 91/2021; PP 132/2000; PP 14/1997", berlakuSejak: "2021-08-30" },
      { label: "Pengalihan tanah/bangunan (final)", nilai: "2,5% · 1% rumah sederhana pengembang · 0% ke pemerintah; bayar sebelum akta", dasar: "PP 34/2016 Ps. 2–3", berlakuSejak: "2016-09-07" },
      { label: "PPh Pasal 15", nilai: "Pelayaran DN 1,2% · penerbangan DN 1,8% · LN 2,64% · kantor perwakilan dagang asing 0,44%", dasar: "KMK 416, 417, 475/KMK.04/1996; KMK 634/KMK.04/1994" },
      { label: "PPh Pasal 26", nilai: "20% bruto atau P3B · harta tertentu 5% (daftar PMK 82/PMK.03/2009 Ps. 2 ayat (4)) · premi 10%/2%/1% · BPT 20% laba setelah pajak", dasar: "Ps. 26 ayat (1), (2), (4) UU PPh", berlakuSejak: "2009-01-01" },
      { label: "Syarat tarif P3B", nilai: "Form DGT 6 bagian terekam di Coretax sebelum bayar; beneficial owner; tanpa → 20%", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" },
      { label: "Kode bukti potong Coretax", nilai: "BPA1, BPA2, BP21, BP26 (PPh 21/26) · BPPU (WPDN), BPNR (WPLN)", dasar: "PER-11/PJ/2025 Pasal 6 ayat (1)", berlakuSejak: "2025-05-22" },
      { label: "Kurs DPP PPh potong/pungut dalam valas", nilai: "Kurs KMK mingguan (Rabu–Selasa) yang berlaku saat terutang: dibayar, disediakan, atau jatuh tempo — mana lebih dahulu", dasar: "KMK nilai kurs; Ps. 23 ayat (1) dan 26 ayat (1) UU PPh (pasal saat konversi ◐)", berlakuSejak: "2009-01-01" },
      { label: "Kurs tengah BI", nilai: "Untuk pembukuan SAK (penjabaran pos moneter valas pada tanggal neraca); tidak dipakai untuk DPP pemotongan", dasar: "PSAK 221 (eks-PSAK 10); PP 94/2010 Ps. 9", berlakuSejak: "2010-12-30" },
      { label: "PPh 22 impor dalam valas", nilai: "◐ 2,5%/7,5% × (CIF + bea masuk) × kurs KMK yang dipakai untuk bea masuk pada PIB", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025); KMK nilai kurs", berlakuSejak: "2025-08-01" },
      { label: "Selisih kurs vs PPh yang dipotong", nilai: "Laba selisih kurs objek, rugi selisih kurs biaya (taat asas SAK); PPh yang sudah dipotong tidak disesuaikan", dasar: "Ps. 4 ayat (1) huruf l, 6 ayat (1) huruf e UU PPh; PP 94/2010 Ps. 9", berlakuSejak: "2010-12-30" },
      { label: "Gross-up PPh 26 dalam valas", nilai: "Bruto = neto ÷ (1 − tarif); PPh = tarif × bruto USD × kurs KMK saat terutang", dasar: "Ps. 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }
    ]
  },
  topik: [
    {
      id: "A3.1", slug: "pph21-pemotong-objek-pengurang", judul: "PPh 21: pemotong, penerima, objek, natura, dan pengurang",
      estimasiMenit: 14, jenisDominan: ["konsep", "klasifikasi"],
      ringkasan: [
        "Pemotong PPh 21/26: pemberi kerja (orang pribadi, badan, cabang), bendahara atau pemegang kas pemerintah, dana pensiun dan BPJS Ketenagakerjaan, orang pribadi/badan yang membayar honorarium kepada bukan pegawai dan peserta kegiatan, serta penyelenggara kegiatan.",
        "Bukan pemotong: kantor perwakilan negara asing, organisasi internasional yang ditetapkan Menteri Keuangan, dan orang pribadi yang tidak melakukan usaha/pekerjaan bebas dan hanya mempekerjakan pekerja rumah tangga.",
        "Objek PPh 21: gaji, tunjangan, THR, bonus, lembur, premi JKK/JKM/BPJS Kesehatan yang dibayar pemberi kerja, natura/kenikmatan yang tidak dikecualikan, honorarium, pesangon, uang pensiun, dan imbalan lain sehubungan pekerjaan, jasa, atau kegiatan.",
        "Bukan objek: iuran pensiun/JHT yang dibayar pemberi kerja ke dana pensiun yang disahkan atau BPJS Ketenagakerjaan, zakat yang diterima badan amil resmi, beasiswa Pasal 4 ayat (3), dan natura yang dikecualikan PMK 66/2023.",
        "Natura dikecualikan (PMK 66/2023): makanan/minuman seluruh pegawai di tempat kerja, bingkisan hari raya keagamaan, peralatan kerja, fasilitas kesehatan terkait kerja, fasilitas olahraga non-golf ≤ Rp1,5 juta/pegawai/tahun, mes komunal, tempat tinggal non-komunal ≤ Rp2 juta/pegawai/bulan, kendaraan bagi pegawai bukan pemegang saham berpenghasilan bruto ≤ Rp100 juta/bulan.",
        "Pengurang bruto pegawai tetap pada Masa Pajak Terakhir: biaya jabatan 5% maksimal Rp500.000/bulan (Rp6.000.000/tahun), iuran pensiun/JHT/THT yang dibayar sendiri oleh pegawai, zakat/sumbangan keagamaan wajib melalui pemberi kerja, lalu PTKP.",
        "PTKP: Rp54 juta WP sendiri, Rp4,5 juta tambahan kawin, Rp4,5 juta per tanggungan maksimal 3; status PTKP ditentukan keadaan pada awal tahun pajak. Pensiunan memakai biaya pensiun 5% maksimal Rp200.000/bulan (Rp2.400.000/tahun).",
        "Bingkisan dari pemberi kerja (PMK 66/2023): bingkisan dalam rangka hari raya keagamaan yang diterima seluruh pegawai dikecualikan dari objek tanpa batas nilai; bingkisan selain hari raya keagamaan (misalnya ulang tahun perusahaan atau akhir tahun) yang diterima seluruh pegawai dikecualikan sampai Rp3.000.000 per pegawai per tahun, dan kelebihannya menjadi objek PPh 21 sebesar nilai pasarnya."
      ],
      poinKunci: [
        { label: "Biaya jabatan", nilai: "5%, maks Rp500.000/bulan (Rp6.000.000/tahun)", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" },
        { label: "Biaya pensiun", nilai: "5%, maks Rp200.000/bulan (Rp2.400.000/tahun)", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" },
        { label: "PTKP TK/0 · K/0 · K/1 · K/3", nilai: "Rp54 jt · Rp58,5 jt · Rp63 jt · Rp72 jt", dasar: "Pasal 7 ayat (1) UU PPh; PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" },
        { label: "Tempat tinggal non-komunal dikecualikan", nilai: "≤ Rp2 juta/pegawai/bulan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" },
        { label: "Fasilitas olahraga dikecualikan", nilai: "≤ Rp1,5 juta/pegawai/tahun (selain golf, pacuan kuda, balap perahu, terbang layang, otomotif)", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" },
        { label: "Kendaraan kantor dikecualikan", nilai: "pegawai bukan pemegang saham dan bruto ≤ Rp100 juta/bulan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" },
        { label: "Bingkisan selain hari raya keagamaan", nilai: "Dikecualikan s.d. Rp3 juta/pegawai/tahun bila diterima seluruh pegawai; hari raya keagamaan tanpa batas", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 21 ayat (1) dan (2) UU PPh", catatan: "pihak yang wajib memotong dan yang dikecualikan" },
        { pasal: "Pasal 21 ayat (3) UU PPh", catatan: "pengurang: biaya jabatan, iuran pensiun, PTKP" },
        { pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh", catatan: "natura/kenikmatan objek sejak UU HPP dan yang dikecualikan" },
        { pasal: "PP 55/2022 Pasal 23–25", catatan: "perlakuan natura/kenikmatan" },
        { pasal: "PMK 66/2023 Pasal 4 dan Lampiran", catatan: "jenis dan batasan natura yang dikecualikan" },
        { pasal: "PMK 168/2023 Pasal 2 dan Pasal 3", catatan: "pemotong PPh 21/26 dan yang bukan pemotong" }
      ],
      jebakan: [
        { teks: "Premi JKK/JKM/BPJS Kesehatan yang dibayar pemberi kerja dianggap pengurang — padahal justru menambah penghasilan bruto pegawai", tagSebab: "salah-klasifikasi" },
        { teks: "Natura dianggap bukan objek PPh 21 seperti sebelum UU HPP — kini objek kecuali yang dikecualikan PMK 66/2023", tagSebab: "angka-usang" },
        { teks: "Status PTKP diubah di tengah tahun karena menikah atau anak lahir — status memakai keadaan pada awal tahun pajak", tagSebab: "salah-baca" }
      ],
      contohSoal: {
        stem: "Pegawai tetap berpenghasilan bruto Rp15.000.000 per bulan selama 12 bulan di 2026. Berapa biaya jabatan setahun yang boleh dikurangkan pada Masa Pajak Terakhir?",
        jawaban: "Rp6.000.000",
        langkah: [["Bruto setahun = 12 × Rp15.000.000", "Rp180.000.000"], ["5% × bruto", "Rp9.000.000"], ["Batas maksimal 12 × Rp500.000", "Rp6.000.000"], ["Biaya jabatan = yang lebih kecil", "Rp6.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A3.2", slug: "pph21-ter-pegawai-tetap", judul: "TER bulanan pegawai tetap dan Masa Pajak Terakhir",
      estimasiMenit: 18, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "Masa Pajak Januari–November (atau sebelum bulan berhenti): PPh 21 = TER bulanan × penghasilan bruto sebulan. Bruto mencakup gaji, tunjangan, premi asuransi yang dibayar pemberi kerja, natura kena pajak, serta THR/bonus pada bulan diterima — tanpa pengurang apa pun.",
        "Kategori TER ditentukan dari status PTKP pada awal tahun pajak: A = TK/0, TK/1, K/0; B = TK/2, TK/3, K/1, K/2; C = K/3.",
        "Lapisan TER yang paling sering diuji: kategori A 0% s.d. Rp5,4 jt, 0,25% s.d. Rp5,65 jt, 3% Rp10,7–11,05 jt, 10% Rp24,15–26,45 jt, 12% Rp28–30,05 jt; kategori B 0% s.d. Rp6,2 jt, 0,75% Rp6,85–7,3 jt, 1% Rp7,3–9,2 jt; kategori C 0% s.d. Rp6,6 jt, 1,25% Rp8,85–9,8 jt, 3% Rp12,05–12,95 jt.",
        "Masa Pajak Terakhir (Desember atau bulan berhenti): PPh setahun = tarif Pasal 17 × PKP; PKP = bruto setahun − biaya jabatan − iuran pensiun/JHT yang dibayar pegawai − zakat via pemberi kerja − PTKP (dibulatkan ribuan penuh ke bawah); PPh masa terakhir = PPh setahun − PPh yang telah dipotong Januari–November.",
        "Penerima tanpa NPWP (NIK belum dipadankan): PPh 21 dipotong 120% dari yang seharusnya (tarif 20% lebih tinggi); tidak berlaku untuk PPh 21 final. Bagi pegawai tetap atau pensiunan berkala yang ber-NPWP dalam tahun kalender yang sama sebelum Masa Pajak Terakhir, selisih 20% yang telah dipotong diperhitungkan dengan PPh 21 bulan-bulan berikutnya (PER-16/PJ/2016 Pasal 20 ayat (4); PMK 168/2023 tidak memuat mekanisme ini, dan keberlakuan PER-16/PJ/2016 setelah PMK 252/PMK.03/2008 dicabut PMK 168/2023 belum dipastikan).",
        "Pegawai yang berhenti di tengah tahun: Masa Pajak Terakhir adalah bulan berhenti; PTKP tetap setahun penuh dan penghasilan tidak disetahunkan (penyetahunan hanya bila kewajiban pajak subjektif mulai atau berakhir dalam tahun berjalan, misalnya WPLN yang baru datang).",
        "Hasil hitung ulang Desember dapat berupa kurang potong (dipotong tambahan) atau lebih potong (dikembalikan kepada pegawai bersamaan dengan bukti potong BPA1).",
        "Pegawai tetap yang kehilangan kewajiban pajak subjektif di tengah tahun karena meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya (Pasal 2A ayat (1) UU PPh): Masa Pajak Terakhirnya adalah bulan berhenti bekerja dan PPh 21-nya dihitung dengan penyetahunan (PMK 168/2023). Neto n bulan (bruto − biaya jabatan paling banyak Rp500.000 × n − iuran pensiun/JHT yang dibayar pegawai) × 12/n; PKP = neto setahun − PTKP setahun penuh menurut keadaan awal tahun, dibulatkan ke bawah ribuan penuh; PPh setahun dengan tarif Pasal 17; PPh bagian tahun pajak = n/12 × PPh setahun; dikurangi PPh 21 yang telah dipotong dengan TER pada masa sebelumnya.",
        "Bandingkan dengan pegawai yang berhenti atau pindah kerja tetapi tetap subjek pajak dalam negeri: Masa Pajak Terakhir juga bulan berhenti, tetapi penghasilan tidak disetahunkan dan PPh tidak diprorata. Bila pegawai meninggal, BPA1 tetap dibuat dan kelebihan potong dikembalikan kepada ahli waris; warisan yang belum terbagi menggantikan almarhum sebagai subjek pajak (Pasal 2 ayat (1) huruf a UU PPh)."
      ],
      poinKunci: [
        { label: "Kategori A", nilai: "TK/0, TK/1, K/0", dasar: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01" },
        { label: "Kategori B", nilai: "TK/2, TK/3, K/1, K/2", dasar: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01" },
        { label: "Kategori C", nilai: "K/3", dasar: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01" },
        { label: "TER A lapisan pertama", nilai: "0% s.d. Rp5.400.000; 0,25% s.d. Rp5.650.000", dasar: "Lampiran PP 58/2023", berlakuSejak: "2024-01-01" },
        { label: "Tanpa NPWP", nilai: "120% × PPh seharusnya (non-final)", dasar: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Rumus Masa Pajak Terakhir", nilai: "Pasal 17 × PKP setahun − PPh Jan–Nov", dasar: "PP 58/2023 Pasal 2; PMK 168/2023", berlakuSejak: "2024-01-01" },
        { label: "Kehilangan kewajiban subjektif di tengah tahun", nilai: "Neto × 12/n → Ps. 17 atas (neto setahun − PTKP) → × n/12 − PPh yang telah dipotong", dasar: "Pasal 2A ayat (1) UU PPh; PMK 168/2023", berlakuSejak: "2024-01-01" }
      ],
      dasarHukum: [
        { pasal: "PP 58/2023 Pasal 2", catatan: "tarif efektif bulanan/harian dan tarif Pasal 17 pada Masa Pajak Terakhir" },
        { pasal: "Lampiran PP 58/2023", catatan: "tabel TER kategori A (44 lapisan), B (40), C (41), dan TER harian" },
        { pasal: "PMK 168/2023", catatan: "petunjuk teknis dan contoh penghitungan pegawai tetap" },
        { pasal: "Pasal 17 ayat (1) huruf a UU PPh", catatan: "tarif progresif 5/15/25/30/35%" },
        { pasal: "Pasal 21 ayat (5a) UU PPh", catatan: "tarif 20% lebih tinggi bagi yang tidak ber-NPWP" },
        { pasal: "Pasal 2A ayat (1) UU PPh; PMK 168/2023", catatan: "akhir kewajiban subjektif orang pribadi dan penyetahunan PPh 21 Masa Pajak Terakhir" }
      ],
      jebakan: [
        { teks: "Menentukan kategori dari jumlah tanggungan saja — K/1 masuk kategori B, tetapi TK/1 dan K/0 masuk kategori A", tagSebab: "salah-klasifikasi" },
        { teks: "Desember tetap memakai TER — Masa Pajak Terakhir wajib hitung ulang dengan Pasal 17 dikurangi PPh Januari–November", tagSebab: "lupa-pasal" },
        { teks: "THR/bonus dihitung terpisah dari gaji bulan itu — TER diterapkan pada total bruto bulan diterimanya THR", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Pegawai tetap status K/0 menerima gaji dan tunjangan Rp11.000.000 pada Januari 2026. Berapa PPh 21 Januari?",
        jawaban: "Rp330.000",
        langkah: [["Status K/0 → kategori", "A"], ["Lapisan Rp10.700.000–11.050.000", "3%"], ["PPh 21 = 3% × Rp11.000.000", "Rp330.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A3.3", slug: "pph21-bukan-pegawai-tidak-tetap", judul: "Bukan pegawai, pegawai tidak tetap, dan penerima lain",
      estimasiMenit: 15, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "Bukan pegawai (tenaga ahli seperti dokter, pengacara, konsultan, akuntan; artis; pembawa acara; agen; petugas dinas luar asuransi): PPh 21 = tarif Pasal 17 × (50% × bruto) per pembayaran. Sejak 2024 tidak lagi dibedakan berkesinambungan/tidak berkesinambungan dan tidak kumulatif.",
        "Pegawai tidak tetap dibayar harian/mingguan/satuan/borongan: TER harian — 0% untuk bruto s.d. Rp450.000 per hari; 0,5% × bruto harian untuk > Rp450.000 s.d. Rp2.500.000; > Rp2.500.000 dikenai tarif Pasal 17 × (50% × bruto harian).",
        "Pegawai tidak tetap yang dibayar bulanan: TER bulanan untuk seluruh masa pajak termasuk Desember, tanpa penghitungan ulang Pasal 17.",
        "Anggota dewan komisaris/pengawas yang menerima penghasilan secara tidak teratur: TER bulanan (kategori menurut status PTKP) × bruto yang diterima dalam Masa Pajak itu, tidak kumulatif (PMK 168/2023 Pasal 3 ayat (1) huruf c, Pasal 12 ayat (1), dan Pasal 16 ayat (1)). Komisaris yang menerima penghasilan secara teratur termasuk Pegawai Tetap (Pasal 1 angka 10): TER bulanan pada Masa Pajak selain Masa Pajak Terakhir, lalu dihitung dengan tarif Pasal 17 pada Masa Pajak Terakhir (Pasal 15 ayat (1)); skema lama tarif Pasal 17 × bruto kumulatif (PER-16/PJ/2016) tidak berlaku sejak 1 Januari 2024.",
        "Mantan pegawai (jasa produksi, bonus, gratifikasi) dan penarikan dana pensiun oleh pegawai: tarif Pasal 17 ayat (1) huruf a × jumlah bruto yang diterima, tidak kumulatif (PMK 168/2023); skema kumulatif setahun PER-16/PJ/2016 tidak berlaku sejak 1 Januari 2024.",
        "Peserta kegiatan (lomba, rapat, seminar, kunjungan kerja): tarif Pasal 17 × bruto per pembayaran, tidak kumulatif dan tanpa pengurang 50%.",
        "Tanpa NPWP: 120% dari PPh seharusnya. Imbalan kepada orang pribadi WPLN bukan objek PPh 21 melainkan PPh 26 (20% atau tarif P3B)."
      ],
      poinKunci: [
        { label: "DPP bukan pegawai", nilai: "50% × bruto, tarif Pasal 17, per pembayaran", dasar: "PP 58/2023 Pasal 2; PMK 168/2023", berlakuSejak: "2024-01-01" },
        { label: "TER harian", nilai: "0% ≤ Rp450.000; 0,5% s.d. Rp2.500.000; > Rp2,5 jt Ps. 17 × 50%", dasar: "Lampiran PP 58/2023 (TER harian)", berlakuSejak: "2024-01-01" },
        { label: "Pegawai tidak tetap bulanan", nilai: "TER bulanan sepanjang tahun, termasuk Desember", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01" },
        { label: "Komisaris yang menerima penghasilan tidak teratur", nilai: "TER bulanan × bruto Masa Pajak itu (tidak kumulatif); bila dibayar teratur: Pegawai Tetap", dasar: "PMK 168/2023 Pasal 1 angka 10, Pasal 12 ayat (1), dan Pasal 16 ayat (1)", berlakuSejak: "2024-01-01" },
        { label: "Peserta kegiatan", nilai: "Pasal 17 × bruto (tanpa 50%)", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01" }
      ],
      dasarHukum: [
        { pasal: "PP 58/2023 Pasal 2 dan Lampiran", catatan: "TER harian pegawai tidak tetap" },
        { pasal: "PMK 168/2023", catatan: "dasar pengenaan bukan pegawai 50%, komisaris, mantan pegawai, peserta kegiatan" },
        { pasal: "Pasal 21 ayat (1) huruf d dan e UU PPh", catatan: "pemotongan atas honorarium bukan pegawai dan peserta kegiatan" },
        { pasal: "Pasal 21 ayat (5a) UU PPh", catatan: "tarif 20% lebih tinggi tanpa NPWP" }
      ],
      jebakan: [
        { teks: "Honorarium tenaga ahli dipotong PPh 23 2% — tenaga ahli orang pribadi adalah objek PPh 21 (Pasal 17 × 50% bruto)", tagSebab: "salah-klasifikasi" },
        { teks: "Memakai PTKP harian Rp450.000 sebagai pengurang (metode lama) — TER harian 0,5% dikalikan seluruh bruto harian", tagSebab: "angka-usang" },
        { teks: "Peserta kegiatan dihitung dengan DPP 50% — DPP 50% hanya untuk bukan pegawai", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "Seorang arsitek (bukan pegawai, ber-NPWP) menerima fee Rp80.000.000 dari PT A pada Mei 2026. Berapa PPh 21 yang dipotong?",
        jawaban: "Rp2.000.000",
        langkah: [["DPP = 50% × Rp80.000.000", "Rp40.000.000"], ["Lapisan Pasal 17 s.d. Rp60 juta", "5%"], ["PPh 21 = 5% × Rp40.000.000", "Rp2.000.000"]]
      },
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: rumus TER bulanan × bruto untuk komisaris yang menerima penghasilan secara tidak teratur (PMK 168/2023 Pasal 3 ayat (1) huruf c, Pasal 12 ayat (1), Pasal 16 ayat (1)); komisaris yang dibayar teratur adalah Pegawai Tetap (Pasal 1 angka 10). Belum dicocokkan: dasar pengenaan tanpa kumulatif untuk mantan pegawai dan penarikan dana pensiun (menurut ulasan DDTCNews dan Ortax atas PMK 168/2023; DDTCNews merujuk Pasal 12 ayat (7) untuk penarikan dana pensiun dan ayat (8) untuk mantan pegawai) serta bruto penuh untuk peserta kegiatan bersumber dari rujukan sekunder dan belum dicek ke naskah PMK 168/2023; angka bukan pegawai 50% dan TER harian terverifikasi."
    },
    {
      id: "A3.4", slug: "pph21-pesangon-pensiun-dtp", judul: "Pesangon, pensiun sekaligus, dan PPh 21 DTP",
      estimasiMenit: 12, jenisDominan: ["hitung", "konsep"],
      ringkasan: [
        "Pesangon yang dibayar sekaligus (termasuk bertahap dalam ≤ 2 tahun kalender, dihitung kumulatif): 0% s.d. Rp50 juta; 5% > Rp50–100 juta; 15% > Rp100–500 juta; 25% > Rp500 juta. PPh 21 bersifat final dan tidak dikurangi PTKP.",
        "Manfaat pensiun, THT, atau JHT yang dibayar sekaligus (kumulatif ≤ 2 tahun kalender): 0% s.d. Rp50 juta; 5% atas bagian di atas Rp50 juta — final.",
        "Pembayaran pada tahun ketiga dan seterusnya dikenai tarif Pasal 17 atas bruto dan tidak final (dapat dikreditkan di SPT Tahunan).",
        "Pemotong: pemberi kerja, pengelola dana pesangon tenaga kerja, dana pensiun, atau BPJS Ketenagakerjaan; bukti potong BP21 (final). Uang pensiun bulanan dipotong seperti pegawai tetap dengan biaya pensiun 5% maks Rp200.000/bulan.",
        "PPh 21 DTP padat karya 2026 (PMK 105/2025, lanjutan PMK 10/2025): Masa Pajak Januari–Desember 2026; lima sektor — alas kaki, tekstil dan pakaian jadi, furnitur, kulit dan barang dari kulit, pariwisata; pegawai tetap bruto ≤ Rp10 juta/bulan; pegawai tidak tetap upah harian rata-rata ≤ Rp500 ribu; wajib NPWP/NIK terpadankan.",
        "PPh 21 DTP dibayarkan tunai kepada pegawai (tidak dipotong dari gaji), pemberi kerja tetap membuat bukti potong dan melaporkannya dalam SPT Masa PPh 21/26."
      ],
      poinKunci: [
        { label: "Lapisan pesangon", nilai: "0% ≤ 50 jt · 5% 50–100 jt · 15% 100–500 jt · 25% > 500 jt", dasar: "PP 68/2009 (lapisan tarif pesangon)", berlakuSejak: "2009-11-16" },
        { label: "Pensiun/THT/JHT sekaligus", nilai: "0% ≤ Rp50 jt; 5% di atasnya (final)", dasar: "PP 68/2009 (manfaat pensiun, THT, JHT sekaligus)", berlakuSejak: "2009-11-16" },
        { label: "Jangka kumulatif", nilai: "pembayaran bertahap dalam ≤ 2 tahun kalender digabung", dasar: "PP 68/2009; PMK 16/PMK.03/2010", berlakuSejak: "2009-11-16" },
        { label: "PPh 21 DTP 2026", nilai: "5 sektor, bruto ≤ Rp10 jt/bulan, Masa Jan–Des 2026", dasar: "PMK 105/2025", berlakuSejak: "2026-01-01" }
      ],
      dasarHukum: [
        { pasal: "PP 68/2009 Pasal 2–5", catatan: "pesangon, pensiun, THT/JHT sekaligus: sifat final dan lapisan tarif" },
        { pasal: "PMK 16/PMK.03/2010", catatan: "tata cara pemotongan pesangon dan pensiun sekaligus" },
        { pasal: "PMK 105/2025", catatan: "PPh 21 DTP sektor padat karya Masa Pajak 2026" },
        { pasal: "Pasal 21 ayat (1) huruf a dan c UU PPh", catatan: "pemotongan oleh pemberi kerja serta dana pensiun/BPJS Ketenagakerjaan atas pesangon, pensiun, THT/JHT" }
      ],
      jebakan: [
        { teks: "Menerapkan tarif lapisan tertinggi ke seluruh pesangon — tarif berlapis (progresif) atas tiap bagian", tagSebab: "salah-hitung" },
        { teks: "Memakai lapisan pesangon (15%) untuk JHT — JHT/pensiun sekaligus hanya 0% dan 5%", tagSebab: "salah-klasifikasi" },
        { teks: "Pembayaran tahap kedua di tahun berikutnya dihitung dari nol — kumulatif selama ≤ 2 tahun kalender", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "Seorang pegawai di-PHK dan menerima pesangon Rp120.000.000 sekaligus pada 2026. Berapa PPh 21 final?",
        jawaban: "Rp5.500.000",
        langkah: [["0% × Rp50.000.000", "Rp0"], ["5% × Rp50.000.000", "Rp2.500.000"], ["15% × Rp20.000.000", "Rp3.000.000"], ["Total PPh 21 final", "Rp5.500.000"]]
      },
      verifikasi: "◐",
      peringatan: "Perlakuan pembayaran pesangon pada tahun kalender ketiga dan seterusnya (tarif Pasal 17, tidak final) bertanda ◐ di lembar riset, dan tanggal berlaku PP 68/2009 belum dicek ke teks resmi; lapisan tarif pesangon/JHT dan ketentuan PPh 21 DTP terverifikasi."
    },
    {
      id: "A3.5", slug: "pph22", judul: "PPh Pasal 22: pemungut, objek, dan tarif",
      estimasiMenit: 15, jenisDominan: ["klasifikasi", "hitung"],
      ringkasan: [
        "Pemungut: Bank Devisa dan DJBC (impor/ekspor), bendahara pemerintah/KPA/pejabat penerbit SPM/bendahara pengeluaran (pembelian barang), BUMN tertentu, badan usaha industri tertentu (semen, kertas, baja, otomotif, farmasi), ATPM/APM, produsen/importir BBM-BBG-pelumas, industri/eksportir yang membeli hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur, pengusaha emas, WP badan penjual barang sangat mewah, dan marketplace yang ditunjuk (PMK 37/2025).",
        "Impor: 2,5% × nilai impor (CIF + bea masuk + pungutan pabean lain) bagi importir ber-API; 7,5% tanpa API; 7,5% × harga lelang barang tidak dikuasai; 0,5% untuk kedelai, gandum, tepung terigu ber-API; 10%/7,5% barang tertentu menurut ketentuan PPh Pasal 22.",
        "Bendahara: 1,5% × harga pembelian tidak termasuk PPN; dikecualikan pembayaran ≤ Rp2.000.000 (bukan pecahan), pembelian BBM/listrik/gas/air/benda pos. BUMN tertentu: 1,5%, dikecualikan pembayaran ≤ Rp10.000.000.",
        "Industri: semen 0,25%, kertas 0,1%, baja 0,3%, otomotif 0,45%, farmasi 0,3% × DPP PPN; pembelian hasil bumi yang belum melalui proses industri manufaktur oleh industri/eksportir 0,25% dari siapa pun penjualnya (dikecualikan pembelian paling banyak Rp20.000.000 dalam satu Masa Pajak); emas batangan/perhiasan 0,25% × harga jual (dikecualikan konsumen akhir, WP PPh final PP 55/2022, pemegang SKB, Bank Indonesia).",
        "Barang sangat mewah (PMK 92/2019): 5% untuk pesawat/helikopter pribadi, kapal pesiar, kendaraan roda empat > Rp2 miliar atau > 3.000 cc, roda dua/tiga > Rp300 juta atau > 250 cc; 1% untuk rumah beserta tanah > Rp30 miliar atau luas bangunan > 400 m² dan apartemen > Rp30 miliar atau > 150 m².",
        "Produsen/importir BBM, BBG, dan pelumas: BBM 0,25% × harga jual tanpa PPN bila dijual kepada SPBU yang menjual BBM yang dibeli dari PT Pertamina (Persero) atau anak usahanya, 0,3% bila kepada SPBU yang menjual BBM yang dibeli selain dari Pertamina/anak usahanya dan kepada pembeli selain SPBU (termasuk pemakai akhir industri); yang menentukan adalah asal BBM, bukan merek SPBU; BBG dan pelumas 0,3%. Pemakai akhir tidak dikecualikan.",
        "Sifat: umumnya kredit pajak; final untuk BBM dan BBG yang dibeli penyalur/agen, sedangkan PPh 22 atas pelumas tidak final, termasuk bila pembelinya penyalur/agen (PMK 51/2025 Pasal 10 ayat (2) dan (3)). Bendahara yang membeli dari WP PPh final UMKM yang menyerahkan Surat Keterangan memungut PPh final 0,5%, bukan PPh 22 1,5%. Tanpa NPWP: tarif 100% lebih tinggi. Marketplace: 0,5% × nilai transaksi bruto, dipungut oleh marketplace yang ditunjuk Direktur Jenderal Pajak (PMK 37/2025 Pasal 4; PMK 37/2025 berlaku sejak diundangkan 14 Juli 2025); jadwal pemungutan 1 November 2026 berasal dari pengumuman, bukan dari naskah PMK; pedagang orang pribadi dengan peredaran bruto tahun berjalan ≤ Rp500 juta yang menyampaikan surat pernyataan tidak dipungut; bagi WP PPh final UMKM pungutan menjadi pelunasan PPh final."
      ],
      poinKunci: [
        { label: "Impor API / non-API", nilai: "2,5% / 7,5% × nilai impor", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
        { label: "Bendahara", nilai: "1,5%; dikecualikan ≤ Rp2.000.000 (tidak termasuk PPN, tidak dipecah)", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
        { label: "Industri semen/kertas/baja/otomotif/farmasi", nilai: "0,25% / 0,1% / 0,3% / 0,45% / 0,3% × DPP PPN", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
        { label: "Emas", nilai: "0,25% × harga jual (konsumen akhir dikecualikan)", dasar: "PMK 48/2023 s.t.d.t.d. PMK 52/2025", berlakuSejak: "2023-05-01" },
        { label: "Barang sangat mewah", nilai: "5% kendaraan/pesawat/kapal; 1% rumah/apartemen", dasar: "PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19" },
        { label: "BBM/BBG/pelumas", nilai: "BBM 0,25% ke SPBU yang menjual BBM dari Pertamina/anak usahanya; 0,3% ke SPBU lain/selain SPBU; BBG dan pelumas 0,3%; final bagi penyalur/agen hanya untuk BBM/BBG, pelumas tidak final", dasar: "PMK 51/2025 (Pasal 3 ayat (1) huruf c untuk tarif; Pasal 10 ayat (2) dan (3) untuk sifat final/tidak final; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" },
        { label: "Marketplace", nilai: "◐ 0,5% × bruto; pemungut ditunjuk DJP, jadwal pemungutan diumumkan 1 Nov 2026", dasar: "PMK 37/2025 Pasal 4 (penunjukan oleh DJP); berlaku sejak diundangkan 14 Juli 2025", berlakuSejak: "2025-07-14" },
        { label: "Tanpa NPWP", nilai: "100% lebih tinggi", dasar: "Pasal 22 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 22 ayat (1) dan (3) UU PPh", catatan: "pemungut yang ditunjuk; tarif 100% lebih tinggi tanpa NPWP" },
        { pasal: "PMK 51/2025", catatan: "pemungut, tarif, pengecualian; PMK 51/2025 berlaku 1 Agustus 2025, sedangkan rezim PMK 34/PMK.010/2017 dicabut PMK 81/2024 per 1 Januari 2025; tarif pokok dilanjutkan" },
        { pasal: "PMK 48/2023 s.t.d.t.d. PMK 52/2025", catatan: "PPh 22 emas batangan dan perhiasan 0,25%; PMK 52/2025 (berlaku 1 Agustus 2025) menambah pengecualian atas penjualan emas batangan kepada lembaga jasa keuangan penyelenggara usaha bulion" },
        { pasal: "PMK 253/PMK.03/2008 s.t.d.t.d. PMK 92/PMK.03/2019", catatan: "barang sangat mewah 5% dan 1%" },
        { pasal: "PMK 37/2025", catatan: "marketplace sebagai pemungut PPh 22 0,5%" }
      ],
      jebakan: [
        { teks: "Menghitung PPh 22 impor dari nilai CIF saja — nilai impor sudah termasuk bea masuk dan pungutan pabean lain", tagSebab: "salah-hitung" },
        { teks: "Bendahara menghitung 1,5% dari harga termasuk PPN — dasar adalah harga pembelian tidak termasuk PPN", tagSebab: "salah-hitung" },
        { teks: "Memakai tarif emas batangan 0,45% (sebelum PMK 48/2023) — kini 0,25% untuk batangan dan perhiasan", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "Bendahara dinas membeli meja kantor Rp6.660.000 termasuk PPN (tarif efektif 11%). Berapa PPh 22 yang dipungut?",
        jawaban: "Rp90.000",
        langkah: [["Harga tidak termasuk PPN = Rp6.660.000 ÷ 1,11", "Rp6.000.000"], ["Lebih dari Rp2.000.000 → terutang", "ya"], ["PPh 22 = 1,5% × Rp6.000.000", "Rp90.000"]]
      },
      verifikasi: "◐",
      peringatan: "Jadwal pemungutan marketplace 1 November 2026 bersumber sekunder dan masih bisa berubah (PMK 37/2025 sendiri berlaku sejak diundangkan 14 Juli 2025; kewajiban memungut melekat setelah marketplace ditunjuk DJP); PMK 52/2025 (perubahan kedua PMK 48/2023, berlaku 1 Agustus 2025) tidak mengubah tarif emas 0,25% tetapi menambah pengecualian atas penjualan emas batangan kepada lembaga jasa keuangan penyelenggara usaha bulion, yang rinciannya belum dibaca dari naskah. Tarif, pengecualian (termasuk ambang BUMN Rp10.000.000), saat terutang (BUMN: saat pembayaran), penggolongan SPBU menurut asal BBM, objek hasil bumi tanpa syarat pedagang pengumpul, dan sifat final/tidak final PPh 22 sudah dicocokkan dengan naskah PMK 51/2025."
    },
    {
      id: "A3.6", slug: "pph23", judul: "PPh Pasal 23",
      estimasiMenit: 14, jenisDominan: ["klasifikasi", "hitung"],
      ringkasan: [
        "Objek tarif 15% × bruto: dividen (kecuali yang dikecualikan Pasal 4 ayat (3) huruf f), bunga termasuk premium/diskonto/imbalan jaminan utang, royalti, serta hadiah/penghargaan/bonus selain yang telah dipotong PPh 21.",
        "Objek tarif 2% × bruto tidak termasuk PPN: sewa dan penghasilan lain sehubungan penggunaan harta selain tanah/bangunan; imbalan jasa teknik, jasa manajemen, jasa konstruksi (yang bukan objek PP 9/2022), jasa konsultan, dan 62 jenis jasa lain PMK 141/PMK.03/2015 (a.l. katering, cleaning service, outsourcing, maklon, perawatan mesin/kendaraan, event organizer, freight forwarding, pelatihan, pencetakan).",
        "Penerima tanpa NPWP: tarif 100% lebih tinggi (2% menjadi 4%, 15% menjadi 30%) — Pasal 23 ayat (1a).",
        "Dikecualikan (Pasal 23 ayat (4)): penghasilan yang dibayar kepada bank; sewa guna usaha dengan hak opsi; dividen yang dikecualikan Pasal 4 ayat (3) huruf f (termasuk dividen antarbadan dalam negeri tanpa syarat kepemilikan sejak perubahan oleh UU Cipta Kerja yang dipertahankan UU HPP) dan dividen OP yang diinvestasikan; SHU koperasi; penghasilan yang dibayar kepada badan usaha jasa keuangan penyalur pinjaman.",
        "Jumlah bruto jasa (selain katering dan jasa yang dikenai PPh final) tidak termasuk gaji tenaga kerja yang dibayarkan kepada pihak lain, pengadaan material yang didukung faktur pembelian, dan reimbursement, sepanjang ada kontrak dan bukti pendukung.",
        "Saat terutang: akhir bulan dilakukannya pembayaran, disediakan untuk dibayar, atau jatuh tempo, mana yang lebih dahulu (Pasal 23 ayat (1) UU PPh dan ketentuan pelaksanaannya); bukti potong BPPU melalui e-Bupot Unifikasi Coretax; setor tanggal 15, lapor 20 hari."
      ],
      poinKunci: [
        { label: "Tarif 15%", nilai: "dividen, bunga, royalti, hadiah/penghargaan/bonus", dasar: "Pasal 23 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Tarif 2%", nilai: "sewa harta selain T/B; jasa teknik, manajemen, konstruksi non-final, konsultan, jasa lain", dasar: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Jasa lain", nilai: "62 jenis (PMK 141/2015)", dasar: "PMK 141/PMK.03/2015 Pasal 1", berlakuSejak: "2015-08-26" },
        { label: "Tanpa NPWP", nilai: "100% lebih tinggi (4% / 30%)", dasar: "Pasal 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Dikecualikan", nilai: "bank, SGU hak opsi, dividen 4(3)f, SHU koperasi, jasa keuangan tertentu", dasar: "Pasal 23 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }
      ],
      dasarHukum: [
        { pasal: "Pasal 23 ayat (1), (1a), dan (4) UU PPh", catatan: "objek, tarif, tarif tanpa NPWP, pengecualian" },
        { pasal: "PMK 141/PMK.03/2015 Pasal 1", catatan: "daftar jasa lain dan pengertian jumlah bruto" },
        { pasal: "Pasal 4 ayat (3) huruf f UU PPh s.t.d.t.d. UU HPP", catatan: "dividen yang dikecualikan dari objek" },
        { pasal: "Pasal 23 ayat (1) UU PPh (frasa 'dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo')", catatan: "saat terutang PPh 23" }
      ],
      jebakan: [
        { teks: "Sewa gedung/ruko dipotong PPh 23 2% — sewa tanah dan/atau bangunan dikenai PPh final 4 ayat (2) 10%", tagSebab: "salah-klasifikasi" },
        { teks: "Honorarium tenaga ahli orang pribadi dipotong PPh 23 — itu objek PPh 21", tagSebab: "salah-klasifikasi" },
        { teks: "Dividen ke PT induk dengan kepemilikan < 25% dipotong 15% (aturan lama) — kini semua dividen antarbadan DN dikecualikan", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PT Y (PKP) membayar jasa konsultansi manajemen Rp50.000.000 (belum termasuk PPN) kepada CV Z yang ber-NPWP. Berapa PPh yang wajib dipotong PT Y?",
        jawaban: "Rp1.000.000",
        langkah: [["Klasifikasi: jasa manajemen kepada badan DN", "PPh 23 ayat (1) huruf c"], ["Tarif (ber-NPWP)", "2%"], ["DPP tidak termasuk PPN", "Rp50.000.000"], ["PPh 23 = 2% × Rp50.000.000", "Rp1.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A3.7", slug: "pph-4-2-final", judul: "PPh Pasal 4 ayat (2) final",
      estimasiMenit: 16, jenisDominan: ["klasifikasi", "hitung"],
      ringkasan: [
        "Persewaan tanah dan/atau bangunan: 10% × bruto nilai sewa termasuk service charge (PP 34/2017); dipotong penyewa yang ditunjuk pemotong atau disetor sendiri bila penyewa orang pribadi bukan pemotong.",
        "Jasa konstruksi (PP 9/2022): pekerjaan konstruksi kualifikasi kecil/sertifikat kompetensi perseorangan 1,75%; tanpa sertifikat 4%; kualifikasi menengah/besar/spesialis 2,65%; konsultansi konstruksi bersertifikat 3,5%, tanpa sertifikat 6%; pekerjaan terintegrasi 2,65% (bersertifikat) atau 4%.",
        "Bunga deposito/tabungan/diskonto SBI: 20% (WPLN 20% atau P3B); dikecualikan deposito/tabungan dengan jumlah tidak melebihi Rp7.500.000 (bukan pecahan). Bunga/diskonto obligasi termasuk SBN: 10% untuk WPDN/BUT (PP 91/2021). Bunga simpanan koperasi kepada anggota OP: 0% s.d. Rp240.000/bulan, 10% di atasnya.",
        "Hadiah undian: 25% × bruto. Penjualan saham di bursa: 0,1% × nilai transaksi, tambahan 0,5% × nilai saham untuk saham pendiri saat IPO.",
        "Pengalihan hak atas tanah/bangunan (PP 34/2016): 2,5% × bruto nilai pengalihan; 1% untuk rumah sederhana/rusun sederhana oleh pengembang; 0% kepada pemerintah/BUMN penugasan khusus; dikecualikan OP berpenghasilan di bawah PTKP dengan nilai < Rp60 juta, hibah keluarga sedarah garis lurus/keagamaan, dan warisan. Disetor sendiri sebelum akta ditandatangani dan divalidasi.",
        "Dividen yang diterima OP dalam negeri: dikecualikan bila diinvestasikan di Indonesia ≥ 3 tahun; jika tidak, 10% final disetor sendiri paling lambat tanggal 15 bulan berikutnya. Penghasilan usaha WP tertentu 0,5% (PP 55/2022 jo. PP 20/2026)."
      ],
      poinKunci: [
        { label: "Sewa tanah/bangunan", nilai: "10% × bruto termasuk service charge", dasar: "PP 34/2017", berlakuSejak: "2018-01-02" },
        { label: "Konstruksi", nilai: "1,75% / 4% / 2,65%; konsultansi 3,5% / 6%", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21" },
        { label: "Deposito/tabungan", nilai: "20%; dikecualikan ≤ Rp7,5 juta", dasar: "PP 131/2000; KMK 51/KMK.04/2001", berlakuSejak: "2001-01-01" },
        { label: "Obligasi WPDN", nilai: "10% (sebelumnya 15%)", dasar: "PP 91/2021", berlakuSejak: "2021-08-30" },
        { label: "Undian · saham bursa", nilai: "25% · 0,1% (+0,5% pendiri)", dasar: "PP 132/2000; PP 14/1997", berlakuSejak: "2001-01-01" },
        { label: "Pengalihan tanah/bangunan", nilai: "2,5% / 1% / 0%; < Rp60 jt OP di bawah PTKP dikecualikan", dasar: "PP 34/2016 Pasal 2 dan Pasal 6", berlakuSejak: "2016-09-07" },
        { label: "Dividen OP tidak diinvestasikan", nilai: "10% final, disetor sendiri", dasar: "Pasal 4 ayat (3) huruf f dan Pasal 17 ayat (2c) UU PPh; PMK 18/2021", berlakuSejak: "2021-02-17" }
      ],
      dasarHukum: [
        { pasal: "Pasal 4 ayat (2) UU PPh", catatan: "delegasi penghasilan tertentu yang dikenai PPh final" },
        { pasal: "PP 34/2017 Pasal 2–4", catatan: "sewa tanah/bangunan 10%" },
        { pasal: "PP 9/2022 Pasal 3", catatan: "tarif jasa konstruksi" },
        { pasal: "PP 131/2000 dan KMK 51/KMK.04/2001", catatan: "bunga deposito/tabungan 20%, pengecualian Rp7,5 juta" },
        { pasal: "PP 91/2021", catatan: "bunga obligasi 10%" },
        { pasal: "PP 132/2000", catatan: "hadiah undian 25%" },
        { pasal: "PP 34/2016 Pasal 2, 3, dan 6", catatan: "pengalihan hak atas tanah/bangunan" },
        { pasal: "PP 14/1997", catatan: "transaksi saham di bursa 0,1%" }
      ],
      jebakan: [
        { teks: "Memakai tarif konstruksi PP 51/2008 (2%/3%/4%) — sejak PP 9/2022 menjadi 1,75%/2,65%/4% dan konsultansi 3,5%/6%", tagSebab: "angka-usang" },
        { teks: "Batas Rp7,5 juta dibaca sebagai batas bunga — batas itu untuk jumlah pokok deposito/tabungan", tagSebab: "salah-baca" },
        { teks: "PHTB memakai tarif lama 5% — sejak PP 34/2016 tarifnya 2,5%", tagSebab: "angka-usang" }
      ],
      contohSoal: {
        stem: "PT Y menyewa gedung kantor dari Tuan C seharga Rp100.000.000 per tahun. Berapa PPh yang wajib dipotong PT Y?",
        jawaban: "Rp10.000.000",
        langkah: [["Klasifikasi: sewa tanah/bangunan", "PPh 4 ayat (2) final"], ["Tarif", "10%"], ["PPh = 10% × Rp100.000.000", "Rp10.000.000"]]
      },
      verifikasi: "✅"
    },
    {
      id: "A3.8", slug: "pph15-pph26-p3b", judul: "PPh Pasal 15, Pasal 26, dan P3B",
      estimasiMenit: 16, jenisDominan: ["hitung", "klasifikasi"],
      ringkasan: [
        "PPh Pasal 15 memakai norma penghitungan khusus: pelayaran dalam negeri 1,2% × peredaran bruto (final); penerbangan dalam negeri berdasarkan perjanjian charter 1,8% × peredaran bruto (tidak final, kredit pajak); pelayaran/penerbangan luar negeri (BUT) 2,64% × peredaran bruto (final); kantor perwakilan dagang asing dari negara non-P3B 0,44% × nilai ekspor bruto (final).",
        "PPh Pasal 26: 20% × bruto atas dividen, bunga, royalti, sewa, imbalan jasa/pekerjaan/kegiatan, hadiah, pensiun, premi swap, dan keuntungan pembebasan utang yang dibayarkan kepada WPLN selain BUT — atau tarif P3B bila syarat terpenuhi.",
        "Perkiraan penghasilan neto: penjualan harta di Indonesia (hanya perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, dan/atau pesawat terbang ringan menurut PMK 82/PMK.03/2009), penjualan langsung saham perseroan terbatas dalam negeri yang bukan emiten atau perusahaan publik (Pasal 238 dan Pasal 239 PMK 81/2024; dipotong pembeli, atau dipungut perseroan bila pembelinya Wajib Pajak luar negeri), dan saham perusahaan antara (conduit, PMK 258/PMK.03/2008) 20% × 25% = 5% × harga jual; premi asuransi ke luar negeri dibayar tertanggung 20% × 50% = 10%, oleh perusahaan asuransi 2%, oleh reasuransi 1%.",
        "Branch Profit Tax: laba setelah pajak BUT dikenai 20% (atau P3B) kecuali SELURUH Penghasilan Kena Pajak sesudah dikurangi PPh ditanamkan kembali di Indonesia sesuai PMK 14/PMK.03/2011 (penyertaan modal pada perusahaan baru atau yang sudah berdiri, pembelian aktiva tetap BUT, atau investasi aktiva tidak berwujud BUT, paling lambat akhir tahun pajak berikutnya). Penanaman kembali sebagian tidak mengurangi dasar BPT.",
        "Penerapan P3B (PMK 112/2025, menggantikan PER-25/PJ/2018): WPLN bukan subjek pajak dalam negeri, SKD/Form DGT (6 bagian) sudah diterima pemotong dan terekam di Coretax dalam batas waktu PMK 112/2025, beneficial owner untuk dividen/bunga/royalti, dan tidak ada penyalahgunaan P3B; tanpa SKD yang sah dipotong 20%.",
        "Pembayaran harga barang yang dibeli dari luar negeri (diimpor) bukan objek PPh 26; pelunasan PPh atas impornya melalui PPh 22 impor. Yang dipotong PPh 26 adalah jasa, royalti, bunga, sewa, dividen, dan objek Pasal 26 lainnya, sedangkan BUT di Indonesia dipotong PPh 23.",
        "Bukti potong WPLN: BPNR (Unifikasi) untuk PPh 26/4(2)/15, sedangkan imbalan pekerjaan/jasa/kegiatan orang pribadi WPLN dilaporkan di SPT Masa PPh 21/26. Setor tanggal 15, lapor 20 hari setelah masa pajak berakhir."
      ],
      poinKunci: [
        { label: "Pelayaran DN", nilai: "1,2% final", dasar: "KMK 416/KMK.04/1996", berlakuSejak: "1996-06-14" },
        { label: "Penerbangan DN (charter)", nilai: "1,8% tidak final", dasar: "KMK 475/KMK.04/1996 Pasal 2", berlakuSejak: "1996-07-23" },
        { label: "Pelayaran/penerbangan LN", nilai: "2,64% final", dasar: "KMK 417/KMK.04/1996", berlakuSejak: "1996-06-14" },
        { label: "Kantor perwakilan dagang asing", nilai: "0,44% × nilai ekspor bruto (non-P3B)", dasar: "KMK 634/KMK.04/1994; KEP-667/PJ./2001", berlakuSejak: "1995-01-01" },
        { label: "PPh 26 umum", nilai: "20% × bruto atau tarif P3B", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Harta · premi asuransi", nilai: "5% (hanya harta dalam daftar PMK 82/PMK.03/2009 Pasal 2 ayat (4)) · 10% / 2% / 1%", dasar: "Pasal 26 ayat (2) UU PPh; PMK 82/PMK.03/2009 (harta); KMK 624/KMK.04/1994 (premi asuransi)", berlakuSejak: "2009-01-01" },
        { label: "Branch Profit Tax", nilai: "20% × laba setelah pajak BUT", dasar: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "P3B", nilai: "PMK 112/2025; Form DGT 6 bagian", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31" }
      ],
      dasarHukum: [
        { pasal: "Pasal 15 UU PPh", catatan: "norma penghitungan khusus" },
        { pasal: "KMK 416/KMK.04/1996, KMK 417/KMK.04/1996, KMK 475/KMK.04/1996", catatan: "pelayaran DN, pelayaran/penerbangan LN, penerbangan DN" },
        { pasal: "KMK 634/KMK.04/1994", catatan: "kantor perwakilan dagang asing" },
        { pasal: "Pasal 26 ayat (1), (2), (4), dan (5) UU PPh", catatan: "tarif 20%, perkiraan neto, BPT, sifat final" },
        { pasal: "PMK 112/2025", catatan: "tata cara penerapan P3B dan Form DGT" }
      ],
      jebakan: [
        { teks: "Sewa kapal dari perusahaan pelayaran DN dipotong PPh 23 2% — itu objek PPh 15 final 1,2%", tagSebab: "salah-klasifikasi" },
        { teks: "Menerapkan tarif P3B padahal SKD/Form DGT belum diterima dan direkam dalam batas waktunya — tanpa SKD sah tetap 20%", tagSebab: "lupa-pasal" },
        { teks: "BPT dihitung dari PKP BUT, bukan dari laba setelah PPh badan", tagSebab: "salah-hitung" }
      ],
      contohSoal: {
        stem: "PT K membayar royalti Rp300.000.000 kepada perusahaan di Jepang yang tidak menyampaikan SKD/Form DGT. Berapa PPh 26 yang dipotong?",
        jawaban: "Rp60.000.000",
        langkah: [["Tanpa SKD sah → tarif", "20%"], ["PPh 26 = 20% × Rp300.000.000", "Rp60.000.000"], ["Bukti potong", "BPNR, setor tgl 15, lapor 20 hari"]]
      },
      verifikasi: "◐",
      peringatan: "Sifat tidak final PPh 15 penerbangan dalam negeri dan tarif BOT bersumber sekunder; tarif 1,2% / 1,8% / 2,64% / 0,44% serta ketentuan PPh 26 terverifikasi. Batas waktu penyerahan SKD/Form DGT (riset mencatat 'sebelum pembayaran') perlu dicek ke teks PMK 112/2025. Daftar harta yang penjualannya dikenai PPh 26 5% (perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, dan/atau pesawat terbang ringan) sudah dicocokkan ke PMK 82/PMK.03/2009 Pasal 2 ayat (4)."
    },
    {
      id: "A3.9", slug: "bupot-unifikasi-coretax", judul: "Bukti potong unifikasi, SPT Masa, dan Coretax",
      estimasiMenit: 12, jenisDominan: ["prosedur", "baris-spt"],
      ringkasan: [
        "Kode bukti potong PPh 21/26 di Coretax (PER-11/PJ/2025): BPA1 = bupot tahunan pegawai tetap/pensiunan berkala (dibuat pada Masa Pajak Terakhir); BPA2 = bupot tahunan ASN/TNI/Polri/pejabat negara dan pensiunannya; untuk Masa Pajak selain Masa Pajak Terakhir, pemotongan bulanan pegawai tetap dilaporkan dalam Formulir L-IA (Daftar Pemotongan Bulanan) lampiran SPT Masa PPh 21/26 (Ps. 11 ayat (1) huruf b angka 1); BPMP tidak termasuk jenis bukti potong dalam Ps. 6 ayat (1); BP21 = bupot PPh 21 tidak final/final bagi bukan pegawai, pegawai tidak tetap, peserta kegiatan, pesangon, dan penerima lain; BP26 = bupot PPh 26 atas imbalan pekerjaan, jasa, atau kegiatan orang pribadi Wajib Pajak luar negeri (PER-11/PJ/2025 Ps. 6 ayat (1) huruf d dan Ps. 7 ayat (1) huruf d).",
        "Bukti pemotongan/pemungutan Unifikasi: BPPU untuk WP dalam negeri (PPh 4 ayat (2), 15, 22, 23) dan BPNR untuk WP luar negeri (PPh 4 ayat (2), 15, 26 selain imbalan pekerjaan/jasa/kegiatan orang pribadi).",
        "SPT Masa PPh Unifikasi dan SPT Masa PPh 21/26 disusun otomatis dari bupot yang diterbitkan di e-Bupot Coretax; dokumen tertentu dipersamakan dengan bupot (misalnya SSP PPh 22 impor, dokumen pemungutan bendahara, invoice marketplace PMK 37/2025).",
        "Penyetoran PPh Pasal 21/26, 22, 23, 4 ayat (2), dan 15 yang dipotong/dipungut: paling lambat tanggal 15 bulan berikutnya (PMK 81/2024 Pasal 94); jatuh tempo pada hari libur bergeser ke hari kerja berikutnya (Pasal 100). PPh 22 impor disetor bersamaan bea masuk melalui bank devisa/DJBC.",
        "Pelaporan SPT Masa PPh 21/26 dan Unifikasi: paling lama 20 hari setelah Masa Pajak berakhir; terlambat lapor denda Rp100.000 per SPT Masa (Pasal 7 ayat (1) UU KUP); terlambat setor bunga Pasal 9 ayat (2a) UU KUP dengan tarif KMK bulanan.",
        "Bupot wajib dibuat saat pemotongan dan diberikan kepada penerima; penerima mengkreditkan PPh non-final berdasarkan bupot yang terekam di akunnya (prepopulated di SPT Tahunan).",
        "Pengertian umum: pemotongan dilakukan pihak yang membayar penghasilan (PPh 21, 23, 26, 4 ayat (2), 15), sedangkan pemungutan dilakukan pihak tertentu atas transaksi tertentu (PPh 22). PPh tidak final (PPh 21 non-final, 22, 23) menjadi kredit pajak penerima di SPT Tahunan; PPh final (4 ayat (2), PPh 21 final, PPh 15 tertentu, PPh 26 bagi WPLN tanpa BUT) tidak dikreditkan. Saat terutang umumnya saat dibayar, disediakan untuk dibayar, atau jatuh tempo pembayaran — mana yang lebih dulu. Penerima tanpa NPWP dikenai tarif lebih tinggi: PPh 21 20%, PPh 22 dan 23 100%; PPh 4 ayat (2) tidak mengenal tambahan tarif umum.",
        "Hak penerima penghasilan yang dipotong: menerima bukti potong; mengkreditkan PPh tidak final yang tercantum di bukti potong; menerima pengembalian kelebihan potong PPh 21 dari pemberi kerja pada Masa Pajak Terakhir; dan mengajukan keberatan atas pemotongan oleh pihak ketiga paling lama 3 bulan sejak tanggal pemotongan (Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP). Kewajibannya: memberikan NIK/NPWP kepada pemotong, memberitahukan status PTKP pada awal tahun atau saat mulai bekerja, dan melaporkan penghasilan beserta bukti potongnya dalam SPT Tahunan."
      ],
      poinKunci: [
        { label: "Setor pajak masa", nilai: "tanggal 15 bulan berikutnya (dulu tanggal 10)", dasar: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" },
        { label: "Lapor SPT Masa PPh", nilai: "20 hari setelah Masa Pajak berakhir", dasar: "Pasal 3 ayat (3) huruf a UU KUP; PMK 81/2024 Pasal 171", berlakuSejak: "2025-01-01" },
        { label: "Hari libur", nilai: "setor bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 Pasal 100", berlakuSejak: "2025-01-01" },
        { label: "Kode bupot PPh 21/26", nilai: "BPA1, BPA2, BP21, BP26", dasar: "PER-11/PJ/2025 Pasal 6 ayat (1)", berlakuSejak: "2025-05-22" },
        { label: "Kode bupot Unifikasi", nilai: "BPPU (WPDN), BPNR (WPLN)", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22" },
        { label: "Denda telat lapor SPT Masa PPh", nilai: "Rp100.000", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" },
        { label: "Tambahan tarif tanpa NPWP", nilai: "PPh 21: 20% lebih tinggi · PPh 22 dan 23: 100% lebih tinggi", dasar: "Pasal 21 ayat (5a), 22 ayat (3), 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01" },
        { label: "Keberatan atas pemotongan pihak ketiga", nilai: "≤ 3 bulan sejak tanggal pemotongan", dasar: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", berlakuSejak: "2008-01-01" }
      ],
      dasarHukum: [
        { pasal: "PMK 81/2024 Pasal 94, 100, dan 171", catatan: "tenggat setor, pergeseran hari libur, tenggat lapor" },
        { pasal: "PER-11/PJ/2025", catatan: "bentuk bukti potong dan SPT Masa di Coretax" },
        { pasal: "Pasal 3 ayat (3) dan Pasal 7 ayat (1) UU KUP", catatan: "batas lapor SPT Masa dan denda keterlambatan" },
        { pasal: "Pasal 9 ayat (2a) UU KUP", catatan: "bunga keterlambatan setor pajak masa" },
        { pasal: "Pasal 21 ayat (5a), 22 ayat (3), dan 23 ayat (1a) UU PPh", catatan: "tarif lebih tinggi bagi penerima tanpa NPWP" },
        { pasal: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", catatan: "keberatan atas pemotongan atau pemungutan oleh pihak ketiga" }
      ],
      jebakan: [
        { teks: "Masih menjawab setor tanggal 10 — sejak 2025 seragam tanggal 15", tagSebab: "angka-usang" },
        { teks: "Tenggat lapor PPh (20 hari) ditukar dengan PPN (akhir bulan berikutnya)", tagSebab: "salah-baca" },
        { teks: "PPh 21 bukan pegawai dilaporkan di SPT Masa Unifikasi — PPh 21/26 punya SPT Masa sendiri dengan BP21", tagSebab: "salah-klasifikasi" }
      ],
      contohSoal: {
        stem: "PT M memotong PPh 23 atas jasa pada Masa Pajak September 2026. Kapan batas setor dan lapor?",
        jawaban: "Setor 15 Oktober 2026; lapor 20 Oktober 2026",
        langkah: [["Tenggat setor: tanggal 15 bulan berikutnya", "15 Oktober 2026 (Kamis)"], ["Tenggat lapor: 20 hari setelah masa pajak", "20 Oktober 2026"], ["Bukti potong", "BPPU di e-Bupot Unifikasi"]]
      },
      verifikasi: "◐",
      peringatan: "Saat paling lambat penerbitan bupot (bersamaan SPT Masa) dan status pencabutan formal PER-24/PJ/2021 bersumber sekunder; kode bupot dan tenggat setor/lapor terverifikasi."
    }
  ],
  soal: [
    {
      id: "A3-001", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["B-2026-10"],
      stem: "Pada Masa Pajak Mei 2026 terdapat empat pembayaran imbalan kepada orang pribadi dalam negeri: (1) bendahara pengeluaran Kementerian X membayar honorarium narasumber seminar; (2) Dana Pensiun Y membayar uang pensiun bulanan kepada pensiunan; (3) PT Z membayar gaji pegawai tetapnya; dan (4) Kedutaan Besar Negara W di Jakarta membayar gaji staf lokal berkewarganegaraan Indonesia. Pihak pembayar yang tidak termasuk pemotong PPh Pasal 21, sehingga penerimanya wajib menghitung dan menyetor sendiri PPh-nya, adalah ...",
      kataKualifikasi: ["tidak termasuk"],
      opsi: { A: "Kantor perwakilan negara asing yang membayar gaji staf lokalnya", B: "Bendahara pengeluaran kementerian yang membayar honorarium narasumber", C: "Dana pensiun yang membayar uang pensiun berkala", D: "PT yang membayar gaji pegawainya" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kantor perwakilan negara asing dan organisasi internasional yang ditetapkan Menteri Keuangan bukan pemotong PPh 21; pegawainya menghitung dan menyetor sendiri PPh melalui SPT Tahunan.",
        jejakHitung: [],
        mengapaSalah: { B: "Bendahara pemerintah adalah pemotong PPh 21 atas gaji, honorarium, dan imbalan lain", C: "Dana pensiun termasuk pemotong atas uang pensiun berkala dan pembayaran sekaligus", D: "Pemberi kerja badan adalah pemotong utama PPh 21" },
        jebakan: "Frasa 'tidak termasuk pemotong' membalik pertanyaan: cari pihak yang dikecualikan oleh Pasal 21 ayat (2)."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) dan (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (pihak yang tidak termasuk pemotong)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A3-002",
      topik: "A3.1",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Tuan Bagas, pegawai tetap PT Lintas, menerima penghasilan bruto teratur Rp15.000.000 per bulan sepanjang 2026 (12 bulan). Besarnya biaya jabatan setahun yang dapat dikurangkan dalam penghitungan PPh 21 Masa Pajak Terakhir adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.000.000", B: "Rp9.000.000", C: "Rp2.400.000", D: "Rp500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Biaya jabatan 5% dari bruto dibatasi Rp500.000 per bulan atau Rp6.000.000 per tahun; karena 5% × Rp180 juta melebihi batas, yang dipakai adalah batas maksimal.",
        jejakHitung: [
          ["Bruto setahun = 12 × Rp15.000.000", "Rp180.000.000"],
          ["5% × Rp180.000.000", "Rp9.000.000"],
          ["Batas maksimal 12 × Rp500.000", "Rp6.000.000"],
          ["Biaya jabatan yang diakui", "Rp6.000.000"]
        ],
        mengapaSalah: {
          B: "Mengabaikan batas maksimal Rp6.000.000 setahun",
          C: "Rp2.400.000 adalah batas biaya pensiun bagi pensiunan, bukan biaya jabatan",
          D: "Rp500.000 adalah batas sebulan, bukan setahun"
        },
        jebakan: "Selalu bandingkan 5% × bruto dengan batas Rp500.000/bulan dan ambil yang lebih kecil."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (biaya jabatan 5%, paling banyak Rp500.000 per bulan; menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A3-003", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Doni (bukan pemegang saham) berpenghasilan bruto Rp30.000.000 per bulan. Pada Juli 2026 ia juga menerima dari pemberi kerja: makan siang di kantor bersama seluruh pegawai senilai Rp1.000.000, fasilitas apartemen sewaan senilai Rp3.500.000 per bulan, laptop kerja, dan bingkisan Iduladha Rp800.000. Nilai natura/kenikmatan yang menjadi objek PPh 21 bulan Juli adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.500.000", B: "Rp0", C: "Rp1.500.000", D: "Rp5.300.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Makanan di tempat kerja, bingkisan hari raya keagamaan, dan peralatan kerja dikecualikan; tempat tinggal non-komunal dikecualikan hanya sampai Rp2.000.000 per bulan sehingga selisihnya Rp1.500.000 menjadi objek.",
        jejakHitung: [["Makan di kantor, laptop, bingkisan hari raya", "dikecualikan"], ["Apartemen Rp3.500.000 − batas Rp2.000.000", "Rp1.500.000"], ["Objek PPh 21 natura Juli", "Rp1.500.000"]],
        mengapaSalah: { A: "Menganggap seluruh nilai apartemen objek, padahal ada bagian yang dikecualikan Rp2 juta/bulan", B: "Memakai aturan pra-UU HPP ketika natura bukan objek PPh bagi penerima", D: "Menjumlahkan semua natura tanpa menerapkan pengecualian PMK 66/2023" },
        jebakan: "Bingkisan hari raya keagamaan, makan bersama di tempat kerja, dan peralatan kerja dikecualikan tanpa batas nilai; yang dibatasi dalam soal ini hanya tempat tinggal non-komunal (Rp2 juta per bulan, kelebihannya objek)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PMK 66/2023 Pasal 4 dan Lampiran", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-004", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Dalam penghitungan PPh 21 pegawai tetap pada Masa Pajak Terakhir, komponen berikut bukan pengurang penghasilan bruto ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Biaya jabatan 5% dari penghasilan bruto", B: "Iuran pensiun yang dibayar sendiri oleh pegawai ke dana pensiun yang disahkan", C: "Zakat yang dibayarkan melalui pemberi kerja kepada badan amil zakat resmi", D: "Premi JKK dan JKM yang dibayar pemberi kerja" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Premi asuransi (JKK, JKM, BPJS Kesehatan) yang dibayar pemberi kerja justru menambah penghasilan bruto pegawai, bukan menguranginya; pengurang adalah biaya jabatan, iuran pensiun/JHT yang dibayar pegawai, zakat via pemberi kerja, dan PTKP.",
        jejakHitung: [],
        mengapaSalah: { A: "Biaya jabatan adalah pengurang eksplisit Pasal 21 ayat (3)", B: "Iuran pensiun yang ditanggung pegawai dikurangkan dari bruto", C: "Zakat/sumbangan keagamaan wajib via pemberi kerja mengurangi bruto sesuai PMK 168/2023" },
        jebakan: "Bedakan iuran yang ditanggung pegawai (pengurang) dan premi yang ditanggung pemberi kerja (penambah bruto)."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-005", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1,
      stem: "Rincian imbalan Tuan Ardi, pegawai tetap PT Sentra Niaga, untuk Masa Pajak Maret 2026: gaji pokok Rp9.000.000, tunjangan transportasi Rp1.000.000, THR Rp9.000.000, premi asuransi kesehatan swasta yang dibayar PT kepada perusahaan asuransi Rp400.000, dan iuran JHT bagian pemberi kerja (3,7%) yang disetor PT kepada BPJS Ketenagakerjaan Rp333.000. Komponen yang bukan merupakan objek PPh Pasal 21 Tuan Ardi pada masa tersebut adalah ...",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Premi asuransi kesehatan Rp400.000 yang dibayar PT kepada perusahaan asuransi", B: "Tunjangan transportasi Rp1.000.000", C: "Iuran JHT bagian pemberi kerja Rp333.000 yang disetor kepada BPJS Ketenagakerjaan", D: "THR Rp9.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Iuran pensiun/JHT yang dibayar pemberi kerja kepada dana pensiun yang disahkan atau BPJS Ketenagakerjaan dikecualikan dari objek PPh 21; yang menjadi objek adalah manfaatnya kelak saat dibayarkan.",
        jejakHitung: [],
        mengapaSalah: { A: "Premi asuransi yang dibayar pemberi kerja menambah bruto pegawai", B: "Tunjangan dalam bentuk uang adalah objek", D: "THR adalah penghasilan tidak teratur yang masuk bruto bulan diterimanya" },
        jebakan: "Premi asuransi (JKK/JKM/kesehatan) berbeda perlakuan dengan iuran pensiun/JHT meskipun sama-sama dibayar pemberi kerja."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (unsur penghasilan bruto; iuran pensiun/JHT yang dibayar pemberi kerja tidak termasuk penghasilan pegawai)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 4 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A3-006", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Tuan Arif berstatus belum menikah pada 1 Januari 2026, menikah pada Februari 2026, dan anak pertamanya lahir pada November 2026. Istrinya tidak bekerja. PTKP yang dipakai pemberi kerja dalam penghitungan PPh 21 Masa Pajak Terakhir tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp54.000.000", B: "Rp58.500.000", C: "Rp63.000.000", D: "Rp67.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "PTKP ditentukan oleh keadaan pada awal tahun pajak (1 Januari); perubahan status kawin atau tambahan tanggungan dalam tahun berjalan baru berlaku tahun berikutnya, sehingga 2026 tetap TK/0 = Rp54.000.000.",
        jejakHitung: [],
        mengapaSalah: { B: "K/0 baru berlaku untuk tahun pajak 2027", C: "K/1 menghitung istri dan anak yang belum ada pada awal tahun", D: "Rp67.500.000 adalah K/2 atau TK/3, tidak sesuai data" },
        jebakan: "Soal PTKP hampir selalu menguji tanggal penentu: 1 Januari, bukan saat perubahan terjadi."
      },
      dasarHukum: [{ pasal: "Pasal 7 ayat (1) dan (2) UU PPh", berlakuSejak: "2016-01-01" }, { pasal: "PMK 101/PMK.010/2016", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-007", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Nona Rina (TK/0) adalah pegawai tetap dengan gaji Rp5.500.000 pada Januari 2026 tanpa penghasilan lain. PPh Pasal 21 yang dipotong untuk Masa Pajak Januari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp27.500", C: "Rp36.250", D: "Rp13.750" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", C: "angka-usang" },
      pembahasan: {
        inti: "TK/0 masuk kategori A; bruto Rp5.500.000 berada pada lapisan lebih dari Rp5.400.000 sampai dengan Rp5.650.000 dengan TER 0,25%.",
        jejakHitung: [["Status TK/0 → kategori", "A"], ["Lapisan Rp5.400.000–5.650.000", "0,25%"], ["PPh 21 = 0,25% × Rp5.500.000", "Rp13.750"]],
        mengapaSalah: { A: "Menganggap di bawah PTKP bulanan; TER 0% hanya sampai Rp5.400.000", B: "Memakai lapisan berikutnya 0,5%", C: "Memakai metode progresif lama: (bruto − biaya jabatan − PTKP sebulan) × 5%" },
        jebakan: "Pada TER tidak ada pengurang biaya jabatan maupun PTKP bulanan; tarif langsung dikalikan bruto."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-008", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Andalas Prima memiliki tiga pegawai tetap dengan gaji Rp7.000.000 per bulan tanpa tunjangan lain, semuanya ber-NPWP/NIK terpadankan. Keadaan pada 1 Januari 2026: Andi belum menikah dan menanggung ibu kandungnya (Andi menikah pada Maret 2026); Budi menikah, istrinya tidak bekerja, dan memiliki dua anak; Citra menikah, suaminya pegawai swasta, dan mereka memiliki dua anak. Total PPh Pasal 21 yang dipotong PT Andalas Prima atas ketiga pegawai untuk Masa Pajak Januari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp192.500", B: "Rp227.500", C: "Rp157.500", D: "Rp262.500" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kategori TER mengikuti status PTKP pada 1 Januari: Andi TK/1 (ibu kandung adalah tanggungan garis lurus) masuk kategori A; Budi K/2 masuk kategori B; Citra sebagai pegawai wanita kawin yang suaminya berpenghasilan hanya mendapat PTKP untuk dirinya sendiri (TK/0) sehingga masuk kategori A.",
        jejakHitung: [["Andi TK/1 → kategori A, lapisan Rp6.750.000–7.500.000 = 1,25%", "Rp87.500"], ["Budi K/2 → kategori B, lapisan Rp6.850.000–7.300.000 = 0,75%", "Rp52.500"], ["Citra TK/0 (wanita kawin, suami bekerja) → kategori A = 1,25%", "Rp87.500"], ["Total PPh 21 Januari 2026", "Rp227.500"]],
        mengapaSalah: { A: "Memberi Citra status K/2; PTKP kawin dan tanggungan bagi pegawai wanita hanya diberikan bila suaminya tidak berpenghasilan (dengan surat keterangan)", C: "Memakai status Andi setelah menikah (baru berlaku 2027) dan status K/2 untuk Citra", D: "Menganggap semua pegawai kategori A tanpa melihat tanggungan Budi" },
        jebakan: "Dua jebakan sekaligus: tanggal penentu status (1 Januari) dan PTKP pegawai wanita kawin."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 7 ayat (1) dan (2) UU PPh", berlakuSejak: "2016-01-01" }, { pasal: "PMK 168/2023 (PTKP pegawai wanita kawin)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-009", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Hadi, pegawai tetap PT Sari Rasa, berstatus K/1 pada 1 Januari 2026 (istri tidak bekerja, satu anak); anak keduanya lahir pada 10 Januari 2026. Untuk Masa Pajak Februari 2026 ia menerima gaji Rp7.000.000 dan tunjangan makan berupa uang Rp1.000.000. PT Sari Rasa juga menanggung premi BPJS Kesehatan bagian pemberi kerja Rp280.000, menyediakan makan siang di kantin kantor untuk seluruh pegawai (bagian Tuan Hadi senilai Rp600.000), dan memotong iuran JHT bagian pegawai Rp140.000 dari gajinya. PPh Pasal 21 Masa Pajak Februari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp124.200", B: "Rp88.800", C: "Rp81.400", D: "Rp82.800" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Status 1 Januari K/1 (kelahiran anak kedua baru berpengaruh tahun berikutnya) masuk kategori B. Bruto TER = gaji + tunjangan uang + premi BPJS Kesehatan yang ditanggung pemberi kerja = Rp8.280.000; makan bersama di tempat kerja dikecualikan dari objek, dan iuran JHT pegawai baru dikurangkan pada Masa Pajak Terakhir. Lapisan B Rp7.300.000–9.200.000 = 1%.",
        jejakHitung: [["Status 1 Januari K/1 → kategori", "B"], ["Bruto = 7.000.000 + 1.000.000 + premi BPJS Kesehatan 280.000", "Rp8.280.000"], ["Makan siang bersama di kantor", "dikecualikan (PMK 66/2023)"], ["Iuran JHT bagian pegawai", "tidak mengurangi bruto TER"], ["Lapisan B Rp7.300.000–9.200.000", "1%"], ["PPh 21 = 1% × Rp8.280.000", "Rp82.800"]],
        mengapaSalah: { A: "Memakai kategori A (lapisan Rp7.500.000–8.550.000 = 1,5%) padahal K/1 masuk kategori B", B: "Memasukkan makan siang bersama di kantor yang dikecualikan (bruto Rp8.880.000 × 1%)", C: "Mengurangkan iuran JHT bagian pegawai sebelum menerapkan TER (Rp8.140.000 × 1%)" },
        jebakan: "Tiga godaan sekaligus: kategori dari status 1 Januari, natura yang dikecualikan, dan pengurang yang belum boleh dipakai pada TER."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3) dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (unsur penghasilan bruto)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 66/2023 (makanan/minuman bagi seluruh pegawai)", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-010", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Ibu Wulan (K/3, suami tidak berpenghasilan dan memiliki surat keterangan pemerintah daerah) menerima penghasilan bruto Rp9.000.000 pada Maret 2026. PPh Pasal 21 yang dipotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp157.500", B: "Rp112.500", C: "Rp90.000", D: "Rp135.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "K/3 adalah satu-satunya status kategori C; bruto Rp9.000.000 berada pada lapisan lebih dari Rp8.850.000 sampai dengan Rp9.800.000 dengan TER 1,25%.",
        jejakHitung: [["Status K/3 → kategori", "C"], ["Lapisan C Rp8.850.000–9.800.000", "1,25%"], ["PPh 21 = 1,25% × Rp9.000.000", "Rp112.500"]],
        mengapaSalah: { A: "Memakai kategori A (lapisan Rp8.550.000–9.650.000 = 1,75%)", C: "Memakai kategori B (lapisan Rp7.300.000–9.200.000 = 1%)", D: "Memakai 1,5% dari lapisan C berikutnya" },
        jebakan: "Pegawai wanita kawin yang suaminya tidak berpenghasilan dan dibuktikan surat keterangan berhak PTKP kawin plus tanggungan."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3) dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 7 ayat (1) UU PPh", berlakuSejak: "2016-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-011", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Yoga (TK/1) belum memiliki NPWP dan NIK-nya belum dipadankan. Pada April 2026 ia menerima penghasilan bruto Rp11.000.000 sebagai pegawai tetap. PPh Pasal 21 yang dipotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp330.000", B: "Rp396.000", C: "Rp660.000", D: "Rp385.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "TK/1 masuk kategori A dengan TER 3% untuk lapisan Rp10.700.000–11.050.000; karena tidak ber-NPWP, PPh dipotong 120% dari yang seharusnya.",
        jejakHitung: [["Status TK/1 → kategori", "A"], ["TER lapisan Rp10.700.000–11.050.000", "3%"], ["PPh seharusnya = 3% × Rp11.000.000", "Rp330.000"], ["Tanpa NPWP = 120% × Rp330.000", "Rp396.000"]],
        mengapaSalah: { A: "Lupa menerapkan tarif 20% lebih tinggi bagi yang tidak ber-NPWP", C: "Memakai tarif 100% lebih tinggi yang berlaku untuk PPh 22/23, bukan PPh 21", D: "Memakai lapisan 3,5% yang keliru" },
        jebakan: "Kenaikan tarif tanpa NPWP: PPh 21 = 20% lebih tinggi; PPh 22 dan 23 = 100% lebih tinggi."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 58/2023 Lampiran", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-012", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Reza (K/0) bergaji Rp11.000.000 per bulan. Pada Maret 2026 ia juga menerima THR Rp14.000.000. PPh Pasal 21 Masa Pajak Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.500.000", B: "Rp330.000", C: "Rp750.000", D: "Rp2.250.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "THR digabung ke bruto bulan diterimanya, sehingga bruto Maret Rp25.000.000 dikenai TER kategori A lapisan Rp24.150.000–26.450.000 sebesar 10%.",
        jejakHitung: [["Status K/0 → kategori", "A"], ["Bruto Maret = Rp11.000.000 + Rp14.000.000", "Rp25.000.000"], ["TER lapisan Rp24.150.000–26.450.000", "10%"], ["PPh 21 = 10% × Rp25.000.000", "Rp2.500.000"]],
        mengapaSalah: { B: "Hanya menghitung gaji (3% × Rp11 juta) dan melupakan THR", C: "Mengalikan THR dengan tarif gaji 3%: Rp330.000 + Rp420.000", D: "Memakai lapisan 9% (Rp19.750.000–24.150.000)" },
        jebakan: "TER bersifat per bulan atas total bruto; bulan THR tarifnya melonjak lalu diseimbangkan pada hitung ulang Desember."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-013", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Fajar (TK/0) bekerja penuh tahun 2026 dengan bruto tetap Rp11.000.000 per bulan tanpa THR/bonus; ia membayar sendiri iuran pensiun Rp200.000 per bulan melalui pemberi kerja kepada dana pensiun yang pendiriannya disahkan OJK. PPh 21 Januari–November telah dipotong dengan TER kategori A 3% per bulan. PPh Pasal 21 yang dipotong pada Masa Pajak Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp330.000", B: "Rp810.000", C: "Rp4.440.000", D: "Rp480.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Pada Masa Pajak Terakhir PPh setahun dihitung dengan tarif Pasal 17 atas PKP, lalu dikurangi PPh yang telah dipotong Januari–November (11 bulan).",
        jejakHitung: [["Bruto setahun = 12 × Rp11.000.000", "Rp132.000.000"], ["Biaya jabatan = min(5% × 132 jt; Rp6.000.000)", "Rp6.000.000"], ["Iuran pensiun = 12 × Rp200.000", "Rp2.400.000"], ["Neto = 132.000.000 − 6.000.000 − 2.400.000", "Rp123.600.000"], ["PKP = neto − PTKP TK/0 Rp54.000.000", "Rp69.600.000"], ["PPh setahun = 5% × 60 jt + 15% × 9,6 jt", "Rp4.440.000"], ["PPh Jan–Nov = 11 × (3% × Rp11.000.000)", "Rp3.630.000"], ["PPh Desember = 4.440.000 − 3.630.000", "Rp810.000"]],
        mengapaSalah: { A: "Masih memakai TER pada Desember; Masa Pajak Terakhir wajib hitung ulang Pasal 17", C: "Lupa mengurangkan PPh yang sudah dipotong Januari–November", D: "Mengurangkan 12 bulan TER (Rp3.960.000), padahal Desember belum dipotong" },
        jebakan: "Pengurang hanya diterapkan di hitungan setahun; jumlah bulan TER yang dikurangkan adalah 11, bukan 12."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 (Masa Pajak Terakhir: tarif Pasal 17)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a dan Pasal 21 ayat (3) UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 240, verifikasi: "✅"
    },
    {
      id: "A3-014", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Nona Sari, pegawai tetap (WPDN) yang bekerja sejak 2023, mengundurkan diri efektif 30 Juni 2026. Perlakuan PPh 21 yang tepat atas penghasilannya tahun 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Masa Pajak Terakhir tetap Desember 2026: pemberi kerja menghitung ulang dengan tarif Pasal 17 pada akhir tahun atas penghasilan Januari–Juni, PTKP setahun penuh", B: "Masa Pajak Juni tetap memakai TER bulanan atas bruto Juni; penghitungan ulang Pasal 17 dilakukan sendiri oleh Nona Sari dalam SPT Tahunan", C: "Masa Pajak Juni menjadi Masa Pajak Terakhir: penghasilan Januari–Juni disetahunkan, dikenai tarif Pasal 17, diprorata 6/12, lalu dikurangi PPh Januari–Mei", D: "Masa Pajak Juni menjadi Masa Pajak Terakhir: tarif Pasal 17 atas penghasilan Januari–Juni tanpa disetahunkan, PTKP setahun penuh, dikurangi PPh Januari–Mei" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-hitung" },
      pembahasan: {
        inti: "Bagi pegawai yang berhenti dalam tahun berjalan, bulan berhenti menjadi Masa Pajak Terakhir: PPh dihitung dengan Pasal 17 atas penghasilan yang benar-benar diterima, PTKP tidak diprorata, dan penyetahunan tidak dilakukan karena kewajiban subjektifnya tidak berakhir.",
        jejakHitung: [],
        mengapaSalah: { A: "Masa Pajak Terakhir adalah bulan pegawai berhenti, bukan selalu Desember", B: "TER hanya untuk masa selain Masa Pajak Terakhir", C: "Penyetahunan hanya untuk pegawai yang kewajiban pajak subjektifnya mulai/berakhir dalam tahun berjalan (misalnya pindah ke luar negeri atau meninggal)" },
        jebakan: "Berhenti bekerja tidak sama dengan berakhirnya kewajiban pajak subjektif."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 (Masa Pajak Terakhir: tarif Pasal 17)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-015", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "RS Sehat Sentosa (WP badan) pada Masa Pajak Juli 2026 membayar: (1) jasa medis Rp60.000.000 kepada dr. Rani, dokter spesialis yang bukan pegawai rumah sakit dan ber-NPWP; (2) jasa pengujian laboratorium Rp20.000.000 kepada PT Lab Medika (ber-NPWP), tagihan tanpa PPN; dan (3) upah Nona Ika, perawat pegawai tidak tetap yang dibayar setiap hari, Rp400.000 per hari selama 20 hari kerja. Jumlah seluruh PPh yang wajib dipotong RS Sehat Sentosa atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.600.000", B: "Rp3.400.000", C: "Rp1.900.000", D: "Rp1.940.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "salah-baca" },
      pembahasan: {
        inti: "Penerima menentukan pasal: dokter orang pribadi bukan pegawai dipotong PPh 21 dengan tarif Pasal 17 × 50% bruto (BP21); jasa laboratorium oleh badan termasuk jasa lain PPh 23 2% (BPPU); upah harian Rp400.000 masih di lapisan TER harian 0%.",
        jejakHitung: [["dr. Rani → PPh 21: 5% × (50% × Rp60.000.000)", "Rp1.500.000"], ["PT Lab Medika → PPh 23 jasa laboratorium: 2% × Rp20.000.000", "Rp400.000"], ["Nona Ika: Rp400.000/hari ≤ Rp450.000 → TER harian 0%", "Rp0"], ["Total PPh dipotong", "Rp1.900.000"]],
        mengapaSalah: { A: "Memotong dr. Rani dengan PPh 23 2% (Rp1.200.000); jasa tenaga ahli orang pribadi adalah objek PPh 21", B: "Lupa dasar pengenaan 50% untuk bukan pegawai (Rp3.000.000 + Rp400.000)", D: "Memotong 0,5% atas upah harian Rp400.000 (Rp40.000) padahal masih di bawah batas 0% Rp450.000" },
        jebakan: "Satu rumah sakit, tiga penerima, tiga perlakuan: OP bukan pegawai (PPh 21, DPP 50%), badan (PPh 23), dan pegawai harian (TER harian)."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran (TER harian)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 (jasa laboratorium/pengujian)", berlakuSejak: "2015-08-24" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A3-016", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Tuan Bram, konsultan pajak orang pribadi (ber-NPWP, bukan pegawai), menerima fee Rp150.000.000 sekaligus dari PT Omega pada September 2026. PPh Pasal 21 yang wajib dipotong PT Omega adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.750.000", B: "Rp5.250.000", C: "Rp3.000.000", D: "Rp11.250.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "DPP 50% × Rp150 juta = Rp75 juta melewati lapisan pertama Pasal 17, sehingga dikenai 5% untuk Rp60 juta pertama dan 15% untuk sisanya.",
        jejakHitung: [["DPP = 50% × Rp150.000.000", "Rp75.000.000"], ["5% × Rp60.000.000", "Rp3.000.000"], ["15% × Rp15.000.000", "Rp2.250.000"], ["PPh 21", "Rp5.250.000"]],
        mengapaSalah: { A: "Memakai 5% flat atas seluruh DPP", C: "Memperlakukan sebagai PPh 23 2% × bruto", D: "Memakai 15% flat atas seluruh DPP" },
        jebakan: "Tarif Pasal 17 tetap progresif atas DPP bukan pegawai meskipun sekali bayar."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-017", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Bangun mempekerjakan Tuan Joko sebagai pekerja harian lepas dengan upah Rp600.000 per hari yang dibayar setiap hari. Selama Juni 2026 ia bekerja 10 hari. Total PPh Pasal 21 yang dipotong untuk Juni 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp75.000", C: "Rp150.000", D: "Rp30.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "angka-usang", C: "salah-baca" },
      pembahasan: {
        inti: "Upah harian Rp600.000 berada pada lapisan TER harian lebih dari Rp450.000 sampai dengan Rp2.500.000, sehingga dikenai 0,5% dari seluruh bruto harian setiap hari pembayaran.",
        jejakHitung: [["Lapisan TER harian Rp450.000–2.500.000", "0,5%"], ["PPh per hari = 0,5% × Rp600.000", "Rp3.000"], ["Total 10 hari", "Rp30.000"]],
        mengapaSalah: { A: "Menganggap tidak dipotong; batas 0% hanya sampai Rp450.000 per hari", B: "Memakai metode lama: (Rp600.000 − PTKP harian Rp450.000) × 5% per hari", C: "Memakai lapisan di atas Rp2.500.000 (Pasal 17 × 50%)" },
        jebakan: "Pada TER harian, 0,5% dikalikan seluruh upah harian, bukan selisih di atas Rp450.000."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran (TER harian)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-018", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "PT Cahaya mempekerjakan pegawai tidak tetap dengan kontrak enam bulan (Juli–Desember 2026) dan upah dibayar bulanan Rp6.000.000. Cara penghitungan PPh Pasal 21 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "TER bulanan sesuai kategori PTKP untuk Juli–November, lalu Masa Desember dihitung ulang dengan tarif Pasal 17", B: "TER harian atas rata-rata upah per hari kerja setiap bulan, karena statusnya pegawai tidak tetap", C: "TER bulanan sesuai kategori PTKP untuk seluruh masa pajak, termasuk Desember, tanpa penghitungan ulang Pasal 17", D: "Tarif Pasal 17 atas 50% dari upah bruto setiap bulan, seperti penghasilan bukan pegawai" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pegawai tidak tetap yang dibayar bulanan dikenai TER bulanan sepanjang masa pajak termasuk Masa Pajak Desember; penghitungan ulang Pasal 17 hanya untuk pegawai tetap dan penerima pensiun berkala.",
        jejakHitung: [],
        mengapaSalah: { A: "Hitung ulang Masa Pajak Terakhir hanya untuk pegawai tetap", B: "TER harian hanya untuk upah harian/mingguan/satuan/borongan", D: "DPP 50% hanya untuk bukan pegawai" },
        jebakan: "Kata 'dibayar bulanan' mengubah pegawai tidak tetap dari TER harian ke TER bulanan."
      },
      dasarHukum: [{ pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-019",
      topik: "A3.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Tuan Gunawan (ber-NPWP, status PTKP TK/0 pada 1 Januari 2026) adalah anggota dewan komisaris PT Arta. Ia menerima honorarium secara tidak teratur, yaitu Rp30.000.000 pada Januari 2026 dan Rp50.000.000 pada Maret 2026. PPh Pasal 21 yang dipotong atas pembayaran Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.000.000", B: "Rp4.500.000", C: "Rp1.250.000", D: "Rp7.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Sejak PMK 168/2023, PPh 21 atas penghasilan anggota dewan komisaris yang menerima penghasilan secara tidak teratur dihitung dengan TER bulanan sesuai kategori PTKP dikalikan bruto yang diterima dalam Masa Pajak itu, tanpa penjumlahan kumulatif (Pasal 3 ayat (1) huruf c, Pasal 12 ayat (1), Pasal 16 ayat (1)). Pembedanya adalah teratur atau tidaknya penghasilan: komisaris yang dibayar teratur termasuk Pegawai Tetap (Pasal 1 angka 10). TK/0 masuk kategori A; bruto Maret Rp50.000.000 berada pada lapisan Rp47.800.000-51.400.000 dengan TER 18%.",
        jejakHitung: [
          ["Status TK/0 → kategori", "A"],
          ["Bruto Masa Maret (tidak kumulatif)", "Rp50.000.000"],
          ["TER A lapisan Rp47.800.000–51.400.000", "18%"],
          ["PPh 21 = 18% × Rp50.000.000", "Rp9.000.000"]
        ],
        mengapaSalah: {
          B: "Memakai skema lama (tarif Pasal 17 atas bruto kumulatif Rp80 juta dikurangi PPh Januari) yang tidak berlaku lagi sejak PMK 168/2023",
          C: "Memakai DPP 50% × tarif Pasal 17 seperti bukan pegawai; komisaris yang menerima penghasilan secara tidak teratur memakai TER bulanan × bruto (PMK 168/2023 Pasal 16 ayat (1))",
          D: "Memakai tarif Pasal 17 15% atas seluruh Rp50 juta; komisaris yang menerima penghasilan secara tidak teratur memakai TER bulanan"
        },
        jebakan: "Komisaris yang menerima penghasilan secara tidak teratur bukan \"bukan pegawai\" biasa (DPP 50%) dan tidak lagi dihitung kumulatif: pakai TER bulanan × bruto masa itu. Bila honorariumnya dibayar teratur, ia Pegawai Tetap dan dihitung seperti pegawai tetap."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 Pasal 1 angka 10, Pasal 3 ayat (1) huruf c, Pasal 12 ayat (1), dan Pasal 16 ayat (1)", berlakuSejak: "2024-01-01" }, { pasal: "PP 58/2023 Pasal 2 ayat (4) huruf a dan Lampiran huruf A (TER kategori A)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-020",
      topik: "A3.2",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 21 ayat (5a) UU PPh: besarnya tarif yang diterapkan terhadap Wajib Pajak yang tidak memiliki Nomor Pokok Wajib Pajak lebih tinggi 20% (dua puluh persen) daripada tarif yang diterapkan terhadap Wajib Pajak yang dapat menunjukkan Nomor Pokok Wajib Pajak.",
      stem: "Nona Tika (TK/0 pada 1 Januari 2026) mulai bekerja sebagai pegawai tetap PT Lestari Jaya pada Januari 2026 dengan penghasilan bruto tetap Rp9.000.000 per bulan. Sampai Masa Pajak April 2026 ia belum memiliki NPWP dan NIK-nya belum dipadankan; pada Mei 2026 NIK-nya telah padan sehingga berfungsi sebagai NPWP, jauh sebelum Masa Pajak Terakhir. Berdasarkan kutipan tersebut, perlakuan PPh Pasal 21 Nona Tika yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Januari–April dipotong 200% (Rp315.000 per bulan) karena tanpa NPWP; selisihnya tidak dapat diperhitungkan kembali dalam tahun 2026", B: "Januari–April tidak dipotong karena belum ber-NPWP; seluruh PPh 21 tahun 2026 dipotong sekaligus pada Masa Pajak Terakhir", C: "Januari–April dipotong normal Rp157.500 per bulan karena NPWP diperoleh dalam tahun kalender yang sama sebelum Masa Pajak Terakhir", D: "Januari–April dipotong 120% (Rp189.000 per bulan); selisih Rp126.000 diperhitungkan dengan PPh 21 bulan-bulan berikutnya setelah ber-NPWP" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-baca" },
      pembahasan: {
        inti: "TK/0 masuk kategori A dengan TER 1,75% untuk bruto Rp9.000.000, sehingga PPh seharusnya Rp157.500; tanpa NPWP dipotong 120% = Rp189.000. Bagi pegawai tetap yang memperoleh NPWP dalam tahun kalender yang sama sebelum Masa Pajak Terakhir, selisih 20% yang telah dipotong diperhitungkan dengan PPh 21 terutang bulan-bulan berikutnya.",
        jejakHitung: [
          ["TK/0 → kategori A, lapisan Rp8.550.000–9.650.000", "1,75%"],
          ["PPh seharusnya = 1,75% × Rp9.000.000", "Rp157.500"],
          ["Tanpa NPWP = 120% × Rp157.500", "Rp189.000"],
          ["Selisih per bulan", "Rp31.500"],
          ["Selisih Januari–April = 4 × Rp31.500", "Rp126.000"]
        ],
        mengapaSalah: {
          A: "Tarif 100% lebih tinggi berlaku untuk PPh 22/23, bukan PPh 21; bagi pegawai tetap selisihnya justru dapat diperhitungkan",
          B: "Tidak ber-NPWP menaikkan tarif, bukan menunda pemotongan",
          C: "Pemotongan mengikuti status saat pembayaran; kelebihan 20% dikoreksi lewat perhitungan bulan berikutnya, bukan dengan memotong normal sejak awal"
        },
        jebakan: "Kenaikan 20% tetap diterapkan saat pembayaran; mekanisme memperhitungkan selisihnya berlaku bagi pegawai tetap/pensiunan berkala yang ber-NPWP sebelum Masa Pajak Terakhir."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 Pasal 15 ayat (1) (TER bulanan; Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" }, { pasal: "PER-16/PJ/2016 Pasal 20 ayat (2) dan ayat (4) (status setelah PMK 168/2023 belum dipastikan)", berlakuSejak: "2016-09-29" }, { pasal: "PP 58/2023 Pasal 2 ayat (4) huruf a dan Lampiran huruf A (TER kategori A)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke naskah: tarif 20% lebih tinggi ada di Pasal 21 ayat (5a) UU PPh. PMK 168/2023 TIDAK memuat ketentuan 120% maupun mekanisme memperhitungkan selisih 20% setelah ber-NPWP; mekanisme itu hanya ada di PER-16/PJ/2016 Pasal 20 ayat (4), pedoman pelaksana PMK 252/PMK.03/2008 yang dicabut PMK 168/2023. Belum pasti: apakah PER-16/PJ/2016 Pasal 20 masih berlaku, dan apakah NIK belum padan diperlakukan sebagai tanpa NPWP."
    },
    {
      id: "A3-021", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-A3-01",
      stem: "Data untuk soal ini dan tiga soal berikutnya (V-A3-01): Pada Masa Pajak September 2026, PT Mitra Sejahtera (PKP, Surabaya) melakukan tiga pembayaran: (1) jasa katering makan siang karyawan Rp25.000.000 kepada CV Rasa (ber-NPWP), termasuk bahan makanan Rp15.000.000 yang didukung faktur pembelian; (2) sewa ruko untuk gudang selama 12 bulan Rp60.000.000 ditambah service charge Rp6.000.000 kepada Tuan Budi (orang pribadi); dan (3) honorarium Rp40.000.000 kepada Tuan Candra, advokat orang pribadi ber-NPWP yang bukan pegawai PT Mitra Sejahtera. Atas pembayaran (3), PPh yang wajib dipotong PT Mitra Sejahtera adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 23 sebesar Rp800.000", B: "PPh 21 sebesar Rp2.000.000", C: "PPh 21 sebesar Rp1.200.000", D: "PPh 21 sebesar Rp1.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-baca" },
      pembahasan: {
        inti: "Advokat orang pribadi adalah bukan pegawai (tenaga ahli): PPh 21 = tarif Pasal 17 × (50% × Rp40.000.000) per pembayaran.",
        jejakHitung: [["DPP = 50% × Rp40.000.000", "Rp20.000.000"], ["Tarif Pasal 17 lapisan pertama", "5%"], ["PPh 21", "Rp1.000.000"]],
        mengapaSalah: { A: "PPh 23 2% hanya untuk jasa yang diberikan badan/BUT, bukan orang pribadi", B: "Lupa DPP 50%", C: "Menerapkan 120% padahal penerima ber-NPWP" },
        jebakan: "Dalam satu vignette, penerima orang pribadi vs badan menentukan pasal; jangan pukul rata PPh 23."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-022",
      topik: "A3.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kasusId: "V-A3-01",
      stem: "V-A3-01 — PT Mitra Sejahtera membayar jasa katering makan siang karyawan Masa September 2026 sebesar Rp25.000.000 kepada CV Rasa (ber-NPWP). Tagihan merinci bahan makanan Rp15.000.000 yang didukung faktur pembelian serta jasa pengolahan dan penyajian Rp10.000.000. Jasa katering tidak dikenai PPN karena menjadi objek pajak daerah. PPh yang wajib dipotong PT Mitra Sejahtera atas pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 23 sebesar Rp200.000", B: "PPh Pasal 23 sebesar Rp1.000.000", C: "PPh Pasal 23 sebesar Rp500.000", D: "Tidak ada, karena jasa katering merupakan objek pajak daerah sehingga bukan objek PPh Pasal 23" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Katering termasuk jasa lain PMK 141/PMK.03/2015 yang dipotong PPh 23 2%; pengecualian pembelian material dari jumlah bruto tidak berlaku untuk katering, sehingga dasar pemotongan adalah seluruh tagihan Rp25.000.000.",
        jejakHitung: [
          ["Klasifikasi: jasa katering oleh badan DN", "PPh 23 jasa lain, 2%"],
          ["Jumlah bruto katering (bahan tidak dikeluarkan)", "Rp25.000.000"],
          ["PPh 23 = 2% × Rp25.000.000", "Rp500.000"]
        ],
        mengapaSalah: {
          A: "Mengeluarkan bahan makanan dari jumlah bruto; pengecualian material tidak berlaku untuk katering",
          B: "Memakai tarif 4% padahal CV Rasa ber-NPWP",
          D: "Pajak daerah atas jasa boga hanya menggantikan PPN; PPh 23 tetap terutang"
        },
        jebakan: "Katering adalah jasa lain yang jumlah brutonya tidak dikurangi pembelian bahan."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 2 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 ayat (1), ayat (3) huruf a, dan ayat (6) huruf aj (jasa katering atau tata boga)", berlakuSejak: "2015-08-26" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A3-023",
      topik: "A3.7",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kasusId: "V-A3-01",
      stem: "V-A3-01 — PT Mitra Sejahtera pada September 2026 membayar di muka sewa ruko untuk gudang selama 12 bulan (Oktober 2026–September 2027) kepada Tuan Budi, orang pribadi pemilik ruko. Perjanjian merinci nilai sewa Rp60.000.000 dan service charge (keamanan, kebersihan, perawatan) Rp6.000.000 yang ditagih terpisah. Perlakuan PPh yang tepat atas pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PT Mitra Sejahtera memotong PPh Pasal 4 ayat (2) final Rp6.000.000 karena service charge tidak termasuk nilai sewa", B: "PT Mitra Sejahtera memotong PPh Pasal 4 ayat (2) final Rp6.600.000 pada Masa Pajak September 2026", C: "PT Mitra Sejahtera memotong PPh Pasal 23 sebesar Rp1.320.000", D: "PT Mitra Sejahtera tidak memotong; Tuan Budi menyetor sendiri PPh final setiap bulan selama masa sewa" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Sewa tanah dan/atau bangunan dikenai PPh final 10% dari jumlah bruto nilai persewaan, termasuk service charge meskipun ditagih terpisah; penyewa berbentuk badan wajib memotong saat pembayaran, sehingga seluruh nilai 12 bulan dipotong pada Masa September 2026.",
        jejakHitung: [
          ["Jumlah bruto = Rp60.000.000 + Rp6.000.000", "Rp66.000.000"],
          ["Tarif PPh 4 ayat (2) sewa tanah/bangunan", "10%"],
          ["PPh = 10% × Rp66.000.000", "Rp6.600.000"],
          ["Saat terutang", "saat pembayaran, Masa September 2026"]
        ],
        mengapaSalah: {
          A: "Service charge termasuk jumlah bruto nilai persewaan",
          C: "Sewa tanah/bangunan dikecualikan dari PPh 23 dan dikenai PPh final",
          D: "Setor sendiri oleh pemilik hanya bila penyewa bukan pemotong; PT adalah pemotong, dan PPh terutang saat pembayaran, bukan dicicil"
        },
        jebakan: "Ruko tetap bangunan: jangan tergoda PPh 23 sewa harta."
      },
      dasarHukum: [{ pasal: "PP 34/2017 (jumlah bruto nilai persewaan)", berlakuSejak: "2018-01-02" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A3-024", topik: "A3.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3, kasusId: "V-A3-01",
      stem: "V-A3-01 — Atas tiga pembayaran PT Mitra Sejahtera pada Masa Pajak September 2026 (katering kepada CV Rasa, sewa ruko kepada Tuan Budi, dan honorarium advokat Tuan Candra yang bukan pegawai), staf pajak harus menerbitkan bukti potong di Coretax, menyetor, dan melaporkan SPT Masa. Pilihan yang seluruhnya tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ketiga pembayaran dengan BPPU dalam satu SPT Masa PPh Unifikasi; setor paling lambat 15 Oktober 2026 dan lapor paling lambat 20 Oktober 2026", B: "Honorarium dengan BP21 (SPT Masa PPh 21/26), katering dan sewa dengan BPPU (SPT Masa Unifikasi); setor paling lambat 10 Oktober 2026 dan lapor paling lambat 20 Oktober 2026", C: "Honorarium dengan BP21 (SPT Masa PPh 21/26), katering dan sewa dengan BPPU (SPT Masa Unifikasi); setor paling lambat 15 Oktober 2026 dan lapor paling lambat 20 Oktober 2026", D: "Honorarium dengan BP21 (SPT Masa PPh 21/26), katering dan sewa dengan BPPU (SPT Masa Unifikasi); setor paling lambat 15 Oktober 2026 dan lapor paling lambat 31 Oktober 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "PPh 21 (termasuk bukan pegawai) memakai BP21 dan SPT Masa PPh 21/26, sedangkan PPh 23 dan PPh 4 ayat (2) memakai BPPU dalam SPT Masa PPh Unifikasi. Untuk Masa September 2026: setor paling lambat 15 Oktober (Kamis) dan lapor 20 hari setelah masa berakhir, yaitu 20 Oktober (Selasa).",
        jejakHitung: [["Tenggat setor = tanggal 15 bulan berikutnya", "15 Oktober 2026 (Kamis)"], ["Tenggat lapor = 20 hari setelah akhir Masa Pajak", "20 Oktober 2026 (Selasa)"]],
        mengapaSalah: { A: "PPh 21 bukan pegawai tidak masuk SPT Masa Unifikasi; Coretax memisahkan BP21 dan BPPU", B: "Tanggal 10 adalah tenggat lama sebelum PMK 81/2024", D: "Akhir bulan berikutnya adalah tenggat SPT Masa PPN, bukan SPT Masa PPh" },
        jebakan: "Tarif bisa benar tetapi dokumennya salah; Coretax memisahkan SPT Masa PPh 21/26 dan SPT Masa Unifikasi."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (BP21 dan BPPU)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-025", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Bima adalah direktur sekaligus pemegang saham 10% PT Arunika (status PTKP pada 1 Januari 2026: K/1). Pada Juli 2026 ia menerima gaji dan tunjangan Rp40.000.000. Perusahaan juga menyewa sebuah mobil yang dipakai Tuan Bima untuk keperluan kantor dan pribadi dengan biaya sewa Rp5.000.000 per bulan, menyediakan makan siang di kantor untuk seluruh pegawai (bagian Tuan Bima senilai Rp1.000.000), serta meminjamkan laptop kerja. Tidak ada imbalan lain. PPh Pasal 21 Tuan Bima Masa Pajak Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp6.000.000", B: "Rp7.200.000", C: "Rp7.650.000", D: "Rp7.820.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Fasilitas kendaraan dikecualikan hanya bagi pegawai yang bukan pemegang saham dan berpenghasilan bruto paling banyak Rp100 juta/bulan. Tuan Bima pemegang saham sehingga kenikmatan mobil (dinilai sebesar biaya sewa) menambah bruto, sedangkan makan bersama di kantor dan laptop dikecualikan. Bruto Rp45.000.000 kategori B (K/1) jatuh pada lapisan Rp41.100.000–45.800.000 = 16%.",
        jejakHitung: [["Gaji dan tunjangan", "Rp40.000.000"], ["Kenikmatan mobil (pemegang saham, tidak dikecualikan)", "Rp5.000.000"], ["Makan siang bersama dan laptop", "dikecualikan"], ["Bruto Juli", "Rp45.000.000"], ["K/1 → kategori B, lapisan Rp41.100.000–45.800.000", "16%"], ["PPh 21 = 16% × Rp45.000.000", "Rp7.200.000"]],
        mengapaSalah: { A: "Menganggap mobil dikecualikan; bruto Rp40 juta kategori B lapisan Rp37,1–41,1 juta = 15%", C: "Memakai kategori A (lapisan Rp43,85–47,8 juta = 17%) padahal K/1 masuk kategori B", D: "Ikut memasukkan makan siang bersama di kantor; bruto Rp46 juta = 17%" },
        jebakan: "Pengecualian kendaraan gugur bila penerimanya pemegang saham, berapa pun penghasilannya."
      },
      dasarHukum: [{ pasal: "PMK 66/2023 Lampiran (fasilitas kendaraan)", berlakuSejak: "2023-07-01" }, { pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PP 58/2023 Lampiran (TER kategori B)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-026",
      topik: "A3.2",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Tuan Galih (TK/0, ber-NPWP) bekerja sebagai pegawai tetap PT Lestari Abadi sejak 2022 dengan penghasilan bruto Rp9.000.000 per bulan, tanpa iuran pensiun dan tanpa THR selama 2026. Ia mengundurkan diri efektif 31 Mei 2026 untuk pindah ke perusahaan lain di Indonesia. PPh 21 Januari–April 2026 telah dipotong dengan TER kategori A 1,75% per bulan. Hasil penghitungan PPh Pasal 21 Masa Pajak Mei 2026 untuk Tuan Galih adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang potong Rp370.000 yang dipotong tambahan pada Masa Mei", B: "Kurang potong Rp382.500 yang dipotong tambahan pada Masa Mei", C: "PPh 21 Mei Rp157.500 sesuai TER kategori A 1,75%", D: "Lebih potong Rp630.000 yang dikembalikan kepada Tuan Galih" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Bulan berhenti menjadi Masa Pajak Terakhir: PPh dihitung dengan tarif Pasal 17 atas penghasilan Januari–Mei tanpa disetahunkan dan dengan PTKP setahun penuh. PKP nihil sehingga seluruh PPh Januari–April menjadi lebih potong.",
        jejakHitung: [
          ["Bruto Januari–Mei = 5 × Rp9.000.000", "Rp45.000.000"],
          ["Biaya jabatan = 5% × Rp45.000.000 (di bawah batas)", "Rp2.250.000"],
          ["Neto", "Rp42.750.000"],
          ["PTKP TK/0 setahun penuh", "Rp54.000.000"],
          ["PKP", "Rp0"],
          ["PPh Januari–April = 4 × 1,75% × Rp9.000.000", "Rp630.000"],
          ["PPh Mei = 0 − Rp630.000", "lebih potong Rp630.000"]
        ],
        mengapaSalah: {
          A: "Menyetahunkan bruto: (Rp108 jt − biaya jabatan maksimum Rp6 jt − PTKP Rp54 jt) × 5% × 5/12 = Rp1 jt, dikurangi Rp630.000. Pindah kerja tidak disetahunkan.",
          B: "Menyetahunkan neto: (Rp42,75 jt × 12/5 − Rp54 jt) × 5% × 5/12 = Rp1.012.500, dikurangi Rp630.000; sama dengan memprorata PTKP. Pindah kerja tidak disetahunkan.",
          C: "Masih memakai TER pada Masa Pajak Terakhir"
        },
        jebakan: "Pindah kerja bukan berakhirnya kewajiban subjektif: tidak ada penyetahunan dan PTKP tidak dipotong."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (1)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (Masa Pajak Terakhir pegawai berhenti)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-027", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A3-02",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-A3-02): Tuan Raka adalah pegawai tetap PT Sentosa Makmur sejak 2020. Pada 1 Januari 2026 ia berstatus K/2 (istri tidak bekerja, dua anak); anak ketiganya lahir Juni 2026. Penghasilan bulanannya: gaji Rp14.000.000, tunjangan transportasi Rp1.000.000, dan premi JKK, JKM, serta BPJS Kesehatan yang ditanggung PT Rp500.000. Ia membayar sendiri iuran JHT Rp280.000 per bulan melalui PT. Pada Maret 2026 ia juga menerima THR Rp14.000.000. PPh Pasal 21 Masa Pajak Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp3.540.000", B: "Rp3.190.000", C: "Rp3.159.200", D: "Rp1.770.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "K/2 masuk kategori B. Bruto Maret = gaji + tunjangan + premi yang ditanggung pemberi kerja + THR = Rp29.500.000, jatuh pada lapisan B Rp29.350.000–31.450.000 = 12%; TER dikalikan bruto tanpa pengurang apa pun.",
        jejakHitung: [["K/2 → kategori", "B"], ["Bruto teratur = 14.000.000 + 1.000.000 + 500.000", "Rp15.500.000"], ["Bruto Maret = 15.500.000 + THR 14.000.000", "Rp29.500.000"], ["Lapisan B Rp29.350.000–31.450.000", "12%"], ["PPh 21 = 12% × Rp29.500.000", "Rp3.540.000"]],
        mengapaSalah: { B: "Tidak memasukkan premi yang ditanggung PT; bruto Rp29.000.000 berada pada lapisan 11%", C: "Mengurangkan biaya jabatan Rp500.000 dan iuran JHT Rp280.000 sebelum TER (Rp28.720.000 × 11%)", D: "Mengenakan tarif lapisan gaji (6%) secara terpisah atas gaji dan THR" },
        jebakan: "Pengurang (biaya jabatan, iuran JHT) baru dipakai pada Masa Pajak Terakhir."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (unsur penghasilan bruto)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-028", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A3-02",
      stem: "V-A3-02 — Tuan Raka (K/2 pada 1 Januari 2026; anak ketiga lahir Juni 2026) menerima penghasilan teratur Rp15.500.000 per bulan (gaji Rp14.000.000, tunjangan transportasi Rp1.000.000, premi JKK/JKM/BPJS Kesehatan ditanggung PT Rp500.000) selama Januari–Desember 2026 dan THR Rp14.000.000 pada Maret. Ia membayar iuran JHT Rp280.000 per bulan. PPh 21 yang telah dipotong: Rp930.000 per bulan untuk 10 bulan dan Rp3.540.000 pada Maret. Hasil penghitungan PPh Pasal 21 Masa Pajak Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Lebih potong Rp1.044.000 yang wajib dikembalikan kepada Tuan Raka", B: "Kurang potong Rp135.000 yang dipotong pada Desember", C: "PPh 21 Desember Rp930.000 dengan TER kategori B", D: "Lebih potong Rp369.000 yang wajib dikembalikan kepada Tuan Raka" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", C: "lupa-pasal" },
      pembahasan: {
        inti: "Masa Pajak Terakhir memakai tarif Pasal 17 atas PKP setahun dengan PTKP K/2 (status 1 Januari). PPh setahun Rp12.471.000 lebih kecil daripada PPh Januari–November Rp12.840.000 sehingga terjadi lebih potong Rp369.000.",
        jejakHitung: [["Bruto setahun = 12 × 15.500.000 + 14.000.000", "Rp200.000.000"], ["Biaya jabatan (batas setahun)", "Rp6.000.000"], ["Iuran JHT = 12 × 280.000", "Rp3.360.000"], ["Neto", "Rp190.640.000"], ["PTKP K/2", "Rp67.500.000"], ["PKP", "Rp123.140.000"], ["PPh setahun = 5% × 60.000.000 + 15% × 63.140.000", "Rp12.471.000"], ["PPh Januari–November = 10 × 930.000 + 3.540.000", "Rp12.840.000"], ["PPh Desember", "lebih potong Rp369.000"]],
        mengapaSalah: { A: "Memakai PTKP K/3 (Rp72.000.000) karena anak ketiga; tanggungan baru berlaku tahun pajak berikutnya", B: "Lupa mengurangkan iuran JHT yang dibayar pegawai (PKP Rp126.500.000)", C: "Desember adalah Masa Pajak Terakhir; TER tidak dipakai" },
        jebakan: "Bulan THR dapat membuat PPh Januari–November melebihi PPh setahun; hasil Desember bisa negatif."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (1)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a dan Pasal 21 ayat (3) UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-029",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A3-02",
      stem: "V-A3-02 — Penghitungan Masa Pajak Desember 2026 menunjukkan PPh Pasal 21 Tuan Raka, pegawai tetap PT Sentosa Makmur, lebih potong Rp369.000. NIK Tuan Raka telah tervalidasi di Coretax dan ia tetap bekerja di perusahaan tersebut pada 2027. Tindakan PT Sentosa Makmur yang tepat sebagai pemotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Melaporkan pemotongan Masa Desember seperti bulan-bulan sebelumnya tanpa membuat BPA1, lalu menyarankan Tuan Raka meminta kembali kelebihan Rp369.000 melalui restitusi dalam SPT Tahunan PPh OP 2026", B: "Membuat BP21 final atas penghasilan setahun sehingga kelebihan Rp369.000 menjadi kredit pajak dalam SPT Tahunan Tuan Raka", C: "Membuat BPA1 pada Masa Desember, tetapi menahan kelebihan Rp369.000 untuk diperhitungkan dengan PPh 21 Tuan Raka Masa Januari 2027", D: "Membuat BPA1 pada Masa Desember, mengembalikan Rp369.000 kepada Tuan Raka, dan memperhitungkannya dalam SPT Masa PPh 21/26 perusahaan" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pegawai tetap dibuatkan BPA1 untuk Masa Pajak terakhir, yaitu Desember (PER-11/PJ/2025 Ps. 7 ayat (1) huruf a, e, dan g). Bila PPh 21 yang dipotong Januari–November melebihi PPh 21 setahun, kelebihannya wajib dikembalikan pemotong kepada pegawai beserta bukti potongnya paling lambat akhir Januari 2027 (PMK 168/2023 Ps. 21 ayat (1)); kelebihan setor pemotong lalu diperhitungkan dengan PPh 21/26 bulan berikutnya melalui SPT Masa (Ps. 21 ayat (3)).",
        jejakHitung: [
          ["PPh 21 setahun (data V-A3-02: PKP Rp123.140.000; 5% × 60.000.000 + 15% × 63.140.000)", "Rp12.471.000"],
          ["PPh 21 dipotong Januari–November = 10 × 930.000 + 3.540.000", "Rp12.840.000"],
          ["Selisih = 12.471.000 − 12.840.000", "lebih potong Rp369.000"],
          ["Masa Pajak terakhir pegawai tetap", "Desember 2026: dibuatkan BPA1"],
          ["Kelebihan Rp369.000", "dikembalikan kepada Tuan Raka paling lambat akhir Januari 2027; kelebihan setor PT diperhitungkan lewat SPT Masa PPh 21/26"]
        ],
        mengapaSalah: {
          A: "Masa Desember adalah Masa Pajak terakhir sehingga wajib dibuatkan BPA1 (PER-11/PJ/2025 Ps. 7 ayat (1) huruf e dan g), dan kelebihan potong pegawai tetap wajib dikembalikan oleh pemotong (PMK 168/2023 Ps. 21 ayat (1)), bukan diminta pegawai lewat restitusi SPT Tahunan",
          B: "BP21 hanya untuk penerima selain pegawai tetap dan ASN yang merupakan Wajib Pajak dalam negeri (PER-11 Ps. 7 ayat (1) huruf c); pegawai tetap memakai BPA1",
          C: "Kelebihan tidak boleh ditahan: wajib dikembalikan paling lambat akhir bulan berikutnya setelah Masa Pajak Terakhir (PMK 168/2023 Ps. 21 ayat (1))"
        },
        jebakan: "Kelebihan potong di Masa Pajak Terakhir adalah hak pegawai yang harus dikembalikan pemberi kerja (paling lambat akhir Januari 2027), bukan dikompensasikan ke PPh 21 pegawai tahun berikutnya; yang boleh dikompensasikan ke masa berikutnya adalah kelebihan setor pemotong di SPT Masa."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 Pasal 6 ayat (1) huruf a dan Pasal 7 ayat (1) huruf a, e, g dan ayat (2) (BPA1 Masa Pajak terakhir)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 168/2023 Pasal 21 ayat (1) dan ayat (3) (pengembalian kelebihan potong; kelebihan setor diperhitungkan di SPT Masa)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A3-030", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Ibu Lestari (K/1, ber-NPWP) di-PHK oleh PT Garuda Tekstil pada Oktober 2026. Uang pesangon dan uang penghargaan masa kerja seluruhnya Rp580.000.000, dibayar dua tahap: Rp180.000.000 pada November 2026 dan Rp400.000.000 pada Februari 2027. Atas tahap pertama telah dipotong PPh Pasal 21 final Rp14.500.000. PPh Pasal 21 yang dipotong atas pembayaran tahap kedua adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp47.500.000", B: "Rp82.500.000", C: "Rp68.000.000", D: "Rp69.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "final-nonfinal" },
      pembahasan: {
        inti: "Pesangon yang dibayar bertahap dalam jangka waktu paling lama 2 tahun kalender dihitung kumulatif dengan lapisan PP 68/2009; PPh tahap kedua = PPh atas jumlah kumulatif dikurangi PPh tahap pertama.",
        jejakHitung: [["Kumulatif = Rp180.000.000 + Rp400.000.000", "Rp580.000.000"], ["0% × Rp50.000.000", "Rp0"], ["5% × Rp50.000.000", "Rp2.500.000"], ["15% × Rp400.000.000", "Rp60.000.000"], ["25% × Rp80.000.000", "Rp20.000.000"], ["PPh atas kumulatif", "Rp82.500.000"], ["Dikurangi PPh tahap pertama", "Rp14.500.000"], ["PPh tahap kedua", "Rp68.000.000"]],
        mengapaSalah: { A: "Menghitung tahap kedua dari nol, seolah-olah lapisan 0% dan 5% tersedia lagi", B: "Tidak mengurangkan PPh yang telah dipotong pada tahap pertama", D: "Memperlakukan tahap 2027 sebagai penghasilan tidak final bertarif Pasal 17, padahal masih dalam 2 tahun kalender" },
        jebakan: "Lintas tahun tidak mengubah sifat final selama pembayaran masih dalam 2 tahun kalender."
      },
      dasarHukum: [{ pasal: "PP 68/2009 (pesangon dibayar sekaligus atau bertahap)", berlakuSejak: "2009-11-16" }, { pasal: "PMK 16/PMK.03/2010" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-031", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Tuan Harun (56 tahun) memasuki masa pensiun dari PT Baja Raya pada Agustus 2026. Ia menerima: (1) JHT dari BPJS Ketenagakerjaan Rp150.000.000 dibayar sekaligus; dan (2) uang pesangon dari PT Baja Raya Rp90.000.000 dibayar sekaligus. Keduanya merupakan pembayaran pertama dan satu-satunya. Total PPh Pasal 21 final yang dipotong atas kedua pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.000.000", B: "Rp23.500.000", C: "Rp9.500.000", D: "Rp7.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "JHT sekaligus memakai lapisan manfaat pensiun/THT/JHT (0% s.d. Rp50 juta, 5% di atasnya) dan dipotong BPJS Ketenagakerjaan; pesangon memakai lapisan pesangon dan dipotong PT Baja Raya. Keduanya dihitung terpisah.",
        jejakHitung: [["JHT: 5% × (Rp150.000.000 − Rp50.000.000)", "Rp5.000.000"], ["Pesangon: 0% × Rp50.000.000 + 5% × Rp40.000.000", "Rp2.000.000"], ["Total PPh 21 final", "Rp7.000.000"]],
        mengapaSalah: { A: "Memakai lapisan pesangon untuk JHT (Rp2,5 juta + 15% × Rp50 juta = Rp10 juta)", B: "Menggabungkan JHT dan pesangon sebagai satu pesangon Rp240 juta", C: "Menggabungkan keduanya lalu memakai tarif JHT 5% atas Rp190 juta" },
        jebakan: "Pesangon punya empat lapisan; JHT/pensiun sekaligus hanya dua, dan pemotongnya berbeda."
      },
      dasarHukum: [{ pasal: "PP 68/2009 (pesangon; manfaat pensiun, THT, JHT sekaligus)", berlakuSejak: "2009-11-16" }, { pasal: "Pasal 21 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-032", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 3,
      stem: "PT Garmen Jaya bergerak di industri pakaian jadi dengan KLU yang tercantum dalam lampiran PMK 105/2025. Pada Masa Pajak Mei 2026 perusahaan membayar: Siti (pegawai tetap, TK/0, NIK terpadankan) gaji tetap Rp6.500.000; dan Budi (manajer pegawai tetap, K/1, NIK terpadankan) gaji tetap Rp12.000.000. Tidak ada penghasilan lain. PPh Pasal 21 yang wajib disetor PT Garmen Jaya untuk Masa Pajak Mei 2026 dan perlakuan PPh 21 Siti yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp425.000; PPh 21 DTP Siti baru dapat dimanfaatkan sebagai pengurang dalam SPT Tahunan", B: "Rp0; seluruh pegawai di sektor padat karya memperoleh PPh 21 DTP", C: "Rp360.000; PPh 21 Siti Rp65.000 ditanggung pemerintah, dibayarkan tunai kepada Siti, dan tetap dibuatkan bukti potong serta dilaporkan", D: "Rp360.000; PPh 21 Siti Rp65.000 ditanggung pemerintah sehingga tidak perlu dibuatkan bukti potong maupun dilaporkan" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Siti memenuhi syarat (sektor tercantum, pegawai tetap, upah tetap paling banyak Rp10 juta/bulan, NIK padan): PPh 21-nya (TER A 1% × Rp6,5 juta) ditanggung pemerintah dan dibayarkan tunai kepadanya. Budi bergaji di atas Rp10 juta sehingga PPh 21-nya (TER B 3% × Rp12 juta) tetap dipotong dan disetor.",
        jejakHitung: [["Siti TK/0 → A, lapisan Rp6.300.000–6.750.000 = 1%", "Rp65.000 (DTP)"], ["Budi K/1 → B, lapisan Rp11.600.000–12.600.000 = 3%", "Rp360.000"], ["Disetor PT Garmen Jaya", "Rp360.000"]],
        mengapaSalah: { A: "PPh DTP diberikan pada masa pajak berjalan secara tunai, bukan lewat SPT Tahunan", B: "Batas upah Rp10 juta/bulan membuat Budi tidak berhak", D: "Bukti potong dan pelaporan SPT Masa tetap wajib untuk PPh DTP" },
        jebakan: "DTP tidak menghapus kewajiban administrasi: bukti potong dan SPT Masa tetap dibuat."
      },
      dasarHukum: [{ pasal: "PMK 105/2025 (PPh 21 DTP padat karya 2026)", berlakuSejak: "2026-01-01" }, { pasal: "PP 58/2023 Lampiran", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-033",
      topik: "A3.4",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Tuan Sutrisno (K/0 pada 1 Januari 2026) adalah pensiunan yang menerima uang pensiun bulanan Rp8.000.000 dari Dana Pensiun Pemberi Kerja PT Sinar sepanjang 2026, tanpa pembayaran lain dari dana pensiun tersebut. PPh 21 Januari–November telah dipotong dengan TER kategori A 1,5% per bulan. PPh Pasal 21 yang dipotong dana pensiun pada Masa Pajak Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp255.000", B: "Rp315.000", C: "Rp435.000", D: "Rp120.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Uang pensiun berkala dihitung ulang pada Masa Pajak Terakhir seperti pegawai tetap, tetapi pengurangnya biaya pensiun 5% maksimal Rp2.400.000 setahun (bukan biaya jabatan).",
        jejakHitung: [
          ["Bruto setahun = 12 × Rp8.000.000", "Rp96.000.000"],
          ["Biaya pensiun = min(5% × 96 jt; Rp2.400.000)", "Rp2.400.000"],
          ["Neto", "Rp93.600.000"],
          ["PTKP K/0", "Rp58.500.000"],
          ["PKP", "Rp35.100.000"],
          ["PPh setahun = 5% × Rp35.100.000", "Rp1.755.000"],
          ["PPh Januari–November = 11 × 1,5% × Rp8.000.000", "Rp1.320.000"],
          ["PPh Desember", "Rp435.000"]
        ],
        mengapaSalah: {
          A: "Memakai batas biaya jabatan setahun Rp6.000.000 sebagai pengurang (PKP Rp31.500.000); pensiunan memakai biaya pensiun 5% maksimal Rp2.400.000 setahun",
          B: "Tidak membatasi biaya pensiun (5% × Rp96 juta = Rp4,8 juta)",
          D: "Memakai TER pada Masa Pajak Terakhir"
        },
        jebakan: "Batas biaya pensiun Rp200 ribu/bulan, bukan Rp500 ribu."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (biaya pensiun 5%, paling banyak Rp200.000 per bulan; menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" }, { pasal: "PP 58/2023 Pasal 2 ayat (1)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (3) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-034",
      topik: "A3.4",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      stem: "PT Nusa Indah dan mantan pegawainya, Tuan Yudi, menyepakati pembayaran pesangon Rp450.000.000 dalam tiga tahap: Rp150.000.000 pada Desember 2026, Rp150.000.000 pada Desember 2027, dan Rp150.000.000 pada Januari 2028. Tahap 2026 dan 2027 telah dipotong PPh Pasal 21 final secara kumulatif. Perlakuan PPh Pasal 21 atas tahap Januari 2028 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tetap dipotong final secara kumulatif dengan lapisan pesangon atas jumlah Rp450.000.000, berapa pun lamanya pembayaran", B: "Dipotong dengan tarif Pasal 17 atas jumlah bruto dan tidak bersifat final, sehingga dapat dikreditkan dalam SPT Tahunan 2028", C: "Tidak dipotong PPh karena telah melewati jangka 2 tahun kalender", D: "Dipotong dengan TER bulanan sesuai status PTKP Tuan Yudi" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Lapisan final PP 68/2009 berlaku untuk pembayaran sekaligus atau bertahap dalam paling lama 2 tahun kalender (Pasal 2 ayat (2)); bagian yang dibayar pada tahun kalender ketiga dan seterusnya dipotong dengan tarif Pasal 17 ayat (1) huruf a atas jumlah bruto tahun kalender itu dan tidak final, sehingga dapat dikreditkan (Pasal 6 ayat (1) dan (2)).",
        jejakHitung: [],
        mengapaSalah: {
          A: "Kumulasi final dibatasi 2 tahun kalender",
          C: "Lewat 2 tahun kalender tidak membebaskan, hanya mengubah tarif dan sifat",
          D: "Bagian pesangon yang dibayar pada tahun kalender ketiga dipotong dengan tarif Pasal 17 atas jumlah bruto (PP 68/2009 Pasal 6 ayat (1)), bukan dengan TER bulanan"
        },
        jebakan: "Hitung tahun kalender, bukan 24 bulan: Desember 2026 → Januari 2028 sudah tahun kalender ketiga."
      },
      dasarHukum: [{ pasal: "PP 68/2009 Pasal 2 ayat (2) dan Pasal 6 ayat (1) dan (2)", berlakuSejak: "2009-11-16" }, { pasal: "PMK 16/PMK.03/2010 Pasal 3 ayat (2) dan Pasal 5 ayat (1) dan (2)", berlakuSejak: "2009-11-16" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A3-035",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "PT Elektra Jaya (importir pemilik API-U, ber-NPWP) mengimpor komponen elektronik pada Juli 2026 dengan nilai CIF USD20.000. Kurs yang berlaku Rp16.000/USD, bea masuk 10%, dan tidak ada pungutan pabean lain. PPN impor dihitung dengan DPP nilai lain 11/12 dan tarif 12%. Barang tidak termasuk barang tertentu yang dikenai tarif khusus PPh Pasal 22 impor. PPh Pasal 22 impor yang dibayar bersamaan dengan bea masuk adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp8.000.000", B: "Rp8.800.000", C: "Rp26.400.000", D: "Rp9.768.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Importir ber-API dipungut 2,5% dari nilai impor, yaitu CIF ditambah bea masuk dan pungutan pabean lain; PPN impor bukan bagian dasar PPh 22.",
        jejakHitung: [
          ["CIF = 20.000 × Rp16.000", "Rp320.000.000"],
          ["Bea masuk 10%", "Rp32.000.000"],
          ["Nilai impor", "Rp352.000.000"],
          ["PPh 22 = 2,5% × Rp352.000.000", "Rp8.800.000"]
        ],
        mengapaSalah: {
          A: "Hanya memakai CIF tanpa bea masuk",
          C: "Memakai tarif 7,5% untuk importir tanpa API",
          D: "Memasukkan PPN impor (Rp38.720.000) ke dasar pengenaan"
        },
        jebakan: "Dasar PPh 22 impor adalah nilai impor penuh (CIF + bea masuk + pungutan pabean lain): bukan DPP nilai lain 11/12 milik PPN, dan PPN impor tidak ikut dijumlahkan."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 (pemungutan PPh Pasal 22 impor dan kegiatan usaha di bidang lain; rezim PMK 34/PMK.010/2017 dicabut PMK 81/2024 per 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-036",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "Bendahara Pengeluaran Dinas Pendidikan Kota Sukamaju pada Masa Pajak Mei 2026 melakukan pembayaran berikut (semua harga belum termasuk PPN, rekanan ber-NPWP): (1) BBM kendaraan dinas di SPBU Rp5.000.000; (2) alat tulis kantor Rp1.800.000 dalam satu faktur yang tidak dipecah; (3) tiga unit laptop Rp15.000.000; (4) tagihan listrik PLN Rp8.000.000; dan (5) meja dan kursi kelas Rp40.000.000. Jumlah PPh Pasal 22 yang dipungut bendahara pada masa tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.020.000", B: "Rp852.000", C: "Rp825.000", D: "Rp915.750" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Bendahara memungut 1,5% dari harga pembelian tidak termasuk PPN, kecuali pembayaran paling banyak Rp2.000.000 yang tidak dipecah serta pembelian BBM, listrik, gas, air minum, dan benda pos.",
        jejakHitung: [
          ["BBM dan listrik", "dikecualikan"],
          ["ATK Rp1.800.000 (≤ Rp2 juta, tidak dipecah)", "dikecualikan"],
          ["Objek = laptop + meja kursi", "Rp55.000.000"],
          ["PPh 22 = 1,5% × Rp55.000.000", "Rp825.000"]
        ],
        mengapaSalah: {
          A: "Memungut juga atas BBM dan listrik (1,5% × Rp68 juta)",
          B: "Memungut juga atas ATK yang nilainya di bawah batas Rp2 juta",
          D: "Memakai harga termasuk PPN (Rp55 juta × 1,11)"
        },
        jebakan: "Pengecualian bendahara ada dua jenis: batas nilai dan jenis barang."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 (pemungutan PPh Pasal 22 atas penyerahan barang dan kegiatan di bidang impor atau usaha lain; rezim PMK 34/PMK.010/2017 dicabut PMK 81/2024 per 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 22 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-037",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      stem: "PT Mulia Perhiasan (pengusaha emas perhiasan, PKP) pada Juni 2026 menjual perhiasan emas dengan harga jual (tidak termasuk PPN): (1) Rp50.000.000 kepada Nona Ayu, konsumen akhir; (2) Rp200.000.000 kepada CV Kilau, toko perhiasan ber-NPWP; dan (3) Rp100.000.000 kepada Tuan Wira, pedagang perhiasan orang pribadi yang menunjukkan bukti sebagai Wajib Pajak PPh final PP 55/2022. Jumlah PPh Pasal 22 yang dipungut PT Mulia Perhiasan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp500.000", B: "Rp875.000", C: "Rp900.000", D: "Rp750.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 22 atas penjualan emas perhiasan oleh pengusaha emas 0,25% dari harga jual; dikecualikan penjualan kepada konsumen akhir dan kepada Wajib Pajak PPh final PP 55/2022 yang dibuktikan. Hanya penjualan kepada CV Kilau yang dipungut.",
        jejakHitung: [
          ["Konsumen akhir (Nona Ayu)", "dikecualikan"],
          ["WP PPh final PP 55/2022 (Tuan Wira)", "dikecualikan"],
          ["CV Kilau: 0,25% × Rp200.000.000", "Rp500.000"]
        ],
        mengapaSalah: {
          B: "Memungut semua penjualan (0,25% × Rp350 juta)",
          C: "Memakai tarif 0,45% sebelum PMK 48/2023",
          D: "Tidak mengecualikan pembeli WP PPh final PP 55/2022"
        },
        jebakan: "Tarif emas kini seragam 0,25%; yang diuji adalah daftar pembeli yang dikecualikan."
      },
      dasarHukum: [{ pasal: "PMK 48/2023 s.t.d.t.d. PMK 52/2025 (PPh 22 emas)", berlakuSejak: "2023-05-01" }, { pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-038", topik: "A3.5", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "PT Prestige Motor (WP badan, dealer mobil) pada Agustus 2026 menjual tiga mobil penumpang berkapasitas kurang dari 10 orang (harga jual tidak termasuk PPN dan PPnBM): (1) sedan Rp2.500.000.000, kapasitas silinder 2.000 cc, kepada Tuan Hartono; (2) SUV Rp1.800.000.000, 3.500 cc, kepada Ny. Lina; dan (3) sedan Rp1.500.000.000, 2.500 cc, kepada Tuan Doni. Jumlah PPh Pasal 22 atas penjualan barang yang tergolong sangat mewah yang dipungut PT Prestige Motor adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp215.000.000", B: "Rp125.000.000", C: "Rp290.000.000", D: "Rp43.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kendaraan roda empat pengangkut orang kurang dari 10 orang tergolong sangat mewah bila harga jualnya lebih dari Rp2 miliar ATAU kapasitas silindernya lebih dari 3.000 cc; tarif 5% dari harga jual tidak termasuk PPN/PPnBM. Mobil (1) dan (2) memenuhi, mobil (3) tidak.",
        jejakHitung: [["(1) harga > Rp2 miliar: 5% × Rp2.500.000.000", "Rp125.000.000"], ["(2) silinder > 3.000 cc: 5% × Rp1.800.000.000", "Rp90.000.000"], ["(3) Rp1,5 miliar dan 2.500 cc", "bukan barang sangat mewah"], ["Total PPh 22", "Rp215.000.000"]],
        mengapaSalah: { B: "Hanya memakai kriteria harga; kriteria kapasitas silinder bersifat alternatif", C: "Ikut memungut mobil (3) yang tidak memenuhi kriteria", D: "Memakai tarif 1% yang berlaku untuk rumah/apartemen sangat mewah" },
        jebakan: "Kata 'atau' pada kriteria barang sangat mewah membuat satu syarat saja sudah cukup."
      },
      dasarHukum: [{ pasal: "PMK 253/PMK.03/2008 s.t.d.t.d. PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19" }, { pasal: "Pasal 22 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-039",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      stem: "Ibu Laras (orang pribadi, ber-NPWP) menjual batik melalui sebuah marketplace dalam negeri; peredaran bruto tokonya tahun 2026 Rp3.000.000.000 dan ia memakai PPh final 0,5% PP 55/2022 s.t.d.d. PP 20/2026. Anggap penunjukan marketplace tersebut sebagai pemungut PPh Pasal 22 berdasarkan PMK 37/2025 efektif mulai 1 November 2026 sesuai jadwal yang diumumkan DJP. Pada November 2026 transaksi bruto Ibu Laras di marketplace Rp120.000.000 (tidak termasuk PPN). Perlakuan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Marketplace memungut PPh 22 Rp600.000 yang menjadi kredit pajak tidak final dalam SPT Tahunan Ibu Laras", B: "Marketplace tidak memungut karena Ibu Laras menyetor sendiri PPh final 0,5%", C: "Marketplace memungut PPh 22 Rp600.000 dan pungutan itu menjadi pelunasan PPh final 0,5% Ibu Laras atas omzet tersebut", D: "Marketplace memungut Rp1.200.000 karena tarif bagi pedagang orang pribadi 100% lebih tinggi" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PMK 37/2025 mewajibkan marketplace yang ditunjuk memungut PPh 22 sebesar 0,5% dari peredaran bruto pedagang dalam negeri yang tercantum dalam dokumen tagihan, tidak termasuk PPN dan PPnBM (Pasal 8 ayat (1)). Bila pedagangnya dikenai PPh final, pungutan itu menjadi bagian dari pelunasan PPh final (Pasal 8 ayat (4)). Yang tidak dipungut antara lain pedagang orang pribadi dengan peredaran bruto tahun berjalan sampai dengan Rp500 juta yang telah menyampaikan surat pernyataan (Pasal 10 ayat (1) huruf a).",
        jejakHitung: [
          ["Peredaran bruto 2026 Rp3 miliar > Rp500 juta", "dipungut"],
          ["PPh 22 = 0,5% × Rp120.000.000", "Rp600.000"],
          ["Sifat bagi WP PP 55/2022 (peredaran bruto ≤ Rp4,8 miliar)", "pelunasan PPh final"]
        ],
        mengapaSalah: {
          A: "Bagi pedagang yang dikenai PPh final, pungutan menjadi bagian pelunasan PPh final (Pasal 8 ayat (4)), bukan kredit pajak tidak final",
          B: "Status PP 55/2022 tidak menghapus pemungutan; yang tidak dipungut hanya orang pribadi dengan peredaran bruto ≤ Rp500 juta yang menyampaikan surat pernyataan",
          D: "PMK 37/2025 Pasal 8 ayat (1) memakai tarif 0,5%; Ibu Laras ber-NPWP sehingga tidak ada tarif 100% lebih tinggi"
        },
        jebakan: "PMK 37/2025 berlaku sejak diundangkan 14 Juli 2025, tetapi kewajiban memungut baru ada setelah marketplace ditunjuk; soal meminta menganggap penunjukan efektif 1 November 2026."
      },
      dasarHukum: [{ pasal: "PMK 37/2025 Pasal 8 ayat (1) dan ayat (4), Pasal 10 ayat (1) huruf a (marketplace pemungut PPh 22)", berlakuSejak: "2025-07-14" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 Pasal 56 dan Pasal 57", berlakuSejak: "2026-04-22" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-040",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-A3-04",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-A3-04): Pada Masa Pajak Juni 2026, Bendahara Pengeluaran Dinas PUPR Kabupaten Sukamaju membayar: (1) lima unit komputer dari CV Data Prima (PKP, ber-NPWP) Rp33.300.000 termasuk PPN (DPP nilai lain 11/12, tarif 12%); (2) termin pekerjaan pembangunan jembatan desa kepada CV Karya Mandiri (sertifikat badan usaha kualifikasi kecil) Rp222.000.000 termasuk PPN; dan (3) honorarium narasumber bimbingan teknis Rp5.000.000 kepada Dr. Sinta, dosen universitas swasta (bukan ASN, ber-NPWP). Atas pembayaran (1), PPh Pasal 22 dan PPN yang dipungut bendahara masing-masing adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 22 Rp499.500; PPN Rp3.300.000", B: "PPh 22 Rp450.000; PPN Rp3.300.000", C: "PPh 22 Rp450.000; PPN Rp3.600.000", D: "PPh 22 nihil karena rekanan PKP; PPN Rp3.300.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Harga sebelum PPN = Rp33.300.000 ÷ 1,11 = Rp30.000.000. PPh 22 bendahara 1,5% dari harga tidak termasuk PPN; PPN = 12% × (11/12 × Rp30.000.000).",
        jejakHitung: [
          ["Harga tanpa PPN = Rp33.300.000 ÷ (1 + 12% × 11/12)", "Rp30.000.000"],
          ["PPh 22 = 1,5% × Rp30.000.000", "Rp450.000"],
          ["DPP nilai lain = 11/12 × Rp30.000.000", "Rp27.500.000"],
          ["PPN = 12% × Rp27.500.000", "Rp3.300.000"]
        ],
        mengapaSalah: {
          A: "Menghitung PPh 22 dari harga termasuk PPN",
          C: "Mengabaikan DPP nilai lain 11/12 sehingga PPN = 12% × Rp30 juta",
          D: "Status PKP rekanan tidak membebaskan PPh 22; bendahara tetap memungut atas pembelian di atas Rp2 juta"
        },
        jebakan: "Satu pembayaran bendahara memuat dua pungutan dengan dasar berbeda: harga tanpa PPN (PPh 22) dan DPP nilai lain (PPN)."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 (pemungutan PPh Pasal 22 atas penyerahan barang dan kegiatan di bidang impor atau usaha lain; rezim PMK 34/PMK.010/2017 dicabut PMK 81/2024 per 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-041", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2, laporanUjian: ["B-2026-10"], kasusId: "V-A3-04",
      stem: "V-A3-04 — Bendahara Dinas PUPR Kabupaten Sukamaju membayar termin pekerjaan pembangunan jembatan desa kepada CV Karya Mandiri, penyedia jasa pekerjaan konstruksi yang memiliki sertifikat badan usaha kualifikasi kecil, sebesar Rp222.000.000 termasuk PPN (DPP nilai lain 11/12, tarif 12%). PPh yang wajib dipotong bendahara atas pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 4 ayat (2) final Rp4.000.000", B: "PPh Pasal 4 ayat (2) final Rp3.885.000", C: "PPh Pasal 4 ayat (2) final Rp3.500.000", D: "PPh Pasal 4 ayat (2) final Rp5.300.000" },
      kunci: "C",
      jebakanOpsi: { A: "angka-usang", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pekerjaan konstruksi oleh penyedia bersertifikat kualifikasi kecil dikenai PPh final 1,75% dari nilai pembayaran tidak termasuk PPN.",
        jejakHitung: [["Nilai tanpa PPN = Rp222.000.000 ÷ 1,11", "Rp200.000.000"], ["Tarif kualifikasi kecil (PP 9/2022)", "1,75%"], ["PPh 4 ayat (2) = 1,75% × Rp200.000.000", "Rp3.500.000"]],
        mengapaSalah: { A: "Memakai tarif 2% PP 51/2008 yang sudah diganti", B: "Menghitung dari nilai termasuk PPN", D: "Memakai tarif 2,65% untuk kualifikasi menengah/besar" },
        jebakan: "Tarif konstruksi sejak 21 Februari 2022 tidak lagi 2%/3%/4%."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1) huruf a", berlakuSejak: "2022-02-21" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-042", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["B-2026-10"], kasusId: "V-A3-04",
      stem: "V-A3-04 — Bendahara Dinas PUPR Kabupaten Sukamaju membayar honorarium narasumber bimbingan teknis Rp5.000.000 kepada Dr. Sinta, dosen universitas swasta yang bukan ASN dan bukan pegawai dinas, ber-NPWP. PPh yang wajib dipotong bendahara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 23 Rp100.000", B: "PPh 21 Rp250.000", C: "PPh 21 Rp150.000", D: "PPh 21 Rp125.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "Narasumber/pembicara orang pribadi adalah bukan pegawai: PPh 21 = tarif Pasal 17 × 50% × bruto; buktinya BP21.",
        jejakHitung: [["DPP = 50% × Rp5.000.000", "Rp2.500.000"], ["Tarif Pasal 17 lapisan pertama", "5%"], ["PPh 21", "Rp125.000"]],
        mengapaSalah: { A: "PPh 23 untuk jasa yang diberikan badan, bukan orang pribadi", B: "Tidak memakai DPP 50% (perlakuan peserta kegiatan)", C: "Menaikkan 20% padahal Dr. Sinta ber-NPWP" },
        jebakan: "Narasumber termasuk bukan pegawai, bukan peserta kegiatan."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-043",
      topik: "A3.6",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      kutipan: "Pasal 23 ayat (1a) UU PPh: dalam hal Wajib Pajak yang menerima atau memperoleh penghasilan sebagaimana dimaksud pada ayat (1) tidak memiliki Nomor Pokok Wajib Pajak, besarnya tarif pemotongan lebih tinggi 100% (seratus persen) daripada tarif sebagaimana dimaksud pada ayat (1).",
      stem: "PT Sinar Pangan pada Agustus 2026 membayar CV Prima Teknik atas jasa perawatan mesin produksi. Tagihan Rp30.000.000 (belum termasuk PPN) dirinci dalam kontrak: jasa perawatan Rp20.000.000 dan suku cadang Rp10.000.000 yang didukung faktur pembelian. CV Prima Teknik tidak memiliki NPWP dan bukan penyedia jasa konstruksi bersertifikat. Berdasarkan kutipan tersebut, PPh Pasal 23 yang wajib dipotong PT Sinar Pangan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp800.000", B: "Rp400.000", C: "Rp1.200.000", D: "Rp480.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jumlah bruto jasa tidak termasuk pembelian material yang didukung faktur dan dirinci dalam kontrak, sehingga dasar pemotongan Rp20.000.000; karena penerima tidak ber-NPWP, tarif 2% naik 100% menjadi 4%.",
        jejakHitung: [
          ["Jumlah bruto jasa (suku cadang dikeluarkan)", "Rp20.000.000"],
          ["Tarif tanpa NPWP = 2% × 200%", "4%"],
          ["PPh 23 = 4% × Rp20.000.000", "Rp800.000"]
        ],
        mengapaSalah: {
          B: "Lupa kenaikan 100% bagi penerima tanpa NPWP",
          C: "Memasukkan suku cadang ke jumlah bruto",
          D: "Memakai kenaikan 20% milik PPh 21 (2% × 120%)"
        },
        jebakan: "Kenaikan tarif tanpa NPWP: 100% untuk PPh 22/23, 20% untuk PPh 21."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 2 dan ayat (1a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 ayat (3) huruf b angka 2, ayat (4) huruf b, ayat (6) huruf z, dan ayat (7)", berlakuSejak: "2015-08-26" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-044", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "PT Anak Sejahtera (WP badan dalam negeri) pada Juni 2026 melakukan pembayaran: (1) dividen Rp1.000.000.000 kepada PT Induk Makmur (WP badan dalam negeri, pemilik 20% saham); (2) dividen Rp200.000.000 kepada Tuan Andi (orang pribadi dalam negeri, ber-NPWP); dan (3) bunga pinjaman Rp100.000.000 kepada PT Induk Makmur, yang bukan bank maupun lembaga pembiayaan. Jumlah PPh yang wajib dipotong PT Anak Sejahtera atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp15.000.000", B: "Rp165.000.000", C: "Rp35.000.000", D: "Rp0" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dividen dari badan dalam negeri yang diterima badan dalam negeri kini dikecualikan tanpa syarat kepemilikan; dividen kepada orang pribadi dalam negeri tidak dipotong pembayar (dikecualikan bila diinvestasikan, atau PPh final 10% disetor sendiri). Hanya bunga pinjaman yang dipotong PPh 23 15%.",
        jejakHitung: [["Dividen ke PT Induk (Pasal 4 ayat (3) huruf f)", "dikecualikan"], ["Dividen ke Tuan Andi", "tidak dipotong pembayar"], ["Bunga: 15% × Rp100.000.000", "Rp15.000.000"]],
        mengapaSalah: { B: "Memakai syarat kepemilikan minimal 25% aturan lama sehingga dividen ke PT Induk (20%) dipotong 15%", C: "Memotong 10% atas dividen Tuan Andi; PPh final dividen OP disetor sendiri bila tidak diinvestasikan", D: "Bunga pinjaman antarperusahaan tetap objek PPh 23; pengecualian hanya untuk bank dan penyalur pinjaman tertentu" },
        jebakan: "Satu pemegang saham bisa menerima dua jenis penghasilan dengan perlakuan berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (3) huruf f UU PPh (dividen dikecualikan)" }, { pasal: "Pasal 23 ayat (1) huruf a angka 2 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A3-045", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Logistik Prima menyewa dua unit forklift beserta operatornya dari PT Alat Berat Nusantara (ber-NPWP) untuk Juli 2026. Faktur pajak mencantumkan harga sewa Rp50.000.000 dan PPN dengan DPP nilai lain 11/12 tarif 12%, sehingga total tagihan Rp55.500.000. PPh yang wajib dipotong PT Logistik Prima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 23 Rp1.110.000", B: "PPh 4 ayat (2) Rp5.000.000", C: "PPh 23 Rp1.000.000", D: "PPh 23 Rp2.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Sewa harta selain tanah/bangunan dikenai PPh 23 2% dari jumlah bruto tidak termasuk PPN.",
        jejakHitung: [["Jumlah bruto = harga sewa tanpa PPN", "Rp50.000.000"], ["PPh 23 = 2% × Rp50.000.000", "Rp1.000.000"]],
        mengapaSalah: { A: "Menghitung dari tagihan termasuk PPN", B: "Memakai tarif sewa tanah/bangunan; forklift bukan bangunan", D: "Memakai tarif 4% padahal penerima ber-NPWP" },
        jebakan: "Dasar PPh 23 selalu tanpa PPN."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 1 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-046", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      kutipan: "Pasal 23 ayat (4) UU PPh (parafrase): pemotongan PPh Pasal 23 tidak dilakukan atas, antara lain, penghasilan yang dibayar atau terutang kepada bank; sewa yang dibayarkan sehubungan dengan sewa guna usaha dengan hak opsi; dividen sebagaimana dimaksud dalam Pasal 4 ayat (3) huruf f; bagian laba (SHU) koperasi yang dibayarkan kepada anggotanya; serta penghasilan yang dibayarkan kepada badan usaha atas jasa keuangan yang berfungsi sebagai penyalur pinjaman dan/atau pembiayaan yang diatur dengan Peraturan Menteri Keuangan.",
      stem: "PT Cipta Karya pada Juli 2026 membayar: (1) bunga pinjaman Rp80.000.000 kepada PT Bank Mandala; (2) angsuran sewa guna usaha dengan hak opsi Rp60.000.000 kepada PT Sarana Leasing; (3) jasa konsultan teknologi informasi Rp40.000.000 (belum termasuk PPN) kepada PT Solusi Digital (ber-NPWP); dan (4) dividen Rp60.000.000 kepada PT Mitra Investama, pemegang saham badan dalam negeri. Berdasarkan kutipan tersebut, jumlah PPh Pasal 23 yang wajib dipotong PT Cipta Karya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp800.000", B: "Rp12.800.000", C: "Rp2.000.000", D: "Rp9.800.000" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Bunga kepada bank, sewa guna usaha dengan hak opsi, dan dividen kepada badan dalam negeri dikecualikan dari pemotongan; hanya jasa konsultan yang dipotong 2%.",
        jejakHitung: [["(1) bunga ke bank", "dikecualikan"], ["(2) SGU dengan hak opsi", "dikecualikan"], ["(4) dividen ke badan DN", "dikecualikan"], ["(3) 2% × Rp40.000.000", "Rp800.000"]],
        mengapaSalah: { B: "Memotong 15% atas bunga ke bank (Rp12 juta)", C: "Memperlakukan SGU hak opsi sebagai sewa harta 2% (Rp1,2 juta)", D: "Memotong 15% atas dividen ke badan dalam negeri seperti aturan lama (Rp9 juta)" },
        jebakan: "Baca daftar pengecualian Pasal 23 ayat (4) sebelum menghitung."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 23 ayat (1) huruf c angka 2 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160, verifikasi: "✅"
    },
    {
      id: "A3-047", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1,
      stem: "PT Kreasi Nusantara menyelenggarakan lomba desain kemasan pada September 2026. Juara pertama adalah CV Studio Arta (WP badan dalam negeri, ber-NPWP) yang menerima hadiah uang Rp50.000.000 sebagai penghargaan atas prestasi, bukan hasil undian. PPh yang wajib dipotong PT Kreasi Nusantara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh 4 ayat (2) Rp12.500.000", B: "PPh 23 Rp1.000.000", C: "PPh 23 Rp7.500.000", D: "PPh 21 Rp2.500.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hadiah dan penghargaan kepada WP badan dalam negeri dipotong PPh 23 15% dari jumlah bruto; tarif 25% final hanya untuk hadiah undian, dan PPh 21 hanya bila penerimanya orang pribadi.",
        jejakHitung: [["Hadiah prestasi kepada badan DN", "PPh 23 ayat (1) huruf a"], ["PPh 23 = 15% × Rp50.000.000", "Rp7.500.000"]],
        mengapaSalah: { A: "Tarif 25% final khusus hadiah undian", B: "Tarif 2% untuk sewa dan jasa, bukan hadiah", D: "PPh 21 berlaku bila pemenangnya orang pribadi" },
        jebakan: "Hadiah undian dan hadiah prestasi diatur pasal yang berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf a angka 4 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 132/2000 (hadiah undian)", berlakuSejak: "2001-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-048", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Ny. Ratna (orang pribadi dalam negeri) pada Mei 2026 memperoleh: (1) bunga deposito Rp1.500.000 dari Bank A atas deposito Rp300.000.000; (2) kupon Obligasi Ritel Indonesia (SBN) Rp2.000.000; dan (3) bunga tabungan Rp50.000 dari Bank B, tempat ia hanya memiliki satu rekening tabungan bersaldo Rp5.000.000 tanpa simpanan lain. Total PPh final yang dipotong atas ketiga penghasilan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp600.000", B: "Rp500.000", C: "Rp510.000", D: "Rp700.000" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bunga deposito dipotong 20% final; bunga/kupon obligasi termasuk SBN bagi WPDN 10% final; bunga tabungan dikecualikan bila jumlah deposito dan tabungan di bank itu tidak melebihi Rp7.500.000 dan bukan pecahan.",
        jejakHitung: [["Deposito: 20% × Rp1.500.000", "Rp300.000"], ["Kupon SBN: 10% × Rp2.000.000", "Rp200.000"], ["Tabungan Rp5 juta (≤ Rp7,5 juta)", "dikecualikan"], ["Total PPh final", "Rp500.000"]],
        mengapaSalah: { A: "Memakai tarif bunga obligasi 15% sebelum PP 91/2021", C: "Memotong 20% atas bunga tabungan yang saldonya di bawah Rp7,5 juta", D: "Memakai tarif deposito 20% untuk kupon obligasi" },
        jebakan: "Batas Rp7,5 juta diuji pada saldo simpanan, bukan pada bunganya."
      },
      dasarHukum: [{ pasal: "PP 131/2000 dan KMK 51/KMK.04/2001", berlakuSejak: "2001-01-01" }, { pasal: "PP 91/2021", berlakuSejak: "2021-08-30" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A3-049", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      kutipan: "PP 34/2016 Pasal 2 ayat (1) (parafrase): PPh atas pengalihan hak atas tanah dan/atau bangunan sebesar a. 2,5% dari jumlah bruto nilai pengalihan, selain pengalihan rumah sederhana atau rumah susun sederhana oleh Wajib Pajak yang usaha pokoknya melakukan pengalihan hak atas tanah dan/atau bangunan; b. 1% atas pengalihan rumah sederhana dan rumah susun sederhana oleh Wajib Pajak tersebut; c. 0% atas pengalihan kepada pemerintah, BUMN yang mendapat penugasan khusus, atau BUMD yang mendapat penugasan khusus dari kepala daerah dalam rangka pengadaan tanah bagi pembangunan untuk kepentingan umum.",
      stem: "PT Graha Properti, pengembang perumahan, pada Agustus 2026 melakukan pengalihan: (1) satu unit rumah sederhana yang memenuhi kriteria Rp150.000.000; (2) satu unit rumah komersial Rp1.200.000.000; dan (3) sebidang tanah Rp500.000.000 kepada Pemerintah Kabupaten untuk pembangunan jalan umum dalam rangka pengadaan tanah bagi kepentingan umum. Berdasarkan kutipan tersebut, jumlah PPh final yang wajib dibayar PT Graha Properti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp33.750.000", B: "Rp31.500.000", C: "Rp44.000.000", D: "Rp92.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Tarif dipilih per transaksi: 1% untuk rumah sederhana oleh pengembang, 2,5% untuk pengalihan lain, dan 0% kepada pemerintah dalam rangka pengadaan tanah untuk kepentingan umum. PPh disetor sendiri sebelum akta ditandatangani.",
        jejakHitung: [["Rumah sederhana: 1% × Rp150.000.000", "Rp1.500.000"], ["Rumah komersial: 2,5% × Rp1.200.000.000", "Rp30.000.000"], ["Tanah ke pemerintah untuk kepentingan umum: 0%", "Rp0"], ["Total", "Rp31.500.000"]],
        mengapaSalah: { A: "Memakai 2,5% juga untuk rumah sederhana", C: "Memakai 2,5% untuk pengalihan kepada pemerintah (tambahan Rp12,5 juta)", D: "Memakai tarif lama 5% untuk seluruh pengalihan" },
        jebakan: "Tiga transaksi, tiga tarif: jangan menjumlahkan nilai lalu mengalikan satu tarif."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 2 ayat (1)", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-050", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 3,
      stem: "PT Graha Mandiri (pengguna jasa) pada September 2026 membayar (semua belum termasuk PPN): (1) CV Desain Prima, konsultan perencana konstruksi yang memiliki sertifikat badan usaha, Rp100.000.000; (2) PT Bangun Kokoh, kontraktor pekerjaan konstruksi kualifikasi besar, Rp2.000.000.000; dan (3) Pak Darto, pemborong perseorangan pekerjaan konstruksi yang tidak memiliki sertifikat kompetensi kerja, Rp50.000.000. Total PPh Pasal 4 ayat (2) yang dipotong PT Graha Mandiri adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp58.500.000", B: "Rp66.000.000", C: "Rp57.375.000", D: "Rp43.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "angka-usang", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PP 9/2022 membedakan tarif menurut jenis layanan (pekerjaan konstruksi, konsultansi, terintegrasi) dan kepemilikan sertifikat; perseorangan tanpa sertifikat kompetensi kerja dikenai 4%.",
        jejakHitung: [["Konsultansi bersertifikat: 3,5% × Rp100.000.000", "Rp3.500.000"], ["Pekerjaan konstruksi kualifikasi besar: 2,65% × Rp2.000.000.000", "Rp53.000.000"], ["Perseorangan tanpa sertifikat: 4% × Rp50.000.000", "Rp2.000.000"], ["Total", "Rp58.500.000"]],
        mengapaSalah: { B: "Memakai tarif PP 51/2008 (konsultan 4%, kualifikasi besar 3%, tanpa kualifikasi 4%)", C: "Memberi Pak Darto tarif 1,75% padahal tidak bersertifikat", D: "Memotong PPh 23 2%; jasa konstruksi dikenai PPh final" },
        jebakan: "1,75% hanya untuk kualifikasi kecil atau perseorangan yang punya sertifikat kompetensi kerja."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-051",
      topik: "A3.7",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Ny. Rita, karyawati yang tidak menjalankan usaha, menyewa rumah tinggal milik Tuan Hendra untuk dua tahun (September 2026–Agustus 2028) dan membayar seluruh uang sewa Rp120.000.000 pada 25 Agustus 2026. Perlakuan PPh atas uang sewa tersebut yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ny. Rita wajib memotong PPh Pasal 4 ayat (2) Rp12.000.000 dan memberikan bukti potong", B: "Tuan Hendra menyetor sendiri PPh final 10% sebesar Rp12.000.000 paling lambat 15 September 2026", C: "Ny. Rita memotong PPh Pasal 23 2% sebesar Rp2.400.000", D: "Tuan Hendra menyetor PPh final Rp6.000.000 untuk 2026 dan Rp6.000.000 untuk 2027 sesuai masa sewa" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Penyewa orang pribadi yang bukan pemotong tidak memotong; pemilik menyetor sendiri PPh final 10% atas seluruh pembayaran yang diterima di muka, paling lambat tanggal 15 bulan berikutnya.",
        jejakHitung: [
          ["PPh final = 10% × Rp120.000.000", "Rp12.000.000"],
          ["Saat terutang", "saat pembayaran diterima (Agustus 2026)"],
          ["Tenggat setor sendiri", "15 September 2026 (Selasa)"]
        ],
        mengapaSalah: {
          A: "Orang pribadi biasa tidak ditunjuk sebagai pemotong PPh sewa",
          C: "Sewa bangunan bukan objek PPh 23",
          D: "PPh terutang atas seluruh pembayaran di muka saat diterima, tidak dibagi per tahun"
        },
        jebakan: "Siapa penyewanya menentukan siapa yang menyetor."
      },
      dasarHukum: [{ pasal: "PP 34/2017 (penyetoran sendiri oleh pemilik)", berlakuSejak: "2018-01-02" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 100,
      verifikasi: "✅"
    },
    {
      id: "A3-052", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Tuan Lukas (orang pribadi dalam negeri, bukan pendiri emiten) pada 2026: (1) menjual saham PT Sentosa Tbk melalui Bursa Efek Indonesia senilai Rp400.000.000; dan (2) menerima dividen Rp50.000.000 dari PT Sentosa Tbk yang tidak ia investasikan di Indonesia sesuai ketentuan. Perlakuan PPh yang tepat atas kedua penghasilan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh final 0,1% Rp400.000 dipotong melalui bursa/perantara; PPh final 10% atas dividen Rp5.000.000 disetor sendiri oleh Tuan Lukas", B: "PPh final 0,1% Rp400.000; dividen dipotong PPh 23 15% Rp7.500.000 oleh PT Sentosa Tbk", C: "PPh final 0,1% Rp400.000 ditambah 0,5% Rp2.000.000; dividen dikenai PPh final 10% disetor sendiri", D: "PPh final 0,1% Rp400.000; dividen digabung dengan penghasilan lain dan dikenai tarif Pasal 17 dalam SPT Tahunan" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "final-nonfinal" },
      pembahasan: {
        inti: "Penjualan saham di bursa dikenai PPh final 0,1% dari nilai transaksi (tambahan 0,5% hanya untuk saham pendiri saat IPO). Dividen dalam negeri yang diterima orang pribadi dan tidak diinvestasikan dikenai PPh final 10% yang disetor sendiri.",
        jejakHitung: [["Saham di bursa: 0,1% × Rp400.000.000", "Rp400.000"], ["Dividen tidak diinvestasikan: 10% × Rp50.000.000", "Rp5.000.000"]],
        mengapaSalah: { B: "Dividen kepada orang pribadi bukan objek PPh 23", C: "Tambahan 0,5% hanya untuk saham pendiri", D: "Dividen OP yang tidak diinvestasikan dikenai PPh final, tidak digabung" },
        jebakan: "Dividen OP: dibebaskan bila diinvestasikan, final 10% disetor sendiri bila tidak."
      },
      dasarHukum: [{ pasal: "PP 14/1997 (transaksi saham di bursa)", berlakuSejak: "1997-05-29" }, { pasal: "Pasal 4 ayat (3) huruf f dan Pasal 17 ayat (2c) UU PPh" }, { pasal: "PMK 18/PMK.03/2021", berlakuSejak: "2021-02-17" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A3-053",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "klasifikasi",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-A3-03",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-A3-03): Pada Masa Pajak Juli 2026, PT Samudra Logistik (WP badan dalam negeri) membayar (semua belum termasuk PPN): (1) voyage charter kapal tongkang dari PT Bahari Nusantara, perusahaan pelayaran dalam negeri, Rp400.000.000; (2) charter pesawat dari PT Angkasa Air, perusahaan penerbangan dalam negeri, Rp250.000.000; dan (3) imbalan jasa manajemen Rp1.000.000.000 kepada Samudra Holding B.V., induk perusahaan di Belanda yang tidak memiliki BUT di Indonesia, pada 20 Juli 2026. Atas pembayaran (1) dan (2), PPh yang dipotong PT Samudra Logistik serta sifatnya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 15 Rp9.300.000: Rp4.800.000 dan Rp4.500.000 sama-sama bersifat final bagi kedua perusahaan angkutan", B: "PPh Pasal 23 Rp13.000.000 (2% sewa harta) yang menjadi kredit pajak bagi kedua perusahaan angkutan", C: "PPh Pasal 15 Rp17.160.000 (2,64% atas kedua charter) yang bersifat final bagi kedua perusahaan angkutan", D: "PPh Pasal 15 Rp9.300.000: Rp4.800.000 final bagi PT Bahari Nusantara dan Rp4.500.000 kredit pajak PT Angkasa Air" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Charter kapal dari perusahaan pelayaran dalam negeri dikenai PPh 15 1,2% final; charter pesawat dari perusahaan penerbangan dalam negeri 1,8% dan tidak final. Tarif 2,64% khusus perusahaan pelayaran/penerbangan luar negeri.",
        jejakHitung: [
          ["Pelayaran DN: 1,2% × Rp400.000.000", "Rp4.800.000 (final)"],
          ["Penerbangan DN: 1,8% × Rp250.000.000", "Rp4.500.000 (tidak final)"],
          ["Total PPh 15", "Rp9.300.000"]
        ],
        mengapaSalah: {
          A: "PPh 15 penerbangan dalam negeri tidak final",
          B: "Charter kapal/pesawat dari perusahaan pelayaran/penerbangan DN adalah objek PPh 15, bukan PPh 23",
          C: "Tarif 2,64% untuk pelayaran/penerbangan luar negeri"
        },
        jebakan: "Dua norma Pasal 15 bertarif mirip tetapi sifatnya berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 416/KMK.04/1996 Pasal 2 ayat (2) (pelayaran DN, final)", berlakuSejak: "1996-06-14" }, { pasal: "KMK 475/KMK.04/1996 Pasal 2 ayat (2) dan (3) (penerbangan DN, kredit pajak)", berlakuSejak: "1996-07-23" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-054",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-A3-03",
      stem: "V-A3-03 — PT Samudra Logistik membayar imbalan jasa manajemen Rp1.000.000.000 pada 20 Juli 2026 kepada Samudra Holding B.V. (Belanda), yang tidak memiliki BUT di Indonesia dan seluruh jasanya dikerjakan dari Belanda. Sebelum pembayaran, Samudra Holding B.V. telah menyerahkan Form DGT yang sah dan terekam di Coretax serta memenuhi seluruh syarat penerapan P3B. Menurut P3B Indonesia–Belanda, imbalan tersebut merupakan laba usaha yang hanya dapat dipajaki di Belanda karena tidak ada BUT. Perlakuan yang tepat bagi PT Samudra Logistik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tidak memotong PPh Pasal 26 (0% berdasarkan P3B), tetapi tetap membuat BPNR dengan fasilitas P3B dan melaporkannya dalam SPT Masa Unifikasi", B: "Memotong PPh Pasal 26 sebesar 20% atau Rp200.000.000 karena P3B hanya mengatur dividen, bunga, dan royalti, lalu membuat BPNR", C: "Memotong PPh Pasal 23 sebesar 2% atau Rp20.000.000 karena jasa manajemen objek PPh 23, lalu membuat BPPU dalam SPT Masa Unifikasi", D: "Memotong PPh Pasal 26 sebesar 10% atau Rp100.000.000 memakai tarif royalti dalam P3B, lalu membuat BPNR dengan fasilitas P3B" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Imbalan jasa kepada WPLN tanpa BUT adalah objek PPh 26 20%, tetapi bila P3B memberi hak pemajakan hanya kepada negara domisili dan seluruh syarat terpenuhi (Form DGT sah, terekam di Coretax, tidak ada penyalahgunaan), Indonesia tidak memungut. Pemotong tetap membuat BPNR dan melaporkannya.",
        jejakHitung: [],
        mengapaSalah: {
          B: "P3B juga mengatur laba usaha (termasuk imbalan jasa) yang hanya dapat dipajaki di negara domisili bila tidak ada BUT",
          C: "PPh 23 hanya untuk penerima dalam negeri dan BUT",
          D: "Tarif royalti tidak berlaku untuk imbalan jasa manajemen"
        },
        jebakan: "Tarif 0% karena P3B tetap harus didokumentasikan lewat bukti potong."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 Pasal 10 ayat (3) dan Pasal 14 ayat (2) (penerapan P3B, bukti potong tetap dibuat)", berlakuSejak: "2025-12-31" }, { pasal: "PER-11/PJ/2025 Pasal 14 ayat (3) huruf e, Pasal 18 ayat (1) huruf b, dan Pasal 20 ayat (2) huruf d (BPNR)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 32A UU PPh" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-055", topik: "A3.9", tingkat: ["B", "C"], jenis: "prosedur", kesulitan: 3, laporanUjian: ["B-2026-10"], kasusId: "V-A3-03",
      stem: "V-A3-03 — Misalkan Samudra Holding B.V. baru menyerahkan Form DGT kepada PT Samudra Logistik pada 5 Oktober 2026, jauh setelah pembayaran jasa manajemen Rp1.000.000.000 pada 20 Juli 2026 dan setelah batas pelaporan SPT Masa Juli 2026. Tanggal 15 Agustus 2026 jatuh pada hari Sabtu, 16 Agustus hari Minggu, dan 17 Agustus libur nasional; anggap 18 Agustus 2026 hari kerja biasa. PPh Pasal 26 yang wajib dipotong dan tenggat administrasinya adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp200.000.000; disetor paling lambat Jumat, 14 Agustus 2026 karena tanggal 15 jatuh pada hari libur", B: "Rp0; Form DGT yang diserahkan kemudian berlaku surut sehingga tarif P3B tetap dapat diterapkan pada Masa Juli", C: "Rp200.000.000; disetor paling lambat Selasa, 18 Agustus 2026; SPT Masa PPh Unifikasi Juli dilaporkan paling lambat Kamis, 20 Agustus 2026", D: "Rp200.000.000; disetor paling lambat 10 Agustus 2026 dan dilaporkan paling lambat 20 Agustus 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "lupa-pasal", D: "angka-usang" },
      pembahasan: {
        inti: "Tanpa Form DGT yang sah pada saat pemotongan, PPh 26 dipotong 20%. Jatuh tempo setor pada hari libur bergeser ke hari kerja berikutnya (bukan dimajukan): 15 Agustus (Sabtu) menjadi 18 Agustus 2026. Batas lapor SPT Masa Juli: 20 Agustus 2026.",
        jejakHitung: [["PPh 26 = 20% × Rp1.000.000.000", "Rp200.000.000"], ["Tenggat setor tanggal 15 (Sabtu) → hari kerja berikutnya", "Selasa, 18 Agustus 2026"], ["Tenggat lapor 20 hari setelah Masa Juli", "Kamis, 20 Agustus 2026"]],
        mengapaSalah: { A: "PMK 81/2024 menggeser tenggat ke hari kerja berikutnya, bukan sebelumnya", B: "Form DGT harus sudah diterima dalam batas waktunya; penyerahan Oktober tidak dapat dipakai untuk Masa Juli", D: "Tanggal 10 adalah tenggat lama sebelum 2025" },
        jebakan: "Hari libur memundurkan tenggat setor; jangan memajukannya."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 100", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-056", topik: "A3.8", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (4) UU PPh: Penghasilan Kena Pajak sesudah dikurangi Pajak Penghasilan dari suatu bentuk usaha tetap di Indonesia dikenai pajak sebesar 20% (dua puluh persen), kecuali penghasilan tersebut ditanamkan kembali di Indonesia, yang ketentuannya diatur lebih lanjut dengan atau berdasarkan Peraturan Menteri Keuangan.",
      stem: "BUT Kaisha Engineering (kantor pusat di Jepang) melaporkan Penghasilan Kena Pajak Tahun Pajak 2025 sebesar Rp10.000.000.000 dengan tarif PPh badan 22%. Laba tersebut tidak ditanamkan kembali di Indonesia. Anggap P3B Indonesia–Jepang membatasi tarif pajak atas laba BUT sebesar 10% dan seluruh syarat penerapan P3B terpenuhi. Berdasarkan kutipan tersebut, PPh Pasal 26 ayat (4) (branch profit tax) yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.000.000.000", B: "Rp780.000.000", C: "Rp1.560.000.000", D: "Rp1.000.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Dasar branch profit tax adalah PKP setelah dikurangi PPh badan BUT; tarif 20% diturunkan oleh P3B bila syaratnya terpenuhi.",
        jejakHitung: [["PPh badan = 22% × Rp10.000.000.000", "Rp2.200.000.000"], ["PKP sesudah PPh", "Rp7.800.000.000"], ["Tarif P3B", "10%"], ["BPT = 10% × Rp7.800.000.000", "Rp780.000.000"]],
        mengapaSalah: { A: "Mengalikan 20% dengan PKP sebelum PPh", C: "Mengabaikan tarif P3B (20% × Rp7,8 miliar)", D: "Mengalikan tarif P3B dengan PKP sebelum PPh" },
        jebakan: "Kurangi dulu PPh badan sebelum menerapkan tarif BPT."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 17 ayat (1) huruf b UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PMK 14/PMK.03/2011 (penanaman kembali laba BUT)" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-057", topik: "A3.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "PT Indah Tekstil sebagai tertanggung pada Juni 2026 membayar premi asuransi kebakaran pabrik langsung kepada Asia Insurance Ltd di Singapura, perusahaan asuransi yang tidak memiliki BUT di Indonesia, sebesar Rp200.000.000. Asia Insurance Ltd tidak menyerahkan Form DGT. PPh Pasal 26 yang wajib dipotong PT Indah Tekstil adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp40.000.000", B: "Rp4.000.000", C: "Rp20.000.000", D: "Rp2.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Premi asuransi yang dibayar tertanggung langsung ke perusahaan asuransi luar negeri dikenai PPh 26 20% atas perkiraan penghasilan neto 50% dari premi, sehingga tarif efektif 10%.",
        jejakHitung: [["Perkiraan neto = 50% × Rp200.000.000", "Rp100.000.000"], ["PPh 26 = 20% × Rp100.000.000", "Rp20.000.000"]],
        mengapaSalah: { A: "Memakai 20% atas seluruh premi tanpa perkiraan neto", B: "Memakai tarif efektif 2% yang berlaku bila premi dibayar perusahaan asuransi dalam negeri", D: "Memakai tarif efektif 1% untuk perusahaan reasuransi dalam negeri" },
        jebakan: "Tarif efektif premi bergantung pada siapa yang membayar: tertanggung 10%, asuransi 2%, reasuransi 1%."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 624/KMK.04/1994 (perkiraan penghasilan neto premi)" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-058", topik: "A3.8", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "Zeta Trading Co., perusahaan dari Negara Zeta yang belum memiliki P3B dengan Indonesia, mempunyai kantor perwakilan dagang di Jakarta. Pada Tahun Pajak 2026 nilai ekspor bruto barang Zeta Trading Co. ke Indonesia yang terkait kegiatan kantor perwakilan tersebut Rp50.000.000.000. PPh Pasal 15 yang terutang atas kantor perwakilan dagang asing tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp500.000.000", B: "Rp110.000.000", C: "Rp1.320.000.000", D: "Rp220.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kantor perwakilan dagang asing memakai norma penghasilan neto 1% dari nilai ekspor bruto dengan beban pajak efektif 0,44% (gabungan PPh badan dan PPh atas laba setelah pajak).",
        jejakHitung: [["Norma neto = 1% × Rp50.000.000.000", "Rp500.000.000"], ["Tarif efektif yang ditetapkan KMK 634/1994 = 1% × (30% + 20% × 70%), dihitung dengan tarif badan saat KMK terbit", "0,44%"], ["PPh 15 = 0,44% × Rp50.000.000.000", "Rp220.000.000"]],
        mengapaSalah: { A: "Berhenti pada norma neto 1% tanpa mengalikan tarif", B: "Mengalikan norma dengan tarif badan 22% tanpa unsur pajak atas laba setelah pajak", C: "Memakai 2,64% milik pelayaran/penerbangan luar negeri" },
        jebakan: "Angka 0,44% berlaku untuk negara non-P3B."
      },
      dasarHukum: [{ pasal: "KMK 634/KMK.04/1994" }, { pasal: "Pasal 15 UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A3-059", topik: "A3.9", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2,
      formulirRef: "1770S.l2.1",
      stem: "Ny. Dewi berhenti bekerja dari PT Cakra pada Juni 2026 dan tidak bekerja lagi sampai akhir tahun. Dari PT Cakra ia menerima BPA1 yang mencantumkan PPh 21 terutang Rp1.200.000 atas gaji Januari–Juni, serta BP21 atas pesangon Rp150.000.000 dengan PPh 21 final Rp10.000.000. Ia tidak memiliki penghasilan lain. Dalam SPT Tahunan PPh Orang Pribadi Tahun Pajak 2026 di Coretax, pelaporan yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Pesangon digabung dengan gaji dari BPA1 sebagai penghasilan neto dari pekerjaan; PPh 21 Rp10.000.000 dan Rp1.200.000 seluruhnya dikreditkan", B: "Pesangon diisi pada daftar penghasilan yang tidak termasuk objek pajak; gaji dari BPA1 diisi sebagai penghasilan neto dan PPh 21 Rp1.200.000 dikreditkan", C: "Pesangon diisi pada daftar penghasilan final; PPh final Rp10.000.000 ikut dikreditkan bersama PPh 21 Rp1.200.000 dari BPA1", D: "Pesangon diisi pada daftar penghasilan final tanpa dikreditkan; gaji dari BPA1 diisi sebagai penghasilan neto dari pekerjaan dan PPh 21 Rp1.200.000 dikreditkan" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "salah-klasifikasi", C: "final-nonfinal" },
      pembahasan: {
        inti: "Penghasilan yang telah dikenai PPh final (pesangon) dilaporkan terpisah pada daftar penghasilan final dan PPh-nya tidak dapat dikreditkan; penghasilan dari pekerjaan (BPA1) masuk penghitungan tarif Pasal 17 dan PPh 21-nya menjadi kredit pajak.",
        jejakHitung: [["PPh 21 final pesangon = 5% × Rp50 jt + 15% × Rp50 jt", "Rp10.000.000"], ["Kredit pajak yang boleh diisi", "Rp1.200.000 (BPA1)"]],
        mengapaSalah: { A: "Penghasilan final tidak digabung dan PPh finalnya tidak dikreditkan", B: "Pesangon adalah objek pajak (dikenai PPh final), bukan bukan-objek", C: "PPh final tidak dapat dikreditkan meskipun penghasilannya dilaporkan" },
        jebakan: "Dilaporkan tidak sama dengan dikreditkan."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (SPT Tahunan PPh Orang Pribadi)", berlakuSejak: "2025-05-22" }, { pasal: "Pasal 28 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 68/2009 (sifat final pesangon)", berlakuSejak: "2009-11-16" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-060",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kutipan: "Pasal 9 ayat (2a) UU KUP: pembayaran atau penyetoran pajak yang dilakukan setelah tanggal jatuh tempo pembayaran atau penyetoran pajak dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan yang ditetapkan oleh Menteri Keuangan, dihitung dari tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran, dan dikenakan paling lama 24 (dua puluh empat) bulan, serta bagian dari bulan dihitung penuh 1 (satu) bulan.",
      stem: "PT Wira Usaha memotong PPh Pasal 23 Rp20.000.000 atas jasa pada Masa Pajak Agustus 2026, tetapi baru menyetornya pada 20 Oktober 2026 dan menyampaikan SPT Masa PPh Unifikasi Agustus 2026 pada hari yang sama. Tarif bunga Pasal 9 ayat (2a) yang berlaku untuk penghitungan ini 1,01% per bulan. Berdasarkan kutipan tersebut dan Pasal 7 ayat (1) UU KUP, jumlah sanksi administrasi yang akan ditagih melalui STP adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp404.000", B: "Rp504.000", C: "Rp302.000", D: "Rp904.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Jatuh tempo setor Masa Agustus adalah 15 September 2026; keterlambatan sampai 20 Oktober = 1 bulan 5 hari, dihitung 2 bulan, sehingga bunga = 2 × 1,01% × Rp20 juta. SPT Masa PPh juga terlambat (batas 20 hari setelah masa berakhir) sehingga ditambah denda Rp100.000.",
        jejakHitung: [
          ["Jatuh tempo setor", "15 September 2026 (Selasa)"],
          ["15 September → 20 Oktober = 1 bulan 5 hari", "2 bulan"],
          ["Bunga = Rp20.000.000 × 1,01% × 2", "Rp404.000"],
          ["Denda SPT Masa PPh terlambat", "Rp100.000"],
          ["Total sanksi", "Rp504.000"]
        ],
        mengapaSalah: {
          A: "Lupa denda keterlambatan SPT Masa",
          C: "Membulatkan ke bawah menjadi 1 bulan",
          D: "Memakai denda SPT Masa PPN Rp500.000"
        },
        jebakan: "Terlambat setor dan terlambat lapor adalah dua sanksi berbeda yang bisa terjadi bersamaan."
      },
      dasarHukum: [{ pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-061",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Staf pajak RS Medika Utama (WP badan) menyiapkan bukti potong Masa Pajak Desember 2026 di Coretax untuk gaji pegawai tetap, dividen kepada pemegang saham badan di Singapura, dan honorarium dokter tamu orang pribadi dalam negeri yang bukan pegawai. Pasangan kode bukti potong dan penggunaannya berikut tepat, kecuali ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "BPPU — bukti pemotongan PPh Pasal 21 atas honorarium dokter tamu yang bukan pegawai", B: "BPA1 — bukti potong tahunan PPh 21 pegawai tetap yang dibuat pada Masa Pajak Terakhir", C: "BP26 — bukti pemotongan PPh Pasal 26 atas imbalan jasa orang pribadi luar negeri yang dilaporkan dalam SPT Masa PPh 21/26", D: "BPNR — bukti pemotongan PPh Pasal 26 atas dividen kepada pemegang saham di luar negeri" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Honorarium dokter tamu bukan pegawai dalam negeri adalah PPh 21 sehingga memakai BP21 dalam SPT Masa PPh 21/26 (PER-11/PJ/2025 Ps. 7 ayat (1) huruf c); BPPU hanya untuk PPh 4 ayat (2), 15, 22, dan 23 bagi penerima dalam negeri. Pilihan lain sesuai Ps. 6 ayat (1) dan Ps. 7 ayat (1): BPA1 untuk Masa Pajak terakhir pegawai tetap, BP26 untuk PPh 26 atas jasa orang pribadi luar negeri, dan BPNR untuk PPh 26 lainnya seperti dividen.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Pernyataan benar: BPA1 dibuat pada Masa Pajak Terakhir (PER-11/PJ/2025 Ps. 7 ayat (1) huruf a, e, dan g)",
          C: "Pernyataan benar: PPh 26 atas jasa orang pribadi luar negeri dibuatkan BP26 dalam rezim PPh 21/26 (PER-11/PJ/2025 Ps. 6 ayat (1) huruf d dan Ps. 7 ayat (1) huruf d)",
          D: "Pernyataan benar: PPh 26 atas dividen kepada WPLN memakai BPNR"
        },
        jebakan: "Kata \"kecuali\" membalik soal: cari satu pasangan yang salah. BP26 (jasa orang pribadi luar negeri) dan BPNR (PPh 26 lainnya) sama-sama untuk WPLN, tetapi berbeda rezim SPT Masa."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 Pasal 6 ayat (1) dan Pasal 7 ayat (1) huruf a, c, d, e (jenis bukti potong PPh 21/26)", berlakuSejak: "2025-05-22" }, { pasal: "PER-11/PJ/2025 (BPPU dan BPNR dalam SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90,
      verifikasi: "✅"
    },
    {
      id: "A3-062",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      stem: "Saat menyiapkan rekonsiliasi pada Oktober 2026, PT Sinar Abadi menemukan bahwa pembayaran jasa desain grafis Rp40.000.000 (belum termasuk PPN) kepada CV Grafika (ber-NPWP) pada Juni 2026 belum dipotong PPh Pasal 23. SPT Masa PPh Unifikasi Juni 2026 telah dilaporkan tepat waktu dan belum ada pemeriksaan. Langkah yang tepat bagi PT Sinar Abadi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Membuat BPPU PPh 23 Rp800.000 Masa Juni 2026, menyetornya beserta bunga Pasal 8 ayat (2a) UU KUP sejak 15 Juli 2026, lalu membetulkan SPT Masa PPh Unifikasi Juni 2026", B: "Membuat BPPU PPh 23 Rp800.000 pada Masa Pajak Oktober 2026 dan melaporkannya dalam SPT Masa Oktober tanpa sanksi karena diungkapkan atas kemauan sendiri", C: "Tidak perlu membuat BPPU maupun menyetor, karena CV Grafika akan memperhitungkan sendiri PPh atas jasa tersebut dalam SPT Tahunannya", D: "Membuat BPPU PPh 23 Rp800.000 Masa Juni 2026 dan membetulkan SPT Masa Juni dengan sanksi kenaikan 100% berdasarkan Pasal 13 ayat (3) UU KUP" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh 23 terutang pada Masa Juni (saat pembayaran), sehingga bukti potong dan koreksinya masuk Masa Juni melalui pembetulan. Pembetulan sendiri yang menambah utang pajak dikenai bunga Pasal 8 ayat (2a) (uplift 5%) sejak jatuh tempo setor 15 Juli 2026 sampai tanggal bayar; kenaikan Pasal 13 ayat (3) hanya untuk SKPKB dalam kondisi tertentu.",
        jejakHitung: [
          ["PPh 23 = 2% × Rp40.000.000", "Rp800.000"],
          ["Masa terutang", "Juni 2026"],
          ["Bunga mulai dihitung", "15 Juli 2026 (jatuh tempo setor)"]
        ],
        mengapaSalah: {
          B: "Masa pajak mengikuti saat terutang, dan pembetulan yang menambah setoran dikenai bunga",
          C: "Kewajiban memotong melekat pada pembayar; tidak gugur karena penerima melapor",
          D: "Pasal 13 ayat (3) mengatur kenaikan dalam SKPKB, bukan pembetulan sukarela"
        },
        jebakan: "Pembetulan SPT Masa memakai bunga Pasal 8 ayat (2a), bukan Pasal 9 ayat (2a)."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (2a) UU KUP", berlakuSejak: "2020-11-02" }, { pasal: "PER-11/PJ/2025 (BPPU dan pembetulan SPT Masa)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 141/PMK.03/2015 (jasa perancang)", berlakuSejak: "2015-08-24" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A3-063",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "Bendahara Pengeluaran Dinas Perhubungan Kabupaten Lembah Hijau pada Masa Pajak Agustus 2026 melakukan pembayaran berikut: (1) alat tulis kantor Rp2.000.000 kepada Toko Sinar (ber-NPWP, bukan PKP) dalam satu kuitansi yang tidak dipecah; (2) satu set kursi tamu Rp6.000.000 kepada UD Mebel Asri (ber-NPWP, bukan PKP) yang atas permintaan rekanan dibayar dengan tiga kuitansi Rp2.000.000 pada hari yang sama untuk satu pesanan; (3) BBM kendaraan dinas Rp3.500.000 di SPBU; (4) dua unit laptop dari PT Digital Mandiri (PKP, ber-NPWP) dengan tagihan Rp22.200.000 termasuk PPN (DPP nilai lain 11/12, tarif 12%); dan (5) meja rapat Rp4.000.000 kepada UD Kayu Jati milik Tuan Parman yang tidak memiliki NPWP dan NIK-nya belum dipadankan. Jumlah PPh Pasal 22 yang wajib dipungut bendahara pada masa tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp450.000", B: "Rp510.000", C: "Rp420.000", D: "Rp543.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Bendahara memungut 1,5% dari harga pembelian tidak termasuk PPN. Pengecualian Rp2.000.000 hanya untuk pembayaran yang tidak dipecah-pecah, BBM dikecualikan karena jenis barangnya, dan rekanan tanpa NPWP dipungut dengan tarif 100% lebih tinggi (3%).",
        jejakHitung: [
          ["(1) ATK Rp2.000.000 dalam satu kuitansi utuh", "dikecualikan"],
          ["(2) Kursi: satu pesanan Rp6.000.000 yang dipecah → 1,5% × Rp6.000.000", "Rp90.000"],
          ["(3) BBM", "dikecualikan"],
          ["(4) Laptop tanpa PPN = Rp22.200.000 ÷ (1 + 12% × 11/12) = Rp20.000.000 → 1,5%", "Rp300.000"],
          ["(5) Tanpa NPWP: 3% × Rp4.000.000", "Rp120.000"],
          ["Total PPh 22", "Rp510.000"]
        ],
        mengapaSalah: {
          A: "Lupa tarif 100% lebih tinggi bagi UD Kayu Jati yang tidak ber-NPWP (1,5% × Rp4 juta = Rp60.000)",
          C: "Menganggap tiga kuitansi Rp2.000.000 hasil pemecahan satu pesanan ikut dikecualikan",
          D: "Menghitung laptop dari tagihan termasuk PPN (1,5% × Rp22.200.000 = Rp333.000)"
        },
        jebakan: "Batas Rp2 juta diuji pada transaksi yang utuh; memecah kuitansi tidak menghapus pungutan."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf a dan ayat (3) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 51/2025 Pasal 3 ayat (1) dan Pasal 4 ayat (1) (tarif 1,5% atas pembelian barang oleh instansi pemerintah dan pengecualiannya; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PMK 131/2024 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-064",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "Bendahara Pengeluaran RSUD Tanjung Harapan pada Masa Pajak September 2026 membayar (semua harga tidak termasuk PPN, semua rekanan ber-NPWP): (1) linen dan sarung bantal Rp12.000.000 kepada Ibu Rina, pengusaha konveksi orang pribadi dengan peredaran bruto 2025 Rp1,2 miliar, yang menyerahkan Surat Keterangan PP 55/2022 yang masih berlaku; (2) solar untuk genset Rp6.000.000 kepada agen BBM; (3) kertas dan tinta printer Rp2.000.000 dalam satu faktur yang tidak dipecah; dan (4) alat kesehatan Rp25.000.000 kepada PT Medika Sarana yang tidak memiliki surat keterangan apa pun. Jumlah PPh yang wajib dipungut bendahara atas keempat pembayaran tersebut (PPh Pasal 22 ditambah PPh final) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp555.000", B: "Rp375.000", C: "Rp435.000", D: "Rp465.000" },
      kunci: "C",
      jebakanOpsi: { A: "final-nonfinal", B: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Bendahara yang bertransaksi dengan WP PPh final UMKM yang menyerahkan Surat Keterangan memungut PPh final 0,5%, bukan PPh 22 1,5%. Solar (BBM) dan pembayaran paling banyak Rp2.000.000 yang tidak dipecah dikecualikan dari PPh 22 bendahara; alat kesehatan dipungut 1,5%.",
        jejakHitung: [
          ["(1) Ibu Rina dengan Surat Keterangan: PPh final 0,5% × Rp12.000.000", "Rp60.000"],
          ["(2) Solar (BBM)", "dikecualikan"],
          ["(3) Kertas Rp2.000.000 tidak dipecah", "dikecualikan"],
          ["(4) PPh 22 = 1,5% × Rp25.000.000", "Rp375.000"],
          ["Total dipungut bendahara", "Rp435.000"]
        ],
        mengapaSalah: {
          A: "Memungut PPh 22 1,5% atas Ibu Rina (Rp180.000); Surat Keterangan mengubah pungutan menjadi PPh final 0,5%",
          B: "Menganggap Surat Keterangan membebaskan pungutan sehingga Ibu Rina menyetor sendiri; pemungut tetap memungut PPh final 0,5%",
          D: "Memungut 1,5% atas kertas Rp2.000.000 yang masih dalam batas pengecualian (tambahan Rp30.000)"
        },
        jebakan: "Surat Keterangan PP 55/2022 tidak membebaskan pungutan; ia mengubah jenisnya dari PPh 22 1,5% menjadi PPh final 0,5%."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 (pemungutan PPh Pasal 22 atas penyerahan barang dan kegiatan di bidang impor atau usaha lain; rezim PMK 34/PMK.010/2017 dicabut PMK 81/2024 per 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PP 55/2022 s.t.d.d. PP 20/2026 (pelunasan PPh final melalui pemotongan/pemungutan pihak lain)", berlakuSejak: "2026-04-22" }, { pasal: "PMK 164/2023 (Surat Keterangan dan pemungutan PPh final UMKM)", berlakuSejak: "2023-12-29" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A3-065",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-A3-05",
      stem: "Data untuk soal ini dan soal berikutnya (V-A3-05): PT Nusa Petro Niaga, anak usaha PT Pertamina (Persero) yang menjadi produsen/importir BBM dan ditunjuk sebagai pemungut PPh Pasal 22, pada Masa Pajak Juli 2026 menjual (harga jual tidak termasuk PPN): (1) BBM Rp800.000.000 kepada PT Sumber Tirta, pengusaha SPBU Pertamina yang bertindak sebagai penyalur; (2) BBM Rp500.000.000 kepada PT Bumi Fuel Indonesia, pengelola SPBU bermerek sendiri (bukan SPBU Pertamina) yang menjual kembali BBM yang dibelinya dari PT Nusa Petro Niaga; (3) solar industri Rp1.200.000.000 kepada PT Tambang Batu Raya untuk dipakai sendiri pada alat beratnya; dan (4) pelumas Rp200.000.000 kepada CV Oli Jaya, agen pelumas. Seluruh pembeli ber-NPWP. Pada bulan yang sama PT Nusa Petro Niaga juga menyetor PPN Rp350.000.000 dan PPh Pasal 25 Rp1.100.000.000. Jumlah PPh Pasal 22 yang dipungut PT Nusa Petro Niaga atas keempat penjualan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.450.000", B: "Rp7.700.000", C: "Rp8.100.000", D: "Rp3.850.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 22 atas penjualan BBM oleh produsen/importir: 0,25% bila pembelinya SPBU yang menjual BBM yang dibeli dari PT Pertamina (Persero) atau anak usahanya; 0,3% bila SPBU itu menjual BBM yang dibeli selain dari Pertamina/anak usahanya, dan 0,3% bagi pembeli selain SPBU, termasuk pemakai akhir industri; pelumas 0,3%. Yang menentukan tarif SPBU adalah asal BBM-nya, bukan merek SPBU. Dasarnya harga jual tanpa PPN, dan pemakai akhir tidak dikecualikan.",
        jejakHitung: [
          ["(1) SPBU yang menjual BBM dari anak usaha Pertamina: 0,25% × Rp800.000.000", "Rp2.000.000"],
          ["(2) SPBU bermerek sendiri yang menjual BBM dari anak usaha Pertamina: 0,25% × Rp500.000.000", "Rp1.250.000"],
          ["(3) Selain SPBU (dipakai sendiri): 0,3% × Rp1.200.000.000", "Rp3.600.000"],
          ["(4) Pelumas: 0,3% × Rp200.000.000", "Rp600.000"],
          ["Total PPh 22 (data PPN dan PPh 25 tidak dipakai)", "Rp7.450.000"]
        ],
        mengapaSalah: {
          B: "Menggolongkan SPBU menurut mereknya (0,3% untuk SPBU bukan Pertamina); PMK 51/2025 menggolongkan menurut asal BBM yang dijual SPBU, dan BBM PT Bumi Fuel Indonesia dibeli dari anak usaha Pertamina",
          C: "Memakai 0,3% untuk semua penjualan; tarif 0,25% berlaku atas penjualan kepada SPBU yang menjual BBM dari Pertamina atau anak usahanya",
          D: "Menganggap penjualan kepada pemakai akhir dikecualikan seperti pada emas perhiasan (Rp2.000.000 + Rp1.250.000 + Rp600.000); pengecualian itu tidak ada untuk BBM"
        },
        jebakan: "Tarif 0,25% atau 0,3% ditentukan oleh asal BBM yang dijual SPBU pembeli (dibeli dari Pertamina/anak usahanya atau bukan) dan oleh apakah pembelinya SPBU, bukan oleh merek SPBU atau jenis BBM-nya."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf f dan Pasal 3 ayat (1) huruf c (PPh Pasal 22 produsen/importir BBM, BBG, dan pelumas; PMK 51/2025 berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A3-066",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      kasusId: "V-A3-05",
      stem: "V-A3-05 — PT Nusa Petro Niaga memungut PPh Pasal 22 Rp2.000.000 atas penjualan BBM Rp800.000.000 kepada PT Sumber Tirta (pengusaha SPBU Pertamina yang bertindak sebagai penyalur) dan Rp3.600.000 atas penjualan solar industri Rp1.200.000.000 kepada PT Tambang Batu Raya yang memakainya sendiri. Pernyataan yang paling tepat mengenai sifat PPh Pasal 22 tersebut bagi kedua pembeli adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPh Pasal 22 Rp2.000.000 dan Rp3.600.000 sama-sama merupakan kredit pajak bagi kedua pembeli karena PPh Pasal 22 selain impor selalu bersifat tidak final", B: "PPh Pasal 22 Rp2.000.000 bersifat final bagi PT Sumber Tirta selaku penyalur, dan PPh Pasal 22 Rp3.600.000 juga bersifat final bagi PT Tambang Batu Raya karena objeknya sama-sama BBM", C: "PPh Pasal 22 Rp2.000.000 merupakan kredit pajak bagi PT Sumber Tirta dalam SPT Tahunan, sedangkan PPh Pasal 22 Rp3.600.000 bersifat final bagi PT Tambang Batu Raya sebagai pemakai akhir", D: "PPh Pasal 22 Rp2.000.000 bersifat final bagi PT Sumber Tirta selaku penyalur, sedangkan PPh Pasal 22 Rp3.600.000 merupakan kredit pajak bagi PT Tambang Batu Raya dalam SPT Tahunan PPh Badan 2026" },
      kunci: "D",
      jebakanOpsi: { A: "final-nonfinal", B: "final-nonfinal", C: "final-nonfinal" },
      pembahasan: {
        inti: "Pemungutan PPh 22 atas penjualan BBM dan BBG kepada penyalur/agen bersifat final; kepada pembeli lain, misalnya pemakai akhir industri, bersifat tidak final dan menjadi kredit pajak pembeli. PPh 22 atas penjualan pelumas selalu tidak final, termasuk bila pembelinya agen.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Ada PPh 22 yang final, yaitu atas BBM dan BBG yang dibeli penyalur/agen",
          B: "Sifat final hanya untuk penyalur/agen, bukan pemakai akhir",
          C: "Sifatnya terbalik: penyalur final, pemakai akhir kredit pajak"
        },
        jebakan: "Keempat opsi hanya berbeda pada frasa 'final' atau 'kredit pajak'; penentunya status pembeli (penyalur/agen atau bukan)."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 Pasal 10 (PPh 22 atas BBM dan BBG final bagi penyalur/agen dan tidak final bagi pembeli lain; atas pelumas tidak final; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 28 ayat (1) UU PPh (kredit pajak PPh 22)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A3-067",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Presisi Manufaktur (WP badan dalam negeri) pada Masa Pajak Agustus 2026 melakukan pembayaran berikut: (1) harga mesin CNC Rp3.000.000.000 kepada Hans Maschinen GmbH (Jerman, tidak memiliki BUT di Indonesia); mesin dikirim dari Hamburg dan PPh Pasal 22 impor Rp82.500.000 telah dibayar saat pengeluaran barang dari kawasan pabean; (2) imbalan jasa pelatihan operator secara daring yang seluruhnya dilakukan dari Jerman oleh Hans Maschinen GmbH Rp250.000.000; (3) royalti lisensi perangkat lunak pengendali mesin kepada Hans Maschinen GmbH Rp150.000.000; dan (4) jasa pengurusan dokumen impor kepada BUT Nordic Freight A/S di Jakarta (BUT perusahaan Denmark, ber-NPWP) Rp20.000.000. Hans Maschinen GmbH tidak menyerahkan Form DGT. Jumlah PPh Pasal 26 yang wajib dipotong PT Presisi Manufaktur adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp80.000.000", B: "Rp84.000.000", C: "Rp230.000.000", D: "Rp40.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Pembayaran harga barang yang diimpor bukan objek PPh 26; pelunasan PPh atas impornya melalui PPh 22 impor. Imbalan jasa dan royalti kepada WPLN tanpa BUT dipotong PPh 26 20% karena tanpa Form DGT tarif P3B tidak dapat dipakai. BUT di Indonesia adalah subjek pajak dalam negeri sehingga dipotong PPh 23, bukan PPh 26.",
        jejakHitung: [
          ["(1) Harga mesin impor", "bukan objek PPh 26"],
          ["(2) Jasa pelatihan: 20% × Rp250.000.000", "Rp50.000.000"],
          ["(3) Royalti: 20% × Rp150.000.000", "Rp30.000.000"],
          ["(4) BUT Nordic Freight → PPh 23 2% (Rp400.000)", "tidak dihitung sebagai PPh 26"],
          ["Total PPh 26", "Rp80.000.000"]
        ],
        mengapaSalah: {
          B: "Memotong PPh 26 20% atas pembayaran kepada BUT (Rp4.000.000); BUT dipotong PPh 23",
          C: "Menambahkan 5% (20% × perkiraan neto 25%) atas harga mesin (Rp150.000.000) seolah-olah penjualan harta di Indonesia; mesin itu barang impor yang dikirim dari Hamburg, dan PPh 26 atas penjualan harta di Indonesia pun hanya untuk harta dalam daftar PMK 82/PMK.03/2009 Pasal 2 ayat (4), yang tidak mencakup mesin",
          D: "Menerapkan tarif P3B 10% padahal Form DGT tidak diserahkan"
        },
        jebakan: "Pembelian barang dari luar negeri bukan objek PPh 26; yang dipotong adalah jasa dan royalti."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (5) dan Pasal 23 ayat (1) UU PPh (BUT sebagai penerima PPh 23)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (Form DGT sebagai syarat tarif P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PMK 82/PMK.03/2009 Pasal 2 ayat (1) dan ayat (4) (penjualan harta tertentu di Indonesia oleh WPLN; mesin tidak termasuk daftar)", berlakuSejak: "2009-04-22" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-068", topik: "A3.8", tingkat: ["B", "C"], jenis: "klasifikasi", kesulitan: 3, laporanUjian: ["B-2026-10"],
      stem: "PT Kemasan Prima pada Oktober 2026 membayar kepada SG Pack Pte Ltd (Singapura, tidak memiliki BUT di Indonesia): (1) harga tiga unit mesin pengemas yang dikirim dari Singapura dan diimpor melalui Tanjung Priok Rp2.000.000.000; (2) imbalan jasa desain tata letak lini produksi yang seluruhnya dikerjakan di Singapura Rp300.000.000; dan (3) royalti penggunaan paten teknologi pengemasan Rp200.000.000. Sebelum pembayaran, SG Pack Pte Ltd menyerahkan Form DGT yang sah dan terekam di Coretax, serta merupakan pemilik manfaat (beneficial owner). Anggap P3B Indonesia–Singapura membatasi tarif royalti 10% dan tidak memuat pasal khusus imbalan jasa teknik, sehingga imbalan jasa tanpa BUT merupakan laba usaha yang hanya dipajaki di Singapura. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Harga mesin bukan objek PPh Pasal 26; imbalan jasa desain tidak dipotong karena merupakan laba usaha tanpa BUT; royalti dipotong 10% sehingga PPh Pasal 26 seluruhnya Rp20.000.000", B: "Harga mesin dipotong PPh Pasal 26 dengan tarif efektif 5% karena dibayarkan kepada WPLN; imbalan jasa desain tidak dipotong; royalti dipotong 10% sehingga PPh Pasal 26 seluruhnya Rp120.000.000", C: "Harga mesin bukan objek PPh Pasal 26; imbalan jasa desain dipotong 20% karena P3B hanya membatasi dividen, bunga, dan royalti; royalti dipotong 10% sehingga PPh Pasal 26 seluruhnya Rp80.000.000", D: "Harga mesin bukan objek PPh Pasal 26; imbalan jasa desain tidak dipotong; royalti juga tidak dipotong karena seluruh penghasilan SG Pack Pte Ltd adalah laba usaha tanpa BUT sehingga PPh Pasal 26 nihil" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembelian barang impor bukan objek PPh 26. Dengan Form DGT yang sah, P3B diterapkan per jenis penghasilan: imbalan jasa tanpa BUT masuk laba usaha (hak pemajakan negara domisili), sedangkan royalti tetap boleh dipajaki Indonesia dengan tarif yang dibatasi P3B.",
        jejakHitung: [["Harga mesin", "bukan objek PPh 26"], ["Jasa desain (laba usaha, tanpa BUT)", "Rp0"], ["Royalti: 10% × Rp200.000.000", "Rp20.000.000"], ["Total PPh 26", "Rp20.000.000"]],
        mengapaSalah: { B: "Perkiraan neto Pasal 26 ayat (2) berlaku untuk penjualan harta yang berada di Indonesia, bukan pembelian barang impor", C: "P3B juga mengatur laba usaha; tanpa BUT imbalan jasa hanya dipajaki di Singapura", D: "Royalti diatur pasal tersendiri dalam P3B yang tetap memberi hak pemajakan terbatas kepada negara sumber" },
        jebakan: "Terapkan P3B per jenis penghasilan: barang, jasa, dan royalti diperlakukan berbeda."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 32A UU PPh" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-069", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2,
      stem: "Tuan Yusuf adalah pegawai tetap PT Delta Prima sejak 2021 dan NIK-nya telah dipadankan. Pada 1 Januari 2026 ia telah menikah dan memiliki satu anak; istrinya tidak bekerja. Anak keduanya lahir pada 3 Juli 2026. Selama 2026 ia tidak pernah berhenti bekerja dan setiap bulan menerima gaji serta tunjangan tetap. Pernyataan yang paling tepat mengenai pemotongan PPh Pasal 21 Tuan Yusuf tahun 2026 adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Januari–November dipotong dengan TER kategori A atas seluruh penghasilan bruto bulanan; pada Masa Pajak Desember PPh setahun dihitung dengan tarif Pasal 17 atas PKP setelah dikurangi PTKP K/1, lalu dikurangi PPh Januari–November", B: "Januari–November dipotong dengan TER kategori B atas seluruh penghasilan bruto bulanan; pada Masa Pajak Desember PPh setahun dihitung dengan tarif Pasal 17 atas PKP setelah dikurangi PTKP K/1, lalu dikurangi PPh Januari–November", C: "Januari–November dipotong dengan TER kategori B atas seluruh penghasilan bruto bulanan; pada Masa Pajak Desember PPh setahun dihitung dengan tarif Pasal 17 atas PKP setelah dikurangi PTKP K/2 karena anak kedua lahir sebelum akhir tahun, lalu dikurangi PPh Januari–November", D: "Januari–November dipotong dengan TER kategori B atas seluruh penghasilan bruto bulanan; pada Masa Pajak Desember PPh tetap dihitung dengan TER kategori B atas penghasilan bruto Desember tanpa penghitungan ulang tarif Pasal 17" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Status K/1 pada 1 Januari masuk kategori B. Desember adalah Masa Pajak Terakhir: PPh setahun dihitung ulang dengan tarif Pasal 17 memakai PTKP status 1 Januari (K/1), lalu dikurangi PPh Januari–November.",
        jejakHitung: [],
        mengapaSalah: { A: "Kategori A hanya untuk TK/0, TK/1, dan K/0; K/1 masuk kategori B", C: "Tambahan tanggungan dalam tahun berjalan baru berlaku untuk tahun pajak berikutnya", D: "Pegawai tetap wajib dihitung ulang dengan tarif Pasal 17 pada Masa Pajak Terakhir" },
        jebakan: "Keempat opsi hanya berbeda satu frasa (kategori, status PTKP, atau metode Desember); bandingkan frasa demi frasa."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-070", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 3,
      stem: "Tuan Rudi di-PHK oleh PT Sinar Logam pada November 2026. Uang pesangon, uang penghargaan masa kerja, dan uang penggantian hak seluruhnya Rp240.000.000 dibayar dua kali: Rp100.000.000 pada 28 Desember 2026 dan Rp140.000.000 pada 26 Maret 2027. Atas tahap pertama telah dipotong PPh Pasal 21 Rp2.500.000. Pernyataan yang paling tepat mengenai pemotongan PPh Pasal 21 atas tahap kedua adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Dihitung atas jumlah kumulatif Rp240.000.000 karena kedua pembayaran masih dalam 2 tahun kalender sehingga dipotong Rp21.000.000; PPh tersebut bersifat final dan dibuatkan BP21", B: "Dihitung tersendiri atas Rp140.000.000 karena dibayar pada tahun kalender yang berbeda sehingga dipotong Rp8.500.000; PPh tersebut bersifat final dan dibuatkan BP21", C: "Dihitung atas jumlah kumulatif Rp240.000.000 karena kedua pembayaran masih dalam 2 tahun kalender sehingga dipotong Rp21.000.000; PPh tersebut bersifat tidak final dan dikreditkan dalam SPT Tahunan 2027", D: "Dihitung atas jumlah kumulatif Rp240.000.000 karena kedua pembayaran masih dalam 2 tahun kalender sehingga dipotong Rp21.000.000; PPh tersebut bersifat final dan dibuatkan BPA1 karena Tuan Rudi mantan pegawai tetap" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "final-nonfinal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pesangon yang dibayar bertahap dalam paling lama 2 tahun kalender dihitung kumulatif dengan lapisan PP 68/2009 dan bersifat final; bukti potongnya BP21.",
        jejakHitung: [["PPh atas kumulatif Rp240.000.000 = 0% × 50 jt + 5% × 50 jt + 15% × 140 jt", "Rp23.500.000"], ["Dikurangi PPh tahap pertama", "Rp2.500.000"], ["PPh tahap kedua", "Rp21.000.000"]],
        mengapaSalah: { B: "Pergantian tahun tidak memutus kumulasi selama masih dalam 2 tahun kalender; menghitung dari nol memakai lagi lapisan 0% dan 5% (0 + Rp2.500.000 + 15% × Rp40 juta)", C: "PPh pesangon yang dibayar dalam 2 tahun kalender bersifat final", D: "BPA1 untuk pegawai tetap/pensiunan berkala; pesangon memakai BP21" },
        jebakan: "Opsi A, C, dan D memuat angka yang sama; pembedanya hanya sifat final dan kode bukti potong."
      },
      dasarHukum: [{ pasal: "PP 68/2009 (pesangon dibayar bertahap)", berlakuSejak: "2009-11-16" }, { pasal: "PMK 16/PMK.03/2010" }, { pasal: "PER-11/PJ/2025 (BP21)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-071",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "PP 58/2023 Pasal 2 jo. PMK 168/2023 (parafrase): PPh Pasal 21 pegawai tetap untuk setiap Masa Pajak selain Masa Pajak Terakhir dihitung dengan tarif efektif bulanan; pada Masa Pajak Terakhir, yaitu Masa Pajak Desember atau Masa Pajak saat pegawai tetap berhenti bekerja, PPh Pasal 21 dihitung dengan tarif Pasal 17 ayat (1) huruf a atas Penghasilan Kena Pajak, dikurangi PPh Pasal 21 yang telah dipotong pada Masa Pajak sebelumnya.",
      stem: "Nona Lia, pegawai tetap PT Abadi Sentosa, mengundurkan diri efektif 30 Juni 2026 dan langsung bekerja di perusahaan lain di Indonesia. Untuk Masa Pajak Januari–Mei 2026, PT Abadi Sentosa telah memotong PPh Pasal 21 Nona Lia dengan tarif efektif bulanan dan melaporkannya dalam Formulir L-IA (Daftar Pemotongan Bulanan) lampiran SPT Masa PPh 21/26. Berdasarkan kutipan tersebut, tindakan administrasi PT Abadi Sentosa atas Masa Pajak Juni 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Memotong dengan tarif efektif bulanan dan melaporkan Masa Juni dalam Formulir L-IA seperti bulan-bulan sebelumnya, sedangkan BPA1 Nona Lia dibuat pada Masa Pajak Desember 2026 bersama pegawai lain; setor paling lambat 15 Juli dan lapor paling lambat 20 Juli 2026", B: "Membuat BP21 untuk Nona Lia pada Masa Pajak Juni 2026 karena ia tidak lagi berstatus pegawai tetap; setor paling lambat 15 Juli dan lapor paling lambat 20 Juli 2026", C: "Menghitung ulang dengan tarif Pasal 17 dan membuat BPA1 Nona Lia pada Masa Pajak Juni 2026; setor paling lambat Rabu, 15 Juli 2026 dan lapor SPT Masa PPh 21/26 paling lambat Senin, 20 Juli 2026", D: "Menghitung ulang dengan tarif Pasal 17 dan membuat BPA1 Nona Lia pada Masa Pajak Juni 2026; setor paling lambat 10 Juli 2026 dan lapor SPT Masa PPh 21/26 paling lambat 31 Juli 2026" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Bulan berhenti menjadi Masa Pajak Terakhir (PER-11/PJ/2025 Ps. 7 ayat (1) huruf g), sehingga hitung ulang Pasal 17 dan BPA1 dibuat pada Masa Juni 2026 (Ps. 7 ayat (1) huruf a dan e). Untuk Masa Pajak selain Masa Pajak Terakhir tidak ada bukti potong tersendiri: pemotongan bulanan pegawai tetap dilaporkan dalam Formulir L-IA lampiran SPT Masa PPh 21/26 (Ps. 11 ayat (1) huruf b angka 1). Setor tanggal 15 bulan berikutnya, lapor 20 hari setelah Masa Pajak berakhir.",
        jejakHitung: [
          ["Masa Pajak Terakhir", "Juni 2026 (bulan berhenti)"],
          ["Bukti potong", "BPA1"],
          ["Tenggat setor", "Rabu, 15 Juli 2026"],
          ["Tenggat lapor SPT Masa PPh 21/26", "Senin, 20 Juli 2026"]
        ],
        mengapaSalah: {
          A: "Masa Pajak Terakhir pegawai yang berhenti adalah bulan berhenti, bukan Desember; Juni tidak lagi diperlakukan sebagai masa biasa (L-IA), tetapi dihitung ulang dan dibuatkan BPA1",
          B: "BP21 untuk bukan pegawai, pegawai tidak tetap, dan pesangon; penghasilan Nona Lia Januari–Juni adalah penghasilan pegawai tetap",
          D: "Tanggal 10 adalah tenggat setor lama, dan akhir bulan berikutnya adalah tenggat SPT Masa PPN"
        },
        jebakan: "Berhenti bekerja tidak mengubah status menjadi bukan pegawai; yang berubah adalah Masa Pajak Terakhirnya."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 6 ayat (1) huruf a dan Pasal 7 ayat (1) huruf a, e, dan g (BPA1 pada Masa Pajak terakhir)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A3-072",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kutipan: "PMK 37/2025 (parafrase): penyelenggara marketplace yang ditunjuk sebagai Pihak Lain memungut PPh Pasal 22 sebesar 0,5% dari peredaran bruto pedagang dalam negeri yang tercantum dalam dokumen tagihan, tidak termasuk PPN dan PPnBM; pemungutan tidak dilakukan atas Wajib Pajak orang pribadi dalam negeri dengan peredaran bruto sampai dengan Rp500 juta pada tahun pajak berjalan yang telah menyampaikan surat pernyataan; dokumen tagihan atas nama pedagang yang dihasilkan melalui sistem marketplace dipersamakan dengan bukti pemungutan PPh Pasal 22.",
      stem: "Anggap pemungutan oleh Marketplace Nusa (Pihak Lain yang ditunjuk) berlaku mulai 1 November 2026. Pada November 2026: (1) Tuan Bayu, pedagang orang pribadi pengguna PPh final PP 55/2022, dengan peredaran bruto 2025 Rp350 juta dan Januari–Oktober 2026 Rp310 juta, telah menyampaikan surat pernyataan melalui marketplace dan bertransaksi Rp25.000.000; (2) PT Kain Prima, perseroan terbatas biasa yang membayar PPh dengan tarif umum, bertransaksi Rp80.000.000 (tidak termasuk PPN). Berdasarkan kutipan tersebut, perlakuan administrasi yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Marketplace memungut Rp125.000 dari Tuan Bayu dan Rp400.000 dari PT Kain Prima, karena surat pernyataan hanya berlaku bagi pedagang yang tidak ber-NPWP", B: "Marketplace tidak memungut dari Tuan Bayu; atas PT Kain Prima dipungut Rp400.000 yang bersifat final sehingga tidak dapat dikreditkan", C: "Marketplace tidak memungut dari Tuan Bayu; atas PT Kain Prima dipungut Rp400.000 yang baru dapat dikreditkan bila marketplace menerbitkan BPPU tersendiri di Coretax", D: "Marketplace tidak memungut dari Tuan Bayu; atas PT Kain Prima dipungut Rp400.000, dan dokumen tagihan marketplace menjadi bukti pungut yang dikreditkan PT Kain Prima dalam SPT Tahunan PPh Badan 2026" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "final-nonfinal", C: "lupa-pasal" },
      pembahasan: {
        inti: "Pedagang orang pribadi dengan peredaran bruto tahun berjalan sampai dengan Rp500 juta yang telah menyampaikan surat pernyataan tidak dipungut (Pasal 10 ayat (1) huruf a). Pedagang lain dipungut 0,5% × peredaran bruto tanpa PPN (Pasal 8 ayat (1)); bagi WP tarif umum pungutan itu dapat diperhitungkan sebagai pembayaran PPh tahun berjalan (kredit pajak), dan dokumen tagihan dipersamakan dengan bukti pemungutan PPh Pasal 22 (Pasal 12 ayat (4)) sehingga tidak perlu BPPU terpisah.",
        jejakHitung: [
          ["Tuan Bayu: peredaran bruto 2026 = Rp310.000.000 + Rp25.000.000 = Rp335.000.000 ≤ Rp500 juta, ada surat pernyataan", "tidak dipungut"],
          ["PT Kain Prima: 0,5% × Rp80.000.000", "Rp400.000"],
          ["Sifat bagi PT tarif umum", "kredit pajak"],
          ["Dokumen", "dokumen tagihan (dipersamakan dengan bukti pemungutan PPh Pasal 22)"]
        ],
        mengapaSalah: {
          A: "Syarat tidak dipungut adalah WP orang pribadi dengan peredaran bruto tahun berjalan ≤ Rp500 juta yang menyampaikan surat pernyataan, bukan ketiadaan NPWP",
          B: "Pungutan menjadi pelunasan PPh final hanya bagi pedagang yang dikenai PPh final; bagi PT bertarif umum pungutan dapat diperhitungkan sebagai pembayaran PPh tahun berjalan",
          C: "Dokumen tagihan sudah dipersamakan dengan bukti pemungutan PPh Pasal 22, sehingga tidak perlu BPPU tersendiri"
        },
        jebakan: "Satu kutipan memuat tiga kunci: tarif 0,5%, pengecualian orang pribadi dengan peredaran bruto ≤ Rp500 juta yang menyampaikan surat pernyataan, dan dokumen tagihan yang dipersamakan dengan bukti pemungutan."
      },
      dasarHukum: [{ pasal: "PMK 37/2025 Pasal 8 ayat (1) dan ayat (3), Pasal 10 ayat (1) huruf a, Pasal 12 ayat (4) (marketplace sebagai pemungut PPh 22)", berlakuSejak: "2025-07-14" }, { pasal: "Pasal 28 ayat (1) huruf b UU PPh (kredit pajak PPh Pasal 22)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-073", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Dimas adalah supervisor gudang (pegawai tetap) PT Agro Lestari Nusantara (PKP, peredaran bruto 2025 Rp86 miliar) sejak 2019 dan NIK-nya telah dipadankan. Pada 1 Januari 2026 ia telah menikah dan memiliki dua anak; istrinya bekerja sebagai guru honorer di sekolah swasta dengan honor Rp3.200.000 per bulan, dan anak ketiganya lahir 14 Agustus 2026. Rincian penghasilan dan potongan Masa Pajak Oktober 2026 (dibayar 25 Oktober): gaji pokok Rp10.000.000; tunjangan jabatan Rp1.500.000; uang lembur Rp900.000; premi JKK 0,24% dan JKM 0,30% yang ditanggung PT Rp54.000; premi BPJS Kesehatan bagian pemberi kerja 4% Rp400.000; iuran JHT 3,7% (Rp370.000) dan JP 2% (Rp200.000) bagian pemberi kerja yang disetor PT ke BPJS Ketenagakerjaan; iuran JHT 2% (Rp200.000) dan JP 1% (Rp100.000) bagian pegawai yang dipotong dari gaji; zakat penghasilan Rp250.000 melalui PT kepada BAZNAS; cicilan pinjaman koperasi karyawan Rp750.000; serta makan siang di kantin kantor yang disediakan untuk seluruh pegawai senilai Rp700.000. PPh Pasal 21 yang dipotong PT Agro Lestari Nusantara untuk Masa Pajak Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp504.160", B: "Rp514.160", C: "Rp536.960", D: "Rp542.160" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Status 1 Januari K/2 masuk kategori B; pekerjaan istri dan kelahiran anak ketiga tidak mengubahnya. Bruto TER = gaji + tunjangan + lembur + premi JKK/JKM + premi BPJS Kesehatan bagian pemberi kerja = Rp12.854.000, pada lapisan B Rp12.600.000–13.600.000 = 4%. Iuran JHT/JP bagian pemberi kerja dan makan bersama di kantor bukan objek; iuran pegawai, zakat, dan cicilan koperasi tidak mengurangi bruto TER.",
        jejakHitung: [["Status 1 Januari K/2 → kategori", "B"], ["Gaji + tunjangan + lembur = 10.000.000 + 1.500.000 + 900.000", "Rp12.400.000"], ["+ premi JKK/JKM Rp54.000 + premi BPJS Kesehatan Rp400.000", "Rp12.854.000"], ["Iuran JHT/JP pemberi kerja, makan siang bersama", "bukan objek"], ["Iuran pegawai, zakat, cicilan koperasi", "tidak mengurangi bruto TER"], ["Lapisan B Rp12.600.000–13.600.000", "4%"], ["PPh 21 = 4% × Rp12.854.000", "Rp514.160"]],
        mengapaSalah: { A: "Mengurangkan zakat Rp250.000 sebelum TER (4% × Rp12.604.000); zakat melalui pemberi kerja baru menjadi pengurang pada Masa Pajak Terakhir", C: "Memasukkan iuran JHT dan JP bagian pemberi kerja Rp570.000 yang bukan objek (4% × Rp13.424.000)", D: "Memasukkan makan siang bersama di kantin Rp700.000 yang dikecualikan (4% × Rp13.554.000)" },
        jebakan: "Data istri, kelahiran Agustus, omzet perusahaan, iuran pegawai, zakat, dan cicilan koperasi sengaja disertakan; hanya unsur bruto dan status 1 Januari yang dipakai (mengurangkan iuran pegawai Rp300.000 bahkan menggeser bruto ke lapisan 3%)."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3) dan Lampiran", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (unsur penghasilan bruto)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 66/2023 (makanan/minuman bagi seluruh pegawai)", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-074", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Sinar Karya Logistik (PKP, peredaran bruto 2025 Rp120 miliar, memiliki tiga cabang ber-NITKU) pada Masa Pajak November 2026 melakukan pembayaran berikut (seluruhnya belum termasuk PPN): (1) sewa dua forklift tanpa operator dari PT Alat Prima (ber-NPWP) Rp36.000.000; (2) jasa perawatan genset dari CV Teknik Daya, yang bukan penyedia jasa konstruksi dan tidak memiliki NPWP, Rp24.000.000; (3) royalti penggunaan merek dagang kepada PT Merek Jaya (WP badan dalam negeri, ber-NPWP) Rp40.000.000; (4) jasa angkutan truk antarkota dari PT Truk Andal (ber-NPWP) Rp30.000.000; (5) voyage charter kapal tongkang dari PT Bahari Samudra, perusahaan pelayaran dalam negeri, Rp25.000.000; (6) sewa gudang di Cikarang dari Tuan Hendra Rp90.000.000; (7) bunga pinjaman modal kerja kepada PT Bank Nusa Rp12.000.000; dan (8) hadiah undian program loyalitas pelanggan berupa uang Rp10.000.000 kepada Ny. Wati. Jumlah PPh Pasal 23 yang wajib dipotong PT Sinar Karya Logistik pada Masa Pajak November 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp7.680.000", B: "Rp7.800.000", C: "Rp8.280.000", D: "Rp8.780.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya empat pembayaran yang objek PPh 23: sewa forklift (2%), perawatan genset oleh penerima tanpa NPWP (2% × 200% = 4%), royalti (15%), dan jasa angkutan darat (2%). Charter tongkang dari pelayaran dalam negeri adalah PPh 15, sewa gudang dan hadiah undian PPh 4 ayat (2), dan bunga kepada bank dikecualikan dari PPh 23.",
        jejakHitung: [["(1) Forklift: 2% × Rp36.000.000", "Rp720.000"], ["(2) Genset, tanpa NPWP: 4% × Rp24.000.000", "Rp960.000"], ["(3) Royalti: 15% × Rp40.000.000", "Rp6.000.000"], ["(4) Angkutan truk: 2% × Rp30.000.000", "Rp600.000"], ["(5) PPh 15; (6) dan (8) PPh 4 ayat (2); (7) dikecualikan", "bukan PPh 23"], ["Total PPh 23", "Rp8.280.000"]],
        mengapaSalah: { A: "Menganggap angkutan darat sebagai PPh 15; norma Pasal 15 hanya untuk pelayaran/penerbangan, sedangkan jasa angkutan darat termasuk jasa lain PPh 23", B: "Lupa tarif 100% lebih tinggi bagi CV Teknik Daya yang tidak ber-NPWP (2% × Rp24 juta = Rp480.000)", D: "Memotong PPh 23 2% atas charter tongkang (Rp500.000) yang merupakan objek PPh 15 1,2%" },
        jebakan: "Delapan pembayaran, hanya empat yang masuk PPh 23; selesaikan klasifikasi sebelum menghitung."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1), (1a), dan (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 (perawatan mesin, jasa pengangkutan)", berlakuSejak: "2015-08-24" }, { pasal: "KMK 416/KMK.04/1996 (pelayaran dalam negeri)", berlakuSejak: "1996-06-14" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-075", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ny. Melati adalah manajer pemasaran (pegawai tetap, bukan pemegang saham) PT Cipta Rasa Nusantara dengan gaji dan tunjangan tetap Rp42.000.000 per bulan, termasuk tunjangan makan tunai Rp1.000.000; status PTKP pada 1 Januari 2026 TK/0 dan NIK-nya telah dipadankan. Pada Masa Pajak Februari 2026 ia juga menerima atau menikmati dari perusahaan: (1) mobil dinas beserta sopir dengan biaya sewa Rp9.000.000 per bulan; (2) rumah kontrakan non-komunal yang sewanya dibayar perusahaan Rp4.500.000 per bulan; (3) keanggotaan pusat kebugaran Rp2.700.000 untuk satu tahun yang dibayar sekaligus pada Februari 2026 dan merupakan satu-satunya fasilitas olahraga selain golf yang ia terima tahun 2026; (4) keanggotaan klub golf Rp5.000.000; (5) telepon genggam beserta paket internet untuk menunjang pekerjaan Rp1.200.000; dan (6) parsel Imlek Rp1.500.000. Jumlah nilai natura dan/atau kenikmatan yang menjadi objek PPh Pasal 21 Ny. Melati pada Masa Pajak Februari 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.900.000", B: "Rp10.200.000", C: "Rp3.700.000", D: "Rp8.700.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Mobil dinas dikecualikan karena Ny. Melati bukan pemegang saham dan brutonya ≤ Rp100 juta per bulan; telepon dan internet kerja serta bingkisan hari raya keagamaan dikecualikan. Rumah non-komunal hanya dikecualikan sampai Rp2 juta per bulan, fasilitas olahraga non-golf sampai Rp1,5 juta per tahun, sedangkan golf tidak termasuk fasilitas olahraga yang dikecualikan.",
        jejakHitung: [["(1) Mobil dinas: bukan pemegang saham, bruto Rp42 juta ≤ Rp100 juta", "dikecualikan"], ["(2) Rumah non-komunal: Rp4.500.000 − Rp2.000.000", "Rp2.500.000"], ["(3) Kebugaran: Rp2.700.000 − batas Rp1.500.000 setahun", "Rp1.200.000"], ["(4) Golf: tidak termasuk olahraga yang dikecualikan", "Rp5.000.000"], ["(5) Telepon dan internet kerja; (6) parsel Imlek", "dikecualikan"], ["Tunjangan makan tunai", "bukan natura (sudah bagian gaji)"], ["Objek PPh 21 natura/kenikmatan Februari", "Rp8.700.000"]],
        mengapaSalah: { A: "Menganggap telepon genggam dan paket internet kerja (Rp1.200.000) sebagai objek; peralatan dan fasilitas penunjang kerja dikecualikan", B: "Memasukkan seluruh biaya kebugaran Rp2.700.000 tanpa batas pengecualian Rp1,5 juta per tahun", C: "Menganggap keanggotaan golf dikecualikan seperti olahraga lain; golf, pacuan kuda, balap perahu bermotor, terbang layang, dan olahraga otomotif dikeluarkan dari pengecualian" },
        jebakan: "Tiap jenis natura punya batas sendiri: Rp2 juta per bulan (rumah), Rp1,5 juta per tahun (olahraga non-golf), Rp100 juta per bulan dan bukan pemegang saham (kendaraan)."
      },
      dasarHukum: [{ pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh s.t.d.t.d. UU HPP", berlakuSejak: "2022-01-01" }, { pasal: "PMK 66/2023 Pasal 4 dan Lampiran (batasan natura yang dikecualikan)", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-076", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 1, laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 3 ayat (1) huruf b UU PPh (parafrase setia): yang tidak termasuk subjek pajak adalah pejabat perwakilan diplomatik dan konsulat atau pejabat lain dari negara asing dan orang yang diperbantukan kepada mereka yang bekerja pada dan bertempat tinggal bersama mereka, dengan syarat bukan warga negara Indonesia dan di Indonesia tidak menerima atau memperoleh penghasilan lain di luar jabatan atau pekerjaannya tersebut, serta negara bersangkutan memberikan perlakuan timbal balik.",
      stem: "Kedutaan Besar Negara Arvelia di Jakarta (Arvelia memberikan perlakuan timbal balik kepada Indonesia) pada 2026 memiliki: (1) Mr. Lukas Weber, diplomat warga negara Arvelia yang tidak memperoleh penghasilan lain di Indonesia; (2) Mrs. Anna Kraus, juru masak warga negara Arvelia yang diperbantukan dan tinggal di kediaman Duta Besar, tetapi setiap akhir pekan juga dibayar Rp6.000.000 per bulan untuk mengajar kelas memasak di sebuah hotel di Jakarta; dan (3) Tuan Bambang, sopir warga negara Indonesia yang direkrut di Jakarta. Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Hanya Mr. Lukas Weber yang tidak termasuk subjek pajak; Mrs. Anna Kraus menjadi subjek pajak karena memperoleh penghasilan lain di Indonesia, dan Tuan Bambang adalah subjek pajak dalam negeri yang menghitung serta menyetor sendiri PPh atas gajinya karena kedutaan bukan pemotong PPh Pasal 21", B: "Mr. Lukas Weber dan Mrs. Anna Kraus tidak termasuk subjek pajak karena keduanya warga negara asing yang bekerja pada kedutaan, dan Tuan Bambang adalah subjek pajak dalam negeri yang menghitung serta menyetor sendiri PPh atas gajinya karena kedutaan bukan pemotong PPh Pasal 21", C: "Hanya Mr. Lukas Weber yang tidak termasuk subjek pajak; Mrs. Anna Kraus menjadi subjek pajak karena memperoleh penghasilan lain di Indonesia, dan gaji Tuan Bambang dipotong PPh Pasal 21 oleh kedutaan selaku pemberi kerja", D: "Mr. Lukas Weber, Mrs. Anna Kraus, dan Tuan Bambang tidak termasuk subjek pajak karena seluruh penghasilan yang dibayarkan oleh kantor perwakilan negara asing dikecualikan dari pengenaan pajak" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pengecualian subjek pajak bagi pejabat diplomatik dan orang yang diperbantukan bersifat kumulatif: bukan WNI, tidak memperoleh penghasilan lain di Indonesia, dan ada perlakuan timbal balik. Mrs. Anna gagal pada syarat kedua. Staf lokal WNI tetap subjek pajak dalam negeri, tetapi kantor perwakilan negara asing bukan pemotong PPh 21 sehingga ia menyetor sendiri.",
        jejakHitung: [],
        mengapaSalah: { B: "Mrs. Anna memperoleh penghasilan lain di Indonesia (honor mengajar) sehingga syarat pengecualian tidak terpenuhi", C: "Kantor perwakilan negara asing tidak termasuk pemotong PPh Pasal 21", D: "Yang dikecualikan adalah orang dan kantor perwakilannya sesuai syarat Pasal 3, bukan setiap penerima gaji dari kedutaan; WNI tetap subjek pajak" },
        jebakan: "Kata kunci kutipan adalah 'dengan syarat': satu syarat gugur, pengecualian gugur."
      },
      dasarHukum: [{ pasal: "Pasal 3 ayat (1) huruf a dan b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (pihak yang tidak termasuk pemotong PPh Pasal 21)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-077",
      topik: "A3.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "Tuan Kevin lulus kuliah pada 2025 dan baru mulai bekerja sebagai pegawai tetap PT Nusa Digital pada 1 Juli 2026; sebelumnya ia tidak memiliki penghasilan. Status PTKP pada 1 Januari 2026 TK/0 dan NIK-nya telah dipadankan. Setiap bulan Juli–Desember 2026 penghasilan brutonya (gaji, tunjangan tetap, serta premi JKK/JKM/BPJS Kesehatan yang ditanggung perusahaan) Rp14.000.000, tanpa THR maupun bonus. Dari gajinya dipotong iuran JHT bagian pegawai Rp240.000 per bulan; perusahaan juga menyetor iuran JHT bagian pemberi kerja Rp444.000 per bulan. PPh Pasal 21 Juli–November dipotong dengan TER kategori A 6% (Rp840.000 per bulan). Hasil penghitungan PPh Pasal 21 Masa Pajak Desember 2026 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurang potong Rp684.000", B: "Lebih potong Rp2.850.000", C: "Lebih potong Rp2.922.000", D: "Lebih potong Rp2.982.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Tuan Kevin sudah menjadi subjek pajak dalam negeri sejak awal tahun, sehingga penghasilan Juli–Desember tidak disetahunkan dan PTKP dipakai setahun penuh. Biaya jabatan 5% dibatasi Rp500.000 dikali jumlah bulan bekerja (6 bulan = Rp3.000.000). Karena PPh setahun lebih kecil daripada PPh TER Juli–November, terjadi lebih potong yang dikembalikan kepada pegawai.",
        jejakHitung: [
          ["Bruto Juli–Desember = 6 × Rp14.000.000", "Rp84.000.000"],
          ["Biaya jabatan: min(5% × Rp84 jt = Rp4,2 jt; 6 × Rp500.000)", "Rp3.000.000"],
          ["Iuran JHT pegawai = 6 × Rp240.000", "Rp1.440.000"],
          ["Neto", "Rp79.560.000"],
          ["PKP = Rp79.560.000 − PTKP TK/0 Rp54.000.000", "Rp25.560.000"],
          ["PPh setahun = 5% × Rp25.560.000", "Rp1.278.000"],
          ["PPh Juli–November = 5 × Rp840.000", "Rp4.200.000"],
          ["PPh Desember", "lebih potong Rp2.922.000"]
        ],
        mengapaSalah: {
          A: "Menyetahunkan penghasilan 6 bulan (PKP Rp105.120.000, PPh setahun Rp9.768.000 × 6/12); penyetahunan hanya untuk subjek pajak yang kewajiban subjektifnya mulai atau berakhir dalam tahun berjalan",
          B: "Lupa mengurangkan iuran JHT bagian pegawai Rp1.440.000 (PKP Rp27.000.000)",
          D: "Memakai 5% × bruto (Rp4.200.000) karena mengira batasnya Rp6.000.000 per tahun; batasnya Rp500.000 per bulan bekerja"
        },
        jebakan: "Iuran JHT bagian pemberi kerja dan premi yang sudah masuk bruto adalah data pengalih; pembeda angka ada pada batas biaya jabatan per bulan dan larangan menyetahunkan."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (biaya jabatan paling banyak Rp500.000 per bulan; menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01" }, { pasal: "PP 58/2023 Pasal 2 dan PMK 168/2023 (Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 7 ayat (1) dan (2) UU PPh (PTKP setahun penuh)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200,
      verifikasi: "✅"
    },
    {
      id: "A3-078", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Tuan Haris (status 1 Januari 2026: kawin, istri tidak bekerja, tiga anak; NIK terpadankan) adalah pegawai tetap PT Delta Konstruksi Mandiri. Rincian Masa Pajak Oktober 2026: gaji pokok Rp9.500.000; tunjangan tetap Rp1.500.000; uang lembur Rp800.000; bonus kinerja kuartal III Rp3.000.000; premi JKK 0,24% (Rp26.400), JKM 0,30% (Rp33.000), dan BPJS Kesehatan bagian pemberi kerja 4% (Rp440.000) yang ditanggung perusahaan; iuran Jaminan Pensiun bagian pemberi kerja Rp220.000 yang disetor perusahaan ke BPJS Ketenagakerjaan; iuran JHT bagian pegawai Rp220.000 dan zakat penghasilan Rp275.000 melalui perusahaan ke BAZNAS yang dipotong dari gajinya; serta penggantian tiket dan hotel perjalanan dinas sesuai bukti pengeluaran (at cost) Rp1.500.000. PPh Pasal 21 Masa Pajak Oktober 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp775.970", B: "Rp764.970", C: "Rp740.220", D: "Rp917.964" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "K/3 masuk kategori C. Bruto TER = gaji + tunjangan + lembur + bonus + premi JKK/JKM/BPJS Kesehatan bagian pemberi kerja = Rp15.299.400, berada pada lapisan C Rp14.150.000–15.550.000 dengan tarif 5%. Iuran pensiun bagian pemberi kerja bukan objek, penggantian biaya dinas at cost bukan penghasilan, dan iuran pegawai serta zakat baru dikurangkan pada Masa Pajak Terakhir.",
        jejakHitung: [["Status K/3 → kategori", "C"], ["Gaji + tunjangan + lembur + bonus", "Rp14.800.000"], ["+ JKK Rp26.400 + JKM Rp33.000 + BPJS Kesehatan Rp440.000", "Rp15.299.400"], ["JP pemberi kerja, penggantian dinas at cost", "bukan unsur bruto"], ["Lapisan C Rp14.150.000–15.550.000", "5%"], ["PPh 21 = 5% × Rp15.299.400", "Rp764.970"]],
        mengapaSalah: { A: "Memasukkan iuran JP bagian pemberi kerja Rp220.000 ke bruto (5% × Rp15.519.400)", C: "Mengurangkan iuran JHT pegawai dan zakat Rp495.000 sebelum TER (5% × Rp14.804.400)", D: "Memakai kategori B (6% pada lapisan B Rp14.950.000–16.400.000); K/3 adalah satu-satunya status kategori C" },
        jebakan: "Tiga angka berdekatan berasal dari bruto yang sama dengan satu unsur salah tambah atau salah kurang; kategori yang salah mengubah lapisan sekaligus."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 ayat (3) dan Lampiran C", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (unsur penghasilan bruto pegawai tetap)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-079",
      topik: "A3.2",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kutipan: "Pasal 21 ayat (5a) UU PPh: besarnya tarif yang diterapkan terhadap Wajib Pajak yang tidak memiliki NPWP lebih tinggi 20% daripada tarif yang diterapkan terhadap Wajib Pajak yang dapat menunjukkan NPWP. PER-16/PJ/2016 Pasal 20 ayat (4) (parafrase): bila pegawai tetap mendaftarkan diri untuk memperoleh NPWP dalam tahun kalender yang bersangkutan paling lama sebelum pemotongan PPh Pasal 21 Masa Pajak Desember, PPh Pasal 21 atas selisih tarif 20% lebih tinggi yang telah dipotong diperhitungkan dengan PPh Pasal 21 terutang bulan-bulan selanjutnya setelah memiliki NPWP.",
      stem: "Tuan Fikri (TK/0) adalah pegawai tetap CV Mekar Abadi dengan penghasilan bruto tetap Rp10.000.000 per bulan. Pada Januari–Maret 2026 ia belum memiliki NPWP dan NIK-nya belum dipadankan, sehingga PPh Pasal 21-nya dipotong 120% dari TER kategori A 2%. Pada 6 April 2026 NIK-nya berhasil dipadankan sebagai NPWP dan langsung diberitahukan kepada CV Mekar Abadi. Berdasarkan kutipan tersebut, PPh Pasal 21 yang dipotong dari Tuan Fikri untuk Masa Pajak April 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp240.000", B: "Rp200.000", C: "Rp160.000", D: "Rp80.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-hitung" },
      pembahasan: {
        inti: "Mulai April Tuan Fikri ber-NPWP sehingga tarif kembali normal (2% × Rp10 juta = Rp200.000). Tambahan 20% yang telanjur dipotong Januari–Maret (3 × Rp40.000 = Rp120.000) diperhitungkan dengan PPh 21 bulan berikutnya, sehingga yang dipotong pada April Rp80.000.",
        jejakHitung: [
          ["PPh 21 normal = 2% × Rp10.000.000", "Rp200.000"],
          ["Januari–Maret dipotong 120%", "Rp240.000 per bulan"],
          ["Tambahan 20% = 3 × Rp40.000", "Rp120.000"],
          ["PPh 21 April = Rp200.000 − Rp120.000", "Rp80.000"]
        ],
        mengapaSalah: {
          A: "Tetap memakai 120% padahal NPWP sudah dimiliki sejak 6 April",
          B: "Selisih tidak perlu menunggu Masa Pajak Terakhir; diperhitungkan pada bulan-bulan setelah memiliki NPWP",
          C: "Hanya memperhitungkan tambahan satu bulan (Rp40.000), padahal kelebihan terjadi tiga bulan"
        },
        jebakan: "Kenaikan 20% bagi penerima tanpa NPWP bukan sanksi permanen; ia dikoreksi setelah NPWP dimiliki dalam tahun yang sama."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PER-16/PJ/2016 Pasal 20 ayat (2) dan ayat (4) (status setelah PMK 168/2023 belum dipastikan)", berlakuSejak: "2016-09-29" }, { pasal: "PMK 168/2023 Pasal 15 ayat (1) (TER bulanan; Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 130,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke naskah: tarif 20% lebih tinggi ada di Pasal 21 ayat (5a) UU PPh. PMK 168/2023 TIDAK memuat ketentuan 120% maupun mekanisme memperhitungkan selisih 20% setelah ber-NPWP; mekanisme itu hanya ada di PER-16/PJ/2016 Pasal 20 ayat (4), pedoman pelaksana PMK 252/PMK.03/2008 yang dicabut PMK 168/2023. Belum pasti: apakah PER-16/PJ/2016 Pasal 20 masih berlaku, dan apakah NIK belum padan diperlakukan sebagai tanpa NPWP."
    },
    {
      id: "A3-080", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A3-06",
      stem: "Data untuk soal ini dan tiga soal berikutnya (V-A3-06): PT Puri Bahari Resort (hotel di Badung, Bali) bergerak di sektor pariwisata dengan KLU yang tercantum dalam lampiran PMK 105/2025. Pada Masa Pajak Desember 2026 hotel membayar: (1) upah tiga pekerja harian lepas bagian banquet yang dibayar setiap hari dan NIK-nya telah dipadankan — Wayan Rp450.000 per hari selama 10 hari, Made Rp480.000 per hari selama 12 hari, dan Ketut Rp650.000 per hari selama 8 hari; (2) honorarium pembawa acara malam pergantian tahun, Tuan Gilang (ber-NPWP), Rp70.000.000; (3) honorarium penyanyi Ny. Laras, yang NIK-nya belum dipadankan sehingga diperlakukan tidak ber-NPWP, Rp40.000.000; dan (4) sewa sound system dari CV Gema Suara (ber-NPWP) Rp25.000.000. Jumlah PPh Pasal 21 terutang atas upah ketiga pekerja harian lepas, sebelum memperhitungkan insentif apa pun, adalah ...",
      kataKualifikasi: ["sebelum memperhitungkan insentif"],
      opsi: { A: "Rp54.800", B: "Rp77.300", C: "Rp98.000", D: "Rp28.800" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "angka-usang", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pegawai tidak tetap yang dibayar harian memakai TER harian: 0% untuk bruto sampai dengan Rp450.000 per hari dan 0,5% × seluruh bruto harian untuk lebih dari Rp450.000 sampai dengan Rp2.500.000.",
        jejakHitung: [["Wayan: Rp450.000 per hari (sampai dengan Rp450.000)", "0% → Rp0"], ["Made: 0,5% × Rp480.000 = Rp2.400 × 12 hari", "Rp28.800"], ["Ketut: 0,5% × Rp650.000 = Rp3.250 × 8 hari", "Rp26.000"], ["Total PPh 21 terutang", "Rp54.800"]],
        mengapaSalah: { B: "Mengenakan 0,5% juga pada upah Wayan Rp450.000; batas 0% berbunyi 'sampai dengan' Rp450.000", C: "Memakai metode lama: PTKP harian Rp450.000 lalu 5% atas selisihnya (Rp18.000 + Rp80.000)", D: "Menjumlahkan upah sebulan lalu memakai TER bulanan seolah kategori A (hanya Made yang terkena 0,5%); upah harian memakai TER harian" },
        jebakan: "Angka Rp450.000 adalah batas atas lapisan 0%, bukan pengurang."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan Lampiran D (TER harian)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023 (pegawai tidak tetap)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-081", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, kasusId: "V-A3-06",
      stem: "V-A3-06 — PT Puri Bahari Resort (sektor pariwisata dalam lampiran PMK 105/2025) ingin memanfaatkan PPh Pasal 21 ditanggung pemerintah (DTP) Masa Pajak Desember 2026 atas pekerja harian lepasnya. PPh 21 terutang: Wayan (Rp450.000 per hari) nihil, Made (Rp480.000 per hari) Rp28.800, dan Ketut (Rp650.000 per hari) Rp26.000; ketiganya ber-NIK terpadankan dan tidak menerima insentif lain. Pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPh 21 Made Rp28.800 ditanggung pemerintah dan dibayarkan tunai kepadanya, sedangkan PPh 21 Ketut Rp26.000 tetap dipotong dan disetor; bukti potong hanya dibuat untuk Ketut karena PPh 21 Made tidak disetor", B: "PPh 21 Made Rp28.800 dan Ketut Rp26.000 sama-sama ditanggung pemerintah dan dibayarkan tunai karena keduanya pegawai tidak tetap pada sektor pariwisata; bukti potong tetap dibuat untuk keduanya", C: "PPh 21 Made Rp28.800 ditanggung pemerintah dan dikreditkan sendiri oleh Made dalam SPT Tahunan, sedangkan PPh 21 Ketut Rp26.000 tetap dipotong dan disetor; bukti potong tetap dibuat untuk keduanya", D: "PPh 21 Made Rp28.800 ditanggung pemerintah dan dibayarkan tunai kepadanya, sedangkan PPh 21 Ketut Rp26.000 tetap dipotong dan disetor karena rata-rata upah hariannya melebihi Rp500.000; bukti potong tetap dibuat untuk keduanya" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PMK 105/2025 memberi PPh 21 DTP Masa Pajak 2026 bagi pegawai tidak tetap di lima sektor padat karya yang rata-rata upah hariannya tidak lebih dari Rp500.000. Made memenuhi syarat, Ketut tidak. PPh DTP dibayarkan tunai kepada pegawai, dan pemberi kerja tetap membuat bukti potong serta melaporkannya dalam SPT Masa PPh 21/26.",
        jejakHitung: [["Wayan: Rp450.000 per hari (lapisan TER 0%)", "PPh 21 nihil, tidak ada yang ditanggung"], ["Made: 0,5% × Rp480.000 × 12 hari", "Rp28.800"], ["Made: rata-rata Rp480.000 ≤ Rp500.000", "DTP, dibayarkan tunai"], ["Ketut: 0,5% × Rp650.000 × 8 hari", "Rp26.000"], ["Ketut: rata-rata Rp650.000 > Rp500.000", "tidak DTP; dipotong dan disetor"]],
        mengapaSalah: { A: "Bukti potong tetap wajib dibuat dan dilaporkan untuk PPh 21 DTP", B: "Upah Ketut Rp650.000 per hari melebihi batas Rp500.000 sehingga tidak memperoleh DTP", C: "PPh DTP tidak dikreditkan di SPT Tahunan pegawai; pemberi kerja membayarkannya tunai saat pembayaran upah" },
        jebakan: "Opsi hanya berbeda pada siapa yang memenuhi batas Rp500.000 per hari, cara DTP diberikan, dan kewajiban bukti potong."
      },
      dasarHukum: [{ pasal: "PMK 105/2025 (PPh 21 DTP sektor tertentu Masa Pajak 2026)", berlakuSejak: "2026-01-01" }, { pasal: "PER-11/PJ/2025 (BP21 dan SPT Masa PPh 21/26)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-082", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A3-06",
      stem: "V-A3-06 — PT Puri Bahari Resort membayar honorarium pembawa acara malam pergantian tahun kepada Tuan Gilang (ber-NPWP) Rp70.000.000 dan honorarium penyanyi kepada Ny. Laras (NIK belum dipadankan, diperlakukan tidak ber-NPWP) Rp40.000.000 pada Desember 2026. Keduanya orang pribadi dalam negeri yang bukan pegawai hotel dan masing-masing menerima satu kali pembayaran. Jumlah PPh Pasal 21 yang dipotong atas kedua honorarium tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.750.000", B: "Rp3.000.000", C: "Rp2.950.000", D: "Rp3.750.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembawa acara dan penyanyi termasuk bukan pegawai: PPh 21 = tarif Pasal 17 × 50% × bruto. Penerima tanpa NPWP dipotong 120% dari PPh seharusnya.",
        jejakHitung: [["Tuan Gilang: 50% × Rp70.000.000 = Rp35.000.000 × 5%", "Rp1.750.000"], ["Ny. Laras: 50% × Rp40.000.000 = Rp20.000.000 × 5%", "Rp1.000.000"], ["Tanpa NPWP: 120% × Rp1.000.000", "Rp1.200.000"], ["Total PPh 21", "Rp2.950.000"]],
        mengapaSalah: { A: "Lupa tarif 20% lebih tinggi bagi Ny. Laras yang diperlakukan tidak ber-NPWP", B: "Memotong PPh 23 2% (dan 4% tanpa NPWP); jasa orang pribadi bukan pegawai adalah objek PPh 21", D: "Menaikkan 100% seperti PPh 22/23; kenaikan PPh 21 tanpa NPWP hanya 20%" },
        jebakan: "Sewa sound system dari CV adalah PPh 23 dan tidak ditanya; jangan ikut dijumlahkan."
      },
      dasarHukum: [{ pasal: "PP 58/2023 Pasal 2 dan PMK 168/2023 (bukan pegawai, DPP 50%)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-083",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 1,
      kasusId: "V-A3-06",
      kutipan: "PMK 81/2024 Pasal 94 ayat (2) (parafrase): PPh Pasal 4 ayat (2), Pasal 15, Pasal 21, Pasal 22, Pasal 23, dan Pasal 26 yang dipotong atau dipungut wajib disetor paling lambat tanggal 15 bulan berikutnya setelah Masa Pajak berakhir. Pasal 3 ayat (3) huruf a UU KUP: SPT Masa disampaikan paling lama 20 hari setelah akhir Masa Pajak.",
      stem: "V-A3-06 — Atas pembayaran Masa Pajak Desember 2026 oleh PT Puri Bahari Resort (upah pekerja harian lepas termasuk PPh 21 DTP Made, honorarium Tuan Gilang dan Ny. Laras, serta sewa sound system kepada CV Gema Suara), staf pajak menyiapkan bukti potong di Coretax. Berdasarkan kutipan tersebut, pilihan yang seluruhnya tepat adalah ...",
      kataKualifikasi: ["seluruhnya tepat"],
      opsi: { A: "BP21 atas upah pekerja harian serta honorarium Tuan Gilang dan Ny. Laras dalam SPT Masa PPh 21/26; BPPU atas sewa sound system dalam SPT Masa PPh Unifikasi; setor paling lambat Jumat, 15 Januari 2027 dan lapor paling lambat Rabu, 20 Januari 2027", B: "BPMP atas upah pekerja harian serta BP21 atas honorarium Tuan Gilang dan Ny. Laras dalam SPT Masa PPh 21/26; BPPU atas sewa sound system dalam SPT Masa PPh Unifikasi; setor paling lambat Jumat, 15 Januari 2027 dan lapor paling lambat Rabu, 20 Januari 2027", C: "BP21 atas upah pekerja harian serta honorarium Tuan Gilang dan Ny. Laras dalam SPT Masa PPh 21/26; BPPU atas sewa sound system dalam SPT Masa PPh Unifikasi; setor paling lambat 10 Januari 2027 dan lapor paling lambat Rabu, 20 Januari 2027", D: "BP21 atas upah pekerja harian serta honorarium Tuan Gilang dan Ny. Laras dalam SPT Masa PPh 21/26; BPPU atas sewa sound system dalam SPT Masa PPh Unifikasi; setor paling lambat Jumat, 15 Januari 2027 dan lapor paling lambat Minggu, 31 Januari 2027" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "angka-usang", D: "salah-baca" },
      pembahasan: {
        inti: "Pekerja harian lepas, pembawa acara, dan penyanyi dibuatkan BP21 dalam SPT Masa PPh 21/26 (PPh DTP tetap dibuatkan bukti potong); sewa harta kepada badan dalam negeri dibuatkan BPPU dalam SPT Masa PPh Unifikasi. Masa Desember 2026: setor tanggal 15 Januari 2027 (Jumat), lapor 20 hari setelah masa berakhir, yaitu 20 Januari 2027 (Rabu).",
        jejakHitung: [
          ["Bukti potong pekerja harian, MC, penyanyi", "BP21 (SPT Masa PPh 21/26)"],
          ["Bukti potong sewa sound system (PPh 23)", "BPPU (SPT Masa Unifikasi)"],
          ["Tenggat setor", "Jumat, 15 Januari 2027"],
          ["Tenggat lapor", "Rabu, 20 Januari 2027"]
        ],
        mengapaSalah: {
          B: "Upah pekerja harian lepas (pegawai tidak tetap dalam negeri) dibuatkan BP21 (PER-11/PJ/2025 Ps. 7 ayat (1) huruf c); BPMP tidak termasuk jenis bukti potong PPh 21/26 dalam Ps. 6 ayat (1)",
          C: "Tanggal 10 adalah tenggat setor lama sebelum PMK 81/2024",
          D: "Akhir bulan berikutnya adalah tenggat SPT Masa PPN, bukan SPT Masa PPh"
        },
        jebakan: "Opsi hanya berbeda satu frasa: kode bukti potong atau salah satu tanggal."
      },
      dasarHukum: [{ pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 171", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-11/PJ/2025 Pasal 6 ayat (1) dan Pasal 7 ayat (1) huruf c (BP21); BPPU untuk PPh 23", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 110,
      verifikasi: "✅"
    },
    {
      id: "A3-084", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Arunika Media (rumah produksi, PKP) pada Masa Pajak Juni 2026 membayar: (1) jasa hukum Rp100.000.000 kepada Kantor Hukum Sutedja & Rekan, persekutuan advokat yang terdaftar sebagai Wajib Pajak badan dan ber-NPWP; (2) honorarium Rp90.000.000 kepada Tuan Bonar, advokat orang pribadi ber-NPWP yang bukan pegawai; (3) honorarium penulisan naskah Rp24.000.000 kepada Ny. Citra, penulis lepas yang belum memiliki NPWP dan NIK-nya belum dipadankan; (4) honorarium Rp50.000.000 kepada Tuan Daniel Lim, aktor berkewarganegaraan Malaysia yang bertempat tinggal di Kuala Lumpur dan berada di Indonesia 20 hari untuk syuting; dan (5) gaji bulanan pegawai tetap Rp18.500.000 yang PPh 21-nya telah dihitung dengan TER. Seluruh honorarium dibayar sekali pada bulan tersebut. Jumlah PPh Pasal 21 yang dipotong atas pembayaran (1) sampai dengan (4) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.850.000", B: "Rp2.970.000", C: "Rp3.450.000", D: "Rp4.220.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hanya orang pribadi dalam negeri bukan pegawai yang dipotong PPh 21 (Pasal 17 × 50% × bruto): Tuan Bonar dan Ny. Citra (120% karena tanpa NPWP). Persekutuan advokat sebagai badan dipotong PPh 23, sedangkan aktor penduduk Malaysia adalah WPLN yang dipotong PPh 26, bukan PPh 21.",
        jejakHitung: [["(1) Kantor hukum (badan): PPh 23 2% = Rp2.000.000", "bukan PPh 21"], ["(2) Tuan Bonar: 5% × (50% × Rp90.000.000)", "Rp2.250.000"], ["(3) Ny. Citra: 5% × (50% × Rp24.000.000) × 120%", "Rp720.000"], ["(4) Aktor WPLN: PPh 26", "bukan PPh 21"], ["Total PPh 21 (1)–(4)", "Rp2.970.000"]],
        mengapaSalah: { A: "Lupa tarif 120% bagi Ny. Citra (Rp600.000)", C: "Menaikkan PPh 21 Ny. Citra 100% (Rp1.200.000) seperti PPh 22/23", D: "Memotong PPh 21 bukan pegawai atas aktor Malaysia (tambahan Rp1.250.000); imbalan jasa kepada orang pribadi WPLN adalah objek PPh 26" },
        jebakan: "Tentukan dulu status penerima (badan atau orang pribadi; dalam negeri atau luar negeri) sebelum memilih pasal."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (bukan pegawai; penerima tanpa NPWP)", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 23 ayat (1) huruf c dan Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-085", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "Ny. Sekar, pegawai tetap PT Andalas Tekstil sejak 2008 (K/2, NIK terpadankan), di-PHK efektif 30 September 2026. Pada tanggal itu PT Andalas Tekstil membayar sekaligus: gaji September Rp20.000.000; uang pesangon Rp180.000.000; uang penghargaan masa kerja Rp60.000.000; dan uang penggantian hak atas cuti tahunan yang belum diambil Rp15.000.000. Pada Oktober 2026 Ny. Sekar juga mencairkan seluruh saldo JHT Rp120.000.000 dari BPJS Ketenagakerjaan. Sebelumnya ia tidak pernah menerima pembayaran pesangon. PPh Pasal 21 final yang wajib dipotong PT Andalas Tekstil atas uang pesangon, uang penghargaan masa kerja, dan uang penggantian hak tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp23.500.000", B: "Rp28.250.000", C: "Rp43.750.000", D: "Rp25.750.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Uang pesangon menurut PP 68/2009 termasuk uang penghargaan masa kerja dan uang penggantian hak, sehingga dasar pemotongan Rp255.000.000 dikenai tarif berlapis 0%/5%/15%. JHT dari BPJS Ketenagakerjaan dihitung terpisah dengan lapisannya sendiri dan dipotong BPJS; gaji September diperhitungkan pada Masa Pajak Terakhir.",
        jejakHitung: [["Dasar = Rp180 jt + Rp60 jt + Rp15 jt", "Rp255.000.000"], ["0% × Rp50.000.000", "Rp0"], ["5% × Rp50.000.000", "Rp2.500.000"], ["15% × Rp155.000.000", "Rp23.250.000"], ["PPh 21 final pesangon", "Rp25.750.000"]],
        mengapaSalah: { A: "Mengeluarkan uang penggantian hak dari dasar (hanya Rp240.000.000)", B: "Mengenakan 5% sejak rupiah pertama (5% × Rp100 juta + 15% × Rp155 juta); lapisan Rp50 juta pertama bertarif 0%", C: "Menggabungkan JHT Rp120.000.000 ke pesangon (dasar Rp375.000.000); JHT punya lapisan dan pemotong sendiri" },
        jebakan: "Gaji September dan JHT disertakan untuk mengecoh; hanya komponen pesangon yang dihitung dengan lapisan 0/5/15/25%."
      },
      dasarHukum: [{ pasal: "PP 68/2009 (Pasal 1: pengertian uang pesangon; lapisan tarif 0/5/15/25%)", berlakuSejak: "2009-11-16" }, { pasal: "PMK 16/PMK.03/2010" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-086", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Kayu Indah Furnitur (industri furnitur dengan KLU yang tercantum dalam lampiran PMK 105/2025) pada Masa Pajak Juni 2026 membayar gaji tetap bulanan kepada empat pegawai tetap (besaran sama sejak Januari 2026; tidak ada THR, bonus, atau lembur pada masa ini): Ani (TK/0, NIK terpadankan) Rp10.000.000; Budi (K/1, NIK terpadankan) Rp10.400.000; Cici (K/0, belum memiliki NPWP dan NIK-nya belum dipadankan) Rp8.000.000; dan Edo (TK/0, NIK terpadankan) Rp9.000.000. Pada bulan yang sama perusahaan menyetor PPh Pasal 25 Rp12.000.000 dan PPN Rp30.000.000. PPh Pasal 21 Masa Pajak Juni 2026 yang wajib disetor perusahaan, tidak termasuk PPh 21 DTP, adalah ...",
      kataKualifikasi: ["tidak termasuk"],
      opsi: { A: "Rp156.000", B: "Rp500.000", C: "Rp300.000", D: "Rp657.500" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "PPh 21 DTP PMK 105/2025 berlaku bagi pegawai tetap di sektor tertentu dengan penghasilan bruto tetap dan teratur tidak lebih dari Rp10.000.000 per bulan dan NIK/NPWP terpadankan. Ani (tepat Rp10 juta) dan Edo memperoleh DTP; Budi melebihi batas; Cici gugur karena tidak ber-NPWP. Yang disetor: PPh 21 Budi dan Cici.",
        jejakHitung: [["Ani: TER A 2% × Rp10.000.000 (DTP)", "Rp200.000"], ["Edo: TER A 1,75% × Rp9.000.000 (DTP)", "Rp157.500"], ["Budi: TER B 1,5% × Rp10.400.000 (> Rp10 jt, disetor)", "Rp156.000"], ["Cici: TER A 1,5% × Rp8.000.000 × 120% (tanpa NPWP, disetor)", "Rp144.000"], ["PPh 21 disetor = Rp156.000 + Rp144.000", "Rp300.000"]],
        mengapaSalah: { A: "Menganggap Cici memperoleh DTP; syarat DTP mencakup NPWP/NIK terpadankan", B: "Menganggap Ani tidak memenuhi syarat; batasnya 'tidak lebih dari' Rp10.000.000 sehingga tepat Rp10 juta masih memenuhi", D: "Mengabaikan fasilitas DTP sama sekali dan menyetor PPh 21 keempat pegawai" },
        jebakan: "Batas DTP Rp10 juta bersifat inklusif, sedangkan syarat NIK/NPWP menggugurkan DTP meski upahnya kecil."
      },
      dasarHukum: [{ pasal: "PMK 105/2025 (PPh 21 DTP pegawai tetap sektor tertentu Masa Pajak 2026)", berlakuSejak: "2026-01-01" }, { pasal: "PP 58/2023 Lampiran A dan B; Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 190, verifikasi: "✅"
    },
    {
      id: "A3-087",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Sari Gandum Nusantara (importir pemilik API, ber-NPWP) pada Agustus 2026 mengimpor: (1) gandum dengan nilai CIF USD300.000 dan bea masuk 0%; serta (2) satu unit mesin penggiling dengan nilai CIF USD50.000 dan bea masuk 5%. Kurs yang berlaku Rp16.000 per USD dan tidak ada pungutan pabean lain. Setelah barang keluar dari kawasan pabean, perusahaan membayar biaya angkut ke pabrik Rp25.000.000 dan biaya bongkar muat di gudang Rp10.000.000. Jumlah PPh Pasal 22 impor atas kedua impor tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp45.000.000", B: "Rp44.000.000", C: "Rp141.000.000", D: "Rp45.875.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Impor gandum oleh importir ber-API dikenai tarif khusus 0,5%, sedangkan impor umum ber-API 2,5%. Dasarnya nilai impor = CIF + bea masuk + pungutan pabean lain; biaya setelah barang keluar dari kawasan pabean tidak termasuk.",
        jejakHitung: [
          ["(1) Gandum: CIF USD300.000 × Rp16.000", "Rp4.800.000.000"],
          ["PPh 22 gandum = 0,5% × Rp4.800.000.000", "Rp24.000.000"],
          ["(2) Mesin: CIF Rp800.000.000 + bea masuk 5% Rp40.000.000", "Rp840.000.000"],
          ["PPh 22 mesin = 2,5% × Rp840.000.000", "Rp21.000.000"],
          ["Total PPh 22 impor", "Rp45.000.000"]
        ],
        mengapaSalah: {
          B: "Menghitung PPh 22 mesin dari CIF saja (2,5% × Rp800 juta) tanpa bea masuk",
          C: "Memakai 2,5% untuk gandum; kedelai, gandum, dan tepung terigu yang diimpor importir ber-API bertarif 0,5%",
          D: "Menambahkan biaya angkut dan bongkar muat setelah pabean Rp35 juta ke nilai impor mesin"
        },
        jebakan: "Nilai impor berhenti di pintu pabean: CIF + bea masuk + pungutan pabean."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 51/2025 dan lampirannya (tarif impor 2,5% ber-API; 0,5% untuk kedelai, gandum, dan tepung terigu ber-API); berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-088",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "PT Kopi Nusantara Ekspor (eksportir yang ditunjuk sebagai pemungut PPh Pasal 22 atas pembelian bahan untuk keperluan ekspor) pada Masa Pajak September 2026 membeli biji kopi (harga tidak termasuk PPN): (1) Rp400.000.000 dari CV Tani Makmur, pedagang pengumpul ber-NPWP; (2) Rp120.000.000 dari Pak Slamet, pedagang pengumpul orang pribadi yang tidak memiliki NPWP; dan (3) Rp200.000.000 langsung dari Pak Joyo, petani ber-NPWP yang menjual hasil kebunnya sendiri. Perusahaan juga membayar jasa angkutan truk dari gudang pedagang ke pelabuhan Rp30.000.000 kepada PT Truk Andal (ber-NPWP). Jumlah PPh Pasal 22 yang dipungut PT Kopi Nusantara Ekspor pada masa tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.600.000", B: "Rp1.800.000", C: "Rp2.100.000", D: "Rp2.700.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Badan usaha industri atau eksportir yang membeli hasil kehutanan, perkebunan, pertanian, peternakan, dan perikanan yang belum melalui proses industri manufaktur memungut PPh 22 0,25% × harga pembelian tidak termasuk PPN, siapa pun penjualnya (pedagang pengumpul maupun petani). Penjual tanpa NPWP dipungut 100% lebih tinggi (0,5%). Pengecualian hanya untuk pembelian paling banyak Rp20.000.000 dalam satu Masa Pajak, dan jasa angkutan adalah objek PPh 23, bukan PPh 22.",
        jejakHitung: [
          ["(1) CV Tani Makmur: 0,25% × Rp400.000.000", "Rp1.000.000"],
          ["(2) Pak Slamet tanpa NPWP: 0,5% × Rp120.000.000", "Rp600.000"],
          ["(3) Pak Joyo (petani, ber-NPWP): 0,25% × Rp200.000.000", "Rp500.000"],
          ["Pembelian masa ini Rp720.000.000 > Rp20.000.000", "tidak dikecualikan"],
          ["Angkutan truk (PPh 23 Rp600.000)", "bukan PPh 22"],
          ["Total PPh 22", "Rp2.100.000"]
        ],
        mengapaSalah: {
          A: "Menganggap pembelian langsung dari petani tidak dipungut; PMK 51/2025 tidak membatasi objek pada pembelian dari pedagang pengumpul",
          B: "Lupa tarif 100% lebih tinggi bagi Pak Slamet yang tidak ber-NPWP (0,25% × Rp720.000.000)",
          D: "Menjumlahkan PPh 23 atas jasa angkutan (Rp600.000) ke dalam PPh 22"
        },
        jebakan: "Pemicu pungutan adalah jenis barang (hasil bumi yang belum diolah) dan pembelinya (industri atau eksportir), bukan status penjual sebagai pedagang pengumpul."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf g, Pasal 3 ayat (1) huruf f, dan Pasal 4 ayat (1) huruf e angka 6 (pembelian bahan untuk keperluan industri atau ekspor; PMK 51/2025 berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 22 ayat (3) UU PPh (tarif 100% lebih tinggi tanpa NPWP)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-089",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "PT Andalas Energi Niaga (badan usaha swasta bukan Pertamina yang menjadi importir BBM dan pelumas serta ditunjuk sebagai pemungut PPh Pasal 22) pada Masa Pajak Oktober 2026 menjual (harga jual tidak termasuk PPN, semua pembeli ber-NPWP): (1) BBM Rp600.000.000 kepada PT Prima Fuel, pengelola SPBU bukan Pertamina yang menjual kembali BBM tersebut sebagai penyalur; (2) solar Rp900.000.000 kepada PT Kapal Nusantara untuk bahan bakar kapalnya sendiri; dan (3) pelumas Rp150.000.000 kepada CV Oli Sejahtera, agen pelumas. Pada bulan itu PT Andalas Energi Niaga juga menyetor PPh Pasal 25 Rp750.000.000. Jumlah PPh Pasal 22 atas ketiga penjualan tersebut yang bersifat final bagi pembelinya adalah ...",
      kataKualifikasi: ["bersifat final bagi pembelinya"],
      opsi: { A: "Rp1.950.000", B: "Rp2.700.000", C: "Rp1.800.000", D: "Rp2.250.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "final-nonfinal", D: "angka-usang" },
      pembahasan: {
        inti: "Tarif BBM 0,25% hanya untuk penjualan kepada SPBU yang menjual BBM yang dibeli dari PT Pertamina (Persero) atau anak usahanya; penjualan kepada SPBU yang menjual BBM yang dibeli selain dari Pertamina/anak usahanya dan kepada pembeli selain SPBU 0,3%, pelumas 0,3%. Menurut PMK 51/2025 Pasal 10, PPh 22 atas BBM dan BBG kepada penyalur/agen bersifat final, sedangkan PPh 22 atas pelumas selalu tidak final, termasuk bila dijual kepada agen. Bagi pemakai akhir seperti perusahaan kapal, PPh 22 BBM menjadi kredit pajak.",
        jejakHitung: [
          ["(1) BBM kepada SPBU yang menjual BBM dari importir bukan Pertamina (penyalur): 0,3% × Rp600.000.000", "Rp1.800.000 (final)"],
          ["(2) Solar untuk pemakai akhir: 0,3% × Rp900.000.000", "Rp2.700.000 (kredit pajak)"],
          ["(3) Pelumas kepada agen: 0,3% × Rp150.000.000", "Rp450.000 (tidak final)"],
          ["PPh 22 yang bersifat final", "Rp1.800.000"]
        ],
        mengapaSalah: {
          A: "Memakai tarif 0,25% padahal BBM yang dijual PT Prima Fuel tidak dibeli dari Pertamina/anak usahanya, dan menganggap pelumas final (Rp1.500.000 + Rp450.000)",
          B: "Membalik sifat: menganggap pungutan atas solar untuk pemakai akhir yang final",
          D: "Menganggap PPh 22 pelumas kepada agen final seperti BBM; menurut PMK 51/2025 Pasal 10 ayat (3) pemungutan atas pelumas bersifat tidak final (Rp1.800.000 + Rp450.000)"
        },
        jebakan: "Tiga lapis jebakan: tarif BBM ditentukan asal BBM yang dijual SPBU pembeli (0,25% bila dari Pertamina/anak usahanya, 0,3% bila bukan), sifat final BBM ditentukan peran pembeli (penyalur/agen atau pemakai akhir), dan pelumas tidak pernah final."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 Pasal 3 ayat (1) huruf c (tarif PPh 22 BBM, BBG, dan pelumas) dan Pasal 10 ayat (2) dan ayat (3) (sifat final bagi penyalur/agen BBM dan BBG, pelumas tidak final)", berlakuSejak: "2025-08-01" }, { pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-090", topik: "A3.5", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 2, kasusId: "V-A3-07",
      kutipan: "PMK 253/PMK.03/2008 s.t.d.t.d. PMK 92/PMK.03/2019 (parafrase setia): Wajib Pajak badan yang melakukan penjualan barang yang tergolong sangat mewah memungut PPh Pasal 22 sebesar 1% dari harga jual tidak termasuk PPN dan PPnBM atas rumah beserta tanahnya dengan harga jual atau harga pengalihan lebih dari Rp30.000.000.000 atau luas bangunan lebih dari 400 m², serta atas apartemen, kondominium, dan sejenisnya dengan harga jual atau pengalihan lebih dari Rp30.000.000.000 atau luas bangunan lebih dari 150 m².",
      stem: "Data untuk soal ini dan soal berikutnya (V-A3-07): PT Graha Elite Properti, pengembang yang usaha pokoknya menjual tanah dan bangunan, pada Masa Pajak September 2026 menandatangani akta jual beli (semua harga tidak termasuk PPN): (1) rumah beserta tanah kepada Tuan Hartono Rp28.000.000.000 dengan luas bangunan 420 m²; (2) satu unit apartemen kepada Ny. Lina Rp6.000.000.000 dengan luas bangunan 140 m²; (3) satu unit rumah sederhana yang memenuhi kriteria pembebasan PPN kepada Tuan Agus Rp160.000.000; dan (4) sebidang tanah kepada Pemerintah Kabupaten Sentosa untuk pelebaran jalan umum Rp2.000.000.000. Berdasarkan kutipan tersebut, PPh Pasal 22 yang wajib dipungut PT Graha Elite Properti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp340.000.000", C: "Rp280.000.000", D: "Rp1.400.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kriteria harga dan luas bersifat alternatif ('atau'). Rumah Tuan Hartono di bawah Rp30 miliar tetapi luas bangunannya 420 m² (> 400 m²), sehingga tergolong sangat mewah dan dipungut 1%. Apartemen Ny. Lina tidak melewati Rp30 miliar maupun 150 m².",
        jejakHitung: [["(1) Rumah: luas 420 m² > 400 m²", "sangat mewah"], ["PPh 22 = 1% × Rp28.000.000.000", "Rp280.000.000"], ["(2) Apartemen: Rp6 miliar dan 140 m²", "tidak memenuhi kriteria"], ["(3) dan (4)", "bukan barang sangat mewah"], ["Total PPh 22", "Rp280.000.000"]],
        mengapaSalah: { A: "Membaca kriteria sebagai kumulatif (harga dan luas); cukup salah satu terlampaui", B: "Ikut memungut 1% atas apartemen 140 m²; batas apartemen lebih dari 150 m²", D: "Memakai tarif 5% yang berlaku untuk kendaraan, pesawat, dan kapal pesiar; hunian sangat mewah 1%" },
        jebakan: "Batas luas berbeda: rumah 400 m², apartemen 150 m²; keduanya dihubungkan 'atau' dengan batas harga Rp30 miliar."
      },
      dasarHukum: [{ pasal: "PMK 253/PMK.03/2008 s.t.d.t.d. PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19" }, { pasal: "Pasal 22 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-091", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A3-07",
      stem: "V-A3-07 — Atas empat penjualan PT Graha Elite Properti (pengembang) pada September 2026 — rumah dan tanah kepada Tuan Hartono Rp28.000.000.000; apartemen kepada Ny. Lina Rp6.000.000.000; rumah sederhana yang memenuhi kriteria kepada Tuan Agus Rp160.000.000; dan tanah kepada Pemerintah Kabupaten Sentosa untuk pelebaran jalan umum Rp2.000.000.000 — jumlah PPh final Pasal 4 ayat (2) atas pengalihan hak atas tanah dan/atau bangunan yang terutang bagi PT Graha Elite Properti adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp851.600.000", B: "Rp854.000.000", C: "Rp901.600.000", D: "Rp1.131.600.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "PP 34/2016: tarif umum 2,5% × jumlah bruto nilai pengalihan; 1% untuk rumah sederhana atau rumah susun sederhana oleh Wajib Pajak yang usaha pokoknya pengalihan hak; 0% untuk pengalihan kepada pemerintah untuk kepentingan umum. PPh 22 sangat mewah dipungut dari pembeli dan tidak menambah PPh final penjual.",
        jejakHitung: [["(1) 2,5% × Rp28.000.000.000", "Rp700.000.000"], ["(2) 2,5% × Rp6.000.000.000", "Rp150.000.000"], ["(3) Rumah sederhana: 1% × Rp160.000.000", "Rp1.600.000"], ["(4) Kepada pemerintah untuk kepentingan umum: 0%", "Rp0"], ["Total PPh final", "Rp851.600.000"]],
        mengapaSalah: { B: "Memakai 2,5% untuk rumah sederhana (Rp4.000.000); pengembang rumah sederhana bertarif 1%", C: "Mengenakan 2,5% atas tanah untuk pelebaran jalan umum (Rp50.000.000); tarifnya 0%", D: "Menambahkan PPh 22 sangat mewah Rp280.000.000 yang merupakan pungutan atas pembeli, bukan PPh final penjual" },
        jebakan: "Satu vignette memuat dua pajak berbeda: PPh 22 dipungut dari pembeli, PPh 4 ayat (2) ditanggung penjual."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 2 ayat (1)", berlakuSejak: "2016-09-07" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170, verifikasi: "✅"
    },
    {
      id: "A3-092", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Sinar Retail Mandiri menerima tagihan jasa perawatan sistem pendingin ruangan Masa Pajak Juli 2026 dari CV Dingin Jaya (PKP, ber-NPWP, bukan penyedia jasa konstruksi). Jumlah yang tercantum dalam invoice Rp66.600.000 sudah termasuk PPN yang dihitung dengan DPP nilai lain 11/12 dan tarif 12%; tidak ada penggantian material maupun reimbursement. PPh Pasal 23 yang wajib dipotong PT Sinar Retail Mandiri adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.332.000", B: "Rp1.100.000", C: "Rp1.189.286", D: "Rp1.200.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Dasar PPh 23 adalah jumlah bruto tidak termasuk PPN, yaitu harga jual jasa. Karena PPN efektif 12% × 11/12 = 11%, harga jual = Rp66.600.000 ÷ 1,11 = Rp60.000.000. DPP nilai lain 11/12 hanya dipakai untuk menghitung PPN.",
        jejakHitung: [["Beban PPN efektif = 12% × 11/12", "11%"], ["Harga jual jasa = Rp66.600.000 ÷ 1,11", "Rp60.000.000"], ["PPh 23 = 2% × Rp60.000.000", "Rp1.200.000"], ["(PPN = 12% × Rp55.000.000)", "Rp6.600.000"]],
        mengapaSalah: { A: "Memotong dari tagihan yang masih termasuk PPN (2% × Rp66.600.000)", B: "Memakai DPP nilai lain PPN Rp55.000.000 sebagai dasar PPh 23", C: "Membagi tagihan dengan 1,12 seolah PPN 12% atas harga penuh (Rp59.464.286)" },
        jebakan: "Pasca-PMK 131/2024 ada dua 'dasar': DPP nilai lain untuk PPN dan harga jual untuk PPh; jangan dipertukarkan."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh; PMK 141/PMK.03/2015 Pasal 1", berlakuSejak: "2015-08-24" }, { pasal: "PMK 131/2024 Pasal 3 (DPP nilai lain 11/12)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A3-093",
      topik: "A3.6",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      stem: "PT Graha Logistik Nusantara (PKP) pada Masa Pajak Agustus 2026 melakukan pembayaran berikut (semua belum termasuk PPN; semua penerima WP badan dalam negeri ber-NPWP): (1) kepada PT Daya Tenaga Mandiri, penyedia tenaga kerja kebersihan, Rp138.000.000 yang dalam kontrak dan faktur dirinci atas gaji serta tunjangan pekerja Rp120.000.000 (didukung daftar gaji) dan imbalan jasa (management fee) Rp18.000.000; (2) sewa minibus beserta sopir dari CV Wisata Prima Rp25.000.000; (3) kepada PT Kargo Cepat, jasa pengurusan dokumen ekspor Rp12.000.000 ditambah penggantian biaya kepelabuhanan yang dibayar lebih dahulu atas nama PT Graha Logistik Nusantara Rp30.000.000 (reimbursement dengan bukti dari pihak ketiga); dan (4) kepada PT Listrik Jaya, penyedia jasa konstruksi bersertifikat kualifikasi kecil, untuk pemasangan instalasi listrik gudang Rp50.000.000. Jumlah PPh Pasal 23 yang wajib dipotong adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp1.700.000", B: "Rp1.100.000", C: "Rp2.100.000", D: "Rp3.500.000" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Jumlah bruto jasa tidak termasuk gaji tenaga kerja yang dibayarkan melalui penyedia tenaga kerja dan reimbursement yang didukung bukti, sepanjang dirinci dalam kontrak/faktur. Sewa kendaraan beserta sopir tetap sewa harta 2% atas seluruh nilai. Instalasi listrik oleh penyedia jasa konstruksi bersertifikat adalah PPh 4 ayat (2) final, bukan PPh 23.",
        jejakHitung: [
          ["(1) Management fee: 2% × Rp18.000.000", "Rp360.000"],
          ["(2) Sewa minibus + sopir: 2% × Rp25.000.000", "Rp500.000"],
          ["(3) Jasa dokumen tanpa reimbursement: 2% × Rp12.000.000", "Rp240.000"],
          ["(4) Instalasi listrik (konstruksi, PPh 4(2) 1,75% = Rp875.000)", "bukan PPh 23"],
          ["Total PPh 23", "Rp1.100.000"]
        ],
        mengapaSalah: {
          A: "Ikut memotong reimbursement biaya kepelabuhanan Rp30 juta (tambahan Rp600.000)",
          C: "Memotong PPh 23 2% atas instalasi listrik oleh penyedia jasa konstruksi bersertifikat (tambahan Rp1.000.000)",
          D: "Memotong 2% atas seluruh tagihan penyedia tenaga kerja termasuk gaji pekerja (Rp2.760.000)"
        },
        jebakan: "Pengurang jumlah bruto hanya berlaku bila dirinci dan didukung bukti; uji itu dulu sebelum menghitung."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 ayat (3) huruf b angka 1 dan 4, ayat (4), dan ayat (6) huruf y (pengertian jumlah bruto)", berlakuSejak: "2015-08-26" }, { pasal: "PP 51/2008 s.t.d.d. PP 9/2022 Pasal 3 ayat (1) huruf a (jasa konstruksi final)", berlakuSejak: "2022-02-21" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A3-094", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      kutipan: "Pasal 23 ayat (1) UU PPh (parafrase setia): atas penghasilan dengan nama dan dalam bentuk apa pun yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh Subjek Pajak badan dalam negeri kepada Wajib Pajak dalam negeri atau bentuk usaha tetap, dipotong pajak oleh pihak yang wajib membayarkan, antara lain sebesar 15% dari jumlah bruto atas royalti.",
      stem: "PT Rasa Prima (penerima waralaba) wajib membayar royalti waralaba kepada PT Waralaba Nusantara (WP badan dalam negeri, ber-NPWP) sebesar Rp200.000.000 untuk periode Januari–September 2026. Sesuai perjanjian, royalti tersebut jatuh tempo pada 31 Oktober 2026, dan PT Rasa Prima telah mencatatnya sebagai beban dan utang royalti pada tanggal itu. Karena kesulitan kas, royalti baru dibayar pada 12 Januari 2027. Tanggal 15 November 2026 jatuh pada hari Minggu. Berdasarkan kutipan tersebut, pemotongan PPh Pasal 23 yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "PPh Pasal 23 Rp30.000.000 dipotong pada Masa Pajak Januari 2027 saat royalti dibayar, disetor paling lambat Senin, 15 Februari 2027", B: "PPh Pasal 23 Rp4.000.000 terutang pada Masa Pajak Oktober 2026, disetor paling lambat Senin, 16 November 2026 dan dilaporkan paling lambat Jumat, 20 November 2026", C: "PPh Pasal 23 Rp30.000.000 terutang pada Masa Pajak Oktober 2026 saat royalti jatuh tempo, disetor paling lambat Senin, 16 November 2026 dan dilaporkan paling lambat Jumat, 20 November 2026", D: "PPh Pasal 23 Rp30.000.000 terutang pada Masa Pajak Oktober 2026 saat royalti jatuh tempo, disetor paling lambat Jumat, 13 November 2026 dan dilaporkan paling lambat Senin, 30 November 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "PPh 23 terutang pada saat yang lebih dahulu terjadi di antara dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo; di sini 31 Oktober 2026. Royalti bertarif 15%. Tenggat setor tanggal 15 yang jatuh pada hari libur bergeser ke hari kerja berikutnya, sedangkan lapor tetap 20 hari setelah Masa Pajak berakhir.",
        jejakHitung: [["Saat terutang (jatuh tempo, dicatat sebagai utang)", "Masa Oktober 2026"], ["PPh 23 = 15% × Rp200.000.000", "Rp30.000.000"], ["Tenggat setor: 15 November (Minggu) → hari kerja berikutnya", "Senin, 16 November 2026"], ["Tenggat lapor SPT Masa PPh Unifikasi", "Jumat, 20 November 2026"]],
        mengapaSalah: { A: "Menunggu pembayaran tunai; saat jatuh tempo lebih dahulu terjadi sehingga PPh terutang pada Masa Oktober 2026", B: "Royalti termasuk objek 15%, bukan 2% seperti jasa", D: "Tenggat setor bergeser ke hari kerja berikutnya, bukan sebelumnya; akhir bulan adalah tenggat SPT Masa PPN" },
        jebakan: "'Mana yang lebih dahulu' adalah kunci saat terutang PPh 23; kesulitan kas tidak menunda kewajiban memotong."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf a angka 3 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) dan Pasal 100", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-095", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 1,
      kutipan: "PP 34/2016 (parafrase setia): PPh atas penghasilan dari pengalihan hak atas tanah dan/atau bangunan sebesar 2,5% dari jumlah bruto nilai pengalihan wajib dibayar sendiri oleh orang pribadi atau badan yang menerima penghasilan sebelum akta, keputusan, perjanjian, kesepakatan, atau risalah lelang atas pengalihan hak ditandatangani oleh pejabat yang berwenang; pejabat yang berwenang hanya menandatangani akta apabila kepadanya dibuktikan bahwa kewajiban tersebut telah dipenuhi dan bukti pembayarannya telah diteliti oleh Direktorat Jenderal Pajak.",
      stem: "Ny. Wulan (orang pribadi yang usaha pokoknya bukan jual beli properti) menjual rumah tinggalnya kepada Tuan Ferry, pembeli yang tidak memiliki hubungan istimewa dengannya, dengan harga Rp1.200.000.000; NJOP PBB rumah tersebut Rp900.000.000. Akta jual beli dijadwalkan ditandatangani di hadapan PPAT pada 14 Oktober 2026. Berdasarkan kutipan tersebut, pemenuhan kewajiban PPh yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Ny. Wulan menyetor sendiri PPh final Rp30.000.000 sebelum 14 Oktober 2026 dan mengajukan penelitian bukti setor kepada DJP; PPAT menandatangani akta setelah bukti pemenuhan kewajiban tersebut diteliti", B: "Ny. Wulan menyetor sendiri PPh final Rp22.500.000 yang dihitung dari NJOP sebelum 14 Oktober 2026; PPAT menandatangani akta setelah bukti pemenuhan kewajiban tersebut diteliti", C: "Tuan Ferry selaku pembeli memotong PPh final Rp30.000.000 dari harga rumah dan menerbitkan bukti potong atas nama Ny. Wulan setelah akta ditandatangani", D: "Ny. Wulan menyetor sendiri PPh final Rp30.000.000 paling lambat 15 November 2026, yaitu tanggal 15 bulan berikutnya setelah akta ditandatangani" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Penjual orang pribadi membayar sendiri PPh final 2,5% × nilai pengalihan sebenarnya (Rp1,2 miliar, bukan NJOP) sebelum akta ditandatangani; PPAT hanya menandatangani akta setelah bukti setor diteliti DJP.",
        jejakHitung: [["Dasar = nilai transaksi (pihak tidak berelasi)", "Rp1.200.000.000"], ["PPh final = 2,5% × Rp1.200.000.000", "Rp30.000.000"], ["Saat bayar", "sebelum AJB 14 Oktober 2026"]],
        mengapaSalah: { B: "Dasar pengenaan adalah jumlah bruto nilai pengalihan yang sesungguhnya diterima, bukan NJOP yang lebih rendah", C: "PPh pengalihan hak dibayar sendiri oleh penjual; pembeli orang pribadi bukan pemotong", D: "Pembayaran dilakukan sebelum akta ditandatangani, bukan setelahnya" },
        jebakan: "Urutan 'bayar dulu, teliti, baru tanda tangan' adalah inti kutipan."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 2 dan Pasal 3", berlakuSejak: "2016-09-07" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A3-096", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "kasus", kesulitan: 3,
      stem: "PT Pabrik Kimia Nusantara (pengguna jasa) mengikat kontrak pekerjaan konstruksi terintegrasi (rancang bangun) pabrik senilai Rp20.000.000.000, belum termasuk PPN, dengan PT Rekayasa Terpadu, penyedia jasa yang memiliki sertifikat badan usaha untuk pekerjaan konstruksi terintegrasi. Uang muka 20% (Rp4.000.000.000) telah dibayar dan dipotong PPh-nya pada Januari 2026. Pada Juli 2026 dibayar termin kedua: nilai progres Rp4.000.000.000, dikurangi angsuran pengembalian uang muka 20% (Rp800.000.000) dan retensi 5% (Rp200.000.000) yang baru akan dibayar setelah masa pemeliharaan berakhir pada 2027. PPN atas termin dibayar terpisah. PPh Pasal 4 ayat (2) yang dipotong atas pembayaran termin kedua pada Juli 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp106.000.000", B: "Rp84.800.000", C: "Rp90.000.000", D: "Rp79.500.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", C: "angka-usang" },
      pembahasan: {
        inti: "PPh final jasa konstruksi dipotong pengguna jasa pada saat pembayaran, atas jumlah pembayaran tidak termasuk PPN. Bagian progres yang dibayar melalui pengembalian uang muka sudah dipotong saat uang muka dibayar, dan retensi baru dipotong saat dibayar. Pekerjaan terintegrasi bersertifikat bertarif 2,65%.",
        jejakHitung: [["Nilai progres", "Rp4.000.000.000"], ["− pengembalian uang muka (sudah dipotong Januari)", "Rp800.000.000"], ["− retensi (dipotong saat dibayar 2027)", "Rp200.000.000"], ["Pembayaran Juli 2026", "Rp3.000.000.000"], ["PPh 4 ayat (2) = 2,65% × Rp3.000.000.000", "Rp79.500.000"]],
        mengapaSalah: { A: "Memotong atas seluruh nilai progres (2,65% × Rp4 miliar), sehingga bagian uang muka terpotong dua kali", B: "Ikut memotong retensi yang belum dibayar (2,65% × Rp3,2 miliar)", C: "Memakai tarif lama 3% (PP 51/2008) untuk pelaksana kualifikasi menengah/besar" },
        jebakan: "Uang muka dan retensi menggeser saat pemotongan; dasar setiap termin adalah kas yang benar-benar dibayar."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1) huruf d (pekerjaan konstruksi terintegrasi bersertifikat 2,65%)", berlakuSejak: "2022-02-21" }, { pasal: "PP 9/2022 (pemotongan oleh pengguna jasa saat pembayaran, termasuk uang muka)", berlakuSejak: "2022-02-21" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-097", topik: "A3.8", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3, kasusId: "V-A3-08",
      stem: "Data untuk soal ini dan soal berikutnya (V-A3-08): PT Mitra Kimia Indonesia (WP badan dalam negeri) pada Masa Pajak Juni 2026 membayar kepada pihak luar negeri yang tidak memiliki BUT di Indonesia: (1) dividen Rp2.000.000.000 kepada Lion Chem Pte Ltd (Singapura), pemilik 30% saham; (2) dividen Rp500.000.000 kepada Tuan Robert Tan, orang pribadi penduduk Singapura pemilik 2% saham, yang tidak menyerahkan Form DGT; (3) bunga pinjaman Rp800.000.000 kepada Lion Chem Pte Ltd; dan (4) royalti merek Rp1.000.000.000 kepada Lion Brand Ltd (Hong Kong). Kecuali Tuan Robert Tan, seluruh penerima telah menyerahkan Form DGT yang sah dan terekam di Coretax sebelum pembayaran, merupakan beneficial owner, dan tidak menyalahgunakan P3B. Anggap tarif P3B: Singapura — dividen 10% bila kepemilikan ≥ 25% dan 15% lainnya, bunga 10%, royalti 10%; Hong Kong — royalti 5%. Pada bulan yang sama perusahaan juga menyetor PPh Pasal 25 Rp300.000.000. Jumlah PPh Pasal 26 yang wajib dipotong PT Mitra Kimia Indonesia adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp405.000.000", B: "Rp430.000.000", C: "Rp480.000.000", D: "Rp530.000.000" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Tarif P3B hanya dapat diterapkan bila Form DGT yang sah diterima dan terekam sebelum pembayaran. Tuan Robert Tan tidak menyerahkan Form DGT sehingga dipotong tarif domestik 20%. Penerima lain memakai tarif P3B sesuai jenis penghasilan dan negara mitranya.",
        jejakHitung: [["(1) Dividen Lion Chem (30% ≥ 25%): 10% × Rp2.000.000.000", "Rp200.000.000"], ["(2) Dividen Tuan Robert, tanpa Form DGT: 20% × Rp500.000.000", "Rp100.000.000"], ["(3) Bunga Lion Chem: 10% × Rp800.000.000", "Rp80.000.000"], ["(4) Royalti Lion Brand (Hong Kong): 5% × Rp1.000.000.000", "Rp50.000.000"], ["Total PPh 26", "Rp430.000.000"]],
        mengapaSalah: { A: "Memberi Tuan Robert tarif P3B 15% walaupun Form DGT tidak diserahkan (Rp75.000.000)", C: "Memakai tarif royalti Singapura 10% untuk Lion Brand yang berkedudukan di Hong Kong (Rp100.000.000)", D: "Memakai tarif dividen portofolio 15% untuk Lion Chem yang memiliki 30% saham (Rp300.000.000)" },
        jebakan: "Tarif P3B dipilih per penerima: negara domisili, jenis penghasilan, persentase kepemilikan, dan ada tidaknya Form DGT."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (Form DGT dan syarat penerapan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 32A UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-098",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      kasusId: "V-A3-08",
      stem: "V-A3-08 — Setelah membayar royalti merek Rp1.000.000.000 kepada Lion Brand Ltd (Hong Kong) dengan Form DGT yang terekam di Coretax, PT Mitra Kimia Indonesia mengetahui dari dokumen yang sebenarnya sudah tersedia sebelum pembayaran bahwa Lion Brand Ltd hanya memiliki satu pegawai administrasi, tidak memiliki kendali atas penggunaan dana royalti, dan wajib meneruskan 90% royalti yang diterimanya kepada Lion Holding Ltd di Negara Z yang tidak memiliki P3B dengan Indonesia. Anggap tarif royalti P3B Indonesia–Hong Kong 5%. Pernyataan yang paling tepat mengenai PPh Pasal 26 atas royalti tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tarif P3B Indonesia–Hong Kong 5% tetap berlaku karena Form DGT yang sah telah terekam di Coretax sebelum pembayaran, sehingga PPh Pasal 26 sebesar Rp50.000.000", B: "Tarif P3B Indonesia–Hong Kong 5% tetap berlaku karena Lion Brand Ltd berkedudukan di Hong Kong dan memperoleh sertifikat domisili dari otoritas Hong Kong, sehingga PPh Pasal 26 sebesar Rp50.000.000", C: "Tarif P3B tidak dapat diterapkan karena Lion Brand Ltd bukan beneficial owner atas royalti tersebut, sehingga PPh Pasal 26 dipotong 20% atau Rp200.000.000", D: "Tarif P3B tidak dapat diterapkan karena Lion Brand Ltd bukan beneficial owner, tetapi karena Form DGT telah terekam PPh Pasal 26 cukup dipotong dengan tarif efektif 5% dari perkiraan penghasilan neto, sehingga Rp50.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Untuk dividen, bunga, dan royalti, manfaat P3B hanya diberikan kepada beneficial owner. Penerima yang tidak mengendalikan dana dan meneruskan sebagian besar penghasilan kepada pihak lain berperan sebagai perantara (conduit), sehingga tarif domestik PPh 26 20% berlaku.",
        jejakHitung: [
          ["Syarat P3B untuk royalti", "Form DGT sah + beneficial owner + tidak ada penyalahgunaan"],
          ["Lion Brand Ltd meneruskan 90% dan tidak mengendalikan dana", "bukan beneficial owner"],
          ["PPh 26 = 20% × Rp1.000.000.000", "Rp200.000.000"]
        ],
        mengapaSalah: {
          A: "Form DGT hanya syarat administratif; tanpa status beneficial owner tarif P3B tetap tidak dapat dipakai",
          B: "Status penduduk Hong Kong saja tidak cukup untuk royalti; dibutuhkan juga status beneficial owner",
          D: "Tarif efektif 5% (20% × perkiraan penghasilan neto 25%) hanya untuk penjualan harta tertentu di Indonesia (daftar Pasal 2 ayat (4) PMK 82/PMK.03/2009), penjualan langsung saham perseroan terbatas dalam negeri yang bukan emiten atau perusahaan publik (Pasal 238 PMK 81/2024), dan penjualan saham perusahaan antara atau conduit (PMK 258/PMK.03/2008); royalti tidak termasuk, sehingga tanpa status beneficial owner berlaku tarif 20% dari bruto"
        },
        jebakan: "Ketiga opsi salah memakai fakta yang benar (Form DGT terekam, domisili Hong Kong, angka 5%) untuk kesimpulan yang keliru."
      },
      dasarHukum: [{ pasal: "PMK 112/2025 (beneficial owner dan pencegahan penyalahgunaan P3B)", berlakuSejak: "2025-12-31" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-099", topik: "A3.8", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 1,
      stem: "PT Reasuransi Nusantara (perusahaan reasuransi dalam negeri) pada Masa Pajak Mei 2026 membayar premi reasuransi Rp2.000.000.000 kepada Europa Re AG, perusahaan reasuransi di luar negeri yang tidak memiliki BUT di Indonesia dan tidak menyerahkan Form DGT. PPh Pasal 26 yang wajib dipotong PT Reasuransi Nusantara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp20.000.000", B: "Rp40.000.000", C: "Rp200.000.000", D: "Rp400.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Premi asuransi ke luar negeri dikenai PPh 26 atas perkiraan penghasilan neto: 50% bila dibayar tertanggung (10% efektif), 10% bila dibayar perusahaan asuransi (2%), dan 5% bila dibayar perusahaan reasuransi (1%).",
        jejakHitung: [["Perkiraan neto premi yang dibayar perusahaan reasuransi", "5%"], ["Tarif efektif = 20% × 5%", "1%"], ["PPh 26 = 1% × Rp2.000.000.000", "Rp20.000.000"]],
        mengapaSalah: { B: "Memakai tarif efektif 2% untuk premi yang dibayar perusahaan asuransi", C: "Memakai tarif efektif 10% untuk premi yang dibayar tertanggung", D: "Memotong 20% dari bruto tanpa perkiraan penghasilan neto" },
        jebakan: "Tarif efektif ditentukan oleh siapa yang membayar premi: tertanggung, perusahaan asuransi, atau reasuransi."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 624/KMK.04/1994 (perkiraan penghasilan neto premi asuransi)", berlakuSejak: "1995-01-01" }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-100",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (4) UU PPh: Penghasilan Kena Pajak sesudah dikurangi pajak dari suatu bentuk usaha tetap di Indonesia dikenai pajak sebesar 20% (dua puluh persen), kecuali penghasilan tersebut ditanamkan kembali di Indonesia, yang ketentuannya diatur lebih lanjut dengan atau berdasarkan Peraturan Menteri Keuangan. PMK 14/PMK.03/2011 Pasal 1 ayat (3): Pengecualian dari pengenaan Pajak Penghasilan sebagaimana dimaksud pada ayat (2) diberikan apabila seluruh Penghasilan Kena Pajak sesudah dikurangi Pajak Penghasilan dari suatu Bentuk Usaha Tetap ditanamkan kembali di Indonesia dalam bentuk: ... c. pembelian aktiva tetap yang digunakan oleh Bentuk Usaha Tetap untuk menjalankan usaha Bentuk Usaha Tetap atau melakukan kegiatan Bentuk Usaha Tetap di Indonesia; ...",
      stem: "BUT Hikari Systems (kantor pusat di Jepang; usaha jasa pengembangan perangkat lunak) melaporkan Penghasilan Kena Pajak Tahun Pajak 2025 Rp6.000.000.000 dengan tarif PPh badan 22%. Pada 2026 sebagian laba setelah pajak, yaitu Rp1.680.000.000, ditanamkan kembali dalam bentuk pembelian aktiva tetap yang digunakan BUT tersebut; sisanya tidak ditanamkan kembali. Kantor pusat telah menyerahkan Form DGT yang sah; anggap P3B Indonesia–Jepang membatasi tarif pajak atas laba BUT 10%. Berdasarkan kutipan tersebut, PPh Pasal 26 ayat (4) yang terutang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp432.000.000", B: "Rp300.000.000", C: "Rp468.000.000", D: "Rp936.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dasar branch profit tax adalah PKP sesudah dikurangi PPh badan. Pengecualian karena penanaman kembali hanya diberikan bila SELURUH PKP sesudah PPh ditanamkan kembali (PMK 14/PMK.03/2011 Pasal 1 ayat (3)); penanaman kembali sebagian tidak mengurangi dasar BPT. Tarif domestik 20% diganti tarif P3B 10% (PMK 14/PMK.03/2011 Pasal 5).",
        jejakHitung: [
          ["PPh badan = 22% × Rp6.000.000.000", "Rp1.320.000.000"],
          ["PKP sesudah PPh", "Rp4.680.000.000"],
          ["Ditanamkan kembali Rp1.680.000.000 (hanya sebagian)", "tidak mengurangi dasar"],
          ["Dasar BPT", "Rp4.680.000.000"],
          ["BPT = 10% × Rp4.680.000.000", "Rp468.000.000"]
        ],
        mengapaSalah: {
          A: "Mengurangkan penanaman kembali dari PKP sebelum PPh (10% × Rp4,32 miliar), padahal dasar BPT adalah PKP sesudah PPh dan penanaman sebagian tidak mengurangi apa pun",
          B: "Mengurangkan penanaman kembali sebagian (10% × Rp3 miliar), padahal PMK 14/PMK.03/2011 Pasal 1 ayat (3) mensyaratkan seluruh PKP sesudah PPh ditanamkan kembali",
          D: "Memakai tarif domestik 20% padahal Form DGT sah dan P3B membatasi tarif 10% (PMK 14/PMK.03/2011 Pasal 5)"
        },
        jebakan: "Penanaman kembali laba BUT bersifat semua atau tidak sama sekali: hanya bila seluruh PKP sesudah PPh ditanamkan kembali paling lambat akhir tahun pajak berikutnya, BPT tidak terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 14/PMK.03/2011 Pasal 1 ayat (3) dan Pasal 5 (penanaman kembali seluruh laba setelah pajak; tarif P3B)", berlakuSejak: "2011-01-24" }, { pasal: "PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-101", topik: "A3.9", tingkat: ["A", "B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "BPA1.b.5",
      stem: "PT Cahaya Timur Lestari menyiapkan BPA1 Tahun Pajak 2026 untuk Tuan Arman, pegawai tetap Januari–Desember 2026 dengan upah bulanan (gaji pokok dan tunjangan tetap) Rp12.000.000. Setiap bulan perusahaan menanggung premi JKK 0,24% (Rp28.800), premi JKM 0,30% (Rp36.000), dan premi BPJS Kesehatan bagian pemberi kerja 4% (Rp480.000), serta menyetor iuran JHT bagian pemberi kerja 3,7% (Rp444.000). Dari gaji Tuan Arman dipotong iuran JHT bagian pegawai 2% (Rp240.000) per bulan. Angka yang diisikan pada komponen penghasilan bruto 'premi asuransi yang dibayar pemberi kerja' dalam BPA1 Tuan Arman adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp5.760.000", B: "Rp9.417.600", C: "Rp11.865.600", D: "Rp6.537.600" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Komponen premi asuransi dalam BPA1 berisi premi JKK, JKM, dan BPJS Kesehatan yang dibayar pemberi kerja selama setahun. Iuran JHT bagian pemberi kerja bukan penghasilan pegawai, sedangkan iuran JHT bagian pegawai diisi sebagai pengurang (iuran terkait pensiun atau hari tua), bukan penambah bruto.",
        jejakHitung: [["Premi per bulan = Rp28.800 + Rp36.000 + Rp480.000", "Rp544.800"], ["Setahun = 12 × Rp544.800", "Rp6.537.600"], ["JHT pemberi kerja Rp444.000/bulan", "tidak diisi (bukan objek)"], ["JHT pegawai Rp2.880.000 setahun", "diisi pada komponen pengurang"]],
        mengapaSalah: { A: "Hanya mengisi premi BPJS Kesehatan; premi JKK dan JKM juga dibayar pemberi kerja", B: "Menambahkan iuran JHT bagian pegawai yang semestinya menjadi pengurang", C: "Menambahkan iuran JHT bagian pemberi kerja yang bukan objek PPh 21" },
        jebakan: "Empat angka iuran dalam soal; hanya yang menambah bruto pegawai yang masuk komponen premi asuransi."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 (unsur penghasilan bruto pegawai tetap)", berlakuSejak: "2024-01-01" }, { pasal: "PER-11/PJ/2025 (BPA1)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 130, verifikasi: "✅"
    },
    {
      id: "A3-102",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "baris-spt",
      kesulitan: 3,
      formulirRef: "1770S.induk.16",
      stem: "Ny. Sinta (TK/0 sejak 2020, NIK terpadankan) bekerja sebagai pegawai tetap PT Alfa Media pada Januari–Juni 2026, lalu pindah ke PT Beta Digital pada Juli–Desember 2026. Di kedua perusahaan penghasilan brutonya Rp15.000.000 per bulan, tanpa THR, bonus, maupun iuran pensiun. PT Alfa Media (Masa Pajak Terakhir Juni) dan PT Beta Digital (Masa Pajak Terakhir Desember) masing-masing menerbitkan BPA1 yang mencantumkan penghasilan neto Rp87.000.000 dan PPh Pasal 21 terutang Rp1.650.000. Ia tidak memiliki penghasilan lain. Dalam SPT Tahunan PPh Orang Pribadi Tahun Pajak 2026 (komponen formulir 1770 S), jumlah PPh kurang bayar (PPh Pasal 29) yang harus dilunasi Ny. Sinta adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp600.000", B: "Rp8.250.000", C: "Rp8.700.000", D: "Rp12.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setiap pemberi kerja menghitung dengan PTKP setahun penuh dan hanya sebagian penghasilan, sehingga lapisan tarif rendah terpakai dua kali. Dalam SPT Tahunan seluruh neto digabung, PTKP dikurangkan sekali, dan PPh 21 kedua BPA1 dikreditkan.",
        jejakHitung: [
          ["Neto gabungan = Rp87.000.000 + Rp87.000.000", "Rp174.000.000"],
          ["PKP = Rp174.000.000 − PTKP TK/0 Rp54.000.000", "Rp120.000.000"],
          ["PPh terutang = 5% × Rp60 jt + 15% × Rp60 jt", "Rp12.000.000"],
          ["Kredit PPh 21 dua BPA1", "Rp3.300.000"],
          ["PPh Pasal 29", "Rp8.700.000"]
        ],
        mengapaSalah: {
          A: "Mengurangkan PTKP dua kali karena ada dua BPA1 (PKP Rp66.000.000)",
          B: "Menghitung ulang biaya jabatan 5% × Rp180 juta = Rp9 juta tanpa batas Rp6 juta setahun (PKP Rp117.000.000)",
          D: "Lupa mengkreditkan PPh 21 yang telah dipotong kedua pemberi kerja"
        },
        jebakan: "Pindah kerja dalam satu tahun hampir selalu menimbulkan kurang bayar di SPT Tahunan; BPA1 bukan bukti pelunasan final."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf a dan Pasal 28 UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "Pasal 29 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (2) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "PER-11/PJ/2025 (BPA1 dan SPT Tahunan PPh OP)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 190,
      verifikasi: "✅"
    },
    {
      id: "A3-103", topik: "A3.9", tingkat: ["B", "C"], jenis: "baris-spt", kesulitan: 2, formulirRef: "1771.l3.1",
      stem: "Saat menyusun SPT Tahunan PPh Badan 2026, staf pajak PT Bina Karya Teknik (WP badan dalam negeri, tarif umum) merekap bukti potong/pungut yang diterima selama 2026: (1) BPPU PPh Pasal 23 atas jasa teknik Rp40.000.000; (2) BPPU PPh Pasal 4 ayat (2) atas jasa konstruksi Rp26.500.000; (3) dokumen impor yang dipersamakan dengan bukti pungut PPh Pasal 22 impor Rp120.000.000; (4) bukti pungut PPh Pasal 22 dari bendahara pemerintah Rp15.000.000; (5) bukti pungut PPh Pasal 22 atas pembelian solar untuk alat berat dari produsen BBM Rp3.600.000; serta (6) bukti setor angsuran PPh Pasal 25 Rp240.000.000. Jumlah kredit pajak PPh Pasal 22 dan Pasal 23 yang diisikan pada daftar pemotongan/pemungutan oleh pihak lain (Lampiran III formulir 1771) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp205.100.000", B: "Rp178.600.000", C: "Rp58.600.000", D: "Rp418.600.000" },
      kunci: "B",
      jebakanOpsi: { A: "final-nonfinal", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Lampiran III memuat PPh 22 dan 23 yang dipotong/dipungut pihak lain dan dapat dikreditkan, termasuk PPh 22 impor dan PPh 22 BBM bagi pemakai akhir. PPh 4 ayat (2) bersifat final (dilaporkan di lampiran penghasilan final), sedangkan PPh 25 dikreditkan langsung di induk SPT, bukan di Lampiran III.",
        jejakHitung: [["PPh 23 jasa teknik", "Rp40.000.000"], ["PPh 22 impor", "Rp120.000.000"], ["PPh 22 bendahara", "Rp15.000.000"], ["PPh 22 solar (pemakai akhir, tidak final)", "Rp3.600.000"], ["Jumlah Lampiran III", "Rp178.600.000"], ["PPh 4(2) konstruksi; PPh 25", "tidak diisi di Lampiran III"]],
        mengapaSalah: { A: "Ikut mengkreditkan PPh 4 ayat (2) konstruksi yang bersifat final (Rp26.500.000)", C: "Tidak mengkreditkan PPh 22 impor; dokumen impor dipersamakan dengan bukti pungut dan PPh 22 impor adalah kredit pajak", D: "Memasukkan angsuran PPh 25 ke daftar pemotongan/pemungutan oleh pihak lain" },
        jebakan: "Bedakan tiga tempat: Lampiran III (PPh 22/23 oleh pihak lain), lampiran penghasilan final (PPh 4(2)), dan induk SPT (PPh 25)."
      },
      dasarHukum: [{ pasal: "Pasal 28 ayat (1) UU PPh (kredit pajak)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 4 ayat (2) UU PPh dan PP 9/2022 (PPh final tidak dikreditkan)", berlakuSejak: "2022-02-21" }, { pasal: "PER-11/PJ/2025 (SPT Tahunan PPh Badan di Coretax)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-104",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-A3-09",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase setia): atas dividen, bunga, royalti, sewa dan penghasilan lain sehubungan dengan penggunaan harta, imbalan jasa, pekerjaan, dan kegiatan, serta penghasilan tertentu lainnya, dengan nama dan dalam bentuk apa pun, yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya kepada Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia, dipotong pajak sebesar 20% dari jumlah bruto oleh pihak yang wajib membayarkan.",
      stem: "V-A3-09 — PT Arunika Media Digital (WP badan dalam negeri, pembukuan dalam Rupiah) membayar royalti lisensi format acara kepada Nordvik Formats AS, badan luar negeri tanpa BUT di Indonesia yang merupakan beneficial owner dan Form DGT-nya telah terekam di Coretax sebelum royalti terutang (anggap tarif royalti dalam P3B 10%). Royalti Kuartal III 2026 sebesar USD50.000 jatuh tempo dan dicatat sebagai utang pada Rabu, 30 September 2026, lalu ditransfer pada Rabu, 14 Oktober 2026. Data kurs USD (rekaan untuk latihan): kurs KMK periode 30 September–6 Oktober 2026 Rp16.480; kurs KMK periode 14–20 Oktober 2026 Rp16.395; kurs tengah BI 30 September 2026 Rp16.512; kurs jual bank saat transfer Rp16.560. Berdasarkan kutipan tersebut, PPh Pasal 26 yang dipotong atas royalti tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp81.975.000", B: "Rp82.560.000", C: "Rp82.800.000", D: "Rp82.400.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh Pasal 26 terutang saat royalti jatuh tempo (30 September), yang lebih dahulu daripada transfer. Bruto dalam USD dirupiahkan dengan kurs KMK yang berlaku pada tanggal terutang, lalu dikalikan tarif P3B 10% karena Form DGT sah.",
        jejakHitung: [
          ["Saat terutang (jatuh tempo lebih dahulu daripada transfer)", "30 September 2026"],
          ["Kurs KMK periode 30 September–6 Oktober 2026", "Rp16.480"],
          ["Bruto = USD50.000 × Rp16.480", "Rp824.000.000"],
          ["PPh 26 = 10% × Rp824.000.000", "Rp82.400.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs KMK minggu transfer; saat terutang sudah terjadi pada 30 September",
          B: "Memakai kurs tengah BI yang dipakai pembukuan, bukan kurs pajak",
          C: "Memakai kurs jual bank saat transfer; kurs transaksi tidak dipakai untuk DPP pemotongan"
        },
        jebakan: "Empat kurs disajikan; yang menentukan adalah jenis kurs (KMK) dan tanggalnya (saat terutang, mana yang lebih dahulu)."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 30 September–6 Oktober 2026 (kurs pajak mingguan)", berlakuSejak: "2026-09-30" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Saat terutang (jatuh tempo lebih dahulu daripada transfer), tarif 20%, dan penerapan tarif P3B dengan Form DGT sudah dicocokkan dengan UU PPh Pasal 26 ayat (1) dan PMK 112/2025 Pasal 10. Belum ditemukan pasal yang menetapkan kurs KMK yang berlaku pada saat terutang sebagai kurs DPP PPh 26 dalam valas: PMK 81/2024 beserta perubahannya dan PER-11/PJ/2025 hanya mengatur kurs KMK untuk PPN dan pembayaran pajak. Angka kurs adalah data rekaan."
    },
    {
      id: "A3-105",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A3-09",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "V-A3-09 — Lanjutan kasus PT Arunika Media Digital: royalti Kuartal III USD50.000 kepada Nordvik Formats AS (tarif P3B 10%, Form DGT sah) jatuh tempo dan dicatat sebagai utang pada 30 September 2026, lalu ditransfer pada 14 Oktober 2026. Staf pajak menghitung PPh Pasal 26 dengan kurs KMK periode 14–20 Oktober 2026 (Rp16.395), menyetor Rp81.975.000 untuk Masa Pajak September 2026 pada 15 Oktober 2026, dan menerbitkan BPNR dengan angka itu. Data kurs lain (rekaan): kurs KMK periode 30 September–6 Oktober 2026 Rp16.480; kurs tengah BI 30 September 2026 Rp16.512; kurs jual bank saat transfer Rp16.560. Dalam reviu internal, kekurangan setor PPh Pasal 26 Masa Pajak September 2026 (pokok, di luar sanksi bunga) yang harus dilunasi adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp425.000", B: "Rp585.000", C: "Rp825.000", D: "Rp4.250.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "PPh yang benar memakai kurs KMK pada saat terutang (30 September), sedangkan setoran memakai kurs KMK minggu transfer. Kekurangannya adalah PPh dalam USD dikalikan selisih kedua kurs KMK.",
        jejakHitung: [
          ["PPh 26 seharusnya = 10% × USD50.000 × Rp16.480", "Rp82.400.000"],
          ["PPh 26 yang disetor = 10% × USD50.000 × Rp16.395", "Rp81.975.000"],
          ["Kekurangan = USD5.000 × (Rp16.480 − Rp16.395)", "Rp425.000"]
        ],
        mengapaSalah: {
          B: "Menganggap PPh seharusnya memakai kurs tengah BI 30 September (USD5.000 × Rp117)",
          C: "Menganggap PPh seharusnya memakai kurs jual bank saat transfer (USD5.000 × Rp165)",
          D: "Selisih DPP (USD50.000 × Rp85) dianggap sebagai kekurangan PPh; tarif 10% lupa dikalikan"
        },
        jebakan: "Selisih kurs antara tanggal terutang dan tanggal bayar tidak boleh diserap ke dalam PPh; PPh dalam Rupiah dikunci pada kurs KMK saat terutang."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 30 September–6 Oktober 2026 (kurs pajak mingguan)", berlakuSejak: "2026-09-30" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 170,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke naskah: Pasal 26 ayat (1) UU PPh (terutang saat dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo). PMK 81/2024 dan PER-11/PJ/2025 tidak memuat pasal kurs untuk PPh Pasal 26 badan. Aturan kurs KMK saat pembayaran atau saat terutang (mana yang lebih dahulu) hanya ada untuk PPh 21/26 orang pribadi (PMK 168/2023 Pasal 5 ayat (4)); penerapannya pada royalti kepada badan belum ditemukan di naskah. Angka kurs rekaan."
    },
    {
      id: "A3-106",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A3-09",
      formulirRef: "BPNR.c.1",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "V-A3-09 — PT Arunika Media Digital akan membuat bukti potong di Coretax atas royalti Kuartal III USD50.000 kepada Nordvik Formats AS (badan luar negeri tanpa BUT, Form DGT sah, tarif P3B 10%). Royalti jatuh tempo dan dicatat sebagai utang pada Rabu, 30 September 2026, lalu ditransfer pada Rabu, 14 Oktober 2026. Kurs KMK periode 30 September–6 Oktober 2026 Rp16.480, kurs KMK periode 14–20 Oktober 2026 Rp16.395, dan kurs tengah BI 30 September 2026 Rp16.512 (rekaan). Tanggal 15 Oktober 2026 jatuh pada hari Kamis dan 15 November 2026 pada hari Minggu. Perlakuan administrasi yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "BPNR Masa Pajak Oktober 2026, DPP Rp819.750.000 (kurs KMK minggu transfer); PPh disetor paling lambat 16 November 2026", B: "BP26 pada SPT Masa PPh 21/26 Masa September 2026, DPP Rp824.000.000; PPh disetor paling lambat 15 Oktober 2026", C: "BPNR Masa Pajak September 2026, DPP Rp824.000.000 (kurs KMK 30 September); PPh disetor paling lambat 15 Oktober 2026", D: "BPNR Masa Pajak September 2026, DPP Rp825.600.000 (kurs tengah BI 30 September); PPh disetor paling lambat 15 Oktober 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Royalti kepada badan luar negeri dilaporkan dengan BPNR dalam SPT Masa PPh Unifikasi, bukan BP26 yang khusus untuk imbalan orang pribadi. Masa pajak mengikuti saat terutang (September), DPP dirupiahkan dengan kurs KMK pada tanggal itu, PPh disetor paling lambat 15 Oktober dan dilaporkan paling lama 20 Oktober 2026.",
        jejakHitung: [
          ["Saat terutang", "30 September 2026 → Masa September"],
          ["DPP = USD50.000 × Rp16.480", "Rp824.000.000"],
          ["PPh 26 = 10% × DPP", "Rp82.400.000"],
          ["Batas setor / lapor", "15 Oktober / 20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "Masa pajak dan kurs ditarik ke tanggal transfer, padahal PPh sudah terutang saat jatuh tempo 30 September",
          B: "BP26 dipakai untuk imbalan jasa orang pribadi luar negeri; royalti kepada badan memakai BPNR di SPT Masa PPh Unifikasi",
          D: "Kurs tengah BI adalah kurs pembukuan, bukan kurs untuk DPP bukti potong"
        },
        jebakan: "Tanggal transfer menggoda untuk dijadikan tanggal bukti potong; yang menentukan masa pajak dan kurs adalah saat terutang."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (BPNR dan SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP (lapor 20 hari setelah masa pajak berakhir)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 140,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: BPNR dalam SPT Masa PPh Unifikasi (PER-11/PJ/2025 Ps. 14 ayat (3) huruf e, Ps. 18 ayat (1) huruf b), saat terutang 'telah jatuh tempo' (Ps. 26 ayat (1) UU PPh), setor tanggal 15 (PMK 81/2024 Ps. 94 ayat (2)), lapor 20 hari (Ps. 3 ayat (3) huruf a UU KUP). Belum pasti: pasal yang menetapkan kurs KMK pada saat terutang untuk PPh 26 selain jasa orang pribadi tidak ada di PMK 81/2024 maupun PER-11/PJ/2025. Angka kurs rekaan."
    },
    {
      id: "A3-107",
      topik: "A3.9",
      tingkat: ["B", "C"],
      jenis: "prosedur",
      kesulitan: 3,
      kasusId: "V-A3-09",
      formulirRef: "unifikasi.induk.7",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "V-A3-09 — Reviu internal PT Arunika Media Digital pada Selasa, 3 November 2026 menemukan bahwa PPh Pasal 26 atas royalti Nordvik Formats AS (USD50.000, terutang 30 September 2026, tarif P3B 10%) dihitung dengan kurs KMK minggu transfer (Rp16.395), bukan kurs KMK periode 30 September–6 Oktober 2026 (Rp16.480). PPh Rp81.975.000 telah disetor pada 15 Oktober 2026 dan SPT Masa PPh Unifikasi Masa September 2026 telah dilaporkan pada 19 Oktober 2026 dengan BPNR yang memuat angka tersebut. Langkah perbaikan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Menyetor kekurangan Rp425.000 dengan Masa Pajak Oktober 2026 (bulan transfer); BPNR dan SPT Masa September tidak perlu diubah", B: "Menyetor kekurangan Rp425.000 untuk Masa September 2026, membetulkan BPNR dan SPT Masa September, serta membayar bunga Pasal 8 ayat (2a) UU KUP", C: "Tidak ada kekurangan, karena PPh atas transaksi valas boleh dihitung dengan kurs KMK tanggal pembayaran; selisihnya dicatat sebagai selisih kurs", D: "Menyetor kekurangan Rp425.000 untuk Masa September 2026 dan membetulkan BPNR, tanpa sanksi karena kekurangan timbul dari selisih kurs" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-baca", D: "lupa-pasal" },
      pembahasan: {
        inti: "Kekurangan PPh tetap milik Masa September (saat terutang). Karena SPT Masa September sudah dilaporkan, perbaikan dilakukan dengan pembetulan bukti potong dan pembetulan SPT Masa; kekurangan disetor dengan bunga Pasal 8 ayat (2a) UU KUP yang dihitung sejak jatuh tempo setor (15 Oktober) sampai tanggal bayar, bagian bulan dihitung satu bulan penuh.",
        jejakHitung: [
          ["PPh seharusnya = 10% × USD50.000 × Rp16.480", "Rp82.400.000"],
          ["Telah disetor", "Rp81.975.000"],
          ["Kekurangan Masa September 2026", "Rp425.000"],
          ["Bunga Pasal 8 ayat (2a): 15 Oktober s.d. tanggal bayar", "minimal 1 bulan × tarif bunga KMK (uplift 5%)"]
        ],
        mengapaSalah: {
          A: "Masa pajak kekurangan mengikuti saat terutang (September), bukan bulan transfer atau bulan ditemukan",
          C: "Kurs yang dipakai adalah kurs KMK saat terutang; selisih kurs pembukuan tidak mengoreksi PPh yang kurang dipotong",
          D: "Pembetulan SPT Masa yang membuat utang pajak lebih besar dikenai bunga Pasal 8 ayat (2a), apa pun penyebab kekurangannya"
        },
        jebakan: "Kesalahan kurs adalah kesalahan DPP: diperbaiki di masa terutangnya, lengkap dengan bunga."
      },
      dasarHukum: [{ pasal: "Pasal 8 ayat (1) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 8 ayat (2a) UU KUP (bunga tarif KMK bulanan sejak UU 11/2020)", berlakuSejak: "2020-11-02" }, { pasal: "PER-11/PJ/2025 (pembetulan bukti potong dan SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 (pembetulan SPT di Coretax)", berlakuSejak: "2025-01-01" }],
      anggaranDetik: 160,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: bunga Pasal 8 ayat (2a) dan (2b) UU KUP (sejak jatuh tempo bayar, bagian bulan dihitung penuh, suku bunga acuan + 5% dibagi 12) serta pembetulan BPNR dan SPT Masa PPh Unifikasi (PER-11/PJ/2025 Ps. 15 ayat (2) dan (3)). Belum pasti: pasal yang menetapkan kurs KMK pada saat terutang (bukan saat transfer) untuk PPh 26 royalti tidak ditemukan di PMK 81/2024 maupun PER-11/PJ/2025. Angka kurs rekaan."
    },
    {
      id: "A3-108",
      topik: "A3.7",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "PT Lintas Data Persada menyewa ruang kantor di gedung milik PT Graha Properti Utama (WP badan dalam negeri, PKP). Kontrak sewa yang ditandatangani pada 2 September 2026 menetapkan harga dalam dolar: sewa Oktober 2026 USD12.000 dan service charge USD3.000, keduanya belum termasuk PPN 12% dengan DPP nilai lain 11/12. Tagihan Oktober diterima, dicatat sebagai utang, jatuh tempo, dan dibayar pada hari yang sama, Rabu, 7 Oktober 2026. Data kurs USD (rekaan): kurs KMK periode 2–8 September 2026 Rp16.360; kurs KMK periode 7–13 Oktober 2026 Rp16.430; kurs tengah BI 7 Oktober 2026 Rp16.452; kurs jual bank saat pembayaran Rp16.475. PPh Pasal 4 ayat (2) yang dipotong PT Lintas Data Persada adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp24.645.000", B: "Rp24.678.000", C: "Rp24.712.500", D: "Rp24.540.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Sewa bangunan dipotong PPh final 10% dari bruto termasuk service charge, tanpa PPN. Karena tagihan, pencatatan utang, jatuh tempo, dan pembayaran terjadi pada 7 Oktober, kurs yang dipakai adalah kurs KMK periode 7–13 Oktober 2026.",
        jejakHitung: [
          ["Bruto = USD12.000 + USD3.000 (service charge)", "USD15.000"],
          ["Rupiah = USD15.000 × Rp16.430 (KMK 7–13 Oktober)", "Rp246.450.000"],
          ["PPh 4(2) = 10% × Rp246.450.000", "Rp24.645.000"]
        ],
        mengapaSalah: {
          B: "Kurs tengah BI dipakai pembukuan, bukan untuk DPP pemotongan",
          C: "Kurs jual bank hanya menentukan jumlah Rupiah yang dibayar, bukan DPP PPh",
          D: "Tanggal kontrak bukan saat terutang; kurs KMK minggu kontrak tidak relevan"
        },
        jebakan: "Data PPN dan tanggal kontrak adalah data berlebih; DPP PPh 4(2) = bruto termasuk service charge × kurs KMK saat terutang."
      },
      dasarHukum: [{ pasal: "PP 34/2017 (sewa tanah/bangunan 10% dari bruto termasuk service charge)", berlakuSejak: "2018-01-02" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 7–13 Oktober 2026 (kurs pajak mingguan)", berlakuSejak: "2026-10-07" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A3-109",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      kasusId: "V-A3-10",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "V-A3-10 — PT Prima Optik Medika (importir pemilik API-U, ber-NPWP, pembukuan dalam Rupiah) mengimpor alat diagnostik dari pemasok di Jerman dengan nilai CIF USD80.000 berdasarkan invoice tanggal 18 Juni 2026. Bea masuk 7,5%, tidak ada pungutan pabean lain, dan barang tidak termasuk yang dikecualikan dari PPh Pasal 22 maupun yang dikenai tarif PPh Pasal 22 impor khusus. PIB didaftarkan dan bea masuk serta pajak dalam rangka impor dibayar pada Rabu, 8 Juli 2026; utang kepada pemasok dilunasi pada 3 Agustus 2026 tanpa pemotongan PPh Pasal 26. Data kurs USD (rekaan): kurs KMK periode 17–23 Juni 2026 Rp16.240; kurs KMK periode 8–14 Juli 2026 Rp16.320; kurs tengah BI 8 Juli 2026 Rp16.340; kurs jual bank saat pelunasan Rp16.400. PPh Pasal 22 impor yang dilunasi bersamaan dengan PIB adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp34.916.000", B: "Rp35.131.000", C: "Rp35.260.000", D: "Rp35.088.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Nilai impor (CIF + bea masuk) dirupiahkan dengan kurs KMK yang sama dengan yang dipakai menghitung bea masuk pada PIB, yaitu kurs yang berlaku 8 Juli 2026; PPh 22 impor importir ber-API 2,5% dilunasi bersamaan dengan bea masuk. Pembayaran harga barang kepada pemasok luar negeri bukan objek PPh 26.",
        jejakHitung: [
          ["Nilai pabean = USD80.000 × Rp16.320 (KMK 8–14 Juli)", "Rp1.305.600.000"],
          ["Bea masuk 7,5%", "Rp97.920.000"],
          ["Nilai impor = CIF + bea masuk", "Rp1.403.520.000"],
          ["PPh 22 impor = 2,5% × Rp1.403.520.000", "Rp35.088.000"]
        ],
        mengapaSalah: {
          A: "Memakai kurs KMK minggu invoice; tanggal invoice bukan saat terutang PPh 22 impor",
          B: "Memakai kurs tengah BI yang dipakai pembukuan",
          C: "Memakai kurs pelunasan utang dagang; selisihnya adalah selisih kurs pembukuan, bukan koreksi PPh 22"
        },
        jebakan: "PPh 22 impor mengikuti dokumen pabean (PIB) dan kursnya sama dengan kurs bea masuk; tanggal invoice dan tanggal pelunasan pemasok adalah pengecoh."
      },
      dasarHukum: [{ pasal: "PMK 51/2025 Pasal 3 ayat (1) huruf a angka 1 butir e), Pasal 3 ayat (2), dan Pasal 5 ayat (1) (PPh Pasal 22 impor 2,5% × nilai impor bagi importir ber-API, dilunasi bersamaan dengan bea masuk; PMK 51/2025 berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 8–14 Juli 2026 (kurs pajak mingguan)", berlakuSejak: "2026-07-08" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A3-110",
      topik: "A3.5",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      kasusId: "V-A3-10",
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "V-A3-10 — PT Prima Optik Medika (API-U, pembukuan dalam Rupiah) mengimpor alat diagnostik CIF USD80.000. PIB didaftarkan dan bea masuk, PPN impor, serta PPh Pasal 22 impor dibayar pada 8 Juli 2026 dengan kurs KMK Rp16.320. Utang dagang dicatat dengan kurs tengah BI 8 Juli 2026 Rp16.340 dan dilunasi kepada pemasok di Jerman pada 3 Agustus 2026 dengan kurs jual bank Rp16.400 (semua kurs rekaan). Perusahaan menyusun pembukuan sesuai SAK secara taat asas. Pernyataan yang paling tepat mengenai transaksi tersebut adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPh 22 impor dihitung ulang dengan kurs pelunasan 3 Agustus 2026 dan kekurangannya disetor untuk Masa Agustus 2026", B: "Pembayaran kepada pemasok dipotong PPh 26 20% karena pemasok WPLN, dan PPh 22 impor dikreditkan terhadap PPh 26 itu", C: "Pembayaran ke pemasok bukan objek PPh 26; rugi selisih kurs pelunasan Rp4.800.000 (USD80.000 × Rp60) dapat dibiayakan", D: "Rugi selisih kurs pelunasan Rp6.400.000 (USD80.000 × Rp80) dapat dibiayakan karena utang dicatat dengan kurs KMK" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 22 impor ditetapkan pada saat PIB dan tidak dihitung ulang, sedangkan pelunasan harga barang kepada pemasok luar negeri bukan objek PPh 26. Selisih antara kurs pencatatan utang (kurs tengah BI) dan kurs pelunasan adalah rugi selisih kurs terealisasi yang dapat dikurangkan menurut Pasal 6 ayat (1) huruf e UU PPh.",
        jejakHitung: [
          ["Utang dagang dicatat = USD80.000 × Rp16.340 (kurs pembukuan)", "Rp1.307.200.000"],
          ["Dilunasi = USD80.000 × Rp16.400", "Rp1.312.000.000"],
          ["Rugi selisih kurs terealisasi", "Rp4.800.000"]
        ],
        mengapaSalah: {
          A: "Kurs PPh 22 impor dikunci pada PIB; pelunasan utang dagang tidak mengubah pajak dalam rangka impor",
          B: "Pembelian barang dari luar negeri bukan objek PPh 26; pelunasan PPh atas impor melalui PPh 22 impor",
          D: "Utang dagang dicatat di pembukuan dengan kurs tengah BI (Rp16.340), bukan kurs KMK, sehingga selisihnya Rp60 per USD"
        },
        jebakan: "Kurs KMK hanya untuk pajak; kurs pembukuan yang menentukan besar selisih kurs."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "PMK 51/2025 (PPh Pasal 22 impor; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-111",
      topik: "A3.6",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 23 ayat (1) huruf c angka 1 UU PPh (parafrase setia): atas penghasilan dengan nama dan dalam bentuk apa pun yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh badan pemerintah, Subjek Pajak badan dalam negeri, penyelenggara kegiatan, bentuk usaha tetap, atau perwakilan perusahaan luar negeri lainnya kepada Wajib Pajak dalam negeri atau bentuk usaha tetap, dipotong pajak sebesar 2% dari jumlah bruto atas sewa dan penghasilan lain sehubungan dengan penggunaan harta, kecuali sewa dan penghasilan lain sehubungan dengan penggunaan harta yang telah dikenai Pajak Penghasilan Pasal 4 ayat (2).",
      stem: "PT Kencana Infra Persada menyewa satu unit crane dari PT Mega Lifting Indonesia (WP badan dalam negeri, ber-NPWP, PKP) untuk 1–13 Oktober 2026 dengan harga sewa USD30.000, belum termasuk PPN. Uang muka 40% (USD12.000) dibayar pada Rabu, 2 September 2026; sisa 60% (USD18.000) ditagih, dicatat sebagai utang, jatuh tempo, dan dibayar pada Rabu, 14 Oktober 2026. Data kurs USD (rekaan): kurs KMK periode 2–8 September 2026 Rp16.360; kurs KMK periode 14–20 Oktober 2026 Rp16.395; kurs tengah BI 2 September 2026 Rp16.372 dan 14 Oktober 2026 Rp16.418. Berdasarkan kutipan tersebut, jumlah PPh Pasal 23 yang dipotong atas seluruh kontrak (Masa September dan Oktober 2026) adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp9.816.000", B: "Rp9.828.600", C: "Rp9.837.000", D: "Rp9.839.760" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-baca", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Setiap pembayaran adalah saat terutang tersendiri: uang muka dipotong pada 2 September dengan kurs KMK minggu itu (Masa September), sisanya pada 14 Oktober dengan kurs KMK minggu itu (Masa Oktober). PPh 23 sewa harta 2% dari bruto tanpa PPN.",
        jejakHitung: [
          ["Uang muka: USD12.000 × Rp16.360", "Rp196.320.000"],
          ["PPh 23 Masa September = 2% × Rp196.320.000", "Rp3.926.400"],
          ["Pelunasan: USD18.000 × Rp16.395", "Rp295.110.000"],
          ["PPh 23 Masa Oktober = 2% × Rp295.110.000", "Rp5.902.200"],
          ["Jumlah", "Rp9.828.600"]
        ],
        mengapaSalah: {
          A: "Seluruh nilai kontrak dirupiahkan dengan kurs saat uang muka, padahal sisa 60% baru terutang 14 Oktober",
          C: "Seluruh nilai kontrak dirupiahkan dengan kurs pelunasan, padahal uang muka sudah terutang (dibayar) 2 September",
          D: "Memakai kurs tengah BI pada masing-masing tanggal; kurs BI bukan kurs pajak"
        },
        jebakan: "Uang muka adalah \"dibayarkan\" yang lebih dahulu: PPh atasnya terutang saat itu dengan kursnya sendiri."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 1 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 2–8 September 2026 dan 14–20 Oktober 2026 (kurs pajak mingguan)", berlakuSejak: "2026-09-02" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Saat terutang (dibayarkan atau jatuh tempo, mana lebih dahulu) dan tarif 2% sudah dicocokkan dengan UU PPh Pasal 23 ayat (1). Belum ditemukan pasal yang menetapkan kurs KMK yang berlaku pada saat terutang sebagai kurs DPP PPh potong dalam valas: PMK 81/2024 beserta perubahannya dan PER-11/PJ/2025 hanya mengatur kurs KMK untuk PPN dan pembayaran pajak. Angka kurs adalah data rekaan."
    },
    {
      id: "A3-112",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["C-2026-10"],
      stem: "PT Samudra Agro Lestari menerima pinjaman dari Tanjong Capital Pte. Ltd., pemberi pinjaman luar negeri tanpa BUT di Indonesia yang merupakan beneficial owner dan Form DGT-nya sah (anggap tarif bunga dalam P3B 10%). Perjanjian menetapkan bunga semester I sebesar USD27.000 bersih yang diterima pemberi pinjaman; seluruh PPh ditanggung PT Samudra (gross-up). Bunga jatuh tempo dan dicatat sebagai utang pada Rabu, 30 September 2026, lalu dibayar pada Jumat, 9 Oktober 2026. Data kurs USD (rekaan): kurs KMK periode 30 September–6 Oktober 2026 Rp16.480; kurs KMK periode 7–13 Oktober 2026 Rp16.430; kurs tengah BI 30 September 2026 Rp16.512; kurs jual bank 9 Oktober 2026 Rp16.470. PPh Pasal 26 atas bunga tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp49.440.000", B: "Rp49.290.000", C: "Rp44.496.000", D: "Rp49.536.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Karena PPh ditanggung pembayar, bunga bersih harus di-gross-up: bruto = USD27.000 ÷ (1 − 10%) = USD30.000. PPh terutang saat bunga jatuh tempo (30 September), sehingga dirupiahkan dengan kurs KMK periode 30 September–6 Oktober 2026.",
        jejakHitung: [
          ["Bruto = USD27.000 ÷ 90%", "USD30.000"],
          ["PPh dalam USD = 10% × USD30.000", "USD3.000"],
          ["Kurs KMK saat terutang (30 September)", "Rp16.480"],
          ["PPh 26 = USD3.000 × Rp16.480", "Rp49.440.000"]
        ],
        mengapaSalah: {
          B: "Memakai kurs KMK minggu pembayaran; bunga sudah terutang saat jatuh tempo",
          C: "Lupa gross-up: 10% × USD27.000 × Rp16.480",
          D: "Memakai kurs tengah BI, bukan kurs pajak"
        },
        jebakan: "Dua jebakan sekaligus: gross-up (neto ÷ (1 − tarif)) dan kurs pada saat terutang, bukan saat bayar."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 30 September–6 Oktober 2026 (kurs pajak mingguan)", berlakuSejak: "2026-09-30" }],
      anggaranDetik: 170,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke naskah: Pasal 26 ayat (1) UU PPh (terutang saat dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo). PMK 81/2024 dan PER-11/PJ/2025 tidak memuat pasal kurs untuk PPh Pasal 26 badan. Aturan kurs KMK saat pembayaran atau saat terutang (mana yang lebih dahulu) hanya ada untuk PPh 21/26 orang pribadi (PMK 168/2023 Pasal 5 ayat (4)); penerapannya pada bunga kepada badan belum ditemukan di naskah. Angka kurs rekaan."
    },
    {
      id: "A3-113",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 1,
      laporanUjian: ["C-2026-10"],
      stem: "PT Bumi Semen Perkasa (WP badan dalam negeri) mencarter kapal curah milik Oceanic Bulk Carriers S.A., perusahaan pelayaran yang berkedudukan di negara yang tidak mempunyai P3B dengan Indonesia dan menjalankan usaha di Indonesia melalui BUT, untuk mengangkut klinker dari Gresik ke Davao. Kontrak carter ditandatangani pada 17 Juni 2026; uang tambang (freight) USD75.000 ditagih, jatuh tempo, dan dibayar pada Rabu, 22 Juli 2026. Data kurs USD (rekaan): kurs KMK periode 17–23 Juni 2026 Rp16.240; kurs KMK periode 22–28 Juli 2026 Rp16.290; kurs tengah BI 22 Juli 2026 Rp16.310; kurs jual bank saat pembayaran Rp16.330. PPh Pasal 15 yang dipotong PT Bumi Semen Perkasa atas pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp32.155.200", B: "Rp32.293.800", C: "Rp32.333.400", D: "Rp32.254.200" },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Perusahaan pelayaran luar negeri yang berusaha di Indonesia melalui BUT dikenai PPh Pasal 15 sebesar 2,64% dari peredaran bruto (norma 6%) dan bersifat final (KMK 417/KMK.04/1996). Untuk perjanjian charter, pihak yang men-charter memotong PPh pada saat pembayaran atau terutangnya imbalan (SE-32/PJ.4/1996). Freight ditagih, jatuh tempo, dan dibayar 22 Juli, sehingga dirupiahkan dengan kurs KMK periode 22–28 Juli 2026.",
        jejakHitung: [
          ["Bruto = USD75.000 × Rp16.290", "Rp1.221.750.000"],
          ["PPh 15 = 2,64% × Rp1.221.750.000", "Rp32.254.200"]
        ],
        mengapaSalah: {
          A: "Memakai kurs minggu penandatanganan kontrak; penandatanganan kontrak bukan saat pembayaran atau terutangnya imbalan",
          B: "Kurs tengah BI adalah kurs pembukuan, bukan kurs KMK untuk pelunasan pajak",
          C: "Kurs jual bank adalah kurs transaksi, bukan kurs KMK untuk pelunasan pajak"
        },
        jebakan: "Tanggal kontrak disisipkan sebagai pengecoh: pemotongan mengikuti saat pembayaran atau terutangnya imbalan. Tarif 2,64% berlaku bagi perusahaan pelayaran luar negeri yang berusaha melalui BUT; bila negara domisilinya mempunyai P3B, periksa dulu pasal lalu lintas internasional."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK 417/KMK.04/1996 Pasal 1 dan Pasal 2 ayat (2) dan ayat (3) (2,64% final dari peredaran bruto)", berlakuSejak: "1996-06-14" }, { pasal: "SE-32/PJ.4/1996 butir 2 dan butir 5 huruf a (cakupan BUT; pemotongan oleh pihak yang men-charter)", berlakuSejak: "1996-08-29" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 22–28 Juli 2026 (kurs pajak mingguan)", berlakuSejak: "2026-07-22" }],
      anggaranDetik: 120,
      verifikasi: "✅"
    },
    {
      id: "A3-114", topik: "A3.8", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "PP 94/2010 Pasal 9 ayat (1) (parafrase setia): keuntungan atau kerugian selisih kurs mata uang asing diakui sebagai penghasilan atau biaya berdasarkan sistem pembukuan yang dianut dan dilakukan secara taat asas sesuai dengan Standar Akuntansi Keuangan yang berlaku di Indonesia.",
      stem: "PT Citra Lensa Nusantara (pembukuan dalam Rupiah sesuai SAK, menjabarkan pos moneter valas dengan kurs tengah BI pada setiap tanggal neraca) mempunyai kewajiban royalti bruto USD40.000 kepada pemberi lisensi di luar negeri (beneficial owner, Form DGT sah, anggap tarif P3B 10%) yang jatuh tempo pada 31 Agustus 2026. Kurs KMK saat jatuh tempo Rp16.450 dan kurs tengah BI 31 Agustus 2026 Rp16.470. PPh Pasal 26 Rp65.800.000 sudah dipotong dan disetor untuk Masa Agustus 2026, sedangkan utang royalti neto USD36.000 dicatat dengan kurs tengah BI 31 Agustus dan baru akan ditransfer pada Januari 2027. Kurs tengah BI 31 Desember 2026 Rp16.610 dan kurs transaksi saat transfer Rp16.700 (semua kurs rekaan). Berdasarkan kutipan tersebut, pernyataan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPh 26 dihitung ulang dengan kurs tengah BI 31 Desember karena utang royalti dijabarkan kembali, dan kekurangannya disetor untuk Masa Desember", B: "PPh 26 tetap memakai kurs KMK saat jatuh tempo, tetapi rugi selisih kurs atas utang royalti baru dapat dibiayakan saat dilunasi pada 2027", C: "PPh 26 tetap memakai kurs KMK saat jatuh tempo; utang dijabarkan dengan kurs tengah BI 31 Desember dan rugi selisih kursnya dibiayakan pada 2026", D: "PPh 26 seharusnya memakai kurs transaksi saat transfer; PPh yang disetor untuk Masa Agustus hanya bersifat sementara" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Dua kurs, dua fungsi: kurs KMK mengunci DPP PPh 26 pada saat terutang, sedangkan kurs tengah BI dipakai pembukuan untuk menjabarkan utang valas pada tanggal neraca. Rugi selisih kurs yang timbul diakui secara fiskal mengikuti pembukuan yang taat asas sesuai SAK, termasuk yang belum terealisasi, tanpa mengubah PPh yang telah dipotong. Yang dijabarkan hanya utang valas yang tersisa (neto USD36.000), karena bagian PPh sudah menjadi utang Rupiah dan telah disetor.",
        jejakHitung: [["PPh 26 tetap = 10% × USD40.000 × Rp16.450 (KMK saat terutang)", "Rp65.800.000"], ["Utang royalti neto = USD36.000 × Rp16.470 (kurs tengah BI 31 Agustus)", "Rp592.920.000"], ["Penjabaran 31 Desember = USD36.000 × Rp16.610", "Rp597.960.000"], ["Rugi selisih kurs belum terealisasi 2026 (dapat dibiayakan)", "Rp5.040.000"]],
        mengapaSalah: { A: "Penjabaran utang pada tanggal neraca adalah urusan pembukuan; tidak mengubah DPP PPh 26 yang sudah terutang", B: "PP 94/2010 Pasal 9 mengikuti pembukuan taat asas sesuai SAK; selisih kurs belum terealisasi pada tanggal neraca ikut diakui", D: "PPh 26 dihitung pada saat terutangnya; kurs transaksi saat transfer tidak dipakai dan setoran bukan bersifat sementara" },
        jebakan: "Opsi yang menyesuaikan PPh dengan kurs akhir tahun atau kurs bayar selalu salah; selisih kurs hidup di laporan laba rugi, bukan di bukti potong."
      },
      dasarHukum: [{ pasal: "PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30" }, { pasal: "Pasal 4 ayat (1) huruf l dan Pasal 6 ayat (1) huruf e UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-115", topik: "A3.8", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "PT Delta Rekayasa Energi membayar imbalan jasa desain teknik kepada Kraft Engineering GmbH, badan luar negeri tanpa BUT di Indonesia yang tidak menyerahkan Form DGT. Tagihan USD40.000 diterima, dicatat sebagai utang, jatuh tempo, dan dibayar pada hari yang sama, Selasa, 6 Oktober 2026. KMK nilai kurs periode 30 September–6 Oktober 2026 menetapkan USD Rp16.480, sedangkan KMK periode 7–13 Oktober 2026 menetapkan Rp16.430; kurs tengah BI 6 Oktober 2026 Rp16.468 (semua rekaan). Pernyataan yang paling tepat mengenai PPh Pasal 26 atas pembayaran itu adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Rp131.440.000, karena KMK periode berikutnya sudah ditetapkan sebelum pembayaran sehingga kurs terbaru yang dipakai", B: "Rp131.840.000, karena KMK nilai kurs berlaku mingguan Rabu sampai Selasa dan 6 Oktober masih dalam periodenya", C: "Rp131.744.000, karena kurs tengah BI pada tanggal pembayaran mencerminkan nilai pasar yang paling wajar", D: "Rp65.920.000, karena tanpa Form DGT tarif P3B 10% tetap dipakai sampai Form DGT diserahkan" },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "KMK nilai kurs ditetapkan mingguan dan berlaku dari Rabu sampai Selasa berikutnya. Pembayaran Selasa, 6 Oktober masih memakai kurs periode 30 September–6 Oktober; tanpa Form DGT berlaku tarif domestik 20%.",
        jejakHitung: [["Periode KMK yang memuat Selasa, 6 Oktober 2026", "30 September–6 Oktober 2026"], ["Bruto = USD40.000 × Rp16.480", "Rp659.200.000"], ["PPh 26 = 20% × Rp659.200.000", "Rp131.840.000"]],
        mengapaSalah: { A: "Kurs dipilih menurut periode berlakunya pada saat terutang, bukan menurut KMK yang terakhir ditetapkan", C: "Kurs tengah BI bukan kurs pajak", D: "Tanpa Form DGT yang sah, PPh 26 dipotong dengan tarif 20%" },
        jebakan: "Selasa adalah hari terakhir periode KMK; kurs baru berlaku mulai Rabu."
      },
      dasarHukum: [{ pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 30 September–6 Oktober 2026 (kurs pajak mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: "2026-09-30" }, { pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (penerapan P3B, Form DGT)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 120, verifikasi: "✅"
    },
    {
      id: "A3-116", topik: "A3.8", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Nusantara Rekayasa Digital (WP badan dalam negeri, pembukuan dalam Rupiah) memakai jasa manajemen proyek dari Lumen Advisory Pte. Ltd., badan luar negeri yang tidak mempunyai BUT di Indonesia. Tagihan USD12.000 dicatat sebagai utang, jatuh tempo, dan dibayar pada hari yang sama, Kamis, 22 Oktober 2026. Data kurs USD (rekaan): kurs KMK periode 14–20 Oktober 2026 Rp16.395; kurs KMK periode 21–27 Oktober 2026 Rp16.372; kurs tengah BI 22 Oktober 2026 Rp16.381; kurs jual bank saat transfer Rp16.430. Kurs yang dipakai untuk merupiahkan DPP PPh Pasal 26 atas imbalan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Kurs tengah BI 22 Oktober 2026 (Rp16.381), karena sama dengan kurs pencatatan utang di pembukuan", B: "Kurs jual bank saat transfer (Rp16.430), karena mencerminkan rupiah yang benar-benar dikeluarkan", C: "Kurs KMK periode 14–20 Oktober 2026 (Rp16.395), yaitu kurs KMK minggu sebelum pembayaran", D: "Kurs KMK periode 21–27 Oktober 2026 (Rp16.372), yang berlaku pada saat PPh Pasal 26 terutang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-baca" },
      pembahasan: {
        inti: "DPP PPh Pasal 26 dalam valuta asing dirupiahkan dengan kurs yang ditetapkan Menteri Keuangan (kurs KMK) yang berlaku pada saat PPh terutang, yaitu saat penghasilan dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu. Ketiganya jatuh pada Kamis, 22 Oktober 2026, yang termasuk periode KMK Rabu, 21 Oktober sampai Selasa, 27 Oktober 2026 (Rp16.372). Kurs tengah BI dan kurs bank hanya dipakai untuk pembukuan dan pembayaran.",
        jejakHitung: [["Saat terutang PPh 26 (dicatat sebagai utang, jatuh tempo, dan dibayar)", "Kamis, 22 Oktober 2026"], ["Periode KMK yang mencakup tanggal itu", "Rabu 21 – Selasa 27 Oktober 2026 → Rp16.372"]],
        mengapaSalah: { A: "Kurs tengah BI adalah kurs pembukuan, bukan kurs untuk DPP pemotongan", B: "Kurs jual bank hanya menentukan jumlah rupiah yang dibayar ke bank, bukan DPP PPh", C: "Kurs KMK dipilih menurut periode yang mencakup saat terutang; 22 Oktober sudah masuk periode 21–27 Oktober" },
        jebakan: "Pembukuan memakai kurs tengah BI, pemotongan memakai kurs KMK saat terutang; jangan tertukar."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 75, verifikasi: "✅"
    },
    {
      id: "A3-117", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 1, laporanUjian: ["C-2026-10"],
      stem: "PT Cakra Bangun Persada (WP badan dalam negeri) menyewa satu unit genset dari PT Daya Energi Prima (WP badan dalam negeri, ber-NPWP) dengan harga sewa USD8.000 belum termasuk PPN. Tagihan sewa dicatat sebagai utang, jatuh tempo, dan dibayar pada hari yang sama, Rabu, 21 Oktober 2026. Data kurs USD (rekaan): kurs KMK periode 14–20 Oktober 2026 Rp16.395; kurs KMK periode 21–27 Oktober 2026 Rp16.372; kurs tengah BI 21 Oktober 2026 Rp16.384; kurs jual bank saat pembayaran Rp16.420. PPh Pasal 23 yang dipotong PT Cakra Bangun Persada adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp2.619.520", B: "Rp2.623.200", C: "Rp2.621.440", D: "Rp2.627.200" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kurs KMK berlaku mingguan dari Rabu sampai Selasa. PPh Pasal 23 terutang pada Rabu, 21 Oktober 2026, yaitu hari pertama periode 21–27 Oktober 2026, sehingga DPP dirupiahkan dengan Rp16.372. Tarif atas sewa harta selain tanah dan/atau bangunan adalah 2% dari jumlah bruto tidak termasuk PPN.",
        jejakHitung: [["Saat terutang Rabu, 21 Oktober 2026 → kurs KMK periode 21–27 Oktober", "Rp16.372"], ["DPP = 8.000 × 16.372", "Rp130.976.000"], ["PPh 23 = 2% × 130.976.000", "Rp2.619.520"]],
        mengapaSalah: { B: "Memakai kurs KMK periode 14–20 Oktober; periode itu berakhir Selasa, 20 Oktober, sehingga Rabu 21 Oktober sudah memakai kurs periode baru", C: "Memakai kurs tengah BI, yang merupakan kurs pembukuan", D: "Memakai kurs jual bank, yang hanya menentukan rupiah yang dibayar" },
        jebakan: "Rabu membuka periode KMK baru; Selasa menutup periode lama."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 1 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK kurs sebagai dasar pelunasan bea masuk, PPN/PPnBM, bea keluar, dan PPh (ditetapkan mingguan, berlaku Rabu s.d. Selasa)", berlakuSejak: null }],
      anggaranDetik: 90, verifikasi: "✅"
    },
    {
      id: "A3-118", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Mr. Kenji Watanabe (WN Jepang) adalah pegawai tetap PT Sakura Presisi Indonesia sejak Maret 2023 dan selama itu menjadi subjek pajak dalam negeri. Pada 1 Januari 2026 ia berstatus kawin dengan satu anak (K/1); istri tidak bekerja. Gajinya Rp40.000.000 per bulan tanpa penghasilan lain dan tanpa iuran pensiun yang dibayar sendiri. Penugasannya berakhir 30 Juni 2026, dan pada hari itu ia bersama keluarganya meninggalkan Indonesia untuk selama-lamanya. PPh 21 Januari–Mei 2026 telah dipotong dengan TER kategori B 15% (Rp6.000.000 per bulan). PPh Pasal 21 yang dipotong pada Masa Pajak Juni 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp5.875.000",
        B: "Rp6.000.000",
        C: "Rp41.750.000",
        D: "Lebih potong Rp9.900.000"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kewajiban subjektif berakhir 30 Juni 2026 sehingga Juni adalah Masa Pajak Terakhir dan penghasilan neto 6 bulan disetahunkan; PPh setahun dihitung dengan tarif Pasal 17, lalu diambil 6/12 bagiannya dan dikurangi PPh yang telah dipotong.",
        jejakHitung: [["Bruto Jan–Jun", "Rp240.000.000"], ["Biaya jabatan (Rp500.000 × 6)", "Rp3.000.000"], ["Neto 6 bulan", "Rp237.000.000"], ["Disetahunkan × 12/6", "Rp474.000.000"], ["PKP = 474.000.000 − 63.000.000 (K/1)", "Rp411.000.000"], ["PPh setahun: 5% × 60 jt + 15% × 190 jt + 25% × 161 jt", "Rp71.750.000"], ["Bagian tahun: 6/12 × 71.750.000", "Rp35.875.000"], ["− PPh Jan–Mei", "(Rp30.000.000)"], ["PPh 21 Juni", "Rp5.875.000"]],
        mengapaSalah: {
          B: "Masa Pajak Terakhir tidak memakai TER; PPh dihitung ulang dengan tarif Pasal 17.",
          C: "Menyetahunkan tetapi lupa memprorata 6/12, sehingga PPh setahun penuh dibebankan atas penghasilan 6 bulan.",
          D: "Memperlakukannya seperti pegawai yang sekadar berhenti bekerja (tanpa penyetahunan); penyetahunan berlaku karena kewajiban subjektifnya berakhir."
        },
        jebakan: "Menyamakan pegawai yang meninggalkan Indonesia selamanya dengan pegawai yang resign biasa."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "Pasal 17 ayat (1) huruf a UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-119", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3,
      stem: "Tuan Agus Salim, pegawai tetap PT Lestari Boga, berstatus kawin dengan dua anak (K/2) pada 1 Januari 2026; istrinya tidak bekerja. Ia menerima gaji Rp15.000.000 per bulan dan membayar sendiri iuran JHT Rp300.000 per bulan melalui pemberi kerja; tidak ada premi asuransi dari pemberi kerja yang menambah bruto. Tuan Agus meninggal dunia pada 14 April 2026, dan perusahaan membayar gaji April secara penuh. PPh 21 Januari–Maret 2026 telah dipotong dengan TER kategori B 6% (Rp900.000 per bulan). PPh Pasal 21 Masa Pajak April 2026 yang dipotong atas penghasilannya adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp445.000",
        B: "Rp900.000",
        C: "Rp6.735.000",
        D: "Lebih potong Rp2.700.000 yang dikembalikan kepada ahli waris"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Meninggal dunia mengakhiri kewajiban subjektif, sehingga April adalah Masa Pajak Terakhir dan neto 4 bulan disetahunkan; PPh setahun diprorata 4/12 lalu dikurangi PPh Januari–Maret.",
        jejakHitung: [["Bruto Jan–Apr", "Rp60.000.000"], ["Biaya jabatan: min(5% × 60 jt; Rp500.000 × 4)", "Rp2.000.000"], ["Iuran JHT pegawai (4 × 300.000)", "Rp1.200.000"], ["Neto 4 bulan", "Rp56.800.000"], ["Disetahunkan × 12/4", "Rp170.400.000"], ["PKP = 170.400.000 − 67.500.000 (K/2)", "Rp102.900.000"], ["PPh setahun: 5% × 60 jt + 15% × 42,9 jt", "Rp9.435.000"], ["Bagian tahun: 4/12 × 9.435.000", "Rp3.145.000"], ["− PPh Jan–Mar", "(Rp2.700.000)"], ["PPh 21 April", "Rp445.000"]],
        mengapaSalah: {
          B: "Masa Pajak Terakhir tidak memakai TER.",
          C: "Lupa memprorata 4/12 setelah penyetahunan.",
          D: "Tanpa penyetahunan, PKP negatif sehingga seolah lebih potong; perlakuan itu milik pegawai yang berhenti tetapi tetap subjek pajak dalam negeri."
        },
        jebakan: "Biaya jabatan dibatasi Rp500.000 × jumlah bulan, bukan 5% bruto tanpa batas."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "PP 58/2023 Pasal 2", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 200, verifikasi: "✅"
    },
    {
      id: "A3-120", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "klasifikasi", kesulitan: 2,
      stem: "Bagian SDM PT Nusa Persada menyiapkan penghitungan PPh 21 Masa Pajak Terakhir 2026 untuk empat pegawai tetap yang berhenti di tengah tahun: (1) Nona Lia mengundurkan diri pada Juni 2026 lalu bekerja di perusahaan lain di Jakarta; (2) Tuan Budi pensiun dini pada September 2026 dan tetap tinggal di Bandung; (3) Ms. Clara Weber (WNA, subjek pajak dalam negeri sejak 2024) mengakhiri kontrak dan meninggalkan Indonesia untuk selama-lamanya pada Agustus 2026; (4) Tuan Joko meninggal dunia pada Oktober 2026. Pegawai yang penghasilannya harus disetahunkan pada Masa Pajak Terakhir adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "(3) dan (4)",
        B: "(1), (2), (3), dan (4)",
        C: "(3) saja",
        D: "(1) dan (2)"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-baca" },
      pembahasan: {
        inti: "Penyetahunan hanya dilakukan bila kewajiban pajak subjektif berakhir (atau dimulai) dalam tahun berjalan: meninggalkan Indonesia untuk selama-lamanya dan meninggal dunia. Pegawai yang mengundurkan diri atau pensiun tetapi tetap subjek pajak dalam negeri dihitung tanpa penyetahunan.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Berhenti bekerja saja tidak mengakhiri kewajiban subjektif; Nona Lia dan Tuan Budi tetap subjek pajak dalam negeri.",
          C: "Meninggal dunia juga mengakhiri kewajiban subjektif (Pasal 2A ayat (1)).",
          D: "Justru (1) dan (2) yang tidak disetahunkan."
        },
        jebakan: "Mengira setiap pegawai yang berhenti di tengah tahun penghasilannya disetahunkan."
      },
      dasarHukum: [{ pasal: "Pasal 2A ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A3-121", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "Ny. Rika Amelia adalah pegawai tetap PT Cahaya Mandiri dan bukan pemegang saham. Selama 2026 seluruh pegawai PT Cahaya Mandiri menerima tiga bingkisan dari perusahaan: parsel Idulfitri senilai Rp2.500.000 (Maret), bingkisan ulang tahun perusahaan senilai Rp1.800.000 (Mei), dan bingkisan akhir tahun senilai Rp1.700.000 (Desember). Nilai tersebut adalah nilai pasar per pegawai. Jumlah natura bingkisan yang menjadi objek PPh Pasal 21 Ny. Rika Tahun Pajak 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp0",
        B: "Rp500.000",
        C: "Rp3.000.000",
        D: "Rp3.500.000"
      },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Parsel Idulfitri untuk seluruh pegawai dikecualikan tanpa batas. Bingkisan selain hari raya keagamaan dikecualikan sampai Rp3.000.000 per pegawai per tahun: (1.800.000 + 1.700.000) − 3.000.000 = Rp500.000 menjadi objek.",
        jejakHitung: [["Parsel Idulfitri (hari raya keagamaan)", "dikecualikan"], ["Bingkisan selain hari raya: 1.800.000 + 1.700.000", "Rp3.500.000"], ["Batas pengecualian", "Rp3.000.000"], ["Objek PPh 21", "Rp500.000"]],
        mengapaSalah: {
          A: "Bingkisan selain hari raya keagamaan hanya dikecualikan sampai Rp3.000.000 setahun.",
          C: "Parsel hari raya keagamaan tidak ikut dijumlahkan dengan bingkisan lain; ia dikecualikan tanpa batas.",
          D: "Bingkisan selain hari raya keagamaan tidak seluruhnya objek; Rp3.000.000 pertama dikecualikan."
        },
        jebakan: "Menggabungkan parsel hari raya dengan bingkisan lain dalam satu batas."
      },
      dasarHukum: [{ pasal: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01" }, { pasal: "Pasal 4 ayat (1) huruf a dan ayat (3) huruf d UU PPh s.t.d.t.d. UU 7/2021", berlakuSejak: "2022-01-01" }],
      anggaranDetik: 100, verifikasi: "✅"
    },
    {
      id: "A3-122", topik: "A3.9", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2,
      stem: "Tuan Darma Wijaya, konsultan pemasaran orang pribadi dalam negeri yang bukan pegawai dan NIK-nya telah dipadankan, menerima honorarium Rp40.000.000 dari PT Selaras Retail pada 12 Agustus 2026. PT Selaras mentransfer Rp38.800.000 tetapi sampai Oktober 2026 belum memberikan bukti potong. Menurut hitungan Tuan Darma, PPh 21 yang seharusnya hanya Rp1.000.000 (5% × 50% × Rp40.000.000), sehingga ia menduga PT Selaras keliru memakai tarif 120% bagi penerima tanpa NPWP. Pernyataan yang tepat mengenai hak dan kewajiban Tuan Darma adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Ia berhak meminta bukti potong kepada PT Selaras; bila jumlah pemotongan dalam bukti potong menurutnya tidak benar, ia dapat mengajukan keberatan atas pemotongan pihak ketiga kepada DJP paling lama 3 bulan sejak tanggal pemotongan, dan ia tetap wajib melaporkan honorarium itu dalam SPT Tahunan",
        B: "Karena belum menerima bukti potong, ia tidak wajib melaporkan honorarium itu dalam SPT Tahunan 2026",
        C: "Ia boleh mengkreditkan PPh Rp1.200.000 dalam SPT Tahunan berdasarkan bukti transfer bank walaupun tidak ada bukti potong",
        D: "Keberatan atas pemotongan diajukan kepada PT Selaras paling lama 3 bulan sejak PT Selaras melaporkan SPT Masa PPh 21 Agustus 2026"
      },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "lupa-pasal", D: "salah-baca" },
      pembahasan: {
        inti: "Penerima berhak atas bukti potong dan dapat mengajukan keberatan kepada DJP atas pemotongan pihak ketiga dalam 3 bulan sejak tanggal pemotongan; kewajiban melaporkan penghasilan dalam SPT Tahunan tidak bergantung pada diterimanya bukti potong. Karena NIK-nya terpadankan, tarif 120% tidak semestinya dipakai.",
        jejakHitung: [["PPh 21 seharusnya: 5% × 50% × Rp40.000.000", "Rp1.000.000"], ["Dipotong (dengan tarif 120%)", "Rp1.200.000"]],
        mengapaSalah: {
          B: "Penghasilan wajib dilaporkan dalam SPT Tahunan walaupun bukti potong belum diterima; bukti potong hanya syarat pengkreditan.",
          C: "Kredit pajak dibuktikan dengan bukti potong yang terekam; bukti transfer bukan bukti pemotongan.",
          D: "Keberatan diajukan kepada Direktur Jenderal Pajak, dan jangka 3 bulan dihitung sejak tanggal pemotongan."
        },
        jebakan: "Mengira tanpa bukti potong penerima bebas dari kewajiban melapor."
      },
      dasarHukum: [{ pasal: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", berlakuSejak: "2008-01-01" }, { pasal: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-123",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Pada Masa Pajak Juli 2026 PT Yasa Mandiri (WP badan dalam negeri) melakukan tiga pembayaran kepada penerima yang tidak memiliki NPWP (termasuk NIK yang belum dipadankan): (1) imbalan jasa teknik kepada CV Karya Teknik Rp50.000.000 (belum termasuk PPN); (2) honorarium narasumber seminar kepada Tuan Bayu, orang pribadi bukan pegawai, Rp10.000.000 sekali bayar; (3) sewa ruko kepada Ny. Wati Rp100.000.000. Jumlah seluruh PPh yang dipotong PT Yasa Mandiri atas ketiga pembayaran tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp12.300.000", B: "Rp22.300.000", C: "Rp11.250.000", D: "Rp12.500.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Tambahan tarif berbeda per pasal: PPh 23 100% lebih tinggi, PPh 21 20% lebih tinggi, dan PPh 4 ayat (2) atas sewa tanah/bangunan tidak mengenal tambahan tarif.",
        jejakHitung: [
          ["PPh 23: 2% × 200% × Rp50.000.000", "Rp2.000.000"],
          ["PPh 21: 5% × 50% × Rp10.000.000 × 120%", "Rp300.000"],
          ["PPh 4 ayat (2): 10% × Rp100.000.000", "Rp10.000.000"],
          ["Jumlah", "Rp12.300.000"]
        ],
        mengapaSalah: {
          B: "Menambahkan 100% pada PPh final sewa tanah/bangunan; tambahan tarif umum hanya ada pada PPh 21, 22, dan 23.",
          C: "Mengabaikan tambahan tarif bagi penerima tanpa NPWP.",
          D: "Memakai tambahan 100% untuk PPh 21; tambahan untuk PPh 21 hanya 20%."
        },
        jebakan: "Menyamaratakan tambahan tarif tanpa NPWP untuk semua pasal."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (5a) dan Pasal 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 34/2017 (sewa tanah dan/atau bangunan)", berlakuSejak: "2018-01-02" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-124",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      kasusId: "V-A3-11",
      laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase): atas penghasilan dengan nama dan dalam bentuk apa pun yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh subjek pajak dalam negeri kepada Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia, antara lain imbalan sehubungan dengan jasa, pekerjaan, dan kegiatan, dipotong pajak sebesar 20% dari jumlah bruto oleh pihak yang wajib membayarkan.",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-A3-11): PT Arga Teknik Mandiri (WP badan dalam negeri, pembukuan dalam Rupiah sesuai SAK) memakai jasa supervisi pemasangan turbin dari Kraus Technik GmbH, badan di Jerman yang tidak mempunyai BUT di Indonesia dan tidak menyerahkan Form DGT. Kontrak menetapkan Kraus menerima USD48.000 bersih; seluruh PPh Indonesia ditanggung PT Arga dengan metode gross-up. Tagihan diterima serta dicatat sebagai biaya dan utang pada Kamis, 10 September 2026, jatuh tempo pada Jumat, 9 Oktober 2026, dan baru ditransfer pada Selasa, 3 November 2026. Data kurs USD (rekaan): KMK periode 9–15 September 2026 Rp16.420; KMK periode 7–13 Oktober 2026 Rp16.380; KMK periode 28 Oktober–3 November 2026 Rp16.450; kurs tengah BI 10 September 2026 Rp16.437. PPh Pasal 26 yang wajib dipotong PT Arga adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp157.632.000", B: "Rp196.560.000", C: "Rp197.040.000", D: "Rp197.400.000" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-baca", D: "salah-baca" },
      pembahasan: {
        inti: "Imbalan neto USD48.000 di-gross-up menjadi bruto USD60.000 sehingga PPh 26 20% = USD12.000. PPh terutang pada peristiwa yang paling dahulu: tagihan sudah dicatat sebagai biaya dan utang (disediakan untuk dibayarkan) pada 10 September, sehingga dirupiahkan dengan kurs KMK periode 9–15 September 2026.",
        jejakHitung: [
          ["Tanpa Form DGT → tarif", "20%"],
          ["Bruto = USD48.000 ÷ (1 − 20%)", "USD60.000"],
          ["PPh 26 = 20% × USD60.000", "USD12.000"],
          ["Saat terutang (dicatat sebagai utang)", "10 September 2026 → KMK Rp16.420"],
          ["PPh 26 = USD12.000 × Rp16.420", "Rp197.040.000"]
        ],
        mengapaSalah: {
          A: "Lupa gross-up: 20% × USD48.000 × Rp16.420; kontrak neto mewajibkan bruto dihitung ulang",
          B: "Memakai kurs KMK saat jatuh tempo (9 Oktober), padahal penghasilan sudah disediakan untuk dibayarkan sejak dicatat pada 10 September",
          D: "Memakai kurs KMK minggu transfer; tanggal transfer adalah peristiwa yang paling akhir, bukan yang paling dahulu"
        },
        jebakan: "Tiga tanggal dan empat kurs: saat terutang adalah peristiwa yang paling dahulu (dicatat sebagai utang), dan kurs tengah BI hanya untuk pembukuan."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (tanpa Form DGT sah berlaku tarif 20%)", berlakuSejak: "2025-12-31" }, { pasal: "KMK nilai kurs mingguan sebagai dasar pelunasan PPh periode 9–15 September 2026", berlakuSejak: "2026-09-09" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Dicocokkan ke naskah: Pasal 26 ayat (1) UU PPh (dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo; 20% bruto). Frasa 'disediakan untuk dibayarkan' tidak didefinisikan di UU PPh, sehingga saat dicatat sebagai utang sebagai saat terutang masih tafsiran. PMK 81/2024 dan PER-11/PJ/2025 tidak memuat kurs PPh 26 badan; aturan kurs KMK pada peristiwa yang lebih dahulu hanya ada untuk orang pribadi (PMK 168/2023 Pasal 5 ayat (4)). Angka kurs rekaan."
    },
    {
      id: "A3-125",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A3-11",
      formulirRef: "BPNR.c.1",
      laporanUjian: ["C-2026-10"],
      stem: "V-A3-11 — PT Arga Teknik Mandiri akan membuat bukti potong di Coretax atas imbalan jasa supervisi Kraus Technik GmbH (badan Jerman tanpa BUT, tanpa Form DGT, kontrak neto USD48.000 dengan gross-up). Tagihan dicatat sebagai biaya dan utang pada Kamis, 10 September 2026, jatuh tempo Jumat, 9 Oktober 2026, dan ditransfer Selasa, 3 November 2026. Kurs KMK periode 9–15 September 2026 Rp16.420, periode 7–13 Oktober 2026 Rp16.380, dan periode 28 Oktober–3 November 2026 Rp16.450 (rekaan). Tanggal 15 Oktober 2026 jatuh pada hari Kamis, 20 Oktober 2026 hari Selasa, dan 15 November 2026 hari Minggu. Perlakuan administrasi yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "BP26 pada SPT Masa PPh 21/26 Masa September 2026, DPP Rp985.200.000 dan PPh Rp197.040.000; setor paling lambat Kamis, 15 Oktober 2026 dan lapor paling lambat Selasa, 20 Oktober 2026", B: "BPNR pada SPT Masa PPh Unifikasi Masa September 2026, DPP Rp985.200.000 dan PPh Rp197.040.000; setor paling lambat Kamis, 15 Oktober 2026 dan lapor paling lambat Selasa, 20 Oktober 2026", C: "BPNR pada SPT Masa PPh Unifikasi Masa Oktober 2026 (bulan jatuh tempo), DPP Rp982.800.000; setor paling lambat Senin, 16 November 2026 dan lapor paling lambat Jumat, 20 November 2026", D: "BPNR pada SPT Masa PPh Unifikasi Masa November 2026 (bulan transfer), DPP Rp789.600.000 sebesar imbalan yang benar-benar ditransfer; setor paling lambat 15 Desember 2026" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-baca", D: "salah-hitung" },
      pembahasan: {
        inti: "Imbalan jasa kepada badan luar negeri dilaporkan dengan BPNR dalam SPT Masa PPh Unifikasi. Masa pajak mengikuti saat terutang (September, saat dicatat sebagai utang), DPP adalah bruto hasil gross-up USD60.000 × kurs KMK Rp16.420, disetor paling lambat 15 Oktober dan dilaporkan paling lama 20 Oktober 2026.",
        jejakHitung: [
          ["Saat terutang", "10 September 2026 → Masa September"],
          ["DPP = USD60.000 × Rp16.420", "Rp985.200.000"],
          ["PPh 26 = 20% × DPP", "Rp197.040.000"],
          ["Batas setor / lapor", "15 Oktober / 20 Oktober 2026"]
        ],
        mengapaSalah: {
          A: "BP26 di SPT Masa PPh 21/26 hanya untuk imbalan pekerjaan/jasa/kegiatan orang pribadi luar negeri; Kraus adalah badan",
          C: "Masa pajak dan kurs ditarik ke tanggal jatuh tempo, padahal penghasilan sudah disediakan untuk dibayarkan sejak 10 September",
          D: "Masa dan kurs ditarik ke tanggal transfer, dan DPP memakai neto USD48.000, padahal DPP gross-up adalah bruto USD60.000"
        },
        jebakan: "Tanggal transfer dan jumlah yang benar-benar ditransfer menggoda untuk dijadikan dasar bukti potong; yang menentukan adalah saat terutang dan bruto hasil gross-up."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 (BPNR dan SPT Masa PPh Unifikasi)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP (lapor 20 hari setelah Masa Pajak berakhir)", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 150,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: BPNR untuk PPh 26 jasa badan luar negeri dan BP26 khusus jasa orang pribadi (PER-11/PJ/2025 Ps. 7 ayat (1) huruf d, Ps. 14 ayat (3) huruf e, Ps. 18 ayat (1) huruf b), setor tanggal 15, lapor 20 hari. Belum pasti: arti 'disediakan untuk dibayarkan' (Ps. 26 ayat (1) UU PPh) sebagai saat utang dicatat tidak dijelaskan naskah, dan pasal kurs KMK pada saat terutang untuk PPh 26 selain jasa orang pribadi tidak ditemukan. Angka kurs rekaan."
    },
    {
      id: "A3-126",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "konsep",
      kesulitan: 3,
      kasusId: "V-A3-11",
      laporanUjian: ["C-2026-10"],
      stem: "V-A3-11 — Untuk jasa supervisi Kraus Technik GmbH, PT Arga Teknik Mandiri pada 10 September 2026 mencatat utang usaha USD48.000 dengan kurs tengah BI Rp16.437 dan utang PPh Pasal 26 Rp197.040.000 (bruto gross-up USD60.000 × 20% × kurs KMK Rp16.420), lalu membebankan keduanya sebagai biaya jasa. Pada 30 September 2026 utang usaha dijabarkan dengan kurs tengah BI Rp16.460, dan pada 3 November 2026 dilunasi dengan kurs transaksi bank Rp16.475 (rekaan). Saat menyusun rekonsiliasi fiskal 2026, staf pajak mengajukan beberapa pendapat. Pendapat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "PPh Pasal 26 Rp197.040.000 adalah PPh yang ditanggung pemberi penghasilan sehingga wajib dikoreksi positif berdasarkan Pasal 9 ayat (1) huruf h UU PPh; biaya jasa yang boleh dikurangkan hanya utang USD48.000", B: "PPh Pasal 26 wajib dihitung ulang dengan kurs tengah BI 30 September 2026 karena utang usaha telah dijabarkan kembali, dan kekurangannya disetor untuk Masa Desember 2026", C: "Biaya jasa diakui sebesar bruto USD60.000 dikalikan kurs tengah BI 10 September 2026, ditambah PPh Pasal 26 Rp197.040.000 sebagai biaya terpisah, karena PPh yang dipotong adalah beban pemberi penghasilan", D: "Seluruh biaya jasa (utang USD48.000 ditambah bagian PPh hasil gross-up Rp197.040.000) dapat dikurangkan sepanjang memenuhi Pasal 6; rugi selisih kurs atas utang USD48.000 sampai pelunasan diperlakukan taat asas sesuai SAK, sedangkan PPh 26 yang sudah dipotong tidak dihitung ulang" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Dengan gross-up, bagian PPh adalah bagian dari imbalan bruto yang dibayarkan kepada Kraus dan dibebankan sebagai biaya jasa, sehingga dapat dikurangkan sepanjang memenuhi Pasal 6. Pasal 9 ayat (1) huruf h, menurut Penjelasannya, hanya melarang pengurangan PPh yang terutang oleh Wajib Pajak yang bersangkutan, sedangkan PPh 26 ini terutang oleh Kraus. Selisih kurs atas utang valas diakui taat asas sesuai SAK (PP 94/2010 Pasal 9 ayat (1)), sedangkan PPh 26 sudah dihitung pada saat terutang dan tidak dihitung ulang.",
        jejakHitung: [
          ["Utang usaha 10 Sep = USD48.000 × Rp16.437", "Rp788.976.000"],
          ["Bagian PPh gross-up (utang PPh)", "Rp197.040.000"],
          ["Biaya jasa yang dapat dikurangkan", "Rp986.016.000"],
          ["Rugi selisih kurs s.d. pelunasan = USD48.000 × (Rp16.475 − Rp16.437)", "Rp1.824.000"]
        ],
        mengapaSalah: {
          A: "Pasal 9 ayat (1) huruf h, menurut Penjelasannya, hanya mengenai PPh yang terutang oleh Wajib Pajak sendiri; PPh 26 terutang oleh Kraus dan dengan gross-up menjadi bagian imbalan bruto",
          B: "Kurs tengah BI adalah kurs pembukuan; penjabaran utang tidak mengubah PPh 26 yang telah terutang dengan kurs KMK",
          C: "Menghitung ganda: bruto USD60.000 sudah memuat bagian PPh, lalu PPh ditambahkan lagi sebagai biaya"
        },
        jebakan: "Larangan Pasal 9 ayat (1) huruf h berlaku untuk PPh yang terutang oleh pemberi penghasilan sendiri, bukan untuk bagian imbalan bruto yang dipakai melunasi PPh penerima. Selisih kurs pembukuan juga tidak mengubah PPh yang telah dipotong."
      },
      dasarHukum: [{ pasal: "Pasal 6 ayat (1) huruf a dan huruf e UU PPh (biaya dan rugi selisih kurs)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 9 ayat (1) huruf h UU PPh dan Penjelasannya (PPh yang terutang oleh Wajib Pajak yang bersangkutan)", berlakuSejak: "2009-01-01" }, { pasal: "PP 94/2010 Pasal 9 ayat (1) (selisih kurs taat asas SAK)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 180,
      verifikasi: "✅"
    },
    {
      id: "A3-127",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kasusId: "V-A3-12",
      laporanUjian: ["B-2026-10"],
      stem: "Data untuk soal ini dan soal berikutnya (V-A3-12): PT Gemilang Pentas Nusantara (promotor, WP badan dalam negeri) menggelar konser Nona Seo Ji-won, penyanyi orang pribadi penduduk Korea Selatan, di Jakarta pada Sabtu, 13 Juni 2026. Nona Seo hanya berada di Indonesia empat hari dan tidak mempunyai BUT. Kontrak menetapkan honorarium Rp2.400.000.000 bersih diterima Nona Seo; seluruh PPh Indonesia ditanggung promotor dengan gross-up. Honorarium ditransfer langsung ke rekening pribadi Nona Seo pada Jumat, 12 Juni 2026. Form DGT Nona Seo sah dan terekam di Coretax sebelum pembayaran. Anggap P3B Indonesia–Korea Selatan memuat pasal artis dan olahragawan yang memberikan hak pemajakan kepada negara tempat pertunjukan tanpa batasan tarif. PPh yang wajib dipotong PT Gemilang adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp304.000.000", C: "Rp480.000.000", D: "Rp600.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-hitung" },
      pembahasan: {
        inti: "Imbalan kepada artis orang pribadi penduduk luar negeri adalah objek PPh 26. Pasal artis dalam P3B tetap memberi hak pemajakan kepada Indonesia sebagai negara tempat pertunjukan, sehingga Form DGT tidak membebaskan dan tarif domestik 20% berlaku atas bruto hasil gross-up.",
        jejakHitung: [
          ["Bruto = Rp2.400.000.000 ÷ (1 − 20%)", "Rp3.000.000.000"],
          ["PPh 26 = 20% × Rp3.000.000.000", "Rp600.000.000"],
          ["Cek: bruto − PPh", "Rp2.400.000.000 (neto sesuai kontrak)"]
        ],
        mengapaSalah: {
          A: "Menganggap Form DGT dan ketiadaan BUT membebaskan; untuk artis dan olahragawan P3B tetap memberi hak pemajakan ke negara tempat pertunjukan",
          B: "Memakai PPh 21 bukan pegawai (Pasal 17 × 50% × Rp2,4 miliar); penyanyi penduduk luar negeri adalah subjek PPh 26, bukan PPh 21",
          C: "Lupa gross-up: 20% × neto Rp2.400.000.000"
        },
        jebakan: "Form DGT bukan tiket bebas pajak: pasal artis dan olahragawan dalam P3B mempertahankan hak pemajakan negara sumber."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh (imbalan jasa, pekerjaan, dan kegiatan)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 32A UU PPh dan PMK 112/2025 (penerapan P3B)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150,
      verifikasi: "✅"
    },
    {
      id: "A3-128",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "prosedur",
      kesulitan: 2,
      kasusId: "V-A3-12",
      formulirRef: "2126.l1.4",
      stem: "V-A3-12 — Atas honorarium konser Nona Seo Ji-won (penyanyi orang pribadi penduduk Korea Selatan, tanpa BUT, Form DGT sah; kontrak neto Rp2.400.000.000 dengan gross-up, dibayar Jumat, 12 Juni 2026), PT Gemilang Pentas Nusantara menyiapkan bukti potong dan SPT Masa di Coretax. Tanggal 15 Juli 2026 jatuh pada hari Rabu dan 20 Juli 2026 pada hari Senin. Perlakuan administrasi yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "BPNR dalam SPT Masa PPh Unifikasi Masa Juni 2026, DPP Rp3.000.000.000 dan PPh Rp600.000.000; setor paling lambat Rabu, 15 Juli 2026 dan lapor paling lambat Senin, 20 Juli 2026", B: "BP21 bukan pegawai dalam SPT Masa PPh 21/26 Masa Juni 2026, DPP 50% × Rp2.400.000.000 dengan tarif Pasal 17; setor paling lambat Rabu, 15 Juli 2026", C: "BP26 dalam SPT Masa PPh 21/26 Masa Juni 2026, DPP Rp3.000.000.000 dan PPh Rp600.000.000; setor paling lambat Rabu, 15 Juli 2026 dan lapor paling lambat Senin, 20 Juli 2026", D: "BP26 dalam SPT Masa PPh 21/26 Masa Juni 2026, DPP Rp2.400.000.000 (jumlah yang ditransfer) dan PPh Rp480.000.000; setor paling lambat Rabu, 15 Juli 2026 dan lapor paling lambat Senin, 20 Juli 2026" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-hitung" },
      pembahasan: {
        inti: "Imbalan pekerjaan, jasa, atau kegiatan orang pribadi luar negeri dipotong PPh 26 dengan BP26 dan dilaporkan dalam SPT Masa PPh 21/26, bukan BPNR. DPP adalah bruto hasil gross-up Rp3 miliar; setor tanggal 15 dan lapor 20 hari setelah Masa Juni berakhir.",
        jejakHitung: [
          ["Penerima", "orang pribadi luar negeri → BP26 (SPT Masa PPh 21/26)"],
          ["DPP bruto gross-up", "Rp3.000.000.000"],
          ["PPh 26 = 20% × DPP", "Rp600.000.000"],
          ["Setor / lapor", "15 Juli / 20 Juli 2026"]
        ],
        mengapaSalah: {
          A: "BPNR (SPT Masa Unifikasi) dipakai untuk PPh 26 selain imbalan pekerjaan/jasa/kegiatan orang pribadi, misalnya royalti atau jasa kepada badan",
          B: "Memperlakukan penyanyi luar negeri sebagai bukan pegawai dalam negeri (PPh 21); subjeknya WPLN sehingga PPh 26",
          D: "DPP memakai neto yang ditransfer; dengan gross-up DPP adalah bruto Rp3 miliar"
        },
        jebakan: "Kode bukti potong ditentukan oleh jenis penerima: orang pribadi luar negeri yang menerima imbalan jasa → BP26, badan luar negeri → BPNR."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 Pasal 4 ayat (1), Pasal 6 ayat (1) huruf d, Pasal 7 ayat (1) huruf d, dan Pasal 14 ayat (3) huruf e (BP26 dalam SPT Masa PPh 21/26)", berlakuSejak: "2025-05-22" }, { pasal: "PMK 81/2024 Pasal 94 ayat (2) huruf g", berlakuSejak: "2025-01-01" }, { pasal: "Pasal 3 ayat (3) huruf a UU KUP", berlakuSejak: "2008-01-01" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A3-129", topik: "A3.8", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2,
      stem: "PT Kreasi Digital Nusantara menyelenggarakan Lomba Desain Aplikasi Internasional 2026 secara daring. Juara pertama, Tuan Lucas Moreau, orang pribadi penduduk Prancis yang tidak pernah berada di Indonesia dan tidak mempunyai BUT, menerima hadiah uang Rp400.000.000 yang ditransfer pada Jumat, 18 September 2026. Pemenang ditentukan oleh dewan juri berdasarkan penilaian karya, bukan melalui undian. Tuan Lucas tidak menyerahkan Form DGT. PPh yang wajib dipotong PT Kreasi atas hadiah tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp0", B: "Rp60.000.000", C: "Rp80.000.000", D: "Rp100.000.000" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hadiah dan penghargaan yang dibayarkan kepada WPLN selain BUT adalah objek PPh 26 sebesar 20% × bruto. Karena Form DGT tidak diserahkan, tarif P3B tidak dapat diterapkan.",
        jejakHitung: [["Objek", "hadiah lomba kepada WPLN → PPh 26"], ["Tanpa Form DGT → tarif", "20%"], ["PPh 26 = 20% × Rp400.000.000", "Rp80.000.000"]],
        mengapaSalah: { A: "Menganggap hadiah kepada penerima yang tidak pernah hadir di Indonesia bukan objek; PPh 26 melekat pada pembayar dalam negeri", B: "Memakai tarif PPh 23 atas hadiah (15%), padahal penerima adalah WPLN", D: "Memakai tarif PPh final hadiah undian 25%, padahal pemenang ditentukan juri, bukan undian" },
        jebakan: "Kata 'hadiah' memancing tarif undian 25% atau PPh 23 15%; tentukan dulu subjek penerima (WPLN) dan cara perolehan hadiahnya."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh (hadiah dan penghargaan)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025 (tanpa Form DGT berlaku tarif 20%)", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 110, verifikasi: "✅"
    },
    {
      id: "A3-130", topik: "A3.8", tingkat: ["B", "C"], jenis: "kasus", kesulitan: 3,
      kutipan: "Pasal 26 ayat (1) UU PPh (parafrase): penghasilan yang dibayarkan kepada Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia yang dipotong 20% dari jumlah bruto meliputi antara lain pensiun dan pembayaran berkala lainnya.",
      stem: "Tuan Hendra Lim, WNI, pensiun dari PT Sinar Kapuas pada 2024 dan sejak Februari 2025 menetap permanen bersama keluarganya di Perth, Australia. Sepanjang 2025–2026 ia tidak pernah berada di Indonesia dan telah memenuhi syarat sebagai Wajib Pajak luar negeri. Dana Pensiun Pemberi Kerja PT Sinar Kapuas membayarkan manfaat pensiun bulanan Rp12.000.000 kepadanya pada 25 Oktober 2026. Tuan Hendra tidak menyerahkan Form DGT. Staf dana pensiun masih memperlakukannya sebagai pensiunan berkala dalam negeri. PPh yang seharusnya dipotong atas manfaat pensiun Oktober 2026 adalah ...",
      kataKualifikasi: ["seharusnya"],
      opsi: { A: "Rp2.360.000", B: "Rp2.400.000", C: "Rp600.000", D: "Rp0" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Setelah menjadi WPLN, manfaat pensiun bulanan yang dibayarkan dana pensiun dalam negeri dipotong PPh 26 sebesar 20% × bruto. Pengurang PPh 21 seperti biaya pensiun dan PTKP tidak berlaku bagi WPLN, dan tarif P3B tidak dapat dipakai tanpa Form DGT.",
        jejakHitung: [["Status penerima", "WPLN → PPh 26, bukan PPh 21"], ["DPP", "bruto Rp12.000.000 (tanpa biaya pensiun/PTKP)"], ["PPh 26 = 20% × Rp12.000.000", "Rp2.400.000"]],
        mengapaSalah: { A: "Mengurangkan biaya pensiun Rp200.000 seperti PPh 21; PPh 26 dihitung dari jumlah bruto", C: "Memakai tarif 5% pensiun yang dibayar sekaligus (PP 68/2009); manfaat ini dibayar bulanan kepada WPLN", D: "Menganggap pensiun hanya dipajaki di negara domisili berdasarkan P3B, padahal Form DGT tidak diserahkan" },
        jebakan: "Status subjek berubah: kewarganegaraan WNI tidak membuat penerima tetap WPDN bila ia telah menjadi penduduk luar negeri."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) UU PPh (pensiun dan pembayaran berkala lainnya)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 2 ayat (4) UU PPh (subjek pajak luar negeri)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 112/2025", berlakuSejak: "2025-12-31" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-131",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      stem: "Pada Masa Pajak Oktober 2026, PT Gresik Logam Presisi (WP badan dalam negeri) melakukan tiga pembayaran kepada Tokai Kikai Co., Ltd (Jepang, tidak mempunyai BUT di Indonesia dan tidak menyerahkan Form DGT): (1) harga mesin press hidrolik baru Rp2.400.000.000; mesin dikirim dari Osaka dan PPh Pasal 22 impor telah dilunasi saat pengeluaran barang dari kawasan pabean; (2) imbalan jasa pelatihan operator mesin tersebut Rp350.000.000 yang ditagih dengan kontrak dan faktur terpisah dari harga mesin; pemasangan mesin dikerjakan sendiri oleh tim teknik PT Gresik, sedangkan pelatihan dilakukan dua instruktur Tokai di pabrik Gresik selama 18 hari dan merupakan satu-satunya kegiatan Tokai di Indonesia dalam 12 bulan terakhir; dan (3) harga satu unit mesin bubut bekas milik Tokai Rp1.200.000.000; mesin itu sejak 2023 disewakan Tokai kepada PT Gresik dan selama ini berada di pabrik Gresik. Perkiraan penghasilan neto atas penjualan harta adalah 25% dari harga jual. Jumlah PPh Pasal 26 yang wajib dipotong PT Gresik adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp70.000.000", B: "Rp250.000.000", C: "Rp130.000.000", D: "Rp310.000.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-hitung" },
      pembahasan: {
        inti: "Yang menentukan adalah jenis dan letak barang serta pemisahan tagihan. Mesin baru yang dikirim dari Osaka adalah pembelian barang dari luar negeri sehingga bukan objek PPh 26 (pelunasannya melalui PPh 22 impor). Jasa pelatihan yang ditagih terpisah adalah imbalan jasa kepada WPLN yang tidak mempunyai BUT: dipotong PPh 26 20% dari jumlah bruto, dan tanpa Form DGT ketentuan P3B tidak dapat diterapkan. Mesin bubut bekas memang berada di Indonesia, tetapi PMK 82/PMK.03/2009 Pasal 2 ayat (4) hanya memotong PPh 26 atas penjualan perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, dan/atau pesawat terbang ringan; mesin tidak termasuk.",
        jejakHitung: [
          ["(1) Mesin baru dari Osaka (impor)", "bukan objek PPh 26"],
          ["(2) Jasa pelatihan terpisah: 20% × Rp350.000.000", "Rp70.000.000"],
          ["(3) Mesin bubut di Gresik", "bukan harta dalam daftar PMK 82/PMK.03/2009 Pasal 2 ayat (4): tidak dipotong"],
          ["Total PPh 26", "Rp70.000.000"]
        ],
        mengapaSalah: {
          B: "Mengenakan 5% atas kedua mesin (Rp120.000.000 dan Rp60.000.000); mesin dari Osaka adalah pembelian impor dan mesin bubut tidak termasuk daftar harta PMK 82/PMK.03/2009",
          C: "Mengenakan 5% atas mesin bubut (Rp60.000.000) berdasarkan rumusan umum Pasal 26 ayat (2), padahal PMK 82/PMK.03/2009 Pasal 2 ayat (4) membatasi harta yang dipotong pada perhiasan mewah, emas, barang antik, lukisan, kendaraan, kapal pesiar, dan sejenisnya dalam daftar",
          D: "Memotong 20% × harga jual mesin bubut (Rp240.000.000) tanpa perkiraan neto, padahal mesin bubut bahkan tidak termasuk harta yang dipotong"
        },
        jebakan: "Pasal 26 ayat (2) UU PPh berbunyi umum, tetapi PMK 82/PMK.03/2009 membatasi pemotongannya pada daftar harta tertentu; mesin tidak termasuk. Tokai tidak mempunyai BUT: pelatihan 18 hari belum melampaui uji lebih dari 60 hari dalam 12 bulan untuk pemberian jasa (Pasal 2 ayat (5) huruf m UU PPh), dan pemasangan dikerjakan PT Gresik sendiri. Seandainya Tokai yang memasang mesin, pekerjaan itu dapat tergolong proyek instalasi (huruf l) yang menurut UU PPh tidak mengenal batas waktu."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (1) huruf d UU PPh (imbalan jasa kepada WPLN)", berlakuSejak: "2009-01-01" }, { pasal: "Pasal 26 ayat (2) UU PPh (penjualan harta di Indonesia)", berlakuSejak: "2009-01-01" }, { pasal: "PMK 82/PMK.03/2009 Pasal 2 ayat (1), ayat (3), dan ayat (4) (20% × perkiraan neto 25%; hanya harta dalam daftar)", berlakuSejak: "2009-04-22" }, { pasal: "Pasal 2 ayat (5) huruf l dan huruf m UU PPh (BUT proyek instalasi; BUT pemberian jasa lebih dari 60 hari dalam 12 bulan)", berlakuSejak: "2009-01-01" }],
      anggaranDetik: 170,
      verifikasi: "✅"
    },
    {
      id: "A3-132",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 3,
      laporanUjian: ["B-2026-10"],
      kutipan: "Pasal 26 ayat (2) UU PPh (parafrase): atas penghasilan dari penjualan atau pengalihan harta di Indonesia, kecuali yang diatur dalam Pasal 4 ayat (2), yang diterima Wajib Pajak luar negeri selain bentuk usaha tetap di Indonesia, dipotong pajak sebesar 20% dari perkiraan penghasilan neto.",
      stem: "Steinmetz Holding GmbH (Jerman, tidak mempunyai BUT di Indonesia, tidak menyerahkan Form DGT) pada Rabu, 21 Oktober 2026 menjual kepada PT Prima Cetak Nusantara: (1) dua unit mobil yang selama ini disewakan kepada PT Prima dan berada di pabrik PT Prima di Karawang seharga Rp4.000.000.000; dan (2) sebidang tanah beserta gudang di Cikarang seharga Rp6.000.000.000 dengan akta jual beli di hadapan PPAT. Perkiraan penghasilan neto atas penjualan harta adalah 25% dari harga jual. PPh Pasal 26 yang wajib dipotong PT Prima atas pembayaran kepada Steinmetz adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp800.000.000", B: "Rp500.000.000", C: "Rp350.000.000", D: "Rp200.000.000" },
      kunci: "D",
      jebakanOpsi: { A: "salah-hitung", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Penjualan mobil yang berada di Indonesia oleh WPLN termasuk harta yang dipotong PPh 26 menurut PMK 82/PMK.03/2009 Pasal 2 ayat (4): 20% × perkiraan neto 25% = 5% × harga jual, bersifat final. Pengalihan tanah dan bangunan dikecualikan dari Pasal 26 ayat (2) karena diatur dalam Pasal 4 ayat (2) (PPh final 2,5% yang disetor sendiri oleh penjual sebelum akta ditandatangani), sehingga tidak masuk PPh 26.",
        jejakHitung: [
          ["Mobil: perkiraan neto = 25% × Rp4.000.000.000", "Rp1.000.000.000"],
          ["PPh 26 = 20% × Rp1.000.000.000", "Rp200.000.000"],
          ["Tanah dan gudang Rp6.000.000.000", "dikecualikan (PPh Pasal 4 ayat (2) final)"],
          ["PPh 26 yang dipotong", "Rp200.000.000"]
        ],
        mengapaSalah: {
          A: "Memakai 20% × harga jual tanpa perkiraan penghasilan neto 25%",
          B: "Mengenakan 5% juga atas tanah dan gudang, padahal Pasal 26 ayat (2) mengecualikan yang diatur dalam Pasal 4 ayat (2)",
          C: "Menjumlahkan PPh final tanah 2,5% (Rp150.000.000) ke dalam PPh 26 yang dipotong pembeli"
        },
        jebakan: "Kata 'kecuali yang diatur dalam Pasal 4 ayat (2)' memisahkan tanah/bangunan dari tarif efektif 5% PPh 26. Ingat pula bahwa PMK 82/PMK.03/2009 hanya memotong penjualan perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, dan/atau pesawat terbang ringan; penjualan mesin pabrik tidak dipotong."
      },
      dasarHukum: [{ pasal: "Pasal 26 ayat (2) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 82/PMK.03/2009 Pasal 2 ayat (1), ayat (3), dan ayat (4) (20% × perkiraan neto 25%; daftar harta termasuk mobil)", berlakuSejak: "2009-04-22" }, { pasal: "PP 34/2016 Pasal 2 (PPh final pengalihan tanah/bangunan)", berlakuSejak: "2016-09-07" }],
      anggaranDetik: 160,
      verifikasi: "✅"
    },
    {
      id: "A3-133",
      topik: "A3.8",
      tingkat: ["A", "B", "C"],
      jenis: "konsep",
      kesulitan: 2,
      laporanUjian: ["B-2026-10"],
      stem: "PT Nusa Batubara Ekspor (WP badan dalam negeri) mencarter kapal curah milik Pacific Star Shipping Ltd, perusahaan pelayaran yang berkedudukan di Negara Q dan tidak mempunyai BUT di Indonesia, untuk mengangkut batubara dari Samarinda ke pelabuhan di Filipina. Uang tambang Rp2.000.000.000 dibayar pada 5 November 2026. Sebelum pembayaran, Pacific Star menyerahkan Form DGT yang sah dan terekam di Coretax serta memenuhi seluruh syarat penerapan P3B. Anggap P3B Indonesia–Negara Q mengatur bahwa laba dari pengoperasian kapal dalam jalur lalu lintas internasional hanya dikenai pajak di negara tempat kedudukan perusahaan pelayaran. Perlakuan PPh yang tepat bagi PT Nusa adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Memotong PPh Pasal 15 sebesar 2,64% atau Rp52.800.000, karena norma penghitungan khusus Pasal 15 bersifat final dan tidak dapat dikurangi oleh P3B", B: "Tidak memotong PPh Pasal 15 karena hak pemajakan ada pada Negara Q berdasarkan P3B, tetapi tetap membuat BPNR dengan fasilitas P3B dan melaporkannya dalam SPT Masa PPh Unifikasi", C: "Memotong PPh Pasal 26 sebesar 20% atau Rp400.000.000, karena uang tambang kapal merupakan sewa harta kepada WPLN", D: "Memotong PPh Pasal 15 sebesar 1,2% atau Rp24.000.000, karena kapal dimuat di pelabuhan Indonesia" },
      kunci: "B",
      jebakanOpsi: { A: "lupa-pasal", C: "salah-klasifikasi", D: "angka-usang" },
      pembahasan: {
        inti: "Uang tambang kepada perusahaan pelayaran luar negeri diatur dengan norma KMK 417/KMK.04/1996 (2,64% × peredaran bruto, final); SE-32/PJ.4/1996 butir 2 menyebut cakupannya perusahaan pelayaran luar negeri yang berusaha melalui BUT di Indonesia, sedangkan Pacific Star tidak mempunyai BUT. Apa pun jenis PPh yang dipakai tanpa P3B, Pasal 32A UU PPh mendahulukan P3B: karena syarat penerapannya terpenuhi dan laba pelayaran internasional hanya dipajaki Negara Q, Indonesia tidak memotong pajak; fasilitas P3B tetap didokumentasikan melalui BPNR.",
        jejakHitung: [
          ["Pembanding tanpa P3B (norma KMK 417/KMK.04/1996): 2,64% × Rp2.000.000.000", "Rp52.800.000"],
          ["Dengan P3B (hak pemajakan negara domisili) dan Form DGT sah", "Rp0"]
        ],
        mengapaSalah: {
          A: "Norma Pasal 15 adalah ketentuan domestik yang tetap tunduk pada P3B berdasarkan Pasal 32A UU PPh",
          C: "P3B memberikan hak pemajakan laba pengoperasian kapal dalam lalu lintas internasional hanya kepada Negara Q, sehingga tidak ada PPh yang dipotong, baik dengan PPh 26 20% maupun dengan norma PPh 15",
          D: "Tarif 1,2% berlaku untuk perusahaan pelayaran dalam negeri; WPLN memakai 2,64%"
        },
        jebakan: "Norma khusus PPh 15 maupun PPh 26 bukan pengecualian dari P3B; P3B dan Form DGT yang sah tetap mendahului. Catat juga bahwa SE-32/PJ.4/1996 menyebut KMK 417/KMK.04/1996 mencakup perusahaan pelayaran luar negeri yang berusaha melalui BUT."
      },
      dasarHukum: [{ pasal: "Pasal 15 UU PPh; KMK 417/KMK.04/1996 Pasal 1 dan Pasal 2 ayat (2) dan (3) (pelayaran/penerbangan luar negeri 2,64% final)", berlakuSejak: "1996-06-14" }, { pasal: "SE-32/PJ.4/1996 butir 2 (cakupan KMK 417/KMK.04/1996: perusahaan pelayaran luar negeri yang berusaha melalui BUT)", berlakuSejak: "1996-08-29" }, { pasal: "Pasal 32A UU PPh; PMK 112/2025 Pasal 2 ayat (5) dan (6), Pasal 10 ayat (3), Pasal 14 ayat (2) (penerapan P3B dan bukti potong walau nihil)", berlakuSejak: "2025-12-31" }, { pasal: "PER-11/PJ/2025 Pasal 14 ayat (3) huruf b dan Pasal 18 ayat (1) huruf b (PPh 15 dalam SPT Masa PPh Unifikasi; BPNR)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 130,
      verifikasi: "✅"
    },
    {
      id: "A3-134", topik: "A3.2", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A3-13", laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 21 ayat (1) huruf a UU PPh (parafrase): pemotongan, penyetoran, dan pelaporan pajak atas penghasilan sehubungan dengan pekerjaan, jasa, atau kegiatan dengan nama dan dalam bentuk apa pun yang diterima atau diperoleh Wajib Pajak orang pribadi dalam negeri wajib dilakukan oleh pemberi kerja yang membayar gaji, upah, honorarium, tunjangan, dan pembayaran lain sebagai imbalan sehubungan dengan pekerjaan yang dilakukan oleh pegawai atau bukan pegawai.",
      stem: "Data untuk soal ini dan dua soal berikutnya (V-A3-13): Mr. Lukas Brenner (WN Jerman) adalah pegawai tetap PT Hanara Mineral Indonesia sejak 2024 dan selama 2026 menjadi subjek pajak dalam negeri; statusnya pada 1 Januari 2026 tidak kawin tanpa tanggungan (TK/0). Kontrak kerjanya dalam dolar: gaji pokok USD4.000 dan tunjangan perumahan tunai USD700 per bulan, tanpa iuran pensiun yang dibayar sendiri dan tanpa penghasilan lain. Menurut kontrak kerja, gaji bulanan jatuh tempo dan dibayar setiap tanggal 25; persetujuan slip oleh direksi hanya proses internal penggajian. Slip gaji November 2026 disetujui direksi pada Selasa, 24 November 2026, dan gaji dibayar pada Rabu, 25 November 2026; untuk itu PT Hanara membeli USD dari rekening rupiahnya dengan kurs jual bank Rp16.540. Data kurs USD (rekaan): kurs KMK periode 18–24 November 2026 Rp16.520; kurs KMK periode 25 November–1 Desember 2026 Rp16.485; kurs tengah BI 25 November 2026 Rp16.495. Petikan TER kategori A: bruto > Rp68.600.000 s.d. Rp77.500.000 tarif 22%; > Rp77.500.000 s.d. Rp89.000.000 tarif 23%. PPh Pasal 21 Masa Pajak November 2026 yang dipotong atas Mr. Lukas adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp17.858.120",
        B: "Rp17.831.095",
        C: "Rp17.045.490",
        D: "Rp17.879.740"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 21 terutang saat gaji dibayar (Rabu, 25 November 2026), hari pertama periode KMK 25 November–1 Desember, sehingga bruto USD4.700 dirupiahkan dengan Rp16.485. Bruto Rp77.479.500 masih berada pada lapisan TER kategori A 22%; ketiga kurs lain mendorong bruto melewati Rp77.500.000 sehingga tarifnya ikut berubah menjadi 23%.",
        jejakHitung: [["Bruto USD = 4.000 + 700", "USD4.700"], ["Saat terutang Rabu, 25 November 2026 → kurs KMK periode 25 November–1 Desember", "Rp16.485"], ["Bruto = 4.700 × 16.485", "Rp77.479.500"], ["Kategori TK/0 → TER A; Rp77.479.500 ≤ Rp77.500.000", "22%"], ["PPh 21 = 22% × Rp77.479.500", "Rp17.045.490"]],
        mengapaSalah: {
          A: "Memakai kurs KMK periode 18–24 November karena slip gaji disetujui 24 November. Persetujuan slip adalah proses internal, bukan pembayaran dan bukan saat gaji terutang menurut kontrak (tanggal 25), sehingga kurs periode 18–24 November, bruto Rp77.644.000, dan TER 23% keliru",
          B: "Memakai kurs tengah BI (Rp16.495) yang dipakai pembukuan; bruto Rp77.526.500 lalu salah masuk lapisan 23%",
          D: "Memakai kurs jual bank (Rp16.540) yang hanya menentukan rupiah yang dikeluarkan PT Hanara; bruto Rp77.738.000 dan TER 23% keliru"
        },
        jebakan: "Bruto yang dekat batas lapisan TER membuat kesalahan kurs sekaligus menjadi kesalahan tarif."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) huruf a UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PP 58/2023 Lampiran A (TER kategori A)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "KMK nilai kurs sebagai dasar pelunasan bea masuk, PPN dan PPnBM, bea keluar, dan PPh periode 25 November–1 Desember 2026 (kurs pajak mingguan)", berlakuSejak: "2026-11-25" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-135", topik: "A3.1", tingkat: ["A", "B", "C"], jenis: "konsep", kesulitan: 2, kasusId: "V-A3-13", laporanUjian: ["C-2026-10"],
      stem: "V-A3-13 — Gaji November 2026 Mr. Lukas Brenner (pegawai tetap PT Hanara Mineral Indonesia, WN Jerman yang menjadi subjek pajak dalam negeri dan tetap tinggal di Jakarta) sebesar USD4.700 dibayar pada Rabu, 25 November 2026; atas permintaannya, gaji ditransfer ke rekening miliknya di sebuah bank di Frankfurt. Untuk pembayaran itu PT Hanara membeli USD dengan kurs jual bank Rp16.540 sehingga mengeluarkan Rp77.738.000. Kurs KMK periode 25 November–1 Desember 2026 Rp16.485 dan kurs tengah BI 25 November 2026 Rp16.495 (rekaan). Dalam rapat penutupan buku November, staf pajak dan staf akuntansi mengajukan beberapa pendapat. Pendapat yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "DPP PPh 21 harus Rp77.738.000 (kurs jual bank) karena itulah rupiah yang benar-benar dikeluarkan PT Hanara, sehingga PPh 21 November dihitung dengan TER 23%",
        B: "DPP PPh 21 tetap USD4.700 × kurs KMK Rp16.485 = Rp77.479.500 dengan TER 22%; biaya gaji di pembukuan dicatat Rp77.738.000 sesuai transaksi, dan selisih Rp258.500 tidak mengubah PPh 21 maupun bukti potong",
        C: "DPP PPh 21 harus memakai kurs tengah BI Rp16.495 karena pembukuan PT Hanara disusun sesuai SAK, sehingga kurs pajak wajib disamakan dengan kurs pembukuan",
        D: "Karena gaji ditransfer ke rekening di Jerman, imbalan itu menjadi objek PPh Pasal 26 sebesar 20% × Rp77.479.500 dan dilaporkan dengan bukti potong BP26"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Kurs pajak (KMK) dan kurs pembukuan mempunyai fungsi berbeda: DPP PPh 21 dikunci pada kurs KMK saat gaji dibayar, sedangkan pembukuan mencatat rupiah yang benar-benar dikeluarkan. Perbedaan keduanya tidak menyesuaikan PPh yang dipotong. Status subjek pajak ditentukan oleh tempat tinggal dan lamanya berada di Indonesia, bukan lokasi rekening penerima.",
        jejakHitung: [["DPP PPh 21 = 4.700 × 16.485 (kurs KMK)", "Rp77.479.500"], ["Rupiah yang dikeluarkan = 4.700 × 16.540 (kurs jual bank)", "Rp77.738.000"], ["Perbedaan (tidak memengaruhi PPh 21)", "Rp258.500"]],
        mengapaSalah: {
          A: "Kurs bank adalah kurs transaksi; DPP pemotongan PPh dalam valuta asing memakai kurs KMK saat terutang",
          C: "Kurs tengah BI dipakai untuk penjabaran pos moneter dalam pembukuan, tidak untuk DPP pemotongan",
          D: "Mr. Lukas subjek pajak dalam negeri; lokasi rekening tidak mengubahnya menjadi WPLN, sehingga tetap PPh 21 dengan TER"
        },
        jebakan: "Tiga kurs, tiga fungsi: KMK untuk DPP pajak, kurs transaksi untuk pencatatan pembayaran, kurs tengah BI untuk penjabaran akhir periode."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (3) huruf a dan Pasal 21 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "PP 94/2010 Pasal 9 (selisih kurs mengikuti pembukuan taat asas)", berlakuSejak: "2010-12-30" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-136", topik: "A3.2", tingkat: ["B", "C"], jenis: "hitung", kesulitan: 3, kasusId: "V-A3-13", laporanUjian: ["C-2026-10"],
      stem: "V-A3-13 — Mr. Lukas Brenner (TK/0, pegawai tetap PT Hanara Mineral Indonesia sepanjang 2026, tanpa iuran pensiun) menerima gaji dan tunjangan USD4.700 setiap bulan. Bruto Januari–November 2026 yang telah dirupiahkan dengan kurs KMK pada setiap tanggal pembayaran berjumlah Rp842.315.400, dan PPh Pasal 21 Januari–November yang telah dipotong dengan TER berjumlah Rp185.309.388. Pada Rabu, 23 Desember 2026 PT Hanara membayar gaji dan tunjangan Desember USD4.700 serta bonus tahunan USD5.000. Data kurs USD (rekaan): kurs KMK periode 23–29 Desember 2026 Rp16.540; kurs tengah BI 31 Desember 2026 Rp16.582. Jumlah bruto Januari–Desember dalam USD adalah USD61.400. PPh Pasal 21 yang dipotong pada Masa Pajak Desember 2026 adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp43.318.260",
        B: "Rp45.357.412",
        C: "Rp41.638.612",
        D: "Rp41.516.512"
      },
      kunci: "D",
      jebakanOpsi: { A: "angka-usang", B: "salah-hitung", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Desember adalah Masa Pajak Terakhir: PPh setahun dihitung dengan tarif Pasal 17 atas bruto setahun dalam rupiah, yaitu jumlah rupiah Januari–November (masing-masing dengan kurs KMK saat dibayar) ditambah pembayaran Desember dengan kurs KMK 23 Desember. Total USD setahun tidak boleh dirupiahkan ulang dengan satu kurs.",
        jejakHitung: [["Bruto Desember = 9.700 × 16.540", "Rp160.438.000"], ["Bruto setahun = 842.315.400 + 160.438.000", "Rp1.002.753.400"], ["Biaya jabatan (maksimum)", "Rp6.000.000"], ["Neto setahun", "Rp996.753.400"], ["PTKP TK/0", "Rp54.000.000"], ["PKP (dibulatkan ke bawah ribuan)", "Rp942.753.000"], ["PPh Ps. 17: 3.000.000 + 28.500.000 + 62.500.000 + 30% × 442.753.000", "Rp226.825.900"], ["PPh 21 Desember = 226.825.900 − 185.309.388", "Rp41.516.512"]],
        mengapaSalah: {
          A: "Menerapkan TER 27% atas bruto Desember Rp160.438.000; Masa Pajak Terakhir wajib memakai tarif Pasal 17 setahun",
          B: "Merupiahkan ulang seluruh USD61.400 dengan kurs KMK Desember (bruto Rp1.015.556.000); bruto Januari–November sudah terkunci pada kurs KMK masing-masing bulan",
          C: "Merupiahkan pembayaran Desember dengan kurs tengah BI 31 Desember (bruto Desember Rp160.845.400); kurs BI bukan kurs pajak dan tanggal neraca bukan saat terutang"
        },
        jebakan: "Rupiah setiap bulan dikunci pada kurs KMK saat dibayar; di Masa Pajak Terakhir yang dijumlahkan adalah rupiahnya, bukan dolarnya."
      },
      dasarHukum: [{ pasal: "Pasal 17 ayat (1) huruf a dan Pasal 21 UU PPh", berlakuSejak: "2022-01-01" }, { pasal: "PP 58/2023 Pasal 2 (Masa Pajak Terakhir)", berlakuSejak: "2024-01-01" }, { pasal: "PMK 168/2023", berlakuSejak: "2024-01-01" }, { pasal: "KMK nilai kurs periode 23–29 Desember 2026 (kurs pajak mingguan)", berlakuSejak: "2026-12-23" }],
      anggaranDetik: 210, verifikasi: "✅"
    },
    {
      id: "A3-137", topik: "A3.7", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, kasusId: "V-A3-14", laporanUjian: ["C-2026-10"],
      stem: "Data untuk soal ini dan soal berikutnya (V-A3-14): PT Selaras Energi Nusantara (WP badan dalam negeri, pembukuan dalam Rupiah) membangun pembangkit listrik tenaga surya atap di pabriknya. Pada Selasa, 28 Juli 2026 PT Selaras menandatangani kontrak pekerjaan konstruksi (pelaksana) dengan PT Bangun Surya Konstruksi, badan dalam negeri yang memiliki sertifikat badan usaha kualifikasi menengah, senilai USD200.000 belum termasuk PPN. Uang muka 20% (USD40.000) dibayar pada Rabu, 5 Agustus 2026. Termin I 50% (USD100.000): berita acara kemajuan pekerjaan ditandatangani Jumat, 30 Oktober 2026, faktur diterima 2 November 2026, dan pembayaran dilakukan Rabu, 18 November 2026. Sisa 30% baru akan dibayar pada 2027. Data kurs USD (rekaan): kurs KMK periode 22–28 Juli 2026 Rp16.290; periode 5–11 Agustus 2026 Rp16.310; periode 28 Oktober–3 November 2026 Rp16.450; periode 18–24 November 2026 Rp16.520; kurs tengah BI 18 November 2026 Rp16.534. Jumlah PPh Pasal 4 ayat (2) yang dipotong PT Selaras selama 2026 atas kontrak ini adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp61.289.200",
        B: "Rp60.435.900",
        C: "Rp60.881.100",
        D: "Rp61.066.600"
      },
      kunci: "D",
      jebakanOpsi: { A: "salah-baca", B: "salah-baca", C: "salah-baca" },
      pembahasan: {
        inti: "PPh final jasa konstruksi dipotong pengguna jasa pada setiap pembayaran, termasuk uang muka dan termin. Setiap pembayaran dirupiahkan dengan kurs KMK yang berlaku pada tanggal pembayaran itu, lalu dikalikan 2,65% (pelaksana kualifikasi menengah).",
        jejakHitung: [["Uang muka: 40.000 × 16.310 (5 Agustus)", "Rp652.400.000"], ["Termin I: 100.000 × 16.520 (18 November)", "Rp1.652.000.000"], ["Jumlah dibayar 2026", "Rp2.304.400.000"], ["PPh final = 2,65% × Rp2.304.400.000", "Rp61.066.600"]],
        mengapaSalah: {
          A: "Merupiahkan seluruh USD140.000 dengan kurs pembayaran termin I; uang muka sudah dipotong 5 Agustus dengan kursnya sendiri",
          B: "Memakai kurs KMK saat kontrak ditandatangani; penandatanganan kontrak bukan saat pemotongan",
          C: "Memakai kurs KMK saat berita acara kemajuan pekerjaan untuk termin I; pemotongan dilakukan saat pembayaran"
        },
        jebakan: "Kontrak, berita acara, faktur, dan pembayaran jatuh pada minggu kurs yang berbeda; PPh final konstruksi mengikuti tanggal pembayaran."
      },
      dasarHukum: [{ pasal: "PP 9/2022 Pasal 3 ayat (1) (tarif 2,65% pelaksana kualifikasi menengah; dipotong saat pembayaran)", berlakuSejak: "2022-02-21" }, { pasal: "Pasal 4 ayat (2) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK nilai kurs periode 5–11 Agustus 2026 dan 18–24 November 2026 (kurs pajak mingguan)", berlakuSejak: "2026-08-05" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-138", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, kasusId: "V-A3-14", laporanUjian: ["C-2026-10"],
      stem: "V-A3-14 — Untuk proyek yang sama, PT Selaras Energi Nusantara menyewa satu unit excavator dari PT Prima Alat Berat (badan dalam negeri, ber-NPWP, PKP) selama November 2026 dengan harga sewa USD25.000 dan PPN USD2.750. Menurut kontrak, sewa jatuh tempo pada Senin, 30 November 2026; PT Selaras mencatat utang sewa pada tanggal itu tetapi baru mentransfer pembayaran pada Rabu, 9 Desember 2026 dengan kurs jual bank Rp16.620. Data kurs USD (rekaan): kurs KMK periode 25 November–1 Desember 2026 Rp16.485; periode 9–15 Desember 2026 Rp16.590. Tanggal 15 Desember 2026 jatuh pada hari Selasa. Perlakuan PPh Pasal 23 yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "Masa Desember 2026; PPh 23 = 2% × USD25.000 × Rp16.590 = Rp8.295.000; setor paling lambat 15 Januari 2027",
        B: "Masa November 2026; PPh 23 = 2% × USD25.000 × Rp16.485 = Rp8.242.500; setor paling lambat Selasa, 15 Desember 2026",
        C: "Masa November 2026; PPh 23 = 2% × USD27.750 × Rp16.485 = Rp9.149.175; setor paling lambat Selasa, 15 Desember 2026",
        D: "Masa Desember 2026; PPh 23 = 2% × USD25.000 × Rp16.620 = Rp8.310.000; setor paling lambat 15 Januari 2027"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 23 terutang pada saat dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo, mana yang lebih dahulu. Jatuh tempo (30 November) mendahului transfer, sehingga PPh terutang Masa November dengan kurs KMK periode 25 November–1 Desember; DPP sewa harta tidak termasuk PPN.",
        jejakHitung: [["Saat terutang: jatuh tempo Senin, 30 November 2026", "Masa November 2026"], ["DPP = 25.000 × 16.485", "Rp412.125.000"], ["PPh 23 = 2% × Rp412.125.000", "Rp8.242.500"], ["Batas setor", "Selasa, 15 Desember 2026"]],
        mengapaSalah: {
          A: "Menarik saat terutang ke tanggal transfer; jatuh tempo 30 November lebih dahulu",
          C: "Memasukkan PPN ke DPP; jumlah bruto sewa harta tidak termasuk PPN",
          D: "Memakai kurs jual bank dan tanggal transfer; kurs transaksi bukan kurs pajak dan transfer bukan saat terutang"
        },
        jebakan: "Pembayaran yang terlambat tidak menggeser masa pajak dan kurs; yang lebih dahulu (jatuh tempo) yang menentukan."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf c angka 1 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94 (setor tanggal 15 bulan berikutnya)", berlakuSejak: "2025-01-01" }, { pasal: "KMK nilai kurs periode 25 November–1 Desember 2026 (kurs pajak mingguan)", berlakuSejak: "2026-11-25" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-139", topik: "A3.3", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 2, laporanUjian: ["C-2026-10"],
      stem: "Tuan Rendra Wijaya, ahli geologi independen (WP orang pribadi dalam negeri, NIK terpadankan, bukan pegawai), menyusun laporan estimasi cadangan untuk PT Arta Tambang Nusantara dengan honorarium USD3.200. Faktur honorarium bertanggal Jumat, 6 November 2026; menurut kontrak honorarium jatuh tempo pada Rabu, 11 November 2026, dan PT Arta mencatat utang serta membayarnya pada tanggal itu. Tuan Rendra tidak menerima pembayaran lain dari PT Arta pada 2026. Data kurs USD (rekaan): kurs KMK periode 4–10 November 2026 Rp16.470; periode 11–17 November 2026 Rp16.505; kurs tengah BI 11 November 2026 Rp16.512. PPh yang wajib dipotong PT Arta atas honorarium tersebut adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "PPh Pasal 21 Rp1.317.600",
        B: "PPh Pasal 21 Rp2.640.800",
        C: "PPh Pasal 21 Rp1.320.400",
        D: "PPh Pasal 23 Rp1.056.320"
      },
      kunci: "C",
      jebakanOpsi: { A: "salah-baca", B: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Honorarium tenaga ahli orang pribadi bukan pegawai dipotong PPh 21 dengan tarif Pasal 17 atas 50% bruto. PPh terutang saat jatuh tempo dan dibayar (11 November), sehingga bruto USD dirupiahkan dengan kurs KMK periode 11–17 November, bukan kurs minggu faktur.",
        jejakHitung: [["Bruto = 3.200 × 16.505", "Rp52.816.000"], ["DPP = 50% × bruto", "Rp26.408.000"], ["PPh 21 = 5% × Rp26.408.000", "Rp1.320.400"]],
        mengapaSalah: {
          A: "Memakai kurs KMK minggu faktur (Rp16.470); tanggal faktur bukan saat terutang",
          B: "Lupa DPP 50% bagi bukan pegawai: 5% × Rp52.816.000",
          D: "Penerima orang pribadi bukan pegawai dipotong PPh 21, bukan PPh 23 2%"
        },
        jebakan: "Dua jebakan sekaligus: subjek penerima (orang pribadi → PPh 21) dan tanggal kurs (jatuh tempo/pembayaran, bukan faktur)."
      },
      dasarHukum: [{ pasal: "Pasal 21 ayat (1) huruf d UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 168/2023 (bukan pegawai: Ps. 17 × 50% bruto)", berlakuSejak: "2024-01-01" }, { pasal: "KMK nilai kurs periode 11–17 November 2026 (kurs pajak mingguan)", berlakuSejak: "2026-11-11" }],
      anggaranDetik: 140, verifikasi: "✅"
    },
    {
      id: "A3-140",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      laporanUjian: ["C-2026-10"],
      stem: "PT Perkasa Daya Nusantara (Persero), BUMN yang ditunjuk sebagai pemungut PPh Pasal 22, membeli satu unit trafo daya dari PT Trafo Andalan (badan dalam negeri, ber-NPWP, PKP) dengan harga USD60.000 dan PPN USD6.600. Trafo diserahkan dan faktur pajak dibuat pada Kamis, 10 Desember 2026; pembayaran dilakukan pada Rabu, 16 Desember 2026. Data kurs USD (rekaan): kurs KMK periode 9–15 Desember 2026 Rp16.590; periode 16–22 Desember 2026 Rp16.560; kurs tengah BI 16 Desember 2026 Rp16.548; kurs jual bank saat pembayaran Rp16.605. PPh Pasal 22 yang dipungut PT Perkasa Daya Nusantara adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp14.904.000", B: "Rp14.931.000", C: "Rp16.543.440", D: "Rp14.893.200" },
      kunci: "A",
      jebakanOpsi: { B: "salah-baca", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh 22 oleh BUMN tertentu dipungut 1,5% dari harga pembelian tidak termasuk PPN pada saat pembayaran, sehingga harga USD dirupiahkan dengan kurs KMK yang berlaku 16 Desember. Kurs KMK saat faktur pajak (Rp16.590) adalah kurs untuk PPN, bukan untuk PPh 22.",
        jejakHitung: [
          ["Saat pemungutan: pembayaran Rabu, 16 Desember 2026 → kurs KMK periode 16–22 Desember", "Rp16.560"],
          ["DPP = 60.000 × 16.560", "Rp993.600.000"],
          ["PPh 22 = 1,5% × Rp993.600.000", "Rp14.904.000"]
        ],
        mengapaSalah: {
          B: "Memakai kurs KMK saat faktur pajak; kurs itu relevan untuk PPN (PP 44/2022 Pasal 21), sedangkan PPh 22 dipungut saat pembayaran",
          C: "Memasukkan PPN ke DPP: 1,5% × USD66.600 × Rp16.560",
          D: "Memakai kurs tengah BI; kurs BI adalah kurs pembukuan"
        },
        jebakan: "Satu transaksi bisa memakai dua kurs KMK: PPN mengikuti saat faktur pajak seharusnya dibuat, PPh 22 mengikuti saat pembayaran."
      },
      dasarHukum: [{ pasal: "Pasal 22 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf c, Pasal 3 ayat (1) huruf b, dan Pasal 5 ayat (4) (BUMN sebagai pemungut: 1,5% × harga pembelian tidak termasuk PPN, terutang dan dipungut saat pembayaran; PMK 51/2025 berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025)", berlakuSejak: "2025-08-01" }, { pasal: "PP 44/2022 Pasal 21 (kurs KMK saat faktur pajak seharusnya dibuat untuk PPN)", berlakuSejak: "2022-12-02" }],
      anggaranDetik: 140,
      verifikasi: "✅"
    },
    {
      id: "A3-141",
      topik: "A3.8",
      tingkat: ["B", "C"],
      jenis: "kasus",
      kesulitan: 3,
      laporanUjian: ["B-2026-10", "C-2026-10"],
      stem: "PT Andalan Smelter Indonesia (WP badan dalam negeri) mengontrak Kinabalu Furnace Services Sdn. Bhd., badan yang berkedudukan di Malaysia, untuk merawat dan memperbaiki tungku smelter di Morowali. Teknisi Kinabalu bekerja di lokasi pada 1 Juni–15 Oktober 2026 (137 hari). Anggap P3B Indonesia–Malaysia menetapkan bahwa pemberian jasa di suatu negara lebih dari 120 hari dalam 12 bulan menimbulkan BUT. Kinabalu telah terdaftar dan memiliki NPWP sebagai BUT di Indonesia serta menyerahkan Form DGT yang sah. Tagihan jasa USD80.000 (belum termasuk PPN) dicatat sebagai utang, jatuh tempo, dan dibayar pada Kamis, 3 Desember 2026. Data kurs USD (rekaan): kurs KMK periode 2–8 Desember 2026 Rp16.530; kurs tengah BI 3 Desember 2026 Rp16.548; kurs jual bank saat pembayaran Rp16.575. Perlakuan pemotongan yang paling tepat adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: { A: "Tidak dipotong, karena Form DGT sah dan imbalan jasa merupakan laba usaha yang hak pemajakannya ada di Malaysia", B: "PPh Pasal 26 20% × Rp1.322.400.000 = Rp264.480.000, dilaporkan dengan BPNR", C: "PPh Pasal 23 2% × Rp1.322.400.000 = Rp26.448.000, dibuat BPPU atas nama BUT Kinabalu", D: "PPh Pasal 23 2% × Rp1.323.840.000 = Rp26.476.800, dibuat BPPU atas nama BUT Kinabalu" },
      kunci: "C",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Masa kerja 137 hari melampaui ambang 120 hari sehingga Kinabalu mempunyai BUT; imbalan jasa yang diterima BUT dipotong PPh 23 2% seperti Wajib Pajak dalam negeri, bukan PPh 26. Bruto USD dirupiahkan dengan kurs KMK yang berlaku saat terutang (3 Desember).",
        jejakHitung: [
          ["Hari kerja di Indonesia 137 > 120 → BUT", "PPh 23, bukan PPh 26"],
          ["DPP = 80.000 × 16.530 (kurs KMK periode 2–8 Desember)", "Rp1.322.400.000"],
          ["PPh 23 = 2% × Rp1.322.400.000", "Rp26.448.000"]
        ],
        mengapaSalah: {
          A: "Pembebasan laba usaha dalam P3B hanya berlaku bila tidak ada BUT; ambang hari terlampaui",
          B: "Penerima adalah BUT di Indonesia, yang dikeluarkan dari cakupan PPh 26 dan dipotong PPh 23",
          D: "Memakai kurs tengah BI; DPP pemotongan memakai kurs KMK"
        },
        jebakan: "Form DGT yang sah tidak otomatis membebaskan jasa; hitung dulu hari kehadiran terhadap time test P3B."
      },
      dasarHukum: [{ pasal: "Pasal 2 ayat (5) huruf m, Pasal 23 ayat (1) huruf c angka 2, dan Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 141/PMK.03/2015 Pasal 1 ayat (1) dan ayat (6) huruf z (jasa perawatan/perbaikan mesin)", berlakuSejak: "2015-08-26" }, { pasal: "PMK 112/2025 Pasal 2 ayat (6) huruf d (jangka waktu BUT menurut P3B)", berlakuSejak: "2025-12-31" }, { pasal: "PER-11/PJ/2025 Pasal 18 ayat (1) huruf a (BPPU untuk BUT)", berlakuSejak: "2025-05-22" }, { pasal: "KMK nilai kurs periode 2–8 Desember 2026 (kurs pajak mingguan)", berlakuSejak: "2026-12-02" }],
      anggaranDetik: 180,
      verifikasi: "◐",
      peringatan: "Sudah dicocokkan ke naskah: BUT menerima imbalan dipotong PPh 23 (Ps. 23 ayat (1) UU PPh), jasa perawatan/perbaikan mesin 2% bruto tanpa PPN (PMK 141/2015 Ps. 1 ayat (1) dan ayat (6) huruf z), BPPU untuk BUT (PER-11/PJ/2025 Ps. 18 ayat (1) huruf a). Ambang 120 hari adalah anggapan soal. Belum pasti: pasal yang mewajibkan kurs KMK (bukan kurs tengah BI) untuk DPP PPh 23 dalam valas, pembeda opsi C dan D, tidak ditemukan di PMK 81/2024 maupun PER-11/PJ/2025. Angka kurs rekaan."
    },
    {
      id: "A3-142", topik: "A3.4", tingkat: ["A", "B", "C"], jenis: "hitung", kesulitan: 3, laporanUjian: ["C-2026-10"],
      stem: "Tuan Bima Prasetyo (WNI, subjek pajak dalam negeri, NIK terpadankan) adalah pegawai tetap PT Oceanic Survey Indonesia yang gajinya ditetapkan dalam dolar. Ia di-PHK efektif 30 November 2026 dan berhak atas uang pesangon dan uang penghargaan masa kerja seluruhnya USD10.000, dibayar dua tahap: tahap I USD6.000 pada Rabu, 2 Desember 2026, dan tahap II USD4.000 pada Rabu, 13 Januari 2027. Atas tahap I telah dipotong PPh Pasal 21 final Rp2.459.000. Data kurs USD (rekaan): kurs KMK periode 2–8 Desember 2026 Rp16.530; periode 13–19 Januari 2027 Rp16.600; kurs tengah BI 13 Januari 2027 Rp16.612. PPh Pasal 21 final yang dipotong atas pembayaran tahap II adalah ...",
      kataKualifikasi: [],
      opsi: {
        A: "Rp820.000",
        B: "Rp9.941.000",
        C: "Rp9.960.000",
        D: "Rp9.878.000"
      },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-hitung", C: "salah-hitung" },
      pembahasan: {
        inti: "Pesangon yang dibayar dalam dua tahun kalender berturut-turut tetap final dan lapisannya dihitung kumulatif. Setiap tahap dirupiahkan dengan kurs KMK saat dibayar; rupiah tahap I yang sudah terkunci dijumlahkan dengan rupiah tahap II, lalu PPh kumulatif dikurangi PPh tahap I.",
        jejakHitung: [["Tahap I = 6.000 × 16.530", "Rp99.180.000"], ["Tahap II = 4.000 × 16.600", "Rp66.400.000"], ["Kumulatif", "Rp165.580.000"], ["PPh kumulatif: 0% × 50 jt + 5% × 50 jt + 15% × 65.580.000", "Rp12.337.000"], ["PPh tahap II = 12.337.000 − 2.459.000", "Rp9.878.000"]],
        mengapaSalah: {
          A: "Menghitung tahap II tersendiri seolah lapisan 0% berulang; lapisan pesangon kumulatif",
          B: "Merupiahkan ulang seluruh USD10.000 dengan kurs Januari 2027; tahap I sudah terkunci pada kurs KMK 2 Desember",
          C: "Langsung 15% atas seluruh tahap II; sisa lapisan 5% sebesar Rp820.000 belum terpakai"
        },
        jebakan: "Dua kunci pesangon valas: kurs per tahap pada tanggal bayar, lapisan tarif kumulatif dalam rupiah."
      },
      dasarHukum: [{ pasal: "PP 68/2009 (pesangon final; kumulatif dalam 2 tahun kalender)", berlakuSejak: "2009-11-16" }, { pasal: "Pasal 4 ayat (2) huruf e dan Pasal 21 UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "KMK nilai kurs periode 2–8 Desember 2026 dan 13–19 Januari 2027 (kurs pajak mingguan)", berlakuSejak: "2026-12-02" }],
      anggaranDetik: 180, verifikasi: "✅"
    },
    {
      id: "A3-143", topik: "A3.6", tingkat: ["A", "B", "C"], jenis: "prosedur", kesulitan: 2, laporanUjian: ["C-2026-10"],
      kutipan: "Pasal 23 ayat (1) huruf a UU PPh (parafrase): atas penghasilan yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh Subjek Pajak badan dalam negeri kepada Wajib Pajak dalam negeri atau bentuk usaha tetap, dipotong pajak sebesar 15% dari jumlah bruto atas dividen, bunga, royalti, dan hadiah tertentu; ayat (4) mengecualikan antara lain bunga yang dibayarkan kepada bank.",
      stem: "PT Mitra Kapital Nusantara (badan dalam negeri, bukan bank, ber-NPWP) memberi pinjaman USD500.000 kepada PT Sinar Pangan Lestari dengan bunga 6% setahun yang dibayar per kuartal. Bunga Kuartal IV 2026 sebesar USD7.500 jatuh tempo pada Kamis, 31 Desember 2026; PT Sinar Pangan mencatat utang bunga pada tanggal itu dan mentransfernya pada Rabu, 6 Januari 2027. Data kurs USD (rekaan): kurs KMK periode 30 Desember 2026–5 Januari 2027 Rp16.575; periode 6–12 Januari 2027 Rp16.610; kurs tengah BI 31 Desember 2026 Rp16.590. Tanggal 15 Januari 2027 jatuh pada hari Jumat. Perlakuan pemotongan yang paling tepat bagi PT Sinar Pangan adalah ...",
      kataKualifikasi: ["paling tepat"],
      opsi: {
        A: "BPPU Masa Januari 2027, DPP Rp124.575.000 dan PPh Pasal 23 Rp18.686.250; setor paling lambat 15 Februari 2027",
        B: "BPPU Masa Desember 2026, DPP Rp124.312.500 dan PPh Pasal 23 Rp18.646.875; setor paling lambat Jumat, 15 Januari 2027",
        C: "BPPU Masa Desember 2026, DPP Rp124.425.000 dan PPh Pasal 23 Rp18.663.750; setor paling lambat Jumat, 15 Januari 2027",
        D: "PPh Pasal 4 ayat (2) final 20% Rp24.915.000 Masa Januari 2027, karena bunga dalam valuta asing diperlakukan seperti bunga simpanan"
      },
      kunci: "B",
      jebakanOpsi: { A: "salah-baca", C: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Bunga dari pemberi pinjaman bukan bank dipotong PPh 23 15%. Saat terutang adalah jatuh tempo 31 Desember 2026 (lebih dahulu daripada transfer), sehingga masuk Masa Desember 2026 dengan kurs KMK periode 30 Desember 2026–5 Januari 2027 dan bukti potong BPPU.",
        jejakHitung: [["Saat terutang: jatuh tempo Kamis, 31 Desember 2026", "Masa Desember 2026"], ["DPP = 7.500 × 16.575", "Rp124.312.500"], ["PPh 23 = 15% × Rp124.312.500", "Rp18.646.875"], ["Batas setor", "Jumat, 15 Januari 2027"]],
        mengapaSalah: {
          A: "Menarik masa dan kurs ke tanggal transfer; jatuh tempo lebih dahulu",
          C: "Memakai kurs tengah BI 31 Desember; kurs BI adalah kurs pembukuan",
          D: "PPh final 20% hanya untuk bunga deposito/tabungan di bank; bunga pinjaman antarbadan non-bank dipotong PPh 23 15%"
        },
        jebakan: "Pergantian tahun antara jatuh tempo dan transfer menggoda untuk memindahkan masa pajak; saat terutang tetap jatuh tempo."
      },
      dasarHukum: [{ pasal: "Pasal 23 ayat (1) huruf a angka 2 dan ayat (4) UU PPh", berlakuSejak: "2009-01-01" }, { pasal: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }, { pasal: "PER-11/PJ/2025 (BPPU)", berlakuSejak: "2025-05-22" }, { pasal: "KMK nilai kurs periode 30 Desember 2026–5 Januari 2027 (kurs pajak mingguan)", berlakuSejak: "2026-12-30" }],
      anggaranDetik: 150, verifikasi: "✅"
    },
    {
      id: "A3-144",
      topik: "A3.7",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      kutipan: "PP 34/2016 Pasal 6 huruf e (dikutip try out): Dikecualikan dari kewajiban pembayaran atau pemungutan Pajak Penghasilan sebagaimana dimaksud dalam Pasal 2 ayat (1) dan Pasal 2 ayat (3) adalah: ... e. badan yang melakukan pengalihan harta berupa tanah dan/atau bangunan dalam rangka penggabungan, peleburan, atau pemekaran usaha yang telah ditetapkan Menteri Keuangan untuk menggunakan nilai buku;",
      stem: "PT Ortax Agro dan PT Ortax Agro Lestari melakukan peleburan usaha menjadi PT Ortax Agro Nusantara dan telah memperoleh persetujuan Direktur Jenderal Pajak untuk menggunakan nilai buku. Dalam peleburan tersebut, PT Ortax Agro mengalihkan tanah dan bangunan pabriknya kepada PT Ortax Agro Nusantara. Agar PT Ortax Agro dikecualikan dari kewajiban pembayaran PPh Final Pasal 4 ayat (2) atas pengalihan hak atas tanah dan bangunan tersebut, dokumen yang harus dimilikinya adalah ...",
      kataKualifikasi: ["kecuali"],
      opsi: { A: "cukup surat persetujuan penggunaan nilai buku dari Direktur Jenderal Pajak, tanpa dokumen pengecualian lainnya", B: "Surat Keterangan Fiskal yang masih berlaku", C: "surat keterangan sebagai Wajib Pajak yang dikenai PPh final berdasarkan PP 55/2022 atas peredaran bruto tertentu", D: "surat keterangan bebas Pajak Penghasilan atas penghasilan dari pengalihan hak atas tanah dan/atau bangunan" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "lupa-pasal", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Badan yang mengalihkan tanah dan/atau bangunan dalam rangka peleburan usaha yang telah ditetapkan menggunakan nilai buku dikecualikan dari kewajiban pembayaran PPh final atas pengalihan tersebut (PP 34/2016 Ps. 6 huruf e; PMK 81/2024 Ps. 200 ayat (1) huruf e). Pengecualian itu diberikan dengan penerbitan surat keterangan bebas (SKB) PPh atas penghasilan dari pengalihan hak atas tanah dan/atau bangunan (Ps. 200 ayat (2)). Persetujuan nilai buku sudah ada, sehingga yang masih diperlukan PT Ortax Agro sebagai pihak yang mengalihkan adalah SKB tersebut.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Persetujuan nilai buku dari Direktur Jenderal Pajak adalah syarat, tetapi pengecualian PPh final tanah/bangunan tetap diberikan dengan penerbitan SKB (PMK 81/2024 Ps. 200 ayat (2)).",
          B: "Surat Keterangan Fiskal berkaitan dengan kepatuhan Wajib Pajak, bukan dokumen pengecualian PPh final pengalihan tanah/bangunan.",
          C: "Surat keterangan PP 55/2022 untuk Wajib Pajak berperedaran bruto tertentu tidak berkaitan dengan pengecualian PPh final pengalihan tanah/bangunan dalam peleburan."
        },
        jebakan: "Dua dokumen berbeda: persetujuan nilai buku (PMK 81/2024 Ps. 392) dan SKB PPh tanah/bangunan (Ps. 200 ayat (2))."
      },
      dasarHukum: [{ pasal: "PP 34/2016 Pasal 6 huruf e", berlakuSejak: null }, { pasal: "PMK 81/2024 Pasal 200 ayat (1) huruf e dan ayat (2)", berlakuSejak: "2025-01-01" }, { pasal: "PMK 81/2024 Pasal 392 ayat (2) s.t.d.t.d. PMK 1/2026", berlakuSejak: null }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 2, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-145",
      topik: "A3.9",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      kutipan: "PER-11/PJ/2025 Pasal 7 ayat (1) huruf d (diringkas) (dikutip try out): Terhadap pemotongan PPh Pasal 26 sehubungan dengan pekerjaan, jasa, atau kegiatan orang pribadi atas penghasilan yang diterima Wajib Pajak luar negeri, dibuatkan Bukti Pemotongan PPh Pasal 21/26 Formulir BP26 - Bukti Pemotongan Pajak Penghasilan Pasal 26 atau Withholding Slip Article 26 Income Tax.",
      stem: "PT Ortax Services membayar honorarium kepada Tuan Hasan, warga negara dan penduduk Malaysia yang berada di Indonesia tidak lebih dari 183 hari dalam jangka waktu 12 bulan, atas jasanya sebagai pembicara pelatihan internal, dan memotong PPh Pasal 26 atas honorarium tersebut. Bukti potong yang dibuat di Coretax adalah ...",
      kataKualifikasi: [],
      opsi: { A: "BPNR (Bukti Pemotongan Non Residen)", B: "BP21 - Bukti Pemotongan Selain Pegawai Tetap", C: "BPPU (Bukti Pemotongan/Pemungutan Unifikasi)", D: "BP26 - Bukti Pemotongan PPh Pasal 26" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "Tuan Hasan adalah orang pribadi Wajib Pajak luar negeri yang menerima imbalan sehubungan dengan jasa, sehingga honorariumnya dipotong PPh Pasal 26 sehubungan dengan pekerjaan, jasa, atau kegiatan orang pribadi. Pemotongan ini masuk rezim bukti potong PPh 21/26 dan dibuatkan Formulir BP26 (PER-11/PJ/2025 Ps. 7 ayat (1) huruf d). BPNR dalam SPT Masa PPh Unifikasi hanya untuk PPh 26 selain yang sehubungan dengan pekerjaan, jasa, atau kegiatan orang pribadi.",
        jejakHitung: [],
        mengapaSalah: {
          A: "BPNR untuk PPh Pasal 26 unifikasi selain yang sehubungan dengan pekerjaan, jasa, atau kegiatan orang pribadi (misalnya dividen, bunga, royalti).",
          B: "BP21 hanya untuk penerima yang merupakan Wajib Pajak dalam negeri, sedangkan Tuan Hasan Wajib Pajak luar negeri.",
          C: "BPPU untuk penerima dalam negeri dan BUT atas PPh unifikasi, bukan PPh Pasal 26 atas jasa orang pribadi luar negeri."
        },
        jebakan: "PPh 26 atas jasa orang pribadi LN = BP26 (SPT Masa PPh 21/26); PPh 26 lainnya = BPNR (SPT Masa Unifikasi)."
      },
      dasarHukum: [{ pasal: "PER-11/PJ/2025 s.t.d.d. PER-12/PJ/2026 Pasal 6 ayat (1) huruf d dan Pasal 7 ayat (1) huruf d", berlakuSejak: "2026-10-01" }, { pasal: "PER-11/PJ/2025 Pasal 14 ayat (3) huruf e dan Pasal 18 ayat (1) huruf b", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 9, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-146",
      topik: "A3.7",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Tuan Jaka adalah pegawai tetap sebuah bank dan tidak menjalankan usaha atau pekerjaan bebas. Pada Juli 2026 ia menyewa satu unit apartemen milik PT Ortax Residence selama 2 tahun dengan nilai sewa Rp240.000.000. Berdasarkan perjanjian terpisah dengan PT Ortax Residence, Tuan Jaka juga membayar biaya pemeliharaan dan keamanan unit selama masa sewa Rp12.000.000. Seluruh jumlah dibayar lunas pada Juli 2026. Berdasarkan PP 34 Tahun 2017, penerapan PPh Pasal 4 ayat (2) yang tepat adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tuan Jaka memotong PPh Pasal 4 ayat (2) 10% dengan DPP Rp252.000.000,00", B: "PT Ortax Residence menyetor sendiri PPh Pasal 4 ayat (2) 10% hanya atas DPP sewa Rp240.000.000,00", C: "PT Ortax Residence menyetor sendiri PPh Pasal 4 ayat (2) 10% dengan DPP Rp252.000.000,00", D: "Tuan Jaka memotong PPh Pasal 4 ayat (2) 10% dengan DPP Rp240.000.000,00" },
      kunci: "C",
      jebakanOpsi: { A: "salah-hitung", B: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Orang pribadi yang ditunjuk sebagai pemotong PPh final sewa hanyalah yang melakukan pekerjaan bebas dan/atau menjalankan usaha dan menyelenggarakan pembukuan; pegawai seperti Tuan Jaka tidak termasuk. Karena penyewa bukan pemotong, PPh final dibayar sendiri oleh PT Ortax Residence. Jumlah bruto mencakup biaya pemeliharaan dan keamanan yang berkaitan dengan unit yang disewa.",
        jejakHitung: [
          ["Jumlah bruto = Rp240.000.000 + Rp12.000.000", "Rp252.000.000"],
          ["PPh final = 10% × Rp252.000.000 (disetor sendiri PT Ortax Residence)", "Rp25.200.000"]
        ],
        mengapaSalah: {
          A: "Tuan Jaka bukan pemotong pajak.",
          B: "Biaya pemeliharaan dan keamanan termasuk jumlah bruto walaupun perjanjiannya terpisah.",
          D: "Penyewa bukan pemotong dan DPP-nya juga kurang."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 34/2017 Pasal 3 ayat (1)–(3) dan Pasal 4 ayat (1)–(2)."
      },
      dasarHukum: [{ pasal: "PP 34/2017 Pasal 3 ayat (1)–(3) dan Pasal 4 ayat (1)–(2)", berlakuSejak: "2018-01-02" }, { pasal: "PER-11/PJ/2025 Pasal 16 ayat (2)", berlakuSejak: "2025-05-22" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 12, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-147",
      topik: "A3.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "Ibu Sari (TK/0), pegawai tetap PT Ortax Distributor, bergaji Rp10.000.000 per bulan. Pada Maret 2026 ia juga menerima THR Rp10.000.000. TER kategori A untuk bruto Rp10.000.000 adalah 2% dan untuk bruto Rp20.000.000 adalah 9%. PPh Pasal 21 Masa Pajak Maret 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp200.000,00", B: "Rp1.800.000,00", C: "Rp1.100.000,00", D: "Rp900.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "THR digabung dengan gaji bulan diterimanya sehingga bruto Maret Rp20.000.000. TER kategori A untuk jumlah tersebut (9%) diterapkan atas seluruh bruto, bukan per komponen.",
        jejakHitung: [ [ "Bruto Maret = Rp10.000.000 + Rp10.000.000", "Rp20.000.000" ], [ "TER kategori A", "9%" ], [ "PPh 21 = 9% × Rp20.000.000", "Rp1.800.000" ] ],
        mengapaSalah: { A: "Hanya menghitung gaji (2% × Rp10.000.000) dan mengabaikan THR.", C: "Menerapkan TER per komponen (2% × gaji + 9% × THR), padahal TER bulan itu diterapkan atas jumlah bruto gabungan.", D: "Menerapkan 9% hanya atas THR." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 58/2023 Pasal 2 ayat (4) dan Lampiran huruf A."
      },
      dasarHukum: [
        { pasal: "PP 58/2023 Pasal 2 ayat (4) dan Lampiran huruf A", berlakuSejak: "2024-01-01" },
        { pasal: "PMK 168/2023 Pasal 5 ayat (3) huruf b, Pasal 8 ayat (2) huruf a, Pasal 15 ayat (1) huruf a", berlakuSejak: "2024-01-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 14, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-148",
      topik: "A3.3",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Pada Agustus 2026 PT Ortax Properti membayar Rp60.000.000 kepada Tuan Gilang, teknisi perawatan lift yang bukan pegawai dan memiliki NPWP. Kontrak memisahkan Rp20.000.000 untuk suku cadang yang dibuktikan dengan faktur pembelian; sisanya imbalan jasa. Tentukan nilai pemotongan PPh Pasal 21 atas pembayaran tersebut!",
      kataKualifikasi: ["bukan"],
      opsi: { A: "Rp1.500.000,00", B: "Rp1.000.000,00", C: "Rp2.000.000,00", D: "Rp3.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Penghasilan bruto Bukan Pegawai untuk jasa selain katering tidak termasuk pembayaran pengadaan atau pembelian barang/material yang terkait dengan jasa (PMK 168/2023 Pasal 12 ayat (4) huruf b angka 2), sepanjang dipisahkan dalam kontrak dan dibuktikan dengan faktur pembelian (Pasal 12 ayat (5) huruf b). Dasar pemotongan 50% dari penghasilan bruto (Pasal 12 ayat (3)), dikalikan tarif Pasal 17 ayat (1) huruf a UU PPh (Pasal 16 ayat (3)).",
        jejakHitung: [
          ["Penghasilan bruto = Rp60.000.000 − Rp20.000.000", "Rp40.000.000"],
          ["DPP = 50% × Rp40.000.000", "Rp20.000.000"],
          ["PPh 21 = 5% × Rp20.000.000", "Rp1.000.000"]
        ],
        mengapaSalah: {
          A: "Tidak mengeluarkan nilai suku cadang dari penghasilan bruto (5% × 50% × Rp60.000.000).",
          C: "Tidak menerapkan DPP 50% (5% × Rp40.000.000).",
          D: "Tidak mengeluarkan nilai suku cadang dan tidak menerapkan DPP 50% (5% × Rp60.000.000)."
        },
        jebakan: "Nilai suku cadang baru boleh dikeluarkan dari bruto bila dipisahkan dalam kontrak dan dibuktikan dengan faktur pembelian; bila tidak dapat dipisahkan, seluruh Rp60.000.000 menjadi penghasilan bruto."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 17 ayat (1) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PMK 168/2023 Pasal 12 ayat (3), ayat (4) huruf b angka 2, ayat (5) huruf b, dan Pasal 16 ayat (3)", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 16, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-149",
      topik: "A3.5",
      tingkat: ["A", "B", "C"],
      jenis: "hitung",
      kesulitan: 2,
      kutipan: "PMK 51/2025 Pasal 10 ayat (3) (dikutip try out): Pemungutan Pajak Penghasilan Pasal 22 sebagaimana dimaksud dalam Pasal 2 ayat (1) huruf f atas penjualan pelumas bersifat tidak final dan dapat diperhitungkan sebagai pembayaran Pajak Penghasilan dalam tahun berjalan bagi Wajib Pajak yang dipungut.",
      stem: "PT Ortax Lubrindo (produsen pelumas) menjual pelumas kepada CV Ortax Distributor yang merupakan agen/penyalur pelumas, dengan nilai penjualan Rp400.000.000 (tidak termasuk PPN) pada Juni 2026. Berapa besarnya PPh Pasal 22 yang wajib dipungut oleh PT Ortax Lubrindo dan bagaimana sifat perlakuan pajaknya bagi CV Ortax Distributor?",
      kataKualifikasi: ["tidak termasuk"],
      opsi: { A: "Rp1.200.000,00 dan bersifat tidak final", B: "Rp1.200.000,00 dan bersifat final", C: "Rp1.000.000,00 dan bersifat final", D: "Rp1.000.000,00 dan bersifat tidak final" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Produsen pelumas memungut PPh Pasal 22 atas penjualan pelumas dengan tarif 0,3% dari penjualan tidak termasuk PPN. Berbeda dengan BBM dan BBG, pemungutan PPh 22 atas penjualan pelumas selalu bersifat tidak final, termasuk bila pembelinya agen/penyalur, sehingga dapat diperhitungkan sebagai kredit pajak tahun berjalan.",
        jejakHitung: [
          ["Tarif PPh 22 pelumas", "0,3%"],
          ["PPh 22 = 0,3% × Rp400.000.000", "Rp1.200.000"],
          ["Sifat pemungutan atas pelumas", "tidak final"]
        ],
        mengapaSalah: {
          B: "Menerapkan sifat final penyalur/agen yang hanya berlaku untuk BBM dan BBG, bukan pelumas.",
          C: "Memakai tarif 0,25%, yang hanya berlaku untuk BBM yang dijual kepada SPBU yang menjual BBM yang dibeli dari PT Pertamina (Persero) atau anak usahanya, dan sifat final penyalur yang hanya untuk BBM dan BBG.",
          D: "Memakai tarif 0,25% yang tidak berlaku untuk pelumas."
        },
        jebakan: "Pelumas: 0,3% dan selalu tidak final, siapa pun pembelinya."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 22 ayat (1) huruf c s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf f, Pasal 3 ayat (1) huruf c angka 3, Pasal 10 ayat (3)", berlakuSejak: null }],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 19, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-150",
      topik: "A3.2",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Pada Masa Pajak Januari sampai November, PPh Pasal 21 pegawai tetap dihitung dengan ...",
      kataKualifikasi: [],
      opsi: { A: "Tarif Pasal 17 atas penghasilan neto sebulan yang disetahunkan", B: "Tarif efektif bulanan sesuai kategori status PTKP awal tahun dikalikan penghasilan bruto sebulan", C: "Tarif efektif bulanan dikalikan penghasilan bruto sebulan setelah dikurangi biaya jabatan dan iuran pensiun", D: "Tarif efektif harian dikalikan rata-rata penghasilan bruto sehari dalam bulan tersebut" },
      kunci: "B",
      jebakanOpsi: { A: "angka-usang", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Selain Masa Pajak Terakhir, PPh 21 pegawai tetap dihitung dengan tarif efektif bulanan (kategori A, B, atau C sesuai status PTKP pada awal tahun pajak) dikalikan penghasilan bruto sebulan. Pengurang seperti biaya jabatan dan iuran pensiun baru diperhitungkan pada Masa Pajak Terakhir.",
        jejakHitung: [],
        mengapaSalah: { A: "Penyetahunan dengan tarif Pasal 17 adalah metode lama (sebelum 2024) dan kini hanya untuk Masa Pajak Terakhir.", C: "TER bulanan dikalikan penghasilan bruto tanpa pengurang; biaya jabatan dan iuran pensiun baru dikurangkan pada Masa Pajak Terakhir.", D: "Tarif efektif harian untuk pegawai tidak tetap, bukan pegawai tetap." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 58/2023 Pasal 2 ayat (3)–(4)."
      },
      dasarHukum: [
        { pasal: "PP 58/2023 Pasal 2 ayat (3)–(4)", berlakuSejak: "2024-01-01" },
        { pasal: "PMK 168/2023 Pasal 8 ayat (1) huruf a dan Pasal 15 ayat (1) huruf a", berlakuSejak: "2024-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 24, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-151",
      topik: "A3.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Pada Mei 2026 Ibu Kirana, pegawai tetap PT Ortax Services, memperoleh hal-hal berikut: 1) tunjangan transportasi dari pemberi kerja sebesar Rp1.500.000; 2) santunan asuransi kecelakaan dari perusahaan asuransi sebesar Rp7.000.000; 3) iuran jaminan hari tua bagian pemberi kerja yang dibayarkan ke BPJS Ketenagakerjaan sebesar Rp370.000; 4) makan siang yang disediakan pemberi kerja di kantor bagi seluruh pegawai; 5) iuran jaminan kecelakaan kerja dan jaminan kematian yang dibayar pemberi kerja ke BPJS Ketenagakerjaan. Tentukan penghasilan yang merupakan objek pemotongan PPh Pasal 21!",
      kataKualifikasi: [],
      opsi: { A: "1 dan 2", B: "1 dan 3", C: "1 dan 5", D: "1 dan 4" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tunjangan termasuk penghasilan teratur pegawai tetap (PMK 168/2023 Ps. 5 ayat (3) huruf a) dan iuran JKK serta JKM yang dibayar pemberi kerja juga termasuk penghasilan pegawai tetap (huruf d). Santunan asuransi dari perusahaan asuransi dan iuran JHT yang dibayar pemberi kerja dikecualikan (Ps. 7 huruf a dan c). Makanan dan minuman yang disediakan pemberi kerja di tempat kerja bagi seluruh pegawai adalah natura yang dikecualikan dari objek PPh (PMK 66/2023 Ps. 4 huruf a, Ps. 5 ayat (1) huruf a). Jadi objeknya butir 1 dan 5.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Santunan asuransi dari perusahaan asuransi bukan penghasilan yang dipotong PPh 21.",
          B: "Iuran JHT yang dibayar pemberi kerja dikecualikan dari pemotongan PPh 21.",
          D: "Makan siang bagi seluruh pegawai di tempat kerja adalah natura yang dikecualikan dari objek PPh."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 168/2023 Pasal 5 ayat (3) huruf a dan d, Pasal 7 huruf a, b, dan c."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 Pasal 5 ayat (3) huruf a dan d, Pasal 7 huruf a, b, dan c", berlakuSejak: "2024-01-01" }, { pasal: "PMK 66/2023 Pasal 4 huruf a dan Pasal 5 ayat (1) huruf a", berlakuSejak: "2023-07-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 26, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-152",
      topik: "A3.9",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      kutipan: "PMK 81/2024 Pasal 171 ayat (1) huruf c (dikutip try out): Wajib Pajak yang melakukan pembayaran pajak sendiri maupun yang ditunjuk sebagai pemotong atau pemungut Pajak Penghasilan, wajib melaporkan: ... c. Pajak Penghasilan Pasal 21 yang dipotong; ... paling lama 20 (dua puluh) hari setelah Masa Pajak berakhir.",
      stem: "Menurut PMK 81/2024 s.t.d.t.d. PMK 1/2026, pemberi kerja wajib melaporkan PPh Pasal 21 yang dipotongnya melalui SPT Masa PPh Pasal 21 dan/atau Pasal 26 paling lama ...",
      kataKualifikasi: [ "paling lama" ],
      opsi: { A: "tanggal 15 bulan berikutnya setelah Masa Pajak berakhir", B: "akhir bulan berikutnya setelah Masa Pajak berakhir", C: "tanggal 10 bulan berikutnya setelah Masa Pajak berakhir", D: "20 hari setelah Masa Pajak berakhir" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "angka-usang" },
      pembahasan: {
        inti: "Wajib pajak yang ditunjuk sebagai pemotong PPh wajib melaporkan PPh Pasal 21 yang dipotong paling lama 20 hari setelah Masa Pajak berakhir, dengan SPT Masa PPh Pasal 21 dan/atau Pasal 26. Tanggal 15 bulan berikutnya adalah batas penyetoran, bukan pelaporan.",
        jejakHitung: [],
        mengapaSalah: { A: "Tanggal 15 bulan berikutnya adalah batas penyetoran PPh Pasal 21, bukan batas pelaporan.", B: "Akhir bulan berikutnya adalah batas penyampaian SPT Masa PPN.", C: "Tanggal 10 bulan berikutnya adalah batas penyetoran menurut aturan lama, bukan batas pelaporan." },
        jebakan: "Hafalan: setor tanggal 15, lapor 20 hari setelah Masa Pajak berakhir."
      },
      dasarHukum: [
        { pasal: "UU KUP Pasal 3 ayat (3) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 81/2024 s.t.d.t.d. PMK 1/2026 Pasal 171 ayat (1) huruf c dan ayat (2) huruf a", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 41, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-153",
      topik: "A3.7",
      tingkat: [ "A", "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Penghasilan berikut yang PPh Pasal 4 ayat (2)-nya wajib disetor sendiri oleh penerima penghasilan adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Bunga deposito yang diterima nasabah dari bank", B: "Sewa gedung kantor yang dibayar oleh PT penyewa", C: "Hadiah undian yang dibayarkan penyelenggara undian", D: "Penjualan rumah oleh orang pribadi kepada orang pribadi lain" },
      kunci: "D",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "PPh final atas pengalihan hak atas tanah/bangunan dibayar sendiri oleh pihak yang mengalihkan (selain pengalihan kepada pemerintah yang dipungut instansi pemerintah). Penghasilan lain seperti bunga deposito, sewa yang dibayar pemotong, dan hadiah undian dipotong oleh pihak yang membayar.",
        jejakHitung: [],
        mengapaSalah: { A: "PPh final bunga deposito dipotong oleh bank.", B: "PPh final sewa yang dibayar PT penyewa dipotong oleh penyewa selaku pemotong.", C: "PPh final hadiah undian dipotong oleh penyelenggara undian." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 81/2024 Pasal 193 ayat (1) dan Pasal 194."
      },
      dasarHukum: [
        { pasal: "PMK 81/2024 Pasal 193 ayat (1) dan Pasal 194", berlakuSejak: "2025-01-01" },
        { pasal: "PP 34/2016 Pasal 3", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 47, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-154",
      topik: "A3.1",
      tingkat: ["A", "B", "C"],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Tuan Rudi adalah pegawai tetap PT Ortax Retail. Setiap bulan ia membayar sumbangan keagamaan yang sifatnya wajib bagi pemeluk agamanya melalui pemotongan gaji oleh PT Ortax Retail. PT Ortax Retail menyalurkan sumbangan tersebut kepada lembaga keagamaan yang tidak dibentuk atau disahkan oleh pemerintah, dan tidak memperhitungkannya sebagai pengurang dalam penghitungan PPh Pasal 21 Tuan Rudi. Alasan yang tepat atas perlakuan tersebut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Sumbangan keagamaan wajib hanya dapat dikurangkan bila dibayarkan kepada lembaga keagamaan yang dibentuk atau disahkan oleh pemerintah", B: "Pengurang penghasilan bruto dalam penghitungan PPh Pasal 21 hanya berlaku untuk zakat, bukan untuk sumbangan keagamaan agama lain mana pun", C: "Sumbangan keagamaan hanya dapat dikurangkan dalam SPT Tahunan dan tidak pernah diperhitungkan oleh pemberi kerja", D: "Sumbangan keagamaan melebihi batas 2,5% dari penghasilan bruto yang diterima dari pemberi kerja" },
      kunci: "A",
      jebakanOpsi: { B: "lupa-pasal", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Zakat atau sumbangan keagamaan yang sifatnya wajib bagi pemeluk agama yang diakui di Indonesia dapat menjadi pengurang dalam penghitungan PPh Pasal 21 pegawai tetap bila dibayarkan melalui pemberi kerja kepada badan amil zakat, lembaga amil zakat, atau lembaga keagamaan yang dibentuk atau disahkan oleh pemerintah. Syarat pembayaran melalui pemberi kerja terpenuhi, tetapi penerimanya tidak dibentuk atau disahkan pemerintah.",
        jejakHitung: [],
        mengapaSalah: {
          B: "Ketentuan berlaku untuk zakat maupun sumbangan keagamaan yang sifatnya wajib bagi pemeluk agama yang diakui di Indonesia.",
          C: "Bila dibayar melalui pemberi kerja kepada lembaga yang disahkan, sumbangan diperhitungkan pemberi kerja dalam penghitungan PPh Pasal 21.",
          D: "Tidak ada batas persentase 2,5% dalam ketentuan pengurang tersebut."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 168/2023 Pasal 10 ayat (1) huruf c."
      },
      dasarHukum: [{ pasal: "PMK 168/2023 Pasal 10 ayat (1) huruf c", berlakuSejak: "2024-01-01" }, { pasal: "UU PPh Pasal 9 ayat (1) huruf g s.t.d.t.d. UU 6/2023", berlakuSejak: null }],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 55, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-155",
      topik: "A3.9",
      tingkat: [ "A", "B", "C" ],
      jenis: "prosedur",
      kesulitan: 1,
      stem: "Tuan Bima, warga negara Indonesia penduduk Indonesia, mulai Februari 2026 bekerja sebagai pegawai tetap PT Ortax Services. Ia juga menerima honorarium sebagai narasumber pelatihan dari PT Ortax Konsultan. Agar masing-masing pemotong dapat membuatkan bukti pemotongan PPh Pasal 21 dengan benar, kewajiban Tuan Bima adalah ...",
      kataKualifikasi: [],
      opsi: { A: "menyerahkan salinan bukti pemotongan dari PT Ortax Services kepada PT Ortax Konsultan", B: "memberikan NPWP hanya kepada PT Ortax Services karena honorarium narasumber tidak memerlukan identitas penerima", C: "memberikan informasi identitas berupa NPWP atau NIK kepada masing-masing pemotong", D: "menyerahkan surat keterangan domisili kepada masing-masing pemotong" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "lupa-pasal" },
      pembahasan: {
        inti: "Dalam pembuatan bukti pemotongan PPh Pasal 21/26, penerima penghasilan harus memberikan informasi identitas kepada pemotong: bagi Wajib Pajak dalam negeri berupa NPWP atau NIK, bagi Wajib Pajak luar negeri berupa tax identification number atau identitas perpajakan lainnya. Ketentuan ini berlaku terhadap setiap pemotong, termasuk pemotong honorarium bukan pegawai.",
        jejakHitung: [],
        mengapaSalah: { A: "Tidak ada kewajiban menyerahkan bukti pemotongan dari satu pemotong kepada pemotong lain.", B: "Pemotong honorarium juga wajib membuat bukti pemotongan sehingga memerlukan NPWP atau NIK penerima.", D: "Surat keterangan domisili hanya diserahkan Wajib Pajak luar negeri yang ingin menerapkan P3B (Pasal 9 ayat (2))." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PER-11/PJ/2025 Pasal 9 ayat (1) dan (2)."
      },
      dasarHukum: [
        { pasal: "PER-11/PJ/2025 Pasal 9 ayat (1) dan (2)", berlakuSejak: null },
        { pasal: "UU KUP Pasal 2 ayat (1a) s.t.d.t.d. UU 6/2023", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 56, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-156",
      topik: "A3.7",
      tingkat: [ "A", "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 2,
      stem: "Berdasarkan PP 34 Tahun 2016, atas transaksi berikut: 1. hibah tanah dari Ibu Ratna kepada anak kandungnya, tanpa hubungan usaha, pekerjaan, kepemilikan, atau penguasaan; 2. hibah tanah dari Tuan Burhan kepada keponakannya; 3. penjualan sebidang tanah seharga Rp45.000.000 oleh orang pribadi yang penghasilannya di bawah PTKP, bukan jumlah yang dipecah-pecah; 4. penjualan rumah seharga Rp300.000.000 oleh seorang pensiunan yang penghasilannya di bawah PTKP. Manakah yang dikecualikan dari kewajiban pembayaran PPh final?",
      kataKualifikasi: [ "kecuali", "bukan" ],
      opsi: { A: "1 dan 3", B: "2 dan 4", C: "1 dan 2", D: "3 dan 4" },
      kunci: "A",
      jebakanOpsi: { B: "salah-klasifikasi", C: "lupa-pasal", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Hibah orang pribadi kepada anak kandung (garis lurus satu derajat) tanpa hubungan usaha dikecualikan, dengan surat keterangan bebas. Pengalihan oleh orang pribadi berpenghasilan di bawah PTKP dikecualikan bila jumlah bruto pengalihan kurang dari Rp60.000.000 dan tidak dipecah-pecah.",
        jejakHitung: [],
        mengapaSalah: { B: "Keponakan bukan keluarga sedarah garis lurus satu derajat dan nilai Rp300.000.000 melampaui batas Rp60.000.000.", C: "Hibah kepada keponakan tidak dikecualikan.", D: "Penjualan Rp300.000.000 tidak memenuhi batas kurang dari Rp60.000.000." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PP 34/2016 Pasal 6 huruf a dan b."
      },
      dasarHukum: [
        { pasal: "PP 34/2016 Pasal 6 huruf a dan b", berlakuSejak: null },
        { pasal: "PMK 81/2024 Pasal 200 ayat (1) huruf a dan b, ayat (2)", berlakuSejak: "2025-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 59, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-157",
      topik: "A3.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 1,
      stem: "PT Ortax Niaga, importir yang memiliki angka pengenal impor, mengimpor barang umum dengan nilai CIF Rp400.000.000 dan bea masuk Rp40.000.000. PPh Pasal 22 impor yang dipungut adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp10.000.000,00", B: "Rp11.000.000,00", C: "Rp33.000.000,00", D: "Rp22.000.000,00" },
      kunci: "B",
      jebakanOpsi: { A: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "PPh Pasal 22 impor barang umum oleh importir dengan API dipungut 2,5% dari nilai impor. Nilai impor adalah CIF ditambah bea masuk dan pungutan lain menurut ketentuan kepabeanan.",
        jejakHitung: [ [ "Nilai impor = Rp400.000.000 + Rp40.000.000", "Rp440.000.000" ], [ "PPh 22 = 2,5% × Rp440.000.000", "Rp11.000.000" ] ],
        mengapaSalah: { A: "Memakai CIF tanpa bea masuk (2,5% × Rp400.000.000).", C: "Memakai tarif 7,5% yang berlaku untuk importir tanpa API.", D: "Memakai tarif 5% yang tidak berlaku untuk impor barang umum dengan API." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 51/2025 Pasal 3 ayat (1) huruf a angka 1 huruf e) dan ayat (2)."
      },
      dasarHukum: [
        { pasal: "PMK 51/2025 Pasal 3 ayat (1) huruf a angka 1 huruf e) dan ayat (2)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 67, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-158",
      topik: "A3.1",
      tingkat: [ "A", "B", "C" ],
      jenis: "kasus",
      kesulitan: 2,
      stem: "Ibu Melati, warga negara Indonesia, bekerja sebagai staf pada kantor perwakilan organisasi internasional yang ditetapkan Menteri Keuangan sebagai organisasi yang tidak termasuk subjek pajak (Indonesia menjadi anggota dan organisasi tersebut tidak menjalankan usaha di Indonesia). Ia juga pegawai tetap PT Ortax Media dan setiap semester mengajar sebagai dosen tamu yang dibayar honorarium oleh Yayasan Pendidikan Ortax. Pihak yang wajib memotong PPh Pasal 21 atas penghasilan Ibu Melati adalah ...",
      kataKualifikasi: [ "tidak termasuk" ],
      opsi: { A: "Organisasi internasional, PT Ortax Media, dan Yayasan Pendidikan Ortax", B: "PT Ortax Media dan organisasi internasional", C: "PT Ortax Media saja", D: "PT Ortax Media dan Yayasan Pendidikan Ortax" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "lupa-pasal" },
      pembahasan: {
        inti: "PT Ortax Media sebagai pemberi kerja wajib memotong PPh Pasal 21 atas penghasilan pegawai tetapnya. Yayasan Pendidikan Ortax adalah badan yang membayar honorarium kepada pengajar (bukan pegawai), sehingga juga Pemotong PPh Pasal 21. Organisasi internasional yang memenuhi syarat Pasal 3 ayat (1) huruf c UU PPh tidak termasuk pemberi kerja yang wajib memotong; penghasilan Ibu Melati (WNI) dari organisasi itu tetap objek dan dilaporkan sendiri dalam SPT Tahunan.",
        jejakHitung: [],
        mengapaSalah: { A: "Organisasi internasional yang memenuhi syarat dikecualikan dari kewajiban memotong PPh Pasal 21.", B: "Memasukkan organisasi internasional dan mengabaikan yayasan sebagai pemotong honorarium.", C: "Mengabaikan kewajiban yayasan memotong PPh Pasal 21 atas honorarium pengajar." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 168/2023 Pasal 2 ayat (2) huruf a dan d, Pasal 2 ayat (3) huruf b, Pasal 3 ayat (2) huruf d."
      },
      dasarHukum: [
        { pasal: "PMK 168/2023 Pasal 2 ayat (2) huruf a dan d, Pasal 2 ayat (3) huruf b, Pasal 3 ayat (2) huruf d", berlakuSejak: "2024-01-01" }
      ],
      anggaranDetik: 120,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 68, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-159",
      topik: "A3.1",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 2,
      stem: "Sepanjang Januari–Desember 2026 PT Ortax Distributor menyewa sebuah rumah tapak seharga Rp3.500.000 per bulan yang hak pemanfaatannya diberikan kepada Pak Budi, pegawainya. Lokasi usaha tidak ditetapkan sebagai daerah tertentu. Nilai fasilitas yang menjadi objek PPh Pasal 21 Pak Budi selama 2026 adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Rp18.000.000,00", B: "Rp42.000.000,00", C: "Rp1.500.000,00", D: "Rp39.000.000,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Kenikmatan tempat tinggal dinilai sebesar biaya yang dikeluarkan pemberi kerja dan, karena dimanfaatkan lebih dari satu bulan, dinilai setiap bulan. Untuk tempat tinggal perseorangan, bagian yang dikecualikan paling banyak Rp2.000.000 per bulan; selisih lebihnya menjadi objek.",
        jejakHitung: [ [ "Objek per bulan = Rp3.500.000 − Rp2.000.000", "Rp1.500.000" ], [ "Objek setahun = Rp1.500.000 × 12", "Rp18.000.000" ] ],
        mengapaSalah: { B: "Menganggap seluruh biaya sewa (Rp3.500.000 × 12) sebagai objek tanpa batas pengecualian Rp2.000.000 per bulan.", C: "Hanya menghitung objek satu bulan, padahal fasilitas dinikmati selama 12 bulan.", D: "Salah menerapkan batas pengecualian (tidak mengurangkan Rp2.000.000 setiap bulan)." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: PMK 66/2023 Pasal 7 ayat (4), Pasal 22 ayat (1) huruf b dan ayat (3), Lampiran huruf A angka 7."
      },
      dasarHukum: [
        { pasal: "PMK 66/2023 Pasal 7 ayat (4), Pasal 22 ayat (1) huruf b dan ayat (3), Lampiran huruf A angka 7", berlakuSejak: "2023-07-01" }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 69, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-160",
      topik: "A3.1",
      tingkat: ["A", "B", "C"],
      jenis: "klasifikasi",
      kesulitan: 1,
      stem: "Pemberi kerja berikut yang TIDAK wajib memotong PPh Pasal 21 atas pembayaran gaji adalah ...",
      kataKualifikasi: [],
      opsi: { A: "Tuan Ali, pemilik bengkel, yang membayar gaji montir bengkelnya", B: "Koperasi Ortax Sejahtera yang belum memperoleh pendapatan, tetapi telah membayar gaji staf administrasinya", C: "Ibu Melati, notaris, yang membayar gaji staf kantor notarisnya", D: "Bapak Agus, seorang pegawai yang tidak menjalankan usaha atau pekerjaan bebas, yang membayar gaji asisten rumah tangganya" },
      kunci: "D",
      jebakanOpsi: { A: "lupa-pasal", B: "salah-klasifikasi", C: "salah-klasifikasi" },
      pembahasan: {
        inti: "Tidak termasuk pemberi kerja yang wajib memotong PPh Pasal 21 adalah orang pribadi yang tidak melakukan kegiatan usaha atau pekerjaan bebas (PMK 168/2023 Pasal 2 ayat (3) huruf c angka 1). Bapak Agus hanya pegawai dan tidak menjalankan usaha atau pekerjaan bebas, sehingga tidak wajib memotong PPh Pasal 21 atas gaji asisten rumah tangganya.",
        jejakHitung: [],
        mengapaSalah: {
          A: "Orang pribadi yang menjalankan usaha dan membayar gaji pekerja terkait usahanya wajib memotong (Pasal 2 ayat (2) huruf a).",
          B: "Badan yang membayar gaji wajib memotong; kewajiban tidak bergantung pada sudah adanya pendapatan.",
          C: "Orang pribadi yang menjalankan pekerjaan bebas dan membayar gaji pekerja terkait pekerjaan bebasnya wajib memotong."
        },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 21 ayat (1) huruf a s.t.d.t.d. UU 6/2023."
      },
      dasarHukum: [{ pasal: "UU PPh Pasal 21 ayat (1) huruf a s.t.d.t.d. UU 6/2023", berlakuSejak: null }, { pasal: "PMK 168/2023 Pasal 2 ayat (2) huruf a dan ayat (3) huruf c", berlakuSejak: "2024-01-01" }],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 74, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-161",
      topik: "A3.8",
      tingkat: [ "A", "B", "C" ],
      jenis: "hitung",
      kesulitan: 3,
      stem: "Pada Juli 2026, PT Ortax Indonesia membagikan dividen Rp1.000.000.000 kepada Ortax XYZ Pte. Ltd (Singapura), yang memiliki 40% sahamnya. Ortax XYZ menyerahkan DGT sah dan memenuhi syarat beneficial owner, tetapi baru memiliki saham tersebut selama 200 hari termasuk hari pembayaran dividen. P3B diasumsikan mengatur tarif dividen 10% untuk kepemilikan paling sedikit 25% dan 15% untuk lainnya. PPh Pasal 26 yang dipotong adalah ...",
      kataKualifikasi: [ "paling sedikit" ],
      opsi: { A: "Rp150.000.000,00", B: "Rp100.000.000,00", C: "Rp200.000.000,00", D: "Rp0,00" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "salah-hitung", D: "salah-hitung" },
      pembahasan: {
        inti: "Bila P3B memuat dua tarif dividen berdasarkan persentase kepemilikan, tarif lebih rendah hanya berlaku bila persentase dan periode kepemilikan paling singkat 365 hari terpenuhi. Bila periode tidak terpenuhi, berlaku tarif P3B yang lebih tinggi sepanjang penerima adalah beneficial owner.",
        jejakHitung: [ [ "Kepemilikan 200 hari < 365 hari", "tarif 10% tidak berlaku" ], [ "Beneficial owner", "tarif P3B 15%" ], [ "PPh 26 = 15% × Rp1.000.000.000", "Rp150.000.000" ] ],
        mengapaSalah: { B: "Menerapkan tarif 10% padahal periode kepemilikan 365 hari belum terpenuhi.", C: "Memakai tarif domestik 20% padahal DGT sah dan beneficial owner terpenuhi.", D: "Menganggap dividen dikecualikan seperti dividen kepada Wajib Pajak badan dalam negeri, padahal penerimanya Wajib Pajak luar negeri." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 26 ayat (1) huruf a."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 26 ayat (1) huruf a", berlakuSejak: null },
        { pasal: "PMK 112/2025 Pasal 20 ayat (1)–(3)", berlakuSejak: null }
      ],
      anggaranDetik: 150,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 75, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-162",
      topik: "A3.3",
      tingkat: [ "A", "B", "C" ],
      jenis: "konsep",
      kesulitan: 1,
      stem: "Dasar pemotongan dan tarif PPh Pasal 21 atas honorarium yang dibayarkan kepada arsitek yang melakukan pekerjaan bebas (bukan pegawai) adalah ...",
      kataKualifikasi: [ "bukan" ],
      opsi: { A: "Tarif efektif bulanan dikalikan penghasilan bruto", B: "Tarif Pasal 17 ayat (1) huruf a dikalikan 50% penghasilan bruto", C: "Tarif Pasal 17 ayat (1) huruf a dikalikan seluruh penghasilan bruto", D: "Tarif efektif harian dikalikan 50% penghasilan bruto" },
      kunci: "B",
      jebakanOpsi: { A: "salah-klasifikasi", C: "salah-hitung", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Arsitek termasuk tenaga ahli yang melakukan pekerjaan bebas dalam kelompok Bukan Pegawai. DPP-nya 50% dari penghasilan bruto, dikalikan tarif Pasal 17 ayat (1) huruf a.",
        jejakHitung: [],
        mengapaSalah: { A: "Tarif efektif bulanan dipakai untuk pegawai tetap, bukan bukan pegawai.", C: "DPP bukan pegawai adalah 50% dari penghasilan bruto, bukan seluruhnya.", D: "Tarif efektif harian dipakai untuk pegawai tidak tetap, bukan tenaga ahli bukan pegawai." },
        jebakan: "Bandingkan setiap opsi dengan dasar hukum: UU PPh Pasal 17 ayat (1) huruf a."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 17 ayat (1) huruf a", berlakuSejak: null },
        { pasal: "PMK 168/2023 Pasal 3 ayat (2) huruf a, Pasal 12 ayat (3), Pasal 16 ayat (3)", berlakuSejak: "2024-01-01" }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 81, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    },
    {
      id: "A3-163",
      topik: "A3.5",
      tingkat: [ "A", "B", "C" ],
      jenis: "klasifikasi",
      kesulitan: 3,
      kutipan: "PMK 51/2025 Pasal 4 ayat (1) huruf g dan ayat (4) (dikutip try out): Dikecualikan dari pemungutan PPh Pasal 22: ... g. pembelian gabah dan/atau beras oleh perusahaan umum badan urusan logistik ... (4) Pengecualian sebagaimana dimaksud pada ayat (1) huruf d sampai dengan huruf h dilakukan tanpa surat keterangan bebas.",
      stem: "Perhatikan transaksi pada Juli 2026 berikut (seluruh nilai tidak termasuk PPN): 1. pembelian buku dan alat peraga oleh SMA Negeri 1 Ortaxwangi yang dibayar dari dana bantuan operasional sekolah; 2. pembelian gabah oleh Perusahaan Umum Badan Urusan Logistik (Bulog) tanpa SKB; 3. pembayaran oleh PT Ortax Pelabuhan (Persero), BUMN, sebesar Rp9.500.000 yang merupakan termin pertama dari satu kontrak pembelian barang senilai Rp28.500.000; 4. pembelian ikan segar yang belum melalui proses industri manufaktur oleh PT Ortax Seafood (eksportir) sebesar Rp24.000.000 dalam Masa Pajak Juli 2026. Dari transaksi tersebut, manakah yang dikecualikan dari pemungutan PPh Pasal 22?",
      kataKualifikasi: [ "kecuali", "tidak termasuk" ],
      opsi: { A: "2 dan 3", B: "3 dan 4", C: "1 dan 2", D: "1 dan 4" },
      kunci: "C",
      jebakanOpsi: { A: "salah-klasifikasi", B: "salah-klasifikasi", D: "salah-klasifikasi" },
      pembahasan: {
        inti: "Pembelian barang dengan dana bantuan operasional sekolah dan pembelian gabah/beras oleh Bulog dikecualikan dari pemungutan PPh Pasal 22 tanpa SKB. Pembayaran BUMN Rp9.500.000 merupakan pecahan dari transaksi Rp28.500.000 sehingga tidak dikecualikan, dan pembelian hasil perikanan oleh eksportir melebihi batas Rp20.000.000 per Masa Pajak.",
        jejakHitung: [],
        mengapaSalah: { A: "Butir 3 tidak memenuhi pengecualian karena merupakan pembayaran yang dipecah dari transaksi yang nilai sebenarnya melebihi Rp10.000.000.", B: "Butir 3 merupakan pembayaran dipecah dan butir 4 melebihi Rp20.000.000 per Masa Pajak, sehingga keduanya tetap dipungut.", D: "Butir 4 melebihi batas Rp20.000.000 per Masa Pajak untuk pembelian hasil perikanan oleh eksportir." },
        jebakan: "Uji \"tidak dipecah\" pada pengecualian berbasis nilai: yang diuji nilai sebenarnya transaksi, bukan nilai per pembayaran."
      },
      dasarHukum: [
        { pasal: "UU PPh Pasal 22 ayat (1) dan (2) s.t.d.t.d. UU 6/2023", berlakuSejak: null },
        { pasal: "PMK 51/2025 Pasal 2 ayat (1) huruf b, c, g dan Pasal 4 ayat (1) huruf e angka 1 huruf d), angka 2, angka 6, huruf g, serta ayat (4)", berlakuSejak: null }
      ],
      anggaranDetik: 90,
      verifikasi: "✅",
      sumber: { set: "TO-B-2026-11", no: 90, judul: "Try Out UKP B (transkrip 6 Nov 2026)", tingkat: "B" }
    }
  ],
  kartu: [
    { id: "KT-A3-01", topik: "A3.1", tipe: "angka", depan: "Biaya jabatan pegawai tetap?", belakang: "5% bruto, maksimal Rp500.000/bulan (Rp6.000.000/tahun)", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-02", topik: "A3.1", tipe: "angka", depan: "Biaya pensiun penerima pensiun berkala?", belakang: "5% bruto, maksimal Rp200.000/bulan (Rp2.400.000/tahun)", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-03", topik: "A3.1", tipe: "angka", depan: "Batas natura tempat tinggal non-komunal yang dikecualikan?", belakang: "Rp2 juta/pegawai/bulan; kelebihannya objek PPh 21", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01", menggantikan: "natura bukan objek PPh bagi penerima (sebelum UU HPP)", dekTambahan: [] },
    { id: "KT-A3-04", topik: "A3.1", tipe: "definisi", depan: "Syarat fasilitas kendaraan dikecualikan dari objek PPh 21?", belakang: "Penerima bukan pemegang saham dan bruto ≤ Rp100 juta/bulan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-05", topik: "A3.1", tipe: "definisi", depan: "Status PTKP untuk PPh 21 setahun ditentukan kapan?", belakang: "Keadaan pada awal tahun pajak (1 Januari)", dasar: "Pasal 7 ayat (2) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-06", topik: "A3.1", tipe: "definisi", depan: "PTKP pegawai wanita kawin yang suaminya berpenghasilan?", belakang: "Hanya untuk diri sendiri (TK/0)", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-07", topik: "A3.2", tipe: "definisi", depan: "Pembagian kategori TER bulanan?", belakang: "A: TK/0, TK/1, K/0 · B: TK/2, TK/3, K/1, K/2 · C: K/3", dasar: "PP 58/2023 Pasal 2 ayat (3)", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-08", topik: "A3.2", tipe: "prosedur", depan: "PPh 21 pegawai tetap Masa Pajak Terakhir dihitung bagaimana?", belakang: "Pasal 17 × PKP setahun, dikurangi PPh Januari–November", dasar: "PP 58/2023 Pasal 2 ayat (1); PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: "tarif Pasal 17 atas penghasilan disetahunkan setiap bulan (PER-16/PJ/2016)", dekTambahan: [] },
    { id: "KT-A3-09", topik: "A3.2", tipe: "angka", depan: "PPh 21 penerima tanpa NPWP?", belakang: "120% dari PPh seharusnya; tidak berlaku untuk PPh final", dasar: "Pasal 21 ayat (5a) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-10", topik: "A3.2", tipe: "definisi", depan: "Masa Pajak Terakhir pegawai yang berhenti di tengah tahun?", belakang: "Bulan berhenti; tanpa penyetahunan, PTKP setahun penuh", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-11", topik: "A3.3", tipe: "angka", depan: "Dasar pengenaan PPh 21 bukan pegawai?", belakang: "50% × bruto, tarif Pasal 17, per pembayaran (tidak kumulatif)", dasar: "PP 58/2023 Pasal 2; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: "berkesinambungan dihitung kumulatif (PER-16/PJ/2016)", dekTambahan: [] },
    { id: "KT-A3-12", topik: "A3.3", tipe: "angka", depan: "TER harian pegawai tidak tetap?", belakang: "0% ≤ Rp450 ribu; 0,5% s.d. Rp2,5 juta; di atasnya Pasal 17 × 50%", dasar: "Lampiran PP 58/2023", berlakuSejak: "2024-01-01", menggantikan: "PTKP harian Rp450.000 lalu tarif 5% atas selisih", dekTambahan: [] },
    { id: "KT-A3-13", topik: "A3.3", tipe: "prosedur", depan: "Pegawai tidak tetap yang dibayar bulanan dipotong dengan?", belakang: "TER bulanan sepanjang tahun, tanpa hitung ulang Desember", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-14", topik: "A3.4", tipe: "angka", depan: "Lapisan tarif PPh 21 final pesangon?", belakang: "0% ≤ Rp50 jt; 5% ≤ Rp100 jt; 15% ≤ Rp500 jt; 25% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-15", topik: "A3.4", tipe: "angka", depan: "Tarif PPh 21 final JHT/THT/pensiun dibayar sekaligus?", belakang: "0% s.d. Rp50 juta; 5% di atasnya", dasar: "PP 68/2009", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-16", topik: "A3.4", tipe: "angka", depan: "PPh 21 DTP padat karya Masa Pajak 2026?", belakang: "5 sektor, upah ≤ Rp10 juta/bulan, dibayar tunai ke pegawai", dasar: "PMK 105/2025", berlakuSejak: "2026-01-01", menggantikan: "PMK 10/2025: 4 sektor, Masa Pajak 2025", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-17", topik: "A3.5", tipe: "angka", depan: "Tarif PPh 22 impor umum?", belakang: "2,5% (ber-API) atau 7,5% (tanpa API) × nilai impor", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-18", topik: "A3.5", tipe: "angka", depan: "PPh 22 atas pembelian oleh bendahara pemerintah?", belakang: "1,5% harga tanpa PPN; dikecualikan ≤ Rp2 juta tidak dipecah", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-19", topik: "A3.5", tipe: "angka", depan: "PPh 22 penjualan emas batangan/perhiasan oleh pengusaha emas?", belakang: "0,25% harga jual; konsumen akhir dan WP PP 55 dikecualikan", dasar: "PMK 48/2023 s.t.d.t.d. PMK 52/2025", berlakuSejak: "2023-05-01", menggantikan: "0,45% untuk emas batangan (PMK 34/2017)", dekTambahan: [] },
    { id: "KT-A3-20", topik: "A3.5", tipe: "angka", depan: "Kriteria mobil penumpang sangat mewah (PPh 22 5%)?", belakang: "Harga > Rp2 miliar atau silinder > 3.000 cc", dasar: "PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-21", topik: "A3.5", tipe: "angka", depan: "PPh 22 oleh marketplace (PMK 37/2025)?", belakang: "0,5% × peredaran bruto pedagang; pemungutan dijadwalkan 1 November 2026", dasar: "PMK 37/2025", berlakuSejak: "2025-07-14", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-22", topik: "A3.6", tipe: "angka", depan: "Dua tarif PPh 23?", belakang: "15%: dividen, bunga, royalti, hadiah · 2%: sewa harta dan jasa", dasar: "Pasal 23 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-23", topik: "A3.6", tipe: "angka", depan: "Kenaikan tarif tanpa NPWP: PPh 21 vs PPh 22/23?", belakang: "PPh 21 naik 20%; PPh 22 dan 23 naik 100%", dasar: "Pasal 21 ayat (5a), 22 ayat (3), 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-24", topik: "A3.6", tipe: "pasal", depan: "Pembayaran yang dikecualikan dari pemotongan PPh 23?", belakang: "Bank, SGU hak opsi, dividen Ps. 4(3)f, SHU koperasi, penyalur pinjaman", dasar: "Pasal 23 ayat (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-25", topik: "A3.7", tipe: "angka", depan: "Tarif PPh final pekerjaan konstruksi (PP 9/2022)?", belakang: "1,75% kualifikasi kecil · 2,65% menengah/besar · 4% tanpa sertifikat", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21", menggantikan: "2% / 3% / 4% (PP 51/2008)", dekTambahan: [] },
    { id: "KT-A3-26", topik: "A3.7", tipe: "angka", depan: "Tarif PPh final konsultansi konstruksi?", belakang: "3,5% bersertifikat; 6% tanpa sertifikat", dasar: "PP 9/2022 Pasal 3 ayat (1)", berlakuSejak: "2022-02-21", menggantikan: "4% / 6% (PP 51/2008)", dekTambahan: [] },
    { id: "KT-A3-27", topik: "A3.7", tipe: "angka", depan: "PPh final sewa tanah dan/atau bangunan?", belakang: "10% × bruto, termasuk service charge", dasar: "PP 34/2017", berlakuSejak: "2018-01-02", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-28", topik: "A3.7", tipe: "angka", depan: "PPh final pengalihan hak atas tanah/bangunan?", belakang: "2,5%; 1% rumah sederhana oleh pengembang; 0% ke pemerintah", dasar: "PP 34/2016 Pasal 2 ayat (1)", berlakuSejak: "2016-09-07", menggantikan: "5% (PP 71/2008)", dekTambahan: [] },
    { id: "KT-A3-29", topik: "A3.7", tipe: "angka", depan: "PPh final bunga obligasi bagi WP dalam negeri?", belakang: "10% final", dasar: "PP 91/2021", berlakuSejak: "2021-08-30", menggantikan: "15% (PP 16/2009 s.t.d.d. PP 55/2019)", dekTambahan: [] },
    { id: "KT-A3-30", topik: "A3.7", tipe: "angka", depan: "PPh final bunga deposito dan tabungan?", belakang: "20%; dikecualikan saldo ≤ Rp7,5 juta (bukan pecahan)", dasar: "PP 131/2000; KMK 51/KMK.04/2001", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-31", topik: "A3.8", tipe: "angka", depan: "Tarif efektif PPh Pasal 15 pelayaran/penerbangan?", belakang: "Pelayaran DN 1,2% · penerbangan DN 1,8% · luar negeri 2,64%", dasar: "KMK 416, 417, 475/KMK.04/1996", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-32", topik: "A3.8", tipe: "angka", depan: "PPh Pasal 26 umum dan branch profit tax?", belakang: "20% × bruto atau tarif P3B; BPT 20% × PKP sesudah PPh", dasar: "Pasal 26 ayat (1) dan (4) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-33", topik: "A3.8", tipe: "pasal", depan: "Aturan tata cara penerapan P3B sejak 31 Desember 2025?", belakang: "PMK 112/2025; Form DGT 6 bagian terekam di Coretax", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: "PER-25/PJ/2018 (Form DGT 7 bagian)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-34", topik: "A3.9", tipe: "angka", depan: "Batas setor PPh 21/22/23/26/4(2)/15 yang dipotong?", belakang: "Tanggal 15 bulan berikutnya; hari libur bergeser ke hari kerja berikutnya", dasar: "PMK 81/2024 Pasal 94 dan 100", berlakuSejak: "2025-01-01", menggantikan: "tanggal 10 bulan berikutnya (PMK 242/2014)", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-35", topik: "A3.9", tipe: "angka", depan: "Batas lapor SPT Masa PPh 21/26 dan Unifikasi?", belakang: "20 hari setelah Masa Pajak berakhir", dasar: "Pasal 3 ayat (3) huruf a UU KUP; PMK 81/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-36", topik: "A3.9", tipe: "definisi", depan: "Kode bukti potong di Coretax?", belakang: "PPh 21/26: BPA1, BPA2, BP21, BP26 · Unifikasi: BPPU, BPNR", dasar: "PER-11/PJ/2025 Pasal 6 ayat (1)", berlakuSejak: "2025-05-22", menggantikan: "1721-A1/A2 (PER-16/PJ/2016) dan bupot unifikasi PER-24/PJ/2021", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-37", topik: "A3.9", tipe: "angka", depan: "Denda terlambat lapor SPT Masa PPh?", belakang: "Rp100.000 per SPT (SPT Masa PPN Rp500.000)", dasar: "Pasal 7 ayat (1) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-38", topik: "A3.1", tipe: "angka", depan: "Batas fasilitas olahraga yang dikecualikan dari objek PPh 21?", belakang: "Rp1,5 juta/pegawai/tahun; golf, pacuan kuda, otomotif tidak dikecualikan", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-39", topik: "A3.1", tipe: "pasal", depan: "Syarat diplomat asing tidak termasuk subjek pajak?", belakang: "Bukan WNI, tanpa penghasilan lain di Indonesia, ada perlakuan timbal balik", dasar: "Pasal 3 ayat (1) huruf b UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-40", topik: "A3.1", tipe: "angka", depan: "Biaya jabatan pegawai yang mulai bekerja di tengah tahun?", belakang: "5% bruto, maksimal Rp500.000 × jumlah bulan bekerja; tanpa penyetahunan", dasar: "PMK 168/2023 (menggantikan PMK 250/PMK.03/2008)", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-41", topik: "A3.2", tipe: "definisi", depan: "Premi dan iuran mana yang menambah bruto TER?", belakang: "Premi JKK, JKM, BPJS Kesehatan dari pemberi kerja; iuran JHT/JP pemberi kerja tidak", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-42", topik: "A3.2", tipe: "prosedur", depan: "Pegawai tetap memperoleh NPWP di tengah tahun: tambahan 20% yang telanjur dipotong?", belakang: "◐ Diperhitungkan dengan PPh 21 bulan-bulan berikutnya (keberlakuan PER-16/PJ/2016 setelah PMK 168/2023 belum dipastikan)", dasar: "Pasal 21 ayat (5a) UU PPh; PER-16/PJ/2016 Pasal 20 ayat (4)", berlakuSejak: "2016-09-29", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-43", topik: "A3.3", tipe: "definisi", depan: "Pembawa acara, penyanyi, dan pemain musik dipotong sebagai?", belakang: "Bukan pegawai: Pasal 17 × 50% × bruto", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-44", topik: "A3.3", tipe: "definisi", depan: "Honorarium kepada artis atau konsultan orang pribadi penduduk luar negeri?", belakang: "PPh 26 (20% atau tarif P3B), bukan PPh 21", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-45", topik: "A3.4", tipe: "angka", depan: "Syarat PPh 21 DTP 2026 bagi pegawai tidak tetap?", belakang: "Sektor tertentu, rata-rata upah harian ≤ Rp500.000, NIK/NPWP terpadankan", dasar: "PMK 105/2025", berlakuSejak: "2026-01-01", menggantikan: "PMK 10/2025: Masa Pajak 2025, empat sektor", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-46", topik: "A3.4", tipe: "definisi", depan: "Komponen uang pesangon dalam PP 68/2009?", belakang: "Termasuk uang penghargaan masa kerja dan uang penggantian hak", dasar: "PP 68/2009 Pasal 1", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-47", topik: "A3.5", tipe: "angka", depan: "PPh 22 impor kedelai, gandum, tepung terigu oleh importir ber-API?", belakang: "0,5% × nilai impor", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-48", topik: "A3.5", tipe: "definisi", depan: "Nilai impor sebagai dasar PPh 22 impor?", belakang: "CIF + bea masuk + pungutan pabean lain; biaya setelah pabean tidak termasuk", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-49", topik: "A3.5", tipe: "angka", depan: "PPh 22 industri/eksportir atas pembelian hasil bumi yang belum diolah?", belakang: "0,25% × harga beli tanpa PPN, juga bila dibeli langsung dari petani; dikecualikan ≤ Rp20 juta per Masa Pajak", dasar: "PMK 51/2025 Pasal 3 ayat (1) huruf f dan Pasal 4 ayat (1) huruf e angka 6 (PPh Pasal 22, berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-50", topik: "A3.5", tipe: "angka", depan: "PPh 22 penjualan BBM oleh produsen/importir?", belakang: "0,25% ke SPBU yang menjual BBM dari Pertamina/anak usahanya; 0,3% lainnya; final bagi penyalur/agen", dasar: "PMK 51/2025 Pasal 3 ayat (1) huruf c dan Pasal 10 ayat (2) (PPh Pasal 22; berlaku 1 Agustus 2025). PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-51", topik: "A3.5", tipe: "angka", depan: "Kriteria hunian sangat mewah (PPh 22 1%)?", belakang: "Rumah > Rp30 miliar atau > 400 m²; apartemen > Rp30 miliar atau > 150 m²", dasar: "PMK 92/PMK.03/2019", berlakuSejak: "2019-06-19", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-52", topik: "A3.6", tipe: "pasal", depan: "Saat terutang PPh 23?", belakang: "Saat dibayar, disediakan untuk dibayar, atau jatuh tempo — mana lebih dahulu", dasar: "Pasal 23 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-53", topik: "A3.6", tipe: "definisi", depan: "Dasar PPh 23 bila tagihan memakai DPP nilai lain 11/12?", belakang: "Harga jual jasa tanpa PPN, bukan DPP nilai lain", dasar: "Pasal 23 ayat (1) UU PPh; PMK 131/2024", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-54", topik: "A3.6", tipe: "definisi", depan: "Jumlah bruto jasa penyedia tenaga kerja (PPh 23)?", belakang: "Imbalan jasa saja; gaji pekerja yang dirinci dan didukung bukti dikeluarkan", dasar: "PMK 141/PMK.03/2015 Pasal 1", berlakuSejak: "2015-08-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-55", topik: "A3.7", tipe: "prosedur", depan: "Kapan penjual orang pribadi membayar PPh pengalihan tanah/bangunan?", belakang: "Sebelum akta ditandatangani; PPAT menunggu bukti setor diteliti DJP", dasar: "PP 34/2016 Pasal 3", berlakuSejak: "2016-09-07", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-56", topik: "A3.7", tipe: "angka", depan: "Tarif PPh final pekerjaan konstruksi terintegrasi?", belakang: "2,65% bersertifikat; 4% tanpa sertifikat; dipotong saat pembayaran", dasar: "PP 9/2022 Pasal 3 ayat (1) huruf d dan e", berlakuSejak: "2022-02-21", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-57", topik: "A3.7", tipe: "angka", depan: "PPh final hadiah undian?", belakang: "25% × jumlah bruto hadiah", dasar: "PP 132/2000", berlakuSejak: "2001-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-58", topik: "A3.8", tipe: "angka", depan: "PPh 26 premi asuransi ke luar negeri?", belakang: "Dibayar tertanggung 10%; perusahaan asuransi 2%; reasuransi 1%", dasar: "Pasal 26 ayat (2) UU PPh; KMK 624/KMK.04/1994", berlakuSejak: "1995-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-59", topik: "A3.8", tipe: "definisi", depan: "Pembelian barang impor dari penjual luar negeri: objek PPh 26?", belakang: "Bukan; pelunasan PPh melalui PPh 22 impor", dasar: "Pasal 26 ayat (1) dan Pasal 22 UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-60", topik: "A3.8", tipe: "definisi", depan: "Syarat tambahan tarif P3B atas dividen, bunga, royalti?", belakang: "Penerima harus beneficial owner, bukan agen, nominee, atau conduit", dasar: "PMK 112/2025", berlakuSejak: "2025-12-31", menggantikan: "PER-25/PJ/2018", dekTambahan: ["perubahan-2025-2026"] },
    { id: "KT-A3-61", topik: "A3.8", tipe: "pasal", depan: "Kapan branch profit tax tidak dikenakan?", belakang: "Bila SELURUH laba setelah pajak BUT ditanamkan kembali di Indonesia sesuai PMK 14/2011 (paling lambat akhir tahun pajak berikutnya); penanaman kembali sebagian tidak membebaskan", dasar: "Pasal 26 ayat (4) UU PPh; PMK 14/PMK.03/2011 Pasal 1 ayat (3)", berlakuSejak: "2011-01-24", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-62", topik: "A3.9", tipe: "prosedur", depan: "Pegawai pindah kerja dalam setahun: akibatnya di SPT Tahunan?", belakang: "Dua BPA1 digabung, PTKP sekali; biasanya kurang bayar PPh 29", dasar: "Pasal 17 dan 28 UU PPh; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-63", topik: "A3.9", tipe: "definisi", depan: "Yang diisi di Lampiran III SPT 1771?", belakang: "PPh 22 dan 23 oleh pihak lain; bukan PPh final, bukan PPh 25", dasar: "Pasal 28 ayat (1) UU PPh; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-64", topik: "A3.8", tipe: "pasal", depan: "Kurs untuk DPP PPh potong/pungut dalam valuta asing?", belakang: "Kurs KMK yang berlaku saat terutang; bukan kurs BI atau bank", dasar: "KMK nilai kurs mingguan; Pasal 23 ayat (1) dan 26 ayat (1) UU PPh (pasal saat konversi ◐)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-65", topik: "A3.9", tipe: "angka", depan: "Periode berlaku KMK nilai kurs (kurs pajak)?", belakang: "Mingguan: Rabu sampai Selasa berikutnya", dasar: "KMK nilai kurs sebagai dasar pelunasan BM, PPN/PPnBM, BK, dan PPh", berlakuSejak: null, menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-66", topik: "A3.8", tipe: "definisi", depan: "Kurs tengah BI dipakai untuk apa?", belakang: "Pembukuan SAK: penjabaran pos moneter valas pada tanggal neraca", dasar: "PSAK 221 (eks-PSAK 10); PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-67", topik: "A3.8", tipe: "prosedur", depan: "Royalti USD jatuh tempo 30 Sep, ditransfer 14 Okt: kurs dan masa PPh 26?", belakang: "Kurs KMK berlaku 30 September; Masa September; setor 15 Oktober", dasar: "Pasal 26 ayat (1) UU PPh; PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-68", topik: "A3.6", tipe: "prosedur", depan: "Uang muka sewa dalam USD dibayar sebelum tagihan: kurs PPh 23?", belakang: "Kurs KMK saat uang muka dibayar; sisanya kurs KMK saat pelunasan", dasar: "Pasal 23 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-69", topik: "A3.5", tipe: "angka", depan: "Kurs untuk PPh 22 impor dalam USD?", belakang: "◐ Kurs KMK yang dipakai menghitung bea masuk pada PIB", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025); KMK nilai kurs", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-70", topik: "A3.8", tipe: "angka", depan: "Gross-up PPh 26 atas bunga neto dalam USD?", belakang: "Bruto = neto ÷ (1 − tarif), lalu × kurs KMK saat terutang", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-71", topik: "A3.8", tipe: "pasal", depan: "Selisih kurs pelunasan utang valas: perlakuan PPh?", belakang: "Laba objek Ps. 4(1)l; rugi biaya Ps. 6(1)e; PPh dipotong tetap", dasar: "Pasal 4 ayat (1) huruf l, 6 ayat (1) huruf e UU PPh; PP 94/2010 Pasal 9", berlakuSejak: "2010-12-30", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-72", topik: "A3.9", tipe: "prosedur", depan: "PPh 26 kurang setor karena salah kurs, SPT Masa sudah dilaporkan?", belakang: "Setor untuk masa terutang, betulkan BPNR dan SPT Masa; bunga Ps. 8(2a)", dasar: "Pasal 8 ayat (2a) UU KUP; PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-73", topik: "A3.2", tipe: "prosedur", depan: "PPh 21 pegawai tetap yang meninggal atau meninggalkan Indonesia selamanya di tengah tahun?", belakang: "Masa Pajak Terakhir bulan berhenti; neto disetahunkan, PPh setahun × n/12", dasar: "Pasal 2A ayat (1) UU PPh; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-74", topik: "A3.2", tipe: "prosedur", depan: "Pegawai resign vs pegawai meninggal: beda hitung PPh 21 Masa Pajak Terakhir?", belakang: "Resign: tanpa penyetahunan; meninggal/pindah ke luar negeri selamanya: disetahunkan lalu diprorata", dasar: "PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-75", topik: "A3.1", tipe: "angka", depan: "Batas bingkisan selain hari raya keagamaan yang dikecualikan dari objek PPh 21?", belakang: "Rp3 juta/pegawai/tahun, diterima seluruh pegawai; hari raya keagamaan tanpa batas", dasar: "PMK 66/2023 Lampiran", berlakuSejak: "2023-07-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-76", topik: "A3.9", tipe: "angka", depan: "Tambahan tarif bila penerima tidak ber-NPWP: PPh 21, 22, 23?", belakang: "PPh 21: 20% lebih tinggi; PPh 22 dan 23: 100% lebih tinggi", dasar: "Pasal 21 ayat (5a), 22 ayat (3), 23 ayat (1a) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-77", topik: "A3.9", tipe: "prosedur", depan: "Upaya penerima penghasilan yang tidak setuju atas jumlah pemotongan PPh?", belakang: "Keberatan atas pemotongan pihak ketiga, paling lama 3 bulan sejak tanggal pemotongan", dasar: "Pasal 25 ayat (1) huruf e dan ayat (3) UU KUP", berlakuSejak: "2008-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-78", topik: "A3.9", tipe: "definisi", depan: "Pemotongan vs pemungutan PPh?", belakang: "Pemotongan oleh pembayar penghasilan (21/23/26/4(2)/15); pemungutan PPh 22 atas transaksi tertentu", dasar: "Pasal 21, 22, 23, 26, 4 ayat (2), 15 UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-79", topik: "A3.8", tipe: "angka", depan: "PPh 26 atas penjualan harta di Indonesia oleh WPLN?", belakang: "5% × harga jual (20% × 25%), hanya atas perhiasan mewah, berlian, emas, intan, jam tangan mewah, barang antik, lukisan, mobil, motor, kapal pesiar, dan/atau pesawat terbang ringan; tanah/bangunan tetap PPh final Ps. 4(2)", dasar: "Pasal 26 ayat (2) UU PPh; PMK 82/PMK.03/2009", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-80", topik: "A3.8", tipe: "definisi", depan: "Pensiun bulanan kepada mantan pegawai yang kini WPLN?", belakang: "PPh 26 20% × bruto (atau P3B); tanpa biaya pensiun dan PTKP", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-81", topik: "A3.8", tipe: "definisi", depan: "Hadiah lomba (bukan undian) kepada orang pribadi luar negeri?", belakang: "PPh 26 20% × bruto atau tarif P3B; bukan 25% undian", dasar: "Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-82", topik: "A3.8", tipe: "pasal", depan: "Artis luar negeri ber-Form DGT: PPh 26 atas honor konser?", belakang: "Tetap dipotong; pasal artis P3B memberi hak pemajakan ke negara pertunjukan", dasar: "Pasal 26 ayat (1) UU PPh; pasal artis dan olahragawan P3B", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-83", topik: "A3.8", tipe: "definisi", depan: "Tagihan jasa WPLN dicatat sebagai utang sebelum jatuh tempo: saat terutang PPh 26?", belakang: "◐ Saat dicatat (disediakan untuk dibayarkan); kurs KMK tanggal itu", dasar: "Pasal 26 ayat (1) UU PPh (penafsiran 'disediakan' dan saat konversi kurs ◐)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-84", topik: "A3.8", tipe: "definisi", depan: "PPh 26 gross-up vs ditanggung: dapat dibiayakan?", belakang: "◐ Gross-up: bagian PPh masuk bruto, dapat dibiayakan · ditanggung: koreksi Ps. 9(1)h", dasar: "Pasal 6 ayat (1) dan Pasal 9 ayat (1) huruf h UU PPh (perlakuan PPh 26 gross-up ◐)", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-85", topik: "A3.8", tipe: "definisi", depan: "Imbalan jasa kepada BUT di Indonesia: PPh 26?", belakang: "Bukan; BUT dipotong PPh 23 seperti WP dalam negeri", dasar: "Pasal 23 ayat (1) dan Pasal 26 ayat (1) UU PPh", berlakuSejak: "2009-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-86", topik: "A3.9", tipe: "prosedur", depan: "Bukti potong honor artis orang pribadi luar negeri?", belakang: "BP26 dalam SPT Masa PPh 21/26, bukan BPNR", dasar: "PER-11/PJ/2025", berlakuSejak: "2025-05-22", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-87", topik: "A3.2", tipe: "prosedur", depan: "Gaji pegawai dibayar dalam USD: kurs untuk DPP PPh 21?", belakang: "Kurs KMK yang berlaku saat pembayaran; bukan kurs bank atau kurs tengah BI", dasar: "Pasal 21 UU PPh; PMK 168/2023; KMK nilai kurs mingguan", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-88", topik: "A3.2", tipe: "prosedur", depan: "Masa Pajak Terakhir pegawai bergaji USD: bruto setahun dalam rupiah?", belakang: "Jumlah rupiah tiap bulan dengan kurs KMK masing-masing; bukan total USD × kurs Desember", dasar: "PP 58/2023 Pasal 2; PMK 168/2023", berlakuSejak: "2024-01-01", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-89", topik: "A3.7", tipe: "prosedur", depan: "Uang muka dan termin jasa konstruksi dalam USD: kurs PPh final?", belakang: "Kurs KMK saat tiap pembayaran; bukan kurs kontrak atau berita acara", dasar: "PP 9/2022 Pasal 3; KMK nilai kurs mingguan", berlakuSejak: "2022-02-21", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-90", topik: "A3.4", tipe: "prosedur", depan: "Pesangon USD dibayar bertahap: kurs dan lapisan tarif?", belakang: "Tiap tahap dengan kurs KMK saat dibayar; lapisan tarif kumulatif dalam rupiah", dasar: "PP 68/2009", berlakuSejak: "2009-11-16", menggantikan: null, dekTambahan: [] },
    { id: "KT-A3-91", topik: "A3.5", tipe: "definisi", depan: "Pembelian USD oleh BUMN pemungut: kurs PPh 22 vs kurs PPN?", belakang: "PPh 22: kurs KMK saat pembayaran · PPN: kurs KMK saat faktur seharusnya dibuat", dasar: "PMK 51/2025 (PPh Pasal 22; berlaku 1 Agustus 2025; saat terutang pembelian oleh BUMN: saat pembayaran, Pasal 5 ayat (4); PMK 34/PMK.010/2017 dicabut PMK 81/2024 sejak 1 Januari 2025); PP 44/2022 Pasal 21", berlakuSejak: "2025-08-01", menggantikan: null, dekTambahan: [] }
  ],
  kasus: [
    {
      id: "K-A3-01", judul: "Payroll setahun: TER, THR, bonus, dan hitung ulang Desember", topik: "A3.2", estimasiMenit: 20,
      narasi: "Ibu Nadia adalah pegawai tetap PT Cahaya Abadi sejak 2019. Pada 1 Januari 2026 ia sudah menikah, suaminya bekerja sebagai pegawai swasta, dan mereka memiliki dua anak. Setiap bulan ia menerima gaji Rp12.000.000 dan tunjangan jabatan Rp1.500.000, sedangkan PT menanggung premi JKK, JKM, dan BPJS Kesehatan Rp400.000. Ia membayar iuran JHT dan Jaminan Pensiun Rp360.000 per bulan serta zakat penghasilan Rp300.000 per bulan melalui PT kepada BAZNAS. Pada Maret 2026 ia menerima THR Rp12.000.000 dan pada Desember 2026 bonus Rp10.000.000. PPh 21 Januari–November dipotong dengan TER.",
      data: [["Status 1 Januari 2026", "Wanita kawin, suami bekerja, 2 anak"], ["Gaji + tunjangan jabatan", "Rp13.500.000/bulan"], ["Premi JKK/JKM/BPJS Kesehatan (ditanggung PT)", "Rp400.000/bulan"], ["Iuran JHT + JP (dibayar pegawai)", "Rp360.000/bulan"], ["Zakat melalui PT ke BAZNAS", "Rp300.000/bulan"], ["THR (Maret)", "Rp12.000.000"], ["Bonus (Desember)", "Rp10.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "Kategori TER yang dipakai untuk Ibu Nadia?", tipe: "pilihan", opsi: { A: "Kategori B, karena K/2", B: "Kategori C, karena K/3", C: "Kategori A, karena PTKP-nya TK/0", D: "Kategori B, karena TK/2" }, jawaban: "C",
          petunjuk: ["Pegawai wanita kawin memperoleh PTKP kawin dan tanggungan hanya bila suaminya tidak berpenghasilan", "Suami Ibu Nadia bekerja, sehingga PTKP-nya hanya untuk diri sendiri: TK/0", "Jawaban: C"],
          penjelasan: "PTKP pegawai wanita kawin yang suaminya berpenghasilan adalah TK/0, dan TK/0 masuk kategori A (PP 58/2023 Pasal 2 ayat (3))." },
        { no: 2, pertanyaan: "PPh 21 Masa Pajak Januari 2026 (Rp)?", tipe: "angka", jawaban: 834000, toleransi: 0,
          petunjuk: ["Bruto = gaji + tunjangan + premi yang ditanggung PT", "Bruto Rp13.900.000 berada pada lapisan A Rp13.750.000–15.100.000 (6%)", "6% × Rp13.900.000 = Rp834.000"],
          penjelasan: "TER dikalikan seluruh bruto bulanan; iuran dan zakat belum dikurangkan pada masa selain Masa Pajak Terakhir." },
        { no: 3, pertanyaan: "PPh 21 Masa Pajak Maret 2026, bulan THR (Rp)?", tipe: "angka", jawaban: 2590000, toleransi: 0,
          petunjuk: ["Tambahkan THR ke bruto Maret", "Rp13.900.000 + Rp12.000.000 = Rp25.900.000 → lapisan A Rp24.150.000–26.450.000 (10%)", "10% × Rp25.900.000 = Rp2.590.000"],
          penjelasan: "THR digabung dengan penghasilan bulan diterimanya, lalu dicari lapisan TER yang sesuai." },
        { no: 4, pertanyaan: "Penghasilan neto setahun (Rp)?", tipe: "angka", jawaban: 174880000, toleransi: 0,
          petunjuk: ["Bruto setahun = 12 × Rp13.900.000 + THR + bonus = Rp188.800.000", "Kurangi biaya jabatan maksimal Rp6.000.000, iuran Rp4.320.000, dan zakat Rp3.600.000", "Neto = Rp174.880.000"],
          penjelasan: "Zakat yang dibayar melalui pemberi kerja kepada badan amil resmi dan iuran pensiun/JHT yang dibayar pegawai mengurangi penghasilan bruto pada Masa Pajak Terakhir." },
        { no: 5, pertanyaan: "Penghasilan Kena Pajak setahun (Rp)?", tipe: "angka", jawaban: 120880000, toleransi: 0,
          petunjuk: ["PTKP TK/0 = Rp54.000.000", "Rp174.880.000 − Rp54.000.000", "PKP Rp120.880.000 (sudah bulat ribuan)"],
          penjelasan: "PKP dibulatkan ke bawah dalam ribuan rupiah penuh; di sini sudah bulat." },
        { no: 6, pertanyaan: "PPh 21 Masa Pajak Desember 2026 (Rp)?", tipe: "angka", jawaban: 1202000, toleransi: 0,
          petunjuk: ["PPh setahun = 5% × Rp60 juta + 15% × Rp60.880.000 = Rp12.132.000", "PPh Januari–November = 10 × Rp834.000 + Rp2.590.000 = Rp10.930.000", "PPh Desember = Rp12.132.000 − Rp10.930.000 = Rp1.202.000"],
          penjelasan: "Masa Pajak Terakhir memakai tarif Pasal 17 atas PKP setahun dikurangi PPh yang telah dipotong Januari–November." }
      ],
      kesimpulan: "Kategori ditentukan oleh PTKP pegawai wanita (TK/0 → kategori A). TER Januari–November dikalikan bruto, termasuk THR pada bulan diterima. Pada Desember, PKP Rp120.880.000 menghasilkan PPh setahun Rp12.132.000; setelah dikurangi PPh Januari–November Rp10.930.000, PPh Desember Rp1.202.000.",
      kalkulatorRef: "pph21-ter"
    },
    {
      id: "K-A3-02", judul: "Rekap pemotongan satu masa pajak: klasifikasi, tarif, bukti potong, tenggat", topik: "A3.6", estimasiMenit: 20,
      narasi: "PT Prima Rekayasa (WP badan dalam negeri, PKP) pada Masa Pajak Oktober 2026 melakukan pembayaran berikut (semua jumlah belum termasuk PPN): (1) sewa ruang kantor setahun kepada PT Graha Sentosa Rp135.000.000 ditambah service charge Rp15.000.000; (2) jasa konsultansi perencanaan konstruksi kepada CV Arsitek Nusantara yang memiliki sertifikat badan usaha Rp80.000.000; (3) jasa perawatan AC kantor kepada CV Sejuk Selalu, yang bukan penyedia jasa konstruksi bersertifikat dan tidak memiliki NPWP, Rp12.000.000; (4) royalti perangkat lunak kepada SoftCo Ltd (Singapura, tanpa BUT) Rp300.000.000, dengan Form DGT sah yang terekam di Coretax sebelum pembayaran dan tarif royalti menurut P3B (anggapan kasus) 10%; serta (5) honorarium tenaga ahli struktur, Ir. Bayu, orang pribadi bukan pegawai yang ber-NPWP, Rp30.000.000.",
      data: [["Sewa kantor + service charge", "Rp135.000.000 + Rp15.000.000"], ["Konsultansi perencanaan konstruksi (bersertifikat)", "Rp80.000.000"], ["Perawatan AC (CV tanpa NPWP)", "Rp12.000.000"], ["Royalti ke SoftCo Ltd (Form DGT sah, P3B 10%)", "Rp300.000.000"], ["Honorarium Ir. Bayu (bukan pegawai)", "Rp30.000.000"], ["Masa Pajak", "Oktober 2026"]],
      langkah: [
        { no: 1, pertanyaan: "Pasal dan tarif atas sewa ruang kantor?", tipe: "pilihan", opsi: { A: "PPh 23 2% atas sewa harta", B: "PPh 4 ayat (2) final 10% atas sewa dan service charge", C: "PPh 4 ayat (2) 10% atas sewa saja; service charge PPh 23 2%", D: "PPh 4 ayat (2) final 2,5%" }, jawaban: "B",
          petunjuk: ["Objek sewanya bangunan, bukan harta bergerak", "Jumlah bruto sewa tanah/bangunan termasuk service charge", "Jawaban: B"],
          penjelasan: "Sewa tanah dan/atau bangunan dikenai PPh final 10% dari jumlah bruto nilai persewaan, termasuk service charge." },
        { no: 2, pertanyaan: "PPh atas sewa kantor (Rp)?", tipe: "angka", jawaban: 15000000, toleransi: 0,
          petunjuk: ["Bruto = Rp135 juta + Rp15 juta", "Tarif 10%", "10% × Rp150.000.000 = Rp15.000.000"],
          penjelasan: "Dipotong PT Prima Rekayasa dan dibuatkan BPPU." },
        { no: 3, pertanyaan: "PPh atas konsultansi perencanaan konstruksi (Rp)?", tipe: "angka", jawaban: 2800000, toleransi: 0,
          petunjuk: ["Konsultansi konstruksi dikenai PPh 4 ayat (2) final (PP 9/2022)", "Penyedia bersertifikat: 3,5%", "3,5% × Rp80.000.000 = Rp2.800.000"],
          penjelasan: "Tanpa sertifikat tarifnya 6%; tarif lama PP 51/2008 (4%) tidak dipakai lagi." },
        { no: 4, pertanyaan: "PPh 23 atas jasa perawatan AC (Rp)?", tipe: "angka", jawaban: 480000, toleransi: 0,
          petunjuk: ["Perawatan AC oleh pihak non-konstruksi termasuk jasa lain PMK 141/2015 (2%)", "Penerima tidak ber-NPWP: tarif 100% lebih tinggi = 4%", "4% × Rp12.000.000 = Rp480.000"],
          penjelasan: "Pasal 23 ayat (1a) UU PPh menaikkan tarif 100% bagi penerima tanpa NPWP." },
        { no: 5, pertanyaan: "PPh 26 atas royalti kepada SoftCo Ltd (Rp)?", tipe: "angka", jawaban: 30000000, toleransi: 0,
          petunjuk: ["Royalti kepada WPLN dikenai PPh 26 20%, kecuali P3B menurunkan tarifnya", "Form DGT sah dan terekam sebelum pembayaran → tarif P3B 10%", "10% × Rp300.000.000 = Rp30.000.000"],
          penjelasan: "Buktinya BPNR; tanpa Form DGT yang sah tarifnya 20% (Rp60.000.000)." },
        { no: 6, pertanyaan: "PPh 21 atas honorarium Ir. Bayu (Rp)?", tipe: "angka", jawaban: 750000, toleransi: 0,
          petunjuk: ["Bukan pegawai: DPP = 50% × bruto", "DPP Rp15.000.000 × tarif Pasal 17 lapisan pertama 5%", "Rp750.000"],
          penjelasan: "Dilaporkan dengan BP21 dalam SPT Masa PPh 21/26, terpisah dari SPT Masa PPh Unifikasi." },
        { no: 7, pertanyaan: "Batas setor dan lapor seluruh PPh Masa Oktober 2026?", tipe: "pilihan", opsi: { A: "Setor paling lambat 10 November 2026; lapor paling lambat 20 November 2026", B: "Setor paling lambat Jumat, 13 November 2026; lapor paling lambat 20 November 2026", C: "Setor paling lambat 16 November 2026; lapor paling lambat 30 November 2026", D: "Setor paling lambat Senin, 16 November 2026; lapor paling lambat Jumat, 20 November 2026" }, jawaban: "D",
          petunjuk: ["Tenggat setor tanggal 15 bulan berikutnya; 15 November 2026 jatuh pada hari Minggu", "Hari libur menggeser tenggat setor ke hari kerja berikutnya", "Lapor 20 hari setelah masa berakhir: Jumat, 20 November 2026. Jawaban: D"],
          penjelasan: "PMK 81/2024 Pasal 94 dan 100: setor tanggal 15 (bergeser bila hari libur); SPT Masa PPh dilaporkan paling lama 20 hari setelah Masa Pajak berakhir." }
      ],
      kesimpulan: "Klasifikasi menentukan tarif dan dokumen: sewa (Rp15.000.000) dan konsultansi konstruksi (Rp2.800.000) sebagai PPh 4 ayat (2) final serta perawatan AC (Rp480.000) sebagai PPh 23 — ketiganya BPPU; royalti Rp30.000.000 sebagai PPh 26 dengan BPNR; honorarium Rp750.000 sebagai PPh 21 dengan BP21. Semuanya disetor paling lambat 16 November 2026 dan dilaporkan paling lambat 20 November 2026.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-A3-03", judul: "Pesangon bertahap lintas tahun dan JHT sekaligus", topik: "A3.4", estimasiMenit: 12,
      narasi: "Tuan Hasan di-PHK oleh PT Logam Jaya pada Desember 2026. Perusahaan membayar uang pesangon dan uang penghargaan masa kerja Rp300.000.000 dalam dua tahap: Rp120.000.000 pada 20 Desember 2026 dan Rp180.000.000 pada 15 Maret 2027. Pada Januari 2027 ia juga mencairkan seluruh saldo JHT dari BPJS Ketenagakerjaan Rp90.000.000. Ia ber-NPWP dengan NIK terpadankan.",
      data: [["Pesangon tahap 1 (Desember 2026)", "Rp120.000.000"], ["Pesangon tahap 2 (Maret 2027)", "Rp180.000.000"], ["JHT sekaligus (Januari 2027)", "Rp90.000.000"]],
      langkah: [
        { no: 1, pertanyaan: "PPh 21 final atas pesangon tahap 1 (Rp)?", tipe: "angka", jawaban: 5500000, toleransi: 0,
          petunjuk: ["Lapisan pesangon: 0% s.d. Rp50 jt; 5% s.d. Rp100 jt; 15% s.d. Rp500 jt; 25% di atasnya", "0 + 5% × Rp50 jt + 15% × Rp20 jt", "Rp2.500.000 + Rp3.000.000 = Rp5.500.000"],
          penjelasan: "Tarif berlapis diterapkan atas tiap bagian, bukan tarif tertinggi atas seluruh jumlah." },
        { no: 2, pertanyaan: "PPh 21 final atas jumlah kumulatif Rp300.000.000 (Rp)?", tipe: "angka", jawaban: 32500000, toleransi: 0,
          petunjuk: ["Tahap kedua masih dalam 2 tahun kalender, jadi dihitung kumulatif", "0 + Rp2.500.000 + 15% × Rp200.000.000", "Rp32.500.000"],
          penjelasan: "Pembayaran bertahap dalam paling lama 2 tahun kalender digabung untuk menentukan lapisan." },
        { no: 3, pertanyaan: "PPh 21 final yang dipotong atas tahap 2 (Rp)?", tipe: "angka", jawaban: 27000000, toleransi: 0,
          petunjuk: ["Kurangi PPh yang sudah dipotong pada tahap 1", "Rp32.500.000 − Rp5.500.000", "Rp27.000.000"],
          penjelasan: "Tanpa mengurangkan tahap pertama, PPh akan terpotong ganda." },
        { no: 4, pertanyaan: "PPh 21 final atas JHT yang dipotong BPJS Ketenagakerjaan (Rp)?", tipe: "angka", jawaban: 2000000, toleransi: 0,
          petunjuk: ["JHT memakai lapisan manfaat pensiun/THT/JHT, bukan lapisan pesangon", "0% s.d. Rp50 juta; 5% di atasnya", "5% × Rp40.000.000 = Rp2.000.000"],
          penjelasan: "JHT dan pesangon dihitung terpisah karena lapisan tarif dan pemotongnya berbeda." },
        { no: 5, pertanyaan: "Sifat dan pelaporan PPh tersebut bagi Tuan Hasan?", tipe: "pilihan", opsi: { A: "Tidak final; dikreditkan dalam SPT Tahunan", B: "Final; dibuatkan BPA1 dan dikreditkan dalam SPT Tahunan", C: "Final; dibuatkan BP21 oleh PT Logam Jaya dan BPJS Ketenagakerjaan; dilaporkan pada bagian penghasilan final SPT Tahunan dan tidak dikreditkan", D: "Final; tidak perlu dilaporkan dalam SPT Tahunan" }, jawaban: "C",
          petunjuk: ["PPh atas pesangon dan JHT yang dibayar sekaligus bersifat final", "Bukti potong untuk penerima selain pegawai tetap bulanan adalah BP21", "Jawaban: C"],
          penjelasan: "Penghasilan final tetap dilaporkan dalam SPT Tahunan, tetapi PPh-nya tidak dapat dikreditkan." }
      ],
      kesimpulan: "Pesangon dihitung kumulatif dalam 2 tahun kalender: tahap 1 Rp5.500.000 dan tahap 2 Rp27.000.000 (total Rp32.500.000). JHT dihitung terpisah dengan lapisan 0%/5% sebesar Rp2.000.000. Seluruhnya final, dibuktikan dengan BP21, dilaporkan sebagai penghasilan final, dan tidak dikreditkan.",
      kalkulatorRef: "pesangon"
    },
    {
      id: "K-A3-04", judul: "Bendahara dinas satu masa: PPh 22, PPh 23, PPh 4 ayat (2), dan PPh 21", topik: "A3.5", estimasiMenit: 18,
      narasi: "Bendahara Pengeluaran Dinas Kesehatan Provinsi Nusa Raya pada Masa Pajak Juni 2026 melakukan pembayaran berikut (rekanan ber-NPWP kecuali disebut lain): (1) alat kesehatan habis pakai dari PT Medika Distribusi (PKP) dengan tagihan Rp55.500.000 termasuk PPN (DPP nilai lain 11/12, tarif 12%); (2) alat tulis kantor Rp1.900.000 dari Toko Pena dalam satu kuitansi yang tidak dipecah; (3) BBM kendaraan operasional Rp4.000.000 di SPBU; (4) kursi tunggu pasien Rp9.000.000 dari UD Meubel Jaya milik Tuan Hasan yang tidak memiliki NPWP dan NIK-nya belum dipadankan; (5) jasa kebersihan Rp30.000.000 (belum termasuk PPN) kepada PT Bersih Selalu; (6) sewa gudang penyimpanan logistik Rp20.000.000 kepada Tuan Darto (orang pribadi); dan (7) honorarium narasumber pelatihan Rp6.000.000 kepada dr. Rina, dokter praktik swasta yang bukan ASN dan ber-NPWP.",
      data: [["Alat kesehatan (termasuk PPN 11/12 × 12%)", "Rp55.500.000"], ["ATK, satu kuitansi utuh", "Rp1.900.000"], ["BBM kendaraan dinas", "Rp4.000.000"], ["Kursi tunggu, rekanan tanpa NPWP", "Rp9.000.000"], ["Jasa kebersihan (tanpa PPN)", "Rp30.000.000"], ["Sewa gudang dari orang pribadi", "Rp20.000.000"], ["Honorarium narasumber dr. Rina (bukan pegawai)", "Rp6.000.000"], ["Masa Pajak", "Juni 2026"]],
      langkah: [
        { no: 1, pertanyaan: "Pembelian mana yang dikecualikan dari pungutan PPh Pasal 22 bendahara?", tipe: "pilihan", opsi: { A: "(2) ATK dan (3) BBM", B: "(2) ATK saja", C: "(3) BBM dan (4) kursi karena rekanannya tidak ber-NPWP", D: "(1) alat kesehatan, (2) ATK, dan (3) BBM" }, jawaban: "A",
          petunjuk: ["Pengecualian bendahara: pembayaran paling banyak Rp2.000.000 yang tidak dipecah, serta pembelian BBM, listrik, gas, air minum, dan benda pos", "ATK Rp1.900.000 dalam satu kuitansi utuh dan BBM memenuhi pengecualian; ketiadaan NPWP justru menaikkan tarif", "Jawaban: A"],
          penjelasan: "PMK 51/2025 (PPh Pasal 22, berlaku 1 Agustus 2025) mengecualikan pembayaran ≤ Rp2.000.000 (tidak termasuk PPN) yang bukan pecahan dan pembelian BBM; rekanan tanpa NPWP tetap dipungut dengan tarif 100% lebih tinggi." },
        { no: 2, pertanyaan: "PPh Pasal 22 atas alat kesehatan (Rp)?", tipe: "angka", jawaban: 750000, toleransi: 0,
          petunjuk: ["Dasar pungutan adalah harga tanpa PPN; beban PPN efektif 12% × 11/12 = 11%", "Rp55.500.000 ÷ 1,11 = Rp50.000.000", "1,5% × Rp50.000.000 = Rp750.000"],
          penjelasan: "Memungut dari tagihan termasuk PPN (Rp832.500) atau dari DPP nilai lain (Rp687.500) adalah kekeliruan umum." },
        { no: 3, pertanyaan: "PPh Pasal 22 atas kursi tunggu dari UD Meubel Jaya (Rp)?", tipe: "angka", jawaban: 270000, toleransi: 0,
          petunjuk: ["Tarif bendahara 1,5%", "Tanpa NPWP: 100% lebih tinggi menjadi 3%", "3% × Rp9.000.000 = Rp270.000"],
          penjelasan: "Pasal 22 ayat (3) UU PPh menaikkan tarif 100% bagi pihak yang tidak ber-NPWP." },
        { no: 4, pertanyaan: "PPh Pasal 23 atas jasa kebersihan (Rp)?", tipe: "angka", jawaban: 600000, toleransi: 0,
          petunjuk: ["Jasa kebersihan termasuk jasa lain PMK 141/PMK.03/2015", "Tarif 2% × jumlah bruto tanpa PPN", "2% × Rp30.000.000 = Rp600.000"],
          penjelasan: "Bendahara pemerintah juga wajib memotong PPh 23 atas jasa kepada badan dalam negeri." },
        { no: 5, pertanyaan: "PPh Pasal 4 ayat (2) atas sewa gudang (Rp)?", tipe: "angka", jawaban: 2000000, toleransi: 0,
          petunjuk: ["Sewa tanah dan/atau bangunan dikenai PPh final, bukan PPh 23", "Tarif 10% × jumlah bruto sewa", "10% × Rp20.000.000 = Rp2.000.000"],
          penjelasan: "PP 34/2017: PPh final 10% dipotong oleh penyewa yang merupakan pemotong, termasuk instansi pemerintah." },
        { no: 6, pertanyaan: "PPh Pasal 21 atas honorarium dr. Rina (Rp)?", tipe: "angka", jawaban: 150000, toleransi: 0,
          petunjuk: ["Dokter praktik swasta yang bukan ASN adalah bukan pegawai", "DPP = 50% × Rp6.000.000 = Rp3.000.000", "5% × Rp3.000.000 = Rp150.000"],
          penjelasan: "Narasumber yang bukan pegawai dinas dipotong seperti bukan pegawai lainnya dan dibuatkan BP21." },
        { no: 7, pertanyaan: "Jumlah seluruh PPh yang dipotong/dipungut bendahara pada Masa Juni 2026 (Rp)?", tipe: "angka", jawaban: 3770000, toleransi: 0,
          petunjuk: ["Jumlahkan PPh 22, PPh 23, PPh 4 ayat (2), dan PPh 21", "Rp750.000 + Rp270.000 + Rp600.000 + Rp2.000.000 + Rp150.000", "Rp3.770.000"],
          penjelasan: "PPh 22, 23, dan 4 ayat (2) masuk SPT Masa PPh Unifikasi, sedangkan PPh 21 masuk SPT Masa PPh 21/26." }
      ],
      kesimpulan: "Bendahara memungut PPh 22 1,5% dari harga tanpa PPN (Rp750.000) dan 3% bagi rekanan tanpa NPWP (Rp270.000), dengan pengecualian ATK ≤ Rp2 juta yang utuh dan BBM. Selain PPh 22, bendahara memotong PPh 23 jasa kebersihan Rp600.000, PPh 4 ayat (2) sewa gudang Rp2.000.000, dan PPh 21 narasumber Rp150.000; seluruhnya Rp3.770.000.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-A3-05", judul: "Pembayaran ke Jepang: barang impor, jasa, royalti, bunga, dan P3B", topik: "A3.8", estimasiMenit: 18,
      narasi: "PT Nusantara Presisi (WP badan dalam negeri, importir pemilik API) pada Masa Pajak September 2026 bertransaksi dengan Kobe Robotics Co. dan Kobe Finance Co., keduanya perusahaan Jepang yang tidak memiliki BUT di Indonesia: (1) membeli dan mengimpor robot las dengan nilai CIF Rp4.000.000.000, bea masuk 5%, tanpa pungutan pabean lain; (2) membayar imbalan jasa instalasi dan commissioning robot oleh teknisi Kobe Robotics di pabrik Cikarang selama 25 hari Rp600.000.000; (3) membayar royalti lisensi perangkat lunak pengendali robot kepada Kobe Robotics Rp500.000.000; dan (4) membayar bunga pinjaman Rp300.000.000 kepada Kobe Finance Co. Kedua perusahaan telah menyerahkan Form DGT yang sah dan terekam di Coretax sebelum pembayaran, merupakan beneficial owner, dan tidak menyalahgunakan P3B. Anggap P3B Indonesia–Jepang menetapkan royalti 10% dan bunga 10%, serta imbalan jasa instalasi tersebut merupakan laba usaha yang tidak menimbulkan BUT sehingga hanya dapat dipajaki di Jepang.",
      data: [["Robot las (CIF)", "Rp4.000.000.000"], ["Bea masuk", "5%"], ["Jasa instalasi 25 hari di Indonesia", "Rp600.000.000"], ["Royalti perangkat lunak", "Rp500.000.000"], ["Bunga pinjaman ke Kobe Finance", "Rp300.000.000"], ["Form DGT", "sah, terekam sebelum pembayaran"], ["Tarif P3B (anggapan)", "royalti 10%, bunga 10%, jasa = laba usaha"]],
      langkah: [
        { no: 1, pertanyaan: "Perlakuan PPh atas pembayaran harga robot las?", tipe: "pilihan", opsi: { A: "Dipotong PPh Pasal 26 20% dari harga", B: "Dipotong PPh Pasal 26 dengan tarif efektif 5% (perkiraan neto 25%)", C: "Bukan objek PPh Pasal 26; PPh atas impornya dilunasi melalui PPh Pasal 22 impor", D: "Dipotong PPh Pasal 23 2% karena penjualnya badan" }, jawaban: "C",
          petunjuk: ["Pembayaran harga barang yang diimpor bukan imbalan jasa, royalti, atau objek Pasal 26 lainnya", "Tarif efektif 5% hanya untuk penjualan harta yang berada di Indonesia", "Jawaban: C"],
          penjelasan: "Pembelian barang dari luar negeri bukan objek PPh 26; pemungutan PPh atas impor dilakukan melalui PPh 22 impor." },
        { no: 2, pertanyaan: "PPh Pasal 22 impor atas robot las (Rp)?", tipe: "angka", jawaban: 105000000, toleransi: 0,
          petunjuk: ["Nilai impor = CIF + bea masuk", "Rp4.000.000.000 + 5% × Rp4.000.000.000 = Rp4.200.000.000", "2,5% × Rp4.200.000.000 = Rp105.000.000"],
          penjelasan: "Importir ber-API dipungut 2,5% × nilai impor yang dibayar bersamaan dengan bea masuk." },
        { no: 3, pertanyaan: "Perlakuan PPh atas imbalan jasa instalasi Rp600.000.000?", tipe: "pilihan", opsi: { A: "Dipotong PPh Pasal 26 20% karena jasa dilakukan di Indonesia", B: "Dipotong PPh Pasal 23 2% karena jasa teknik", C: "Dipotong PPh Pasal 26 10% memakai tarif royalti P3B", D: "Tidak dipotong PPh Pasal 26 karena menurut P3B merupakan laba usaha tanpa BUT; tetap dibuatkan BPNR dengan fasilitas P3B" }, jawaban: "D",
          petunjuk: ["Form DGT sah sehingga P3B dapat diterapkan", "Jasa 25 hari tidak menimbulkan BUT; laba usaha hanya dipajaki di negara domisili", "Jawaban: D"],
          penjelasan: "P3B diterapkan per jenis penghasilan; fasilitas P3B tetap didokumentasikan dalam BPNR." },
        { no: 4, pertanyaan: "PPh Pasal 26 atas royalti (Rp)?", tipe: "angka", jawaban: 50000000, toleransi: 0,
          petunjuk: ["Royalti boleh dipajaki negara sumber dengan tarif yang dibatasi P3B", "Tarif P3B 10%", "10% × Rp500.000.000 = Rp50.000.000"],
          penjelasan: "Tanpa Form DGT tarifnya 20% (Rp100.000.000)." },
        { no: 5, pertanyaan: "PPh Pasal 26 atas bunga kepada Kobe Finance Co. (Rp)?", tipe: "angka", jawaban: 30000000, toleransi: 0,
          petunjuk: ["Bunga kepada WPLN tanpa BUT adalah objek PPh 26", "Tarif P3B 10%", "10% × Rp300.000.000 = Rp30.000.000"],
          penjelasan: "Kobe Finance Co. bukan bank dalam negeri; pengecualian Pasal 23 ayat (4) untuk bank tidak relevan bagi PPh 26." },
        { no: 6, pertanyaan: "Seandainya Form DGT tidak diserahkan, berapa total PPh Pasal 26 atas transaksi (2)–(4) (Rp)?", tipe: "angka", jawaban: 280000000, toleransi: 0,
          petunjuk: ["Tanpa Form DGT yang sah semua objek PPh 26 dipotong 20%", "Rp600.000.000 + Rp500.000.000 + Rp300.000.000 = Rp1.400.000.000", "20% × Rp1.400.000.000 = Rp280.000.000"],
          penjelasan: "Dengan Form DGT, PPh 26 hanya Rp80.000.000; selisih Rp200.000.000 menunjukkan pentingnya Form DGT terekam sebelum pembayaran." },
        { no: 7, pertanyaan: "Bukti potong dan tenggat administrasi PPh Pasal 26 Masa September 2026?", tipe: "pilihan", opsi: { A: "BPNR dalam SPT Masa PPh Unifikasi; setor paling lambat Kamis, 15 Oktober 2026; lapor paling lambat Selasa, 20 Oktober 2026", B: "BPPU dalam SPT Masa PPh Unifikasi; setor paling lambat Kamis, 15 Oktober 2026; lapor paling lambat Selasa, 20 Oktober 2026", C: "BPNR dalam SPT Masa PPh Unifikasi; setor paling lambat Sabtu, 10 Oktober 2026; lapor paling lambat Selasa, 20 Oktober 2026", D: "BPNR dalam SPT Masa PPh 21/26; setor paling lambat Kamis, 15 Oktober 2026; lapor paling lambat Sabtu, 31 Oktober 2026" }, jawaban: "A",
          petunjuk: ["WP luar negeri badan memakai BPNR, bukan BPPU", "BPNR masuk SPT Masa PPh Unifikasi", "Setor tanggal 15, lapor 20 hari setelah Masa Pajak berakhir. Jawaban: A"],
          penjelasan: "PER-11/PJ/2025 dan PMK 81/2024: BPNR untuk penerima luar negeri (selain imbalan jasa orang pribadi), setor tanggal 15, lapor 20 hari." }
      ],
      kesimpulan: "Harga robot bukan objek PPh 26; PPh atas impornya adalah PPh 22 impor Rp105.000.000. Dengan Form DGT, jasa instalasi tanpa BUT tidak dipotong, royalti dan bunga masing-masing dipotong 10% (Rp50.000.000 dan Rp30.000.000) dengan BPNR; tanpa Form DGT PPh 26 menjadi Rp280.000.000.",
      kalkulatorRef: "potput"
    },
    {
      id: "K-A3-06", judul: "Pekerja kebun: TER harian, pegawai tidak tetap bulanan, dan bukan pegawai", topik: "A3.3", estimasiMenit: 15,
      narasi: "PT Agro Panen Raya (perkebunan kelapa sawit; KLU-nya tidak termasuk sektor penerima PPh 21 DTP) pada Masa Pajak Juli 2026 membayar: (1) Pak Udin, pemanen harian, upah Rp150.000 per hari selama 26 hari yang dibayar setiap minggu; (2) Pak Rudi, mandor panen harian, upah Rp520.000 per hari selama 22 hari yang dibayar setiap minggu; (3) Ny. Sari, pegawai tidak tetap dengan kontrak Juli–Desember 2026 yang dibayar bulanan Rp7.000.000 (status PTKP 1 Januari 2026: K/1); (4) Ir. Darmawan, konsultan agronomi orang pribadi ber-NPWP yang bukan pegawai, fee Rp70.000.000; dan (5) Tuan Asep, juru ukur lahan lepas (bukan pegawai) yang belum memiliki NPWP dan NIK-nya belum dipadankan, honorarium Rp10.000.000. Seluruh penerima adalah orang pribadi dalam negeri dan setiap honorarium dibayar sekali pada bulan tersebut.",
      data: [["Pak Udin (harian)", "Rp150.000 × 26 hari"], ["Pak Rudi (harian)", "Rp520.000 × 22 hari"], ["Ny. Sari (PTT bulanan, K/1)", "Rp7.000.000"], ["Ir. Darmawan (bukan pegawai, NPWP)", "Rp70.000.000"], ["Tuan Asep (bukan pegawai, tanpa NPWP)", "Rp10.000.000"], ["Masa Pajak", "Juli 2026"]],
      langkah: [
        { no: 1, pertanyaan: "PPh 21 atas upah Pak Udin?", tipe: "pilihan", opsi: { A: "Nihil, karena upah hariannya sampai dengan Rp450.000 (TER harian 0%)", B: "0,5% × Rp150.000 × 26 hari = Rp19.500", C: "TER bulanan atas Rp3.900.000 sebulan", D: "5% × 50% × Rp3.900.000" }, jawaban: "A",
          petunjuk: ["Upah dibayar mingguan tetap memakai TER harian berdasarkan rata-rata upah harian", "Rp150.000 ≤ Rp450.000", "Jawaban: A"],
          penjelasan: "TER harian berlaku untuk pegawai tidak tetap yang dibayar harian, mingguan, satuan, atau borongan; lapisan pertama 0% sampai dengan Rp450.000." },
        { no: 2, pertanyaan: "PPh 21 Pak Rudi Masa Juli 2026 (Rp)?", tipe: "angka", jawaban: 57200, toleransi: 0,
          petunjuk: ["Rp520.000 per hari berada di atas Rp450.000 dan tidak lebih dari Rp2.500.000", "0,5% × Rp520.000 = Rp2.600 per hari", "Rp2.600 × 22 hari = Rp57.200"],
          penjelasan: "Tarif 0,5% dikalikan seluruh upah harian, bukan selisih di atas Rp450.000." },
        { no: 3, pertanyaan: "PPh 21 Ny. Sari Masa Juli 2026 (Rp)?", tipe: "angka", jawaban: 52500, toleransi: 0,
          petunjuk: ["Pegawai tidak tetap yang dibayar bulanan memakai TER bulanan; K/1 masuk kategori B", "Lapisan B Rp6.850.000–7.300.000 bertarif 0,75%", "0,75% × Rp7.000.000 = Rp52.500"],
          penjelasan: "Kategori ditentukan status PTKP 1 Januari, sama seperti pegawai tetap." },
        { no: 4, pertanyaan: "Bagaimana PPh 21 Ny. Sari pada Masa Pajak Desember 2026?", tipe: "pilihan", opsi: { A: "Dihitung ulang dengan tarif Pasal 17 atas penghasilan Juli–Desember seperti pegawai tetap", B: "Tetap TER bulanan kategori B atas bruto Desember, tanpa penghitungan ulang", C: "Beralih ke TER harian karena kontraknya berakhir", D: "Dihitung dengan tarif Pasal 17 × 50% × bruto seperti bukan pegawai" }, jawaban: "B",
          petunjuk: ["Hitung ulang Pasal 17 pada Masa Pajak Terakhir hanya untuk pegawai tetap dan pensiunan berkala", "Pegawai tidak tetap bulanan memakai TER bulanan sepanjang tahun", "Jawaban: B"],
          penjelasan: "PMK 168/2023: pegawai tidak tetap yang dibayar bulanan tidak dihitung ulang pada Desember." },
        { no: 5, pertanyaan: "PPh 21 atas fee Ir. Darmawan (Rp)?", tipe: "angka", jawaban: 1750000, toleransi: 0,
          petunjuk: ["Bukan pegawai: DPP = 50% × bruto", "50% × Rp70.000.000 = Rp35.000.000", "5% × Rp35.000.000 = Rp1.750.000"],
          penjelasan: "DPP Rp35 juta masih pada lapisan pertama Pasal 17 (sampai dengan Rp60 juta)." },
        { no: 6, pertanyaan: "PPh 21 atas honorarium Tuan Asep (Rp)?", tipe: "angka", jawaban: 300000, toleransi: 0,
          petunjuk: ["DPP = 50% × Rp10.000.000 = Rp5.000.000; 5% = Rp250.000", "Tanpa NPWP: 120% dari PPh seharusnya", "120% × Rp250.000 = Rp300.000"],
          penjelasan: "Kenaikan PPh 21 tanpa NPWP adalah 20%, bukan 100% seperti PPh 22/23." },
        { no: 7, pertanyaan: "Jumlah PPh 21 yang disetor PT Agro Panen Raya untuk Masa Juli 2026 (Rp)?", tipe: "angka", jawaban: 2159700, toleransi: 0,
          petunjuk: ["Pak Udin Rp0; Pak Rudi Rp57.200; Ny. Sari Rp52.500", "Ir. Darmawan Rp1.750.000; Tuan Asep Rp300.000", "Total Rp2.159.700"],
          penjelasan: "Tidak ada PPh 21 DTP karena perkebunan sawit bukan sektor dalam PMK 105/2025; seluruh PPh 21 disetor paling lambat tanggal 15 Agustus 2026, yang bergeser ke hari kerja berikutnya karena tanggal itu jatuh pada hari Sabtu." }
      ],
      kesimpulan: "Pekerja harian memakai TER harian (0% sampai Rp450.000, 0,5% di atasnya), pegawai tidak tetap bulanan memakai TER bulanan tanpa hitung ulang Desember, dan bukan pegawai dikenai Pasal 17 × 50% × bruto (120% tanpa NPWP). Total PPh 21 Masa Juli 2026 Rp2.159.700.",
      kalkulatorRef: "pph21-ter"
    },
    {
      id: "K-A3-07", judul: "Royalti, bunga, dan jasa ke luar negeri dalam USD lintas tanggal: kurs KMK saat terutang", topik: "A3.8", estimasiMenit: 20,
      narasi: "PT Sinar Gemilang Farmasi (WP badan dalam negeri, pembukuan dalam Rupiah) melakukan tiga pembayaran dalam USD kepada pihak luar negeri yang tidak mempunyai BUT di Indonesia: (1) royalti paten formula Kuartal III 2026 sebesar USD60.000 kepada Helvetia Pharma AG, beneficial owner dengan Form DGT sah (anggap tarif royalti P3B 10%), yang jatuh tempo dan dicatat sebagai utang pada Rabu, 30 September 2026, lalu ditransfer pada Jumat, 9 Oktober 2026; (2) bunga pinjaman semester I sebesar USD18.000 kepada Alpen Finanz AG, beneficial owner dengan Form DGT sah (anggap tarif bunga P3B 10%), yang jatuh tempo 30 September 2026 tetapi dibayar lebih awal pada Jumat, 25 September 2026; dan (3) imbalan jasa konsultansi uji klinis USD25.000 kepada Pacific Clinical Research Ltd. yang tidak menyerahkan Form DGT, yang ditagih, dicatat sebagai utang, jatuh tempo, dan dibayar pada Jumat, 16 Oktober 2026. Perusahaan mencatat transaksi valas dengan kurs tengah BI dan membayar melalui bank dengan kurs jual bank. Seluruh jumlah USD adalah jumlah bruto sebelum PPh. Semua angka kurs adalah rekaan untuk latihan.",
      data: [["Royalti (Helvetia Pharma AG, P3B 10%)", "USD60.000; terutang 30 Sep; transfer 9 Okt 2026"], ["Bunga (Alpen Finanz AG, P3B 10%)", "USD18.000; jatuh tempo 30 Sep; dibayar 25 Sep 2026"], ["Jasa (Pacific Clinical, tanpa Form DGT)", "USD25.000; terutang dan dibayar 16 Okt 2026"], ["KMK 23–29 Sep 2026", "Rp16.540"], ["KMK 30 Sep–6 Okt 2026", "Rp16.480"], ["KMK 7–13 Okt 2026", "Rp16.430"], ["KMK 14–20 Okt 2026", "Rp16.395"], ["Kurs tengah BI 30 Sep 2026", "Rp16.512"], ["Kurs jual bank 9 Okt / 16 Okt 2026", "Rp16.470 / Rp16.420"]],
      langkah: [
        { no: 1, pertanyaan: "Kurs yang dipakai untuk DPP PPh Pasal 26 atas royalti Helvetia Pharma AG?", tipe: "pilihan", opsi: { A: "Kurs KMK periode 7–13 Oktober 2026 (Rp16.430), minggu transfer", B: "Kurs tengah BI 30 September 2026 (Rp16.512), kurs pencatatan utang", C: "Kurs KMK periode 30 September–6 Oktober 2026 (Rp16.480), saat jatuh tempo", D: "Kurs jual bank 9 Oktober 2026 (Rp16.470), kurs transfer" }, jawaban: "C",
          petunjuk: ["Saat terutang: dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo — mana yang lebih dahulu", "Jatuh tempo 30 September lebih dahulu daripada transfer 9 Oktober", "Jawaban: C"],
          penjelasan: "DPP pemotongan dalam valas dirupiahkan dengan kurs KMK yang berlaku pada saat terutang; kurs tengah BI dan kurs bank hanya untuk pembukuan dan pembayaran." },
        { no: 2, pertanyaan: "PPh Pasal 26 atas royalti (Rp)?", tipe: "angka", jawaban: 98880000, toleransi: 0,
          petunjuk: ["Bruto USD60.000 × Rp16.480 = Rp988.800.000", "Tarif P3B 10% berlaku karena Form DGT sah dan penerima beneficial owner", "10% × Rp988.800.000 = Rp98.880.000"],
          penjelasan: "Dengan kurs KMK minggu transfer hasilnya Rp98.580.000 — selisih Rp300.000 yang sering menjadi pengecoh." },
        { no: 3, pertanyaan: "PPh Pasal 26 atas bunga Alpen Finanz AG (Rp)?", tipe: "angka", jawaban: 29772000, toleransi: 0,
          petunjuk: ["Bunga dibayar 25 September, lebih dahulu daripada jatuh tempo 30 September", "Kurs KMK periode 23–29 September 2026: Rp16.540", "10% × USD18.000 × Rp16.540 = Rp29.772.000"],
          penjelasan: "Pembayaran lebih awal menggeser saat terutang ke tanggal bayar; memakai kurs saat jatuh tempo (Rp16.480) menghasilkan Rp29.664.000 yang keliru." },
        { no: 4, pertanyaan: "PPh Pasal 26 atas imbalan jasa Pacific Clinical Research Ltd. (Rp)?", tipe: "angka", jawaban: 81975000, toleransi: 0,
          petunjuk: ["Tanpa Form DGT berlaku tarif domestik 20%", "Terutang dan dibayar 16 Oktober → kurs KMK periode 14–20 Oktober 2026 Rp16.395", "20% × USD25.000 × Rp16.395 = Rp81.975.000"],
          penjelasan: "Kurs jual bank 16 Oktober (Rp16.420) bukan kurs pajak; hasil dengan kurs itu Rp82.100.000." },
        { no: 5, pertanyaan: "Jumlah PPh Pasal 26 yang harus disetor untuk Masa Pajak September 2026 (Rp)?", tipe: "angka", jawaban: 128652000, toleransi: 0,
          petunjuk: ["Royalti terutang 30 September dan bunga terutang 25 September → keduanya Masa September", "Jasa terutang 16 Oktober → Masa Oktober", "Rp98.880.000 + Rp29.772.000 = Rp128.652.000"],
          penjelasan: "Disetor paling lambat Kamis, 15 Oktober 2026 dan dilaporkan dengan BPNR dalam SPT Masa PPh Unifikasi Masa September 2026 paling lama 20 Oktober 2026." },
        { no: 6, pertanyaan: "Batas setor PPh Pasal 26 atas jasa Pacific Clinical Research Ltd.?", tipe: "pilihan", opsi: { A: "Kamis, 15 Oktober 2026, bersama PPh Masa September", B: "Senin, 16 November 2026, karena 15 November 2026 jatuh pada hari Minggu", C: "Minggu, 15 November 2026, tanpa pergeseran", D: "Jumat, 20 November 2026, bersamaan dengan batas lapor SPT Masa" }, jawaban: "B",
          petunjuk: ["Jasa terutang 16 Oktober → Masa Pajak Oktober 2026", "Batas setor tanggal 15 bulan berikutnya; hari libur bergeser ke hari kerja berikutnya", "15 November 2026 hari Minggu → Senin, 16 November 2026"],
          penjelasan: "PMK 81/2024 Pasal 94 ayat (2): setor paling lambat tanggal 15 bulan berikutnya, bergeser ke hari kerja berikutnya bila jatuh pada hari libur. SPT Masa Oktober dilaporkan paling lama 20 November 2026." },
        { no: 7, pertanyaan: "Jika staf menghitung PPh royalti dengan kurs jual bank saat transfer (Rp16.470), berapa kekurangan setor PPh Pasal 26 Masa September 2026 (Rp)?", tipe: "angka", jawaban: 60000, toleransi: 0,
          petunjuk: ["PPh seharusnya: 10% × USD60.000 × Rp16.480 = Rp98.880.000", "PPh dengan kurs bank: 10% × USD60.000 × Rp16.470 = Rp98.820.000", "Kekurangan = USD6.000 × Rp10 = Rp60.000"],
          penjelasan: "Kekurangan disetor untuk Masa September dan, bila SPT Masa sudah dilaporkan, dibetulkan dengan sanksi bunga Pasal 8 ayat (2a) UU KUP; selisih kurs pembukuan tidak dapat dipakai untuk menutupnya." }
      ],
      kesimpulan: "Ketiga pembayaran dirupiahkan dengan kurs KMK pada saat terutang masing-masing: royalti Rp16.480 (jatuh tempo 30 September) → Rp98.880.000; bunga Rp16.540 (dibayar lebih awal 25 September) → Rp29.772.000; jasa tanpa Form DGT 20% dengan Rp16.395 (16 Oktober) → Rp81.975.000. Masa September menyetor Rp128.652.000 paling lambat 15 Oktober 2026 dan Masa Oktober Rp81.975.000 paling lambat 16 November 2026; kurs tengah BI dan kurs bank hanya untuk pembukuan dan pembayaran.",
      kalkulatorRef: "kurs",
      kalkulatorInput: { nilaiValas: 60000, mataUang: "USD", jenisPajak: "pph26", kursKmk: 16480, kursTengah: 16512, kursAkhir: null, kursBayar: 16470, posisi: "utang", tarifP3b: 10 }   // royalti Helvetia Pharma AG (langkah 1, 2, dan 7)
    }
  ],
  tips: [
    { teks: "Untuk setiap transaksi, jalankan urutan tetap: siapa penerimanya (OP/badan, DN/LN) → jenis penghasilan → pasal → tarif dan dasar (tanpa PPN) → final atau tidak → kode bukti potong.", tagSebab: "salah-klasifikasi" },
    { teks: "Soal TER: tentukan kategori dari status 1 Januari (ingat PTKP pegawai wanita kawin), jumlahkan seluruh bruto bulan itu termasuk THR, premi yang ditanggung pemberi kerja, dan natura kena pajak, lalu buka tabel tanpa mengurangkan biaya jabatan.", tagSebab: "salah-hitung" },
    { teks: "Desember (atau bulan berhenti) selalu Pasal 17 dikurangi PPh Januari–November; hasilnya bisa lebih potong. Pengecoh sering hanya memakai PTKP status baru atau lupa iuran pensiun.", tagSebab: "lupa-pasal" },
    { teks: "Opsi berangka lama hampir selalu pengecoh: setor tanggal 10, konstruksi 2%/3%/4%, obligasi 15%, emas 0,45%, PHTB 5%, PTKP harian Rp450 ribu.", tagSebab: "angka-usang" },
    { teks: "Tanpa NPWP: PPh 21 naik 20%, PPh 22 dan 23 naik 100%; PPh final dan PPh 26 tidak mengenal kenaikan ini.", tagSebab: "lupa-pasal" },
    { teks: "Kata 'kecuali', 'bukan', dan 'tidak termasuk' membalik soal; garis bawahi di kertas buram sebelum membaca opsi.", tagSebab: "salah-baca" }
  ]
});
