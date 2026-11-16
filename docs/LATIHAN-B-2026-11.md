# Paket Latihan UKP B per mata uji (LM-B-2026-11)

Paket soal keempat masuk ke bank soal di v9.7.0. Dokumen ini mencatat asal soal, cara menyalin, cara memeriksa, dan hasilnya.

## Ringkasan

| Paket | Kode | Jumlah soal | Mata uji | Studi kasus |
|---|---|---|---|---|
| Latihan UKP B per mata uji | `LM-B-2026-11` | 315 | 8 | 10 kasus, 49 soal |

- Semua 315 soal di berkas asal dipakai. Tidak ada yang ditolak.
- 298 soal pasti (✅) dan 17 soal bertanda perlu dicek (◐). Tiap soal ◐ punya lipatan "Catatan sumber".
- 5 kunci berbeda dari berkas asal karena aturannya sudah berganti. Rinciannya di bagian "Kunci yang berbeda dari berkas asal".
- Sebaran kunci: A 79, B 87, C 72, D 77.
- Tiap soal punya Penjelasan mudah. 2.791 soal lama di bank juga mendapat Penjelasan mudah di versi ini.

Di aplikasi:
- Simulasi: format **Paket soal**, pilih paket "Latihan UKP B per mata uji", lalu pilih satu mata uji atau semua. Satu mata uji memakan 34 sampai 118 menit. Paket utuh 662 menit, jadi lebih cocok dicicil per mata uji.
- Latih: **Sumber soal** berupa daftar pilihan.
- Latihan bersama di room: paket ini bisa dipilih utuh atau per mata uji.
- Ujian tim, Bank soal, dan Cakupan juga memuat paket ini.
- Urutan paket di daftar: tiga paket try out lebih dulu, lalu paket ini.

## Asal dan cara menyalin

- Sumber: berkas latihan per mata uji kiriman pemimpin tim 16 Nov 2026. Isinya delapan mata uji UKP Tingkat B. Tiap soal punya lima opsi, kunci, dan pembahasan singkat.
- Ujian asli dan aplikasi memakai empat opsi. Karena itu satu opsi salah per soal dilepas, lalu opsi diberi huruf baru A sampai D. Opsi yang dilepas dipilih yang paling lemah sebagai pengecoh.
- Opsi yang dilepas tidak dibuang. Teks dan alasannya disimpan di `opsiLepas`, lalu tampil sebagai butir terakhir "Mengapa opsi lain salah" di pembahasan.
- Stem dipakai apa adanya. Yang dirapikan hanya tata letak: daftar dan baris data dijadikan satu paragraf.
- Penyalinan dan pemeriksaan dikerjakan dalam 22 batch. Tiap batch dikerjakan tiga peran yang terpisah: penyusun, pengerja buta, dan pemeriksa.
- Nama penyusun berkas asal tidak disalin ke berkas mana pun. Uji `test/v970-data.test.js` menjaganya.

## Cara memeriksa

1. **Penyusun** mengerjakan tiap soal dan membaca pasalnya di pustaka naskah. Ia lalu menulis pembahasan sendiri, Penjelasan mudah, topik, tingkat, dan peta butir cakupan.
2. **Pengerja buta** mengerjakan soal yang sama tanpa melihat kunci. Jawabannya cocok dengan kunci akhir pada 312 dari 315 soal.
3. **Pemeriksa** mengerjakan ulang, membuka bukti di naskah, dan memutus. Ia menerima 260 soal apa adanya dan memperbaiki 55 soal (pembahasan atau Penjelasan mudah).
4. Sesudah pemeriksaan, kalimat pembuka 176 Penjelasan mudah diragamkan supaya tidak berulang.

Aturan kunci: kunci berkas asal dipakai. Kunci hanya diganti bila naskah yang berlaku sekarang jelas menunjuk opsi lain. Itu terjadi pada 5 soal.

## Kunci yang berbeda dari berkas asal

Kelimanya bertanda ◐, dan alasannya tertulis di "Catatan sumber" soal itu.

