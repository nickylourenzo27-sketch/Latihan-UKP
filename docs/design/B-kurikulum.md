# Spesifikasi B — "Kertas Kerja": Situs Belajar UKP/USKP A, B, C (Lensa Kesetiaan Kurikulum dan Ujian)

Status 25 Oktober 2026. Dasar: `docs/research/01`–`04`. Target teknis: SPA vanilla HTML/CSS/JS, routing `location.hash`, tanpa backend, progres di IndexedDB + localStorage, Tutor AI lewat API chat platform hosting. Penanda **[BT]** = belum terverifikasi menurut laporan riset; di UI wajib tampil sebagai "perkiraan" atau "perlu verifikasi", bukan fakta.

## 1. Filosofi, lima prinsip, persona

**Filosofi.** Situs ini adalah *kertas kerja* calon konsultan pajak: setiap halaman memetakan satu-ke-satu ke dokumen ujian resmi (rilis cakupan materi UKP BPPK Okt 2026 dan lampiran kisi-kisi KP3SKP 2025–2026), setiap angka membawa pasal dan tanggal berlaku, dan setiap latihan meniru bentuk soal yang benar-benar diujikan (100% pilihan ganda 4 opsi sejak Des 2024). Tidak ada taksonomi buatan sendiri, tidak ada klaim yang belum diumumkan BPPK, tidak ada pembahasan tanpa dasar hukum.

1. **Silabus resmi adalah skema data.** Tingkat → kelompok materi (A 5, B 8, C 10; nama persis rilis BPPK) → sub-topik kisi-kisi KP3SKP → jenis soal → dasar hukum. Progres, filter, analitik, rencana, dan tutor memakai kode taksonomi yang sama (§5).
2. **Fidelitas ujian, bukan sekadar kuis.** Simulasi meniru CAT: satu soal per layar, grid nomor, "Ragu-ragu", timer tanpa jeda, umpan balik ditunda, ringkasan sebelum kirim, skor 0–100 vs batas 60. Dua format: USKP 40 soal/mata ujian dan UKP komprehensif 3–3,5 jam; jumlah soal UKP berlabel perkiraan **[BT]**.
3. **Bank soal berpembahasan adalah inti.** Pembahasan 4 blok (jawaban, penjelasan, dasar hukum + status tanggal, jebakan); materi, kartu, kalkulator, studi kasus semuanya mengelilingi dan menautkan ke soal.
4. **Tanggal berlaku di mana-mana.** Komponen `cite-hukum` wajib pada pembahasan, kartu, kalkulator, materi; ketentuan 2024–2026 (Coretax PMK 81/2024, PMK 15/2025, PER-11/PJ/2025, PP 20/2026, PMK 44/2026, PMK 55/2026, PMK 71/2026, KMK bunga bulanan) ditandai "menggantikan …" agar hafalan lama tidak lolos.
5. **Hemat perhatian profesional.** Satu tugas per layar di HP, sesi 10 menit yang bermakna, tanpa akun, tanpa nyawa/XP mencolok, data milik pengguna (ekspor/impor JSON), bahasa tutor yang presisi.

**Persona utama — P2 Staf pajak perusahaan** (25–35 th; wajib SKK + SKT mulai 1 Jan 2027; 30–60 menit/hari, HP; kuat PPh 21/PPN rutin, lemah KUP prosedural, PBB-P5L, pajak tangguhan; target B). **Sekunder — P1 Fresh graduate** (target A; butuh jalur terpandu, cek perangkat) dan **P3 Konsultan junior** (target C; butuh simulasi penuh, kalkulator 31E/DER/Pasal 24/BPT). **Transisi** — pemegang sertifikat USKP lama (diakui SKK ≤ 2 tahun) dan peserta "mengulang" yang nilainya hangus; keduanya masuk lewat jalur "Saya dari USKP".

## 2. Peta situs lengkap

