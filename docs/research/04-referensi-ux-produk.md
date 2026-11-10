# Referensi UX Produk: Pola Desain Platform Persiapan Ujian dan Audit Produk USKP/UKP

Laporan riset produk/UX untuk proyek situs belajar USKP/UKP tingkat A, B, C (single-page web app, vanilla HTML/CSS/JS, pengguna mayoritas HP). Status per **25 Oktober 2026**.

> **Catatan metodologi (wajib dibaca).**
> Pada sesi riset ini (1) kuota pencarian web bersama sudah habis sebelum riset dimulai, sehingga **tidak ada satu pun kueri pencarian** yang dapat dijalankan, dan (2) kebijakan jaringan lingkungan kerja **menolak koneksi (403 pada CONNECT) ke seluruh domain vendor, edtech, dan situs pajak Indonesia** yang ditugaskan: becker.com, accounting.uworld.com, gleim.com, schweser.com, brilliant.org, khanacademy.org, quizlet.com, blog.duolingo.com, docs.ankiweb.net, zenius.net, ruangguru.com, pahamify.com, quipper.com, academy.ddtc.co.id, ortax.org, ikpi.or.id, play.google.com, apps.apple.com, serta w3.org, developer.mozilla.org, web.dev, m3.material.io, nngroup.com, dan wikipedia. Satu-satunya host yang dapat diakses adalah **github.com / raw.githubusercontent.com / api.github.com** (pencarian repositori GitHub juga ditolak karena sesi terikat ke repositori tertentu).
>
> Karena itu laporan ini memakai tiga tanda sumber:
>
> | Tanda | Arti |
> |---|---|
> | **[D]** | **Dibaca langsung** pada 25 Okt 2026 dari sumber primer yang di-host di GitHub (manual Anki, wiki FSRS, repo resmi Duolingo, Khan Academy, Moodle, W3C WCAG/ARIA APG, sumber MDN, dokumentasi Material Components, kode web-vitals, Lighthouse). URL tercantum di Bab 7. |
> | **[L]** | Diambil dari laporan `01-silabus-format-ujian.md` di repo ini (yang sendiri berbasis cuplikan mesin pencari, lihat catatan metodologinya). |
> | **[P]** | Pengetahuan peneliti tentang produk tersebut (basis pengetahuan sampai pertengahan 2026) yang **tidak dapat dicek ke situs resminya pada sesi ini**. Semua butir [P] otomatis berstatus **[BELUM TERVERIFIKASI]**; fitur, nama, dan angka dapat sudah berubah. Cek ulang ke URL resmi yang dicantumkan sebelum dikutip di luar tim. |
>
> Implikasi praktis: rekomendasi di Bab 3-5 dibangun terutama dari sumber [D] (standar aksesibilitas, algoritme SRS, pola mesin ujian Moodle, API web) dan dari format ujian yang sudah didokumentasikan di laporan 01 [L]. Benchmark produk komersial (Bab 1) berguna sebagai peta pola, bukan sebagai fakta fitur yang terverifikasi.

---

## 0. Ringkasan eksekutif

1. **Pola yang terbukti dan dapat ditiru dengan sumber terverifikasi**: (a) *active recall + spaced repetition* dengan FSRS, target retensi 90%, dua tombol jawaban cukup ("Lupa"/"Ingat") [D, manual Anki]; (b) mesin ujian ala Moodle: navigasi soal bebas vs berurutan, **tandai soal**, ringkasan sebelum kirim dengan hitungan "soal belum dijawab", konfirmasi "setelah dikirim tidak bisa diubah", **autosave berkala**, sisa waktu dan "waktu habis", pilihan kapan ulasan boleh dilihat (saat mengerjakan / segera setelah / nanti), dan dua perilaku soal: *deferred feedback* (simulasi) vs *immediate feedback* (belajar) [D, string bahasa Moodle 4.5]; (c) *exercise renderer* terpisah dari konten (Khan Academy Perseus: "take a problem ... present it, allow interaction, and grade the result") [D]; (d) model memori berbasis data (Duolingo *half-life regression*, 13 juta jejak belajar) [D].
2. **Format ujian menentukan mode simulasi** [L]: USKP 2025-2026 = 40 soal pilihan ganda 4 opsi per mata ujian, 2,5 poin/soal, lulus >= 60 (24 benar), 120 menit per mata ujian (contoh jadwal 08.00-10.00); UKP (PMK 55/2026) = satu ujian komprehensif per tingkat, 3-3,5 jam, pilihan ganda, CAT daring dengan Safe Exam Browser + AI proctoring, passing grade 60, status hanya lulus/tidak lulus, **jumlah soal resmi belum diumumkan** (simulator swasta memakai 60/75/90 atau 60/80/100, tidak resmi). Situs harus menyediakan dua mode: **drill 40 soal/mata ujian** dan **try-out komprehensif UKP** dengan jumlah soal yang bisa diatur dan diberi label "perkiraan".
3. **Celah pasar** (dari audit Bab 2): produk USKP yang ada [L][P] didominasi (a) artikel/kisi-kisi statis (DDTC News, Pajakku, MyConsultant, Bimbel USKP, Tipspajak, Inatax), (b) kelas berbayar berbasis Zoom/LMS (DDTC Academy, brevet IKPI/Ortax), (c) e-learning KLC untuk USKP A (2025). Tidak ditemukan bukti produk yang menggabungkan bank soal berpenjelasan + dasar hukum bertanggal + SRS + analitik kelemahan per kelompok materi + simulasi format UKP + kalkulator, gratis dan *mobile-first*. Risiko konten terbesar: daftar materi antar-situs saling bertentangan (Tipspajak 9 vs 10 kelompok materi C; Fungsional.id masih memasukkan Kode Etik di A) [L], jadi **versi dan tanggal silabus harus tampil di UI**.
4. **Navigasi**: HP memakai *navigation bar* bawah 3-5 tujuan (ikon + label) [D, Material]; tablet/desktop memakai *navigation rail*/sidebar; *navigation drawer* sudah dideprekasi di Material 3 Expressive dan diganti *expanded rail* [D]. Rekomendasi: 5 tujuan di HP (Beranda, Belajar, Latihan, Ulang, Lainnya), sidebar penuh >= 1024 px.
5. **Aksesibilitas yang wajib** [D, WCAG]: kontras teks 4,5:1 (teks besar 3:1), komponen UI 3:1; target sentuh minimal 24x24 CSS px (AA) dengan 44x44 sebagai target desain; *reflow* pada lebar 320 px; teks dapat diperbesar 200%; fokus terlihat; *prefers-reduced-motion* dihormati; kesalahan diidentifikasi dengan teks, bukan warna saja; pesan status lewat `role="status"`/`aria-live="polite"`. Timer ujian boleh "esensial" (pengecualian WCAG 2.2.1) tetapi harus ada **mode latihan tanpa batas waktu** sebagai alternatif.
6. **Performa** [D]: ambang Core Web Vitals di kode web-vitals: LCP <= 2.500 ms, INP <= 200 ms, CLS <= 0,1 ("baik"); poor > 4.000 ms / > 500 ms / > 0,25. Untuk HP Android menengah, muat bank soal per mata ujian secara malas (lazy JSON), `font-display: swap` atau font sistem, `content-visibility: auto` untuk daftar panjang, service worker *cache-first* untuk *app shell* + bank soal.
7. **Data lokal dulu (local-first)**: tanpa akun, simpan percobaan di IndexedDB (localStorage dapat melempar error bila cookie diblokir; kuota per-origin bersifat *best-effort* kecuali `navigator.storage.persist()`), simpan otomatis pada `visibilitychange` (lebih andal daripada `beforeunload` di HP), sediakan ekspor/impor JSON [D, MDN].
8. **Gamifikasi untuk profesional**: pakai *streak* dengan pelindung (pola "streak freeze" Duolingo [P]) dan tanpa rasa bersalah, lencana yang terikat kompetensi ("PPN: 100 soal, akurasi >= 80%"), target mingguan; **hindari** nyawa/hati, papan peringkat publik, XP yang menonjol, konfeti berlebihan.
9. **Nada bahasa**: tutor yang ramah tapi presisi; kalimat pendek, kata kerja aktif, tanpa "kamu/lo", pronomina "Anda" seperlunya, satu tanda seru maksimal per layar, selalu sebut **dasar hukum + status tanggal** pada penjelasan. Contoh microcopy lengkap di Bab 4.
10. **Anti-pola** yang harus dihindari (Bab 5): tampilan generik AI (gradien ungu, *glassmorphism*, tiga kartu fitur dengan ikon emoji, teks gradien, *hero* "Raih impianmu"), hamburger-only di HP, umpan balik hanya warna, penjelasan dikunci di balik *paywall* di tengah soal, iklan di antara soal, penalti jawaban salah pada mode belajar, regulasi tanpa tanggal, "AI tutor" yang mengarang pasal.

---

## 1. Benchmark 8-12 produk: pola yang berhasil dan yang gagal

### 1.1 Tabel benchmark

