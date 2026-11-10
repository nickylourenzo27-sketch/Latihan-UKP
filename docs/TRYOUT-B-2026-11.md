# Paket soal Try Out UKP Tingkat B (TO-B-2026-11)

Sumber: PDF "Soal dan Pembahasan TryOut UKP B 100 Soal" (65 halaman; transkrip OCR dari rekaman layar try out 6 November 2026, Soal No. 1–100 beserta pembahasan, pengecoh, dan kutipan pasal). Ditranskripsikan ke JSON oleh dua agen paralel (1–50, 51–100), diperiksa silang satu agen, lalu diimpor ke modul `js/data/mu-*.js` lewat `tools/impor-tryout.js` dengan field `sumber: { set: "TO-B-2026-11", no, judul, tingkat: "B" }`.

Di aplikasi: Simulasi › format **Try Out** (100 soal urutan asli, 210 menit bawaan), Latih › **Sumber soal** › Try Out UKP B (jumlah "Semua" = urutan asli), kop soal "· Try Out UKP B no N". Soal bertanda ◐ membawa `peringatan` yang menyebut bagian mana yang dilengkapi dari pembahasan.

Sebaran: A1 4 · A2 17 · A3 20 · A4 27 · A5 1 · B6 22 · B7 2 · B8 7. Jenis: hitung 38 · kasus 25 · konsep 16 · prosedur 11 · klasifikasi 10. 29 soal ◐.

---

# Laporan pemeriksaan silang: Try Out UKP Tingkat B, Soal 1–100

Berkas yang diperiksa: `soal-001-050.json` dan `soal-051-100.json`. Hasil gabungan: `gabungan.json` (100 soal, urut 1–100). Salinan sebelum perbaikan: `periksa/soal-*.sebelum.json`. Skrip pemeriksa: `periksa/cek.js` (struktur), `banding.js` (cocokkan dengan teks PDF), `kat.js` (kelompok), `dup.js` (duplikasi), `perbaiki.js` (perbaikan). Log perbaikan: `periksa/log-perbaikan.json`.

## Ringkasan
- **(a) Struktur:** semua lolos setelah perbaikan. JSON valid, 100 nomor unik 1–100, opsi A–D lengkap dan berbeda, tidak ada opsi yang berakhir dengan potongan kata, kunci A–D, `pembahasan.inti` terisi, dan `mengapaSalah` tepat untuk 3 opsi bukan kunci. ID topik sesuai kelompoknya. Kutipan paling panjang 450 karakter. Tidak tersisa `✓` atau "Jawaban Anda".
- **(b) Cocok dengan PDF:** PDF ini dokumen LibreOffice berisi teks OCR yang dirender ulang. Tidak ada gambar tangkapan layar di dalamnya (`pdfimages`: 0). Teks yang terpotong di `teks.txt` juga terpotong di PDF; ini sudah saya cek visual di hlm. 29, 59, dan 60. Karena itu ke-100 soal saya bandingkan otomatis dengan lapisan teks PDF, jadi cakupannya melebihi sampel 25 soal yang diminta. Kunci di JSON = `Jawaban: X` = tanda ✓ untuk 100 dari 100 soal; No. 93 tertulis "Jawaban; D", tetap D. Stem atau opsi yang berbeda dari sumber hanya ada pada soal yang pelengkapannya sudah tercatat di `catatanOpsi`. Selebihnya perbedaan karena salah OCR yang sudah dibetulkan, misalnya "porilleran" menjadi peredaran, "biykan" menjadi bukan, "0,596" menjadi 0,5%, atau "PMK 18/2024" menjadi PMK 118/2024.
- **(c) Kelompok dan topik:** kelompok sesuai baris kategori di 98 soal. No. 49 dan 93 tidak punya baris kategori di sumber; keduanya ditetapkan dari isi soal (A2 dan B6). Semua topik ada di KURIKULUM bagian 3 dan isinya sesuai.
- **(d) Substansi:** soal hitung yang saya hitung ulang cocok dengan kuncinya: 7, 11, 14, 18, 22, 23, 30, 33, 46, 63, 67, dan 94. Satu soal bertentangan dengan modul proyek (No. 78, lihat di bawah). Tidak ada soal yang menyinggung ketentuan yang sudah diganti (PMK 39/2018, PMK 70/2017, PMK 187/2015, kurs PP 44/2022).
- **(e) Duplikasi:** tidak ada salinan langsung. Ada 20 soal dengan konsep serupa soal modul (skor Jaccard 0,25–0,41); semuanya diberi field `mungkinDuplikat`.
- Sebaran: A1 4 · A2 17 · A3 20 · A4 27 · A5 1 · B6 22 · B7 2 · B8 7. Jenis: hitung 38 · kasus 25 · konsep 16 · prosedur 11 · klasifikasi 10. Ada 29 soal bertanda ◐.