| # | Halaman (rute) | Tujuan | Elemen kunci | Aksi utama | Kondisi kosong | Diakses dari |
|---|---|---|---|---|---|---|
| 1 | Onboarding `#/mulai` | Tetapkan tingkat, tanggal ujian, jam/hari dalam ≤ 3 layar, tanpa akun | Pilih A/B/C + 1 kalimat cakupan izin; tanggal UKP atau "belum tahu" (pilih periode terdekat dari kalender BPPK); target harian 10/20/30 mnt; jalur "Saya dari USKP"; opsi 5 soal diagnostik | "Susun rencana" | Selalu bisa dilewati; default A, 20 mnt | Kunjungan pertama; Pengaturan › Ubah tingkat |
| 2 | Beranda `#/` | Dasbor harian, bukan landing page | Chip tingkat + hitung mundur; kartu **Lanjutkan**; kartu **Hari ini** (kartu ulang jatuh tempo, tugas rencana, simulasi minggu ini, estimasi menit); cincin progres per kelompok materi; "Perlu perhatian" 3 kelompok terlemah; banner versi silabus + tanggal regulasi | Lanjutkan | "Belum ada aktivitas. Mulai 5 soal diagnostik atau buka peta materi." | Nav Beranda; akhir onboarding |
| 3 | Tingkat `#/tingkat/:A\|B\|C` | Peta resmi satu tingkat | Kelompok materi berurutan rilis BPPK dengan status; kartu **Format ujian** (durasi, PG, batas 60, jumlah soal "perkiraan"); cakupan izin; kartu terpisah "Ujian Profesi (bukan UKP)"; peta USKP lama bila jalur transisi | Buka kelompok materi | Tingkat belum dipilih → onboarding | Chip tingkat Beranda; nav Belajar |
| 4 | Kelompok materi `#/belajar/:tk/:mu` | Rumah satu mata ujian | Kisi-kisi resmi sebagai daftar topik bernomor sesuai lampiran; progres + tingkat penguasaan per topik; dasar hukum utama; panel "Apa yang berubah 2024–2026"; tombol Latihan 20 / Simulasi 40 soal / Dek kartu / Studi kasus | Lanjutkan topik berikutnya | Semua belum mulai → "Mulai dari topik 1 (±25 mnt)" | Tingkat; cincin Beranda; pencarian |
| 5 | Materi/topik `#/belajar/:tk/:mu/:topik` | Ringkasan 1–2 layar + cek pemahaman | Breadcrumb; chip "Diuji di A·B·C"; 3–7 poin inti; tabel angka; contoh hitung dalam kartu kalkulator mini; `cite-hukum`; "Jebakan umum"; 3–5 soal cek pemahaman; "Tandai tuntas" (otomatis bila ≥ 4/5) | Kerjakan cek pemahaman | Konten belum ditulis → tetap tampilkan kisi-kisi + dasar hukum + "Latihan soal topik ini" (tidak pernah kosong) | Kelompok materi; tautan "Baca ringkasan" dari pembahasan |
| 6 | Latihan — bank soal `#/latihan` | Menyusun sesi mode belajar | Chip filter: tingkat, kelompok, topik, jenis soal, kesulitan, status (belum pernah/salah/ragu/ditandai), "hanya ketentuan berlaku 2025+"; "128 soal cocok"; jumlah 5/10/20/40; acak/berurutan | Mulai sesi | "Tidak ada soal untuk kombinasi ini." [Hapus filter] | Nav Latihan; kelompok materi; peta kelemahan |
| 7 | Sesi soal `#/sesi/:id` | Latihan umpan balik instan | Kartu soal (§6.1); Periksa; panel 4 blok; Tambah ke kartu; Tanya tutor; Laporkan; progres sesi; antrean ulang soal salah di akhir sesi | Periksa → Lanjut | — | Latihan; materi; Beranda Lanjutkan |
| 8 | Ulang (flashcard) `#/ulang` | Hafalan terjadwal angka/pasal/tenggat | Jatuh tempo + baru; kartu depan/belakang + dasar hukum; Lupa/Ingat/(Mudah) dengan pratinjau interval; dek per kelompok; filter "hanya yang berubah 2025–2026" | Lihat jawaban → nilai | "Semua kartu sudah diulang. Besok: 14 kartu." [Pelajari 5 kartu baru] | Nav Ulang; Hari ini; Hasil "Tambahkan soal salah ke kartu" |
| 9 | Studi kasus `#/kasus`, `#/kasus/:id` | Hitung ujung-ke-ujung langkah demi langkah | Daftar kasus per kelompok; layar kasus: data → langkah bernomor → input angka pengguna → cek per langkah → kalkulator terhubung → pemetaan ke baris SPT | Mulai kasus | Belum ada kasus → "Sementara, latih soal jenis hitung kelompok ini" | Nav Lainnya; kelompok materi; materi |
| 10 | Simulasi — pra-ujian `#/simulasi/baru` | Pilih format dan aturan | Format UKP A/B/C, USKP per mata ujian, Kustom; ringkasan aturan 4 baris; slider jumlah soal UKP berlabel perkiraan; penalti (default tidak ada; opsi −0,5 **[BT]**); acak; "Jaga layar menyala"; daftar cek 3 butir ala hari ujian | Mulai simulasi | — | Nav Latihan › Simulasi; Rencana; Beranda |
| 11 | Simulasi — layar ujian `#/simulasi/:attempt` | Meniru CAT | Bar ujian (nomor, timer, Daftar soal); soal + 4 opsi; Sebelumnya / Ragu-ragu / Berikutnya; lembar grid nomor dengan legenda teks; nav aplikasi disembunyikan; autosave; dialog keluar | Berikutnya; Selesai | — | Pra-ujian; Beranda "Lanjutkan simulasi berjalan" |
| 12 | Ringkasan & hasil `#/hasil/:attempt` | Konfirmasi kirim, lalu evaluasi | Tabel status nomor; "Belum dijawab n · Ragu n"; dialog konfirmasi; **Hasil**: skor 0–100 besar, Lulus/Belum (≥ 60), benar/total, bar per kelompok materi, waktu/soal vs anggaran, Ulas semua/salah/ragu, Tambah ke kartu, Buat rencana | Kirim; Ulas yang salah | Tidak ada salah → "Semua benar. Coba waktu lebih ketat atau kelompok lain." | Layar ujian; riwayat di Statistik |
| 13 | Ulasan `#/hasil/:attempt/ulas` | Bedah tiap soal | Filter semua/salah/ragu/benar; jawaban Anda vs kunci; 4 blok; navigasi nomor; Tanya tutor | Soal berikutnya | — | Hasil |
| 14 | Kalkulator `#/kalkulator`, `#/kalkulator/:jenis` | Alat hitung ber-dasar hukum, mode belajar | Indeks 16 kalkulator per kelompok (§6.5); form satu kolom; hasil langsung + `<details>` langkah; blok dasar hukum + status + peringatan verifikasi; "Pakai di soal ini" | Hitung otomatis | — | Nav Lainnya; soal hitung; materi; studi kasus |
| 15 | Rencana `#/rencana` | Jadwal mingguan sampai hari H | Tanggal, jam/minggu, hari ringan; timeline minggu (daftar); tugas tercentang; "Susun ulang" bila tertinggal > 20%; indikator "Siap daftar" (2 simulasi ≥ 70) | Centang tugas hari ini | "Masukkan tanggal ujian untuk rencana mingguan. Belum punya? Pilih periode terdekat." | Onboarding; Beranda; Nav Lainnya |
| 16 | Statistik `#/statistik` | Diagnosis per kelompok/topik/jenis soal | Heatmap kelompok × jenis soal; bar terurut dari terlemah; akurasi 30 hari; waktu/soal; soal salah ≥ 2×; riwayat simulasi vs garis 60; "Perkiraan kesiapan" + disclaimer | Latih 10 soal terlemah | "Statistik tampil setelah 10 soal per kelompok. KUP: 4 lagi." | Nav Lainnya; Beranda |
| 17 | Log kesalahan `#/log` | Soal salah/ditandai/dilaporkan untuk diulang | Tab Salah / Ditandai / Dilaporkan; kelompok per topik; "Ulangi 10" | Ulangi | "Belum ada soal salah tercatat." | Statistik; Pengaturan |
| 18 | Glosarium `#/glosarium/:istilah?` | Istilah resmi (PKP, DPP, SPHP, SKPKB, NITKU…) | A–Z + pencarian; definisi 1–3 kalimat; pasal; "muncul di topik"; soal contoh | Cari | — | `<abbr>` di mana pun; Nav Lainnya |
| 19 | Indeks peraturan `#/peraturan/:id?` | Dasar hukum bertanggal, "apa yang berubah" | Daftar UU/PP/PMK/PER/KMK: status (berlaku/dicabut/diganti), tanggal berlaku, menggantikan↔digantikan, pasal kunci, kelompok materi, tag ✅/◐/BT; halaman regulasi: pasal yang diujikan, soal & kartu terkait; tabel KMK bunga bulanan yang dapat diperbarui | Buka pasal | — | `cite-hukum`; Nav Lainnya; pencarian |
| 20 | Peta formulir `#/formulir/:kode` | Paham SPT secara konseptual (kini diuji sebagai PG) | 1770/1770 S/1770 SS; 1771 + lampiran I–VI dan khusus 1A–8A; SPT Masa PPN; bukti potong BPA1/BP21/BPPU/BPNR: baris dapat diklik → isi, sumber angka, pasal, soal "baris-SPT" | Klik baris | — | Materi topik SPT; soal baris-SPT; studi kasus |
| 21 | Tutor AI (drawer + `#/tutor`) | Tanya dalam konteks | Panel samping/lembar bawah; chip konteks ("Soal KUP-08-0142"); jawaban berkutipan dari indeks peraturan; 3 saran pertanyaan; sisa kuota; "Tidak membantu" | Kirim | Offline/kuota habis → "Tutor tidak tersedia. Baca pembahasan dan ringkasan topik." | Panel pembahasan; materi; kalkulator; topbar (nonaktif saat simulasi) |
| 22 | Info ujian `#/info-ujian` | Fakta UKP/USKP, transisi, kesiapan teknis | Tab Format & nilai; Jadwal periode BPPK (diperbarui manual, bertanggal); Daftar via KLC/KemenkeuID; **Perangkat** (Core i5 gen-10/Ryzen 5 3000, RAM 8 GB, Win 10/11, SEB 1.0.2, Zoom perangkat kedua, masuk 30 mnt sebelum, telat > 15 mnt gugur); Transisi; FAQ; daftar cek tersimpan | Centang daftar cek | — | Nav Lainnya; Rencana H-7; onboarding |
| 23 | Ujian Profesi `#/profesi` | Kode Etik IKPI 2024 + PMK 55/2026 + standar praktik, di luar skor UKP | Topik, soal, kartu; label tetap "Bukan materi UKP — ujian asosiasi" | Latihan etika | — | Tingkat; Nav Lainnya |
| 24 | Soal tunggal `#/soal/:id` | Tautan dalam/bookmark | Soal + pembahasan + metadata | Latih topik ini | Tidak ditemukan → pencarian | Log; ulasan; tutor; URL |
| 25 | Pencarian `#/cari?q=` | Lintas soal, topik, istilah, peraturan, kalkulator | Palet (Ctrl/Cmd+K, ikon); hasil berkelompok; "pasal 7 kup" → regulasi; "ter" → kalkulator | Buka hasil | "Tidak ditemukan. Coba istilah resmi, mis. SKPKB." | Topbar; Nav Lainnya |
| 26 | Pengaturan `#/pengaturan` | Preferensi dan data | Tingkat aktif, tanggal ujian, target harian; tema; ukuran teks; kurangi gerak; pintasan; retensi SRS 0,85/0,90/0,95; batas harian; Tutor AI on/off; ekspor/impor/hapus data; versi silabus + log perubahan; lapor soal; disclaimer | Tersimpan otomatis | — | Nav Lainnya |

