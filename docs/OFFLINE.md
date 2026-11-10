# Versi offline — Pelatih UKP tanpa internet (mis. di pesawat)

Status 30 Oktober 2026. Dokumen ini menjelaskan **versi berkas tunggal** `pelatih-ukp-offline.html`: satu berkas HTML mandiri yang memuat seluruh CSS, skrip, data materi, dan font, sehingga bisa dibuka tanpa jaringan dari penyimpanan perangkat.

Ada dua jalur offline. Keduanya saling melengkapi:

| | Berkas tunggal (`pelatih-ukp-offline.html`) | PWA dari alamat hosting (`sw.js`) |
|---|---|---|
| Cara mendapat | `node tools/build-offline.js`, atau Pengaturan › **Versi offline (untuk pesawat)** › *Unduh berkas offline* | buka alamat hosting saat online, lalu *Pasang aplikasi* / *Tambahkan ke Layar Utama* |
| Dibuka dari | `file://` (penyimpanan perangkat) atau aplikasi pembaca HTML | alamat hosting yang sama (`https://…`), cache service worker |
| Pembaruan konten | unduh/bangun ulang berkas | otomatis saat online (toast "Versi baru tersedia") |
| Progres | terpisah (asal `file://`) | sama dengan versi hosting (asal yang sama) |
| Cocok untuk | laptop, Android, berbagi berkas lewat USB/AirDrop | iPhone/iPad (cara teraman), Android |

## Arsitektur berkas tunggal

`tools/build-offline.js` memakai `index.html` sebagai templat, lalu:

1. **Stylesheet lokal** (`<link rel="stylesheet" href="css/app.css">`) diganti `<style data-sumber="css/app.css">` berisi isi berkas. Teks `</style` di dalamnya di-escape menjadi `<\/style`.
2. **Skrip lokal** (`<script src="js/…">`, 23 berkas) diganti `<script data-sumber="…">` berisi isi berkas, **urutan dokumen dipertahankan** (core.js → data → kalkulator → tampilan → app.js). Setiap berkas tetap di tag `<script>` sendiri, jadi galat sintaks di satu berkas tidak menghentikan berkas lain (sama seperti versi daring). Agar isi skrip tidak memutus tag: `</script` → `<\/script` dan `<!--` → `\x3C!--` (keduanya sah di string, templat, dan regex JS). Penggantian memakai fungsi pengganti, sehingga pola `$&`/`$1` di kode sumber tidak ditafsirkan.
3. **Google Fonts**: `<link rel="preconnect">` dan stylesheet `fonts.googleapis.com` dibuang. Sebagai gantinya `<style id="font-tertanam">` berisi `@font-face` dengan `src: url(data:font/woff2;base64,…)`. Sumber: CSS Google Fonts (`Public Sans` 400/500/600/700, `JetBrains Mono` 400/500/700) diambil dengan User-Agent Chrome agar mendapat woff2; hanya blok `/* latin */` yang dipakai. Kedua keluarga adalah font variabel: Google memberi berkas yang sama untuk semua bobot, jadi setiap keluarga disematkan **sekali** dengan rentang bobot (`font-weight: 400 700`). Total ±58 KB (±77 KB setelah base64).
4. **Penanda versi offline** di `<head>`, sebelum skrip apa pun:
   ```html
   <meta name="pelatih-ukp-offline" content="0.1.0 2026-10-30">   <!-- UKP.versi + tanggal build -->
   <script>window.UKP_OFFLINE = true;</script>
   ```
5. **PWA**: `<link rel="manifest">` dibuang (manifest hanya berlaku di http(s); dari `file://` hanya memicu galat konsol). Ikon berkas lokal disematkan sebagai data URI; ikon yang sudah berupa data URI dibiarkan. `js/app.js` tidak mendaftarkan service worker bila `window.UKP_OFFLINE` atau bukan http(s).
6. Judul menjadi `Pelatih UKP (offline)`. Komentar `<!--ARTIFACT-START-->`, `<!--ARTIFACT-HEAD-END-->`, `<!--ARTIFACT-BODY-START-->`, `<!--ARTIFACT-BODY-END-->` dipertahankan.

