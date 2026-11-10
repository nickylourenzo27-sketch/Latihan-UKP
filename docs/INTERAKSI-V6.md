# INTERAKSI-V6 — Audit interaksi nyata dan usulan "profesional namun interaktif"

Status: 29 Oktober 2026 · basis kode v5.3 · penulis: agen audit-interaksi (putaran desain 4)
Pasangan dokumen: `docs/DESAIN-V6.md` (spek visual, token, komponen). Bila nama kelas di sini berbeda dengan DESAIN-V6, **ikuti DESAIN-V6** dan pertahankan perilaku yang dijelaskan di sini.

Dokumen ini untuk agen implementasi (impl-css, impl-belajar, impl-alat). Setiap temuan memuat: apa yang teramati di peramban, bukti tangkapan layar, lokasi `berkas › fungsi`, usulan yang bisa langsung dikerjakan, dan agen pemilik berkas.

---

## 0. Ringkasan eksekutif

**Fondasinya sudah kuat.** Fokus pindah ke judul setelah navigasi. Setelah Periksa, fokus jatuh ke kalimat inti. Tombol Lanjut selalu terlihat setelah Periksa (11 dari 11 sampel yang dicatat per ukuran layar). Kartu berputar 3D dan ikut reduced-motion. Stempel HADIR beranimasi. Dialog Kirim simulasi memilih opsi aman. Autosave CAT menampilkan "Tersimpan hh.mm.ss". Pencarian bisa dipakai penuh dengan papan ketik. Galat kalkulator spesifik per isian. Centang Rencana memperbarui progres saat itu juga. Tidak ada galat konsol. Tidak ada luapan horizontal di 390 px maupun 1366 px.

**Yang membuatnya belum terasa hidup:** umpan balik sering terjadi *di luar layar* atau *tidak terjadi sama sekali* pada saat-saat yang paling bermakna bagi pelajar. Momen itu adalah selesai sesi, mengubah angka kalkulator, menuntaskan cek pemahaman, dan membaca hasil simulasi.

Tiga P1:

1. **KL-1** — Kalkulator menghitung ulang 250 ms setelah setiap ketikan, tetapi hasilnya berada di y = 1.866 px (HP) / 1.516 px (desktop 900 px). Pengguna tidak pernah melihat angka berubah saat mengetik.
2. **HI-1** — Setelah sesi tercatat, kartu "Sesi hari ini" di Hari Ini sama persis dengan sebelum sesi ("Mulai sesi · 12 mnt"). Tidak ada status HADIR, sehingga rangkaian tidak terasa dan pengguna ragu apakah harus mengulang.
3. **TT-1** — Tutor tanpa `sample`: chip, kotak tanya, dan Kirim tetap aktif. Setiap klik menambahkan pesan sistem yang sama berlabel **"Tutor · dihasilkan AI"**, padahal pesan itu teks sistem. Pertanyaan pengguna tidak muncul.

Ada 26 temuan P2 dan 36 temuan P3 (rekap di §2). Di §5 ada **10 momen interaktif** yang paling bernilai untuk pelajar ujian, masing-masing sudah lengkap dengan perilaku, gerak, aksesibilitas, dan lokasi implementasi.

---

## 1. Metode

- **Alat:** Playwright 1.63 + Chromium headless. Aplikasi dibuka dari `file:///home/user/uskp-learn/index.html` dengan localStorage bersih (pengguna baru). Data dibentuk hanya oleh alur yang dijalani, tanpa data contoh suntikan.
- **Ukuran layar:** HP 390 × 844 (sentuh) dan desktop 1366 × 900, tema terang. Pengukuran latensi memakai CPU diperlambat 4× (meniru ponsel kelas menengah).
- **Alur yang dijalani penuh di kedua ukuran:**
  1. Onboarding 5 layar → diagnosis 15 soal → Bukti Sesi.
  2. Hari Ini → sesi Standar 12 penuh (Angka → 4 kartu → Ringkas → 8 soal) → Bukti.
  3. Belajar → kelompok A1 → topik A1.2 → cek pemahaman 5 soal.
  4. Latih dengan filter laporan Tingkat B, 5 soal (selang-seling salah) sampai selesai.
  5. Ulang 5 kartu (klik dan papan ketik).
  6. Studi kasus K-A1-01 6 langkah: salah dulu di langkah 1, buka kalkulator, kembali, lalu sampai selesai.
  7. Simulasi USKP 40: 38 dijawab, 2 kosong, 2 ragu → Kirim → hasil → ulas.
  8. Kalkulator `kurs` dan `gmt`: ubah isian, Tebak dulu, isian salah.
  9. Rencana: centang tugas.
  10. Kemajuan: kelima tab.
  11. Peta formulir → formulir → baris.
  12. Lembar angka A1 → Jadikan kartu.
  13. Referensi: cari dan tab.
  14. Info ujian.
  15. Pengaturan (tema gelap).
  16. Pencarian dengan `/`, panah, Enter, Ctrl+K, dan kueri tanpa hasil.
  17. Tutor tanpa sample dari topbar: chip lalu kirim teks.
- **Yang dicatat per langkah:** jumlah tindakan, elemen terfokus (dan apakah terlihat), posisi tombol aksi, posisi hasil relatif terhadap viewport, teks aria-live, toast, animasi yang aktif, dan latensi.
- **Skrip:** `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/audit-interaksi/audit.js` (alur) dan `ukur.js` (latensi dan pemeriksaan khusus). Log JSON: `log-hp.json` dan `log-desktop.json` di folder yang sama.
- **Tangkapan layar (215 berkas):** `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/review/desain4/interaksi/` dengan pola `hp-NN-<langkah>.png` dan `desktop-NN-<langkah>.png`. Akhiran `-penuh` berarti tangkapan seluruh halaman.

### 1.1 Angka kunci

**Tindakan per alur (klik/tombol).** Durasi di sini adalah kecepatan mesin, bukan manusia. Yang relevan adalah jumlah tindakannya.

| Alur | HP | Desktop | Catatan |
|---|---|---|---|
| Onboarding + diagnosis 15 soal | 53 | 53 | 3 tindakan per soal (pilih → Periksa → Lanjut) |
| Sesi Standar 12 (14 blok) | 36 | 36 | Angka 1, kartu 2/kartu, ringkas 1, soal 3/soal |
| Belajar → topik → cek 5 soal | 19 | 19 | cek berada di dasar halaman |
| Latih 5 soal (+2 ulang) | 25 | 25 | penyebut berubah 5 → 7 |
| Ulang 5 kartu | 11 | 11 | balik + nilai |
| Studi kasus 6 langkah + kalkulator | 12 | 12 | pulang-pergi kalkulator 2 klik, plus gulir panjang |
| Simulasi 40 → kirim → ulas | 86 | 85 | ±2 tindakan/soal |

**Panjang halaman dan posisi elemen penting.**

| Pengukuran | HP 390 | Desktop 1366 |
|---|---|---|
| Hari Ini (tinggi halaman) | 2.203 px | 1.911 px |
| Topik A1.2 / posisi "Cek pemahaman" | 3.705 / 3.436 px | 2.560 / 2.339 px |
| Kalkulator kurs: tinggi form / posisi hasil | 1.518 / 1.866 px | 1.234 / 1.516 px |
| Kalkulator gmt: tinggi form / posisi hasil | 1.317 / 1.879 px | 1.032 / 1.395 px |
| Ulang: posisi atas kartu pertama | 537 px (dari 844) | 368 px |
| Rencana | 5.847 px | — |
| Info ujian | 11.115 px, 12 `details`, tanpa daftar isi | 7.348 px |

**Latensi pada CPU diperlambat 4×.**

