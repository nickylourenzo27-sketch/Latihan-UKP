# QA putaran maksimalisasi 2 (v5 → v5.1), 28 Oktober 2026

Dua agen QA independen menguji v5: (a) UI di 320/390/768/1366/1440 px, tema terang dan gelap, 74 cek regresi alur inti × 5 konfigurasi, 71 cek interaksi fitur baru × 3 konfigurasi; (b) audit silang konten: integritas rujukan lintas modul, 40 sampel soal baru dihitung ulang, lembar angka dicocokkan ke ref.js dan riset, cakupan kisi-kisi laporan peserta Tingkat B.

## Hasil
- Tanpa galat konsol/halaman di semua konfigurasi. Regresi 74/74 lulus. 20 fitur baru lulus.
- UI: 0 P1, 4 P2, 13 P3 → **semua 17 diperbaiki** (overflow Referensi › Tabel angka di HP; tombol Lembar/Topik kehilangan fokus; kartu buatan pengguna tidak pernah muncul di Ulang; batas 400 kartu otomatis menghapus kartu pengguna; sorotan grafik kolom saat nilai 0; label aria sparkline; teks "minggu ini" pada laporan minggu lalu; escape titik koma dan UID .ics; pencarian "1770"; label cincin bersegmen; ikon Peta formulir; tautan peta formulir dari sesi; kepala tabel angka; kueri hilang saat Kembali; kontras nomor baris lembar; chip "Uji saya" di konteks umum; Esc pada dialog Cari).
- Konten: 1 P1, 3 P2, 8 P3 → **semua diperbaiki**:
  - P1: ambang pengembalian pendahuluan Ps. 17D PKP bertentangan antara A2 (PMK 39/2018: ≤ Rp5 M) dan A4 (PMK 28/2026). Diverifikasi ke ringkasan resmi pajak.go.id dan JDIH: PMK 28 Tahun 2026 berlaku 1 Mei 2026, mencabut PMK 39/2018 s.t.d.d. PMK 209/2021; PKP: penyerahan ≤ Rp4,2 M dan lebih bayar ≤ Rp1 M per Masa Pajak. A2-045, A2-083, A2-106, lembar A2, KT-A2-40, topik A2.9, ref.js (entri PMK-28-2026, PMK-39-2018 → diganti), formulir.js diselaraskan. Nomor pasal PMK 28/2026 dan batas OP usaha/peredaran badan tetap ◐.
  - P2: KT-C9-52 (PER-25/PJ/2018 → PMK 112/2025); klaim "kuasa pihak lain wajib SKK mulai 1 Jan 2027" diberi ◐ (E.5, E-042, lembar E, K-E-03, E-057); ref.js konsisten.
  - P3: 13 soal baris SPT lama kini punya formulirRef (semua 55 soal baris SPT tertaut); kartu KT-A1-72 (pegawai yang juga berusaha); jejakHitung dilengkapi (A3-081, A5-084, B7-074, B7-104, C10-103); berlakuSejak lembar dilengkapi bila pasti; singkatan ganda PK/PKP diberi catatan; B7 lembar ayat Pasal 25 dikoreksi; frasa Form DGT diseragamkan.
  - Gaya opsi: soal yang kuncinya > 25% lebih panjang dari opsi terpanjang berikutnya turun dari E 43% / C9 24% / C10 23% / A1 17% / B6 15% / B8 15% menjadi E 0% / C9 0% / C10 0% / A1 12% / B6 7% / B8 10% (semua modul ≤ 13%).

## Masih terbuka (ditandai ◐ di aplikasi)
- Tata letak Coretax (PER-11/PJ/2025) untuk peta formulir dan soal baris SPT: nomor baris mengikuti formulir pra-Coretax.
- Nomor pasal PMK 28/2026; batas OP usaha (Rp100 jt) dan peredaran badan pada PMK 28/2026.
- Ketentuan peralihan PMK 44/2026 dan PMK 55/2026 (SKK bagi kuasa pihak lain mulai 2027).
- Tarif PPh 22 BBM 0,25%/0,3% (PMK 34/2017) dan beberapa metode penilaian PBB-P5L (PMK 186/2019 s.t.d.d. 234/2022).
- Daluwarsa bea meterai: nomor pasal (Ps. 23 ◐).
- Kunci E masih sering menjadi opsi terpanjang (selisih < 25%); layak dirapikan pada putaran berikutnya.

# QA putaran 3 (v5.2 → v5.3), 29 Oktober 2026 — laporan Tingkat C

