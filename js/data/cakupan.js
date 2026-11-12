/* Cakupan materi resmi Uji Kompetensi Perpajakan (USKP/UKP): dokumen "CAKUPAN MATERI UJI KOMPETENSI PERPAJAKAN"
   (materi resmi KLC/BPPK). Sejak v9.5.0 transkripsi mengikuti salinan PDF 13 halaman yang lebih bersih (November 2026);
   salinan pertama (Oktober 2026) berasal dari gambar yang dibagikan peserta di Threads. Transkripsi setia per tingkat,
   mata ujian, subjek, dan butir bertingkat (penomoran tercetak di field nomor), dipetakan ke ID topik aplikasi dengan
   nilai cakupan hasil pemeriksaan isi modul (penuh = ada materi dan soal; sebagian = hanya disinggung; belum = tidak ada).
   Pada butir induk, topik = gabungan topik anak dan cakupan = rangkuman anak. Kejanggalan cetak: lihat catatanDokumen.
   Peta soal ke butir daun ada di js/data/peta-butir.js.
   Skrip klasik (tanpa build): menyetel UKP.cakupanResmi di peramban dan module.exports di Node. */
(function () {
  'use strict';
  var C = {
    sumber: {
      judul: "CAKUPAN MATERI UJI KOMPETENSI PERPAJAKAN",
      penerbit: "BPPK / KLC Kemenkeu",
      dibagikan: "Salinan PDF 13 halaman dari pemimpin tim, November 2026; salinan pertama dari Threads @mdutaa, Oktober 2026",
      kutipan: "materi resmi yang di-share KLC … yang keluar di soal gak melebar dari situ",
      catatan: "Dokumen 13 halaman (tabel No | Mata Ujian | Subjek | Materi) yang beredar sebagai materi resmi dari KLC/BPPK; salinan yang diterima tidak memuat kop, tanggal, atau nomor dokumen, sehingga status resminya bersandar pada keterangan peserta. Sejak v9.5.0 transkripsi dicocokkan kata demi kata dengan salinan PDF yang lebih bersih: Tingkat B kini memuat 8 butir PBB-P5L pada baris 4 dan PPh Badan pada baris 7, dan satu kata di Tingkat A dibetulkan. Ejaan asli dipertahankan (mis. \"Kontruksi\", \"Cooperation\"). Nilai cakupan adalah penilaian aplikasi berdasarkan pemeriksaan isi modul (ringkasan, poin kunci, soal, kartu), bukan bagian dokumen."
    },
    catatanDokumen: [
      "Salinan pertama (gambar, Oktober 2026) menaruh 17 butir PPh Badan pada baris \"4 PBB-P5L\" Tingkat B, tidak memuat butir PBB-P5L Tingkat B, dan melompat dari nomor 6 ke 8. Salinan PDF (November 2026) mencetak Tingkat B bernomor 1 sampai 8: baris 4 PBB-P5L dengan 8 butir (ID \"B.4.1\" sampai \"B.4.8\") dan baris 7 PPh Badan dengan 17 butir (ID \"B.7.1\" sampai \"B.7.17\"). Transkripsi mengikuti salinan PDF; ID lama \"B.PBB.n\" dan ID PPh Badan \"B.4.n\" tidak dipakai lagi.",
      "Tingkat A, PPh OP butir 5: salinan PDF mencetak \"Penghasilan yang Dikenakan PPh Final\"; salinan pertama terbaca \"Pajak Final\".",
      "Tingkat B: subjek Orang Pribadi pada PPh Pot/Put tercetak sebagai lanjutan baris 6 di halaman berikutnya tanpa nomor/nama mata ujian baru.",
      "Tingkat B, PPN subjek Badan Dalam Negeri: sub-butir 3.a dan 3.d tercetak bernomor 4), 5), 6); penomoran asli dipertahankan (ID mis. \"B.8.3.a.4\").",
      "Tingkat C, PPN subjek Badan Dalam Negeri: sub-butir Objek PPN tercetak rata a sampai l, termasuk judul \"Penyerahan di dalam Daerah Pabean atas:\" (a) dan \"Ekspor\" (g) sebagai butir sendiri; dipertahankan apa adanya sehingga dua judul itu ikut terhitung sebagai butir daun.",
      "Tingkat C, Akuntansi Perpajakan subjek Transaksi Internasional: butir 9 mengulang butir 4 (hanya beda koma); keduanya dipertahankan.",
      "Tanda kutip sisa (\") di akhir beberapa butir (Tingkat A 4.4.d dan 4.7.g, Tingkat B PPh Pot/Put 7.g, Tingkat C Pajak Internasional 7.b dan PPN subjek Orang Pribadi 1.f) dihapus dari teks; tercatat di transkripsi.",
      "Ejaan tercetak dipertahankan: \"Kontruksi\" (konstruksi), \"Controlled Foreign Cooperation Rules\" (maksudnya Corporation/CFC), \"Biaya Dibayar di Muka\" (B) vs \"Biaya Dibayar Dimuka\" (C), \"Perhitungan\" vs \"Penghitungan\". Spasi ganda pada \"berdasarkan  Permintaan\" dirapikan.",
      "Butir tanpa nomor (Bea Meterai B dan C, KUP subjek Orang Pribadi B dan C, PPh OP C) disimpan sebagai satu butir dengan nomor null.",
      "Struktur ID: tingkat.noMataUjian.urutan; urutan butir tingkat pertama berjalan terus lintas subjek dalam satu mata ujian (mis. KUP B subjek Orang Pribadi = \"B.3.12\"), sedangkan field nomor menyimpan penomoran tercetak. Anak/cucu memakai penanda tercetak (\"a\", \"1\").",
      "Tingkat A tidak memuat kolom Subjek dan tidak memuat butir PPh Pasal 22; subjek ditulis null."
    ],
    tingkat: {
      A: {
        judul: "Tingkat A",
        mataUjian: [
          {
            no: "1", urut: 1, nama: "Bea Meterai", namaNormal: "Bea Meterai", kelompok: "A5",
            subjek: [
              { nama: null, butir: [
                { id: "A.1.1", nomor: "1", teks: "Objek, Tarif, Saat Terutang, dan Pihak Yang Terutang Bea Meterai dan pengecualiannya", topik: ["A5.1","A5.2","A5.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.1.2", nomor: "2", teks: "Pemungut Bea Meterai", topik: ["A5.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.1.3", nomor: "3", teks: "Tata Cara Pembayaran Meterai", topik: ["A5.3","A5.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.1.4", nomor: "4", teks: "Sanksi administrasi maupun pidana dalam Bea Meterai", topik: ["A5.6"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "2", urut: 2, nama: "KUP, PPSP, PP", namaNormal: "KUP, PPSP, PP", kelompok: "A2",
            subjek: [
              { nama: null, butir: [
                { id: "A.2.1", nomor: "1", teks: "NPWP / Pengukuhan PKP", topik: ["A2.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.2", nomor: "2", teks: "Pembayaran dan pelaporan pajak", topik: ["A2.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.3", nomor: "3", teks: "STP dan SKP (SKPKB, SKPN, SKPLB, SKPKBT)", topik: ["A2.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.4", nomor: "4", teks: "Penagihan Pajak dengan Surat Paksa (PPSP)", topik: ["A2.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.5", nomor: "5", teks: "Permohonan Pembetulan, Keberatan dan Permohonan Pengurangan dan Penghapusan Sanksi Administrasi atau Pembatalan Ketetapan Pajak yang Tidak Benar", topik: ["A2.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.6", nomor: "6", teks: "Gugatan Banding di Pengadilan Pajak, Pengajuan PK ke MA", topik: ["A2.11"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.7", nomor: "7", teks: "Pencatatan dan Pembukuan", topik: ["A2.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.8", nomor: "8", teks: "Penelitian, pemeriksaan dan penyidikan", topik: ["A2.5","A2.12"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.9", nomor: "9", teks: "Sanksi-sanksi", topik: ["A2.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.10", nomor: "10", teks: "Restitusi", topik: ["A2.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.2.11", nomor: "11", teks: "Ketentuan Pidana", topik: ["A2.8","A2.5","A2.12"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "3", urut: 3, nama: "PPh OP", namaNormal: "PPh Orang Pribadi", kelompok: "A1",
            subjek: [
              { nama: null, butir: [
                { id: "A.3.1", nomor: "1", teks: "Yang menjadi Subjek Pajak Orang Pribadi termasuk WBT (Warisan Belum Terbagi) dan Subjek Pajak DN dan Subjek Pajak LN Orang Pribadi", topik: ["A1.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.2", nomor: "2", teks: "Saat dimulai dan berakhirnya Kewajiban Pajak Subjektif Orang Pribadi termasuk WBT (Warisan Belum Terbagi)", topik: ["A1.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.3", nomor: "3", teks: "Pihak yang Dikecualikan Subjek Pajak Orang Pribadi (Pasal 3 UU PPh)", topik: ["A1.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.4", nomor: "4", teks: "Objek Pajak Orang Pribadi dan Penghasilan yang Dikenakan Pajak", topik: ["A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.5", nomor: "5", teks: "Penghasilan yang Dikenakan PPh Final termasuk PPh Final bagi Wajib Pajak yang Memiliki Peredaran Bruto Tertentu", topik: ["A1.2","A1.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.6", nomor: "6", teks: "Penghasilan Orang Pribadi yang Dikecualikan dari Objek Pajak", topik: ["A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.7", nomor: "7", teks: "Biaya-biaya yang Boleh dan Tidak Boleh Dikurangkan", topik: ["A1.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.8", nomor: "8", teks: "Norma Penghitungan Penghasilan Neto", topik: ["A1.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.9", nomor: "9", teks: "Pemajakan atas Penghasilan Keluarga", topik: ["A1.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.10", nomor: "10", teks: "Kompensasi Kerugian", topik: ["A1.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.11", nomor: "11", teks: "PTKP, Tarif, dan Penghitungan PPh Terutang Orang Pribadi", topik: ["A1.6","A1.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.12", nomor: "12", teks: "Penghitungan Penghasilan Kena Pajak dan Penyesuaian Fiskal Orang Pribadi", topik: ["A1.3","A1.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.13", nomor: "13", teks: "Pelunasan Pajak Tahun Berjalan dan Kredit Pajak Orang Pribadi", topik: ["A1.8","A1.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.14", nomor: "14", teks: "Penghitungan Pajak Akhir Tahun dan Angsuran PPh Pasal 25 Orang Pribadi", topik: ["A1.8","A1.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.3.15", nomor: "15", teks: "SPT Tahunan PPh Orang Pribadi", topik: ["A1.11"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "4", urut: 4, nama: "PPh Pot/Put", namaNormal: "PPh Potong/Pungut", kelompok: "A3", catatan: "Tingkat A tidak memuat butir PPh Pasal 22.",
            subjek: [
              { nama: null, butir: [
                { id: "A.4.1", nomor: "1", teks: "Pemotong PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.2", nomor: "2", teks: "Penerima penghasilan yang wajib dipotong PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.3", nomor: "3", teks: "Penghasilan yang menjadi objek pemotongan PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.4", nomor: "4", teks: "Mekanisme pemotongan/pemungutan imbalan sehubungan dengan pekerjaan, jasa dan kegiatan yang diberikan dalam bentuk natura dan/atau kenikmatan", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.4.4.a", nomor: "a", teks: "Pemberian bingkisan (hari raya dan selainnya)", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "A3.1: bingkisan hari raya keagamaan (tanpa batas) dan selain hari raya keagamaan (s.d. Rp3 juta per pegawai per tahun) menurut PMK 66/2023 (soal A3-003, A3-075, A3-121; kartu KT-A3-75).", anak: [] },
                  { id: "A.4.4.b", nomor: "b", teks: "Fasilitas kerja dari pemberi kerja", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.4.c", nomor: "c", teks: "Fasilitas tempat tinggal untuk individu", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.4.d", nomor: "d", teks: "Fasilitas kendaraan dari pemberi kerja", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.4.5", nomor: "5", teks: "Pengurangan penghasilan bruto yang diperkenankan", topik: ["A3.1","A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.6", nomor: "6", teks: "Tarif, dasar pengenaan, pajak dan penerapannya", topik: ["A3.2","A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.7", nomor: "7", teks: "Penghitungan PPh 21 dalam tahun berjalan/masa atas:", topik: ["A3.2","A1.1","A3.3"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.4.7.a", nomor: "a", teks: "Penghasilan bruto teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.7.b", nomor: "b", teks: "Penghasilan bruto tidak teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.7.c", nomor: "c", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang tidak kehilangan kewajiban subjektif", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.7.d", nomor: "d", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang kehilangan kewajiban subjektif", topik: ["A3.2","A1.1"], cakupan: "penuh", catatan: "A3.2: penyetahunan dan prorata bulan bagi pegawai tetap yang meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya, dibandingkan dengan pegawai yang sekadar berhenti (soal A3-118–A3-120; kartu KT-A3-73–74).", anak: [] },
                  { id: "A.4.7.e", nomor: "e", teks: "Honorarium yang diterima pemberi jasa profesi", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.7.f", nomor: "f", teks: "Upah harian, upah satuan, upah borongan yang dihitung atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.7.g", nomor: "g", teks: "Honorarium dan imbalan lain yang dihitung tidak atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.4.8", nomor: "8", teks: "Hak dan kewajiban pemotong pajak", topik: ["A3.9","A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.9", nomor: "9", teks: "Hak dan kewajiban penerima penghasilan yang dipotong pajak", topik: ["A3.9","A3.2"], cakupan: "penuh", catatan: "A3.9: hak penerima (bukti potong, kredit pajak, pengembalian lebih potong, keberatan atas pemotongan pihak ketiga) dan kewajibannya (NIK/NPWP, status PTKP, lapor SPT Tahunan) (soal A3-122; kartu KT-A3-77).", anak: [] },
                { id: "A.4.10", nomor: "10", teks: "PPh 21 yang bersifat final (sebagai penerima)", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.4.10.a", nomor: "a", teks: "Pesangon yang dibayarkan sekaligus", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.4.10.b", nomor: "b", teks: "Tunjangan/jaminan hari tua yang dibayarkan sekaligus", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.4.11", nomor: "11", teks: "Tata cara pemotongan, penyetoran dan pelaporan", topik: ["A3.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.12", nomor: "12", teks: "Pengertian pemotongan secara umum (semua pasal)", topik: ["A3.9","A2.1"], cakupan: "penuh", catatan: "A3.9: pengertian pemotongan vs pemungutan, final vs tidak final, saat terutang, dan tambahan tarif tanpa NPWP lintas pasal (soal A3-123; kartu KT-A3-76, KT-A3-78).", anak: [] },
                { id: "A.4.13", nomor: "13", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 23", topik: ["A3.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.14", nomor: "14", teks: "Pengecualian dari pemotongan PPh Pasal 23", topik: ["A3.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.15", nomor: "15", teks: "Objek pemotongan, Siapa yang wajib memotong, Dasar pemotongan dan besarnya tarif PPh Pasal 4 Ayat (2)", topik: ["A3.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.16", nomor: "16", teks: "Pengecualian dari pemotongan PPh Pasal 4 Ayat (2)", topik: ["A3.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.17", nomor: "17", teks: "Tata cara pemotongan, penyetoran dan pelaporan PPh Pasal 4 Ayat (2)", topik: ["A3.7","A3.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.18", nomor: "18", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.4.19", nomor: "19", teks: "Pengecualian dari pemungutan PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "5", urut: 5, nama: "PPN dan SPT PPN", namaNormal: "PPN dan SPT Masa PPN", kelompok: "A4",
            subjek: [
              { nama: null, butir: [
                { id: "A.5.1", nomor: "1", teks: "Pengertian Dasar PPN, Karakteristik PPN, Mekanisme PPN", topik: ["A4.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.5.2", nomor: "2", teks: "Kewajiban PKP:", topik: ["A4.3","A2.2","A4.5","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.2.a", nomor: "a", teks: "Batasan Pengusaha Kecil", topik: ["A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.2.b", nomor: "b", teks: "Kewajiban Pelaporan Usaha", topik: ["A4.3","A2.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.2.c", nomor: "c", teks: "Pemungutan", topik: ["A4.5","A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.2.d", nomor: "d", teks: "Penyetoran", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.2.e", nomor: "e", teks: "Pelaporan", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.5.3", nomor: "3", teks: "Objek PPN:", topik: ["A4.2","A4.3","A4.6","A4.4","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.3.a", nomor: "a", teks: "Penyerahan di dalam Daerah Pabean atas:", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "", anak: [
                    { id: "A.5.3.a.1", nomor: "1", teks: "BKP dan non-BKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.3.a.2", nomor: "2", teks: "JKP dan non-JKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.3.a.3", nomor: "3", teks: "Kegiatan usaha / pekerjaan", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "A4.2: tiga syarat penyerahan terutang PPN (BKP/JKP, di dalam Daerah Pabean, dalam kegiatan usaha atau pekerjaan pengusaha) dan contoh penyerahan di luar kegiatan usaha vs Pasal 16D (soal A4-123, A4-124; kartu KT-A4-74).", anak: [] }
                  ] },
                  { id: "A.5.3.b", nomor: "b", teks: "Impor BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.3.c", nomor: "c", teks: "Pemanfaatan BKP tidak berwujud dan/atau JKP dari luar daerah pabean di dalam daerah pabean", topik: ["A4.2","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.3.d", nomor: "d", teks: "Ekspor", topik: ["A4.2","A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "A.5.3.d.1", nomor: "1", teks: "BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.3.d.2", nomor: "2", teks: "BKP tidak berwujud dan nonBKP tidak berwujud", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.3.d.3", nomor: "3", teks: "JKP dan nonJKP", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "A.5.3.e", nomor: "e", teks: "Kegiatan membangun sendiri", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.3.f", nomor: "f", teks: "Penyerahan aktiva perusahaan yang menurut tujuan semula tidak untuk diperjualbelikan", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.5.4", nomor: "4", teks: "Dasar Pengenaan Pajak (DPP) dan Tarif:", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.4.a", nomor: "a", teks: "Dasar Pengenaan Pajak (DPP)", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [
                    { id: "A.5.4.a.1", nomor: "1", teks: "Harga jual", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.4.a.2", nomor: "2", teks: "Nilai penggantian", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.4.a.3", nomor: "3", teks: "Nilai impor/ekspor", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.4.a.4", nomor: "4", teks: "Nilai lain", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "A.5.4.b", nomor: "b", teks: "Tarif PPN", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "A.5.4.b.1", nomor: "1", teks: "0% ekspor", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.4.b.2", nomor: "2", teks: "12%", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "A.5.4.b.3", nomor: "3", teks: "Besaran tertentu", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] }
                ] },
                { id: "A.5.5", nomor: "5", teks: "Faktur Pajak:", topik: ["A4.5","A4.7","A4.4","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.5.a", nomor: "a", teks: "Fungsi Faktur Pajak", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: fungsi faktur sebagai bukti pungutan PPN dan sarana pengkreditan PM (soal A4-119; kartu KT-A4-70).", anak: [] },
                  { id: "A.5.5.b", nomor: "b", teks: "Tata cara pengisian Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.5.c", nomor: "c", teks: "Ketentuan formal dan material Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "A4.5: syarat formal dan material faktur, faktur yang tidak berdasarkan transaksi sebenarnya, dan pidana Pasal 39A UU KUP (soal A4-120; kartu KT-A4-71).", anak: [] },
                  { id: "A.5.5.d", nomor: "d", teks: "Saat pembuatan Faktur Pajak", topik: ["A4.5","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.5.e", nomor: "e", teks: "Tata cara penggantian dan pembatalan faktur pajak serta pembetulan SPT", topik: ["A4.5","A4.10"], cakupan: "penuh", catatan: "A4.5: faktur pengganti vs pembatalan faktur dan kaitannya dengan pembetulan SPT Masa PPN (soal A4-024, A4-121; kartu KT-A4-72); rujuk A4.10.", anak: [] },
                  { id: "A.5.5.f", nomor: "f", teks: "Faktur Pajak tidak lengkap", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.5.g", nomor: "g", teks: "Nota Retur dan Nota Pembatalan", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: nota retur dan nota pembatalan dikurangkan pada masa retur/pembatalan, termasuk PM yang dikapitalisasi (soal A4-027, A4-063, A4-122, A4-125; kartu KT-A4-15, KT-A4-73).", anak: [] }
                ] },
                { id: "A.5.6", nomor: "6", teks: "Pengkreditan Pajak Masukan:", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.6.a", nomor: "a", teks: "Prinsip dasar", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.6.b", nomor: "b", teks: "Pengkreditan Pajak Masukan dalam Masa Pajak yang tidak sama", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.6.c", nomor: "c", teks: "Kriteria Pajak Masukan yang dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.6.d", nomor: "d", teks: "Kriteria Pajak Masukan yang tidak dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.5.7", nomor: "7", teks: "Pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.7.a", nomor: "a", teks: "Objek pemungutan pajak yang dilakukan oleh pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.7.b", nomor: "b", teks: "Kewajiban PKP Rekanan", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.7.c", nomor: "c", teks: "Kewajiban Pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "A.5.8", nomor: "8", teks: "Pengisian SPT Masa PPN oleh PKP Orang Pribadi", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "A.5.9", nomor: "9", teks: "Fasilitas:", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [
                  { id: "A.5.9.a", nomor: "a", teks: "PPN tidak dipungut", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "A.5.9.b", nomor: "b", teks: "Dibebaskan dari pengenaan PPN", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] }
            ]
          }
        ]
      },
      B: {
        judul: "Tingkat B",
        mataUjian: [
          {
            no: "1", urut: 1, nama: "Akuntansi Perpajakan", namaNormal: "Akuntansi Perpajakan", kelompok: "B7",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.1.1", nomor: "1", teks: "Jurnal hak dan kewajiban perpajakan (PPh Pot Put: Pasal 21, Pasal 22, Pasal 23, Pasal 24, Pasal 4 ayat 2)", topik: ["B7.1","C9.3"], cakupan: "penuh", catatan: "Jurnal PPh Pasal 21, 22, 23, 4 ayat (2), 25/29, dan 26 dibahas di B7.1/B7.8; jurnal PPh Pasal 24 ditambahkan di B7.1 (pajak luar negeri dicatat sebagai PPh 24 dibayar di muka, penyesuaian kelebihan atas batas kredit, PPh 29; soal B7-123–B7-125, kartu KT-B7-85–86); hitung batas kredit di C9.3.", anak: [] },
                { id: "B.1.2", nomor: "2", teks: "Aspek pajak terhadap akuntansi untuk Piutang, Persediaan, Biaya Dibayar di Muka, Aktiva Tetap, Aktiva Tetap Tidak Berwujud, Kewajiban dan Ekuitas", topik: ["B7.2","B7.3","B7.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.1.3", nomor: "3", teks: "Akuntansi Organisasi Nirlaba", topik: ["B7.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.1.4", nomor: "4", teks: "Aspek pajak terhadap akuntansi untuk pengakuan pendapatan dan biaya yang meliputi: Usaha, dan Di luar usaha", topik: ["B7.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.1.5", nomor: "5", teks: "Rekonsiliasi Fiskal dan Jurnal Penghitungan PPh Badan", topik: ["B7.6","B7.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "2", urut: 2, nama: "Bea Meterai", namaNormal: "Bea Meterai", kelompok: "A5",
            subjek: [
              { nama: "Orang Pribadi", butir: [
                { id: "B.2.1", nomor: null, teks: "Objek, Tarif, Saat Terutang, dan Pihak Yang Terutang Bea Meterai dan pengecualiannya", topik: ["A5.1","A5.2","A5.3"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "3", urut: 3, nama: "KUP, PPSP, PP", namaNormal: "KUP, PPSP, PP", kelompok: "A2",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.3.1", nomor: "1", teks: "NPWP / Pengukuhan PKP", topik: ["A2.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.2", nomor: "2", teks: "Pembayaran, pemotongan/pemungutan, penyetoran, dan pelaporan pajak", topik: ["A2.3","A3.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.3", nomor: "3", teks: "STP dan SKP (SKPKB, SKPN, SKPLB, SKPKBT)", topik: ["A2.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.4", nomor: "4", teks: "Penagihan Pajak dengan Surat Paksa (PPSP)", topik: ["A2.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.5", nomor: "5", teks: "Permohonan Pembetulan, Keberatan dan Permohonan Pengurangan dan Penghapusan Sanksi Administrasi atau Pembatalan Ketetapan Pajak yang Tidak Benar", topik: ["A2.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.6", nomor: "6", teks: "Gugatan Banding di Pengadilan Pajak, Pengajuan PK ke MA", topik: ["A2.11"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.7", nomor: "7", teks: "Pembukuan", topik: ["A2.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.8", nomor: "8", teks: "Penelitian, pemeriksaan dan penyidikan", topik: ["A2.5","A2.12"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.9", nomor: "9", teks: "Sanksi-sanksi", topik: ["A2.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.10", nomor: "10", teks: "Restitusi", topik: ["A2.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.3.11", nomor: "11", teks: "Ketentuan Pidana", topik: ["A2.8","A2.5","A2.12"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "B.3.12", nomor: null, teks: "Pencatatan dan Pembukuan", topik: ["A2.4","A1.4"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "4", urut: 4, nama: "PBB-P5L", namaNormal: "PBB-P5L", kelompok: "B8",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.4.1", nomor: "1", teks: "Subjek Pajak, Wajib Pajak, dan klasifikasi objek pajak", topik: ["B8.1","B8.4"], cakupan: "penuh", catatan: "B8.1: subjek pajak dan penetapan wajib pajak (Pasal 4 UU PBB), sektor PBB-P5L; B8.4: klasifikasi areal objek per sektor menurut PMK 186/2019 s.t.d.d. PMK 234/2022 (soal B8-003, B8-072).", anak: [] },
                { id: "B.4.2", nomor: "2", teks: "Subjek dan Objek Pajak yang dikecualikan/tidak dikenakan PBB", topik: ["B8.1","B8.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.4.3", nomor: "3", teks: "Pendaftaran, Pelaporan, dan Pendataan Objek Pajak", topik: ["B8.1"], cakupan: "sebagian", catatan: "Pendaftaran dan pelaporan dengan SPOP/LSPOP (Pasal 9, batas 30 hari) dibahas di B8.1 (soal B8-072); pendataan objek oleh DJP (tata cara pendataan, identifikasi dan verifikasi lapangan) belum punya ringkasan maupun soal tersendiri.", anak: [] },
                { id: "B.4.4", nomor: "4", teks: "Penetapan NJOP (Penilaian, Tahun Pajak dan saat terutang pajak)", topik: ["B8.3","B8.4","B8.1"], cakupan: "penuh", catatan: "B8.3: NJOP ditetapkan tiap tiga tahun (Pasal 6); B8.4: penilaian NJOP bumi dan bangunan per sektor; B8.1: keadaan objek 1 Januari tahun pajak sebagai saat yang menentukan pajak terutang (soal B8-003).", anak: [] },
                { id: "B.4.5", nomor: "5", teks: "Pengenaan PBB (NJOPTKP, NJKP, Tarif, PBB Terutang)", topik: ["B8.3","B8.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.4.6", nomor: "6", teks: "Ketetapan dan Penagihan Pajak (SPPT, SKP PBB, STP PBB)", topik: ["B8.5","B8.7"], cakupan: "penuh", catatan: "B8.5: SPPT, SKP PBB (denda 25%), STP PBB (denda 2% sebulan) dan jatuh temponya; B8.7: penagihan dengan Surat Teguran, Surat Paksa, penyitaan, dan lelang.", anak: [] },
                { id: "B.4.7", nomor: "7", teks: "Upaya Hukum PBB (Keberatan, Gugatan, Banding, Peninjauan Kembali)", topik: ["B8.6","B8.7"], cakupan: "sebagian", catatan: "Keberatan (Pasal 15 dan 16 UU PBB) dan banding ke Pengadilan Pajak dibahas di B8.6; gugatan atas pelaksanaan penagihan (14 hari, Pasal 40 ayat (2) UU 14/2002) hanya ada di tabel dasar hukum modul, kartu KT-B8-61 (B8.7), kasus K-B8-02 dan K-B8-06, serta soal B8-039 dan B8-096, tanpa ringkasan topik tersendiri; Peninjauan Kembali ke Mahkamah Agung belum ada sama sekali.", anak: [] },
                { id: "B.4.8", nomor: "8", teks: "Upaya Hukum non keberatan (Pembetulan, Pengurangan PBB, Pengurangan Denda Administrasi PBB, Pembatalan SPPT, SKP PBB, dan STP PBB yang tidak benar)", topik: ["B8.6","B8.5"], cakupan: "penuh", catatan: "B8.6 (judul diperluas) kini memuat pembetulan SPPT/SKP/STP, pengurangan PBB Pasal 19, pengurangan denda administratif PBB, dan pengurangan/pembatalan SPPT, SKP, STP PBB yang tidak benar (soal B8-104–B8-108, sebagian ◐; kartu KT-B8-65–68).", anak: [] }
              ] }
            ]
          },
          {
            no: "5", urut: 5, nama: "PPh OP", namaNormal: "PPh Orang Pribadi", kelompok: "A1",
            subjek: [
              { nama: "Orang Pribadi", butir: [
                { id: "B.5.1", nomor: "1", teks: "Norma Penghitungan Penghasilan Neto", topik: ["A1.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.5.2", nomor: "2", teks: "Pemajakan atas Penghasilan Keluarga", topik: ["A1.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.5.3", nomor: "3", teks: "PTKP, Tarif, dan Penghitungan PPh Terutang Orang Pribadi", topik: ["A1.6","A1.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "6", urut: 6, nama: "PPh Pot/Put", namaNormal: "PPh Potong/Pungut", kelompok: "A3", catatan: "Subjek Orang Pribadi tercetak sebagai lanjutan baris 6 di halaman berikutnya, tanpa nomor dan nama mata ujian baru.",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.6.1", nomor: "1", teks: "Pemotong PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.2", nomor: "2", teks: "Penerima penghasilan yang wajib dipotong PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.3", nomor: "3", teks: "Penghasilan yang menjadi objek pemotongan PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.4", nomor: "4", teks: "Mekanisme pemotongan/pemungutan imbalan sehubungan dengan pekerjaan, jasa dan kegiatan yang diberikan dalam bentuk natura dan/atau kenikmatan", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.6.4.a", nomor: "a", teks: "Pemberian bingkisan (hari raya dan selainnya)", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "A3.1: bingkisan hari raya keagamaan (tanpa batas) dan selain hari raya keagamaan (s.d. Rp3 juta per pegawai per tahun) menurut PMK 66/2023 (soal A3-003, A3-075, A3-121; kartu KT-A3-75).", anak: [] },
                  { id: "B.6.4.b", nomor: "b", teks: "Fasilitas kerja dari pemberi kerja", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.4.c", nomor: "c", teks: "Fasilitas tempat tinggal untuk individu", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.4.d", nomor: "d", teks: "Fasilitas kendaraan dari pemberi kerja", topik: ["A3.1","A1.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.6.5", nomor: "5", teks: "Pengurangan penghasilan bruto yang diperkenankan", topik: ["A3.1","A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.6", nomor: "6", teks: "Tarif, dasar pengenaan pajak, dan penerapannya", topik: ["A3.2","A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.7", nomor: "7", teks: "Penghitungan PPh 21 dalam tahun berjalan/masa atas:", topik: ["A3.2","A1.1","A3.3"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.6.7.a", nomor: "a", teks: "Penghasilan bruto teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.7.b", nomor: "b", teks: "Penghasilan bruto tidak teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.7.c", nomor: "c", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang tidak kehilangan kewajiban subjektif", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.7.d", nomor: "d", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang kehilangan kewajiban subjektif", topik: ["A3.2","A1.1"], cakupan: "penuh", catatan: "A3.2: penyetahunan dan prorata bulan bagi pegawai tetap yang meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya, dibandingkan dengan pegawai yang sekadar berhenti (soal A3-118–A3-120; kartu KT-A3-73–74).", anak: [] },
                  { id: "B.6.7.e", nomor: "e", teks: "Honorarium yang diterima pemberi jasa profesi", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.7.f", nomor: "f", teks: "Upah harian, upah satuan, upah borongan yang dihitung atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.7.g", nomor: "g", teks: "Honorarium dan imbalan lain yang dihitung tidak atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.6.8", nomor: "8", teks: "Hak dan kewajiban pemotong pajak", topik: ["A3.9","A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.9", nomor: "9", teks: "PPh 21 yang bersifat final:", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.6.9.a", nomor: "a", teks: "Pesangon yang dibayarkan sekaligus", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.9.b", nomor: "b", teks: "Tunjangan/jaminan hari tua yang dibayarkan sekaligus", topik: ["A3.4"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.6.10", nomor: "10", teks: "Tata cara pemotongan, penyetoran dan pelaporan (semua pasal)", topik: ["A3.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.11", nomor: "11", teks: "Pengisian SPT PPh Pasal 21", topik: ["A3.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.12", nomor: "12", teks: "Objek pemotongan, siapa yang wajib memotong, Dasar pemotongan dan besarnya tarif PPh Pasal 22", topik: ["A3.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.13", nomor: "13", teks: "Pengecualian dari pemotongan PPh Pasal 22", topik: ["A3.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.14", nomor: "14", teks: "PPh Pasal 22 Final", topik: ["A3.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.15", nomor: "15", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 23", topik: ["A3.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.16", nomor: "16", teks: "Pengecualian dari pemotongan PPh Pasal 23", topik: ["A3.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.17", nomor: "17", teks: "Objek pemotongan, Siapa yang wajib memotong, Dasar pemotongan dan besarnya tarif PPh Pasal 4 Ayat (2)", topik: ["A3.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.18", nomor: "18", teks: "Pengecualian dari pemotongan PPh Pasal 4 Ayat (2)", topik: ["A3.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.19", nomor: "19", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.6.20", nomor: "20", teks: "Pengecualian dari pemotongan PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "B.6.21", nomor: "1", teks: "Penghitungan PPh 21 dalam tahun berjalan/masa atas:", topik: ["A3.2","A1.1","A3.3"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.6.21.a", nomor: "a", teks: "Penghasilan bruto teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.21.b", nomor: "b", teks: "Penghasilan bruto tidak teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.21.c", nomor: "c", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang tidak kehilangan kewajiban subjektif", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.21.d", nomor: "d", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang kehilangan kewajiban subjektif", topik: ["A3.2","A1.1"], cakupan: "penuh", catatan: "A3.2: penyetahunan dan prorata bulan bagi pegawai tetap yang meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya, dibandingkan dengan pegawai yang sekadar berhenti (soal A3-118–A3-120; kartu KT-A3-73–74).", anak: [] },
                  { id: "B.6.21.e", nomor: "e", teks: "Honorarium yang diterima pemberi jasa profesi", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.21.f", nomor: "f", teks: "Upah harian, upah satuan, upah borongan yang dihitung atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.6.21.g", nomor: "g", teks: "Honorarium dan imbalan lain yang dihitung tidak atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.6.22", nomor: "2", teks: "Hak dan kewajiban penerima penghasilan yang dipotong pajak", topik: ["A3.9","A3.2"], cakupan: "penuh", catatan: "A3.9: hak penerima (bukti potong, kredit pajak, pengembalian lebih potong, keberatan atas pemotongan pihak ketiga) dan kewajibannya (NIK/NPWP, status PTKP, lapor SPT Tahunan) (soal A3-122; kartu KT-A3-77).", anak: [] },
                { id: "B.6.23", nomor: "3", teks: "Tata cara pemotongan, penyetoran dan pelaporan PPh Pasal 4 Ayat (2)", topik: ["A3.7","A3.9"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "7", urut: 7, nama: "PPh Badan", namaNormal: "PPh Badan", kelompok: "B6",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.7.1", nomor: "1", teks: "Yang menjadi Subjek Pajak DN dan Subjek Pajak LN", topik: ["B6.1","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.2", nomor: "2", teks: "Saat dimulai dan berakhirnya Kewajiban Pajak Subjektif Badan", topik: ["B6.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.3", nomor: "3", teks: "Pihak yang Dikecualikan Subjek Pajak Badan", topik: ["B6.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.4", nomor: "4", teks: "Objek Pajak Badan, Penghasilan yang Dikenakan Pajak, dan Penghasilan Objek Pajak Bentuk Usaha Tetap", topik: ["B6.2","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.5", nomor: "5", teks: "Penghasilan yang Dikenakan PPh Final Badan termasuk PPh Final bagi Wajib Pajak yang Memiliki Peredaran Bruto Tertentu", topik: ["B6.2","B6.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.6", nomor: "6", teks: "Penghasilan yang Dikecualikan dari Objek Pajak Badan", topik: ["B6.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.7", nomor: "7", teks: "Biaya-biaya yang Boleh dan Tidak Boleh Dikurangkan Badan", topik: ["B6.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.8", nomor: "8", teks: "Harga Perolehan dan Pengalihan Harta, Penilaian dan Pemakaian Persediaan", topik: ["B6.4","B7.2","B7.3","B7.8"], cakupan: "penuh", catatan: "Persediaan (B7.2), pengalihan harta lewat penjualan (B6.4/B7.3), dan restrukturisasi (B7.8); Pasal 10 lengkap (hubungan istimewa, tukar-menukar, restrukturisasi, hibah, inbreng, persediaan) ditambahkan di B6.4 (soal B6-104–B6-106; kartu KT-B6-65–67).", anak: [] },
                { id: "B.7.9", nomor: "9", teks: "Hubungan Istimewa", topik: ["B6.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.10", nomor: "10", teks: "Penyusutan dan Amortisasi Fiskal", topik: ["B6.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.11", nomor: "11", teks: "Kompensasi Kerugian", topik: ["B6.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.12", nomor: "12", teks: "Perhitungan PTKP, Tarif, dan PPh Terutang Badan", topik: ["B6.7"], cakupan: "penuh", catatan: "PTKP tidak berlaku bagi wajib pajak badan; penilaian atas tarif dan PPh terutang.", anak: [] },
                { id: "B.7.13", nomor: "13", teks: "Penghitungan Penghasilan Kena Pajak dan Penyesuaian Fiskal Badan", topik: ["B6.3","B7.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.14", nomor: "14", teks: "Pelunasan Pajak Tahun Berjalan dan Kredit Pajak Badan", topik: ["B6.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.15", nomor: "15", teks: "Penghitungan Pajak Akhir Tahun dan Angsuran PPh Pasal 25 Badan", topik: ["B6.9","B6.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.16", nomor: "16", teks: "Fasilitas selain Pasal 31 E (non-PMA dan BUT)", topik: ["B6.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.7.17", nomor: "17", teks: "SPT Tahunan PPh Badan", topik: ["B6.11"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "8", urut: 8, nama: "PPN dan SPT PPN", namaNormal: "PPN dan SPT Masa PPN", kelompok: "A4", catatan: "Pada subjek Badan Dalam Negeri, sub-butir 3.a dan 3.d tercetak bernomor 4), 5), 6); penomoran asli dipertahankan.",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "B.8.1", nomor: "1", teks: "Pengertian Dasar PPN, Karakteristik PPN, Mekanisme PPN", topik: ["A4.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.8.2", nomor: "2", teks: "Kewajiban PKP:", topik: ["A4.3","A2.2","A4.5","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.2.a", nomor: "a", teks: "Batasan Pengusaha Kecil", topik: ["A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.2.b", nomor: "b", teks: "Kewajiban Pelaporan Usaha", topik: ["A4.3","A2.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.2.c", nomor: "c", teks: "Pemungutan", topik: ["A4.5","A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.2.d", nomor: "d", teks: "Penyetoran", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.2.e", nomor: "e", teks: "Pelaporan", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.8.3", nomor: "3", teks: "Objek PPN:", topik: ["A4.2","A4.3","A4.6","A4.4","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.3.a", nomor: "a", teks: "Penyerahan di dalam Daerah Pabean atas:", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.3.a.4", nomor: "4", teks: "BKP dan non-BKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.3.a.5", nomor: "5", teks: "JKP dan non-JKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.3.a.6", nomor: "6", teks: "Kegiatan usaha / pekerjaan", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "A4.2: tiga syarat penyerahan terutang PPN (BKP/JKP, di dalam Daerah Pabean, dalam kegiatan usaha atau pekerjaan pengusaha) dan contoh penyerahan di luar kegiatan usaha vs Pasal 16D (soal A4-123, A4-124; kartu KT-A4-74).", anak: [] }
                  ] },
                  { id: "B.8.3.b", nomor: "b", teks: "Impor BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.3.c", nomor: "c", teks: "Pemanfaatan BKP tidak berwujud dan/atau JKP dari luar daerah pabean di dalam daerah pabean", topik: ["A4.2","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.3.d", nomor: "d", teks: "Ekspor", topik: ["A4.2","A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.3.d.4", nomor: "4", teks: "BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.3.d.5", nomor: "5", teks: "BKP tidak berwujud dan nonBKP tidak berwujud", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.3.d.6", nomor: "6", teks: "JKP dan nonJKP", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "B.8.3.e", nomor: "e", teks: "Kegiatan membangun sendiri", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.3.f", nomor: "f", teks: "Penyerahan aktiva perusahaan yang menurut tujuan semula tidak untuk diperjualbelikan", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.8.4", nomor: "4", teks: "Dasar Pengenaan Pajak (DPP) dan Tarif:", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.4.a", nomor: "a", teks: "Dasar Pengenaan Pajak (DPP)", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.4.a.1", nomor: "1", teks: "Harga jual", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.4.a.2", nomor: "2", teks: "Nilai penggantian", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.4.a.3", nomor: "3", teks: "Nilai impor/ekspor", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.4.a.4", nomor: "4", teks: "Nilai lain", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "B.8.4.b", nomor: "b", teks: "Tarif PPN", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.4.b.1", nomor: "1", teks: "0% ekspor", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.4.b.2", nomor: "2", teks: "12%", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.4.b.3", nomor: "3", teks: "Besaran tertentu", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] }
                ] },
                { id: "B.8.5", nomor: "5", teks: "Faktur Pajak:", topik: ["A4.5","A4.7","A4.4","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.5.a", nomor: "a", teks: "Fungsi Faktur Pajak", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: fungsi faktur sebagai bukti pungutan PPN dan sarana pengkreditan PM (soal A4-119; kartu KT-A4-70).", anak: [] },
                  { id: "B.8.5.b", nomor: "b", teks: "Tata cara pengisian Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.5.c", nomor: "c", teks: "Ketentuan formal dan material Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "A4.5: syarat formal dan material faktur, faktur yang tidak berdasarkan transaksi sebenarnya, dan pidana Pasal 39A UU KUP (soal A4-120; kartu KT-A4-71).", anak: [] },
                  { id: "B.8.5.d", nomor: "d", teks: "Saat pembuatan Faktur Pajak", topik: ["A4.5","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.5.e", nomor: "e", teks: "Tata cara penggantian dan pembatalan faktur pajak serta pembetulan SPT", topik: ["A4.5","A4.10"], cakupan: "penuh", catatan: "A4.5: faktur pengganti vs pembatalan faktur dan kaitannya dengan pembetulan SPT Masa PPN (soal A4-024, A4-121; kartu KT-A4-72); rujuk A4.10.", anak: [] },
                  { id: "B.8.5.f", nomor: "f", teks: "Faktur Pajak tidak lengkap", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.5.g", nomor: "g", teks: "Nota Retur dan Nota Pembatalan", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: nota retur dan nota pembatalan dikurangkan pada masa retur/pembatalan, termasuk PM yang dikapitalisasi (soal A4-027, A4-063, A4-122, A4-125; kartu KT-A4-15, KT-A4-73).", anak: [] }
                ] },
                { id: "B.8.6", nomor: "6", teks: "Pengkreditan Pajak Masukan:", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.6.a", nomor: "a", teks: "Prinsip dasar", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.6.b", nomor: "b", teks: "Pengkreditan Pajak Masukan dalam Masa Pajak yang tidak sama", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.6.c", nomor: "c", teks: "Kriteria Pajak Masukan yang dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.6.d", nomor: "d", teks: "Kriteria Pajak Masukan yang tidak dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.8.7", nomor: "7", teks: "Pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.7.a", nomor: "a", teks: "Objek pemungutan pajak yang dilakukan oleh pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.7.b", nomor: "b", teks: "Kewajiban PKP Rekanan", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.7.c", nomor: "c", teks: "Kewajiban Pemungut PPN", topik: ["A4.8"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.8.8", nomor: "8", teks: "Pengisian SPT Masa PPN oleh PKP Orang Pribadi", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "B.8.9", nomor: "9", teks: "Fasilitas:", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.9.a", nomor: "a", teks: "PPN tidak dipungut", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.9.b", nomor: "b", teks: "Dibebaskan dari pengenaan PPN", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "B.8.10", nomor: "1", teks: "Kewajiban PKP:", topik: ["A4.3","A2.2","A4.5","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.10.a", nomor: "a", teks: "Batasan Pengusaha Kecil", topik: ["A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.10.b", nomor: "b", teks: "Kewajiban Pelaporan Usaha", topik: ["A4.3","A2.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.10.c", nomor: "c", teks: "Pemungutan", topik: ["A4.5","A4.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.10.d", nomor: "d", teks: "Penyetoran", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.10.e", nomor: "e", teks: "Pelaporan", topik: ["A4.10"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "B.8.11", nomor: "2", teks: "Objek PPN:", topik: ["A4.2","A4.3","A4.6","A4.4","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "B.8.11.a", nomor: "a", teks: "Penyerahan di dalam Daerah Pabean atas:", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.11.a.1", nomor: "1", teks: "BKP dan non-BKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.11.a.2", nomor: "2", teks: "JKP dan non-JKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.11.a.3", nomor: "3", teks: "Kegiatan usaha / pekerjaan", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "A4.2: tiga syarat penyerahan terutang PPN (BKP/JKP, di dalam Daerah Pabean, dalam kegiatan usaha atau pekerjaan pengusaha) dan contoh penyerahan di luar kegiatan usaha vs Pasal 16D (soal A4-123, A4-124; kartu KT-A4-74).", anak: [] }
                  ] },
                  { id: "B.8.11.b", nomor: "b", teks: "Impor BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.11.c", nomor: "c", teks: "Pemanfaatan BKP tidak berwujud dan/atau JKP dari luar daerah pabean di dalam daerah pabean", topik: ["A4.2","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.11.d", nomor: "d", teks: "Ekspor", topik: ["A4.2","A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "B.8.11.d.1", nomor: "1", teks: "BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.11.d.2", nomor: "2", teks: "BKP tidak berwujud dan nonBKP tidak berwujud", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "B.8.11.d.3", nomor: "3", teks: "JKP dan nonJKP", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "B.8.11.e", nomor: "e", teks: "Kegiatan membangun sendiri", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "B.8.11.f", nomor: "f", teks: "Penyerahan aktiva perusahaan yang menurut tujuan semula tidak untuk diperjualbelikan", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] }
            ]
          }
        ]
      },
      C: {
        judul: "Tingkat C",
        mataUjian: [
          {
            no: "1", urut: 1, nama: "Akuntansi Perpajakan", namaNormal: "Akuntansi Perpajakan", kelompok: "B7", catatan: "Butir 9 subjek Transaksi Internasional mengulang butir 4 (hanya beda koma).",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.1.1", nomor: "1", teks: "Jurnal hak dan kewajiban perpajakan (PPh Pot Put: Pasal 21, Pasal 22, Pasal 23, Pasal 24, Pasal 4 ayat 2)", topik: ["B7.1","C9.3"], cakupan: "penuh", catatan: "Jurnal PPh Pasal 21, 22, 23, 4 ayat (2), 25/29, dan 26 dibahas di B7.1/B7.8; jurnal PPh Pasal 24 ditambahkan di B7.1 (pajak luar negeri dicatat sebagai PPh 24 dibayar di muka, penyesuaian kelebihan atas batas kredit, PPh 29; soal B7-123–B7-125, kartu KT-B7-85–86); hitung batas kredit di C9.3.", anak: [] },
                { id: "C.1.2", nomor: "2", teks: "Aspek pajak terhadap akuntansi untuk Piutang, Persediaan, Biaya Dibayar Dimuka, Aktiva Tetap, Aktiva Tetap Tidak Berwujud, Kewajiban dan Ekuitas", topik: ["B7.2","B7.3","B7.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.3", nomor: "3", teks: "Aspek pajak terhadap akuntansi untuk pengakuan pendapatan dan biaya yang meliputi: Usaha, dan Di luar usaha", topik: ["B7.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.4", nomor: "4", teks: "Rekonsiliasi Fiskal dan Jurnal Penghitungan PPh Badan", topik: ["B7.6","B7.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Transaksi Internasional", butir: [
                { id: "C.1.5", nomor: "1", teks: "Jurnal hak dan kewajiban perpajakan (PPh Pot Put: Pasal 21, Pasal 22, Pasal 23, Pasal 24, Pasal 4 ayat 2)", topik: ["B7.1","B7.8","C9.3"], cakupan: "penuh", catatan: "Jurnal PPh Pasal 21, 22, 23, 4 ayat (2), 25/29, dan 26 dibahas di B7.1/B7.8; jurnal PPh Pasal 24 ditambahkan di B7.1 (pajak luar negeri dicatat sebagai PPh 24 dibayar di muka, penyesuaian kelebihan atas batas kredit, PPh 29; soal B7-123–B7-125, kartu KT-B7-85–86); hitung batas kredit di C9.3.", anak: [] },
                { id: "C.1.6", nomor: "2", teks: "Aspek pajak terhadap akuntansi untuk Piutang, Persediaan, Biaya Dibayar Dimuka, Aktiva Tetap, Aktiva Tetap Tidak Berwujud, Kewajiban dan Ekuitas", topik: ["B7.2","B7.3","B7.4","B7.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.7", nomor: "3", teks: "Akuntansi Organisasi Nirlaba", topik: ["B7.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.8", nomor: "4", teks: "Aspek pajak terhadap akuntansi untuk pengakuan pendapatan dan biaya yang meliputi: Usaha, dan Di luar usaha", topik: ["B7.4","B7.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.9", nomor: "5", teks: "Rekonsiliasi Fiskal dan Jurnal Penghitungan PPh Badan", topik: ["B7.6","B7.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.10", nomor: "6", teks: "Akuntansi Lembaga Keuangan Bank dan Non-Bank", topik: ["B7.8"], cakupan: "penuh", catatan: "Bank dibahas di B7.8 (cadangan piutang, bunga; B7-055). Lembaga keuangan non-bank ditambahkan di B7.8: asuransi (cadangan teknis vs cadangan piutang premi; B7-128 ◐), perusahaan pembiayaan dan sewa guna usaha dengan hak opsi (B7-129), dana pensiun (materi); kartu KT-B7-89. Perusahaan efek belum dibahas khusus.", anak: [] },
                { id: "C.1.11", nomor: "7", teks: "Akuntansi Jasa Kontruksi", topik: ["B7.8","A3.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.12", nomor: "8", teks: "Akuntansi Merger (Penggabungan), Acquisitions (Akuisisi) dan Consolidations (Konsolidasi), Liquidation (Likuidasi)", topik: ["B7.8"], cakupan: "penuh", catatan: "Merger dan likuidasi dibahas di B7.8 (B7-053, B7-054, B7-104); akuisisi saham vs aset, muhibah, dan konsolidasi tanpa pajak grup ditambahkan di B7.8 (soal B7-126, B7-127; kartu KT-B7-87–88).", anak: [] },
                { id: "C.1.13", nomor: "9", teks: "Aspek pajak terhadap akuntansi untuk pengakuan pendapatan dan biaya yang meliputi: Usaha dan Di luar usaha", topik: ["B7.4","B7.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.1.14", nomor: "10", teks: "Hubungan Laporan Keuangan Fiskal dengan Laporan Keuangan Komersial", topik: ["B7.6","B7.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "2", urut: 2, nama: "Bea Meterai", namaNormal: "Bea Meterai", kelompok: "A5",
            subjek: [
              { nama: "Orang Pribadi", butir: [
                { id: "C.2.1", nomor: null, teks: "Objek, Tarif, Saat Terutang, dan Pihak Yang Terutang Bea Meterai dan pengecualiannya", topik: ["A5.1","A5.2","A5.3"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "3", urut: 3, nama: "KUP, PPSP, PP", namaNormal: "KUP, PPSP, PP", kelompok: "A2",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.3.1", nomor: "1", teks: "STP dan SKP (SKPKB, SKPN, SKPLB, SKPKBT)", topik: ["A2.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.3.2", nomor: "2", teks: "Permohonan Pembetulan, Keberatan dan Permohonan Pengurangan dan Penghapusan Sanksi Administrasi atau Pembatalan Ketetapan Pajak yang Tidak Benar", topik: ["A2.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.3.3", nomor: "3", teks: "Sanksi-sanksi", topik: ["A2.8","A2.12"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.3.4", nomor: "4", teks: "Penagihan Pajak dengan Surat Paksa (PPSP)", topik: ["A2.10"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "C.3.5", nomor: null, teks: "STP dan SKP (SKPKB, SKPN, SKPLB, SKPKBT)", topik: ["A2.6"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "4", urut: 4, nama: "Pajak Internasional", namaNormal: "Pajak Internasional", kelompok: "C10",
            subjek: [
              { nama: "Transaksi Internasional", butir: [
                { id: "C.4.1", nomor: "1", teks: "Pengertian Perpajakan Internasional", topik: ["C10.1"], cakupan: "penuh", catatan: "Ringkasan pembuka C10.1: pengertian, sumber hukum (domestik, bilateral, multilateral), asas domisili vs sumber, pemajakan berganda yuridis vs ekonomis (soal C10-124; kartu KT-C10-90).", anak: [] },
                { id: "C.4.2", nomor: "2", teks: "Ruang lingkup Perpajakan Internasional", topik: ["C9.3","C10.3","C10.9","A3.8","C9.1","C10.1","C10.2"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.4.2.a", nomor: "a", teks: "Pemajakan WP Dalam Negeri atas penghasilan dari luar negeri", topik: ["C9.3","C10.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.2.b", nomor: "b", teks: "Pemajakan WP Luar Negeri atas penghasilan dari dalam negeri", topik: ["C10.9","A3.8","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.2.c", nomor: "c", teks: "Beberapa pengertian khusus", topik: ["C10.1","C10.2"], cakupan: "penuh", catatan: "Daftar pengertian khusus (residen, BUT, beneficial owner, sumber penghasilan) dan aturan interpretasi Pasal 3 ayat (2) Model OECD ditambahkan di C10.1 (kartu KT-C10-89); soal residen, BUT, dan beneficial owner tersebar di C10.1–C10.2.", anak: [] }
                ] },
                { id: "C.4.3", nomor: "3", teks: "P3B", topik: ["C10.1","C10.2","C9.1","A3.8"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.4.3.a", nomor: "a", teks: "Pengertian P3B", topik: ["C10.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.3.b", nomor: "b", teks: "Tie Breaker Rule", topik: ["C10.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.3.c", nomor: "c", teks: "Pengertian BUT", topik: ["C10.2","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.3.d", nomor: "d", teks: "Jenis BUT", topik: ["C10.2","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.3.e", nomor: "e", teks: "Pengecualian BUT", topik: ["C10.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.3.f", nomor: "f", teks: "Hak Pemajakan Penuh", topik: ["C10.1"], cakupan: "penuh", catatan: "Istilah hak pemajakan penuh, terbatas, dan pelepasan beserta rumusan P3B-nya ditambahkan di C10.1 (soal klasifikasi dan hitung C10-120–C10-122; kartu KT-C10-85–87).", anak: [] },
                  { id: "C.4.3.g", nomor: "g", teks: "Hak Pemajakan Terbatas", topik: ["C10.1"], cakupan: "penuh", catatan: "Istilah hak pemajakan penuh, terbatas, dan pelepasan beserta rumusan P3B-nya ditambahkan di C10.1 (soal klasifikasi dan hitung C10-120–C10-122; kartu KT-C10-85–87).", anak: [] },
                  { id: "C.4.3.h", nomor: "h", teks: "Pelepasan Hak Pemajakan", topik: ["C10.1","A3.8"], cakupan: "penuh", catatan: "Istilah hak pemajakan penuh, terbatas, dan pelepasan beserta rumusan P3B-nya ditambahkan di C10.1 (soal klasifikasi dan hitung C10-120–C10-122; kartu KT-C10-85–87).", anak: [] },
                  { id: "C.4.3.i", nomor: "i", teks: "Ketentuan Khusus dalam P3B", topik: ["C10.1"], cakupan: "penuh", catatan: "Ketentuan khusus P3B (nondiskriminasi, MAP, pertukaran informasi, bantuan penagihan, misi diplomatik, hak atas manfaat/LOB-PPT) ditambahkan di C10.1 (soal C10-123; kartu KT-C10-88).", anak: [] }
                ] },
                { id: "C.4.4", nomor: "4", teks: "Metode Penghindaran Pajak Berganda", topik: ["C10.3","C9.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.4.5", nomor: "5", teks: "Anti-Avoidance Measures (Anti Penghindaran Pajak)", topik: ["C10.4","B6.3","C10.1","C10.5","C9.4"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.4.5.a", nomor: "a", teks: "Controlled Foreign Cooperation Rules", topik: ["C10.4"], cakupan: "penuh", catatan: "Tercetak \"Cooperation\"; maksudnya Controlled Foreign Corporation (CFC).", anak: [] },
                  { id: "C.4.5.b", nomor: "b", teks: "Thin Capitalization Rules", topik: ["C10.4","B6.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.5.c", nomor: "c", teks: "Treaty Shopping", topik: ["C10.4","C10.1"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.5.d", nomor: "d", teks: "Transfer Pricing (PKKU)", topik: ["C10.5","C9.4"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "C.4.6", nomor: "6", teks: "Dokumen Penentuan Harga Transfer (TP Docs)", topik: ["C10.5","C9.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.4.7", nomor: "7", teks: "Pencegahan dan Penanganan Sengketa Perpajakan Internasional", topik: ["C10.6","C10.7"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.4.7.a", nomor: "a", teks: "Prosedur Persetujuan Bersama (MAP)", topik: ["C10.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.4.7.b", nomor: "b", teks: "Kesepakatan Harga Transfer (APA)", topik: ["C10.7"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "C.4.8", nomor: "8", teks: "Transparansi dan Kerjasama Perpajakan Internasional", topik: ["C10.8","C10.5","C9.6","A2.10","A2.12"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.4.8.a", nomor: "a", teks: "Pertukaran Informasi Perpajakan Internasional (Exchange of Information)", topik: ["C10.8","C10.5","C9.6","A2.12"], cakupan: "penuh", catatan: "", anak: [
                    { id: "C.4.8.a.1", nomor: "1", teks: "Automatic Exchange of Information (Pertukaran Informasi Perpajakan Internasional secara Otomatis atas Rekening Keuangan, Aset Kripto, CBCR, dan GIR)", topik: ["C10.8","C10.5","C9.6","A2.12"], cakupan: "penuh", catatan: "C10.8: lingkup AEoI (CRS, CARF, CbCR, GIR) dan PMK 108/2025 yang mencabut PMK 70/PMK.03/2017 sejak 1 Januari 2026 (soal C10-128, C10-129 ◐; kartu KT-C10-93–95). Pertukaran GIR hanya dibahas di materi, belum ada soal khusus.", anak: [] },
                    { id: "C.4.8.a.2", nomor: "2", teks: "Exchange of Information by Request (Pertukaran Informasi Perpajakan Internasional berdasarkan Permintaan)", topik: ["C10.8"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "C.4.8.b", nomor: "b", teks: "Bantuan Penagihan Pajak (Assistance in Collection)", topik: ["C10.8","A2.10"], cakupan: "penuh", catatan: "Bantuan penagihan ditambahkan di C10.8: Pasal 20A UU KUP, Pasal 27 Model OECD, Konvensi MAC (Perpres 159/2014 s.t.d.d. Perpres 56/2024), klaim pajak dipersamakan dengan utang pajak, kaitan dengan PPSP A2.10 (soal C10-125–C10-127; kartu KT-C10-91–92).", anak: [] }
                ] }
              ] }
            ]
          },
          {
            no: "5", urut: 5, nama: "PBB-P5L", namaNormal: "PBB-P5L", kelompok: "B8",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.5.1", nomor: "1", teks: "Subjek dan Objek Pajak yang dikecualikan/tidak dikenakan PBB", topik: ["B8.1","B8.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.5.2", nomor: "2", teks: "Pengenaan PBB (NJOPTKP, NJKP, Tarif, PBB Terutang)", topik: ["B8.3","B8.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.5.3", nomor: "3", teks: "Upaya Hukum non keberatan (Pembetulan, Pengurangan PBB, Pengurangan Denda Administrasi PBB, Pembatalan SPPT, SKP PBB, dan STP PBB yang tidak benar)", topik: ["B8.6","B8.5"], cakupan: "penuh", catatan: "B8.6 (judul diperluas) kini memuat pembetulan SPPT/SKP/STP, pengurangan PBB Pasal 19, pengurangan denda administratif PBB, dan pengurangan/pembatalan SPPT, SKP, STP PBB yang tidak benar (soal B8-104–B8-108, sebagian ◐ karena rincian PMK 118/2024 s.t.d.d. PMK 71/2026 dari sumber sekunder; kartu KT-B8-65–68).", anak: [] }
              ] }
            ]
          },
          {
            no: "6", urut: 6, nama: "PPh Badan", namaNormal: "PPh Badan", kelompok: "B6", kelompokLain: ["C9"],
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.6.1", nomor: "1", teks: "Objek Pajak Badan, Penghasilan yang Dikenakan Pajak, dan Penghasilan Objek Pajak Bentuk Usaha Tetap", topik: ["B6.2","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.2", nomor: "2", teks: "Penghasilan yang Dikecualikan dari Objek Pajak Badan", topik: ["B6.2"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.3", nomor: "3", teks: "Biaya-biaya yang Boleh dan Tidak Boleh Dikurangkan Badan", topik: ["B6.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.4", nomor: "4", teks: "Penghitungan Penghasilan Kena Pajak dan Penyesuaian Fiskal Badan", topik: ["B6.3","B7.6"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Transaksi Internasional", butir: [
                { id: "C.6.5", nomor: "1", teks: "Yang menjadi Subjek Pajak (transaksi Internasional) dan Subjek Pajak DN dan Subjek Pajak LN (transaksi Internasional)", topik: ["C9.1","B6.1","C10.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.6", nomor: "2", teks: "Saat dimulai dan berakhirnya Kewajiban Pajak Subjektif", topik: ["B6.1","C9.1"], cakupan: "penuh", catatan: "Badan dalam negeri dibahas di B6.1; subjek pajak luar negeri dengan BUT dan tanpa BUT (Pasal 2A ayat (3) dan (4)) ditambahkan di C9.1 (soal C9-121–C9-123; kartu KT-C9-79–80).", anak: [] },
                { id: "C.6.7", nomor: "3", teks: "Pihak yang Dikecualikan Subjek Pajak", topik: ["B6.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.8", nomor: "4", teks: "Objek Pajak, Penghasilan yang Dikenakan Pajak, dan Penghasilan Objek Pajak Bentuk Usaha Tetap", topik: ["B6.2","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.9", nomor: "5", teks: "Penghasilan yang Dikenakan PPh Final", topik: ["B6.2","A3.7","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.10", nomor: "6", teks: "Penghasilan yang Dikecualikan dari Objek Pajak", topik: ["B6.2","C9.5","C10.3"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.11", nomor: "7", teks: "Biaya-biaya yang Boleh dan Tidak Boleh Dikurangkan", topik: ["B6.3","C9.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.12", nomor: "8", teks: "Harga Perolehan dan Pengalihan Harta, Penilaian dan Pemakaian Persediaan", topik: ["B6.4","B7.2","B7.3","B7.8"], cakupan: "penuh", catatan: "Persediaan (B7.2), pengalihan harta lewat penjualan (B6.4/B7.3), dan restrukturisasi (B7.8); Pasal 10 lengkap (hubungan istimewa, tukar-menukar, restrukturisasi, hibah, inbreng, persediaan) ditambahkan di B6.4 (soal B6-104–B6-106; kartu KT-B6-65–67).", anak: [] },
                { id: "C.6.13", nomor: "9", teks: "Hubungan Istimewa", topik: ["B6.10","C9.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.14", nomor: "10", teks: "Penyusutan dan Amortisasi Fiskal", topik: ["B6.4"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.15", nomor: "11", teks: "Kompensasi Kerugian", topik: ["B6.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.16", nomor: "12", teks: "Penghitungan PTKP, Tarif, dan PPh Terutang", topik: ["B6.7","C9.2"], cakupan: "penuh", catatan: "PTKP tidak berlaku bagi wajib pajak badan; penilaian atas tarif dan PPh terutang.", anak: [] },
                { id: "C.6.17", nomor: "13", teks: "Penghitungan Penghasilan Kena Pajak dan Penyesuaian Fiskal", topik: ["B6.3","B7.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.18", nomor: "14", teks: "Tarif Pajak (termasuk Fasilitas Pasal 31 E)", topik: ["B6.7"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.19", nomor: "15", teks: "Pelunasan Pajak Tahun Berjalan dan Kredit Pajak", topik: ["B6.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.20", nomor: "16", teks: "Tata Cara Perhitungan dan Penerapan PPh Pasal 24", topik: ["C9.3","C10.3","B6.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.21", nomor: "17", teks: "Penghitungan Pajak Akhir Tahun dan Angsuran PPh Pasal 25", topik: ["B6.9","B6.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.6.22", nomor: "18", teks: "SPT Tahunan PPh Badan", topik: ["B6.11"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "7", urut: 7, nama: "PPh OP", namaNormal: "PPh Orang Pribadi", kelompok: "A1",
            subjek: [
              { nama: "Orang Pribadi", butir: [
                { id: "C.7.1", nomor: null, teks: "PTKP, Tarif, dan Penghitungan PPh Terutang Orang Pribadi", topik: ["A1.6","A1.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "8", urut: 8, nama: "PPh Pot/Put", namaNormal: "PPh Potong/Pungut", kelompok: "A3", kelompokLain: ["C9", "C10"],
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.8.1", nomor: "1", teks: "Penghasilan yang menjadi objek pemotongan PPh 21 dan pengecualiannya", topik: ["A3.1"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.2", nomor: "2", teks: "Objek pemotongan, siapa yang wajib memotong, Dasar pemotongan dan besarnya tarif PPh Pasal 22", topik: ["A3.5"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.3", nomor: "3", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 23", topik: ["A3.6"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.4", nomor: "4", teks: "Objek pemotongan, Siapa yang wajib memotong, Dasar pemotongan dan besarnya tarif PPh Pasal 4 Ayat (2)", topik: ["A3.7"], cakupan: "penuh", catatan: "", anak: [] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "C.8.5", nomor: "1", teks: "Penghitungan PPh 21 dalam tahun berjalan/masa atas:", topik: ["A3.2","A1.1","A3.3"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.8.5.a", nomor: "a", teks: "Penghasilan bruto teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.8.5.b", nomor: "b", teks: "Penghasilan bruto tidak teratur", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.8.5.c", nomor: "c", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang tidak kehilangan kewajiban subjektif", topik: ["A3.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.8.5.d", nomor: "d", teks: "Penghitungan Pasal 21 pada akhir masa pajak bagi pegawai tetap yang kehilangan kewajiban subjektif", topik: ["A3.2","A1.1"], cakupan: "penuh", catatan: "A3.2: penyetahunan dan prorata bulan bagi pegawai tetap yang meninggal dunia atau meninggalkan Indonesia untuk selama-lamanya, dibandingkan dengan pegawai yang sekadar berhenti (soal A3-118–A3-120; kartu KT-A3-73–74).", anak: [] },
                  { id: "C.8.5.e", nomor: "e", teks: "Honorarium yang diterima pemberi jasa profesi", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.8.5.f", nomor: "f", teks: "Upah harian, upah satuan, upah borongan yang dihitung atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.8.5.g", nomor: "g", teks: "Honorarium dan imbalan lain yang dihitung tidak atas dasar banyaknya hari kerja", topik: ["A3.3"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] },
              { nama: "Transaksi Internasional", butir: [
                { id: "C.8.6", nomor: "1", teks: "Objek pemotongan, siapa yang wajib memotong, dasar pemotongan dan besarnya tarif PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.7", nomor: "2", teks: "Pengecualian dari pemotongan PPh Pasal 26", topik: ["A3.8","C10.9"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.8", nomor: "3", teks: "Branch Profit Tax", topik: ["C9.2","A3.8"], cakupan: "penuh", catatan: "", anak: [] },
                { id: "C.8.9", nomor: "4", teks: "Pengalihan Saham, Dividen, Royalti, Bunga", topik: ["C10.9","C10.4","A3.8"], cakupan: "penuh", catatan: "", anak: [] }
              ] }
            ]
          },
          {
            no: "9", urut: 9, nama: "PPN dan SPT PPN", namaNormal: "PPN dan SPT Masa PPN", kelompok: "A4", catatan: "Pada subjek Badan Dalam Negeri, sub-butir Objek PPN tercetak rata a–l (judul \"Penyerahan…\" dan \"Ekspor\" ikut menjadi butir); penomoran asli dipertahankan.",
            subjek: [
              { nama: "Badan Dalam Negeri", butir: [
                { id: "C.9.1", nomor: "1", teks: "Objek PPN:", topik: ["A4.2","A4.3","A4.6","A4.4","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.9.1.a", nomor: "a", teks: "Penyerahan di dalam Daerah Pabean atas:", topik: ["A4.2"], cakupan: "penuh", catatan: "Judul kelompok; sub-butirnya tercetak rata sebagai b–d.", anak: [] },
                  { id: "C.9.1.b", nomor: "b", teks: "BKP dan non-BKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.c", nomor: "c", teks: "JKP dan non-JKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.d", nomor: "d", teks: "Kegiatan usaha / pekerjaan", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "A4.2: tiga syarat penyerahan terutang PPN (BKP/JKP, di dalam Daerah Pabean, dalam kegiatan usaha atau pekerjaan pengusaha) dan contoh penyerahan di luar kegiatan usaha vs Pasal 16D (soal A4-123, A4-124; kartu KT-A4-74).", anak: [] },
                  { id: "C.9.1.e", nomor: "e", teks: "Impor BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.f", nomor: "f", teks: "Pemanfaatan BKP tidak berwujud dan/atau JKP dari luar daerah pabean di dalam daerah pabean", topik: ["A4.2","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.g", nomor: "g", teks: "Ekspor", topik: ["A4.2"], cakupan: "penuh", catatan: "Judul kelompok; sub-butirnya tercetak rata sebagai h–j.", anak: [] },
                  { id: "C.9.1.h", nomor: "h", teks: "BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.i", nomor: "i", teks: "BKP tidak berwujud dan nonBKP tidak berwujud", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.j", nomor: "j", teks: "JKP dan nonJKP", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.k", nomor: "k", teks: "Kegiatan membangun sendiri", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.1.l", nomor: "l", teks: "Penyerahan aktiva perusahaan yang menurut tujuan semula tidak untuk diperjualbelikan", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] },
                { id: "C.9.2", nomor: "2", teks: "Dasar Pengenaan Pajak (DPP) dan Tarif:", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.9.2.a", nomor: "a", teks: "Dasar Pengenaan Pajak (DPP)", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [
                    { id: "C.9.2.a.1", nomor: "1", teks: "Harga jual", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.2.a.2", nomor: "2", teks: "Nilai penggantian", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.2.a.3", nomor: "3", teks: "Nilai impor/ekspor", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.2.a.4", nomor: "4", teks: "Nilai lain", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "C.9.2.b", nomor: "b", teks: "Tarif PPN", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "C.9.2.b.1", nomor: "1", teks: "0% ekspor", topik: ["A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.2.b.2", nomor: "2", teks: "12%", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.2.b.3", nomor: "3", teks: "Besaran tertentu", topik: ["A4.6"], cakupan: "penuh", catatan: "", anak: [] }
                  ] }
                ] },
                { id: "C.9.3", nomor: "3", teks: "Faktur Pajak:", topik: ["A4.5","A4.7","A4.4","A4.10"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.9.3.a", nomor: "a", teks: "Fungsi Faktur Pajak", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: fungsi faktur sebagai bukti pungutan PPN dan sarana pengkreditan PM (soal A4-119; kartu KT-A4-70).", anak: [] },
                  { id: "C.9.3.b", nomor: "b", teks: "Tata cara pengisian Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.3.c", nomor: "c", teks: "Ketentuan formal dan material Faktur Pajak", topik: ["A4.5"], cakupan: "penuh", catatan: "A4.5: syarat formal dan material faktur, faktur yang tidak berdasarkan transaksi sebenarnya, dan pidana Pasal 39A UU KUP (soal A4-120; kartu KT-A4-71).", anak: [] },
                  { id: "C.9.3.d", nomor: "d", teks: "Saat pembuatan Faktur Pajak", topik: ["A4.5","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.3.e", nomor: "e", teks: "Tata cara penggantian dan pembatalan faktur pajak serta pembetulan SPT", topik: ["A4.5","A4.10"], cakupan: "penuh", catatan: "A4.5: faktur pengganti vs pembatalan faktur dan kaitannya dengan pembetulan SPT Masa PPN (soal A4-024, A4-121; kartu KT-A4-72); rujuk A4.10.", anak: [] },
                  { id: "C.9.3.f", nomor: "f", teks: "Faktur Pajak tidak lengkap", topik: ["A4.5"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.3.g", nomor: "g", teks: "Nota Retur dan Nota Pembatalan", topik: ["A4.5","A4.7"], cakupan: "penuh", catatan: "A4.5: nota retur dan nota pembatalan dikurangkan pada masa retur/pembatalan, termasuk PM yang dikapitalisasi (soal A4-027, A4-063, A4-122, A4-125; kartu KT-A4-15, KT-A4-73).", anak: [] }
                ] },
                { id: "C.9.4", nomor: "4", teks: "Pengkreditan Pajak Masukan:", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.9.4.a", nomor: "a", teks: "Prinsip dasar", topik: ["A4.1","A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.4.b", nomor: "b", teks: "Pengkreditan Pajak Masukan dalam Masa Pajak yang tidak sama", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.4.c", nomor: "c", teks: "Kriteria Pajak Masukan yang dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.4.d", nomor: "d", teks: "Kriteria Pajak Masukan yang tidak dapat dikreditkan", topik: ["A4.7"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] },
              { nama: "Orang Pribadi", butir: [
                { id: "C.9.5", nomor: "1", teks: "Objek PPN:", topik: ["A4.2","A4.3","A4.6","A4.4","A4.9"], cakupan: "penuh", catatan: "", anak: [
                  { id: "C.9.5.a", nomor: "a", teks: "Penyerahan di dalam Daerah Pabean atas:", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "", anak: [
                    { id: "C.9.5.a.1", nomor: "1", teks: "BKP dan non-BKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.5.a.2", nomor: "2", teks: "JKP dan non-JKP", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.5.a.3", nomor: "3", teks: "Kegiatan usaha / pekerjaan", topik: ["A4.2","A4.3"], cakupan: "penuh", catatan: "A4.2: tiga syarat penyerahan terutang PPN (BKP/JKP, di dalam Daerah Pabean, dalam kegiatan usaha atau pekerjaan pengusaha) dan contoh penyerahan di luar kegiatan usaha vs Pasal 16D (soal A4-123, A4-124; kartu KT-A4-74).", anak: [] }
                  ] },
                  { id: "C.9.5.b", nomor: "b", teks: "Impor BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.5.c", nomor: "c", teks: "Pemanfaatan BKP tidak berwujud dan/atau JKP dari luar daerah pabean di dalam daerah pabean", topik: ["A4.2","A4.4"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.5.d", nomor: "d", teks: "Ekspor", topik: ["A4.2","A4.6","A4.9"], cakupan: "penuh", catatan: "", anak: [
                    { id: "C.9.5.d.1", nomor: "1", teks: "BKP berwujud dan nonBKP berwujud", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.5.d.2", nomor: "2", teks: "BKP tidak berwujud dan nonBKP tidak berwujud", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] },
                    { id: "C.9.5.d.3", nomor: "3", teks: "JKP dan nonJKP", topik: ["A4.2","A4.9"], cakupan: "penuh", catatan: "", anak: [] }
                  ] },
                  { id: "C.9.5.e", nomor: "e", teks: "Kegiatan membangun sendiri", topik: ["A4.2","A4.6"], cakupan: "penuh", catatan: "", anak: [] },
                  { id: "C.9.5.f", nomor: "f", teks: "Penyerahan aktiva perusahaan yang menurut tujuan semula tidak untuk diperjualbelikan", topik: ["A4.2"], cakupan: "penuh", catatan: "", anak: [] }
                ] }
              ] }
            ]
          }
        ]
      }
    }
  };
  if (typeof UKP !== 'undefined') UKP.cakupanResmi = C;
  if (typeof module !== 'undefined' && module.exports) module.exports = C;
})();
