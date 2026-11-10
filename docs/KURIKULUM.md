## 3. Struktur kurikulum final (data situs; sumber: lampiran KP3SKP 2025–2026 + rilis cakupan materi BPPK Okt 2026)

Format baris topik: `- slug — Judul — Dasar hukum utama`. `durasiUSKP` = durasi simulasi 40 soal per mata ujian; bentuk soal semua mata ujian: **40 PG 4 opsi, 2,5 poin/soal, lulus ≥ 60** (format Des 2024–2026). UKP komprehensif: satu sesi 3,5 jam (210 mnt) untuk A, B, dan C; 100 soal menurut laporan peserta Tingkat A 26 Okt 2026 (B/C masih asumsi, lihat `js/data/ref.js`). Tanda ◐ pada topik = sub-topik yang tidak eksplisit di dokumen cakupan materi resmi atau angka/peraturannya belum diverifikasi. Sejak dokumen cakupan materi KLC/BPPK terbaca langsung (Okt 2026; bagian 4), tanda ◐ yang semula berarti "rilis BPPK belum dibaca langsung" dihapus (C9, B7.5, B8.5) atau diganti alasannya (B6.8, B7.7, C9.6).

| Tingkat | Mata ujian (kode · slug · nama resmi) | Durasi USKP | Topik |
|---|---|---|---|
| **A** (5) | A1 `pph-op` PPh Orang Pribadi dan SPT PPh OP | 120 mnt | 11 |
| | A2 `kup` KUP, PPSP, dan Pengadilan Pajak | 90 mnt | 12 |
| | A3 `pph-potput` PPh Pemotongan/Pemungutan | 120 mnt | 9 |
| | A4 `ppn` PPN dan SPT Masa PPN | 90 mnt | 10 |
| | A5 `bea-meterai` Bea Meterai | 90 mnt (USKP: gabung PBB) | 6 |
| **B** (8 = A +) | B6 `pph-badan` PPh Badan dan SPT PPh Badan (badan dalam negeri) | 120 mnt | 11 |
| | B7 `akuntansi-pajak` Akuntansi Perpajakan | 120 mnt | 8 (7 B + 1 khusus C) |
| | B8 `pbb-p5l` PBB-P5L | 90 mnt | 8 |
| **C** (10 = B +) | C9 `pph-badan-internasional` PPh Badan dan SPT PPh Badan untuk transaksi internasional | 120 mnt (USKP: gabung B6) | 6 |
| | C10 `pajak-internasional` Pajak Internasional | 120 mnt | 9 |
| **E** (bukan UKP) | E `etika-profesi` Etika & Ujian Profesi Asosiasi | 60 mnt (USKP lama) | 6 |

### A1 `pph-op` — PPh Orang Pribadi dan SPT PPh OP (A, B, C) — UU 7/1983 s.t.d.t.d. UU 7/2021; PP 55/2022 s.t.d.d. PP 20/2026; PMK 81/2024; PER-11/PJ/2025
- `subjek-pajak-op` — Subjek pajak OP, saat mulai/berakhir kewajiban subjektif, pengecualian — Ps. 2, 2A, 3 UU PPh; PMK 18/2021
- `objek-penghasilan` — Objek PPh OP, bukan objek, penghasilan final tidak digabung — Ps. 4(1), 4(2), 4(3) UU PPh; PMK 18/2021 (dividen)
- `biaya-koreksi-fiskal` — Biaya boleh/tidak boleh dikurangkan, koreksi fiskal, natura — Ps. 6, 9 UU PPh; PMK 66/2023
- `nppn` — Norma Penghitungan Penghasilan Neto, pemberitahuan 3 bulan pertama — PER-17/PJ/2015; Ps. 14 UU PPh; PMK 81/2024
- `kompensasi-rugi` — Kompensasi kerugian fiskal 5 tahun — Ps. 6(2) UU PPh
- `ptkp-status-keluarga` — PTKP, tanggungan maks 3, status KK/HB/PH/MT, penghasilan istri — Ps. 7, 8 UU PPh; PMK 101/PMK.010/2016
- `tarif-pph-terutang` — Tarif Ps. 17 lima lapisan, pembulatan PKP ribuan ke bawah, zakat pengurang — Ps. 17(1)a UU PPh; PP 60/2010; PMK 114/2025
- `kredit-pajak-pph29` — Pelunasan tahun berjalan, kredit PPh 21/22/23/24, kurang/lebih bayar — Ps. 28, 28A, 29 UU PPh; PMK 192/2018
- `pph25-oppt` — Angsuran PPh 25, WP OP pengusaha tertentu 0,75% — Ps. 25 UU PPh; PMK 215/PMK.03/2018; PMK 81/2024
- `pph-final-umkm` — PPh final 0,5%, omzet ≤ Rp4,8 M, bagian Rp500 jt tidak kena, pekerjaan bebas dikecualikan — PP 55/2022 Ps. 56–63 s.t.d.d. PP 20/2026; PMK 164/2023
- `spt-1770` — SPT Tahunan 1770/1770 S/1770 SS, batas 31 Maret, denda Rp100 rb, peta baris — Ps. 3, 7 UU KUP; PER-11/PJ/2025

