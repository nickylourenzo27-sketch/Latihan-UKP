# Desain v9.6: tampilan halaman dalam

Dokumen ini mencatat arah tampilan yang dipasang di v9.6.0 dan v9.6.1, aturan menulis gayanya, dan cara memeriksanya.
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
| `--v96-fs-skor` | angka skor di halaman hasil |

## 4. Komponen dan kait kelas

| komponen | kait | catatan |
|---|---|---|
| Kepala berpita | `UKP.c.kop({ pita: true })` memberi `.page-head.kop-pita` | Dipakai Simulasi, Latih soal, Peta materi, Cakupan, Bank soal, Kemajuan, Dasbor tim, Pengaturan, Kalkulator, Hasil simulasi, Evaluasi tim, dan Hasil ujian tim. Jangan menulis kelas `kop-pita` langsung. Halaman lain cukup menambah `pita: true`. |
| Pilihan segmen | `.seg` (kecuali pil keyakinan) | Terpilih berisi `--primary-fill`. Bentuk daftar di HP (`.seg.bersub`, `.seg.seg-bank`) punya tanda centang berwarna teks. |
| Lembar soal | `.latih-area > .soal`, `.halaman-ujian .konten-ujian .soal` | Opsi minimal 56 px, lencana bulat 30 px sejajar baris pertama. |
| Keadaan opsi | `[data-dipilih]`, `label[data-hasil="kunci" atau "salah"]` | Garis 2 px dibuat dari garis 1 px ditambah garis dalam 1 px. |
| Pembahasan | `.status.status-besar`, `.umpan-salah-opsi`, `.umpan-jebakan` | Aksen kiri pita vonis memakai garis kiri panel yang sudah ada. |
| Papan bersama | kelas papan lama | Tinggi baris dan ukuran tombol tidak diubah. Hasil tiap orang berupa pil. |
| HP anggota di room | `.halaman-room .stem-room`, `.opsi-room`, `.yakin-room` | Hanya CSS. `js/ruang.js` tidak disentuh. |
| Halaman hasil | `.kartu-langkah`, `.daftar-skor` | Satu langkah utama berisi kuning. |
| Daftar dalam kartu | `.list-rows.daftar-kartu` | Simulasi terakhir, Buku Kesalahan terbaru, Keliru pada percobaan pertama. |
| Kartu Materi | `.card.klik.kartu-kelompok` | Aksen kiri 3 px warna tingkat. Tanpa dukungan `:has` (kelas `html.tanpa-has`) kartu memakai garis kiri lama. |

Pita tidak tampil di Beranda (punya pita sendiri), layar sesi (`body[data-mode="fokus"]`), layar ujian, lobi Mode mabar, Topik, saat cetak, dan di mode forced-colors.

## 5. Aturan menulis gaya

- Gaya v9.6 ada di AKHIR `css/app.css`, di dalam bagian berpagar `/* ===== v9.6 tampilan: <nama> ===== */` sampai `/* ===== akhir v9.6 <nama> ===== */`. Tambahan berikutnya masuk ke bagian yang sesuai atau bagian berpagar baru sesudahnya. Batas besarnya 45 KB.
- Jangan mengedit aturan lama di tengah berkas. Timpa dari bagian v9.6 dengan pemilih yang lebih spesifik, lalu periksa hasil terhitungnya. Contoh nyata: tanda centang pilihan berbentuk daftar sempat tidak terlihat karena aturan lama `.seg.bersub button:is(...)::before` lebih spesifik daripada aturan baru.
- Fitur yang tidak dipakai, supaya Safari dan Android lama tetap utuh: `border-image`, `color-mix()`, `:has()`, `@container`, `@layer`, penulisan bersarang, `backdrop-filter`, dan satuan `dvh`. `test/v94-kb.test.js` juga menolak `:has(` sesudah blok v9.4 Kb.
- Pita selebar layar dibuat dengan `::before`. Bawaannya selebar isi ditambah gutter. Di dalam `@supports (overflow-x: clip)` pita menjadi `100vw` yang dipusatkan dan luapan mendatar dipotong di `main`. `clip` tidak membuat wadah gulir, jadi `position: sticky` tetap jalan.
- Bayangan hanya garis dalam (`inset`). Tanpa gradasi.
- Perilaku dan teks layar tidak diubah oleh pekerjaan tampilan. Markup hanya boleh ditambah kelas atau pembungkus.

## 6. Cara memeriksa

1. `node --test test/`. Penjaga gaya ada di `test/v960-tampilan.test.js`; alat potret diuji `test/v960-potret.test.js`.
2. Potret lokal: `node tools/potret-layar.js potret . <folder>` memotret 29 layar utama (37 gambar: HP terang, HP gelap, laptop) dengan Chromium. Soal yang tampil tetap karena `Math.random` diberi benih.
3. Potret mesin Safari: tiap dorongan ke `main` menjalankan `.github/workflows/potret-webkit.yml` (WebKit, profil iPhone). Uji room WebKit di `cek-jalur-room.yml` ikut memotret layar pemimpin dan HP anggota. Gambar dikirim sebagai catatan check run "Potret layar webkit" dan "Potret room webkit".
4. Ambil gambar: `node tools/potret-layar.js ambil <pemilik/repo> <sha> <folder>` (butuh CLI `gh`). Situs tayang dari cabang `gh-pages`, jadi gambar bisa dilihat sebelum situs diperbarui.
5. Yang juga perlu dilihat saat mengubah gaya: lebar 320, 390, 1280, dan 1366x768 tanpa gulir mendatar; tema gelap; `data-teks="besar"`; forced-colors; cetak; papan bersama dengan 10 nama; simulasi dan ujian tim yang sedang berjalan.

## 7. Yang sengaja belum

- Referensi, Info ujian, Strategi, Studi kasus, Topik, dan lobi Mode mabar belum berpita.
- Pita Cakupan dan Dasbor tim lebih tinggi dari halaman lain karena isi kepalanya sendiri (remah, lead panjang, tombol).
- HP sungguhan dan Safari versi lama tidak bisa diuji dari lingkungan kerja. WebKit di GitHub adalah versi terbaru.
