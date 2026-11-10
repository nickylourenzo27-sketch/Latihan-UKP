# DESAIN V6 — Profesional, tenang, interaktif

Spesifikasi implementasi untuk agen ui-css, ui-views, dan ui-alat.

| Butir | Isi |
|---|---|
| Status | Siap diimplementasikan · 29 Oktober 2026 |
| Menyempurnakan | `docs/SPESIFIKASI.md` §7 dan `docs/MAKSIMALISASI-2.md` bagian "Peningkatan visual". Identitas **"Buku Besar & Stempel"** tetap; V6 menaikkan kematangan, bukan mengganti arah. |
| Bukti | 71 tangkapan layar di `scratchpad/review/r3shot-final/` (desktop 1366, w1280, tablet 768, HP 390, HP 320; tema gelap di desktop/tablet, terang di HP). 30 tangkapan dibaca rinci (36 potongan gambar); temuan dicatat di §T. |
| Berkas sasaran | `css/app.css` (token, komponen, gerak) · `js/core.js` (`UKP.icon`, `UKP.c.kop`, toast, dialog, router) · `js/app.js` (shell) · `js/views-*.js`, `js/soal.js`, `js/learn.js`, `js/viz.js` (markup). Pemilik berkas mengikuti tabel di MAKSIMALISASI-2. |
| Prioritas | **P1** wajib putaran ini · **P2** sebaiknya · **P3** bila sempat. |
| Kompatibilitas | Nama kelas dan token lama dipertahankan sebagai alias (lampiran §K). Kelas baru berbahasa Indonesia, pendek, tanpa BEM. |

**Ringkasan perubahan (10 butir).**
1. Hierarki tiga tingkat yang tegas: kop halaman → satu kartu sorot → isi. Hanya satu tombol primer berisi per layar.
2. Elevasi sepenuhnya dari garis; token bayangan dimatikan.
3. Tata letak 12 kolom di ≥ 1024 px; halaman dasbor/data selebar 1200 px dengan panel kanan di ≥ 1280 px; halaman baca tetap 760 px.
4. Sakelar, segmen, tab, dan kotak centang dibangun ulang (tidak lagi kontrol bawaan peramban atau chip).
5. Tema gelap: isian primer diredam (`--primary-fill`), latar lembut dihitung ulang, tangga permukaan 4 tingkat.
6. Stempel kembali menjadi penanda pencapaian; metadata berulang memakai pill.
7. Satu aksen sekunder tenang (nila) untuk tahap tengah, seri grafik ke-2, dan label Tutor.
8. Mikro-interaksi 80–200 ms (tekan 1 px, chip bercentang, bar dan cincin terisi, hitung naik, umpan bergaris kiri dengan ikon tergambar), seluruhnya mati saat gerak dikurangi.
9. Ikon satu set: kanvas 24 px, garis 1,75 px, 17 ikon baru.
10. Keadaan kosong, kerangka memuat, tooltip, toast beraksi, dan dialog berkepala-kaki diseragamkan.

**Penyimpangan sadar dari §7** (V6 yang berlaku): panel umpan memakai garis **kiri** 3 px (bukan garis atas 2 px); transisi rute pudar 120 ms (bukan 260 ms); `--shadow-1/2` menjadi `none`; topbar 56 px (bukan 52); stempel tidak lagi dipakai untuk status per baris.

---

## T. Audit visual — kelemahan yang nyata di tangkapan layar

Nama berkas merujuk ke `r3shot-final/`. Kolom "Perbaikan" menunjuk bagian spek ini.

| ID | Kategori | Temuan | Bukti | Perbaikan |
|---|---|---|---|---|
| T01 | Hierarki | Semua kartu Hari Ini berbobot sama (garis 1 px, padding, eyebrow identik); hanya garis kiri Sesi yang membedakan. Mata tidak tahu harus mulai dari mana. | desktop-02, hp-02 | C.3, D.1 |
| T02 | Kepadatan | Kotak di dalam kotak: daftar langkah Sesi berbingkai sendiri di dalam kartu, hanya selebar separuh kartu; segmen Kilat/Standar/Penuh tidak sejajar dengan tombol penuh lebar. | desktop-02, tablet-02, hp-02 | C.3, C.5, D.1 |
| T03 | Tata letak | Di ≥ 1280 px konten 820 px rata kiri meninggalkan 250–500 px kosong; tidak ada panel ringkasan. CAT di 1366 menyisakan 230 px kosong di kanan. | desktop-02, -11, -12, -20, -21 | D.0 |
| T04 | Shell | Topbar desktop kosong di kiri (hanya tombol kembali); merek sidebar menempel ke tepi atas dan tidak sejajar garis bawah topbar. | semua desktop | C.1 |
| T05 | Tombol | Lima tombol md berbobot sama berbaris di kelompok (Latih 10 · Simulasi 40 · Dek kartu · Studi kasus · Lembar Angka); empat aksi di Lembar angka. | desktop-04, -16 | C.4, D.3, D.14 |
| T06 | Tipografi | Teks kontrol tidak konsisten: tombol/select mewarisi 17 px badan desktop, chip dan segmen 14 px. | desktop-06, -11, -19 | B.2, C.4, C.6 |
| T07 | Kontrol | "Switch" adalah checkbox bawaan: kotak abu gelap di tema gelap, kotak hijau bercentang saat aktif. | desktop-06, -11, -19, -20 | C.6 |
| T08 | Warna | Segmen terpilih berupa blok mint penuh di tema gelap: titik paling terang di layar, mengalahkan tombol primer. | desktop-06, -12, -19, -20 | C.5, G |
| T09 | Navigasi | Tab halaman dibuat dari chip (Kemajuan, Referensi, Ulang) sehingga tidak terbaca sebagai navigasi dan sama dengan filter. | desktop-07, -13, -17 | C.12 |
| T10 | Konsistensi | Stempel dipakai berulang per baris (DIKENAL di 11 baris topik, BERLAKU per UU) sehingga kehilangan makna "capaian". | desktop-04, -05, -17 | C.8 |
| T11 | Keadaan kosong | Cincin putus-putus "–" berulang (11 baris kelompok, 5 baris Hari Ini HP), padahal teks sebelahnya menulis "75% dari 4 soal". Kontradiktif dan bising. | desktop-04, hp-02 | C.14, D.1, D.3 |
| T12 | Hierarki | CTA "Lanjutkan: …" disisipkan di tengah daftar topik dan menggantikan baris 03 (judul topik 03 hilang). | desktop-04 | D.3 |
| T13 | Kepadatan | Lead/narasi tanpa batas: deskripsi kelompok 6 baris, narasi kasus 9 baris, warna muted 17 px. | desktop-04, -09 | C.2, D.3, D.8 |
| T14 | Tipografi | Prosa ringkasan topik ±100 karakter per baris di desktop (melebihi 68ch). | desktop-05 | D.4 |
| T15 | Tipografi | Mono berlebihan pada teks panjang: kolom Nilai lembar angka (4 baris mono tebal), judul UU di Referensi mono 20 px tebal, delta stat mono membungkus. | desktop-16, -17, -02 | B.2, D.14, D.15 |
| T16 | Chip | Tag sebab kesalahan membungkus menjadi dua baris di dalam bingkai ("salah / klasifikasi"). | desktop-06 | C.8 |
| T17 | Konsistensi | `sticky-actions` di dalam kartu memakai latar halaman: pita gelap memotong kartu filter Latih. | desktop-06 | C.4, D.5 |
| T18 | Data | Peta topik hasil: sel merah dengan teks merah mono rata tengah membungkus 4–5 baris; peta penguasaan didominasi sel putus-putus "–". | desktop-13, -23 | C.7, D.9, D.12 |
| T19 | Data | Bar per kelompok di Hasil: angka % jauh di kanan, tidak sebaris dengan bar; tiga baris per butir terlalu renggang. | desktop-23 | D.9 |
| T20 | Umpan | Panel umpan: blok tidak terpisah; tautan "Batalkan" yatim; meta mono campur bobot. | hp-04 | C.20, D.6 |
| T21 | Stepper | Langkah kasus terkunci tampil sebagai kartu penuh berbobot sama dengan langkah aktif; tidak ada simpul/garis stepper. | desktop-09 | C.9, D.8 |
| T22 | Tabel | Data kasus di panel 320 px membungkus angka ("16 Februari / 2026", "12 × / Rp2.500.000"). | desktop-09 | C.7, D.8 |
| T23 | Kartu | Kartu formulir tidak rata tinggi; meta dan pill tidak menempel di dasar; pill "perlu cek" lebih tinggi dari pill kode; glyph ◐ terpotong. | desktop-15 | C.3, C.8, D.13 |
| T24 | Tabel | "Jadikan kartu" 30 kali sebagai tautan hijau → kolom ramai; kepala kolom KARTU tidak sejajar. | desktop-16 | C.7, D.14 |
| T25 | Banner | "Rencana padat" di tema gelap: blok cokelat pekat selebar konten; di 320 px tombol bertumpuk dengan lebar tak seragam. | desktop-12, hp320-08 | C.18, G |
| T26 | Daftar | Tugas rencana: setiap tugas kotak bergaris + tautan "Buka" terlepas di luar kotak; label "MINGGU 1 · MINGGU INI" membungkus. | desktop-12 | D.11 |
| T27 | Fokus | Kartu flash berbingkai ganda + cincin fokus kuning tebal mengelilingi seluruh area; ruang kosong besar. | desktop-07 | D.7, H |
| T28 | Bahasa | Input tanggal tampil format AS "02/15/2026" (locale peramban). | desktop-11, -12, -19, hp320-08 | C.6 |
| T29 | Tata letak | Kalkulator: form satu kolom selebar 760 px untuk angka pendek; hasil di bawah lipatan; label "Uplift factor". | desktop-11 | D.10 |
| T30 | Tombol | Nonaktif = primer opasitas 50% → hijau pudar yang tampak rusak. | hp-onboarding-06, desktop-21 | C.4 |
| T31 | Segmen | Segmen membelah kata ("komprehens/if A") karena `overflow-wrap: anywhere`. | hp-06 | C.5 |
| T32 | Navigasi | Navigasi topik lengket di 320 px: tombol primer tampil tanpa label terbaca. | hp320-04 | D.4 |
| T33 | Dialog | Dialog kirim: tiga tombol membungkus tak beraturan, aksi bahaya di baris sendiri, tanpa ringkasan angka terstruktur. | desktop-22 | C.11, D.9 |
| T34 | Stat | Sparkline datar tanpa data tetap digambar; tinggi tile berbeda karena delta membungkus. | hp-02, tablet-02 | C.19 |
| T35 | Tautan | Tautan kop kartu "Kemajuan ›" bergaris bawah 17 px lebih menonjol dari judul kartu; "Peta materi ›" jatuh ke baris sendiri di HP. | desktop-02, hp-02 | C.3 |
| T36 | Kalender | Kartu Hadir bulanan: 31 kotak bergaris sama berat; hari kosong sama menonjol dengan HADIR. | hp-onboarding-08 | D.18 |
| T37 | Pilihan | Opsi onboarding terpilih hanya ditandai latar hijau tipis, tanpa indikator radio; judul opsi berbobot 400. | hp-onboarding-02 | D.18 |
| T38 | Navigasi | Halaman sangat panjang tanpa navigasi dalam halaman: Referensi 24.666 px, Info ujian 7.348 px. | desktop-17, -18 | D.15, D.16 |
| T39 | Data | Cincin bersegmen bergerigi (puluhan tik) di kelompok terlalu ramai untuk ukuran 100 px; legenda terpisah jauh. | desktop-04 | D.3 |
| T40 | Duplikasi | Kartu kelompok di Peta materi menampilkan cincin dan bar progres sekaligus untuk informasi serupa. | desktop-03 | D.2 |

---

## A. Prinsip

1. **Satu fokus per layar.** Setiap layar punya tepat satu titik masuk: kop halaman menjelaskan "di mana", satu kartu sorot menjawab "apa berikutnya", sisanya pendukung yang lebih tenang. Maksimal satu tombol primer berisi yang terlihat di satu layar (dialog dihitung layar tersendiri).
2. **Garis adalah struktur, warna adalah makna.** Permukaan dipisah oleh garis rambut dan tangga permukaan, bukan bayangan. Warna nada (ok/attn/warn/info/nila) hanya muncul bila membawa makna, dan selalu disertai teks atau ikon.
3. **Tenang dulu, responsif selalu.** Tampilan diam terlihat tenang; setiap sentuhan dijawab dalam ≤ 100 ms (perubahan warna/garis), gerak 120–200 ms hanya pada `transform`/`opacity` (pengecualian: lebar bar progres), dan tidak ada gerak yang berulang sendiri.
4. **Angka adalah warga kelas satu.** Angka memakai JetBrains Mono tabular, rata kanan di tabel, satuan lebih kecil dan redup; teks panjang tidak pernah mono.
5. **Konsistensi mengalahkan kreativitas.** Satu komponen satu rupa di semua halaman; nilai mentah dilarang di luar blok token; setiap komponen punya keadaan lengkap (diam, hover, fokus, tekan, nonaktif, memuat) sebelum dipakai.

---

## B. Token

### B.1 Spasi (kelipatan 4)

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--s-05` | 2 px | celah segmen, jarak teks–garis bawah |
| `--s-1` | 4 px | celah ikon–teks rapat, celah sel heatmap |
| `--s-2` | 8 px | celah antar-tombol, antar-chip (horizontal) |
| `--s-3` | 12 px | celah dalam kartu (`--jarak-blok`), antar-baris chip |
| `--s-4` | 16 px | padding kartu HP, gutter HP |
| `--s-5` | 20 px | padding kartu desktop, padding dialog |
| `--s-6` | 24 px | jarak antar-bagian HP, gutter tablet, celah kolom |
| `--s-8` | 32 px | jarak antar-bagian desktop, gutter desktop |
| `--s-10` / `--s-12` / `--s-16` | 40 / 48 / 64 px | ruang bawah halaman, keadaan kosong besar |

Token semantik: `--gutter` (16 → 24 di ≥ 600 → 32 di ≥ 1024), `--pad-kartu` (16 → 20 di ≥ 1024), `--jarak-blok` 12, `--jarak-bagian` (24 → 32 di ≥ 1024). Ritme vertikal: di dalam kartu selalu `--jarak-blok`; antar-kartu dalam satu bagian `--s-3`; antar-bagian `--jarak-bagian`. Tidak ada margin ad hoc (mis. `style="margin-top:16px"` di JS — ganti dengan kelas `.stack`).

### B.2 Tipografi

| Peran | Token | Ukuran HP / ≥ 1024 | Bobot | Tinggi baris | Spasi huruf | Keluarga | Pakai untuk |
|---|---|---|---|---|---|---|---|
| display | `--fs-display` | 32 / 40 px (`clamp(2rem, 1.25rem + 2.5vw, 2.5rem)`) | 700 (gelap 600) | 1.1 | −0,02 em | mono | skor, timer, total Bukti Sesi, angka hari ini |
| h1 | `--fs-h1` | 24 / 28 px | 600 | 1.2 | −0,015 em | sans | judul halaman (satu per rute) |
| h2 | `--fs-h2` | 20 px | 600 | 1.3 | −0,01 em | sans | judul bagian, judul dialog |
| h3 | `--fs-h3` | 17 px | 600 | 1.4 | −0,005 em | sans | judul kartu, judul langkah |
| body | `--fs-body` | 16 / 17 px | 400 | 1.6 | 0 | sans | stem soal, ringkasan, prosa (maks 68ch) |
| ui | `--fs-ui` | 15 px | 500/600 | 1.25 | 0 | sans | label tombol md, tab, item navigasi |
| small | `--fs-small` | 14 px | 400/500 | 1.5 | 0 | sans | meta, teks bantu, sel tabel, chip |
| caption | `--fs-caption` | 13 px | 400 | 1.45 | 0 | sans | keterangan grafik, catatan kaki |
| eyebrow | `--fs-eyebrow` | 12 px | 500 (600 bila berwarna) | 1.3 | 0,08 em, kapital | mono | label kop, kepala tabel, label stat |
| mono-data | mewarisi | sesuai konteks | 500 | sesuai | 0 | mono tabular | angka, kode taksonomi, pasal pendek |
| micro | `--fs-micro` | 11 px | 600/700 | 1.2 | 0,06–0,08 em | mono/sans | stempel, label bar bawah (tidak untuk teks lain) |

Aturan: input selalu 16 px (mencegah zoom iOS). Mono hanya untuk angka, kode (A1.2, K-A1-01, 1770.induk.1), pasal singkat, timer, eyebrow; **tidak** untuk kalimat > 6 kata, judul, atau nilai bertipe teks di Lembar angka. Delta stat ditulis sans 13 px. Maksimal tiga ukuran huruf dalam satu kartu.

### B.3 Radius

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--r-xs` | 3 px | chip, kbd, sel heatmap, tooltip |
| `--r-sm` | 6 px | tombol, input, segmen, banner, akordeon |
| `--r-md` | 8 px | kartu, tabel berbingkai, panel umpan |
| `--r-lg` | 12 px | dialog, lembar bawah |
| `--r-pill` | 999 px | pill status, sakelar, bar progres |
| `--r-stempel` | 4 px | stempel |

### B.4 Garis

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--garis` | 1 px solid `--line` | batas kartu, pemisah bagian |
| `--garis-halus` | 1 px solid `--line-subtle` | pemisah baris di dalam kartu, kaki kartu, zebra tabel |
| `--garis-kuat` | 1 px solid `--line-strong` | batas kontrol (input, chip, segmen), kepala tabel, hover kartu |
| `--penanda` | 3 px | garis kiri penanda: tingkat, kartu sorot, umpan, banner, tugas |
| `--garis-kop` | 4 px double `--primary` | kop bagian `.sect` |
| `--garis-total` | 3 px double `--line-strong` | baris total, akhir lembar/kuitansi |
| tepi tekan | 2 px `--btn-edge` / `--primary-edge` | sisi bawah tombol |

### B.5 Elevasi berbasis garis

| Tingkat | Nama | Rupa | Contoh |
|---|---|---|---|
| 0 | datar | `--bg`, tanpa garis | latar halaman, isi halaman baca |
| 1 | permukaan | `--surface` + `--garis` | kartu, tabel, akordeon |
| 2 | interaktif | `--surface-3` + `--garis-kuat` (hover) | kartu klik saat hover, baris hover |
| 3 | sorot | tingkat 1 + garis kiri `--penanda` warna primer/tingkat | Sesi hari ini, kartu hasil, langkah aktif |
| 4 | melayang | `--surface` + `--garis-kuat` + `--scrim` di belakangnya; atau warna terbalik (`--toast-bg`) | dialog, lembar bawah, palet cari, toast, tooltip |

Tidak ada `box-shadow` berblur di mana pun. `box-shadow` hanya boleh dipakai sebagai **garis** (blur 0, mis. `inset 0 -2px 0` penanda segmen, `0 0 0 3px` halo simpul stepper).

### B.6 Warna

Token lama tetap; yang baru ditandai **baru**; yang berubah ditandai **ubah**. Kontras dihitung WCAG 2.x.

| Token | Terang | Gelap | Pakai untuk | Kontras kunci |
|---|---|---|---|---|
| `--bg` | `#F3F5F4` | `#0F1512` | latar halaman | — |
| `--surface` | `#FFFFFF` | `#161D19` | kartu, input, dialog | — |
| `--surface-2` | `#E8EDEA` | `#1E2622` | trek segmen/progres, kepala tabel, hover tombol ikon | — |
| `--surface-3` **baru** | `#F7F9F8` | `#26302B` | hover kartu/baris/tombol; segmen terpilih (gelap) | muted 5,88 / 5,78 |
| `--zebra` **baru** | `#F6F8F7` | `#1A221E` | baris genap tabel | ink-faint 4,65 / 4,94 |
| `--ink` / `--muted` / `--ink-faint` | `#15201B` / `#56645E` / `#66736D` | `#E7ECE9` / `#9EACA5` / `#83918A` | teks / meta / placeholder | ink-faint di surface-2 terang 4,18: **jangan** dipakai untuk teks di atas `--surface-2` terang |
| `--line` / `--line-subtle` **baru** / `--line-strong` | `#D3DAD6` / `#E3E8E5` / `#748079` | `#2A3530` / `#222B27` / `#66786F` | struktur / pemisah dalam kartu / batas kontrol | line-strong vs surface 4,11 / 3,66 |
| `--primary` | `#0E5A47` | `#7ED3B4` | teks tautan, ikon aktif, garis penanda, penanda segmen | vs bg 7,46 / — |
| `--primary-soft` / `--primary-strong` | `#DDEFE8` / `#0A4536` | `#16302A` / `#A4E3CC` | latar terpilih / teks di atas latar terpilih | 9,17 / 9,69 |
| `--primary-fill` **baru** | `#0E5A47` | `#5FBF9C` | isian tombol primer, sakelar aktif, bar progres, cincin | teks `--primary-ink` 8,16 / 8,29 |
| `--primary-fill-hover` **baru** | `#0A4536` | `#7ED3B4` | hover tombol primer | 10,44 (gelap) |
| `--primary-fill-press` **baru** | `#083A2D` | `#4FAE8B` | tekan tombol primer | 12,70 / 6,83 |
| `--accent-2` **baru** (nila) | `#3B4D9C` | `#A3AEEB` | aksen sekunder tenang: tahap "dikenal", label Tutor AI, seri grafik ke-2, tautan sekunder "Lihat di peta formulir" | vs surface 7,70 / 8,02 |
| `--accent-2-soft` **baru** | `#E6E9F6` | `#1F2540` | latar pill nila | teks nila 6,36 / 7,02 |
| `--ok` / `--ok-soft` | `#1B7A52` / `#DDF2E6` | `#6CC69A` / `#172A20` **ubah** | Benar, DIKUASAI, HADIR | 4,53 / 7,33 |
| `--attn` / `--attn-soft` | `#B3261E` / `#FBE7E5` | `#FF8A80` / `#2E1D1C` **ubah** | Kurang tepat, < 60, hapus | 5,50 / 7,03 |
| `--warn` / `--warn-soft` | `#8A5A00` / `#FFF1CC` | `#E8B84A` / `#2A2614` **ubah** | perlu verifikasi, PERKIRAAN, padat | 5,28 / 8,22 |
| `--info` / `--info-soft` | `#1F4E79` / `#E3EDF7` | `#8FB8EA` / `#1A2838` | banner versi/offline, IZIN, CUTI | 7,31 / 7,27 |
| `--highlight` | `#F5C542` | `#E8B84A` | stabilo angka kunci (hemat) | — |
| `--seg-pilih` **baru** | `#FFFFFF` | `#26302B` | latar segmen terpilih (terangkat dari trek) | — |
| `--toast-bg` / `--toast-ink` / `--toast-aksi` **baru** | `#15201B` / `#F3F5F4` / `#7ED3B4` | `#E7ECE9` / `#0F1512` / `#0E5A47` | toast, tooltip (warna terbalik) | 15,29 / 9,46 (aksi) ; 6,83 (aksi gelap) |
| `--kerangka` **baru** | `#E8EDEA` | `#2A3530` | blok kerangka memuat (dekoratif) | — |
| `--focus` | `#0E5A47` | `#F5C542` | cincin fokus | vs bg 7,46 / 11,39 |
| `--shadow-1` / `--shadow-2` **ubah** | `none` | `none` | dipertahankan agar aturan lama tidak rusak | — |

