# Membagikan Pelatih UKP ke tim (masuk dengan nama, admin dengan kata sandi)

Panduan ini menjelaskan cara memasang Pelatih UKP di alamat web sendiri, misalnya `https://pelatih-ukp-tim.onrender.com`, yang **hanya bisa dibuka setelah masuk**. Anggota tim tidak perlu akun Claude.

Konfigurasi bawaan (`render.yaml`) memakai **mode masuk nama** (`MASUK_NAMA=1`), sesuai kebutuhan pemakaian internal: anggota cukup membuka tautan, mengetik **Nama Anda**, lalu aplikasi terbuka, **tanpa kata sandi**. Hanya admin yang memakai sandi, sehingga **Dasbor tim** (hasil semua anggota) tetap terlindungi. Baca dulu [Masuk dengan nama saja](#masuk-dengan-nama-saja-masuk_nama) bagian keamanan. Bila tim butuh sandi per anggota, matikan mode ini (bagian yang sama menjelaskan caranya).

Isi folder `deploy/`:

| Berkas | Gunanya |
|---|---|
| `server.js` | Server web berlogin. Tanpa instalasi tambahan, cukup Node.js 18 atau lebih baru (disarankan 22). |
| `lib-pengguna.js` | Penyimpanan akun: kata sandi disimpan sebagai hash scrypt, tidak pernah sebagai teks biasa. |
| `kelola-pengguna.js` | Menambah, mengganti sandi, menghapus, dan menampilkan daftar akun; memberi atau mencabut peran admin Dasbor tim. |
| `lib-hasil.js` | Pemeriksaan dan pembersihan ringkasan hasil yang dikirim anggota ke Dasbor tim. |
| `jalankan.sh` | Menjalankan server di komputer sendiri dengan satu perintah. |
| `Dockerfile`, `Dockerfile.dockerignore` | Untuk VPS atau komputer kantor yang memakai Docker. |
| `render.yaml` | Konfigurasi siap pakai untuk Render (hosting gratis). |
| `fly.toml` | Contoh konfigurasi untuk Fly.io. |
| `data/` | Tempat akun (`pengguna.json`), sesi login (`sesi.json`), ringkasan hasil Dasbor tim (`hasil.json`), dan waktu terakhir masuk (`masuk.json`) disimpan. **Rahasia: jangan pernah diunggah ke GitHub.** |

### Langkah tercepat (Render, Blueprint)

1. Unggah proyek ke repo GitHub **Private** (tanpa `dist/` dan `deploy/data/`), lalu salin `deploy/render.yaml` ke akar repo sebagai `render.yaml` (A1).
2. Di <https://render.com>: **New › Blueprint**, pilih repo itu. `MASUK_NAMA=1` sudah terisi dari `render.yaml`.
3. Isi `ADMIN_USER` dan `ADMIN_PASS` (akun pemimpin tim, otomatis **admin Dasbor tim**; sandi minimal 8 karakter, disarankan 12 atau lebih). **Wajib:** tanpa admin bersandi, server menolak berjalan dalam mode masuk nama. `PENGGUNA_TIM`, `DAFTAR_NAMA`, dan `KONTAK_ADMIN` boleh dikosongkan.
4. Tunggu status **Live**, buka tautannya, klik **Masuk sebagai admin**, lalu masuk dengan `ADMIN_USER` dan `ADMIN_PASS`.
5. Kirim **tautannya saja** ke anggota tim. Anggota cukup membuka tautan, mengetik namanya (misalnya `Rina`), lalu menekan **Masuk**. Akunnya dibuat otomatis saat pertama masuk, dan hasilnya muncul di **Dasbor tim** milik admin (lihat [Dasbor tim di server](#dasbor-tim-di-server)).
6. *(Disarankan)* Isi `DAFTAR_NAMA` dengan nama anggota (`Rina, Budi, Citra`) agar hanya nama itu yang bisa masuk dan anggota memilih dari daftar, bukan salah ketik.

Rincian setiap langkah ada di bagian A. Pilih salah satu cara:

- **A. Render (gratis, paling cepat, tanpa server sendiri).** Cocok untuk kebanyakan tim.
- **B. VPS atau komputer kantor** dengan Docker, atau Node.js langsung.
- **C. Tanpa server: Cloudflare Pages + Cloudflare Access.** Login memakai kode yang dikirim ke email, bukan sandi.

---

## A. Cara tercepat dan gratis: Render

Waktu yang dibutuhkan sekitar 20–30 menit. Anda memerlukan akun GitHub (tempat menyimpan berkas) dan akun Render (tempat aplikasi berjalan). Keduanya gratis.

### A1. Simpan proyek di GitHub

Render mengambil berkas aplikasi dari sebuah *repository* (repo) GitHub, jadi proyek perlu diunggah ke GitHub terlebih dahulu.

1. Buat akun di <https://github.com> (lewati bila sudah punya).
2. Klik **+** di kanan atas, pilih **New repository**.
   - *Repository name*: misalnya `pelatih-ukp`.
   - Pilih **Private** agar isinya tidak terlihat publik.
   - Klik **Create repository**.
3. Unggah berkas proyek dengan salah satu cara berikut.
   - **Lewat browser (paling mudah).** Di halaman repo yang masih kosong, klik **uploading an existing file** (atau **Add file › Upload files**). Buka folder proyek di komputer, lalu seret **isi** folder ke kotak unggah: `index.html`, `sw.js`, `manifest.webmanifest`, `README.md`, serta folder `css`, `js`, `icons`, `tools`, dan `deploy`. Folder `docs`, `test`, dan `dev` boleh ikut. Klik **Commit changes**.
   - **Lewat GitHub Desktop.** Pasang <https://desktop.github.com>, pilih **File › Add local repository**, lalu pilih folder proyek. Bila diminta, klik *create a repository*. Setelah itu klik **Publish repository** dan centang *Keep this code private*.
   - **Jangan unggah** folder `dist/` (Render membangunnya sendiri) dan **jangan pernah unggah** `deploy/data/`, karena isinya hash sandi dan sesi. Saat mengunggah lewat browser, aturan `.gitignore` tidak berlaku, jadi periksa dulu bahwa `deploy/data` tidak ikut terseret.
4. *(Opsional, untuk cara A2-b)* Salin `deploy/render.yaml` ke akar repo dengan nama `render.yaml`. Caranya: di GitHub klik **Add file › Create new file**, beri nama `render.yaml`, tempel isi `deploy/render.yaml`, lalu klik **Commit**.

### A2. Buat layanan di Render

1. Daftar di <https://render.com> memakai **Sign in with GitHub**. Izinkan Render membaca repo `pelatih-ukp` (pilih *Only select repositories*).
2. Pilih salah satu cara berikut.

   **A2-a. Isi formulir (disarankan).** Klik **New › Web Service**, pilih repo `pelatih-ukp`, lalu isi:

   | Kolom | Isi |
   |---|---|
   | Name | `pelatih-ukp-tim` (menjadi bagian alamat web) |
   | Region | Singapore |
   | Branch | `main` |
   | Runtime / Language | Node |
   | Build Command | `node tools/build-artifact.js && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/` |
   | Start Command | `node deploy/server.js` |
   | Instance Type | **Free** |

   Di bagian **Environment Variables**, klik **Add Environment Variable** untuk setiap baris berikut:

   | Key | Value |
   |---|---|
   | `NODE_VERSION` | `22` |
   | `MASUK_NAMA` | `1` (anggota masuk dengan nama saja; lihat [Masuk dengan nama saja](#masuk-dengan-nama-saja-masuk_nama)). Kosongkan bila setiap anggota memakai sandi. |
   | `DAFTAR_NAMA` | *(opsional, disarankan)* nama anggota yang boleh masuk, dipisah koma atau baris, misalnya `Rina, Budi, Citra` |
   | `ADMIN_USER` | nama pengguna admin, misalnya `admin` |
   | `ADMIN_PASS` | sandi admin, minimal 8 karakter. Gunakan yang panjang, misalnya 4 kata acak. |
   | `RAHASIA_SESI` | teks acak minimal 32 karakter (klik **Generate** bila tombolnya tersedia) |
   | `COOKIE_SECURE` | `1` |
   | `TRUST_PROXY` | `1` |
   | `PENGGUNA_TIM` | akun bersandi tambahan, lihat A3 (tidak perlu dalam mode masuk nama) |
   | `KONTAK_ADMIN` | *(opsional)* email admin, untuk tautan "Lupa sandi? Hubungi admin" |

   Di **Advanced**, isi *Health Check Path* dengan `/sehat`. Terakhir, klik **Deploy Web Service**.

   **A2-b. Blueprint.** Cara ini berlaku bila `render.yaml` sudah ada di akar repo. Klik **New › Blueprint**, pilih repo, lalu Render menanyakan nilai `ADMIN_USER`, `ADMIN_PASS`, `PENGGUNA_TIM`, `DAFTAR_NAMA`, dan `KONTAK_ADMIN`. Nilai `RAHASIA_SESI` dibuat otomatis dan `MASUK_NAMA` sudah `1`.
3. Tunggu sampai status berubah menjadi **Live** (2–5 menit). Tautan muncul di bagian atas halaman, misalnya `https://pelatih-ukp-tim.onrender.com`.
4. Buka tautan itu. Halaman **Masuk** akan muncul. Dalam mode masuk nama, klik **Masuk sebagai admin** (atau ketik nama admin lalu tekan **Masuk**; kolom sandi muncul di tahap kedua), lalu masuk dengan `ADMIN_USER` dan `ADMIN_PASS`.

### A3. Menambah akun anggota tim di Render

**Dalam mode masuk nama (`MASUK_NAMA=1`, bawaan) langkah ini tidak perlu:** akun anggota dibuat otomatis saat anggota pertama kali mengetik namanya. Bagian ini hanya untuk akun **bersandi** (admin tambahan, atau bila mode masuk nama dimatikan).

Paket gratis Render **tidak menyediakan Shell maupun disk permanen**. Akun yang dibuat dengan perintah di server akan hilang setiap kali layanan tidur atau restart. Karena itu, di paket gratis akun tim diatur lewat variabel `PENGGUNA_TIM`:

1. Di Render, buka layanan Anda, lalu **Environment › PENGGUNA_TIM › Edit**.
2. Tulis satu akun per baris dengan format `nama:sandi`, misalnya:
   ```
   andi:Kopi-Pagi-Hujan-27
   siti:Meja-Biru-Lampu-81:admin
   budi:Sepeda-Kuning-Awan-45
   ```
   Akhiran `:admin` (di sini `siti`) memberi peran **admin Dasbor tim**: melihat hasil latihan dan simulasi semua anggota. Akun `ADMIN_USER` selalu admin. Karena akhiran ini, sandi tidak boleh diakhiri dengan teks `:admin`.
   Aturan nama: 2–32 karakter berupa huruf kecil, angka, titik, garis bawah, atau tanda hubung. Sandi minimal 8 karakter (disarankan 12 atau lebih).

   **Satu akun per baris.** Semua teks setelah tanda `:` pertama dianggap sandi, termasuk koma atau titik koma. Jangan menggabungkan beberapa akun dalam satu baris dengan koma. Baris seperti `andi:Sandi-1,siti:Sandi-2` ditolak, dan log Render mencatat `[galat] PENGGUNA_TIM baris …` beserta nama akunnya. Setelah menyimpan, periksa tab **Logs**: tidak boleh ada baris `[galat] PENGGUNA_TIM`.
3. Klik **Save, rebuild, and deploy**. Setelah status kembali **Live**, akun langsung bisa dipakai.
4. Kirim tautan, nama pengguna, dan sandi ke setiap anggota **lewat jalur pribadi**, misalnya chat pribadi, bukan grup.

Ada cara yang lebih aman bila Anda memiliki Node.js di komputer: simpan hash sandi, bukan sandinya. Jalankan perintah berikut di folder proyek:
```
node deploy/kelola-pengguna.js hash andi
```
Ketik sandi dua kali, lalu salin baris `andi:scrypt$16384$8$1$...` yang keluar ke `PENGGUNA_TIM`, juga satu akun per baris.

- **Menghapus akun:** hapus barisnya dari `PENGGUNA_TIM`, lalu simpan.
- **Mengganti sandi:** ubah sandinya di baris itu, lalu simpan. Sesi lama akun tersebut otomatis berakhir.
- Bila Anda memakai paket berbayar dengan **Disk** dan **Shell**, akun juga bisa dikelola dengan perintah di Shell Render, sama seperti bagian B3.

### A4. Hal yang perlu diketahui tentang paket gratis Render

- Layanan **tidur setelah sekitar 15 menit tanpa pengunjung**. Pengunjung berikutnya menunggu sekitar 30–60 detik sampai layanan bangun kembali. Setelah aplikasi pernah dibuka sekali, service worker menyimpan aset di perangkat, sehingga pembukaan berikutnya terasa lebih cepat.
- Dengan `RAHASIA_SESI` terisi, admin dan anggota **tidak perlu masuk ulang** setelah layanan tidur atau restart. Sesi berlaku 30 hari. Dalam mode masuk nama, `pengguna.json` memang kosong lagi setelah layanan bangun, tetapi akun anggota dibuat ulang otomatis dari sesi bertanda tangan di perangkatnya (tetap mengikuti `DAFTAR_NAMA` dan `BATAS_AKUN`), sehingga anggota tidak perlu mengetik namanya lagi. Bila `RAHASIA_SESI` kosong atau diganti, semua orang harus masuk ulang.
- Jatah gratis 750 jam per bulan cukup untuk satu layanan yang menyala terus.
- Untuk memperbarui materi, unggah berkas yang berubah ke GitHub (lihat D3). Render membangun ulang secara otomatis.

---

## B. VPS atau komputer kantor

Gunakan cara ini bila Anda punya server sendiri, misalnya VPS Linux atau PC kantor yang selalu menyala.

### B1. Dengan Docker (disarankan)

Jalankan perintah berikut di folder proyek di server:

```sh
# 1) Bangun salinan situs (ulangi setiap kali materi diperbarui)
node tools/build-artifact.js && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/
#    Tanpa Node di server? Jalankan baris di atas di komputer lain, lalu salin folder dist/site ke server.

# 2) Bangun image
docker build -f deploy/Dockerfile -t pelatih-ukp .

# 3) Jalankan. Data akun dan sesi disimpan di volume "ukp-data" agar aman saat image diperbarui.
docker run -d --name pelatih-ukp --restart unless-stopped \
  -p 127.0.0.1:8080:8080 \
  -v ukp-data:/app/deploy/data \
  -e ADMIN_USER=admin -e ADMIN_PASS='ganti-dengan-sandi-panjang' \
  -e MASUK_NAMA=1 \
  -e RAHASIA_SESI="$(openssl rand -base64 48)" \
  -e TRUST_PROXY=1 \
  pelatih-ukp

#    MASUK_NAMA=1: anggota masuk hanya dengan nama (hapus baris itu untuk mode sandi per anggota).
#    Opsional: -e DAFTAR_NAMA='Rina, Budi, Citra'

# 4) Mode masuk nama: akun anggota dibuat otomatis. Akun bersandi (mode sandi, atau admin tambahan) ditambah begini;
#    sandi ditanya tanpa tampil di layar. "hapus" juga menghapus akun anggota tanpa sandi.
docker exec -it pelatih-ukp node deploy/kelola-pengguna.js tambah andi
docker exec -it pelatih-ukp node deploy/kelola-pengguna.js daftar
docker exec -it pelatih-ukp node deploy/kelola-pengguna.js ubah-sandi andi
docker exec -it pelatih-ukp node deploy/kelola-pengguna.js hapus andi

# Memperbarui versi: ulangi langkah 1 dan 2, lalu:
docker rm -f pelatih-ukp   # lalu jalankan lagi perintah langkah 3. Akun dan sesi tetap ada di volume.
```

Perintah `-p 127.0.0.1:8080:8080` membuat server hanya bisa diakses dari mesin itu sendiri. Agar bisa dibuka dari luar, pasang HTTPS di depannya (B3). `TRUST_PROXY=1` hanya benar bila **semua** akses lewat Caddy/Nginx itu.

Untuk uji coba di jaringan kantor tanpa HTTPS, gunakan `-p 8080:8080` **dan hapus baris `-e TRUST_PROXY=1`**, lalu buka `http://<IP-komputer>:8080`. Tanpa proxy, `TRUST_PROXY=1` membuat komputer lain di jaringan bisa memalsukan IP lewat header `X-Forwarded-For` dan melewati batas percobaan login. Karena tanpa HTTPS, sandi juga dikirim tanpa enkripsi, jadi cara ini hanya untuk jaringan tepercaya.

Container dimulai sebagai root hanya untuk menjadikan folder data milik pengguna `node`, lalu server langsung melepas hak root (`JALANKAN_SEBAGAI=node` di Dockerfile). Berkas yang ditulis `docker exec … kelola-pengguna.js` otomatis menjadi milik `node`, jadi tetap terbaca server.

### B2. Dengan Node.js langsung (tanpa Docker)

```sh
# Pasang Node.js 22 LTS dari https://nodejs.org (Windows/macOS: penginstal; Linux: paket distribusi atau nvm)
cd /lokasi/proyek/pelatih-ukp
node deploy/kelola-pengguna.js tambah admin --admin   # admin bersandi; sandi ditanya tanpa tampil
MASUK_NAMA=1 sh deploy/jalankan.sh                # anggota masuk dengan nama; membangun dist/site bila belum ada, lalu jalan di http://localhost:8080
# Mode sandi per anggota: sh deploy/jalankan.sh (tanpa MASUK_NAMA=1)
# Port lain:          PORT=3000 sh deploy/jalankan.sh
# Bangun ulang situs: sh deploy/jalankan.sh --bangun
```

Di Windows tanpa `sh`, jalankan perintah berikut di PowerShell:
```powershell
node tools/build-artifact.js
mkdir dist\site -Force; Copy-Item index.html,sw.js,manifest.webmanifest dist\site; Copy-Item css,js,icons dist\site -Recurse -Force
node deploy/kelola-pengguna.js tambah admin
node deploy/server.js
```

Agar server tetap berjalan setelah komputer restart, gunakan **pm2**. Satu-satunya hal yang perlu dipasang lewat npm adalah pm2 itu sendiri; servernya tidak membutuhkan paket npm.

```sh
npm install -g pm2
SITE_DIR="$PWD/dist/site" HOST=127.0.0.1 TRUST_PROXY=1 RAHASIA_SESI="$(openssl rand -base64 48)" pm2 start deploy/server.js --name pelatih-ukp
pm2 save && pm2 startup     # ikuti perintah yang dicetak
pm2 logs pelatih-ukp        # melihat log
```

`HOST=127.0.0.1` membuat port 8080 hanya terbuka untuk Caddy/Nginx di mesin yang sama (B3). Tanpa proxy (akses langsung `http://<IP>:8080` di jaringan kantor), jangan pakai `TRUST_PROXY=1`, dan atur `HOST=0.0.0.0`.

### B3. HTTPS dengan Caddy atau Nginx

Untuk langkah ini Anda memerlukan nama domain, misalnya `ukp.kantor-anda.co.id`, yang diarahkan (DNS A record) ke IP server.

**Caddy** (sertifikat HTTPS otomatis, paling mudah). Isi `/etc/caddy/Caddyfile`:
```
ukp.kantor-anda.co.id {
    encode gzip
    reverse_proxy 127.0.0.1:8080
}
```
Lalu jalankan `sudo systemctl reload caddy`.

**Nginx** + Certbot:
```nginx
server {
    server_name ukp.kantor-anda.co.id;
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    listen 80;
}
```
Lalu jalankan `sudo certbot --nginx -d ukp.kantor-anda.co.id`.

Di balik Caddy atau Nginx, setel `TRUST_PROXY=1` agar pembatasan percobaan login memakai IP asli pengunjung. Server mendeteksi HTTPS dari header `X-Forwarded-Proto` lalu memberi cookie atribut `Secure`. Anda juga bisa memaksanya dengan `COOKIE_SECURE=1`.

Pengaman bawaan saat `TRUST_PROXY=1`:
- Bila `HOST` tidak diatur, server hanya mendengarkan di `127.0.0.1`. Docker, Render, dan Fly mengatur `0.0.0.0` sendiri.
- Header `X-Forwarded-For` hanya dipercaya bila koneksi datang dari alamat loopback atau jaringan privat (`127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `100.64.0.0/10`, `::1`, `fc00::/7`), yaitu proxy di mesin yang sama atau jembatan Docker. Dari alamat lain, header itu diabaikan.
- Bila proxy berada di alamat lain, atau Anda ingin daftar yang lebih ketat, isi `TRUSTED_PROXY_CIDR`, misalnya `TRUSTED_PROXY_CIDR=127.0.0.1/32,172.17.0.1/32`.

### B4. Fly.io (alternatif hosting dengan disk permanen)

Lihat komentar di `deploy/fly.toml`. Ringkasnya, jalankan dari akar proyek setelah `dist/site` dibangun:
```sh
fly launch --no-deploy --copy-config --config deploy/fly.toml
fly volumes create ukp_data --size 1 --region sin --config deploy/fly.toml
fly secrets set ADMIN_USER=admin ADMIN_PASS='ganti-sandi' RAHASIA_SESI="$(openssl rand -base64 48)" --config deploy/fly.toml
fly deploy . --config deploy/fly.toml --dockerfile deploy/Dockerfile
fly ssh console -C "node deploy/kelola-pengguna.js tambah andi --sandi 'Sandi-Andi-123'" --config deploy/fly.toml
```

Volume Fly dipasang milik root. Image ini memulai server sebagai root, menjadikan folder data milik `node`, lalu melepas hak root sebelum membaca atau menulis data. `fly ssh console` berjalan sebagai root, dan berkas akun yang ditulisnya otomatis diberikan ke `node`. Bila log menampilkan `[galat] folder data … TIDAK BISA DITULIS`, berarti image lama (dengan `USER node`) masih dipakai, jadi bangun dan deploy ulang. Catatan: alur ini diuji dengan simulasi volume milik root, belum di Fly sungguhan.

---

## C. Tanpa server: Cloudflare Pages + Cloudflare Access

Dengan cara ini tidak ada server yang perlu dijalankan. Situs statis dijaga oleh layanan login Cloudflare. Anggota tim memasukkan **email**, lalu menerima **kode sekali pakai**. Tidak ada sandi yang perlu dibagikan. Gratis untuk maksimal 50 pengguna (Cloudflare Zero Trust Free).

1. Bangun situs: `node tools/build-artifact.js && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/`
2. Masuk ke <https://dash.cloudflare.com>, pilih **Workers & Pages › Create › Pages › Upload assets**, beri nama proyek (misalnya `pelatih-ukp-tim`), lalu unggah **isi** folder `dist/site`. Situs akan aktif di `https://pelatih-ukp-tim.pages.dev`.
3. **Kunci situs sebelum dibagikan.** Buka **Zero Trust** (pilih paket Free; Cloudflare mungkin meminta data kartu walau gratis), lalu pilih **Access › Applications › Add an application › Self-hosted**.
   - *Application domain*: `pelatih-ukp-tim.pages.dev`. Tambahkan juga `*.pelatih-ukp-tim.pages.dev` agar alamat pratinjau ikut terkunci.
   - *Policy*: Action **Allow**, lalu *Include › Emails* berisi daftar email anggota tim, atau *Emails ending in* `@kantor-anda.co.id`.
   - *Login method*: **One-time PIN**.
4. Buka tautan di jendela penyamaran untuk memastikan halaman login Cloudflare muncul lebih dulu.
5. Untuk memperbarui versi, ulangi langkah 1, lalu di proyek Pages pilih **Create deployment** dan unggah ulang `dist/site`.

Catatan: pada cara ini `deploy/server.js` tidak dipakai. Dukungan PWA bisa terbatas, karena peramban mengambil manifest tanpa cookie Access. Aplikasi tetap berjalan normal di browser.

---

## Masuk dengan nama saja (MASUK_NAMA)

Mode ini aktif bila variabel `MASUK_NAMA=1` (bawaan di `render.yaml`). Cocok untuk tim internal yang ingin anggotanya langsung berlatih tanpa mengingat sandi.

**Cara kerjanya.**
- Halaman `/masuk` hanya menampilkan kolom **Nama Anda** dan tombol **Masuk**. Nama 2–40 karakter: huruf, angka, spasi, titik, atau tanda hubung, diawali huruf atau angka.
- Spasi berlebih dirapikan. Nama tampil seperti yang diketik pertama kali (`Rina Putri`), sedangkan kunci akunnya huruf kecil dengan tanda hubung (`rina-putri`). Karena itu `rina putri`, `RINA  PUTRI`, dan `Rina Putri` masuk ke **akun yang sama**, dan hasilnya terkumpul di satu baris dasbor.
- Akun anggota dibuat otomatis saat pertama kali masuk, tersimpan di `pengguna.json` sebagai `"tanpaSandi": true` dengan `namaTampil`, dan **tidak pernah admin**.
- **Admin tetap wajib sandi.** Bila nama yang diketik adalah akun admin atau akun bersandi lain (`ADMIN_USER`, `PENGGUNA_TIM`, atau akun dari `kelola-pengguna.js`), halaman yang sama meminta kata sandi di tahap kedua. Tautan kecil **Masuk sebagai admin** langsung menampilkan kolom nama dan sandi.
- Server **menolak berjalan** dalam mode ini bila tidak ada satu pun admin bersandi, dengan pesan `MASUK_NAMA=1 butuh minimal satu admin BERSANDI …` di log. Atur `ADMIN_USER`/`ADMIN_PASS`, baris `nama:sandi:admin` di `PENGGUNA_TIM`, atau `kelola-pengguna.js tambah <nama> --admin`.
- Sesi, Dasbor tim, API, dan tombol **Keluar** sama seperti mode sandi. Pengaturan › Tim di aplikasi menulis "Masuk sebagai Rina Putri", dan dasbor admin menampilkan nama tampilan itu.

**Keamanan: baca sebelum memakai.**
- **Siapa pun yang memegang tautan bisa masuk atas nama siapa pun** (kecuali nama akun bersandi), termasuk memakai nama anggota lain dan mengirim hasil atas namanya. Mode ini hanya pantas untuk pemakaian internal dengan tautan yang dibagikan terbatas, dan materi yang tidak rahasia.
- Isi materi tetap tidak bisa dibuka tanpa melewati halaman masuk, tetapi halaman itu tidak lagi menjadi penghalang bagi orang yang tahu tautannya. Jangan sebar tautan di tempat publik.
- Hasil di dasbor bersifat "pengakuan": cocok untuk memantau latihan bersama, bukan untuk penilaian resmi.
- Halaman masuk memberi tahu bahwa sebuah nama memakai sandi (tahap kedua). Artinya nama akun admin bisa diketahui orang yang mencoba-coba; lindungi dengan sandi yang panjang dan unik. Batas percobaan sandi tetap berlaku.

**Membatasi nama dengan `DAFTAR_NAMA`.** Isi variabel ini dengan nama anggota, dipisah koma atau baris, misalnya `Rina Putri, Budi, Citra`. Bila diisi:
- hanya nama dalam daftar yang bisa masuk (nama lain ditolak dengan "Nama ini tidak ada di daftar tim");
- kolom **Nama Anda** menampilkan daftar itu sebagai pilihan (datalist), sehingga anggota tidak salah ketik dan tidak membuat akun ganda;
- nama tampil di dasbor mengikuti ejaan di daftar.
Daftar tidak mencegah anggota memakai nama anggota lain di daftar yang sama; ia hanya menutup pintu bagi nama asing dan salah ketik.

**Batas pembuatan akun.** Agar server tidak dibanjiri akun, paling banyak **20 akun baru per IP per jam** (`BATAS_AKUN_IP`) dan **200 akun tanpa sandi seluruhnya** (`BATAS_AKUN`). Anggota yang sudah punya akun tetap bisa masuk walau batas tercapai. Percobaan masuk nama dibatasi 120 per IP per 15 menit. Bila seluruh tim masuk dari satu jaringan kantor (satu IP) dan lebih dari 20 orang baru masuk pertama kali dalam satu jam, naikkan `BATAS_AKUN_IP`.

**Menghapus akun anggota.** Di server dengan Shell atau disk permanen: `node deploy/kelola-pengguna.js daftar` (akun tanpa sandi ditandai `tanpa sandi` beserta nama tampilannya), lalu `node deploy/kelola-pengguna.js hapus rina-putri` atau `hapus "Rina Putri"`. Sesinya langsung berakhir dan akun itu tidak dipulihkan dari sesi lama. Bila nama yang sama masuk lagi, akun baru dibuat; sesi akun lama tetap tidak berlaku. Di Render free (tanpa disk), `pengguna.json` kosong lagi setiap layanan tidur atau restart; akun anggota dibuat ulang otomatis dari sesi di perangkatnya atau saat mereka masuk, jadi penghapusan tidak bertahan. Batasi nama dengan `DAFTAR_NAMA`.

**Mengubah akun menjadi bersandi.** `node deploy/kelola-pengguna.js ubah-sandi rina-putri` memberi akun itu sandi; sejak itu ia harus masuk dengan sandi (tahap kedua). Akun tanpa sandi tidak bisa dijadikan admin sebelum diberi sandi.

**Kembali ke mode sandi.** Hapus variabel `MASUK_NAMA` (atau isi `0`), lalu deploy ulang (Render: **Environment**, hapus barisnya, **Save, rebuild, and deploy**; Docker: jalankan ulang tanpa `-e MASUK_NAMA=1`). Akibatnya:
- halaman masuk kembali meminta nama pengguna dan kata sandi;
- akun tanpa sandi tidak berlaku lagi dan sesinya berakhir; datanya tetap di `pengguna.json` dan `hasil.json` (tersembunyi dari dasbor) dan aktif kembali bila `MASUK_NAMA=1` dinyalakan lagi;
- buat akun bersandi untuk anggota lewat `PENGGUNA_TIM` (A3) atau `kelola-pengguna.js tambah`/`ubah-sandi`. Memakai nama akun yang sama (`rina-putri`) menyambungkan kembali ringkasan lamanya.

---

## Dasbor tim di server

Saat aplikasi dibuka dari server ini, **Dasbor tim** tersambung otomatis ke server: setiap anggota yang masuk dengan nama pengguna dan sandinya mengirim **ringkasan** hasil latihan dan simulasinya, dan admin melihat ringkasan semua anggota. Tidak perlu akun Claude dan tidak ada yang perlu dipasang di perangkat anggota. Jawaban **latihan bersama** (beberapa peserta menjawab di satu layar, v7.9) dan rekaman sesinya untuk **Evaluasi tim** (v8.0) hanya disimpan di perangkat pemimpin dan tidak pernah dikirim ke server.

**Menjadikan admin.** Admin adalah akun yang boleh melihat hasil anggota lain. Pilih salah satu:
- akun `ADMIN_USER` selalu admin;
- di `PENGGUNA_TIM`, tambahkan akhiran `:admin` pada baris akunnya: `nama:sandi:admin` atau `nama:scrypt$…:admin`;
- di server dengan Shell atau disk permanen: `node deploy/kelola-pengguna.js jadikan-admin <nama>` (cabut dengan `cabut-admin <nama>`; akun baru langsung admin dengan `tambah <nama> --admin`). Perubahan di `pengguna.json` berlaku dalam beberapa detik tanpa restart dan tanpa login ulang. `kelola-pengguna.js daftar` menandai akun admin.

**Yang dilihat anggota dan admin.**

| | Anggota | Admin |
|---|---|---|
| Mengirim ringkasan miliknya | Otomatis setelah latihan atau simulasi selesai (bisa dimatikan di Pengaturan › Tim) | Sama |
| Dasbor tim (`#tim`) | Tidak ada di menu. Bila dibuka langsung, tampil "Khusus admin tim" beserta langkah meminta peran admin; tidak ada data anggota lain. | Ringkasan tim, tabel anggota (`#tim/<nama>` untuk detail), mode **Langsung**, ekspor CSV, daftar akun yang belum membagikan hasil |
| Status di Pengaturan › Tim | "tersambung ke server", nama akun, waktu kiriman terakhir, tombol **Keluar** | Sama, ditambah tombol **Buka dasbor tim** |

- Kop dasbor admin menampilkan `Tersambung ke server · N online`. *Online* berarti akun itu membuka aplikasi dalam 2 menit terakhir (aplikasi mengirim tanda kecil tiap menit selama tab terbuka).
- Mode **Langsung** memakai aliran server (SSE): kegiatan baru seperti "budi menyelesaikan simulasi B · 64" muncul beberapa detik setelah anggota selesai (aplikasi menunggu 5 detik untuk menggabungkan perubahan). Bila aliran terputus, misalnya karena proxy yang menahan respons, dasbor memperbarui diri tiap 20 detik dan menulis "diperbarui tiap 20 detik" di kop.
- Nama yang tampil di dasbor adalah **nama akun server** (dalam mode masuk nama: nama tampilan akun, misalnya `Rina Putri`), bukan nama yang diketik anggota di profil. Dalam mode sandi, anggota tidak dapat mengaku sebagai orang lain; dalam mode masuk nama, siapa pun yang memegang tautan bisa memakai nama siapa pun (lihat [Masuk dengan nama saja](#masuk-dengan-nama-saja-masuk_nama)).
- Yang dikirim hanya ringkasan: tingkat, jumlah dan akurasi latihan (7 dan 14 hari, per kelompok, topik terlemah), 10 simulasi terakhir (skor, benar/salah/kosong, menit), kehadiran, dan (sejak v7.7) jawaban per soal 30 hari terakhir: maksimal 400 entri terbaru berisi kode soal, topik, opsi yang dipilih, benar/salah, detik, waktu, mode (dengan id simulasi), dan penanda keyakinan bila diisi. Tidak ada teks bebas. Mematikan sakelar **Bagikan hasil saya ke dasbor tim** langsung menghapus ringkasan anggota itu, termasuk jawaban per soalnya, dari server.
- Kode hasil (Tempel kode hasil) tetap bisa dipakai admin untuk menambahkan anggota di luar server.
- **Perangkat bersama.** Progres belajar disimpan di peramban (localStorage), bukan di akun. Agar progres orang lain tidak terkirim atas nama Anda, aplikasi mencatat akun server pemilik progres saat pertama tersambung. Bila akun lain masuk di peramban yang sama, tidak ada yang dikirim dan Beranda, Dasbor tim, serta Pengaturan › Tim menampilkan "Progres di perangkat ini milik akun rina…" dengan dua pilihan: **Mulai baru** (progres akun lama disimpan sebagai arsip di perangkat itu dan dipulihkan bila akun itu masuk lagi lalu memilih **Pulihkan progres**) atau **Keluar**.
- **Bila server sempat tidak terjangkau.** Saat masuk, server memberi cookie penanda `ukp_srv=1` (bukan rahasia, tanpa HttpOnly) agar aplikasi tahu ia berjalan di server tim walau dibuka dari cache. Bila server lambat atau mati, aplikasi menampilkan "Server tim tidak terjangkau", menyimpan progres di perangkat, dan mencoba lagi (5, 15, 30 detik, lalu tiap menit, juga saat tab dibuka kembali atau internet tersambung). Setelah tersambung, ringkasan langsung dikirim. Bila sakelar berbagi dimatikan saat penghapusan gagal, Pengaturan menampilkan "menunggu penghapusan" dan penghapusan diulang otomatis saat tersambung.

**Data dan cadangan.** Ringkasan disimpan di `deploy/data/hasil.json` (atau `DATA_DIR/hasil.json`): satu entri per nama pengguna, ditulis atomik dengan izin 600. Waktu terakhir masuk ada di `masuk.json`. Cadangkan keduanya bersama `pengguna.json`, misalnya `docker cp pelatih-ukp:/app/deploy/data ./cadangan-ukp` atau salin volume `ukp-data`. Menghapus akun menyembunyikan ringkasannya dari dasbor; untuk menghapus datanya juga, hapus entrinya dari `hasil.json` saat server berhenti.
- **Render free:** disk tidak permanen, sehingga `hasil.json` hilang setiap layanan tidur atau restart. Data tidak benar-benar hilang: setiap anggota mengirim ulang ringkasannya secara otomatis saat membuka aplikasi lagi (server memberi tahu bahwa ringkasannya belum ada). Akibatnya, setelah layanan bangun, dasbor baru lengkap setelah anggota membuka aplikasinya masing-masing. Untuk dasbor yang selalu lengkap, pakai disk permanen (paket berbayar Render, Fly.io, atau VPS).

**Batas dan pengamanan.**
- Semua alamat `/api/*` butuh sesi login, header `X-Requested-With: UKP`, dan permintaan dari asal yang sama (`Sec-Fetch-Site`/`Origin`). Situs lain tidak dapat membaca atau mengirim hasil atas nama anggota.
- `GET /api/tim` dan aliran `GET /api/tim/aliran` hanya untuk admin (anggota mendapat 403). Paling banyak 5 aliran terbuka per admin; peran admin dan sesi diperiksa ulang tiap 25 detik, sehingga admin yang dicabut atau keluar berhenti menerima data.
- `PUT /api/hasil`: body JSON maksimal 160 KB (lebih → 413), skema diperiksa ketat (kunci atau tipe asing → 400), nilai dijepit ke rentang wajar, ringkasan tersimpan paling besar 120 KB, dan paling banyak 60 kiriman per menit per akun (lebih → 429).
- Log server mencatat siapa dan kapan, tidak pernah isi ringkasan.
- Saat server dihentikan (SIGTERM, misalnya deploy baru), aliran yang terbuka ditutup rapi dan dasbor admin tersambung lagi sendiri.

| Alamat | Untuk | Isi |
|---|---|---|
| `GET /api/saya` | semua akun | `{ nama, admin, server: true, versi, hasil }` (`hasil`: `{ diperbarui }` atau `null`); akun tanpa sandi juga `tanpaSandi: true` dan `namaTampil` |
| `PUT /api/hasil` | semua akun | simpan ringkasan milik sendiri |
| `DELETE /api/hasil` | semua akun | hapus ringkasan milik sendiri |
| `GET /api/tim` | admin | semua ringkasan (`nama` = nama tampilan, `id` = kunci akun), daftar akun (nama, admin, terakhir masuk; akun tanpa sandi juga `namaTampil`), akun yang online |
| `GET /api/tim/aliran` | admin | aliran `text/event-stream`: event `hasil` saat ada kiriman atau penghapusan, `ping` tiap 25 detik |
| `POST /keluar` | semua akun | keluar (tombol **Keluar** di Pengaturan › Tim) |

---

## D. Catatan penting

1. **Tutor AI tidak tersedia di luar Claude.** Fitur Tutor AI hanya aktif di dalam Claude. Di tautan sendiri, aplikasi menyembunyikan atau menonaktifkan fitur itu secara otomatis. Fitur lain (materi, latihan soal, kartu hafalan, simulasi CAT, kalkulator, rencana belajar) berjalan penuh.
2. **Progres tersimpan per perangkat dan per browser** (localStorage), bukan di server. Setiap anggota otomatis punya progres sendiri, dan server tidak menyimpan jawaban siapa pun; yang disimpan server hanya ringkasan untuk Dasbor tim. Bila anggota berganti HP atau laptop, gunakan **Pengaturan › Data › Ekspor/Impor**. Progres dari versi Claude juga tidak otomatis pindah ke tautan ini; gunakan Ekspor/Impor yang sama.
3. **Memperbarui versi:** jalankan lagi `node tools/build-artifact.js`, lalu salin ulang `index.html css js sw.js manifest.webmanifest icons` ke `dist/site/`.
   - **Render:** unggah berkas yang berubah ke GitHub. Render membangun ulang sendiri.
   - **Docker:** bangun image lagi, lalu jalankan ulang container.
   - **Node/pm2:** tidak perlu restart; server langsung menyajikan berkas baru.
   - Anggota akan melihat pesan "Versi baru tersedia · Muat ulang".
4. **Keluar (logout):** tekan **Keluar** di Pengaturan › Tim, atau buka alamat `https://<alamat-anda>/keluar`, misalnya di perangkat bersama. Halaman ini juga menghapus salinan aplikasi dari perangkat (lihat poin 5).
5. **Offline / PWA, dan batas "mencabut akses":** service worker menyimpan **seluruh aplikasi** (HTML, CSS, JS, termasuk semua materi dan soal) di perangkat agar bisa dipakai offline. Sesi login **tidak** ikut tersimpan. Artinya:
   - **Login hanya membatasi siapa yang bisa mengambil aplikasi dan versi terbarunya.** Materi yang sudah terunduh ke perangkat tidak bisa ditarik kembali sepenuhnya. Fitur **Versi offline** di aplikasi juga memungkinkan siapa pun yang sudah login menyimpan seluruh aplikasi (±6,5 MB) sebagai satu berkas HTML yang bisa disalin ke mana saja.
   - **Keluar** (`/keluar`) menghapus salinan aplikasi di perangkat itu (service worker dan cache `ukp-*`). Progres belajar (localStorage) tetap ada.
   - **Akun dihapus atau sandi diganti:** perangkat anggota itu tetap bisa membuka salinan lama selama offline, atau saat server lambat bangun (lebih dari 3,5 detik, misalnya Render free yang sedang tidur). Begitu perangkat itu terhubung lagi ke server, halaman masuk atau pemeriksaan pembaruan service worker menghapus salinan tersebut.
   - Jangan menaruh materi yang benar-benar rahasia di aplikasi ini. Untuk perangkat bersama, minta anggota membuka `/keluar` setelah selesai.
6. **Batas paket gratis:** Render free tidur setelah idle sekitar 15 menit, tidak punya disk atau Shell, dan memberi 750 jam per bulan. Cloudflare Zero Trust Free menampung maksimal 50 pengguna.
7. **Variabel lingkungan server** (semua opsional):

   | Variabel | Bawaan | Fungsi |
   |---|---|---|
   | `PORT` | `8080` | Port server |
   | `HOST` | `0.0.0.0`; `127.0.0.1` bila `TRUST_PROXY` diisi (kecuali di Render/Fly) | Alamat yang didengarkan server. Image Docker memakai `0.0.0.0`. |
   | `SITE_DIR` | `../dist/site` | Folder situs yang disajikan. Tidak boleh memuat folder `deploy/`. |
   | `DATA_DIR` | `deploy/data` | Lokasi `pengguna.json`, `sesi.json`, `hasil.json`, dan `masuk.json` |
   | `ADMIN_USER` / `ADMIN_PASS` | – | Membuat admin pertama saat start **bila belum ada akun bersandi** (akun tanpa sandi dari mode masuk nama tidak dihitung). Akun `ADMIN_USER` selalu admin Dasbor tim. |
   | `MASUK_NAMA` | – (`render.yaml`: `1`) | `1`: anggota masuk hanya dengan nama, akun dibuat otomatis; admin tetap memakai sandi. Server tidak mau berjalan tanpa admin bersandi. Lihat [Masuk dengan nama saja](#masuk-dengan-nama-saja-masuk_nama). |
   | `DAFTAR_NAMA` | – | Hanya untuk `MASUK_NAMA=1`: nama yang boleh masuk, dipisah koma atau baris; tampil sebagai pilihan di kolom nama |
   | `BATAS_AKUN` | `200` | Jumlah maksimal akun tanpa sandi |
   | `BATAS_AKUN_IP` | `20` | Akun tanpa sandi baru per IP per jam |
   | `PENGGUNA_TIM` | – | Akun tambahan `nama:sandi` atau `nama:scrypt$…`, **satu akun per baris**; akhiran `:admin` menjadikan akun itu admin Dasbor tim. Sandi boleh memuat koma; baris yang tampak berisi beberapa akun ditolak. |
   | `RAHASIA_SESI` | – | Minimal 32 karakter. Membuat sesi tetap berlaku setelah restart walau `sesi.json` hilang; dalam mode masuk nama, akun anggota juga dibuat ulang dari sesi walau `pengguna.json` hilang. |
   | `COOKIE_SECURE` | otomatis | `1` memaksa cookie `Secure` |
   | `TRUST_PROXY` | `0` | Jumlah proxy tepercaya di depan server (Render, Caddy, Nginx: `1`) |
   | `TRUSTED_PROXY_CIDR` | loopback + jaringan privat | Alamat proxy yang boleh mengirim `X-Forwarded-For`, dipisah koma (lihat B3) |
   | `JALANKAN_SEBAGAI` | – (Docker: `node`) | Bila server dimulai sebagai root: folder data diberikan ke pengguna ini, lalu hak root dilepas |
   | `KONTAK_ADMIN` | – | Email atau URL untuk tautan "Hubungi admin" di halaman login |

## Daftar periksa keamanan

- [ ] Dalam mode masuk nama (`MASUK_NAMA=1`), bagikan **tautan** hanya ke anggota tim (siapa pun yang memegangnya bisa masuk atas nama siapa pun), isi `DAFTAR_NAMA` bila memungkinkan, dan pastikan admin memakai sandi panjang. Butuh identitas yang terjamin? Matikan mode ini dan beri setiap anggota sandi.
- [ ] Gunakan **HTTPS**. Render, Fly, dan Cloudflare sudah otomatis; untuk VPS gunakan Caddy atau Nginx (B3).
- [ ] Sandi admin dan anggota **panjang dan unik** (minimal 12 karakter, misalnya 3–4 kata acak) serta tidak dipakai di layanan lain.
- [ ] `RAHASIA_SESI` acak minimal 32 karakter dan tidak dibagikan ke siapa pun.
- [ ] Repo GitHub berstatus **Private**, dan `deploy/data/` **tidak** ada di repo.
- [ ] Bagikan sandi lewat chat pribadi, bukan grup atau email massal. Minta anggota tidak menyimpan sandi di perangkat bersama.
- [ ] Saat anggota keluar dari tim, **hapus akunnya** (hapus baris di `PENGGUNA_TIM`, atau `kelola-pengguna.js hapus <nama>`). Ia tidak bisa login lagi dan tidak mendapat pembaruan. Salinan aplikasi di perangkatnya terhapus saat perangkat itu terhubung lagi ke server, tetapi materi yang sudah ia simpan (misalnya lewat **Versi offline**) tidak bisa ditarik kembali (lihat D5).
- [ ] Bila sandi diduga bocor, **ganti sandi** akun itu. Bila `RAHASIA_SESI` bocor, ganti nilainya; semua orang harus login ulang.
- [ ] Untuk VPS, cadangkan `deploy/data` (atau volume `ukp-data`) secara berkala, termasuk `hasil.json` (Dasbor tim).
- [ ] Beri peran admin Dasbor tim hanya kepada pemimpin tim. Admin melihat ringkasan hasil semua anggota.
- [ ] Periksa log sesekali (Render: tab *Logs*; Docker: `docker logs pelatih-ukp`). Banyak baris `masuk gagal` berarti ada yang mencoba menebak sandi.

Perlindungan yang sudah bawaan server:
- Sandi di-hash dengan scrypt (salt acak 16 byte, N=16384) dan dibandingkan dengan waktu konstan.
- Batas percobaan login: 5 per nama pengguna dan IP setiap 15 menit, 30 per IP setiap 15 menit, dan 50 per nama pengguna dari IP mana pun setiap jam. Setiap percobaan dihitung **sebelum** sandi diperiksa, sehingga permintaan serentak tidak bisa melewati batas. Paling banyak 2 permintaan login diproses bersamaan per nama dan IP, 4 per IP, dan 8 pemeriksaan sandi di seluruh server.
- `X-Forwarded-For` hanya dipercaya dari proxy di alamat loopback atau privat (atau `TRUSTED_PROXY_CIDR`).
- Server di container melepas hak root setelah menyiapkan folder data.
- `/keluar` dan halaman masuk menghapus salinan aplikasi (service worker dan cache) dari perangkat yang sesinya tidak berlaku. Progres tidak terhapus.
- Pesan galat login dibuat umum, sehingga tidak menunjukkan apakah nama pengguna terdaftar. Pengecualian dalam mode masuk nama: nama akun bersandi memunculkan tahap sandi.
- Mode masuk nama: nama admin dan akun bersandi tidak pernah bisa dipakai tanpa sandi, akun tanpa sandi tidak pernah admin, akun baru dibatasi per IP dan total, dan server menolak berjalan tanpa admin bersandi.
- Cookie bersifat `HttpOnly`, `SameSite=Lax`, dan `Secure` di balik HTTPS. Token sesi acak 32 byte dan hanya hash-nya yang ditulis ke disk.
- Form login dilindungi dari CSRF (token double-submit dan cek Origin).
- Header CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, serta HSTS di balik HTTPS.
- Path traversal dan dotfile ditolak, dan log tidak pernah memuat sandi.
- API Dasbor tim: sesi + header `X-Requested-With` + cek asal, data anggota lain khusus admin, batas body 160 KB, skema ketat, batas 60 kiriman per menit per akun, log tanpa isi hasil (lihat [Dasbor tim di server](#dasbor-tim-di-server)).
