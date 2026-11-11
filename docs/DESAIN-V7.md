# DESAIN V7: lebih profesional, lebih komunikatif

**Status:** rencana kerja, putaran desain ketiga · 2 November 2026
**Dasar:** `docs/DESAIN-V6.md` (token, komponen, halaman) dan `docs/INTERAKSI-V6.md` tetap berlaku, kecuali bagian yang diganti di sini.
**Bukti:** tangkapan kondisi sekarang ada di `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/review/v7-awal/`. Sesi desktop memakai tema gelap (1366 px) dan sesi HP memakai tema terang (390 px). Bahan lain: temuan tiga kritikus dan pemeriksaan langsung atas 11 tangkapan, yaitu desktop-02, 05, 06, 07, 09, 23, 24 dan hp-02, 03, 04, 05.
**Permintaan pengguna:** "Tampilan UI dibuat lebih profesional lagi dan bagus, lebih komunikatif."

Dokumen ini dikerjakan **paralel oleh empat agen** dengan kepemilikan berkas terpisah. Tidak ada agen yang menyunting berkas milik paket lain.

| Paket | Berkas yang dimiliki (boleh disunting) | Lingkup |
|---|---|---|
| **P1** Sistem | `css/app.css`, `js/core.js`, `js/viz.js`, `js/learn.js` (hanya **menambah** fungsi; fungsi lama tidak diubah perilakunya) | token, tipografi, spasi, komponen inti, tema, mode fokus, komponen baru di §4 |
| **P2** Beranda & shell | `js/views-home.js`, `js/app.js` | Hari Ini, onboarding, sesi harian, topbar, sidebar, rail, bar bawah, lembar "Lainnya" |
| **P3** Belajar | `js/views-belajar.js`, `js/soal.js` | peta materi, kelompok, topik, latih (pengaturan, soal, umpan), ulang kartu, studi kasus, cakupan, strategi |
| **P4** Ujian & alat | `js/views-simulasi.js`, `js/views-alat.js` | simulasi (persiapan, CAT, kirim, hasil, ulas), kalkulator, rencana, kemajuan, referensi, info ujian, profesi, pengaturan, formulir, lembar, palet cari, tutor |

**Aturan paralel.** Bagian **§4 Kontrak v7** menetapkan nama kelas dan API komponen baru. P2–P4 langsung menulis markup dengan nama tersebut tanpa menunggu P1. Selama CSS P1 belum masuk, tampilan boleh sementara polos, tetapi tidak boleh ada galat JS. Untuk memastikannya, setiap pemanggilan API baru dari P2–P4 memakai penjaga:

```js
const c = UKP.c; const pakai = (f, cadangan) => typeof f === 'function' ? f : cadangan;
const barisSkor = pakai(c.barisSkor, o => h('li', null, o.judul + ' ' + (o.nilai ?? '')));
```

Butir yang bergantung pada P1 ditandai **[K-xx]**, yaitu nomor kontrak di §4.

---

## 1. Diagnosis: 10 masalah terbesar

Fondasi v6 sudah benar dan **tidak diulang** di v7. Yang dimaksud adalah tangga permukaan, garis tanpa bayangan, tab bergaris, sakelar, stepper kasus, stempel, dan grid 12 kolom. Kesan "dibuat sendiri" yang masih tersisa datang dari sepuluh pola berikut.

| # | Masalah | Bukti |
|---|---|---|
| D1 | **Satu fakta ditulis 2–5 kali di satu layar.** Pembaca tidak tahu mana yang utama, dan halaman terasa ramai. | Remah ditulis dua kali, di topbar dan di kop (desktop-17, 24, 25, hp-10). Di Hari Ini, rangkaian muncul 5×, kesiapan 38% 2×, hitung mundur 2×, dan "Kemajuan ›" 2× (desktop-02). Angka "568" muncul 3× di Latih (desktop-07). Skor "1" muncul 2× di Hasil (desktop-24). "Soal 2/100" muncul 3× di CAT (desktop-23). |
| D2 | **Warna status jadi wallpaper, dan maknanya bisa terbalik.** | Peta topik Hasil berisi 41 sel merah pekat (desktop-24). Kelima bar penguasaan merah (desktop-02). Pill "dikenal" ada di 11/11 baris (desktop-05) dan "perlu cek" di 14/14 formulir (desktop-16). Bar "Sebab kesalahan" berwarna hijau "benar" (desktop-14). |
| D3 | **Hierarki dibawa oleh eyebrow mono kapital dan garis ganda mint, bukan oleh judul.** Mono dipakai untuk kalimat. | Hari Ini punya 9 eyebrow kapital. Satu topik punya 6 garis ganda mint (desktop-06). Pill, remah, dasar hukum, dan label `dl` semuanya mono. "s.t.d.t.d." dipaksa kapital (desktop-18). |
| D4 | **Angka tanpa definisi saling bertentangan.** | Cincin "38%" di atas "0/11 dinilai" (desktop-05). "Skor 54" bersebelahan dengan "63% benar" (desktop-14). Di Ulas, tab "Salah 99" dan "Kosong 99" tumpang tindih (desktop-25). Kolom "0/53 mnt" tanpa label. |
| D5 | **Layar kerja tidak mengutamakan langkah berikutnya.** | Di HP, krom memakan ±264 dari 844 px (31%) dan opsi B–D tertutup (hp-03, hp-04). Setelah kartu dibalik, tombol yang paling menonjol justru "Lihat depan" (desktop-09). Dialog kirim punya dua tombol berisi (desktop-23). Tombol Mulai terselip di tengah sakelar (desktop-07). Di HP, tombol Mulai simulasi muncul sebelum ringkasan (hp-05). |
| D6 | **Halaman tidak menjawab "apa berikutnya" dengan nama.** | Tombol berbunyi "Topik 3" tanpa nama topik (desktop-06). "Lanjutkan topik 1" disertai keterangan terpisah (desktop-05). Label "Tambah sesi Kilat 5 · 5 mnt" (desktop-02). "Ulas yang salah (99)" padahal 98 soal kosong (desktop-24). Stempel hanya berbunyi "BELUM". |
| D7 | **Pengguna baru disambut deretan nol dan empat keadaan kosong.** | Di hp-02, stat menampilkan "0 hari / – / 0", Aktivitas kosong dua kolom, Penguasaan kosong, lalu lima baris "belum dinilai". |
| D8 | **Format lokal belum tuntas (T28 v6).** | Tanggal tampil "02/15/2026" dan "12/15/2026", placeholder "mm/dd/yyyy" bertabrakan dengan teks bantu "Format hari/bulan/tahun" (hp-07), dan jam tampil "07:30 PM". |
| D9 | **Mikroteks berjargon dan catatan internal bocor ke layar.** | "Drill terarah…", "vignette", "minggu ISO", "2026-W44", "FINAL", "Tangga interval", "Soal = rekonstruksi kisi-kisi". Di CAT tampil kalimat "…belum dibaca langsung dalam riset proyek" (desktop-23). Simulasi masih menyebut "USKP" (hp-05). |
| D10 | **Tata letak masih goyah.** | Kolom Hari Ini timpang dengan lubang 130–240 px (desktop-02). Topik dan Ulang hanya 760 px dengan ±300 px kosong di kanan (desktop-06, 09). Tab terpotong tanpa penanda (desktop-09 "A5 1", hp-08). Segmen pecah 2+1 di HP (hp-05) dan selebar 1046 px di desktop (desktop-03). Segmen terpilih di tema gelap nyaris tak terbedakan (desktop-07). Tautan hantu menjorok 11–13 px dari tepi teks (hp-02, desktop-09). |

---

## 2. Prinsip v7

1. **Satu rumah untuk setiap fakta.** Setiap angka, status, atau jalan kembali ditulis sekali, di tempat yang paling dekat dengan keputusan pengguna. Pengulangan dihapus, bukan diperkecil.
2. **Netral dulu, warna untuk pengecualian.** Dasar tampilan adalah tinta dan garis. Warna status hanya menandai hal yang menyimpang dari keadaan umum. Bila lebih dari separuh item berstatus sama, statusnya ditulis sekali sebagai kalimat ringkas.
3. **Hierarki dibawa oleh judul sans.** Mono dipakai hanya untuk angka dan kode, eyebrow kapital paling banyak satu per kartu, dan garis ganda buku besar hanya untuk penutup atau total.
4. **Setiap layar menyebut langkah berikutnya dengan nama dan satu tombol primer.** Layar kerja (soal, kartu, kasus, ujian) menyembunyikan navigasi situs. Tombol mendahului atau mengiringi ringkasannya, tidak pernah terselip di tengah formulir.
5. **Berbicara seperti pengajar, bukan seperti log sistem.** Kalimat ditulis dalam bahasa Indonesia baku dan berisi apa yang terjadi dan apa yang bisa dilakukan. Jargon internal, kode minggu, dan catatan riset tidak tampil.

---

## 3. Token, tipografi, spasi, dan warna (P1)

Identitas **Buku Besar & Stempel** tetap dipakai: hijau buku besar, garis rambut, angka mono tabular, stempel, dan garis ganda. v7 **mempertajamnya**: garis ganda menjadi tanda penutup yang langka, mono kembali ke fungsinya sebagai angka, dan stempel tetap menjadi satu-satunya ornamen bernada.

### 3.1 Perubahan token (ganti nilai di `:root` dan kedua blok gelap)

```css
:root {
  /* garis: ganda buku besar kini netral dan langka (hanya .sect.ganda, tr.total, .bb-total) */
  --garis-kop: 3px double var(--line-strong);      /* v6: 4px double var(--primary) */
  --garis-bagian: 1px solid var(--line);            /* BARU: pemisah .sect bawaan */

  /* spasi: lebih lega karena garis ganda berkurang */
  --jarak-bagian: 32px;                             /* v6: 24 (HP) */
  --jarak-kepala: 12px;                             /* BARU: judul bagian → isi */

  /* tipografi */
  --ls-eyebrow: .06em;                              /* v6: .08em */
  --fs-meta: .8125rem; --lh-meta: 1.45;             /* BARU: .meta sans 13 */
  --fs-angka: 2rem;                                 /* BARU: angka stat/skor mono; satuan pakai --fs-body sans */

  /* tata letak */
  --fokus-bar-h: 48px;                              /* BARU: bar mode fokus */
  --w-teks: 68ch;                                   /* BARU: lebar baris prosa di dalam kolom lebar */

  /* data: dasar netral untuk bar/sel (non-teks ≥ 3:1 terhadap trek) */
  --trek: #E3E8E5;                                  /* BARU */
  --viz-netral: #6E7B75;                            /* BARU · 3,56:1 di --trek, 4,42:1 di --surface */
}
@media (min-width: 1024px) { :root { --jarak-bagian: 40px; } }   /* v6: 32 */

/* gelap: kedua blok (prefers-color-scheme dan [data-theme="dark"]) */
  --trek: #2A3530;
  --viz-netral: #7A8781;                            /* 3,40:1 di --trek, 4,58:1 di --surface */
  --seg-pilih: #303C36;                             /* v6: #26302B (tak terbedakan dari trek #1E2622) */
```

Alasannya: (a) garis ganda mint di setiap bagian membuat semua bagian berteriak (D3), sedangkan versi netral yang langka justru terbaca sebagai "penutup buku"; (b) `--viz-netral` dan `--trek` membuat bar dan sel berdasar netral dengan kontras non-teks ≥ 3:1 (D2); (c) `--seg-pilih` gelap baru memberi beda 9,63:1 untuk teks terpilih dan ditambah batas `--line-strong`.

### 3.2 Tangga tipografi v7 (aturan pemakaian)

| Peran | Gaya | Kelas | Catatan |
|---|---|---|---|
| Judul halaman | sans `--fs-h1`/600 | `h1` di `.page-head` | tidak berubah |
| **Judul bagian** | sans 20/600 `--ink` (HP 18) | `.sect-head > h2` | **menggantikan** eyebrow mint di `.sect` |
| **Judul kartu** | sans 17/600 `--ink` | `.card-title` (h2/h3 menurut kerangka) | konteks pendek masuk `.card-meta`, bukan eyebrow |
| Meta | sans 13/1.45 `--muted`, `tabular-nums` | `.meta`, `.card-meta`, `.row-meta` | pemisah `·` memakai `.sep` |
| Eyebrow | mono 12 kapital `.06em` `--muted` | `.eyebrow` | **hanya** untuk tanggal kop, label stat tile, kepala tabel, dan kategori di atas h1; maksimal 1 per kartu; **tidak pernah mint** |
| Angka besar | mono `--fs-angka`/600 tabular | `.angka` + `.satuan` | satuan memakai sans 16/500 `--muted`, jarak 4 px ("3" + "tahun") |
| Kode | mono 13 `--muted`, tanpa kapital, `letter-spacing: 0` | `.kode` | A1.2, K-A1-01, 1770, V-A2-05 |
| Pill | **sans** 12/500, `letter-spacing: 0`, tabular | `.pill` | v6 mono; `.pill.kode` tetap mono untuk kode |
| Dasar hukum | sans 13 `--muted`; nomor pasal `--ink` 500 | `.dasar-hukum` | menggantikan mono beruntun |
| Remah | sans 13 `--muted` | `.crumb` | v6 mono |

