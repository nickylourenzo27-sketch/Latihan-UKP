# Skema Konten Modul — `js/data/mu-<KODE>.js`

Satu berkas per kelompok materi (A1, A2, A3, A4, A5, B6, B7, B8, C9, C10, E). Berkas adalah JavaScript biasa yang memanggil **satu kali** `UKP.register({...})` dengan objek literal (tanpa fungsi, tanpa template literal, tanpa `require`). Semua teks Bahasa Indonesia baku. Angka rupiah ditulis sebagai number (bukan string) di `data`, tetapi di `stem`/`opsi`/`belakang` ditulis format Indonesia: `Rp12.000.000`. Persen pakai koma: `0,5%`.

Validasi: `node tools/validate-module.js js/data/mu-A2.js` harus lolos (exit 0) sebelum selesai.

```js
UKP.register({
  meta: {
    kode: "A2", slug: "kup", nama: "KUP, PPSP, dan Pengadilan Pajak",
    diujiDi: ["A", "B", "C"],              // tingkat yang menguji kelompok ini
    durasiUSKP: 90,                        // menit simulasi 40 soal (lihat docs/KURIKULUM.md)
    perkiraanBobotSoal: { A: 0.25, B: 0.15, C: 0.12 },  // bobot soal di UKP komprehensif (perkiraan), jumlah per tingkat = 1 di seluruh kelompok
    statusPer: "2026-10-25",
    tujuan: "2–3 kalimat kompetensi yang diuji.",
    dasarHukumUtama: ["UU 6/1983 s.t.d.t.d. UU 7/2021 (UU KUP)", "PMK 81/2024"],
    perubahanTerbaru: [                    // 3–8 butir perubahan 2024–2026 yang relevan ujian
      { sebelum: "Setor pajak masa paling lambat tanggal 10", sesudah: "Paling lambat tanggal 15 bulan berikutnya", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01" }
    ]
  },
  topik: [                                 // SEMUA topik dari docs/KURIKULUM.md untuk kelompok ini, urut, slug persis sama
    {
      id: "A2.8", slug: "sanksi-administrasi-pidana", judul: "Sanksi administrasi dan pidana",
      estimasiMenit: 12, jenisDominan: ["hitung", "prosedur"],
      ringkasan: ["4–7 kalimat/poin inti, masing-masing satu fakta yang bisa diuji."],
      poinKunci: [ { label: "Uplift Ps. 13(2)", nilai: "15%", dasar: "Pasal 13 ayat (2) UU KUP", berlakuSejak: "2021-10-29" } ],  // 3–8 angka/fakta kunci
      dasarHukum: [ { pasal: "Pasal 7 ayat (1) UU KUP", catatan: "denda keterlambatan SPT" } ],  // ≥ 2
      jebakan: [ { teks: "Memakai bunga 2% flat — sudah diganti tarif KMK bulanan sejak UU HPP", tagSebab: "angka-usang" } ],  // 1–3
      contohSoal: {                        // satu contoh terpecahkan (hitung atau konsep)
        stem: "PT X terlambat ...", jawaban: "Rp606.000",
        langkah: [ ["Pokok", "Rp12.000.000"], ["Bulan (dibulatkan ke atas)", "5"], ["Tarif (acuan + 5%)/12", "1,01%"], ["Bunga", "Rp606.000"] ]
      },
      verifikasi: "✅"                     // "✅" terverifikasi riset | "◐" perlu cek (wajib isi peringatan)
      // peringatan: "..."                 // hanya bila verifikasi "◐"
    }
  ],
  soal: [                                  // ≥ 4 soal per topik (≥ 36 per kelompok); id unik "<KODE>-<3 digit>"
    {
      id: "A2-001", topik: "A2.8", tingkat: ["A", "B", "C"],
      jenis: "hitung",                     // konsep | klasifikasi | hitung | prosedur | kasus | baris-spt | etika
      kesulitan: 2,                        // 1 mudah · 2 sedang · 3 sulit
      stem: "PT X terlambat menyetor PPh Pasal 25 Masa Januari 2026 sebesar Rp12.000.000 ...",
      kataKualifikasi: ["kecuali"],        // kata pembalik di stem bila ada; [] bila tidak
      opsi: { A: "Rp606.000", B: "Rp484.800", C: "Rp1.200.000", D: "Rp354.000" },
      kunci: "A",
      jebakanOpsi: { B: "salah-hitung", C: "angka-usang", D: "lupa-pasal" },  // tag untuk tiap opsi salah: angka-usang | salah-baca | salah-hitung | final-nonfinal | lupa-pasal | salah-klasifikasi
      pembahasan: {
        inti: "Satu–dua kalimat: mengapa kunci benar.",
        jejakHitung: [ ["Pokok", "Rp12.000.000"], ["Bulan", "5"], ["Tarif", "1,01%"], ["Bunga = 12.000.000 × 1,01% × 5", "Rp606.000"] ],  // [] untuk soal konsep
        mengapaSalah: { B: "bulan dibulatkan ke bawah", C: "memakai 2% flat pra-UU HPP", D: "memakai uplift 0% milik Ps. 19" },
        jebakan: "Satu kalimat tentang jebakan utama soal ini."
      },
      dasarHukum: [ { pasal: "Pasal 9 ayat (2a) UU KUP", berlakuSejak: "2021-10-29" }, { pasal: "KMK 47/MK/EF.2/2026", berlakuSejak: "2026-10-01" } ],
      anggaranDetik: 150,
      verifikasi: "✅"
    }
  ],
  kartu: [                                 // ≥ 24 kartu; id unik "KT-<KODE>-<2 digit>"
    { id: "KT-A2-01", topik: "A2.3", tipe: "angka",   // angka | definisi | prosedur | pasal
      depan: "Batas penyetoran pajak masa sejak 2025?", belakang: "Tanggal 15 bulan berikutnya",
      dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01",
      menggantikan: "tanggal 10 (PMK 242/2014)",     // null bila tidak ada ketentuan lama
      dekTambahan: ["perubahan-2025-2026"] }         // [] atau ["perubahan-2025-2026"]
  ],
  kasus: [                                 // ≥ 2 studi kasus bertahap (A5 dan E: ≥ 1); id "K-<KODE>-<2 digit>"
    {
      id: "K-A2-01", judul: "Bunga STP atas kurang bayar PPh 25", topik: "A2.8", estimasiMenit: 15,
      narasi: "Paragraf kasus lengkap dengan semua angka yang dibutuhkan.",
      data: [ ["Pokok kurang bayar", "Rp12.000.000"], ["Jatuh tempo", "15 Februari 2026"], ["Tanggal bayar", "3 Juli 2026"] ],  // tabel data lengket
      langkah: [
        { no: 1, pertanyaan: "Berapa bulan sanksi bunga?", tipe: "angka", jawaban: 5, toleransi: 0,
          petunjuk: ["Bagian bulan dihitung satu bulan penuh", "15 Feb → 3 Jul = 4 bulan 18 hari", "Jawaban: 5 bulan"],
          penjelasan: "Pasal 19 ayat (1): bagian dari bulan dihitung penuh satu bulan." },
        { no: 2, pertanyaan: "Pasal yang dikenakan?", tipe: "pilihan", opsi: { A: "Ps. 9 ayat (2a)", B: "Ps. 13 ayat (2)", C: "Ps. 19 ayat (1)", D: "Ps. 14 ayat (3)" }, jawaban: "A",
          petunjuk: ["Keterlambatan setor pajak masa", "Uplift 5%", "Jawaban: A"], penjelasan: "..." },
        { no: 3, pertanyaan: "Jumlah bunga (Rp)?", tipe: "angka", jawaban: 606000, toleransi: 1000, petunjuk: ["...", "...", "..."], penjelasan: "..." }
      ],
      kesimpulan: "Ringkasan jalan hitung lengkap dalam 2–3 kalimat.",
      kalkulatorRef: "sanksi-bunga"        // jenis kalkulator terkait atau null
    }
  ],
  tips: [ { teks: "Baca kata 'paling lama' dua kali.", tagSebab: "salah-baca" } ]  // 3–6 tips strategi
});
```