| # | Produk (kategori) | Pola yang berhasil (patut ditiru) | Pola yang gagal / risiko | Status sumber |
|---|---|---|---|---|
| 1 | **Anki** (SRS, open source) | Dua prinsip inti: *active recall testing* dan *spaced repetition*; empat tombol Again/Hard/Good/Easy dengan pintasan 1-4 dan Space/Enter = Good; **tiap tombol menampilkan kapan kartu akan muncul lagi**; boleh hanya memakai Again + Good; FSRS menggantikan SM-2 dengan *desired retention* default 90% ("the most important setting"), disarankan < 97%; batas harian "New cards/day" dan "Maximum reviews/day"; *flag*, *bury*, *suspend*, *leech*; *Easy Days* untuk hari ringan; timer internal maks 60 detik/jawaban. | Kurva belajar pengaturan sangat curam (puluhan opsi preset); UI deck generik tanpa konteks ujian; salah pakai tombol Hard merusak penjadwalan ("FSRS can adapt to almost any habit, except ... pressing Hard instead of Again when you forget"). | [D] manual Anki (`studying.md`, `deck-options.md`, `background.md`), wiki FSRS, README ts-fsrs |
| 2 | **Duolingo** (bahasa, gamifikasi) | Model memori berbasis data: *half-life regression* dilatih pada 13 juta jejak belajar (Settles & Meeder, ACL 2016) [D]; *streak* harian, *streak freeze*, target harian, notifikasi pengingat, sesi 3-5 menit [P]. | *Hearts* (nyawa) menghukum kesalahan dan mendorong beli premium; *leagues* memicu kompetisi kosong; notifikasi "pasif-agresif" menjadi meme; pola ini tidak pantas untuk profesional dewasa [P]. | HLR: [D] repo `duolingo/halflife-regression`; fitur produk: [P] **[BELUM TERVERIFIKASI]** |
| 3 | **Khan Academy** (belajar mandiri) | *Exercise renderer* terpisah (Perseus: "take a problem in the Perseus format and present it, allow interaction, and grade the result") [D]; petunjuk bertahap (*hints*), tingkat penguasaan per keterampilan (Familiar/Proficient/Mastered), *unit test* dan *course challenge* untuk naik tingkat, poin energi dan lencana yang tenang [P]. | Peta kursus terlalu dalam untuk pengguna dewasa yang hanya butuh 6-10 mata ujian; *mastery decay* membingungkan bila tidak dijelaskan [P]. | Perseus: [D]; fitur lain: [P] **[BELUM TERVERIFIKASI]** |
| 4 | **Moodle Quiz** (mesin ujian open source, pengganti rujukan "mode CBT") | String resmi menunjukkan pola lengkap mode ujian: "Quiz navigation", metode navigasi *Free* vs *Sequential*, "Flag this question"/"Remove flag", "Summary of attempt", "Questions without a response: {n}", "Submit all and finish", "Once you submit your answers, you won't be able to change them.", "Time left", "Time is up!", "Auto-save delay", "Submission grace period", metode nilai (first/last/highest/average), *shuffle answers*, "Questions per page", opsi ulasan **During the attempt / immediately after / later while open / after closed**, umpan balik *general/overall/specific*; perilaku soal **Deferred feedback**, **Immediate feedback**, **Adaptive mode (no penalties)**, **Interactive with multiple tries**, dan varian CBM (*certainty-based marking*). | UI bawaan padat dan berorientasi desktop; terlalu banyak opsi untuk pengguna akhir (ini untuk admin). | [D] `mod/quiz/lang/en/quiz.php`, `lang/en/question.php`, `question/behaviour/*` (MOODLE_405_STABLE) |
| 5 | **UWorld (Roger) CPA Review** (ujian profesi) | Bank soal dengan **penjelasan panjang per opsi** (mengapa benar dan mengapa salah) plus ilustrasi; dasbor performa per topik dibandingkan rata-rata pengguna; mode *tutor* (umpan balik langsung) vs *timed* (seperti ujian); pembuatan tes kustom dari soal yang salah/ditandai; *flashcards* otomatis dari soal; *predictive score*. | Harga tinggi; antarmuka tes meniru Prometric sehingga kaku di HP; angka prediksi kelulusan tanpa data lokal bisa menyesatkan. | [P] **[BELUM TERVERIFIKASI]** (accounting.uworld.com tidak dapat diakses) |
| 6 | **Becker CPA** (ujian profesi) | Teknologi adaptif (Adapt2U) yang memilih soal lemah; **perencana belajar** dari tanggal ujian; video pendek per keterampilan; simulasi ujian penuh; dukungan tutor; pelacakan "ready score". | Konten video panjang berat di HP; terlalu banyak modul paralel membuat dasbor penuh; *pass guarantee* dengan syarat rumit. | [P] **[BELUM TERVERIFIKASI]** (becker.com tidak dapat diakses) |
| 7 | **Gleim CPA** (ujian profesi) | SmartAdapt: alur belajar adaptif (kuis diagnostik -> materi -> kuis ulang), *exam-emulating interface*, penghitung waktu per soal, *Personal Counselor* (akuntabilitas manusia). | Antarmuka terasa lama; bergantung pada laptop; penjelasan teks padat tanpa hierarki. | [P] **[BELUM TERVERIFIKASI]** (gleim.com tidak dapat diakses) |
| 8 | **Kaplan Schweser CFA** (ujian profesi) | Paket terstruktur: SchweserNotes (ringkasan) + QBank + *Study Calendar* (otomatis dari tanggal ujian dan jam/minggu) + *Performance Tracker* + *Mock Exam*; kalender yang menyesuaikan bila tertinggal. | Terlalu banyak produk terpisah (notes, QBank, class, mock) membingungkan; aplikasi HP sekadar *wrapper*. | [P] **[BELUM TERVERIFIKASI]** (schweser.com tidak dapat diakses) |
| 9 | **Brilliant** (STEM interaktif) | "Belajar dengan mengerjakan": tiap layar satu pertanyaan kecil dengan umpan balik instan; visual interaktif; *streak* dan *daily challenge* yang tenang; progres per kursus dengan cincin. | Konten gratis sangat terbatas (*paywall* di tengah kursus); tidak ada mode ujian; gamifikasi kadang terasa untuk anak. | [P] **[BELUM TERVERIFIKASI]** (brilliant.org tidak dapat diakses) |
| 10 | **Quizlet** (kartu hafalan) | Satu set kartu -> banyak mode (Flashcards, Learn, Test, Match); *Learn* memakai pengulangan terjadwal; impor massal; pembalikan kartu dengan animasi sederhana. | Iklan dan *paywall* agresif di mode belajar; konten buatan pengguna tidak terverifikasi (berbahaya untuk pasal/tarif). | [P] **[BELUM TERVERIFIKASI]** (quizlet.com tidak dapat diakses) |
| 11 | **Zenius / Ruangguru / Pahamify / Quipper** (edtech Indonesia, K-12 dan UTBK) | Try-out berjadwal dengan pembahasan video, bank soal per bab, *rapor* kelemahan per subtes, misi harian/XP (Ruangguru), tanya-jawab (Roboguru), bahasa Indonesia komunikatif ("kamu"), *bottom nav* 4-5 tujuan, mode gelap (sebagian). | Nada bahasa remaja; notifikasi promosi; *paywall* ke paket; video sebagai pusat (berat kuota); gamifikasi berlebihan (karakter, koin). Untuk profesional pajak, pola "try-out + rapor subtes" layak ditiru, nada dan gamifikasinya tidak. | [P] **[BELUM TERVERIFIKASI]** (semua domain tidak dapat diakses) |
| 12 | **Safe Exam Browser** (konteks ujian resmi UKP) | UKP memakai SEB 1.0.2 + proctoring [L]; SEB adalah *browser kiosk* berbasis Chromium [D]. Implikasi: simulasi kita cukup meniru **pola CAT** (satu soal per layar, grid nomor, ragu-ragu, timer), bukan meniru kunci layar. | - | [D] README seb-win-refactoring; [L] laporan 01 |

### 1.2 Sintesis pola per area (apa yang dipakai di produk kita)

| Area | Pola terbaik yang ditemukan | Keputusan untuk situs USKP/UKP | Dasar |
|---|---|---|---|
| Struktur navigasi | *Nav bar* bawah 3-5 tujuan (ikon + label) di HP; *rail*/sidebar di tablet-desktop; *drawer* dideprekasi | 5 tujuan bawah di HP; sidebar penuh >= 1024 px; tidak ada hamburger sebagai satu-satunya navigasi | [D] Material |
| Dasbor progres | "Hari ini" (kartu ulang jatuh tempo + tugas planner), cincin progres per mata ujian, tren akurasi | Dasbor = 1 kartu "Lanjutkan", 1 kartu "Hari ini", cincin per mata ujian, 3 topik terlemah | [D] Anki (due today), [P] Schweser/UWorld |
| Bank soal + ulasan | Filter per mata ujian/topik/kesulitan/status (salah, ditandai, belum pernah); ulasan per soal dengan penjelasan tiap opsi | Sama; plus "Dasar hukum" dengan status tanggal dan tautan ke lembar fakta regulasi (laporan 02a/02b) | [P] UWorld; [D] Moodle *review options* |
| Simulasi ujian | Timer, navigasi bebas, tandai, ringkasan belum dijawab, konfirmasi kirim, autosave, "waktu habis" | Dua format: USKP 40 soal/120 menit per mata ujian; UKP komprehensif 3-3,5 jam dengan jumlah soal diatur (label "perkiraan") | [D] Moodle; [L] format ujian |
| Spaced repetition | FSRS, retensi 90%, 2-4 tombol dengan pratinjau interval, batas harian | FSRS via `ts-fsrs` (ESM) atau implementasi ringan; default 2 tombol "Lupa"/"Ingat" + opsional "Mudah" | [D] Anki/FSRS |
| Study planner | Kalender otomatis dari tanggal ujian + jam/minggu; *re-plan* bila tertinggal; hari ringan | Onboarding 3 langkah -> timeline mingguan per kelompok materi; tombol "Susun ulang" | [P] Schweser/Becker; [D] Anki *Easy Days* |
| Penjelasan jawaban | Mengapa benar + mengapa tiap opsi lain salah + rujukan | Struktur 4 blok: Jawaban, Penjelasan singkat, Dasar hukum (pasal + status), Jebakan umum | [P] UWorld; [D] Moodle *specific/general feedback* |
| Analitik kelemahan | Akurasi per topik vs waktu per soal; soal salah berulang | Per kelompok materi resmi (nama sesuai rilis BPPK/KP3SKP), bukan taksonomi sendiri | [L] cakupan materi |
| Gamifikasi | Streak + pelindung; lencana kompetensi; target mingguan | Ya, tenang; tanpa nyawa, tanpa papan peringkat default | [P] Duolingo/Brilliant |
| Onboarding | Pilih tingkat, tanggal ujian, target harian; bisa dilewati | Ya, tanpa akun | [P] Schweser/Becker |
| Microcopy | Pendek, spesifik, menyebut langkah berikutnya | Bab 4 | - |
| Mode gelap | Ikuti sistem + toggle manual | Ya, token warna, `color-scheme: light dark` | [D] MDN |
| Aksesibilitas | WCAG 2.2 AA | Daftar periksa Bab 3.10 | [D] W3C |

---

## 2. Audit produk USKP/pajak Indonesia yang sudah ada

Keterbatasan: tidak ada satu pun situs/aplikasi di bawah ini yang dapat dibuka pada sesi ini. Baris bertanda [L] memakai URL dan fakta dari laporan 01; baris [P] adalah pengetahuan umum peneliti dan **[BELUM TERVERIFIKASI]**. Kolom "Yang perlu dicek" adalah daftar verifikasi lapangan untuk tim sebelum klaim dipakai.