Pemeriksaan otomatis saat build (gagal → kode keluar 1): tidak ada lagi `<script src>`/stylesheet/manifest lokal, tidak ada rujukan Google Fonts di luar isi skrip, jumlah tag `<script>` = jumlah skrip + 1 (deteksi tag yang terputus), semua penanda ARTIFACT ada, dan `UKP_OFFLINE` mendahului core.js. Ukuran akhir dicetak; target **< 8 MB** (saat ini ±5,4 MB, sebagian besar `js/data/*.js`).

### Perilaku aplikasi saat `window.UKP_OFFLINE`

| Bagian | Perilaku |
|---|---|
| Tutor AI (`js/views-alat.js`, `UKP.tutor`) | `T.luring()` benar bila `window.UKP_OFFLINE` **atau** `navigator.onLine === false`. Dialog Tanya Tutor menampilkan pil "offline" dan pesan *"Tidak tersedia offline. Tutor AI memerlukan koneksi internet di aplikasi Claude."*; kotak tanya dan chip disembunyikan, diganti aksi cadangan (buka pembahasan, cek 5 soal, cari istilah, Referensi). Halaman Tutor AI memakai pesan yang sama. Bila jaringan putus saat dialog terbuka, *Kirim* dan *Uji saya* menolak dengan pesan yang sama. |
| Pengaturan › Versi offline | Tombol unduh diganti banner *"Anda sedang memakai versi offline"* (versi + tanggal dari meta), catatan bahwa progres versi offline dan daring terpisah, tombol **Ekspor progres** (berkas JSON) dan *Ke Data dan impor*. |
| Service worker | tidak didaftarkan (`js/app.js`). |
| Tautan eksternal (JDIH, portal BPPK) | tetap tampil; baru terbuka bila ada internet. |

## Membangun

### Dari baris perintah

```bash
node tools/build-offline.js                     # → dist/pelatih-ukp-offline.html (+ cache font di dist/fonts/)
node tools/build-offline.js --tanpa-font        # tanpa mengunduh font: berkas memakai font sistem
node tools/build-offline.js --keluar /tmp/x.html
```

Contoh keluaran:

```
font: jetbrains-mono-latin-400-700.woff2 (cache, 31 KB)
font: public-sans-latin-400-700.woff2 (cache, 26 KB)
dist/pelatih-ukp-offline.html ditulis: 5.636.850 byte (5,38 MB) · 1 stylesheet, 23 skrip, 2 berkas font tertanam (…) · versi 0.1.0 2026-10-30
ukuran di bawah target 8 MB (2,62 MB tersisa)
```

**Cache font** (`dist/fonts/*.woff2` + `dist/fonts/fonts.json`): berkas woff2 diunduh ulang hanya bila URL sumbernya berubah. Bila CSS Google Fonts tidak dapat diambil, cache dipakai; bila cache juga tidak ada, build **tetap berhasil** dengan peringatan dan berkas memakai font sistem (`--font-ui`/`--font-mono` di `css/app.css` sudah punya cadangan `system-ui`/`ui-monospace`).

### Dari browser (Pengaturan › Versi offline › *Unduh berkas offline (±5 MB)*)

Padanan build di sisi klien (`UKP.berkasOffline` di `js/views-alat.js`):

1. **Daftar aset** (`OFF.aset()`): `<link rel="stylesheet">` dan `<script src>` dari dokumen yang sedang berjalan, urutan dokumen, hanya yang satu asal dan berada di `css/` atau `js/`. Bila daftar tidak lengkap (tanpa `js/core.js` atau `js/app.js`), dipakai daftar tetap yang sama dengan `index.html` (`OFF_TETAP`; perbarui bila menambah modul).
2. **Kerangka `<body>`** diambil saat `views-alat.js` dimuat (sebelum boot merender), tanpa skrip/gaya/meta/komentar; cadangan: salinan kerangka `index.html`.
3. Setiap berkas di-`fetch` (URL relatif, satu asal) dengan progres *"n dari m berkas"*; font diambil dari `fonts.googleapis.com`/`fonts.gstatic.com` dengan mode `cors` (batas waktu 15 detik). Gagal (CSP, tanpa jaringan) → dilewati, berkas memakai font sistem.
4. HTML dirakit dengan aturan escape yang sama, `<meta name="pelatih-ukp-offline">` + `window.UKP_OFFLINE = true` di `<head>`, ikon data URI ikut disalin.
5. **Simpan**: di aplikasi Claude (Artifact dengan kapabilitas `downloads` aktif) lewat `claude.use('downloads').save({ filename, data: Blob })`; viewer dapat menolak (status "Penyimpanan dibatalkan"). Selain itu, atau bila kapabilitas menolak dengan kode lain, lewat `<a download>` + URL blob. Hasil (nama, ukuran, font tertanam atau sistem) ditampilkan di bawah tombol.