## 3. Navigasi

- **HP (< 600 px):** nav bar bawah 5 tujuan, ikon + label selalu tampil: **Beranda · Belajar · Latihan · Ulang · Lainnya**; tinggi 56 px + `env(safe-area-inset-bottom)`; badge angka pada Ulang. "Lainnya" membuka lembar bawah berisi Studi kasus, Kalkulator, Rencana, Statistik, Peraturan, Glosarium, Formulir, Info ujian, Ujian Profesi, Pengaturan. Saat simulasi aktif nav bawah diganti **bar ujian**.
- **Tablet (600–1023 px):** rail kiri 80 px dengan 9 tujuan utama; konten satu kolom.
- **Laptop (≥ 1024 px):** sidebar 264 px bergrup: *Belajar* (Beranda, Tingkat A/B/C sebagai pohon kelompok materi, Latihan, Ulang, Studi kasus, Simulasi), *Rujukan* (Kalkulator, Peraturan, Glosarium, Formulir, Info ujian, Ujian Profesi), *Saya* (Rencana, Statistik, Log, Pengaturan). Konten teks maks 760 px; kolom margin kanan 280 px untuk `cite-hukum` dan daftar nomor soal.
- **Topbar:** tombol pencarian (Ctrl/Cmd+K), tombol Tutor, chip tingkat aktif; di HP topbar menyusut saat gulir ke bawah.
- **Hierarki & breadcrumb:** Tingkat › Kelompok materi (nomor rilis BPPK) › Topik (nomor kisi-kisi) › Soal; breadcrumb tampil mulai level kelompok materi, di HP dipangkas ke dua level terakhir dengan "…" yang bisa ditekan. `aria-current="page"` pada tujuan aktif; urutan nav identik di semua halaman; tautan "Lewati ke konten" pertama dalam urutan fokus.
- **Pencarian:** indeks lokal (Lunr-like sederhana) atas judul topik, stem soal, istilah, nomor peraturan/pasal, nama kalkulator; sinonim resmi (mis. "bupot" → bukti potong, "TER" → tarif efektif rata-rata).

## 4. Alur pengguna utama

**A. Onboarding → rencana → sesi harian → review → simulasi → hari H**
1. Onboarding (≤ 90 detik): tingkat B, tanggal UKP (mis. periode Desember 2026), 20 mnt/hari → rencana otomatis: urutan 03 §6.2 (penyegaran A → Akuntansi Perpajakan → PPh Badan → Pot/Put & PPN lanjutan → PBB-P5L → simulasi), bobot waktu proporsional jumlah sub-topik × faktor kelemahan, 2 minggu terakhir khusus simulasi + ulasan. Opsional: 5 soal diagnostik (1 per kelompok A) mengisi analitik awal.
2. Sesi harian (Beranda › Hari ini, 20 mnt): 5 mnt kartu jatuh tempo → 8 mnt baca topik berikutnya dari rencana → 7 mnt 10 soal topik itu (mode belajar) → soal salah otomatis jadi kartu dan masuk Log.
3. Review (Jumat, 10 mnt): Log kesalahan minggu ini → "Ulangi 10" dengan varian angka → topik dengan ≥ 3 salah diberi saran "Baca ringkasan 2 mnt".
4. Simulasi (Sabtu, laptop): USKP 40 soal mata ujian yang sedang dipelajari; tiap 2–3 minggu UKP komprehensif tingkat target (durasi penuh). Hasil memperbarui peta kelemahan dan menyesuaikan bobot rencana ("Susun ulang" diusulkan, tidak otomatis).
5. H-14: rencana beralih ke mode "konsolidasi" (materi baru dihentikan; 2 simulasi UKP; ulasan). H-7: kartu Info ujian › daftar cek perangkat (SEB 1.0.2, Zoom, ruangan). H-1: pesan ringkas "Tidur cukup; besok masuk Zoom 30 menit lebih awal"; tidak ada tugas belajar berat. Hari H: Beranda hanya menampilkan daftar cek dan tautan KLC; setelah hari H: "Bagaimana hasilnya?" → lulus (tandai, tawarkan tingkat berikutnya/Ujian Profesi) atau belum (impor kelompok yang terasa lemah → rencana baru ke periode berikutnya).

**B. Mengulang satu mata ujian** (mis. PPh Badan): Tingkat B › kelompok 06 › tombol "Mode fokus" → Beranda hanya menampilkan kelompok itu; rencana 3 minggu: diagnostik 20 soal per sub-topik → topik dengan penguasaan < 70 saja → studi kasus 1771 + 31E → 3× simulasi USKP 40 soal/120 mnt → keluar mode fokus saat 2 simulasi ≥ 70 berturut.

**C. Hanya punya 10 menit** (tombol "10 menit" di Beranda dan nav Lainnya): sistem memilih otomatis: bila ada kartu jatuh tempo ≥ 10 → 10 kartu (≈ 4 mnt) + 5 soal topik terlemah (≈ 6 mnt); bila tidak → 8 soal campuran dari 2 topik terlemah; tanpa membaca materi; akhir sesi 1 baris ringkasan dan "Lanjutkan nanti" (sesi tersimpan). Semua di HP, satu tangan.

## 5. Model konten per kelompok materi

**Taksonomi resmi (kode tetap, nama sesuai rilis BPPK/lampiran KP3SKP).** Durasi USKP = durasi simulasi 40 soal per mata ujian.

