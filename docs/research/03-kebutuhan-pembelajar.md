# Kebutuhan Pembelajar USKP/UKP Tingkat A, B, C — Realitas Ujian, Cara Belajar, dan Implikasi Fitur

Laporan riset pengalaman belajar untuk proyek situs belajar USKP/UKP. Disusun 25 Oktober 2026 (sehari sebelum UKP perdana BPPK, 26–29 Oktober 2026).

> **Catatan metodologi — wajib dibaca sebelum memakai laporan ini.**
>
> 1. **Tidak ada satu pun halaman web yang berhasil dibuka dalam sesi ini.** Kuota pencarian web untuk giliran kerja ini sudah habis (dipakai bersama oleh agen lain), dan kebijakan jaringan lingkungan kerja menolak koneksi ke seluruh domain sumber: kp3skp.or.id, news.ddtc.co.id, perpajakan.ddtc.co.id, ikpi.or.id, ortax.org, datacenter.ortax.org, pppk.kemenkeu.go.id, jdih.kemenkeu.go.id, klc.kemenkeu.go.id, klc2.kemenkeu.go.id, peraturan.bpk.go.id, pajak.go.id, pajak.com, myconsultant.id, inatax.co.id, tipspajak.com, pajakonline.com, bahkan google.com dan wikipedia.org (proxy menjawab 403 pada CONNECT; WebFetch gagal resolusi DNS). Sesuai pedoman, penolakan kebijakan tidak dicoba diakali.
> 2. **Basis fakta laporan ini** adalah (a) dua laporan riset saudara yang sudah ada di repo — `/home/user/uskp-learn/docs/research/01-silabus-format-ujian.md` (selanjutnya **[01]**) dan `/home/user/uskp-learn/docs/research/02a-regulasi-kup-pphop-potput.md` (selanjutnya **[02a]**) — yang keduanya disusun dari cuplikan mesin pencari yang dicocokkan silang dan mencantumkan URL serta tanggal per fakta; (b) pengetahuan latar penyusun (model bahasa, pengetahuan hingga pertengahan 2026) yang **tidak dapat dicek ulang hari ini**; (c) penalaran desain produk.
> 3. **Penanda provenance** yang dipakai di seluruh dokumen:
>
> | Tanda | Arti |
> |---|---|
> | ✅ | Terkonfirmasi silang dalam [01]/[02a] dari ≥1 sumber dengan URL dan tanggal |
> | ◐ | Pengetahuan latar penyusun yang konsisten dengan [01]/[02a], tetapi sumbernya tidak dibuka hari ini — cek sebelum dipakai sebagai konten ujian |
> | **[BELUM TERVERIFIKASI]** | Tidak ditemukan sumbernya dalam riset ini; jangan dipakai sebagai fakta |
> | **[HIPOTESIS]** | Simpulan desain/penalaran penyusun; perlu validasi lewat wawancara pengguna atau data |
>
> 4. **Contoh soal di Bab 2 adalah rekonstruksi ilustratif** yang disusun dari kisi-kisi resmi KP3SKP/BPPK (sebagaimana dirangkum [01] §3) dan angka regulasi di [02a]; **bukan soal asli USKP/UKP**. Soal asli tidak dipublikasikan panitia, dan pembahasan soal pihak ketiga (DDTC, Ortax, MyConsultant, buku, bimbel) tidak dapat dibuka hari ini. Jawaban contoh dihitung dengan ketentuan yang berlaku Oktober 2026 menurut [02a]; verifikasi ulang sebelum dipublikasikan.

---

## 0. Ringkasan eksekutif

1. **Ujian yang dihadapi pembelajar hari ini adalah UKP (Uji Kompetensi Perpajakan) BPPK**, bukan lagi USKP KP3SKP. USKP terakhir (Periode III/2026) digelar 14–15 Oktober 2026 khusus peserta mengulang; UKP perdana digelar 26–29 Oktober 2026 ✅ [01 §1, §5.7]. Situs harus diposisikan sebagai "persiapan UKP A/B/C" dengan kompatibilitas ke peta mata ujian USKP.
2. **Bentuk soal: 100% pilihan ganda** sejak USKP Periode III/2024 (Desember 2024) — 40 soal per mata ujian, 4 opsi, benar 2,5 poin, lulus ≥ 60 (24 benar) ✅ [01 §2.1]. UKP juga pilihan ganda, tetapi **komprehensif satu kali duduk per tingkat, 3–3,5 jam**, CAT daring dari rumah dengan AI proctoring dan Zoom, passing grade 60, status lulus/tidak lulus ✅ [01 §2.2]. **Tidak ada lagi soal esai dan isian formulir SPT** sejak Desember 2024 ✅ [01 §2.1, S20–S21]. Implikasi: latihan inti situs adalah bank soal PG bertimer, bukan simulator pengisian SPT (SPT tetap perlu dipahami konseptual karena diujikan sebagai PG).
3. **Materi bersifat kumulatif di UKP**: tingkat B diuji materi A+B (8 kelompok), tingkat C diuji A+B+C (10 kelompok) ✅ [01 §2.2]. Ini mengubah beban belajar secara drastis dibanding USKP lama yang per-tingkat terpisah.
4. **Tingkat kelulusan historis sangat rendah untuk peserta baru**: USKP A April 2024 hanya 10 dari 1.304 lulus (0,77%); Agustus 2024 7 dari 1.545; USKP B Periode II/2025 5,43%; USKP A Periode II/2025 20,86% ✅ [01 §5.6]. Mayoritas berstatus "mengulang" (lulus sebagian mata ujian). **Statistik kelulusan per mata ujian tidak pernah dipublikasikan** dalam cuplikan yang ditemukan **[BELUM TERVERIFIKASI]**.
5. **Kode Etik dikeluarkan dari UKP** dan dipindahkan ke ujian profesi asosiasi (IKPI, AKP2I, Perkoppi, P3KPI; paling lambat 31 Desember 2026) ✅ [01 §1, §3.6]. Situs perlu modul "Ujian Profesi" terpisah dari modul kompetensi.
6. **Regulasi berubah cepat 2024–2026** (Coretax/PMK 81/2024, PMK 15/2025, PER-11/PJ/2025, PP 20/2026, PMK 44/2026, PMK 55/2026, KMK tarif bunga bulanan) ✅ [02a Bab F]. Soal latihan lama (tanggal setor 10, pemeriksaan 4/6 bulan, bunga 2%, PMK 111/2014) **usang**; situs wajib memberi cap "berlaku sejak" pada tiap angka dan soal.
7. **Pasar pembelajar meluas**: mulai 1 Januari 2027, karyawan/pihak lain yang menjadi kuasa WP wajib memiliki SKK + SKT ✅ [01 S79; 02a E.3]. Staf pajak perusahaan menjadi segmen besar yang wajib (bukan sekadar ingin) lulus UKP.
8. **Perangkat**: belajar harian kemungkinan di ponsel, tetapi ujian wajib di **laptop** dengan Safe Exam Browser (ponsel/tablet dilarang sebagai perangkat utama; minimal Core i5 gen-10/Ryzen 5 3000, RAM 8 GB, Windows 10/11) ✅ [01 §5.3]. Situs harus mobile-first untuk membaca dan drill, plus "mode ujian" desktop yang meniru CAT.
9. **Pola belajar yang direkomendasikan** (berbasis format dan kisi-kisi; durasi tipikal bimbel **[BELUM TERVERIFIKASI]**): 8–12 minggu untuk A, 12–16 minggu untuk B (termasuk penyegaran A), 16–20 minggu untuk C; siklus "baca ringkas → hafal angka dengan spaced repetition → drill PG per sub-topik → tryout komprehensif bertimer → log kesalahan".
10. **Fitur prioritas tertinggi** (Bab 6): bank soal PG bertimer per kelompok materi dengan pembahasan dan tag kisi-kisi; tryout komprehensif per tingkat yang meniru durasi/UI CAT; kartu hafalan angka/pasal/tenggat dengan spaced repetition dan cap tanggal berlaku; kalkulator interaktif (PPh 21 TER, PPh OP, sanksi bunga, PPh Badan 31E, PPN); dasbor kelemahan per sub-topik; perencana belajar menuju tanggal ujian; info ujian dan cek kesiapan perangkat.

---

## 1. Konteks ujian yang menentukan cara belajar

Ringkasan dari [01] (detail, jadwal, dan URL ada di sana); hanya hal yang berdampak pada pengalaman belajar yang diulang di sini.