| Produk | Jenis | Fitur yang diketahui | Kelemahan yang terlihat/diduga | Yang perlu dicek langsung | Status |
|---|---|---|---|---|---|
| **DDTC Academy** (academy.ddtc.co.id) | Pelatihan berbayar, kelas persiapan USKP/UKP (daring/luring), try-out | Pengajar praktisi; materi terstruktur per mata ujian; try-out; seri artikel "daftar materi USKP" di DDTC News (Mei 2025, Juli 2026) yang ditegaskan "bukan bahan ajar resmi" [L] | Model kohort berjadwal dan berbayar; bukan aplikasi latihan mandiri; latihan interaktif (jika ada) berada di LMS tertutup [P] | Apakah ada bank soal daring dengan pembahasan, format try-out UKP, harga, platform (Zoom/LMS), dukungan HP | [L][P] **[BELUM TERVERIFIKASI]** |
| **Ortax** (ortax.org, datacenter.ortax.org) | Portal berita/regulasi + pelatihan/brevet | Basis data peraturan (datacenter.ortax.org/ortax/aturan/...) [L]; berita UKP/USKP terkini [L]; kelas brevet/USKP [P] | Fokus referensi, bukan latihan; navigasi padat untuk HP [P] | Apakah ada modul latihan soal atau simulasi; apakah pelatihan memakai LMS | [L][P] **[BELUM TERVERIFIKASI]** |
| **IKPI** (ikpi.or.id) dan cabang | Asosiasi; artikel resmi USKP/UKP; brevet/PPL di cabang | Artikel jadwal, kuota, hasil (banyak URL di laporan 01); kode etik (ikpijakbar.com) [L]; IKPI akan menyelenggarakan **ujian profesi** setelah UKP [L] | Situs informasi; e-learning IKPI (jika ada) tidak terdokumentasi dalam riset ini | Keberadaan e-learning IKPI, materi ujian profesi (kode etik) yang relevan untuk modul "Etika" | [L] **[BELUM TERVERIFIKASI untuk e-learning]** |
| **KLC - Kemenkeu Learning Center** (klc.kemenkeu.go.id) | E-learning resmi BPPK; info UKP | E-learning persiapan USKP A (2025) [L]; halaman info UKP `klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info` berisi cakupan materi resmi (belum dapat dibuka) [L] | E-learning satu tingkat saja; akses perlu akun; bukan latihan soal adaptif [P] | Isi modul e-learning, apakah ada kuis, apakah ada simulasi CAT resmi; tangkapan layar "Dummy UKP" 12 Okt 2026 [L] | [L] |
| **MyConsultant** (myconsultant.id, sertifikasi.myconsultant.id) | Situs info + "soal-uskp" per mata ujian | Halaman `/soal-uskp/pph-op/`, `/kup-ppsp-pp/`, `/potput/`, `/ppn/`, `/pbb-p5l-bm/`, `/kode-etik-konsultan-pajak/`; info jadwal, biaya, persyaratan, kota, sistem nilai [L] | Diduga berbentuk artikel/daftar soal statis, bukan aplikasi dengan progres [P] | Apakah soal interaktif, ada pembahasan, ada timer | [L][P] |
| **Bimbel USKP** (bimbeluskp.com) | Bimbel + situs info | Halaman kisi-kisi, persyaratan, biaya [L] | Situs pemasaran bimbel; latihan daring tidak terdokumentasi | Produk latihan daring, harga | [L][P] |
| **Pajakku, Inatax, Tipspajak, Fungsional.id, Taxacademy.id, Konsulpajak.com** | Artikel/konten | Rangkuman materi UKP, PMK 55/2026, panduan daftar [L] | **Saling bertentangan**: Tipspajak "9 mata ujian" C dan menaruh PBB-P5L di C; Fungsional.id masih memasukkan PBB-P5L dan Kode Etik di A, padahal BPPK menegaskan Kode Etik dikeluarkan dari UKP [L] | - | [L] |
| **Aplikasi "latihan soal USKP/brevet" di Play Store** | Aplikasi Android pihak ketiga | Tidak dapat diverifikasi (play.google.com diblokir). Pola umum aplikasi "latihan soal" Indonesia: bank soal statis, iklan interstisial, tanpa pembahasan atau dasar hukum, tanpa pembaruan regulasi [P] | Risiko konten kedaluwarsa (PPN 12%, Coretax, PMK 55/2026) | Nama aplikasi, pengembang, rating, jumlah unduhan, tanggal pembaruan, apakah ada pembahasan | **[BELUM TERVERIFIKASI]** |
| **Simulator UKP swasta** | Situs try-out | Memakai 60/75/90 atau 60/80/100 soal per tingkat; angka itu **bukan resmi** [L] | Mengklaim format yang belum diumumkan BPPK | Nama situs, apakah memberi label "perkiraan" | [L] |

### 2.1 Kesimpulan audit: celah yang bisa diisi

| # | Celah | Bukti | Peluang produk kita |
|---|---|---|---|
| 1 | Tidak ada produk gratis, *mobile-first*, tanpa akun, yang menggabungkan belajar + latihan + simulasi + SRS + kalkulator | Semua produk di atas adalah artikel, kelas berbayar, atau e-learning satu tingkat [L][P] | SPA lokal-dulu yang bisa dipakai 10 menit di KRL |
| 2 | Pembahasan soal dengan **dasar hukum bertanggal** jarang/tidak ada | Artikel kisi-kisi tanpa soal berpenjelasan [L]; aplikasi Play Store diduga tanpa pembahasan [P] | Setiap soal punya blok "Dasar hukum" + "status per <tanggal>" + tautan lembar fakta (laporan 02a/02b) |
| 3 | Silabus antar-situs tidak konsisten | Konflik Tipspajak/Fungsional vs BPPK/DDTC [L] | Tampilkan "Versi silabus: rilis BPPK Okt 2026" dan log perubahan di UI |
| 4 | Format UKP baru (komprehensif, 3-3,5 jam) belum punya simulator yang jujur | Jumlah soal belum resmi; simulator swasta mengarang [L] | Simulasi UKP dengan jumlah soal yang **bisa diatur** dan label "perkiraan, menunggu pengumuman BPPK" |
| 5 | Tidak ada analitik kelemahan per **kelompok materi resmi** | Try-out bimbel umumnya hanya memberi skor total [P] | Peta panas akurasi per kelompok materi BPPK |
| 6 | Tidak ada SRS untuk hafalan tarif/batas waktu/sanksi | Tidak ada produk pajak dengan SRS yang ditemukan [P] | Kartu otomatis dari soal yang salah; FSRS |
| 7 | Kalkulator pajak terpisah dari soal | Kalkulator ada di situs lain (Pajakku dll.) tetapi tidak terhubung ke latihan [P] | Kalkulator "di dalam" soal hitungan (PPh 21, PPh OP, PPh Badan, PPN, PBB, bunga sanksi) |
| 8 | Tingkat kelulusan rendah (USKP II/2025: A 20,86%, B 5,43%) menunjukkan kebutuhan latihan terstruktur | [L] tabel statistik laporan 01 | Planner dari tanggal ujian + target harian realistis |

---

## 3. Rekomendasi IA dan UI konkret (SPA vanilla HTML/CSS/JS)

### 3.1 Prinsip desain produk

1. **Satu tugas per layar di HP.** Soal, kartu, kalkulator, dan ringkasan masing-masing satu layar; tidak ada panel ganda di bawah 840 px.
2. **Local-first, tanpa akun.** Semua data di perangkat; ekspor/impor JSON; akun opsional di masa depan.
3. **Dua mode yang jelas**: *Belajar* (umpan balik langsung, tanpa timer, boleh lihat pembahasan) dan *Simulasi* (umpan balik ditunda, timer, tandai ragu, ringkasan sebelum kirim). Ini memetakan langsung ke perilaku Moodle "Immediate feedback" vs "Deferred feedback" [D].
4. **Setiap angka pajak punya dasar hukum dan tanggal.** Komponen `<cite-hukum>` wajib pada penjelasan dan kalkulator.
5. **Aksesibel sejak awal**: HTML semantik dulu, ARIA secukupnya, hormati preferensi sistem (tema, gerak, kontras).
6. **Ringan**: tanpa framework, tanpa font ikon; SVG inline; data per mata ujian dimuat saat dibutuhkan.

### 3.2 Peta informasi (IA) dan rute

Routing berbasis `location.hash` (tanpa server), satu `index.html`.

| Rute | Nama di UI | Isi utama | Prioritas |
|---|---|---|---|
| `#/` | Beranda | Kartu "Lanjutkan" (sesi terakhir), kartu "Hari ini" (kartu ulang jatuh tempo + tugas planner), cincin progres per mata ujian tingkat terpilih, 3 topik terlemah, hitung mundur ke tanggal ujian | MVP |
| `#/belajar` -> `#/belajar/:tingkat/:mataUjian/:topik` | Belajar | Peta materi per tingkat -> mata ujian/kelompok materi -> topik; tiap topik: ringkasan 1 layar, contoh hitung, 3-5 soal cek pemahaman | MVP |
| `#/latihan` | Latihan | Tab **Bank soal** (filter: tingkat, mata ujian, topik, kesulitan, status: belum pernah/salah/ditandai) dan tab **Simulasi** | MVP |
| `#/simulasi/baru` -> `#/simulasi/:attemptId` | Simulasi | Pra-ujian (pilih format USKP per mata ujian 40 soal/120 menit atau UKP komprehensif; pengaturan jumlah soal, penalti, acak), layar ujian, ringkasan, hasil | MVP |
| `#/hasil/:attemptId` | Hasil | Skor 0-100, lulus/tidak (>= 60), rincian per kelompok materi, waktu per soal, ulasan dengan filter (semua/salah/ragu/benar) | MVP |
| `#/ulang` | Ulang (SRS) | Kartu jatuh tempo hari ini, tombol Lupa/Ingat(/Mudah), pratinjau interval, batas harian | MVP |
| `#/kalkulator` -> `#/kalkulator/:jenis` | Kalkulator | PPh 21 bulanan/TER, PPh OP tahunan, PPh Badan (22%, 31E), PPN 12% dan DPP nilai lain, PBB, bunga sanksi per bulan, bea meterai; semua dengan blok dasar hukum | Fase 2 |
| `#/rencana` | Rencana | Tanggal ujian, jam/minggu, hari libur -> timeline mingguan per kelompok materi; centang tugas; "Susun ulang" | Fase 2 |
| `#/statistik` | Statistik | Peta panas akurasi per kelompok materi, tren 7/30 hari, soal salah berulang, perkiraan kesiapan (dengan disclaimer) | Fase 2 |
| `#/pengaturan` | Pengaturan | Tema (sistem/terang/gelap), ukuran teks, kurangi gerak, tingkat aktif, ekspor/impor/hapus data, versi silabus dan log perubahan, lapor soal | MVP |
| `#/soal/:id` | Soal (tautan dalam) | Satu soal dengan pembahasan (untuk dibagikan/dibookmark) | Fase 2 |

### 3.3 Navigasi: HP vs desktop

**Dasar [D]**: Material menyatakan *navigation bar* "can have three to five destinations", diposisikan di bawah layar, tiap tujuan ikon + label; *navigation rail* untuk "tablet and desktop screens"; *navigation drawer* "is being deprecated in the Material 3 expressive update" dan diganti *expanded navigation rail*; *standard drawer* "aren't suitable for mobile devices due to limited screen size".