## Aturan mutu
- Soal = **rekonstruksi dari kisi-kisi resmi, bukan soal asli**; tiap kelompok campuran jenis: ±40% hitung/kasus, ±35% konsep/klasifikasi, ±25% prosedur (E: etika/prosedur/konsep).
- Tiap soal: satu kunci jelas, tiga pengecoh dari kesalahan umum (lihat `jebakanOpsi`), stem tanpa ambiguitas, ketentuan **berlaku Oktober 2026** (angka dari `docs/research/02a` dan `02b`). Hindari soal yang bergantung pada fakta berlabel [BELUM TERVERIFIKASI] kecuali diberi `verifikasi: "◐"` dan `peringatan`.
- Angka kunci pada soal hitung harus dihitung ulang dan konsisten dengan jejakHitung.
- `tingkat` pada soal: subset dari `meta.diujiDi` (soal lanjutan untuk B/C saja boleh `["B","C"]`).
- Kartu: kalimat pendek; sisi belakang ≤ 15 kata; sertakan "menggantikan" bila ada ketentuan lama.
- Tidak menyebut nama/logo lembaga sebagai sumber soal; tidak menjanjikan kelulusan.

## Field tambahan (wajib dipakai sesuai docs/GAYA-SOAL.md)
- `kasusId` (string, opsional) pada soal: soal-soal satu vignette memakai nilai yang sama, mis. `"V-A3-01"`; urutannya dijaga saat diacak.
- `kutipan` (string, opsional) pada soal: kutipan/parafrase setia 1–4 kalimat pasal yang relevan, ditampilkan sebagai kotak kutipan sebelum stem.
- `laporanUjian` (string[], opsional) pada soal: kode laporan peserta yang butirnya diarahkan soal ini, format `"<Tingkat>-<YYYY>-<MM>"`, mis. `["C-2026-10"]` atau `["B-2026-10", "C-2026-10"]`. Kode yang dipakai: `"B-2026-10"` (laporan UKP Tingkat B, Oktober 2026) dan `"C-2026-10"` (laporan peserta lulus UKP Tingkat C, 28 Oktober 2026); butirnya di `docs/PENGALAMAN-UJIAN.md`. Dipakai Latih › "Butir laporan peserta" (Semua / Tingkat B / Tingkat C) dan tombol "Latih butir laporan" di Info Ujian; bila belum ada soal bertanda untuk suatu tingkat, Latih memakai saringan gaya UKP nyata. Hanya tandai soal yang benar-benar menguji butir laporan itu; field ini tidak mengubah `tingkat` soal. Validator: harus array string tidak kosong dan tiap kode cocok pola `^[ABC]-\d{4}-(0[1-9]|1[0-2])$` (galat bila tidak); kode ganda diberi peringatan.
- Target soal per modul: ≥ 40 (A5 dan E ≥ 24); ≥ 50% bergaya kasus praktik; ≥ 2 vignette; ≥ 3 soal berkutipan.

