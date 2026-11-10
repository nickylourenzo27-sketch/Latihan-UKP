# Room tim: satu ruang tetap untuk latihan dan ujian bersama

**Tanggal:** 10 November 2026 · **Versi acuan:** 8.1 (dalam pembangunan) → rencana v8.2 · **Status:** rancangan produk. Lapisan transport `js/ruang.js` (`UKP.ruang`) sudah ada dan diuji tersendiri. Layar dan sambungan ke latihan, ujian, dan hasil belum dibangun.
**Untuk:** Nicky (pemimpin tim) dan agen pembangun. Rencana kerja teknis ada di `scratchpad/v82/rencana-integrasi.md`.

---

## 1. Jawaban singkat untuk Nicky

- **Latihan bersama yang sudah disepakati masih ada.** Papannya (A B C D + Y R N per orang, hitung mundur, kunci per soal, triase bahas, Evaluasi tim) dibangun di v8.0 dan v8.1. Masalahnya, fitur itu tersembunyi: ada di lipatan paling bawah halaman saringan **Latih soal**, dan Beranda sama sekali tidak menunjukkannya. Itu sebabnya terasa hilang. Di v8.2, Beranda punya **blok Tim** paling atas dengan tombol **Mulai latihan bersama**.
- **"Satu room khusus" bisa dibuat di website online, tanpa server sendiri dan tanpa akun.** Nicky membuat room satu kali, lalu membagikan tautannya di grup WhatsApp. Anggota membuka tautan di HP dan mengetuk namanya. Sejak itu semua orang berada di room yang sama. Saat Nicky memulai latihan atau ujian, semua HP ikut. Jawaban masuk sendiri ke papan Nicky, dan hasilnya tersimpan di room sehingga semua anggota bisa membukanya.
- **Tata letak sesi dirapikan mengikuti foto referensi:** satu kolom di tengah, tanpa sidebar, satu kepala ("Room Tim UKP B · Soal 7 dari 10 · 24:30 · 6 orang · Menu"), kartu soal, papan per orang, dan bar bawah. Rinciannya ada di bagian 9.

## 2. Konsep

**Room** adalah tempat tetap milik tim: punya nama ("Tim UKP B"), daftar 6 nama, tingkat B, dan riwayat sesi. Room tidak hilang saat aplikasi ditutup. Siapa pun yang pernah masuk akan otomatis kembali ke room itu setiap kali membuka website.

Di dalam room hanya ada **satu aktivitas pada satu waktu**:

| Aktivitas | Siapa yang memulai | Apa yang terjadi di HP anggota | Hasil |
|---|---|---|---|
| **Latihan bersama** | Pemimpin | Soal yang sama tampil. Anggota menjawab A–D dan Y/R/N, lalu kunci dan pembahasan tampil serentak | Evaluasi tim (tersimpan di room) |
| **Ujian tim** | Pemimpin | Layar CAT. Kunci baru dibuka di akhir, dan jawaban terkumpul otomatis saat dikirim atau saat waktu habis | Hasil ujian tim dengan skor per orang (tersimpan di room) |
| (tidak ada) | — | Lobi room: siapa yang online, riwayat sesi | — |

**Pemimpin** (di aplikasi disebut "pemimpin room") adalah satu perangkat yang mengatur room, biasanya laptop Nicky. Perangkat lain adalah **anggota**. Peran pemimpin bisa dipindah ke perangkat lain (lihat 6.4).

## 3. Cara kerja tanpa server (penjelasan untuk pemilik produk)

Website di GitHub Pages hanya menyajikan berkas, jadi tidak bisa meneruskan pesan antar-HP. Room memakai **relai pesan publik gratis** (layanan MQTT umum: Eclipse, EMQX, HiveMQ, Mosquitto). Relai itu diibaratkan papan pengumuman di internet:

- Setiap perangkat menempel dan membaca pesan di "papan" khusus room. Alamat papan diturunkan dari kode room, sehingga tidak bisa ditebak.
- **Isi pesan dikunci** (enkripsi AES-GCM 256) dengan kunci yang dibuat dari kode room. Pengelola relai hanya melihat data acak. Mereka tidak tahu nama, soal, maupun jawaban.
- Laptop pemimpin tersambung ke **semua relai** sekaligus, sedangkan HP anggota cukup ke **satu relai** yang terjangkau. Anggota yang jaringannya hanya bisa ke relai X dan anggota lain yang hanya bisa ke relai Y tetap bertemu lewat laptop pemimpin.
- **Tidak perlu akun dan tidak perlu memasang apa pun.** Room hanya butuh website dibuka lewat `https://` (GitHub Pages sudah memenuhi syarat ini).

Kode room terdiri dari 14 karakter tanpa huruf yang mirip (tanpa 0/O, 1/I/L), ditampilkan sebagai `K7QM-3XRTA-9HWPE`. **Kode itu sekaligus kunci.** Siapa pun yang memegang tautan bisa masuk, jadi tautan cukup dibagikan di grup tim.

## 4. Alur pemimpin (Nicky)

### 4.1 Membuat room (sekali saja)
1. **Beranda → blok Tim → "Buat room tim".** Bila tim lokal sudah pernah diisi (`Nicky, Mia, Novia, Jessie, Melva, Alfi`), daftar itu langsung terpakai.
2. Dialog **Buat room tim**: *Nama room* (bawaan "Tim UKP B"), *Anggota* (chip nama, bisa ditambah atau dihapus, maks. 12), *Tingkat* (B). Tombol **Buat room**.
3. Layar **Room siap**: kode besar, tombol **Bagikan ke WhatsApp** (berbagi bawaan HP, atau `wa.me` di laptop) dan **Salin tautan**. Teks undangan:
   > Room latihan UKP "Tim UKP B". Buka tautan ini di HP, lalu ketuk nama Anda: https://nickylourenzo27-sketch.github.io/Latihan-UKP/#room/K7QM-3XRTA-9HWPE

### 4.2 Lobi room (`#room`)
- Kepala: **Tim UKP B** · Tingkat B · status sambungan ("Tersambung" / "Menyambung ulang…").
- **Siapa yang online**: 6 baris nama dengan titik hijau (online) atau abu-abu ("terakhir terlihat 14.05"). Anggota yang belum pernah masuk diberi keterangan "belum bergabung".
- Dua aksi utama: **Mulai latihan bersama** (primer) dan **Mulai ujian tim**.
- **Riwayat room**: maks. 30 sesi terakhir, misalnya "Sel 10 Nov · Latihan · 20 soal · akurasi tim 68%" atau "Ujian tim · Try Out B 1–40 · rata-rata 71, 4 dari 6 lulus". Ketuk untuk membuka Evaluasi tim.
- Menu (⋯): Bagikan tautan, Ubah nama room dan anggota, Keluar dari room, Tutup room (menghapus data room di relai).

### 4.3 Memulai latihan bersama
1. **Mulai latihan bersama** membuka lembar pengaturan singkat: *Jumlah soal* (10 · 20 · 40), *Sumber* (Acak Tingkat B · Try Out B bagian … · Topik terlemah tim), *Tempo* (Ujian 2,1 mnt · Longgar 2,5 mnt), dan *Yang ikut* (chip 6 nama; yang online sudah tercentang, sedangkan yang offline bisa dicentang bila jawabannya akan diketuk pemimpin). Tombol **Mulai**.
2. Semua HP anggota langsung pindah ke soal 1.
3. **Layar pemimpin** memakai papan yang sudah dikenal, dengan tiga tambahan:
   - Baris orang yang menjawab dari HP **terisi sendiri** dengan tanda **"✓ sudah menjawab"**. **Hurufnya tidak ditampilkan sebelum kunci dibuka**, agar layar laptop yang terlihat bersama tidak membocorkan jawaban.
   - Ikon kecil di baris menunjukkan sumbernya: HP (dari perangkat anggota) atau papan (diketuk pemimpin). Pemimpin **tetap bisa mengetuk** A–D dan Y R N untuk siapa pun, misalnya anggota tanpa HP atau yang sinyalnya putus. Ketukan pemimpin menimpa isi baris itu, dan kiriman HP yang datang sesudahnya menimpanya lagi (yang terakhir berlaku).
   - Hitungan "4 dari 6 sudah menjawab". Bila semua baris lengkap, tampil **"Kunci dibuka dalam 2 dtk · Tahan"**. Pemimpin juga bisa menekan **Lihat kunci** kapan saja.