## Perbaikan yang diterapkan langsung
| No. | Masalah | Tindakan |
|---|---|---|
| 54, 66, 70, 89 | Berjenis `prosedur` tetapi punya `jejakHitung`, padahal format membatasi jejak untuk soal hitung. Jawabannya tanggal hasil hitung. | `jenis` diubah ke `hitung` agar sama dengan No. 37 (tenggat SPHP, jenis hitung). Jejak dipertahankan. |
| 57, 61, 83, 98, 99 | Berjenis `prosedur`/`kasus` tetapi punya `jejakHitung` | Jejak dihapus. Langkahnya dipindah ke `pembahasan.catatan` ("Langkah: …"). |
| 78 | Kunci "akhir tahun buku" (PMK 164/2023 Ps. 17(3)) berlaku untuk WP PPh final UMKM, sedangkan stem tidak menyebut status itu. Modul proyek (mu-A4 poinKunci, soal A2-006) memakai tenggat umum "akhir bulan berikutnya" (PMK 197/2013), dan dengan aturan itu jawabannya B. | `kualitas` dirinci, tetap ◐. Usul bila diimpor: tambahkan "(WP PPh final PP 55/2022)" ke stem. |
| 2, 6, 8, 9, 21, 30, 33, 36, 38, 41 | Stem berakhir "...." | Diseragamkan menjadi "...". |
| semua | Field `mungkinDuplikat` belum ada | Diisi `null` atau `{id, skor, catatan}`. |

## Soal bertanda ◐ (perlu dicek ke rekaman asli atau naskah peraturan)
- **42:** stem sumber tidak menyebut ibu kandung, padahal kunci B (K/2) menghitungnya. Butir ibu kandung disisipkan dalam [ ]. Tanpa butir itu, jawaban yang benar D.
- **43:** rincian biaya vokasi di stem adalah rekonstruksi (Rp60 jt/25 jt/15 jt); opsi B/C bercampur di sumber.
- **26:** butir 5 (iuran JKK/JKM) hilang dari stem padahal kuncinya "1 dan 5"; ditambahkan tanpa nominal.
- **93:** stem dan baris kategori tidak ada di sumber (sudah dicek di PDF hlm. 60). Stem disusun ulang dari kutipan PMK 74/2024.
- **34:** opsi kunci terpotong, dilengkapi ("batal… acara cepat… kecuali melampaui 1 tahun"). Rumusan Ps. 84(2) UU 14/2002 perlu dicocokkan.
- **5, 9, 10, 25, 32, 35, 45, 62, 74, 86, 92:** opsi (sering opsi kunci) kosong di sumber, disusun dari pembahasan.
- **2, 4, 15, 36, 55, 61, 99:** opsi terpotong dan dilengkapi. **55, 91, 96:** stem terpotong atau rusak dan dilengkapi.
- **16:** nomor butir PMK 168/2023 Ps. 12(4) huruf b tidak konsisten di sumber. **31:** penjelasan rusak OCR. **49:** baris kategori tidak ada di sumber.

## Catatan lain (tidak diubah)
- **38:** PMK 231/2019 Ps. 16/18 dinyatakan masih berlaku (PMK 81/2024 Ps. 483 hanya mencabut sebagian); belum dicocokkan dengan naskah.
- **67:** dasar hukum PPh 22 memakai PMK 51/2025, sedangkan KURIKULUM A3.5 masih menyebut PMK 34/2017 s.t.d.t.d. PMK 41/2022. Perlu diselaraskan saat impor.
- **57:** batas pengajuan pengurangan PBB karena bencana (31 Desember tahun bencana, sesuai sumber) belum diverifikasi ke PMK 129/2023.
- Sekitar 30 soal tidak punya bagian "Pengecoh" di sumber. Alasan `mengapaSalah` untuk soal-soal itu disusun transkriptor dan tercatat di `kualitas`. Saya cek sampel; isinya konsisten dengan pembahasan.

## Kemungkinan duplikasi dengan modul (skor Jaccard kata stem + opsi kunci)
Skor ≥ 0,35 berarti pola soalnya sama, hanya angka/nama berbeda. Soal ini bisa dijadikan varian atau dilewati:
- 46 ↔ B6-040 (tax allowance 30%/6 tahun termasuk tanah) 0,41
- 25 ↔ A4-020 (batas faktur Coretax) 0,39
- 14 ↔ A3-012 (TER bulan THR) 0,38

Konsep serupa dengan skenario berbeda: 40↔B8-008, 64↔A4-034, 61↔A2-058, 18↔A4-102, 23↔A3-035, 16↔A3-043, 27↔A4-024, 98↔A2-012, 26↔A3-005, 75↔C10-101, 79↔A4-034, 65↔B8-033, 78↔A2-006, 8↔B8-105, 62↔A2-073, 11↔A1-098, 30↔B7-037. Pada 40, 61, dan 98, substansinya selaras dengan modul (SKP PBB +25%; PK 3 bulan sejak novum; pembetulan lebih bayar 2 tahun sebelum daluwarsa).
