/* Siap UKP — mesin belajar: akses konten, log jawaban, penguasaan, SRS kartu, kehadiran, komposer sesi, rencana v1, laporan mingguan */
(function (root) {
  const UKP = root.UKP; const U = UKP.util;
  // batas hari belajar 03.00 (pakai util core bila ada)
  const hariDari = ts => { if (typeof U.hariDari === 'function') return U.hariDari(ts); const d = new Date(ts); if (d.getHours() < 3) d.setDate(d.getDate() - 1); return U.iso(d); };
  const jamBelajar = () => { if (typeof U.jamBelajar === 'function') return U.jamBelajar(); const j = new Date().getHours(); return j < 3 ? j + 24 : j; };
  const DEK_PERUBAHAN = 'perubahan-2025-2026';
  // simulasi: soal yang tidak dijawab bukan kesalahan (juga untuk data lama yang terlanjur tercatat)
  const kosongSim = j => j.konteks === 'simulasi' && (!j.opsi || j.opsi === '-' || j.opsi === 'kosong');

  // ---------- bobot dari laporan peserta ----------
  // Pengali atas meta.perkiraanBobotSoal[tingkat] untuk target tingkat tertentu (docs/PENGALAMAN-UJIAN.md, laporan peserta lulus UKP C 28 Okt 2026):
  // BUT dan Top-up Tax (C9/C10) banyak, kurs KMK vs kurs tengah dan selisih kurs (B7) pasti muncul, PBB (B8) dan PPSP (A2.10) sedang, KUP umum (A2) sedikit.
  // Kunci kelompok ("C9") dipakai bobotKelompok (skor kesiapan, kuota sesi dan simulasi UKP); kunci topik ("A2.10", lihat L.bobotTopik) memecah kuota
  // kelompoknya (L.kuotaSoal) dan menimpa kunci kelompok pada urutan soal acak berbobot. Tingkat tanpa entri (A, B) tidak berubah.
  UKP.bobotLaporan = { C: { C9: 1.8, C10: 1.4, B7: 1.25, B8: 1.6, B6: 0.85, A2: 0.75, 'A2.10': 1.15 } };
  // urutan belajar (L.urutanTopik) untuk tingkat berpengali: kunci topik = topik itu saja; kunci kelompok = topik kelompok itu yang belum tercantum.
  // Kelompok target yang tidak tercantum mengikuti urutan lama, disisipkan sebelum kelompok penutup yang diturunkan (pengali < 1, di sini sisa A2: A2.1–A2.9, A2.11).
  UKP.urutanLaporan = { C: ['C9', 'C10', 'B7', 'B8', 'A2.10', 'A3', 'A4', 'A1', 'B6', 'A5', 'A2'] };
  // acak berbobot (Efraimidis–Spirakis): soal berpengali besar cenderung di depan; tanpa pengali sama dengan U.acak
  function acakBerbobot(arr, pengali) {
    if (!pengali) return U.acak(arr);
    const w = x => { const t = pengali[x.topik], k = pengali[x.kode || String(x.id || '').split('-')[0]]; const v = typeof t === 'number' ? t : typeof k === 'number' ? k : 1; return Math.max(v, 0.01); };
    return arr.map(x => ({ x, kunci: Math.pow(Math.random(), 1 / w(x)) })).sort((a, b) => b.kunci - a.kunci).map(o => o.x);
  }

  // ---------- akses konten ----------
  const K = UKP.konten = {
    kelompok(tingkat) { return (UKP.tingkatKelompok[tingkat] || UKP.tingkatKelompok.A).filter(k => UKP.modul[k]); },
    semuaKelompok() { return UKP.urutanKelompok.filter(k => UKP.modul[k]); },
    modul(kode) { return UKP.modul[kode] || null; },
    topik(id) { const kode = (id || '').split('.')[0]; const m = UKP.modul[kode]; return m ? m.topik.find(t => t.id === id) : null; },
    topikBySlug(kode, slug) { const m = UKP.modul[kode]; return m ? m.topik.find(t => t.slug === slug) : null; },
    soal(id) { const kode = (id || '').split('-')[0]; const m = UKP.modul[kode]; return m ? m.soal.find(s => s.id === id) : null; },
    soalKelompok(kode, tingkat) { const m = UKP.modul[kode]; if (!m) return []; return tingkat ? m.soal.filter(s => s.tingkat.includes(tingkat)) : m.soal.slice(); },
    soalTopik(id, tingkat) { const m = UKP.modul[(id || '').split('.')[0]]; return m ? m.soal.filter(s => s.topik === id && (!tingkat || (s.tingkat || []).includes(tingkat))) : []; },
    punyaSoal(topikId, tingkat) { return K.soalTopik(topikId, tingkat).length > 0; },
    semuaSoal(tingkat) { return K.kelompok(tingkat).flatMap(k => K.soalKelompok(k, tingkat)); },
    // butir laporan peserta: soal.laporanUjian = ["C-2026-10", ...]; kode lengkap = laporan itu saja, satu huruf ("C") = semua laporan tingkat itu
    cocokLaporan(soal, kode) { const k = String(kode || ''); return !!k && !!soal && Array.isArray(soal.laporanUjian) && soal.laporanUjian.some(l => typeof l === 'string' && (k.length === 1 ? l.charAt(0) === k : l === k)); },
    soalLaporan(kode) { if (!kode) return []; return K.semuaKelompok().flatMap(k => (UKP.modul[k].soal || []).filter(x => K.cocokLaporan(x, kode))); },
    kartu(id) { if (id.startsWith('KA-')) return UKP.store.get().kartuOtomatis.find(k => k.id === id) || null; const kode = id.replace('KT-', '').split('-')[0]; const m = UKP.modul[kode]; return m ? m.kartu.find(k => k.id === id) : null; },
    semuaKartu(tingkat) { const s = UKP.store.get(); const kel = K.kelompok(tingkat); return kel.flatMap(k => UKP.modul[k].kartu).concat(s.kartuOtomatis.filter(k => kel.includes(k.kode))); },
    kartuKelompok(kode) { const s = UKP.store.get(); const m = UKP.modul[kode]; return (m ? m.kartu : []).concat(s.kartuOtomatis.filter(k => k.kode === kode)); },
    kasus(id) { for (const k in UKP.modul) { const x = UKP.modul[k].kasus.find(c => c.id === id); if (x) return x; } return null; },
    semuaKasus(tingkat) { return K.kelompok(tingkat).flatMap(k => UKP.modul[k].kasus); },
    namaKelompok(kode) { const m = UKP.modul[kode]; return m ? m.meta.nama : kode; },
    // paket soal bersumber (mis. try out): soal.sumber = { set, no, judul, tingkat }. daftarSet() → [{ set, judul, label, tingkat, n, kelompok[], perKelompok{} }];
    // soalSet(set) → semua soal paket itu dalam urutan asli (sumber.no), lintas kelompok dan tanpa saring tingkat
    daftarSet() {
      const peta = new Map();
      K.semuaKelompok().forEach(k => (UKP.modul[k].soal || []).forEach(x => { const sb = x.sumber; if (!sb || !sb.set) return; let d = peta.get(sb.set); if (!d) { d = { set: sb.set, judul: sb.judul || sb.set, label: String(sb.judul || sb.set).replace(/\s*\(.*$/, ''), tingkat: sb.tingkat || (String(sb.set).match(/^TO-([ABC])-/) || [])[1] || null, n: 0, kelompok: [], perKelompok: {} }; peta.set(sb.set, d); } d.n++; if (!d.perKelompok[k]) { d.kelompok.push(k); d.perKelompok[k] = 0; } d.perKelompok[k]++; }));
      return [...peta.values()];
    },
    soalSet(set) { if (!set) return []; return K.semuaKelompok().flatMap(k => (UKP.modul[k].soal || []).filter(x => x.sumber && x.sumber.set === set)).sort((a, b) => (Number(a.sumber.no) || 0) - (Number(b.sumber.no) || 0)); },
    tingkatDari(kode) { return kode[0] === 'E' ? null : kode[0]; },
  };

  // ---------- log jawaban & statistik ----------
  const L = UKP.belajar = {};
  // konteks 'simulasi' + opsi kosong ('-') tidak dicatat (bukan kesalahan); skor simulasi dihitung di views
  L.catatJawaban = function (soal, opsiDipilih, detik, konteks) {
    konteks = konteks || 'latih';
    if (!soal) return null;
    if (konteks === 'simulasi' && (!opsiDipilih || opsiDipilih === '-' || opsiDipilih === 'kosong')) return null;
    const s = UKP.store.get(); const benar = opsiDipilih === soal.kunci;
    const tag = benar ? null : ((soal.jebakanOpsi || {})[opsiDipilih] || null);
    s.jawaban.push({ soal: soal.id, topik: soal.topik, kode: soal.kode, benar, opsi: opsiDipilih, tag, detik: Math.round(detik || 0), konteks, pada: Date.now() });
    if (s.jawaban.length > 6000) s.jawaban.splice(0, s.jawaban.length - 6000);
    if (!benar && konteks !== 'simulasi') L.kartuOtomatisDariSoal(soal, opsiDipilih);
    UKP.store.save();
    return benar;
  };
  // penanda keyakinan susulan (jawab langsung: "Tadi Anda: Yakin · Ragu · Menebak" di panel pembahasan): perbarui field keyakinan pada
  // entri jawaban TERAKHIR untuk soal itu (konteks sama bila diberikan). v = 'yakin' | 'ragu' | 'menebak' | null (null = lepas penanda).
  // Penilaian, statistik, dan kartu tidak berubah. Mengembalikan true bila ada entri yang diperbarui.
  L.aturKeyakinan = function (soalId, konteks, v) {
    const s = UKP.store.get(); const arr = Array.isArray(s.jawaban) ? s.jawaban : [];
    const yk = ['yakin', 'ragu', 'menebak'].includes(v) ? v : null;
    for (let i = arr.length - 1; i >= 0 && i >= arr.length - 50; i--) {
      const j = arr[i];
      if (!j || j.soal !== soalId || (konteks && j.konteks !== konteks)) continue;
      if (j.opsi === '-') return false; // "Tidak tahu" tidak membawa keyakinan
      if (yk) j.keyakinan = yk; else delete j.keyakinan;
      UKP.store.save();
      return true;
    }
    return false;
  };
  // ---------- v9.0 S2: soal hari ini (Beranda dan halaman sambutan) ----------
  // Layak tampil di kartu kecil: pilihan ganda biasa empat opsi A–D (tiap ≤ 100 karakter), stem ≤ 240 karakter, tanpa kutipan
  // pasal panjang, tanpa narasi studi kasus (kasusId) atau rujukan formulir; kunci salah satu opsi; untuk tingkat itu.
  L.SOAL_HARI = { maksStem: 240, maksOpsi: 100 };
  L.soalHariLayak = function (soal, tingkat) {
    if (!soal || typeof soal !== 'object' || typeof soal.id !== 'string' || typeof soal.stem !== 'string') return false;
    if (soal.kutipan || soal.kasusId || soal.formulirRef) return false;
    if (tingkat && !(Array.isArray(soal.tingkat) && soal.tingkat.includes(tingkat))) return false;
    const o = soal.opsi; if (!o || typeof o !== 'object' || Array.isArray(o)) return false;
    const kunciOpsi = Object.keys(o); if (kunciOpsi.join('') !== 'ABCD') return false;
    if (!kunciOpsi.every(k => typeof o[k] === 'string' && o[k].trim() && o[k].length <= L.SOAL_HARI.maksOpsi)) return false;
    if (!soal.stem.trim() || soal.stem.length > L.SOAL_HARI.maksStem) return false;
    return kunciOpsi.includes(soal.kunci);
  };
  // pembantu murni: (daftar soal, tanggal 'YYYY-MM-DD', tingkat) → satu soal atau null. Deterministik: bank layak diurutkan
  // menurut id, lalu indeks = (nomor hari × langkah + geser tingkat) mod n, sehingga hari berurutan selalu berganti soal
  // (bila bank > 1) dan tiap tingkat punya urutan sendiri. V6: langkah = bilangan koprima dengan n terdekat ke 0,618 n
  // (dulu 7919 mod n, yang untuk n = 40 bernilai 39 ≡ −1 sehingga hari berurutan memilih soal bertetangga di topik yang sama);
  // koprima menjamin seluruh bank terjangkau sebelum berulang.
  const fpb = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  L.langkahSoalHari = function (n) { if (!(n > 1)) return 1; let k = Math.max(1, Math.round(n * 0.618)); while (fpb(k, n) !== 1) k++; return k % n || 1; };
  // simpanan (opsional) = s.soalHari { tgl, id }: bila tanggalnya hari ini dan soalnya masih layak di bank, soal itu yang dipakai,
  // sehingga soal yang sudah dijawab tidak tergantikan saat bank berubah (pembaruan data, ganti tingkat) dan tidak bisa dijawab dua kali.
  // V6: entri log jawaban yang berasal dari kartu Soal hari ini (soal dan hari belajar sama dengan s.soalHari). Dipakai Beranda agar
  // kartu "Lanjutkan belajar" tidak beralih ke topik acak soal hari ini; statistik dan penguasaan tetap menghitungnya.
  L.dariSoalHari = function (j, soalHari) {
    if (!j || !soalHari || typeof soalHari !== 'object' || typeof soalHari.id !== 'string' || j.soal !== soalHari.id) return false;
    return typeof j.pada === 'number' && UKP.util.hariDari(j.pada) === soalHari.tgl;
  };
  L.pilihSoalHari = function (daftar, tgl, tingkat, simpanan) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(tgl || '')); if (!m || !Array.isArray(daftar)) return null;
    const bank = daftar.filter(x => L.soalHariLayak(x, tingkat)).sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    if (!bank.length) return null;
    if (simpanan && typeof simpanan === 'object' && simpanan.tgl === tgl && typeof simpanan.id === 'string') { const lama = bank.find(x => x.id === simpanan.id); if (lama) return lama; }
    const hari = Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / 86400000);
    let geser = 0; for (const c of String(tingkat || '')) geser = (geser * 31 + c.charCodeAt(0)) % 9973;
    const n = bank.length; const langkah = L.langkahSoalHari(n);
    const i = ((((hari % n) * langkah) % n + geser) % n + n) % n;
    return bank[i];
  };
  // ---------- v7.9 latihan bersama: satu layar, beberapa orang (jawaban per nama di perangkat pemimpin) ----------
  // s.bersama = { aktif, peserta: [nama…] }; s.jawabanBersama = [{ p, s, kd, t, o, b, d, w, m, k, sesi }] terlama → terbaru
  // (v8.0: k = keyakinan|null, kd = kode kelompok; entri v7.9 masih menyimpan kode di k, lihat kodeEntri).
  // Tidak masuk s.jawaban (kecuali entri pemimpin sendiri lewat catatJawaban), tidak ikut ringkasan tim/kode hasil.
  L.MAKS_PESERTA = 12; L.MAKS_NAMA_PESERTA = 24; L.HARI_BERSAMA = 60; L.BATAS_BERSAMA = 4000;
  const KONTROL_RE = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g;
  L.rapikanNamaPeserta = v => String(v == null ? '' : v).replace(KONTROL_RE, ' ').replace(/\s+/g, ' ').trim();
  const kunciNama = v => L.rapikanNamaPeserta(v).toLowerCase();
  // inisialisasi defensif (store lama tanpa field, atau field bertipe salah); daftar peserta dirapikan sesuai kontrak
  L.siapBersama = function (s) {
    s = s || UKP.store.get();
    const b = s.bersama && typeof s.bersama === 'object' && !Array.isArray(s.bersama) ? s.bersama : (s.bersama = { aktif: false, peserta: [] });
    b.aktif = !!b.aktif;
    const lihat = new Set(); const pes = [];
    for (const x of (Array.isArray(b.peserta) ? b.peserta : [])) {
      if (typeof x !== 'string') continue; const n = L.rapikanNamaPeserta(x);
      if (!n || n.length > L.MAKS_NAMA_PESERTA || lihat.has(n.toLowerCase()) || pes.length >= L.MAKS_PESERTA) continue;
      lihat.add(n.toLowerCase()); pes.push(n);
    }
    b.peserta = pes;
    if (!Array.isArray(s.jawabanBersama)) s.jawabanBersama = [];
    if (!Array.isArray(s.sesiBersama)) s.sesiBersama = [];
    return s;
  };
  // cek nama baru untuk daftar peserta → { nama, galat } (galat berupa kalimat untuk pengguna, null bila sah)
  L.cekNamaPeserta = function (v, daftar) {
    const nama = L.rapikanNamaPeserta(v);
    daftar = Array.isArray(daftar) ? daftar : L.siapBersama().bersama.peserta;
    if (!nama) return { nama, galat: 'Isi nama dulu.' };
    if (nama.length > L.MAKS_NAMA_PESERTA) return { nama, galat: 'Nama paling panjang ' + L.MAKS_NAMA_PESERTA + ' karakter.' };
    if (daftar.some(x => kunciNama(x) === nama.toLowerCase())) return { nama, galat: nama + ' sudah ada di daftar.' };
    if (daftar.length >= L.MAKS_PESERTA) return { nama, galat: 'Paling banyak ' + L.MAKS_PESERTA + ' orang.' };
    return { nama, galat: null };
  };
  function pangkasBersama(arr, kini) {
    const batas = kini - L.HARI_BERSAMA * 86400000;
    let i = 0; while (i < arr.length && !(arr[i] && Number(arr[i].w) >= batas)) i++;
    const sisa = arr.slice(i).filter(e => e && Number(e.w) >= batas);
    if (sisa.length > L.BATAS_BERSAMA) sisa.splice(0, sisa.length - L.BATAS_BERSAMA);
    arr.length = 0; Array.prototype.push.apply(arr, sisa);
    return arr;
  }
  // v8.0: nama tim bawaan (sakelar latihan bersama dinyalakan pada daftar kosong; "Tambah cepat" di UKP.c.aturBersama)
  L.TIM_BAWAAN = ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'];
  L.YAKIN_BERSAMA = ['yakin', 'ragu', 'menebak'];
  const yakinSah = v => L.YAKIN_BERSAMA.includes(v) ? v : null;
  // satu nilai jawaban peserta (bentuk lama 'B' | bentuk baru { o, k } | dari papan { opsi, keyakinan }) → { o, k }
  function jawabPeserta(v) {
    let o = v, k = null;
    if (v && typeof v === 'object') { o = v.o != null ? v.o : v.opsi; k = yakinSah(v.k != null ? v.k : v.keyakinan); }
    o = String(o == null ? '' : o).toUpperCase(); o = /^[A-D]$/.test(o) ? o : '-';
    return { o, k: o === '-' ? null : k };
  }
  // kode kelompok entri: v8.0 kd; entri v7.9 menyimpan kode di k (sebelum k menjadi keyakinan)
  const kodeEntri = e => String((e && (e.kd || (typeof e.k === 'string' && !yakinSah(e.k) ? e.k : ''))) || String((e && e.s) || '').split('-')[0] || '');
  L.kodeEntriBersama = kodeEntri;
  // perPeserta = { 'Nicky': { o: 'B', k: 'yakin' }, 'Mia': { o: '-', k: null } } (bentuk lama { 'Nicky': 'D' } tetap diterima) → satu entri
  // per peserta { p, s, kd, t, o, b, d, w, m, k (keyakinan|null), sesi (id sesi|null) }; nama = profil.nama → juga catatJawaban (sekali,
  // dengan keyakinan seperti latihan biasa). info = { sesi: 'sb-…' }
  L.catatJawabanBersama = function (soal, perPeserta, detik, info) {
    if (!soal || !soal.id || !perPeserta || typeof perPeserta !== 'object') return 0;
    const s = L.siapBersama(UKP.store.get()); const kini = Date.now();
    const d = Math.round(Math.min(3600, Math.max(0, Number(detik) || 0)));
    const sesi = info && typeof info.sesi === 'string' && info.sesi ? info.sesi.slice(0, 40) : null;
    const pemimpin = kunciNama(s.profil && s.profil.nama);
    let n = 0, pemimpinTercatat = false; const lihat = new Set();
    for (const namaMentah of Object.keys(perPeserta)) {
      const p = L.rapikanNamaPeserta(namaMentah); const kn = p.toLowerCase();
      if (!p || p.length > L.MAKS_NAMA_PESERTA || lihat.has(kn)) continue; lihat.add(kn);
      const { o, k } = jawabPeserta(perPeserta[namaMentah]);
      s.jawabanBersama.push({ p, s: soal.id, kd: soal.kode || String(soal.id).split('-')[0], t: soal.topik || '', o, b: o !== '-' && o === soal.kunci ? 1 : 0, d, w: kini, m: 'latih', k, sesi });
      n++;
      if (!pemimpinTercatat && pemimpin && kn === pemimpin && o !== '-') {
        pemimpinTercatat = true; L.catatJawaban(soal, o, d, 'latih');
        if (k) { const arr = s.jawaban; const j = arr[arr.length - 1]; if (j && j.soal === soal.id && j.konteks === 'latih') j.keyakinan = k; }
      }
    }
    pangkasBersama(s.jawabanBersama, kini);
    UKP.store.save();
    return n;
  };
  // ringkasan per peserta (daftar peserta + nama yang hanya ada di riwayat), urut menurut daftar peserta lalu nama
  L.pesertaBersama = function () {
    const s = L.siapBersama(UKP.store.get()); const daftar = s.bersama.peserta;
    const awal7 = U.tambahHari(U.hariIni(), -6), hariIni = U.hariIni();
    const peta = new Map();
    const ambil = nama => { const k = kunciNama(nama); if (!peta.has(k)) peta.set(k, { nama: L.rapikanNamaPeserta(nama), n: 0, benar: 0, n7: 0, benar7: 0, terakhir: null }); return peta.get(k); };
    daftar.forEach(ambil);
    for (const e of s.jawabanBersama) {
      if (!e || typeof e.p !== 'string' || !L.rapikanNamaPeserta(e.p)) continue;
      const x = ambil(e.p); x.n++; if (e.b) x.benar++;
      const w = Number(e.w) || 0; const hr = hariDari(w);
      if (hr >= awal7 && hr <= hariIni) { x.n7++; if (e.b) x.benar7++; }
      if (w && (x.terakhir == null || w > x.terakhir)) x.terakhir = w;
    }
    const urut = new Map(daftar.map((n, i) => [n.toLowerCase(), i]));
    const pos = x => { const i = urut.get(x.nama.toLowerCase()); return i == null ? Infinity : i; };
    return [...peta.values()].sort((a, b) => pos(a) - pos(b) || a.nama.localeCompare(b.nama, 'id'));
  };
  // dokumen ringkasan satu peserta lokal, berskema sama dengan ringkasan anggota tim (js/tim.js ringkasan; views-tim normal())
  L.dokPeserta = function (nama) {
    const s = L.siapBersama(UKP.store.get()); const kn = kunciNama(nama); if (!kn) return null;
    const entri = s.jawabanBersama.filter(e => e && typeof e.p === 'string' && kunciNama(e.p) === kn);
    const diDaftar = s.bersama.peserta.find(x => x.toLowerCase() === kn);
    if (!entri.length && !diDaftar) return null;
    const namaTampil = diDaftar || L.rapikanNamaPeserta(entri[entri.length - 1].p);
    const hariIni = U.hariIni(), awal7 = U.tambahHari(hariIni, -6), awal14 = U.tambahHari(hariIni, -13);
    let benar = 0, n7 = 0, b7 = 0, terakhir = 0; const perKel = {}, perTopik = {}, hari7 = new Set(), hari14 = new Set();
    for (const e of entri) {
      const w = Number(e.w) || 0; if (e.b) benar++; if (w > terakhir) terakhir = w;
      const hr = hariDari(w);
      if (hr >= awal7 && hr <= hariIni) { n7++; if (e.b) b7++; hari7.add(hr); }
      if (hr >= awal14 && hr <= hariIni) hari14.add(hr);
      const so = K.soal ? K.soal(e.s) : null;
      const kode = String((so && so.kode) || kodeEntri(e));
      const topik = String((so && so.topik) || e.t || '');
      if (kode) { const x = perKel[kode] = perKel[kode] || { n: 0, benar: 0 }; x.n++; if (e.b) x.benar++; }
      if (topik) { const t = perTopik[topik] = perTopik[topik] || { topik, id: topik, n: 0, benar: 0 }; t.n++; if (e.b) t.benar++; }
    }
    const lemah = Object.values(perTopik).filter(t => t.n >= 3 && t.benar < t.n)
      .sort((a, b) => a.benar / a.n - b.benar / b.n || b.n - a.n || (a.topik < b.topik ? -1 : 1)).slice(0, 5);
    const jawaban = entri.slice(-400).reverse().map(e => {
      const so = K.soal ? K.soal(e.s) : null;
      const o = /^[A-D]$/.test(e.o) ? e.o : '-';
      return { s: String(e.s), t: String((so && so.topik) || e.t || ''), o, b: e.b && e.o !== '-' ? 1 : 0, d: Math.round(Number(e.d) || 0), w: Number(e.w) || 0, m: e.m === 'ujian' ? 'ujian' : 'latih', k: o !== '-' ? yakinSah(e.k) : null }; // v8.1.1: mode ujian dibawa dari sumbernya
    }).sort((a, b) => b.w - a.w);
    return {
      nama: namaTampil, tingkat: (s.profil && s.profil.tingkat) || 'A', diperbarui: terakhir || null, versiApp: String(UKP.versi || ''),
      latihan: { total: entri.length, benar, akurasi7: n7 ? Math.round(b7 / n7 * 100) : null, sesi7: hari7.size, soal7: n7, hari7: hari7.size, terakhir: terakhir || null, perKelompok: perKel, perTopikLemah: lemah },
      simulasi: [], hadir: { hari14: hari14.size, rangkaian: 0 },
      jawaban, sumber: 'lokal',
    };
  };

  // ---------- v8.0 sesi latihan bersama (rekaman per putaran untuk Evaluasi tim) ----------
  // s.sesiBersama = [{ id: 'sb-<ms>', mulai, selesai|null, tingkat, peserta: [...], anggaranDetik, soal: [{ id, kode, topik, kunci, detik,
  // jawaban: { nama: { o, k, b } } }], sumber: 'latih' }] terlama → terbaru, paling banyak MAKS_SESI_BERSAMA (yang terlama dibuang).
  L.MAKS_SESI_BERSAMA = 60;
  const salinJSON = x => JSON.parse(JSON.stringify(x));
  function daftarSesi(s) { s = s || UKP.store.get(); if (!Array.isArray(s.sesiBersama)) s.sesiBersama = []; return s.sesiBersama; }
  const sesiDari = (s, id) => daftarSesi(s).find(x => x && x.id === id) || null;
  // mulai rekaman sesi → id. Sesi lama yang tidak pernah berisi soal dan belum ditutup ikut dibersihkan
  // v8.1: info = { tempo: 'ujian'|'longgar', detikPerSoal, mode: 'latihan'|'ujian', judul, ujianId } (opsional; pemanggilan lama tetap sah)
  L.mulaiSesiBersama = function (peserta, soalIds, anggaranDetik, info) {
    const s = L.siapBersama(UKP.store.get()); const arr = daftarSesi(s);
    for (let i = arr.length - 1; i >= 0; i--) { const x = arr[i]; if (!x || (!x.selesai && !(Array.isArray(x.soal) && x.soal.length))) arr.splice(i, 1); }
    const lihat = new Set(); const pes = [];
    (Array.isArray(peserta) ? peserta : []).forEach(x => { const n = L.rapikanNamaPeserta(x); if (n && n.length <= L.MAKS_NAMA_PESERTA && !lihat.has(n.toLowerCase()) && pes.length < L.MAKS_PESERTA) { lihat.add(n.toLowerCase()); pes.push(n); } });
    const kini = Date.now(); let id = 'sb-' + kini; let i = 1; while (arr.some(x => x.id === id)) id = 'sb-' + kini + '-' + (i++);
    const ids = Array.isArray(soalIds) ? soalIds.filter(x => typeof x === 'string') : [];
    const ext = infoSesiV81(info);
    const anggaran = Math.max(0, Math.round(Number(anggaranDetik) || ids.length * (ext.detikPerSoal || 150)));
    arr.push(Object.assign({ id, mulai: kini, selesai: null, tingkat: (s.profil && s.profil.tingkat) || 'A', peserta: pes, anggaranDetik: anggaran, soal: [], sumber: 'latih', rencana: ids.length }, ext));
    if (arr.length > L.MAKS_SESI_BERSAMA) arr.splice(0, arr.length - L.MAKS_SESI_BERSAMA);
    UKP.store.save();
    return id;
  };
  // tambahkan satu soal yang kuncinya sudah dibuka; per = { nama: { opsi, keyakinan, benar } | { o, k } | 'B' }. Soal yang sama diganti
  L.catatSoalSesi = function (id, soal, per, detik) {
    const s = UKP.store.get(); const x = sesiDari(s, id); if (!x || !soal || !soal.id || !per || typeof per !== 'object') return false;
    const jawaban = {};
    (x.peserta.length ? x.peserta : Object.keys(per)).forEach(nama => {
      const kunciN = Object.keys(per).find(n => kunciNama(n) === kunciNama(nama));
      const { o, k } = jawabPeserta(kunciN != null ? per[kunciN] : null);
      jawaban[nama] = { o, k, b: o !== '-' && o === soal.kunci ? 1 : 0 };
    });
    const ent = { id: soal.id, kode: soal.kode || String(soal.id).split('-')[0], topik: soal.topik || '', kunci: soal.kunci || '', detik: Math.round(Math.min(3600, Math.max(0, Number(detik) || 0))), jawaban };
    if (!Array.isArray(x.soal)) x.soal = [];
    const i = x.soal.findIndex(q => q && q.id === soal.id);
    if (i >= 0) x.soal[i] = ent; else x.soal.push(ent);
    UKP.store.save();
    return true;
  };
  // tutup sesi → salinan sesi; sesi tanpa soal dihapus (→ null)
  L.akhiriSesiBersama = function (id) {
    const s = UKP.store.get(); const arr = daftarSesi(s); const i = arr.findIndex(x => x && x.id === id); if (i < 0) return null;
    const x = arr[i];
    if (!Array.isArray(x.soal) || !x.soal.length) { arr.splice(i, 1); UKP.store.save(); return null; }
    if (!x.selesai) x.selesai = Date.now();
    UKP.store.save();
    return salinJSON(x);
  };
  L.sesiBersama = () => salinJSON(daftarSesi().filter(x => x && typeof x.id === 'string')).reverse();
  L.sesiBersamaDari = id => { const x = sesiDari(null, id); return x ? salinJSON(x) : null; };
  // v8.2 V3: salinan rekaman room yang dihapus anggota diingat (ukp.tim.tolakSesi) agar tidak masuk lagi saat tersambung ulang
  const KUNCI_TOLAK = 'ukp.tim.tolakSesi';
  const bacaTolak = () => { try { const v = JSON.parse(root.localStorage.getItem(KUNCI_TOLAK) || '[]'); return Array.isArray(v) ? v.filter(x => typeof x === 'string') : []; } catch (e) { return []; } };
  L.sesiDitolak = id => bacaTolak().indexOf(id) >= 0;
  L.hapusSesiBersama = function (id) {
    const arr = daftarSesi(); const i = arr.findIndex(x => x && x.id === id); if (i < 0) return false;
    const dariRoom = arr[i] && arr[i].sumber === 'room';
    arr.splice(i, 1); UKP.store.save();
    if (dariRoom) { try { const t = bacaTolak().filter(x => x !== id); t.push(id); root.localStorage.setItem(KUNCI_TOLAK, JSON.stringify(t.slice(-200))); } catch (e) {} }
    return true;
  };
  // v8.2 room tim (js/ruang.js): rekaman sesi yang diterima dari room → sisip/perbarui menurut id, sumber 'room' (sumber asli di sumberAsal).
  // Rekaman milik perangkat ini (sumber lain, mis. 'latih' di perangkat pemimpin) tidak ditimpa. → 'baru' | 'diperbarui' | 'sama' | null
  L.terimaSesiRoom = function (sesi) {
    if (!sesi || typeof sesi !== 'object' || typeof sesi.id !== 'string' || !sesi.id || sesi.id.length > 60 || !Array.isArray(sesi.peserta) || !Array.isArray(sesi.soal) || typeof sesi.mulai !== 'number') return null;
    if (L.sesiDitolak(sesi.id)) return null;   // V3: salinan yang sudah dihapus di perangkat ini tidak diterima lagi
    const s = L.siapBersama(UKP.store.get()); const arr = daftarSesi(s);
    const x = salinJSON(sesi); if (x.sumber !== 'room') x.sumberAsal = typeof x.sumber === 'string' ? x.sumber : null; x.sumber = 'room';
    const i = arr.findIndex(y => y && y.id === x.id);
    if (i >= 0) {
      if (arr[i].sumber !== 'room') return null;
      if (JSON.stringify(arr[i]) === JSON.stringify(x)) return 'sama';
      arr[i] = x; UKP.store.save(); return 'diperbarui';
    }
    let j = arr.length; while (j > 0 && arr[j - 1] && Number(arr[j - 1].mulai) > x.mulai) j--;   // daftar urut terlama → terbaru
    arr.splice(j, 0, x);
    if (arr.length > L.MAKS_SESI_BERSAMA) arr.splice(0, arr.length - L.MAKS_SESI_BERSAMA);
    UKP.store.save();
    return arr.some(y => y.id === x.id) ? 'baru' : null;
  };
  // ringkasan murni satu sesi (tanpa DOM) untuk UKP.c.evaluasiBersama (js/views-tim.js)
  L.evaluasiSesi = function (sesi) {
    const kosongHasil = { nSoal: 0, nPeserta: 0, menit: 0, peserta: [], soal: [], tersulit: [], topikTim: [], mode: 'latihan', judul: null, tempo: null, skor: null, triase: L.urutanBahas(null) };
    if (!sesi || typeof sesi !== 'object') return kosongHasil;
    const peserta = (Array.isArray(sesi.peserta) ? sesi.peserta : []).filter(x => typeof x === 'string' && x);
    const daftarSoal = (Array.isArray(sesi.soal) ? sesi.soal : []).filter(q => q && typeof q.id === 'string');
    const nSoal = daftarSoal.length, nPeserta = peserta.length;
    const mulai = Number(sesi.mulai), selesai = Number(sesi.selesai);
    const menit = isFinite(mulai) && isFinite(selesai) && selesai > 0 && selesai >= mulai && nSoal ? Math.max(1, Math.round((selesai - mulai) / 60000)) : 0;
    const ambil = (q, nama) => { const j = (q.jawaban && (q.jawaban[nama] || q.jawaban[Object.keys(q.jawaban).find(n => kunciNama(n) === kunciNama(nama))])) || null; const { o, k } = jawabPeserta(j); return { o, k, b: o !== '-' && o === q.kunci ? 1 : 0 }; };
    const soal = daftarSoal.map(q => {
      const perPeserta = {}; let nBenar = 0, nSalah = 0, nKosong = 0;
      peserta.forEach(n => { const j = ambil(q, n); perPeserta[n] = j; if (j.b) nBenar++; else if (j.o === '-') nKosong++; else nSalah++; });
      return { id: q.id, kode: q.kode || String(q.id).split('-')[0], topik: q.topik || '', kunci: q.kunci || '', nBenar, nSalah, nKosong, perPeserta };
    });
    const urutTopik = (a, b) => a.benar / a.n - b.benar / b.n || b.n - a.n || (a.topik < b.topik ? -1 : a.topik > b.topik ? 1 : 0);
    const hasilP = peserta.map((nama, urut) => {
      let benar = 0, dijawab = 0, yakinSalah = 0, raguBenar = 0, menebakBenar = 0; const perT = {};
      soal.forEach(q => {
        const j = q.perPeserta[nama]; if (j.o !== '-') dijawab++; if (j.b) benar++;
        if (j.k === 'yakin' && !j.b && j.o !== '-') yakinSalah++;
        if (j.k === 'ragu' && j.b) raguBenar++;
        if (j.k === 'menebak' && j.b) menebakBenar++;
        if (q.topik) { const t = perT[q.topik] = perT[q.topik] || { topik: q.topik, n: 0, benar: 0 }; t.n++; if (j.b) t.benar++; }
      });
      const topikLemah = Object.values(perT).filter(t => t.benar < t.n).sort(urutTopik).slice(0, 3);
      return { nama, benar, dijawab, kosong: nSoal - dijawab, akurasi: nSoal ? Math.round(benar / nSoal * 100) : null, yakinSalah, raguBenar, menebakBenar, topikLemah, _u: urut };
    }).sort((a, b) => b.benar - a.benar || a._u - b._u).map(x => { delete x._u; return x; });
    const tersulit = soal.map((q, i) => ({ q, i })).filter(x => x.q.nBenar < nPeserta)
      .sort((a, b) => a.q.nBenar - b.q.nBenar || b.q.nSalah - a.q.nSalah || a.i - b.i).slice(0, 5).map(x => x.q);
    const perTim = {};
    soal.forEach(q => { if (!q.topik) return; const t = perTim[q.topik] = perTim[q.topik] || { topik: q.topik, n: 0, benar: 0 }; t.n += nPeserta; t.benar += q.nBenar; });
    const topikTim = Object.values(perTim).filter(t => t.n >= 3 && t.benar < t.n).sort(urutTopik).slice(0, 5)
      .map(t => ({ topik: t.topik, n: t.n, benar: t.benar, akurasi: Math.round(t.benar / t.n * 100) }));
    // v8.1: detik per soal ikut di soal[]; mode, judul, tempo, skor (mode ujian), triase (urutan bahas)
    soal.forEach((q, i) => { q.detik = Math.max(0, Math.round(Number(daftarSoal[i].detik) || 0)); });
    const mode = sesi.mode === 'ujian' ? 'ujian' : 'latihan';
    return { nSoal, nPeserta, menit, peserta: hasilP, soal, tersulit, topikTim,
      mode, judul: typeof sesi.judul === 'string' && sesi.judul ? sesi.judul : null,
      tempo: ringkasTempo(sesi, soal), skor: mode === 'ujian' ? L.skorUjian(sesi) : null, triase: L.urutanBahas(sesi) };
  };
  // =====================================================================================================================
  // ---------- v8.1: tempo ujian, triase dan penjelas bahas, skor ujian, rekap, Ujian tim (kode ujian + kode jawaban),
  //            keadaan ujian tim di perangkat pemimpin, lembar jawab pribadi, lanjutkan sesi bersama ----------
  // Kontrak: tugas v8.1 (bagian A–E). Semua fungsi baca-saja murni (tanpa DOM); yang menulis store menyebutkannya.
  // =====================================================================================================================
  const isObjL = x => x != null && typeof x === 'object' && !Array.isArray(x);
  const TINGKAT_SAH = ['A', 'B', 'C'];
  const fmtUKP = () => (UKP.ref && UKP.ref.ujian && UKP.ref.ujian.format && UKP.ref.ujian.format.UKP) || null;
  const tingkatProfil = () => { try { const p = UKP.store.get().profil; return p && TINGKAT_SAH.includes(p.tingkat) ? p.tingkat : 'A'; } catch (e) { return 'A'; } };
  const bulatPositif = v => { const n = Math.round(Number(v)); return isFinite(n) && n > 0 ? n : 0; };
  const teksPendek = (v, n) => typeof v === 'string' ? v.replace(KONTROL_RE, ' ').replace(/\s+/g, ' ').trim().slice(0, n) : '';
  const OPSI_RE = /^[A-D]$/;

  // ---------- A. tempo ----------
  L.TEMPO_LONGGAR = 150;
  L.TEMPO_CADANGAN = 126;
  L.BATAS_LULUS = (() => { const f = fmtUKP(); return f && typeof f.lulus === 'number' && f.lulus > 0 ? f.lulus : 60; })();
  // format ujian sungguhan satu tingkat → { menit, soal } (cadangan 210 menit / 100 soal)
  L.formatUjianTingkat = function (tingkat) {
    const f = fmtUKP(); const x = f && f[TINGKAT_SAH.includes(tingkat) ? tingkat : tingkatProfil()];
    const menit = x && Number(x.menit) > 0 ? Number(x.menit) : 210, soal = x && Number(x.soalPerkiraan) > 0 ? Number(x.soalPerkiraan) : 100;
    return { menit, soal };
  };
  // detik per soal ujian sungguhan: round(menit × 60 / soalPerkiraan) (B: 210 × 60 / 100 = 126)
  L.tempoUjian = function (tingkat) {
    const f = fmtUKP(); const x = f && f[TINGKAT_SAH.includes(tingkat) ? tingkat : tingkatProfil()];
    const m = x && Number(x.menit), n = x && Number(x.soalPerkiraan);
    return m > 0 && n > 0 ? Math.round(m * 60 / n) : L.TEMPO_CADANGAN;
  };
  // s.bersama.tempo: 'ujian' (bawaan; field tidak ada = 'ujian') | 'longgar'
  L.tempoBersama = function () {
    const s = L.siapBersama(UKP.store.get()); const mode = s.bersama.tempo === 'longgar' ? 'longgar' : 'ujian';
    return { mode, detik: mode === 'longgar' ? L.TEMPO_LONGGAR : L.tempoUjian(s.profil && s.profil.tingkat) };
  };
  L.aturTempoBersama = function (mode) {
    const s = L.siapBersama(UKP.store.get()); s.bersama.tempo = mode === 'longgar' ? 'longgar' : 'ujian'; UKP.store.save();
    return L.tempoBersama();
  };
  // field v8.1 rekaman sesi dari info mulaiSesiBersama; tanpa info → {} (rekaman sama dengan v8.0)
  function infoSesiV81(info) {
    if (!isObjL(info)) return {};
    const tempo = info.tempo === 'longgar' ? 'longgar' : 'ujian';
    return {
      tempo, detikPerSoal: bulatPositif(info.detikPerSoal) || (tempo === 'longgar' ? L.TEMPO_LONGGAR : L.tempoUjian(tingkatProfil())),
      mode: info.mode === 'ujian' ? 'ujian' : 'latihan', judul: teksPendek(info.judul, 80) || null,
      ujianId: typeof info.ujianId === 'string' && info.ujianId ? info.ujianId.slice(0, 40) : null, bahas: {}, waktuPeserta: {},
    };
  }
  // ringkasan tempo sesi dari soal[].detik > 0 (null bila tidak ada detik tercatat)
  function ringkasTempo(sesi, soal) {
    const dd = soal.filter(q => q.detik > 0); if (!dd.length) return null;
    const dps = bulatPositif(sesi.detikPerSoal) || (sesi.tempo === 'longgar' ? L.TEMPO_LONGGAR : L.tempoUjian(sesi.tingkat));
    const rata = Math.round(dd.reduce((a, q) => a + q.detik, 0) / dd.length);
    const lewat = dd.filter(q => q.detik > dps);
    const f = L.formatUjianTingkat(sesi.tingkat);
    return { detikPerSoal: dps, rataDetik: rata, nLewat: lewat.length, terlama: lewat.slice().sort((a, b) => b.detik - a.detik).slice(0, 3).map(q => ({ id: q.id, detik: q.detik })),
      soalUjian: f.soal, menitUjian: f.menit, proyeksiMenit: Math.round(rata * f.soal / 60) };
  }

  // ---------- B. triase dan penjelas ----------
  L.LABEL_JEBAKAN = { 'salah-klasifikasi': 'salah klasifikasi', 'lupa-pasal': 'lupa pasal', 'salah-baca': 'salah baca', 'salah-hitung': 'salah hitung', 'angka-usang': 'angka usang', 'final-nonfinal': 'final vs non-final' };
  L.MAKS_TEKS_ALASAN = 160;
  L.PRIORITAS_KELAS = { tersandung: 3, terbelah: 2, rapuh: 1, dikuasai: 0 };
  // potong teks ≤ n karakter (termasuk '…'), di batas kata bila memungkinkan
  L.potongTeks = function (t, n) {
    t = String(t == null ? '' : t).replace(/\s+/g, ' ').trim(); n = n || L.MAKS_TEKS_ALASAN;
    if (t.length <= n) return t;
    let c = t.slice(0, n - 1); const sp = c.lastIndexOf(' '); if (sp >= n * 0.6) c = c.slice(0, sp);
    return c.replace(/[\s,;:.(–-]+$/, '') + '…';
  };
  // ['A'] → 'A' · ['A','B'] → 'A dan B' · ['A','B','C'] → 'A, B, dan C'
  L.gabungNama = arr => { arr = (arr || []).filter(Boolean); return arr.length <= 1 ? (arr[0] || '') : arr.length === 2 ? arr[0] + ' dan ' + arr[1] : arr.slice(0, -1).join(', ') + ', dan ' + arr[arr.length - 1]; };
  // satu jawaban untuk triase: { o|opsi, k|keyakinan, b|benar } | 'B' | null → { o, k, b }; kunci diketahui → b dihitung ulang
  function jawabTriase(v, kunci) {
    if (v == null) return { o: '-', k: null, b: 0 };
    const { o, k } = jawabPeserta(v);
    let b = kunci ? (o === kunci ? 1 : 0) : (isObjL(v) && (v.b != null ? v.b : v.benar) ? 1 : 0);
    if (o === '-') b = 0;
    return { o, k, b };
  }
  L.triaseSoal = function (soal, per, opsi) {
    soal = isObjL(soal) ? soal : {}; per = isObjL(per) ? per : {}; opsi = isObjL(opsi) ? opsi : {};
    const kunci = OPSI_RE.test(String(soal.kunci || '')) ? String(soal.kunci) : null;
    const urutan = Array.isArray(opsi.urutan) ? opsi.urutan.filter(x => typeof x === 'string' && L.rapikanNamaPeserta(x)) : [];
    const hitung = isObjL(opsi.hitungPenjelas) ? opsi.hitungPenjelas : {};
    const kunciPer = new Map(); Object.keys(per).forEach(n => { const k = kunciNama(n); if (k && !kunciPer.has(k)) kunciPer.set(k, n); });
    // nama: menurut opsi.urutan (yang ada di per), lalu sisa per menurut urutan kunci objek
    const nama = []; const lihat = new Set();
    urutan.concat(Object.keys(per)).forEach(n => { const k = kunciNama(n); if (kunciPer.has(k) && !lihat.has(k)) { lihat.add(k); nama.push(L.rapikanNamaPeserta(n)); } });
    const j = {}; nama.forEach(n => { j[n] = jawabTriase(per[kunciPer.get(kunciNama(n))], kunci); });
    const N = nama.length;
    const benar = nama.filter(n => j[n].b), salah = nama.filter(n => !j[n].b && j[n].o !== '-'), kosong = nama.filter(n => j[n].o === '-');
    const nBenar = benar.length, nSalah = salah.length, nKosong = kosong.length;
    const yakinSalah = salah.filter(n => j[n].k === 'yakin');
    const belumMantap = benar.filter(n => j[n].k === 'ragu' || j[n].k === 'menebak');
    let kelas;
    if (N && nBenar === N) kelas = belumMantap.length ? 'rapuh' : 'dikuasai';
    else if (nBenar === 0 || nBenar / N < 0.5) kelas = 'tersandung';
    else kelas = 'terbelah';
    const hit = n => { const k = Object.keys(hitung).find(x => kunciNama(x) === kunciNama(n)); return k != null ? Number(hitung[k]) || 0 : 0; };
    const pilih = (calon, utamakanYakin) => calon.slice().sort((a, b) =>
      (utamakanYakin ? (j[b].k === 'yakin' ? 1 : 0) - (j[a].k === 'yakin' ? 1 : 0) : 0) || hit(a) - hit(b) || nama.indexOf(a) - nama.indexOf(b))[0] || null;
    let penjelas = null, kepada = [], label, saran;
    if (kelas === 'dikuasai') { label = 'Dikuasai'; saran = 'Lanjut'; }
    else if (kelas === 'rapuh') { label = 'Benar semua, belum mantap'; penjelas = pilih(belumMantap, false); saran = penjelas + ', jelaskan singkat alasanmu'; }
    else {
      kepada = nama.filter(n => !j[n].b);
      label = kelas === 'terbelah' ? 'Terbelah ' + nBenar + '–' + (N - nBenar) : nBenar === 0 ? 'Semua belum tepat' : 'Hanya ' + nBenar + ' dari ' + N + ' benar';
      if (nBenar === 0) saran = 'Baca pembahasan bersama';
      else { penjelas = pilih(benar, true); saran = nBenar === 1 && kepada.length > 1 ? 'Hanya ' + penjelas + ' yang benar: ' + penjelas + ' jelaskan ke semua' : penjelas + ' jelaskan ke ' + L.gabungNama(kepada); }
    }
    // opsi salah terbanyak (seri: lebih banyak yang yakin, lalu huruf)
    const hitO = {}; salah.forEach(n => { const o = j[n].o; hitO[o] = hitO[o] || { n: 0, y: 0 }; hitO[o].n++; if (j[n].k === 'yakin') hitO[o].y++; });
    const opsiKeliru = Object.keys(hitO).sort((a, b) => hitO[b].n - hitO[a].n || hitO[b].y - hitO[a].y || (a < b ? -1 : 1))[0] || null;
    let alasan = null;
    if (opsiKeliru) {
      const tag = (isObjL(soal.jebakanOpsi) && typeof soal.jebakanOpsi[opsiKeliru] === 'string' && soal.jebakanOpsi[opsiKeliru]) || null;
      const ms = isObjL(soal.pembahasan) && isObjL(soal.pembahasan.mengapaSalah) ? soal.pembahasan.mengapaSalah[opsiKeliru] : null;
      const teks = typeof ms === 'string' && ms.trim() ? L.potongTeks(ms, L.MAKS_TEKS_ALASAN) : null;
      if (tag || teks) alasan = { opsi: opsiKeliru, tag, label: tag ? (L.LABEL_JEBAKAN[tag] || tag.replace(/-/g, ' ')) : null, teks };
    }
    return { kelas, N, nBenar, nSalah, nKosong, label, saran, penjelas, kepada, yakinSalah, belumMantap, opsiKeliru, alasan, prioritas: L.PRIORITAS_KELAS[kelas] };
  };
  // jawaban satu soal rekaman sesi per peserta (nama tanpa peduli kapital) → { nama: jawaban|null }
  function perPesertaSoal(q, peserta) {
    const jw = isObjL(q.jawaban) ? q.jawaban : {}; const per = {};
    (peserta.length ? peserta : Object.keys(jw)).forEach(n => { const k = Object.keys(jw).find(x => kunciNama(x) === kunciNama(n)); per[n] = k != null ? jw[k] : null; });
    return per;
  }
  const pesertaSesi = sesi => (Array.isArray(sesi.peserta) ? sesi.peserta : []).filter(x => typeof x === 'string' && x);
  const soalSesi = sesi => (Array.isArray(sesi.soal) ? sesi.soal : []).filter(q => q && typeof q.id === 'string');
  // soal bank (untuk jebakanOpsi/pembahasan) dengan kunci rekaman sesi (yang dinilai saat sesi)
  const soalUntukTriase = q => { const b = K.soal(q.id); return Object.assign({}, b || { id: q.id }, { kunci: q.kunci || (b && b.kunci) || '' }); };
  L.urutanBahas = function (sesi) {
    const perKelas = { dikuasai: 0, rapuh: 0, terbelah: 0, tersandung: 0 };
    if (!isObjL(sesi)) return { daftar: [], nDikuasai: 0, perKelas };
    const peserta = pesertaSesi(sesi); const bahas = isObjL(sesi.bahas) ? sesi.bahas : {};
    const item = soalSesi(sesi).map((q, idx) => {
      const so = soalUntukTriase(q), per = perPesertaSoal(q, peserta);
      const awal = L.triaseSoal(so, per, { urutan: peserta }); perKelas[awal.kelas]++;
      return { idx, q, so, per, awal };
    });
    const hitung = {};
    const daftar = item.filter(x => x.awal.prioritas >= 1)
      .sort((a, b) => b.awal.prioritas - a.awal.prioritas || b.awal.yakinSalah.length - a.awal.yakinSalah.length || b.awal.nSalah - a.awal.nSalah || a.idx - b.idx)
      .map(x => {
        const t = L.triaseSoal(x.so, x.per, { urutan: peserta, hitungPenjelas: hitung });
        if (t.penjelas) hitung[t.penjelas] = (hitung[t.penjelas] || 0) + 1;
        return Object.assign({ idx: x.idx, id: x.q.id, kode: x.q.kode || String(x.q.id).split('-')[0], topik: x.q.topik || '', kunci: x.q.kunci || '', sudah: !!bahas[x.q.id] }, t);
      });
    return { daftar, nDikuasai: perKelas.dikuasai, perKelas };
  };
  // tandai soal sudah/belum dibahas pada rekaman sesi → true bila sesi ada
  L.tandaiBahas = function (sesiId, soalId, sudah) {
    const x = sesiDari(null, sesiId); if (!x || typeof soalId !== 'string') return false;
    if (!isObjL(x.bahas)) x.bahas = {};
    if (sudah === false) delete x.bahas[soalId]; else x.bahas[soalId] = 1;
    UKP.store.save(); return true;
  };

  // ---------- C. skor ujian dan rekap ----------
  const urutKode = k => { const i = (UKP.urutanKelompok || []).indexOf(k); return i < 0 ? 999 : i; };
  L.skorUjian = function (sesi) {
    if (!isObjL(sesi)) return [];
    const peserta = pesertaSesi(sesi), soal = soalSesi(sesi), n = soal.length;
    const waktu = isObjL(sesi.waktuPeserta) ? sesi.waktuPeserta : {};
    const batas = L.BATAS_LULUS;
    return peserta.map(nama => {
      let benar = 0, salah = 0, kosong = 0, nRagu = 0; const pk = new Map();
      soal.forEach(q => {
        const v = perPesertaSoal(q, [nama])[nama]; const { o, k } = jawabPeserta(v); const b = o !== '-' && o === q.kunci;
        if (b) benar++; else if (o === '-') kosong++; else salah++;
        if (k === 'ragu') nRagu++;
        const kode = q.kode || String(q.id).split('-')[0];
        if (!pk.has(kode)) pk.set(kode, { kode, n: 0, benar: 0 }); const x = pk.get(kode); x.n++; if (b) x.benar++;
      });
      const lulus = n > 0 && benar * 100 >= batas * n;
      const wk = Object.keys(waktu).find(x => kunciNama(x) === kunciNama(nama)); const dt = wk != null ? Number(waktu[wk]) : NaN;
      return { nama, n, benar, salah, kosong, skor: n ? Math.round(benar / n * 1000) / 10 : 0, lulus,
        kurang: lulus ? 0 : Math.max(0, Math.ceil(batas * n / 100 - 1e-9) - benar), nRagu,
        perKelompok: [...pk.values()].sort((a, b) => urutKode(a.kode) - urutKode(b.kode) || (a.kode < b.kode ? -1 : 1)), detik: isFinite(dt) && dt >= 0 ? Math.round(dt) : null };
    });
  };
  const BULAN_PENDEK = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const desimal = x => String(Math.round(x * 10) / 10).replace('.', ',');
  const namaTopik = id => { const t = K.topik(id); return t && t.judul ? t.judul : id; };
  // teks rekap siap tempel ke grup WhatsApp: judul + tanggal, ringkasan tim, baris per orang, topik yang perlu dibahas (4–10 baris)
  L.rekapSesi = function (sesi) {
    if (!isObjL(sesi)) return '';
    const ev = L.evaluasiSesi(sesi); const ujian = ev.mode === 'ujian';
    const d = new Date(Number(sesi.mulai) || Number(sesi.selesai) || Date.now());
    const baris = [(ev.judul || (ujian ? 'Ujian tim' : 'Latihan bersama')) + ' · ' + d.getDate() + ' ' + BULAN_PENDEK[d.getMonth()] + ' ' + d.getFullYear()];
    // v8.2 B0: rekaman room membawa sesi.tim (T6); rekaman bersumber room (HP anggota) tanpa skor per nama (U1)
    const tim = isObjL(sesi.tim) ? sesi.tim : null; const dariRoom = sesi.sumber === 'room';
    let orang;
    if (ujian) {
      const sk = ev.skor || []; const rata = sk.length ? sk.reduce((a, x) => a + x.skor, 0) / sk.length : 0;
      baris.push(ev.nSoal + ' soal · rata-rata skor ' + desimal(rata) + ' · ' + sk.filter(x => x.lulus).length + ' dari ' + sk.length + ' lulus (batas ' + L.BATAS_LULUS + ')');
      orang = sk.slice().sort((a, b) => b.skor - a.skor).map(x => x.nama + ' ' + desimal(x.skor) + (x.lulus ? ' lulus' : ' (kurang ' + x.kurang + ' soal)'));
    } else if (tim && Number.isInteger(tim.akurasi)) {
      const hadir = Number.isInteger(tim.hadir) && tim.hadir > 0 ? ' · ' + tim.hadir + ' dari ' + ev.nPeserta + ' hadir' : '';
      baris.push(ev.nSoal + ' soal · skor tim ' + tim.akurasi + '%' + hadir + (ev.menit ? ' · ' + ev.menit + ' menit' : ''));
      orang = ev.peserta.map(p => p.nama + ' ' + p.benar + '/' + ev.nSoal);
    } else {
      const tot = ev.nSoal * ev.nPeserta, totB = ev.peserta.reduce((a, p) => a + p.benar, 0);
      baris.push(ev.nSoal + ' soal · akurasi tim ' + (tot ? Math.round(totB / tot * 100) : 0) + '%' + (ev.menit ? ' · ' + ev.menit + ' menit' : ''));
      orang = ev.peserta.map(p => p.nama + ' ' + p.benar + '/' + ev.nSoal);
    }
    if (dariRoom) { /* tanpa baris per orang */ }
    else if (!orang.length) baris.push('Belum ada peserta.');
    else if (orang.length <= 7) orang.forEach(o => baris.push(o));
    else for (let i = 0; i < orang.length; i += 3) baris.push(orang.slice(i, i + 3).join(' · '));
    if (tim) {
      const tk = isObjL(tim.terimaKasih) ? tim.terimaKasih : {};
      const nm = Object.keys(tk).filter(n => Math.round(Number(tk[n])) > 0).sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }));
      if (nm.length) baris.push('Terima kasih untuk penjelas: ' + nm.map(n => n + ' (' + Math.round(Number(tk[n])) + ')').join(', '));
      const bl = Array.isArray(tim.bahasLagi) ? tim.bahasLagi.filter(x => typeof x === 'string' && x).slice(0, 10) : [];
      if (bl.length) baris.push('Bahas lagi: ' + bl.join(', '));
    }
    const topik = [];
    ev.topikTim.forEach(t => { if (topik.length < 3 && !topik.includes(t.topik)) topik.push(t.topik); });
    ev.triase.daftar.forEach(x => { if (topik.length < 3 && x.prioritas >= 2 && x.topik && !topik.includes(x.topik)) topik.push(x.topik); });
    baris.push(topik.length ? 'Perlu dibahas: ' + topik.map(namaTopik).join('; ') : 'Tidak ada topik yang perlu dibahas.');
    return baris.join('\n');
  };
  // v8.2 B0 room tim (T4, T6): ringkasan tim satu rekaman sesi, dirakit pemimpin sebelum terbitkanSesi → sesi.tim. Murni (tanpa store).
  // opsi = { paham: { nama: { soalId: 1 } | dokumen jawaban room (punya .paham) }, penjelas: { soalId: nama }, hadir: n | [nama], batasSalah: 3 }
  // → { benar, dijawab, akurasi (0–100 | null), hadir, terimaKasih: { penjelas: n } (urut abjad, tanpa nol), bahasLagi: [soalId dengan ≥ batasSalah salah] }
  L.timDariSesi = function (sesi, opsi) {
    opsi = isObjL(opsi) ? opsi : {};
    const out = { benar: 0, dijawab: 0, akurasi: null, hadir: 0, terimaKasih: {}, bahasLagi: [] };
    if (!isObjL(sesi)) return out;
    const peserta = pesertaSesi(sesi), soal = soalSesi(sesi); const batas = bulatPositif(opsi.batasSalah) || 3;
    const menjawab = new Set(); const penjelasSoal = {};
    soal.forEach(q => {
      const per = perPesertaSoal(q, peserta); const kunci = OPSI_RE.test(String(q.kunci || '')) ? String(q.kunci) : null; let salah = 0;
      Object.keys(per).forEach(n => {
        if (per[n] == null) return; const j = jawabTriase(per[n], kunci); if (j.o === '-') return;
        out.dijawab++; menjawab.add(kunciNama(n)); if (j.b) out.benar++; else salah++;
      });
      if (salah >= batas) out.bahasLagi.push(q.id);
      const pj = (isObjL(opsi.penjelas) && opsi.penjelas[q.id]) || q.penjelas;
      if (typeof pj === 'string' && pj) penjelasSoal[q.id] = pj;
    });
    out.akurasi = out.dijawab ? Math.round(out.benar / out.dijawab * 100) : null;
    if (Array.isArray(opsi.hadir)) out.hadir = new Set(opsi.hadir.filter(x => typeof x === 'string' && x).map(kunciNama)).size;
    else if (opsi.hadir != null && isFinite(Number(opsi.hadir))) out.hadir = Math.max(0, Math.min(12, Math.round(Number(opsi.hadir))));
    else out.hadir = menjawab.size;
    const tampil = n => peserta.find(p => kunciNama(p) === kunciNama(n)) || n;
    const hitung = {}; const paham = isObjL(opsi.paham) ? opsi.paham : {};
    Object.keys(paham).forEach(nama => {
      let m = paham[nama]; if (isObjL(m) && isObjL(m.paham)) m = m.paham; if (!isObjL(m)) return;
      Object.keys(m).forEach(sid => {
        if (!m[sid]) return; const pj = penjelasSoal[sid]; if (!pj || kunciNama(pj) === kunciNama(nama)) return;   // soal di luar rekaman / berterima kasih ke diri sendiri: diabaikan
        const t = tampil(pj); hitung[t] = (hitung[t] || 0) + 1;
      });
    });
    Object.keys(hitung).sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' })).forEach(n => { out.terimaKasih[n] = hitung[n]; });
    return out;
  };

  // ---------- D. Ujian tim: kode ujian dan kode jawaban ----------
  const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  function keBita(str) { const e = encodeURIComponent(str); const b = []; for (let i = 0; i < e.length; i++) { if (e[i] === '%') { b.push(parseInt(e.substr(i + 1, 2), 16)); i += 2; } else b.push(e.charCodeAt(i)); } return b; }
  const dariBita = b => decodeURIComponent(b.map(x => '%' + (x < 16 ? '0' : '') + x.toString(16)).join(''));
  function b64url(str) {
    const b = keBita(str); let o = '';
    for (let i = 0; i < b.length; i += 3) {
      const n = (b[i] << 16) | ((b[i + 1] || 0) << 8) | (b[i + 2] || 0);
      o += B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + (i + 1 < b.length ? B64[(n >> 6) & 63] : '') + (i + 2 < b.length ? B64[n & 63] : '');
    }
    return o;
  }
  function dariB64url(s) {
    if (!/^[A-Za-z0-9_-]*$/.test(s) || s.length % 4 === 1) throw new Error('b64');
    const b = []; let buf = 0, bit = 0;
    for (const c of s) { buf = (buf << 6) | B64.indexOf(c); bit += 6; if (bit >= 8) { bit -= 8; b.push((buf >> bit) & 255); buf &= (1 << bit) - 1; } }
    return dariBita(b);
  }
  const hexUtf8 = str => keBita(str).map(x => (x < 16 ? '0' : '') + x.toString(16)).join('');
  const dariHex = h => { if (!/^([0-9a-f]{2})*$/.test(h)) throw new Error('hex'); const b = []; for (let i = 0; i < h.length; i += 2) b.push(parseInt(h.substr(i, 2), 16)); return dariBita(b); };
  // cek 3 karakter base36 (djb2) — mendeteksi kode terpotong/salah ketik
  const cek3 = t => { let x = 5381; for (let i = 0; i < t.length; i++) x = ((x << 5) + x + t.charCodeAt(i)) >>> 0; return (x % 46656).toString(36).padStart(3, '0'); };
  const ID_UJIAN_RE = /^[A-Za-z0-9]{1,24}$/;
  const ID_SOAL_RE = /^([A-Z][0-9]{0,2})-([0-9]{3})$/;
  L.KODE_UJIAN_AWAL = 'UT1';
  L.TOKEN_JAWABAN_AWAL = 'UKPJ1';
  const idUjianBaru = () => 'ut' + Date.now().toString(36);
  // bagian soal: 's<set>~<rentang no>' (paket bersumber, mis. Try Out: 'sTO-B-2026-11~1-40') atau
  // 'l<segmen>~<segmen>…' dengan segmen '<kode>_<no base36 2 karakter>…' untuk id berurutan yang sekode (urutan dipertahankan),
  // atau 'r<base64url id>' untuk id di luar pola bank. Yang lebih pendek dipakai.
  function kodeSoalDaftar(ids) {
    const seg = []; let kini = null;
    ids.forEach(id => {
      const m = id.match(ID_SOAL_RE); const no = m ? Number(m[2]) : -1;
      if (m && no < 1296) { if (kini && kini.kode === m[1]) kini.nums += no.toString(36).padStart(2, '0'); else { kini = { kode: m[1], nums: no.toString(36).padStart(2, '0') }; seg.push(kini); } }
      else { kini = null; seg.push({ raw: 'r' + b64url(id) }); }
    });
    return 'l' + seg.map(x => x.raw || x.kode + '_' + x.nums).join('~');
  }
  function kodeSoalSet(ids) {
    let terbaik = null;
    for (const d of K.daftarSet()) {
      if (!/^[A-Za-z0-9-]+$/.test(d.set)) continue;
      const peta = new Map(K.soalSet(d.set).map(x => [x.id, Number(x.sumber.no)]));
      if (!ids.every(id => peta.has(id) && Number.isInteger(peta.get(id)) && peta.get(id) > 0)) continue;
      const nos = ids.map(id => peta.get(id)); const r = [];
      for (let i = 0; i < nos.length;) { let j = i; while (j + 1 < nos.length && nos[j + 1] === nos[j] + 1) j++; r.push(j > i ? nos[i] + '-' + nos[j] : String(nos[i])); i = j + 1; }
      const k = 's' + d.set + '~' + r.join('_');
      if (!terbaik || k.length < terbaik.length) terbaik = k;
    }
    return terbaik;
  }
  function bacaSoalKode(t) {
    if (t[0] === 's') {
      const i = t.indexOf('~'); if (i < 2) return null;
      const set = t.slice(1, i), rentang = t.slice(i + 1); if (!/^[0-9]+(-[0-9]+)?(_[0-9]+(-[0-9]+)?)*$/.test(rentang)) return null;
      const peta = new Map(K.soalSet(set).map(x => [Number(x.sumber.no), x.id])); const out = [];
      for (const r of rentang.split('_')) {
        const [a, b] = r.split('-').map(Number); const akhir = b == null ? a : b;
        if (!(a > 0) || akhir < a || out.length + akhir - a > 400) return null;
        for (let no = a; no <= akhir; no++) out.push(peta.get(no) || ('?' + set + '#' + no));
      }
      return out;
    }
    if (t[0] === 'l') {
      const out = [];
      for (const seg of t.slice(1).split('~')) {
        if (seg[0] === 'r') { const id = dariB64url(seg.slice(1)); if (!id || id.length > 40) return null; out.push(id); continue; }
        const m = seg.match(/^([A-Z][0-9]{0,2})_((?:[0-9a-z]{2})+)$/); if (!m) return null;
        for (let i = 0; i < m[2].length; i += 2) out.push(m[1] + '-' + String(parseInt(m[2].substr(i, 2), 36)).padStart(3, '0'));
        if (out.length > 400) return null;
      }
      return out;
    }
    return null;
  }
  function buatKode(o) {
    o = isObjL(o) ? o : {};
    const ids = (Array.isArray(o.soalIds) ? o.soalIds : []).filter(x => typeof x === 'string' && x && x.length <= 40);
    if (!ids.length) return '';
    const tingkat = TINGKAT_SAH.includes(o.tingkat) ? o.tingkat : tingkatProfil();
    const menit = Math.min(999, bulatPositif(o.menit) || Math.max(1, Math.round(ids.length * L.tempoUjian(tingkat) / 60)));
    const id = typeof o.id === 'string' && ID_UJIAN_RE.test(o.id) ? o.id : idUjianBaru();
    const daftar = kodeSoalDaftar(ids), set = kodeSoalSet(ids);
    const isi = [L.KODE_UJIAN_AWAL, tingkat + menit, id, b64url(teksPendek(o.judul, 60)), set && set.length <= daftar.length ? set : daftar].join('.');
    return isi + '.' + cek3(isi);
  }
  // teks → kode mentah (dari URL '#ujiantim/<kode>', juga %-encoded, atau 'UT1.…' di mana pun dalam teks)
  function ambilKodeUjian(teks) {
    let t = String(teks == null ? '' : teks).slice(0, 20000);
    for (let i = 0; i < 2; i++) t = t.replace(/(%[0-9A-Fa-f]{2})+/g, m => { try { return decodeURIComponent(m); } catch (e) { return m; } });
    const m = t.match(/#ujiantim\/([A-Za-z0-9._~-]+)/) || t.match(/(UT1\.[A-Za-z0-9._~-]+)/);
    return m ? m[1].replace(/[._~-]+$/, '') : null;
  }
  function bacaKode(teks) {
    try {
      const k = ambilKodeUjian(teks); if (!k) return null;
      const p = k.split('.'); if (p.length !== 6 || p[0] !== L.KODE_UJIAN_AWAL || cek3(p.slice(0, 5).join('.')) !== p[5]) return null;
      const hm = p[1].match(/^([ABC])([0-9]{1,3})$/); if (!hm || !(Number(hm[2]) > 0) || !ID_UJIAN_RE.test(p[2])) return null;
      const judul = dariB64url(p[3]);
      const soalIds = bacaSoalKode(p[4]); if (!soalIds || !soalIds.length) return null;
      return { id: p[2], judul, tingkat: hm[1], menit: Number(hm[2]), soalIds, tidakDikenal: soalIds.filter(id => !K.soal(id)) };
    } catch (e) { return null; }
  }
  // kode jawaban: 'UKPJ1.<ujianId>.<nama>.<jawaban>.<detik>.<cek>' — nama alfanumerik apa adanya, selain itu '0' + hex UTF-8;
  // jawaban satu karakter per soal: A–D, huruf kecil = ragu, '-' kosong, '!' kosong + ragu
  function buatJawaban(o) {
    o = isObjL(o) ? o : {};
    const id = typeof o.ujianId === 'string' && ID_UJIAN_RE.test(o.ujianId) ? o.ujianId : '';
    const nm = L.rapikanNamaPeserta(o.nama).slice(0, L.MAKS_NAMA_PESERTA);
    const namaK = !nm ? '' : /^[A-Za-z][A-Za-z0-9]*$/.test(nm) ? nm : '0' + hexUtf8(nm);
    const jw = Array.isArray(o.jawaban) ? o.jawaban : [], rg = Array.isArray(o.ragu) ? o.ragu : [];
    const isiJ = jw.slice(0, 400).map((v, i) => { const x = jawabPeserta(v).o; const r = !!rg[i]; return x === '-' ? (r ? '!' : '-') : (r ? x.toLowerCase() : x); }).join('');
    const dt = Number(o.detik); const isi = [L.TOKEN_JAWABAN_AWAL, id, namaK, isiJ, isFinite(dt) && dt >= 0 ? String(Math.round(dt)) : ''].join('.');
    return isi + '.' + cek3(isi);
  }
  const TOKEN_JWB_RE = /UKPJ1\.([A-Za-z0-9]*)\.([A-Za-z0-9]*)\.([A-Da-d!-]*)\.([0-9]*)\.([0-9a-z]{3})(?![0-9A-Za-z])/g;
  function bacaToken(m) {
    let nama = null; const nk = m[2];
    if (nk) { if (/^0/.test(nk)) { try { nama = dariHex(nk.slice(1)); } catch (e) { nama = null; } } else nama = nk; }
    const jawaban = [], ragu = [];
    for (const c of m[3]) { if (c === '-' || c === '!') { jawaban.push('-'); ragu.push(c === '!'); } else { jawaban.push(c.toUpperCase()); ragu.push(c !== c.toUpperCase()); } }
    return { ujianId: m[1] || null, nama: nama ? L.rapikanNamaPeserta(nama) : null, jawaban, ragu, detik: m[4] ? Number(m[4]) : null,
      _rusak: cek3(m[0].slice(0, m[0].length - 4)) !== m[5] };
  }
  // awalan salinan WhatsApp: '[10/11 14.03] ' atau '10/11/26 14.03 - '
  const buangKepalaWA = t => t.replace(/^\s*\[[^\]]{0,40}\]\s*/, '').replace(/^\s*\d{1,2}\/\d{1,2}(\/\d{2,4})?,?\s+\d{1,2}[.:]\d{2}(\s*[AP]M)?\s*-\s*/i, '');
  // nama di depan ':' pertama bila memuat huruf; tanpa ':' → kata pertama yang memuat huruf selain A–D
  function pisahNama(t) {
    t = buangKepalaWA(String(t || ''));
    const i = t.indexOf(':');
    if (i >= 0 && /\p{L}/u.test(t.slice(0, i))) return { nama: L.rapikanNamaPeserta(t.slice(0, i)).slice(0, L.MAKS_NAMA_PESERTA) || null, isi: t.slice(i + 1) };
    const m = t.match(/^\s*(\S*[E-Ze-zÀ-￿]\S*)\s+/);
    return m ? { nama: L.rapikanNamaPeserta(m[1]).slice(0, L.MAKS_NAMA_PESERTA), isi: t.slice(m[0].length) } : { nama: null, isi: t };
  }
  function bacaBebas(t) {
    const { nama, isi: isiMentah } = pisahNama(t); const jawaban = [], ragu = [];
    // kata yang memuat huruf selain A–D (mis. "semua", "jawabanku") diabaikan utuh agar huruf a/b/c/d di dalamnya tidak terbaca sebagai jawaban
    const isi = isiMentah.replace(/[\p{L}]+/gu, w => /^[A-Da-d]+$/.test(w) ? w : ' ');
    for (const c of isi) {
      if (/[A-Da-d]/.test(c)) { jawaban.push(c.toUpperCase()); ragu.push(false); }
      else if (c === '-' || c === '_' || c === '–') { jawaban.push('-'); ragu.push(false); }
      else if (c === '?') { if (ragu.length) ragu[ragu.length - 1] = true; }
    }
    return { ujianId: null, nama, jawaban, ragu, detik: null, _rusak: false };
  }
  function selesaikanJawaban(r, n) {
    const panjang = r.jawaban.length; let galat = null;
    if (r._rusak) galat = 'Kode jawaban tidak utuh. Minta kirim ulang.';
    else if (!panjang) galat = 'Tidak ada jawaban terbaca.';
    const nn = Number(n);
    if (Number.isInteger(nn) && nn > 0) {
      if (panjang !== nn && !galat) galat = 'Terbaca ' + panjang + ' jawaban, seharusnya ' + nn;
      r.jawaban = r.jawaban.slice(0, nn); r.ragu = r.ragu.slice(0, nn);
      while (r.jawaban.length < nn) { r.jawaban.push('-'); r.ragu.push(false); }
    }
    const terisi = r.jawaban.filter(x => x !== '-').length;
    return { ujianId: r.ujianId, nama: r.nama || null, jawaban: r.jawaban, ragu: r.ragu, detik: r.detik, terisi, kosong: r.jawaban.length - terisi, nRagu: r.ragu.filter(Boolean).length, panjang, galat };
  }
  function bacaJawaban(teks, n) {
    const t = String(teks == null ? '' : teks).slice(0, 20000);
    TOKEN_JWB_RE.lastIndex = 0; const m = TOKEN_JWB_RE.exec(t); TOKEN_JWB_RE.lastIndex = 0;
    if (m) { const r = bacaToken(m); if (!r.nama) r.nama = pisahNama(t.slice(0, m.index)).nama; return selesaikanJawaban(r, n); }
    return selesaikanJawaban(bacaBebas(t), n);
  }
  // satu tempelan berisi banyak orang: tiap token UKPJ1, atau tiap baris 'Nama: …' (baris lanjutan tanpa ':' ikut baris sebelumnya)
  function bacaBanyak(teks, n) {
    const hasil = []; let bebas = null;
    const tutup = () => { if (bebas) { const r = bacaBebas(bebas); if (r.jawaban.length) hasil.push(selesaikanJawaban(r, n)); bebas = null; } };
    for (const baris of String(teks == null ? '' : teks).slice(0, 100000).split(/\r?\n/)) {
      const ada = [...baris.matchAll(TOKEN_JWB_RE)];
      if (ada.length) {
        tutup();
        ada.forEach(m => { const r = bacaToken(m); if (!r.nama) r.nama = pisahNama(baris.slice(0, m.index)).nama; hasil.push(selesaikanJawaban(r, n)); });
        continue;
      }
      const tb = buangKepalaWA(baris); const i = tb.indexOf(':');
      if (i >= 0 && /\p{L}/u.test(tb.slice(0, i))) { tutup(); bebas = tb; }
      else if (bebas && /[A-Da-d?_-]/.test(baris)) bebas += ' ' + baris;
      else if (bebas && !baris.trim()) tutup();
    }
    tutup();
    return hasil;
  }

  // ---------- D. keadaan ujian tim di perangkat pemimpin (s.ujianTim) ----------
  const utAktif = () => { const s = UKP.store.get(); return isObjL(s.ujianTim) && Array.isArray(s.ujianTim.soalIds) ? s.ujianTim : null; };
  const namaDi = (daftar, nama) => { const k = kunciNama(nama); return k ? (daftar.find(x => kunciNama(x) === k) || null) : null; };
  function pastikanPeserta(u, nama) {
    let p = namaDi(u.peserta, nama); if (p) return p;
    const nm = L.rapikanNamaPeserta(nama); if (!nm || nm.length > L.MAKS_NAMA_PESERTA || u.peserta.length >= L.MAKS_PESERTA) return null;
    u.peserta.push(nm); return nm;
  }
  const isiKosong = (o, k) => { if (!isObjL(o[k])) o[k] = {}; return o[k]; };
  const UT = L.ujianTim = { buatKode, bacaKode, buatJawaban, bacaJawaban, bacaBanyak };
  UT.aktif = () => { const u = utAktif(); return u ? salinJSON(u) : null; };
  // susun ujian baru (menggantikan ujian aktif yang ada) → id
  UT.susun = function (o) {
    o = isObjL(o) ? o : {}; const s = L.siapBersama(UKP.store.get());
    const ids = []; (Array.isArray(o.soalIds) ? o.soalIds : []).forEach(x => { if (typeof x === 'string' && x && !ids.includes(x)) ids.push(x); });
    if (!ids.length) return null;
    const tingkat = TINGKAT_SAH.includes(o.tingkat) ? o.tingkat : tingkatProfil();
    const menit = bulatPositif(o.menit) || Math.max(1, Math.round(ids.length * L.tempoUjian(tingkat) / 60));
    const peserta = []; (Array.isArray(o.peserta) ? o.peserta : s.bersama.peserta).forEach(x => { const n = L.rapikanNamaPeserta(x); if (n && n.length <= L.MAKS_NAMA_PESERTA && !namaDi(peserta, n) && peserta.length < L.MAKS_PESERTA) peserta.push(n); });
    const kini = Date.now(); const id = typeof o.id === 'string' && ID_UJIAN_RE.test(o.id) ? o.id : idUjianBaru();
    const jawaban = {}, ragu = {}; peserta.forEach(n => { jawaban[n] = {}; ragu[n] = {}; });
    const sb = isObjL(o.sumber) ? o.sumber : null;
    s.ujianTim = { id, judul: teksPendek(o.judul, 80) || 'Ujian tim', tingkat, menit, detikPerSoal: Math.round(menit * 60 / ids.length), soalIds: ids, peserta,
      cara: o.cara === 'perangkat' ? 'perangkat' : 'papan', dibuat: kini, mulai: null, akhir: null, posisi: 0, jawaban, ragu, detikSoal: {}, terkumpul: {},
      sumber: sb ? { format: sb.format != null ? String(sb.format) : null, kode: sb.kode != null ? String(sb.kode) : null, bagian: sb.bagian != null ? String(sb.bagian) : null } : null };
    UKP.store.save();
    return id;
  };
  UT.mulai = function () {
    const u = utAktif(); if (!u) return null;
    if (!u.mulai) { u.mulai = Date.now(); u.akhir = u.mulai + u.menit * 60000; UKP.store.save(); }
    return salinJSON(u);
  };
  // opsi 'A'–'D' | '-' (kosong ditandai) | null (hapus)
  UT.catat = function (nama, soalId, opsi) {
    const u = utAktif(); if (!u || !u.soalIds.includes(soalId)) return false;
    const p = namaDi(u.peserta, nama); if (!p) return false;
    const jw = isiKosong(u.jawaban, p);
    if (opsi == null) delete jw[soalId]; else jw[soalId] = jawabPeserta(opsi).o;
    UKP.store.save(); return true;
  };
  UT.ragu = function (nama, soalId, ya) {
    const u = utAktif(); if (!u || !u.soalIds.includes(soalId)) return false;
    const p = namaDi(u.peserta, nama); if (!p) return false;
    const rg = isiKosong(u.ragu, p); if (ya) rg[soalId] = 1; else delete rg[soalId];
    UKP.store.save(); return true;
  };
  UT.aturPosisi = function (i) {
    const u = utAktif(); if (!u) return null;
    u.posisi = Math.max(0, Math.min(u.soalIds.length - 1, Math.round(Number(i)) || 0)); UKP.store.save(); return u.posisi;
  };
  UT.tambahDetik = function (soalId, detik) {
    const u = utAktif(); const d = Math.min(3600, Math.max(0, Number(detik) || 0)); if (!u || !u.soalIds.includes(soalId)) return 0;
    if (!isObjL(u.detikSoal)) u.detikSoal = {};
    u.detikSoal[soalId] = Math.round(((Number(u.detikSoal[soalId]) || 0) + d) * 10) / 10; UKP.store.save(); return u.detikSoal[soalId];
  };
  UT.tambahMenit = function (n) {
    const u = utAktif(); n = Math.round(Number(n) || 0); if (!u) return null;
    const baru = Math.max(1, u.menit + n); const geser = baru - u.menit; u.menit = baru;
    if (u.akhir) u.akhir += geser * 60000;
    u.detikPerSoal = Math.round(u.menit * 60 / u.soalIds.length); UKP.store.save(); return salinJSON(u);
  };
  // jawaban lengkap satu orang (dari kode jawaban, ketikan, atau perangkatnya sendiri): larik sejajar soalIds; menimpa catatan papan orang itu
  UT.kumpul = function (nama, o) {
    const u = utAktif(); if (!u) return false; o = isObjL(o) ? o : {};
    const p = pastikanPeserta(u, nama); if (!p) return false;
    const jw = Array.isArray(o.jawaban) ? o.jawaban : [], rg = Array.isArray(o.ragu) ? o.ragu : [];
    const aJ = u.soalIds.map((_, i) => jawabPeserta(jw[i]).o), aR = u.soalIds.map((_, i) => !!rg[i]);
    const pj = u.jawaban[p] = {}, pr = u.ragu[p] = {};
    u.soalIds.forEach((id, i) => { if (aJ[i] !== '-') pj[id] = aJ[i]; if (aR[i]) pr[id] = 1; });
    const dt = Number(o.detik);
    if (!isObjL(u.terkumpul)) u.terkumpul = {};
    u.terkumpul[p] = { jawaban: aJ, ragu: aR, detik: o.detik != null && isFinite(dt) && dt >= 0 ? Math.round(dt) : null, sumber: ['kode', 'ketik', 'sendiri', 'room'].includes(o.sumber) ? o.sumber : 'ketik', pada: Date.now() };
    UKP.store.save(); return true;
  };
  UT.lepasKumpul = function (nama) {
    const u = utAktif(); if (!u) return false; const p = namaDi(u.peserta, nama); if (!p || !isObjL(u.terkumpul) || !u.terkumpul[p]) return false;
    delete u.terkumpul[p]; u.jawaban[p] = {}; u.ragu[p] = {}; UKP.store.save(); return true;
  };
  UT.ringkas = function () {
    const u = utAktif(); if (!u) return null;
    const perPeserta = {};
    u.peserta.forEach(p => {
      const jw = isObjL(u.jawaban[p]) ? u.jawaban[p] : {}, rg = isObjL(u.ragu[p]) ? u.ragu[p] : {};
      const terisi = u.soalIds.filter(id => OPSI_RE.test(jw[id] || '')).length;
      perPeserta[p] = { terisi, kosong: u.soalIds.length - terisi, nRagu: u.soalIds.filter(id => rg[id]).length, mengumpulkan: !!(isObjL(u.terkumpul) && u.terkumpul[p]) };
    });
    const perSoal = u.soalIds.map(id => ({ id, nIsi: u.peserta.filter(p => isObjL(u.jawaban[p]) && OPSI_RE.test(u.jawaban[p][id] || '')).length, nRagu: u.peserta.filter(p => isObjL(u.ragu[p]) && u.ragu[p][id]).length }));
    return { n: u.soalIds.length, perPeserta, perSoal };
  };
  UT.batal = function () { const s = UKP.store.get(); const ada = !!s.ujianTim; s.ujianTim = null; UKP.store.save(); return ada; };
  // nilai → rekaman s.sesiBersama mode 'ujian' (salinan); panggilan kedua → null. opsi = { hanyaYangMengumpulkan }
  UT.nilai = function (opsi) {
    const s = L.siapBersama(UKP.store.get()); const u = utAktif(); if (!u) return null; opsi = isObjL(opsi) ? opsi : {};
    const kini = Date.now(); const arr = daftarSesi(s);
    const adaJawab = p => isObjL(u.jawaban[p]) && u.soalIds.some(id => OPSI_RE.test(u.jawaban[p][id] || ''));
    const peserta = u.peserta.filter(p => !opsi.hanyaYangMengumpulkan || adaJawab(p));
    let id = 'sb-' + kini; let i = 1; while (arr.some(x => x.id === id)) id = 'sb-' + kini + '-' + (i++);
    const dS = isObjL(u.detikSoal) ? u.detikSoal : {};
    const soal = u.soalIds.map(sid => {
      const b = K.soal(sid); const kunci = (b && b.kunci) || ''; const jawaban = {};
      peserta.forEach(p => {
        const o = jawabPeserta(isObjL(u.jawaban[p]) ? u.jawaban[p][sid] : null).o; const rg = !!(isObjL(u.ragu[p]) && u.ragu[p][sid]);
        jawaban[p] = { o, k: rg && o !== '-' ? 'ragu' : null, b: o !== '-' && o === kunci ? 1 : 0 };
      });
      return { id: sid, kode: (b && b.kode) || sid.split('-')[0], topik: (b && b.topik) || '', kunci, detik: Math.round(Math.min(3600, Math.max(0, Number(dS[sid]) || 0))), jawaban };
    });
    const waktuPeserta = {};
    peserta.forEach(p => { const t = isObjL(u.terkumpul) && u.terkumpul[p]; if (t && typeof t.detik === 'number') waktuPeserta[p] = t.detik; });
    const sesi = { id, mulai: u.mulai || u.dibuat || kini, selesai: kini, tingkat: u.tingkat, peserta, anggaranDetik: u.menit * 60, soal, sumber: 'ujiantim', rencana: soal.length,
      tempo: 'ujian', detikPerSoal: u.detikPerSoal, mode: 'ujian', judul: u.judul || null, ujianId: u.id, bahas: {}, waktuPeserta, cara: u.cara };
    arr.push(sesi); if (arr.length > L.MAKS_SESI_BERSAMA) arr.splice(0, arr.length - L.MAKS_SESI_BERSAMA);
    // riwayat per orang (dasbor lokal): peserta yang menjawab ≥ 1 soal
    peserta.filter(adaJawab).forEach(p => soal.forEach(q => {
      const j = q.jawaban[p]; s.jawabanBersama.push({ p, s: q.id, kd: q.kode, t: q.topik, o: j.o, b: j.b, d: q.detik, w: kini, m: 'ujian', k: j.k, sesi: id });
    }));
    pangkasBersama(s.jawabanBersama, kini);
    // statistik pribadi pemimpin (konteks 'simulasi'), kecuali ujian ini sudah ia kerjakan sebagai simulasi di perangkat ini
    const pemimpin = namaDi(peserta, s.profil && s.profil.nama);
    const sudahSim = (Array.isArray(s.simulasi) ? s.simulasi : []).some(x => x && isObjL(x.tim) && x.tim.ujianId === u.id);
    if (pemimpin && !sudahSim) soal.forEach(q => {
      const j = q.jawaban[pemimpin]; const b = K.soal(q.id); if (!b || j.o === '-') return;
      L.catatJawaban(b, j.o, q.detik, 'simulasi');
      if (j.k) { const a = s.jawaban[s.jawaban.length - 1]; if (a && a.soal === q.id && a.konteks === 'simulasi') a.keyakinan = j.k; }
    });
    s.ujianTim = null;
    UKP.store.save();
    return salinJSON(sesi);
  };

  // ---------- D. lembar jawab pribadi (HP anggota) ----------
  L.lembarJawab = {
    ambil() { const x = UKP.store.get().lembarJawab; return isObjL(x) && Array.isArray(x.jawaban) ? salinJSON(x) : null; },
    simpan(o) {
      o = isObjL(o) ? o : {}; const s = UKP.store.get();
      const jw = Array.isArray(o.jawaban) ? o.jawaban : [], rg = Array.isArray(o.ragu) ? o.ragu : [];
      const n = Math.min(400, bulatPositif(o.n) || jw.length);
      s.lembarJawab = { ujianId: typeof o.ujianId === 'string' && o.ujianId ? o.ujianId.slice(0, 40) : null, judul: teksPendek(o.judul, 80), nama: L.rapikanNamaPeserta(o.nama).slice(0, L.MAKS_NAMA_PESERTA), n,
        jawaban: Array.from({ length: n }, (_, i) => jawabPeserta(jw[i]).o), ragu: Array.from({ length: n }, (_, i) => !!rg[i]), dibuat: Number(o.dibuat) > 0 ? Number(o.dibuat) : Date.now() };
      UKP.store.save(); return salinJSON(s.lembarJawab);
    },
    hapus() { UKP.store.get().lembarJawab = null; UKP.store.save(); return true; },
  };

  // ---------- E. lanjutkan sesi latihan bersama ----------
  L.MAKS_JAM_BERSAMA_AKTIF = 24;
  L.simpanBersamaAktif = function (o) {
    const s = UKP.store.get();
    if (!isObjL(o) || typeof o.sesiId !== 'string') { s.bersamaAktif = null; UKP.store.save(); return null; }
    const dr = isObjL(o.draf) && typeof o.draf.soalId === 'string' ? o.draf : null;
    s.bersamaAktif = { sesiId: o.sesiId, soalIds: (Array.isArray(o.soalIds) ? o.soalIds : []).filter(x => typeof x === 'string'), idx: Math.max(0, Math.round(Number(o.idx) || 0)),
      sisaDetik: Math.max(0, Math.round(Number(o.sisaDetik) || 0)), anggaranDetik: Math.max(0, Math.round(Number(o.anggaranDetik) || 0)),
      tempo: o.tempo === 'longgar' ? 'longgar' : 'ujian', detikPerSoal: bulatPositif(o.detikPerSoal) || null, ulang: o.ulang === undefined ? null : salinJSON(o.ulang), diperbarui: Date.now(),
      draf: dr ? { soalId: dr.soalId, jb: isObjL(dr.jb) ? salinJSON(dr.jb) : {}, yb: isObjL(dr.yb) ? salinJSON(dr.yb) : {}, detikSoal: Math.max(0, Math.round(Number(dr.detikSoal) || 0)) } : null,
      // v8.2 B0: sesi ini berjalan di room tim (1, atau kode room ≤ 20 karakter); null = satu layar
      room: typeof o.room === 'string' && o.room ? o.room.slice(0, 20) : o.room ? 1 : null };
    UKP.store.save(); return salinJSON(s.bersamaAktif);
  };
  L.bersamaAktif = function () {
    const s = UKP.store.get(); const a = s.bersamaAktif;
    if (!isObjL(a) || typeof a.sesiId !== 'string' || !Array.isArray(a.soalIds)) return null;
    const x = sesiDari(s, a.sesiId); if (!x || x.selesai) return null;
    if (!(Number(a.diperbarui) > 0) || Date.now() - Number(a.diperbarui) > L.MAKS_JAM_BERSAMA_AKTIF * 3600000) return null;
    return salinJSON(a);
  };

  // kartu buatan pengguna: "Jadikan kartu" dari Lembar Angka / angka kunci topik / "Tambah ke kartu" Angka hari ini
  // (id KA-lembar-*, KA-poin-*, KA-angka-*); kartu dari soal yang keliru (KA-<id soal>) bukan buatan pengguna
  const BUATAN_RE = /^KA-(lembar|poin|angka)-/;
  L.kartuBuatan = k => !!k && (k.asal === 'lembar' || k.asal === 'poin' || k.asal === 'angka' || BUATAN_RE.test(String(k.id || '')));
  // batas kartu otomatis: bila terlampaui, buang kartu tertua yang belum pernah dinilai dan bukan buatan pengguna
  // (kartu buatan pengguna dan kartu yang sudah dinilai tidak pernah dibuang); keadaan SRS id yang dibuang ikut dibersihkan
  L.BATAS_KARTU_OTOMATIS = 2000;
  let batasDiberitahu = false;
  L.rapikanKartuOtomatis = function () {
    const s = UKP.store.get(); const daftar = s.kartuOtomatis; const batas = L.BATAS_KARTU_OTOMATIS;
    if (!Array.isArray(daftar) || daftar.length <= batas) return 0;
    let lebih = daftar.length - batas; let dibuang = 0;
    for (let i = 0; i < daftar.length && lebih > 0;) {
      const k = daftar[i]; const st = k ? s.kartu[k.id] : null;
      if (k && !L.kartuBuatan(k) && !(st && st.reps)) { daftar.splice(i, 1); if (s.kartu && k.id in s.kartu) delete s.kartu[k.id]; lebih--; dibuang++; }
      else i++;
    }
    // satu pemberitahuan per pemuatan halaman (tidak di setiap jawaban keliru)
    if (!batasDiberitahu && typeof UKP.toast === 'function') {
      batasDiberitahu = true;
      const angkaBatas = batas.toLocaleString('id-ID');
      UKP.toast(dibuang
        ? 'Batas ' + angkaBatas + ' kartu otomatis tercapai: ' + dibuang + ' kartu dari soal keliru yang belum pernah diulang dihapus. Kartu buatan Anda dan kartu yang sudah dinilai tetap disimpan.'
        : 'Batas ' + angkaBatas + ' kartu otomatis tercapai. Kartu buatan Anda dan kartu yang sudah dinilai tetap disimpan.');
    }
    return dibuang;
  };
  // kartu otomatis dari soal yang keliru; opsi bertag angka-usang → masuk Dek Perubahan
  L.kartuOtomatisDariSoal = function (soal, opsiDipilih) {
    if (!soal) return null;
    const s = UKP.store.get(); const id = 'KA-' + soal.id;
    const usang = !!opsiDipilih && (soal.jebakanOpsi || {})[opsiDipilih] === 'angka-usang';
    const ada = s.kartuOtomatis.find(k => k.id === id);
    if (ada) { if (usang && !(ada.dekTambahan || []).includes(DEK_PERUBAHAN)) { ada.dekTambahan = (ada.dekTambahan || []).concat(DEK_PERUBAHAN); UKP.store.save(); } return ada; }
    const stem = soal.stem.length > 160 ? soal.stem.slice(0, 157) + '…' : soal.stem;
    const dh = (soal.dasarHukum || [])[0] || {};
    const kartu = { id, kode: soal.kode, topik: soal.topik, tipe: 'definisi', depan: stem, belakang: soal.opsi[soal.kunci] + ' — ' + ((soal.pembahasan || {}).inti || ''), dasar: dh.pasal || '', berlakuSejak: dh.berlakuSejak || null, menggantikan: null, dekTambahan: usang ? [DEK_PERUBAHAN] : [], sumber: 'otomatis', soalRef: soal.id, dibuatPada: Date.now() };
    s.kartuOtomatis.push(kartu);
    L.rapikanKartuOtomatis();
    UKP.store.save();
    return kartu;
  };
  // batalkan kartu otomatis (tombol "Batalkan" di panel umpan balik)
  L.hapusKartuOtomatis = function (id) {
    const s = UKP.store.get(); const i = s.kartuOtomatis.findIndex(k => k.id === id); if (i < 0) return false;
    s.kartuOtomatis.splice(i, 1); delete s.kartu[id]; UKP.store.save(); return true;
  };
  // kartu otomatis dari baris angka: poin kunci topik atau baris Lembar Angka kelompok
  // poin: { label, nilai, dasar?, berlakuSejak?, menggantikan?, topik? } | string
  // asal: objek topik, id topik ("A2.8"), atau kode kelompok ("A2")
  // id stabil: KA-poin-<topik>-<indeks poinKunci> | KA-lembar-<kode>-<indeks lembarRingkas>; cadangan: hash label+nilai
  const hashTeks = t => { let x = 5381; for (let i = 0; i < t.length; i++) x = ((x << 5) + x + t.charCodeAt(i)) >>> 0; return x.toString(36); };
  const samaPoin = (a, b) => a === b || (!!a && !!b && typeof a === 'object' && typeof b === 'object' && String(a.label) === String(b.label) && String(a.nilai) === String(b.nilai));
  function asalPoin(poin, asal) {
    const tid = asal && typeof asal === 'object' ? String(asal.id || '') : String(asal || '');
    let t = tid.includes('.') ? K.topik(tid) : null;
    if (!t && poin && typeof poin === 'object' && poin.topik) t = K.topik(poin.topik);
    const kode = t ? t.kode : (tid.split('.')[0] || null);
    return { t, kode: kode && UKP.modul[kode] ? kode : null, lembar: !tid.includes('.') };
  }
  L.kartuPoinId = function (poin, asal) {
    const a = asalPoin(poin, asal); if (!a.kode) return null;
    if (!a.lembar && a.t) { const i = (a.t.poinKunci || []).findIndex(p => samaPoin(p, poin)); if (i >= 0) return 'KA-poin-' + a.t.id + '-' + i; }
    if (a.lembar) { const lr = UKP.modul[a.kode].meta.lembarRingkas; const i = Array.isArray(lr) ? lr.findIndex(p => samaPoin(p, poin)) : -1; if (i >= 0) return 'KA-lembar-' + a.kode + '-' + i; }
    const teks = typeof poin === 'string' ? poin : String(poin.label || '') + '|' + String(poin.nilai == null ? '' : poin.nilai);
    return 'KA-' + (a.lembar ? 'lembar-' + a.kode : 'poin-' + a.t.id) + '-h' + hashTeks(teks);
  };
  L.adaKartuPoin = (poin, asal) => { const id = L.kartuPoinId(poin, asal); return !!id && UKP.store.get().kartuOtomatis.some(k => k.id === id); };
  L.kartuOtomatisDariPoin = function (poin, asal) {
    if (!poin) return null;
    if (typeof poin === 'string') poin = { label: poin, nilai: '' };
    const a = asalPoin(poin, asal); const id = L.kartuPoinId(poin, asal); if (!id) return null;
    const s = UKP.store.get(); const ada = s.kartuOtomatis.find(k => k.id === id); if (ada) return ada;
    const label = String(poin.label || '').trim().replace(/[.?:]+$/, ''); const nilai = String(poin.nilai == null ? '' : poin.nilai).trim();
    if (!label) return null;
    const kartu = { id, kode: a.kode, topik: a.t ? a.t.id : null, tipe: 'angka', depan: label + '?', belakang: nilai || '—', dasar: poin.dasar || '', berlakuSejak: poin.berlakuSejak || null, menggantikan: poin.menggantikan || null, dekTambahan: poin.menggantikan ? [DEK_PERUBAHAN] : [], sumber: 'otomatis', asal: a.lembar ? 'lembar' : 'poin', dibuatPada: Date.now() };
    s.kartuOtomatis.push(kartu);
    L.rapikanKartuOtomatis();
    UKP.store.save();
    return kartu;
  };
  L.statTopik = function (topikId, hari) {
    const s = UKP.store.get(); const batas = Date.now() - (hari || 30) * 86400000;
    let n = 0, benar = 0, detik = 0, detikBenar = 0, terakhir = 0, salahTag = {};
    for (const j of s.jawaban) { if (j.topik !== topikId || kosongSim(j)) continue; terakhir = Math.max(terakhir, j.pada); if (j.pada < batas) continue; n++; if (j.benar) { benar++; detikBenar += j.detik || 0; } detik += j.detik || 0; if (!j.benar && j.tag) salahTag[j.tag] = (salahTag[j.tag] || 0) + 1; }
    return { n, benar, akurasi: n ? benar / n : 0, tempo: n ? detik / n : 0, tempoBenar: benar ? detikBenar / benar : 0, terakhir, salahTag };
  };
  L.retensiTopik = function (topikId) {
    const s = UKP.store.get(); const kode = topikId.split('.')[0]; const m = UKP.modul[kode]; if (!m) return null;
    const kartu = m.kartu.filter(k => k.topik === topikId); if (!kartu.length) return null;
    let dinilai = 0, kuat = 0; for (const k of kartu) { const st = s.kartu[k.id]; if (!st || !st.reps) continue; dinilai++; if (st.tangga >= 2) kuat++; }
    return dinilai ? kuat / dinilai : null;
  };
  // penguasaan 0–100 + level
  L.penguasaan = function (topikId) {
    const s = UKP.store.get(); const st = L.statTopik(topikId, 30); const st7 = L.statTopik(topikId, 7);
    const dibaca = !!s.topikDibaca[topikId]; const cek = !!s.cekSelesai[topikId];
    const cakupan = (dibaca ? .6 : 0) + (cek ? .4 : 0);
    const ret = L.retensiTopik(topikId);
    const akurasi = st.n >= 3 ? st.akurasi : (st.n ? st.akurasi * (st.n / 3) : 0);
    // tempo hanya dari jawaban benar (jawaban salah yang cepat tidak menaikkan skor); 0 bila belum ada data
    const tempo = st.benar ? U.clamp(1 - Math.max(0, st.tempoBenar - 150) / 150, 0, 1) : 0;
    let skor = 0.5 * akurasi + 0.2 * (ret == null ? akurasi : ret) + 0.2 * cakupan + 0.1 * tempo;
    skor = Math.round(skor * 100);
    let level = 'Belum mulai';
    if (dibaca || st.n) level = 'Dikenal';
    if (st.n >= 8 && st.akurasi >= .6) level = 'Terlatih';
    const kuasai = st.n >= 20 && st.akurasi >= .8 && (ret == null || ret >= .8);
    if (kuasai) level = 'Dikuasai';
    const lama = st.terakhir && (Date.now() - st.terakhir) > 21 * 86400000;
    if ((kuasai || level === 'Terlatih') && (lama || (st7.n >= 4 && st7.akurasi < .6))) level = 'Perlu segar';
    return { skor, level, n: st.n, akurasi: st.akurasi, butuh: Math.max(0, 8 - st.n), cukup: st.n >= 8, dibaca, cek, terakhir: st.terakhir, salahTag: st.salahTag };
  };
  L.skorKelompok = function (kode) {
    const m = UKP.modul[kode]; if (!m) return { skor: 0, n: 0, topik: [] };
    const rows = m.topik.map(t => ({ topik: t, p: L.penguasaan(t.id) }));
    const n = rows.reduce((a, r) => a + r.p.n, 0);
    const skor = rows.length ? Math.round(rows.reduce((a, r) => a + r.p.skor, 0) / rows.length) : 0;
    const sim = UKP.store.get().simulasi.filter(x => x.format === 'USKP' && x.kode === kode && x.selesai).slice(-1)[0];
    const gabung = sim ? Math.round(0.6 * skor + 0.4 * sim.skor) : skor;
    return { skor: gabung, skorLatihan: skor, n, topik: rows, akurasi30: n ? rows.reduce((a, r) => a + r.p.akurasi * r.p.n, 0) / n : 0 };
  };
  // ---------- V7 K-18: status penguasaan tunggal (docs/DESAIN-V7.md §4) ----------
  // Satu definisi untuk semua tampilan penguasaan (Hari Ini, Peta materi, Kelompok, Topik, Kemajuan):
  // topik dinilai setelah 8 soal (30 hari, sama dengan L.penguasaan); angka kelompok setelah 3 topik dinilai.
  L.BUTUH_SOAL_TOPIK = 8;
  L.BUTUH_TOPIK_KELOMPOK = 3;
  L.TEKS_DINILAI = 'Topik dinilai setelah 8 soal. Angka kelompok muncul setelah 3 topik dinilai.';
  function statusDariPenguasaan(p) {
    const butuh = L.BUTUH_SOAL_TOPIK; const n = (p && p.n) || 0;
    const tahap = n >= butuh ? 'dinilai' : n > 0 ? 'awal' : 'belum';
    const skor = n > 0 && p && isFinite(p.skor) ? p.skor : null;
    let label = null;
    if (tahap === 'dinilai') {
      if (skor < 60 || p.level === 'Perlu segar') label = 'perlu disegarkan';
      else if (skor >= 80) label = 'dikuasai';
    }
    return { nSoal: n, butuh, skor, tahap, label, teksSampel: tahap === 'dinilai' ? 'skor ' + skor + ' · ' + n + ' soal' : n + ' dari ' + butuh + ' soal untuk dinilai' };
  }
  // → { nSoal, butuh: 8, skor: number|null, tahap: 'belum'|'awal'|'dinilai', label: 'dikuasai'|'perlu disegarkan'|null, teksSampel }
  L.statusTopik = function (topikId) {
    if (topikId == null || topikId === '') return statusDariPenguasaan(null);
    return statusDariPenguasaan(L.penguasaan(String(topikId)));
  };
  // → { nTopik, nDinilai, nSoal, skor: number|null, tahap: 'belum'|'awal'|'dinilai', teks }
  L.statusKelompok = function (kode) {
    const m = kode != null ? UKP.modul[kode] : null;
    const rows = m ? L.skorKelompok(kode) : { skor: 0, n: 0, topik: [] };
    const st = (rows.topik || []).map(r => statusDariPenguasaan(r.p));
    const nTopik = st.length, nDinilai = st.filter(x => x.tahap === 'dinilai').length, nSoal = st.reduce((a, x) => a + x.nSoal, 0);
    const tahap = nDinilai >= L.BUTUH_TOPIK_KELOMPOK ? 'dinilai' : nSoal > 0 ? 'awal' : 'belum';
    const skor = nSoal > 0 ? rows.skor : null;
    const dinilaiTeks = nDinilai + ' dari ' + nTopik + ' topik dinilai';
    const teks = tahap === 'belum' ? 'Belum ada soal yang dijawab · ' + dinilaiTeks
      : (tahap === 'awal' ? 'Perkiraan awal · dari ' + nSoal + ' soal' : 'Dari ' + nSoal + ' soal') + ' · ' + dinilaiTeks;
    return { nTopik, nDinilai, nSoal, skor, tahap, teks };
  };
  // bobot kelompok per tingkat: meta.perkiraanBobotSoal[tingkat] (atau 1/n bila kosong) dikali UKP.bobotLaporan[tingkat] lalu dinormalkan (jumlah = 1).
  // Tingkat tanpa pengali laporan (A, B) memakai bobot dasar apa adanya, sama dengan perilaku sebelumnya.
  L.bobotKelompok = function (tingkat) {
    const kel = K.kelompok(tingkat); const out = {}; if (!kel.length) return out;
    const pengali = (UKP.bobotLaporan || {})[tingkat] || null;
    kel.forEach(k => { const dasar = (UKP.modul[k].meta.perkiraanBobotSoal || {})[tingkat] || (1 / kel.length); out[k] = pengali && typeof pengali[k] === 'number' ? dasar * pengali[k] : dasar; });
    if (pengali) { const tot = kel.reduce((a, k) => a + out[k], 0) || 1; kel.forEach(k => { out[k] = out[k] / tot; }); }
    return out;
  };
  // pengali per topik untuk tingkat: kunci bertitik di UKP.bobotLaporan[tingkat], mis. { 'A2.10': 1.15 } untuk C; {} untuk tingkat tanpa pengali topik (A, B).
  // Dipakai L.kuotaSoal (sesi dan simulasi UKP); modul lain boleh memakainya untuk menandai/menyaring topik yang dinaikkan.
  L.bobotTopik = function (tingkat) {
    const p = (UKP.bobotLaporan || {})[tingkat] || {}; const out = {};
    Object.keys(p).forEach(k => { if (k.includes('.') && typeof p[k] === 'number' && p[k] > 0) out[k] = p[k]; });
    return out;
  };
  // pembagian sisa terbesar (Hamilton): n kursi menurut bobot; tiap unit mendapat ⌊kuota⌋ atau ⌈kuota⌉ dan jumlahnya tepat n (selama kapasitas cukup).
  // kap[i]: batas kursi unit i (jumlah soal tersedia); kursi yang tidak tertampung dibagi ulang ke unit lain.
  // acak = false: kursi sisa ke pecahan terbesar (seri: bobot lebih besar, lalu urutan) — komposisi tetap, untuk simulasi.
  // acak = true: kursi sisa diundi dengan peluang = pecahan sisa (penarikan sistematis berurutan acak), sehingga rata-rata tiap unit tepat sama
  //   dengan kuotanya; dipakai sesi yang soalnya sedikit agar unit berpecahan terbesar tidak selalu sama.
  function bagiSisaTerbesar(bobot, n, kap, acak) {
    const m = bobot.length; const hasil = new Array(m).fill(0); let sisa = Math.max(0, Math.floor(Number(n) || 0));
    const muat = i => (kap && typeof kap[i] === 'number' ? kap[i] : Infinity) - hasil[i];
    for (let putaran = 0; putaran <= m && sisa > 0; putaran++) {
      const aktif = []; for (let i = 0; i < m; i++) if (bobot[i] > 0 && muat(i) > 0) aktif.push(i);
      const tot = aktif.reduce((a, i) => a + bobot[i], 0); if (!aktif.length || !(tot > 0)) break;
      const kuota = aktif.map(i => sisa * bobot[i] / tot); const beri = kuota.map(Math.floor);
      const pecahan = kuota.map((q, j) => q - beri[j]); let lebih = sisa - beri.reduce((a, b) => a + b, 0);
      const naik = new Array(aktif.length).fill(false);
      if (acak && lebih > 0) { let kum = 0, titik = Math.random(); for (const j of U.acak(aktif.map((_, j) => j))) { kum += pecahan[j]; if (lebih > 0 && titik < kum) { naik[j] = true; lebih--; titik += 1; } } }
      if (lebih > 0) aktif.map((_, j) => j).filter(j => !naik[j]).sort((a, b) => (pecahan[b] - pecahan[a]) || (bobot[aktif[b]] - bobot[aktif[a]]) || (a - b)).slice(0, lebih).forEach(j => { naik[j] = true; });
      let terpotong = false;
      aktif.forEach((i, j) => { const mau = beri[j] + (naik[j] ? 1 : 0); const dapat = Math.min(mau, muat(i)); if (dapat < mau) terpotong = true; hasil[i] += dapat; sisa -= dapat; });
      if (!terpotong) break;
    }
    return hasil;
  }
  L.bagiSisaTerbesar = bagiSisaTerbesar;
  // kuota soal per unit untuk tingkat: satu unit per kelompok target; kelompok yang punya pengali topik (L.bobotTopik) dipecah menjadi unit topik itu
  // dan unit sisa kelompok. Bobot unit = bobotKelompok[k] (sudah memuat pengali kelompok) × porsi soal unit dalam kelompok pada tingkat itu × pengali unit
  // (unit topik: pengali topik; unit sisa: pengali kelompok bila ada, selain itu 1). Untuk C: kuota A2 dipecah menjadi A2.10 (× 1,15) dan topik A2 lain
  // (A2.1–A2.9, A2.11; × 0,75); kuota yang dilepas dibagikan ulang ke semua unit lewat pembagian sisa terbesar (jumlah tepat n).
  // opsi: { acak: kursi sisa diundi (sesi), kecuali: Set id soal yang sudah terpilih (tidak dihitung kapasitas), min1: tiap kelompok yang punya soal mendapat ≥ 1 }
  // hasil: [{ kunci, kode, topik (null = seluruh/sisa kelompok), sisa, bobot, soal: [...], n }] dalam urutan K.kelompok(tingkat)
  L.kuotaSoal = function (tingkat, n, opsi) {
    opsi = opsi || {}; const bk = L.bobotKelompok(tingkat); const pk = (UKP.bobotLaporan || {})[tingkat] || {}; const bt = L.bobotTopik(tingkat); const unit = [];
    K.kelompok(tingkat).forEach(k => {
      const semua = K.soalKelompok(k, tingkat); const b = bk[k] || 0; if (!semua.length) return;
      const tp = Object.keys(bt).filter(t => t.split('.')[0] === k && semua.some(x => x.topik === t));
      if (!tp.length) { unit.push({ kunci: k, kode: k, topik: null, sisa: false, bobot: b, soal: semua }); return; }
      tp.forEach(t => { const st = semua.filter(x => x.topik === t); unit.push({ kunci: t, kode: k, topik: t, sisa: false, bobot: b * st.length / semua.length * bt[t], soal: st }); });
      const sisa = semua.filter(x => !tp.includes(x.topik));
      if (sisa.length) unit.push({ kunci: k, kode: k, topik: null, sisa: true, bobot: b * sisa.length / semua.length * (typeof pk[k] === 'number' ? pk[k] : 1), soal: sisa });
    });
    const kec = opsi.kecuali instanceof Set ? opsi.kecuali : null;
    const kap = unit.map(u => kec ? u.soal.filter(x => !kec.has(x.id)).length : u.soal.length);
    const jatah = bagiSisaTerbesar(unit.map(u => u.bobot), n, kap, !!opsi.acak);
    if (opsi.min1) {
      // kelompok tanpa kursi mengambil satu kursi dari unit yang paling berlebih terhadap kuotanya (jumlah tetap n)
      const tot = unit.reduce((a, u) => a + u.bobot, 0) || 1; const lebihDari = i => jatah[i] - n * unit[i].bobot / tot;
      [...new Set(unit.map(u => u.kode))].forEach(k => {
        const idx = unit.map((u, i) => i).filter(i => unit[i].kode === k); if (idx.some(i => jatah[i] > 0)) return;
        const terima = idx.find(i => kap[i] > 0 && unit[i].bobot > 0); if (terima == null) return;
        const donor = unit.map((u, i) => i).filter(i => jatah[i] >= 2).sort((a, b) => lebihDari(b) - lebihDari(a))[0]; if (donor == null) return;
        jatah[donor]--; jatah[terima]++;
      });
    }
    unit.forEach((u, i) => { u.n = jatah[i]; });
    return unit;
  };
  L.kesiapanTingkat = function (tingkat) {
    const kel = K.kelompok(tingkat); if (!kel.length) return { skor: 0, kelompok: [] };
    const bobotKel = L.bobotKelompok(tingkat);
    const rows = kel.map(k => ({ kode: k, bobot: bobotKel[k], s: L.skorKelompok(k) }));
    const tot = rows.reduce((a, r) => a + r.bobot, 0) || 1;
    return { skor: Math.round(rows.reduce((a, r) => a + r.s.skor * r.bobot, 0) / tot), kelompok: rows };
  };
  L.topikTerlemah = function (tingkat, n) {
    const rows = K.kelompok(tingkat).flatMap(k => UKP.modul[k].topik.filter(t => K.punyaSoal(t.id, tingkat)).map(t => ({ topik: t, p: L.penguasaan(t.id) })));
    return rows.sort((a, b) => a.p.skor - b.p.skor).slice(0, n || 5);
  };
  L.bukuKesalahan = function (tingkat, batas) {
    const s = UKP.store.get(); const kel = new Set(K.kelompok(tingkat));
    const out = []; const seen = new Set();
    for (let i = s.jawaban.length - 1; i >= 0 && out.length < (batas || 50); i--) { const j = s.jawaban[i]; if (j.benar || kosongSim(j) || !kel.has(j.kode) || seen.has(j.soal)) continue; seen.add(j.soal); out.push(j); }
    return out;
  };
  L.akurasiKeseluruhan = function (tingkat, hari) {
    const s = UKP.store.get(); const kel = new Set(K.kelompok(tingkat)); const batas = Date.now() - (hari || 30) * 86400000;
    let n = 0, b = 0; for (const j of s.jawaban) if (kel.has(j.kode) && j.pada >= batas && !kosongSim(j)) { n++; if (j.benar) b++; }
    return { n, benar: b, akurasi: n ? b / n : 0 };
  };

  // ---------- SRS kartu (tangga interval) ----------
  const TANGGA = [10 * 60 * 1000, 1, 3, 7, 14, 30, 60, 120]; // ms untuk anak tangga 0, hari untuk selanjutnya
  const S = UKP.srs = {};
  S.state = id => UKP.store.get().kartu[id] || { tangga: -1, jatuhTempo: 0, lupaBerturut: 0, reps: 0 };
  S.interval = (tangga) => tangga <= 0 ? TANGGA[0] : TANGGA[Math.min(tangga, TANGGA.length - 1)] * 86400000;
  S.labelInterval = (tangga) => { if (tangga <= 0) return '10 mnt'; const d = TANGGA[Math.min(tangga, TANGGA.length - 1)]; return d + ' hari'; };
  // anak tangga setelah dinilai: kartu baru + Ingat langsung ke tangga 1 (1 hari), + Mudah ke tangga 2; Lupa → 10 mnt
  S.tanggaBerikut = function (st, nilai) {
    const maks = TANGGA.length - 1; const baru = !st || !st.reps || st.tangga < 0;
    if (nilai === 'lupa') return 0;
    if (nilai === 'mudah') return Math.min(baru ? 2 : st.tangga + 2, maks);
    return Math.min(baru ? 1 : Math.max(1, st.tangga + 1), maks);
  };
  S.berikut = (id, nilai) => S.tanggaBerikut(S.state(id), nilai);
  S.nilai = function (id, nilai) {
    const s = UKP.store.get(); const st = Object.assign({ tangga: -1, jatuhTempo: 0, lupaBerturut: 0, reps: 0, leech: false }, s.kartu[id] || {});
    const tangga = S.tanggaBerikut(st, nilai); const now = Date.now();
    if (!st.reps) st.pertama = now;   // tanggal pertama dinilai → dasar kuota kartu baru per hari
    st.reps++; st.tangga = tangga;
    if (nilai === 'lupa') { st.lupaBerturut++; if (st.lupaBerturut >= 4) st.leech = true; }
    else st.lupaBerturut = 0;
    st.jatuhTempo = now + S.interval(st.tangga); st.terakhir = now;
    s.kartu[id] = st; UKP.store.save(); return st;
  };
  const sumberKartu = (tingkat, kode) => kode ? K.kartuKelompok(kode) : K.semuaKartu(tingkat);
  // dek "Kartu saya": semua kartu buatan pengguna (semua tingkat), opsional satu kelompok
  S.kartuSaya = kode => (UKP.store.get().kartuOtomatis || []).filter(k => L.kartuBuatan(k) && (!kode || k.kode === kode));
  // urutan kartu baru: kartu buatan pengguna lebih dulu, gelombang pembuatan terbaru dulu (kartu yang dibuat
  // berselang ≤ 3 dtk = satu gelombang, mis. "Jadikan kartu semua angka", tetap urut baris); lalu kartu lain sesuai urutan asal
  S.urutBaru = function (list) {
    const saya = [], lain = [];
    (list || []).forEach(k => (L.kartuBuatan(k) ? saya : lain).push(k));
    if (!saya.length) return lain;
    const u = saya.map((k, i) => ({ k, i, t: Number(k.dibuatPada) || 0, g: 0 })).sort((a, b) => a.t - b.t || a.i - b.i);
    let g = 0; u.forEach((x, j) => { if (j && x.t - u[j - 1].t > 3000) g++; x.g = g; });
    u.sort((a, b) => b.g - a.g || a.t - b.t || a.i - b.i);
    return u.map(x => x.k).concat(lain);
  };
  S.jatuhTempo = function (tingkat, kode) { const s = UKP.store.get(); const now = Date.now(); return sumberKartu(tingkat, kode).filter(k => { const st = s.kartu[k.id]; return st && st.reps && st.jatuhTempo <= now; }); };
  // kartu baru: kuota harian dihitung dari st.pertama (batas hari 03.00); kode → kartu kelompok itu saja
  S.baru = function (tingkat, n, kode) {
    const s = UKP.store.get(); const hariIni = U.hariIni(); let sudahHariIni = 0;
    for (const id in s.kartu) { const st = s.kartu[id]; if (!st) continue; const t = st.pertama || (st.reps === 1 ? st.terakhir : 0); if (t && hariDari(t) === hariIni) sudahHariIni++; }
    const sisa = Math.max(0, (n == null ? 10 : n) - sudahHariIni);
    // kartu buatan pengguna didahulukan (S.urutBaru) agar tidak tertahan di belakang ratusan kartu modul
    return S.urutBaru(sumberKartu(tingkat, kode).filter(k => !s.kartu[k.id] || !s.kartu[k.id].reps)).slice(0, sisa);
  };
  // opsi: { kode, dek: 'perubahan' | 'saya', baru, maks, tinjau }
  //  - dek perubahan / saya: jatuh tempo dulu (paling lama), lalu belum pernah dinilai (tanpa kuota harian); yang belum jatuh tempo dikecualikan
  //  - dek saya: kartu buatan pengguna (Jadikan kartu dari Lembar/Topik, Angka hari ini) di semua tingkat
  //  - tinjau: tambahkan juga kartu yang belum jatuh tempo (urut jatuh tempo); penilaian di mode ini tidak mengubah SRS (UKP.c.flash opsi.tinjau)
  S.antrean = function (tingkat, opsi) {
    opsi = opsi || {}; const s = UKP.store.get(); const now = Date.now();
    const jatuh = k => { const st = s.kartu[k.id]; return !!(st && st.reps && st.jatuhTempo <= now); };
    const belum = k => !(s.kartu[k.id] && s.kartu[k.id].reps);
    const urutJt = (a, b) => s.kartu[a.id].jatuhTempo - s.kartu[b.id].jatuhTempo;
    let q;
    if (opsi.dek === 'perubahan' || opsi.dek === 'saya' || opsi.tinjau) {
      let pool = opsi.dek === 'saya' ? S.kartuSaya(opsi.kode) : sumberKartu(tingkat, opsi.kode);
      if (opsi.dek === 'perubahan') pool = pool.filter(k => (k.dekTambahan || []).includes(DEK_PERUBAHAN));
      q = pool.filter(jatuh).sort(urutJt).concat(S.urutBaru(pool.filter(belum)));
      if (opsi.tinjau) q = q.concat(pool.filter(k => !jatuh(k) && !belum(k)).sort(urutJt));
    } else {
      const jt = U.acak(S.jatuhTempo(tingkat, opsi.kode));
      q = jt.concat(S.baru(tingkat, opsi.baru == null ? 10 : opsi.baru, opsi.kode));
    }
    if (opsi.maks) q = q.slice(0, opsi.maks);
    return q;
  };
  S.ringkas = function (tingkat) { const s = UKP.store.get(); const semua = K.semuaKartu(tingkat); let dinilai = 0, kuat = 0; for (const k of semua) { const st = s.kartu[k.id]; if (st && st.reps) { dinilai++; if (st.tangga >= 3) kuat++; } } return { total: semua.length, dinilai, kuat, jatuhTempo: S.jatuhTempo(tingkat).length, baru: S.baru(tingkat, 10).length }; };

  // ---------- kehadiran & rangkaian ----------
  const H = UKP.hadir = {};
  // aktivitas (default true): false = tidak ada item yang dikerjakan → HADIR 0 menit tidak dicatat
  H.catat = function (status, menit, aktivitas) {
    const s = UKP.store.get(); const t = U.hariIni(); const ada = s.hadir[t];
    menit = Math.max(0, Math.min(300, Math.round(Number(menit) || 0)));   // satu catatan maks 5 jam (jeda berhari-hari tidak menggelembungkan menit)
    if (status === 'HADIR' && !menit && aktivitas === false) return ada || null;
    if (ada && ada.status === 'HADIR' && status !== 'HADIR') return ada;
    s.hadir[t] = { status, menit: (ada && ada.menit || 0) + menit }; UKP.store.save(); return s.hadir[t];
  };
  // rangkaian: hanya hari HADIR yang menambah; IZIN/CUTI tidak memutus tetapi juga tidak menambah
  H.rangkaian = function () { const s = UKP.store.get(); let n = 0; let t = U.hariIni(); if (!s.hadir[t]) t = U.tambahHari(t, -1); while (s.hadir[t]) { if (s.hadir[t].status === 'HADIR') n++; t = U.tambahHari(t, -1); } return n; };
  H.tujuhHari = function () { const s = UKP.store.get(); const out = []; for (let i = 6; i >= 0; i--) { const t = U.tambahHari(U.hariIni(), -i); out.push({ tgl: t, st: s.hadir[t] || null }); } return out; };
  H.terakhirBelajar = function () { const s = UKP.store.get(); const tgls = Object.keys(s.hadir).sort(); return tgls.length ? tgls[tgls.length - 1] : null; };

  // ---------- angka hari ini ----------
  L.angkaHariIni = function (tingkat) {
    const list = (UKP.ref && UKP.ref.angkaHariIni) || []; if (!list.length) return null;
    const s = UKP.store.get(); const kel = K.kelompok(tingkat || s.profil.tingkat).concat('E');
    let pool = list.map((a, i) => ({ a, i })).filter(x => !x.a.kelompok || kel.includes(x.a.kelompok));
    if (!pool.length) pool = list.map((a, i) => ({ a, i }));
    const hari = U.selisihHari('2026-01-01', U.hariIni()); const x = pool[((hari % pool.length) + pool.length) % pool.length];
    return Object.assign({ idx: x.i }, x.a);
  };

  // ---------- komposer sesi ----------
  L.susunSesi = function (ukuran) {
    const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    const menit = ukuran === 'kilat' ? 5 : ukuran === 'penuh' ? 30 : 12;
    const lelah = jamBelajar() >= 21;   // 21.00–02.59 (pukul 00–02 dihitung 24–26)
    const nKartu = ukuran === 'kilat' ? 6 : Math.min(10, Math.max(4, Math.round(menit * .25 * 1.2)));
    const kartu = S.antrean(tingkat, { maks: nKartu, baru: ukuran === 'kilat' ? 2 : 6 });
    const terlemah = L.topikTerlemah(tingkat, 3);
    const urutan = L.urutanTopik(tingkat);
    let topik = null;
    if (ukuran !== 'kilat' && !lelah) { topik = urutan.find(t => !s.topikDibaca[t.id]) || (terlemah[0] && terlemah[0].topik) || urutan[0] || null; }
    let nSoal = ukuran === 'kilat' ? 5 : ukuran === 'penuh' ? 14 : 8;
    const angka = ukuran !== 'kilat' ? L.angkaHariIni(tingkat) : null;
    const mAngka = angka ? 0.5 : 0;
    const mKartu = kartu.length ? Math.round(kartu.length * 0.35 * 10) / 10 : 0;
    const mRingkas = topik ? Math.min(5, Math.round(menit * .35)) : 0;
    // studi kasus (Penuh): hanya kasus yang muat di sisa menit; jumlah soal disesuaikan agar total ≈ menit target
    let kasus = null;
    if (ukuran === 'penuh') {
      const minSoal = 6; const tetap = mAngka + mKartu + mRingkas;
      const semuaKasus = K.semuaKasus(tingkat); const relevan = semuaKasus.filter(k => !k.topik || K.punyaSoal(k.topik, tingkat));
      const muat = (relevan.length ? relevan : semuaKasus).filter(k => (k.estimasiMenit || 10) <= menit - tetap - minSoal * 0.75);
      kasus = muat.length ? U.acak(muat)[0] : null;
      const sisa = menit - tetap - (kasus ? (kasus.estimasiMenit || 10) : 0);
      nSoal = kasus ? U.clamp(Math.floor(sisa / 0.75), minSoal, nSoal) : U.clamp(Math.floor(sisa / 0.75), minSoal, 20);
    }
    const cocok = x => (x.tingkat || []).includes(tingkat);
    const poolTopik = topik ? K.soalTopik(topik.id, tingkat) : [];
    const poolLemah = terlemah.flatMap(t => K.soalTopik(t.topik.id)).filter(cocok);
    const poolSemua = K.semuaSoal(tingkat);
    const dijawabSalah = new Set(L.bukuKesalahan(tingkat, 40).map(j => j.soal));
    const prioritas = poolSemua.filter(x => dijawabSalah.has(x.id));
    let soal = [];
    // target dengan pengali laporan (Tingkat C): soal kelompok/topik yang dilaporkan sering muncul lebih mungkin terpilih
    const pengaliSesi = (UKP.bobotLaporan || {})[tingkat] || null;
    const tambah = (arr, n) => { for (const x of acakBerbobot(arr, pengaliSesi)) { if (soal.length >= nSoal || n <= 0) break; if (soal.some(y => y.id === x.id)) continue; soal.push(x); n--; } };
    if (pengaliSesi) {
      // Tingkat berpengali (C): topik hari ini maksimal 50% (kilat/lelah: soal keliru maksimal 50%); sisanya kuota per unit L.kuotaSoal
      // (bobotKelompok, A2.10 terpisah dari A2 lain) dengan pembagian sisa terbesar berundi; soal topik hari ini tidak diambil lagi lewat kuota.
      // Di dalam unit: soal yang pernah keliru, lalu soal topik terlemah, lalu acak berbobot; urutan soal kuota diacak. Cadangan poolSemua bila kurang.
      if (lelah || ukuran === 'kilat') tambah(prioritas, Math.ceil(nSoal / 2)); else tambah(poolTopik, Math.floor(nSoal * .5));
      const terpilih = new Set(soal.map(x => x.id).concat(poolTopik.map(x => x.id))); const kuota = [];
      for (const u of L.kuotaSoal(tingkat, nSoal - soal.length, { acak: true, kecuali: terpilih })) {
        if (!u.n) continue; const diUnit = new Set(u.soal.map(x => x.id)); let k = u.n;
        const urut = U.acak(prioritas.filter(x => diUnit.has(x.id))).concat(U.acak(poolLemah.filter(x => diUnit.has(x.id))), acakBerbobot(u.soal, pengaliSesi));
        for (const x of urut) { if (k <= 0) break; if (terpilih.has(x.id)) continue; terpilih.add(x.id); kuota.push(x); k--; }
      }
      for (const x of U.acak(kuota)) { if (soal.length >= nSoal) break; soal.push(x); }
      tambah(poolSemua, nSoal);
    }
    else if (lelah || ukuran === 'kilat') { tambah(prioritas, Math.ceil(nSoal / 2)); tambah(poolLemah, nSoal); tambah(poolSemua, nSoal); }
    else { tambah(poolTopik, Math.ceil(nSoal * .7)); tambah(prioritas, 2); tambah(poolLemah, nSoal); tambah(poolSemua, nSoal); }
    const blok = [];
    if (angka) blok.push({ jenis: 'angka', data: angka, menit: mAngka });
    if (kartu.length) blok.push({ jenis: 'kartu', data: kartu.map(k => k.id), menit: mKartu });
    if (topik) blok.push({ jenis: 'ringkas', data: topik.id, menit: mRingkas });
    if (soal.length) blok.push({ jenis: 'soal', data: soal.map(x => x.id), menit: Math.round(soal.length * 0.75) });
    if (kasus) blok.push({ jenis: 'kasus', data: kasus.id, menit: kasus.estimasiMenit || 10 });
    return { id: U.id('sesi'), ukuran, menit, blok, lelah, mulai: Date.now(), posisi: 0, hasil: { kartu: 0, soal: 0, benar: 0, topik: topik ? topik.id : null } };
  };
  L.urutanTopik = function (tingkat) {
    const urut = { A: ['A2', 'A1', 'A3', 'A4', 'A5'], B: ['A2', 'A1', 'A3', 'A4', 'A5', 'B7', 'B6', 'B8'], C: ['A2', 'A1', 'A3', 'A4', 'A5', 'B7', 'B6', 'B8', 'C10', 'C9'] }[tingkat] || ['A2'];
    let semua = urut.filter(k => UKP.modul[k]).flatMap(k => UKP.modul[k].topik);
    // tingkat berpengali laporan (C): prioritas UKP.urutanLaporan (C9, C10, B7, B8, A2.10, A3, A4, A1, B6, A5, lalu A2.1–A2.9 dan A2.11); A/B tetap
    const pk = (UKP.bobotLaporan || {})[tingkat]; const prioritas = pk ? (UKP.urutanLaporan || {})[tingkat] : null;
    if (Array.isArray(prioritas) && prioritas.length) {
      const daftar = prioritas.map(String).filter(x => urut.includes(x.split('.')[0])); const ekor = [];
      while (daftar.length) { const x = daftar[daftar.length - 1]; if (x.includes('.') || !(typeof pk[x] === 'number' && pk[x] < 1)) break; ekor.unshift(daftar.pop()); }
      const susunan = daftar.concat(urut.filter(k => !daftar.includes(k) && !ekor.includes(k)), ekor);
      const sudah = new Set(); semua = [];
      susunan.forEach(x => { const m = UKP.modul[x.split('.')[0]]; if (!m) return; (x.includes('.') ? m.topik.filter(t => t.id === x) : m.topik).forEach(t => { if (!sudah.has(t.id)) { sudah.add(t.id); semua.push(t); } }); });
    }
    const relevan = semua.filter(t => K.punyaSoal(t.id, tingkat));   // topik khusus B/C tidak disarankan untuk A
    return relevan.length ? relevan : semua;
  };

  // ---------- rencana v0 ----------
  const R = UKP.rencana = {};
  R.kebutuhanJam = { A: [70, 110], B: [90, 145], C: [110, 180] };
  R.hitung = function () {
    const s = UKP.store.get(); const p = s.profil; const t = U.hariIni();
    const out = { tingkat: p.tingkat, kebutuhan: R.kebutuhanJam[p.tingkat] || [70, 110], tanggalUjian: p.tanggalUjian, hariTersisa: null, jamTersedia: null, padat: false, fase: [] };
    if (p.latar === 'akuntansi') out.kebutuhan = [out.kebutuhan[0], Math.round((out.kebutuhan[0] + out.kebutuhan[1]) / 2)];
    if (p.tanggalUjian) {
      const hari = U.selisihHari(t, p.tanggalUjian); out.hariTersisa = hari;
      let menit = 0; for (let i = 0; i < Math.max(0, hari); i++) { const d = new Date(U.tambahHari(t, i) + 'T00:00:00'); const wk = d.getDay() === 0 || d.getDay() === 6; menit += wk ? p.menitAkhirPekan : p.menitHariKerja; }
      out.jamTersedia = Math.round(menit / 60);
      out.padat = out.jamTersedia < out.kebutuhan[0] * .8;
    }
    const urut = L.urutanTopik(p.tingkat); const kel = []; for (const tp of urut) if (!kel.includes(tp.kode)) kel.push(tp.kode);
    // tingkat dengan pengali topik (C): topik berpengali tampil sebagai segmen sendiri, mis. "… → A2.10 Penagihan … → … → A2 KUP (topik lain)"
    const bt = L.bobotTopik(p.tingkat); let labelUrut = kel.map(k => k + ' ' + K.namaKelompok(k));
    if (Object.keys(bt).length) {
      const seg = []; for (const tp of urut) { const kunci = bt[tp.id] ? tp.id : tp.kode; if (!seg.length || seg[seg.length - 1].kunci !== kunci) seg.push({ kunci, tp }); }
      labelUrut = seg.map(x => x.kunci === x.tp.id ? x.tp.id + ' ' + x.tp.judul : x.kunci + ' ' + K.namaKelompok(x.kunci) + (seg.some(y => y.kunci !== x.kunci && y.kunci.split('.')[0] === x.kunci) ? ' (topik lain)' : ''));
    }
    out.fase = [
      { id: 'F0', nama: 'Diagnosis', isi: 'Sesi pertama: 3 soal per kelompok materi untuk memetakan posisi awal.', durasi: '1–2 hari' },
      { id: 'F1', nama: 'Fondasi', isi: 'Urutan kelompok: ' + labelUrut.join(' → '), durasi: '± 60% waktu' },
      { id: 'F2', nama: 'Pendalaman', isi: 'Fokus topik dengan penguasaan < 70; studi kasus dan kalkulator.', durasi: '± 20% waktu' },
      { id: 'F3', nama: 'Konsolidasi', isi: 'Simulasi 40 soal per kelompok setiap Sabtu; Buku Kesalahan.', durasi: '± 15% waktu' },
      { id: 'F4', nama: 'Simulasi komprehensif', isi: 'Satu simulasi UKP ' + p.tingkat + ' per minggu pada 3 minggu terakhir (di laptop).', durasi: '3 minggu terakhir' },
      { id: 'F5', nama: 'Minggu Tenang', isi: 'H-7: tanpa materi baru; kartu, Buku Kesalahan, cek perangkat.', durasi: 'H-7 s.d. H-1' },
    ];
    out.tugas = [];
    if (p.tanggalUjian) {
      const T = p.tanggalUjian;
      if (p.perangkat !== 'ya') out.tugas.push({ id: 'laptop', kapan: U.tambahHari(T, -30), teks: 'Pastikan ada laptop pribadi yang memenuhi spesifikasi (atau pinjam/sewa).' });
      out.tugas.push({ id: 'seb', kapan: U.tambahHari(T, -21), teks: 'Pasang Safe Exam Browser versi yang diminta BPPK dan unduh konfigurasi dari KLC.' });
      out.tugas.push({ id: 'dummy', kapan: U.tambahHari(T, -14), teks: 'Ikut uji coba perangkat / ujian dummy yang dijadwalkan BPPK.' });
      out.tugas.push({ id: 'ruang', kapan: U.tambahHari(T, -7), teks: 'Cek ruangan, Zoom di perangkat kedua, KTP, dan koneksi cadangan.' });
      out.tugas.push({ id: 'tenang', kapan: U.tambahHari(T, -7), teks: 'Mulai Minggu Tenang: tanpa materi baru.' });
      out.tugas.push({ id: 'h1', kapan: U.tambahHari(T, -1), teks: 'Tidur cukup; siapkan perangkat; masuk Zoom 30 menit sebelum sesi.' });
    }
    const periode = ((UKP.ref && UKP.ref.ujian && UKP.ref.ujian.periode) || []).filter(x => x.pendaftaran && x.pendaftaran[0]);
    out.pendaftaran = periode.map(x => ({ id: x.id, nama: x.nama, buka: x.pendaftaran[0], tutup: x.pendaftaran[1], ujian: x.ujian })).filter(x => x.tutup && x.tutup.slice(0, 10) >= t);
    out.siapDaftar = (() => { const sim = s.simulasi.filter(x => x.format === 'UKP' && x.tingkat === p.tingkat && x.selesai && !x.terbagi && !x.tanpaWaktu).slice(-2); if (sim.length < 2 || sim.some(x => x.skor < 70)) return false; const kes = L.kesiapanTingkat(p.tingkat); return kes.kelompok.every(k => k.s.skor >= 60); })();
    return out;
  };

  // ---------- kalender minggu ----------
  const hariMinggu = iso => new Date(iso + 'T00:00:00').getDay();          // 0 = Minggu … 6 = Sabtu
  const seninDari = iso => U.tambahHari(iso, -((hariMinggu(iso) + 6) % 7));
  // kunci minggu ISO 8601, mis. "2026-W44"
  const isoMinggu = iso => {
    const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + 3);   // Kamis minggu itu
    const th = d.getFullYear(); const j4 = new Date(th, 0, 4, 12);
    const no = 1 + Math.round(((d - j4) / 86400000 - 3 + ((j4.getDay() + 6) % 7)) / 7);
    return th + '-W' + String(no).padStart(2, '0');
  };
  L.isoMinggu = isoMinggu; L.seninDari = seninDari;

  // ---------- rencana v1: garis waktu mingguan ----------
  R.FASE = { F0: 'Diagnosis', F1: 'Fondasi', F2: 'Pendalaman', F3: 'Konsolidasi', F4: 'Simulasi komprehensif', F5: 'Minggu Tenang' };
  // jangkar rencana; dibuat ulang otomatis bila tanggal ujian atau tingkat berubah
  R.dasar = function () {
    const s = UKP.store.get(); const p = s.profil; const t = U.hariIni();
    if (!p.tanggalUjian) return null;
    let d = s.rencanaDasar;
    if (!d || d.ujian !== p.tanggalUjian || d.tingkat !== p.tingkat || !d.mulai || d.mulai > t) {
      d = { mulai: t, ujian: p.tanggalUjian, tingkat: p.tingkat, dibuat: Date.now(), susunUlang: d && d.susunUlang || 0 };
      s.rencanaDasar = d; UKP.store.save();
    }
    return d;
  };
  // "Susun ulang": topik yang belum dibaca dibagi ulang mulai hari ini sampai H-1
  R.susunUlang = function () {
    const s = UKP.store.get(); const p = s.profil; if (!p.tanggalUjian) return null;
    s.rencanaDasar = { mulai: U.hariIni(), ujian: p.tanggalUjian, tingkat: p.tingkat, dibuat: Date.now(), susunUlang: ((s.rencanaDasar && s.rencanaDasar.susunUlang) || 0) + 1 };
    UKP.store.save(); return s.rencanaDasar;
  };
  R.tandai = function (id, selesai) { const s = UKP.store.get(); if (selesai) s.tugasRencana[id] = true; else delete s.tugasRencana[id]; UKP.store.save(); };
  const URUT_JENIS = { logistik: 0, simulasi40: 1, komprehensif: 1, topik: 2, kartu: 3 };
  // minggu: [{ no, mulai, akhir, fase, faseSemua, menit, menitRencana, kini, lewat, selesai, tugas: [{ id, jenis, ref, teks, kapan, menit, selesai, otomatis }] }]
  R.v1 = function () {
    const s = UKP.store.get(); const p = s.profil; const hari = U.hariIni();
    const out = Object.assign(R.hitung(), { versi: 1, dasar: null, minggu: [], rentangFase: [], total: 0, selesai: 0, jatuhTempo: 0, tertinggal: 0, tertinggalPct: 0, menitRencana: 0 });
    const T = p.tanggalUjian; if (!T || T <= hari) return out;
    const d = R.dasar(); out.dasar = d;
    const D0 = d.mulai <= hari ? d.mulai : hari; const akhirBelajar = U.tambahHari(T, -1);
    if (D0 > akhirBelajar) return out;
    // rentang fase (inklusif): F4 = 3 minggu terakhir sebelum H-7, F5 = H-7 s.d. H-1; sisanya dibagi F0/F1/F2/F3 ≈ 2 hari / 60 / 20 / 15
    const f5 = U.tambahHari(T, -7), f4 = U.tambahHari(T, -21); const rentang = [];
    const tambahR = (id, a, b) => { if (a <= b) rentang.push({ id, nama: R.FASE[id], mulai: a, akhir: b }); };
    const praAkhir = U.tambahHari(f4, -1);
    if (D0 <= praAkhir) {
      const P = U.selisihHari(D0, praAkhir) + 1; const nF0 = P >= 10 ? 2 : P >= 3 ? 1 : 0; const sisa = P - nF0;
      let nF1 = Math.round(sisa * 0.6 / 0.95); let nF2 = Math.round(sisa * 0.2 / 0.95);
      if (sisa >= 1 && nF1 < 1) nF1 = 1; if (nF1 + nF2 > sisa) nF2 = Math.max(0, sisa - nF1);
      const nF3 = Math.max(0, sisa - nF1 - nF2); let c = D0;
      const potong = (id, n) => { if (n <= 0) return; tambahR(id, c, U.tambahHari(c, n - 1)); c = U.tambahHari(c, n); };
      potong('F0', nF0); potong('F1', nF1); potong('F2', nF2); potong('F3', nF3);
    }
    tambahR('F4', D0 > f4 ? D0 : f4, U.tambahHari(f5, -1));
    tambahR('F5', D0 > f5 ? D0 : f5, akhirBelajar);
    out.rentangFase = rentang;
    const faseDari = iso => { const r = rentang.find(x => iso >= x.mulai && iso <= x.akhir); return r ? r.id : null; };
    const tugas = [];
    // topik yang belum dibaca saat rencana disusun → dibagi proporsional (menurut estimasi menit) ke hari F1/F2
    const tsMulai = new Date(D0 + 'T03:00:00').getTime();
    const dibacaSebelum = id => { const v = s.topikDibaca[id]; return !!v && (typeof v !== 'number' || v < tsMulai); };
    const urutan = L.urutanTopik(p.tingkat); const belum = urutan.filter(t => !dibacaSebelum(t.id));
    let rTopik = rentang.filter(x => x.id === 'F1' || x.id === 'F2');
    if (!rTopik.length) rTopik = rentang.filter(x => x.id !== 'F5');
    if (rTopik.length && belum.length) {
      const a = rTopik[0].mulai, b = rTopik[rTopik.length - 1].akhir; const Q = U.selisihHari(a, b) + 1;
      const menit = belum.map(t => Math.max(5, Number(t.estimasiMenit) || 10)); const tot = menit.reduce((x, y) => x + y, 0) || 1; let kum = 0;
      belum.forEach((t, i) => {
        const idx = Math.min(Q - 1, Math.floor(kum / tot * Q)); kum += menit[i];
        tugas.push({ id: 'topik:' + t.id, jenis: 'topik', ref: t.id, teks: 'Baca ' + t.id + ' ' + t.judul + ', lalu cek pemahaman', kapan: U.tambahHari(a, idx), menit: menit[i], otomatis: !!s.topikDibaca[t.id] });
      });
    }
    const hariSim = x => x && x.selesai ? hariDari(x.selesai) : '';
    const simDekat = (cocok, tgl) => s.simulasi.some(x => x && x.selesai && cocok(x) && hariSim(x) >= U.tambahHari(tgl, -6) && hariSim(x) <= U.tambahHari(tgl, 3));
    // simulasi 40 soal tiap Sabtu pada F3, bergiliran per kelompok materi
    const kel = []; for (const t of urutan) if (!kel.includes(t.kode)) kel.push(t.kode);
    const rF3 = rentang.find(x => x.id === 'F3');
    if (rF3 && kel.length) {
      let sabtu = []; for (let x = rF3.mulai; x <= rF3.akhir; x = U.tambahHari(x, 1)) if (hariMinggu(x) === 6) sabtu.push(x);
      if (!sabtu.length) sabtu = [rF3.akhir];
      sabtu.forEach((tgl, j) => { const kode = kel[j % kel.length]; const m = UKP.modul[kode]; const mnt = (m && m.meta.durasiUSKP) || 90;
        tugas.push({ id: 'sim40:' + tgl, jenis: 'simulasi40', ref: kode, teks: 'Simulasi 40 soal ' + kode + ' ' + K.namaKelompok(kode) + ' (' + mnt + ' menit), lalu bahas yang keliru', kapan: tgl, menit: mnt, otomatis: simDekat(x => x.format === 'USKP' && x.kode === kode, tgl) }); });
    }
    // simulasi komprehensif: satu per minggu pada 3 minggu terakhir (Sabtu; minggu terakhir tidak lebih dari H-3)
    const fmtUKP = (((UKP.ref || {}).ujian || {}).format || {}).UKP || {}; const mntUKP = (fmtUKP[p.tingkat] && fmtUKP[p.tingkat].menit) || 180;
    for (let k = 3; k >= 1; k--) {
      const awal = U.tambahHari(T, -7 * k); const batas = k === 1 ? U.tambahHari(T, -3) : U.tambahHari(awal, 6);
      let tgl = null; for (let x = awal; x <= batas; x = U.tambahHari(x, 1)) if (hariMinggu(x) === 6) { tgl = x; break; }
      if (!tgl) tgl = awal; if (tgl < D0) continue;
      tugas.push({ id: 'komp:' + tgl, jenis: 'komprehensif', ref: p.tingkat, teks: 'Simulasi komprehensif UKP ' + p.tingkat + ' (± ' + mntUKP + ' menit, di laptop, sekali duduk)', kapan: tgl, menit: mntUKP, otomatis: simDekat(x => x.format === 'UKP' && x.tingkat === p.tingkat && !x.terbagi, tgl) });
    }
    // tugas logistik yang sudah ada (id lama tetap: laptop, seb, dummy, ruang, tenang, h1)
    for (const x of (out.tugas || [])) { if (!x.kapan || x.kapan >= T) continue; tugas.push({ id: x.id, jenis: 'logistik', ref: null, teks: x.teks, kapan: x.kapan < D0 ? D0 : x.kapan, kapanAsli: x.kapan, menit: 0, otomatis: false }); }
    // minggu kalender (Senin–Minggu), minggu pertama mulai di D0, minggu terakhir berakhir H-1
    const minggu = []; let a = D0; let no = 1;
    while (a <= akhirBelajar && no <= 120) {
      const ahad = U.tambahHari(a, (7 - hariMinggu(a)) % 7); const b = ahad < akhirBelajar ? ahad : akhirBelajar;
      const hitFase = {}; let menit = 0;
      for (let x = a; x <= b; x = U.tambahHari(x, 1)) { const f = faseDari(x); if (f) hitFase[f] = (hitFase[f] || 0) + 1; const wk = hariMinggu(x) === 0 || hariMinggu(x) === 6; menit += wk ? p.menitAkhirPekan : p.menitHariKerja; }
      const faseSemua = rentang.map(r => r.id).filter(f => hitFase[f]);
      const fase = faseSemua.slice().sort((f, g) => hitFase[g] - hitFase[f])[0] || null;
      const senin = seninDari(a); const nHari = U.selisihHari(a, b) + 1;
      // kartu: satu tugas per minggu, selesai otomatis bila kartu dinilai pada ≥ min(5, jumlah hari) hari berbeda
      const hariKartu = new Set(); for (const id in s.kartu) { const st = s.kartu[id]; if (st && st.terakhir) { const dd = hariDari(st.terakhir); if (dd >= a && dd <= b) hariKartu.add(dd); } }
      const targetKartu = Math.min(5, nHari);
      tugas.push({ id: 'kartu:' + senin, jenis: 'kartu', ref: null, teks: fase === 'F5' ? 'Minggu Tenang: kartu jatuh tempo dan Buku Kesalahan setiap hari, tanpa materi baru' : 'Ulang kartu jatuh tempo pada ' + targetKartu + ' hari minggu ini', kapan: b, menit: 0, otomatis: hariKartu.size >= targetKartu });
      minggu.push({ no, mulai: a, akhir: b, fase, faseSemua, menit, kini: a <= hari && hari <= b, lewat: b < hari, tugas: [] });
      a = U.tambahHari(b, 1); no++;
    }
    for (const t of tugas) {
      t.selesai = !!t.otomatis || s.tugasRencana[t.id] === true;
      const w = minggu.find(m => t.kapan >= m.mulai && t.kapan <= m.akhir) || (t.kapan < D0 ? minggu[0] : minggu[minggu.length - 1]);
      if (w) w.tugas.push(t);
    }
    for (const w of minggu) {
      w.tugas.sort((x, y) => x.kapan.localeCompare(y.kapan) || (URUT_JENIS[x.jenis] - URUT_JENIS[y.jenis]));
      w.selesai = w.tugas.filter(t => t.selesai).length; w.menitRencana = w.tugas.reduce((m, t) => m + (t.menit || 0), 0);
    }
    const semua = minggu.flatMap(w => w.tugas);
    out.minggu = minggu; out.total = semua.length; out.selesai = semua.filter(t => t.selesai).length;
    const jatuh = semua.filter(t => t.kapan < hari); out.jatuhTempo = jatuh.length; out.tertinggal = jatuh.filter(t => !t.selesai).length;
    out.tertinggalPct = jatuh.length ? out.tertinggal / jatuh.length : 0;
    out.menitRencana = semua.reduce((m, t) => m + (t.menit || 0), 0);
    out.mingguIni = minggu.find(w => w.kini) || null;
    return out;
  };

  // ---------- laporan mingguan ----------
  function statRentang(a, b) {
    const s = UKP.store.get();
    const ja = s.jawaban.filter(j => { if (kosongSim(j) || j.opsi === '-') return false; const d = hariDari(j.pada); return d >= a && d <= b; });
    const perTopik = {}; ja.forEach(j => { const x = perTopik[j.topik] = perTopik[j.topik] || { n: 0, b: 0 }; x.n++; if (j.benar) x.b++; });
    const hadirHari = Object.keys(s.hadir).filter(d => d >= a && d <= b && s.hadir[d] && s.hadir[d].status === 'HADIR');
    const n = ja.length, benar = ja.filter(j => j.benar).length;
    return { ja, n, benar, akurasi: n ? benar / n : null, perTopik, hadir: hadirHari.length, menit: Math.round(hadirHari.reduce((t, d) => t + (s.hadir[d].menit || 0), 0)),
      sesi: s.sesi.filter(x => x && x.tgl >= a && x.tgl <= b).length,
      sim: s.simulasi.filter(x => x && x.selesai && hariDari(x.selesai) >= a && hariDari(x.selesai) <= b) };
  }
  // opsi.minggu: 'ini' | 'lalu' | null (otomatis: Jumat–Minggu → minggu ini, Senin–Kamis → minggu lalu); opsi.paksa: susun ulang
  // laporan tersimpan sekali per minggu ISO di s.laporan; laporan sementara (minggu belum usai) diperbarui setelah minggunya lewat
  L.laporanMingguan = function (opsi) {
    opsi = opsi || {}; const s = UKP.store.get(); const hari = U.hariIni();
    const senin = seninDari(hari); const urutHari = (hariMinggu(hari) + 6) % 7;   // 0 Senin … 4 Jumat … 6 Minggu
    const ini = opsi.minggu === 'ini' || (opsi.minggu == null && urutHari >= 4);
    const mulai = ini ? senin : U.tambahHari(senin, -7); const akhirPenuh = U.tambahHari(mulai, 6); const akhir = ini ? hari : akhirPenuh;
    const kunci = isoMinggu(mulai); const final = hari > akhirPenuh;
    const idx = s.laporan.findIndex(x => x.minggu === kunci); const ada = idx >= 0 ? s.laporan[idx] : null;
    if (ada && !opsi.paksa && (ada.final || !final)) return ada;
    const pernah = s.jawaban.some(j => hariDari(j.pada) <= akhir) || Object.keys(s.hadir).some(d => d <= akhir && s.hadir[d] && s.hadir[d].status === 'HADIR');
    if (!pernah && !opsi.paksa) return ada || null;
    const st = statRentang(mulai, akhir); const sb = statRentang(U.tambahHari(mulai, -7), U.tambahHari(mulai, -1));
    const judul = id => (K.topik(id) || {}).judul || id;
    // topik naik/turun: akurasi per topik vs minggu sebelumnya (minimal 2 jawaban di kedua minggu)
    const banding = [];
    for (const tid in st.perTopik) {
      const a1 = st.perTopik[tid], a0 = sb.perTopik[tid]; if (!a0 || a1.n < 2 || a0.n < 2) continue;
      const dari = Math.round(a0.b / a0.n * 100), ke = Math.round(a1.b / a1.n * 100); if (dari !== ke) banding.push({ id: tid, judul: judul(tid), dari, ke, delta: ke - dari });
    }
    const topikNaik = banding.filter(x => x.delta > 0).sort((x, y) => y.delta - x.delta).slice(0, 3);
    const topikTurun = banding.filter(x => x.delta < 0).sort((x, y) => x.delta - y.delta).slice(0, 3);
    // kesalahan berulang: pola topik + sebab minggu ini, diutamakan yang muncul ≥ 2 kali atau soal yang keliru berulang
    const salahIni = st.ja.filter(j => !j.benar);
    const salahSoal = {}; for (const j of s.jawaban) if (!j.benar && !kosongSim(j) && j.opsi !== '-' && hariDari(j.pada) <= akhir) salahSoal[j.soal] = (salahSoal[j.soal] || 0) + 1;
    const pola = {}; salahIni.forEach(j => { const k = j.topik + '|' + (j.tag || ''); const x = pola[k] = pola[k] || { topik: j.topik, kode: j.kode, judul: judul(j.topik), tag: j.tag || null, n: 0, soal: [] }; x.n++; if (!x.soal.includes(j.soal)) x.soal.push(j.soal); });
    const kesalahanBerulang = Object.values(pola).map(x => Object.assign(x, { ulang: x.n >= 2 || x.soal.some(id => salahSoal[id] >= 2), soal: x.soal.slice(0, 5) }))
      .sort((x, y) => (y.ulang - x.ulang) || (y.n - x.n)).slice(0, 3);
    const saran = [];
    if (!st.n) saran.push({ teks: 'Belum ada soal terjawab pada rentang ini. Mulai dengan sesi Kilat 5 menit setiap hari.', judul: 'Mulai dengan sesi Kilat 5 menit setiap hari', meta: 'belum ada soal terjawab pada rentang ini', view: 'beranda', label: 'Ke Hari Ini' });
    else if (st.akurasi < 0.6) saran.push({ teks: 'Akurasi di bawah 60%. Ulangi 10 soal dari Buku Kesalahan sebelum menambah materi baru.', judul: 'Ulangi 10 soal dari Buku Kesalahan', meta: 'akurasi di bawah 60%; ulangi sebelum menambah materi baru', view: 'latih', params: { hanyaSalah: true, n: 10, mulai: true }, label: 'Ulangi 10 soal' });
    if (kesalahanBerulang[0]) { const x = kesalahanBerulang[0]; saran.push({ teks: 'Kesalahan terbanyak di ' + x.topik + ' ' + x.judul + ' (' + x.n + '×). Latih 10 soal topik itu.', judul: 'Latih 10 soal ' + x.topik + ' ' + x.judul, meta: 'kesalahan terbanyak minggu ini (' + x.n + '×)', view: 'latih', params: { topik: x.topik, kode: x.kode || x.topik.split('.')[0], n: 10, mulai: true }, label: 'Latih topik ' + x.topik }); }
    if (topikTurun[0]) { const x = topikTurun[0]; saran.push({ teks: 'Akurasi ' + x.id + ' ' + x.judul + ' turun ' + Math.abs(x.delta) + ' poin. Baca ulang ringkasannya.', judul: 'Baca ulang ringkasan ' + x.id + ' ' + x.judul, meta: 'akurasi turun ' + Math.abs(x.delta) + ' poin', view: 'topik', params: { id: x.id }, label: 'Buka topik ' + x.id }); }
    if (st.hadir < 4) saran.push({ teks: 'Hadir ' + st.hadir + ' hari. Targetkan minimal 5 hari per minggu; konsistensi lebih menentukan daripada durasi.', judul: 'Targetkan minimal 5 hari hadir per minggu', meta: 'hadir ' + st.hadir + ' hari; konsistensi lebih menentukan daripada durasi', view: 'rencana', label: 'Lihat rencana' });
    const usang = salahIni.filter(j => j.tag === 'angka-usang').length;
    if (usang >= 2) saran.push({ teks: usang + ' jawaban memakai ketentuan lama. Ulang Dek Perubahan 2025–2026.', judul: 'Ulang Dek Perubahan 2025–2026', meta: usang + ' jawaban memakai ketentuan lama', view: 'ulang', params: { dek: 'perubahan' }, label: 'Buka Dek Perubahan' });
    if (!st.sim.length && st.n >= 20) saran.push({ teks: 'Belum ada simulasi pada minggu tersebut. Jadwalkan simulasi 40 soal satu kelompok pada akhir pekan.', judul: 'Jadwalkan simulasi 40 soal pada akhir pekan', meta: 'belum ada simulasi minggu ini; cukup satu kelompok', view: 'simulasi', params: { format: 'USKP' }, label: 'Ke Simulasi' });
    try { const rv = R.v1(); if (rv.tertinggalPct > 0.2 && rv.jatuhTempo >= 3) saran.push({ teks: 'Rencana tertinggal ' + Math.round(rv.tertinggalPct * 100) + '% dari tugas yang jatuh tempo. Pertimbangkan Susun ulang.', judul: 'Susun ulang rencana', meta: 'tertinggal ' + Math.round(rv.tertinggalPct * 100) + '% dari tugas yang jatuh tempo', view: 'rencana', label: 'Buka Rencana' }); } catch (e) {}
    if (!saran.length) saran.push({ teks: 'Pertahankan ritme: kartu jatuh tempo setiap hari dan satu topik baru per sesi.', judul: 'Pertahankan ritme', meta: 'kartu jatuh tempo setiap hari dan satu topik baru per sesi', view: 'beranda', label: 'Ke Hari Ini' });
    const lap = {
      id: 'LAP-' + kunci, minggu: kunci, mulai, akhir, final, dibuat: Date.now(), dibaca: ada && ada.dibaca ? ada.dibaca : (opsi.paksa ? Date.now() : null), tingkat: s.profil.tingkat,
      n: st.n, benar: st.benar, akurasi: st.akurasi, hadir: st.hadir, menit: st.menit, sesi: st.sesi,
      simulasi: st.sim.map(x => ({ format: x.format, kode: x.kode || null, tingkat: x.tingkat || null, skor: x.skor })),
      sebelum: { n: sb.n, akurasi: sb.akurasi, hadir: sb.hadir },
      deltaAkurasi: st.akurasi != null && sb.akurasi != null ? Math.round((st.akurasi - sb.akurasi) * 100) : null,
      topikNaik, topikTurun, kesalahanBerulang, saran: saran.slice(0, 4),
    };
    if (idx >= 0) s.laporan[idx] = lap; else s.laporan.push(lap);
    s.laporan.sort((x, y) => x.minggu.localeCompare(y.minggu));
    if (s.laporan.length > 52) s.laporan.splice(0, s.laporan.length - 52);
    UKP.store.save();
    return lap;
  };

  // ---------- progres studi kasus ----------
  // data bebas, mis. { aktif, status, petunjukN }; data null menghapus progres kasus itu
  L.ambilKasusProgres = function (id) {
    const s = UKP.store.get(); const p = s.kasusProgres && typeof s.kasusProgres === 'object' ? s.kasusProgres[id] : null;
    return p ? JSON.parse(JSON.stringify(p)) : null;
  };
  L.simpanKasusProgres = function (id, data) {
    const s = UKP.store.get(); if (!s.kasusProgres || typeof s.kasusProgres !== 'object' || Array.isArray(s.kasusProgres)) s.kasusProgres = {};
    if (data == null) delete s.kasusProgres[id];
    else s.kasusProgres[id] = Object.assign(JSON.parse(JSON.stringify(data)), { pada: Date.now() });
    const ids = Object.keys(s.kasusProgres);
    if (ids.length > 40) ids.sort((a, b) => (s.kasusProgres[a].pada || 0) - (s.kasusProgres[b].pada || 0)).slice(0, ids.length - 40).forEach(k => { delete s.kasusProgres[k]; });
    UKP.store.save(); return true;
  };

  // ---------- lencana ----------
  L.cekLencana = function () {
    const s = UKP.store.get(); const baru = [];
    const beri = (id, nama) => { if (!s.lencana[id]) { s.lencana[id] = { nama, pada: Date.now() }; baru.push(nama); } };
    const r = H.rangkaian(); if (r >= 7) beri('hadir7', '7 Hari Hadir'); if (r >= 30) beri('hadir30', '30 Hari Hadir');
    if (s.sesi.length >= 1) beri('sesi1', 'Sesi Pertama'); if (s.sesi.length >= 25) beri('sesi25', '25 Sesi');
    const lulus = s.simulasi.filter(x => x.selesai && x.skor >= 60).length; if (lulus >= 1) beri('lulus1', 'Memenuhi Batas 60'); if (lulus >= 2) beri('lulus2', 'Dua Kali Lulus');
    if (s.simulasi.some(x => x.selesai && x.format === 'UKP' && !x.terbagi && !x.tanpaWaktu)) beri('stamina', 'Stamina Komprehensif');
    if (s.jawaban.length >= 200) beri('soal200', '200 Soal');
    if (baru.length) UKP.store.save();
    return baru;
  };
})(typeof window !== 'undefined' ? window : globalThis);
