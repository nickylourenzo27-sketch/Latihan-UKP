# Desain v10 "Langkah Tegas" (tahap 1, v10.0.0)

Dokumen ini untuk orang yang merawat tampilan MABAR UKP. Isinya arah desain v10, aturan komponen yang sudah terpasang di tahap 1,
dan cara mengujinya. Dokumen desain lama (`docs/DESAIN-V96.md`, `docs/DESAIN-V7.md`) tetap berlaku untuk layar yang belum dirombak.

**Inti dalam satu kalimat.** Setiap layar memberi satu langkah yang jelas di bawah pita biru tua, dan setiap ketukan langsung dijawab
dengan kalimat berangka dari data yang sungguh ada.

## 1. Prinsip

1. **Satu tombol terisi per layar, dan keadaan pemakai yang memilihnya.** Calon kedua turun ke tombol teks atau baris daftar. Bila
   aksinya mengetuk isi (opsi jawaban), tidak ada tombol terisi; bar bawah menulis langkahnya.
2. **Pita adalah kop.** Pita tinggi di Beranda, pita tipis di halaman dalam, kop sesi biru tua di layar sesi. Pita membawa kuning, dan
   kartu yang menumpang di pita boleh membawa tombol kuning.
3. **Setiap isi diberi lapis:** tampil sekarang, satu ketukan lagi (lipatan), atau di tempat lain.
4. **Panjang tanggapan mengikuti hasil.** Salah: alasan, Penjelasan mudah, Cara ingat. Benar dan yakin: Cara ingat saja, sisanya
   dilipat. Benar tetapi ragu atau nebak: Penjelasan mudah tetap terbuka.
5. **Keadaan ditulis sebagai kalimat berangka.** Warna, bentuk, dan ikon hanya menguatkan.
6. **Satu warna, satu peran, di kedua tema.** Hijau berarti benar atau kunci. Merah berarti jawaban salah. Biru tua (terang) atau
   kuning (gelap) berarti aksi utama dan penanda aktif.
7. **Hanya data yang ada.** Tidak ada teks baru per soal; semua kalimat diturunkan dari bidang soal dan riwayat jawaban.
8. **Hidup berarti menanggapi.** Gerak hanya jawaban atas ketukan atau perubahan keadaan, memakai `transform` dan `opacity`, paling
   lama 480 ms, dan mati saat gerak dikurangi, termasuk gulir dari JS.

## 2. Token dan perannya

Semua gaya v10 ada di satu bagian berpagar di akhir `css/app.css` (`/* ===== v10 langkah tegas: mulai ===== */`), dengan tiga
sub-bagian berurutan: `dasar` (token dan primitif), `latih`, `beranda`. Token warna ditulis tiga kali (`:root`, media gelap dengan
`:root:not([data-theme="light"])`, dan `:root[data-theme="dark"]`) dengan himpunan sama, ditambah blok cetak.

| Peran | Token | Terang | Gelap |
|---|---|---|---|
| Latar halaman | `--v10-latar` | #F5F6F8 | #0A1626 |
| Permukaan, permukaan 2 | `--v10-permukaan`, `--v10-permukaan-2` | #FFFFFF, #EEF2F7 | #0F2038, #162B48 |
| Garis rambut (pemisah saja) | `--v10-garis` | #DFE4EA | #223A5A |
| Garis kendali (3:1 ke atas) | `--v10-garis-kendali` | #7A8696 | #6A82A1 |
| Teks, teks redup | `--v10-teks`, `--v10-redup` | #18212F, #4B5563 | #E8EEF6, #A7B4C5 |
| Aksi utama | `--v10-aksi` / `--v10-aksi-teks` | #0F2A4A / putih | #F2B01E / #0F2A4A |
| Tautan dan tombol teks | `--v10-tautan` | #1D4573 | #9CC2F0 |
| Keadaan terisi | `--v10-isi`, `--v10-isi-garis` | #0F2A4A, #0F2A4A | #2A4A73, #8FB8EA |
| Latar dipilih | `--v10-aksi-lembut` | #E6EDF6 | #1B3558 |
| Penanda aktif (tab, menu) | `--v10-penanda` | #0F2A4A | #F2B01E |
| Benar, salah, peringatan | `--v10-benar`, `--v10-salah`, `--v10-peringatan` | #1B7A52, #B3261E, #8A5A00 | #6CC69A, #FF8A80, #FFB067 |
| Fokus | `--v10-fokus` | #0F2A4A | #F2B01E |

