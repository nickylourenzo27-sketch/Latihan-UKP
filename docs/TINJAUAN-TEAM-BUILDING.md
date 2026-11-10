# Tinjauan Team Building: Room dan Latihan Bersama

Tanggal: 10 November 2026 · Untuk: Nicky (pemilik produk) · Dasar: tiga tinjauan independen (team building, kesederhanaan, kelayakan protokol `js/ruang.js`)

## Tujuan

Latihan UKP B menjadi kegiatan yang mempererat enam rekan kerja (Nicky, Mia, Novia, Jessie, Melva, Alfi), bukan sekadar alat ukur perorangan. Patokannya empat hal: **tim melawan soal** (bukan orang melawan orang), **saling mengajar**, **rasa aman saat salah**, dan **kesederhanaan** setara aplikasi referensi (satu layar, daftar nama, A B C D + Y R N).

## Putusan

Alur room sudah benar untuk kebersamaan: soal yang sama di semua HP, "menunggu kunci", kunci dibuka bersama, lalu penjelas bergilir. Namun kerangka penilaiannya masih perorangan. Evaluasi tim masih menampilkan **Peringkat 1–6** tanpa sakelar (`bagianPeringkat` selalu dipanggil). Rancangan room juga akan menyebarkan evaluasi lengkap dan riwayat 30 sesi ke enam HP. Kalau dibiarkan, room terasa seperti ujian yang diawasi atasan. Perbaikannya sebagian besar berupa **pengurangan**, jadi murah dan justru membuat layar lebih sederhana.

Catatan jujur: privasi di room hanya berlaku di tingkat **tampilan**. Semua anggota memegang kunci room yang sama, sehingga perangkat mana pun secara teknis menerima jawaban semua orang. Untuk rekan kerja yang saling percaya, ini cukup, tetapi jangan dijanjikan sebagai rahasia.

## Lima perubahan terpenting

1. **Peringkat mati, skor tim menjadi angka utama.** Semua layar room dibuka dengan "Tim 41/60 benar · 68% · garis lulus 60". Hasil sendiri hanya tampil di HP pemiliknya. Peringkat hanya ada di laptop pemimpin sebagai sakelar yang mati secara bawaan, dan tidak pernah dikirim ke room.
2. **Tidak menyebut siapa yang salah.** Kalimat "Mia jelaskan ke Novia dan Alfi" diganti menjadi "Mia jelaskan kenapa B · C menggoda 2 orang". Nama hanya muncul dalam peran positif, yaitu penjelas.
3. **Satu konsep, satu tombol.** Di beranda hanya ada satu kartu "Tim UKP Tingkat B" dengan satu tombol utama, "Mulai latihan bersama". Room adalah wadahnya, bukan fitur keempat. Layar pemimpin meniru foto referensi: daftar nama dengan status, dan baris anggota yang offline bisa diisi dari laptop. Dengan begitu, latihan satu laptop dan latihan room menjadi satu layar.
4. **Ritual pembuka dan penutup yang pendek.** Pembukanya lobi dengan tombol "Siap" dan satu kartu ("Sesi ke-7 · Hadir 5 dari 6 · Minggu lalu tim 58%"). Penutupnya rekap tim dengan ucapan terima kasih kepada penjelas, lalu disalin ke grup WhatsApp.
5. **Apresiasi yang terkait dengan bantuan nyata.** Setelah penjelasan, HP orang yang tadinya keliru menampilkan tombol "Paham, makasih Mia". Rekap mencatat "Terima kasih untuk Mia (3), Jessie (2)", tanpa papan kumulatif.

## Masuk v8.2

Ada tujuh tambahan, semuanya berupa field baru pada dokumen hadir, jawaban, state, atau rekaman, tanpa topik baru:

1. Skor tim sebagai kop, dengan garis 60.
2. Lobi "Siap" dan kartu pembuka.
3. Kehadiran berupa deretan inisial, plus toast "Jessie bergabung" dan "Tim lengkap".
4. Tombol "Paham, makasih" untuk penjelas.
5. Cadangan: pemimpin mengisi untuk anggota yang offline, ditambah tombol "Pindah ke satu layar".
6. Rekap penutup tim.
7. Layar persetujuan sekali saat bergabung, dan ambil alih dengan konfirmasi.

Perubahan pada yang sudah ada: peringkat dimatikan, teks penjelas dibuat aman, beranda menjadi satu kartu Tim, layar pemimpin dan room disatukan, HP anggota dibatasi pada lima keadaan, status sambungan cukup satu titik, dan dua perbaikan fondasi di `ruang.js`: state basi saat pemulihan dan peringatan versi aplikasi.

## Ditunda (v8.3 dan sesudahnya)

- Pembuka kunci bergilir dan pemandu bergilir per sesi. Keduanya butuh pesan baru dari anggota ke pemimpin dan perbaikan state basi lebih dulu.
- Pilihan "Bagikan skorku ke tim".
- Tujuan "6 dari 6 lulus".
- Jejak tim mingguan dan "soal musuh bersama" (antrian ulang).
- Jadwal latihan.
- Ajakan pribadi "ceritakan alasan pilihanmu".
- Menu "Buat kode baru" dan "Hapus riwayat room".

## Dihindari

- Peringkat, poin, lencana, MVP, rantai kehadiran, dan papan apresiasi kumulatif.
- Nama orang yang salah di layar bersama.
- Obrolan, reaksi emoji, konfeti, dan papan catatan bersama. Grup WhatsApp sudah ada.
- Istilah relai, MQTT, kode room, atau enkripsi di layar.
- Kisi kehadiran mingguan atau persentase kehadiran per orang.
- Menunggu 6/6 tanpa jalan keluar.
- Room sebagai satu-satunya jalur. Satu layar dan kode jawaban harus selalu bisa dipakai.
- Menjanjikan anonimitas.

## Perbedaan pendapat yang diputuskan

- **Pembuka kunci bergilir: ditunda.** Fitur ini butuh jenis pesan baru dari anggota ke pemimpin di protokol yang hanya punya satu penulis state. Agensi anggota di v8.2 cukup lewat "Siap" dan "Paham, makasih".
- **Apresiasi: "Paham, makasih" dipilih, bukan voting "paling membantu".** Ucapan terima kasih yang terkait penjelasan nyata tidak bisa menjadi kontes popularitas.
- **Nama per opsi jawaban: tidak ditampilkan sama sekali di room, bukan "ketuk untuk melihat".** Cara ini lebih sederhana dan lebih aman.
- **Isi untuk anggota offline: masuk v8.2.** Relai publik tanpa jaminan, dan satu orang yang tertinggal merusak suasana lebih cepat daripada fitur apa pun membangunnya.