| Aspek | USKP (skema lama, s.d. Okt 2026) | UKP (skema baru, mulai 26 Okt 2026) | Dampak pada pembelajar |
|---|---|---|---|
| Dasar hukum | PMK 111/PMK.03/2014 jo. PMK 175/PMK.01/2022 ✅ | PMK 55 Tahun 2026 (berlaku 24 Agu 2026) ✅ | Materi "profesi konsultan pajak" harus memakai PMK 55/2026 |
| Penyelenggara | KP3SKP (dukungan PPPK/BPPK) ✅ | BPPK — Pusbin JFPM ✅ | Portal, pengumuman, dan FAQ berpindah ke KLC |
| Struktur ujian | Per mata ujian; A 6, B 5, C 4 mata ujian; ujian 2–3 hari ✅ | Satu ujian komprehensif per tingkat; A 5, B 8, C 10 kelompok materi; 3–3,5 jam satu sesi ✅ | Stamina dan manajemen waktu lintas topik menjadi keterampilan tersendiri |
| Bentuk soal | Sejak Des 2024: 40 PG/mata ujian; sebelumnya 10 PG + 2 uraian + 1 kasus/isian SPT ✅ | PG; jumlah soal resmi per tingkat **belum diumumkan** (simulasi swasta memakai 60/75/90 atau 60/80/100) **[BELUM TERVERIFIKASI]** | Latihan harus berbasis PG dengan pengecoh berkualitas |
| Kelulusan | Per mata ujian ≥ 60; status Lulus/Mengulang/TL; 4 kesempatan per tingkat ✅ | ≥ 60 total; lulus/tidak lulus; tidak ada "mengulang"; boleh daftar lagi periode berikutnya ✅ | Tidak bisa "menyicil" mata ujian — semua topik harus siap bersamaan |
| Jenjang | Wajib A → B → C ✅ | Tidak wajib berjenjang; B diuji A+B, C diuji A+B+C ✅ | Pembelajar bisa langsung target B/C, tetapi beban kumulatif |
| Moda | CBT luring di kota ujian (2024–Agu 2026); daring pada Periode III/2026 ✅ | Daring dari lokasi sendiri; Safe Exam Browser 1.0.2 + Zoom; dua perangkat ✅ | Kesiapan perangkat dan ruangan adalah faktor lulus/gugur |
| Biaya | Gratis sejak Des 2023 ✅ | Gratis ✅ | Hambatan biaya rendah → volume peserta tinggi, variasi kesiapan besar |
| Frekuensi | 3–4 periode/tahun ✅ | 40 periode direncanakan pada 2026; kuota ±7.000/batch ✅ | Pembelajar bisa menjadwalkan ujian sendiri → situs perlu perencana ke tanggal target |
| Kode Etik | Mata ujian tingkat A ✅ | Dikeluarkan; diuji di ujian profesi asosiasi ✅ | Modul terpisah |
| Hasil | ±3 minggu setelah ujian ✅ | 12 Nov 2026 untuk Periode 1–8; SKK 19 Nov 2026; SKK berlaku 3 tahun ✅ | SKK berbatas waktu → dorongan segera ajukan izin |

Sumber: [01] §1, §2, §5 (S1–S7, S20–S24, S56–S59, S79) dan [02a] E.2–E.4.

---

## 2. Anatomi soal per mata ujian

### 2.1 Peta bentuk soal

| Mata ujian / kelompok materi | Tingkat (USKP lama) | Tingkat (UKP) | Format pra-Des 2024 ✅ | Format Des 2024–Okt 2026 ✅ | Mengisi formulir SPT? | Tipe kognitif dominan **[HIPOTESIS]** |
|---|---|---|---|---|---|---|
| PPh OP dan SPT PPh OP | A | A, B, C | 10 PG + 2 uraian + 1 kasus isian SPT 1770 ◐ | 40 PG, 2 jam | Dulu ya (1770); kini tidak — SPT diuji sebagai PG ✅ | Hitung (PTKP, tarif, kredit pajak, PPh 25) + konsep subjek/objek |
| KUP, PPSP, Pengadilan Pajak | A, B | A, B, C | 10 PG + 2 uraian + 1 kasus (sanksi/prosedur) ◐ | 40 PG, 1,5 jam | Tidak | Hafalan tenggat, sanksi, prosedur; hitung bunga/denda |
| PPh Pemotongan/Pemungutan | A, B, C | A, B, C | 10 PG + 2 uraian + 1 kasus (PPh 21 dan bukti potong/1721) ◐ | 40 PG, 2 jam | Dulu ya (1721/unifikasi); kini tidak ✅ | Klasifikasi objek–pasal–tarif + hitung PPh 21 TER |
| PPN dan SPT PPN | A, B | A, B, C | 10 PG + 2 uraian + 1 kasus SPT Masa PPN 1111 ◐ | 40 PG, 1,5 jam | Dulu ya (1111); kini tidak ✅ | Konsep saat terutang/faktur/PM + hitung PK–PM |
| PBB-P5L dan Bea Meterai | A | Bea Meterai di A; PBB-P5L di B, C ✅ | 10 PG + uraian ◐ | 40 PG, 1,5 jam | Tidak | Hafalan objek/tarif/saat terutang; hitung PBB |
| Kode Etik Profesi | A | Tidak diuji (ujian profesi asosiasi) ✅ | PG + uraian kasus etika ◐ | 40 PG, 1 jam | Tidak | Kasus etika + hafalan PMK profesi |
| PPh Badan dan SPT PPh Badan | B, C | B, C (C: + transaksi internasional) | 10 PG + uraian + kasus rekonsiliasi fiskal/SPT 1771 ◐ | 40 PG, 2 jam | Dulu ya (1771 dan lampiran); kini tidak ✅ | Rekonsiliasi fiskal, penyusutan, 31E, kredit pajak |
| Akuntansi Perpajakan | B, C | B, C | Soal jurnal/kasus akuntansi ◐ | 40 PG, 2 jam | Tidak | Jurnal, beda temporer/permanen, pajak tangguhan |
| Pajak Internasional | C | C | PG + uraian kasus P3B/BUT ◐ | 40 PG, 2 jam | Tidak | Konsep P3B, BUT, TP, anti-avoidance |

Catatan: baris "Format pra-Des 2024" adalah pengetahuan latar penyusun yang konsisten dengan pernyataan [01] §2.1 ("sebelum Desember 2024 formatnya 10 pilihan ganda + 2 uraian + 1 kasus/isian SPT") — rincian per mata ujian ◐.

**Tempo pengerjaan** (turunan aritmetika dari [01]): USKP 40 soal/90 menit = 2,25 menit per soal; 40 soal/120 menit = 3 menit per soal. UKP: jika B memakai 80–100 soal dalam 210 menit (angka tidak resmi), tempo 2,1–2,6 menit per soal **[BELUM TERVERIFIKASI]**. Timer latihan sebaiknya diset 2–2,5 menit per soal.

**Ketersediaan soal asli dan pembahasan** (semua tidak dapat dibuka hari ini):

| Sumber | Yang diketahui | Status |
|---|---|---|
| Panitia (KP3SKP/BPPK) | Hanya kisi-kisi di lampiran pengumuman; soal tidak dipublikasikan ✅ [01 §3]; e-learning persiapan USKP A di KLC (2025) ✅ [01 §6 garis waktu] | Isi e-learning **[BELUM TERVERIFIKASI]** |
| DDTC News | Seri artikel "daftar materi/bahan belajar USKP A/B" per mata ujian (Mei 2025, Jul 2026) — berupa daftar bacaan, **bukan** kumpulan soal ✅ [01 §3 tabel] | Seri "soal + pembahasan" **[BELUM TERVERIFIKASI]** |
| MyConsultant | Halaman `myconsultant.id/soal-uskp/{pph-op, kup-ppsp-pp, potput, ppn, pbb-p5l-bm, kode-etik-konsultan-pajak}` ✅ (URL tercatat di [01 S16–S19, S27–S28]) | Isi dan jumlah soal **[BELUM TERVERIFIKASI]** |
| Bimbel USKP (bimbeluskp.com) | Rekap kisi-kisi USKP A ✅ [01 S28] | Bank soal **[BELUM TERVERIFIKASI]** |
| Ortax, buku "Kupas Tuntas USKP", modul bimbel IKPI/DDTC Academy/TaxPrime, blog alumni, Kaskus/Quora/LinkedIn | — | **[BELUM TERVERIFIKASI]** keberadaan, isi, dan tahun terbit |

### 2.2 PPh Orang Pribadi dan SPT PPh OP (UKP A, B, C)

**Anatomi.** Kisi-kisi resmi ([01] §3.1): subjek pajak dan saat mulai/berakhir kewajiban; objek dan pengecualian; biaya boleh/tidak boleh dikurangkan; NPPN; kompensasi rugi; PTKP; tarif Pasal 17; kredit pajak; angsuran PPh 25 termasuk WP OP pengusaha tertentu; SPT Tahunan OP. Angka kunci yang hampir pasti muncul ✅ [02a B.1–B.6]: tarif 5 lapisan (5% s.d. 60 jt; 15% 60–250 jt; 25% 250–500 jt; 30% 500 jt–5 M; 35% > 5 M); PTKP 54 jt + 4,5 jt kawin + 4,5 jt/tanggungan maks 3; PPh final UMKM 0,5% hanya OP/PT perorangan/koperasi dengan pekerjaan bebas dikecualikan (PP 20/2026); zakat sebagai pengurang; NPPN untuk omzet < 4,8 M dengan pemberitahuan 3 bulan pertama tahun pajak ◐.

**Contoh soal ilustratif (rekonstruksi, bukan soal asli):**

1. Tuan A (K/2) pada 2025 memiliki penghasilan neto dari usaha (pembukuan) Rp250.000.000 dan membayar zakat melalui BAZNAS Rp5.000.000. PPh terutang 2025 adalah…
   *Jawab:* PTKP K/2 = 54.000.000 + 4.500.000 + 2 × 4.500.000 = **67.500.000**. PKP = 250.000.000 − 5.000.000 − 67.500.000 = 177.500.000. PPh = 5% × 60.000.000 + 15% × 117.500.000 = 3.000.000 + 17.625.000 = **Rp20.625.000**.