### A2 `kup` — KUP, PPSP, dan Pengadilan Pajak (A, B, C) — UU 6/1983 s.t.d.t.d. UU 7/2021; UU 19/1997 s.t.d.d. UU 19/2000; UU 14/2002; PP 50/2022
- `definisi-istilah` — Definisi dan istilah (Tahun Pajak, SPT, SKP, Penanggung Pajak, dsb.) — Ps. 1 UU KUP
- `npwp-pkp-coretax` — NIK sebagai NPWP, NPWP 16 digit, NITKU, pengukuhan/pencabutan PKP, akun Coretax — Ps. 2 UU KUP; PMK 112/2022 jo. PMK 136/2023; PMK 81/2024
- `pembayaran-pelaporan` — Tenggat setor tgl 15, lapor SPT Masa 20 hari, PPN akhir bulan, SPT Tahunan 31 Mar/30 Apr, perpanjangan, pembetulan — Ps. 3, 8, 9 UU KUP; PMK 81/2024 Ps. 94, 100, 171
- `pembukuan-pencatatan` — Pembukuan vs pencatatan, 10 tahun, bahasa/mata uang asing — Ps. 28 UU KUP; PMK 123/2019; PER-8/PJ/2025
- `pemeriksaan-penyidikan` — Penelitian, pemeriksaan lengkap 5 / terfokus 3 / spesifik 1 bulan, SPHP 5 hari kerja, bukti permulaan, penyidikan — PMK 15/2025; Ps. 29, 38–44B UU KUP
- `stp-skp` — STP, SKPKB, SKPN, SKPLB, SKPKBT, daluwarsa penetapan 5 tahun — Ps. 13–15, 17 UU KUP
- `keberatan-pasal36` — Pembetulan Ps. 16, keberatan 3 bulan/12 bulan via Portal WP, pelunasan sejumlah PAHP, Ps. 36 — Ps. 16, 25, 26, 26A, 36 UU KUP; PMK 118/2024 s.t.d.d. PMK 71/2026
- `sanksi-administrasi-pidana` — Denda Ps. 7 (100 rb/500 rb/1 jt), bunga KMK bulanan + uplift 0/5/10/15/20% maks 24 bulan, kenaikan 75/100%, denda 30%/60%, pidana — Ps. 7–9, 13–15, 19, 25(9), 27(5d), 38–39 UU KUP; KMK 488/2021 s.t.d.t.d. KMK 51/2026; KEP-239/PJ/2026
- `restitusi-imbalan-bunga` — Restitusi Ps. 17B/17C/17D, pengembalian pendahuluan, imbalan bunga — Ps. 11, 17B–17D, 27B UU KUP; PMK 39/2018 s.t.d.d. PMK 209/2021
- `ppsp-penagihan` — Teguran +7 hari, Surat Paksa +21 hari, sita 2×24 jam, lelang +14/+14, seketika-sekaligus, pencegahan, penyanderaan ≥ Rp100 jt, daluwarsa penagihan — UU PPSP Ps. 6–34; PMK 61/2023; Ps. 22 UU KUP
- `pengadilan-pajak` — Banding 3 bulan/putusan 12 bulan, gugatan 14/30 hari, PK 3 bulan ke MA, denda 60%, Putusan MK 26/PUU-XXI/2023 — UU 14/2002 Ps. 35–93; Ps. 23, 27 UU KUP
- `akses-informasi-keuangan` — Akses informasi keuangan untuk kepentingan perpajakan: kewenangan DJP dan dua jalur (laporan LJK, permintaan IBK), rahasia bank dan izin Menkeu tidak berlaku, nasabah menolak identifikasi, pidana kurungan 1 tahun/denda Rp1 miliar vs Ps. 41A–41C UU KUP, Ps. 35 (pihak ketiga, permintaan tertulis Dirjen) dan Ps. 35A (ILAP), ambang domestik Rp1 miliar OP di Lembaga Simpanan, tenggat 1 Agustus/31 Agustus/30 April, laporan nihil, CARF data 2026, peralihan data 2025 (teks PMK 108/2025 dan nomor pasal UU 9/2017 selain Ps. 2 dan 8 belum dicocokkan ◐) — UU 9/2017 Ps. 2 dan 8 serta ketentuan IBK, larangan melayani nasabah, pidana, dan kerahasiaan data (nomor pasal ◐); Ps. 34, 35, 35A, 41A–41C UU KUP; PP 31/2012; PMK 108/2025

### A3 `pph-potput` — PPh Pemotongan/Pemungutan (A, B, C; Ps. 15 dan 26 ditekankan di B/C) — Ps. 4(2), 15, 21–23, 26 UU PPh; PP 58/2023; PMK 168/2023; PER-11/PJ/2025
- `pph21-pemotong-objek-pengurang` — Pemotong dan pengecualian, penerima, objek, natura/kenikmatan, biaya jabatan 5% maks Rp500 rb/bulan, iuran pensiun, PTKP — PP 58/2023; PMK 168/2023; PMK 66/2023
- `pph21-ter-pegawai-tetap` — TER bulanan kategori A/B/C Jan–Nov, Masa Pajak Terakhir Ps. 17, tanpa NPWP 120% — PP 58/2023 Lampiran; PMK 168/2023
- `pph21-bukan-pegawai-tidak-tetap` — Bukan pegawai 50% × bruto, pegawai tidak tetap TER harian 0%/0,5%, peserta kegiatan, komisaris, mantan pegawai — PMK 168/2023
- `pph21-pesangon-pensiun-dtp` — Pesangon 0/5/15/25%, pensiun/JHT 0/5% final, PPh 21 DTP padat karya 2026 — PP 68/2009; PMK 16/2010; PMK 105/2025
- `pph22` — Pemungut dan tarif: impor 2,5%/7,5%, bendahara 1,5% (> Rp2 jt), industri semen/kertas/baja/otomotif/farmasi, emas 0,25%, barang sangat mewah 5%/1%, marketplace 0,5% (mulai 1 Nov 2026) — PMK 34/2017 s.t.d.t.d. PMK 41/2022; PMK 48/2023; PMK 92/2019; PMK 37/2025 · dasar: PMK 51/2025 (menggantikan rezim PMK 34/PMK.010/2017 s.t.d.t.d. PMK 41/2022; soal try out B Nov 2026 mengutipnya)
- `pph23` — 15% dividen/bunga/royalti/hadiah, 2% sewa dan jasa (62 jasa lain), tanpa NPWP ×2, pengecualian — Ps. 23 UU PPh; PMK 141/PMK.03/2015
- `pph-4-2-final` — Sewa T/B 10%, konstruksi 1,75–6%, bunga deposito 20%, obligasi 10%, undian 25%, PHTB 2,5/1/0%, saham bursa 0,1%, dividen OP 10% — PP 34/2017; PP 9/2022; PP 131/2000; PP 91/2021; PP 132/2000; PP 34/2016; PP 14/1997
- `pph15-pph26-p3b` — Ps. 15 pelayaran 1,2%, penerbangan 1,8%, LN 2,64%, KPDA 0,44%; Ps. 26 20%/P3B, SKD/DGT, BPT — KMK 416/417/475/1996; KMK 634/1994; Ps. 26 UU PPh; PMK 112/2025
- `bupot-unifikasi-coretax` — BPA1/BPA2/BPMP/BP21/BPPU/BPNR, SPT Masa PPh 21/26 dan Unifikasi, setor 15/lapor 20 hari — PER-11/PJ/2025; PMK 81/2024