| Kode | Kelompok materi | Diuji di | Sub-topik kisi-kisi (01 §3) | Durasi USKP | Contoh sub-topik |
|---|---|---|---|---|---|
| PPHOP | PPh Orang Pribadi dan SPT PPh OP | A, B, C | 10 | 120 mnt | subjek/objek, biaya, NPPN, kompensasi rugi, PTKP, tarif 17, kredit pajak, PPh 25 & OPPT, SPT 1770 |
| KUP | KUP, PPSP, dan Pengadilan Pajak | A, B, C | 11 | 90 mnt | NPWP/PKP, tenggat & pembetulan, pembukuan, pemeriksaan PMK 15/2025, STP/SKP, keberatan, sanksi, restitusi, PPSP, banding/gugatan/PK |
| POTPUT | PPh Pemotongan/Pemungutan | A, B, C | 4 blok (21/26, 22, 23 & 4(2), +15 & 26 di B/C) | 120 mnt | TER PP 58/2023, natura, pesangon, PPh 22 impor/bendahara, PPh 23 jasa, 4(2) final, bupot unifikasi |
| PPN | PPN dan SPT Masa PPN | A, B, C | 10 | 90 mnt | objek, PKP, saat/tempat terutang, faktur Coretax, DPP 11/12, PM tidak dapat dikreditkan, pemungut, restitusi |
| BM | Bea Meterai | A, B, C | 6 | 90 mnt (gabung PBB di USKP) | objek, > Rp5 juta, saat terutang, Rp10.000, e-meterai, pemeteraian kemudian, sanksi 100% |
| PPHBDN | PPh Badan dan SPT PPh Badan | B, C | 11 | 120 mnt | koreksi fiskal, penyusutan PMK 72/2023, 31E, kredit 22/23/24/25, fasilitas, PPh 25 badan, hubungan istimewa, 1771 |
| AKPJK | Akuntansi Perpajakan | B, C | 6 (+1 khusus C) | 120 mnt | jurnal potput & PPN, piutang, persediaan, aset tetap, pajak tangguhan PSAK 212, rekonsiliasi fiskal; C: merger/likuidasi, konstruksi, lembaga keuangan |
| PBB | PBB-P5L | B, C | 8 | 90 mnt | SPOP, NJOP/NJKP 40%/NJOPTKP 12 jt, hitung per sektor, SPPT/SKP/STP, keberatan, restitusi, bagi hasil |
| PPHBDN-INTL | PPh Badan transaksi internasional | C | 5 | 120 mnt (gabung PPh Badan) | laba BUT, branch profit tax 26(4), biaya kantor pusat, Pasal 24, afiliasi lintas negara/PMA **[BT rincian resmi]** |
| PJKINTL | Pajak Internasional | C | 9 | 120 mnt | P3B OECD/UN, BUT & time test, Pasal 24, Pasal 18 (DER/CFC), TP PMK 172/2023, MAP, APA, EoI, PPh 26 & DGT PMK 112/2025 |
| ETIKA | Ujian Profesi (bukan UKP) | — | 4 | 60 mnt (USKP lama) | Kode Etik IKPI 2024, PMK 55/2026 (6 larangan, PPL 20/30/45 SKP), standar praktik, SPM |

**Field per kelompok materi** (`data/mu/<kode>.json`): `kode`, `nama_resmi`, `diuji_di[]`, `sumber_silabus{dokumen, tanggal, tag}`, `tujuan` (2–3 kalimat kompetensi), `kisi_kisi[]` (nomor, judul, bobot_default, jenis_soal_dominan), `dasar_hukum[]` (id ke indeks), `apa_yang_berubah[]` (regulasi, berlaku, sebelum→sesudah), `topik[]` → tiap topik: `ringkasan_md` (≤ 2 layar), `tabel_angka[]`, `contoh_hitung[]` (terhubung kalkulator), `jebakan[]`, `cek_pemahaman[]` (3–5 id soal), `kartu[]`, `kasus[]`, `tips[]`, `glosarium[]`.

**Field per soal** (`data/soal/<kode>.json`, dimuat malas per kelompok):
```json
{"id":"KUP-08-0142","mu":"KUP","topik":8,"tingkat":["A","B","C"],"jenis":"hitung",
 "kesulitan":2,"stem":"…","opsi":{"A":"…","B":"…","C":"…","D":"…"},"kunci":"D",
 "pembahasan":{"inti":"…","langkah":["…"],"opsi_salah":{"A":"…","B":"…","C":"…"},"jebakan":"…"},
 "dasar_hukum":[{"id":"UU-KUP-25-9","pasal":"Pasal 25 ayat (9) UU KUP","berlaku":"2021-10-29","tag":"✅"}],
 "berlaku_sejak":"2021-10-29","kedaluwarsa":null,"menggantikan_soal":null,
 "variabel":{"skpkb":[50e6,120e6],"dibayar":[0.2,0.6]},"kasus_id":null,"formulir_ref":null,
 "sumber":"rekonstruksi dari kisi-kisi; bukan soal asli","versi":"2026-10-25"}
```
Jenis soal: `konsep`, `klasifikasi` (transaksi→pasal→tarif→final/tidak), `hitung`, `kasus` (vignette 2–4 soal berbagi data), `prosedur` (urutan/tenggat), `baris-spt` (angka dilaporkan di formulir/lampiran mana), `etika` (hanya ETIKA). `variabel` memungkinkan varian angka otomatis dengan kunci dihitung ulang oleh fungsi kalkulator yang sama.

**Pengukuran penguasaan per topik** (dihitung lokal, diperbarui tiap jawaban):
- `M = 0,5 × akurasi 30 hari (perlu ≥ 10 soal; < 10 → tampil "butuh n soal lagi") + 0,3 × rata-rata retrievability FSRS kartu topik + 0,2 × cek pemahaman tuntas`.
- Label: **Belum mulai** (tanpa data) · **Dikenali** (< 50) · **Terlatih** (50–69) · **Dikuasai** (70–84) · **Siap** (≥ 85, ≥ 20 soal, dan ≥ 5 soal `hitung` bila topik berjenis hitung). Tanpa aktivitas 21 hari → tanda "perlu disegarkan" (skor tidak diturunkan, hanya ditandai).
- Kelompok materi = rata-rata M tertimbang `bobot_default` kisi-kisi, dipadukan 40:60 dengan skor simulasi 40 soal terakhir bila ada. Tingkat = semua kelompok ≥ Terlatih **dan** 2 simulasi komprehensif berturut ≥ 70 → "Siap daftar" (bukan prediksi kelulusan; kalimat disclaimer tetap).

## 6. Mode belajar dan interaksi

**6.1 Kuis / sesi soal (mode belajar).** Kartu soal = `form` dengan `fieldset/legend` dan 4 radio berlabel A–D (tinggi baris ≥ 48 px, seluruh baris adalah label). Menilai hanya setelah "Periksa" (Enter), bukan saat opsi disentuh. Umpan balik di bawah opsi (`role="status"`, tidak menggeser soal) dengan **4 blok**: (1) status + 1 kalimat inti ("Kurang tepat. Jawaban Anda B; kunci D."), (2) penjelasan/langkah hitung, (3) `cite-hukum` (pasal, peraturan, "berlaku sejak", tag verifikasi, tautan indeks), (4) `<details>` "Mengapa opsi lain keliru" + "Jebakan umum". Aksi: Lanjut (primer), Tambah ke kartu (otomatis bila salah, bisa dibatalkan), Tanya tutor, Laporkan. Soal salah masuk antrean akhir sesi (varian angka bila ada `variabel`). Soal `kasus` menampilkan data kasus tetap di atas (lengket di desktop, lipat di HP). Soal `baris-spt` menampilkan cuplikan peta formulir setelah dijawab. Pintasan: A–D, Enter, F (tandai), ? (daftar). Ringkasan sesi: benar/total, waktu rata-rata vs anggaran 2,5 mnt, topik yang muncul, 1 saran.

**6.2 Flashcard (SRS).** Algoritme FSRS (difficulty/stability/retrievability) lokal; retensi target 0,90 (opsi 0,85/0,95). Default 2 tombol **Lupa / Ingat**, mode lanjutan 4 tombol; tiap tombol menampilkan interval ("10 mnt · 3 hari · 9 hari"). Batas: 10 kartu baru/hari (5–30), 150 ulangan/hari; > 100 jatuh tempo → tawaran "Sebar ke 3 hari". Sumber kartu: (a) kurasi per topik (tarif, tenggat, sanksi, lampiran SPT, pasal), (b) otomatis dari soal salah (stem diringkas → pertanyaan satu baris), (c) buatan pengguna (tahap 3). Setiap kartu membawa `cite-hukum` dan chip "menggantikan: …" bila angka berubah 2024–2026; dek "Perubahan 2025–2026" tersedia lintas kelompok. Sisi belakang `hidden` sampai dibalik; Space membalik, 1/2/3 menilai.