| Lebar viewport | Pola | Rincian |
|---|---|---|
| < 600 px (HP) | **Nav bar bawah, 5 tujuan**: Beranda, Belajar, Latihan, Ulang, Lainnya | Tinggi 56-64 px + `env(safe-area-inset-bottom)`; ikon 24 px + label 12 px selalu tampil; *badge* angka kecil pada "Ulang" (kartu jatuh tempo). "Lainnya" membuka lembar bawah (bottom sheet, `<dialog>`) berisi Kalkulator, Rencana, Statistik, Pengaturan. **Saat mode simulasi aktif, nav bar disembunyikan** dan diganti bar ujian (timer, nomor soal, tombol "Daftar soal"). |
| 600-1023 px (tablet/HP lanskap) | **Rail kiri 80 px** (ikon + label pendek), konten satu kolom | Semua 9 tujuan muat di rail; rail dapat diperluas |
| >= 1024 px (laptop) | **Sidebar 240-280 px** dengan grup: Belajar (Beranda, Belajar, Latihan, Ulang), Alat (Kalkulator, Rencana, Statistik), Pengaturan | Konten maks 760 px untuk teks soal (panjang baris 60-75 karakter); panel kanan opsional untuk daftar nomor soal saat simulasi |

Aturan tambahan:
- Posisi item navigasi **konsisten** di semua layar (WCAG 3.2.3 Consistent Navigation [D]).
- Tanpa hamburger sebagai satu-satunya akses ke fitur inti di HP.
- Tautan "Lewati ke konten" sebagai elemen fokus pertama (Lighthouse audit `bypass` [D]).
- `aria-current="page"` pada tujuan aktif; label teks selalu ada (audit `button-name`/`label` berbobot 4,1% di skor aksesibilitas Lighthouse [D]).

### 3.4 Struktur halaman inti (wireframe teks)

**Beranda (HP, dari atas):**
1. Header: sapaan singkat + chip tingkat aktif ("UKP B") yang bisa diganti + hitung mundur ("38 hari ke UKP Periode 12").
2. Kartu "Lanjutkan": "PPN - Faktur pajak - soal 7 dari 15" + tombol primer.
3. Kartu "Hari ini": "12 kartu ulang - 20 soal PPh Badan (rencana) - 1 simulasi minggu ini". Tiap baris tombol.
4. Grid cincin progres per mata ujian (2 kolom di HP, 3-4 di desktop): persentase topik tuntas + akurasi 30 hari.
5. "Perlu perhatian": 3 kelompok materi dengan akurasi terendah (min. 10 soal) + tombol "Latih 10 soal".
6. Catatan versi: "Silabus: rilis BPPK Okt 2026 - Regulasi diperbarui 25 Okt 2026" (tautan ke log).

**Belajar (topik):** judul + breadcrumb (tingkat > mata ujian > topik); *chip* "Diuji di: A, B, C"; ringkasan maks 5 poin; contoh hitung dalam kartu kalkulator mini; blok dasar hukum; 3-5 soal cek pemahaman dengan umpan balik langsung; tombol "Tandai tuntas" (otomatis bila 4/5 benar) dan "Topik berikutnya".

**Latihan - Bank soal:** bar filter (chip yang bisa digulir horizontal di HP; sidebar filter di desktop); hitungan "128 soal cocok"; tombol "Mulai 10 soal" (jumlah bisa diubah 5/10/20/40); daftar soal hanya di desktop.

**Latihan - layar soal (mode belajar):** lihat komponen *question card* (3.5.3). Setelah "Periksa", muncul panel umpan balik di bawah opsi (bukan modal), tombol "Lanjut" menjadi primer, pintasan Enter.

**Simulasi - pra-ujian:** pilih format; ringkasan aturan dalam 4 baris (jumlah soal, durasi, penalti, navigasi bebas); peringatan "Simpan otomatis aktif; jika layar tertutup, waktu tetap berjalan"; tombol "Mulai". Checkbox "Jaga layar tetap menyala" (Screen Wake Lock, tampilkan statusnya dan cara mematikan, sesuai saran MDN [D]).

**Simulasi - layar ujian:** bar atas: nomor soal "7/40", timer `role="timer"`, tombol "Daftar soal"; isi: teks soal, opsi A-D radio; bar bawah: "Sebelumnya", toggle "Ragu-ragu", "Berikutnya"; lembar "Daftar soal": grid 8 kolom dengan status warna + ikon/pola (belum dijawab = kosong, dijawab = terisi, ragu = ikon bendera) dan legenda teks; tombol "Selesai" di akhir grid.

**Simulasi - ringkasan sebelum kirim** (pola Moodle "Summary of attempt" [D]): tabel status per nomor; kalimat "Belum dijawab: 3 soal - Ragu-ragu: 5 soal"; tombol "Kembali ke soal" dan "Kirim dan selesai"; dialog konfirmasi "Setelah dikirim, jawaban tidak bisa diubah."

**Hasil:** angka besar skor 0-100 + status "Lulus (>= 60)" / "Belum lulus"; pembanding "Butuh 24 jawaban benar dari 40"; per kelompok materi (bar horizontal dengan angka); waktu rata-rata per soal vs anggaran (3 menit untuk USKP); tombol "Ulas semua", "Ulas yang salah (9)", "Ulas yang ragu (5)", "Tambahkan 9 soal salah ke kartu ulang".

**Ulang (SRS):** jumlah jatuh tempo + baru; kartu depan (pertanyaan singkat: "Batas waktu penyetoran PPh Pasal 21 masa?"); tombol "Lihat jawaban" (Space); kartu belakang + dasar hukum; tombol "Lupa" / "Ingat" / "Mudah" dengan pratinjau interval ("10 mnt", "3 hari", "9 hari") seperti Anki [D]; progres sesi.

### 3.5 Spesifikasi komponen

#### 3.5.1 Kartu modul (mata ujian / topik)

- Struktur: `<article class="card card--module">` berisi `<h3>` judul, baris meta ("12 topik - 240 soal - diuji di A, B, C"), cincin progres kecil (40 px) di kanan, baris status ("Akurasi 30 hari: 68%"), satu tombol aksi ("Lanjutkan"/"Mulai").
- Seluruh kartu dapat diklik hanya lewat tautan/tombol di dalamnya (hindari `onclick` pada `div`); perluas area klik dengan pseudo-element `::after` pada tautan utama.
- Ukuran: lebar penuh di HP dengan margin 16 px; grid `minmax(260px, 1fr)` di desktop.
- Status visual: belum mulai (ikon lingkaran kosong), berjalan (cincin), tuntas (centang) - selalu disertai teks.

#### 3.5.2 Progress ring (cincin progres)

```html
<figure class="ring" role="img" aria-label="PPN: 65% topik tuntas">
  <svg viewBox="0 0 36 36" width="56" height="56" aria-hidden="true">
    <circle class="ring__track" cx="18" cy="18" r="15.9155" fill="none" stroke-width="3"/>
    <circle class="ring__fill"  cx="18" cy="18" r="15.9155" fill="none" stroke-width="3"
            stroke-dasharray="65 100" stroke-linecap="round" transform="rotate(-90 18 18)"/>
  </svg>
  <figcaption class="ring__label">65%</figcaption>
</figure>
```
- `r = 100 / (2*pi) = 15.9155` sehingga `stroke-dasharray="<persen> 100"` langsung memakai persentase.
- Angka selalu ditulis di dalam/di samping cincin (jangan hanya warna).
- Semantik: untuk **progres tugas** gunakan `role="progressbar"` dengan `aria-valuenow/min/max` atau `<progress>`; `role="meter"` hanya untuk nilai dalam rentang (mis. akurasi), karena APG menyatakan "To communicate progress, use the progressbar role instead" [D]. `<progress>` membutuhkan label aksesibel; teks di antara tag bukan label [D].
- Animasi isi 400 ms `stroke-dasharray` hanya bila `prefers-reduced-motion: no-preference`.

#### 3.5.3 Question card (kartu soal)

```html
<form class="q" data-id="ppn-0142" novalidate>
  <header class="q__head">
    <span class="q__num">Soal 7 <span class="muted">dari 15</span></span>
    <span class="chip">PPN - Faktur pajak</span>
    <button type="button" class="q__flag" aria-pressed="false">Ragu-ragu</button>
  </header>
  <fieldset class="q__body">
    <legend class="q__stem">PT A (PKP) menyerahkan BKP pada 3 Maret 2026 dan baru membuat faktur pajak pada 20 April 2026. Perlakuan yang tepat adalah...</legend>
    <label class="opt"><input type="radio" name="q-ppn-0142" value="A"><span class="opt__key">A</span><span class="opt__text">...</span></label>
    <label class="opt"><input type="radio" name="q-ppn-0142" value="B"> ...</label>
    <label class="opt"><input type="radio" name="q-ppn-0142" value="C"> ...</label>
    <label class="opt"><input type="radio" name="q-ppn-0142" value="D"> ...</label>
  </fieldset>
  <footer class="q__actions">
    <button type="button" class="btn">Sebelumnya</button>
    <button type="submit" class="btn btn--primary">Periksa jawaban</button>
  </footer>
  <section class="q__feedback" role="status" hidden></section>
</form>
```
- `fieldset` + `legend` + radio dengan `name` yang sama membentuk grup radio asli [D, MDN]; keyboard mengikuti pola APG: Tab masuk/keluar grup, panah memindahkan dan memilih, Space memilih [D].
- Opsi: tinggi minimal 48 px, padding 12-16 px, seluruh baris adalah `<label>` (target >= 24x24 wajib, 44x44 sebagai target desain [D, WCAG 2.5.8 dan 2.5.5]).
- Huruf kunci (A-D) sebagai pintasan keyboard di desktop; tampilkan `<kbd>` kecil.
- Mode simulasi: tombol "Periksa jawaban" diganti "Berikutnya"; jawaban tersimpan saat radio berubah (autosave, pola Moodle "Auto-save delay" [D]).
- Teks soal panjang (kasus): batasi lebar 70 karakter, ukuran 16-17 px di HP, 17-18 px desktop, `line-height` 1,55.
- Tabel angka dalam soal: `overflow-x: auto` dalam pembungkus `role="region" aria-label="Tabel data soal" tabindex="0"` agar tidak merusak *reflow* 320 px [D, WCAG 1.4.10].

#### 3.5.4 Flashcard flip (kartu balik)

- Markup: `<button class="fc" aria-expanded="false">` membungkus dua sisi; sisi belakang `hidden` sampai dibuka (jangan hanya `transform`, karena konten tersembunyi visual tetap terbaca pembaca layar dan dapat difokus; prinsip "everything other than the currently visible screen must be truly invisible" dari daftar periksa aksesibilitas seluler MDN [D]).
- Animasi: `rotateY(180deg)` 350 ms dengan `backface-visibility: hidden`; di bawah `prefers-reduced-motion: reduce` ganti dengan *crossfade* 120 ms atau tanpa animasi [D, WCAG 2.3.3].
- Pintasan: Space/Enter membalik; 1/2/3 untuk Lupa/Ingat/Mudah (meniru Anki 1-4, Space = Good [D]).
- Tombol penilaian hanya muncul setelah kartu dibalik; tiap tombol menampilkan interval berikutnya.
- Isi belakang: jawaban satu kalimat + "Dasar hukum" + tautan "Lihat soal asal".

#### 3.5.5 Form kalkulator

