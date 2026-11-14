# Desain v9.6: tampilan halaman dalam

Dokumen ini mencatat arah tampilan yang dipasang di v9.6.0 sampai v9.6.5, aturan menulis gayanya, dan cara memeriksanya.
Sistem merek tetap yang ditetapkan di v8.3 dan v9.0 (lihat README bagian "Tampilan MABAR UKP"). Komponen dasar v7 ada di `docs/DESAIN-V7.md`.

## 1. Arah

Permintaan pemilik: tampilan dibuat lebih bagus. Sejak v9.0 Beranda sudah memakai wajah MABAR, tetapi halaman dalam masih polos.
Tiga usulan dibuat dan dinilai tiga penilai dengan lensa berbeda. Arah akhirnya gabungan:

- **Layar soal** dari usulan "soal dulu": satu lembar per soal, lencana huruf bulat, pita vonis, papan bersama yang rapi.
- **Wajah halaman dalam** dari usulan "selaras Beranda": kepala halaman berpita biru tua berkisi dan pilihan segmen terisi.
- **Penenang** dari usulan "tenang dan lega": kartu Materi beraksen tipis, tuts petunjuk tanpa bingkai, daftar dalam satu grup.

Yang ditolak: bayangan kartu, radius di atas 8, blur, latar gelap di bilah fokus dan pita angka, garis kendali di bawah 3:1, stem tebal.

## 2. Prinsip

1. **Satu bahasa dengan Beranda.** Kepala halaman baca dan pengaturan memakai pita Beranda dalam versi pendek.
2. **Sesi dan ujian tenang.** Layar soal tanpa pita, kisi, atau latar gelap. Simulasi dan ujian tim berjalan hanya mendapat lembar dan lencana.
3. **Satu lembar per soal.** Kop, stem, opsi, keyakinan, pembahasan, dan bar aksi berada di satu bidang. Di HP lembar selebar layar.
4. **Keputusan tegas, sisanya tenang.** Tiga keadaan tegas: terpilih atau kunci, salah, dan pilihan segmen. Yang lain garis tipis dan isi lembut.
5. **Kuning hemat.** Kuning dipakai untuk penanda pita, satu langkah utama per halaman hasil, tombol utama tema gelap, dan catatan Jebakan.
6. **Huruf membawa hierarki.** Space Grotesk untuk judul dan vonis, IBM Plex Mono untuk kode dan skor, Inter untuk isi dan kendali.
7. **Merek mengikat.** Tanpa bayangan dan gradasi, radius 4, 6, 8, warna dan huruf tetap. Token baru hanya `--v96-*`.

## 3. Token `--v96-*`

Didefinisikan di awal bagian "dasar bersama": `:root`, `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`, dan `:root[data-theme="dark"]`.
Dua pemilih tema gelap harus mendefinisikan himpunan token yang sama.

| token | guna |
|---|---|
| `--v96-pita`, `--v96-kisi`, `--v96-aksen`, `--v96-pita-teks` | latar, kisi 40 px, penanda kuning, dan teks redup di pita |
| `--v96-judul-h1`, `--v96-judul-bagian` | ukuran h1 di pita (26 sampai 36 px) dan judul bagian (22 px) |
| `--v96-kertas-pad`, `--v96-fs-stem`, `--v96-kop-garis` | padding lembar soal, ukuran stem, garis putus kop soal |
| `--v96-opsi-garis`, `--v96-opsi-hover`, `--v96-huruf-bg`, `--v96-huruf-ink` | tepi dan hover opsi, lencana huruf |
| `--v96-seg-trek` | trek pilihan segmen |
| `--v96-band-salah`, `--v96-band-benar`, `--v96-band-info`, `--v96-fs-vonis` | pita vonis |
| `--v96-buku-bg`, `--v96-jebakan-bg` | jejak hitung dan catatan Jebakan |
| `--v96-papan-bg` | wadah papan jawaban tiap orang |
| `--v96-fs-skor`, `--v96-skor-tepi` | angka skor dan tepi atas kartu Skor di halaman hasil |
| `--v96-papan-aktif`, `--v96-papan-aktif-cincin` | latar dan garis keliling baris aktif papan bersama |
| `--v96-pita-garis` | garis bawah pita di tema gelap |
| `--v96-kunci-ink`, `--v96-jebakan-garis` | teks pil Kunci jawaban dan garis kiri catatan Jebakan (kontras tema terang) |
| `--v96-seg-pilih-bg`, `-ink`, `-garis` | pilihan segmen aktif di tema gelap (hanya didefinisikan di dua pemilih gelap) |
| `--v96-hal-surface`, `-surface-3`, `-ink`, `-muted`, `-line`, `-line-strong`, `-attn`, `-focus` | salinan token tema halaman, dihitung di `:root`. Dipakai daftar menu yang terbuka dari dalam pita supaya tidak ikut pulau gelap pita. |