### A4 `ppn` — PPN dan SPT Masa PPN (A, B, C) — UU 8/1983 s.t.d.t.d. UU 7/2021; PP 44/2022; PP 49/2022; PMK 131/2024; PMK 11/2025; PER-11/PJ/2025
- `karakter-mekanisme` — Legal character, mekanisme pengkreditan PK–PM, indirect subtraction — Ps. 1, 9 UU PPN
- `objek-bukan-objek-fasilitas` — Objek Ps. 4, 16C, 16D; bukan objek Ps. 4A pasca-HPP; dibebaskan vs tidak dipungut (PM) — Ps. 4, 4A, 16B–16D UU PPN; PP 49/2022
- `subjek-pkp` — PKP, pengusaha kecil ≤ Rp4,8 M, kewajiban pengukuhan — Ps. 3A UU PPN; PMK 68/2010 s.t.d.d. PMK 197/2013; PMK 81/2024
- `saat-tempat-terutang` — Saat dan tempat terutang, pemusatan — Ps. 11, 12 UU PPN; PP 44/2022
- `faktur-pajak-coretax` — Faktur Coretax: unggah paling lambat tgl 20, 10 kode transaksi, syarat Ps. 13(5), faktur cacat, > 3 bulan dianggap tidak dibuat, sanksi 1% DPP, dokumen tertentu — Ps. 13 UU PPN; PER-11/PJ/2025; Ps. 14(4) UU KUP
- `dpp-tarif` — Tarif 12%, DPP nilai lain 11/12 (efektif 11%), barang mewah 12% penuh, besaran tertentu, KMS 2,2%, PPnBM — Ps. 7, 8A, 9A UU PPN; PMK 131/2024; PMK 11/2025; PMK 61/2022
- `pengkreditan-pm` — PM dikreditkan 3 masa, 80% sebelum PKP, PM tidak dapat dikreditkan (sedan, 13(5), 16B(3)), pedoman proporsional — Ps. 9 UU PPN; PMK 186/2022
- `pemungut-ppn` — Instansi pemerintah, BUMN, badan tertentu, PMSE, kode 02/03 — Ps. 16A UU PPN; PMK 60/2022; PMK 81/2024
- `restitusi-kompensasi` — Kompensasi, restitusi akhir tahun, PKP tertentu tiap masa, pengembalian pendahuluan ≤ Rp5 M, PKP berisiko rendah — Ps. 9(4)–(4c) UU PPN; Ps. 17B–17D UU KUP
- `spt-masa-ppn` — SPT Masa PPN di Coretax, akhir bulan berikutnya, denda Rp500 rb, PKP OP pengguna NPPN, peta baris — Ps. 3, 7 UU KUP; PER-11/PJ/2025

### A5 `bea-meterai` — Bea Meterai (A, B, C) — UU 10/2020; PP 86/2021; PMK 78/2024
- `objek-pengecualian` — Objek (perjanjian, akta, surat berharga, dokumen > Rp5 jt, alat bukti pengadilan) dan bukan objek — Ps. 3, 7 UU 10/2020
- `saat-pihak-terutang` — Saat terutang (tanda tangan/selesai dibuat/diserahkan/diajukan/digunakan) dan pihak terutang — Ps. 8, 9 UU 10/2020
- `tarif-cara-pelunasan` — Tarif tunggal Rp10.000, meterai tempel, elektronik, teraan, SSP — Ps. 5, 12 UU 10/2020; PP 86/2021; PMK 78/2024
- `pemungut-bea-meterai` — Pemungut ditetapkan KPP, setor dan lapor tgl 15 — Ps. 11 UU 10/2020; PMK 78/2024
- `pemeteraian-kemudian-daluwarsa` — Pemeteraian kemudian, daluwarsa 5 tahun — Ps. 17, 19 UU 10/2020
- `sanksi-bea-meterai` — Sanksi administratif 100%, pidana — Ps. 18, 24–26 UU 10/2020