2. Seorang dokter praktik mandiri dengan peredaran bruto Rp3.000.000.000 setahun ingin menghitung penghasilan neto dengan cara paling sederhana. Pernyataan yang benar…
   *Jawab:* Boleh memakai **NPPN** (peredaran bruto < Rp4,8 M) dengan **memberitahukan ke DJP paling lambat 3 bulan pertama tahun pajak** ◐; **tidak** boleh memakai PPh final 0,5% karena pekerjaan bebas dikecualikan (PP 55/2022 jo. PP 20/2026) ✅ [02a B.6].
3. PPh terutang Tuan B tahun 2025 Rp36.000.000; kredit PPh 21 Rp12.000.000 dan PPh 23 Rp6.000.000. Angsuran PPh Pasal 25 tahun 2026 per bulan…
   *Jawab:* (36.000.000 − 18.000.000) ÷ 12 = **Rp1.500.000** ◐ (Pasal 25 ayat (1) UU PPh).

### 2.3 KUP, PPSP, dan Pengadilan Pajak (UKP A, B, C)

**Anatomi.** Kisi-kisi ([01] §3.2): definisi; NPWP/PKP; pembayaran dan pelaporan (tenggat, pembetulan); pembukuan; penelitian/pemeriksaan/penyidikan; STP dan SKP; pembetulan/keberatan/pengurangan sanksi; sanksi administrasi dan pidana; restitusi; PPSP (teguran, paksa, sita, lelang, pencegahan, penyanderaan, daluwarsa); banding, gugatan, PK. Ini mata ujian **paling padat hafalan angka** dan **paling banyak berubah 2025–2026** ✅ [02a A.1–A.10, Bab F]: setor pajak masa tanggal 15 (PMK 81/2024), pemeriksaan lengkap 5 bulan/terfokus 3/spesifik 1 (PMK 15/2025), sanksi bunga berbasis KMK bulanan (uplift 0/5/10/15/20, maks 24 bulan), denda keberatan 30%/banding 60%, NIK sebagai NPWP, Coretax.

**Contoh soal ilustratif:**

1. PT X menyampaikan SPT Masa PPN Masa Maret 2026 pada 10 Mei 2026. Sanksi administrasi yang diterbitkan melalui STP…
   *Jawab:* Terlambat (batas akhir April 2026) → denda **Rp500.000** (Pasal 7 ayat (1) UU KUP) ✅ [02a A.2].
2. SKPKB Rp100.000.000; WP membayar Rp40.000.000 sebelum mengajukan keberatan; keberatan ditolak seluruhnya dan WP tidak mengajukan banding. Sanksi denda…
   *Jawab:* 30% × (100.000.000 − 40.000.000) = **Rp18.000.000** (Pasal 25 ayat (9) UU KUP) ✅ [02a G.4]. Jika WP mengajukan banding dan ditolak, yang dikenakan adalah 60% dan denda 30% tidak dikenakan.