- UI: 1 P1 (sesi Hari Ini target C masih didominasi KUP umum karena urutan topik linear), 4 P2 (komposisi simulasi C, 25 soal C-only bertanda laporan B, angka hasil kalkulator terpotong di ponsel, tabel jejak hitung terjepit), 5 P3 → **semua diperbaiki**: urutan topik dan kuota soal sesi berbobot laporan (C9.1 menjadi topik pertama; porsi C9+C10+B7+B8 ±75% pada profil baru C), komposisi simulasi dengan pembagian sisa terbesar (tepat 100 soal, A2.10 dipisah), saringan laporan per tingkat, nilai numerik tanpa pemenggalan, baris jejak teks panjang jadi baris penuh, sinonim pencarian GMT/QDMTT, parsing minus Unicode, tombol kalkulator di semua langkah kasus dengan nilai awal dari kasus.
- Konten: 2 P1 (PMK 187/PMK.03/2015 dicabut PMK 81/2024 sejak 1 Jan 2025 — 15 rujukan di C10 dan ref.js diperbarui; A4-083 memakai kaidah kurs PPN lama "saat faktur dibuat" — kini PP 44/2022 Pasal 21 "saat faktur pajak seharusnya dibuat"), 5 P2 (rumusan selisih kurs di ref.js dan kalkulator; B7-119; tag B pada soal C-only; recall tag C9.6/C9.2/C10.6–7/B8.1–2) → **semua diperbaiki**; 5 P3 (jebakanOpsi kurs diseragamkan: kurs tengah/bank → salah-klasifikasi, KMK periode salah → salah-baca; 10 soal kesulitan-1 ditambahkan; kalkulator kurs mendapat bea masuk, gross-up, PPN valas, PPh 15 2,64%, PPh 26 ayat (2) 5%; gmt mendapat porsi IIR; PP 44/2022 Pasal 21 dan KMK kurs mingguan masuk indeks peraturan).
- Kaidah kurs kini seragam di A3, A4, B7, C9, C10, ref.js, dan kalkulator: PPh pot/put → kurs KMK saat terutang/pemotongan (mana lebih dahulu); PPN → kurs KMK saat faktur pajak seharusnya dibuat; impor → kurs KMK tanggal PIB; pembukuan → kurs transaksi dan kurs tengah BI penutup; selisih kurs diukur dengan kurs pembukuan, kurs KMK hanya masuk pada bagian valas yang dilunasi dengan pajak rupiah; saat setor tidak ada selisih kurs.
- Masih ◐: nomor pasal PMK 81/2024 untuk pengembalian pajak yang seharusnya tidak terutang; pasal saat konversi kurs di PMK 81/2024 dan PER-11/PJ/2025; tabel SBIE PMK 136/2024 (dipakai angka OECD); status PMK 196/2007 dan SE-03/PJ.31/1997.

# QA desain v6 (29 Oktober 2026)

Riset: `docs/DESAIN-V6.md` (40 temuan visual T01–T40 dari tangkapan layar, spek token/komponen/halaman/gerak) dan `docs/INTERAKSI-V6.md` (audit 14 alur, 26 P2 dan 36 P3, 10 momen interaktif). Implementasi oleh tiga agen (CSS/shell, halaman belajar dan soal, alat dan simulasi), lalu QA dua agen (visual: 34 rute × 2 tema × 5 lebar; interaksi: 10 momen + regresi 37 rute).

- QA: 2 P1 (toast beraksi menutupi tombol Lanjut/Tanya Tutor; tabel angka kunci terpotong di desktop), 21 P2, 26 P3 → **semua ditutup** oleh empat agen perbaikan: toast dihitung dari tinggi bar aksi (di HP pemberitahuan kartu menjadi baris di panel umpan), nilai teks tabel membungkus, keyakinan Yakin/Ragu/Menebak (Momen 2) dengan kalibrasi di ringkasan Latih, pratinjau topik untuk layar sentuh, 6 titik fokus yang jatuh ke body diperbaiki, kop minggu Rencana satu baris, legenda CAT lengket, dialog Kirim dua tombol, peta kelemahan tanpa sel '–', kepala tabel lembar lengket, topbar HP pada teks 200%, kode tab formulir tegak, mono hanya untuk angka/pasal, area sentuh ≥ 44 px, deep link #topik/A2.8 dan #kelompok/B7, sinonim pencarian bersama, render view lewat rAF.
- Verifikasi akhir: 348 uji lulus, tanpa galat konsol dan tanpa overflow di 320–1366 px terang/gelap, LT-2 (Lanjut dapat diklik 0,4 s setelah Periksa salah di HP) lulus.
- Penyimpangan sadar dari spek (dicatat di DESAIN-V6): fokus setelah balik kartu Ulang tetap di tombol balik; sidebar 36 px di layar ≤ 980 px.