### 3.3 Aturan warna status (wajib untuk P2–P4)

1. Bar, sel, dan cincin berisi `--viz-netral` di atas `--trek` dengan penanda acuan 60. Nada hanya diberikan kepada **angka** atau **titik 8 px** (`.titik-nada`), dan hanya bila item itu menyimpang dari mayoritas.
2. Bila ≥ 50% item berstatus sama, tulis status itu sekali di `.ringkas-status` di atas daftar. Pill per item hanya untuk pengecualian.
3. Merah (`attn`) berarti "salah atau berisiko sekarang". Data yang belum cukup **tidak pernah** merah; pakai `netral` dan bar putus-putus (`data-tahap="awal"`).
4. Hijau (`ok`, `primary`) tidak pernah dipakai untuk menggambarkan kesalahan.
5. Satu tombol berisi (`.btn-primary` atau `.btn-danger`) per layar, atau per dialog.

---

## 4. Kontrak v7: nama kelas dan API (P1 membangun, P2–P4 langsung memakai)

P1 menambahkan blok **"Kontrak kelas v7"** di kepala `css/app.css` tepat di bawah kontrak v6, berisi daftar di bawah ini. Nama v6 tetap berlaku.

**K-01 Judul bagian.**
```html
<section class="sect" aria-labelledby="x">
  <div class="sect-head"><h2 id="x">Angka kunci</h2><span class="meta">5 angka</span><a class="tautan-kop">…</a></div>
  …isi…
</section>
```
`.sect` memakai `border-top: var(--garis-bagian)`, `padding-top: 16px`, dan `gap: var(--jarak-kepala)`. `.sect.ganda` memakai `border-top: var(--garis-kop)` dan maksimal satu per halaman. `.sect-head` berupa flex baris `align-items: baseline; gap: 8px 12px; flex-wrap: wrap`, dengan `.tautan-kop` dan `.btn` didorong ke kanan (`margin-left: auto`). Untuk kompatibilitas, `.sect > .eyebrow` lama dirender `--muted` 500 (bukan mint). JS: `UKP.c.sect({ judul, meta?, aksi?, id?, ganda?, isi })` → `section.sect`.

**K-02 Kepala kartu.** Strukturnya `.card-head > .card-head-teks (> .card-title + .card-meta) + .card-head-kanan`. `.card-meta` memakai sans 13 `--muted`. `UKP.c.kartu(o)` menerima `o.meta` (teks atau node) dan merendernya sebagai `.card-meta`. `o.eyebrow` tetap didukung, tetapi tidak dipakai untuk judul.

**K-03 Teks kecil.**
- `.meta`: sans 13/1.45 `--muted` tabular. Di dalamnya, `.sep` (`·`) diberi margin 0 6px dan warna `--ink-faint`.
- `.kode`: mono 13 `--muted`, tanpa kapital, nowrap.
- `.dasar-hukum`: blok sans 13 `--muted`. `.dasar-hukum li` adalah satu pasal per baris, dan `.dasar-hukum .pasal` berwarna `--ink`/500. Keterangan berlaku memakai `.meta` di baris yang sama atau baris berikutnya.
- `dl.fakta`: label sans 14 `--muted`, nilai sans 15 `--ink`. Grid 2 kolom (`minmax(140px, 30%) 1fr`) di ≥ 600 dan bertumpuk di < 600.
- `.angka` + `.satuan`: lihat §3.2.

**K-04 Pill sans.** `.pill` menjadi sans dan `.pill.kode` tetap mono. `UKP.c.pill` tidak berubah.

**K-05 Bar mini, titik nada, dan daftar skor.**
```html
<span class="bar-mini" style="--p:38" data-acuan="60" data-tahap="awal|dinilai" data-nada="attn|warn|ok"
      role="img" aria-label="38 dari 100, batas aman 60"></span>
<span class="titik-nada" data-nada="attn"></span>
<ul class="daftar-skor">
  <li class="baris-skor"><a href="…">
     <span class="kode">A2</span><span class="judul">KUP, PPSP, dan Pengadilan Pajak</span>
     <span class="bar-mini" …></span><span class="nilai">34</span><span class="chev"></span></a></li>
</ul>
```
- `.bar-mini`: lebar `var(--bar-w, 96px)`, tinggi 6, radius 3. Trek memakai `--trek` dan isi memakai `--viz-netral`. `data-nada` hanya mengganti warna isi. `data-tahap="awal"` membuat isi bergaris putus (`repeating-linear-gradient`) dalam nada netral. Penanda acuan berupa garis 2×10 px `--ink-faint` pada `left: calc(var(--acuan) * 1%)`.
- `.baris-skor`: grid `40px minmax(0,1fr) var(--bar-w) 40px 16px`, tinggi minimum 48, garis bawah `--line-subtle`. Judul memakai sans 15/500 dengan elipsis satu baris, dan nilai memakai mono 14 rata kanan. Di < 600, `--bar-w` menjadi 56px dan kolom kode 32px.
- JS:
  - `UKP.c.barMini(p, { acuan = 60, nada, tahap, label })`.
  - `UKP.c.barisSkor({ kode, judul, nilai, satuan?, nada?, tahap?, meta?, view?, params?, onclick? })` → `li.baris-skor`. Bila `nilai == null`, render "belum dinilai" `.meta` di kolom nilai, tanpa bar.

**K-06 Ringkasan status dan lipatan sisa.**
- `.ringkas-status`: flex dengan ikon `info` 18 px + kalimat sans 15 `--ink` + tautan opsional. Padding 12/16, latar `--surface-2`, radius `--r-md`, tanpa garis kiri bernada. JS: `UKP.c.ringkasStatus(teks, aksi?)`.
- `UKP.c.lipatSisa(nodes, n, labelFn)` → fragmen berisi `n` node pertama, ditambah `details.lipat` yang summary-nya `labelFn(sisa, total)`, misalnya "Lihat semua 42 topik". Bila `nodes.length <= n + 2`, semua node ditampilkan tanpa lipatan.

**K-07 Langkah berikutnya dan ceklis mulai.**
```js
UKP.c.langkahBerikut([
  { judul: 'Ulas 98 soal kosong', meta: '± 40 mnt', aksi: { teks: 'Ulas', view: 'simulasi', params: {…}, gaya: 'primer' } },
  { judul: 'Latih 10 soal A2', meta: 'kelompok terlemah', aksi: { teks: 'Latih', view: 'latih', params: {…} } },
  { judul: 'Buat rencana dari hasil ini', aksi: { teks: 'Buat rencana', onclick, gaya: 'hantu' } }
], { status: false, label: 'Langkah berikutnya' })
```
→ `ol.langkah-berikut[aria-label]`. Tiap `li` berupa grid `28px 1fr auto` dengan gap 12 dan tinggi minimum 56. `.nomor` adalah lingkaran 24 px bergaris `--line-strong` berisi mono 13. Judul memakai sans 15/600 dan meta memakai `.meta`. Nilai `gaya` adalah `primer|sekunder` (bawaan) atau `hantu`. **Paling banyak satu `primer`.** Di < 600, aksi turun ke bawah isi dengan lebar penuh hanya untuk `primer`.
Dengan `{ status: true }`, setiap item boleh memiliki `status: 'aktif'|'selesai'|'nanti'` dan kelas daftarnya menjadi `ol.langkah-berikut.ceklis-mulai`. Pada item `selesai`, `.nomor` berubah menjadi ikon cek `--ok` dan judulnya `--muted`. Pada item `nanti`, aksinya disembunyikan dan judulnya `--muted`.

**K-08 Mode fokus.**
- `UKP.mode.fokus(on: boolean)` mengatur atau menghapus `document.body.dataset.mode = 'fokus'`. Mode `ujian` dan `sesi` tidak ditimpa.
- CSS:
  - `body[data-mode="fokus"] .bottomnav { display: none }`.
  - Di < 1024: `body[data-mode="fokus"] .topbar { display: none }`.
  - `body[data-mode="fokus"] .sticky-actions { bottom: env(safe-area-inset-bottom, 0) }`.
- `.fokus-bar` (sticky; `top: 0` di < 1024, `top: var(--topbar-h)` di ≥ 1024): tinggi `--fokus-bar-h`, grid `auto 1fr auto`, latar `--surface`, garis bawah `--line`.
  - Kiri: `.icon-btn` "Keluar" dengan ikon x dan `aria-label="Keluar dari latihan"`.
  - Tengah: `.fokus-judul` (sans 14/600, elipsis), misalnya "Soal 1 dari 5 · 0 benar".
  - Kanan: aksi opsional `.btn-sm.btn-ghost`.
  - Dasar: progres 2 px melalui `style="--p:20"` (`::after`, isi `--primary`).
- P2 menjamin `app.js` memanggil `UKP.mode.fokus(false)` sebelum setiap mount rute.

**K-09 Nilai kartu ulang.** Strukturnya `.nilai-kartu` (grid 3 kolom, gap 8) dengan anak `button.btn[data-nada=attn|ok|info]`. Setiap tombol berisi `<span class="label">Ingat</span><span class="sub">1 hari</span>`, berukuran tinggi minimum 56 dan bergaris atas 3 px bernada. Label memakai sans 15/600 dan sub memakai mono 13 `--muted`. `kbd` disembunyikan pada `pointer: coarse`.

**K-10 Tab yang memberi tahu posisi.** Saat mount dan saat berganti tab, `UKP.c.tabs` memanggil `b.scrollIntoView({ inline: 'center', block: 'nearest' })` (`behavior: 'auto'` bila gerak dikurangi). Atribut `data-gulir="kiri kanan"` diperbarui saat gulir dan saat ukuran berubah. CSS memasang `mask-image` gradien 24 px di sisi yang masih bisa digulir. Tab boleh memiliki `labelPendek` yang dirender sebagai `<span class="lbl-panjang">` + `<span class="lbl-pendek">`, dan di < 600 hanya label pendek yang tampil.

**K-11 Segmen.**
- Keadaan terpilih: latar `--seg-pilih` + `box-shadow: inset 0 0 0 1px var(--line-strong)` + teks `--ink`/600, **tanpa** garis bawah. Keadaan tidak terpilih: `--muted`/500. Subjudul `<small>` berubah menjadi sans 12.
- `UKP.c.segmen` menambahkan kelas `.bersub` secara otomatis bila ada opsi ber-`sub`. Di < 480, `.seg.bersub` menjadi tumpukan vertikal: tiap tombol 48 px, label di kiri, sub di kanan, dan tanda centang di kiri untuk yang terpilih.
- `.seg.batas` memberi `max-width: 480px`. Opsi `UKP.c.segmen({ batas: true })` menambahkan kelas itu.

**K-12 Input tanggal dan jam berformat Indonesia.**
- `UKP.c.inputTanggal({ id, nilai /* ISO */, min, max, describedby, onUbah(iso|null), onGalat(pesan) })` → `div.input-grup.input-tanggal` yang berisi:
  - `input.input` dengan `type=text inputmode=numeric autocomplete=off placeholder="hh/bb/tttt"`, ditampilkan sebagai `15/12/2026` dalam sans tabular;
  - `button.icon-btn` dengan ikon `kalender` dan `aria-label="Buka kalender"`, yang memanggil `showPicker()` pada `input[type=date]` tersembunyi (`.visually-hidden`, `tabindex=-1`, `aria-hidden`).
  - Input yang diterima: `15/12/2026`, `15-12-2026`, `15.12.2026`, `15122026`, dan tahun dua digit (→ `20yy`).
  - Penguraian dijalankan saat blur dan Enter. Bila gagal, input diberi `aria-invalid` dan `onGalat('Tanggal tidak dikenali. Tulis hari/bulan/tahun, misalnya 15/12/2026.')` dipanggil. Bila tanggal di bawah `min`: `'Tanggal sudah lewat. Pilih hari ini atau sesudahnya.'`
  - Metode pada elemen: `.nilai()`, `.setNilai(iso)`, dan `.input`.
- `UKP.c.inputJam({ id, nilai: '19:30', onUbah('HH:MM') })` → input teks `inputmode=numeric placeholder="jj.mm"` yang **ditampilkan `19.30`**. Input yang diterima: `1930`, `19.30`, dan `19:30`. Nilai internal tetap `HH:MM` 24 jam.

**K-13 Remah ringkas.** Butir `crumbs` di `UKP.c.kop` boleh memiliki `pendek` (misalnya `{ teks: 'A1 PPh Orang Pribadi dan SPT PPh OP', pendek: 'A1', view: 'kelompok', params }`).
- Segmen tengah (bukan yang pertama dan bukan yang terakhir) dirender dengan `pendek`, dan `title` diisi teks penuh.
- Butir terakhir yang tidak memiliki `view` (halaman sekarang) **tidak dirender**, karena h1 sudah menyebutnya.
- Leluhur terdekat mendapat kelas `.crumb-induk`. Di < 600 hanya `.crumb-induk` yang tampil, didahului ikon `chevron-kiri`, sehingga remah menjadi tautan kembali satu baris.
- `.crumb` memakai sans 13 dan tinggi baris 20.