**6.3 Studi kasus langkah demi langkah.** Satu kasus = data + 5–9 langkah bernomor (mis. PPh OP 1770: neto → zakat → kompensasi → PTKP → PKP dibulatkan → tarif berlapis → kredit 21/23 → kurang bayar Pasal 29 → angsuran PPh 25). Tiap langkah: input angka (`inputmode="decimal"`, format id-ID) → cek toleransi ±Rp1.000/pembulatan → bila salah tampil petunjuk bertahap (rumus → angka parsial → jawaban). Tombol "Buka kalkulator" membuka kalkulator terkait terisi data kasus; "Pakai di langkah ini" menyalin hasil. Akhir kasus: pemetaan setiap angka ke baris formulir (1770/1771/SPT Masa PPN) dan 3 soal PG turunan. Daftar kasus MVP: PPh OP K/2 dengan zakat; PPh 21 TER setahun + Desember; sanksi bunga STP (KMK bulan berjalan); PPh 23 vs 4(2) klasifikasi; PPN PK–PM dengan PM sedan; PPh Badan 31E + rekonsiliasi; pajak tangguhan DTA/DTL; PBB-P5L perkebunan; BUT + branch profit tax; PPh 24 dua negara.

**6.4 Simulasi ujian.** Format:

| Format | Cakupan | Soal | Durasi | Skor | Catatan |
|---|---|---|---|---|---|
| UKP A | 5 kelompok | default 60 (40–120) **[BT]** | 180 mnt **[BT: 3–3,5 jam]** | 0–100, lulus ≥ 60 | distribusi proporsional sub-topik; label "perkiraan, jumlah resmi belum diumumkan BPPK" |
| UKP B | 8 kelompok (A+B) | default 80 **[BT]** | 210 mnt | idem | penyegaran A otomatis termasuk |
| UKP C | 10 kelompok | default 100 **[BT]** | 210 mnt | idem | — |
| USKP per mata ujian | 1 kelompok | 40 (tetap) | sesuai tabel §5 | 2,5 poin/soal, lulus ≥ 60 (24 benar) | penalti default 0; opsi −0,5/salah (laporan DDTC tingkat B, Agu 2025 **[BT]**) |
| Kustom | pilihan | 10–120 | 15–240 mnt | 0–100 | untuk latihan terjadwal |

Perilaku: satu soal per layar; bar atas `7/80`, timer `role="timer"` berbasis `Date.now()` sejak mulai (tahan tab latar/kunci layar), pengumuman `role="status"` pada 50%, 10, 5, 1 menit; tombol **Ragu-ragu** (`aria-pressed`); lembar **Daftar soal** grid 8 kolom dengan status (kosong/terisi/ragu) sebagai warna + ikon + teks legenda, dikelompokkan per kelompok materi pada UKP; navigasi bebas (opsi berurutan); tanpa pembahasan selama ujian, hanya "Tersimpan"; autosave tiap perubahan + 15 detik + `visibilitychange`; keluar → `<dialog>` modal "Lanjutkan ujian / Simpan dan keluar" (percobaan "Berjalan", waktu tetap berjalan); ringkasan sebelum kirim ("Belum dijawab 3 · Ragu 5 · Setelah dikirim, jawaban tidak bisa diubah"); waktu habis → kirim otomatis + `aria-live="assertive"`. Hasil: skor, status vs 60, per kelompok materi (nama resmi), waktu/soal vs anggaran, **ulasan 4 blok** dengan filter, "Tambahkan n soal salah ke kartu", "Buat rencana dari hasil ini". Fidelitas lain: layar penuh opsional, `Screen Wake Lock` opsional, tanpa jeda, tanpa kertas buram digital (sesuai larangan), kalkulator **tidak** tersedia di simulasi (hanya di mode belajar) — kecuali pengguna mengaktifkan "kalkulator dasar" dengan catatan bahwa ketersediaannya di CAT BPPK **[BT]**. Isian formulir SPT tidak disimulasikan (dihapus dari ujian sejak Des 2024); diganti soal `baris-spt` dan `kasus`. Tampilan CAT BPPK sebenarnya **[BT]** → tata letak diselaraskan setelah tangkapan layar Dummy UKP diverifikasi; tersedia mode "Latihan 40 soal tanpa batas waktu" sebagai alternatif aksesibilitas.

**6.5 Kalkulator** (semua: input berlabel + teks bantu, hasil langsung di `role="status"`, `<details>` langkah hitung, blok "Dasar hukum & asumsi" bertanggal, peringatan kuning bila angka ◐/BT, tombol "Pakai di soal ini", mode "sembunyikan langkah" untuk latihan kecepatan):

| Kalkulator | Input | Output | Dasar |
|---|---|---|---|
| PPh OP tahunan | neto/omzet, metode (pembukuan/NPPN %/UMKM), status PTKP, zakat, rugi, kredit 21/22/23/24, PPh 25 dibayar | PKP dibulatkan, PPh per lapisan, kurang/lebih bayar, angsuran PPh 25 tahun depan | Pasal 7, 17, 25, 28 UU PPh; PER-17/PJ/2015; PP 20/2026 |
| PPh 21 TER | bruto bulanan ×12 (+THR/bonus), status PTKP, iuran pensiun, NPWP ya/tidak | kategori A/B/C, PPh Jan–Nov per bulan, PPh Desember (Pasal 17 − akumulasi), ×120% tanpa NPWP | PP 58/2023; PMK 168/2023 |
| PPh 21 pesangon/pensiun | jumlah, tahun ke-n | tarif berlapis final 0/5/15/25% atau 0/5% | PP 68/2009 |
| PPh 22/23/26 klasifikasi | jenis transaksi, penerima (DN/LN, NPWP), nilai, P3B & DGT | pasal, tarif, PPh, final/kredit, bupot (BPPU/BPNR) | Pasal 22/23/26; PMK 141/2015; PMK 112/2025 |
| PPh 4(2) | objek (sewa, konstruksi + kualifikasi, bunga, undian, PHTB…) | tarif & PPh final | PP 34/2017, PP 9/2022, PP 34/2016 |
| PPN | harga jual, mewah ya/tidak, besaran tertentu | DPP 11/12, PPN 12%, PK–PM, kompensasi/restitusi | PMK 131/2024; PMK 11/2025 |
| Sanksi bunga KUP | pasal (8(2)/9(2a)/13(2)/13(3b)/19), tanggal mulai–selesai, pajak | bulan (dibulatkan ke atas, maks 24), tarif KMK bulan berjalan, bunga | KMK 488/2021 s.t.d.t.d. KMK 51/2026; tabel bulanan |
| Denda keberatan/banding | SKPKB, dibayar sebelum keberatan, hasil keputusan, banding ya/tidak | 30% / 60% × selisih | Pasal 25(9), 27(5d) |
| Timeline penagihan PPSP | tanggal SKP/STP | jatuh tempo +1 bln → teguran +7 hr → paksa +21 hr → sita 2×24 jam → pengumuman +14 → lelang +14 | UU PPSP; PMK 61/2023 |
| Denda SPT & tenggat | jenis SPT, tanggal lapor | tenggat (15/20/akhir bulan/31 Mar/30 Apr), denda 100 rb/500 rb/1 jt | Pasal 3, 7, 9 UU KUP; PMK 81/2024 |
| PPh Badan & 31E | peredaran bruto, PKP, kredit, PPh 25 | PKP fasilitas 11% + sisa 22%, kurang bayar, PPh 25 | Pasal 17, 31E, 25 |
| Penyusutan/amortisasi | kelompok, harga, bulan perolehan, metode | tabel per tahun GL/SM, beda temporer vs komersial | Pasal 11/11A; PMK 72/2023 |
| Pajak tangguhan | beda temporer per pos, tarif 22% | DTA/DTL, beban/manfaat pajak tangguhan, jurnal | PSAK 212 |
| DER 4:1 | utang & modal rata-rata, biaya pinjaman | biaya pinjaman diakui, koreksi | PMK 169/2015 |
| PPh 24 per negara | neto DN, neto & pajak per negara | batas per negara, kredit, PPh masih harus dibayar | PMK 192/2018 |
| BUT & branch profit tax | PKP BUT, P3B, ditanam kembali | PPh badan, BPT 20%/P3B/0 | Pasal 26(4); PMK 14/2011 |
| PBB-P5L / PBB-P2 / BPHTB / Bea Meterai | NJOP, NJOPTKP, NJKP, tarif; NPOP; jenis dokumen & nilai | PBB; BPHTB 5% × (NPOP − NPOPTKP); terutang/tidak, Rp10.000, sanksi 100% | UU PBB, PMK 234/2022; UU 1/2022; UU 10/2020 |

