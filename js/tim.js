/* MABAR UKP — dasbor tim: ringkasan hasil latihan dan simulasi anggota ke penyimpanan bersama Artifact (capability db + user).
   Satu dok per anggota di koleksi 'tim' (id dok = id akun dari user.id()), ditimpa utuh. Tidak ada teks bebas selain nama. Sejak v7.7
   ringkasan membawa field jawaban: jawaban per soal yang ringkas (id soal, topik, opsi, benar, detik, waktu, mode, id simulasi, keyakinan;
   maks. MAKS_JAWAB entri terbaru dalam HARI_JAWAB hari, terbaru dulu, seluruh ringkasan ≤ MAKS_BYTE) agar admin melihat salah di mana.
   Jawaban per soal hanya lewat db/server/kode hasil; presence/emit room tidak membawanya (batas 4 KiB). Tanpa capability (berkas offline, emulator, tidak masuk, tidak diundang) semua jalur diam: status 'mati'/'tanpa-akun', dan anggota
   bisa menyalin "kode hasil" (UKP1.…) untuk ditempel pemimpin; kode yang ditempel disimpan di localStorage 'ukp.tim.manual' perangkat pemimpin.
   Aturan db saat publish: [{ path: 'tim', read: 'owner', write: 'owner' }, { path: 'tim/{self}', write: 'interact' }] — hanya pemilik artifact
   (pemimpin tim) yang membaca seluruh koleksi; anggota (Kontributor) hanya menulis, dan karena itu juga membaca, dok miliknya sendiri.
   Jalur kedua, capability 'room' (deklarasi: room: { topics: { hasil: 'interact' } }): anggota yang tidak dapat menulis db (tamu berakses Viewer,
   tanpa db) memasang presence { ukp, id, ringkasan } — id anonim stabil 'ukp.tim.id' — dan emit('hasil') saat sesi selesai (bila diizinkan).
   Pemimpin (pemilik, tersambung db) memasang presence { ukp, pemimpin: true }, menerima presence/hasil, menyimpannya di 'ukp.tim.terima', dan
   menulis dok 'tim/room_<Sender.by>' (identitas dijamin platform) atau 'tim/anon_<id>' (sumber: 'room') hanya bila isinya berubah, dengan batas
   jumlah dok (MAKS_ANON), batas laju per id, cap waktu dijepit, dan id anonim diikat ke peer pertama. Berhenti berbagi di jalur room memasang
   presence { ukp, id, berhenti: true }; pemimpin yang melihatnya menghapus entri lokal dan dok db anggota itu. Catatan jujur: pengunjung yang tidak masuk ke claude.ai tidak dapat
   tersambung ke room maupun db (claude.use('room') → null); bagi mereka hanya kode hasil. Presence terlihat oleh semua peserta room (platform
   membagikannya), jadi isinya hanya ringkasan pengirim sendiri dan aplikasi tidak pernah menampilkan data anggota lain kepada anggota.
   Jalur ketiga dan utama bila tersedia, server sendiri (deploy/server.js): saat boot di http(s) tanpa window.claude, GET api/saya (timeout 3 dtk,
   header X-Requested-With: UKP, cookie sesi; batas 8 dtk). Bila 200 → mode 'server': kirimRingkasan = PUT api/hasil (debounce sama), berhenti berbagi =
   DELETE api/hasil, admin memantau GET api/tim + aliran SSE api/tim/aliran (dibaca lewat fetch stream agar header ikut; cadangan polling
   20 dtk). Nama yang tampil di dasbor = nama akun server (ditetapkan server). Dalam mode server window.claude tidak pernah dipanggil.
   Penanda server tim: cookie non-HttpOnly 'ukp_srv=1' (diset server saat masuk). Bila ada, aplikasi tidak pernah jatuh ke jalur Claude:
   server lambat/mati → status 'server-tak-terjangkau' dan deteksi diulang (5, 15, 30, lalu tiap 60 dtk, juga saat tab terlihat atau
   peristiwa 'online'); 401 → 'mati' + galat 'sesi-berakhir'. Tanpa penanda, hanya respons yang jelas bukan server tim (404, HTML, JSON tanpa
   server:true) yang mengalihkan ke jalur Claude; waktu habis tetap dicoba ulang di latar.
   Hemat probe (v8.1.1): tanpa penanda, host statis (*.github.io, *.netlify.app, *.pages.dev, *.vercel.app) tidak pernah meminta api/saya,
   dan hasil "jelas bukan server tim" di host lain diingat 30 hari di localStorage 'ukp.tim.bukanServer' (cap waktu) agar tidak ada 404 tiap pemuatan.
   Pemilik progres: profil.akunServer diisi akun server pertama yang tersambung. Bila akun yang masuk berbeda (perangkat bersama), tidak
   ada yang dikirim (galat 'akun-berbeda', info().akunBeda) sampai pengguna memilih gantiPemilikProgres() (arsipkan progres akun lama di
   'ukp.arsip:<akun>', pulihkan arsip akun ini bila ada, atau mulai baru) atau keluar.
   Penghapusan tertunda: berbagi dimatikan tetapi DELETE gagal/server tak terjangkau → 'ukp.tim.hapusTertunda' = nama akun (atau true);
   dicoba lagi saat tersambung (pasangServer) dan pada detak.
   Prioritas: server > db/room Claude > kode hasil. */