| Pengukuran | Hasil |
|---|---|
| Render `beranda` / `rencana` / `referensi` / `info-ujian` / `lembar` | 472 / 273 / 248 / 178 / 145 ms; view lain < 140 ms |
| Muat awal (file://) | DOMContentLoaded 788 ms, FCP 812 ms; `<main>` kosong sampai boot |
| Kalkulator: ketik → hasil berubah | 438–469 ms (debounce 250 ms) |
| Ubah filter Latih / buka Cari / ketik di Cari | 13 / 62 / 35 ms |

### 1.2 Yang sudah bekerja baik (pertahankan)

- **Fokus.** `render()` di `js/core.js` memfokuskan h1 setiap pindah rute. Setelah Periksa, fokus ke `p.inti` dan Enter pada inti = Lanjut. Kembali dari kalkulator memfokuskan isian langkah aktif.
- **Tombol aksi soal.** Tombol aksi lengket (`.sticky-actions`) tetap terlihat setelah Periksa pada semua sampel yang dicatat (11/11 di HP, 11/11 di desktop).
- **Pilihan opsi.** Memilih opsi memberi umpan balik instan (garis 2 px, latar `--primary-soft`, huruf terisi) dan mengaktifkan Periksa.
- **Umpan balik.** Panel umpan beranimasi `muncul`. Status Benar/Kurang tepat dipisah dari kalimat inti. Ada waktu vs anggaran soal. Kartu otomatis bisa dibatalkan.
- **Simulasi.** Autosave terlihat ("Tersimpan 14.52.20"). Dialog Kirim memilih "Kembali ke soal" sebagai bawaan dan menawarkan "Ke soal kosong pertama (no. 8)". Lembar "Daftar soal" di HP menyaring Kosong/Ragu.
- **Kalkulator.** Galat spesifik ("Masukkan jumlah dalam euro (EUR)…") dan tombol "Ke isian itu". Hasil tidak memakai nilai bawaan diam-diam.
- **Pencarian.** `/`, Ctrl/Cmd+K, ↓/↑, Enter, dan Esc pertama menutup. Hasil berlabel jenis.
- **Rencana.** Centang tugas langsung memperbarui persen dan ringkasan (2 % → 3 %, `role=status`).
- **Gerak yang sudah ada.** Stempel `stempel-tekan` 420 ms, flip kartu, dan `muncul` sudah dinonaktifkan oleh `prefers-reduced-motion` dan `[data-gerak="kurang"]`.

---

## 2. Rekap temuan

P1 = menghambat pemahaman atau menyesatkan. Kerjakan dulu.
P2 = friksi nyata pada alur inti.
P3 = poles.

| ID | P | Judul singkat | Lokasi utama | Agen |
|---|---|---|---|---|
| KL-1 | P1 | Hasil kalkulator di luar layar saat mengetik | `js/views-alat.js › UKP.views.kalkulator › hitung()` | impl-alat + impl-css |
| HI-1 | P1 | Hari Ini tidak mengakui sesi yang sudah tercatat | `js/views-home.js › UKP.views.beranda › gambarSesi()` | impl-belajar |
| TT-1 | P1 | Tutor tanpa sample: kontrol mati, label AI keliru | `js/views-alat.js › T.buka › kirim()/tampilkanPesan()` | impl-alat |
| TT-2 | P2 | Tutor dari topbar selalu konteks "Umum" | `js/app.js › bangunShell` (`UKP.konteksTutorSaatIni` tidak didefinisikan) | impl-alat |
| SS-1 | P2 | Mode fokus sesi hanya di HP; desktop tetap bersidebar | `css/app.css` `body[data-mode="sesi"]`, `js/views-home.js › UKP.views.sesi` | impl-css + impl-belajar |
| OB-2 | P2 | Diagnosis 15 × 3 tindakan dengan pembahasan penuh | `js/views-home.js › UKP.views.sesi › gambar()` (konteks diagnosis), `js/soal.js › UKP.c.soal` | impl-belajar |
| OB-3 | P2 | Progres dalam blok tidak terlihat (diagnosis = 1 segmen penuh) | `js/views-home.js › gambarBar()` | impl-belajar |
| OB-4 | P2 | "Kesiapan 6 %" setelah diagnosis 9/15 benar; Bukti diagnosis generik | `views-home.js › bukti()`, `beranda` (posisi penguasaan) | impl-belajar |
| BK-1 | P2 | Bukti Sesi tidak bisa disalin atau dibagikan | `js/views-home.js › bukti()` | impl-belajar |
| BL-1 | P2 | Kelompok (HP): tombol aksi tertutup CTA lengket | `js/views-belajar.js › UKP.views.kelompok` | impl-belajar + impl-css |
| BL-2 | P2 | Topik: cek pemahaman jauh di dasar halaman | `js/views-belajar.js › UKP.views.topik` | impl-belajar |
| BL-3 | P2 | Status topik basi setelah cek tuntas | `js/views-belajar.js › UKP.views.topik › gambarCek()` | impl-belajar |
| BL-4 | P2 | Tautan topik tanpa pratinjau | `js/views-belajar.js › UKP.views.kelompok` (rows) | impl-belajar |
| LT-1 | P2 | Jumlah soal cocok tersembunyi di bawah lipatan | `js/views-belajar.js › UKP.views.latih › hitung()` | impl-belajar |
| LT-2 | P2 | Penyebut latihan berubah tanpa aba-aba (5 → 7) | `js/views-belajar.js › jalankan() › gambar()` | impl-belajar |
| LT-3 | P2 | Ringkasan latihan minim | `js/views-belajar.js › jalankan() › selesai()` | impl-belajar |
| LT-4 | P2 | Tidak ada "Tidak tahu"; pengguna dipaksa menebak | `js/soal.js › UKP.c.soal` | impl-belajar |
| UL-1 | P2 | Kartu pertama di bawah lipatan (y = 537) | `js/views-belajar.js › UKP.views.ulang` | impl-belajar |
| KS-1 | P2 | Pulang-pergi kasus ↔ kalkulator butuh gulir panjang | `views-alat.js › kalkulator` (banner dariKasus), `views-belajar.js › keKalkulator` | impl-alat |
| SM-1 | P2 | Bar ujian tanpa jumlah terjawab/ragu | `js/views-simulasi.js › layarUjian › gambarBar()` | impl-alat |
| SM-2 | P2 | CAT tanpa pintasan navigasi (←/→, R) | `js/views-simulasi.js › layarUjian` | impl-alat |
| SM-3 | P2 | Hasil: ubin topik mati, ulas menumpuk, tidak ada ulas ragu | `js/views-simulasi.js › layarHasil()/ulas()` | impl-alat |
| KL-2 | P2 | Kotak hasil dibangun ulang: `details` tertutup sendiri | `js/views-alat.js › hitung()` | impl-alat |
| KL-3 | P2 | "Tebak dulu" tanpa isian tebakan dan tanpa perbandingan | `js/views-alat.js › bangunForm()/hitung()` | impl-alat |
| RC-1 | P2 | Rencana 5.847 px tanpa "Minggu ini"; progres jauh dari centang | `js/views-alat.js › garisWaktuRencana()` | impl-alat |
| KM-1 | P2 | Tab Kemajuan: fokus lompat ke h1; bukan tablist | `js/views-alat.js › UKP.views.kemajuan` | impl-alat |
| KM-2 | P2 | Heatmap/batang tidak bisa diklik atau tanpa affordance | `views-alat.js › kemajuan (tab peta)`, `js/viz.js › V.heatmap/V.batang` | impl-alat + impl-belajar (viz) |
| IU-1 | P2 | Info ujian 11.115 px tanpa daftar isi | `js/views-alat.js › UKP.views['info-ujian']` | impl-alat |
| GL-1 | P2 | Tidak ada transisi antar-view | `js/core.js › render()` + CSS | impl-alat + impl-css |
| GL-2 | P3 | Toast bertahan lintas rute dan tanpa aksi | `js/core.js › UKP.toast`, `render()` | impl-alat |
| GL-3 | P3 | Pintasan tidak terlihat di layar | `js/soal.js`, `js/app.js` | impl-belajar + impl-alat |
| GL-4 | P3 | Muat awal tanpa indikator | `index.html` (`<main>`) | impl-css |
| GL-5 | P3 | Render Hari Ini 472 ms (CPU 4×) tanpa penanda | `views-home.js › beranda` | impl-belajar |
| OB-1 | P3 | Onboarding: progres tanpa teks, tanpa pintasan | `views-home.js › UKP.views.mulai › render()` | impl-belajar |
| HI-2 | P3 | Sparkline/delta hari pertama tanpa makna | `views-home.js › beranda › tileStat` | impl-belajar |
| HI-3 | P3 | Tile stat tidak bisa diklik | `views-home.js › beranda` | impl-belajar |
| SS-2 | P3 | Menit statis 0/12; pergantian blok tanpa tanda | `views-home.js › sesi › gambarBar()/tik` | impl-belajar |
| SS-3 | P3 | Blok Angka mengulang Hari Ini dan berpita abu-abu | `views-home.js › sesi › gambar()` | impl-belajar + impl-css |
| SS-4 | P3 | "Cukup" menutup sesi tanpa jalan balik | `views-home.js › cukup()` | impl-belajar |
| BK-2 | P3 | Grafik 7 hari satu batang pada hari pertama | `views-home.js › bukti()` | impl-belajar |
| BL-5 | P3 | Kartu kelompok: cincin "–" dan bar 0 tanpa arah | `views-belajar.js › UKP.views.tingkat` | impl-belajar |
| LT-5 | P3 | Segmen "Butir laporan peserta" ambigu bagi target A | `views-belajar.js › latih` | impl-belajar |
| LT-6 | P3 | Tag sebab terpecah per huruf di HP | `css/app.css` `.row-link .tag-sebab` | impl-css |
| UL-2 | P3 | Stat Ulang basi; tidak ada bar progres dek | `views-belajar.js › ulang › gambar()` | impl-belajar |
| UL-3 | P3 | Chip "Semua jatuh tempo" aktif padahal 0 jatuh tempo | `views-belajar.js › ulang` | impl-belajar |
| UL-4 | P3 | Pergantian kartu tanpa transisi | `views-belajar.js › ulang`, CSS | impl-belajar + impl-css |
| KS-2 | P3 | Jawaban langkah salah tidak menandai opsi | `views-belajar.js › UKP.c.stepper › cek()` | impl-belajar |
| KS-3 | P3 | Langkah yang belum aktif memakan ruang penuh | `views-belajar.js › stepper › gambar()` | impl-belajar + impl-css |
| KS-4 | P3 | Kasus selesai tanpa ringkasan kinerja | `views-belajar.js › stepper` | impl-belajar |
| KS-5 | P3 | Data kasus (HP) mendorong stepper ke bawah | `views-belajar.js › stepper` | impl-belajar |
| SM-4 | P3 | Layar ujian desktop rata kiri | CSS / `layarUjian` | impl-css |
| SM-5 | P3 | Dialog Kirim tanpa jalan ke soal ragu | `views-simulasi.js › ringkasanKirim()` | impl-alat |
| SM-6 | P3 | Pengingat tempo mudah terlewat | `views-simulasi.js › pesanTempo()` | impl-alat |
| KL-4 | P3 | Isian salah menghapus hasil terakhir | `views-alat.js › hitung()` | impl-alat |
| RC-2 | P3 | Minggu tuntas tanpa penanda | `views-alat.js › garisWaktuRencana()` | impl-alat |
| RC-3 | P3 | Tidak ada "geser ke besok" per tugas | `views-alat.js › garisWaktuRencana()`, `learn.js` | impl-alat |
| KM-3 | P3 | Sel Kartu Hadir tidak interaktif | `views-home.js › UKP.c.hadirBulan` | impl-belajar |
| KM-4 | P3 | Lencana tanpa progres | `views-alat.js › kemajuan (tab lencana)` | impl-alat |
| KM-5 | P3 | Buku Kesalahan tanpa status "sudah benar" | `views-alat.js › kemajuan (tab salah)` | impl-alat |
| PF-1 | P3 | Baris formulir tanpa navigasi antarbaris | `views-alat.js › rincianBaris()` | impl-alat |
| LA-1 | P3 | Lembar angka hanya baca (tanpa uji diri) | `views-alat.js › UKP.views.lembar` | impl-alat |
| RF-1 | P3 | Referensi: saringan tersembunyi, tanpa sorot | `views-alat.js › UKP.views.referensi` | impl-alat |
| PG-1 | P3 | Pengaturan tanpa konfirmasi "Tersimpan" | `views-alat.js › UKP.views.pengaturan` | impl-alat |
| CR-1 | P3 | Cari: kueri kosong = layar kosong | `views-alat.js › UKP.cari › gambar()` | impl-alat |
| CR-2 | P3 | Cari: hasil tidak dikelompokkan dan tanpa sorot | `views-alat.js › UKP.cari` | impl-alat |

---

## 3. Temuan per alur

Format tiap temuan:

- **Teramati** — perilaku nyata di peramban.
- **Bukti** — tangkapan layar.
- **Lokasi** — `berkas › fungsi`.
- **Usulan** — perubahan yang bisa langsung dikerjakan.
- **Agen** — pemilik berkas.

### 3.1 Onboarding → diagnosis → Bukti Sesi

**OB-1 · P3 · Progres onboarding hanya garis; tanpa pintasan**
- **Teramati:** lima segmen di atas (`.ob-progress role=img`) tanpa teks yang terlihat. Pilihan bisa diklik, tetapi tidak ada angka 1–3 atau Enter untuk lanjut. Pilihan bawaan sudah tertandai, jadi "Lanjut" selalu aktif. Itu baik.
- **Bukti:** `hp-02-ob-1-pilih.png`, `hp-05-ob-4-pilih.png`.
- **Lokasi:** `js/views-home.js › UKP.views.mulai › render()` (baris 98–151).
- **Usulan:**
  - Eyebrow "Langkah 2 dari 5" di atas h1.
  - Segmen aktif terisi dengan transisi width 160 ms.
  - Kartu pilihan menampilkan ikon centang kecil yang muncul (opacity + scale 0,9 → 1, 120 ms) saat `aria-pressed=true`.
  - Pintasan desktop: angka 1–3 memilih, Enter = Lanjut.
  - Kotak saran (langkah 4) sudah ter-update langsung. Beri kilat latar 160 ms saat teksnya berubah.
- **Agen:** impl-belajar (+ impl-css untuk `.ob-opsi [aria-pressed=true]::after`).

**OB-2 · P2 · Diagnosis terasa seperti latihan penuh (53 tindakan)**
- **Teramati:** 15 soal × (pilih → Periksa → Lanjut). Setiap soal membuka panel umpan 4 blok, jejak hitung, kutipan, dan "Kartu dari soal ini ditambahkan". Tujuan diagnosis adalah *memetakan*, tetapi pengalamannya *mengajar* soal demi soal, dan pada hari pertama terasa berat.
- **Bukti:** `hp-07-diagnosis-awal.png`, `hp-09-diag-soal-umpan.png`.
- **Lokasi:** `js/views-home.js › UKP.views.sesi › gambar()` (blok soal, `konteks: 'diagnosis'`). `js/soal.js › UKP.c.soal`.
- **Usulan — mode diagnosis ringkas:**
  - Opsi baru `UKP.c.soal(…, { ringkas: true })`. Setelah memilih, tombol utama menjadi "Berikutnya" (2 tindakan per soal).
  - Umpan satu baris yang muncul 160 ms ("Benar" / "Kurang tepat · kunci C"), tanpa panel 4 blok.
  - Pembahasan dipindah ke Bukti diagnosis lewat tombol "Ulas 6 yang keliru".
  - Pencatatan jawaban **tidak berubah** (tetap `catatJawaban` konteks diagnosis).
  - Hasilnya: 15 tindakan lebih sedikit dan jauh lebih sedikit gulir.
- **Agen:** impl-belajar.

**OB-3 · P2 · Progres di dalam blok tidak terlihat**
- **Teramati:** diagnosis = 1 blok, sehingga `.seg-blok` tampil sebagai satu garis penuh sejak soal 1. Progres hanya berupa teks "Soal 1/15 · 0/12 mnt". Hal yang sama berlaku di sesi: segmen "Soal" tidak bergerak selama 8 soal.
- **Bukti:** `hp-07-diagnosis-awal.png`, `hp-18-sesi-soal-pilih.png`.
- **Lokasi:** `js/views-home.js › UKP.views.sesi › gambarBar()` (baris 291–296).
- **Usulan:**
  - Segmen aktif berisi isian `<span class="isi" style="width: (sub/n)%">`, dengan transisi width 160 ms ease. Segmen selesai terisi penuh.
  - Teks pembaca layar tetap seperti sekarang.
  - Untuk diagnosis, pecah tampilan menjadi segmen per kelompok materi (A1…A5, 3 soal per segmen) agar pengguna melihat "peta" terbentuk.
- **Agen:** impl-belajar (+ impl-css `.seg-blok li .isi`).

**OB-4 · P2 · Pesan setelah diagnosis bertentangan dan menurunkan motivasi**
- **Teramati:**
  - Bukti diagnosis adalah kuitansi generik: "Kartu 0 · Soal 15, benar 9".
  - Di Hari Ini, cincin "Kesiapan tingkat" menampilkan **6 %**, sementara semua cincin kelompok "–" (butuh 8 soal).
  - Pengguna yang menjawab 60 % benar melihat "6 %" tanpa penjelasan yang dekat.
- **Bukti:** `hp-11-bukti-diagnosis-penuh.png`, `hp-13-hariini-penuh.png` (bagian Posisi penguasaan).
- **Lokasi:** `js/views-home.js › bukti()` (baris 334–371). `UKP.views.beranda` (blok "Posisi penguasaan", baris 256–261).
- **Usulan:**
  - Bukti diagnosis menampilkan **Peta awal**: satu baris per kelompok dengan 3 titik (terisi = benar, berongga = salah). Titik muncul berurutan 60 ms per titik, maksimal 900 ms total, dan tanpa gerak bila reduced-motion.
  - Di bawahnya: "Mulai dari A2 KUP: 1/3 benar" + tombol "Buka rencana".
  - Di Hari Ini, selama setiap kelompok < 8 soal, ganti angka kesiapan dengan "Peta awal: 9/15 benar · angka kesiapan muncul setelah 8 soal per kelompok". Angka persen ditampilkan hanya bila datanya cukup.
- **Agen:** impl-belajar.

### 3.2 Hari Ini → sesi Standar → Bukti

**HI-1 · P1 · Kartu sesi tidak berubah setelah sesi tercatat**
- **Teramati:** setelah Bukti → Selesai, kartu teratas tetap "Sesi hari ini · Kilat/Standar/Penuh · Mulai sesi · 12 mnt", dengan susunan blok baru. Tidak ada tanda HADIR, menit, atau soal hari ini. Diperiksa juga lewat `UKP.hadir.catat('HADIR')` → kartu sama.
- **Bukti:** `hp-12-hariini.png` (sebelum) vs `hp-22-hariini-setelah-sesi.png` (sesudah): hampir identik.
- **Lokasi:** `js/views-home.js › UKP.views.beranda › gambarSesi()` (baris 190–204).
- **Usulan — keadaan "selesai" bila `s.hadir[hariIni]?.status === 'HADIR'` dan tidak ada `sesiAktif`:**
  - Eyebrow "Sesi hari ini · tercatat".
  - Stempel `HADIR` (kecil, `.stempel.diraih` hanya pada render pertama setelah sesi, 420 ms).
  - Ringkasan dari `s.sesi` hari ini: "2 sesi · 13 mnt · 12 soal (7 benar) · 4 kartu".
  - Rangkaian "Rangkaian 3 hari" dengan angka count-up 400 ms dari n−1 ke n, sekali per hari.
  - Aksi: tombol sekunder "Tambah Kilat 5" dan teks "Lihat bukti". Segmen ukuran tetap tersedia, tetapi tombol utama tidak lagi berwarna primer.
  - Ini sekaligus Momen 1.
- **Agen:** impl-belajar.

**HI-2 · P3 · Tren hari pertama tanpa makna**
- **Teramati:** sparkline datar dengan satu titik dan "▲ +15 vs minggu lalu" pada hari pertama.
- **Bukti:** `hp-12-hariini.png`.
- **Lokasi:** `views-home.js › beranda` (tileStat, baris 234–237).
- **Usulan:** sembunyikan `trend` dan `delta` bila hari aktif < 3. Ganti dengan sub-teks "Tren muncul setelah 3 hari aktif".
- **Agen:** impl-belajar.

**HI-3 · P3 · Tile stat tidak bisa diklik**
- **Usulan:**
  - Tile menjadi tautan kartu (`.stat-tile` + `a`):
    - Rangkaian → Kemajuan › Kartu Hadir.
    - Akurasi → Kemajuan › Peta kelemahan.
    - Soal minggu ini → Kemajuan › Laporan.
  - Hover = garis tepi `--line-strong` (120 ms). Fokus = cincin fokus standar.
- **Agen:** impl-belajar.

**GL-5 · P3 · Render Hari Ini 472 ms (CPU 4×)**
- **Teramati:** `susunSesi` + `kesiapanTingkat` + aktivitas 14 hari dihitung sinkron. Di ponsel kelas menengah, perpindahan ke Hari Ini terasa tersendat.
- **Usulan:** gabungkan dengan GL-1 (fade 120 ms menutupi jeda). Bila masih terasa, render kartu sesi dulu lalu sisanya di `requestAnimationFrame` berikutnya, tanpa mengubah logika.
- **Agen:** impl-belajar.

**SS-1 · P2 · "Mode fokus" sesi hanya berlaku di HP**
- **Teramati:** `body[data-mode="sesi"]` hanya menyembunyikan `.bottomnav`. Di desktop, sidebar 256 px, topbar, chip "UKP A · 47 hari", Cari, dan Tutor tetap tampil selama sesi. Di simulasi semuanya disembunyikan, jadi sikapnya tidak konsisten.
- **Bukti:** `desktop-19-sesi-soal-umpan.png`.
- **Lokasi:** `css/app.css` (baris 809–813). `js/views-home.js › UKP.views.sesi`.
- **Usulan:**
  - ≥ 600 px: `body[data-mode="sesi"] .sidebar { display: none }` dan grid shell satu kolom. Lebar konten 760 px di tengah.
  - Topbar diganti `.sesi-bar` (sudah ada) yang memuat tombol keluar "Cukup".
  - Pintasan Esc membuka konfirmasi "Akhiri sesi?". Tidak ada konfirmasi bila belum ada aktivitas, sesuai logika `cukup()` sekarang.
  - Transisi masuk mode: sidebar fade 160 ms (tanpa gerak bila reduced-motion).
- **Agen:** impl-css (+ impl-belajar untuk Esc).

**SS-2 · P3 · Menit statis dan pergantian blok tanpa tanda**
- **Teramati:** "0/12 mnt" sepanjang menit pertama (diperbarui tiap 30 dtk). Saat blok berganti, segmen langsung berwarna lain tanpa jeda makna.
- **Bukti:** `hp-15-sesi-blok-Angka_hari_ini.png`, `hp-16-sesi-kartu-terbuka.png`.
- **Lokasi:** `views-home.js › sesi › gambarBar()`, `tik` (baris 373).
- **Usulan:**
  - Interval 15 dtk. Format "< 1/12 mnt" pada menit pertama.
  - Saat `lanjutBlok()`, segmen selesai mendapat tanda centang kecil yang digambar (stroke-dashoffset 160 ms).
  - Umumkan "Blok 2 dari 4: Kartu" lewat `#live`.
- **Agen:** impl-belajar.

**SS-3 · P3 · Blok "Angka hari ini" pasif dan berpita abu-abu**
- **Teramati:** angka yang sama sudah tampil di Hari Ini. Di sesi, `.sticky-actions` di dalam `.card` menghasilkan pita abu-abu di bawah kartu.
- **Bukti:** `hp-15-sesi-blok-Angka_hari_ini.png`.
- **Usulan:**
  - Ubah menjadi **ingat aktif**: tampilkan kalimat dengan angka tertutup ("Bagian harga jual rumah yang PPN-nya DTP 100 %: ▢▢▢") dan tombol "Tampilkan angka". Setelah dibuka, tampil Lanjut.
  - CSS: `.card .sticky-actions { background: transparent; border-top: 0; }` atau letakkan tombol di luar kartu.
- **Agen:** impl-belajar + impl-css.

**SS-4 · P3 · "Cukup" tanpa jalan balik**
- **Usulan:** bila sudah ada aktivitas, Bukti langsung tampil (pertahankan), tetapi sertakan toast beraksi "Sesi diakhiri · Batalkan" (5 dtk) yang memulihkan `sesiAktif` dan posisi. Membutuhkan GL-2 (toast beraksi).
- **Agen:** impl-belajar.

**BK-1 · P2 · Bukti Sesi tidak bisa dibagikan**
- **Teramati:** aksinya hanya "Selesai", "Lanjut 5 menit lagi?", dan "Lihat rencana" (diagnosis). Tidak ada salin atau bagikan, padahal bukti ini artefak akuntabilitas alami (grup belajar, mentor). "Sesi ke-2" tidak menjelaskan bahwa itu sesi kedua *hari ini*.
- **Bukti:** `hp-20-bukti-sesi.png`.
- **Lokasi:** `js/views-home.js › bukti()`.
- **Usulan:**
  - Tombol "Salin bukti". Teks kuitansi monospace:
    ```
    BUKTI SESI · Kamis, 29 Okt 2026
    Kartu 4 · Topik A2.1 · Soal 8 (benar 2) · 1 mnt
    Rangkaian 1 hari · UKP A H-47
    ```
  - Tombol "Bagikan" hanya bila `navigator.share` ada. Umpan: toast "Bukti disalin".
  - Baris total menjadi "Sesi ke-2 hari ini · 2 total".
  - Ini Momen 7.
- **Agen:** impl-belajar.

**BK-2 · P3 · Grafik 7 hari dengan satu batang**
- **Usulan:** pada < 3 hari aktif, ganti grafik dengan strip Kartu Hadir 7 hari (komponen yang sama dengan Hari Ini). Sel hari ini "dicap" (`.stempel.diraih` mini). Grafik kolom kembali bila data cukup.
- **Agen:** impl-belajar.

### 3.3 Belajar → kelompok → topik → cek pemahaman

**BL-1 · P2 · Kelompok di HP: aksi tertutup CTA lengket**
- **Teramati:** paragraf tujuan ±10 baris + meta + cincin mendorong baris aksi ("Latih 10 · Simulasi 40 · Dek kartu · Studi kasus · Lembar Angka") ke y ≈ 710. Tombol-tombol itu tepat tertutup tombol lengket "Lanjutkan: Subjek pajak orang pribadi…".
- **Bukti:** `hp-24-kelompok.png`.
- **Lokasi:** `js/views-belajar.js › UKP.views.kelompok` (baris 72–95).
- **Usulan:**
  - Urutan baru: kop (judul) → baris aksi → cincin+meta → tujuan dilipat 3 baris dengan "Selengkapnya" (`details` atau `-webkit-line-clamp` + tombol).
  - CTA "Lanjutkan" baru lengket setelah baris aksi keluar dari viewport (IntersectionObserver). Muncul dengan translateY(8px) → 0 dan opacity 0 → 1 dalam 160 ms.
- **Agen:** impl-belajar + impl-css.

**BL-2 · P2 · Cek pemahaman berada di dasar halaman topik**
- **Teramati:** cek dimulai di y = 3.436 dari 3.705 px (HP). Tidak ada jalan pintas atau indikator baca.
- **Bukti:** `hp-27-topik-penuh.png`, `hp-26-topik.png`.
- **Lokasi:** `js/views-belajar.js › UKP.views.topik`.
- **Usulan:**
  - Di kop topik, chip "Cek 5 soal ↓" yang menggulir halus ke bagian cek (hormati `UKP.gulirHalus()`) lalu memfokus tombol "Mulai cek pemahaman".
  - Garis progres baca 2 px di bawah topbar (lebar = persen gulir, tanpa animasi saat reduced-motion).
  - Navigasi topik lengket (‹ Topik 1 · 2/11 · Topik 3 ›) sudah baik. Tambahkan pratinjau judul topik tujuan saat hover/fokus (Momen 9).
- **Agen:** impl-belajar.

**BL-3 · P2 · Status topik basi setelah cek tuntas**
- **Teramati:** setelah "4 dari 5 benar · Cek pemahaman tuntas · TUNTAS":
  - Baris di atasnya masih "Belum ada jawaban untuk topik ini." dengan tombol "Tandai dibaca".
  - Penanda judul masih `BELUM MULAI`.
  - Stempel TUNTAS melebar selebar kartu (tata letak).
- **Bukti:** `hp-30-cek-hasil.png`.
- **Lokasi:** `js/views-belajar.js › UKP.views.topik › gambarCek()` (baris 125–132).
- **Usulan:**
  - Setelah cek selesai, perbarui di tempat: penanda status (stempel level baru, pill "cek tuntas"), baris akurasi "Akurasi 80 % dari 5 soal (30 hari)", dan tombol dibaca.
  - Tawarkan "Tandai dibaca juga?" atau tandai otomatis bila tuntas.
  - Animasi: stempel level berganti dengan crossfade 160 ms.
  - CSS: `.card > .stempel { justify-self: start; }`.
- **Agen:** impl-belajar (+ impl-css untuk stempel).

**BL-4 · P2 · Tautan topik tanpa pratinjau**
- **Teramati:** hover di desktop hanya mengubah warna judul. Tidak ada `title` atau pratinjau. Untuk memutuskan topik mana yang dibuka, pengguna harus masuk lalu kembali.
- **Bukti:** `desktop-27-kelompok-hover-topik.png`.
- **Usulan:** Momen 9 (pratinjau topik).
- **Agen:** impl-belajar.

**BL-5 · P3 · Kartu kelompok di Belajar tanpa arah saat kosong**
- **Teramati:** cincin "–" dan bar 0 % tanpa teks tindakan.
- **Bukti:** `hp-23-belajar.png`.
- **Usulan:** bila `sk.n < 8`, ganti baris meta terakhir dengan tautan kecil "Butuh 8 soal · Latih 10 ›". Hover kartu = garis kiri warna tingkat menebal 3 → 4 px (120 ms).
- **Agen:** impl-belajar.

### 3.4 Latih (filter laporan) → 5 soal → umpan

**LT-1 · P2 · Umpan balik filter tidak terlihat**
- **Teramati:** mengubah segmen "Butir laporan peserta" ke Tingkat B mengubah jumlah 521 → 187 soal dalam 3 ms. Namun teks jumlah berada di bawah 4 sakelar, di bawah lipatan dan di bawah tombol lengket "Mulai 10 soal".
- **Bukti:** `hp-32-latih-filter-penuh.png`, `hp-33-latih-filter-laporan.png`.
- **Lokasi:** `js/views-belajar.js › UKP.views.latih › hitung()` (baris 301–307), `tombolMulai`.
- **Usulan:**
  - Tombol lengket membawa jumlahnya: "Mulai 5 soal · dari 187". Angka "187" berkilat latar `--primary-soft` 160 ms saat berubah.
  - Bila 0, tombol `aria-disabled` dengan teks "Tidak ada soal cocok".
  - Teks `aria-live` tetap ada.
  - Pindahkan "Jumlah soal" (segmen 5/10/20/40) ke atas kartu, dekat tombol.
- **Agen:** impl-belajar.

**LT-2 · P2 · Penyebut berubah tanpa aba-aba**
- **Teramati:** bar "Latih · 5 / 5 · benar 2" lalu toast "Soal yang keliru diulang di akhir" lalu "Latih · 6 / 7". Ringkasan menyebut "Dikerjakan 7", padahal pengguna memilih 5.
- **Bukti:** log `latih-jalan`, `hp-38-latih-selesai.png`.
- **Lokasi:** `js/views-belajar.js › jalankan() › gambar()` (baris 213–236).
- **Usulan:**
  - Pisahkan fase. Bar menampilkan "Putaran ulang · 1 / 2" dengan pill `ulang`, dan penyebut putaran utama tidak berubah.
  - Kartu pemisah satu layar: "5 soal selesai · 2 keliru diulang sekarang · Lewati ulang" (tombol teks).
  - Ringkasan: "5 soal · 3 benar pada percobaan pertama · 2 diulang (1 benar)".
- **Agen:** impl-belajar.

**LT-3 · P2 · Ringkasan latihan minim**
- **Teramati:** tiga tile (Dikerjakan 7 / Benar 4 / Durasi 1 mnt). Tidak ada akurasi, tidak ada daftar soal keliru. `.ujian-bar` kosong masih tampil di atas judul sebagai garis putih.
- **Bukti:** `hp-38-latih-selesai.png`.
- **Lokasi:** `js/views-belajar.js › jalankan() › selesai()` (baris 237–248).
- **Usulan:**
  - Tile akurasi dengan cincin (count-up 400 ms).
  - Daftar soal keliru (id, potongan stem, tag sebab). Klik membuka soal di dialog hanya-baca dengan pembahasan; komponen `UKP.c.soal hanyaBaca denganUmpan` sudah ada.
  - "Jadikan kartu semua yang keliru" dan "Latih 10 topik terlemah".
  - Hapus `kop` saat selesai (`kop.remove()`).
- **Agen:** impl-belajar.

**LT-4 · P2 · Tidak ada "Tidak tahu"**
- **Teramati:** setiap soal memaksa memilih A–D. Pada pelajar pemula, tebakan mencemari Buku Kesalahan dengan tag sebab yang salah (mis. "salah baca"). `opsi.onLewati` sudah ada di komponen, tetapi tidak dipakai di Latih maupun sesi.
- **Lokasi:** `js/soal.js › UKP.c.soal` (aksi baris 98–103). `views-belajar.js › jalankan()`.
- **Usulan:**
  - Tombol teks "Tidak tahu" di `.sticky-actions` (mode belajar). Tombol ini mengunci soal, menandai kunci, dan menampilkan pembahasan dengan status "Belum tahu" (tone info, bukan attn).
  - Pencatatan memakai jalur yang sudah ada untuk jawaban kosong. **Periksa dulu perlakuan `catatJawaban` di `js/learn.js` untuk opsi `'-'`.** Bila perlu perubahan logika, tandai sebagai tahap berikut dan cukup tampilkan pembahasan tanpa mencatat.
  - Momen 2 memperluas ini menjadi penanda keyakinan.
- **Agen:** impl-belajar.

**LT-5 · P3 · Segmen laporan ambigu bagi target A**
- **Usulan:** teks bantu permanen di bawah label: "Soal yang mengarah ke laporan peserta ujian Oktober 2026. Untuk target A, pilih Tingkat B untuk kasus A1–A5 dari laporan B." Tandai segmen sesuai tingkat target dengan `· target`.
- **Agen:** impl-belajar.

**LT-6 · P3 · Tag sebab terpecah per huruf**
- **Teramati:** di HP, "salah baca" terpecah menjadi "sala / h / baca" di daftar Buku Kesalahan terbaru.
- **Bukti:** `hp-32-latih-filter-penuh.png` (bawah).
- **Usulan (CSS):** `.row-link .tag-sebab { flex: none; white-space: nowrap; }`.
- **Agen:** impl-css.

### 3.5 Ulang kartu

**UL-1 · P2 · Kartu pertama di bawah lipatan**
- **Teramati:** di HP, kop (2 baris), tiga stat, dan 11 chip dek mendahului kartu, sehingga kartu mulai di y = 537 dari 844. Tombol nilai baru terlihat setelah dibalik.
- **Bukti:** `hp-39-ulang.png`.
- **Lokasi:** `js/views-belajar.js › UKP.views.ulang` (baris 352–356).
- **Usulan:**
  - Kop satu baris: "Antrean hari ini: 6 kartu · 0 jatuh tempo · 6 baru". Stat dipindah ke `details` "Statistik dek".
  - Chip dek dalam satu baris gulir horizontal (`overflow-x: auto`, scroll-snap, chip aktif di-`tengahkanChip`).
  - Target: kartu mulai ≤ 260 px di HP.
- **Agen:** impl-belajar + impl-css.

**UL-2 · P3 · Stat basi dan tanpa progres dek**
- **Teramati:** "Kuat / dinilai 0/4" tetap sama setelah 5 penilaian. Progres hanya "Kartu 6 / 6".
- **Bukti:** `hp-41-ulang-setelah-5.png`.
- **Usulan:** bar tipis di atas kartu (lebar = idx / N, transisi 160 ms). Stat diperbarui di tempat setelah `onNilai`.
- **Agen:** impl-belajar.

**UL-3 · P3 · Label chip menyesatkan**
- **Usulan:** "Semua jatuh tempo" → "Antrean hari ini". Chip itu memang berisi jatuh tempo + baru.
- **Agen:** impl-belajar.

**UL-4 · P3 · Pergantian kartu tanpa transisi**
- **Usulan:**
  - Setelah nilai, kartu lama keluar (opacity 1 → 0, translateX −8 px untuk Lupa / +8 px untuk Ingat/Mudah, 120 ms), lalu kartu baru masuk (translateY 8 px → 0, 160 ms).
  - Arah gerak bermakna: Lupa "kembali ke antrean".
  - Tanpa gerak bila reduced-motion.
- **Agen:** impl-belajar + impl-css.

### 3.6 Studi kasus (dengan kalkulator)

**KS-1 · P2 · Pulang-pergi kasus ↔ kalkulator butuh gulir panjang**
- **Teramati:** "Buka kalkulator" membuka form PPh OP. Banner "Dibuka dari studi kasus … Kembali ke studi kasus" ada di atas, tetapi hasil kalkulator ada di y ≈ 1.650 (HP) / 1.504 (desktop). Pengguna menggulir turun untuk membaca hasil, lalu naik lagi untuk kembali. Kembalinya sendiri bekerja baik: langkah aktif difokuskan.
- **Bukti:** `hp-45-kasus-ke-kalkulator.png`, `hp-46-kasus-kembali.png`.
- **Lokasi:** `js/views-alat.js › UKP.views.kalkulator` (banner `dariKasus`, baris 59–60). `js/views-belajar.js › UKP.c.stepper › keKalkulator`.
- **Usulan:**
  - Saat `dariKasus`, bar hasil mini lengket (KL-1) memuat tombol kedua "‹ Langkah 2 kasus".
  - Teks banner menyebut langkah aktif: "Anda di langkah 2/6: Berapa penghasilan neto…?".
- **Agen:** impl-alat.

**KS-2 · P3 · Jawaban langkah salah tidak menandai opsi**
- **Teramati:** salah di langkah 1 menghasilkan garis kiri merah, petunjuk 1 terbuka otomatis, dan teks "Kurang tepat. Coba lagi…". Opsi yang dipilih tidak ditandai dan tidak ada hitungan percobaan.
- **Bukti:** `hp-47-kasus-salah.png`.
- **Lokasi:** `js/views-belajar.js › UKP.c.stepper › cek()` (baris 487–493).
- **Usulan:**
  - Tandai label opsi salah dengan `data-hasil="salah"`. Gaya ini sudah ada untuk soal; opsi dikosongkan saat pengguna memilih opsi lain.
  - Baris kecil "Percobaan 2 · Petunjuk 1/3".
  - Garis kiri merah masuk dengan fade 160 ms.
  - Untuk isian angka, tampilkan selisih arah bila jauh ("terlalu besar") **hanya** setelah petunjuk 2 dipakai, agar tidak memberi jawaban.
- **Agen:** impl-belajar.

**KS-3 · P3 · Langkah belum aktif memakan ruang**
- **Teramati:** enam kartu langkah penuh. Langkah yang belum aktif memperlihatkan pertanyaannya dan menambah gulir.
- **Bukti:** `hp-47-kasus-salah.png` (bawah).
- **Usulan:**
  - Langkah belum aktif: satu baris (nomor + 40 karakter pertanyaan, warna muted) dalam "rel" vertikal bergaris.
  - Langkah selesai: satu baris "selesai · 420.000.000" yang bisa dibuka.
  - Garis rel antara langkah terisi (height transition 160 ms) saat langkah tuntas. Ini drag-free stepper.
- **Agen:** impl-belajar + impl-css.

**KS-4 · P3 · Kasus selesai tanpa ringkasan kinerja**
- **Usulan:** pada kartu "Kasus selesai", tambahkan baris "6 langkah · 1 percobaan ulang · 1 petunjuk dipakai" dan **Buku besar kasus** (Momen 8). Gunakan `status` dan `petunjukN` yang sudah tersimpan.
- **Agen:** impl-belajar.

**KS-5 · P3 · Data kasus di HP mendorong stepper**
- **Usulan:** di HP, tombol kecil "Data kasus" di setiap langkah aktif membuka `UKP.dialog({ sheet: true })` berisi tabel data. Fokus kembali ke isian saat ditutup (perilaku dialog sudah memulihkan fokus).
- **Agen:** impl-belajar.

### 3.7 Simulasi 40 → kirim → hasil → ulas

**SM-1 · P2 · Bar ujian tanpa jumlah terjawab/ragu**
- **Teramati:** bar hanya menampilkan "Soal 11 / 40 · A1 · Tersimpan hh.mm.ss · 01:59:56". Status jawaban hanya terlihat di grid (desktop) atau lembar "Daftar soal" (HP).
- **Bukti:** `hp-52-sim-ujian-1.png`, `hp-56-sim-daftar-soal.png`, `desktop-57-sim-ragu.png`.
- **Lokasi:** `js/views-simulasi.js › layarUjian › gambarBar()` (baris 150–156).
- **Usulan:**
  - Garis progres 3 px di dasar bar: segmen terjawab (`--primary`), ragu (`--warn`), kosong (track).
  - Teks mono kecil "Terjawab 12 · Ragu 2".
  - Diperbarui di `onPilih` dan saat Ragu ditekan; lebar segmen transisi 120 ms.
  - Penanda laju "seharusnya di sini" berupa garis tipis vertikal di posisi (menit berjalan / menit total), menggantikan SM-6.
- **Agen:** impl-alat.

**SM-2 · P2 · CAT tanpa pintasan navigasi**
- **Teramati:** A–D bekerja (diteruskan dari h1 tersembunyi). Tidak ada ← / →, tidak ada tombol untuk Ragu, dan tidak ada petunjuk pintasan.
- **Lokasi:** `js/views-simulasi.js › layarUjian`.
- **Usulan:**
  - `←`/`→` (atau `J`/`K`) untuk Sebelumnya/Berikutnya, `R` untuk ragu, `G` untuk membuka/memfokus grid.
  - Abaikan saat mengetik atau dialog terbuka; pakai `mengetik()` yang sama dengan `app.js`.
  - Legenda grid desktop menambahkan baris kbd.
  - Tombol "Ragu-ragu" dengan `aria-pressed` sudah benar. Tambahkan animasi bendera: stroke ikon tergambar 160 ms saat aktif.
- **Agen:** impl-alat.

**SM-3 · P2 · Hasil: ubin topik mati, ulas menumpuk, tidak ada ulas ragu**
- **Teramati:**
  - "Peta topik" adalah ubin berwarna yang tidak bisa diklik.
  - "Ulas yang salah (15)" menambahkan bagian di bawah halaman dan menggulir sejauh 1.338 px (HP). Untuk kembali ke ringkasan, harus menggulir naik.
  - Tidak ada cara mengulas soal yang **ditandai ragu tetapi benar** (kelompok paling berharga untuk konsolidasi) atau soal benar tapi lambat (> 4 mnt, yang hanya disebut dalam satu kalimat).
- **Bukti:** `hp-59-sim-hasil-penuh.png`, `hp-60-sim-ulas.png`.
- **Lokasi:** `js/views-simulasi.js › layarHasil()` (baris 268–290), `ulas()` (baris 292–315).
- **Usulan:**
  - Ulas berjenjang (Momen 6) sebagai mode tersendiri: kop lengket dengan chip tingkat, progres "Ulas 3/12", dan tombol "Kembali ke hasil" yang mengembalikan posisi gulir.
  - Ubin topik menjadi tombol yang membuka menu kecil: "Ulas 3 soal topik ini" / "Latih 10 topik ini".
  - Angka skor hitung naik 0 → 62,5 dalam 400 ms (sekali). Stempel MEMENUHI/BELUM tetap 420 ms.
- **Agen:** impl-alat.

**SM-4 · P3 · Layar ujian desktop rata kiri**
- **Teramati:** di 1366 px, konten maksimal 1100 px menempel kiri dan menyisakan ruang kosong di kanan.
- **Bukti:** `desktop-57-sim-ragu.png`.
- **Usulan:** `body[data-mode="ujian"] main .page { margin-inline: auto; }`.
- **Agen:** impl-css.

**SM-5 · P3 · Dialog Kirim tanpa jalan ke soal ragu**
- **Bukti:** `hp-57-sim-kirim-dialog.png`.
- **Usulan:** bila ada ragu, tambahkan tombol "Tinjau 2 soal ragu" yang membuka soal ragu pertama. Selama mode tinjau, Berikutnya melompat ke ragu berikutnya; bar menampilkan "Tinjau ragu 1/2".
- **Agen:** impl-alat.

**SM-6 · P3 · Pengingat tempo mudah terlewat**
- **Teramati:** `pesanTempo()` berupa teks kecil biru di atas soal.
- **Usulan:** pindahkan ke penanda laju di bar (SM-1). Teks tetap ada untuk pembaca layar lewat `live`.
- **Agen:** impl-alat.

### 3.8 Kalkulator (kurs dan gmt)

**KL-1 · P1 · Hasil tidak terlihat saat isian diubah**
- **Teramati:**
  - Kalkulator kurs punya 14 isian (form 1.518 px di HP) dan gmt 12 isian. `hitung()` memperbarui hasil 438–469 ms setelah mengetik.
  - Kotak hasil mulai di y = 1.866 (HP) / 1.516 (desktop, viewport 900). Saat isian pertama difokus, hasil tidak terlihat sama sekali di kedua ukuran.
  - Umpan balik "langsung" yang sudah dibangun tidak pernah dilihat pengguna. Hanya pembaca layar yang mendengarnya lewat `#kal-ringkas`.
- **Bukti:** `hp-62-kal-kurs.png`, `hp-63-kal-kurs-penuh.png`, `desktop-63-kal-kurs.png`.
- **Lokasi:** `js/views-alat.js › UKP.views.kalkulator › hitung()` (baris 113–140) dan `page.append(form, ringkas, hasilBox)` (baris 141).
- **Usulan:**
  - **≥ 1024 px:** grid dua kolom `minmax(0,1fr) 360px`. Kotak hasil lengket (`position: sticky; top: 72px; max-height: calc(100vh - 88px); overflow: auto`).
  - **< 1024 px:** bar hasil mini lengket di bawah (`.hasil-mini`) berisi label utama, nilai utama (mono, tebal), dan tombol "Rincian ↓" (gulir halus ke kotak hasil). Bila `dariKasus`, tambahkan "‹ Kasus".
  - **Saat nilai utama berubah:** latar nilai berkilat `--primary-soft` lalu kembali (160 ms), hanya bila nilai berbeda. Di sebelahnya muncul delta kecil "+Rp48.750.000" (mono, muted) selama 2 dtk.
  - Isian yang memengaruhi baris hasil tertentu tidak perlu dipetakan. Cukup sorot nilai utama.
  - Reduced-motion: tanpa kilat; delta tetap tampil sebagai teks.
- **Agen:** impl-alat (struktur) + impl-css (`.kalkulator-grid`, `.hasil-mini`).

**KL-2 · P2 · Kotak hasil dibangun ulang dan `details` tertutup sendiri**
- **Teramati:** membuka "Dasar hukum & asumsi" lalu mengetik 1 karakter membuatnya tertutup lagi (`detailsTetap: false` di kurs dan gmt). "Jejak hitung" selalu dibuka ulang (`open: true`) walau pengguna menutupnya.
- **Lokasi:** `js/views-alat.js › hitung()` (`hasilBox.innerHTML = ''`, baris 115).
- **Usulan:** sebelum membangun ulang, simpan `{ [summaryText]: open }`, lalu terapkan kembali. Lebih baik lagi: bangun struktur sekali dan perbarui teks nilai di tempat, agar nilai bisa dianimasikan (KL-1).
- **Agen:** impl-alat.

**KL-3 · P2 · "Tebak dulu" tidak meminta tebakan**
- **Teramati:** sakelar ada di akhir form (setelah 14 isian). Saat aktif, kotak hasil hanya berisi "Tampilkan hasil". Tidak ada isian tebakan, tidak ada perbandingan, dan tidak ada tautan ke pengecoh, padahal jejak kurs sudah memuat baris "Pengecoh: pajak bila keliru memakai kurs tengah Rp32.360.000".
- **Bukti:** `hp-65-kal-kurs-tebak.png`, `kal-kurs-hasil-crop.png` (folder audit-interaksi).
- **Usulan:** Momen 3.
- **Agen:** impl-alat.

**KL-4 · P3 · Isian salah menghapus hasil terakhir**
- **Teramati:** isian "12abc" memunculkan banner galat yang jelas, tetapi seluruh hasil hilang.
- **Bukti:** `hp-66-kal-kurs-galat.png`.
- **Usulan:** tampilkan banner galat di atas **hasil terakhir yang sah** yang diredupkan (opacity .5) dengan label "Hasil terakhir yang sah, sebelum isian diubah". Bar mini (KL-1) menampilkan "Isian belum sah".
- **Agen:** impl-alat.

### 3.9 Rencana

**RC-1 · P2 · Rencana panjang dan progres jauh dari tindakan**
- **Teramati:** 5.847 px di HP, 65 tugas, 8 minggu, dan minggu 1–2 terbuka. Mencentang tugas memperbarui "2 % → 3 %" (baik), tetapi bar progres berada jauh di atas. Satu-satunya umpan lokal adalah coretan. Tidak ada "Lompat ke minggu ini".
- **Bukti:** `hp-73-rencana-penuh.png`, `hp-74-rencana-centang.png`.
- **Lokasi:** `js/views-alat.js › garisWaktuRencana()` (baris 214–247).
- **Usulan:**
  - Ringkasan progres menjadi pita lengket di bawah topbar saat daftar minggu terlihat ("2/65 · Minggu 1 dari 8 · 3 %").
  - Setiap kop minggu memiliki garis progres minggu (lebar transisi 160 ms).
  - Minggu lalu yang tuntas dilipat. Tombol "Minggu ini" muncul bila kop minggu ini di luar layar.
  - Centang tugas: kotak centang tergambar (stroke-dashoffset 120 ms) dan baris memudar ke `--muted` 160 ms.
- **Agen:** impl-alat + impl-css.

**RC-2 · P3 · Minggu tuntas tanpa penanda**
- **Usulan:** saat `w.selesai === w.tugas.length`, stempel kecil "MINGGU TUNTAS" muncul di kop minggu (`.stempel.diraih`, 420 ms, sekali) dan diumumkan lewat `role=status`.
- **Agen:** impl-alat.

**RC-3 · P3 · Tidak ada "geser ke besok"**
- **Usulan:**
  - Tombol teks kecil "Besok" pada tugas yang lewat tanggal. Ini drag-free: tanpa seret, satu ketukan dengan undo di toast.
  - Bila butuh menyimpan tanggal baru, perlu dukungan `UKP.rencana` di `learn.js`. **Tandai sebagai tahap 2**; tahap 1 cukup "Susun ulang" (yang sudah ada) ditambah tautan dari tugas.
- **Agen:** impl-alat.

### 3.10 Kemajuan (5 tab)

**KM-1 · P2 · Tab Kemajuan: fokus lompat ke h1; bukan tablist**
- **Teramati:**
  - Lima chip terbungkus 3 baris di HP (±120 px).
  - Klik atau Enter pada tab memicu `UKP.go(..., { replace: true })`, sehingga halaman dirender ulang, fokus pindah ke h1 "Kemajuan", dan posisi gulir kembali ke 0.
  - Pengguna papan ketik harus Tab ulang ke deretan tab.
  - Tidak ada `role=tablist/tab`. Pola yang sama ada di Referensi dan Lembar (chip kelompok).
- **Bukti:** `hp-77-kemajuan-peta.png`, log `kemajuan` (fokus = h1 di kelima tab), uji Enter di `ukur.js`.
- **Lokasi:** `js/views-alat.js › UKP.views.kemajuan` (baris 304–305). Juga `UKP.views.referensi`.
- **Usulan:**
  - Komponen `UKP.c.tab({ label, item: [[id, teks]], aktif, onPilih })` di `core.js`: `role=tablist`, `role=tab`, `aria-selected`, roving `tabindex`, ←/→/Home/End.
  - Konten dirender ke `role=tabpanel` **tanpa** mengganti seluruh halaman. Params diperbarui lewat `UKP.perbaruiParams({ tab })`, yang sudah ada.
  - Indikator garis bawah 2 px bergeser antar-tab (transform translateX + width, 160 ms).
  - HP: satu baris gulir horizontal dengan scroll-snap.
  - Fokus tetap di tab.
- **Agen:** impl-alat (core + views-alat) + impl-css (`.tablist`).

**KM-2 · P2 · Visualisasi tidak bisa dijelajahi**
- **Teramati:**
  - Heatmap kelompok × topik punya 47 sel bertautan, tetapi tampil identik dengan sel biasa (tanpa kursor, hover, atau garis bawah).
  - Heatmap kelompok × jenis soal dan batang "Sebab kesalahan" tidak bisa diklik sama sekali, padahal masing-masing punya tindakan alami (Latih kelompok × jenis; Buku Kesalahan disaring tag).
- **Bukti:** `hp-78-kemajuan-peta-penuh.png`, `desktop-79-kemajuan-peta-penuh.png`.
- **Lokasi:** `js/views-alat.js › UKP.views.kemajuan` (tab peta, baris 323–356). `js/viz.js › V.heatmap` (baris 257) dan `V.batang` (baris 91).
- **Usulan:** Momen 4. Tambahkan `tautan`/`aksi` ke `V.batang` (per butir) dan ke heatmap jenis.
- **Agen:** impl-belajar (viz.js) + impl-alat (pemanggil).

**KM-3 · P3 · Sel Kartu Hadir tidak interaktif**
- **Usulan:** sel menjadi tombol. Klik/Enter menampilkan ringkasan hari di bawah kalender ("Kam 29 Okt · HADIR · 13 mnt · 2 sesi · 23 soal, 13 benar") dari `s.sesi` + `s.jawaban`. Hari ini disorot dan dipilih secara bawaan.
- **Lokasi:** `js/views-home.js › UKP.c.hadirBulan`.
- **Agen:** impl-belajar.

**KM-4 · P3 · Lencana tanpa progres**
- **Bukti:** `hp-83-kemajuan-lencana.png`.
- **Usulan:** lencana BELUM menampilkan bar progres dan teks ("200 Soal · 73/200 · kurang 127"; "7 Hari Hadir · rangkaian 1/7"). Lencana yang baru diraih mendapat stempel 420 ms saat tab dibuka pertama kali setelah diraih.
- **Agen:** impl-alat.

**KM-5 · P3 · Buku Kesalahan tanpa status "sudah benar"**
- **Usulan:** setelah "Kerjakan ulang" benar di dialog, baris itu mendapat pill "sudah benar 1×" (fade 160 ms) dan opsi teks "Keluarkan dari buku". Opsi terakhir butuh dukungan data di `learn.js`; **tahap 2**.
- **Agen:** impl-alat.

### 3.11 Peta formulir, Lembar angka, Referensi, Info ujian, Pengaturan

**PF-1 · P3 · Baris formulir tanpa navigasi antarbaris**
- **Teramati:** daftar → formulir → halaman baris (3 tingkat). Di halaman baris tidak ada ‹ › ke baris sebelumnya/berikutnya.
- **Bukti:** `hp-85-formulir.png`, `hp-87-formulir-baris.png`.
- **Lokasi:** `js/views-alat.js › rincianBaris()` (baris 709).
- **Usulan:** navigasi lengket "‹ Baris 1 · 2 / 40 · Baris 3 ›" (pola `nav-topik`) dan pintasan J/K. Pencarian baris menyorot kecocokan dengan `<mark>`.
- **Agen:** impl-alat.

**LA-1 · P3 · Lembar angka hanya baca**
- **Teramati:** "Jadikan kartu" bekerja baik: label berubah "Sudah jadi kartu", fokus tetap, dan toast muncul.
- **Bukti:** `hp-90-lembar-jadikan-kartu.png`.
- **Usulan:** Momen 10 (uji diri).
- **Agen:** impl-alat.

**RF-1 · P3 · Referensi: saringan tersembunyi dan tanpa sorot**
- **Teramati:** kueri "bunga" tetap terpasang saat berpindah tab, tanpa penanda. Hasil tidak menyorot kata yang cocok. Tab berupa chip terbungkus (lihat KM-1).
- **Bukti:** `hp-92-referensi-cari.png`.
- **Usulan:** chip status "Menyaring: bunga ×" di atas hasil; `<mark>` pada kecocokan (escape dulu, seperti `UKP.c.sorot`); tablist (KM-1).
- **Agen:** impl-alat.

**IU-1 · P2 · Info ujian tanpa daftar isi**
- **Teramati:** 11.115 px di HP (7.348 px di desktop) dengan 12 bagian lipat. Untuk mencari "Cek perangkat" atau "Jadwal periode", pengguna harus menggulir panjang.
- **Bukti:** `hp-96-info-penuh.png`.
- **Lokasi:** `js/views-alat.js › UKP.views['info-ujian']` (baris 493).
- **Usulan:**
  - Daftar isi di bawah kop: chip gulir horizontal di HP, kolom kanan lengket ≥ 1280.
  - Bagian aktif ditandai lewat IntersectionObserver (`aria-current="true"`, garis kiri 2 px).
  - Klik menggulir halus dan memfokus judul bagian. Tombol "Ke atas" muncul setelah 1,5 layar.
- **Agen:** impl-alat.

**PG-1 · P3 · Pengaturan tanpa konfirmasi "Tersimpan"**
- **Teramati:** perubahan tersimpan otomatis. Hanya tema yang memberi umpan kasatmata.
- **Bukti:** `hp-97-pengaturan.png`.
- **Usulan:** di kanan label kartu grup ("Target", "Tampilan & belajar"), teks kecil "Tersimpan" dengan centang tergambar yang muncul 1,5 dtk setelah perubahan (`role=status`, fade 160 ms).
- **Agen:** impl-alat.

### 3.12 Pencarian

**CR-1 · P3 · Kueri kosong = layar kosong**
- **Bukti:** `hp-100-cari.png` (awal).
- **Usulan:** saat kueri kosong, tampilkan:
  - "Terakhir dibuka" (maks 5, dari riwayat in-memory atau `sessionStorage`).
  - "Lompat ke" (Latih soal, Simulasi, Kalkulator, Lembar angka).
  - Contoh kueri yang bisa diklik ("PTKP", "1770", "A2-045").
- **Agen:** impl-alat.

**CR-2 · P3 · Hasil tidak dikelompokkan dan tanpa sorot**
- **Teramati:** 12 hasil bercampur. Label jenis ada per baris, tetapi tidak ada pengelompokan atau sorot kata.
- **Bukti:** `hp-101-cari-2.png`, `hp-102-cari-panah.png`.
- **Usulan:**
  - Kelompokkan per jenis dengan kop kecil (Topik, Kalkulator, Istilah, Peraturan, Formulir) dan pertahankan urutan skor dalam grup.
  - `<mark>` pada kecocokan.
  - Hint kbd di kaki dialog: "↑↓ pilih · Enter buka · Esc tutup".
- **Agen:** impl-alat.

### 3.13 Tutor (tanpa sample)

**TT-1 · P1 · Kontrol mati dan label AI keliru**
- **Teramati (dari topbar, tanpa `window.claude`):**
  - Banner "Tutor AI aktif hanya saat halaman ini dibuka di aplikasi Claude" tampil, **tetapi** 4 chip saran, kotak tanya, dan tombol Kirim tetap aktif.
  - Klik chip menambahkan pesan yang berlabel **"Tutor · dihasilkan AI"**, padahal isinya teks sistem.
  - Mengetik pertanyaan + Enter menambahkan pesan sistem yang **sama** lagi. Pertanyaan pengguna tidak muncul sebagai gelembung dan tetap tertinggal di kotak, karena `kirim()` kembali sebelum `tampilkanPesan(teks,'saya')` dan sebelum mengosongkan input.
- **Bukti:** `hp-105-tutor.png`, `hp-106-tutor-chip.png`, `hp-107-tutor-kirim.png`.
- **Lokasi:** `js/views-alat.js › T.buka` (baris 849–935): `kirim()` (cabang `!T.sample`) dan `tampilkanPesan()`.
- **Usulan — saat `!T.sample`, render keadaan "tidak tersedia" yang jujur:**
  - Sembunyikan chip saran, kotak tanya, dan Kirim.
  - Satu kotak info (label "Info", bukan "Tutor · dihasilkan AI").
  - Tiga aksi kontekstual yang **benar-benar bekerja**:
    - konteks soal → "Buka pembahasan lengkap" (tutup dialog, fokus ke `.umpan`);
    - konteks topik → "Cek 5 soal topik ini";
    - umum → "Cari istilah" (buka `UKP.cari`).
  - `tampilkanPesan` menerima jenis `'sistem'` dengan label "Info".
- **Agen:** impl-alat.

**TT-2 · P2 · Tutor dari topbar selalu konteks "Umum"**
- **Teramati:** dibuka di halaman topik A2.8, dialog tetap menampilkan chip konteks "Umum". `js/app.js` memanggil `UKP.konteksTutorSaatIni`, tetapi fungsi itu tidak pernah didefinisikan (grep: hanya satu kemunculan).
- **Bukti:** `hp-107-tutor-kirim.png` (crumb "Belajar › A2 › Topik 8" di belakang dialog, chip "Umum").
- **Lokasi:** `js/app.js › bangunShell` (baris 39).
- **Usulan:**
  - Definisikan `UKP.konteksTutorSaatIni` di `core.js`. Ia membaca `UKP.sekarang()`:
    - topik → `{ topik: K.topik(params.id) }`
    - kalkulator → `{ kalkulator }`
    - kasus → `{ kasus: K.kasus(params.id) }`
  - Atau sediakan `UKP.setKonteksTutor(obj)` yang dipanggil view saat render (dan dikosongkan di `render()`).
- **Agen:** impl-alat.

### 3.14 Lintas alur (global)

**GL-1 · P2 · Tidak ada transisi antar-view**
- **Teramati:** `animationName` pada `.page` adalah `none`. Isi `<main>` diganti seketika. Ditambah render 150–470 ms di ponsel, pergantian terasa "patah".
- **Lokasi:** `js/core.js › render()` (baris 482–514).
- **Usulan:**
  - Setelah `main.appendChild(out)`, bila bukan `renderUlang`, tambahkan kelas `masuk` pada node halaman.
  - CSS: `.page.masuk { animation: halaman-masuk 120ms var(--ease) both; }` dengan `@keyframes halaman-masuk { from { opacity: 0; transform: translateY(4px); } }`.
  - Nonaktif untuk `prefers-reduced-motion` dan `[data-gerak="kurang"]`.
  - Jangan dipakai untuk `renderUlang` (sinkron tab, perubahan pengaturan) agar tidak berkedip.
  - Mode ujian: tanpa animasi antarsoal; cukup ganti isi.
- **Agen:** impl-alat (core) + impl-css.

**GL-2 · P3 · Toast bertahan lintas rute dan tanpa aksi**
- **Teramati:** toast "Kartu ditambahkan ke dek Ulang A1." masih tampil setelah pindah ke Referensi (diuji ulang dengan `ukur.js`). Di HP, toast menutupi baris konten di atas bar bawah. Toast muncul tanpa transisi dan tidak bisa membawa aksi (mis. Batalkan).
- **Bukti:** `hp-92-referensi-cari.png`.
- **Lokasi:** `js/core.js › UKP.toast` (baris 354), `render()`.
- **Usulan:**
  - Signatur `UKP.toast(teks, ms | { ms, aksi: { label, fn }, lintasRute })`.
  - Di `render()` (bukan `renderUlang`), sembunyikan toast kecuali `lintasRute`.
  - Masuk: translateY(8px) → 0 + opacity, 160 ms. Keluar: 120 ms.
  - Toast beraksi berupa elemen fokus-able. Tidak mencuri fokus; umumkan "Tekan Alt+Z untuk membatalkan" bila ada aksi. Alternatifnya, letakkan aksi di `role=status` + tombol.
- **Agen:** impl-alat + impl-css.

**GL-3 · P3 · Pintasan tidak terlihat**
- **Teramati:** teks "Enter"/"pintasan" tidak ada di layar soal. Pintasan hanya ditemukan lewat `?` atau setelah membalik kartu (pointer halus).
- **Usulan:**
  - Pada `(hover: hover) and (pointer: fine)`, baris kbd kecil di `.sticky-actions` soal: `A–D pilih · Enter periksa · Enter lanjut`.
  - Tombol Cari topbar menampilkan `<kbd>/</kbd>` di ≥ 1024.
  - Kaki dialog pintasan menyertakan pintasan CAT baru (SM-2).
- **Agen:** impl-belajar (soal.js) + impl-alat (app.js).

**GL-4 · P3 · Muat awal tanpa indikator**
- **Teramati:** ±4,3 MB skrip data dimuat sebelum boot. `<main>` kosong sampai `boot()`. Di file:// dengan CPU 4×, FCP 812 ms; saat dihosting di jaringan seluler akan jauh lebih lama.
- **Lokasi:** `index.html` (`<main id="main">`).
- **Usulan:** isi statis di `<main>`: `<div class="page muat" aria-busy="true"><p class="eyebrow">Memuat materi…</p><div class="skeleton"></div>×3</div>`. Isi ini otomatis tergantikan oleh render pertama (`main.textContent = ''`). Skeleton dengan pulsa opacity 1,2 dtk; statis bila reduced-motion.
- **Agen:** impl-css (jatah `index.html` shell).

---

## 4. Pola dan aturan gerak (kontrak bersama)

Prinsip: **gerak menjelaskan perubahan keadaan, bukan hiasan.** Setiap animasi harus menjawab "apa yang baru saja berubah?".

| Kategori | Durasi | Properti | Contoh |
|---|---|---|---|
| Umpan sentuh (hover, tekan, pilih) | 120 ms | `border-color`, `background-color`, `transform: translateY(1px)` | opsi soal, chip, tombol |
| Masuk elemen / ganti isi | 160 ms | `opacity`, `transform: translateY(4–8px)` | panel umpan, kartu baru, CTA lengket, toast |
| Progres berubah | 160 ms | `width` / `transform: scaleX` | segmen sesi, garis progres Latih, Rencana, bar ujian |
| Pergantian halaman | 120 ms | `opacity` + `translateY(4px)` | `.page.masuk` |
| Lembar/dialog | 200 ms | `transform: translateY(100%)` → 0 (sheet), `opacity` (dialog) | Daftar soal, Tutor, Cari |
| Angka penting | 400 ms | count-up teks (JS, `requestAnimationFrame`) | skor simulasi, rangkaian, akurasi Latih |
| Pencapaian | 420 ms (sudah ada) | `stempel-tekan` | HADIR, TUNTAS, MINGGU TUNTAS, lencana |

**Aturan:**

- **Easing:** pakai `var(--ease)` yang sudah ada. Tanpa pantulan, tanpa getar (shake) untuk jawaban salah. Salah ditandai warna + ikon + teks, bukan gerakan menghukum.
- **Reduced-motion:** semua durasi 0 di bawah `@media (prefers-reduced-motion: reduce)` **dan** `:root[data-gerak="kurang"]`. Count-up langsung menampilkan nilai akhir. Ikuti pola blok yang sudah ada di `css/app.css` baris 784–798 dan 1178–1183.
- **Sekali per peristiwa:** animasi pencapaian hanya pada render pertama setelah peristiwa. Simpan penanda di variabel modul atau `sessionStorage`, bukan setiap render.
- **Ruang paralaks dilarang.** Tanpa bayangan berat; elevasi memakai garis (lihat DESAIN-V6). Tanpa gradien mencolok.
- **Fokus tidak pernah dicuri oleh animasi.** Elemen yang masuk tidak menerima fokus kecuali hasil tindakan pengguna (pola sekarang: h1 setelah rute, `.inti` setelah Periksa).
- **Pengumuman:** setiap umpan visual yang penting memiliki padanan teks di wilayah `role=status` yang sudah ada (`#live`, `p[role=status]` di soal, `#kal-ringkas`).

**Peta pintasan terpadu** (tampil di dialog `?` dan sebagai kbd pada pointer halus):

| Konteks | Tombol |
|---|---|
| Global | `/` atau Ctrl/Cmd+K Cari · `?` Bantuan |
| Soal (belajar) | A–D pilih · Enter Periksa / Lanjut · `T` Tidak tahu (LT-4) · `Y`/`R` Yakin/Ragu (Momen 2) |
| Kartu | Spasi balik · 1/2/3 Lupa/Ingat/Mudah |
| Simulasi | A–D · ←/→ (J/K) soal · `R` ragu · `G` grid |
| Sesi | Esc konfirmasi akhiri (SS-1) |
| Formulir baris | J/K baris (PF-1) |

Abaikan pintasan satu huruf saat mengetik, saat dialog terbuka (kecuali di dalamnya), atau bila `pengaturan.pintasan === false`. Pakai `mengetik()` dari `app.js`.

---

## 5. Sepuluh momen interaktif paling bernilai untuk pelajar ujian

Dipilih karena menyentuh mekanisme belajar yang terbukti (ingat aktif, umpan segera, kalibrasi keyakinan, latihan terarah) dan karena pelajar ujian melakukannya setiap hari. Semua momen hormat reduced-motion dan bisa dipakai penuh dengan papan ketik.

### Momen 1 — Rangkaian yang terasa (Hari Ini + Bukti)

- **Pemicu:** sesi pertama tercatat hari ini (`UKP.hadir.catat('HADIR')`).
- **Perilaku:**
  - Bukti Sesi menampilkan strip 7 hari. Sel hari ini kosong lalu "dicap" HADIR (`.stempel.diraih` mini, 420 ms).
  - Angka rangkaian count-up n−1 → n (400 ms).
  - Kembali ke Hari Ini, kartu sesi beralih ke keadaan selesai (HI-1): "Hari ini HADIR · rangkaian 3 hari · 13 mnt".
  - Setelah pukul 18.00 tanpa HADIR, kartu sesi memuat satu baris tenang "Jaga rangkaian: Kilat 5 cukup".
- **Batas:** tanpa ikon api atau emoji. Kata "rangkaian" dan stempel cukup. IZIN/CUTI tetap tidak memutus (logika sudah ada).
- **Lokasi:** `views-home.js › bukti()`, `beranda › gambarSesi()`.
- **Agen:** impl-belajar.

### Momen 2 — Keyakinan sebelum memeriksa (kalibrasi)

> **v7.7 — opsional, bawaan mati.** Bawaan Latih, sesi, dan cek kini *jawab langsung*: memilih opsi (klik atau `A`–`D`) langsung menilai dan membuka pembahasan, tanpa Periksa dan tanpa segmen keyakinan (`keyakinan` dicatat `null`). Momen 2 di bawah hanya berlaku bila pengguna menyalakan Pengaturan › Tampilan dan belajar › **Periksa dulu sebelum lihat jawaban** (`profil.jawabLangsung === false`). Simulasi, ulas, dan diagnosis ringkas tidak berubah.

- **Pemicu:** opsi dipilih dalam mode belajar (Latih, sesi, cek).
- **Perilaku:**
  - Di atas Periksa muncul segmen kecil tiga pilihan "Yakin · Ragu · Menebak" (`Y`/`R`/`M`). Opsional, bawaan tidak dipilih.
  - Setelah Periksa, kop umpan menampilkan kombinasi:
    - **"Yakin tetapi keliru"** (tone attn, ikon segitiga): soal ini paling berharga untuk diulang (efek hiperkoreksi). Tombol "Jadikan kartu" ditonjolkan; kartu otomatis sudah dibuat untuk jawaban salah.
    - **"Menebak dan benar"**: pill "beruntung · ulang besok".
  - Ringkasan Latih (LT-3) menampilkan baris kalibrasi: "Yakin: 6 (5 benar) · Ragu: 3 (1 benar)".
- **Gerak:** segmen muncul 120 ms setelah opsi dipilih (opacity + translateY 4 px).
- **Data:** tahap 1 hanya tampilan (disimpan di status komponen dan ringkasan sesi lokal). Tahap 2 menyimpan `keyakinan` pada entri jawaban; butuh `learn.js`, **di luar jatah putaran ini**.
- **Lokasi:** `js/soal.js › UKP.c.soal`, `UKP.c.umpan`.
- **Agen:** impl-belajar.

### Momen 3 — "Tebak dulu" yang benar-benar menguji (kalkulator)

- **Pemicu:** sakelar "Tebak dulu". Pindahkan sakelar ke **atas** form, di bawah kop.
- **Perilaku:**
  - Kotak hasil diganti isian "Tebakan Anda: [label hasil utama]" (format sama dengan isian uang) + tombol "Periksa tebakan".
  - Setelah diperiksa, tampil baris perbandingan:
    - "Tebakan Rp32.360.000 · hasil Rp32.500.000 · selisih −Rp140.000 (0,43 %)".
    - Tanda: **tepat** (≤ 0,5 %), **dekat** (≤ 5 %), atau **jauh**.
  - Bila tebakan cocok dengan baris jejak "Pengecoh: …" (toleransi 0,5 %), tampilkan chip penjelasan: "Tebakan Anda sama dengan pengecoh: memakai kurs tengah, bukan kurs KMK". Data pengecoh sudah ada di `r.jejak` kalkulator kurs.
  - Lalu hasil lengkap terbuka (jejak hitung).
  - Riwayat 5 tebakan terakhir per kalkulator ditampilkan (per sesi halaman, tidak disimpan).
- **Gerak:** baris perbandingan masuk 160 ms. Nilai hasil count-up 400 ms dari tebakan ke hasil, membuat jarak terasa. Reduced-motion: langsung.
- **Aksesibilitas:** perbandingan diumumkan lewat `#kal-ringkas`.
- **Lokasi:** `views-alat.js › bangunForm()/hitung()`.
- **Agen:** impl-alat.

### Momen 4 — Peta kelemahan yang bisa diklik

- **Pemicu:** hover/fokus/klik sel heatmap atau batang di Kemajuan › Peta kelemahan.
- **Perilaku:**
  - Sel yang bertautan mendapat affordance: kursor penunjuk, garis tepi `--line-strong` saat hover (120 ms), cincin fokus.
  - Tooltip yang sudah ada (`pasangTip`) menampilkan "A1.6 PTKP · 54 · 9 soal · 2 hari lalu".
  - Klik membuka **panel aksi** kecil (popover atau sheet di HP): "Latih 10 soal topik ini" / "Baca ringkasan" / "Kartu topik ini".
  - Heatmap kelompok × jenis: klik → `UKP.go('latih', { kode, jenis, n: 10, mulai: true })`.
  - Batang "Sebab kesalahan": klik → Buku Kesalahan dengan grup tag itu dibuka dan digulir ke sana.
- **Aksesibilitas:** sel ber-`role=button` atau `a` dengan nama lengkap. Panel aksi berupa `dialog` non-modal dengan fokus pertama di aksi utama.
- **Lokasi:** `js/viz.js › V.heatmap/V.batang` (dukungan `aksi`), `views-alat.js › kemajuan`.
- **Agen:** impl-belajar (viz) + impl-alat.

### Momen 5 — Mode fokus simulasi dengan laju yang terlihat

- **Pemicu:** layar ujian (sudah tanpa navigasi situs).
- **Perilaku:**
  - Garis progres 3 px di bar: terjawab / ragu / kosong. Penanda "laju seharusnya" bergerak tiap menit (SM-1).
  - Pintasan ←/→, R, G (SM-2).
  - Pada sisa 5 menit, timer beralih ke tone warn (sudah ada) dan garis progres menampilkan jumlah kosong dengan angka.
  - Tombol "Tinjau ragu" di dialog Kirim (SM-5).
  - Di HP, menggeser ke bawah pada bar membuka Daftar soal, sebagai alternatif tombol (bukan satu-satunya jalan).
- **Gerak:** hanya progres (120 ms). Soal berganti tanpa animasi, seperti CAT.
- **Lokasi:** `js/views-simulasi.js › layarUjian`.
- **Agen:** impl-alat.

### Momen 6 — Ulas kesalahan berjenjang

- **Pemicu:** hasil simulasi (dan ringkasan Latih).
- **Perilaku:**
  - Halaman ulas dengan chip tingkat dan jumlahnya:
    1. **Salah** (15);
    2. **Ragu tetapi benar** (`r.ragu` ∩ benar);
    3. **Benar tetapi lambat** (> 240 dtk, data `r.detik`);
    4. **Kosong**.
  - Bawaan: tingkat 1. Setiap soal hanya-baca dengan umpan 4 blok (komponen sudah ada).
  - Progres "Ulas 3 / 15" dan tombol "Tandai paham" (lokal) atau "Jadikan kartu".
  - Setelah satu tingkat tuntas, tawarkan tingkat berikutnya: "Lanjut ke 3 soal ragu".
  - "Kembali ke hasil" mengembalikan posisi gulir hasil.
- **Gerak:** chip aktif dengan garis bawah bergeser 160 ms; progres 160 ms.
- **Lokasi:** `js/views-simulasi.js › ulas()` (jadikan mode `params.ulas`), `layarHasil()`.
- **Agen:** impl-alat.

### Momen 7 — Bukti Sesi yang bisa dibagikan

- **Pemicu:** Bukti Sesi tampil.
- **Perilaku:**
  - "Salin bukti" menyalin teks kuitansi monospace (BK-1). "Bagikan" memakai `navigator.share({ text })` bila tersedia.
  - Toast "Bukti disalin" (`role=status`).
  - Teks memuat tanggal, isi sesi, rangkaian, dan H-n ujian, tanpa data pribadi lain.
  - Opsional: "Salin minggu ini" di Laporan mingguan dengan format sama.
- **Gerak:** tombol berubah sementara "Disalin" dengan centang tergambar (120 ms), kembali setelah 2 dtk.
- **Lokasi:** `views-home.js › bukti()`.
- **Agen:** impl-belajar.

### Momen 8 — Buku besar kasus (stepper yang "membukukan")

- **Pemicu:** setiap langkah studi kasus dijawab benar.
- **Perilaku:**
  - Panel "Buku besar kasus" di panel kanan (≥ 1280) atau di bawah stepper. Setiap langkah benar menulis satu baris: "Penghasilan neto (NPPN) · Rp420.000.000"; "PKP · Rp352.000.000"; …
  - Baris baru "tertulis" dengan garis bawah yang tergambar dari kiri ke kanan (`scaleX` 0 → 1, 160 ms) dan nilai mono.
  - Ini identitas "Buku Besar & Stempel" yang bermakna: langkah hitung menjadi jejak pembukuan yang bisa dibaca ulang.
  - Saat kasus selesai, stempel SELESAI menutup buku besar dan tombol "Salin jejak" tersedia.
  - Rel stepper ringkas (KS-3): langkah selesai bisa diklik untuk melihat penjelasan.
- **Data:** label baris diambil dari `l.pertanyaan` (dipendekkan) dan nilai dari `l.jawaban`. Tanpa data baru.
- **Lokasi:** `views-belajar.js › UKP.c.stepper`.
- **Agen:** impl-belajar + impl-css.

### Momen 9 — Pratinjau topik saat hover/fokus

- **Pemicu:**
  - Desktop (pointer halus): hover 350 ms atau fokus papan ketik pada tautan topik (`.row-link[data-go="topik"]`, nav-topik, tautan di laporan/heatmap).
  - HP: tidak ada hover. Gunakan tombol kecil "i" di baris topik yang membuka sheet.
- **Perilaku:** kartu pratinjau 320 px:
  - kode + judul + stempel level;
  - 2 butir ringkasan pertama (dipotong 120 karakter);
  - 1 angka kunci teratas (mono);
  - "± 12 mnt · 5 soal cek";
  - tombol "Cek 5 soal" dan "Buka".
- **Gerak:** muncul 120 ms (opacity + translateY 4 px), hilang 80 ms. Tidak muncul saat menggulir cepat.
- **Aksesibilitas:** gunakan `popover="manual"` atau elemen `role=dialog` non-modal yang terhubung `aria-describedby`. Esc menutup. Fokus tidak pindah otomatis; Tab berikutnya masuk ke tombol pratinjau.
- **Lokasi:** komponen baru `UKP.c.pratinjauTopik(el, id)` di `views-belajar.js`, dipasang di kelompok, rencana, dan laporan.
- **Agen:** impl-belajar.

### Momen 10 — Lembar angka "uji diri"

- **Pemicu:** sakelar "Uji diri" di Lembar angka.
- **Perilaku:**
  - Kolom Nilai ditutup (blok bergaris `▢▢▢`, panjang mengikuti teks). Ketuk/Enter pada sel membuka nilainya, lalu muncul dua tombol kecil "Ingat" / "Lupa".
  - Progres di kop lembar: "Uji diri 12/30 · ingat 9".
  - Di akhir: "3 angka terlupa → Jadikan kartu (3)" memakai `kartuOtomatisDariPoin` yang sudah ada.
- **Gerak:** sel terbuka dengan crossfade 120 ms. Tanpa flip 3D (berbeda dengan kartu).
- **Aksesibilitas:** sel tertutup berupa `button` dengan nama "Tampilkan nilai: Tarif Pasal 17". Nilai yang terbuka diumumkan lewat `role=status`.
- **Cetak:** mode uji diri mencetak kolom nilai kosong (lembar latihan).
- **Lokasi:** `views-alat.js › UKP.views.lembar`.
- **Agen:** impl-alat.

---

## 6. Pembagian kerja per agen

Urutan dalam tiap daftar = urutan pengerjaan yang disarankan.

**impl-css** (`css/app.css`, `index.html` shell)
1. KL-1 tata letak: `.kalkulator-grid` (≥ 1024 dua kolom, hasil lengket) dan `.hasil-mini` (bar lengket < 1024, di atas `.bottomnav` / safe-area).
2. SS-1 mode fokus sesi desktop (`body[data-mode="sesi"] .sidebar { display: none }`, shell satu kolom, konten 760 px di tengah).
3. GL-1 `.page.masuk` + `@keyframes halaman-masuk`. GL-2 transisi toast.
4. KM-1 `.tablist` / `[role=tab]` dengan indikator bergeser; baris gulir horizontal di HP.
5. Kelas progres: `.seg-blok li .isi` (OB-3), garis progres bar ujian `.ujian-progres` (SM-1), progres minggu Rencana, progres dek Ulang.
6. LT-6 `.row-link .tag-sebab`; BL-3 `.card > .stempel`; SS-3 `.card .sticky-actions`; SM-4 pusatkan layar ujian.
7. KS-3 rel stepper ringkas; Momen 8 `.buku-besar` (baris tergambar); Momen 9 `.pratinjau-topik`; Momen 10 `.uji-diri` sel tertutup.
8. GL-4 skeleton di `index.html` `<main>` + `.skeleton`.
9. Semua di atas: blok reduced-motion dan `[data-gerak="kurang"]`.

**impl-belajar** (`views-home.js`, `views-belajar.js`, `soal.js`, `viz.js`)
1. HI-1 + Momen 1 (keadaan selesai di Hari Ini; strip dicap di Bukti).
2. OB-2 mode diagnosis ringkas; OB-3 sub-progres segmen; OB-4 peta awal.
3. LT-1 jumlah di tombol; LT-2 fase ulang; LT-3 ringkasan; LT-4 "Tidak tahu" (cek `learn.js` dulu).
4. BL-1 susunan kelompok; BL-2 lompat ke cek; BL-3 status di tempat; Momen 9 pratinjau.
5. UL-1 kop ringkas Ulang; UL-2 progres; UL-4 transisi kartu.
6. KS-2/3/4/5 + Momen 8 buku besar.
7. BK-1 + Momen 7 salin/bagikan; Momen 2 keyakinan (tahap tampilan).
8. `viz.js`: dukungan `aksi`/`tautan` untuk `V.batang` dan affordance sel heatmap (Momen 4); count-up angka pada `V.statTile` (400 ms, reduced-motion langsung).
9. GL-3 baris kbd di soal; HI-2/HI-3; SS-2/3/4; KM-3 sel hari interaktif.

**impl-alat** (`views-alat.js`, `views-simulasi.js`, `app.js`, `core.js`)
1. KL-1 struktur dua kolom/bar mini + kilat nilai; KL-2 pertahankan `details`; KL-3 + Momen 3; KL-4.
2. TT-1 keadaan Tutor tidak tersedia; TT-2 `UKP.konteksTutorSaatIni`.
3. GL-1 kelas `masuk` di `render()`; GL-2 toast beraksi dan pembersihan lintas rute.
4. KM-1 komponen `UKP.c.tab` (Kemajuan, Referensi); KM-2 pemanggil aksi heatmap/batang; KM-4 progres lencana; KM-5.
5. SM-1/SM-2/SM-5/SM-6 + Momen 5; SM-3 + Momen 6 ulas berjenjang.
6. KS-1 kembali ke kasus dari bar mini.
7. RC-1/RC-2 (RC-3 tahap 2).
8. IU-1 daftar isi; PF-1; RF-1; PG-1; CR-1/CR-2; Momen 10 uji diri lembar.

**Batas:**
- Jangan mengubah logika belajar, SRS, atau penilaian.
- Usulan yang butuh menyimpan data baru (keyakinan per jawaban, "keluarkan dari Buku Kesalahan", geser tugas ke besok, opsi "Tidak tahu" bila `catatJawaban` tidak mendukung `'-'`) dikerjakan sebagai **tampilan saja** atau ditunda ke tahap 2 dengan catatan di ringkasan agen.

---

## 7. Kriteria terima (uji Playwright yang disarankan)

Jalankan pada `file:///home/user/uskp-learn/index.html`, 390 × 844 dan 1366 × 900, tema terang dan gelap, plus 320 × 700 untuk luapan.

1. **KL-1** — Kalkulator `kurs`: fokus isian pertama, ketik `25000`. Elemen nilai utama (bar mini atau kolom kanan) berada di dalam viewport, dan teksnya berubah ≤ 500 ms.
2. **KL-2** — Buka "Dasar hukum & asumsi", ketik satu karakter. `details.open` tetap `true`.
3. **HI-1** — Selesaikan sesi Kilat lalu kembali ke Hari Ini. Kartu teratas memuat teks "tercatat" atau stempel HADIR, dan tombol utama bukan lagi "Mulai sesi".
4. **TT-1** — Tanpa `window.claude`, buka Tutor. Tidak ada `textarea` aktif dan tidak ada label "dihasilkan AI" pada pesan sistem. Ada ≥ 1 tombol aksi alternatif yang mengubah rute atau fokus.
5. **TT-2** — Buka Tutor dari topbar di halaman topik. Chip konteks memuat "Topik A2.8".
6. **KM-1** — Di Kemajuan, fokus tab kedua lalu tekan →. Fokus berada di tab ketiga, `aria-selected=true`, dan `document.activeElement` bukan h1.
7. **LT-2** — Latih 5 soal dengan 2 salah. Penyebut putaran utama tetap 5, dan ringkasan menyebut "5 soal".
8. **BL-3** — Setelah cek tuntas, penanda status topik tidak lagi "BELUM MULAI".
9. **SS-1** — Desktop, mode sesi: `getComputedStyle(.sidebar).display === 'none'`.
10. **GL-1** — Setelah `UKP.go`, `.page` memiliki `animationName` ≠ `none`, kecuali reduced-motion (= `none`).
11. **GL-2** — Toast dari halaman A tidak terlihat setelah pindah ke halaman B (kecuali `lintasRute`).
12. **Umum** — Tanpa galat konsol; tanpa luapan horizontal di 320 px; semua animasi `0s` di bawah `reducedMotion: 'reduce'`; fokus tidak pernah jatuh ke `BODY` setelah tindakan di alur §1.

---

## 8. Lampiran — tangkapan layar terpilih

Folder: `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/review/desain4/interaksi/`

| Alur | HP 390 | Desktop 1366 |
|---|---|---|
| Onboarding | `hp-02-ob-1-pilih`, `hp-05-ob-4-pilih` | `desktop-02-ob-1-pilih` |
| Diagnosis + umpan | `hp-07-diagnosis-awal`, `hp-09-diag-soal-umpan` | `desktop-09-diag-soal-umpan` |
| Bukti diagnosis | `hp-11-bukti-diagnosis-penuh` | `desktop-11-bukti-diagnosis-penuh` |
| Hari Ini sebelum/sesudah sesi | `hp-12-hariini`, `hp-13-hariini-penuh`, `hp-22-hariini-setelah-sesi` | `desktop-12-hariini`, `desktop-22-hariini-setelah-sesi` |
| Blok sesi | `hp-15-sesi-blok-Angka_hari_ini`, `hp-16-sesi-kartu-terbuka`, `hp-17-sesi-blok-Definisi_dan_istilah`, `hp-18-sesi-soal-pilih` | `desktop-19-sesi-soal-umpan` |
| Bukti sesi | `hp-20-bukti-sesi` | `desktop-20-bukti-sesi` |
| Belajar / kelompok / topik / cek | `hp-23-belajar`, `hp-24-kelompok`, `hp-27-topik-penuh`, `hp-30-cek-hasil` | `desktop-24-belajar-hover`, `desktop-27-kelompok-hover-topik`, `desktop-32-cek-hasil` |
| Latih | `hp-32-latih-filter-penuh`, `hp-37-latih-umpan-salah`, `hp-38-latih-selesai` | `desktop-34-latih-filter-penuh`, `desktop-40-latih-selesai` |
| Ulang | `hp-39-ulang`, `hp-40-ulang-terbuka`, `hp-41-ulang-setelah-5` | `desktop-41-ulang` |
| Studi kasus | `hp-43-kasus-awal`, `hp-45-kasus-ke-kalkulator`, `hp-47-kasus-salah`, `hp-48-kasus-selesai` | `desktop-45-kasus-awal`, `desktop-50-kasus-selesai` |
| Simulasi | `hp-52-sim-ujian-1`, `hp-56-sim-daftar-soal`, `hp-57-sim-kirim-dialog`, `hp-59-sim-hasil-penuh`, `hp-60-sim-ulas` | `desktop-57-sim-ragu`, `desktop-60-sim-hasil-penuh` |
| Kalkulator | `hp-62-kal-kurs`, `hp-63-kal-kurs-penuh`, `hp-65-kal-kurs-tebak`, `hp-66-kal-kurs-galat`, `hp-67-kal-gmt` | `desktop-63-kal-kurs`, `desktop-68-kal-gmt` |
| Rencana | `hp-73-rencana-penuh`, `hp-74-rencana-centang` | `desktop-75-rencana-centang` |
| Kemajuan | `hp-75-kemajuan-kartu`, `hp-78-kemajuan-peta-penuh`, `hp-79-kemajuan-buku`, `hp-81-kemajuan-laporan`, `hp-83-kemajuan-lencana` | `desktop-79-kemajuan-peta-penuh` |
| Formulir / Lembar / Referensi | `hp-85-formulir`, `hp-87-formulir-baris`, `hp-90-lembar-jadikan-kartu`, `hp-92-referensi-cari` | `desktop-89-lembar`, `desktop-93-referensi-cari` |
| Info ujian / Pengaturan | `hp-96-info-penuh`, `hp-97-pengaturan`, `hp-99-pengaturan-gelap` | `desktop-97-info-penuh`, `desktop-100-pengaturan-gelap` |
| Cari / Tutor | `hp-101-cari-2`, `hp-102-cari-panah`, `hp-104-cari-kosong`, `hp-105-tutor`, `hp-107-tutor-kirim` | `desktop-103-cari-panah`, `desktop-108-tutor-kirim` |

Potongan tambahan: `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/audit-interaksi/kal-kurs-hasil-crop.png` (kotak hasil kurs dengan baris "Pengecoh" di jejak hitung, bahan Momen 3).