3. Menurut PMK 15/2025, jangka waktu pengujian pemeriksaan lapangan jenis "terfokus" paling lama…
   *Jawab:* **3 bulan** (lengkap 5 bulan, spesifik 1 bulan) ✅ [02a A.6, F#3]. Soal lama yang menyebut "pemeriksaan kantor 4 bulan/lapangan 6 bulan" sudah usang.
4. Urutan tindakan penagihan setelah STP jatuh tempo 1 bulan dan tidak dilunasi…
   *Jawab:* Surat Teguran (+7 hari) → Surat Paksa (+21 hari) → SPMP/penyitaan (+2×24 jam) → pengumuman lelang (+14 hari) → lelang (+14 hari) ✅ [02a G.5].

### 2.4 PPh Pemotongan/Pemungutan (UKP A, B, C)

**Anatomi.** Kisi-kisi ([01] §3.3): PPh 21/26 (pemotong, penerima, objek, natura, pengurang, TER, penghitungan bulanan/tidak teratur/pesangon/honorarium/pensiun, PPh 21 final), PPh 22 (pemungut, impor, bendahara, badan tertentu), PPh 23 dan 4(2) (objek, tarif, pengecualian, bukti potong unifikasi); tingkat B/C menambah Pasal 15 dan Pasal 26. Soal tipikal adalah **klasifikasi** (transaksi → pasal → tarif → final/non-final → pemotong) dan **hitung PPh 21 TER** ✅ [02a C.1, G.2].

**Contoh soal ilustratif:**

1. PT Y (PKP) membayar jasa konsultansi manajemen Rp50.000.000 (belum termasuk PPN) kepada CV Z yang ber-NPWP. PPh yang wajib dipotong PT Y…
   *Jawab:* PPh Pasal 23 **2%** × 50.000.000 = **Rp1.000.000** ✅ [02a C.3]; bila CV Z tidak ber-NPWP tarif 100% lebih tinggi → Rp2.000.000 ◐.
2. Pegawai tetap TK/0 menerima gaji Rp10.000.000 pada Januari 2026 (tanpa penghasilan lain). Cara menghitung PPh 21 Januari…
   *Jawab:* Memakai **TER bulanan kategori A** (status PTKP TK/0) × penghasilan bruto; Desember dihitung ulang dengan tarif Pasal 17 atas PKP tahunan dikurangi PPh Jan–Nov ✅ [02a G.2]. Lapisan TER A untuk Rp9.650.000–10.050.000 adalah 2% ◐ (Lampiran PP 58/2023; cek) → **Rp200.000**.
3. PT Y menyewa gedung kantor dari Tuan C seharga Rp100.000.000/tahun. Kewajiban PT Y…
   *Jawab:* Memotong **PPh Pasal 4 ayat (2) final 10%** = **Rp10.000.000**, menyetor dan melaporkan melalui bukti potong unifikasi ✅ [02a C.4, C.7].

### 2.5 PPN dan SPT (Masa) PPN (UKP A, B, C)

**Anatomi.** Kisi-kisi ([01] §3.4): legal character; objek/bukan objek; PKP dan pengusaha kecil; saat dan tempat terutang; faktur pajak dan e-Faktur; DPP (harga jual, penggantian, nilai lain, nilai tertentu) dan tarif; pengkreditan PM; pemungut PPN; restitusi/kompensasi (ditekankan di B); SPT Masa PPN termasuk PKP OP pengguna NPPN. Angka kunci: tarif 12% sejak 1 Januari 2025 dengan DPP nilai lain 11/12 untuk barang/jasa non-mewah sehingga beban efektif 11% ◐ (PMK 131/2024; **cek**); batas pengusaha kecil Rp4,8 M ◐; e-Faktur diunggah paling lambat tanggal 20 bulan berikutnya ✅ [02a F#4].

**Contoh soal ilustratif:**

1. PKP menyerahkan BKP non-mewah dengan harga jual Rp100.000.000 pada Maret 2026. PPN yang dipungut…
   *Jawab:* 12% × (11/12 × 100.000.000) = **Rp11.000.000** ◐ (PMK 131/2024 — verifikasi).
2. PKP membeli satu unit sedan untuk kendaraan dinas direksi dengan PM Rp44.000.000. Pajak Masukan tersebut…
   *Jawab:* **Tidak dapat dikreditkan** (Pasal 9 ayat (8) huruf c UU PPN: perolehan dan pemeliharaan kendaraan bermotor berupa sedan dan station wagon, kecuali barang dagangan atau disewakan) ◐.
3. Masa Mei 2026: PK Rp50.000.000, PM dapat dikreditkan Rp60.000.000. Perlakuan atas selisih…
   *Jawab:* Lebih bayar Rp10.000.000 → **dikompensasikan ke Masa Pajak berikutnya**; restitusi hanya pada akhir tahun buku kecuali PKP tertentu (Pasal 9 ayat (4)–(4b) UU PPN) ◐.

### 2.6 PBB-P5L dan Bea Meterai (USKP A; UKP: Bea Meterai di A, PBB-P5L di B dan C)

**Anatomi.** Kisi-kisi ([01] §3.5): PBB P5L — SPOP/LSPOP, objek dikecualikan, NJOP/NJKP/NJOPTKP, penghitungan per sektor, SPPT/SKP/STP, keberatan, pengurangan, restitusi, bagi hasil; Bea Meterai (UU 10/2020) — objek dan pengecualian, saat terutang dan pihak terutang, tarif Rp10.000 dan cara pelunasan (meterai tempel, elektronik, pemeteraian kemudian), pemungut, daluwarsa, sanksi.

**Contoh soal ilustratif:**

1. Kuitansi penerimaan uang Rp4.000.000 dan surat perjanjian sewa bernilai Rp3.000.000. Yang terutang bea meterai…
   *Jawab:* Hanya **surat perjanjian** (dokumen perjanjian terutang tanpa batas nilai); kuitansi/dokumen yang menyatakan jumlah uang terutang jika nilainya **> Rp5.000.000** ◐ (Pasal 3 UU 10/2020). Tarif Rp10.000 ✅ [01 §3.5].
2. Objek PBB sektor perkebunan: NJOP bumi Rp10.000.000.000, NJOP bangunan Rp2.000.000.000, NJOPTKP Rp12.000.000, NJKP 40%, tarif 0,5%. PBB terutang…
   *Jawab:* 0,5% × 40% × (12.000.000.000 − 12.000.000) = **Rp23.976.000** ◐ (NJKP 40% dan NJOPTKP Rp12 juta untuk PBB-P5L — verifikasi ke PMK terkini).
3. Dokumen dibuat di luar negeri dan baru digunakan di Indonesia. Saat terutang bea meterai…
   *Jawab:* **Saat dokumen digunakan di Indonesia**, dilunasi melalui pemeteraian kemudian ◐ (Pasal 8 UU 10/2020).

### 2.7 Kode Etik Profesi → Ujian Profesi Asosiasi

**Anatomi.** Di USKP lama: hak, kewajiban, larangan konsultan terhadap klien, sesama konsultan, dan pemangku kepentingan; PMK profesi ✅ [01 §3.6]. Di skema baru: ujian profesi asosiasi mencakup **standar etik, standar praktik, dan sistem pengendalian mutu** ✅ [01 S30]; materi PMK profesi harus memakai **PMK 55/2026** (enam larangan Pasal 30, sanksi peringatan → pembekuan ≤ 2 tahun → pencabutan permanen, PPL 20/30/45 SKP, laporan tahunan 30 April) ✅/◐ [02a E.1–E.2]. Jadwal dan bentuk ujian profesi IKPI dkk. **belum diumumkan** **[BELUM TERVERIFIKASI]**.

**Contoh soal ilustratif:**

1. Seorang konsultan pajak mengunggah video di media sosial yang menonjolkan keberhasilannya "memenangkan" restitusi klien. Menurut Kode Etik IKPI, tindakan ini…
   *Jawab:* Termasuk **publikasi/iklan yang menonjolkan diri** dan melanggar bab publikasi; IKPI (2023) menegaskan promosi di media sosial sebagai pelanggaran ◐ [02a E.1].
2. Konsultan pajak berizin menerima tawaran jabatan komisaris pada BUMN. Menurut PMK 55/2026…
   *Jawab:* **Dilarang rangkap jabatan** pada instansi pemerintah/lembaga negara/BUMN/BUMD (Pasal 30 ayat (1) huruf f) ✅ [02a E.2].
3. Konsultan pajak tingkat B wajib memenuhi PPL per tahun sebanyak…
   *Jawab:* **30 SKP (24 terstruktur)** — satu kelompok sumber sekunder; **[BELUM TERVERIFIKASI]** ke teks PMK 55/2026 [01 §4.3; 02a E.2].

### 2.8 PPh Badan dan SPT PPh Badan (UKP B, C)

**Anatomi.** Kisi-kisi ([01] §3.7): subjek/objek badan; biaya boleh/tidak boleh (koreksi fiskal positif/negatif); penyusutan/amortisasi fiskal; kompensasi rugi; kredit pajak 22/23/24/25; tarif 22% dan fasilitas Pasal 31E; tax holiday/allowance/super deduction; PPh 25 badan (WP baru, bank, BUMN); hubungan istimewa; SPT 1771 dan lampiran I–VI. Tingkat C menambah BUT (atribusi laba, branch profit tax Pasal 26 ayat (4)), kredit pajak LN Pasal 24, afiliasi lintas negara, PMA ◐ [01 §3.7].

**Contoh soal ilustratif:**

1. PT M peredaran bruto 2025 Rp30.000.000.000, PKP Rp3.000.000.000. PPh terutang…
   *Jawab:* Bagian PKP berfasilitas = (4.800.000.000 ÷ 30.000.000.000) × 3.000.000.000 = 480.000.000 → 50% × 22% = 11% → 52.800.000; sisa 2.520.000.000 × 22% = 554.400.000; total **Rp607.200.000** ◐ (Pasal 31E UU PPh).
2. Dalam rekonsiliasi fiskal PT M terdapat: (i) biaya entertainment tanpa daftar nominatif Rp80 jt; (ii) pendapatan bunga deposito Rp20 jt; (iii) penyusutan komersial lebih besar Rp30 jt dari penyusutan fiskal. Koreksi yang tepat…
   *Jawab:* (i) koreksi **positif** 80 jt (tidak dapat dibuktikan); (ii) koreksi **negatif** 20 jt (dikenai PPh final, dikeluarkan dari penghasilan neto fiskal); (iii) koreksi **positif** 30 jt (beda temporer) ◐.
3. Lampiran SPT 1771 yang memuat daftar pemegang saham dan susunan pengurus…
   *Jawab:* **1771-V** (1771-I rekonsiliasi fiskal; II HPP dan biaya; III kredit pajak dalam negeri; IV PPh final dan bukan objek; VI penyertaan modal dan pinjaman afiliasi) ◐.

### 2.9 Akuntansi Perpajakan (UKP B, C)

**Anatomi.** Kisi-kisi ([01] §3.8): jurnal hak/kewajiban pajak (PPh 21/23/4(2) dipotong dan memotong, PK/PM, PPh 25, utang pajak); aspek pajak atas piutang, persediaan, biaya dibayar di muka, aset tetap, aset tak berwujud, kewajiban, ekuitas; organisasi nirlaba; pengakuan pendapatan/biaya; rekonsiliasi fiskal dan penghitungan PPh badan; tingkat C: transaksi internasional, lembaga keuangan, jasa konstruksi, merger/akuisisi/likuidasi. PSAK 46 (kini **PSAK 212**) lazim diajarkan tetapi tidak eksplisit di kisi-kisi **[BELUM TERVERIFIKASI]** [01 §3.8; 02a D.2].

**Contoh soal ilustratif:**

1. PT N (PKP) menerima tagihan jasa konsultan Rp50.000.000 + PPN Rp5.500.000 dari PKP lain dan memotong PPh 23. Jurnal PT N…
   *Jawab:* Dr Beban jasa 50.000.000; Dr PPN Masukan 5.500.000; Cr Utang PPh 23 1.000.000; Cr Utang usaha/Kas **54.500.000** ◐.
2. Penyusutan fiskal tahun berjalan Rp300 jt, komersial Rp200 jt, tarif 22%. Dampak pajak tangguhan…
   *Jawab:* Beda temporer kena pajak Rp100 jt → **liabilitas pajak tangguhan Rp22.000.000** (beban pajak tangguhan) ◐ (PSAK 212/46).
3. Perusahaan non-bank membentuk penyisihan piutang tak tertagih Rp40 jt. Perlakuan fiskal dan akuntansinya…
   *Jawab:* Penyisihan **tidak boleh** dibiayakan secara fiskal (hanya penghapusan nyata dengan syarat Pasal 6 ayat (1) huruf h; pengecualian untuk bank/lembaga tertentu) → koreksi positif, beda temporer → **aset pajak tangguhan** 22% × 40 jt = Rp8.800.000 ◐.

### 2.10 Pajak Internasional dan PPh Badan Transaksi Internasional (UKP C)

**Anatomi.** Rilis cakupan BPPK ([01] §3.9): P3B (model OECD/UN, hak pemajakan per jenis penghasilan, beneficial owner, SKD/DGT — kini PMK 112/2025 ✅ [02a F#6]); BUT (timbulnya, atribusi laba); metode penghindaran pajak berganda (Pasal 24); anti-avoidance Pasal 18 (DER, CFC, treaty abuse); transfer pricing dan dokumentasi; MAP; APA; EoI/AEoI; PPh 26 dan P3B. Kisi-kisi resmi USKP C lama **tidak ditemukan** **[BELUM TERVERIFIKASI]**.

**Contoh soal ilustratif:**

1. PT P membayar dividen Rp1.000.000.000 kepada pemegang saham badan di negara mitra P3B (tarif P3B 10%). Penerima menyerahkan Form DGT yang sah dan memenuhi syarat beneficial owner. PPh 26 yang dipotong…
   *Jawab:* **10% = Rp100.000.000**; tanpa DGT/beneficial owner → tarif domestik **20%** ◐ [02a C.6].
2. BUT di Indonesia memiliki PKP setelah PPh badan Rp1.000.000.000 dan tidak menanamkannya kembali di Indonesia. Kewajiban tambahan…
   *Jawab:* **Branch profit tax PPh Pasal 26 ayat (4) 20% = Rp200.000.000** (atau tarif P3B); dikecualikan bila ditanamkan kembali sesuai syarat PMK ◐.
3. PT Q memiliki utang rata-rata Rp10 M dan modal rata-rata Rp2 M. Biaya pinjaman Rp800 jt. Yang dapat dibiayakan menurut ketentuan DER…
   *Jawab:* DER 5:1 > batas **4:1** (PMK 169/PMK.010/2015) → biaya pinjaman yang diakui = 4/5 × 800 jt = **Rp640.000.000** ◐.

---

## 3. Mata ujian tersulit, alasan, dan kesalahan umum

### 3.1 Apa yang dikatakan data

| Bukti | Nilai | Sumber |
|---|---|---|
| USKP A peserta baru, April 2024 | 10 lulus dari 1.304 (0,77%); 659 mengulang; 635 TL | ✅ [01 §5.6, S65] |
| USKP A peserta baru, Agustus 2024 | 7 lulus dari 1.545; 959 mengulang; 579 TL | ✅ [01 S66] |
| USKP A dan B peserta baru, Periode II/2025 | A 20,86% lulus (417/1.999); **B 5,43%** (38/700); A 1.266 mengulang, B 468 mengulang | ✅ [01 S68] |
| USKP B Periode III/2025 (sebagian mengulang) | 43% lulus (281/651) | ✅ [01 S69] |
| USKP I/2025 TL tingkat B | 44 TL **seluruhnya** peserta yang mengulang ketiga kalinya | ✅ [01 S60] |
| Statistik kelulusan **per mata ujian** | Tidak ada dalam cuplikan pengumuman mana pun | **[BELUM TERVERIFIKASI]** |
| Evaluasi penyelenggaraan oleh PPPK/BPPK setelah kelulusan < 1% | Ada; format diubah menjadi PG penuh Des 2024 | ✅ [01 S84, §6] |

Bacaan: (1) status "mengulang" mendominasi — artinya peserta **lulus sebagian mata ujian** dan gagal sebagian; (2) **tingkat B jauh lebih sulit daripada A** untuk peserta baru (5% vs 21% pada periode yang sama); (3) peserta yang gagal pada percobaan ketiga cenderung gagal lagi — menunjukkan **masalah metode belajar, bukan hanya kurang waktu** **[HIPOTESIS]**; (4) di UKP, status "mengulang" hilang, sehingga kelemahan di satu kelompok materi akan **menjatuhkan seluruh ujian** — masalah "mata ujian tersulit" berubah menjadi masalah "kelompok materi terlemah".

### 3.2 Mata ujian yang paling sering menjatuhkan — hipotesis berperingkat

Tidak ada data per mata ujian, dan testimoni alumni tidak dapat dibuka hari ini. Peringkat berikut adalah **[HIPOTESIS]** dari struktur kisi-kisi, bobot hitungan, laju perubahan regulasi, dan selisih kelulusan A vs B; perlu divalidasi dengan survei pengguna awal situs.

| Peringkat | Mata ujian | Mengapa sulit (bukti/penalaran) |
|---|---|---|
| 1 | **PPh Badan dan SPT PPh Badan (B/C)** | Mensyaratkan kefasihan akuntansi (rekonsiliasi fiskal, penyusutan, 31E, kredit pajak) yang tidak dimiliki lulusan non-akuntansi; kelulusan B peserta baru 5,43% ✅ |
| 2 | **Akuntansi Perpajakan (B/C)** | Jurnal dua arah (memotong vs dipotong), beda temporer vs permanen, pajak tangguhan; satu-satunya mata ujian yang bisa "nol" bagi yang tidak berlatar akuntansi; di C ditambah merger/likuidasi/konstruksi/lembaga keuangan ✅ kisi-kisi |
| 3 | **KUP, PPSP, Pengadilan Pajak (A/B/C)** | Volume hafalan angka terbesar (tenggat, denda, bunga, jangka waktu keberatan/banding/penagihan/daluwarsa) dan **paling banyak berubah 2024–2026** (PMK 81/2024, 118/2024, 15/2025, KMK bunga bulanan) ✅ [02a Bab F] — bahan belajar lama menyesatkan |
| 4 | **PPh Pot/Put (A/B/C)** | Matriks klasifikasi besar (pasal × objek × tarif × final/non-final × pemotong), ditambah TER PPh 21 (PP 58/2023) dan bukti potong unifikasi Coretax (PER-11/PJ/2025) ✅ |
| 5 | **Pajak Internasional (C)** | Konseptual dan bahasa teknis (beneficial owner, time test BUT, TP method); kisi-kisi lama tidak tersedia; populasi kecil (C hanya 24–35 peserta per periode 2026 ✅ [01 §5.6]) |
| 6 | **PPN dan SPT PPN** | Konsep saat terutang/faktur/PM yang bisa dikreditkan; perubahan tarif 12% dengan DPP 11/12 (2025) ◐ menambah kebingungan |
| 7 | **PPh OP** | Hitungan panjang tetapi polanya stabil; PTKP tidak berubah sejak 2016 ✅ [02a B.2]; PP 20/2026 mengubah kasus UMKM ✅ |
| 8 | **PBB-P5L dan Bea Meterai**; **Kode Etik** | Cakupan sempit dan hafalan; durasi ujian 1–1,5 jam ✅ |

### 3.3 Kesalahan umum peserta (hipotesis yang dapat diuji lewat data jawaban di situs)

| Kategori | Kesalahan | Mengapa relevan sekarang |
|---|---|---|
| Angka usang | Memakai tanggal setor 10 (bukan 15), pemeriksaan 4/6 bulan (bukan 5/3/1), bunga sanksi 2% flat (bukan tarif KMK bulanan + uplift), denda banding 100% (bukan 60%), PMK 111/2014 untuk profesi (bukan PMK 55/2026) | Semua berubah 2021–2026 ✅ [02a A, F]; bank soal pihak ketiga lama belum tentu diperbarui |
| PTKP dan pembulatan | Salah status (K/I vs K, tanggungan > 3), lupa pembulatan PKP ke ribuan ke bawah | Pola soal PPh OP ✅ kisi-kisi |
| PPh 21 | Lupa batas biaya jabatan Rp500.000/bulan; memakai TER untuk Desember; salah kategori TER (A/B/C) | PP 58/2023 ✅ [02a G.2] |
| Final vs non-final | Mengkreditkan PPh final; memasukkan penghasilan final ke PKP | Muncul lintas PPh OP, Badan, Pot/Put, Akuntansi |
| Membaca soal | Melewatkan kata "kecuali", "paling lama", "paling sedikit"; PG dengan dua opsi hampir benar | Format PG penuh dengan 2–3 menit per soal ✅ |
| Manajemen waktu/stamina | USKP: 2,25–3 menit per soal; UKP: 3–3,5 jam tanpa jeda lintas 5–10 kelompok materi ✅ | Tidak ada "mengulang" di UKP — satu kelompok lemah menjatuhkan semua |
| Teknis ujian daring | Perangkat tidak memenuhi spesifikasi, SEB tidak terpasang, terlambat > 15 menit, kertas buram (dilarang) | Pelanggaran = gugur ✅ [01 §5.3, S57] |
| Mengulang tanpa mengubah metode | Gagal ketiga kali → TL dan nilai hangus (USKP) ✅ [01 S60] | Perlu log kesalahan dan diagnosis, bukan sekadar mengulang soal yang sama |

---

## 4. Pola belajar yang berhasil

### 4.1 Apa yang tersedia di pasar (status verifikasi)

| Penyedia | Yang diketahui | Status |
|---|---|---|
| KLC/BPPK | E-learning persiapan USKP A (2025); FAQ; pedoman UKP; dummy test dan uji coba perangkat sebelum ujian ✅ [01 §5.3, §6] | Isi kurikulum **[BELUM TERVERIFIKASI]** |
| IKPI | Asosiasi terdaftar; menyelenggarakan brevet dan PPL; akan menyelenggarakan ujian profesi ✅ [01 S30; 02a E.2] | Kurikulum bimbel USKP/UKP, durasi, biaya **[BELUM TERVERIFIKASI]** |
| DDTC Academy, TaxPrime, kampus (program brevet/USKP) | — | **[BELUM TERVERIFIKASI]** (tidak dapat dibuka) |
| MyConsultant (myconsultant.id, sertifikasi.myconsultant.id) | Halaman info USKP (jadwal, materi, biaya, sistem nilai, kota ujian) dan halaman soal per mata ujian ✅ (URL tercatat di [01]) | Isi **[BELUM TERVERIFIKASI]** |
| Bimbel USKP (bimbeluskp.com) | Kisi-kisi, persyaratan, biaya ujian ✅ [01 S28, S35, S50] | Program bimbel **[BELUM TERVERIFIKASI]** |
| Simulasi UKP swasta | Memakai 60/75/90 atau 60/80/100 soal per tingkat (bukan angka resmi) ✅ [01 §2.2] | — |

**Brevet A/B/C vs USKP/UKP** ◐ (pengetahuan latar; cek ke penyedia): Brevet adalah **kursus** (umumnya 2–4 bulan, kelas malam/akhir pekan, oleh IKPI, kampus, dan lembaga pelatihan) dengan **sertifikat kepesertaan**, bukan sertifikasi kompetensi; tidak menjadi syarat UKP. Peta topiknya mirip (Brevet A ≈ PPh OP, KUP, PPh 21, PPN dasar, PBB/BM; Brevet B ≈ PPh Badan, Pot/Put lanjutan, PPN lanjutan, akuntansi pajak; Brevet C ≈ pajak internasional), sehingga alumni brevet adalah calon pengguna yang sudah "setengah jalan". Satu sumber menyebut sertifikat brevet/ijazah perpajakan D-III sebagai bukti kompetensi **pihak lain** untuk SKT dalam PMK 44/2026 ◐ [02a E.3] — bila benar, brevet tetap relevan untuk karyawan WP, tetapi SKK UKP tetap wajib mulai 2027 ✅ [01 S79].

### 4.2 Durasi persiapan

Durasi tipikal menurut alumni/bimbel **[BELUM TERVERIFIKASI]**. Rekomendasi berikut diturunkan dari jumlah kelompok materi, format PG, sifat kumulatif UKP, dan asumsi 8–10 jam belajar/minggu untuk pekerja **[HIPOTESIS]**:

| Tingkat | Kelompok materi | Pembelajar berlatar akuntansi/pajak | Pembelajar non-akuntansi | Catatan |
|---|---|---|---|---|
| A | 5 (+ modul ujian profesi) | 6–8 minggu | 10–12 minggu | KUP dan Pot/Put menyita separuh waktu |
| B | 8 (A+B) | 10–12 minggu (A sudah dikuasai) | 14–16 minggu | Akuntansi Perpajakan dan PPh Badan perlu latihan jurnal harian |
| C | 10 (A+B+C) | 12–16 minggu (B sudah dikuasai) | 18–20 minggu | Pajak internasional butuh bacaan P3B dan kasus |

Karena UKP direncanakan hampir setiap bulan (40 periode pada 2026) ✅, pembelajar dapat **memilih tanggal ujian setelah skor tryout stabil ≥ 70**, bukan sebaliknya **[HIPOTESIS]** — ini argumen untuk perencana belajar adaptif.

### 4.3 Jadwal mingguan yang direkomendasikan (pekerja penuh waktu, ±9 jam/minggu) **[HIPOTESIS]**

| Hari | Durasi | Aktivitas | Perangkat |
|---|---|---|---|
| Senin–Kamis | 45–60 menit/hari | 10 menit ulang kartu hafalan (spaced repetition) → 25 menit baca ringkasan sub-topik → 15–20 menit drill 10–15 soal PG bertimer sub-topik tersebut → catat kesalahan | Ponsel (perjalanan/istirahat) |
| Jumat | 30 menit | Tinjau log kesalahan minggu ini; ulang soal yang salah dengan varian angka | Ponsel/laptop |
| Sabtu | 2–3 jam | Tryout satu kelompok materi penuh (40 soal, 90–120 menit) → bedah pembahasan → kalkulator untuk soal hitung | Laptop (meniru CAT) |
| Minggu (tiap 2–3 minggu) | 3–3,5 jam | Tryout komprehensif tingkat yang dituju dengan durasi UKP penuh, tanpa jeda | Laptop + ruangan ujian |

### 4.4 Teknik yang sesuai bentuk soal

| Teknik | Alasan berbasis temuan | Cara mewujudkan di situs |
|---|---|---|
| **Drill PG berulang dengan pengecoh realistis** | 100% PG; 24 benar dari 40 untuk lulus ✅ | Bank soal bertag kisi-kisi; variasi angka otomatis; pengecoh dari kesalahan umum (Bab 3.3) |
| **Hafalan terjadwal (spaced repetition)** untuk pasal, tenggat, tarif, denda, jangka waktu | KUP dan Pot/Put didominasi angka; perubahan 2025–2026 membuat hafalan lama salah ✅ | Kartu dengan cap "berlaku sejak" dan "menggantikan"; dek per kelompok materi |
| **Kalkulasi cepat dengan pola tetap** (PTKP → PKP → tarif berlapis; TER; 31E; PK–PM; bunga KMK) | Soal hitung bisa diselesaikan 2–3 menit hanya jika polanya otomatis | Kalkulator "langkah demi langkah" yang menampilkan rumus, lalu mode "sembunyikan langkah" |
| **Pemahaman SPT secara konseptual, bukan pengisian** | Isian SPT dihapus; SPT diuji sebagai PG ✅ | Peta formulir interaktif (1770, 1771 + lampiran, SPT Masa PPN, bukti potong unifikasi) yang bisa diklik untuk melihat isi baris, bukan simulator entri data |
| **Log kesalahan dan diagnosis** | Peserta gagal 3× cenderung gagal lagi ✅ [01 S60] | Dasbor kelemahan per sub-topik; rekomendasi otomatis |
| **Simulasi kondisi ujian** | Daring, SEB, Zoom, 3–3,5 jam, dua perangkat ✅ | Mode ujian layar penuh, timer, navigasi soal seperti CAT, larangan jeda, daftar cek perangkat |
| **Urutan topik dari kerangka ke rinci** | KUP adalah kerangka semua pajak; PPh OP paling stabil | Lihat Bab 6.2 |

---

## 5. Persona pembelajar

Ketiga persona berikut adalah **[HIPOTESIS]** yang disusun dari syarat peserta, cakupan izin, perubahan regulasi 2026, dan ketentuan perangkat ujian ✅ [01 §4, §5.3; 02a E.2–E.3]. Validasi dengan 5–8 wawancara per persona sebelum rilis.

| Dimensi | Persona 1: **Fresh graduate** (S-1 akuntansi/fiskal/hukum/manajemen, 22–25 th) | Persona 2: **Staf pajak perusahaan** (tax officer/supervisor, 25–35 th) | Persona 3: **Akuntan/konsultan junior** (KAP/KKP, 23–30 th) |
|---|---|---|---|
| Tujuan utama | SKK tingkat A (atau langsung B bila berlatar akuntansi) sebagai modal melamar ke KKP/KAP; menunggu syarat pengalaman 1 tahun untuk izin B ✅ | **Wajib** SKK + SKT agar tetap sah menjadi kuasa WP mulai 1 Jan 2027 ✅ [01 S79]; sering langsung target **B** karena menangani WP badan | Izin praktik A/B secepatnya untuk menandatangani sebagai kuasa; target naik ke C untuk klien PMA/BUT |
| Pengetahuan awal | Teori kuliah; lemah di praktik Coretax, bukti potong, kalender pajak | Kuat di praktik rutin (PPh 21, PPN, unifikasi) tetapi sempit; lemah di KUP prosedural, PBB-P5L, akuntansi pajak tangguhan | Kuat akuntansi dan PPh Badan; lemah di PBB-P5L, bea meterai, pajak internasional |
| Waktu belajar | Banyak tetapi tidak terstruktur; 2–4 jam/hari mungkin | Sangat terbatas; 30–60 menit/hari, padat saat tenggat bulanan (tanggal 15/20/akhir bulan) ✅ [02a A.1] | Terbatas dan musiman (puncak Maret–April SPT Tahunan) |
| Perangkat | Ponsel dominan; laptop mungkin **tidak memenuhi** spesifikasi SEB (Core i5 gen-10/RAM 8 GB) ✅ | Laptop kantor (sering dikunci kebijakan IT — SEB mungkin tidak bisa dipasang); ponsel untuk belajar | Laptop pribadi memadai; ponsel untuk hafalan |
| Motivasi | Ekstrinsik (kerja), rentan menyerah setelah skor tryout rendah | Regulatif dan dukungan atasan; takut gugur karena teknis | Karier dan uang; kompetitif |
| Risiko gagal utama | Tidak tahu tempo soal; menghafal materi usang dari skripsi/buku lama | Hanya menguasai topik pekerjaan sendiri; kehabisan stamina di ujian komprehensif 3,5 jam | Meremehkan KUP/PBB; terlalu sedikit latihan PG |
| Fitur yang paling bernilai | Jalur belajar terpandu dari nol; penjelasan konsep; cek kesiapan perangkat; komunitas | Drill 10 menit, dasbor kelemahan, kartu hafalan, "apa yang berubah" per regulasi, mode belajar luring/PWA | Tryout komprehensif, kalkulator lanjutan (31E, pajak tangguhan, DER, Pasal 24), modul C, pelacak syarat izin |

Catatan persona tambahan yang layak dipertimbangkan: **pemegang sertifikat USKP lama** yang sertifikatnya diakui sebagai SKK maksimal 2 tahun ✅ [01 §5.5] dan **peserta USKP berstatus "mengulang"** yang nilainya hangus karena skema lama berakhir — keduanya butuh modul "transisi ke UKP" dan jalur percepatan.

---

## 6. Implikasi fitur dan urutan belajar

### 6.1 Daftar fitur berperingkat

| Prioritas | Fitur | Alasan berbasis temuan | Persona utama |
|---|---|---|---|
| **P0** | **Bank soal PG bertimer per kelompok materi** dengan pembahasan langkah demi langkah, tag kisi-kisi resmi, cap "berlaku sejak", variasi angka | Ujian 100% PG; kisi-kisi resmi tersedia di [01] §3; lulus = 24/40 ✅; soal lama usang ✅ | Semua |
| **P0** | **Tryout komprehensif per tingkat** (A 5, B 8, C 10 kelompok) 3–3,5 jam, navigasi dan tampilan ala CAT, tanpa jeda, skor per kelompok dan total vs passing grade 60 | UKP komprehensif satu kali duduk; tidak ada status mengulang ✅ | 2, 3 |
| **P0** | **Kartu hafalan spaced repetition** (pasal, tenggat, tarif, denda, jangka waktu, lampiran SPT) dengan dek per kelompok materi dan penanda "menggantikan ketentuan lama" | KUP/Pot/Put sarat angka; 16 perubahan 2025–2026 ✅ [02a Bab F] | Semua, terutama 2 |
| **P0** | **Dasbor kelemahan** per sub-topik kisi-kisi + rekomendasi latihan otomatis + log kesalahan | Peserta gagal 3× cenderung gagal lagi ✅; "mengulang" dominan ✅ | Semua |
| **P1** | **Kalkulator interaktif** bermode belajar: PPh OP (PTKP, tarif, NPPN, UMKM PP 20/2026), PPh 21 TER bulanan dan Desember, sanksi bunga KMK bulanan (uplift, maks 24 bulan), denda keberatan/banding, PPh Badan 31E, PPN PK–PM, pajak tangguhan, DER, Pasal 24 | Rumus siap pakai ada di [02a] Bab G; soal hitung harus selesai 2–3 menit | 1, 3 |
| **P1** | **Perencana belajar ke tanggal ujian** (pilih tingkat + tanggal UKP target → jadwal mingguan otomatis; saran "siap daftar" saat tryout ≥ 70) | UKP hampir tiap bulan; satu ujian aktif per waktu ✅ [01 S41] | 2 |
| **P1** | **Halaman Info Ujian + FAQ transisi** (jadwal BPPK, alur KLC/KemenkeuID, SKK 3 tahun, sertifikat lama = SKK 2 tahun, ujian profesi asosiasi, cakupan izin, syarat izin B/C 1–2 tahun pengalaman) | Banyak kebingungan transisi; sumber tersebar ✅ [01 §4–§5] | Semua |
| **P1** | **Daftar cek kesiapan perangkat dan ruangan** (spesifikasi laptop, SEB 1.0.2, Zoom perangkat kedua, posisi kamera, masuk 30 menit sebelum, larangan kertas buram) + simulasi "mode ujian" layar penuh | Pelanggaran teknis = gugur ✅ [01 §5.3] | 1, 2 |
| **P1** | **Mobile-first + PWA/luring** untuk baca dan drill; mode desktop untuk tryout | Belajar di ponsel, ujian di laptop ✅ | 2 |
| **P2** | **Peta formulir interaktif** (1770, 1771 + lampiran I–VI, SPT Masa PPN, bukti potong unifikasi) yang menjelaskan isi baris — bukan simulator pengisian | Isian SPT dihapus tetapi SPT diujikan sebagai PG ✅ | 1 |
| **P2** | **Modul "Ujian Profesi"** terpisah: Kode Etik dan Standar Profesi IKPI (Kongres XII 2024), PMK 55/2026, SPM | Kode Etik keluar dari UKP; ujian profesi wajib paling lambat 31 Des 2026 ✅ | 3 |
| **P2** | **Ringkasan materi per sub-topik** (1–2 layar) dengan tautan ke pasal dan "apa yang berubah" | Pembelajar butuh referensi cepat, bukan buku; perubahan regulasi tinggi ✅ | Semua |
| **P2** | **Pelacak jalur karier** (SKK → ujian profesi → izin → PPL SKP → laporan tahunan 30 April) | PMK 55/2026 mengubah seluruh alur ✅ [02a E.2] | 3 |
| **P3** | **Komunitas/diskusi per soal** dengan moderasi; **papan peringkat tryout** | Motivasi; validasi pembahasan; sumber persona (data) | 1 |
| **P3** | **Impor hasil tryout/riwayat USKP lama** untuk peserta transisi | Nilai USKP hangus; sertifikat lama berbatas 2 tahun ✅ | Tambahan |
| **P3** | **Simulator pengisian SPT penuh** | Tidak lagi diujikan ✅ — nilai edukatif saja | 1 |

Fitur yang **sengaja tidak diprioritaskan**: soal esai dan penilaian uraian (tidak diujikan sejak Des 2024 ✅); konten Kode Etik di dalam tryout kompetensi (sudah dikeluarkan ✅); bank soal berbasis ketentuan sebelum 2025 tanpa pembaruan.

### 6.2 Urutan belajar yang direkomendasikan per tingkat **[HIPOTESIS]**

Prinsip: (1) kerangka dulu (KUP), (2) pajak yang dialami semua orang (PPh OP), (3) pajak yang "dijalankan" pemotong (Pot/Put), (4) PPN, (5) topik sempit hafalan, (6) topik kumulatif tingkat berikutnya hanya setelah skor tryout tingkat sebelumnya stabil. Bobot waktu dinyatakan sebagai persentase dari total jam belajar tingkat tersebut.

**Tingkat A (5 kelompok UKP) — target 8–12 minggu**

| Urutan | Kelompok materi | Bobot | Fokus | Keluaran yang diukur |
|---|---|---|---|---|
| 1 | KUP, PPSP, Pengadilan Pajak | 25% | Kalender pajak Coretax, sanksi (denda, bunga KMK), pemeriksaan PMK 15/2025, keberatan–banding–PK, PPSP | Dek kartu 120+ angka; tryout 40 soal ≥ 70 |
| 2 | PPh OP dan SPT PPh OP | 25% | PTKP, tarif berlapis, NPPN, UMKM PP 20/2026, kredit pajak, PPh 25, peta 1770 | Kalkulator PPh OP tanpa melihat langkah; tryout ≥ 70 |
| 3 | PPh Pot/Put | 25% | Matriks pasal–objek–tarif; TER PPh 21; 22; 23; 4(2); 26; bukti potong unifikasi | Matriks diisi dari ingatan; tryout ≥ 70 |
| 4 | PPN dan SPT Masa PPN | 15% | Saat terutang, faktur, DPP/tarif 12% × 11/12, PM tidak dapat dikreditkan, kompensasi/restitusi | Tryout ≥ 70 |
| 5 | Bea Meterai (+ PBB-P5L bila masih mengikuti peta USKP lama) | 5% | Objek, > Rp5 juta, saat terutang, pemeteraian kemudian | Tryout ≥ 75 |
| 6 | Tryout komprehensif A (2–3 kali, 3 jam) | 5% | Stamina, tempo 2–2,5 menit/soal | Total ≥ 70 dua kali berturut sebelum mendaftar |
| Paralel (opsional) | Modul Ujian Profesi (Kode Etik, PMK 55/2026) | — | Dipelajari setelah SKK atau menjelang jadwal asosiasi | — |

**Tingkat B (8 kelompok UKP = A + 3) — target 10–16 minggu**

| Urutan | Kelompok materi | Bobot | Fokus |
|---|---|---|---|
| 1 | Penyegaran A (diagnosis cepat 5 × 20 soal) | 15% | Hanya sub-topik yang skornya < 70 |
| 2 | Akuntansi Perpajakan | 25% | Jurnal memotong vs dipotong, PK/PM, beda temporer/permanen, pajak tangguhan (PSAK 212), persediaan, penyusutan, piutang |
| 3 | PPh Badan dan SPT PPh Badan | 30% | Rekonsiliasi fiskal, penyusutan/amortisasi fiskal, kompensasi rugi, 31E, kredit pajak, PPh 25 badan, hubungan istimewa, lampiran 1771 I–VI |
| 4 | Pot/Put lanjutan (Pasal 15, 26) dan PPN lanjutan (restitusi, pemungut) | 15% | Perluasan dari A |
| 5 | PBB-P5L | 5% | SPOP, NJOP/NJKP/NJOPTKP, hitung per sektor, keberatan |
| 6 | Tryout komprehensif B (3–4 kali, 3,5 jam) | 10% | Total ≥ 70 dua kali berturut |

**Tingkat C (10 kelompok UKP = B + 2) — target 12–20 minggu**

| Urutan | Kelompok materi | Bobot | Fokus |
|---|---|---|---|
| 1 | Penyegaran A+B (diagnosis 8 × 15 soal) | 15% | Sub-topik < 70 |
| 2 | Pajak Internasional | 30% | P3B (OECD/UN, hak pemajakan, beneficial owner, DGT PMK 112/2025), BUT dan time test, Pasal 24, Pasal 18 (DER 4:1, CFC), TP dan dokumentasi, MAP/APA, EoI |
| 3 | PPh Badan transaksi internasional | 25% | Laba BUT, branch profit tax 26(4), biaya kantor pusat, kredit pajak LN, PMA |
| 4 | Akuntansi Perpajakan C | 15% | Transaksi internasional/selisih kurs, lembaga keuangan, konstruksi, merger–akuisisi–likuidasi |
| 5 | Tryout komprehensif C (3–4 kali, 3,5 jam) | 15% | Total ≥ 70 dua kali berturut |

### 6.3 Keputusan desain yang mengikuti temuan

1. **Model data soal** harus memuat: tingkat yang menguji (A/B/C), kelompok materi, sub-topik kisi-kisi (kode dari [01] §3), dasar hukum + tanggal berlaku, tanggal kedaluwarsa (bila ketentuan diganti), tingkat kesulitan, dan tipe (konsep/hitung/kasus). Ini memungkinkan filter "hanya soal yang berlaku untuk UKP Oktober 2026" dan pembaruan massal saat regulasi berubah.
2. **Tryout UKP** memakai jumlah soal yang **dapat dikonfigurasi** karena jumlah resmi belum diumumkan **[BELUM TERVERIFIKASI]**; default sementara 60/80/100 dengan label "perkiraan, bukan angka resmi".
3. **Kalkulator sanksi bunga** memerlukan tabel KMK bulanan yang dapat diperbarui (terakhir KMK 47/MK/EF.2/2026 untuk Oktober 2026 ✅ [02a F#12]).
4. **Konten profesi** memakai PMK 55/2026 dan Kode Etik IKPI Kongres XII 2024; konten berbasis PMK 111/2014 jo. 175/2022 diberi label "historis".
5. **Dua jalur navigasi**: "Saya ikut UKP" (default) dan "Saya pemegang sertifikat USKP/peserta mengulang" (transisi).

---

## 7. Hal yang belum pasti dan rencana verifikasi

Semua butir berikut **[BELUM TERVERIFIKASI]** dalam sesi ini dan perlu dibuka langsung begitu akses jaringan diizinkan (minta pemilik lingkungan menambahkan domain berikut ke daftar izin: bppk.kemenkeu.go.id, klc.kemenkeu.go.id, klc2.kemenkeu.go.id, klcstatic.kemenkeu.go.id, jdih.kemenkeu.go.id, pppk.kemenkeu.go.id, news.ddtc.co.id, perpajakan.ddtc.co.id, ikpi.or.id, ortax.org, datacenter.ortax.org, myconsultant.id, sertifikasi.myconsultant.id, bimbeluskp.com, pajakku.com, muc.co.id, inatax.co.id).

| # | Yang perlu diverifikasi | Di mana | Untuk apa |
|---|---|---|---|
| 1 | Jumlah soal dan rincian durasi UKP per tingkat; aturan penalti jawaban salah | PENG-7/PP/2026 dan Pedoman Pelaksanaan Ujian di https://klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info | Konfigurasi tryout dan timer |
| 2 | Dokumen cakupan materi UKP A/B/C resmi (nama dan urutan sub-topik) | KLC (tautan di atas); DDTC 1823320, 1823232, 1823040 | Taksonomi tag soal |
| 3 | Contoh soal asli/pembahasan pihak ketiga | https://myconsultant.id/soal-uskp/… ; e-learning KLC persiapan USKP A; DDTC/Ortax; buku "Kupas Tuntas USKP" (keberadaan belum dipastikan) | Kalibrasi gaya dan kesulitan soal |
| 4 | Statistik kelulusan per mata ujian (bila ada di lampiran pengumuman hasil) | PDF PENG-7/KP3SKP/VI/2025, PENG-20/KP3SKP/X/2025, PENG-06/KP3SKP/V/2026 di bppk.kemenkeu.go.id/klc2 | Validasi peringkat kesulitan Bab 3.2 |
| 5 | Hasil USKP Periode II/2026 (dijadwalkan 4 Sep 2026) | DDTC/IKPI/BPPK | Melengkapi tabel kelulusan |
| 6 | Kurikulum, durasi, dan jadwal bimbel IKPI, DDTC Academy, TaxPrime, MyConsultant, Bimbel USKP; program brevet | Situs masing-masing | Validasi durasi persiapan Bab 4.2 dan pemetaan brevet |
| 7 | Testimoni alumni (blog, LinkedIn, Kaskus, Quora): mata ujian tersulit, lama belajar, kendala kerja | Pencarian web | Validasi Bab 3 dan persona Bab 5 |
| 8 | Tarif TER PP 58/2023 (lapisan yang dipakai contoh 2.4), NJKP/NJOPTKP PBB-P5L, PMK 131/2024 (DPP 11/12), Pasal 9(8) UU PPN, PMK 169/2015 DER, PPL SKP PMK 55/2026 | JDIH Kemenkeu, pajak.go.id | Memastikan jawaban contoh soal |
| 9 | Jadwal dan bentuk ujian profesi IKPI/AKP2I/Perkoppi/P3KPI | ikpi.or.id, DDTC | Modul Ujian Profesi |
| 10 | Syarat ijazah untuk mendaftar UKP (bukan untuk izin) | KLC "Persyaratan Pendaftaran" | Halaman Info Ujian |
| 11 | Jadwal UKP November–Desember 2026 dan 2027 | BPPK/KLC | Perencana belajar |

---

## 8. Sumber

**Dibaca langsung dalam sesi ini (lokal):**
- [01] `/home/user/uskp-learn/docs/research/01-silabus-format-ujian.md` — "Struktur Ujian Sertifikasi Konsultan Pajak (USKP) dan Uji Kompetensi Perpajakan (UKP) Tingkat A, B, C", 25 Okt 2026. Memuat 86 rujukan URL (S1–S86) dengan tanggal; semuanya berasal dari cuplikan mesin pencari, bukan halaman utuh.
- [02a] `/home/user/uskp-learn/docs/research/02a-regulasi-kup-pphop-potput.md` — "Lembar Fakta Regulasi USKP A/B/C", status 25 Okt 2026. Memuat URL per bagian; sama-sama berbasis cuplikan.

**URL kunci yang dirujuk lewat [01]/[02a] (tidak dapat dibuka hari ini; tanggal menurut [01]/[02a]):**
- PENG-7/PP/2026 BPPK, 15 Okt 2026 — https://perpajakan.ddtc.co.id/id/sumber-hukum/peraturan-pusat/pengumuman-peng-7pp2026 ; dokumen BPPK di KLC [01 S1]
- DDTC, "USKP Agustus 2025, Semua Soal Pilihan Ganda", Agu 2025 — https://news.ddtc.co.id/berita/nasional/1812725/uskp-agustus-2025-semua-soal-pilihan-ganda [01 S20]
- DDTC, "Catat! Tak Ada Soal Esai dan SPT dalam USKP Periode I/2025", Mei 2025 — https://news.ddtc.co.id/berita/nasional/1810761/catat-tak-ada-soal-esai-dan-spt-dalam-uskp-periode-i2025 [01 S21]
- DDTC, "Passing Grade Uji Kompetensi Perpajakan Tetap 60", Okt 2026 — https://news.ddtc.co.id/berita/nasional/1823024/… [01 S4]
- DDTC, "Siap-Siap! Ini Materi Uji Kompetensi Perpajakan Tingkat A, B, dan C", 2 Okt 2026 — https://news.ddtc.co.id/berita/nasional/1823040/… [01 S11]
- DDTC, "Simak! BPPK Rilis Daftar Cakupan Materi UKP Tingkat A", Okt 2026 — https://news.ddtc.co.id/berita/nasional/1823320/… [01 S8]
- DDTC, "Aturan Baru USKP, Wajib Siapkan 2 Perangkat dan Tak Ada Kertas Buram!", Okt 2026 — https://news.ddtc.co.id/berita/nasional/1822973/… [01 S57]
- DDTC, "Tidak Lulus Uji Kompetensi Perpajakan? Peserta Bisa Ikut Ujian Lagi", Okt 2026 — https://news.ddtc.co.id/berita/nasional/1823514/… [01 S7]
- DDTC, "Butuh SKK Mulai 2027, Jadwal Uji Kompetensi Masih Belum Ditetapkan", 2026 — https://news.ddtc.co.id/berita/nasional/1822793/… [01 S79]
- DDTC, "KP3SKP Umumkan Hasil USKP A April 2024, Hanya 10 Peserta yang Lulus", 2024 — https://news.ddtc.co.id/berita/nasional/1802711/… [01 S65]
- DDTC, "Pengumuman Hasil USKP A Periode II/2024: Hanya 7 Peserta yang Lulus", 2024 — https://news.ddtc.co.id/berita/nasional/1805813/… [01 S66]
- IKPI, "Tingkat Kelulusan USKP 2025 Merosot, Hanya 5% Peserta Tingkat B yang Lolos", Sep 2025 — https://ikpi.or.id/tingkat-kelulusan-uskp-2025-merosot-hanya-5-peserta-tingkat-b-yang-lolos/ [01 S68]
- IKPI, "Kelulusan USKP Periode III 2025 Meningkat Tajam di Tingkat B, Turun di Tingkat A", Okt 2025 — https://ikpi.or.id/en/kelulusan-uskp-periode-iii-2025-… [01 S69]
- DDTC, "KP3SKP Umumkan Daftar Peserta yang Lulus USKP Periode I/2025", Jun 2025 — https://news.ddtc.co.id/berita/nasional/1811418/… [01 S60]
- DDTC, "Penyelenggaraan USKP Dievaluasi, Langkah Perbaikan Disiapkan", 2024/2025 — https://news.ddtc.co.id/berita/nasional/1805999/… [01 S84]
- IKPI, "Dummy UKP Digelar 12 Oktober 2026, Peserta Diminta Siapkan Dua Perangkat", Okt 2026 — https://ikpi.or.id/articles/dummy-ukp-digelar-12-oktober-2026-… [01 S58]
- DDTC, "Ujian Profesi Konsultan Pajak Digelar setelah UKP BPPK", Okt 2026 — https://news.ddtc.co.id/berita/nasional/1823003/… [01 S30]
- MyConsultant, halaman soal per mata ujian — https://myconsultant.id/soal-uskp/pph-op/ ; …/kup-ppsp-pp/ ; …/potput/ ; …/ppn/ ; …/pbb-p5l-bm/ ; …/kode-etik-konsultan-pajak/ [01 S16–S19, S27–S28]
- Bimbel USKP, kisi-kisi USKP A — https://bimbeluskp.com/kisi-kisi-soal-uskp-a/ [01 S28]
- FAQ KP3SKP (PDF) — https://klcstatic.kemenkeu.go.id/shared/certification/uskp/documents/faq-uskp.pdf [01 S24]
- PMK 55 Tahun 2026 — https://jdih.kemenkeu.go.id/api/download/91a61950-b571-44d7-8873-7e9765a1d5ef/2026pmkeuangan055.pdf [02a E.2]
- PMK 44 Tahun 2026 — https://jdih.kemenkeu.go.id/dok/pmk-44-tahun-2026/summary [02a E.3]
- Portal resmi: https://klc.kemenkeu.go.id/sertifikasi ; https://klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info ; https://klc.kemenkeu.go.id/sertifikasi/faq ; https://bppk.kemenkeu.go.id/uskp ; https://klc2.kemenkeu.go.id/sertifikasi/uskp/ [01 §8]

**Pengetahuan latar (◐) yang dipakai tanpa sumber yang dibuka hari ini:** format USKP per mata ujian sebelum Des 2024; pola NPPN dan Pasal 25; Pasal 9(8) UU PPN; PMK 131/2024; lapisan TER PP 58/2023; NJKP/NJOPTKP PBB-P5L; Pasal 3 dan 8 UU 10/2020; Pasal 31E; struktur lampiran 1771; PSAK 212/46; PMK 169/2015; Pasal 26 ayat (4); gambaran umum program brevet. Semua wajib dicek ke teks resmi sebelum menjadi konten situs.