## Soal pengganti (v9.5.0)
Setiap soal yang sudah dibahas, dilatih bersama, atau diujikan sebaiknya punya soal baru yang menguji hal yang sama dengan data lain. Soal baru itu disebut **soal pengganti** dan ditulis di modul yang sama dengan dua field opsional:
- `kembaranDari` (string, opsional): id soal asli yang digantikan, mis. `"A1-034"`. Aturan: id itu ada di **modul yang sama**, bukan id soal itu sendiri, dan soal yang dirujuk **tidak** punya `kembaranDari` (akar selalu soal asli; jangan merantai pengganti ke pengganti). Satu soal asli boleh punya lebih dari satu pengganti. Soal pengganti memakai id baru dengan pola biasa (`"A1-201"`), punya semua field wajib soal, dan sebaiknya bertopik sama dengan soal aslinya.
- `sejak` (string, opsional): versi aplikasi saat soal masuk, pola `^\d+\.\d+\.\d+$`, mis. `"9.5.0"`. Boleh dipakai pada soal apa pun, tidak hanya soal pengganti.

Istilah: **keluarga** = satu soal asli beserta semua penggantinya; **akar** keluarga = id soal asli. Aplikasi menyusun sesi dengan paling banyak satu soal per keluarga dan mendahulukan keluarga yang belum dipakai atau soal pengganti yang belum dipakai (`UKP.belajar.urutBank`, `UKP.konten.akar/keluarga/penggantiDari`). Di antarmuka pakai istilah "soal pengganti".

Validator (`node tools/validate-module.js`) memberi galat bila `kembaranDari` bukan string, menunjuk dirinya sendiri, menunjuk soal di modul lain, menunjuk id yang tidak ada, atau menunjuk soal yang juga soal pengganti; dan bila `sejak` tidak cocok pola.

```js
{ id: "A1-201", kembaranDari: "A1-034", sejak: "9.5.0", topik: "A1.4", tingkat: ["A", "B", "C"], /* field soal lain seperti biasa */ }
```

## Peta butir cakupan — `js/data/peta-butir.js` (v9.5.0)
Menghubungkan tiap soal dengan butir **daun** cakupan materi resmi (`js/data/cakupan.js`, butir tanpa `anak`). Skrip klasik, dimuat di `index.html` setelah `js/data/cakupan.js` dan terdaftar di `sw.js`:

```js
(function () {
  'use strict';
  var P = {
    versi: 1,
    peta: { "A1-001": ["A.3.1", "B.5.3"] },   // id soal → ID butir DAUN di js/data/cakupan.js (boleh lintas tingkat)
    luar: { "E-001": "alasan singkat" }        // soal di luar cakupan resmi → alasan
  };
  if (typeof UKP !== 'undefined') UKP.petaButir = P;
  if (typeof module !== 'undefined' && module.exports) module.exports = P;
})();
```

- `peta`: kunci = id soal yang ada di `js/data/mu-*.js`; nilai = larik ID butir daun. Satu soal boleh dipetakan ke beberapa butir di tingkat berbeda.
- `luar`: soal yang sengaja tidak dipetakan karena di luar cakupan resmi, dengan alasan singkat. Satu soal tidak muncul di `peta` dan `luar` sekaligus.
- Berkas boleh kosong (`peta: {}`, `luar: {}`). Aplikasi tetap berjalan bila peta kosong, bila soal tidak ada di peta, dan bila ID butir tidak ada di cakupan (diabaikan diam-diam). Pembacaan lewat `UKP.konten.butirSoal(id)` dan `UKP.konten.soalButir(idButir, tingkat)`.
- Dipakai di antarmuka (v9.5.0): halaman Bank soal (`#bank`, lipatan "Per butir materi resmi"), saringan `butir=<ID butir>` di Latih (pool = soal yang dipetakan ke butir itu untuk tingkat butirnya), dan jumlah soal serta tautan Latih per butir di halaman Cakupan materi. Soal yang masuk di versi berjalan (`sejak` sama dengan `UKP.versi`) dihitung di Bank soal sebagai "N soal baru di versi ini".