(function (root) {
  'use strict';
  const UKP = root.UKP = root.UKP || {};
  const U = UKP.util || {};
  const KOLEKSI = 'tim';
  const KUNCI_MANUAL = 'ukp.tim.manual';
  const KUNCI_KIRIM = 'ukp.tim.kirim';      // { uid, hash, pada } kiriman terakhir yang berhasil (per perangkat)
  const KUNCI_LOKAL = 'ukp.tim.idLokal';    // id acak perangkat untuk kode hasil tanpa akun
  const KUNCI_ID = 'ukp.tim.id';           // id anonim stabil (uuid) untuk jalur room
  const KUNCI_HAPUS = 'ukp.tim.hapusTertunda'; // penghapusan ringkasan di server yang belum berhasil (nama akun, atau true)
  const KUNCI_TERIMA = 'ukp.tim.terima';   // ringkasan yang diterima pemimpin lewat room (perangkat pemimpin)
  const TOPIK_HASIL = 'hasil';
  const JEDA_ROOM = 1500, MAKS_ROOM = 3800; // debounce presence; batas byte muatan (room: 4 KiB per presence/emit)
  const MAKS_ANON = 100;                     // batas jumlah dok room (anon_/room_) yang ditulis pemimpin ke db
  const TOKEN_ANON = 4, ISI_ANON = 10000;    // batas laju tulis db per anggota room: 4 tulis beruntun, lalu 1 per 10 dtk
  const MAJU_MAKS = 5 * 60 * 1000;           // cap waktu dari room paling lambat 5 menit di depan jam pemimpin
  const PREFIKS = 'UKP1.';
  const JEDA_KIRIM = 5000;
  const BATAS_LULUS = 60;
  const MAKS_SIM = 10, MAKS_LEMAH = 8, MAKS_MANUAL = 100;
  const MAKS_JAWAB = 400, HARI_JAWAB = 30, MAKS_BYTE = 120 * 1024; // jawaban per soal: entri, jendela hari, batas ukuran seluruh ringkasan
  const MODE_JAWAB = ['latihan', 'simulasi', 'sesi', 'cek'];
  const YAKIN = ['yakin', 'ragu', 'menebak'];
  // konteks log jawaban (learn.js) → mode di ringkasan; 'diagnosis' adalah sesi (Beranda), selain itu latihan
  const MODE_DARI = { latih: 'latihan', sesi: 'sesi', diagnosis: 'sesi', cek: 'cek' };

  // ---------- util tanggal (batas hari 03.00, sama dengan core) ----------
  const isoTgl = d => { const z = n => String(n).padStart(2, '0'); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); };
  const hariDari = ts => { if (typeof U.hariDari === 'function') return U.hariDari(ts); const d = new Date(ts); if (d.getHours() < 3) d.setDate(d.getDate() - 1); return isoTgl(d); };
  const tambahHari = (iso, n) => { if (typeof U.tambahHari === 'function') return U.tambahHari(iso, n); const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); return isoTgl(d); };
  const isoWaktu = ms => { const d = new Date(ms); return isNaN(d) ? null : d.toISOString(); };
  const bulat = (x, n) => { const f = Math.pow(10, n || 0); return Math.round(x * f) / f; };
  const isObj = x => x != null && typeof x === 'object' && !Array.isArray(x);
  // v9.5.4 S4: jawaban "Tidak tahu" (opsi '-') ikut dihitung sebagai soal yang dijawab salah, sama dengan Kemajuan, kartu Tren, dan daftar jawaban
  const latihanSaja = j => isObj(j) && j.konteks !== 'simulasi' && typeof j.pada === 'number';
  const benarLatih = j => !!j.benar && j.opsi !== '-';
  const kosongJawab = v => !v || v === '-' || v === 'kosong';

  function rangkaianDari(hadir, hariIni) {
    let n = 0; let t = hariIni; if (!hadir[t]) t = tambahHari(t, -1);
    for (let i = 0; i < 4000 && hadir[t]; i++) { if (hadir[t].status === 'HADIR') n++; t = tambahHari(t, -1); }
    return n;
  }

  // ---------- ringkasan (murni: dari state, tanpa DOM) ----------
  // opsi: { kini?: ms, nama?: string, versiApp?: string }
  function ringkasan(s, opsi) {
    opsi = opsi || {}; s = s || {};
    const kini = typeof opsi.kini === 'number' ? opsi.kini : Date.now();
    const hariIni = hariDari(kini);
    const awal7 = tambahHari(hariIni, -6), awal14 = tambahHari(hariIni, -13);
    const p = isObj(s.profil) ? s.profil : {};
    const jawaban = Array.isArray(s.jawaban) ? s.jawaban : [];
    const latih = jawaban.filter(latihanSaja);
    let benar = 0, n7 = 0, b7 = 0, terakhir = 0; const perKel = {}, perTopik = {}, hariLatih = new Set();
    for (const j of latih) {
      const jb = benarLatih(j);
      if (jb) benar++;
      if (j.pada > terakhir) terakhir = j.pada;
      const d = hariDari(j.pada);
      if (d >= awal7 && d <= hariIni) { n7++; if (jb) b7++; hariLatih.add(d); }
      if (d >= awal14 && d <= hariIni) {
        const kode = String(j.kode || String(j.soal || '').split('-')[0] || '');
        if (KODE_RE.test(kode)) { const x = perKel[kode] = perKel[kode] || { n: 0, benar: 0 }; x.n++; if (jb) x.benar++; }
        if (j.topik && TOPIK_RE.test(String(j.topik))) { const t = perTopik[j.topik] = perTopik[j.topik] || { id: String(j.topik), n: 0, benar: 0 }; t.n++; if (jb) t.benar++; }
      }
    }
    const lemah = Object.values(perTopik).filter(t => t.n >= 3 && t.benar < t.n)
      .sort((a, b) => a.benar / a.n - b.benar / b.n || b.n - a.n || (a.id < b.id ? -1 : 1)).slice(0, MAKS_LEMAH);
    // sesi7 = sesi harian Beranda; hari7 = hari unik berlatih (sesi harian atau Latih soal) dalam 7 hari; soal7 = jumlah soal latihan 7 hari
    const sesiHarian = (Array.isArray(s.sesi) ? s.sesi : []).filter(x => isObj(x) && typeof x.tgl === 'string' && x.tgl >= awal7 && x.tgl <= hariIni);
    const sesi7 = sesiHarian.length; sesiHarian.forEach(x => hariLatih.add(x.tgl));
    const simulasi = (Array.isArray(s.simulasi) ? s.simulasi : []).filter(x => isObj(x) && x.selesai).slice(-MAKS_SIM).map(x => {
      const ids = Array.isArray(x.soalIds) ? x.soalIds : []; const jw = isObj(x.jawaban) ? x.jawaban : {};
      const jumlah = typeof x.total === 'number' ? x.total : ids.length;
      const kosong = ids.filter(id => kosongJawab(jw[id])).length;
      const bnr = typeof x.benar === 'number' ? x.benar : 0;
      const pk = {}; if (isObj(x.perKel)) for (const k of Object.keys(x.perKel)) { const v = x.perKel[k]; if (KODE_RE.test(k) && isObj(v)) pk[k] = { n: v.total || 0, benar: v.benar || 0 }; }
      const selesai = typeof x.selesai === 'number' ? x.selesai : Date.parse(x.selesai);
      const pakai = typeof x.mulai === 'number' && selesai ? Math.max(1, Math.round((selesai - x.mulai) / 60000)) : (x.menit || 0);
      const skor = typeof x.skor === 'number' ? x.skor : (jumlah ? bulat(bnr / jumlah * 100, 1) : 0);
      return { id: String(x.id || '').slice(0, 40), format: String(x.format || ''), kode: x.kode ? String(x.kode) : null, tingkat: ['A', 'B', 'C'].includes(x.tingkat) ? x.tingkat : (p.tingkat || 'A'),
        selesai: isoWaktu(selesai), skor, benar: bnr, salah: Math.max(0, jumlah - bnr - kosong), kosong, jumlah,
        menit: x.menit ? Math.min(pakai, x.menit) : pakai, lulus: skor >= BATAS_LULUS, perKelompok: pk };
    });
    const hadir = isObj(s.hadir) ? s.hadir : {};
    const hari14 = Object.keys(hadir).filter(d => d >= awal14 && d <= hariIni && isObj(hadir[d]) && hadir[d].status === 'HADIR').length;
    const nama = String((typeof p.nama === 'string' && p.nama.trim()) || opsi.nama || '').trim().slice(0, 40);
    return pangkasJawaban({
      nama, tingkat: ['A', 'B', 'C'].includes(p.tingkat) ? p.tingkat : 'A', diperbarui: isoWaktu(kini), versiApp: String(opsi.versiApp || UKP.versi || ''),
      latihan: { total: latih.length, benar, akurasi7: n7 ? bulat(b7 / n7, 3) : null, sesi7, soal7: n7, hari7: hariLatih.size, terakhir: terakhir ? isoWaktu(terakhir) : null, perKelompok: perKel, perTopikLemah: lemah },
      simulasi,
      hadir: { hari14, rangkaian: rangkaianDari(hadir, hariIni) },
      jawaban: jawabanRingkas(s, kini),
    });
  }
  // jawaban per soal (kontrak dasbor admin): { s, t, o, b, d, w, m, sim?, k } — terbaru dulu, ≤ MAKS_JAWAB, HARI_JAWAB hari terakhir.
  // Latihan/sesi/cek dari s.jawaban (termasuk "Tidak tahu" o:'-'); simulasi dari rekaman s.simulasi (jawaban per soal sudah tersimpan:
  // soalIds, jawaban, detik, ragu), termasuk soal kosong (o:'-'); entri s.jawaban berkonteks 'simulasi' tidak dipakai agar tidak ganda.
  // Dalam satu simulasi w naik mengikuti nomor soal (soalIds) dan w terakhir = waktu selesai (detik epoch). k simulasi = 'ragu' bila ditandai.
  // v7.9: hanya s.jawaban dan s.simulasi. s.jawabanBersama (latihan bersama, jawaban per nama di perangkat pemimpin) sengaja TIDAK
  // dibaca: tidak dikirim ke server/db dan tidak ikut kode hasil (muatanKode → ringkasan). Tampil di Dasbor tim lewat js/views-tim.js.
  function jawabanRingkas(s, kini) {
    const batas = Math.floor(kini / 1000) - HARI_JAWAB * 86400; const out = [];
    const detikOk = v => Math.round(Math.min(86400, Math.max(0, Number(v) || 0)));
    for (const j of (Array.isArray(s.jawaban) ? s.jawaban : [])) {
      if (!isObj(j) || j.konteks === 'simulasi' || typeof j.pada !== 'number') continue;
      const w = Math.floor(j.pada / 1000); if (w < batas) continue;
      const sid = String(j.soal || ''), t = String(j.topik || ''); if (!SOAL_RE.test(sid) || !TOPIK_RE.test(t)) continue;
      const o = String(j.opsi || '').toUpperCase(); const opsi = /^[A-D]$/.test(o) ? o : '-';
      out.push({ s: sid, t, o: opsi, b: opsi !== '-' && j.benar ? 1 : 0, d: detikOk(j.detik), w, m: MODE_DARI[j.konteks] || 'latihan', k: YAKIN.includes(j.keyakinan) && opsi !== '-' ? j.keyakinan : null });
    }
    const K = UKP.konten && typeof UKP.konten.soal === 'function' ? UKP.konten : null;
    const logSim = (Array.isArray(s.jawaban) ? s.jawaban : []).filter(j => isObj(j) && j.konteks === 'simulasi');
    for (const x of (Array.isArray(s.simulasi) ? s.simulasi : [])) {
      if (!isObj(x) || !x.selesai || !Array.isArray(x.soalIds)) continue;
      const selesai = typeof x.selesai === 'number' ? x.selesai : Date.parse(x.selesai); if (!isFinite(selesai)) continue;
      const wAkhir = Math.floor(selesai / 1000); if (wAkhir < batas) continue;
      const jw = isObj(x.jawaban) ? x.jawaban : {}, dt = isObj(x.detik) ? x.detik : {}, ragu = Array.isArray(x.ragu) ? x.ragu : [];
      const simId = String(x.id || '').replace(/[^0-9A-Za-z_.:-]/g, '').slice(0, 40);
      const mulai = typeof x.mulai === 'number' ? x.mulai : selesai - 86400000;
      const ids = x.soalIds.slice(0, 1000); const n = ids.length;
      ids.forEach((id, i) => {
        const sid = String(id || ''); if (!SOAL_RE.test(sid)) return;
        const o = String(jw[sid] || '').toUpperCase(); const opsi = /^[A-D]$/.test(o) ? o : '-';
        const so = K ? K.soal(sid) : null;
        // tanpa konten (uji, atau soal sudah dihapus): topik dan benar dari log jawaban simulasi yang sama
        const lg = so ? null : logSim.find(j => j.soal === sid && j.pada >= mulai - 60000 && j.pada <= selesai + 60000);
        const t = String((so && so.topik) || (lg && lg.topik) || ''); if (!TOPIK_RE.test(t)) return;
        const b = opsi === '-' ? 0 : so ? (opsi === String(so.kunci || '').toUpperCase() ? 1 : 0) : (lg && lg.benar ? 1 : 0);
        const e = { s: sid, t, o: opsi, b, d: detikOk(dt[sid]), w: wAkhir - (n - 1 - i), m: 'simulasi' };
        if (simId) e.sim = simId;
        e.k = ragu.includes(sid) ? 'ragu' : null;
        out.push(e);
      });
    }
    // terbaru dulu (stabil: dalam satu simulasi urutan nomor soal terbalik), lalu batas jumlah
    return out.map((e, i) => [e, i]).sort((a, b) => b[0].w - a[0].w || b[1] - a[1]).slice(0, MAKS_JAWAB).map(x => x[0]);
  }
  // seluruh ringkasan ≤ MAKS_BYTE: buang jawaban tertua bertahap (dalam praktik 400 entri ±45 KB, jauh di bawah batas)
  function pangkasJawaban(r) {
    if (!Array.isArray(r.jawaban)) return r;
    while (r.jawaban.length && nByte(r) > MAKS_BYTE) r.jawaban = r.jawaban.slice(0, Math.floor(r.jawaban.length * 0.8));
    return r;
  }
  // sidik isi (tanpa cap waktu) untuk "ada perubahan sejak kiriman terakhir"
  const sidik = r => { const o = Object.assign({}, r); delete o.diperbarui; return hash(JSON.stringify(o)); };
  function hash(str) { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(36); }

  // ---------- normalisasi data anggota (dari db orang lain atau kode tempel: data tak tepercaya) ----------
  const KODE_RE = /^(?:[A-E](?:[0-9]{1,2})?|TO-[ABC]-[0-9]{4}-[0-9]{2})$/; // kode kelompok, atau kode paket try out (format 'tryout')
  const TOPIK_RE = /^[A-E][0-9]{0,2}\.[0-9A-Za-z]{1,6}(?:\.[0-9A-Za-z]{1,6})?$/;
  const ID_RE = /^[A-Za-z0-9_:.@+~-]{1,120}$/;
  const SOAL_RE = /^[A-E][0-9]{0,2}-[0-9A-Za-z]{1,12}$/;
  const SIM_RE = /^[0-9A-Za-z_.:-]{1,40}$/;
  const angka = (v, maks) => typeof v === 'number' && isFinite(v) ? Math.min(maks == null ? 1e9 : maks, Math.max(0, v)) : 0;
  const bulatAngka = (v, maks) => Math.round(angka(v, maks));
  const tglOk = v => typeof v === 'string' && v.length <= 40 && !isNaN(Date.parse(v)) ? v : null;
  const teks = (v, maks) => typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, maks) : '';
  // nama berawalan karakter rumus spreadsheet (= + - @) dibersihkan agar tidak dieksekusi saat CSV dibuka
  const namaAman = v => String(v || '').replace(/^[=+\-@\s]+/, '').trim();
  function perKelOk(o) {
    const out = {}; if (!isObj(o)) return out; let i = 0;
    for (const k of Object.keys(o)) { if (i >= 24) break; if (!KODE_RE.test(k) || !isObj(o[k])) continue; const n = bulatAngka(o[k].n, 1e6); out[k] = { n, benar: Math.min(n, bulatAngka(o[k].benar, 1e6)) }; i++; }
    return out;
  }
  function normalAnggota(raw, id, sumber) {
    if (!isObj(raw)) return null;
    const l = isObj(raw.latihan) ? raw.latihan : {}, hd = isObj(raw.hadir) ? raw.hadir : {};
    const total = bulatAngka(l.total, 1e7);
    const a7 = typeof l.akurasi7 === 'number' && isFinite(l.akurasi7) ? Math.min(1, Math.max(0, l.akurasi7)) : null;
    return Object.assign({
      id: ID_RE.test(String(id || '')) ? String(id) : 'tanpa-id', sumber: sumber || 'db',
      nama: namaAman(teks(raw.nama, 40)), tingkat: ['A', 'B', 'C'].includes(raw.tingkat) ? raw.tingkat : 'A', diperbarui: tglOk(raw.diperbarui), versiApp: teks(raw.versiApp, 16),
      latihan: { total, benar: Math.min(total, bulatAngka(l.benar, 1e7)), akurasi7: a7, sesi7: bulatAngka(l.sesi7, 1000),
        soal7: typeof l.soal7 === 'number' ? bulatAngka(l.soal7, 1e6) : null, hari7: typeof l.hari7 === 'number' ? bulatAngka(l.hari7, 7) : null, terakhir: tglOk(l.terakhir), perKelompok: perKelOk(l.perKelompok),
        perTopikLemah: (Array.isArray(l.perTopikLemah) ? l.perTopikLemah : []).filter(t => isObj(t) && TOPIK_RE.test(String(t.id))).slice(0, MAKS_LEMAH).map(t => { const n = bulatAngka(t.n, 1e6); return { id: String(t.id), n, benar: Math.min(n, bulatAngka(t.benar, 1e6)) }; }) },
      simulasi: (Array.isArray(raw.simulasi) ? raw.simulasi : []).filter(isObj).slice(-MAKS_SIM).map(x => {
        const jumlah = bulatAngka(x.jumlah, 1000), benar = Math.min(jumlah, bulatAngka(x.benar, 1000)), skor = bulat(angka(x.skor, 100), 1);
        return { id: teks(x.id, 40), format: ['UKP', 'USKP', 'kustom', 'tryout', 'tim'].includes(x.format) ? x.format : '', kode: typeof x.kode === 'string' && KODE_RE.test(x.kode) ? x.kode : null,
          tingkat: ['A', 'B', 'C'].includes(x.tingkat) ? x.tingkat : 'A', selesai: tglOk(x.selesai), skor, benar, salah: Math.min(jumlah - benar, bulatAngka(x.salah, 1000)), kosong: Math.min(jumlah - benar, bulatAngka(x.kosong, 1000)),
          jumlah, menit: bulatAngka(x.menit, 1440), lulus: skor >= BATAS_LULUS, perKelompok: perKelOk(x.perKelompok) };
      }),
      hadir: { hari14: bulatAngka(hd.hari14, 14), rangkaian: bulatAngka(hd.rangkaian, 1e5) },
    }, sumber === 'room' ? null : { jawaban: normalJawaban(raw.jawaban) });
  }
  // jawaban per soal dari data tak tepercaya: kunci tetap, tipe ketat per entri (entri yang tidak cocok dibuang), maks. MAKS_JAWAB, terbaru dulu.
  // w dijepit ke [0, jam perangkat + 5 menit]. Jalur room tidak membawa jawaban (normalAnggota sumber 'room' tanpa field ini).
  function normalJawaban(arr) {
    if (!Array.isArray(arr)) return [];
    const maksW = Math.floor(Date.now() / 1000) + 300; const out = [];
    for (const e of arr.slice(0, MAKS_JAWAB)) {
      if (!isObj(e) || typeof e.s !== 'string' || !SOAL_RE.test(e.s) || typeof e.t !== 'string' || !TOPIK_RE.test(e.t)) continue;
      if (typeof e.o !== 'string' || !/^[A-D-]$/.test(e.o) || !MODE_JAWAB.includes(e.m) || typeof e.w !== 'number' || !isFinite(e.w)) continue;
      const x = { s: e.s, t: e.t, o: e.o, b: e.b === 1 && e.o !== '-' ? 1 : 0, d: bulatAngka(e.d, 86400), w: Math.round(Math.min(maksW, Math.max(0, e.w))), m: e.m };
      if (typeof e.sim === 'string' && SIM_RE.test(e.sim)) x.sim = e.sim;
      x.k = YAKIN.includes(e.k) && e.o !== '-' ? e.k : null;
      out.push(x);
    }
    return out.map((e, i) => [e, i]).sort((a, b) => b[0].w - a[0].w || a[1] - b[1]).map(x => x[0]);
  }

  // ---------- kode hasil: 'UKP1.' + mode ('z' deflate-raw | 'j' JSON) + base64url + '.' + cek ----------
  const enc = str => (typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(str) : Uint8Array.from(unescape(encodeURIComponent(str)), c => c.charCodeAt(0)));
  const dec = b => (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { fatal: true }).decode(b) : decodeURIComponent(escape(String.fromCharCode.apply(null, b))));
  function keB64(b) { let bin = ''; for (let i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function dariB64(s) { const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)); const b = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i); return b; }
  const rakit = (mode, body) => PREFIKS + mode + body + '.' + hash(mode + body);

  // inflate (RFC 1951) sinkron agar tempelKode tetap sinkron di semua peramban; batas keluaran 512 KiB
  const LBASE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  const LEXT = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  const DBASE = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  const DEXT = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  function inflateRaw(data, maks) {
    maks = maks || 524288; let pos = 0, buf = 0, nbit = 0; const out = [];
    const bit = () => { if (!nbit) { if (pos >= data.length) throw new Error('data terpotong'); buf = data[pos++]; nbit = 8; } const b = buf & 1; buf >>= 1; nbit--; return b; };
    const bits = n => { let v = 0; for (let i = 0; i < n; i++) v |= bit() << i; return v; };
    const tabel = len => { const count = new Uint16Array(16), offs = new Uint16Array(16), sym = new Uint16Array(len.length); for (const l of len) count[l]++; count[0] = 0; for (let i = 1; i < 16; i++) offs[i] = offs[i - 1] + count[i - 1]; for (let i = 0; i < len.length; i++) if (len[i]) sym[offs[len[i]]++] = i; return { count, sym }; };
    const baca = t => { let code = 0, first = 0, index = 0; for (let l = 1; l < 16; l++) { code |= bit(); const c = t.count[l]; if (code - c < first) return t.sym[index + (code - first)]; index += c; first += c; first <<= 1; code <<= 1; } throw new Error('kode Huffman tidak sah'); };
    const tambah = b => { if (out.length >= maks) throw new Error('keluaran terlalu besar'); out.push(b); };
    let akhir;
    do {
      akhir = bit(); const tipe = bits(2);
      if (tipe === 0) {
        nbit = 0; if (pos + 4 > data.length) throw new Error('data terpotong');
        const len = data[pos] | (data[pos + 1] << 8), nlen = data[pos + 2] | (data[pos + 3] << 8); pos += 4;
        if ((len ^ 0xffff) !== nlen || pos + len > data.length) throw new Error('blok tersimpan rusak');
        for (let i = 0; i < len; i++) tambah(data[pos++]);
        continue;
      }
      let lt, dt;
      if (tipe === 1) { const l = []; for (let i = 0; i < 288; i++) l.push(i < 144 ? 8 : i < 256 ? 9 : i < 280 ? 7 : 8); lt = tabel(l); dt = tabel(new Array(30).fill(5)); }
      else if (tipe === 2) {
        const hlit = bits(5) + 257, hdist = bits(5) + 1, hclen = bits(4) + 4; const ORD = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        const cl = new Array(19).fill(0); for (let i = 0; i < hclen; i++) cl[ORD[i]] = bits(3); const ct = tabel(cl);
        const len = []; while (len.length < hlit + hdist) {
          const sym = baca(ct);
          if (sym < 16) len.push(sym);
          else if (sym === 16) { if (!len.length) throw new Error('ulang tanpa awal'); const prev = len[len.length - 1]; for (let r = 3 + bits(2); r > 0; r--) len.push(prev); }
          else for (let r = sym === 17 ? 3 + bits(3) : 11 + bits(7); r > 0; r--) len.push(0);
        }
        if (len.length > hlit + hdist) throw new Error('panjang kode berlebih');
        lt = tabel(len.slice(0, hlit)); dt = tabel(len.slice(hlit));
      } else throw new Error('tipe blok tidak sah');
      for (;;) {
        let sym = baca(lt);
        if (sym < 256) { tambah(sym); continue; }
        if (sym === 256) break;
        sym -= 257; if (sym >= 29) throw new Error('panjang tidak sah');
        const len = LBASE[sym] + bits(LEXT[sym]); const ds = baca(dt); if (ds >= 30) throw new Error('jarak tidak sah');
        const dist = DBASE[ds] + bits(DEXT[ds]); if (dist > out.length) throw new Error('jarak melewati awal');
        for (let i = 0; i < len; i++) tambah(out[out.length - dist]);
      }
    } while (!akhir);
    return Uint8Array.from(out);
  }
  async function deflateRaw(bytes) {
    const cs = new CompressionStream('deflate-raw'); const w = cs.writable.getWriter(); w.write(bytes); w.close();
    const r = cs.readable.getReader(); const bag = []; let n = 0;
    for (;;) { const { done, value } = await r.read(); if (done) break; bag.push(value); n += value.length; }
    const out = new Uint8Array(n); let o = 0; for (const b of bag) { out.set(b, o); o += b.length; } return out;
  }
  // muatan kode = ringkasan + id (id akun bila tersambung, kalau tidak id acak perangkat)
  function muatanKode(s, opsi) { const r = ringkasan(s, opsi); return Object.assign({ id: (opsi && opsi.id) || idLokal() }, r); }
  function kodeJson(obj) { return rakit('j', keB64(enc(JSON.stringify(obj)))); }
  async function kodeZ(obj) {
    if (typeof CompressionStream !== 'function') return kodeJson(obj);
    try { return rakit('z', keB64(await deflateRaw(enc(JSON.stringify(obj))))); } catch (e) { return kodeJson(obj); }
  }
  function bacaKode(str) {
    const t = String(str || '').replace(/\s+/g, '');
    const m = /^UKP1\.([zj])([A-Za-z0-9_-]{4,200000})\.([0-9a-z]{1,8})$/.exec(t); if (!m) return null;
    if (hash(m[1] + m[2]) !== m[3]) return null;
    try {
      let b = dariB64(m[2]); if (m[1] === 'z') b = inflateRaw(b);
      const o = JSON.parse(dec(b)); if (!isObj(o)) return null;
      const a = normalAnggota(o, o.id, 'kode'); if (!a || a.id === 'tanpa-id') return null;
      return a;
    } catch (e) { return null; }
  }

  // ---------- penyimpanan lokal kecil (try/catch: bisa diblokir) ----------
  const lsGet = (k, cadangan) => { try { const v = root.localStorage.getItem(k); return v == null ? cadangan : JSON.parse(v); } catch (e) { return cadangan; } };
  const lsSet = (k, v) => { try { root.localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };
  function idLokal() {
    let id = lsGet(KUNCI_LOKAL, null);
    if (typeof id !== 'string' || !/^lokal-[a-z0-9]{6,20}$/.test(id)) { id = 'lokal-' + Math.random().toString(36).slice(2, 12).padEnd(8, '0'); lsSet(KUNCI_LOKAL, id); }
    return id;
  }
  function daftarManual() { const d = lsGet(KUNCI_MANUAL, []); return (Array.isArray(d) ? d : []).map(x => normalAnggota(x, x && x.id, 'kode')).filter(x => x && x.id !== 'tanpa-id'); }
  function simpanManual(a) {
    const d = daftarManual().filter(x => x.id !== a.id);
    d.push(a); d.sort((x, y) => String(y.diperbarui || '').localeCompare(String(x.diperbarui || '')));
    const bersih = d.slice(0, MAKS_MANUAL).map(x => { const o = Object.assign({}, x); delete o.sumber; return o; });
    // localStorage penuh (banyak kode berisi jawaban per soal): jawaban kode lain dibuang dulu, lalu jawaban kode ini
    if (lsSet(KUNCI_MANUAL, bersih)) return;
    if (lsSet(KUNCI_MANUAL, bersih.map(o => o.id === a.id ? o : Object.assign({}, o, { jawaban: [] })))) return;
    lsSet(KUNCI_MANUAL, bersih.map(o => Object.assign({}, o, { jawaban: [] })));
  }
  function hapusManual(id) { const d = daftarManual(); const sisa = d.filter(x => x.id !== id); if (sisa.length === d.length) return false; lsSet(KUNCI_MANUAL, sisa.map(x => { const o = Object.assign({}, x); delete o.sumber; return o; })); beri(); return true; }
  // gabung daftar db + diterima lewat room + kode tempel: satu baris per id; yang diperbarui paling baru menang (seri: urutan db, room, kode)
  function gabung(daftarDb) {
    const peta = new Map();
    for (const a of (daftarDb || []).concat(daftarTerima(), daftarManual())) {
      if (!a) continue; const ada = peta.get(a.id);
      if (!ada || String(a.diperbarui || '') > String(ada.diperbarui || '')) peta.set(a.id, a);
    }
    return Array.from(peta.values()).sort((x, y) => (x.nama || '').localeCompare(y.nama || '', 'id'));
  }

  // ---------- sambungan capability ----------
  let status = 'mati', menyambung = false, galat = null, janjiSiap = null, ctx = null;
  let tulisDitolak = false, terakhirKirim = lsGet(KUNCI_KIRIM, null);
  const beri = () => { try { if (root.document && typeof root.CustomEvent === 'function') root.document.dispatchEvent(new root.CustomEvent('ukp:tim', { detail: info() })); } catch (e) {} };
  const aturStatus = (st, g) => { const ubah = st !== status || (g !== undefined && g !== galat); status = st; if (g !== undefined) galat = g; if (ubah) beri(); };
  const MATI = ['not_granted', 'capability_disabled', 'capability_removed', 'revoked'];
  function tanganiGalat(e, saatTulis) {
    const code = e && e.code;
    if (MATI.includes(code)) { ctx = null; aturStatus('mati', code); return; }
    if (saatTulis && (code === 'invalid_argument' || code === 'transform_error')) { tulisDitolak = true; aturStatus(status, 'tidak-diizinkan'); jadwalRoom({ emit: true, segera: true }); return; }
    if (code === 'quota_exceeded') { aturStatus(status, 'kuota'); return; }
    aturStatus(status, code || 'gagal');
  }
  const batasWaktu = (p, ms) => Promise.race([p, new Promise(r => setTimeout(() => r(null), ms))]);
  function siap() {
    if (janjiSiap) return janjiSiap;
    if (!bisaServer()) return (janjiSiap = siapClaude());
    // server sendiri lebih dulu (batas JEDA.batasDeteksi); bila jelas bukan server tim, lanjut ke jalur Claude (diam bila window.claude tidak ada)
    menyambung = true; beri();
    janjiSiap = deteksiServer().then(sv => { menyambung = false; if (sv) return pasangServer(sv); return gagalDeteksi(); }, () => { menyambung = false; return gagalDeteksi(); });
    return janjiSiap;
  }
  // deteksi pertama tidak menemukan server tim yang menjawab
  function gagalDeteksi() {
    const j = hasilDeteksi ? hasilDeteksi.jenis : 'tak-terjangkau';
    if (j === 'sesi') { modeServer = true; aturStatus('mati', 'sesi-berakhir'); jadwalUlang(); return null; }
    if (modeServer || penandaServer()) { aturStatus('server-tak-terjangkau', null); jadwalUlang(); beri(); return null; }
    if (j === 'tak-terjangkau') jadwalUlang();
    beri();
    return siapClaude();
  }
  function siapClaude() {
    const c = root.claude;
    if (!c || typeof c.use !== 'function') { aturStatus('mati'); return Promise.resolve(null); }
    menyambung = true; beri();
    const jp = (async () => {
      try {
        const [db, user] = await batasWaktu(Promise.all([c.use('db'), c.use('user')]).catch(() => [null, null]), 12000) || [null, null];
        if (!db || !user) { aturStatus('mati'); return null; }
        const uid = await user.id();
        if (!uid || !ID_RE.test(uid)) { aturStatus('tanpa-akun'); return null; }
        let nama = ''; try { const me = await user.me(); nama = teks(me && me.name, 40); } catch (e) {}
        const p = (UKP.store && UKP.store.get().profil) || {};
        ctx = { db, user, uid, nama: teks(p.nama, 40) || nama };
        if (terakhirKirim && terakhirKirim.uid !== uid) terakhirKirim = null;
        aturStatus('tersambung');
        return ctx;
      } catch (e) { aturStatus('mati'); return null; }
      finally { menyambung = false; beri(); }
    })();
    // jalur room dimulai di belakang; tidak pernah memblokir siap() maupun render
    jp.then(() => { siapRoom(); }, () => {});
    return jp;
  }
  const aktifkah = () => { const s = UKP.store && UKP.store.get(); return !(s && s.profil && s.profil.bagiHasilTim === false); };
  function info() {
    return { status, menyambung, galat, aktif: aktifkah(), tulisDitolak, modeServer: !!srv || modeServer || penandaServer(), akunBeda: srv ? akunBeda : null,
      hapusTertunda: !aktifkah() && !!lsGet(KUNCI_HAPUS, null), terakhirKirim: terakhirKirim && terakhirKirim.pada || null,
      room: room ? peranRoom : null, langsung: lewatRoom(), pemimpinOnline: !!(room && pemimpinOnline),
      online: srv ? onlineServer.size : onlineIds.size, onlineIds: Array.from(srv ? onlineServer : onlineIds),
      terakhirRoom: terakhirRoom || null,
      server: !!srv, akun: srv ? srv.nama : null, admin: !!(srv && srv.admin), aliran: srv ? modeAliran : null, pengguna: srv ? penggunaServer.slice() : [] };
  }

  // ---------- kirim (debounce 5 dtk, satu tulis per waktu, hanya bila isi berubah) ----------
  let tKirim = null, janjiKirim = null, selesaiKirim = null, rantai = Promise.resolve(), generasi = 0;
  function dokSaya(c) {
    const s = UKP.store.get(); const r = ringkasan(s, { nama: c.nama });
    if (!r.nama) r.nama = c.nama || '';
    return r;
  }
  async function kirimSekarang() {
    const c = await siap();
    if (!c || status !== 'tersambung' || !aktifkah() || tulisDitolak || !UKP.store) return;
    const s = UKP.store.get();
    if (!(s.profil && s.profil.onboardingSelesai) && !(s.jawaban && s.jawaban.length) && !(s.simulasi && s.simulasi.length)) return;
    if (c.server && akunBeda) return; // progres di perangkat ini milik akun server lain: tidak dikirim atas nama akun ini
    const dok = dokSaya(c); const h = sidik(dok);
    if (terakhirKirim && terakhirKirim.uid === c.uid && terakhirKirim.hash === h) return;
    const gen = generasi;
    if (c.server) return kirimServer(c, dok, h, gen);
    const ref = c.db.collection(KOLEKSI).doc(c.uid);
    // berbagi dimatikan selama tulis berjalan: dok yang baru mendarat langsung dihapus, kiriman tidak dicatat sukses
    const sesudah = async () => {
      if (gen !== generasi || !aktifkah()) { try { await ref.delete(); } catch (e) { tanganiGalat(e, true); } terakhirKirim = null; lsSet(KUNCI_KIRIM, null); beri(); return; }
      terakhirKirim = { uid: c.uid, hash: h, pada: dok.diperbarui }; lsSet(KUNCI_KIRIM, terakhirKirim);
      aturStatus('tersambung', null); beri();
    };
    try {
      await ref.set(dok); await sesudah();
    } catch (e) {
      if (e && e.code === 'unavailable') {
        await new Promise(r => setTimeout(r, 1500 + Math.random() * 2000));
        if (gen !== generasi || !aktifkah()) return;
        try { await ref.set(dok); await sesudah(); return; } catch (e2) { tanganiGalat(e2, true); return; }
      }
      tanganiGalat(e, true);
    }
  }
  function jalankan() { const f = selesaiKirim; janjiKirim = null; selesaiKirim = null; tKirim = null; rantai = rantai.then(kirimSekarang).catch(() => {}).then(() => { if (f) f(); }); return rantai; }
  // opsi.segera: tanpa jeda (dipakai Pengaturan dan uji)
  function kirimRingkasan(opsi) {
    if (!aktifkah()) return Promise.resolve();
    jadwalRoom({ emit: !!(opsi && opsi.selesai), segera: !!(opsi && opsi.segera) });
    if (opsi && opsi.segera) { if (tKirim) clearTimeout(tKirim); const p = janjiKirim; jalankan(); return p || rantai; }
    if (tKirim) clearTimeout(tKirim);
    if (!janjiKirim) janjiKirim = new Promise(r => { selesaiKirim = r; });
    tKirim = setTimeout(jalankan, JEDA_KIRIM);
    return janjiKirim;
  }
  // berhenti berbagi: hapus dok sendiri (satu-satunya tulis saat menonaktifkan), lalu tidak ada kiriman lagi
  // dijalankan lewat rantai yang sama dengan kiriman, jadi tidak pernah mendahului set yang sedang berjalan
  function hapusRingkasan() {
    if (tKirim) { clearTimeout(tKirim); tKirim = null; }
    generasi++;
    const hapus = async () => {
      const c = await siap();
      // server tim tidak terjangkau: tandai, lalu dihapus otomatis saat tersambung lagi
      if (!c || status !== 'tersambung') { if (bisaServer() && (srv || modeServer || penandaServer() || (hasilDeteksi && hasilDeteksi.jenis === 'tak-terjangkau'))) { lsSet(KUNCI_HAPUS, srv ? srv.nama : (pemilikProgres() || true)); beri(); } return false; }
      if (c.server) { if (akunBeda) return false; lsSet(KUNCI_HAPUS, c.uid); const ok = await hapusServer(); beri(); return ok; }
      try { await c.db.collection(KOLEKSI).doc(c.uid).delete(); terakhirKirim = null; lsSet(KUNCI_KIRIM, null); beri(); return true; } catch (e) { tanganiGalat(e, true); return false; }
    };
    const p = rantai.then(hapus, hapus);
    rantai = p.catch(() => {});
    return p.catch(() => false);
  }
  function aturAktif(v) {
    const s = UKP.store && UKP.store.get(); if (!s) return;
    s.profil.bagiHasilTim = !!v; UKP.store.save();
    generasi++;
    if (v) { tulisDitolak = false; lsSet(KUNCI_HAPUS, null); kirimRingkasan({ segera: true }); } else { if (tKirim) { clearTimeout(tKirim); tKirim = null; } if (selesaiKirim) { selesaiKirim(); janjiKirim = null; selesaiKirim = null; } tarikPresence(); }
    beri();
  }

  // ---------- pantau koleksi (pemimpin dan anggota sama-sama membaca) ----------
  function pantau(cb) {
    let berhenti = false, lepas = null;
    siap().then(c => {
      if (berhenti) return;
      if (!c) { cb([], info()); return; }
      if (c.server) { lepas = pantauServer(cb); return; }
      try {
        lepas = c.db.collection(KOLEKSI).onSnapshot(snap => {
          if (berhenti) return;
          const daftar = (snap && snap.docs || []).filter(d => d && d.exists !== false).map(d => {
            const raw = typeof d.data === 'function' ? d.data() : null;
            const a = normalAnggota(raw, d.id, isObj(raw) && raw.sumber === 'room' ? 'room' : 'db'); if (!a) return null;
            if (a.sumber === 'room') jepitWaktu(a);
            a.saya = d.id === c.uid;
            if (a.sumber === 'room') sidikDb.set(a.id, sidikAnggota(a));
            return a;
          }).filter(Boolean);
          cb(daftar, info());
        }, e => { tanganiGalat(e, false); if (!berhenti) cb([], info()); });
      } catch (e) { tanganiGalat(e, false); cb([], info()); }
    });
    return () => { berhenti = true; if (typeof lepas === 'function') { try { lepas(); } catch (e) {} } };
  }
  let janjiPemimpin = null;
  function pemimpin() {
    if (janjiPemimpin) return janjiPemimpin;
    janjiPemimpin = siap().then(async c => { if (!c) { janjiPemimpin = null; return false; } if (c.server) { janjiPemimpin = null; return !!(srv && srv.admin); } try { return !!(await c.user.isOwner()); } catch (e) { janjiPemimpin = null; return false; } });
    return janjiPemimpin;
  }
  // Dasbor tim terlihat bagi pemimpin (pemilik artifact), atau bila tidak ada penyimpanan tim sama sekali (berkas offline, emulator):
  // di sana dasbor hanya berisi kode hasil yang ditempel di perangkat ini. Anggota yang tersambung atau belum masuk tidak melihatnya.
  async function bolehDasbor() { const ya = await pemimpin(); if (ya) return true; if (srv || modeServer || penandaServer()) return false; await siapRoom(); return status === 'mati'; }
  async function profil(ids) { const c = await siap(); if (!c || c.server || !ids || !ids.length) return {}; try { return (await c.user.profiles(ids)) || {}; } catch (e) { return {}; } }

  // kode hasil: kodeHasil() sinkron (versi terkompres bila sudah disiapkan untuk isi yang sama, kalau tidak JSON base64url);
  // kodeHasilAsync() menunggu kompresi (CompressionStream 'deflate-raw' bila ada)
  let cacheZ = { kunci: null, kode: null };
  function muatanSaya() { const s = UKP.store ? UKP.store.get() : {}; return muatanKode(s, { id: ctx && ctx.uid, nama: ctx && ctx.nama }); }
  function kunciMuatan(m) { const o = Object.assign({}, m); delete o.diperbarui; return JSON.stringify(o); }
  function kodeHasil() {
    const m = muatanSaya(); const k = kunciMuatan(m);
    if (cacheZ.kunci === k && cacheZ.kode) return cacheZ.kode;
    kodeZ(m).then(kode => { cacheZ = { kunci: k, kode }; }).catch(() => {});
    return kodeJson(m);
  }
  async function kodeHasilAsync() { const m = muatanSaya(); const k = kunciMuatan(m); if (cacheZ.kunci === k && cacheZ.kode) return cacheZ.kode; const kode = await kodeZ(m); cacheZ = { kunci: k, kode }; return kode; }
  function tempelKode(str) { const a = bacaKode(str); if (!a) return null; simpanManual(a); beri(); return a; }


  // ---------- jalur kedua: capability 'room' (tamu → pemimpin) ----------
  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  function uuid() {
    try { if (root.crypto && typeof root.crypto.randomUUID === 'function') return root.crypto.randomUUID(); } catch (e) {}
    const b = new Uint8Array(16);
    try { root.crypto.getRandomValues(b); } catch (e) { for (let i = 0; i < 16; i++) b[i] = Math.floor(Math.random() * 256); }
    b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
    const x = Array.from(b, v => v.toString(16).padStart(2, '0')).join('');
    return x.slice(0, 8) + '-' + x.slice(8, 12) + '-' + x.slice(12, 16) + '-' + x.slice(16, 20) + '-' + x.slice(20);
  }
  function idAnon() { let id = lsGet(KUNCI_ID, null); if (typeof id !== 'string' || !UUID_RE.test(id)) { id = uuid(); lsSet(KUNCI_ID, id); } return id; }
  const nByte = o => { try { return enc(JSON.stringify(o)).length; } catch (e) { return Infinity; } };
  // sidik isi anggota ternormalkan (tanpa cap waktu/sumber/penanda lokal): dasar "isi berubah?" untuk tulis dok anon
  const sidikAnggota = a => { const o = Object.assign({}, a); delete o.diperbarui; delete o.sumber; delete o.saya; delete o.id; delete o.versiApp; return hash(JSON.stringify(o)); };
  // ringkasan dipangkas bertahap agar seluruh muatan room ≤ MAKS_ROOM byte (presence/emit dibatasi 4 KiB)
  function ringkasRoom(r, ekstra) {
    const o = JSON.parse(JSON.stringify(r || {})); o.latihan = o.latihan || {}; o.simulasi = Array.isArray(o.simulasi) ? o.simulasi : [];
    delete o.jawaban; // jawaban per soal tidak lewat room (hanya db/server/kode hasil)
    // presence menolak utuh string berkarakter tak terlihat (format/kontrol): bersihkan nama sebelum dikirim
    o.nama = String(o.nama || '').replace(/[\p{Cf}\p{Cc}]/gu, '').trim().slice(0, 40);
    const muat = () => nByte(Object.assign({}, ekstra || {}, { ringkasan: o })) <= MAKS_ROOM;
    const langkah = [
      () => { o.simulasi = o.simulasi.slice(-5); },
      () => { o.simulasi.forEach(x => { x.perKelompok = {}; }); },
      () => { o.latihan.perTopikLemah = (o.latihan.perTopikLemah || []).slice(0, 3); },
      () => { o.simulasi = o.simulasi.slice(-2); },
      () => { o.latihan.perKelompok = {}; },
      () => { o.simulasi = o.simulasi.slice(-1); o.latihan.perTopikLemah = []; },
    ];
    for (let i = 0; !muat(); i++) { if (i >= langkah.length) return null; langkah[i](); }
    return o;
  }
  // pesan room (presence atau data emit) → anggota ternormalkan 'anon_<id>' bersumber 'room'; selain itu null. Data tak tepercaya.
  // Kunci anggota: 'room_<by>' bila platform menjamin pengirim (Sender.by, tidak dapat dipalsukan), selain itu 'anon_<uuid>' dari isi pesan.
  const byAman = pengirim => { const b = pengirim && pengirim.by; return typeof b === 'string' && b.length <= 100 && ID_RE.test(b) ? b : null; };
  function kunciRoom(data, pengirim) {
    if (!isObj(data) || data.ukp !== 1 || data.pemimpin === true) return null;
    const by = byAman(pengirim); if (by) return 'room_' + by;
    const id = typeof data.id === 'string' ? data.id.toLowerCase() : '';
    return UUID_RE.test(id) ? 'anon_' + id : null;
  }
  // cap waktu dari luar dijepit: tidak lebih dari MAJU_MAKS di depan jam perangkat ini (mencegah "mengunci" dok dengan tanggal masa depan)
  function jepitWaktu(a) {
    if (!a) return a; const t = Date.parse(a.diperbarui || ''); const kini = Date.now();
    if (!isFinite(t) || t > kini + MAJU_MAKS) a.diperbarui = new Date(isFinite(t) ? kini + MAJU_MAKS : kini).toISOString();
    return a;
  }
  function pesanRoom(data, pengirim) {
    const kunci = kunciRoom(data, pengirim);
    if (!kunci || !isObj(data.ringkasan)) return null;
    const a = normalAnggota(data.ringkasan, kunci, 'room');
    return a && a.id !== 'tanpa-id' ? jepitWaktu(a) : null;
  }
  const idRoomRe = /^(anon|room)_/;
  // daftar diterima (perangkat pemimpin)
  function daftarTerima() { const d = lsGet(KUNCI_TERIMA, []); return (Array.isArray(d) ? d : []).map(x => jepitWaktu(normalAnggota(x, x && x.id, 'room'))).filter(x => x && idRoomRe.test(x.id)); }
  function simpanTerima(a) {
    const d = daftarTerima().filter(x => x.id !== a.id); d.push(a);
    d.sort((x, y) => String(y.diperbarui || '').localeCompare(String(x.diperbarui || '')));
    lsSet(KUNCI_TERIMA, d.slice(0, MAKS_MANUAL).map(x => { const o = Object.assign({}, x); delete o.sumber; delete o.saya; return o; }));
  }

  let room = null, janjiRoom = null, peranRoom = null, lepasRoom = [], pemimpinOnline = false, onlineIds = new Set();
  let emitDitolak = false, tRoom = null, emitTertunda = false, sidikPresence = null, terakhirRoom = null;
  const sidikDb = new Map();          // id dok anon → sidik isi yang sudah ada di db (dari snapshot atau tulis sendiri)
  let petaTerima = null;              // id → { a, sidik } (dimuat malas dari localStorage)
  const pendengarLangsung = new Set();
  let rantaiAnon = Promise.resolve();
  const ikatUuid = new Map(), ikatPeer = new Map(); // anon_<uuid> ↔ peer pertama yang memakainya (selama peer itu masih ada)
  const ember = new Map(), tundaAnon = new Map();   // batas laju tulis db per id
  const sudahHapus = new Set();                     // id yang tanda berhentinya sudah diproses sesi ini

  // perangkat ini mengirim lewat room bila: peserta room bukan pemimpin, berbagi aktif, dan jalur db tidak bisa menulis
  function lewatRoom() { return !!(room && peranRoom === 'tamu' && aktifkah() && (status !== 'tersambung' || tulisDitolak)); }
  function adaIsi() { const s = UKP.store && UKP.store.get(); return !!(s && ((s.profil && s.profil.onboardingSelesai) || (s.jawaban && s.jawaban.length) || (s.simulasi && s.simulasi.length))); }
  function galatRoom(e) {
    const code = e && e.code;
    if (MATI.includes(code)) { hentikanRoom(); if (status === 'langsung') aturStatus('mati', code); else beri(); }
  }
  function hentikanRoom() {
    const l = lepasRoom; lepasRoom = [];
    l.forEach(f => { try { if (typeof f === 'function') f(); } catch (e) {} });
    if (tRoom) { clearTimeout(tRoom); tRoom = null; }
    room = null; peranRoom = null; pemimpinOnline = false; onlineIds = new Set(); sidikPresence = null; emitTertunda = false;
  }
  function siapRoom() {
    if (janjiRoom) return janjiRoom;
    if (srv) return Promise.resolve(null); // mode server: window.claude tidak pernah dipanggil
    const c = root.claude;
    if (!c || typeof c.use !== 'function') return (janjiRoom = Promise.resolve(null));
    janjiRoom = (async () => {
      const r = await batasWaktu(Promise.resolve().then(() => c.use('room')).catch(() => null), 12000);
      if (!r || typeof r.presence !== 'function' || typeof r.onPeers !== 'function') return null;
      const cdb = await siap();
      const ketua = cdb ? await pemimpin() : false;
      room = r; peranRoom = ketua ? 'pemimpin' : 'tamu';
      if (ketua) pasangPemimpin(); else pasangTamu();
      if (!cdb && status !== 'tersambung') aturStatus('langsung', null); else beri();
      return r;
    })().catch(() => null);
    return janjiRoom;
  }
  const presenceAman = patch => { try { return Promise.resolve(room.presence(patch)).catch(galatRoom); } catch (e) { return Promise.resolve(); } };

  // --- tamu ---
  function pasangTamu() {
    try {
      lepasRoom.push(room.onPeers(ch => {
        const ada = (ch && ch.peers || []).some(p => p && !p.isMe && p.kind !== 'agent' && isObj(p.presence) && p.presence.pemimpin === true);
        if (ada === pemimpinOnline) return;
        pemimpinOnline = ada; beri();
        // pemimpin baru datang: presence sudah diserahkan platform kepadanya; emit ulang sekali sebagai cadangan
        if (ada) jadwalRoom({ emit: true, segera: true });
      }, galatRoom));
    } catch (e) {}
    jadwalRoom({ emit: true, segera: true }); // saat bergabung
  }
  // debounce: beberapa perubahan dalam JEDA_ROOM menjadi satu presence; emit digabung (sekali)
  function jadwalRoom(o) {
    o = o || {};
    if (!room || peranRoom !== 'tamu') return;
    if (o.emit) emitTertunda = true;
    if (tRoom) clearTimeout(tRoom);
    tRoom = setTimeout(kirimRoom, o.segera ? 0 : JEDA_ROOM);
  }
  function kirimRoom() {
    tRoom = null; const emit = emitTertunda; emitTertunda = false;
    if (!lewatRoom() || !adaIsi()) return;
    const s = UKP.store.get(); const r = ringkasan(s, { nama: ctx && ctx.nama });
    const id = idAnon(); const isi = ringkasRoom(r, { ukp: 1, id });
    if (!isi) return;
    const muatan = { ukp: 1, id, ringkasan: isi };
    const sd = sidik(isi);
    if (sd !== sidikPresence) { sidikPresence = sd; presenceAman(Object.assign({ berhenti: null }, muatan)); terakhirRoom = r.diperbarui; beri(); }
    if (emit && !emitDitolak) {
      try {
        Promise.resolve(room.emit(TOPIK_HASIL, muatan)).then(() => { terakhirRoom = r.diperbarui; }, e => { if (e && e.code === 'not_permitted') emitDitolak = true; else galatRoom(e); });
      } catch (e) {}
    }
  }
  // berbagi dimatikan: tarik ringkasan dari presence dan pasang tanda berhenti { ukp, id, berhenti: true }. Pemimpin yang online
  // (sekarang atau nanti, selama halaman ini masih terbuka) lalu menghapus ringkasan ini dari dasbornya (localStorage dan db).
  function tarikPresence() { if (room && peranRoom === 'tamu') { sidikPresence = null; presenceAman({ ukp: 1, id: idAnon(), ringkasan: null, berhenti: true }); } }

  // --- pemimpin ---
  function pasangPemimpin() {
    presenceAman({ ukp: 1, pemimpin: true });
    try { lepasRoom.push(room.on(TOPIK_HASIL, m => { if (m && !m.isMe && m.kind !== 'agent') terimaRoom(m.data, m); }, galatRoom)); } catch (e) {}
    try { lepasRoom.push(room.onPeers(ch => prosesPeers(ch && ch.peers), galatRoom)); } catch (e) {}
  }
  function prosesPeers(peers) {
    const online = new Set();
    // ikatan uuid↔peer dilepas untuk peer yang sudah pergi (anggota yang memuat ulang mendapat peer baru)
    const ada = new Set((peers || []).map(p => p && p.peer).filter(Boolean));
    ikatPeer.forEach((id, peer) => { if (!ada.has(peer)) { ikatPeer.delete(peer); if (ikatUuid.get(id) === peer) ikatUuid.delete(id); } });
    for (const p of peers || []) {
      if (!p || p.isMe || p.kind === 'agent' || !isObj(p.presence)) continue;
      if (p.presence.berhenti === true) { const k = kunciRoom(p.presence, p); if (k && bolehPeer(k, p)) hapusTerimaRoom(k); continue; }
      const a = terimaRoom(p.presence, p); if (a) online.add(a.id);
    }
    const sama = online.size === onlineIds.size && Array.from(online).every(x => onlineIds.has(x));
    if (!sama) { onlineIds = online; beri(); }
  }
  // v9.5.4 S10: "Hapus semua data" (Pengaturan) → hapus hasil anggota yang disimpan di perangkat ini: kode hasil yang ditempel
  // (ukp.tim.manual) dan ringkasan yang diterima lewat room (ukp.tim.terima). Kunci lain (hapusTertunda, kirim, id, idLokal) dan
  // dokumen di db/server tidak disentuh. Keadaan tersimpan sama dengan menghapus dua kunci itu langsung. → true bila keduanya terhapus
  function hapusLokal() {
    let ok = true;
    [KUNCI_MANUAL, KUNCI_TERIMA].forEach(k => { try { root.localStorage.removeItem(k); } catch (e) { ok = false; } });
    petaTerima = null; beri();
    return ok;
  }
  function muatPetaTerima() { if (!petaTerima) { petaTerima = new Map(); daftarTerima().forEach(a => petaTerima.set(a.id, { a, sidik: sidikAnggota(a) })); } return petaTerima; }
  // terima satu pesan: abaikan bila isi sama atau lebih lama; simpan lokal, kabari feed, tulis dok anon bila isinya berbeda dari db
  // id anonim (tanpa by) diikat ke peer pertama yang memakainya; peer lain dengan id sama, atau peer yang berganti id, ditolak
  function bolehPeer(id, p) {
    if (!/^anon_/.test(id)) return true;
    const peer = p && typeof p.peer === 'string' ? p.peer : null; if (!peer) return true;
    const pemilik = ikatUuid.get(id), punya = ikatPeer.get(peer);
    if (pemilik && pemilik !== peer) return false;
    if (punya && punya !== id) return false;
    ikatUuid.set(id, peer); ikatPeer.set(peer, id); return true;
  }
  function terimaRoom(data, pengirim) {
    if (peranRoom !== 'pemimpin') return null;
    const a = pesanRoom(data, pengirim); if (!a || !bolehPeer(a.id, pengirim)) return null;
    sudahHapus.delete(a.id);
    const peta = muatPetaTerima(); const sd = sidikAnggota(a); const lama = peta.get(a.id);
    if (lama && lama.sidik === sd) { tulisAnon(a, sd); return lama.a; }
    if (lama && String(lama.a.diperbarui || '') > String(a.diperbarui || '')) return lama.a;
    peta.set(a.id, { a, sidik: sd }); simpanTerima(a);
    pendengarLangsung.forEach(f => { try { f({ anggota: a, sebelum: lama ? lama.a : null }); } catch (e) {} });
    tulisAnon(a, sd); beri();
    return a;
  }
  const adaAktivitas = a => !!((a.latihan && Number(a.latihan.total) > 0) || (a.simulasi && a.simulasi.length));
  function jumlahDbRoom() { let n = 0; sidikDb.forEach((v, k) => { if (idRoomRe.test(k)) n++; }); return n; }
  function tulisAnon(a, sd) {
    if (!ctx || peranRoom !== 'pemimpin' || sidikDb.get(a.id) === sd) return;
    if (!sidikDb.has(a.id)) {
      // dok baru: hanya untuk anggota yang benar-benar sudah berlatih (id anonim), dan jumlah dok room dibatasi
      if (/^anon_/.test(a.id) && !adaAktivitas(a)) return;
      if (jumlahDbRoom() >= MAKS_ANON) { aturStatus(status, 'kuota'); return; }
    }
    // batas laju per id (ember token); kelebihan ditunda dan menulis isi terbaru
    const kini = Date.now(); const e = ember.get(a.id) || { n: TOKEN_ANON, t: kini };
    e.n = Math.min(TOKEN_ANON, e.n + (kini - e.t) / ISI_ANON); e.t = kini; ember.set(a.id, e);
    if (e.n < 1) {
      if (!tundaAnon.has(a.id)) tundaAnon.set(a.id, setTimeout(() => { tundaAnon.delete(a.id); const x = petaTerima && petaTerima.get(a.id); if (x) tulisAnon(x.a, x.sidik); }, Math.ceil((1 - e.n) * ISI_ANON)));
      return;
    }
    e.n -= 1;
    sidikDb.set(a.id, sd); // ditandai lebih dulu: pesan kembar tidak memicu tulis ganda
    const dok = Object.assign({}, a, { sumber: 'room' }); delete dok.id; delete dok.saya;
    const c = ctx;
    rantaiAnon = rantaiAnon.then(() => c.db.collection(KOLEKSI).doc(a.id).set(dok)).catch(e => { sidikDb.delete(a.id); tanganiGalat(e, false); });
  }
  // hapus ringkasan anggota room dari perangkat pemimpin dan dok db-nya (tanda berhenti dari anggota, atau tombol Hapus di dasbor)
  function hapusTerimaRoom(id) {
    if (!idRoomRe.test(id || '') || sudahHapus.has(id)) return false;
    sudahHapus.add(id);
    const peta = muatPetaTerima(); const adaLokal = peta.has(id) || daftarTerima().some(x => x.id === id);
    peta.delete(id); if (adaLokal) lsSet(KUNCI_TERIMA, daftarTerima().filter(x => x.id !== id).map(x => { const o = Object.assign({}, x); delete o.sumber; delete o.saya; return o; }));
    if (tundaAnon.has(id)) { clearTimeout(tundaAnon.get(id)); tundaAnon.delete(id); }
    const adaDb = sidikDb.has(id); sidikDb.delete(id);
    if (ctx && (adaDb || adaLokal || /^room_/.test(id))) { const c = ctx; rantaiAnon = rantaiAnon.then(() => c.db.collection(KOLEKSI).doc(id).delete()).catch(e => tanganiGalat(e, false)); }
    if (adaLokal || adaDb) { pendengarLangsung.forEach(f => { try { f({ anggota: null, dihapus: id }); } catch (e) {} }); beri(); }
    return adaLokal || adaDb;
  }
  // dipanggil dari dasbor (pemimpin): selalu mencoba menghapus, walau tanda berhenti sudah diproses
  function hapusTerima(id) { sudahHapus.delete(id); return hapusTerimaRoom(id); }
  function dengarLangsung(cb) { if (typeof cb !== 'function') return () => {}; pendengarLangsung.add(cb); return () => { pendengarLangsung.delete(cb); }; }
  // teks status yang jujur untuk Pengaturan › Tim: { label, nada, teks } atau null bila jalur room tidak berperan
  function statusLangsung(i) {
    i = i || info();
    if (i.room === 'pemimpin') return { label: 'siaran langsung', nada: 'ok', teks: 'Anggota yang membuka tautan halaman ini terhubung langsung. ' + (i.online ? i.online + ' anggota online.' : 'Belum ada anggota online.') };
    if (!i.langsung) return null;
    if (i.pemimpinOnline) return { label: 'terhubung langsung', nada: 'ok', teks: 'Terhubung langsung ke pemimpin. Ringkasan Anda terkirim otomatis setelah latihan atau simulasi selesai.' };
    return { label: 'menunggu pemimpin', nada: 'info', teks: 'Pemimpin belum online. Ringkasan Anda terkirim bila pemimpin membuka dasbor selagi halaman ini masih terbuka. Bila Anda akan menutupnya, salin kode hasil.' };
  }


  // ---------- jalur ketiga: server sendiri (deploy/server.js, /api/*) ----------
  const HDR = { 'X-Requested-With': 'UKP' };
  const JEDA = { poll: 20000, detak: 60000, batasDeteksi: 8000, ulang: [5000, 15000, 30000, 60000] }; // dapat diubah uji lewat _jeda
  let hasilDeteksi = null, modeServer = false, akunBeda = null, tUlang = null, langkahUlang = 0, sedangUlang = false;
  let srv = null, janjiServer = null, tDetak = null, modeAliran = null, onlineServer = new Set(), penggunaServer = [];
  // server dicoba hanya di http(s) tanpa window.claude (viewer Claude selalu menyediakannya; server tim tidak pernah)
  function bisaServer() {
    try { return !root.claude && !root.UKP_OFFLINE && typeof root.fetch === 'function' && !!root.location && /^https?:$/.test(root.location.protocol); } catch (e) { return false; }
  }
  async function api(jalur, o) {
    o = o || {};
    const ac = typeof root.AbortController === 'function' ? new root.AbortController() : null;
    const t = o.batas && ac ? setTimeout(() => { try { ac.abort(); } catch (e) {} }, o.batas) : null;
    try {
      return await root.fetch(jalur, { method: o.method || 'GET', credentials: 'same-origin', cache: 'no-store',
        headers: Object.assign({}, HDR, o.body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        body: o.body !== undefined ? JSON.stringify(o.body) : undefined, signal: ac ? ac.signal : undefined });
    } finally { if (t) clearTimeout(t); }
  }
  function bacaSaya(j) {
    if (!isObj(j) || j.server !== true || typeof j.nama !== 'string' || !/^[a-z0-9][a-z0-9._-]{1,31}$/.test(j.nama)) return null;
    return { nama: j.nama, admin: j.admin === true, adaHasil: isObj(j.hasil) };
  }
  // penanda server tim: cookie non-HttpOnly yang diset deploy/server.js saat masuk (tetap ada walau aplikasi dibuka dari cache service worker)
  function penandaServer() {
    try { return bisaServer() && /(?:^|;\s*)ukp_srv=1(?:;|$)/.test(String((root.document && root.document.cookie) || '')); } catch (e) { return false; }
  }
  // satu percobaan GET api/saya → { jenis: 'server' | 'sesi' | 'tak-terjangkau' | 'bukan', sv }
  async function cobaServer(batas) {
    let r = null; try { r = await api('api/saya', { batas }); } catch (e) { return { jenis: 'tak-terjangkau' }; }
    if (!r) return { jenis: 'tak-terjangkau' };
    if (r.status === 401) return { jenis: 'sesi' };
    if (r.status === 200) {
      let j = null; try { j = await r.json(); } catch (e) { return { jenis: 'bukan' }; }
      const sv = bacaSaya(j); return sv ? { jenis: 'server', sv } : { jenis: 'bukan' };
    }
    if (r.status >= 500 || r.status === 408 || r.status === 429) return { jenis: 'tak-terjangkau' };
    return { jenis: 'bukan' };
  }
  // v8.1.1 host statis (GitHub Pages dsb.) tidak punya server tim: probe api/saya dilewati (tanpa 404 di konsol) kecuali cookie penanda ada.
  // Di host lain, hasil "jelas bukan server tim" diingat 30 hari di localStorage (KUNCI_BUKAN_SERVER = cap waktu); penanda ukp_srv selalu menang.
  const KUNCI_BUKAN_SERVER = 'ukp.tim.bukanServer', HARI_BUKAN_SERVER = 30;
  const HOST_STATIS = /(^|\.)(github\.io|netlify\.app|pages\.dev|vercel\.app)$/i;
  function lewatiProbe() {
    if (penandaServer()) return false;
    try { if (HOST_STATIS.test(String((root.location && root.location.hostname) || ''))) return true; } catch (e) {}
    const t = lsGet(KUNCI_BUKAN_SERVER, null); const umur = typeof t === 'number' ? Date.now() - t : -1;
    return umur >= 0 && umur < HARI_BUKAN_SERVER * 86400000;
  }
  function ingatDeteksi(h) {
    if (!h) return;
    if (h.jenis === 'server') { try { root.localStorage.removeItem(KUNCI_BUKAN_SERVER); } catch (e) {} }
    else if (h.jenis === 'bukan' && !penandaServer()) lsSet(KUNCI_BUKAN_SERVER, Date.now());
  }
  function deteksiServer() {
    if (janjiServer) return janjiServer;
    if (!bisaServer()) return (janjiServer = Promise.resolve(null));
    if (lewatiProbe()) { hasilDeteksi = { jenis: 'bukan', dilewati: true }; return Promise.resolve(null); }
    const p = cobaServer(JEDA.batasDeteksi).then(h => { hasilDeteksi = h; ingatDeteksi(h); if (h.jenis === 'server') return h.sv; if (janjiServer === p) janjiServer = null; return null; });
    janjiServer = p;
    return p;
  }
  // percobaan ulang dengan jeda bertahap (JEDA.ulang); segera = saat tab kembali terlihat atau peristiwa 'online'
  function jadwalUlang(segera) {
    if (srv || !bisaServer() || typeof setTimeout !== 'function') return;
    if (tUlang) clearTimeout(tUlang);
    const d = JEDA.ulang; const ms = segera ? 0 : d[Math.min(langkahUlang, d.length - 1)];
    if (!segera) langkahUlang++;
    tUlang = setTimeout(cobaUlang, ms); if (tUlang && tUlang.unref) tUlang.unref();
  }
  function perluUlang() {
    if (srv || !bisaServer() || !hasilDeteksi || hasilDeteksi.jenis === 'server') return false;
    return hasilDeteksi.jenis !== 'bukan' || modeServer || penandaServer();
  }
  async function cobaUlang() {
    tUlang = null;
    if (srv || sedangUlang || !bisaServer()) return;
    if (root.document && root.document.visibilityState === 'hidden') return; // dilanjutkan saat tab terlihat lagi
    sedangUlang = true; let h;
    try { h = await cobaServer(JEDA.batasDeteksi); } finally { sedangUlang = false; }
    if (srv) return;
    hasilDeteksi = h; ingatDeteksi(h);
    if (h.jenis === 'server') {
      langkahUlang = 0; janjiServer = Promise.resolve(h.sv);
      const c = pasangServer(h.sv);
      janjiSiap = Promise.resolve(c); janjiPemimpin = null;
      if (aktifkah()) kirimRingkasan({ segera: true });
      beri(); return;
    }
    if (h.jenis === 'sesi') { modeServer = true; aturStatus('mati', 'sesi-berakhir'); }
    else if (modeServer || penandaServer()) aturStatus('server-tak-terjangkau', null);
    else if (h.jenis === 'bukan') return; // jelas bukan server tim: berhenti mencoba
    jadwalUlang();
  }
  const pemilikProgres = () => { const s = UKP.store && UKP.store.get(); const a = s && s.profil && s.profil.akunServer; return typeof a === 'string' && a ? a : null; };
  function pasangServer(sv) {
    srv = sv; modeServer = true; langkahUlang = 0; if (tUlang) { clearTimeout(tUlang); tUlang = null; }
    const s = UKP.store && UKP.store.get();
    const pemilik = pemilikProgres();
    akunBeda = pemilik && pemilik !== sv.nama ? pemilik : null;
    if (s && s.profil && !akunBeda) {
      let ubah = false;
      // progres di perangkat ini sejak sekarang milik akun ini (dicek setiap kali tersambung)
      if (!pemilik) { s.profil.akunServer = sv.nama; ubah = true; }
      // nama akun server mengisi profil.nama bila masih kosong (sapaan Beranda, kolom Nama Anda)
      if (!(typeof s.profil.nama === 'string' && s.profil.nama.trim())) { s.profil.nama = sv.nama; ubah = true; }
      if (ubah) { try { UKP.store.save(); } catch (e) {} }
    }
    ctx = { server: true, uid: sv.nama, nama: sv.nama };
    if (terakhirKirim && terakhirKirim.uid !== sv.nama) terakhirKirim = null;
    // server belum menyimpan ringkasan akun ini (akun baru, atau disk sementara di hosting gratis terhapus): kirim ulang walau isi sama
    if (!sv.adaHasil) terakhirKirim = null;
    aturStatus('tersambung', akunBeda ? 'akun-berbeda' : null);
    mulaiDetak();
    // berbagi dimatikan: hapus ringkasan yang masih ada di server (penghapusan sebelumnya gagal, atau dimatikan saat tidak tersambung)
    if (!akunBeda && !aktifkah()) { const t = lsGet(KUNCI_HAPUS, null); if (t === true || t === sv.nama || sv.adaHasil) hapusTertunda(); }
    return ctx;
  }
  function hapusTertunda() {
    const f = async () => { if (!srv || akunBeda || aktifkah()) return; await hapusServer(); beri(); };
    const p = rantai.then(f, f); rantai = p.catch(() => {}); return p;
  }
  // perangkat bersama: arsipkan progres akun lama, lalu pulihkan arsip akun yang masuk (bila ada) atau mulai progres baru
  function gantiPemilikProgres() {
    if (!srv || !akunBeda || !UKP.store) return null;
    const lama = akunBeda, baru = srv.nama;
    const arsipLama = JSON.parse(JSON.stringify(UKP.store.get()));
    if (!lsSet('ukp.arsip:' + lama, arsipLama)) return null; // penyimpanan penuh: jangan hapus apa pun
    if (UKP.store.flush) UKP.store.flush();
    const arsip = lsGet('ukp.arsip:' + baru, null);
    let hasil = 'baru';
    if (isObj(arsip) && isObj(arsip.profil)) { try { UKP.store.impor(arsip); hasil = 'pulih'; } catch (e) { UKP.store.reset(); } }
    else UKP.store.reset();
    if (hasil === 'pulih') { try { root.localStorage.removeItem('ukp.arsip:' + baru); } catch (e) {} }
    const s = UKP.store.get(); s.profil.akunServer = baru;
    if (!(typeof s.profil.nama === 'string' && s.profil.nama.trim())) s.profil.nama = baru;
    UKP.store.save(); if (UKP.store.flush) UKP.store.flush();
    akunBeda = null; terakhirKirim = null; lsSet(KUNCI_KIRIM, null); generasi++;
    aturStatus('tersambung', null);
    if (aktifkah()) kirimRingkasan({ segera: true });
    else { const t = lsGet(KUNCI_HAPUS, null); if (t === true || t === baru || srv.adaHasil) hapusTertunda(); }
    beri();
    return hasil;
  }
  function sesiBerakhir() {
    if (!srv) return;
    srv = null; ctx = null; janjiPemimpin = null; onlineServer = new Set(); modeAliran = null; akunBeda = null; hentikanDetak();
    janjiSiap = Promise.resolve(null); janjiServer = null; hasilDeteksi = { jenis: 'sesi' };
    aturStatus('mati', 'sesi-berakhir');
    jadwalUlang();
  }
  function galatServer(r) {
    if (r && r.status === 401) return sesiBerakhir();
    aturStatus(status, !r ? 'gagal' : r.status === 429 ? 'kuota' : r.status === 413 ? 'terlalu-besar' : 'gagal');
  }
  // detak: permintaan ringan tiap 60 dtk selama tab terlihat — dasar "online" di server, dan mendeteksi sesi yang berakhir
  function mulaiDetak() {
    hentikanDetak(); if (typeof setInterval !== 'function') return;
    tDetak = setInterval(() => { if (!root.document || root.document.visibilityState !== 'hidden') detak(); }, JEDA.detak);
    if (tDetak && tDetak.unref) tDetak.unref();
  }
  function hentikanDetak() { if (tDetak) { clearInterval(tDetak); tDetak = null; } }
  async function detak() {
    if (!srv) return;
    let r = null; try { r = await api('api/saya', { batas: 10000 }); } catch (e) { return; }
    if (!r) return;
    if (r.status === 401) return sesiBerakhir();
    if (r.ok && !aktifkah() && !akunBeda && lsGet(KUNCI_HAPUS, null)) hapusTertunda();
    if (r.ok) { try { const sv = bacaSaya(await r.json()); if (sv && srv && sv.admin !== srv.admin) { srv.admin = sv.admin; janjiPemimpin = null; beri(); } } catch (e) {} }
  }
  async function kirimServer(c, dok, h, gen) {
    let r = null; try { r = await api('api/hasil', { method: 'PUT', body: dok, batas: 15000 }); } catch (e) { r = null; }
    // berbagi dimatikan selama kiriman berjalan: ringkasan yang baru mendarat langsung dihapus
    if (gen !== generasi || !aktifkah()) { if (r && r.ok) await hapusServer(); return; }
    if (r && r.ok) { terakhirKirim = { uid: c.uid, hash: h, pada: dok.diperbarui }; lsSet(KUNCI_KIRIM, terakhirKirim); aturStatus('tersambung', null); beri(); return; }
    galatServer(r);
  }
  async function hapusServer() {
    let r = null; try { r = await api('api/hasil', { method: 'DELETE', batas: 15000 }); } catch (e) { r = null; }
    if (r && r.ok) { terakhirKirim = null; lsSet(KUNCI_KIRIM, null); const t = lsGet(KUNCI_HAPUS, null); if (t === true || (srv && t === srv.nama)) lsSet(KUNCI_HAPUS, null); beri(); return true; }
    galatServer(r); return false;
  }
  function aturOnline(arr) {
    const baru = new Set((Array.isArray(arr) ? arr : []).filter(x => typeof x === 'string' && ID_RE.test(x)).slice(0, 500));
    const sama = baru.size === onlineServer.size && Array.from(baru).every(x => onlineServer.has(x));
    if (!sama) onlineServer = baru;
    return !sama;
  }
  // admin: GET api/tim lalu aliran SSE; aliran gagal → polling tiap JEDA.poll, lalu SSE dicoba lagi. Perubahan isi diteruskan ke feed Langsung.
  function pantauServer(cb) {
    if (!srv || !srv.admin) { cb([], info()); return () => {}; }
    let henti = false, ac = null, tTidur = null, bangun = null;
    const peta = new Map();
    const kirimCb = () => { if (!henti) cb(Array.from(peta.values()).map(a => Object.assign({}, a)), info()); };
    const kabari = ev => pendengarLangsung.forEach(f => { try { f(ev); } catch (e) {} });
    function terapkan(raw, kabarkan) {
      const id = typeof raw.id === 'string' ? raw.id : raw.nama;
      const a = normalAnggota(raw, id, 'server'); if (!a || a.id === 'tanpa-id') return null;
      a.saya = !!srv && a.id === srv.nama;
      const lama = peta.get(a.id); peta.set(a.id, a);
      if (kabarkan && (!lama || sidikAnggota(lama) !== sidikAnggota(a))) kabari({ anggota: a, sebelum: lama || null });
      return a;
    }
    function hapus(id, kabarkan) { if (peta.delete(id) && kabarkan) kabari({ anggota: null, dihapus: id }); }
    async function muatSemua(kabarkan) {
      let r = null; try { r = await api('api/tim', { batas: 15000 }); } catch (e) { r = null; }
      if (henti) return false;
      if (!r || !r.ok) { galatServer(r); kirimCb(); return false; }
      let j = null; try { j = await r.json(); } catch (e) { j = null; }
      if (!isObj(j) || !Array.isArray(j.hasil)) return false;
      const ada = new Set();
      j.hasil.filter(isObj).slice(0, 1000).forEach(raw => { const a = terapkan(raw, kabarkan); if (a) ada.add(a.id); });
      Array.from(peta.keys()).forEach(id => { if (!ada.has(id)) hapus(id, kabarkan); });
      aturOnline(j.online);
      penggunaServer = (Array.isArray(j.pengguna) ? j.pengguna : []).filter(p => isObj(p) && typeof p.nama === 'string' && ID_RE.test(p.nama)).slice(0, 1000)
        .map(p => ({ nama: p.nama, admin: p.admin === true, terakhirMasuk: tglOk(p.terakhirMasuk) }));
      if (galat === 'gagal' || galat === 'kuota') aturStatus(status, null);
      kirimCb(); return true;
    }
    function prosesEvent(blok) {
      let ev = 'message', data = '';
      blok.split(/\r?\n/).forEach(b => { if (b.startsWith('event:')) ev = b.slice(6).trim(); else if (b.startsWith('data:')) data += b.slice(5).replace(/^ /, ''); });
      let d = null; try { d = data ? JSON.parse(data) : null; } catch (e) { return; }
      if (ev === 'ping') { if (isObj(d) && aturOnline(d.online)) { beri(); kirimCb(); } }
      else if (ev === 'hasil' && isObj(d)) {
        if (d.aksi === 'simpan' && isObj(d.dok)) { terapkan(d.dok, true); kirimCb(); }
        else if (d.aksi === 'hapus' && typeof d.nama === 'string') { hapus(d.nama, true); kirimCb(); }
      }
    }
    async function aliranSse() {
      if (typeof root.AbortController !== 'function' || typeof TextDecoder === 'undefined') throw new Error('tanpa stream');
      ac = new root.AbortController();
      const r = await root.fetch('api/tim/aliran', { credentials: 'same-origin', cache: 'no-store', headers: Object.assign({ Accept: 'text/event-stream' }, HDR), signal: ac.signal });
      if (r.status === 401) { sesiBerakhir(); return; }
      if (!r.ok || !r.body || typeof r.body.getReader !== 'function' || !/event-stream/.test(String(r.headers && r.headers.get && r.headers.get('content-type') || ''))) throw new Error('aliran ' + r.status);
      if (modeAliran !== 'sse') { modeAliran = 'sse'; beri(); kirimCb(); }
      const rd = r.body.getReader(); const dc = new TextDecoder(); let buf = '';
      for (;;) {
        const { done, value } = await rd.read(); if (done || henti) break;
        buf += dc.decode(value, { stream: true });
        let i; while ((i = buf.search(/\r?\n\r?\n/)) >= 0) { const m = /\r?\n\r?\n/.exec(buf.slice(i)); prosesEvent(buf.slice(0, i)); buf = buf.slice(i + m[0].length); }
        if (buf.length > 512 * 1024) throw new Error('event terlalu besar');
      }
      throw new Error('aliran ditutup');
    }
    const tidur = ms => new Promise(r => { bangun = r; tTidur = setTimeout(r, ms); });
    (async () => {
      await muatSemua(false); // daftar awal hanya menjadi acuan feed
      while (!henti && srv) {
        try { await aliranSse(); } catch (e) { /* jatuh ke polling */ }
        if (henti || !srv) break;
        if (modeAliran !== 'polling') { modeAliran = 'polling'; beri(); kirimCb(); }
        // tiga putaran polling, lalu SSE dicoba lagi (mis. server baru bangun dari tidur)
        for (let k = 0; k < 3 && !henti && srv; k++) { await tidur(JEDA.poll); if (!henti) await muatSemua(true); }
      }
    })().catch(() => {});
    return () => { henti = true; if (ac) { try { ac.abort(); } catch (e) {} } if (tTidur) clearTimeout(tTidur); if (bangun) bangun(); if (srv && !pendengarLangsung.size) modeAliran = null; };
  }
  // tombol Keluar (Pengaturan › Tim, mode server): cabut sesi lewat POST keluar, lalu ke halaman masuk (yang membersihkan salinan aplikasi)
  async function keluarServer() {
    try { await root.fetch('keluar', { method: 'POST', credentials: 'same-origin', headers: HDR }); } catch (e) {}
    hentikanDetak(); srv = null; ctx = null; akunBeda = null;
    try { root.location.replace('masuk?keluar=1'); } catch (e) {}
  }

  UKP.tim = {
    siap, status: () => status, info, kirimRingkasan, hapusRingkasan, pantau, pemimpin, bolehDasbor, profil,
    get aktif() { return aktifkah(); }, set aktif(v) { aturAktif(v); },
    kodeHasil, kodeHasilAsync, tempelKode, daftarManual, hapusManual, gabung,
    siapRoom, daftarTerima, hapusTerima, hapusLokal, dengarLangsung, statusLangsung, idAnon, keluarServer, gantiPemilikProgres,
    adaArsip: nama => !!(typeof nama === 'string' && lsGet('ukp.arsip:' + nama, null)),
    KOLEKSI, BATAS_LULUS, MAKS_JAWAB, MAKS_BYTE,
    // untuk uji
    _ringkasan: ringkasan, _normalAnggota: normalAnggota, _bacaKode: bacaKode, _kodeJson: kodeJson, _kodeZ: kodeZ, _inflateRaw: inflateRaw, _sidik: sidik, _pesanRoom: pesanRoom, _ringkasRoom: ringkasRoom,
    _jeda: JEDA, _deteksiServer: deteksiServer,
    _ulang() { hentikanDetak(); if (tUlang) { clearTimeout(tUlang); tUlang = null; } langkahUlang = 0; hasilDeteksi = null; modeServer = false; akunBeda = null; srv = null; janjiServer = null; modeAliran = null; onlineServer = new Set(); penggunaServer = []; hentikanRoom(); ikatUuid.clear(); ikatPeer.clear(); ember.clear(); tundaAnon.forEach(clearTimeout); tundaAnon.clear(); sudahHapus.clear(); janjiRoom = null; petaTerima = null; sidikDb.clear(); emitDitolak = false; terakhirRoom = null; janjiSiap = null; janjiPemimpin = null; generasi++; ctx = null; status = 'mati'; galat = null; tulisDitolak = false; terakhirKirim = lsGet(KUNCI_KIRIM, null); cacheZ = { kunci: null, kode: null }; },
  };

  // kiriman tertunda saat tab disembunyikan/ditutup; pindah rute memicu cek perubahan (murah: dibandingkan sidik)
  if (root.document && typeof root.document.addEventListener === 'function') {
    root.document.addEventListener('visibilitychange', () => { if (root.document.visibilityState === 'hidden' && tKirim) jalankan(); if (root.document.visibilityState === 'visible') { if (srv) detak(); else if (perluUlang()) jadwalUlang(true); } });
  }
  if (typeof root.addEventListener === 'function') root.addEventListener('online', () => { if (perluUlang()) jadwalUlang(true); else if (srv) detak(); });
  if (typeof root.addEventListener === 'function') root.addEventListener('hashchange', () => { if ((status === 'tersambung' || lewatRoom()) && aktifkah()) kirimRingkasan(); });
})(typeof window !== 'undefined' ? window : globalThis);
