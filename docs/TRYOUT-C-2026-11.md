# Paket soal Try Out UKP Tingkat C (TO-C-2026-11-1, TO-C-2026-11-2, dan TO-C-2026-11-3)

Dua paket try out UKP Tingkat C masuk ke bank soal di v9.5.5. Dokumen ini mencatat asal soal, cara menyalin, cara memeriksa, dan hasilnya.

Paket ketiga (`TO-C-2026-11-3`) masuk di v10.3.1. Catatannya ada di bagian [Paket 3](#paket-3-to-c-2026-11-3) di akhir dokumen ini. Bagian sebelum itu tetap menggambarkan Paket 1 dan Paket 2 saja.

## Ringkasan

| Paket | Kode | Jumlah soal | Soal baru | Soal bersama |
|---|---|---|---|---|
| Try Out UKP C Paket 1 | `TO-C-2026-11-1` | 100 | 100 | 0 |
| Try Out UKP C Paket 2 | `TO-C-2026-11-2` | 50 | 46 | 4 |

Soal baru 146: 141 pasti (✅) dan 5 bertanda perlu cek (◐). Tidak ada kunci try out yang diubah.

Di aplikasi: Simulasi › format **Try Out** › pilih paket (urutan asli; Paket 1 210 menit, Paket 2 105 menit), Latih › **Sumber soal**, room, dan ujian tim.

## Asal dan cara menyalin

- Sumber: dua berkas PDF tinjauan try out yang diserahkan pemimpin tim pada 13 November 2026. Tiap halaman memuat satu soal sebagai tangkapan layar: nomor, mata ujian, stem, empat opsi, kunci, dan penjelasan.
- Tiap halaman dibaca dua pembaca terpisah. Pembaca pertama menyalin semuanya, pembaca kedua menyalin stem, opsi, dan kunci tanpa melihat hasil pembaca pertama.
- Pemutus mencocokkan dua bacaan dengan gambarnya dan membaca ulang semua angka di semua halaman. Hasilnya: tidak ada selisih di stem, opsi, maupun kunci pada 150 halaman, dan tidak ada angka yang perlu dibetulkan.
- Stem dan opsi dipakai apa adanya, termasuk nama badan di dalam soal. Yang dirapikan hanya tata letak: daftar dan baris data dijadikan satu paragraf (dipisah titik koma), dan empat titik di akhir stem ditulis tiga titik.
- Kode dan nama pada tanda air berkas sumber, serta jawaban peserta, tidak disalin ke berkas mana pun. Uji `test/v950-isi.test.js` menjaganya.

## Cara memeriksa

1. **Penyusun** mengerjakan tiap soal, membaca pasalnya di pustaka naskah, menyimpan kutipan sebagai bukti, lalu menulis pembahasan sendiri, topik, tingkat, dan peta butir cakupan.
2. **Pengerja buta** mengerjakan soal yang sama tanpa melihat kunci. Hasilnya sama dengan kunci akhir pada 144 dari 146 soal.
3. **Pemeriksa** mengerjakan ulang, membuka tiap bukti di naskah, dan memutus. 55 soal dibetulkan pembahasan, dasar hukum, atau golongannya (termasuk pembetulan pembaca keempat).
4. **Pembaca keempat** membaca tiap pembahasan terhadap stem, opsi, dan naskahnya (146 soal dibaca, 33 dibetulkan kalimat atau rujukannya). Tidak ada temuan yang meragukan kunci.
5. **Uji ulang kunci** untuk soal yang jawabannya tidak sepakat: pengerja buta ulang, pembela kunci try out, dan penguji kutipan bekerja terpisah, lalu pemutus. 2 soal diuji:
   - A3-384 (Paket 1 nomor 75): kunci akhir B, tanda ✅. Pengerja buta ulang sampai ke B (yakin tinggi), sama dengan kunci; penguji kutipan memvonis terbukti (opsi menurut naskah B); pembela kunci penyelenggara menilai bisa-dibela. Pemutus membaca sendiri PMK 81/2024: Pasal 171 ayat (3) menganggap setoran sendiri PPh Pasal 4 ayat (2) atas pengalihan tanah dan/atau bangunan yang tervalidasi telah memenuhi kewajiban pelaporan sesuai tanggal SSP, dan Pasal 199 ayat (2) menganggap badan itu telah menyampaikan SPT Masa PPh Unifikasi; Pasal 171 dan 199 tidak diubah PMK 53/2025, 54/2025, 1/2026.
   - A1-216 (Paket 1 nomor 87): kunci akhir B, tanda ◐. Pengerja buta ulang sampai ke A (yakin sedang, B disebut mungkin) dan penguji kutipan memvonis terbukti untuk A berdasarkan Lampiran G s.t.d.d. PER-12/PJ/2026 (angka 10b hanya angsuran PPh Pasal 25, berlaku 1 Oktober 2026).

Aturan kunci: kunci try out dipakai. Kunci hanya boleh diganti bila kutipan naskah membuktikan opsi lain, pengerja buta ulang sampai ke opsi itu, dan kunci try out tidak bisa dibela. Syarat itu tidak terpenuhi pada soal mana pun. 7 soal akuntansi ditentukan standar akuntansi yang naskahnya tidak ada di pustaka; soal seperti itu hanya diberi ✅ bila prinsipnya baku dan semua pihak sampai ke kunci.

## Empat soal dipakai bersama

Empat soal Paket 2 sama dengan soal Try Out UKP B yang sudah ada di bank (stem dan isi opsi sama, urutan opsi berbeda). Soal lama dipakai juga oleh Paket 2 lewat `sumber.juga`:

| Paket 2 nomor | Soal | Try Out UKP B nomor |
|---|---|---|
| 11 | A3-161 | 75 |
| 15 | A3-162 | 81 |
| 34 | B6-132 | 17 |
| 39 | B6-141 | 72 |

## Sebaran

- Per kelompok: B7 33 · A2 31 · A4 15 · C10 13 · A3 12 · B8 11 · C9 10 · A1 8 · B6 8 · A5 5.
- Per tingkat: A, B, C 71 · B, C 52 · C 23. Tingkat mengikuti materi: soal masuk bank Tingkat A atau B hanya bila ada butir cakupan resmi tingkat itu yang memuat materinya.
- Per jenis: konsep 46 · hitung 41 · klasifikasi 26 · kasus 14 · prosedur 12 · baris-spt 7.

## Soal bertanda ◐

- **B7-308** (Paket 1 nomor 22, kunci A): Kunci try out A sejalan dengan ISAK 123 paragraf 11: untuk hasil yang hanya dua kemungkinan, jumlah yang paling mungkin biasanya lebih baik memprediksi penyelesaian. Naskah ISAK 123 tidak ada di pustaka aplikasi sehingga bunyinya tidak bisa dikutip, dan ISAK 123 menyerahkan pilihan metode pada pertimbangan entitas (metode yang lebih baik memprediksi). B baru benar bila entitas menilai nilai yang diharapkan lebih baik memprediksi. A tetap pilihan terbaik karena kasusnya biner.
- **A2-275** (Paket 1 nomor 23, kunci B): Kunci try out (B, 17 Maret 2026) menghitung 14 hari dengan cara tanggal pemberitahuan ditambah 14 hari. Naskah undang-undang tidak memberi contoh cara menghitung jangka waktu dalam hari. Bila tanggal pemberitahuan dihitung sebagai hari pertama, seperti cara hitung jangka bulan yang dipakai aplikasi ini, hari terakhir adalah 16 Maret 2026, yang tidak ada di opsi. B tetap pilihan terbaik karena hanya opsi itu yang memakai jangka gugatan 14 hari. Dalam praktik, ajukan gugatan paling lambat 16 Maret supaya aman.
- **B7-317** (Paket 1 nomor 48, kunci B): Kunci try out B diikuti. Undang-undang PPh mewajibkan pengeluaran yang bermanfaat lebih dari satu tahun dibebankan lewat penyusutan (Pasal 9 ayat (2)), dan penjelasan Pasal 10 ayat (1) memasukkan biaya untuk memperoleh harta ke harga perolehan, tetapi tidak ada pasal di pustaka yang menyebut bunga masa pembangunan secara tegas. B tetap pilihan terbaik karena paling sejalan dengan pasal-pasal itu dan dengan PSAK 223; opsi lain bertentangan dengan Pasal 9 ayat (2) atau menolak bunga yang jelas dapat dikurangkan.
- **A2-287** (Paket 1 nomor 69, kunci B): Kunci try out memakai cara tanggal ke tanggal: 15 Maret 2026 ditambah 6 bulan menjadi 15 September 2026. Menurut cara hitung yang dipakai aplikasi ini (tanggal diterima dihitung sebagai hari pertama, seperti contoh di Penjelasan Pasal 11 UU PBB dan Pasal 19 UU KUP), hari terakhir jangka 6 bulan adalah 14 September 2026, yang tidak ada di opsi. Opsi B tetap pilihan terbaik karena hanya opsi itu yang memakai jangka putusan gugatan 6 bulan menurut Pasal 81 ayat (2) UU 14/2002.
- **A1-216** (Paket 1 nomor 87, kunci B): Kunci try out: B. Menurut petunjuk pengisian SPT Tahunan dalam PER-11/PJ/2025 sebelum diubah, angka 10b memuat angsuran PPh Pasal 25 ditambah pelunasan saat perpanjangan, sehingga 10b Rp32.000.000,00 dan 11a Rp8.000.000,00. PER-12/PJ/2026, berlaku sejak 1 Oktober 2026, menghapus kalimat itu: angka 10b kini hanya angsuran PPh Pasal 25. Dengan petunjuk baru jawabannya A (10b Rp12.000.000,00 dan 11a Rp28.000.000,00). Soal tidak menyebut tahun pajak atau kapan SPT disampaikan, jadi belum bisa dipastikan petunjuk mana yang dipakai; B tetap dipakai karena sesuai petunjuk yang berlaku untuk SPT Tahunan 2025 yang disampaikan sebelum 1 Oktober 2026.

## Nomor paket dan id soal

**Paket 1** (`TO-C-2026-11-1`)

1 A5-207 · 2 A2-266 · 3 A2-267 · 4 A5-208 · 5 A2-268 · 6 A1-212 · 7 B7-303 · 8 B7-304 · 9 A2-269 · 10 B8-243  
11 B7-305 · 12 A2-270 · 13 A4-418 · 14 A2-271 · 15 A2-272 · 16 A2-273 · 17 B7-306 · 18 A4-419 · 19 A2-274 · 20 B6-293  
21 B7-307 · 22 B7-308 · 23 A2-275 · 24 A4-420 · 25 C9-163 · 26 B8-244 · 27 B7-309 · 28 A2-276 · 29 A3-381 · 30 A2-277  
31 A2-278 · 32 B7-310 · 33 B7-311 · 34 B7-312 · 35 B6-294 · 36 B7-313 · 37 A2-279 · 38 A2-280 · 39 B7-314 · 40 A2-281  
41 C9-164 · 42 B8-245 · 43 B7-315 · 44 A1-213 · 45 B8-246 · 46 A5-209 · 47 B7-316 · 48 B7-317 · 49 C9-165 · 50 A2-282  
51 A4-421 · 52 A2-283 · 53 B6-295 · 54 A3-382 · 55 A5-210 · 56 B8-247 · 57 A2-284 · 58 A2-285 · 59 B7-318 · 60 A4-422  
61 A3-383 · 62 B8-248 · 63 A2-286 · 64 B8-249 · 65 A5-211 · 66 A1-214 · 67 B7-319 · 68 C9-166 · 69 A2-287 · 70 A2-288  
71 A4-423 · 72 A2-289 · 73 B7-320 · 74 B7-321 · 75 A3-384 · 76 B7-322 · 77 A1-215 · 78 B7-323 · 79 C10-154 · 80 B7-324  
81 A2-290 · 82 A2-291 · 83 B7-325 · 84 B6-296 · 85 B8-250 · 86 A2-292 · 87 A1-216 · 88 A4-424 · 89 A3-385 · 90 B7-326  
91 A2-293 · 92 B7-327 · 93 B7-328 · 94 C9-167 · 95 B7-329 · 96 A1-217 · 97 C9-168 · 98 B7-330 · 99 B8-251 · 100 C9-169  

**Paket 2** (`TO-C-2026-11-2`)

1 C10-155 · 2 B6-297 · 3 A2-294 · 4 C10-156 · 5 C10-157 · 6 A4-425 · 7 B6-298 · 8 A4-426 · 9 B7-331 · 10 C10-158  
11 A3-161* · 12 A2-295 · 13 A4-427 · 14 A3-386 · 15 A3-162* · 16 B7-332 · 17 C10-159 · 18 A4-428 · 19 C10-160 · 20 C10-161  
21 C10-162 · 22 C10-163 · 23 A3-387 · 24 B6-299 · 25 A1-218 · 26 A1-219 · 27 B6-300 · 28 B8-252 · 29 A3-388 · 30 A4-429  
31 A4-430 · 32 A3-389 · 33 A3-390 · 34 B6-132* · 35 A3-391 · 36 A2-296 · 37 B7-333 · 38 A4-431 · 39 B6-141* · 40 A4-432  
41 B7-334 · 42 C9-170 · 43 C10-164 · 44 C10-165 · 45 A3-392 · 46 B8-253 · 47 C10-166 · 48 B7-335 · 49 C9-171 · 50 C9-172  

Tanda * = soal bersama dengan Try Out UKP B.

## Bentuk data

- Soal baru: `sumber: { set, no, judul, tingkat: "C" }` dan `sejak: "9.5.5"`. Soal bersama: `sumber.juga: [ { set, no, judul, tingkat } ]` pada soal lama.
- `K.daftarSet()` dan `K.soalSet(set)` di `js/learn.js` menghitung anggota utama dan anggota lewat `juga`, dalam urutan nomor paket itu.
- Peta butir cakupan tiap soal ada di `js/data/peta-butir.js`.

## Paket 3 (`TO-C-2026-11-3`)

Paket ketiga try out UKP Tingkat C masuk ke bank soal di v10.3.1.

| Paket | Kode | Jumlah soal | Soal baru | Soal bersama |
|---|---|---|---|---|
| Try Out UKP C Paket 3 | `TO-C-2026-11-3` | 100 | 78 | 22 (dengan Paket 1) |

Soal baru 78: 77 pasti (✅) dan 1 bertanda perlu cek (◐). Satu kunci berbeda dari kunci try out: nomor 51 (lihat soal bertanda ◐).

Di aplikasi: Simulasi › format **Try Out** › pilih paket (urutan asli, 210 menit seperti Paket 1), Latih › **Sumber soal**, room, dan ujian tim. Urutan paket kini: Try Out UKP B, Paket 1, Paket 2, Paket 3, lalu Latihan UKP B per mata uji. Paket bawaan Tingkat C tetap Paket 1.

### Asal dan cara menyalin

- Sumber: satu berkas PDF tinjauan try out 100 halaman yang diserahkan pemimpin tim pada 24 November 2026. Tiap halaman memuat satu soal: nomor, mata ujian, stem, empat opsi, kunci, dan penjelasan.
- 22 halaman memuat soal yang sudah ada di bank dari Paket 1 (lihat tabel di bawah). Soal itu tidak disalin ulang.
- 78 halaman sisanya dibaca dua pembaca terpisah per halaman. Hasilnya: 0 selisih pada stem, opsi, dan kunci.
- Stem dan opsi dipakai apa adanya, termasuk nama badan di dalam soal. Yang dirapikan hanya tata letak, dengan aturan yang sama seperti Paket 1 dan Paket 2.
- Angka "Rp62 miliar" (peredaran bruto) di stem nomor 54 (B6-356) dibaca dari pindaian yang buram. Angka itu tidak memengaruhi jawaban.
- Kode dan nama pada tanda air berkas sumber, serta jawaban peserta, tidak disalin ke berkas mana pun.

### Cara memeriksa

1. **Penyusun** mengerjakan tiap soal, membaca pasalnya di pustaka naskah, menyimpan kutipan sebagai bukti, lalu menulis pembahasan sendiri, penjelasan mudah, topik, tingkat, dan peta butir cakupan.
2. **Pengerja buta sekaligus pemeriksa**, satu per kelompok soal, mengerjakan soal yang sama tanpa melihat kunci, lalu memeriksa pembahasan dan buktinya.
3. Jawaban buta sama dengan kunci pada 76 dari 78 soal. Dua yang berbeda:
   - Nomor 100 (A4-482): pengerja buta keliru. Kunci try out terbukti dari PP 49/2022 Pasal 25. Kunci dipakai, tanda ✅.
   - Nomor 51 (B7-402): lihat bagian soal bertanda ◐ di bawah.

Aturan kunci sama dengan Paket 1 dan Paket 2: kunci try out dipakai, dan hanya boleh diganti bila kutipan naskah membuktikan opsi lain, pengerja buta sampai ke opsi itu, dan kunci try out tidak bisa dibela.

### 22 soal dipakai bersama dengan Paket 1

Dua puluh dua nomor Paket 3 sama dengan soal Paket 1 yang sudah ada di bank (stem, opsi, urutan opsi, dan kunci sama). Soal lama dipakai juga oleh Paket 3 lewat `sumber.juga`, persis cara empat soal Paket 2 memakai soal Try Out UKP B. Nomornya di Paket 1 tidak berubah.

| Paket 3 nomor | Soal | Paket 1 nomor |
|---|---|---|
| 1 | B7-310 | 32 |
| 4 | A2-293 | 91 |
| 13 | B6-294 | 35 |
| 19 | B8-250 | 85 |
| 22 | A4-420 | 24 |
| 32 | A2-271 | 14 |
| 36 | B7-311 | 33 |
| 38 | B7-306 | 17 |
| 41 | A2-268 | 5 |
| 42 | B8-251 | 99 |
| 43 | B7-303 | 7 |
| 52 | B6-293 | 20 |
| 64 | B8-247 | 56 |
| 66 | A2-274 | 19 |
| 69 | A4-421 | 51 |
| 70 | B7-330 | 98 |
| 77 | C9-168 | 97 |
| 80 | C9-167 | 94 |
| 83 | A2-291 | 82 |
| 93 | A4-418 | 13 |
| 94 | B8-248 | 62 |
| 98 | C9-169 | 100 |

### Sebaran 78 soal baru

- Per kelompok: B7 22 · A2 18 · B6 8 · A1 7 · A4 5 · C9 5 · C10 5 · A3 3 · B8 3 · A5 2.
- Id baru: A1-250 sampai A1-256 · A2-343 sampai A2-360 · A3-449 sampai A3-451 · A4-478 sampai A4-482 · A5-228 dan A5-229 · B6-354 sampai B6-361 · B7-388 sampai B7-409 · B8-271 sampai B8-273 · C9-253 sampai C9-257 · C10-271 sampai C10-275.
- Per tingkat: B, C 34 · A, B, C 32 · C 12. Tingkat mengikuti materi, dengan aturan yang sama seperti dua paket sebelumnya.
- Per jenis: hitung 22 · konsep 20 · klasifikasi 14 · kasus 13 · prosedur 5 · baris-spt 4.
- Peta butir: 76 soal punya butir cakupan resmi; 15 soal dicatat di luar daftar butir resmi untuk salah satu tingkatnya (13 untuk Tingkat C, 1 untuk Tingkat B, 1 untuk Tingkat B dan C).

### Soal bertanda ◐

- **B7-402** (Paket 3 nomor 51, kunci A, berbeda dari kunci try out B): kunci try out memasukkan PPN sedan operasional direksi ke harga perolehan kendaraan karena menganggap Pajak Masukannya tidak dapat dikreditkan (Pasal 9 ayat (8) huruf c UU PPN). UU 7/2021 menghapus huruf c itu sejak 1 April 2022, dan transaksi di soal memakai PPN 12% sehingga terjadi 2025 atau sesudahnya. Penyusun dan pengerja buta sama-sama sampai ke A, kutipan naskah menopang A, dan pembela kunci tidak menemukan tafsir wajar untuk B. Ketiga syarat penggantian kunci terpenuhi dan pemimpin tim menyetujui penggantian ke A pada 24 November 2026. Tanda ◐ tetap dipasang karena kunci berbeda dari kunci try out; peringatannya tampil di pembahasan. Bila soal serupa di ujian jelas memakai aturan lama, jawaban versi lama adalah B.

### Nomor paket dan id soal

1 B7-310* · 2 B7-388 · 3 B7-389 · 4 A2-293* · 5 A1-250 · 6 A2-343 · 7 C10-271 · 8 A2-344 · 9 B7-390 · 10 B6-354  
11 C10-272 · 12 A2-345 · 13 B6-294* · 14 C9-253 · 15 C10-273 · 16 C10-274 · 17 A2-346 · 18 A2-347 · 19 B8-250* · 20 B7-391  
21 B7-392 · 22 A4-420* · 23 B7-393 · 24 B7-394 · 25 B7-395 · 26 C9-254 · 27 A2-348 · 28 B8-271 · 29 B7-396 · 30 B6-355  
31 A2-349 · 32 A2-271* · 33 B7-397 · 34 A1-251 · 35 B7-398 · 36 B7-311* · 37 A3-449 · 38 B7-306* · 39 A2-350 · 40 A1-252  
41 A2-268* · 42 B8-251* · 43 B7-303* · 44 B7-399 · 45 A2-351 · 46 C9-255 · 47 A2-352 · 48 B7-400 · 49 B7-401 · 50 A2-353  
51 B7-402 · 52 B6-293* · 53 C10-275 · 54 B6-356 · 55 A4-478 · 56 B7-403 · 57 B6-357 · 58 B8-272 · 59 A5-228 · 60 A2-354  
61 A2-355 · 62 B7-404 · 63 B7-405 · 64 B8-247* · 65 A1-253 · 66 A2-274* · 67 A2-356 · 68 B6-358 · 69 A4-421* · 70 B7-330*  
71 B7-406 · 72 B7-407 · 73 A4-479 · 74 A4-480 · 75 B8-273 · 76 A5-229 · 77 C9-168* · 78 B7-408 · 79 A2-357 · 80 C9-167*  
81 B7-409 · 82 A2-358 · 83 A2-291* · 84 C9-256 · 85 A2-359 · 86 A4-481 · 87 A3-450 · 88 A1-254 · 89 A3-451 · 90 B6-359  
91 A1-255 · 92 A2-360 · 93 A4-418* · 94 B8-248* · 95 B6-360 · 96 B6-361 · 97 A1-256 · 98 C9-169* · 99 C9-257 · 100 A4-482  

Tanda * = soal bersama dengan Paket 1.

### Bentuk data dan uji

- Soal baru: `sumber: { set: "TO-C-2026-11-3", no, judul, tingkat: "C" }` dan `sejak: "10.3.1"`. Soal bersama: `sumber.juga: [ { set, no, judul, tingkat } ]` pada soal Paket 1.
- Soal bertanda ◐ menyimpan alasannya di field `peringatan`, seperti soal bertanda Paket 1. Teks itu tampil di pembahasan.
- Peta butir dan catatan luar tiap soal baru ada di `js/data/peta-butir.js`.
- Uji `test/v1031-paket3.test.js` menjaga: 100 nomor tanpa lubang dan tanpa ganda, 78 soal utama dan 22 lewat `sumber.juga`, penjelasan mudah, peta butir atau catatan luar untuk tiap tingkat, dan tidak ada soal baru yang kembar dengan soal lain di bank.