Tingkat (`--tingkat-a/b/c`, `--tint-a/b/c`), `--flag`, `--viz-*`, `--btn-edge`, `--primary-edge`, `--scrim` tidak berubah. Seri grafik ke-2 (`--viz-2`) satu keluarga dengan `--accent-2`.

### B.7 Gerak

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--dur-instan` | 80 ms | tekan tombol/chip/kartu (turun 1 px) |
| `--dur-cepat` | 120 ms | hover warna/garis, pudar antar-rute, toast keluar, tooltip |
| `--dur-sedang` | 160 ms | chip terpilih, tab, akordeon, sakelar, kartu soal masuk, dialog |
| `--dur-lambat` | 200 ms | panel umpan, lembar bawah, toast masuk, ikon tergambar |
| `--dur-angka` | 400 ms | hitung naik, cincin, bar progres |
| `--dur-flip` / `--dur-stempel` | 300 / 420 ms | balik kartu, stempel diraih (tetap dari §7) |
| `--ease-keluar` | `cubic-bezier(.2, .8, .2, 1)` | elemen masuk/berhenti (bawaan) |
| `--ease-standar` | `cubic-bezier(.4, 0, .2, 1)` | perubahan warna/latar |
| `--ease-masuk` | `cubic-bezier(.4, 0, 1, 1)` | elemen keluar |

### B.8 Lapisan (z-index)

| Token | Nilai | Elemen |
|---|---|---|
| `--z-naik` | 1 | sel fokus di grid, kepala tabel lengket di wadahnya |
| `--z-lengket` | 5 | `.sticky-actions`, ringkasan `details` lengket |
| `--z-bar` | 8 | `.sesi-bar`, `.ujian-bar` |
| `--z-nav` | 9 | topbar, bar bawah, sidebar |
| `--z-aman` | 10 | pengisi safe-area (`body::before`) |
| `--z-laci` | 30 | drawer Tutor non-modal |
| `--z-dialog` | 50 | `dialog` (modal top-layer tetap di atas; token untuk non-top-layer) |
| `--z-toast` | 60 | toast |
| `--z-tip` | 70 | tooltip |
| `--z-skip` | 100 | tautan lewati |

### B.9 Tata letak

| Token | Nilai | Catatan |
|---|---|---|
| Titik henti | 360 · 600 · 1024 · 1280 · 1440 | < 600 bar bawah; 600–1023 rail 84 px; ≥ 1024 sidebar 256 px |
| `--w-sidebar` / `--w-rail` | 256 / 84 px | |
| `--w-baca` | 760 px | halaman baca: topik, soal, kartu, onboarding, latih |
| `--w-lebar` | 1200 px | dasbor/data: Hari Ini, Peta materi, Kemajuan, Rencana, Kalkulator, Hasil, Formulir, Lembar, Referensi, Info, Pengaturan |
| `--w-panel` | 320 px | panel kanan ≥ 1280 px (data kasus, daftar isi) |
| `--topbar-h` / `--nav-h` | 56 / 56 px | |
| `--kolom-gap` | 24 px | celah kolom grid 12 |

### B.10 CSS token (blok pengganti di awal `css/app.css`)

```css
/* ==== V6 · TOKEN — ganti blok :root + @media gelap + [data-theme="dark"] di awal css/app.css ==== */
:root {
  /* spasi — kelipatan 4 */
  --s-0: 0; --s-05: 2px; --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 20px;
  --s-6: 24px; --s-8: 32px; --s-10: 40px; --s-12: 48px; --s-16: 64px;
  --gutter: 16px; --pad-kartu: 16px; --jarak-blok: 12px; --jarak-bagian: 24px;

  /* tipografi */
  --font-ui: "Public Sans", system-ui, "Segoe UI", Roboto, Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Consolas, monospace;
  --fs-display: clamp(2rem, 1.25rem + 2.5vw, 2.5rem); --lh-display: 1.1; --ls-display: -0.02em;
  --fs-h1: 1.5rem;        --lh-h1: 1.2;       --ls-h1: -0.015em;
  --fs-h2: 1.25rem;       --lh-h2: 1.3;       --ls-h2: -0.01em;
  --fs-h3: 1.0625rem;     --lh-h3: 1.4;       --ls-h3: -0.005em;
  --fs-body: 1rem;        --lh-body: 1.6;
  --fs-ui: .9375rem;      --lh-ui: 1.25;
  --fs-small: .875rem;    --lh-small: 1.5;
  --fs-caption: .8125rem; --lh-caption: 1.45;
  --fs-eyebrow: .75rem;   --lh-eyebrow: 1.3;  --ls-eyebrow: .08em;
  --fs-micro: .6875rem;
  --fw-reg: 400; --fw-med: 500; --fw-semi: 600; --fw-bold: 700; --fw-display: 700;
  /* alias lama */
  --fs-12: .75rem; --fs-13: .8125rem; --fs-14: .875rem; --fs-16: 1rem; --fs-17: 1.0625rem;
  --fs-18: 1.125rem; --fs-20: 1.25rem; --fs-24: 1.5rem; --fs-30: 1.875rem; --fs-40: 2.5rem;

  /* radius */
  --r-xs: 3px; --r-sm: 6px; --r-md: 8px; --r-lg: 12px; --r-pill: 999px; --r-stempel: 4px;
  --r-chip: var(--r-xs); --r-btn: var(--r-sm); --r-card: var(--r-md); --r-sheet: var(--r-lg);

  /* garis */
  --garis: 1px solid var(--line);
  --garis-halus: 1px solid var(--line-subtle);
  --garis-kuat: 1px solid var(--line-strong);
  --garis-kop: 4px double var(--primary);
  --garis-total: 3px double var(--line-strong);
  --penanda: 3px;

  /* elevasi: tanpa bayangan */
  --shadow-1: none; --shadow-2: none;

  /* gerak */
  --dur-instan: 80ms; --dur-cepat: 120ms; --dur-sedang: 160ms; --dur-lambat: 200ms;
  --dur-angka: 400ms; --dur-flip: 300ms; --dur-stempel: 420ms;
  --ease-keluar: cubic-bezier(.2, .8, .2, 1);
  --ease-standar: cubic-bezier(.4, 0, .2, 1);
  --ease-masuk: cubic-bezier(.4, 0, 1, 1);
  --ease: var(--ease-keluar); --t-fast: var(--dur-instan); --t-hover: var(--dur-cepat);
  --t-panel: var(--dur-lambat); --t-flip: var(--dur-flip);

  /* lapisan */
  --z-naik: 1; --z-lengket: 5; --z-bar: 8; --z-nav: 9; --z-aman: 10;
  --z-laci: 30; --z-dialog: 50; --z-toast: 60; --z-tip: 70; --z-skip: 100;

  /* tata letak */
  --w-sidebar: 256px; --w-rail: 84px; --w-baca: 760px; --w-lebar: 1200px; --w-panel: 320px;
  --topbar-h: 56px; --nav-h: 56px; --kolom-gap: 24px;

  /* ikon mask (warna dari background: currentColor) */
  --ikon-cek: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E");
  --ikon-chevron-kanan: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 6l6 6-6 6'/%3E%3C/svg%3E");
  --ikon-kosong: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 13.5h4.5l1.5 2.5h6l1.5-2.5H21'/%3E%3Cpath d='M5.2 5.6 3 13.5V19a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 19v-5.5l-2.2-7.9a1.5 1.5 0 0 0-1.4-1.1H6.6a1.5 1.5 0 0 0-1.4 1.1z'/%3E%3Cpath d='M9 8.5h6M10 11h4'/%3E%3C/svg%3E");

  /* warna — terang */
  --bg: #F3F5F4; --surface: #FFFFFF; --surface-2: #E8EDEA; --surface-3: #F7F9F8; --zebra: #F6F8F7;
  --ink: #15201B; --muted: #56645E; --ink-faint: #66736D;
  --line: #D3DAD6; --line-subtle: #E3E8E5; --line-strong: #748079;
  --primary: #0E5A47; --primary-ink: #FFFFFF; --primary-soft: #DDEFE8; --primary-strong: #0A4536;
  --primary-fill: #0E5A47; --primary-fill-hover: #0A4536; --primary-fill-press: #083A2D;
  --accent-2: #3B4D9C; --accent-2-soft: #E6E9F6;
  --highlight: #F5C542; --highlight-ink: #15201B;
  --ok: #1B7A52; --ok-soft: #DDF2E6;
  --attn: #B3261E; --attn-soft: #FBE7E5; --attn-ink: #FFFFFF;
  --warn: #8A5A00; --warn-soft: #FFF1CC;
  --info: #1F4E79; --info-soft: #E3EDF7;
  --flag: #8A4B08;
  --tingkat-a: #0E5A47; --tingkat-b: #1F4E79; --tingkat-c: #7A2E3B;
  --tint-a: #E1EFE9; --tint-b: #E3EDF7; --tint-c: #F6E6E9;
  --seg-pilih: #FFFFFF; --kerangka: #E8EDEA;
  --toast-bg: #15201B; --toast-ink: #F3F5F4; --toast-aksi: #7ED3B4;
  --focus: #0E5A47; --scrim: rgba(21, 32, 27, .45);
  --btn-edge: #4C5751; --primary-edge: #062E24;
  --viz-grid: #E3E8E5; --viz-sumbu: #9AA8A1; --viz-1: #13795A; --viz-2: #4C6FD0; --viz-redam: #86928C;
  --ikon-select: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2356645E' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  color-scheme: light;
}
@media (min-width: 600px) { :root { --gutter: 24px; } }
@media (min-width: 1024px) {
  :root { --gutter: 32px; --pad-kartu: 20px; --jarak-bagian: 32px; --fs-h1: 1.75rem; --fs-body: 1.0625rem; }
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0F1512; --surface: #161D19; --surface-2: #1E2622; --surface-3: #26302B; --zebra: #1A221E;
    --ink: #E7ECE9; --muted: #9EACA5; --ink-faint: #83918A;
    --line: #2A3530; --line-subtle: #222B27; --line-strong: #66786F;
    --primary: #7ED3B4; --primary-ink: #0F1512; --primary-soft: #16302A; --primary-strong: #A4E3CC;
    --primary-fill: #5FBF9C; --primary-fill-hover: #7ED3B4; --primary-fill-press: #4FAE8B;
    --accent-2: #A3AEEB; --accent-2-soft: #1F2540;
    --highlight: #E8B84A; --highlight-ink: #0F1512;
    --ok: #6CC69A; --ok-soft: #172A20;
    --attn: #FF8A80; --attn-soft: #2E1D1C; --attn-ink: #0F1512;
    --warn: #E8B84A; --warn-soft: #2A2614;
    --info: #8FB8EA; --info-soft: #1A2838;
    --flag: #F0A868;
    --tingkat-a: #7ED3B4; --tingkat-b: #8FB8EA; --tingkat-c: #D98A98;
    --tint-a: #15302A; --tint-b: #1A2838; --tint-c: #36202A;
    --seg-pilih: #26302B; --kerangka: #2A3530;
    --toast-bg: #E7ECE9; --toast-ink: #0F1512; --toast-aksi: #0E5A47;
    --focus: #F5C542; --scrim: rgba(0, 0, 0, .6);
    --btn-edge: #3A4741; --primary-edge: #3E8C71;
    --viz-grid: #252F2A; --viz-sumbu: #4A5A52; --viz-1: #3DA982; --viz-2: #8C84E8; --viz-redam: #66756E;
    --ikon-select: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239EACA5' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    --fw-display: 600;
    color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --bg: #0F1512; --surface: #161D19; --surface-2: #1E2622; --surface-3: #26302B; --zebra: #1A221E;
  --ink: #E7ECE9; --muted: #9EACA5; --ink-faint: #83918A;
  --line: #2A3530; --line-subtle: #222B27; --line-strong: #66786F;
  --primary: #7ED3B4; --primary-ink: #0F1512; --primary-soft: #16302A; --primary-strong: #A4E3CC;
  --primary-fill: #5FBF9C; --primary-fill-hover: #7ED3B4; --primary-fill-press: #4FAE8B;
  --accent-2: #A3AEEB; --accent-2-soft: #1F2540;
  --highlight: #E8B84A; --highlight-ink: #0F1512;
  --ok: #6CC69A; --ok-soft: #172A20;
  --attn: #FF8A80; --attn-soft: #2E1D1C; --attn-ink: #0F1512;
  --warn: #E8B84A; --warn-soft: #2A2614;
  --info: #8FB8EA; --info-soft: #1A2838;
  --flag: #F0A868;
  --tingkat-a: #7ED3B4; --tingkat-b: #8FB8EA; --tingkat-c: #D98A98;
  --tint-a: #15302A; --tint-b: #1A2838; --tint-c: #36202A;
  --seg-pilih: #26302B; --kerangka: #2A3530;
  --toast-bg: #E7ECE9; --toast-ink: #0F1512; --toast-aksi: #0E5A47;
  --focus: #F5C542; --scrim: rgba(0, 0, 0, .6);
  --btn-edge: #3A4741; --primary-edge: #3E8C71;
  --viz-grid: #252F2A; --viz-sumbu: #4A5A52; --viz-1: #3DA982; --viz-2: #8C84E8; --viz-redam: #66756E;
  --ikon-select: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239EACA5' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  --fw-display: 600;
  color-scheme: dark;
}
/* dasar yang memakai token baru */
body { font-size: var(--fs-body); line-height: var(--lh-body); }
h1 { font-size: var(--fs-h1); line-height: var(--lh-h1); letter-spacing: var(--ls-h1); font-weight: var(--fw-semi); }
h2 { font-size: var(--fs-h2); line-height: var(--lh-h2); letter-spacing: var(--ls-h2); font-weight: var(--fw-semi); }
h3 { font-size: var(--fs-h3); line-height: var(--lh-h3); letter-spacing: var(--ls-h3); font-weight: var(--fw-semi); }
.eyebrow { font-family: var(--font-mono); font-size: var(--fs-eyebrow); line-height: var(--lh-eyebrow); letter-spacing: var(--ls-eyebrow); text-transform: uppercase; font-weight: var(--fw-med); color: var(--muted); }
.angka-besar, .hasil-utama .nilai.besar { font-family: var(--font-mono); font-size: var(--fs-display); line-height: var(--lh-display); letter-spacing: var(--ls-display); font-weight: var(--fw-display); font-variant-numeric: tabular-nums; }
::selection { background: var(--primary-soft); color: var(--ink); }
html { scrollbar-color: var(--line-strong) transparent; }
```

---

## C. Komponen

### C.0 Aturan umum

- **Matriks keadaan wajib.** Setiap komponen interaktif mendefinisikan: diam, hover (pointer halus saja: bungkus dengan `@media (hover: hover)` bila hover mengubah tata letak), fokus (`:focus-visible`), tekan (`:active`), terpilih (bila ada), nonaktif (`:disabled` dan `[aria-disabled="true"]`), memuat (`[aria-busy="true"]`), galat (bila ada).
- **Area sentuh ≥ 44 × 44 px.** Bila ukuran visual lebih kecil (chip 32, tombol sm 36, tombol ikon sm 36), perluas lewat `::after { content:""; position:absolute; inset:… }` pada elemen `position: relative`. Jarak antar-target ≥ 8 px horizontal, ≥ 12 px vertikal agar area perluasan tidak bertumpuk.
- **Nonaktif tidak memakai opasitas.** Latar `--surface-2`, teks `--muted`, garis `--line`, kursor `not-allowed`, tanpa tepi tekan.
- **Fokus:** `outline: 2px solid var(--focus); outline-offset: 2px`. Di dalam wadah yang memotong (segmen, tab, baris tabel, summary), pakai `outline-offset: -2px`.
- **Tidak ada kotak di dalam kotak.** Isi kartu dipisah dengan `--garis-halus`, bukan bingkai bersarang. Pengecualian: input, tabel ber-wadah gulir, kutipan peraturan.
- **Ikon** dari §F, `aria-hidden="true"`, warna `currentColor`.

### C.1 App shell

**Anatomi (≥ 1024 px).**

```
┌─ sidebar 256 ─────────┬─ topbar 56 ────────────────────────────────────────────────┐
│ [UKP] Pelatih UKP     │ ‹  Belajar › A1          [Cari materi, soal, pasal…  Ctrl K] │
├───────────────────────┤                             [UKP A · 47 hari] [Tutor]       │
│ HARIAN                ├──────────────────────────────────────────────────────────────┤
│ ▌⌂ Hari Ini           │                                                              │
│  ▢ Rencana        3   │   main (padding 32; .page 760 atau .page.lebar 1200)         │
│  ▥ Kemajuan           │                                                              │
│ MATERI                │                                                              │
│  ▢ Belajar A/B/C      │                                                              │
│  ✎ Latih soal         │                                                              │
│  ⟲ Ulang kartu   12   │                                                              │
│ …                     │                                                              │
│───────────────────────│                                                              │
│ ◎ Pengaturan  [tema]  │                                                              │
│ Bukan nasihat pajak…  │                                                              │
└───────────────────────┴──────────────────────────────────────────────────────────────┘
```

**Sidebar (≥ 1024 px, 256 px).**
- Area merek setinggi 56 px dengan `border-bottom: var(--garis)` yang **segaris** dengan garis bawah topbar (garis buku besar menerus). Tanda "UKP" 26 px + "Pelatih UKP" 16 px/700.
- Grup: label `.group-label` eyebrow 11 px, `padding: 0 12px`, jarak atas grup 20 px, jarak label ke item 4 px. Grup dipisah ruang, bukan garis (garis hanya di atas kaki).
- Item: tinggi 40 px (pointer kasar 44 px via `@media (pointer: coarse)`), padding `0 12px`, ikon 20 px `--muted`, label 15 px/500 `--ink`, radius 6, celah 2 px. Lencana hitungan opsional di kanan (`.badge` pill mono 12, latar `--surface-2`; nada attn hanya untuk "jatuh tempo").
- Hover: latar `--surface-2`, ikon `--ink` (120 ms). Tekan: latar `--surface-3` gelap/`--line-subtle` terang.
- **Aktif (bergaris):** `aria-current="page"`; latar `--primary-soft`; label 600 `--ink`; ikon `--primary`; garis 3 px `--primary` di tepi kiri **di dalam** item (`::before`, inset atas-bawah 8 px, radius 2). Tidak memakai `border-left` (tidak menggeser teks).
- Fokus: outline 2 px offset −2 px.
- Kaki: garis atas, `Pengaturan` + tombol ikon tema (sun/bulan, `aria-pressed`), kalimat penafian 12 px `--muted`.
- Sidebar mengisi tinggi penuh: `position: sticky; top: 0; height: 100dvh; overflow: auto`.

**Rail (600–1023 px, 84 px).** Item 56 px, ikon 24 di atas label 11 px/500 (dua baris maks, `text-wrap: balance`, tanpa `hyphens: auto`). Aktif: latar `--primary-soft` + garis 3 px kiri yang sama. Merek: tanda "UKP" 30 px setinggi 56 px.

**Topbar (semua lebar, 56 px).** Latar `--bg` padat (tanpa kaca buram), `border-bottom: var(--garis)`.
- Kiri: tombol ikon `back` (hanya pada rute anak) + `.judul-ringkas`: crumb mono 12 px saat di puncak halaman; berganti judul halaman 15 px/600 saat `h1` keluar layar (IntersectionObserver, pudar 120 ms) (P2).
- Kanan (≥ 1024): `.cari-pemicu` — tombol berupa kolom semu 240 × 36 px, ikon `search`, teks "Cari materi, soal, pasal…" `--muted`, `kbd` "Ctrl K" (Mac "⌘ K"). < 1024: tombol ikon `search`.
- Chip tingkat ringkas "UKP A · 47 hari": tinggi 32, garis kiri 3 px warna tingkat, mono 13/600, latar `--tk-soft` (bukan blok penuh). Klik membuka pemilih tingkat.
- Tombol ikon Tutor (`chat`), 44 px.
- HP < 420 px: merek hanya tanda "UKP"; < 360 px: chip hari disembunyikan (aturan lama tetap).

**Bar bawah (< 600 px).** Tinggi 56 + safe-area, latar `--surface`, `border-top: var(--garis)`. Lima item (Hari Ini · Belajar · Latih · Ulang · Lainnya), ikon 24 px, label 11 px/500. Aktif: ikon dan label `--primary`, label 600, garis 2 px `--primary` selebar 24 px di tepi atas tengah item. Tekan: latar `--surface-2` (80 ms). Lencana: pill mono 10 px attn di kanan atas ikon.

**Kelas:** `.shell`, `.sidebar`, `.sidebar .brand`, `.group`, `.group-label`, `.sidebar a[aria-current="page"]`, `.badge`, `.foot`, `.topbar`, `.judul-ringkas`, `.cari-pemicu`, `.chip-tingkat`, `.icon-btn`, `.bottomnav`.

```css
/* sidebar ≥ 1024 — penanda aktif bergaris di dalam item */
@media (min-width: 1024px) {
  .sidebar { padding: 0 var(--s-3) var(--s-4); gap: var(--s-5); }
  .sidebar .brand { min-height: var(--topbar-h); margin: 0 calc(var(--s-3) * -1); padding: 0 var(--s-4); border-bottom: var(--garis); }
  .sidebar a { position: relative; min-height: 40px; padding: 0 var(--s-3); gap: var(--s-3); border-left: 0; font-size: var(--fs-ui); font-weight: var(--fw-med); transition: background-color var(--dur-cepat) var(--ease-standar), color var(--dur-cepat) var(--ease-standar); }
  .sidebar svg { width: 20px; height: 20px; }
  .sidebar a:hover { background: var(--surface-2); }
  .sidebar a:hover svg { color: var(--ink); }
  .sidebar a[aria-current="page"] { background: var(--primary-soft); font-weight: var(--fw-semi); }
  .sidebar a[aria-current="page"]::before { content: ""; position: absolute; left: 0; top: 8px; bottom: 8px; width: var(--penanda); border-radius: 2px; background: var(--primary); }
  .sidebar a:focus-visible { outline: 2px solid var(--focus); outline-offset: -2px; }
  .sidebar .badge { margin-left: auto; min-width: 22px; padding: 0 6px; border-radius: var(--r-pill); background: var(--surface-2); color: var(--muted); font: var(--fw-semi) var(--fs-eyebrow)/20px var(--font-mono); text-align: center; }
}
@media (min-width: 1024px) and (pointer: coarse) { .sidebar a { min-height: 44px; } }
.topbar { min-height: var(--topbar-h); }
.bottomnav [aria-current="page"]::before { left: calc(50% - 12px); right: auto; width: 24px; }
.bottomnav svg { width: 24px; height: 24px; }
```

### C.2 Kop halaman

**Anatomi:** crumb (opsional, mono 12) → eyebrow (opsional, konteks/kode) → `h1` → deskripsi `.lead` (≤ 2 kalimat, maks 64ch) → baris meta `.page-meta` (pill, chip, angka) → aksi `.page-actions` (maks 1 primer + 1 sekunder + 1 hantu/menu). Di ≥ 1024 aksi berada di kanan, rata bawah dengan teks; di HP aksi turun ke bawah teks.

**Varian:** `baca` (tanpa aksi, untuk topik/soal), `dasbor` (dengan aksi), `ringkas` (lead dipotong 3 baris + tombol "Selengkapnya" `aria-expanded`).

**Keadaan:** fokus programatik pada `h1[tabindex="-1"]` tanpa cincin; tautan crumb hover garis bawah.

**Kontrak markup** (`UKP.c.kop({ crumbs, eyebrow, judul, lead, meta, aksi, ringkas })` di `js/core.js`):

```html
<header class="page-head">
  <div class="page-head-teks">
    <nav class="crumb" aria-label="Remah roti"><a href="#tingkat">Belajar</a><span aria-hidden="true">›</span><span>A1</span></nav>
    <p class="eyebrow">A1 · Diuji di A · B · C</p>
    <h1 tabindex="-1">PPh Orang Pribadi dan SPT PPh OP</h1>
    <p class="lead ringkas" id="lead-1">…</p>
    <div class="page-meta"><span class="pill">11 topik</span><span class="pill">103 soal</span></div>
  </div>
  <div class="page-actions"><button class="btn btn-primary">Latih 10 soal</button><button class="btn">Simulasi 40</button></div>