### B6 `pph-badan` — PPh Badan dan SPT PPh Badan, badan dalam negeri (B, C) — UU PPh; PP 55/2022; PMK 72/2023; PER-11/PJ/2025
- `subjek-badan` — Subjek pajak badan, BUT (ringkas), pengecualian — Ps. 2, 2A, 3 UU PPh
- `objek-badan` — Objek, final, bukan objek (dividen DN diterima badan DN) — Ps. 4 UU PPh
- `koreksi-fiskal` — Deductible/non-deductible, natura, promosi (daftar nominatif), piutang tak tertagih, cadangan, DER 4:1 — Ps. 6, 9, 18(1) UU PPh; PMK 02/2010; PMK 207/2015; PMK 81/2009 s.t.d.d. 219/2012; PMK 169/2015
- `penyusutan-amortisasi` — Kelompok 1–4, bangunan 20/10 tahun, GL/SM, saat mulai, pengalihan — Ps. 11, 11A UU PPh; PMK 72/2023
- `kompensasi-rugi-badan` — Kompensasi 5 tahun, fasilitas 10 tahun — Ps. 6(2) UU PPh; PP 78/2019
- `kredit-pajak-badan` — PPh 22, 23, 24 per negara, 25; Ps. 28A/29 — Ps. 24, 28–29 UU PPh; PMK 192/2018
- `tarif-31e-umkm-badan` — 22%, Tbk 19%, Ps. 31E 50% (omzet ≤ Rp50 M, bagian Rp4,8 M), PPh final 0,5% badan (koperasi 4 tahun, peralihan PT/CV) — Ps. 17, 31E UU PPh; PP 55/2022 Ps. 56–66 s.t.d.d. PP 20/2026; SE-02/PJ/2015
- `fasilitas-usaha-tertentu` — Tax holiday, tax allowance, super deduction vokasi/litbang (butir resmi B: "Fasilitas selain Pasal 31 E (non-PMA dan BUT)"; jenis fasilitas tidak dirinci dokumen ◐) — PMK 130/2020 s.t.d.d. PMK 69/2024; PP 78/2019; PMK 128/2019; PMK 153/2020
- `pph25-badan` — Angsuran badan, WP baru, bank, BUMN/BUMD, pengurangan — Ps. 25 UU PPh; PMK 215/2018; KEP-537/PJ/2000
- `hubungan-istimewa` — Hubungan istimewa ≥ 25%, PKKU, lampiran 3A (ringkas) — Ps. 18(3)–(4) UU PPh; PMK 172/2023
- `spt-1771` — 1771 induk, lampiran I–VI, khusus 1A–8A, dokumen wajib, 30 April, denda Rp1 jt — Ps. 3, 7 UU KUP; PER-11/PJ/2025

### B7 `akuntansi-pajak` — Akuntansi Perpajakan (B, C) — Ps. 28 UU KUP; PP 94/2010; SAK (PSAK 212, 202, 115, 116)
- `jurnal-kewajiban-pajak` — Jurnal PPh 21/23/4(2) dipotong dan memotong, PPN keluaran/masukan, PPh 25, utang PPh 29, PPh final — Ps. 28 UU KUP; PP 94/2010
- `piutang-persediaan-dibayar-dimuka` — Penyisihan vs penghapusan piutang, persediaan FIFO/rata-rata (LIFO dilarang), biaya dibayar di muka — Ps. 6(1)h, 10(6) UU PPh; PMK 207/2015; PSAK 202
- `aset-tetap-tak-berwujud` — Penyusutan komersial vs fiskal, amortisasi, revaluasi (10% final), sewa guna usaha vs PSAK 116 — PMK 72/2023; PMK 79/2008; KMK 1169/1991
- `pendapatan-biaya-selisih-kurs` — Pengakuan pendapatan/biaya (PSAK 115 vs fiskal), selisih kurs, imbalan kerja, kewajiban dan ekuitas — PP 94/2010 Ps. 9; Ps. 4(1)l, 6(1)e UU PPh
- `organisasi-nirlaba` — Akuntansi nirlaba dan sisa lebih lembaga pendidikan/litbang (butir resmi B.1.3 dan C "Akuntansi Organisasi Nirlaba") — Ps. 4(3)m UU PPh; PMK 68/2020
- `rekonsiliasi-fiskal` — Beda tetap/temporer positif-negatif, laba komersial → neto fiskal → PKP → PPh badan, 1771-I — Ps. 6, 9 UU PPh; PP 94/2010
- `pajak-tangguhan` — PSAK 212 (eks-46): DTA/DTL 22%, beban/manfaat, jurnal, penyajian ◐ (tidak eksplisit di dokumen cakupan; diuji lewat butir "Rekonsiliasi Fiskal dan Jurnal Penghitungan PPh Badan" dan, di C, "Hubungan Laporan Keuangan Fiskal dengan Laporan Keuangan Komersial") — PSAK 212
- `transaksi-khusus-c` — [C] Transaksi internasional/valas, lembaga keuangan, jasa konstruksi, penggabungan/peleburan/pengambilalihan/likuidasi (nilai buku) — PP 9/2022; PMK 52/2017 s.t.d.d. PMK 56/2021; PMK 123/2019

