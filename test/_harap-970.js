'use strict';
// v9.7.0 harapan paket LM-B-2026-11 untuk test/v970-data.test.js, test/v955-data.test.js, test/v950.test.js.
// Bukan berkas uji (tidak berakhiran .test.js), jadi test/index.js tidak menjalankannya sendiri.
// TAHAP 'contoh' = 3 soal contoh-akhir.json (uji kering PK2); 'lengkap' = akhir.json 315 soal. Perbarui bila isi berubah.
const LM = 'LM-B-2026-11'; const JUDUL = 'Latihan UKP B per mata uji (kiriman 16 Nov 2026)';
const MODUL = { 'Akuntansi Perpajakan': 'B7', 'Bea Meterai': 'A5', 'KUP, PPSP, dan Pengadilan Pajak': 'A2', 'PBB-P5L': 'B8', 'PPh Badan dan SPT PPh Badan': 'B6', 'PPh Orang Pribadi dan SPT PPh OP': 'A1', 'PPh Pemotongan/Pemungutan': 'A3', 'PPN dan SPT PPN': 'A4' };
const TAHAP = 'lengkap';
const HARAP = {
  contoh: { jumlahBagian: { 'Akuntansi Perpajakan': 2, 'Bea Meterai': 1 }, nomor: [1, 10, 53], batasTanda: 0, kasusMin: 1 },
  lengkap: { jumlahBagian: { 'Akuntansi Perpajakan': 52, 'Bea Meterai': 16, 'KUP, PPSP, dan Pengadilan Pajak': 46, 'PBB-P5L': 17, 'PPh Badan dan SPT PPh Badan': 53, 'PPh Orang Pribadi dan SPT PPh OP': 30, 'PPh Pemotongan/Pemungutan': 56, 'PPN dan SPT PPN': 45 },
             nomor: Array.from({ length: 315 }, (_, i) => i + 1), batasTanda: 18, kasusMin: 2, kasus: 10, soalKasus: 49,
             // Sidik isi lengkap (sha256, 24 huruf pertama). Dihitung dari pohon yang terbukti sama persis dengan akhir.json lewat idmap-lm.json.
             // sidikLM: tiap soal ber-sumber.set LM tanpa kode, semua field termasuk pembahasan.mudah, urut id, baris "id:sha256(JSON)".
             // sidikPetaLM: tiap id soal LM, urut id, baris "id:" + JSON [peta atau null, luar atau null] dari UKP.petaButir.
             // Perbarui keduanya bila akhir.json atau peta butirnya dipasang ulang.
             // v9.7.1: sidikLM diperbarui (dulu 9143c0c3beebd0b466b63445) dan batasTanda 17 menjadi 18. Hanya A2-336 yang berubah:
             // pembahasan (inti, mengapaSalah, mudah), dasarHukum, verifikasi ◐, dan peringatan karena ancaman pidana disesuaikan UU 1/2026.
             // Stem, opsi, kunci, dan peta butirnya tetap, jadi sidikPetaLM tidak berubah.
             // v9.7.1 putaran 2: sidikLM diperbarui lagi (dulu 73b6314c84706d66ac6889ef). Hanya A2-308 yang berubah: pembahasan.jebakan dan
             // pembahasan.mudah kini memuat pengecualian denda keberatan 30% bila banding dicabut atau tidak dapat diterima.
             // Stem, opsi, kunci, verifikasi, dan peta butirnya tetap, jadi batasTanda dan sidikPetaLM tidak berubah.
  // v10.2.4: atas permintaan pemilik, butir (2) vignette V-A3-32 (A3-408 sampai A3-412) diubah dari CV tanpa NPWP menjadi sewa
  // kendaraan dari orang pribadi tanpa NPWP; angka, opsi, dan kunci tetap. Sidik paket LM diperbarui karenanya.
             sidikLM: { n: 315, sidik: 'b5faec2e351a36d8ede97bbb' }, sidikPetaLM: { n: 315, sidik: '2842263d317f2e1649efa2fe' } },
}[TAHAP];
HARAP.jumlah = Object.values(HARAP.jumlahBagian).reduce((a, n) => a + n, 0);
// 8 soal tanpa butir resmi Tingkat B (alasanB di akhir.json): nomor paket, bukan id (id bergantung alokasi)
const LM_TANPA_B_NO = TAHAP === 'lengkap' ? [64, 67, 206, 209, 210, 211, 212, 213] : [];
module.exports = { LM, JUDUL, MODUL, TAHAP, HARAP, LM_TANPA_B_NO };