Merek, sama di kedua tema: `--v10-merek` (pita, kop sesi), `--v10-merek-teks`, `--v10-merek-redup`, `--v10-merek-garis` (garis halus
di pita), `--v10-merek-garis-tautan` (garis bawah tautan di pita, putih 45 persen), `--v10-merek-data` (ruas selesai), `--v10-aksen`
(kuning) dengan `--v10-aksen-teks`, `--v10-ruas-sisa`, `--v10-pita-sorot`. **Kuning di putih hanya 1,91:1**: tidak pernah dipakai
sebagai teks, garis, atau penanda di latar terang; sebagai isi tombol dengan teks biru tua ia boleh.

Huruf (ukuran/tinggi baris HP): sorot 32/38 (sapaan), skor 88/88, judul 24/30, vonis 20/26, soal 17/27, badan 16/25, label 14/20 dan
13/18 (judul bagian 13/600 redup, meta soal), mikro 12/16. Tiga keluarga: Space Grotesk, Inter, IBM Plex Mono. Huruf terkecil 12 px.

Jarak `--v10-j-1` sampai `--v10-j-12` (4 sampai 48 px); tepi HP `--v10-tepi` 16 px, 20 px mulai 375. Radius 8 (tombol, segmen),
12 (kartu, opsi, daftar), penuh (pil). Garis 1 px rambut, 1,5 px kendali, 2 px opsi bervonis, 3 px penanda aktif. Sasaran
`--v10-sasaran` 44 px. Kop sesi `--v10-kop-sesi-h` 66 px.

Bayangan: hanya `var(--bayang-melayang)` untuk kartu yang menumpang di pita (kelas `.v10-melayang`); selain itu `none` atau `inset`.

Gerak: `--v10-d-tekan` 80 ms, `--v10-d-warna` 120 ms, `--v10-d-muncul` 180 ms (keyframe bersama `v10-muncul`: naik 6 px dan pudar),
`--v10-d-panel` 240 ms, `--v10-d-angka` 480 ms; kurva `--v10-k-keluar` dan `--v10-k-standar`. Gerak dikurangi lewat aturan global lama
(durasi 1 ms) dan `UKP.gulirHalus()` untuk gulir dari JS.

## 3. Aturan komponen yang sudah terpasang (tahap 1)

**Tombol tiga tingkat.** Utama `.btn-primary` (biru tua di terang, kuning di gelap; di kartu `.v10-melayang` selalu kuning), kedua
`.btn` (garis kendali 1,5 px), teks `.btn-ghost` / `.btn-text` / `.tautan-kop` (warna tautan, selalu bergaris bawah, 44 px). Radius 8.

**Kartu.** Satu rupa: permukaan, radius 12, tidak bersarang.

**Bar bawah HP.** Lima tab, label 12 px; tab aktif bertulisan tebal dengan garis 3 x 20 px `--v10-penanda` di dalam bar, 6 px dari tepi
atas. Menu atas laptop dan tab halaman memakai penanda 3 px yang sama.

**Gulir dan fokus.** `html` memberi `scroll-padding-top` setinggi kop. Saat kop sesi latihan sendiri tampil, `fokusBar({ sesi: true })`
memasang `html[data-kop-sesi]`; `scroll-padding-top` lalu mengikuti tinggi kop sesi (66 px ditambah 12), dan tautan lewati "Lewati ke
konten" muncul di bawah kop, tidak menutupinya. Penanda itu dicabut saat mode fokus dimatikan (`UKP.mode.fokus(false)`, juga di setiap
pindah rute).