**6.6 Tutor AI.** Muncul sebagai tombol sekunder di: panel pembahasan ("Tanya tutor tentang soal ini"), materi ("Jelaskan dengan contoh lain"), kalkulator ("Mengapa hasilnya begini?"), studi kasus (saat langkah salah 2×), dan topbar (global); **tidak pernah** selama simulasi. Konteks yang dikirim (ditampilkan ke pengguna sebagai chip, dapat dihapus): tingkat & kelompok materi, teks soal + opsi + kunci + pembahasan + `dasar_hukum`, jawaban pengguna, ringkasan topik, cuplikan indeks peraturan yang relevan, versi silabus; opsional (opt-in) 3 kesalahan terakhir pada topik yang sama. Tanpa data pribadi. Instruksi sistem: jawab dalam Bahasa Indonesia baku ≤ 200 kata, kutip pasal hanya dari konteks/indeks yang diberikan, bila tidak ada → "Tidak ada di materi; cek teks peraturan di JDIH", jangan nyatakan jumlah soal/format UKP di luar fakta berlabel, jangan beri nasihat untuk kasus nyata, akhiri dengan 1 pertanyaan balik atau 1 soal mini. Batasan produk: kuota 20 pertanyaan/hari (ditampilkan), hanya daring, jawaban diberi label "Dihasilkan AI — rujukan pasal diverifikasi ke indeks (ikon ✓ bila id pasal cocok)", tombol "Tidak membantu" mencatat ke Log untuk kurasi, dapat dimatikan di Pengaturan, fallback tanpa AI selalu ada (pembahasan 4 blok).

## 7. Progres, motivasi, analitik

- **Progres bertingkat:** topik (M + label §5) → kelompok materi (cincin: % topik ≥ Terlatih + akurasi 30 hari) → tingkat (bar per kelompok + status "Siap daftar"). Semua nama memakai kode/nama resmi agar langsung dipetakan ke cakupan BPPK.
- **Target harian** dalam menit (dari onboarding), cincin kecil di Beranda; tercapai bila ≥ 1 aktivitas bermakna (10 kartu, 5 soal, 1 topik, 1 kasus).
- **Rangkaian hari belajar (streak):** dihitung dari target harian; **1 pelindung/minggu otomatis**; putus → pesan netral, data tetap. Tidak ada nyawa, papan peringkat, XP di permukaan.
- **Peta kelemahan:** heatmap kelompok × jenis soal (konsep/klasifikasi/hitung/prosedur/baris-SPT), bar per topik dari terlemah, waktu/soal vs anggaran, "soal salah ≥ 2×", "ketentuan baru yang masih salah" (soal dengan `menggantikan`), tren 7/30 hari, riwayat simulasi vs garis 60. Sampel minimum 10 soal; di bawahnya tampil kalimat "butuh n soal lagi".
- **Perkiraan kesiapan** per tingkat = rata-rata tertimbang M kelompok × bobot, ditampilkan sebagai rentang kasar dengan kalimat "perkiraan dari latihan Anda, bukan prediksi kelulusan".
- **Lencana untuk profesional (terukur, sedikit):** "KUP 100 soal"; "Akurasi PPN ≥ 80% (≥ 50 soal)"; "Simulasi UKP pertama tuntas"; "Dua simulasi ≥ 70 berturut"; "Semua kelompok tingkat A ≥ Terlatih"; "500 ulangan kartu"; "Semua ketentuan 2025–2026 terjawab benar"; "7 / 30 hari beruntun". Tampil di Statistik, bukan pop-up; satu baris pemberitahuan saat diraih.

## 8. Spesifikasi UI — arah visual "Kertas Kerja"

**Arah.** Bukan aplikasi belajar generik, melainkan *kertas kerja fiskal* dan *formulir SPT* yang dirapikan: kop halaman seperti kop formulir (kode tingkat·kelompok dalam mono kapital, mis. `UKP · B · 02 KUP/PPSP/PP`, garis ganda tipis di bawahnya); garis hairline 1 px sebagai pemisah, bukan bayangan; angka tabular mono rata kanan dalam tabel; rujukan pasal sebagai **catatan margin** (desktop) atau baris lipat (HP); chip status bergaya **stempel** (bingkai 1,5 px, mono kapital 11 px, radius 2: `BERLAKU 1 JAN 2025`, `DICABUT`, `PERKIRAAN`, `DIUJI A·B·C`, `PERLU VERIFIKASI`); nomor topik mengikuti nomor kisi-kisi; semua rata kiri; kepadatan sedang (baris 40–48 px); satu warna primer biru tinta; merah hanya untuk kesalahan dan sisa waktu ≤ 5 menit; tanpa gradien, tanpa ilustrasi stok, tanpa emoji; diagram sebagai SVG garis (timeline penagihan, alur keberatan→banding→PK, peta formulir). Yang dihindari secara eksplisit: krem+serif+terakota, gradien ungu-biru, Inter/Space Grotesk, emoji ikon, rata tengah menyeluruh, radius besar.

**Token warna (hex; ukur ulang kontras ≥ 4,5:1 teks, ≥ 3:1 komponen sebelum rilis):**

| Token | Terang | Gelap ("arsip malam") | Pakai untuk |
|---|---|---|---|
| `--bg` / `--surface` / `--surface-2` | #F3F5F7 / #FFFFFF / #EAEEF2 | #0F141A / #161C24 / #1D242E | halaman / kartu / baris selang-seling, kop |
| `--line` / `--line-strong` | #D5DBE2 / #9AA6B2 | #2B343F / #4A5664 | hairline, bingkai chip |
| `--fg` / `--muted` | #141A21 / #576270 | #E6EBF0 / #A0ABB7 | teks / meta |
| `--primary` / `--primary-strong` / `--primary-surface` | #1E3A5F / #142A46 / #E6EEF7 | #8FB8EA / #B8D4F3 / #1A2838 | tombol primer, tautan, cincin, opsi terpilih |
| `--ok` / `--ok-surface` | #1B6B47 / #E3F3EA | #7FCB9B / #14271D | "Benar", lulus, centang |
| `--danger` / `--danger-surface` | #B3261E / #FBE7E5 | #F08A80 / #2E1715 | "Kurang tepat", waktu ≤ 5 mnt, hapus |
| `--warn` / `--warn-surface` | #7A5300 / #FFF3D1 | #E3B45A / #2A2412 | perlu verifikasi, perkiraan, kedaluwarsa |
| `--flag` | #8A4B08 | #F0A868 | ikon Ragu-ragu di grid |
| `--focus` | #0B5CAD | #FFD166 | outline fokus 2 px + offset 2 px |
`color-scheme: light dark`; gelap mengikuti sistem dengan override `data-theme`; `<meta name="theme-color">` per tema.

