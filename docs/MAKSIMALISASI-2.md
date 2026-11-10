# Putaran Maksimalisasi 2 — kontrak bersama antar-agen

Semua agen bekerja paralel pada berkas yang berbeda. Jangan menyentuh berkas di luar jatah. Ikuti kontrak ini persis supaya hasilnya menyatu.

## Pembagian berkas

| Agen | Berkas yang boleh diubah |
|---|---|
| konten:<KODE> | `js/data/mu-<KODE>.js` saja |
| formulir | `js/data/formulir.js` (baru) |
| referensi | `js/data/ref.js` |
| ui-css | `css/app.css`, `index.html` (hanya menambah `<script src="js/viz.js">` sebelum `js/learn.js`), `tools/shot.js` |
| ui-views | `js/views-home.js`, `js/views-belajar.js`, `js/soal.js` |
| ui-alat | `js/views-alat.js`, `js/learn.js`, `js/core.js`, `js/app.js`, `js/viz.js` (baru) |

## Tambahan data konten (agen konten)

Tambahkan ke `meta` tiap modul:
```js
lembarRingkas: [            // 15–30 baris "lembar angka" satu halaman untuk hafalan cepat
  { label: "Batas setor pajak masa", nilai: "tgl 15 bulan berikutnya", dasar: "PMK 81/2024 Ps. 94", berlakuSejak: "2025-01-01" }
]
```
Soal tetap mengikuti `docs/SKEMA-KONTEN.md` + `docs/GAYA-SOAL.md`. Field opsional baru pada soal: `formulirRef: "1770.induk.1"` (kode baris di `js/data/formulir.js`) untuk soal `baris-spt`.

## Data peta formulir (agen formulir) — `js/data/formulir.js`

```js
UKP.registerFormulir({
  statusPer: "2026-10-27",
  catatan: "Peta logis komponen pelaporan. Struktur baris mengikuti formulir pra-Coretax; di Coretax (PER-11/PJ/2025) komponen yang sama diisi lewat lampiran per jenis penghasilan.",
  formulir: [
    { id: "1770", nama: "SPT Tahunan PPh Orang Pribadi (1770)", untuk: "OP dengan usaha/pekerjaan bebas (pembukuan atau NPPN)", kelompok: ["A1"], verifikasi: "◐",
      bagian: [
        { id: "induk-a", nama: "Induk — A. Penghasilan neto", baris: [
          { kode: "1770.induk.1", nomor: "1", label: "Penghasilan neto dalam negeri dari usaha/pekerjaan bebas", isi: "Dari Lampiran 1770-I (pembukuan) atau NPPN", sumberAngka: "Lampiran I bagian A/B", pasal: "Ps. 14 UU PPh", topik: "A1.4", jebakan: "Penghasilan final tidak masuk sini" }
        ] }
      ] },
    // 1770 S, 1771 (induk + lampiran I–VI + khusus 1A–8A ringkas), SPT Masa PPN (1111: induk, A1/A2, B1–B3 secara logis), SPT Masa PPh 21/26 (Coretax), SPT Masa PPh Unifikasi, bukti potong (BPA1, BPA2, BP21, BPPU, BPNR, BPMP), SPOP/LSPOP (PBB-P5L ringkas), SPT Masa Bea Meterai (pemungut)
  ]
});
```
Setiap formulir 5–40 baris; setiap baris wajib `kode` unik (pola `<formulir>.<bagian>.<nomor>`), `label`, `isi`, `topik` (id topik yang ada di KURIKULUM), `pasal`. Tandai `verifikasi: "◐"` pada formulir yang tata letak Coretax-nya belum dicek.

## Modul visualisasi (agen ui-alat) — `js/viz.js`

Namespace `UKP.viz` (SVG inline, warna dari token CSS, mengikuti aturan: garis 2px, batang ≤ 24px dengan ujung membulat 4px, grid hairline solid, teks memakai token teks bukan warna seri, legenda bila ≥ 2 seri, setiap grafik punya tabel/aria-label setara):
- `UKP.viz.batang({ data: [{ label, nilai, tone? }], maks?, format?, judul })` → batang horizontal.
- `UKP.viz.kolom({ data: [{ label, nilai }], maks?, judul, sorot? })` → kolom vertikal (aktivitas harian/mingguan).
- `UKP.viz.garis({ titik: [{ x: label, y }], acuan?: 60, judul })` → garis tren dengan garis acuan.
- `UKP.viz.sparkline({ nilai: number[] })` → 12 titik kecil.
- `UKP.viz.ringSegmen({ segmen: [{ nilai: 0–100, label }], total: 0–100, label })` → cincin dengan segmen per topik.
- `UKP.viz.heatmap({ baris: [{ id, label }], kolom: [{ id, label }], nilai: (b, k) => number|null, judul })` → grid berangka 3 pita (<60 / 60–79 / ≥80).
- `UKP.viz.statTile({ label, nilai, delta?, trend?: number[] })`.
Agen ui-views memakai fungsi-fungsi ini bila `UKP.viz` ada (beri fallback teks sederhana bila belum ada).