**Kop sesi (Latih, latihan sendiri).** Biru tua: tombol tutup, "Soal 3 dari 10" di kiri, angka kanan 20 px berlabel 12 px ("2 benar").
Teks judul tetap "Soal 3 dari 10 · 2 benar" untuk pembaca layar (pemisah tersembunyi). Ruas kemajuan per soal sampai 20 soal (selesai
biru muda, sekarang kuning), di atas 20 soal satu bilah menerus. "Atur saringan" di bawah 400 px hanya ikon 44 px.

**Segmen keyakinan (Latih).** Di atas opsi, opsional, dengan kalimat "Seberapa yakin? Pilih bila mau, lalu ketuk jawaban." Tiga segmen
44 px dalam satu kelompok bergaris; terpilih memakai `--v10-isi` dengan cincin dalam `--v10-isi-garis`; cincin fokus di dalam segmen.
Bila kosong saat vonis, penanda susulan "Tadi Anda seberapa yakin?" muncul di bawah vonis. Di room keyakinan tetap wajib.

**Opsi jawaban (Latih dan Soal hari ini).** Satu rupa untuk keduanya (aturan bersama di sub-bagian latih): huruf dalam lingkaran 28 px,
garis kendali, lima keadaan: biasa, tekan (skala 0,985), kunci (garis dan huruf hijau, lencana "Kunci" atau "Jawaban Anda, benar"),
jawaban salah (merah, lencana "Jawaban Anda"), lain (redup). Tanpa latar warna untuk vonis. Sesudah vonis opsi keluar dari urutan Tab.
Latih memakai label dengan radio (56 px), Soal hari ini memakai tombol (48 px) dengan huruf `aria-hidden` dan teks tersembunyi "C. ".

**Vonis.** Judul 20 px berwarna dengan ikon: "Benar.", "Salah. Kuncinya C.", atau "Kuncinya C." untuk Tidak tahu. Kalimat alasan dari
`mengapaSalah[opsi dipilih]`, lalu satu baris redup keyakinan dan detik ("Yakin, tapi salah. 38 dtk", "Dipilih dengan yakin · 24 dtk").
Fokus pindah ke judul vonis dengan `aria-describedby` ke alasan; tidak ada wilayah status, jadi vonis dibacakan sekali. Halaman bergulir
bila vonis di bawah 62 persen tinggi layar, sampai vonis di 40 persen (55 persen bila tinggi layar di bawah 700 px).

**Penjelasan bertahap.** "Penjelasan mudah" dengan kalimat pertama tebal; "Cara ingat" sebagai sorot tenang bila soal punya kalimat
"Cara ingat:" di `pembahasan.mudah` (huruf pertama kapital; tanpa kalimat itu tanpa blok); satu lipatan "Pembahasan lengkap" dengan
ringkasan berangka ("Ketentuan, 2 opsi lain, jebakan, 2 pasal"). "Kenapa bukan" tidak memuat opsi yang dipilih. Pemotongan Cara ingat
hanya satu sumber: `UKP.pisahMudah` di `js/soal.js` (dipakai juga Soal hari ini di Beranda). Kartu dek Ulang tampil sebagai baris di
panel dengan Urungkan; sesudah Urungkan kalimat penggantinya menerima fokus.

**Bar aksi sesi.** Tetap di bawah, garis atas 1 px. Sebelum menjawab: "Ketuk satu jawaban. Pembahasan langsung muncul." dan tombol teks
"Tidak tahu". Sesudah: Soal sebelumnya (ikon), "Tanya Tutor" (tombol teks), dan satu tombol utama "Lanjut ke soal N" atau "Lihat hasil".