### B8 `pbb-p5l` — PBB-P5L (B, C) — UU 12/1985 s.t.d.d. UU 12/1994; PP 25/2002; PMK 186/2019 s.t.d.d. PMK 234/2022; PMK 23/2014
- `pendaftaran-spop` — Subjek/objek, SPOP/LSPOP elektronik 30 hari, pendataan — Ps. 2–4, 9 UU PBB; PMK 186/2019 s.t.d.d. 234/2022
- `objek-dikecualikan` — Objek yang dikecualikan — Ps. 3 UU PBB
- `njop-njkp-njoptkp` — NJOP, NJKP 40%, NJOPTKP Rp12 jt, tarif 0,5% → efektif 0,2% × (NJOP − NJOPTKP) — Ps. 5–6 UU PBB; PP 25/2002; PMK 23/2014
- `hitung-per-sektor` — Perkebunan (standar investasi tanaman), perhutanan, migas, panas bumi, minerba (angka kapitalisasi), sektor lainnya — PMK 186/2019 s.t.d.d. PMK 234/2022
- `sppt-skp-stp-pbb` — SPPT, SKP PBB (denda 25%), STP PBB, jatuh tempo 6 bulan (butir resmi C.5.3: pembetulan/pembatalan SPPT, SKP PBB, dan STP PBB yang tidak benar) — Ps. 10–11 UU PBB
- `keberatan-pengurangan-pbb` — Keberatan 3 bulan, banding, pengurangan Ps. 19, pembetulan SPPT/SKP/STP, pengurangan denda administratif, pembatalan ketetapan tidak benar (cakupan resmi C.5.3) — Ps. 15–16, 19–20 UU PBB; PMK 118/2024 s.t.d.d. PMK 71/2026; PMK 82/2017 ◐
- `pembayaran-penagihan-restitusi-pbb` — Pembayaran, penagihan Surat Paksa, restitusi — Ps. 11–13, 17 UU PBB; UU PPSP; PMK 81/2024
- `bagi-hasil-pbb` — Bagi hasil penerimaan PBB pusat–daerah — Ps. 18 UU PBB; UU 1/2022 (DBH)

### C9 `pph-badan-internasional` — PPh Badan dan SPT PPh Badan untuk transaksi internasional (C; rincian resmi = dokumen KLC Tingkat C, PPh Badan subjek Transaksi Internasional, 18 butir) — UU PPh Ps. 2(5), 5, 18, 24, 26(4); PMK 35/2019; PMK 14/2011; PMK 192/2018; PMK 172/2023
- `but-penghasilan-biaya` — Timbulnya BUT, penghasilan BUT (force of attraction), biaya kantor pusat, pembayaran ke kantor pusat bukan biaya — Ps. 2(5), 5 UU PPh; PMK 35/2019; KEP-62/PJ/1995
- `branch-profit-tax` — PPh 26(4) 20%/P3B atas laba setelah pajak, penanaman kembali, lampiran 6A — Ps. 26(4) UU PPh; PMK 14/2011
- `pph24-kredit-luar-negeri` — Kredit per negara, nilai terkecil, rugi LN tidak digabung, lampiran 7A — Ps. 24 UU PPh; PMK 192/2018
- `afiliasi-lintas-negara` — Transaksi afiliasi, PKKU, dokumentasi TP, secondary adjustment, lampiran 3A — Ps. 18 UU PPh; PMK 172/2023
- `pma-pembukuan-usd-fasilitas` — PMA: pembukuan USD/bahasa Inggris, dividen ke LN, fasilitas investasi — Ps. 28(8) UU KUP; PMK 123/2019; PER-8/PJ/2025; PMK 130/2020 s.t.d.d. PMK 69/2024
- `pajak-minimum-global` — GloBE: IIR/DMTT 2025, UTPR 2026, omzet ≥ EUR 750 jt, tarif efektif 15% ◐ (tidak menjadi butir tersendiri di dokumen cakupan, hanya GIR dalam AEoI C.4.8.a.1; dipertahankan karena peserta lulus C melaporkan banyak soal GMT) — PMK 136/2024; PER-6/PJ/2026

### C10 `pajak-internasional` — Pajak Internasional (C) — UU PPh Ps. 2, 18, 24, 26; PMK 112/2025; PMK 172/2023; PMK 93/2019 s.t.d.d. PMK 18/2021; UU 9/2017
- `p3b-struktur-hak-pemajakan` — Struktur P3B, OECD vs UN Model, resident dan tie-breaker, hak pemajakan per jenis penghasilan, beneficial owner, SKD/DGT — Ps. 32A UU PPh; PMK 112/2025
- `but-time-test-atribusi` — BUT dalam P3B, time test, atribusi laba Art. 7 — Ps. 2(5), 5 UU PPh; PMK 35/2019
- `metode-penghindaran-berganda` — Kredit (Ps. 24, ordinary credit per negara) dan pembebasan, Art. 23 — Ps. 24 UU PPh; PMK 192/2018
- `anti-penghindaran-ps18` — DER 4:1, CFC ≥ 50% deemed dividend, SPV/conduit, GAAR substance over form — Ps. 18 UU PPh; PMK 169/2015; PMK 93/2019 s.t.d.d. PMK 18/2021; PP 55/2022 Ps. 32 dst.
- `transfer-pricing-dokumentasi` — PKKU ex-ante, metode, rentang interkuartil, Master/Local File, CbCR ≥ Rp11 T — Ps. 18(3) UU PPh; PMK 172/2023
- `map` — Prosedur Persetujuan Bersama — PMK 172/2023; Art. 25 P3B
- `apa` — Kesepakatan Harga Transfer: unilateral/bilateral, 5 tahun, roll-back — PMK 172/2023; Ps. 18(3a) UU PPh
- `pertukaran-informasi` — EoI, AEoI/CRS/CARF (aset kripto, e-wallet), CbCR dan GIR sebagai informasi yang dipertukarkan, bantuan penagihan pajak (Ps. 20A UU KUP, Art. 27 Model OECD, MAC) — UU 9/2017; PMK 108/2025 (menggantikan PMK 70/2017 sejak 1 Jan 2026; sebagian isi lama masih merujuk PMK 70/2017 ◐); Art. 26–27 P3B
- `pph26-vs-p3b` — PPh 26 20% vs tarif P3B, perkiraan neto (5%/10%/2%/1%), BPNR, pengembalian bila tanpa SKD — Ps. 26 UU PPh; PMK 112/2025; PMK 187/2015