**Tipografi:** `IBM Plex Sans` (400/500/600) untuk UI dan badan; `IBM Plex Mono` (400/500) untuk angka rupiah, kode taksonomi, pasal, timer, nomor soal, `kbd`. Fallback: `"Segoe UI", Roboto, system-ui, sans-serif` dan `ui-monospace, "SF Mono", Consolas, monospace`; `font-display: swap`, subset Latin, dua berkas woff2 saja. Skala: 12 (meta/chip), 13 (tabel), 14 (UI), 16 HP / 17 desktop (badan & soal, line-height 1,55), 18 (subjudul), 22 (judul), 28 (judul halaman), 40 mono (skor). Label kecil kapital 12 px, letter-spacing 0,06 em. Angka selalu `font-variant-numeric: tabular-nums`, format `Intl.NumberFormat("id-ID")`.

**Spasi / radius / bayangan:** spasi 4-8-12-16-24-32-48 (gutter HP 16, desktop 24); radius 2 (chip, kbd), 4 (tombol, input), 6 (kartu), 10 (lembar bawah, dialog); bayangan hanya dua: `--shadow-1: 0 1px 2px rgba(16,24,40,.06)` (kartu melayang ringan) dan `--shadow-2: 0 8px 24px rgba(16,24,40,.16)` (dialog/lembar); elevasi utama lewat `--line`.

**Komponen inti dan perilaku:**

| Komponen | Perilaku |
|---|---|
| KopHalaman | kode mono + judul + chip status; lengket di desktop, menyusut di HP |
| NavBawah / Rail / Sidebar | §3; `aria-current`; badge angka; disembunyikan saat simulasi |
| KartuKelompok | judul resmi, meta "n topik · n soal · diuji A·B·C", cincin 40 px, akurasi 30 hari, satu tombol; klik hanya lewat tautan/tombol |
| CincinProgres | SVG r=15,9155, `stroke-dasharray="<persen> 100"`, angka selalu tertulis, `role="progressbar"` |
| ChipStempel | varian status/tingkat/jenis soal; teks + ikon, tidak pernah warna saja |
| CiteHukum | pasal (mono) · nama peraturan · "berlaku sejak" · tag ✅/◐/BT · tautan indeks; margin kanan ≥ 1024 px, `<details>` di HP; selalu ada "status per 25 Okt 2026" |
| KartuSoal / BarisOpsi | §6.1; opsi ≥ 48 px; huruf kunci `kbd`; tabel dalam soal dibungkus `role="region"` yang bisa digulir |
| PanelUmpanBalik | 4 blok; `role="status"`; muncul di bawah opsi tanpa menggeser stem |
| BarUjian / GridNomor / RingkasanKirim | §6.4; grid 8 kolom, sel 40 px, status warna + ikon + teks; legenda tetap terlihat |
| Flashcard | tombol balik `aria-expanded`; sisi belakang `hidden`; tombol nilai dengan interval |
| FormKalkulator | input `inputmode="decimal"`, label terlihat, hasil live, `<details>` langkah, blok dasar hukum, peringatan kuning |
| LangkahKasus | stepper vertikal; input per langkah; petunjuk bertahap; tautan kalkulator |
| TimelineRencana | `<ol>` vertikal; minggu sekarang ditandai; centang; "Susun ulang" |
| Heatmap / BarKelemahan | sel warna 3 tingkat + angka; bar terurut; label angka di ujung |
| Dialog / LembarBawah | `<dialog>.showModal()`, fokus terkurung, Esc; konfirmasi kirim tidak tertutup klik luar |
| Toast status | `role="status"`, 3 detik, tidak untuk pesan penting |
| PaletPencarian | Ctrl/Cmd+K; hasil berkelompok; navigasi panah |
| BannerVersi | "Silabus: rilis BPPK Okt 2026 · Regulasi: 25 Okt 2026" + tautan log |
| TutorDrawer | panel kanan 360 px / lembar bawah 85%; chip konteks; label AI; kuota |

**Lima layar kunci.**
1. **Beranda (HP):** kop `UKP · B` + "38 hari ke Periode Desember"; kartu Lanjutkan ("KUP · 08 Sanksi administrasi · soal 7/15"); kartu Hari ini tiga baris bertombol (12 kartu · 20 soal PPh Badan · 1 simulasi); grid cincin 2 kolom, 8 kelompok dengan nama resmi; "Perlu perhatian" 3 bar; banner versi. Tidak ada hero, tidak ada sapaan panjang.
2. **Kelompok materi KUP (desktop):** kiri daftar 11 topik bernomor dengan label penguasaan dan chip jenis dominan; tengah panel "Apa yang berubah 2024–2026" (tabel sebelum→sesudah: setor tgl 10→15, pemeriksaan 4/6 bln→5/3/1, denda banding 100%→60%, bunga 2%→KMK bulanan); kanan margin dasar hukum utama + tombol Latihan 20 / Simulasi 40 / Dek.
3. **Layar soal mode belajar (HP):** kop kecil `KUP · 08 · 7/15`; stem; 4 baris opsi; Periksa; setelah periksa: opsi Anda ditandai teks "Jawaban Anda", kunci "Kunci"; panel 4 blok, CiteHukum sebagai baris lipat bergaya stempel; aksi Lanjut primer di bar bawah.
4. **Simulasi UKP B (desktop):** bar atas `Soal 37/80 · 02 KUP` + timer mono + "Daftar soal"; stem dan opsi di kolom 760 px; panel kanan grid nomor dikelompokkan per 8 kelompok materi dengan legenda; bar bawah Sebelumnya / Ragu-ragu / Berikutnya; tidak ada elemen lain.
5. **Hasil & peta kelemahan:** skor `68` mono 40 px + chip `LULUS ≥ 60` + "(80 soal, format perkiraan)"; bar per kelompok materi dengan angka benar/total; waktu/soal; tombol Ulas yang salah (23), Tambah ke kartu, Buat rencana; di bawahnya heatmap kelompok × jenis soal.

**Motion terukur:** 120 ms (hover/tekan, chip), 200 ms (panel umpan balik, lembar bawah masuk), 320 ms (pindah rute via View Transition; flip kartu 300 ms); easing `cubic-bezier(.2,0,0,1)`; hanya `transform`/`opacity`; tanpa pantulan, tanpa shimmer; perubahan warna timer tanpa animasi; konfeti hanya pada "Lulus simulasi" dan dimatikan oleh `prefers-reduced-motion` (crossfade 80 ms atau tanpa animasi) serta toggle "Kurangi gerak".

