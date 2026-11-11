/* MABAR UKP — Ujian tim (#ujiantim, #ujiantim/<kode>) dan lembar jawab pribadi (#lj). v8.1
   Lapisan data ada di js/learn.js (UKP.belajar.ujianTim = UT, UKP.belajar.lembarJawab, UKP.belajar.tempoUjian); view ini hanya memakainya.
   Keadaan view ujiantim:
   (i)   params.kode            → "Ikut ujian tim" (anggota membuka tautan; percobaan = simulasi format 'tim' lewat UKP.simulasiTim)
   (ii)  tanpa ujian aktif      → halaman awal: Susun ujian tim · Ikut ujian tim · Lembar jawab
   (iii) ujian aktif cara papan → runner satu layar (papan mode ujian di js/soal.js: UKP.c.soal(…, { bersama: { mode: 'ujian' } }))
   (iv)  ujian aktif perangkat  → ruang ujian (tautan, status kumpul, Kerjakan bagian saya, Tayangkan soal, Kumpulkan, Nilai)
   params.tayang (dengan ujian aktif) → layar tayang soal untuk proyektor (tanpa papan, tanpa kunci).
   Komponen: UKP.c.kartuUjianTim() (kartu ringkas ujian berjalan), UKP.ujianTimUI.dialogKumpul(opsi) (dialog tempel/ketik jawaban). */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten; const L = UKP.belajar;
  const UT = () => (L && L.ujianTim) || null;

  // ---------- pembantu ----------
  const z2 = n => String(n).padStart(2, '0');
  // j:mm:ss (selalu dengan jam, seperti hitung mundur CAT)
  const fmtJam = d => { d = Math.max(0, Math.round(d)); return Math.floor(d / 3600) + ':' + z2(Math.floor((d % 3600) / 60)) + ':' + z2(d % 60); };
  const sisaDetik = u => u && u.akhir ? Math.max(0, Math.round((u.akhir - Date.now()) / 1000)) : null;
  const kunciNama = n => String(n == null ? '' : n).replace(/\s+/g, ' ').trim().toLowerCase();
  const cariPeserta = (daftar, nama) => { const k = kunciNama(nama); return k ? (daftar || []).find(x => kunciNama(x) === k) || null : null; };
  const namaProfil = () => { try { return L.rapikanNamaPeserta(UKP.store.get().profil.nama || ''); } catch (e) { return ''; } };
  const BUKAN_TEKS = /^(radio|checkbox|button|submit|reset|range|color|file|image|hidden)$/i;
  const mengetik = t => !!t && t.nodeType === 1 && (t.isContentEditable || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || (t.tagName === 'INPUT' && !BUKAN_TEKS.test(t.type || 'text')));
  const sempit = () => window.innerWidth < 600;
  // tautan ujian dari alamat halaman ini (situs boleh di subjalur, mis. /Latihan-UKP/): origin + pathname + #ujiantim/<kode>
  function tautanUjian(kode) {
    const asal = location.origin && location.origin !== 'null' ? location.origin : location.protocol + '//';
    return asal + location.pathname + UKP.href('ujiantim', { kode });
  }
  // tautan hanya berguna bila aplikasi dibuka sebagai website (bukan file:// atau pratinjau claude.ai)
  const bukanWebsite = () => location.protocol === 'file:' || /(^|\.)claude\.ai$|claudeusercontent\.com$/.test(location.hostname || '');
  const kodeDari = u => UT().buatKode({ id: u.id, judul: u.judul, tingkat: u.tingkat, menit: u.menit, soalIds: u.soalIds });
  // kode mentah dari tempelan (kode, URL, atau teks yang memuatnya); null bila tidak sah
  function ambilKode(teks) {
    let t = String(teks || '');
    for (let i = 0; i < 2; i++) { try { const d = decodeURIComponent(t); if (d === t) break; t = d; } catch (e) { break; } }
    const m = t.match(/UT1\.[A-Za-z0-9._~-]*[A-Za-z0-9]/);
    return m && UT().bacaKode(m[0]) ? m[0] : null;
  }
  // v9.4 FA3/FA4: lembar jawab yang kunci jawabannya pernah tampil di HP ini, PER UJIAN, bersama jawaban saat dikunci.
  // Satu kunci penyimpanan: localStorage['ukp.lj.beku'] = { [ujianId]: { j: 'CBBA-', r: '00010', t } }, paling banyak 20 terbaru.
  // Tidak terhapus oleh Kosongkan, berganti kode ujian, atau muat ulang: lembar ujian itu terkunci selamanya di HP ini.
  const KBEKU = 'ukp.lj.beku'; const MAKS_BEKU = 20;
  // murni: buang isi rusak, simpan MAKS_BEKU yang terbaru
  function rapikanBeku(m) {
    const o = {}; if (!m || typeof m !== 'object' || Array.isArray(m)) return o;
    Object.keys(m).filter(k => k && m[k] && typeof m[k] === 'object' && typeof m[k].j === 'string')
      .sort((a, b) => (Number(m[b].t) || 0) - (Number(m[a].t) || 0)).slice(0, MAKS_BEKU)
      .forEach(k => { o[k] = { j: m[k].j, r: typeof m[k].r === 'string' ? m[k].r : '', t: Number(m[k].t) || 0 }; });
    return o;
  }
  function bacaBeku() { try { return rapikanBeku(JSON.parse(root.localStorage.getItem(KBEKU) || 'null')); } catch (e) { return {}; } }
  function catatBeku(idU, jawaban, ragu, t) {
    if (!idU) return; const m = bacaBeku();
    m[idU] = { j: (jawaban || []).join(''), r: (ragu || []).map(x => x ? 1 : 0).join(''), t: Number(t) || Date.now() };
    try { root.localStorage.setItem(KBEKU, JSON.stringify(rapikanBeku(m))); } catch (e) {}
  }
  const bekuUjian = idU => (idU && bacaBeku()[idU]) || null;
  // murni: menempel kode ujian di lembar jawab → { aksi, tanya }
  //   aksi 'pulihkan': ujian itu sudah dikunci di HP ini → jawaban beku dipulihkan, lembar dikunci
  //   aksi 'kosong'  : berganti ke ujian lain → lembar baru kosong (jawaban ujian lama tidak dibawa)
  //   aksi 'tetap'   : lembar polos diberi kode ujian, atau kode ujian yang sama → jawaban tetap
  //   tanya: lembar yang tampil masih terbuka dan berisi jawaban yang akan hilang → minta persetujuan dulu
  function rencanaGantiKode(o) {
    o = o || {}; const pindah = o.lamaId !== o.baruId;
    if (o.baruBeku) return { aksi: 'pulihkan', tanya: !!(pindah && o.adaIsi && !o.lamaTerkunci) };
    if (o.lamaId && pindah) return { aksi: 'kosong', tanya: !!(o.adaIsi && !o.lamaTerkunci) };
    return { aksi: 'tetap', tanya: false };
  }
  const kartuSect =(judul, id, isi, kelas) => h('section', { class: 'card stack-sm' + (kelas ? ' ' + kelas : ''), 'aria-labelledby': id }, h('h2', { class: 'card-title', id }, judul), isi);
  const tautanWA = teks => 'https://wa.me/?text=' + encodeURIComponent(teks);
  const tombolWA = (teks, label, kelas) => h('a', { class: kelas || 'btn', href: tautanWA(teks), target: '_blank', rel: 'noopener' }, UKP.icon('chat', null, true), label || 'Kirim lewat WhatsApp');

  // ================= v8.2 room tim (UKP.ruang, js/ruang.js) =================
  // Semua akses dijaga: tanpa room (claude.ai, file://, modul tidak ada) alur v8.1 berjalan apa adanya.
  const ruang = () => { const r = UKP.ruang; return r && typeof r.info === 'function' && typeof r.state === 'function' ? r : null; };
  const diRoom = () => { const r = ruang(); try { return r && r.info() ? r : null; } catch (e) { return null; } };
  const roomTuan = () => { const r = diRoom(); try { return r && r.info().peran === 'tuan' ? r : null; } catch (e) { return null; } };
  const aktivitasRoom = () => { const r = diRoom(); try { const st = r && r.state(); return (st && st.aktivitas) || null; } catch (e) { return null; } };
  // ujian u sudah disiarkan ke room (aktivitas ujian ber-id sama)
  const tersiar = u => { const a = aktivitasRoom(); return !!(u && a && a.jenis === 'ujian' && a.id === u.id); };
  const pesertaRoom = () => { const r = diRoom(); try { const st = r && r.state(); return st && st.room && Array.isArray(st.room.peserta) ? st.room.peserta.slice() : null; } catch (e) { return null; } };
  // pemandu: siarkan ujian aktif cara perangkat ke room (ut.mulai() lebih dulu agar mulai/akhir pasti ada); → true bila terkirim
  function siarkanUjian() {
    const r = roomTuan(); const ut = UT(); if (!r || !ut) return false;
    const u = ut.mulai(); if (!u || u.cara !== 'perangkat') return false;
    let ok = false; try { ok = !!r.mulaiUjian({ id: u.id, kode: kodeDari(u), judul: u.judul, mulai: u.mulai, akhir: u.akhir }); } catch (e) { console.error(e); }
    return ok;
  }
  // dokumen jawaban room → isi larik sejajar soalIds (huruf tidak pernah ditampilkan; hanya dihitung)
  const isiDok = (u, dok) => u.soalIds.map(id => /^[A-D]$/.test((dok && dok.j && dok.j[id]) || '') ? dok.j[id] : '-');
  const raguDok = (u, dok) => u.soalIds.map(id => !!(dok && dok.k && dok.k[id] === 'ragu'));
  const dilepasRoom = new Map(); // ujianId|nama → isi yang dilepas pemandu (tidak dikumpulkan ulang otomatis)
  // pengumpul otomatis: dokumen room yang selesai → UT.kumpul(…, sumber 'room'); → true bila ada perubahan
  function kumpulDariRoom(nama, dok) {
    const ut = UT(); const u = ut && ut.aktif ? ut.aktif() : null;
    if (!u || u.cara !== 'perangkat' || !dok || dok.aktivitas !== u.id || !dok.selesai || !nama) return false;
    const jawaban = isiDok(u, dok), ragu = raguDok(u, dok);
    const sidik = jawaban.join('') + '|' + ragu.map(Number).join('');
    if (dilepasRoom.get(u.id + '|' + kunciNama(nama)) === sidik) return false;
    const p = cariPeserta(u.peserta, nama); const ada = p && u.terkumpul && u.terkumpul[p];
    if (ada && (ada.jawaban || []).join('') + '|' + (ada.ragu || []).map(Number).join('') === sidik) return false;
    return !!ut.kumpul(nama, { jawaban, ragu, detik: dok.detik, sumber: 'room' });
  }
  // semua dokumen room untuk ujian aktif (dipakai saat ruang ujian dibuka dan tepat sebelum dinilai)
  function sapuRoom() {
    const r = diRoom(); const ut = UT(); const u = ut && ut.aktif ? ut.aktif() : null; if (!r || !u) return false;
    let ubah = false; try { const semua = r.jawabanSemua(u.id) || {}; Object.keys(semua).forEach(nm => { if (kumpulDariRoom(nm, semua[nm])) ubah = true; }); } catch (e) { console.error(e); }
    return ubah;
  }
  // pendengar tingkat modul: tetap mengumpulkan saat pemandu membuka halaman lain
  let segarkanRuangHidup = null;
  (function pasangPengumpul() {
    const r = ruang(); if (!r || typeof r.on !== 'function') return;
    try {
      r.on('jawaban', ev => {
        try {
          if (!ev || !ev.dok) return; const ut = UT(); const u = ut && ut.aktif ? ut.aktif() : null; if (!u || ev.aktivitas !== u.id) return;
          kumpulDariRoom(ev.nama, ev.dok);
          if (segarkanRuangHidup) segarkanRuangHidup();
        } catch (e) { console.error(e); }
      });
    } catch (e) { console.error(e); }
  })();
  const statusRoomPill = () => { try { return typeof UKP.c.statusRoom === 'function' ? UKP.c.statusRoom({ ringkas: true }) : null; } catch (e) { return null; } };
  // v9.3.2 B2: siapa yang pernah tersambung ke room sejak ujian dimulai (ujianId → Set kunciNama), di memori tab pemimpin.
  // v9.3.2 P2: juga disimpan di localStorage perangkat pemimpin (ujian terakhir saja, KPERNAH = { id, nama: [kunciNama] }). Tanpa itu,
  // anggota yang masuk lobi SEBELUM ujian dimulai lalu terputus kembali tertulis "belum masuk room" setelah laptop dimuat ulang:
  // kabar hadir terakhirnya (wasiat offline) bercap waktu saat ia tersambung, yaitu sebelum ujian dimulai. Cadangan tetap: cap waktu
  // kabar hadir sesudah ujian dimulai (lihat dataPeserta).
  const pernahTersambung = new Map();
  const KPERNAH = 'ukp.ujianTim.pernah';
  // (murni) isi tersimpan → Set kunciNama untuk ujianId (kosong bila milik ujian lain atau rusak)
  function pulihkanPernah(simpan, ujianId) {
    if (!ujianId || !simpan || typeof simpan !== 'object' || simpan.id !== ujianId || !Array.isArray(simpan.nama)) return new Set();
    return new Set(simpan.nama.filter(x => typeof x === 'string' && x).slice(-200));
  }
  function setPernah(ujianId) {
    let set = pernahTersambung.get(ujianId); if (set) return set;
    let simpan = null; try { simpan = JSON.parse(root.localStorage.getItem(KPERNAH) || 'null'); } catch (e) { simpan = null; }
    set = pulihkanPernah(simpan, ujianId); pernahTersambung.set(ujianId, set);
    while (pernahTersambung.size > 4) pernahTersambung.delete(pernahTersambung.keys().next().value);
    return set;
  }
  function catatTersambung(ujianId, nama) {
    if (!ujianId || !nama) return; const set = setPernah(ujianId); const k = kunciNama(nama); if (!k || set.has(k)) return;
    set.add(k);
    try { root.localStorage.setItem(KPERNAH, JSON.stringify({ id: ujianId, nama: Array.from(set).slice(-200) })); } catch (e) {}
  }
  (function pasangPencatatHadir() {
    const r = ruang(); if (!r || typeof r.on !== 'function') return;
    try { r.on('hadir', ev => { try { if (!ev || !ev.online) return; const ut = UT(); const u = ut && ut.aktif ? ut.aktif() : null; if (u && u.cara === 'perangkat' && tersiar(u)) catatTersambung(u.id, ev.nama); } catch (e) { console.error(e); } }); } catch (e) { console.error(e); }
  })();
  // v9.3.2 B2 (murni): status satu baris peserta di ruang ujian pemimpin.
  // o = { n, pakaiRoom, mengumpulkan, terisi, sumber ('room'|'sendiri'|…), nIsi (null = tanpa dokumen jawaban), online, pernah, pemimpin, mulaiSaya }
  // → { st: 'belum'|'masuk'|'kerja'|'putus'|'kumpul'|'saya', nada: null|'garis'|'info'|'warn'|'ok', teks }
  function statusPeserta(o) {
    o = o || {}; const n = o.n || 0; const isi = x => (x || 0) + '/' + n + ' terisi';
    if (o.mengumpulkan) return { st: 'kumpul', nada: 'ok', teks: 'sudah mengumpulkan · ' + isi(o.terisi) + (o.sumber === 'sendiri' ? ' · perangkat ini' : o.sumber === 'room' ? ' · lewat room' : '') };
    if (!o.pakaiRoom) return { st: 'belum', nada: null, teks: 'belum' };
    const adaDok = o.nIsi != null;
    if (o.pemimpin && !adaDok && !o.mulaiSaya) return { st: 'saya', nada: 'garis', teks: 'Anda · belum mengerjakan' };
    if (o.pemimpin || o.online) return adaDok || o.pemimpin ? { st: 'kerja', nada: 'info', teks: 'sedang mengerjakan · ' + isi(o.nIsi) } : { st: 'masuk', nada: 'garis', teks: 'sudah masuk, belum mulai' };
    if (adaDok) return { st: 'putus', nada: 'warn', teks: 'HP terputus · ' + isi(o.nIsi) };
    if (o.pernah) return { st: 'putus', nada: 'warn', teks: 'HP terputus' };
    return { st: 'belum', nada: null, teks: 'belum masuk room' };
  }
  // v9.3.2 B2 (murni): baris ringkas di atas daftar. Sudah masuk room = semua kecuali "belum masuk room" (yang terputus pernah masuk).
  function barisRingkas(daftarSt, total) {
    const st = Array.isArray(daftarSt) ? daftarSt : []; const P = total == null ? st.length : total;
    const masuk = st.filter(x => x && x !== 'belum').length, kerja = st.filter(x => x === 'kerja').length, kumpul = st.filter(x => x === 'kumpul').length;
    return masuk + ' dari ' + P + ' sudah masuk room · ' + kerja + ' sedang mengerjakan · ' + kumpul + ' sudah mengumpulkan';
  }

  // v9.3.2 (murni): saran satu kalimat untuk pemimpin di bawah baris ringkas: apa yang perlu dilakukan untuk yang belum tersambung.
  // → { belum (jumlah "belum masuk room"), teks | null }
  function saranRuang(daftarSt) {
    const st = Array.isArray(daftarSt) ? daftarSt : [];
    const belum = st.filter(x => x === 'belum').length, putus = st.filter(x => x === 'putus').length, masuk = st.filter(x => x === 'masuk').length;
    const bag = [];
    if (belum) bag.push(belum + ' orang belum masuk room: kirim lagi tautan room ke mereka.');
    if (putus || masuk) bag.push('Yang terputus atau belum mulai: minta ia membuka lagi tautan room di HP-nya.');
    return { belum, teks: bag.length ? bag.join(' ') : null };
  }

  // ================= kartu ringkas ujian tim berjalan =================
  UKP.c.kartuUjianTim = function () {
    const ut = UT(); const u = ut && ut.aktif ? ut.aktif() : null; if (!u) return null;
    const n = u.soalIds.length; let meta, aksi;
    // v8.2: di dalam blok Tim (UKP.c.kartuRoom) tombol utama sudah ada → tombol kartu ini sekunder (tepat satu primer)
    const primer = diRoom() && typeof UKP.c.kartuRoom === 'function' ? 'btn' : 'btn btn-primary';
    // v8.2 V4: di Beranda, blok Tim sudah memuat "Ujian tim sedang berjalan" + tombol utama "Buka ruang ujian" → kartu ini tidak diulang
    if (primer === 'btn' && tersiar(u) && UKP.sekarang && (UKP.sekarang() || {}).view === 'beranda') return null;
    if (u.cara === 'papan') {
      const sisa = sisaDetik(u);
      meta = 'soal ' + (Math.min(n - 1, u.posisi || 0) + 1) + ' dari ' + n + (sisa != null ? ' · sisa ' + fmtJam(sisa) : ' · belum dimulai');
      aksi = h('button', { type: 'button', class: primer, onclick: () => UKP.go('ujiantim') }, UKP.icon('play', null, true), 'Lanjutkan');
    } else {
      const r = ut.ringkas(); const nK = u.peserta.filter(p => r.perPeserta[p] && r.perPeserta[p].mengumpulkan).length;
      meta = nK + ' dari ' + u.peserta.length + ' sudah mengumpulkan' + (tersiar(u) ? ' · lewat room' : '');
      aksi = h('button', { type: 'button', class: primer, onclick: () => UKP.go('ujiantim') }, 'Buka ujian tim');
    }
    return h('section', { class: 'card sorot kartu-ujian-tim', 'aria-label': 'Ujian tim berjalan' },
      h('div', { class: 'kut-teks' }, h('strong', null, u.cara === 'papan' ? 'Ujian tim berjalan' : 'Ujian tim'), h('span', { class: 'meta' }, u.judul + ' · ' + meta)), aksi);
  };

  // v9.2 G3: saran nama hanya dari daftar yang tersimpan di perangkat ini (anggota latihan bersama dan room yang pernah dibuka); tanpa nama dari kode
  function namaTersimpan() {
    const out = []; const tambah = n => { const t = typeof n === 'string' ? L.rapikanNamaPeserta(n) : ''; if (t && !out.some(x => x.toLowerCase() === t.toLowerCase())) out.push(t); };
    try { const s = UKP.store.get(); if (s.bersama && Array.isArray(s.bersama.peserta)) s.bersama.peserta.forEach(tambah);
      const st = s.ruang && s.ruang.state; if (st && st.room && Array.isArray(st.room.peserta)) st.room.peserta.forEach(tambah); } catch (e) {}
    return out.slice(0, 12);
  }
  // ================= dialog "Kumpulkan jawaban" / "Tempel lembar jawab" =================
  // opsi: { judul, onSimpan() }. Tempelan diurai langsung dengan UT.bacaBanyak(teks, n); baris ketik manual per peserta.
  function dialogKumpul(opsi) {
    opsi = opsi || {}; const ut = UT(); let u = ut.aktif(); if (!u) return null;
    const n = u.soalIds.length; const id = U.id('kumpul');
    const ta = h('textarea', { class: 'input mono kumpul-tempel', id: id + '-ta', rows: 4, spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', placeholder: 'UKPJ1.… atau  Budi: ABCD-AB?C…' });
    const daftarHasil = h('ul', { class: 'kumpul-hasil', 'aria-live': 'polite', 'aria-label': 'Jawaban terbaca' });
    let hasil = []; // [{ r, target: nama|''|'+nama' }]
    const opsiTarget = (r, pilih) => {
      const sel = h('select', { class: 'select kumpul-target', 'aria-label': 'Jawaban ini milik' });
      const isi = [h('option', { value: '' }, 'Pilih anggota…')].concat(u.peserta.map(p => h('option', { value: p }, p)));
      const nm = r.nama ? L.rapikanNamaPeserta(r.nama) : '';
      if (nm && !cariPeserta(u.peserta, nm)) isi.push(h('option', { value: '+' + nm }, 'Tambahkan ' + nm + ' sebagai anggota'));
      sel.append(...isi); sel.value = pilih; return sel;
    };
    const ringkasR = r => r.terisi + '/' + n + ' terisi · ' + r.nRagu + ' ragu · ' + r.kosong + ' tidak menjawab';
    function urai() {
      u = ut.aktif() || u; const teks = ta.value;
      const lama = new Map(hasil.map(x => [x.kunci, x.target]));
      hasil = (teks.trim() ? ut.bacaBanyak(teks, n) : []).map((r, i) => {
        const kunci = i + '|' + (r.nama || '');
        const cocok = cariPeserta(u.peserta, r.nama);
        const bawaan = cocok || (r.nama && L.rapikanNamaPeserta(r.nama) ? '+' + L.rapikanNamaPeserta(r.nama) : '');
        return { r, kunci, target: lama.has(kunci) ? lama.get(kunci) : bawaan };
      });
      daftarHasil.replaceChildren(...hasil.map(x => {
        const r = x.r; const cocok = cariPeserta(u.peserta, r.nama);
        const peringatan = [r.galat, r.ujianId && r.ujianId !== u.id ? 'Kode ini dari ujian lain.' : null].filter(Boolean);
        const sel = cocok ? null : opsiTarget(r, x.target);
        if (sel) sel.addEventListener('change', () => { x.target = sel.value; });
        return h('li', { class: 'kumpul-baris', 'data-galat': peringatan.length ? '' : null },
          h('div', { class: 'kumpul-kepala' }, cocok ? h('strong', null, cocok) : h('span', { class: 'meta' }, r.nama ? '“' + r.nama + '” tidak ada di daftar' : 'Tanpa nama'), sel),
          h('span', { class: 'meta' }, ringkasR(r) + (r.ujianId ? ' · kode' : ' · ketikan')),
          peringatan.map(p => h('span', { class: 'small kumpul-galat' }, UKP.icon('peringatan', null, true), p)));
      }));
      if (!hasil.length && teks.trim()) daftarHasil.replaceChildren(h('li', { class: 'meta' }, 'Belum ada jawaban terbaca. Tulis satu baris per orang, mis. “Budi: ABCD-AB…”, atau tempel kode UKPJ1.'));
    }
    ta.addEventListener('input', urai);
    // ketik manual per peserta
    const manual = {};
    const barisManual = u.peserta.map((p, i) => {
      const iid = id + '-m' + i; const hit = h('span', { class: 'meta kumpul-hitung', 'aria-live': 'polite' }, '0/' + n);
      const inp = h('input', { class: 'input mono', id: iid, type: 'text', autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', placeholder: 'ABCD-AB?C…', 'aria-describedby': iid + '-h' });
      hit.id = iid + '-h';
      inp.addEventListener('input', () => {
        const v = inp.value.trim(); if (!v) { hit.textContent = '0/' + n; delete manual[p]; return; }
        const r = ut.bacaJawaban('x: ' + v, n); manual[p] = r;
        hit.textContent = Math.min(r.panjang, 999) + '/' + n + (r.nRagu ? ' · ' + r.nRagu + ' ragu' : '');
        hit.toggleAttribute('data-galat', r.panjang !== n);
      });
      return h('div', { class: 'kumpul-manual-baris' }, h('label', { for: iid }, p), inp, hit);
    });
    const ringkasAda = () => { const rs = ut.ringkas(); return rs ? rs.perPeserta : {}; };
    async function simpan(dlg) {
      u = ut.aktif(); if (!u) { dlg.close('batal'); return; }
      const entri = [];
      hasil.forEach(x => { const t = cariPeserta(u.peserta, x.r.nama) || (x.target ? x.target.replace(/^\+/, '') : ''); if (t) entri.push({ nama: t, r: x.r, sumber: x.r.ujianId ? 'kode' : 'ketik' }); });
      Object.keys(manual).forEach(p => entri.push({ nama: p, r: manual[p], sumber: 'ketik' }));
      const tanpa = hasil.filter(x => !cariPeserta(u.peserta, x.r.nama) && !x.target).length;
      if (!entri.length) { UKP.toast(tanpa ? 'Pilih anggota untuk jawaban yang terbaca.' : 'Belum ada jawaban untuk disimpan.', { nada: 'warn' }); return; }
      // satu entri per orang (yang terakhir menang)
      const per = new Map(); entri.forEach(e => per.set(kunciNama(e.nama), e)); const akhir = [...per.values()];
      const ada = ringkasAda();
      const timpa = akhir.filter(e => { const p = cariPeserta(u.peserta, e.nama); return p && ada[p] && (ada[p].mengumpulkan || ada[p].terisi > 0); }).map(e => cariPeserta(u.peserta, e.nama));
      if (timpa.length && !(await UKP.konfirmasi('Timpa jawaban yang sudah ada?', 'Jawaban ' + L.gabungNama(timpa) + ' sudah tercatat dan akan diganti dengan yang baru.', { ya: 'Timpa' }))) return;
      let ok = 0; akhir.forEach(e => { if (ut.kumpul(e.nama, { jawaban: e.r.jawaban, ragu: e.r.ragu, detik: e.r.detik, sumber: e.sumber })) ok++; });
      dlg.close('simpan');
      UKP.toast(ok ? 'Jawaban ' + ok + ' orang tersimpan.' : 'Jawaban gagal disimpan.', { nada: ok ? 'ok' : 'attn' });
      if (typeof opsi.onSimpan === 'function') opsi.onSimpan();
    }
    return UKP.dialog({ judul: opsi.judul || 'Kumpulkan jawaban', ukuran: 'lg', kelas: 'dlg-kumpul',
      isi: () => h('div', { class: 'stack' },
        h('div', { class: 'field' }, h('label', { for: id + '-ta' }, 'Tempel kode jawaban atau ketikan huruf, satu baris per orang'), ta,
          h('p', { class: 'meta' }, n + ' soal · huruf A–D, “-” = tidak menjawab, “?” sesudah huruf = ragu')),
        daftarHasil,
        h('details', { class: 'lipat kumpul-manual' }, h('summary', null, 'Ketik manual per orang'), h('div', { class: 'stack-sm' }, barisManual))),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, 'Batal'), h('button', { type: 'button', class: 'btn btn-primary kumpul-simpan', onclick: () => simpan(dlg) }, 'Simpan')] });
  }

  // ================= (i) Ikut ujian tim (anggota membuka tautan) =================
  function halamanIkut(kode) {
    const ut = UT(); const s = UKP.store.get(); const info = ut.bacaKode(kode);
    const page = h('div', { class: 'page halaman-ikut-tim' });
    if (!info) {
      page.append(UKP.c.kop({ eyebrow: 'Ujian tim', judul: 'Kode ujian tidak dikenali' }),
        UKP.c.banner('Kode atau tautan ini tidak utuh atau rusak. Minta pemimpin mengirim ulang, lalu tempel di sini.', 'warn'),
        isianKode());
      return page;
    }
    const n = info.soalIds.length;
    page.appendChild(UKP.c.kop({ eyebrow: 'Ujian tim', judul: info.judul || 'Ujian tim', meta: [UKP.c.pill(n + ' soal'), UKP.c.pill(info.menit + ' menit', null, 'jam')] }));
    if (info.tidakDikenal && info.tidakDikenal.length) {
      page.append(UKP.c.banner('Versi aplikasi berbeda: muat ulang halaman ini lalu buka tautannya lagi. (' + info.tidakDikenal.length + ' dari ' + n + ' soal belum ada di perangkat ini.)', 'warn', null,
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { try { if (typeof UKP.perbaruiAplikasi === 'function') { UKP.perbaruiAplikasi(true); return; } } catch (e) {} location.reload(); } }, UKP.icon('atur-ulang', null, true), 'Muat ulang'))));
      return page;
    }
    // pernah mengerjakan ujian ini di perangkat ini
    const rek = (s.simulasi || []).slice().reverse().find(x => x && x.tim && x.tim.ujianId === info.id);
    if (rek && UKP.simulasiTim) {
      page.append(UKP.simulasiTim.kartuKirim(rek),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('simulasi', { hasil: rek.id }) }, 'Lihat hasil saya')));
      return page;
    }
    // v9.4 FA3: kunci jawaban ujian ini sudah terbuka di HP ini lewat Lembar jawab → ujian ini tidak ditawarkan lagi di HP ini
    if (bekuUjian(info.id)) {
      page.append(UKP.c.banner('Kunci jawaban ujian ini sudah terbuka di HP ini lewat Lembar jawab, jadi ujian ini tidak bisa dikerjakan lagi di HP ini.', 'warn'),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', 'data-k': 'ikut-ke-lj', onclick: () => UKP.go('lj') }, 'Buka lembar jawab')));
      return page;
    }
    // simulasi lain (atau ujian ini) sedang berjalan
    const aktif = s.simulasiAktif && !s.simulasiAktif.selesai ? s.simulasiAktif : null;
    if (aktif) {
      const sama = aktif.tim && aktif.tim.ujianId === info.id;
      const buang = async () => { if (await UKP.konfirmasi('Buang simulasi yang berjalan?', 'Jawaban simulasi itu akan hilang dan tidak dinilai.', { ya: 'Buang', bahaya: true })) { UKP.store.get().simulasiAktif = null; UKP.store.save(); UKP.render(); } };
      page.appendChild(h('section', { class: 'card sorot stack-sm', 'aria-label': 'Simulasi berjalan' },
        h('p', null, sama ? 'Anda sedang mengerjakan ujian ini.' : 'Ada simulasi lain yang belum dikirim. Lanjutkan dulu, atau buang agar bisa ikut ujian tim ini.'),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('simulasi', { jalan: true }) }, UKP.icon('play', null, true), sama ? 'Lanjutkan mengerjakan' : 'Lanjutkan simulasi itu'),
          sama ? null : h('button', { type: 'button', class: 'btn btn-danger btn-attn', onclick: buang }, UKP.icon('hapus', null, true), 'Buang'))));
      return page;
    }
    const iid = U.id('nama');
    const galat = h('p', { class: 'galat small', role: 'alert', hidden: true, id: iid + '-g' });
    const input = h('input', { class: 'input', id: iid, type: 'text', maxlength: String(L.MAKS_NAMA_PESERTA || 24), autocomplete: 'name', autocapitalize: 'words', spellcheck: 'false', enterkeyhint: 'go', value: namaProfil(), 'aria-describedby': iid + '-g' });
    const saran = namaTersimpan().map(nm => h('button', { type: 'button', class: 'chip', onclick: () => { input.value = nm; galat.hidden = true; input.removeAttribute('aria-invalid'); } }, nm));
    function mulai() {
      const nama = L.rapikanNamaPeserta(input.value);
      if (!nama) { galat.textContent = 'Tulis nama Anda agar pemimpin tahu jawaban siapa.'; galat.hidden = false; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
      // pengunjung baru yang datang lewat tautan ujian: cukup nama; tingkat mengikuti ujian, onboarding dianggap selesai
      const st = UKP.store.get(); if (!st.profil.nama) st.profil.nama = nama;
      if (!st.profil.onboardingSelesai) { st.profil.onboardingSelesai = true; if (['A', 'B', 'C'].includes(info.tingkat)) st.profil.tingkat = info.tingkat; }
      UKP.store.save(); try { if (UKP.perbaruiTopbar) UKP.perbaruiTopbar(); } catch (e) {}
      const a = UKP.simulasiTim.mulai({ ujianId: info.id, judul: info.judul, tingkat: info.tingkat, menit: info.menit, soalIds: info.soalIds, nama });
      if (!a) { UKP.toast('Ujian ini tidak berisi soal.', { nada: 'attn' }); return; }
      UKP.go('simulasi', { jalan: true });
    }
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); mulai(); } });
    page.appendChild(h('section', { class: 'card stack ikut-tim', 'aria-labelledby': 'ikut-j' },
      h('h2', { class: 'card-title', id: 'ikut-j' }, 'Ikut ujian tim'),
      h('p', { class: 'small' }, 'Kerjakan sendiri seperti CAT. Setelah dikirim, Anda mendapat kode jawaban satu baris untuk dikirim ke pemimpin.'),
      h('div', { class: 'field' }, h('label', { for: iid }, 'Nama Anda'), input, galat, saran.length ? h('div', { class: 'chip-row', role: 'group', 'aria-label': 'Pilih nama' }, saran) : null),
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-lg ikut-mulai', onclick: mulai }, UKP.icon('play'), 'Mulai mengerjakan'))));
    return page;
  }
  // isian tempel kode/tautan → #ujiantim/<kode>
  function isianKode() {
    const iid = U.id('kode');
    const galat = h('p', { class: 'galat small', role: 'alert', hidden: true });
    const input = h('input', { class: 'input mono', id: iid, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', enterkeyhint: 'go', placeholder: 'UT1.… atau tautan ujian' });
    const buka = () => { const k = ambilKode(input.value); if (!k) { galat.textContent = 'Kode tidak dikenali. Salin ulang kode atau tautan lengkap dari pemimpin.'; galat.hidden = false; input.setAttribute('aria-invalid', 'true'); input.focus(); return; } UKP.go('ujiantim', { kode: k }); };
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); buka(); } });
    input.addEventListener('input', () => { galat.hidden = true; input.removeAttribute('aria-invalid'); });
    return h('div', { class: 'field isian-kode' }, h('label', { for: iid }, 'Tempel kode atau tautan ujian'), h('div', { class: 'isian-baris' }, input, h('button', { type: 'button', class: 'btn', onclick: buka }, 'Buka')), galat);
  }

  // ================= (ii) halaman awal =================
  function halamanAwal(params) {
    const page = h('div', { class: 'page halaman-ujian-tim-awal' });
    // v8.2: pemandu room → susun langsung untuk room (cara perangkat, jawaban masuk lewat room)
    const keRoom = !!((params && params.room) || roomTuan());
    page.append(UKP.c.kop({ judul: 'Ujian tim', lead: 'Berlatih dalam kondisi ujian: kunci jawaban baru dibuka di akhir, waktu seperti UKP, nilai per orang.' }),
      h('div', { class: 'ut-aksi' },
        kartuSect('Susun ujian tim', 'ut-susun-j', [h('p', { class: 'small' }, keRoom ? 'Pilih soal dan waktu. Ujian dikirim ke room; anggota mengerjakan di HP masing-masing.' : 'Pemimpin memilih soal dan cara menjawab: satu layar, atau perangkat masing-masing.'), h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('simulasi', keRoom ? { tim: 1, cara: 'perangkat', room: 1 } : { tim: 1 }) }, 'Susun ujian tim'))]),
        kartuSect('Ikut ujian tim', 'ut-ikut-j', [h('p', { class: 'small' }, 'Punya kode atau tautan dari pemimpin? Tempel di sini.'), isianKode()]),
        kartuSect('Lembar jawab', 'ut-lj-j', [h('p', { class: 'small' }, 'Soal ditayangkan di layar bersama; isi jawaban Anda di HP.'), h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', onclick: () => UKP.go('lj') }, 'Buka lembar jawab'))])));
    return page;
  }

  // ---------- pembantu layar ujian (runner dan tayang) ----------
  async function batalkan() {
    if (!(await UKP.konfirmasi('Batalkan ujian tim?', 'Semua jawaban yang sudah dicatat akan hilang dan tidak dinilai.', { ya: 'Batalkan ujian', tidak: 'Kembali', bahaya: true }))) return false;
    const u0 = UT().aktif(); const r = roomTuan();
    if (r && tersiar(u0)) { try { r.akhiriAktivitas(); } catch (e) { console.error(e); } } // v8.2: ujian di room ikut berakhir
    UT().batal(); delete document.body.dataset.mode; UKP.toast('Ujian tim dibatalkan.'); UKP.go('ujiantim', {}, { replace: true }); return true;
  }
  function keHasil(sesi) { delete document.body.dataset.mode; UKP.go('tim', { anggota: 'sesi:' + sesi.id }, { replace: true }); }
  // v8.2: hasil ujian yang tersiar di room → tutup ujian, terbitkan rekaman ke room, akhiri aktivitas (urutan tetap)
  function tutupDiRoom(sesi) {
    const r = roomTuan(); if (!r || !sesi) return false;
    try { r.tutupUjian(); r.terbitkanSesi(sesi); r.akhiriAktivitas(); return true; } catch (e) { console.error(e); return false; }
  }
  // dialog daftar soal: kisi nomor dengan status (semua menjawab / sebagian / belum / ada ragu) dan ringkasan per orang
  function dialogDaftar(u, posisi, onPilih, denganOrang) {
    const r = UT().ringkas(); const P = u.peserta.length;
    const grid = h('div', { class: 'grid-nomor ut-grid' }, r.perSoal.map((x, i) => {
      const st = !P ? 'kosong' : x.nRagu ? 'ragu' : x.nIsi >= P ? 'isi' : x.nIsi > 0 ? 'sebagian' : 'kosong';
      const ket = st === 'ragu' ? 'ada ragu' : st === 'isi' ? 'semua sudah menjawab' : st === 'sebagian' ? x.nIsi + ' dari ' + P + ' menjawab' : 'belum ada yang menjawab';
      return h('button', { type: 'button', 'data-st': st, 'aria-current': i === posisi ? 'true' : null, 'aria-label': 'Soal ' + (i + 1) + ', ' + ket + (i === posisi ? ', soal saat ini' : ''), title: ket, onclick: () => { dlg.close('pilih'); onPilih(i); } }, i + 1);
    }));
    const legenda = h('div', { class: 'legenda' }, h('span', { 'data-st': 'isi' }, 'semua menjawab'), h('span', { 'data-st': 'sebagian' }, 'sebagian'), h('span', { 'data-st': 'kosong' }, 'belum ada yang menjawab'), h('span', { 'data-st': 'ragu' }, 'ada ragu'));
    const orang = denganOrang && P ? h('table', { class: 'tabel ut-orang' }, h('caption', { class: 'visually-hidden' }, 'Ringkasan per orang'),
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Nama'), h('th', { scope: 'col', class: 'num' }, 'Terisi'), h('th', { scope: 'col', class: 'num' }, 'Tidak menjawab'), h('th', { scope: 'col', class: 'num' }, 'Ragu'))),
      h('tbody', null, u.peserta.map(p => { const q = r.perPeserta[p] || { terisi: 0, kosong: r.n, nRagu: 0 }; return h('tr', null, h('th', { scope: 'row' }, p), h('td', { class: 'num' }, String(q.terisi)), h('td', { class: 'num' }, String(q.kosong)), h('td', { class: 'num' }, String(q.nRagu))); }))) : null;
    const dlg = UKP.dialog({ judul: 'Daftar soal', sheet: sempit(), isi: () => h('div', { class: 'stack' }, grid, legenda, orang) });
    return dlg;
  }

  // ================= (iii) runner satu layar (cara papan) =================
  function runnerPapan() {
    const ut = UT(); ut.mulai(); let u = ut.aktif();
    document.body.dataset.mode = 'ujian';
    const n = u.soalIds.length;
    const page = h('div', { class: 'page lebar halaman-ujian-tim' });
    const live = h('div', { class: 'visually-hidden', role: 'status', 'aria-live': 'polite' });
    const judulBar = h('span', { class: 'ut-judul' });
    const posBar = h('span', { class: 'ut-pos' });
    const timerEl = h('span', { class: 'timer', role: 'timer', 'aria-label': 'Sisa waktu' });
    const sisaEl = h('span', { class: 'sisa tiny', hidden: true }); // teks diisi hanya pada 5 menit terakhir
    const menu = UKP.c.menuLebih({ label: 'Aksi ujian', item: [
      { teks: 'Tempel lembar jawab', ikon: 'tambah', onclick: () => dialogKumpul({ judul: 'Tempel lembar jawab', onSimpan: () => gambar(false) }) },
      { teks: 'Tambah 5 menit', ikon: 'jam', onclick: () => tambah5() },
      { teks: 'Batalkan ujian', ikon: 'hapus', onclick: () => batalkan() }] });
    const bar = h('div', { class: 'ujian-bar ut-bar', role: 'region', 'aria-label': 'Status ujian tim' },
      h('div', { class: 'ut-bar-kiri' }, judulBar, posBar), h('div', { class: 'ut-bar-tengah' }, timerEl, ' ', sisaEl),
      h('div', { class: 'ut-bar-kanan' }, h('span', { class: 'meta ut-orang-n' }, u.peserta.length + ' orang'), menu));
    const isi = h('div', { class: 'ut-isi' });
    const nav = h('div', { class: 'sticky-actions nav-ujian ut-nav' });
    page.append(bar, isi, nav, live);
    let t0 = performance.now(); let terpasang = true; let habisDitampilkan = false; let timer = null;
    function catatDetik() { const id = u.soalIds[u.posisi]; const d = (performance.now() - t0) / 1000; t0 = performance.now(); if (id && d > 0.2) ut.tambahDetik(id, d); }
    function ke(i) { catatDetik(); ut.aturPosisi(i); u = ut.aktif(); gambar(true); }
    const berikutnya = () => { if (u.posisi < n - 1) ke(u.posisi + 1); else selesai(); };
    function tambah5() { u = ut.tambahMenit(5) || u; habisDitampilkan = false; tick(); UKP.toast('Waktu ditambah 5 menit.'); }
    function gambar(fokus) {
      u = ut.aktif(); if (!u) return;
      const id = u.soalIds[u.posisi]; const so = K.soal(id);
      judulBar.textContent = 'Ujian tim · ' + u.judul; posBar.textContent = 'Soal ' + (u.posisi + 1) + ' dari ' + n;
      bar.querySelector('.ut-orang-n').textContent = u.peserta.length + ' orang';
      const h1 = h('h1', { class: 'visually-hidden', tabindex: '-1' }, 'Soal ' + (u.posisi + 1) + ' dari ' + n);
      let el;
      if (!so) el = h('p', { class: 'card' }, 'Soal ' + id + ' tidak ada di perangkat ini.');
      else {
        const awal = {}; u.peserta.forEach(p => { awal[p] = { o: (u.jawaban[p] || {})[id] || null, ragu: !!(u.ragu[p] || {})[id] }; });
        el = UKP.c.soal(so, { konteks: 'ujiantim', tanpaLog: true, tanpaTutor: true, fokus: false, nomor: (u.posisi + 1) + '/' + n,
          bersama: { peserta: u.peserta, mode: 'ujian', awal, onUbah: (nama, v) => { ut.catat(nama, id, v && v.o ? v.o : null); ut.ragu(nama, id, !!(v && v.ragu)); } } });
      }
      isi.replaceChildren(h1, el);
      const kecil = sempit();
      nav.replaceChildren(
        h('button', { type: 'button', class: 'btn', disabled: u.posisi === 0, 'aria-keyshortcuts': 'ArrowLeft', 'aria-label': kecil ? 'Sebelumnya' : null, onclick: () => ke(u.posisi - 1) }, UKP.icon('back'), kecil ? null : 'Sebelumnya'),
        h('button', { type: 'button', class: 'btn ut-daftar', onclick: () => { catatDetik(); dialogDaftar(u, u.posisi, i => ke(i), true); } }, kecil ? 'Daftar' : 'Daftar soal'),
        h('button', { type: 'button', class: 'btn' + (u.posisi < n - 1 ? ' btn-primary' : ''), 'aria-keyshortcuts': 'ArrowRight Enter', onclick: berikutnya, disabled: u.posisi >= n - 1 ? true : null }, kecil ? 'Lanjut' : 'Berikutnya', UKP.icon('chevron-kanan')),
        h('button', { type: 'button', class: 'btn ut-nilai' + (u.posisi >= n - 1 ? ' btn-primary' : ''), onclick: selesai }, UKP.icon('check'), kecil ? 'Nilai' : 'Selesai dan nilai'));
      if (fokus) { window.scrollTo({ top: 0 }); UKP.fokus(h1); }
    }
    function tick() {
      if (!terpasang) return; u = ut.aktif() || u; const sisa = sisaDetik(u); if (sisa == null) return;
      timerEl.textContent = fmtJam(sisa);
      if (sisa <= 300) { timerEl.dataset.sisa = 'sedikit'; sisaEl.textContent = 'Sisa < 5 mnt'; sisaEl.hidden = false; } else { delete timerEl.dataset.sisa; sisaEl.hidden = true; sisaEl.textContent = ''; }
      if (sisa === 300 || sisa === 60) live.textContent = 'Sisa ' + (sisa / 60) + ' menit.';
      if (sisa <= 0 && !habisDitampilkan) { habisDitampilkan = true; waktuHabis(); }
    }
    function waktuHabis() {
      catatDetik();
      document.querySelectorAll('dialog[open]').forEach(d => { try { d.close('auto'); } catch (e) {} });
      UKP.dialog({ judul: 'Waktu habis', ukuran: 'sm', closedby: 'none', tanpaTutup: true, isi: () => h('p', null, 'Waktu ujian sudah habis. Nilai sekarang, atau tambah 5 menit bila tim masih perlu waktu.'),
        kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => { dlg.close('tambah'); tambah5(); } }, 'Tambah 5 menit'), h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => { dlg.close('nilai'); nilaiSekarang(); } }, 'Nilai sekarang')] });
    }
    function nilaiSekarang() { catatDetik(); const sesi = ut.nilai(); if (sesi) keHasil(sesi); else UKP.go('ujiantim', {}, { replace: true }); }
    async function selesai() {
      catatDetik(); const r = ut.ringkas(); u = ut.aktif();
      const kosong = u.peserta.map(p => p + ' ' + ((r.perPeserta[p] || {}).kosong != null ? r.perPeserta[p].kosong : n));
      const ya = await UKP.konfirmasi('Selesai dan nilai?', 'Belum dijawab: ' + kosong.join(', ') + ' soal. Soal yang tidak dijawab dinilai salah. Kunci jawaban dan nilai tampil setelah ini; jawaban tidak dapat diubah lagi.', { ya: 'Nilai sekarang', tidak: 'Kembali ke soal' });
      if (ya && terpasang) nilaiSekarang();
    }
    const onKey = e => {
      if (!terpasang || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      if (document.querySelector('dialog[open]') || mengetik(e.target)) return;
      const t = e.target;
      if (e.key === 'ArrowLeft') { if (u.posisi > 0) { e.preventDefault(); ke(u.posisi - 1); } }
      else if (e.key === 'ArrowRight') { if (u.posisi < n - 1) { e.preventDefault(); ke(u.posisi + 1); } }
      else if (e.key === 'Enter') {
        // Enter = berikutnya, kecuali pada tombol/tautan di luar papan (tombol itu sendiri yang dijalankan)
        if (/^(BUTTON|A|SUMMARY)$/.test(t.tagName) && !(t.closest && t.closest('.papan-bersama'))) return;
        if (u.posisi < n - 1) { e.preventDefault(); ke(u.posisi + 1); }
      }
    };
    document.addEventListener('keydown', onKey);
    const onVis = () => { if (document.hidden) { catatDetik(); UKP.store.flush && UKP.store.flush(); } };
    document.addEventListener('visibilitychange', onVis);
    gambar(false); tick(); timer = setInterval(tick, 1000);
    setTimeout(() => { if (terpasang) UKP.fokus(isi.querySelector('h1')); }, 0);
    return { node: page, unmount: () => { terpasang = false; clearInterval(timer); document.removeEventListener('keydown', onKey); document.removeEventListener('visibilitychange', onVis); if (ut.aktif()) catatDetik(); delete document.body.dataset.mode; } };
  }

  // ================= layar tayang soal (proyektor; tanpa papan, tanpa kunci) =================
  function layarTayang() {
    const ut = UT(); ut.mulai(); let u = ut.aktif(); const n = u.soalIds.length;
    document.body.dataset.mode = 'ujian';
    const page = h('div', { class: 'page lebar halaman-ujian-tim tayang' });
    const posBar = h('span', { class: 'ut-pos' }); const timerEl = h('span', { class: 'timer', role: 'timer', 'aria-label': 'Sisa waktu' });
    const keluar = () => { delete document.body.dataset.mode; UKP.go('ujiantim', {}, { replace: true }); };
    const bar = h('div', { class: 'ujian-bar ut-bar', role: 'region', 'aria-label': 'Status ujian tim' },
      h('div', { class: 'ut-bar-kiri' }, h('span', { class: 'ut-judul' }, 'Ujian tim · ' + u.judul), posBar), h('div', { class: 'ut-bar-tengah' }, timerEl),
      h('div', { class: 'ut-bar-kanan' }, h('button', { type: 'button', class: 'btn btn-sm', onclick: keluar }, UKP.icon('x', null, true), 'Tutup tayangan')));
    const isi = h('div', { class: 'ut-isi' }); const nav = h('div', { class: 'sticky-actions nav-ujian ut-nav' });
    page.append(bar, isi, nav);
    let terpasang = true;
    function ke(i) { ut.aturPosisi(i); u = ut.aktif(); gambar(true); }
    function gambar(fokus) {
      const id = u.soalIds[u.posisi]; const so = K.soal(id); posBar.textContent = 'Soal ' + (u.posisi + 1) + ' dari ' + n;
      const h1 = h('h1', { class: 'visually-hidden', tabindex: '-1' }, 'Soal ' + (u.posisi + 1) + ' dari ' + n);
      const el = so ? UKP.c.soal(so, { mode: 'ujian', tanpaLog: true, tanpaTutor: true, fokus: false, nomor: 'No. ' + (u.posisi + 1) }) : h('p', { class: 'card' }, 'Soal tidak ada di perangkat ini.');
      if (so) el.querySelectorAll('input').forEach(x => { x.tabIndex = -1; x.setAttribute('aria-hidden', 'true'); });
      isi.replaceChildren(h1, h('div', { class: 'tayang-soal' }, el));
      const kecil = sempit();
      nav.replaceChildren(h('button', { type: 'button', class: 'btn', disabled: u.posisi === 0, 'aria-label': kecil ? 'Sebelumnya' : null, onclick: () => ke(u.posisi - 1) }, UKP.icon('back'), kecil ? null : 'Sebelumnya'),
        h('button', { type: 'button', class: 'btn', onclick: () => dialogDaftar(u, u.posisi, i => ke(i), false) }, kecil ? 'Daftar' : 'Daftar soal'),
        h('button', { type: 'button', class: 'btn btn-primary', disabled: u.posisi >= n - 1 ? true : null, onclick: () => ke(u.posisi + 1) }, 'Berikutnya', UKP.icon('chevron-kanan')));
      if (fokus) { window.scrollTo({ top: 0 }); UKP.fokus(h1); }
    }
    const tick = () => { if (!terpasang) return; const sisa = sisaDetik(ut.aktif() || u); if (sisa == null) return; timerEl.textContent = fmtJam(sisa); if (sisa <= 300) timerEl.dataset.sisa = 'sedikit'; else delete timerEl.dataset.sisa; };
    const onKey = e => {
      if (!terpasang || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || document.querySelector('dialog[open]') || mengetik(e.target)) return;
      if (e.key === 'ArrowLeft' && u.posisi > 0) { e.preventDefault(); ke(u.posisi - 1); }
      else if (e.key === 'ArrowRight' && u.posisi < n - 1) { e.preventDefault(); ke(u.posisi + 1); }
    };
    document.addEventListener('keydown', onKey);
    gambar(false); tick(); const timer = setInterval(tick, 1000);
    return { node: page, unmount: () => { terpasang = false; clearInterval(timer); document.removeEventListener('keydown', onKey); delete document.body.dataset.mode; } };
  }

  // ================= (iv) ruang ujian (cara perangkat) =================
  // v8.2: di room (perangkat ini pemandu) ujian disiarkan lewat room; jawaban anggota masuk sendiri (pengumpul tingkat modul),
  // baris peserta: "belum mulai" → "sedang mengerjakan · n/N terisi" → "sudah mengumpulkan · lewat room" (tanpa huruf jawaban).
  // Kode ujian dan kode jawaban v8.1 tetap tersedia sebagai cadangan ("Pakai kode jawaban"). Tepat satu tombol primer.
  function ruangUjian(params) {
    const ut = UT(); ut.mulai(); const s = UKP.store.get();
    if (params && params.room && roomTuan() && !tersiar(ut.aktif())) siarkanUjian();
    sapuRoom();
    const page = h('div', { class: 'page halaman-ruang-ujian' });
    let terpasang = true;
    // v9.3.2 B2: data baris peserta (status dari statusPeserta) — dipakai isi() dan perbaruiDaftar()
    function dataPeserta() {
      const u = ut.aktif(); if (!u) return null;
      const n = u.soalIds.length; const r = ut.ringkas();
      const pr = p => r.perPeserta[p] || { terisi: 0, kosong: n, nRagu: 0, mengumpulkan: false };
      const tuan = roomTuan(); const pakaiRoom = !!(tuan && tersiar(u));
      let dokRoom = {}, hadir = {}, namaSaya = null;
      if (pakaiRoom) {
        try { dokRoom = tuan.jawabanSemua(u.id) || {}; } catch (e) { dokRoom = {}; }
        try { hadir = typeof tuan.hadir === 'function' ? tuan.hadir() || {} : {}; } catch (e) { hadir = {}; }
        try { namaSaya = (tuan.info() || {}).nama || null; } catch (e) { namaSaya = null; }
      }
      const cari = (obj, p) => { const k = Object.keys(obj).find(x => kunciNama(x) === kunciNama(p)); return k ? obj[k] : null; };
      const st0 = UKP.store.get(); const simA = st0.simulasiAktif && !st0.simulasiAktif.selesai ? st0.simulasiAktif : null;
      const mulaiSaya = !!(simA && simA.tim && simA.tim.ujianId === u.id);
      const mulaiMs = Number(u.mulai) || 0;
      const rows = u.peserta.map(p => {
        const q = pr(p); const t = (u.terkumpul || {})[p];
        const d = !q.mengumpulkan && pakaiRoom ? cari(dokRoom, p) : null;
        const nIsi = d && d.aktivitas === u.id ? isiDok(u, d).filter(x => x !== '-').length : null;
        const hd = pakaiRoom ? cari(hadir, p) : null; const online = !!(hd && hd.online);
        if (online) catatTersambung(u.id, p);
        const set = pakaiRoom ? setPernah(u.id) : null;
        // setelah muat ulang: catatan tersimpan (KPERNAH), atau kabar hadir (termasuk wasiat offline yang bercap waktu saat tersambung) sesudah ujian dimulai
        const pernah = !!(set && set.has(kunciNama(p))) || !!(hd && mulaiMs && Number(hd.t) >= mulaiMs);
        const pemimpin = !!(namaSaya && kunciNama(namaSaya) === kunciNama(p));
        return { p, q, s: statusPeserta({ n, pakaiRoom, mengumpulkan: q.mengumpulkan, terisi: q.terisi, sumber: t && t.sumber, nIsi, online, pernah, pemimpin, mulaiSaya }) };
      });
      return { u, n, pakaiRoom, rows, kumpul: rows.filter(x => x.q.mengumpulkan).length, ringkas: pakaiRoom ? barisRingkas(rows.map(x => x.s.st), rows.length) : null, saran: pakaiRoom ? saranRuang(rows.map(x => x.s.st)) : null };
    }
    function tombolLepas(p) {
      return h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text ruang-lepas', 'aria-label': 'Lepas jawaban ' + p, onclick: async () => {
        if (!(await UKP.konfirmasi('Lepas jawaban ' + p + '?', 'Jawaban yang terkumpul untuk ' + p + ' dihapus dari ujian ini.', { ya: 'Lepas', bahaya: true }))) return;
        const u = ut.aktif(); if (!u) return; const tt = (u.terkumpul || {})[p];
        if (tt && tt.sumber === 'room') dilepasRoom.set(u.id + '|' + kunciNama(p), tt.jawaban.join('') + '|' + tt.ragu.map(Number).join(''));
        ut.lepasKumpul(p); gambar(); } }, 'Lepas');
    }
    function terapkanBaris(li, x) {
      if (li.getAttribute('data-st') !== x.s.st) li.setAttribute('data-st', x.s.st);
      li.toggleAttribute('data-kumpul', !!x.q.mengumpulkan);
      const titik = li.querySelector('.titik-nada'); if (titik) { if (x.s.nada) titik.setAttribute('data-nada', x.s.nada); else titik.removeAttribute('data-nada'); }
      const stEl = li.querySelector('.ruang-status'); if (stEl && stEl.textContent !== x.s.teks) stEl.textContent = x.s.teks;
      // v9.4 Ka3: perangkat anggota dengan versi aplikasi lebih lama dari pemimpin → tanda "versi lama" (js/views-ruang.js UKP.ruangUI.versiLamaNama)
      const lama = !!(UKP.ruangUI && typeof UKP.ruangUI.versiLamaNama === 'function' && UKP.ruangUI.versiLamaNama(x.p)); const tLama = li.querySelector('.versi-lama-tanda');
      // v9.4 FB4: tanda di DALAM sel nama (bukan sel grid kelima), supaya tombol Lepas tetap di kolom terakhir baris yang sama
      if (lama && !tLama) (li.querySelector('.ruang-nama') || li).append(' ', h('span', { class: 'versi-lama-tanda', title: 'Minta ia membuka lagi tautan room supaya versinya sama' }, 'versi lama')); else if (!lama && tLama) tLama.remove();
      const lepas = li.querySelector('.ruang-lepas');
      if (x.q.mengumpulkan && !lepas) li.append(tombolLepas(x.p));
      else if (!x.q.mengumpulkan && lepas) lepas.remove();
    }
    function bangunBaris(x) {
      const li = h('li', { class: 'ruang-peserta', 'data-k': 'peserta-' + x.p },
        h('span', { class: 'titik-nada', 'aria-hidden': 'true' }), h('strong', { class: 'ruang-nama' }, x.p), h('span', { class: 'meta ruang-status' }));
      terapkanBaris(li, x); return li;
    }
    // perbarui daftar anggota di tempat (kabar hadir/jawaban): tombol dan fokus tidak diganti; bentuk berubah → gambar ulang penuh
    // saran di bawah baris ringkas: teks diperbarui di tempat; tombol tautan room hanya disembunyikan atau ditampilkan (tidak diganti)
    function terapkanSaran(sr) {
      const kotak = page.querySelector('[data-k="ruang-saran"]'); if (!kotak) return;
      const tk = kotak.querySelector('.ruang-saran-teks'); const ak = kotak.querySelector('.ruang-saran-aksi');
      const teks = sr && sr.teks ? sr.teks : '';
      if (tk && tk.textContent !== teks) tk.textContent = teks;
      if (ak) ak.hidden = !(sr && sr.belum);
      kotak.hidden = !teks;
    }
    function perbaruiDaftar() {
      if (!terpasang) return; const dp = dataPeserta(); if (!dp) { gambar(); return; }
      const ul = page.querySelector('ul.ruang-daftar');
      const lis = ul ? Array.from(ul.children) : [];
      if (!ul || page.dataset.pakaiRoom !== String(dp.pakaiRoom) || lis.length !== dp.rows.length || lis.some((li, i) => li.getAttribute('data-k') !== 'peserta-' + dp.rows[i].p)) { gambar(); return; }
      dp.rows.forEach((x, i) => terapkanBaris(lis[i], x));
      const rk = page.querySelector('[data-k="ruang-ringkas"]'); if (rk && dp.ringkas && rk.textContent !== dp.ringkas) rk.textContent = dp.ringkas;
      terapkanSaran(dp.saran);
      const pill = page.querySelector('[data-k="pill-kumpul"]');
      if (pill) { const t = dp.kumpul + ' dari ' + dp.rows.length + ' mengumpulkan'; if (pill.lastChild && pill.lastChild.nodeType === 3 && pill.lastChild.nodeValue !== t) pill.lastChild.nodeValue = t; if (dp.kumpul) pill.setAttribute('data-tone', 'ok'); else pill.removeAttribute('data-tone'); }
      const nb = page.querySelector('[data-k="ruang-nilai"]'); if (nb) nb.disabled = !dp.kumpul;
    }
    function isi() {
      const u = ut.aktif(); if (!u) return [h('p', { class: 'meta' }, 'Ujian sudah selesai.')];
      const n = u.soalIds.length; const r = ut.ringkas();
      const pr = p => r.perPeserta[p] || { terisi: 0, kosong: n, nRagu: 0, mengumpulkan: false };
      const kumpul = u.peserta.filter(p => pr(p).mengumpulkan); const belum = u.peserta.filter(p => !pr(p).mengumpulkan);
      const kode = kodeDari(u); const tautan = tautanUjian(kode);
      const undangan = 'Ujian tim: ' + u.judul + ' · ' + n + ' soal · ' + u.menit + ' menit. Buka: ' + tautan + ' . Kerjakan sendiri, lalu kirim kode jawaban ke grup.';
      const tuan = roomTuan(); const siar = tersiar(u); const pakaiRoom = !!(tuan && siar);
      page.dataset.pakaiRoom = String(pakaiRoom);
      const dp = dataPeserta();
      const out = [];
      out.push(UKP.c.kop({ eyebrow: pakaiRoom ? 'Ujian tim · lewat room' : 'Ujian tim · perangkat masing-masing', judul: u.judul,
        meta: [UKP.c.pill(n + ' soal'), UKP.c.pill(u.menit + ' mnt', null, 'jam'), UKP.c.pill(kumpul.length + ' dari ' + u.peserta.length + ' mengumpulkan', kumpul.length ? 'ok' : null, null, { 'data-k': 'pill-kumpul' }), pakaiRoom ? statusRoomPill() : null],
        aksi: UKP.c.menuLebih({ label: 'Aksi ujian', item: [{ teks: 'Tambah 5 menit', ikon: 'jam', onclick: () => { ut.tambahMenit(5); if (tersiar(ut.aktif())) siarkanUjian(); UKP.toast('Waktu ditambah 5 menit.'); gambar(); } }, { teks: 'Batalkan ujian', ikon: 'hapus', onclick: () => batalkan() }] }) }));
      // room: belum tersiar → "Kirim ke room" (primer); sudah → keterangan singkat
      if (tuan && !siar) out.push(kartuSect('Room tim', 'ruang-room-j', [
        h('p', { class: 'small' }, 'Kirim ujian ini ke room: anggota langsung mendapat soalnya di HP, dan jawabannya masuk ke sini tanpa menempel kode.'),
        h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', 'data-k': 'ruang-kirim-room', onclick: () => { if (siarkanUjian()) { UKP.toast('Ujian dikirim ke room.'); gambar(); } else UKP.toast('Ujian belum bisa dikirim ke room.', { nada: 'warn' }); } }, UKP.icon('play', null, true), 'Kirim ke room'))], 'ruang-room'));
      // bagikan (v8.1); saat lewat room menjadi cadangan terlipat
      const kolomTautan = h('input', { class: 'input mono ut-tautan', type: 'text', readonly: true, value: tautan, 'aria-label': 'Tautan ujian', onfocus: e => e.target.select() });
      const isiBagi = [
        kolomTautan,
        h('div', { class: 'btn-row' }, UKP.c.salin(undangan, { label: 'Salin undangan', kelas: 'btn' + (tuan ? '' : ' btn-primary'), pesan: 'Undangan disalin.' }), UKP.c.salin(tautan, { label: 'Salin tautan', pesan: 'Tautan disalin.' }), tombolWA(undangan, 'Bagikan lewat WhatsApp', 'btn btn-sm')),
        h('p', { class: 'meta ut-kode' }, 'Kode ujian: ', h('code', { class: 'mono' }, kode), ' ', UKP.c.salin(kode, { ikonSaja: true, label: 'Salin kode ujian', pesan: 'Kode ujian disalin.' })),
        bukanWebsite() ? UKP.c.banner('Tautan ini hanya berfungsi bila aplikasi dibuka sebagai website. Untuk sementara bagikan kodenya dan minta anggota menempelkannya di menu Ikut ujian tim.', 'info') : null];
      if (pakaiRoom) out.push(h('details', { class: 'lipat ruang-cadangan', 'data-k': 'ruang-cadangan' }, h('summary', null, 'Pakai kode jawaban'),
        h('div', { class: 'stack-sm' }, h('p', { class: 'small' }, 'Cadangan bila HP anggota tidak tersambung ke room: bagikan tautan ujian, lalu tempel kode jawaban yang dikirim anggota.'), isiBagi,
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn ruang-kumpul', onclick: () => dialogKumpul({ judul: 'Kumpulkan jawaban', onSimpan: () => gambar() }) }, UKP.icon('tambah', null, true), 'Tempel kode jawaban')))));
      else out.push(kartuSect('Bagikan ke anggota', 'ruang-bagi-j', isiBagi, 'ruang-bagi'));
      // peserta (v9.3.2 B2: status per orang dari kehadiran room + dokumen jawaban; diperbarui di tempat oleh perbaruiDaftar)
      const baris = dp.rows.map(bangunBaris);
      async function nilai() {
        sapuRoom(); const u2 = ut.aktif(); if (!u2) return;
        const r2 = ut.ringkas(); const kumpul2 = u2.peserta.filter(p => (r2.perPeserta[p] || {}).mengumpulkan); const belum2 = u2.peserta.filter(p => !(r2.perPeserta[p] || {}).mengumpulkan);
        if (!kumpul2.length) return;
        let hanya = true;
        const sw = UKP.c.sakelar({ id: U.id('hanya'), judul: 'Nilai hanya yang sudah mengumpulkan', nilai: true, onchange: e => { hanya = e.target.checked; } });
        UKP.dialog({ judul: 'Nilai sekarang?', ukuran: 'sm', isi: () => h('div', { class: 'stack-sm' }, h('p', null, belum2.length ? 'Belum mengumpulkan: ' + L.gabungNama(belum2) + '. Jawaban yang masuk setelah dinilai tidak ikut.' : 'Semua anggota sudah mengumpulkan.'), belum2.length ? sw : null),
          kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => dlg.close('batal') }, 'Batal'), h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => {
            dlg.close('ya'); sapuRoom(); const siarkan = tersiar(ut.aktif());
            const sesi = ut.nilai({ hanyaYangMengumpulkan: hanya });
            if (sesi) { if (siarkan) tutupDiRoom(sesi); keHasil(sesi); } } }, 'Nilai sekarang')] });
      }
      // v9.3.2: saran + tautan ROOM (bukan tautan ujian cadangan) untuk yang belum masuk room
      const kotakSaran = sr => {
        let tautanRoom = ''; let namaRoom = '';
        try { const inf = tuan && typeof tuan.info === 'function' ? tuan.info() : null; tautanRoom = (inf && inf.tautan) || ''; namaRoom = (inf && inf.namaRoom) || ''; } catch (e) {}
        const undang = 'Ujian tim sudah dimulai di room' + (namaRoom ? ' "' + namaRoom + '"' : '') + '. Buka tautan ini di HP, lalu ketuk nama Anda: ' + tautanRoom;
        const aksiEl = tautanRoom ? h('span', { class: 'ruang-saran-aksi', hidden: sr && sr.belum ? null : true },
          UKP.c.salin(tautanRoom, { label: 'Salin tautan room', kelas: 'btn btn-sm', pesan: 'Tautan room disalin.' }), tombolWA(undang, 'Kirim lewat WhatsApp', 'btn btn-sm')) : null;
        return h('div', { class: 'ruang-saran', 'data-k': 'ruang-saran', hidden: sr && sr.teks ? null : true }, h('p', { class: 'small ruang-saran-teks' }, sr && sr.teks ? sr.teks : ''), aksiEl);
      };
      // primer tunggal: "Kirim ke room" bila ada; selain itu "Nilai sekarang" saat lewat room (cara v8.1: "Salin undangan")
      const nilaiPrimer = pakaiRoom;
      out.push(kartuSect('Anggota', 'ruang-peserta-j', [
        pakaiRoom ? h('p', { class: 'ruang-ringkas', 'data-k': 'ruang-ringkas' }, dp.ringkas) : h('p', { class: 'meta' }, kumpul.length + ' dari ' + u.peserta.length + ' sudah mengumpulkan'),
        pakaiRoom ? kotakSaran(dp.saran) : null,
        h('ul', { class: 'ruang-daftar' }, baris),
        h('div', { class: 'btn-row' }, pakaiRoom ? null : h('button', { type: 'button', class: 'btn ruang-kumpul', onclick: () => dialogKumpul({ judul: 'Kumpulkan jawaban', onSimpan: () => gambar() }) }, UKP.icon('tambah', null, true), 'Kumpulkan jawaban'),
          h('button', { type: 'button', class: 'btn ruang-nilai' + (nilaiPrimer ? ' btn-primary' : ''), 'data-k': 'ruang-nilai', disabled: kumpul.length ? null : true, onclick: nilai }, UKP.icon('check', null, true), 'Nilai sekarang'))], 'ruang-peserta-kartu'));
      // perangkat ini
      const nm = namaProfil() || u.peserta[0] || 'Pemimpin';
      const simA = s.simulasiAktif && !s.simulasiAktif.selesai ? s.simulasiAktif : null;
      const bagianSaya = simA && simA.tim && simA.tim.ujianId === u.id;
      const sudahSaya = pr(cariPeserta(u.peserta, nm) || nm).mengumpulkan;
      async function kerjakan() {
        if (bagianSaya) { UKP.go('simulasi', { jalan: true }); return; }
        if (simA) { if (!(await UKP.konfirmasi('Buang simulasi yang berjalan?', 'Ada simulasi lain yang belum dikirim. Simulasi itu dibuang agar Anda bisa mengerjakan bagian Anda.', { ya: 'Buang', bahaya: true }))) return; UKP.store.get().simulasiAktif = null; UKP.store.save(); }
        const a = UKP.simulasiTim.mulai({ ujianId: u.id, judul: u.judul, tingkat: u.tingkat, menit: u.menit, soalIds: u.soalIds, nama: nm, akhir: u.akhir, room: tersiar(u) ? 1 : 0 });
        if (a) UKP.go('simulasi', { jalan: true });
      }
      out.push(kartuSect('Di perangkat ini', 'ruang-ini-j', [
        h('div', { class: 'btn-row' },
          sudahSaya ? h('span', { class: 'meta' }, 'Bagian ' + nm + ' sudah terkumpul.') : h('button', { type: 'button', class: 'btn ruang-saya', onclick: kerjakan }, UKP.icon('play', null, true), bagianSaya ? 'Lanjutkan bagian saya' : 'Kerjakan bagian saya'),
          h('button', { type: 'button', class: 'btn ruang-tayang', onclick: () => UKP.go('ujiantim', { tayang: 1 }) }, UKP.icon('mata', null, true), 'Tayangkan soal di layar ini')),
        h('p', { class: 'meta' }, 'Tayangan soal untuk proyektor: tanpa kunci jawaban, untuk tim yang menulis di kertas atau di Lembar jawab.')]));
      return out;
    }
    // gambar ulang di tempat (jawaban room, status, state); fokus dipulihkan lewat data-k atau teks tombol
    function gambar() {
      if (!terpasang) return;
      if (!ut.aktif()) { UKP.render(); return; }
      const a = document.activeElement; const kunci = a && page.contains(a) ? (a.getAttribute('data-k') || null) : null; const teks = a && page.contains(a) ? (a.textContent || '').trim() : null;
      const buka = Array.from(page.querySelectorAll('details[data-k]')).filter(d => d.open).map(d => d.getAttribute('data-k'));
      page.replaceChildren(...isi().filter(Boolean));
      buka.forEach(k => { const d = page.querySelector('details[data-k="' + k + '"]'); if (d) d.open = true; });
      let el = kunci ? page.querySelector('[data-k="' + kunci + '"]') : null;
      if (!el && teks && a) el = Array.from(page.querySelectorAll(a.tagName)).find(x => (x.textContent || '').trim() === teks) || null;
      if (el) { try { el.focus({ preventScroll: true }); } catch (e) {} }
    }
    page.append(...isi().filter(Boolean));
    let tunda = null; const segarkan = () => { clearTimeout(tunda); tunda = setTimeout(() => { tunda = null; gambar(); }, 150); };
    // v9.3.2 B2: kabar jawaban dan kehadiran hanya memperbarui daftar anggota (tanpa menggambar ulang halaman)
    let tundaDaftar = null; const segarkanDaftar = () => { if (tunda) return; clearTimeout(tundaDaftar); tundaDaftar = setTimeout(() => { tundaDaftar = null; perbaruiDaftar(); }, 120); };
    segarkanRuangHidup = segarkanDaftar;
    const lepas = []; const r = ruang();
    if (r && typeof r.on === 'function') {
      ['state', 'peran'].forEach(nmEv => { try { lepas.push(r.on(nmEv, () => { clearTimeout(tundaDaftar); tundaDaftar = null; segarkan(); })); } catch (e) {} });
      try { lepas.push(r.on('hadir', segarkanDaftar)); } catch (e) {}
    }
    // kabar online menjadi basi tanpa peristiwa (≥ 95 dtk tanpa detak) → periksa berkala
    const jam = setInterval(() => { if (terpasang && !document.hidden) perbaruiDaftar(); }, 10000);
    return { node: page, unmount: () => { terpasang = false; clearTimeout(tunda); clearTimeout(tundaDaftar); clearInterval(jam); if (segarkanRuangHidup === segarkanDaftar) segarkanRuangHidup = null; lepas.forEach(f => { try { f(); } catch (e) {} }); } };
  }

  // ================= view ujiantim =================
  UKP.views.ujiantim = function (params) {
    params = params || {};
    const ut = UT(); if (!ut) return h('div', { class: 'page' }, h('h1', null, 'Ujian tim'), UKP.c.kosong('Fitur belum tersedia', 'Muat ulang halaman.'));
    if (params.kode) return halamanIkut(params.kode);
    const u = ut.aktif();
    if (!u) return halamanAwal(params);
    if (params.tayang) return layarTayang();
    return u.cara === 'papan' ? runnerPapan() : ruangUjian(params);
  };

  // ================= (4) lembar jawab pribadi (#lj) =================
  UKP.views.lj = function () {
    const LJ = L.lembarJawab; const ut = UT();
    let lj = LJ.ambil() || { ujianId: null, judul: '', nama: namaProfil(), n: 40, jawaban: [], ragu: [] };
    const rapikan = () => { const n = Math.max(1, Math.min(200, Math.round(Number(lj.n) || 40))); lj.n = n; lj.jawaban = Array.from({ length: n }, (_, i) => /^[A-D]$/.test(lj.jawaban[i] || '') ? lj.jawaban[i] : '-'); lj.ragu = Array.from({ length: n }, (_, i) => !!lj.ragu[i]); };
    rapikan();
    const simpan = () => { lj = LJ.simpan(lj); };
    const page = h('div', { class: 'page halaman-lj' });
    page.appendChild(UKP.c.kop({ judul: 'Lembar jawab', lead: 'Isi jawaban saat soal ditayangkan di layar bersama. Tersimpan otomatis di HP ini.' }));
    const id = U.id('lj');
    const inNama = h('input', { class: 'input', id: id + '-nama', type: 'text', maxlength: String(L.MAKS_NAMA_PESERTA || 24), autocomplete: 'name', autocapitalize: 'words', value: lj.nama || '' });
    const inN = h('input', { class: 'input angka', id: id + '-n', type: 'number', inputmode: 'numeric', min: 1, max: 200, value: lj.n });
    const inKode = h('input', { class: 'input mono', id: id + '-kode', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: 'UT1.… (opsional)' });
    const infoUjian = h('p', { class: 'meta lj-ujian', 'aria-live': 'polite' });
    const galatKode = h('p', { class: 'galat small', role: 'alert', hidden: true });
    const ringkas = h('p', { class: 'lj-ringkas', 'aria-live': 'polite' });
    // v9.4 FA7: lembar dikunci → kalimat di ATAS daftar (tombol jawaban juga tampak mati, lihat css blok v9.4 perbaikan FA)
    const kunciInfo = h('p', { class: 'lj-dikunci-info', 'data-k': 'lj-dikunci', hidden: true }, UKP.icon('gembok', null, true), 'Lembar dikunci. Jawaban tidak bisa diubah lagi.');
    const daftar = h('ol', { class: 'lj-daftar', 'aria-label': 'Jawaban per nomor' });
    const aksi = h('div', { class: 'btn-row lj-aksi' });
    const tulisInfo = () => { infoUjian.textContent = lj.ujianId ? 'Ujian: ' + (lj.judul || 'Ujian tim') + ' · ' + lj.n + ' soal' : ''; };
    inNama.addEventListener('change', () => { lj.nama = L.rapikanNamaPeserta(inNama.value); simpan(); gambarAksi(); perbaruiSyarat(); });
    inN.addEventListener('change', () => { const v = Math.round(Number(inN.value)); if (!v || v < 1 || dikunci()) { inN.value = lj.n; return; } lj.n = Math.min(200, v); inN.value = lj.n; rapikan(); simpan(); gambarDaftar(); gambarTinjau(); });
    // v9.4 H4: tinjauan jawaban sendiri SETELAH mengirim. Butuh urutan soal dari kode ujian (disimpan terpisah: ukp.lj.tinjau, hanya lembar yang tampil);
    // kunci jawaban baru tampil setelah anggota menyalin atau mengirim kode jawabannya lalu menyatakan sudah mengirim.
    // v9.4 FA3/FA4: sejak kunci tampil, lembar ujian ITU terkunci selamanya di HP ini (ukp.lj.beku per ujianId, lihat bacaBeku di atas)
    const KTINJAU = 'ukp.lj.tinjau';
    function bacaTinjau() { try { const v = JSON.parse(localStorage.getItem(KTINJAU) || 'null'); return v && typeof v === 'object' && typeof v.ujianId === 'string' && Array.isArray(v.soalIds) ? v : null; } catch (e) { return null; } }
    function tulisTinjau(v) { try { if (v) localStorage.setItem(KTINJAU, JSON.stringify(v)); else localStorage.removeItem(KTINJAU); } catch (e) {} }
    const tinjauCocok = () => { const t = bacaTinjau(); return t && lj.ujianId && t.ujianId === lj.ujianId && t.soalIds.length === lj.n && t.soalIds.every(x => typeof x === 'string') ? t : null; };
    const dikunci = () => { if (!lj.ujianId) return false; if (bekuUjian(lj.ujianId)) return true; const t = tinjauCocok(); return !!(t && t.dikunci); };
    const pulihkan = b => { lj.jawaban = b.j.split(''); lj.ragu = b.r.split('').map(x => x === '1'); };
    // lembar yang dikunci sebelum daftar beku ada → catat; lembar ujian yang terkunci selalu menampilkan jawaban saat dikunci
    { const t0 = bacaTinjau(); if (lj.ujianId && t0 && t0.dikunci && t0.ujianId === lj.ujianId && !bekuUjian(lj.ujianId)) catatBeku(lj.ujianId, lj.jawaban, lj.ragu, t0.t); }
    { const b0 = bekuUjian(lj.ujianId); if (b0) { pulihkan(b0); rapikan(); simpan(); } }
    // syarat membuka tinjauan: kode jawaban untuk isi lembar SAAT INI sudah keluar (Salin kode jawaban atau Kirim lewat WhatsApp),
    // dan ujian yang sama tidak sedang dikerjakan di HP ini
    const sidik = () => token();
    const sedangDikerjakan = () => { try { const a = UKP.store.get().simulasiAktif; return !!(a && !a.selesai && a.tim && a.tim.ujianId === lj.ujianId); } catch (e) { return false; } };
    let siapTerakhir = null;
    function tandaiTerkirim() { const t = tinjauCocok(); if (!t || dikunci() || t.disalin === sidik()) return; tulisTinjau(Object.assign({}, t, { disalin: sidik() })); gambarTinjau(); }
    function perbaruiSyarat() { const t = tinjauCocok(); if (!t || dikunci()) return; if ((!sedangDikerjakan() && t.disalin === sidik()) !== siapTerakhir) gambarTinjau(); }
    const slotTinjau = h('div', { class: 'stack lj-tinjau-slot', 'data-k': 'lj-tinjau' });
    function gambarTinjau() {
      const t = tinjauCocok(); const kunci = dikunci();
      daftar.querySelectorAll('button').forEach(b => { b.disabled = kunci; });
      inN.disabled = kunci; kunciInfo.hidden = !kunci; daftar.toggleAttribute('data-dikunci', kunci);
      if (!t) { slotTinjau.replaceChildren(lj.ujianId ? '' : h('p', { class: 'meta lj-tinjau-catatan' }, 'Ingin meninjau soal dengan kunci jawaban setelah mengirim? Pakai kode ujian dari pemimpin.')); return; }
      if (!kunci) {
        const dikerjakan = sedangDikerjakan(); const siap = !dikerjakan && t.disalin === sidik(); siapTerakhir = siap;
        const syarat = dikerjakan ? 'Anda sedang mengerjakan ujian ini di HP ini. Tinjauan terbuka setelah jawaban dikirim.'
          : siap ? 'Kode jawaban sudah disalin atau dibuka di WhatsApp. Pastikan sudah terkirim ke pemimpin.' : 'Salin kode jawaban atau kirim lewat WhatsApp dulu. Setelah itu tinjauan bisa dibuka.';
        slotTinjau.replaceChildren(h('section', { class: 'card stack-sm lj-tinjau', 'aria-labelledby': id + '-tj' },
          h('h2', { class: 'card-title', id: id + '-tj' }, 'Tinjau jawaban Anda'),
          h('p', { class: 'small' }, 'Setelah kode jawaban terkirim ke pemimpin, Anda bisa membuka semua soal: jawaban Anda, kunci jawaban, dan pembahasan.'),
          h('p', { class: 'meta', id: id + '-ts', 'data-k': 'lj-tinjau-syarat' }, syarat),
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn', 'data-k': 'lj-buka-tinjau', disabled: siap ? null : true, 'aria-describedby': id + '-ts', onclick: async () => {
            const t2 = tinjauCocok(); if (!t2 || dikunci() || sedangDikerjakan() || t2.disalin !== sidik()) { gambarTinjau(); return; }
            if (!await UKP.konfirmasi('Sudah mengirim kode jawaban?', 'Kunci jawaban akan terbuka di HP ini. Lembar jawab ujian ini tidak bisa diisi lagi di HP ini.', { ya: 'Sudah, tinjau jawaban' })) return;
            const kini = Date.now(); catatBeku(t2.ujianId, lj.jawaban, lj.ragu, kini); tulisTinjau(Object.assign({}, t2, { dikunci: true, t: kini }));
            gambarTinjau(); UKP.umumkan('Lembar jawab dikunci. Tinjauan jawaban terbuka.');
            const sj = slotTinjau.querySelector('h2'); if (sj) { sj.setAttribute('tabindex', '-1'); UKP.fokus(sj); } } }, 'Sudah mengirim, tinjau jawaban'))));
        return;
      }
      const items = t.soalIds.map((sid, i) => ({ id: sid, o: lj.jawaban[i], ragu: lj.ragu[i] }));
      const bagian = typeof UKP.c.semuaSoalSendiri === 'function' ? UKP.c.semuaSoalSendiri(items, { judul: 'Tinjau jawaban Anda' }) : null;
      slotTinjau.replaceChildren(h('p', { class: 'meta', role: 'status' }, 'Lembar ini dikunci karena kunci jawaban ujian ini sudah terbuka di HP ini. Untuk ujian berikutnya, pakai kode ujian yang baru.'), bagian || '');
    }
    inKode.addEventListener('change', async () => {
      const v = inKode.value.trim(); galatKode.hidden = true; if (!v) return;
      const k = ambilKode(v); const info = k ? ut.bacaKode(k) : null;
      if (!info) { galatKode.textContent = 'Kode ujian tidak dikenali.'; galatKode.hidden = false; return; }
      inKode.value = '';
      // keadaan SEBELUM berganti
      const lamaId = lj.ujianId || null; const lamaTerkunci = dikunci(); const adaIsi = lj.jawaban.some(x => x !== '-') || lj.ragu.some(Boolean);
      if (lamaId && lamaTerkunci && !bekuUjian(lamaId)) { const t0 = bacaTinjau(); catatBeku(lamaId, lj.jawaban, lj.ragu, t0 && t0.t); }
      const b = bekuUjian(info.id);
      const rc = rencanaGantiKode({ lamaId, lamaTerkunci, adaIsi, baruId: info.id, baruBeku: !!b });
      if (rc.tanya && !await UKP.konfirmasi('Ganti ke ujian lain?', rc.aksi === 'pulihkan'
        ? 'Kunci jawaban ujian itu sudah terbuka di HP ini, jadi lembarnya tampil dengan jawaban saat dikunci. Jawaban di lembar ini dihapus.'
        : 'Jawaban dan tanda ragu di lembar ini dihapus. Lembar untuk ujian itu dimulai kosong.', { ya: 'Ganti ujian', bahaya: true })) { UKP.umumkan('Lembar jawab tidak diubah.'); return; }
      lj.ujianId = info.id; lj.judul = info.judul; lj.n = info.soalIds.length; inN.value = lj.n;
      if (rc.aksi === 'pulihkan') pulihkan(b); else if (rc.aksi === 'kosong') { lj.jawaban = []; lj.ragu = []; }
      { const lama = bacaTinjau(); const sama = lama && lama.ujianId === info.id && lama.soalIds.length === info.soalIds.length;
        if (!(rc.aksi === 'tetap' && sama)) tulisTinjau(b ? { ujianId: info.id, soalIds: info.soalIds.slice(0, 200), dikunci: true, t: b.t } : { ujianId: info.id, soalIds: info.soalIds.slice(0, 200), dikunci: false }); }
      rapikan(); simpan(); tulisInfo(); gambarDaftar(); gambarTinjau(); gambarAksi();
      UKP.umumkan(b ? 'Kunci jawaban ujian ini sudah terbuka di HP ini. Lembar dikunci.' : 'Lembar jawab disesuaikan: ' + lj.n + ' soal.');
    });
    let sorot = -1; const barisEl = [];
    const berikutKosong = dari => { for (let i = dari + 1; i < lj.n; i++) if (lj.jawaban[i] === '-') return i; return dari + 1 < lj.n ? dari + 1 : -1; };
    function gambarBaris(i) {
      const li = barisEl[i]; if (!li) return;
      li.querySelectorAll('[data-opsi]').forEach(b => b.setAttribute('aria-pressed', String(lj.jawaban[i] === b.dataset.opsi)));
      const rb = li.querySelector('.lj-ragu'); rb.setAttribute('aria-pressed', String(!!lj.ragu[i]));
      li.toggleAttribute('data-isi', lj.jawaban[i] !== '-'); li.toggleAttribute('data-ragu', !!lj.ragu[i]); li.toggleAttribute('data-sorot', i === sorot);
    }
    function aturSorot(i) { const lama = sorot; sorot = i; gambarBaris(lama); gambarBaris(i); const li = barisEl[i]; if (li) { try { const r = li.getBoundingClientRect(); if (r.bottom > window.innerHeight - 80) li.scrollIntoView({ block: 'center', behavior: UKP.gulirHalus ? UKP.gulirHalus() : 'auto' }); } catch (e) {} } }
    function pilih(i, k) {
      if (dikunci()) return;
      const lama = lj.jawaban[i]; lj.jawaban[i] = lama === k ? '-' : k; simpan(); gambarBaris(i); gambarRingkas();
      if (lj.jawaban[i] !== '-' && lama === '-') aturSorot(berikutKosong(i)); else aturSorot(i);
      perbaruiSyarat();
    }
    function gambarDaftar() {
      barisEl.length = 0; sorot = Math.max(0, lj.jawaban.indexOf('-'));
      daftar.replaceChildren(...lj.jawaban.map((_, i) => {
        const gid = id + '-b' + i;
        const li = h('li', { class: 'lj-baris' }, h('span', { class: 'lj-no', id: gid }, String(i + 1)),
          h('span', { class: 'lj-opsi', role: 'group', 'aria-labelledby': gid }, ['A', 'B', 'C', 'D'].map(k => h('button', { type: 'button', class: 'lj-btn', 'data-opsi': k, 'aria-pressed': 'false', 'aria-label': 'Nomor ' + (i + 1) + ' jawaban ' + k, onclick: () => pilih(i, k) }, k))),
          h('button', { type: 'button', class: 'lj-btn lj-ragu', 'aria-pressed': 'false', 'aria-label': 'Nomor ' + (i + 1) + ' ragu', onclick: () => { if (dikunci()) return; lj.ragu[i] = !lj.ragu[i]; simpan(); gambarBaris(i); gambarRingkas(); perbaruiSyarat(); } }, 'Ragu'));
        barisEl.push(li); return li;
      }));
      lj.jawaban.forEach((_, i) => gambarBaris(i)); gambarRingkas();
    }
    const token = () => ut.buatJawaban({ ujianId: lj.ujianId || '', nama: lj.nama, jawaban: lj.jawaban, ragu: lj.ragu });
    const teksWA = () => 'Jawaban ' + (lj.nama || 'saya') + ' · ' + (lj.judul || 'Lembar jawab') + '\n' + token();
    let waEl = null;
    function gambarRingkas() {
      const isi = lj.jawaban.filter(x => x !== '-').length; const rg = lj.ragu.filter(Boolean).length;
      ringkas.textContent = isi + '/' + lj.n + ' terisi · ' + rg + ' ragu';
      if (waEl) waEl.href = tautanWA(teksWA());
    }
    function gambarAksi() {
      waEl = tombolWA(teksWA(), 'Kirim lewat WhatsApp');
      waEl.addEventListener('click', tandaiTerkirim); // kode jawaban keluar lewat WhatsApp
      aksi.replaceChildren(UKP.c.salin(() => { const k = token(); tandaiTerkirim(); return k; }, { label: 'Salin kode jawaban', kelas: 'btn btn-primary', pesan: 'Kode jawaban disalin.', judul: 'Salin kode jawaban' }), waEl,
        h('button', { type: 'button', class: 'btn btn-ghost btn-text lj-kosongkan', onclick: async () => {
          // v9.4 FA3: lembar terkunci → Kosongkan melepas lembar dari ujian itu (lembar polos baru), BUKAN membuka kuncinya
          const terkunci = dikunci();
          if (!await UKP.konfirmasi('Kosongkan lembar jawab?', terkunci ? 'Lembar ini dilepas dari ujian itu dan menjadi lembar polos yang kosong. Lembar ujian itu tetap dikunci di HP ini.' : 'Semua jawaban dan tanda ragu di lembar ini dihapus.', { ya: 'Kosongkan', bahaya: true })) return;
          lj.jawaban = lj.jawaban.map(() => '-'); lj.ragu = lj.ragu.map(() => false);
          if (terkunci) { lj.ujianId = null; lj.judul = ''; tulisTinjau(null); }
          else { const t = bacaTinjau(); if (t && t.disalin) tulisTinjau(Object.assign({}, t, { disalin: null })); }
          simpan(); tulisInfo(); gambarDaftar(); gambarTinjau(); gambarAksi();
          UKP.umumkan(terkunci ? 'Lembar jawab dikosongkan dan dilepas dari ujian itu.' : 'Lembar jawab dikosongkan.'); } }, UKP.icon('hapus', null, true), 'Kosongkan'));
    }
    page.append(h('section', { class: 'card stack-sm lj-atur', 'aria-label': 'Pengaturan lembar jawab' },
        h('div', { class: 'form-grid dua' }, h('div', { class: 'field' }, h('label', { for: id + '-nama' }, 'Nama'), inNama), h('div', { class: 'field' }, h('label', { for: id + '-n' }, 'Jumlah soal'), inN)),
        h('details', { class: 'lipat' }, h('summary', null, 'Pakai kode ujian'), h('div', { class: 'field' }, h('label', { for: id + '-kode' }, 'Tempel kode atau tautan ujian'), inKode, galatKode)), infoUjian),
      h('div', { class: 'lj-kop' }, ringkas), kunciInfo, daftar, aksi, slotTinjau);
    tulisInfo(); gambarDaftar(); gambarAksi(); gambarTinjau();
    return page;
  };

  // v8.2: siarkan(), pemanduRoom(), pesertaRoom(), kumpulDariRoom(nama, dok) untuk views-simulasi.js dan uji
  UKP.ujianTimUI = { dialogKumpul, tautanUjian, fmtJam, siarkan: siarkanUjian, pemanduRoom: () => !!roomTuan(), pesertaRoom, kumpulDariRoom, tersiar, kunciTerbuka: idU => !!bekuUjian(idU),
    _murni: { statusPeserta, barisRingkas, saranRuang, pulihkanPernah, KBEKU, rapikanBeku, rencanaGantiKode } }; // v9.3.2 B2/P2: untuk uji
})(typeof window !== 'undefined' ? window : globalThis);