### E `etika-profesi` — Etika & Ujian Profesi Asosiasi (bukan UKP) — Kode Etik & Standar Profesi IKPI (SK 07/KONGRES XII/IKPI/2024); PMK 55/2026; PMK 44/2026
- `kepribadian-prinsip` — Kepribadian, integritas, objektivitas, kerahasiaan, kompetensi, perilaku profesional — Kode Etik IKPI Bab II
- `hubungan-klien-rekan-publikasi` — Hubungan dengan klien, sesama profesi, publikasi/iklan — Kode Etik IKPI Bab III–V
- `pmk55-izin-ppl-laporan` — Tingkat izin A/B/C, SKK + ujian profesi, pengalaman B 1 th/C 2 th, PPL 20/30/45 SKP, laporan 30 April, keanggotaan asosiasi 30 hari kerja — PMK 55/2026 Ps. 4–32
- `pmk55-larangan-sanksi` — Enam larangan Ps. 30, peringatan, pembekuan ≤ 2 tahun, pencabutan permanen — PMK 55/2026 Ps. 24, 30
- `kuasa-wp-pmk44` — Tiga kategori kuasa, SKT, surat kuasa khusus bermasa berlaku, berakhirnya kuasa — PMK 44/2026; Ps. 32 UU KUP
- `standar-praktik-spm-dewan-kehormatan` — Standar profesi, sistem pengendalian mutu, Dewan Kehormatan, transisi 31 Des 2026 — Standar Profesi IKPI 2024; PMK 55/2026 Ps. 60–61

## 4. Cakupan materi resmi (dokumen KLC/BPPK) dan rekonsiliasi

**Sumber.** Dokumen "CAKUPAN MATERI UJI KOMPETENSI PERPAJAKAN", 13 halaman berupa tabel No | Mata Ujian | Subjek (Badan Dalam Negeri / Orang Pribadi / Transaksi Internasional; hanya di B dan C) | Materi (butir bertingkat 1. → a. → 1)). Dokumen dibagikan KLC (Kemenkeu Learning Center, BPPK) dan diunggah seorang peserta di Threads (@mdutaa, Oktober 2026) dengan catatan: *"materi resmi yang di-share KLC … yang keluar di soal gak melebar dari situ"*. Halaman yang diterima tidak memuat kop, tanggal, atau nomor dokumen, sehingga status resminya bersandar pada keterangan peserta (◐). Isi tabel sendiri terbaca jelas dan sudah ditranskripsi kata demi kata.

**Di aplikasi.** Data terstruktur: `js/data/cakupan.js` (`UKP.cakupanResmi`; diuji `test/cakupan.test.js`). Tampilan: Belajar › Cakupan materi resmi (`#cakupan/A`, `#cakupan/B`, `#cakupan/C`) dengan status belajar per butir; indeks balik "Butir cakupan resmi untuk topik ini" di setiap halaman topik; ringkasan di Info ujian; FAQ "Dari mana soal UKP diambil?".

**Metode penilaian cakupan** (per 30 Oktober 2026, sebelum pengisian celah): **penuh** = ada materi dan soal yang jelas membahas butir itu; **sebagian** = hanya disinggung (materi tanpa soal, soal tanpa materi, atau sebagian unsur butir saja); **belum** = tidak ada. Penilaian memakai pencarian kata kunci dan pembacaan ringkasan, poin kunci, soal, dan kartu per topik, bukan audit kalimat demi kalimat. Hitungan memakai **butir daun** (butir tanpa sub-butir); butir induk mengikuti rangkuman anaknya. Butir yang berulang antartingkat atau antarsubjek dihitung di setiap kemunculannya. Angka di bawah adalah potret awal; tampilan `#cakupan` selalu membaca nilai terbaru dari `cakupan.js`.

| Tingkat | Mata ujian | Butir daun | Penuh | Sebagian | Belum | % penuh |
|---|---:|---:|---:|---:|---:|---:|
| A | 5 | 99 | 90 | 9 | 0 | 90,9% |
| B | 8 | 135 | 122 | 13 | 0 | 90,4% |
| C | 9 | 125 | 103 | 21 | 1 | 82,4% |
| **Total** | **22** | **359** | **315** | **43** | **1** | **87,7%** |

Setelah pengisian celah pada 30 Oktober 2026 (41 soal, 36 kartu, 28 blok materi di A3, A4, B6, B7, B8, C9, C10; tanpa topik baru; judul B8.6 dan C10.8 diperluas), seluruh 359 butir daun berstatus **penuh** di `js/data/cakupan.js` (A 99/99, B 135/135, C 125/125). Angka di tabel adalah potret sebelum pengisian. Isi yang masih tipis: C.1.10 (perusahaan efek), C.4.8.a.1 (pertukaran GIR tanpa soal), C.4.2.c; lihat catatan ◐ pada butir terkait.

Status mata ujian: **penuh** bila semua butirnya penuh, **sebagian** bila ada butir sebagian/belum.

### 4.1 Tingkat A (tanpa kolom Subjek)

| No | Mata ujian resmi | Modul aplikasi | Butir | Penuh | Sebagian | Belum | Status |
|---|---|---|---:|---:|---:|---:|---|
| 1 | Bea Meterai | A5 | 4 | 4 | 0 | 0 | penuh |
| 2 | KUP, PPSP, PP | A2 | 11 | 11 | 0 | 0 | penuh |
| 3 | PPh OP | A1 | 15 | 15 | 0 | 0 | penuh |
| 4 | PPh Pot/Put | A3 | 29 | 25 | 4 | 0 | sebagian |
| 5 | PPN dan SPT PPN | A4 | 40 | 35 | 5 | 0 | sebagian |

### 4.2 Tingkat B (disusun menjadi 8 mata ujian)