**Beranda.** Pita tinggi: alis mono kuning ("Tingkat B · 27 hari lagi"), sapaan, ringkasan pekan (titik Senin sampai Minggu dan
"5 hari · 32 dari 48 benar") sebagai tautan ke Kemajuan. Kartu langkah menumpang di tepi pita dengan label faktual, judul, keterangan,
dan satu tombol kuning di kedua tema; isinya dipilih fungsi murni `pilihLangkah` (simulasi berjalan, room aktif, latihan bersama belum
selesai, ujian tim, sesi harian, pemakai baru, sesi latihan terakhir, dan seterusnya). Lalu bagian Tim (hanya bila ada kegiatan tim),
Pilihan lain (daftar bergaris rambut tanpa kotak ikon), Soal hari ini (dijawab di tempat, komponen ringkas `kartuSoalHariV10`), dan Alat
lain. Laptop: pita dan kartu langkah berdampingan, isi dua kolom dengan Soal hari ini di kanan. Kop HP di Beranda memakai wordmark
MABAR dan lencana UKP; Target ujian dan Tutor AI pindah ke lembar Lainnya; kop laptop tidak berubah.

## 4. Mikrocopy

1. Tombol: kata kerja dan hasil, 1 sampai 4 kata ("Latih 10 soal A4.4", "Lanjut ke soal 5").
2. Status: kalimat lengkap dengan angka ("2 dari 3 soal yang salah kemarin ada di topik A4.4 ini."). Satuan dtk dan mnt.
3. Bar bawah menjawab "apa yang saya lakukan sekarang".
4. Vonis sama di Latih, Soal hari ini, dan room: "Benar." atau "Salah. Kuncinya C.".
5. Alis kartu langkah menulis fakta, bukan janji: "Terakhir: A4 PPN, kemarin 7 dari 10 benar".
6. Tanpa kalimat motivasi saat mengerjakan, tanpa tanda pisah panjang, tanpa tanda panah. Kata "Nebak" dipertahankan.

Istilah tetap: Benar, Salah, Kunci, Jawaban Anda, Yakin, Ragu, Nebak, Tidak tahu, Penjelasan mudah, Cara ingat, Pembahasan lengkap,
Menurut ketentuan, Jebakan, Dasar hukum, dek Ulang, Buku Kesalahan, Urungkan, Ubah jawaban, Mode mabar, Tanya Tutor.

## 5. Yang tidak diubah

- Nama, logo, wordmark, warna merek, pita berkisi, lima tab dan urutannya.
- Isi soal dan semua bidang pembahasan; arti pencatatan jawaban, kartu otomatis, kehadiran, dan alur data room.
- Konteks lain komponen soal tetap jalur lama: cek pemahaman Materi, sesi dan diagnosis Beranda, ulas dan dialog soal, Simulasi
  (tetap tanpa warna vonis sampai dikirim), papan bersama, HP anggota room, Ujian tim, dan pengaturan "Periksa dulu sebelum lihat
  jawaban".
- Mode mabar (lobi, papan, HP anggota), Hasil, Kemajuan, dan halaman lain belum dirombak; mereka hanya berubah lewat token dan
  primitif dasar (tombol, kartu, bar bawah, penanda tab).
- Kelas, `id`, dan `data-*` lama hanya ditambah. `index.html`, `sw.js`, dan berkas data tidak disentuh di tahap ini.
- Keyakinan di room tetap wajib; kode room tidak ditampilkan di layar besar; tidak ada lanjut latihan lintas hari.

## 6. Aturan CSS bagian v10

- Hanya di sub-bagian masing-masing, hanya lewat token, tanpa warna literal di luar definisi token.
- Tanpa `:has()`, `color-mix()`, `@container`, `@layer`, CSS bersarang, `dvh`, `border-image`, `backdrop-filter`, dan gradasi.
- Bayangan hanya `none`, `inset`, atau `var(--bayang-melayang)`.
- Batas besar seluruh bagian v10 di tahap 1: 56 KB (dijaga `test/v960-tampilan.test.js`). Tahap 2 meninjau batas ini lagi.
- JS harus berjalan di WebKit 15.4: tanpa lookbehind di regex dan tanpa sintaks yang lebih baru.
- Sasaran sentuh 44 px, lebar 320 tanpa gulir mendatar, kontras AA di kedua tema, fokus terlihat dan tidak tertutup kop atau bar,
  satu pengumuman pembaca layar per kejadian.

## 7. Tahap berikutnya