4. Setelah kunci dibuka, papan dan HP anggota sama-sama menampilkan hasil. Pemimpin menekan **Lanjut** untuk soal berikutnya, dan semua HP ikut.
5. **Selesai sekarang** atau soal terakhir membuka Evaluasi tim di laptop. Rekaman sesi otomatis **diterbitkan ke room**, dan HP anggota menampilkan "Sesi selesai · Lihat evaluasi".

### 4.4 Memulai ujian tim
1. **Mulai ujian tim** memakai susunan ujian v8.1 (paket Try Out atau acak, jumlah soal, menit). Cara pengumpulan otomatis "perangkat masing-masing".
2. Semua HP menampilkan **"Ujian tim dimulai"**.
3. **Ruang ujian** di laptop menampilkan tiap orang: "belum mulai" → "sedang mengerjakan · 12/40 terisi" → "sudah mengumpulkan · 38/40". Jawaban anggota masuk sendiri tanpa menempel kode. Tempel kode jawaban (v8.1) tetap tersedia sebagai cadangan.
4. **Nilai sekarang** (atau otomatis menawarkan saat waktu habis) membuat Hasil ujian tim, yang diterbitkan ke room.

## 5. Alur anggota (Mia di HP)

### 5.1 Pertama kali: buka tautan → ketuk nama
- Tautan `#room/<kode>` **tidak melewati onboarding 5 langkah**. Layar tunggal:
  > **Gabung room "Tim UKP B"** · Tingkat B
  > Siapa Anda?  [Nicky] [Mia] [Novia] [Jessie] [Melva] [Alfi]  [Nama lain…]
  > [ Masuk room ]
- Nama diambil dari room. Sebelum tersambung, tampil 6 nama bawaan tim. Nama yang sedang online di perangkat lain diberi keterangan "sedang dipakai di perangkat lain".
- **Masuk room** menyetel nama profil dan tingkat dari room, menandai onboarding selesai dengan nilai bawaan, lalu membuka lobi. Bila perangkat sudah punya profil dengan nama lain, aplikasi bertanya: "Masuk sebagai Mia? Nama profil Anda tetap Mia Sari." Kartu kecil "Atur rencana pribadi (1 menit)" di Beranda menggantikan langkah onboarding yang dilewati.
- Pembukaan berikutnya: website langsung tersambung ke room. Beranda menampilkan blok Tim dengan "Tim UKP B · 5 online".

### 5.2 Saat pemimpin memulai latihan
HP berpindah ke **layar latihan room** (tanpa navigasi aplikasi, satu kolom):
1. Soal (kode, stem, opsi A–D sebagai teks), lalu **tombol besar A B C D** dan baris **Y R N** ("Seberapa yakin?"), serta **Tidak tahu**.
2. Ketuk huruf: jawaban langsung terkirim. Ketuk Y/R/N untuk melengkapi. Jawaban masih bisa diganti sampai kunci dibuka.
3. Status di bar bawah: **"Jawaban terkirim · menunggu kunci (4/6 sudah menjawab)"**. Bila sambungan putus: "Belum terkirim · menyambung ulang…" (jawaban dikirim ulang otomatis).
4. Setelah kunci: **Benar** atau **Salah · kunci B**, **pembagian jawaban tim** ("A: Novia · B: Nicky, Mia, Alfi · C: — · D: Jessie, Melva", tanpa memamerkan siapa yang salah lebih dulu), dan **pembahasan** soal (bisa dilipat).
5. "Menunggu soal berikutnya…" sampai pemimpin menekan Lanjut.
6. Di akhir: **"Sesi selesai · Lihat evaluasi"**. Jawaban Mia juga tercatat di Kemajuan pribadinya.