| No | Soal | Kunci aplikasi | Alasan singkat |
|---|---|---|---|
| 25 | B7-360 | Rp500.000.000 | Larangan kredit PPN sedan (Pasal 9 ayat (8) huruf c UU PPN) dihapus UU 7/2021, jadi PPN yang dapat dikreditkan tidak masuk harga perolehan. |
| 34 | B7-369 | Dr Utang dividen 100.000.000; Cr Kas 100.000.000 | PP 55/2022 dan PMK 81/2024: dividen dalam negeri kepada orang pribadi tidak dipotong pembayar; PPh final disetor sendiri oleh penerima. |
| 182 | B6-351 | Seluruh penghasilan termasuk dividen dan penghasilan final | SE-66/PJ/2010 sudah diganti SE-02/PJ/2015; peredaran bruto untuk Pasal 31E memuat penghasilan final dan bukan objek. |
| 297 | A4-459 | Akhir tahun buku | PMK 68/2010 dicabut PMK 164/2023; laporan untuk dikukuhkan sebagai PKP paling lambat akhir tahun buku. |
| 310 | A4-472 | Rp1.000.000.000 | PMK 39/2018 dicabut PMK 28 Tahun 2026 sejak 1 Mei 2026; batas lebih bayar PKP persyaratan tertentu Rp1 miliar. |

## Pemetaan mata uji ke modul

| Nomor paket | Mata uji | Modul | Jumlah soal | Id soal |
|---|---|---|---|---|
| 1 sampai 52 | Akuntansi Perpajakan | B7 | 52 | B7-336 sampai B7-387 |
| 53 sampai 68 | Bea Meterai | A5 | 16 | A5-212 sampai A5-227 |
| 69 sampai 114 | KUP, PPSP, dan Pengadilan Pajak | A2 | 46 | A2-297 sampai A2-342 |
| 115 sampai 131 | PBB-P5L | B8 | 17 | B8-254 sampai B8-270 |
| 132 sampai 184 | PPh Badan dan SPT PPh Badan | B6 | 53 | B6-301 sampai B6-353 |
| 185 sampai 214 | PPh Orang Pribadi dan SPT PPh OP | A1 | 30 | A1-220 sampai A1-249 |
| 215 sampai 270 | PPh Pemotongan/Pemungutan | A3 | 56 | A3-393 sampai A3-448 |
| 271 sampai 315 | PPN dan SPT PPN | A4 | 45 | A4-433 sampai A4-477 |

Nama mata uji disimpan di `sumber.bagian`. Simulasi membaca daftar mata uji lewat `K.bagianSet(set)`.

## Studi kasus

Berkas asal punya 10 studi kasus dengan 49 soal. Teks kasus ditaruh di awal stem tiap soal kasus, diawali "Data untuk soal vignette V-...:". Tiap kasus mendapat `kasusId` baru:

| Nomor paket | Mata uji | kasusId |
|---|---|---|
| 9 sampai 14 | Akuntansi Perpajakan | V-B7-33 |
| 15 sampai 21 | Akuntansi Perpajakan | V-B7-34 |
| 79 sampai 82 | KUP, PPSP, dan Pengadilan Pajak | V-A2-19 |
| 118 sampai 121 | PBB-P5L | V-B8-21 |
| 146 sampai 151 | PPh Badan dan SPT PPh Badan | V-B6-18 |
| 192 sampai 195 | PPh Orang Pribadi dan SPT PPh OP | V-A1-19 |
| 196 sampai 198 | PPh Orang Pribadi dan SPT PPh OP | V-A1-20 |
| 225 sampai 229 | PPh Pemotongan/Pemungutan | V-A3-31 |
| 230 sampai 234 | PPh Pemotongan/Pemungutan | V-A3-32 |
| 280 sampai 284 | PPN dan SPT PPN | V-A4-22 |

## Nomor paket dan id

- Nomor paket 1 sampai 315 utuh, tanpa lubang, sama dengan urutan berkas asal. Nomor disimpan di `sumber.no`.
- Id soal melanjutkan nomor terakhir tiap modul (lihat tabel pemetaan). Dalam satu mata uji, id naik searah nomor paket.
- Pasangan ref berkas asal dan id aplikasi ada di `idmap-lm.json`. Berkas itu disimpan di luar repo, bersama catatan kerja versi ini. Alat pasang memakainya supaya pasang ulang memberi id yang sama.