**Aksesibilitas (WCAG 2.2 AA):** `<html lang="id">`; kontras token diuji dua tema; target ≥ 24 px (desain 44–48 px untuk opsi, nav, grid); reflow 320 px tanpa gulir horizontal (tabel dalam region tergulir); teks 200% tanpa kehilangan fungsi (`rem`, tanpa tinggi tetap); fokus terlihat 2 px; semua fitur via keyboard dengan pintasan huruf tunggal yang dapat dimatikan; status tidak hanya warna (ikon + teks); `role="status"` untuk umpan balik/tersimpan/kalkulator, `assertive` hanya "Waktu habis"; timer esensial di simulasi dengan alternatif mode tanpa batas waktu; `<abbr title>` pada singkatan pertama; dialog `inert`; uji TalkBack/NVDA sebelum tahap 2.

## 9. Nada bahasa dan microcopy

Tutor yang ramah tapi presisi: kalimat pendek, tanpa "kamu/lo/kak", "Anda" seperlunya, maks satu tanda seru per layar, kesalahan dibingkai sebagai informasi, selalu sebut langkah berikutnya, selalu sebut dasar hukum + status tanggal, format Indonesia (Rp4.800.000; 25 Okt 2026), jujur pada ketidakpastian.

| Situasi | Microcopy |
|---|---|
| Sambutan pertama | "Selamat datang. Pilih tingkat yang akan diuji; rencana belajarnya kita susun dalam satu menit." [Pilih tingkat] |
| Jawaban benar (hitung) | "Benar. PTKP K/2 Rp67.500.000; PKP Rp177.500.000; PPh = 5% × 60 jt + 15% × 117,5 jt = Rp20.625.000 (Pasal 7 dan 17 UU PPh, status per 25 Okt 2026)." |
| Kurang tepat (konsep) | "Kurang tepat. Jawaban Anda B; kunci D. Denda 30% hanya dikenakan bila keberatan ditolak dan WP tidak mengajukan banding — Pasal 25 ayat (9) UU KUP." [Lanjut] [Tambah ke kartu] |
| Jawaban memakai ketentuan lama | "Jawaban A benar menurut ketentuan sebelum 1 Jan 2025 (setor tanggal 10). Sejak PMK 81/2024 Pasal 94, batasnya tanggal 15. Kartu 'perubahan 2025' ditambahkan." |
| Pra-simulasi UKP | "Simulasi UKP tingkat B: 80 soal, 210 menit, 8 kelompok materi, tanpa pembahasan sampai selesai. Jumlah soal adalah perkiraan; angka resmi belum diumumkan BPPK." [Mulai] [Atur] |
| Hasil hampir lulus | "Nilai 57,5 — kurang satu soal dari batas 60. Lima dari sembilan kesalahan ada di satu topik: PPh Pasal 4 ayat (2). Latih topik itu dulu, lalu ulangi simulasi minggu depan." [Latih 10 soal] |
| Rangkaian hari terputus | "Rangkaian 12 hari berhenti kemarin. Kemajuan Anda tetap tersimpan. Mulai lagi dengan 10 kartu — sekitar 4 menit." |
| Tutor AI tidak punya sumber | "Pertanyaan ini tidak tercakup materi dan indeks peraturan situs. Saya tidak akan menebak pasal. Cek teks resmi di JDIH Kemenkeu, atau tanyakan dalam konteks soal tertentu." |

## 10. Prioritas pembangunan dan risiko

**MVP (wajib versi pertama, ±6 minggu):** shell SPA + routing hash + nav HP/desktop + tema token; onboarding 3 layar; Beranda; Tingkat A/B/C dengan taksonomi resmi lengkap (semua kode dan kisi-kisi, meski konten topik belum semua); halaman kelompok materi + topik dengan ringkasan, `cite-hukum`, cek pemahaman; bank soal mode belajar dengan pembahasan 4 blok dan filter; **simulasi USKP 40 soal per mata ujian** (timer, ragu, grid, ringkasan, hasil, ulasan); **simulasi UKP A/B/C komprehensif** dengan jumlah soal berlabel perkiraan; Ulang (FSRS, 2 tombol, kartu kurasi + dari soal salah); Indeks peraturan dasar (±40 instrumen inti + tabel KMK bunga) dan Glosarium; Statistik per kelompok materi (bar + heatmap sederhana); Pengaturan + ekspor/impor; PWA dasar (cache shell + paket soal yang pernah dibuka). Konten minimum: KUP, PPh OP, Pot/Put, PPN tingkat A masing-masing ≥ 120 soal + ≥ 60 kartu; Bea Meterai ≥ 40 soal.

**Tahap 2:** 16 kalkulator terhubung soal; studi kasus 10 kasus MVP; Rencana belajar + mode "10 menit" + mode fokus satu mata ujian; Tutor AI dengan konteks & kuota; Peta formulir 1770/1771/SPT Masa PPN/bupot; Info ujian + daftar cek perangkat; konten tingkat B (PPh Badan, Akuntansi Perpajakan, PBB-P5L) ≥ 120 soal/kelompok; pintasan keyboard lengkap; varian angka otomatis; log perubahan regulasi di UI.

**Tahap 3:** konten tingkat C (PPh Badan internasional, Pajak Internasional) + kalkulator lanjutan; Modul Ujian Profesi; kartu buatan pengguna; lencana; simulasi "format lama" (10 PG + uraian) sebagai arsip edukatif; laporan soal terkelola dan pembaruan konten bertanda versi; akun opsional + sinkronisasi; uji pembaca layar formal; penyelarasan tampilan CAT setelah verifikasi Dummy UKP.

**Risiko dan mitigasi:**
1. **Fakta ujian belum terverifikasi** (jumlah soal UKP, durasi per tingkat, penalti, UI CAT) → semua dibuat sebagai konfigurasi + label "perkiraan"; sumber dan tanggal tampil di Info ujian; pembaruan satu berkas `data/ujian.json`.
2. **Regulasi berubah cepat** (16 perubahan 2024–2026; KMK bunga tiap bulan) → tiap soal/kartu/kalkulator punya `berlaku_sejak`/`kedaluwarsa`; filter "berlaku 2025+"; tabel KMK terpisah; log perubahan wajib per rilis konten.
3. **Angka ◐/BT di laporan riset masuk konten** → kurasi wajib ke teks JDIH sebelum publikasi; tag verifikasi tampil ke pengguna; peringatan kuning di kalkulator.
4. **Soal bukan soal asli** (panitia tidak mempublikasikan) → pernyataan jelas "rekonstruksi dari kisi-kisi resmi"; tidak memakai nama/logo BPPK, KP3SKP, DJP, IKPI; tidak mengklaim afiliasi.
5. **Kehilangan progres** (localStorage diblokir, data best-effort) → IndexedDB + `navigator.storage.persist()`, autosave `visibilitychange`, ekspor JSON ditawarkan setelah simulasi pertama.
6. **Tutor AI mengarang pasal** → konteks terbatas ke indeks, verifikasi id pasal otomatis, label AI, tombol lapor, bisa dimatikan; tidak tersedia di simulasi.
7. **Performa HP menengah** → anggaran shell ≤ 120 KB gzip, paket soal ≤ 200 KB per kelompok dimuat malas, dua berkas font, `content-visibility: auto`, tanpa raster.
8. **Volume konten B/C** (kelulusan B 5,43% menunjukkan kebutuhan besar, tetapi penulisan soal akuntansi/internasional mahal) → prioritaskan jenis `hitung` dan `kasus` dengan varian angka; studi kasus menggandakan nilai tiap kasus menjadi banyak soal.
9. **Kebingungan transisi USKP→UKP** → jalur "Saya dari USKP" di onboarding, peta mata ujian lama↔kelompok materi baru, FAQ transisi bertanggal.
