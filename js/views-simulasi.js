/* Siap UKP — Simulasi ujian (CAT): pra-ujian, layar ujian, ringkasan kirim, hasil, ulas */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten; const L = UKP.belajar;
  // v7 (DESAIN-V7 §4): komponen Kontrak v7 dari core.js; gaya di css/app.css (Kontrak kelas v7)
  const sect = o => UKP.c.sect(o);
  const barMini = (p, o) => UKP.c.barMini(p, o);
  const ringkasStatus = (teks, aksi) => UKP.c.ringkasStatus(teks, aksi);
  const langkahBerikut = (items, o) => UKP.c.langkahBerikut(items, o);
  // baris .daftar-skor (K-05) yang bisa diklik; nilai null → "—" dengan bar putus-putus (data-tahap="awal")
  const barisSkorLokal = o => { const judul = h('span', { class: 'judul', title: o.judul || null }, o.judul);
    const isi = [h('span', { class: 'kode' }, o.kode), o.meta ? h('span', { class: 'teks' }, judul, h('span', { class: 'meta' }, o.meta)) : judul, barMini(o.nilai == null ? 0 : o.nilai, { tahap: o.tahap || (o.nilai == null ? 'awal' : null), nada: o.nada || null, label: o.labelBar }), h('span', { class: 'nilai', style: o.nadaAngka ? { color: 'var(--' + o.nadaAngka + ')' } : null }, o.nilai == null ? '—' : String(o.nilai)), UKP.icon('chevron-kanan', 'chev', true)];
    return h('li', { class: 'baris-skor' }, o.onclick ? h('button', { type: 'button', 'aria-label': o.label || null, onclick: o.onclick }, isi) : h('a', { href: UKP.href(o.view, o.params), 'data-go': o.view, 'data-params': o.params ? JSON.stringify(o.params) : null, 'aria-label': o.label || null }, isi)); };
  // daftar dengan lipatan sisa (K-06): n baris pertama tampil, sisanya di details.lipat (daftar kedua agar <ul> tetap sah)
  const daftarLipat = (rows, n, labelFn) => rows.length <= n + 2 ? h('ul', { class: 'daftar-skor' }, rows)
    : h('div', { class: 'stack-sm' }, h('ul', { class: 'daftar-skor' }, rows.slice(0, n)), h('details', { class: 'lipat' }, h('summary', null, labelFn(rows.length - n, rows.length)), h('ul', { class: 'daftar-skor' }, rows.slice(n))));

  // paket soal bersumber (try out): label untuk riwayat/hasil, mis. "Try Out UKP B · 100 soal"
  const paketSet = set => (K.daftarSet ? K.daftarSet() : []).find(x => x.set === set) || null;
  const labelSet = set => { const d = paketSet(set); return d ? d.label + ' · ' + d.n + ' soal' : 'Try Out ' + (set || ''); };
  function formatUjian() { return (UKP.ref && UKP.ref.ujian && UKP.ref.ujian.format) || { USKP: { soal: 40, lulus: 60 }, UKP: { A: { menit: 180, soalPerkiraan: 60 }, B: { menit: 210, soalPerkiraan: 80 }, C: { menit: 210, soalPerkiraan: 100 }, lulus: 60 } }; }

  // urutan soal kasus berangkai mengikuti posisi asli di modul ("Data untuk soal ini dan … berikutnya" selalu lebih dulu)
  function posAsli(x) { const m = UKP.modul[x.kode]; return m ? m.soal.indexOf(x) : 0; }
  function kelompokkanVignette(arr) { const out = []; const seen = new Set(); for (const x of arr) { if (seen.has(x.id)) continue; const grp = x.kasusId ? arr.filter(y => y.kasusId === x.kasusId).sort((p, q) => posAsli(p) - posAsli(q)) : [x]; grp.forEach(y => { seen.add(y.id); out.push(y); }); } return out; }
  // kelompok di luar tingkat target (dan E): seluruh soal kelompok itu, tanpa saring tingkat
  const poolKode = (kode, tingkat) => K.soalKelompok(kode, K.kelompok(tingkat).includes(kode) ? tingkat : undefined);
  function susunAttempt(cfg) {
    const s = UKP.store.get(); const tingkat = cfg.tingkat || s.profil.tingkat; const fmt = formatUjian();
    let soal = [], menit, perKel = {}, bagianTO = null;
    if (cfg.format === 'USKP') {
      const pool = poolKode(cfg.kode, tingkat); const n = Math.min(40, pool.length);
      soal = U.ambil(pool, n); menit = cfg.menit || (UKP.modul[cfg.kode] && UKP.modul[cfg.kode].meta.durasiUSKP) || 90; perKel[cfg.kode] = n;
    } else if (cfg.format === 'UKP') {
      const kel = K.kelompok(tingkat); const target = (fmt.UKP[tingkat] || {}).soalPerkiraan || 60;
      if (UKP.belajar && typeof UKP.belajar.kuotaSoal === 'function') {
        // semua tingkat: kuota per unit UKP.belajar.kuotaSoal (A/B tanpa pengali = bobot dasar; C berpengali laporan) — kuota A2 dipecah menjadi A2.10 (× pengali 'A2.10') dan A2 lain (× pengali A2) —
        // dengan pembagian sisa terbesar sehingga jumlah tepat soalPerkiraan; tiap kelompok yang punya soal mendapat ≥ 1; soal unit sekelompok diacak bersama
        const perKode = {}; const nUnit = {};
        UKP.belajar.kuotaSoal(tingkat, target, { min1: true }).forEach(u => { if (!u.n) return; perKode[u.kode] = (perKode[u.kode] || []).concat(U.ambil(u.soal, u.n)); nUnit[u.kode] = (nUnit[u.kode] || 0) + 1; });
        kel.forEach(k => { const ambil = perKode[k] || []; perKel[k] = ambil.length; soal = soal.concat(nUnit[k] > 1 ? U.acak(ambil) : ambil); });
      } else {
        const bobotKel = (UKP.belajar && UKP.belajar.bobotKelompok) ? UKP.belajar.bobotKelompok(tingkat) : null; const bobot = kel.map(k => (bobotKel && typeof bobotKel[k] === 'number') ? bobotKel[k] : (((UKP.modul[k].meta.perkiraanBobotSoal || {})[tingkat]) || 1 / kel.length)); const tot = bobot.reduce((a, b) => a + b, 0);
        kel.forEach((k, i) => { const pool = K.soalKelompok(k, tingkat); const n = Math.min(pool.length, Math.max(1, Math.round(target * bobot[i] / tot))); const ambil = U.ambil(pool, n); perKel[k] = ambil.length; soal = soal.concat(ambil); });
      }
      menit = (fmt.UKP[tingkat] || {}).menit || 180;
      if (cfg.terbagi) { const setengah = Math.ceil(soal.length / 2); soal = cfg.bagian === 2 ? soal.slice(setengah) : soal.slice(0, setengah); menit = Math.round(menit / 2); }
    } else if (cfg.format === 'tryout') {
      // paket try out: seluruh soal set itu dalam urutan asli (sumber.no); waktu = menit yang dipilih, bawaan durasi UKP tingkat paket
      // v8.1: bagian paket (cfg.dari–cfg.sampai, nomor 1-based) dengan waktu bawaan = n × tempo ujian (B: 126 dtk/soal)
      const p = paketSet(cfg.kode); const semua = K.soalSet(cfg.kode);
      const dari = U.clamp(Math.round(Number(cfg.dari) || 1), 1, Math.max(1, semua.length)); const sampai = U.clamp(Math.round(Number(cfg.sampai) || semua.length), dari, Math.max(dari, semua.length));
      soal = semua.slice(dari - 1, sampai); bagianTO = dari > 1 || sampai < semua.length ? dari + '–' + sampai : null;
      menit = cfg.menit || (bagianTO ? menitTempo(soal.length, (p && p.tingkat) || tingkat) : ((p && fmt.UKP[p.tingkat]) || {}).menit) || Math.max(5, Math.round(soal.length * 2.1)); soal.forEach(x => { perKel[x.kode] = (perKel[x.kode] || 0) + 1; });
    } else { // kustom
      const pool = cfg.kode ? poolKode(cfg.kode, tingkat) : K.semuaSoal(tingkat); soal = U.ambil(pool, Math.min(cfg.jumlah || 20, pool.length)); menit = cfg.menit || Math.round(soal.length * 2.5); soal.forEach(x => { perKel[x.kode] = (perKel[x.kode] || 0) + 1; });
    }
    const urut = cfg.format === 'UKP' ? kelompokkanVignette(soal) : cfg.format === 'tryout' ? soal : kelompokkanVignette(U.acak(soal));
    // UKP komprehensif tidak punya kode kelompok (label "UKP Tingkat A", bukan "UKP A1")
    return { id: U.id('sim'), format: cfg.format, tingkat, kode: cfg.format === 'UKP' ? null : (cfg.kode || null), menit, tanpaWaktu: !!cfg.tanpaWaktu, soalIds: urut.map(x => x.id), jawaban: {}, ragu: [], detik: {}, mulai: Date.now(), akhir: Date.now() + menit * 60000, posisi: 0, perKel, selesai: null, terbagi: cfg.format === 'UKP' && cfg.terbagi ? (cfg.bagian || 1) : null, bagian: bagianTO };
  }
  // v8.1 tempo ujian sungguhan: menit untuk n soal = round(n × L.tempoUjian(tingkat) / 60) (B: 40 soal → 84 mnt)
  function menitTempo(n, tingkat) { const d = L && typeof L.tempoUjian === 'function' ? L.tempoUjian(tingkat) : 126; return Math.max(1, Math.round(n * d / 60)); }
  // potongan 40 soal paket try out: Semua · 1–40 · 41–80 · 81–100 (hanya bila paket > 40 soal)
  function potonganTO(n) { const out = [{ nilai: 'semua', label: 'Semua', dari: 1, sampai: n }]; if (n > 40) for (let i = 1; i <= n; i += 40) out.push({ nilai: i + '-' + Math.min(n, i + 39), label: i + '–' + Math.min(n, i + 39), dari: i, sampai: Math.min(n, i + 39) }); return out; }
  function labelSim(x) {
    if (x.format === 'tim') return 'Ujian tim · ' + ((x.tim && x.tim.judul) || 'tanpa judul');
    if (x.format === 'UKP') return 'UKP Tingkat ' + x.tingkat + (x.terbagi ? ' (bagian ' + x.terbagi + ')' : '');
    if (x.format === 'USKP') return 'Kelompok ' + (x.kode || '') + ' · 40 soal'; // format internal 'USKP' tetap (data lama)
    if (x.format === 'tryout') { if (!x.bagian) return labelSet(x.kode); const d = paketSet(x.kode); return (d ? d.label : 'Try Out ' + (x.kode || '')) + ' · soal ' + x.bagian; }
    return 'Kustom ' + (x.kode ? x.kode : 'Tingkat ' + x.tingkat);
  }
  const kedaluwarsa = a => !a.tanpaWaktu && a.akhir <= Date.now();
  // menilai, mencatat jawaban (soal kosong tidak dicatat sebagai kesalahan; skor tetap menghitungnya salah), dan menyimpan rekaman
  function nilaiDanRekam(a, otomatis) {
    const s = UKP.store.get(); let benar = 0; const perKel = {}; const detikKel = {};
    a.soalIds.forEach(id => { const so = K.soal(id); if (!so) return; const k = so.kode; perKel[k] = perKel[k] || { benar: 0, total: 0 }; perKel[k].total++; detikKel[k] = (detikKel[k] || 0) + (a.detik[id] || 0); const jw = a.jawaban[id]; if (jw === so.kunci) { benar++; perKel[k].benar++; } if (jw) UKP.belajar.catatJawaban(so, jw, a.detik[id] || 0, 'simulasi'); });
    const total = a.soalIds.length; const skor = total ? Math.round(benar / total * 1000) / 10 : 0;
    const rekam = { id: a.id, format: a.format, tingkat: a.tingkat, kode: a.format === 'UKP' ? null : a.kode, mulai: a.mulai, selesai: Date.now(), skor, benar, total, perKel, detikKel, jawaban: a.jawaban, ragu: a.ragu, soalIds: a.soalIds, detik: a.detik, menit: a.menit, terbagi: a.terbagi, otomatis: !!otomatis, tanpaWaktu: a.tanpaWaktu };
    if (a.bagian) rekam.bagian = a.bagian;
    // v8.1 percobaan ujian tim: field tim ikut ke rekaman; detik terpakai untuk kode jawaban. Pemimpin yang mengerjakan bagiannya
    // di perangkat ini (ujian tim aktif ber-id sama) langsung terkumpul ke s.ujianTim sebagai sumber 'sendiri'
    if (a.tim) {
      rekam.tim = Object.assign({}, a.tim); rekam.detikTotal = Math.max(0, Math.round(Math.min(rekam.selesai - a.mulai, a.menit * 60000) / 1000));
      const UT = L.ujianTim; const u = UT && UT.aktif ? UT.aktif() : null;
      if (u && u.id === a.tim.ujianId && UT.kumpul(a.tim.nama, { jawaban: a.soalIds.map(id => a.jawaban[id] || '-'), ragu: a.soalIds.map(id => a.ragu.includes(id)), detik: rekam.detikTotal, sumber: 'sendiri' })) rekam.tim.terkumpul = true;
      // v8.2: kirim ke room (ragu = larik id soal); dianggap terkumpul di room hanya bila room tersambung saat itu
      if (a.tim.room) {
        const r = roomUjian(a); let ok = false;
        if (r) { try { ok = !!r.kirimSelesai(a.tim.ujianId, { jawaban: a.soalIds.map(id => a.jawaban[id] || '-'), ragu: a.ragu.filter(id => a.soalIds.includes(id)), detik: rekam.detikTotal }); } catch (e) { ok = false; } }
        rekam.tim.keRoom = !!(ok && roomTersambung(r));
      }
    }
    s.simulasi.push(rekam); if (s.simulasi.length > 60) s.simulasi.shift();
    s.simulasiAktif = null;
    const akhir = a.tanpaWaktu ? Date.now() : Math.min(Date.now(), a.akhir);
    UKP.hadir.catat('HADIR', Math.max(1, Math.min(a.menit, Math.round((akhir - a.mulai) / 60000))));
    UKP.store.save(); UKP.belajar.cekLencana(); UKP.store.flush();
    if (UKP.tim) UKP.tim.kirimRingkasan({ selesai: true }); // dasbor tim (js/tim.js): ringkasan simulasi, debounce 5 dtk
    return rekam;
  }
  function tambahKeKartu(r, ids) {
    const s = UKP.store.get(); const ada = new Set(s.kartuOtomatis.map(k => k.id));
    ids.forEach(id => { const so = K.soal(id); if (so) UKP.belajar.kartuOtomatisDariSoal(so, r.jawaban[id] || null); });
    UKP.store.save(); const n = s.kartuOtomatis.filter(k => !ada.has(k.id)).length;
    UKP.toast(n ? n + ' kartu ditambahkan ke dek.' : 'Soal yang salah sudah ada di dek kartu.');
  }

  // ================= v8.1 PERCOBAAN UJIAN TIM (format 'tim') =================
  // UKP.simulasiTim.mulai({ ujianId, judul, tingkat, menit, soalIds, nama }) → s.simulasiAktif (urutan soal apa adanya, tanpa acak);
  // tokenDari(rekaman) → kode jawaban UKPJ1 (urutan soalIds); kartuKirim(rekaman) → kartu "Kirim jawaban ke pemimpin"
  // v8.2 room: UKP.ruang hanya bila percobaan ini bersumber room dan aktivitas ujian room masih ujian yang sama (selain itu null)
  function roomUjian(a) {
    const r = UKP.ruang; if (!a || !a.tim || !a.tim.room || !r || typeof r.info !== 'function') return null;
    try { if (!r.info()) return null; const st = r.state(); const ak = st && st.aktivitas; return ak && ak.jenis === 'ujian' && ak.id === a.tim.ujianId ? r : null; } catch (e) { return null; }
  }
  const roomTersambung = r => { try { return !!(r && r.status().tersambung); } catch (e) { return false; } };
  function kirimJawabanRoom(a, soalId, o) {
    const r = roomUjian(a); if (!r) return false;
    try { return !!r.kirimJawaban(Object.assign({ aktivitas: a.tim.ujianId, soalId }, o)); } catch (e) { return false; }
  }
  function mulaiPercobaanTim(c) {
    c = c || {}; const s = UKP.store.get(); const ids = (Array.isArray(c.soalIds) ? c.soalIds : []).filter(id => typeof id === 'string' && id);
    if (!ids.length) return null;
    const tingkat = ['A', 'B', 'C'].includes(c.tingkat) ? c.tingkat : s.profil.tingkat;
    const menit = Math.max(1, Math.round(Number(c.menit) || menitTempo(ids.length, tingkat)));
    const perKel = {}; ids.forEach(id => { const so = K.soal(id); const k = so ? so.kode : String(id).split('-')[0]; perKel[k] = (perKel[k] || 0) + 1; });
    const kini = Date.now();
    // v8.2: c.akhir = batas waktu ujian dalam jam LOKAL (sudah dikoreksi selisih jam pemandu); c.room → jawaban dikirim ke room
    const akhirRoom = Number(c.akhir); const akhir = isFinite(akhirRoom) && akhirRoom > kini ? Math.min(akhirRoom, kini + 24 * 3600000) : kini + menit * 60000;
    s.simulasiAktif = { id: U.id('sim'), format: 'tim', tingkat, kode: null, menit, tanpaWaktu: false, soalIds: ids, jawaban: {}, ragu: [], detik: {}, mulai: kini, akhir, posisi: 0, perKel, selesai: null, terbagi: null,
      tim: { ujianId: String(c.ujianId || ''), judul: String(c.judul || 'Ujian tim').slice(0, 80), nama: L.rapikanNamaPeserta ? L.rapikanNamaPeserta(c.nama).slice(0, 24) : String(c.nama || '') } };
    if (c.room) s.simulasiAktif.tim.room = 1;
    UKP.store.save();
    // v9.3.2 B2: kabar awal ke room — dokumen jawaban (bentuk lama, isi kosong) terbit sekarang sehingga laptop pemimpin langsung
    // menulis "sedang mengerjakan · 0/N terisi" walau belum ada jawaban. Tanpa o dan k: isi dokumen tidak berubah, hanya diterbitkan.
    if (c.room) kirimJawabanRoom(s.simulasiAktif, ids[0], {});
    return s.simulasiAktif;
  }
  function tokenDari(r) {
    if (!r || !r.tim || !L.ujianTim) return '';
    const ids = r.soalIds || []; const detik = typeof r.detikTotal === 'number' ? r.detikTotal : Math.max(0, Math.round(Math.min((r.selesai || Date.now()) - r.mulai, (r.menit || 0) * 60000) / 1000));
    return L.ujianTim.buatJawaban({ ujianId: r.tim.ujianId, nama: r.tim.nama, jawaban: ids.map(id => (r.jawaban || {})[id] || '-'), ragu: ids.map(id => (r.ragu || []).includes(id)), detik });
  }
  const teksKirimWA = r => 'Jawaban ' + (r.tim.nama || 'saya') + ' · ' + (r.tim.judul || 'Ujian tim') + '\n' + tokenDari(r);
  function kartuKirimTim(r) {
    const u = L.ujianTim && L.ujianTim.aktif ? L.ujianTim.aktif() : null;
    const diRuang = u && u.id === r.tim.ujianId;
    if (diRuang && r.tim.terkumpul) return h('section', { class: 'card sorot kirim-tim', 'aria-labelledby': 'kirim-tim-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'kirim-tim-j' }, 'Jawaban Anda sudah terkumpul'), h('p', { class: 'card-meta' }, r.tim.judul + ' · atas nama ' + r.tim.nama))),
      h('p', { class: 'small' }, 'Jawaban Anda sudah masuk ke ujian tim di perangkat ini. Kumpulkan jawaban anggota lain, lalu nilai hasil tim.'),
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('ujiantim') }, 'Buka ujian tim')));
    const token = tokenDari(r);
    // v8.2: jawaban sudah terkirim ke room → kartu terkumpul + kode jawaban terlipat sebagai cadangan
    if (r.tim.keRoom) {
      const sesiTim = (UKP.store.get().sesiBersama || []).slice().reverse().find(x => x && x.ujianId === r.tim.ujianId) || null;
      return h('section', { class: 'card sorot kirim-tim', 'data-k': 'kirim-room', 'aria-labelledby': 'kirim-tim-j' },
        h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'kirim-tim-j' }, 'Jawaban Anda sudah terkumpul di room ✓'), h('p', { class: 'card-meta' }, r.tim.judul + ' · atas nama ' + r.tim.nama))),
        h('p', { class: 'small' }, sesiTim ? 'Hasil ujian tim sudah tersedia.' : 'Pemimpin menilai setelah semua mengumpulkan. Hasil ujian tim muncul di Riwayat room.'),
        sesiTim ? h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => UKP.go('tim', { anggota: 'sesi:' + sesiTim.id }) }, 'Lihat hasil tim')) : null,
        h('details', { class: 'lipat kirim-cadangan' }, h('summary', null, 'Cadangan: kode jawaban'),
          h('div', { class: 'stack-sm' }, h('p', { class: 'small' }, 'Hanya bila pemimpin meminta. Kode jawaban Anda (satu baris):'),
            h('p', { class: 'token-jawaban mono', 'data-token': token }, token),
            h('div', { class: 'btn-row' }, UKP.c.salin(token, { label: 'Salin kode', kelas: 'btn', pesan: 'Kode jawaban disalin.', judul: 'Salin kode jawaban' }),
              h('a', { class: 'btn', href: 'https://wa.me/?text=' + encodeURIComponent(teksKirimWA(r)), target: '_blank', rel: 'noopener' }, UKP.icon('chat', null, true), 'Kirim lewat WhatsApp')))));
    }
    return h('section', { class: 'card sorot kirim-tim', 'aria-labelledby': 'kirim-tim-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'kirim-tim-j' }, 'Kirim jawaban ke pemimpin'), h('p', { class: 'card-meta' }, r.tim.judul + ' · atas nama ' + r.tim.nama))),
      r.tim.room ? UKP.c.banner('Room tidak tersambung saat jawaban dikirim. Kirim kode ini ke grup.', 'warn') : null,
      h('p', { class: 'small' }, 'Kode jawaban Anda (satu baris):'),
      h('p', { class: 'token-jawaban mono', 'data-token': token }, token),
      h('div', { class: 'btn-row' }, UKP.c.salin(token, { label: 'Salin kode', kelas: 'btn btn-primary', pesan: 'Kode jawaban disalin.', judul: 'Salin kode jawaban' }),
        h('a', { class: 'btn', href: 'https://wa.me/?text=' + encodeURIComponent(teksKirimWA(r)), target: '_blank', rel: 'noopener' }, UKP.icon('chat', null, true), 'Kirim lewat WhatsApp')),
      h('p', { class: 'meta' }, 'Skor Anda sudah dihitung di perangkat ini; pemimpin menggabungkan hasil tim.'));
  }
  UKP.simulasiTim = { mulai: mulaiPercobaanTim, tokenDari, kartuKirim: kartuKirimTim, teksKirim: teksKirimWA, menitTempo };

  // ================= PRA-UJIAN =================
  const fmtSkor = x => UKP.fmt.angka(x, x % 1 ? 1 : 0);
  UKP.views.simulasi = function (params) {
    params = params || {}; const s = UKP.store.get(); const tingkat = s.profil.tingkat; const fmt = formatUjian();
    const aktif = s.simulasiAktif && !s.simulasiAktif.selesai ? s.simulasiAktif : null;
    if (params.jalan && aktif && !kedaluwarsa(aktif)) return layarUjian();
    if (params.hasil && params.ulas) return layarUlas(params.hasil, params.ulas, params);
    if (params.hasil) return layarHasil(params.hasil);
    if (aktif) {
      const a = aktif; const nJawab = Object.keys(a.jawaban).length; const n = a.soalIds.length; const sisa = Math.max(0, Math.round((a.akhir - Date.now()) / 60000));
      const buang = async () => { if (!nJawab || await UKP.konfirmasi('Buang simulasi?', 'Jawaban yang sudah diisi akan hilang dan tidak dinilai.', { ya: 'Buang', bahaya: true })) { s.simulasiAktif = null; UKP.store.save(); UKP.toast('Simulasi dibuang.'); UKP.render(); } };
      let teks, aksi;
      if (kedaluwarsa(a) && !nJawab) { teks = 'Simulasi ' + labelSim(a) + ' sudah melewati batas waktu tanpa satu jawaban pun, jadi tidak dinilai dan tidak dicatat.'; aksi = [h('button', { class: 'btn btn-primary', onclick: buang }, 'Buang dan susun baru')]; }
      else if (kedaluwarsa(a)) { teks = 'Waktu simulasi ' + labelSim(a) + ' sudah habis dengan ' + nJawab + '/' + n + ' soal terjawab. Kirim untuk melihat nilai; soal yang tidak dijawab dinilai salah.'; aksi = [h('button', { class: 'btn btn-primary', onclick: () => { const r = nilaiDanRekam(a, true); UKP.go('simulasi', { hasil: r.id }, { replace: true }); } }, 'Kirim dan lihat hasil'), h('button', { class: 'btn btn-danger btn-attn', onclick: buang }, UKP.icon('hapus'), 'Buang')]; }
      else { teks = 'Ada simulasi ' + labelSim(a) + ' yang belum dikirim: ' + nJawab + '/' + n + ' soal terjawab, ' + (a.tanpaWaktu ? 'tanpa batas waktu.' : 'sisa waktu ± ' + sisa + ' menit (waktu tetap berjalan).'); aksi = [h('button', { class: 'btn btn-primary', onclick: () => UKP.go('simulasi', { jalan: true }) }, UKP.icon('play'), 'Lanjutkan'), h('button', { class: 'btn btn-danger btn-attn', onclick: buang }, UKP.icon('hapus'), 'Buang')]; }
      return h('div', { class: 'page' }, UKP.c.kop({ judul: 'Simulasi berjalan', meta: [UKP.c.pill(labelSim(a), 'nila'), UKP.c.pill(nJawab + '/' + n + ' terjawab'), a.tanpaWaktu ? UKP.c.pill('tanpa batas waktu') : UKP.c.pill(kedaluwarsa(a) ? 'waktu habis' : 'sisa ± ' + sisa + ' mnt', kedaluwarsa(a) ? 'attn' : 'warn', 'jam')] }),
        h('section', { class: 'card sorot', 'aria-label': 'Simulasi yang belum dikirim' }, UKP.c.progress({ label: 'Terjawab', nilai: nJawab, maks: n, teks: nJawab + ' dari ' + n }), h('p', null, teks), h('div', { class: 'btn-row' }, aksi)));
    }
    const UTI = () => UKP.ujianTimUI || {}; // v8.2 room (js/views-ujian-tim.js)
    const pemanduRoom = () => { try { return !!(UTI().pemanduRoom && UTI().pemanduRoom()); } catch (e) { return false; } };
    const page = h('div', { class: 'page lebar halaman-simulasi' });
    page.appendChild(UKP.c.kop({ judul: 'Simulasi ujian', lead: 'Latihan ujian penuh seperti CAT: waktu berjalan, pembahasan muncul setelah dikirim.' }));
    { const kut = typeof UKP.c.kartuUjianTim === 'function' ? UKP.c.kartuUjianTim() : null; if (kut) page.appendChild(kut); } // v8.1 ujian tim berjalan
    const lulusBatas = (fmt.UKP || {}).lulus || 60;
    // ≥ 1024: Ringkasan + tombol Mulai di kolom kanan lengket; < 1024: satu baris .meta tepat di atas .sticky-actions
    const kolomDua = window.innerWidth >= 1024;
    const metaHP = h('p', { class: 'meta ringkas-sim-hp', 'aria-live': 'polite' });
    const semuaKel = K.semuaKelompok(); const kelT = K.kelompok(tingkat);
    // konfigurasi per format, agar pilihan satu format tidak bocor ke format lain
    // paket soal bersumber (try out): format 'tryout' hanya tampil bila ada soal ber-sumber.set; kode = set, urutan asli
    const paket = K.daftarSet ? K.daftarSet() : [];
    const cfg = { format: ['UKP', 'USKP', 'kustom'].concat(paket.length ? ['tryout'] : []).includes(params.format) ? params.format : 'UKP', kodeUSKP: params.kode && UKP.modul[params.kode] ? params.kode : kelT[0], kodeKustom: params.format === 'kustom' && params.kode ? params.kode : '', jumlah: 20, menitKustom: 50, tanpaWaktu: false, terbagi: false, bagian: 1, set: params.format === 'tryout' && paket.some(p => p.set === params.kode) ? params.kode : (paket[0] ? paket[0].set : null), menitTO: null,
      bagianTO: typeof params.bagian === 'string' ? params.bagian : 'semua', tim: !!params.tim || !!params.room, cara: params.cara === 'perangkat' || params.room || (params.cara !== 'papan' && pemanduRoom()) ? 'perangkat' : 'papan' };
    const paketAktif = () => paket.find(p => p.set === cfg.set) || paket[0] || null;
    // v8.1 bagian paket (Semua · 1–40 · 41–80 · 81–100): potongan terpilih, menit bawaan = n × tempo ujian tingkat paket
    const potAktif = () => { const p = paketAktif(); const pot = potonganTO(p ? p.n : 0); return pot.find(x => x.nilai === cfg.bagianTO) || pot[0]; };
    const menitTO = () => { const p = paketAktif(); const b = potAktif(); if (cfg.menitTO) return cfg.menitTO; if (p && b.nilai !== 'semua') return menitTempo(b.sampai - b.dari + 1, p.tingkat || tingkat); return (p && (fmt.UKP[p.tingkat] || {}).menit) || (p ? Math.max(5, Math.round(p.n * 2.1)) : 210); };
    const kartu = h('section', { class: 'card form-sim', 'aria-labelledby': 'sim-form-j' });
    const ringkas = h('aside', { class: 'card ringkas ringkas-sim', 'aria-labelledby': 'sim-ringkas-j' });
    const opsiKel = (k, pilih, denganMenit) => h('option', { value: k, selected: k === pilih ? true : null }, k + ' · ' + K.namaKelompok(k) + (denganMenit ? ' · ' + ((UKP.modul[k].meta.durasiUSKP) || 90) + ' mnt' : '') + (kelT.includes(k) ? '' : ' (di luar target)'));
    const sw = (id, judul, bantu, nilai, onchange) => UKP.c.sakelar({ id, judul, bantu, nilai, onchange });
    // perkiraan format saat ini: [menit, soal, label]
    function perkiraan() {
      if (cfg.format === 'UKP') { const f = fmt.UKP[tingkat] || {}; const m = cfg.terbagi ? Math.round((f.menit || 180) / 2) : (f.menit || 180); const n = cfg.terbagi ? Math.ceil((f.soalPerkiraan || 60) / 2) : (f.soalPerkiraan || 60); return [m, '±' + n, 'UKP komprehensif ' + tingkat + (cfg.terbagi ? ' · bagian ' + cfg.bagian : '')]; }
      if (cfg.format === 'USKP') return [(UKP.modul[cfg.kodeUSKP] && UKP.modul[cfg.kodeUSKP].meta.durasiUSKP) || 90, '40', 'Per kelompok ' + cfg.kodeUSKP];
      if (cfg.format === 'tryout') { const p = paketAktif(); const b = potAktif(); return [menitTO(), String(p ? b.sampai - b.dari + 1 : 0), (p ? p.label : 'Try Out') + (b.nilai !== 'semua' ? ' · soal ' + b.label : '')]; }
      return [cfg.menitKustom, String(cfg.jumlah), 'Kustom ' + (cfg.kodeKustom || 'Tingkat ' + tingkat)];
    }
    function runDariCfg() {
      return cfg.format === 'tryout' ? { format: 'tryout', kode: cfg.set, tingkat: (paketAktif() || {}).tingkat || tingkat, menit: menitTO(), dari: potAktif().dari, sampai: potAktif().sampai } : cfg.format === 'USKP' ? { format: 'USKP', kode: cfg.kodeUSKP } : cfg.format === 'kustom' ? { format: 'kustom', kode: cfg.kodeKustom || null, jumlah: cfg.jumlah, menit: cfg.menitKustom } : { format: 'UKP', terbagi: cfg.terbagi, bagian: cfg.bagian };
    }
    function mulai() {
      const run = runDariCfg(); run.tanpaWaktu = cfg.tanpaWaktu;
      const a = susunAttempt(run); if (!a.soalIds.length) { UKP.toast('Belum ada soal untuk pilihan ini.', { nada: 'attn' }); return; }
      s.simulasiAktif = a; UKP.store.save(); UKP.go('simulasi', { jalan: true, dariPraUjian: true });
    }
    // ---------- v8.1 kartu "Ujian tim": sakelar, peserta, cara menjawab, ringkasan, Mulai ujian tim ----------
    const UT = L.ujianTim;
    // v8.2: pemandu room → peserta = peserta room; cara bawaan perangkat masing-masing (lewat room)
    const pesertaTim = () => {
      const pr = pemanduRoom() && UTI().pesertaRoom ? UTI().pesertaRoom() : null; if (pr && pr.length) return pr;
      const b = L.siapBersama(UKP.store.get()).bersama; if (b.peserta.length) return b.peserta.slice();
      // v9.2 G3: tanpa nama bawaan dari kode; daftar baru diawali nama profil sendiri
      const out = []; [L.rapikanNamaPeserta(s.profil.nama)].forEach(n => { if (n && !out.some(x => x.toLowerCase() === n.toLowerCase())) out.push(n); });
      return out.slice(0, L.MAKS_PESERTA || 12);
    };
    const kartuTim = h('section', { class: 'card kartu-tim-sim', 'aria-labelledby': 'sim-tim-j' });
    const timRingkas = h('p', { class: 'meta tim-ringkas', 'aria-live': 'polite' });
    const stickyMulai = h('div', { class: 'sticky-actions' });
    function perbaruiRingkasTim() { const [m, n] = perkiraan(); timRingkas.textContent = n + ' soal · ' + m + ' mnt · ' + pesertaTim().length + ' orang'; }
    function ubahPeserta() {
      if (typeof UKP.c.aturBersama !== 'function') return;
      UKP.dialog({ judul: 'Anggota ujian tim', isi: () => h('div', { class: 'stack-sm' }, h('p', { class: 'small muted' }, 'Tulis nama anggota tim Anda satu per satu. Bisa diubah nanti. Urutan daftar = urutan baris di papan.'), UKP.c.aturBersama({ onUbah: () => {} })),
        kaki: dlg => [h('button', { type: 'button', class: 'btn btn-primary', onclick: () => dlg.close('ok') }, 'Selesai')], onClose: () => gambarTim('.tim-ubah') });
    }
    function gambarTim(fokusSel) {
      if (!UT) { kartuTim.hidden = true; return; }
      const peserta = pesertaTim();
      kartuTim.replaceChildren(h('h2', { class: 'card-title', id: 'sim-tim-j' }, 'Ujian tim'),
        sw('sim-tim', 'Kerjakan sebagai tim (kunci jawaban dan nilai di akhir)', 'Semua mengerjakan soal yang sama dengan waktu ujian; nilai per orang, batas lulus ' + ((fmt.UKP || {}).lulus || 60) + '.', cfg.tim, e => { cfg.tim = e.target.checked; gambar('#sim-tim'); }),
        cfg.tim ? h('div', { class: 'stack-sm tim-isi' },
          h('div', { class: 'tim-peserta' }, h('span', { class: 'meta' }, 'Anggota'), h('span', { class: 'tim-nama' }, peserta.length ? peserta.join(', ') : 'belum ada'),
            typeof UKP.c.aturBersama === 'function' ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text tim-ubah', onclick: ubahPeserta }, 'Ubah anggota') : null),
          UKP.c.segmen({ id: 'sim-cara', label: 'Cara menjawab', aktif: cfg.cara, penuh: true, opsi: [{ nilai: 'papan', label: 'Satu layar', sub: 'dicatat pemimpin' }, { nilai: 'perangkat', label: 'Perangkat masing-masing', sub: pemanduRoom() ? 'lewat room' : 'pakai kode' }], onPilih: v => { cfg.cara = v; } }),
          timRingkas,
          h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary btn-lg tim-mulai', onclick: mulaiTim, disabled: peserta.length ? null : true }, UKP.icon('play'), 'Mulai ujian tim'))) : null);
      perbaruiRingkasTim();
      if (fokusSel) { const el = kartuTim.querySelector(fokusSel); if (el) el.focus(); }
    }
    function pilihUjianAda(ada) {
      return new Promise(resolve => {
        UKP.dialog({ judul: 'Ujian tim lain masih berjalan', ukuran: 'sm', isi: () => h('p', null, '“' + ada.judul + '” belum dinilai. Lanjutkan ujian itu, atau buang lalu susun yang baru.'),
          kaki: dlg => [h('button', { type: 'button', class: 'btn btn-danger btn-attn', onclick: () => dlg.close('buang') }, UKP.icon('hapus'), 'Buang'), h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => dlg.close('lanjut') }, 'Lanjutkan')],
          onClose: v => resolve(v) });
      });
    }
    async function mulaiTim() {
      const ada = UT.aktif();
      if (ada) {
        const v = await pilihUjianAda(ada);
        if (v === 'lanjut') { UKP.go('ujiantim'); return; }
        if (v !== 'buang' || !(await UKP.konfirmasi('Buang ujian tim?', 'Jawaban yang sudah dicatat untuk “' + ada.judul + '” akan hilang.', { ya: 'Buang', bahaya: true }))) return;
        UT.batal();
      }
      const run = runDariCfg(); run.tanpaWaktu = false;
      const a = susunAttempt(run); if (!a.soalIds.length) { UKP.toast('Belum ada soal untuk pilihan ini.', { nada: 'attn' }); return; }
      const id = UT.susun({ judul: labelSim(a), tingkat: a.tingkat, menit: a.menit, soalIds: a.soalIds, peserta: pesertaTim(), cara: cfg.cara, sumber: { format: a.format, kode: a.kode, bagian: a.bagian || (a.terbagi ? String(a.terbagi) : null) } });
      if (!id) { UKP.toast('Ujian tim gagal disusun.', { nada: 'attn' }); return; }
      // v8.2: pemandu room + perangkat masing-masing → ujian langsung dikirim ke room
      if (cfg.cara === 'perangkat' && pemanduRoom() && UTI().siarkan) { try { if (UTI().siarkan()) UKP.toast('Ujian dikirim ke room.'); } catch (e) { console.error(e); } }
      UKP.go('ujiantim');
    }
    const tombolMulai = blok => h('button', { type: 'button', class: 'btn btn-primary btn-lg' + (blok ? ' btn-block' : ''), onclick: mulai }, UKP.icon('play'), 'Mulai simulasi');
    // aturan dan pintasan: dilipat agar ringkasan dan tombol tidak terdorong ke bawah
    const aturan = () => h('details', { class: 'lipat aturan-sim' }, h('summary', null, 'Aturan simulasi'),
      h('ul', { style: { listStyle: 'none', margin: '0', padding: '0', display: 'grid', gap: '8px' } }, [['calc', 'Kalkulator, pencarian, dan Tutor nonaktif selama simulasi.'], ['check', 'Jawaban tersimpan otomatis.'], ['jam', 'Waktu tetap berjalan saat Anda keluar dari halaman.'], ['flag', 'Tandai soal ragu, lalu kembali lewat daftar soal.']].map(([ik, t]) => h('li', { class: 'small', style: { display: 'flex', gap: '8px', alignItems: 'flex-start' } }, h('span', { 'aria-hidden': 'true', style: { display: 'inline-grid', color: 'var(--muted)', marginTop: '2px' } }, UKP.icon(ik, null, true)), t))),
      h('p', { class: 'meta petunjuk-kbd' }, 'Pintasan: ', UKP.c.kbd('←'), ' ', UKP.c.kbd('→'), ' soal · ', UKP.c.kbd('R'), ' ragu · ', UKP.c.kbd('G'), ' daftar soal · ', UKP.c.kbd('A'), '–', UKP.c.kbd('D'), ' jawab'));
    function gambarRingkas() {
      const [m, n] = perkiraan();
      metaHP.textContent = (cfg.tanpaWaktu && !cfg.tim ? 'tanpa batas waktu' : m + ' mnt') + ' · ' + n + ' soal · batas ' + lulusBatas;
      perbaruiRingkasTim(); stickyMulai.hidden = !!(cfg.tim && UT); metaHP.hidden = !!(cfg.tim && UT);
      if (!kolomDua) return;
      // kolom sempit (±330 px): fakta sebagai dl.fakta tiga baris, bukan tiga tile yang memecah "±100" dan "mnt"; format tidak diulang (sudah di segmen)
      const fakta = (dt, dd) => h('div', null, h('dt', null, dt), h('dd', null, dd));
      ringkas.replaceChildren(h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'sim-ringkas-j' }, 'Ringkasan'))),
        h('dl', { class: 'fakta ringkas-fakta' }, fakta('Waktu', cfg.tanpaWaktu ? 'tanpa batas waktu' : m + ' menit'), fakta('Soal', n + ' soal'), fakta('Batas lulus', 'skor ' + lulusBatas)),
        cfg.tim && UT ? null : tombolMulai(true), aturan());
    }
    function gambar(fokusSel) {
      kartu.replaceChildren(h('h2', { class: 'visually-hidden', id: 'sim-form-j' }, 'Atur simulasi'));
      const fUKP = fmt.UKP[tingkat] || {};
      const seg = UKP.c.segmen({ id: 'sim-format', label: 'Format', aktif: cfg.format, penuh: true, opsi: [{ nilai: 'UKP', label: 'Komprehensif ' + tingkat, sub: (fUKP.menit || 180) + ' mnt · ±' + (fUKP.soalPerkiraan || 60) + ' soal' }, { nilai: 'USKP', label: 'Per kelompok', sub: '40 soal' }, { nilai: 'kustom', label: 'Kustom', sub: 'atur sendiri' }].concat(paket.length ? [{ nilai: 'tryout', label: 'Try Out', sub: (paketAktif() ? potAktif().sampai - potAktif().dari + 1 : 0) + ' soal · ' + menitTO() + ' mnt' }] : []), onPilih: v => { cfg.format = v; gambar('[data-format="' + v + '"]'); } });
      const segEl = seg.querySelector('.seg') || seg; segEl.classList.add('bersub'); // K-11: segmen ber-sub (P1 juga menambahkannya otomatis)
      seg.querySelectorAll('button[data-nilai]').forEach(b => { b.dataset.format = b.dataset.nilai; });
      kartu.appendChild(seg);
      if (cfg.format === 'UKP') {
        kartu.append(h('p', { class: 'small' }, 'Semua ' + kelT.length + ' kelompok Tingkat ' + tingkat + ' dalam satu sesi; jumlah soal masih perkiraan. Komposisi mengikuti bobot perkiraan per kelompok' + ((UKP.bobotLaporan || {})[tingkat] ? ' yang disesuaikan dengan laporan peserta' : '') + '; daftar soal dikelompokkan per kelompok.'),
          sw('sim-terbagi', 'Komprehensif terbagi dua malam', 'Setengah soal, setengah waktu. Hasilnya bukan ukuran stamina dan tidak dihitung untuk Siap Daftar.', cfg.terbagi, e => { cfg.terbagi = e.target.checked; gambar('#sim-terbagi'); }),
          cfg.terbagi ? UKP.c.segmen({ id: 'sim-bagian', label: 'Bagian', aktif: cfg.bagian, batas: true, opsi: [1, 2].map(b => ({ nilai: b, label: 'Bagian ' + b })), onPilih: b => { cfg.bagian = b; gambarRingkas(); } }) : null,
          window.innerWidth < 900 ? UKP.c.banner('Simulasi komprehensif sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.', 'info') : null);
      } else if (cfg.format === 'tryout') {
        const p = paketAktif(); const komposisi = p ? p.kelompok.map(k => k + ' ' + p.perKelompok[k]).join(', ') : '';
        // v8.1.1 penjelas mengikuti Bagian: "soal 1–40 dari 100 … 84 menit (tempo ujian)"; komposisi kelompok hanya untuk paket utuh
        const teksTO = (p, komposisi) => { const b = potAktif(); const nama = p ? p.judul : 'Paket try out';
          if (p && b && b.nilai !== 'semua') return nama + ': soal ' + b.label + ' dari ' + p.n + ' dalam urutan asli try out, waktu bawaan ' + menitTO() + ' menit (tempo ujian). Pembahasan muncul setelah dikirim.';
          return nama + ': ' + (p ? p.n : 0) + ' soal dalam urutan asli try out' + (p && p.tingkat ? ', waktu bawaan seperti UKP Tingkat ' + p.tingkat : '') + '. Komposisi kelompok: ' + komposisi + '. Pembahasan muncul setelah dikirim.'; };
        kartu.append(paket.length > 1 ? h('div', { class: 'field' }, h('label', { for: 'sim-set' }, 'Paket'), h('select', { class: 'select', id: 'sim-set', onchange: e => { cfg.set = e.target.value; cfg.menitTO = null; cfg.bagianTO = 'semua'; gambar('#sim-set'); } }, paket.map(q => h('option', { value: q.set, selected: q.set === cfg.set ? true : null }, q.judul + ' · ' + q.n + ' soal')))) : null,
          p && p.n > 40 ? UKP.c.segmen({ id: 'sim-bagian-to', label: 'Bagian', aktif: potAktif().nilai, batas: true, opsi: potonganTO(p.n).map(x => ({ nilai: x.nilai, label: x.label })), onPilih: v => { cfg.bagianTO = v; cfg.menitTO = null; const inp = kartu.querySelector('#sim-m-to'); if (inp) inp.value = menitTO(); const sb = kartu.querySelector('[data-format="tryout"] small'); if (sb) sb.textContent = perkiraan()[1] + ' soal · ' + menitTO() + ' mnt'; const tp = kartu.querySelector('.to-penjelas'); if (tp) tp.textContent = teksTO(p, komposisi); gambarRingkas(); } }) : null,
          h('p', { class: 'small to-penjelas' }, teksTO(p, komposisi)),
          h('div', { class: 'field' }, h('label', { for: 'sim-m-to' }, 'Menit'), h('div', { class: 'input-grup' }, h('input', { class: 'input angka', id: 'sim-m-to', type: 'number', inputmode: 'numeric', min: 5, max: 300, value: menitTO(), oninput: e => { const v = Number(e.target.value); if (v) cfg.menitTO = U.clamp(v, 5, 300); gambarRingkas(); } }), h('span', { class: 'imbuh', 'aria-hidden': 'true' }, 'mnt'))),
          window.innerWidth < 900 ? UKP.c.banner('Try out ' + (p ? p.n : '') + ' soal sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.', 'info') : null);
      } else if (cfg.format === 'USKP') {
        kartu.append(h('div', { class: 'field' }, h('label', { for: 'sim-kode' }, 'Kelompok'), h('select', { class: 'select', id: 'sim-kode', onchange: e => { cfg.kodeUSKP = e.target.value; gambarRingkas(); } }, h('optgroup', { label: 'Tingkat ' + tingkat + ' (target)' }, kelT.map(k => opsiKel(k, cfg.kodeUSKP, true))), semuaKel.some(k => !kelT.includes(k)) ? h('optgroup', { label: 'Di luar target' }, semuaKel.filter(k => !kelT.includes(k)).map(k => opsiKel(k, cfg.kodeUSKP, true))) : null)),
          h('p', { class: 'small muted' }, 'Format per kelompok: 40 soal pilihan ganda, 2,5 poin per soal, memenuhi batas bila skor ≥ 60 (24 soal benar).'));
      } else {
        kartu.append(h('div', { class: 'form-grid dua' }, h('div', { class: 'field' }, h('label', { for: 'sim-j' }, 'Jumlah soal'), h('input', { class: 'input angka', id: 'sim-j', type: 'number', inputmode: 'numeric', min: 5, max: 120, value: cfg.jumlah, oninput: e => { cfg.jumlah = U.clamp(Number(e.target.value) || 20, 5, 120); gambarRingkas(); } })), h('div', { class: 'field' }, h('label', { for: 'sim-m' }, 'Menit'), h('div', { class: 'input-grup' }, h('input', { class: 'input angka', id: 'sim-m', type: 'number', inputmode: 'numeric', min: 5, max: 300, value: cfg.menitKustom, oninput: e => { cfg.menitKustom = U.clamp(Number(e.target.value) || 50, 5, 300); gambarRingkas(); } }), h('span', { class: 'imbuh', 'aria-hidden': 'true' }, 'mnt')))),
          h('div', { class: 'field' }, h('label', { for: 'sim-kode2' }, 'Kelompok (opsional)'), h('select', { class: 'select', id: 'sim-kode2', onchange: e => { cfg.kodeKustom = e.target.value || ''; gambarRingkas(); } }, h('option', { value: '', selected: !cfg.kodeKustom ? true : null }, 'Semua kelompok Tingkat ' + tingkat), semuaKel.map(k => opsiKel(k, cfg.kodeKustom, false)))));
      }
      if (!cfg.tim || !UT) kartu.append(sw('sim-tanpa', 'Tanpa batas waktu', 'Untuk kebutuhan aksesibilitas. Jawaban tetap dinilai; waktu terpakai tidak dinilai.', cfg.tanpaWaktu, e => { cfg.tanpaWaktu = e.target.checked; gambarRingkas(); }));
      gambarTim(); gambarRingkas();
      if (fokusSel) { const el = kartu.querySelector(fokusSel) || kartuTim.querySelector(fokusSel); if (el) el.focus(); }
    }
    gambar();
    stickyMulai.appendChild(tombolMulai(false)); if (cfg.tim && UT) stickyMulai.hidden = true;
    if (kolomDua) page.appendChild(h('div', { class: 'tata' }, h('div', { class: 'k-7 kl-8 stack' }, kartu, kartuTim), h('div', { class: 'k-5 kl-4 lengket' }, ringkas)));
    else page.append(kartu, kartuTim, aturan(), metaHP, stickyMulai);
    // riwayat (8 terakhir): satu rumah, di bawah formulir. Nada hanya untuk pengecualian (§3.3): bila mayoritas di bawah 60, hanya yang memenuhi diberi pill
    const riwayat = s.simulasi.filter(x => x.selesai).slice(-8).reverse();
    if (riwayat.length) {
      const nLulus = riwayat.filter(r => r.skor >= 60).length; const mayoritasLulus = nLulus * 2 >= riwayat.length;
      const skorTren = s.simulasi.filter(x => x.selesai).slice(-12).map(x => x.skor);
      page.appendChild(sect({ id: 'sim-rapor-j', judul: 'Simulasi terakhir', meta: riwayat.length + ' simulasi' + (mayoritasLulus ? ' · ' + nLulus + ' memenuhi 60' : ''),
        aksi: skorTren.length >= 3 && UKP.viz && UKP.viz.sparkline ? UKP.viz.sparkline({ nilai: skorTren, label: 'Skor ' + skorTren.length + ' simulasi terakhir: ' + skorTren.map(fmtSkor).join(', ') }) : null,
        isi: h('div', { class: 'list-rows' }, riwayat.map(r => { const lulusR = r.skor >= 60; const kecuali = mayoritasLulus ? !lulusR : lulusR;
          return h('a', { class: 'row-link', href: '#simulasi', onclick: e => { e.preventDefault(); UKP.go('simulasi', { hasil: r.id }); } }, h('span', { class: 'kode' }, UKP.fmt.tanggal(U.iso(new Date(r.selesai))).replace(/ \d{4}$/, '')), h('span', { class: 'row-title small' }, labelSim(r), h('span', { class: 'meta' }, ' · ' + r.benar + ' dari ' + r.total + ' benar')), h('span', { class: 'mono', style: { fontWeight: 700 } }, fmtSkor(r.skor)), kecuali ? UKP.c.pill(lulusR ? 'memenuhi 60' : 'di bawah 60', lulusR ? 'ok' : 'attn') : null, UKP.icon('chevron-kanan', 'chev', true)); })) }));
    }
    return page;
  };

  // ================= LAYAR UJIAN =================
  // token entri penjaga yang sedang terpasang tepat di atas entri layar ujian (lihat pasangPenjaga)
  let tokenPenjaga = null;
  const BUKAN_TEKS = /^(radio|checkbox|button|submit|reset|range|color|file|image|hidden)$/i;
  const mengetik = t => !!t && t.nodeType === 1 && (t.isContentEditable || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || (t.tagName === 'INPUT' && !BUKAN_TEKS.test(t.type || 'text')));
  function layarUjian() {
    const s = UKP.store.get(); const a = s.simulasiAktif;
    if (!a) return h('div', { class: 'page' }, h('h1', null, 'Tidak ada simulasi aktif'), UKP.link('Susun simulasi', 'simulasi'));
    document.body.dataset.mode = 'ujian';
    const lebar = window.innerWidth >= 900; // desktop: panel daftar soal di kanan; HP: daftar soal sebagai lembar bawah
    const page = h('div', { class: 'page lebar halaman-ujian' });
    const bar = h('div', { class: 'ujian-bar', role: 'region', 'aria-label': 'Status ujian', style: { borderBottom: '0' } });
    // "Tersimpan otomatis" dengan ikon cek; jam simpan terakhir hanya di title (glosarium §5)
    const tersimpanTeks = h('span', null, 'Tersimpan otomatis');
    const tersimpanEl = h('span', { class: 'meta tersimpan', style: { display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-ui)' } }, h('span', { 'aria-hidden': 'true', style: { display: 'inline-grid', color: 'var(--muted)' } }, UKP.icon('check', null, true)), tersimpanTeks);
    const konten = h('div', { class: 'grid-2 konten-ujian', style: { display: 'grid', gap: '20px', gridTemplateColumns: lebar ? 'minmax(0,1fr) 320px' : 'minmax(0,1fr)', alignItems: 'start' } });
    const kiri = h('div', { class: 'stack' }); const kanan = h('aside', { class: 'card panel-ujian', 'aria-label': 'Daftar soal', style: { position: 'sticky', top: '96px', maxHeight: 'calc(100dvh - 136px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }, hidden: lebar ? null : true });
    // panel CAT (desktop): kop + daftar nomor (gulir sendiri) + legenda tetap di dasar panel (.legenda.lengket, di luar wadah gulir).
    // Elemen dibuat sekali agar posisi gulir daftar tidak hilang saat grid digambar ulang.
    const hitungPanel = h('span', { class: 'meta' });
    const daftarNomor = h('div', { class: 'daftar-nomor', style: { flex: '1 1 auto', minHeight: '0', overflow: 'auto', overscrollBehavior: 'contain', margin: '0 -4px', padding: '0 4px 4px' } });
    if (lebar) kanan.append(h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title' }, 'Daftar soal'), hitungPanel)), daftarNomor, legendaNomor('legenda lengket'),
      h('p', { class: 'tiny muted petunjuk-kbd', style: { margin: '6px 0 0', flex: 'none' } }, UKP.c.kbd('←'), ' ', UKP.c.kbd('→'), ' soal · ', UKP.c.kbd('R'), ' ragu · ', UKP.c.kbd('G'), ' daftar'));
    konten.append(kiri, kanan); page.append(bar, konten);
    // Momen 5 (HP): gesek ke bawah pada bar ujian membuka Daftar soal (alternatif tombol "Daftar soal" dan G)
    if (!lebar) {
      let y0 = null, x0 = 0;
      bar.addEventListener('touchstart', e => { const t = e.touches[0]; y0 = e.touches.length === 1 && !(e.target.closest && e.target.closest('button')) ? t.clientY : null; x0 = t ? t.clientX : 0; }, { passive: true });
      bar.addEventListener('touchend', e => { if (y0 == null) return; const t = e.changedTouches[0]; const dy = t.clientY - y0, dx = Math.abs(t.clientX - x0); y0 = null; if (dy > 40 && dx < dy && !terkirim && !document.querySelector('dialog[open]')) bukaDaftar(); }, { passive: true });
    }
    let timer = null; let mulaiSoal = performance.now(); const diumumkan = {}; let terkirim = false; let terpasang = true;
    // mode tinjau ragu (SM-5): Berikutnya melompat ke soal ragu berikutnya
    let tinjau = null;
    const live = h('div', { class: 'visually-hidden', role: 'status', 'aria-live': 'polite' }); page.appendChild(live);
    function tandaiTersimpan() { tersimpanEl.title = 'Tersimpan pukul ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }
    function simpan() { UKP.store.save(); tandaiTersimpan(); }
    function catatWaktu() { const id = a.soalIds[a.posisi]; a.detik[id] = (a.detik[id] || 0) + (performance.now() - mulaiSoal) / 1000; mulaiSoal = performance.now(); }
    function ke(i, dariGrid) {
      const pertahankanGrid = !!(dariGrid && lebar);
      catatWaktu(); a.posisi = U.clamp(i, 0, a.soalIds.length - 1); simpan(); gambar(pertahankanGrid);
      const tombolGrid = pertahankanGrid ? kanan.querySelector('[aria-current="true"]') : null;
      if (tombolGrid) tombolGrid.focus(); else UKP.fokus(kiri.querySelector('h1'));
    }
    const sisaDetik = () => Math.max(0, Math.round((a.akhir - Date.now()) / 1000));
    const stSoal = id => a.ragu.includes(id) ? 'ragu' : a.jawaban[id] ? 'isi' : 'kosong';
    const hitungStatus = () => { const n = a.soalIds.length; const ragu = a.ragu.length; const isi = a.soalIds.filter(id => a.jawaban[id] && !a.ragu.includes(id)).length; return { n, ragu, isi, terjawab: a.soalIds.filter(id => a.jawaban[id]).length, kosong: a.soalIds.filter(id => !a.jawaban[id]).length }; };
    // laju: posisi "seharusnya" menurut waktu terpakai (persen dari total soal)
    const persenLaju = () => a.tanpaWaktu ? null : U.clamp((Date.now() - a.mulai) / (a.menit * 60000) * 100, 0, 100);
    const progres = h('div', { class: 'ujian-progres', 'aria-hidden': 'true' });
    const statusJawab = h('span', { class: 'meta status-jawab' });
    const pillTempo = h('span', { class: 'pill-tempo' });
    function gambarProgres() {
      const st = hitungStatus(); const pIsi = st.n ? st.isi / st.n * 100 : 0; const pRagu = st.n ? st.ragu / st.n * 100 : 0; const laju = persenLaju();
      progres.replaceChildren(h('span', { class: 'isi', style: '--p:' + (Math.round(pIsi * 10) / 10) }), h('span', { class: 'ragu', 'data-st': 'ragu', style: '--p:' + (Math.round(pRagu * 10) / 10) }), laju != null ? h('span', { class: 'laju', style: '--p:' + (Math.round(laju * 10) / 10) + ';left:' + (Math.round(laju * 10) / 10) + '%', title: 'Laju yang dibutuhkan' }) : null);
      const sisa = a.tanpaWaktu ? Infinity : sisaDetik();
      statusJawab.textContent = 'Terjawab ' + st.terjawab + ' · Ragu ' + st.ragu + (sisa <= 300 || tinjau ? ' · Tidak dijawab ' + st.kosong : '');
      // pengingat tempo (SM-6) sebagai pill tenang di bar, bukan paragraf di atas soal
      const posisiPct = (a.posisi + 1) / st.n * 100; const tertinggal = laju != null && st.n >= 20 && laju - posisiPct > Math.max(8, 8 / a.menit * 100);
      pillTempo.replaceChildren(tertinggal ? UKP.c.pill('di belakang laju', 'warn', 'jam') : null);
    }
    function gambarBar() {
      const id = a.soalIds[a.posisi]; const so = K.soal(id); const sisa = sisaDetik();
      const posTinjau = tinjau ? tinjau.indexOf(a.posisi) : -1;
      const sempit = window.innerWidth < 600;
      tersimpanTeks.className = sempit ? 'visually-hidden' : ''; // HP: cukup ikon cek (teks tetap dibacakan)
      const judulBar = h('span', { class: 'small', style: { fontWeight: 600, fontFamily: 'var(--font-ui)' } }, 'Soal ' + (a.posisi + 1) + ' dari ' + a.soalIds.length + (so ? ' · ' + so.kode : ''), tinjau ? [' ', UKP.c.pill('tinjau ragu ' + (posTinjau + 1) + '/' + tinjau.length, 'warn', 'flag')] : null);
      const statusBar = h('span', { style: { display: 'flex', flexWrap: 'wrap', gap: '2px 12px', alignItems: 'center', minWidth: '0', fontFamily: 'var(--font-ui)' } }, tersimpanEl, statusJawab, pillTempo);
      const timerEl = a.tanpaWaktu ? h('span', { class: 'timer', 'aria-label': 'Tanpa batas waktu' }, '∞') : h('span', null, h('span', { class: 'timer', role: 'timer', 'aria-label': 'Sisa waktu', 'data-sisa': sisa <= 300 ? 'sedikit' : null }, U.jam(sisa)), ' ', h('span', { class: 'sisa tiny', hidden: sisa > 300 ? true : null }, sisa > 300 ? null : 'Sisa < 5 mnt'));
      const tombolBar = h('div', { class: 'btn-row ujian-bar-kanan', style: { flexWrap: 'nowrap', justifyContent: 'flex-end' } }, tinjau ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => { tinjau = null; gambar(false); UKP.umumkan('Mode tinjau ragu selesai.'); } }, 'Selesai tinjau') : null,
        lebar ? null : h('button', { type: 'button', class: 'btn btn-sm', 'aria-keyshortcuts': 'G', onclick: bukaDaftar }, 'Daftar soal'), h('button', { type: 'button', class: 'btn btn-sm', onclick: ringkasanKirim }, sempit ? 'Kirim' : 'Selesai dan kirim'));
      // HP: baris 1 = nomor soal + timer; baris 2 = status simpan/jawab + tombol; desktop: tiga zona dalam satu baris
      bar.replaceChildren(...(sempit
        ? [h('div', { class: 'ujian-bar-kiri', style: { flex: '1 1 auto', minWidth: '0' } }, judulBar), h('div', { class: 'ujian-bar-tengah', style: { flex: 'none' } }, timerEl), h('div', { class: 'ujian-bar-bawah', style: { flex: '1 1 100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', minWidth: '0' } }, statusBar, tombolBar)]
        : [h('div', { class: 'ujian-bar-kiri stack-sm', style: { gap: '0', minWidth: '0' } }, judulBar, statusBar), h('div', { class: 'ujian-bar-tengah', style: { textAlign: 'center' } }, timerEl), tombolBar]),
        progres);
      gambarProgres();
    }
    // grid nomor per kelompok; cocok(id) menyaring (mis. hanya kosong/ragu). Legenda dibuat terpisah (legendaNomor) di luar wadah gulir.
    function bangunGrid(wadah, cocok, onPilih) {
      const kel = {}; a.soalIds.forEach((id, i) => { if (cocok && !cocok(id)) return; const k = id.split('-')[0]; (kel[k] = kel[k] || []).push(i); });
      if (!Object.keys(kel).length) { wadah.appendChild(UKP.c.kosong('Tidak ada soal pada saringan ini', null, null, { ringkas: true })); return; }
      for (const k in kel) {
        const n = kel[k].length; const nIsi = kel[k].filter(i => a.jawaban[a.soalIds[i]]).length;
        // satu wadah per kelompok: kop lengket hanya selama kelompoknya tampak (kop berikutnya mendorongnya keluar, tidak bertumpuk)
        wadah.append(h('div', { class: 'kelompok-nomor' }, h('div', { class: 'kop-kelompok', style: { position: 'sticky', top: '0', zIndex: '1', background: 'var(--surface)', padding: '8px 0 6px', display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '.8125rem', fontWeight: '600', color: 'var(--ink)' } }, h('span', { title: k + ' · ' + K.namaKelompok(k), style: { minWidth: '0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, k + ' · ' + K.namaKelompok(k)), h('span', { class: 'meta', style: { flex: 'none', fontVariantNumeric: 'tabular-nums' } }, nIsi + '/' + n)),
          h('div', { class: 'grid-nomor', style: { gridTemplateColumns: 'repeat(5, 40px)', gap: '6px' } }, kel[k].map(i => { const id = a.soalIds[i]; const st = stSoal(id); return h('button', { type: 'button', style: { position: 'relative' }, 'data-st': st, 'aria-current': i === a.posisi ? 'true' : null, 'aria-label': 'Soal ' + (i + 1) + (st === 'ragu' ? ', ragu' : st === 'isi' ? ', terjawab' : ', kosong') + (i === a.posisi ? ', soal saat ini' : ''), onclick: () => onPilih(i) }, i + 1); }))));
      }
    }
    function legendaNomor(kelas) { return h('div', { class: kelas || 'legenda' }, h('span', { 'data-st': 'kosong' }, 'belum dijawab'), h('span', { 'data-st': 'isi' }, 'terjawab'), h('span', { 'data-st': 'ragu' }, 'ragu'), h('span', { 'data-st': 'kini' }, 'saat ini')); }
    function gambarGrid() {
      if (!lebar) return;
      const st = hitungStatus(); hitungPanel.textContent = 'Terjawab ' + st.terjawab + ' dari ' + st.n;
      const gulir = daftarNomor.scrollTop; daftarNomor.replaceChildren();
      bangunGrid(daftarNomor, null, i => ke(i, true));
      if (gulir) daftarNomor.scrollTop = gulir;
    }
    function bukaDaftar() {
      let saring = null; const chips = h('div', { class: 'chip-row', role: 'group', 'aria-label': 'Saring daftar soal' }); const isi = h('div', null);
      const dlg = UKP.dialog({ judul: 'Daftar soal', sheet: true, isi: () => h('div', { class: 'stack' }, chips, isi, legendaNomor('legenda lengket')) });
      function gambarDaftar(fokusChip) {
        const nK = a.soalIds.filter(id => !a.jawaban[id]).length; const nR = a.ragu.length;
        const SARING = { kosong: id => !a.jawaban[id], ragu: id => a.ragu.includes(id) };
        chips.replaceChildren([[null, 'Semua'], ['kosong', 'Tidak dijawab ' + nK], ['ragu', 'Ragu ' + nR]].map(([v, l]) => h('button', { type: 'button', class: 'chip', 'aria-pressed': String(saring === v), onclick: () => { saring = v; gambarDaftar(true); } }, l)));
        isi.innerHTML = ''; bangunGrid(isi, saring ? SARING[saring] : null, i => { dlg.close('pilih'); ke(i); });
        if (fokusChip) { const c = chips.querySelector('[aria-pressed="true"]'); if (c) c.focus(); }
      }
      gambarDaftar(false);
    }
    function aturRagu(id) {
      const i = a.ragu.indexOf(id); if (i >= 0) a.ragu.splice(i, 1); else a.ragu.push(id); simpan();
      const on = a.ragu.includes(id);
      if (a.tim && a.tim.room) kirimJawabanRoom(a, id, { k: on ? 'ragu' : null }); // v8.2 progres di ruang ujian pemandu
      const b = kiri.querySelector('.btn-ragu'); if (b) b.setAttribute('aria-pressed', String(on));
      gambarGrid(); gambarProgres(); live.textContent = on ? 'Soal ' + (a.posisi + 1) + ' ditandai ragu.' : 'Tanda ragu soal ' + (a.posisi + 1) + ' dilepas.';
    }
    const berikutnya = () => {
      if (tinjau) { const j = tinjau.indexOf(a.posisi); const lanjut = tinjau.slice(j + 1).find(i => a.ragu.includes(a.soalIds[i])); if (lanjut != null) { ke(lanjut); return; } tinjau = null; ringkasanKirim(); return; }
      if (a.posisi < a.soalIds.length - 1) ke(a.posisi + 1); else ringkasanKirim();
    };
    function gambar(fokusDiGrid) {
      gambarBar(); gambarGrid(); kiri.innerHTML = '';
      const id = a.soalIds[a.posisi]; const so = K.soal(id);
      if (!so) { kiri.append(h('h1', null, 'Soal ' + (a.posisi + 1)), h('p', null, 'Soal tidak ditemukan.')); return; }
      // fokus: judul tersembunyi di atas soal (diteruskan A–D oleh komponen soal); klik grid nomor mempertahankan fokus di grid
      const el = UKP.c.soal(so, { mode: 'ujian', fokus: fokusDiGrid ? false : undefined, nomor: (a.posisi + 1) + '/' + a.soalIds.length, jawabanAwal: a.jawaban[id] || null, onPilih: k => { a.jawaban[id] = k; simpan(); gambarGrid(); gambarProgres(); if (a.tim && a.tim.room) kirimJawabanRoom(a, id, { o: k }); } });
      // nomor soal sudah ada di bar ujian; kop cukup kelompok materi (tanpa id soal, seperti CAT)
      const kopEl = el.querySelector('.soal-kop'); if (kopEl && kopEl.firstElementChild) { kopEl.firstElementChild.textContent = so.kode + ' · ' + K.namaKelompok(so.kode); if (kopEl.children.length > 1) kopEl.lastElementChild.remove(); }
      // catatan verifikasi/riset tidak tampil di layar ujian (P3-03 juga menjaminnya di soal.js; ini penjaga ganda)
      if (so.peringatan) Array.from(el.querySelectorAll('div, details, p')).forEach(x => { if (x.isConnected && !x.closest('.opsi, fieldset') && !x.querySelector('.opsi, fieldset, h1, h2') && (x.textContent || '').includes(String(so.peringatan).slice(0, 40))) x.remove(); });
      const ragu = a.ragu.includes(id); const akhir = !tinjau && a.posisi >= a.soalIds.length - 1;
      const nav = h('div', { class: 'sticky-actions nav-ujian' },
        // HP: "Sebelumnya" cukup ikon agar tiga tombol muat satu baris dan opsi tidak tertutup (D5)
        h('button', { type: 'button', class: 'btn', disabled: a.posisi === 0, 'aria-keyshortcuts': 'ArrowLeft K', 'aria-label': window.innerWidth < 600 ? 'Sebelumnya' : null, style: window.innerWidth < 600 ? { flex: 'none' } : null, onclick: () => ke(a.posisi - 1) }, UKP.icon('back'), window.innerWidth < 600 ? null : 'Sebelumnya'),
        h('button', { type: 'button', class: 'btn btn-ragu', 'aria-pressed': String(ragu), 'aria-keyshortcuts': 'R', onclick: () => aturRagu(id) }, UKP.icon('flag'), 'Ragu-ragu'),
        h('button', { type: 'button', class: 'btn btn-primary', style: lebar ? { marginLeft: 'auto' } : null, 'aria-keyshortcuts': 'ArrowRight J', onclick: berikutnya }, akhir ? 'Ringkasan' : tinjau ? 'Ragu berikutnya' : 'Berikutnya', UKP.icon(akhir ? 'check' : 'chevron-kanan')));
      kiri.append(h('h1', { class: 'visually-hidden' }, 'Soal ' + (a.posisi + 1) + ' dari ' + a.soalIds.length), el, nav);
      window.scrollTo({ top: 0 });
    }
    function tick() {
      if (a.tanpaWaktu || terkirim) return;
      const sisa = sisaDetik();
      const t = bar.querySelector('.timer'); if (t) { t.textContent = U.jam(sisa); if (sisa <= 300) { t.dataset.sisa = 'sedikit'; const sp = bar.querySelector('.sisa'); if (sp) { sp.textContent = 'Sisa < 5 mnt'; sp.hidden = false; } } }
      for (const m of [600, 300, 60]) if (sisa <= m && sisa > 0 && !diumumkan[m]) { diumumkan[m] = true; live.textContent = 'Sisa ' + (m / 60) + ' menit.'; }
      // penanda laju bergerak tiap menit; pengingat tempo dibacakan sekali per 3 kesempatan
      if (sisa % 60 === 0 || sisa === 300) { gambarProgres(); if (pillTempo.firstChild && Object.keys(diumumkan).filter(k => k.startsWith('pace')).length < 3 && !diumumkan['pace' + a.posisi]) { diumumkan['pace' + a.posisi] = true; live.textContent = 'Anda di belakang laju yang dibutuhkan. Pertimbangkan menandai ragu dan lanjut.'; } }
      if (sisa <= 0) waktuHabis();
    }
    function waktuHabis() {
      clearInterval(timer); if (terkirim) return;
      const nJawab = Object.keys(a.jawaban).length;
      const pesan = nJawab ? 'Waktu habis. Jawaban dikirim otomatis.' : 'Waktu habis tanpa jawaban. Simulasi tidak dinilai.';
      // wilayah assertive global tetap ada setelah pindah ke halaman hasil
      const la = document.getElementById('live-assertive'); if (la) la.textContent = pesan; else { live.setAttribute('aria-live', 'assertive'); live.textContent = pesan; }
      if (nJawab) { setTimeout(() => kirim(true), 50); return; }
      // kedaluwarsa tanpa jawaban: tidak dicatat; halaman Simulasi menawarkan Buang
      terkirim = true; document.querySelectorAll('dialog[open]').forEach(d => d.close('auto')); catatWaktu(); UKP.store.save(); UKP.store.flush(); tokenPenjaga = null;
      setTimeout(() => { delete document.body.dataset.mode; UKP.go('simulasi', {}, { replace: true }); }, 50);
    }
    // dialog kirim (P4-02, K-17): judul berangka, tiga stat, tautan tinjau, satu kalimat risiko bernada warn;
    // kaki = "Kembali ke soal" (aman, autofocus) lalu satu tombol berisi "Kirim dan akhiri" paling kanan
    function ringkasanKirim() {
      catatWaktu(); simpan();
      const st = hitungStatus(); const kosongIds = a.soalIds.filter(id => !a.jawaban[id]); const pertama = kosongIds.length ? a.soalIds.indexOf(kosongIds[0]) : -1;
      const raguIdx = a.soalIds.map((id, i) => a.ragu.includes(id) ? i : -1).filter(i => i >= 0);
      const aman = !kosongIds.length && !raguIdx.length;
      const tile = (label, n, nada) => h('div', { class: 'stat' }, h('span', { class: 'label' }, label), h('span', { class: 'nilai', style: nada ? { color: 'var(--' + nada + ')', fontWeight: '600' } : null }, String(n)));
      UKP.dialog({ judul: 'Kirim ' + st.terjawab + ' dari ' + st.n + ' jawaban?', tanpaTutup: true, closedby: 'none', describedby: 'kirim-desk',
        isi: dlg => h('div', { class: 'stack' }, h('div', { class: 'pita-stat grid-3' }, tile('Terjawab', st.terjawab), tile('Tidak dijawab', kosongIds.length, kosongIds.length ? 'warn' : null), tile('Ragu', raguIdx.length)),
          raguIdx.length || kosongIds.length ? h('div', { class: 'btn-row tautan-kirim' },
            raguIdx.length ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => { dlg.close('tinjau'); tinjau = raguIdx; ke(raguIdx[0]); UKP.umumkan('Tinjau ' + raguIdx.length + ' soal ragu. Berikutnya melompat ke soal ragu berikutnya.'); } }, UKP.icon('flag', null, true), 'Tinjau ' + raguIdx.length + ' ragu') : null,
            kosongIds.length ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => { dlg.close('ke'); ke(pertama); } }, UKP.icon('chevron-kanan', null, true), 'Ke soal kosong pertama (no. ' + (pertama + 1) + ')') : null) : null,
          h('p', { id: 'kirim-desk', class: 'small', style: { display: 'flex', gap: '8px', alignItems: 'flex-start', margin: '0' } }, kosongIds.length ? h('span', { 'aria-hidden': 'true', style: { display: 'inline-grid', color: 'var(--warn)', marginTop: '2px', flex: 'none' } }, UKP.icon('peringatan', null, true)) : null,
            h('span', null, (kosongIds.length ? kosongIds.length + ' soal tidak dijawab akan dinilai salah. ' : '') + 'Jawaban tidak dapat diubah setelah dikirim.'))),
        kaki: dlg => [h('button', { type: 'button', class: 'btn', autofocus: true, onclick: () => dlg.close('batal') }, 'Kembali ke soal'),
          h('button', { type: 'button', class: aman ? 'btn btn-primary' : 'btn btn-danger btn-attn isi', onclick: () => { dlg.close('ya'); kirim(false); } }, 'Kirim dan akhiri')] });
    }
    function kirim(otomatis) {
      if (terkirim || UKP.store.get().simulasiAktif !== a) return; terkirim = true; // cegah kiriman ganda (waktu habis saat dialog terbuka)
      document.querySelectorAll('dialog[open]').forEach(d => d.close('auto'));
      clearInterval(timer); catatWaktu(); tokenPenjaga = null; // entri penjaga diganti halaman hasil
      const rekam = nilaiDanRekam(a, otomatis);
      delete document.body.dataset.mode;
      UKP.go('simulasi', { hasil: rekam.id }, { replace: true });
    }
    // pintasan CAT (SM-2): ← → / J K soal, R ragu, G daftar soal. Diabaikan saat mengetik, dialog terbuka, atau pintasan dimatikan;
    // panah di dalam grup opsi tetap memindah pilihan (perilaku radio bawaan)
    const onKey = e => {
      if (!terpasang || terkirim || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      if (document.querySelector('dialog[open]') || mengetik(e.target)) return;
      const k = e.key; const huruf = (k || '').toLowerCase();
      const radio = e.target && e.target.type === 'radio';
      if ((k === 'ArrowLeft' || k === 'ArrowRight') && radio) return;
      const satu = huruf === 'j' || huruf === 'k' || huruf === 'r' || huruf === 'g';
      if (satu && UKP.store.get().pengaturan.pintasan === false) return;
      if (k === 'ArrowLeft' || huruf === 'k') { if (a.posisi > 0) { e.preventDefault(); ke(a.posisi - 1); } }
      else if (k === 'ArrowRight' || huruf === 'j') { e.preventDefault(); berikutnya(); }
      else if (huruf === 'r') { e.preventDefault(); aturRagu(a.soalIds[a.posisi]); }
      else if (huruf === 'g') { e.preventDefault(); if (lebar) { const b = kanan.querySelector('[aria-current="true"]') || kanan.querySelector('button'); if (b) { b.focus(); try { b.scrollIntoView({ block: 'nearest' }); } catch (er) {} } } else bukaDaftar(); }
    };
    document.addEventListener('keydown', onKey);
    // penjaga tombol Kembali browser: entri riwayat tambahan (penjaga) di atas entri ujian, keduanya bertoken sama.
    // Saat penjaga di-pop, router merender ulang layar ini di entri ujian bertoken itu → minta konfirmasi keluar.
    function pasangPenjaga() {
      try {
        const t = U.id('pj'); const dasar = Object.assign({ view: 'simulasi', params: { jalan: true } }, history.state || {}); delete dasar.penjaga;
        history.replaceState(Object.assign({}, dasar, { ujianToken: t }), '', location.hash);
        history.pushState(Object.assign({}, dasar, { ujianToken: t, penjaga: true }), '', location.hash);
        tokenPenjaga = t;
      } catch (e) {}
    }
    async function tanyaKeluar() {
      if (!terpasang || terkirim) return;
      const keluar = await UKP.konfirmasi('Keluar dari simulasi?', 'Waktu tetap berjalan. Jawaban yang sudah diisi tersimpan dan bisa dilanjutkan dari halaman Simulasi.', { ya: 'Keluar', tidak: 'Lanjutkan ujian' });
      if (!terpasang || terkirim) return; // sudah berpindah halaman selama dialog terbuka
      if (keluar) { tokenPenjaga = null; catatWaktu(); simpan(); UKP.store.flush(); delete document.body.dataset.mode; const sebelum = !!(history.state && history.state.params && history.state.params.dariPraUjian); if (sebelum && history.length > 1) history.back(); else UKP.go('simulasi', {}, { replace: true }); }
      else { try { history.pushState(Object.assign({}, history.state || { view: 'simulasi', params: { jalan: true }, ujianToken: tokenPenjaga }, { penjaga: true }), '', location.hash); } catch (e) {} }
    }
    gambar(); tandaiTersimpan(); timer = setInterval(tick, 1000);
    const st0 = history.state || {};
    if (st0.penjaga) tokenPenjaga = st0.ujianToken || null;                       // muat ulang/maju ke entri penjaga
    else if (st0.ujianToken && st0.ujianToken === tokenPenjaga) setTimeout(tanyaKeluar, 0); // penjaga baru di-pop (Kembali)
    else pasangPenjaga();
    const onVis = () => { if (document.hidden) { catatWaktu(); simpan(); UKP.store.flush(); } };
    document.addEventListener('visibilitychange', onVis);
    // v8.2: ujian dari room mengikuti jam pemandu (Tambah 5 menit di laptop pemandu menggeser batas waktu di HP)
    let lepasState = null;
    if (a.tim && a.tim.room && UKP.ruang && typeof UKP.ruang.on === 'function') {
      try { lepasState = UKP.ruang.on('state', st => { const ak = st && st.aktivitas; if (!terpasang || terkirim || !ak || ak.jenis !== 'ujian' || ak.id !== a.tim.ujianId) return;
        let sel = 0; try { sel = Number(UKP.ruang.selisihJam()) || 0; } catch (e) {} const baru = ak.akhir - sel;
        if (isFinite(baru) && Math.abs(baru - a.akhir) > 2000 && baru > Date.now()) { a.akhir = baru; simpan(); tick(); } }); } catch (e) { lepasState = null; }
    }
    return { node: page, unmount: () => { terpasang = false; clearInterval(timer); if (lepasState) { try { lepasState(); } catch (e) {} } document.removeEventListener('visibilitychange', onVis); document.removeEventListener('keydown', onKey); if (!terkirim && UKP.store.get().simulasiAktif === a) { catatWaktu(); UKP.store.save(); UKP.store.flush(); } delete document.body.dataset.mode; } };
  }

  // ================= HASIL & ULAS =================
  // jenis ulas (P4-04): saling lepas. salah = dijawab tetapi keliru · kosong = tidak dijawab · ragu = ditandai ragu dan benar · semua
  function tingkatUlas(r) {
    const benar = id => r.jawaban[id] === (K.soal(id) || {}).kunci;
    return {
      salah: r.soalIds.filter(id => r.jawaban[id] && !benar(id)),
      kosong: r.soalIds.filter(id => !r.jawaban[id]),
      ragu: r.soalIds.filter(id => (r.ragu || []).includes(id) && benar(id)),
      semua: r.soalIds.slice(),
    };
  }
  const LABEL_ULAS = { salah: 'Salah dijawab', kosong: 'Tidak dijawab', ragu: 'Ragu tapi benar', semua: 'Semua' };
  const PENDEK_ULAS = { salah: 'Salah', kosong: 'Tidak dijawab', ragu: 'Ragu', semua: 'Semua' };
  // panel aksi baris topik: ulas soal topik ini / latih 10
  function aksiTopikHasil(r, topik, idsTopik) {
    const t = K.topik(topik) || { id: topik, judul: '' };
    const nBenar = idsTopik.filter(id => r.jawaban[id] === (K.soal(id) || {}).kunci).length; const nKosong = idsTopik.filter(id => !r.jawaban[id]).length; const nSalah = idsTopik.length - nBenar - nKosong;
    const jenis = nSalah ? 'salah' : nKosong ? 'kosong' : 'semua'; const nUlas = nSalah || nKosong || idsTopik.length;
    UKP.dialog({ judul: t.id + (t.judul ? ' · ' + t.judul : ''), ukuran: 'sm', isi: () => h('div', { class: 'stack-sm' }, h('p', { class: 'meta' }, [nBenar + ' benar', nSalah ? nSalah + ' salah' : null, nKosong ? nKosong + ' tidak dijawab' : null].filter(Boolean).join(' · ') + ' dari ' + idsTopik.length + ' soal'), h('p', { class: 'small muted' }, 'Ulas pembahasan soal topik ini dari simulasi, atau latih 10 soal baru.')),
      kaki: dlg => [h('button', { type: 'button', class: 'btn', onclick: () => { dlg.close(); UKP.go('simulasi', { hasil: r.id, ulas: jenis, topik }); } }, UKP.icon('mata'), 'Ulas ' + nUlas + ' soal'),
        K.topik(topik) ? h('button', { type: 'button', class: 'btn btn-primary', autofocus: true, onclick: () => { dlg.close(); UKP.go('latih', { topik, kode: t.kode, n: 10, mulai: true }); } }, UKP.icon('pen'), 'Latih 10 soal topik ini') : null] });
  }
  function layarHasil(id) {
    const s = UKP.store.get(); const r = s.simulasi.find(x => x.id === id);
    if (!r) return h('div', { class: 'page' }, UKP.c.kop({ crumbs: [{ teks: 'Simulasi', view: 'simulasi' }], judul: 'Hasil tidak ditemukan' }), UKP.c.kosong('Rekaman simulasi ini tidak ada di perangkat ini', 'Mungkin sudah terhapus atau berasal dari perangkat lain.', UKP.link('Ke Simulasi', 'simulasi', null, 'btn btn-sm'), { ikon: 'sim' }));
    const page = h('div', { class: 'page lebar halaman-hasil' }); const lulus = r.skor >= 60;
    const durasi = Math.max(1, Math.round(((r.selesai || Date.now()) - r.mulai) / 60000));
    page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Simulasi', view: 'simulasi' }, { teks: 'Hasil' }], judul: 'Hasil simulasi ' + labelSim(r),
      meta: r.otomatis || r.terbagi ? [r.otomatis ? UKP.c.pill('dikirim otomatis saat waktu habis', 'warn') : null, r.terbagi ? UKP.c.pill('bagian ' + r.terbagi + ', bukan ukuran stamina', 'nila') : null] : null }));
    if (r.tim) page.appendChild(kartuKirimTim(r));
    const butuh = Math.ceil(r.total * .6); const tingkat = tingkatUlas(r);
    const nSalah = tingkat.salah.length; const nKosong = tingkat.kosong.length; const kurang = Math.max(0, butuh - r.benar);
    // stempel "diraih" sekali per hasil (sesi ini)
    let sudahLihat = []; try { sudahLihat = JSON.parse(sessionStorage.getItem('ukp.hasilDilihat') || '[]'); } catch (e) {}
    const pertamaKali = !sudahLihat.includes(r.id); if (pertamaKali) { try { sessionStorage.setItem('ukp.hasilDilihat', JSON.stringify(sudahLihat.concat(r.id).slice(-30))); } catch (e) {} }
    // D4: hasil jujur. Bila lebih dari separuh soal tidak dijawab, skor bukan cermin kemampuan
    if (nKosong * 2 > r.total) page.appendChild(UKP.c.banner('Simulasi dikirim dengan ' + nKosong + ' soal tidak dijawab, jadi hasil ini belum mencerminkan kemampuan Anda. ' + (r.tanpaWaktu ? 'Ulangi saat ada waktu luang.' : 'Ulangi saat ada waktu ' + r.menit + ' menit.'), 'info'));
    const metaSkor = [UKP.fmt.tanggal(U.iso(new Date(r.selesai))), r.total + ' soal' + (r.format === 'UKP' ? ' (format perkiraan)' : ''), r.tanpaWaktu ? 'tanpa batas waktu' : 'waktu terpakai ' + Math.min(durasi, r.menit) + ' dari ' + r.menit + ' mnt'].join(' · ');
    const rincian = [r.benar + ' benar', nSalah + ' salah', nKosong ? nKosong + ' tidak dijawab' : null].filter(Boolean).join(' · ') + (r.total === 100 ? '' : ' · skor = persen soal benar');
    const kartuSkor = h('section', { class: 'card kartu-skor', 'aria-labelledby': 'hasil-skor-j' },
      h('div', { class: 'card-head' }, h('div', { class: 'card-head-teks' }, h('h2', { class: 'card-title', id: 'hasil-skor-j' }, 'Skor'), h('p', { class: 'card-meta' }, metaSkor)),
        h('div', { class: 'card-head-kanan' }, UKP.c.stempel(lulus ? 'MEMENUHI BATAS 60' : 'BELUM LULUS', lulus ? 'ok' : 'attn', { besar: true, diraih: pertamaKali }))),
      h('p', { class: 'skor-angka', style: { margin: '0' } }, h('span', { class: 'angka', 'data-hitung': String(r.skor), 'data-desimal': r.skor % 1 ? '1' : null }, fmtSkor(r.skor)), h('span', { class: 'satuan' }, '/100')),
      UKP.c.progress({ nilai: r.skor, maks: 100, acuan: 60, nada: lulus ? 'ok' : 'attn', ariaLabel: 'Skor simulasi', valuetext: fmtSkor(r.skor) + ' dari 100; batas 60' }),
      h('p', { class: 'meta' }, rincian),
      h('p', null, lulus ? 'Memenuhi batas 60 pada simulasi ini. Ulangi dalam 1–2 minggu untuk memastikan hasilnya konsisten.' : 'Kurang ' + kurang + ' soal benar dari batas 60.' + (nKosong && nKosong * 2 <= r.total ? ' ' + nKosong + ' soal tidak dijawab.' : '')));
    // per kelompok, terlemah dulu
    const dijawabKel = {}; r.soalIds.forEach(sid => { if (r.jawaban[sid]) { const k = (K.soal(sid) || {}).kode; if (k) dijawabKel[k] = (dijawabKel[k] || 0) + 1; } });
    const rows = Object.entries(r.perKel).map(([k, v]) => { const pct = v.total ? Math.round(v.benar / v.total * 100) : 0; const anggaran = r.menit * (v.total / r.total); const pakai = (r.detikKel && r.detikKel[k] || 0) / 60; return { k, v, pct, anggaran, pakai, dijawab: dijawabKel[k] || 0 }; }).sort((a, b) => a.pct - b.pct || b.v.total - a.v.total);
    // langkah berikutnya (K-07): satu primer
    const lemah = rows.find(x => x.dijawab) || rows[0];
    const menitUlas = n => '± ' + Math.max(2, Math.round(n * 1.5)) + ' mnt';
    const daftarLangkah = langkahBerikut([
      nSalah ? { judul: 'Ulas ' + nSalah + ' jawaban salah', meta: menitUlas(nSalah), aksi: { teks: 'Ulas', view: 'simulasi', params: { hasil: r.id, ulas: 'salah' }, gaya: 'primer' } }
        : nKosong ? { judul: 'Lihat ' + nKosong + ' soal tidak dijawab', meta: 'pembahasan lengkap', aksi: { teks: 'Lihat', view: 'simulasi', params: { hasil: r.id, ulas: 'kosong' }, gaya: 'primer' } }
          : { judul: 'Ulas ' + r.total + ' soal', meta: 'semua jawaban benar', aksi: { teks: 'Ulas', view: 'simulasi', params: { hasil: r.id, ulas: 'semua' }, gaya: 'primer' } },
      lemah ? { judul: 'Latih 10 soal ' + lemah.k, meta: rows.length > 1 ? 'kelompok terlemah' : K.namaKelompok(lemah.k), aksi: { teks: 'Latih', view: 'latih', params: { kode: lemah.k, n: 10, mulai: true } } } : null,
      { judul: 'Buat rencana dari hasil ini', aksi: { teks: 'Buat rencana', view: 'rencana', gaya: 'hantu' } },
    ], { label: 'Langkah berikutnya' }); daftarLangkah.classList.add('ringkas');
    const sectLangkah = sect({ id: 'hasil-lanjut-j', judul: 'Langkah berikutnya', isi: daftarLangkah });
    const tblKel = h('table', { class: 'tabel' }, h('caption', { class: 'visually-hidden' }, 'Hasil per kelompok, terlemah dulu'),
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Kelompok'), h('th', { scope: 'col', class: 'num' }, 'Benar'), h('th', { scope: 'col', style: { minWidth: '9rem' } }, 'Skor'), r.tanpaWaktu ? null : h('th', { scope: 'col', class: 'num' }, 'Waktu terpakai'), h('th', { scope: 'col', class: 'aksi' }, h('span', { class: 'visually-hidden' }, 'Aksi')))),
      h('tbody', null, rows.map(x => h('tr', null, h('th', { scope: 'row' }, h('span', { class: 'kode' }, x.k), ' ', h('span', { class: 'small' }, K.namaKelompok(x.k))), h('td', { class: 'num' }, x.v.benar + '/' + x.v.total),
        h('td', null, h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, barMini(x.pct, { tahap: x.dijawab ? null : 'awal', label: x.dijawab ? 'Skor ' + x.k + ': ' + x.pct + ' dari 100, batas 60' : x.k + ': tidak dijawab' }),
          x.dijawab ? h('span', { class: 'mono small', style: { minWidth: '3.5ch', textAlign: 'right', fontWeight: 600, color: x.pct < 60 ? 'var(--attn)' : null } }, String(x.pct)) : h('span', { class: 'meta' }, 'tidak dijawab'))),
        r.tanpaWaktu ? null : h('td', { class: 'num small', style: { whiteSpace: 'nowrap' } }, Math.round(x.pakai) + ' dari ' + Math.round(x.anggaran) + ' mnt'),
        h('td', { class: 'aksi' }, h('button', { type: 'button', class: 'icon-btn sm', 'aria-label': 'Latih 10 soal ' + x.k, 'data-tip': 'Latih 10 soal ' + x.k, onclick: () => UKP.go('latih', { kode: x.k, n: 10, mulai: true }) }, UKP.icon('pen')))))));
    // per topik (P4-01): .daftar-skor terlemah dulu; topik tanpa jawaban = bar putus-putus netral, bukan merah
    const perTopik = {}; r.soalIds.forEach(sid => { const so = K.soal(sid); if (!so) return; const t = perTopik[so.topik] = perTopik[so.topik] || { b: 0, n: 0, isi: 0, ids: [] }; t.n++; t.ids.push(sid); if (r.jawaban[sid]) t.isi++; if (r.jawaban[sid] === so.kunci) t.b++; });
    const topikRows = Object.entries(perTopik).map(([t, v]) => ({ t, v, pct: Math.round(v.b / v.n * 100) })).sort((a, b) => (!a.v.isi - !b.v.isi) || a.pct - b.pct);
    const adaTopik = topikRows.length > 1; let sectTopik = null;
    if (adaTopik) {
      const nBawah = topikRows.filter(x => x.pct < 60).length; const nTanpa = topikRows.filter(x => !x.v.isi).length;
      const baris = topikRows.map(x => { const judul = (K.topik(x.t) || {}).judul || ''; return barisSkorLokal({ kode: x.t, judul, nilai: x.v.isi ? x.pct : null, nadaAngka: x.v.isi && x.pct < 60 ? 'attn' : null,
        labelBar: x.v.isi ? x.pct + ' dari 100, batas 60' : 'tidak dijawab', label: x.t + ' ' + judul + ': ' + (x.v.isi ? x.v.b + ' dari ' + x.v.n + ' benar' : x.v.n + ' soal tidak dijawab') + '. Buka pilihan ulas atau latih.', onclick: () => aksiTopikHasil(r, x.t, x.v.ids) }); });
      sectTopik = sect({ id: 'hasil-topik-j', judul: 'Per topik', meta: topikRows.length + ' topik · terlemah dulu', isi: h('div', { class: 'stack-sm' },
        nBawah ? ringkasStatus(nBawah === topikRows.length ? 'Semua ' + nBawah + ' topik di bawah 60' + (nTanpa ? ' (' + nTanpa + ' tidak dijawab sama sekali)' : '') + '. Mulai dari ' + Math.min(5, nBawah) + ' terlemah.' : nBawah + ' dari ' + topikRows.length + ' topik di bawah 60' + (nTanpa ? ' (' + nTanpa + ' tidak dijawab sama sekali)' : '') + '. Mulai dari ' + Math.min(5, nBawah) + ' terlemah.') : null,
        daftarLipat(baris, 5, (sisa, total) => 'Lihat semua ' + total + ' topik')) });
      sectTopik.classList.add('hasil-topik');
    }
    // daftar (HP < 600, dan kolom kanan ≥ 1280 di samping Per topik) atau tabel (600–1279); benar dan waktu terpakai tetap tampil di .meta
    const lebarLayar = window.innerWidth; const daftarKel = lebarLayar < 600 || (lebarLayar >= 1280 && adaTopik);
    const daftarKelHP = daftarKel ? h('ul', { class: 'daftar-skor' }, rows.map(x => barisSkorLokal({ kode: x.k, judul: K.namaKelompok(x.k), nilai: x.dijawab ? x.pct : null, nadaAngka: x.dijawab && x.pct < 60 ? 'attn' : null, labelBar: x.dijawab ? x.pct + ' dari 100, batas 60' : 'tidak dijawab',
      meta: (x.dijawab ? x.v.benar + '/' + x.v.total + ' benar' : x.v.total + ' soal tidak dijawab') + (r.tanpaWaktu ? '' : ' · ' + Math.round(x.pakai) + ' dari ' + Math.round(x.anggaran) + ' mnt'),
      label: x.k + ' ' + K.namaKelompok(x.k) + ': ' + x.v.benar + ' dari ' + x.v.total + ' benar' + (r.tanpaWaktu ? '' : ', waktu terpakai ' + Math.round(x.pakai) + ' dari ' + Math.round(x.anggaran) + ' menit') + '. Latih 10 soal.', view: 'latih', params: { kode: x.k, n: 10, mulai: true } }))) : null;
    const sectKel = sect({ id: 'hasil-kel-j', judul: 'Per kelompok', meta: 'terlemah dulu · batas 60', aksi: UKP.c.salin(() => 'Hasil ' + labelSim(r) + ' (' + fmtSkor(r.skor) + ')\n' + rows.map(x => x.k + '\t' + x.v.benar + '/' + x.v.total + '\t' + x.pct + '%').join('\n'), { ikonSaja: true, label: 'Salin tabel per kelompok', pesan: 'Tabel per kelompok disalin.', kelas: 'icon-btn sm salin-kop' }), isi: daftarKelHP || UKP.c.tabelWrap('Hasil per kelompok', tblKel) });
    sectKel.classList.add('hasil-kel'); { const b = sectKel.querySelector('.salin-kop'); if (b) b.style.marginLeft = 'auto'; }
    // ≥ 1280: skor | langkah dan per topik | per kelompok berdampingan (6 | 6; tanpa per topik 7 | 5) agar halaman hasil ≤ 1.300 px; < 1280 bertumpuk
    page.appendChild(h('div', { class: 'tata hasil-tata' + (adaTopik ? ' dua' : '') }, h('div', { class: 'kl-7' }, kartuSkor), h('div', { class: 'kl-5' }, sectLangkah), sectKel, sectTopik));
    // tren: format, kelompok, dan tingkat yang sama
    const tren = r.format === 'tim' ? [] : s.simulasi.filter(x => x.selesai && x.format === r.format && x.tingkat === r.tingkat && (r.format === 'UKP' || (x.kode || '') === (r.kode || '')) && (x.bagian || null) === (r.bagian || null) && !x.terbagi).slice(-6);
    if (tren.length > 1) page.appendChild(h('section', { class: 'card', 'aria-label': 'Tren skor' }, UKP.viz && UKP.viz.garis ? UKP.viz.garis({ judul: 'Tren terhadap batas 60', sub: tren.length + ' simulasi ' + labelSim(r), titik: tren.map(x => ({ x: UKP.fmt.tanggal(U.iso(new Date(x.selesai))).replace(/ \d{4}$/, ''), y: x.skor })), acuan: 60, acuanLabel: 'batas lulus', labelSeri: 'Skor', kolomLabel: 'Tanggal', kolomNilai: 'Skor' })
      : h('div', { class: 'bar-list' }, tren.map(x => h('div', { class: 'bar-item' }, h('span', { class: 'nama' }, UKP.fmt.tanggal(U.iso(new Date(x.selesai)))), h('div', { class: 'bar', 'data-pita': U.pita(x.skor), 'aria-hidden': 'true' }, h('span', { style: { width: Math.min(100, x.skor) + '%' } })), h('span', { class: 'nilai' }, UKP.fmt.angka(x.skor, 0)))))));
    return page;
  }
  // ---------- ulas berjenjang (mode tersendiri; Kembali memulihkan posisi gulir hasil) ----------
  const posisiUlas = {};
  const pahamUlas = new Set();
  function layarUlas(idHasil, jenis, params) {
    const s = UKP.store.get(); const r = s.simulasi.find(x => x.id === idHasil);
    if (!r) return layarHasil(idHasil);
    const semua = tingkatUlas(r); const topik = params.topik || null;
    const saring = ids => topik ? ids.filter(id => (K.soal(id) || {}).topik === topik) : ids;
    const TAB = ['salah', 'kosong', 'ragu', 'semua'];
    let aktif = TAB.includes(jenis) ? jenis : (TAB.find(t => saring(semua[t]).length) || 'semua');
    const page = h('div', { class: 'page halaman-ulas' });
    const keHasil = () => { const st = history.state; if (st && st.view === 'simulasi' && st.params && st.params.ulas && history.length > 1) UKP.kembali(); else UKP.go('simulasi', { hasil: r.id }, { replace: true }); };
    const salahSemua = semua.salah;
    page.appendChild(UKP.c.kop({ crumbs: [{ teks: 'Simulasi', view: 'simulasi' }, { teks: 'Hasil', view: 'simulasi', params: { hasil: r.id } }, { teks: 'Ulas' }], judul: 'Ulas jawaban', eyebrow: labelSim(r) + ' · skor ' + fmtSkor(r.skor),
      meta: topik ? [UKP.c.pill('topik ' + topik, 'nila'), h('button', { type: 'button', class: 'chip', onclick: () => UKP.go('simulasi', { hasil: r.id, ulas: aktif }, { replace: true }) }, 'Semua topik', UKP.icon('x', null, true))] : null,
      aksi: salahSemua.length ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => tambahKeKartu(r, salahSemua) }, UKP.icon('tambah'), 'Tambah semua yang salah ke kartu (' + salahSemua.length + ')') : null }));
    const tabs = UKP.c.tabs({ id: 'ulas', label: 'Jenis ulasan', aktif, tab: TAB.map(k => ({ id: k, label: LABEL_ULAS[k], labelPendek: PENDEK_ULAS[k], hitung: saring(semua[k]).length, nonaktif: !saring(semua[k]).length && k !== aktif })),
      isi: (k, panel) => { aktif = k; return gambarPanel(k, panel); },
      onGanti: k => UKP.perbaruiParams({ ulas: k }, 'simulasi') });
    // Momen 6: tombol "Lanjut ke n soal …" mengganti tab; fokus pindah ke kop soal pertama di panel baru (tombol lama sudah dibuang)
    function lanjutKe(berikut) {
      tabs.pilih(berikut);
      const el = tabs.elPanel; const target = el.querySelector('.soal-kop') || el.querySelector('p[tabindex="-1"]') || el;
      try { (el.firstElementChild || el).scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {}
      (UKP.fokusNanti || UKP.fokus)(target);
    }
    function gambarPanel(k, panel) {
      const ids = saring(semua[k]); const kunci = r.id + '|' + k + '|' + (topik || ''); let idx = U.clamp(posisiUlas[kunci] || 0, 0, Math.max(0, ids.length));
      const wadah = h('div', { class: 'stack' });
      function render(fokus) {
        posisiUlas[kunci] = idx; wadah.replaceChildren();
        if (!ids.length) { wadah.appendChild(UKP.c.kosong('Tidak ada soal di bagian ini', k === 'ragu' ? 'Tidak ada soal yang ditandai ragu dan dijawab benar.' : k === 'kosong' ? 'Semua soal dijawab.' : k === 'salah' ? 'Tidak ada jawaban yang salah.' : 'Bagian ini kosong untuk simulasi ini.', null, { ringkas: true, ikon: 'cek-lingkar' })); return; }
        const prog = UKP.c.progress({ label: LABEL_ULAS[k], nilai: Math.min(idx + 1, ids.length), maks: ids.length, teks: Math.min(idx + 1, ids.length) + ' dari ' + ids.length, ukuran: 'sm', valuetext: 'soal ' + Math.min(idx + 1, ids.length) + ' dari ' + ids.length });
        wadah.appendChild(prog);
        if (idx >= ids.length) {
          // tuntas: tawarkan jenis berikutnya yang berisi
          const berikut = TAB.slice(TAB.indexOf(k) + 1).find(t => t !== 'semua' && saring(semua[t]).length);
          const p = h('p', { tabindex: '-1' }, 'Selesai mengulas ' + ids.length + ' soal (' + LABEL_ULAS[k].toLowerCase() + '). ' + (k === 'salah' ? 'Soal yang keliru sudah masuk Buku Kesalahan.' : ''));
          wadah.append(h('div', { class: 'card stack-sm' }, p, h('div', { class: 'btn-row' }, berikut ? h('button', { type: 'button', class: 'btn btn-primary', onclick: () => lanjutKe(berikut) }, 'Lanjut ke ' + saring(semua[berikut]).length + ' soal ' + LABEL_ULAS[berikut].toLowerCase()) : h('button', { type: 'button', class: 'btn btn-primary', onclick: keHasil }, 'Kembali ke hasil'),
            h('button', { type: 'button', class: 'btn btn-ghost btn-text', onclick: () => { idx = 0; render(true); } }, UKP.icon('atur-ulang'), 'Ulang dari awal'))));
          UKP.fokus(p); return;
        }
        const so = K.soal(ids[idx]); if (!so) { idx++; render(fokus); return; }
        const dipilih = r.jawaban[so.id] || null;
        // hanya baca: langsung terkunci, tanpa Periksa dan tanpa pencatatan jawaban; umpan 4 blok
        const el = UKP.c.soal(so, { mode: 'ujian', hanyaBaca: true, tanpaLog: true, tanpaTutor: true, fokus: false, nomor: 'No. ' + (r.soalIds.indexOf(so.id) + 1), jawabanAwal: dipilih });
        const paham = pahamUlas.has(r.id + '|' + so.id);
        // status: hanya pengecualian (tidak dijawab, ragu, paham). Jawaban Anda dan kunci sudah ditandai di opsi, waktu di umpan (satu rumah per fakta)
        const pillStatus = [!dipilih ? UKP.c.pill('tidak dijawab') : null, (r.ragu || []).includes(so.id) ? UKP.c.pill('ditandai ragu', 'warn', 'flag') : null, paham ? UKP.c.pill('paham', 'nila', 'check') : null].filter(Boolean);
        const status = pillStatus.length ? h('div', { class: 'chip-row' }, pillStatus) : null;
        const btnKartu = h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { const ada = s.kartuOtomatis.some(x => x.soal === so.id || x.id === 'KO-' + so.id); UKP.belajar.kartuOtomatisDariSoal(so, dipilih); UKP.store.save(); btnKartu.disabled = true; btnKartu.replaceChildren(UKP.icon('check'), 'Di dek kartu'); UKP.toast(ada ? 'Soal ini sudah ada di dek kartu.' : 'Kartu ditambahkan ke dek Ulang.', { nada: 'ok' }); } }, UKP.icon('tambah'), 'Jadikan kartu');
        const btnPaham = h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', 'aria-pressed': String(paham), onclick: () => { const kk = r.id + '|' + so.id; if (pahamUlas.has(kk)) pahamUlas.delete(kk); else pahamUlas.add(kk); idx++; render(true); } }, UKP.icon('check'), paham ? 'Sudah paham' : 'Tandai paham');
        // aksi per soal di kaki panel pembahasan; bar lengket hanya Sebelumnya · Berikutnya
        wadah.append(status ? h('div', { class: 'ulas-kop' }, status) : '',
          el, el.querySelector('.umpan') ? null : UKP.c.umpan(so, dipilih || 'kosong', r.detik[so.id] || 0),
          h('div', { class: 'btn-row ulas-kaki' }, btnKartu, btnPaham,
            UKP.store.get().pengaturan.tutorAktif ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost btn-text', onclick: () => UKP.tutor.buka({ soal: so, jawabanPengguna: dipilih, topik: K.topik(so.topik) }) }, UKP.icon('chat'), 'Tanya Tutor') : null),
          h('div', { class: 'sticky-actions nav-ulas' }, h('button', { type: 'button', class: 'btn', disabled: idx === 0, 'aria-label': window.innerWidth < 600 ? 'Sebelumnya' : null, style: window.innerWidth < 600 ? { flex: 'none' } : null, onclick: () => { idx--; render(true); } }, UKP.icon('back'), window.innerWidth < 600 ? null : 'Sebelumnya'),
            h('button', { type: 'button', class: 'btn btn-primary', style: { marginLeft: 'auto' }, onclick: () => { idx++; render(true); } }, idx < ids.length - 1 ? 'Berikutnya' : 'Selesai mengulas', UKP.icon('chevron-kanan'))));
        if (UKP.setKonteksTutor) UKP.setKonteksTutor({ soal: so, jawabanPengguna: dipilih, topik: K.topik(so.topik) });
        if (fokus) { try { wadah.scrollIntoView({ behavior: UKP.gulirHalus(), block: 'start' }); } catch (e) {} UKP.fokus(el.querySelector('.soal-kop') || el); }
      }
      render(panel && panel.isConnected);
      return wadah;
    }
    page.append(tabs.el, tabs.elPanel);
    return page;
  }
})(typeof window !== 'undefined' ? window : globalThis);