**K-14 Tombol rata tepi.** `.btn-ghost.rata`, `.lead-toggle`, dan `.tautan-kop:first-child` di blok teks diberi `margin-inline-start: calc(-1 * var(--btn-px))`, sehingga teksnya sejajar dengan tepi konten.

**K-15 Menu aksi lain.** `UKP.c.menuLebih({ label: 'Aksi lain', item: [{ teks, ikon?, onclick?, view?, params? }] })` → `details.menu-lebih` yang berisi `summary.icon-btn` (ikon titik tiga, `aria-label` = label) dan `div.menu-lebih-isi` berupa daftar tombol 40 px. Menu tertutup dengan Esc, klik di luar, dan setelah item dipilih.

**K-16 Kolom bebas tinggi.** `.tata > .kolom` adalah flex kolom dengan gap 20 dan memakai lebar `kl-*` di ≥ 1280. Di < 1280, `.kolom` menjadi `display: contents`. Kelas `.urut-1`…`.urut-6` mengatur `order` hanya di < 1280. Pola ini menghapus lubang di antara kartu yang tingginya berbeda.

**K-17 Dialog konfirmasi.** `.dlg-foot` ditata `justify-content: flex-end; gap: 8px`. Urutannya: tombol aman (`.btn`) lalu tombol tegas (`.btn-primary` atau `.btn-danger.isi`) di kanan. Hanya satu tombol berisi. `.dlg-foot > .kiri` v6 tetap didukung untuk aksi hapus sekunder, tetapi tidak dipakai di dialog kirim. Di < 600, kedua tombol bertumpuk penuh lebar, dengan tombol tegas di atas.

**K-18 Status penguasaan tunggal (`js/learn.js`).**
- `UKP.belajar.statusTopik(id)` → `{ nSoal, butuh: 8, skor: number|null, tahap: 'belum'|'awal'|'dinilai', label: 'dikuasai'|'perlu disegarkan'|null, teksSampel }`.
  - `tahap` bernilai `dinilai` bila `nSoal ≥ 8`. Pada tahap itu, `label` bernilai `'dikuasai'` bila skor ≥ 80 dan topik tidak jatuh tempo segar, `'perlu disegarkan'` bila skor < 60 atau terlupa, dan `null` untuk keadaan bawaan.
  - `teksSampel` berisi `'2 dari 8 soal untuk dinilai'` atau `'skor 72 · 12 soal'`.
- `UKP.belajar.statusKelompok(kode)` → `{ nTopik, nDinilai, nSoal, skor: number|null, tahap: 'belum'|'awal'|'dinilai', teks }`.
  - `tahap = 'dinilai'` bila `nDinilai ≥ 3`, `'awal'` bila `nSoal > 0`, dan `'belum'` bila tidak ada soal.
  - `teks` contohnya `'Perkiraan awal · dari 23 soal · 2 dari 11 topik dinilai'`.
- Kalimat definisi bersama tersedia di `UKP.belajar.TEKS_DINILAI = 'Topik dinilai setelah 8 soal. Angka kelompok muncul setelah 3 topik dinilai.'`
- Semua tampilan penguasaan (Hari Ini, Peta materi, Kelompok, Topik, Kemajuan) **wajib** memakai dua fungsi ini.

**K-19 Grafik berdasar netral (`js/viz.js`).** `V.batang`: bila `d.tone` kosong, isi memakai `--viz-netral` (sebelumnya `--viz-1`). Label dan angka ditaruh sebaris di atas trek. Lebar maksimal ditentukan oleh opsi `maks` (bawaan `560px`). `V.heatmap`: sel tanpa cukup data memakai `--trek` dengan teks `--muted`, bukan warn atau attn.

**K-20 Fokus hanya untuk papan ketik.** Semua `:focus` yang menggambar cincin pada `.btn`, `.opsi`, `.seg button`, dan `.card-link` diganti `:focus-visible`. Cincin kuning tidak boleh tampil karena klik atau fokus programatik setelah klik.

---

## 5. Glosarium mikroteks (berlaku untuk semua paket)

| Pakai | Jangan pakai | Catatan |
|---|---|---|
| **soal** | butir (untuk soal), drill | "Kerjakan 8 soal" |
| **butir** | – | hanya untuk butir cakupan resmi KLC |
| **kelompok** | mata ujian, modul | di Cakupan sekali saja: "Dokumen KLC menyebutnya *mata ujian*." |
| **soal kasus berangkai** | vignette | stem: "Data kasus V-A2-05:" |
| **belum dinilai · dikuasai · perlu disegarkan** | dikenal, dibaca (untuk status), disentuh | "dibaca" hanya untuk ringkasan topik yang ditandai dibaca |
| **Belum lulus · Memenuhi batas 60** | BELUM | teks stempel |
| **Tidak dijawab** | Kosong (di tab dan tombol) | "Kosong" boleh dipakai sebagai label sel CAT |
| **Waktu terpakai** | Tempo | "12 dari 53 mnt" |
| **Laporan 26 Okt – 1 Nov** | 2026-W44, minggu ISO, FINAL | minggu berjalan diberi pill "sementara" |
| **Per kelompok · 40 soal** | USKP 40 soal | format simulasi |
| **Tersimpan otomatis** | Tersimpan 05.34.53 | jam hanya di `title` |
| **Selesai dan kirim** | Kirim (tombol CAT) | dialog: "Kirim dan akhiri" |
| tanggal **15/12/2026**, jam **19.30** | 12/15/2026, 07:30 PM | |
| "Bukan nasihat pajak. Soal disusun ulang dari kisi-kisi resmi." | "Soal = rekonstruksi kisi-kisi." | catatan kaki sidebar |

Bentuk sapaan memakai **Anda** secara konsisten. Gunakan kalimat aktif dan sebutkan langkah berikutnya dengan nama ("Lanjut ke A1.3 Biaya boleh dikurangkan").

---

## 6. Paket kerja

Setiap butir ditulis dengan pola **Halaman/komponen → perubahan → Selesai bila**. Butir diurutkan menurut dampaknya.

### P1 · Sistem (`css/app.css`, `js/core.js`, `js/viz.js`, `js/learn.js`)

P1 sebaiknya mendahulukan **P1-01 sampai P1-06** karena paket lain paling banyak bergantung pada bagian itu.

**P1-01 Token v7 (§3.1).** Ganti nilai token di `:root`, di `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`, dan di `:root[data-theme="dark"]`.
*Selesai bila:* ketiga blok memuat `--trek`, `--viz-netral`, dan `--seg-pilih` baru; `getComputedStyle(document.documentElement).getPropertyValue('--garis-kop')` mengandung `3px double`; dan skrip kontras token v6 lulus ulang dengan rasio yang tercantum di §3.1.

**P1-02 Tipografi v7 [K-01…K-04].**
- `.sect` dibuat bergaris rambut, dengan `.sect-head`, `.sect.ganda`, dan `UKP.c.sect`.
- `.card-head-teks`, `.card-meta`, serta `o.meta` di `UKP.c.kartu`.
- `.meta`, `.sep`, `.kode`, `.dasar-hukum`, `dl.fakta`, `.angka`, dan `.satuan`.
- `.pill` menjadi sans; `.pill.kode` tetap mono.
- `.crumb` menjadi sans 13.
- `.sidebar .group-label` menjadi sans 12/600 `--muted`, tanpa `text-transform` dan tanpa spasi lebar. `.sidebar .badge` menjadi sans tabular.
- `.eyebrow` selalu `--muted`. Aturan `.sect > .eyebrow { color: var(--primary) }` dihapus.

*Selesai bila:* di Topik (desktop-06), tidak ada eyebrow berwarna mint dan tidak ada garis ganda kecuali `.sect.ganda`; `font-family` pill yang terhitung mengandung "Public Sans"; dan h2 bagian bertinggi huruf 20 px di ≥ 600 dan 18 px di < 600.

**P1-03 Mode fokus [K-08].** Tambahkan `UKP.mode.fokus`, aturan CSS `body[data-mode="fokus"]`, dan `.fokus-bar` lengkap dengan progres `--p`. Pastikan `--tinggi-aksi` dan toast tetap berada di atas `.sticky-actions` ketika bar bawah hilang.
Tambahkan juga aturan onboarding `body[data-mode="fokus"]:has(.ob-opsi)` yang menyembunyikan sidebar dan rail (dipakai P2-09).
*Selesai bila:* pada 390×844 dengan mode fokus aktif, `.topbar` dan `.bottomnav` memiliki `display: none`; total krom (fokus-bar + sticky-actions) ≤ 48 + 72 = 120 px; dan di 1280 topbar tetap tampil sementara bar bawah tidak ada.

**P1-04 Komponen status netral [K-05, K-06, K-19].** Bangun `.bar-mini`, `.titik-nada`, `.daftar-skor`/`.baris-skor`, `.ringkas-status`, `UKP.c.barMini`, `UKP.c.barisSkor`, `UKP.c.ringkasStatus`, dan `UKP.c.lipatSisa`. Ubah nada bawaan `V.batang` dan sel kosong `V.heatmap`.
*Selesai bila:* `UKP.c.barisSkor({kode:'A2', judul:'KUP…', nilai:34})` dirender setinggi 48 px dengan bar `--viz-netral`; penanda acuan berada di 60% lebar bar; `data-tahap="awal"` tampil putus-putus; dan baris tanpa nilai menulis "belum dinilai" tanpa bar.

**P1-05 Langkah berikutnya dan ceklis [K-07].** Bangun `UKP.c.langkahBerikut` dan `.langkah-berikut`/`.ceklis-mulai`.
*Selesai bila:* memasukkan dua item `gaya:'primer'` hanya menghasilkan satu `.btn-primary` (item primer berikutnya diturunkan menjadi sekunder dan `console.warn` dicetak); ceklis menampilkan ikon cek pada item `selesai`; dan tidak ada overflow di 320 px.

**P1-06 Input tanggal dan jam [K-12].** Bangun `UKP.c.inputTanggal` dan `UKP.c.inputJam`, termasuk penguraian, galat, dan tombol kalender. Tambahkan uji unit `test/tanggal.test.js` untuk pengurai murni (`UKP.util.uraiTanggal`, `UKP.util.uraiJam`).
*Selesai bila:* `uraiTanggal('15/12/2026') === '2026-12-15'`, `uraiTanggal('151226') === '2026-12-15'`, `uraiTanggal('31/02/2026') === null`, dan `uraiJam('1930') === '19:30'`; placeholder bertuliskan "hh/bb/tttt"; dan `node --test test/` lulus.

**P1-07 Tab dengan penanda gulir [K-10].** Gulir tab aktif ke tengah, tambahkan `data-gulir` dan mask, serta dukung `labelPendek`.
*Selesai bila:* di 390 px, tab aktif terlihat penuh saat halaman Kemajuan dibuka di tab "Laporan" (hp-08), dan tepi kanan memudar selama masih ada tab tersembunyi.