## Soal bertanda ◐

17 soal: nomor 25, 34, 45, 67, 119, 182, 235, 240, 263, 266, 270, 273, 282, 283, 297, 306, 310. Lima di antaranya adalah soal yang kuncinya berbeda dari berkas asal. Dua belas sisanya bertanda karena salah satu dari tiga hal. Pertama, aturan atau istilah di soal sudah berganti, tetapi kunci masih pilihan terbaik. Kedua, angka tarifnya berasal dari naskah yang belum ada di pustaka aplikasi. Ketiga, soal bergantung pada anggapan yang tidak disebut, misalnya cara hitung tanggal atau pemakaian sedan. Catatannya tampil di lipatan "Catatan sumber" saat latihan dan ulas, tidak saat simulasi berjalan.

Batas soal ◐ untuk paket ini 17, dijaga di `test/_harap-970.js`.

## Butir cakupan

Delapan soal tidak punya butir resmi Tingkat B. Soal itu diterima sebagai soal paket di luar daftar butir resmi Tingkat B. Butir terdekat tidak diberikan, karena itu memalsukan peta.

| No | Soal | Mata uji | Alasan |
|---|---|---|---|
| 64 | A5-223 | Bea Meterai | Butir Tingkat B bea meterai tidak memuat pemeteraian kemudian dan sanksi. |
| 67 | A5-226 | Bea Meterai | Butir Tingkat B bea meterai tidak memuat pemungut bea meterai. |
| 206 | A1-241 | PPh OP | Butir PPh OP Tingkat B tidak memuat PPh final UMKM. |
| 209 | A1-244 | PPh OP | Butir PPh OP Tingkat B tidak memuat objek pajak. |
| 210 | A1-245 | PPh OP | Butir PPh OP Tingkat B tidak memuat subjek pajak. |
| 211 | A1-246 | PPh OP | Butir PPh OP Tingkat B tidak memuat subjek pajak. |
| 212 | A1-247 | PPh OP | Butir PPh OP Tingkat B tidak memuat pengecualian objek. |
| 213 | A1-248 | PPh OP | Butir PPh OP Tingkat B tidak memuat angsuran PPh 25. |

Butir PPh OP Tingkat B hanya NPPN, penghasilan keluarga, serta PTKP dan tarif. Butir bea meterai Tingkat B hanya objek, tarif, saat terutang, dan pihak yang terutang. Kedelapan soal tetap punya butir Tingkat A.

Akibat di layar: di Latih Tingkat B dengan saringan "butir resmi", delapan soal itu tidak ikut. Di Simulasi, Latih dengan Sumber soal paket ini, dan room, soal itu tetap ikut. Daftar nomornya dijaga di `test/_harap-970.js` (`LM_TANPA_B_NO`).

## Penjelasan mudah

- Field `pembahasan.mudah`, satu paragraf bahasa sehari-hari. Isinya mengapa jawabannya itu.
- Aturan teks: 140 sampai 650 huruf, kalimat paling banyak 30 kata, tanpa nomor pasal atau ayat, tanpa menyebut huruf opsi, tanpa tanda pisah sebagai jeda, tanpa tanda panah. Aturan ini dijaga validator dan `test/v970-data.test.js`.
- Tampil di panel pembahasan dengan judul "Penjelasan mudah", sesudah tanda benar atau salah dan sebelum pembahasan "Menurut ketentuan".
- Soal paket ini: 315 teks, 269 sampai 578 huruf.
- Soal lama: 2.791 teks. Pemeriksa menerima 2.429 apa adanya dan menulis ulang 362. Dengan itu semua 3.106 soal di bank punya Penjelasan mudah.
- Isi Penjelasan mudah soal lama, isi lengkap 315 soal paket, dan peta butirnya dikunci dengan sidik di `test/v970-data.test.js` dan `test/_harap-970.js`.

## Bentuk data

Contoh soal nomor 1 (dipendekkan):