</header>
```

CSS lengkap di C.23.

### C.3 Kartu

**Anatomi:** `.card-head` (eyebrow atau `.card-title` di kiri; `.tautan-kop` atau tombol ikon di kanan, sebaris baseline) → isi → `.card-foot` opsional (meta kiri, aksi kanan, garis halus di atas, menempel ke dasar).

**Varian:**
- **default** `.card` — tingkat 1.
- **sorot** `.card.sorot` (alias `.card.primer`) — garis kiri 3 px `--primary`, eyebrow berwarna primer. Maksimal satu per layar.
- **interaktif** `.card.klik` atau kartu berisi `.card-link` — seluruh kartu dapat diklik; tautan utama satu-satunya elemen fokus; tombol lain di kartu interaktif diberi `position: relative; z-index: 1`.
- **tingkat** `[data-tingkat]`, `.tingkat-A/B/C` — garis kiri warna tingkat; **tab indeks** `[data-kode]` (dari putaran 2) tetap.
- **ringkasan** `.card.ringkas` — padding 16, isi pita stat atau 2–4 baris `dl`; dipakai di panel kanan.

**Keadaan (interaktif):** hover → garis `--line-strong` + latar `--surface-3` (120 ms); fokus → outline pada kartu via `:has(.card-link:focus-visible)`; tekan → turun 1 px (80 ms); nonaktif → `aria-disabled` pada tautan, latar `--surface-2`, tanpa hover; memuat → kerangka (C.15).

**Sentuh:** seluruh kartu ≥ 44 px tinggi.

**Tautan kop kartu** `.tautan-kop` ("Kemajuan ›"): 14 px/500 `--primary`, tanpa garis bawah sampai hover, ikon `chevron-kanan` 16 px yang bergeser 2 px saat hover; area sentuh 44 px dengan margin negatif agar tidak menambah tinggi kop. Selalu di `.card-head`, tidak pernah di baris sendiri.

CSS lengkap di C.23.

### C.4 Tombol

**Anatomi:** [ikon 18 opsional] label kata kerja [ikon/`kbd` opsional]. Label kalimat pendek tanpa titik.

| Varian | Kelas | Rupa | Pakai |
|---|---|---|---|
| primer | `.btn.btn-primary` | isian `--primary-fill`, teks `--primary-ink`, tepi bawah 2 px `--primary-edge` | satu aksi utama per layar |
| sekunder | `.btn` | `--surface`, garis `--line-strong`, tepi bawah 2 px `--btn-edge` | aksi kedua |
| hantu | `.btn.btn-ghost` (alias `.btn-text`) | transparan, teks `--primary` | aksi ketiga, "Dengarkan", "Batal" |
| bahaya | `.btn.btn-danger` (alias `.btn-attn`) | garis dan teks `--attn`; `.isi` = isian `--attn` | hapus data, kirim simulasi (konfirmasi akhir) |
| ikon | `.icon-btn` | 44 × 44, transparan; `.sm` 36 (area 44) | topbar, tutup, jadikan kartu |

| Ukuran | Kelas | Tinggi HP / ≥ 1024 | Padding | Teks |
|---|---|---|---|---|
| sm | `.btn-sm` | 36 / 36 (area sentuh 44) | 12 | 14 px |
| md | (bawaan) | 48 / 44 | 20 / 16 | 16 / 15 px |
| lg | `.btn-lg` | 52 / 52 | 24 | 16 px |

**Keadaan:** hover (sekunder: latar `--surface-3`, garis `--ink-faint`; primer: `--primary-fill-hover`; hantu: latar `--primary-soft`), fokus (outline 2 px offset 2), tekan (turun 1 px, tepi bawah meratakan warna, 80 ms), nonaktif (netral, lihat C.0), memuat (`aria-busy="true"`, label berganti "Menyimpan…"/"Memuat…", lebar dikunci lewat `style.minWidth` oleh JS, `pointer-events: none`; tanpa pemintal berputar).

**Aturan tata letak tombol:** urutan kiri → kanan: primer, sekunder, hantu. Aksi bahaya dipisah: di dialog ditaruh paling kiri kaki (`.kiri`), di halaman di kartu "Zona data" tersendiri. Di HP, `sticky-actions` di dalam kartu mewarisi latar kartu (`.card .sticky-actions { background: var(--surface) }`) — memperbaiki T17. Tombol dengan label panjang membungkus di batas kata (`text-wrap: balance`), tidak pernah terpotong (T32).

CSS lengkap di C.23.

### C.5 Chip dan segmen

**Chip** (`.chip`): filter dan pilihan jamak. Tinggi visual 32, area sentuh 44 (perluasan `::after` −6 px vertikal), padding 12, 14 px/500, radius 3, garis `--line-strong`.
- Varian: filter (`button.chip[aria-pressed]`), tingkat (`.chip-tingkat[data-tingkat]`), tautan (`a.chip`), statis → **jangan**; label statis memakai `.pill`.
- Keadaan: hover garis `--ink-faint` + latar `--surface-3`; fokus outline; tekan turun 1 px; **terpilih**: latar `--primary-soft`, garis `--primary`, teks `--primary-strong` 600, ikon centang 14 px **menyisip dari lebar 0 dan menggeser isi ke kanan** (160 ms); nonaktif netral.
- Baris chip `.chip-row`: membungkus, celah 12 vertikal / 8 horizontal.

**Segmen** (`.seg`): pilihan tunggal 2–4 opsi yang saling meniadakan (Kilat/Standar/Penuh, Tingkat A/B/C, Tema).
- Anatomi: trek `--surface-2` dengan padding 2 px dan garis `--line-strong`; tombol 40 px (total 46 px ≥ 44).
- Terpilih: "tombol terangkat" — latar `--seg-pilih`, garis `--line-strong`, teks `--ink` 600, garis penanda 2 px `--primary` di dasar dalam (`box-shadow: inset 0 -2px 0`). **Tidak lagi isian mint penuh** (T08).
- Label membungkus hanya di batas kata (`overflow-wrap: break-word`, tanpa `anywhere`) (T31); di HP segmen selalu selebar wadah; opsi dengan subjudul memakai `<small>` mono 12 di baris kedua.
- Semantik: `aria-pressed` per tombol (pola lama) atau `role="radiogroup"` + `role="radio"` + `aria-checked` (disarankan untuk yang baru).

CSS lengkap di C.23.

### C.6 Input, select, sakelar, kotak centang

**Field** `.field`: label 14/600 → kontrol → `.bantu` 13 `--muted` → `.galat` 13/500 `--attn` dengan ikon `peringatan` 16 (muncul hanya saat galat; `aria-describedby` menunjuk bantu + galat).

**Input/select/textarea** `.input`, `.select`: tinggi 44, padding 10/12, 16 px, radius 6, garis `--line-strong`, latar `--surface`.
- Hover: garis `--ink-faint`. Fokus: outline 2 px `--focus` offset 1 + garis `--primary`. Galat `aria-invalid="true"`: garis `--attn` + penanda kiri 3 px (inset). Nonaktif: latar `--surface-2`, teks `--muted`. Hanya-baca: latar `--surface-3`, tanpa garis kuat.
- Angka: `.input.angka` mono tabular rata kanan; dengan imbuhan `.input-grup` (`Rp` di kiri, `%`/`bulan` di kanan, mono 14 `--muted`, latar `--surface-2`).
- Select: `appearance: none`, ikon chevron `--ikon-select` 16 px di kanan 12 px, padding kanan 40.
- **Tanggal (T28):** `input[type="date"]` tetap native (aksesibel), tetapi `.bantu` di bawahnya **selalu** menampilkan tanggal terformat Indonesia yang diperbarui langsung: "Selasa, 15 Desember 2026 · 47 hari lagi". `lang="id"` pada `<html>` sudah ada; jangan menulis placeholder format AS.

**Sakelar** `.switch` (T07): baris berlabel penuh (seluruh baris dapat diklik), teks kiri (judul 15/600 + bantu 13), kontrol kanan. Markup: `<label class="switch"><span><strong>Teks lebih besar</strong><span class="bantu">…</span></span><input type="checkbox" role="switch"></label>`.
- Trek 44 × 24 radius pill; mati: latar `--surface-2`, garis `--line-strong`; hidup: latar dan garis `--primary-fill`. Jempol 20 px `--surface` bergaris; bergeser 20 px (160 ms).
- Fokus: outline pada trek; nonaktif: trek `--surface-2` bergaris `--line`, baris teks `--muted`.

**Kotak centang** `input[type="checkbox"].cek` (dan di `.tugas`): 20 × 20, radius 4, garis 1,5 px `--line-strong`; tercentang: isian `--primary-fill` + centang `--primary-ink` yang membesar dari 0 (160 ms). **Radio** `.radio`: 20 px lingkaran, titik 10 px.

CSS lengkap di C.23.

### C.7 Tabel

**Anatomi:** wadah `.tabel-wrap` (garis 1 px, radius 8, latar `--surface`) → `table.tabel` → `caption` (opsional, 13 `--muted`) → `thead` lengket → `tbody` → `tfoot`/`tr.total` (garis ganda atas, 700).
- Kepala: mono 12/600 kapital 0,06 em `--muted`, latar `--surface-2`, garis bawah `--line-strong`, `vertical-align: bottom` (kepala sejajar — T24), `white-space: nowrap`.
- Sel: padding 10/12 (`.rapat` 6/10), 14 px, garis bawah `--line-subtle`.
- Zebra halus: baris genap `--zebra`. Hover baris: `--surface-3` (120 ms).
- Angka: `th.num`, `td.num` mono tabular rata kanan, `white-space: nowrap` (T22). Nilai teks panjang **tidak** memakai `.num`.
- Kolom aksi `.aksi`: lebar minimum, rata kanan, berisi tombol ikon `.icon-btn.sm` dengan tooltip, bukan tautan teks berulang (T24).
- **Kepala lengket:** (a) tabel panjang di halaman (glosarium, lembar angka ≥ 15 baris) → `.tabel-wrap.bebas` (tanpa gulir sendiri) dan `thead th { top: var(--topbar-h) }` lengket ke halaman; (b) tabel lebar di HP → `.tabel-wrap` bergulir sendiri dengan `max-height: 70dvh` sehingga kepala lengket di wadahnya. Wadah bergulir: `tabindex="0"`, `role="region"`, `aria-label`, dan petunjuk "Geser untuk melihat kolom lain" (12 px) yang hanya tampil bila `scrollWidth > clientWidth`.
- HP < 640 untuk tabel dua-tiga kolom berlabel (`.tabel.kunci`, lembar angka): baris menjadi blok bertumpuk (aturan putaran 2 tetap).

CSS lengkap di C.23.

### C.8 Pill status dan stempel

**Pill** `.pill`: metadata dan status per baris. Tinggi 22, padding 0 8, radius pill, mono 12/500, `white-space: nowrap` (T16), ikon 12 opsional di kiri. Nada lewat `data-tone`: `ok`, `attn`, `warn`, `info`, `nila` (accent-2), `netral` (bawaan, `--surface-2`/`--muted`). Contoh: jenis soal "hitung", "± 12 mnt", "salah baca", "perlu cek" (ikon `setengah`), "dikenal" (nila), "BERLAKU" (ok).

**Stempel** `.stempel`: hanya untuk **capaian dan putusan**: HADIR, DIKUASAI, MEMENUHI BATAS 60, BELUM, SIAP DAFTAR, lencana. Satu stempel per kartu/blok, tidak di setiap baris (T10). Ukuran: mini (11 px, garis 1 px, untuk Kartu Hadir), bawaan (11 px, garis 2 px), besar (15 px, garis 3 px, kuitansi/hasil). Rotasi −3° hanya HADIR/DIKUASAI besar. Animasi "tekan" hanya saat diraih (§E).

| Sebelum | V6 |
|---|---|
| Stempel DIKENAL di tiap baris topik | `.pill[data-tone="nila"]` "dikenal" + angka progres teks |
| Stempel BERLAKU di tiap UU | `.pill[data-tone="ok"]` "berlaku" |
| `.tag-sebab` bingkai kuning | `.pill[data-tone="warn"]` |
| Stempel PERKIRAAN di kop tabel | `.pill[data-tone="warn"]` dengan ikon `peringatan` |

```css
.pill { display: inline-flex; align-items: center; gap: 4px; min-height: 22px; padding: 0 8px; border-radius: var(--r-pill); background: var(--surface-2); color: var(--muted); font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: var(--fw-med); line-height: 1; white-space: nowrap; vertical-align: middle; }
.pill svg { width: 12px; height: 12px; flex: none; }
.pill[data-tone="ok"] { background: var(--ok-soft); color: var(--ok); }
.pill[data-tone="attn"] { background: var(--attn-soft); color: var(--attn); }
.pill[data-tone="warn"] { background: var(--warn-soft); color: var(--warn); }
.pill[data-tone="info"] { background: var(--info-soft); color: var(--info); }
.pill[data-tone="nila"] { background: var(--accent-2-soft); color: var(--accent-2); }
.tag-sebab { display: inline-flex; align-items: center; min-height: 22px; padding: 0 8px; border: 0; border-radius: var(--r-pill); background: var(--warn-soft); color: var(--warn); font-family: var(--font-mono); font-size: var(--fs-eyebrow); white-space: nowrap; }
.stempel.mini { font-size: var(--fs-micro); border-width: 1px; padding: 1px 5px; }
```

### C.9 Progres: bar, cincin, stepper

**Bar** `.progress-line` (sm 4 / md 6 / lg 8 px), trek `--surface-2`, isian `--primary-fill` berujung bulat; nada `data-nada="attn|warn|ok"`. Dengan label: `.progress` → `.progress-kop` (label 14 kiri, angka mono 13 kanan) → bar. Lebar isian diberikan sebagai **variabel**, bukan `width` inline: `<span style="--p:38"></span>` (agar animasi masuk bekerja). `role="progressbar"` + `aria-valuenow/min/max` + `aria-valuetext` ("38 persen, 25 dari 65 tugas").

**Cincin** `.ring` (40 / 56 / 72 / 120 px), lingkaran `r="15.9155"` (keliling 100), trek `--surface-2` garis 4, isian `--primary-fill`, angka mono di tengah. Isian dengan `stroke-dasharray: 100; stroke-dashoffset: calc(100 - var(--p))` sehingga dapat dianimasikan (§E). Cincin kosong (`data-kosong`) **tidak diulang per baris**: satu keadaan kosong untuk satu bagian (T11). Cincin bersegmen (`UKP.viz.ringSegmen`) maksimal 12 segmen dengan celah 2 unit; tidak memakai tik bergerigi (T39).

**Stepper vertikal** `.stepper` (studi kasus, rencana per fase): `<ol>`, simpul 24 px berangka mono di rel 2 px.

| Status | Simpul | Isi |
|---|---|---|
| `terkunci` | garis `--line`, angka `--ink-faint`, ikon `gembok` 14 | hanya judul 15/500 `--muted`, satu baris, tanpa kartu |
| `aktif` (`aria-current="step"`) | garis 2 px `--primary`, halo `0 0 0 3px var(--primary-soft)` | kartu sorot penuh: pertanyaan, opsi/input, Periksa, Petunjuk |
| `benar` | isian `--primary-fill` + ikon `check` `--primary-ink` | ringkas satu baris: judul + jawaban mono + pill ok; dapat dibuka (`details`) |
| `salah` | garis 2 px `--attn` + ikon `x` | ringkas + pill attn; dapat dibuka |

**Stepper horizontal** `.stepper-h` (onboarding, sesi): segmen 4 px sama lebar (`.seg-blok`/`.ob-progress` digabung), di atasnya teks "Langkah 2 dari 5 · Tingkat yang dituju" 13 px.

```css
.progress { display: grid; gap: 6px; }
.progress-kop { display: flex; justify-content: space-between; align-items: baseline; gap: var(--s-3); font-size: var(--fs-small); }
.progress-kop .num { font-family: var(--font-mono); font-size: var(--fs-caption); font-variant-numeric: tabular-nums; color: var(--muted); }
.progress-line { height: 6px; background: var(--surface-2); border-radius: var(--r-pill); overflow: hidden; }
.progress-line.sm { height: 4px; } .progress-line.lg { height: 8px; }
.progress-line > span { display: block; height: 100%; width: calc(var(--p, 0) * 1%); max-width: 100%; background: var(--primary-fill); border-radius: 0 var(--r-pill) var(--r-pill) 0; }
.progress-line[data-nada="attn"] > span { background: var(--attn); }
.progress-line[data-nada="warn"] > span { background: var(--warn); }
.progress-line[data-nada="ok"] > span { background: var(--ok); }
.ring .track { stroke: var(--surface-2); }
.ring .fill[style*="--p"] { stroke: var(--primary-fill); stroke-dasharray: 100; stroke-dashoffset: calc(100 - var(--p)); }
.stepper { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: minmax(0, 1fr); }
.stepper > .langkah { position: relative; display: grid; gap: var(--s-2); padding: 0 0 var(--s-5) 40px; border: 0; background: none; min-width: 0; }
.stepper > .langkah::before { content: ""; position: absolute; left: 11px; top: 28px; bottom: 4px; width: 2px; background: var(--line); }
.stepper > .langkah:last-child::before { display: none; }
.stepper > .langkah[data-status="benar"]::before { background: var(--primary-fill); }
.langkah > .simpul { position: absolute; left: 0; top: 0; width: 24px; height: 24px; display: grid; place-items: center; border: 2px solid var(--line-strong); border-radius: 50%; background: var(--bg); color: var(--muted); font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: var(--fw-semi); }
.langkah > .simpul svg { width: 14px; height: 14px; }
.langkah[data-status="terkunci"] > .simpul { border-color: var(--line); color: var(--ink-faint); }
.langkah[data-status="terkunci"] .langkah-judul { color: var(--muted); font-weight: var(--fw-med); }
.langkah[data-status="aktif"] > .simpul { border-color: var(--primary); color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
.langkah[data-status="benar"] > .simpul { border-color: var(--primary-fill); background: var(--primary-fill); color: var(--primary-ink); }
.langkah[data-status="salah"] > .simpul { border-color: var(--attn); color: var(--attn); }
.langkah-judul { font-size: var(--fs-h3); line-height: var(--lh-h3); font-weight: var(--fw-semi); padding-top: 1px; }
```

### C.10 Toast

**Anatomi:** ikon status 18 (opsional) · teks 14 px (≤ 2 baris) · aksi hantu "Urungkan"/"Lihat" (opsional, warna `--toast-aksi`) · tombol tutup 36 (opsional). Warna terbalik (`--toast-bg`/`--toast-ink`), garis 1 px sewarna latar, radius 6, lebar maks 480 px, tinggi min 44.
- Posisi: tengah bawah; HP di atas bar bawah (`--nav-h` + 16 + safe-area); mode sesi 88 px; ≥ 600 px 24 px dari dasar.
- Durasi: 4 s; dengan aksi 6 s; dijeda saat hover/fokus; satu toast sekaligus (yang baru menggantikan).
- Masuk: naik 8 px + pudar 200 ms; keluar: pudar 120 ms (`.toast.keluar`).
- `role="status"` `aria-live="polite"`; tidak pernah untuk info kritis (pakai banner).
- Pemakaian baru: "Kartu ditambahkan ke dek Ulang" + [Urungkan] menggantikan tautan "Batalkan" yatim di panel umpan (T20); "Tersimpan" setelah ubah pengaturan; "Disalin".

Kontrak: `UKP.toast(teks, { nada: 'ok'|'info'|'attn', aksi: { label, onclick }, ms })`.

```css
.toast { position: fixed; left: 50%; bottom: calc(var(--nav-h) + var(--s-4) + env(safe-area-inset-bottom, 0px)); z-index: var(--z-toast); transform: translateX(-50%); display: flex; align-items: center; gap: var(--s-3); min-height: 44px; max-width: min(480px, calc(100vw - 32px)); padding: 8px 8px 8px 16px; border: 1px solid var(--toast-bg); border-radius: var(--r-sm); background: var(--toast-bg); color: var(--toast-ink); font-size: var(--fs-small); line-height: 1.4; box-shadow: none; }
.toast:not(:has(button)) { padding-right: 16px; }
.toast > svg { width: 18px; height: 18px; flex: none; }
.toast .toast-aksi { flex: none; min-height: 36px; padding: 0 var(--s-3); border: 0; border-radius: var(--r-xs); background: transparent; color: var(--toast-aksi); font-weight: var(--fw-semi); cursor: pointer; }
.toast .toast-aksi:hover { text-decoration: underline; text-underline-offset: 3px; }
.toast :focus-visible { outline: 2px solid var(--toast-aksi); outline-offset: 1px; }
@media (min-width: 600px) { .toast { bottom: var(--s-6); } }
```

### C.11 Dialog dan lembar bawah

**Anatomi:** `.dlg-head` (judul h2 20 px + tombol ikon tutup 44; garis halus bawah) → `.dlg-body` (padding 20, gulir sendiri, maks 70dvh) → `.dlg-foot` (aksi, garis halus atas, rata kanan di ≥ 600 px; aksi bahaya `.kiri` paling kiri).
- Lebar: `.sm` 440, bawaan 560, `.lg` 720; HP: `.sheet` menempel bawah, radius 12 atas, pegangan 32 × 4 px.
- Elevasi tingkat 4: garis `--line-strong`, scrim `--scrim`, tanpa bayangan.
- Masuk: dialog pudar + naik 4 px + skala 0,98 → 1 (160 ms); lembar bawah naik dari 100% (200 ms); scrim pudar 160 ms.
- `<dialog>.showModal()`, fokus awal ke tombol paling aman (bukan bahaya), Esc menutup (kecuali konfirmasi kirim: `closedby="none"`), `aria-labelledby` judul, `aria-describedby` kalimat utama.
- **Dialog konfirmasi berisiko** (Kirim simulasi, Hapus data): ringkasan angka sebagai pita stat mini (Terjawab · Kosong · Ragu), satu kalimat konsekuensi, kaki: `[Kirim sekarang]` bahaya di kiri — `[Ke soal kosong pertama]` sekunder + `[Kembali ke soal]` primer di kanan (T33). HP: tombol bertumpuk penuh lebar, primer paling atas, bahaya paling bawah dipisah garis.

Kontrak markup `UKP.dialog` (core.js): `<dialog class="sm|lg|sheet"><div class="dlg-head">…</div><div class="dlg-body">…</div><div class="dlg-foot">…</div></dialog>` (head tidak lagi di dalam body).

```css
dialog { width: 100%; max-width: min(var(--dlg-w, 560px), calc(100vw - 32px)); padding: 0; border: 1px solid var(--line-strong); border-radius: var(--r-lg); background: var(--surface); color: var(--ink); box-shadow: none; }
dialog.sm { --dlg-w: 440px; } dialog.lg { --dlg-w: 720px; }
dialog::backdrop { background: var(--scrim); }
.dlg-head { display: flex; align-items: center; justify-content: space-between; gap: var(--s-3); min-height: 56px; padding: var(--s-2) var(--s-2) var(--s-2) var(--s-5); border-bottom: var(--garis-halus); }
.dlg-head h2 { font-size: var(--fs-h2); }
.dlg-body { display: grid; gap: var(--s-4); padding: var(--s-5); max-height: 70dvh; overflow: auto; }
.dlg-foot { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: var(--s-2); padding: var(--s-3) var(--s-5) var(--s-4); border-top: var(--garis-halus); }
.dlg-foot > .kiri { margin-right: auto; }
@media (max-width: 599px) {
  .dlg-foot { flex-direction: column-reverse; align-items: stretch; }
  .dlg-foot > .kiri { margin: var(--s-2) 0 0; }
}
.sheet .pegangan { width: 32px; height: 4px; margin: var(--s-2) auto 0; border-radius: 2px; background: var(--line-strong); }
```

### C.12 Tab

**Pakai** untuk subhalaman (Kemajuan: Kartu Hadir · Peta kelemahan · Buku Kesalahan · Laporan · Lencana; Referensi: Glosarium · Indeks peraturan · Perubahan · Tabel angka · KMK bunga; Ulas: Semua salah · Ragu · per kelompok). Chip tetap untuk **filter** (T09).
- Anatomi: `.tabs[role="tablist"]` dengan garis bawah 1 px; `button[role="tab"]` 44 px, padding 0 12, 15 px/600 `--muted`; panel `[role="tabpanel"]` `tabindex="0"`.
- Keadaan: hover → teks `--ink` + garis bawah 2 px `--line-strong` (skala dari 0, 160 ms); terpilih (`aria-selected="true"`) → teks `--ink` + garis 2 px `--primary`; fokus → outline offset −2 px; nonaktif → `--ink-faint`.
- Opsional: angka hitungan sebagai `.pill` kecil setelah label ("Buku Kesalahan 23").
- HP: satu baris bergulir horizontal tanpa batang gulir; tab aktif di-`scrollIntoView({ inline: 'nearest', block: 'nearest' })`; tanpa gradien tepi.
- Keyboard: roving `tabindex`, ← → Home End; aktivasi otomatis (panel ringan). URL hash menyimpan tab (`#kemajuan?tab=laporan`).

Kontrak: `UKP.c.tabs({ id, tab: [{ id, label, hitung }], aktif, onGanti })` → `{ el, panel(id) }`.

```css
.tabs { display: flex; gap: var(--s-1); overflow-x: auto; scrollbar-width: none; box-shadow: inset 0 -1px 0 var(--line); }
.tabs::-webkit-scrollbar { display: none; }
.tabs [role="tab"] { position: relative; flex: none; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 var(--s-3); border: 0; background: none; color: var(--muted); font-family: var(--font-ui); font-size: var(--fs-ui); font-weight: var(--fw-semi); cursor: pointer; transition: color var(--dur-cepat) var(--ease-standar); }
.tabs [role="tab"]::after { content: ""; position: absolute; left: var(--s-3); right: var(--s-3); bottom: 0; height: 2px; border-radius: 1px; background: var(--line-strong); transform: scaleX(0); transition: transform var(--dur-sedang) var(--ease-keluar), background-color var(--dur-cepat) var(--ease-standar); }
.tabs [role="tab"]:hover { color: var(--ink); }
.tabs [role="tab"]:hover::after { transform: scaleX(1); }
.tabs [role="tab"][aria-selected="true"] { color: var(--ink); }
.tabs [role="tab"][aria-selected="true"]::after { transform: scaleX(1); background: var(--primary); }
.tabs [role="tab"]:focus-visible { outline: 2px solid var(--focus); outline-offset: -2px; border-radius: var(--r-xs); }
.tabs [role="tab"]:disabled { color: var(--ink-faint); cursor: not-allowed; }
[role="tabpanel"]:focus-visible { outline: 2px solid var(--focus); outline-offset: 4px; }
```

### C.13 Details / akordeon

- `details.lipat`: summary 44 px, ikon `chevron-kanan` 16 px di kiri yang berputar 90° saat terbuka (160 ms), 14 px/600; hover latar `--surface-3`; fokus outline −2 px; isi menjorok sejajar teks summary.
- `.akordeon`: kumpulan `details.lipat` dalam satu bingkai, dipisah `--garis-halus` (dipakai "Mengapa opsi lain keliru", rincian formulir, minggu lalu di Rencana).
- Keadaan terbuka bawaan: desktop terbuka untuk Jejak hitung dan Data kasus; HP tertutup.
- Isi tidak dianimasikan tingginya; hanya pudar 120 ms saat terbuka.

```css
details.lipat { border: var(--garis); border-radius: var(--r-sm); background: var(--surface); padding: 0; }
details.lipat > summary { display: flex; align-items: center; gap: var(--s-2); min-height: 44px; padding: var(--s-2) var(--s-3); border-radius: inherit; font-size: var(--fs-small); font-weight: var(--fw-semi); list-style: none; cursor: pointer; transition: background-color var(--dur-cepat) var(--ease-standar); }
details.lipat > summary::-webkit-details-marker { display: none; }
details.lipat > summary::before { content: ""; flex: none; width: 16px; height: 16px; background: currentColor; -webkit-mask: var(--ikon-chevron-kanan) center / 16px 16px no-repeat; mask: var(--ikon-chevron-kanan) center / 16px 16px no-repeat; transition: transform var(--dur-sedang) var(--ease-keluar); }
details.lipat[open] > summary::before { transform: rotate(90deg); }
details.lipat > summary:hover { background: var(--surface-3); }
details.lipat > summary:focus-visible { outline: 2px solid var(--focus); outline-offset: -2px; }
details.lipat > :not(summary) { margin: 0 var(--s-3) var(--s-3) calc(var(--s-3) + 16px + var(--s-2)); }
.akordeon { border: var(--garis); border-radius: var(--r-md); background: var(--surface); overflow: hidden; }
.akordeon > details.lipat { border: 0; border-radius: 0; border-bottom: var(--garis-halus); }
.akordeon > details.lipat:last-child { border-bottom: 0; }
```

### C.14 Keadaan kosong

- **Blok** `.kosong`: ikon garis 40 px (`--ink-faint`, dari §F lewat `data-ikon` → mask), judul 16/600 `--ink`, satu kalimat 14 `--muted` yang menyebut syaratnya ("Angka penguasaan muncul setelah 8 soal per topik."), satu tombol sekunder/primer ("Diagnosis 15 soal · ± 12 mnt"). Garis putus-putus `--line` (bukan `--line-strong`), padding 24, rata kiri.
- **Ringkas** `.kosong.ringkas`: satu baris, ikon 20, tanpa bingkai; untuk di dalam kartu ("Belum ada laporan. Laporan pertama terbit Jumat.").
- **Data** (grafik/peta tanpa cukup sampel): tampilkan kerangka grafik pucat (sumbu + grid) + teks "Butuh 6 soal lagi" + bar mini progres sampel, bukan sel "–" berulang (T11, T18).
- Satu keadaan kosong per bagian; baris-baris di bawahnya menampilkan teks "belum dinilai" tanpa cincin.

```css
.kosong { display: grid; justify-items: start; gap: var(--s-2); padding: var(--s-6); border: 1px dashed var(--line); border-radius: var(--r-md); color: var(--muted); font-size: var(--fs-small); text-align: left; }
.kosong::before { content: ""; width: 40px; height: 40px; margin-bottom: var(--s-1); background: var(--ink-faint); -webkit-mask: var(--ikon-kosong) center / contain no-repeat; mask: var(--ikon-kosong) center / contain no-repeat; }
.kosong > strong { color: var(--ink); font-size: var(--fs-16); font-weight: var(--fw-semi); }
.kosong > .btn { margin-top: var(--s-2); }
.kosong.ringkas { display: flex; align-items: center; gap: var(--s-2); padding: 0; border: 0; }
.kosong.ringkas::before { width: 20px; height: 20px; margin: 0; flex: none; }
```

### C.15 Kerangka saat memuat

- Muncul hanya bila memuat > 150 ms (modul konten lambat, Tutor, impor). Statis: **tanpa shimmer, tanpa denyut** (sesuai §7 "tanpa animasi berulang").
- Bentuk meniru isi akhir: `.kerangka.kartu` (judul 20 px lebar 60% + 3 baris 12 px dengan lebar 100/92/70%), `.kerangka.baris` untuk daftar (5 baris 44 px), `.kerangka.stat` untuk pita stat.
- Wadah `aria-busy="true"` + teks tersembunyi "Memuat …"; diganti isi dengan pudar 120 ms.

```css
.kerangka { display: grid; gap: var(--s-2); }
.kerangka > i { display: block; height: 12px; border-radius: var(--r-xs); background: var(--kerangka); }
.kerangka > i.judul { height: 20px; width: 60%; margin-bottom: var(--s-1); }
.kerangka > i:nth-child(3n + 2) { width: 92%; }
.kerangka > i:nth-child(3n) { width: 70%; }
.kerangka.kartu { padding: var(--pad-kartu); border: var(--garis); border-radius: var(--r-md); background: var(--surface); }
.kerangka.baris > i { height: 44px; border-radius: var(--r-sm); }
```

### C.16 Tooltip

- Hanya untuk tombol ikon tanpa label dan istilah singkatan; tidak untuk informasi penting.
- Satu elemen bersama `<div class="tip" role="tooltip" id="tip">`; pemicu mendapat `aria-describedby="tip"` saat tampil. Muncul setelah 400 ms hover atau langsung saat fokus keyboard; hilang 150 ms setelah pointer keluar dari pemicu **dan** tooltip (dapat di-hover), saat blur, atau Esc (WCAG 1.4.13).
- Rupa: warna terbalik, 13 px, padding 6/8, radius 3, lebar maks 240, panah 6 px; posisi atas (bawah bila tidak muat), jarak 8 px. Pudar 120 ms.
- Pointer kasar: tidak ada tooltip; label ikon tersedia lewat `aria-label` dan, bila perlu, teks kecil di bawah ikon.

Kontrak: atribut `data-tip="Jadikan kartu"` pada pemicu; `UKP.tip.pasang(root)` (ui-alat, core.js).

```css
.tip { position: fixed; z-index: var(--z-tip); max-width: 240px; padding: 6px 8px; border-radius: var(--r-xs); background: var(--toast-bg); color: var(--toast-ink); font-size: var(--fs-caption); line-height: 1.35; }
.tip::after { content: ""; position: absolute; left: var(--tip-x, 50%); top: 100%; margin-left: -6px; border: 6px solid transparent; border-top-color: var(--toast-bg); }
.tip[data-sisi="bawah"]::after { top: auto; bottom: 100%; border-top-color: transparent; border-bottom-color: var(--toast-bg); }
```

### C.17 kbd

- Mono 12/500, tinggi 20, lebar min 20, padding 0 5, garis `--line-strong` dengan tepi bawah 2 px (rupa tuts), latar `--surface`.
- Petunjuk pintasan (`.petunjuk-kbd`) disembunyikan di pointer kasar (`@media (pointer: coarse)`).
- Huruf opsi soal (A–D) memakai `kbd` 28 × 28, 13 px; terpilih terisi `--primary-fill`.

```css
kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; border: 1px solid var(--line-strong); border-bottom-width: 2px; border-radius: var(--r-xs); background: var(--surface); color: var(--ink); font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: var(--fw-med); line-height: 1; }
.opsi kbd { min-width: 28px; height: 28px; font-size: var(--fs-caption); }
@media (pointer: coarse) { .petunjuk-kbd { display: none; } }
```

### C.18 Banner dan catatan

- **Banner** `.banner` (versi konten, offline, penyimpanan, tenggat, rencana padat): latar `--surface`, garis 1 px, garis kiri 3 px nada, ikon 20 px bernada di kiri, judul 14/600 + kalimat 14, aksi `.btn-sm` sekunder sebaris (membungkus rata di HP, tiap tombol `flex: 1 1 auto`), tombol tutup 44 di kanan. Hanya nada `attn` kritis (penyimpanan tidak tersedia) yang memakai latar `--attn-soft` (T25).
- **Catatan** (`.petunjuk`, `.jebakan`, `.kutipan`): tetap berlatar lembut karena merupakan bagian isi, bukan sistem.

```css
.banner { display: flex; align-items: flex-start; gap: var(--s-3); padding: var(--s-3) var(--s-4); background: var(--surface); border: var(--garis); border-left: var(--penanda) solid var(--info); border-radius: var(--r-sm); color: var(--ink); font-size: var(--fs-small); }
.banner > svg:first-child { width: 20px; height: 20px; flex: none; margin-top: 1px; color: var(--info); }
.banner:is([data-tone="warn"], [data-tone="ok"], [data-tone="info"]) { background: var(--surface); } /* menimpa latar lembut putaran 2 */
.banner[data-tone="warn"] { border-left-color: var(--warn); } .banner[data-tone="warn"] > svg:first-child { color: var(--warn); }
.banner[data-tone="ok"] { border-left-color: var(--ok); } .banner[data-tone="ok"] > svg:first-child { color: var(--ok); }
.banner[data-tone="attn"] { border-left-color: var(--attn); background: var(--attn-soft); } .banner[data-tone="attn"] > svg:first-child { color: var(--attn); }
.banner .judul { display: block; font-weight: var(--fw-semi); }
.banner .btn-row { margin-top: var(--s-2); }
@media (max-width: 599px) { .banner .btn-row > .btn { flex: 1 1 auto; } }
```

### C.19 Stat tile dan pita stat

- Label eyebrow → nilai mono 28/700 (gelap 600) dengan satuan `<small>` 13 `--muted` → delta sebagai `.pill` bernada (▲/▼ ikon `naik`/`turun` 12 + "11 poin vs 7 hari lalu") → teks bantu 13.
- Sparkline hanya bila ≥ 3 titik data bernilai; bila tidak, tempatnya kosong (T34). Sparkline di kanan (≥ 13rem lebar tile) atau di bawah.
- Pita stat: tile sama tinggi (`align-items: stretch`), dipisah garis rambut (aturan putaran 2 tetap).
- Nilai menghitung naik 400 ms saat pertama terlihat (§E).

```css
.stat-tile .nilai, .stat .nilai { font-size: 1.75rem; font-weight: var(--fw-display); line-height: 1.15; }
.stat-tile .delta { justify-self: start; display: inline-flex; align-items: center; gap: 4px; min-height: 22px; padding: 0 8px; border-radius: var(--r-pill); background: var(--surface-2); font-family: var(--font-ui); font-size: var(--fs-caption); }
.stat-tile .delta[data-baik="ya"] { background: var(--ok-soft); }
.stat-tile .delta[data-baik="tidak"] { background: var(--attn-soft); }
.pita-stat { align-items: stretch; }
```

### C.20 Kartu soal, opsi, panel umpan

- **Kop soal** `.soal-kop`: ikon jenis 16 + kode mono 12 (A5-028) + topik 13 `--muted` (satu baris, elipsis di HP, judul lengkap di `title`) · kanan: kesulitan sebagai 3 batang 4 × 10 px (`aria-label="Kesulitan 2 dari 3"`).
- **Stem** body 17 px desktop, maks 68ch; kutipan peraturan `.kutipan` di atas stem dengan judul eyebrow.
- **Opsi** `.opsi label`: min 52 px, padding 12/16, `kbd` 28 px, garis `--line-strong`, radius 6. Hover garis `--ink-faint` + latar `--surface-3`; tekan turun 1 px; terpilih latar `--primary-soft` + garis 2 px (inset) + kbd terisi; setelah periksa: kunci (ok) dan salah (attn) dengan **pill** "Kunci" / "Jawaban Anda" + ikon, bukan hanya warna.
- **Panel umpan** `.umpan` (T20): garis kiri 3 px ok/attn (menggantikan garis atas), blok berurutan dipisah `--garis-halus`:
  1. Status: ikon `cek-lingkar`/`x-lingkar` 20 (tergambar, §E) + satu `<span>` berisi "Benar." / "Kurang tepat." 700 bernada dan "Jawaban Anda B; kunci C." 400 (teks dalam satu span agar mengalir sebagai kalimat, tidak terbelah menjadi kolom flex).
  2. Kalimat inti (body).
  3. Jejak hitung (`details.lipat`, terbuka di desktop).
  4. Dasar hukum (`.cite`, satu baris mono 12 + tautan).
  5. "Mengapa opsi lain keliru" (`.akordeon`).
  6. Kaki `.umpan-kaki`: pill jenis kesalahan + "Waktu 42 dtk · anggaran 2 mnt" 13 `--muted`.
- Penambahan kartu otomatis diumumkan lewat toast dengan [Urungkan], bukan tautan di panel.

```css
.umpan { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--s-3); padding: var(--s-4) var(--s-4) var(--s-4) calc(var(--s-4) + var(--penanda)); background: var(--surface); border: var(--garis); border-radius: var(--r-md); }
.umpan::before { content: ""; position: absolute; left: -1px; top: -1px; bottom: -1px; width: var(--penanda); border-radius: var(--r-md) 0 0 var(--r-md); background: var(--ok); transform-origin: top; }
.umpan[data-hasil="salah"]::before { background: var(--attn); }
/* markup status: <p class="status blok"><svg …/><span><strong data-hasil="salah">Kurang tepat.</strong> Jawaban Anda B; kunci C.</span></p> */
.umpan .status { display: flex; align-items: flex-start; gap: var(--s-2); }
.umpan .status > span { flex: 1 1 auto; min-width: 0; }
.umpan .status svg { width: 20px; height: 20px; flex: none; margin-top: 2px; stroke-width: 2; }
.umpan > .blok + .blok { padding-top: var(--s-3); border-top: var(--garis-halus); }
.umpan-kaki { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-2) var(--s-3); font-size: var(--fs-caption); color: var(--muted); }
.opsi label { padding: var(--s-3) var(--s-4); transition: border-color var(--dur-cepat) var(--ease-standar), background-color var(--dur-cepat) var(--ease-standar), transform var(--dur-instan) var(--ease-keluar); }
.opsi:not(.terkunci) label:hover { border-color: var(--ink-faint); background: var(--surface-3); }
```

### C.21 Baris daftar

- `.list-rows` > `.row-link`: tinggi min 52, padding 12 0, garis halus bawah; kiri: kode mono 13 `--muted` (lebar tetap 3rem) + judul 16/500 + baris meta (pill + teks 13); kanan: status (pill/angka mono) + ikon `chevron-kanan` 16 `--ink-faint`.
- Hover: judul `--primary`, chevron bergeser 2 px, latar `--surface-3` meluas ke tepi kartu (margin negatif = padding kartu). Fokus: outline −2 px. Tekan: latar `--surface-2`.
- Baris dengan aksi sekunder (mis. "Buka" di Rencana) menaruh tombol ikon **di dalam** baris (T26).

```css
.row-link { min-height: 52px; margin-inline: calc(var(--pad-kartu) * -1); padding: var(--s-3) var(--pad-kartu); border-radius: 0; transition: background-color var(--dur-cepat) var(--ease-standar); }
.row-link:hover { background: var(--surface-3); }
.row-link:focus-visible { outline: 2px solid var(--focus); outline-offset: -2px; }
.row-link .chev { width: 16px; height: 16px; flex: none; color: var(--ink-faint); transition: transform var(--dur-cepat) var(--ease-keluar); }
.row-link:hover .chev { transform: translateX(2px); color: var(--ink); }
.row-link .kode { flex: none; width: 3rem; font-family: var(--font-mono); font-size: var(--fs-caption); color: var(--muted); }
```

Catatan: `.row-link` yang tidak berada di dalam `.card` memakai `margin-inline: 0` (`.page > .list-rows .row-link { margin-inline: 0; padding-inline: 0; }`).

### C.22 Grafik (rujukan ke `UKP.viz`)

Aturan putaran 2 tetap. Tambahan V6: tooltip data memakai `.tip`; batang/kolom menyorot satu titik saat hover (yang lain `opacity: .55`, 120 ms); judul grafik **tidak** mengulang eyebrow kartu (pilih salah satu: eyebrow kartu = judul, `figcaption` = kalimat temuan, mis. "Kamis tertinggi: 10 soal") (pengamatan desktop-02).

### C.23 CSS enam komponen inti

Blok di bawah menggantikan aturan bernama sama di `css/app.css` (tombol, kartu, chip+segmen, input+sakelar, tabel, kop halaman). Urutan di berkas mengikuti urutan blok ini.

**1. Tombol**

```css
.btn {
  --btn-h: 48px; --btn-px: var(--s-5); --btn-fs: var(--fs-16);
  position: relative; display: inline-flex; align-items: center; justify-content: center; gap: var(--s-2);
  min-height: var(--btn-h); padding: 0 var(--btn-px);
  border: 1px solid var(--line-strong); border-bottom: 2px solid var(--btn-edge); border-radius: var(--r-sm);
  background: var(--surface); color: var(--ink);
  font-family: var(--font-ui); font-size: var(--btn-fs); font-weight: var(--fw-semi); line-height: var(--lh-ui);
  text-align: center; text-wrap: balance; text-decoration: none; cursor: pointer; -webkit-tap-highlight-color: transparent;
  transition: background-color var(--dur-cepat) var(--ease-standar), border-color var(--dur-cepat) var(--ease-standar),
    color var(--dur-cepat) var(--ease-standar), transform var(--dur-instan) var(--ease-keluar);
}
@media (min-width: 1024px) { .btn { --btn-h: 44px; --btn-px: var(--s-4); --btn-fs: var(--fs-ui); } }
.btn svg { width: 18px; height: 18px; flex: none; }
.btn:hover { background: var(--surface-3); border-color: var(--ink-faint); border-bottom-color: var(--btn-edge); }
.btn:active { transform: translateY(1px); border-bottom-color: var(--line-strong); }
.btn:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.btn:is(:disabled, [aria-disabled="true"]),
.btn:is(:disabled, [aria-disabled="true"]):is(:hover, :active) {
  background: var(--surface-2); color: var(--muted); border-color: var(--line); border-bottom-color: var(--line);
  cursor: not-allowed; transform: none; opacity: 1;
}
.btn[aria-busy="true"] { cursor: progress; pointer-events: none; }
.btn[aria-busy="true"] svg { opacity: .6; }

.btn-primary { background: var(--primary-fill); color: var(--primary-ink); border-color: var(--primary-fill); border-bottom-color: var(--primary-edge); }
.btn-primary:hover { background: var(--primary-fill-hover); border-color: var(--primary-fill-hover); border-bottom-color: var(--primary-edge); }
.btn-primary:active { background: var(--primary-fill-press); border-color: var(--primary-fill-press); border-bottom-color: var(--primary-fill-press); }

:is(.btn-ghost, .btn-text) { background: transparent; border-color: transparent; color: var(--primary); }
:is(.btn-ghost, .btn-text):hover { background: var(--primary-soft); border-color: transparent; }
:is(.btn-ghost, .btn-text):active { border-color: transparent; }
:is(.btn-ghost, .btn-text):is(:disabled, [aria-disabled="true"]) { background: transparent; border-color: transparent; color: var(--muted); }

:is(.btn-danger, .btn-attn) { color: var(--attn); border-color: var(--attn); border-bottom-color: var(--attn); }
:is(.btn-danger, .btn-attn):hover { background: var(--attn-soft); border-color: var(--attn); border-bottom-color: var(--attn); }
:is(.btn-danger, .btn-attn).isi { background: var(--attn); color: var(--attn-ink); }
:is(.btn-danger, .btn-attn).isi:hover { background: color-mix(in srgb, var(--attn) 86%, var(--ink)); }

.btn-sm { --btn-h: 36px; --btn-px: var(--s-3); --btn-fs: var(--fs-small); }
.btn-sm::after { content: ""; position: absolute; inset: -4px 0; }
.btn-lg { --btn-h: 52px; --btn-px: var(--s-6); --btn-fs: var(--fs-16); }
.btn-block { width: 100%; }

.icon-btn {
  position: relative; display: inline-grid; place-items: center; flex: none; width: 44px; height: 44px;
  border: 1px solid transparent; border-radius: var(--r-sm); background: transparent; color: var(--ink); cursor: pointer;
  transition: background-color var(--dur-cepat) var(--ease-standar), border-color var(--dur-cepat) var(--ease-standar);
}
.icon-btn svg { width: 20px; height: 20px; }
.icon-btn:hover { background: var(--surface-2); }
.icon-btn:active { border-color: var(--line-strong); }
.icon-btn[aria-pressed="true"] { background: var(--primary-soft); color: var(--primary); }
.icon-btn:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.icon-btn:is(:disabled, [aria-disabled="true"]) { color: var(--ink-faint); background: transparent; cursor: not-allowed; }
.icon-btn.sm { width: 36px; height: 36px; }
.icon-btn.sm svg { width: 18px; height: 18px; }
.icon-btn.sm::after { content: ""; position: absolute; inset: -4px; }

.btn-row { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-2); }
.card .sticky-actions { background: var(--surface); }
```

**2. Kartu**

```css
.card {
  position: relative; display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--jarak-blok); min-width: 0;
  padding: var(--pad-kartu); background: var(--surface); border: var(--garis); border-radius: var(--r-md);
  transition: border-color var(--dur-cepat) var(--ease-standar), background-color var(--dur-cepat) var(--ease-standar),
    transform var(--dur-instan) var(--ease-keluar);
}
.card-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: var(--s-1) var(--s-3); }
.card-head > * { min-width: 0; }
.card-title { font-size: var(--fs-h3); line-height: var(--lh-h3); letter-spacing: var(--ls-h3); font-weight: var(--fw-semi); }
.card-foot { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--s-2) var(--s-3); margin-top: auto; padding-top: var(--s-3); border-top: var(--garis-halus); }

.tautan-kop { display: inline-flex; align-items: center; gap: 2px; min-height: 44px; margin-block: -12px; color: var(--primary); font-size: var(--fs-small); font-weight: var(--fw-med); text-decoration: none; white-space: nowrap; }
.tautan-kop svg { width: 16px; height: 16px; transition: transform var(--dur-cepat) var(--ease-keluar); }
.tautan-kop:hover { text-decoration: underline; text-underline-offset: 3px; }
.tautan-kop:hover svg { transform: translateX(2px); }

.card:is(.sorot, .primer) { border-left: var(--penanda) solid var(--primary); }
.card:is(.sorot, .primer) > .card-head .eyebrow { color: var(--primary); font-weight: var(--fw-semi); }
.card.tingkat-A { --tk: var(--tingkat-a); } .card.tingkat-B { --tk: var(--tingkat-b); } .card.tingkat-C { --tk: var(--tingkat-c); }
.card:is([data-tingkat], .tingkat-A, .tingkat-B, .tingkat-C):not([data-kode]) { border-left: var(--penanda) solid var(--tk); }
.card.ringkas { --pad-kartu: var(--s-4); }

.card-link { color: inherit; text-decoration: none; }
.card-link::after { content: ""; position: absolute; inset: 0; border-radius: inherit; }
.card :is(.btn, .icon-btn, a:not(.card-link), button:not(.card-link)) { position: relative; z-index: var(--z-naik); }
.card:is(.klik, :has(.card-link)) { cursor: pointer; }
.card:is(.klik, :has(.card-link)):hover { background: var(--surface-3); border-top-color: var(--line-strong); border-right-color: var(--line-strong); border-bottom-color: var(--line-strong); }
.card:is(.klik, :has(.card-link)):not(.sorot, .primer, [data-tingkat], .tingkat-A, .tingkat-B, .tingkat-C, [data-kode]):hover { border-left-color: var(--line-strong); }
.card:is(.klik, :has(.card-link)):active { transform: translateY(1px); }
.card:has(.card-link:focus-visible) { outline: 2px solid var(--focus); outline-offset: 2px; }
.card .card-link:focus-visible { outline: none; }

.card-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--s-3); }
@media (min-width: 640px) { .card-grid.dua { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1280px) { .card-grid.tiga { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.card-grid.rata > .card { display: flex; flex-direction: column; }
.card-grid.rata > .card > .card-foot { margin-top: auto; }
```

**3. Chip dan segmen**

```css
.chip {
  position: relative; display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 0 var(--s-3);
  border: 1px solid var(--line-strong); border-radius: var(--r-xs); background: var(--surface); color: var(--ink);
  font-family: var(--font-ui); font-size: var(--fs-small); font-weight: var(--fw-med); line-height: 1.2; white-space: nowrap;
  transition: border-color var(--dur-cepat) var(--ease-standar), background-color var(--dur-cepat) var(--ease-standar),
    color var(--dur-cepat) var(--ease-standar), transform var(--dur-instan) var(--ease-keluar);
}
.chip svg { width: 16px; height: 16px; flex: none; }
:is(button, a).chip { cursor: pointer; text-decoration: none; }
:is(button, a).chip::after { content: ""; position: absolute; inset: -6px -2px; }
:is(button, a).chip:hover { border-color: var(--ink-faint); background: var(--surface-3); }
:is(button, a).chip:active { transform: translateY(1px); }
:is(button, a).chip:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
/* centang hanya pada chip yang dapat dipilih (flex item); chip pemicu di topbar tidak memilikinya */
:is(button, a).chip:is([aria-pressed], [aria-selected], .aktif)::before {
  content: ""; display: block; flex: none; width: 0; height: 14px; margin-inline-end: -6px; opacity: 0; background: currentColor;
  -webkit-mask: var(--ikon-cek) center / 14px 14px no-repeat; mask: var(--ikon-cek) center / 14px 14px no-repeat;
  transition: width var(--dur-sedang) var(--ease-keluar), margin var(--dur-sedang) var(--ease-keluar), opacity var(--dur-cepat) var(--ease-standar);
}
.chip:is([aria-pressed="true"], [aria-selected="true"], .aktif) { background: var(--primary-soft); border-color: var(--primary); color: var(--primary-strong); font-weight: var(--fw-semi); }
:is(button, a).chip:is([aria-pressed="true"], [aria-selected="true"], .aktif)::before { width: 14px; margin-inline-end: 0; opacity: 1; }
.topbar .chip-tingkat::before { content: none; }
.chip:is(:disabled, [aria-disabled="true"]) { background: var(--surface-2); border-color: var(--line); color: var(--muted); cursor: not-allowed; transform: none; }
.chip-row { display: flex; flex-wrap: wrap; gap: var(--s-3) var(--s-2); }

.seg {
  display: inline-grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 2px; max-width: 100%;
  padding: 2px; border: 1px solid var(--line-strong); border-radius: var(--r-sm); background: var(--surface-2);
}
.seg.penuh { display: grid; width: 100%; }
@media (max-width: 599px) { .seg { display: grid; width: 100%; } }
.seg button {
  position: relative; min-width: 0; min-height: 40px; padding: 6px var(--s-3);
  border: 1px solid transparent; border-radius: 4px; background: transparent; color: var(--muted);
  font-family: var(--font-ui); font-size: var(--fs-small); font-weight: var(--fw-med); line-height: 1.25;
  overflow-wrap: break-word; hyphens: manual; text-wrap: balance; cursor: pointer;
  transition: background-color var(--dur-sedang) var(--ease-standar), color var(--dur-cepat) var(--ease-standar), border-color var(--dur-sedang) var(--ease-standar);
}
.seg button:hover { color: var(--ink); background: var(--surface-3); }
.seg button:is([aria-pressed="true"], [aria-checked="true"]) {
  background: var(--seg-pilih); color: var(--ink); font-weight: var(--fw-semi);
  border-color: var(--line-strong); box-shadow: inset 0 -2px 0 var(--primary);
}
.seg button:focus-visible { outline: 2px solid var(--focus); outline-offset: 0; z-index: var(--z-naik); }
.seg button:disabled { color: var(--ink-faint); background: transparent; cursor: not-allowed; }
.seg button small { display: block; font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: var(--fw-reg); color: var(--muted); }
```

**4. Input dan sakelar**

```css
.field { display: grid; gap: 6px; }
.field > label, .field > .label { font-size: var(--fs-small); font-weight: var(--fw-semi); color: var(--ink); }
.field .bantu { font-size: var(--fs-caption); color: var(--muted); }
.field .galat { display: flex; align-items: flex-start; gap: 6px; font-size: var(--fs-caption); font-weight: var(--fw-med); color: var(--attn); }
.field .galat svg { width: 16px; height: 16px; flex: none; margin-top: 1px; }

.input, .select, textarea.input {
  width: 100%; min-height: 44px; padding: 10px 12px;
  border: 1px solid var(--line-strong); border-radius: var(--r-sm); background: var(--surface); color: var(--ink);
  font-family: var(--font-ui); font-size: 1rem; line-height: 1.4;
  transition: border-color var(--dur-cepat) var(--ease-standar), background-color var(--dur-cepat) var(--ease-standar);
}
.input::placeholder { color: var(--ink-faint); opacity: 1; }
.input:hover, .select:hover { border-color: var(--ink-faint); }
.input:focus, .select:focus { outline: 2px solid var(--focus); outline-offset: 1px; border-color: var(--primary); }
.input[aria-invalid="true"], .select[aria-invalid="true"] { border-color: var(--attn); box-shadow: inset var(--penanda) 0 0 var(--attn); }
.input:is(:disabled, [aria-disabled="true"]), .select:disabled { background: var(--surface-2); border-color: var(--line); color: var(--muted); cursor: not-allowed; }
.input[readonly] { background: var(--surface-3); border-color: var(--line); }
.input.angka, .input.mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
.input.angka { text-align: right; }
.select {
  -webkit-appearance: none; appearance: none; padding-right: 40px;
  background-image: var(--ikon-select); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px 16px;
}
.input-grup { display: flex; align-items: stretch; min-height: 44px; border: 1px solid var(--line-strong); border-radius: var(--r-sm); background: var(--surface); overflow: hidden; }
.input-grup:hover { border-color: var(--ink-faint); }
.input-grup:focus-within { outline: 2px solid var(--focus); outline-offset: 1px; border-color: var(--primary); }
.input-grup > .input { min-width: 0; border: 0; border-radius: 0; }
.input-grup > .input:focus { outline: none; }
.input-grup > .imbuh { display: grid; place-items: center; flex: none; padding: 0 12px; background: var(--surface-2); color: var(--muted); font-family: var(--font-mono); font-size: var(--fs-small); }

.switch { display: flex; align-items: center; justify-content: space-between; gap: var(--s-4); min-height: 56px; padding: var(--s-3) 0; border-bottom: var(--garis-halus); cursor: pointer; }
.switch > :first-child { flex: 1 1 auto; min-width: 0; }
.switch strong { display: block; font-size: var(--fs-ui); font-weight: var(--fw-semi); }
.switch .bantu { display: block; margin-top: 2px; font-size: var(--fs-caption); font-weight: var(--fw-reg); color: var(--muted); }
.switch input[type="checkbox"] {
  -webkit-appearance: none; appearance: none; position: relative; flex: none; width: 44px; height: 24px; margin: 0;
  border: 1px solid var(--line-strong); border-radius: var(--r-pill); background: var(--surface-2); cursor: pointer;
  transition: background-color var(--dur-sedang) var(--ease-standar), border-color var(--dur-sedang) var(--ease-standar);
}
.switch input[type="checkbox"]::before {
  content: ""; position: absolute; top: 1px; left: 1px; width: 20px; height: 20px; box-sizing: border-box;
  border: 1px solid var(--line-strong); border-radius: 50%; background: var(--surface);
  transition: transform var(--dur-sedang) var(--ease-keluar), border-color var(--dur-sedang) var(--ease-standar);
}
.switch input[type="checkbox"]:checked { background: var(--primary-fill); border-color: var(--primary-fill); }
.switch input[type="checkbox"]:checked::before { transform: translateX(20px); border-color: var(--primary-edge); }
.switch input[type="checkbox"]:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.switch:has(input:disabled) { cursor: not-allowed; color: var(--muted); }
.switch input[type="checkbox"]:disabled { background: var(--surface-2); border-color: var(--line); cursor: not-allowed; }

input[type="checkbox"].cek, .tugas input[type="checkbox"] {
  -webkit-appearance: none; appearance: none; display: inline-grid; place-content: center; flex: none;
  width: 20px; height: 20px; margin: 1px 0 0; border: 1.5px solid var(--line-strong); border-radius: 4px; background: var(--surface); cursor: pointer;
  transition: background-color var(--dur-cepat) var(--ease-standar), border-color var(--dur-cepat) var(--ease-standar);
}
input[type="checkbox"].cek::before, .tugas input[type="checkbox"]::before {
  content: ""; width: 14px; height: 14px; background: var(--primary-ink);
  -webkit-mask: var(--ikon-cek) center / contain no-repeat; mask: var(--ikon-cek) center / contain no-repeat;
  transform: scale(0); transition: transform var(--dur-sedang) var(--ease-keluar);
}
input[type="checkbox"].cek:checked, .tugas input[type="checkbox"]:checked { background: var(--primary-fill); border-color: var(--primary-fill); }
input[type="checkbox"].cek:checked::before, .tugas input[type="checkbox"]:checked::before { transform: scale(1); }
input[type="checkbox"].cek:focus-visible, .tugas input[type="checkbox"]:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
```

**5. Tabel**

```css
.tabel-wrap { position: relative; max-width: 100%; min-width: 0; overflow: auto; border: var(--garis); border-radius: var(--r-md); background: var(--surface); }
.tabel-wrap.tinggi { max-height: 70dvh; }
.tabel-wrap.bebas { overflow: visible; }
.tabel-wrap:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.tabel { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-small); font-variant-numeric: tabular-nums; }
.tabel caption { caption-side: top; padding: var(--s-3) var(--s-3) var(--s-2); text-align: left; font-size: var(--fs-caption); color: var(--muted); }
.tabel :is(th, td) { padding: 10px 12px; text-align: left; vertical-align: top; border-bottom: var(--garis-halus); overflow-wrap: break-word; }
.tabel thead th {
  position: sticky; top: 0; z-index: var(--z-naik); vertical-align: bottom; white-space: nowrap;
  background: var(--surface-2); border-bottom: var(--garis-kuat);
  font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: var(--fw-semi); letter-spacing: .06em; text-transform: uppercase; color: var(--muted);
}
.tabel-wrap.bebas .tabel thead th { top: var(--topbar-h); }
.tabel tbody tr:nth-child(even) > * { background: var(--zebra); }
.tabel tbody tr { transition: background-color var(--dur-cepat) var(--ease-standar); }
.tabel tbody tr:hover > * { background: var(--surface-3); }
.tabel tbody tr:last-child > * { border-bottom: 0; }
.tabel :is(th, td).num { text-align: right; font-family: var(--font-mono); white-space: nowrap; }
.tabel :is(tfoot td, tr.total > *) { border-top: var(--garis-total); border-bottom: 0; font-weight: var(--fw-bold); }
.tabel .aksi { width: 1%; text-align: right; white-space: nowrap; }
.tabel td.aksi { padding-block: 4px; } /* hanya sel isi; kepala kolom aksi tetap sejajar kepala lain */
.tabel.rapat :is(th, td) { padding: 6px 10px; }
.petunjuk-geser { font-size: var(--fs-eyebrow); color: var(--muted); }
```

**6. Kop halaman**

```css
.page-head { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--s-2); }
.page-head:has(> .page-head-teks) { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: var(--s-4) var(--s-6); }
.page-head-teks { flex: 1 1 28rem; min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--s-2); }
.page-head :is(h1, .eyebrow, .lead, .crumb, .page-meta) { margin: 0; }
.page-head .crumb { margin-bottom: var(--s-1); }
.page-head .lead { max-width: 64ch; color: var(--muted); font-size: var(--fs-body); line-height: var(--lh-body); }
.page-head .lead.ringkas:not([data-terbuka]) { display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.page-head .lead-toggle { justify-self: start; }
.page-meta { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-2); margin-top: var(--s-1); }
.page-actions { flex: 0 1 auto; display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-2); }
@media (max-width: 599px) { .page-actions { width: 100%; } .page-actions > .btn-primary { flex: 1 1 auto; } }
.crumb { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: var(--fs-eyebrow); color: var(--muted); }
.crumb a { color: var(--muted); text-decoration: none; }
.crumb a:hover { color: var(--primary); text-decoration: underline; text-underline-offset: 3px; }
.sect { border-top: var(--garis-kop); padding-top: var(--s-3); display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--jarak-blok); }
.sect > :is(.eyebrow, .between > .eyebrow) { color: var(--primary); font-weight: var(--fw-semi); }
```

---

## D. Halaman

### D.0 Sistem tata letak

- **HP (< 600):** satu kolom, gutter 16, jarak bagian 24, bar bawah. **Tablet (600–1023):** satu kolom (kartu boleh 2 kolom), gutter 24, rail 84. **Desktop (≥ 1024):** sidebar 256, gutter 32, **grid 12 kolom** (`.tata`, celah 24). **Lebar (≥ 1280):** panel kanan 4/12 aktif (`.kl-*`, lengket).
- Lebar konten: `.page` = 760 (baca), `.page.lebar` = 1200 (dasbor/data). Rata kiri terhadap tepi konten (identitas buku besar), **kecuali** mode ujian: konten dipusatkan, maks 1200 (T03).
- Kartu ringkasan (`.card.ringkas`) di panel kanan berisi 2–4 angka kunci atau daftar isi; di < 1280 panel turun ke atas isi utama (bukan ke bawah) bila berisi status, atau ke bawah bila berisi navigasi.

```css
.page { max-width: var(--w-baca); display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--jarak-bagian); }
.page.lebar { max-width: var(--w-lebar); }
.tata { display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--s-4); align-items: start; }
.tata > * { min-width: 0; }
@media (min-width: 1024px) {
  .tata { grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--kolom-gap); row-gap: var(--s-5); }
  .tata > * { grid-column: 1 / -1; }
  .tata > .k-3 { grid-column: span 3; } .tata > .k-4 { grid-column: span 4; } .tata > .k-5 { grid-column: span 5; }
  .tata > .k-6 { grid-column: span 6; } .tata > .k-7 { grid-column: span 7; } .tata > .k-8 { grid-column: span 8; }
  .tata > .k-9 { grid-column: span 9; }
}
@media (min-width: 1280px) {
  .tata > .kl-4 { grid-column: span 4; } .tata > .kl-5 { grid-column: span 5; }
  .tata > .kl-7 { grid-column: span 7; } .tata > .kl-8 { grid-column: span 8; }
  .tata > .lengket { position: sticky; top: calc(var(--topbar-h) + var(--s-4)); max-height: calc(100dvh - var(--topbar-h) - var(--s-8)); overflow: auto; overscroll-behavior: contain; }
}
body[data-mode="ujian"] main > .page { max-width: var(--w-lebar); margin-inline: auto; }
```

`.panel-kanan` (putaran 2) tetap untuk halaman baca (topik, kasus) — `.page:has(.panel-kanan)` melebar ke 1200 di ≥ 1280.

### D.1 Hari Ini

```
≥ 1280 (.page.lebar + .tata)
┌──────────────────────────────────────────────────────────────────────────────┐
│ KAMIS, 29 OKTOBER 2026                                        [Lihat rencana] │
│ 47 hari menuju UKP A                                                         │
│ Minggu 1 dari 8 · F0 Diagnosis · 3/7 tugas  ▬▬▬▭▭▭▭                          │
├────────────────────────────────────────────────┬─────────────────────────────┤
│ SESI HARI INI (sorot)     [Kilat | Standar | Penuh]│ ANGKA HARI INI   (kl-4)  │
│ 01  Angka hari ini                       30 dtk│ Rp2 miliar                  │
│ 02  Ulang 4 kartu                       1,4 mnt│ PPN DTP 100% rumah …        │
│ 03  Ringkas A2.1 Definisi dan istilah…    4 mnt│ PMK 90/2025 · berlaku …     │
│ 04  Soal 8 butir                          6 mnt│ [+ Kartu]  Dengarkan        │
│ [ Mulai sesi · 12 mnt ]                (kl-8)  ├─────────────────────────────┤
│                                                │ KARTU HADIR      Kemajuan › │
│                                                │ J  S  M  S  S  R  K         │
├──────────────────┬──────────────────┬──────────┴─────────────────────────────┤
│ RANGKAIAN 3 hari │ AKURASI 7H 74%   │ SOAL MINGGU INI 23     (pita stat)     │
├────────────────────────────────────────────┬─────────────────────────────────┤
│ AKTIVITAS 14 HARI (kl-7)                   │ POSISI PENGUASAAN · A  (kl-5)   │
└────────────────────────────────────────────┴─────────────────────────────────┘
HP: Sesi → Angka hari ini → Kartu Hadir (strip 7) → pita stat (2+1) → Aktivitas → Penguasaan.
```

- **P1** Kop: eyebrow tanggal + h1 + baris meta progres minggu (bar sm + teks) (T01).
- **P1** Sesi = satu-satunya `.card.sorot`; daftar langkah menjadi `.list-rows` bernomor (nomor mono 13, judul 15, menit mono rata kanan) **tanpa bingkai dalam** (T02); segmen di `.card-head` kanan (desktop) / di bawah eyebrow selebar kartu (HP); tombol primer `.btn-lg` penuh lebar di HP, lebar otomatis rata kiri di desktop, label "Mulai sesi · 12 mnt" dengan ikon `play`.
- **P1** Penguasaan: bila belum ada angka → satu `.kosong` dengan tombol Diagnosis; baris kelompok tanpa cincin "–" (T11). Bila ada angka → baris `.row-link`: kode tab mono, nama, bar mini 80 px, angka mono kanan.
- **P1** Tautan kop kartu → `.tautan-kop` (T35).
- **P2** Pita stat: delta sebagai pill, sparkline hanya bila ≥ 3 titik (T34); angka hitung naik 400 ms.
- **P2** Angka hari ini: angka memakai `--fs-display` (32 px di HP, 40 px di desktop) dan diturunkan ke 2rem di panel kanan ≥ 1280 agar seimbang dengan lebar 4 kolom; aksi "Tambah ke kartu" `.btn-sm` ikon `tambah` + "Dengarkan" `.btn-ghost.btn-sm` ikon `suara`.
- **P2** Aktivitas: `figcaption` = temuan ("Rata-rata 6 soal/hari; tertinggi Rabu 21 Okt"), bukan pengulangan judul.
- **P3** Satu banner kontekstual maksimal, di antara kop dan Sesi.

### D.2 Peta materi (tingkat)

- **P1** Pilihan tingkat A/B/C → `.seg` dengan subjudul ("A · target", "B", "C") menggantikan chip berwarna blok (T08).
- **P1** Kartu kelompok (tab indeks `[data-kode]` tetap): satu indikator progres saja — cincin 44 di kanan kop; bar di bawah dihapus (T40). Meta menjadi pill: "11 topik", "103 soal", "0/11 dikuasai", "akurasi 30 hari 58%" (angka mono di dalam teks sans).
- **P1** Di ≥ 1280 kartu kelompok dalam `.card-grid.dua.rata`.
- **P2** Hover kartu: tab indeks berubah ke isian `--tk` dengan teks `--primary-ink` (120 ms) — umpan balik jelas tanpa bayangan.
- **P2** Pita stat (kelompok · durasi · soal) di panel kanan ≥ 1280 bersama catatan "Jumlah soal resmi belum diumumkan" sebagai `.pill[data-tone="warn"]`.

### D.3 Kelompok

```
≥ 1280: .tata — isi kl-8 | panel kanan kl-4 lengket
┌──────────────────────────────────────────────┬──────────────────────────────┐
│ Belajar › A1                                 │ RINGKASAN A1   (card.ringkas)│
│ A1 · DIUJI DI A · B · C                      │   ( cincin bersegmen 120 )   │
│ PPh Orang Pribadi dan SPT PPh OP             │ 38% · 11 topik · 103 soal    │
│ Peserta mampu menentukan status … (3 baris)  │ ■ <60 ■ 60–79 ■ ≥80          │
│ Selengkapnya                                 │ [Lembar Angka] [Dek kartu]   │
│ [Lanjutkan: Topik 3 · Objek PPh]  [Latih 10] │ [Studi kasus]  [Simulasi 40] │
├──────────────────────────────────────────────┤                              │
│ ══ KISI-KISI RESMI SEBAGAI TOPIK             │                              │
│ 01 Subjek pajak orang pribadi …    dikenal › │                              │
│    konsep · ± 10 mnt · 0% dari 2 soal        │                              │
│ 02 Objek PPh orang pribadi …       dikenal › │                              │
└──────────────────────────────────────────────┴──────────────────────────────┘
```

- **P1** CTA "Lanjutkan: …" pindah ke `.page-actions` sebagai primer; tidak lagi menyisip di daftar (T12). Aksi: primer (Lanjutkan) + sekunder (Latih 10); Simulasi 40, Dek kartu, Studi kasus, Lembar Angka pindah ke kartu ringkasan (≥ 1280) atau menu "Lainnya" (`.btn-ghost` + lembar bawah) di < 1280 (T05).
- **P1** Lead `ringkas` 3 baris + "Selengkapnya" (T13).
- **P1** Daftar topik `.list-rows` > `.row-link`: nomor mono, judul 16/500, meta (pill jenis · "± 10 mnt" · "75% dari 4 soal · butuh 4 lagi"), kanan pill status (`nila` dikenal / `ok` dikuasai / `attn` perlu segar) + chevron; stempel DIKENAL dan cincin "–" per baris dihapus (T10, T11).
- **P2** Cincin bersegmen tanpa tik; legenda tepat di bawah cincin (T39).
- **P2** Tabel "Perubahan 2024–2026": `.tabel` dengan kolom Sebelum (`--muted`), Sesudah (`--ink`), Dasar (mono 12); di HP setiap baris menjadi blok "Sebelum → Sesudah".

### D.4 Topik

- **P1** Prosa maks 68ch, jarak antar-butir 8 px, butir kunci boleh diawali kata tebal (T14).
- **P1** Navigasi topik lengket bawah `.nav-topik`: latar `--surface`, garis atas, tiga zona (‹ Topik 1 · 2/11 · Topik 3 ›); tombol `.btn-sm` di HP; label tidak boleh hilang — di < 360 px label menjadi "‹ Sebelumnya" / "Berikutnya ›" (T32).
- **P1** Angka kunci: `.tabel` dengan nilai stabilo (garis bawah), kolom aksi berisi `.icon-btn.sm` ikon `tambah` + tooltip "Jadikan kartu"; setelah ditambah berganti ikon `check` + `aria-label="Sudah di dek"`.
- **P2** ≥ 1280 panel kanan: daftar isi lengket (Ringkasan · Angka kunci · Jebakan · Contoh · Latihan) dengan penanda aktif bergaris (scrollspy) + status topik + tombol "Latih 5 soal topik ini".
- **P2** Bar baca 2 px di bawah topbar (proporsi gulir; statis bila gerak dikurangi).
- **P3** Istilah glosarium bergaris titik dengan tooltip definisi.

### D.5 Latih (pengaturan latihan)

```
≥ 1280: .tata — form kl-8 | ringkasan kl-4 lengket
┌──────────────────────────────────────────────┬──────────────────────────────┐
│ Kelompok [select]        Topik [select]       │ 521 soal cocok               │
│ Jenis [select]           Kesulitan [select]   │ A1–A5 · semua jenis          │
│ Jumlah  [ 5 | 10 | 20 | 40 ]                  │ [ Mulai 10 soal ]            │
│ Butir laporan [ Semua | Tingkat B | C ]       │ Tempo ketat: mati            │
│ Hanya soal yang pernah keliru         (  o)   │                              │
│ Hanya soal gaya UKP nyata             (  o)   │                              │
│ Drill "kecuali"                        (  o)  │                              │
├──────────────────────────────────────────────┴──────────────────────────────┤
│ ══ BUKU KESALAHAN TERBARU   (list-rows, pill sebab nowrap)                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **P1** Sakelar asli (C.6) menggantikan checkbox (T07); segmen versi V6 (T08).
- **P1** Ringkasan "521 soal cocok" + tombol Mulai di panel kanan ≥ 1280; di bawahnya `sticky-actions` berlatar kartu (T17).
- **P1** Buku kesalahan: tag sebab → pill nowrap (T16); baris `.row-link` dengan kode mono, stem terpotong 1 baris.
- **P2** Jumlah cocok menghitung naik saat filter berubah (dari nilai lama ke baru, 400 ms) dan diumumkan `aria-live="polite"` setelah 500 ms diam.
- **P2** Ringkasan filter aktif sebagai chip dapat-dihapus + "Atur ulang".

### D.6 Latihan soal dan umpan

- **P1** Kop soal, opsi, dan panel umpan sesuai C.20 (garis kiri, blok terpisah, toast [Urungkan]) (T20).
- **P1** Bar sesi/latih: "Latih · 1/5 · benar 0" kiri, "Selesai" hantu kanan; bar progres sm di bawahnya beranimasi saat maju.
- **P1** Tombol aksi lengket: "Periksa" primer (nonaktif netral sampai ada pilihan, T30), setelah periksa "Lanjut" primer + "Tanya Tutor" sekunder.
- **P2** Kartu soal masuk pudar + naik 8 px (§E); petunjuk `kbd` (A–D, Enter, T) di desktop di bawah opsi, 12 px `--muted`.
- **P2** Tautan "Lihat di peta formulir" (nila) bila `formulirRef` ada.

### D.7 Ulang kartu

- **P1** Kartu flash satu permukaan (hapus bingkai ganda): min-tinggi 280 desktop / 220 HP, isi rata tengah vertikal, eyebrow topik, prompt 22 px/600, petunjuk "Ketuk kartu atau tekan Spasi" 13 `--muted` (T27).
- **P1** Fokus kartu: cincin 2 px mengikuti radius kartu dengan offset 2 px hanya untuk fokus keyboard; fokus programatik setelah membalik diarahkan ke tombol nilai pertama, bukan ke wadah.
- **P1** Dek → `.tabs` bergulir (Semua jatuh tempo · Perubahan 2025–2026 · A1 … A5) dengan hitungan; pita stat dipadatkan menjadi `.page-meta` di kop ("0 jatuh tempo · 10 baru · 0/0 kuat").
- **P1** "Balik kartu" `.btn-lg` primer penuh lebar dengan `kbd` Spasi; tombol nilai 3 kolom tetap (label + interval mono).
- **P2** Bar progres dek di atas kartu (1/10); kartu berikutnya masuk pudar + naik 8 px.

### D.8 Studi kasus

```
≥ 1280: isi kl-8 | Data kasus kl-4 lengket (lebar ~330 di 1366)
┌──────────────────────────────────────────────┬──────────────────────────────┐
│ Studi kasus › K-A1-01                        │ DATA KASUS · 8 BARIS         │
│ K-A1-01 · PPH ORANG PRIBADI                  │ Status PTKP            K/1   │
│ Arsitek lepas dengan NPPN: …                 │ Pemberitahuan NPPN           │
│ Langkah 1 dari 6  ▬▭▭▭▭▭                      │              16 Feb 2026     │
│ ┌ Narasi kasus (kartu, 68ch, 5 baris + Baca ┐ │ Peredaran bruto 2026         │
│ └ selengkapnya)                             ┘ │          Rp1.200.000.000     │
│ ① Apakah Ir. Bayu boleh … (kartu sorot)      │ …                            │
│ │  A … B … C … D …   [Periksa] [Petunjuk]    │ [Buka kalkulator PPh OP]     │
│ ② Berapa penghasilan neto …        (terkunci)│                              │
│ ③ Berapa PKP …                     (terkunci)│                              │
└──────────────────────────────────────────────┴──────────────────────────────┘
```

- **P1** Stepper V6 (C.9): langkah terkunci satu baris, aktif kartu sorot, selesai ringkas (T21).
- **P1** Data kasus: label 14 kiri membungkus, nilai mono `nowrap` rata kanan; bila tidak muat, nilai turun ke baris kedua rata kanan (pola `.hasil-baris`) (T22). Tanggal ditulis "16 Feb 2026".
- **P1** Narasi di kartu (bukan lead muted 17 px), maks 68ch, dipotong 5 baris + "Baca selengkapnya" di HP (T13).
- **P2** "Buka kalkulator" `.btn-sm` ikon `calc` di kartu data; progres langkah di kop.
- **P2** Petunjuk bertahap sebagai `.petunjuk` dengan nomor (1/3) dan ikon `lampu`.

### D.9 Simulasi: persiapan, CAT, kirim, hasil, ulas

**Persiapan.** **P1** `.tata`: form kl-7 (segmen format + sakelar), ringkasan kl-5 ("210 menit · ±100 soal · batas 60", aturan selama simulasi sebagai daftar ikon, riwayat 3 simulasi terakhir dengan sparkline). Segmen format dengan subjudul ("UKP komprehensif A" / "210 mnt · ±100 soal") (T31).

**CAT.** **P1** Konten dipusatkan maks 1200 (T03); bar atas tiga zona (kiri "Soal 37/100 · A2" + "Tersimpan 10.42.05", tengah timer display, kanan "Daftar soal" [HP] / "Kirim" sekunder [desktop]); panel nomor kanan 320 lengket dengan kop kelompok lengket di dalam panel dan legenda tetap di dasar panel; sel nomor 36 px. **P1** Bar bawah: Sebelumnya (sekunder) · Ragu-ragu (sekunder, `aria-pressed`, ikon `flag`) · Berikutnya (primer, kanan). **P2** Pengisian sel nomor berubah warna 120 ms (tanpa gerak di timer).

**Kirim.** **P1** Dialog konfirmasi berisiko (C.11) dengan pita stat mini Terjawab/Kosong/Ragu (T33).

**Hasil.** **P1** Kartu skor sorot: skor display + stempel (MEMENUHI BATAS 60 / BELUM) + kalimat + tiga aksi (primer "Ulas yang salah (23)", sekunder "Tambah ke kartu", hantu "Buat rencana dari hasil ini"). **P1** Per kelompok: `.viz-bar` — label dan angka sebaris di atas trek, trek 12 px dengan penanda acuan 60 putus-putus, meta tempo di bawah 12 px (dua baris per butir, bukan tiga) (T19). **P1** Peta topik: sel rata kiri, kode + skor mono 600 bernada, judul topik `--ink` 12 px maks 2 baris dengan elipsis (judul lengkap di `title`/tooltip), latar `--*-soft` dan garis kiri 3 px pita (bukan teks merah seluruhnya) (T18). **P2** Heatmap kelompok × jenis soal di kl-7, rapor tren di kl-5.

**Ulas.** **P1** `.tabs` (Semua salah · Ragu · per kelompok) + daftar kartu soal ringkas (kode, stem 2 baris, pill jawaban Anda/kunci) yang dapat dibuka menjadi pembahasan penuh.

### D.10 Kalkulator

```
≥ 1280: input kl-7 | hasil kl-5 lengket
┌──────────────────────────────────────────┬──────────────────────────────────┐
│ Kalkulator › A2                          │ SANKSI BUNGA                     │
│ Sanksi bunga KUP                         │ Rp606.000          (display)     │
│ Bunga = pokok × tarif KMK … (lead 2 bar.)│ Jumlah bulan                  5  │
│ Dasar pengenaan [select ▾]               │ Tarif per bulan           1,01%  │
│ Pokok  [Rp |        12.000.000]          │ Faktor uplift             5,00%  │
│ Jatuh tempo [date]  Minggu, 15 Feb 2026  │ Pokok + bunga      Rp12.606.000  │
│ Tanggal bayar [date] Jumat, 3 Jul 2026   │ ▸ Jejak hitung (terbuka)         │
│ Tarif acuan (%) [        ] kosong = KMK  │ Ps. 9(2a) UU KUP · status per …  │
│ Mode "Tebak dulu"                (  o)   │ [Salin hasil] [Jadikan soal]     │
└──────────────────────────────────────────┴──────────────────────────────────┘
```

- **P1** Dua kolom ≥ 1280 dengan hasil lengket (T29); di < 1280 hasil langsung di bawah form dengan ringkasan nilai utama lengket di dasar layar HP (`.sticky-actions` berisi "Hasil: Rp606.000 ›" yang menggulir ke kartu hasil).
- **P1** Input uang `.input-grup` (imbuhan "Rp", mono rata kanan); persen dengan imbuhan "%"; form 2 kolom di ≥ 640 untuk pasangan tanggal.
- **P1** Tanggal dengan bantu berformat Indonesia (T28).
- **P1** Istilah Indonesia: "Faktor uplift" (bukan "Uplift factor") — catatan untuk pemilik data kalkulator.
- **P2** Nilai hasil berganti tanpa gerak; latar baris yang berubah disorot `--highlight` 15% lalu memudar 400 ms (sekali).
- **P2** Daftar kalkulator: `.card-grid.dua.rata` per kategori dengan ikon dan kode kelompok di tab indeks.

### D.11 Rencana

- **P1** `.tata`: parameter + ringkasan jam (kl-4 lengket: tanggal, tingkat, menit; pita "Hari tersisa · Tersedia · Perlu") | garis waktu (kl-8) — sesuai layar 6 §7.
- **P1** Banner "Rencana padat" versi C.18; tiga aksi `.btn-sm` sejajar (T25).
- **P1** Tugas mingguan: baris checklist di dalam satu kartu per minggu (bukan kotak per tugas) — kotak centang V6, judul 15, meta mono 12 (hari · menit), ikon jenis 16 (topik `book`, simulasi `sim`, logistik `plan`, ulang `repeat`), tombol ikon `chevron-kanan` "Buka" **di dalam** baris (T26). Penanda jenis tetap garis kiri 3 px pada baris.
- **P1** Kop minggu: "Minggu 1 · 29 Okt–1 Nov" mono 12 + pill nila "Minggu ini" (tidak membungkus).
- **P2** Mencentang: centang membesar 160 ms, teks dicoret, bar progres total bergerak (400 ms), hitungan "4 dari 65" menghitung naik.
- **P2** Minggu lampau dilipat (`details.lipat`) dengan ringkasan "5/7 selesai".
- **P3** Tombol pengingat .ics di kartu parameter (ikon `bell`).

### D.12 Kemajuan (dan Laporan)

- **P1** `.tabs` menggantikan chip (T09).
- **P1** Peta penguasaan: sel kosong tanpa tanda "–" (hanya garis rambut putus-putus `--line`), sel bernilai dengan latar `--*-soft` + angka bernada 600; di atas peta satu kalimat status "2 dari 45 topik sudah dinilai · butuh 8 soal per topik" + bar sampel (T18).
- **P1** Daftar topik terlemah: tautan judul tanpa garis bawah (hover baru bergaris), bar dengan acuan 60, tombol "Latih 10 terlemah" primer.
- **P2** ≥ 1280: peta kl-8 + kartu ringkasan kl-4 (topik dinilai, rata-rata, kelompok terlemah, tren 4 minggu sparkline).
- **P2** Laporan mingguan: tetap gaya kuitansi; daftar laporan lama sebagai `.row-link` dengan tanggal mono dan pill akurasi.

### D.13 Peta formulir

- **P1** Kartu formulir `.card-grid.dua.rata` (tinggi seragam, `.card-foot` menempel di dasar berisi pill kode kelompok + "9 bagian · 40 baris" + pill "perlu cek" ikon `setengah`) (T23); judul 17/600 maks 2 baris; kode formulir (1770, 1111) di tab indeks kiri.
- **P1** Cari baris: `.input-grup` dengan ikon `search` di kiri, `kbd` "/" di kanan (desktop), hitungan hasil langsung.
- **P2** Filter `.chip-row` per kelompok (A1–C10); kop bagian formulir lengket di bawah topbar saat menggulir baris.

### D.14 Lembar angka

- **P1** Kolom Nilai: sans 15/600 (bukan mono) dengan angka di dalamnya tabular (T15); kolom Dasar · Berlaku mono 12 `--muted` tetap.
- **P1** Kolom Kartu: `.icon-btn.sm` `tambah` + tooltip; kepala kolom sejajar bawah (T24).
- **P1** Aksi kop: primer "Semua jadi kartu (30)", sekunder "Cetak" (ikon `print`), hantu "Salin teks" (ikon `copy`); pemilih kelompok → `.tabs` (A1–A5) (T05).
- **P2** Kepala tabel lengket ke halaman (`.tabel-wrap.bebas`); baris yang ditambahkan memperoleh pill ok "di dek".

### D.15 Referensi

- **P1** `.tabs` (T09); kolom saring `.input-grup` ikon `saring` + hitungan "12 dari 48 peraturan".
- **P1** Kepala peraturan: nomor UU sebagai eyebrow mono 13 ("UU 7/1983 S.T.D.T.D. UU 7/2021"), judul sans 17/600 ("Pajak Penghasilan (UU PPh)"), pill ok "berlaku" + "1 Jan 2022" + kode kelompok (T15).
- **P1** Daftar pasal: `dl` dua kolom (pasal mono 13, lebar 9rem | uraian 14); di HP bertumpuk.
- **P2** ≥ 1280 panel kanan: daftar isi lengket (daftar UU/PMK) dengan penanda aktif; tombol "Kembali ke atas" (ikon `chevron-bawah` diputar) muncul setelah 2 layar (T38).

### D.16 Info ujian

- **P1** Daftar isi dalam halaman: HP `.chip-row` jangkar di bawah kop; ≥ 1280 panel kanan lengket (Rezim · Format · Cakupan izin · Jadwal · Pendaftaran · Perangkat · Transisi USKP) (T38).
- **P1** Kartu rezim berlaku (sorot): paragraf maks 68ch dipecah menjadi `dl` fakta kunci (Penyelenggara · Bentuk · Durasi · Batas lulus · SKK) + satu paragraf.
- **P1** Tingkat A/B/C: `.card-grid.tiga` di ≥ 1280 dengan `dl` (Cakupan · Izin · Jam belajar) dan garis tingkat; tidak ada paragraf `--muted` 13 px untuk informasi inti.
- **P2** Jadwal sebagai stepper horizontal (pendaftaran → ujian → hasil) dengan tanggal mono.

### D.17 Pengaturan

- **P1** Sakelar V6 untuk semua opsi boolean (T07); segmen tema dengan ikon `sun`/`bulan`/`sim` ("Ikut sistem").
- **P1** ≥ 1024 dua kolom dalam `.tata`: navigasi jangkar `.k-3` lengket (Target · Tampilan dan belajar · Tutor · Pengingat · Data) dengan penanda aktif bergaris seperti sidebar | kartu-kartu `.k-9`.
- **P1** Setiap perubahan menyimpan otomatis + toast "Tersimpan" (tanpa tombol simpan).
- **P1** "Zona data" (impor, ekspor, pindah perangkat, hapus semua) di kartu terpisah paling bawah; hapus = `.btn-danger` dengan dialog konfirmasi berisiko.
- **P2** Pratinjau tema langsung (tanpa muat ulang).

### D.18 Onboarding, Bukti Sesi, Kartu Hadir

- **P1** Opsi onboarding = kartu radio: indikator radio 20 px di kiri, judul 16/600, deskripsi 13 `--muted`; terpilih garis 2 px `--primary` (inset) + radio terisi + latar `--primary-soft` (T37).
- **P1** Stepper horizontal "Langkah 2 dari 5" (C.9); kaki lengket di HP: "Kembali" sekunder (lebar otomatis) + "Lanjut" primer (`flex: 1`); desktop kartu tengah maks 560.
- **P1** Kartu Hadir bulanan: hari kosong tanpa bingkai (hanya angka `--muted`), HADIR berlatar `--ok-soft` + stempel mini, hari ini bercincin `--primary`, hari mendatang `--ink-faint` (T36).
- **P2** Bukti Sesi: baris kuitansi muncul bertahap 40 ms per baris (maks 6 baris, total ≤ 240 ms) lalu stempel HADIR "tekan" 420 ms.

### D.19 Palet cari, lembar "Lainnya", drawer Tutor

- **P1** Palet cari: dialog di sepertiga atas, lebar 640, input 52 px dengan ikon `search`, hasil berkelompok (eyebrow per jenis), baris aktif latar `--surface-3` + garis kiri 3 px `--primary`, kaki petunjuk `kbd` (↑ ↓ Enter Esc); kosong → `.kosong.ringkas` "Tidak ada hasil untuk …".
- **P1** "Lainnya": `.menu-grid` dua kolom, item 52 px dengan ikon 20 + label 14/500; halaman saat ini `aria-current` dengan garis kiri 3 px + latar `--primary-soft`.
- **P2** Drawer Tutor ≥ 1024: panel kanan 380 px non-modal (`--z-laci`), garis kiri `--line-strong`; label "AI" sebagai pill nila.

---

### D.20 Cakupan materi resmi (`#cakupan/A|B|C`)

Daftar periksa butir dari dokumen cakupan materi KLC/BPPK (`UKP.cakupanResmi`, `js/data/cakupan.js`); rute anak Belajar (tombol Kembali tampil, nav Belajar aktif).

```
.page (baca 760)
Belajar › Cakupan materi resmi
DOKUMEN KLC/BPPK · DIBAGIKAN PESERTA OKT 2026
Cakupan materi resmi · Tingkat C                      ← h1 diperbarui di tempat saat tab berganti
Lead ringkas 3 baris (sumber + "soal tidak keluar dari daftar ini")  [BPPK / KLC Kemenkeu] [◐ perlu cek]
[Tingkat A 99] [Tingkat B 135] [Tingkat C 125]        ← .tabs; < 400 px "Tingkat " disembunyikan visual (tetap dibacakan)
RINGKASAN TINGKAT C
┌ MATA UJIAN 9 ┬ BUTIR 125 ┬ SUDAH DIPELAJARI 2 ┬ BELUM TERCAKUP 1 ┐   ← .pita-stat + UKP.viz.statTile
Butir sudah dipelajari ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2 dari 124      ← UKP.c.progress (maks = butir tercakup)
● sudah dipelajari  ○ belum dipelajari  ◇ belum tercakup                 ← .cakupan-legenda + definisi 1 paragraf
BUTIR PER MATA UJIAN
[cari: Cari butir atau topik…]   Hanya yang belum dipelajari [ ◯]   125 butir dalam 9 mata ujian.  Tutup semua
▾ 1. Akuntansi Perpajakan — modul B7      [14 butir] [0/14 dipelajari]   ← details.lipat.cakupan-mu
   Modul aplikasi: B7 Akuntansi Perpajakan
   Subjek: Badan Dalam Negeri
   1.  Jurnal hak dan kewajiban perpajakan (…)                            ← nomor tercetak (1. · a. · 1))
       ○ belum dipelajari  [materi sebagian]
       [B7.1 Jurnal hak dan…] [C9.3 Kredit pajak luar…]                   ← a.chip.chip-topik → #topik/<id>
       catatan celah (tiny muted)
▸ Tentang dokumen dan kejanggalan cetak
```

- **P1** Status butir daun dihitung dari progres: topik **disentuh** = ditandai dibaca, cek tuntas, atau pernah dijawab ≥ 1 soal; **sudah** = semua topik terpeta disentuh dan cakupan bukan `belum`; **belum tercakup** = cakupan `belum`; selain itu **belum**. Definisi ini tertulis di halaman dan dipakai ulang (`UKP.cakupan`) oleh kartu peta materi, indeks balik topik, dan Info ujian.
- **P1** Titik status tidak hanya warna: isi `--ok` (sudah), cincin `--muted` (belum), belah ketupat `--warn` (belum tercakup), selalu berteks. Warna paksa: `CanvasText`.
- **P1** Saringan (cari teks, sakelar "Hanya yang belum dipelajari") hanya menggambar ulang daftar; nilainya disimpan di params rute (`q`, `belum`) sehingga render ulang dan Kembali mempertahankannya. Jumlah hasil diumumkan lewat `role="status"`. Kecocokan disorot `<mark>`; akordeon yang berisi hasil terbuka otomatis.
- **P1** Akordeon mata ujian terbuka bawaan di ≥ 1024 px, tertutup di HP; "Buka semua/Tutup semua" sebagai tombol hantu. Isi tidak dianimasikan selain pudar 120 ms bawaan `details.lipat` (mati saat gerak dikurangi).
- **P1** Tanpa gulir horizontal 320–1280: nomor kolom tetap `--cakupan-nomor` (2rem; 1,75rem < 600), anak menjorok 12 px + garis halus, chip membungkus.
- **P2** Titik masuk: kartu "Cakupan materi resmi BPPK" (`.kartu-cakupan`) di atas kartu kelompok peta materi; `details.lipat.cakupan-topik` "Butir cakupan resmi untuk topik ini" di halaman topik (dikelompokkan per tingkat, tautan ke `#cakupan/X`); bagian "Cakupan materi resmi" di Info ujian (kartu per tingkat).

## E. Interaktivitas

| Interaksi | Pemicu | Properti | Durasi / easing | Implementasi |
|---|---|---|---|---|
| Tekan 1 px | `:active` tombol, chip, kartu klik, opsi | `transform: translateY(1px)` + tepi bawah rata | 80 ms `--ease-keluar` | CSS (C.23) |
| Hover garis | hover kartu, tombol, baris, input | warna garis/latar | 120 ms `--ease-standar` | CSS |
| Chip terpilih menggeser isi | `aria-pressed="true"` | lebar `::before` 0 → 14 px + opasitas | 160 ms | CSS (C.23) |
| Segmen terpilih | `aria-pressed`/`aria-checked` | latar, garis, penanda bawah | 160 ms | CSS |
| Sakelar | `:checked` | jempol `translateX(20px)`, latar trek | 160 ms | CSS |
| Tab | `aria-selected` | garis bawah `scaleX(0 → 1)` | 160 ms | CSS |
| Akordeon | `[open]` | chevron `rotate(90deg)`; isi pudar | 160 / 120 ms | CSS |
| Bar progres muncul | elemen baru dirender | `width` 0 → `--p%` | 400 ms `--ease-keluar` | CSS `@starting-style` |
| Cincin | elemen baru / nilai berubah | `stroke-dashoffset` 100 → `100 − p` | 400 ms | CSS `@starting-style` + transisi |
| Angka stat hitung naik | pertama kali terlihat | teks angka | 400 ms ease-out kubik | JS `UKP.hitungNaik` |
| Kartu soal masuk | soal baru (`soal.js` memasang `data-baru` hanya pada render pertama soal itu, bukan saat render ulang setelah Periksa) | `opacity` 0 → 1, `translateY(8px → 0)` | 160 ms | CSS keyframes |
| Umpan benar/salah | setelah Periksa | garis kiri `scaleY(0 → 1)`; ikon status tergambar (`stroke-dashoffset`) | 160 ms; ikon 200 ms tunda 60 ms | CSS |
| Toast | muncul / hilang | naik 8 px + pudar / pudar | 200 / 120 ms | CSS + kelas `.keluar` |
| Transisi antar-view | ganti rute | `opacity` 0 → 1 pada `main > .page` | 120 ms `--ease-standar` | router set `main[data-masuk]` |
| Dialog / lembar | `showModal()` | pudar + skala .98 / naik dari 100% | 160 / 200 ms | CSS |
| Kerangka → isi | data siap | pudar | 120 ms | CSS (kerangka sendiri statis) |
| Baris hover | hover `.row-link` | chevron `translateX(2px)` | 120 ms | CSS (C.21) |
| Salin | klik Salin | ikon `copy` → `check`, label "Tersalin" 1,5 s | instan | JS + `aria-live` |
| Judul ringkas topbar | `h1` keluar layar | `opacity` | 120 ms | IntersectionObserver (P2) |
| Stempel diraih | capaian | skala 1,15 → 1 + pudar | 420 ms | putaran sebelumnya |

**Tidak dianimasikan:** timer dan perubahan warnanya, nilai kalkulator (hanya sorot latar sekali), grid nomor (hanya warna), fokus, teks yang sedang dibaca, apa pun yang berulang.

**CSS gerak** (letakkan setelah komponen):

```css
@keyframes v6-pudar { from { opacity: 0; } to { opacity: 1; } }
@keyframes v6-naik { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes v6-garis { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes v6-gambar { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
@keyframes v6-toast { from { opacity: 0; transform: translate(-50%, 8px); } to { opacity: 1; transform: translate(-50%, 0); } }
@keyframes v6-dialog { from { opacity: 0; transform: translateY(4px) scale(.98); } to { opacity: 1; transform: none; } }
@keyframes v6-sheet { from { transform: translateY(100%); } to { transform: none; } }
@keyframes v6-sorot { from { background-color: color-mix(in srgb, var(--highlight) 15%, transparent); } to { background-color: transparent; } }

main[data-masuk] > .page { animation: v6-pudar var(--dur-cepat) var(--ease-standar) both; }
.soal[data-baru] { animation: v6-naik var(--dur-sedang) var(--ease-keluar) both; }
.umpan::before { animation: v6-garis var(--dur-sedang) var(--ease-keluar) both; }
.umpan .status svg :is(path, polyline, circle) { stroke-dasharray: 60; animation: v6-gambar var(--dur-lambat) var(--ease-keluar) 60ms both; }
.toast { animation: v6-toast var(--dur-lambat) var(--ease-keluar) both; }
.toast.keluar { opacity: 0; transition: opacity var(--dur-cepat) var(--ease-masuk); animation: none; }
dialog[open]:not(.sheet) { animation: v6-dialog var(--dur-sedang) var(--ease-keluar); }
dialog.sheet[open] { animation: v6-sheet var(--dur-lambat) var(--ease-keluar); }
dialog[open]::backdrop { animation: v6-pudar var(--dur-sedang) var(--ease-standar); }
[data-berubah] { animation: v6-sorot var(--dur-angka) var(--ease-standar); }
:is(.progress-line > span, .viz-isi) { transition: width var(--dur-angka) var(--ease-keluar); }
.ring .fill[style*="--p"] { transition: stroke-dashoffset var(--dur-angka) var(--ease-keluar); }
@starting-style {
  :is(.progress-line > span, .viz-isi) { width: 0; }
  .ring .fill[style*="--p"] { stroke-dashoffset: 100; }
}

/* gerak dikurangi: satu sakelar global (sistem atau Pengaturan › Kurangi gerak) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 1ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; transition-duration: 1ms !important; transition-delay: 0ms !important; scroll-behavior: auto !important; }
  :is(.btn, .chip, .card, .opsi label):active { transform: none !important; }
}
:root[data-gerak="kurang"] *, :root[data-gerak="kurang"] *::before, :root[data-gerak="kurang"] *::after { animation-duration: 1ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; transition-duration: 1ms !important; transition-delay: 0ms !important; scroll-behavior: auto !important; }
:root[data-gerak="kurang"] :is(.btn, .chip, .card, .opsi label):active { transform: none !important; }
```

Durasi 1 ms (bukan 0) dipilih agar `animationend`/`transitionend` tetap terpicu bagi JS yang menunggunya. Ikon status umpan: `UKP.icon('cek-lingkar')` dan `UKP.icon('x-lingkar')` memakai segmen terpanjang lingkaran r = 9 (keliling ±56,5 unit), sehingga `stroke-dasharray: 60` menutup seluruh garis setelah animasi selesai.

**JS (kontrak untuk ui-alat, `js/core.js`):**

```js
// gerak diizinkan?
UKP.gerakBoleh = () =>
  !matchMedia('(prefers-reduced-motion: reduce)').matches && document.documentElement.dataset.gerak !== 'kurang';

// angka menghitung naik 400 ms; teks akhir selalu tersedia untuk pembaca layar
UKP.hitungNaik = (el, target, { ms = 400, desimal = 0, akhiran = '' } = {}) => {
  const fmt = n => new Intl.NumberFormat('id-ID', { minimumFractionDigits: desimal, maximumFractionDigits: desimal }).format(n) + akhiran;
  const akhir = fmt(target);
  el.setAttribute('aria-label', akhir);
  if (!UKP.gerakBoleh() || !Number.isFinite(target) || target === 0 || el.dataset.sudah) { el.textContent = akhir; return; }
  el.dataset.sudah = '1';
  const t0 = performance.now();
  const langkah = t => {
    const p = Math.min(1, (t - t0) / ms);
    el.textContent = p < 1 ? fmt(target * (1 - Math.pow(1 - p, 3))) : akhir;
    if (p < 1) requestAnimationFrame(langkah);
  };
  requestAnimationFrame(langkah);
};
// pakai: <span class="nilai" role="text" data-hitung="74" data-akhiran="%">74%</span>
// jalankan sekali saat terlihat: IntersectionObserver({ threshold: .4 }) → UKP.hitungNaik(el, +el.dataset.hitung, { akhiran: el.dataset.akhiran || '' })

// router: tandai rute baru untuk pudar 120 ms (bukan setiap render ulang di rute yang sama)
// di UKP.go/render: if (ruteBerubah) { main.dataset.masuk = ''; main.addEventListener('animationend', () => delete main.dataset.masuk, { once: true }); }
```

Markup bar dan cincin harus memakai variabel agar `@starting-style` bekerja: `<span style="--p:38"></span>`, `<circle class="fill" r="15.9155" cx="18" cy="18" style="--p:38"></circle>`. Nilai `width` inline lama tetap tampil (tanpa animasi).

---

## F. Ikon

**Aturan.**
1. Kanvas 24 × 24, garis 1,75 px (`stroke-width="1.75"`, ubah dari 1,8 di `UKP.icon`), ujung dan sambungan bulat, tanpa isian (kecuali titik `more` dan `setengah`), radius sudut ≤ 2, area hidup 20 × 20 (padding 2).
2. Ukuran tampil: 24 (bar bawah, keadaan kosong ringkas), 20 (sidebar, topbar, tombol ikon, menu, banner), 18 (tombol md/lg), 16 (tombol sm, chip, tab, baris), 12 (pill). Pada 16 dan 12 px gunakan `stroke-width: 2` agar bobot optis setara.
3. Warna `currentColor`; ikon navigasi diam `--muted`, aktif `--primary`; ikon status mengikuti nada.
4. Ikon tidak pernah sendirian membawa makna: selalu berpasangan dengan teks, atau `aria-label` + tooltip untuk tombol ikon. Ikon dekoratif `aria-hidden="true"`.
5. Tanpa emoji; glyph data (✓ ✗ ◐ ▲ ▼) dirender sebagai ikon (`check`, `x`, `setengah`, `naik`, `turun`) dengan teks tersembunyi bila perlu (memperbaiki ◐ terpotong, T23).
6. Satu konsep satu ikon di seluruh situs (mis. "Tambah ke kartu" selalu `tambah`, dek selalu `dek`).

**Pemetaan pakai.**

| Tempat | Item → ikon |
|---|---|
| Sidebar | Hari Ini `home` · Rencana `plan` · Kemajuan `chart` · Belajar A/B/C `book` · Latih soal `pen` · Ulang kartu `repeat` · Studi kasus `kasus` · Simulasi ujian `sim` · Strategi PG `strategi` · Kalkulator `calc` · Referensi `ref` · Peta formulir `formulir` · Tutor AI `chat` · Info ujian `info` · Etika & Profesi `etika` · Pengaturan `settings` |
| Bar bawah | Hari Ini `home` · Belajar `book` · Latih `pen` · Ulang `repeat` · Lainnya `more` |
| Topbar | Kembali `back` · Cari `search` · Tutor `chat` · Tema `sun` / `bulan` |
| Aksi soal | Mulai `play` · Periksa `check` · Lanjut `chevron-kanan` · Sebelumnya `back` · Ragu-ragu `flag` · Petunjuk `lampu` · Tanya Tutor `chat` · Dengarkan `suara` |
| Aksi konten | Tambah ke kartu `tambah` · Dek `dek` · Lembar angka `lembar` · Salin `copy` · Cetak `print` · Pengingat `bell` · Unduh .ics/ekspor `unduh` · Impor `unggah` · Saring `saring` · Hapus `hapus` · Tautan resmi (JDIH) `keluar` · Tutup `x` |
| Status | Benar `cek-lingkar` · Kurang tepat `x-lingkar` · Perlu verifikasi `setengah` · Peringatan `peringatan` · Waktu/tempo `jam` · Terkunci `gembok` · Naik `naik` · Turun `turun` · Pintasan `papan-ketik` · Tampilkan `mata` · Atur ulang `atur-ulang` |
| Lipat | `chevron-kanan` (diputar 90° saat terbuka), `chevron-bawah` |

**Ikon baru** (tambahkan ke objek `I` di `js/core.js`; ikon lama tetap):

```js
'chevron-kanan': '<path d="M9 6l6 6-6 6"/>',
'chevron-bawah': '<path d="M6 9l6 6 6-6"/>',
tambah: '<path d="M12 5v14M5 12h14"/>',
'cek-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
'x-lingkar': '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
peringatan: '<path d="M12 4 3 19.5h18z"/><path d="M12 10v4.5M12 17v.5"/>',
jam: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
suara: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>',
lampu: '<path d="M9.5 17.5h5M10.5 20.5h3"/><path d="M12 3.5a5.5 5.5 0 0 0-3.2 10c.6.5 1 1.1 1 1.9v.6h4.4v-.6c0-.8.4-1.4 1-1.9A5.5 5.5 0 0 0 12 3.5z"/>',
keluar: '<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 13.5V20H4V6h6.5"/>',
unduh: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/>',
unggah: '<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 20h14"/>',
saring: '<path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/>',
hapus: '<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
dek: '<rect x="4" y="7" width="13" height="13" rx="1.5"/><path d="M8 4h10.5A1.5 1.5 0 0 1 20 5.5V16"/>',
bulan: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
gembok: '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
setengah: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
naik: '<path d="M4 16l5-5 4 4 7-7M15 8h5v5"/>',
turun: '<path d="M4 8l5 5 4-4 7 7M15 16h5v-5"/>',
'papan-ketik': '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><path d="M6 10h.5M9.5 10h.5M13 10h.5M16.5 10h.5M7 14h10"/>',
mata: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
'atur-ulang': '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4h4"/>',
```

`UKP.icon` menambahkan `class="ikon"` dan, untuk ukuran 16/12, kelas `ikon-kecil` (`.ikon-kecil { stroke-width: 2; }`).

---

## G. Tema gelap: penyesuaian khusus

1. **Tangga permukaan 4 tingkat:** `--bg` #0F1512 < `--surface` #161D19 < `--surface-2` #1E2622 < `--surface-3` #26302B. Semakin "dekat" ke pengguna semakin terang; inilah pengganti bayangan.
2. **Isian primer dipisah dari teks primer:** `--primary-fill` #5FBF9C untuk isian (tombol primer, sakelar aktif, bar, cincin), `--primary` #7ED3B4 untuk teks/tautan/ikon/garis. Hover tombol primer baru memakai #7ED3B4. Isian mint penuh maksimal satu per layar (T08).
3. **Segmen terpilih** terangkat ke `--surface-3` dengan penanda bawah primer, bukan isian mint.
4. **Latar lembut diredam:** `--ok-soft` #172A20, `--attn-soft` #2E1D1C, `--warn-soft` #2A2614 (sebelumnya #14301F, #3B1715, #3A2F0B). Banner gelap memakai `--surface` + garis kiri + ikon bernada (T25).
5. **Bobot display 600** (`--fw-display`) untuk angka besar mono agar tidak berpendar; teks badan tetap 400; tidak ada teks putih murni.
6. **Garis:** `--line` untuk struktur, `--line-strong` hanya kontrol (≥ 3:1). Zebra #1A221E; pemisah dalam kartu #222B27.
7. **Fokus kuning** #F5C542 tetap (11,4:1 terhadap latar). Cincin selalu ber-offset 2 px agar jatuh di atas latar, bukan di atas isian mint (kontras kuning vs mint hanya 1,4:1). Wadah besar (kartu flash) tidak menerima fokus programatik yang tampil sebagai cincin (T27).
8. **Toast dan tooltip terbalik terang** (#E7ECE9 dengan teks #0F1512) — satu-satunya permukaan terang di tema gelap, sehingga terbaca "melayang".
9. **Grafik:** `--viz-1` #3DA982, `--viz-2` #8C84E8 (satu keluarga dengan nila #A3AEEB), grid #252F2A; sel heatmap memakai latar lembut baru + angka bernada.
10. **Stempel:** latar transparan, garis 2 px `currentColor`; HADIR tetap miring −3° hanya pada ukuran besar.
11. **Kontrol bawaan:** `color-scheme: dark` agar ikon kalender/jam native terang; select memakai `--ikon-select` versi gelap.
12. `<meta name="theme-color">` #0F1512 (gelap) / #F3F5F4 (terang), diperbarui saat tema diganti manual.
13. `::selection` latar `--primary-soft`; batang gulir `scrollbar-color: var(--line-strong) transparent`.

---

## H. Aksesibilitas

- **Fokus terlihat:** semua kontrol memakai `:focus-visible` outline 2 px `--focus`, offset 2 px (−2 px di dalam wadah yang memotong). Tidak ada `outline: none` tanpa pengganti. `scroll-padding-top` diperbarui ke `calc(var(--topbar-h) + 4px)` (dan + tinggi bar sesi/ujian) agar fokus tidak tertutup elemen lengket (WCAG 2.4.11).
- **Kontras:** semua token teks ≥ 4,5:1 dan komponen ≥ 3:1 di dua tema (tabel B.6). Larangan: `--ink-faint` di atas `--surface-2` terang (4,18) — pakai `--muted`. Teks di atas isian primer memakai `--primary-ink` (8,2:1 / 8,3:1).
- **Target sentuh:** ≥ 44 × 44 lewat ukuran atau perluasan `::after`; jarak antar-target ≥ 8 px.
- **Bukan warna saja:** terpilih = bobot 600 + garis + ikon/penanda; status = pill berteks; heatmap = angka + legenda berteks; opsi diperiksa = pill "Kunci"/"Jawaban Anda" + ikon.
- **ARIA per komponen:**
  - Tab: `role="tablist"`, `role="tab"` + `aria-selected` + `aria-controls`, `role="tabpanel"` + `aria-labelledby`, roving `tabindex`, ← → Home End.
  - Sakelar: `<input type="checkbox" role="switch">` di dalam `<label>`; status dibacakan "aktif/nonaktif".
  - Segmen: `aria-pressed` (pola lama) atau `role="radiogroup"` + `role="radio"` + `aria-checked` dengan panah.
  - Chip filter: `aria-pressed`. Kartu radio onboarding: `role="radio"` di dalam `role="radiogroup"` berlabel.
  - Progres: `role="progressbar"` + `aria-valuemin/max/now` + `aria-valuetext` berbahasa Indonesia; cincin sama; stepper `<ol>` + `aria-current="step"`.
  - Toast `role="status"` (polite); "Waktu habis" tetap `role="alert"`.
  - Dialog: `aria-labelledby`, `aria-describedby`, fokus terkurung (bawaan `showModal`), kembali ke pemicu saat tutup.
  - Tooltip: `role="tooltip"` + `aria-describedby`; Esc menutup; dapat di-hover.
  - Kerangka: wadah `aria-busy="true"` + teks tersembunyi "Memuat …".
  - Hitung naik: `aria-label` nilai akhir sejak awal; animasi tidak diumumkan.
  - Tabel: `caption` atau `aria-label`, `th scope`, wadah gulir `role="region"` + `tabindex="0"` + label.
  - Tombol ikon: `aria-label` kata kerja ("Jadikan kartu: Tarif Pasal 17").
- **Gerak:** sakelar global §E untuk `prefers-reduced-motion` dan Pengaturan › Kurangi gerak; tidak ada kedipan > 3 kali/detik.
- **Reflow dan teks:** 320 px tanpa gulir horizontal (kecuali wilayah tabel yang dapat difokus); teks 200% tanpa terpotong (tanpa tinggi tetap pada wadah teks); `data-teks="besar"` 112%.
- **Mode warna paksa:** garis kartu, sakelar (jempol bergaris), penanda segmen, dan fokus tetap tampak (`@media (forced-colors: active)`: penanda aktif memakai `Highlight`, ikon mask memakai `CanvasText`).
- **Navigasi rute:** fokus ke `h1[tabindex="-1"]`, `document.title` "Judul · Konteks · Pelatih UKP", pengumuman `aria-live="polite"`, pemulihan posisi gulir.

---

## I. Jangan lakukan

1. Jangan memakai `box-shadow` berblur, gradien, kaca buram, atau `filter: drop-shadow` untuk elevasi.
2. Jangan menaruh lebih dari satu tombol primer berisi dalam satu layar (dialog dihitung terpisah).
3. Jangan memakai opasitas untuk keadaan nonaktif.
4. Jangan memakai stempel untuk status per baris atau metadata; stempel hanya untuk capaian dan putusan.
5. Jangan memakai chip sebagai tab, atau tab sebagai filter.
6. Jangan menaruh kotak berbingkai di dalam kartu untuk daftar biasa.
7. Jangan menulis kalimat atau judul dengan font mono; jangan memakai mono untuk nilai bertipe teks.
8. Jangan mengulang keadaan kosong per baris (cincin "–", sel "–" bertubi-tubi); satu keadaan kosong per bagian.
9. Jangan menganimasikan timer, fokus, teks yang sedang dibaca, atau apa pun secara berulang (termasuk shimmer, denyut, pemintal).
10. Jangan memakai durasi gerak di luar token, atau animasi properti tata letak selain lebar bar progres.
11. Jangan memakai warna nada tanpa teks atau ikon pendamping.
12. Jangan memakai `overflow-wrap: anywhere` pada label tombol/segmen (memecah kata); pakai `break-word`.
13. Jangan menampilkan format tanggal non-Indonesia tanpa pendamping berformat Indonesia.
14. Jangan menambah nilai warna, spasi, radius, atau durasi mentah di luar blok token.
15. Jangan memakai emoji, ikon dari set lain, atau ikon tanpa label teks/aksesibel.
16. Jangan memakai rata tengah untuk blok teks (kecuali isi kartu flash, angka sel, dan keadaan kosong ringkas di grafik).
17. Jangan menaruh tautan aksi di luar baris/kartu yang dikenainya (pola "Buka" terlepas).
18. Jangan menaruh informasi penting hanya di tooltip.
19. Jangan memindahkan fokus ke wadah besar yang lalu menampilkan cincin fokus tebal; fokuskan kontrol pertama.
20. Jangan mengubah urutan aksi antar-halaman (primer · sekunder · hantu; bahaya terpisah).

---

## J. Urutan implementasi dan kriteria penerimaan

**Gelombang 1 — P1 (paralel, berkas terpisah).**
- ui-css (`css/app.css`): token B.10; C.23 enam komponen; pill/stempel C.8; progres/stepper C.9; toast C.10; dialog C.11; tab C.12; akordeon C.13; kosong C.14; kerangka C.15; kbd C.17; banner C.18; stat C.19; umpan/opsi C.20; baris C.21; tata letak D.0; gerak §E; sidebar/topbar/bar bawah C.1.
- ui-alat (`js/core.js`, `js/app.js`, `js/views-alat.js`, `js/learn.js`, `js/viz.js`): `UKP.icon` (1,75 + ikon baru + kelas), `UKP.c.kop` (teks/aksi/meta/ringkas), `UKP.toast` beraksi, `UKP.dialog` head/body/foot, `UKP.c.tabs`, `UKP.gerakBoleh`, `UKP.hitungNaik`, router `data-masuk`, tooltip, sakelar `role="switch"`; halaman Kalkulator, Rencana, Formulir, Lembar, Referensi, Info, Pengaturan, palet cari, Lainnya sesuai D.
- ui-views (`js/views-home.js`, `js/views-belajar.js`, `js/soal.js`): Hari Ini, Peta materi, Kelompok, Topik, Latih, soal/umpan, Ulang, Studi kasus, Kemajuan, onboarding sesuai D (P1).

**Gelombang 2 — P2:** panel kanan dan daftar isi, hitung naik, cincin/bar beranimasi, judul ringkas topbar, sorot hasil kalkulator, kerangka di pemuatan lambat.

**Gelombang 3 — P3:** glosarium bertooltip, pengingat di Rencana, banner kontekstual tunggal.

**Kriteria penerimaan (diuji dengan `tools/shot.js`, 5 lebar × 2 tema):**
1. Tidak ada gulir horizontal di 320 px (`document.documentElement.scrollWidth ≤ 320`) pada semua rute.
2. Tidak ada `opacity: .5` pada keadaan nonaktif; tidak ada `box-shadow` berblur (`grep -n "box-shadow" css/app.css` hanya menunjukkan blur 0).
3. Setiap layar memuat ≤ 1 `.btn-primary` yang terlihat di atas lipatan (kecuali dialog).
4. Semua checkbox boolean di Latih, Simulasi, Kalkulator, Pengaturan tampil sebagai sakelar; semua subhalaman memakai `.tabs`.
5. Tidak ada `.stempel` di dalam `.list-rows` atau sel tabel; tidak ada `.ring[data-kosong]` lebih dari satu per bagian.
6. Kontras otomatis (axe atau skrip token) lolos AA di dua tema.
7. Dengan `prefers-reduced-motion: reduce` dan dengan `data-gerak="kurang"`, tidak ada animasi/transisi > 1 ms (uji `getAnimations()` kosong setelah 10 ms).
8. Semua alur utama dapat diselesaikan dengan papan ketik saja; fokus selalu terlihat dan tidak tertutup elemen lengket.
9. Teks 200% dan `data-teks="besar"` tidak memotong label tombol/segmen.
10. Tangkapan ulang menunjukkan perbaikan T01–T40 (lampirkan pasangan sebelum/sesudah untuk T02, T07, T08, T11, T12, T18, T21, T25, T29, T33).

---

## K. Lampiran: pemetaan kelas lama → V6

| Lama | V6 | Catatan |
|---|---|---|
| `.btn-text` | `.btn-ghost` | alias dipertahankan |
| `.btn-attn` | `.btn-danger` | alias dipertahankan; `.isi` untuk isian |
| `.icon-btn` 40 px | 44 px; `.icon-btn.sm` 36 (+ area 44) | |
| `.card.primer` | `.card.sorot` | alias dipertahankan |
| chip sebagai tab | `.tabs [role="tab"]` | Kemajuan, Referensi, Ulang, Lembar, Ulas |
| `.switch input` bawaan | sakelar bergaya + `role="switch"` | markup tetap |
| `.seg button[aria-pressed]` isian primer | terangkat + penanda bawah | markup tetap |
| `.stempel` per baris | `.pill[data-tone]` | stempel hanya capaian |
| `.tag-sebab` | `.pill[data-tone="warn"]` | kelas lama diberi gaya pill |
| `.umpan` garis atas | garis kiri `::before` + blok | |
| `.langkah` kartu | `.stepper > .langkah` + `.simpul` | |
| `.banner` latar lembut | latar permukaan + garis kiri + ikon | kecuali `attn` |
| `.ring[data-kosong]` per baris | satu `.kosong` per bagian | |
| `.page` 820 di ≥ 1024 | `.page` 760 / `.page.lebar` 1200 | + `.tata` 12 kolom |
| `--shadow-1/2` | `none` | |
| `dialog .dlg-body > .dlg-head` | `.dlg-head` + `.dlg-body` + `.dlg-foot` bersaudara | `UKP.dialog` |
| `.tabel tbody tr:nth-child(even)` `--surface-2` | `--zebra` | |
| `.progress-line > span` `width` inline | `style="--p:…"` | inline lama tetap jalan |
| `stroke-width="1.8"` | 1,75 | `UKP.icon` |
| `.toast` teks saja | + `.toast-aksi`, nada, ikon | `UKP.toast(teks, opsi)` |