- Satu kolom; input numerik `inputmode="decimal"` (bukan `type="number"`, agar pemisah ribuan lokal bisa ditampilkan), format tampilan dengan `Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })` [D, MDN].
- Tiap input punya `<label>` terlihat + teks bantuan ("Penghasilan bruto setahun, sebelum pengurang").
- Hasil dihitung langsung (tanpa tombol) dan diumumkan di `role="status"` dengan *debounce* 300 ms; rincian langkah dalam `<details>` ("Lihat langkah hitung").
- Blok "Dasar hukum dan asumsi" wajib di bawah hasil, dengan tanggal status dan tautan ke lembar fakta regulasi; jika angka bertanda ◐/[BELUM TERVERIFIKASI] di laporan 02a/02b, tampilkan peringatan kuning.
- Tombol "Pakai di soal ini" saat kalkulator dibuka dari soal hitungan (tidak mengisi jawaban, hanya membantu).
- Validasi: pesan kesalahan dalam teks di bawah field + `aria-describedby`, bukan hanya garis merah (WCAG 3.3.1 [D]).

#### 3.5.6 Timeline planner

- Input: tanggal ujian (atau pilih periode), jam belajar/minggu, hari libur, tingkat.
- Keluaran: daftar minggu (bukan kalender grid di HP) -> tiap minggu 3-6 tugas: "Belajar: PPh Badan - Rekonsiliasi fiskal (40 mnt)", "Latihan: 20 soal PPh Badan", "Ulang kartu (10 mnt/hari)", "Simulasi: USKP PPh Badan 40 soal (minggu 6, 10, 12)".
- Bobot alokasi: proporsional ke jumlah topik per kelompok materi, dikali faktor kelemahan (akurasi rendah -> lebih banyak), dengan 2 minggu terakhir khusus simulasi + ulasan.
- Status: centang; progres minggu dalam bar; bila tertinggal > 20%, tampilkan kartu "Susun ulang rencana" (bukan otomatis diubah).
- Hari ringan: izinkan menandai hari tertentu "ringan" (konsep *Easy Days* Anki [D]).
- Komponen visual: garis vertikal dengan titik per minggu (`<ol>` dengan `::before`), minggu sekarang ditandai; semua informasi juga dalam teks.

### 3.6 Mode simulasi: rincian perilaku

| Aspek | Keputusan | Dasar |
|---|---|---|
| Format | (1) USKP per mata ujian: 40 soal, 120 menit, 4 opsi, 2,5 poin/soal, lulus >= 60; (2) UKP komprehensif per tingkat: 3-3,5 jam, jumlah soal default 80 dengan slider 40-120 dan label "perkiraan, jumlah resmi belum diumumkan BPPK"; (3) Kustom. | [L] laporan 01 |
| Penalti | Default **tidak ada**; opsi "Kurangi 0,5 per jawaban salah (laporan DDTC untuk tingkat B, Agu 2025; belum pasti berlaku 2026)". | [L] (bertentangan antar sumber) |
| Navigasi | Bebas (grid nomor); opsi "Berurutan" untuk latihan disiplin. | [D] Moodle Free/Sequential |
| Tandai ragu | Toggle per soal `aria-pressed`; di grid ditandai ikon + warna; filter ulasan "ragu". Istilah "Ragu-ragu" dipakai karena lazim di CAT Indonesia [P]; UI CAT UKP yang sebenarnya **[BELUM TERVERIFIKASI]** (periksa tangkapan layar "Dummy UKP" 12 Okt 2026). | [D] Moodle flag; [P] |
| Timer | `role="timer"` (implisit `aria-live="off"` [D]); pengumuman `role="status"` pada 50%, 10 menit, 5 menit, 1 menit; warna + teks berubah pada 5 menit. Hitung berdasarkan *timestamp* mulai (bukan `setInterval` akumulatif) karena timer di tab latar belakang dibatasi [D, MDN Page Visibility]. Saat `visibilitychange` -> `hidden`: simpan state; saat kembali: hitung ulang sisa waktu; jika habis saat di latar belakang, kirim otomatis dengan pemberitahuan. | [D] MDN |
| Waktu habis | Kirim otomatis; layar "Waktu habis" lalu hasil (Moodle "Time is up!") | [D] |
| Autosave | Tiap perubahan jawaban + tiap 15 detik + pada `visibilitychange`; `beforeunload` hanya sebagai cadangan karena "not reliably fired, especially on mobile platforms" [D]. | [D] MDN |
| Ringkasan sebelum kirim | Tabel status + "Belum dijawab: n" + konfirmasi "Setelah dikirim, jawaban tidak bisa diubah." | [D] Moodle |
| Ulasan | Setelah kirim: semua soal, jawaban Anda vs kunci, pembahasan 4 blok, filter; tidak ada pembahasan **selama** simulasi (pola *review options* Moodle "During the attempt" dimatikan) | [D] |
| Layar tetap menyala | Opsional via Screen Wake Lock; tampilkan indikator dan tombol matikan; lepaskan saat selesai | [D] MDN |
| Alternatif tanpa timer | "Latihan 40 soal tanpa batas waktu" selalu tersedia (pengecualian "esensial" WCAG 2.2.1 untuk ujian terpenuhi dengan menyediakan mode alternatif; teks WCAG memberi contoh bahwa memperpanjang waktu ujian untuk satu orang "would be unfair", jadi simulasi boleh ketat) | [D] WCAG 2.2.1 |
| Keluar di tengah | Dialog modal `<dialog>.showModal()` (konten lain otomatis *inert* [D]) dengan dua tombol: "Lanjutkan ujian" (fokus awal) dan "Simpan dan keluar"; percobaan tersimpan sebagai "Berjalan" (Moodle "In progress"/"Overdue") dan bisa dilanjutkan dari Beranda | [D] MDN/Moodle |

### 3.7 Pola umpan balik jawaban

**Mode belajar (umpan balik langsung):**
1. Pengguna memilih opsi -> tombol "Periksa jawaban" aktif (jangan menilai saat klik opsi pertama; pengguna HP sering salah sentuh).
2. Setelah "Periksa": opsi terpilih diberi ikon + teks "Jawaban Anda", kunci diberi ikon centang + teks "Kunci"; warna hanya penguat.
3. Panel umpan balik (`role="status"`, muncul di bawah opsi, tidak menggeser soal ke atas) dengan 4 blok:
   - **Status + 1 kalimat inti**: "Kurang tepat. Faktur dibuat lewat 3 bulan dari saat seharusnya dianggap tidak membuat faktur."
   - **Penjelasan** (3-6 kalimat, ada langkah hitung bila soal hitungan).
   - **Dasar hukum**: pasal + nama peraturan + "status per 25 Okt 2026" + tautan ke lembar fakta.
   - **Mengapa opsi lain keliru** (`<details>`), dan **Jebakan umum** satu kalimat.
4. Aksi: "Lanjut" (primer, Enter), "Tambah ke kartu ulang" (otomatis bila salah, bisa dibatalkan), "Laporkan soal".
5. Soal salah masuk antrean "Ulang nanti" di sesi yang sama (pola *interactive with multiple tries* Moodle, tanpa penalti [D]) - ditampilkan lagi di akhir sesi.

**Mode simulasi (umpan balik ditunda):** tidak ada indikasi benar/salah sampai kirim; hanya "Tersimpan" kecil (Moodle "Answer saved" [D]) di dekat nomor soal.

**Mode cek pemahaman di halaman Belajar:** sama dengan mode belajar, tetapi 3-5 soal dan tanpa skor; akhir: "4 dari 5 benar - topik ditandai tuntas. Ulangi 1 soal yang keliru?"

### 3.8 Spaced repetition: implementasi

- Algoritme: **FSRS** (tiga variabel: *difficulty*, *stability*, *retrievability*; berjalan sepenuhnya lokal [D]). Pilihan implementasi: (a) `ts-fsrs` (ESM, API `DefaultScheduler()`, `preview()` untuk menampilkan interval tiap tombol sebelum dijawab, `review({card, grade})` [D]) dibundel sebagai satu file ESM; atau (b) implementasi FSRS ringan sendiri bila ingin nol dependensi. Hindari SM-2 kecuali untuk prototipe (FSRS "more accurately determining how much information you are likely to forget" [D]).
- Parameter: *desired retention* 0,90 default; opsi 0,85/0,90/0,95 di Pengaturan dengan keterangan beban ("semakin tinggi, semakin banyak ulangan per hari"; Anki menyarankan < 97% [D]).
- Tombol: default dua tombol **Lupa / Ingat** (Anki: "you can also use only Again and Good buttons" [D]); mode lanjutan 4 tombol (Lupa/Sulit/Ingat/Mudah) dengan peringatan "Pilih Lupa, bukan Sulit, jika tidak ingat" [D].
- Batas harian: kartu baru 10/hari (bisa 5-30), ulangan maks 150/hari; tampilkan "Hari ini: 12 ulangan - 5 baru".
- Sumber kartu: (1) kartu kurasi per topik (tarif, batas waktu, sanksi, definisi); (2) otomatis dari soal yang salah ("Soal -> kartu" dengan pertanyaan diringkas); (3) buatan pengguna (fase 2).
- Pratinjau interval di tombol ("Lupa: 10 mnt - Ingat: 3 hari - Mudah: 8 hari") sesuai praktik Anki [D].
- Jangan menumpuk: bila kartu jatuh tempo > 100, tampilkan opsi "Sebar ke 3 hari" (menghindari rasa tenggelam; pola *Easy Days* [D]).

### 3.9 Analitik kelemahan per topik

- Satuan analisis = **kelompok materi resmi** per tingkat (nama sesuai rilis BPPK Okt 2026 untuk UKP, lampiran KP3SKP untuk USKP) [L]; sub-topik di bawahnya.
- Metrik per kelompok: jumlah soal dikerjakan, akurasi (semua waktu dan 30 hari), waktu rata-rata/soal, soal salah >= 2 kali, kartu ulang tertunggak.
- Tampilan: bar horizontal terurut dari terlemah, label angka di ujung, warna sebagai penguat (3 tingkat: < 60%, 60-79%, >= 80%) dengan ikon berbeda.
- "Perkiraan kesiapan" = rata-rata tertimbang akurasi 30 hari per kelompok dikali bobot soal; tampilkan dengan kalimat jujur: "Perkiraan kasar dari latihan Anda, bukan prediksi kelulusan". Jangan meniru klaim skor prediktif komersial tanpa data validasi [P].
- Sampel minimum: tidak menampilkan akurasi bila < 10 soal ("Kerjakan 10 soal lagi untuk melihat akurasi").

### 3.10 Gamifikasi yang pantas untuk profesional