- **Tahap 2 (v10.1.0), Mode mabar.** Lobi dengan pita room dan satu tombol kuning (pemandu: Mulai latihan bersama; anggota: Saya siap),
  papan layar besar dengan skala huruf mengikuti jendela, kolom soal dan panel yang bergulir sendiri, Spasi yang selalu menjalankan
  tombol utama, HP anggota dengan kop sesi bersusunan sama dengan Latih, Tidak tahu di langkah 1, dan langkah 2 keyakinan di bar bawah.
- **Tahap 3 (v10.2.0), halaman lain dan pemangkasan.** Hasil latihan (angka 88 px, kalimat diagnosis topik, petak per soal, baris
  keyakinan), Kemajuan (definisi "pekan ini" sama dengan Beranda: Senin sampai Minggu, batas 03.00), Materi, Bank soal, Simulasi,
  Pengaturan, Dasbor tim; pemangkasan berat huruf dan gaya mati.
- Konteks lain komponen soal (cek Materi, sesi Beranda, dialog soal) bisa memakai opsi `v10: true` pada `UKP.c.soal` tanpa mengubah
  komponennya.

### Catatan halaman lain (sub-bagian "v10 lain")

- **Lebar isi laptop (1024 px ke atas).** Semua halaman biasa di lingkup sub-bagian ini (Materi, Bank soal, Dasbor tim, Referensi,
  Kalkulator, Pengaturan, Simulasi atur dan hasil, Studi kasus, Strategi, Cakupan, dan lainnya) serta saringan Latih memakai satu kolom
  selebar isi kop (`--w-isi-kop`, 1056 px) dengan tepi kiri yang sama dengan merek di kop: x 112 di 1280, x 192 di 1440. Dulu ada
  760, 960, dan 1056 px. Dasbor tim memakai lebar penuh kolom itu. Hanya berlaku tanpa `data-mode`, jadi layar sesi tidak kena;
  Hasil latihan (`.page.papan-v10`) juga tidak. Di bawah 1024 px tidak ada yang berubah.
- **Baris bacaan.** Paragraf, kalimat pita, definisi, dan teks bantu di halaman itu dibatasi token baru `--v10-w-baris: 34em`
  (bukan warna, jadi hanya di `:root`), sekitar 68 huruf per baris. `68ch` Inter ternyata sekitar 88 huruf.
- **Hasil Simulasi.** Skor dan status satu baris ("20 /100 Belum lulus"): kepala kartu dilebur dengan `display: contents`, status huruf
  biasa 20 px tanpa bingkai stempel, "/100" huruf biasa redup. "Langkah berikutnya" label bagian 13/600 redup; satu tombol utama.
- **Segmen terpilih** di lingkup ini (termasuk Format Simulasi: Kustom, Paket soal) memakai tepi `--v10-isi-garis`, jadi tidak lagi
  bergaris kuning di tema gelap.

## 8. Cara menguji

- `node --test test/`: termasuk `test/v10-latih.test.js`, `test/v10-beranda.test.js`, dan pagar `test/v960-tampilan.test.js`.
- `NODE_PATH=$(npm root -g) node tools/potret-layar.js potret . <folder>`: 41 layar harus lulus.
- `KASUS=s-kerja,s-bahas,s-hasil,s-ulang,s-baru,s-hilang,s-tanpasimpan,s-tempo NODE_PATH=$(npm root -g) node tools/uji-muat-ulang.js .`
  untuk latihan sendiri; kasus room dan `tools/uji-room-web.js` butuh dua broker websockets lokal (lihat kepala berkas alat itu).
- Periksa dengan mata di 320, 390, dan 1280 px, tema terang dan gelap, serta gerak dikurangi: Latih sebelum menjawab, salah tanpa
  keyakinan, benar dan yakin, lipatan terbuka; Beranda pemakai baru dan pemakai yang sudah berlatih; Soal hari ini sesudah dijawab.
- Tab dari awal halaman Latih: tautan lewati muncul di bawah kop sesi, dan tidak ada fokus yang tertutup kop atau bar bawah.