| No tercetak | Mata ujian resmi · subjek | Modul aplikasi | Butir | Penuh | Sebagian | Belum | Status |
|---|---|---|---:|---:|---:|---:|---|
| 1 | Akuntansi Perpajakan · Badan DN | B7 | 5 | 4 | 1 | 0 | sebagian |
| 2 | Bea Meterai · OP | A5 | 1 | 1 | 0 | 0 | penuh |
| 3 | KUP, PPSP, PP · Badan DN, OP | A2 | 12 | 12 | 0 | 0 | penuh |
| – | PBB-P5L · Badan DN (butir dari Tingkat C) | B8 | 3 | 2 | 1 | 0 | sebagian |
| 4 | PPh Badan · Badan DN (tercetak "PBB-P5L") | B6 | 17 | 16 | 1 | 0 | sebagian |
| 5 | PPh OP · OP | A1 | 3 | 3 | 0 | 0 | penuh |
| 6 | PPh Pot/Put · Badan DN, OP | A3 | 39 | 35 | 4 | 0 | sebagian |
| 8 | PPN dan SPT PPN · Badan DN, OP | A4 | 55 | 49 | 6 | 0 | sebagian |

### 4.3 Tingkat C

| No | Mata ujian resmi · subjek | Modul aplikasi | Butir | Penuh | Sebagian | Belum | Status |
|---|---|---|---:|---:|---:|---:|---|
| 1 | Akuntansi Perpajakan · Badan DN, Transaksi Internasional | B7 | 14 | 10 | 4 | 0 | sebagian |
| 2 | Bea Meterai · OP | A5 | 1 | 1 | 0 | 0 | penuh |
| 3 | KUP, PPSP, PP · Badan DN, OP | A2 | 5 | 5 | 0 | 0 | penuh |
| 4 | Pajak Internasional · Transaksi Internasional | C10 | 24 | 16 | 7 | 1 | sebagian |
| 5 | PBB-P5L · Badan DN | B8 | 3 | 2 | 1 | 0 | sebagian |
| 6 | PPh Badan · Badan DN, Transaksi Internasional | B6 + C9 | 22 | 20 | 2 | 0 | sebagian |
| 7 | PPh OP · OP | A1 | 1 | 1 | 0 | 0 | penuh |
| 8 | PPh Pot/Put · Badan DN, OP, Transaksi Internasional | A3 + C9 + C10 | 15 | 14 | 1 | 0 | sebagian |
| 9 | PPN dan SPT PPN · Badan DN, OP | A4 | 40 | 34 | 6 | 0 | sebagian |

### 4.4 Kejanggalan cetak