| Elemen | Pakai? | Bentuk |
|---|---|---|
| Streak harian | Ya | "Hari belajar beruntun: 6". Dihitung bila >= 1 aktivitas bermakna (10 kartu, 5 soal, 1 topik). **Pelindung streak** 1x/minggu otomatis. Putus streak: pesan netral tanpa rasa bersalah (Bab 4). |
| Target mingguan | Ya | Diturunkan dari planner; cincin progres mingguan di Beranda. |
| Lencana | Ya, sedikit | Terikat kompetensi dan terukur: "KUP 100 soal", "Akurasi PPN >= 80% (min. 50 soal)", "Simulasi pertama tuntas", "7 hari beruntun". Tanpa lencana sepele. |
| XP/poin | Tidak menonjol | Boleh ada di belakang layar untuk level; tidak di nav/beranda. |
| Papan peringkat | Tidak (default) | Mungkin opsional *opt-in* anonim di masa depan. |
| Nyawa/hati | Tidak | Menghukum kesalahan bertentangan dengan tujuan belajar. |
| Perayaan | Ringan | Satu ilustrasi/ikon + kalimat; konfeti hanya pada "Lulus simulasi" dan dimatikan oleh *reduced motion*. |

### 3.11 Onboarding

- Tiga layar maksimal, semua bisa dilewati, tanpa akun: (1) Pilih tingkat (A/B/C) dengan satu kalimat cakupan izin tiap tingkat [L]; (2) Tanggal ujian atau "belum tahu" (lalu pilih periode UKP terdekat dari kalender di laporan 01); (3) Target harian (10/20/30 menit) -> tampilkan rencana ringkas.
- Setelah itu langsung ke "Mulai 5 soal diagnostik" (opsional) untuk mengisi analitik awal.
- Simpan preferensi di `localStorage` (bungkus try/catch; dapat melempar `SecurityError` bila penyimpanan diblokir [D]).

### 3.12 State kosong (empty states)

| Layar | Pesan + aksi |
|---|---|
| Beranda pertama kali | "Belum ada aktivitas. Mulai dari 5 soal diagnostik, atau buka peta materi." [Mulai diagnostik] [Lihat materi] |
| Ulang: tidak ada kartu jatuh tempo | "Semua kartu sudah diulang hari ini. Kartu berikutnya jatuh tempo besok (14 kartu)." [Pelajari 5 kartu baru] |
| Statistik: data kurang | "Statistik muncul setelah 10 soal per kelompok materi. Saat ini: 4 soal." [Latih 10 soal KUP] |
| Hasil: tidak ada soal salah | "Semua benar. Coba simulasi dengan waktu lebih ketat atau kelompok materi lain." |
| Filter bank soal kosong | "Tidak ada soal untuk kombinasi ini. Coba hapus filter 'Sulit' atau pilih topik lain." [Hapus filter] |
| Offline + data belum di-cache | "Sedang offline. Materi yang sudah pernah dibuka tetap tersedia; bank soal PPh Badan belum diunduh." [Coba lagi] |
| Planner belum diatur | "Masukkan tanggal ujian untuk mendapat rencana mingguan. Belum punya? Pilih periode terdekat." |

### 3.13 Daftar periksa aksesibilitas (WCAG 2.2 AA, sumber [D])

| Kriteria | Aturan praktis untuk situs ini |
|---|---|
| 1.4.3 Kontras teks | Teks normal >= 4,5:1, teks besar (>= 18 pt atau 14 pt tebal) >= 3:1; nilai tidak dibulatkan (4,499 gagal). Uji token tema terang dan gelap. |
| 1.4.11 Kontras non-teks | Batas opsi, ikon status, cincin progres, fokus: >= 3:1 terhadap latar. |
| 1.4.4 Ukuran teks | Semua teks dapat diperbesar 200% tanpa kehilangan fungsi; pakai `rem`, jangan kunci tinggi kontainer. |
| 1.4.10 Reflow | Tidak ada gulir horizontal pada lebar 320 px kecuali tabel data (bungkus dengan region yang bisa difokus). |
| 2.1.1 Keyboard | Semua fitur bisa dioperasikan dengan keyboard; pintasan: A-D pilih opsi, Enter periksa/lanjut, F tandai ragu, Space balik kartu, 1-3 nilai kartu, `?` daftar pintasan. Pintasan huruf tunggal hanya aktif di luar input dan bisa dimatikan. |
| 2.4.7 Fokus terlihat | `:focus-visible` dengan outline 2 px + offset 2 px, kontras >= 3:1; jangan `outline: none`. |
| 2.2.1 Timing | Simulasi: timer esensial (jelaskan di pra-ujian); mode belajar: tanpa timer; timer pribadi opsional bisa diperpanjang. |
| 2.3.3 Animasi dari interaksi | Semua transisi dibungkus `@media (prefers-reduced-motion: no-preference)`; toggle manual "Kurangi gerak" di Pengaturan. |
| 2.5.8 Target size | Minimal 24x24 CSS px dengan jarak; target desain 44-48 px untuk opsi jawaban, tombol nav, grid nomor soal. |
| 3.2.3 Navigasi konsisten | Urutan item nav sama di semua halaman. |
| 3.3.1 Identifikasi kesalahan | Kesalahan input kalkulator dan status jawaban selalu dalam teks. |
| 4.1.3 Pesan status | Umpan balik jawaban, "Tersimpan", hasil kalkulator: `role="status"` (polite). `aria-live="assertive"` hanya untuk "Waktu habis". Buat wadah live region sejak awal lalu isi (MDN: "Establish the live region before updating its content"). |
| Dialog | `<dialog>.showModal()`: fokus pindah ke dalam, Tab terkurung, Esc menutup (APG). Konfirmasi kirim ujian tidak boleh ditutup dengan klik luar (`closedby="none"`). |
| Alert | Jangan pindahkan fokus; jangan menghilang otomatis untuk pesan penting (APG Alert). Toast "Tersimpan" boleh hilang karena informasinya tetap terlihat di status soal. |
| Tab | Tab materi/filter mengikuti pola APG Tabs (aktivasi manual dengan Enter/Space lebih aman untuk konten berat). |
| Bahasa | `<html lang="id">`; singkatan diberi `<abbr title>` pertama kali (PKP, BKP, DPP). |

### 3.14 Performa dan teknis

| Topik | Rekomendasi | Dasar |
|---|---|---|
| Anggaran | HTML + CSS + JS *app shell* <= 120 KB (gzip); tiap paket bank soal per mata ujian <= 200 KB JSON, dimuat saat dibutuhkan; tanpa gambar raster di jalur kritis | target LCP <= 2.500 ms, INP <= 200 ms, CLS <= 0,1 [D] web-vitals |
| Font | Font sistem (`system-ui`) atau satu font variabel lokal dengan `font-display: swap`; cadangkan ukuran agar CLS kecil | [D] MDN |
| Rendering | `content-visibility: auto` + `contain-intrinsic-size` untuk daftar ulasan 40-100 soal; konten tetap di pohon aksesibilitas | [D] MDN |
| Transisi | View Transition API untuk pindah layar SPA (`document.startViewTransition`) dengan *fallback* tanpa animasi; hormati *reduced motion* | [D] MDN |
| Offline | Service worker *cache-first* untuk shell + bank soal yang pernah dibuka; manifest PWA; tombol "Unduh untuk offline" per mata ujian | [D] MDN |
| Penyimpanan | Percobaan, jawaban, log SRS di **IndexedDB**; preferensi kecil di `localStorage` (try/catch); minta `navigator.storage.persist()` setelah pengguna punya >= 1 percobaan (data *best-effort* bisa dihapus); ekspor/impor JSON | [D] MDN |
| Timer | Berdasarkan `Date.now()` sejak mulai; `visibilitychange` untuk simpan/hitung ulang; `requestAnimationFrame` tidak jalan di tab latar | [D] MDN |
| Skrip | ES modules, tanpa bundler wajib; kode per rute dimuat dengan `import()` dinamis; `defer` | - |
| Pengukuran | Sertakan `web-vitals` (~3 KB brotli) hanya saat `?debug` atau di lingkungan staging | [D] |
| Tema | `color-scheme: light dark` di `:root`, token CSS, `@media (prefers-color-scheme: dark)` + atribut `data-theme` untuk pilihan manual; `<meta name="theme-color" media="(prefers-color-scheme: dark)">` | [D] MDN |

Potongan tema dan gerak:

```css
:root { color-scheme: light dark;
  --bg:#ffffff; --fg:#1b1f24; --muted:#5b6570; --primary:#0f5c9a; --ok:#1b7f3b; --warn:#9a6700; --err:#b4232c; --card:#f6f8fa; --line:#d0d7de; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg:#0f1419; --fg:#e6edf3; --muted:#9aa4af; --primary:#6cb4ee; --ok:#57c07a; --warn:#e3b341; --err:#ff7b72; --card:#161b22; --line:#30363d; } }
:root[data-theme="dark"] { /* salin blok gelap */ }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; scroll-behavior:auto !important; } }
```

Catatan: pasangan warna di atas adalah titik awal; **ukur kontrasnya** (teks normal >= 4,5:1) sebelum dipakai, terutama `--warn` pada latar terang.

---

## 4. Panduan nada bahasa komunikatif dan contoh microcopy

### 4.1 Prinsip

1. **Tutor yang ramah, bukan teman nongkrong.** Pengguna adalah staf pajak, akuntan, lulusan baru 22-45 tahun yang mengejar izin praktik. Nada: hangat, lugas, percaya diri, tidak menggurui.
2. **Pronomina**: hindari "kamu/lo/gue". Utamakan kalimat tanpa pronomina ("Lanjutkan ke soal berikutnya"); bila perlu, pakai "Anda" (huruf kapital). Tidak memakai "Kak"/"Sob".
3. **Satu kalimat, satu maksud.** Maks 12-15 kata per kalimat di tombol/status; penjelasan boleh lebih panjang tetapi berparagraf pendek.
4. **Spesifik > pujian.** "Benar. Pasal 9 ayat (2a) UU KUP" lebih berguna daripada "Hebat!". Pujian singkat boleh, tetapi informasi selalu ikut.
5. **Tanda seru maksimal satu per layar**; tidak ada huruf kapital semua; emoji tidak dipakai di UI inti.
6. **Kesalahan dibingkai sebagai informasi**: "Kurang tepat" / "Belum tepat", bukan "Salah!" apalagi "Gagal".
7. **Selalu sebut langkah berikutnya** pada pesan status dan state kosong.
8. **Waktu dan angka dalam format Indonesia**: "25 Okt 2026", "Rp4.800.000", "12%", "3 menit 20 detik".
9. **Istilah resmi dipertahankan** (PKP, DPP, SPT Masa) dengan `<abbr>`; hindari slang pajak yang tidak baku.
10. **Jujur soal ketidakpastian**: "jumlah soal resmi belum diumumkan", "status per 25 Okt 2026".

### 4.2 Contoh microcopy

