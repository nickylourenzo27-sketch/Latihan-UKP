# MABAR UKP — belajar bareng Uji Kompetensi Perpajakan tingkat A, B, C

> Sejak v8.3 aplikasi ini bernama **MABAR UKP** (sebelumnya *Pelatih UKP*). Pengenal internal sengaja tidak diganti agar data yang sudah tersimpan tetap terbaca: kunci localStorage `ukp.v1` dan `ukp.tim.*`, awalan cache service worker `ukp-`, nilai `aplikasi: 'pelatih-ukp'` pada berkas ekspor/impor, nama berkas `pelatih-ukp-offline.html` dan `pelatih-ukp-progres-*.json`, UID pengingat kalender, serta folder `deploy/`.

Aplikasi web satu halaman (vanilla HTML/CSS/JS, tanpa backend) untuk belajar mandiri menghadapi **UKP** (Uji Kompetensi Perpajakan, PMK 55/2026, penyelenggara BPPK) sekaligus kompatibel dengan format **USKP** lama (40 soal per mata ujian). Progres tersimpan di browser (localStorage). Bisa dibuka langsung dari berkas `index.html` atau dihosting statis (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

> Soal adalah rekonstruksi dari kisi-kisi resmi, bukan soal asli. Bukan nasihat pajak. Tidak berafiliasi dengan BPPK, DJP, KP3SKP, maupun asosiasi mana pun. Status ketentuan per 25 Oktober 2026; item berlabel ◐ perlu verifikasi ke teks resmi.

## Tampilan MABAR UKP (v8.3 dan v9.0)

Tampilan mengikuti kanvas desain pemilik ("MABAR UKP · Logo" dan "MABAR UKP · Beranda web").

- **Identitas (v8.3).** Dua warna merek: tinta `#0F2A4A` dan aksen `#F2B01E`, untuk tema terang dan gelap. Huruf: Space Grotesk (judul), Inter (isi), IBM Plex Mono (label dan angka). Logo persen lewat `UKP.c.merek()`; ikon dibuat `icons/buat-ikon.js`.
- **Kerangka (v9.0).** Satu kop atas di semua lebar, tanpa menu samping. Di 1024 px ke atas kop memuat Simulasi, Mode mabar, Latihan, Materi, Kalkulator, dan panel Lainnya. Di bawah 1024 px ada bar bawah lima tab: Beranda, Latih, Mabar, Materi, Lainnya. Layar sesi, ujian, dan formulir awal tetap tanpa kop.
- **Beranda (v9.0).** Pita biru bermotif kisi dengan sapaan dan dua tombol, kartu **Soal hari ini** (satu soal per hari per tingkat, dicatat seperti latihan biasa), strip Mata ujian, blok Mode mabar, Lanjutkan belajar, empat kartu cara berlatih, dan kaki situs.
- **Sambutan (v9.0).** Pengunjung baru di akar situs melihat halaman sambutan berkerangka sama, dengan tombol Masuk menuju formulir lima langkah. Tautan tim (`#room/<kode>`, `#ujiantim/<kode>`, `#lj`) tetap langsung ke layarnya.
- **Mode mabar** adalah nama pintu fitur tim (halaman `#room`). Nama fitur di dalamnya tidak berubah.

## Isi saat ini (status 9 November 2026, v7.8)

| | Jumlah |
|---|---|
| Kelompok materi | 11 (A1–A5, B6–B8, C9–C10, E) · 96 topik sesuai kisi-kisi BPPK |
| Soal pilihan ganda | 1.494 (bergaya kasus praktik, 276 berkutipan peraturan, 119 vignette, 649 kesulitan tinggi, 58 soal baris SPT tertaut ke peta formulir) |
| Paket soal try out | 100 soal **Try Out UKP Tingkat B** (transkrip rekaman 6 Nov 2026; 29 bertanda ◐ karena opsi/stem terpotong di sumber) dalam urutan asli: Simulasi › **Try Out** (210 menit, dapat diubah) dan Latih › **Sumber soal**; tiap soal berlabel "Try Out UKP B no N" |
| Soal bertanda laporan peserta ujian nyata | 205 untuk Tingkat B (27 Okt 2026) · 387 untuk Tingkat C (28 Okt 2026, peserta lulus): BUT, top-up tax GloBE, kurs KMK vs kurs tengah dan selisih kurs, TP, PBB, PPSP |
| Kartu hafalan | 901 (+ kartu buatan pengguna dari angka kunci dan lembar angka, didahulukan di dek Ulang) |
| Studi kasus bertahap | 64 (414 langkah) |
| Kalkulator pajak | 19 (348 uji otomatis), termasuk "Kurs KMK vs kurs tengah" (bea masuk, gross-up, PPN valas, PPh 15, PPh 26 ayat (2)) dan "Top-up tax GloBE" (porsi IIR) |
| Indeks peraturan · glosarium · angka hari ini · perubahan 2024–2026 | 124 · 275 · 90 · 59 |
| Lembar angka per kelompok | 342 baris (11 lembar) |
| Peta formulir (SPT dan bukti potong) | 14 formulir · 243 baris, tertaut ke topik dan 58 soal baris SPT |
| Tabel angka referensi | 15 (TER bulanan, penyusutan, pesangon, PPh 22, PPh 4(2), tenggat PBB, garis waktu PPSP, dll.) |

Tampilan v6 ("Buku Besar & Stempel" matang): spesifikasi di `docs/DESAIN-V6.md (dasar) dan docs/DESAIN-V7.md (penajaman v7: hierarki sans, status netral, mode fokus, satu primer per layar, mikroteks)` (token, 23 komponen dengan semua state, tata letak 12 kolom, 19 mikro-interaksi, ikon garis 1,75 px, tema gelap, aksesibilitas) dan audit interaksi di `docs/INTERAKSI-V6.md` (10 momen interaktif: rangkaian yang terasa, keyakinan Yakin/Ragu/Menebak sebelum memeriksa, "tebak dulu" di kalkulator, peta kelemahan yang bisa diklik, mode fokus simulasi, ulas berjenjang, bukti sesi yang bisa disalin, buku besar kasus, pratinjau topik, lembar angka uji diri).

Semua soal sudah melewati dua lapis pemeriksaan (penulis → pemeriksa akurasi → auditor adversarial). Soal yang mengarah ke laporan peserta UKP Tingkat B Oktober 2026 (lihat `docs/PENGALAMAN-UJIAN.md`) ditandai lewat filter Latih › "Hanya soal gaya UKP nyata". Temuan review UX/aksesibilitas/kode dan statusnya ada di `docs/REVIEW-TEMUAN.txt`.

## Cara menjalankan

```bash
# cukup buka index.html di browser, atau:
cd uskp-learn && python3 -m http.server 8080   # lalu buka http://localhost:8080
node tools/build-offline.js                    # dist/pelatih-ukp-offline.html: satu berkas mandiri untuk dipakai tanpa internet
```

**Tanpa internet (mis. di pesawat):** pakai berkas tunggal `dist/pelatih-ukp-offline.html` (±5,4 MB; semua CSS, skrip, data, dan font tertanam), dari `node tools/build-offline.js` atau tombol Pengaturan › **Versi offline (untuk pesawat)** › *Unduh berkas offline*. Simpan di perangkat, lalu buka dengan klik dua kali (laptop) atau lewat Files › Chrome (Android); di iPhone gunakan Documents by Readdle, atau lebih aman pasang PWA dari alamat hosting (*Tambahkan ke Layar Utama*). Tutor AI tidak tersedia offline, dan progres versi offline terpisah dari versi daring: pindahkan lewat Ekspor/Impor di Pengaturan › Data. Rincian: `docs/OFFLINE.md`.

**Sebagai aplikasi (PWA).** Bila dihosting di alamat https (GitHub Pages, Netlify, Cloudflare Pages) dan dibuka sekali saat daring, service worker (`sw.js`) menyimpan seluruh aset (±5,5 MB) sehingga aplikasi tetap terbuka tanpa internet; di HP pilih "Tambahkan ke Layar Utama". Setelah aset berubah, jalankan `node tools/build-artifact.js` agar versi cache di `sw.js` diperbarui. Artifact claude.ai sendiri tetap memerlukan internet untuk dibuka dan tidak memakai service worker (pendaftaran dilewati di host Artifact/iframe); untuk pesawat pakai berkas offline atau PWA dari hosting statis. Bila halaman lambat atau ada berkas gagal dimuat, penjaga muat di `index.html` menampilkan progres modul dan panel pemulihan (muat ulang, bersihkan cache, salin laporan) — lihat `docs/OFFLINE.md`.

Pengujian:

```bash
node --test test/                                   # uji mesin kalkulator (fixture emas + kasus batas)
for f in js/data/mu-*.js; do node tools/validate-module.js "$f"; done   # validasi skema konten
node tools/shot.js index.html /tmp/shots            # uji alur di browser headless + tangkapan layar
node tools/build-artifact.js                        # dist/artifact.html untuk dipublikasikan sebagai Artifact
```

## Website (GitHub Pages)

Alamat: **https://nickylourenzo27-sketch.github.io/Latihan-UKP/** (repo publik `nickylourenzo27-sketch/Latihan-UKP`).

- **Tidak diindeks mesin pencari** (`robots.txt` + `<meta name="robots" content="noindex, nofollow">`), tetapi **publik bagi siapa pun yang punya tautan**. Jangan menaruh data pribadi di repo.
- **Tanpa akun dan tanpa server:** progres, sesi bersama, dan ujian tim tersimpan **per perangkat** (localStorage). Pindah perangkat lewat Pengaturan › Data (Ekspor/Impor). Hasil anggota dikumpulkan lewat kode (kode jawaban ujian tim atau kode hasil), atau sejak v8.2 lewat **Room tim** (lihat bagian berikut).
- **Bisa dipasang ke layar utama** (PWA: "Tambahkan ke Layar Utama") dan **dipakai luring** setelah dibuka sekali saat daring; service worker menyimpan semua aset, termasuk saat membuka tautan `#ujiantim/<kode>`.
- Di host statis aplikasi tidak memanggil `api/saya` (deteksi server tim hanya bila cookie `ukp_srv` ada), jadi konsol bersih.
- **Memperbarui:** `node tools/build-artifact.js` (memperbarui versi cache `sw.js`), lalu push isi situs ke cabang `main` **dan** `gh-pages` (Pages menayangkan `gh-pages`). Pengguna mendapat versi baru pada pemuatan berikutnya.

## Akses tim (paling mudah: tanpa server)

Aplikasi punya **layar masuk** sendiri: anggota tim mengisi **nama** (bebas, untuk sapaan) dan **sandi tim** (satu sandi untuk semua). Tidak perlu hosting, akun, atau server.

**Cara membagikan (pilih salah satu):**

1. **Tautan Artifact** — buka Artifact MABAR UKP di claude.ai › menu **Bagikan** › salin tautan › kirim ke tim beserta sandinya.
2. **Berkas offline** — kirim `dist/pelatih-ukp-offline.html` (dari `node tools/build-offline.js` atau Pengaturan › Versi offline). Penerima cukup membukanya di browser; layar masuk tetap muncul.

Sandi bawaan: `UKP2026`. Sesi diingat di browser; anggota bisa keluar di **Pengaturan › Akses tim › Keluar**.

**Ganti sandi** (otomatis mengeluarkan semua orang):

```bash
node tools/akses-sandi.js SandiBaru123     # menulis salt + hash baru ke js/akses.js
node tools/build-artifact.js && node tools/build-offline.js   # lalu terbitkan ulang / kirim ulang berkasnya
```

Matikan gerbang: ubah `aktif: true` menjadi `aktif: false` di `js/akses.js`.

**Jujur soal keamanan:** ini **pembatas ringan** untuk tim internal, bukan keamanan kuat. Pemeriksaan sandi terjadi di browser (yang tersimpan hanya hash SHA-256 bersalt), sehingga siapa pun yang mahir bisa membaca atau melewati JavaScript-nya. Gunakan hanya untuk materi yang memang tidak rahasia — materi MABAR UKP bukan rahasia. Bila butuh login sungguhan per orang, pakai paket hosting di `deploy/`.

## Dasbor tim (belajar bersama)

Pemimpin tim (pemilik Artifact, atau **admin** di server tim sendiri) melihat **ringkasan** latihan dan simulasi anggota di **Dasbor tim** (`#tim`, detail per anggota `#tim/<id>`, mode **Langsung**, ekspor CSV). Yang dibagikan: nama, tingkat, jumlah dan akurasi latihan, skor simulasi, kehadiran, dan (sejak v7.7) **jawaban per soal** 30 hari terakhir — maksimal 400 entri terbaru berisi kode soal, topik, opsi yang dipilih (`-` = tidak tahu/kosong), benar/salah, detik, waktu, mode (latihan, simulasi, sesi, cek) dengan id simulasi, dan penanda keyakinan bila diisi. Tidak ada teks bebas.

**Detail anggota (`#tim/<id>`), dihitung dari jawaban per soal:**
- **Ringkasan masalah** — tiga kartu: *kelompok terlemah* (akurasi + jumlah soal, beserta topik terlemah; tombol "Lihat soal salah" menyaring daftar), *pola kesalahan teratas* dari `jebakanOpsi` opsi yang dipilih (label: salah klasifikasi, lupa pasal, salah baca, salah hitung, angka usang, final vs non-final; plus jumlah "tidak tahu" dan "yakin tetapi salah"), dan *tren 7 hari* (akurasi, selisih poin dari 7 hari sebelumnya, batang jumlah soal per hari).
- **Jawaban per soal** — tab *Soal salah* / *Semua jawaban* / *Simulasi*, saring per kelompok, dikelompokkan per hari (terbaru dulu, 30 per halaman). Tiap baris: hasil, kode soal dan topik, opsi dipilih vs kunci, pola kesalahan, keyakinan, jam dan durasi. Klik baris membuka **soal lengkap dalam dialog** (mode ulas, hanya baca: jawaban anggota ditandai, kunci dan pembahasan terbuka; Sebelumnya/Berikutnya atau ← →). Soal yang tidak ada di versi aplikasi pemimpin ditampilkan tanpa tautan.
- **Peta simulasi** — per id simulasi, kotak 1..N menurut urutan jawab (hijau benar, merah salah, abu kosong) dengan tooltip kode soal; klik kotak membuka soalnya.
- **Ekspor CSV jawaban** (`jawaban-<nama>-<tanggal>.csv`, pemisah `;`, sel berawalan `= + - @` dinetralkan).
- Anggota yang belum mengirim field ini (versi lama, atau kode hasil tanpa jawaban) menampilkan "Belum ada jawaban yang dibagikan".

**Jalur server sendiri (tanpa akun Claude, disarankan untuk tim).** Bila aplikasi dibuka dari `deploy/server.js` (mis. Render), Dasbor tim tersambung otomatis ke server: saat boot aplikasi memanggil `api/saya` (batas 8 detik); bila berhasil, mode **server** aktif dan `window.claude` tidak pernah dipanggil. Cookie penanda `ukp_srv=1` dari server membuat aplikasi tidak pernah jatuh ke jalur Claude: server lambat atau mati → status "server tidak terjangkau" dan deteksi diulang (5/15/30/60 detik, saat tab terlihat, peristiwa `online`). Progres terikat ke akun server pertama (`profil.akunServer`); akun lain di peramban yang sama tidak mengirim apa pun sampai memilih **Mulai baru** (progres lama diarsipkan di `ukp.arsip:<akun>`) atau **Keluar**. Penghapusan yang gagal saat berbagi dimatikan ditandai `ukp.tim.hapusTertunda` dan diulang saat tersambung. Anggota cukup masuk dengan nama pengguna dan sandi, atau dalam **mode masuk nama** (`MASUK_NAMA=1`, bawaan `render.yaml`) cukup mengetik namanya tanpa sandi (akun dibuat otomatis; admin tetap bersandi; batasi nama dengan `DAFTAR_NAMA`; matikan dengan menghapus `MASUK_NAMA`; dengan `RAHASIA_SESI`, sesi anggota tetap berlaku setelah Render free tidur karena akunnya dibuat ulang dari sesi bertanda tangan); ringkasannya dikirim ke `PUT /api/hasil` setelah latihan atau simulasi (debounce 5 detik), dan dihapus dengan `DELETE /api/hasil` saat sakelar berbagi dimatikan. Admin (akun `ADMIN_USER`, akhiran `:admin` di `PENGGUNA_TIM`, atau `kelola-pengguna.js jadikan-admin <nama>`) melihat semua ringkasan lewat `GET /api/tim` dan kegiatan baru lewat aliran SSE `GET /api/tim/aliran` (cadangan: diperbarui tiap 20 detik). Kop dasbor: `Tersambung ke server · N online`; id anggota = nama pengguna server (`#tim/rina`), dan nama yang tampil adalah nama akun server (mode masuk nama: nama tampilan seperti diketik, id = kunci huruf kecil, mis. `#tim/rina-putri`). Anggota bukan admin melihat "Khusus admin tim" dan langkah meminta peran admin, tanpa data orang lain. Pengaturan › Tim menampilkan akun yang sedang masuk dan tombol **Keluar**. Prioritas jalur: **server > db/room Claude > kode hasil**. Rincian, batas, dan cadangan `hasil.json`: `deploy/README-DEPLOY.md` › *Dasbor tim di server*.

**Cara pakai (Artifact di claude.ai)**

1. **Pemimpin:** buka Artifact di claude.ai › **Bagikan** › akses umum **siapa saja yang punya tautan** (atau undang anggota sebagai **Kontributor**) › kirim tautannya ke tim.
2. **Anggota:** buka tautan, isi **Nama Anda** di langkah pertama (wajib, 2–40 karakter; bisa diubah di **Pengaturan › Tim**), lalu berlatih seperti biasa.
3. **Saat belajar bersama:** pemimpin membuka aplikasi (mis. **Dasbor tim**, mode **Langsung**). Kop dasbor menampilkan `Siaran langsung aktif · N online`; anggota yang sedang terhubung ditandai titik hijau **online**, dan kegiatan baru masuk ke feed Langsung.
4. **Cadangan:** anggota yang tidak tersambung menyalin **kode hasil** (Pengaturan › Tim › Salin kode hasil) dan mengirimnya lewat chat; pemimpin menempelnya di Dasbor tim › **Tempel kode hasil**.

**Latihan bersama di satu layar (v7.9, tanpa server dan tanpa login).** Untuk tim yang belajar bersama di satu perangkat (mis. Nicky memimpin, Mia dan Novia ikut menjawab): aktifkan di **Latih › Atur saringan** atau **Pengaturan › Tim**, lalu isi nama peserta (maks. 12 nama, tiap nama ≤ 24 karakter). Saat berlatih, di bawah opsi tampil **papan jawaban**: pilih jawaban tiap orang (A Nicky, B Mia, C Novia, atau "tidak menjawab"); nama tampil pada opsi yang dipilihnya, dan setelah semua tercatat kunci dibuka sehingga hasil per orang terlihat seketika. Jawaban tiap peserta disimpan **hanya di perangkat pemimpin** (`s.jawabanBersama`, 60 hari, ≤ 4000 entri) dan muncul di Dasbor tim › **Latihan bersama di perangkat ini**: satu kartu per peserta (pill *lokal*, jumlah soal, akurasi 7 hari, terakhir aktif), detail `#tim/lokal:<nama>` dengan pita stat, Ringkasan masalah, tab *Soal salah* / *Semua jawaban*, dialog soal dengan pembahasan, ekspor CSV, dan tombol **Hapus data peserta ini**. Bagian ini tampil walau dasbor belum tersambung ke server atau akun Claude. Jawaban bersama tidak dikirim ke server/db dan tidak ikut kode hasil; hanya jawaban pemimpin sendiri (nama sama dengan nama profil) yang juga masuk statistik pribadinya.

**Latihan bersama dan Evaluasi tim (v8.0).** Alurnya: (1) nyalakan **Latihan bersama** di Latih › Atur saringan atau Pengaturan › Tim; bila daftar masih kosong, nama tim bawaan langsung terisi (Nicky, Mia, Novia, Jessie, Melva, Alfi; tersedia juga sebagai **Tambah cepat**). (2) Saat berlatih, kop menampilkan "Soal 7 dari 10" dan hitung mundur sesi, dan di bawah soal tampil **papan per orang**: satu baris per nama dengan tombol **A B C D** lalu **Y R N** (Yakin, Ragu, Menebak). (3) **Lihat kunci** membuka kunci; kunci juga terbuka otomatis setelah semua orang menjawab. (4) **Selesai sekarang** dapat ditekan kapan saja. (5) Sesi berakhir di **Evaluasi tim**: pita stat (akurasi tim, rata-rata benar, yakin tapi salah, kosong), peringkat per orang (benar/total, bar akurasi, pill *yakin tapi salah*), **matriks soal × peserta** (huruf jawaban dengan nada benar/salah/kosong dan penanda Y/R/N; pilih baris untuk membuka soal, pembahasan, dan jawaban tiap orang), **Soal paling banyak salah** dengan tautan *Pelajari lagi*, **Topik yang perlu dibahas tim**, dan tombol **Ulangi soal yang salah**, **Ekspor CSV sesi** (pemisah `;`, satu baris per soal: id;kode;topik;kunci;lalu satu kolom per orang berisi "huruf (keyakinan)" atau "kosong"), dan **Lihat di Dasbor tim**. Setiap sesi tersimpan di perangkat pemimpin (`s.sesiBersama`, maks. 60 sesi terbaru). Dasbor tim › Latihan bersama di perangkat ini › **Sesi terakhir** menampilkan 8 sesi terbaru (tanggal dan jam, jumlah soal dan orang, rata-rata benar, label *belum selesai* untuk sesi yang terputus); pilih sesi untuk membuka evaluasinya lagi di `#tim/sesi:<id>`, lengkap dengan **Hapus sesi**. Detail peserta (`#tim/lokal:<nama>`) menampilkan keyakinan tiap jawaban dan pill *yakin tapi salah: n (30 hari)*. Semua data ini tetap lokal: tidak dikirim ke server/db dan tidak ikut kode hasil.

**Latihan bersama v8.1.** Segmen **Tempo** (Ujian 2,1 mnt/soal bawaan · Longgar 2,5 mnt) menentukan hitung mundur; kop menampilkan laju soal "Soal ini 1:12 / 2:06". Setelah kunci terbuka tampil **triase** satu baris (mis. "Terbelah 3–3 · Nicky jelaskan ke Novia, Jessie, dan Melva · Kenapa A keliru: salah hitung"). Sesi yang terputus (muat ulang, baterai habis) ditawarkan lagi di Beranda dan Latih: **Lanjutkan** (papan, soal, sisa waktu pulih) atau **Akhiri dan lihat evaluasi**. Evaluasi tim mendapat bagian Tempo, Urutan bahas + Mode bahas, dan rekap WhatsApp (lihat *Ujian tim dan lembar jawab* di bawah).

**Tiga jalur, satu daftar.** Setiap baris membawa sumbernya secara halus: **akun** (anggota Kontributor menulis dok `tim/<id akun>` sendiri lewat capability `db`), **langsung** (capability `room`: anggota yang tidak dapat menulis `db` memasang ringkasannya sebagai *presence* dan mengirim event `hasil` saat sesi selesai; pemimpin yang online menerimanya, menyimpannya di perangkatnya — `ukp.tim.terima` — dan menuliskannya ke dok `tim/room_<id akun>` bila platform menjamin identitas pengirim (`Sender.by`), atau `tim/anon_<id>` bila tidak, agar tersedia di perangkat pemimpin yang lain), dan **kode** (kode hasil yang ditempel, `ukp.tim.manual`). Bila satu anggota muncul di beberapa jalur dengan id sama, data yang paling baru dipakai. Id anggota langsung adalah id acak yang tersimpan di browser anggota (`ukp.tim.id`).

**Privasi.** Anggota tidak pernah melihat data anggota lain: Dasbor tim hanya untuk pemilik Artifact, koleksi `tim` hanya dapat dibaca pemilik (aturan db di bawah), dan anggota langsung hanya mengirim ringkasannya sendiri — pemimpin hanya mengumumkan penanda `pemimpin: true`, tidak pernah daftar anggota. Catatan jujur: *presence* room dibagikan platform kepada semua peserta yang sedang membuka halaman, jadi ringkasan anggota langsung secara teknis dapat dibaca peserta lain lewat alat pengembang walaupun aplikasi tidak menampilkannya. Jangan pakai jalur langsung untuk data yang tidak boleh diketahui sesama anggota. Isi room diperlakukan sebagai data tak tepercaya dan dinormalkan. Pengamanan di perangkat pemimpin: kunci `room_<by>` dari platform dipakai bila ada (tidak dapat dipalsukan); id anonim diikat ke peer pertama yang memakainya selama peer itu masih terhubung, dan satu peer tidak dapat berganti id; cap waktu dijepit paling lambat 5 menit di depan jam pemimpin; dok baru untuk id anonim hanya ditulis bila sudah ada latihan atau simulasi; paling banyak 100 dok room; tulis db per anggota dibatasi (4 beruntun, lalu 1 per 10 detik). Sisa risiko: saat anggota asli tidak terhubung, peserta lain yang mengetahui id anonimnya masih dapat mengirim atas nama id itu.

**Berhenti berbagi.** Anggota akun menghapus doknya sendiri. Anggota langsung memasang tanda `{ ukp, id, berhenti: true }` di presence; pemimpin yang online (sekarang atau nanti, selama halaman anggota masih terbuka) lalu menghapus ringkasan itu dari `ukp.tim.terima` dan dok db-nya. Bila pemimpin tidak sempat online, ringkasan lama tetap ada sampai pemimpin menekan **Hapus dari dasbor** di detail anggota; teks sakelar di Pengaturan menyatakannya.

**Batasan.**
- Hasil anggota langsung **terkirim hanya saat pemimpin online selagi halaman anggota masih terbuka**; room tidak menyimpan atau memutar ulang pesan. Anggota yang akan menutup halaman sebelum pemimpin online sebaiknya menyalin kode hasil. Begitu pemimpin membuka aplikasi, ringkasan terbaru setiap anggota yang sedang online langsung diterima. Hasil itu **tersimpan setelah diterima pemimpin**, bukan sebelumnya.
- **Tidak ada pengiriman otomatis tanpa login Claude.** Ini batas platform, bukan cacat aplikasi: pengunjung yang tidak masuk ke claude.ai (atau datang lewat tautan publik tanpa izin platform) tidak dapat tersambung ke room maupun db (`claude.use('room')` → `null`). Pilihan bagi pemimpin: (a) undang anggota sebagai **Kontributor** — jalur akun, paling andal; (b) anggota yang sudah masuk tetapi hanya berakses melihat memakai jalur langsung; (c) anggota tanpa login mengirim **kode hasil**, atau, bila tanpa login wajib, pakai paket hosting internal `deploy/server.js`. Status di Pengaturan › Tim menyatakannya apa adanya: *Terhubung langsung ke pemimpin*, *Pemimpin belum online. Ringkasan Anda terkirim bila pemimpin membuka dasbor selagi halaman ini masih terbuka…*, atau *tidak tersambung*.
- Event `hasil` hanya dapat dikirim anggota berakses Kontributor ke atas; anggota berakses Viewer tetap terkirim lewat *presence*.

**Deklarasi capability saat publish** (harus sama dengan kode di `js/tim.js`):

```json
{
  "db": { "rules": [
    { "path": "tim", "read": "owner", "write": "owner" },
    { "path": "tim/{self}", "write": "interact" }
  ] },
  "user": { "scopes": ["profile"] },
  "room": { "topics": { "hasil": "interact" } }
}
```

## Room tim (v8.2)

Satu ruang tetap untuk tim di **website** (bukan di dalam claude.ai): saat pemimpin memulai latihan atau ujian, semua HP ikut, jawaban masuk sendiri ke laptop pemimpin, dan hasilnya tersimpan di room. Rancangan dan perilaku lengkap: `docs/RUANG-TIM.md`.

- **Membuat room (sekali).** Beranda › blok **Tim** › **Buat room tim**: nama room, daftar nama (bawaan Nicky, Mia, Novia, Jessie, Melva, Alfi), tingkat. Sidebar dan lembar Lainnya punya grup **Tim** (Room tim, Latihan bersama, Ujian tim, Dasbor tim).
- **Mengundang.** Menu ⋮ › **Bagikan tautan** (WhatsApp atau salin). Tautan berbentuk `…/Latihan-UKP/#room/<kode>`. Anggota membuka tautan di HP, mengetuk namanya, membaca catatan "Sebelum masuk" sekali, lalu masuk tanpa onboarding 5 langkah. Kunjungan berikutnya langsung tersambung. Siapa pun yang memegang tautan bisa masuk: bagikan hanya di grup tim.
- **Latihan di room.** Laptop pemimpin: **Mulai latihan bersama** → papan v8.1 yang sama. Baris orang yang menjawab dari HP terisi sendiri ("✓ sudah menjawab", huruf disembunyikan sampai kunci); pemimpin tetap bisa mengisi untuk yang offline ("isi untuk <nama>"). Bila semua sudah menjawab, kunci terbuka setelah hitung mundur 2 detik (bisa **Tahan**). Di akhir, Evaluasi tim terbit ke room.
- **Ujian tim di room.** Tautan **Ujian tim** › susun (mis. Try Out bagian 1–40) › **Mulai ujian tim**. HP anggota menampilkan "Ujian tim dimulai" → layar CAT; waktu mengikuti jam pemimpin. Ruang ujian di laptop: "sedang mengerjakan · 12/40 terisi" (tanpa huruf) → "sudah mengumpulkan" otomatis. **Nilai sekarang** menerbitkan hasil ke room.
- **Yang dilihat anggota.** Di HP: soal, tombol A–D + Y R N, sebaran jawaban tim tanpa nama, dan hasil versi anggota: "Skor Anda …", "Rata-rata tim … · x dari n di atas 60" atau angka tim latihan, soal untuk dibahas, rekap tim. Tidak ada nama atau skor anggota lain, matriks, maupun peringkat. Versi lengkap dengan nama (matriks, skor per orang, kalimat penjelas "Mia jelaskan ke Novia dan Alfi") hanya di laptop pemimpin. Peringkat mati sebagai bawaan (sakelar "Tampilkan peringkat" di laptop, tidak pernah dikirim ke room).
- **Cadangan.** (1) **Latihan satu layar**: laptop pemimpin mengetuk jawaban semua orang di papan, tanpa internet. (2) **Kode jawaban**: HP yang tidak tersambung saat mengirim ujian mendapat kode `UKPJ1.…` untuk dikirim ke grup, dan pemimpin menempelnya di ruang ujian (lipatan "Pakai kode jawaban"). Di dalam claude.ai (Artifact), blok Tim langsung menawarkan latihan satu layar dengan catatan "Room online hanya tersedia di website tim."
- **Batasan jujur.** Room memakai **layanan penghubung publik gratis** (broker MQTT umum; isi pesan terenkripsi dengan kode room) **tanpa jaminan layanan**: bisa lambat, mati, atau menghapus data kapan saja. Aplikasi mencoba 4 jalur dan laptop pemimpin menerbitkan ulang data, tetapi untuk sesi penting siapkan cadangan di atas. Room **hanya berjalan di website** (https), tidak di claude.ai, `file://`, atau server tim ber-CSP. **Privasi hanya sebatas tampilan**: HP anggota tidak menampilkan nama orang lain bersama angka, tetapi rekaman sesi di room memuat jawaban semua orang dan bisa dibaca lewat alat pengembang. Kode room adalah satu-satunya kunci (tanpa akun). Diuji dengan broker lokal dan pemeriksa jalur di GitHub Actions (`tools/cek-relai.js`), belum dengan HP sungguhan.

## Ujian tim dan lembar jawab (v8.1)

Berlatih **dalam kondisi ujian**: semua mengerjakan soal yang sama, waktu seperti UKP, **kunci dan nilai baru tampil di akhir**, skor per orang dengan batas lulus 60. Mulai dari **Simulasi › Kerjakan sebagai tim** (atau Latih › Latihan bersama › *Ujian tim*). Untuk Try Out pilih **Bagian** (Semua · 1–40 · 41–80 · 81–100); 40 soal = **84 menit** (tempo ujian 2,1 mnt/soal). Peserta diambil dari daftar Latihan bersama (bawaan: Nicky, Mia, Novia, Jessie, Melva, Alfi).

**Dua cara menjawab:**
1. **Satu layar** (laptop pemimpin, `#ujiantim`): di bawah soal ada papan per orang **A B C D · Ragu · –**, tanpa kunci dan tanpa warna benar/salah. Kop: judul, "Soal 18 dari 40", hitung mundur, menu ⋮ (*Tempel lembar jawab* · *Tambah 5 menit* · *Batalkan ujian*). **Daftar soal** menandai soal semua menjawab / sebagian / belum / ada ragu, plus ringkasan per orang. Papan ketik: 1–9 pilih orang, A–D, R ragu, `-` kosong, ← → dan Enter. Muat ulang aman (posisi, jawaban, waktu pulih). Waktu habis → *Tambah 5 menit* atau *Nilai sekarang*.
2. **Perangkat masing-masing** (**Ruang ujian**): pemimpin menyalin **undangan/tautan** (`…/Latihan-UKP/#ujiantim/<kode>`, bisa langsung ke WhatsApp). Anggota membuka tautan di HP (tanpa daftar/onboarding), memilih nama, **Mulai mengerjakan** di layar CAT biasa, lalu setelah *Kirim dan akhiri* mendapat **kode jawaban** satu baris (`UKPJ1.…`) dan skornya sendiri. Kode itu dikirim ke grup; pemimpin menempelnya di **Kumpulkan jawaban**. Pemimpin bisa **Kerjakan bagian saya** di perangkatnya (terkumpul otomatis) dan **Tayangkan soal** ke proyektor. **Nilai sekarang** bisa *hanya yang sudah mengumpulkan*.

**Kode ujian** (`UT1.…`) memuat paket, urutan soal, menit, dan judul (Try Out 1–40 kurang dari 100 karakter); bisa juga ditempel di *Ikut ujian tim*. Tautan rusak → "Kode ujian tidak dikenali"; perangkat dengan versi aplikasi lebih lama → "Versi aplikasi berbeda: muat ulang". Tautan yang dibuka lagi setelah selesai menampilkan kode jawaban yang sama, bukan ujian baru.

**Kode jawaban dan ketikan.** *Kumpulkan jawaban* / *Tempel lembar jawab* membaca satu baris per orang: token `UKPJ1.…` (boleh terbungkus pesan WhatsApp) atau ketikan `Mia: ABCD-ab?c…` (huruf A–D, `-` kosong, `?` sesudah huruf = ragu; angka, spasi, titik diabaikan). Tiap baris menampilkan "38/40 terisi · 3 ragu · 2 kosong" dan peringatan bila panjangnya salah atau kode dari ujian lain; nama yang belum ada bisa ditambahkan sebagai peserta. Ada juga *Ketik manual per orang*.

**Lembar jawab pribadi** (`#lj`, juga dari halaman Ujian tim): untuk soal yang ditayangkan di layar bersama. Isi nama dan jumlah soal (atau **Pakai kode ujian**), lalu ketuk **A B C D / Ragu** per nomor; tersimpan otomatis di HP. **Salin kode jawaban** / **Kirim lewat WhatsApp** menghasilkan token yang sama dengan ujian di perangkat.

**Hasil ujian tim** (`#tim/sesi:<id>`): rata-rata skor, "Lulus (≥ 60) 2 dari 6", kosong, ragu; **skor per orang** (pill *Lulus* atau *kurang k soal*, rincian benar/salah/kosong/ragu); tabel **Per kelompok**; **Tempo**; matriks soal × orang; **Urutan bahas** dan **Mode bahas**; **Salin rekap untuk grup** / **Kirim rekap lewat WhatsApp**; **Ekspor CSV**. Sesi tercatat di Dasbor tim › Sesi terakhir sebagai "Ujian tim · <judul>", jawaban tiap orang masuk detail lokal berlabel *Ujian tim*. Jawaban pemimpin juga masuk statistik pribadinya (sekali saja).

**Tempo, triase, dan mode bahas.** Tempo bawaan Latihan bersama = **Ujian** (2,1 mnt/soal; *Longgar* 2,5 mnt). Bagian **Tempo** di evaluasi memproyeksikan laju tim ke 100 soal/210 menit. Triase per soal: *Dikuasai*, *Benar semua, belum mantap*, *Terbelah 4–2*, *Hanya 1 dari 6 benar*, *Semua belum tepat*, dengan saran penjelas bergilir ("Mia jelaskan ke Novia dan Alfi") dan alasan opsi keliru dari pola jebakan. **Urutan bahas** mendahulukan soal tersandung, lalu terbelah, lalu belum mantap; **Mode bahas** menampilkan satu soal per langkah (siapa memilih apa, alasan, stopwatch bahas; Enter = sudah dibahas, lanjut). Semua data tetap di perangkat pemimpin.

## Struktur situs (peta tampilan)

| Tampilan | Fungsi |
|---|---|
| **Mulai** (onboarding, 5 layar) | latar, pilih tingkat (penasihat), status (baru/mengulang/dari USKP), tanggal ujian + menit hari kerja/akhir pekan, cek perangkat → sesi pertama = diagnosis 3 soal/kelompok |
| **Hari Ini** | satu tombol "Mulai sesi" (Kilat 5 / Standar 12 / Penuh 30 menit) dengan komposisi blok; Angka hari ini; strip Kartu Hadir 7 hari; posisi penguasaan per kelompok; banner pendaftaran/tenggat/Minggu Tenang/Hari H |
| **Sesi** (runner) | Angka → Kartu jatuh tempo → Ringkas 1 topik → Soal → (Studi kasus) → **Bukti Sesi** bergaya kuitansi + stempel HADIR; "Cukup sampai sini" di tiap blok; Mode lelah (≥ 21.00); Mode Tenggat (tgl 15/20/akhir bulan) |
| **Belajar** (peta materi A/B/C) | kelompok materi kumulatif per tingkat dengan cincin penguasaan, format ujian, pindah target tingkat |
| **Cakupan materi resmi** (`#cakupan/A|B|C`) | daftar periksa 359 butir dari dokumen "Cakupan Materi Uji Kompetensi Perpajakan" KLC/BPPK (A 5, B 8, C 9 mata ujian): tiap butir terhubung ke topik aplikasi, status sudah dipelajari/belum, cari dan filter; indeks balik di halaman topik dan ringkasan di Info ujian |
| **Kelompok materi** | kisi-kisi resmi sebagai topik berstatus (Belum mulai → Dikenal → Terlatih → Dikuasai → Perlu segar), Latih 10 / Simulasi 40 / Dek kartu / Studi kasus, perubahan 2024–2026, dasar hukum, tips |
| **Topik** | ringkasan, angka kunci (berlaku sejak), contoh terpecahkan, jebakan umum, dasar hukum, cek pemahaman 5 soal, "Dengarkan" (TTS) |
| **Latih** | filter kelompok/topik/jenis/kesulitan, jumlah 5–40, hanya yang pernah keliru, drill "kecuali", hanya ketentuan 2025+, tempo 2,5 menit; pembahasan 4 blok (kalimat inti, jejak hitung, dasar hukum, mengapa opsi lain keliru); soal keliru diulang di akhir; **latihan bersama** (v7.9): papan jawaban per nama di bawah opsi, hasil per orang masuk Dasbor tim |
| **Ulang** (flashcard) | tangga interval 10 mnt → 1 → 3 → 7 → 14 → 30 → 60 → 120 hari; Lupa/Ingat/Mudah; dek per kelompok dan dek Perubahan 2025–2026; kartu otomatis dari soal yang keliru |
| **Studi kasus** | stepper 3–7 langkah, data lengket, tiga petunjuk bertahap, kalkulator terhubung |
| **Simulasi** | USKP 40 soal per kelompok · UKP komprehensif A/B/C (durasi resmi, jumlah soal perkiraan) · kustom · terbagi dua malam · tanpa batas waktu; layar CAT (timer, ragu, grid nomor per kelompok, pacing, autosave); hasil per kelompok + tempo, peta topik, ulas, tren vs garis 60 |
| **Kalkulator** (17) | PPh OP, PPh 21 TER, sanksi bunga KUP, tenggat & denda SPT, PPN, klasifikasi Pot/Put, pesangon, denda keberatan/banding, garis waktu PPSP, PPh Badan & 31E, penyusutan, pajak tangguhan, DER, PPh 24, BPT, PBB/BPHTB, bea meterai — hasil langsung, jejak hitung, asumsi, dasar hukum, mode "Tebak dulu" |
| **Rencana** | jam tersedia vs kebutuhan (A 70–110 / B 90–145 / C 110–180 jam), peringatan rencana padat, fase F0–F5, tugas logistik H-30/H-21/H-14/H-7, jendela pendaftaran, preset mengulang, stempel SIAP DAFTAR |
| **Kemajuan** | Kartu Hadir bulanan, peta kelemahan (bar topik, heatmap kelompok × jenis soal, sebab kesalahan), Buku Kesalahan bertag, laporan mingguan, lencana |
| **Referensi** | glosarium, indeks peraturan (status berlaku/diganti, pasal diujikan), perubahan 2024–2026, tabel angka, tarif bunga KMK bulanan |
| **Info ujian** | rezim UKP vs USKP, format per tingkat, cakupan izin, jadwal periode & pendaftaran, cek perangkat, peta mata ujian lama → kode UKP, FAQ transisi |
| **Etika & Profesi** | modul di luar skor UKP (ujian profesi asosiasi) + alur izin |
| **Strategi PG** | teknik pilihan ganda + drill jebakan stem |
| **Tutor AI** | tanya dalam konteks soal/topik/kalkulator/kasus (aktif saat dibuka di aplikasi Claude; kuota 20/hari; rujukan di luar indeks ditandai) |
| **Pengaturan** | tingkat, status, tanggal, menit, tema, teks besar, kurangi gerak, sorot kata kualifikasi, TTS, Tutor, ekspor/impor progres, hapus data |
| **Cari** (`/` atau Ctrl/Cmd+K) | topik, istilah, peraturan, kalkulator, kode soal, halaman |

Navigasi: bar bawah 5 tujuan di HP (Hari Ini · Belajar · Latih · Ulang · Lainnya), sidebar bergrup di desktop (Harian · Materi · Alat · Ujian), topbar dengan chip tingkat + hitung mundur, cari, Tutor.

## Kurikulum (data situs)

Kode kelompok materi mengikuti rilis cakupan materi BPPK Oktober 2026 (lihat `docs/KURIKULUM.md`):
A1 PPh OP · A2 KUP/PPSP/Pengadilan Pajak · A3 PPh Pot/Put · A4 PPN · A5 Bea Meterai · B6 PPh Badan · B7 Akuntansi Perpajakan · B8 PBB-P5L · C9 PPh Badan transaksi internasional · C10 Pajak Internasional · E Etika & Ujian Profesi (bukan UKP). Tingkat B diuji A1–B8, tingkat C diuji A1–C10.

## Struktur berkas

```
index.html            halaman utama (memuat semua modul data + skrip)
css/app.css           sistem desain "Buku Besar & Stempel" (token terang/gelap)
js/core.js            registri konten, penyimpanan, util DOM, router, dialog, toast, tema
js/learn.js           penguasaan topik, SRS kartu, kehadiran, komposer sesi, rencana, lencana
js/soal.js            komponen soal (mode belajar/ujian), panel umpan balik, flashcard
js/views-home.js      onboarding, Hari Ini, runner sesi, Bukti Sesi
js/views-belajar.js   peta materi, kelompok, topik, latih, ulang, studi kasus, strategi
js/views-simulasi.js  simulasi CAT, hasil, ulas
js/views-alat.js      kalkulator, rencana, kemajuan, referensi, info ujian, pengaturan, tutor, cari
js/app.js             shell, navigasi, pintasan, layar masuk tim, boot
js/akses.js           gerbang akses tim: konfigurasi sandi (hash) + SHA-256 cadangan
js/tim.js             dasbor tim: ringkasan, kirim ke server tim (api/*) atau db, jalur langsung (room), kode hasil
js/views-tim.js       Dasbor tim (#tim, #tim/<id>), mode Langsung, CSV, jawaban per soal + peta simulasi (sumber: server tim, db/room Claude, kode hasil, peserta latihan bersama lokal #tim/lokal:<nama>); Evaluasi tim UKP.c.evaluasiBersama + riwayat sesi #tim/sesi:<id> (v8.0)
js/kalkulator.js      mesin 19 kalkulator (murni; diuji di test/)
js/data/ref.js        data referensi (ujian, peraturan, KMK bunga, glosarium, angka hari ini, perubahan)
js/data/mu-<KODE>.js  modul konten per kelompok materi (topik, soal, kartu, kasus, tips)
docs/                 SPESIFIKASI.md (spesifikasi final), KURIKULUM.md, SKEMA-*.md, riset & desain
tools/                validate-module.js, shot.js (uji browser), build-artifact.js, akses-sandi.js (ganti sandi tim)
test/                 kalkulator.test.js (node --test test/)
dev/                  dev.html + stub-data.js (harness shell tanpa konten nyata)
```

## Menambah atau memperbaiki konten

1. Ikuti `docs/SKEMA-KONTEN.md`; satu berkas per kelompok (`js/data/mu-A2.js`), satu pemanggilan `UKP.register({...})`.
2. Jalankan `node tools/validate-module.js js/data/mu-A2.js` sampai `OK`.
3. Setiap angka wajib membawa dasar hukum + `berlakuSejak`; yang belum pasti beri `verifikasi: "◐"` + `peringatan`.
4. Perbarui `statusPer` / `versiKonten` di `js/data/ref.js` setiap rilis; tambahkan baris KMK tarif bunga bulan baru.

## Tahap berikutnya yang disarankan

Lihat `docs/SPESIFIKASI.md` §8: PWA/offline, peta formulir SPT (1770/1771/1721/SPT Masa PPN) dengan soal `baris-spt`, Rencana v1 (garis waktu mingguan, susun ulang), pengingat .ics, QR pindah perangkat, pipeline lint konten di CI, serta proxy Tutor AI untuk hosting di luar Claude.
