/* MABAR UKP — Room tim (v8.2): layar room untuk pemimpin dan anggota di atas UKP.ruang (js/ruang.js).
   Rute #room dan #room/<kode> (js/core.js TOKEN, PARAM_HASH 'kode', VIEW_TAMU); UKP.ruangUI.boot() dipanggil js/app.js setelah rute pertama.
   Antarmuka:
   - UKP.views.room(params)            keadaan a–g (rencana-integrasi §3): gabung · ajakan buat · lobi · latihan anggota (lima keadaan HP:
                                       pilih nama, lobi, menjawab, terkirim, hasil) · latihan berjalan (pemimpin) · ujian (anggota/pemimpin)
   - UKP.ruangUI.boot()                pulihkan room (kecuali #room/<kode lain> atau room sudah dipakai tab lain), pengamat toast global,
                                       spanduk versi berbeda, pencatatan jawaban anggota ke Kemajuan pribadi (sekali per soal)
   - UKP.ruangUI.dialogBuat() · dialogBagikan() · dialogMulaiLatihan() · menu() · itemMenu()
   - UKP.c.kartuRoom() (blok Tim Beranda) · UKP.c.statusRoom({ ringkas }) · UKP.c.skorTim(tim, opsi)
   - UKP.ruangUI._murni                fungsi murni tanpa DOM (diuji test/ruang-ui.test.js)
   Semua akses UKP.ruang dijaga: room yang tidak tersedia (claude.ai, file:// tanpa WebCrypto, CSP) tidak merusak alur lama.
   Teks UI tanpa istilah teknis (relai, MQTT, enkripsi); kode room hanya di jalur cadangan. */