| Konteks | Contoh (Bahasa Indonesia) | Catatan |
|---|---|---|
| Sambutan pertama kali | "Selamat datang. Pilih tingkat yang akan diuji, lalu kita susun rencana belajarnya." | Tombol: "Pilih tingkat" |
| Sambutan kembali (pagi) | "Selamat pagi. Hari ini: 12 kartu ulang dan 20 soal PPh Badan. Sekitar 25 menit." | Angka dari data nyata |
| Sambutan kembali (lama tidak buka) | "Senang Anda kembali. Terakhir belajar 9 hari lalu. Mulai yang ringan: 10 kartu ulang?" | Tanpa rasa bersalah |
| Jawaban benar (hitungan) | "Benar. DPP Rp100 juta x 12% x 11/12 = PPN Rp11 juta (PMK 131/2024)." | Rumus selalu ditampilkan; cek angka ke lembar fakta |
| Jawaban benar (konsep) | "Benar. Keberatan diajukan paling lama 3 bulan sejak SKP dikirim, Pasal 25 ayat (3) UU KUP." | - |
| Jawaban benar tetapi lambat | "Benar, tapi memakan 5 menit 10 detik. Anggaran di ujian sekitar 3 menit per soal. Lihat jalan pintas hitungnya?" | Hanya di mode belajar |
| Jawaban kurang tepat | "Kurang tepat. Jawaban Anda B; kunci D. Faktur yang terlambat lebih dari 3 bulan dianggap tidak dibuat, sehingga PM tidak dapat dikreditkan." | Jawaban + kunci + alasan |
| Kurang tepat, pola berulang | "Ini kali ketiga soal tentang saat terutang PPN keliru. Baca ringkasannya 2 menit, lalu coba 5 soal serupa?" | Tombol: "Baca ringkasan", "Nanti" |
| Tandai ragu | "Ditandai ragu-ragu. Soal ini muncul di daftar 'Ragu' sebelum Anda mengirim." | Status, bukan modal |
| Streak hari ke-1 | "Hari belajar pertama tercatat. Satu sesi singkat setiap hari lebih efektif daripada satu sesi panjang seminggu sekali." | - |
| Streak 7 hari | "7 hari beruntun. Konsistensi seperti ini yang membedakan peserta yang lulus." | Tanpa konfeti |
| Streak terputus | "Rangkaian 12 hari berhenti kemarin. Tidak masalah; kemajuan Anda tetap tersimpan. Mulai lagi dengan 10 kartu." | Jangan memarahi |
| Pelindung streak terpakai | "Kemarin terlewat, pelindung streak dipakai otomatis. Tersedia lagi Senin depan." | - |
| Pengingat (notifikasi, opsional) | "20 menit untuk PPh Pot/Put hari ini? 14 kartu menunggu." | Maks 1/hari, jam dipilih pengguna |
| Pengingat H-7 ujian | "7 hari lagi UKP tingkat B. Rencana minggu ini: 2 simulasi dan ulasan soal salah. Materi baru sebaiknya dihentikan." | - |
| Pra-simulasi | "Simulasi USKP PPh Badan: 40 soal, 120 menit, tanpa pembahasan sampai selesai. Jawaban tersimpan otomatis." | Tombol: "Mulai", "Atur" |
| Timer 5 menit | "Sisa 5 menit. 3 soal belum dijawab." | `role="status"` |
| Konfirmasi kirim | "Kirim 40 jawaban? Belum dijawab: 3. Ragu-ragu: 5. Setelah dikirim, jawaban tidak bisa diubah." | Tombol: "Kembali ke soal", "Kirim" |
| Waktu habis | "Waktu habis. Jawaban yang tersimpan telah dikirim." | `aria-live="assertive"` |
| Hasil: lulus | "Nilai 72,5 - memenuhi batas 60. Terkuat: PPh Pasal 23 (9/10). Perlu dirapikan: Pasal 26 (4/10)." | Angka 2,5/soal |
| Hasil: hampir | "Nilai 57,5 - kurang 1 soal dari batas 60. Lima soal salah ada di satu topik: PPh Pasal 4 ayat (2). Latih topik itu dulu." | Spesifik dan menenangkan |
| Hasil: jauh | "Nilai 35. Ini titik awal, bukan vonis. Rencana 4 minggu: fokus KUP dan PPh OP, simulasi ulang minggu ke-3." | Tombol: "Buat rencana" |
| Hasil UKP (jumlah soal perkiraan) | "Skor 68 dari skala 100 (80 soal, format perkiraan; jumlah soal resmi UKP belum diumumkan BPPK)." | Jujur |
| Kartu SRS - Lupa | "Dicatat. Kartu ini muncul lagi dalam 10 menit." | - |
| Kartu SRS - selesai | "Ulangan hari ini selesai: 24 kartu, 83% diingat. Berikutnya besok: 15 kartu." | - |
| State kosong Statistik | "Statistik tampil setelah 10 soal per kelompok materi. KUP: 4 soal lagi." | - |
| Kalkulator - peringatan angka | "Tarif ini berstatus 'perlu verifikasi' pada 25 Okt 2026. Cocokkan dengan teks PMK sebelum dipakai di pekerjaan." | Warna kuning + ikon + teks |
| Kesalahan penyimpanan | "Penyimpanan browser tidak tersedia (mode privat?). Latihan tetap bisa dilanjutkan, tetapi progres tidak akan tersimpan." | Jangan menghentikan |
| Offline | "Sedang offline. Materi yang pernah dibuka tetap tersedia." | - |
| Versi silabus | "Silabus mengikuti rilis cakupan materi BPPK, Oktober 2026. Kode etik diujikan di ujian profesi asosiasi, bukan UKP." | Tautan ke laporan 01 |
| Lapor soal | "Terima kasih. Laporan tersimpan dan akan ditinjau. Soal tetap bisa dikerjakan." | - |

### 4.3 Kata yang dipakai dan dihindari

| Pakai | Hindari |
|---|---|
| Benar / Kurang tepat / Belum tepat | Salah! / Gagal / Yah... |
| Lanjutkan, Periksa jawaban, Kirim, Ulas | Gas!, Cus, Yuk gaskeun, Submit |
| Anda (seperlunya), tanpa pronomina | Kamu, Lo, Kak, Sob, Guys |
| Kartu ulang, Rangkaian hari belajar, Lencana | Streak (boleh dalam kurung sekali), XP, Nyawa, Level up |
| Dasar hukum, Status per <tanggal> | "Menurut aturan terbaru" tanpa nomor |
| Perkiraan, belum diumumkan | Dijamin lulus, Pasti keluar |

---

## 5. Anti-pola yang harus dihindari

### 5.1 Tampilan "generik AI"