```js
{
  id: "B7-336", topik: "B7.7", tingkat: ["B", "C"], jenis: "konsep", kesulitan: 1,
  stem: "Transaksi berikut yang menimbulkan beda temporer antara laba komersial dan laba fiskal adalah ...",
  opsi: { A: "Biaya sumbangan yang tidak dapat dikurangkan", B: "Biaya representasi tanpa daftar nominatif",
          C: "Penghasilan bunga deposito yang dikenai PPh final", D: "Perbedaan metode/masa penyusutan aset tetap komersial dan fiskal" },
  kunci: "D",
  pembahasan: { mudah: "Kita perlu mencari transaksi yang membuat laba buku dan laba pajak berbeda hanya karena soal waktu. ...",
                inti: "Beda temporer timbul bila ...", mengapaSalah: { A: "...", B: "...", C: "..." }, jebakan: "..." },
  verifikasi: "✅",
  opsiLepas: { teks: "Sanksi administrasi pajak", alasan: "Sanksi administrasi pajak dilarang dikurangkan ... jadi beda tetap." },
  sumber: { set: "LM-B-2026-11", no: 1, judul: "Latihan UKP B per mata uji (kiriman 16 Nov 2026)", tingkat: "B", bagian: "Akuntansi Perpajakan" },
  sejak: "9.7.0"
}
```

- Soal ◐ punya `peringatan` (teks "Catatan sumber").
- Soal kasus punya `kasusId`.
- Peta butir cakupan tiap soal ada di `js/data/peta-butir.js`.
- Rincian field ada di `docs/SKEMA-KONTEN.md`.

## Cara memasang ulang

Alat pasang (`pasang-lm.js` dan `pasang-mudah.js`) dan berkas isinya disimpan di luar repo, bersama catatan kerja versi ini. Berkas isi itu adalah `akhir.json` (315 soal paket), `mudah-bank.json` (Penjelasan mudah 2.791 soal lama), `idmap-lm.json` (pasangan ref dan id), dan `tanpa-b.json` (daftar soal tanpa butir B). Perintah di bawah dijalankan dari folder catatan kerja itu. `<pohon>` adalah folder aplikasi. `pasang-lm.js` membaca `idmap-lm.json` sendiri.

```
# soal paket: tanpa --tulis hanya laporan; dengan --tulis soal yang berubah diganti di tempat
node pasang-lm.js pasang <pohon> akhir.json --tanpa-b tanpa-b.json
node pasang-lm.js pasang <pohon> akhir.json --tanpa-b tanpa-b.json --tulis

# Penjelasan mudah soal lama (--ganti untuk mengganti teks yang sudah ada)
node pasang-mudah.js <pohon> mudah-bank.json --tulis

# membatalkan paket (tanpa --tulis hanya laporan)
node pasang-lm.js batal <pohon> --tulis
```

Sesudah pasang ulang: perbarui `test/_harap-970.js` (termasuk `sidikLM` dan `sidikPetaLM`), `SIDIK_MUDAH` di `test/v970-data.test.js` bila Penjelasan mudah soal lama berubah, `tanpa-b.json`, dan angka di dokumen ini. Lalu jalankan validator untuk 11 berkas `js/data/mu-*.js` dan `node --test test/`. Bila ada soal baru tanpa butir B, alat berhenti sampai daftar diputuskan ulang.

## Hasil

- 315 soal terpasang, 0 ditolak.
- Per mata uji: Akuntansi Perpajakan 52, Bea Meterai 16, KUP, PPSP, dan Pengadilan Pajak 46, PBB-P5L 17, PPh Badan dan SPT PPh Badan 53, PPh Orang Pribadi dan SPT PPh OP 30, PPh Pemotongan/Pemungutan 56, PPN dan SPT PPN 45.
- 10 studi kasus dengan 49 soal.
- 298 ✅ dan 17 ◐. 5 kunci berbeda dari berkas asal.
- Kunci: A 79, B 87, C 72, D 77.
- Pengerja buta cocok dengan kunci akhir pada 312 dari 315 soal.
- Pemeriksa menerima 260 soal dan memperbaiki 55.
- 8 soal di luar daftar butir resmi Tingkat B.
- Penjelasan mudah: 315 soal paket dan 2.791 soal lama.
