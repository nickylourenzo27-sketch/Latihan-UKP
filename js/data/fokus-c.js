/* Fokus UKP C (v10.3.0): dua jalur latihan intens (BUT, Pajak Internasional) dengan lembar contekan per jalur.
   jalur[].topik = ID topik di js/data/mu-C9.js dan js/data/mu-C10.js yang menjadi saringan latihan jalur itu.
   jalur[].bagian = isi lembar contekan. Tiap bagian: { id (slug pendek), judul, jenis, dasar, ...isi sesuai jenis }.
     tabel   : kolom: [2 sampai 4 judul kolom], baris: [[sel, ...]] (jumlah sel = jumlah kolom)
     butir   : butir: [{ teks, dasar? }]
     rumus   : rumus: [{ nama, isi, contoh, dasar? }]
     langkah : langkah: [{ teks, dasar? }] (berurutan)
     jebakan : butir: [{ teks }]
   Isi tiap bagian dicocokkan pemeriksa kedua ke naskah peraturan (status ketentuan November 2026).
   Skrip klasik: menyetel UKP.fokusC di peramban dan module.exports di Node. */
(function () {
  'use strict';
  var F = {
    "versi": 1,
    "jalur": [
      {
        "id": "but",
        "judul": "BUT",
        "topik": [
          "C9.1",
          "C9.2",
          "C10.2"
        ],
        "bagian": [
          {
            "id": "definisi",
            "judul": "Apa itu BUT dan kedudukannya",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 2 ayat (1), (1a), (4), (5), Pasal 2A ayat (3) dan (4); PMK 35/PMK.03/2019 Pasal 4 dan 5",
            "butir": [
              {
                "teks": "BUT adalah bentuk usaha yang dipakai orang pribadi asing atau badan asing untuk menjalankan usaha atau melakukan kegiatan di Indonesia.",
                "dasar": "UU PPh Pasal 2 ayat (5)"
              },
              {
                "teks": "BUT subjek pajak tersendiri, perlakuannya dipersamakan dengan subjek pajak badan; pemiliknya tetap subjek pajak luar negeri.",
                "dasar": "UU PPh Pasal 2 ayat (1) huruf c dan ayat (1a), penjelasan Pasal 2 ayat (4)"
              },
              {
                "teks": "Tiga kriteria umum: ada tempat usaha di Indonesia, bersifat permanen, dan dipakai untuk menjalankan usaha atau kegiatan.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 4 ayat (1)"
              },
              {
                "teks": "Permanen: dipakai secara kontinu dan berada di lokasi geografis tertentu.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 5 ayat (3)"
              },
              {
                "teks": "Tidak penting tempat itu dimiliki, disewa, atau berhak dipakai secara hukum; cukup tersedia dengan akses tidak terbatas dan usaha dijalankan lewat tempat itu.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 5 ayat (2) dan (4)"
              },
              {
                "teks": "Usaha atau kegiatan mencakup segala hal untuk mendapatkan, menagih, atau memelihara penghasilan.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 4 ayat (3)"
              },
              {
                "teks": "Kewajiban pajak subjektif mulai saat usaha atau kegiatan dijalankan melalui BUT dan berakhir saat tidak lagi dijalankan melalui BUT.",
                "dasar": "UU PPh Pasal 2A ayat (3)"
              },
              {
                "teks": "Tanpa BUT: kewajiban subjektif mulai saat menerima penghasilan dari Indonesia dan dipenuhi lewat pemotongan PPh Pasal 26.",
                "dasar": "UU PPh Pasal 2A ayat (4), penjelasan Pasal 2 ayat (2)"
              }
            ]
          },
          {
            "id": "bentuk",
            "judul": "Daftar bentuk BUT",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 2 ayat (5) huruf a sampai p; PMK 35/PMK.03/2019 Pasal 4, 5, 7 sampai 10",
            "kolom": [
              "Kelompok",
              "Bentuk",
              "Uji yang dipakai"
            ],
            "baris": [
              [
                "Tempat usaha",
                "Tempat kedudukan manajemen, cabang, kantor perwakilan, gedung kantor",
                "Tiga kriteria: tempat usaha, permanen, dipakai untuk usaha"
              ],
              [
                "Tempat usaha",
                "Pabrik, bengkel, gudang, ruang untuk promosi dan penjualan",
                "Tiga kriteria yang sama"
              ],
              [
                "Tempat usaha",
                "Pertambangan dan penggalian sumber alam, wilayah kerja migas",
                "Tiga kriteria yang sama"
              ],
              [
                "Tempat usaha",
                "Perikanan, peternakan, pertanian, perkebunan, kehutanan",
                "Tiga kriteria yang sama"
              ],
              [
                "Tempat usaha",
                "Komputer, agen elektronik, peralatan otomatis untuk usaha melalui internet",
                "Dimiliki, disewa, atau digunakan; akses tidak terbatas"
              ],
              [
                "Tanpa tiga kriteria",
                "Proyek konstruksi, instalasi, atau proyek perakitan",
                "UU PPh: tanpa batas waktu. P3B: melebihi periode P3B"
              ],
              [
                "Tanpa tiga kriteria",
                "Pemberian jasa oleh pegawai atau orang lain",
                "Lebih dari 60 hari dalam jangka waktu 12 bulan"
              ],
              [
                "Tanpa tiga kriteria",
                "Agen yang kedudukannya tidak bebas",
                "Bertindak untuk dan atas nama pihak asing"
              ],
              [
                "Tanpa tiga kriteria",
                "Agen atau pegawai perusahaan asuransi luar negeri",
                "Menerima premi atau menanggung risiko di Indonesia"
              ]
            ]
          },
          {
            "id": "uji-waktu",
            "judul": "Batas waktu dan uji: UU PPh dibanding P3B",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 2 ayat (5); PMK 35/PMK.03/2019 Pasal 6 sampai 10; PMK 112/2025 Pasal 2 ayat (6) dan Pasal 22",
            "kolom": [
              "Hal",
              "UU PPh dan PMK 35/2019",
              "Bila P3B berlaku"
            ],
            "baris": [
              [
                "Proyek konstruksi, instalasi, perakitan",
                "BUT tanpa batas waktu",
                "BUT hanya bila melebihi periode dalam P3B (angka di soal)"
              ],
              [
                "Pemberian jasa",
                "BUT bila lebih dari 60 hari dalam jangka waktu 12 bulan",
                "BUT bila melebihi periode dalam P3B (angka di soal)"
              ],
              [
                "Arti lebih dari",
                "Tepat 60 hari belum BUT; 61 hari sudah BUT",
                "Tepat sebesar batas P3B belum BUT"
              ],
              [
                "Kegiatan persiapan atau penunjang",
                "Tidak dikecualikan",
                "Dikecualikan dari BUT"
              ],
              [
                "Agen tidak bebas",
                "BUT bila bertindak untuk dan atas nama pihak asing",
                "BUT bila lazim menyepakati kontrak atau melakukan pengiriman atas nama WPLN"
              ],
              [
                "Agen asuransi luar negeri",
                "BUT bila menerima premi atau menanggung risiko di Indonesia",
                "Tidak berlaku untuk reasuransi"
              ],
              [
                "Syarat memakai kolom P3B",
                "Tidak ada",
                "Penduduk negara mitra, Form DGT sah, tidak menyalahgunakan P3B"
              ]
            ]
          },
          {
            "id": "hitung-periode",
            "judul": "Cara menghitung periode waktu",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 2 ayat (5) huruf m; PMK 35/PMK.03/2019 Pasal 7 dan 8; PMK 112/2025 Pasal 23 dan 25",
            "butir": [
              {
                "teks": "Jasa: batasnya jangka waktu 12 bulan, bukan tahun pajak atau tahun kalender.",
                "dasar": "UU PPh Pasal 2 ayat (5) huruf m; PMK 35/PMK.03/2019 Pasal 8 ayat (1)"
              },
              {
                "teks": "Jasa: periode mulai saat pemberian jasa mulai dilakukan dan berakhir saat selesai dilakukan; yang diukur lamanya pemberian jasa, bukan lamanya tiap pegawai.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 8 ayat (3) huruf a dan b"
              },
              {
                "teks": "Jasa: bagian dari hari dihitung penuh 1 hari; waktu pengerjaan subkontraktor ikut dihitung.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 8 ayat (3) huruf c dan e"
              },
              {
                "teks": "Syarat BUT jasa: pegawai atau orang lain dipekerjakan pihak asing atau subkontraktornya, jasa dilakukan di Indonesia, penerima jasa boleh di Indonesia atau di luar Indonesia.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 8 ayat (1)"
              },
              {
                "teks": "Jasa yang seluruhnya dilakukan di luar Indonesia tidak menimbulkan BUT jasa.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 8 ayat (1) huruf b"
              },
              {
                "teks": "Proyek konstruksi mencakup jasa konsultansi konstruksi (perencanaan, perancangan, pengawasan), pekerjaan konstruksi, dan pekerjaan konstruksi terintegrasi.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 7 ayat (2)"
              },
              {
                "teks": "Proyek di Indonesia tetap dihitung walau dikerjakan di luar Indonesia atau diteruskan kepada subkontraktor dalam negeri maupun luar negeri.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 7 ayat (5)"
              },
              {
                "teks": "Periode proyek untuk uji P3B: mulai saat proyek mulai dikerjakan, berakhir saat hasil pekerjaan diserahkan atau pekerjaan dihentikan sebelum selesai.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 7 ayat (6) huruf a dan b"
              },
              {
                "teks": "Periode proyek untuk uji P3B: penghentian sementara tetap dihitung; bagian hari dihitung 1 hari, bagian bulan kalender dihitung 1 bulan; waktu subkontraktor ikut.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 7 ayat (6) huruf c sampai f"
              },
              {
                "teks": "Proyek dipecah: periode proyek WPLN yang seluruhnya lebih dari 30 hari kalender dijumlahkan dengan proyek pihak erat terkait di lokasi sama yang masing-masing lebih dari 30 hari kalender.",
                "dasar": "PMK 112/2025 Pasal 23"
              },
              {
                "teks": "Pihak erat terkait: menguasai atau dikuasai, di bawah penguasaan yang sama, atau kepemilikan langsung atau tidak langsung lebih dari 50%.",
                "dasar": "PMK 112/2025 Pasal 25 ayat (5) sampai (8)"
              }
            ]
          },
          {
            "id": "bukan-but",
            "judul": "Yang bukan BUT dan kantor perwakilan dagang asing",
            "jenis": "butir",
            "dasar": "PMK 35/PMK.03/2019 Pasal 5 ayat (5), Pasal 6, Pasal 9; PMK 112/2025 Pasal 22, 24, 25; KMK 634/KMK.04/1994; KEP-667/PJ./2001",
            "butir": [
              {
                "teks": "Persiapan: kegiatan pendahuluan agar kegiatan esensial dan signifikan siap dilakukan. Penunjang: kegiatan tambahan yang memperlancarnya.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 6 ayat (2) dan (3)"
              },
              {
                "teks": "Pengecualian persiapan atau penunjang hanya untuk penerapan P3B; tanpa P3B, tempat usaha yang memenuhi tiga kriteria tetap BUT.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 6 ayat (1)"
              },
              {
                "teks": "Bukan persiapan atau penunjang bila kegiatannya inti atau bagian tak terpisahkan dari kegiatan inti, langsung menimbulkan penghasilan, atau memakai harta atau SDM dalam jumlah signifikan.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 6 ayat (4)"
              },
              {
                "teks": "Pengecualian gugur bila kegiatan persiapan atau penunjang dilakukan untuk pihak lain.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 6 ayat (5)"
              },
              {
                "teks": "Contoh yang disebut tegas di P3B: fasilitas semata-mata untuk penyimpanan atau pameran barang sendiri, persediaan untuk disimpan, dipamerkan, dikirim, atau diproses pihak lain, pembelian barang, pengumpulan informasi.",
                "dasar": "PMK 112/2025 Pasal 22 ayat (4)"
              },
              {
                "teks": "Kegiatan itu dinilai bersama kegiatan pihak erat terkait di Indonesia; bila gabungannya bukan lagi persiapan atau penunjang, pengecualian tidak berlaku.",
                "dasar": "PMK 112/2025 Pasal 25 ayat (2)"
              },
              {
                "teks": "Agen, broker, atau perantara yang bebas dan bertindak sepenuhnya dalam rangka menjalankan perusahaannya sendiri tidak menimbulkan BUT.",
                "dasar": "UU PPh penjelasan Pasal 2 ayat (5); PMK 35/PMK.03/2019 Pasal 9 ayat (3)"
              },
              {
                "teks": "Agen tidak bebas: menerima instruksi untuk kepentingan pihak asing atau tidak menanggung sendiri risiko usahanya.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 9 ayat (2)"
              },
              {
                "teks": "Agen tidak bebas yang hanya melakukan kegiatan persiapan atau penunjang bukan BUT, khusus untuk penerapan P3B.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 9 ayat (4)"
              },
              {
                "teks": "Agen tidak bebas yang tidak menyepakati kontrak tetapi lazim berperan utama menuju kontrak yang biasanya disepakati WPLN tanpa perubahan material tetap menimbulkan BUT.",
                "dasar": "PMK 112/2025 Pasal 24 ayat (1)"
              },
              {
                "teks": "Tempat yang hanya untuk penyimpanan atau pengelolaan data elektronik dan aksesnya terbatas bagi pihak asing bukan tempat usaha BUT.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 5 ayat (5)"
              },
              {
                "teks": "Kantor perwakilan dagang asing: penghasilan neto 1% dari nilai ekspor bruto; PPh 0,44% dari nilai ekspor bruto, final.",
                "dasar": "KMK 634/KMK.04/1994 Pasal 2"
              },
              {
                "teks": "Nilai ekspor bruto: semua nilai pengganti yang diterima WPLN dari penyerahan barang kepada pihak di Indonesia; pajaknya tidak dihitung dari laba atau biaya kantor.",
                "dasar": "KMK 634/KMK.04/1994 Pasal 1 dan 2"
              },
              {
                "teks": "Penghasilan lain kantor perwakilan dagang asing di luar itu dikenai PPh menurut ketentuan umum.",
                "dasar": "KEP-667/PJ./2001 Pasal 4"
              }
            ]
          },
          {
            "id": "kewajiban",
            "judul": "Kewajiban BUT",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 2 ayat (1a); PMK 35/PMK.03/2019 Pasal 2, 3, 11; UU KUP Pasal 3 ayat (3); PMK 168/2023 Pasal 1",
            "kolom": [
              "Kewajiban",
              "Isi",
              "Dasar"
            ],
            "baris": [
              [
                "Daftar NPWP",
                "Paling lama 1 bulan setelah mulai usaha atau kegiatan melalui BUT",
                "PMK 35/PMK.03/2019 Pasal 2 ayat (3)"
              ],
              [
                "NPWP jabatan",
                "DJP dapat menerbitkan bila BUT tidak mendaftar",
                "PMK 35/PMK.03/2019 Pasal 2 ayat (4)"
              ],
              [
                "Pengukuhan Pengusaha Kena Pajak",
                "Paling lama akhir bulan berikutnya setelah bulan omzet melebihi batas pengusaha kecil",
                "PMK 35/PMK.03/2019 Pasal 3 ayat (2)"
              ],
              [
                "Pembukuan",
                "Wajib; Penghasilan Kena Pajak dihitung dengan cara biasa seperti badan",
                "UU PPh penjelasan Pasal 14 dan Pasal 16 ayat (3)"
              ],
              [
                "PPh badan",
                "22% dari PKP, tanpa pengurangan tarif Pasal 31E",
                "UU PPh Pasal 17 ayat (1) huruf b, Pasal 31E ayat (1)"
              ],
              [
                "Angsuran PPh Pasal 25",
                "Wajib seperti wajib pajak badan",
                "UU PPh Pasal 2 ayat (1a), Pasal 25"
              ],
              [
                "SPT Tahunan PPh Badan",
                "Paling lama 4 bulan setelah akhir tahun pajak",
                "UU KUP Pasal 3 ayat (3) huruf c"
              ],
              [
                "PPh Pasal 26 ayat (4)",
                "Lunas sebelum SPT Tahunan disampaikan; dihitung di Lampiran 12A",
                "PER-11/PJ/2025, petunjuk Lampiran 12A"
              ],
              [
                "Memotong PPh Pasal 21 dan 26 pegawai",
                "BUT termasuk pemotong pajak atas penghasilan pekerjaan, jasa, kegiatan",
                "PMK 168/2023 Pasal 1 angka 4"
              ],
              [
                "Memotong PPh Pasal 23 dan 26",
                "BUT disebut sebagai pihak pembayar yang wajib memotong",
                "UU PPh Pasal 23 ayat (1), Pasal 26 ayat (1)"
              ],
              [
                "Hapus NPWP",
                "Saat BUT menghentikan kegiatan usahanya di Indonesia",
                "PMK 35/PMK.03/2019 Pasal 11 ayat (1)"
              ]
            ]
          },
          {
            "id": "objek",
            "judul": "Objek pajak BUT",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 5 ayat (1) dan penjelasannya, penjelasan Pasal 16 ayat (3)",
            "kolom": [
              "Huruf",
              "Isi",
              "Contoh singkat"
            ],
            "baris": [
              [
                "a. Usaha dan harta BUT",
                "Penghasilan dari usaha atau kegiatan BUT dan dari harta yang dimiliki atau dikuasai",
                "Laba penjualan cabang, penghasilan bunga BUT"
              ],
              [
                "b. Usaha sejenis kantor pusat",
                "Penghasilan kantor pusat dari usaha, penjualan barang, atau jasa di Indonesia yang sejenis",
                "Kantor pusat menjual langsung produk yang sama ke pembeli di Indonesia"
              ],
              [
                "b. Contoh lain",
                "Usaha atau jasa sejenis yang dilakukan langsung tanpa melalui BUT",
                "Bank memberi pinjaman langsung; konsultan memberi konsultasi yang sama"
              ],
              [
                "c. Hubungan efektif",
                "Penghasilan Pasal 26 kantor pusat yang berhubungan efektif dengan BUT",
                "Royalti merek dari PT Y; BUT memberi jasa pemasaran produk bermerek itu"
              ],
              [
                "c. Contoh lain",
                "Dividen kantor pusat yang berhubungan efektif dengan BUT",
                "Ditambahkan ke penghasilan BUT"
              ],
              [
                "Bukan objek huruf b",
                "Penjualan kantor pusat atas barang yang tidak sejenis dengan usaha BUT",
                "Tidak ditambahkan ke penghasilan BUT"
              ]
            ]
          },
          {
            "id": "objek-catatan",
            "judul": "Catatan objek huruf b dan c",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 5 ayat (2), Pasal 24 ayat (3) huruf e, Pasal 26 ayat (5), Pasal 28 ayat (1)",
            "butir": [
              {
                "teks": "Biaya yang berkenaan dengan penghasilan huruf b dan c boleh dikurangkan, jadi yang menambah PKP adalah netonya.",
                "dasar": "UU PPh Pasal 5 ayat (2)"
              },
              {
                "teks": "PPh Pasal 26 yang sudah dipotong atas penghasilan huruf b dan c tidak final dan dapat dikreditkan di SPT Tahunan BUT.",
                "dasar": "UU PPh Pasal 26 ayat (5) huruf a dan penjelasannya"
              },
              {
                "teks": "WPLN yang berubah status menjadi BUT: PPh Pasal 26 yang sudah dipotong sebelumnya juga tidak final dan dapat dikreditkan.",
                "dasar": "UU PPh Pasal 26 ayat (5) huruf b dan penjelasannya"
              },
              {
                "teks": "Bila kantor pusat berhak atas P3B, huruf b hanya dipakai sepanjang pasal laba usaha P3B itu memuat klausul serupa; ikuti bunyi P3B di soal.",
                "dasar": "PMK 112/2025 Pasal 2 ayat (2)"
              },
              {
                "teks": "Sumber penghasilan BUT adalah negara tempat BUT menjalankan usaha atau melakukan kegiatan.",
                "dasar": "UU PPh Pasal 24 ayat (3) huruf e"
              },
              {
                "teks": "PPh Pasal 22 dan 23 yang dipungut atau dipotong pihak lain serta PPh Pasal 25 adalah kredit pajak BUT.",
                "dasar": "UU PPh Pasal 28 ayat (1)"
              }
            ]
          },
          {
            "id": "biaya",
            "judul": "Biaya yang boleh dan tidak boleh",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 5 ayat (2) dan (3), Pasal 16 ayat (3); KEP-62/PJ./1995",
            "kolom": [
              "Pos",
              "Perlakuan",
              "Dasar"
            ],
            "baris": [
              [
                "Biaya usaha BUT sendiri",
                "Boleh, mengikuti aturan biaya wajib pajak badan",
                "UU PPh Pasal 16 ayat (3), Pasal 6, Pasal 9"
              ],
              [
                "Biaya atas penghasilan huruf b dan c",
                "Boleh dikurangkan",
                "UU PPh Pasal 5 ayat (2)"
              ],
              [
                "Biaya administrasi kantor pusat",
                "Boleh sepanjang berkaitan dan menunjang usaha atau kegiatan BUT",
                "UU PPh Pasal 5 ayat (3) huruf a; KEP-62/PJ./1995 Pasal 1"
              ],
              [
                "Batas biaya administrasi kantor pusat",
                "Paling tinggi sebanding omzet BUT terhadap omzet perusahaan seluruh dunia",
                "KEP-62/PJ./1995 Pasal 2"
              ],
              [
                "Syarat membebankan alokasi",
                "Lampirkan laporan keuangan konsolidasi atau kombinasi kantor pusat yang sudah diaudit",
                "KEP-62/PJ./1995 Pasal 3"
              ],
              [
                "Royalti ke kantor pusat",
                "Tidak boleh (termasuk imbalan pemakaian harta, paten, hak lain)",
                "UU PPh Pasal 5 ayat (3) huruf b angka 1"
              ],
              [
                "Jasa manajemen dan jasa lain ke kantor pusat",
                "Tidak boleh",
                "UU PPh Pasal 5 ayat (3) huruf b angka 2"
              ],
              [
                "Bunga ke kantor pusat",
                "Tidak boleh, kecuali berkenaan dengan usaha perbankan",
                "UU PPh Pasal 5 ayat (3) huruf b angka 3"
              ],
              [
                "Royalti, jasa, bunga dari kantor pusat",
                "Bukan objek pajak BUT, kecuali bunga usaha perbankan",
                "UU PPh Pasal 5 ayat (3) huruf c"
              ],
              [
                "PPh Pasal 26 ayat (4)",
                "Final; bukan biaya dan bukan kredit pajak",
                "UU PPh Pasal 26 ayat (5), Pasal 9 ayat (1) huruf h"
              ]
            ]
          },
          {
            "id": "rumus",
            "judul": "Dari laba sampai PPh badan lalu pajak atas laba cabang",
            "jenis": "rumus",
            "dasar": "UU PPh Pasal 5, Pasal 16 ayat (3), Pasal 17 ayat (1) huruf b, Pasal 26 ayat (4); PMK 14/PMK.03/2011; KEP-62/PJ./1995",
            "rumus": [
              {
                "nama": "Batas biaya administrasi kantor pusat",
                "isi": "Batas = (omzet BUT : omzet perusahaan seluruh dunia) x biaya administrasi kantor pusat; koreksi positif = yang dibebankan dikurangi batas",
                "contoh": "Omzet BUT Rp40 miliar, dunia Rp800 miliar, biaya administrasi kantor pusat Rp12 miliar: batas 5% x Rp12 miliar = Rp600 juta. Dibebankan Rp1 miliar, koreksi Rp400 juta.",
                "dasar": "KEP-62/PJ./1995 Pasal 2"
              },
              {
                "nama": "Penghasilan neto fiskal BUT",
                "isi": "Laba komersial + royalti, jasa manajemen, bunga ke kantor pusat + kelebihan alokasi biaya administrasi + neto huruf b dan c + koreksi fiskal lain",
                "contoh": "Laba komersial Rp8.000 juta sudah dikurangi royalti 500, bunga 300, alokasi 1.000 (batas 600); laba neto penjualan langsung kantor pusat 700. Neto fiskal = 8.000 + 500 + 300 + 400 + 700 = Rp9.900 juta.",
                "dasar": "UU PPh Pasal 5 ayat (1) sampai (3), Pasal 16 ayat (3)"
              },
              {
                "nama": "PKP dan PPh badan",
                "isi": "PKP = penghasilan neto fiskal dikurangi kompensasi rugi fiskal; PPh badan = 22% x PKP",
                "contoh": "Tanpa sisa rugi: PKP Rp9.900 juta; PPh badan 22% x Rp9.900 juta = Rp2.178 juta.",
                "dasar": "UU PPh Pasal 6 ayat (2), Pasal 16 ayat (3), Pasal 17 ayat (1) huruf b"
              },
              {
                "nama": "Pajak atas laba cabang (PPh Pasal 26 ayat (4))",
                "isi": "20% x (PKP dikurangi PPh badan); tarif 20% diganti tarif P3B bila kantor pusat penduduk negara mitra P3B",
                "contoh": "Dasar Rp9.900 juta dikurangi Rp2.178 juta = Rp7.722 juta. Tarif 20%: Rp1.544,4 juta. Tarif P3B 10%: Rp772,2 juta.",
                "dasar": "UU PPh Pasal 26 ayat (4); PMK 14/PMK.03/2011 Pasal 1 ayat (1) dan Pasal 5"
              },
              {
                "nama": "Dasar bila ada penghasilan yang dikenai PPh final",
                "isi": "Dasar = (PKP + penghasilan yang dikenai PPh final) dikurangi (PPh badan + PPh final)",
                "contoh": "PKP Rp5.000 juta, penghasilan yang dikenai PPh final Rp200 juta dengan PPh final Rp40 juta: dasar = 5.200 dikurangi (1.100 + 40) = Rp4.060 juta; 20% = Rp812 juta.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 6; PER-11/PJ/2025, petunjuk Lampiran 12A"
              },
              {
                "nama": "Contoh resmi penjelasan UU",
                "isi": "PKP x 22% = PPh badan; (PKP dikurangi PPh badan) x 20% = PPh Pasal 26 ayat (4)",
                "contoh": "PKP Rp17.500 juta: PPh badan Rp3.850 juta, PKP setelah pajak Rp13.650 juta, PPh Pasal 26 ayat (4) Rp2.730 juta.",
                "dasar": "UU PPh penjelasan Pasal 26 ayat (4)"
              },
              {
                "nama": "Kantor perwakilan dagang asing",
                "isi": "PPh final = 0,44% x nilai ekspor bruto",
                "contoh": "Nilai ekspor bruto Rp50 miliar: PPh final 0,44% x Rp50 miliar = Rp220 juta.",
                "dasar": "KMK 634/KMK.04/1994 Pasal 2 ayat (2)"
              }
            ]
          },
          {
            "id": "sifat-bpt",
            "judul": "Sifat pajak atas laba cabang",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 26 ayat (1), (4), (5); PMK 14/PMK.03/2011 Pasal 1 dan 5; PER-11/PJ/2025 Lampiran 12A dan 12B",
            "butir": [
              {
                "teks": "Dasarnya PKP sesudah dikurangi PPh badan, bukan laba komersial dan bukan PKP sebelum pajak.",
                "dasar": "UU PPh Pasal 26 ayat (4)"
              },
              {
                "teks": "Terutang walau laba tidak dikirim ke kantor pusat; pada anak perusahaan, PPh Pasal 26 baru dipotong saat dividen dibayarkan, disediakan untuk dibayarkan, atau jatuh tempo.",
                "dasar": "UU PPh Pasal 26 ayat (1) dan (4)"
              },
              {
                "teks": "Bersifat final.",
                "dasar": "UU PPh Pasal 26 ayat (5)"
              },
              {
                "teks": "Dilunasi sebelum SPT Tahunan PPh Badan disampaikan; pelunasan dan pelaporannya memakai SPT Masa PPh Unifikasi.",
                "dasar": "PER-11/PJ/2025, petunjuk Lampiran 12A"
              },
              {
                "teks": "Tarif 20% diganti tarif P3B bila kantor pusat wajib pajak dalam negeri negara mitra P3B; pakai tarif yang disebut soal.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 5"
              },
              {
                "teks": "Pengecualian karena penanaman kembali hanya bila seluruh PKP sesudah PPh ditanamkan kembali di Indonesia; penanaman sebagian tidak membebaskan.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 1 ayat (3)"
              },
              {
                "teks": "Lampiran 12A juga menyediakan pilihan tidak terutang berdasarkan ketentuan P3B; ikuti bunyi P3B di soal.",
                "dasar": "PER-11/PJ/2025, Lampiran 12A"
              },
              {
                "teks": "Hitungan disajikan di Lampiran 12A dan pemberitahuan penanaman kembali di Lampiran 12B SPT Tahunan PPh Badan.",
                "dasar": "PER-11/PJ/2025 Lampiran 12A dan 12B"
              }
            ]
          },
          {
            "id": "tanam-kembali",
            "judul": "Penanaman kembali: bentuk dan larangan pengalihan",
            "jenis": "tabel",
            "dasar": "PMK 14/PMK.03/2011 Pasal 1 ayat (3) dan Pasal 2 ayat (2) sampai (4)",
            "kolom": [
              "Bentuk",
              "Syarat khusus",
              "Tidak boleh dialihkan"
            ],
            "baris": [
              [
                "Penyertaan modal pada perusahaan baru di Indonesia sebagai pendiri atau peserta pendiri",
                "Perusahaan baru aktif berusaha paling lama 1 tahun sejak didirikan",
                "Paling sedikit 2 tahun sejak perusahaan baru berproduksi komersial"
              ],
              [
                "Penyertaan modal pada perusahaan yang sudah berdiri di Indonesia sebagai pemegang saham",
                "Perusahaan mempunyai kegiatan usaha aktif di Indonesia",
                "Paling sedikit 3 tahun sejak penyertaan modal"
              ],
              [
                "Pembelian aktiva tetap yang digunakan BUT di Indonesia",
                "Dipakai untuk usaha atau kegiatan BUT",
                "Paling sedikit 3 tahun sejak perolehan"
              ],
              [
                "Investasi aktiva tidak berwujud oleh BUT di Indonesia",
                "Dipakai untuk usaha atau kegiatan BUT",
                "Paling sedikit 3 tahun sejak investasi"
              ],
              [
                "Deposito, obligasi, surat utang lain",
                "Tidak termasuk empat bentuk yang diakui",
                "Pajak atas laba cabang tetap terutang"
              ]
            ]
          },
          {
            "id": "tanam-langkah",
            "judul": "Penanaman kembali: urutan syarat dan akibat",
            "jenis": "langkah",
            "dasar": "PMK 14/PMK.03/2011 Pasal 1 sampai 4",
            "langkah": [
              {
                "teks": "Pastikan yang ditanam seluruh PKP sesudah dikurangi PPh, dalam salah satu dari empat bentuk yang diakui.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 1 ayat (3)"
              },
              {
                "teks": "Beri tahu bentuk penanaman secara tertulis kepada Kepala KPP tempat BUT terdaftar, dilampirkan pada SPT Tahunan tahun pajak penghasilan diperoleh.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 3 ayat (1)"
              },
              {
                "teks": "Tanamkan paling lama pada akhir tahun pajak berikutnya setelah tahun pajak penghasilan diperoleh; penghasilan tahun pajak 2025 paling lama 31 Desember 2026 bila tahun pajak sama dengan tahun kalender.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 2 ayat (1) huruf a"
              },
              {
                "teks": "Beri tahu realisasi, dilampirkan pada SPT Tahunan tahun pajak realisasi; isinya jumlah PKP sesudah PPh dan tahunnya, bentuk, jumlah realisasi, dan tahun realisasi.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 3 ayat (2) dan (3)"
              },
              {
                "teks": "Untuk perusahaan baru, beri tahu saat mulai berproduksi komersial: mulai memproduksi barang untuk dijual (manufaktur) atau mulai menjual barang atau jasa (selain manufaktur).",
                "dasar": "PMK 14/PMK.03/2011 Pasal 4 ayat (1) dan (2)"
              },
              {
                "teks": "Kepala KPP menetapkan saat produksi komersial paling lama 6 bulan setelah pemberitahuan; bila lewat tanpa keputusan, berlaku saat menurut pemberitahuan BUT.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 4 ayat (3) dan (5)"
              },
              {
                "teks": "Jaga larangan pengalihan: 2 tahun sejak produksi komersial (perusahaan baru) atau 3 tahun (perusahaan yang sudah berdiri, aktiva tetap, aktiva tidak berwujud).",
                "dasar": "PMK 14/PMK.03/2011 Pasal 2 ayat (2) sampai (4)"
              },
              {
                "teks": "Bila ada syarat yang tidak lagi dipenuhi, PPh Pasal 26 ayat (4) terutang terhitung sejak PKP itu diperoleh dan dikenai sanksi sesuai ketentuan perpajakan.",
                "dasar": "PMK 14/PMK.03/2011 Pasal 2 ayat (5)"
              }
            ]
          },
          {
            "id": "p3b",
            "judul": "BUT dalam P3B: Pasal 5 dan Pasal 7",
            "jenis": "butir",
            "dasar": "Pasal 5 dan Pasal 7 P3B terkait (bunyi tiap P3B berbeda, ikuti soal); PMK 112/2025 Pasal 2, 8 sampai 10, 22, 26; PMK 35/PMK.03/2019 Pasal 6 sampai 10",
            "butir": [
              {
                "teks": "Pasal 5 P3B memuat definisi BUT dan batas waktunya; Pasal 7 P3B mengatur laba usaha. Angka dan bunyinya selalu diambil dari P3B yang disebut soal.",
                "dasar": "Pasal 5 dan Pasal 7 P3B terkait"
              },
              {
                "teks": "Pola umum Pasal 7: laba usaha penduduk negara mitra hanya dipajaki di negara domisili, kecuali usaha dijalankan melalui BUT di Indonesia.",
                "dasar": "Pasal 7 P3B terkait; PMK 112/2025 Pasal 2 ayat (6) huruf b"
              },
              {
                "teks": "Tanpa BUT dan syarat pemanfaatan P3B dipenuhi, imbalan jasa yang termasuk laba usaha tidak dipotong PPh Pasal 26.",
                "dasar": "Pasal 7 P3B terkait; PMK 112/2025 Pasal 2 ayat (5) dan (6)"
              },
              {
                "teks": "Bila ada BUT, laba yang diatribusikan kepada BUT dikenai PPh badan 22%, lalu pajak atas laba cabang dengan tarif P3B.",
                "dasar": "Pasal 7 P3B terkait; UU PPh Pasal 17 ayat (1) huruf b dan Pasal 26 ayat (4); PMK 14/PMK.03/2011 Pasal 5"
              },
              {
                "teks": "Pola umum atribusi laba: BUT diperlakukan sebagai perusahaan terpisah yang bertransaksi wajar; biaya eksekutif dan administrasi umum untuk BUT boleh dikurangkan di mana pun dikeluarkan.",
                "dasar": "Pasal 7 P3B terkait"
              },
              {
                "teks": "Royalti, jasa manajemen, dan bunga ke kantor pusat tetap tidak boleh dikurangkan, kecuali bunga usaha perbankan.",
                "dasar": "UU PPh Pasal 5 ayat (3) huruf b"
              },
              {
                "teks": "Untuk penerapan P3B, proyek konstruksi dan pemberian jasa baru menjadi BUT bila melebihi periode waktu dalam P3B.",
                "dasar": "PMK 35/PMK.03/2019 Pasal 7 ayat (4) dan Pasal 8 ayat (2)"
              },
              {
                "teks": "Jangka waktu penentuan BUT yang berbeda dari UU PPh termasuk manfaat P3B, jadi hanya berlaku bila syarat pemanfaatan P3B dipenuhi.",
                "dasar": "PMK 112/2025 Pasal 2 ayat (6) huruf d"
              },
              {
                "teks": "Syarat pemanfaatan: bukan subjek pajak dalam negeri Indonesia, penduduk negara mitra, tidak menyalahgunakan P3B; dibuktikan dengan Form DGT yang disahkan pejabat berwenang.",
                "dasar": "PMK 112/2025 Pasal 2 ayat (3) dan (4), Pasal 8"
              },
              {
                "teks": "Periode pada Form DGT paling lama 12 bulan; pengesahan dapat diganti SKD berbahasa Inggris yang memuat nama WPLN, tanggal terbit, serta nama dan tanda tangan pejabat.",
                "dasar": "PMK 112/2025 Pasal 8 ayat (4) dan Pasal 9 ayat (1)"
              },
              {
                "teks": "Bila syarat pemanfaatan atau ketentuan Form DGT tidak terpenuhi, pemotong memakai UU PPh: uji 60 hari dan tarif 20%.",
                "dasar": "PMK 112/2025 Pasal 10 ayat (4)"
              },
              {
                "teks": "Bila ditemukan penghindaran penentuan BUT, DJP dapat menerbitkan NPWP secara jabatan atas BUT.",
                "dasar": "PMK 112/2025 Pasal 26"
              }
            ]
          },
          {
            "id": "potput",
            "judul": "Pemotongan pajak oleh dan terhadap BUT",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 23 ayat (1), Pasal 26 ayat (1), (4), (5), Pasal 28 ayat (1); PMK 168/2023 Pasal 1 angka 4",
            "kolom": [
              "Arus pembayaran",
              "Pajak",
              "Catatan"
            ],
            "baris": [
              [
                "Pihak Indonesia membayar imbalan jasa ke BUT",
                "PPh Pasal 23 sebesar 2% dari bruto, bukan PPh Pasal 26",
                "Tidak final, menjadi kredit pajak BUT"
              ],
              [
                "Pihak Indonesia membayar bunga atau royalti ke BUT",
                "PPh Pasal 23 sebesar 15% dari bruto",
                "Kredit pajak BUT"
              ],
              [
                "BUT membayar jasa atau sewa ke wajib pajak dalam negeri",
                "BUT memotong PPh Pasal 23",
                "BUT disebut sebagai pemotong di Pasal 23 ayat (1)"
              ],
              [
                "BUT membayar gaji pegawainya",
                "BUT memotong PPh Pasal 21, atau Pasal 26 untuk pegawai WPLN",
                "PMK 168/2023 Pasal 1 angka 4"
              ],
              [
                "BUT membayar ke WPLN lain selain BUT",
                "BUT memotong PPh Pasal 26 sebesar 20% dari bruto atau tarif P3B",
                "Final bagi penerima"
              ],
              [
                "BUT membayar royalti, jasa, bunga ke kantor pusat",
                "Bukan biaya bagi BUT (kecuali bunga usaha perbankan)",
                "Satu kesatuan dengan kantor pusat, perputaran dana intern"
              ],
              [
                "Pihak Indonesia membayar ke kantor pusat, objek Pasal 5 ayat (1) huruf b atau c",
                "PPh Pasal 26 yang dipotong tidak final",
                "Dikreditkan di SPT Tahunan BUT"
              ],
              [
                "PKP BUT sesudah dikurangi PPh badan",
                "PPh Pasal 26 ayat (4) sebesar 20% atau tarif P3B",
                "Dilunasi BUT sendiri, final"
              ]
            ]
          },
          {
            "id": "jebakan",
            "judul": "Jebakan ujian yang paling sering",
            "jenis": "jebakan",
            "dasar": "UU PPh Pasal 2 ayat (5), Pasal 5, Pasal 26 ayat (4); PMK 35/PMK.03/2019; PMK 14/PMK.03/2011; PMK 112/2025; KMK 634/KMK.04/1994",
            "butir": [
              {
                "teks": "Menghitung 60 hari per tahun kalender; yang benar dalam jangka waktu 12 bulan, dari jasa mulai sampai selesai, termasuk waktu subkontraktor."
              },
              {
                "teks": "Menganggap tepat 60 hari sudah BUT; yang benar harus lebih dari 60 hari, begitu juga batas P3B yang berbunyi lebih dari."
              },
              {
                "teks": "Memakai 60 hari padahal WPLN berhak atas P3B dengan batas lain, atau memakai batas P3B padahal Form DGT tidak sah."
              },
              {
                "teks": "Menunggu batas waktu untuk proyek konstruksi tanpa P3B; menurut UU PPh proyek konstruksi BUT tanpa batas waktu."
              },
              {
                "teks": "Mengecualikan kegiatan persiapan atau penunjang padahal tidak ada P3B; pengecualian itu hanya untuk penerapan P3B."
              },
              {
                "teks": "Menganggap gudang selalu bukan BUT; gudang ada di daftar BUT, dan di P3B hanya dikecualikan bila semata-mata untuk penyimpanan atau pameran barang sendiri."
              },
              {
                "teks": "Lupa menambahkan neto penjualan langsung kantor pusat atas barang sejenis, menambahkan brutonya, atau menambahkan penjualan barang yang tidak sejenis."
              },
              {
                "teks": "Mengurangkan royalti, jasa manajemen, atau bunga yang dibayar ke kantor pusat; hanya bunga usaha perbankan yang boleh."
              },
              {
                "teks": "Mengoreksi seluruh alokasi biaya administrasi kantor pusat; yang dikoreksi hanya bagian yang tidak berkaitan dengan BUT atau melebihi batas perbandingan omzet."
              },
              {
                "teks": "Menyamakan alokasi biaya administrasi kantor pusat dengan imbalan jasa manajemen; alokasi boleh, imbalan jasa manajemen tidak boleh."
              },
              {
                "teks": "Memotong PPh Pasal 26 atas pembayaran jasa kepada BUT; yang benar PPh Pasal 23."
              },
              {
                "teks": "Menghitung pajak atas laba cabang dari laba komersial atau PKP sebelum pajak; yang benar dari PKP dikurangi PPh badan."
              },
              {
                "teks": "Memakai tarif Pasal 31E untuk BUT beromzet kecil; BUT tetap 22% penuh."
              },
              {
                "teks": "Menganggap pajak atas laba cabang baru terutang saat laba dikirim; pajak ini terutang walau laba tetap di Indonesia."
              },
              {
                "teks": "Membebaskan pajak atas laba cabang sebesar bagian yang ditanam; pengecualian hanya bila seluruh PKP sesudah PPh ditanamkan kembali."
              },
              {
                "teks": "Menganggap deposito atau obligasi sebagai penanaman kembali, atau penanaman setelah akhir tahun pajak berikutnya masih membebaskan."
              },
              {
                "teks": "Tertukar 2 tahun dan 3 tahun: 2 tahun sejak produksi komersial hanya untuk perusahaan baru, selebihnya 3 tahun."
              },
              {
                "teks": "Mengenakan pajak hanya sejak tanggal pelanggaran; bila syarat dilanggar, pajak terutang sejak PKP itu diperoleh ditambah sanksi."
              },
              {
                "teks": "Lupa memasukkan penghasilan yang dikenai PPh final ke dasar pajak atas laba cabang, atau lupa mengurangkan PPh finalnya."
              },
              {
                "teks": "Menghitung PPh kantor perwakilan dagang asing dari laba atau biaya; yang benar 0,44% dari nilai ekspor bruto dan final."
              },
              {
                "teks": "Mengabaikan proyek pihak erat terkait di lokasi yang sama; periode yang masing-masing lebih dari 30 hari kalender dijumlahkan untuk uji batas waktu P3B."
              }
            ]
          }
        ]
      },
      {
        "id": "intl",
        "judul": "Pajak Internasional",
        "topik": [
          "C10.1",
          "C10.3",
          "C10.4",
          "C10.5",
          "C10.6",
          "C10.7",
          "C10.8",
          "C10.9",
          "C9.3",
          "C9.4",
          "C9.5",
          "C9.6"
        ],
        "bagian": [
          {
            "id": "baca-p3b",
            "judul": "Urutan membaca P3B",
            "jenis": "langkah",
            "dasar": "UU PPh Pasal 32A; PMK 112/2025 Pasal 2 dan 10; P3B (Model)",
            "langkah": [
              {
                "teks": "P3B aturan khusus yang membatasi hak pemajakan; yang tidak dibatasi kembali ke UU PPh.",
                "dasar": "Penjelasan UU PPh Pasal 32A"
              },
              {
                "teks": "Cek cakupan orang (Pasal 1) dan pajak (Pasal 2), lalu residen (Pasal 4); residen ganda diselesaikan dengan tie-breaker.",
                "dasar": "P3B (Model)"
              },
              {
                "teks": "Cek tiga syarat WPLN dan Form DGT (lihat bagian syarat).",
                "dasar": "PMK 112/2025 Pasal 2"
              },
              {
                "teks": "Golongkan penghasilan: harta tak gerak (6), laba usaha (7), dividen (10), bunga (11), royalti (12), pengalihan harta (13), pekerjaan (15), direksi (16), artis dan olahragawan (17).",
                "dasar": "P3B (Model)"
              },
              {
                "teks": "Baca rumusan hak. \"Hanya dapat dikenai pajak\" di negara domisili: Indonesia tidak memotong (laba usaha tanpa BUT). \"Dapat dikenai pajak\" tanpa batas: tarif UU PPh. \"Tidak melebihi sekian persen\": tarif maksimum P3B.",
                "dasar": "P3B (Model)"
              },
              {
                "teks": "Syarat tidak terpenuhi saat pemotongan: potong menurut UU PPh, 20%.",
                "dasar": "PMK 112/2025 Pasal 10 ayat (4)"
              },
              {
                "teks": "Pajak berganda dihilangkan negara domisili (Pasal 23); sengketa lewat MAP (Pasal 25); pertukaran informasi (Pasal 26).",
                "dasar": "P3B (Model)"
              }
            ]
          },
          {
            "id": "residen",
            "judul": "Residen dan tie-breaker",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 2 ayat (3); P3B (Model) Pasal 4; MLI Pasal 4",
            "kolom": [
              "Hal",
              "Uji",
              "Dasar"
            ],
            "baris": [
              [
                "Orang pribadi residen Indonesia",
                "Bertempat tinggal; lebih dari 183 hari dalam 12 bulan; atau berada dan berniat tinggal",
                "UU PPh Pasal 2 ayat (3) huruf a"
              ],
              [
                "Badan residen Indonesia",
                "Didirikan atau bertempat kedudukan di Indonesia",
                "UU PPh Pasal 2 ayat (3) huruf b"
              ],
              [
                "Tie-breaker orang pribadi, uji 1 dan 2",
                "Tempat tinggal tetap, lalu pusat kepentingan vital",
                "P3B (Model) Pasal 4 ayat (2)"
              ],
              [
                "Tie-breaker orang pribadi, uji 3 sampai 5",
                "Tempat kebiasaan berdiam, lalu kewarganegaraan, lalu persetujuan bersama",
                "P3B (Model) Pasal 4 ayat (2)"
              ],
              [
                "Cara pakai",
                "Berurutan; berhenti di uji pertama yang memberi jawaban; baca teks P3B terkait",
                "P3B (Model) Pasal 4"
              ],
              [
                "Tie-breaker badan, rumusan lama",
                "Negara tempat kedudukan manajemen efektif",
                "P3B (Model) Pasal 4 ayat (3)"
              ],
              [
                "Tie-breaker badan, rumusan MLI",
                "Persetujuan bersama: manajemen efektif, tempat pendirian, faktor lain",
                "MLI Pasal 4"
              ],
              [
                "Badan rumusan MLI tanpa kesepakatan",
                "Tidak berhak atas manfaat P3B, kecuali yang disepakati",
                "MLI Pasal 4"
              ]
            ]
          },
          {
            "id": "syarat-p3b",
            "judul": "Syarat memakai P3B: Form DGT, beneficial owner, uji penyalahgunaan",
            "jenis": "butir",
            "dasar": "PMK 112/2025",
            "butir": [
              {
                "teks": "Berlaku sejak diundangkan, 31 Desember 2025. Form DGT terdiri atas 6 bagian.",
                "dasar": "Pasal 29 dan Lampiran"
              },
              {
                "teks": "Tiga syarat WPLN: bukan subjek pajak dalam negeri Indonesia, residen negara mitra, tidak menyalahgunakan P3B.",
                "dasar": "Pasal 2 ayat (4)"
              },
              {
                "teks": "Form DGT diserahkan WPLN kepada pemotong dalam rangka pemotongan; diisi benar, lengkap, jelas; ditandatangani WPLN; disahkan pejabat berwenang negara mitra; periode paling lama 12 bulan.",
                "dasar": "Pasal 8"
              },
              {
                "teks": "Pengesahan boleh diganti SKD negara mitra berbahasa Inggris; tanpa periode, hanya berlaku untuk masa pajak bulan terbitnya.",
                "dasar": "Pasal 9"
              },
              {
                "teks": "Pemotong mengecek, mengunggah Form DGT di portal wajib pajak, meneruskan tanda terima ke WPLN, lalu memotong sesuai P3B; pemotongan berikutnya dalam periode itu cukup tanda terima.",
                "dasar": "Pasal 10 dan 11"
              },
              {
                "teks": "Pajak tidak dipotong karena P3B: pemotong tetap melapor dan membuat bukti potong.",
                "dasar": "Pasal 14 ayat (2)"
              },
              {
                "teks": "Form DGT yang baru diserahkan saat pemeriksaan atau keberatan masih dapat dipertimbangkan.",
                "dasar": "Pasal 17 ayat (2)"
              },
              {
                "teks": "Tidak menyalahgunakan: ada substansi ekonomi; bentuk hukum sama dengan substansi; manajemen sendiri; aset dan pegawai memadai; usaha aktif selain menerima dividen, bunga, royalti dari Indonesia; tujuan utama bukan manfaat P3B; beneficial owner.",
                "dasar": "Pasal 8 ayat (2) huruf c"
              },
              {
                "teks": "Beneficial owner: bukan agen atau nomine; badan juga bukan conduit, mengendalikan dana atau aset, tidak memakai lebih dari 50% penghasilan untuk kewajiban kepada pihak lain, menanggung risiko, tidak wajib meneruskan penghasilan.",
                "dasar": "Pasal 19"
              },
              {
                "teks": "Dividen dua tarif: tarif lebih rendah hanya bila persentase saham terpenuhi dan dimiliki paling singkat 365 hari kalender termasuk hari pembayaran.",
                "dasar": "Pasal 20"
              },
              {
                "teks": "Saham entitas kaya harta tak gerak: hak pajak di Indonesia bila ambang P3B terlampaui kapan pun dalam 365 hari sebelum pengalihan.",
                "dasar": "Pasal 21"
              },
              {
                "teks": "SKD untuk WPDN: satu permohonan untuk satu negara, satu tahun pajak, satu lawan transaksi; berlaku sampai 31 Desember tahun terbit.",
                "dasar": "Pasal 4 dan 5"
              }
            ]
          },
          {
            "id": "pph26",
            "judul": "Tabel PPh Pasal 26",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 26; PMK 81/2024 Pasal 1 angka 149, Pasal 238 sampai 242; PMK 82/PMK.03/2009; PMK 258/PMK.03/2008",
            "kolom": [
              "Penghasilan WPLN",
              "Dasar pengenaan",
              "Tarif efektif",
              "Catatan"
            ],
            "baris": [
              [
                "Dividen",
                "Bruto",
                "20%",
                "Final; tarif P3B hanya untuk beneficial owner"
              ],
              [
                "Bunga, premium, diskonto, imbalan jaminan utang",
                "Bruto",
                "20%",
                "Final"
              ],
              [
                "Royalti, sewa, penghasilan lain dari penggunaan harta",
                "Bruto",
                "20%",
                "Final"
              ],
              [
                "Imbalan jasa, pekerjaan, kegiatan",
                "Bruto",
                "20%",
                "Final; P3B: laba usaha tanpa BUT tidak dipotong"
              ],
              [
                "Hadiah, penghargaan, pensiun, pembayaran berkala",
                "Bruto",
                "20%",
                "Final"
              ],
              [
                "Premi swap, lindung nilai, keuntungan pembebasan utang",
                "Bruto",
                "20%",
                "Final"
              ],
              [
                "Jual harta mewah: perhiasan, emas, lukisan, mobil, kapal pesiar",
                "25% × harga jual",
                "5%",
                "Final; dipotong pembeli; hanya bila P3B memberi hak ke Indonesia"
              ],
              [
                "Jual saham PT dalam negeri bukan emiten atau perusahaan publik",
                "25% × harga jual",
                "5%",
                "Final; syarat P3B sama; dipungut PT itu bila pembelinya WPLN"
              ],
              [
                "Jual saham perusahaan antara (conduit) di negara suaka pajak",
                "25% × harga jual",
                "5%",
                "Dianggap menjual saham badan Indonesia"
              ],
              [
                "Premi asuransi dibayar tertanggung",
                "50% × premi",
                "10%",
                "Pemotong: tertanggung"
              ],
              [
                "Premi dibayar perusahaan asuransi di Indonesia",
                "10% × premi",
                "2%",
                "Pemotong: perusahaan asuransi"
              ],
              [
                "Premi dibayar perusahaan reasuransi di Indonesia",
                "5% × premi",
                "1%",
                "Pemotong: perusahaan reasuransi"
              ],
              [
                "Laba BUT setelah pajak",
                "PKP dikurangi PPh badan",
                "20%",
                "Bebas bila ditanamkan kembali di Indonesia"
              ],
              [
                "Tidak final",
                "Penghasilan BUT Pasal 5 ayat (1) huruf b dan c",
                "20%",
                "Juga WPLN yang berubah menjadi WPDN atau BUT"
              ]
            ]
          },
          {
            "id": "pph26-hitung",
            "judul": "Hitungan PPh Pasal 26",
            "jenis": "rumus",
            "dasar": "UU PPh Pasal 26; PMK 112/2025; PMK 81/2024",
            "rumus": [
              {
                "nama": "Pajak ditanggung pembayar (gross-up)",
                "isi": "Bruto = neto ÷ (1 − tarif); PPh = tarif × bruto",
                "contoh": "Neto Rp450.000.000, tarif 10%: bruto Rp500.000.000, PPh Rp50.000.000. Tarif 20%: bruto Rp562.500.000, PPh Rp112.500.000.",
                "dasar": "UU PPh Pasal 26 ayat (1)"
              },
              {
                "nama": "Jual saham atau harta tertentu",
                "isi": "PPh 26 = 20% × 25% × harga jual = 5% × harga jual",
                "contoh": "Saham dijual Rp12.000.000.000: Rp600.000.000.",
                "dasar": "PMK 81/2024 Pasal 238 ayat (3)"
              },
              {
                "nama": "Premi asuransi ke luar negeri",
                "isi": "PPh 26 = 20% × (50%, 10%, atau 5% × premi); terutang akhir bulan premi dibayar atau terutang; setor 15 hari dan lapor 20 hari setelahnya",
                "contoh": "Premi Rp2.000.000.000: tertanggung Rp200.000.000; asuransi Rp40.000.000; reasuransi Rp20.000.000. Dibayar 12 Maret: terutang 31 Maret, setor 15 April, lapor 20 April.",
                "dasar": "PMK 81/2024 Pasal 241 dan 243"
              },
              {
                "nama": "Kelebihan potong karena P3B",
                "isi": "Kelebihan = (20% − tarif P3B) × bruto; diminta kembali oleh pemotong dengan surat kuasa WPLN",
                "contoh": "Bunga Rp1.000.000.000 dipotong 20%, tarif P3B 10%: Rp100.000.000. WPLN mengajukan sendiri hanya bila pemotong tidak ditemukan atau tidak dapat membetulkan SPT.",
                "dasar": "PMK 112/2025 Pasal 15; PMK 81/2024 Pasal 133 sampai 135"
              },
              {
                "nama": "Saat terutang, setor, lapor",
                "isi": "Terutang saat dibayar, disediakan untuk dibayar, atau jatuh tempo; setor paling lambat tanggal 15 bulan berikutnya; lapor paling lama 20 hari setelah masa pajak berakhir",
                "contoh": "Bunga jatuh tempo 28 Maret, dibayar 10 Mei: masa Maret, setor 15 April, lapor 20 April dengan SPT Masa PPh Unifikasi (jasa orang pribadi: SPT Masa PPh 21/26).",
                "dasar": "UU PPh Pasal 26 ayat (1); PMK 81/2024 Pasal 94 dan 171"
              }
            ]
          },
          {
            "id": "kredit-ln",
            "judul": "Kredit pajak luar negeri Pasal 24",
            "jenis": "rumus",
            "dasar": "UU PPh Pasal 24; PMK 192/PMK.03/2018",
            "rumus": [
              {
                "nama": "PKP dengan penghasilan luar negeri (LN)",
                "isi": "PKP = neto dalam negeri + neto LN sebelum pajak LN; rugi LN diabaikan",
                "contoh": "PT Sagara Lintas: dalam negeri Rp8.000.000.000, bunga Negara A Rp1.000.000.000, cabang B Rp1.000.000.000, rugi cabang C Rp500.000.000. PKP Rp10.000.000.000; PPh 22% Rp2.200.000.000.",
                "dasar": "Pasal 4"
              },
              {
                "nama": "Batas kredit per jenis penghasilan per negara",
                "isi": "Kredit = terkecil dari: pajak LN yang seharusnya menurut P3B; pajak LN dibayar; (penghasilan LN jenis itu ÷ PKP) × PPh terutang",
                "contoh": "Bunga A: dipotong Rp150.000.000, menurut P3B Rp100.000.000, batas Rp220.000.000: kredit Rp100.000.000. Cabang B: pajak Rp300.000.000, batas Rp220.000.000: kredit Rp220.000.000.",
                "dasar": "Pasal 6 ayat (2) dan (4)"
              },
              {
                "nama": "Kelebihan pajak LN",
                "isi": "Tidak dapat dikreditkan, dibiayakan, atau direstitusi",
                "contoh": "Kredit Rp320.000.000; PPh setelah kredit Rp1.880.000.000. Sisa A Rp50.000.000 dan B Rp80.000.000 hangus.",
                "dasar": "Pasal 7"
              },
              {
                "nama": "PKP lebih kecil daripada penghasilan LN",
                "isi": "Kredit paling tinggi sebesar PPh terutang atas PKP",
                "contoh": "Neto LN Rp1.000.000.000, rugi dalam negeri Rp400.000.000: PKP Rp600.000.000, PPh Rp132.000.000. Pajak LN Rp200.000.000: kredit Rp132.000.000.",
                "dasar": "Pasal 6 ayat (7)"
              },
              {
                "nama": "Pajak LN dikembalikan kemudian",
                "isi": "PPh terutang tahun pengembalian ditambah jumlah yang dikembalikan",
                "contoh": "Tahun 2026 Negara B mengembalikan Rp40.000.000: PPh terutang 2026 ditambah Rp40.000.000.",
                "dasar": "UU PPh Pasal 24 ayat (5); Pasal 9"
              }
            ]
          },
          {
            "id": "metode-pb",
            "judul": "Metode penghindaran pajak berganda dan negara sumber",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 24 dan Pasal 4 ayat (3) huruf f; PMK 192/PMK.03/2018; P3B (Model) Pasal 23",
            "kolom": [
              "Hal",
              "Aturan",
              "Dasar"
            ],
            "baris": [
              [
                "Pilihan dalam P3B",
                "Pembebasan (23A) atau kredit (23B) oleh negara domisili",
                "P3B (Model) Pasal 23"
              ],
              [
                "Metode Indonesia",
                "Kredit biasa (ordinary credit), per jenis penghasilan per negara",
                "PMK 192 Pasal 6 ayat (2)"
              ],
              [
                "P3B: hanya Indonesia yang berhak",
                "Pajak LN atas penghasilan itu tidak dapat dikreditkan",
                "PMK 192 Pasal 6 ayat (8)"
              ],
              [
                "Pembebasan dividen LN dan laba BUT LN",
                "Bukan objek bila diinvestasikan di Indonesia sesuai syarat; pajak LN tidak dikreditkan",
                "UU PPh Pasal 4 ayat (3) huruf f; PMK 18/PMK.03/2021"
              ],
              [
                "Sumber: dividen dan jual saham",
                "Negara tempat badan penerbit saham didirikan atau berkedudukan",
                "UU PPh Pasal 24 ayat (3) huruf a"
              ],
              [
                "Sumber: bunga, royalti, sewa harta gerak, imbalan jasa",
                "Negara tempat pihak yang membayar atau dibebani berkedudukan",
                "UU PPh Pasal 24 ayat (3) huruf b dan d"
              ],
              [
                "Sumber: sewa harta tak gerak, jual harta tetap",
                "Negara tempat harta terletak",
                "UU PPh Pasal 24 ayat (3) huruf c dan g"
              ],
              [
                "Sumber: penghasilan BUT",
                "Negara tempat BUT menjalankan usaha",
                "UU PPh Pasal 24 ayat (3) huruf e"
              ]
            ]
          },
          {
            "id": "der",
            "judul": "DER 4:1 dan biaya pinjaman yang dikoreksi",
            "jenis": "rumus",
            "dasar": "UU PPh Pasal 18 ayat (1); PMK 169/PMK.010/2015",
            "rumus": [
              {
                "nama": "DER",
                "isi": "Rata-rata saldo utang akhir bulan ÷ rata-rata saldo modal akhir bulan; paling tinggi 4:1",
                "contoh": "Utang Rp60.000.000.000, modal Rp10.000.000.000: DER 6:1.",
                "dasar": "Pasal 1 dan Pasal 2 ayat (1)"
              },
              {
                "nama": "Isi utang dan modal",
                "isi": "Utang = jangka panjang + jangka pendek + utang dagang berbunga. Modal = ekuitas + pinjaman tanpa bunga dari pihak berelasi",
                "contoh": "Utang dagang tanpa bunga tidak dihitung.",
                "dasar": "Pasal 1 ayat (3) dan (5)"
              },
              {
                "nama": "Biaya pinjaman yang boleh",
                "isi": "Boleh = (4 ÷ DER) × biaya pinjaman; koreksi positif = biaya pinjaman − yang boleh",
                "contoh": "Biaya pinjaman Rp6.000.000.000: boleh 4/6 = Rp4.000.000.000; koreksi Rp2.000.000.000.",
                "dasar": "Pasal 3 ayat (1) dan Lampiran"
              },
              {
                "nama": "Cakupan biaya pinjaman",
                "isi": "Bunga, diskonto dan premium, biaya perolehan pinjaman, beban sewa pembiayaan, imbalan jaminan, selisih kurs atas unsur itu",
                "contoh": "Imbalan jaminan kepada induk ikut dihitung.",
                "dasar": "Pasal 3 ayat (2)"
              },
              {
                "nama": "Ada penghasilan final, biaya tidak terpisah",
                "isi": "Yang boleh × (penghasilan tidak final ÷ seluruh penghasilan)",
                "contoh": "Tidak final 15 dari 20: Rp4.000.000.000 × 15/20 = Rp3.000.000.000.",
                "dasar": "Lampiran contoh 2"
              },
              {
                "nama": "Dikoreksi seluruhnya",
                "isi": "Modal nol atau negatif; atau biaya atas utang swasta luar negeri yang tidak dilaporkan ke DJP",
                "contoh": "Modal rata-rata minus: Rp6.000.000.000 tidak boleh dibebankan.",
                "dasar": "Pasal 3 ayat (5) dan Pasal 5"
              },
              {
                "nama": "Tidak kena batas DER",
                "isi": "Bank; lembaga pembiayaan; asuransi dan reasuransi; migas dan tambang yang kontraknya mengatur DER; WP berpenghasilan final seluruhnya; infrastruktur",
                "contoh": "Bank ber-DER 9:1: tanpa koreksi DER.",
                "dasar": "Pasal 2 ayat (2)"
              }
            ]
          },
          {
            "id": "cfc",
            "judul": "CFC (deemed dividend)",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 18 ayat (2); PMK 107/PMK.03/2017 jo. PMK 93/PMK.03/2019",
            "butir": [
              {
                "teks": "Syarat: WPDN memiliki langsung paling rendah 50% modal disetor badan luar negeri nonbursa, sendiri atau bersama WPDN lain; diukur akhir tahun pajak WPDN.",
                "dasar": "PMK 107 Pasal 2 ayat (1) dan (4)"
              },
              {
                "teks": "Hanya penghasilan pasif: dividen (kecuali dari CFC lain), bunga, sewa tanah atau bangunan, sewa lain dari pihak berelasi, royalti, keuntungan penjualan harta.",
                "dasar": "PMK 93 Pasal 2 ayat (3a)"
              },
              {
                "teks": "Bunga dikecualikan bila pemilik CFC adalah WPDN bank, kecuali bunga dari WPDN yang berelasi dengan CFC.",
                "dasar": "PMK 93 Pasal 2 ayat (3a) dan (3b)"
              },
              {
                "teks": "Deemed dividend = persentase penyertaan × (bruto penghasilan pasif − biaya − pajaknya). Contoh: PT Mahardika Tirta memiliki 60% Velmora Ltd; pasif Rp8.000.000.000, biaya Rp1.000.000.000, pajak Rp1.000.000.000: 60% × Rp6.000.000.000 = Rp3.600.000.000.",
                "dasar": "PMK 93 Pasal 4 ayat (1), (2), (9)"
              },
              {
                "teks": "CFC tidak langsung (50% atau lebih di tiap lapis): tambahkan netonya × persentase penyertaan CFC langsung di dalamnya.",
                "dasar": "PMK 93 Pasal 4 ayat (3) dan (4)"
              },
              {
                "teks": "Saat diperoleh: akhir bulan keempat setelah batas waktu SPT tahunan CFC; tanpa kewajiban SPT: akhir bulan ketujuh setelah tahun pajak CFC berakhir. Contoh tahun pajak CFC berakhir 31 Desember 2025, batas SPT 30 April 2026: 31 Agustus 2026; tanpa SPT: 31 Juli 2026.",
                "dasar": "PMK 107 Pasal 3"
              },
              {
                "teks": "Dividen nyata diperhitungkan dengan deemed dividend 5 tahun terakhir; hanya selisih lebihnya yang dikenai pajak (deemed Rp3.600.000.000, dividen Rp5.000.000.000: kena Rp1.400.000.000). Pajak luar negeri atas dividen nyata dikreditkan per negara.",
                "dasar": "PMK 107 Pasal 6 dan 7"
              }
            ]
          },
          {
            "id": "spv-gaar",
            "judul": "SPV, conduit, dan GAAR",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 18 ayat (3b) dan (3c); PP 55/2022 Pasal 32",
            "butir": [
              {
                "teks": "SPV: pembelian saham atau aktiva lewat badan bentukan dapat ditetapkan sebagai pembelian oleh WP sebenarnya, bila berelasi dan harga tidak wajar.",
                "dasar": "UU PPh Pasal 18 ayat (3b)"
              },
              {
                "teks": "Conduit: penjualan saham perusahaan antara di negara suaka pajak yang berelasi dengan badan Indonesia dapat ditetapkan sebagai penjualan saham badan Indonesia.",
                "dasar": "UU PPh Pasal 18 ayat (3c)"
              },
              {
                "teks": "GAAR: penghindaran pajak yang tidak tercegah instrumen khusus dapat dikoreksi DJP berdasarkan substansi ekonomi di atas bentuk formal.",
                "dasar": "PP 55/2022 Pasal 32 ayat (4)"
              }
            ]
          },
          {
            "id": "ht-pkku",
            "judul": "Harga transfer: hubungan istimewa, tahapan, metode, rentang",
            "jenis": "tabel",
            "dasar": "UU PPh Pasal 18 ayat (3) dan (4); PMK 172/2023 Pasal 2 sampai 13",
            "kolom": [
              "Hal",
              "Ketentuan",
              "Dasar"
            ],
            "baris": [
              [
                "Hubungan istimewa: kepemilikan",
                "Penyertaan langsung atau tidak langsung paling rendah 25%; termasuk sesama anak",
                "Pasal 2 ayat (4)"
              ],
              [
                "Hubungan istimewa: penguasaan",
                "Lewat manajemen atau teknologi, pengambil keputusan yang sama, satu grup usaha",
                "Pasal 2 ayat (5)"
              ],
              [
                "Hubungan istimewa: keluarga",
                "Sedarah atau semenda, garis lurus dan atau ke samping satu derajat",
                "Pasal 2 ayat (6)"
              ],
              [
                "Tahapan 1 sampai 3",
                "Identifikasi transaksi dan pihak afiliasi; analisis industri; analisis kondisi transaksi",
                "Pasal 4 ayat (4)"
              ],
              [
                "Tahapan 4 sampai 6",
                "Analisis kesebandingan; pilih metode; terapkan metode dan tentukan harga wajar",
                "Pasal 4 ayat (4)"
              ],
              [
                "Perlu tahap pendahuluan",
                "Jasa, harta tak berwujud, pinjaman, pengalihan harta, restrukturisasi, kontribusi biaya",
                "Pasal 4 ayat (6)"
              ],
              [
                "Bukti jasa intra-grup",
                "Nyata diberikan, dibutuhkan, bermanfaat; bukan aktivitas pemegang saham atau duplikasi",
                "Pasal 13 ayat (1)"
              ],
              [
                "Metode CUP",
                "Komoditas dan barang atau jasa yang sama atau serupa",
                "Pasal 9 ayat (3)"
              ],
              [
                "Metode harga penjualan kembali; biaya-plus",
                "Distributor; pabrikan atau penyedia jasa. Keduanya tanpa risiko signifikan",
                "Pasal 9 ayat (4) dan (5)"
              ],
              [
                "Metode lain",
                "Pembagian laba, TNMM, CUT, penilaian harta, penilaian bisnis",
                "Pasal 9 ayat (1)"
              ],
              [
                "Cara memilih",
                "Paling tepat dan andal: sesuai karakter transaksi dan ketersediaan pembanding",
                "Pasal 9 ayat (2)"
              ],
              [
                "Rentang kewajaran",
                "Dua pembanding: minimum sampai maksimum. Tiga atau lebih: kuartil 1 sampai kuartil 3",
                "Pasal 12 ayat (6)"
              ],
              [
                "Harga di luar rentang",
                "Ke titik paling tepat sesuai kesebandingan; bila tidak dapat ditentukan, ke median",
                "Pasal 12 ayat (7)"
              ]
            ]
          },
          {
            "id": "ht-dokumen",
            "judul": "Harga transfer: ambang dan tenggat dokumen",
            "jenis": "tabel",
            "dasar": "PMK 172/2023 Pasal 16 sampai 23",
            "kolom": [
              "Hal",
              "Ketentuan",
              "Dasar"
            ],
            "baris": [
              [
                "Wajib dokumen induk dan lokal (1)",
                "Ada transaksi afiliasi dan peredaran bruto tahun sebelumnya lebih dari Rp50 miliar",
                "Pasal 16 ayat (3) huruf a"
              ],
              [
                "Wajib dokumen induk dan lokal (2)",
                "Transaksi afiliasi barang berwujud tahun sebelumnya lebih dari Rp20 miliar",
                "Pasal 16 ayat (3) huruf b"
              ],
              [
                "Wajib dokumen induk dan lokal (3)",
                "Jasa, bunga, barang tak berwujud, atau lainnya: masing-masing lebih dari Rp5 miliar",
                "Pasal 16 ayat (3) huruf b"
              ],
              [
                "Wajib dokumen induk dan lokal (4)",
                "Afiliasi di negara bertarif PPh lebih rendah daripada tarif UU PPh (badan kini 22%)",
                "Pasal 16 ayat (3) huruf c; UU PPh Pasal 17"
              ],
              [
                "Sifat ambang",
                "Alternatif (cukup satu); tahun kurang dari 12 bulan disetahunkan",
                "Pasal 16 ayat (3) dan (6)"
              ],
              [
                "Di bawah ambang",
                "Tidak wajib dokumen, tetapi tetap wajib menerapkan PKKU",
                "Pasal 16 ayat (7)"
              ],
              [
                "Tenggat dokumen induk dan lokal",
                "Tersedia paling lama 4 bulan setelah akhir tahun pajak, dengan surat pernyataan",
                "Pasal 18 ayat (1) dan (3)"
              ],
              [
                "Ikhtisar",
                "Dilampirkan pada SPT Tahunan PPh Badan tahun pajak yang sama",
                "Pasal 19 ayat (2)"
              ],
              [
                "CbCR: induk dalam negeri",
                "Peredaran bruto konsolidasi tahun sebelumnya paling sedikit Rp11 triliun",
                "Pasal 16 ayat (4)"
              ],
              [
                "CbCR: anak dari induk asing",
                "Wajib bila negara induk tidak mewajibkan CbCR atau CbCR tidak dapat diperoleh Indonesia",
                "Pasal 16 ayat (5)"
              ],
              [
                "CbCR dan notifikasi",
                "Paling lama 12 bulan setelah akhir tahun pajak, lewat portal wajib pajak",
                "Pasal 18 ayat (2), Pasal 23 ayat (4)"
              ],
              [
                "CbCR: lampiran SPT",
                "CbCR atau tanda terimanya dilampirkan pada SPT Tahunan tahun pajak berikutnya",
                "Pasal 19 ayat (3), Pasal 23 ayat (6)"
              ]
            ]
          },
          {
            "id": "ht-penyesuaian",
            "judul": "Harga transfer: penyesuaian sekunder dan keterkaitan",
            "jenis": "tabel",
            "dasar": "PMK 172/2023 Pasal 37 sampai 41",
            "kolom": [
              "Hal",
              "Ketentuan",
              "Dasar"
            ],
            "baris": [
              [
                "Penyesuaian sekunder",
                "Selisih harga dianggap dividen kepada afiliasi dan dikenai PPh; P3B dapat dipakai",
                "Pasal 37 ayat (1), Pasal 38 ayat (2)"
              ],
              [
                "Lolos dari penyesuaian sekunder",
                "Kas ditambah atau dikembalikan sebelum SKP terbit, dan atau WP setuju koreksi DJP",
                "Pasal 37 ayat (4) dan (5)"
              ],
              [
                "Penyesuaian keterkaitan dalam negeri",
                "Lawan transaksi boleh menyesuaikan bila pihak terkoreksi setuju dan tanpa upaya hukum",
                "Pasal 40 ayat (1) dan (3)"
              ],
              [
                "Caranya",
                "Pembetulan SPT, penerbitan SKP, atau pembetulan SKP",
                "Pasal 40 ayat (4)"
              ],
              [
                "Koreksi oleh otoritas pajak mitra",
                "Penyesuaian keterkaitan dilakukan lewat MAP",
                "Pasal 40 ayat (13), Pasal 41 ayat (4)"
              ],
              [
                "PPN",
                "DJP dapat menyesuaikan harga jual afiliasi ke harga pasar wajar sebagai dasar PPN",
                "Pasal 39"
              ]
            ]
          },
          {
            "id": "map",
            "judul": "Prosedur Persetujuan Bersama (MAP)",
            "jenis": "butir",
            "dasar": "P3B (Model) Pasal 25; PMK 172/2023 Pasal 41 sampai 48",
            "butir": [
              {
                "teks": "Pemohon: WPDN, WNI (atas diskriminasi di negara mitra), DJP, atau otoritas pajak negara mitra.",
                "dasar": "Pasal 41 ayat (3)"
              },
              {
                "teks": "Alasan WPDN: koreksi harga transfer atau laba BUT, pemotongan tidak sesuai P3B, penetapan residen, diskriminasi, atau penafsiran P3B oleh negara mitra.",
                "dasar": "Pasal 41 ayat (6)"
              },
              {
                "teks": "Atas koreksi DJP sendiri, WPDN mengajukan usulan agar DJP meminta MAP.",
                "dasar": "Pasal 41 ayat (8) sampai (10)"
              },
              {
                "teks": "Tenggat: sesuai P3B; bila P3B tidak mengatur, paling lambat 3 tahun sejak tanggal SKP, tanggal bukti bayar atau potong, atau saat perlakuan yang tidak sesuai P3B.",
                "dasar": "Pasal 42 ayat (1)"
              },
              {
                "teks": "Boleh bersamaan dengan keberatan, banding, gugatan, pengurangan atau pembatalan SKP, dan peninjauan kembali.",
                "dasar": "Pasal 41 ayat (11)"
              },
              {
                "teks": "Tidak menunda kewajiban membayar pajak, penagihan, maupun pengembalian kelebihan.",
                "dasar": "Pasal 41 ayat (12)"
              },
              {
                "teks": "Perundingan paling lama 24 bulan; dapat diperpanjang sekali paling lama 24 bulan bila sudah ada kesepakatan awal.",
                "dasar": "Pasal 45 ayat (3) sampai (5)"
              },
              {
                "teks": "Putusan banding atau peninjauan kembali atas materi yang sama terbit dulu: DJP memakainya sebagai posisi runding atau menghentikan perundingan.",
                "dasar": "Pasal 48 ayat (3)"
              }
            ]
          },
          {
            "id": "apa",
            "judul": "Kesepakatan Harga Transfer (APA)",
            "jenis": "butir",
            "dasar": "UU PPh Pasal 18 ayat (3a); PMK 172/2023 Pasal 1 dan Pasal 55 sampai 71",
            "butir": [
              {
                "teks": "Jenis: unilateral (DJP dengan WP) dan bilateral atau multilateral (DJP dengan pejabat berwenang negara mitra).",
                "dasar": "Pasal 1 angka 26 dan 27"
              },
              {
                "teks": "Periode paling lama 5 tahun pajak setelah tahun pajak diajukannya permohonan.",
                "dasar": "Pasal 1 angka 28"
              },
              {
                "teks": "Roll-back diminta dalam permohonan; berlaku bila fakta tidak berbeda material, belum daluwarsa penetapan, belum terbit SKP PPh badan, tidak dalam proses pidana pajak.",
                "dasar": "Pasal 55 ayat (4) dan (6)"
              },
              {
                "teks": "Syarat: SPT Tahunan badan dan dokumen induk serta lokal 3 tahun berturut-turut; tidak dalam proses pidana pajak; tingkat laba terendah proyeksi tidak di bawah yang terendah di SPT 3 tahun sebelumnya.",
                "dasar": "Pasal 56 ayat (1) dan (4)"
              },
              {
                "teks": "Tenggat permohonan dan pembaruan: 12 sampai 6 bulan sebelum periode APA dimulai, lewat KPP. Menanggapi pemberitahuan DJP: sebelum periode dimulai.",
                "dasar": "Pasal 56 ayat (3), Pasal 71 ayat (2)"
              },
              {
                "teks": "DJP memberi tahu dapat atau tidak ditindaklanjuti paling lama 1 bulan; lewat waktu dianggap dapat. WP melengkapi paling lama 2 bulan.",
                "dasar": "Pasal 57 dan Pasal 58 ayat (2)"
              },
              {
                "teks": "Perundingan unilateral dimulai paling lambat 6 bulan sejak kelengkapan dan selesai dalam 12 bulan. Bilateral mengikuti MAP: 24 bulan, dapat diperpanjang 24 bulan.",
                "dasar": "Pasal 60 ayat (2) dan (3)"
              },
              {
                "teks": "Negara mitra tidak menjawab dalam 8 bulan atau tidak sepakat: WP dapat mengajukan unilateral paling lama 14 hari kalender setelah pemberitahuan.",
                "dasar": "Pasal 57 ayat (4), Pasal 62 ayat (1)"
              },
              {
                "teks": "Pelaksanaan dituangkan dalam dokumen harga transfer (tidak diatur laporan tahunan tersendiri); SPT dibetulkan paling lambat 1 bulan setelah keputusan pemberlakuan.",
                "dasar": "Pasal 66"
              },
              {
                "teks": "DJP mengawasi lewat evaluasi. Fakta berubah material: peninjauan kembali. Informasi tidak benar: pembatalan; klarifikasi dijawab dalam 21 hari kalender.",
                "dasar": "Pasal 68 sampai 70"
              }
            ]
          },
          {
            "id": "tukar-info",
            "judul": "Pertukaran informasi dan bantuan penagihan",
            "jenis": "tabel",
            "dasar": "UU 9/2017; PMK 108/2025; PMK 39/PMK.03/2017; UU KUP Pasal 20A",
            "kolom": [
              "Hal",
              "Ketentuan",
              "Dasar"
            ],
            "baris": [
              [
                "Jenis pertukaran informasi",
                "Atas permintaan, spontan, dan otomatis; resiprokal",
                "PMK 39/PMK.03/2017 Pasal 2"
              ],
              [
                "Aturan teknis",
                "PMK 108/2025, berlaku 1 Januari 2026; mencabut PMK 70/PMK.03/2017 dan perubahannya",
                "PMK 108 Pasal 60 dan 61"
              ],
              [
                "Laporan CRS: lembaga jasa keuangan di bawah OJK",
                "Ke OJK paling lambat 1 Agustus; OJK ke DJP paling lambat 31 Agustus",
                "PMK 108 Pasal 11 ayat (5)"
              ],
              [
                "Laporan CRS lembaga lainnya; aset kripto (CARF)",
                "Langsung ke DJP lewat portal wajib pajak paling lambat 30 April",
                "PMK 108 Pasal 11 ayat (6), Pasal 43 ayat (4)"
              ],
              [
                "Laporan domestik: semua pelapor, termasuk bank",
                "Langsung ke DJP paling lambat 30 April; data 1 Januari sampai 31 Desember tahun lalu",
                "PMK 108 Pasal 36 dan 37"
              ],
              [
                "Ambang domestik: orang pribadi di Lembaga Simpanan",
                "Agregat per lembaga per 31 Desember paling sedikit Rp1 miliar atau setara valas",
                "PMK 108 Pasal 35 ayat (7) dan (8)"
              ],
              [
                "Ambang domestik: entitas, kustodian, entitas investasi",
                "Tanpa batas saldo",
                "PMK 108 Pasal 35 ayat (8)"
              ],
              [
                "Ambang domestik: asuransi",
                "Hanya polis berpertanggungan paling sedikit Rp1 miliar",
                "PMK 108 Pasal 35 ayat (8)"
              ],
              [
                "Tidak ada rekening yang wajib dilaporkan",
                "Tetap wajib laporan nihil",
                "PMK 108 Pasal 35 ayat (9)"
              ],
              [
                "Peralihan",
                "Laporan sampai 30 September 2026: aturan lama. Sejak 1 Oktober 2026: PMK 108/2025",
                "PMK 108 Pasal 59"
              ],
              [
                "Sanksi pimpinan atau pegawai (bunyi UU 9/2017)",
                "Kurungan paling lama 1 tahun atau denda paling banyak Rp1 miliar; lembaga: denda saja",
                "UU 9/2017 Lampiran Pasal 7"
              ],
              [
                "Catatan sanksi",
                "Sejak 2 Januari 2026 ada penyesuaian pidana UU 1/2026; bunyi baru belum dipastikan",
                "UU 1/2026"
              ],
              [
                "Bantuan penagihan",
                "Resiprokal, dilaksanakan DJP; setelah klaim pajak diterima, ditagih dengan Surat Paksa",
                "UU KUP Pasal 20A"
              ]
            ]
          },
          {
            "id": "pajak-minimum-global",
            "judul": "Pajak minimum global (GloBE)",
            "jenis": "tabel",
            "dasar": "PMK 136/2024",
            "kolom": [
              "Hal",
              "Ketentuan",
              "Dasar"
            ],
            "baris": [
              [
                "Siapa yang kena",
                "Grup beromzet konsolidasi paling sedikit EUR750 juta pada 2 dari 4 tahun sebelumnya",
                "Pasal 2 ayat (1)"
              ],
              [
                "Dikecualikan",
                "Badan pemerintah, organisasi internasional, nirlaba, dana pensiun, dana investasi induk",
                "Pasal 3 ayat (1)"
              ],
              [
                "Tarif minimum",
                "15%; tarif pajak efektif dihitung per negara, bukan per entitas",
                "Pasal 1 angka 33, Pasal 5 ayat (1)"
              ],
              [
                "Rumus pajak tambahan",
                "(15% − tarif efektif) × (laba GloBE − SBIE) + pajak tambahan adisional kini − QDMTT",
                "Pasal 6 ayat (1), (3), (4)"
              ],
              [
                "Contoh (EUR juta)",
                "Laba 100, pajak tercakup 9 (tarif efektif 9%), SBIE 20: 6% × 80 = 4,8",
                "Pasal 6"
              ],
              [
                "SBIE = persentase × gaji + persentase × harta berwujud",
                "2025: gaji 9,6%, harta 7,6%. 2026: 9,4% dan 7,4%. Mulai 2033: 5% dan 5%",
                "Pasal 7 dan 8"
              ],
              [
                "DMTT",
                "Pajak tambahan domestik atas entitas di Indonesia bertarif efektif di bawah 15%",
                "Pasal 6 ayat (6), Pasal 52"
              ],
              [
                "IIR",
                "Dikenakan pada entitas induk di Indonesia atas entitas grup yang dikenai pajak rendah",
                "Pasal 14"
              ],
              [
                "UTPR",
                "Dikenakan pada entitas di Indonesia; nol bila seluruhnya sudah tercakup Qualified IIR",
                "Pasal 17"
              ],
              [
                "Mulai berlaku",
                "IIR dan DMTT 1 Januari 2025; UTPR 1 Januari 2026",
                "Pasal 73 dan 74"
              ],
              [
                "De minimis",
                "Rata-rata penghasilan di bawah EUR10 juta dan laba di bawah EUR1 juta: pajak tambahan nol",
                "Pasal 11 ayat (5)"
              ],
              [
                "Safe harbour permanen",
                "Lolos salah satu: de minimis, laba rutin (laba tidak melebihi SBIE), tarif efektif 15%",
                "Pasal 55"
              ],
              [
                "Safe harbour CbCR: tarif sederhana",
                "15% (tahun mulai 2024), 16% (2025), 17% (2026 sampai tahun berakhir 30 Juni 2028)",
                "Pasal 56 ayat (11)"
              ],
              [
                "GIR dan Notifikasi",
                "Paling lama 15 bulan setelah akhir tahun pajak; GIR tahun pertama 18 bulan",
                "Pasal 65 ayat (3) dan (5), Pasal 69"
              ],
              [
                "SPT Tahunan GloBE, DMTT, UTPR",
                "SPT tahun berikutnya, paling lama 4 bulan setelah akhir tahun itu",
                "Pasal 65 ayat (13) dan (14)"
              ]
            ]
          },
          {
            "id": "pma",
            "judul": "PMA: pembukuan USD dan dividen ke luar negeri",
            "jenis": "butir",
            "dasar": "UU KUP Pasal 28; PMK 196/PMK.03/2007 s.t.d.d. PMK 123/PMK.03/2019; UU PPh Pasal 26; PP 78/2019",
            "butir": [
              {
                "teks": "Pembukuan: di Indonesia, huruf Latin, angka Arab, Rupiah, bahasa Indonesia. Bahasa asing dan mata uang lain hanya setelah izin Menteri Keuangan.",
                "dasar": "UU KUP Pasal 28 ayat (4) dan (8)"
              },
              {
                "teks": "Yang boleh bahasa Inggris dan USD antara lain PMA, BUT, kontrak karya, kontraktor kerja sama migas, emiten di bursa luar negeri.",
                "dasar": "PMK 196 Pasal 3"
              },
              {
                "teks": "Izin dimohon ke Kepala Kanwil DJP paling lambat 3 bulan sebelum tahun buku dimulai, atau 3 bulan sejak pendirian. Keputusan paling lama 1 bulan; lewat waktu dianggap diterima.",
                "dasar": "PMK 196 Pasal 4"
              },
              {
                "teks": "Kontrak karya dan kontraktor kerja sama cukup pemberitahuan tertulis ke KPP dengan tenggat yang sama.",
                "dasar": "PMK 196 Pasal 5"
              },
              {
                "teks": "Dividen ke pemegang saham luar negeri: PPh 26 sebesar 20% bruto, final, atau tarif P3B bila Form DGT sah dan penerima beneficial owner.",
                "dasar": "UU PPh Pasal 26; PMK 112/2025 Pasal 10 dan 19"
              },
              {
                "teks": "Tax allowance: pengurangan neto 30% nilai aktiva tetap berwujud (5% per tahun selama 6 tahun); dividen kepada WPLN 10% atau tarif P3B yang lebih rendah.",
                "dasar": "PP 78/2019 Pasal 3 ayat (1)"
              },
              {
                "teks": "Fasilitas yang menurunkan tarif efektif di bawah 15% dapat memicu DMTT bagi grup dalam cakupan pajak minimum global.",
                "dasar": "PMK 136/2024 Pasal 6 ayat (6)"
              }
            ]
          },
          {
            "id": "jebakan",
            "judul": "Jebakan ujian yang paling sering",
            "jenis": "jebakan",
            "dasar": "Rangkuman bagian di atas",
            "butir": [
              {
                "teks": "Memakai tata cara lama PER-25/PJ/2018, atau tarif P3B padahal Form DGT baru diterima setelah pemotongan; yang benar potong 20%, kelebihannya diminta kembali pemotong."
              },
              {
                "teks": "Mengira semua penghasilan residen negara mitra bertarif P3B (fee direksi dan honor artis tetap 20%), atau langsung memakai kewarganegaraan pada tie-breaker (itu uji keempat)."
              },
              {
                "teks": "Memotong PPh 26 atas imbalan jasa yang menurut P3B laba usaha tanpa BUT; yang benar tidak dipotong tetapi tetap dilaporkan. P3B tidak membebaskan PPN jasa luar negeri."
              },
              {
                "teks": "Gross-up dengan mengalikan tarif ke jumlah neto; yang benar bruto = neto ÷ (1 − tarif yang berlaku)."
              },
              {
                "teks": "Memotong 20% × harga jual atas penjualan saham oleh WPLN; yang benar 5%, dan hanya bila P3B memberi hak ke Indonesia."
              },
              {
                "teks": "Memakai satu batas kredit gabungan atau mengurangkan rugi cabang luar negeri; yang benar per jenis penghasilan per negara, rugi diabaikan."
              },
              {
                "teks": "Memasukkan utang dagang tanpa bunga ke utang DER, atau mengoreksi seluruh biaya pinjaman; yang dikoreksi hanya bagian di atas 4:1."
              },
              {
                "teks": "Menghitung deemed dividend dari seluruh laba CFC, atau tertukar bulan keempat (dari batas SPT) dan ketujuh (dari akhir tahun pajak)."
              },
              {
                "teks": "Menganggap ambang dokumen harga transfer kumulatif atau memakai data tahun berjalan; yang benar cukup satu ambang, data tahun sebelumnya. Harga di luar rentang ke median, bukan kuartil terdekat."
              },
              {
                "teks": "Tertukar tenggat: dokumen induk dan lokal 4 bulan, CbCR 12 bulan, GIR 15 bulan (tahun pertama 18 bulan)."
              },
              {
                "teks": "Mengira MAP harus menunggu keberatan atau banding; MAP boleh bersamaan, tenggatnya ikut P3B atau 3 tahun."
              },
              {
                "teks": "Menganggap roll-back APA mencakup tahun yang sudah terbit SKP, atau APA unilateral mencegah koreksi di negara mitra."
              },
              {
                "teks": "Tertukar saluran laporan rekening: 1 Agustus ke OJK hanya untuk CRS lembaga di bawah OJK; ambang Rp1 miliar hanya untuk orang pribadi di Lembaga Simpanan pada laporan domestik."
              },
              {
                "teks": "Menghitung tarif efektif GloBE per entitas, mengalikan 15% penuh, lupa SBIE, atau menganggap UTPR sudah berlaku 2025."
              },
              {
                "teks": "Menganggap PMA otomatis boleh pembukuan USD; tetap perlu izin, dimohon paling lambat 3 bulan sebelum tahun buku."
              }
            ]
          }
        ]
      }
    ]
  };
  if (typeof UKP !== 'undefined') UKP.fokusC = F;
  if (typeof module !== 'undefined' && module.exports) module.exports = F;
})();