1. **Tingkat B, baris "4 PBB-P5L"** berisi 17 butir materi PPh Badan ("Yang menjadi Subjek Pajak DN dan Subjek Pajak LN" s.d. "SPT Tahunan PPh Badan"). Butir itu dicatat sebagai mata ujian PPh Badan (no tercetak "4", `namaTercetak` "PBB-P5L"); Tingkat B tidak memuat baris berlabel "PPh Badan".
2. **Tingkat B tidak mencetak butir PBB-P5L.** Aplikasi memakai 3 butir PBB-P5L Tingkat C untuk mata ujian PBB-P5L Tingkat B (ID `B.PBB.n`, tanpa nomor tercetak), dengan catatan di setiap butir.
3. **Nomor mata ujian Tingkat B melompat** dari 6 (PPh Pot/Put) ke 8 (PPN dan SPT PPN); tidak ada baris 7. Nomor tercetak dipertahankan.
4. **Baris "5 PPh OP" Tingkat B** hanya berisi tiga butir: Norma Penghitungan Penghasilan Neto; Pemajakan atas Penghasilan Keluarga; PTKP, Tarif, dan Penghitungan PPh Terutang OP.
5. **Subjek Orang Pribadi pada PPh Pot/Put Tingkat B** tercetak sebagai lanjutan baris 6 di halaman berikutnya, tanpa nomor/nama mata ujian baru.
6. **Penomoran ganjil:** PPN Tingkat B subjek Badan DN mencetak sub-butir 3.a dan 3.d bernomor 4), 5), 6); PPN Tingkat C subjek Badan DN mencetak Objek PPN rata a–l termasuk judul kelompok ("Penyerahan di dalam Daerah Pabean atas:" dan "Ekspor"), sehingga dua judul itu ikut terhitung sebagai butir daun.
7. **Butir berulang:** Akuntansi Perpajakan Tingkat C subjek Transaksi Internasional butir 9 mengulang butir 4 (hanya beda koma).
8. **Tanda kutip sisa (")** di akhir beberapa butir (A 4.4.d dan 4.7.g; B PPh Pot/Put 7.g; C Pajak Internasional 7.b dan PPN OP 1.f) dihapus dari teks.
9. **Ejaan tercetak dipertahankan:** "Kontruksi", "Controlled Foreign Cooperation Rules" (maksudnya Corporation/CFC), "Biaya Dibayar di Muka" (B) vs "Dibayar Dimuka" (C), "Perhitungan" vs "Penghitungan".
10. **Tingkat A** tidak memuat kolom Subjek dan tidak memuat butir PPh Pasal 22 (Tingkat B dan C memuatnya pada PPh Pot/Put subjek Badan DN).

### 4.5 Celah dan penempatannya (17 kelompok setelah deduplikasi; tidak perlu topik baru)

Catatan 30 Okt 2026: di luar 17 kelompok celah ini, topik **A2.12 `akses-informasi-keuangan`** ditambahkan atas permintaan pengguna (UU 9/2017, Pasal 34/35/35A UU KUP, laporan LJK menurut PMK 108/2025) dan dipetakan ke butir A.2.8, A.2.11, B.3.8, B.3.11, C.3.3, dan C.4.8.a.1; topik C10.8 diperbarui dari PMK 70/2017 ke PMK 108/2025.

| Kode | Prioritas | Celah | Butir terdampak | Penempatan |
|---|---|---|---|---|
| G01 | P1 | Upaya hukum PBB non-keberatan (pembetulan, pengurangan denda, pembatalan SPPT/SKP/STP) | C.5.3, B.PBB.3 | B8.6 (denda di B8.5) |
| G02 | P1 | Bantuan penagihan pajak lintas negara (*assistance in collection*) — satu-satunya butir **belum** | C.4.8.b | C10.8 |
| G03 | P1 | AEoI atas rekening keuangan, aset kripto (CARF), CbCR, dan GIR | C.4.8.a.1 | C10.8 |
| G04 | P1 | Istilah hak pemajakan penuh/terbatas/pelepasan | C.4.3.f–h | C10.1 |
| G05 | P1 | Ketentuan khusus dalam P3B | C.4.3.i | C10.1 |
| G06 | P2 | Pengertian perpajakan internasional; pengertian khusus | C.4.1, C.4.2.c | C10.1 |
| G07 | P1 | Akuntansi akuisisi dan konsolidasi | C.1.12 | B7.8 |
| G08 | P2 | Akuntansi lembaga keuangan non-bank | C.1.10 | B7.8 |
| G09 | P1 | Jurnal PPh Pasal 24 | C.1.1, C.1.5, B.1.1 | B7.1/B7.8 (hitung di C9.3) |
| G10 | P1 | Kewajiban subjektif SPLN/BUT | C.6.6 | C9.1 |
| G11 | P2 | Harga perolehan Pasal 10 (hubungan istimewa, tukar-menukar, hibah, inbreng) | C.6.12, B.4.8 | B6.4 |
| G12 | P2 | PPh 21 pegawai tetap yang kehilangan kewajiban subjektif | A.4.7.d, B.6.7.d, B.6.21.d, C.8.5.d | A3.2 |
| G13 | P2 | Fungsi faktur, syarat formal/material, penggantian/pembatalan, nota retur | A.5.5.a/c/e/g, B.8.5.a/c/e/g, C.9.3.a/c/e/g | A4.5 |
| G14 | P2 | Syarat "kegiatan usaha atau pekerjaannya" | A.5.3.a.3, B.8.3.a.6, B.8.11.a.3, C.9.1.d, C.9.5.a.3 | A4.2 |
| G15 | P3 | Bingkisan di luar hari raya keagamaan | A.4.4.a, B.6.4.a | A3.1 |
| G16 | P3 | Hak dan kewajiban penerima penghasilan yang dipotong | A.4.9, B.6.22 | A3.9 |
| G17 | P4 | Pengertian pemotongan secara umum (semua pasal) | A.4.12 | A3.9 |

Celah sedang diisi di `js/data/mu-*.js`; nilai `cakupan` di `cakupan.js` diperbarui setelah materi dan soalnya masuk, dan tampilan `#cakupan` langsung mengikutinya.

### 4.6 Rekonsiliasi dengan struktur kurikulum (bagian 3)

- **Pemetaan lengkap.** Ke-22 mata ujian resmi (A 5, B 8, C 9) terpetakan ke 10 modul UKP (A1–C10). Setiap butir daun punya minimal satu topik; tidak ada topik baru yang dibutuhkan.
- **Satu mata ujian, beberapa modul.** PPh Badan Tingkat C diuji untuk subjek Badan DN dan Transaksi Internasional → B6 + C9. PPh Pot/Put Tingkat C subjek Transaksi Internasional (PPh Pasal 26, branch profit tax, pengalihan saham/dividen/royalti/bunga) → A3 + C9 + C10; PPh Pasal 24 diuji di PPh Badan Tingkat C ("Tata Cara Perhitungan dan Penerapan PPh Pasal 24") dan di jurnal Akuntansi Perpajakan. Akuntansi Perpajakan subjek Transaksi Internasional (lembaga keuangan, jasa konstruksi, restrukturisasi, valas) → topik khusus C `B7.8`.
- **Cakupan bertingkat, tetapi tidak simetris.** Dokumen mencantumkan Bea Meterai di ketiga tingkat (B dan C hanya satu butir: objek, tarif, saat dan pihak terutang), KUP di B 12 butir dan di C hanya 5 butir (STP/SKP, pembetulan/keberatan, sanksi, PPSP), serta PPh OP di B 3 butir dan di C 1 butir. Bobot sesi Tingkat C untuk KUP umum dan PPh OP dapat diturunkan, sejalan dengan laporan peserta lulus C ("KUP itu sedikit").
- **Hal yang tidak tercantum sebagai butir:** pajak minimum global/GMT (hanya GIR sebagai objek AEoI), pajak tangguhan (masuk lewat rekonsiliasi fiskal), PPh Pasal 15 (tidak disebut di Pot/Put mana pun), dan etika profesi (E, memang bukan UKP). Materi aplikasi untuk hal ini tetap dipertahankan karena laporan peserta atau keterkaitan butir; di tampilan `#cakupan` hal ini tidak muncul sebagai butir.
- **Tanda ◐ yang diperbarui** di bagian 3: C9 (rincian resmi kini terbaca: PPh Badan Tingkat C subjek Transaksi Internasional), B7.5 organisasi nirlaba (butir resmi B dan C), dan B8.5 SPPT/SKP/STP PBB (butir resmi C.5.3) tidak lagi bertanda ◐; B6.8 fasilitas, B7.7 pajak tangguhan, dan C9.6 GloBE tetap ◐ dengan alasan baru yang disebut di barisnya.