### 5.3 Saat pemimpin memulai ujian tim
1. Kartu penuh layar: **"Ujian tim dimulai · Try Out B 1–40 · 40 soal · sisa 1:23:40"**, dengan tombol **Mulai mengerjakan**.
2. Layar CAT yang sama dengan Simulasi: navigasi soal, Ragu, daftar soal. Waktu mengikuti jam pemimpin, bukan jam HP.
3. **Kirim jawaban**, atau waktu habis: "Jawaban Anda sudah terkumpul di room ✓". Bila sambungan putus saat itu, kode jawaban satu baris tampil sebagai cadangan untuk dikirim lewat WhatsApp.
4. Setelah pemimpin menilai: "Hasil ujian tim tersedia · Lihat hasil".

### 5.4 Riwayat dan Evaluasi tim
Semua anggota bisa membuka **Riwayat room** di lobi, lalu Evaluasi tim atau Hasil ujian tim dari setiap sesi: peringkat (bila dinyalakan), matriks soal × orang, soal yang perlu dibahas, dan topik tim. Rekaman disalin ke perangkat masing-masing saat dibuka, sehingga tetap bisa dilihat tanpa internet.

## 6. Keadaan khusus

| Keadaan | Yang terjadi | Teks UI |
|---|---|---|
| **Anggota terlambat** | Saat tersambung, HP langsung menerima keadaan room (soal yang sedang berjalan, fase jawab atau kunci, sisa waktu). Soal yang sudah lewat tidak bisa dijawab lagi. | "Anda bergabung di soal 6 dari 20." |
| **Sinyal anggota putus** | Jawaban yang belum terkirim disimpan dan dikirim ulang begitu tersambung. Sambung ulang otomatis (1 → 2 → 5 → 10 → 20 dtk). Di papan pemimpin, titik orang itu menjadi abu-abu setelah ±1,5 menit tanpa kabar, dan pemimpin bisa mengetuk untuknya. | HP: "Menyambung ulang… jawaban Anda aman." Papan: "Mia offline" |
| **Laptop pemimpin ditutup atau tertidur** | Keadaan terakhir tetap ada di relai, jadi HP tetap menampilkan soal terakhir. Lima menit tanpa kabar dari pemimpin memunculkan pesan di HP. Saat laptop dibuka lagi, aplikasi menawarkan **Lanjutkan latihan di room** (melanjutkan dari soal yang sama) atau **Akhiri**. | HP: "Pemimpin sedang tidak terhubung. Tunggu, atau minta salah satu anggota mengambil alih." |
| **Dua perangkat mengaku pemimpin** | Keadaan room hanya diterima bila nomor urutnya naik. Perangkat yang menekan **Jadikan perangkat ini pemimpin** (Menu, dengan konfirmasi) menerbitkan keadaan baru. Pemimpin lama yang melihatnya otomatis turun menjadi anggota. | Pemimpin lama: "Novia sekarang memimpin room dari perangkatnya." |
| **Nama yang sama di dua HP** | Kedua HP akan saling menimpa jawaban. Layar gabung memperingatkan sebelum masuk. | "Nama Mia sedang dipakai di perangkat lain. Tetap masuk sebagai Mia?" |
| **Versi aplikasi berbeda** | Keadaan room membawa versi aplikasi pemimpin. Bila berbeda, tampil spanduk dengan tombol **Muat ulang**. Soal yang tidak ada di perangkat itu tidak bisa ditampilkan. | "Versi aplikasi Anda (8.1) berbeda dengan pemimpin (8.2). Muat ulang agar soal sama." |
| **Room dibuka di claude.ai (Artifact) atau server tim ber-CSP** | Koneksi keluar diblokir di sana, sehingga room tidak tersedia. Latihan bersama satu layar dan kode jawaban v8.1 tetap berjalan. | "Room tim hanya berjalan di website https://nickylourenzo27-sketch.github.io/Latihan-UKP/. Di halaman ini koneksi ke relai diblokir." |
| **Halaman dibuka lewat `file://` atau `http://` non-lokal** | WebCrypto tidak tersedia, jadi room dinyatakan tidak tersedia. | "Room butuh halaman https://. Buka lewat website." |
| **Semua relai tidak terjangkau** (Wi-Fi kantor memblokir) | Aplikasi terus mencoba, lalu menyarankan jaringan lain. | "Belum bisa menghubungi relai room. Coba data seluler, atau Wi-Fi lain." |
| **Data room di relai hilang** | Relai gratis bisa menghapus pesan simpanan. Laptop pemimpin menerbitkan ulang keadaan, indeks, dan rekaman sesi dari penyimpanannya setiap kali tersambung. | (tanpa teks) |
| **Kode room tersebar ke luar tim** | Pemimpin membuat room baru dan membagikan tautan baru. Room lama ditutup dari Menu. | "Room lama ditutup. Bagikan tautan baru ke tim." |

