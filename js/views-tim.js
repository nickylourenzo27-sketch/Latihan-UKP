/* MABAR UKP — Dasbor tim (#tim, #tim/<id>): hasil latihan dan simulasi anggota tim untuk belajar bersama.
   Sumber data: UKP.tim (js/tim.js) — pantau() koleksi db 'tim' (capability db + user di Artifact claude.ai) — digabung dengan
   daftar manual dari kode hasil yang ditempel (localStorage 'ukp.tim.manual') dan ringkasan yang diterima lewat room (sumber 'langsung',
   localStorage 'ukp.tim.terima' + dok 'tim/anon_<id>'). Di server tim sendiri (deploy/server.js) sumbernya 'server': admin melihat semua
   ringkasan (GET api/tim + aliran SSE), id anggota = nama pengguna server (#tim/<nama>); anggota bukan admin hanya melihat bagian
   "Bagikan hasil Anda" dan langkah meminta peran admin. Tanpa window.claude dan tanpa server (berkas offline, emulator)
   halaman tetap jalan: status "Belum tersambung" + tempel kode hasil. Detail anggota (v7.7): field `jawaban` (≤ 400 entri 30 hari) →
   Ringkasan masalah (kelompok terlemah, pola jebakanOpsi, tren 7 hari), tab Soal salah/Semua jawaban/Simulasi (peta kotak), dialog soal
   mode ulas (UKP.c.soal hanyaBaca), ekspor CSV jawaban. Gaya: css/app.css blok K-24 (.tim-*).
   v8.0: UKP.c.evaluasiBersama(sesi, opsi) — dasbor evaluasi tim satu sesi latihan bersama (peringkat, matriks soal × peserta,
   soal paling banyak salah, topik tim, CSV sesi); dipakai di akhir sesi (js/views-belajar.js) dan di #tim/sesi:<id>. Daftar
   "Sesi terakhir" di bagian lokal membaca s.sesiBersama (UKP.belajar.sesiBersama). Gaya: blok akhir "v8.0 B" (.eval-*). */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util;
  const KUNCI_MANUAL = 'ukp.tim.manual';
  const MENIT = 60000, HARI = 86400000;
  const LANGSUNG_MENIT = 10, FEED_MAKS = 20, BATAS = 60;

  // ---------- sumber data: UKP.tim atau cadangan (js/tim.js belum termuat) ----------
  const cadangan = {
    cadangan: true, aktif: false,
    siap: () => Promise.resolve(null), status: () => 'mati',
    kirimRingkasan: () => Promise.resolve(), pantau: () => () => {},
    kodeHasil: () => '', tempelKode: () => null,
  };
  const T = () => (UKP.tim && typeof UKP.tim === 'object' ? UKP.tim : cadangan);

  // ---------- v8.2 room tim (UKP.ruang) dan peringkat (U1) ----------
  // Peringkat mati sebagai bawaan; sakelar "Tampilkan peringkat" di laptop pemandu menyimpan '1' di localStorage. Tidak dikirim ke room.
  const KUNCI_PERINGKAT = 'ukp.tim.peringkat';
  const peringkatAktif = () => { try { return localStorage.getItem(KUNCI_PERINGKAT) === '1'; } catch (e) { return false; } };
  const aturPeringkat = v => { try { if (v) localStorage.setItem(KUNCI_PERINGKAT, '1'); else localStorage.removeItem(KUNCI_PERINGKAT); } catch (e) {} };
  const ruangR = () => { const r = UKP.ruang; return r && typeof r.info === 'function' ? r : null; };
  const infoRoom = () => { const r = ruangR(); try { return r ? r.info() : null; } catch (e) { return null; } };
  const namaSaya = () => { const i = infoRoom(); if (i && i.nama) return i.nama; try { return String((UKP.store.get().profil || {}).nama || ''); } catch (e) { return ''; } };
  // versi anggota: opsi.anggota (true/false) menang; selain itu rekaman yang diterima dari room di perangkat yang bukan pemandu room
  function versiAnggota(sesi, opsi) {
    if (opsi && typeof opsi.anggota === 'boolean') return opsi.anggota;
    if (!sesi || sesi.sumber !== 'room') return false;
    const i = infoRoom(); return !(i && i.peran === 'tuan');
  }

  function bacaManual() {
    try {
      const v = JSON.parse(localStorage.getItem(KUNCI_MANUAL) || '[]');
      const arr = Array.isArray(v) ? v : v && typeof v === 'object' ? Object.values(v) : [];
      return arr.filter(x => x && typeof x === 'object');
    } catch (e) { return []; }
  }
  function tulisManual(arr) { try { localStorage.setItem(KUNCI_MANUAL, JSON.stringify(arr)); return true; } catch (e) { return false; } }
  const slug = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'anggota';
  const idManual = a => String(a.id || a.uid || ('kode-' + slug(a.nama)));
  // simpan hasil tempel ke daftar manual bila UKP.tim.tempelKode belum menyimpannya (ganti entri lama dengan id sama)
  function pastikanManual(a) {
    const daftar = bacaManual(); const id = idManual(a);
    const i = daftar.findIndex(x => idManual(x) === id);
    if (i >= 0) { if (String(daftar[i].diperbarui || '') >= String(a.diperbarui || '')) return; daftar[i] = a; } else daftar.push(a);
    tulisManual(daftar);
  }
  function hapusManual(id) { tulisManual(bacaManual().filter(x => idManual(x) !== id)); }

  // ---------- normalisasi dan turunan ----------
  const ms = iso => { if (!iso) return null; const t = typeof iso === 'number' ? iso : Date.parse(iso); return isNaN(t) ? null : t; };
  const keP = v => (v == null || v === '' || !isFinite(Number(v))) ? null : Math.round(Number(v) <= 1 ? Number(v) * 100 : Number(v));
  const pKel = x => x && x.n ? Math.round((x.benar || 0) / x.n * 100) : null;
  const namaKel = kode => { try { return UKP.konten.namaKelompok(kode); } catch (e) { return kode; } };
  const judulTopik = id => { try { const t = UKP.konten.topik(id); return t ? t.judul : ''; } catch (e) { return ''; } };
  function normal(a, sumber, uidSaya) {
    a = a || {};
    const lat = a.latihan && typeof a.latihan === 'object' ? a.latihan : {};
    const sim = (Array.isArray(a.simulasi) ? a.simulasi : []).filter(x => x && typeof x === 'object').slice().sort((p, q) => (ms(q.selesai) || 0) - (ms(p.selesai) || 0));
    const id = sumber === 'kode' ? idManual(a) : String(a.id || a.uid || '');
    const terakhirLat = ms(lat.terakhir), terakhirSim = sim.length ? ms(sim[0].selesai) : null;
    const aktivitas = Math.max(terakhirLat || 0, terakhirSim || 0) || null;
    const n = {
      id, sumber, saya: ((sumber === 'akun' || sumber === 'server') && a.saya === true) || (!!uidSaya && (id === uidSaya || a.uid === uidSaya)),
      nama: String(a.nama || '').slice(0, 40) || 'Tanpa nama', tingkat: /^[ABC]$/.test(a.tingkat) ? a.tingkat : null,
      diperbarui: ms(a.diperbarui), aktivitas,
      total: Number(lat.total) || 0, benar: Number(lat.benar) || 0,
      akurasi7: keP(lat.akurasi7), sesi7: Number(lat.sesi7) || 0,
      // dok lama tanpa soal7/hari7: soal7 tidak diketahui (null), hari7 jatuh ke sesi harian
      soal7: lat.soal7 == null || !isFinite(Number(lat.soal7)) ? null : Number(lat.soal7), hari7: lat.hari7 == null || !isFinite(Number(lat.hari7)) ? null : Number(lat.hari7),
      perKelompok: lat.perKelompok && typeof lat.perKelompok === 'object' ? lat.perKelompok : {},
      topikLemah: (Array.isArray(lat.perTopikLemah) ? lat.perTopikLemah : []).map(x => x && !x.id && x.topik ? Object.assign({}, x, { id: String(x.topik) }) : x).filter(x => x && x.id),
      simulasi: sim, simTerakhir: sim[0] || null,
      hadir14: a.hadir && Number(a.hadir.hari14) || 0, rangkaian: a.hadir && Number(a.hadir.rangkaian) || 0,
      jawaban: normalJawaban(a.jawaban),
    };
    // berlatih 7 hari: sesi harian, soal dari Latih soal (soal7), atau akurasi 7 hari (dok lama tanpa soal7)
    n.latih7 = n.sesi7 > 0 || (n.soal7 || 0) > 0 || (n.hari7 || 0) > 0 || n.akurasi7 != null;
    n.aktif7 = !!(aktivitas && Date.now() - aktivitas < 7 * HARI && (n.latih7 || (terakhirSim && Date.now() - terakhirSim < 7 * HARI)));
    n.langsung = !!(aktivitas && Date.now() - aktivitas < LANGSUNG_MENIT * MENIT);
    n.fokus = fokusAnggota(n);
    return n;
  }
  // kelompok terlemah: latihan 14 hari (≥ 5 soal) lalu simulasi terakhir (≥ 3 soal)
  function fokusAnggota(n) {
    const kandidat = sumber => Object.keys(sumber || {}).map(k => ({ kode: k, n: Number(sumber[k] && sumber[k].n) || 0, p: pKel(sumber[k]) })).filter(x => x.p != null);
    let c = kandidat(n.perKelompok).filter(x => x.n >= 5);
    if (!c.length && n.simTerakhir) c = kandidat(n.simTerakhir.perKelompok).filter(x => x.n >= 3);
    c.sort((p, q) => p.p - q.p || q.n - p.n);
    return c.length && c[0].p < 80 ? c[0] : null;
  }
  const lulusSim = x => x && (typeof x.lulus === 'boolean' ? x.lulus : Number(x.skor) >= BATAS);

  // ---------- format waktu ----------
  const z2 = n => String(n).padStart(2, '0');
  const jam = t => { const d = new Date(t); return z2(d.getHours()) + '.' + z2(d.getMinutes()); };
  const tgl = t => { if (!t) return '–'; const d = new Date(t); return z2(d.getDate()) + '/' + z2(d.getMonth() + 1) + '/' + d.getFullYear(); };
  function relatif(t) {
    if (!t) return 'belum ada kegiatan';
    const d = Date.now() - t;
    if (d < 2 * MENIT) return 'baru saja';
    if (d < 60 * MENIT) return Math.floor(d / MENIT) + ' mnt lalu';
    if (d < 24 * 60 * MENIT && U.hariDari(t) === U.hariIni()) return Math.floor(d / (60 * MENIT)) + ' jam lalu';
    const hari = U.selisihHari(U.hariDari(t), U.hariIni());
    if (hari <= 1) return 'kemarin';
    if (hari < 7) return hari + ' hari lalu';
    return tgl(t);
  }

  // ---------- keadaan modul (bertahan selama halaman dibuka; tanpa penyimpanan) ----------
  const st = {
    koneksi: 'memuat', peran: 'memuat', uid: null, user: null, db: [], diterimaPada: null, profil: {},
    feed: [], sebelum: null, berhenti: null, pendengar: new Set(),
    mode: 'ringkasan', urut: 'lemah',
  };
  try { const u = sessionStorage.getItem('ukp.tim.urut'); if (u === 'baru' || u === 'nama' || u === 'lemah') st.urut = u; } catch (e) {}
  const kabari = () => st.pendengar.forEach(f => { try { f(); } catch (e) { console.error(e); } });
  let mulaiP = null;
  function mulai() {
    if (mulaiP) return mulaiP;
    const tim = T();
    // UKP.tim belum ada (agen lain / urutan muat): coba lagi pada kunjungan berikutnya
    if (tim.cadangan) { st.koneksi = 'mati'; st.peran = 'lokal'; return Promise.resolve(null); }
    const batas = new Promise(r => setTimeout(() => r(null), 11000));
    mulaiP = Promise.race([Promise.resolve().then(() => tim.siap()).catch(() => null), batas]).then(async ctx => {
      const sx = safeStatus(tim);
      st.koneksi = ctx ? 'tersambung' : (sx === 'tanpa-akun' || sx === 'langsung' || sx === 'server-tak-terjangkau' ? sx : 'mati');
      // peran: pemimpin (pemilik artifact) membaca koleksi; anggota tersambung/belum masuk hanya melihat bagian "Bagikan hasil Anda";
      // tanpa penyimpanan tim sama sekali (berkas offline, emulator) dasbor berisi kode hasil yang ditempel di perangkat ini
      let ketua = false;
      if (ctx && typeof tim.pemimpin === 'function') { try { ketua = !!(await tim.pemimpin()); } catch (e) { ketua = false; } }
      // server tim yang belum menjawab (tidak terjangkau, sesi berakhir): bukan dasbor kode-hasil lokal, melainkan status server
      st.peran = ketua ? 'pemimpin' : !ctx && infoTim().modeServer ? 'server' : st.koneksi === 'mati' ? 'lokal' : 'anggota';
      if (ctx) {
        st.uid = ctx.uid || null; st.user = ctx.user || null;
        if (ketua) {
          try { st.berhenti = tim.pantau(terimaDaftar); } catch (e) { console.error(e); }
          // feed Langsung: ringkasan baru dari room (presence/emit tamu) masuk sebagai kegiatan
          if (typeof tim.dengarLangsung === 'function' && !st.lepasLangsung) st.lepasLangsung = tim.dengarLangsung(terimaLangsung);
        }
      }
      kabari(); return ctx;
    });
    return mulaiP;
  }
  // perubahan status/daftar manual dari js/tim.js (event 'ukp:tim'): sambungan dicabut → 'mati'; kode ditempel di tab ini → gambar ulang
  if (root.document && typeof root.document.addEventListener === 'function') root.document.addEventListener('ukp:tim', e => {
    const d = (e && e.detail) || {}; const s = d.status;
    // server tim tersambung belakangan (deteksi ulang berhasil): mulai ulang agar peran admin dan pantauan dibaca dari server
    if (d.server && s === 'tersambung' && st.koneksi !== 'memuat' && st.koneksi !== 'tersambung') {
      mulaiP = null; st.koneksi = 'memuat'; st.peran = 'memuat';
      if (st.pendengar.size) { kabari(); mulai().then(kabari); }
      return;
    }
    if (st.koneksi !== 'memuat' && (s === 'mati' || s === 'tanpa-akun') && st.koneksi === 'tersambung') { st.koneksi = s; if (d.modeServer && st.peran !== 'pemimpin') st.peran = 'server'; }
    if (s === 'server-tak-terjangkau' && st.koneksi !== 'memuat' && st.koneksi !== 'tersambung') { st.koneksi = s; if (st.peran !== 'pemimpin') st.peran = 'server'; }
    // tamu tersambung room belakangan: bukan lagi 'lokal' — tidak ada data tim yang ditampilkan kepadanya
    if (s === 'langsung' && st.koneksi !== 'memuat' && st.koneksi !== 'tersambung') { st.koneksi = 'langsung'; if (st.peran === 'lokal') st.peran = 'anggota'; }
    if (st.pendengar.size) kabari();
  });
  function safeStatus(tim) { try { return tim.status(); } catch (e) { return 'mati'; } }
  function terimaDaftar(daftar) {
    const arr = (Array.isArray(daftar) ? daftar : []).filter(x => x && typeof x === 'object');
    st.db = arr; st.diterimaPada = Date.now();
    catatPerubahan(arr);
    perbaruiProfil(arr);
    kabari();
  }
  // nama cadangan dari user.profiles() bila dok tidak membawa nama (nama dari profil aplikasi tetap diutamakan)
  function perbaruiProfil(arr) {
    const u = st.user; if (!u || typeof u.profiles !== 'function') return;
    const ids = arr.filter(a => !a.nama).map(a => String(a.id || a.uid || '')).filter(Boolean);
    if (!ids.length) return;
    Promise.resolve(u.profiles(ids)).then(p => { let ada = false; ids.forEach(id => { const nm = p && p[id] && p[id].name; if (nm && st.profil[id] !== nm) { st.profil[id] = nm; ada = true; } }); if (ada) kabari(); }).catch(() => {});
  }
  // feed belajar bersama: selisih antar-snapshot (snapshot pertama hanya menjadi acuan)
  // kegiatan dari selisih dua ringkasan satu anggota (lama null = baru bergabung)
  function selisih(a, lama, id, sapaBaru) {
    const nm = String(a.nama || st.profil[id] || 'Anggota').slice(0, 40); const out = [];
    if (!lama) {
      out.push({ teks: nm + ' ' + sapaBaru, id });
      // anggota baru yang kiriman pertamanya sudah memuat simulasi yang baru selesai (debounce menggabungkan keduanya)
      (a.simulasi || []).filter(x => x && ms(x.selesai) && Date.now() - ms(x.selesai) < LANGSUNG_MENIT * MENIT)
        .forEach(x => out.push({ teks: nm + ' menyelesaikan simulasi ' + (x.tingkat || '') + ' · ' + Math.round(Number(x.skor) || 0), id, nada: lulusSim(x) ? null : 'attn' }));
      return out;
    }
    const idLama = new Set((lama.simulasi || []).map(x => x && x.id));
    (a.simulasi || []).filter(x => x && !idLama.has(x.id)).forEach(x => out.push({ teks: nm + ' menyelesaikan simulasi ' + (x.tingkat || '') + ' · ' + Math.round(Number(x.skor) || 0), id, nada: lulusSim(x) ? null : 'attn' }));
    const lt = a.latihan || {}, ll = lama.latihan || {};
    const dn = (Number(lt.total) || 0) - (Number(ll.total) || 0), db = (Number(lt.benar) || 0) - (Number(ll.benar) || 0);
    if (dn > 0) out.push({ teks: nm + ' menyelesaikan latihan · ' + dn + ' soal, ' + Math.max(0, db) + ' benar', id });
    return out;
  }
  function tambahFeed(baru) {
    if (!baru.length) return;
    const t = Date.now();
    baru.reverse().forEach(x => { x.t = t; st.feed.unshift(x); });
    if (st.feed.length > FEED_MAKS) st.feed.length = FEED_MAKS;
  }
  // feed belajar bersama: selisih antar-snapshot (snapshot pertama hanya menjadi acuan). Dok anon_ (ditulis pemimpin dari room)
  // dilewati: kegiatannya sudah masuk lewat terimaLangsung saat event room diterima
  function catatPerubahan(arr) {
    const kini = new Map(arr.map(a => [String(a.id || a.uid || ''), a]));
    if (st.sebelum) {
      const baru = [];
      // ringkasan dari server: kegiatannya masuk lewat dengarLangsung (aliran SSE atau polling di js/tim.js)
      kini.forEach((a, id) => { if (/^(anon|room)_/.test(id) || a.sumber === 'server') return; baru.push(...selisih(a, st.sebelum.get(id), id, 'mulai membagikan hasil')); });
      tambahFeed(baru);
    }
    st.sebelum = kini;
  }
  function terimaLangsung(ev) {
    if (ev && ev.dihapus) { kabari(); return; }
    const a = ev && ev.anggota; if (!a || !a.id) return;
    tambahFeed(selisih(a, ev.sebelum, String(a.id), a.sumber === 'server' ? 'mulai membagikan hasil' : 'terhubung langsung'));
    kabari();
  }
  const infoTim = () => { try { const t = T(); return typeof t.info === 'function' ? t.info() || {} : {}; } catch (e) { return {}; } };

  // gabungan db (akun + dok anon dari room) + diterima langsung + kode tempel: satu baris per id, yang diperbarui paling baru menang
  // (seri: urutan akun/db, langsung, kode). Anggota langsung yang sedang ada di room ditandai online. Diurutkan sesuai pilihan.
  function anggota() {
    const t = T(); const inf = infoTim(); const online = new Set(Array.isArray(inf.onlineIds) ? inf.onlineIds : []);
    const kand = [];
    st.db.forEach(a => kand.push(normal(Object.assign({}, a, { nama: a.nama || st.profil[String(a.id || a.uid || '')] }), a.sumber === 'room' ? 'langsung' : a.sumber === 'server' ? 'server' : 'akun', st.uid)));
    if (st.peran === 'pemimpin' && typeof t.daftarTerima === 'function') { try { t.daftarTerima().forEach(a => kand.push(normal(a, 'langsung', st.uid))); } catch (e) {} }
    bacaManual().forEach(a => kand.push(normal(a, 'kode', st.uid)));
    const peta = new Map();
    kand.forEach(n => { if (!n.id) return; const ada = peta.get(n.id); if (!ada || (n.diperbarui || 0) > (ada.diperbarui || 0)) peta.set(n.id, n); });
    const out = Array.from(peta.values()); out.forEach(n => { n.online = online.has(n.id); });
    return urutkan(out, st.urut);
  }
  function urutkan(arr, cara) {
    const nama = (p, q) => p.nama.localeCompare(q.nama, 'id');
    const kunciLemah = n => n.akurasi7 == null ? -1 : n.akurasi7;
    return arr.slice().sort(cara === 'nama' ? nama : cara === 'baru' ? (p, q) => (q.aktivitas || 0) - (p.aktivitas || 0) || nama(p, q) : (p, q) => kunciLemah(p) - kunciLemah(q) || nama(p, q));
  }

  // ================= peserta latihan bersama (v7.9): dicatat di perangkat pemimpin, tanpa server =================
  // Sumber: UKP.belajar.pesertaBersama() / dokPeserta(nama) (js/learn.js). Cadangan di bawah mengikuti kontrak yang sama
  // (s.bersama.peserta + s.jawabanBersama [{ p, s, k, t, o, b, d, w (ms), m }]) bila modul belajar belum menyediakannya.
  // id anggota = 'lokal:' + nama (#tim/lokal%3ANama). Data ini tidak pernah dikirim ke server/db dan tidak ikut kode hasil.
  const ID_LOKAL = 'lokal:';
  const ID_SESI = 'sesi:'; // v8.0: #tim/sesi:<id sesi> → evaluasi sesi latihan bersama tersimpan
  const kunciNama = v => String(v == null ? '' : v).trim().toLowerCase();
  const adalahLokal = id => String(id || '').indexOf(ID_LOKAL) === 0;
  function entriBersama(s) {
    return (Array.isArray(s && s.jawabanBersama) ? s.jawabanBersama : []).filter(x => x && typeof x === 'object' && typeof x.p === 'string' && typeof x.s === 'string' && isFinite(Number(x.w)));
  }
  function daftarNamaBersama(s) {
    const b = s && s.bersama && typeof s.bersama === 'object' ? s.bersama : {};
    return (Array.isArray(b.peserta) ? b.peserta : []).filter(x => typeof x === 'string' && x.trim()).map(x => x.trim());
  }
  // murni: ringkasan per peserta (urut: urutan s.bersama.peserta, lalu nama)
  function pesertaDari(s, kini) {
    const urutan = daftarNamaBersama(s); const peta = new Map();
    const pastikan = nm => { const k = kunciNama(nm); if (!k) return null; if (!peta.has(k)) peta.set(k, { nama: nm.trim(), n: 0, benar: 0, n7: 0, benar7: 0, terakhir: null }); return peta.get(k); };
    urutan.forEach(pastikan);
    const batas7 = U.tambahHari(U.hariDari(kini), -6);
    entriBersama(s).forEach(x => {
      const p = pastikan(x.p); if (!p) return; const w = Number(x.w); const b = x.b === 1 || x.b === true;
      p.n++; if (b) p.benar++;
      if (U.hariDari(w) >= batas7 && w <= kini + 60000) { p.n7++; if (b) p.benar7++; }
      if (!p.terakhir || w > p.terakhir) p.terakhir = w;
    });
    const posisi = k => { const i = urutan.findIndex(x => kunciNama(x) === k); return i < 0 ? 1e6 : i; };
    return Array.from(peta.entries()).sort((a, b) => posisi(a[0]) - posisi(b[0]) || a[1].nama.localeCompare(b[1].nama, 'id')).map(e => e[1]);
  }
  // murni: dokumen ringkasan anggota (skema ringkasan tim) untuk satu peserta; null bila nama tidak dikenal
  function dokDari(s, nama, kini) {
    const k = kunciNama(nama); if (!k) return null;
    const semua = entriBersama(s).filter(x => kunciNama(x.p) === k);
    const terdaftar = daftarNamaBersama(s).find(x => kunciNama(x) === k);
    if (!semua.length && !terdaftar) return null;
    const hariIni = U.hariDari(kini), awal7 = U.tambahHari(hariIni, -6), awal14 = U.tambahHari(hariIni, -13);
    let benar = 0, n7 = 0, b7 = 0, terakhir = 0; const perKel = {}, perTop = {}, hari7 = new Set(), hari14 = new Set();
    semua.forEach(x => {
      const w = Number(x.w), b = x.b === 1 || x.b === true, d = U.hariDari(w);
      if (b) benar++; if (w > terakhir) terakhir = w;
      if (d >= awal7 && d <= hariIni) { n7++; if (b) b7++; hari7.add(d); }
      if (d >= awal14 && d <= hariIni) {
        hari14.add(d);
        // v7.9 menyimpan kode kelompok di k; v8.0 memakai k untuk keyakinan dan kd untuk kelompok → kelompok dari soal, kd, atau id
        const soX = cariSoal(x.s); const kel = String((soX && soX.kode) || x.kd || (LABEL_YAKIN[x.k] ? '' : x.k) || String(x.s).split('-')[0] || '');
        if (kel) { const y = perKel[kel] = perKel[kel] || { n: 0, benar: 0 }; y.n++; if (b) y.benar++; }
        if (x.t) { const y = perTop[x.t] = perTop[x.t] || { topik: String(x.t), n: 0, benar: 0 }; y.n++; if (b) y.benar++; }
      }
    });
    const lemah = Object.values(perTop).filter(t => t.n >= 3).sort((a, b) => a.benar / a.n - b.benar / b.n || b.n - a.n || (a.topik < b.topik ? -1 : 1)).slice(0, 5);
    const p = s && s.profil ? s.profil : {};
    return {
      nama: (terdaftar || (semua[semua.length - 1] || {}).p || String(nama)).trim(), tingkat: p.tingkat || null, diperbarui: terakhir || null, versiApp: UKP.versi || '',
      latihan: { total: semua.length, benar, akurasi7: n7 ? Math.round(b7 / n7 * 100) : null, sesi7: hari7.size, terakhir: terakhir || null, perKelompok: perKel, perTopikLemah: lemah },
      simulasi: [], hadir: { hari14: hari14.size, rangkaian: 0 },
      jawaban: semua.slice().sort((a, b) => Number(b.w) - Number(a.w)).slice(0, JAWAB_MAKS).map(x => ({ s: x.s, t: x.t || '', o: /^[A-D]$/.test(x.o) ? x.o : '-', b: x.b === 1 || x.b === true ? 1 : 0, d: Math.round(Number(x.d) || 0), w: Number(x.w), m: x.m === 'ujian' ? 'ujian' : 'latih', k: ykDari(x) })),
      sumber: 'lokal',
    };
  }
  const stateApp = () => { try { return (UKP.store && UKP.store.get()) || {}; } catch (e) { return {}; } };
  function pesertaLokal() {
    const B = UKP.belajar;
    if (B && typeof B.pesertaBersama === 'function') { try { const r = B.pesertaBersama(); if (Array.isArray(r)) return r.filter(x => x && x.nama); } catch (e) { console.error(e); } }
    return pesertaDari(stateApp(), Date.now());
  }
  function dokLokal(nama) {
    const B = UKP.belajar;
    if (B && typeof B.dokPeserta === 'function') { try { return B.dokPeserta(nama) || null; } catch (e) { console.error(e); } }
    return dokDari(stateApp(), nama, Date.now());
  }
  // dokumen → objek anggota ternormalkan (dipakai halaman detail yang sama dengan anggota tersambung)
  function normalLokal(dok, nama) {
    if (!dok) return null;
    // keyakinan per jawaban (v8.0, field k): bila dokumen dari modul belajar belum membawanya, lengkapi dari s.jawabanBersama
    // v8.1: mode ujian tim (entri m: 'ujian') juga dilengkapi dari s.jawabanBersama — sejak v8.1.1 L.dokPeserta sudah membawa m: 'ujian'; pelengkap ini tetap untuk modul belajar versi lama
    if (Array.isArray(dok.jawaban) && dok.jawaban.length) {
      const kn = kunciNama(nama); const peta = new Map(); const kunciW = j => j.s + '|' + Math.round(Number(j.w));
      entriBersama(stateApp()).forEach(x => { if (kunciNama(x.p) !== kn) return; const y = ykDari(x); const uj = x.m === 'ujian'; if (y || uj) peta.set(kunciW(x), { k: y, uj }); });
      if (peta.size) dok = Object.assign({}, dok, { jawaban: dok.jawaban.map(j => { const e = j && peta.get(kunciW(j)); if (!e) return j;
        const t = Object.assign({}, j); if (!LABEL_YAKIN[j.k] && e.k) t.k = e.k; if (e.uj) t.m = 'ujian'; return t; }) });
    }
    const n = normal(Object.assign({}, dok, { id: ID_LOKAL + nama, saya: false }), 'lokal', null);
    n.nama = String(dok.nama || nama).slice(0, 40); n.lokal = true; n.online = false; n.langsung = false;
    // akurasi7 kontrak lokal selalu 0–100 (keP menafsirkan ≤ 1 sebagai pecahan)
    const a7 = dok.latihan && dok.latihan.akurasi7; n.akurasi7 = a7 == null || !isFinite(Number(a7)) ? null : Math.round(Number(a7));
    const batas7 = U.tambahHari(U.hariIni(), -6); const hari = new Set(); let soal7 = 0;
    n.jawaban.forEach(j => { const d = U.hariDari(j.w * 1000); if (d >= batas7) { soal7++; hari.add(d); } });
    n.soal7 = soal7; n.hari7 = hari.size; n.sesi7 = 0;
    n.latih7 = soal7 > 0; n.aktif7 = n.latih7; n.fokus = fokusAnggota(n);
    return n;
  }
  function hapusPesertaLokal(nama) {
    const k = kunciNama(nama); const s = UKP.store && UKP.store.get(); if (!s || !k) return 0;
    const sebelum = Array.isArray(s.jawabanBersama) ? s.jawabanBersama.length : 0;
    s.jawabanBersama = (Array.isArray(s.jawabanBersama) ? s.jawabanBersama : []).filter(x => !(x && kunciNama(x.p) === k));
    UKP.store.save();
    return sebelum - s.jawabanBersama.length;
  }
  const bersamaAktif = () => { const s = stateApp(); return !!(s.bersama && s.bersama.aktif); };

  // bagian "Latihan bersama di perangkat ini" (tampil apa pun status sambungan tim). opsi.ringkas: tanpa ajakan bila kosong
  // v8.1: kartu "Ujian tim berjalan" (views-ujian-tim.js) dan "Sesi bersama belum selesai" (views-belajar.js) di atas bagian lokal
  function kartuBerjalan() {
    const out = [];
    ['kartuUjianTim', 'kartuLanjutBersama'].forEach(nm => {
      const f = UKP.c && UKP.c[nm]; if (typeof f !== 'function') return;
      try { const el = f(); if (el && el.nodeType) out.push(el); } catch (e) { console.error(e); }
    });
    return out.length ? h('div', { class: 'stack-sm eval-berjalan', 'data-k': 'kartu-berjalan' }, out) : null;
  }
  function bagianLokal(opsi) {
    const kartuB = kartuBerjalan(); const sect = bagianLokalInti(opsi);
    let rr = null; try { rr = riwayatRoomNode(); } catch (e) { console.error(e); } // v8.2: sesi room yang belum ada di perangkat ini
    return kartuB || rr ? UKP.frag(kartuB, sect, rr) : sect;
  }
  function bagianLokalInti(opsi) {
    const daftar = pesertaLokal();
    const atur = () => UKP.go('latih', { atur: 1 });
    const sesiNode = daftarSesiNode();
    if (!daftar.length) {
      if (opsi && opsi.ringkas) return sesiNode ? UKP.c.sect({ judul: 'Latihan bersama di perangkat ini', isi: sesiNode }) : null;
      return UKP.c.sect({ judul: 'Latihan bersama di perangkat ini', isi: sesiNode || UKP.c.kosong(bersamaAktif() ? 'Belum ada jawaban peserta' : 'Belum ada latihan bersama',
        bersamaAktif() ? 'Tambahkan nama peserta, lalu catat jawaban tiap orang di bawah soal saat berlatih.' : 'Berlatih bersama di satu layar: catat jawaban tiap peserta di bawah soal, lalu lihat hasil per orang di sini. Data tersimpan di perangkat ini saja.',
        h('button', { type: 'button', class: 'btn btn-sm', 'data-k': 'atur-bersama', onclick: atur }, 'Atur latihan bersama'), { ringkas: true }) });
    }
    const kini = Date.now();
    const kartu = h('ul', { class: 'tim-lokal', 'aria-label': 'Peserta latihan bersama' }, daftar.map(p => {
      const a7 = p.n7 ? Math.round((p.benar7 || 0) / p.n7 * 100) : null;
      return h('li', null, UKP.link([
        h('span', { class: 'tim-kartu-kop' }, h('span', { class: 'tim-nama-teks' }, p.nama), UKP.c.pill('lokal', null, null, { title: 'Dicatat di perangkat ini' })),
        h('span', { class: 'tim-lokal-angka' },
          h('span', null, h('span', { class: 'tim-angka' }, String(p.n || 0)), h('span', { class: 'meta' }, ' soal')),
          h('span', null, h('span', { class: 'tim-angka', 'data-nada': a7 != null && a7 < BATAS ? 'attn' : null }, a7 == null ? '–' : a7 + '%'), h('span', { class: 'meta' }, ' akurasi 7 hari'))),
        h('span', { class: 'meta' }, p.terakhir ? 'Terakhir aktif ' + relatif(Math.min(p.terakhir, kini)) : 'Belum ada jawaban'),
        UKP.icon('chevron-kanan', 'chev', true)], 'tim', { anggota: ID_LOKAL + p.nama }, 'tim-kartu tim-lokal-kartu'));
    }));
    return UKP.c.sect({ judul: 'Latihan bersama di perangkat ini', meta: daftar.length + ' peserta · tidak dikirim ke server',
      aksi: h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'data-k': 'atur-bersama', onclick: atur }, 'Atur peserta'), isi: sesiNode ? h('div', { class: 'stack' }, sesiNode, h('div', { class: 'stack-sm' }, h('h3', { class: 'eval-sesi-judul' }, 'Peserta'), kartu)) : kartu }); // v8.0 QA: evaluasi sesi (tujuan utama pemimpin) di atas kartu peserta
  }

  // ---------- potongan tampilan ----------
  const tile = o => UKP.viz && UKP.viz.statTile ? UKP.viz.statTile(o) : h('div', { class: 'stat' }, h('span', { class: 'label' }, o.label), h('span', { class: 'nilai' }, o.nilai == null ? '–' : String(o.nilai)), o.sub ? h('span', { class: 'tiny muted' }, o.sub) : null);
  const sumberTeks = n => n.sumber === 'lokal' ? 'lokal' : n.sumber === 'kode' ? 'kode' : n.sumber === 'langsung' ? 'langsung' : n.sumber === 'server' ? 'server' : 'akun';
  const sumberJudul = n => n.sumber === 'lokal' ? 'Dicatat di perangkat ini saat latihan bersama' : n.sumber === 'kode' ? 'Dari kode hasil yang ditempel' : n.sumber === 'langsung' ? 'Diterima langsung dari tautan halaman (tanpa akun)' : n.sumber === 'server' ? 'Dikirim dari akun anggota di server tim' : 'Dikirim dari akun Claude anggota';
  const tandaSumber = n => h('span', { class: 'tim-sumber', title: sumberJudul(n) }, sumberTeks(n));
  const tandaOnline = n => n.online ? h('span', { class: 'tim-online' }, UKP.c.titikNada('ok'), 'online') : null;
  function metaStatus() {
    const n = anggota().length;
    if (st.koneksi === 'memuat') return 'Menyambungkan…';
    if (st.koneksi === 'server-tak-terjangkau') return 'Server tim tidak terjangkau · dicoba lagi otomatis';
    const inf = infoTim();
    const siaran = st.peran === 'pemimpin' && inf.room === 'pemimpin' ? ' · Siaran langsung aktif · ' + (inf.online || 0) + ' online' : '';
    if (st.koneksi === 'tersambung' && inf.server) return 'Tersambung ke server · ' + (inf.online || 0) + ' online · ' + n + ' anggota' + (inf.aliran === 'polling' ? ' · diperbarui tiap 20 detik' : '') + (st.diterimaPada ? ' · diperbarui ' + jam(st.diterimaPada) : '');
    if (st.koneksi === 'tersambung') return 'Tersambung · ' + n + ' anggota' + siaran + (st.diterimaPada ? ' · diperbarui ' + jam(st.diterimaPada) : '');
    if (diWebsite()) return n ? n + ' anggota dari kode hasil' : 'Website tanpa server · hasil anggota masuk lewat kode';
    return 'Belum tersambung' + (n ? ' · ' + n + ' anggota dari kode hasil' : '');
  }
  function namaSel(n, view) {
    const isi = [h('span', { class: 'tim-nama-teks' }, n.nama), n.saya ? h('span', { class: 'meta' }, ' (Anda)') : null, n.online ? ' ' : null, tandaOnline(n)];
    return view ? UKP.link(isi, 'tim', { anggota: n.id }, 'tim-nama') : h('span', { class: 'tim-nama' }, isi);
  }
  function latihanSel(n, nadaLemah) {
    if (!n.latih7) return h('span', { class: 'meta' }, 'Belum latihan 7 hari');
    return h('span', { class: 'tim-latihan' },
      volumeLatihan(n) ? h('span', { class: 'meta' }, volumeLatihan(n)) : null,
      n.akurasi7 == null ? null : UKP.c.barMini(n.akurasi7, { label: 'Akurasi 7 hari ' + n.akurasi7 + ' dari 100, batas aman 60' }),
      n.akurasi7 == null ? null : h('span', { class: 'tim-angka', 'data-nada': nadaLemah && n.akurasi7 < BATAS ? 'attn' : null }, n.akurasi7 + '%'));
  }
  // "12 soal · 3 hari" (Latih soal dan sesi harian); dok lama tanpa soal7 tetap memakai "N sesi"
  function volumeLatihan(n) {
    const hari = n.hari7 != null ? n.hari7 : n.sesi7;
    if (n.soal7 != null) return n.soal7 + ' soal' + (hari ? ' · ' + hari + ' hari' : '');
    return n.sesi7 ? n.sesi7 + ' sesi' : '';
  }
  function simSel(n) {
    const x = n.simTerakhir; if (!x) return h('span', { class: 'meta' }, 'Belum simulasi');
    const lulus = lulusSim(x);
    return h('span', { class: 'tim-sim' }, h('span', { class: 'tim-angka' }, String(Math.round(Number(x.skor) || 0))),
      h('span', { class: 'meta' }, (lulus ? 'Memenuhi batas 60' : 'Belum lulus') + ' · ' + (x.tingkat ? 'Tingkat ' + x.tingkat + ' · ' : '') + tgl(ms(x.selesai))));
  }

  function bagianRingkas(daftar) {
    const n = daftar.length;
    const aktif = daftar.filter(a => a.aktif7).length;
    const ak = daftar.filter(a => a.akurasi7 != null);
    const rata = ak.length ? Math.round(ak.reduce((s, a) => s + a.akurasi7, 0) / ak.length) : null;
    const sims = [].concat(...daftar.map(a => a.simulasi));
    const lulus = sims.filter(lulusSim).length;
    const belum = daftar.filter(a => !a.latih7);
    return h('div', { class: 'pita-stat tim-pita' },
      tile({ label: 'Aktif 7 hari', nilai: aktif + ' dari ' + n, sub: 'latihan atau simulasi' }),
      tile({ label: 'Rata-rata akurasi 7 hari', nilai: rata == null ? null : rata + '%', sub: ak.length ? 'dari ' + ak.length + ' anggota' : 'belum ada latihan' }),
      tile({ label: 'Simulasi memenuhi batas 60', nilai: lulus + ' dari ' + sims.length, sub: sims.length ? 'maks. 10 terakhir per anggota' : 'belum ada simulasi' }),
      tile({ label: 'Belum latihan 7 hari', nilai: String(belum.length), sub: belum.length ? belum.slice(0, 3).map(a => a.nama).join(', ') + (belum.length > 3 ? ' +' + (belum.length - 3) : '') : 'semua anggota berlatih' }));
  }

  function tabelAnggota(daftar) {
    // nada merah hanya untuk pengecualian (§3.3): bila mayoritas di bawah 60, statusnya ditulis sekali sebagai kalimat
    const ak = daftar.filter(a => a.akurasi7 != null); const lemah = ak.filter(a => a.akurasi7 < BATAS).length;
    const nadaLemah = ak.length > 0 && lemah / ak.length < 0.5;
    const status = ak.length >= 2 && !nadaLemah ? UKP.c.ringkasStatus(lemah + ' dari ' + ak.length + ' anggota yang berlatih minggu ini masih di bawah akurasi 60%. Buka nama anggota untuk melihat kelompok yang perlu difokuskan.') : null;
    const baris = daftar.map(n => h('tr', { 'data-langsung': st.mode === 'langsung' && n.langsung ? '' : null, 'data-k': 'tr-' + n.id },
      h('th', { scope: 'row' }, h('span', { class: 'tim-sel-nama' }, st.mode === 'langsung' && n.langsung ? UKP.c.titikNada('ok', 'Aktif dalam 10 menit terakhir') : null, namaSel(n, true)),
        h('span', { class: 'meta blok' }, (n.tingkat ? 'Tingkat ' + n.tingkat : 'Tingkat –') + ' · ', tandaSumber(n))),
      h('td', null, latihanSel(n, nadaLemah)),
      h('td', null, simSel(n)),
      h('td', { class: 'tim-kolom-waktu' }, h('span', { class: 'meta', title: n.aktivitas ? tgl(n.aktivitas) + ' ' + jam(n.aktivitas) : null }, relatif(n.aktivitas)))));
    const tabel = h('table', { class: 'tabel tim-tabel' }, h('caption', { class: 'visually-hidden' }, 'Hasil anggota tim'),
      h('thead', null, h('tr', null, ['Anggota', 'Latihan 7 hari', 'Simulasi terakhir', 'Terakhir aktif'].map(t => h('th', { scope: 'col' }, t)))), h('tbody', null, baris));
    const kartu = h('ul', { class: 'tim-daftar', 'aria-label': 'Hasil anggota tim' }, daftar.map(n => h('li', { 'data-langsung': st.mode === 'langsung' && n.langsung ? '' : null },
      UKP.link([
        h('span', { class: 'tim-kartu-kop' }, st.mode === 'langsung' && n.langsung ? UKP.c.titikNada('ok', 'Aktif dalam 10 menit terakhir') : null,
          h('span', { class: 'tim-nama-teks' }, n.nama), n.saya ? h('span', { class: 'meta' }, '(Anda)') : null, tandaOnline(n),
          h('span', { class: 'meta tim-kartu-waktu' }, relatif(n.aktivitas), ' · ', tandaSumber(n))),
        h('span', { class: 'tim-kartu-baris' }, h('span', { class: 'meta tim-label' }, 'Latihan'), latihanSel(n, nadaLemah)),
        h('span', { class: 'tim-kartu-baris' }, h('span', { class: 'meta tim-label' }, 'Simulasi'), simSel(n)),
        UKP.icon('chevron-kanan', 'chev', true)], 'tim', { anggota: n.id }, 'tim-kartu'))));
    return h('div', { class: 'stack-sm' }, status, h('div', { class: 'tim-tabel-wrap' }, UKP.c.tabelWrap('Hasil anggota tim', tabel)), kartu);
  }

  function panelLangsung(daftar) {
    if (st.koneksi !== 'tersambung') return UKP.c.ringkasStatus('Mode langsung membutuhkan sambungan ke server tim atau akun Claude. Hasil dari kode hasil hanya berubah saat Anda menempel kode baru.');
    const kini = daftar.filter(a => a.langsung);
    const inf = infoTim(); const on = daftar.filter(a => a.online);
    return h('div', { class: 'tim-langsung stack-sm' },
      inf.server ? h('p', { class: 'small' }, UKP.c.titikNada(inf.aliran === 'polling' ? 'info' : 'ok'), (inf.aliran === 'polling' ? ' Tersambung ke server (diperbarui tiap 20 detik)' : ' Tersambung langsung ke server') + ' · ' + (inf.online || 0) + ' online' + (inf.onlineIds && inf.onlineIds.length ? ': ' + inf.onlineIds.join(', ') : '') + '.') : null,
      inf.room === 'pemimpin' ? h('p', { class: 'small' }, UKP.c.titikNada('ok'), ' Siaran langsung aktif · ' + on.length + ' online' + (on.length ? ': ' + on.map(a => a.nama).join(', ') : '') + '.') : null,
      h('p', { class: 'small' }, kini.length ? h('span', null, h('strong', null, kini.length + ' anggota aktif'), ' dalam ' + LANGSUNG_MENIT + ' menit terakhir: ' + kini.map(a => a.nama + (a.saya ? ' (Anda)' : '')).join(', ') + '.') : 'Belum ada anggota yang aktif dalam ' + LANGSUNG_MENIT + ' menit terakhir.'),
      st.feed.length ? h('ol', { class: 'tim-feed', 'aria-label': 'Kegiatan terbaru', 'aria-live': 'polite' }, st.feed.map(x => h('li', null,
        h('span', { class: 'tim-feed-teks', 'data-nada': x.nada || null }, x.teks), h('span', { class: 'meta' }, relatif(x.t)))))
        : h('p', { class: 'meta', 'aria-live': 'polite' }, 'Kegiatan baru muncul di sini saat anggota menyelesaikan latihan atau simulasi selama halaman ini terbuka.'));
  }

  const diWebsite = () => { try { return !window.claude && /^https?:$/.test(location.protocol) && !/(^|\.)claude\.ai$|claudeusercontent\.com$/.test(location.hostname || '') && !(infoTim().server || infoTim().modeServer); } catch (e) { return false; } };
  function langkahSambung() {
    if (infoTim().galat === 'sesi-berakhir') return h('div', { class: 'stack-sm' }, h('p', { class: 'small' }, 'Sesi Anda di server tim berakhir (keluar di perangkat lain, sandi diganti, atau sesi kedaluwarsa). Masuk lagi untuk melihat dasbor.'),
      h('div', { class: 'btn-row' }, h('a', { class: 'btn btn-primary', href: 'masuk' }, 'Masuk lagi')));
    const tanpaAkun = st.koneksi === 'tanpa-akun';
    // v8.1.1 website statis (mis. GitHub Pages; tanpa window.claude dan tanpa server tim): tanpa langkah Artifact yang tidak berlaku di sini
    if (diWebsite()) return h('div', { class: 'stack-sm' },
      h('p', { class: 'small' }, 'Di website ini tidak ada akun atau server: hasil tiap orang tersimpan di perangkatnya sendiri. Kumpulkan hasil tim dengan salah satu cara berikut.'),
      UKP.c.langkahBerikut([
        { judul: 'Ujian tim', meta: 'Pemimpin membagikan tautan ujian; tiap anggota mengerjakan di HP lalu mengirim kode jawaban.', aksi: { teks: 'Buka', view: 'ujiantim' } },
        { judul: 'Latihan bersama di satu layar', meta: 'Jawaban tiap orang dicatat di papan pada perangkat pemimpin.', aksi: { teks: 'Atur', view: 'latih', params: { atur: 1 } } },
        { judul: 'Kode hasil', meta: 'Anggota menyalin kode hasil di halaman ini (Bagikan hasil Anda), pemimpin menempelnya lewat Tempel kode hasil.' },
      ], { label: 'Cara mengumpulkan hasil tim' }));
    return h('div', { class: 'stack-sm' },
      h('p', { class: 'small' }, tanpaAkun ? 'Masuk ke akun Claude agar hasil Anda terkirim dan hasil anggota tim tampil di sini.' : 'Dasbor tim tersambung otomatis saat aplikasi dibuka dari tautan Artifact di Claude. Di tampilan ini, Anda tetap dapat menambahkan hasil anggota lewat kode hasil.'),
      UKP.c.langkahBerikut([
        { judul: 'Buka aplikasi dari tautan Artifact di Claude', meta: 'Pemilik artifact adalah pemimpin tim.' },
        { judul: 'Bagikan tautan: Bagikan → siapa saja yang punya tautan, atau undang sebagai Kontributor', meta: 'Kontributor menulis hasilnya sendiri; anggota lain terhubung langsung selama Anda membuka aplikasi.' },
        { judul: 'Anggota membuka tautan, mengisi nama, dan menyelesaikan satu latihan', meta: 'Ringkasan hasilnya muncul di dasbor ini dalam beberapa detik. Yang tidak masuk ke claude.ai mengirim kode hasil.' },
      ], { label: 'Langkah menyambungkan dasbor tim' }));
  }

  // server tim belum menjawab: tidak terjangkau (dicoba ulang otomatis) atau sesi berakhir
  const TEKS_TAK_TERJANGKAU = 'Server tim tidak terjangkau. Progres tetap tersimpan di perangkat ini dan dikirim otomatis saat tersambung lagi.';
  function statusServer() {
    if (infoTim().galat === 'sesi-berakhir') return langkahSambung();
    return h('div', { class: 'stack-sm' }, h('p', { class: 'small' }, TEKS_TAK_TERJANGKAU),
      h('p', { class: 'small muted' }, 'Aplikasi mencoba lagi secara berkala, saat tab dibuka kembali, dan saat internet tersambung.'));
  }
  // perangkat bersama: progres di perangkat ini milik akun server lain → tidak dikirim sampai pengguna memilih
  function bannerAkun() {
    const tim = T(); const inf = infoTim();
    if (!inf.akunBeda || typeof tim.gantiPemilikProgres !== 'function') return null;
    const lama = inf.akunBeda, baru = inf.akun || '';
    const pulih = typeof tim.adaArsip === 'function' && tim.adaArsip(baru);
    const mulaiBaru = h('button', { type: 'button', class: 'btn btn-sm', 'data-k': 'mulai-baru-akun', onclick: async () => {
      const ya = await UKP.konfirmasi(pulih ? 'Pulihkan progres ' + baru + '?' : 'Mulai progres baru untuk ' + baru + '?',
        'Progres akun ' + lama + ' disimpan sebagai arsip di perangkat ini (tidak dikirim ke mana pun) dan dipulihkan bila ' + lama + ' masuk lagi lalu memilih Pulihkan. ' + (pulih ? 'Progres ' + baru + ' yang tersimpan di perangkat ini dipulihkan.' : 'Progres ' + baru + ' dimulai dari awal.'),
        { ya: pulih ? 'Pulihkan' : 'Mulai baru' });
      if (!ya) return;
      const hasil = tim.gantiPemilikProgres();
      if (!hasil) { UKP.toast('Penyimpanan perangkat penuh, jadi progres ' + lama + ' belum bisa diarsipkan. Ekspor dulu di Pengaturan › Data.', { nada: 'attn', ms: 8000 }); return; }
      if (UKP.terapkanTema) UKP.terapkanTema();
      UKP.toast(hasil === 'pulih' ? 'Progres ' + baru + ' dipulihkan.' : 'Progres baru untuk ' + baru + ' dimulai.', { nada: 'ok', ms: 4000, lintasRute: true });
      UKP.go(hasil === 'pulih' ? 'beranda' : 'mulai', {}, { replace: true });
    } }, pulih ? 'Pulihkan progres ' + baru : 'Mulai baru');
    const keluar = h('button', { type: 'button', class: 'btn btn-sm btn-ghost', 'data-k': 'keluar-akun-beda', onclick: e => { e.currentTarget.disabled = true; if (typeof tim.keluarServer === 'function') tim.keluarServer(); else location.href = 'keluar'; } }, 'Keluar');
    return UKP.c.banner('Progres di perangkat ini milik akun ' + lama + '. Masuk sebagai ' + lama + ', atau ' + (pulih ? 'pulihkan progres ' : 'mulai progres baru untuk ') + baru + '. Sampai Anda memilih, tidak ada hasil yang dikirim ke admin tim.', 'warn', null,
      h('div', { class: 'btn-row' }, mulaiBaru, keluar), { judul: 'Progres milik akun lain' });
  }
  UKP.timBannerAkun = bannerAkun;

  // server tim, akun bukan admin: apa yang terjadi dengan hasilnya dan cara mendapat peran admin
  function langkahServer() {
    const inf = infoTim(); const akun = inf.akun || 'nama-anda';
    return h('div', { class: 'stack-sm' },
      h('p', { class: 'small' }, 'Anda masuk sebagai ', h('strong', null, akun), ' (anggota). Hasil anggota tim hanya dapat dilihat oleh admin tim di server ini.'),
      UKP.c.langkahBerikut([
        { judul: 'Ringkasan Anda terkirim otomatis ke admin tim', meta: 'Setelah setiap latihan atau simulasi selesai. Atur di Pengaturan › Tim.' },
        { judul: 'Bila Anda pemimpin tim, minta pengelola server menjadikan akun Anda admin', meta: 'Pengelola menjalankan "node deploy/kelola-pengguna.js jadikan-admin ' + akun + '", atau menambahkan akhiran ":admin" pada baris akun Anda di PENGGUNA_TIM.' },
        { judul: 'Muat ulang halaman ini setelah peran admin diberikan', meta: 'Dasbor tim lalu menampilkan hasil semua anggota.' },
      ], { label: 'Langkah mendapatkan akses dasbor tim' }));
  }

  // ---------- dialog tempel kode ----------
  function bukaTempel(selesai) {
    const gid = U.id('tim-galat'), tid = U.id('tim-kode');
    const ta = h('textarea', { class: 'input mono', id: tid, rows: 5, spellcheck: 'false', autocomplete: 'off', 'aria-describedby': gid + '-bantu ' + gid, placeholder: 'Tempel kode hasil di sini' });
    const galat = h('p', { class: 'galat small', id: gid, role: 'alert' });
    const dlg = UKP.dialog({ judul: 'Tempel kode hasil', ukuran: 'sm',
      isi: () => h('div', { class: 'stack-sm' }, h('label', { class: 'label', for: tid }, 'Kode hasil anggota'),
        h('p', { class: 'small muted', id: gid + '-bantu' }, 'Anggota menyalin kode dari Dasbor tim › Bagikan hasil Anda. Tempel satu kode per baris untuk menambahkan beberapa anggota sekaligus.'), ta, galat),
      kaki: d => [h('button', { type: 'button', class: 'btn', onclick: () => d.close('batal') }, 'Batal'), h('button', { type: 'button', class: 'btn btn-primary', onclick: kirim }, 'Tambahkan')] });
    setTimeout(() => { try { ta.focus(); } catch (e) {} }, 30);
    ta.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); kirim(); } });
    function kirim() {
      const potong = ta.value.split(/\s+/).map(x => x.trim()).filter(Boolean);
      if (!potong.length) { galat.textContent = 'Tempel kode hasil terlebih dahulu.'; ta.focus(); return; }
      const tim = T(); const ok = [], gagal = [];
      potong.forEach(k => { let a = null; try { a = tim.tempelKode(k); } catch (e) { a = null; } if (a && typeof a === 'object') { pastikanManual(a); ok.push(a); } else gagal.push(k); });
      if (!ok.length) { galat.textContent = tim.cadangan ? 'Kode hasil belum dapat dibaca di tampilan ini. Muat ulang halaman, lalu coba lagi.' : 'Kode tidak dikenali. Pastikan seluruh kode tersalin tanpa terpotong.'; ta.focus(); return; }
      dlg.close('ok');
      UKP.toast(ok.length === 1 ? 'Hasil ' + (ok[0].nama || 'anggota') + ' ditambahkan.' : ok.length + ' hasil anggota ditambahkan.' + (gagal.length ? ' ' + gagal.length + ' kode tidak dikenali.' : ''), { nada: 'ok' });
      if (selesai) selesai();
    }
  }

  // ---------- ekspor CSV ----------
  function csv(daftar) {
    // sel teks berawalan = + - @ tab CR dinetralkan dengan apostrof (cegah injeksi rumus di Excel/Sheets); angka dibiarkan
    const sel = v => { let s = v == null ? '' : String(v); if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[";\n\r\t]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    const kepala = ['Nama', 'Tingkat', 'Sumber', 'Sesi harian 7 hari', 'Soal latihan 7 hari', 'Hari berlatih 7 hari', 'Akurasi 7 hari (%)', 'Soal latihan', 'Benar', 'Fokus kelompok', 'Akurasi fokus (%)', 'Skor simulasi terakhir', 'Status simulasi terakhir', 'Tanggal simulasi terakhir', 'Simulasi memenuhi batas', 'Jumlah simulasi', 'Hari hadir 14 hari', 'Rangkaian hari', 'Terakhir aktif'];
    const rows = daftar.map(n => [n.nama + (n.saya ? ' (Anda)' : ''), n.tingkat || '', sumberTeks(n), n.sesi7, n.soal7 == null ? '' : n.soal7, n.hari7 == null ? '' : n.hari7, n.akurasi7 == null ? '' : n.akurasi7, n.total, n.benar,
      n.fokus ? n.fokus.kode : '', n.fokus ? n.fokus.p : '',
      n.simTerakhir ? Math.round(Number(n.simTerakhir.skor) || 0) : '', n.simTerakhir ? (lulusSim(n.simTerakhir) ? 'Memenuhi batas 60' : 'Belum lulus') : '', n.simTerakhir ? tgl(ms(n.simTerakhir.selesai)) : '',
      n.simulasi.filter(lulusSim).length, n.simulasi.length, n.hadir14, n.rangkaian, n.aktivitas ? tgl(n.aktivitas) + ' ' + jam(n.aktivitas) : '']);
    return '﻿' + [kepala].concat(rows).map(r => r.map(sel).join(';')).join('\r\n') + '\r\n';
  }
  function ekspor() {
    const daftar = anggota(); if (!daftar.length) { UKP.toast('Belum ada data anggota untuk diekspor.'); return; }
    unduhCsv('dasbor-tim-' + U.hariIni() + '.csv', csv(daftar), 'Salin CSV dasbor tim');
  }

  // bagikan hasil sendiri (anggota tanpa akun, atau cadangan) — kode dari UKP.tim.kodeHasil()
  function bagianBagikan() {
    const tim = T(); if (tim.cadangan || typeof tim.kodeHasil !== 'function') return null;
    const tersambung = st.koneksi === 'tersambung';
    const nonaktif = tim.aktif === false;
    const inf = (() => { try { return typeof tim.info === 'function' ? tim.info() || {} : {}; } catch (e) { return {}; } })();
    const ditolak = tersambung && !!(inf.tulisDitolak || inf.galat === 'tidak-diizinkan') && !inf.langsung;
    const langsung = !!inf.langsung && !nonaktif;
    const teksPemimpin = st.peran === 'pemimpin' ? 'dasbor tim' : inf.server ? 'admin tim' : 'pemimpin tim';
    return UKP.c.sect({ judul: 'Bagikan hasil Anda', meta: langsung ? (inf.pemimpinOnline ? 'terhubung langsung' : 'menunggu pemimpin') : tersambung ? (nonaktif ? (inf.hapusTertunda ? 'menunggu penghapusan' : 'tidak dibagikan') : ditolak ? 'hanya melihat' : 'terkirim otomatis') : null, isi: h('div', { class: 'stack-sm' },
      h('p', { class: 'small' }, langsung
        ? (inf.pemimpinOnline ? 'Terhubung langsung ke pemimpin. Ringkasan Anda terkirim otomatis setelah latihan atau simulasi selesai.' : 'Pemimpin belum online. Ringkasan Anda terkirim bila pemimpin membuka dasbor selagi halaman ini masih terbuka. Bila Anda akan menutupnya, salin kode hasil.')
        : tersambung
        ? (nonaktif ? 'Berbagi hasil ke tim sedang Anda matikan di Pengaturan. Ringkasan Anda tidak terkirim.'
          : ditolak ? 'Akses Anda pada halaman ini hanya melihat, jadi ringkasan Anda tidak dapat dikirim. Salin kode hasil lalu kirimkan ke ' + teksPemimpin + ', atau minta akses Kontributor.'
          : 'Ringkasan latihan dan simulasi Anda terkirim otomatis ke ' + teksPemimpin + (inf.server ? ' di server ini' : '') + ' setelah setiap sesi, termasuk jawaban per soal 30 hari terakhir (kode soal, opsi yang dipilih, waktu) agar soal yang keliru dapat dibahas bersama.')
        : (diWebsite() ? 'Salin kode hasil lalu kirimkan ke ' : 'Tanpa akun Claude, salin kode hasil lalu kirimkan ke ') + teksPemimpin + '. Kode berisi ringkasan latihan dan simulasi.'),
      h('div', { class: 'btn-row' },
        UKP.c.salin(() => { try { return tim.kodeHasil() || ''; } catch (e) { return ''; } }, { label: 'Salin kode hasil', kelas: 'btn', judul: 'Salin kode hasil', pesan: 'Kode hasil disalin.' }),
        tersambung && !nonaktif && !ditolak && !langsung ? h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'kirim-sekarang', onclick: e => {
          const b = e.currentTarget; b.disabled = true;
          Promise.resolve().then(() => tim.kirimRingkasan({ segera: true })).then(() => {
            const i = (() => { try { return tim.info() || {}; } catch (er) { return {}; } })();
            if (i.galat || i.tulisDitolak || !i.terakhirKirim) UKP.toast(i.tulisDitolak || i.galat === 'tidak-diizinkan' ? 'Ringkasan tidak terkirim: akses Anda hanya melihat. Kirim kode hasil.' : 'Ringkasan belum terkirim. Coba lagi sebentar.', { nada: 'attn' });
            else UKP.toast('Ringkasan terbaru sudah terkirim.', { nada: 'ok' });
          }, () => UKP.toast('Ringkasan belum terkirim. Coba lagi sebentar.', { nada: 'attn' })).finally(() => { if (b.isConnected) b.disabled = false; });
        } }, 'Kirim ringkasan sekarang') : null)) });
  }

  // ---------- pemulihan fokus saat isi diganti oleh snapshot ----------
  function gantiIsi(wadah, node) {
    const a = document.activeElement; let kunci = null;
    if (a && wadah.contains(a)) kunci = a.getAttribute('data-k') || (a.closest('tr[data-k]') && a.closest('tr[data-k]').getAttribute('data-k')) || null;
    const teks = a && wadah.contains(a) ? (a.textContent || '').trim() : null; const tag = a && a.tagName;
    wadah.replaceChildren(node);
    if (!kunci && !teks) return;
    let el = kunci ? wadah.querySelector('[data-k="' + (root.CSS && CSS.escape ? CSS.escape(kunci) : kunci) + '"]') : null;
    if (el && el.tagName === 'TR') el = el.querySelector('a');
    if (!el && tag) el = Array.from(wadah.querySelectorAll(tag)).find(x => (x.textContent || '').trim() === teks) || null;
    if (el) { try { el.focus({ preventScroll: true }); } catch (e) {} }
  }

  // ================= halaman daftar =================
  function halamanDaftar() {
    const tim = T();
    const meta = h('span', { class: 'meta', role: 'status' }, metaStatus());
    const tombolTempel = h('button', { type: 'button', class: 'btn', onclick: () => bukaTempel(gambar) }, UKP.icon('tambah', null, true), 'Tempel kode hasil');
    const tombolCsv = h('button', { type: 'button', class: 'btn btn-ghost', onclick: ekspor }, UKP.icon('unduh', null, true), 'Ekspor CSV');
    const page = h('div', { class: 'page halaman-tim' },
      UKP.c.kop({ judul: 'Dasbor tim', lead: 'Hasil latihan dan simulasi anggota tim saat belajar bersama. Buka nama anggota untuk melihat jawaban per soal, pola kesalahan, dan peta simulasinya.', meta, aksi: [tombolTempel, tombolCsv] }));
    const isi = h('div', { class: 'stack tim-isi' }); page.appendChild(isi);
    function gambar() {
      // server tim belum menjawab: status jujur, tanpa langkah Artifact dan tanpa tempel kode
      if (st.peran === 'server') {
        meta.textContent = metaStatus(); tombolTempel.hidden = true; tombolCsv.hidden = true;
        const sesi = infoTim().galat === 'sesi-berakhir';
        gantiIsi(isi, UKP.frag(bagianLokal({ ringkas: true }), UKP.c.sect({ judul: sesi ? 'Sesi berakhir' : 'Server tim tidak terjangkau', isi: statusServer() })));
        return;
      }
      const banner = bannerAkun();
      // anggota (bukan pemilik artifact): tidak ada data tim yang dibaca atau ditampilkan; hanya bagian "Bagikan hasil Anda"
      if (st.peran === 'anggota' && infoTim().server) {
        meta.textContent = 'Tersambung ke server · khusus admin tim'; tombolTempel.hidden = true; tombolCsv.hidden = true;
        gantiIsi(isi, UKP.frag(banner, bagianLokal({ ringkas: true }), UKP.c.sect({ judul: 'Khusus admin tim', isi: langkahServer() }), banner ? null : bagianBagikan()));
        return;
      }
      if (st.peran === 'anggota') {
        meta.textContent = 'Khusus pemimpin tim'; tombolTempel.hidden = true; tombolCsv.hidden = true;
        gantiIsi(isi, UKP.frag(UKP.c.ringkasStatus('Hasil anggota tim hanya dapat dilihat oleh pemimpin tim (pemilik halaman ini). Anda tetap dapat membagikan ringkasan hasil Anda di bawah ini.'), bagianLokal({ ringkas: true }), bagianBagikan()));
        return;
      }
      tombolTempel.hidden = false;
      meta.textContent = metaStatus();
      const daftar = anggota();
      tombolCsv.hidden = !daftar.length;
      const tersambung = st.koneksi === 'tersambung';
      // tombol primer tunggal: "Tempel kode hasil" saat belum tersambung dan belum ada anggota
      tombolTempel.className = 'btn' + (!tersambung && !daftar.length && !pesertaLokal().length && st.koneksi !== 'memuat' ? ' btn-primary' : '');
      const bagian = [];
      if (banner) bagian.push(banner);
      // latihan bersama di perangkat ini: selalu di atas, tidak bergantung pada sambungan tim
      const lokal = bagianLokal(); const adaLokal = pesertaLokal().length > 0;
      bagian.push(lokal);
      if (st.koneksi === 'memuat' || (st.koneksi === 'tersambung' && st.peran === 'memuat')) bagian.push(UKP.c.kerangka ? UKP.c.kerangka('stat', 4, 'Memuat dasbor tim') : h('p', { class: 'meta' }, 'Memuat…'));
      else {
        if (!tersambung) bagian.push(daftar.length || adaLokal ? h('details', { class: 'lipat' }, h('summary', null, 'Cara menyambungkan dasbor tim'), langkahSambung()) : UKP.c.sect({ judul: diWebsite() ? 'Mengumpulkan hasil tim' : 'Belum tersambung', isi: langkahSambung() }));
        if (tersambung && tim.aktif === false) bagian.push(UKP.c.ringkasStatus('Berbagi hasil Anda sendiri ke dasbor sedang dimatikan; baris Anda tidak tampil di daftar.', { teks: 'Pengaturan', view: 'pengaturan' }));
        if (!daftar.length) {
          bagian.push(UKP.c.kosong(tersambung ? 'Belum ada anggota yang membagikan hasil' : 'Belum ada hasil anggota',
            tersambung ? (infoTim().server ? 'Anggota muncul di sini setelah masuk ke server tim dan menyelesaikan satu latihan atau simulasi.' : 'Anggota yang Anda undang sebagai Kontributor akan muncul setelah menyelesaikan satu latihan atau simulasi.') : 'Tempel kode hasil dari anggota untuk mulai melihat hasil latihan dan simulasi mereka.', null, adaLokal ? { ringkas: true } : { ikon: 'tim' }));
        } else {
          const seg = UKP.c.segmen({ ariaLabel: 'Mode tampilan', aktif: st.mode, opsi: [{ nilai: 'ringkasan', label: 'Ringkasan' }, { nilai: 'langsung', label: 'Langsung', ariaLabel: 'Langsung: belajar bersama' }], onPilih: v => { st.mode = v; atur(); gambar(); } });
          const urut = h('label', { class: 'tim-urut' }, h('span', { class: 'meta' }, 'Urutkan'),
            h('select', { class: 'input input-sm', 'data-k': 'urut', value: st.urut, onchange: e => { st.urut = e.target.value; try { sessionStorage.setItem('ukp.tim.urut', st.urut); } catch (er) {} gambar(); } },
              h('option', { value: 'lemah' }, 'Terlemah dulu'), h('option', { value: 'baru' }, 'Terbaru aktif'), h('option', { value: 'nama' }, 'Nama')));
          seg.setAttribute('data-k', 'mode');
          bagian.push(h('div', { class: 'tim-alat' }, seg, urut));
          if (st.mode === 'langsung') bagian.push(UKP.c.sect({ judul: 'Belajar bersama', meta: 'tanpa penyimpanan · maks. ' + FEED_MAKS + ' kegiatan', isi: panelLangsung(daftar) }));
          bagian.push(UKP.c.sect({ judul: 'Ringkasan tim', isi: bagianRingkas(daftar) }));
          bagian.push(UKP.c.sect({ judul: 'Anggota', meta: daftar.length + ' orang', isi: tabelAnggota(daftar) }));
          const tanpa = akunTanpaHasil(daftar); if (tanpa) bagian.push(tanpa);
        }
        if (!banner) bagian.push(bagianBagikan());
      }
      gantiIsi(isi, UKP.frag(bagian));
    }
    // jam relatif dan sorotan "aktif < 10 menit" diperbarui tiap 30 detik di mode langsung
    let detak = null;
    function atur() { clearInterval(detak); detak = st.mode === 'langsung' ? setInterval(gambar, 30000) : null; }
    gambar(); atur();
    st.pendengar.add(gambar);
    if (st.koneksi === 'memuat' || (!mulaiP && !T().cadangan)) mulai().then(() => { if (page.isConnected) gambar(); });
    else if (T().cadangan) { st.koneksi = 'mati'; st.peran = 'lokal'; gambar(); }
    // data manual dari tab lain
    const diStorage = e => { if (e.key === KUNCI_MANUAL || e.key === 'ukp.tim.terima' || e.key === 'ukp.v1') gambar(); };
    root.addEventListener('storage', diStorage);
    return { node: page, unmount: () => { st.pendengar.delete(gambar); clearInterval(detak); root.removeEventListener('storage', diStorage); } };
  }

  // server: akun yang belum pernah mengirim ringkasan (dari daftar pengguna server; bukan admin yang sedang melihat)
  function akunTanpaHasil(daftar) {
    const inf = infoTim(); if (!inf.server || !Array.isArray(inf.pengguna) || !inf.pengguna.length) return null;
    const ada = new Set(daftar.map(a => a.id));
    const belum = inf.pengguna.filter(p => !ada.has(p.nama) && p.nama !== inf.akun).map(p => p.nama);
    if (!belum.length) return null;
    return h('p', { class: 'meta', 'data-k': 'tanpa-hasil' }, 'Akun yang belum membagikan hasil (' + belum.length + '): ' + belum.slice(0, 30).join(', ') + (belum.length > 30 ? ', …' : '') + '.');
  }

  // ================= jawaban per soal (field `jawaban` ringkasan, kontrak v7.7) =================
  // entri: { s: id soal, t: topik, o: 'A'–'D' | '-', b: 0|1, d: detik, w: epoch detik, m: 'latihan'|'simulasi'|'sesi'|'cek', sim?, k: keyakinan|null }
  const JAWAB_MAKS = 400, HAL_JAWAB = 30;
  const MODE_JAWAB = { latihan: 'Latihan', simulasi: 'Simulasi', sesi: 'Sesi harian', cek: 'Cek pemahaman', ujian: 'Ujian tim' }; // v8.1: ujian = jawaban ujian tim (s.jawabanBersama m: 'ujian')
  const LABEL_YAKIN = { yakin: 'Yakin', ragu: 'Ragu', menebak: 'Menebak' };
  // label manusiawi untuk nilai jebakanOpsi di modul (docs/SKEMA-KONTEN.md) + nilai yang mungkin dipakai kemudian
  const POLA = {
    'salah-klasifikasi': ['salah klasifikasi', 'Objek, subjek, atau jenis transaksi digolongkan keliru. Latih soal klasifikasi dan bandingkan ciri tiap golongan.'],
    'lupa-pasal': ['lupa pasal', 'Ketentuan atau pengecualian dalam pasal terlewat. Ulang dasar hukum dan kalimat inti topiknya.'],
    'salah-baca': ['salah baca', 'Kata kunci soal (bukan, kecuali, paling lambat) terlewat. Biasakan menggarisbawahi kata kualifikasi.'],
    'salah-hitung': ['salah hitung', 'Dasar pengenaan, tarif, atau pembulatan keliru. Minta jejak hitung tertulis saat membahas.'],
    'angka-usang': ['angka usang', 'Memakai tarif atau batas lama. Ulang dek Perubahan 2025–2026.'],
    'final-nonfinal': ['final vs non-final', 'Perlakuan PPh final dan non-final tertukar. Bahas skema pengenaannya berdampingan.'],
    'salah-kurs': ['salah kurs', 'Kurs yang dipakai keliru (KMK, tanggal, atau arah konversi).'],
    'salah-tarif': ['salah tarif', 'Tarif yang dipakai tidak sesuai objek atau subjeknya.'],
    'lupa-pengecualian': ['lupa pengecualian', 'Pengecualian dari ketentuan umum terlewat.'],
    'salah-subjek': ['salah subjek', 'Subjek pajak atau pihak yang wajib memotong tertukar.'],
    'salah-saat-terutang': ['salah saat terutang', 'Saat terutang, pemotongan, atau penyetoran tertukar.'],
  };
  const labelPola = t => (POLA[t] && POLA[t][0]) || (typeof UKP.tagLabel === 'function' ? UKP.tagLabel(t) : String(t || '').replace(/-/g, ' '));
  const cariSoal = id => { try { return (UKP.konten && UKP.konten.soal(id)) || null; } catch (e) { return null; } };
  const kelDari = j => { const so = cariSoal(j.s); return (so && so.kode) || String(j.t || j.s || '').split(/[.-]/)[0] || '?'; };

  function normalJawaban(arr) {
    const out = [];
    (Array.isArray(arr) ? arr : []).forEach(x => {
      if (!x || typeof x !== 'object' || typeof x.s !== 'string' || !/^[A-Za-z0-9][\w.-]{0,23}$/.test(x.s)) return;
      let w = Number(x.w); if (!isFinite(w) || w <= 0) return; if (w > 1e11) w = Math.round(w / 1000);
      const o = /^[A-D]$/.test(x.o) ? x.o : '-';
      const so = cariSoal(x.s);
      const b = x.b === 1 || x.b === true ? 1 : x.b === 0 || x.b === false ? 0 : (so && o === so.kunci ? 1 : 0);
      out.push({ s: x.s, t: typeof x.t === 'string' && x.t.length <= 16 ? x.t : (so && so.topik) || '', o, b: o === '-' ? 0 : b,
        d: Math.max(0, Math.min(7200, Math.round(Number(x.d) || 0))), w, m: MODE_JAWAB[x.m] ? x.m : 'latihan',
        sim: typeof x.sim === 'string' && x.sim.length <= 60 ? x.sim : null, k: LABEL_YAKIN[x.k] ? x.k : null });
    });
    return out.sort((p, q) => q.w - p.w).slice(0, JAWAB_MAKS);
  }
  const tagJawab = j => { if (j.b || j.o === '-') return null; const so = cariSoal(j.s); return (so && so.jebakanOpsi && so.jebakanOpsi[j.o]) || null; };
  const hasilJawab = j => j.b ? 'benar' : j.o === '-' ? 'kosong' : 'salah';

  // analisis untuk "Ringkasan masalah": kelompok/topik terlemah, pola kesalahan, tren 7 hari, riwayat per hari
  function analisisJawaban(jw) {
    const kel = {}, top = {}, pola = {}, hari = {};
    let salah = 0, kosong = 0, yakinSalah = 0, berKeyakinan = 0;
    jw.forEach(j => {
      const k = kelDari(j); (kel[k] = kel[k] || { kode: k, n: 0, benar: 0 }).n++; if (j.b) kel[k].benar++;
      if (j.t) { (top[j.t] = top[j.t] || { id: j.t, n: 0, benar: 0 }).n++; if (j.b) top[j.t].benar++; }
      const hr = U.hariDari(j.w * 1000); (hari[hr] = hari[hr] || { n: 0, benar: 0 }).n++; if (j.b) hari[hr].benar++;
      if (j.k) berKeyakinan++;
      if (j.b) return;
      if (j.o === '-') { kosong++; return; }
      salah++; if (j.k === 'yakin') yakinSalah++;
      const t = tagJawab(j); if (t) pola[t] = (pola[t] || 0) + 1;
    });
    const p = x => Math.round(x.benar / x.n * 100);
    const urutLemah = (arr, min) => arr.filter(x => x.n >= min).map(x => Object.assign(x, { p: p(x) })).sort((a, b) => a.p - b.p || b.n - a.n);
    const kelArr = Object.values(kel); const topArr = Object.values(top);
    let kelLemah = urutLemah(kelArr, 5); if (!kelLemah.length) kelLemah = urutLemah(kelArr, 1);
    // topik: hanya ambang n ≥ 3 (sama dengan perTopikLemah); topik dengan 1–2 jawaban tidak ditonjolkan
    const topLemah = urutLemah(topArr, 3);
    const polaArr = Object.keys(pola).map(t => ({ tag: t, n: pola[t] })).sort((a, b) => b.n - a.n);
    const kini = U.hariIni(); const tren = [];
    for (let i = 6; i >= 0; i--) { const iso = U.tambahHari(kini, -i); const x = hari[iso] || { n: 0, benar: 0 }; tren.push({ iso, n: x.n, benar: x.benar, p: x.n ? p(x) : null }); }
    let n7 = 0, b7 = 0, nL = 0, bL = 0;
    Object.keys(hari).forEach(iso => { const s = U.selisihHari(iso, kini); if (s >= 0 && s < 7) { n7 += hari[iso].n; b7 += hari[iso].benar; } else if (s >= 7 && s < 14) { nL += hari[iso].n; bL += hari[iso].benar; } });
    return { n: jw.length, benar: jw.filter(j => j.b).length, salah, kosong, yakinSalah, berKeyakinan, kel: kelArr.map(x => Object.assign(x, { p: p(x) })).sort((a, b) => a.kode.localeCompare(b.kode, 'id', { numeric: true })),
      kelLemah, topLemah, pola: polaArr, tren, hari, p7: n7 ? Math.round(b7 / n7 * 100) : null, n7, pLalu: nL ? Math.round(bL / nL * 100) : null, nLalu: nL };
  }
  // simulasi: dikelompokkan per id simulasi, kotak 1..N menurut urutan waktu jawab (w naik)
  function petaSimulasi(jw) {
    const g = new Map();
    jw.filter(j => j.m === 'simulasi').forEach(j => { const id = j.sim || 'sim-' + U.hariDari(j.w * 1000); if (!g.has(id)) g.set(id, []); g.get(id).push(j); });
    return Array.from(g.entries()).map(([id, arr]) => { arr = arr.slice().sort((p, q) => p.w - q.w); return { id, jawaban: arr, akhir: arr[arr.length - 1].w, benar: arr.filter(j => j.b).length, kosong: arr.filter(j => j.o === '-').length }; })
      .sort((p, q) => q.akhir - p.akhir);
  }

  const selCsv = v => { let s = v == null ? '' : String(v); if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[";\n\r\t]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  function csvJawaban(n, jw) {
    const kepala = ['Nama', 'Waktu', 'Soal', 'Kelompok', 'Topik', 'Judul topik', 'Dipilih', 'Kunci', 'Hasil', 'Pola kesalahan', 'Detik', 'Keyakinan', 'Mode', 'Simulasi'];
    const rows = jw.map(j => { const so = cariSoal(j.s); const t = tagJawab(j); const wm = j.w * 1000;
      return [n.nama, tgl(wm) + ' ' + jam(wm), j.s, kelDari(j), j.t, judulTopik(j.t), j.o === '-' ? 'tidak tahu/kosong' : j.o, so ? so.kunci : '', hasilJawab(j), t ? labelPola(t) : '', j.d, j.k ? LABEL_YAKIN[j.k] : '', MODE_JAWAB[j.m], j.sim || '']; });
    return '﻿' + [kepala].concat(rows).map(r => r.map(selCsv).join(';')).join('\r\n') + '\r\n';
  }
  function unduhCsv(nama, isi, judulSalin) {
    if (UKP.downloadsAktif && typeof UKP.simpanBerkas === 'function') { UKP.simpanBerkas(nama, isi); return; }
    try {
      const url = URL.createObjectURL(new Blob([isi], { type: 'text/csv;charset=utf-8' }));
      const a = h('a', { href: url, download: nama, hidden: true }); document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 60000);
      UKP.toast('Unduhan ' + nama + ' dimulai.');
    } catch (e) { UKP.salinTeks(isi.replace(/^﻿/, ''), judulSalin || 'Salin CSV'); }
  }

  // ---------- potongan tampilan jawaban ----------
  const waktuJawab = j => { const wm = j.w * 1000; return U.hariDari(wm) === U.hariIni() ? 'hari ini ' + jam(wm) : tgl(wm) + ' ' + jam(wm); };
  const pillHasil = j => j.b ? UKP.c.pill('Benar', 'ok') : j.o === '-' ? UKP.c.pill('Kosong') : UKP.c.pill('Salah', 'attn');
  const pillYakin = j => j.k ? h('span', { class: 'tim-yakin', 'data-yakin': j.k, 'data-salah': !j.b ? '' : null, title: 'Keyakinan saat menjawab: ' + LABEL_YAKIN[j.k] }, LABEL_YAKIN[j.k]) : null;
  const teksPilih = (j, so) => (j.o === '-' ? 'tidak tahu' : 'pilih ' + j.o) + (so ? ' · kunci ' + so.kunci : '');
  const namaHariPendek = iso => ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][new Date(iso + 'T00:00:00').getDay()];
  function labelHari(iso) {
    const s = U.selisihHari(iso, U.hariIni());
    return s === 0 ? 'Hari ini' : s === 1 ? 'Kemarin' : (typeof U.tglPanjang === 'function' ? U.tglPanjang(iso) : iso);
  }

  function kartuMasalah(a, aksiKel, lokal) {
    const kl = a.kelLemah[0]; const tl = a.topLemah[0];
    const k1 = h('div', { class: 'card tim-masalah-kartu', 'data-k': 'masalah-kelompok' },
      h('span', { class: 'eyebrow' }, 'Kelompok terlemah'),
      kl ? [h('p', { class: 'tim-masalah-judul' }, kl.kode + ' ' + String(namaKel(kl.kode)).replace(/\//g, '/\u200b')),
        h('p', { class: 'tim-masalah-angka' }, h('span', { class: 'tim-angka', 'data-nada': kl.p < BATAS ? 'attn' : null }, kl.p + '%'), h('span', { class: 'meta' }, ' benar dari ' + kl.n + ' soal')),
        kl.n < 5 ? h('p', { class: 'meta' }, 'Data awal: kurang dari 5 jawaban di kelompok ini.') : null,
        tl ? h('p', { class: 'small' }, 'Topik terlemah: ', h('strong', null, tl.id), ' ' + (judulTopik(tl.id) || '') + ' · ' + tl.p + '% dari ' + tl.n + ' soal') : h('p', { class: 'meta' }, 'Topik terlemah: belum cukup data (min. 3 jawaban per topik).'),
        h('button', { type: 'button', class: 'btn btn-text btn-sm', 'data-k': 'lihat-kel', onclick: () => aksiKel(kl.kode) }, 'Lihat soal salah ' + kl.kode)]
        : h('p', { class: 'meta' }, 'Belum cukup jawaban.'));
    const pt = a.pola[0]; const totSalah = a.salah;
    const k2 = h('div', { class: 'card tim-masalah-kartu', 'data-k': 'masalah-pola' },
      h('span', { class: 'eyebrow' }, 'Pola kesalahan teratas'),
      pt ? [h('p', { class: 'tim-masalah-judul' }, labelPola(pt.tag)),
        h('p', { class: 'tim-masalah-angka' }, h('span', { class: 'tim-angka' }, String(pt.n)), h('span', { class: 'meta' }, ' dari ' + totSalah + ' jawaban salah')),
        h('p', { class: 'small' }, (POLA[pt.tag] || [])[1] || ''),
        a.pola.length > 1 ? h('p', { class: 'meta' }, 'Berikutnya: ' + a.pola.slice(1, 3).map(x => labelPola(x.tag) + ' (' + x.n + ')').join(', ')) : null]
        : h('p', { class: 'meta' }, totSalah ? 'Jawaban salah belum bertanda pola.' : 'Belum ada jawaban salah.'),
      a.kosong || a.yakinSalah ? h('p', { class: 'meta' }, [a.kosong ? a.kosong + ' tidak tahu' : null, a.yakinSalah ? a.yakinSalah + ' yakin tetapi salah' : null].filter(Boolean).join(' · ')) : null);
    const maksN = Math.max(1, ...a.tren.map(x => x.n));
    const delta = a.p7 != null && a.pLalu != null ? a.p7 - a.pLalu : null;
    const k3 = h('div', { class: 'card tim-masalah-kartu', 'data-k': 'masalah-tren' },
      h('span', { class: 'eyebrow' }, lokal ? 'Tren 7 hari · latihan bersama' : 'Tren 7 hari · latihan + simulasi'),
      h('p', { class: 'tim-masalah-angka' }, h('span', { class: 'tim-angka', 'data-nada': a.p7 != null && a.p7 < BATAS ? 'attn' : null }, a.p7 == null ? '–' : a.p7 + '%'), h('span', { class: 'meta' }, a.n7 ? ' benar dari ' + a.n7 + ' soal' : ' belum ada jawaban')),
      h('p', { class: 'small' }, delta == null ? (a.nLalu ? '' : 'Belum ada pembanding 7 hari sebelumnya.') : delta === 0 ? 'Sama dengan 7 hari sebelumnya (' + a.pLalu + '%).' : (delta > 0 ? 'Naik ' : 'Turun ') + Math.abs(delta) + ' poin dari 7 hari sebelumnya (' + a.pLalu + '%).'),
      h('ol', { class: 'tim-tren', 'aria-label': 'Jawaban per hari, 7 hari terakhir' }, a.tren.map(x => h('li', { title: namaHariPendek(x.iso) + ' ' + tgl(new Date(x.iso + 'T12:00:00').getTime()) + ': ' + (x.n ? x.n + ' soal, ' + x.p + '% benar' : 'tidak berlatih') },
        h('span', { class: 'tim-tren-batang', 'data-kosong': x.n ? null : '', 'data-nada': x.p != null && x.p < BATAS ? 'attn' : null, style: '--t:' + (x.n ? Math.max(.12, x.n / maksN).toFixed(2) : '0') }),
        h('span', { class: 'tim-tren-hari', 'aria-hidden': 'true' }, namaHariPendek(x.iso).slice(0, 1)),
        h('span', { class: 'visually-hidden' }, namaHariPendek(x.iso) + ': ' + (x.n ? x.n + ' soal, ' + x.p + '% benar' : 'tidak berlatih'))))));
    return h('div', { class: 'tim-masalah' }, k1, k2, k3);
  }

  // dialog soal generik (mode ulas): daftar item, judul(item), isi(item) → node; Sebelumnya/Berikutnya dan panah kiri/kanan.
  // Dipakai detail anggota (bukaSoalJawab) dan evaluasi sesi latihan bersama (bukaSoalSesi).
  function dialogSoal(daftar, awal, judulF, isiF) {
    let idx = Math.max(0, Math.min(daftar.length - 1, awal || 0));
    let dlg = null;
    const posisi = h('span', { class: 'meta tim-dlg-posisi', 'aria-live': 'polite' });
    const sebelum = h('button', { type: 'button', class: 'btn', 'data-k': 'dlg-sebelum', 'aria-label': 'Soal sebelumnya', onclick: () => geser(-1) }, UKP.icon('back', null, true), h('span', { class: 'lbl-panjang' }, 'Sebelumnya'));
    const berikut = h('button', { type: 'button', class: 'btn', 'data-k': 'dlg-berikut', 'aria-label': 'Soal berikutnya', onclick: () => geser(1) }, h('span', { class: 'lbl-panjang' }, 'Berikutnya'), UKP.icon('chevron-kanan', null, true));
    function segarkan() {
      const x = daftar[idx];
      if (dlg) { const jd = dlg.querySelector('.dlg-head h2'); if (jd) jd.textContent = judulF(x); const b = dlg.querySelector('.dlg-body'); if (b) { b.replaceChildren(isiF(x)); b.scrollTop = 0; } }
      posisi.textContent = (idx + 1) + ' dari ' + daftar.length;
      sebelum.disabled = idx === 0; berikut.disabled = idx >= daftar.length - 1;
    }
    function geser(d) { const baru = idx + d; if (baru < 0 || baru >= daftar.length) return; idx = baru; segarkan(); }
    dlg = UKP.dialog({ judul: judulF(daftar[idx]), ukuran: 'lg', kelas: 'tim-dlg', isi: () => isiF(daftar[idx]),
      kaki: daftar.length > 1 ? h('div', { class: 'tim-dlg-nav' }, sebelum, posisi, berikut) : null });
    if (dlg && daftar.length > 1) dlg.addEventListener('keydown', e => { if (e.target.closest && e.target.closest('input, textarea, select')) return; if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); geser(1); } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); geser(-1); } });
    segarkan();
    return dlg;
  }
  // dialog soal lengkap (mode ulas, hanya baca): jawaban anggota ditandai, pembahasan terbuka; Sebelumnya/Berikutnya dalam daftar yang sama
  function bukaSoalJawab(n, daftar, awal) {
    daftar = daftar.filter(j => cariSoal(j.s)); if (!daftar.length) return;
    dialogSoal(daftar, daftar.indexOf(awal), j => 'Soal ' + j.s + ' · ' + n.nama, j => {
      const so = cariSoal(j.s); const t = tagJawab(j);
      const kunciBerubah = j.o !== '-' && !!j.b !== (j.o === so.kunci);
      return h('div', { class: 'stack tim-dlg-soal' },
        h('div', { class: 'tim-dlg-meta' }, pillHasil(j), h('span', { class: 'tim-angka' }, teksPilih(j, so)), t ? h('span', { class: 'meta' }, 'pola: ' + labelPola(t)) : null, pillYakin(j),
          h('span', { class: 'meta' }, [waktuJawab(j), j.d ? j.d + ' dtk' : null, MODE_JAWAB[j.m]].filter(Boolean).join(' · '))),
        kunciBerubah ? h('p', { class: 'small meta' }, 'Kunci soal ini sudah diperbarui sejak dijawab; penilaian di atas mengikuti catatan anggota.') : null,
        UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: j.o, detik: j.d || 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true }));
    });
  }

  function barisJawab(j, buka) {
    const so = cariSoal(j.s); const t = tagJawab(j); const hasil = hasilJawab(j);
    const isi = [
      h('span', { class: 'tim-jawab-hasil' }, pillHasil(j)),
      h('span', { class: 'tim-jawab-soal' }, h('span', { class: 'tim-jawab-kode' }, j.s), h('span', { class: 'tim-jawab-topik' }, (j.t ? j.t + ' ' : '') + (judulTopik(j.t) || (so ? namaKel(so.kode) : '')))),
      h('span', { class: 'tim-jawab-pilih' }, h('span', { class: 'tim-angka' }, teksPilih(j, so)), t ? h('span', { class: 'meta' }, labelPola(t)) : null),
      h('span', { class: 'tim-jawab-ket' }, pillYakin(j), h('span', { class: 'meta tim-jawab-waktu' }, jam(j.w * 1000) + (j.d ? ' · ' + j.d + ' dtk' : '') + (j.m !== 'latihan' ? ' · ' + MODE_JAWAB[j.m] : ''))),
    ];
    const label = j.s + ', ' + hasil + ', ' + teksPilih(j, so) + (t ? ', pola ' + labelPola(t) : '') + (j.k ? ', ' + LABEL_YAKIN[j.k] : '') + ', ' + waktuJawab(j);
    return h('li', { 'data-hasil': hasil }, so ? h('button', { type: 'button', class: 'tim-jawab-baris', 'data-k': 'jawab-' + j.s + '-' + j.w, 'aria-label': label + '. Buka soal', onclick: buka }, isi, h('span', { class: 'chev', 'aria-hidden': 'true' }))
      : h('div', { class: 'tim-jawab-baris', 'data-tak-ada': '', title: 'Soal ini tidak ada di versi aplikasi ini' }, isi));
  }

  // daftar jawaban (terbaru dulu), dikelompokkan per hari dengan ringkasan hari; dipaginasi HAL_JAWAB
  function daftarJawab(n, arr, ui, kunciBatas) {
    if (!arr.length) return UKP.c.kosong(ui.tab === 'salah' ? 'Tidak ada soal salah' : 'Tidak ada jawaban', ui.kel ? 'Tidak ada jawaban di kelompok ' + ui.kel + ' untuk tampilan ini. Pilih "Semua kelompok".' : (ui.tab === 'salah' ? 'Semua jawaban yang dibagikan benar.' : null), null, { ringkas: true });
    const batas = ui[kunciBatas] || HAL_JAWAB; const tampil = arr.slice(0, batas);
    const perHari = new Map(); tampil.forEach(j => { const d = U.hariDari(j.w * 1000); if (!perHari.has(d)) perHari.set(d, []); perHari.get(d).push(j); });
    const semuaHari = {}; arr.forEach(j => { const d = U.hariDari(j.w * 1000); const x = semuaHari[d] = semuaHari[d] || { n: 0, benar: 0 }; x.n++; if (j.b) x.benar++; });
    const wadah = h('div', { class: 'tim-jawab-wadah' });
    perHari.forEach((js, d) => {
      const x = semuaHari[d];
      wadah.append(h('h3', { class: 'tim-jawab-hari' }, h('span', null, labelHari(d)), h('span', { class: 'meta' }, x.n + ' soal' + (ui.tab === 'salah' ? '' : ' · ' + Math.round(x.benar / x.n * 100) + '% benar'))),
        h('ol', { class: 'tim-jawab' }, js.map(j => barisJawab(j, () => bukaSoalJawab(n, arr, j)))));
    });
    if (arr.length > batas) wadah.append(h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'tampil-lagi', onclick: () => { ui[kunciBatas] = batas + HAL_JAWAB; ui.gambar(); } }, 'Tampilkan ' + Math.min(HAL_JAWAB, arr.length - batas) + ' lagi'), h('span', { class: 'meta' }, tampil.length + ' dari ' + arr.length)));
    return wadah;
  }

  function panelSimulasi(n, jw, ui) {
    const sims = petaSimulasi(jw).filter(s => !ui.kel || s.jawaban.some(j => kelDari(j) === ui.kel));
    if (!sims.length) return UKP.c.kosong('Belum ada jawaban simulasi', 'Jawaban simulasi muncul setelah anggota menyelesaikan simulasi dengan versi aplikasi terbaru.', null, { ringkas: true });
    const legenda = h('p', { class: 'tim-peta-legenda meta', 'aria-hidden': 'true' }, h('span', { 'data-hasil': 'benar' }), 'benar', h('span', { 'data-hasil': 'salah' }), 'salah', h('span', { 'data-hasil': 'kosong' }), 'kosong');
    return h('div', { class: 'stack' }, legenda, sims.map(s => {
      const r = n.simulasi.find(x => x.id === s.id) || null;
      const N = s.jawaban.length; const p = Math.round(s.benar / N * 100);
      const skor = r && r.skor != null ? Math.round(Number(r.skor) || 0) : p;
      return h('div', { class: 'card tim-peta-kartu', 'data-k': 'sim-' + s.id },
        h('div', { class: 'card-head' }, h('div', { class: 'stack-sm' }, h('h3', { class: 'card-title' }, 'Simulasi ' + tgl(s.akhir * 1000) + (r && r.tingkat ? ' · Tingkat ' + r.tingkat : '')),
          h('p', { class: 'card-meta' }, s.benar + ' benar · ' + (N - s.benar - s.kosong) + ' salah · ' + s.kosong + ' kosong' + (r && r.jumlah && r.jumlah !== N ? ' · ' + N + ' dari ' + r.jumlah + ' soal tercatat' : ''))),
          UKP.c.pill('Skor ' + skor, skor >= BATAS ? 'ok' : 'attn')),
        h('ol', { class: 'tim-peta', 'aria-label': 'Peta jawaban simulasi ' + tgl(s.akhir * 1000) }, s.jawaban.map((j, i) => {
          const hasil = hasilJawab(j); const so = cariSoal(j.s); const redup = ui.kel && kelDari(j) !== ui.kel;
          const ket = 'No. ' + (i + 1) + ' · ' + j.s + ' · ' + hasil + (j.o !== '-' && so ? ' (pilih ' + j.o + ', kunci ' + so.kunci + ')' : '');
          return h('li', null, h('button', { type: 'button', 'data-hasil': hasil, 'data-redup': redup ? '' : null, title: ket, 'aria-label': ket, disabled: so ? null : true, onclick: () => bukaSoalJawab(n, s.jawaban, j) }, String(i + 1)));
        })));
    }));
  }

  // peserta lokal: jawaban "yakin tetapi salah" 30 hari terakhir (pill di Ringkasan masalah, hanya bila > 0)
  function pillYakinSalah30(n) {
    if (!n.lokal) return null;
    const batas = Date.now() / 1000 - 30 * 86400;
    const x = n.jawaban.filter(j => j.w >= batas && j.k === 'yakin' && !j.b && j.o !== '-').length;
    return x ? UKP.c.pill('yakin tapi salah: ' + x + ' (30 hari)', 'attn', null, { 'data-k': 'pill-yakin-salah', title: 'Menjawab yakin tetapi salah dalam 30 hari terakhir' }) : null;
  }
  function bagianJawaban(n, ui) {
    const jw = n.jawaban;
    if (!jw.length && n.lokal) return [UKP.c.sect({ judul: 'Jawaban per soal', isi: UKP.c.kosong('Belum ada jawaban tercatat', 'Jawaban muncul setelah jawaban peserta ini dicatat di papan latihan bersama.', null, { ringkas: true }) })];
    if (!jw.length) return [UKP.c.sect({ judul: 'Jawaban per soal', isi: UKP.c.kosong('Belum ada jawaban yang dibagikan', 'Jawaban per soal (30 hari terakhir) muncul setelah anggota berlatih atau menyelesaikan simulasi dengan versi aplikasi terbaru dan berbagi hasil aktif.', null, { ringkas: true }) })];
    const a = ui.analisis || analisisJawaban(jw);
    const keKel = kode => { ui.kel = kode; ui.tab = 'salah'; ui.gambar(); setTimeout(() => { const el = document.getElementById('tim-jawab-bagian'); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'start', behavior: UKP.gerakBoleh && UKP.gerakBoleh() ? 'smooth' : 'auto' }); }, 0); };
    const saring = arr => ui.kel ? arr.filter(j => kelDari(j) === ui.kel) : arr;
    const salah = saring(jw.filter(j => !j.b)), semua = saring(jw);
    const nSim = petaSimulasi(jw).length;
    const pilihKel = h('select', { class: 'input', 'aria-label': 'Saring kelompok', 'data-k': 'saring-kel', onchange: e => { ui.kel = e.target.value || null; ui.batasSalah = ui.batasSemua = 0; ui.gambar(); } },
      h('option', { value: '' }, 'Semua kelompok'), a.kel.map(k => h('option', { value: k.kode, selected: ui.kel === k.kode ? true : null }, k.kode + ' · ' + namaKel(k.kode) + ' (' + k.n + ')')));
    const tombolCsv = h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'data-k': 'csv-jawaban', onclick: () => unduhCsv('jawaban-' + slug(n.nama) + '-' + U.hariIni() + '.csv', csvJawaban(n, jw), 'Salin CSV jawaban') }, UKP.icon('unduh', null, true), 'Ekspor CSV');
    const tabs = UKP.c.tabs({ id: 'tim-jawab-tab', label: 'Tampilan jawaban', aktif: ui.tab,
      // peserta lokal tidak punya simulasi: tab Simulasi disembunyikan
      tab: [{ id: 'salah', label: 'Soal salah', hitung: salah.length }, { id: 'semua', label: 'Semua jawaban', labelPendek: 'Semua', hitung: semua.length }, n.lokal && !nSim ? null : { id: 'simulasi', label: 'Simulasi', hitung: nSim }].filter(Boolean),
      isi: id => id === 'simulasi' ? panelSimulasi(n, jw, ui) : daftarJawab(n, id === 'salah' ? salah : semua, ui, id === 'salah' ? 'batasSalah' : 'batasSemua'),
      onGanti: id => { ui.tab = id; } });
    return [
      UKP.c.sect({ judul: 'Ringkasan masalah', meta: n.lokal ? a.n + ' jawaban latihan bersama' : a.n + ' jawaban latihan + simulasi · 30 hari terakhir', aksi: pillYakinSalah30(n), isi: kartuMasalah(a, keKel, n.lokal) }),
      UKP.c.sect({ judul: 'Jawaban per soal', idBagian: 'tim-jawab-bagian', aksi: tombolCsv, isi: h('div', { class: 'stack-sm' },
        h('div', { class: 'tim-jawab-alat' }, h('label', { class: 'tim-urut' }, h('span', { class: 'visually-hidden' }, 'Kelompok'), pilihKel), h('span', { class: 'meta' }, 'Klik baris untuk membuka soal dan pembahasannya.')),
        tabs.el, tabs.elPanel) }),
    ];
  }

  // ================= v8.0 evaluasi tim per sesi latihan bersama =================
  // Sesi (kontrak v8.0, s.sesiBersama, ditulis js/learn.js): { id: 'sb-…', mulai, selesai|null, tingkat, peserta: [nama…], anggaranDetik,
  // soal: [{ id, kode, topik, kunci, detik, jawaban: { nama: { o, k, b } } }], sumber }. Angka dihitung UKP.belajar.evaluasiSesi(sesi)
  // bila ada; evaluasiLokal di bawah adalah cadangan berkeluaran sama (dipakai juga oleh uji). Tanpa DOM, tanpa penyimpanan.
  const SESI_MAKS_DAFTAR = 8;
  const TEKS_YK = { yakin: 'Y', ragu: 'R', menebak: 'N' };
  const ykDari = x => !x ? null : LABEL_YAKIN[x.k] ? x.k : LABEL_YAKIN[x.y] ? x.y : null;
  function normalSesi(x) {
    if (!x || typeof x !== 'object' || typeof x.id !== 'string' || !x.id) return null;
    const peserta = []; const lihat = new Set();
    const tambah = nm => { if (typeof nm !== 'string') return; const t = nm.trim(); const k = t.toLowerCase(); if (!t || lihat.has(k)) return; lihat.add(k); peserta.push(t); };
    (Array.isArray(x.peserta) ? x.peserta : []).forEach(tambah);
    const soal = (Array.isArray(x.soal) ? x.soal : []).filter(q => q && typeof q === 'object' && typeof q.id === 'string').map(q => {
      const so = cariSoal(q.id); const kunci = /^[A-D]$/.test(q.kunci) ? q.kunci : so ? so.kunci : '';
      const jw = q.jawaban && typeof q.jawaban === 'object' ? q.jawaban : {};
      Object.keys(jw).forEach(tambah);
      return { id: q.id, kode: String(q.kode || (so && so.kode) || q.id.split('-')[0]), topik: String(q.topik || (so && so.topik) || ''), kunci, detik: Math.max(0, Math.round(Number(q.detik) || 0)), jawabanMentah: jw };
    });
    soal.forEach(q => {
      const per = {};
      peserta.forEach(nm => {
        const kunciAsli = Object.keys(q.jawabanMentah).find(k => k.trim().toLowerCase() === nm.toLowerCase());
        const v = kunciAsli != null ? q.jawabanMentah[kunciAsli] : null;
        const raw = v && typeof v === 'object' ? v : { o: v };
        const o = /^[A-D]$/.test(String(raw.o || '').toUpperCase()) ? String(raw.o).toUpperCase() : '-';
        const b = o === '-' ? 0 : raw.b === 1 || raw.b === true ? 1 : raw.b === 0 || raw.b === false ? 0 : (q.kunci && o === q.kunci ? 1 : 0);
        per[nm] = { o, k: ykDari(raw), b };
      });
      q.jawaban = per; delete q.jawabanMentah;
    });
    const mulaiT = ms(x.mulai); const selesaiT = ms(x.selesai);
    return { id: x.id, mulai: mulaiT, selesai: selesaiT, tingkat: /^[ABC]$/.test(x.tingkat) ? x.tingkat : null, peserta, anggaranDetik: Number(x.anggaranDetik) || null, soal, sumber: String(x.sumber || 'latih') };
  }
  // murni: ringkasan evaluasi (keluaran sama dengan UKP.belajar.evaluasiSesi)
  function evaluasiLokal(sesiMentah) {
    const sesi = normalSesi(sesiMentah) || { peserta: [], soal: [], mulai: null, selesai: null };
    const nSoal = sesi.soal.length, P = sesi.peserta;
    const menit = sesi.mulai && sesi.selesai ? Math.max(0, Math.round((sesi.selesai - sesi.mulai) / MENIT)) : Math.round(sesi.soal.reduce((a, q) => a + q.detik, 0) / 60);
    const soal = sesi.soal.map(q => {
      let nBenar = 0, nSalah = 0, nKosong = 0;
      P.forEach(nm => { const j = q.jawaban[nm]; if (j.o === '-') nKosong++; else if (j.b) nBenar++; else nSalah++; });
      return { id: q.id, kode: q.kode, topik: q.topik, kunci: q.kunci, nBenar, nSalah, nKosong, perPeserta: q.jawaban };
    });
    const peserta = P.map((nama, urut) => {
      let benar = 0, dijawab = 0, yakinSalah = 0, raguBenar = 0, menebakBenar = 0; const top = {};
      soal.forEach(q => {
        const j = q.perPeserta[nama]; if (j.o !== '-') dijawab++; if (j.b) benar++;
        if (j.k === 'yakin' && !j.b && j.o !== '-') yakinSalah++;
        if (j.k === 'ragu' && j.b) raguBenar++; if (j.k === 'menebak' && j.b) menebakBenar++;
        if (q.topik) { const t = top[q.topik] = top[q.topik] || { topik: q.topik, n: 0, benar: 0 }; t.n++; if (j.b) t.benar++; }
      });
      const topikLemah = Object.values(top).filter(t => t.benar < t.n).sort((a, b) => a.benar / a.n - b.benar / b.n || b.n - a.n || (a.topik < b.topik ? -1 : 1)).slice(0, 3);
      return { nama, urut, benar, dijawab, kosong: nSoal - dijawab, akurasi: nSoal ? Math.round(benar / nSoal * 100) : null, yakinSalah, raguBenar, menebakBenar, topikLemah };
    }).sort((a, b) => b.benar - a.benar || a.urut - b.urut).map(p => { delete p.urut; return p; });
    const tersulit = soal.map((q, i) => ({ q, i })).filter(x => x.q.nSalah + x.q.nKosong >= 1)
      .sort((a, b) => a.q.nBenar - b.q.nBenar || b.q.nSalah - a.q.nSalah || a.i - b.i).slice(0, 5).map(x => x.q);
    const tt = {};
    soal.forEach(q => { if (!q.topik) return; const t = tt[q.topik] = tt[q.topik] || { topik: q.topik, n: 0, benar: 0 }; P.forEach(nm => { t.n++; if (q.perPeserta[nm].b) t.benar++; }); });
    const topikTim = Object.values(tt).filter(t => t.n >= 3 && t.benar < t.n).map(t => Object.assign(t, { akurasi: Math.round(t.benar / t.n * 100) }))
      .sort((a, b) => a.akurasi - b.akurasi || b.n - a.n || (a.topik < b.topik ? -1 : 1)).slice(0, 5);
    return { nSoal, nPeserta: P.length, menit, peserta, soal, tersulit, topikTim };
  }
  function evaluasi(sesi) {
    const B = UKP.belajar;
    if (B && typeof B.evaluasiSesi === 'function') { try { const r = B.evaluasiSesi(sesi); if (r && Array.isArray(r.peserta) && Array.isArray(r.soal)) return r; } catch (e) { console.error(e); } }
    return evaluasiLokal(sesi);
  }
  // daftar sesi tersimpan (terbaru dulu) dan satu sesi; cadangan membaca s.sesiBersama langsung
  function daftarSesi() {
    const B = UKP.belajar; let arr = null;
    if (B && typeof B.sesiBersama === 'function') { try { arr = B.sesiBersama(); } catch (e) { console.error(e); } }
    if (!Array.isArray(arr)) { const s = stateApp(); arr = (Array.isArray(s.sesiBersama) ? s.sesiBersama : []).slice().reverse(); }
    return arr.filter(x => x && typeof x === 'object' && typeof x.id === 'string').sort((a, b) => (ms(b.mulai) || 0) - (ms(a.mulai) || 0));
  }
  function sesiDari(id) {
    const B = UKP.belajar;
    if (B && typeof B.sesiBersamaDari === 'function') { try { const r = B.sesiBersamaDari(id); if (r !== undefined) return r || null; } catch (e) { console.error(e); } }
    return daftarSesi().find(x => x.id === id) || null;
  }
  function hapusSesi(id) {
    const B = UKP.belajar;
    if (B && typeof B.hapusSesiBersama === 'function') { try { B.hapusSesiBersama(id); return; } catch (e) { console.error(e); } }
    const s = UKP.store && UKP.store.get(); if (!s || !Array.isArray(s.sesiBersama)) return;
    s.sesiBersama = s.sesiBersama.filter(x => !(x && x.id === id)); UKP.store.save();
  }
  const teksJawabSel = j => j.o === '-' ? 'kosong' : j.o + (j.k ? ' (' + LABEL_YAKIN[j.k].toLowerCase() + ')' : '');
  // murni: CSV sesi (pemisah ';'): id;kode;topik;kunci;<peserta…> — sel "huruf (keyakinan)" atau "kosong"
  // v8.1 mode ujian: baris skor per orang (skor, lulus, benar, salah, kosong, ragu) di atas baris soal, dalam kolom peserta yang sama
  function csvSesi(sesi, ev) {
    ev = ev || evaluasi(sesi);
    const nama = (normalSesi(sesi) || { peserta: [] }).peserta;
    const rows = ev.soal.map(q => [q.id, q.kode, q.topik, q.kunci].concat(nama.map(nm => { const j = q.perPeserta[nm]; return j ? teksJawabSel(j) : ''; })));
    const skor = ev.mode === 'ujian' && Array.isArray(ev.skor) ? ev.skor : null;
    const atas = [];
    if (skor) {
      const dari = nm => skor.find(x => kunciNama(x.nama) === kunciNama(nm)) || null;
      const baris = (label, f) => [label, '', '', ''].concat(nama.map(nm => { const x = dari(nm); return x ? f(x) : ''; }));
      atas.push(baris('skor', x => angkaKoma(x.skor)), baris('lulus', x => x.lulus ? 'ya' : 'kurang ' + x.kurang + ' soal'),
        baris('benar', x => x.benar), baris('salah', x => x.salah), baris('kosong', x => x.kosong), baris('ragu', x => x.nRagu));
    }
    return '﻿' + [['id', 'kode', 'topik', 'kunci'].concat(nama)].concat(atas, rows).map(r => r.map(selCsv).join(';')).join('\r\n') + '\r\n';
  }
  const angkaKoma = x => String(Math.round((Number(x) || 0) * 10) / 10).replace('.', ',');
  const mmss = d => { d = Math.max(0, Math.round(Number(d) || 0)); return Math.floor(d / 60) + ':' + z2(d % 60); };
  const batasLulus = () => { const b = UKP.belajar && Number(UKP.belajar.BATAS_LULUS); return b > 0 ? b : BATAS; };
  const namaPendek = nm => nm.length > 8 ? nm.slice(0, 7) + '…' : nm;
  const hasilSel = j => j.o === '-' ? 'kosong' : j.b ? 'benar' : 'salah';
  function tanggalSesi(t) {
    if (!t) return 'Tanggal tidak tercatat';
    const iso = U.hariDari(t); const s = U.selisihHari(iso, U.hariIni());
    return (s === 0 ? 'Hari ini' : s === 1 ? 'Kemarin' : (typeof U.tglPanjang === 'function' ? U.tglPanjang(iso) : tgl(t))) + ' · ' + jam(t);
  }
  // mode ujian: menit = waktu ujian yang disepakati (anggaranDetik), bukan lama rekaman; latihan: lama sesi
  function menitSesi(ev, sesi) {
    if (ev.mode === 'ujian' && sesi && Number(sesi.anggaranDetik) > 0) return Math.round(Number(sesi.anggaranDetik) / 60);
    return ev.menit != null && ev.menit !== 0 ? ev.menit : null;
  }
  function metaSesi(ev, sesi) { const m = menitSesi(ev, sesi); return ev.nSoal + ' soal · ' + ev.nPeserta + ' orang' + (m != null ? ' · ' + m + ' menit' : ''); }
  const adalahUjian = ev => ev && ev.mode === 'ujian' && Array.isArray(ev.skor);
  // murni: label jenis dan ringkasan satu sesi untuk daftar "Sesi terakhir"
  function ringkasSesi(sesi, ev) {
    ev = ev || evaluasi(sesi);
    if (adalahUjian(ev)) {
      const sk = ev.skor; const rata = sk.length ? sk.reduce((a, x) => a + x.skor, 0) / sk.length : null;
      return { jenis: 'Ujian tim' + (ev.judul ? ' · ' + ev.judul : ''), ujian: true,
        meta: ev.nSoal + ' soal · ' + ev.nPeserta + ' orang' + (rata != null ? ' · rata-rata skor ' + Math.round(rata) + ' · ' + sk.filter(x => x.lulus).length + ' dari ' + sk.length + ' lulus' : '') };
    }
    const rata = ev.nSoal && ev.nPeserta ? Math.round(ev.peserta.reduce((a, p) => a + p.benar, 0) / (ev.nSoal * ev.nPeserta) * 100) : null;
    return { jenis: 'Latihan' + (ev.judul ? ' · ' + ev.judul : ''), ujian: false, meta: ev.nSoal + ' soal · ' + ev.nPeserta + ' orang' + (rata != null ? ' · rata-rata ' + rata + '% benar' : '') };
  }
  // murni: kalimat tempo (null bila sesi tanpa detik tercatat)
  function kalimatTempo(t) {
    if (!t || !(t.rataDetik > 0)) return null;
    const soalU = Number(t.soalUjian) || 100, menitU = Number(t.menitUjian) || 210;
    const tu = Math.round(menitU * 60 / soalU); const lewat = Math.round(t.proyeksiMenit - menitU);
    return { lewat: lewat > 0, teks: 'Rata-rata ' + mmss(t.rataDetik) + ' per soal; tempo ujian ' + mmss(tu) + '. Dengan laju ini ' + soalU + ' soal butuh ±' + t.proyeksiMenit + ' menit, '
      + (lewat > 0 ? 'lewat ' + lewat + ' menit dari ' + menitU + '.' : 'masih di dalam tempo ujian (' + menitU + ' menit).') };
  }
  // murni: siapa memilih apa pada satu soal → "A: Nicky · B: Mia, Novia (kunci) · C: Alfi · kosong: Melva"
  function siapaMemilih(q, urutanNama) {
    const per = (q && q.perPeserta) || {}; const nama = (urutanNama && urutanNama.length ? urutanNama : Object.keys(per));
    const grup = { A: [], B: [], C: [], D: [], '-': [] };
    nama.forEach(nm => { const j = per[nm]; const o = j && /^[A-D]$/.test(j.o) ? j.o : '-'; grup[o].push(nm + (j && j.k === 'ragu' && o !== '-' ? ' (ragu)' : '')); });
    const bagian = ['A', 'B', 'C', 'D'].filter(o => grup[o].length || o === q.kunci).map(o => o + ': ' + (grup[o].length ? grup[o].join(', ') : 'tidak ada') + (o === q.kunci ? ' (kunci)' : ''));
    if (grup['-'].length) bagian.push('kosong: ' + grup['-'].join(', '));
    return bagian.join(' · ');
  }
  const KELAS_BAHAS = { tersandung: ['Tersandung', 'attn'], terbelah: ['Terbelah', 'warn'], rapuh: ['Belum mantap', 'nila'], dikuasai: ['Dikuasai', 'ok'] };
  const pillKelas = kelas => { const k = KELAS_BAHAS[kelas] || KELAS_BAHAS.dikuasai; return UKP.c.pill(k[0], k[1], null, { 'data-kelas': kelas }); };
  // saringan matriks: q dari ev.soal, kelasDari(id) → kelas triase ('dikuasai' bila tidak ada di urutan bahas)
  const SARING_MATRIKS = [
    { nilai: 'semua', label: 'Semua', f: () => true },
    { nilai: 'salah', label: 'Ada yang salah', f: (q, ev) => q.nBenar < ev.nPeserta },
    { nilai: 'terbelah', label: 'Terbelah', f: (q, ev, kelasDari) => kelasDari(q.id) === 'terbelah' },
    { nilai: 'tersandung', label: 'Tersandung', f: (q, ev, kelasDari) => kelasDari(q.id) === 'tersandung' },
  ];
  const MATRIKS_AWAL = 20, MATRIKS_BATAS_PENUH = 30, BAHAS_AWAL = 10;

  // dialog soal satu sesi: jawaban tiap orang di atas soal (mode ulas); Sebelumnya/Berikutnya di antara soal sesi
  function bukaSoalSesi(ev, awalIdx) {
    const daftar = ev.soal.map((q, i) => ({ q, i })).filter(x => cariSoal(x.q.id));
    if (!daftar.length) { UKP.toast('Soal ini tidak ada di versi aplikasi ini.'); return; }
    const mulaiPos = Math.max(0, daftar.findIndex(x => x.i === awalIdx));
    dialogSoal(daftar, mulaiPos, x => 'Soal ' + x.q.id + ' · ' + (x.i + 1) + ' dari ' + ev.soal.length, x => {
      const q = x.q; const so = cariSoal(q.id);
      const baris = ev.peserta.map(p => p.nama).map(nm => { const j = q.perPeserta[nm] || { o: '-', k: null, b: 0 }; const hs = hasilSel(j);
        return h('li', { 'data-hasil': hs }, h('span', { class: 'eval-dlg-nama', title: nm }, nm), h('span', { class: 'eval-sel', 'data-hasil': hs }, j.o === '-' ? '–' : j.o),
          h('span', { class: 'meta' }, hs + (j.k ? ' · ' + LABEL_YAKIN[j.k].toLowerCase() : ''))); });
      return h('div', { class: 'stack tim-dlg-soal' },
        h('div', { class: 'tim-dlg-meta' }, h('span', { class: 'tim-angka' }, 'Kunci ' + (q.kunci || so.kunci)), h('span', { class: 'meta' }, q.nBenar + ' benar · ' + q.nSalah + ' salah · ' + q.nKosong + ' kosong')),
        h('ul', { class: 'eval-dlg-jawab', 'aria-label': 'Jawaban tiap orang' }, baris),
        UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: '-', detik: 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true }));
    });
  }

  // komponen dasbor evaluasi tim (dipakai di akhir sesi latihan dan di #tim/sesi:<id>)
  // opsi: onUlangi(soalIds) · onTutup() · labelTutup · ringkas (tanpa matriks dan topik) · tingkatJudul (1|2, bawaan 2) · tanpaKop · diDasbor (sembunyikan "Lihat di Dasbor tim")
  // v8.1: mode ujian (ev.mode 'ujian': skor per orang, per kelompok), bagian Tempo, Urutan bahas + mode bahas (menggantikan
  // "Soal paling banyak salah"), saringan matriks dan "Tampilkan semua" (> 30 soal), rekap untuk grup (salin / WhatsApp)
  function evaluasiBersama(sesi, opsi) {
    opsi = opsi || {};
    const ev = evaluasi(sesi); const sn = normalSesi(sesi) || { peserta: [], soal: [], mulai: null };
    const ujian = adalahUjian(ev);
    const wadah = h('div', { class: 'stack eval-tim', 'data-k': 'evaluasi-tim', 'data-mode': ujian ? 'ujian' : 'latihan' });
    if (!opsi.tanpaKop) {
      const H = opsi.tingkatJudul === 1 ? 'h1' : 'h2';
      wadah.append(h('div', { class: 'eval-kop' }, h('p', { class: 'eyebrow' }, tanggalSesi(sn.mulai)),
        h(H, { class: 'eval-judul' }, ujian ? 'Hasil ujian tim' : 'Evaluasi tim'),
        ujian && ev.judul ? h('p', { class: 'eval-subjudul' }, ev.judul) : null,
        h('p', { class: 'meta' }, metaSesi(ev, sesi) + (sn.tingkat ? ' · Tingkat ' + sn.tingkat : '') + (sesi && !sesi.selesai ? ' · belum selesai' : ''))));
    }
    if (!ev.nSoal || !ev.nPeserta) { wadah.append(UKP.c.kosong('Belum ada soal yang dinilai', ujian ? 'Ujian ini belum berisi jawaban.' : 'Sesi ini berakhir sebelum kunci soal pertama dibuka.', null, { ringkas: true })); return wadah; }
    const namaUrut = sn.peserta.length ? sn.peserta.filter(nm => ev.peserta.some(p => p.nama === nm)).concat(ev.peserta.map(p => p.nama).filter(nm => sn.peserta.indexOf(nm) < 0)) : ev.peserta.map(p => p.nama);
    const idsSalah = ev.soal.filter(q => q.nSalah + q.nKosong > 0).map(q => q.id);
    const adaUlangi = typeof opsi.onUlangi === 'function' && idsSalah.length > 0;
    const idxDari = id => ev.soal.findIndex(x => x.id === id);
    // v8.2 (U1): HP anggota → hanya angka tim + "Hasilku"; tanpa peringkat, matriks, atau skor orang lain
    if (versiAnggota(sesi, opsi)) { wadah.setAttribute('data-versi', 'anggota'); evaluasiAnggota(wadah, sesi, ev, opsi); return wadah; }
    wadah.setAttribute('data-versi', 'pemandu');

    if (ujian) wadah.append(pitaUjian(ev), bagianSkorUjian(ev));
    else wadah.append(kopSkorTim(sesi, ev), pitaLatihan(ev), bagianOrang(ev));
    const tempo = bagianTempo(ev, i => bukaSoalSesi(ev, i), idxDari); if (tempo) wadah.append(tempo);
    if (ujian && !opsi.ringkas) { const pk = bagianPerKelompok(ev); if (pk) wadah.append(pk); }
    // urutan bahas (triase) — bila modul belajar belum menyediakannya, kembali ke "Soal paling banyak salah" v8.0
    const tri = ev.triase && Array.isArray(ev.triase.daftar) ? ev.triase : null;
    const bahas = tri ? kendaliBahas(sesi, ev, tri, namaUrut, adaUlangi ? () => opsi.onUlangi(idsSalah.slice()) : null, idsSalah.length) : null;
    const kelasDari = id => { const x = tri && tri.daftar.find(d => d.id === id); return x ? x.kelas : 'dikuasai'; };
    if (!opsi.ringkas) wadah.append(bagianMatriks(ev, namaUrut, kelasDari));
    if (bahas) wadah.append(bahas.bagian);
    else if (ev.tersulit && ev.tersulit.length) wadah.append(bagianTersulit(ev));
    { const tk = barisTerimaKasih(sesi); if (tk) wadah.append(tk); }
    if (!opsi.ringkas && ev.topikTim.length) {
      wadah.append(UKP.c.sect({ judul: 'Topik yang perlu dibahas tim', meta: 'akurasi terendah · min. 3 jawaban', isi: UKP.c.daftarSkor(ev.topikTim.map(t => ({ kode: t.topik, judul: judulTopik(t.topik) || t.topik, nilai: t.akurasi, satuan: '%', meta: t.benar + ' dari ' + t.n + ' jawaban benar', view: UKP.konten && UKP.konten.topik && UKP.konten.topik(t.topik) ? 'topik' : null, params: { id: t.topik } })), 'Topik yang perlu dibahas tim') }));
    }
    // aksi
    const nmBerkas = (ujian ? 'ujian-tim-' : 'sesi-bersama-') + (sn.mulai ? U.hariDari(sn.mulai) + '-' + jam(sn.mulai).replace('.', '') : String(sn.id || 'tim')) + '.csv';
    const B = UKP.belajar; const adaRekap = !!(B && typeof B.rekapSesi === 'function');
    const teksRekap = () => { try { return String(B.rekapSesi(sesi) || ''); } catch (e) { console.error(e); return ''; } };
    let tRekap = null, tWa = null;
    if (adaRekap) {
      tRekap = UKP.c.salin(teksRekap, { label: 'Salin rekap untuk grup', kelas: 'btn', judul: 'Salin rekap', pesan: 'Rekap disalin. Tempel di grup WhatsApp.' });
      tRekap.setAttribute('data-k', 'eval-rekap');
      const r = teksRekap();
      tWa = r ? h('a', { class: 'btn', 'data-k': 'eval-wa', href: 'https://wa.me/?text=' + encodeURIComponent(r), target: '_blank', rel: 'noopener noreferrer' }, 'Kirim rekap lewat WhatsApp') : null;
    }
    // v8.2 (audit T9): tepat satu tombol primer — "Mulai bahas" bila ada urutan bahas; selain itu Ulangi, lalu Selesai
    const primerBahas = !!(bahas && bahas.buka);
    const aksi = [
      adaUlangi ? h('button', { type: 'button', class: 'btn' + (primerBahas ? '' : ' btn-primary'), 'data-k': 'eval-ulangi', onclick: () => opsi.onUlangi(idsSalah.slice()) }, 'Ulangi ' + idsSalah.length + ' soal yang salah') : null,
      tRekap, tWa,
      h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'eval-csv', onclick: () => unduhCsv(nmBerkas, csvSesi(sesi, ev), 'Salin CSV sesi') }, UKP.icon('unduh', null, true), 'Ekspor CSV'),
      opsi.diDasbor ? null : h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'eval-dasbor', onclick: () => UKP.go('tim', {}) }, 'Lihat di Dasbor tim'),
      typeof opsi.onTutup === 'function' ? h('button', { type: 'button', class: 'btn' + (adaUlangi || primerBahas ? '' : ' btn-primary'), 'data-k': 'eval-tutup', onclick: () => opsi.onTutup() }, opsi.labelTutup || 'Selesai') : null,
    ];
    wadah.append(h('div', { class: 'btn-row eval-aksi' }, aksi));
    return wadah;
  }
  UKP.c.evaluasiBersama = evaluasiBersama;

  function pitaLatihan(ev) {
    const totalJ = ev.nSoal * ev.nPeserta;
    const nBenar = ev.peserta.reduce((a, p) => a + p.benar, 0), nKosong = ev.peserta.reduce((a, p) => a + p.kosong, 0), nYS = ev.peserta.reduce((a, p) => a + p.yakinSalah, 0);
    return h('div', { class: 'pita-stat tim-pita eval-pita' },
      tile({ label: 'Akurasi tim', nilai: Math.round(nBenar / totalJ * 100) + '%', sub: nBenar + ' dari ' + totalJ + ' jawaban benar' }),
      tile({ label: 'Rata-rata benar', nilai: (Math.round(nBenar / ev.nPeserta * 10) / 10).toString().replace('.', ','), sub: 'dari ' + ev.nSoal + ' soal per orang' }),
      tile({ label: 'Yakin tapi salah', nilai: String(nYS), sub: nYS ? 'bahas lebih dulu' : 'tidak ada' }),
      tile({ label: 'Kosong', nilai: String(nKosong), sub: 'jawaban tidak diisi' }));
  }
  function bagianPeringkat(ev) {
    const peringkat = h('ol', { class: 'eval-peringkat', 'aria-label': 'Peringkat peserta' }, ev.peserta.map((p, i) => h('li', { 'data-k': 'peringkat-' + p.nama },
      h('span', { class: 'eval-no tim-angka', 'aria-hidden': 'true' }, String(i + 1)),
      h('span', { class: 'eval-nama', title: p.nama }, p.nama),
      h('span', { class: 'eval-skor tim-angka' }, p.benar + '/' + ev.nSoal),
      p.akurasi == null ? h('span') : UKP.c.barMini(p.akurasi, { label: p.nama + ': ' + p.akurasi + ' dari 100, batas aman 60' }),
      h('span', { class: 'eval-ket' }, p.yakinSalah ? UKP.c.pill('yakin tapi salah: ' + p.yakinSalah, 'attn') : null, p.kosong ? h('span', { class: 'meta' }, p.kosong + ' kosong') : null))));
    return UKP.c.sect({ judul: 'Peringkat', meta: 'urut jumlah benar', isi: peringkat });
  }
  // ---------- v8.2: kop skor tim (T1), daftar orang abjad / peringkat (U1), terima kasih (T6), versi anggota ----------
  // angka tim: sesi.tim { benar, dijawab } bila ada (dirakit pemandu room); selain itu dihitung dari jawaban terisi (o ≠ '-')
  function angkaTim(sesi, ev) {
    const t = sesi && sesi.tim && typeof sesi.tim === 'object' ? sesi.tim : null;
    if (t && Number(t.dijawab) > 0 && Number(t.benar) >= 0) return { benar: Math.round(Number(t.benar)), dijawab: Math.round(Number(t.dijawab)) };
    let benar = 0, dijawab = 0; ev.soal.forEach(q => Object.keys(q.perPeserta || {}).forEach(nm => { const j = q.perPeserta[nm]; if (j && j.o !== '-') { dijawab++; if (j.b) benar++; } }));
    return { benar, dijawab };
  }
  const persen = (a, b) => b ? Math.round(a / b * 100) : 0;
  function kopSkorTim(sesi, ev) {
    const t = angkaTim(sesi, ev); if (!t.dijawab) return null;
    if (typeof UKP.c.skorTim === 'function') { try { const el = UKP.c.skorTim(t, {}); if (el && el.nodeType) { el.setAttribute('data-k', 'skor-tim'); return el; } } catch (e) { console.error(e); } }
    const p = persen(t.benar, t.dijawab);
    return h('div', { class: 'eval-skor-tim', 'data-k': 'skor-tim' }, h('p', { class: 'eval-skor-tim-teks' }, h('strong', null, 'Tim ' + t.benar + '/' + t.dijawab + ' benar'), ' · ' + p + '%'),
      UKP.c.barMini(p, { acuan: batasLulus(), nada: p < batasLulus() ? 'attn' : null, label: 'Skor tim ' + p + ' dari 100, garis lulus ' + batasLulus() }));
  }
  // laptop pemandu: sakelar "Tampilkan peringkat" (bawaan mati → urut abjad tanpa nomor)
  function bagianOrang(ev) {
    const wadah = h('div', { class: 'eval-orang-bagian', 'data-k': 'bagian-orang' }); const sid = U.id('peringkat');
    function daftarAbjad() {
      const arr = ev.peserta.slice().sort((a, b) => a.nama.localeCompare(b.nama, 'id', { sensitivity: 'base' }));
      return h('ul', { class: 'eval-orang', 'aria-label': 'Hasil per orang, urut abjad' }, arr.map(p => h('li', { 'data-k': 'orang-' + p.nama },
        h('span', { class: 'eval-nama', title: p.nama }, p.nama),
        h('span', { class: 'eval-skor tim-angka' }, p.benar + '/' + ev.nSoal),
        p.akurasi == null ? h('span') : UKP.c.barMini(p.akurasi, { label: p.nama + ': ' + p.akurasi + ' dari 100, batas aman 60' }),
        h('span', { class: 'eval-ket' }, p.yakinSalah ? UKP.c.pill('yakin tapi salah: ' + p.yakinSalah, 'attn') : null, p.kosong ? h('span', { class: 'meta' }, p.kosong + ' kosong') : null))));
    }
    function gambar(fokus) {
      const on = peringkatAktif();
      const sw = UKP.c.sakelar({ id: sid, judul: 'Tampilkan peringkat', nilai: on, kelas: 'eval-sakelar-peringkat', onchange: e => { aturPeringkat(e.target.checked); gambar(true); } });
      const sect = on ? bagianPeringkat(ev) : UKP.c.sect({ judul: 'Hasil per orang', meta: 'urut abjad', isi: daftarAbjad() });
      wadah.replaceChildren(sw, sect);
      if (fokus) { const i = wadah.querySelector('#' + sid); if (i) try { i.focus({ preventScroll: true }); } catch (e) {} }
    }
    gambar(false);
    return wadah;
  }
  // T6: "Terima kasih untuk penjelas: Mia (3), Jessie (2)" — urut abjad, hanya yang mendapat ucapan (null bila tidak ada)
  function teksTerimaKasih(sesi) {
    const tk = sesi && sesi.tim && sesi.tim.terimaKasih && typeof sesi.tim.terimaKasih === 'object' ? sesi.tim.terimaKasih : null; if (!tk) return null;
    const arr = Object.keys(tk).filter(nm => Number(tk[nm]) > 0).sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }));
    return arr.length ? 'Terima kasih untuk penjelas: ' + arr.map(nm => nm + ' (' + Math.round(Number(tk[nm])) + ')').join(', ') : null;
  }
  function barisTerimaKasih(sesi) { const t = teksTerimaKasih(sesi); return t ? h('p', { class: 'eval-terima-kasih', 'data-k': 'terima-kasih' }, t) : null; }
  // soal "bahas lagi": sesi.tim.bahasLagi bila ada; selain itu soal dengan ≥ 3 jawaban salah (T6)
  function bahasLagi(sesi, ev) {
    const b = sesi && sesi.tim && Array.isArray(sesi.tim.bahasLagi) ? sesi.tim.bahasLagi.filter(x => typeof x === 'string') : null;
    return b || ev.soal.filter(q => q.nSalah >= 3).map(q => q.id);
  }
  const nDikuasai = ev => ev.triase && typeof ev.triase.nDikuasai === 'number' ? ev.triase.nDikuasai : ev.soal.filter(q => q.nBenar === ev.nPeserta).length;
  // murni: tiga baris rekap tim untuk WA (tanpa skor per nama; "Hasilku" tidak ikut)
  function rekapAnggota(sesi, ev) {
    ev = ev || evaluasi(sesi);
    const t0 = ms(sesi && (sesi.selesai || sesi.mulai)); const jamKe = t0 ? new Date(t0).getHours() : 12;
    const kapan = jamKe >= 17 || jamKe < 4 ? 'Malam ini' : 'Hari ini';
    const hadir = sesi && sesi.tim && Number(sesi.tim.hadir) > 0 ? Math.round(Number(sesi.tim.hadir)) : ev.nPeserta;
    const baris = [];
    if (adalahUjian(ev)) {
      const sk = ev.skor; const rata = sk.length ? sk.reduce((a, x) => a + x.skor, 0) / sk.length : 0;
      baris.push(kapan + ': ujian tim ' + (ev.judul ? ev.judul + ' · ' : '') + ev.nSoal + ' soal · rata-rata tim ' + Math.round(rata) + ' · ' + sk.filter(x => x.lulus).length + ' dari ' + sk.length + ' di atas ' + batasLulus());
    } else {
      const t = angkaTim(sesi, ev); let total = null;
      try { const st = infoRoom() ? ruangR().state() : null; total = st && st.room && Array.isArray(st.room.peserta) ? st.room.peserta.length : null; } catch (e) { total = null; }
      baris.push(kapan + ': ' + (total && total >= hadir ? hadir + ' dari ' + total + ' hadir' : hadir + ' orang') + ' · ' + ev.nSoal + ' soal · skor tim ' + persen(t.benar, t.dijawab) + '%');
    }
    const tk = teksTerimaKasih(sesi); if (tk) baris.push(tk);
    const bl = bahasLagi(sesi, ev); if (bl.length) baris.push('Bahas lagi minggu depan: ' + bl.slice(0, 8).join(', '));
    return baris;
  }
  // sebaran jawaban satu soal tanpa nama: "A 1 · B 4 · C 1 · kosong 0"
  function sebaranTanpaNama(q) {
    const n = { A: 0, B: 0, C: 0, D: 0, '-': 0 }; Object.keys(q.perPeserta || {}).forEach(nm => { const o = (q.perPeserta[nm] || {}).o; n[/^[A-D]$/.test(o) ? o : '-']++; });
    return ['A', 'B', 'C', 'D'].filter(o => n[o] || o === q.kunci).map(o => o + ' ' + n[o]).join(' · ') + (n['-'] ? ' · kosong ' + n['-'] : '');
  }
  // HP anggota: angka tim, "Hasilku", soal untuk dibahas (tanpa nama), rekap T6
  function evaluasiAnggota(wadah, sesi, ev, opsi) {
    const saya = namaSaya(); const kSaya = kunciNama(saya);
    const namaSesi = ev.peserta.map(p => p.nama).find(nm => kunciNama(nm) === kSaya) || null;
    const ujian = adalahUjian(ev); const bt = batasLulus();
    const fakta = (label, nilai, k) => h('div', { 'data-k': k }, h('dt', null, label), h('dd', null, nilai));
    if (ujian) {
      const sk = ev.skor; const x = namaSesi ? sk.find(y => kunciNama(y.nama) === kSaya) : null;
      const rata = sk.length ? sk.reduce((a, y) => a + y.skor, 0) / sk.length : 0; const nL = sk.filter(y => y.lulus).length;
      wadah.append(h('section', { class: 'card eval-anggota', 'aria-label': 'Hasil Anda' },
        x ? h('p', { class: 'eval-anggota-skor', 'data-k': 'skor-saya', 'data-lulus': x.lulus ? '' : null }, h('span', { class: 'eval-skor-besar tim-angka', 'data-nada': x.lulus ? null : 'attn' }, 'Skor Anda ' + angkaKoma(x.skor)), ' · ', x.lulus ? 'Lulus' : 'kurang ' + x.kurang + ' soal')
          : h('p', { class: 'meta', 'data-k': 'skor-saya' }, saya ? 'Nama ' + saya + ' tidak ada di hasil ini.' : 'Nama Anda belum diatur di perangkat ini.'),
        x ? UKP.c.barMini(x.skor, { acuan: bt, nada: x.lulus ? null : 'attn', label: 'Skor Anda ' + angkaKoma(x.skor) + ' dari 100, batas lulus ' + bt }) : null,
        x ? h('p', { class: 'meta' }, [x.benar + ' benar', x.salah + ' salah', x.kosong + ' kosong', x.nRagu ? x.nRagu + ' ragu' : null].filter(Boolean).join(' · ')) : null,
        h('p', { class: 'eval-anggota-tim', 'data-k': 'rata-tim' }, 'Rata-rata tim ' + angkaKoma(rata) + ' · ' + nL + ' dari ' + sk.length + ' di atas ' + bt)));
    } else {
      const t = angkaTim(sesi, ev); const bl = bahasLagi(sesi, ev);
      const pSaya = namaSesi ? ev.peserta.find(p => p.nama === namaSesi) : null;
      const kop = kopSkorTim(sesi, ev); if (kop) wadah.append(kop);
      wadah.append(h('section', { class: 'card eval-anggota', 'aria-label': 'Hasil tim' },
        h('dl', { class: 'fakta eval-anggota-fakta' },
          fakta('Skor tim', persen(t.benar, t.dijawab) + '%', 'fakta-skor-tim'),
          fakta('Dikuasai semua', nDikuasai(ev) + ' dari ' + ev.nSoal, 'fakta-dikuasai'),
          fakta('Dibahas lagi', bl.length + ' soal', 'fakta-bahas-lagi')),
        h('p', { class: 'eval-hasilku', 'data-k': 'hasilku' }, pSaya ? 'Hasilku: ' + pSaya.benar + ' dari ' + ev.nSoal : (saya ? 'Nama ' + saya + ' tidak ada di sesi ini.' : 'Nama Anda belum diatur di perangkat ini.'))));
    }
    // soal untuk dibahas: urutan bahas (tanpa saran berisi nama) atau soal yang ada salahnya
    const tri = ev.triase && Array.isArray(ev.triase.daftar) ? ev.triase.daftar : null;
    const ids = tri ? tri.map(x => x.id) : ev.soal.filter(q => q.nSalah + q.nKosong > 0).map(q => q.id);
    const daftarQ = ids.map(id => ev.soal.find(q => q.id === id)).filter(Boolean);
    if (daftarQ.length) {
      const kelas = id => { const x = tri && tri.find(d => d.id === id); return x ? x.kelas : null; };
      const awal = 10; const ol = h('ol', { class: 'eval-bahas eval-bahas-anggota', 'aria-label': 'Soal untuk dibahas' }, daftarQ.map((q, i) => {
        const jt = judulTopik(q.topik); const sj = namaSesi ? q.perPeserta[namaSesi] : null;
        return h('li', { 'data-k': 'bahas-' + q.id, hidden: i >= awal && daftarQ.length > awal + 2 ? true : null },
          h('span', { class: 'eval-bahas-no tim-angka', 'aria-hidden': 'true' }, String(i + 1)),
          h('button', { type: 'button', class: 'eval-bahas-btn', 'aria-label': (i + 1) + '. Soal ' + q.id + '. Buka soal', onclick: () => bukaSoalAnggota(daftarQ, i, namaSesi) },
            h('span', { class: 'eval-bahas-kop' }, h('span', { class: 'kode' }, q.id), kelas(q.id) ? pillKelas(kelas(q.id)) : null, h('span', { class: 'eval-bahas-topik', title: jt || null }, (q.topik ? q.topik + ' ' : '') + (jt || namaKel(q.kode)))),
            h('span', { class: 'meta' }, 'Kunci ' + (q.kunci || '–') + ' · tim: ' + sebaranTanpaNama(q) + (sj ? ' · Anda: ' + (sj.o === '-' ? 'kosong' : sj.o) : ''))));
      }));
      const tSemua = daftarQ.length > awal + 2 ? h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: e => { ol.querySelectorAll('li[hidden]').forEach(x => { x.hidden = false; }); e.currentTarget.remove(); } }, 'Tampilkan semua (' + daftarQ.length + ')') : null;
      wadah.append(UKP.c.sect({ judul: 'Soal untuk dibahas', meta: daftarQ.length + ' soal', isi: h('div', { class: 'stack-sm' }, ol, tSemua) }));
    }
    // rekap T6
    const baris = rekapAnggota(sesi, ev);
    const tk = teksTerimaKasih(sesi);
    wadah.append(UKP.c.sect({ judul: 'Rekap tim', isi: h('div', { class: 'stack-sm eval-rekap-anggota', 'data-k': 'rekap-anggota' },
      baris.filter(b => b !== tk).map(b => h('p', { class: 'small' }, b)), tk ? barisTerimaKasih(sesi) : null) }));
    const tSalin = UKP.c.salin(() => baris.join('\n'), { label: 'Salin rekap untuk WA', kelas: 'btn' + (typeof opsi.onTutup === 'function' ? '' : ' btn-primary'), judul: 'Salin rekap', pesan: 'Rekap disalin. Tempel di grup WhatsApp.' });
    tSalin.setAttribute('data-k', 'eval-rekap');
    wadah.append(h('div', { class: 'btn-row eval-aksi' }, tSalin,
      typeof opsi.onTutup === 'function' ? h('button', { type: 'button', class: 'btn btn-primary', 'data-k': 'eval-tutup', onclick: () => opsi.onTutup() }, opsi.labelTutup || 'Selesai') : null));
  }
  // dialog soal versi anggota: kunci, sebaran jawaban tim tanpa nama, jawaban sendiri
  function bukaSoalAnggota(daftarQ, awal, namaSesi) {
    const daftar = daftarQ.filter(q => cariSoal(q.id)); if (!daftar.length) { UKP.toast('Soal ini tidak ada di versi aplikasi ini.'); return; }
    const mulaiPos = Math.max(0, daftar.indexOf(daftarQ[awal]));
    dialogSoal(daftar, mulaiPos, q => 'Soal ' + q.id, q => {
      const so = cariSoal(q.id); const sj = namaSesi ? q.perPeserta[namaSesi] : null;
      return h('div', { class: 'stack tim-dlg-soal' },
        h('div', { class: 'tim-dlg-meta' }, h('span', { class: 'tim-angka' }, 'Kunci ' + (q.kunci || so.kunci)), h('span', { class: 'meta' }, 'Jawaban tim: ' + sebaranTanpaNama(q)), sj ? h('span', { class: 'meta' }, 'Anda: ' + (sj.o === '-' ? 'kosong' : sj.o + (sj.b ? ' (benar)' : ' (salah)'))) : null),
        UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: sj ? sj.o : '-', detik: 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true }));
    });
  }
  // Dasbor tim: "Riwayat room" (indeks room ≤ 30) untuk sesi yang belum ada di perangkat ini
  function riwayatRoomNode() {
    const r = ruangR(); if (!r || !infoRoom() || typeof r.riwayat !== 'function') return null;
    let arr = []; try { arr = r.riwayat() || []; } catch (e) { arr = []; }
    const lokal = new Set(daftarSesi().map(x => x.id)); arr = arr.filter(e => e && typeof e.id === 'string' && !lokal.has(e.id)); if (!arr.length) return null;
    return UKP.c.sect({ judul: 'Riwayat room', meta: arr.length + ' sesi belum ada di perangkat ini', isi: h('ul', { class: 'eval-sesi', 'data-k': 'riwayat-room', 'aria-label': 'Riwayat room' }, arr.map(e => {
      const ujian = e.mode === 'ujian';
      return h('li', { 'data-mode': ujian ? 'ujian' : 'latihan' }, UKP.link([
        h('span', { class: 'eval-sesi-kop' }, h('span', { class: 'eval-sesi-jenis' }, (ujian ? 'Ujian tim' : 'Latihan') + (e.judul ? ' · ' + e.judul : '')), UKP.c.pill('di room', 'nila')),
        h('span', { class: 'meta' }, h('span', { class: 'eval-sesi-tgl' }, tanggalSesi(ms(e.t))), ' · ' + (e.nSoal || 0) + ' soal · ' + ((e.peserta || []).length) + ' orang'),
        UKP.icon('chevron-kanan', 'chev', true)], 'tim', { anggota: 'sesi:' + e.id }, 'eval-sesi-baris'));
    })) });
  }
  // mode ujian: pita (rata-rata skor, lulus, kosong, ragu) dan skor per orang menurut urutan peserta (bukan peringkat)
  function pitaUjian(ev) {
    const sk = ev.skor; const N = sk.length; const bt = batasLulus();
    const rata = N ? sk.reduce((a, x) => a + x.skor, 0) / N : 0; const nLulus = sk.filter(x => x.lulus).length;
    const kosong = sk.reduce((a, x) => a + x.kosong, 0), ragu = sk.reduce((a, x) => a + x.nRagu, 0);
    return h('div', { class: 'pita-stat tim-pita eval-pita', 'data-k': 'pita-ujian' },
      tile({ label: 'Rata-rata skor', nilai: angkaKoma(rata), sub: 'batas lulus ' + bt }),
      tile({ label: 'Lulus (≥ ' + bt + ')', nilai: nLulus + ' dari ' + N, sub: nLulus === N ? 'semua lulus' : (N - nLulus) + ' orang belum lulus' }),
      tile({ label: 'Kosong', nilai: String(kosong), sub: 'jawaban tidak diisi' }),
      tile({ label: 'Ragu', nilai: String(ragu), sub: 'jawaban bertanda ragu' }));
  }
  function bagianSkorUjian(ev) {
    const bt = batasLulus();
    const daftar = h('ol', { class: 'eval-skor-daftar', 'aria-label': 'Skor per orang' }, ev.skor.map(x => {
      const rinci = [x.benar + ' benar', x.salah + ' salah', x.kosong + ' kosong', x.nRagu ? x.nRagu + ' ragu' : null, x.detik != null ? Math.max(1, Math.round(x.detik / 60)) + ' menit' : null].filter(Boolean).join(' · ');
      return h('li', { 'data-k': 'skor-' + x.nama, 'data-lulus': x.lulus ? '' : null },
        h('span', { class: 'eval-nama', title: x.nama }, x.nama),
        h('span', { class: 'eval-skor-besar tim-angka', 'data-nada': x.lulus ? null : 'attn' }, angkaKoma(x.skor)),
        h('span', { class: 'eval-skor-status' }, x.lulus ? UKP.c.pill('Lulus', 'ok', 'check') : UKP.c.pill('kurang ' + x.kurang + ' soal', 'attn')),
        UKP.c.barMini(x.skor, { acuan: bt, nada: x.lulus ? null : 'attn', label: x.nama + ': skor ' + angkaKoma(x.skor) + ' dari 100, batas lulus ' + bt }),
        h('span', { class: 'meta eval-skor-rinci' }, rinci));
    }));
    return UKP.c.sect({ judul: 'Skor per orang', meta: 'skor = benar ÷ soal × 100 · lulus ≥ ' + bt, isi: daftar });
  }
  // mode ujian: persen benar per kelompok soal (baris) per orang (kolom); sel < 60% bernada
  function bagianPerKelompok(ev) {
    const kode = []; const n = {};
    ev.skor.forEach(x => (x.perKelompok || []).forEach(k => { if (kode.indexOf(k.kode) < 0) { kode.push(k.kode); n[k.kode] = k.n; } }));
    if (!kode.length) return null;
    const bt = batasLulus();
    const tbl = h('table', { class: 'tabel eval-kel' }, h('caption', { class: 'visually-hidden' }, 'Persen jawaban benar per kelompok soal untuk tiap orang'),
      h('thead', null, h('tr', null, h('th', { scope: 'col', class: 'eval-kel-kode' }, 'Kelompok'), h('th', { scope: 'col', class: 'num' }, 'Soal'),
        ev.skor.map(x => h('th', { scope: 'col', class: 'num', title: x.nama, abbr: x.nama }, namaPendek(x.nama))))),
      h('tbody', null, kode.map(k => h('tr', { 'data-k': 'kel-' + k },
        h('th', { scope: 'row', class: 'eval-kel-kode', title: namaKel(k) }, h('span', { class: 'kode' }, k), h('span', { class: 'eval-kel-nama' }, namaKel(k))),
        h('td', { class: 'num tim-angka' }, String(n[k])),
        ev.skor.map(x => { const y = (x.perKelompok || []).find(z => z.kode === k); const p = y && y.n ? Math.round(y.benar / y.n * 100) : null;
          return h('td', { class: 'num' }, p == null ? '–' : h('span', { class: 'eval-kel-sel tim-angka', 'data-nada': p < bt ? 'attn' : null, title: x.nama + ': ' + y.benar + ' dari ' + y.n + ' benar' }, p + '%')); })))));
    const wrap = UKP.c.tabelWrap('Persen benar per kelompok', tbl); wrap.classList.add('eval-kel-wrap');
    return UKP.c.sect({ judul: 'Per kelompok', meta: 'persen benar · di bawah ' + bt + '% ditandai', isi: wrap });
  }
  // tempo: kalimat proyeksi ke ujian sungguhan + ≤ 3 soal terlama (bisa dibuka)
  function bagianTempo(ev, buka, idxDari) {
    const t = ev.tempo; const k = kalimatTempo(t); if (!k) return null;
    const nDetik = ev.soal.filter(q => q.detik > 0).length;
    const terlama = (t.terlama || []).filter(x => idxDari(x.id) >= 0);
    return UKP.c.sect({ judul: 'Tempo', meta: 'dari ' + nDetik + ' soal berwaktu', isi: h('div', { class: 'eval-tempo', 'data-k': 'tempo', 'data-nada': k.lewat ? 'attn' : null },
      h('p', { class: 'eval-tempo-kalimat' }, k.teks),
      t.nLewat ? h('p', { class: 'meta' }, t.nLewat + ' dari ' + nDetik + ' soal melewati ' + mmss(t.detikPerSoal) + (terlama.length ? '. Terlama:' : '.')) : null,
      terlama.length ? h('ul', { class: 'eval-tempo-lama', 'aria-label': 'Soal terlama' }, terlama.map(x => h('li', null,
        h('button', { type: 'button', class: 'btn btn-sm btn-ghost', 'data-k': 'tempo-' + x.id, 'aria-label': 'Buka soal ' + x.id + ', ' + mmss(x.detik), onclick: () => buka(idxDari(x.id)) }, h('span', { class: 'kode' }, x.id), h('span', { class: 'tim-angka' }, mmss(x.detik)))))) : null) });
  }
  // matriks soal × orang; saringan (> 10 soal) dan 20 baris pertama untuk sesi > 30 soal
  function bagianMatriks(ev, nama, kelasDari) {
    const pakaiSaring = ev.nSoal > 10;
    let saring = 'semua'; let semua = ev.nSoal <= MATRIKS_BATAS_PENUH;
    const tbody = h('tbody');
    const info = h('span', { class: 'meta', 'aria-live': 'polite', 'data-k': 'matriks-info' });
    const tSemua = h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'data-k': 'matriks-semua', onclick: () => { semua = true; isi(); } });
    const baris = (q, i) => h('tr', { 'data-k': 'baris-' + q.id, onclick: e => { if (!e.target.closest('button')) bukaSoalSesi(ev, i); } },
      h('th', { scope: 'row', class: 'eval-kol-soal' }, h('button', { type: 'button', class: 'eval-soal-btn', 'aria-label': 'Soal ' + (i + 1) + ', ' + q.id + (judulTopik(q.topik) ? ', ' + judulTopik(q.topik) : '') + ', ' + q.nBenar + ' dari ' + ev.nPeserta + ' benar. Buka soal', onclick: () => bukaSoalSesi(ev, i) },
        h('span', { class: 'kode' }, q.id), h('span', { class: 'eval-topik', title: judulTopik(q.topik) || null }, q.topik || ''))),
      h('td', { class: 'eval-kol-kunci tim-angka' }, q.kunci || '–'),
      nama.map(nm => { const j = q.perPeserta[nm] || { o: '-', k: null, b: 0 }; const hs = hasilSel(j);
        return h('td', { class: 'eval-td' }, h('span', { class: 'eval-sel', 'data-hasil': hs, title: nm + ': ' + hs + (j.k ? ', ' + LABEL_YAKIN[j.k].toLowerCase() : '') },
          h('span', { 'aria-hidden': 'true' }, j.o === '-' ? '–' : j.o), j.k ? h('span', { class: 'eval-yk', 'aria-hidden': 'true' }, TEKS_YK[j.k]) : null,
          h('span', { class: 'visually-hidden' }, (j.o === '-' ? 'kosong' : j.o + ', ' + hs) + (j.k ? ', ' + LABEL_YAKIN[j.k].toLowerCase() : ''))));
      }));
    function isi() {
      const fx = (SARING_MATRIKS.find(x => x.nilai === saring) || SARING_MATRIKS[0]).f;
      const arr = ev.soal.map((q, i) => ({ q, i })).filter(x => fx(x.q, ev, kelasDari));
      const tampil = semua ? arr : arr.slice(0, MATRIKS_AWAL);
      tbody.replaceChildren(...(tampil.length ? tampil.map(x => baris(x.q, x.i)) : [h('tr', { class: 'eval-matriks-kosong' }, h('td', { colspan: String(2 + nama.length) }, 'Tidak ada soal untuk saringan ini.'))]));
      info.textContent = tampil.length < arr.length ? 'Menampilkan ' + tampil.length + ' dari ' + arr.length + ' soal' : arr.length + ' soal';
      tSemua.textContent = 'Tampilkan semua (' + arr.length + ')';
      tSemua.hidden = tampil.length >= arr.length;
    }
    const tbl = h('table', { class: 'tabel eval-matriks' }, h('caption', { class: 'visually-hidden' }, 'Jawaban tiap orang per soal. Pilih baris untuk membuka soal.'),
      h('thead', null, h('tr', null, h('th', { scope: 'col', class: 'eval-kol-soal' }, 'Soal'), h('th', { scope: 'col', class: 'eval-kol-kunci' }, 'Kunci'),
        nama.map(nm => h('th', { scope: 'col', title: nm, abbr: nm }, namaPendek(nm))))), tbody);
    isi();
    const ujian = ev.mode === 'ujian';
    const legenda = h('p', { class: 'tim-peta-legenda meta eval-legenda' }, h('span', { 'data-hasil': 'benar', 'aria-hidden': 'true' }), 'benar', h('span', { 'data-hasil': 'salah', 'aria-hidden': 'true' }), 'salah', h('span', { 'data-hasil': 'kosong', 'aria-hidden': 'true' }), 'kosong', ujian ? ' · R ragu' : ' · Y yakin · R ragu · N menebak');
    const wrapM = UKP.c.tabelWrap('Matriks jawaban soal per orang', tbl); wrapM.classList.add('eval-matriks-wrap');
    let seg = null;
    if (pakaiSaring) {
      const hitung = v => ev.soal.filter(q => SARING_MATRIKS.find(x => x.nilai === v).f(q, ev, kelasDari)).length;
      seg = UKP.c.segmen({ ariaLabel: 'Saring soal', aktif: saring, opsi: SARING_MATRIKS.map(x => ({ nilai: x.nilai, label: x.label + ' (' + hitung(x.nilai) + ')' })), onPilih: v => { saring = v; isi(); } });
      seg.setAttribute('data-k', 'matriks-saring'); seg.classList.add('eval-saring');
    }
    return UKP.c.sect({ judul: 'Jawaban per soal', meta: 'pilih baris untuk membuka soal', idBagian: null, isi: h('div', { class: 'stack-sm' }, seg, legenda, wrapM,
      h('div', { class: 'eval-matriks-kaki' }, info, tSemua)) });
  }
  // cadangan v8.0 (modul belajar tanpa urutanBahas)
  function bagianTersulit(ev) {
    const idxDari = q => ev.soal.indexOf(q) >= 0 ? ev.soal.indexOf(q) : ev.soal.findIndex(x => x.id === q.id);
    return UKP.c.sect({ judul: 'Soal paling banyak salah', meta: ev.tersulit.length + ' soal', isi: h('ol', { class: 'eval-sulit' }, ev.tersulit.map(q => {
      const jt = judulTopik(q.topik);
      const salahNama = Object.keys(q.perPeserta || {}).filter(nm => !q.perPeserta[nm].b);
      return h('li', { 'data-k': 'sulit-' + q.id },
        h('button', { type: 'button', class: 'eval-sulit-btn', onclick: () => bukaSoalSesi(ev, idxDari(q)) },
          h('span', { class: 'eval-sulit-kop' }, h('span', { class: 'kode' }, q.id), h('span', { class: 'tim-angka', 'data-nada': q.nBenar * 2 < ev.nPeserta ? 'attn' : null }, q.nBenar + ' dari ' + ev.nPeserta + ' benar')),
          h('span', { class: 'eval-sulit-topik' }, (q.topik ? q.topik + ' ' : '') + (jt || namaKel(q.kode))),
          salahNama.length ? h('span', { class: 'meta' }, 'Belum tepat: ' + salahNama.join(', ')) : null));
    })) });
  }

  // ---------- urutan bahas (triase) dan mode bahas ----------
  // tri = UKP.belajar.urutanBahas(sesi) (lewat ev.triase); tanda "sudah dibahas" disimpan lewat UKP.belajar.tandaiBahas
  function kendaliBahas(sesi, ev, tri, namaUrut, onUlangi, nUlangi) {
    const daftar = tri.daftar; const n = daftar.length;
    const sudah = new Set(daftar.filter(x => x.sudah).map(x => x.id));
    const B = UKP.belajar;
    const ringkas = h('p', { class: 'meta eval-bahas-ringkas', 'data-k': 'bahas-ringkas', 'aria-live': 'polite' });
    const tMulai = h('button', { type: 'button', class: 'btn btn-primary', 'data-k': 'bahas-mulai', onclick: () => { const i = daftar.findIndex(x => !sudah.has(x.id)); buka(i < 0 ? 0 : i); } });
    const cek = new Map();
    function segarkan() {
      const s = daftar.filter(x => sudah.has(x.id)).length;
      ringkas.textContent = n + ' soal perlu dibahas · ' + tri.nDikuasai + ' dikuasai dilewati' + (s ? ' · ' + s + ' sudah dibahas' : '');
      tMulai.textContent = s >= n ? 'Bahas ulang · ' + n + ' soal' : s ? 'Lanjutkan bahas · ' + (n - s) + ' tersisa' : 'Mulai bahas · ' + n + ' soal';
      cek.forEach((el, id) => { el.checked = sudah.has(id); const li = el.closest('li'); if (li) li.toggleAttribute('data-sudah', sudah.has(id)); });
    }
    function tandai(id, v) {
      if (v) sudah.add(id); else sudah.delete(id);
      if (B && typeof B.tandaiBahas === 'function' && sesi && sesi.id) { try { B.tandaiBahas(sesi.id, id, !!v); } catch (e) { console.error(e); } }
      segarkan();
    }
    const buka = i => bukaBahas({ daftar, ev, sudah, tandai, namaUrut, onUlangi, nUlangi }, i);
    if (!n) {
      return { bagian: UKP.c.sect({ judul: 'Urutan bahas', isi: h('div', { class: 'stack-sm', 'data-k': 'bahas-kosong' }, h('p', { class: 'meta' }, 'Tidak ada soal yang perlu dibahas: ' + tri.nDikuasai + ' soal dijawab benar oleh semua orang tanpa ragu.')) }) };
    }
    const ol = h('ol', { class: 'eval-bahas', 'aria-label': 'Urutan bahas' }, daftar.map((x, i) => {
      const jt = judulTopik(x.topik);
      const kotak = h('input', { type: 'checkbox', 'data-k': 'bahas-cek-' + x.id, 'aria-label': 'Soal ' + x.id + ' sudah dibahas', onchange: e => tandai(x.id, e.target.checked) });
      cek.set(x.id, kotak);
      const alasan = x.alasan && (x.alasan.label || x.alasan.opsi) ? 'Banyak memilih ' + x.alasan.opsi + (x.alasan.label ? ': ' + x.alasan.label : '') : null;
      return h('li', { 'data-k': 'bahas-' + x.id, 'data-kelas': x.kelas },
        h('span', { class: 'eval-bahas-no tim-angka', 'aria-hidden': 'true' }, String(i + 1)),
        h('button', { type: 'button', class: 'eval-bahas-btn', 'aria-label': (i + 1) + '. ' + x.id + ', ' + (KELAS_BAHAS[x.kelas] || [''])[0] + ', ' + x.saran + '. Buka mode bahas', onclick: () => buka(i) },
          h('span', { class: 'eval-bahas-kop' }, h('span', { class: 'kode' }, x.id), pillKelas(x.kelas), h('span', { class: 'eval-bahas-topik', title: jt || null }, (x.topik ? x.topik + ' ' : '') + (jt || namaKel(x.kode)))),
          h('span', { class: 'eval-bahas-saran' }, x.saran),
          alasan ? h('span', { class: 'meta eval-bahas-alasan' }, alasan) : null),
        h('label', { class: 'eval-bahas-cek' }, kotak, h('span', null, 'Dibahas')));
    }));
    segarkan();
    // daftar panjang (ujian): BAHAS_AWAL baris pertama + "Tampilkan semua"; mode bahas tetap memuat semuanya
    let tSemua = null;
    if (n > BAHAS_AWAL + 2) {
      const li = Array.from(ol.children); li.slice(BAHAS_AWAL).forEach(x => { x.hidden = true; });
      tSemua = h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'data-k': 'bahas-semua', onclick: () => { li.forEach(x => { x.hidden = false; }); tSemua.remove(); } }, 'Tampilkan semua (' + n + ')');
    }
    const bagian = UKP.c.sect({ judul: 'Urutan bahas', aksi: tMulai, isi: h('div', { class: 'stack-sm', 'data-k': 'urutan-bahas' }, ringkas, ol, tSemua) });
    return { bagian, buka };
  }
  // mode bahas: satu soal per langkah (mode ulas) dengan kotak triase, stopwatch, Sebelumnya / Sudah dibahas, lanjut
  // papan ketik: ← → pindah, Enter = sudah dibahas dan lanjut, Esc = tutup
  function bukaBahas(ctx, awal) {
    const daftar = ctx.daftar; const n = daftar.length; if (!n) return null;
    let pos = Math.max(0, Math.min(n - 1, awal || 0)); let akhir = false;
    const waktu = {}; let t0 = Date.now(); let detak = null;
    const jamEl = h('span', { class: 'eval-bahas-jam tim-angka', 'data-k': 'bahas-jam', title: 'Lama membahas soal ini' });
    const posisi = h('span', { class: 'meta tim-dlg-posisi', 'aria-live': 'polite', 'data-k': 'bahas-posisi' });
    const tSebelum = h('button', { type: 'button', class: 'btn', 'data-k': 'bahas-sebelum', onclick: () => geser(-1) }, UKP.icon('back', null, true), h('span', { class: 'lbl-panjang' }, 'Sebelumnya'));
    const tLanjut = h('button', { type: 'button', class: 'btn btn-primary', 'data-k': 'bahas-lanjut', autofocus: true, onclick: () => lanjut() }, 'Sudah dibahas, lanjut');
    const kaki = h('div', { class: 'tim-dlg-nav eval-bahas-nav' }, tSebelum, posisi, tLanjut);
    let dlg = null;
    const catatWaktu = () => { const x = daftar[pos]; if (x && !akhir) waktu[x.id] = (waktu[x.id] || 0) + (Date.now() - t0); t0 = Date.now(); };
    const tampilJam = () => { const x = daftar[pos]; if (!x || akhir) return; jamEl.textContent = 'Waktu bahas ' + mmss(((waktu[x.id] || 0) + (Date.now() - t0)) / 1000); };
    function isiSoal(x) {
      const q = ctx.ev.soal[x.idx] || ctx.ev.soal.find(y => y.id === x.id) || { id: x.id, kunci: x.kunci, perPeserta: {} };
      const so = cariSoal(x.id);
      const kotak = h('div', { class: 'eval-triase', 'data-k': 'triase', 'data-kelas': x.kelas },
        h('div', { class: 'eval-triase-kop' }, pillKelas(x.kelas), h('strong', null, x.label), ctx.sudah.has(x.id) ? UKP.c.pill('sudah dibahas', 'ok', 'check') : null, jamEl),
        h('p', { class: 'eval-triase-saran' }, x.saran),
        h('p', { class: 'eval-triase-pilih', 'data-k': 'triase-pilih' }, siapaMemilih(q, ctx.namaUrut)),
        x.alasan && (x.alasan.teks || x.alasan.label) ? h('p', { class: 'small eval-triase-alasan' }, h('strong', null, 'Opsi ' + x.alasan.opsi + (x.alasan.label ? ' · ' + x.alasan.label : '') + (x.alasan.teks ? ': ' : '')), x.alasan.teks || '') : null);
      return h('div', { class: 'stack tim-dlg-soal' }, kotak,
        so ? UKP.c.soal(so, { hanyaBaca: true, denganUmpan: true, fokus: false, jawabanAwal: '-', detik: 0, konteks: 'ulas', tanpaTutor: true, tanpaLog: true })
          : h('p', { class: 'meta' }, 'Soal ini tidak ada di versi aplikasi ini; bahas dari catatan di atas.'));
    }
    function isiAkhir() {
      const s = daftar.filter(x => ctx.sudah.has(x.id)).length;
      const semua = s >= n;
      return h('div', { class: 'stack eval-bahas-akhir', 'data-k': 'bahas-akhir' },
        h('p', { class: 'eval-bahas-akhir-judul' }, semua ? 'Semua soal sudah dibahas' : 'Sampai di akhir urutan bahas'),
        h('p', { class: 'meta' }, semua ? n + ' soal dibahas.' : s + ' dari ' + n + ' soal ditandai sudah dibahas.'),
        semua ? null : h('button', { type: 'button', class: 'btn', 'data-k': 'bahas-ke-belum', onclick: () => { const i = daftar.findIndex(x => !ctx.sudah.has(x.id)); akhir = false; pos = i < 0 ? 0 : i; t0 = Date.now(); segarkan(); } }, 'Ke soal yang belum dibahas'));
    }
    function segarkan() {
      if (!dlg) return;
      const jd = dlg.querySelector('.dlg-head h2'); const body = dlg.querySelector('.dlg-body');
      if (akhir) {
        if (jd) jd.textContent = 'Bahas selesai';
        if (body) { body.replaceChildren(isiAkhir()); body.scrollTop = 0; }
        posisi.textContent = 'Bahas ' + n + ' dari ' + n;
        tSebelum.disabled = false;
        tLanjut.textContent = ctx.onUlangi ? 'Ulangi ' + ctx.nUlangi + ' soal yang salah' : 'Tutup';
        tLanjut.setAttribute('data-k', ctx.onUlangi ? 'bahas-ulangi' : 'bahas-tutup');
        return;
      }
      const x = daftar[pos];
      if (jd) jd.textContent = 'Bahas ' + x.id;
      if (body) { body.replaceChildren(isiSoal(x)); body.scrollTop = 0; }
      posisi.textContent = 'Bahas ' + (pos + 1) + ' dari ' + n;
      tSebelum.disabled = pos === 0;
      tLanjut.textContent = 'Sudah dibahas, lanjut'; tLanjut.setAttribute('data-k', 'bahas-lanjut');
      tampilJam();
    }
    function geser(d) {
      if (akhir) { if (d < 0) { akhir = false; pos = n - 1; t0 = Date.now(); segarkan(); } return; }
      const baru = pos + d; if (baru < 0 || baru >= n) return;
      catatWaktu(); pos = baru; segarkan();
    }
    function lanjut() {
      if (akhir) { if (dlg) dlg.close('selesai'); if (ctx.onUlangi) ctx.onUlangi(); return; }
      catatWaktu(); ctx.tandai(daftar[pos].id, true);
      if (pos < n - 1) { pos++; segarkan(); } else { akhir = true; segarkan(); }
      try { tLanjut.focus({ preventScroll: true }); } catch (e) {}
    }
    dlg = UKP.dialog({ judul: 'Bahas ' + daftar[pos].id, ukuran: 'lg', kelas: 'tim-dlg eval-bahas-dlg', isi: () => isiSoal(daftar[pos]), kaki,
      onClose: () => { clearInterval(detak); detak = null; } });
    if (dlg) {
      dlg.setAttribute('data-k', 'mode-bahas');
      dlg.addEventListener('keydown', e => {
        if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
        const t = e.target; if (t && t.closest && t.closest('input, textarea, select, [contenteditable]')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); if (akhir) return; geser(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); geser(-1); }
        else if (e.key === 'Enter') { if (t && t.closest && t.closest('button, a, summary')) return; e.preventDefault(); lanjut(); }
      });
      detak = setInterval(() => { if (!dlg.isConnected) { clearInterval(detak); return; } tampilJam(); }, 1000);
    }
    segarkan();
    return dlg;
  }

  // daftar "Sesi terakhir" di bagian lokal Dasbor tim (v8.1: jenis Latihan / Ujian tim · judul; ujian: rata-rata skor dan jumlah lulus)
  function daftarSesiNode() {
    const arr = daftarSesi().slice(0, SESI_MAKS_DAFTAR); if (!arr.length) return null;
    return h('div', { class: 'stack-sm eval-sesi-bagian' }, h('h3', { class: 'eval-sesi-judul' }, 'Sesi terakhir'),
      h('ul', { class: 'eval-sesi', 'aria-label': 'Sesi latihan bersama dan ujian tim terakhir' }, arr.map(x => {
        const ev = evaluasi(x); const mulaiT = ms(x.mulai); const r = ringkasSesi(x, ev);
        return h('li', { 'data-mode': r.ujian ? 'ujian' : 'latihan' }, UKP.link([
          h('span', { class: 'eval-sesi-kop' }, h('span', { class: 'eval-sesi-jenis' }, r.jenis), x.selesai ? null : UKP.c.pill('belum selesai', 'warn')),
          h('span', { class: 'meta' }, h('span', { class: 'eval-sesi-tgl' }, tanggalSesi(mulaiT)), ' · ' + r.meta),
          UKP.icon('chevron-kanan', 'chev', true)], 'tim', { anggota: 'sesi:' + x.id }, 'eval-sesi-baris'));
      })));
  }

  // "Ulangi N soal yang salah" dari sesi tersimpan: latihan bersama dengan peserta sesi itu (daftar peserta Latihan bersama ikut diganti), sesi baru
  function ulangiSesi(sesi) {
    const L = UKP.belajar; const K = UKP.konten;
    if (!L || !K || typeof K.soal !== 'function') return null;
    return ids => {
      const ada = (ids || []).filter(id => K.soal(id)); if (!ada.length) return;
      const s = UKP.store.get(); const maks = L.MAKS_PESERTA || 12;
      const peserta = (Array.isArray(sesi.peserta) ? sesi.peserta : []).filter(n => typeof n === 'string' && n.trim()).slice(0, maks);
      if (peserta.length) { s.bersama = { aktif: true, peserta }; UKP.store.save(); }
      UKP.go('latih', { ids: ada.join(','), mulai: true });
    };
  }

  // halaman #tim/sesi:<id>
  function halamanSesi(id) {
    const page = h('div', { class: 'page halaman-tim tim-sesi' });
    const sesi = sesiDari(id);
    const crumbs = () => [{ teks: 'Dasbor tim', view: 'tim' }, { teks: 'Evaluasi sesi' }];
    const tidakAda = (judul, teks) => [UKP.c.kop({ crumbs: crumbs(), judul }), UKP.c.kosong(judul === 'Sesi tidak ditemukan' ? 'Sesi ini tidak tersedia' : 'Belum tersedia', teks, UKP.link('Kembali ke Dasbor tim', 'tim', null, 'btn'))];
    if (!sesi) {
      // v8.2: rekaman belum ada di perangkat ini dan perangkat ada di room → ambil dari room (mintaSesi), lalu gambar ulang
      const r = ruangR();
      if (r && infoRoom() && typeof r.mintaSesi === 'function') {
        page.append(UKP.c.kop({ crumbs: crumbs(), judul: 'Mengambil hasil dari room…' }), h('p', { class: 'meta', role: 'status', 'data-k': 'ambil-room' }, 'Sebentar, hasil sesi ini sedang diambil.'));
        Promise.resolve().then(() => r.mintaSesi(id)).catch(() => null).then(x => {
          if (!page.isConnected && !page.parentNode) { /* halaman sudah ditinggal */ }
          let s2 = sesiDari(id);
          if (!s2 && x) { try { const L = UKP.belajar; if (L && typeof L.terimaSesiRoom === 'function') L.terimaSesiRoom(x); } catch (e) { console.error(e); } s2 = sesiDari(id) || Object.assign({}, x, { sumber: 'room' }); }
          const fokusDiSini = !document.activeElement || document.activeElement === document.body || page.contains(document.activeElement);
          page.replaceChildren(...(s2 ? isiSesi(s2) : tidakAda('Hasil belum tersedia', 'Hasil ini belum tersedia di room. Minta pemimpin membuka aplikasinya.')));
          const h1 = page.querySelector('h1'); if (h1 && fokusDiSini && page.isConnected) { if (!h1.hasAttribute('tabindex')) h1.setAttribute('tabindex', '-1'); UKP.fokus(h1); }
        });
        return { node: page };
      }
      page.append(...tidakAda('Sesi tidak ditemukan', 'Sesi mungkin sudah dihapus atau tercatat di perangkat lain.'));
      return { node: page };
    }
    page.append(...isiSesi(sesi));
    return { node: page };
  }
  function isiSesi(sesi) {
    const ev = evaluasi(sesi); const mulaiT = ms(sesi.mulai);
    const anggota = versiAnggota(sesi);
    const dariRoom = sesi.sumber === 'room';
    const hapus = h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'hapus-sesi', onclick: async () => {
      const r = ruangR(); const inf = infoRoom(); const tuan = !!(inf && inf.peran === 'tuan');
      let diRoom = false; if (tuan) { try { diRoom = (r.riwayat() || []).some(e => e && e.id === sesi.id); } catch (e) { diRoom = false; } }
      const teks = dariRoom && !tuan
        ? 'Salinan ' + (adalahUjian(ev) ? 'hasil ujian tim ' : 'evaluasi ') + tanggalSesi(mulaiT) + ' di perangkat ini dihapus. Hasil di room tidak ikut terhapus.'
        : 'Rekaman ' + (adalahUjian(ev) ? 'ujian tim ' : 'sesi ') + tanggalSesi(mulaiT) + ' akan dihapus dari perangkat ini. Jawaban per peserta di Dasbor tim tetap tersimpan. Tindakan ini tidak dapat dibatalkan.';
      const ya = await UKP.konfirmasi(dariRoom && !tuan ? 'Hapus salinan di perangkat ini?' : 'Hapus sesi ini?', teks, { ya: 'Hapus', bahaya: true });
      if (!ya) return;
      let jugaRoom = false;
      if (diRoom) jugaRoom = await UKP.konfirmasi('Hapus juga dari room?', 'Anggota tidak bisa lagi membuka hasil ini dari room. Salinan yang sudah ada di HP mereka tetap ada.', { ya: 'Hapus dari room', tidak: 'Biarkan di room', bahaya: true });
      hapusSesi(sesi.id);
      if (jugaRoom) { try { r.hapusSesi(sesi.id); } catch (e) { console.error(e); } }
      UKP.toast(jugaRoom ? 'Sesi dihapus dari perangkat ini dan dari room.' : 'Sesi dihapus.', { lintasRute: true }); UKP.go('tim', {}, { replace: true }); } }, UKP.icon('hapus', null, true), dariRoom && !anggota ? 'Hapus sesi' : dariRoom ? 'Hapus salinan' : 'Hapus sesi');
    // v8.1: sesi bermode ujian → "Hasil ujian tim" + judul ujian; v8.2: pill "dari room"
    const ujian = adalahUjian(ev);
    // v8.2 V4: anggota room kembali ke layar room (bukan Dasbor tim yang khusus pemimpin)
    const keRoom = anggota && dariRoom && !!infoRoom();
    const cr = [keRoom ? { teks: 'Room tim', view: 'room' } : { teks: 'Dasbor tim', view: 'tim' }, { teks: ujian ? 'Hasil ujian tim' : 'Evaluasi sesi' }];
    return [UKP.c.kop({ crumbs: cr, eyebrow: tanggalSesi(mulaiT), judul: ujian ? 'Hasil ujian tim' : 'Evaluasi tim',
      meta: [dariRoom ? UKP.c.pill('dari room', 'nila', null, { 'data-k': 'pill-dari-room' }) : null, h('span', { class: 'meta' }, (ujian && ev.judul ? ev.judul + ' · ' : '') + metaSesi(ev, sesi) + (sesi.tingkat ? ' · Tingkat ' + sesi.tingkat : '') + (sesi.selesai ? '' : ' · belum selesai'))].filter(Boolean) }),
      evaluasiBersama(sesi, { tanpaKop: true, diDasbor: true, onTutup: () => keRoom ? UKP.go('room') : UKP.go('tim', {}), labelTutup: keRoom ? 'Kembali ke room' : 'Kembali ke Dasbor tim', onUlangi: anggota ? null : ulangiSesi(sesi) }),
      h('div', { class: 'btn-row' }, hapus)];
  }

  // ================= halaman detail anggota =================
  function halamanDetail(id) {
    const page = h('div', { class: 'page halaman-tim tim-detail' });
    const wadah = h('div'); page.appendChild(wadah);
    // keadaan tampilan jawaban per soal: bertahan saat isi digambar ulang oleh snapshot/aliran baru
    const ui = { tab: 'salah', kel: null, batasSalah: 0, batasSemua: 0, gambar: () => gambar() };
    // peserta latihan bersama (id 'lokal:<nama>'): dokumen dari perangkat ini, tanpa syarat sambungan/peran tim
    const lokal = adalahLokal(id); const namaLokal = lokal ? id.slice(ID_LOKAL.length) : '';
    function gambar() {
      if (!lokal && st.peran === 'server') {
        gantiIsi(wadah, UKP.frag(UKP.c.kop({ crumbs: [{ teks: 'Dasbor tim', view: 'tim' }, { teks: 'Anggota' }], judul: 'Dasbor tim belum tersedia' }), UKP.c.sect({ judul: infoTim().galat === 'sesi-berakhir' ? 'Sesi berakhir' : 'Server tim tidak terjangkau', isi: statusServer() })));
        return;
      }
      if (!lokal && st.peran === 'anggota') {
        const srv = infoTim().server;
        gantiIsi(wadah, UKP.frag(UKP.c.kop({ crumbs: [{ teks: 'Dasbor tim', view: 'tim' }, { teks: 'Anggota' }], judul: srv ? 'Khusus admin tim' : 'Khusus pemimpin tim' }),
          UKP.c.kosong(srv ? 'Hasil anggota hanya untuk admin tim' : 'Hasil anggota hanya untuk pemimpin tim', srv ? 'Halaman ini hanya dapat dibuka oleh admin tim di server ini.' : 'Halaman ini hanya dapat dibuka oleh pemilik halaman (pemimpin tim).', UKP.link('Kembali ke Dasbor tim', 'tim', null, 'btn'))));
        return;
      }
      const n = lokal ? normalLokal(dokLokal(namaLokal), namaLokal) : anggota().find(a => a.id === id);
      const memuat = !lokal && !n && (st.koneksi === 'memuat' || st.peran === 'memuat');
      const pemilik = (() => { const nm = (stateApp().profil || {}).nama; return typeof nm === 'string' && nm.trim() ? nm.trim() : 'ini'; })();
      const kop = UKP.c.kop({ crumbs: [{ teks: 'Dasbor tim', view: 'tim' }, { teks: n ? n.nama : lokal ? 'Peserta' : 'Anggota' }],
        eyebrow: lokal ? 'Latihan bersama · dicatat di perangkat ' + pemilik : null,
        judul: n ? n.nama + (n.saya ? ' (Anda)' : '') : memuat ? 'Anggota' : lokal ? 'Peserta tidak ditemukan' : 'Anggota tidak ditemukan',
        meta: n && lokal ? h('span', { class: 'meta' }, n.aktivitas ? 'terakhir aktif ' + relatif(n.aktivitas) : 'belum ada jawaban', ' · ', tandaSumber(n))
          : n ? h('span', { class: 'meta' }, [n.tingkat ? 'Tingkat ' + n.tingkat : null, 'terakhir aktif ' + relatif(n.aktivitas), sumberTeks(n)].filter(Boolean).join(' · '), n.online ? ' · ' : null, tandaOnline(n)) : null });
      if (!n) {
        gantiIsi(wadah, UKP.frag(kop, memuat ? h('p', { class: 'meta' }, 'Menyambungkan…')
          : lokal ? UKP.c.kosong('Data peserta ini tidak tersedia', 'Nama ini belum tercatat dalam latihan bersama di perangkat ini, atau datanya sudah dihapus.', UKP.link('Kembali ke Dasbor tim', 'tim', null, 'btn'))
          : UKP.c.kosong('Data anggota ini tidak tersedia', 'Anggota mungkin belum membagikan hasil, atau kode hasilnya sudah dihapus dari daftar.', UKP.link('Kembali ke Dasbor tim', 'tim', null, 'btn'))));
        perbaruiJudul();
        return;
      }
      const f = n.fokus;
      // bila jawaban per soal tersedia, banner Fokus memakai sumber yang sama dengan kartu "Kelompok terlemah" (latihan + simulasi, 30 hari)
      ui.analisis = n.jawaban && n.jawaban.length ? analisisJawaban(n.jawaban) : null;
      const klJ = ui.analisis && ui.analisis.kelLemah[0];
      const asalJw = n.lokal ? 'jawaban latihan bersama' : 'jawaban latihan dan simulasi 30 hari terakhir';
      const rek = ui.analisis ? (klJ && klJ.n >= 5 && klJ.p < 80
        ? UKP.c.ringkasStatus(h('span', null, h('strong', null, 'Fokus: ' + klJ.kode + ' ' + namaKel(klJ.kode) + ' (' + klJ.p + '% dari ' + klJ.n + ' soal)'), '. Akurasi kelompok ini paling rendah pada ' + asalJw + '; sarankan latihan terarah dan bahas soal yang keliru bersama.'))
        : UKP.c.ringkasStatus(klJ && klJ.n >= 5 ? 'Belum ada kelompok yang menonjol lemah pada ' + asalJw + '.' : 'Jawaban per kelompok masih sedikit (kurang dari 5 soal); lihat kartu Ringkasan masalah untuk data awal.'))
        : f ? UKP.c.ringkasStatus(h('span', null, h('strong', null, 'Fokus: ' + f.kode + ' ' + namaKel(f.kode) + ' (' + f.p + '%)'), '. Akurasi kelompok ini paling rendah dalam 14 hari terakhir; sarankan latihan terarah dan bahas soal yang keliru bersama.'))
        : UKP.c.ringkasStatus(n.total ? 'Belum ada kelompok yang menonjol lemah dari data 14 hari terakhir.' : 'Anggota ini belum mengerjakan latihan dalam 14 hari terakhir.');
      const kel = Object.keys(n.perKelompok).map(k => ({ kode: k, n: Number(n.perKelompok[k] && n.perKelompok[k].n) || 0, p: pKel(n.perKelompok[k]) })).filter(x => x.n > 0).sort((p, q) => p.kode.localeCompare(q.kode, 'id', { numeric: true }));
      const kelNode = kel.length ? UKP.c.daftarSkor(kel.map(x => ({ kode: x.kode, judul: namaKel(x.kode), nilai: x.p, satuan: '%', meta: x.n + ' soal', tahap: x.n < 5 ? 'awal' : null })), 'Akurasi per kelompok')
        : h('p', { class: 'meta' }, 'Belum ada latihan dalam 14 hari terakhir.');
      const top = n.topikLemah.slice(0, 8);
      const topNode = top.length ? UKP.c.daftarSkor(top.map(x => ({ kode: x.id, judul: judulTopik(x.id) || x.id, nilai: pKel(x), satuan: '%', meta: (Number(x.n) || 0) + ' soal', view: UKP.konten && UKP.konten.topik(x.id) ? 'topik' : null, params: { id: x.id }, tahap: (Number(x.n) || 0) < 5 ? 'awal' : null })), 'Topik terlemah')
        : h('p', { class: 'meta' }, 'Belum cukup data per topik.');
      const simNode = n.simulasi.length ? UKP.c.tabelWrap('Riwayat simulasi', h('table', { class: 'tabel' }, h('caption', { class: 'visually-hidden' }, 'Riwayat simulasi ' + n.nama),
        h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Tanggal'), h('th', { scope: 'col' }, 'Tingkat'), h('th', { scope: 'col', class: 'num' }, 'Skor'), h('th', { scope: 'col', class: 'num' }, 'Benar · salah · tidak dijawab'), h('th', { scope: 'col', class: 'num' }, 'Menit'), h('th', { scope: 'col' }, 'Status'))),
        h('tbody', null, n.simulasi.map(x => h('tr', null, h('td', null, tgl(ms(x.selesai))), h('td', null, x.tingkat || '–'), h('td', { class: 'num' }, String(Math.round(Number(x.skor) || 0))),
          h('td', { class: 'num' }, (x.benar || 0) + ' · ' + (x.salah || 0) + ' · ' + (x.kosong || 0)), h('td', { class: 'num' }, x.menit != null ? String(Math.round(x.menit)) : '–'),
          h('td', null, lulusSim(x) ? 'Memenuhi batas 60' : 'Belum lulus')))))) : h('p', { class: 'meta' }, 'Belum ada simulasi.');
      const hapus = n.lokal ? h('button', { type: 'button', class: 'btn btn-ghost', 'data-k': 'hapus-lokal', onclick: async () => {
        const ya = await UKP.konfirmasi('Hapus data peserta ini?', 'Semua jawaban latihan bersama milik ' + n.nama + ' di perangkat ini akan dihapus. Tindakan ini tidak dapat dibatalkan.', { ya: 'Hapus', bahaya: true });
        if (!ya) return; hapusPesertaLokal(namaLokal); UKP.toast('Data ' + n.nama + ' dihapus.', { lintasRute: true }); UKP.go('tim', {}, { replace: true }); } }, UKP.icon('hapus', null, true), 'Hapus data peserta ini')
        : n.sumber === 'kode' ? h('button', { type: 'button', class: 'btn btn-ghost', onclick: async () => {
        const ya = await UKP.konfirmasi('Hapus dari daftar?', 'Hasil ' + n.nama + ' dari kode hasil akan dihapus dari perangkat ini. Anda dapat menempel kodenya lagi kapan saja.', { ya: 'Hapus', bahaya: true });
        if (!ya) return; hapusManual(n.id); UKP.toast('Hasil ' + n.nama + ' dihapus dari daftar.'); UKP.go('tim', {}, { replace: true }); } }, UKP.icon('hapus', null, true), 'Hapus dari daftar')
        : n.sumber === 'langsung' && typeof T().hapusTerima === 'function' ? h('button', { type: 'button', class: 'btn btn-ghost', onclick: async () => {
          const ya = await UKP.konfirmasi('Hapus dari dasbor?', 'Ringkasan ' + n.nama + ' yang diterima langsung akan dihapus dari dasbor ini (perangkat ini dan penyimpanan tim). Bila anggota masih membagikan hasil dan sedang online, ringkasannya akan masuk lagi.', { ya: 'Hapus', bahaya: true });
          if (!ya) return; T().hapusTerima(n.id); UKP.toast('Hasil ' + n.nama + ' dihapus dari dasbor.'); UKP.go('tim', {}, { replace: true }); } }, UKP.icon('hapus', null, true), 'Hapus dari dasbor') : null;
      gantiIsi(wadah, UKP.frag(kop, h('div', { class: 'stack' }, rek,
        h('div', { class: 'pita-stat tim-pita' },
          tile({ label: 'Latihan 7 hari', nilai: n.soal7 != null ? n.soal7 + ' soal' : n.sesi7 + ' sesi', sub: n.soal7 != null ? (n.hari7 || 0) + ' hari berlatih' + (n.sesi7 ? ' · ' + n.sesi7 + ' sesi harian' : '') : null }),
          tile({ label: 'Akurasi 7 hari', nilai: n.akurasi7 == null ? null : n.akurasi7 + '%', sub: n.akurasi7 == null ? 'belum latihan' : (n.lokal ? 'batas aman 60%' : 'latihan saja · batas aman 60%') }),
          tile({ label: 'Soal latihan', nilai: String(n.total), sub: n.benar + ' benar' }),
          tile({ label: n.lokal ? 'Berlatih 14 hari' : 'Hadir 14 hari', nilai: n.hadir14 + ' hari', sub: n.rangkaian ? 'rangkaian ' + n.rangkaian + ' hari' : null })),
        bagianJawaban(n, ui),
        UKP.c.sect({ judul: 'Akurasi per kelompok', meta: 'ringkasan latihan · 14 hari terakhir', isi: kelNode }),
        UKP.c.sect({ judul: 'Topik terlemah', meta: 'ringkasan latihan · 14 hari terakhir', isi: topNode }),
        n.lokal ? null : UKP.c.sect({ judul: 'Riwayat simulasi', meta: n.simulasi.length ? n.simulasi.length + ' terakhir' : null, isi: simNode }),
        hapus ? h('div', { class: 'btn-row' }, hapus) : null)));
      perbaruiJudul();
    }
    // judul tab dan judul ringkas topbar mengikuti h1 saat digambar ulang (data anggota tiba setelah render pertama)
    function perbaruiJudul() {
      if (!page.isConnected) return;
      const h1 = page.querySelector('h1'); if (!h1) return;
      document.title = (h1.textContent || 'MABAR UKP').trim() + ' · MABAR UKP';
      if (UKP.perbaruiJudulRingkas) UKP.perbaruiJudulRingkas();
    }
    gambar();
    st.pendengar.add(gambar);
    // peserta lokal tidak menunggu sambungan tim (tanpa mode Langsung/SSE)
    if (!lokal && st.koneksi === 'memuat' && !T().cadangan) mulai().then(() => { if (page.isConnected) gambar(); });
    else if (T().cadangan) { st.koneksi = 'mati'; st.peran = 'lokal'; }
    return { node: page, unmount: () => st.pendengar.delete(gambar) };
  }

  UKP.views.tim = function (params) {
    const id = params && params.anggota ? String(params.anggota) : '';
    if (id.indexOf(ID_SESI) === 0) return halamanSesi(id.slice(ID_SESI.length));
    return id ? halamanDetail(id) : halamanDaftar();
  };
  // untuk uji: urutan dan CSV tanpa DOM
  UKP.views.tim._uji = { normal, urutkan, csv, keP, sumberTeks, normalJawaban, analisisJawaban, petaSimulasi, csvJawaban, labelPola, pesertaDari, dokDari, normalLokal, adalahLokal, normalSesi, evaluasiLokal, csvSesi, daftarSesi, ringkasSesi, kalimatTempo, siapaMemilih, menitSesi, SARING_MATRIKS, MODE_JAWAB, rekapAnggota, angkaTim, versiAnggota, teksTerimaKasih, bahasLagi, sebaranTanpaNama, KUNCI_PERINGKAT };
  if (UKP.viz && UKP.viz.gaya) UKP.viz.gaya('ukp-tim-room', ':where(.tim-sumber){color:var(--muted)}'
    + ':where(.tim-online){display:inline-flex;align-items:center;gap:4px;font-size:var(--fs-meta,.8125rem);color:var(--muted);white-space:nowrap}');
})(typeof window !== 'undefined' ? window : globalThis);