## Fitur baru (agen ui-alat)
- View `formulir` (`#formulir`): daftar formulir → bagian → baris dapat diklik (isi, sumber angka, pasal, topik, soal terkait dari field `formulirRef`/`jenis baris-spt`), tombol "Latih soal baris SPT" (Latih filter jenis baris-spt + kelompok). Tambahkan ke navigasi (sidebar grup Alat, lembar Lainnya, pencarian) di `js/app.js`/`js/views-alat.js`.
- **Rencana v1**: garis waktu mingguan dari hari ini sampai H-1 (fase F0–F5 dialokasikan proporsional), tiap minggu berisi tugas bercentang (topik yang dijadwalkan dari urutanTopik, simulasi 40 Sabtu, simulasi komprehensif 3 minggu terakhir, tugas logistik), progres tugas disimpan di `s.tugasRencana`, kartu "Susun ulang" bila tertinggal > 20%.
- **Laporan Mingguan otomatis**: setiap Jumat (atau saat dibuka setelah Jumat) simpan laporan ke `s.laporan[]` (akurasi, topik naik/turun, 3 kesalahan berulang, saran); tampil di Kemajuan › Laporan dan banner di Hari Ini.
- **Tutor "Uji saya"**: chip "Uji saya 2 soal serupa" memakai `sample.json` untuk menghasilkan 2 soal PG (format JSON persis skema soal minimal: stem, opsi A–D, kunci, pembahasan.inti, dasarHukum) lalu merender dengan `UKP.c.soal` (tanpaLog, tanpaTutor).
- **Pengingat .ics**: di Pengaturan/Rencana, tombol yang menyusun berkas .ics (VEVENT harian berulang pada jam pilihan) dan menawarkan "Salin" + simpan via `UKP.simpanBerkas` bila tersedia.
- **Lembar Angka** per kelompok: halaman `lembar` (`#lembar`, params kode) merender `meta.lembarRingkas` sebagai tabel ledger rapi + tombol "Jadikan kartu" (menambah kartu otomatis) — dipanggil dari halaman kelompok (agen ui-views menambahkan tombolnya; agen ui-alat membuat view-nya).

## Peningkatan tampilan (agen ui-views)
- Hari Ini: baris stat (rangkaian, akurasi 7 hari, soal minggu ini) dengan sparkline 14 hari; grafik kolom aktivitas 14 hari; kartu Sesi hari ini tetap paling atas.
- Kelompok: cincin bersegmen per topik; daftar topik menampilkan chip jenis dominan dan estimasi menit; tombol "Lembar Angka".
- Topik: navigasi antar topik lengket di bawah (‹ ›), penanda status di judul, tabel angka kunci diberi tombol "Jadikan kartu".
- Studi kasus: di ≥1280 data kasus di panel kanan 320px (sticky), stepper di kiri.
- Soal: tautan "Lihat di peta formulir" bila `formulirRef` ada; ikon jenis soal; waktu per soal ditampilkan kecil setelah periksa.
- Semua grafik lewat `UKP.viz` dengan fallback.

## Peningkatan visual (agen ui-css)
Pertahankan identitas "Buku Besar & Stempel", tingkatkan kematangan: skala tipografi (judul halaman 1.75rem/600, judul bagian 1.25rem), garis ganda pada kop bagian, kartu kelompok dengan "tab indeks" kode di tepi kiri, tombol dengan nuansa tekan (border-bottom 2px), hover berupa perubahan warna garis bukan bayangan, pita stat, warna chip per tingkat lebih jelas, kelas untuk komponen viz (`.viz`, `.viz-bar`, `.viz-kolom`, `.viz-garis`, `.viz-heat`, `.stat-tile`, `.sparkline`), `.panel-kanan` (grid ≥1280: minmax(0,1fr) 320px), `.lembar` (tabel ledger dengan garis ganda), `.timeline-minggu`, `.laporan`, state kosong dengan ikon garis, transisi halus 120–180 ms, cetak (`@media print`: sembunyikan nav, lembar angka rapi). Tema gelap sama matangnya. Tanpa gradien, tanpa emoji.