## 7. Teks UI utama (bahasa Indonesia baku)

| Tempat | Teks |
|---|---|
| Blok Tim, belum ada room | **Latihan bersama tim** · "Buat satu room untuk tim. Anggota cukup membuka tautan di HP." · [Buat room tim] [Latihan satu layar] |
| Blok Tim, sudah di room | **Tim UKP B** · "5 dari 6 online" · [Mulai latihan bersama] · Ujian tim › · Riwayat room › |
| Blok Tim, aktivitas berjalan | **Latihan bersama sedang berjalan** · "Soal 7 dari 20" · [Kembali ke latihan] |
| Status sambungan | Tersambung · Menyambung ulang… · Tidak tersambung · Room tidak tersedia di halaman ini |
| Papan pemimpin | ✓ sudah menjawab · dari HP · diketuk pemimpin · offline · "4 dari 6 sudah menjawab" · Kunci dibuka dalam 2 dtk · Tahan |
| HP anggota, latihan | Seberapa yakin? · Tidak tahu · Jawaban terkirim · menunggu kunci · Benar · Salah · kunci B · Jawaban tim · Pembahasan · Menunggu soal berikutnya… |
| HP anggota, ujian | Ujian tim dimulai · Mulai mengerjakan · Jawaban Anda sudah terkumpul di room |
| Akhir | Sesi selesai · Lihat evaluasi · Hasil ujian tim tersedia |
| Menu room | Bagikan tautan · Ubah room · Jadikan perangkat ini pemimpin · Keluar dari room · Tutup room |

## 8. Apa yang tersimpan di mana

| Tempat | Isi | Sifat |
|---|---|---|
| **Perangkat pemimpin** (localStorage) | Room (`s.ruang`: kode, nama, peran), keadaan terakhir, indeks riwayat, **semua rekaman sesi** (`s.sesiBersama`), dan ujian tim yang sedang berjalan | **Sumber utama.** Bila relai kehilangan data, pemimpin menerbitkannya ulang. Ekspor data tetap berlaku sebagai cadangan. |
| **Perangkat anggota** | Room (kode, nama), rekaman sesi yang pernah diterima (ditandai sumber "room"), dan jawaban pribadi di Kemajuan | Salinan. Tetap bisa dibuka tanpa internet. |
| **Relai publik** | Keadaan room, jawaban hidup per orang, kehadiran, indeks riwayat ≤ 30 sesi, dan rekaman sesi. **Semuanya terenkripsi.** | **Sementara**, tanpa jaminan. Jawaban hidup dikosongkan setelah aktivitas selesai. "Tutup room" menghapus semuanya. |
| **GitHub Pages** | Hanya berkas aplikasi | Tidak menerima data apa pun. Bagian `#room/<kode>` pada tautan tidak dikirim ke server. |