**P1-08 Segmen [K-11].** Ubah keadaan terpilih, tambahkan `.bersub` vertikal di < 480, serta `.seg.batas` dan opsi `batas`.
*Selesai bila:* di tema gelap, latar terpilih (#303C36) dan latar trek (#1E2622) dibedakan oleh batas 1 px `--line-strong`; segmen format simulasi di 390 px tidak pernah tampil 2+1; dan tidak ada `border-bottom` 2 px pada tombol terpilih.

**P1-09 Remah ringkas [K-13].** Ubah `UKP.c.kop`: dukung `pendek`, buang butir terakhir tanpa `view`, tambahkan `.crumb-induk`, dan sembunyikan butir lain di < 600.
*Selesai bila:* remah Lembar di 1280 berbunyi "Belajar › A1" dan di 390 berbunyi "‹ A1"; remah selalu satu baris; dan `aria-label="Remah roti"` tetap ada.

**P1-10 Kartu ulang dan fokus [K-09, K-20].** Tambahkan `.nilai-kartu` dan audit semua `:focus` → `:focus-visible`.
*Selesai bila:* `grep -n ":focus[^-]" css/app.css` hanya tersisa pada `input`, `select`, dan `textarea`.

**P1-11 Dialog, rata tepi, dan menu [K-14, K-15, K-17].** Bangun `.dlg-foot` v7, `.btn-ghost.rata`, dan `UKP.c.menuLebih`.
*Selesai bila:* pada hp-02, tepi kiri teks "Lihat rencana" sejajar (±1 px) dengan tepi kiri h1; dan menu lebih tertutup dengan Esc lalu mengembalikan fokus ke summary.

**P1-12 Kolom bebas tinggi [K-16].** Tambahkan `.tata > .kolom` dan `.urut-*`.
*Selesai bila:* di 1280, dua `.kolom` berdiri sejajar atas dan tingginya tidak saling memengaruhi; di 1024, urutan anak mengikuti kelas `.urut-*`.

**P1-13 Status penguasaan tunggal [K-18].** Tambahkan `statusTopik`, `statusKelompok`, dan `TEKS_DINILAI` di `js/learn.js`, ditambah uji unit di `test/penguasaan.test.js`.
*Selesai bila:* untuk kelompok tanpa topik dinilai, `tahap` bernilai `'awal'` atau `'belum'`; untuk kelompok dengan 3 topik dinilai, `tahap` bernilai `'dinilai'`; dan uji lulus.

**P1-14 Palet cari (CSS).** `mark` di palet memakai `background: color-mix(in srgb, var(--highlight) 22%, transparent)`, `color: var(--ink)`, `font-weight: 600`, dan `box-shadow: inset 0 -2px var(--highlight)`. `li:hover` hanya mengubah garis kiri. Latar `--surface-3` khusus untuk `[aria-selected="true"]`.
*Selesai bila:* pada keadaan desktop-26, hanya satu baris yang berlatar.

**P1-15 Versi dan kontrak.** Ubah `UKP.versi = '7.0'` (core.js:4) dan tulis "Kontrak kelas v7" di kepala `css/app.css`.
*Selesai bila:* kaki Pengaturan menulis "Pelatih UKP 7.0".

### P2 · Beranda & shell (`js/views-home.js`, `js/app.js`)

**P2-01 Topbar tanpa remah (app.js `perbaruiJudulRingkas`).**
- Hapus mode `'remah'`. Selama h1 terlihat, `#judul-ringkas` kosong (`textContent = ''`). Setelah h1 keluar layar, isinya judul h1 dalam sans 15/600 dengan elipsis.
- Di halaman puncak, topbar juga tidak mengulang judul halaman.
- Pill topbar berubah dari "UKP A · 43 hari" menjadi **"UKP A"**. Hitung mundur dipindah ke `title`/`data-tip`: "Ujian 15 Desember 2026 · 43 hari lagi".

*Selesai bila:* pada desktop-17/24 dan hp-10/11, teks remah tidak muncul di topbar; teks topbar sama dengan h1 setelah digulir ±200 px; dan pill topbar ≤ 72 px.

**P2-02 Penjaga mode fokus (app.js).** Panggil `UKP.mode.fokus(false)` sebelum setiap mount rute. Bila `UKP.mode` belum ada, cadangannya `if (document.body.dataset.mode === 'fokus') delete document.body.dataset.mode`. Bar bawah disembunyikan juga saat `mode === 'fokus'` [K-08].
*Selesai bila:* membuka Latih lalu menekan tombol Kembali peramban mengembalikan bar bawah.

**P2-03 Hari Ini untuk pengguna baru (0 sesi) [K-07].** Sembunyikan pita stat, kartu Aktivitas, dan daftar kelompok Penguasaan. Ganti dengan kartu sorot **"Mulai dari sini"** berisi `UKP.c.langkahBerikut([...], { status: true })`:
1. "Sesi pertama" · meta "12 mnt · ulang kartu, ringkasan, 8 soal" · aksi primer "Mulai sesi" · `aktif`.
2. "Diagnosis 15 soal" · meta "± 12 mnt · memetakan posisi awal Anda" · aksi sekunder "Mulai diagnosis" · `nanti` sampai langkah 1 selesai.
3. "Isi tanggal ujian" · meta "agar jadwal mingguan bisa disusun" · aksi hantu "Buka Rencana" · `aktif` bila tanggal kosong, `selesai` bila sudah terisi.

Penguasaan cukup ditampilkan dengan `UKP.c.kosong('Belum ada angka penguasaan', UKP.belajar.TEKS_DINILAI, null, { ringkas: true })`. Kartu Hadir tetap ada tetapi kecil (strip 7 hari tanpa judul rangkaian).
*Selesai bila:* tinggi halaman hp-02 pada pengguna baru ≤ 1.500 px (sebelumnya 2.299), tidak ada stat bernilai 0 yang tampil, dan hanya ada satu `.btn-primary` di atas lipatan.

**P2-04 Kartu Sesi: dua keadaan yang tegas.**
- **Belum mulai:** segmen durasi (`.seg.batas`), daftar langkah, lalu satu tombol primer "Mulai sesi · 12 mnt". Ubah "Soal 8 butir" menjadi **"Kerjakan 8 soal"**.
- **Selesai:**
  - card-head: ikon cek 20 `--ok` + h2 `.card-title` **"Sesi hari ini selesai"**, dengan stempel HADIR di `.card-head-kanan`.
  - `.card-meta` satu baris: "17 mnt · 10 soal · 6 benar (60%)".
  - Lalu `UKP.c.langkahBerikut` yang dibangun dari data: (1) "Ulang 4 kartu jatuh tempo" · "± 2 mnt" · sekunder "Ulang", tampil bila ada kartu jatuh tempo; (2) "Latih 10 soal A2" · "kelompok terlemah" · sekunder "Latih"; (3) "Sesi tambahan" · "5 mnt" · hantu "Tambah sesi".
  - Segmen durasi, kalimat "Masih ada waktu?", dan tautan "Kartu Hadir ›" dihapus.

*Selesai bila:* label "Tambah sesi Kilat 5 · 5 mnt" tidak ada lagi, judul tidak memakai mono, dan kartu tidak menyisakan ruang kosong > 48 px di kanan atas.

**P2-05 Satu rumah per fakta.**
- Hitung mundur hanya di h1 ("43 hari menuju UKP A"). Pill "Ujian 15 Des 2026" di kop diganti `.meta` "Ujian Selasa, 15 Desember 2026".
- Kesiapan hanya di kop.
- Rangkaian hanya di stat tile.
- Kartu Hadir berjudul **"Minggu ini"** tanpa angka rangkaian dan tanpa tautan.
- Satu tautan "Kemajuan ›", yaitu di kartu Aktivitas.

*Selesai bila:* di desktop-02, string "rangkaian" muncul tepat sekali, "38%" tepat sekali, dan "43 hari" tepat sekali (di luar `title`).

**P2-06 Tata letak Hari Ini tanpa lubang [K-16].** Di ≥ 1280: `.kolom.kl-8` berisi Sesi → pita stat → Aktivitas 14 hari, dan `.kolom.kl-4` berisi Posisi penguasaan → Minggu ini → Angka hari ini. Di < 1280, urutannya Sesi (`urut-1`), Posisi penguasaan (`urut-2`), pita stat (`urut-3`), Minggu ini (`urut-4`), Aktivitas (`urut-5`), Angka hari ini (`urut-6`).
*Selesai bila:* di 1280 dan 1366 tidak ada celah vertikal > 24 px di antara kartu dalam satu kolom.

**P2-07 Posisi penguasaan [K-05, K-06, K-18].**
- Judul kartu "Posisi penguasaan" dengan `.card-meta` "Tingkat A".
- Baris pertama: `UKP.c.ringkasStatus('Kelompok terlemah: A2 KUP (34). Mulai dari sini.', tautan 'Latih A2 ›')`.
- Daftar berupa `.daftar-skor` dari `statusKelompok`. Bila tahap `awal`, bar bergaris putus dan nilai ditulis "38" + `.meta` "perkiraan". Bila tahap `belum`, tulis "belum dinilai".
- Paragraf "Kesiapan 38%: perkiraan dari latihan…" dihapus.

*Selesai bila:* tinggi kartu ≤ 5 × 48 + 120 px, tidak ada bar merah selama tahap `awal`, dan penanda 60 terlihat.

**P2-08 Angka hari ini.** Tulis "3" `.angka` + "tahun" `.satuan`. Sumber ditulis dengan `.dasar-hukum` sans: "PMK 55/2026 · berlaku 24 Agu 2026". "status per 27 Okt 2026" dipindah ke `title`. Tombol "Dengarkan" memakai `.btn-ghost.rata` [K-03, K-14].
*Selesai bila:* blok sumber tidak memakai mono kecuali nomor, dan jarak "3"–"tahun" = 4 px.

**P2-09 Onboarding.** Pasang `UKP.mode.fokus(true)` selama `#mulai`. Di desktop, sidebar disembunyikan lewat `body[data-mode="fokus"]:has(.ob-opsi) .sidebar { display: none }` beserta `.shell { grid-template-columns: minmax(0,1fr) }`; aturan ini ditambahkan oleh P1 di P1-03.
- Kanan atas: `.btn-ghost.btn-sm` "Lewati, atur nanti".
- Lead: **"Lima pertanyaan singkat (± 1 menit) untuk menyusun target dan menit belajar harian Anda. Semua bisa diubah di Pengaturan."**
- Di HP: "Lanjut" menjadi `.btn-primary.btn-lg.btn-block` di `.sticky-actions`, dan "Kembali" menjadi `.btn-ghost` di sebelah kirinya.
- Tanggal memakai `UKP.c.inputTanggal` [K-12].

*Selesai bila:* tidak ada tautan sidebar yang dapat difokus Tab selama langkah 1–5, dan tombol Lanjut di 390 px selebar 358 px.

**P2-10 Lembar "Lainnya".** Kelompokkan isinya dengan judul kecil (`.eyebrow`):
- **Belajar:** Rencana, Kemajuan, Studi kasus, Strategi PG.
- **Ujian:** Simulasi, Info ujian, Etika & Profesi.
- **Alat:** Kalkulator, Referensi, Peta formulir, Tutor AI.

Pengaturan menjadi satu `.row-link` di bawah garis.
*Selesai bila:* urutan dan nama kelompok sama dengan sidebar, dan setiap item ≥ 48 px.

**P2-11 Sidebar dan rail.** Catatan kaki sidebar diganti menjadi "Bukan nasihat pajak. Soal disusun ulang dari kisi-kisi resmi." Label kelompok sidebar (`.group-label`, teks dari `GRUP_SIDEBAR` di app.js) tetap memakai "Harian", "Materi", "Alat", "Ujian". P1 mengubah gayanya menjadi sans 12/600 `--muted` tanpa kapital paksa (lihat P1-02).
*Selesai bila:* tidak ada lagi tanda "=" di catatan kaki.

**P2-12 Sesi harian (`#sesi`).** Ganti `.sesi-bar` dengan pola `.fokus-bar` [K-08], tetapi tetap memakai `data-mode="sesi"`. Tengah bar: "Langkah 2 dari 4 · Ulang kartu".
*Selesai bila:* tinggi bar 48 px dan progres 2 px berada di dasar bar.

### P3 · Belajar (`js/views-belajar.js`, `js/soal.js`)

**P3-01 Mode fokus untuk latihan, ulang, dan kasus [K-08].** Saat soal latihan, kartu ulang, atau langkah kasus berjalan, panggil `UKP.mode.fokus(true)`, lalu `false` saat unmount atau selesai. Pengaturan Latih (form) **tidak** memakai mode fokus.
- Bar latih diganti `.fokus-bar`:
  - kiri `icon-btn` "Keluar" (konfirmasi bila ada jawaban: "Keluar dari latihan? 2 jawaban sudah tercatat.");
  - tengah "Soal 1 dari 5 · 0 benar";
  - progres `--p`.
- "Selesai" pindah ke dalam konfirmasi Keluar.

*Selesai bila:* di 390×844 (hp-03), stem dan opsi A setidaknya terlihat di atas lipatan untuk soal pendek; untuk stem panjang, aksi lengket tidak menutupi opsi saat digulir (padding bawah = `--tinggi-aksi` + 16); dan tidak ada bar bawah navigasi.

**P3-02 Ulang kartu: penilaian jadi aksi primer [K-09, K-10].**
- **Sisi depan:** satu `.btn-primary.btn-lg.btn-block` "Balik kartu", dengan `kbd` Spasi.
- **Sisi belakang:**
  - `.nilai-kartu` berisi "Lupa" / "10 mnt", "Ingat" / "1 hari", dan "Mudah" / "3 hari".
  - Setelah dibalik, fokus dipindah ke "Ingat".
  - "Lihat depan" menjadi `.icon-btn.sm` (ikon putar, `aria-label="Lihat depan"`) di kanan atas kartu.
  - "Dengarkan" menjadi `.icon-btn.sm` di sebelahnya.
- Pill kop: tampilkan hanya yang bernilai > 0, misalnya "10 kartu hari ini · 10 baru". Pill "0/0 kuat" dan "0 jatuh tempo" disembunyikan.
- Teks kaki diganti: **"Kartu yang Anda ingat akan muncul makin jarang (1, 3, 7 hari, dan seterusnya). Kartu yang lupa kembali dalam 10 menit."** sebagai `.meta`.
- Tab memakai `labelPendek` (misalnya "Perubahan" untuk "Perubahan 2025–2026").
- Di ≥ 1280, kartu memakai `.tata` `kl-8` dengan panel `kl-4` "Antrean hari ini" yang memuat jumlah per dek sebagai `.list-rows`.

*Selesai bila:* pada desktop-09, tombol nilai setinggi 56 px dan merupakan elemen bernada paling menonjol, "Lihat depan" ≤ 36 px, serta tidak ada cincin kuning tanpa interaksi papan ketik.

**P3-03 Panel umpan (`soal.js`) [K-03].**
- Bila jawaban salah, `details` "Jejak hitung · 5 langkah" terbuka otomatis.
- Dasar hukum menjadi `ul.dasar-hukum`, satu pasal per `li`: `.pasal` "Pasal 19 ayat (3) UU KUP" + `.meta` "berlaku 29 Okt 2021". Titik yatim di akhir baris dihapus.
- Kaki umpan: "Waktu Anda < 1 dtk · target 3 mnt 20 dtk".
- Tambahkan tautan "Pelajari lagi: A2.8 Sanksi administrasi ›" ke topik soal.
- Aksi lengket: "Lanjut" sebagai `.btn-primary` (`flex: 2`) dan "Tanya Tutor" sebagai `.btn-ghost`.
- "Periksa" memakai `aria-disabled="true"` dengan gaya netral sampai opsi dipilih. Klik saat nonaktif memunculkan `.galat` "Pilih satu jawaban dulu."
- `soal.peringatan` (catatan verifikasi) **tidak dirender** saat soal dipakai di mode ujian. Di latihan dan ulas, catatan itu dirender sebagai `details.lipat` "Catatan sumber". Teksnya ditulis ulang tanpa kata "riset proyek", misalnya "Rumus mengikuti PMK 255/PMK.03/2008; perubahan terbarunya belum diverifikasi."
- Stem yang memuat pola "(1) … (2) …" disisipi baris baru sebelum setiap "(n)" dengan `white-space: pre-line`.

*Selesai bila:* pada hp-04, Lanjut lebih lebar daripada Tanya Tutor; dasar hukum ditulis sans; dan string "riset proyek" tidak muncul di DOM CAT.

**P3-04 Kelompok (`#kelompok`) [K-05, K-13, K-18].**
- Remah memakai `pendek`.
- CTA kop: primer **"Lanjutkan: A1.1 Subjek pajak orang pribadi"** (elipsis maks. 40 karakter) dan sekunder "Latih 10 soal". Caption "Topik 1: …" di bawahnya dihapus.
- Daftar topik:
  - Pill status hanya dari `statusTopik().label` (`dikuasai` → ok, `perlu disegarkan` → attn), sehingga "dikenal" hilang.
  - Meta kiri `.meta`: "konsep · ± 10 mnt".
  - Meta kanan `.bar-mini` 64 px + `teksSampel` ("2 dari 8 soal untuk dinilai").
  - "…butuh 6 lagi" dihapus.
- Kepala daftar: `.sect-head` h2 "Topik dalam kisi-kisi" + `.meta` "11 topik". Teks "Arahkan ke topik untuk pratinjau" dihapus.
- Panel kanan `kl-4` dimulai sejajar dengan kop (grid baris 1).
  - Cincin hanya bila `tahap === 'dinilai'`. Selain itu tampil `.angka` "—" + "Perkiraan awal" + `statusKelompok().teks`.
  - Empat aksi menjadi `.list-rows` 40 px: "Simulasi 40 soal", "Dek kartu · 72 kartu", "Studi kasus · 5", "Lembar angka · 30 angka".
- Bagian bawah (Perubahan, Dasar hukum, Tips) memakai `.sect`. "Dasar hukum utama" memakai `.dasar-hukum`.

*Selesai bila:* pada desktop-05, jumlah pill per baris ≤ 1, angka "38%" tidak bersanding dengan "0/11 dinilai", dan atas panel kanan sejajar ±4 px dengan remah.

**P3-05 Pengaturan Latih (`#latih`) [K-11].**
- Lead: **"Pilih kelompok dan jumlah soal. Setiap jawaban langsung dibahas: inti jawaban, langkah hitung, dan dasar hukumnya."**
- Di ≥ 1280, panel kanan lengket `kl-4` berisi: `.angka` "568" + `.meta` "soal tersedia untuk saringan ini", chip filter aktif yang dapat dihapus (`.chip-row`), primer penuh lebar **"Mulai latihan · 10 soal"**, dan `.btn-ghost.rata` "Atur ulang saringan".
- Di < 1280, ringkasan satu baris (`.meta` "568 soal tersedia") tampil di atas form, dan `.sticky-actions` memuat "Mulai latihan · 10 soal".
- Tombol di tengah form dan kalimat "568 soal cocok dengan filter." dihapus.
- Urutan form: Jumlah soal (`.seg.batas`) → Kelompok/Topik → Jenis/Kesulitan → sakelar "Hanya soal yang pernah keliru" → `details.lipat` **"Saringan lanjutan"** (Soal mirip ujian, Hanya ketentuan 2025+, Waktu ketat per soal).
- "Butir laporan peserta" diganti **"Soal mirip ujian Oktober 2026"** dengan bantuan "Diambil dari topik yang dilaporkan peserta. Untuk Tingkat A, laporan B juga memuat A1–A5."
- "Hanya soal gaya UKP nyata" diganti "Hanya soal kasus berangkai dan berkutipan" dengan bantuan "Seperti ujian 26–29 Oktober 2026."
- "Buku Kesalahan terbaru" memakai `.sect` dan tag sebab memakai pill sans.

*Selesai bila:* "568" muncul tepat sekali, kartu form tidak menyisakan ruang kosong > 24 px, dan hanya ada satu `.btn-primary`.

**P3-06 Topik (`#topik`) [K-01, K-03].**
- Di ≥ 1280, gunakan `.tata`: isi `kl-8` (prosa dibatasi `--w-teks`) dan `kl-4` lengket **"Di halaman ini"**. Panel kanan memuat daftar tautan bagian (Ringkasan, Angka kunci, Contoh, Jebakan, Dasar hukum) dengan bagian aktif ditandai (IntersectionObserver), status "Akurasi 75% dari 4 soal", primer "Cek pemahaman · 5 soal", dan sekunder "Tandai dibaca".
- Di < 1280, panel tidak ada. CTA tetap berada di akhir halaman.
- Kop:
  - eyebrow "A1.2 · PPh Orang Pribadi" (kode + kelompok pendek);
  - meta satu baris `.meta` "± 12 mnt · klasifikasi · konsep · Topik 2 dari 11";
  - pill status hanya dari `statusTopik().label`;
  - stepper 11 segmen tetap ada, tetapi tanpa teks "0 dibaca";
  - tombol dropdown "Cek 5 soal" di kop dihapus (CTA ada di panel atau di akhir).
- Semua bagian memakai `.sect` dengan h2 sans. **Satu** `.sect.ganda` dipakai untuk "Cek pemahaman" di akhir.
- Nav topik lengket:
  - kiri `.btn` "‹ Sebelumnya" + `.meta` judul pendek;
  - kanan `.btn-primary` **"Berikutnya: A1.3 Biaya boleh dikurangkan"** (elipsis);
  - teks tengah "2 / 11" dihapus.
- Tabel angka kunci: kolom dasar memakai `.dasar-hukum`, dan tombol "+" menjadi `.icon-btn.sm` dengan `aria-label="Jadikan kartu: Bunga deposito"`.

*Selesai bila:* pada desktop-06 di 1366, tidak ada ruang kosong > 64 px di kanan konten; jumlah eyebrow mint = 0; dan label tombol berikutnya memuat kode serta judul topik.

**P3-07 Peta materi (`#tingkat`/`#belajar`) [K-11, K-18].** Segmen tingkat memakai `.seg.batas`. Setiap kartu kelompok memakai `statusKelompok`: tahap `dinilai` → `.angka` + bar netral + penanda 60; tahap `awal` → "Perkiraan awal" + bar putus; tahap `belum` → `.meta` "belum dinilai". Pill "0/11 dikuasai" diganti `.meta` "0 dari 11 topik dikuasai". Satu `.ringkas-status` di atas grid memuat `TEKS_DINILAI` hanya bila semua kelompok belum dinilai.
*Selesai bila:* angka persen yang sama tidak bersanding dengan pecahan "0/n".

**P3-08 Studi kasus (`#kasus`).** Di ≥ 1280, narasi berada di `kl-8` dengan `max-width: var(--w-teks)`, dan Data kasus lengket di `kl-4` sejajar dengan atas narasi. Perbaiki `.page:has(.panel-kanan)` agar lebar 1200 benar-benar diterapkan; koordinasikan dengan P1 bila aturan CSS-nya salah.
- Di ≥ 1024, narasi dipotong 4 baris + `.btn-ghost.rata` "Baca narasi lengkap".
- Kaki panel data memuat `.btn-sm` **"Kalkulator PPh OP tahunan"** (ikon calc). Teks lepas "PPh Orang Pribadi tahunan" dihapus.
- `▼` diganti ikon chevron SVG yang sama dengan `details` lain.
- Kop hanya memuat "Langkah 1 dari 6" + stepper.
- "Periksa" dibuat `aria-disabled` sampai ada pilihan, seperti P3-03.

*Selesai bila:* tidak ada ruang kosong > 64 px di kanan narasi pada 1366, dan data kasus terlihat tanpa digulir pada 1366×901.

**P3-09 Cakupan (`#cakupan`) [K-13].** Remah memakai `pendek`. "MATA UJIAN 9 · 10 modul aplikasi" diganti "9 kelompok" + `.meta` "Dokumen KLC menyebutnya mata ujian." Status butir memakai `.titik-nada` hanya untuk butir yang belum tersentuh, dan butir tersentuh cukup ditandai ikon cek `--muted`.
*Selesai bila:* kata "modul" tidak muncul di halaman, dan pada hp-11 remah tampil satu baris "‹ Belajar".

**P3-10 Strategi PG.** Bagian memakai `.sect`, dan eyebrow mint hilang otomatis dari P1. Tidak ada perubahan struktur lain.

### P4 · Ujian & alat (`js/views-simulasi.js`, `js/views-alat.js`)

**P4-01 Hasil simulasi (`desktop-24`) [K-05, K-06, K-07].**
- **Kartu skor:**
  - Cincin dihapus. Skor ditulis `.angka` "1" + `.satuan` "/100" dengan `.progress-line` dan penanda 60.
  - Stempel: **"BELUM LULUS"** (attn) atau **"MEMENUHI BATAS 60"** (ok).
  - Satu kalimat: "Kurang 59 benar dari batas 60. 98 soal tidak dijawab."
  - Meta: "2 Nov 2026 · 100 soal · waktu terpakai 1 dari 210 mnt".
- **Bila soal kosong > 50%:** tampilkan `UKP.c.banner` info di atas kartu: "Simulasi dikirim dengan 98 soal tidak dijawab, jadi hasil ini belum mencerminkan kemampuan Anda. Ulangi saat ada waktu 210 menit."
- **Langkah berikutnya:** `UKP.c.langkahBerikut`, dengan item pertama mengikuti jenis terbanyak:
  1. "Ulas 1 jawaban salah" (primer), atau "Lihat 98 soal tidak dijawab" bila salah = 0;
  2. "Latih 10 soal A2" · "kelompok terlemah";
  3. "Buat rencana dari hasil ini" (hantu).

  Tombol "Tambah ke kartu" pindah ke halaman Ulas, dan chip "Ulas juga" dihapus (diganti tab di Ulas).
- **Per kelompok:** tabel diurutkan dari terlemah. Kolom "Tempo" menjadi **"Waktu terpakai"** dengan isi "12 dari 53 mnt". Bar skor memakai `--viz-netral` dengan nada attn hanya pada angka < 60 bila kelompok itu dijawab.
- **Peta topik:** kisi kartu diganti `.daftar-skor` diurutkan dari terlemah. Topik yang semua soalnya tidak dijawab memakai `tahap="awal"` dengan nilai "tidak dijawab", **bukan merah**. Jalankan `UKP.c.lipatSisa(rows, 5, (s, t) => 'Lihat semua ' + t + ' topik')`. Di atas daftar ditaruh `ringkasStatus` "41 dari 42 topik di bawah 60. Mulai dari 5 terlemah."

*Selesai bila:* di desktop-24 jumlah elemen berlatar `--attn-soft` ≤ 2; "1" besar muncul sekali; hanya ada satu `.btn-primary`; dan tinggi halaman ≤ 1.300 px (sebelumnya 1.670).

**P4-02 Dialog kirim (`desktop-23`) [K-17].**
- Judul **"Kirim 1 dari 100 jawaban?"**.
- Isi: tiga stat (Terjawab 1 · Tidak dijawab 99 · Ragu 1). Angka "Tidak dijawab" memakai `--warn`/600, bukan merah display.
- Tautan "Tinjau 1 ragu" dan "Ke soal kosong pertama (no. 2)".
- Kalimat risiko dengan ikon peringatan `--warn`: "99 soal tidak dijawab akan dinilai salah. Jawaban tidak dapat diubah setelah dikirim."
- Kaki: `.btn` "Kembali ke soal" (autofocus), lalu `.btn-danger.isi` **"Kirim dan akhiri"** di kanan.

*Selesai bila:* dialog hanya memuat satu tombol berisi, dan tombol tegas berada paling kanan di desktop dan paling atas di < 600.

**P4-03 Layar ujian CAT (`desktop-22`).**
- Bar: "Soal 2 dari 100 · A1" + ikon cek + **"Tersimpan otomatis"** (jam di `title`) + "Terjawab 1 · Ragu 1". Tombol kanan **"Selesai dan kirim"** (`.btn.btn-sm`).
- Hapus salah satu dari dua garis horizontal di bawah bar.
- Hapus "2/100" di kanan stem.
- Panel daftar:
  - kepala "Daftar soal" + `.meta` **"Terjawab 1 dari 100"**;
  - kepala kelompok sans 13/600 satu baris dengan elipsis ("A1 · PPh Orang Pribadi") + "1/25" di kanan;
  - kisi **5 kolom** (sel 40 px, gap 6) agar blok 25 soal menjadi 5×5 tanpa nomor yatim.
- Bar bawah: "Sebelumnya" dan "Ragu-ragu" di kiri, `.btn-primary` "Berikutnya" di kanan (`margin-left: auto`).
- Catatan verifikasi tidak tampil (dijamin oleh P3-03; P4 memastikan render soal memakai opsi mode ujian).

*Selesai bila:* tidak ada nomor sendirian di baris kisi untuk blok 25/20/5, dan kata "riset" tidak ada di layar ujian.

**P4-04 Ulas (`desktop-25`) [K-10].**
- Tab saling lepas: "Salah dijawab 1" · "Tidak dijawab 98" · "Ragu tapi benar 1" · "Semua 100".
- Hapus tautan "Kembali ke hasil", karena remah dan tombol kembali sudah cukup.
- Aksi "Jadikan kartu · Tandai paham · Tanya Tutor" pindah ke kaki panel pembahasan.
- Tombol "Tambah semua yang salah ke kartu (1)" diletakkan di kop sebagai sekunder.

*Selesai bila:* jumlah tab "Salah" + "Tidak dijawab" + "Ragu tapi benar" sama dengan total yang tidak benar ditambah yang ragu benar, tanpa tumpang tindih.

**P4-05 Persiapan simulasi (`desktop-21`, `hp-05`) [K-11].**
- Lead: **"Latihan ujian penuh seperti CAT: waktu berjalan, pembahasan muncul setelah dikirim."**
- Format memakai segmen ber-sub ("Komprehensif A" / "210 mnt · ±100 soal", "Per kelompok" / "40 soal", "Kustom" / "atur sendiri"), yang otomatis vertikal di < 480.
- Ringkasan muncul sebelum tombol: di HP berupa satu baris `.meta` "210 mnt · ±100 soal · batas 60" tepat di atas `.sticky-actions` "Mulai simulasi". Di ≥ 1280, kartu Ringkasan berada di `kl-4` lengket bersama tombol primer.
- Daftar aturan dan pintasan dipindah ke `details.lipat` "Aturan simulasi".
- "USKP" diganti di seluruh berkas.

*Selesai bila:* di 390 px tidak ada segmen 2+1, tombol Mulai berada setelah ringkasan, dan `grep -c USKP js/views-simulasi.js` = 0 untuk teks tampilan.

**P4-06 Tanggal dan jam berformat Indonesia [K-12].** Ganti 5 input: kalkulator (`views-alat.js:145`), rencana (322), pengingat jam (482), dan pengaturan (1237) dengan `UKP.c.inputTanggal`/`UKP.c.inputJam`. Pertahankan galat yang sudah ada melalui `onGalat`. Teks bantu cukup "Selasa · 43 hari lagi".
*Selesai bila:* tidak ada `type: 'date'` atau `type: 'time'` yang terlihat di views-alat (selain input tersembunyi milik komponen), tidak ada "mm/dd/yyyy" atau "PM" di layar, dan nilai yang tersimpan tetap ISO (uji kalkulator lulus).

**P4-07 Rencana (`desktop-13`, `hp-07`).**
- Lead dengan tanggal: **"Jadwal mingguan sampai hari ujian. Centang tugas yang selesai; topik dan simulasi tercentang otomatis."** Lead tanpa tanggal: **"Isi tanggal ujian agar jadwal mingguan bisa disusun."**
- Tile: label "Sisa hari", "Jam tersedia", dan "Jam dibutuhkan"; nilai "70–110" dengan `white-space: nowrap`, memakai `.angka` 28 px.
- Label input "Menit/hari kerja" dan "Menit/akhir pekan" satu baris, dengan `align-items: end` pada grid.
- Kalimat "0 dari 65 tugas selesai…" yang mengulang bar dihapus.
- Kop minggu: "16 tugas · ± 203 dari 135 mnt tersedia", disertai `pill warn` **"Lebih 68 mnt"** bila beban melebihi.
- Tugas dikelompokkan per hari dengan subkepala sans 13/600 "Rabu, 4 Nov · 3 tugas · 40 mnt". Meta tugas hanya jenis + menit. Judul tugas berupa "A2.1 Definisi dan istilah KUP dan PPSP" + `.meta` "baca + cek 5 soal".
- Garis kiri 3 px hanya untuk tugas non-baca (simulasi, logistik).
- Hanya "Minggu ini" yang terbuka; minggu lain menjadi `details.lipat` "Minggu 2 · 9–15 Nov · 21 tugas".

*Selesai bila:* tinggi halaman di 1366 ≤ 2.000 px (sebelumnya 4.526), dan tidak ada tanggal yang diulang di baris tugas.

**P4-08 Kemajuan (`desktop-14`, `desktop-15`, `hp-08`) [K-05, K-10, K-18, K-19].**
- Lead: **"Lihat topik yang masih lemah dan kesalahan yang berulang, lalu latih langsung dari sini."**
- Tab memakai `labelPendek` ("Hadir", "Kelemahan", "Kesalahan", "Laporan", "Lencana").
- Peta kelemahan:
  - angka kanan ditulis "skor 54";
  - kepala kartu memuat `.meta` "Skor = akurasi yang ditimbang kebaruan dan tingkat kesulitan; batas aman 60.";
  - meta baris "63% benar dari 8 soal".
- Sebab kesalahan memakai `V.batang` netral (tanpa `tone`, `maks: 560`), dengan hanya sebab terbesar diberi nada `warn`. Label "18 dari 50 kesalahan".
- Laporan:
  - eyebrow "Laporan mingguan" dan judul "26 Okt – 1 Nov";
  - "FINAL" dihapus; minggu berjalan diberi pill "sementara";
  - catatan "Laporan tersusun otomatis setiap Jumat dan tersimpan di perangkat ini.";
  - delta ditulis `.meta` "+22 poin dari minggu lalu" tanpa pill dan tanpa dipotong;
  - penurunan volume bernada netral;
  - "kesalahan terbanyak" hanya ditampilkan bila ≥ 2 kejadian;
  - saran menjadi `UKP.c.langkahBerikut` tanpa primer (semua sekunder atau hantu);
  - keadaan kosong cukup satu aksi.
- Heatmap memakai `statusTopik`, dengan sel belum dinilai netral.

*Selesai bila:* tidak ada bar hijau untuk kesalahan, string "W44" atau "ISO" tidak ada, dan di hp-08 tab Laporan terlihat penuh.

**P4-09 Peta formulir (`desktop-16`, `hp-09`).**
- Satu `UKP.c.banner` warn di atas daftar: "Semua struktur formulir mengikuti versi pra-Coretax dan belum dicek ulang terhadap Coretax (status per 27 Okt 2026)." Pill "perlu cek" per kartu dihapus; pill per kartu hanya untuk pengecualian, misalnya ok "terverifikasi".
- Filter menjadi `.chip-row.gulir` dengan "Semua · 14" di depan dan hitungan per chip ("A3 · 7").
- Kode formulir ditulis horizontal sebagai `.kode` di atas judul. Tab indeks berteks diputar dihapus.
- Di HP, kartu formulir menjadi `.row-link` (kode · judul · meta "5 bagian · 22 baris" · chev).

*Selesai bila:* tinggi hp-09 ≤ 2.200 px (sebelumnya 4.278) dan tidak ada teks berotasi.

**P4-10 Lembar angka (`desktop-17`, `hp-10`) [K-03, K-15].**
- Kolom nilai memakai sans 15/400. Hanya token angka (Rp, %, jt) yang dibungkus `<b class="num">` 600 tabular.
- Kolom dasar memakai `.dasar-hukum`.
- Aksi kop: sekunder **"Tambah semua ke kartu (30)"**, sekunder "Cetak", dan `UKP.c.menuLebih` berisi "Salin teks" dan "Buka dek A1". Tidak ada primer. Toast setelah menambah menampilkan aksi "Ulang kartu A1".
- Di HP, baris berbentuk kepala satu baris `.meta` "No. 3 · Uraian" + `.icon-btn.sm` "+" (`aria-label="Jadikan kartu"`) di kanan, nilai 16 di bawahnya, lalu dasar `.meta`. Target tinggi baris ±100 px.
- Hapus garis kosong di dasar kartu "Uji diri".

*Selesai bila:* tinggi hp-10 ≤ 4.000 px (sebelumnya 6.633) dan aksi kop memakai paling banyak dua gaya (`.btn` + `.icon-btn`).

**P4-11 Referensi dan Info ujian (`desktop-18`, `desktop-19`) [K-03].**
- Nomor peraturan memakai `.kode`/`.dasar-hukum` tanpa kapital, sehingga "s.t.d.t.d." tetap ditulis kecil.
- Status UU digabung menjadi satu pill ok **"berlaku sejak 1 Jan 2022"** (ikon cek). Status lain: warn "dicabut 2026", info "menunggu PMK".
- Info ujian memakai `dl.fakta`. Nilai "belum diumumkan" ditulis sans `--muted` italic.
- Lead Referensi: "Cari undang-undang, PP, PMK, dan PER yang dipakai di soal, lengkap dengan status berlakunya."

*Selesai bila:* tidak ada teks hukum dalam huruf kapital, dan setiap UU memiliki ≤ 1 pill status.

**P4-12 Kalkulator (`desktop-12`).** Kepala hasil berupa satu judul (`.card-title` "Sanksi bunga"), menggantikan eyebrow bertumpuk "HASIL" lalu "SANKSI BUNGA". Gunakan input tanggal K-12.
*Selesai bila:* jumlah eyebrow per kartu ≤ 1.

**P4-13 Pengaturan (`desktop-20`).**
- "Ulangi panduan awal" dipindah ke bagian Target, sehingga zona bahaya hanya berisi "Hapus semua data".
- Textarea impor disembunyikan sampai "Impor dari teks" ditekan, dengan placeholder "Tempel teks ekspor dari perangkat lain di sini."
- Spinner angka disembunyikan di kedua input menit.
- Jam pengingat memakai K-12, dengan bantuan "Format 24 jam, misalnya 19.30".

*Selesai bila:* tidak ada textarea kosong yang terlihat saat halaman dimuat.

**P4-14 Palet cari (`desktop-26`).** Hapus label jenis per baris bila grup sudah berjudul. Ganti dengan `.meta` yang membantu ("A1 · ± 14 mnt"). Bekerja sama dengan CSS P1-14.
*Selesai bila:* kata "TOPIK" tidak berulang di baris hasil.

**P4-15 Tutor dan Profesi.** Pakai `.sect`/`.card-meta`. Lead Tutor: "Tanyakan soal, topik, atau hasil kalkulator. Tutor tidak tersedia selama simulasi."

---

## 7. Kriteria QA global (semua paket, diperiksa sebelum v7.0)

1. **Overflow:** `node tools/shot.js` di 320, 390, 768, 1024, 1280, dan 1366 px, tema terang dan gelap, tidak menghasilkan galat "menggulir horizontal", tidak ada galat konsol, dan tidak ada teks terpotong tanpa elipsis yang disengaja.
2. **Kontras (WCAG 2.2 AA):** teks ≥ 4,5:1 (teks ≥ 18,66 px tebal atau 24 px ≥ 3:1), dan komponen non-teks (batas kontrol, isi bar terhadap trek, penanda acuan) ≥ 3:1 di kedua tema. Skrip kontras token v6 dijalankan ulang dengan token §3.1. `--ink-faint` tidak dipakai di atas `--surface-2` terang.
3. **Fokus:** semua kontrol dapat dijangkau dengan Tab. Cincin muncul hanya pada `:focus-visible`. Fokus tidak tertutup topbar, `.fokus-bar`, atau `.sticky-actions` (WCAG 2.4.11).
4. **Gerak:** dengan `prefers-reduced-motion: reduce` dan `:root[data-gerak="kurang"]`, tidak ada animasi atau transisi > 1 ms. Ini mencakup gulir tab (`behavior: 'auto'`) dan mask.
5. **Tema gelap:** setiap halaman di §6 diperiksa dalam tema gelap. Segmen terpilih, `.bar-mini`, `.ringkas-status`, dan `mark` palet terbedakan.
6. **Satu primer:** pada setiap tangkapan, jumlah `.btn-primary` + `.btn-danger.isi` yang terlihat di viewport ≤ 1. Pengecualian yang diizinkan: `.sticky-actions` yang mengulang primer kop di HP saat kop tidak terlihat.
7. **Satu rumah per fakta:** pada desktop-02, 07, 22, 24, dan 25, angka kunci (rangkaian, kesiapan, 568, skor, nomor soal) muncul tepat sekali di DOM yang terlihat.
8. **Mikroteks:** `grep -nE "vignette|USKP|drill|Drill|minggu ISO|W[0-9]{2}|FINAL|riset proyek|mm/dd|Soal =|\bTempo\b" js/views-*.js js/soal.js js/app.js` tidak menghasilkan string tampilan.
9. **Uji:** `node --test test/` lulus, termasuk uji baru `tanggal.test.js` dan `penguasaan.test.js`. `node tools/validate-module.js` lulus untuk setiap berkas yang diubah. `node tools/build-artifact.js` dan `node tools/build-offline.js` berhasil.
10. **Tidak ada regresi perilaku:** alur sesi harian, latihan, ulang, kasus, simulasi (mulai → kirim → hasil → ulas), ekspor/impor, dan penyimpanan state lama (`ukp.v1`) tetap berfungsi. Mode `ujian` dan `sesi` tidak terganggu oleh mode `fokus`.
11. **Pembanding:** buat ulang ke-37 tangkapan ke `/tmp/claude-0/-home-user/d629c9bc-6a32-5bcb-8f58-00c1aca71847/scratchpad/review/v7-akhir/` dengan nama yang sama untuk ditinjau berdampingan dengan `v7-awal/`.

---

## 8. Di luar cakupan v7

Hal berikut tidak dikerjakan di v7:
- palet warna merek, font, ikon, dan logo baru;
- animasi baru;
- perubahan data soal atau konten;
- perubahan struktur penyimpanan;
- tampilan di bawah 320 px.

Perubahan yang tidak disebut dalam dokumen ini memerlukan catatan di `docs/DESAIN-V7.md` §9 sebelum dikerjakan.

## 9. Catatan perubahan di luar rencana

*(diisi oleh agen bila menyimpang dari rencana, satu baris per perubahan: paket · butir · alasan)*

- Integrasi · P2-10 · Lembar "Lainnya" kini memakai kelompok dan urutan sidebar (Harian / Materi / Alat / Ujian), diturunkan dari GRUP_SIDEBAR tanpa tujuan yang sudah ada di bar bawah; label item sama dengan sidebar.
- Integrasi · K-05 · `.daftar-skor` menjadi wadah kueri (`container-type: inline-size`). Di daftar ≤ 300 px (kolom kl-4 ≥ 1280, HP 320) bar turun ke baris kedua di bawah judul dan `.nm-pendek` menggantikan `.nm-panjang`; timpaan lokal Hari Ini dihapus.
- Integrasi · K-06 · `.kosong.ringkas` yang berisi teks/aksi ditata grid ikon + isi bertumpuk (global, menggantikan timpaan lokal Hari Ini); `.ringkas-status` di kolom kl-4 menurunkan aksinya ke bawah kalimat.
- Integrasi · K-08 · Aturan mode sesi untuk `.fokus-bar` (topbar disembunyikan, bar di atas layar, scroll-padding) dan `body[data-view="mulai"]` (onboarding tanpa sidebar) dipindah dari views-home.js ke app.css. `.sticky-actions` di mode fokus dan sesi memakai padding 8 px sehingga krom layar kerja 390 px = 113 px.
- Integrasi · K-03 · Aturan `.flash-sisi .meta` (eyebrow kapital) dihapus; label sisi kartu memakai `.meta` kontrak.
- Integrasi · P3-06 · `UKP.c.ringkasTopik` langsung menulis `.sect-head > h2`, `ul.dasar-hukum`, "Status peraturan per …", dan catatan verifikasi lewat `UKP.rapikanCatatan`; adaptor pasca-render di views-belajar.js dihapus.
- Integrasi · §5 · Tiga teks peringatan kalkulator (js/kalkulator.js) tidak lagi menyebut "riset"/"docs/research".
- Integrasi · K-07 · `ol.langkah-berikut` menjadi wadah kueri; di daftar ≤ 520 px aksi semua item (bukan hanya primer) turun ke bawah isi. Saran laporan mingguan (learn.js) kini punya `judul` pendek + `meta`; laporan lama tanpa `judul` memakai kalimat penuh berbobot 500.
- Integrasi · K-05 · Ambang `.daftar-skor` dipisah: ≤ 360 px bar turun ke baris kedua, ≤ 300 px nama pendek. HP 390 kembali menampilkan nama kelompok lengkap.
- Integrasi · K-19 · `V.kolom` selalu meredam batang selain sorotan (juga bila sorotan bernilai 0); `.viz-kolom-batang` tanpa nada = `--viz-netral`. `V.ringSegmen` dan `V.heatmap` menerima `netral: true` (isi netral; heatmap memberi nada lewat `nadaSel` hanya untuk pengecualian). `V.statTile` menerima `satuan` (angka mono + satuan sans).
- Integrasi · §3.3 · Peta materi, Peta kelemahan, dan KMK bunga menulis status mayoritas sekali di `.ringkas-status`; nada hanya untuk pengecualian. Indeks peraturan: "berlaku sejak" menjadi `.meta`, tiap golongan dilipat setelah 5 kartu.
- Integrasi · P4-07 · Rencana: bila tanggal ujian ada, Parameter dilipat satu baris; < 1280 urutan = Parameter → jadwal → angka (K-16). Pemisah fase dan label minggu sans netral (tanpa garis ganda mint).
- Integrasi · D1 · Hari Ini: kartu "Minggu ini" menjadi "7 hari terakhir" (tile netral bertitik, jumlah hadir di meta); banner laporan dipasang sesudah kartu Sesi; fase di kop diambil dari rentang fase Rencana. Ulas: pill jawaban/kunci/waktu dihapus (sudah di opsi dan umpan). Ulang kartu: panel daftar dek diganti kartu "Cara kerja".
- Sisa v7 · K-03 · `dl.fakta` tidak lagi memakai grid 2 kolom berbasis viewport: tiap `div > dt + dd` menjadi baris flex yang membungkus (label `max(140px, 30%)` di ≥ 600, nilai minimal 12ch), sehingga di kartu sempit (kisi tiga kolom Info ujian) nilai turun ke bawah label alih-alih terjepit 22 px. `dl.fakta.rapat` (label kiri, nilai kanan) dipakai untuk ringkasan per tingkat Cakupan materi resmi.
- Sisa v7 · P4 Lembar angka · gaya inline `ul.lembar-hp` dan `li.lembar-baris` dipindah ke app.css; di dalam grup akordeon daftar memakai margin `0 var(--s-3) var(--s-2)` sehingga baris tidak menempel ke tepi kartu.
- Sisa v7 · P3 Cakupan · kelompok butir tertutup secara bawaan di semua lebar (summary sudah menyebut "x dari y dipelajari"); saringan membuka yang cocok, "Buka semua" tetap ada. Kelompok pertama yang belum selesai sengaja tidak dibuka karena menambah ±1.400 px (target desktop ≤ 3.000 px; kini 1.820).
- Sisa v7 · K-18 · Pratinjau topik memakai `statusTopik`: pill hanya untuk "dikuasai"/"perlu disegarkan", selain itu `.meta` "belum dinilai" atau `teksSampel`; `STATUS_PILL` ("dikenal", "terlatih") dan akurasi mentah dihapus.
- Sisa v7 · K-19 · Heatmap netral: sel berangka `--surface-2`, sel tanpa cukup data transparan dengan garis putus `--line`; legenda kotak 12 px menampilkan "dinilai (skor)"/"% benar" dan kotak kosong bergaris putus (opsi baru `labelIsi`). Heatmap kelompok × jenis menulis "n dari m sel di bawah 60. Tiga terendah bertanda merah." bila mayoritas di bawah 60.
- Sisa v7 · §2-5 · Umpan soal tidak lagi menampilkan kunci data formulir (1770S.induk.12); diganti label "1770 S · Induk A–B baris 12", dan dialog baris formulir tidak menampilkan kode internal.
- Sisa v7 · P4-07 · Rencana: kode fase F0–F5 tidak tampil (kepala fase, garis waktu, lipatan Fase belajar). Minggu yang berisi dua fase menulis "Diagnosis (2–3 Nov) lalu Fondasi" di kop minggu. "sampai H-1" menjadi "sampai 14 Des · 7 minggu" (juga di banner susun ulang dan pengingat .ics: "sehari sebelum ujian"); ringkasan parameter "15 mnt hari kerja · 30 mnt akhir pekan".
- Sisa v7 · P3-07 · Kartu kelompok tahap awal memakai struktur yang sama dengan tahap dinilai (`.angka` + `.satuan` "dari 100" + `bar-mini` putus-putus), meta "perkiraan awal · n dari m topik dinilai · k soal". Tautan "Latih 10 soal" per kartu dihapus; tautan latih ada sekali di `.ringkas-status` di atas kisi (kelompok belum dinilai pertama).
- v7.7 · Latih · Mode **jawab langsung** (bawaan; Pengaturan › "Periksa dulu" mengembalikan alur lama): memilih opsi langsung menilai dan membuka pembahasan; baris status besar, kunci ditandai, jumlah 10/20/50/Semua, `#latih` tanpa params langsung mulai 20 soal acak; ringkasan dengan "Ulangi N soal yang salah". Penanda Yakin/Ragu/Menebak dipertahankan sebagai tanda opsional sesudah menjawab ("Tadi Anda: …", pintasan Y/R/M).
- v7.8 · Konten · 100 soal **Try Out UKP Tingkat B** (transkrip OCR rekaman 6 Nov 2026) diimpor lewat `tools/impor-tryout.js` ke modul A1–A5, B6–B8 dengan field `sumber: { set: "TO-B-2026-11", no, judul, tingkat }`; 29 soal ◐ (opsi/stem terpotong di sumber, dilengkapi dari pembahasan; rincian di `docs/TRYOUT-B-2026-11.md`). `UKP.konten.daftarSet()/soalSet()`; Simulasi mendapat format **Try Out** (urutan asli, 210 menit bawaan, menit dapat diubah, label "Try Out UKP B · 100 soal"); Latih mendapat segmen **Sumber soal** (chip, "Semua" = urutan asli); kop soal menulis "· Try Out UKP B no N". Skema ringkasan tim (tim.js, deploy/lib-hasil.js) menerima format `tryout` dan kode paket `TO-X-YYYY-MM`.
- v7.8 · A3.5 · Rujukan PPh 22 diselaraskan ke **PMK 51/2025** (indeks peraturan + perubahan + dasarHukum topik; ◐ tanggal berlaku dan nomor pasal belum dicek ke naskah). Soal lama yang mengutip PMK 34/PMK.010/2017 dibiarkan; substansi tarifnya sama.
- v7.7 · Dasbor tim · Ringkasan anggota membawa field `jawaban` (≤ 400 entri/30 hari, seluruh ringkasan ≤ 120 KB; body server 160 KB): jawaban per soal dari latihan/sesi/cek dan dari rekaman simulasi (termasuk soal kosong, id simulasi, ragu). Presence/room tidak membawanya. Detail anggota (`#tim/<id>`): **Ringkasan masalah** (kelompok terlemah + topik, pola kesalahan teratas dari `jebakanOpsi`, tren 7 hari), **Jawaban per soal** (tab Soal salah / Semua / Simulasi, saring kelompok, dialog soal mode ulas), **peta simulasi**, ekspor CSV jawaban. `UKP.belajar.aturKeyakinan()` memperbarui penanda Yakin/Ragu/Menebak susulan pada entri jawaban terakhir.
- v7.8.1 · Latih · Setelah menjawab di mode langsung, `gulirLangsung` menggulir sampai baris status **dan** penanda "Tadi Anda" utuh di atas bar aksi lengket (tepi bawah diukur dari bar yang sedang menempel, bukan hanya `scroll-padding-bottom`); bila tidak muat, prioritas: baris status utuh > opsi kunci/pilihan tetap terlihat > penanda utuh. Temuan pemeriksa v7.7 ditutup: teks persetujuan Pengaturan › Tim dan panduan deploy menyebut jawaban per soal yang dibagikan; Enter setelah mengklik penanda = Lanjut; angka di detail anggota berlabel sumber (jawaban 30 hari vs ringkasan 14 hari); judul tab detail anggota diperbarui saat data tiba.
- v7.9 · Dasbor tim · Bagian **Latihan bersama di perangkat ini** (selalu di atas, juga tanpa sambungan tim): `ul.tim-lokal` kartu per peserta dari `UKP.belajar.pesertaBersama()` (pill *lokal*, n soal, akurasi 7 hari, terakhir aktif) → `#tim/lokal:<nama>`; detail memakai `halamanDetail` yang sama lewat `normalLokal(UKP.belajar.dokPeserta(nama))` (tab Simulasi dan riwayat simulasi disembunyikan, eyebrow "Latihan bersama · dicatat di perangkat <nama>", tombol **Hapus data peserta ini**); cadangan internal `pesertaDari`/`dokDari` mengikuti kontrak yang sama; CSS blok "v7.9 B" di akhir app.css; `jawabanRingkas` (tim.js) tetap tidak membaca `s.jawabanBersama`.
- v8.0 · Dasbor tim · **Evaluasi tim** `UKP.c.evaluasiBersama(sesi, { onUlangi, onTutup, labelTutup, ringkas, tingkatJudul, tanpaKop, diDasbor })` di js/views-tim.js (angka dari `UKP.belajar.evaluasiSesi`, cadangan `evaluasiLokal` berkeluaran identik): kop, pita stat, `ol.eval-peringkat` (bar mini + pill *yakin tapi salah*), `table.eval-matriks` soal × peserta di `.tabel-wrap` sendiri (kolom soal lengket; sel `.eval-sel[data-hasil]` benar/salah/kosong + `.eval-yk` Y/R/N; baris → dialog soal mode ulas dengan jawaban tiap orang lewat `dialogSoal` yang kini dipakai bersama detail anggota), `ol.eval-sulit`, topik tim (`daftarSkor`), CSV sesi; daftar **Sesi terakhir** (≤ 8, `ul.eval-sesi`, label *belum selesai*) di bagian lokal; rute `#tim/sesi:<id>` dengan **Hapus sesi**; detail lokal: keyakinan dari field `k` (kelompok dari `kd`/soal) dan pill *yakin tapi salah: n (30 hari)*. CSS blok "v8.0 B" di akhir app.css.
- v7.9 · Latih · (a) Keyakinan **sebelum** menjawab di mode langsung: segmen "Seberapa yakin? (opsional) Yakin · Ragu · Menebak" (.keyakinan-awal) di bawah opsi; nilainya tercatat saat menjawab dan terbawa ke penanda "Tadi Anda" yang tetap bisa diubah; pintasan Y/R/M sebelum dan sesudah. (b) **Latihan bersama** (s.bersama = {aktif, peserta}, s.jawabanBersama, UKP.belajar.catatJawabanBersama/pesertaBersama/dokPeserta, UKP.c.aturBersama): papan "Siapa menjawab apa?" per nama (A B C D –, giliran otomatis, chip nama pada opsi), kunci terbuka otomatis atau lewat "Lihat kunci", status "Benar X dari N · Kunci D · Salah: …"; pengaturan di Latih › Atur saringan dan Pengaturan › Tim; ringkasan akhir per peserta; jawaban pemimpin (nama = profil) juga tercatat ke statistik pribadi sekali. Data peserta lain hanya di perangkat ini (tidak ke server/db/kode hasil). Pemeriksa: kop fokus "Soal n dari N · 3 orang" dipendekkan agar tidak terpotong di HP.
- v8.0 · Latih · Papan latihan bersama meniru referensi pengguna: baris per orang (nomor, nama, A B C D, Y R N, –; `.papan-baris`), opsi soal hanya tampilan (`.opsi-tampil`), chip nama di opsi setelah kunci; kunci terbuka otomatis hanya bila semua baris lengkap (huruf + keyakinan), selain itu "Lihat kunci"; status menyebut "yakin" yang salah; bar aksi bersama (Ke menu · meta · Selesai sekarang · Lihat kunci/Lanjut); kop dengan hitung mundur 150 dtk/soal (`.waktu-sesi`) dan daftar peserta; rekaman sesi `s.sesiBersama` (mulaiSesiBersama/catatSoalSesi/akhiriSesiBersama, evaluasiSesi); entri jawaban bersama: `k` = keyakinan, `kd` = kode kelompok, `sesi`; TIM_BAWAAN Nicky, Budi, Sari, Yoga, Tika, Hadi.
- v8.0.1 · QA · Latihan bersama selalu memakai halaman lebar agar 6 baris + soal pendek muat di 1366×768; hitung mundur tetap 2,5 menit/soal; halaman sesi tersimpan punya "Ulangi soal yang salah" (rute latih menerima `ids`); "Sesi terakhir" di atas kartu peserta.
- v8.1 · Data · Lapisan v8.1 di js/learn.js (`UKP.belajar`): tempo (`tempoUjian` B = 126 dtk, `TEMPO_LONGGAR` 150, `tempoBersama`/`aturTempoBersama`), triase murni (`triaseSoal` → kelas dikuasai/rapuh/terbelah/tersandung, saran penjelas, alasan dari `jebakanOpsi` + `mengapaSalah`; `urutanBahas`, `tandaiBahas`), `evaluasiSesi` + `mode`/`tempo`/`skor`/`triase`, `skorUjian` (lulus eksak ≥ 60, `kurang` k soal), `rekapSesi` (teks WhatsApp 4–10 baris), `ujianTim` (kode ujian `UT1.…` aman-URL ≤ 900 karakter; kode jawaban `UKPJ1.…`; `bacaJawaban`/`bacaBanyak` menerima ketikan `Budi: ABCD-a?c`; keadaan `s.ujianTim` dengan `susun/mulai/catat/ragu/kumpul/lepasKumpul/ringkas/nilai`), `lembarJawab`, `simpanBersamaAktif`/`bersamaAktif`. Store: `ujianTim`, `lembarJawab`, `bersamaAktif` (bentuk rusak → null).
- v8.1 · Rute · `#ujiantim` (halaman awal / runner satu layar / ruang ujian), `#ujiantim/<kode>` (Ikut ujian tim), `#lj` (lembar jawab pribadi); keduanya boleh dibuka pengunjung baru tanpa onboarding (`UKP.VIEW_TAMU`); "Mulai mengerjakan" menandai onboarding selesai dan mengambil tingkat dari kode. Tautan dibangun dari `location.origin + location.pathname` agar jalan di subjalur GitHub Pages.
- v8.1 · Latih · Papan mode ujian di `UKP.c.soal` (`bersama.mode: 'ujian'`: A B C D · Ragu · –, tanpa kunci/umpan/bar aksi; papan ketik 1–9, A–D, R, -); segmen Tempo di `UKP.c.aturBersama`; penunjuk laju `.laju-soal`; blok triase `.triase-bersama` setelah kunci; `UKP.c.kartuLanjutBersama()` (Beranda, Latih) untuk sesi terputus; pintu "Ujian tim" di lipatan Latihan bersama.
- v8.1 · Simulasi · Try Out mendapat segmen **Bagian** (Semua · 1–40 · 41–80 · 81–100; menit bawaan = n × tempo ujian, 40 soal = 84 menit); format percobaan `'tim'` (`UKP.simulasiTim`, rekaman membawa `tim: { ujianId, judul, nama }`); hasil anggota diawali kartu "Kirim jawaban ke pemimpin" (token, Salin kode, WhatsApp). Kartu "Ujian tim" (sakelar, peserta, Cara menjawab: Satu layar · Perangkat masing-masing, "40 soal · 84 mnt · 6 orang") menyembunyikan Mulai simulasi dan Tanpa batas waktu.
- v8.1 · Ujian tim · js/views-ujian-tim.js: runner satu layar (mode ujian tanpa sidebar, hitung mundur j:mm:ss, Daftar soal berstatus semua/sebagian/belum/ragu + ringkasan per orang, menu ⋮ Tempel lembar jawab · Tambah 5 menit · Batalkan ujian, dialog Waktu habis), ruang ujian (Salin undangan/tautan, WhatsApp, kode ujian, status kumpul per orang, Lepas, Kerjakan bagian saya, Tayangkan soal), dialog Kumpulkan jawaban, lembar jawab pribadi (baris "12 A B C D Ragu", tersimpan otomatis), `UKP.c.kartuUjianTim()`.
- v8.1 · Dasbor tim · `UKP.c.evaluasiBersama` mode ujian ("Hasil ujian tim": pita rata-rata/lulus/kosong/ragu, skor per orang dalam urutan peserta, tabel Per kelompok), bagian Tempo, saringan matriks (Semua · Ada yang salah · Terbelah · Tersandung; > 30 soal: 20 baris + Tampilkan semua), Urutan bahas + Mode bahas (dialog `mode-bahas`, ← → Enter Esc), Salin rekap untuk grup / Kirim rekap lewat WhatsApp, CSV ujian (baris skor, lulus, benar, salah, kosong, ragu); "Sesi terakhir" membedakan "Ujian tim · <judul>" dan "Latihan"; detail lokal berlabel "Ujian tim".
- v8.1.1 · QA · (a) Ruang ujian di HP: menu ⋮ sebaris dengan judul, ikon salin kode ujian mengikuti kode (blok CSS `v8.1 V2`). (b) Penjelas Try Out mengikuti Bagian ("soal 1–40 dari 100 … 84 menit"). (c) Teks "Sisa < 5 mnt" baru diisi pada 5 menit terakhir (runner ujian tim dan CAT), sebelumnya hanya disembunyikan. (d) `L.dokPeserta` membawa `m: 'ujian'` dari sumbernya. (e) js/tim.js: probe `api/saya` dilewati di *.github.io, *.netlify.app, *.pages.dev, *.vercel.app tanpa cookie `ukp_srv`, dan hasil "bukan server tim" diingat 30 hari (`ukp.tim.bukanServer`). (f) Dasbor tim di website tanpa server tidak lagi menyuruh membuka Artifact: bagian "Mengumpulkan hasil tim" (Ujian tim · Latihan bersama · Kode hasil).
- v8.2 · Room (fondasi) · js/ruang.js (`UKP.ruang`): room tetap per tim lewat layanan penghubung publik (broker MQTT lewat WebSocket, isi terenkripsi AES-GCM dari kode room 14 karakter). Jalur bawaan EMQX, shiftr.io publik (`url#nama:sandi`), test.mosquitto.org, HiveMQ; pemandu tersambung ke semua jalur, anggota memilih jalur tempat keadaan room terbaru berada (`pilihJalur`). API tambahan: `intip`, `tutup` (penanda "sudah ditutup" retained), `bukaLobi/tutupLobi`, `kirimSiap`, `kirimPaham`, `bukaKunci(… { penjelas, tim })`, `status().versiBeda`, `hadir()`, `ujiRelai()`, `terbitkanSesi/mintaSesi/riwayat/hapusSesi`, `mulaiUjian/tutupUjian/akhiriAktivitas`. Tanpa jaminan layanan; tidak tersedia di claude.ai, `file://`, atau server ber-CSP (semua akses dijaga `R.tersedia()`).
- v8.2 · Rute · `#room` dan `#room/<kode>` (`UKP.VIEW_TAMU = { ujiantim, lj, room }`): pengunjung baru membuka tautan, mengetuk nama, menyetujui catatan "Sebelum masuk" sekali, dan onboarding dianggap selesai (tingkat dari room). Layar room: gabung, lobi (kartu pembuka "Sesi ke-n · Hadir x dari 6", inisial, satu tombol utama), latihan anggota, ujian anggota ("Ujian tim dimulai" → CAT), rekap penutup, Riwayat room, menu ⋮ (Bagikan tautan, Cek sambungan "Jalur n", Jadikan perangkat ini pemandu, Keluar, Tutup room).
- v8.2 · Beranda · `UKP.c.kartuRoom()` sebagai blok Tim paling atas dengan tepat satu tombol utama (Buat room tim · Mulai latihan bersama · Masuk room · Ikut latihan/ujian · Buka ruang ujian; di luar website: Mulai latihan bersama satu layar + "Room online hanya tersedia di website tim."). Isi lama tetap di bawah judul "Latihan pribadi"; kartu ujian tim tidak diulang di dalam blok bila ujian itu sedang berjalan di room.
- v8.2 · Latih · Latihan bersama di room memakai papan v8.1 yang sama di laptop pemandu: baris terisi dari HP ("✓ sudah menjawab" tanpa huruf sebelum kunci), "isi untuk <nama>" bagi yang offline, hitung mundur 2 dtk + Tahan sebelum kunci otomatis, Lanjut/Enter ditahan 800 ms (T5), Menu kop menggantikan "Ke menu"/"Selesai sekarang" (T7), segmen Sendiri | Bersama di saringan (T3). Kalimat penjelas bernama tetap di laptop (K3); HP anggota hanya sebaran tanpa nama dan nama yang benar.
- v8.2 · Ujian tim · Ujian disiarkan ke room (`UKP.ujianTimUI.siarkan`); ruang ujian menampilkan "belum mulai → sedang mengerjakan · n/N terisi → sudah mengumpulkan · lewat room" tanpa huruf, tepat satu tombol primer, cadangan kode jawaban di lipatan "Pakai kode jawaban"; HP yang putus saat mengirim mendapat kartu kode jawaban v8.1. Nilai → `tutupUjian` + `terbitkanSesi` + `akhiriAktivitas`.
- v8.2 · Dasbor tim · Peringkat mati sebagai bawaan (sakelar "Tampilkan peringkat", `ukp.tim.peringkat`, hanya di laptop, tidak dikirim ke room; saat mati daftar abjad tanpa nomor). Kop skor tim `UKP.c.skorTim`. Versi anggota hasil (`versiAnggota`): "Skor Anda", "Rata-rata tim 62,5 · 2 dari 3 di atas 60", angka tim, soal untuk dibahas tanpa nama, rekap tim (terima kasih, bahas lagi); tanpa matriks, peringkat, CSV, nama orang lain; remah dan tombol kembali ke room. "Riwayat room" di Dasbor tim tanpa ganda dengan sesi lokal. Privasi sebatas tampilan.
- v8.2 · Tata letak · Mode fokus sesi di desktop (sidebar dan topbar disembunyikan, bar fokus 48 px di y = 0, satu kolom `--w-sesi: 960px` terpusat; T1, T2, T10), halaman biasa terpusat ≥ 1280, papan nama-tombol rapat dan zebra (T8), satu primer di Evaluasi (T9), sidebar rapat tanpa gulir sampai 1366×768 (T11), petunjuk papan ketik disembunyikan di layar sentuh (T12), kutipan panjang diringkas juga di desktop (T6). `UKP.c.fokusBar({ tengah, menu, labelMenu })`, `UKP.c.menuLebih({ teks })`. Grup **Tim** paling atas di sidebar dan lembar Lainnya. Belum: `.ujian-bar` Simulasi tetap ±77 px (T13).