## 4. Komponen dan kait kelas

| komponen | kait | catatan |
|---|---|---|
| Kepala berpita | `UKP.c.kop({ pita: true })` memberi `.page-head.kop-pita` | Dipakai Simulasi, Latih soal, Peta materi, Cakupan, Bank soal, Kemajuan, Dasbor tim, Pengaturan, Kalkulator, Hasil simulasi, Evaluasi tim dan Hasil ujian tim di Dasbor, sejak v9.6.4 Rencana, Info ujian, Referensi, Peta formulir, Studi kasus, dan Strategi pilihan ganda, serta sejak v9.6.5 semua halaman room di luar sesi (lewat satu pembantu `kop` di `js/views-ruang.js`), Latihan selesai, dan Latihan bersama selesai. Jangan menulis kelas `kop-pita` langsung. Halaman lain cukup menambah `pita: true`. |
| Kepala berpita tanpa `UKP.c.kop` | `UKP.c.kelasPita` (konstanta di `js/core.js`) | Untuk kepala buatan sendiri, yaitu `.eval-kop` Evaluasi tim di alur latihan. Tulisan kelas pita tidak boleh muncul di berkas views. `UKP.c.evaluasiBersama` punya opsi `sesudahKop`: simpul milik pemanggil (pemberitahuan "Ke lobi room") ditaruh tepat sesudah kepala, supaya pita tetap menempel ke kop atas. |
| Tumpukan pita | `.page-head.kop-pita { z-index: 1 }` | Di bawah bilah lengket (5) dan kop situs (9). Perlu supaya daftar menu room yang terbuka dari dalam pita tidak tertutup kartu di bawahnya. |
| Pilihan segmen | `.seg` di `main` dan di `dialog` (kecuali pil keyakinan) | Tema terang: terpilih berisi `--primary-fill`. Tema gelap: latar `--v96-seg-pilih-bg` dengan garis dalam kuning 2 px, supaya kuning tetap hemat. Bentuk daftar di HP (`.seg.bersub`, `.seg.seg-bank`) punya tanda centang berwarna teks. Aturan segmen ditulis berpasangan `main .seg ..., dialog .seg ...`. |
| Lembar soal | `.latih-area > .soal`, `.halaman-ujian .konten-ujian .soal` | Opsi minimal 56 px, lencana bulat 30 px sejajar baris pertama. |
| Keadaan opsi | `[data-dipilih]`, `label[data-hasil="kunci" atau "salah"]` | Garis 2 px dibuat dari garis 1 px ditambah garis dalam 1 px. |
| Pembahasan | `.status.status-besar`, `.umpan-salah-opsi`, `.umpan-jebakan` | Aksen kiri pita vonis memakai garis kiri panel yang sudah ada. |
| Papan bersama | kelas papan lama | Tinggi baris dan ukuran tombol tidak diubah. Hasil tiap orang berupa pil. |
| HP anggota di room | `.halaman-room .stem-room`, `.opsi-room`, `.yakin-room` | Hanya CSS. `js/ruang.js` tidak disentuh. Daftar opsi adalah bacaan tanpa bingkai: `li` tidak punya penangan klik, dan jawaban hanya masuk lewat tombol huruf besar. |
| Halaman hasil | `.kartu-langkah`, `.daftar-skor` | Satu langkah utama berisi kuning. |
| Daftar dalam kartu | `.list-rows.daftar-kartu` | Simulasi terakhir, Buku Kesalahan terbaru, Keliru pada percobaan pertama. |
| Kartu Materi | `.card.klik.kartu-kelompok` | Aksen kiri 3 px warna tingkat. Tanpa dukungan `:has` (kelas `html.tanpa-has`) kartu memakai garis kiri lama. |

Pita tidak tampil di Beranda (punya pita sendiri), layar sesi (`body[data-mode="fokus"]`, termasuk layar soal, terkirim, dan hasil di HP anggota room serta papan pemimpin), layar ujian, Topik, saat cetak, dan di mode forced-colors.

## 5. Aturan menulis gaya