(function (root) {
  'use strict';
  const UKP = root.UKP; const h = UKP.h;
  const K = UKP.konten; const L = UKP.belajar || {};
  const UI = UKP.ruangUI = UKP.ruangUI || {};
  UKP.c = UKP.c || {};
  const HURUF = ['A', 'B', 'C', 'D'];
  const YAKIN = [['yakin', 'Yakin'], ['ragu', 'Ragu'], ['menebak', 'Nebak']];
  const labelYakin = k => (YAKIN.find(y => y[0] === k) || [0, ''])[1];
  const SITUS_TIM = 'https://nickylourenzo27-sketch.github.io/Latihan-UKP/';
  const rapikan = v => String(v == null ? '' : v).replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim();
  const kunciNama = v => rapikan(v).toLowerCase();
  const samaNama = (a, b) => !!kunciNama(a) && kunciNama(a) === kunciNama(b);
  // v9.3.1: "Muat ulang" di spanduk versi berbeda memasang versi baru (UKP.perbaruiAplikasi di js/app.js); muat ulang biasa
  // saja tidak cukup karena aset dilayani dari cache service worker
  const muatUlangVersi = () => { try { if (typeof UKP.perbaruiAplikasi === 'function') { UKP.perbaruiAplikasi(true); return; } } catch (e) {} location.reload(); };
  let sudahCekVersi = false;
  const cekVersiSekali = () => { if (sudahCekVersi) return; sudahCekVersi = true; try { if (typeof UKP.perbaruiAplikasi === 'function') UKP.perbaruiAplikasi(false); } catch (e) {} };
  const ambilDari = (obj, nama) => { if (!obj || typeof obj !== 'object') return null; const k = Object.keys(obj).find(x => samaNama(x, nama)); return k != null ? obj[k] : null; };
  const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
  const fn = (o, k) => !!o && typeof o[k] === 'function';

  // =====================================================================
  // FUNGSI MURNI (tanpa DOM; diuji di test/ruang-ui.test.js)
  // =====================================================================
  // teks undangan untuk grup WhatsApp
  function teksUndangan(namaRoom, tautan) {
    const n = rapikan(namaRoom) || 'Room tim';
    return 'Room MABAR UKP "' + n + '". Buka tautan ini di HP, lalu ketuk nama Anda: ' + String(tautan || '').trim();
  }
  // per = { nama: { o, k, b } } → hitungan per huruf TANPA nama: { per: { A, B, C, D, '-' }, total, dijawab, benar }
  // pemimpin (opsional): pemimpin yang tidak menjawab tidak ikut dihitung "tidak menjawab" (sama dengan papan: ia tidak disebut)
  function kelompokJawaban(per, kunci, pemimpin) {
    const hit = { A: 0, B: 0, C: 0, D: 0, '-': 0 }; let total = 0, dijawab = 0, benar = 0;
    const kn = HURUF.includes(kunci) ? kunci : null;
    Object.keys(isObj(per) ? per : {}).forEach(n => {
      const v = per[n]; let o = isObj(v) ? (v.o != null ? v.o : v.opsi) : v; o = String(o == null ? '' : o).toUpperCase();
      if (!HURUF.includes(o)) o = '-';
      if (o === '-' && pemimpin && samaNama(n, pemimpin)) return;
      total++; hit[o]++;
      if (o !== '-') dijawab++;
      const b = kn ? o === kn : !!(isObj(v) && (v.b === 1 || v.b === true || v.benar === true));
      if (b && o !== '-') benar++;
    });
    return { per: hit, total, dijawab, benar };
  }
  // "A 1 · B 4 · C 1" (huruf berisi saja; tidak menjawab di akhir)
  function teksBatang(kel) {
    if (!kel || !kel.per) return '';
    const bag = HURUF.filter(x => kel.per[x] > 0).map(x => x + ' ' + kel.per[x]);
    if (kel.per['-'] > 0) bag.push('tidak menjawab ' + kel.per['-']);
    return bag.join(' · ');
  }
  const teksBenarTim = kel => (kel ? kel.benar : 0) + ' dari ' + (kel ? kel.total : 0) + ' benar';
  // sisa detik menurut jam pemimpin: akhir (epoch pemimpin) − (jam lokal + selisih); null bila tanpa batas
  function sisaDetik(akhir, selisih, kini) {
    const a = Number(akhir); if (!(a > 0)) return null;
    const t = (typeof kini === 'number' ? kini : Date.now()) + (Number(selisih) || 0);
    return Math.max(0, Math.ceil((a - t) / 1000));
  }
  function fmtSisa(detik) {
    if (detik == null) return '';
    const d = Math.max(0, Math.floor(detik)); const z = n => String(n).padStart(2, '0');
    const j = Math.floor(d / 3600), m = Math.floor((d % 3600) / 60), s = d % 60;
    return (j ? j + ':' + z(m) : z(m)) + ':' + z(s);
  }
  // v9.5.3 Bx1: kop HP → { label, waktu, habis }. Latihan yang sisa 0 → ' · ' + 'waktu latihan habis' (latihan tetap berjalan, seperti papan)
  function teksSisaKop(sisa, jenis) {
    if (sisa == null) return { label: ' · sisa ', waktu: '', habis: false };
    if (jenis === 'latihan' && sisa <= 0) return { label: ' · ', waktu: 'waktu latihan habis', habis: true };
    return { label: ' · sisa ', waktu: fmtSisa(sisa), habis: false };
  }
  // ---------- v9.3 W2: waktu mengerjakan dan waktu membahas ----------
  const PILIHAN_BAHAS_CADANGAN = [60, 120, 180, 0];
  const labelBahas = d => (d > 0 ? Math.round(d / 60) + ' menit' : 'Bebas');
  // m:ss (mis. 1:21); jam ikut di menit (75:00) karena satu fase tidak pernah selama itu
  function fmtMSS(detik) {
    const d = Math.max(0, Math.floor(Number(detik) || 0));
    return Math.floor(d / 60) + ':' + String(d % 60).padStart(2, '0');
  }
  // v9.4 W: hitung naik tanpa batas bisa melewati satu jam → "1:05:09" (di bawah satu jam sama dengan fmtMSS)
  function fmtNaik(detik) {
    const d = Math.max(0, Math.floor(Number(detik) || 0));
    return d < 3600 ? fmtMSS(d) : Math.floor(d / 3600) + ':' + String(Math.floor(d % 3600 / 60)).padStart(2, '0') + ':' + String(d % 60).padStart(2, '0');
  }
  // "10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)"; Bebas: "10 soal · waktu latihan 21 menit, termasuk membahas · membahas per soal tanpa hitung mundur"
  // v9.4 W: waktu mengerjakan tanpa batas (detikKerja 0) → "10 soal · mengerjakan tanpa batas · membahas 2 menit per soal · lama latihan tidak diperkirakan"
  function teksRingkasWaktu(n, detikKerja, detikBahas) {
    n = Math.max(0, Math.round(Number(n) || 0));
    const mK = Math.round(n * (Number(detikKerja) || 0) / 60);
    const b = Number(detikBahas) || 0;
    if (!(Number(detikKerja) > 0)) return n + ' soal · mengerjakan tanpa batas · ' + (b > 0 ? 'membahas ' + Math.round(b / 60) + ' menit per soal' : 'membahas bebas') + ' · lama latihan tidak diperkirakan';
    // v9.5.3 B3: hitung mundur sesi juga berjalan saat membahas, jadi menit itu waktu latihan (bukan hanya mengerjakan)
    if (!(b > 0)) return n + ' soal · waktu latihan ' + mK + ' menit, termasuk membahas · membahas per soal tanpa hitung mundur';
    const mB = Math.round(n * b / 60);
    return n + ' soal · kira-kira ' + (mK + mB) + ' menit (' + mK + ' mengerjakan + ' + mB + ' membahas)';
  }
  // baris waktu di HP anggota dari aktivitas latihan (murni). kini = jam lokal (ms); selisih = jamPemimpin − jamLokal.
  // → { fase: 'kerja' | 'bahas', teks, habis, sisa } atau null (baris tidak tampil)
  // o.sudahJawab: jawaban sudah terkirim → teks habis tanpa "Jawab sekarang."
  function barisWaktuHP(a, selisih, kini, o) {
    if (!isObj(a) || a.jenis !== 'latihan') return null;
    const t = (typeof kini === 'number' ? kini : Date.now()) + (Number(selisih) || 0);
    const target = (mulai, detik) => { const m = Number(mulai), d = Number(detik); if (!(m > 0) || !(d > 0) || d > 3600) return null; return Math.ceil((m + d * 1000 - t) / 1000); };
    if (a.fase === 'kunci') {
      const sisa = target(a.mulaiBahas, a.detikBahas); if (sisa == null) return null;   // Bebas, pemimpin versi lama, atau field tidak sah
      return sisa > 0 ? { fase: 'bahas', teks: 'Membahas · sisa ' + fmtMSS(Math.min(sisa, a.detikBahas)), habis: false, sisa } : { fase: 'bahas', teks: 'Waktu membahas habis.', habis: true, sisa: 0 };
    }
    if (a.fase === 'jawab') {
      // v9.4 W: detikPerSoal 0 = pemimpin memilih tanpa batas (pemimpin versi lama selalu mengirim angka positif) →
      // "Mengerjakan 1:21" hitung naik dari mulaiSoal; tidak pernah habis. Batas 24 jam supaya jam yang kacau tidak menampilkan angka liar
      if (a.detikPerSoal === 0) {
        const m = Number(a.mulaiSoal); if (!(m > 0)) return null;
        const jalan = Math.min(86400, Math.max(0, Math.floor((t - m) / 1000)));
        return { fase: 'kerja', teks: 'Mengerjakan ' + fmtNaik(jalan), habis: false, sisa: null, naik: jalan };
      }
      const sisa = target(a.mulaiSoal, a.detikPerSoal); if (sisa == null) return null;
      return sisa > 0 ? { fase: 'kerja', teks: 'Mengerjakan · sisa ' + fmtMSS(Math.min(sisa, a.detikPerSoal)), habis: false, sisa } : { fase: 'kerja', teks: o && o.sudahJawab ? 'Waktu mengerjakan habis.' : 'Waktu mengerjakan habis. Jawab sekarang.', habis: true, sisa: 0 };
    }
    return null;
  }
  // keadaan view room (rencana §3 a–g) dari masukan polos
  // o = { tersedia, tabKedua, kode (param ternormal | null), kodeSalah, info ({ kode, peran } | null), state,
  //       kodeSimpan (kode room yang tersimpan di perangkat ini | null), memulihkan (boot menunda pemulihan room) }
  function pilihKeadaan(o) {
    o = o || {};
    if (!o.tersedia) return 'tidakTersedia';
    if (o.kodeSalah) return 'kodeSalah';
    const info = o.info || null;
    // v9.4 FB2: tautan room yang SAMA dengan room yang sedang dipegang tab lain → "Room terbuka di tab lain" (perilaku v9.3.2 untuk
    // pemimpin), bukan layar pilih nama; boot yang menunda pemulihan → layar menghubungkan (tanpa masuk otomatis dari layar gabung)
    if (!info && o.tabKedua && o.kode && o.kodeSimpan && o.kode === o.kodeSimpan) return 'tabKedua';
    if (!info && o.memulihkan && (!o.kode || o.kode === o.kodeSimpan)) return 'memulihkan';
    if (o.kode && (!info || info.kode !== o.kode)) return 'gabung';
    if (!info) return o.tabKedua ? 'tabKedua' : 'kosong';
    const st = o.state;
    if (!st || !st.room) return 'menunggu';
    const a = st.aktivitas; const tuan = info.peran === 'tuan';
    if (!a) return 'lobi';
    if (a.jenis === 'latihan') return tuan ? 'latihanTuan' : 'latihanAnggota';
    if (a.jenis === 'ujian') return tuan ? 'ujianTuan' : 'ujianAnggota';
    return 'lobi';
  }
  // sub-keadaan HP anggota saat latihan: jaw = { o, k } | null; ubah = anggota menekan "Ubah jawaban"
  function keadaanAnggota(a, jaw, ubah) {
    if (!a) return 'lobi';
    const sid = Array.isArray(a.soalIds) ? a.soalIds[a.idx] : null;
    if (a.fase === 'kunci' && a.hasilSoal && a.hasilSoal.soalId === sid) return 'hasil';
    if (a.fase === 'kunci') return 'hasil';
    if (!ubah && jaw && jaw.o && (jaw.o === '-' || jaw.k)) return 'terkirim';
    return 'menjawab';
  }
  // label pembagian jawaban (istilah baku v9.2) dari kelas triase L.triaseSoal; label lama dipetakan juga (pemimpin versi lain)
  const LABEL_KELAS = { terbelah: 'Tim terbagi', tersandung: 'Banyak yang salah', rapuh: 'Semua benar, tapi ada yang ragu', dikuasai: 'Semua benar' };
  const LABEL_BELUM_MENJAWAB = 'Benar, tapi ada yang belum menjawab';
  function labelBaku(kelas, label) {
    // v9.5.4 S1: kelas 'rapuh' karena ada yang tidak menjawab (bukan karena ragu) memakai labelnya sendiri
    if (kelas === 'rapuh' && /belum menjawab/i.test(rapikan(label))) return LABEL_BELUM_MENJAWAB;
    if (kelas && LABEL_KELAS[kelas]) return LABEL_KELAS[kelas];
    const t = rapikan(label); if (!t) return null;
    if (/^terbelah/i.test(t)) return LABEL_KELAS.terbelah;
    if (/^hanya|belum tepat|tersandung/i.test(t)) return LABEL_KELAS.tersandung;
    if (/belum mantap/i.test(t)) return LABEL_KELAS.rapuh;
    if (/^dikuasai/i.test(t)) return LABEL_KELAS.dikuasai;
    return t;
  }
  // baris penjelas aman (U2) untuk HP anggota: tidak pernah menyebut nama yang keliru
  // o = { per, nama, penjelas, kunci, kelas, label, opsiKeliru, alasanLabel } → { umum, pribadi, peran: 'penjelas'|'dengar'|'benar'|'netral', bolehPaham }
  function teksPenjelas(o) {
    o = o || {}; const per = isObj(o.per) ? o.per : {}; const kunci = HURUF.includes(o.kunci) ? o.kunci : null;
    const kel = kelompokJawaban(per, kunci, o.pemimpin);
    const pj = o.penjelas && ambilDari(per, o.penjelas) ? rapikan(o.penjelas) : null;
    const bag = [];
    const lbl = labelBaku(o.kelas, o.label); if (lbl) bag.push(lbl);
    if (!pj && kel.benar < kel.dijawab) bag.push('Baca pembahasan bersama');
    const nKeliru = o.opsiKeliru && kel.per[o.opsiKeliru] ? kel.per[o.opsiKeliru] : 0;
    if (o.opsiKeliru && nKeliru) bag.push(nKeliru + ' orang memilih ' + o.opsiKeliru + (o.alasanLabel ? ' (biasanya karena ' + rapikan(o.alasanLabel) + ')' : ''));
    const saya = ambilDari(per, o.nama); const oSaya = saya ? String((isObj(saya) ? saya.o : saya) || '-').toUpperCase() : null;
    const benarSaya = !!(kunci && oSaya === kunci);
    let pribadi = null, peran = 'netral', bolehPaham = false;
    if (pj && samaNama(pj, o.nama)) { pribadi = 'Giliran Anda: jelaskan ke tim kenapa jawabannya ' + kunci + '.'; peran = 'penjelas'; }
    else if (pj) { pribadi = 'Dengarkan ' + pj + ' menjelaskan kenapa ' + kunci + '.'; peran = benarSaya ? 'benar' : 'dengar'; bolehPaham = !benarSaya; }
    else if (benarSaya) peran = 'benar';
    return { umum: bag.join(' · '), pribadi, peran, bolehPaham };
  }
  // satu cara menghitung (BRIEF v9.2): skor tim = benar ÷ jawaban yang masuk; yang tidak menjawab disebut terpisah
  function persenTim(tim) { if (!tim || !(Number(tim.dijawab) > 0)) return null; return Math.round(Number(tim.benar) / Number(tim.dijawab) * 100); }
  function teksSkorTim(tim) { const p = persenTim(tim); if (p == null) return ''; return 'Skor tim ' + p + '% · ' + Math.round(tim.benar) + ' dari ' + Math.round(tim.dijawab) + ' jawaban benar'; }
  // "Anda benar 1 dari 2 soal" (soal yang Anda jawab)
  function teksSaya(saya) { if (!saya || !(Number(saya.dijawab) > 0)) return ''; return 'Anda benar ' + Math.round(saya.benar) + ' dari ' + Math.round(saya.dijawab) + ' soal'; }
  // per soal (tanpa nama): "Soal ini: 1 orang benar, 1 salah, 3 tidak menjawab"; selama soal berjalan "belum menjawab"
  function teksSoalIni(kel, berjalan) {
    if (!kel) return '';
    const salah = Math.max(0, kel.dijawab - kel.benar); const kosong = Math.max(0, kel.total - kel.dijawab);
    const bag = [kel.benar + ' orang benar']; if (salah) bag.push(salah + ' salah'); if (kosong) bag.push(kosong + (berjalan ? ' belum menjawab' : ' tidak menjawab'));
    return 'Soal ini: ' + bag.join(', ');
  }
  // hitungan di bilah bawah HP: penyebut dari aktivitas.peserta bila ada (pemimpin v9.2), tanpa itu jumlah saja
  function teksHitungJawab(n, peserta) {
    n = Math.max(0, Math.round(Number(n) || 0)); const p = Array.isArray(peserta) && peserta.length ? peserta.length : 0;
    if (!n) return 'Belum ada yang menjawab';
    return p ? Math.min(n, p) + ' dari ' + p + ' orang sudah menjawab' : n + ' orang sudah menjawab';
  }
  // lobi pemimpin: "1 dari 10 orang sudah masuk" · "Belum ada yang menekan Siap" / "3 orang sudah siap: Budi, Sari, Dodi"
  const teksMasuk = (on, total) => (Number(on) || 0) + ' dari ' + (Number(total) || 0) + ' orang sudah masuk';
  function teksSiap(nama) { const arr = (Array.isArray(nama) ? nama : []).filter(Boolean); return arr.length ? arr.length + ' orang sudah siap: ' + arr.join(', ') : 'Belum ada yang menekan Siap'; }
  // baris lembar "Soal sebelumnya": "Anda A (Ragu) · kunci jawaban C" (v9.2 V8: istilah baku, bukan "kunci" saja)
  function teksBarisLalu(e) {
    if (!e) return '';
    const o = HURUF.includes(e.o) ? e.o : null;
    return (o ? 'Anda ' + o + (e.k && labelYakin(e.k) ? ' (' + labelYakin(e.k) + ')' : '') : 'Anda tidak menjawab') + ' · kunci jawaban ' + (e.kunci || '?');
  }
  // riwayat = [{ ke, benar, dijawab }] (kumulatif) → nomor soal saat akurasi tim pertama kali ≥ batas setelah ≥ 5 soal (masih di atas), atau null
  function sejakLulus(riwayat, batas) {
    batas = Number(batas) || 60; const arr = (Array.isArray(riwayat) ? riwayat : []).filter(x => x && x.dijawab > 0).slice().sort((a, b) => a.ke - b.ke);
    if (!arr.length) return null;
    const akhir = arr[arr.length - 1]; if (akhir.benar / akhir.dijawab * 100 < batas) return null;
    let sejak = null;
    for (const x of arr) { const ok = x.ke >= 5 && x.benar / x.dijawab * 100 >= batas; if (ok && sejak == null) sejak = x.ke; else if (!ok && x.ke >= 5) sejak = null; }
    return sejak;
  }
  function jawabRekaman(v) { const o = String((isObj(v) ? (v.o != null ? v.o : v.opsi) : v) || '-').toUpperCase(); return HURUF.includes(o) ? o : '-'; }
  // hasil sendiri dari rekaman sesi: { benar, n (soal), dijawab (soal yang dijawab) }
  function hasilku(sesi, nama) {
    const soal = sesi && Array.isArray(sesi.soal) ? sesi.soal : []; let benar = 0, dijawab = 0, n = 0;
    soal.forEach(q => {
      const jw = q && isObj(q.jawaban) ? q.jawaban : null; const v = ambilDari(jw, nama);
      // soal sebelum orang itu ikut (rekaman per nama tanpa namanya) tidak masuk penyebut: sama dengan rekap dan evaluasi
      if (jw && Object.keys(jw).length && v == null) return;
      n++; const o = v ? jawabRekaman(v) : '-'; if (o !== '-') dijawab++; if (o !== '-' && o === q.kunci) benar++;
    });
    return { benar, n, dijawab };
  }
  // rekap penutup T6 (v9.2 satu cara hitung) → { judul, baris (fakta bersama, satu per baris), terimaKasih|null, bahasLagi|null,
  //   hasilku (pribadi; null bila nama itu tidak menjawab satu soal pun), salin (teks WA tanpa hasil pribadi), akurasi, nHadir }
  // opsi = { awal, namaTopik: soalId → nama topik | null }
  function rekapPenutup(sesi, nama, opsi) {
    opsi = opsi || {};
    if (!isObj(sesi)) return null;
    const soal = Array.isArray(sesi.soal) ? sesi.soal.filter(q => q && q.id) : [];
    const peserta = (Array.isArray(sesi.peserta) ? sesi.peserta : []).filter(x => typeof x === 'string' && x);
    const tim = isObj(sesi.tim) ? sesi.tim : {};
    let totB = 0, dijawab = 0; const hadir = new Set();
    soal.forEach(q => peserta.forEach(p => { const o = jawabRekaman(ambilDari(q.jawaban, p)); if (o !== '-') { dijawab++; hadir.add(kunciNama(p)); } if (o !== '-' && o === q.kunci) totB++; }));
    const akurasi = dijawab ? Math.round(totB / dijawab * 100) : typeof tim.akurasi === 'number' ? Math.round(tim.akurasi) : null;
    const nHadir = typeof tim.hadir === 'number' ? tim.hadir : hadir.size;
    const skor = dijawab ? teksSkorTim({ benar: totB, dijawab }) : akurasi != null ? 'Skor tim ' + akurasi + '%' : 'Belum ada jawaban yang masuk';
    const baris = [nHadir + ' dari ' + peserta.length + ' orang ikut', soal.length + ' soal dikerjakan', skor];
    // penjelas: jumlah soal yang ia jelaskan (q.penjelas); tanpa itu jumlah ucapan terima kasih dari sesi.tim
    const hitPj = {};
    soal.forEach(q => { if (typeof q.penjelas === 'string' && q.penjelas) { const n = rapikan(q.penjelas); hitPj[n] = (hitPj[n] || 0) + 1; } });
    if (!Object.keys(hitPj).length && isObj(tim.terimaKasih)) Object.keys(tim.terimaKasih).forEach(n => { const v = Math.round(Number(tim.terimaKasih[n])); if (v > 0) hitPj[n] = v; });
    const pj = Object.keys(hitPj).sort((a, b) => a.localeCompare(b, 'id'));
    const terimaKasih = pj.length ? pj.map((n, k) => k ? n + ' ' + hitPj[n] + ' soal' : n + ' membantu menjelaskan ' + hitPj[n] + ' soal').join(', ') : null;
    let bahas = Array.isArray(tim.bahasLagi) ? tim.bahasLagi.filter(x => typeof x === 'string') : null;
    if (!bahas) bahas = soal.filter(q => peserta.filter(p => { const o = jawabRekaman(ambilDari(q.jawaban, p)); return o !== '-' && o !== q.kunci; }).length >= 3).map(q => q.id);
    let bahasLagi = null;
    if (bahas.length) {
      const topik = typeof opsi.namaTopik === 'function' ? bahas.map(id => { try { return rapikan(opsi.namaTopik(id)); } catch (e) { return ''; } }).filter(Boolean) : [];
      const unik = topik.filter((x, i) => topik.indexOf(x) === i);
      bahasLagi = 'Perlu dibahas lagi: ' + bahas.length + ' soal' + (unik.length ? ' tentang ' + unik.slice(0, 3).join(', ') + (unik.length > 3 ? ', dan lainnya' : '') : '');
    }
    const hk = nama ? hasilku(sesi, nama) : null;
    const salin = ['Latihan bersama MABAR UKP'].concat(baris, bahasLagi ? [bahasLagi] : [], terimaKasih ? [terimaKasih] : []).join('\n');
    return { judul: 'Latihan tadi selesai', baris, terimaKasih, bahasLagi, hasilku: hk && hk.dijawab ? 'Hasil Anda: ' + hk.benar + ' dari ' + hk.n + ' soal benar' : null, salin, akurasi, nHadir };
  }
  // alasan room tidak tersedia → kalimat awam (tanpa istilah teknis)
  function alasanAwam(alasan, opsi) {
    const a = String(alasan || '');
    if (opsi && opsi.semuaGagal) return 'Belum bisa tersambung ke room. Coba data seluler, atau Wi-Fi lain.';
    if (/belum mendukung/i.test(a)) return 'Peramban ini belum bisa membuka room. Perbarui peramban, atau buka tautan room di Chrome atau Safari terbaru.';   // v9.4 Kb3
    if (/claude|claudeusercontent|artifact/i.test(a)) return 'Room online hanya tersedia di website tim.';
    if (/https|WebCrypto|crypto|aman/i.test(a)) return 'Room butuh halaman https://. Buka lewat website tim.';
    if (/WebSocket/i.test(a)) return 'Peramban ini belum mendukung room. Coba Chrome atau Safari terbaru.';
    if (/CSP|blokir|jaringan|internet/i.test(a)) return 'Belum bisa tersambung ke room. Coba data seluler, atau Wi-Fi lain.';
    return 'Room online hanya tersedia di website tim.';
  }
  function inisial(nama) { const n = rapikan(nama); if (!n) return '?'; const p = n.split(' ').filter(Boolean); return (p.length > 1 ? p[0][0] + p[1][0] : n.slice(0, 2)).toUpperCase(); }
  // "Nicky, Mita, Jeni sudah masuk" / "… +2"
  function ringkasHadir(online, maks) {
    const arr = (Array.isArray(online) ? online : []).filter(Boolean); maks = maks || 3;
    if (!arr.length) return 'Belum ada yang masuk room';
    const tampil = arr.slice(0, maks).join(', ') + (arr.length > maks ? ' +' + (arr.length - maks) : '');
    return tampil + ' sudah masuk';
  }
  const HARI = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  function tglPendek(t) { const d = new Date(Number(t) || 0); if (isNaN(d) || !(Number(t) > 0)) return ''; return HARI[d.getDay()] + ' ' + d.getDate() + ' ' + BULAN[d.getMonth()]; }
  // baris riwayat room: "Sel 10 Nov · Latihan bersama · 20 soal · skor tim 68%"
  function teksRiwayat(e) {
    if (!isObj(e)) return '';
    const bag = [tglPendek(e.t), e.mode === 'ujian' ? 'Ujian tim' : 'Latihan bersama', (Number(e.nSoal) || 0) + ' soal'];
    if (e.judul && e.mode === 'ujian') bag.splice(2, 0, String(e.judul));
    if (typeof e.akurasiTim === 'number') bag.push((e.mode === 'ujian' ? 'rata-rata ' : 'skor tim ') + Math.round(e.akurasiTim) + '%');
    return bag.filter(Boolean).join(' · ');
  }
  // "Minggu lalu" bila entri 4–10 hari lalu, selain itu "Latihan lalu"
  function labelSesiLalu(t, kini) { const hr = ((kini || Date.now()) - Number(t)) / 86400000; return hr >= 4 && hr <= 10 ? 'Minggu lalu' : 'Latihan lalu'; }
  // hasil "Cek sambungan": [{ ok }] → kalimat biasa (tanpa jumlah jalur)
  function teksCekSambungan(hasil) {
    const arr = Array.isArray(hasil) ? hasil : []; const ok = arr.filter(x => x && x.ok).length;
    if (!arr.length) return 'Sambungan belum bisa diperiksa. Periksa internet, lalu coba lagi.';
    return ok ? 'Internet lancar. Latihan bersama bisa dipakai.' : 'Belum bisa tersambung. Coba data seluler, atau Wi-Fi lain.';
  }
  // v9.3.2 A.2: nama profil perangkat ini cocok (tanpa beda huruf besar-kecil) dengan tepat satu nama di daftar room → masuk tanpa ketukan.
  // Tidak bila: onboarding belum selesai, orangnya pernah memilih "Bukan Anda? Ganti nama" untuk room ini (tolak), nama itu nama pemimpin,
  // atau nama itu sedang dipakai perangkat lain menurut intip (online = null/tidak diketahui → dianggap tidak dipakai).
  // o = { profil: { nama, onboardingSelesai }, daftar, tuan, online, tolak, sah(nama)→bool } → nama persis seperti di daftar, atau null
  function namaDariProfil(o) {
    o = o || {}; const p = o.profil || {}; const nm = rapikan(p.nama);
    if (!nm || !p.onboardingSelesai || o.tolak) return null;
    const cocok = (Array.isArray(o.daftar) ? o.daftar : []).filter(n => samaNama(n, nm));
    if (cocok.length !== 1) return null;
    const nama = cocok[0];
    if (o.tuan && samaNama(nama, o.tuan)) return null;
    if (typeof o.sah === 'function' && !o.sah(nama)) return null;
    if (Array.isArray(o.online) && o.online.some(x => samaNama(x, nama))) return null;
    return nama;
  }
  // v9.3.2 B.1: ujian tim di HP dibuka sendiri (jalur tombol "Mulai mengerjakan") bila semuanya beres; sekali saja per ujian per tab (sudah).
  // o = { status, terkumpul, simAktif, kodeInfo, sisa (detik atau null), sudah }
  function bolehBukaUjian(o) {
    o = o || {};
    if (o.sudah || o.status === 'selesai' || o.terkumpul || o.simAktif) return false;
    const k = o.kodeInfo; if (!k || !Array.isArray(k.soalIds) || !k.soalIds.length) return false;
    if (Array.isArray(k.tidakDikenal) && k.tidakDikenal.length) return false;
    if (o.sisa != null && !(o.sisa > 0)) return false;
    return true;
  }
  // kalimat di bawah judul layar gabung. v9.3.2 P1: selama "Menghubungkan ke room…" (termasuk masuk tanpa ketukan dari nama profil)
  // tidak lagi menyuruh "Ketuk nama Anda" atau "memilih nama", karena tidak ada nama yang perlu diketuk.
  // o = { tuan, online (larik nama tersambung, atau null bila tidak diketahui), daftar, menghubungkan }
  function teksLeadGabung(o) {
    o = o || {}; const tuan = rapikan(o.tuan); if (!tuan) return null;
    const belumBuka = Array.isArray(o.online) && !o.online.some(x => samaNama(x, tuan));
    if (o.menghubungkan) return belumBuka ? tuan + ' belum membuka room. Latihan dimulai saat ia datang.' : tuan + ' mengajak Anda latihan soal bersama.';
    return belumBuka ? tuan + ' belum membuka room. Anda tetap bisa memilih nama sekarang; latihan dimulai saat ia datang.'
      : tuan + ' mengajak Anda latihan soal bersama. ' + ((Array.isArray(o.daftar) ? o.daftar : []).some(n => !samaNama(n, tuan)) ? 'Ketuk nama Anda untuk ikut.' : 'Tulis nama Anda untuk ikut.');
  }
  // ---------- v9.4 Ka2/Ka3: tautan yang rusak sedikit, sebab gagal tersambung, info sambungan, versi lama ----------
  // kode dari tautan yang dibawa WhatsApp: '#' ter-enkode, huruf kecil, spasi, atau tanda baca di ujung ("ABCD-EFGHJ-KMNPQ)." → "ABCD-EFGHJ-KMNPQ").
  // Hanya membuang tanda baca di ujung; isi kode tidak ditebak. → teks yang bisa diberikan ke normalKode (atau '' bila kosong)
  function rapikanKodeTautan(teks) {
    let t = String(teks == null ? '' : teks);
    for (let i = 0; i < 2 && /%[0-9a-f]{2}/i.test(t); i++) { try { t = decodeURIComponent(t); } catch (e) { break; } }
    const m = t.match(/#?room\/(.*)$/i); if (m) t = m[1];
    t = t.replace(/^[\s"'([{<]+/, '');
    // berhenti di karakter pertama yang tidak mungkin ada di kode (kode: huruf, angka, dan pemisah - _ . spasi)
    const cut = t.search(/[^0-9A-Za-z\-_.\s]/); if (cut >= 0) t = t.slice(0, cut);
    return t.replace(/[\s\-_.]+$/, '').trim();
  }
  // hash halaman → hash rute room yang rapi, atau null bila tidak perlu diubah.
  // '#%23room/x', '#ROOM/x', '#room%2Fx', '#Room/x).' → '#room/x'. Hash rute lain (atau sudah rapi) → null
  function hashRoomRapi(hash) {
    const asli = String(hash == null ? '' : hash);
    let t = asli.replace(/^#/, '');
    for (let i = 0; i < 2 && /%(?:23|2f|20)/i.test(t); i++) { try { t = decodeURIComponent(t); } catch (e) { break; } }
    t = t.replace(/^[#\s]+/, '');
    const m = t.match(/^room(?:\/(.*))?$/i); if (!m) return null;
    const kode = m[1] != null ? rapikanKodeTautan(m[1]) : '';
    const baru = '#room' + (kode ? '/' + kode : '');
    return baru === asli ? null : baru;
  }
  // "Chrome 120 · Android 14" · "Safari 17 · iPhone iOS 17.2" · "dalam aplikasi Instagram" (peramban di dalam aplikasi sering bermasalah)
  function ringkasPeramban(ua) {
    const u = String(ua || ''); if (!u) return 'tidak diketahui';
    const ver = re => { const m = u.match(re); return m ? m[1] : ''; };
    let os = '';
    if (/iPhone|iPad|iPod/.test(u)) os = (/iPad/.test(u) ? 'iPad' : 'iPhone') + (ver(/OS (\d+(?:_\d+)?)/) ? ' iOS ' + ver(/OS (\d+(?:_\d+)?)/).replace('_', '.') : '');
    else if (/Android/.test(u)) os = 'Android' + (ver(/Android (\d+(?:\.\d+)?)/) ? ' ' + ver(/Android (\d+(?:\.\d+)?)/) : '');
    else if (/Windows/.test(u)) os = 'Windows';
    else if (/Mac OS X|Macintosh/.test(u)) os = 'Mac';
    else if (/Linux/.test(u)) os = 'Linux';
    let br = '';
    const dalam = u.match(/\b(FBAN|FBAV|Instagram|Line|WhatsApp|TikTok|musical_ly|Telegram)\b/);
    if (dalam) br = 'dalam aplikasi ' + ({ FBAN: 'Facebook', FBAV: 'Facebook', musical_ly: 'TikTok' }[dalam[1]] || dalam[1]);
    else if (/SamsungBrowser\/(\d+)/.test(u)) br = 'Samsung Internet ' + ver(/SamsungBrowser\/(\d+)/);
    else if (/EdgA?\/(\d+)/.test(u)) br = 'Edge ' + ver(/EdgA?\/(\d+)/);
    else if (/OPR\/(\d+)|Opera/.test(u)) br = 'Opera' + (ver(/OPR\/(\d+)/) ? ' ' + ver(/OPR\/(\d+)/) : '');
    else if (/Firefox\/(\d+)|FxiOS\/(\d+)/.test(u)) br = 'Firefox ' + (ver(/Firefox\/(\d+)/) || ver(/FxiOS\/(\d+)/));
    else if (/CriOS\/(\d+)/.test(u)) br = 'Chrome ' + ver(/CriOS\/(\d+)/);
    else if (/; wv\)/.test(u)) br = 'tampilan web di dalam aplikasi';
    else if (/Chrome\/(\d+)/.test(u)) br = 'Chrome ' + ver(/Chrome\/(\d+)/);
    else if (/Version\/(\d+(?:\.\d+)?).*Safari/.test(u)) br = 'Safari ' + ver(/Version\/(\d+(?:\.\d+)?)/);
    else if (/Safari/.test(u)) br = 'Safari';
    return [br || 'peramban lain', os].filter(Boolean).join(' · ');
  }
  // '9.3.2' < '9.4' → true; nilai tidak dikenal → false
  function versiLebihLama(a, b) {
    const p = v => String(v || '').split('.').map(x => parseInt(x, 10));
    const x = p(a), y = p(b); if (!x.length || !y.length || x.some(isNaN) || y.some(isNaN)) return false;
    for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d < 0; }
    return false;
  }
  // anggota memakai versi lebih lama dari pemimpin? x = entri hadir() ({ online, versiApp }). Sejak v9.4 kehadiran membawa versiApp;
  // kehadiran online tanpa versiApp berarti versi sebelum 9.4 (kecuali pemimpin sendiri juga tanpa versi, mis. pohon pengembangan)
  function versiAnggotaLama(x, versiPemimpin) {
    if (!x || !x.online || !versiPemimpin) return false;
    if (!x.versiApp) return versiLebihLama('9.3.99', versiPemimpin);
    return versiLebihLama(x.versiApp, versiPemimpin);
  }
  // sebab gagal masuk room → { kunci, judul, teks, tombol } (kalimat biasa, satu tindakan).
  // o = { daring (navigator.onLine), jalur ([{ ok }] hasil uji jalur, atau null bila belum diuji), tidakAda ('tutup' | 'kosong' | null), tuanBelum }
  function sebabGagal(o) {
    o = o || {};
    if (o.daring === false) return { kunci: 'internet', judul: 'HP ini tidak tersambung ke internet', teks: 'Nyalakan data seluler atau Wi-Fi, lalu ketuk Coba lagi.', tombol: 'Coba lagi' };
    if (o.tidakAda === 'tutup') return { kunci: 'tutup', judul: 'Room ini sudah ditutup', teks: 'Minta tautan baru ke yang mengirimi Anda tautan ini.', tombol: 'Ke Beranda' };
    const jalur = Array.isArray(o.jalur) ? o.jalur : null;
    if (jalur && jalur.length && !jalur.some(x => x && x.ok)) return { kunci: 'jalur', judul: 'Semua jalur sambungan gagal', teks: 'Internet ada, tetapi jaringan ini menolak sambungan room. Wi-Fi kantor atau kampus sering memblokirnya. Matikan Wi-Fi dan pakai data seluler, lalu ketuk Coba lagi.', tombol: 'Coba lagi' };
    if (o.tuanBelum) return { kunci: 'belum', judul: 'Pemimpin belum membuka room', teks: 'Halaman ini tersambung sendiri begitu pemimpin membuka room. Biarkan terbuka.', tombol: 'Coba lagi' };
    return { kunci: 'kosong', judul: 'Room tidak ditemukan', teks: 'Room ini belum dibuat, sudah ditutup, atau tautannya terpotong. Minta tautan baru ke yang mengirimi Anda tautan ini.', tombol: 'Coba lagi' };
  }
  const dua = n => String(n).padStart(2, '0');
  const jamMenit = t => { const d = new Date(Number(t)); return isNaN(d) || !(Number(t) > 0) ? '' : dua(d.getHours()) + '.' + dua(d.getMinutes()) + '.' + dua(d.getSeconds()); };
  // teks "Info sambungan" untuk disalin ke WhatsApp. Tanpa kode room penuh (4 karakter terakhir saja) dan tanpa data pribadi selain nama panggilan.
  // o = { versi, peramban, nama, kode, peran, daring, jalur: [{ status, sejak, galatPada }], dataRoom, selisihMs, kini, online (jumlah) }
  function teksInfoSambungan(o) {
    o = o || {}; const kini = Number(o.kini) || Date.now();
    const kode = String(o.kode || '').replace(/[^0-9A-Za-z]/g, '');
    const baris = ['Info sambungan MABAR UKP', 'Versi aplikasi: ' + (o.versi || '?'), 'Peramban: ' + (o.peramban || '?')];
    if (o.nama) baris.push('Nama: ' + rapikan(o.nama).slice(0, 24) + (o.peran === 'tuan' ? ' (pemimpin)' : ''));
    baris.push('Room: ' + (kode ? '…' + kode.slice(-4) : 'belum masuk'));
    baris.push('Internet: ' + (o.daring === false ? 'tidak tersambung' : 'tersambung'));
    const jalur = Array.isArray(o.jalur) ? o.jalur : [];
    if (!jalur.length) baris.push('Jalur sambungan: belum dicoba');
    jalur.forEach((j, i) => {
      const ok = j && j.status === 'tersambung'; const t = ok ? j.sejak : j && j.galatPada;
      const kata = ok ? 'tersambung' : j && j.status === 'menyambung' ? 'sedang menyambung' : j && (j.status === 'gagal' || j.galatPada) ? 'gagal' : 'belum tersambung';
      baris.push('Jalur ' + (i + 1) + ': ' + kata + (t ? ' sejak ' + jamMenit(t) : ''));
    });
    baris.push('Data room: ' + (o.dataRoom ? 'sudah diterima' : 'belum diterima'));
    if (typeof o.online === 'number') baris.push('Orang tersambung: ' + o.online);
    const s = Number(o.selisihMs) || 0;
    baris.push('Selisih jam dengan pemimpin: ' + (o.peran === 'tuan' ? 'perangkat ini pemimpin' : !o.dataRoom ? 'belum diketahui' : Math.abs(s) < 1000 ? 'kurang dari 1 detik' : (s > 0 ? 'HP ini lebih lambat ' : 'HP ini lebih cepat ') + Math.round(Math.abs(s) / 1000) + ' detik'));
    baris.push('Jam sekarang: ' + jamMenit(kini) + ' (' + new Date(kini).toISOString().slice(0, 10) + ')');
    return baris.join('\n');
  }

  UI._murni = { rapikanKodeTautan, hashRoomRapi, ringkasPeramban, versiLebihLama, versiAnggotaLama, sebabGagal, teksInfoSambungan, teksLeadGabung, teksUndangan, kelompokJawaban, teksBatang, teksBenarTim, sisaDetik, fmtSisa, pilihKeadaan, keadaanAnggota, teksPenjelas, labelBaku, teksSkorTim, teksSaya, teksSoalIni, teksHitungJawab, teksMasuk, teksSiap, teksBarisLalu, persenTim, sejakLulus, hasilku, rekapPenutup, alasanAwam, inisial, ringkasHadir, tglPendek, teksRiwayat, labelSesiLalu, teksCekSambungan, fmtMSS, teksRingkasWaktu, barisWaktuHP, labelBahas, namaDariProfil, bolehBukaUjian, fmtNaik, teksSisaKop };

  // =====================================================================
  // AKSES AMAN KE UKP.ruang DAN PENYIMPANAN KECIL
  // =====================================================================
  const R = () => { const r = UKP.ruang; return r && fn(r, 'tersedia') && fn(r, 'status') ? r : null; };
  const tersedia = () => { const r = R(); if (!r) return false; try { return !!r.tersedia().tersedia; } catch (e) { return false; } };
  const aman = (f, cad) => { try { const v = f(); return v === undefined ? cad : v; } catch (e) { return cad; } };
  const info = () => { const r = R(); return r ? aman(() => r.info(), null) : null; };
  const stR = () => { const r = R(); return r ? aman(() => r.state(), null) : null; };
  const statusR = () => { const r = R(); return r ? aman(() => r.status(), null) : null; };
  const selisih = () => { const r = R(); return r && fn(r, 'selisihJam') ? aman(() => r.selisihJam(), 0) || 0 : 0; };
  const belumAdaJam = () => { const r = R(); return !!(r && fn(r, 'adaSampelJam') && !aman(() => r.adaSampelJam(), true)); };   // v9.5 FC5
  const onlineKini = () => { const s = statusR(); return s && Array.isArray(s.online) ? s.online : []; };
  const jawabanSemua = id => { const r = R(); return r && fn(r, 'jawabanSemua') ? aman(() => r.jawabanSemua(id), {}) || {} : {}; };
  const lsBaca = (k, cad) => { try { const v = root.localStorage.getItem(k); return v == null ? cad : JSON.parse(v); } catch (e) { return cad; } };
  const lsTulis = (k, v) => { try { if (v == null) root.localStorage.removeItem(k); else root.localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const KBUKAN = 'ukp.tim.bukanSaya';   // v9.3.2: { kodeRoom: 1 } room yang pernah "Bukan Anda? Ganti nama" di perangkat ini
  const KUJIAN_OTO = 'ukp.tim.ujianOto'; // v9.3.2: [ujianId] ujian tim yang sudah dibuka sendiri di tab ini (sessionStorage)
  // v9.4 Kb3: salinan di memori agar rekap penutup tetap tampil saat sessionStorage menolak menulis (mode privat Safari lama, penyimpanan penuh)
  const ssMem = new Map();
  const ssBaca = (k, cad) => { if (ssMem.has(k)) return JSON.parse(ssMem.get(k)); try { const v = root.sessionStorage.getItem(k); return v == null ? cad : JSON.parse(v); } catch (e) { return cad; } };
  const ssTulis = (k, v) => { ssMem.set(k, JSON.stringify(v)); try { root.sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const hariIni = () => (UKP.util && UKP.util.hariIni ? UKP.util.hariIni() : new Date().toISOString().slice(0, 10));
  const pesertaRoom = st => (st && st.room && Array.isArray(st.room.peserta) ? st.room.peserta : []);
  const namaPemimpin = st => (st && st.tuan) || 'pemimpin';
  const versiBeda = () => {
    const s = statusR(); if (s && typeof s.versiBeda === 'boolean') return s.versiBeda;
    const st = stR(); return !!(st && st.versiApp && UKP.versi && st.versiApp !== UKP.versi);
  };
  // hadir().siap: boolean (js/ruang.js v8.2 B0: siapId cocok dengan lobi) atau id lobi (kontrak K6)
  const siapDi = (x, lobiId) => !!(x && lobiId && (x.siap === true || x.siap === lobiId || x.siapId === lobiId));
  const toast = (teks, opsi) => { try { UKP.toast(teks, opsi); } catch (e) {} };

  // draf jawaban sendiri (bertahan saat muat ulang): ukp.tim.draf = { a: aktivitasId, j: { soalId: { o, k, w } } }
  const KD = 'ukp.tim.draf';
  function bacaDraf(aid) { const d = lsBaca(KD, null); return d && d.a === aid && isObj(d.j) ? d.j : {}; }
  function tulisDraf(aid, sid, v) { const d = lsBaca(KD, null); const j = d && d.a === aid && isObj(d.j) ? d.j : {}; j[sid] = v; lsTulis(KD, { a: aid, j }); }
  // jawaban sendiri untuk satu soal: draf lokal lebih dulu, lalu dokumen di room
  function jawabanSaya(a, sid) {
    const d = bacaDraf(a.id)[sid]; if (d && d.o) return { o: d.o, k: d.k || null, w: d.w || null, sumber: 'draf' };
    const nm = (info() || {}).nama; const dok = ambilDari(jawabanSemua(a.id), nm);
    if (dok && isObj(dok.j) && dok.j[sid]) return { o: dok.j[sid], k: (dok.k || {})[sid] || null, w: null, sumber: 'room' };
    return null;
  }
  // V10 temuan 10: bila aktivitas.peserta ada, hanya nama di daftar itu yang dihitung (pembilang sejalan dengan penyebut)
  function nDijawab(a, sid) {
    const semua = jawabanSemua(a.id); const nm = (info() || {}).nama; let n = 0; let adaSaya = false;
    const pes = Array.isArray(a.peserta) && a.peserta.length ? a.peserta : null;
    const ikut = x => !pes || pes.some(p => samaNama(p, x));
    Object.keys(semua).forEach(x => { const d = semua[x]; if (d && isObj(d.j) && d.j[sid] && ikut(x)) { n++; if (samaNama(x, nm)) adaSaya = true; } });
    const d = bacaDraf(a.id)[sid]; if (!adaSaya && d && d.o && ikut(nm)) n++;
    return n;
  }
  // soal yang sudah dicatat ke Kemajuan pribadi: ukp.tim.tercatat = { a, ids: { soalId: b }, tim: [{ ke, benar, dijawab }] }
  const KT = 'ukp.tim.tercatat';
  function bacaTercatat(aid) { const t = lsBaca(KT, null); return t && t.a === aid ? { a: aid, ids: isObj(t.ids) ? t.ids : {}, tim: Array.isArray(t.tim) ? t.tim : [] } : { a: aid, ids: {}, tim: [] }; }

  // =====================================================================
  // DUA TAB DI PERANGKAT YANG SAMA
  // =====================================================================
  const KUNCI_TAB = 'ukp.tim.tab';
  let tabId = null, tabKedua = false, tabHilang = false, tDetakTab = null;
  let memulihkan = false, kodeSimpanBoot = null;   // v9.4 FB2: boot sedang menunda pemulihan room; kode room tersimpan saat boot
  const TUNDA_PULIH_MS = 1500;
  function idTab() {
    if (tabId) return tabId;
    tabId = ssBaca('ukp.tim.tabId', null);
    if (!tabId) { tabId = 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); ssTulis('ukp.tim.tabId', tabId); }
    return tabId;
  }
  function kunciTabLain() { const k = lsBaca(KUNCI_TAB, null); return !!(k && k.id && k.id !== idTab() && Date.now() - Number(k.t) < 15000); }
  function klaimTab() {
    tabKedua = false; tabHilang = false; lsTulis(KUNCI_TAB, { id: idTab(), t: Date.now() });
    clearInterval(tDetakTab);
    tDetakTab = setInterval(() => {
      const k = lsBaca(KUNCI_TAB, null);
      if (k && k.id && k.id !== idTab()) { kehilanganTab(); return; }
      lsTulis(KUNCI_TAB, { id: idTab(), t: Date.now() });
    }, 5000);
  }
  // V3: tab lain di perangkat ini mengambil room → tab ini berhenti tersambung (UKP.ruang.jeda) agar tidak ada dua klien bernama sama
  function kehilanganTab() {
    if (tabHilang) return;
    clearInterval(tDetakTab); tabHilang = true; tabKedua = true;
    const r = R(); if (r && fn(r, 'jeda')) { try { r.jeda(); } catch (e) {} }
    pasangSpanduk(); beriTahu('tab');
  }
  function lepasTab() { clearInterval(tDetakTab); const k = lsBaca(KUNCI_TAB, null); if (k && k.id === idTab()) lsTulis(KUNCI_TAB, null); }

  // =====================================================================
  // BOOT DAN PENGAMAT GLOBAL
  // =====================================================================
  let sudahBoot = false, pengamatTerpasang = false;
  let putusSejak = null, tersambungSejak = null, tuanHilangSejak = null;
  let stateLama = null, menutupSendiri = false, ditutupPemimpin = false; // kritik: anggota yang room-nya ditutup tidak dilempar ke "Buat room tim"
  const pendengarLokal = new Set(); // komponen yang ingin diberi tahu (view room, kartu, status)
  const beriTahu = jenis => pendengarLokal.forEach(f => { try { f(jenis); } catch (e) {} });
  function dengar(f) { pendengarLokal.add(f); return () => pendengarLokal.delete(f); }
  const selesaiTerakhir = () => ssBaca('ukp.tim.selesai', null);

  UI.boot = function () {
    if (sudahBoot) return; sudahBoot = true;
    const r = R(); if (!r) return;
    idTab();
    let kodeHash = null;
    try { const rute = UKP.ruteDariHash ? UKP.ruteDariHash(location.hash) : null; if (rute && rute.view === 'room' && rute.params && rute.params.kode && fn(r, 'normalKode')) kodeHash = r.normalKode(rapikanKodeTautan(rute.params.kode)); } catch (e) {}
    const simpan = aman(() => UKP.store.get().ruang, null);
    const kodeLain = !!(kodeHash && simpan && simpan.kode && simpan.kode !== kodeHash);
    // v9.4 FB2 (memperbaiki Ka2): hanya perangkat ANGGOTA yang tabnya dibuka di layar room (tautan yang baru diketuk) mengambil room dari
    // tab lain; tab lain itu mendapat spanduk "Room sekarang dipakai di tab lain". Perangkat pemimpin kembali ke perilaku v9.3.2: tab
    // kedua berhenti di "Room terbuka di tab lain" dengan tombol "Pakai room di tab ini", supaya papan latihan atau ujian tim yang sedang
    // berjalan di tab pertama tidak kehilangan sambungan.
    let viewAwal = null; try { const ru = UKP.ruteDariHash ? UKP.ruteDariHash(location.hash) : null; viewAwal = ru ? ru.view : null; } catch (e) {}
    const tersembunyi = !!(typeof document !== 'undefined' && document.hidden);
    const perangkatTuan = !!(simpan && simpan.peran === 'tuan');
    const tabIniDiRoom = !perangkatTuan && viewAwal === 'room' && !kodeLain && !tersembunyi;
    if (simpan && simpan.kode && kunciTabLain() && !tabIniDiRoom) tabKedua = true;
    kodeSimpanBoot = simpan && simpan.kode && fn(r, 'normalKode') ? r.normalKode(simpan.kode) : null;
    // v9.4 FB2 (balapan dua tab): tab anggota yang BUKAN di layar room, atau sedang tersembunyi, menunda pemulihan sekitar 1,5 detik
    // lalu memeriksa ulang kunci tab, supaya tab tautan yang dimuat hampir bersamaan tidak ditimpa. Perangkat pemimpin tidak menunda
    // (tidak ada pengambilalihan yang perlu dilindungi; papan yang dimuat ulang tersambung secepatnya).
    const tundaPulih = !perangkatTuan && !tabIniDiRoom;
    if (!tabKedua && !kodeLain && tersedia()) {
      if (tundaPulih && simpan && simpan.kode) {
        memulihkan = true;
        setTimeout(() => {
          memulihkan = false;
          if (!info() && !tabKedua) {
            if (kunciTabLain()) tabKedua = true;
            else { try { if (r.pulihkan()) klaimTab(); } catch (e) { console.error(e); } }
          }
          beriTahu('tab'); pasangSpanduk(); setelahPulih(false);
        }, TUNDA_PULIH_MS);
      } else { try { if (r.pulihkan()) klaimTab(); } catch (e) { console.error(e); } }
    }
    pasangPengamat();
    stateLama = stR(); catatPernahTuan();
    try { root.addEventListener('pagehide', lepasTab); } catch (e) {}
    try { root.addEventListener('storage', e => {
      if (e.key !== KUNCI_TAB) return;
      if (tabKedua && !e.newValue) beriTahu('tab');
      // V3: tab lain baru saja mengambil kunci tab → lepaskan sekarang (tidak menunggu detak 5 dtk)
      let k = null; try { k = JSON.parse(e.newValue || 'null'); } catch (x) {}
      if (k && k.id && k.id !== idTab() && tDetakTab && !tabHilang && info()) kehilanganTab();
    }); } catch (e) {}
    try { document.addEventListener('ukp:render', pasangSpanduk); } catch (e) {}
    setelahPulih(true);
    pasangSpanduk();
  };
  function setelahPulih(awal) {
    const v = UKP.sekarang ? UKP.sekarang().view : null;
    if (awal && v === 'room') { try { UKP.render(); } catch (e) {} }
    // anggota membuka aplikasi saat aktivitas berjalan
    const i = info(); const st = stR();
    if (i && i.peran === 'anggota' && st && st.aktivitas && v !== 'room') ajakBuka(st.aktivitas, true);
  }
  // v9.3.2: aman membawa anggota ke room tanpa ditanya: ia tidak sedang mengerjakan soal atau simulasi, tidak ada dialog terbuka,
  // dan ia tidak sedang mengetik
  function amanPindahKeRoom() {
    try {
      if (UKP.simulasiBerjalan && UKP.simulasiBerjalan()) return false;
      if (UKP.mode && UKP.mode.aktif && UKP.mode.aktif()) return false;
      if (document.querySelector('dialog[open]')) return false;
      const ae = document.activeElement; if (ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)) return false;
    } catch (e) { return false; }
    return true;
  }
  function ajakBuka(a, berjalan) {
    const teks = a.jenis === 'ujian' ? (berjalan ? 'Ujian tim sedang berjalan' : 'Pemimpin memulai ujian tim') : (berjalan ? 'Latihan bersama sedang berjalan' : 'Pemimpin memulai latihan bersama');
    // pemimpin BARU SAJA memulai dan anggota sedang di halaman lain: langsung ke room (di sana soal latihan muncul sendiri dan ujian
    // tim terbuka sendiri). Aktivitas yang sudah berjalan saat anggota datang tetap hanya ditawarkan.
    if (!berjalan && amanPindahKeRoom()) { toast(teks + '.', { penting: true, lintasRute: true, ms: 5000 }); try { UKP.go('room'); } catch (e) {} return; }
    toast(teks, { aksi: { label: 'Buka', onclick: () => UKP.go('room') }, penting: true, lintasRute: true, ms: 20000 });
  }
  function pasangPengamat() {
    const r = R(); if (!r || pengamatTerpasang || !fn(r, 'on')) return; pengamatTerpasang = true;
    r.on('status', st => {
      const kini = Date.now();
      if (st && st.tersambung) { putusSejak = null; if (!tersambungSejak) tersambungSejak = kini; }
      else { tersambungSejak = null; if (info() && !putusSejak) putusSejak = kini; }
      const s = stR();
      if (s && s.tuan && st && st.tersambung) { const ada = (st.online || []).some(n => samaNama(n, s.tuan)); if (ada) tuanHilangSejak = null; else if (!tuanHilangSejak) tuanHilangSejak = kini; }
      cekLengkap(st); periksaTamu();
      beriTahu('status');
    });
    r.on('state', s => { transisi(stateLama, s); stateLama = s; catatKemajuan(s); catatLalu(s); catatPernahTuan(); pasangSpanduk(); beriTahu('state'); });
    r.on('hadir', ev => { sambut(ev); if (ev && ev.online) periksaTamu(); pasangSpanduk(); beriTahu('hadir'); });
    r.on('jawaban', () => beriTahu('jawaban'));
    r.on('indeks', () => beriTahu('indeks'));
    r.on('sesi', () => beriTahu('sesi'));
    r.on('peran', () => beriTahu('peran'));
    r.on('tutup', ev => {
      if (!menutupSendiri) ditutupPemimpin = true;
      if (!menutupSendiri && !(stateLama && stateLama.ditutup)) toast('Room ditutup oleh pemimpin. Minta tautan baru bila perlu.', { lintasRute: true, penting: true });
      stateLama = null; lepasTab(); beriTahu('status');
    });
  }
  function transisi(lama, baru) {
    const i = info(); if (!i || !baru) return;
    if (baru.ditutup && !(lama && lama.ditutup)) { if (!menutupSendiri) ditutupPemimpin = true; toast('Room ditutup oleh pemimpin. Minta tautan baru bila perlu.', { lintasRute: true, penting: true }); lepasTab(); return; }
    if (lama && lama.tuan && baru.tuan && !samaNama(lama.tuan, baru.tuan)) toast(samaNama(baru.tuan, i.nama) ? 'Anda sekarang memimpin room.' : baru.tuan + ' sekarang memimpin room', { lintasRute: true, penting: true });
    const aL = lama && lama.aktivitas, aB = baru.aktivitas;
    if (aB && (!aL || aL.id !== aB.id) && i.peran === 'anggota') {
      const v = UKP.sekarang ? UKP.sekarang().view : null;
      const simTim = v === 'simulasi' && aman(() => { const sa = UKP.store.get().simulasiAktif; return !!(sa && !sa.selesai && sa.tim); }, false);
      if (v !== 'room' && !simTim) ajakBuka(aB, false);
    }
    if (aL && (!aB || aB.id !== aL.id)) ssTulis('ukp.tim.selesai', { id: aL.id, jenis: aL.jenis, t: Date.now(), n: Array.isArray(aL.soalIds) ? aL.soalIds.length : null });
  }
  // sambutan T3 (v9.2): pemimpin mendapat "Jeni bergabung" satu kali per orang per hari di tab ini; HP anggota tidak diberi toast
  // untuk orang lain (daftar "Sudah masuk" di lobi sudah cukup), kecuali saat pemimpin datang setelah anggota itu masuk.
  // Banjir kehadiran saat baru tersambung (orang yang sudah ada) diabaikan.
  function sambut(ev) {
    const i = info(); if (!i || !ev || !ev.online || samaNama(ev.nama, i.nama)) return;
    const kunci = i.kode + ':' + hariIni();
    const d = ssBaca('ukp.tim.sambut', {}); const daftar = Array.isArray(d[kunci]) ? d[kunci] : [];
    const kn = kunciNama(ev.nama); if (daftar.includes(kn)) return;
    daftar.push(kn); ssTulis('ukp.tim.sambut', { [kunci]: daftar });
    if (!tersambungSejak || Date.now() - tersambungSejak < 12000) return;
    const s = stR();
    // v9.2 V8: hanya nama yang sudah ada di daftar room (dan sah). Nama di luar daftar ditangani "Ingin ikut" (Tambahkan/Abaikan);
    // "Zaki bergabung" untuk orang yang belum disetujui menyesatkan dan melewati daftar abaikan.
    if (i.peran === 'tuan') { if (namaSah(ev.nama) && pesertaRoom(s).some(p => samaNama(p, ev.nama))) toast(rapikan(ev.nama) + ' bergabung', { nada: 'info', ms: 3500 }); }
    else if (s && samaNama(ev.nama, s.tuan) && !s.aktivitas) toast(rapikan(ev.nama) + ' sudah membuka room.', { nada: 'info', ms: 4000 });
  }
  // C.3 v9.2 (V10 temuan 2, 3, 9): nama online di luar daftar room TIDAK ditambahkan otomatis. Di perangkat pemimpin nama itu menjadi
  // "ingin ikut" (lobi: Tambahkan / Abaikan; di luar lobi: toast satu kali per nama, paling sering tiap 20 dtk). Nama yang diabaikan atau
  // dihapus lewat Ubah room tidak ditawarkan lagi di tab ini (sessionStorage per kode). Paling banyak 8 nama menunggu; hanya nama sah.
  const KA = 'ukp.tim.abaikan';
  const bacaAbaikan = kode => { const d = ssBaca(KA, {}) || {}; return Array.isArray(d[kode]) ? d[kode] : []; };
  function abaikanNama(kode, nama) { if (!kode || !nama) return; const d = ssBaca(KA, {}) || {}; const arr = Array.isArray(d[kode]) ? d[kode] : []; const k = kunciNama(nama); if (!arr.includes(k)) arr.push(k); d[kode] = arr.slice(-64); ssTulis(KA, d); }
  // nama sah menurut validator room (js/ruang.js _protokol.validNama); cadangan aturan dasar bila modul lama
  function namaSah(n) {
    const r = R(); const P = r && r._protokol;
    if (P && typeof P.validNama === 'function') { try { return !!P.validNama(n); } catch (e) { return false; } }
    return typeof n === 'string' && n.length >= 1 && n.length <= 24 && n === n.trim() && !/[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁯﻿]/.test(n);
  }
  const MAKS_TUNGGU = 8;
  const calonTamu = new Map();   // kunciNama → nama (urut datang)
  const sudahToastTamu = new Set(); let kodeTamu = null, toastTamuTerakhir = 0;
  function periksaTamu() {
    const i = info(); if (!i || i.peran !== 'tuan') return;
    if (kodeTamu !== i.kode) { kodeTamu = i.kode; calonTamu.clear(); sudahToastTamu.clear(); }
    const on = onlineKini();
    if (!on.length && !calonTamu.size) return;
    const s = stR(); if (!s || !s.room) return;   // state dibaca sekali, di luar loop
    const pes = pesertaRoom(s); const abaikan = bacaAbaikan(i.kode);
    const adaDi = (arr, n) => arr.some(x => samaNama(x, n));
    let berubah = false;
    calonTamu.forEach((n, k) => { if (!adaDi(on, n) || adaDi(pes, n) || abaikan.includes(k)) { calonTamu.delete(k); berubah = true; } });
    for (const n of on) {
      const k = kunciNama(n);
      if (calonTamu.has(k) || abaikan.includes(k)) continue;
      if (calonTamu.size >= MAKS_TUNGGU) break;
      if (samaNama(n, i.nama) || adaDi(pes, n) || !namaSah(n)) continue;
      calonTamu.set(k, n); berubah = true;
    }
    // di luar lobi (mis. papan sedang tampil): toast satu kali per nama, paling sering satu tiap 20 dtk
    const v = UKP.sekarang ? UKP.sekarang().view : null;
    if (calonTamu.size && (v !== 'room' || s.aktivitas) && Date.now() - toastTamuTerakhir >= 20000) {
      const n = Array.from(calonTamu.values()).find(x => !sudahToastTamu.has(kunciNama(x)));
      if (n) { sudahToastTamu.add(kunciNama(n)); toastTamuTerakhir = Date.now(); toast(n + ' ingin ikut.', { aksi: { label: 'Tambahkan', onclick: () => tambahkanTamu(n) }, penting: true, lintasRute: true, ms: 9000 }); }
    }
    return berubah;
  }
  const daftarCalonTamu = () => Array.from(calonTamu.values());
  function tambahkanTamu(nama) {
    const i = info(); const s = stR(); const r = R(); nama = rapikan(nama);
    if (!i || i.peran !== 'tuan' || !s || !s.room || !r || !fn(r, 'aturRoom') || !namaSah(nama)) return false;
    const pes = pesertaRoom(s);
    if (!pes.some(p => samaNama(p, nama))) {
      if (pes.length >= 12) { toast('Daftar tim sudah penuh (12 nama). Hapus satu nama lewat menu Ubah room.', { nada: 'warn', penting: true, ms: 8000 }); return false; }
      const ok = aman(() => r.aturRoom({ peserta: pes.concat([nama]) }), false);
      if (!ok) { toast('Nama belum bisa ditambahkan. Coba lagi saat tersambung.', { nada: 'warn' }); return false; }
      toast(nama + ' ditambahkan ke daftar tim', { nada: 'ok', ms: 4000 });
    }
    calonTamu.delete(kunciNama(nama)); beriTahu('tamu'); return true;
  }
  function abaikanTamu(nama) { const i = info(); if (!i) return; abaikanNama(i.kode, nama); calonTamu.delete(kunciNama(nama)); beriTahu('tamu'); }
  // anggota yang pernah memimpin room ini (menu "Pimpin dari perangkat ini" tetap tampil untuknya)
  function catatPernahTuan() { const i = info(); if (!i || i.peran !== 'tuan' || !i.kode) return; const d = lsBaca('ukp.tim.pernahTuan', {}) || {}; if (d[i.kode]) return; d[i.kode] = 1; lsTulis('ukp.tim.pernahTuan', d); }
  // kehadiran bisa menjadi basi tanpa peristiwa apa pun (detak berhenti), jadi status pemimpin dihitung ulang di sini juga
  const pemimpinHilang = () => {
    const s = stR(); const st = statusR(); if (!(s && s.tuan && st && st.tersambung)) return false;
    if (onlineKini().some(n => samaNama(n, s.tuan))) { tuanHilangSejak = null; return false; }
    if (!tuanHilangSejak) tuanHilangSejak = Date.now();
    return Date.now() - tuanHilangSejak > 60000;
  };
  const pernahTuan = () => { const i = info(); return !!(i && i.kode && (lsBaca('ukp.tim.pernahTuan', {}) || {})[i.kode]); };
  // B.7 v9.2: soal yang kunci jawabannya sudah dibuka di latihan ini, untuk lembar "Soal sebelumnya" di HP anggota (tanpa nama siapa pun)
  // sessionStorage ukp.tim.lalu = { a: aktivitasId, s: { soalId: { idx, kunci, o, k, benar, salah, kosong } } }
  const KL = 'ukp.tim.lalu';
  function bacaLalu(aid) { const d = ssBaca(KL, null); return d && d.a === aid && isObj(d.s) ? d.s : {}; }
  function catatLalu(s) {
    const i = info(); if (!i || i.peran !== 'anggota' || !s || !s.aktivitas) return;
    const a = s.aktivitas; if (a.jenis !== 'latihan' || a.fase !== 'kunci' || !a.hasilSoal || !a.hasilSoal.soalId) return;
    const sid = a.hasilSoal.soalId; const soal = K && fn(K, 'soal') ? K.soal(sid) : null; const kunci = soal ? soal.kunci : null;
    const per = isObj(a.hasilSoal.per) ? a.hasilSoal.per : {}; const kel = kelompokJawaban(per, kunci, s.tuan);
    const dariPer = ambilDari(per, i.nama); const draf = bacaDraf(a.id)[sid];
    const o = dariPer && HURUF.includes(String(dariPer.o).toUpperCase()) ? String(dariPer.o).toUpperCase() : null;
    const k = o ? (dariPer.k || (draf && draf.o === o ? draf.k : null) || null) : null;
    const semua = bacaLalu(a.id);
    semua[sid] = { idx: Number(a.idx) || 0, kunci, o, k, benar: kel.benar, salah: Math.max(0, kel.dijawab - kel.benar), kosong: Math.max(0, kel.total - kel.dijawab) };
    ssTulis(KL, { a: a.id, s: semua });
  }
  function cekLengkap(st) {
    const i = info(); const s = stR(); if (!i || !s || !st || !st.tersambung) return;
    if (i.peran !== 'tuan' || s.aktivitas) return;   // v9.2: hanya di lobi pemimpin (HP anggota tidak perlu toast ini di tengah soal)
    const pes = pesertaRoom(s); if (pes.length < 2) return;
    if (!pes.every(p => (st.online || []).some(n => samaNama(n, p)))) return;
    const k = i.kode + ':' + hariIni(); if (lsBaca('ukp.tim.lengkap', null) === k) return;
    lsTulis('ukp.tim.lengkap', k); toast('Tim lengkap hari ini', { nada: 'ok', ms: 4000 });
  }
  // rencana 4.4: jawaban anggota masuk Kemajuan pribadinya sekali per soal saat kunci dibuka
  function catatKemajuan(s) {
    const i = info(); if (!i || i.peran !== 'anggota' || !s || !s.aktivitas) return;
    const a = s.aktivitas; if (a.jenis !== 'latihan' || a.fase !== 'kunci' || !a.hasilSoal) return;
    const sid = a.hasilSoal.soalId; const t = bacaTercatat(a.id);
    if (a.tim && typeof a.tim.dijawab === 'number' && !t.tim.some(x => x.ke === a.idx + 1)) t.tim.push({ ke: a.idx + 1, benar: a.tim.benar, dijawab: a.tim.dijawab });
    if (Object.prototype.hasOwnProperty.call(t.ids, sid)) { lsTulis(KT, t); return; }
    // v9.5 buku pemakaian: kunci soal ini sudah dibuka di HP anggota (sekali per soal) = dibahas bersama
    if (typeof sid === 'string' && L && L.pakai && fn(L.pakai, 'catat')) { try { L.pakai.catat(sid, 'bersama'); } catch (e) { console.error(e); } }
    const soal = K && K.soal ? K.soal(sid) : null;
    const dariPer = ambilDari(a.hasilSoal.per, i.nama); const draf = bacaDraf(a.id)[sid];
    const o = dariPer && dariPer.o ? dariPer.o : draf && draf.o ? draf.o : null;
    const k = dariPer && dariPer.k ? dariPer.k : draf && draf.k ? draf.k : null;
    // V3: '-' tanpa pilihan sendiri (tidak mengetuk apa pun, atau jawaban telat) bukan "salah" di Kemajuan pribadi maupun di "Anda x/y";
    // "Tidak tahu" yang diketuk sendiri tetap dicatat seperti v8.1
    const dokS = ambilDari(jawabanSemua(a.id), i.nama);
    const pilihSendiri = !!((draf && draf.o === '-') || (dokS && isObj(dokS.j) && dokS.j[sid] === '-'));
    if (o === '-' && !pilihSendiri) { t.ids[sid] = null; lsTulis(KT, t); return; }
    // v9.2 V8: pemimpin mengirim jawaban per orang (per) tetapi nama ini tidak ada di dalamnya → jawaban ini tidak dihitung tim
    // (nama di luar daftar latihan). "Anda benar x dari y" tidak boleh menghitungnya; Kemajuan pribadi tetap dicatat dari draf.
    const tidakDihitung = isObj(a.hasilSoal.per) && Object.keys(a.hasilSoal.per).length > 0 && !dariPer;
    t.ids[sid] = !tidakDihitung && o && soal ? (o === soal.kunci ? 1 : 0) : null;
    lsTulis(KT, t);
    if (!o || !soal || !fn(L, 'catatJawaban')) return;
    const mulai = Number(a.mulaiSoal) || 0; const w = draf && draf.w ? draf.w + selisih() : 0;
    const detik = mulai && w > mulai ? Math.min(3600, (w - mulai) / 1000) : 0;
    // v9.5: jawaban di room dicatat sebagai latihan bersama di buku pemakaian, bukan latihan sendiri
    const catatJ = () => L.catatJawaban(soal, o, detik, 'latih');
    try { if (L.pakai && fn(L.pakai, 'sebagai')) L.pakai.sebagai('bersama', catatJ); else catatJ(); if (k && o !== '-' && fn(L, 'aturKeyakinan')) L.aturKeyakinan(soal.id, 'latih', k); } catch (e) { console.error(e); }
  }
  UI._catatKemajuan = catatKemajuan;  // v9.5: untuk uji perilaku titik catat anggota room (test/v950.test.js)
  // spanduk versi berbeda (U7.2) dan tab lain, di puncak halaman yang sedang tampil
  function pasangSpanduk() {
    let page = null; try { page = document.querySelector('#main > .page'); } catch (e) { return; }
    if (!page) return;
    const lama = page.querySelector(':scope > [data-spanduk-room]');
    const i = info();
    // V10 temuan 7: nama ini juga dipakai perangkat lain (hadir().ganda dari js/ruang.js), hanya di HP anggota
    let ganda = false;
    if (i && i.peran !== 'tuan' && !tabHilang && !versiBeda()) { const r = R(); const hd = r && fn(r, 'hadir') ? aman(() => ambilDari(r.hadir(), i.nama), null) : null; ganda = !!(hd && hd.ganda); }
    const jenis = tabHilang ? 'tab' : !i ? '' : versiBeda() ? 'versi' : ganda ? 'ganda' : '';
    if (lama && lama.getAttribute('data-spanduk-room') === jenis && lama.parentNode === page) return;   // tidak digambar ulang tanpa perubahan
    if (lama) lama.remove();
    if (!jenis) return;
    let b = null;
    if (jenis === 'ganda') b = UKP.c.banner('Nama Anda juga dipakai di perangkat lain. Bila itu bukan Anda, beri tahu ' + namaPemimpin(stR()) + '.', 'warn');
    else if (tabHilang) b = UKP.c.banner('Room sekarang dipakai di tab lain. Tutup tab ini, atau pakai room di sini.', 'warn', null,
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { const r = R(); klaimTab(); try { if (r) r.pulihkan(); } catch (e) {} pasangSpanduk(); beriTahu('tab'); } }, 'Pakai di tab ini')));
    else if (versiBeda()) {
      cekVersiSekali();   // versi berbeda dengan pemimpin: cek versi baru sekarang; dipasang sendiri saat aman
      const st = stR(); const vp = st && st.versiApp ? st.versiApp : '?';
      b = UKP.c.banner('Versi aplikasi Anda (' + (UKP.versi || '?') + ') berbeda dengan pemimpin (' + vp + '). Muat ulang agar soal sama.', 'warn', null,
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: muatUlangVersi }, UKP.icon('atur-ulang', null, true), 'Muat ulang')));
    }
    if (!b) return;
    b.setAttribute('data-spanduk-room', jenis);
    const bar = page.querySelector(':scope > .fokus-bar');
    if (bar) bar.after(b); else page.prepend(b);
  }

  // =====================================================================
  // KOMPONEN KECIL
  // =====================================================================
  const titik = (nada, label) => h('span', { class: 'titik-room', 'data-nada': nada || null, role: label ? 'img' : null, 'aria-label': label || null, 'aria-hidden': label ? null : 'true' });
  function hapusBila(el, lepas) {
    // pelepas otomatis: dipanggil di setiap pemberitahuan; elemen yang pernah terpasang lalu terlepas → berhenti mendengar
    let pernah = false;
    return () => { if (el.isConnected) { pernah = true; return false; } if (pernah) { lepas(); return true; } return false; };
  }
  // U6: satu titik + "Tersambung" / "Menyambung ulang…"; putus > 60 dtk → kalimat cadangan
  UKP.c.statusRoom = function (o) {
    o = o || {}; const ringkas = !!o.ringkas;
    const el = h('span', { class: 'status-room' + (ringkas ? ' ringkas' : ''), role: 'status' });
    // v9.4.1: isi yang sama tidak ditulis ulang. Kabar hadir (pemimpin tiap 5 dtk, tiap anggota tiap 30 dtk) memanggil isi(); mengganti
    // isi wilayah role=status dengan teks yang sama membuat pembaca layar membacakannya lagi dan peramban menata ulang tanpa perlu.
    let tandaLalu = null;
    function isi() {
      const st = statusR(); const i = info(); const s = stR();
      let nada = 'mati', teks = '', ekstra = null;
      if (!R() || !tersedia()) { teks = 'Room tidak tersedia di halaman ini'; }
      else if (!i) { teks = 'Belum masuk room'; }
      else if (st && st.tersambung) {
        // v9.2: cukup "Tersambung" (jumlah yang sudah masuk ada di kartu lobi)
        nada = 'ok'; teks = 'Tersambung';
      } else {
        const lama = putusSejak ? Date.now() - putusSejak : 0;
        if (lama > 60000) {
          nada = 'attn';
          if (ringkas) teks = 'Tidak tersambung';
          else {
            const tuan = s && s.tuan && i.peran !== 'tuan' ? s.tuan : null;
            teks = i.peran === 'tuan' ? 'Perangkat ini terputus dari room. Latihan tetap bisa lanjut di sini.' : 'HP ini terputus dari room. Latihan tetap berjalan di laptop ' + (tuan || 'pemimpin') + '.';
            if (s && s.aktivitas && s.aktivitas.jenis === 'ujian' && i.peran !== 'tuan') ekstra = h('button', { type: 'button', class: 'btn btn-ghost btn-text btn-sm rata tautan-status', onclick: () => UKP.go('simulasi', { jalan: true }) }, 'Pakai kode jawaban');
          }
        } else { nada = 'warn'; teks = 'Menyambung ulang…'; }
      }
      const tanda = nada + '|' + teks + '|' + (ekstra ? 1 : 0);
      if (tanda === tandaLalu) return;
      tandaLalu = tanda;
      el.dataset.nada = nada; el.title = ringkas ? teks : '';
      el.replaceChildren(titik(nada), h('span', { class: 'status-room-teks' }, teks), ekstra);
    }
    isi();
    let lepas1 = null, t = null;
    const lepas = () => { if (lepas1) lepas1(); clearInterval(t); };
    const cek = hapusBila(el, lepas);
    lepas1 = dengar(j => { if (cek()) return; if (j === 'status' || j === 'state' || j === 'hadir' || j === 'peran') isi(); });
    t = setInterval(() => { if (cek()) return; if (putusSejak) isi(); }, 5000);
    return el;
  };
  // T1 (v9.2 satu cara hitung): "Skor tim 68% · 41 dari 60 jawaban benar" dengan garis berketerangan "batas lulus 60%";
  // opsi = { saya: { benar, dijawab } → "Anda benar 1 dari 2 soal", sejak, batas }. Dipakai juga papan pemimpin dan evaluasi.
  UKP.c.skorTim = function (tim, opsi) {
    opsi = opsi || {}; const p = persenTim(tim); if (p == null) return null;
    const batas = Number(opsi.batas) || L.BATAS_LULUS || 60;
    const teks = teksSkorTim(tim);
    const bar = h('div', { class: 'skor-tim-bar', role: 'img', 'aria-label': teks + ', batas lulus ' + batas + '%' }, h('span', { class: 'isi' }), h('span', { class: 'garis', 'aria-hidden': 'true' }));
    bar.style.setProperty('--p', String(Math.min(100, Math.max(0, p)))); bar.style.setProperty('--garis', String(batas));
    const batasEl = h('span', { class: 'skor-tim-batas', 'aria-hidden': 'true' }, 'batas lulus ' + batas + '%');
    batasEl.style.setProperty('--garis', String(batas));
    const saya = opsi.saya ? teksSaya(opsi.saya) : '';
    return h('div', { class: 'skor-tim', 'data-di-atas': p >= batas ? '' : null },
      h('p', { class: 'skor-tim-teks' }, h('strong', null, teks)),
      bar, batasEl,
      opsi.sejak ? h('p', { class: 'skor-tim-sejak small' }, 'Tim di atas batas lulus sejak soal ' + opsi.sejak) : null,
      saya ? h('p', { class: 'skor-tim-saya' }, saya) : null);
  };
  // T3: deretan inisial + nama anggota (hijau = sudah masuk), dengan keterangan warna
  function barisInisial(st) {
    const pes = pesertaRoom(st); const on = onlineKini();
    if (!pes.length) return null;
    const tuan = st && st.tuan;
    const i = info(); const r = R(); const hd = i && i.peran === 'tuan' && r && fn(r, 'hadir') ? aman(() => r.hadir(), {}) || {} : {};
    // v9.4 Ka3: di laptop pemimpin, anggota yang memakai versi aplikasi lebih lama ditandai "versi lama" dengan saran singkat
    let adaLama = false; const vh = i && i.peran === 'tuan' && r && fn(r, 'versiHadir') ? aman(() => r.versiHadir(), {}) || {} : {};
    const daftarLi = pes.map(n => {
      const ada = on.some(x => samaNama(x, n)); const x = ambilDari(hd, n); const dua = !!(x && x.ganda);
      const lama = !!(i && i.peran === 'tuan' && ada && !samaNama(n, tuan) && versiAnggotaLama({ online: ada, versiApp: ambilDari(vh, n) }, UKP.versi)); if (lama) adaLama = true;
      return h('li', { 'data-on': ada ? '' : null, 'data-versi-lama': lama ? '' : null, title: n + (ada ? ' · sudah masuk' : ' · belum masuk room') + (lama ? ' · versi lama' : '') }, h('span', { class: 'bulat', 'aria-hidden': 'true' }, inisial(n)),
        h('span', { class: 'nama' }, n + (samaNama(n, tuan) ? ' (pemimpin)' : '')), dua ? h('span', { class: 'meta nama-dua' }, ' · dipakai di 2 perangkat') : null,
        lama ? h('span', { class: 'versi-lama-tanda' }, 'versi lama') : null,
        h('span', { class: 'visually-hidden' }, ada ? ' sudah masuk' : ' belum masuk room'));
    });
    return h('div', { class: 'stack-sm daftar-masuk' },
      h('ul', { class: 'inisial-room', 'aria-label': 'Anggota room' }, daftarLi),
      adaLama ? h('p', { class: 'small saran-versi-lama', role: 'status' }, 'Bertanda versi lama: minta mereka menutup tab lalu membuka lagi tautan room, supaya soal sama.') : null,
      h('p', { class: 'meta legenda-masuk', 'aria-hidden': 'true' }, h('span', { class: 'titik-room', 'data-nada': 'ok' }), ' sudah masuk', h('span', { class: 'titik-room' }), ' belum masuk room'));
  }

  // =====================================================================
  // DIALOG: BUAT, BAGIKAN, UBAH, MULAI LATIHAN, CEK SAMBUNGAN, MENU
  // =====================================================================
  function editorNama(awal, o) {
    // chip nama berhapus + isian tambah (maks 12)
    o = o || {}; let daftar = (awal || []).slice(0, 12); const wajib = o.wajib ? kunciNama(o.wajib) : null;
    const wadah = h('div', { class: 'chip-row editor-nama', role: 'list', 'aria-label': o.label || 'Anggota' });
    const iid = UKP.util.id('nama');
    const input = h('input', { class: 'input', id: iid, type: 'text', maxlength: '24', autocomplete: 'off', autocapitalize: 'words', enterkeyhint: 'done', placeholder: o.placeholder || 'mis. Budi' });
    const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
    function gambar() {
      wadah.replaceChildren(...daftar.map(n => h('span', { class: 'chip chip-nama', role: 'listitem' }, n,
        kunciNama(n) === wajib ? null : h('button', { type: 'button', class: 'icon-btn sm', 'aria-label': 'Hapus ' + n, onclick: () => { daftar = daftar.filter(x => x !== n); gambar(); } }, UKP.icon('x')))));
    }
    function tambah() {
      const c = fn(L, 'cekNamaPeserta') ? L.cekNamaPeserta(input.value, daftar) : { nama: rapikan(input.value), galat: rapikan(input.value) ? null : 'Isi nama dulu.' };
      if (c.galat) { galat.textContent = c.galat; galat.hidden = false; input.focus(); return; }
      daftar.push(c.nama); input.value = ''; galat.hidden = true; gambar(); input.focus();
    }
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); tambah(); } });
    gambar();
    const el = h('div', { class: 'field' }, h('span', { class: 'label' }, o.label || 'Anggota'), wadah,
      h('div', { class: 'isian-baris' }, h('label', { class: 'visually-hidden', for: iid }, 'Nama anggota baru'), input, h('button', { type: 'button', class: 'btn', onclick: tambah }, UKP.icon('tambah', null, true), 'Tambah')),
      o.bantu ? h('p', { class: 'meta' }, o.bantu) : null, galat);
    el.tambahIsian = () => { if (rapikan(input.value)) tambah(); return !rapikan(input.value); };
    el.nilai = () => daftar.slice();
    return el;
  }
  function tingkatProfil() { return aman(() => UKP.store.get().profil.tingkat, 'B') || 'B'; }
  // v9.2: tanpa nama dari kode. Daftar latihan di perangkat ini bila ada, selain itu nama profil sendiri saja.
  function anggotaAwal() {
    const s = UKP.store.get(); if (fn(L, 'siapBersama')) L.siapBersama(s);
    const p = s.bersama && Array.isArray(s.bersama.peserta) && s.bersama.peserta.length ? s.bersama.peserta : [rapikan(s.profil && s.profil.nama)].filter(Boolean);
    return p.slice(0, 12);
  }
  UI.dialogBuat = function () {
    const r = R();
    if (!r || !tersedia()) { toast(alasanAwam(r ? aman(() => r.tersedia().alasan, '') : ''), { nada: 'warn' }); return null; }
    const s = UKP.store.get(); const tingkat = tingkatProfil();
    const iNama = UKP.util.id('room-nama'), iSaya = UKP.util.id('room-saya');
    const namaRoom = h('input', { class: 'input', id: iNama, type: 'text', maxlength: '60', value: 'Tim UKP Tingkat ' + tingkat, autocomplete: 'off' });
    const saya = h('input', { class: 'input', id: iSaya, type: 'text', maxlength: '24', value: rapikan(s.profil.nama) || '', autocomplete: 'name', autocapitalize: 'words', placeholder: 'Nama Anda' });
    // C.4 v9.2: daftar awal hanya nama pemimpin
    const anggota = editorNama([rapikan(s.profil.nama)].filter(Boolean), { label: 'Anggota tim', bantu: 'Tulis nama anggota tim Anda satu per satu, lalu tekan Enter. Bisa diubah nanti.' });
    const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
    return UKP.dialog({ judul: 'Buat room tim', kelas: 'dlg-room',
      isi: () => h('div', { class: 'stack' },
        h('p', { class: 'small muted' }, 'Sekali saja. Tautannya dibagikan ke grup WA, lalu anggota cukup mengetuk namanya.'),
        h('div', { class: 'field' }, h('label', { for: iNama }, 'Nama room'), namaRoom),
        h('div', { class: 'field' }, h('label', { for: iSaya }, 'Nama Anda (pemimpin)'), saya),
        anggota,
        h('p', { class: 'meta' }, 'Tingkat ' + tingkat + ' (mengikuti profil Anda).'), galat),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, 'Batal'),
        h('button', { type: 'button', class: 'btn btn-primary room-buat', onclick: () => {
          const nm = rapikan(saya.value);
          if (!nm) { galat.textContent = 'Tulis nama Anda dulu.'; galat.hidden = false; saya.focus(); return; }
          anggota.tambahIsian();
          let peserta = anggota.nilai(); if (!peserta.some(x => samaNama(x, nm))) peserta = [nm].concat(peserta).slice(0, 12);
          try { r.buat({ nama: nm, namaRoom: rapikan(namaRoom.value) || 'Tim UKP Tingkat ' + tingkat, peserta, tingkat }); }
          catch (e) { galat.textContent = alasanAwam(e && e.message); galat.hidden = false; return; }
          klaimTab(); catatPernahTuan();
          const st = UKP.store.get(); if (!rapikan(st.profil.nama)) st.profil.nama = nm;
          if (fn(L, 'siapBersama')) { L.siapBersama(st); st.bersama.peserta = peserta.slice(0, 12); }
          UKP.store.save();
          dlg.close('ok');
          if (UKP.sekarang().view !== 'room') UKP.go('room'); else UKP.render();
          setTimeout(() => UI.dialogBagikan({ siap: true }), 60);
        } }, 'Buat room')] });
  };
  async function bagikan(teks, tautan) {
    try { if (root.navigator && fn(root.navigator, 'share') && (root.matchMedia ? root.matchMedia('(pointer: coarse)').matches : true)) { await root.navigator.share({ text: teks }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    try { root.open('https://wa.me/?text=' + encodeURIComponent(teks), '_blank', 'noopener'); } catch (e) {}
  }
  // "Room siap" / "Bagikan tautan": bagikan (berbagi bawaan HP atau WhatsApp) + salin; kode hanya di lipatan cadangan
  UI.dialogBagikan = function (o) {
    o = o || {}; const i = info(); if (!i) return null; const st = stR();
    const namaR = (st && st.room && st.room.nama) || i.namaRoom || 'Room tim';
    const teks = teksUndangan(namaR, i.tautan);
    const iid = UKP.util.id('tautan');
    const inp = h('input', { class: 'input mono tautan-room', id: iid, type: 'text', readonly: true, value: i.tautan, onfocus: e => e.target.select() });
    return UKP.dialog({ judul: o.siap ? 'Room siap' : 'Undang anggota', kelas: 'dlg-room',
      isi: () => h('div', { class: 'stack' },
        h('p', null, o.siap ? 'Kirim tautan ini ke grup WA tim. Anggota membukanya di HP, lalu mengetuk namanya.' : 'Anggota membuka tautan ini di HP, lalu mengetuk namanya.'),
        h('div', { class: 'field' }, h('label', { for: iid }, 'Tautan room'), inp),
        h('div', { class: 'btn-row' },
          h('button', { type: 'button', class: 'btn btn-primary room-bagikan', onclick: () => bagikan(teks, i.tautan) }, UKP.icon('chat', null, true), 'Bagikan tautan'),
          UKP.c.salin(teks, { label: 'Salin', kelas: 'btn room-salin', pesan: 'Undangan room disalin.', judul: 'Salin undangan room' })),
        h('p', { class: 'meta' }, 'Siapa pun yang memegang tautan bisa masuk, jadi bagikan hanya di grup tim.'),
        h('details', { class: 'lipat' }, h('summary', null, 'Cadangan: kode untuk diketik'), h('p', { class: 'kode-room mono' }, i.kodeTampil || ''))),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('ok') }, 'Selesai')] });
  };
  function dialogUbahRoom() {
    const r = R(); const st = stR(); if (!r || !st) return;
    const iid = UKP.util.id('ubah-nama');
    const nm = h('input', { class: 'input', id: iid, type: 'text', maxlength: '60', value: st.room.nama || '' });
    const anggota = editorNama(pesertaRoom(st), { label: 'Anggota tim', wajib: (info() || {}).nama, bantu: 'Tulis nama anggota satu per satu, lalu tekan Enter. Maksimal 12 nama.' });
    UKP.dialog({ judul: 'Ubah room', kelas: 'dlg-room', isi: () => h('div', { class: 'stack' }, h('div', { class: 'field' }, h('label', { for: iid }, 'Nama room'), nm), anggota),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, 'Batal'),
        h('button', { type: 'button', class: 'btn btn-primary', onclick: () => { anggota.tambahIsian(); const baru = anggota.nilai(); const kode = (info() || {}).kode;
          pesertaRoom(st).filter(p => !baru.some(x => samaNama(x, p))).forEach(p => abaikanNama(kode, p));   // V10 temuan 3: yang dihapus tidak ditawarkan lagi
          const ok = r.aturRoom({ nama: rapikan(nm.value) || st.room.nama, peserta: baru }); dlg.close('ok'); toast(ok ? 'Room diperbarui.' : 'Room belum bisa diubah dari perangkat ini.', { nada: ok ? 'ok' : 'warn' }); } }, 'Simpan')] });
  }
  function dialogCekSambungan() {
    const r = R(); if (!r) return;
    const hasil = h('div', { class: 'stack-sm', role: 'status' }, h('p', null, 'Memeriksa internet…'));
    UKP.dialog({ judul: 'Cek sambungan', ukuran: 'sm', isi: () => hasil, kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('ok') }, 'Tutup')] });
    // v9.2: kalimat biasa saja, tanpa daftar jalur dan milidetik
    const tampil = arr => {
      const ok = arr.filter(x => x && x.ok).length;
      hasil.replaceChildren(h('p', { class: 'cek-hasil' }, titik(ok ? 'ok' : 'attn'), h('strong', null, teksCekSambungan(arr))));
    };
    if (fn(r, 'ujiRelai')) {
      Promise.resolve().then(() => r.ujiRelai()).then(arr => tampil(Array.isArray(arr) ? arr : [])).catch(() => tampil([]));
    } else {
      const st = statusR(); const arr = (st && st.relai ? st.relai : []).map(x => ({ ok: x.status === 'tersambung' }));
      tampil(arr);
    }
  }
  // v9.4 Ka3: hasil uji jalur terakhir (dipakai layar gabung dan Info sambungan saat perangkat belum masuk room)
  let ujiJalurTerakhir = null;   // { t, hasil: [{ ok }] }
  function ujiJalur() {
    const r = R(); if (!r || !fn(r, 'ujiRelai')) return Promise.resolve(null);
    return Promise.resolve().then(() => r.ujiRelai()).then(arr => { const t = Date.now(); ujiJalurTerakhir = { t, hasil: (Array.isArray(arr) ? arr : []).map(x => ({ ok: !!(x && x.ok), t })) }; return ujiJalurTerakhir.hasil; }).catch(() => null);
  }
  const daring = () => { try { return navigator.onLine !== false; } catch (e) { return true; } };
  function dataInfoSambungan(kodeCadangan) {
    const i = info(); const st = statusR(); const s = stR();
    let jalur = st && Array.isArray(st.relai) && st.relai.length ? st.relai.map(x => ({ status: x.status, sejak: x.sejak, galatPada: x.galatPada })) : [];
    if (!jalur.length && ujiJalurTerakhir) jalur = ujiJalurTerakhir.hasil.map(x => ({ status: x.ok ? 'tersambung' : 'gagal', sejak: x.ok ? x.t : null, galatPada: x.ok ? null : x.t }));
    let ua = ''; try { ua = navigator.userAgent; } catch (e) {}
    return { versi: UKP.versi, peramban: ringkasPeramban(ua), nama: i ? i.nama : null, peran: i ? i.peran : null, kode: i ? i.kode : kodeCadangan || '', daring: daring(),
      jalur, dataRoom: !!(s && s.room), selisihMs: selisih(), kini: Date.now(), online: i && st && Array.isArray(st.online) ? st.online.length : undefined };
  }
  // "Info sambungan": bisa dibuka dari layar gabung dan dari menu room. Teksnya bisa disalin untuk dikirim ke pemimpin lewat WhatsApp.
  function dialogInfoSambungan(kodeCadangan) {
    const isi = h('div', { class: 'stack-sm info-sambungan' });
    const tampil = () => {
      const teks = teksInfoSambungan(dataInfoSambungan(kodeCadangan));
      const baris = teks.split('\n').slice(1);
      isi.replaceChildren(
        h('p', { class: 'small muted' }, 'Kirim info ini ke pemimpin bila HP Anda belum tersambung. Isinya tidak memuat kode room lengkap.'),
        h('dl', { class: 'info-sambungan-daftar' }, baris.map(b => { const k = b.indexOf(': '); return h('div', { class: 'info-baris' }, h('dt', null, b.slice(0, k)), h('dd', null, b.slice(k + 2))); })),
        h('div', { class: 'btn-row' },
          UKP.c.salin(() => teksInfoSambungan(dataInfoSambungan(kodeCadangan)), { label: 'Salin info sambungan', kelas: 'btn btn-primary room-salin-info', pesan: 'Info sambungan disalin. Tempel di WhatsApp ke pemimpin.' }),
          h('button', { type: 'button', class: 'btn room-periksa-jalur', onclick: async ev => { const b = ev.currentTarget; b.disabled = true; b.textContent = 'Memeriksa…'; await ujiJalur(); tampil(); } }, 'Periksa jalur lagi')));
    };
    tampil();
    UKP.dialog({ judul: 'Info sambungan', ukuran: 'sm', kelas: 'dlg-info-sambungan', isi: () => isi, kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('ok') }, 'Tutup')] });
    if (!info() && !ujiJalurTerakhir) ujiJalur().then(tampil);
  }
  UI.dialogInfoSambungan = dialogInfoSambungan;
  // v9.4 Ka3: dipakai daftar orang di layar ujian tim (js/views-ujian-tim.js): true bila perangkat nama ini memakai versi lebih lama dari pemimpin
  UI.versiLamaNama = function (nama) {
    const i = info(); const r = R(); if (!i || i.peran !== 'tuan' || !r || !fn(r, 'versiHadir') || samaNama(nama, i.nama)) return false;
    const online = onlineKini().some(x => samaNama(x, nama));
    return versiAnggotaLama({ online, versiApp: ambilDari(aman(() => r.versiHadir(), {}) || {}, nama) }, UKP.versi);
  };
  async function ambilAlih() {
    const r = R(); const st = stR(); if (!r || !st) return;
    const tuan = namaPemimpin(st);
    const teks = 'Perangkat ini akan memimpin room: memulai latihan, membuka kunci jawaban, dan menyimpan hasil. Pakai hanya bila laptop ' + tuan + ' tidak bisa dipakai.' + (st.aktivitas ? ' Isian di laptop ' + tuan + ' tidak ikut pindah.' : '');
    if (!(await UKP.konfirmasi('Pimpin dari perangkat ini?', teks, { ya: 'Pimpin dari sini' }))) return;
    const ok = r.ambilAlih();
    toast(ok ? 'Anda sekarang memimpin room.' : 'Belum bisa memimpin dari perangkat ini. Coba lagi saat tersambung.', { nada: ok ? 'ok' : 'warn' });
    beriTahu('peran');
  }
  async function keluarRoom() {
    const r = R(); if (!r) return;
    if (!(await UKP.konfirmasi('Keluar dari room?', 'Perangkat ini berhenti menerima soal dari room. Anda bisa masuk lagi lewat tautan yang sama.', { ya: 'Keluar' }))) return;
    try { await r.keluar(); } catch (e) {}
    lepasTab(); toast('Anda sudah keluar dari room.');
    UKP.go('beranda');
  }
  async function tutupRoom() {
    const r = R(); if (!r || !fn(r, 'tutup')) return;
    if (!(await UKP.konfirmasi('Tutup room?', 'Data room di internet dihapus dan tautan ini tidak bisa dipakai lagi. Hasil latihan di perangkat ini tetap tersimpan.', { ya: 'Tutup room', bahaya: true }))) return;
    menutupSendiri = true; try { await r.tutup(); } catch (e) {}
    lepasTab(); toast('Room ditutup. Buat room baru bila perlu.');
    UKP.go('beranda');
  }
  // B.1 v9.2 "Bukan Anda? Ganti nama": keluar dari room di HP ini, lupakan nama yang diingat, kembali ke layar pilih nama.
  // v9.4 FB3: dipakai juga butir "Ganti nama" di menu room (kapan pun, juga saat latihan atau ujian tim berjalan). Tanpa dialog.
  async function gantiNama() {
    const rr = R(); const i = info(); if (!rr || !i) return;
    const kode = i.kode; const ingat = lsBaca('ukp.tim.namaRoom', {}) || {}; delete ingat[kode]; lsTulis('ukp.tim.namaRoom', ingat);
    // v9.3.2 A.2: setelah "Ganti nama", masuk otomatis berdasarkan nama profil tidak diulang untuk room ini di perangkat ini
    const bukan = lsBaca(KBUKAN, {}) || {}; bukan[kode] = 1; lsTulis(KBUKAN, bukan);
    try { await rr.keluar(); } catch (e) {}
    lepasTab();
    UKP.go('room', { kode: fn(rr, 'formatKode') ? rr.formatKode(kode) : kode });
  }
  // item menu room (dipakai UKP.c.fokusBar({ menu }) dan UKP.ruangUI.menu())
  UI.itemMenu = function () {
    const i = info(); if (!i) return [];
    const tuan = i.peran === 'tuan'; const r = R();
    return [
      { teks: 'Undang anggota', ikon: 'chat', onclick: () => UI.dialogBagikan() },
      tuan ? { teks: 'Ubah room', ikon: 'pen', onclick: dialogUbahRoom } : null,
      !tuan ? { teks: 'Ganti nama', ikon: 'pen', onclick: gantiNama } : null,
      { teks: 'Cek sambungan', ikon: 'cek-lingkar', onclick: dialogCekSambungan },
      { teks: 'Info sambungan', ikon: 'info', onclick: () => dialogInfoSambungan() },
      // C.6 v9.2: hanya untuk yang pernah memimpin room ini, atau bila pemimpin sedang tidak tersambung
      !tuan && (pernahTuan() || pemimpinHilang()) ? { teks: 'Pimpin dari perangkat ini', ikon: 'flag', onclick: ambilAlih } : null,
      { teks: 'Keluar dari room', ikon: 'keluar', onclick: keluarRoom },
      tuan && r && fn(r, 'tutup') ? { teks: 'Tutup room', ikon: 'hapus', bahaya: true, onclick: tutupRoom } : null,
    ].filter(Boolean);
  };
  UI.menu = function () { const item = UI.itemMenu(); if (!item.length) return null; const m = UKP.c.menuLebih({ label: 'Menu room', item }); m.classList.add('menu-room'); m.dataset.butir = item.map(x => x.teks).join('|'); return m; };

  // Mulai latihan bersama (pemimpin): jumlah, sumber, tempo, yang ikut → s.bersama → #latih { mulai, n, …, room: 1 }
  UI.dialogMulaiLatihan = function () {
    const s = UKP.store.get(); if (fn(L, 'siapBersama')) L.siapBersama(s);
    const i = info(); const st = stR(); const diRoom = !!(i && i.peran === 'tuan' && tersedia());
    const tingkat = tingkatProfil();
    const peserta = diRoom && pesertaRoom(st).length ? pesertaRoom(st) : anggotaAwal();
    const on = diRoom ? onlineKini() : [];
    // bawaan: seluruh anggota room ikut, juga yang belum membuka HP (barisnya "isi untuk <nama>" dan terisi sendiri bila ia menyusul);
    // pemimpin cukup melepas centang orang yang memang tidak hadir
    const ikut = new Set(peserta.map(kunciNama));
    let n = 20, sumber = 'acak';
    let tempo = fn(L, 'tempoBersama') ? L.tempoBersama().mode : 'ujian';
    const paket = K && fn(K, 'daftarSet') ? K.daftarSet() : [];
    const lemah = fn(L, 'topikTerlemah') ? aman(() => L.topikTerlemah(tingkat, 1), []) : [];
    const sid = UKP.util.id('sumber');
    const pilihan = [['acak', 'Acak Tingkat ' + tingkat]].concat(paket.map(p => ['set:' + p.set, p.label || p.judul || p.set]))
      .concat(lemah[0] && lemah[0].topik ? [['topik:' + lemah[0].topik.id, 'Topik terlemah: ' + (lemah[0].topik.judul || lemah[0].topik.id)]] : []);
    // v9.5.3 B2: tombol dan ringkas memakai jumlah soal yang benar-benar dimulai untuk sumber terpilih (UKP.latihBank.jumlahMulaiRoom)
    const pSumber = () => { const p = { n }; if (sumber.startsWith('set:')) p.set = sumber.slice(4); else if (sumber.startsWith('topik:')) p.topik = sumber.slice(6); return p; };
    const nEfektif = () => { const lb = UKP.latihBank; if (!lb || typeof lb.jumlahMulaiRoom !== 'function') return n; const x = aman(() => lb.jumlahMulaiRoom(pSumber()), null); return typeof x === 'number' && x >= 0 ? Math.min(n, x) : n; };
    const sel = h('select', { class: 'select', id: sid, onchange: e => { sumber = e.target.value; aturN(n); } }, pilihan.map(p => h('option', { value: p[0] }, p[1])));
    const tempoUjian = fn(L, 'tempoUjian') ? L.tempoUjian(tingkat) : 126;
    const desimal = x => String(Math.round(x * 10) / 10).replace('.', ',');
    // v9.3 W2: waktu membahas per soal (detik; 0 = Bebas), disimpan lewat L.aturBahasBersama saat Mulai
    const pilihanBahas = Array.isArray(L.PILIHAN_BAHAS) && L.PILIHAN_BAHAS.length ? L.PILIHAN_BAHAS.slice() : PILIHAN_BAHAS_CADANGAN.slice();
    let bahas = fn(L, 'bahasBersama') ? aman(() => L.bahasBersama(), 120) : 120;
    if (pilihanBahas.indexOf(bahas) < 0) bahas = 120;
    // v9.4 W: 'bebas' = tanpa batas (0 detik, tanpa hitung mundur)
    if (['ujian', 'longgar', 'bebas'].indexOf(tempo) < 0) tempo = 'ujian';
    const detikTempo = () => (tempo === 'bebas' ? 0 : tempo === 'longgar' ? (L.TEMPO_LONGGAR || 150) : tempoUjian);
    const penjelasTempo = h('p', { class: 'meta penjelas-tempo-room', hidden: tempo !== 'bebas' }, 'Tanpa batas: tidak ada hitung mundur. Cocok untuk belajar sambil membahas.');
    const ringkas = h('p', { class: 'meta ringkas-waktu-room', 'aria-live': 'polite' });
    const perbaruiRingkas = () => { ringkas.textContent = teksRingkasWaktu(nEfektif(), detikTempo(), bahas); };
    const saya = i && i.nama ? i.nama : rapikan(s.profil && s.profil.nama);
    const chipIkut = h('div', { class: 'chip-row chip-ikut', role: 'group', 'aria-label': 'Yang ikut' }, peserta.map(p => {
      const b = h('button', { type: 'button', class: 'chip', 'aria-pressed': String(ikut.has(kunciNama(p))), onclick: () => { const k = kunciNama(p); if (ikut.has(k)) ikut.delete(k); else ikut.add(k); b.setAttribute('aria-pressed', String(ikut.has(k))); } },
        p, samaNama(p, saya) ? ' (Anda)' : null,
        diRoom && !samaNama(p, saya) && !on.some(x => samaNama(x, p)) ? h('span', { class: 'meta' }, ' · belum masuk') : null);
      return b;
    }));
    const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
    const tMulai = h('button', { type: 'button', class: 'btn btn-primary room-mulai', onclick: () => {
      const dipilih = peserta.filter(p => ikut.has(kunciNama(p)));
      if (!dipilih.length) { galat.textContent = 'Pilih minimal satu orang.'; galat.hidden = false; return; }
      const st2 = UKP.store.get(); if (fn(L, 'siapBersama')) L.siapBersama(st2);
      // daftar yang ikut → s.bersama.peserta; papan (views-belajar) meneruskannya ke UKP.ruang.mulaiLatihan({ peserta }) bila didukung
      st2.bersama.aktif = true; st2.bersama.peserta = dipilih.slice(0, 12); UKP.store.save();
      if (fn(L, 'aturTempoBersama')) L.aturTempoBersama(tempo);
      if (fn(L, 'aturBahasBersama')) aman(() => L.aturBahasBersama(bahas), null);
      const p = Object.assign({ mulai: true }, pSumber());
      if (diRoom) p.room = 1;
      dlgMulai.close('ok'); UKP.go('latih', p);
    } }, UKP.icon('play', null, true), h('span', { class: 'teks-mulai' }, 'Mulai ' + nEfektif() + ' soal'));
    const aturN = v => { n = v; const t = tMulai.querySelector('.teks-mulai'); if (t) t.textContent = 'Mulai ' + nEfektif() + ' soal'; perbaruiRingkas(); };
    perbaruiRingkas();
    const dlgMulai = UKP.dialog({ judul: 'Mulai latihan bersama', kelas: 'dlg-room dlg-mulai-room',
      // v9.3 P2: dirapatkan agar 10 nama + baris ringkas + tombol Mulai muat tanpa menggulir di 1366x768 (Jumlah soal dan Sumber soal berdampingan)
      isi: () => h('div', { class: 'stack' },
        h('div', { class: 'baris-dua-room' },
          UKP.c.segmen({ label: 'Jumlah soal', radio: true, aktif: 20, opsi: [10, 20, 40].map(x => ({ nilai: x, label: x + ' soal' })), onPilih: aturN }),
          h('div', { class: 'field' }, h('label', { for: sid }, 'Sumber soal'), sel)),
        h('div', { class: 'tempo-room' }, UKP.c.segmen({ label: 'Waktu mengerjakan per soal', radio: true, aktif: tempo, opsi: [{ nilai: 'ujian', label: 'Seperti ujian', sub: desimal(tempoUjian / 60) + ' menit' }, { nilai: 'longgar', label: 'Lebih santai', sub: desimal((L.TEMPO_LONGGAR || 150) / 60) + ' menit' }, { nilai: 'bebas', label: 'Tanpa batas', sub: 'tanpa hitung mundur' }], onPilih: v => { tempo = v; penjelasTempo.hidden = v !== 'bebas'; perbaruiRingkas(); } }), penjelasTempo),
        h('div', { class: 'bahas-room' }, UKP.c.segmen({ label: 'Waktu membahas per soal', radio: true, aktif: bahas, opsi: pilihanBahas.map(x => ({ nilai: x, label: labelBahas(x) })), onPilih: v => { bahas = v; perbaruiRingkas(); } }), ringkas),
        h('div', { class: 'field' }, h('span', { class: 'label' }, 'Yang ikut'), chipIkut,
          h('p', { class: 'meta' }, 'Lepas centang yang tidak ikut.' + (diRoom ? ' Jawaban yang belum masuk bisa diisi dari laptop ini.' : ''))), galat),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, 'Batal'), tMulai] });
    return dlgMulai;
  };

  // =====================================================================
  // KARTU BERANDA (U3)
  // =====================================================================
  UKP.c.kartuRoom = function () {
    const sect = h('section', { class: 'card kartu-room', 'aria-labelledby': 'kartu-room-j' });
    const sisip = () => ['kartuUjianTim', 'kartuLanjutBersama'].map(nm => { if (typeof UKP.c[nm] !== 'function') return null; const x = aman(() => UKP.c[nm](), null); return x && x.nodeType ? x : null; }).filter(Boolean);
    const tautanKecil = item => h('p', { class: 'tautan-room meta' }, item.filter(Boolean).map((x, k) => [k ? h('span', { class: 'sep', 'aria-hidden': 'true' }, ' · ') : null, x]));
    const tombolTeks = (teks, onclick) => h('button', { type: 'button', class: 'tautan-tombol', onclick }, teks);
    function gambar() {
      const r = R(); const i = info(); const st = stR();
      const isi = [];
      if (!r || !tersedia()) {
        isi.push(h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('span', { class: 'eyebrow' }, 'Tim'), h('h2', { class: 'card-title', id: 'kartu-room-j' }, 'Latihan bersama tim'))),
          h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UKP.go('latih', { atur: 1 }) }, UKP.icon('play', null, true), 'Mulai latihan bersama'),
          h('p', { class: 'meta' }, 'Room online hanya tersedia di ', h('a', { href: SITUS_TIM, target: '_blank', rel: 'noopener' }, 'website tim'), '.'),
          tautanKecil([UKP.link('Ujian tim', 'ujiantim'), UKP.link('Riwayat tim', 'tim')]));
      } else if (!i) {
        const iid = UKP.util.id('tempel');
        const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
        const inp = h('input', { class: 'input', id: iid, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: 'Tempel tautan room' });
        const buka = () => { const k = fn(r, 'normalKode') ? r.normalKode(rapikanKodeTautan(inp.value)) || r.normalKode(inp.value) : null; if (!k) { galat.textContent = 'Tautan tidak dikenali. Salin ulang tautan lengkap dari grup.'; galat.hidden = false; inp.focus(); return; } UKP.go('room', { kode: r.formatKode ? r.formatKode(k) : k }); };
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); buka(); } });
        isi.push(h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('span', { class: 'eyebrow' }, 'Tim'), h('h2', { class: 'card-title', id: 'kartu-room-j' }, 'Latihan bersama tim'), h('p', { class: 'card-meta' }, 'Sekali saja. Tautannya dibagikan ke grup WA.'))),
          h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UI.dialogBuat() }, UKP.icon('tim', null, true), 'Buat room tim'),
          h('details', { class: 'lipat tempel-room' }, h('summary', null, 'Sudah punya tautan? Tempel di sini'),
            h('div', { class: 'field' }, h('label', { class: 'visually-hidden', for: iid }, 'Tautan room'), h('div', { class: 'isian-baris' }, inp, h('button', { type: 'button', class: 'btn', onclick: buka }, 'Buka')), galat)),
          tautanKecil([UKP.link('Latihan satu layar', 'latih', { atur: 1 }), UKP.link('Ujian tim', 'ujiantim'), UKP.link('Riwayat tim', 'tim')]));
      } else {
        const tuan = i.peran === 'tuan'; const a = st && st.aktivitas;
        const namaR = (st && st.room && st.room.nama) || i.namaRoom || 'Room tim';
        const pes = pesertaRoom(st); const on = onlineKini().filter(n => !pes.length || pes.some(p => samaNama(p, n)));
        const tersambung = !!(statusR() || {}).tersambung;
        const statusTeks = !tersambung ? (putusSejak && Date.now() - putusSejak > 60000 ? 'Belum tersambung' : 'Menyambung…') : ringkasHadir(on, 3);
        let utama;
        if (a && a.jenis === 'latihan') utama = tuan
          ? h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UKP.go('latih', { lanjut: 1, room: 1 }) }, UKP.icon('play', null, true), 'Kembali ke latihan')
          : h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UKP.go('room') }, UKP.icon('play', null, true), 'Ikut latihan sekarang');
        else if (a && a.jenis === 'ujian') utama = h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UKP.go(tuan ? 'ujiantim' : 'room', tuan ? { room: 1 } : {}) }, UKP.icon('play', null, true), tuan ? 'Buka layar ujian' : 'Ikut ujian tim');
        else utama = tuan
          ? h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UI.dialogMulaiLatihan() }, UKP.icon('play', null, true), 'Mulai latihan bersama')
          : h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UKP.go('room') }, UKP.icon('tim', null, true), 'Masuk room');
        isi.push(h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('span', { class: 'eyebrow' }, 'Tim'),
          h('h2', { class: 'card-title', id: 'kartu-room-j' }, UKP.link(namaR, 'room')),
          h('p', { class: 'card-meta status-hadir' }, titik(tersambung && on.length ? 'ok' : tersambung ? 'mati' : 'warn'), statusTeks)), h('div', { class: 'card-head-kanan' }, UI.menu())),
          a ? h('p', { class: 'small' }, a.jenis === 'latihan' ? 'Latihan bersama sedang berjalan · soal ' + ((a.idx || 0) + 1) + ' dari ' + (a.soalIds || []).length : 'Ujian tim sedang berjalan' + (a.judul ? ' · ' + a.judul : '')) : null,
          utama,
          tautanKecil([tuan ? tombolTeks('Ujian tim', () => UKP.go('simulasi', { tim: 1, room: 1 })) : UKP.link('Ujian tim', 'ujiantim'), UKP.link('Riwayat tim', 'tim'), tombolTeks('Undang anggota', () => UI.dialogBagikan())]));
      }
      const tambahan = sisip(); if (tambahan.length) isi.push(h('div', { class: 'stack-sm kartu-room-sisip' }, tambahan));
      sect.replaceChildren(...isi);
    }
    gambar();
    let lepas1 = null; let tunda = null;
    const cek = hapusBila(sect, () => { if (lepas1) lepas1(); clearTimeout(tunda); });
    lepas1 = dengar(j => { if (cek()) return; if (j === 'jawaban') return; clearTimeout(tunda); tunda = setTimeout(() => { if (!sect.contains(document.activeElement)) gambar(); }, 120); });
    return sect;
  };

  // =====================================================================
  // VIEW #room
  // =====================================================================
  UKP.views.room = function (params) {
    params = params || {};
    const page = h('div', { class: 'page halaman-room' });
    const lokal = { ubah: false, gabungJalan: false, intip: undefined, langkah: 'nama', namaDipilih: null, namaLain: false, galat: null, bergabungDi: {}, autoCoba: false };
    let layar = null, tDetik = null, tTunda = null, lepasDengar = null, modeFokusAktif = false;
    const r = R();
    let kodeParam = null, kodeSalah = false;
    if (params.kode) { kodeParam = r && fn(r, 'normalKode') ? r.normalKode(rapikanKodeTautan(params.kode)) : null; if (!kodeParam) kodeSalah = true; }
    const keadaan = () => pilihKeadaan({ tersedia: !!r && tersedia(), tabKedua, kode: kodeParam, kodeSalah, info: info(), state: stR(), kodeSimpan: kodeSimpanBoot, memulihkan });
    function modeFokus(on) { if (on === modeFokusAktif) return; modeFokusAktif = on; try { UKP.mode.fokus(on); } catch (e) {} }
    function kunciLayar() {
      const k = keadaan();
      if (k === 'latihanAnggota') {
        const a = stR().aktivitas; const sid = a.soalIds[a.idx];
        if (lokal.soalKini !== a.id + ':' + a.idx) { lokal.soalKini = a.id + ':' + a.idx; lokal.ubah = false; }
        return [k, a.id, a.idx, a.fase, keadaanAnggota(a, jawabanSaya(a, sid), lokal.ubah), versiBeda() && !(K && K.soal(sid)) ? 'v' : ''].join('|');
      }
      // v9.2: lobi.id dan rekap TIDAK ikut kunci: keduanya diperbarui di tempat (perbarui), supaya kop dan menu ⋮ yang sedang terbuka
      // tidak digambar ulang tepat saat pemimpin kembali ke lobi (bukaLobi / rekap tiba) — penyebab klik "Tutup room" yang gagal
      if (k === 'lobi') { const i = info(); const st = stR(); return [k, i.peran, st.tuan].join('|'); }
      if (k === 'ujianAnggota' || k === 'latihanTuan' || k === 'ujianTuan') { const a = stR().aktivitas; return [k, a.id, a.status || '', a.idx || 0, a.fase || ''].join('|'); }
      if (k === 'gabung') return [k, lokal.langkah, lokal.gabungJalan, lokal.intip === undefined ? 'u' : lokal.intip === null ? 'n' : 'i', lokal.namaLain, lokal.galat || '', lokal.tidakAda || '', lokal.lambat ? 'l' : ''].join('|');
      if (k === 'menunggu') return [k, !!(statusR() || {}).tersambung].join('|');
      return k;
    }
    function gambar(paksa) {
      const k = kunciLayar();
      // A.4 v9.2: tombol "Masuk" di kop situs disembunyikan di layar gabung dan lobi anggota (CSS: body[data-room-tamu])
      try { const kk = k.split('|')[0]; const ii = info(); document.body.toggleAttribute('data-room-tamu', kk === 'gabung' || (kk === 'lobi' && !!ii && ii.peran !== 'tuan')); } catch (e) {}
      if (!paksa && layar && layar.kunci === k) { if (layar.perbarui) try { layar.perbarui(); } catch (e) { console.error(e); } return; }
      const pertama = !layar;
      clearInterval(tDetik); tDetik = null;
      let baru;
      try { baru = bangun(k.split('|')[0]); } catch (e) { console.error(e); baru = { node: h('div', null, h('h1', null, 'Room tim'), UKP.c.banner('Layar room gagal dimuat: ' + e.message, 'warn')) }; }
      const lamaK = layar && layar.kunci ? layar.kunci.split('|').slice(0, 3).join('|') : null;
      const menuBuka = !!page.querySelector('.menu-room[open]');
      baru.kunci = k; layar = baru;
      page.replaceChildren(...[].concat(baru.node));
      // menu ⋮ yang sedang terbuka tetap terbuka bila layar terpaksa digambar ulang
      if (menuBuka) { const m = page.querySelector('.menu-room'); if (m) m.open = true; }
      // soal baru di HP anggota: mulai dari atas (bukan posisi gulir pembahasan soal sebelumnya)
      if (!pertama && lamaK !== k.split('|').slice(0, 3).join('|')) { try { root.scrollTo(0, 0); } catch (e) {} }
      pasangSpanduk();
      if (!pertama) segarkanJudul();
      if (!pertama) { const tuju = page.querySelector('[data-fokus-awal]') || page.querySelector('h1'); if (tuju && !page.contains(document.activeElement)) UKP.fokus(tuju); }
      if (baru.detik) tDetik = setInterval(() => { try { baru.detik(); } catch (e) {} }, 1000);
    }
    function segarkanJudul() {
      const h1 = page.querySelector('h1:not(.visually-hidden)') || page.querySelector('h1'); if (!h1) return;
      const t = h1.textContent.trim(); try { document.title = t + ' · MABAR UKP'; } catch (e) {}
      const el = document.getElementById('judul-ringkas'); if (el && el.textContent) { el.textContent = t; el.title = t; }
    }
    const jadwal = () => { clearTimeout(tTunda); tTunda = setTimeout(() => gambar(false), 40); };
    lepasDengar = dengar(j => { if (!page.isConnected && layar) return; jadwal(); });

    function bangun(k) {
      modeFokus(k === 'latihanAnggota' || k === 'ujianAnggota');
      switch (k) {
        case 'tidakTersedia': return layarTidakTersedia();
        case 'kodeSalah': return layarKodeSalah();
        case 'tabKedua': return layarTabKedua();
        case 'gabung': return layarGabung();
        case 'kosong': return layarKosong();
        case 'menunggu': return layarMenunggu();
        case 'memulihkan': return layarMemulihkan();
        case 'lobi': return layarLobi();
        case 'latihanAnggota': return layarLatihan();
        case 'latihanTuan': return layarLatihanTuan();
        case 'ujianAnggota': return layarUjianAnggota();
        case 'ujianTuan': return layarUjianTuan();
        default: return layarKosong();
      }
    }
    // v9.6.5: halaman room di luar sesi berpita (layar soal anggota, terkirim, hasil, dan papan pemimpin tidak memakai pembantu ini)
    const kop = (judul, o) => { o = o || {}; return UKP.c.kop({ eyebrow: o.eyebrow || 'Mode mabar', judul, lead: o.lead || null, meta: o.meta || null, aksi: o.aksi || null, pita: true }); };
    // V3: menu ⋮ sebaris dengan baris status (dulu di .page-actions, yang turun ke baris kosong sendiri di HP)
    const kopDenganMenu = (judul, o) => { o = Object.assign({}, o || {}); const m = UI.menu(); o.meta = [].concat(o.meta || []).filter(Boolean); if (m) o.meta.push(m); return kop(judul, o); };

    // ---------- tidak tersedia / kode salah / tab kedua / kosong / menunggu ----------
    function layarTidakTersedia() {
      const alasan = r ? aman(() => r.tersedia().alasan, '') : '';
      return { node: h('div', { class: 'stack' }, kop('Room tim', { lead: alasanAwam(alasan) }),
        h('section', { class: 'card stack-sm' }, h('p', null, 'Latihan bersama tetap bisa dipakai di satu layar: semua orang menjawab, Anda mengetuk jawaban tiap orang.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('latih', { atur: 1 }) }, UKP.icon('play', null, true), 'Mulai latihan bersama'), UKP.link('Ujian tim dengan kode jawaban', 'ujiantim', null, 'btn'), UKP.views.bank ? UKP.link('Bank soal', 'bank', null, 'btn btn-ghost') : null),  // v9.5
          /claude/i.test(String(alasan)) ? h('p', { class: 'meta' }, 'Website tim: ', h('a', { href: SITUS_TIM, target: '_blank', rel: 'noopener' }, SITUS_TIM.replace(/^https:\/\//, ''))) : null)) };
    }
    function isianTautan(label) {
      const iid = UKP.util.id('tautan-room');
      const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
      const inp = h('input', { class: 'input', id: iid, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', enterkeyhint: 'go', placeholder: 'https://…#room/…' });
      const buka = () => { const k = r && fn(r, 'normalKode') ? r.normalKode(rapikanKodeTautan(inp.value)) || r.normalKode(inp.value) : null; if (!k) { galat.textContent = 'Tautan tidak dikenali. Salin ulang tautan lengkap dari grup.'; galat.hidden = false; inp.setAttribute('aria-invalid', 'true'); inp.focus(); return; } UKP.go('room', { kode: fn(r, 'formatKode') ? r.formatKode(k) : k }); };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); buka(); } });
      inp.addEventListener('input', () => { galat.hidden = true; inp.removeAttribute('aria-invalid'); });
      return h('div', { class: 'field isian-tautan-room' }, h('label', { for: iid }, label || 'Tempel tautan room'), h('div', { class: 'isian-baris' }, inp, h('button', { type: 'button', class: 'btn', onclick: buka }, 'Buka')), galat);
    }
    function layarKodeSalah() {
      return { node: h('div', { class: 'stack' }, kop('Tautan room tidak utuh', { lead: 'Tautan ini terpotong atau salah ketik. Salin ulang tautan lengkap dari grup tim.' }), h('section', { class: 'card' }, isianTautan())) };
    }
    function layarTabKedua() {
      return { node: h('div', { class: 'stack' }, kop('Room terbuka di tab lain', { lead: 'Room hanya dipakai di satu tab supaya jawaban tidak saling menimpa.' }),
        h('section', { class: 'card stack-sm catatan-tab' }, h('p', null, 'Tutup tab ini dan kembali ke tab yang sudah membuka room, atau pakai room di tab ini.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => { const rr = R(); klaimTab(); try { if (rr) rr.pulihkan(); } catch (e) {} gambar(true); } }, 'Pakai room di tab ini')))) };
    }
    function layarKosong() {
      if (ditutupPemimpin) return { node: h('div', { class: 'stack' }, kop('Room sudah ditutup', { lead: 'Hasil latihan di HP ini tetap tersimpan. Minta tautan baru ke yang mengirimi Anda tautan ini.' }),
        h('section', { class: 'card stack room-tidak-ada' }, h('div', { class: 'btn-row' }, UKP.link('Ke Beranda', 'beranda', null, 'btn btn-primary')),
          h('details', { class: 'lipat' }, h('summary', null, 'Sudah punya tautan baru? Tempel di sini'), isianTautan()))) };
      // v9.4 Ka2 (e): anggota yang membuka website tanpa kode room langsung melihat isian tautan (dulu tersembunyi di lipatan),
      // pemimpin tetap melihat tombol Buat room tim
      return { node: h('div', { class: 'stack' }, kop('Room tim', { lead: 'Satu room untuk tim. Anggota cukup membuka tautan di HP dan mengetuk namanya.' }),
        h('section', { class: 'card stack room-anggota-tautan', 'aria-labelledby': 'anggota-tautan-j' },
          h('h2', { class: 'card-title', id: 'anggota-tautan-j' }, 'Diajak masuk room?'),
          h('p', { class: 'small' }, 'Buka tautan room dari grup WhatsApp tim. Bila tautannya tidak bisa diketuk, salin lalu tempel di sini.'),
          isianTautan('Tautan room dari grup')),
        h('section', { class: 'card stack' },
          h('h2', { class: 'card-title' }, 'Memimpin latihan?'),
          h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UI.dialogBuat() }, UKP.icon('tim', null, true), 'Buat room tim'),
          h('p', { class: 'meta' }, 'Sekali saja. Tautannya dibagikan ke grup WA.')),
        h('p', { class: 'small' }, UKP.link('Latihan bersama satu layar', 'latih', { atur: 1 }), UKP.views.bank ? [' · ', UKP.link('Bank soal', 'bank')] : null)) };  // v9.5
    }
    function layarMemulihkan() {
      return { node: h('div', { class: 'stack' }, kop('Menghubungkan ke room…'),
        h('section', { class: 'card stack-sm' }, h('p', { role: 'status' }, 'Sebentar, perangkat ini sedang menghubungi room.'))) };
    }
    function layarMenunggu() {
      const tersambung = !!(statusR() || {}).tersambung;
      return { node: h('div', { class: 'stack' }, kopDenganMenu(tersambung ? 'Room belum dibuka' : 'Menghubungkan ke room…', { meta: [UKP.c.statusRoom()] }),
        h('section', { class: 'card stack-sm' }, h('p', null, tersambung ? 'Menunggu pemimpin membuka aplikasinya. Halaman ini tersambung sendiri begitu room siap.' : 'Sebentar, perangkat ini sedang menghubungi room.'))) };
    }

    // ---------- (a) gabung ----------
    function layarGabung() {
      const kodeT = fn(r, 'formatKode') ? r.formatKode(kodeParam) : kodeParam;
      if (lokal.intip === undefined && !lokal.intipJalan) {
        lokal.intipJalan = true; lokal.lambat = false; lokal.jalur = null;
        const batas = new Promise(res => setTimeout(() => res(null), 9000));
        // v9.4 Ka3: tidak ada internet → katakan langsung (tidak menunggu 9 detik); tersambung lagi → coba sendiri
        if (!daring()) { lokal.intip = null; lokal.intipJalan = false; return layarGabungGagal(); }
        // v9.4 Ka2/Ka3: lewat 3 detik masih mencari → kalimat "masih mencari" dan jalur sambungan diuji sekaligus. Semua jalur gagal → katakan sekarang.
        const tokenIntip = lokal.tokenIntip = (lokal.tokenIntip || 0) + 1;
        setTimeout(() => {
          if (lokal.tokenIntip !== tokenIntip || lokal.intip !== undefined) return;
          lokal.lambat = true; jadwal();
          ujiJalur().then(hasil => {
            if (lokal.tokenIntip !== tokenIntip || lokal.intip !== undefined || !hasil) return;
            lokal.jalur = hasil;
            if (hasil.length && !hasil.some(x => x.ok)) { lokal.intip = null; lokal.intipJalan = false; jadwal(); }
          });
        }, 3000);
        const selesaiIntip = st => {
          if (lokal.tokenIntip !== tokenIntip || lokal.intip !== undefined) return;
          if (st || lokal.tidakAda) { lokal.intip = st; jadwal(); return; }
          // tidak ada room: pastikan dulu jalurnya (room tidak ditemukan ≠ jaringan memblokir)
          const segar = ujiJalurTerakhir && Date.now() - ujiJalurTerakhir.t < 20000 ? Promise.resolve(ujiJalurTerakhir.hasil) : ujiJalur();
          segar.then(hasil => { if (lokal.tokenIntip !== tokenIntip || lokal.intip !== undefined) return; lokal.jalur = hasil; lokal.intip = null; jadwal(); });
        };
        if (fn(r, 'intipRinci')) {
          // v9.2 G3: { state, ditutup, online } → room yang sudah ditutup dikatakan langsung; online = nama yang sedang tersambung (null = tidak diketahui)
          Promise.race([Promise.resolve().then(() => r.intipRinci(kodeParam)).catch(() => null), batas]).then(x => {
            let st = x && x.state && x.state.room && !x.ditutup ? x.state : null; if (x && x.ditutup) lokal.tidakAda = 'tutup';
            if (st && Array.isArray(x.online) && !Array.isArray(st.online)) st = Object.assign({}, st, { online: x.online });
            selesaiIntip(st); });
        } else if (fn(r, 'intip')) {
          Promise.race([Promise.resolve().then(() => r.intip(kodeParam)).catch(() => null), batas]).then(st => { selesaiIntip(st && st.room ? st : null); });
        } else lokal.intip = null;
      }
      const st = lokal.intip || null;
      const memuat = lokal.intip === undefined;
      const namaR = st && st.room && st.room.nama ? st.room.nama : null;
      const tingkat = st && st.room && st.room.tingkat ? st.room.tingkat : null;
      // v9.2 A.1: daftar nama HANYA dari room (tidak pernah dari kode); selama belum termuat tampil kerangka
      const daftar = st ? pesertaRoom(st) : [];
      const tuan = st && st.tuan ? rapikan(st.tuan) : null;
      // st.online hanya ada bila js/ruang.js menyertakannya pada intip(); tanpa itu status pemimpin tidak diketahui
      const onlineIntip = st && Array.isArray(st.online) ? st.online : null;
      const ingat = lsBaca('ukp.tim.namaRoom', {});
      const namaIngat = ingat && ingat[kodeParam] ? ingat[kodeParam] : null;
      const judul = namaR ? 'Gabung room "' + namaR + '"' : 'Gabung room tim';
      const lead = tuan && !lokal.tidakAda && lokal.intip !== null ? teksLeadGabung({ tuan, online: onlineIntip, daftar, menghubungkan: lokal.gabungJalan }) : null;
      const node = h('div', { class: 'stack layar-gabung' });
      node.appendChild(kop(judul, { lead, meta: tingkat ? [UKP.c.pill('Tingkat ' + tingkat)] : null }));
      // V3: tautan room yang sudah ditutup (nisan) atau tidak ditemukan → katakan, jangan menunggu tanpa akhir / jatuh ke "Buat room".
      // v9.4 Ka3: sebabnya dibedakan (tidak ada internet · semua jalur gagal · room ditutup · room tidak ditemukan), satu tindakan utama
      if (lokal.tidakAda || (lokal.intip === null && !lokal.gabungJalan)) return layarGabungGagal(node);
      if (lokal.langkah === 'ganda') {
        node.appendChild(h('section', { class: 'card stack' },
          h('h2', { class: 'card-title', tabindex: '-1', 'data-fokus-awal': '' }, lokal.namaDipilih + ' sudah masuk di perangkat lain.'),
          h('p', { class: 'small' }, 'Bila itu memang Anda (misalnya HP lama), masuk di sini saja. Bila bukan, pilih nama Anda sendiri.'),
          h('div', { class: 'btn-row' },
            h('button', { type: 'button', class: 'btn btn-primary room-ini-saya', onclick: () => { lokal.langkah = 'nama'; lokal.izinGanda = lokal.namaDipilih; pilihNama(lokal.namaDipilih); } }, 'Ini saya, masuk di sini'),
            h('button', { type: 'button', class: 'btn room-nama-lain', onclick: () => { lokal.langkah = 'nama'; lokal.namaDipilih = null; lokal.izinGanda = null; gambar(true); } }, 'Pilih nama lain'))));
        return { node };
      }
      // v9.3.2 A.4: selama menghubungkan, satu kartu yang jelas (juga saat masuk otomatis); bila gagal, kembali ke daftar nama dengan pesan galat yang ada
      if (lokal.gabungJalan) {
        node.appendChild(h('section', { class: 'card stack-sm hubung-room', 'aria-labelledby': 'hubung-j', 'aria-busy': 'true' },
          h('h2', { class: 'card-title', id: 'hubung-j', role: 'status', tabindex: '-1', 'data-fokus-awal': '' }, 'Menghubungkan ke room…'),
          lokal.namaDipilih ? h('p', null, 'Masuk sebagai ', h('strong', null, lokal.namaDipilih)) : null,
          h('span', { class: 'hubung-bilah', 'aria-hidden': 'true' })));
        return { node };
      }
      if (memuat) {
        node.appendChild(h('section', { class: 'card stack pilih-nama', 'aria-labelledby': 'siapa-j', 'aria-busy': 'true' },
          h('h2', { class: 'card-title', id: 'siapa-j' }, 'Siapa Anda?'),
          h('p', { class: 'small muted', role: 'status' }, lokal.lambat ? 'Masih mencari room. Biasanya kurang dari 10 detik.' : 'Mencari room dan daftar nama…'),
          h('div', { class: 'grid-nama-room kerangka-nama', 'aria-hidden': 'true' }, [0, 1, 2, 3].map(() => h('span', { class: 'nama-room kerangka' }))),
          lokal.lambat ? h('button', { type: 'button', class: 'tautan-tombol room-info-sambungan', onclick: () => dialogInfoSambungan(kodeParam) }, 'Info sambungan') : null));
        return { node };
      }
      const galat = h('p', { class: 'galat small', role: 'alert', hidden: !lokal.galat }, lokal.galat || '');
      // room yang daftarnya baru berisi nama pemimpin: langsung isian nama (anggota baru menulis namanya sendiri)
      const adaAnggota = daftar.some(n => !samaNama(n, tuan));
      const isianTerbuka = lokal.namaLain || !adaAnggota;
      const tombolNama = adaAnggota ? daftar.map(n => {
        const on = onlineIntip ? onlineIntip.some(x => samaNama(x, n)) : false;
        return h('button', { type: 'button', class: 'nama-room', 'aria-pressed': samaNama(n, lokal.namaDipilih || namaIngat) ? 'true' : 'false', disabled: lokal.gabungJalan ? true : null, onclick: () => pilihNama(n) },
          h('span', { class: 'nama' }, n), samaNama(n, tuan) ? h('span', { class: 'meta' }, 'pemimpin') : null, on ? h('span', { class: 'meta nama-dipakai' }, 'sedang dipakai') : null);
      }) : [];
      const iid = UKP.util.id('nama-lain');
      const inp = h('input', { class: 'input', id: iid, type: 'text', maxlength: '24', autocomplete: 'name', autocapitalize: 'words', enterkeyhint: 'go', placeholder: 'mis. Budi', value: lokal.namaLainTeks || '' });
      const kirimLain = () => { const n = rapikan(inp.value); lokal.namaLainTeks = inp.value; if (!n) { lokal.galat = 'Tulis nama Anda dulu.'; gambar(true); return; }
        if (!namaSah(n)) { lokal.galat = 'Nama itu tidak bisa dipakai. Tulis nama panggilan Anda (1 sampai 24 karakter).'; gambar(true); return; }
        pilihNama(n); };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); kirimLain(); } });
      node.appendChild(h('section', { class: 'card stack pilih-nama', 'aria-labelledby': 'siapa-j' },
        h('h2', { class: 'card-title', id: 'siapa-j' }, 'Siapa Anda?'),
        adaAnggota ? h('div', { class: 'grid-nama-room', role: 'group', 'aria-labelledby': 'siapa-j' }, tombolNama,
          lokal.namaLain ? null : h('button', { type: 'button', class: 'nama-room lain', disabled: lokal.gabungJalan ? true : null, onclick: () => { lokal.namaLain = true; gambar(true); setTimeout(() => { const x = page.querySelector('#' + iid); if (x) x.focus(); }, 30); } }, h('span', { class: 'nama' }, 'Nama saya tidak ada'))) : null,
        isianTerbuka ? h('div', { class: 'field' }, h('label', { for: iid }, adaAnggota ? 'Tulis nama Anda' : 'Nama Anda'), h('div', { class: 'isian-baris' }, inp, h('button', { type: 'button', class: 'btn btn-primary room-masuk-nama', disabled: lokal.gabungJalan ? true : null, onclick: kirimLain }, 'Masuk room'))) : null,
        galat,
        // v9.3.2 A.1: pengganti layar persetujuan lama (satu ketukan tambahan dihapus)
        h('p', { class: 'small muted catatan-privasi-room' }, 'Jawaban dan hasil latihan Anda terlihat oleh anggota room. Jangan teruskan tautan ke luar tim.')));
      node.appendChild(h('p', { class: 'meta' }, 'Nama diingat di HP ini, jadi lain kali langsung masuk.'));
      node.appendChild(h('p', { class: 'meta' }, h('button', { type: 'button', class: 'tautan-tombol room-info-sambungan', onclick: () => dialogInfoSambungan(kodeParam) }, 'Info sambungan')));
      // kunjungan berikutnya: nama diingat (ditulis hanya setelah berhasil masuk) → langsung masuk tanpa ketukan.
      // v9.3.2: layar persetujuan sudah tidak ada, jadi ukp.tim.setuju (hanya menyimpan SATU kode room) tidak lagi menjadi syarat di sini.
      if (namaIngat && !lokal.autoCoba && !lokal.gabungJalan) { lokal.autoCoba = true; lokal.izinGanda = namaIngat; setTimeout(() => pilihNama(namaIngat), 0); }
      // v9.3.2 A.2: belum pernah masuk room ini, tetapi nama profil perangkat ini ada di daftar → langsung masuk tanpa ketukan
      else if (!namaIngat && !lokal.autoCoba && !lokal.gabungJalan && !lokal.galat) {
        const tolak = !!(lsBaca(KBUKAN, {}) || {})[kodeParam];
        const nmProfil = namaDariProfil({ profil: aman(() => UKP.store.get().profil, null), daftar, tuan, online: onlineIntip, tolak, sah: namaSah });
        if (nmProfil) { lokal.autoCoba = true; setTimeout(() => pilihNama(nmProfil), 0); }
      }
      return { node };
    }
    // v9.4 Ka3: kartu gagal masuk room. node = layar gabung yang sudah berisi kop (bila tidak ada, kop umum dibuat di sini)
    function layarGabungGagal(node) {
      node = node || h('div', { class: 'stack layar-gabung' }, kop('Gabung room tim'));
      const sb = sebabGagal({ daring: daring(), jalur: lokal.jalur, tidakAda: lokal.tidakAda === 'tutup' ? 'tutup' : null });
      const coba = () => { lokal.intip = undefined; lokal.intipJalan = false; lokal.tidakAda = null; lokal.jalur = null; lokal.galat = null; gambar(true); };
      if (sb.kunci === 'internet') root.addEventListener('online', () => { if (page.isConnected && keadaan() === 'gabung' && lokal.intip === null) coba(); }, { once: true });
      const utama = sb.kunci === 'tutup' ? UKP.link('Ke Beranda', 'beranda', null, 'btn btn-primary room-ke-beranda')
        : h('button', { type: 'button', class: 'btn btn-primary room-coba-lagi', onclick: coba }, UKP.icon('atur-ulang', null, true), 'Coba lagi');
      node.appendChild(h('section', { class: 'card stack room-tidak-ada', 'data-sebab': sb.kunci, 'aria-labelledby': 'tidak-ada-j' },
        h('h2', { class: 'card-title', id: 'tidak-ada-j', tabindex: '-1', 'data-fokus-awal': '' }, sb.judul),
        h('p', null, sb.teks),
        h('div', { class: 'btn-row' }, utama, sb.kunci === 'tutup' ? null : UKP.link('Ke Beranda', 'beranda', null, 'btn btn-ghost')),
        h('p', { class: 'meta' }, h('button', { type: 'button', class: 'tautan-tombol room-info-sambungan', onclick: () => dialogInfoSambungan(kodeParam) }, 'Info sambungan'))));
      try { UKP.umumkan(sb.judul); } catch (e) {}
      return { node };
    }
    async function pilihNama(nama) {
      nama = rapikan(nama); if (!nama || lokal.gabungJalan) return;
      lokal.namaDipilih = nama; lokal.galat = null;
      // v9.2: nama (dari tombol atau diketik, tanpa beda huruf besar-kecil, termasuk nama pemimpin) yang sedang tersambung di perangkat lain → tanya dulu
      const st = lokal.intip; const onIntip = st && Array.isArray(st.online) ? st.online : [];
      if (!samaNama(lokal.izinGanda, nama) && onIntip.some(x => samaNama(x, nama))) { lokal.langkah = 'ganda'; gambar(true); return; }
      // v9.4 (Ka2): dialog konfirmasi saat nama yang diketuk berbeda dengan nama profil dihapus: satu ketukan dan satu layar tambahan di jalan menuju room.
      // Salah ketuk tetap mudah dibetulkan: lobi menampilkan "Anda masuk sebagai … · Bukan Anda? Ganti nama". Nama profil tidak diubah.
      masuk(nama);
    }
    async function masuk(nama) {
      const rr = R(); if (!rr || lokal.gabungJalan) return;
      lokal.gabungJalan = true; lokal.langkah = 'nama'; gambar(true);
      let hasil = null; let kenaTutup = false;
      const lepasTutup = fn(rr, 'on') ? aman(() => rr.on('tutup', () => { kenaTutup = true; }), null) : null;
      try { hasil = await rr.gabung(kodeParam, nama); }
      catch (e) {
        if (typeof lepasTutup === 'function') lepasTutup();
        let pesan = (e && /Kode/.test(e.message)) ? 'Tautan room tidak dikenali. Salin ulang tautan lengkap dari grup.' : alasanAwam(e && e.message);
        // v9.4 Ka3: sebab yang bisa dipastikan (tidak ada internet, semua jalur gagal) dikatakan dengan kalimat yang sama seperti kartu gagal
        if (!(e && /Kode/.test(e.message))) { const sb = sebabGagal({ daring: daring(), jalur: daring() ? await ujiJalur() : null }); if (sb.kunci === 'internet' || sb.kunci === 'jalur') pesan = sb.judul + '. ' + sb.teks; }
        lokal.gabungJalan = false; lokal.galat = pesan; gambar(true); return;
      }
      if (typeof lepasTutup === 'function') lepasTutup();
      // V3: gabung() → null tanpa room di perangkat ini = room bernisan (ditutup) atau dibatalkan → layar "sudah ditutup", bukan "Buat room"
      if (!hasil && !info()) { lokal.gabungJalan = false; lokal.tidakAda = kenaTutup ? 'tutup' : 'kosong'; gambar(true); return; }
      klaimTab();
      // v9.3.2 A.1: tanda persetujuan tetap ditulis saat masuk (versi lama di perangkat ini memakainya untuk masuk otomatis)
      lsTulis('ukp.tim.setuju', kodeParam);
      const ingat = lsBaca('ukp.tim.namaRoom', {}) || {}; ingat[kodeParam] = nama; lsTulis('ukp.tim.namaRoom', ingat);
      // pengunjung baru: cukup nama; tingkat mengikuti room, onboarding dianggap selesai (seperti Ikut ujian tim)
      const s = UKP.store.get(); const st = hasil || stR();
      if (!rapikan(s.profil.nama)) s.profil.nama = nama;
      if (!s.profil.onboardingSelesai) { s.profil.onboardingSelesai = true; const t = st && st.room ? st.room.tingkat : null; if (['A', 'B', 'C'].includes(t)) s.profil.tingkat = t; }
      UKP.store.save(); try { if (UKP.perbaruiTopbar) UKP.perbaruiTopbar(); } catch (e) {}
      lokal.gabungJalan = false;
      // nama ganda (hadir().ganda, bila disediakan)
      const hd = fn(rr, 'hadir') ? aman(() => ambilDari(rr.hadir(), nama), null) : null;
      if (hd && hd.ganda && !samaNama(lokal.izinGanda, nama)) toast('Nama ' + nama + ' juga dipakai di perangkat lain. Jawaban terakhir yang berlaku.', { nada: 'warn', ms: 8000 });
      const a = st && st.aktivitas; if (a && a.jenis === 'latihan' && a.idx > 0) lokal.bergabungDi[a.id] = a.idx;
      try { history.replaceState({ view: 'room', params: {} }, '', UKP.href('room', {})); } catch (e) {}
      kodeParam = null;
      gambar(true);
    }

    // ---------- (c) lobi ----------
    // C.1 / B.1 v9.2: kartu lobi, satu fakta per baris. Pemimpin: berapa yang sudah masuk, siapa yang siap. Anggota: siapa yang sudah masuk.
    function siapLobi(st) {
      const pes = pesertaRoom(st); const on = onlineKini();
      if (!st.lobi || !st.lobi.id) return null;
      const hd = fn(r, 'hadir') ? aman(() => r.hadir(), {}) : {};
      return pes.filter(p => !samaNama(p, st.tuan) && siapDi(ambilDari(hd, p), st.lobi.id) && on.some(y => samaNama(y, p)));
    }
    function kartuPembuka(st, i) {
      const pes = pesertaRoom(st); const on = onlineKini();
      const hadir = pes.filter(p => on.some(x => samaNama(x, p)));
      if (i.peran === 'tuan') {
        const siap = siapLobi(st);
        return h('div', { class: 'kartu-pembuka' },
          h('p', { class: 'pembuka-utama' }, teksMasuk(hadir.length, pes.length)),
          barisInisial(st),
          barisInginIkut(),
          siap ? h('p', { class: 'baris-siap' }, teksSiap(siap)) : null,
          h('p', { class: 'meta' }, 'Anda boleh mulai kapan saja. Yang belum masuk bisa diisi dari laptop ini.'));
      }
      return h('div', { class: 'kartu-pembuka' },
        h('p', { class: 'pembuka-utama' }, 'Sudah masuk: ' + hadir.length + ' dari ' + pes.length + ' orang'),
        barisInisial(st));
    }
    // V10 temuan 2: "Ingin ikut: Dodi" · Tambahkan · Abaikan (maks 3 baris, sisanya "dan N lainnya"); hanya nama yang sedang online
    function barisInginIkut() {
      const calon = daftarCalonTamu(); if (!calon.length) return null;
      const tampil = calon.slice(0, 3);
      return h('ul', { class: 'ingin-ikut', 'aria-label': 'Ingin ikut' }, tampil.map(n => h('li', { 'data-nama': n },
        h('span', { class: 'ingin-ikut-teks' }, 'Ingin ikut: ', h('strong', null, n)),
        h('button', { type: 'button', class: 'btn btn-sm room-tambah-tamu', onclick: () => tambahkanTamu(n) }, UKP.icon('tambah', null, true), 'Tambahkan'),
        h('button', { type: 'button', class: 'tautan-tombol room-abaikan-tamu', onclick: () => abaikanTamu(n) }, 'Abaikan'))),
        calon.length > 3 ? h('li', { class: 'meta' }, 'dan ' + (calon.length - 3) + ' lainnya') : null);
    }
    // V10 temuan 12: ganti isi slot hanya bila tampilannya berubah (ketukan tidak hilang saat ada kabar kehadiran)
    function gantiBilaBeda(slot, anak) {
      const tmp = h('div', null, ...[].concat(anak).filter(Boolean));
      if (slot.innerHTML === tmp.innerHTML) return false;
      slot.replaceChildren(...Array.from(tmp.childNodes)); return true;
    }
    function namaTopikSoal(id) {
      const q = K && fn(K, 'soal') ? aman(() => K.soal(id), null) : null; if (!q) return null;
      const t = fn(K, 'topik') ? aman(() => K.topik(q.topik), null) : null;
      return t && t.judul ? t.judul : fn(K, 'namaKelompok') ? aman(() => K.namaKelompok(q.kode), null) : null;
    }
    function kartuRekap(sl, i) {
      // T6: rekap penutup (HP anggota dan pemimpin) setelah aktivitas latihan berakhir
      if (!sl || Date.now() - sl.t > 3 * 3600000) return null;
      const tuan = i.peran === 'tuan'; const pemimpin = namaPemimpin(stR());
      const wadah = h('section', { class: 'card sorot stack-sm rekap-room', 'aria-labelledby': 'rekap-j' });
      const isi = sesi => {
        if (sl.jenis === 'ujian') {
          wadah.replaceChildren(h('h2', { class: 'card-title', id: 'rekap-j' }, sesi ? 'Hasil ujian tim tersedia' : 'Ujian tim selesai'),
            h('p', { class: 'small' }, sesi ? 'Nilai Anda dan rata-rata tim bisa dilihat sekarang.' : 'Menunggu pemimpin menilai.'),
            sesi ? h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('tim', { anggota: 'sesi:' + sesi.id }) }, 'Lihat hasil')) : null);
          return;
        }
        const rk = sesi ? rekapPenutup(sesi, i.nama, { namaTopik: namaTopikSoal }) : null;
        const baris = rk ? rk.baris.concat(rk.bahasLagi ? [rk.bahasLagi] : [], rk.terimaKasih ? [rk.terimaKasih] : []) : [];
        wadah.replaceChildren(h('h2', { class: 'card-title', id: 'rekap-j' }, 'Latihan tadi selesai'),
          rk ? h('ul', { class: 'rekap-baris' }, baris.map(b => h('li', null, b))) : h('p', { class: 'small', role: 'status' }, 'Mengambil hasil latihan dari room…'),
          rk && rk.hasilku ? h('p', { class: 'rekap-hasilku' }, h('strong', null, rk.hasilku)) : null,
          tuan ? null : h('p', { class: 'small muted' }, 'Latihan berikutnya dimulai bila ' + pemimpin + ' memulai lagi. Anda boleh menutup halaman ini.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn room-evaluasi', onclick: () => UKP.go('tim', { anggota: 'sesi:' + sl.id }) }, 'Lihat hasil lengkap'),
            rk && tuan ? UKP.c.salin(rk.salin, { label: 'Salin rekap untuk WA', kelas: 'btn', pesan: 'Rekap disalin.' }) : null));
      };
      if (sl.jenis === 'ujian') {
        // v8.2 V4: id aktivitas ujian = id ujian; rekaman hasil ber-id 'sb-…' membawa ujianId → cari lewat ujianId (lokal, lalu riwayat room)
        const cocok = s => s && s.ujianId === sl.id ? s : null;
        const lokalU = fn(L, 'sesiBersama') ? aman(() => (L.sesiBersama() || []).find(cocok), null) : null;
        isi(lokalU || null);
        if (!lokalU && fn(r, 'mintaSesi')) {
          const calon = (fn(r, 'riwayat') ? aman(() => r.riwayat(), []) : []).filter(e => e && e.mode === 'ujian' && Number(e.t) >= sl.t - 6 * 3600000).slice(0, 3);
          (async () => { for (const e of calon) { const s = await Promise.resolve(r.mintaSesi(e.id)).catch(() => null); if (cocok(s)) { if (wadah.isConnected) isi(s); return; } } })();
        }
        return wadah;
      }
      const lokalS = fn(L, 'sesiBersamaDari') ? aman(() => L.sesiBersamaDari(sl.id), null) : null;
      isi(lokalS);
      if (!lokalS && fn(r, 'mintaSesi')) Promise.resolve().then(() => r.mintaSesi(sl.id)).then(s => { if (s && wadah.isConnected) isi(s); }).catch(() => {});
      return wadah;
    }
    function daftarRiwayat() {
      const riw = (fn(r, 'riwayat') ? aman(() => r.riwayat(), []) : []).slice(0, 8);
      if (!riw.length) return null;
      return h('section', { class: 'sect riwayat-room', 'aria-labelledby': 'riw-j' }, h('div', { class: 'sect-head' }, h('h2', { id: 'riw-j' }, 'Riwayat room')),
        h('div', { class: 'list-rows' }, riw.map(e => h('button', { type: 'button', class: 'row-link baris-tombol', onclick: () => UKP.go('tim', { anggota: 'sesi:' + e.id }) },
          h('span', { class: 'row-isi' }, h('span', { class: 'row-title small' }, teksRiwayat(e))), UKP.icon('chevron-kanan', 'chev', true)))));
    }
    // V10 temuan 6: butir menu ⋮ lobi tidak basi. Bila butir berubah (mis. "Pimpin dari perangkat ini" saat pemimpin > 60 dtk hilang)
    // dan menu sedang TERTUTUP, elemen menu saja yang diganti; menu yang sedang terbuka tidak pernah diganti.
    function segarkanMenu() {
      const m = page.querySelector('.lobi-room .menu-room'); if (!m || m.open) return;
      const teks = UI.itemMenu().map(x => x.teks).join('|'); if (m.dataset.butir === teks) return;
      const baru = UI.menu(); if (baru) m.replaceWith(baru);
    }
    function layarLobi() {
      const i = info(); const st = stR(); const tuan = i.peran === 'tuan'; lokal.detikLobi = 0;
      // T2: pemimpin membuka lobi agar anggota bisa menekan "Siap"
      if (tuan && !st.lobi && fn(r, 'bukaLobi')) { try { r.bukaLobi(); } catch (e) {} }
      const node = h('div', { class: 'stack lobi-room', 'data-peran': tuan ? 'pemimpin' : 'anggota' });
      node.appendChild(kopDenganMenu(st.room.nama || 'Room tim', { meta: [st.room.tingkat ? UKP.c.pill('Tingkat ' + st.room.tingkat) : null, UKP.c.statusRoom()].filter(Boolean) }));
      let slIdRekap = (selesaiTerakhir() || {}).id || '';
      const slotRekap = h('div', { class: 'slot-rekap' }, kartuRekap(selesaiTerakhir(), i) || ''); node.appendChild(slotRekap);
      const slotPembuka = h('div', { class: 'slot-pembuka' }, kartuPembuka(st, i));
      const slotAksi = h('div', { class: 'stack-sm slot-aksi' });
      const kartu = h('section', { class: 'card stack lobi-kartu', 'aria-label': 'Lobi' }, ...(tuan ? [slotPembuka, slotAksi] : [slotAksi, slotPembuka]));
      node.appendChild(kartu);
      function aksi() {
        const s2 = stR(); if (!s2) return;
        const tuanOn = onlineKini().some(n => samaNama(n, s2.tuan));
        const pemimpin = namaPemimpin(s2);
        if (tuan) {
          gantiBilaBeda(slotAksi, [
            h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-utama', onclick: () => UI.dialogMulaiLatihan() }, UKP.icon('play', null, true), 'Mulai latihan bersama'),
            h('div', { class: 'lobi-lain' }, h('button', { type: 'button', class: 'btn room-undang', onclick: () => UI.dialogBagikan() }, UKP.icon('chat', null, true), 'Undang anggota'),
              h('button', { type: 'button', class: 'tautan-tombol room-ujian-tim', onclick: () => UKP.go('simulasi', { tim: 1, room: 1 }) }, 'Ujian tim (kunci jawaban dibuka di akhir)'),
              UKP.views.bank ? h('button', { type: 'button', class: 'tautan-tombol room-bank', onclick: () => UKP.go('bank') }, 'Bank soal') : null)]);  // v9.5
          return;
        }
        // anggota: siapa saya · (belum di daftar) · tombol Saya siap
        const diDaftar = pesertaRoom(s2).some(p => samaNama(p, i.nama));
        const identitas = h('div', { class: 'identitas-room' }, h('p', null, 'Anda masuk sebagai ', h('strong', null, i.nama)),
          h('button', { type: 'button', class: 'tautan-tombol room-ganti-nama', onclick: gantiNama }, 'Bukan Anda? Ganti nama'));
        const belumDaftar = diDaftar ? null : h('p', { class: 'catatan-daftar', role: 'status' }, 'Nama Anda belum ada di daftar tim. ' + pemimpin + ' perlu menambahkan Anda.');
        let bawah;
        if (!tuanOn) bawah = [h('p', { class: 'menunggu-pemimpin', role: 'status' }, pemimpin + ' belum membuka room. Soal muncul di sini saat ia memulai latihan.'),
          tuanHilangSejak && Date.now() - tuanHilangSejak > 300000 ? h('p', { class: 'small muted' }, 'Pemimpin sedang tidak tersambung. Tunggu sebentar, atau minta ia membuka laptopnya lagi.') : null];
        else {
          const hd = fn(r, 'hadir') ? aman(() => ambilDari(r.hadir(), i.nama), null) : null;
          const sudahSiap = !!(s2.lobi && (siapDi(hd, s2.lobi.id) || lokal.siapLobi === s2.lobi.id));
          if (s2.lobi && fn(r, 'kirimSiap')) bawah = sudahSiap
            ? [h('p', { class: 'siap-ok', role: 'status' }, h('strong', null, 'Anda sudah siap.'), ' Soal muncul di sini saat ' + pemimpin + ' memulai.')]
            : [h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block room-siap', 'data-lobi': s2.lobi.id, onclick: () => { lokal.siapLobi = s2.lobi.id; try { r.kirimSiap(true); } catch (e) {} aksi(); } }, 'Saya siap'),
              h('p', { class: 'meta' }, pemimpin + ' melihat siapa yang siap, lalu memulai soal.')];
          else bawah = [h('p', { class: 'menunggu-pemimpin', role: 'status' }, 'Menunggu ' + pemimpin + ' memulai latihan.')];
        }
        gantiBilaBeda(slotAksi, [identitas, belumDaftar, ...bawah]);
      }
      aksi();
      const slotRiw = h('div', null, daftarRiwayat()); node.appendChild(slotRiw);
      return { node, perbarui: () => { const s2 = stR(); if (s2) {
        if (tuan && !s2.lobi && fn(r, 'bukaLobi')) { try { r.bukaLobi(); } catch (e) {} }
        const sl = selesaiTerakhir(); const sid = (sl || {}).id || '';
        if (sid !== slIdRekap) { slIdRekap = sid; slotRekap.replaceChildren(kartuRekap(sl, i) || ''); }
        gantiBilaBeda(slotPembuka, kartuPembuka(s2, i)); aksi(); gantiBilaBeda(slotRiw, daftarRiwayat()); segarkanMenu(); } },
        detik: () => { if (++lokal.detikLobi % 5 === 0) segarkanMenu(); } };
    }

    // ---------- (d) latihan di HP anggota ----------
    function kepalaSesi(st, a, judulTambahan) {
      const nm = st.room.nama || 'Room';
      const waktu = h('span', { class: 'waktu', role: 'timer', 'aria-live': 'off' });
      const n = Array.isArray(a.soalIds) ? a.soalIds.length : 0;
      const adaWaktu = !!(a.akhirSesi || a.akhir);
      // B.2 v9.2: "Soal 1 dari 10 · sisa 21:00"
      // v9.5.3 Bx1: latihan yang anggarannya habis tetap berjalan → "· waktu latihan habis" (sama dengan papan pemimpin), bukan "sisa 00:00"
      const labelSisa = adaWaktu ? h('span', { class: 'waktu-label' }, ' · sisa ') : null;
      const isiJudul = [h('span', { class: 'fokus-room-nama' }, nm + ' · '), a.jenis === 'latihan' ? 'Soal ' + (a.idx + 1) + ' dari ' + n : (judulTambahan || 'Ujian tim'), labelSisa, adaWaktu ? waktu : null];
      const ujian = a.jenis === 'ujian';
      const keluar = async () => {
        if (await UKP.konfirmasi(ujian ? 'Keluar dari ujian tim?' : 'Keluar dari latihan?', 'Anda bisa kembali lewat tab Mabar.', { ya: 'Keluar' })) UKP.go('beranda');
      };
      const nOrang = Array.isArray(a.peserta) && a.peserta.length ? a.peserta.length : pesertaRoom(st).length;
      const opsi = { label: 'Room ' + nm, labelKeluar: ujian ? 'Keluar dari ujian tim' : 'Keluar dari latihan', onKeluar: keluar, judul: '', menu: UI.itemMenu(), tengah: nOrang ? nOrang + ' orang' : null };
      const bar = UKP.c.fokusBar(opsi);
      bar.classList.add('bar-room');
      bar.atur(isiJudul.filter(x => x != null), n ? (a.jenis === 'latihan' ? ((a.idx + (a.fase === 'kunci' ? 1 : 0)) / n) * 100 : null) : null, [UKP.c.statusRoom({ ringkas: true })]);
      if (!bar.querySelector('.fokus-menu')) { const m = UI.menu(); if (m) bar.appendChild(m); }
      const detik = () => { const sisa = sisaDetik(a.akhirSesi || a.akhir, selisih()); const t = teksSisaKop(sisa, a.jenis);
        if (labelSisa && labelSisa.textContent !== t.label) labelSisa.textContent = t.label; if (waktu.textContent !== t.waktu) waktu.textContent = t.waktu; waktu.toggleAttribute('data-habis', t.habis); };
      detik();
      // v9.4 FB3: HP anggota selalu menunjukkan sedang masuk sebagai siapa (salah ketuk nama dibetulkan lewat Menu › Ganti nama)
      const i = info();
      const anda = i && i.peran !== 'tuan' ? h('p', { class: 'room-anda small' }, 'Anda: ', h('strong', null, i.nama)) : null;
      return { bar, detik, anda };
    }
    // B.7 v9.2: lembar "Soal sebelumnya" (soal yang kunci jawabannya sudah dibuka di latihan ini; tanpa nama siapa pun)
    function soalLalu(a) {
      const sidKini = a.soalIds[a.idx]; const d = bacaLalu(a.id);
      return Object.keys(d).filter(id => id !== sidKini && isObj(d[id])).map(id => Object.assign({ id }, d[id])).sort((x, y) => x.idx - y.idx);
    }
    function tombolLalu(a) {
      if (!(a.idx > 0) || !soalLalu(a).length) return null;
      return h('div', { class: 'baris-lalu' }, h('button', { type: 'button', class: 'btn btn-ghost btn-sm room-soal-lalu', onclick: () => bukaLembarLalu() }, UKP.icon('chevron-kiri', null, true), 'Soal sebelumnya'));
    }
    function bukaLembarLalu() {
      const st = stR(); const a = st && st.aktivitas; if (!a || a.jenis !== 'latihan' || lokal.lembar) return;
      const daftar = soalLalu(a); if (!daftar.length) return;
      const jejak = [a.id, a.idx, a.fase].join('|'); const noKini = a.idx + 1;
      const wadah = h('div', { class: 'stack lembar-lalu' });
      const barisDaftar = () => {
        wadah.replaceChildren(h('p', { class: 'small muted' }, 'Soal yang kunci jawabannya sudah dibuka. Jawaban soal ' + noKini + ' tidak berubah.'),
          h('div', { class: 'list-rows daftar-lalu' }, daftar.map(e => {
            const benar = e.o && e.o === e.kunci; const topik = namaTopikSoal(e.id);
            return h('button', { type: 'button', class: 'row-link baris-tombol baris-lalu-soal', 'data-hasil': e.o ? (benar ? 'benar' : 'salah') : 'kosong', onclick: () => detail(e) },
              h('span', { class: 'tanda-lalu', 'aria-hidden': 'true' }, UKP.icon(benar ? 'cek-lingkar' : 'x-lingkar', null, true)),
              h('span', { class: 'row-isi' }, h('span', { class: 'row-title' }, 'Soal ' + (e.idx + 1) + (topik ? ' · ' + topik : '')),
                h('span', { class: 'row-meta' }, teksBarisLalu(e) + (benar ? ' · benar' : e.o ? ' · salah' : ''))),
              UKP.icon('chevron-kanan', 'chev', true));
          })));
      };
      const detail = e => {
        const soal = K && fn(K, 'soal') ? K.soal(e.id) : null; const topik = namaTopikSoal(e.id);
        const kel = { benar: e.benar || 0, dijawab: (e.benar || 0) + (e.salah || 0), total: (e.benar || 0) + (e.salah || 0) + (e.kosong || 0) };
        let isiSoal = null;
        if (soal) { try { isiSoal = UKP.c.soal(soal, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: e.o || '-', konteks: 'ulas', tanpaTutor: true }); } catch (x) { isiSoal = h('p', { class: 'small' }, 'Soal ini belum bisa ditampilkan.'); } }
        wadah.replaceChildren(
          h('button', { type: 'button', class: 'btn btn-ghost btn-sm rata', onclick: barisDaftar }, UKP.icon('chevron-kiri', null, true), 'Semua soal sebelumnya'),
          h('h3', { class: 'judul-lalu' }, 'Soal ' + (e.idx + 1) + (topik ? ' · ' + topik : '')),
          h('p', { class: 'ringkas-lalu' }, h('strong', null, (e.o ? 'Anda ' + e.o + (e.k ? ' (' + labelYakin(e.k) + ')' : '') : 'Anda tidak menjawab') + ' · kunci jawaban ' + (e.kunci || '?'))),
          h('p', { class: 'small' }, teksSoalIni(kel, false)),
          isiSoal);
        try { wadah.closest('.dlg-body').scrollTop = 0; } catch (x) {}
      };
      barisDaftar();
      const dlg = UKP.dialog({ judul: 'Soal sebelumnya', sheet: true, kelas: 'dlg-room dlg-lalu-room', isi: wadah,
        kaki: d => [h('button', { type: 'button', class: 'btn btn-primary room-kembali-soal', onclick: () => d.close('ok') }, 'Kembali ke soal ' + noKini)],
        onClose: () => { lokal.lembar = null; if (lepasL) lepasL(); } });
      lokal.lembar = dlg;
      // tertutup sendiri bila pemimpin membuka kunci jawaban atau pindah soal
      const lepasL = dengar(j => {
        if (j !== 'state' && j !== 'status') return;
        const s2 = stR(); const a2 = s2 && s2.aktivitas;
        const baru = a2 ? [a2.id, a2.idx, a2.fase].join('|') : '';
        if (baru === jejak) return;
        try { dlg.close('ganti'); } catch (x) {}
        if (a2 && a2.id === a.id) toast(a2.idx !== a.idx ? 'Soal ' + (a2.idx + 1) + ' sudah muncul.' : 'Kunci jawaban soal ' + (a2.idx + 1) + ' sudah dibuka.', { nada: 'info', penting: true, ms: 4000 });
      });
    }
    function layarLatihan() {
      const st = stR(); const a = st.aktivitas; const i = info(); const sid = a.soalIds[a.idx];
      const soal = K && K.soal ? K.soal(sid) : null;
      const ks = kepalaSesi(st, a);
      const node = [ks.bar];
      if (ks.anda) node.push(ks.anda);
      const jaw = jawabanSaya(a, sid);
      const sub = keadaanAnggota(a, jaw, lokal.ubah);
      // v9.3 W2: baris tipis waktu mengerjakan / membahas di bawah kop (diperbarui tiap detik di tempat, tanpa menggambar ulang)
      const bw = barisWaktuEl(a, sub);
      if (bw.el) node.push(bw.el);
      const detikLayar = () => { ks.detik(); bw.detik(); };
      const isi = h('div', { class: 'room-anggota stack' }); node.push(isi);
      const pemimpin = namaPemimpin(st);
      // kirim ulang draf lengkap yang belum sampai (muat ulang sebelum terkirim)
      if (a.fase === 'jawab' && jaw && jaw.sumber === 'draf') {
        const dok = ambilDari(jawabanSemua(a.id), i.nama);
        if (!(dok && dok.j && dok.j[sid] === jaw.o && ((dok.k || {})[sid] || null) === (jaw.k || null))) { try { r.kirimJawaban({ aktivitas: a.id, soalId: sid, o: jaw.o, k: jaw.o === '-' ? null : jaw.k || null }); } catch (e) {} }
      }
      const lalu = tombolLalu(a); if (lalu) isi.appendChild(lalu);
      // anggota terlambat: soal yang sudah lewat tidak bisa dijawab lagi
      if (!lokal['lihat:' + a.id]) {
        lokal['lihat:' + a.id] = 1;
        const baru = !Object.keys(bacaTercatat(a.id).ids).length && !Object.keys(bacaDraf(a.id)).length;
        if (a.idx > 0 && (lokal.bergabungDi[a.id] != null || baru)) isi.appendChild(UKP.c.banner('Anda bergabung di soal ' + (a.idx + 1) + ' dari ' + a.soalIds.length + '.', 'info'));
      }
      // A.3 v9.2: nama di luar daftar latihan / daftar room → katakan jujur
      const ikut = Array.isArray(a.peserta) && a.peserta.length ? a.peserta.some(p => samaNama(p, i.nama)) : pesertaRoom(st).some(p => samaNama(p, i.nama));
      if (!ikut) isi.appendChild(UKP.c.banner('Nama Anda belum ikut latihan ini, jadi jawaban Anda belum dihitung. ' + pemimpin + ' perlu menambahkan Anda.', 'warn'));
      // T1: kop skor tim (satu cara hitung) + hasil sendiri
      const tc = bacaTercatat(a.id); const nilaiSaya = Object.keys(tc.ids).filter(k => tc.ids[k] != null);
      const kopTim = a.tim ? UKP.c.skorTim(a.tim, { saya: { benar: nilaiSaya.filter(k => tc.ids[k] === 1).length, dijawab: nilaiSaya.length }, sejak: sejakLulus(tc.tim) }) : null;
      if (kopTim) isi.appendChild(kopTim);
      if (!soal) {
        isi.append(h('h1', { class: 'room-h1' }, 'Soal ' + (a.idx + 1) + ' dari ' + a.soalIds.length),
          UKP.c.banner('Soal ini belum ada di aplikasi Anda. Muat ulang agar versinya sama dengan pemimpin.', 'warn', null, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: muatUlangVersi }, UKP.icon('atur-ulang', null, true), 'Muat ulang'))));
        return { node, detik: detikLayar };
      }
      const bawah = h('div', { class: 'bar-bawah-room', role: 'status', 'aria-live': 'polite', 'data-langkah': sub });
      // v9.4.1: isi yang sama tidak ditulis ulang (lihat UKP.c.statusRoom); wilayah ini aria-live dan dipanggil di tiap kabar hadir
      let tandaBawah = null;
      const isiBawah = (...anak) => {
        const tanda = (bawah.dataset.langkah || '') + '|' + anak.map(n => n.textContent).join('|');
        if (tanda === tandaBawah) return;
        tandaBawah = tanda; bawah.replaceChildren(...anak);
      };
      const perbaruiBawah = () => {
        const sAkhir = stR(); const a2 = sAkhir && sAkhir.aktivitas; if (!a2) return;
        const tersambung = !!(statusR() || {}).tersambung;
        const hitung = h('span', { class: 'meta hitung-jawab' }, teksHitungJawab(nDijawab(a2, sid), Array.isArray(a2.peserta) ? a2.peserta : null));
        if (sub === 'hasil') isiBawah(h('span', null, 'Menunggu ' + namaPemimpin(sAkhir) + ' melanjutkan'));
        else if (sub === 'terkirim') {
          isiBawah(h('span', null, tersambung ? 'Jawaban terkirim. Menunggu kunci jawaban.' : 'Belum terkirim · menyambung ulang… jawaban Anda aman.'), hitung);
          // V3: judul besar ikut jujur saat putus (dulu tetap "Jawaban terkirim" dengan centang hijau)
          const blok = isi.querySelector('.terkirim-room'); const j = blok && blok.querySelector('.room-h1');
          if (blok && j) { const t = tersambung ? 'Jawaban terkirim. Menunggu kunci jawaban.' : 'Jawaban tersimpan di HP ini. Dikirim begitu tersambung.'; if (j.textContent !== t) j.textContent = t; blok.toggleAttribute('data-tertunda', !tersambung); }
        } else {
          const c = lokal.cur && lokal.cur.kunci === a2.id + ':' + sid ? lokal.cur : null;
          const langkah = c && c.o && c.o !== '-' ? 'Langkah 2: pilih seberapa yakin' : 'Langkah 1: ketuk huruf jawaban';
          const lk = c && c.o ? 'yakin' : 'huruf'; if (bawah.dataset.langkah !== lk) bawah.dataset.langkah = lk;
          isiBawah(h('span', null, tersambung ? langkah : 'Menyambung ulang… jawaban Anda aman.'), hitung);
        }
      };
      lokal.perbaruiBawah = perbaruiBawah;
      if (sub === 'menjawab') isi.append(...bagianMenjawab(a, soal, jaw));
      else if (sub === 'terkirim') isi.append(...bagianTerkirim(a, soal, jaw));
      else isi.append(...bagianHasil(st, a, soal, i));
      perbaruiBawah();
      node.push(bawah);
      return { node, detik: detikLayar, perbarui: () => { perbaruiBawah(); if (sub === 'hasil') perbaruiPaham(); } };
    }
    // v9.3 W2: elemen baris waktu HP. Tidak tampil bila tanpa target (Bebas / pemimpin versi lama) sejak awal.
    function barisWaktuEl(a, sub) {
      const o = { sudahJawab: sub === 'terkirim' };
      const awal = barisWaktuHP(a, selisih(), Date.now(), o);
      if (!awal) return { el: null, detik: () => {} };
      const teks = h('span', { class: 'teks-waktu-fase' });
      const el = h('p', { class: 'waktu-fase-room', role: 'timer', 'aria-live': 'off', 'data-fase': awal.fase }, UKP.icon('jam', null, true), teks);
      let habisLalu = null;
      const detik = () => {
        const x = barisWaktuHP(a, selisih(), Date.now(), o);
        // v9.5 FC5: sebelum ada sampel jam dari pemimpin, jam HP bisa meleset (mis. "5:08" padahal 0:08): baris disembunyikan dulu
        if (!x || belumAdaJam()) { el.hidden = true; return; }
        el.hidden = false;
        // diumumkan sekali saat waktu habis (teks habis tidak berubah lagi, jadi tidak diumumkan berulang)
        if (x.habis && habisLalu === false) el.setAttribute('aria-live', 'polite');
        habisLalu = x.habis;
        el.toggleAttribute('data-habis', x.habis);
        if (teks.textContent !== x.teks) teks.textContent = x.teks;
      };
      detik();
      return { el, detik };
    }
    function teksSoal(soal) {
      const kel = K && fn(K, 'namaKelompok') ? K.namaKelompok(soal.kode) : '';
      const topik = namaTopikSoal(soal.id);
      const kut = soal.kutipan ? h('details', { class: 'lipat kutipan-room' }, h('summary', null, 'Tampilkan kutipan peraturan'), h('blockquote', { class: 'kutipan' }, String(soal.kutipan))) : null;
      // kode soal tidak tampil sendirian: selalu didampingi nama topik / kelompok
      return [h('p', { class: 'meta soal-kop-room' }, topik || kel || '', ' ', h('span', { class: 'kode-soal-room' }, h('span', { class: 'sep', 'aria-hidden': 'true' }, '· '), h('span', { class: 'kode' }, soal.id))),
        kut, h('p', { class: 'stem-room' }, soal.stem),
        h('ol', { class: 'opsi-room', type: 'A' }, HURUF.filter(x => soal.opsi && soal.opsi[x] != null).map(x => h('li', { 'data-huruf': x }, h('span', { class: 'huruf', 'aria-hidden': 'true' }, x), h('span', { class: 'teks' }, String(soal.opsi[x])))))];
    }
    function kirim(a, sid, patch) {
      const lama = jawabanSaya(a, sid) || {};
      const v = { o: patch.o !== undefined ? patch.o : lama.o || null, k: patch.k !== undefined ? patch.k : lama.k || null, w: Date.now() };
      if (v.o === '-') v.k = null;
      tulisDraf(a.id, sid, v);
      try { r.kirimJawaban({ aktivitas: a.id, soalId: sid, o: v.o, k: v.k }); } catch (e) {}
      return v;
    }
    // B.3/B.4 v9.2: huruf dan keyakinan dipilih di HP dulu; jawaban baru dikirim setelah KEDUANYA dipilih (atau "Tidak tahu").
    // Saat "Ubah jawaban", keyakinan dikosongkan; jawaban lama tetap berlaku sampai jawaban baru lengkap.
    function bagianMenjawab(a, soal, jaw) {
      const sid = soal.id; const kunciCur = a.id + ':' + sid;
      if (!lokal.cur || lokal.cur.kunci !== kunciCur || lokal.cur.ubah !== !!lokal.ubah) {
        lokal.cur = lokal.ubah ? { kunci: kunciCur, ubah: true, o: jaw && HURUF.includes(jaw.o) ? jaw.o : null, k: null }
          : { kunci: kunciCur, ubah: false, o: jaw ? jaw.o : null, k: jaw ? jaw.k : null };
      }
      const cur = lokal.cur;
      const tHuruf = HURUF.filter(x => soal.opsi && soal.opsi[x] != null).map(x => h('button', { type: 'button', class: 'huruf-besar', 'data-huruf': x, 'aria-pressed': String(cur.o === x), 'aria-label': 'Jawaban ' + x, onclick: () => pilih({ o: x }) }, x));
      const tYakin = YAKIN.map(([v, lbl]) => h('button', { type: 'button', class: 'yakin-room', 'data-yakin': v, 'aria-pressed': String(cur.k === v), onclick: () => pilih({ k: v }) }, lbl));
      const tTahu = h('button', { type: 'button', class: 'btn btn-ghost tidak-tahu', 'aria-pressed': String(cur.o === '-'), onclick: () => pilih({ o: '-' }) }, 'Tidak tahu');
      const barisYakin = h('div', { class: 'baris-yakin', role: 'group', 'aria-labelledby': 'yakin-j' }, tYakin);
      const segar = () => { tHuruf.forEach(b => b.setAttribute('aria-pressed', String(cur.o === b.dataset.huruf))); tYakin.forEach(b => b.setAttribute('aria-pressed', String(cur.k === b.dataset.yakin))); tTahu.setAttribute('aria-pressed', String(cur.o === '-')); if (lokal.perbaruiBawah) lokal.perbaruiBawah(); };
      function pilih(p) {
        const st = stR(); const a2 = st && st.aktivitas; if (!a2 || a2.id !== a.id || a2.fase !== 'jawab') return;
        const hurufBaru = p.o !== undefined && p.o !== '-' && p.o !== cur.o;
        if (p.o !== undefined) cur.o = p.o;
        if (p.k !== undefined) cur.k = p.k;
        if (cur.o === '-' || (cur.o && cur.k)) {
          const v = kirim(a, sid, { o: cur.o, k: cur.o === '-' ? null : cur.k });
          lokal.ubah = false; lokal.cur = null;
          UKP.umumkan('Jawaban ' + (v.o === '-' ? 'tidak tahu' : v.o) + ' terkirim.'); gambar(true); return;
        }
        // V10 temuan 4 (seperti 9.1): di alur biasa huruf langsung dikirim (k: null) dan ditulis ke draf, supaya tidak hilang bila
        // kunci jawaban dibuka saat langkah 2 atau halaman dimuat ulang. Layar tetap di langkah 2. Mode "Ubah jawaban" tidak mengirim.
        if (hurufBaru && !cur.ubah) kirim(a, sid, { o: cur.o, k: null });
        segar();
        if (hurufBaru) {
          UKP.umumkan('Huruf ' + cur.o + ' dipilih. Langkah 2: pilih seberapa yakin.');
          try { barisYakin.scrollIntoView({ block: 'center', behavior: (root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 'auto' : 'smooth' }); } catch (e) {}
        }
      }
      return [h('h1', { class: 'room-h1 visually-hidden' }, 'Soal ' + (a.idx + 1) + ' dari ' + a.soalIds.length), ...teksSoal(soal),
        h('div', { class: 'jawab-room stack-sm' },
          lokal.ubah ? h('p', { class: 'catatan-ubah', role: 'status' }, 'Pilih huruf baru, lalu seberapa yakin.') : null,
          h('div', { class: 'baris-huruf', role: 'group', 'aria-label': 'Pilih jawaban' }, tHuruf),
          h('p', { class: 'label', id: 'yakin-j' }, 'Seberapa yakin?'),
          barisYakin,
          h('div', { class: 'baris-tidak-tahu' }, tTahu,
            lokal.ubah ? h('button', { type: 'button', class: 'btn btn-ghost btn-text batal-ubah', onclick: () => { lokal.ubah = false; lokal.cur = null; gambar(true); } }, 'Batal, pakai jawaban tadi') : null))];
    }
    function bagianTerkirim(a, soal, jaw) {
      const lbl = jaw.o === '-' ? 'Anda memilih Tidak tahu' : 'Anda memilih ' + jaw.o + (jaw.k ? ' · ' + labelYakin(jaw.k) : '');
      return [h('div', { class: 'terkirim-room stack-sm' },
        h('p', { class: 'terkirim-ikon', 'aria-hidden': 'true' }, UKP.icon('cek-lingkar')),
        h('h1', { class: 'room-h1', tabindex: '-1', 'data-fokus-awal': '' }, 'Jawaban terkirim. Menunggu kunci jawaban.'),
        h('p', { class: 'small' }, lbl),
        h('button', { type: 'button', class: 'btn btn-ghost btn-text rata ubah-jawaban', onclick: () => { lokal.ubah = true; lokal.cur = null; gambar(true); } }, 'Ubah jawaban')),
        h('details', { class: 'lipat' }, h('summary', null, 'Lihat soal ini lagi'), h('div', { class: 'stack-sm' }, ...teksSoal(soal)))];
    }
    let perbaruiPaham = () => {};
    function bagianHasil(st, a, soal, i) {
      const hs = a.hasilSoal && a.hasilSoal.soalId === soal.id ? a.hasilSoal : { soalId: soal.id, per: {} };
      const per = hs.per || {}; const kunci = soal.kunci;
      const dariPer = ambilDari(per, i.nama); const draf = bacaDraf(a.id)[soal.id];
      const saya = dariPer || (draf ? { o: draf.o, k: draf.k } : null);
      const oS = saya && saya.o ? saya.o : null;
      const benar = oS === kunci;
      // V3: jawaban yang baru sampai setelah kunci dibuka tidak dihitung; katakan itu, jangan "Anda tidak menjawab"
      const telat = !!(dariPer && dariPer.o === '-' && draf && draf.o && draf.o !== '-');
      const dokS = ambilDari(jawabanSemua(a.id), i.nama);
      const tidakTahu = oS === '-' && !telat && !!((draf && draf.o === '-') || (dokS && isObj(dokS.j) && dokS.j[soal.id] === '-'));
      const garis = benar ? 'Benar. Kunci jawaban ' + kunci : telat ? 'Kunci jawaban ' + kunci + ' · jawaban Anda sampai setelah kunci dibuka' : oS && oS !== '-' ? 'Kunci jawaban ' + kunci + ' · Anda memilih ' + oS : tidakTahu ? 'Kunci jawaban ' + kunci + ' · Anda memilih Tidak tahu' : 'Kunci jawaban ' + kunci + ' · Anda tidak menjawab';
      const kel = kelompokJawaban(per, kunci, st.tuan);
      const tri = fn(L, 'triaseSoal') ? aman(() => L.triaseSoal(soal, per, { pemimpin: st.tuan || null }), null) : null;
      const tp = teksPenjelas({ per, nama: i.nama, pemimpin: st.tuan, penjelas: hs.penjelas || null, kunci, kelas: tri ? tri.kelas : null, label: tri ? tri.label : null, opsiKeliru: tri ? tri.opsiKeliru : null, alasanLabel: tri && tri.alasan ? tri.alasan.label : null });
      const dok = ambilDari(jawabanSemua(a.id), i.nama);
      const diisi = dariPer && dariPer.o && dariPer.o !== '-' && !(dok && dok.j && dok.j[soal.id]) && !(draf && draf.o);
      const maks = Math.max(1, ...HURUF.map(x => kel.per[x]));
      const batang = h('ul', { class: 'batang-tim', 'aria-label': 'Jawaban tim: ' + teksBatang(kel) }, HURUF.filter(x => soal.opsi && soal.opsi[x] != null).map(x =>
        h('li', { 'data-kunci': x === kunci ? '' : null, 'aria-hidden': 'true' }, h('span', { class: 'huruf' }, x), h('span', { class: 'jalur' }, h('span', { class: 'isi', style: { width: (kel.per[x] / maks * 100) + '%' } })), h('span', { class: 'n' }, String(kel.per[x])), x === kunci ? h('span', { class: 'tanda-kunci' }, 'kunci jawaban') : null)));
      const slotPaham = h('div', { class: 'slot-paham' });
      const pj = hs.penjelas ? rapikan(hs.penjelas) : '';
      perbaruiPaham = () => {
        if (!tp.bolehPaham || !hs.penjelas || !fn(r, 'kirimPaham')) { slotPaham.replaceChildren(); return; }
        const d2 = ambilDari(jawabanSemua(a.id), i.nama);
        const sudah = (d2 && isObj(d2.paham) && d2.paham[soal.id]) || lokal['paham:' + a.id + ':' + soal.id];
        slotPaham.replaceChildren(...(sudah ? [h('p', { class: 'paham-ok', role: 'status' }, 'Terima kasih terkirim ke ' + pj + '.')]
          : [h('button', { type: 'button', class: 'btn room-paham', onclick: () => { lokal['paham:' + a.id + ':' + soal.id] = 1; try { r.kirimPaham(soal.id); } catch (e) {} perbaruiPaham(); } }, 'Saya sudah paham'),
            h('p', { class: 'meta' }, pj + ' akan menerima ucapan terima kasih.')]));
      };
      perbaruiPaham();
      const lipat = h('details', { class: 'lipat pembahasan-room' }, h('summary', null, 'Pembahasan'));
      let terisi = false;
      lipat.addEventListener('toggle', () => { if (!lipat.open || terisi) return; terisi = true; try { lipat.appendChild(UKP.c.soal(soal, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: oS || '-', konteks: 'ulas', tanpaTutor: true })); } catch (e) { lipat.appendChild(h('p', { class: 'small' }, 'Pembahasan belum bisa ditampilkan.')); } });
      return [h('div', { class: 'hasil-room stack-sm', 'data-hasil': benar ? 'benar' : 'salah' },
          h('h1', { class: 'room-h1 garis-hasil', tabindex: '-1', 'data-fokus-awal': '' }, UKP.icon(benar ? 'cek-lingkar' : 'x-lingkar', null, true), garis),
          diisi ? h('p', { class: 'small muted' }, 'Jawaban soal ini diisi lewat laptop ' + namaPemimpin(st) + '.') : null),
        h('section', { class: 'tim-room stack-sm', 'aria-labelledby': 'tim-j' },
          h('h2', { class: 'label', id: 'tim-j' }, 'Jawaban tim'),
          h('p', { class: 'bilah-tim' }, h('strong', null, teksSoalIni(kel, false))),
          batang,
          tp.umum ? h('p', { class: 'penjelas-umum small' }, tp.umum) : null,
          tp.pribadi ? h('p', { class: 'penjelas-pribadi', 'data-peran': tp.peran }, tp.pribadi) : null,
          slotPaham),
        lipat];
    }

    // ---------- (e) latihan berjalan di perangkat pemimpin ----------
    function layarLatihanTuan() {
      const st = stR(); const a = st.aktivitas;
      const ba = fn(L, 'bersamaAktif') ? aman(() => L.bersamaAktif(), null) : null;
      const bisa = !!(ba && ba.sesiId === a.id);
      // v9.2: nama yang ingin ikut tetap terlihat di sini selama latihan berjalan (toast hanya tampil sekali per nama)
      const slotIngin = h('div', { class: 'slot-ingin' }, barisInginIkut());
      return { perbarui: () => { gantiBilaBeda(slotIngin, [barisInginIkut()]); },
        node: h('div', { class: 'stack' }, kopDenganMenu(st.room.nama || 'Room tim', { meta: [UKP.c.statusRoom()] }),
        h('section', { class: 'card sorot stack-sm' }, h('h2', { class: 'card-title' }, 'Latihan bersama sedang berjalan'),
          h('p', { class: 'small' }, 'Soal ' + (a.idx + 1) + ' dari ' + a.soalIds.length + '. HP anggota menunggu papan Anda.'),
          slotIngin,
          h('div', { class: 'btn-row' }, bisa
            ? h('button', { type: 'button', class: 'btn btn-primary btn-lg', onclick: () => UKP.go('latih', { lanjut: 1, room: 1 }) }, UKP.icon('play', null, true), 'Kembali ke papan')
            : h('button', { type: 'button', class: 'btn btn-primary', onclick: async () => { if (await UKP.konfirmasi('Akhiri latihan room?', 'Papan latihan ini tidak bisa dilanjutkan di perangkat ini. HP anggota kembali ke lobi.', { ya: 'Akhiri' })) { try { r.akhiriAktivitas(); } catch (e) {} } } }, 'Akhiri latihan room')))) };
    }
    // ---------- (f) ujian tim di HP anggota ----------
    function layarUjianAnggota() {
      const st = stR(); const a = st.aktivitas; const i = info();
      const ks = kepalaSesi(st, a, a.judul || 'Ujian tim');
      const UT = L.ujianTim; const kodeInfo = UT && fn(UT, 'bacaKode') ? aman(() => UT.bacaKode(a.kode), null) : null;
      const s = UKP.store.get();
      const isi = h('section', { class: 'card sorot stack ujian-room', 'aria-labelledby': 'ujian-j' });
      const sisaEl = h('span', { class: 'sisa-ujian' });
      const detik = () => { ks.detik(); const sisa = sisaDetik(a.akhir, selisih()); sisaEl.textContent = sisa == null ? '' : 'sisa ' + fmtSisa(sisa); };
      detik();
      const rek = (s.simulasi || []).slice().reverse().find(x => x && x.tim && x.tim.ujianId === a.id);
      const aktif = s.simulasiAktif && !s.simulasiAktif.selesai ? s.simulasiAktif : null;
      const n = kodeInfo ? kodeInfo.soalIds.length : 0;
      isi.append(h('h1', { class: 'card-title room-h1', id: 'ujian-j', tabindex: '-1', 'data-fokus-awal': '' }, rek ? 'Jawaban Anda sudah terkumpul di room' : 'Ujian tim dimulai'),
        h('p', { class: 'meta' }, [a.judul || 'Ujian tim', n ? n + ' soal' : null].filter(Boolean).join(' · '), n ? ' · ' : null, sisaEl));
      if (!kodeInfo) isi.append(UKP.c.banner('Soal ujian ini belum bisa dibaca di perangkat ini. Muat ulang halaman.', 'warn'));
      else if (kodeInfo.tidakDikenal && kodeInfo.tidakDikenal.length) isi.append(UKP.c.banner('Versi aplikasi Anda berbeda dengan pemimpin. Muat ulang agar soal sama. (' + kodeInfo.tidakDikenal.length + ' dari ' + n + ' soal belum ada.)', 'warn', null, h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: muatUlangVersi }, 'Muat ulang'))));
      else if (rek) isi.append(h('p', { class: 'small' }, 'Tunggu pemimpin menilai. Hasil ujian tim muncul di sini.'), h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('simulasi', { hasil: rek.id }) }, 'Lihat hasil saya')));
      else if (a.status === 'selesai') isi.append(h('p', { class: 'small' }, 'Pemimpin sudah menutup ujian. Menunggu hasil.'));
      else if (aktif && aktif.tim && aktif.tim.ujianId === a.id) isi.append(h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-lg', onclick: () => UKP.go('simulasi', { jalan: true }) }, UKP.icon('play', null, true), 'Lanjutkan mengerjakan')));
      else if (aktif) {
        const buang = async () => { if (await UKP.konfirmasi('Buang simulasi yang berjalan?', 'Jawaban simulasi itu akan hilang dan tidak dinilai.', { ya: 'Buang', bahaya: true })) { UKP.store.get().simulasiAktif = null; UKP.store.save(); gambar(true); } };
        isi.append(h('p', { class: 'small' }, 'Ada simulasi lain yang belum dikirim. Lanjutkan dulu, atau buang agar bisa ikut ujian tim ini.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('simulasi', { jalan: true }) }, 'Lanjutkan simulasi itu'), h('button', { type: 'button', class: 'btn btn-danger btn-attn', onclick: buang }, UKP.icon('hapus', null, true), 'Buang')));
      } else {
        // jalur yang sama untuk tombol "Mulai mengerjakan" dan untuk pembukaan otomatis (v9.3.2 B.1)
        const mulaiUjian = () => {
          const sim = UKP.simulasiTim; if (!sim || !fn(sim, 'mulai')) { toast('Simulasi belum siap. Muat ulang halaman.', { nada: 'warn' }); return false; }
          const s2 = UKP.store.get(); if (!s2.profil.onboardingSelesai) { s2.profil.onboardingSelesai = true; if (['A', 'B', 'C'].includes(kodeInfo.tingkat)) s2.profil.tingkat = kodeInfo.tingkat; UKP.store.save(); }
          const akhir = Number(a.akhir) > 0 ? a.akhir - selisih() : null;
          const menit = akhir ? Math.max(1, Math.round((akhir - Date.now()) / 60000)) : kodeInfo.menit;
          const hasil = sim.mulai({ ujianId: a.id, judul: a.judul || kodeInfo.judul, tingkat: kodeInfo.tingkat, menit: kodeInfo.menit || menit, soalIds: kodeInfo.soalIds, nama: i.nama, akhir, room: 1 });
          if (!hasil) { toast('Ujian ini tidak berisi soal.', { nada: 'attn' }); return false; }
          UKP.go('simulasi', { jalan: true }); return true;
        };
        // v9.3.2: jawaban atas nama ini sudah terkumpul di room dari perangkat lain (dokumen jawaban bertanda selesai) → ujian tidak
        // dibuka sendiri, dan orangnya diberi tahu sebelum mengerjakan lagi (kiriman baru menggantikan yang lama)
        const dokSaya = ambilDari(jawabanSemua(a.id), i.nama);
        const kumpulLain = !!(dokSaya && dokSaya.selesai === true);
        isi.append(kumpulLain ? UKP.c.banner('Jawaban atas nama Anda sudah terkumpul di room dari perangkat lain. Mengerjakan lagi di sini akan menggantinya.', 'warn') : null,
          h('p', { class: 'small' }, 'Kerjakan sendiri seperti CAT. Kunci jawaban dibuka di akhir; jawaban terkumpul sendiri saat dikirim atau saat waktu habis.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn' + (kumpulLain ? '' : ' btn-primary') + ' btn-lg room-mulai-ujian', onclick: mulaiUjian }, UKP.icon('play', null, true), kumpulLain ? 'Kerjakan lagi di HP ini' : 'Mulai mengerjakan')));
        // v9.3.2 B.1/B.2: ujian dibuka sendiri, sekali saja per ujian per tab. Keluar dari layar soal lalu kembali ke room → layar ini
        // dengan "Lanjutkan mengerjakan" (simulasi aktif), atau "Mulai mengerjakan" bila simulasi itu dibuang; tidak dilempar masuk lagi.
        const sudahOto = ssBaca(KUJIAN_OTO, []) || [];
        if (bolehBukaUjian({ status: a.status, terkumpul: !!rek || kumpulLain, simAktif: !!aktif, kodeInfo, sisa: sisaDetik(a.akhir, selisih()), sudah: Array.isArray(sudahOto) && sudahOto.includes(a.id) })) {
          // HP yang baru saja tersambung menunggu sebentar: kabar dari room (termasuk "jawaban sudah terkumpul") belum tentu sudah tiba
          const baruMasuk = !tersambungSejak || Date.now() - tersambungSejak < 2500;
          setTimeout(() => {
            // masih di layar ujian yang sama (layar ini bisa diganti tepat setelah masuk room; layar pengganti menjadwalkan ulang).
            // Tanda "sudah dibuka sendiri" ditulis tepat sebelum membuka, supaya jadwal yang batal tidak menghabiskan jatah sekali itu.
            if (!page.isConnected || !isi.isConnected) return;
            const a2 = (stR() || {}).aktivitas; if (!a2 || a2.id !== a.id || a2.status === 'selesai') return;
            const sa = UKP.store.get().simulasiAktif; if (sa && !sa.selesai) return;
            const sud = ssBaca(KUJIAN_OTO, []); const daftarOto = Array.isArray(sud) ? sud : [];
            if (daftarOto.includes(a.id)) return;
            // dokumen jawaban atas nama ini (dari perangkat lain) bisa baru tiba sesaat setelah masuk room: periksa lagi sebelum membuka
            const dk = ambilDari(jawabanSemua(a.id), i.nama); if (dk && dk.selesai === true) { gambar(true); return; }
            ssTulis(KUJIAN_OTO, daftarOto.concat(a.id).slice(-20));
            mulaiUjian();
          }, baruMasuk ? 1500 : 0);
        }
      }
      return { node: [ks.bar, ks.anda, h('div', { class: 'room-anggota stack' }, isi)].filter(Boolean), detik };
    }
    // ---------- (g) ujian tim di perangkat pemimpin ----------
    function layarUjianTuan() {
      const st = stR(); const a = st.aktivitas;
      return { node: h('div', { class: 'stack' }, kopDenganMenu(st.room.nama || 'Room tim', { meta: [UKP.c.statusRoom()] }),
        h('section', { class: 'card sorot stack-sm' }, h('h2', { class: 'card-title' }, 'Ujian tim sedang berjalan'), h('p', { class: 'small' }, (a.judul || 'Ujian tim') + '. Jawaban anggota terkumpul sendiri di layar ujian.'),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-lg', onclick: () => UKP.go('ujiantim', { room: 1 }) }, 'Buka layar ujian')))) };
    }

    gambar(true);
    return { node: page, unmount: () => { clearInterval(tDetik); clearTimeout(tTunda); if (lepasDengar) lepasDengar(); modeFokus(false); try { document.body.removeAttribute('data-room-tamu'); if (lokal.lembar) lokal.lembar.close('pindah'); } catch (e) {} } };
  };
})(typeof window !== 'undefined' ? window : globalThis);
