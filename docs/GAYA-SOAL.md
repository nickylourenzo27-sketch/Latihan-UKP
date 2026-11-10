# Gaya Soal — meniru UKP nyata (bukan try-out sederhana)

Dasar: pernyataan resmi BPPK (soal pilihan ganda "disusun berdasarkan implementasi peraturan perpajakan dan kasus-kasus yang berkaitan dengan praktik perpajakan"), laporan peserta UKP perdana 26–29 Oktober 2026 (dominan **soal kasus panjang** dengan **pilihan jawaban yang menjebak**; sebagian soal memuat **tautan/kutipan peraturan** yang bisa dibuka; **lampiran tabel TER** disediakan; Tingkat A ±100 soal dalam 210 menit), dan kesaksian pemilik proyek yang baru mengikuti ujian: soal nyata jauh lebih kompleks daripada try-out di situs lain yang "terlihat simple".

## Aturan wajib untuk setiap modul

1. **Minimal 50% soal bergaya kasus praktik.** Stem 3–8 kalimat berisi data lengkap (nama WP fiktif, status, tanggal masa pajak 2025–2026, angka rupiah realistis, dokumen yang ada), lalu satu pertanyaan yang menuntut penerapan **dua ketentuan atau lebih sekaligus** (contoh: PTKP + kategori TER + biaya jabatan; batas PKP + saat terutang + kode faktur; tenggat setor + sanksi bunga + pembetulan SPT; koreksi fiskal + Ps. 31E + kredit pajak). Jenis soal untuk ini: `"kasus"` (atau `"hitung"`/`"prosedur"` bila satu langkah tetapi berkonteks kasus).
2. **Vignette.** Tiap modul memuat minimal 2 vignette: satu narasi kasus dipakai 2–4 soal berurutan yang berbagi `kasusId` (string sama, mis. `"V-A3-01"`), masing-masing stem mengulang data inti secara ringkas agar tetap bisa dibaca sendiri.
3. **Opsi menjebak, bukan acak.** Untuk soal hitung, ketiga pengecoh adalah hasil dari jalur hitung yang masuk akal (lupa biaya jabatan, PTKP keliru, tarif/batas lama pra-2025, salah membulatkan, final vs non-final, DPP 11/12 diabaikan, uplift pasal keliru) dan tiap pengecoh diberi tag di `jebakanOpsi`. Untuk soal konsep/prosedur, opsi berbeda hanya pada satu frasa kualifikasi (paling lama vs paling cepat; 3 bulan vs 12 bulan; dibebaskan vs tidak dipungut; dapat vs tidak dapat dikreditkan).
4. **Soal implementasi.** Sertakan soal prosedur nyata era Coretax: pembuatan bukti potong (BPA1/BPA2/BP21/BPPU/BPNR), faktur pajak dan kode transaksi, SPT Masa/Tahunan, pembetulan, pengungkapan ketidakbenaran, keberatan/banding, penagihan, pemeteraian, pengisian baris SPT (`"baris-spt"`), bukan sekadar definisi.
5. **Soal berbasis kutipan peraturan.** Minimal 3 soal per modul memakai field `kutipan` (string 1–4 kalimat kutipan pasal/ayat yang relevan, ditulis setia pada substansi aturan) lalu pertanyaan penerapan pada kasus; meniru soal UKP yang menyediakan tautan peraturan. Jangan mengutip teks yang tidak yakin; cukup parafrase setia dan sebut pasalnya.
6. **Tingkat kesulitan.** Sebaran ±20% kesulitan 1, ±40% kesulitan 2, ±40% kesulitan 3. Kesulitan 3 = butuh ≥ 3 langkah hitung atau menggabungkan ≥ 2 kelompok ketentuan.
7. **Lampiran tabel.** Soal PPh 21 TER berasumsi tabel TER tersedia saat ujian: pembahasan menyebut kategori (A/B/C sesuai PTKP) dan lapisan yang dipakai, lalu angka tarif. Soal tetap menuntut tahu mekanisme (kategori, bruto bulanan, masa pajak terakhir), bukan hafalan seluruh tabel. Hal yang sama untuk PTKP dan lapisan Ps. 17.
8. **Lintas kelompok (B dan C).** Pada modul B6–C10, minimal 4 soal menggabungkan kelompok lain (PPh Badan + PPN, PPh Badan + Pot/Put, Akuntansi + PPh Badan, Internasional + KUP).
9. **Ketentuan Oktober 2026.** Semua angka memakai ketentuan yang berlaku (UU HPP, PP 58/2023, PMK 168/2023, PMK 81/2024, PER-11/PJ/2025, PMK 131/2024, PP 20/2026, PMK 44/2026, PMK 55/2026). Ketentuan lama hanya muncul sebagai pengecoh bertag `angka-usang` atau dalam soal yang memang menguji perubahan.
10. **Tetap adil.** Stem panjang tetap tidak ambigu; tepat satu kunci; tanpa opsi "semua benar/salah"; satuan dan pembulatan dinyatakan; `anggaranDetik` 120–200 untuk soal kasus.

## Pola stem yang dianjurkan

- "PT Nusantara Teknik (PKP sejak 2019, omzet 2025 Rp38 miliar) pada Masa Pajak Maret 2026 ... Berdasarkan data tersebut, PPN kurang/lebih bayar Masa Maret 2026 adalah ..."
- "Tuan Raka (K/2, NPWP aktif) bekerja pada PT Sentosa dengan gaji Rp14.000.000 per bulan, tunjangan transpor Rp1.000.000, iuran pensiun Rp200.000 ... Pada Masa Pajak Desember 2026, PPh Pasal 21 yang dipotong adalah ..."
- "Kutipan: 'Pasal 9 ayat (2a) UU KUP: ... dikenai sanksi administratif berupa bunga sebesar tarif bunga per bulan ... dihitung dari tanggal jatuh tempo pembayaran sampai dengan tanggal pembayaran ... paling lama 24 bulan ...' Berdasarkan kutipan itu, CV Maju yang menyetor PPh Pasal 25 Masa Januari 2026 pada 3 Juli 2026 dikenai sanksi sebesar ..."
- Vignette: "Data untuk soal 17–19: Yayasan Harapan ... (17) ... (18) ... (19) ..."

## Yang dihindari

Definisi satu kalimat berulang; angka bulat yang tidak realistis; pengecoh yang jelas-jelas mustahil; soal tanpa dasar hukum; kalimat ambigu "manakah yang benar" tanpa kualifikasi; soal yang menguji hafalan nomor peraturan semata.

## Laporan peserta Tingkat B (Oktober 2026) — lihat docs/PENGALAMAN-UJIAN.md
Topik yang dilaporkan benar-benar muncul: jurnal akuntansi dasar (beban gaji/utang gaji/PPh 21), PBB-P5L perkebunan (emplasemen, areal produktif), migas offshore, kabel bawah laut, SPPT–keberatan–pengurangan; PPh 29 dengan tarif 22% / Tbk 19% / Ps. 31E omzet ≤ Rp50 M; penyertaan saham afiliasi; PPh OP suami pegawai + usaha, istri PH/MT, gain saham; KUP teguran–keberatan–banding, STP vs SKPKB; PPh 26 atas pembelian barang dari luar negeri (bukan objek) dalam konteks P3B; pengecualian subjek pajak DN; PPh 22 bendahara dan penjualan BBM ke SPBU swasta vs Pertamina vs konsumen akhir. Setiap modul terkait wajib memuat soal yang mengarah ke butir-butir ini.