- Gaya v9.6 ada di AKHIR `css/app.css`, di dalam bagian berpagar `/* ===== v9.6 tampilan: <nama> ===== */` sampai `/* ===== akhir v9.6 <nama> ===== */`. Tambahan berikutnya masuk ke bagian yang sesuai atau bagian berpagar baru sesudahnya. Batas besarnya 50 KB (45 KB sampai v9.6.4).
- Jangan mengedit aturan lama di tengah berkas. Timpa dari bagian v9.6 dengan pemilih yang lebih spesifik, lalu periksa hasil terhitungnya. Contoh nyata: tanda centang pilihan berbentuk daftar sempat tidak terlihat karena aturan lama `.seg.bersub button:is(...)::before` lebih spesifik daripada aturan baru.
- Fitur yang tidak dipakai, supaya Safari dan Android lama tetap utuh: `border-image`, `color-mix()`, `:has()`, `@container`, `@layer`, penulisan bersarang, `backdrop-filter`, dan satuan `dvh`. `test/v94-kb.test.js` juga menolak `:has(` sesudah blok v9.4 Kb.
- Pita selebar layar dibuat dengan `::before`. Bawaannya selebar isi ditambah gutter. Di dalam `@supports (overflow-x: clip)` pita menjadi `100vw` yang dipusatkan dan luapan mendatar dipotong di `main`. `clip` tidak membuat wadah gulir, jadi `position: sticky` tetap jalan.
- Bayangan hanya garis dalam (`inset`). Tanpa gradasi.
- Yang bukan kendali jangan diberi rupa kendali. Di v9.6.0 daftar opsi HP anggota room sempat berbingkai seperti opsi latihan, sehingga tampak bisa diketuk (dibetulkan di v9.6.3).
- Saat memberi gaya menurut `data-hasil`, tulis semua nilainya (`benar`, `salah`, `sebagian`, `info`, `kosong`) dan jadikan nilai netral sebagai bawaan. Di v9.6.0 pita vonis `sebagian` sempat ikut hijau (dibetulkan di v9.6.2).
- Aturan lama untuk HP sering menghitung ukuran lama (mis. lencana 28 px). Sesudah mengubah ukuran komponen, ukur ulang layar HP yang memakainya.
- `:where()` tidak dipakai untuk pita: peramban lama membuang seluruh aturan yang memuatnya, lalu teks putih pita bisa tampil di latar terang.
- Perilaku dan teks layar tidak diubah oleh pekerjaan tampilan. Markup hanya boleh ditambah kelas atau pembungkus.

## 6. Cara memeriksa

1. `node --test test/`. Penjaga gaya ada di `test/v960-tampilan.test.js`; alat potret diuji `test/v960-potret.test.js`.
2. Potret lokal: `node tools/potret-layar.js potret . <folder>` memotret 37 layar (45 gambar: HP terang, HP gelap, laptop) dengan Chromium. Soal yang tampil tetap karena `Math.random` diberi benih.
3. Potret mesin Safari: tiap dorongan ke `main` menjalankan `.github/workflows/potret-webkit.yml` (WebKit, profil iPhone). Uji room WebKit di `cek-jalur-room.yml` ikut memotret layar pemimpin dan HP anggota. Gambar dikirim sebagai catatan check run "Potret layar webkit" dan "Potret room webkit". Sejak v9.6.5 `.github/workflows/potret-webkit-lama.yml` memotret 16 layar di WebKit lama lewat paket Playwright lama (1.23.0 dan 1.34.0, kira-kira Safari 15.4 dan 16.4); check run-nya bernama "Potret layar webkit lama <versi>". WebKit 15.4 tidak mengenal `overflow-x: clip`, jadi di sana terlihat pita cadangan.
4. Ambil gambar: `node tools/potret-layar.js ambil <pemilik/repo> <sha> <folder>` (butuh CLI `gh`). Situs tayang dari cabang `gh-pages`, jadi gambar bisa dilihat sebelum situs diperbarui.
5. Yang juga perlu dilihat saat mengubah gaya: lebar 320, 390, 1280, dan 1366x768 tanpa gulir mendatar; tema gelap; `data-teks="besar"`; forced-colors; cetak; papan bersama dengan 10 nama; simulasi dan ujian tim yang sedang berjalan.

## 7. Yang sengaja belum

- Topik dan Etika & Profesi belum berpita (kepalanya ada di dalam kisi Kelompok).
- Pita Cakupan dan Dasbor tim lebih tinggi dari halaman lain karena isi kepalanya sendiri (remah, lead panjang, tombol). Lead Cakupan dipotong dua baris sampai tombol Selengkapnya diketuk.
- Di layar pendek (tinggi 800 px ke bawah) stem latihan bersama memakai 17 px supaya lebih banyak baris papan terlihat. Soal berstem panjang tetap perlu digulir sebelum papan terlihat.
- Di dialog Mulai latihan bersama pada HP 390, chip Yang ikut ketiga masih terpotong kaki dialog di layar pertama. Dialognya bisa digulir.
- Huruf pada "Mengapa opsi lain salah" masih memuat titik, dan kartu Soal hari ini di Beranda masih memakai huruf opsi kotak.
- HP sungguhan tidak bisa diuji dari lingkungan kerja. Safari versi lama didekati dengan WebKit lama di GitHub (lihat bagian 6), yang bukan perangkat asli.