## 9. Tata letak sesi (menjawab "susunan layout masih kacau")

Diagnosis lengkapnya ada di `scratchpad/v82/audit-tata-letak.md` (T1–T13). Dampaknya pada room:
- **Semua layar sesi** (latihan perorangan, latihan bersama, layar room anggota, Evaluasi) memakai mode fokus sungguhan di desktop. Sidebar dan topbar disembunyikan, dan hanya ada **satu kepala**: kiri "Room Tim UKP B · Soal 7 dari 10 · 24:30", tengah "6 orang: Nicky, Mia, …", kanan **Menu**. Kolom isi terpusat dengan lebar tetap: 760 px untuk perorangan, 960 px untuk bersama dan Evaluasi. Ini meniru foto referensi.
- **Bar bawah satu baris**, berisi hitungan "4/6 menjawab" dan satu tombol utama. "Ke menu" dan "Selesai sekarang" pindah ke Menu.
- **Papan 6 orang**: tombol mulai tepat sesudah nama (kolom nama maks. 16 rem) dengan garis bantu antar-baris.
- **Kunci otomatis** tidak lagi menggeser tombol di bawah kursor: tampil hitung mundur 2 dtk dan tombol **Tahan**, lalu tombol utama ditahan 800 ms.
- Petunjuk papan ketik disembunyikan di layar sentuh.
- Beranda: blok Tim paling atas. Grup **Tim** paling atas di sidebar dan lembar Lainnya: Room tim, Latihan bersama, Ujian tim, Dasbor tim.

## 10. Batasan yang jujur

1. **Relai publik gratis tanpa jaminan layanan.** Relai bisa lambat, mati, atau menghapus data simpanan kapan saja. Aplikasi mencoba 4 relai dan pemimpin menerbitkan ulang data, tetapi tidak ada SLA. Untuk sesi penting (Try Out serentak), siapkan cadangan kode jawaban v8.1 yang tetap tersedia.
2. **Bergantung pada pihak ketiga.** "Tanpa server sendiri" bukan berarti tanpa layanan luar. Isi pesan terenkripsi, tetapi relai tetap melihat alamat IP, waktu, dan ukuran pesan.
3. **Kode room adalah satu-satunya kunci.** Tidak ada akun atau kata sandi per orang. Siapa pun yang memegang tautan bisa masuk, menjawab atas nama siapa pun, atau mengambil alih peran pemimpin. Ini cukup untuk tim 6 orang yang saling kenal, tetapi tidak cocok untuk ujian resmi. Bila tautan bocor, buat room baru.
4. **Tidak berjalan di claude.ai (Artifact) atau di server tim yang memasang CSP ketat** (`deploy/server.js` hanya mengizinkan `connect-src 'self'`). Room hanya untuk website GitHub Pages. Di tempat lain, latihan satu layar dan kode jawaban tetap tersedia.
5. **Butuh internet yang stabil untuk semua orang.** Tanpa internet, anggota tidak menerima soal. Pemimpin tetap bisa mengetuk jawaban untuk anggota itu di papan.
6. **Satu aktivitas per room** dan maks. **120 soal per latihan** (batas ukuran pesan). Latihan yang lebih panjang dipecah per bagian. Ujian tim tidak dibatasi 120 karena soalnya dikirim sebagai kode ujian.
7. **Waktu mengikuti jam pemimpin.** Selisih jam HP dikoreksi otomatis dari cap waktu pesan pemimpin, dengan ketelitian sekitar 1 detik.
8. **Riwayat di relai maks. 30 sesi.** Sesi yang lebih lama tetap ada di perangkat pemimpin (maks. 60) dan di perangkat anggota yang pernah membukanya.