Batasan tombol: halaman yang dibuka dari `file://` tidak boleh membaca berkas lain (browser memblokir `fetch`), jadi tombol menampilkan penjelasan dan menyarankan menyalin seluruh folder atau membuka lewat hosting. Di Artifact claude.ai, sandbox iframe dapat memblokir pengambilan berkas pendamping atau unduhan biasa; pesan galat memberi tahu dan build baris perintah tetap tersedia.

## Batasan

- **Tutor AI tidak tersedia** offline (butuh internet dan aplikasi Claude). Pembahasan empat blok, materi, kartu, studi kasus, simulasi, kalkulator, referensi, dan peta formulir berjalan penuh.
- **Progres terpisah per asal (origin).** Penyimpanan browser (`localStorage`, kunci `ukp.v1`) terikat ke asal halaman: versi hosting `https://…`, Artifact claude.ai, dan berkas `file://` masing-masing punya progres sendiri. Pindahkan lewat **Pengaturan › Data dan pindah perangkat**: *Salin ekspor*/*Ekspor progres* di satu versi, *Impor* di versi lain (impor menggantikan data tujuan).
- Di sebagian browser, penyimpanan `file://` terikat ke lokasi berkas. Jangan memindahkan atau mengganti nama berkas setelah mulai dipakai; untuk memperbarui, timpa berkas lama di lokasi yang sama, atau ekspor dulu.
- **Konten beku** pada tanggal build (lihat meta `pelatih-ukp-offline` dan kaki Pengaturan). Unduh/bangun ulang setelah pembaruan konten.
- Font tertanam hanya subset latin; glyph di luar subset (mis. ◐, →, ≤) memakai font sistem, sama seperti versi daring tanpa subset tambahan.
- Mode privat/penyamaran dapat menghapus progres saat jendela ditutup.
- **Artifact claude.ai tidak memakai service worker.** Halaman Artifact berjalan di iframe ber-sandbox (`*.claudeusercontent.com`) dan host-nya menolak skrip service worker (HTTP 403); halaman itu memang butuh internet. `js/app.js` melewatkan pendaftaran bila hostname cocok pola claude atau halaman dibingkai (`window.top !== window`), lalu melepas sisa pendaftaran dan cache `ukp-*` dari versi lama; `sw.js` juga membersihkan diri (hapus cache, `unregister`, muat ulang klien) bila sempat aktif di host tersebut. PWA tetap berjalan normal di hosting statis.

## Penjaga muat (boot guard)

Skrip inline kecil di `index.html` (sebelum `js/core.js`) menjaga pengalaman saat halaman gagal atau lambat dimuat:

- menulis progres "Memuat materi… n/23 modul" di layar kerangka (jumlah modul distempel `tools/build-artifact.js`);
- menangkap `<script>`/`<link>` yang gagal (event `error` fase tangkap) dan galat skrip; berkas yang gagal → panel langsung tampil; bila aplikasi akhirnya tetap tampil, `js/app.js` menawarkan toast *Muat ulang* ("n berkas materi gagal dimuat");
- bila tidak ada modul baru selama 20 detik (dan ≥ 25 detik sejak mulai) → panel pemulihan: **Muat ulang**, **Bersihkan cache & muat ulang** (lepas service worker + hapus Cache Storage; `localStorage` tidak disentuh), **Salin laporan** (waktu, modul termuat, alamat, peramban, status service worker, daftar galat) untuk dikirim ke pengembang;
- `js/app.js` memanggil `window.__ukpMuat.siap()` setelah render pertama; render aplikasi menggantikan panel bila akhirnya siap.

Uji: `node tools/shot.js` tidak mencakupnya; simulasi manual dengan Playwright (`page.route` untuk 404, tunda, atau tidak pernah menjawab satu modul) ada di catatan QA.

## Cara pakai per perangkat

Daftar periksa sebelum berangkat: (1) unduh atau bangun berkas saat masih online; (2) buka sekali, selesaikan onboarding atau **Impor** progres dari versi daring; (3) uji sekali dalam mode pesawat; (4) setelah mendarat, **Ekspor progres** dari versi offline lalu **Impor** di versi daring bila ingin melanjutkan di sana.

**Laptop (Windows, macOS, Linux)**
1. Simpan `pelatih-ukp-offline.html` di folder tetap (mis. Dokumen).
2. Klik dua kali: terbuka di Chrome, Edge, Firefox, atau Safari tanpa internet. Tandai (bookmark) agar mudah dibuka lagi.
3. Progres tersimpan di browser itu untuk berkas di lokasi itu.

**Android**
1. Unduh saat online; berkas masuk folder *Download*.
2. Buka aplikasi Files/File Saya › Download › ketuk berkas › pilih Chrome (atau Firefox).
3. Di sebagian perangkat, ketik `file:///sdcard/Download/pelatih-ukp-offline.html` di bilah alamat Chrome.
4. Alternatif: pasang PWA dari alamat hosting (menu ⋮ › *Instal aplikasi*), buka sekali saat online.

**iPhone dan iPad**
- Membuka dari aplikasi Files (pratinjau Quick Look) atau membagikan ke Safari **tidak menjalankan skrip**: halaman berhenti di "Memuat materi…".
- Pakai aplikasi **Documents by Readdle** (impor berkas, lalu ketuk untuk membuka di peramban bawaannya), atau Chrome iOS lewat *Bagikan › Buka dengan Chrome*. Uji dulu dalam mode pesawat.
- **Cara teraman di iPhone: PWA.** Buka alamat hosting Pelatih UKP di Safari › *Bagikan* › *Tambahkan ke Layar Utama*, lalu buka sekali saat masih online agar service worker menyimpan semua aset.

Petunjuk yang sama tampil di aplikasi (Pengaturan › Versi offline, bagian lipat per perangkat).

## Pengujian

```bash
node --check tools/build-offline.js js/views-alat.js
node tools/build-offline.js && node --test test/
```

Uji browser (Playwright, Chromium) yang dijalankan untuk fitur ini:

1. `dist/pelatih-ukp-offline.html` dibuka lewat `file://` dengan `context.route('**/*')` membatalkan semua permintaan selain `file:`/`data:`/`blob:` dan `context.setOffline(true)`: **0 permintaan jaringan**, tanpa galat konsol; onboarding 5 layar → diagnosis 3 soal → Hari Ini → Latih 3 soal (jawaban tercatat) → Kalkulator PPN → Referensi; dialog Tutor menampilkan "Tidak tersedia offline" tanpa kotak tanya; kartu Pengaturan menampilkan "Anda sedang memakai versi offline"; *Ekspor progres* menghasilkan JSON sah; `document.fonts` memuat `Public Sans` dan `JetBrains Mono` (status `loaded`); muat ulang mempertahankan progres; tanpa gulir horizontal di 390 px.
2. `index.html` lewat `python3 -m http.server`: klik *Unduh berkas offline* → `page.waitForEvent('download')` menangkap `pelatih-ukp-offline.html` (±5,4 MB, 25 dari 25 langkah, font tertanam) → berkas hasil diuji ulang seperti butir 1 (lulus).
3. Jalur degradasi: font Google diblok → berkas tetap jadi dengan font sistem; tombol di halaman `file://` → pesan penjelasan, tombol aktif kembali; `navigator.onLine === false` di versi daring → Tutor menampilkan pesan offline.
