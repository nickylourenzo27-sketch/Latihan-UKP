# Paket soal Try Out UKP Tingkat C (TO-C-2026-11-1 dan TO-C-2026-11-2)

Dua paket try out UKP Tingkat C masuk ke bank soal di v9.5.5. Dokumen ini mencatat asal soal, cara menyalin, cara memeriksa, dan hasilnya.

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