1. Gradien ungu-biru pada hero, teks gradien, latar *glassmorphism*/blur di mana-mana.
2. Beranda pemasaran dengan tiga kartu fitur berikon emoji dan judul "Belajar Lebih Cerdas", padahal ini aplikasi yang dipakai tiap hari; beranda harus **dasbor**, bukan *landing page*.
3. Semua elemen berradius 24 px, bayangan besar, jarak longgar berlebihan sehingga satu soal tidak muat satu layar HP.
4. Ilustrasi stok 3D orang memegang laptop; ikon dari set yang tidak konsisten.
5. Nama fitur bombastis ("Smart AI Tutor Pro"), *copy* motivasi kosong ("Raih impianmu menjadi konsultan pajak hebat!").
6. Tipografi *display* tebal untuk badan teks; pakai satu keluarga font, dua bobot.
7. Dark mode yang hanya membalik warna (teks putih murni #fff di atas hitam murni #000, kontras silau) alih-alih token yang dirancang.

### 5.2 Anti-pola interaksi dan konten

8. Hamburger sebagai satu-satunya navigasi di HP; nav bawah lebih dari 5 item; item nav tanpa label.
9. Umpan balik benar/salah hanya dengan warna hijau/merah (gagal WCAG 1.4.1 dan 3.3.1).
10. Menilai jawaban begitu opsi disentuh (salah sentuh di HP tidak bisa dibatalkan).
11. Pembahasan terkunci (*paywall*) atau iklan interstisial di tengah sesi soal.
12. Penalti nilai negatif di mode belajar; nyawa/hati; papan peringkat dengan nama asli.
13. Streak yang memaksa (notifikasi berkali-kali, nada menyalahkan).
14. Timer tanpa peringatan bertahap; timer yang berhenti saat tab tidak aktif (tidak jujur) atau yang hilang datanya saat layar terkunci.
15. Modal bertumpuk, pop-up "Beri rating aplikasi", konfeti pada setiap jawaban benar.
16. Konten regulasi tanpa nomor pasal dan tanpa tanggal status; mencampur aturan lama (PPN 11%, USKP berjenjang wajib) dengan aturan baru tanpa penanda.
17. Mengklaim jumlah soal/format UKP yang belum resmi seolah pasti (cermati simulator swasta [L]).
18. "AI tutor" generatif yang menjawab pertanyaan pasal tanpa sumber; jika dipakai kelak, batasi ke penjelasan yang sudah dikurasi dan tampilkan sumber.
19. Taksonomi topik buatan sendiri yang tidak selaras dengan kelompok materi resmi (menyulitkan pemetaan kelemahan ke silabus).
20. Onboarding panjang dan wajib akun sebelum melihat satu soal pun.
21. Tabel angka lebar yang memaksa gulir horizontal seluruh halaman di 320 px.
22. Ikon saja tanpa teks pada status soal di grid nomor (belum dijawab/dijawab/ragu) - buta warna tidak terbantu.
23. Video sebagai satu-satunya bentuk materi (berat kuota, tidak bisa dicari).
24. Menyimpan progres hanya di `localStorage` tanpa ekspor; pengguna kehilangan semuanya saat ganti HP.

---

## 6. Urutan implementasi yang disarankan

| Fase | Lingkup | Catatan |
|---|---|---|
| **MVP (4-6 minggu)** | Shell SPA + nav (HP/desktop) + tema; Beranda; Belajar (peta materi + topik dengan cek pemahaman); Bank soal mode belajar dengan pembahasan 4 blok; Simulasi USKP 40 soal/120 menit dengan tandai ragu, ringkasan, hasil, ulasan; Ulang (FSRS, 2 tombol); Pengaturan + ekspor/impor; PWA dasar | Konten: minimal 2 mata ujian tingkat A penuh dulu |
| **Fase 2** | Simulasi UKP komprehensif (jumlah soal diatur); Statistik per kelompok materi; Planner; Kalkulator 5 jenis terhubung ke soal; kartu otomatis dari soal salah; pintasan keyboard lengkap | Sesuaikan setelah BPPK mengumumkan jumlah soal UKP |
| **Fase 3** | Akun opsional + sinkronisasi; lencana; modul "Etika profesi" untuk ujian profesi asosiasi; laporan soal terkelola; pengujian aksesibilitas dengan pembaca layar (TalkBack, NVDA) | - |

---

## 7. Daftar sumber

Semua sumber [D] diakses **25 Oktober 2026** melalui `raw.githubusercontent.com` (satu-satunya host yang diizinkan). Tanggal dokumen adalah tanggal versi di cabang yang disebut.

### 7.1 Sumber yang dibaca langsung [D]

| Kode | Sumber | URL |
|---|---|---|
| D1 | Manual Anki, "Studying" (tombol jawaban, pintasan, flag/bury/suspend) - cabang `main` | https://raw.githubusercontent.com/ankitects/anki-manual/main/src/studying.md (versi tayang: https://docs.ankiweb.net/studying.html) |
| D2 | Manual Anki, "Deck Options" (batas harian, learning steps, FSRS, desired retention 90%, < 97%, Easy Days, timer) | https://raw.githubusercontent.com/ankitects/anki-manual/main/src/deck-options.md |
| D3 | Manual Anki, "Background" (active recall, spaced repetition) | https://raw.githubusercontent.com/ankitects/anki-manual/main/src/background.md |
| D4 | Wiki fsrs4anki: "The Optimal Retention", "Compare Anki's built-in scheduler and FSRS" (klon `fsrs4anki.wiki.git`) | https://github.com/open-spaced-repetition/fsrs4anki/wiki (halaman ABC-of-FSRS telah pindah ke https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) |
| D5 | README `free-spaced-repetition-scheduler` (difficulty/stability/retrievability, berjalan lokal, daftar implementasi) | https://raw.githubusercontent.com/open-spaced-repetition/free-spaced-repetition-scheduler/main/README.md |
| D6 | README `ts-fsrs` (DefaultScheduler, preview, review, FSRS-7) | https://raw.githubusercontent.com/open-spaced-repetition/ts-fsrs/main/README.md |
| D7 | Duolingo, repo resmi `halflife-regression` (Settles & Meeder, ACL 2016; 13 juta jejak belajar) | https://raw.githubusercontent.com/duolingo/halflife-regression/master/README.md |
| D8 | Khan Academy, README Perseus (exercise renderer) dan khan-exercises (status arsip) | https://raw.githubusercontent.com/Khan/perseus/main/README.md ; https://raw.githubusercontent.com/Khan/khan-exercises/master/README.md |
| D9 | Moodle 4.5, string bahasa modul Quiz (navigasi, ringkasan, konfirmasi, timer, autosave, review options, grading) | https://raw.githubusercontent.com/moodle/moodle/MOODLE_405_STABLE/mod/quiz/lang/en/quiz.php |
| D10 | Moodle 4.5, string bahasa Question (flag, answer saved, feedback) dan nama perilaku soal (deferred/immediate/adaptive/interactive/CBM) | https://raw.githubusercontent.com/moodle/moodle/MOODLE_405_STABLE/lang/en/question.php ; https://raw.githubusercontent.com/moodle/moodle/MOODLE_405_STABLE/question/behaviour/{deferredfeedback,immediatefeedback,adaptive,interactive,adaptivenopenalty,immediatecbm,deferredcbm}/lang/en/qbehaviour_*.php |
| D11 | W3C WCAG (repo `w3c/wcag`, cabang `main`), dokumen Understanding: 1.4.3 Contrast (Minimum), 1.4.11 Non-text Contrast, 1.4.4 Resize Text, 1.4.10 Reflow, 2.1.1 Keyboard, 2.2.1 Timing Adjustable, 2.3.3 Animation from Interactions, 2.4.7 Focus Visible, 2.5.5 Target Size (Enhanced), 2.5.8 Target Size (Minimum), 3.2.3 Consistent Navigation, 3.3.1 Error Identification, 4.1.3 Status Messages | https://raw.githubusercontent.com/w3c/wcag/main/understanding/20/contrast-minimum.html ; .../21/non-text-contrast.html ; .../20/resize-text.html ; .../21/reflow.html ; .../20/keyboard.html ; .../20/timing-adjustable.html ; .../21/animation-from-interactions.html ; .../20/focus-visible.html ; .../21/target-size-enhanced.html ; .../22/target-size-minimum.html ; .../20/consistent-navigation.html ; .../20/error-identification.html ; .../21/status-messages.html (versi tayang: https://www.w3.org/WAI/WCAG22/Understanding/) |
| D12 | W3C ARIA Authoring Practices Guide: Radio Group, Tabs, Dialog (Modal), Meter, Alert | https://raw.githubusercontent.com/w3c/aria-practices/main/content/patterns/{radio/radio-group-pattern,tabs/tabs-pattern,dialog-modal/dialog-modal-pattern,meter/meter-pattern,alert/alert-pattern}.html |
| D13 | CSS Media Queries Level 5 (sumber spesifikasi, `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`) | https://raw.githubusercontent.com/w3c/csswg-drafts/main/mediaqueries-5/Overview.bs |
| D14 | MDN (sumber `mdn/content`, cabang `main`): prefers-reduced-motion, prefers-color-scheme, color-scheme, theme-color, font-display, content-visibility, Page Visibility API, Storage quotas and eviction criteria, Window.localStorage, beforeunload, `<dialog>`, `inert`, ARIA live regions, Popover API, View Transition API, Screen Wake Lock API, Service Worker API, Offline and background operation, `<input type="radio">`, `<progress>`, Intl.NumberFormat, Mobile accessibility checklist | https://raw.githubusercontent.com/mdn/content/main/files/en-us/web/... (mis. `css/reference/at-rules/@media/prefers-reduced-motion/index.md`, `api/page_visibility_api/index.md`, `api/storage_api/storage_quotas_and_eviction_criteria/index.md`, `html/reference/elements/dialog/index.md`, `accessibility/guides/live_regions/index.md`, `accessibility/guides/mobile_accessibility_checklist/index.md`) |
| D15 | Material Components Android docs: Navigation bar (3-5 tujuan), Navigation rail (tablet/desktop, expanded rail), Navigation drawer (deprecated) | https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/{BottomNavigation,NavigationRail,NavigationDrawer}.md |
| D16 | Google `web-vitals` (ambang LCP/INP/CLS di kode sumber; README) | https://raw.githubusercontent.com/GoogleChrome/web-vitals/main/src/{onLCP,onINP,onCLS}.ts ; .../README.md |
| D17 | Lighthouse `docs/scoring.md` (bobot audit aksesibilitas) | https://raw.githubusercontent.com/GoogleChrome/lighthouse/main/docs/scoring.md |
| D18 | Safe Exam Browser for Windows, README | https://raw.githubusercontent.com/SafeExamBrowser/seb-win-refactoring/master/README.md |
| D19 | AnkiDroid README (fitur: night mode, progress widget, sync) | https://raw.githubusercontent.com/ankidroid/Anki-Android/main/README.md |

### 7.2 Sumber dari laporan internal [L]

- `/home/user/uskp-learn/docs/research/01-silabus-format-ujian.md` (format USKP/UKP, kelompok materi, statistik kelulusan, daftar URL DDTC/IKPI/Ortax/Pajakku/MyConsultant/Bimbel USKP/Tipspajak/Fungsional/Inatax/KLC, catatan simulator swasta).
- `/home/user/uskp-learn/docs/research/02a-regulasi-kup-pphop-potput.md` dan `02b-regulasi-badan-ppn-pbb-intl.md` (tag verifikasi angka untuk kalkulator dan penjelasan).

### 7.3 URL resmi yang HARUS diverifikasi (tidak dapat dibuka pada sesi ini) [P]

| Produk | URL untuk verifikasi |
|---|---|
| Becker CPA | https://www.becker.com/cpa-review |
| UWorld CPA | https://accounting.uworld.com/cpa-review/ |
| Gleim CPA | https://www.gleim.com/cpa-review/ |
| Kaplan Schweser CFA | https://www.schweser.com/cfa |
| Brilliant | https://brilliant.org |
| Khan Academy | https://www.khanacademy.org |
| Duolingo blog (streak) | https://blog.duolingo.com |
| Quizlet | https://quizlet.com |
| Zenius / Ruangguru / Pahamify / Quipper | https://www.zenius.net ; https://www.ruangguru.com ; https://pahamify.com ; https://www.quipper.com/id/ |
| DDTC Academy | https://academy.ddtc.co.id |
| Ortax | https://ortax.org ; https://datacenter.ortax.org |
| IKPI | https://ikpi.or.id |
| KLC info UKP | https://klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info |
| Play Store (kueri "USKP", "brevet pajak", "latihan soal pajak") | https://play.google.com/store/search?q=uskp&c=apps&hl=id |
| Material 3 (navigation bar/rail) | https://m3.material.io/components/navigation-bar/overview ; https://m3.material.io/components/navigation-rail/overview |

---

## 8. Hal yang belum pasti / perlu verifikasi langsung

1. **Semua klaim fitur produk komersial** di Bab 1 baris 5-11 (Becker, UWorld, Gleim, Schweser, Brilliant, Quizlet, Zenius, Ruangguru, Pahamify, Quipper) dan fitur produk Duolingo/Khan Academy selain yang ada di repo resminya **[BELUM TERVERIFIKASI]**.
2. **Audit produk USKP Indonesia** (DDTC Academy, Ortax, IKPI e-learning, aplikasi Play Store, bimbel) hanya berdasar URL dari laporan 01 dan pengetahuan umum; fitur aktual, harga, dan dukungan HP **[BELUM TERVERIFIKASI]**. Tidak ada nama aplikasi Play Store yang dapat disebut.
3. **UI CAT resmi UKP** (apakah memakai istilah "ragu-ragu", bentuk grid nomor, perilaku timer) **[BELUM TERVERIFIKASI]**; sumber terbaik adalah tangkapan layar/pengalaman peserta "Dummy UKP" 12 Oktober 2026 dan UKP perdana 26-29 Oktober 2026 [L].
4. **Jumlah soal resmi UKP per tingkat** dan rincian durasi 3 vs 3,5 jam belum diumumkan [L]; simulasi harus berlabel "perkiraan".
5. **Aturan penalti jawaban salah** USKP 2026 (DDTC: B dikurangi 0,5; MyConsultant: salah = 0) saling bertentangan [L]; default simulasi tanpa penalti dengan opsi.
6. **Angka-angka regulasi** dalam contoh microcopy (PPN 12% dengan DPP 11/12 per PMK 131/2024, batas keberatan 3 bulan, faktur terlambat 3 bulan) ditulis sebagai ilustrasi nada; cocokkan dengan laporan 02a/02b dan teks peraturan sebelum dipakai di konten.
7. **Breakpoint** 600/1024 px dan anggaran ukuran berkas adalah rekomendasi peneliti, bukan standar yang dikutip.
8. **Pasangan warna token** di Bab 3.14 belum diuji kontrasnya; wajib diukur (>= 4,5:1 teks, >= 3:1 komponen) sebelum dipakai.
9. Klaim bahwa FSRS "lebih akurat" dari SM-2 dikutip dari manual Anki [D]; angka benchmark kuantitatif tidak dibaca pada sesi ini (halaman benchmark wiki kosong karena dipindahkan).
10. Efektivitas *streak* dan gamifikasi untuk profesional dewasa tidak didukung sumber yang dibaca pada sesi ini; rekomendasi "tenang dan tanpa hukuman" adalah pertimbangan desain, bukan hasil studi yang dikutip.
