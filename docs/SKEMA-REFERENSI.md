# Skema Data Referensi — `js/data/ref.js`

Satu berkas JavaScript: `UKP.registerRef({...})` dipanggil sekali, objek literal murni (tanpa fungsi). Bahasa Indonesia baku. Semua fakta berlabel `verifikasi` ("✅" terkonfirmasi riset / "◐" perlu cek) dan, bila relevan, `berlakuSejak`.

```js
UKP.registerRef({
  statusPer: "2026-10-25",
  versiKonten: "2026.10.1",
  ujian: {
    rezim: { nama: "UKP", dasar: "PMK 55/2026", berlakuSejak: "2026-08-24", penyelenggara: "BPPK Kemenkeu", ringkas: "3–4 kalimat tentang UKP: komprehensif per tingkat, tidak berjenjang, CAT daring, lulus ≥ 60, SKK 3 tahun, ujian profesi asosiasi terpisah", verifikasi: "✅" },
    rezimLama: { nama: "USKP", ringkas: "...", terakhir: "2026-10-15", verifikasi: "✅" },
    format: {
      USKP: { soal: 40, poin: 2.5, lulus: 60, catatan: "per mata ujian; format Des 2024–Okt 2026", verifikasi: "✅" },
      UKP: { A: { menit: 180, soalPerkiraan: 60, kelompok: ["A1","A2","A3","A4","A5"] }, B: { menit: 210, soalPerkiraan: 80, kelompok: ["A1","A2","A3","A4","A5","B6","B7","B8"] }, C: { menit: 210, soalPerkiraan: 100, kelompok: ["A1","A2","A3","A4","A5","B6","B7","B8","C9","C10"] }, lulus: 60, label: "Jumlah soal resmi belum diumumkan; angka di sini perkiraan.", verifikasi: "◐" }
    },
    tingkat: { A: { cakupanIzin: "...", syaratIzin: "...", jamBelajar: [70, 110] }, B: { ..., jamBelajar: [90, 145] }, C: { ..., jamBelajar: [110, 180] } },
    periode: [ { id: "P1-8-2026", nama: "UKP Periode 1–8 Tahun 2026", tingkat: ["A","B","C"], ujian: ["2026-10-26", "2026-10-29"], pendaftaran: ["2026-10-16T08:00+07:00", "2026-10-20T17:00+07:00"], hasil: "2026-11-12", skk: "2026-11-19", catatan: "...", verifikasi: "✅" }
      // tambahkan periode berikutnya yang diumumkan (Nov/Des 2026) dengan verifikasi sesuai sumber; bila belum ada tanggal, isi null dan catatan
    ],
    aturan: [ { teks: "Satu ujian aktif per waktu; daftar ulang setelah hasil terbit.", verifikasi: "◐" } ],
    perangkat: { cpu: "...", ram: "...", os: "...", seb: "...", masukSebelumMenit: 30, terlambatGugurMenit: 15, verifikasi: "◐" },
    faqTransisi: [ { tanya: "Sertifikat USKP lama masih berlaku?", jawab: "...", dasar: "PMK 55/2026 Ps. 60", verifikasi: "✅" } ]   // 8–12 butir
  },
  peraturan: [   // ≥ 60 instrumen yang diujikan A/B/C: UU, PP, PMK, PER, KMK, SE utama
    { id: "PMK-81-2024", nomor: "PMK 81 Tahun 2024", judul: "Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan", jenis: "PMK", berlakuSejak: "2025-01-01", status: "berlaku",  // berlaku | dicabut | diganti
      menggantikan: ["PMK 242/PMK.03/2014", "PMK 243/PMK.03/2014"], digantikanOleh: null,
      pasalDiujikan: [ { pasal: "Pasal 94", ringkas: "setor pajak masa paling lambat tanggal 15" } ],
      kelompok: ["A2","A3","A4"], verifikasi: "✅", urlJdih: "https://jdih.kemenkeu.go.id/..." }  // url boleh null bila tidak pasti
  ],
  kmkBunga: [     // tarif bunga per bulan: 12 bulan terakhir minimal (Nov 2025–Okt 2026); tarif sudah per bulan (acuan+uplift)/12 dalam desimal
    { kmk: "KMK 47/MK/EF.2/2026", periode: "2026-10", tarif: { "0": 0.0059, "5": 0.0101, "10": 0.0142, "15": 0.0184, "20": 0.0226 }, imbalanBunga: 0.0059, verifikasi: "✅" }
  ],
  glosarium: [    // ≥ 90 istilah lintas kelompok
    { istilah: "Tarif Efektif Rata-rata (TER)", singkatan: "TER", definisi: "...", kelompok: ["A3"], dasar: "PP 58/2023" }
  ],
  angkaHariIni: [ // ≥ 40 fakta angka ✅ untuk kartu "Angka hari ini"
    { angka: "15", kalimat: "Tanggal paling lambat penyetoran pajak masa sejak 1 Januari 2025.", dasar: "PMK 81/2024 Pasal 94", berlakuSejak: "2025-01-01", kelompok: "A2" }
  ],
  perubahan: [    // ≥ 25 perubahan 2024–2026 lintas kelompok: untuk halaman "Perubahan 2024–2026" dan dek kartu
    { kelompok: "A4", sebelum: "PPN 11%", sesudah: "Tarif 12%, DPP nilai lain 11/12 untuk non-mewah (efektif 11%)", dasar: "PMK 131/2024", berlakuSejak: "2025-01-01", verifikasi: "✅" }
  ],
  tabelAngka: {   // tabel ringkas untuk halaman Referensi › Tabel angka
    ptkp: [ ["TK/0", "Rp54.000.000"], ... ], lapisanPs17: [ ["s.d. Rp60 jt", "5%"], ... ], dendaSpt: [...], uplift: [...], tenggat: [...]
  },
  strategiPG: [   // 6–10 butir modul strategi pilihan ganda (judul, isi 2–4 kalimat)
    { judul: "Eliminasi dua opsi", isi: "..." }
  ]
});
```
Sumber fakta: `docs/research/01-silabus-format-ujian.md`, `02a-…`, `02b-…`. Yang [BELUM TERVERIFIKASI] di riset → `verifikasi: "◐"`.
